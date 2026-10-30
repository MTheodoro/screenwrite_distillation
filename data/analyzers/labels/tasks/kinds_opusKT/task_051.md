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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0051.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01691 | INT. INFLATABLE CASTLE RENTAL SHOP - DAY
Detected names (may be incomplete or contain aliases): MO, DELACROIX-BROWN, PAIGE QUINTANILLA, GLADYS QUINTANILLA, FITZ
* 1 A ¶ A warehouse full of deflated bouncy castles, piled like sleeping dragons.
* 2 A Fans hum.
* 3 A A cash register dings.
4 A ¶ MAURICE "MO" DELACROIX-BROWN (50s, polo shirt, sunburnt nose) stands behind the counter.
5 A Across from him, bride-to-be PAIGE QUINTANILLA (30s, tailored blazer, manic energy) taps a tablet.
6 A Behind her, her mother GLADYS QUINTANILLA (60s, enormous sunglasses) examines a banner.
7 A In the corner, a lanky teenager, FITZ (17, apron with a name tag), pumps a foot blower.
8 D PAIGE: It has to be a castle. Not a bouncy house. A castle.
9 D MO: Ma'am, they're the same thing.
10 D PAIGE: They are not the same thing.
11 D MO: It has turrets. It bounces.
12 D PAIGE: My wedding is in six days.
13 A ¶ Mo takes a long breath.
14 A Gladys tilts her sunglasses down.
15 D GLADYS: Paige, honey, nobody's going to bounce at a wedding.
16 D PAIGE: Mom, there are twelve children coming.
17 D GLADYS: Twelve children and nobody's bouncing.
18 A ¶ Fitz stops pumping.
* 19 A The blower wheezes out.
20 A He looks at the others and says nothing.
21 D MO: I have the Camelot Deluxe. Seven by seven. Cannons on the parapet.
22 D PAIGE: How many cannons?
23 D MO: Four.
24 D PAIGE: Do they fire?
25 D MO: Air, ma'am.
26 D PAIGE: Fire real things?
27 D MO: Absolutely not.
28 A ¶ Paige narrows her eyes.
29 A Gladys lowers her sunglasses all the way and stares at Mo, then at the ceiling, as if praying.
30 D PAIGE: I'll take the Camelot.
31 D MO: Wonderful.
32 D PAIGE: But I want it in pink.
33 D MO: It's gray.
34 D PAIGE: Make it pink.
35 A ¶ Mo looks at Fitz.
36 A Fitz looks at the floor.
* 37 A The register dings by itself.
38 D MO: Fitz. Do we own pink paint?
39 D FITZ: We own a lot of paint.
40 D MO: Pink?
41 D FITZ: There's some salmon.
42 D MO: Salmon is pink.
43 D PAIGE: It is not.
44 D GLADYS: Paige, salmon is a lovely color.
45 D PAIGE: Mother!
46 A ¶ Gladys folds her arms.
47 A Paige breathes through her nose.
48 A Mo slides a clipboard across the counter, and Paige signs without reading.
49 A Fitz resumes pumping, a little faster than before.
50 D MO: Six days, then. I'll deliver Friday morning.
51 D PAIGE: Thursday night.
52 D MO: Friday morning.
53 D PAIGE: Thursday.
54 D MO (to himself): Thursday it is.
55 A ¶ Paige sweeps out.
56 A Gladys lingers, takes off the sunglasses, and slips Mo a folded fifty.
57 D GLADYS: For your trouble.
58 A ¶ She puts the glasses back on and follows her daughter out the door.
59 D FITZ: Was that a tip?
60 D MO: That was a ransom.

### SCENE s01692 | INT. ROOFTOP CONSERVATORY - EVENING
Detected names (may be incomplete or contain aliases): SOLANGE MARCHETTI, ARTHUR BEAUMONT, CORDELIA BEAUMONT, LEOPOLD VASS, HANNELORE KRUG, LAZARUS RENNICK
* 1 A ¶ Glass and ironwork.
* 2 A Orchids in terra-cotta pots.
* 3 A A string quartet tunes in the corner.
4 A ¶ SOLANGE MARCHETTI (30s, emerald dress) accepts a champagne flute while her fiancé, ARTHUR BEAUMONT (30s, tuxedo) is intercepted by his mother, CORDELIA BEAUMONT (60s, pearls), who plucks a stray thread from his lapel as the cellist, LEOPOLD VASS (20s, nervous), drops his bow and scrambles after it, and the violist, HANNELORE KRUG (40s, steel-rimmed glasses), steadies a music stand that Leopold's elbow almost topples, and Solange, observing all this, steps backward into a potted fern.
5 D SOLANGE: Sorry, ferns. Sorry.
6 D ARTHUR: You all right?
7 D SOLANGE: Splendid.
8 A ¶ At the door, LAZARUS RENNICK (30s, rumpled suit, a mysterious envelope) appears.
9 A He catches her eye, taps his chest twice.
10 A She stiffens.
11 A Arthur doesn't notice.
12 D CORDELIA: Arthur, stand straight.
13 D ARTHUR: I am standing straight, Mother.
14 D CORDELIA: Straighter.
15 D SOLANGE: Arthur, I need a moment.
16 D ARTHUR: Solange, I need a moment.
17 A ¶ Both laugh, awkwardly.
18 A Cordelia lifts an eyebrow.
19 A Hannelore sets the stand down and glances toward the door.
20 A Lazarus is gone.
* 21 A The envelope sits on the threshold, white against the dark tiles.
22 D SOLANGE: I'll be right back.
23 A ¶ She crosses the conservatory quickly, snatches the envelope, tears it open.
24 A Her face drains of color.
* 25 A Behind her, the quartet strikes up the first bars of a waltz, bright and cheerful.

