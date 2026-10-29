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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0147.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01580 | EXT. ICE FIELD - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): TOVE HALVORSEN, BASE CAMP
* 1 A ¶ White.
* 2 A Everywhere.
* 3 A Wind drags spindrift across the surface like smoke.
* 4 A ¶ A tiny orange tent, half-collapsed.
* 5 A Skis stabbed upright in the snow.
6 A ¶ TOVE HALVORSEN (30s, frostbitten cheeks, goggles pushed up, a pack nearly as big as she is) crawls out of the tent on hands and knees.
7 A ¶ She stands.
8 A Staggers.
9 A Catches herself on a ski.
10 A ¶ A handheld radio hangs from her chest strap.
11 A She thumbs it.
12 D TOVE: Base, this is Tove. Do you copy?
* 13 A ¶ Static.
14 D TOVE [CONT'D]: Base. Tove. Anyone.
* 15 A ¶ Static.
* 16 A A hiss.
* 17 A Then, far away, thin as wire:
18 D BASE CAMP [V.O.] (over radio): ...ove... copy... say position...
19 D TOVE: Seventy-nine north. Three kilometers past the cairn.
20 D BASE CAMP [V.O.]: ...repeat...
21 D TOVE: Past the cairn! I've lost one ski pole! Tent's torn!
22 D BASE CAMP [V.O.]: ...storm... front... twelve hours...
23 A ¶ She looks up.
* 24 A To the west: a bruise-colored wall of cloud, creeping.
25 D TOVE: Twelve hours. Okay.
26 A ¶ She drops to her knees.
27 A Digs in her pack.
28 A Pulls out a thermos, shakes it, unscrews the cap.
29 A Drinks.
30 A Grimaces.
* 31 A Frozen slush.
32 A ¶ She tosses it.
* 33 A It skitters across the ice.
* 34 A ¶ Wind picks up.
* 35 A The tent flaps.
* 36 A The first flakes begin to fall.
37 D TOVE [CONT'D] (to herself): Pack. Move. Pack. Move.
38 A ¶ She grabs the tent poles.
39 A They snap in her gloves.
40 A She stares at the splinters.
41 D BASE CAMP [V.O.]: ...Tove... turn... back...
42 D TOVE: There is no back!
43 A ¶ She keys the radio again, voice cracking.
44 D TOVE [CONT'D]: Base, I'm going to walk. East. Toward the lights.
45 D BASE CAMP [V.O.]: ...no lights... east...
46 A ¶ She stops.
47 A Looks east.
* 48 A Nothing but white.
* 49 A ¶ The snow thickens.
50 A She zips her jacket to her chin.
51 A Lifts the pack.
52 A Staggers one step.
53 A Two.
* 54 A ¶ Behind her, the tent collapses completely.

### SCENE s01581 | INT. SYNERGY PARTNERS - OPEN OFFICE - FRIDAY, 4:55 PM
Detected names (may be incomplete or contain aliases): BRANDEN CHASE, PRIYANKA MENON, DEZ, WILLIAMS, CALLIE ZIMMERMAN, HOLLOWAY, VP
* 1 A ¶ Beanbags.
* 2 A A kombucha tap.
* 3 A A neon sign reads "GOOD VIBES ONLY."
4 A Under it, five exhausted people.
5 A ¶ BRANDEN CHASE (30s, quarter-zip, gelled hair) stands at a whiteboard that says "SYNERGY 2.0 - ALIGN.
* 6 A PIVOT.
* 7 A ELEVATE."
8 A ¶ PRIYANKA MENON (30s, headphones, eye bags) slumps at her desk.
9 A DESMOND "DEZ" WILLIAMS (40s, cardigan, thermos) chews a pen.
10 A CALLIE ZIMMERMAN (20s, intern, notebook) sits upright, vibrating.
11 A And MR. HOLLOWAY (60s, regional VP, face on a video call projected on the wall) frowns from a rectangle.
12 D BRANDEN: Okay team, quick pulse check before the weekend.
13 D PRIYANKA (muttering): There is no pulse.
14 D HOLLOWAY [V.O.] (from the screen): I can't hear you, Priyanka.
15 D PRIYANKA: I said I'm thrilled.
16 D BRANDEN: Dez, the Q3 deck?
17 D DEZ: Done.
18 D BRANDEN: Done done, or "done" done?
19 D DEZ: Done in the sense that I'll never open it again.
20 D CALLIE: I made a mood board!
21 D BRANDEN: Callie, love the energy.
22 D PRIYANKA (to Callie, low): Save it. They'll sell it back to you.
23 D HOLLOWAY [V.O.]: Someone mentioned the layoffs?
24 D BRANDEN: No one mentioned layoffs, sir.
25 D HOLLOWAY [V.O.]: Because I'm seeing a rumor.
26 D DEZ (to himself): I'm seeing a door.
27 D BRANDEN: Team, let's take a breath.
28 D PRIYANKA: Everyone breathing? Great. Branden, are we getting cut?
29 D BRANDEN: I can't speak to that.
30 D PRIYANKA: You can speak to everything else.
31 D DEZ: He's mute on the one subject that matters.
32 D CALLIE: Is this a good time to share my mood board?
33 D HOLLOWAY [V.O.]: Callie, was it? We'll circle back.
34 D BRANDEN: Okay. Okay. Let's all just, you know, honor the process.
35 D PRIYANKA: The process has a sign-off sheet?
36 D DEZ: Process is a verb, Priyanka. We are the object.
37 D HOLLOWAY [V.O.]: I'll let you all go early. Happy weekend.
* 38 A ¶ The screen goes black.
39 A Nobody moves.
40 D BRANDEN (brightly): Great sync, everyone.
41 A ¶ He erases "ELEVATE" with his sleeve.
42 A Callie slowly closes her notebook.
43 D DEZ (to himself): I'm going to miss the kombucha.

### SCENE s01582 | EXT. DESERT SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): MARIBEL SOTO, ANDRÉS, OLD MAN BENEDICTO
* 1 A ¶ Glare.
* 2 A White crust to every horizon.
* 3 A A jeep sits with its hood up, wheels sunk to the axles.
4 A ¶ MARIBEL SOTO (30s, wide-brim hat, cracked lips) kneels at the engine.
5 A Her brother ANDRÉS (20s, sunburned neck) sits in the shade of the jeep, rationing a water bottle with one eye.
6 A ¶ She wipes her hands on her jeans.
7 A He caps the bottle.
8 D ANDRÉS: Anything?
9 D MARIBEL: Radiator's dry.
10 D ANDRÉS: How dry?
11 D MARIBEL: Bone.
12 D ANDRÉS: How much water do we have?
13 D MARIBEL: You're holding it.
14 A ¶ He turns the bottle upside down.
* 15 A A few drops.
16 D ANDRÉS: I thought we had four.
17 D MARIBEL: We had four. You drank two on the first day.
18 D ANDRÉS: You told me to.
19 D MARIBEL: I told you to sip.
20 D ANDRÉS: I sipped.
21 D MARIBEL: Big sips.
22 D ANDRÉS: You said the road was forty miles.
23 D MARIBEL: It was forty miles.
24 D ANDRÉS: It's been eighty.
25 D MARIBEL: I know.
26 D ANDRÉS: We took the wrong turn.
27 D MARIBEL: You took the wrong turn.
28 D ANDRÉS: I was reading your map.
29 D MARIBEL: My map was fine.
30 D ANDRÉS: Your map was upside down.
31 A ¶ She stands.
32 A Wipes her face.
33 A He rises with her, squinting.
* 34 A ¶ On the horizon: a shimmer.
* 35 A A dot.
* 36 A A dust plume.
37 A ¶ They both freeze.
38 D ANDRÉS [CONT'D]: Is that a car?
39 D MARIBEL: Don't hope.
* 40 A ¶ The dot grows.
* 41 A A battered pickup rolls out of the glare and stops thirty feet away.
* 42 A ¶ The door opens.
43 A OLD MAN BENEDICTO (70s, straw hat, a jug of water slung over one shoulder) climbs down.
44 A He looks at the jeep.
45 A Looks at them.
46 D BENEDICTO: You are very far from the road.
47 A ¶ Maribel steps forward.
48 D MARIBEL: Please. Water.
49 A ¶ He unslings the jug.
50 A Holds it out.
51 A She takes it with both hands and drinks.
52 A Andrés watches, trembling.
53 D BENEDICTO: Slowly. Slowly.

### SCENE s01583 | INT. BELLTOWER OBSERVATORY - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR AMBROSE QUILL, SEXTON
* 1 A ¶ A cramped brass-and-oak room at the top of a church tower.
* 2 A Star charts curl on the walls.
* 3 A A telescope points through a roof hatch.
4 A ¶ PROFESSOR AMBROSE QUILL (70s, cardigan, wire spectacles) sits at a desk, writing in a leather journal.
5 A He pauses.
6 A Taps his pen.
7 A Lifts his head as though listening.
8 A ¶ He rises, crosses to a brass speaking tube on the wall, and uncaps it.
9 D AMBROSE (into tube): Mrs. Pennywhistle?
10 D SEXTON [V.O.] (distant, tinny): Yes, Professor?
11 D AMBROSE: Did you take the key to the lower cabinet?
12 D SEXTON [V.O.]: No, sir. It was on its hook at supper.
13 A ¶ He frowns.
14 A Looks to the cabinet.
* 15 A The door is ajar.
16 D AMBROSE: It is not there now.
17 D SEXTON [V.O.]: Shall I come up?
18 A ¶ He considers.
19 A Glances at the journal on the desk, then at the dark hatch above.
20 D AMBROSE: No. Thank you. I believe I know where it is.
21 A ¶ He caps the tube.
22 A Returns to his desk.
23 A Opens a drawer.
* 24 A The key lies inside, dusted with chalk.
25 A ¶ He smiles faintly.
26 A Closes the drawer.

### SCENE s01584 | INT. VICTORIAN CONSERVATORY - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY EVELYN ASHCROFT, JULIAN THORNBURY
* 1 A ¶ Glass roof, iron ribs.
* 2 A Ferns the size of carriages.
* 3 A A wrought-iron table set for tea in the middle of a green jungle.
4 A ¶ LADY EVELYN ASHCROFT (60s, lavender silk, a cane she uses more for pointing than walking) pours from a silver pot.
5 A Across from her, MR. JULIAN THORNBURY (30s, young solicitor, tight collar, too-new gloves) perches on the edge of a wicker chair.
6 D EVELYN: Sugar, Mr. Thornbury?
7 D JULIAN: Two, thank you.
8 D EVELYN: Two. Ambitious.
9 D JULIAN: I have a sweet tooth, Lady Ashcroft.
10 D EVELYN: I have a lawyer's nephew with a sweet tooth. I trust you are not he.
11 D JULIAN: I am nobody's nephew, my lady.
12 A ¶ She drops two lumps.
13 A Stirs once.
14 A Hands the cup across.
15 D EVELYN: Then you have no reason to flatter me.
16 D JULIAN: I flatter no one.
17 D EVELYN: A pity. I should like to be flattered. At my age it is the only vitamin.
18 A ¶ He sips.
19 A Burns his tongue.
20 A Hides it.
21 D JULIAN: My firm has sent me about the estate.
22 D EVELYN: The estate.
23 D JULIAN: The matter of the east orchard.
24 D EVELYN: The orchard has been mine for forty years.
25 D JULIAN: And the Hargreaves family wishes to purchase it.
26 D EVELYN: The Hargreaves family wishes a great many things.
27 D JULIAN: They offered considerably more than market value.
28 D EVELYN: Then it is worth considerably more than market value.
29 D JULIAN (carefully): That is what the firm suspects.
30 A ¶ She sets down the pot.
31 A Studies him.
32 D EVELYN: You are not as foolish as you dress.
33 D JULIAN: I beg your pardon.
34 D EVELYN: Nothing. Another biscuit?
35 D JULIAN: Thank you.
36 A ¶ He takes one.
37 A She watches him bite.
38 D EVELYN: Do you know what grows in the east orchard, Mr. Thornbury?
39 D JULIAN: Apples, I assume.
40 D EVELYN: Apples. Pears. And beneath the fourth pear tree, a good deal else.
41 D JULIAN: My lady?
42 D EVELYN: Eat your biscuit.
43 A ¶ He does.
* 44 A A parrot shrieks somewhere in the ferns.
45 A They both pretend not to hear it.
46 D EVELYN [CONT'D]: My late husband was a collector.
47 D JULIAN: Of what?
48 D EVELYN: Whatever he could not bear to leave to others.
49 D JULIAN: That is a poet's phrase.
50 D EVELYN: He was not a poet.
* 51 A ¶ A pause.
* 52 A The rain begins on the glass.
* 53 A Soft, then steady.
54 D JULIAN: Is there anything I should tell the Hargreaves?
55 D EVELYN: Tell them the orchard is not for sale.
56 D JULIAN: May I tell them why?
57 D EVELYN: You may tell them it is sentimental.
58 D JULIAN: Is it?
59 D EVELYN: Entirely.
60 D JULIAN: I shall convey it.
61 A ¶ She pours him more tea.
62 A They sit for a while without speaking.
63 D JULIAN [CONT'D] (gently): Lady Ashcroft, the firm will not stop at one letter.
64 D EVELYN: Then the firm will find me at home.
65 D JULIAN: You are very brave.
66 D EVELYN: I am very old. It is a different thing.
67 A ¶ He smiles.
68 A She smiles back.
* 69 A In the glass, the rain keeps falling.
70 D EVELYN [CONT'D]: Another cup, Mr. Thornbury?
71 D JULIAN: Please.
72 A ¶ She pours.
* 73 A The steam rises between them.

### SCENE s01585 | INT. ABANDONED AQUARIUM - TUNNEL EXHIBIT - NIGHT
Detected names (may be incomplete or contain aliases): KENJI MORITA, BEA, CALDERON, TYRELL BANKS, NOOR HAMDAN
* 1 A ¶ A glass tunnel, drained.
* 2 A Green slime on the walls.
* 3 A Dead fish skeletons lie on the sand like dropped coins.
* 4 A Water drips somewhere.
5 A ¶ Four teenagers huddle in the beam of one flashlight.
6 A ¶ KENJI MORITA (17, backpack, scared grin) holds the light.
7 A BEATRIZ "BEA" CALDERON (17, hoodie, steady) holds his sleeve.
8 A TYRELL BANKS (18, letterman jacket, loud) leads.
9 A And NOOR HAMDAN (16, glasses, camera strapped around her neck) trails behind them.
10 D TYRELL: See? Nothing.
11 D KENJI: It's very dark.
12 D BEA: It's an aquarium.
13 D NOOR: It's a dead aquarium.
* 14 A ¶ A sound.
* 15 A A wet slap on glass above them.
16 A All four freeze.
17 A The flashlight shakes.
18 D KENJI: What was that?
19 D TYRELL: Nothing.
* 20 A ¶ At the end of the tunnel, a shape rises from the dried sand.
21 A Tall.
22 A Dripping.
23 A Gill slits flutter along its neck.
24 D BEA (whispering): Guys.
25 D NOOR (whispering): Guys.
26 D KENJI (at the same time): Guys?
27 D TYRELL (at the same time): Run.
28 D BEA: ^Run!
29 A ¶ They scatter.
30 A Kenji drops the flashlight.
* 31 A It rolls, spinning light across the walls.
32 A The shape lunges.

### SCENE s01586 | EXT. FROZEN QUARRY LAKE - DUSK
Detected names (may be incomplete or contain aliases): LEILA RAHIMI, WYATT PRUITT, CORA, DELGADO, ANTON
* 1 A ¶ Black ice.
* 2 A Gray sky.
* 3 A Snow drifting sideways.
4 A ¶ Four figures on the surface, roped together, each separated by ten feet of slack.
5 A ¶ LEILA RAHIMI (30s, point, goggles fogged) tests the ice with a pole.
6 A Behind her, WYATT PRUITT (50s, quiet, bad knee) hauls a sled.
7 A Then CORAZON "CORA" DELGADO (20s, hood up), carrying the radio.
8 A Last, a boy of twelve, ANTON (swallowed by an adult parka), stays close to the sled.
9 A ¶ Leila stops.
10 A Raps the pole twice.
* 11 A The ice answers with a dull, hollow note.
12 D LEILA: Left. Wider.
13 D WYATT: Left is the long way.
14 D LEILA: Left.
15 D CORA: We could cut across.
16 D LEILA: We could.
* 17 A ¶ Nobody moves.
18 A Wyatt adjusts the sled strap.
19 A Anton looks at the horizon.
20 D WYATT: I used to skate here as a kid. Every winter. We'd race from the north wall to the pumphouse. I always lost.
21 D CORA: You lost?
22 D WYATT: My brother won. He was faster. He was always faster.
23 D CORA: Where is he now?
24 D WYATT: Montana.
25 D CORA: That's far.
26 D WYATT: It's far enough.
27 D LEILA: Cora, how's the radio?
28 D CORA: Quiet.
29 D LEILA: Try it.
30 D CORA: It's been quiet all day.
31 D LEILA: Try it.
32 A ¶ Cora thumbs the radio.
* 33 A Static.
* 34 A Nothing else.
35 A She lowers it.
36 D WYATT: My brother says the ice thins near the pumphouse. Where the old pipe runs.
37 D LEILA: Which is where we're headed.
38 D WYATT: Yes.
39 D LEILA: So you think we should go left.
40 D WYATT: I think we should go left.
41 D CORA: Anton, you okay?
42 A ¶ Anton nods, not looking at her.
43 A He tugs the rope at his waist, once, twice, as though checking that it is real.
44 D LEILA: Wyatt, tie the sled shorter.
45 D WYATT: It'll drag.
46 D LEILA: Then it drags.
47 A ¶ He kneels, wincing.
48 A Shortens the line.
* 49 A The ice creaks.
50 A Everyone looks down.
51 D CORA: That was nothing.
52 D LEILA: That was something.
* 53 A ¶ A long crack, like a rifle shot, rolls across the lake.
54 A They stand rigid.
55 A Anton drops to his knees, flat.
56 A The others follow, spreading their weight.
* 57 A ¶ Silence.
* 58 A Snow falls on four still bodies.

### SCENE s01587 | INT. DISUSED FUNICULAR CAR - NIGHT
Detected names (may be incomplete or contain aliases): AGENT CLEMENTINE ROUX, RODION VASILYEV, FELIX, SABINE HOLT
* 1 A ¶ A wooden car stalled halfway up a mountain track, lights guttering.
* 2 A Outside, black pines and a vertical drop.
3 A Inside, four people, a thermos, and a briefcase handcuffed to someone's wrist.
4 A ¶ AGENT CLEMENTINE ROUX (40s, trench coat, the kind of face that gives nothing away) grips the briefcase handle.
5 A Across from her sits RODION VASILYEV (50s, fur collar, a gold tooth catching the light).
6 A Beside her, a young porter, FELIX (20s, uniform two sizes too big), shakes.
7 A At the rear window, a woman named SABINE HOLT (30s, driver's gloves, bruised lip) watches the track below.
8 D CLEMENTINE (to everyone): Nobody touches the emergency brake.
9 D RODION: It is already stuck.
10 D FELIX: The cable's frayed. I told the foreman. I told him twice.
11 D SABINE (to herself): Of course you did.
12 D CLEMENTINE: Felix, how long until the next car?
13 D FELIX: There isn't one. We're the last run.
14 D RODION: Then we wait.
15 D CLEMENTINE (to the group): We don't wait. Someone in this car cut that cable.
16 A ¶ Sabine turns.
17 A Rodion leans forward.
18 A Felix presses against the wall.
19 D RODION: You accuse us?
20 D CLEMENTINE: I accuse the cable.
21 D SABINE (softly): She is right.
22 A ¶ Felix lunges for the door handle.
23 A Rodion catches his collar.
24 A Sabine grabs Rodion's wrist.
* 25 A The briefcase swings on its chain.
26 A Clementine slams it against the window, glass cracking, cold air hissing through.
27 A ¶ For a moment, all four are tangled.
* 28 A Then the car lurches.
29 A Everyone freezes.
* 30 A ¶ The sound of a single strand parting, far above.
31 D CLEMENTINE (low): Nobody breathe.
32 A ¶ Rodion lets go of Felix.
33 A Sabine lets go of Rodion.
34 A Slowly, painfully, they all sit down.
35 D RODION (to himself): I told Anton we should have taken the road.
* 36 A ¶ Outside, wind.
* 37 A Inside, the thermos rolls across the floor and stops against Felix's boot.

### SCENE s01588 | INT. OPERA HOUSE - BALCONY BOX - EVENING
Detected names (may be incomplete or contain aliases): CLAIRE, JACK, MADAME DUBOIS, GENERAL HARTLEY
* 1 A ¶ Velvet.
* 2 A Gilt.
* 3 A Below, an orchestra tunes.
4 A ¶ CLAIRE (30s, emerald gown) sits rigid.
5 A Beside her, JACK (30s, tux, a man who bought tickets in a hurry).
6 A Two seats behind: her mother, MADAME DUBOIS (60s, pearls, lorgnette), and his father, GENERAL HARTLEY (60s, medals, mustache).
7 A ¶ She does not look at him.
8 A He does not look at her.
9 A ¶ Her fingers drum the armrest.
10 A His gaze stays on the stage.
* 11 A ¶ The lights dim.
* 12 A The overture begins.
13 A His hand drifts toward hers, hesitates, withdraws.
14 A She notices.
15 A ¶ Madame Dubois lowers her lorgnette.
16 A The General coughs.
17 D CLAIRE (whispering): You came.
18 D JACK (whispering): You asked.
19 D CLAIRE: I asked in March.
20 D JACK: I got the letter in June.
* 21 A ¶ The music swells.
22 A She turns at last.
23 A He meets her eyes.
24 A The General leans forward to hear.
25 A Madame Dubois leans too.
26 D CLAIRE (whispering): Stay for the second act?
27 D JACK (whispering): Forever.

### SCENE s01589 | INT. NIGHT FERRY - OBSERVATION DECK - NIGHT
Detected names (may be incomplete or contain aliases): DAHLIA OYELARAN, RUSSELL KAPLAN, INGRID SOLBERG, BASIL MWANGI
* 1 A ¶ Open air, plastic benches, a vending machine blinking in the corner.
* 2 A The engine thrums underfoot.
* 3 A Black water, white wake.
4 A ¶ DAHLIA OYELARAN (30s, peacoat, a half-eaten sandwich) leans on the rail.
5 A Her ex, RUSSELL KAPLAN (30s, scarf, hands in pockets), stands three feet away, as close as he dares.
6 A ¶ Below them on the car deck, two figures drift between vehicles: INGRID SOLBERG (60s, captain's cap, a flashlight) and her deckhand, BASIL MWANGI (20s, orange vest, earbuds).
7 D DAHLIA: You followed me.
8 D RUSSELL: I took the same boat.
9 D DAHLIA: At midnight.
10 D RUSSELL: It was the last one.
11 D DAHLIA: It's always the last one with you.
12 A ¶ He laughs once, short.
13 A She doesn't.
* 14 A The ferry horn blows.
15 D RUSSELL: I got the job in Tallinn.
16 D DAHLIA: Good for you.
17 D RUSSELL: I turned it down.
18 D DAHLIA: Why?
19 D RUSSELL: You know why.
20 D DAHLIA: I don't.
21 D RUSSELL: Dahlia.
22 D DAHLIA: Say it.
23 D RUSSELL: Because you're here.
24 A ¶ She turns.
25 A Wind in her hair.
26 A He steps closer.
27 D DAHLIA: Four years, Russell. Four.
28 D RUSSELL: I counted every one.
29 D DAHLIA: You counted?
30 D RUSSELL: Like a prisoner.
31 A ¶ She looks at him, then at the water, then back.
32 D DAHLIA: I almost called you in February.
33 D RUSSELL: What stopped you?
34 D DAHLIA: The phone.
35 D RUSSELL: It was broken?
36 D DAHLIA: It was mine.
37 A ¶ He grins in spite of himself.
38 A She does too.
* 39 A A small, reluctant thaw.
40 D RUSSELL: I love you. Still. Dumb, isn't it?
41 D DAHLIA: Very.
42 D RUSSELL (hopeful): But?
43 D DAHLIA: But nothing.
44 A ¶ She takes his hand.
* 45 A A beat.
* 46 A Then Ingrid's voice cuts through the PA.
47 D INGRID [V.O.] (over loudspeaker): Attention passengers. We will dock in ten minutes.
48 D BASIL [V.O.] (over loudspeaker, muffled): Also, someone left a sandwich on bench seven.
49 D DAHLIA: That's mine.
50 D RUSSELL: You're going to leave it?
51 D DAHLIA: I'm going to stay.
52 A ¶ He leans in.
53 A They kiss.
54 D RUSSELL: ^I want to tell my mother.
55 D DAHLIA: ^I want to tell mine.
56 A ¶ They break apart, laughing, and she lifts her phone.
57 A His expression changes.
58 D RUSSELL: What's that?
59 D DAHLIA: A message.
60 D RUSSELL: From who?
61 A ¶ She turns the screen toward him.
* 62 A A name: "ELLIOT."
* 63 A Under it: "Ready for you at the port."
64 D DAHLIA: I was going to tell you.
65 D RUSSELL: When?
66 D DAHLIA: Tonight.
67 D RUSSELL: Dahlia.
68 D DAHLIA: It's complicated.
69 D RUSSELL: It always is.
70 A ¶ He steps back.
* 71 A The ferry lurches as it enters the harbor.
* 72 A Lights ahead.
73 D RUSSELL [CONT'D]: Who is he?
74 A ¶ She opens her mouth.
* 75 A The ferry horn drowns her answer.

### SCENE s01590 | INT. CURLING CLUB - SHEET THREE - EVENING
Detected names (may be incomplete or contain aliases): ROCKS FALLING, COACH MARGUERITE LAVOIE, BJORN HALLDORSSON, DEZ, ARCHER, WILLA, NG, TAMSIN OKORO, ALTERNATE POPPY DUNLEAVY
* 1 A ¶ Pebbled ice, humming compressors.
* 2 A A scoreboard reads: ROCKS FALLING, HOUSE TIED.
3 A ¶ COACH MARGUERITE LAVOIE (50s, club jacket, whistle) watches from the hack.
4 A Skip BJORN HALLDORSSON (40s, broom, one-glove) kneels in the house, calling the line.
5 A Third DESMOND "DEZ" ARCHER (20s, jittery) cradles a stone.
6 A Second WILHELMINA "WILLA" NG (30s, goggles) sweeps beside it.
7 A Lead TAMSIN OKORO (20s, ponytail) holds the broom.
8 A And ALTERNATE POPPY DUNLEAVY (teen, coat zipped to chin) sits on the bench, gripping her knees.
9 D BJORN: Dez, hold.
10 D DEZ: Holding.
11 A ¶ Marguerite does not speak.
12 A Her eyes move from Dez to the stone to Poppy and back.
13 D BJORN: Easy weight.
14 A ¶ Dez releases.
* 15 A The stone glides.
16 A Willa and Tamsin sweep in sync, the sound of brooms like rain.
17 D WILLA: Hard!
18 D TAMSIN: Hurry hard!
* 19 A ¶ The stone slows.
20 A Poppy leans forward.
* 21 A It curls, kisses the guard, and stops one inch from the button.
* 22 A ¶ Silence.
23 A Then Marguerite lowers her whistle, takes a breath, and sits down next to Poppy.
24 D MARGUERITE (quietly): You're up next.
25 A ¶ Poppy swallows.
26 A Nods.
27 A Stands.
28 A Takes off her coat.
* 29 A Underneath: the jersey, a size too large.
30 A She picks up a stone.
31 A ¶ Behind her, the whole team watches.
32 A She walks to the hack.

### SCENE s01591 | INT. ABANDONED CARNIVAL - HALL OF MIRRORS - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE NAOMI FAIRWEATHER, DETECTIVE CASPIAN ROTH, LUCIA FERREIRA, THE CARNY
* 1 A ¶ Cracked glass multiplies everything.
* 2 A A hundred reflections of a hundred flashlights, swimming in the dark.
* 3 A ¶ Four silhouettes pick through the maze.
4 A DETECTIVE NAOMI FAIRWEATHER (40s, rain jacket, gun at her hip).
5 A Her partner DETECTIVE CASPIAN ROTH (30s, tall, careful).
6 A A hostage, LUCIA FERREIRA (20s, torn dress, hands bound), shoved ahead by the fourth: THE CARNY (50s, grease-stained vest, a pistol, a nervous laugh).
7 D THE CARNY: Don't come closer.
8 D NAOMI: We're not.
* 9 A ¶ The mirrors show otherwise.
* 10 A Dozens of Naomis advancing.
11 A The Carny spins, firing at a reflection.
* 12 A Glass explodes in a silver storm.
13 A ¶ Lucia drops to the floor.
14 A Caspian dives behind a panel.
15 A Naomi flattens against the wall.
16 A The Carny turns, turns again, lost among his own faces.
17 D NAOMI [CONT'D] (low): Caspian. Left.
18 A ¶ He crawls.
19 A The Carny fires again.
* 20 A Another mirror blows.
21 A Fragments rain down on Lucia, who covers her head.
22 D CASPIAN (whispering): Lucia. Stay low.
23 A ¶ The Carny laughs, high and thin.
* 24 A Footsteps.
* 25 A A hundred of them.

### SCENE s01592 | INT. MERIDIAN INSURANCE - BASEMENT FILE ROOM - MORNING
Detected names (may be incomplete or contain aliases): GERALD PLUMMER, STRANGER, DANA, HARRIET OKAFOR-BLYTH
* 1 A ¶ Gray shelves.
* 2 A Gray boxes.
* 3 A One flickering fluorescent tube.
* 4 A A sign: "REMEMBER: DOCUMENTATION IS PROTECTION."
5 A ¶ GERALD PLUMMER (50s, short-sleeved dress shirt, lanyard) wheels a cart of folders down the aisle, whistling a tune with no melody.
6 A He stops at a shelf, squints at a label.
7 A ¶ A woman steps out of the shadows.
8 A She wears an expensive coat.
9 A No lanyard.
10 A No badge.
11 A A STRANGER.
12 D STRANGER: Excuse me. Are you the file clerk?
13 D GERALD: Archivist.
14 D STRANGER: Archivist. I'm looking for the Henderson claim.
15 D GERALD: Which Henderson?
16 D STRANGER: The big one.
17 D GERALD: They're all big, miss.
18 A ¶ She smiles thinly and holds out a hand.
19 D STRANGER: I'm Dana. Dana Whitfield. From corporate.
20 D GERALD (delighted): Oh! The audit.
21 D DANA: Not an audit. A review.
22 D GERALD: Gerald Plummer. Twenty-six years in this basement.
23 D DANA: Impressive.
24 D GERALD: It's a very nice basement.
25 A ¶ A third figure appears at the end of the aisle.
26 A HARRIET OKAFOR-BLYTH (30s, headset, tablet) walks briskly toward them, typing as she goes.
27 D HARRIET: Gerald, I was told you'd be upstairs for the town hall.
28 D GERALD: I was told the town hall was optional.
29 D HARRIET: It's mandatory.
30 D GERALD: Then who told me it was optional?
31 D HARRIET: Dana, were you speaking to him?
32 D DANA: Briefly.
33 D HARRIET: Did you mention the restructuring?
34 D DANA: I did not.
35 D GERALD: What restructuring?
36 A ¶ Harriet and Dana exchange a look.
* 37 A The light flickers.
38 D HARRIET (carefully): Gerald, why don't you come upstairs.
39 D GERALD: Why?
40 D DANA: There's cake.
41 D GERALD: Is it a retirement cake?
42 D DANA: It could be.
43 A ¶ Gerald looks down at the cart.
* 44 A At the Henderson folder on top.
45 D GERALD: Then I'd better file this first.
46 A ¶ He wheels the cart away, whistling, as Dana and Harriet watch him go.

### SCENE s01593 | INT. COUNTY ARCHIVE - READING ROOM - RAINY AFTERNOON
Detected names (may be incomplete or contain aliases): TEDDY, BRANDT, EZEKIEL FAIRBANKS, MIRIAM ACHTERBERG
* 1 A ¶ High windows, streaked with rain.
* 2 A Oak tables.
* 3 A Green-shaded lamps.
* 4 A The hush of paper.
5 A ¶ THEODORA "TEDDY" BRANDT (40s, cardigan, a pencil behind her ear) turns the pages of a bound ledger with white cotton gloves.
6 A At the next table, EZEKIEL FAIRBANKS (60s, tweed, a magnifying glass on a cord) reads a yellowed newspaper.
7 A And behind the desk, the archivist MIRIAM ACHTERBERG (50s, bun, reading glasses on her forehead) sorts index cards.
8 A ¶ Teddy stops on a page.
9 A Lifts a corner with her pencil.
10 A Looks again.
11 A ¶ She glances at Ezekiel.
12 A He is watching her over the top of his newspaper.
13 A They both look away.
14 D MIRIAM (to the room): Reading room closes at five, everyone.
15 A ¶ Neither responds.
16 A ¶ Teddy photographs the page with her phone, the shutter click loud in the silence.
17 A Miriam's eyes flick up, then down.
18 A She files a card.
19 A ¶ Ezekiel rises, stretches, and strolls to Teddy's table.
20 A He glances at the ledger.
21 A His face stays perfectly polite.
22 D EZEKIEL: Interesting hand. Eighteen-nineties?
23 D TEDDY: Eighteen-ninety-four.
24 D EZEKIEL: Mm. I hear the county clerk was a drinker.
25 D TEDDY: I hear a lot of things.
26 A ¶ He nods.
27 A Returns to his table.
28 A Sits.
29 A Turns a page of his newspaper without reading it.
30 A ¶ Teddy takes a slow breath and closes the ledger.
31 A She slips off one glove, then the other, and folds them over the cover.
32 D MIRIAM (to herself): Someone always takes that one.
33 A ¶ Teddy looks up.
34 A Miriam keeps sorting.
35 D TEDDY: Which one?
36 D MIRIAM: The hand.
37 D TEDDY: You've seen it?
38 D MIRIAM: It's gone out four times this year.
39 A ¶ Ezekiel's newspaper lowers a fraction.
* 40 A Rain presses at the glass.
41 D TEDDY: Who else?
42 D MIRIAM: I can't say. Patron privacy.
43 D TEDDY: Of course.
44 A ¶ Teddy gathers her things.
45 A Stands.
46 A Walks to the desk and slides the ledger across.
47 D TEDDY [CONT'D]: Thank you.
48 D MIRIAM: Come again.
49 D TEDDY: I'll try.
50 A ¶ She leaves.
* 51 A The door sighs shut behind her.
52 A ¶ Ezekiel folds his newspaper, tucks it under his arm, and approaches the desk.
53 D EZEKIEL: The same one, please.
54 A ¶ Miriam lifts the ledger.
55 A Holds it for a moment.
56 D MIRIAM: It's very popular today.
57 A ¶ She passes it over.
58 A He opens it to the marked page.
59 A Smiles very slightly.
60 A Takes out his own phone.

### SCENE s01594 | INT. PET GROOMING SALON - AFTERNOON
Detected names (may be incomplete or contain aliases): CARMELITA VEGA, LEO PARK, ZELINSKI
* 1 A ¶ Fluorescent lights.
* 2 A A wall of leashes.
* 3 A The air smells of oatmeal shampoo and panic.
4 A ¶ CARMELITA VEGA (40s, rubber apron, forearms like a boxer's) lathers a very large, very wet Newfoundland named BISCUIT in a steel tub.
5 A Behind her, LEO PARK (20s, trainee, ear gauges) sprays the nozzle without looking.
6 A And in the waiting area, MR. ZELINSKI (70s, sweater vest, a tiny terrier under his arm) watches with deep concern.
7 D CARMELITA: Leo, the nozzle.
8 D LEO: Sorry, I was looking at the dog.
9 D CARMELITA: The nozzle goes on the dog.
10 D LEO: That's what I'm doing.
11 D CARMELITA: You're spraying me.
12 A ¶ Leo glances at the nozzle, then at Carmelita's drenched apron.
13 A He drops it.
* 14 A It whips around, spraying the ceiling.
15 D CARMELITA [CONT'D]: Leo!
16 A ¶ Both lunge for the hose.
17 A Biscuit shakes.
* 18 A A wave of soapy water crosses the salon.
19 A Mr. Zelinski clutches his terrier and rises from the chair.
20 A ¶ Leo slips on the tile.
21 A Carmelita catches his collar.
22 A They freeze, mid-fall, staring at each other.
23 A Biscuit shakes again.
* 24 A Foam coats the window.
25 D MR. ZELINSKI: Is this normal?
26 A ¶ Carmelita and Leo exchange a look.
27 A Slowly, they straighten up.
28 A Leo wipes his face with his sleeve.
29 A Carmelita pulls a clump of suds from her hair.
30 D CARMELITA (flatly): Every Tuesday.
31 D LEO: Every Tuesday.
32 D MR. ZELINSKI: I'll come back later.
33 A ¶ He backs out the door.
* 34 A The bell jingles.
35 A Biscuit sneezes.
* 36 A Soap bubbles drift across the room, floating gently toward the ceiling.

### SCENE s01595 | EXT. MUDDY TRENCH - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT ABEL TOROSYAN, PRIVATE LUCIEN MARCHAND, CORPORAL HAYDEN BRIGGS, FLIP, OKONKWO, PRIVATE EAMON DOHERTY, LIEUTENANT SASHA VOLKOV
* 1 A ¶ A cold morning.
* 2 A Rain-fed mud, duckboards, a sagging tarp strung overhead.
* 3 A Smoke from a tin stove.
4 A ¶ SERGEANT ABEL TOROSYAN (40s, helmet, gray in his stubble) hunches over a mess tin.
5 A Beside him, PRIVATE LUCIEN MARCHAND (20s, bandaged ear) peels a potato.
6 A CORPORAL HAYDEN BRIGGS (30s, tall, tobacco-stained moustache) cleans his rifle.
7 A PRIVATE FELICITY "FLIP" OKONKWO (20s, medic's armband) rewinds a bandage roll.
8 A PRIVATE EAMON DOHERTY (19, scrawny) writes a letter on his knee.
9 A And young LIEUTENANT SASHA VOLKOV (20s, polished boots now caked in mud) studies a map.
10 D TOROSYAN: Anyone hear the guns?
11 D BRIGGS: Not since four.
12 D LUCIEN: They're resting.
13 D FLIP: Everyone rests.
14 D VOLKOV (to the trench): Gentlemen, a reminder. We move at noon.
15 D EAMON (muttering): Noon. Always noon.
* 16 A ¶ A shell whistles overhead, high and wide, and bursts far behind the line.
17 A Every man ducks.
18 A Lucien drops the potato.
19 A Briggs sweeps the rifle against his chest.
20 A Flip falls flat.
21 A Eamon covers his letter with his body.
22 A Torosyan, last, tucks his tin under his arm.
* 23 A ¶ Silence.
24 A Then Briggs laughs, once, and the others join, a dry reluctant sound.
25 D TOROSYAN: Everyone alive?
26 D LUCIEN: My potato's dead.
27 D FLIP: Pity.

### SCENE s01596 | EXT. DUST STREET - GHOST TOWN - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF JEDEDIAH CROW, MERCY BELLWEATHER
* 1 A ¶ Sun like a hammer.
* 2 A Wind.
* 3 A A rusted sign creaks: "SALOON."
4 A ¶ SHERIFF JEDEDIAH CROW (50s, tin star, dust-gray duster) stands in the middle of the road.
5 A Thumb on his hammer.
6 A ¶ Forty feet away: MERCY BELLWEATHER (30s, black hat, two revolvers, one eyebrow cocked).
7 A ¶ Neither moves.
8 D CROW: Mercy.
9 D MERCY: Jed.
10 D CROW: You came back.
11 D MERCY: Didn't plan to.
* 12 A ¶ A tumbleweed rolls between them.
13 D CROW: There's no one left to arrest.
14 D MERCY: Then you're alone.
15 D CROW (to himself): Always was.
16 A ¶ Mercy's fingers twitch.
17 A Crow's too.
18 D CROW [CONT'D] (to the empty windows): Anyone watching, step back.
* 19 A ¶ Wind.
* 20 A A shutter bangs.
21 D MERCY: Draw, Jed.
22 D CROW: After you.
23 A ¶ Neither draws.
* 24 A The sun climbs another degree.
* 25 A A fly lands on Crow's hat.
26 A Mercy smiles.
27 D MERCY: Still a gentleman.
28 D CROW: Still a fool.
29 A ¶ She draws.

### SCENE s01597 | INT. ORBITAL SALVAGE TUG - COCKPIT - SHIP TIME 03:12
Detected names (may be incomplete or contain aliases): PILOT KESTREL VANDERHOOF, OSEI MENSAH-RIVERA, PEBBLE, VOICE
* 1 A ¶ Cramped.
* 2 A Warm.
* 3 A Handwritten sticky notes on every panel.
* 4 A Through the viewport: the husk of a dead freighter, tumbling slowly.
5 A ¶ PILOT KESTREL VANDERHOOF (30s, shaved head, a tattoo of a moth on her neck) flicks switches.
6 A At the engineering station, DR. OSEI MENSAH-RIVERA (40s, glasses taped at the hinge, calm voice) frowns at a readout.
7 A And the ship's AI, a soft synthetic voice named PEBBLE, speaks from the ceiling.
8 D KESTREL: Pebble, scan that hull again.
9 D PEBBLE [V.O.]: Scanning. The hull contains residual heat signatures.
10 D OSEI: Residual from what?
11 D PEBBLE [V.O.]: Possibly from life.
12 D KESTREL: There shouldn't be life.
13 D OSEI: There shouldn't be anything.
14 D PEBBLE [V.O.]: Respectfully, there is both.
15 A ¶ Kestrel leans toward the glass.
16 A Osei rises and joins her.
17 A Together they watch the freighter turn.
* 18 A A single window glows amber.
19 D OSEI: I count one.
20 D KESTREL: I count more.
21 D PEBBLE [V.O.]: I count seventeen.
22 D OSEI: Seventeen what?
23 D PEBBLE [V.O.]: Heartbeats.
24 A ¶ Kestrel and Osei stare at the speaker.
25 A At each other.
26 A At the glass.
27 D KESTREL: Seventeen heartbeats on a ship that's been dead six years.
28 D OSEI: Could be a malfunction.
29 D KESTREL: Could be a rescue.
30 D OSEI: Could be a trap.
31 D KESTREL: Could be both.
32 A ¶ She unbuckles.
33 A Pushes off toward the airlock.
34 A He grabs her ankle.
35 A She grabs his wrist.
36 A They float, face to face.
37 D KESTREL [CONT'D]: ^Let go.
38 D OSEI: ^Don't.
39 D PEBBLE [V.O.]: Please do not argue in zero-g. It increases the risk of injury.
40 A ¶ Kestrel laughs despite herself.
41 A Osei lets go.
42 D OSEI: We call it in first.
43 D KESTREL: Fine.
44 A ¶ She floats back to the console.
45 A Keys the comm.
* 46 A Static.
47 A A man's voice answers from the freighter, calm, cheerful, impossible.
48 D VOICE [V.O.]: Salvage tug, welcome. We've been waiting.
49 A ¶ Kestrel looks at Osei.
50 A Osei looks at the ceiling.
51 D OSEI: Pebble?
52 D PEBBLE [V.O.]: I do not recognize that voice.
53 A ¶ Kestrel's hand hovers over the airlock release.

### SCENE s01598 | INT. HOSPITAL - STAFF LOUNGE - 3 AM
Detected names (may be incomplete or contain aliases): ANIKA SHARMA, BART, KINSELLA, TOMASZ NOWAK, TECH LUCINDA FAIRCHILD, ORDERLY MARCUS OYELOWO, REGINALD PEMBERTON
* 1 A ¶ Vending machine hum.
* 2 A A couch with a stain no one will claim.
* 3 A A TV on mute plays a late-night infomercial.
4 A ¶ DR. ANIKA SHARMA (30s, scrubs, hair undone) sprawls on the couch.
5 A NURSE BARTHOLOMEW "BART" KINSELLA (50s, glasses on a chain) stirs instant coffee.
6 A RESIDENT DR. TOMASZ NOWAK (20s, wired) flips through a chart.
7 A TECH LUCINDA FAIRCHILD (20s, headphones) eats crackers.
8 A ORDERLY MARCUS OYELOWO (40s, mop in hand) leans in the doorway.
9 A And attending DR. REGINALD PEMBERTON (60s, bow tie, exhausted dignity) sits very still in the armchair.
10 D BART (to the room): Anyone want donuts? They're from Tuesday.
11 D LUCINDA: Pass.
12 D TOMASZ: Is Tuesday old?
13 D ANIKA: Tuesday is archaeological.
14 D PEMBERTON (to himself): Three hours until rounds.
* 15 A ¶ A monitor beeps down the hall.
16 A All six stiffen.
17 A Anika sits up.
18 A Tomasz drops the chart.
19 A Bart sets down the coffee.
20 A Lucinda pulls off one earphone.
21 A Marcus straightens.
22 A Pemberton opens one eye.
* 23 A ¶ The beep resolves into a steady rhythm.
24 A Nobody moves.
25 D PEMBERTON [CONT'D]: False alarm.
26 A ¶ They exhale together.
27 A Anika slumps back.
28 A Tomasz picks up the chart.
29 A Bart returns to stirring.
30 D MARCUS (to no one): I hate nights.
31 D LUCINDA: Everyone hates nights.
32 D PEMBERTON (gently): Nights are where we find out who we are.
33 D BART (muttering): Tired, apparently.

### SCENE s01599 | INT. CIRCUS WINTER QUARTERS - REHEARSAL BARN - MORNING
Detected names (may be incomplete or contain aliases): FLYING FONTAINES, RINGMASTER BARNABY FONTAINE, PICKLES, VIVI, MORETTI, GUSTAV BERGSTROM, FANNY LU, ALISTAIR PEMBERTON-HOYT
* 1 A ¶ A drafty barn smelling of sawdust and horse.
* 2 A Trapezes hang at rest.
* 3 A A faded banner: "THE FLYING FONTAINES - SINCE 1923."
4 A ¶ RINGMASTER BARNABY FONTAINE (60s, top hat, a tailcoat patched at the elbows) stands center ring, clipboard in hand.
5 A Beside him, the clown PICKLES (40s, half makeup, full despair) hangs his head.
6 A Atop a ladder, the aerialist VIOLETTA "VIVI" MORETTI (30s, sequined leotard under a parka) adjusts a rope.
7 A Below her, the strongman GUSTAV BERGSTROM (40s, shaved head, shoulders like a door) lifts a barbell without effort.
8 A And in a folding chair, the bookkeeper FANNY LU (50s, cardigan, adding machine) taps keys.
9 D BARNABY: Ladies and gentlemen, we are bankrupt.
10 D PICKLES: Again?
11 D FANNY: Still.
12 D VIVI (from the ladder): Barnaby, we've been bankrupt since Easter.
13 D BARNABY: Since Easter, Vivi, we have been merely poor. Today we are bankrupt.
14 D GUSTAV: I thought bankrupt meant we get a bailout.
15 D FANNY: It means we get a lawyer.
16 D PICKLES: I can juggle lawyers.
17 D BARNABY: Pickles, you are not helping.
18 D PICKLES: I am a clown. I am helping by being unhelpful.
19 D VIVI (sliding down the rope): We could sell the elephant.
20 D GUSTAV: We don't have an elephant.
21 D VIVI: We have a very large dog.
22 D FANNY: We have a very large debt.
23 D BARNABY: I will not sell Cornelius.
24 D PICKLES: Cornelius is a dog?
25 D BARNABY: Cornelius is a lion.
26 D GUSTAV: Cornelius is an old man in a lion costume.
27 D BARNABY: Cornelius is our dignity.
* 28 A ¶ A silence.
* 29 A Then the barn door bangs open and a gust of wind sweeps in.
30 A A figure steps through: a stranger in a pinstriped suit, briefcase in hand.
31 A MR. ALISTAIR PEMBERTON-HOYT (50s, banker's frown, a small gold pin on his lapel).
32 D ALISTAIR: Good morning. I'm looking for Mr. Fontaine.
33 D BARNABY (stiffly): You've found him.
34 D ALISTAIR: I represent the Third Mutual Bank.
35 D PICKLES (to himself): Here come the clowns.
36 D ALISTAIR: I'm here to inspect the assets.
37 D BARNABY: We have no assets.
38 D ALISTAIR: Then I'm here to inspect the liabilities.
39 D VIVI (softly): That's us.
40 A ¶ Alistair opens his briefcase and pulls out a document.
41 A Fanny takes it.
42 A Reads.
43 A Her brows climb.
44 D FANNY (slowly): Barnaby, this says the bank will forgive the debt.
45 D BARNABY: It says what?
46 D FANNY: On one condition.
47 D ALISTAIR: That you perform.
48 D GUSTAV: Perform?
49 D ALISTAIR: My daughter's birthday party. Saturday. She's seven. She adores clowns.
50 A ¶ Pickles raises one weary hand.
51 D PICKLES: ^I'm a clown.
52 D BARNABY: ^We are the Flying Fontaines.
53 D ALISTAIR: Then it's settled.
54 A ¶ Barnaby stares at the contract.
55 A At Alistair.
56 A At the faded banner.
57 D BARNABY: Mr. Pemberton-Hoyt, we will not merely perform. We will astonish.
58 D ALISTAIR: I merely require competence.
59 D BARNABY: Competence is the death of art.
60 A ¶ Fanny stamps the document.
61 A Gustav drops the barbell.
62 A Vivi whoops.
63 A Pickles produces, from nowhere, a handful of confetti and throws it into the air.
64 D ALISTAIR (dryly): I'll see you Saturday.
65 A ¶ He exits.
* 66 A The door bangs behind him.
67 D FANNY: Barnaby, we have four days.
68 D BARNABY: Then we shall rehearse for three and panic for one.
69 D GUSTAV: Which day is panic?
70 D BARNABY: Saturday, Gustav. Always Saturday.

### SCENE s01615 | INT. VINEYARD TASTING ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CORINNE BASSETT-OYELARAN, WILL, TRANH, AUGUSTE LEFEBVRE-MORROW
* 1 A ¶ Rustic beams.
* 2 A A long wooden bar.
* 3 A Racks of bottles lit by amber bulbs.
* 4 A Through the open French doors, rows of vines stretch toward the hills.
5 A ¶ CORINNE BASSETT-OYELARAN (30s, linen dress, hair in a loose knot) swirls a glass of red and studies the color.
6 A At her elbow, her fiancé WILLIAM "WILL" TRANH (30s, rolled sleeves, sunburned nose) pretends to sniff the bouquet.
7 A And behind the bar, the vintner, MR. AUGUSTE LEFEBVRE-MORROW (60s, apron, silver hair), polishes a glass.
8 D AUGUSTE: Notes of cherry, perhaps a little leather.
9 D CORINNE (lying): I can taste the leather.
10 D WILL (lying): So can I.
11 D AUGUSTE: Excellent. You have a fine palate.
12 A ¶ Corinne sips.
13 A Will sips.
14 A Auguste pours a sliver of white into a third glass and slides it across.
15 D CORINNE: Auguste, this is lovely.
16 D AUGUSTE: Please. Call me Gus.
17 D WILL: Gus, do you ever sell your reserve?
18 D AUGUSTE: Never.
19 D CORINNE: Never?
20 D AUGUSTE: My late wife made it. I open a bottle on our anniversary. That is all.
21 A ¶ Will and Corinne exchange a look.
22 A Will sets down his glass.
23 A Corinne touches Auguste's wrist, gently, and he smiles, embarrassed.
24 D AUGUSTE [CONT'D]: But you two are getting married, yes?
25 D CORINNE: In September.
26 D AUGUSTE: Then you must have one.
27 D WILL: We couldn't.
28 D AUGUSTE: I insist.
29 A ¶ He ducks under the bar and returns with a dusty bottle, its label hand-lettered in faded ink.
30 A He wipes it with a cloth and reads aloud.
31 D AUGUSTE [CONT'D]: Nineteen ninety-eight. The year we met.
32 D CORINNE: Gus, this is too much.
33 D AUGUSTE: It is exactly enough.
34 A ¶ He pops the cork.
35 A Pours three small glasses.
36 A Hands one to each of them.
37 A They raise the glasses.
38 D AUGUSTE [CONT'D]: To love.
39 D CORINNE: To love.
40 D WILL: To love, and to leather.
41 A ¶ They laugh, clink, drink.
* 42 A The late sun slants through the doors and turns the wine to garnet.
43 D CORINNE: Oh.
44 D WILL: What?
45 D CORINNE: It tastes like a memory.
46 D AUGUSTE: That is the secret. A good wine always does.

### SCENE s01616 | INT. CONVENT KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SISTER BENEDETTA MARCHETTI-OYO, SISTER CLARISSA, REVEREND MOTHER AGATHA VANDERPOOL
* 1 A ¶ Whitewashed walls.
* 2 A A cast-iron stove, a scrubbed deal table, rows of copper pots gleaming in the lamplight.
* 3 A Outside, wind moves in the cypress trees.
4 A ¶ SISTER BENEDETTA MARCHETTI-OYO (60s, black habit, flour on her sleeves) kneads dough with slow, deliberate strokes.
5 A Across the table, a novice, SISTER CLARISSA (19, wimple slightly askew), peels potatoes into a bucket.
6 A And in the doorway, a figure waits.
7 A ¶ REVEREND MOTHER AGATHA VANDERPOOL (70s, black habit, a silver cross, a posture like a cathedral) rests a hand on the frame.
8 A ¶ Benedetta does not look up.
9 A Clarissa's knife pauses.
10 D AGATHA: Sister Benedetta.
11 D BENEDETTA: Reverend Mother.
12 D AGATHA: You are up late.
13 D BENEDETTA: The bread will not wait.
14 D AGATHA: Nor will the visitors.
15 A ¶ Benedetta presses her palms into the dough.
16 A Clarissa lowers her head and peels faster.
17 D AGATHA [CONT'D]: They arrive at dawn. The bishop's man will want to see the accounts.
18 D BENEDETTA: They are in order.
19 D AGATHA: Are they?
20 D BENEDETTA: They are.
21 D AGATHA: Then you will not mind if Sister Clarissa reads them aloud.
22 A ¶ The knife drops.
23 A Clarissa stares at her hands.
24 A Benedetta's fingers stop moving, a long beat, then resume.
25 D BENEDETTA: Sister Clarissa has other duties.
26 D AGATHA: She has the best penmanship in the house.
27 D BENEDETTA (evenly): She has also been awake since five.
28 A ¶ Agatha steps into the room.
* 29 A The lamp throws her shadow across the table.
30 A Clarissa shrinks.
31 A Benedetta folds the dough over itself, once, twice, three times.
32 D AGATHA: You have been with us thirty years.
33 D BENEDETTA: Thirty-one.
34 D AGATHA: And in all that time, I have not asked you for anything.
35 D BENEDETTA: You have asked me for bread.
36 D AGATHA: Bread is not asking. Bread is feeding.
37 A ¶ Benedetta turns to the oven.
38 A Opens the iron door.
39 A A wash of heat on her face.
40 A She slides in the loaf and shuts the door.
41 D BENEDETTA: What do you want, Mother?
42 D AGATHA: I want to know what is missing from the ledger.
* 43 A ¶ The kitchen is perfectly still.
44 A Clarissa looks up, at last, at Benedetta.
45 A Benedetta, at Agatha.
* 46 A The wind rises in the cypress trees.
47 D BENEDETTA: Forty-two loaves.
48 D AGATHA: Per week?
49 D BENEDETTA: Per week. For thirty-one years.
50 D AGATHA: Given to whom?
51 D BENEDETTA: To those who knock at the back gate.
52 D AGATHA: Without permission.
53 D BENEDETTA: Without asking.
54 D AGATHA (a long pause): I see.
55 A ¶ She lifts the silver cross from her chest and holds it for a moment, as if weighing it.
56 A Then she lets it fall back.
57 D AGATHA [CONT'D]: Then we will need to bake more.

### SCENE s01617 | INT. OLD LIBRARY - RARE BOOKS ROOM - EVENING
Detected names (may be incomplete or contain aliases): PROFESSOR HADLEIGH VANCE-OKONJO, MISS PRISCILLA TREVELYAN-ADE, OSWIN CHAMBERLAIN-BELL
* 1 A ¶ A tall room of dark oak and leather.
* 2 A A ladder on rails.
* 3 A A reading table under a green lamp.
4 A ¶ PROFESSOR HADLEIGH VANCE-OKONJO (50s, tweed, pipe unlit) examines a bound volume under magnification.
5 A Across the table, his assistant MISS PRISCILLA TREVELYAN-ADE (30s, cardigan, pencil behind her ear) records notes.
6 A In the corner, the librarian MR. OSWIN CHAMBERLAIN-BELL (70s, bow tie, white gloves) dusts a shelf.
7 D HADLEIGH: Priscilla, look at this.
8 D PRISCILLA: At what, Professor?
9 D HADLEIGH: The binding. It has been recently altered.
10 D PRISCILLA: Altered how?
11 D HADLEIGH: The stitching. Someone has resewn the spine.
12 D OSWIN (from the corner): That is impossible. No one has touched that volume in forty years.
13 D HADLEIGH: Forty-one, Mr. Chamberlain-Bell, according to your register.
14 D OSWIN: Then forty-one.
15 D PRISCILLA: Professor, there's a name here on the flyleaf.
16 D HADLEIGH: Read it.
17 D PRISCILLA: "Cornelius Ambrose Wren."
18 D OSWIN: Wren?
19 D HADLEIGH: You know the name.
20 D OSWIN: He was a donor. Long dead.
21 D HADLEIGH: He died in nineteen thirty-two.
22 D OSWIN: Quite.
23 D HADLEIGH: Then who has been writing in his book?
24 D PRISCILLA: There's fresh ink in the margins.
25 D OSWIN: That cannot be.
26 D HADLEIGH: Here, Priscilla. Hold the lamp lower.
27 D PRISCILLA: The ink is still wet.
28 D OSWIN (sharply): Put it down.
29 D HADLEIGH: Mr. Chamberlain-Bell.
30 D OSWIN: Put it down at once.
31 D PRISCILLA: ^What is it?
32 D HADLEIGH: ^What do you know?
33 A ¶ Oswin crosses the room with surprising speed, takes the volume in both gloved hands, and clasps it to his chest.
34 D OSWIN: I know that some books are not meant to be read.
35 D HADLEIGH: By whom?
36 D OSWIN: By anyone.
37 D PRISCILLA: Mr. Chamberlain-Bell, you wrote in it.
38 D OSWIN (very quietly): No, my dear. I have only been keeping it dry.
39 A ¶ He lays the book on the table, opens it to a page, and steps back.
* 40 A In the green lamplight, a line of handwriting slowly begins to appear on the paper, letter by letter.
41 A ¶ Hadleigh and Priscilla lean in together.

### SCENE s01618 | INT. SUBMARINE BAY - COLD STORAGE - NIGHT
Detected names (may be incomplete or contain aliases): SENTRY, TECHNICIAN, CONTROL
* 1 A ¶ Frost on steel.
* 2 A Rows of crates under a single caged bulb.
* 3 A Breath hangs in the air like smoke.
4 A ¶ A SENTRY (30s, parka, rifle slung) paces the aisle.
5 A He stops at a crate.
6 A Pries the lid with a gloved hand.
7 A Peers in.
8 A ¶ From behind a stack of pallets, a second man watches him.
9 A THE TECHNICIAN (40s, thin, ID badge turned inward).
10 A He holds a small black box in one hand, thumb hovering over a button.
11 A ¶ The Sentry sets down the lid.
12 A Turns.
13 A Looks directly at the pallets.
14 A The Technician holds his breath.
15 D SENTRY: Hello?
* 16 A ¶ No reply.
17 A The Sentry steps closer.
18 A Sniffs.
19 A Reaches for his radio.
20 D SENTRY [CONT'D] (into radio): Control, I have movement in cold storage.
21 D CONTROL [V.O.] (over radio): Confirm.
22 D SENTRY: Possible. He's behind the pallets. He's not answering.
23 D CONTROL [V.O.]: Hold position. Backup in two minutes.
24 A ¶ The Sentry unslings his rifle.
25 A The Technician presses against the crate.
26 A A drop of sweat freezes on his forehead.
27 D SENTRY (low): Come out. He won't hurt you.
28 A ¶ The Technician closes his eyes.
29 A His thumb tightens.
* 30 A The box clicks.
* 31 A ¶ Overhead, every light in the bay goes dark.
32 A In the black, a scuffle: boots on steel, a grunt, a shout, a rifle butt striking something hard.
* 33 A The caged bulb swings back on.
34 A ¶ Both men stand, five feet apart.
35 A The Sentry's rifle points at the Technician.
36 A The Technician's box points at the Sentry.
37 A Neither lowers it.
38 D SENTRY [CONT'D]: Put it down. He's got backup coming.
39 D TECHNICIAN (through his teeth): So does he.
* 40 A ¶ Somewhere above them, a muffled thump.
* 41 A A second.
* 42 A The ceiling trembles.
* 43 A Frost sifts from the pipes.
44 A ¶ They look up together.

### SCENE s01619 | INT. SEASIDE BOARDING HOUSE - ATTIC - NIGHT
Detected names (may be incomplete or contain aliases): ODELIA PRINGLE, HORACE BLACKWOOD-ADE, MISS CONSTANCE TAMBLYN, FERDINAND OKORO-STRAND, THOMAS
* 1 A ¶ Slanted beams.
* 2 A A cracked skylight.
* 3 A Moonlight on trunks, hatboxes, a headless dressmaker's dummy.
* 4 A The air smells of salt and mildew.
5 A ¶ Five guests have climbed the narrow stair with lanterns.
6 A ¶ MRS. ODELIA PRINGLE (60s, shawl, a ring of keys) leads.
7 A DR. HORACE BLACKWOOD-ADE (50s, black bag, bowler hat) follows.
8 A Then MISS CONSTANCE TAMBLYN (20s, nightgown under a coat), clutching a candle.
9 A Behind her, MR. FERDINAND OKORO-STRAND (40s, braces, a revolver he clearly does not know how to hold), and last, young THOMAS (12, nightshirt, wide-eyed, a tin whistle).
10 D ODELIA (to the group): Stay close. The floor is rotten in places.
11 D HORACE: Mrs. Pringle, what precisely are we looking for?
12 D ODELIA: The thing that has been tapping.
13 D CONSTANCE (whispering): It tapped again last night.
14 D FERDINAND (to himself): Nerves. Nothing but nerves.
15 D THOMAS: It's not nerves.
16 D ODELIA: Quiet, boy.
* 17 A ¶ A single tap from behind the dummy.
18 A Everyone freezes.
19 A Constance's candle trembles.
20 A Ferdinand raises the revolver, then lowers it, then raises it again.
* 21 A ¶ A second tap.
* 22 A A third.
* 23 A A scrape, as of fingernails on wood.
24 D HORACE (low): Who is there?
* 25 A ¶ The dummy topples.
* 26 A Dust billows.
27 A A dark shape lunges across the trunks.
28 A Constance screams.
29 A Ferdinand fires wildly, the shot punching a hole in the skylight.
30 A Horace dives behind a hatbox.
31 A Odelia swings her lantern.
32 A Thomas blows a shrill note on his whistle.
33 A ¶ The shape hisses, springs up through the broken glass, and disappears into the night.
* 34 A ¶ Silence.
* 35 A Glass tinkles.
* 36 A Moonlight pours through the new hole.
37 A The five of them stand panting among the trunks, one by one lowering their lanterns.
38 D THOMAS (softly): It was a gull.
39 D FERDINAND (shakily): A gull.
40 D HORACE: A very large gull.
41 A ¶ Odelia lifts the dummy upright with one hand and straightens its collar.
42 D ODELIA: Back to bed, all of you.
43 A ¶ She turns.
44 A One by one they file down the stairs.
45 A Thomas is last.
46 A He pauses at the top, tin whistle in hand, and looks back at the skylight.
* 47 A ¶ Something taps.
* 48 A Once.

### SCENE s01620 | INT. LIGHTHOUSE LENS ROOM - NIGHT (1887)
Detected names (may be incomplete or contain aliases): HOLLIS BRANT, SILAS, INSPECTOR AGNES FAIRWEATHER
* 1 A ¶ Brass.
* 2 A Prisms.
* 3 A A hundred glass faces catching one flame.
4 A ¶ HOLLIS BRANT, 60s, salt-stiff beard, oils the turning gear.
5 A Slow.
6 A Careful.
7 A ¶ SILAS, 15, his apprentice, polishes a prism with a rag.
8 A Too fast.
9 D HOLLIS: Gently, boy.
10 D SILAS: Yes, sir.
* 11 A ¶ Wind howls.
* 12 A The tower groans.
* 13 A ¶ A crack.
* 14 A Sharp.
* 15 A Glass.
16 A ¶ Silas freezes.
* 17 A A hairline fracture crawls across the prism.
18 D HOLLIS: Don't breathe.
19 D SILAS: It was already -- I swear it --
20 A ¶ Hollis crosses.
21 A Fast for his age.
22 A Grips Silas's wrist.
23 D HOLLIS: How long have you known?
24 D SILAS: Since Tuesday.
25 A ¶ Hollis lifts the prism.
26 A Turns it to the flame.
* 27 A The crack is a bright wire.
28 D HOLLIS: Tuesday.
* 29 A ¶ Silence.
* 30 A The great lens turns.
* 31 A Light sweeps the sea.
* 32 A ¶ The door bangs open.
* 33 A Rain blows in.
34 A ¶ INSPECTOR AGNES FAIRWEATHER, 40s, black oilskin, ledger under one arm, stands dripping on the threshold.
35 D AGNES: Evening, Mr. Brant. The Board sent me to check your lens.
* 36 A ¶ Beat.
37 A Hollis sets the prism down on the cracked side.
38 A Hides it with his sleeve.
39 D HOLLIS: Flawless, Inspector.
40 A ¶ Agnes studies the prism.
41 A Studies Silas.
42 A Studies Hollis.
43 A ¶ She sets down her ledger.
44 A Closes the door against the storm.
45 D AGNES: Then you will not mind if I hold it.
46 A ¶ Hollis exhales.
47 A Slow.
48 D HOLLIS: Mind? Madam, I would be honoured.
49 A ¶ He hands her the prism.
* 50 A Cracked side down.
51 A ¶ She turns it over.
52 A Looks.
53 A Looks longer.
54 D AGNES: Mm.
55 A ¶ She wraps it in her scarf.
56 D AGNES [CONT'D]: I'll say it caught the weather. Happens every winter.
57 A ¶ Silas sits down hard on an oil drum.
58 D AGNES [CONT'D]: Light the second flame, Mr. Brant. The fog is coming in.

### SCENE s01621 | INT. FLOODED GRAIN SILO - NIGHT
Detected names (may be incomplete or contain aliases): DMITRI VOLK, KOFI ASANTE, BRONWEN HALE
* 1 A ¶ Black water at chest height.
* 2 A A single headlamp beam cuts the dust.
3 A ¶ DMITRI VOLK, 40s, stocky, clings to a ladder rung.
4 A He keeps the lamp.
5 A ¶ KOFI ASANTE, 30s, lean, shivers beside him, one arm wrapped around a rusted pipe.
6 A ¶ BRONWEN HALE, 50s, a farmer's hands, floats a plastic drum like a raft, its lid taped shut.
7 D DMITRI: The water's still coming up.
8 D KOFI: It came up two rungs since the lamp was on my side.
9 D BRONWEN: Then we climb.
10 D DMITRI: He said the hatch is sealed from outside.
11 D KOFI: Who did?
12 D DMITRI: You. Ten minutes ago.
13 D KOFI: I said I couldn't see the hatch. He was the one who saw it.
14 D DMITRI: Which he?
15 D KOFI: The man on the radio. Before it died.
16 D BRONWEN: The radio man said the roof hatch opens inward. He said push, not pull.
17 D DMITRI: He also said an hour. That was three hours ago.
18 D KOFI: He didn't say that. He said maybe an hour. He was guessing.
19 D BRONWEN: Both of you stop. Save the air.
20 D DMITRI: There's no air shortage. There's a hatch shortage.
21 D KOFI: Then give me the lamp and let me find it.
22 D DMITRI: You'll drop it.
23 D KOFI: I have not dropped a thing in my life.
24 D BRONWEN: You dropped the radio.
25 D KOFI: He dropped the radio. I only caught it badly.
26 D DMITRI: Fine. Take the lamp. But if he asks, I didn't hand it over.
27 D BRONWEN: Who is going to ask?
28 D DMITRI: Whoever finds us.
* 29 A ¶ Water laps another rung.
30 D KOFI: Then we'd better be easy to find.

### SCENE s01622 | EXT. PAGODA ROOFTOP, FLOODED RICE PADDIES - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT OKONKWO, PRIVATE LINDQVIST, CORPORAL HAYASHI, MARCHETTI
* 1 A ¶ Mist on black water.
* 2 A A cracked tiled roof.
3 A Five soldiers pressed flat against it.
4 A ¶ SERGEANT OKONKWO, 40s, broad, calm, scans the treeline with binoculars.
5 A Beside him, PRIVATE LINDQVIST, 19, pale, hugs a radio like a baby.
* 6 A ¶ Quiet.
7 A ¶ CORPORAL HAYASHI, 30s, sniper, wiry, settles behind her rifle.
8 A Below, MARCHETTI, 20s, loud even in whispers, drags a crate of ammunition up the slope and spills three boxes, which clatter down the tiles, while Okonkwo grabs Lindqvist's collar to stop him sliding after them and Hayashi swears under her breath and Marchetti dives, catching one box, losing the other two.
* 9 A They splash into the paddy.
* 10 A Ripples spread.
* 11 A ¶ Silence.
12 A Everyone holds.
13 D MARCHETTI (whispering): Sorry. Sorry.
14 D OKONKWO: Be quiet.
* 15 A ¶ A crack.
* 16 A Far off.
* 17 A A bullet chips a tile beside Lindqvist's head.
18 A ¶ Everyone flattens.
* 19 A Radio hisses.
20 A Lindqvist fumbles it.
21 D LINDQVIST: They've seen us. They've seen us.
22 D OKONKWO: Good. Let them look at me.
23 A ¶ He stands.
24 A Raises one hand.
25 A Waves at the mist.
26 D HAYASHI: Sergeant --
* 27 A ¶ Nothing.
* 28 A A long breath.
* 29 A The mist stays still.
* 30 A ¶ Then a white scarf, tied to a stick, rises from the far tree line.
31 A Waves slowly.
32 D OKONKWO: Hold fire.
33 D MARCHETTI: It's a trick.
34 D HAYASHI: It's a kid. A kid with a scarf.
35 A ¶ Lindqvist laughs, one wet hiccup.
36 A Marchetti sinks onto the tiles.
37 A Hayashi lowers her rifle one inch.
* 38 A ¶ A second crack.
* 39 A Closer.
* 40 A The scarf drops out of sight.
41 A ¶ Everyone is moving again.
42 A Hayashi up on one knee, Okonkwo hauling Lindqvist back by the strap, Marchetti sliding down the far side toward the water, the radio shrieking static in Lindqvist's arms, and a third shot ringing off the bronze bell above.
43 D OKONKWO: Down! Down the back!
44 A ¶ Lindqvist slides.
45 A Marchetti catches him.
46 A They hit the water together.
* 47 A ¶ Mist closes over the roof.
* 48 A ¶ Silence again.
* 49 A One tile, rocking.
* 50 A Then still.

### SCENE s01623 | INT. FINCH & PUMPHREY TAXIDERMY SHOP - DAY
Detected names (may be incomplete or contain aliases): GLORIA FINCH, WALTER PUMPHREY
* 1 A ¶ Glass eyes everywhere.
* 2 A A moth-eaten badger on a pedestal.
* 3 A A stuffed owl in a bowler hat.
4 A ¶ GLORIA FINCH, 40s, sharp as a tack in a sharper suit, stands on a stepladder, hammering a mounted trout to the wall.
5 A ¶ WALTER PUMPHREY, 50s, rumpled, hat in both hands, bursts through the door.
6 D WALTER: Gloria! The fire inspector is outside!
7 D GLORIA (not turning): Good. Tell him we're closed.
8 D WALTER: He saw the smoke!
9 D GLORIA: There is no smoke. There is a very warm badger.
10 A ¶ She hammers.
11 A He wrings his hat.
12 A She hammers harder.
13 D WALTER: Gloria, you put a lit cigar in its mouth!
14 D GLORIA: To keep it from looking surprised.
15 A ¶ He snatches the badger.
* 16 A It's smoking.
17 A He bats at it with his hat.
* 18 A Smoke curls from the badger's ears.
19 D WALTER: Put it out!
20 D GLORIA: I can't, I'm busy with the trout.
21 A ¶ He dumps a bucket of paint water on the badger.
* 22 A It sags.
23 A She climbs down, sniffs, turns slowly, and lets him have a look.
24 D GLORIA [CONT'D]: That was my best badger.
25 D WALTER: He was a fire hazard!
26 A ¶ She picks up the owl.
27 A Plops it on his head.
28 D GLORIA: Well, put this on. You're the one who has to face the inspector.
29 D WALTER: Why me?
30 D GLORIA: He asked for the owner.
31 D WALTER: You own half!
32 D GLORIA: And you are the half with the hat.
* 33 A ¶ The door chimes.
34 A They both freeze.
35 A She straightens his bowler.
36 A He straightens the owl.
37 D WALTER: How do I look?
38 D GLORIA: Like you've been stuffed for years.
* 39 A ¶ The door swings open.

### SCENE s01624 | INT. FAIRLANES BOWLING ALLEY - PINSETTER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SHORTY ALVARADO, TANYA BOSCO
* 1 A ¶ Behind the lanes.
* 2 A A long steel cavern of dead machines, each one frozen mid-cycle.
* 3 A Dust.
* 4 A The smell of oil and old wax.
5 A ¶ SHORTY ALVARADO, 50s, wide, slow, in a faded satin bowling jacket, sits on an upturned crate.
* 6 A A duffel bag between his boots.
* 7 A ¶ Footsteps on the metal catwalk.
8 A ¶ TANYA BOSCO, 30s, leather jacket, no smile, walks the length of the room.
9 A A flashlight in her hand, not lit.
10 D SHORTY: You're late, Tanya.
11 D TANYA: Traffic.
12 D SHORTY: At two in the morning.
13 D TANYA: There's always traffic, Shorty.
14 A ¶ She stops ten feet away.
15 A Looks at the duffel.
16 D TANYA [CONT'D]: That it?
17 D SHORTY: That's it.
18 D TANYA: Open it.
19 D SHORTY: You open it.
20 D TANYA: It's your bag.
21 D SHORTY: It's your problem.
* 22 A ¶ A long beat.
* 23 A Somewhere, a pipe drips.
24 A Tanya crosses.
25 A Crouches.
26 A Unzips the duffel.
* 27 A ¶ Stacks of bills, rubber-banded.
28 A She picks one up.
29 A Fans it.
30 A Looks up.
31 D TANYA: It's short.
32 D SHORTY: It's what Dominic gave me.
33 D TANYA: Dominic gave you forty. This is thirty-one.
34 D SHORTY: Then Dominic's counting differently than he used to.
35 D TANYA: Or you are.
36 D SHORTY: Careful.
37 D TANYA: I'm always careful. That's why I'm still alive.
38 A ¶ Shorty smiles, without warmth.
39 D SHORTY: You know why they call me Shorty?
40 D TANYA: Because you're not.
41 D SHORTY: Because I was always short on patience.
42 A ¶ He stands.
* 43 A The crate scrapes.
44 A Tanya doesn't rise.
45 A She keeps the money in her hand.
46 D TANYA: Sit down, Shorty.
47 D SHORTY: No.
48 D TANYA: Sit down.
49 D SHORTY: You think I took nine thousand?
50 D TANYA: I think someone did.
51 D SHORTY: Then count it again. Slowly. Like your mother taught you.
52 D TANYA: Leave my mother out of it.
53 D SHORTY: She'd say the same thing. She'd say, Tanya, count again.
54 A ¶ Tanya's jaw sets.
55 D TANYA: You knew my mother?
56 D SHORTY: Everybody knew your mother. She bowled a 280 in this very building.
57 D TANYA: She bowled a 279.
58 D SHORTY: She told me 280.
59 D TANYA: She lied to you.
60 D SHORTY: Maybe she did. Maybe that's what she did to everyone.
61 A ¶ Tanya rises.
62 A The flashlight clicks on.
63 A She shines it right into his eyes.
64 D TANYA: Where is the nine, Shorty?
65 D SHORTY: Turn that off.
66 D TANYA: Where is it?
67 D SHORTY: Turn it off!
68 A ¶ She doesn't.
69 A He swings the duffel.
70 A It catches her across the shoulder.
71 A She stumbles.
* 72 A The flashlight clatters, spinning light across the machines.
73 A ¶ He goes for her.
74 A She meets him.
75 A They crash into a pinsetter.
* 76 A A hundred pins rattle in their tubes like startled bones.
77 D SHORTY [CONT'D] (strangled): You think Dominic's your friend?
78 D TANYA: I think he's my boss!
79 D SHORTY: He's a liar!
80 D TANYA: So are you!
81 A ¶ She twists, drives an elbow into his ribs.
82 A He folds.
83 A She pins him against the machine, forearm across his throat.
* 84 A ¶ Pins spill.
85 A They roll across the floor.
* 86 A One strikes the dead flashlight and stops.
87 D TANYA [CONT'D]: Nine thousand. Where.
88 A ¶ Shorty's eyes flick to the next machine.
* 89 A To a panel, slightly ajar.
90 A ¶ She sees it.
91 A Lets him go.
92 A He slides down the metal, wheezing.
93 D SHORTY: You were always sharp. Your mother was too.
94 A ¶ Tanya opens the panel.
* 95 A Inside: a gym bag.
96 A She unzips it.
* 97 A Money.
* 98 A Lots of it.
99 D TANYA: This isn't nine.
100 D SHORTY: No.
101 D TANYA: This is all of it.
102 D SHORTY: All of Dominic's.
103 A ¶ She turns slowly, bag in hand.
104 D TANYA: Shorty.
105 D SHORTY: Tanya.
106 D TANYA: What did you do?
107 A ¶ Shorty reaches inside his satin jacket.
108 A Slowly.
109 A Tanya freezes.
110 A He pulls out a small black phone, holds it up.
111 D SHORTY: I called him an hour ago.
* 112 A ¶ Far off, a car door.
* 113 A Another.
* 114 A Heavy steps on the lane boards beyond the wall.
115 A ¶ Tanya drops the bag.
116 D TANYA: You rat.
117 D SHORTY (softly): Short on patience, remember?
* 118 A ¶ The door to the pinsetter room crashes open.

### SCENE s01625 | INT. CHURCH BELL TOWER, GHOST TOWN - DAWN
Detected names (may be incomplete or contain aliases): JEB TALLMAN, CORA LEE PRUETT, PIKE, DOC AMBROSE
* 1 A ¶ Dust in slanting light.
* 2 A A rope hangs slack.
3 A Four people share a space built for one.
4 A ¶ JEB TALLMAN, 50s, bandaged ribs, sits against the wall with a Colt on his knee, while CORA LEE PRUETT, 30s, in a torn calico dress, peels back his shirt to check the wound, and PIKE, 20s, cheeks smeared with soot, keeps watch at the slit window, and DOC AMBROSE, 60s, spectacles cracked, tips the last of his flask over Jeb's side.
5 D JEB: It's quiet, Pike.
6 D PIKE: Quiet's worse, Jeb.
7 D CORA LEE: Quiet means they ran out of whiskey. Or men.
8 D DOC AMBROSE: Or patience, Miss Cora Lee.
9 D JEB: They've got plenty of that. Always did.
10 D PIKE: Doc, how long till he can ride?
11 D DOC AMBROSE: Days. Weeks, if he's sensible.
12 D JEB: I'm never sensible.
13 D CORA LEE: That's why you're here, Jeb Tallman.
14 A ¶ Jeb smiles.
15 A Lets the Colt slide off his knee.
16 A Pike turns from the window, rifle loose in his hand.
17 D PIKE: They're gone.

### SCENE s01626 | INT. PLANETARIUM DOME - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN DRAKE, PRIYA NAIR, BARNABY
* 1 A ¶ Stars wheel across the ceiling.
* 2 A Below, a circle of reclining seats, all empty but three.
3 A ¶ IMOGEN DRAKE, 30s, in a museum guard's uniform two sizes too big, lies back in a seat with a flashlight pen.
4 A ¶ PRIYA NAIR, 30s, in a black turtleneck, crouches at the projector pit, wires in her teeth.
5 A ¶ BARNABY, 60s, the real guard, snores in the front row, hat over his face.
6 D IMOGEN (whispering): Is he asleep?
7 D PRIYA (whispering): Define asleep.
8 D IMOGEN: Eyes closed. Mouth open. Making that noise.
9 D PRIYA: Then yes. The noise is a good sign.
10 D IMOGEN: And she's sure it's behind the Orion slide?
11 D PRIYA: She's sure. She says it's in the Betelgeuse mount. Or maybe the Rigel.
12 D IMOGEN: Which?
13 D PRIYA: She says it's the red one.
14 D IMOGEN: They're both red.
15 D PRIYA: Then check both.
16 D IMOGEN: Priya, she told us the diamond was hidden in a star. Not behind one. In one.
17 D PRIYA: Then she's been lying since March.
18 D IMOGEN: She'd hate that you said it.
19 D PRIYA: She'd hate that you whispered it. She hates whispers.
20 A ¶ Barnaby snorts.
21 A Both women freeze.
* 22 A A long beat.
23 A He settles.
24 D IMOGEN (whispering): Rewind the sky.
25 A ¶ Priya flips a switch.
* 26 A The stars slide backward.
* 27 A A tiny red light blinks inside the projector.
28 A Priya laughs, silent, delighted.

### SCENE s01627 | INT. NIGHT LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): NADIA REYES, STRANGER, GUS, OSKAR
* 1 A ¶ Fluorescent hum.
* 2 A Dryers turning.
* 3 A Rain on the glass.
4 A ¶ NADIA REYES, 30s, folds a hospital scrub top with exact corners.
5 A Alone.
* 6 A ¶ The bell above the door chimes.
7 A A STRANGER, 40s, wet raincoat, enters.
8 A Sits two machines away.
9 A Stares.
10 D NADIA: We close at four.
11 D STRANGER: I know.
12 A ¶ GUS, 60s, the attendant, leans out from the back office, mop in hand.
13 D GUS: Everything okay out here?
14 D NADIA: Fine, Gus.
15 D STRANGER: Gus. Right.
16 D GUS: Do I know you?
17 D STRANGER: You know her.
18 A ¶ Nadia stops folding.
19 D NADIA: I don't know you.
20 D STRANGER: You knew my brother.
21 D GUS: Hey, pal --
22 D NADIA: Which brother?
23 D STRANGER: The one in the chart. Room 412.
24 D GUS: Hey, pal, you're done. Out.
25 D STRANGER: Oskar. His name was Oskar. Say it.
26 A ¶ Nadia sets the scrub top down.
27 A Her hands shake.
28 D NADIA: Oskar --
29 D OSKAR (Stranger, now standing): Not him. Me. I'm Oskar. He was Anton.
30 D GUS: Nadia, back away from --
31 D OSKAR: She signed the form, Gus.
32 A ¶ Gus raises the mop.
33 A Oskar pulls a folded paper from his coat.
34 A Slaps it onto the machine.
* 35 A ¶ Every dryer stops spinning.
* 36 A Silence.

### SCENE s01628 | INT. CABLE-REPAIR SHIP, FREEZER HOLD - NIGHT
Detected names (may be incomplete or contain aliases): MAEVE KOSTELNY, HARLAN GREER
* 1 A ¶ Rime on steel.
* 2 A A string of work lights swinging.
* 3 A Crates stacked to the ceiling, each stamped with a number.
4 A ¶ MAEVE KOSTELNY, 30s, parka, ship's cook, drags a crate lid back.
5 A Breath fogs.
6 A ¶ HARLAN GREER, 50s, bosun, stands in the hatch, one hand on the door.
7 D MAEVE (to the room): Anyone down here?
* 8 A ¶ Nothing.
* 9 A A crate shifts, creaks.
10 D HARLAN: Get out of there.
11 D MAEVE: It's counting itself, Harlan.
12 D HARLAN: What?
13 D MAEVE: The crates. There's one more than the manifest. There's always one more.
14 D HARLAN: Maeve.
15 D MAEVE (muttering): Thirty-one. Thirty-two. Thirty-three.
16 D HARLAN (to himself): Don't look at it. Don't look at it.
17 D MAEVE: I'm not looking.
18 D HARLAN: You're looking.
19 D MAEVE: Then so are you.
20 D HARLAN: I'm looking at you.
21 D MAEVE: Then who's behind me?
* 22 A ¶ Silence.
* 23 A The work lights stop swinging.
24 A Both stare at the same spot.
25 D HARLAN (to everyone, to no one): All hands up top. All hands up top.
26 D MAEVE: They can't hear you.
27 D HARLAN (softly): They never could.
28 D MAEVE: Thirty-four.
* 29 A ¶ The door slams.
* 30 A Locks.
31 A Harlan hammers it.
32 D HARLAN: Open it! Open it!
33 D MAEVE (to herself): Thirty-five.
34 A ¶ She turns, and a crate lid lifts on its own.

### SCENE s01629 | INT. TELEGRAPH OFFICE, DUSTY JUNCTION - DAY
Detected names (may be incomplete or contain aliases): MARSHAL ISADORA CRANE, NELL FENTON, OTTO BRAND, LUPE ARRIAGA, TOMMY
* 1 A ¶ Shuttered windows.
* 2 A Heat.
* 3 A A dull roar of hooves somewhere beyond the wall.
* 4 A A telegraph key clatters on its own.
5 A ¶ MARSHAL ISADORA CRANE, 40s, grey duster, stands at the window, peering through a slat.
6 A NELL FENTON, 20s, the operator, taps the key with a pencil while OTTO BRAND, 60s, the stationmaster, stacks flour sacks against the door and LUPE ARRIAGA, 30s, a drover, holds a shotgun and checks the roof beams for cracks.
* 7 A Nobody speaks until the floor starts to shake.
8 D CRANE: Nell. What does the line say?
9 D NELL: It says "hold." Over and over.
10 D OTTO: Hold what?
11 D NELL: Hold fast, hold the line, hold your fire. It doesn't say.
12 D LUPE: Who sent it?
13 D NELL: Miles West. Eight miles up.
14 D TOMMY [O.S.] (faint, through the wall): They're coming through! Don't let 'em split the herd!
15 D CRANE: That's Tommy.
16 D LUPE: Tommy's dead. We buried him Tuesday.
17 D CRANE: Then someone sounds like him.
* 18 A ¶ The shaking grows.
* 19 A Dust sifts from the ceiling.
20 A Otto stops stacking.
21 A Lupe lifts the shotgun.
22 A Nell grips the key.
23 A Crane lets the slat fall shut and draws her revolver, and the five of them stand there as the roar rises to a wall of sound.
24 D CRANE [CONT'D]: Nobody fires till I do.
* 25 A ¶ The roar passes.
* 26 A Slowly it fades.
* 27 A ¶ Silence.
28 D OTTO: Well.
29 D NELL: It says "all clear."
30 D CRANE (dry): That's a first.

### SCENE s01630 | INT. WEATHER STATION, PACIFIC ATOLL - DAY
Detected names (may be incomplete or contain aliases): PETTY OFFICER ANSELM BOUCHARD, FENWICK
* 1 A ¶ A cinderblock hut.
* 2 A Louvered windows.
* 3 A Barometers, a wall of dials, a hand-cranked radio on a rough table.
* 4 A Heat shimmers outside.
5 A ¶ PETTY OFFICER ANSELM BOUCHARD, 30s, sunburnt, shirtless under a rain slicker, logs numbers in a ledger.
6 D BOUCHARD (muttering): Seven-oh-three. Seven-oh-two. Seven-oh-three.
7 A ¶ He taps the barometer.
* 8 A It does not move.
* 9 A ¶ The radio crackles.
10 D FENWICK [V.O.] (radio): Atoll Three, Atoll Three, this is Fleet Weather. Do you copy?
11 A ¶ Bouchard picks up the handset.
12 A Takes his time.
13 D BOUCHARD: Fleet Weather, Atoll Three. I copy.
14 D FENWICK [V.O.] (radio): Anselm, is that you?
15 D BOUCHARD: It's the only voice out here, Fenwick.
16 D FENWICK [V.O.] (radio): Give me the numbers.
17 D BOUCHARD: Seven-oh-three and steady. Wind variable, light. Seas calm. Nothing on the horizon.
18 D FENWICK [V.O.] (radio): Nothing at all?
19 D BOUCHARD: A seabird. Maybe two.
20 D FENWICK [V.O.] (radio): Understood. Hold position.
21 D BOUCHARD: We've held it eleven weeks.
22 D FENWICK [V.O.] (radio): Then you're good at it. Out.
* 23 A ¶ The radio clicks dead.
24 A Bouchard sets the handset in its cradle.
25 D BOUCHARD (to the room): Gentlemen, the war continues without us.
* 26 A ¶ No one answers.
* 27 A The room has no gentlemen.
28 A ¶ He goes back to the ledger.
29 A Writes: no change.
30 A Leans back.
31 A Closes his eyes.
32 D BOUCHARD [CONT'D] (to himself): Tomorrow, I swear, I'll paint the wall.
* 33 A ¶ Outside, a seabird calls.

### SCENE s01631 | INT. ARBITRATION ROOM, OLD COURTHOUSE - DAY
Detected names (may be incomplete or contain aliases): JUDGE ABERNATHY, OKAFOR, LINDGREN, TSUKAMOTO, BAILIFF DUFFY
* 1 A ¶ Oak panels.
* 2 A A tall window.
* 3 A A radiator that knocks.
4 A ¶ JUDGE ABERNATHY, 60s, bifocals on a chain, presides.
5 A MR. OKAFOR, 40s, sharp navy suit, and MR. LINDGREN, 40s, charcoal suit, glare across a narrow table.
6 A MS. TSUKAMOTO, 30s, the court reporter, hovers over a steno machine.
7 A BAILIFF DUFFY, 50s, leans against the door.
8 D JUDGE ABERNATHY: Mr. Okafor, you may proceed.
9 D OKAFOR: Thank you, Your Honor. Mr. Lindgren's client signed on the fourth. He knew what he was signing.
10 D LINDGREN: He did not. He thought it was the lease.
11 D OKAFOR: Then he should have read it.
12 D LINDGREN: He did. Twice. And he still didn't know what he was signing.
13 D JUDGE ABERNATHY: Mr. Lindgren. Mr. Okafor. Please.
14 D OKAFOR: Your Honor, he is stalling because he has no evidence.
15 D LINDGREN: He is shouting because he has no case.
* 16 A ¶ The radiator knocks.
17 A Everyone looks at it.
18 D DUFFY: That's been happening since Monday, Judge.
19 D JUDGE ABERNATHY: Thank you, Duffy.
20 D TSUKAMOTO: Your Honor, may I ask counsel to speak one at a time?
21 D JUDGE ABERNATHY: You may. And you shall.
* 22 A ¶ A beat.
23 A Okafor pulls a paper from his folder.
24 D OKAFOR: Exhibit nine. A signature, notarized, dated the fourth.
25 D LINDGREN (reading, then slowly): That is not my client's signature.
26 D OKAFOR: What?
27 D LINDGREN: That is yours.
28 A ¶ Okafor looks at the page.
29 A His face drains.
* 30 A The radiator knocks again, softly.
31 D JUDGE ABERNATHY: Mr. Okafor, would you care to explain?
32 A ¶ Okafor laughs.
33 A Short.
34 A Then longer.
35 D OKAFOR: Your Honor, I may have grabbed the wrong folder.

### SCENE s01632 | INT. SS HESPERIA, MAIL SORTING ROOM - NIGHT (1912)
Detected names (may be incomplete or contain aliases): PURSER EZEKIEL TRAVERS, MINNIE ABARA, FOSTER, QUINCEY
* 1 A ¶ A low steel room lined with pigeonholes, lit by green-shaded lamps.
* 2 A The ship rolls gently.
* 3 A Letters slide across tables.
4 A ¶ PURSER EZEKIEL TRAVERS, 50s, sleeve garters, sorts a bundle by hand.
5 A Across from him, MINNIE ABARA, 20s, a clerk with ink on her cuff, stamps envelopes in a steady rhythm.
6 A ¶ At a third table, FOSTER, 30s, in a brown wool suit, files telegrams.
7 A And at the back, QUINCEY, a boy of 12, sweeps the floor with a broom taller than he is.
8 D TRAVERS (to the room): Gentlemen, ladies, we dock Thursday. I'd like the mail from Queenstown done by then.
9 D FOSTER: It will be, sir.
10 D MINNIE (to herself): Dublin, Dublin, Cork. Dublin.
11 D TRAVERS: Miss Abara, how many left?
12 D MINNIE: Four hundred and twelve, sir.
13 D TRAVERS: That's a fair number.
14 D MINNIE: It's a fair ship, sir.
15 A ¶ Travers smiles at that.
16 A Returns to his sorting.
17 D QUINCEY (muttering): Four hundred and eleven.
18 D MINNIE: Quincey, what are you counting?
19 D QUINCEY: You dropped one, miss.
20 A ¶ He holds up a postcard.
21 A Minnie takes it, reads, and tucks it carefully in a pigeonhole.
22 D FOSTER (to Quincey): Good eyes, lad.
23 D QUINCEY: Thank you, sir.
24 D FOSTER (to himself): Better than mine.
25 D TRAVERS (to everyone): Tea, anyone?
26 D MINNIE: Yes, please, sir.
27 D FOSTER: No, thank you.
28 D QUINCEY: Is there milk?
29 D TRAVERS: There's always milk, Quincey. It's the one thing the sea doesn't take.
30 A ¶ He sets down the bundle.
31 A Rises.
32 A Crosses to the kettle.
* 33 A The ship rolls.
* 34 A The lamps swing.
* 35 A Nobody notices.

### SCENE s01633 | EXT. SALT FLAT STAGE STOP - NOON
Detected names (may be incomplete or contain aliases): HATTIE MORROW, BRODIE, LAZARO, SNOW
* 1 A ¶ White to the horizon.
* 2 A Heat bending the air.
* 3 A A lone shack.
* 4 A A dead coach.
5 A ¶ HATTIE MORROW, 40s, hat low, holds a rifle.
6 A BRODIE, 30s, a hired gun, has a revolver pointed at her.
7 A LAZARO, 20s, the driver, crouches by a wheel.
8 A SNOW, an old white-whiskered prospector, watches from the shack's shade.
9 D HATTIE (to Brodie): You won't shoot a woman in the back.
10 D BRODIE: You're facing me.
11 D HATTIE: Then you won't shoot a woman in the front.
* 12 A ¶ A pause.
* 13 A The wind.
14 D LAZARO (to everyone): Please. Nobody has to die today.
15 D SNOW (muttering): Everybody has to die someday.
16 D BRODIE: Shut up, old man.
17 A ¶ Brodie's eyes flick to Snow.
18 A Hattie's rifle snaps up.
19 A A shot rings.
20 A Brodie spins, drops his revolver, grabs his shoulder.
* 21 A ¶ Silence.
* 22 A Smoke drifts across the flats.
23 D HATTIE (to Lazaro): Get the water.
24 D LAZARO: Yes, ma'am.
25 D SNOW (to Brodie, gently): Told you.

### SCENE s01634 | INT. ORBITAL SEED VAULT - HOLD C - CONTINUOUS
Detected names (may be incomplete or contain aliases): KAZIMIR, TOLLIVER
* 1 A ¶ A cold, white corridor of sealed drawers, each labeled in a script that has gone out of use.
* 2 A Frost on the rails.
* 3 A A low hum of cooling pumps.
4 A ¶ KAZIMIR, 50s, in a pressure suit with the helmet off, pushes a cart slowly down the aisle.
5 A His breath clouds.
6 A ¶ TOLLIVER, 40s, also in a suit, strides ahead with a tablet.
7 A He stops at a drawer.
8 A Frowns.
9 D TOLLIVER: This one is warm.
10 D KAZIMIR: Warm?
11 D TOLLIVER: Eleven degrees above spec.
12 D KAZIMIR: It's the cooling pump. I told them in March.
13 D TOLLIVER: He told us in March. We told Command.
14 D KAZIMIR: Command said what?
15 D TOLLIVER: That it was within tolerance.
16 A ¶ Kazimir sighs.
17 A Parks the cart.
18 A Opens the drawer.
* 19 A Frost curls out.
* 20 A ¶ Inside, hundreds of tiny glass vials, row on row.
* 21 A Some are dark.
* 22 A Some are faintly green.
23 D KAZIMIR: How many have turned?
24 D TOLLIVER: Sixty. Maybe seventy.
25 D KAZIMIR: Out of how many?
26 D TOLLIVER: Eleven thousand.
27 A ¶ Kazimir lifts one vial.
28 A Holds it to the light.
* 29 A A single green seed curls inside, soft and alive.
30 D KAZIMIR: Still breathing.
31 D TOLLIVER: Is it?
32 D KAZIMIR: Look at it. It's trying.
33 A ¶ Tolliver sets down the tablet.
34 A Takes the vial.
35 A Cups it in both gloved hands.
36 A For a long time he says nothing.
37 D TOLLIVER: When I was young, he told me nothing in a vault ever grows.
38 D KAZIMIR: He was wrong.
39 D TOLLIVER: He was often wrong.
40 A ¶ Kazimir takes the vial back.
41 A Places it in a tray labeled RESCUE.
42 A Closes the drawer.
43 D KAZIMIR: We start with this one. We fix the pump. We save sixty.
44 D TOLLIVER: And the rest?
45 D KAZIMIR: We tell them it was within tolerance.
46 A ¶ Both laugh, softly.
* 47 A The cooling pumps hum.

### SCENE s01635 | INT. FIELD HOSPITAL, CONVERTED OPERA HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL VEGA, NURSE OLUWASEUN, ARCHIBALD, SEUN
* 1 A ¶ Gilt cherubs watch over a row of cots laid across the orchestra pit.
* 2 A A single chandelier burns at half power.
* 3 A The air smells of carbolic and old velvet.
4 A ¶ DR. MARISOL VEGA, 40s, steps down from the stage with a clipboard, shoulders loose, the first unhurried moment in days.
5 A NURSE OLUWASEUN, 30s, whom everyone calls Seun, tucks a blanket around ARCHIBALD, 70s, who has been quiet since evening.
6 D DR. VEGA: Seun, he's settled?
7 D SEUN: Settled, Doctor. Sleeping like a stone.
8 D DR. VEGA: Archibald? Can you hear me?
9 A ¶ Archibald's eyelids flutter.
10 A He smiles.
* 11 A The room is hushed, the chandelier steady.
12 D SEUN: Doctor, I think the fever's broken.
13 D DR. VEGA: Good. Very good.
14 A ¶ She lays a palm on his forehead.
15 A Then her face changes.
16 A Her hand flinches back.
17 A She reaches for his wrist.
18 D DR. VEGA [CONT'D]: Seun. Light.
19 D SEUN: Doctor?
20 D DR. VEGA: Bring the lamp.
21 A ¶ Seun lifts the lamp.
22 A They both lean in.
23 A Archibald's lips are blue.
24 A His smile has not moved.
25 D DR. VEGA [CONT'D]: Archibald!
26 A ¶ She pounds his chest.
27 A Seun knocks the lamp over and catches it.
28 A They both freeze as the chandelier above them gutters out.
* 29 A ¶ Darkness.
* 30 A Then a single cough in the pit, and a hundred cots begin to stir.

### SCENE s01636 | EXT. FROZEN LAKE LANDSDAL - BONSPIEL RINK - DAY
Detected names (may be incomplete or contain aliases): ASTRID NYGAARD, TORVALD, INGE, HALVOR, LINNEA, REFEREE ODDMUND, OFFICIAL
* 1 A ¶ A white plain under a lower white sky.
* 2 A Eight sheets of curling ice scraped clean.
* 3 A Flags snapping.
4 A Crowds in wool, breath rising.
5 A ¶ At the far house, ASTRID NYGAARD, 30s, skip, tall, ice in her braid, crouches behind the button, broom raised.
6 A Her three teammates wait down the sheet: TORVALD, 50s, burly, thick gloves; INGE, 20s, whip-thin, the lead; and HALVOR, 60s, slow-moving, the veteran.
7 A ¶ At the hack, LINNEA, 20s, her youngest sweeper, adjusts her grip on a stone.
* 8 A ¶ The score reads 6-6.
* 9 A Final end.
10 D ASTRID (calling): Linnea! Heavy! Heavy!
11 D LINNEA: Heavy?
12 D ASTRID: Draw to the button. One more.
13 D LINNEA: Right.
14 A ¶ Linnea pushes off.
15 A Slides.
* 16 A The stone glides.
* 17 A A hush spreads.
* 18 A Even the wind seems to listen.
19 D TORVALD: Left, Inge! Sweep!
20 D INGE: I am sweeping!
21 D HALVOR: Harder!
22 D TORVALD: Harder!
23 D INGE: Harder than hard!
* 24 A ¶ The stone creeps down the ice.
25 A Their brooms hiss.
* 26 A It curls toward the house -- and stops, a hair short.
27 A ¶ Groans from the crowd.
28 A Astrid hangs her head.
29 D TORVALD: Short.
30 D HALVOR: Short by a hair.
31 D INGE: That was my sweeping.
32 D TORVALD: It wasn't you.
33 D HALVOR: It was the ice.
34 D ASTRID: It was me.
* 35 A ¶ A heavy silence.
* 36 A Down the sheet, the other team's final stone is already gliding home.
* 37 A It is perfect.
* 38 A It hits the button.
39 A The crowd cheers.
* 40 A ¶ A whistle.
41 A REFEREE ODDMUND, 60s, in a parka marked OFFICIAL, strides out across the ice with a measuring tape, grim as a judge.
42 D ODDMUND: Measurement! Measurement on the stones!
43 A ¶ The crowd falls quiet.
44 A Oddmund kneels.
45 A Unrolls the tape.
46 A Measures.
47 A Measures again.
48 D ODDMUND [CONT'D] (looking up): Nygaard stone. Four centimeters. Their stone. Four-point-one.
49 D INGE: We won?
50 D TORVALD: We won!
51 D HALVOR: We won by a tenth!
52 D LINNEA: By a tenth of what?
53 D HALVOR: Of anything!
54 D ASTRID (breathless): Oddmund. Measure again.
55 D ODDMUND: I've measured twice.
56 D ASTRID: Then measure again.
57 A ¶ Oddmund sighs, kneels, measures a third time.
58 A The crowd leans in.
* 59 A Wind turns the flags.
60 D ODDMUND (softly): Four-point-one. Four-point-one. Nygaard stone, four.
* 61 A ¶ A beat.
62 A Then the roar goes up.
63 A Torvald lifts Astrid off the ice.
64 A Halvor sits down on his broom.
65 A Inge dances.
66 A Linnea stares at her own gloves.
67 D ASTRID (to Linnea): You pushed it.
68 D LINNEA: It stopped short.
69 D ASTRID: It was exactly enough.
* 70 A ¶ Down the sheet, the other team's stones sit silent on the ice.
* 71 A Wind drifts snow across them.
72 D TORVALD: They threw a perfect last stone.
73 D HALVOR: Not perfect enough.
74 D ASTRID: Then they'll be back.

### SCENE s01637 | EXT. STALLED CABLE CAR OVER A GORGE - DAY
Detected names (may be incomplete or contain aliases): JUNIPER, BASHIR
* 1 A ¶ Wind.
* 2 A A steel box swaying under a single cable.
* 3 A Far below, a river like a thread.
4 A ¶ JUNIPER, 30s, hiking boots, a torn pack, sits wedged against the door.
5 A She stares at the hatch in the ceiling.
6 A Her knuckles are white.
7 D JUNIPER (to the empty car): Okay. Okay. Everyone stay calm.
* 8 A ¶ No one answers.
* 9 A The car creaks.
10 D JUNIPER [CONT'D] (to herself): You are not stuck. You are paused.
11 A ¶ She reaches into her pack.
12 A Pulls a radio.
13 A Presses the button.
* 14 A Static.
15 D JUNIPER [CONT'D] (into radio): Base, this is car nine. Anyone?
* 16 A ¶ Static.
17 A She tries again.
18 A And again.
* 19 A ¶ A bolt shears off somewhere above.
* 20 A Metal rings.
* 21 A The car lurches six inches.
22 A Juniper screams, clamps both hands on the rail.
23 D JUNIPER [CONT'D] (to the car): No. No no no.
24 A ¶ She closes her eyes.
25 A Breathes.
26 A In.
27 A Out.
28 A ¶ She opens the hatch release.
29 A Pushes.
* 30 A Nothing.
31 A Pushes again.
* 32 A The latch squeals.
* 33 A ¶ A shadow falls across the hatch.
34 A ¶ BASHIR, 30s, in a climbing harness and a bright orange helmet, drops through the opening on a rope, boots first.
35 A He lands, steadies the car with one knee, and clips a carabiner to her pack.
36 D BASHIR: Juniper?
37 D JUNIPER: Who are you?
38 D BASHIR: Rescue. They said you were alone.
39 D JUNIPER: I was talking to the car.
40 D BASHIR: How's the car?
41 D JUNIPER (laughs, shaky): Needy.
42 A ¶ He tightens the straps across her chest, one at a time, steady.
43 D BASHIR: I'm going to lift you through the hatch. You look up, not down.
44 D JUNIPER: Up. Not down.
45 D BASHIR: Good.
46 A ¶ He lifts.
47 A She rises into daylight, boots dangling.
48 D JUNIPER (from above): I can see the sun!
49 D BASHIR: Told you.
* 50 A ¶ The car groans.
51 A He follows, last out.
* 52 A The cable hums.

### SCENE s01638 | INT. GOLD ASSAY OFFICE - DAY
Detected names (may be incomplete or contain aliases): ISAIAH COLE, MAGDALENA OROZCO
* 1 A ¶ One room, adobe walls, a barred window.
* 2 A A scale of polished brass on a counter.
* 3 A A stove ticking.
* 4 A Dust turning in the light.
5 A ¶ ISAIAH COLE, 50s, a stooped assayer in sleeve garters, wipes the scale with a rag.
6 A He is slow, methodical.
7 A A man who has weighed other people's hopes for thirty years.
* 8 A ¶ A door in the back wall stands ajar.
* 9 A Beyond it, a lamp-lit vault.
* 10 A ¶ The bell above the front door jingles.
11 A ¶ MAGDALENA OROZCO, 30s, enters.
12 A Dust on her riding skirt.
13 A A canvas pouch in one fist.
14 A She walks like she has somewhere to be, and pauses when she sees he has already seen her.
15 D ISAIAH: Morning.
16 D MAGDALENA: It's afternoon.
17 D ISAIAH: Not in here.
18 A ¶ She lays the pouch on the counter.
19 A He opens it.
20 A Pours out a stream of dull yellow dust, and says nothing.
21 A He weighs.
22 A He squints.
23 A He weighs again.
24 D MAGDALENA: Well?
25 D ISAIAH: Eleven ounces.
26 D MAGDALENA: That's all?
27 D ISAIAH: Where did you find it?
28 D MAGDALENA: Upriver.
29 D ISAIAH: Upriver is long.
30 A ¶ She shrugs.
31 A He looks at her face, then at her hands.
32 A Her fingers are steady.
33 A Her nails are broken.
34 D ISAIAH [CONT'D]: That's a rough week.
35 D MAGDALENA: A rough year.
36 A ¶ He pours the dust back in.
37 A Ties the pouch.
38 A Slides it across.
39 D ISAIAH: It isn't gold.
40 D MAGDALENA: It's yellow.
41 D ISAIAH: So is brass. So is a fool's hope.
42 A ¶ She doesn't move.
* 43 A The stove ticks.
* 44 A The scale settles.
45 D MAGDALENA: How much for the dust, if it's brass?
46 D ISAIAH: Nothing.
47 D MAGDALENA: Then how much if it's gold?
48 D ISAIAH: That depends on whether you're lying.
49 A ¶ He walks to the vault door and pushes it wider.
* 50 A Beyond, a long table, covered with ledgers, a hundred small pouches in rows.
51 A ¶ She slips past him.
52 A Through the open door.
53 A Into the lamplight.
54 A He does not stop her.
55 D MAGDALENA [O.S.] (from the back room): Isaiah, how many pouches are in here?
56 D ISAIAH: More than eleven ounces' worth.
57 D MAGDALENA [O.S.] (from the back room): Whose are they?
58 D ISAIAH: Men who stopped coming back.
* 59 A ¶ A pause.
* 60 A A pouch thumps onto the table.
* 61 A Another.
62 D MAGDALENA [O.S.] (from the back room): You never sent them anything.
63 D ISAIAH: Nobody left an address.
64 A ¶ He lets out a slow breath.
65 A Sets down the rag.
66 A Locks the front door with a click.
* 67 A The bell above it jingles one last time.
68 A ¶ She steps from the vault, a pistol held loose at her side.
69 D MAGDALENA: Eleven ounces was only the start.
70 D ISAIAH: I know.
71 A ¶ He folds his hands on the counter and waits.
72 A He has weighed worse.
