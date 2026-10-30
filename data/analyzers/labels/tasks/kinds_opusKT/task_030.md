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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0030.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00887 | INT. MAYFAIR CORSETRY SHOP - FITTING ROOM - DAY
Detected names (may be incomplete or contain aliases): LADY EUGENIA THORNCROFT, BRIDGET MULVANEY
* 1 A ¶ 1911.
* 2 A Mirrors in gilt frames.
* 3 A A velvet curtain.
* 4 A Fashion plates pinned to the walls.
* 5 A The air is thick with lavender and the smell of hot irons.
6 A ¶ LADY EUGENIA THORNCROFT, 40s, imperious, stands on a small platform in her underthings, arms raised, jaw set.
7 A Her hair is a monument of pins.
8 A ¶ BRIDGET MULVANEY, 20s, the seamstress, kneels at her feet with a mouthful of pins and a tape measure around her neck.
9 A Her sleeves are rolled.
10 A Her knuckles are raw.
11 D BRIDGET (through pins): If you'd just breathe in, my lady.
12 D EUGENIA: I am breathing in.
13 D BRIDGET: Further.
14 D EUGENIA: There is no further.
15 A ¶ Bridget pulls the laces tight.
16 A Eugenia gasps.
17 A They freeze, eye to eye in the mirror, each daring the other to speak first.
18 D EUGENIA [CONT'D] (to the room): Is no one else on duty in this establishment?
* 19 A ¶ No answer.
* 20 A The gas lamp hisses.
21 A Bridget plucks a pin from her mouth.
22 D BRIDGET: It's only me today, my lady. The others went to the suffrage march.
23 D EUGENIA (muttering): Good heavens.
24 A ¶ She turns her head.
25 A She tries to look at her back in the mirror, wobbling on the platform.
26 A Bridget catches her arm.
27 D BRIDGET: Steady.
28 D EUGENIA: Do not touch me.
29 D BRIDGET: You were falling.
30 D EUGENIA: I was NOT.
31 A ¶ She steps down, stiff as a flagpole, and sweeps toward the curtain.
32 A Bridget stands.
33 A She grabs her scissors.
34 A She grips them hard.
35 D BRIDGET: You're not finished, my lady.
36 D EUGENIA: I am entirely finished.
37 D BRIDGET: Then you'll leave with the hem undone.
38 A ¶ Eugenia stops.
39 A She says nothing for a long moment.
40 A Then she turns around and, with great dignity, climbs back onto the platform and raises her arms.
41 D EUGENIA: Proceed.
42 A ¶ Bridget kneels.
43 A She spits a pin into her palm.
44 A She does not smile.
45 A She very nearly does.

### SCENE s00888 | EXT. CORPORATE ROOFTOP - APIARY - MORNING
Detected names (may be incomplete or contain aliases): MARGOT FENWICK, OSKAR LINDGREN, PETRA IONESCU, NEW HIRE, KWAME
* 1 A ¶ Above the thirty-first floor of Halcyon Dynamics, a sea of glass towers glitters in the sun.
* 2 A Between the air-conditioning units and a ruined yoga mat, someone has set up six white beehives in a neat row.
* 3 A Bees drift in lazy loops, indifferent to the quarterly earnings.
4 A ¶ MARGOT FENWICK, 50s, Vice President of People Experience, glides across the gravel in a silk blouse and veil, as perfectly composed as a chess piece.
5 A She carries a clipboard in one hand and a smoking tin in the other.
6 A ¶ OSKAR LINDGREN, 40s, the company beekeeper, whose title on his badge is Chief Pollination Officer, adjusts a hive lid with a wooden tool.
7 A Tall, rumpled, a beard going silver at the edges.
8 A He moves slowly so the bees won't notice him.
9 A ¶ PETRA IONESCU, 30s, Facilities, stands at the roof door with a walkie-talkie, glancing at her watch.
10 A She wears hi-vis over a cardigan.
11 A ¶ A NEW HIRE, 20s, steps out onto the gravel in a brand-new suit still creased from its packaging, a lanyard around his neck and a reusable cup of oat latte in his hand.
12 A He squints at the hives and takes one hesitant step backward.
13 D MARGOT: Ah, there he is. Our new Vice Assistant of Synergy.
14 D NEW HIRE: Hi. I think there's a mistake. My badge says "Analyst."
15 D MARGOT: Titles are fluid at Halcyon.
16 D OSKAR (not looking up): Don't make sudden movements, son.
17 D NEW HIRE: What kind of movements are sudden?
18 D OSKAR: Most of them.
19 D PETRA (into the walkie-talkie): He's here. No, he's fine. Yes, I'll tell him.
20 D MARGOT: Petra, thank you. You may go.
21 D PETRA: I'd rather stay, actually.
22 D MARGOT: That was not a request.
23 A ¶ Petra glares at Margot, lowers the walkie-talkie, and takes a slow, deliberate seat on an overturned bucket.
24 D MARGOT [CONT'D] (to the New Hire): Today is your onboarding. At Halcyon we believe in rooting our people in something larger than themselves.
25 D NEW HIRE: Like bees?
26 D MARGOT: Like hives.
27 D OSKAR: Like stings, mostly.
28 A ¶ He hands the New Hire a veil.
29 A The young man puts it on, slightly crooked, the netting hanging in his eyes.
* 30 A A single bee lands on his shoulder.
31 A He freezes.
32 D NEW HIRE (whispering): Is it going to--
33 D OSKAR: It's just curious. Breathe out slowly.
34 A ¶ He does.
* 35 A The bee lifts off.
36 A Margot makes a note on the clipboard.
37 D MARGOT: You handle pressure well. I'll mention that in your file.
38 D NEW HIRE: I haven't actually got a file yet.
39 D MARGOT: Everyone has a file.
40 D PETRA (dry): Everyone has two.
41 A ¶ Margot ignores her.
42 A She approaches the nearest hive and lifts the lid with a flourish.
* 43 A A hum rises, soft and grave.
44 D MARGOT: This is the queen's chamber. You'll note the order. The discipline. The harmony of purpose. I like to think of our fifth-floor sales team in precisely this way.
45 D OSKAR: The sales team is not a queen.
46 D MARGOT: The sales team is a metaphor, Oskar.
47 D OSKAR: The sales team is a wasp's nest.
48 A ¶ Petra snorts.
49 A Margot closes the lid a little harder than she means to.
50 D NEW HIRE: Can I ask something?
51 D MARGOT: Please.
52 D NEW HIRE: Why bees?
* 53 A ¶ A beat.
54 A Margot looks at Oskar.
55 A Oskar looks at the sky.
56 A Petra studies her boots.
57 D OSKAR: Margot's husband kept bees.
58 D MARGOT: Oskar.
59 D OSKAR: He died in March. She had the hives lifted here from the farm.
60 D MARGOT (very still): That is private.
61 D OSKAR: It's rooftop. Nothing's private on a rooftop.
* 62 A ¶ For a moment, nobody speaks.
* 63 A The wind lifts the edge of Margot's veil.
64 A She smooths it with one hand, her fingers not quite steady.
65 D PETRA (gently): Margot, the VP call.
66 D MARGOT: Yes. Of course.
67 A ¶ She hands the clipboard to the New Hire without ceremony.
68 D MARGOT [CONT'D]: Kwame. Welcome to Halcyon.
69 D KWAME (startled): You know my name?
70 D MARGOT: I read your file.
71 D KWAME: I thought I didn't have one.
72 D MARGOT (a thin smile): Now you do.
73 A ¶ She sweeps toward the roof door, Petra a half-step behind her.
74 A At the threshold she pauses, one hand on the frame, and speaks without turning.
75 D MARGOT [CONT'D]: Oskar. Teach him everything.
76 D OSKAR: Everything about what?
77 D MARGOT: Everything he'll need.
78 A ¶ She goes.
* 79 A The door sighs shut.
80 A Kwame lifts the veil from his eyes and looks at Oskar, who has already turned back to the hives.
81 D KWAME: Is she always like that?
82 D OSKAR: No. Sometimes she's worse.
83 A ¶ He hands Kwame the smoker.
* 84 A It's warm and heavy, and a thin white thread curls from its spout.
85 D OSKAR [CONT'D]: Squeeze the bellows. Gently. Like you're asking a question.
86 A ¶ Kwame squeezes.
* 87 A The smoke drifts across the hive.
* 88 A The humming softens, lowers, and one by one the bees settle into the quiet.

### SCENE s00889 | INT. BOOKBINDER'S WORKSHOP - LISBON - EVENING
Detected names (may be incomplete or contain aliases): SOLEDAD IBARRA, ARCHIE MENDELSOHN, AUNT VELMA
* 1 A ¶ A narrow stone room under a vaulted ceiling.
* 2 A Presses, bone folders, spools of waxed linen.
* 3 A Every surface is stacked with half-finished volumes, their spines bare as ribs.
* 4 A A single window frames the red roofs of the Alfama and a tram rattling past.
5 A ¶ SOLEDAD IBARRA, 30s, in a leather apron, sits at the sewing frame with a needle in her hand, a loose braid down her back.
6 A Ink stains her fingertips.
7 A She is stitching a signature with practiced ease.
8 A ¶ ARCHIE MENDELSOHN, 30s, a tall American in a rain-spotted jacket, stands in the doorway holding a battered book against his chest like a rescued animal.
9 D SOLEDAD: You're late.
10 D ARCHIE: I got lost.
11 D SOLEDAD: You always get lost.
12 D ARCHIE: It's a very confusing city.
13 D SOLEDAD: It's a city with seven hills and one river. Even the pigeons find their way.
14 D ARCHIE: The pigeons live here.
15 D SOLEDAD: So do I. And I'm never late.
16 D ARCHIE: You're never anywhere else.
17 A ¶ She smiles despite herself, not looking up.
18 A He crosses to the workbench and sets the book down in front of her.
* 19 A Gently, as if it might bruise.
20 D ARCHIE [CONT'D]: That's the one.
21 D SOLEDAD (inspecting): Oh, Archie. What did you do to it?
22 D ARCHIE: I dropped it in a canal.
23 D SOLEDAD: In Venice.
24 D ARCHIE: In Venice.
25 D SOLEDAD: On purpose?
26 D ARCHIE: It jumped. I'm telling you, it jumped.
27 D SOLEDAD: Books don't jump.
28 D ARCHIE: This one has a lot of feelings.
29 A ¶ She opens the cover.
* 30 A The pages are warped and rippled, the ink bled into soft blue clouds.
31 A She runs a thumb along the gutter and lets out a slow breath.
32 D SOLEDAD: Whose is it?
33 D ARCHIE: My grandfather's. His diary.
34 D SOLEDAD: Then why are you giving it to me?
35 D ARCHIE: Because you're the best in Europe.
36 D SOLEDAD: Flattery.
37 D ARCHIE: Fact.
38 D SOLEDAD: It will take weeks.
39 D ARCHIE: I have weeks.
40 D SOLEDAD: You have a plane ticket.
41 D ARCHIE: I could lose the ticket.
42 D SOLEDAD: You could.
43 D ARCHIE: I could lose the whole plane.
44 D SOLEDAD (smiling): Archie.
45 D ARCHIE: Soledad.
* 46 A ¶ The workshop door bangs open.
47 A AUNT VELMA, 70s, a small woman in a patterned housecoat and bright orange slippers, sweeps in with a covered dish and a gust of cold air.
48 D AUNT VELMA: Soledad! You haven't eaten. I brought cod.
49 D SOLEDAD: Tia, I'm working.
50 D AUNT VELMA (to Archie): And who is this?
51 D ARCHIE: Archie Mendelsohn, ma'am. I'm a client.
52 D AUNT VELMA: A client who brings flowers?
53 A ¶ He looks down.
54 A He is, in fact, holding a very small bunch of wilted daisies in his left hand, crushed against the book.
55 A He lifts them with a helpless shrug.
56 D ARCHIE: They were fresh this morning.
57 D AUNT VELMA (to Soledad, delighted): He is a client who brings flowers.
58 D SOLEDAD: Tia.
59 D AUNT VELMA: I will leave the cod.
60 A ¶ She sets the dish on the nearest stack of paper, pats Archie's cheek once, and sweeps out.
* 61 A The door slams.
* 62 A The tram rattles by.
63 A Soledad and Archie look at each other across the ruined book.
64 D ARCHIE: She likes me.
65 D SOLEDAD: She likes everybody. She feeds the pigeons.
66 D ARCHIE: Do you?
67 D SOLEDAD: Do I what?
68 D ARCHIE: Like me.
69 A ¶ She picks up the daisies.
70 A Smooths one battered petal between thumb and finger.
71 D SOLEDAD: Come back on Tuesday. I will tell you what the book needs.
72 D ARCHIE: And the other thing?
73 D SOLEDAD (not looking up): The other thing takes longer.

### SCENE s00890 | INT. HOSPITAL SUBBASEMENT - LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL FAIRWEATHER, PADDY GALLAGHER
* 1 A ¶ A low, steam-choked cavern.
* 2 A Industrial washers thump like slow drums.
* 3 A Sheet-laden carts line the walls in ghostly rows.
* 4 A Pipes sweat overhead, and the tiled floor is slick with soap and condensation.
* 5 A A single fluorescent tube buzzes.
6 A ¶ DR. EZEKIEL FAIRWEATHER, 50s, a cardiothoracic surgeon, sits on an overturned laundry bin in rumpled blue scrubs, his tie shoved in his pocket.
7 A Grey stubble.
8 A Hands folded between his knees as if praying.
9 A He has not slept in thirty hours.
10 A He stares at the drain in the floor.
* 11 A ¶ The doors at the far end swing open and a gurney wheel squeals.
12 A PADDY GALLAGHER, 50s, the night porter, pushes a cart of towels down the aisle.
13 A Barrel-chested, flushed, a green cap pulled over a bald crown.
14 A He stops short at the sight of the doctor.
15 D PADDY: Jesus, Mary and Joseph. Doctor?
16 D EZEKIEL: Don't mind me.
17 D PADDY: You scared the life out of me.
18 D EZEKIEL: Sorry.
19 D PADDY: It's the wrong end of the building for you, sir. The surgeons have their own lounge.
20 D EZEKIEL: I know.
21 D PADDY: Then why--
22 D EZEKIEL: It's loud here.
23 A ¶ Paddy considers this.
24 A He parks the cart.
25 A Pulls a crumpled pack of cigarettes from his pocket, glances up at the smoke detector, and puts them back.
26 D PADDY: Bad one?
27 D EZEKIEL: Seven hours. We lost him on the table.
28 D PADDY: I'm sorry.
29 D EZEKIEL: He was thirty-one.
30 D PADDY: Ah, God.
31 D EZEKIEL: He had a daughter. She was in the waiting room, drawing a horse.
32 D PADDY: Did you tell her?
33 D EZEKIEL: His wife did. I just stood there.
* 34 A ¶ A washer ends its cycle with a shuddering groan.
* 35 A Steam breathes out of the vents.
36 A Paddy drags a second bin across the tile and lowers himself onto it with a grunt, so the two men sit knee to knee in the damp.
37 D PADDY: My brother went the same way. Heart.
38 D EZEKIEL: When?
39 D PADDY: Twenty years. The doctors were very kind.
40 D EZEKIEL: That doesn't help, does it?
41 D PADDY: Not on the day.
42 D EZEKIEL (speaking at once; speaking at once): PADDY What does, then? Time, I suppose.
43 A ¶ They both stop.
44 A The ghost of a smile crosses Paddy's face.
45 A Ezekiel laughs, one dry exhale through his nose, and rubs his eyes with the heels of his hands.
46 D PADDY [CONT'D]: You want a towel? They're warm.
47 D EZEKIEL: I'm not crying.
48 D PADDY: Never said you were. They're just warm.
49 A ¶ He passes a folded towel from the cart.
50 A Ezekiel takes it, presses it to his face, and holds it there much longer than a person needs to wipe off sweat.
51 A Paddy gazes politely at a washer.
* 52 A Time passes in the slow rhythm of the drums.
53 D EZEKIEL (muffled): Thank you.
54 D PADDY: Aye.
55 D EZEKIEL: Does it ever stop? The... carrying it?
56 D PADDY: I wouldn't know, Doctor. I only carry the linen.
57 D EZEKIEL (lowering the towel): Then you're luckier than I am.
58 D PADDY: Maybe. Or I just do the washing so you can do the rest.
59 A ¶ Ezekiel looks at him properly for the first time.
60 A Paddy meets the look without flinching, wide-faced and unhurried.
61 D EZEKIEL: What's your name?
62 D PADDY: Paddy. Paddy Gallagher.
63 D EZEKIEL: Ezekiel.
64 D PADDY: I know. It's on the plaque in the lobby. The one with the donors.
65 D EZEKIEL: I never donated.
66 D PADDY: Your name's on it anyway.
67 A ¶ The ghost of a smile returns.
68 A Ezekiel stands.
69 A He folds the towel into a perfect square and sets it back on the cart, then stands for a moment with his hand on the metal rail.
70 D EZEKIEL: I should go up.
71 D PADDY: They'll keep.
72 D EZEKIEL: Not all of them.
73 D PADDY: No. Not all.
74 A ¶ Ezekiel nods.
75 A He straightens his scrubs, pulls his tie from his pocket, and puts it back again.
76 A At the door he pauses.
77 D EZEKIEL: Paddy.
78 D PADDY: Doctor.
79 D EZEKIEL: Thank you for the towel.
80 D PADDY: Anytime. It's what I'm for.
* 81 A ¶ The door sighs shut behind the surgeon.
82 A Paddy sits alone in the thrum of the machines.
83 A After a moment he takes out the cigarettes, looks at the smoke detector again, and slowly, decidedly, puts them back.

### SCENE s00891 | INT. BELL TOWER - SNIPER NEST - DAWN
Detected names (may be incomplete or contain aliases): MOSES TEMBO, FERGAL ROURKE, ANTON VASQUEZ
* 1 A ¶ A stone shaft, open to the weather.
* 2 A Cracked bell hangs silent overhead, green with age.
* 3 A Pigeon droppings crust the floor.
* 4 A Through the louvres, a ruined village burns in slow grey ribbons.
5 A ¶ SGT. MOSES TEMBO, 40s, huge, patient, lies flat behind a rifle.
6 A Scar across his eyebrow.
7 A Every breath measured.
8 A ¶ PVT.
9 A FERGAL ROURKE, 19, freckled, trembling, crouches at the rim of the stairwell with a field phone.
10 A ¶ CAPT. ANTON VASQUEZ, 30s, in a dented helmet, studies a map pinned to the wall with a bayonet.
11 D ROURKE: Nothing on the line.
12 D TEMBO: Keep trying.
13 D VASQUEZ: They've cut it.
14 D ROURKE: Then who do I call?
15 D VASQUEZ: Nobody.
16 D ROURKE (overlapping): We're stuck up here!
17 D TEMBO (overlapping): Shut your mouth, boy.
18 D VASQUEZ (overlapping, to both): Quiet. Both of you.
* 19 A ¶ Silence.
* 20 A Pigeons shift on the beams.
21 A Tembo's eye stays glued to the scope.
22 D TEMBO: Movement. Left of the well.
23 A ¶ Vasquez drops beside him.
24 A He raises binoculars.
25 A He holds them very still.
26 D VASQUEZ: How many?
27 D TEMBO: Three. Maybe four.
28 A ¶ Rourke drops the phone.
* 29 A It clatters.
30 A All three freeze.
31 D ROURKE (whispering): Sorry.
32 D VASQUEZ: Pick it up. Slowly.
33 A ¶ He does.
* 34 A Below, a boot scrapes stone.
* 35 A Closer than any of them wants.
36 D TEMBO: They're in the church.
37 D VASQUEZ: Then they're under us.
38 A ¶ Tembo shifts the rifle.
39 A He exhales.
* 40 A The great bell shivers, ever so slightly, as if remembering.
41 D ROURKE: Sarge--
42 D TEMBO: Not now.
* 43 A ¶ Wood creaks on the stair.
44 A Rourke raises his rifle with both hands.
45 A The barrel wavers.
46 A Vasquez rests a hand on his shoulder.
47 D VASQUEZ: Easy, son.
* 48 A ¶ Light from the stairwell.
49 A Then a shape in the light.
50 A ¶ Tembo fires.

### SCENE s00892 | INT. ROADSIDE MOTEL - ICE MACHINE ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): LORRAINE PETTIGREW, DOT HOLLANDER, GIDEON MARSH, HIRAM BECK
* 1 A ¶ A concrete nook behind the lobby.
* 2 A A humming ice machine, a flickering vending machine, a bulb in a wire cage.
* 3 A Rain hammers the tin roof.
* 4 A The ice machine shudders as if something moves inside.
5 A ¶ LORRAINE PETTIGREW, 50s, in a bathrobe and mismatched slippers, clutches an empty plastic bucket.
6 A Her eyes keep drifting to the machine.
7 A ¶ DOT HOLLANDER, 60s, in a nightgown and a hairnet, leans against the vending machine with a bag of pretzels.
8 A She doesn't open it.
9 A ¶ GIDEON MARSH, 30s, the night clerk, stands with his arms folded and a ring of keys on his belt.
10 A He chews gum, too fast.
11 A ¶ HIRAM BECK, 40s, a trucker in a green flannel, enters from the rain, shaking out his hood.
12 D HIRAM: Whole parking lot's flooded. What's going on?
13 D GIDEON: Nothing. Go back to your room, sir.
14 D LORRAINE: It's the machine.
15 D HIRAM: What about it?
16 D DOT: It's been making that sound for an hour.
17 D HIRAM: Machines hum. That's what they do.
18 D LORRAINE: It isn't humming. Listen.
19 A ¶ They listen.
* 20 A Under the rain, under the thrum of the motor, a slow, wet knocking from inside the steel.
21 D HIRAM: Pipes.
22 D GIDEON: It's pipes. Old pipes.
23 D DOT: Then why did Mr. Alvarez in 12 say he heard his name?
24 D GIDEON: Mr. Alvarez is eighty-nine.
25 D DOT: And Mrs. Pruitt in 4 heard hers.
26 D GIDEON: She's a drinker.
27 D LORRAINE: I heard mine.
* 28 A ¶ Silence.
* 29 A The bulb flickers.
* 30 A The machine knocks again, three slow beats.
31 D HIRAM: What did it say?
32 D LORRAINE: It said "Lorraine."
33 D DOT: That's not unusual. It's your name.
34 D LORRAINE: It said it in my mother's voice.
35 D HIRAM: Ma'am--
36 D LORRAINE: She's been dead for nine years.
* 37 A ¶ The machine knocks again, closer to the door.
38 A Gideon spits his gum into his palm.
39 A He pulls the keys off his belt and holds them in a white-knuckled fist.
40 D GIDEON: I'm going to open it.
41 D DOT: Don't.
42 D GIDEON: It's a machine, Dot.
43 D DOT: Don't.
44 D HIRAM: Let him.
45 D DOT: Hiram, no.
46 A ¶ He steps forward.
47 A Fits a key.
* 48 A The lock turns with a click like a gunshot.
* 49 A For a moment nothing happens.
* 50 A Then the door swings open on a bin of clear, perfect ice, and in the ice, packed tight and glistening, are the eyes of a woman, open and unblinking, staring up at the cage light.
51 D LORRAINE (whispering): Mama?
52 A ¶ The eyes blink.

### SCENE s00893 | INT. VFW HALL KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): ARLO PENDERGAST, BILLIE STOKES, CEDRIC NAKAMURA, FATHER ANSELM
* 1 A ¶ A wake in the next room: muffled laughter, clinking glasses.
* 2 A Here, under buzzing fluorescents, a steel counter holds trays of cold cuts, a coffee urn, and a single untouched casserole with a foil lid.
3 A ¶ ARLO PENDERGAST, 60s, in a dark suit gone shiny at the elbows, stands at the sink scrubbing a pot far past clean.
4 A His son's funeral program is folded in his breast pocket.
5 A ¶ BILLIE STOKES, 50s, his sister, in a black dress and sneakers, leans against the fridge with a plastic cup of wine.
6 A Her eyes are swollen but dry.
7 A ¶ CEDRIC NAKAMURA, 30s, Arlo's nephew, comes through the swinging door with a tray of empties.
8 A Loosened tie.
9 A Fresh shaving cut.
10 D CEDRIC: They're asking for a speech.
11 D ARLO: Who is?
12 D CEDRIC: Everybody.
13 D BILLIE: Tell them he's busy.
14 D CEDRIC: Doing what? Dishes?
15 D BILLIE: Don't.
16 D ARLO (without turning): Somebody has to do them.
17 D CEDRIC: Uncle Arlo, it's Danny's wake.
18 D ARLO: I know whose wake it is.
19 D CEDRIC: Then come out. Please.
20 D ARLO: After the pot.
21 D BILLIE: It's been clean for ten minutes.
22 D ARLO: It's not clean.
23 D BILLIE: Arlo.
24 D ARLO: It is not clean.
25 A ¶ He scrubs harder.
* 26 A The sponge squeals.
27 A Cedric sets the tray on the counter and glances at Billie, who gives a tiny shake of her head.
28 D CEDRIC (low): He's been like this since the service.
29 D BILLIE: He's been like this since March.
30 D ARLO: I can hear you.
31 D BILLIE: Good.
* 32 A ¶ The swinging door opens.
33 A FATHER ANSELM, 70s, enters in his black clerical collar, a dinner roll in one hand and a napkin in the other.
34 A Round-faced, kind, tired.
35 D FATHER ANSELM: There you are, Arlo. I wondered where you'd gone.
36 D ARLO: Washing.
37 D FATHER ANSELM: So I see.
38 D BILLIE: Father, he doesn't want to talk.
39 D FATHER ANSELM: That's quite all right. I'll talk. Cedric, would you fetch more ice?
40 D CEDRIC: Sure.
41 A ¶ He goes.
* 42 A The door flaps shut.
43 A Anselm eases onto a stool, sets the roll on the counter, and folds his hands.
44 D FATHER ANSELM [CONT'D]: Danny was a good boy.
45 D ARLO: Was he?
46 D FATHER ANSELM: Arlo.
47 D ARLO: He was a good boy until he wasn't.
48 D BILLIE: Don't do this here.
49 D ARLO: Where, then? In front of the whole town?
50 D BILLIE: Not now.
51 D ARLO: He called me from the highway. Did you know that?
52 D BILLIE (quietly): No.
53 D ARLO: He called me from the highway at two in the morning and said "Dad, I'm sorry." And I said, "For what?" And he said "For all of it." And I said "Go home and sleep."
54 D FATHER ANSELM: You couldn't have known.
55 D ARLO: That's what you all keep saying.
56 D BILLIE: Because it's true.
57 D ARLO: It's not true. I knew. I knew and I said go home and sleep.
* 58 A ¶ The pot clatters into the sink.
59 A Billie crosses the kitchen, takes his wet hands in hers, and holds them against her black dress.
60 D BILLIE: Arlo. Look at me.
61 D ARLO: I can't.
62 D BILLIE: Look at me.
63 A ¶ He does.
64 A His face crumples like paper in a fist.
65 A He doesn't make a sound.
66 A Anselm lowers his gaze to the roll.
* 67 A The wake rumbles on through the wall, a hundred voices pretending.
* 68 A ¶ The kitchen door swings open again.
69 A Cedric stands with an ice bucket in both hands, pale.
70 D CEDRIC: Uncle Arlo. There's someone here.
71 D ARLO: Who?
72 D CEDRIC: A kid. About Danny's age. He says he was with him. That night.
73 A ¶ Everyone goes still.
* 74 A The coffee urn ticks.
75 D BILLIE (softly): Let him in.

### SCENE s00894 | INT. GENERATION SHIP "HALCYON REACH" - ARBORETUM DECK - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER ISOLDE PRAKASH, HENRIK AALTO, TECH ORVILLE BANKS, MERIDIAN
* 1 A ¶ A cathedral of green.
* 2 A Fifty metres of curved ceiling arch overhead, strung with sunlamps dimmed to amber.
* 3 A Rows of apple trees run into the distance, their branches heavy with fruit that never rots.
* 4 A A brook trickles along a polished steel channel.
* 5 A The air smells of loam, of rain that never fell.
6 A ¶ COMMANDER ISOLDE PRAKASH, 50s, in a charcoal uniform with silver epaulettes, sits on a bench beneath a gnarled old tree, her boots off, her feet in the stream.
7 A Close-cropped silver hair, calm, ancient eyes.
8 A ¶ DR. HENRIK AALTO, 40s, tall, thin, a ship's physician with a stoop, stands at the edge of the path with a datapad.
9 A His white coat is too short in the sleeves.
10 A ¶ TECH ORVILLE BANKS, 20s, a lanky engineer in grease-streaked coveralls, perches on the brook's stone lip, eating an apple with the loud contentment of someone who has not eaten all day.
11 D PRAKASH: Sit, Henrik. You look like a fence.
12 D AALTO: I prefer to stand.
13 D PRAKASH: It wasn't a request.
14 A ¶ He sits, stiffly, on the far end of the bench.
15 A Orville chews.
* 16 A The brook chuckles.
17 D AALTO: You've seen the numbers.
18 D PRAKASH: I have.
19 D AALTO: Then you know.
20 D PRAKASH: I know the water reclamation is down four percent.
21 D AALTO: It's down nine.
22 D PRAKASH: It was four in the briefing.
23 D AALTO: It was four in the briefing because the engineer in the briefing was afraid of you.
24 D ORVILLE (through apple): Hey.
25 D AALTO: You were.
26 D ORVILLE: I was a little afraid.
27 D PRAKASH: Orville, how afraid should we be?
28 D ORVILLE: On a scale?
29 D PRAKASH: On any scale.
30 D ORVILLE: Seven. Possibly eight.
31 D PRAKASH: Of ten?
32 D ORVILLE: Of twelve.
* 33 A ¶ A pause.
* 34 A The brook trickles on.
35 A Prakash lifts one foot from the water and studies her toes.
36 D PRAKASH: How long?
37 D AALTO: At this rate, the fourth ring goes dry in forty years.
38 D PRAKASH: Forty years.
39 D AALTO: Give or take.
40 D PRAKASH: I will be dead in twenty.
41 D AALTO: So will I.
42 D PRAKASH: And Orville?
43 D ORVILLE: Hey, I'm twenty-six.
44 D PRAKASH: Then it's your problem.
45 D ORVILLE: Thanks a lot.
46 D MERIDIAN [V.O.] (soft, genderless, from the air): Commander, if I may. The reclamation shortfall can be offset by a seventeen percent reduction in decorative irrigation.
47 D PRAKASH: Meridian, we are sitting in the decorative irrigation.
48 D MERIDIAN [V.O.]: I am aware.
49 D AALTO: You want to drain the arboretum.
50 D MERIDIAN [V.O.]: I want to keep the passengers alive.
51 D PRAKASH: The passengers are alive because of the arboretum. They come here to remember what the sky looks like.
52 D MERIDIAN [V.O.]: That is a sentimental argument, Commander.
53 D PRAKASH: It's the only kind we have.
54 D ORVILLE (muttering): Can I keep the apples?
55 D PRAKASH: You may keep the apples.
56 D AALTO: Isolde.
57 D PRAKASH: Yes, Henrik.
58 D AALTO: There is another option.
59 D PRAKASH: There is always another option.
60 D AALTO: We could wake the sleepers early.
* 61 A ¶ A long silence.
* 62 A The brook, the trees, the perfect false twilight.
63 A Prakash looks up at the ceiling as if she could see through it to the eleven thousand frozen sleepers in the lower decks.
64 D PRAKASH: How many?
65 D AALTO: A hundred. Perhaps two.
66 D PRAKASH: They won't thank us.
67 D AALTO: No.
68 D PRAKASH: They'll wake into a ship that's dying.
69 D AALTO: They'll wake into a ship that needs them.
70 D MERIDIAN [V.O.]: Commander, the vote is yours.
71 D PRAKASH: It's never been mine. It's all of ours.
72 A ¶ She stands.
* 73 A Her bare feet leave dark prints on the stone.
74 A She reaches up to a low branch, plucks an apple, and polishes it against her sleeve.
75 D PRAKASH [CONT'D]: Wake them.
76 A ¶ She bites.
* 77 A The sound is bright and clean.

### SCENE s00895 | INT. HOSPITAL ROOM 412 - NIGHT
Detected names (may be incomplete or contain aliases): YASMIN HADDAD, NURSE FLORENCE OYELARAN, CONSTANCE ABERCROMBIE
* 1 A ¶ Monitors blink.
* 2 A A drip counts the seconds.
3 A ¶ DR. YASMIN HADDAD, 40s, stands by the bed with a chart.
4 A NURSE FLORENCE OYELARAN, 50s, adjusts a pillow.
5 A In the bed lies MRS. CONSTANCE ABERCROMBIE, 80s, awake, small as a bird.
6 D CONSTANCE: Is it bad?
7 D YASMIN: We're still running tests.
8 D FLORENCE: She means it's not good.
9 D YASMIN: Florence.
10 D FLORENCE: She asked.
11 D CONSTANCE: I did ask.
12 D YASMIN: Mrs. Abercrombie--
13 D CONSTANCE: Call me Connie. Everyone does.
14 D YASMIN: Connie, the scan shows a mass.
15 D FLORENCE (overlapping): We'll know more tomorrow.
16 D CONSTANCE (overlapping): How big?
17 D YASMIN: Four centimetres.
18 D CONSTANCE: That's the size of a plum.
19 D FLORENCE: A small plum.
20 D CONSTANCE: I like plums.
21 A ¶ Yasmin lowers the chart.
22 A She sits on the edge of the bed.
23 A She takes the old woman's hand.
24 D YASMIN: We'll do everything we can.
25 D CONSTANCE: You're a kind girl.
26 D YASMIN: I'm trying to be.
27 D FLORENCE (quietly): She is.
28 D CONSTANCE: Now. Would one of you please find me a plum?

### SCENE s00896 | INT. DUMPLING KITCHEN - BACK TABLE - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE MARCHAND, RORY BANERJEE, NONNA LUCIA, TOMASZ WISNIEWSKI
* 1 A ¶ Steam curls from bamboo baskets.
* 2 A A wall of orange tiles, a radio murmuring in Cantonese.
3 A Four people crowd a stainless counter, pleating dumplings by hand.
4 A ¶ CELESTE MARCHAND, 30s, silk blouse, sleeves rolled, pleats each one with great concentration.
5 A RORY BANERJEE, 30s, sits across from her, flour on his glasses.
6 A NONNA LUCIA, 80s, wiry, in a faded apron, oversees them with a wooden spoon.
7 A TOMASZ WISNIEWSKI, 50s, the chef, passes behind with a tray, wiping his hands on his hip.
8 D NONNA LUCIA (to the table): Too much filling. You will burst them.
9 D CELESTE: I like them fat.
10 D RORY (softly): She does.
11 A ¶ Celeste's hands pause.
12 A She doesn't look up.
13 A He reaches for a wrapper, their fingers brush the flour, and neither of them moves for a beat.
14 D TOMASZ: Everyone eat! Plates are coming!
15 D NONNA LUCIA (to Rory): You. You are the one from the letters.
16 D RORY: Which letters?
17 D NONNA LUCIA: The ones she does not send.
18 A ¶ Celeste drops a dumpling.
* 19 A It lands on the tile with a wet slap.
20 A Tomasz glides by and stoops to retrieve it, humming.
21 D CELESTE (to herself): Okay.
22 D RORY: Celeste--
23 D CELESTE: It's fine. Tell Tomasz the soy is low.
24 A ¶ She stands, wipes her hands, and walks out through the swinging door.
25 A Rory watches it swing.
26 A Nonna Lucia pats the empty chair.
27 D NONNA LUCIA: Sit. Pleat. It is always better in the second hour.

### SCENE s00897 | INT. ICU CUBICLE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE BAPTISTE, NURSE JOSEFINA RIOS, DELPHINE ACHTERBERG
* 1 A ¶ A ventilator sighs.
2 A A woman lies motionless, wires everywhere.
3 A ¶ DR. AUGUSTINE BAPTISTE, 50s, reads a monitor.
4 A He frowns.
5 A NURSE JOSEFINA RIOS, 30s, checks a line and glances at the door.
6 A MRS. DELPHINE ACHTERBERG, 70s, the patient's mother, sits in the corner chair gripping her purse.
7 D BAPTISTE (to the room): Pressure's dropping.
8 D JOSEFINA: Since eleven.
9 A ¶ She adjusts the drip.
10 A He leans in.
11 A She steps back.
12 A He taps the glass.
13 A She holds her breath.
14 D BAPTISTE (muttering): Come on, come on.
15 D DELPHINE: Is she in pain?
16 D BAPTISTE: No, ma'am.
17 D DELPHINE: Then why does she look like that?
18 D JOSEFINA (gently): It's the machine.
19 D BAPTISTE: Josefina, call the family.
20 D JOSEFINA: Which family?
21 D BAPTISTE: All of it.
22 A ¶ Delphine rises.
* 23 A Her purse slides to the floor.
24 A She stands by the bed and covers her daughter's hand with her own, and the monitor, very softly, begins to slow.

### SCENE s00898_0 | EXT. HIGH DESERT - LONE CABIN - MORNING
Detected names (may be incomplete or contain aliases): ELIJAH FARROW
* 1 A ¶ A silver wind combs the sage.
* 2 A A tin chimney leans.
3 A ELIJAH FARROW, 50s, sits on the porch step in a sun-faded hat, a tin cup steaming in his hands.
4 A His horse dozes at the post, tail flicking, while a crow on the fence rail considers him with one black eye, the wind rattles a loose shutter, the dog's shadow slides across the dust, and Elijah sips, tips back his hat, and waits for something he doesn't name.
5 D ELIJAH (V.O.): Dear Ruth. The roof held through the storm.
6 A ¶ He sets the cup down.
* 7 A A faraway drone.
8 A A rider, small, grows on the horizon.
9 D ELIJAH [V.O., CONT'D]: I expect I'll have company soon. Don't worry. I've kept the kettle on.
10 A ¶ The rider comes closer, and the crow lifts off the rail.
* 11 A The horse lifts its head.
12 A Elijah stands slowly, wipes his hands on his trousers, and walks inside.
13 D ELIJAH [CONT'D] (to himself): Well.
14 A ¶ He lifts the shotgun from its pegs above the door and breaks it open.
* 15 A Two shells.
16 A He thumbs them in.
17 A He closes the gun with a soft, sure click.

### SCENE s00899 | EXT. THE LANTERN MARKET - MOONLIT BRIDGE - NIGHT
Detected names (may be incomplete or contain aliases): THESSALY GREYMANTLE, MORVAN, PIP
* 1 A ¶ Paper lanterns drift on strings between crooked rooftops, each glowing a different colour.
* 2 A Stalls cling to a hump-backed stone bridge: spice sellers, mask-carvers, a woman peddling jars of captured starlight.
* 3 A The river below runs silver.
4 A ¶ THESSALY GREYMANTLE, 30s, a cloaked traveller with a staff and a battered satchel, walks the bridge with measured steps, savouring the stillness.
* 5 A A hush has fallen over the whole market.
* 6 A Even the birds seem to be listening.
7 A ¶ MORVAN, 60s, a stooped old lamplighter with a long pole and a crooked grin, tends a lantern on the parapet.
8 A ¶ PIP, 10, a barefoot child in an oversized waistcoat, darts out from behind a stall and plants herself directly in Thessaly's path.
9 D PIP: You're new.
10 D THESSALY: I'm passing through.
11 D PIP: Everyone says that.
12 D THESSALY (to the market, mildly): What a lovely evening.
* 13 A ¶ No answer.
14 A The stall-keepers do not look up.
15 A Morvan hangs his pole against the wall, wipes his hands, and slides a step closer to Pip.
16 D MORVAN (low): Pip. Come away from the lady.
17 D PIP: She's nice.
18 D MORVAN: She's not nice. She's early.
19 A ¶ Thessaly's smile does not change, but her hand slips to the head of her staff.
20 A The lanterns overhead flicker, one by one, from warm gold to a cold, flat white, and the crowd on the bridge, slowly, wordlessly, turns to face her, while Morvan lifts Pip off her feet and sets her behind him, Pip squirming, Thessaly tilting her head, and the child at last whispering something to the lamplighter that makes his crooked grin vanish completely.
21 D PIP: She's the one from the story.
22 D THESSALY (softly, to herself): Of course I am.
23 A ¶ She raises the staff.
* 24 A The river stops moving.

### SCENE s00900 | INT. COUNTING HOUSE - SECOND FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): HENRIETTA PLUMB, CONSTABLE OAKES, GENTLEMAN, BLACKWOOD
* 1 A ¶ London, 1858.
* 2 A Gaslight, brown and thick.
* 3 A High desks lined with ledgers.
* 4 A A tall window veiled by fog.
* 5 A The smell of ink and coal.
6 A ¶ HENRIETTA PLUMB, 40s, a bookkeeper in grey wool, sits upright at a slanted desk, her pen scratching steadily.
7 A A pince-nez perches on her nose.
8 A Her spine is straight as a rule.
9 A ¶ CONSTABLE OAKES, 20s, bulky and young, stands at the door with a lantern, shifting from foot to foot.
10 A ¶ A GENTLEMAN, 50s, sits in the visitors' chair with his hat on his knee.
11 A Silk cravat, a watch-chain, hands that have never lifted anything heavy.
12 D OAKES: Evening, Mrs. Plumb.
13 D HENRIETTA: Constable.
14 D OAKES: This gentleman says he has an appointment.
15 D HENRIETTA: Does he.
16 D GENTLEMAN: I wrote.
17 D HENRIETTA: I received no letter.
18 D GENTLEMAN: I'm sure it was lost in the fog.
19 D HENRIETTA: Everything is.
20 A ¶ She sets down the pen.
21 A Squares the ledger.
22 A Looks at him for a long time over the pince-nez.
23 D HENRIETTA [CONT'D]: Your name, sir?
24 D GENTLEMAN: Blackwood. Asher Blackwood.
25 D HENRIETTA: And your business?
26 D BLACKWOOD: Your employer owes me a sum.
27 D HENRIETTA: Mr. Tarrant owes many people many sums.
28 D BLACKWOOD: Mine is larger.
29 D HENRIETTA: Then I would like to see your paperwork.
30 A ¶ Blackwood draws a folded paper from his coat and sets it on her desk.
31 A She unfolds it with two fingers, as if it were a dead moth.
32 A Her eyes travel down the page.
33 D OAKES: Is it genuine, ma'am?
34 D HENRIETTA: It is very well forged.
35 D BLACKWOOD: I beg your pardon.
36 D HENRIETTA: Mr. Tarrant never signs with a loop on the T.
37 A ¶ Blackwood's smile does not falter, but his hand drifts toward his coat.
38 A Oakes lifts the lantern.
* 39 A The light jumps across the ledgers.
40 D OAKES: Sir, I'd keep your hands where I can see them.
41 D BLACKWOOD: Naturally.
42 A ¶ He lifts both palms.
43 A Henrietta folds the paper in thirds and slides it into a drawer.
44 A She locks it.
45 D HENRIETTA: Constable, you may escort Mr. Blackwood to the door.
46 D OAKES: Yes, ma'am.
47 D BLACKWOOD: We'll meet again, Mrs. Plumb.
48 D HENRIETTA: I do hope not. I have the books to close.
49 A ¶ They go.
* 50 A The door shuts.
51 A She takes up her pen and writes the date at the top of a clean page, and the nib does not tremble once.

### SCENE s00901 | INT. CALL CENTER - BREAK ROOM - DAY
Detected names (may be incomplete or contain aliases): CHEF, HUGH BANTING, YOLANDA PEREIRA, GARRETT NG
* 1 A ¶ Beige walls.
* 2 A A microwave with a sticky note: YOU ARE NOT A CHEF.
* 3 A A motivational poster of a rowing team.
* 4 A A vending machine blinking "EXACT CHANGE."
5 A ¶ HUGH BANTING, 40s, team lead, polo tucked into khakis, stands at the whiteboard with a marker.
6 A YOLANDA PEREIRA, 30s, top agent, headset around her neck, eats yogurt in the corner.
7 A GARRETT NG, 20s, the newest, sits at the table with his laptop closed and his hands folded.
8 D HUGH: Team, quick huddle. Great numbers this week.
9 D YOLANDA: Thanks, Hugh.
10 D HUGH: Garrett, I'm proud of you.
11 D GARRETT: Thanks. Hugh.
12 D HUGH: Yolanda, you're a rock star.
13 D YOLANDA: I'm eating.
14 A ¶ Hugh caps the marker, uncaps it, and writes SYNERGY on the board, underlines it twice, and steps back like a man admiring a mural.
15 A Yolanda scrapes the yogurt cup and drops it in the bin, Garrett checks his phone under the table, and Hugh turns and claps his hands together once, loud as a starter pistol.
16 D HUGH [CONT'D]: Next quarter, we are going bigger.
17 D YOLANDA: How much bigger?
18 D HUGH: Much.
19 D GARRETT: Does that include raises?
20 D HUGH: It includes vision.
21 D YOLANDA: Hugh, honestly, what's the news?
22 A ¶ Hugh looks at the whiteboard.
23 A At his own handwriting.
24 A He sighs, and for the first time the cheerful voice drops out of him.
25 D HUGH: They're closing the floor.
* 26 A ¶ Silence.
* 27 A The vending machine blinks.
28 D GARRETT: Closing it how?
29 D HUGH: Outsourcing. Thirty days.
30 D YOLANDA: Thirty days?
31 D HUGH: I was told not to say.
32 D YOLANDA: You just said.
33 D HUGH: I know.
34 A ¶ He wipes the whiteboard with his sleeve, the word SYNERGY smearing to a grey cloud.
35 A Yolanda sets her headset on the table.
36 A Garrett closes his phone.
37 D GARRETT (quietly): Well. Great numbers this week.

### SCENE s00902 | EXT. SCHOOL ROOFTOP - SUNSET
Detected names (may be incomplete or contain aliases): JAMAL OKONKWO, SUNNY PARK
* 1 A ¶ Gravel, a rusted vent, a chain-link railing.
* 2 A The football field glows green below.
3 A ¶ JAMAL OKONKWO, 16, in a band jacket, sits cross-legged by the edge, a trombone case across his knees.
4 A SUNNY PARK, 16, arrives through the stairwell door, drops her backpack, kicks a pebble off the roof, and steps up beside him as the two of them watch it drop, Jamal tapping the case, Sunny pulling her hair into a bun, the pair silent while the marching band warms up below.
5 D SUNNY (to the field): Hey, losers!
* 6 A ¶ No one hears.
7 A Jamal smiles.
8 D SUNNY [CONT'D]: You're not going to practice?
9 D JAMAL (muttering): Later.
10 D SUNNY: That's what you said Tuesday.
11 D JAMAL: Tuesday was a mess.
12 A ¶ She sits.
13 A Her shoulder bumps his.
14 A He doesn't move away.
15 D SUNNY: Mr. Dalrymple asked about you.
16 D JAMAL: What did you say?
17 D SUNNY: That you're sick.
18 D JAMAL: Am I?
19 D SUNNY: You look sick.
20 A ¶ He grins.
21 A She takes a gum wrapper from her pocket and folds it into a tiny swan.

### SCENE s00903 | EXT. SKATE PARK - NIGHT
Detected names (may be incomplete or contain aliases): BUDDY ELLISON, LENA MOREAU, SAMIR KHOURY
* 1 A ¶ Floodlights.
* 2 A Concrete bowls.
* 3 A Spray paint.
4 A ¶ BUDDY ELLISON, 16, in a hoodie, balances on a board at the lip of the bowl.
5 A LENA MOREAU, 17, sits on a bench with a sketchbook.
6 A SAMIR KHOURY, 15, holds a phone camera, recording.
7 D SAMIR: Do it, Buddy!
8 D BUDDY: Shut up, I'm focusing.
9 D LENA: You're going to break your neck.
10 D BUDDY: Thanks, Lena.
11 D SAMIR: Drop in!
12 D BUDDY: Drop in!
13 D LENA (speaking at once; speaking at once): BUDDY Don't! Watch this!
14 A ¶ He drops.
* 15 A The wheels roar down the curve.
16 A He rides the wall, flicks the tail, and lands clean.
17 A Samir whoops.
18 A Lena claps once and returns to her sketchbook.
19 D SAMIR: Did you get it, Buddy?
20 D BUDDY: Did YOU get it?
21 D SAMIR: I think so.
22 D LENA: Let me see.
23 A ¶ Samir hands her the phone.
24 A She watches.
25 A She smiles at the screen.
26 A She hands it back.
27 D LENA [CONT'D]: You got it.
28 A ¶ Buddy lifts the board over his head like a trophy and screams at the sky.

### SCENE s00904 | INT. FARMHOUSE - SPARE BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): ESTHER VANCE, LODGER, CALLOWAY
* 1 A ¶ A single bed.
* 2 A An oil lamp.
* 3 A Cold wind knocks at the window.
* 4 A A wardrobe stands half-open.
5 A ¶ ESTHER VANCE, 60s, a widow in a quilted robe, perches on a hard chair with her hands knotted.
6 A Across the room, THE LODGER, 30s, sits on the edge of the bed, pale, shoes still on, his coat soaked.
7 D LODGER: Thank you for the room.
8 D ESTHER: Rent is due Friday.
9 D LODGER: I'll pay.
10 D ESTHER: I'm sure.
* 11 A ¶ A floorboard creaks in the hall.
12 A Neither looks.
13 D ESTHER [CONT'D]: I don't recall your name.
14 D LODGER: It doesn't matter.
15 D ESTHER: It matters to me.
* 16 A ¶ The wind rattles the glass.
* 17 A The lamp gutters.
18 A He lifts his head.
19 A His eyes catch the flame in two small points.
20 D LODGER: Calloway.
21 D ESTHER: Mr. Calloway.
22 D CALLOWAY: I didn't think I'd be asked.
23 D ESTHER: Most guests give it freely.
24 D CALLOWAY: I'm not most guests.
25 D ESTHER (speaking at once; speaking at once): CALLOWAY No. I see that. You see more than you should.
26 A ¶ She rises.
* 27 A The chair scrapes.
28 A She crosses to the wardrobe and closes it, softly, with a click.
29 D ESTHER [CONT'D]: Good night, Mr. Calloway.
30 D CALLOWAY: Good night.
31 A ¶ She leaves.
* 32 A The door shuts.
33 A He sits a while in the lamplight.
34 A Then he rises, goes to the wardrobe, and opens it again.

### SCENE s00905 | INT. VICTORIAN CONSERVATORY - TEA TABLE - AFTERNOON
Detected names (may be incomplete or contain aliases): AUGUSTUS FINCH, LAVINIA CROSSLEY, BARNABY HOOLE, PRUDENCE LOVELACE
* 1 A ¶ 1887.
* 2 A Glass walls, steaming ferns, a wicker table set with a silver service.
* 3 A Rain streaks the panes.
4 A ¶ AUGUSTUS FINCH, 50s, whiskers like frost, holds a teacup in a hand that does not shake.
5 A LAVINIA CROSSLEY, 40s, in grey silk, pours.
6 A BARNABY HOOLE, 30s, a young curate, perches on the edge of a chair.
7 A PRUDENCE LOVELACE, 20s, a governess, stands by the ferns with a book.
8 D LAVINIA: Sugar, Mr. Finch?
9 D AUGUSTUS: One lump.
10 D LAVINIA: Barnaby?
11 D BARNABY: Two, please.
12 D PRUDENCE (to herself): Three, if I were permitted.
13 D LAVINIA: I beg your pardon?
14 D PRUDENCE: Nothing, ma'am.
* 15 A ¶ The teaspoon clinks.
16 A Augustus sips.
17 A He sets down the cup, and the saucer rattles.
18 A He studies Barnaby.
19 A He studies Prudence.
20 A She meets his eyes and does not look away.
21 D AUGUSTUS: Miss Lovelace. You are acquainted with the curate.
22 D PRUDENCE: I am.
23 D BARNABY: We met at the vicarage.
24 D AUGUSTUS: And did you leave it together?
* 25 A ¶ Silence.
* 26 A The rain intensifies.
27 A Barnaby shifts in his chair, Lavinia lifts the teapot, and Prudence closes her book, all three moving at once, like a stage pantomime, while Augustus smiles and spreads butter on a scone.
28 D LAVINIA (to the table): Shall we have the lemon cake?
29 D AUGUSTUS: By all means.
30 D BARNABY (quietly): I should be going.
31 D AUGUSTUS: Sit.
32 A ¶ He sits.
33 A Prudence steps to the table.
34 A She picks up the knife and cuts the cake into perfect, even slices.
35 D PRUDENCE: It would be a pity to waste it.
36 A ¶ Augustus chuckles.
37 A Lavinia relaxes by a hair.

### SCENE s00906 | EXT. ABANDONED DRIVE-IN THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): TARIQ HAMADI, LUCY BRANCH
* 1 A ¶ A great white screen, torn at one corner, flaps in the wind.
* 2 A Rows of rusted speaker posts march across a field of dry weeds.
* 3 A Beyond the fence, a highway hisses with distant headlights.
* 4 A Fireflies hang over the lot like lit embers, rising and falling with the breath of the dark.
5 A ¶ TARIQ HAMADI, 17, skinny, in a thrift-shop blazer, sits on the hood of a dead pickup truck.
6 A His face is turned to the blank screen.
7 A He holds a Walkman in both hands, the earbuds around his neck.
8 A ¶ LUCY BRANCH, 17, strides in from the highway side with a flashlight and a backpack.
9 A She wears her father's oversized denim jacket and combat boots caked with mud.
10 A She stops ten feet from the truck.
11 D LUCY: You came.
12 D TARIQ: You said ten.
13 D LUCY: It's ten-fifteen.
14 D TARIQ: I've been here since nine.
15 A ¶ She sighs.
16 A Climbs onto the hood beside him, and the truck groans under their weight.
17 A For a time she says nothing.
18 A He doesn't either.
19 D LUCY (finally): Are you going to ask?
20 D TARIQ: Ask what?
21 D LUCY: Why I wanted to come here.
22 D TARIQ: I figured you'd tell me.
23 A ¶ She smiles at the screen.
24 A Flicks off the flashlight.
* 25 A The dark folds in around them.
26 D LUCY: My dad took me here. When I was six.
27 D TARIQ: It was open then?
28 D LUCY: It was the last summer. They played a movie about a talking horse.
29 D TARIQ: That sounds terrible.
30 D LUCY: It was perfect.
* 31 A ¶ A breeze lifts the torn corner of the screen.
* 32 A It sways like a ghost.
33 A She leans back on her elbows, stares at the stars, her voice quiet and strange.
34 D LUCY [CONT'D]: He left the next fall.
35 A ¶ Tariq turns his head.
36 A He gives her the earbuds without a word.
37 A She puts one in.
38 A He puts the other in his own ear.
* 39 A The Walkman clicks.
* 40 A A song begins, fragile and slow.
41 A ¶ She closes her eyes.
42 A Her mouth trembles.
43 A He keeps his gaze on the screen, as if an image might appear there if they both waited long enough.
44 D TARIQ (softly): I think I can see the horse.
45 D LUCY (a shaky laugh): Liar.
46 D TARIQ: I'm serious.
47 D LUCY: There's no horse.
48 D TARIQ: There's a little bit of horse.
49 A ¶ She presses her palm over her eyes and laughs again, a wet, helpless sound that breaks halfway into something else.
50 A He sits very still and lets her.
51 A When she lowers her hand, the tears have cut clean tracks through the dust on her face.
52 D LUCY: Thanks for coming.
53 D TARIQ: Thanks for asking.
* 54 A ¶ Overhead, a firefly drifts across the empty screen and, for a second, is the brightest thing in the world.

### SCENE s00907 | INT. ICE HOCKEY LOCKER ROOM - BASEMENT ARENA - NIGHT
Detected names (may be incomplete or contain aliases): BOILERMAKERS, COACH DIEGO ARMENTEROS, CAPTAIN BIRGIT HALVORSEN, SPUD, MURPHY, TANYA OSEI, RAJ KUMARAN, ELLIOT CHU, COACH
* 1 A ¶ Steam.
* 2 A Tape.
* 3 A Sweat.
* 4 A A banner: THE BOILERMAKERS, 1983.
* 5 A A dented bucket of sticks.
6 A Players in half-uniform sit hunched on benches.
* 7 A A faded whiteboard, its play diagrams ghosted over a dozen times.
8 A ¶ COACH DIEGO ARMENTEROS, 60s, ball cap pulled low, paces with a clipboard against his chest.
9 A CAPTAIN BIRGIT HALVORSEN, 30s, sits stiff, helmet in her lap, a bruise bright at her cheekbone.
10 A "SPUD" MURPHY, 20s, goalie, stares at the floor.
11 A TANYA OSEI, 20s, winger, retapes her stick.
12 A RAJ KUMARAN, 30s, defenseman, chews a mouthguard.
13 A ELLIOT CHU, 19, rookie, hands clasped like a boy in church.
* 14 A ¶ Calm.
* 15 A Too calm.
* 16 A The roar of the arena rumbles faintly through the walls.
17 D COACH: Good first period.
18 D SPUD: We were down four-nil.
19 D COACH: Good first period.
20 A ¶ Tanya and Birgit trade a glance.
21 A Raj spits into a towel.
22 D TANYA: Coach, you okay?
23 D COACH: I'm great. Why?
24 D TANYA: You're being nice.
25 D COACH: I'm always nice.
26 D BIRGIT (dry): No you're not.
27 D COACH: Captain, a word.
28 A ¶ Birgit rises.
29 A They step to the far corner.
30 A The team pretends not to watch.
31 A Elliot lets out a breath that is almost a whistle.
32 D ELLIOT (whispering): Is he mad?
33 D RAJ: He's not mad.
34 D ELLIOT: Then what?
35 D RAJ: He's calm.
36 D ELLIOT: Is that worse?
37 D RAJ: That's how you know it's worse.
38 A ¶ In the corner, the coach murmurs.
39 A Birgit nods.
40 A She nods again.
41 A Then she turns, takes the whiteboard marker from its tray, and wipes the entire board with her sleeve.
42 D BIRGIT (to the room): Listen up.
43 A ¶ Everyone goes still.
44 D BIRGIT [CONT'D]: We are not down four-nil.
45 D SPUD: Birgit, the scoreboard--
46 D BIRGIT: The scoreboard is wrong.
47 D TANYA: It's electronic. It can't be wrong.
48 D BIRGIT: It's wrong because Coach has been sitting on something since the second intermission.
49 A ¶ All eyes swing to the coach.
50 A He studies his clipboard.
51 A He sighs, hangs his head, and finally turns it around.
* 52 A ¶ On the paper: not plays.
* 53 A A list of names.
* 54 A The opposing team's lineup, with a red line through nine of them.
55 D COACH: They're short. Nine of their guys were declared ineligible. Paperwork. League found out at the buzzer.
56 D SPUD: So?
57 D COACH: So by the rules, we win. By forfeit. The game doesn't matter.
* 58 A ¶ A stunned pause.
59 A Then, slowly, Tanya laughs.
60 A Raj laughs.
61 A Elliot looks from face to face, uncertain, until Spud lets out a whoop that shakes the lockers.
62 D TANYA: You let us play a whole period for NOTHING?
63 D COACH: I wanted to see what you'd do.
64 D BIRGIT (smiling): And?
65 D COACH: You were magnificent.
66 D SPUD: We were down FOUR.
67 D COACH: Magnificent.
68 A ¶ Birgit tucks the clipboard under her arm.
69 A She puts on her helmet and raps it twice with her glove.
70 D BIRGIT: Come on. Let's go finish it anyway.
71 A ¶ They rise in a clatter of skates and sticks and pour out through the tunnel, and the arena noise swells to meet them.

### SCENE s00908 | INT. WAX MUSEUM - BACK STOREROOM - NIGHT
Detected names (may be incomplete or contain aliases): GREGORY PUFFIN, MAXINE TAN, ULYSSES CRANE, BABS DELANEY, KOFI BOATENG
* 1 A ¶ Shelves of disembodied heads.
* 2 A A half-melted Napoleon lies on a cart.
* 3 A A bucket labelled "SPARE ELVIS."
4 A ¶ GREGORY PUFFIN, 50s, the curator, in a velvet jacket two sizes too small, wrings his hands.
5 A MAXINE TAN, 30s, a night guard with a flashlight and a dead-eyed stare.
6 A ULYSSES CRANE, 40s, a restorer in a paint-stained smock, kneels by a headless Churchill.
7 A BABS DELANEY, 60s, the cleaning lady, mops in slow circles.
8 A KOFI BOATENG, 20s, a tour guide in a tricorn hat, holds a tray of sandwiches.
9 D GREGORY: This is a disaster.
10 D MAXINE: It's a Tuesday.
11 D GREGORY: The Queen is missing.
12 D ULYSSES: The Queen is always missing. We keep losing her wig.
13 D GREGORY: Not the wig. The QUEEN.
14 A ¶ Everyone turns.
* 15 A A single empty pedestal stands in the corner, a velvet rope still looped around it.
16 D BABS: I thought she was in the shop.
17 D KOFI: I thought she was in the Hall of Kings.
18 D MAXINE: Nobody checked the Hall of Kings.
19 D GREGORY: Nobody check ANYTHING. Everyone stay calm.
* 20 A ¶ A loud clunk from the ceiling.
21 A A pale shape swings past on a rope.
22 A They scatter, Babs shrieking, Kofi dropping the tray, Ulysses diving behind the cart, Maxine drawing her flashlight like a pistol.
* 23 A ¶ The shape stops dead in the middle of the room, swaying: a wax Queen Elizabeth, hung by her own sash from a rafter.
* 24 A ¶ Silence.
25 A Kofi peers from behind the cart.
26 D KOFI: Is she... meant to be there?
27 D BABS (sniffing): It's the best she's looked in years.
28 D GREGORY (faintly): Who did this?
* 29 A ¶ A muffled giggle from a tall wardrobe.
* 30 A The door creaks open.
31 A A tiny figure steps out in a toddler's tricorn hat, holding an enormous pair of scissors.
32 A ¶ Everyone freezes.
33 D GREGORY [CONT'D]: Kofi. Is that your niece?
34 D KOFI (grimly): Take-Your-Child-To-Work Day.

### SCENE s00909 | EXT. MONASTERY ORCHARD - TRENCH LINE - EVENING
Detected names (may be incomplete or contain aliases): HENRI DUBOIS, ALBERT QUIGLEY, SANTIAGO MORALES, JOSEPH WHITEFEATHER
* 1 A ¶ A line of earth cut through rows of apple trees, their blossoms falling like a slow snow into the mud.
* 2 A Beyond the wall, the white stones of a ruined abbey.
* 3 A The sky is the colour of old pewter.
* 4 A Everything is hushed, as though the war has paused to breathe.
5 A ¶ LT. HENRI DUBOIS, 30s, sits on an upturned crate at the lip of the trench, a bandage around his left hand, scribbling in a notebook.
6 A Thin as a rake, with a poet's brow and a smoker's cough.
7 A ¶ SGT. ALBERT QUIGLEY, 50s, a barrel-chested veteran with a drooping moustache, squats beside a battered kettle over a spirit stove.
8 A He fusses with the tea, humming under his breath.
9 A ¶ PVT.
10 A SANTIAGO MORALES, 20, round-faced, sits on the firing step with a harmonica he does not play.
11 A He turns it over and over in his hands.
12 A ¶ CPL.
13 A JOSEPH WHITEFEATHER, 30s, tall, quiet, leans against the trench wall cleaning a rifle with a rag, eyes half-closed, a long braid down his back.
14 D QUIGLEY: Tea's nearly ready.
15 D DUBOIS: Lovely.
16 D QUIGLEY: It's terrible tea.
17 D DUBOIS: Then it's British.
18 D QUIGLEY (chuckling): I'm from Leeds, sir. It's worse than British.
19 A ¶ Morales lifts the harmonica to his lips, hesitates, lowers it.
20 A Whitefeather glances over without comment, then returns to the rifle.
* 21 A A petal drifts into the kettle.
22 A Quigley fishes it out with a finger.
23 D MORALES: Sergeant, is it true what they say about the orchard?
24 D QUIGLEY: What do they say?
25 D MORALES: That the monks planted these trees four hundred years ago.
26 D QUIGLEY: Five hundred.
27 D DUBOIS: Closer to six, I believe. The brothers kept records.
28 D MORALES: Records of what?
29 D DUBOIS: Of every harvest. Every frost. Every war that passed through.
30 D WHITEFEATHER (quietly): Did they write about us?
31 D DUBOIS: Not yet.
* 32 A ¶ A rumble far off, then silence again.
33 A The four men listen.
34 A A single blackbird begins to sing from the abbey wall, and Morales finally plays three soft notes on the harmonica before dropping his hand, embarrassed, while Quigley pours the tea into dented tin mugs, hands one to Dubois, one to Whitefeather, one to Morales, and settles back on his heels with the last mug warming his palms, all of them listening to the bird as the light goes slowly copper over the blossoming wall.
35 D QUIGLEY: Funny thing.
36 D DUBOIS: Mm?
37 D QUIGLEY: I've never heard a bird sing in a war before.
38 D WHITEFEATHER: They only sing when it's over.
39 D QUIGLEY: It's not over.
40 D WHITEFEATHER: No.
* 41 A ¶ The blackbird sings on.
42 A Dubois closes his notebook and lifts his mug in a small salute to the trees.

### SCENE s00910 | EXT. WINDMILL RANCH - WATER TROUGH - DUSK
Detected names (may be incomplete or contain aliases): SHERIFF BARNABAS TUCK, OLIVE STARKEY
* 1 A ¶ A tall iron windmill creaks in the failing light.
* 2 A A trough of dark water, a hitching post, a scatter of sleeping cattle on the hill.
3 A ¶ SHERIFF BARNABAS TUCK, 60s, stands with his hat in his hand, watering his horse.
4 A His badge is dull, his boots caked.
5 A ¶ He looks across the pasture.
* 6 A Far down the road, a lantern bobs.
7 D TUCK (to the horse): Visitors.
* 8 A ¶ The horse nickers.
9 A Tuck settles his hat and draws the rifle from its scabbard.
* 10 A The lantern grows.
11 A A buckboard emerges from the dusk, driven by OLIVE STARKEY, 40s, in a man's duster and a flat brim, a shotgun across her lap.
12 A ¶ She reins up twenty feet away.
13 D OLIVE: Evening, Sheriff.
14 D TUCK: Olive.
15 D OLIVE: You're off your range.
16 D TUCK: So are you.
17 D OLIVE: Not by my reckoning. This is my husband's ground.
18 D TUCK: Your husband's dead.
19 D OLIVE: Then it's mine.
* 20 A ¶ Wind in the iron blades.
* 21 A The cattle shift.
22 A Tuck lowers the rifle a few inches.
23 D TUCK (to the hills, tired): I'm too old for this.
24 D OLIVE: You were too old ten years ago.
25 D TUCK: Is that why you came? To tell me so?
26 D OLIVE: I came to ask you to leave.
27 D TUCK: I'll leave when I'm done.
28 D OLIVE: Done with what?
29 D TUCK: Looking at the water.
30 A ¶ She studies him a long moment.
31 A Then, slowly, she lays the shotgun in the bed of the buckboard and climbs down.
32 A She walks to the trough, kneels, and drinks from her cupped hands.
33 D OLIVE: It's good water.
34 D TUCK: It's the best in the county.
35 D OLIVE: He dug that well himself.
36 D TUCK: I know.
37 A ¶ She stands, wiping her palms on her duster.
38 A Tuck holsters the rifle.
39 D OLIVE: Stay for supper.
40 D TUCK: Is that an order?
41 D OLIVE: It's an apology.
42 A ¶ He smiles for the first time.
* 43 A The windmill turns, steady and patient, in the gathering dark.

### SCENE s00911 | INT. CARGO CRANE CAB - SHIPPING PORT - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RENATA VOSS, KARIM SALEH, LEO FONTANA, OLGA DRAGOMIR
* 1 A ¶ A glass cockpit forty metres above a sea of stacked containers.
* 2 A Sodium lamps glow below.
* 3 A Wind shakes the window.
* 4 A A thermos, a radio, a paper bag of cold fries.
5 A ¶ AGENT RENATA VOSS, 40s, crouches below the control panel, gun drawn, her breath fogging the glass.
6 A KARIM SALEH, 30s, the crane operator, sits frozen at the joystick, hands raised.
7 A LEO FONTANA, 50s, a dockworker with a limp, clutches a canvas satchel against his chest.
8 A OLGA DRAGOMIR, 40s, a customs officer, stands at the rear door with a flashlight, mouth tight.
9 D RENATA: Nobody move.
10 D KARIM: I'm not moving.
11 D LEO: Neither am I.
12 D OLGA (low): This isn't what we agreed.
13 D RENATA: Ma'am, put the light down.
14 A ¶ Olga lowers it.
* 15 A The beam wobbles across the floor.
16 A Leo takes one step back.
17 A Karim lowers one hand to the joystick.
18 A Renata and Olga fire a look at each other.
* 19 A The wind gusts.
* 20 A The cab sways.
21 D RENATA [CONT'D]: Mr. Fontana, the satchel.
22 D LEO: It's mine.
23 D RENATA: It's evidence.
24 D LEO: It's my pension.
25 D OLGA: Leo, shut up.
26 A ¶ They all freeze again, Renata with her gun on Leo, Leo with his satchel, Olga with her hand drifting inside her coat, Karim with his fingers inches from the lever.
* 27 A A truck horn blares on the dock far below.
28 A Everyone flinches.
29 D KARIM (whispering): I could drop them. One pull. The whole container.
30 D RENATA: Don't.
31 D KARIM: I'm saying I could.
32 D OLGA (sharp): Karim.
33 A ¶ Olga draws a pistol.
34 A Renata swings her aim.
35 A Leo dives.
36 A Karim yanks the lever.
* 37 A The crane lurches.
* 38 A Containers shriek in their chains.
39 A The floor tilts and everyone slides, gun, satchel, flashlight tumbling into the corner, and the whole cab begins to swing out over the black water.

### SCENE s00912 | INT. DERELICT FREIGHTER - AIRLOCK CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ROLAND SZYMANSKI, ENGINEER VIKTOR NILSSON
* 1 A ¶ Emergency strips pulse red.
* 2 A Frost on the bulkheads.
* 3 A A faint, steady hiss of failing air.
4 A ¶ CAPT. ROLAND SZYMANSKI, 50s, slumps against a wall, his suit torn at the shoulder, helmet cradled in his lap.
5 A ENGINEER VIKTOR NILSSON, 40s, kneels beside him with a pry bar and a flickering handlamp.
6 A ¶ He grips his arm.
7 A He grips the pry bar.
8 A He stares at the hatch.
9 A He's counting.
10 A He's losing.
11 D NILSSON: How much oxygen?
12 D SZYMANSKI: Eight minutes.
13 D NILSSON: Not enough.
14 D SZYMANSKI: It's what we've got.
15 A ¶ He pushes off the wall.
16 A Staggers.
17 A Nilsson catches him.
18 A He shrugs free.
19 A Then he does it again.
20 D NILSSON: Roland, stop.
21 D SZYMANSKI: We both stop, we both die.
22 D NILSSON: We both go on, we both die faster.
23 A ¶ He laughs.
24 A It becomes a cough.
25 A He wipes his mouth on a glove and stares at the red smear.
26 D SZYMANSKI: Open the hatch.
27 D NILSSON: It's jammed.
28 D SZYMANSKI: Then unjam it.
29 D NILSSON: I'm trying.
30 A ¶ He sets the bar against the seam and leans.
* 31 A Metal groans.
* 32 A Frost cracks off in sheets.
33 A He throws his weight into it a second time.
34 A A third.
* 35 A ¶ The hatch gives half an inch.
* 36 A Cold, clean air whistles through.
37 D NILSSON [CONT'D] (gasping): There.
38 D SZYMANSKI: Go.
39 D NILSSON: You first.
40 D SZYMANSKI: That's an order.
41 D NILSSON: Then I'm disobeying.
42 A ¶ He grips the wounded arm and hauls it over his shoulder.
43 A Together they wedge through the gap, a tangle of limbs and tubing, and tumble into the dark beyond.
* 44 A The hatch swings shut behind them with a single, final clang.

### SCENE s00913 | INT. STAGECOACH - MOVING - DAY
Detected names (may be incomplete or contain aliases): BOONE MCCREADY, JOSIAH PRICE, LILA STONE
1 A ¶ BOONE MCCREADY, 40s, a bounty hunter, sits wedged against the window with a battered rifle across his lap.
2 A JOSIAH PRICE, 60s, a whiskey drummer in a checked suit, fans himself with a hat.
3 A LILA STONE, 20s, in a grey travelling dress, holds a hatbox on her knees.
4 D BOONE: How far to Prosper Creek?
5 D JOSIAH: Another six hours. If the axle holds.
6 D LILA: It won't.
7 D JOSIAH: Young lady, you can't know that.
8 D LILA: I heard it crack at the last stop.
9 D BOONE: She's right.
10 D JOSIAH: You heard it too?
11 D BOONE: I heard the driver pray.
12 D JOSIAH: Drivers always pray.
13 D BOONE: Not that loud.
14 D LILA: What happens if it breaks?
15 D BOONE: We walk.
16 D JOSIAH: In this heat?
17 D BOONE: In any heat.
18 D LILA: I can walk.
19 D BOONE: Can you walk in those shoes?
20 D LILA: I walked here in them.
21 D JOSIAH: From where?
22 D LILA: From Ohio.
23 D JOSIAH: Ohio's two thousand miles.
24 D LILA: Then I've had practice.
25 D BOONE (a dry chuckle): She'll do.
26 D JOSIAH: What's in the hatbox, miss?
27 D LILA: A hat.
28 D JOSIAH: Just a hat?
29 D LILA: Mostly.
30 D BOONE: Don't ask, Josiah.
31 D JOSIAH: I'm only curious.
32 D BOONE: Curious gets you buried at Prosper Creek.
33 D JOSIAH: Is that so.
34 D BOONE: I've dug the graves.
35 D LILA: You dig graves?
36 D BOONE: I dig what pays.
37 D LILA: And what pays today?
38 D BOONE: Ask your friend.
39 D JOSIAH: I beg your pardon?
40 D BOONE: Mr. Price. Open your coat.
41 D JOSIAH: I will do no such thing.
42 D BOONE: Open it.
43 D JOSIAH: This is outrageous.
44 D LILA (quietly): He has a gun, Mr. McCready.
45 D BOONE: I know. I saw it at the depot.
46 D JOSIAH: Madam, you are mistaken.
47 D LILA: Sir, I'm not.
48 D JOSIAH (after a long breath): Well. That changes the arithmetic.
49 D BOONE: It does.
50 D JOSIAH: Who is the bounty on?
51 D BOONE: Not you, Josiah.
52 D JOSIAH: Then who?
53 D BOONE: Her.
54 A ¶ Lila's hands tighten on the hatbox.
* 55 A The coach lurches.
* 56 A Something cracks beneath them.
57 A Far off, the driver begins to pray very, very loudly.

### SCENE s00914 | EXT. THE MOSSBACK FERRY - ENCHANTED MARSH - TWILIGHT
Detected names (may be incomplete or contain aliases): ORLAITH, THORNE, BRACKEN, MISTRESS YARROW, PIPKIN LESS, LANTERN
* 1 A ¶ A flat-bottomed barge poled across a lake of black glass.
* 2 A Willow roots hang down like grey hair.
* 3 A Lanterns made of glass beetles bob at the corners of the deck.
* 4 A Frogs sing in a low, ancient chord.
5 A ¶ ORLAITH, 20s, a young ranger in moss-green leathers, leans on the rail with a longbow slung behind her shoulder.
6 A Freckles.
7 A Sharp grin.
8 A She watches the water for movement.
9 A ¶ THORNE, 40s, her older brother, stands at the prow, hand on his sword hilt, jaw set against a wind that isn't there.
10 A Broad.
11 A Scarred.
12 A Silent as a post.
13 A ¶ BRACKEN, 60s, the ferryman, poles the barge with slow, patient strokes.
14 A A bent old man in a coat sewn from bark and feathers.
15 A One eye milky white.
16 A ¶ MISTRESS YARROW, 50s, a herbalist in a patched purple cloak, kneels on the deck sorting dried flowers into a wooden case.
17 A She hums.
18 A ¶ PIPKIN THE LESS, 12, a boy no taller than a barrel, hides behind a stack of crates and clutches a talking lantern, which whispers to him.
19 D ORLAITH: How long till the far bank, Bracken?
20 D BRACKEN: Long as it takes.
21 D ORLAITH: That's not an answer.
22 D BRACKEN: It's the only one.
23 A ¶ She rolls her eyes, but her grin deepens.
24 A Thorne glances back at his sister, then forward again.
25 A Yarrow lifts a flower to the light.
26 D YARROW: Moonthistle. Almost gone from the marsh.
27 D ORLAITH: You've got a whole case.
28 D YARROW: That's why it's almost gone.
29 D PIPKIN (whispering to the lantern): She's stealing it.
30 D LANTERN (a tiny voice): Not stealing. Gathering.
31 D PIPKIN: Same thing.
32 D THORNE: Pipkin.
33 D PIPKIN: Yes, Thorne?
34 D THORNE: Stop talking to the lantern.
35 D PIPKIN: He talks first.
36 D THORNE: Then stop answering.
37 A ¶ Pipkin sulks.
* 38 A The ferry glides through a curtain of willow, and the light changes to a deep underwater green.
39 A Everyone falls quiet.
* 40 A Even the frogs.
41 D BRACKEN: Hush now.
42 D ORLAITH: What is it?
43 D BRACKEN: Something old.
44 A ¶ Thorne draws his sword an inch.
45 A Orlaith slips an arrow from her quiver without taking her eyes off the water.
46 A Yarrow closes the case with a quiet click.
47 A Pipkin ducks lower, and the lantern's glow dims to the colour of a candle in a drawer.
48 A ¶ The water bulges, slow and enormous, then settles again, leaving nothing but a ring of ripples spreading toward the banks.
49 D BRACKEN [CONT'D] (softly): Gone.
50 D THORNE: What was that?
51 D BRACKEN: The marsh saying hello.
52 D ORLAITH (muttering): Friendly.
53 D YARROW: It means we're welcome.
54 D PIPKIN (peeping out): Can I come out now?
55 D BRACKEN: Aye, boy.
56 A ¶ Pipkin scrambles out from behind the crates.
57 A He sits beside Yarrow, who gives him a sprig of moonthistle without a word.
58 A He tucks it behind his ear, grinning.
* 59 A ¶ The ferry drifts into the open water once more, and up ahead, through the gathering dusk, the far bank shimmers like a lit window.

### SCENE s00915 | INT. TOLLIVER HOUSE - KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GLORIA MENDEZ-HART, RAYMOND TOLLIVER, CLAIRE TOLLIVER
* 1 A ¶ Sunlight on yellow linoleum.
* 2 A A clock shaped like a rooster.
* 3 A A pot of coffee on the stove, a stack of unopened mail.
4 A ¶ GLORIA MENDEZ-HART, 60s, in a floral housecoat, cracks eggs into a bowl with practiced flicks.
5 A RAYMOND TOLLIVER, 60s, her husband, reads the newspaper at the table, spectacles low.
6 A CLAIRE TOLLIVER, 30s, their daughter, stands in the doorway with a suitcase in one hand and her car keys in the other.
7 D GLORIA: You're up early.
8 D CLAIRE: I couldn't sleep.
9 D GLORIA: Sit. I'll make you eggs.
10 D CLAIRE: I'm not hungry, Mama.
11 D GLORIA: Nonsense. You're a Tolliver. You're always hungry.
12 D RAYMOND (from behind the paper): She's got a point.
13 D CLAIRE: Daddy.
14 D RAYMOND: I'm just agreeing with your mother. It's rare, so savour it.
15 A ¶ Claire sets the suitcase down by the door.
16 A She hesitates.
17 A Then she sits at the table across from him, still holding her keys.
18 D GLORIA: Toast?
19 D CLAIRE: Sure.
20 D GLORIA: Butter or jam?
21 D CLAIRE: Both.
22 D GLORIA: That's my girl.
23 A ¶ She drops two slices into the toaster.
24 A Hums.
25 A Raymond turns a page.
* 26 A The clock ticks.
* 27 A A fly buzzes against the window.
* 28 A It is, in every way, an ordinary morning.
29 D RAYMOND: How's the drive?
30 D CLAIRE: Six hours.
31 D RAYMOND: Take the highway. The back road's a mess.
32 D CLAIRE: I know.
33 D RAYMOND: Stop for gas in Salina.
34 D CLAIRE: Daddy, I know.
35 D RAYMOND: I'm only saying.
36 D GLORIA: He's only saying.
37 D CLAIRE: Mama.
38 D GLORIA: What?
39 D CLAIRE: Nothing.
* 40 A ¶ The toast pops.
41 A Gloria sets a plate in front of her daughter, jam spread thick, butter melting.
42 A Claire stares at it.
43 D CLAIRE [CONT'D]: I need to tell you something.
44 D GLORIA: You always say that before you tell us something awful.
45 D CLAIRE: It isn't awful.
46 D RAYMOND (lowering the paper): Then say it.
47 D CLAIRE: I'm not going to Chicago.
* 48 A ¶ Silence.
* 49 A The rooster clock ticks.
50 D GLORIA: Of course you are. You've got the apartment.
51 D CLAIRE: I gave it up.
52 D RAYMOND: When?
53 D CLAIRE: Two weeks ago.
54 D GLORIA: Two weeks.
55 D CLAIRE: I didn't know how to tell you.
56 D RAYMOND: What about the job?
57 D CLAIRE: I quit.
58 D GLORIA (sharply): You QUIT?
59 D CLAIRE: Mama, please.
60 D GLORIA: You studied for six years.
61 D CLAIRE: I know.
62 D GLORIA: We paid for--
63 D RAYMOND: Gloria.
64 D GLORIA: What? I'm asking.
65 D RAYMOND: Let her talk.
66 D GLORIA: Claire. Talk.
67 A ¶ Claire folds her hands on the table.
68 A She looks first at her father, then at her mother, then at the plate of toast.
69 A Her voice, when it comes, is small and steady.
70 D CLAIRE: I'm sick.
71 A ¶ Gloria's whisk stops.
72 A Raymond's spectacles slide down his nose.
73 D CLAIRE [CONT'D]: I didn't want to say it until I was sure. Now I'm sure. I'm sorry.
74 D GLORIA (barely audible): Claire.
75 D CLAIRE: That's why I came home. To tell you in the kitchen. I thought... I don't know. I thought the kitchen would be easier.
76 D RAYMOND (a long moment): Is it the kind they fix?
77 D CLAIRE: They think so.
78 D RAYMOND: Then that's what we'll do.
79 D GLORIA (setting down the whisk): We will.
80 D CLAIRE: Mama--
81 D GLORIA: We will.
82 A ¶ She crosses the room, and takes her daughter's face in both her hands.
* 83 A The coffee boils over behind her.
84 A Nobody moves to stop it.

### SCENE s00916 | INT. COUNTRY MANOR - LIBRARY - DAWN
Detected names (may be incomplete or contain aliases): INSPECTOR HAMISH LOGAN, CONSTABLE RHIANNON DAVIES, ODILE FAURE
* 1 A ¶ Grey light through lead windows.
* 2 A A body-shaped hush over the room.
* 3 A A fallen chair.
* 4 A A wine glass shattered on the hearth.
5 A ¶ INSPECTOR HAMISH LOGAN, 50s, tweed and a tired moustache, stoops over a rug stained dark.
6 A CONSTABLE RHIANNON DAVIES, 20s, hovers with a notebook, pencil pressed so hard the lead snaps.
7 A MS. ODILE FAURE, 40s, the housekeeper, stands in the doorway with a lantern, upright as a candle.
8 D LOGAN: Who found him?
9 D ODILE: I did.
10 D DAVIES (overlapping): She says she heard a crash.
11 D ODILE (overlapping): At three. I came down in my robe.
12 D LOGAN: And the door?
13 D ODILE: Locked from inside.
14 D DAVIES: Locked from inside, sir. We had to break it.
15 D LOGAN: Who has the key?
16 D ODILE: Sir Percival.
17 D LOGAN: Where's the key now?
18 A ¶ Odile says nothing.
19 A Logan straightens, looks at the constable, who looks at the hearth.
20 A Odile steps into the room, sets down her lantern on the mantel, Davies wipes her pencil on her sleeve, Logan crouches again beside the rug, and the three of them move in slow, careful circles around the same dead space, until Davies suddenly freezes and points at the shattered glass.
21 D DAVIES: Sir. There's a key.
22 A ¶ Logan follows her finger.
* 23 A In the splintered crystal, glinting in the grey light, lies a small brass key.
24 D LOGAN (softly): Well, well.
25 A ¶ He looks at Odile.
26 A She does not blink.

### SCENE s00917 | INT. BLUMENTHAL FARMHOUSE - SUNPORCH - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): EZRA BLUMENTHAL, NELL BLUMENTHAL, KIP
* 1 A ¶ A glassed-in porch, ferns in coffee cans, a worn wicker couch.
* 2 A Dust motes spin in a long slant of gold.
* 3 A A crocheted blanket drapes the arm of the couch.
* 4 A The sound of crickets rises from the lawn.
5 A ¶ EZRA BLUMENTHAL, 80s, sits in a rocker with a tartan shawl across his knees.
6 A His hands are spotted and still.
7 A His eyes are the pale blue of old china.
8 A ¶ NELL BLUMENTHAL, 50s, his daughter, perches on the couch with a basket of mending, needle flashing.
9 A KIP, 9, her son, lies on the floor with a model airplane, flying it in circles above his head.
10 D KIP: Grandpa, did you really build a plane?
11 D EZRA: I built a glider.
12 D NELL: Dad, don't.
13 D EZRA: He asked.
14 D KIP: How high did it go?
15 D EZRA: Higher than the barn.
16 D NELL: It crashed into the barn.
17 D EZRA (a soft laugh): It crashed after the barn.
18 D KIP: Did you get hurt?
19 D EZRA: Only my pride.
20 D NELL: And your leg.
21 D EZRA: And the leg. Fine.
22 D KIP: Can we build one?
23 D NELL: Kip--
24 D EZRA: Of course. We'll start Saturday.
25 D NELL: Dad.
26 D EZRA: Saturday.
* 27 A ¶ The room goes quiet.
28 A Kip looks at his mother, then at his grandfather, then back at the plane in his hands.
* 29 A The crickets keep singing.
30 A Ezra gazes through the glass at the long grass, bending and straightening in the evening wind.
31 D EZRA [CONT'D] (to himself): Saturday.
32 A ¶ Nell stitches.
33 A She pulls the thread tight and bites it off.
34 A Her eyes are bright, and she does not look up.

### SCENE s00918 | INT. COURTHOUSE - BASEMENT HOLDING OFFICE - DAY
Detected names (may be incomplete or contain aliases): CORNELIA BASSETT, HAROLD VANTERPOOL
* 1 A ¶ Cinder-block walls, a steel table, a ringing phone.
* 2 A A water-stained ceiling.
* 3 A One window, barred, at ankle level.
4 A ¶ CORNELIA BASSETT, 40s, a defense attorney in a charcoal suit, paces with a stack of folders under one arm and a cold coffee in the other hand.
5 A She checks her watch.
6 A Again.
* 7 A ¶ The intercom on the wall crackles.
8 D HAROLD [V.O.] (through the speaker): Ms. Bassett? Ms. Bassett, are you there?
9 D CORNELIA: I'm here, Harold.
10 D HAROLD [V.O.]: They moved the hearing up.
11 D CORNELIA: To when?
12 D HAROLD [V.O.]: Ten minutes.
13 A ¶ She sets down the coffee.
* 14 A It sloshes over the lip.
15 A She looks at the folders, at the door, at the clock.
16 D CORNELIA: Where's my client?
17 D HAROLD [V.O.]: Still upstairs. Processing.
18 D CORNELIA: Tell them to hurry.
19 D HAROLD [V.O.]: I did.
20 D CORNELIA: Tell them again.
21 D HAROLD [V.O.]: I'm coming down.
* 22 A ¶ The intercom clicks off.
23 A She dumps the folders onto the table and tears through them, sheets flying.
* 24 A A door bangs somewhere above.
25 A Footsteps hammer the stairwell, and HAROLD VANTERPOOL, 60s, a sweating court clerk with a ring of keys and a bow tie askew, bursts in, holding a paper above his head like a prize.
26 A He wheezes and she whirls to meet him, snatching the paper, and he doubles over, hands on his knees, while she scans the page and slowly, grimly, begins to smile.
27 D CORNELIA: This is the affidavit.
28 D HAROLD: Found it in Judge Mercer's chambers.
29 D CORNELIA: You stole it.
30 D HAROLD: I borrowed it. Without asking.
31 D CORNELIA: Harold, you beautiful man.
32 D HAROLD (catching his breath): Ten minutes, Counselor.
33 D CORNELIA: Eight, now.
34 A ¶ She grabs her folders, squares her shoulders, and strides to the door.
35 A Harold straightens his bow tie.
36 D HAROLD: Good luck.
37 D CORNELIA: Luck is for the prosecution.

### SCENE s00919 | INT. OPERA HOUSE - FLY GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): SABINE ORTEGA, CALLUM REID, WANJIRU KARIUKI
* 1 A ¶ A narrow catwalk above the stage.
* 2 A Ropes and sandbags, counterweights, a chandelier cable thick as an arm.
* 3 A Below, a performance of "La Traviata" swells through the dark.
4 A ¶ SABINE ORTEGA, 40s, in black, crouches at a winch with a glass cutter.
5 A CALLUM REID, 30s, hangs from a harness, a duffel at his hip.
6 A WANJIRU KARIUKI, 20s, the new hire, grips the rail, eyes huge.
7 D SABINE: Quiet. Quiet.
8 D CALLUM: I am quiet.
9 D WANJIRU (whispering): Is it supposed to be this loud down there?
10 D SABINE: That's the opera.
11 D WANJIRU: It's very opera.
12 D SABINE: Cut the cable on my signal.
13 A ¶ She raises one gloved hand.
* 14 A Below, the soprano reaches a trembling high note.
* 15 A The audience gasps.
16 D SABINE [CONT'D]: Now.
17 D CALLUM: Wait, wait, wait.
18 D WANJIRU: Wait?
19 D CALLUM (speaking at once; speaking at once): SABINE There's a guard. There's no guard.
20 A ¶ They freeze.
* 21 A Far below, a flashlight beam slides across the stage and up through the rigging.
* 22 A It stops on the chandelier.
* 23 A It stops on them.
24 A ¶ She slides the cutter into her belt.
25 A He shifts his weight in the harness, the whole rig swaying.
26 A She looks at Callum.
27 A She looks at Wanjiru.
28 A Then she looks at the cable.
29 D SABINE [CONT'D] (a breath): Cut it anyway.
30 D WANJIRU: But--
31 D SABINE: Do it.
32 A ¶ Wanjiru closes her eyes, takes the cutter, and severs the cable.
* 33 A The chandelier drops.
* 34 A The audience screams.
* 35 A ¶ Everything goes dark.

### SCENE s00920 | INT. BELL TOWER OF THE DROWNED CHAPEL - DUSK
Detected names (may be incomplete or contain aliases): ORSOLYA VANE, TEMBO ADEYEMI-LUND, HOODED STRANGER, PIP, CORVANE
* 1 A ¶ A chapel sunk to its rafters in a black lake.
* 2 A The bell tower pokes above the water like a stubborn finger.
* 3 A Lantern light.
* 4 A Fish scales glitter on the beams.
5 A ¶ ORSOLYA VANE (40s, ferrywoman, salt-cracked hands) ladles broth into tin cups.
6 A Beside her, TEMBO ADEYEMI-LUND (20s, apprentice cartographer, ink on every cuff) unrolls a map.
7 A ¶ A HOODED STRANGER sits apart, back to the wall, a staff across his knees.
8 D ORSOLYA: Eat. The lake gives nothing back after dark.
9 D TEMBO: The map says the shoals are east of us.
10 D ORSOLYA: The map says a lot of things.
11 A ¶ Behind them, PIP (12, barefoot, a ferry rat) dangles from a rafter, grinning.
12 D PIP: I counted the bells. There's four.
13 D TEMBO: There were three on the chart --
14 D ORSOLYA: Pip, get down --
15 D STRANGER (quietly): He's right. Four.
16 D PIP: Told you!
17 D ORSOLYA: Who asked you?
18 D TEMBO (over her): Four? Where's the fourth?
19 D STRANGER: Where it always was.
* 20 A ¶ Silence.
* 21 A The water laps.
* 22 A The broth steams.
* 23 A Everything is calm.
24 A ¶ The Stranger lowers his hood.
25 A Pale eyes, a bell-metal collar fused to his throat.
26 D STRANGER [CONT'D]: My name is Corvane. I was the fourth.
* 27 A ¶ Below them, the water goes perfectly still.
* 28 A Then every lantern gutters at once.
29 D ORSOLYA: Pip. Tembo. Behind me.
30 D CORVANE: Too late for that, ferrywoman.
31 D PIP: He's ringing!
* 32 A ¶ A deep toll rolls up from under the lake.
* 33 A The floorboards shake.
34 D TEMBO: Make it stop!
35 D ORSOLYA (to herself): Should have left him on the shore.
36 D CORVANE: Tonight, you ring with me.

### SCENE s00921 | INT. DECOMMISSIONED GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IMOGEN KARLSSON-OYELARAN, MAXI, BRZEZINSKI, DISPATCHER, RAFFERTY DUNNE, SOLENNE DUNNE, ABEBE TSEGAYE
* 1 A ¶ A concrete cathedral of silos, six stories of rust and pigeon-dung, stairwells winding upward like the inside of a seashell.
* 2 A Moonlight falls through a broken roof panel and lays a cold coin on the floor.
3 A ¶ DETECTIVE IMOGEN KARLSSON-OYELARAN (40s, rain-colored coat, a limp she disguises as a stride) climbs the catwalk with a flashlight held low.
4 A Her breath fogs.
5 A ¶ Below, in the shadow of Silo Three, MAXIMILIAN "MAXI" BRZEZINSKI (30s, bookish, a scholar's stoop, hands trembling around a duffel bag) watches her ascend.
* 6 A ¶ A radio crackles on her belt.
7 D DISPATCHER [V.O.] (over radio): Karlsson, backup is eleven minutes out.
8 D IMOGEN: Eleven's too long.
9 D DISPATCHER [V.O.] (over radio): Say again?
10 A ¶ She switches the radio off.
* 11 A Above her, a boot scrapes iron.
12 A ¶ On the upper gantry, RAFFERTY DUNNE (50s, heavy, a gold tooth that catches the moon) and his niece, SOLENNE DUNNE (20s, shaved head, a ledger tucked under one arm) lean over the rail, perfectly still.
13 A ¶ Far across the chamber, ABEBE TSEGAYE (60s, retired elevator operator, a ring of keys at his belt) stands at the old control panel, one hand on a lever.
14 D ABEBE (calling out): Everyone stays where they are.
15 D RAFFERTY: Detective, you're early.
16 D IMOGEN: Mr. Dunne, put the ledger down.
17 D SOLENNE: It's not his ledger.
18 D RAFFERTY: It's not her ledger.
19 D MAXI (from below): It's mine!
* 20 A ¶ The echo carries the word up through six stories of concrete and back down again, thinner each time.
21 A ¶ Abebe's hand tightens on the lever.
* 22 A Somewhere beneath the floor, a conveyor chain groans awake.

### SCENE s00922 | INT. ABANDONED SALT-LICK CHAPEL - DAY
Detected names (may be incomplete or contain aliases): HOLLIS BRANDT-OKAFOR, MERCY, ELI
* 1 A ¶ A tin-roofed chapel on the edge of the alkali flats.
* 2 A Pews pulled out and stacked against the wall.
* 3 A In the middle of the floor, a block of rock salt the size of a coffin, glittering where the light finds it.
4 A ¶ HOLLIS BRANDT-OKAFOR stands in the doorway, dust to his knees.
5 A He is lean, sunburned, and carries a rifle like it weighs nothing.
6 A He lets his eyes adjust.
7 A ¶ Across the room, a woman sits on the altar rail with her boots swinging.
8 A She does not look up when he enters.
9 A She is peeling an orange with a skinning knife.
10 A ¶ At the back, in the pulpit, a boy no older than fifteen crouches with a canvas sack in his arms.
11 A He is trying to be invisible.
12 D HOLLIS: Mercy Calloway.
13 D MERCY: Marshal Brandt. You're a long way from a courthouse.
14 D HOLLIS: Forty miles. The horse died twenty back.
15 A ¶ She cuts a slice of orange and eats it.
16 D MERCY: Then you walked into the one place I know you'd come.
17 D HOLLIS: The boy.
18 D MERCY: He's not mine.
19 D HOLLIS: That's not what the telegraph said.
20 D MERCY: Telegraph says a lot.
21 D HOLLIS: It said you took his father's payroll. It said you took the father, too.
22 D MERCY: It said that.
23 D HOLLIS: Did you?
24 D MERCY: Do you want me to say yes so you can hang me, or no so you can call me a liar?
25 D HOLLIS: I want the truth.
26 D MERCY: Then you're the first man in this territory who does.
27 A ¶ She finally looks at the boy.
28 A He shrinks.
29 D MERCY [CONT'D]: Tell him, Eli. Tell him what you saw.
30 D ELI: I -- my pa --
31 D HOLLIS: Easy, son.
32 D ELI: My pa shot first.
33 D HOLLIS: At who?
34 D ELI: At her. She was only standing there.
35 D HOLLIS: Standing where?
36 D ELI: By the well. She had the sack, she was giving it back.
37 D MERCY: I told you, boy, that's enough.
38 D HOLLIS: No, let him finish.
39 D ELI: My pa wanted it for himself. He wanted all of it. He said if she lived, she'd talk.
40 D HOLLIS: And the father?
41 D ELI: He fell in the well.
42 D MERCY: He fell. Not pushed. Fell.
43 D HOLLIS: Eli, did she push him?
44 D ELI: No, sir.
45 D HOLLIS: Then why did you run?
46 D ELI: Because everybody said she did.
* 47 A ¶ A long silence.
* 48 A Salt ticks in the heat.
* 49 A Outside, wind starts pulling at the tin roof.
50 D HOLLIS: I walked forty miles for a killer.
51 D MERCY: And now?
52 D HOLLIS: Now I've got a witness and a thief and a sack of money that belongs to a dead man's widow.
53 D MERCY: That sounds like a mess, Marshal.
54 D HOLLIS: It sounds like a trial.
55 D MERCY: You'd put a fifteen-year-old on a stand against his own blood?
56 D HOLLIS: I'd put the truth on a stand. He's just how it gets there.
57 D ELI: I'll do it.
58 D MERCY: Eli --
59 D ELI: I'll do it, Miss Mercy. Somebody ought to say it out loud.
60 A ¶ Mercy slides off the altar rail.
61 A She folds the knife and sets it on the salt block, handle toward Hollis.
62 D MERCY: Then I suppose I'm in your custody.
63 D HOLLIS: I suppose you are.
64 A ¶ She holds out her wrists.
65 A He doesn't take them.
66 A He lifts the rifle, turns, and opens the chapel door to a white and blinding sky.
67 D HOLLIS [CONT'D]: Walk with me. It's forty miles.
68 D MERCY: And the boy?
69 D HOLLIS: He walks too.
70 A ¶ The three of them step out into the glare.

### SCENE s00923 | INT. BEEKEEPING DIVISION, MERIDIAN LOGISTICS ROOFTOP - DAY
Detected names (may be incomplete or contain aliases): DESMOND PRYCE-ADEBAYO, LUCINDA HOLT, GREG, SALAZAR, WINIFRED OKONKWO
* 1 A ¶ Forty hives.
* 2 A One mandatory synergy workshop.
* 3 A Everybody in veils.
4 A ¶ DESMOND PRYCE-ADEBAYO (40s, VP of Alignment) paces with a clicker.
5 A He clicks it at nothing.
6 D DESMOND: Our bees are our people. Our people are our bees.
7 A ¶ His assistant, LUCINDA HOLT (20s), scribbles.
8 A She is already stung twice.
9 A She keeps writing.
10 A ¶ Across the hives, GREGORIO "GREG" SALAZAR (50s, warehouse lead) glares through mesh.
11 A Beside him, WINIFRED OKONKWO (30s, HR) holds a smoker like a weapon.
12 D GREG: Nobody asked for bees.
13 D WINIFRED: Everyone voted for bees.
14 D DESMOND: Thank you both. Circle back offline.
* 15 A ¶ A hive hums louder.
16 A He grins.
17 A It is not a grin of confidence.
18 D LUCINDA (muttering): Q3 goals: don't die.

### SCENE s00924 | EXT. TELEGRAPH OFFICE, PRAIRIE JUNCTION - DAY
Detected names (may be incomplete or contain aliases): ZEKE, MORROW, TOMAS ESQUIVEL, BILLIE, TATE, DISPATCHER
* 1 A ¶ A single-room telegraph shack beside the railroad water tower, its porch sagging.
* 2 A Heat shimmers off the tracks.
* 3 A A pinto horse is tied to the rail, flicking flies.
4 A ¶ Inside the open door, EZEKIEL "ZEKE" MORROW (50s, stationmaster, sleeve garters, thick spectacles) sits at the key.
* 5 A The sounder chatters.
6 A He copies down a message, then looks up as hoofbeats thunder in.
7 A TOMAS ESQUIVEL (20s, deputy, hat low) swings off his horse, ties it badly, and bursts onto the porch, while behind him a lean stranger, WILHELMINA "BILLIE" TATE (30s, drover's coat, a rifle in the crook of her arm) rides up slowly and stays in the saddle, watching the street.
8 D TOMAS: Zeke! Is it true?
9 D ZEKE: Sit down, son.
10 D TOMAS: Is it true they're coming here?
* 11 A ¶ The sounder chatters again.
12 A Zeke raises a hand for quiet, writes, and then reads aloud.
13 D ZEKE: Tower says the Harlan gang crossed the river an hour ago.
14 D DISPATCHER [V.O.] (over the wire, read aloud by Zeke): Hold the junction. Do not engage. Repeat, do not engage.
15 D TOMAS: Do not engage? They'll burn the depot.
16 A ¶ Billie dismounts, walks up the steps, and without a word takes the telegram from Zeke's hand and reads it.
17 A Tomas stares at her rifle.
18 A Zeke takes off his spectacles and wipes them on his sleeve.
19 D BILLIE: Where's the sheriff?
20 D TOMAS: Dead. Fever, three days back.
21 D BILLIE: Then you're the law.
22 D TOMAS: I'm twenty-two.
23 D BILLIE: Today you're the law.
24 A ¶ A rider appears at the end of the street, then another, then five.
* 25 A Dust rises behind them.
26 A Tomas draws his pistol and his hand shakes.
27 A Zeke slides under the desk.
28 A Billie raises the rifle, levels it, and fires once.
29 A The lead horse rears, and the riders scatter behind the water tower.
30 D TOMAS: You hit him!
31 D BILLIE: I hit the horse. Don't thank me yet.
* 32 A ¶ Silence.
* 33 A Then a white handkerchief appears on a rifle barrel from behind the tower.
34 D ZEKE (from under the desk): Is that what I think it is?
35 D BILLIE: Somebody wants to talk.
36 A ¶ Tomas lets out a breath that is almost a laugh.
37 A Billie lowers the rifle but does not unload it.

### SCENE s00925 | EXT. CHURCH BELFRY, HOLLOWED VILLAGE - DAY
Detected names (may be incomplete or contain aliases): SERGEANT NIKOLAI VASSILIEV, PRIVATE ANNELIESE BRANDSTETTER, PRIVATE YUSUF DEMIR, CORPORAL HARLAN PIKE, SERGEANT
* 1 A ¶ A shattered belfry overlooking a flooded field.
* 2 A A stagnant afternoon.
* 3 A Rain has stopped but the sky has not made up its mind.
4 A ¶ SERGEANT NIKOLAI VASSILIEV (30s, tired, frost in his beard) sits on an ammunition crate, cleaning a rifle bolt with a rag, while PRIVATE ANNELIESE BRANDSTETTER (20s, a nurse's armband stitched crooked over her sleeve) rewraps a bandage and a fresh-faced boy, PRIVATE YUSUF DEMIR (19), watches the field through a gap in the stones and a radioman, CORPORAL HARLAN PIKE (40s, headset askew), lights a cigarette, drags on it, hands it to Yusuf, and takes the binoculars back without looking.
* 5 A ¶ A scrap of white cloth drifts across the flooded field, snagged on a pole that bobs and turns in the current.
6 A Beneath it, something pale struggles in the water.
7 D SERGEANT: Hold your fire. Let it come.
8 D YUSUF: It's a dog, Sergeant.
9 D NIKOLAI: It's a dog with a cloth round its neck. Wait.
10 D ANNELIESE: It's limping.
11 D PIKE: Could be a trick.
12 D ANNELIESE: Could be a leg.
13 A ¶ The dog stumbles in the water.
14 A Anneliese rises, but Nikolai catches her sleeve.
15 D NIKOLAI: Wait.
16 A ¶ She waits.
17 A Pike mutters into the handset, lowers it, and shrugs.
18 A Yusuf passes the cigarette back.
19 A Nikolai sets his rifle bolt on the crate, wipes his hands, and nods once.
20 D NIKOLAI [CONT'D]: Go and get it.
21 A ¶ Anneliese and Yusuf start down the stone steps together.
22 A Pike watches them go.
23 A Nikolai goes back to the bolt.
24 D PIKE: You'd have let it drown.
25 D SERGEANT: I'd have let it choose.
26 A ¶ He slides the bolt home.
* 27 A It clicks.