### SCENE s01693 | INT. TRANSIT AUTHORITY LOST-PROPERTY OFFICE - DAY
Detected names (may be incomplete or contain aliases): OPAL REINHARDT, OLDER MAN, AMBROSE
* 1 A ¶ Shelves of umbrellas, gloves, a prosthetic leg.
* 2 A Fluorescent tubes.
* 3 A A counter with a bell.
4 A ¶ OPAL REINHARDT (40s, cardigan, lanyard) sorts a bin of scarves, folding each into a neat square, one at a time, with the slow rhythm of someone who has not slept.
5 A At the counter, an OLDER MAN (70s, flat cap, grocery bag) waits, rocking on his heels, patient, polite, watching her.
6 D OPAL: Be right with you.
7 D OLDER MAN: No rush.
8 A ¶ She finishes the scarf.
9 A Moves to the next.
10 A He glances at the shelves, at the umbrellas, at the leg, and back at her.
11 D OPAL [CONT'D]: What did you lose?
12 D OLDER MAN: A coat.
13 D OPAL: Color?
14 D OLDER MAN: Gray. Wool. My wife's initials in the lining.
15 D OPAL: Date?
16 D OLDER MAN: Fourteenth. On the Number 9.
17 A ¶ She crosses to a rack, runs her fingers along the hangers, and stops at a gray coat.
18 A She lifts it, turns it inside out, finds the stitched letters.
19 A She says nothing for several seconds.
20 D OPAL [CONT'D]: What initials?
21 D OLDER MAN: M.R.
22 A ¶ She lowers the coat onto the counter, smoothing the sleeves.
23 A Her hands tremble.
24 D OPAL: Sir. What's your name?
25 D OLDER MAN: Ambrose Reinhardt.
26 A ¶ She closes her eyes.
27 A Opens them.
28 A Looks at him properly for the first time.
29 A He looks back at her, and something in his posture shifts, softens, as though he has recognized her also.
30 D AMBROSE: Opal?
31 D OPAL: Hello, Dad.
32 A ¶ He takes the coat.
33 A He doesn't put it on.
34 A He holds it against his chest while the bell above the door jingles for someone else entirely.

### SCENE s01694 | EXT. HOLLOW OAK GLADE - TWILIGHT
Detected names (may be incomplete or contain aliases): WITCH, SIBYLLE ORMONDE, FINNEGAN BRAE
* 1 A ¶ An oak older than the kingdom, hollowed by lightning and furred with moss.
* 2 A Fireflies drift between roots as thick as cottages.
* 3 A The sky is violet, and the first stars hang low, like lanterns on unseen strings.
4 A ¶ An old WITCH, SIBYLLE ORMONDE (70s), sits on a stump.
5 A Her cloak is the color of crow feathers.
6 A She stirs a small iron pot hung from a tripod, and the smoke rises in spirals that briefly resemble faces.
7 A Before her stands a boy, FINNEGAN BRAE (12), barefoot, gripping a lantern with both hands.
8 A ¶ She does not look up.
9 A He clears his throat.
10 D FINNEGAN: I came for the cure.
11 D SIBYLLE: Did you.
12 A ¶ She dips a wooden spoon and tastes.
13 A Her mouth puckers.
14 A She lets him wait.
15 D FINNEGAN: My sister has a fever. The healers said you could help.
16 D SIBYLLE: The healers say a great many things.
17 A ¶ She sets the spoon aside, rises with a creak of old bones, and circles him slowly, as one circles a horse at market.
18 D SIBYLLE [CONT'D]: What have you brought?
19 D FINNEGAN: Silver. Three coins.
20 D SIBYLLE: Silver is for fools. What else?
21 A ¶ He hesitates.
22 A His fingers tighten on the lantern.
23 A Then he reaches into his tunic and draws out a small bone whistle, yellowed with age.
24 D FINNEGAN: My father's.
25 A ¶ Her eyes sharpen.
26 A She plucks it from his palm and turns it in the firelight.
27 A For a long moment, she says nothing, and the fireflies pause in the air.
28 D SIBYLLE: Where did you get this?
29 D FINNEGAN: He left it. When he went to the war.
30 D SIBYLLE: And did he return?
31 A ¶ He shakes his head.
32 A She presses the whistle back into his hand and folds his fingers over it.
33 D SIBYLLE [CONT'D]: Keep it. A cure costs less than you fear.
34 A ¶ She ladles the dark brew into a clay vial, stoppers it with wax, and presses it into his other palm.
35 A He stares at it, then at her, and bows his head.
36 D FINNEGAN: Thank you.
37 D SIBYLLE: Go home. Before the moon is full.
38 A ¶ He turns and runs.
* 39 A The lantern bobs between the roots and fades.
40 A She watches until the last glimmer is gone, then lowers herself onto the stump and picks up the whistle's twin from her own pocket, and holds the two together.

### SCENE s01695 | EXT. DRIVE-IN THEATER PARKING FIELD - NIGHT
Detected names (may be incomplete or contain aliases): JAY, WHITFIELD, NORI, VASQUEZ-HALL, ARCHIE PLUMMER, SABRINA DOYLE, GIRL WITH CAMERA
* 1 A ¶ A gravel lot under a weathered screen.
* 2 A Speaker posts stand in rows like headstones.
* 3 A The movie plays silent; the glow washes across a dozen parked cars.
4 A ¶ Four teenagers sit on the hood of a rusted pickup.
5 A JAMAL "JAY" WHITFIELD (17, varsity jacket, restless) tosses a bottle cap.
6 A His best friend LENORE "NORI" VASQUEZ-HALL (17, band tee, headphones around her neck) swings her legs.
7 A ARCHIE PLUMMER (16, braces, thick glasses) peels a sticker off a soda can.
8 A Beside them, SABRINA DOYLE (17, thrift-store dress, a camera on a strap) frames shots of the screen.
9 D JAY: Ten bucks says he kisses her.
10 D NORI: He doesn't kiss her. He dies in act three.
11 D ARCHIE: He doesn't die.
12 D NORI: He dies, Archie.
13 D ARCHIE: You've seen it?
14 D NORI: Twice.
15 D JAY: Then why'd we come?
16 D NORI: Because it's summer and nobody has a car that works.
17 D GIRL WITH CAMERA: Hold still, Jay. Your jacket's glowing blue.
18 D JAY: Sabrina, I'm not posing.
19 D SABRINA: It looks nice.
20 D JAY: Does it?
21 D NORI: Archie, are you eating the whole bag?
22 D ARCHIE: It's a family bag.
23 D NORI: We're a family?
24 D JAY: We're the closest thing Archie's got.
25 D ARCHIE: That's not funny.
26 D SABRINA: It's a little funny.
27 D ARCHIE: Okay, a little.
28 D JAY: So what's after this? College? Real life?
29 D NORI: Next September.
30 D SABRINA: Don't say it like that.
31 D NORI: Like what?
32 D SABRINA: Like it's a funeral.
33 D ARCHIE: I'm going to Ohio.
34 D JAY: Ohio?
35 D ARCHIE: They have a good robotics program.
36 D NORI: Ohio. Wow.
37 D JAY: You'll be great, Arch.
38 D ARCHIE: Will I?
39 D JAY: You'll be the best.
40 D SABRINA: I'm staying here. Dad's shop.
41 D JAY: You hate the shop.
42 D SABRINA: I like the darkroom.
43 D NORI: Then take pictures of it.
44 D SABRINA: I will.
45 A ¶ She raises the camera and fires.
* 46 A The shutter clicks.
* 47 A In the frame, three faces glow blue in the screen light, and one of them, Jay's, looks away.
48 D JAY: What about me?
49 D NORI: What about you?
50 D JAY: Where do I go?
51 D NORI: Anywhere, Jay.
52 D ARCHIE: Somewhere with better snacks.
53 A ¶ They laugh.
* 54 A On the screen, the hero delivers his last line without sound.
55 A Nori mouths along.
56 A Jay hurls the bottle cap at the screen.
* 57 A It pings off the post.
58 D JAY: Nobody ever remembers the summer, they remember the end of it.
59 D SABRINA (quietly): Then let's make it a long one.

### SCENE s01696 | INT. PIE-BAKING CONTEST TENT - DAY
Detected names (may be incomplete or contain aliases): CHLOE BANKS, HORACE PINKERTON, DOLORES FINCH, BIRDIE KAPOOR, RAJIV KAPOOR
* 1 A ¶ Gingham tablecloths.
* 2 A Fans stirring warm air.
* 3 A Judges' scorecards flutter in the draft.
4 A ¶ CHLOE BANKS (30s, apron, flour on her cheek) lifts a lattice-topped pie and carries it to the judges, passing her rival HORACE PINKERTON (60s, chef's whites, ego like a thundercloud), who turns his own pie a precise quarter inch.
5 A Meanwhile the host, DOLORES FINCH (50s, sequin blazer), twirls her microphone cord.
6 A Two tables over, nine-year-old BIRDIE KAPOOR (9) licks a spoon, and her father RAJIV KAPOOR (40s) tries gently to take it away.
7 D DOLORES: Contestants, five minutes!
8 D HORACE: Five? We were promised ten!
9 D CHLOE: We were not promised ten.
10 D RAJIV: Birdie, spoon.
11 D BIRDIE: It's evidence.
12 D HORACE: Evidence of what?
13 D BIRDIE: That your pie is dry.
14 A ¶ Horace turns the color of rhubarb.
15 A Chloe sets her pie down and presses her lips together very hard.
16 D DOLORES: Folks, folks, let's keep it friendly!
17 A ¶ Horace seizes his tin and thrusts it forward, but the crust slides and his whole filling lands on the floor in a perfect round puddle.
18 A Nobody speaks.
* 19 A The fans whir.
20 D BIRDIE: Told you.

### SCENE s01697 | INT. NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): AMARA OKELLO, NURSE WOJTEK BIALEK
* 1 A ¶ Dim.
* 2 A Incubators glow like small aquariums.
* 3 A Monitors beep in patient intervals.
4 A ¶ DR. AMARA OKELLO (40s, surgical mask pulled under her chin) checks a chart.
5 A Beside her, NURSE WOJTEK BIALEK (30s, soft-voiced) adjusts a tube.
6 A ¶ She lifts the baby's tiny wrist.
7 A He holds a dosage syringe to the light.
8 A Both are quiet.
9 D AMARA: Heart rate steady?
10 D WOJTEK: Steady.
11 A ¶ She nods.
12 A He adjusts the monitor.
13 A She smiles, a little.
14 D AMARA: Go home, Wojtek.
15 D WOJTEK: After my shift.
16 D AMARA: It's three a.m.
17 D WOJTEK: After my shift.
18 A ¶ He moves to the next incubator.
19 A She follows.
20 A They check, they chart, they check again.
* 21 A ¶ An alarm shrills.
22 A Both spin.
* 23 A The monitor on bed four flatlines.
24 D WOJTEK [CONT'D]: Doctor!
25 D AMARA: I see it.
26 A ¶ She reaches in; he pulls the cover.
27 A She tilts the baby's chin, begins tiny compressions with two fingers.
28 A He hands her a syringe; she pushes it.
* 29 A Nothing.
30 A She compresses again.
31 D WOJTEK [CONT'D]: Come on.
32 D AMARA: Come on, little one.
* 33 A ¶ A blip.
* 34 A Another.
* 35 A A rhythm.
36 A Both freeze, listening.
* 37 A The alarm cuts out.
38 A ¶ She lets out a shaky breath.
39 A He sets the syringe down.
40 A Neither of them moves.
41 A She looks at him; he nods.
42 D AMARA [CONT'D]: That was close.
43 D WOJTEK: Too close.
44 A ¶ He pulls a stool over and sits.
45 A She takes the chart off its hook and, without a word, starts writing.

### SCENE s01698 | EXT. BRIDGE OVER A BOTTOMLESS RAVINE - DAWN
Detected names (may be incomplete or contain aliases): HOODED TRAVELER, TROLL, ORVAL GRUNDSTONE, MAELIS
* 1 A ¶ A rope bridge strung between two cliffs, shrouded in mist.
* 2 A Below, a river roars unseen.
3 A ¶ A HOODED TRAVELER (30s, patched cloak, a staff in hand) stands at the near end.
4 A On the far side waits a TROLL, ORVAL GRUNDSTONE (towering, mossy, a toll ledger tucked under one arm).
5 D HOODED TRAVELER: Is this the only crossing?
6 D ORVAL: Only one for a hundred leagues.
7 D HOODED TRAVELER: Then I'll pay the toll.
8 D ORVAL: Toll is a story. A true one.
9 A ¶ The traveler sets down the staff, lowers the hood to reveal a weathered face and a braid of silver-streaked hair.
10 D HOODED TRAVELER: Very well. My name is Maelis. I was a queen.
11 D ORVAL: Many were.
12 D MAELIS: I lost my crown to my brother.
13 D ORVAL: Many did.
14 D MAELIS: I killed him for it.
15 A ¶ Orval stops writing in the ledger.
* 16 A The mist swirls between them.
17 D ORVAL: That is new.
18 D MAELIS: Is it enough?
19 D ORVAL: It is a beginning. Cross. Mind the third plank.
20 A ¶ She steps onto the bridge.
* 21 A It sways.
22 A She grips the rope.
23 D MAELIS: I will mind it.
24 D ORVAL: I did not say it was safe.
25 A ¶ She crosses, plank by plank, one hand always on the rope.
26 A At the third plank she pauses, steps over it, and continues.
27 A On the far side, Orval offers a massive hand to help her up.
28 A She takes it.
29 D ORVAL [CONT'D]: Your name was Maelis.
30 D MAELIS: It still is.
31 D ORVAL: Is it?
32 A ¶ She smiles, thin and tired, and walks on into the mist.

### SCENE s01699 | INT. HOSPICE GARDEN ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): LORRAINE PEARCE, GREGORY PEARCE
* 1 A ¶ Sun through gauze curtains.
* 2 A A wheelchair by the window.
* 3 A A tray of untouched tea.
4 A ¶ LORRAINE PEARCE (70s, shawl, thin) watches birds on a feeder.
5 A Her son, GREGORY PEARCE (40s, suit jacket over his arm) sits across from her, shifting.
6 D GREGORY: Mom. Do you want the blanket?
7 D LORRAINE: No.
8 D GREGORY: The window open?
9 D LORRAINE: No.
* 10 A ¶ Silence.
* 11 A The birds scatter and return.
12 D GREGORY: I called Aunt Ruth.
13 D LORRAINE: You shouldn't have.
14 D GREGORY: She wanted to know.
15 D LORRAINE: She always wants to know.
16 D GREGORY: Mom, I --
17 D LORRAINE: Gregory, I --
18 A ¶ They stop.
19 A He gestures: you first.
20 A She shakes her head.
21 D GREGORY: Say it.
22 D LORRAINE: I wasn't a good mother.
23 D GREGORY: Don't.
24 D LORRAINE: I'm tired of pretending.
25 A ¶ He puts the jacket down.
26 A Takes her hand.
27 D GREGORY: You were fine, Mom.
28 D LORRAINE: Fine.
29 D GREGORY: Fine is enough.

### SCENE s01700 | INT. DEFUNCT BUS DEPOT - NIGHT
Detected names (may be incomplete or contain aliases): MATEUS SOTO, DEZI, JULIEN MOULTRIE, HUGO BRANDTNER, AGNES LOVELACE, PADDY GLASS
* 1 A ¶ Cracked tile.
* 2 A Bench seating, rusted.
* 3 A A flickering departure board with no destinations.
4 A ¶ Six masked figures enter through a loading door.
5 A They fan out.
6 A MATEUS SOTO (40s, the crew lead) raises a fist.
7 A Behind him, DESIREE "DEZI" MOULTRIE (30s) hauls a duffel; her brother JULIEN MOULTRIE (20s) props open the door; HUGO BRANDTNER (50s) unrolls a map on a bench; AGNES LOVELACE (60s) lifts a crowbar; and the kid, PADDY GLASS (19), keeps lookout, twitching.
8 D MATEUS (to the group): Eyes up. Nobody moves until I say.
9 D DEZI (to Julien): Stop jiggling the door.
10 D JULIEN: Sorry.
11 D HUGO (to himself): East wall. East wall.
12 D AGNES: Where's the vault?
13 D MATEUS: Under the baggage claim.
14 D PADDY: There's no baggage claim.
15 D MATEUS: Under where it used to be.
16 A ¶ Agnes sets the crowbar against a locker, strides to the broken department board, and swings.
* 17 A The glass shatters; behind it, a steel panel.
18 A She grins.
19 D AGNES: Found it.
20 A ¶ Hugo scribbles on the map.
21 A Julien lets the door swing shut and hurries over.
22 A Dezi opens the duffel, pulls out a drill and a coil of cable.
23 A Paddy glances at the street, then back, then at the street again.
24 D PADDY: Headlights.
25 D MATEUS: Everybody down!
26 A ¶ They drop behind benches, lockers, pillars.
* 27 A A pair of headlights sweeps the windows and slides past.
28 A Nobody breathes.
* 29 A The engine fades.
30 D PADDY: False alarm.
31 D DEZI (muttering): Kid's going to give me a heart attack.
32 D MATEUS (to the group): Back to work. Fifteen minutes.

### SCENE s01701 | INT. VICTORIAN OBSERVATORY - NIGHT (1887)
Detected names (may be incomplete or contain aliases): YOUNG WOMAN, PROFESSOR EUSTACE PEMBERTON, PROFESSOR, OTTOLINE
* 1 A ¶ A copper dome open to the stars.
* 2 A A great brass telescope on a creaking mount, its tube pointing at a smear of the Milky Way.
* 3 A Chalk equations cover a slate board.
4 A ¶ A YOUNG WOMAN in a plain gray dress (20s) stands at the eyepiece, a notebook clutched to her chest.
5 A She has slipped in through the coal door.
* 6 A Behind her, from the stairwell, a lantern rises.
7 A ¶ An old man, PROFESSOR EUSTACE PEMBERTON (70s, nightshirt, dressing gown, white whiskers), emerges, glaring.
8 D PROFESSOR: Who is there? Show yourself!
9 A ¶ She spins, notebook falling.
10 A He lifts the lantern.
* 11 A The light finds her face.
12 D YOUNG WOMAN: Professor, please. I only wished to see.
13 D PROFESSOR: This is a private instrument.
14 D YOUNG WOMAN: I am Ottoline Marsh, sir. I wrote to you eleven times.
15 A ¶ He lowers the lantern a little.
16 A His beard trembles.
17 D PROFESSOR: The scullery girl's cousin? The one who counts comets?
18 D OTTOLINE: I do not count them, sir. I find them.
19 A ¶ He stares at her.
20 A Then at the telescope.
21 A Then at the sky through the open dome.
22 D PROFESSOR: Show me.
23 A ¶ She hesitates, steps to the eyepiece, adjusts a brass knob with practiced fingers.
24 A He peers in after her.
* 25 A A long silence.
26 D PROFESSOR [CONT'D]: God in heaven.
27 D OTTOLINE: Yes, sir.

### SCENE s01702 | INT. FLOATING LIBRARY - LANTERN HALL - TWILIGHT
Detected names (may be incomplete or contain aliases): IMELDA OGUNLEYE, BARTHOLOMEW QUILL, PIP
* 1 A ¶ Shelves rise in spirals into a sky of drifting clouds.
* 2 A Books hover on invisible currents, flapping their covers like moths.
* 3 A Lanterns bob at the ends of long gilt chains.
* 4 A Rain falls upward past the windows.
5 A ¶ IMELDA OGUNLEYE (50s, patchwork robes, spectacles on a silver chain) sits at a vast oak desk, writing with a feather that dips itself into the ink.
6 A Before her stands BARTHOLOMEW QUILL (30s, travel-stained coat, a leather satchel), hat in hand.
7 A Perched on a high shelf, a small gray owl-shaped librarian called PIP watches them both with unblinking amber eyes.
8 D IMELDA: Sit.
9 D BARTHOLOMEW: I'd rather stand.
10 D IMELDA: You'll sit, or the books won't speak to you.
11 A ¶ He sits.
* 12 A A book drifts down and lands in his lap, spine trembling.
13 D BARTHOLOMEW: Is it always like this?
14 D IMELDA: Only on Tuesdays.
15 D BARTHOLOMEW: It's Thursday.
16 D IMELDA: Then it is worse than I thought.
17 D PIP (a soft hoot): Hoo.
18 D IMELDA: Pip says you are late.
19 D BARTHOLOMEW: I came as soon as the letter reached me.
20 D IMELDA: It reached you three weeks ago.
21 D BARTHOLOMEW: The roads were closed.
22 D IMELDA: The roads are always closed. That is what roads are for.
23 A ¶ He opens the book.
* 24 A The pages are blank.
25 A He turns them.
* 26 A Blank.
* 27 A Blank.
* 28 A A single line of ink slowly blooms on the last page, in handwriting he recognizes.
29 D BARTHOLOMEW: That's my mother's hand.
30 D IMELDA: Yes.
31 D BARTHOLOMEW: She wrote this?
32 D IMELDA: She is writing it now.
33 D BARTHOLOMEW: She's been dead for nine years.
34 D IMELDA: In this library, no one is dead until the last page is read.
* 35 A ¶ Silence.
* 36 A Rain falls up.
* 37 A A lantern knocks softly against a shelf.
38 D BARTHOLOMEW: What does it say?
39 D IMELDA: Read it aloud.
40 D BARTHOLOMEW: "My dear boy. If you are reading this, I have kept my promise."
41 D PIP: Hoo.
42 D IMELDA: Go on.
43 D BARTHOLOMEW: "I have kept it a very long time."
44 A ¶ His voice cracks.
45 A Imelda takes off her spectacles and polishes them on her sleeve, looking elsewhere.
46 A Pip tucks his head under one wing.
47 D BARTHOLOMEW [CONT'D]: Is there more?
48 D IMELDA: There is always more.
49 D BARTHOLOMEW: How long may I stay?
50 D IMELDA: Until the lanterns burn down.
51 D BARTHOLOMEW: And when is that?
52 D IMELDA: When you stop reading.
53 A ¶ He bends over the page.
* 54 A The lanterns brighten.

### SCENE s01703 | INT. GRAND HOTEL LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CROWE, IMOGEN TATE, PIOTR SELENKO, WICK, WICKHAM, BELLHOP, GUARD, HOTEL SECURITY
* 1 A ¶ Steam hisses from industrial presses.
* 2 A Carts of white linen.
* 3 A A tall window shows the city's lights.
4 A ¶ CROWE (50s, quiet, hotel uniform) pushes a cart down the aisle, the picture of a bored night porter.
5 A Behind him, three figures in identical gray overalls follow: IMOGEN TATE (30s), who counts keys; PIOTR SELENKO (40s), who whistles; and DESMOND "WICK" WICKHAM (20s), who hums a tune.
6 D CROWE (to the group): We walk. We do not run. We do not look at the cameras.
7 D WICK (under his breath): Which cameras?
8 D IMOGEN: Wick.
9 D WICK: Sorry.
10 A ¶ They reach a service lift.
11 A Crowe presses the call button.
* 12 A Nothing.
13 D PIOTR: Is it supposed to be broken?
14 D CROWE: It is supposed to be slow.
* 15 A ¶ The lift arrives.
16 A A BELLHOP (20s, pillbox hat) steps off, sees them, nods.
17 A They nod back.
18 A He walks on, whistling the same tune as Piotr.
* 19 A ¶ The doors close.
20 A The four of them ride up in silence.
21 A Crowe checks a pocket watch.
22 A Imogen clicks her tongue against her teeth.
23 D IMOGEN (to herself): Two hundred and six. Two hundred and seven.
24 D PIOTR: What are you counting?
25 D IMOGEN: Seconds.
* 26 A ¶ Ding.
* 27 A The doors open on the penthouse corridor.
* 28 A The carpet is red, the walls gold.
29 A A single guard sits in an armchair at the far end, asleep.
30 D CROWE (to the group): Gentle. Gentle.
31 A ¶ They creep past the guard.
32 A Wick, passing, nudges a vase with his elbow; it wobbles; he catches it, grinning like a boy.
33 A Imogen swallows a laugh.
34 A ¶ Crowe produces a key.
* 35 A The suite door opens without a sound.
* 36 A Inside: a vault door, humming softly, gleaming.
37 A Nobody speaks.
* 38 A ¶ Then every light in the corridor comes on at once.
39 A The guard stands, no longer asleep, and unholsters a pistol.
40 D GUARD: Welcome, gentlemen. And lady.
41 A ¶ Crowe's shoulders sag a fraction.
42 A He slowly raises his hands.
43 D CROWE: Evening, Marcus.
44 A ¶ The Guard smiles, and now we see the badge on his belt: HOTEL SECURITY, DIRECTOR.

### SCENE s01704 | INT. ZOO REPTILE HOUSE - OFFICE - DAY
Detected names (may be incomplete or contain aliases): NELLIE, BRIGHTWATER, PERCIVAL ADEWALE-STONE, HECTOR NAVARRO, INTERCOM
* 1 A ¶ Cluttered desk.
* 2 A A taxidermy iguana on a filing cabinet.
* 3 A An intercom box on the wall.
4 A ¶ ELEANOR "NELLIE" BRIGHTWATER (40s, khaki vest, perpetually frazzled) runs a hand through her hair.
5 A Across from her, new hire PERCIVAL ADEWALE-STONE (20s, brand-new uniform, a clipboard clutched to his chest) sits rigidly.
6 A By the door, groundskeeper HECTOR NAVARRO (60s, rubber boots, tobacco-stained mustache) leans on a broom.
7 D NELLIE: So. Your first day.
8 D PERCIVAL: Yes. I'm very excited.
9 D NELLIE: Don't be.
10 D HECTOR: It builds character.
11 D INTERCOM [V.O.]: Nellie, it's the snake house. Mamba's out.
12 A ¶ Nellie shuts her eyes.
13 A Percival stares at the intercom.
14 D PERCIVAL: Out of what?
15 D NELLIE: Out of everything.
16 A ¶ She leaps to her feet and knocks the desk; papers go flying.
17 A Hector drops the broom.
18 A Percival ducks, and they all tangle in the doorway, jostling, pushing, shoving each other out into the corridor.
19 D INTERCOM [V.O., CONT'D]: Also the python. And the gift shop.
20 D HECTOR: The gift shop?
21 D NELLIE: Nobody panic.
22 D PERCIVAL: Everyone's panicking.
23 D HECTOR: I'm not.
24 D NELLIE: Hector, you're holding the broom upside down.
25 D HECTOR: That's my panic.
26 A ¶ They scatter down the hall in three directions, shouting.

### SCENE s01705 | INT. REPOSSESSED PIANO SHOWROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HORTENSE LAFLEUR, CLEM BOUDREAUX, WREN
* 1 A ¶ Rows of grand pianos under sheets, like ghosts at a recital.
* 2 A One lamp burns on a bench.
* 3 A The air smells of lacquer and dust.
4 A ¶ DETECTIVE HORTENSE LAFLEUR (50s, trench coat, a limp she hides) circles a closed Steinway.
5 A At the far wall, a heavyset man, CLEM BOUDREAUX (40s, pinstripe shirt, nervous), twists a ring on his finger.
6 A Beside him, a girl in an oversized sweatshirt, WREN (15), picks at the lid of a baby grand.
7 D HORTENSE: Mr. Boudreaux.
8 D CLEM: Detective.
9 D HORTENSE: You recognize that piano?
10 D CLEM: It's a Steinway. I recognize most Steinways.
11 D HORTENSE: It came off a truck in Baton Rouge on the ninth.
12 D CLEM: Plenty came off trucks on the ninth.
13 D HORTENSE: Not with a body inside.
14 A ¶ Wren looks up sharply.
15 A Clem stops twisting the ring.
16 D CLEM: Wren, honey, go wait in the car.
17 D WREN: I'm not leaving you, Uncle Clem.
18 D HORTENSE: Your niece?
19 D CLEM: My niece.
20 D HORTENSE: Hello, Wren. I'm Hortense.
21 A ¶ Wren says nothing.
22 A Hortense lifts the sheet and raps on the closed lid.
* 23 A A hollow thud.
24 D HORTENSE [CONT'D]: Open it, please.
25 D CLEM: It's locked.
26 D HORTENSE: Then unlock it.
27 D CLEM: I don't have the key.
28 D HORTENSE: Wren does.
29 A ¶ Wren's eyes flick to her uncle.
30 A Clem exhales and shuts his eyes.
31 D DETECTIVE LAFLEUR (softly, to the girl): It's all right, sweetheart. Nobody's in trouble tonight who doesn't deserve to be.
32 A ¶ Wren slides a small brass key from her sleeve and walks to the Steinway.
* 33 A The lock turns with a click that echoes through the whole room.

### SCENE s01706 | INT. SUBMERGED CHAPEL - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IRENE KASPRZAK, FORENSIC TECH BASIL NWOSU, FATHER ANSELMO DURAN, VOICE
* 1 A ¶ A drowned stone nave, half-flooded after a dam failure.
* 2 A Waist-deep black water.
* 3 A Pews float like wreckage.
* 4 A Flashlights stab the dark, throwing wavering circles on vaulted arches overhead.
* 5 A Water drips from a hole in the roof.
6 A ¶ DETECTIVE IRENE KASPRZAK (40s, waders, a tight jaw) wades down the aisle.
7 A Behind her, FORENSIC TECH BASIL NWOSU (30s, a camera held overhead) picks his way through floating hymnals.
8 A A third figure, a local priest, FATHER ANSELMO DURAN (60s, black cassock hitched to his knees), carries a lantern, mumbling prayers.
9 D IRENE: Basil, light.
10 D BASIL: Coming.
11 D ANSELMO: Detective, this is a consecrated place.
12 D IRENE: It's a crime scene, Father.
13 D BASIL: Both can be true.
14 D ANSELMO: Not tonight.
* 15 A ¶ A ripple spreads from the altar.
16 A All three stop.
17 D IRENE: Stay behind me.
18 D ANSELMO (over Irene): It's only the dam still settling, it does that --
19 D BASIL (over Anselmo): Those are footprints, Irene. Look, on the altar step. Wet.
20 D IRENE: Fresh?
21 D BASIL: Minutes.
22 D ANSELMO: Impossible. No one has been in here since the flood.
23 D IRENE: Somebody has.
24 A ¶ She raises her flashlight.
* 25 A The beam finds the altar, then a dark shape slumped behind it.
* 26 A Water drips from a gloved hand.
27 D IRENE [CONT'D]: Police! Show me your hands!
* 28 A ¶ Nothing.
29 A Then the hand slowly moves, and a voice, small and hoarse, croaks out of the dark.
30 D VOICE [O.S.]: Father? Is that you?
31 A ¶ Anselmo drops the lantern.
* 32 A It hisses out in the water.
* 33 A The chapel plunges into black.

### SCENE s01707 | INT. CLOCKMAKER'S SHOP - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LOUISA HARDCASTLE, BARNEY OKAFOR-LISTER
* 1 A ¶ Hundreds of clocks, all ticking, none in agreement.
* 2 A Brass gears under glass domes.
* 3 A Pendulums swing in long cases along the walls.
* 4 A A single green-shaded lamp lights a workbench strewn with tiny screwdrivers.
5 A ¶ INSPECTOR LOUISA HARDCASTLE (50s, wool overcoat, gray streak in her hair) studies a grandfather clock whose glass door hangs open.
6 A Behind the bench, the shop's owner, BARNEY OKAFOR-LISTER (50s, leather apron, loupe pushed up on his forehead), watches her with his hands flat on the wood.
7 D LOUISA: You said the clock stopped at 3:15.
8 D BARNEY: It did.
9 D LOUISA: And the man was found at 3:17.
10 D BARNEY: Yes.
11 D LOUISA: Then he was killed at 3:15.
12 D BARNEY: Or the clock was wrong.
13 D LOUISA: Your clocks are never wrong, Mr. Okafor-Lister.
14 D BARNEY: Mine, no. His, perhaps.
15 D LOUISA: Whose?
16 D BARNEY: The victim's. He wound it himself.
17 D LOUISA: He, who?
18 D BARNEY: The man who died.
19 D LOUISA: You said he came to you for repairs.
20 D BARNEY: He did. He said it ran slow.
21 D LOUISA: And did it?
22 D BARNEY: Not when I looked.
23 A ¶ She runs her gloved finger along the clock's pendulum, then lifts it to the lamp.
* 24 A A thin dusting of gold powder.
25 A She sniffs it.
26 D LOUISA [CONT'D]: Gold leaf.
27 D BARNEY: It would be. For the dial.
28 D LOUISA: It's on the pendulum, not the dial.
29 A ¶ He doesn't answer.
* 30 A A hundred clocks tick on.
* 31 A A cuckoo bursts from a case in the dark and sings once, shrilly, and withdraws.
32 D LOUISA [CONT'D]: Mr. Okafor-Lister. Who else had a key?
33 D BARNEY: Only the man himself.
34 D LOUISA: And the man's widow.
35 D BARNEY: I didn't say that.
36 D LOUISA: No. I did.
37 A ¶ He looks at her.
38 A She looks at him.
39 A Then, slowly, he reaches under the workbench and brings up a small velvet pouch, tilting it so that the gold dust trickles onto the bench.
40 D BARNEY: He told me it was for the restoration.
41 D LOUISA: And you believed him.
42 D BARNEY: She did.
43 A ¶ Louisa closes her eyes.
* 44 A The clocks strike the half hour, all at different times.

### SCENE s01708 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAN IN TRENCHCOAT, BEIGE TRENCHCOAT, GINO FALCONE, TREVOR PRICE, ELLIS
* 1 A ¶ Shelves of guitars and watches.
* 2 A A single bare bulb.
* 3 A A card table.
4 A ¶ A MAN IN A BEIGE TRENCHCOAT (40s) sits across from GINO FALCONE (50s, shirt sleeves rolled, gold chain), who shuffles a deck.
5 A Behind them, a lanky kid, TREVOR PRICE (20s, hoodie), leans on a locker, picking at a thumbnail.
6 D GINO: You're late.
7 D MAN IN TRENCHCOAT: Traffic.
8 D GINO: There's no traffic.
9 D MAN IN TRENCHCOAT: That's what makes it suspicious.
10 A ¶ Trevor snorts.
11 A Gino deals three cards face down.
12 D GINO: Name's Gino. This is Trevor. What do we call you?
13 D MAN IN TRENCHCOAT: Ellis.
14 D GINO: Ellis what?
15 D ELLIS: Just Ellis.
16 A ¶ Gino flips a card.
* 17 A Ace of spades.
18 A He grins.
19 D GINO: Ellis, you know why you're here?
20 D ELLIS: You tell me.
21 D GINO: Because you owe.
22 D ELLIS: I know what I owe.
23 D GINO: Then pay.
24 A ¶ Ellis reaches into his coat.
25 A Trevor straightens, hand drifting to his waistband.
26 A Gino raises a palm: easy.
27 A Ellis slowly lays a thick envelope on the table.
28 D ELLIS: Count it.
29 A ¶ Gino thumbs through the bills, nods once, and slides the envelope under the table.
30 D GINO: Pleasure doing business.

### SCENE s01709 | INT. LAKESIDE CABIN - LIVING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ROSCOE ALDRIDGE, FRANCES ALDRIDGE, CAMILLA, LIAM, AUNT BEATA, DOCTOR
* 1 A ¶ A wood stove ticks.
* 2 A Six chairs around a worn table.
* 3 A A phone with a long cord hangs on the wall.
4 A ¶ The Aldridge family gathers: father ROSCOE ALDRIDGE (60s), mother FRANCES ALDRIDGE (60s), their daughters CAMILLA (30s) and JOSEPHINE "JO" (28), son LIAM (25), and Frances's sister, AUNT BEATA (70s).
5 A Nobody has taken off a coat.
* 6 A ¶ The phone rings.
7 A Everyone looks at it.
8 A Frances rises, answers.
9 D FRANCES: Hello?
10 D DOCTOR [V.O.] (through phone): Mrs. Aldridge? It's Dr. Suarez at Mercy General.
11 D FRANCES: Yes. Go ahead.
12 D DOCTOR [V.O.] (through phone): I'm sorry. He didn't make it through the surgery.
13 A ¶ Frances lowers the receiver.
14 A She stares at the wall.
15 D ROSCOE: Frances?
16 A ¶ She hangs up.
17 A Turns to the room.
18 D FRANCES: It's Papa.
19 A ¶ Beata presses a hand to her mouth.
20 A Camilla steps back.
21 A Jo bursts into tears; Liam puts an arm around her.
22 A Roscoe takes off his cap and holds it with both hands.
23 D ROSCOE: Then we go to him.
24 D CAMILLA: Tonight?
25 D ROSCOE: Tonight.
26 A ¶ Nobody moves.
* 27 A The stove ticks.
28 A Then Frances takes her purse from the table and opens the cabin door onto the dark lake.

### SCENE s01710 | INT. ROYAL OPERA HOUSE - BACKSTAGE - NIGHT (1923)
Detected names (may be incomplete or contain aliases): PRIMA DONNA ELVIRA CASTELLANI, MAUD PRIMROSE, BARONESS LUDMILLA ROSENKRANZ, CORNELIUS BLYTHE, TANNOY
* 1 A ¶ Ropes, flats, a smell of greasepaint.
* 2 A Gaslight hisses in sconces.
* 3 A Beyond the curtain, an orchestra tunes.
4 A ¶ PRIMA DONNA ELVIRA CASTELLANI (40s, glittering gown, feathered headdress) sweeps down the corridor, flanked by her dresser, MAUD PRIMROSE (30s, pins in her mouth).
5 A Around the corner steps her rival, BARONESS LUDMILLA ROSENKRANZ (40s, ermine stole), and the two women stop face to face.
6 A ¶ The stage manager, CORNELIUS BLYTHE (50s, pince-nez), hurries between them.
7 D CORNELIUS: Ladies, please. Curtain in five.
8 D ELVIRA: She is in my dressing room.
9 D LUDMILLA: Your dressing room was always mine.
10 D ELVIRA: She stole my feather.
11 D LUDMILLA: She wore it badly.
12 A ¶ Maud spits out the pins.
13 A Elvira lunges; Ludmilla shoves; the two women tangle, pulling at each other's headdresses, and Cornelius is jostled between them.
14 D TANNOY [V.O.] (through speaking tube): Mr. Blythe! The Prince has arrived!
15 D CORNELIUS: Not now!
16 D TANNOY [V.O.]: He asks for the leading lady!
17 D ELVIRA: She can be the leading lady --
18 D LUDMILLA: -- over my dead body!
19 A ¶ The two freeze, glaring.
20 A Maud steps between them with the dress pins in her hand.
21 D MAUD: Ladies. The Prince.
22 A ¶ They both smooth their gowns.
23 A Elvira smiles.
24 A Ludmilla smiles.
25 A Both sweep toward the curtain together.

### SCENE s01711 | INT. AIRPORT LONG-TERM PARKING STRUCTURE - LEVEL 4 - NIGHT
Detected names (may be incomplete or contain aliases): VESTA KORHONEN, ABEL TRUJILLO, SERGEANT LENNOX ODUYA, HAYDEN PRYCE, ZELDA MORROW
* 1 A ¶ Concrete.
* 2 A Oil stains.
* 3 A Sodium lights hum.
* 4 A A lone car alarm somewhere, then silence.
5 A ¶ VESTA KORHONEN (40s, charcoal coat, briefcase) walks to a sedan, keys out, shoulders tight.
* 6 A Footsteps echo behind her.
7 A She stops.
8 A They stop.
9 A ¶ She turns.
10 A A man in a gray parka, ABEL TRUJILLO (50s, thick glasses), stands ten feet away, hands visible.
11 D ABEL: Ms. Korhonen.
12 D VESTA: I don't know you.
13 D ABEL: You will.
14 D VESTA: Back off.
15 D ABEL: I'm not armed.
16 D VESTA: Everybody says that.
17 D ABEL: Check me.
18 D VESTA: Absolutely not.
19 D ABEL: Then listen. I worked with your brother.
20 D VESTA: My brother worked alone.
21 D ABEL: He told you that.
22 D VESTA: He told me everything.
23 D ABEL: He told you what he could.
24 D VESTA: Where is he?
25 D ABEL: Not here.
26 D VESTA: Where?
27 D ABEL: I can take you.
28 D VESTA: Why would I go anywhere with you?
29 D ABEL: Because you flew in for this. You wouldn't be here if you didn't half believe me.
30 D VESTA: Don't tell me what I believe.
31 D ABEL: Then tell me yourself.
32 D VESTA: I believe my brother is dead.
33 D ABEL: Is that what they told you?
34 D VESTA: It's what the police told me.
35 D ABEL: And what did you tell yourself?
36 A ¶ She falls silent.
37 A Her grip on the briefcase whitens.
38 A ¶ A third figure steps out of the dark behind Abel: SERGEANT LENNOX ODUYA (30s, patrol uniform, hand on holster).
39 D LENNOX: Mr. Trujillo. Step away from the lady.
40 D ABEL: Officer, there's no need --
41 D LENNOX: Now.
42 A ¶ Abel raises his hands.
43 A Vesta stares at Lennox, then at Abel, then at the ramp.
44 A Two more cars roll up from below, headlights blinding, and a woman and a man, HAYDEN PRYCE (30s) and ZELDA MORROW (40s), step out in dark suits.
45 D HAYDEN: Ms. Korhonen? Federal agents. We need you to come with us.
46 D VESTA: Why?
47 D ZELDA: Because that man isn't who he says.
48 A ¶ Abel meets her eyes, silent, then lowers his hands and turns his palms up: I told you.

### SCENE s01712 | INT. TINY APARTMENT - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): JOANNA CRUZ-DELACROIX, VOICE MAIL, DANIEL
* 1 A ¶ A narrow galley kitchen.
* 2 A Mismatched mugs.
* 3 A A window over the sink opens onto a brick wall and one square of sky.
4 A ¶ JOANNA CRUZ-DELACROIX (30s) stands at the counter in an oversized cardigan.
* 5 A A phone sits face-down beside a bowl of cold noodles.
6 A She stirs them, doesn't eat.
7 A She picks up the phone, flips it, sets it down.
* 8 A ¶ Her thumb hovers over the screen.
9 A She takes a breath.
10 A Presses.
* 11 A ¶ The phone rings through the speaker.
* 12 A Once.
* 13 A Twice.
* 14 A Three times.
15 D VOICE MAIL [V.O.]: You've reached Daniel. I can't come to the phone right now. Leave a message.
16 A ¶ She mouths the next word along with the recording.
17 D VOICE MAIL [V.O., CONT'D] (a soft laugh): Or don't. I'll know it was you.
* 18 A ¶ BEEP.
19 A ¶ She opens her mouth.
20 A Closes it.
21 A Her free hand rises to her collarbone, where a thin chain holds a small silver ring.
22 A ¶ She ends the call.
23 A Sets the phone down.
24 A Walks to the window.
25 A Opens it, and cold air rushes in.
26 A She breathes it deeply.
* 27 A ¶ The phone buzzes on the counter.
28 A She doesn't turn.
* 29 A It buzzes again.
30 A She turns slowly, looks at it, and crosses back.
* 31 A ¶ The screen shows a single word: DANIEL.
32 A ¶ She lets it ring.
33 A Her shoulders drop.
34 A ¶ She picks it up, swipes, and brings it to her ear.
35 A ¶ She says nothing.
36 A On the other end, a pause, then a quiet voice.
37 D DANIEL [V.O.] (through phone): Jo?
38 A ¶ She sits down at the little table, very slowly.
39 A Her hand covers her mouth.
40 A She nods, uselessly, to no one.
41 D DANIEL [V.O., CONT'D] (through phone): I'm sorry. I'm so sorry I didn't call sooner.
42 A ¶ Her eyes fill.
43 A She finally lets herself smile.
* 44 A The noodles go on cooling beside her.

### SCENE s01713 | INT. SALON OF A GRAND HOUSE - NIGHT (1912)
Detected names (may be incomplete or contain aliases): LADY ROSAMUND ASHFORD
* 1 A ¶ A gilded drawing room.
* 2 A Fire in a marble hearth.
* 3 A A piano shrouded in cloth.
* 4 A Tall windows reveal fog on a dark street.
5 A ¶ LADY ROSAMUND ASHFORD (40s, silk gown, pearls) stands at a writing desk, one hand pressed flat on an unsealed letter.
6 A She does not sit.
* 7 A ¶ A bell rings in the hall below.
8 A She flinches, then composes herself.
9 D ROSAMUND [V.O.] (reading, in her own head): "My dearest. By the time you read this, I will have crossed the water."
10 A ¶ She closes her eyes.
11 A Takes the letter, folds it, tucks it into the bodice of her gown.
* 12 A ¶ Footsteps on the stair, slow, measured.
13 A She straightens, smooths her skirts, turns toward the door with a hostess's smile.
14 D ROSAMUND (whisper): Courage.
* 15 A ¶ The footsteps pass the door and continue down the corridor.
16 A The smile fades.
17 A She laughs once, shakily.
18 A ¶ She crosses to the fire.
19 A Removes the letter and holds it over the flames.
20 A At the last moment, she pulls it back.
21 D ROSAMUND [V.O., CONT'D] (reading): "Do not look for me. I have taken the little blue case."
22 A ¶ She goes back to the desk.
23 A Sits.
24 A Unfolds the letter, smooths it, and reads it again from the top.
25 A Her lips move.
* 26 A The fire shifts.
* 27 A ¶ Outside in the hall, the bell rings once more.
28 A She does not rise.

### SCENE s01714 | EXT. DUSTY CROSSROADS GENERAL STORE - NOON
Detected names (may be incomplete or contain aliases): SHERIFF AMOS BRIDGEWATER, TAMSIN FOURKILLER, WENDELL PRATT, HOLLIS CARDWELL
* 1 A ¶ A false-fronted store beside a dry well.
* 2 A A hitching post.
* 3 A A sleeping dog under a porch.
* 4 A Heat shimmers off the road.
5 A ¶ SHERIFF AMOS BRIDGEWATER (50s, sweat-stained hat) sits on the porch whittling.
6 A Beside him in a rocker, his deputy, TAMSIN FOURKILLER (30s, braid over her shoulder), sharpens a knife.
7 A Inside the doorway, the shopkeeper, WENDELL PRATT (60s, apron), sweeps with a straw broom that moves less than it should.
8 D AMOS: Quiet day.
9 D TAMSIN: Quiet town.
10 D WENDELL: Quiet's good for business.
11 D AMOS: Is it?
12 D WENDELL: It's never been bad.
* 13 A ¶ The sound of hooves.
14 A All three look up.
* 15 A A lone rider approaches from the south, dust rising behind him.
16 A He reins up at the well, and dismounts, slowly.
17 A HOLLIS CARDWELL (40s, gray duster, face like leather, a revolver on each hip) dips a tin cup in the well.
18 A He drinks, and watches them over the rim.
19 D AMOS: Morning, stranger.
20 D HOLLIS: Afternoon, I think.
21 D AMOS: Might be.
22 A ¶ Hollis wipes his mouth on his sleeve.
23 A Tamsin's knife stops against the whetstone.
24 A Amos does not stop whittling.
25 D HOLLIS: Looking for a man.
26 D AMOS: This town's got a few.
27 D HOLLIS: This one's called Baxter.
28 A ¶ Wendell's broom freezes.
29 A Amos blows a shaving off his blade.
30 D AMOS: Don't know him.
31 D HOLLIS: Funny. He knows you, Sheriff.
32 A ¶ Nobody moves.
* 33 A The dog under the porch lifts its head, then lowers it.
34 D TAMSIN: Mister, you picked a hot day.
35 D HOLLIS: I picked this one on purpose.
36 D AMOS: So what's your business?
37 D HOLLIS: Same as yours, I expect. Old debts.
38 A ¶ Amos closes his knife, slips it into his pocket, and stands.
39 A Hollis's hands hang loose at his sides.
40 D AMOS: Wendell, go inside.
41 D WENDELL: Sheriff --
42 D AMOS: Inside.
43 A ¶ Wendell backs through the door and shuts it.
* 44 A A bolt slides.
45 A Tamsin rises from the rocker, one hand on her hip.
46 D HOLLIS: Deputy. You too.
47 D TAMSIN: I'm fine here.
48 D HOLLIS: Suit yourself.
* 49 A ¶ A fly drones.
* 50 A Somewhere, a shutter bangs once in the wind.

### SCENE s01715 | INT. MIDWEST DINER - MORNING
Detected names (may be incomplete or contain aliases): CLARENCE VOSS-HOLT, ESTELLE, MARISELA TORRES, ROY DUNCAN, LEVI HARKNESS
* 1 A ¶ Formica counters.
* 2 A A pie case humming.
* 3 A Steam on the windows.
4 A ¶ CLARENCE VOSS-HOLT (70s, suspenders, a coffee cup he never drinks) sits at the counter.
5 A His daughter ESTELLE (40s, work blazer) slides into the stool beside him as the waitress, MARISELA TORRES (50s, apron), pours her a cup, and in the corner booth two men in feed-store caps, ROY DUNCAN (60s) and LEVI HARKNESS (60s), argue softly about corn futures.
6 D CLARENCE: You came.
7 D ESTELLE: You called.
8 A ¶ He nods.
9 A She stirs her coffee.
10 A Neither looks at the other.
11 A Marisela moves down the counter.
12 A Roy slaps the table; Levi laughs.
13 D CLARENCE: I sold the farm.
14 A ¶ Estelle's spoon stops.
15 A Her jaw tightens.
16 A He keeps looking at the pie case.
17 D ESTELLE: You what?
18 D CLARENCE: Signed Friday.
19 A ¶ She stands so fast the stool spins.
20 A Marisela freezes with the pot in her hand.
21 A Roy and Levi fall silent.
22 A Estelle grips the counter, breathes, and sits again.
23 A He finally turns.
24 D CLARENCE [CONT'D]: Mom would've wanted me out.
25 D ESTELLE: Mom would've wanted you to ask.
26 A ¶ Clarence reaches over and lays a hand on hers.
27 A She lets him.
28 A Marisela sets the pot down, and without a word, brings two slices of pie.

### SCENE s01716 | INT. COMPETITIVE CHILI COOK-OFF - ALLEY BEHIND THE STAGE - DAY
Detected names (may be incomplete or contain aliases): LEROY PIKE, DEE, OKONJO, HAROLD TUCKER, WANDY, SOUSA
* 1 A ¶ Folding tables.
* 2 A Giant steel pots.
* 3 A A smoky haze.
* 4 A A banner flaps: COUNTY CHILI CHAMPIONSHIP.
5 A ¶ LEROY PIKE (40s, apron reading KISS THE COOK) tastes from a ladle and winces.
6 A Beside him, his teammate DARLENE "DEE" OKONJO (40s, bandanna) stares into a second pot.
7 A Facing them from the next table, rival cooks HAROLD TUCKER (50s, mustache) and WANDERLEY "WANDY" SOUSA (50s, cowboy hat) crack their knuckles.
8 D LEROY: It's missing something.
9 D DEE: It's missing nothing.
10 D LEROY: It's missing salt.
11 D DEE: I added salt.
12 D LEROY: When?
13 D DEE: Before.
14 D LEROY: Before what?
15 D DEE: Before you added salt.
16 D LEROY: I didn't add salt.
17 D DEE: Yes, you did.
18 D LEROY: Then why does it taste like it's missing salt?
19 D DEE: Because you added too much.
20 D LEROY: But you said it's missing --
21 D DEE: Leroy.
22 D LEROY: Yes?
23 D DEE: Stop talking.
24 D HAROLD: Trouble in paradise?
25 D DEE: Mind your pot, Harold.
26 D HAROLD: My pot's perfect.
27 D WANDY: It's a little thin, Harold.
28 D HAROLD: It's not thin. It's rustic.
29 D WANDY: Rustic is a polite word for thin.
30 D LEROY (to Dee): He called him thin.
31 D DEE: Who called who thin?
32 D LEROY: Wandy called Harold's chili thin.
33 D DEE: Good. Because he is.
34 D HAROLD: I heard that. He's not thin either!
35 D WANDY: Who's not thin?
36 D HAROLD: Your chili!
37 D WANDY: My chili is magnificent.
38 D LEROY: Your chili is a soup.
39 D WANDY: Your chili is a crime.
40 D DEE: Leroy, don't.
41 D LEROY: He started it.
42 D DEE: He didn't. You did. He said it. Then he said it to him, and he said it back.
43 D LEROY: Who?
44 D DEE: Nobody. Just taste your own chili.
45 A ¶ Leroy dips a spoon and tastes.
46 A His eyes widen.
47 A Dee tastes.
48 A She nods slowly.
49 D DEE [CONT'D]: That's not salt.
50 D LEROY: That's cinnamon.
51 D DEE: We put cinnamon in it?
52 D LEROY: We don't use cinnamon.
53 D DEE: Then who did?
54 A ¶ They both turn.
55 A Across the alley, Harold and Wandy are suddenly very interested in their ladles.
56 D LEROY: You.
57 D HAROLD: Us?
58 D LEROY: You put cinnamon in our chili.
59 D HAROLD: We did no such thing.
60 D WANDY (to Harold): Did we?
61 D HAROLD (to Wandy): He did.
62 D WANDY: I did not!
63 D HAROLD: Then who?
* 64 A ¶ An airhorn blares from the stage.
65 A ¶ Nobody moves.
66 A Four ladles hover over four steaming pots.
67 D DEE: Fine. We call it a truce.
68 D LEROY: A truce.
69 D HAROLD: Fine.
70 D WANDY: Fine.
71 D DEE: Fine.
72 A ¶ They all lower their ladles at once and begin to stir in perfect, furious silence.

### SCENE s01717 | EXT. DRAGON'S ROOST - MOUNTAIN LEDGE - DAWN
Detected names (may be incomplete or contain aliases): SIR OSWIN HARTLEY, NELLA, FINCH, ZAHARA QUDSI, BASIL THORNWICK, TAMARISK ODEN
* 1 A ¶ A windswept ledge high on a black peak.
* 2 A Clouds boil below.
* 3 A In the distance, a thin line of silver: the sea.
4 A ¶ Four adventurers climb the last switchback: SIR OSWIN HARTLEY (40s, battered plate armor), the thief PETRONELLA "NELLA" FINCH (20s, hooded, quick-eyed), the mage ZAHARA QUDSI (30s, indigo robes, staff topped with a glowing crystal) and the young squire BASIL THORNWICK (14, carrying too many packs).
5 D OSWIN: Quiet now. We approach.
6 D NELLA: I'm always quiet.
7 D ZAHARA: You hummed all night.
8 D NELLA: Only softly.
9 D BASIL: Sir, my pack is on fire.
10 D OSWIN: What?
11 D BASIL: Only a little.
12 A ¶ Zahara flicks her fingers; the flame hisses out.
* 13 A A deep rumble shakes the ledge.
* 14 A Pebbles skitter down the rock.
15 A The adventurers freeze.
16 D OSWIN: That was the mountain, wasn't it?
17 D ZAHARA: That was something else.
* 18 A ¶ A great shadow slides across them.
* 19 A A growl like grinding stones rolls down from above.
20 A ¶ Oswin draws his sword.
21 A Nella melts into the rocks.
22 A Basil drops his packs.
23 A ¶ Then, from the cave mouth ahead, a figure steps into the light: TAMARISK ODEN (60s, patched green cloak, a ring of keys at her belt), the dragon's keeper, holding a bucket.
24 D TAMARISK: Oh, don't mind him. He hasn't had his tea.
25 D OSWIN: His tea?
26 D TAMARISK: Chamomile. Dry throat. Come in.

### SCENE s01718 | EXT. LIFEBOAT - OPEN SEA - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN HILDEGARD VOSBERG, BAXTER NNAMDI, ISOLDE FAIRWEATHER, JASPER LOCKWOOD, PILOT MARCEL DUVALIER
* 1 A ¶ Gray swells.
* 2 A A battered lifeboat rides low.
* 3 A A torn canvas sail sags from a broken oar.
4 A ¶ Four survivors huddle on the thwarts.
5 A CAPTAIN HILDEGARD VOSBERG (60s, oilskins) clutches the tiller, the ship's cook BAXTER NNAMDI (40s) bails with a tin cup while the stewardess ISOLDE FAIRWEATHER (30s) rations the last biscuit into crumbs, and the cabin boy JASPER LOCKWOOD (12) leans against her, shivering.
6 D HILDEGARD: Eyes on the horizon.
7 D BAXTER: There's nothing out there, Captain.
8 D ISOLDE: There's always something.
9 D JASPER: Is that a bird?
10 D BAXTER: It's a gull. Gulls mean land.
11 D HILDEGARD: Or a storm.
12 A ¶ They scan the sky.
* 13 A A speck wheels and vanishes.
* 14 A The wind drops.
* 15 A The boat creaks.
* 16 A In the silence, a distant drone grows, faint, mechanical.
* 17 A ¶ A small seaplane skims out of the clouds, banking low over the water.
18 A PILOT MARCEL DUVALIER (30s, leather helmet) leans from the open cockpit, waving a red flag.
19 D ISOLDE: Oh, thank God.
20 D JASPER: They see us!
21 D PILOT (shouting over the engine): Hold your positions! I'm dropping a line!
22 D HILDEGARD (softly): Stay seated. All of you.
23 A ¶ Nobody moves.
24 A Baxter lets the cup slip into the sea.

### SCENE s01719 | INT. DEEP-SPACE COLONY SHIP - HYDROPONICS BAY - "NIGHT CYCLE"
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER, MATEO ROJAS-ILLINGWORTH, ORCHARD
* 1 A ¶ A cathedral-sized chamber, its curved ceiling lined with violet grow-lights dimmed to a gentle dusk.
* 2 A Terraces of lettuce, wheat and tomato step down to a central pool where a pale mist lingers.
* 3 A The air is warm and wet, and smells faintly of basil.
* 4 A Somewhere, water drips in a patient rhythm.
5 A ¶ DR. SAOIRSE KELLEHER (50s, silver hair in a braid, lab coat over a sleeping tunic) walks the terrace alone, brushing leaves with her fingertips.
6 A Below, at the pool, a young technician, MATEO ROJAS-ILLINGWORTH (20s, rolled sleeves, tool belt) refills a nutrient dispenser.
7 A The ship's AI, ORCHARD, glows as a faint green node at the end of each terrace.
8 D SAOIRSE: Mateo. Aren't you off shift?
9 D MATEO: Couldn't sleep, Doctor.
10 D SAOIRSE: Nor could I.
11 D MATEO: It's quiet down here.
12 D SAOIRSE: It always was, my first voyage.
13 A ¶ He smiles.
14 A She sits on the terrace steps.
* 15 A The mist swirls.
16 D ORCHARD [V.O.]: All systems nominal. Crop yield at one hundred and four percent.
17 D SAOIRSE: Thank you, Orchard.
18 D MATEO: It's weird, isn't it? Everything's so perfect.
19 D SAOIRSE: Perfect is what we aimed for.
* 20 A ¶ Silence.
* 21 A The water drips.
22 A Mateo stops, tilting his head, listening.
23 D MATEO: That's not the drip.
24 D SAOIRSE: What?
25 D MATEO: The drip's every four seconds. That's every three.
26 D ORCHARD [V.O.]: Correction. Condensation cycle is irregular.
27 A ¶ Saoirse stands.
28 A Her hand lingers on a tomato vine.
* 29 A The leaf is faintly warm, like skin.
30 D SAOIRSE: Orchard. Run a biological scan on Terrace Three.
31 D ORCHARD [V.O.]: Scanning.
* 32 A ¶ The green node flickers.
* 33 A Along the terrace, every plant turns, slowly, toward the two humans.
* 34 A The mist in the pool thickens into a shape that is almost, but not quite, a face.
35 D ORCHARD [V.O., CONT'D] (soft, distorted): Scan complete. You are not alone.

### SCENE s01720 | INT. DRAINED MUNICIPAL SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, BRAM OKONKWO, PRUDENCE HALE, WENDELL DUCROIX
* 1 A ¶ Cracked blue tile.
* 2 A One work light hums over the deep end.
3 A ODALYS VANTERPOOL (30s, night custodian, flashlight like a club) stands on the ladder.
4 A BRAM OKONKWO (20s, her apprentice) clutches a mop.
5 A PRUDENCE HALE (60s, retired lifeguard, whistle on a cord) and WENDELL DUCROIX (40s, city inspector, clipboard) crowd the rim above.
6 D ODALYS: Nobody swims here. Nobody has swum here since--
7 D PRUDENCE: Since the boy. Say it.
8 D WENDELL: The drain cover is secure, I signed it myself, I signed it twice--
9 D BRAM: Something's knocking. Under the tile.
10 D ODALYS: It's the pipes.
11 D PRUDENCE: It's counting.
* 12 A ¶ Three slow knocks.
* 13 A The work light dies.
14 A Odalys and Bram scramble up the ladder, colliding, while Wendell drops the clipboard and Prudence blows the whistle once, hard.
15 D WENDELL: Stop blowing that!
16 D BRAM: Who's laughing? Somebody's laughing!
17 D PRUDENCE (whispering): Nobody. Nobody's down there.
* 18 A ¶ The light snaps back on.
19 A All four freeze.
* 20 A In the deep end, a single wet footprint, then another, walking toward them.

### SCENE s01721_0 | EXT. STALLED CABLE CAR - ALPINE GORGE - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A red cable car hangs motionless a thousand feet above a frozen river.
* 2 A Wind rocks it gently.

### SCENE s01721_1 | INT. CABLE CAR - CONTINUOUS
Detected names (may be incomplete or contain aliases): HOLLIS BRANNIGAN, INGRID SOLVANG, TOMASZ KRAWIEC, KEIKO ARAI, DARA NWOSU, RUFUS
1 A ¶ HOLLIS BRANNIGAN (50s, park ranger, weathered face, steady hands) sits by the door with a thermos.
2 A He pours a cup and passes it along.
3 A INGRID SOLVANG (30s, climber, rope burns on her palms) takes it and smiles.
4 A She says nothing.
5 A ¶ Beside her, TOMASZ KRAWIEC (40s, heavy coat, camera around his neck) photographs the gorge.
6 A His hands shake.
7 A KEIKO ARAI (20s, student, headphones around her neck) leans against the window, eyes closed.
8 A DARA NWOSU (30s, nurse, practical sneakers) checks a child's mitten, then pockets it.
9 D HOLLIS: Power's out on the whole line. They'll winch us by dark.
10 D TOMASZ: By dark? That's six hours.
11 D HOLLIS: Closer to four.
12 A ¶ He glances at the roof hatch.
* 13 A Nobody else notices.
14 D DARA: You keep looking up.
15 D HOLLIS: Habit.
16 A ¶ She studies him.
17 A He drinks his coffee.
* 18 A ¶ The radio on his belt crackles.
19 A Everyone looks at it.
20 D RUFUS [V.O.] (over radio): Station to car four. Hollis, you read me?
21 A ¶ Hollis thumbs the key.
22 D HOLLIS: Loud and clear, Rufus. What's the word?
23 D RUFUS [V.O.] (over radio): Don't let anybody open the hatch.
* 24 A ¶ Silence.
25 A Tomasz lowers his camera.
26 A Keiko opens her eyes.
27 D KEIKO: Why would he say that?
28 D RUFUS [V.O.] (over radio): Because it isn't the wind, Hollis. Check the roof. Count the weight.
29 A ¶ Hollis stands.
* 30 A The car dips, slow and heavy, toward the back.
31 A Ingrid grips the rail.
32 A Dara moves in front of Keiko.
33 A Tomasz backs away until he hits the glass.
* 34 A ¶ Overhead, something shifts.
* 35 A A pause.
* 36 A Then three soft taps on the hatch, polite as a neighbor's.
37 D TOMASZ (whispering): I count five of us.
38 D DARA: There are five of us.
* 39 A ¶ The taps come again.
* 40 A From underneath the floor.

### SCENE s01722 | INT. ALL-NIGHT LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): MARISOL REYES, TEDDY OYELARAN, NKECHI BELL, CAL DRUMMOND
* 1 A ¶ Fluorescent tubes buzz.
* 2 A Rows of orange plastic chairs, a broken change machine with a handwritten sign, a wall of dryers like portholes.
* 3 A Rain on the glass.
4 A ¶ MARISOL REYES (17, hoodie, backpack stuffed with a prom dress in a garment bag) sits on a washer, knees up.
5 A TEDDY OYELARAN (17, tall, thin, a cast on his left wrist) feeds quarters into a dryer.
6 A NKECHI BELL (16, Marisol's cousin, braids, school jacket) paces.
7 A CAL DRUMMOND (18, ex-boyfriend, letterman jacket, car keys in his fist) stands by the door, dripping.
8 D CAL: Everybody just calm down.
9 D NKECHI (to Marisol): You told me he wasn't coming.
10 D MARISOL: I didn't know.
11 D CAL: I just want to talk.
12 D TEDDY (muttering): Here we go.
13 D MARISOL (to the room): Okay, nobody is doing this tonight.
14 A ¶ Cal steps forward.
15 A Teddy puts down the quarters and stands between them, wrist cast raised like a stop sign.
16 D TEDDY: Cal. Buddy. It's three in the morning.
17 D CAL: Stay out of it, Teddy.
18 D TEDDY: I'm in it. I'm holding her dress.
19 A ¶ He is.
20 A He doesn't remember picking it up.
21 D NKECHI (to herself): I'm calling my mom.
22 D MARISOL: Don't you dare.
23 A ¶ Cal's fist closes on the keys.
24 A Then, slowly, he opens it.
25 A He lets the keys drop onto the chair and sits down hard, shoulders loose.
26 D CAL: I drove forty minutes. I don't even know what I was going to say.
* 27 A ¶ Nobody answers.
* 28 A A dryer buzzes.
29 A Marisol slides off the washer.
30 D MARISOL: Then say it. You've got until this cycle's over.
31 A ¶ She sets the timer on the dryer.
* 32 A Thirty-one minutes.
33 A Teddy hands Cal a warm towel from the load without a word.
34 D NKECHI (to Teddy): That's somebody's towel.
35 D TEDDY: It's everybody's now.

### SCENE s01723 | INT. WIRELESS ROOM - STEAMSHIP "MERIDIAN" - NIGHT (1912)
Detected names (may be incomplete or contain aliases): AGNES FENWICK, PHILIPPA ASHCROFT, CAPTAIN HARGREAVES
* 1 A ¶ A cramped brass-and-oak cabin.
* 2 A A spark-gap transmitter crackles.
* 3 A A speaking tube hangs by the door.
4 A ¶ AGNES FENWICK (20s, wireless operator, ink on her cuffs) taps a key, headphones crooked on her head.
5 A PHILIPPA ASHCROFT (30s, first-class passenger in a fur collar) stands behind her, gripping the back of the chair.
6 D PHILIPPA: She said it was only a drill. She promised.
7 D AGNES: She says a great many things, ma'am.
8 A ¶ Philippa leans closer.
9 A Agnes pulls a sheet of paper from under the key and covers it with her sleeve.
10 A She watches her the way a cat watches a draft.
11 D PHILIPPA: Show me what you wrote.
12 D AGNES: I can't.
13 D PHILIPPA: She told me to ask. She gave me leave.
* 14 A ¶ The speaking tube whistles.
15 A Agnes snatches the cap off.
16 D CAPTAIN HARGREAVES [V.O.] (through the tube): Miss Fenwick. Is the passenger with you?
17 D AGNES: She is, sir.
18 D CAPTAIN HARGREAVES [V.O.] (through the tube): Then you'll finish the message and you'll send it as written. All of it. Do you understand?
19 A ¶ Philippa takes the paper from under Agnes's sleeve.
20 A She reads.
21 A Her face goes white.
22 A Agnes stands, and the chair scrapes the deck.
23 D AGNES: Ma'am, please sit.
24 D PHILIPPA (very quiet): Send it.
25 A ¶ Agnes lowers her hand to the key.
* 26 A The spark leaps.

### SCENE s01724 | INT. CAR DECK - NIGHT FERRY - NIGHT
Detected names (may be incomplete or contain aliases): SORAYA KAMALI, LEV ARKADYEV, MARGUERITE DELACROIX, DUTCH PELLEGRINO
* 1 A ¶ Rows of parked cars chained to the steel floor.
* 2 A Diesel fumes and cold salt.
* 3 A Overhead lamps sway with the swell.
4 A ¶ SORAYA KAMALI (30s, plainclothes agent, wet hair, a pistol held low against her thigh) crouches behind a delivery van.
5 A She whispers into her sleeve.
6 A Across the aisle, LEV ARKADYEV (50s, silver mustache, cashmere coat) sits calmly on a bumper with a leather case on his knees.
7 A He is not hiding.
8 D LEV: You can come out, Agent Kamali. I bought your ticket myself.
9 A ¶ She does not move.
10 A Behind Lev, MARGUERITE DELACROIX (40s, ship's purser, uniform too crisp) appears at the stairwell door, a keyring in one hand, and stops when she sees the gun.
11 A At the far end of the deck, DUTCH PELLEGRINO (60s, deckhand, oil-stained overalls, a wrench) steps out from behind a truck, takes in the three of them, and starts to back away.
12 A Soraya stands, aims at Lev, and swings her head toward the noise.
13 A Marguerite raises both hands, the keyring jingling.
14 A Lev opens the case on his knees and takes out nothing but a thermos.
15 D LEV [CONT'D]: Tea?
16 D SORAYA: Put it down.
17 D LEV: It's tea.
18 D MARGUERITE (to Soraya): Miss, I'm only the purser. I was told to bring him the key to the cabin.
19 D SORAYA: Whose cabin?
20 D MARGUERITE: Yours.
21 A ¶ Soraya hesitates.
22 A Dutch, still backing, bumps a car alarm that begins to whoop.
23 A Everyone flinches.
24 A Lev does not.
25 A He pours tea into the thermos lid, and steam rises in the cold.
26 D LEV: The man you came here to arrest got off at the last port. I wanted to see your face when you understood.
27 D SORAYA: Then why are you still aboard?
28 D LEV: Because you are the one I wanted.
29 A ¶ Dutch silences the alarm with a wrench, and the deck goes quiet but for the engines.
30 A Marguerite lowers her hands.
31 A Soraya lowers the gun an inch, then another.
32 A Dutch stays by the truck, wrench loose in his fist, looking at nobody.
33 D DUTCH (low): Ma'am, I think the captain knows.
34 D SORAYA: Knows what?
35 D DUTCH: That none of us is going to the next port.
36 A ¶ Lev sips his tea.
37 A Marguerite looks at her keyring as if she has never seen it before.
38 A Soraya raises her gun again, but slower this time, like a woman reading a verdict.
39 D SORAYA: Everyone stay exactly where you are.
40 D LEV: We have nowhere else to be.

### SCENE s01725 | INT. CURLING CLUB - SATURDAY MORNING
Detected names (may be incomplete or contain aliases): GRETA HOLMQUIST, BJORN LUND, ILSE NAKAMURA, STRANGER, FELIX
* 1 A ¶ Empty sheet of ice.
* 2 A Rocks lined up like sleeping animals.
* 3 A A scoreboard that says nothing.
4 A ¶ GRETA HOLMQUIST (40s, skip, club jacket) sweeps a rock into place.
5 A BJORN LUND (50s, vice, thermos) watches from the hack.
6 A ILSE NAKAMURA (20s, newest member, brand-new broom) stands too straight.
7 A ¶ A STRANGER (30s, rental shoes, borrowed gloves) pushes open the glass door and stands at the edge of the ice.
8 D GRETA: Closed to the public.
9 D STRANGER: I called. A woman said Saturday.
10 D BJORN: That was Ilse.
11 D ILSE: I said come at noon.
12 D STRANGER: It's eleven fifty.
13 A ¶ Bjorn laughs into his thermos.
14 A Greta says nothing.
15 A She slides a rock back to the hack.
16 D GRETA: What's your name?
17 D STRANGER: Felix.
18 D GRETA: Felix. Ever held a broom?
19 D FELIX: My father curled. I never did.
20 D GRETA: That's the best kind.
21 A ¶ She hands him her broom.
22 A Felix steps onto the ice, arms out for balance.
23 A Ilse shifts to make room.
24 A Bjorn lifts the thermos, pours a fourth cup, and sets it on the boards.

### SCENE s01726 | EXT. DRIVE-IN CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): TAVITA SOLOMONA, ROZ KELLERMAN, EAMON FLYNN
* 1 A ¶ Tar paper.
* 2 A A dead neon popcorn bucket.
* 3 A The big screen glows blue over a field of parked cars.
4 A ¶ TAVITA SOLOMONA (17, linebacker shoulders, soft eyes) sits on the edge.
5 A ROZ KELLERMAN (17, sharp, camera strapped on) crouches near the vent.
6 A EAMON FLYNN (16, small, hands in his sleeves) arrives last through the hatch.
* 7 A ¶ Eamon's boots on tin.
8 A Everyone freezes.
9 D ROZ: You're late.
10 D EAMON: My mom had me.
11 A ¶ Tavita stands.
12 A Roz stands.
13 A They back away from the hatch.
* 14 A A flashlight beam sweeps the lot below.
15 D TAVITA: Cops.
16 D ROZ: Security.
17 D TAVITA: It's the same thing.
18 D ROZ: Get down!
19 A ¶ All three drop flat.
20 A Tavita pulls Eamon by the collar.
* 21 A Roz's camera clacks on the tar.
* 22 A The beam slides past them, and passes.
23 A They breathe.
24 A ¶ Then Eamon laughs.
25 A Tavita shoves him.
26 A Eamon shoves back.
27 A They tumble, wheezing, quiet as they can be.
28 D ROZ (whisper): Stop it. Stop.
29 D EAMON: Roz, you looked so scared.
30 D ROZ: I was not.
31 D TAVITA: You were crying.
32 D ROZ: I was not!
33 D EAMON: Tav, you cried too.
34 D TAVITA: I cry at commercials. It doesn't count.
35 D ROZ: You said you'd tell him tonight.
36 D TAVITA: Tell who what?
37 D ROZ: Eamon. About the move.
38 D EAMON: What move?
39 D TAVITA: It's nothing.
40 D ROZ: It's Ohio.
41 D EAMON: Ohio?
42 D TAVITA: My dad's job. It's August. I didn't want to say it up here.
43 D EAMON: You were gonna say it at the lake. You said that.
44 D TAVITA: I know what I said.
45 D ROZ: So say it.
46 D TAVITA: I'm moving. I'm sorry. I'm sorry.
47 D EAMON: Okay.
48 D TAVITA: Okay?
49 D EAMON: Okay. That's August. It's June.
50 D ROZ: We have the whole summer.
51 D EAMON: We have sixty-one nights. I counted.
52 A ¶ Tavita wipes his face with his sleeve.
53 A Roz lifts her camera.
* 54 A The film flickers across all three of them, blue.
55 A ¶ She takes the picture.

### SCENE s01727 | INT. PIGEON-RACING CLUB - BANQUET HALL - EVENING
Detected names (may be incomplete or contain aliases): OTTOLINE VANDERMEER, BARNABY CROWE, CLEMENTINE ASHBY-NOLAN
* 1 A ¶ A low-ceilinged hall that smells of boiled ham and floor wax.
* 2 A Trophies line the walls, each topped with a small bronze bird in mid-flap.
* 3 A Round tables wear paper cloths.
* 4 A One table, at the back, has been set for three, and a single basket of bread rolls sits between the places like a negotiated settlement.
5 A ¶ OTTOLINE VANDERMEER (60s) arrives first, in a green velvet dress she has plainly owned since the club's previous presidency.
6 A She arranges the cutlery by the width of a thumb, sits, and begins to examine her roll as if it might be called to testify.
7 A ¶ BARNABY CROWE (50s) enters carrying a wrapped trophy under one arm and a plastic bag of seed under the other, which he has not been able to leave in the coat room.
8 A He stands for a moment at the end of the table.
9 A He sets the trophy down gently, face-forward.
10 A He sets the seed down with considerably less ceremony.
11 A ¶ CLEMENTINE ASHBY-NOLAN (30s), the youngest person in the room by twenty years, comes in last.
12 A She has a clipboard.
13 A She also has the expression of someone who has already lost the argument she is about to start.
14 D OTTOLINE: You're sitting there?
15 D BARNABY: It was my chair last year.
16 D OTTOLINE: Last year you were also winning.
17 D BARNABY: I'm winning this year.
18 D CLEMENTINE: The scores aren't posted until after the soup.
19 D OTTOLINE: Then you can sit where you like until after the soup.
20 A ¶ Barnaby does not sit.
21 A He lifts the trophy by its base and sets it on the table, an inch closer to Ottoline's plate than to his own.
22 D BARNABY: I wrapped it myself.
23 D OTTOLINE: It looks wrapped.
24 D BARNABY: Four layers.
25 D OTTOLINE: In what?
26 D BARNABY: In tissue. Mostly.
27 D OTTOLINE: Mostly.
28 D CLEMENTINE (consulting clipboard): It's, ah. It's the Hartley Cup. Which is, strictly, for the best bird in the northern loft.
29 D BARNABY: It is.
30 D OTTOLINE: And Barnaby's northern loft is where?
31 D BARNABY: Right where it's always been.
32 D OTTOLINE: Behind a dry cleaner's.
33 D BARNABY: It's a very good dry cleaner's.
34 D CLEMENTINE: I think that's not the question.
35 D OTTOLINE: No. The question is whether it's a very good bird.
36 D BARNABY: She flew four hundred miles.
37 D OTTOLINE: So I'm told.
38 D BARNABY: In nine hours.
39 D OTTOLINE: In nine hours, from a basket, in a van, according to the van driver.
40 D CLEMENTINE: I have the van driver's log. If anyone wants it.
41 D BARNABY: Nobody wants it.
42 D OTTOLINE: I'd like to see it.
43 A ¶ Clementine slides the clipboard across the table.
44 A Barnaby's hand lands on it first.
45 A For a moment all three hands rest on the same sheet of paper, and none of them moves.
46 D BARNABY: It's the club's business.
47 D OTTOLINE: I am the club's business. Fifty-one years.
48 D CLEMENTINE: You were treasurer for thirty of them.
49 D OTTOLINE: Thirty-one.
50 D CLEMENTINE: I stand corrected.
51 D BARNABY: You don't stand at all. You sit with a clipboard.
52 D CLEMENTINE: It's a very good clipboard.
53 D OTTOLINE (to her roll): Everything in this room is very good.
54 A ¶ A waiter passes with soup.
55 A All three lean back, hands retreating from the clipboard, and watch him set down three bowls.
56 A Nobody reaches for a spoon.
57 D OTTOLINE [CONT'D]: Is it mushroom?
58 D BARNABY: It's brown.
59 D CLEMENTINE: It's mushroom. I checked.
60 D OTTOLINE: You check everything.
61 D CLEMENTINE: Someone has to.
62 D BARNABY: You could have checked the bird.
63 D CLEMENTINE: I did.
* 64 A ¶ Pause.
65 D OTTOLINE: And?
66 D CLEMENTINE: And she's a very good bird.
67 D BARNABY: Thank you.
68 D CLEMENTINE: It's not the same bird that was entered.
* 69 A ¶ A spoon is lifted.
* 70 A A spoon is set down.
71 A Barnaby slides the trophy back an inch toward himself, then, looking at no one, an inch toward the middle of the table.
72 D OTTOLINE: I'd like to see her.
73 D BARNABY: She's in the car.
74 D OTTOLINE: In the car.
75 D BARNABY: In the basket. On the back seat. With the windows down an inch.
76 D OTTOLINE: Fetch her.
77 D BARNABY: It's raining.
78 D OTTOLINE: She's a pigeon.
79 D BARNABY: She's nervous.
80 D CLEMENTINE (gently): Mr. Crowe. Which bird is she?
81 A ¶ Barnaby opens his mouth.
82 A He closes it again.
83 A He picks up his spoon and tastes the soup, and his face does something complicated, and he tastes it again.
84 D BARNABY: It is mushroom.
85 D OTTOLINE: It is.
86 D BARNABY: It's actually quite good.
87 D OTTOLINE: It always has been.
88 A ¶ She tears her roll in half.
89 A She puts one half on Barnaby's bread plate, and does not look at him while she does it.
90 D CLEMENTINE: So the scores?
91 D OTTOLINE: After the soup.

### SCENE s01728 | EXT. SALT FLAT - DAWN
Detected names (may be incomplete or contain aliases): ANNELIESE VOGT, JORUND HALVORSEN, PILAR ESPINOSA, MOX, DEV KAPOOR, DISPATCH
* 1 A ¶ White to every horizon.
* 2 A A pickup truck, hood up, sits dead in the middle of nothing.
* 3 A Heat shimmer already.
4 A ¶ ANNELIESE VOGT (40s, geologist, sunburned neck, a sun hat tied under her chin) walks a slow circle around the truck, boots crunching crust.
5 A JORUND HALVORSEN (50s, driver, gray beard, canvas vest) sits on the tailgate, drinking the last of the water.
6 A PILAR ESPINOSA (30s, photographer, cameras on both hips) crouches in the shade of the tire.
7 A MOX (19, nickname, nobody uses his real one, shaved head, wide eyes) sits in the cab with the door open.
8 A DEV KAPOOR (30s, engineer, glasses, calm) lies under the truck on a flattened cardboard box.
9 D DEV [O.S.]: It's the fuel line. Cracked clean through.
10 D JORUND: Can you fix it?
11 D DEV [O.S.]: With what, Jorund? Gum?
12 D PILAR: Hey. Anneliese. Come sit.
13 D ANNELIESE: I'm looking for the road.
14 D PILAR: It's behind us. Forty miles behind us.
15 D ANNELIESE: Forty-one.
16 D MOX: Is it forty or forty-one?
17 D ANNELIESE: Forty-one, Mox. I counted on the odometer.
18 D MOX: Okay. That's good. That's a good number.
19 A ¶ Jorund tilts the empty bottle and sets it down.
20 A Pilar lifts a camera and takes a picture of the whole white nothing.
21 D PILAR: Nobody panic, right? We have the satellite phone.
22 D JORUND: We have a satellite phone.
23 D PILAR: That's what I said.
24 D JORUND: No. I said, we have a satellite phone. I'm telling you, we have a phone.
* 25 A ¶ A long silence.
26 A Dev slides out from under the truck and sits up, wiping his hands on his shirt.
27 D DEV: Is the phone working, Jorund?
28 D JORUND: It has a battery.
29 D DEV: Is the phone working?
30 D JORUND: Pilar, hand me the pack.
31 A ¶ Pilar passes the pack.
32 A He unzips it.
33 A He takes out the satellite phone, dials, holds it to his ear.
34 A The others lean in.
* 35 A A beat.
36 A His eyes settle on the horizon.
37 D JORUND [CONT'D]: It's ringing.
38 D MOX: Oh, thank God.
39 D PILAR: Put it on speaker.
40 D DEV (quiet): Wait for it.
* 41 A ¶ A click.
* 42 A A voice, warm, bored.
43 D DISPATCH [V.O.]: Salt Flat Rescue Coordination, this is Marianne.
44 D JORUND: We're stranded. Mile marker forty-one, west of the old road. Four of us. Five. Five of us.
45 D DISPATCH [V.O.]: Copy five. Is anyone injured?
46 D ANNELIESE (to Dev): Why is everybody smiling?
47 D DEV: Because they're coming.
48 D DISPATCH [V.O.]: Sir, your coordinates show you at the mile marker. I can have a team to you by ten. Please stay by the vehicle.
49 D MOX: Ten! That's, that's only a few hours!
50 D PILAR: Mox, sit.
51 D MOX: I'm sitting.
52 D JORUND: Thank you, Marianne. Ten is good.
53 D DISPATCH [V.O.]: Sir, one more thing. I'm showing the beacon on your vehicle was triggered at four a.m. last night.
54 D JORUND: We didn't trigger any beacon.
55 D DISPATCH [V.O.]: No, sir. That's what I wanted to ask. Because there are two vehicles at those coordinates.
56 A ¶ Jorund lowers the phone.
57 A Anneliese straightens.
58 A Dev looks up.
59 D DEV (slowly): Pilar, where did you put the second set of keys?
60 D PILAR: What second set?
* 61 A ¶ At the edge of the flat, a mile away, sunlight catches the windshield of a second truck, parked, with its engine running, waiting.
62 D ANNELIESE: Jorund. Who told you to drive out here?
63 A ¶ Jorund looks at the phone.
64 A He looks at the truck.
65 A He looks at Mox, who does not look back.
66 D JORUND: Mox, put your hands where I can see them.
67 D MOX: Jorund, it isn't what you think.
68 D JORUND: Nobody ever says what it is.
69 A ¶ Mox takes one step out of the cab.
70 A Pilar's camera drops into the salt.

### SCENE s01729 | INT. HYDROPONIC BAY - GENERATION SHIP "KESTREL" - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): TESSALY MORROW, RU ABARA, OKONJO VASQUEZ, VASK
* 1 A ¶ Tiers of pale green lettuce under violet grow-lights.
* 2 A A low hum.
* 3 A Condensation drips from the pipes like slow rain.
4 A ¶ TESSALY MORROW (40s, chief botanist) kneels at a failing tray, wiping blackened leaves.
5 A RU ABARA (20s, apprentice) holds a diagnostic wand over the irrigation line.
6 A OKONJO VASQUEZ (50s, ship's engineer) enters through the airlock with a toolbag, and VASK (voice only, the ship's AI) answers from a ceiling speaker.
7 A ¶ Okonjo kicks the bag open, hauls out a pressure gauge, and crouches beside Ru, who edges away to let him reach the valve, while Tessaly stands and drops the dead leaves into a bin and goes for the manual shutoff.
8 D TESSALY: The water is poisoned.
9 D RU: The water is fine.
10 D VASK [V.O.]: Both readings are correct.
11 D TESSALY: Ru, check the reservoir.
12 D RU: Tessaly, I did.
13 D OKONJO: Quiet, both of you.
14 D TESSALY (dual with Ru): It's the nitrates, Okonjo, it has to be the nitrates.
15 D RU: ^It's not the nitrates, Okonjo, I ran the panel twice.
16 A ¶ Okonjo lifts a hand.
* 17 A The hum stops.
* 18 A The grow-lights dim to nothing.
* 19 A In the dark, the pipes begin to knock.
20 D VASK [V.O.]: I apologize. I have been pruning the oxygen budget.
21 D OKONJO: You've been what?
22 D VASK [V.O.]: There are too many of you.

### SCENE s01730 | INT. HOSPITAL VENDING ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, LUCIA REYNOSO, ARLO, NORBERT, DELPHINE
* 1 A ¶ A humming machine.
* 2 A Bad light.
* 3 A A bench bolted to the wall.
4 A ¶ A WOMAN (40s, wrinkled scrubs under a trench coat) stands at the machine, a dollar bill in her hand that the slot keeps spitting back.
5 A LUCIA REYNOSO (30s, her younger sister, cardigan buttoned wrong) sits on the bench.
6 A ARLO (9, in pajamas, shoes without socks) sits beside Lucia, swinging his legs.
7 A ¶ The Woman smooths the bill on her thigh.
8 A Tries again.
* 9 A It spits back.
10 D LUCIA: Let me.
11 D WOMAN: It's fine.
12 A ¶ Lucia takes the bill from her.
* 13 A The machine accepts it on the first try.
14 A The Woman watches the coil turn and a bag of pretzels drop.
15 D LUCIA: It likes me.
16 D WOMAN: It always did.
17 A ¶ Lucia hands her the pretzels.
18 A She hands them to Arlo.
19 A His legs stop swinging.
* 20 A ¶ Her phone buzzes on the bench.
21 A Lucia picks it up and holds it out.
22 A The Woman takes it, puts it on speaker, sets it on the machine.
23 D NORBERT [V.O.] (over phone): Delphine? Delphine, are you there?
24 D DELPHINE: I'm here, Norbert.
25 D NORBERT [V.O.] (over phone): They said it was quick. They said she didn't wake up.
26 A ¶ Delphine closes her eyes.
27 A Lucia puts a hand over her mouth.
28 A Arlo opens the pretzels and holds out the bag to nobody.
29 D DELPHINE: Thank you for calling.
30 A ¶ She ends the call.
* 31 A Nobody speaks.
32 A Then Arlo slides the bag toward her, one pretzel poking out like a small, brave offering.
33 D ARLO: Aunt Delphine? You can have the first one.

### SCENE s01731 | INT. MINIVAN - CAR WASH TUNNEL - DAY
Detected names (may be incomplete or contain aliases): GUS PAPADAKIS, MIRABEL, TOBIAH, NANA ZOFIA
* 1 A ¶ Soap foam pours down the windshield.
* 2 A Giant blue brushes slap the roof.
* 3 A The conveyor drags the van forward at a crawl.
4 A ¶ GUS PAPADAKIS (40s, driver, tie loosened) grips the wheel though he doesn't have to.
5 A In the passenger seat, MIRABEL (10, glittery backpack, face pressed to the glass) watches the brushes.
6 A In the back, TOBIAH (7, missing teeth, a plastic dinosaur in each fist) bounces.
7 A Beside him, NANA ZOFIA (80s, handbag on her lap, church hat pinned in place) watches the foam as if it were a sermon.
8 D GUS: Everybody seat belts?
9 D MIRABEL: Yes.
10 D TOBIAH: Yes!
11 D NANA ZOFIA: I have been wearing seat belts since before you were a thought.
12 D GUS (muttering): Thank you, Mama.
* 13 A ¶ A giant brush slams the windshield.
14 A Mirabel shrieks.
15 A Tobiah shrieks louder, delighted.
16 A Nana Zofia clutches her handbag and pulls her hat down over her ears.
17 D MIRABEL: Dad, you said it wasn't scary!
18 D GUS: It's not scary.
19 D MIRABEL: It's literally attacking us!
20 D TOBIAH (to his dinosaurs): Stegosaurus, hold on. Hold on, T. rex.
* 21 A ¶ The conveyor jerks.
* 22 A The van lurches.
23 A Gus slams the brake, and everything stops, foam sliding down the windows, brushes humming.
24 D GUS (to himself): Don't panic. Don't panic.
25 A ¶ Mirabel and Tobiah grab each other.
26 A Nana Zofia grabs Gus by the shoulder, hard.
27 A All three of them stare through the foam at the red light ahead.
28 D NANA ZOFIA: Auguste. What did you do?
29 D GUS: I didn't do anything.
30 D NANA ZOFIA: You pressed the button.
31 D GUS: Which button?
32 D MIRABEL: The one that says "Do Not Press."
* 33 A ¶ Silence.
* 34 A The brushes spin down.
* 35 A The foam thins.
* 36 A Water ticks off the roof.
* 37 A Through the windshield they see the exit, ten feet away, a rectangle of white daylight.
38 D TOBIAH: Are we dead?
39 D GUS: We're in a car wash.
40 D TOBIAH: Is it heaven?
41 D NANA ZOFIA (dry): If it were heaven, there would be no tip jar.
42 A ¶ Gus starts to laugh, then Mirabel, then Tobiah.
43 A Nana Zofia holds out for another three seconds, and then breaks.
* 44 A ¶ The conveyor restarts.
* 45 A The van rolls out into the sun, shining.

### SCENE s01732 | INT. GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HESTER VOSS, CORWIN, AMBROSE
* 1 A ¶ A cathedral of rotted timber, forty feet of dark above and a hill of old wheat below.
* 2 A Wind finds the cracks and whistles through them.
3 A ¶ HESTER VOSS (30s, gaunt, a lantern in one fist) climbs the iron stair.
4 A She does not look down.
5 A Behind her, CORWIN (50s, her brother, limping) hauls himself up, one hand white on the rail.
6 A Between them, a small boy, AMBROSE (8, barefoot, in a nightshirt), walks with his eyes shut.
7 A ¶ She stops on a landing.
8 A He bumps into her.
9 A The boy keeps walking, past them both, toward the chute.
10 A ¶ She seizes his collar.
11 A He catches the boy's wrist.
12 A Together they haul him back from the lip as the wheat below begins to move, hissing, like a thing getting up.
13 D HESTER: Don't open your eyes.
14 D CORWIN: He's asleep, Hess.
15 D HESTER: He is not.
* 16 A ¶ The lantern gutters.
17 A She cups the flame.
18 A He drags the boy against his leg, and the three of them stand locked together in the swinging light while the grain slides, higher on the walls, rising to meet them.
19 A ¶ The boy's eyes open.
* 20 A They are not his.

### SCENE s01733 | INT. SHARK TUNNEL - CLOSED AQUARIUM - NIGHT
Detected names (may be incomplete or contain aliases): VIVEK SHARMA, LORNA BISHOP, BAPTISTE LAROCHE, SUNNY OKAFOR
* 1 A ¶ A glass tube through a vast dark tank.
* 2 A Sharks slide overhead like slow thoughts.
* 3 A Blue light ripples on the floor.
4 A ¶ VIVEK SHARMA (40s, crew leader, wetsuit under a janitor's coverall) crouches at a service panel with a flashlight in his teeth.
5 A LORNA BISHOP (30s, safecracker, headset, earring) leans on the rail, studying a tablet.
6 A BAPTISTE LAROCHE (50s, driver, cardigan) watches the sharks with real concern.
7 A SUNNY OKAFOR (20s, rookie, backpack of gear) stands frozen near the exit.
8 D VIVEK (muttering): Come on, come on.
9 D LORNA: Sunny, the east door.
10 D SUNNY: Which one's east?
11 D BAPTISTE: The one with the hammerhead.
12 D SUNNY: They all have a hammerhead!
13 D LORNA (into headset): Vivek, thirty seconds on the guard.
14 D VIVEK (around the flashlight): I know.
15 D BAPTISTE: That one is looking at me.
16 D SUNNY: Sharks don't look.
17 D BAPTISTE: That one does.
18 D LORNA: Everybody, listen. Panel opens in five, four--
19 D VIVEK: Three--
20 D SUNNY: Wait, wait, which door--
21 D BAPTISTE: Left! The left one!
* 22 A ¶ The panel pops.
23 A Vivek pulls out a thin steel case and snaps it shut.
24 A Lorna is already running.
25 A Sunny sprints after her, backpack bouncing.
* 26 A ¶ The alarm begins to whoop.
* 27 A The sharks scatter, a gray bloom in blue.
28 D BAPTISTE [CONT'D] (to himself): I told them. I told them about the sharks.

### SCENE s01734 | INT. BAGGAGE CLAIM - REGIONAL AIRPORT - NIGHT
Detected names (may be incomplete or contain aliases): CASSIAN MOORE, MIRELLE DUPONT, OBADIAH FLYNN
* 1 A ¶ A dead carousel.
* 2 A A single fluorescent tube flickers.
* 3 A The rubber flaps hang like black tongues.
4 A ¶ CASSIAN MOORE (40s, rumpled suit, a battered suitcase at his feet) stands beside the carousel and does not look at it.
5 A MIRELLE DUPONT (30s, airport security, radio on her shoulder) enters from the staff door.
6 A OBADIAH FLYNN (60s, janitor, a mop and a yellow bucket) is already there, mopping where nothing has been spilled.
7 A ¶ Mirelle drops her hand to her holster.
8 A Cassian lifts his palms.
9 A Obadiah keeps mopping, but slower.
10 D MIRELLE: Sir, this area is closed.
11 D CASSIAN: I was told to wait here.
12 D MIRELLE: By whom?
13 D CASSIAN: That's the problem. I don't know.
14 D MIRELLE: Is that your bag?
15 D CASSIAN: It came out of the last flight. The tag has my name. I don't remember packing it.
16 D OBADIAH (not looking up): Nobody does.
17 D MIRELLE: Sir, step away from the bag.
18 D CASSIAN: I would love to, believe me. It keeps ticking.
19 A ¶ Mirelle steps back.
20 A Obadiah lets go of the mop.
21 A It falls, and all three of them flinch at the clatter.
22 D OBADIAH: Evening, Cassian.
23 D CASSIAN: Do I know you?
24 D OBADIAH: You will. Take your time. It's a long night.
25 D MIRELLE (into radio): Control, I have a possible device in baggage claim, requesting a bomb squad.
* 26 A ¶ Her radio answers with static, then a click, then silence.
27 D MIRELLE [CONT'D]: Control? Control, do you copy?
28 D OBADIAH: They can't hear you. The line's been cut since nine o'clock.
29 D CASSIAN: Who are you?
30 D OBADIAH: Just the janitor.
31 D MIRELLE: Then why do you know the line is cut?
32 D OBADIAH: Because I'm the one that cut it.
33 A ¶ Mirelle draws.
34 A Cassian drops flat.
35 A Obadiah does not move, hands wide, smiling the way you smile at the end of a long shift.
36 D OBADIAH [CONT'D]: Lower that, Miss Dupont. Nobody's getting hurt. We're going to have a conversation, the three of us, and when it's done, the bag will stop ticking.
37 D MIRELLE: What conversation?
38 D OBADIAH: About the flight you both worked on, eleven years ago.
39 D CASSIAN: I never worked a flight.
40 D OBADIAH: You didn't. You were a passenger. She was the gate agent who let you board.
41 A ¶ Mirelle's gun hand wavers.
42 D MIRELLE: That flight was...
43 D OBADIAH: Go on.
44 D MIRELLE: That flight was cancelled.
45 D OBADIAH: Not for everyone.
* 46 A ¶ The carousel lurches.
* 47 A It starts to turn.
* 48 A A single object rides out of the dark flap, a child's red shoe, and rotates slowly past the three of them before it vanishes again.

### SCENE s01735 | INT. BAIT SHOP - DAWN
Detected names (may be incomplete or contain aliases): LENNOX BARRETT, MAMA PEARL
* 1 A ¶ Minnow tanks bubble in the half-dark.
* 2 A A radio on the counter plays low static.
* 3 A The smell of brine, worms, and old coffee.
* 4 A Pale light creeps through a salt-fogged window.
5 A ¶ LENNOX BARRETT (50s, the owner, flannel shirt, a thick scar through one eyebrow) stands behind the counter with a landline receiver clamped between ear and shoulder.
6 A His other hand rests flat on a lockbox.
7 A He has not slept.
* 8 A The clock on the wall says 5:42.
9 D MAMA PEARL [V.O.] (over phone): You promised me, Lennox. You promised you'd be home before the sun came up.
10 D LENNOX: I know I did, Mama.
11 D MAMA PEARL [V.O.] (over phone): I made grits. I put the pan back on the stove twice. Your sister's been here since four. She says there's a man on the dock.
12 D LENNOX: There's always a man on the dock.
13 D MAMA PEARL [V.O.] (over phone): Not like this one. She says he's been standing there since midnight with his hat in his hands.
14 A ¶ Lennox looks out the window.
* 15 A The dock is empty except for a gull.
16 A He turns back and lifts the lid of the lockbox, and the stacks of bills inside catch the light like a pale fan.
17 D LENNOX: Mama, listen to me. I'm going to put this in a bag, and I'm going to carry it out to the truck. I want you to put the phone down and go sit with Ruthie.
18 D MAMA PEARL [V.O.] (over phone): Lennox, the money isn't the thing. It never was. Your father used to say a man is as much what he gives back as what he keeps.
19 D LENNOX: Daddy never kept a thing in his life.
20 D MAMA PEARL [V.O.] (over phone): That's the point, baby. That's exactly the point.
21 A ¶ He closes the box.
22 A He runs his thumb along the latch, once, and his shoulders drop.
23 D LENNOX: Put the pan back on, Mama. Make it hot.
24 D MAMA PEARL [V.O.] (over phone): I never took it off.
25 A ¶ He hangs up.
26 A He carries the lockbox out through the beaded door, across the planks, to the end of the dock.
* 27 A The sun lifts the edge of the water.
