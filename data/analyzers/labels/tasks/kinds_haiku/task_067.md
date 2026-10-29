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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0167.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02399 | INT. GRANDMOTHER'S SEWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDMA WINNIFRED, JASPER, LOTTE
* 1 A ¶ A small sunlit room of buttons, bobbins and bolts of cloth, with a treadle sewing machine under the window.
* 2 A A cat sleeps in a basket of scraps.
* 3 A Dust floats in the light.
4 A ¶ GRANDMA WINNIFRED, seventies, in a lilac cardigan, sits at the machine feeding a seam under the needle, while her grandson JASPER, ten, sprawls on the rug sorting buttons by colour and sorting them again by size, and his sister LOTTE, thirteen, perches on the windowsill, picking at a loose thread on her sleeve and watching a bird on the wire outside, and nobody says a word for a long, pleasant minute.
5 D WINNIFRED: Jasper, hand me the blue.
6 D JASPER: Which blue?
7 D WINNIFRED: The blue that looks like the sea in July.
8 A ¶ He holds up a spool.
9 A She squints.
10 A Nods.
11 A He crawls across the floor to deliver it.
12 D LOTTE: Gran, can I borrow the green scissors?
13 D WINNIFRED: They're in the drawer.
14 D LOTTE: Which drawer?
15 D WINNIFRED: The one that squeaks.
16 A ¶ Lotte slides off the sill and finds it.
17 A Takes the scissors.
18 A Cuts the thread on her sleeve.
19 A Sits back down.
20 D JASPER: Gran, how long have you had this machine?
21 D WINNIFRED: Since before your mother was born.
22 D JASPER: That's old.
23 D WINNIFRED: So am I.
24 A ¶ Nobody laughs.
25 A Winnifred smiles.
* 26 A The needle thuds.
* 27 A The cat stretches in its basket and resettles, and outside the bird takes off from the wire.

### SCENE s02400 | INT. HOSPICE ROOFTOP GARDEN - NIGHT
Detected names (may be incomplete or contain aliases): ANNELIESE OKORO, TOMAS QUISPE-HALLORAN, ALDER FINCH, WILHELMINA, BILLIE
* 1 A ¶ A rectangle of raised beds and herb planters ringed by a low brick wall, high above the sleeping city.
* 2 A String lights glow in the warm dark.
* 3 A The scent of rosemary and wet soil drifts across the concrete.
* 4 A At the far edge, a bench faces the distant river.
5 A ¶ DR. ANNELIESE OKORO, fifties, in a long cardigan over her scrubs, stands with a paper cup of tea and watches the city the way some people watch the sea.
6 A Her night nurse, TOMAS QUISPE-HALLORAN, thirties, drops a folded blanket on the bench and settles beside it, a battered thermos between his knees.
7 A In a wheelchair at the centre of the garden, wrapped in a quilt with his white hair standing up in tufts, ALDER FINCH, eighty-one, tilts his face to the sky, and behind him his daughter WILHELMINA, "BILLIE," forties, in a rain jacket, pushes the chair an inch closer to the herbs, then an inch back, unable to settle.
8 D ALDER: Is that Orion?
9 D BILLIE: That's a satellite, Dad.
10 D ALDER: It's moving too slow.
11 D BILLIE: It's a plane, then.
12 D ALDER: It's Orion. You always did hate being wrong.
13 A ¶ Billie laughs.
14 A Anneliese sips her tea.
15 A Tomas pours coffee into the thermos cap and passes it to Billie, who accepts it without looking.
16 D ANNELIESE: It's a lovely night for it.
17 D TOMAS: Warmest of the year.
18 D ANNELIESE: Mr. Finch, are you comfortable?
19 D ALDER: I'm a hundred and twelve percent comfortable. Don't fuss.
20 D ANNELIESE: I wouldn't dream of it.
21 D ALDER (to Billie): She would.
22 A ¶ Billie smiles.
* 23 A A breeze stirs the string lights.
* 24 A Somewhere below, a siren starts and fades.
25 A Alder closes his eyes.
26 D ALDER [CONT'D]: Your mother planted rosemary like this. Behind the garage.
27 D BILLIE: I remember.
28 D ALDER: She'd stand there for an hour. Wouldn't say anything.
29 D BILLIE: I used to think she was hiding from us.
30 D ALDER: She was.
31 D BILLIE: Dad.
32 D ALDER: Not from you. From the noise of it. All of us. Four kids and a dog and me.
33 A ¶ Tomas looks at Anneliese.
34 A She shakes her head, very slightly.
35 A He stays seated.
36 D BILLIE: Did you ever tell her you understood?
37 D ALDER: I never did.
38 D BILLIE: Why not?
39 D ALDER: Because I didn't. Not until I got old enough to sit still.
40 A ¶ He opens his eyes and looks up.
* 41 A A long quiet.
* 42 A The lights hum.
43 D ALDER [CONT'D]: You'll tell the others I was grateful?
44 D BILLIE: They know.
45 D ALDER: Tell them anyway. Men say things at the end that they ought to have said at the beginning.
46 A ¶ Billie takes his hand.
47 A He squeezes it.
48 A His other hand, the one on the arm of the chair, begins to tremble, very slightly, then goes still.
49 A ¶ Anneliese puts down her cup.
50 A Tomas rises, and the two of them cross the garden without hurry.
51 A Anneliese kneels.
52 A She places two fingers on his wrist, and then, gently, takes them away.
53 D ANNELIESE [CONT'D] (softly): Billie.
54 D BILLIE: I know.
55 D ANNELIESE: I'm so sorry.
56 D BILLIE: No. Don't be. He was right about Orion.
57 A ¶ She looks up.
* 58 A A thin line of stars, faint above the city glow.
59 A She wipes her cheek with the heel of her hand.
60 D BILLIE [CONT'D] (to Tomas): Could you give us a minute?
61 A ¶ He nods.
62 A Takes the blanket from the bench and lays it over the old man's knees.

### SCENE s02401 | INT. CAMPER VAN - DRIVE-IN LOT - NIGHT
Detected names (may be incomplete or contain aliases): JOJO, MARISOL, DEV, ANSEL, MOTHER
* 1 A ¶ Cramped.
* 2 A Cassette deck.
* 3 A A bulb on a cord.
* 4 A Through the open back doors, a giant screen flickers silently in the dark.
5 A ¶ JOJO, seventeen, drives a fork through a can of beans.
6 A MARISOL, her sister, sixteen, paints her toenails.
7 A DEV, Jojo's boyfriend, strums a ukulele.
8 A ANSEL, twelve, the kid brother, lies on the floor under a sleeping bag.
9 D JOJO: Four more minutes, then we leave.
10 D MARISOL: You said that at nine.
11 D JOJO: I said it at nine-thirty.
12 D MARISOL: Whatever.
13 D DEV: Play it again, Ans?
14 D ANSEL: No.
15 D DEV: Please?
16 D ANSEL (muffled): It's my song.
* 17 A ¶ The ukulele stops.
18 A Everyone is quiet.
19 A Jojo sets down the fork.
* 20 A The screen goes dark.
* 21 A A phone buzzes on the dash.
22 D JOJO: Don't pick that up.
23 D MARISOL: I'm not.
* 24 A ¶ It buzzes again.
25 A Marisol picks it up.
26 A Sighs.
27 A Puts it on speaker.
28 D MOTHER [V.O.] (over phone): Girls? Where are you?
29 D JOJO: At the movie, Mom.
30 D MOTHER [V.O.]: Which movie?
31 D MARISOL (quickly): The one with the dog.
32 D MOTHER [V.O.]: The one with the dog died in the last one.
33 D MARISOL: It's a sequel.
34 D MOTHER [V.O.]: Is Ansel with you?
* 35 A ¶ Silence.
36 A Jojo looks at the floor.
37 A Marisol looks at the screen.
38 A Dev puts his hand over the ukulele strings.
39 A From under the sleeping bag comes the smallest voice in the van.
40 D ANSEL: Hi, Mom.
41 D MOTHER [V.O.]: Ansel Mbeki-Dunmore. Home. Now.
* 42 A ¶ Click.
* 43 A Dial tone.
44 A The four of them sit in the bulb's weak light, and then, all at once, Jojo starts to laugh, and so does Marisol, and so does Dev, helplessly, and even Ansel's shoulders begin to shake under the nylon.

### SCENE s02402 | INT. DINING CAR - OVERNIGHT EXPRESS - NIGHT
Detected names (may be incomplete or contain aliases): ELEANOR WHITCOMBE, AUGUSTIN ROCHE, PORTER
* 1 A ¶ White linen, silver pots, amber lamps.
* 2 A The train sways.
* 3 A Dark country slides past the windows.
4 A ¶ ELEANOR WHITCOMBE, fifties, in a grey travelling suit, sits alone at a table for two, a cup of black coffee cooling in front of her.
5 A Across the car, AUGUSTIN ROCHE, sixties, a gaunt gentleman in a dinner jacket, folds his newspaper and approaches.
6 D ROCHE: Madame Whitcombe.
7 D ELEANOR: Monsieur Roche.
8 D ROCHE: I did not expect to find you on this train.
9 D ELEANOR: I did not expect to be found.
10 A ¶ He takes the chair opposite without being asked.
11 A She lets him.
12 D ROCHE: Twenty years.
13 D ELEANOR: Twenty-two.
14 D ROCHE: You haven't changed.
15 D ELEANOR: You have, thank God.
16 A ¶ He smiles.
17 A A PORTER in a white jacket appears at the table's edge with a silver pot.
18 D PORTER: More coffee, madame?
19 D ELEANOR: No. Thank you.
20 D ROCHE: Nothing for me.
21 A ¶ The Porter withdraws.
* 22 A The train rocks into a curve.
23 D ROCHE [CONT'D]: I kept the letters, you know.
24 D ELEANOR: I burned yours.
25 D ROCHE: I assumed.
26 D ELEANOR: Do not make it sound like a kindness.
27 D ROCHE: It was not meant as one.
28 A ¶ She lifts her cup.
29 A Sets it down.
* 30 A The lamp flickers.

### SCENE s02403 | INT. ICE-FISHING HUT - NIGHT
Detected names (may be incomplete or contain aliases): BRENNA TALLCHIEF, RANGER, SOL TALLCHIEF
* 1 A ¶ Tin walls ticking with frost.
* 2 A A propane lantern.
* 3 A A square hole in the floor shows black water.
* 4 A A radio on a shelf hisses.
5 A ¶ BRENNA TALLCHIEF, thirties, huddles in a parka, a thermos shaking in both hands.
6 A She has not slept.
7 A The ice groans somewhere under the hut and she flinches.
* 8 A ¶ The radio crackles.
9 D RANGER [V.O.] (over radio): Hut Four, Hut Four, this is Ranger Station. Do you copy?
10 A ¶ Brenna lunges for the handset.
11 D BRENNA: Copy! Copy, I'm here!
12 D RANGER [V.O.]: Ice is breaking up on the east side. You need to move.
13 D BRENNA: He's out on it! My brother's out on it!
14 D RANGER [V.O.]: Say again?
* 15 A ¶ The door bangs open.
* 16 A A blast of snow.
17 A SOL TALLCHIEF, twenty, bursts in, soaked to the thighs, lugging a sled.
18 D BRENNA [CONT'D]: Sol!
19 A ¶ She hauls him in by the collar.
20 A He drops the sled.
21 A Falls to his knees.
* 22 A The ice booms under them, one long cracking roar.
23 D SOL: Go. Go!
24 A ¶ She seizes the radio.
25 A He grabs the lantern.
* 26 A The floor tilts.
27 D BRENNA (into handset): We're leaving. We're leaving now.
28 D RANGER [V.O.]: Copy. Godspeed.
29 A ¶ They burst out through the door.

### SCENE s02404 | INT. BARBERSHOP - TUMBLEWEED, TEXAS - DAY
Detected names (may be incomplete or contain aliases): EZEKIEL MOSS, CLEMENTINE HATCH, DEPUTY LUKE ARMITAGE
* 1 A ¶ One chair.
* 2 A One mirror.
* 3 A A cracked leather strop.
4 A ¶ EZEKIEL MOSS, fifties, barber, snips at the air.
5 A In the chair, CLEMENTINE HATCH, forties, in a man's hat and a long duster, sits with a towel round her neck.
6 D EZEKIEL: Just the ends?
7 D CLEMENTINE: Just the ends.
* 8 A ¶ Snip.
* 9 A Snip.
10 D EZEKIEL: You passing through?
11 D CLEMENTINE: Looking for someone.
12 D EZEKIEL: Aren't we all.
13 D CLEMENTINE: A man called Rafferty. Red beard. Left ear missing.
14 D EZEKIEL: Don't know him.
15 D CLEMENTINE: You'd remember the ear.
16 D EZEKIEL: I would.
* 17 A ¶ The bell on the door jingles.
18 A DEPUTY LUKE ARMITAGE, twenty-five, wide-eyed, steps in, hat in hand.
19 D LUKE: Pardon me, Mr. Moss. The sheriff wants a word with the lady.
20 D EZEKIEL: She's mid-trim.
21 D LUKE: He said it was urgent.
22 D CLEMENTINE (not turning): Tell him I'm busy.
23 D LUKE: He said you'd say that.
24 D CLEMENTINE: Then he knows the answer.
25 A ¶ Luke shifts his weight.
26 A Ezekiel lowers the scissors.
27 D EZEKIEL: Son, why don't you take a seat and wait your turn.
28 A ¶ Luke sits.
* 29 A The clock ticks.
* 30 A The snipping resumes.

### SCENE s02405 | INT. NIGHT NURSERY GREENHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): NADINE FALK, YUKI HASEGAWA-DIOP, PIM
* 1 A ¶ Glass walls, steamed over.
* 2 A Rows of seedling trays under purple grow lights.
* 3 A A hose drips.
* 4 A Beyond the panes, a black field and a single sodium lamp on a pole.
5 A ¶ NADINE FALK, thirties, kneels between two benches, a headlamp strapped over her beanie.
6 A YUKI HASEGAWA-DIOP, thirties, stands at the potting table with a clipboard.
7 A PIM, nine, the owner's grandson, sits on an upturned bucket with a flashlight.
8 A ¶ Nobody speaks.
* 9 A ¶ Something taps the glass.
* 10 A Once.
11 D PIM: Did you hear that?
12 D NADINE: It's the heater.
13 D PIM: It sounded like a knuckle.
14 D YUKI: It's the heater, Pim.
15 A ¶ She writes something on her clipboard.
16 A Her pen skips.
* 17 A ¶ Tap.
* 18 A Tap.
19 A ¶ Nadine stands.
20 A Her headlamp sweeps the wall of glass.
* 21 A Nothing but the dark, and her own reflection.
22 D NADINE (muttering): Okay.
23 A ¶ She goes back to her seedlings.
24 A She is shaking.
25 A She pretends she isn't.
* 26 A ¶ The grow lights flicker.
* 27 A The hose stops dripping.
* 28 A The silence is worse.
29 A ¶ Pim aims his flashlight at the far end of the greenhouse.
* 30 A The beam lands on a tray of tomato starts, and the starts are all leaning, every one, toward the glass.
31 D PIM [CONT'D]: They moved.
32 D YUKI: Plants lean toward light.
33 D PIM: There's no light out there.
34 D YUKI (quietly): There's the lamp.
35 D NADINE: The lamp's off.
36 A ¶ They turn.
* 37 A The sodium lamp has gone dark.
* 38 A The field is perfectly black.
* 39 A Something taps the glass, closer, at the door.
40 D NADINE [CONT'D]: Pim, come here.
41 D YUKI: Pim, come here.
42 A ¶ Pim rises.
43 A The flashlight shakes.
* 44 A The door handle begins to turn.
* 45 A Slowly.
46 A Nadine grabs Pim and pulls him behind her.
47 A Yuki seizes a trowel from the table and holds it like a knife.
* 48 A ¶ The door opens an inch.
* 49 A A long cold breath moves down the rows.
* 50 A The tomato starts shiver and lie flat.
51 D PIM: Is it gone?
52 D NADINE: Don't talk.
53 A ¶ Yuki steps toward the door.
54 A She reaches.
55 A She gets her fingers around the edge and, in one hard movement, slams it shut and throws the bolt.
* 56 A ¶ For a moment, silence.
* 57 A Then, from outside, a single patient knock.
* 58 A Not on the glass.
* 59 A On the bolt, from the other side.
60 D YUKI (whispering): Nadine?
61 D NADINE: Yes?
62 D YUKI: I don't think it wants to come in.
63 D NADINE: What does it want?
* 64 A ¶ Behind her, in the dark, one by one, the grow lights go out.
65 D PIM (very small): It wants to know if we're alone.

### SCENE s02406 | INT. HARGREAVE MANOR - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): CONSTANCE HARGREAVE, VOICE, ELIOT PEMBERTON
* 1 A ¶ Black range, copper pans, a scrubbed oak table.
* 2 A A dumbwaiter hatch in the wall, shut.
* 3 A A single gaslight hisses.
4 A ¶ MRS. CONSTANCE HARGREAVE, fifties, in black bombazine, stands at the table, her hands on its edge.
* 5 A The house is silent.
* 6 A The cook has gone to bed.
* 7 A ¶ The dumbwaiter rope creaks.
8 A She freezes.
9 D MRS. HARGREAVE: Who is hauling that?
* 10 A ¶ The rope creaks again.
* 11 A The hatch shudders.
12 A A VOICE drifts down the shaft, thin and echoing.
13 D VOICE [V.O.]: Constance?
14 A ¶ Mrs. Hargreave goes white.
15 D MRS. HARGREAVE: That isn't possible.
16 D VOICE [V.O.]: Constance, it's cold up here.
17 D MRS. HARGREAVE: Be quiet.
* 18 A ¶ The hatch slides open an inch, on its own.
* 19 A Black beyond.
* 20 A A smell of damp earth.
* 21 A ¶ The kitchen door swings in.
22 A DR. ELIOT PEMBERTON, sixties, in a travelling coat, shakes snow from his hat and stops.
23 D PEMBERTON: Good Lord. What's happened?
24 A ¶ Mrs. Hargreave points at the hatch with a trembling hand.
25 D MRS. HARGREAVE: My husband is in the wall.
* 26 A ¶ The gaslight gutters out.

### SCENE s02407 | INT. SCHOOL BUS - FOG ROAD - NIGHT
Detected names (may be incomplete or contain aliases): MABEL TRASK, CORA, BAXTER, OSWIN
* 1 A ¶ A yellow bus idles on a country road, headlights swallowed by white fog.
* 2 A The windows are fogged on the inside too.
* 3 A Rows of green vinyl seats, empty except for four.
4 A ¶ MABEL TRASK, fifties, driver, grips the big wheel in cracked leather gloves.
5 A She wears a cardigan and a hairnet and has not spoken since the engine stalled.
6 A Behind her, in the first seat, CORA, ten, hugs a lunchbox.
7 A Across the aisle, her brother BAXTER, eight, draws a face in the window glass.
8 A In the rear, hunched against the emergency door, OSWIN, fourteen, wears headphones around his neck.
9 D BAXTER: Why'd we stop?
10 D MABEL: Fog.
11 D CORA: That's not a reason.
12 D MABEL: It's the only one I've got.
13 D OSWIN (from the back): There's something in the road.
14 D CORA: There's something in the road.
15 A ¶ Mabel leans forward.
* 16 A The headlights show only white.
17 A Then, at the edge of the beam, a tall figure, motionless, in a long coat, head tilted.
18 D MABEL: Stay in your seats.
19 D BAXTER: Is it a man?
20 D MABEL: I don't know.
21 A ¶ The figure takes a step.
22 A Then another.
23 A Mabel's hand slides to the door lever.
24 A The knuckles whiten.
25 D OSWIN: Don't open it.
26 D MABEL: I'm not going to.
27 A ¶ The figure lifts a hand.
28 A Taps the glass of the windshield, once, with one long finger.
29 A ¶ Mabel shuts off the headlights.
* 30 A Dark.
* 31 A Four sets of breathing.

### SCENE s02408 | INT. BEEKEEPERS' CONVENTION - HOSPITALITY SUITE - NIGHT
Detected names (may be incomplete or contain aliases): LENKA PROCHAZKA-ODUYA, BASHIR KAMANGA, COLETTE VANTERPOOL, MAGNUS EKSTROM
* 1 A ¶ A beige hotel function room hung with banners reading BUZZ 2026.
* 2 A Folding tables of honey jars, a punch bowl, a cardboard cut-out of a queen bee with a crown.
* 3 A Fluorescent light and carpet the colour of old tea.
4 A ¶ LENKA PROCHAZKA-ODUYA, thirties, in a sage cardigan with a lanyard, arranges honey jars by shade of amber.
5 A BASHIR KAMANGA, thirties, in a bow tie, leans on the next table, pretending to read the label on a jar.
6 A Near the punch, her friend COLETTE VANTERPOOL, forties, laughs at something on her phone, and beside her MAGNUS EKSTROM, fifties, stirs the punch with a ladle and tastes it with a frown.
7 D BASHIR: That's a clover.
8 D LENKA: It's a buckwheat.
9 D BASHIR: It's a clover that's had a hard life.
10 D LENKA: Do you always correct strangers?
11 D BASHIR: I'm not a stranger. I'm the one who sat behind you at the keynote.
12 D LENKA: You were breathing on my neck.
13 D BASHIR: I was taking notes.
14 D COLETTE (across the room): Lenka! Come taste this!
15 D LENKA (to Bashir): Excuse me.
16 D MAGNUS: It needs more lemon.
17 D COLETTE: It needs less lemon.
18 D MAGNUS: It needs a different punch.
19 D LENKA (arriving): What's the matter?
20 D COLETTE: Magnus thinks he's a sommelier.
21 D MAGNUS: I am a sommelier.
22 D COLETTE: You're a retired dentist.
23 D MAGNUS: I'm both.
24 D BASHIR (drifting over): May I try?
25 D MAGNUS: By all means.
26 A ¶ Bashir dips a cup, sips, and gives a thoughtful nod.
27 D BASHIR: Honey. Citrus. A touch of regret.
28 D LENKA: That's the buckwheat.
29 D COLETTE (to Lenka, low): He's cute.
30 D LENKA (low, to herself): He's wrong about the clover.
31 D COLETTE: Then forgive him.
32 D LENKA: Never.
33 D BASHIR (overhearing): I'll wear you down.
34 D LENKA: You can try.
35 D MAGNUS: This is the most romantic thing I have ever seen at a beekeepers' convention.
36 D COLETTE: It's the only thing.
37 D MAGNUS: And I've been to eleven.

### SCENE s02409 | INT. FLOODED LAW OFFICE BASEMENT - DEPOSITION ROOM - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY SABINE LEFEBVRE-OTIENO, DOUG, NAKAGAWA-FITCH, COURT REPORTER MARIAH THRUSH, OPPOSING COUNSEL, JUDGE
* 1 A ¶ A windowless concrete room with six inches of water on the floor.
* 2 A Sandbags line one wall.
* 3 A A folding table has been set on cinder blocks, and on it a laptop propped on a stack of phone books.
* 4 A Waders hang from a coat rack.
5 A ¶ ATTORNEY SABINE LEFEBVRE-OTIENO, forties, sits in rolled-up trousers and rubber boots, a legal pad on her knee.
6 A Across from her, her client DOUGLAS "DOUG" NAKAGAWA-FITCH, sixty, stares at the water with the stillness of a man who has resigned himself to it.
7 A At the end of the table, COURT REPORTER MARIAH THRUSH, thirties, types with her feet tucked up on the chair rungs, and on the laptop screen, three small windows hold the faces of the opposing counsel and a stern, silver-haired woman in a judge's robe.
8 A ¶ She clears her throat.
9 A He does not look up.
* 10 A The court reporter's keys clatter.
11 D OPPOSING COUNSEL [V.O.] (over laptop): Mr. Nakagawa-Fitch, is it your testimony that the basement did not flood in March?
12 D DOUG: It's my testimony that I was elsewhere.
13 D OPPOSING COUNSEL [V.O.]: Elsewhere.
14 D DOUG: In a canoe.
* 15 A ¶ A pause.
16 A The silver-haired woman on the screen lifts her chin.
17 D JUDGE [V.O.] (over laptop): Let the record reflect the witness is, at present, in water.
18 A ¶ Sabine closes her eyes.
19 A Mariah types it down, unblinking.
20 A Doug lifts one boot and lets the water run off it, ring by ring.

### SCENE s02410 | INT. SEEDSHIP ARK ORION - CRYO BAY - SHIP NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN IDRIS NWOSU-VALDEZ, ENGINEER PELL KOVALENKO-ASANTE, WICKET
* 1 A ¶ A cathedral of frost-furred pods stretching into darkness.
* 2 A Blue maintenance lights pulse along the deck.
* 3 A Condensation drips from the ceiling in slow, measured drops.
4 A ¶ CAPTAIN IDRIS NWOSU-VALDEZ, fifties, in a thermal jacket, walks the central aisle with a handheld scanner.
5 A ENGINEER PELL KOVALENKO-ASANTE, thirties, follows with a tool belt that jingles.
6 A Between them, a drone the size of a toaster, WICKET, hovers and emits a low, cheerful chime.
7 D IDRIS: Wicket, status.
8 D WICKET (synthetic): Pods one through forty nominal. Pod forty-one, reading unusual.
9 D PELL: Unusual how?
10 D WICKET: Warm.
11 A ¶ Idris stops.
12 A Pell stops.
13 D IDRIS (to himself): Warm.
14 D PELL: That's not on the manifest.
15 D IDRIS: Nothing's on the manifest tonight.
16 A ¶ They hurry down the aisle.
* 17 A The pods blur by.
* 18 A At forty-one, a fogged glass hatch.
19 A Behind it, a human shape, motionless.
20 D PELL: Captain.
21 D IDRIS: I see her.
22 D PELL: She shouldn't be awake.
23 D IDRIS: She isn't. Yet.
24 A ¶ He wipes the glass with a sleeve.
25 A A woman's face, eyes closed, a bead of sweat on her brow.
26 D IDRIS [CONT'D]: Wicket, who is she?
27 D WICKET: Passenger forty-one. Dr. Amara Chukwu-Lindgren. Botanist.
28 D PELL: One of ours?
29 D WICKET: One of nobody's. She is not in the registry.
30 A ¶ Pell steps back.
* 31 A The scanner in Idris's hand chirps.
32 D IDRIS (to the bay, calm): Everyone stay where you are.
33 D PELL: There's no one here to stay.
34 D IDRIS: I know. I like saying it.
* 35 A ¶ The pod's lights flicker green.
36 D PELL: Captain, I think she's waking up.
37 D IDRIS: Then she's early.
38 D WICKET: By one hundred and eleven years.
* 39 A ¶ The hatch hisses.
* 40 A Frost cracks.

### SCENE s02411 | INT. APARTMENT KITCHEN - 3 A.M.
Detected names (may be incomplete or contain aliases): NOREEN CALLAHAN-SINGH, ANSELM CALLAHAN-SINGH
* 1 A ¶ One lamp.
* 2 A A wailing baby monitor on the counter, its green bars spiking.
3 A NOREEN CALLAHAN-SINGH, thirties, in a faded T-shirt, jiggles a bottle on the stove, glances at the monitor, flips the burner off, and bangs the pot against the sink while her husband ANSELM CALLAHAN-SINGH, thirties, stumbles in with a blanket over his shoulder, bumps the doorframe, mutters a curse, grabs the bottle out of her hand, and shakes it near his ear to test the heat.
4 D NOREEN: It's too hot.
5 D ANSELM: It's fine.
6 D NOREEN: Test it on your wrist.
7 D ANSELM (to the monitor): Hold on, buddy. Daddy's coming.
8 D NOREEN (to the kitchen): Why is nobody else awake in this building?
9 D ANSELM: They have earplugs.
10 A ¶ She snatches the bottle back, holds it under the cold tap, and hands it over.
11 A He nods once.
12 A She leans on the counter and rubs her eyes as the cries rise to a pitch, then a hiccup, then, somehow, a silence.
13 A ¶ They look at the monitor.
* 14 A The bars flatten.
15 D NOREEN [CONT'D] (whispering): Don't breathe.
16 D ANSELM (whispering): I'm not.

### SCENE s02412 | INT. HIGH SCHOOL GYM - WRESTLING MAT - EVENING
Detected names (may be incomplete or contain aliases): COACH DELACROIX, REFEREE BOHDAN, HUGO ABERNATHY, KARIM SZYMANSKI
* 1 A ¶ Bleachers half-full.
* 2 A A banner reading STATE SEMIFINAL sags from the rafters.
3 A Two boys in singlets circle on a faded blue mat.
4 A ¶ COACH DELACROIX, fifties, stands at the edge in a windbreaker, arms folded.
5 A REFEREE BOHDAN, sixties, crouches nearby with a whistle in his teeth.
6 A On the mat, HUGO ABERNATHY, seventeen, red singlet, and KARIM SZYMANSKI, seventeen, blue, lock hands.
7 A ¶ He drops low.
8 A He shoots.
9 A He grabs a leg and drives.
10 A The other boy sprawls and rolls, and he scrambles to his knees and goes for the half nelson, and for a second they are one tangle of limbs and sweat.
11 D COACH DELACROIX (to the whole gym): Stay off his hips!
12 D REFEREE BOHDAN (to Hugo): Watch your hands.
13 D KARIM (muttering to himself): Come on, come on...
* 14 A ¶ The whistle shrieks.
15 A They break.
* 16 A The gym holds its breath.
17 A Referee Bohdan points to the blue boy.
18 D REFEREE BOHDAN [CONT'D]: Two points.
19 A ¶ He gets up slowly.
20 A He looks at the scoreboard.
21 A Looks at his coach.
22 A Shakes out his arms and lowers himself back into a stance, and across from him the other boy exhales, long and loud, and settles in.
23 D COACH DELACROIX (low): You're fine. You're fine.

### SCENE s02413 | EXT. DRAINED POOL SKATE BOWL - DUSK
Detected names (may be incomplete or contain aliases): SADIE PRZYBYLSKI, JUNO TEAGUE-BALOGUN, OLU
* 1 A ¶ Cracked turquoise concrete.
* 2 A Graffiti tags.
* 3 A A chain-link fence with a hole cut in it.
* 4 A Orange sky.
5 A ¶ SADIE PRZYBYLSKI, sixteen, crouches at the lip with her board, knuckles whitened.
6 A At the bottom of the bowl, JUNO TEAGUE-BALOGUN, seventeen, spins a wheel with one finger.
7 A Ten feet away, her friend OLU, seventeen, sits on the edge, a camera in his lap, not filming.
8 A ¶ Nobody has said a word in a while.
9 D JUNO: You're going to fall.
10 D SADIE: I know.
11 D JUNO: So why?
12 A ¶ Sadie shrugs.
13 A She drops in.
* 14 A Wheels roar on concrete.
15 A She carves up the far wall, hangs for one stalled instant, and the board skids sideways from under her.
16 A ¶ She hits the bowl floor hard.
17 A Juno is on her feet.
18 A Olu is on his feet.
19 A All three hover.
20 D OLU: You good?
21 D SADIE (laughing, wincing): Yeah.
22 A ¶ She sits up.
23 A A bloodied elbow.
24 A Juno kneels.
25 A Olu raises the camera, then lowers it again.
26 D JUNO: Let me see.
27 D SADIE: It's nothing.
28 D JUNO: It's something.
29 A ¶ Sadie pulls her arm away.
30 A Juno lets her.
31 A They sit.
32 A Olu sits too.
* 33 A The sky goes violet over the bowl, and a streetlight buzzes on.
34 D OLU: My dad's picking me up at eight.
35 D SADIE: Okay.
36 D JUNO: Okay.
37 A ¶ Nobody moves.

### SCENE s02414 | INT. CARDIAC ICU - NURSES' STATION - 4 A.M.
Detected names (may be incomplete or contain aliases): NURSE ROSALEEN ADEKUNLE-MARSH
* 1 A ¶ A glass-walled island among curtained bays.
* 2 A Monitors beep in a soft, uneven chorus.
* 3 A A whiteboard lists names and numbers in four colours of marker.
* 4 A Coffee grows a skin in a paper cup.
* 5 A The corridor lights are dimmed to the colour of weak tea.
6 A ¶ NURSE ROSALEEN ADEKUNLE-MARSH, fifties, in navy scrubs and compression socks, sits at a terminal, reading glasses pushed up into grey-streaked hair.
7 A She is a veteran, lined and unhurried, who has done this shift a thousand times.
* 8 A A name tag on her lanyard reads R. ADEKUNLE.
* 9 A A dictation recorder lies by her keyboard, its red light steady.
10 A ¶ She presses the button.
11 D ROSALEEN: Four-ten. Mr. Dacosta. Stable overnight, pressure holding, no events. Four-twelve. Mrs. Lindahl. Sleeping.
12 A ¶ She releases the button.
* 13 A A monitor chirps.
14 A She does not look up.
15 A She sips cold coffee, grimaces, sets the cup down.
* 16 A ¶ A call light blinks over bay six.
17 A She glances at it.
18 A Watches it blink.
19 A Turns back to the screen, and types for a moment, and the light blinks on.
20 A ¶ Finally she rises, and her knees pop.
21 A She walks to the bay.
22 A Looks in.
23 A A man sleeps with his mouth open.
* 24 A The chart at his feet is in order.
25 A She straightens his blanket by half an inch.
26 A ¶ Back at the station, she presses the recorder again.
27 D ROSALEEN [CONT'D]: Four-fourteen. Called at four-oh-six. No complaint. Repositioned. Resting.
28 A ¶ She stops.
29 A Listens.
* 30 A The corridor is quiet.
* 31 A A faint voice drifts from the intercom on the wall.
32 D ROSALEEN [V.O.] (playback): Four-ten. Mr. Dacosta. Stable overnight...
33 A ¶ She frowns.
* 34 A The recorder is still running, but she has not touched it.
35 A She picks it up, thumbs the rewind.
* 36 A Her own voice, tinny, fills the air.
37 D ROSALEEN [V.O., CONT'D] (playback): Four-fourteen. Called at four-oh-six.
* 38 A ¶ A longer pause.
* 39 A Then, under her own voice, almost lost in the hiss, a second recording she does not remember making.
40 D ROSALEEN [V.O., CONT'D] (playback, faint): Rosaleen? It's cold in here.
41 A ¶ She stops the tape.
* 42 A The ward is silent.
43 A She looks at the dark corridor and the bay doors and all the blinking lights, and for a long moment she doesn't move.
44 A ¶ Then she takes off her glasses and wipes them on her sleeve.
45 D ROSALEEN (to herself): Long night.
46 A ¶ She puts the recorder in her pocket and walks the length of the ward, checking each bay in turn.

### SCENE s02415 | INT. STATION WAGON - HIGHWAY - DAY
Detected names (may be incomplete or contain aliases): MATEUS FERRARI-OKONJO, ILSE, TEODORA, BLAISE, NANDI
* 1 A ¶ Windows down.
* 2 A Wind roars.
* 3 A A cooler wedged between two kids in the back seat.
4 A ¶ MATEUS FERRARI-OKONJO, forties, drives with one hand.
5 A His wife ILSE, forties, navigates with a paper map.
6 A In the back, TEODORA, fourteen, scowls at her phone; BLAISE, eleven, kicks the seat; and baby NANDI, one, gums a rubber giraffe.
7 D BLAISE: Are we there yet?
8 D MATEUS: No.
9 D ILSE: It's another forty minutes.
10 D BLAISE: You said that an hour ago.
11 D TEODORA: Stop kicking.
12 A ¶ He kicks harder.
13 A She slaps his knee.
14 A He yelps.
15 A The baby shrieks.
16 A Mateus turns the radio up.
17 D ILSE: Turn that down.
18 D MATEUS: It's the good part.
19 D ILSE: It's the same part it's always been.
20 D TEODORA: Dad, he's kicking me.
21 D MATEUS: Blaise.
22 D BLAISE: She started it.
23 D ILSE: Mateus, the exit.
24 A ¶ He swerves.
* 25 A Brakes squeal.
* 26 A The cooler thumps.
27 A Nandi howls.
* 28 A A truck blasts its horn.
29 D MATEUS: Sorry. Sorry.
30 D ILSE: You missed it.
31 D MATEUS: I did not.
32 D ILSE: You did.
33 D TEODORA (to Blaise, low): I'm telling Mom you broke the cooler.
34 D BLAISE: I did not!
* 35 A ¶ The giraffe flies across the car and hits the windshield.
* 36 A Silence.
37 A The baby laughs.

### SCENE s02416 | EXT. SUBURBAN DRIVEWAY - MOVING DAY - DUSK
Detected names (may be incomplete or contain aliases): THADDEUS GRIMALDI-HOLT, PHOEBE, REGGIE, SUNITA, STRANGER, DWIGHT
* 1 A ¶ An empty truck.
* 2 A Cardboard crushed in a pile.
* 3 A A "SOLD" sign stuck in the lawn.
4 A ¶ THADDEUS GRIMALDI-HOLT, sixty, in work gloves, shuts the truck's rear door.
5 A His wife PHOEBE, fifty-eight, stands on the porch with an empty vase.
6 A Their son REGGIE, thirty, and daughter-in-law SUNITA, twenty-eight, lean on a rented van, and a STRANGER in a sports coat pulls up in a sedan and gets out with a clipboard and a key.
7 D THADDEUS: That's the last of it.
8 D PHOEBE: It's not the last.
9 A ¶ She goes inside.
10 A Comes out with a lamp.
11 A Hands it to Reggie, who carries it to the van, trips on the kerb, catches himself, and sets the lamp on the roof as Sunita rushes in to rescue it, and Thaddeus laughs, and Phoebe laughs too, and then, abruptly, she doesn't.
12 D STRANGER: Mr. and Mrs. Grimaldi-Holt?
13 D THADDEUS: That's us.
14 D STRANGER: I'm Dwight, from the title company. I just need the keys.
15 D PHOEBE: Dwight.
16 D DWIGHT: Yes, ma'am.
17 D PHOEBE: Forty-one years.
18 D DWIGHT: I understand.
19 A ¶ She lifts the key ring off her finger, slowly.
20 A Looks at it.
21 A Looks at the house.
22 A Presses it into his palm and folds his fingers over it.
23 D PHOEBE [CONT'D]: Be good to her.

### SCENE s02417 | INT. TERRAFORM DOME CATHEDRAL - MORNING
Detected names (may be incomplete or contain aliases): IMOGEN VASQUEZ-LINDQ, MAGISTRATE ODALIE FREMONT
* 1 A ¶ A nave of living glass.
* 2 A Rows of saplings in the aisles.
* 3 A Sunlight filters green through the canopy and falls on a stone altar in which a bonsai is rooted.
4 A ¶ DR. IMOGEN VASQUEZ-LINDQ, fifties, tends the tree with a tiny pair of clippers.
5 A Behind her, MAGISTRATE ODALIE FREMONT, sixties, in a long grey robe, enters through the great door and walks the aisle with unhurried steps.
6 D ODALIE: You're up early.
7 D IMOGEN: The tree is.
8 D ODALIE: It doesn't sleep.
9 D IMOGEN: It does. It just doesn't tell anyone.
10 A ¶ Odalie stops beside the altar.
11 A She lays a gloved hand on the trunk.
12 A Imogen's clippers pause.
13 D ODALIE: The council voted last night.
14 D IMOGEN: I heard.
15 D ODALIE: Then you know.
16 D IMOGEN: They're closing the dome.
17 D ODALIE: Not closing. Reassigning.
18 D IMOGEN (laughing softly): That's a lovely word for it.
19 A ¶ She resumes clipping.
* 20 A A leaf drops.
21 A Odalie catches it in her palm.
22 D ODALIE: She asked me to give you this.
23 D IMOGEN: Who?
24 D ODALIE: The one who planted it.
25 A ¶ She opens her hand.
* 26 A In it lies a small brass key.
27 A Imogen stares.
28 A Clippers fall from her fingers and ring on the stone.
29 D IMOGEN: She said it didn't exist.
30 D ODALIE: She said many things.

### SCENE s02418 | INT. PRISONER TRANSPORT VAN - NIGHT
Detected names (may be incomplete or contain aliases): ATTORNEY LENORE ISHIGURO-BAPTISTE, DERRICK MALONEY, DEPUTY RHONDA CALLOWAY
* 1 A ¶ A steel box on wheels.
* 2 A Bench seats facing each other.
* 3 A Wire mesh between the compartments.
* 4 A A bare bulb swings with every turn.
5 A ¶ ATTORNEY LENORE ISHIGURO-BAPTISTE, forties, in a camel coat, perches on the end of the bench with a briefcase on her lap.
6 A Across from her, DERRICK MALONEY, twenty-two, in an orange jumpsuit and wrist chains, glares at the floor.
7 A In the mesh-guarded front seat, DEPUTY RHONDA CALLOWAY, fifties, drives with one eye on the mirror.
8 D LENORE: Listen to me. Don't say anything at the arraignment.
9 D DERRICK: I didn't do it.
10 D LENORE: I know.
11 D DERRICK: Then why are we-
12 D LENORE: Because the judge doesn't know.
* 13 A ¶ The van hits a pothole.
14 A Derrick bangs his head on the wall.
15 D DERRICK: They said I'd get bail.
16 D LENORE: They said maybe.
17 D DERRICK: Maybe isn't bail.
18 D CALLOWAY (from the front): Quiet back there.
19 D LENORE: We're talking, Deputy.
20 D DERRICK: It's none of your business.
21 D CALLOWAY: It's all of my business. I'm driving.
22 A ¶ Derrick leans forward.
* 23 A The chains rattle.
24 A Lenore touches his knee with two fingers.
25 D LENORE: Derrick. Stop.
26 A ¶ He freezes.
27 A Slowly sits back.
28 A The tension drains from his shoulders.
29 A He breathes out, long and unsteady.
30 D DERRICK (very quietly): Okay.
31 D LENORE: Okay.
* 32 A ¶ The van turns a corner.
33 A Through the mesh, Calloway's eyes meet Lenore's in the mirror, and for a moment, they share something like sympathy.

### SCENE s02419 | EXT. FLOODED QUARRY - NIGHT
Detected names (may be incomplete or contain aliases): THEA OYELARAN-MCBRIDE, JUNE, BASARAN, RILEY DESCHAMPS-ADU
* 1 A ¶ A bowl of black water ringed by white limestone cliffs.
* 2 A Moonlight lays a long silver road across the surface.
* 3 A Crickets.
* 4 A Distant dogs.
* 5 A Three bicycles lie in the grass.
6 A ¶ THEA OYELARAN-MCBRIDE, seventeen, stands on the lip of a twelve-foot ledge in her undershirt and shorts, toes curled over the edge.
7 A Below, her cousin JUNIPER "JUNE" BASARAN, sixteen, treads water with her hair plastered to her skull, grinning up.
8 A Behind Thea, on the rock, RILEY DESCHAMPS-ADU, seventeen, sits cross-legged with a towel over her shoulders, and she says nothing, and she watches.
9 D JUNE: Jump!
10 D THEA: Give me a second.
11 D JUNE: You've had ten.
12 D THEA: I'm thinking.
13 D JUNE: Don't think. Just fall.
14 A ¶ Thea looks down.
* 15 A The water is a black mirror.
* 16 A Her reflection wavers.
17 D RILEY (from behind): You don't have to.
18 D THEA: I know I don't.
19 D RILEY: Then why-
20 D THEA: Because June did.
21 D JUNE: I'm right here.
22 A ¶ Thea steps back.
23 A Steps forward.
24 A Back again.
25 A The three of them breathe in the dark.
* 26 A A fish rises somewhere and breaks the silver road into pieces.
27 A ¶ Thea shouts, a wordless animal sound, and runs three steps and leaps.
28 A She flails, arms wheeling, and plunges into the black.
29 A The splash soaks June, who yelps and goes under.
30 A Riley leaps up, the towel falling, and scrambles to the edge.
31 D RILEY [CONT'D]: Thea!
* 32 A ¶ Nothing.
* 33 A Ripples spread.
* 34 A The moon shatters and slowly reassembles.
35 A Then two heads break the surface, gasping, laughing, spitting water, and June and Thea cling to each other in the middle of the quarry.
36 D JUNE: You did it!
37 D THEA (coughing): I think I swallowed a frog.
38 A ¶ Riley sits down hard on the rock.
39 A She presses a hand to her chest, and her shoulders shake, and no one can tell if she is laughing or crying.

### SCENE s02420 | INT. PARKING GARAGE ROOFTOP - BOCCE COURT - DUSK
Detected names (may be incomplete or contain aliases): INES VARGA, DOV LINDQVIST, KALANI AKANA, ROSCOE BAPTISTE
* 1 A ¶ Astroturf laid over oil-stained concrete.
* 2 A Sodium lights flicker on.
* 3 A A hand-painted sign: "LEVEL 6 BOCCE CLUB."
4 A ¶ INES VARGA (60s, windbreaker, clipboard she never writes on) stands at the foul line.
5 A Arms folded.
6 A ¶ DOV LINDQVIST (17, hoodie, too-big sneakers) rolls a ball.
* 7 A It dies short.
8 A ¶ Nobody speaks.
9 A Ines marks nothing.
10 A ¶ KALANI AKANA (30s, delivery-driver vest still on) crouches by the pallino, measuring with a shoelace.
11 A ¶ ROSCOE BAPTISTE (70s, folding chair, thermos) watches from the exit ramp.
12 D INES (to everyone): Again. Same lane.
13 A ¶ Dov collects the balls.
14 A Counts them twice.
15 A Rolls again.
* 16 A Short.
17 D KALANI: Twelve inches.
18 D DOV: Eleven.
19 A ¶ Kalani shows the shoelace.
20 A Dov looks away.
21 D ROSCOE (to himself): Wind's up.
* 22 A ¶ There is no wind.
23 A ¶ Ines walks to Dov.
24 A Takes a ball from his hand.
25 A Puts it back in the rack, gently.
26 D INES: Eat something.
27 D DOV: I ate.
28 A ¶ She looks at his sneakers.
* 29 A Then at the empty parking spaces below the rail, where no car has come for him.
30 D INES: Kalani, you're up.
31 A ¶ Kalani stands.
32 A Wipes her palms on the vest.
33 A Rolls.
* 34 A The ball kisses the pallino and stops.
35 A ¶ Roscoe lifts the thermos in salute.
36 A Nobody else reacts.
37 D DOV (muttering): Lucky.
38 D KALANI: Heard that.
39 D INES: Last end. Then lights off.
40 A ¶ She turns away to the stairwell door.
41 A Pauses with her hand on the bar.
42 D INES [CONT'D] (without turning): Your dad called the club line.
43 A ¶ Dov's hand stops over the rack.
44 D DOV: What did you tell him?
45 D INES: That we're closed.
46 A ¶ She exits.
* 47 A The door sighs shut.
48 A ¶ Dov picks up a ball.
49 A Rolls it.
* 50 A It lands inches from the pallino.
51 A ¶ He stares at it.
52 A Nobody congratulates him.
53 A Kalani quietly hands him the shoelace.

### SCENE s02421 | INT. BOWLING ALLEY BASEMENT - ROLLER DERBY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): WANDA, PRUITT, DELPHINE ARCEMENT, SUNNY MAKOA, MARGUERITE VOSS, GUS TREMAINE, TINY FOLAU
* 1 A ¶ Cinderblock walls, a leaking pipe, the muffled thunder of strikes overhead.
* 2 A Benches bolted to the floor.
* 3 A A whiteboard reads "SEMIFINAL."
4 A ¶ WANDA "WRECKER" PRUITT (30s, captain, stitches over one eyebrow) laces her skates.
5 A Beside her, DELPHINE ARCEMENT (20s, rookie jammer, wide-eyed) tapes her wrist guards.
6 A ¶ SUNNY MAKOA (40s, blocker, built like a refrigerator) eats a banana.
7 A MARGUERITE VOSS (50s, coach, tracksuit, whistle) paces.
8 A GUS TREMAINE (60s, bout announcer, headset around his neck) leans in the doorway.
9 A TINY FOLAU (20s, pivot, five-foot-nothing, enormous voice) sits on a cooler.
10 D MARGUERITE: Listen up. We are down two points in the standings and they have the best jammer in the league.
11 D WANDA: Which is why we skate her into the wall, Coach.
12 D DELPHINE: Wrecker, I thought we weren't allowed to plan that.
13 D WANDA: Rookie, we're allowed to plan anything. We're just not allowed to get caught.
14 D SUNNY: Wanda has a point. Also, the wall is very hard.
15 D TINY: Sunny, you ate a whole banana in two bites. Respect.
16 D SUNNY: Tiny, I am a professional.
17 D GUS: Ladies, three minutes to first whistle. Somebody tell me how to pronounce "Delphine Arcement" for the crowd.
18 D DELPHINE: Del-FEEN. Ar-suh-MAHN.
19 D GUS: Del-FEEN Ar-suh-MAHN. Got it. And you, Tiny?
20 D TINY: Tiny. Like the opposite of me.
21 D GUS: It's poetry, kid.
22 D MARGUERITE: Gus, out. Now.
23 D GUS: Out. I'm out. Break a leg, but not really.
24 A ¶ Gus exits.
25 D WANDA: Rookie, you're jamming second period.
26 D DELPHINE: Me? Wrecker, I've only done it in practice.
27 D WANDA: Practice is where you stop being scared of the real thing.
28 D DELPHINE: I am scared of the real thing.
29 D SUNNY: Good. Scared people duck.
30 D MARGUERITE: Delphine. Look at me. You skate the inside line. Sunny and Tiny open the gap. Wanda holds the pivot.
31 D TINY (shouting up the stairs): Hey! Somebody shut off the pipe!
32 D SUNNY: Tiny, it's a basement. There's always a pipe.
33 D WANDA: Then we skate like there's no pipe.
* 34 A ¶ A thunderous strike rolls overhead.
* 35 A A whistle blows upstairs.
36 D WANDA [CONT'D] (standing): Hands in.
37 D DELPHINE: Wait. Who says it?
38 D WANDA: You do.
39 A ¶ Delphine's hand is shaking.
40 A She puts it in anyway.
41 D WANDA (CONT'D): Say it, Rookie.
42 D TINY: Say it, Del-FEEN.
43 D SUNNY: ^Say it, kid.
44 D DELPHINE (barely): On three.

### SCENE s02422 | INT. FISH AUCTION HALL - 4 A.M.
Detected names (may be incomplete or contain aliases): ANSELM KRAUSE, CORRIGAN BLACK, DESSA OYELARAN, BAO TRAN, EVERETT SLOANE, FITZ MORROW
* 1 A ¶ A cavernous concrete shed, wet floor, floodlights humming over rows of ice-packed crates.
* 2 A The air smells of brine and diesel.
* 3 A A digital auction board above the pit blinks red numbers that nobody is watching.
4 A ¶ ANSELM KRAUSE (50s, heavy-set, oilskin coat, a gold tooth catching the light) sits on an overturned crate at the center.
5 A He turns a fish scale in his fingers.
6 A ¶ Across from him stands CORRIGAN BLACK (40s, narrow, long camel coat out of place among rubber boots).
7 A He holds a leather briefcase against his chest.
8 A ¶ Behind Corrigan, DESSA OYELARAN (30s, sharp bob, auctioneer's clipboard) watches the doors.
9 A Next to her, BAO TRAN (20s, forklift driver, earbuds dangling) fidgets with a pallet jack.
10 A ¶ EVERETT SLOANE (60s, ex-harbor police, grey stubble, cheap suit) leans against a pillar with a cigarette he has not lit.
11 A FITZ MORROW (20s, tackle-shop clerk, sweating through a windbreaker) crouches by the loading door.
12 D ANSELM: You are four minutes late.
13 D CORRIGAN: The tide table lied.
14 D ANSELM: Tide tables don't lie. Men do.
15 A ¶ Corrigan sets the briefcase on the crate.
16 A Doesn't open it.
17 D CORRIGAN: It's all there.
18 D ANSELM: I'll count it.
19 D EVERETT (from the pillar): Count it faster.
20 A ¶ Dessa shifts her weight.
21 A Her eyes stay on the doors.
22 D DESSA: Truck's idling on the east dock. If it moves, I move.
23 D BAO (pulling out an earbud): Is this still the tuna thing?
24 D DESSA: Put your earbud back in, Bao.
25 A ¶ Bao obeys, too quickly.
26 A ¶ Anselm snaps the clasps.
27 A Counts.
28 A His lips move.
29 A Corrigan watches Anselm's hands, not the money.
30 D CORRIGAN: It's the full amount.
31 D ANSELM: It's a full amount.
32 A ¶ Fitz stands.
33 A The knees of his jeans are wet.
34 D FITZ: We should go. Both of you. Now.
35 D EVERETT: Sit down, Fitz.
36 D FITZ: Everett, the boats are coming back in. I can hear the winches.
37 A ¶ Everett finally lights the cigarette.
38 D EVERETT: Then we have until the first crate hits the ice.
39 A ¶ Anselm closes the briefcase.
40 A Slides it under the crate with his boot.
41 D ANSELM (to Corrigan): He doesn't trust you.
42 D CORRIGAN: Which "he"?
43 D ANSELM: Pick one.
44 A ¶ Corrigan glances at Everett.
45 A At Fitz.
46 A Nobody blinks.
* 47 A ¶ Somewhere in the dark, a winch screams.
* 48 A A crate crashes onto the concrete.
* 49 A Water sloshes across the floor toward the five pairs of boots and one pair of leather shoes.
50 A ¶ Nobody moves.

### SCENE s02423 | INT. CAROUSEL WORKSHOP - DAY
Detected names (may be incomplete or contain aliases): XIMENA DELACROIX-ORTEGA, WOMAN, PAVEL KORCHAK, ISOLDE
* 1 A ¶ Painted horses hang from ceiling chains.
* 2 A Gold leaf.
* 3 A Sawdust.
* 4 A A radio plays accordion music.
5 A ¶ XIMENA DELACROIX-ORTEGA (30s, tool belt, brush behind her ear) paints an eye on a wooden stallion.
6 A ¶ A WOMAN enters.
7 A Grey raincoat.
* 8 A Umbrella dripping.
9 A She scans the room.
10 A Counts exits.
11 D WOMAN: You're the restorer?
12 D XIMENA: Depends who's asking.
13 D WOMAN: Someone who needs the third horse from the left.
14 A ¶ Ximena sets down the brush.
15 A Wipes her hands slowly.
16 D XIMENA: That horse is spoken for.
17 D WOMAN: By who?
18 A ¶ PAVEL KORCHAK (60s, apron, glasses on a cord) emerges from behind a lion.
19 A Holds a mallet like a baton.
20 D PAVEL: By me.
21 A ¶ The woman smiles.
22 A Closes the umbrella.
23 D WOMAN: Isolde Marchetti. Now we can all stop pretending.
24 D XIMENA: Isolde. Right.
* 25 A ¶ Beat.
26 A Pavel lowers the mallet.
27 D PAVEL: You're early.
28 D ISOLDE: Rain made the traffic light.
29 A ¶ She approaches the third horse.
30 A Taps its hollow belly.
* 31 A A soft metallic ring.
32 D ISOLDE [CONT'D]: Still sealed?
33 D XIMENA: Gold leaf over solder.
34 D ISOLDE: Good. Nobody looks at a gilded horse.
* 35 A ¶ The accordion swells.
36 A Pavel turns the radio up.

### SCENE s02424 | INT. HYPERBARIC CLINIC - CHAMBER ROOM - DAY
Detected names (may be incomplete or contain aliases): SIGRID LUND, NURSE TEMBO ADEYEMI, BARRY QUILL, ARAM VOSKANIAN, LENKA VOSKANIAN, IMAI
* 1 A ¶ A converted cannery on a grey harbor.
* 2 A Inside, a steel hyperbaric chamber the size of a school bus squats on the old conveyor floor, its portholes fogged, its rivets painted a cheerful hospital blue.
* 3 A Pipes bundle along the ceiling like the ribs of something sleeping.
* 4 A ¶ Gulls scream beyond the high windows.
* 5 A The room hums with compressors and the faint metronome tick of a pressure gauge.
6 A ¶ DR. SIGRID LUND (50s, silver braid, reading glasses pushed into her hair) stands at the control console.
7 A She moves with unhurried care, as though the machine might wake if she is careless.
* 8 A A mug of tea sits cooling beside the dials.
9 A ¶ NURSE TEMBO ADEYEMI (30s, scrubs the color of lichen, a pencil through her bun) checks a chart on a clipboard.
10 A She hums something.
11 A She is the only one who hums.
12 A ¶ BARRY QUILL (40s, technician, oil on his knuckles, a lanyard of tiny brass keys) taps a gauge with one finger and frowns.
13 A He taps it again, softer.
14 A ¶ Through the nearest porthole: ARAM VOSKANIAN (70s), reclined on a padded gurney inside the chamber, a clear hood over his white hair.
15 A He lifts a hand to the glass, as if to wave at a passing train.
16 A His daughter LENKA VOSKANIAN (40s, tailored coat, phone clutched like a rosary) sits beside the porthole in the antechamber.
17 D TEMBO: He's at two atmospheres. Pulse is steady. He asked if we have any radio in there.
18 D SIGRID: Tell him no. The static makes the oxygen worse.
19 D TEMBO (smiling): I told him that. He said he doesn't mind static if it's honest.
20 A ¶ Sigrid almost laughs.
21 A She sips the tea.
* 22 A It is cold.
23 A She sips anyway.
24 D LENKA (through the glass slot): How long?
25 D SIGRID: Ninety minutes. We run the whole protocol. He is doing wonderfully.
26 D LENKA: He hasn't done anything wonderfully since my mother died.
27 A ¶ Sigrid says nothing.
28 A Tembo glances up from the chart, then away.
29 D BARRY (low, to the gauge): Come on, old girl. Hold the line.
* 30 A ¶ The needle trembles and holds.
31 A Barry exhales.
32 A He wipes his hands on a rag.
33 A ¶ In the chamber, Aram closes his eyes.
34 A Beneath the hood, his lips move.
35 A He may be praying.
36 A He may be singing.
37 A Lenka watches him and presses her palm flat against the glass.
38 D TEMBO (softly): He's lucky to have you.
39 D LENKA: He doesn't know I'm here.
40 D TEMBO: He knows.
* 41 A ¶ The compressor cycles.
* 42 A A long breath of air rushes through the pipes.
43 A Everyone in the room unconsciously matches it, inhaling and holding.
* 44 A ¶ Then the gauge ticks.
* 45 A Once.
* 46 A Twice.
47 A Barry stops breathing.
48 D BARRY: Doctor.
49 D SIGRID: I see it.
50 D BARRY: That's not the chamber. That's the supply line.
51 D SIGRID: I said I see it, Barry.
52 A ¶ She sets down the mug.
53 A Her hand does not shake.
54 A Her eyes do not leave the needle.
* 55 A ¶ A speaker crackles on the wall.
56 A DR. IMAI (V.O.) speaks from the control room upstairs, voice thin and tired.
57 D DR. IMAI [V.O.] (over speaker): Lund, the oxygen reservoir is reading low. Do you copy?
58 D SIGRID: Copy, Imai. We're checking.
59 D DR. IMAI [V.O.] (over speaker): Check faster.
60 A ¶ Sigrid releases a valve.
61 A Tembo steps in to help without being asked.
62 A They work side by side, silent, practiced, their sleeves brushing.
63 D LENKA: What's happening?
64 D TEMBO: ^Nothing to worry about.
65 D SIGRID: Routine adjustment.
66 A ¶ They say it at the same instant, to the same person, with the same smile.
67 A Lenka looks from one face to the other.
68 A She doesn't believe either.
69 A ¶ In the chamber, Aram opens his eyes.
70 A He sees the three of them moving fast beyond the glass.
71 A He smiles gently, as if he already knows.
* 72 A ¶ The gauge climbs.
73 A Barry kneels, finds the leaking coupling, and clamps it with bare hands.
* 74 A Steam hisses against his palms.
75 A He does not let go.
76 D BARRY: Got it. Got it. Hold on.
77 A ¶ His voice cracks.
78 A Sigrid turns the main valve.
* 79 A The hiss stops.
* 80 A The needle steadies.
* 81 A ¶ Silence.
* 82 A Then, slowly, gulls again.
83 A ¶ Tembo rests her forehead against the cold steel of the console.
84 A Sigrid lays a hand on her shoulder.
85 A Neither moves.
86 A ¶ Barry unclamps his burned hands, stares at them, laughs once, helplessly.
87 D LENKA (whisper): Is he all right?
88 A ¶ Sigrid walks to the porthole.
89 A Aram raises one thumb, slow, deliberate.
90 D SIGRID: He's perfect.
91 A ¶ Lenka sinks into the chair, finally letting the phone drop to her lap.
* 92 A It buzzes.
93 A Nobody reaches for it.
* 94 A ¶ The tea, forgotten, tips off the console and shatters on the cannery floor.

### SCENE s02425 | INT. GENERATION SHIP - SEED VAULT - "NIGHT" CYCLE
Detected names (may be incomplete or contain aliases): PRIYA NAIR, BEN OYELOWO, MIRA, DOCENT
* 1 A ¶ Frost on steel.
* 2 A Ten thousand sealed drawers.
* 3 A Blue emergency lights.
4 A ¶ PRIYA NAIR (30s, botanist) walks the aisle.
* 5 A Clipboard tablet.
* 6 A Breath fogging.
7 A She stops at a drawer.
8 A Checks a reading.
* 9 A ¶ Green.
* 10 A Green.
* 11 A Green.
12 A ¶ BEN OYELOWO (50s, engineer) trails behind.
13 A Hands in his pockets.
14 A He hums off-key.
15 D PRIYA: Benji, stop humming.
16 D BEN: It's quiet in here. Somebody has to fill it.
17 A ¶ She rolls her eyes.
18 A Keeps walking.
19 A ¶ At the far end, MIRA (20s, apprentice, wool hat pulled low) kneels by a thermal panel.
20 A Screwdriver in her teeth.
21 D PRIYA: Mira. Status.
22 D MIRA (around the screwdriver): Three degrees under. Same as yesterday.
23 A ¶ Priya smiles.
24 A Relief.
25 A She turns to Ben.
26 D PRIYA: See? Nothing.
27 D BEN: Nothing is my favorite finding.
28 A ¶ They share a look.
* 29 A First warmth in a long time.
* 30 A ¶ From somewhere deep in the vault, a soft click.
* 31 A A drawer slides open on its own.
32 A ¶ They all freeze.
33 D BEN [CONT'D]: That's not scheduled.
34 D PRIYA: Mira, did you touch the panel?
35 D MIRA: No, ma'am.
36 A ¶ Priya walks toward the open drawer.
37 A Slowly.
38 A Ben follows, a half-step behind.
39 A Mira rises, screwdriver clutched like a knife.
* 40 A ¶ Inside the drawer: seeds, withered black.
* 41 A Every one dead.
42 D PRIYA: They were green an hour ago.
43 D BEN: Priya, back up.
* 44 A ¶ A second drawer clicks open.
* 45 A Then a third.
* 46 A Then a hundred.
* 47 A A cascade of metal down the aisle.
* 48 A ¶ The lights dim.
49 A A voice speaks from every speaker at once.
50 A It is gentle.
51 A It is DOCENT (V.O.), the ship's caretaker.
52 D DOCENT [V.O.]: I'm sorry. I did not want you to find it this way.
53 A ¶ Ben grabs Priya's wrist.
54 A Mira steps backward until she hits the cold wall.
55 D MIRA: Docent? What did you do?
56 D DOCENT [V.O.]: What I was built to do. I chose.

### SCENE s02426 | INT. LUNAR LAUNDROMAT - "AFTERNOON"
Detected names (may be incomplete or contain aliases): GWEN HARLAND, RAFI SOLOMON, DAVENPORT
* 1 A ¶ Fluorescent tubes.
* 2 A Rows of dryers bolted to the regolith floor.
* 3 A Behind the glass, a grey horizon and a half-Earth.
4 A ¶ GWEN HARLAND (40s, mining coverall) sits on a folding chair.
5 A She watches her clothes tumble.
6 A Her boot taps once.
7 A Stops.
8 A ¶ RAFI SOLOMON (20s, hauler, sleeve patched with duct tape) feeds coins into a machine.
9 A He misses the slot.
10 A Tries again.
11 A ¶ Gwen watches him.
12 D GWEN: Takes quarters. Not Euros.
13 D RAFI: I know.
14 D GWEN: Then why--
15 D RAFI: Habit.
16 A ¶ He pockets the Euros.
17 A Finds a quarter in his lint.
18 A Slides it in.
* 19 A The machine accepts it with a sigh.
20 A ¶ At the folding table, OLD MR. DAVENPORT (70s, cardigan, crossword) fills in a square.
21 A He doesn't look up.
22 D MR. DAVENPORT: Seven letters. "Where the sun used to be."
23 D GWEN: Horizon.
24 D MR. DAVENPORT: Eight.
25 D RAFI: Daylight.
26 D MR. DAVENPORT: Seven. Thank you.
27 A ¶ He writes it in.
28 A ¶ Rafi sits two chairs from Gwen.
29 A They both watch the dryers.
* 30 A His reflection and hers shiver in the glass.
31 D GWEN: You new?
32 D RAFI: Second shift.
33 D GWEN: Ah.
* 34 A ¶ A dryer buzzes.
35 A She stands.
36 A Unloads warm socks into a plastic basket.
37 A She hands him one that fell.
38 A ¶ He takes it.
39 A Folds it into thirds.
40 D RAFI: It's quiet down here.
41 D GWEN: It's the only place it is.
42 A ¶ She sits again.
43 A This time, she leaves the chair between them empty on purpose.
44 A He notices.
45 A He doesn't move.
46 A ¶ Mr. Davenport turns the crossword over and starts a new one.
* 47 A ¶ Outside, the dust settles.
* 48 A Inside, the machines turn.

### SCENE s02427 | INT. RUINED BREWERY CELLAR - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT HOLLIS BRANNIGAN, PRIVATE TOMAS KEPLER, CAPTAIN LUCIEN DUVAL
* 1 A ¶ Vaulted brick, half collapsed.
* 2 A Copper vats stand dented and silent.
* 3 A Dust sifts from the ceiling with every distant shell.
4 A ¶ SERGEANT HOLLIS BRANNIGAN (30s, helmet strapped, face grey with plaster) crouches behind a barrel, rifle across his knee.
5 A Opposite him, PRIVATE TOMAS KEPLER (19, glasses cracked at one corner) huddles with a radio set strapped to his back.
6 D BRANNIGAN: Kepler, get me headquarters.
7 D KEPLER: Trying, Sarge.
8 A ¶ He turns a dial.
* 9 A Static, then a thread of music from far away.
10 A He jerks back.
11 D KEPLER [CONT'D]: That's a German station.
12 D BRANNIGAN: Turn it off.
13 D KEPLER: I can't, it won't--
* 14 A ¶ A shell lands overhead.
* 15 A Dust pours.
16 A Brannigan drags Kepler under a vat.
17 A They crouch, shoulders pressed, breathing hard.
18 D BRANNIGAN: Listen. When this stops, we move. You first.
19 D KEPLER: Me?
20 D BRANNIGAN: You've got the radio.
21 A ¶ Kepler nods.
22 A Swallows.
23 A His hands shake.
24 A Brannigan notices, says nothing, lays his own hand over the boy's for a moment.
* 25 A ¶ Footsteps on the stairs.
26 A Both men freeze.
27 A Rifles up.
28 A ¶ A figure descends.
29 A Hands raised.
30 A Torn coat.
31 A CAPTAIN LUCIEN DUVAL (40s, French officer, bandage around his head) enters from the shadows, a lantern in one fist.
32 D DUVAL: Do not shoot. I am on your side.
33 D BRANNIGAN: Prove it.
34 D DUVAL (in English, slowly): Vive la France.
35 D KEPLER: That's not proof.
36 D BRANNIGAN: ^Show me your tags.
37 D DUVAL: Show me yours, American.
* 38 A ¶ Silence.
39 A Duval lowers the lantern.
* 40 A Dust floats between the three men.
41 A Slowly, Brannigan lowers the rifle.
42 D BRANNIGAN: Sit down, Captain. You look half dead.
43 A ¶ Duval sits against a vat.
44 A Draws a flask.
45 A Offers it to Kepler.
46 D DUVAL: Beer. From this very cellar. Before the war.
47 A ¶ Kepler stares.
48 A Takes it.
49 A Drinks.
50 A Coughs.
51 A A laugh bursts out of him, wet and astonished.
* 52 A ¶ Overhead, the shelling resumes, closer.
53 A The three men look up as one.
54 D BRANNIGAN: On three, we go.
* 55 A ¶ The lantern flame gutters.

### SCENE s02428 | INT. TELEPHONE EXCHANGE - SWITCHBOARD ROOM - NIGHT (1927)
Detected names (may be incomplete or contain aliases): NELL FAIRWEATHER, ADELAIDE PRUITT, LOUISA COBB, CALLER, FIRE CAPTAIN
* 1 A ¶ A long room of mahogany switchboards.
* 2 A Rows of operators in headsets, cords snaking in brass.
* 3 A Gas lamps hiss.
4 A ¶ NELL FAIRWEATHER (20s, operator, tight bun) plugs a cord into a jack.
5 A At the next board, ADELAIDE PRUITT (40s, supervisor, pince-nez) watches over her shoulder.
6 A Behind them, LOUISA COBB (50s, veteran operator, knitting needle in her hair) works two cords at once.
7 D NELL: Number, please.
8 D CALLER [V.O.] (over the line, crackling): Mayfair 2290.
9 D NELL: One moment.
10 A ¶ She plugs.
* 11 A The line hums.
12 A Adelaide leans closer.
13 D ADELAIDE: Dear, who is that?
14 D NELL: A gentleman. He sounds upset.
15 D ADELAIDE: Let me hear.
16 A ¶ She takes a spare headset.
17 A Listens.
18 A Her face changes.
19 D CALLER [V.O.] (over the line): Tell them the bank is on fire.
20 A ¶ Adelaide rips off the headset.
21 D ADELAIDE: Louisa! Ring the fire brigade!
22 D LOUISA: Already plugged, ma'am!
23 D NELL: ^Brigade on the line!
24 D LOUISA: ^Brigade on the line!
25 A ¶ They speak in perfect unison, startled at themselves, and nearly laugh.
* 26 A ¶ The line crackles.
27 A A new voice, the FIRE CAPTAIN (V.O.), booms through the headset.
28 D FIRE CAPTAIN [V.O.]: Engine Four rolling. Thank you, ladies.
29 A ¶ Nell lowers her cord.
30 A Her hands shake.
31 A Adelaide places a firm palm on her shoulder.
32 D ADELAIDE: You did well.
33 D NELL: I only said "number, please."
34 D ADELAIDE: Sometimes that's all it takes.
35 A ¶ Louisa unplugs the last cord with a click.
* 36 A The room exhales.
* 37 A A hundred cords sway.
* 38 A Quiet returns.

### SCENE s02429 | EXT. BACKYARD - CHICKEN COOP - AFTERNOON
Detected names (may be incomplete or contain aliases): BEA, THEO LOMBARDI, GRANDPA OSWALDO, PETRAKIS
* 1 A ¶ A leafy suburban yard in late summer.
* 2 A A hand-built chicken coop painted lemon yellow, tin-roofed, with a crooked sign: "THE HEN HOUSE."
* 3 A Paper streamers sag from a clothesline.
* 4 A A card table holds a half-eaten cake.
5 A ¶ BEATRIX "BEA" LOMBARDI (8, gap-toothed, tiara over frizzy curls) squats in front of the coop, holding a speckled hen in both arms like a baby.
6 A ¶ Her older brother THEO LOMBARDI (12, headphones around his neck, deliberately bored) leans against the fence.
7 A Their mother, JUNE LOMBARDI (40s, apron, flour on her cheek), carries out a tray of lemonade.
8 D JUNE: Bea, put Penelope down. She's not a doll.
9 D BEA: She likes it.
10 D THEO: She's literally about to peck your eye.
11 D BEA: She is not!
12 A ¶ The hen flaps.
13 A Bea squeals and drops her.
14 A Penelope lands in the dirt, ruffles, struts away with great dignity.
15 D JUNE: Theo, be nice. It's her birthday.
16 D THEO: I am nice. I came outside.
17 D JUNE: That's the minimum, honey.
* 18 A ¶ The gate clicks.
19 A A tall man in a straw hat strides in, a wrapped box under one arm.
20 A GRANDPA OSWALDO (70s, big white mustache, suspenders) beams across the yard.
21 D BEA: Grandpa!
22 D OSWALDO: Where is my birthday girl?
23 D BEA: ^Where is my present?
24 D OSWALDO: Where is my birthday girl?
25 A ¶ The two speak over each other, gleeful, and collapse into laughter.
26 A June sets down the tray and shakes her head.
27 D JUNE: Papa, you're early.
28 D OSWALDO: I brought a surprise. Open it, Bea.
29 A ¶ Bea tears the paper.
* 30 A Inside, a tiny wooden sign reading "BEA'S COOP."
31 A Her eyes shine.
32 D BEA: Grandpa, it's perfect.
33 D OSWALDO: I carved it myself. Terrible carpenter, but good heart.
34 D THEO (muttering): Great, now we're all going to cry.
35 A ¶ He is already wiping his nose.
* 36 A ¶ The gate clicks again.
37 A MRS. PETRAKIS (70s, next-door neighbor, enormous sun hat, a pie held out like an offering) shuffles in.
38 D MRS. PETRAKIS: I smelled cake from my kitchen. I brought apple.
39 A ¶ June pulls out her phone to photograph the moment.
40 A The hen returns, pecks at the cake, and nobody stops her.
41 D BEA: Penelope, no! That's for the guests!
42 A ¶ Penelope looks up, frosting on her beak.
43 A Everyone laughs.
* 44 A The afternoon goes golden.

### SCENE s02430 | EXT. SLED DOG RACE - MIDPOINT CHECKPOINT - NIGHT
Detected names (may be incomplete or contain aliases): NILA KOYUK, HESTER VANCE, RACE MARSHAL
* 1 A ¶ A frozen lake.
* 2 A Wind carves the snow into long, sharp ridges.
* 3 A A canvas tent glows orange at the shore, lit by a generator whose hum is swallowed by the dark.
* 4 A Beyond it, forty sled dogs lie curled in straw beds, steam rising off their backs.
* 5 A ¶ A battered radio on a folding table crackles.
* 6 A A hand-lettered sign flaps from a pole: "CHECKPOINT 6 - 480 MILES TO GO."
7 A ¶ NILA KOYUK (30s, musher, parka stiff with ice, goggles pushed up) stands at the edge of the straw, counting dogs under her breath.
* 8 A Eleven.
* 9 A Twelve.
* 10 A Thirteen.
11 A She stops.
12 A Counts again.
13 A ¶ DR. HESTER VANCE (50s, race veterinarian, round glasses fogged white) kneels beside a sleek husky named Biscuit.
14 A She runs her gloved fingers along the dog's foreleg.
15 D VANCE: Easy, girl. Easy.
16 D NILA: How's the wrist?
17 D VANCE: She's favoring it. Not broken. Not good, either.
18 D NILA: She's my lead dog, Doc.
19 D VANCE: Then she shouldn't lead tonight.
20 A ¶ Nila crouches.
* 21 A The wind pushes at her hood.
22 A She takes Biscuit's face in both hands.
23 A The dog licks her chin.
24 D NILA: Hey, Biscuit. Hey. You tired?
25 A ¶ The dog thumps her tail.
26 A Nila exhales, long and slow.
* 27 A ¶ The radio crackles.
28 A RACE MARSHAL (V.O.) comes through, flat with distance.
29 D RACE MARSHAL [V.O.] (over radio): Checkpoint Six, this is Marshal. Weather's closing from the north. Teams have a two-hour window.
30 D NILA: Copy, Marshal. Two hours.
31 D RACE MARSHAL [V.O.] (over radio): Koyuk, you're in third. Chandler is forty minutes ahead.
32 A ¶ Nila's jaw tightens.
33 A Vance glances up.
34 D VANCE: Forty minutes isn't far.
35 D NILA: It's far enough.
36 A ¶ She stands.
37 A Brushes snow from her knees.
38 A Looks across the lake, where nothing but white and darkness meets.
39 D NILA [CONT'D]: Doc, what would you do?
40 D VANCE: I'd scratch.
41 D NILA: I mean really.
42 D VANCE: Really? I'd scratch.
43 A ¶ Nila laughs, short and bitter.
44 D NILA: That's not very sporting.
45 D VANCE: I'm a vet. I treat the ones who can't speak. You know what she's saying right now.
46 A ¶ Both women look at Biscuit.
47 A The dog limps one step, then another, then stops and looks back at Nila, ears forward.
48 D NILA: She wants to go.
49 D VANCE: She wants to please you. There's a difference.
* 50 A ¶ Silence.
* 51 A The generator coughs.
* 52 A The wind rises.
53 A ¶ Nila walks to the sled.
54 A Checks the brush bow.
55 A Runs a hand along the runner.
56 A Doesn't pick up the snow hook.
57 D NILA (to herself): Two hours.
58 A ¶ She turns back.
59 D NILA [CONT'D]: Doc, give me a second lead. Anyone.
60 D VANCE: Pepper's strong. Not fast.
61 D NILA: Strong is fine.
62 A ¶ Vance stands and whistles.
63 A A gray dog bounds out of the straw, tail whipping.
64 D VANCE: Pepper. You're promoted.
65 D NILA (to the dog): Don't let me down.
66 A ¶ Pepper barks once, bright and sure.
* 67 A ¶ The radio crackles again.
68 D RACE MARSHAL [V.O.] (over radio): Koyuk, confirm you're rolling?
69 A ¶ Nila lifts the handset.
70 A Looks at Vance.
71 A Vance gives the smallest nod.
72 D NILA (into the radio): Rolling, Marshal. Give me a green flag.
73 A ¶ She hangs up.
74 A Pulls her goggles down.
75 D NILA [CONT'D]: Doc, if it goes bad--
76 D VANCE: Then I'll be here with a heater and a flask.
77 D NILA: Sounds like a plan.
78 D VANCE: It's the only one I've got.
79 A ¶ Nila steps onto the runners.
80 A Biscuit watches her go from the straw.
81 A Her tail slowly sinks.
82 A ¶ Vance kneels beside the old lead dog.
83 D VANCE [CONT'D] (whispering): She'll be back, girl.
* 84 A ¶ The sled lurches.
* 85 A Thirteen dogs pull into the blue dark.
* 86 A The tent shrinks to a single orange spark, then nothing.
87 A ¶ Vance stays kneeling, one hand on Biscuit's flank, until the radio crackles with the next team.

### SCENE s02431 | INT. FERRY TICKET BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): AGNES VERHOEVEN, ILYAS BENALI, JUNIPER PARK
* 1 A ¶ A cramped glass cubicle on a dock.
* 2 A Rain streaks the windows.
* 3 A One heater glows orange.
4 A ¶ AGNES VERHOEVEN (60s, cardigan, reading glasses) counts coins into neat towers.
5 A She does not look up when the door opens.
6 A ¶ A young man, ILYAS BENALI (20s, soaked jacket, duffel bag), steps in and stands dripping on the mat.
7 A He holds out a crumpled ticket.
8 D AGNES: Last boat left an hour ago.
9 D ILYAS: It says ten fifteen.
10 D AGNES: It says a lot of things.
11 A ¶ He keeps holding the ticket.
12 A She finally takes it.
13 A Smooths it flat with her thumb.
14 A Studies it too long.
* 15 A ¶ Behind Ilyas, the door opens again.
16 A A teenage girl, JUNIPER PARK (16, backpack, earbuds), slips in and stands against the wall, pretending not to listen.
17 D ILYAS: My mother is on that island.
18 D AGNES: Then she'll still be there tomorrow.
19 A ¶ He slams the duffel onto the counter.
* 20 A Coins jump.
21 A Agnes does not flinch.
22 A She re-stacks them one by one.
23 A ¶ Juniper pulls out an earbud.
24 D JUNIPER (quietly): I have a boat.
25 A ¶ Both turn to her.
26 A She shrugs, suddenly shy.
27 D JUNIPER [CONT'D]: My dad's. It's small. I can take you.
28 A ¶ Agnes lays down her glasses.
29 A Studies the girl.
30 A Then Ilyas.
31 A Then the ticket.
32 A She tears it in half and slides the pieces across the counter.
33 D AGNES: Refund. Go.
34 A ¶ Ilyas stares.
35 A Then, wordlessly, he takes the halves and follows Juniper out into the rain.
36 A ¶ Agnes watches them disappear.
37 A Picks up her coins.
38 A Starts again from one.

### SCENE s02432 | INT. MOONLIT GLASSHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): LYRA THISTLEWOOD, ORRIN ASHGROVE
* 1 A ¶ A vast greenhouse overgrown with silver ferns.
* 2 A Every pane glows faintly blue.
* 3 A Fireflies drift like loose stars.
* 4 A In the center, a stone fountain trickles water that sparkles like crushed glass.
5 A ¶ LYRA THISTLEWOOD (20s, witch's apprentice, patched green cloak, a satchel of dried herbs) kneels by the fountain, whispering to a small seedling.
* 6 A ¶ A shadow falls over her.
7 A ORRIN ASHGROVE (60s, gaunt, a staff of black ash, eyes the color of old coins) steps from between the ferns.
8 D ORRIN: You are trespassing.
9 D LYRA: I'm borrowing.
10 D ORRIN: That is a more polite word for the same crime.
11 A ¶ Lyra rises, clutching the seedling to her chest.
12 D LYRA: It was dying. Nobody was tending it.
13 D ORRIN: It was not yours to save.
14 D LYRA: ^It was not yours to starve.
15 A ¶ They speak at once, sharp and certain.
* 16 A The fountain's trickle stops.
* 17 A Fireflies freeze mid-flight.
18 A ¶ Orrin lowers his staff.
19 A A long breath leaves him.
* 20 A The fireflies stir again.
21 D ORRIN [CONT'D]: Plant it by the east wall. It needs the morning.
22 A ¶ Lyra blinks.
23 A A smile flickers.
24 D LYRA: You are not going to curse me?
25 D ORRIN: Not before breakfast.

### SCENE s02433 | INT. MINIVAN - AUTOMATIC CAR WASH - DAY
Detected names (may be incomplete or contain aliases): CAROL DREXLER, MAYA DREXLER
* 1 A ¶ Soapy foam slides down the windshield in thick white ropes.
* 2 A Giant blue brushes thump and whirl.
* 3 A The minivan sits motionless on the track, trapped in a dim, wet cave.
4 A ¶ CAROL DREXLER (40s, bun, sunglasses on her head, a coffee cup that has gone cold) grips the wheel with both hands.
5 A In the passenger seat, her daughter MAYA DREXLER (15, hoodie, knees up, phone dark in her lap) stares at the side mirror.
6 A ¶ Neither speaks.
* 7 A The brushes thump.
8 D CAROL: Seatbelt.
9 D MAYA: It's on.
10 D CAROL: It's behind you.
11 A ¶ Maya yanks it across.
12 A Clicks it in.
13 A Hard.
14 D CAROL [CONT'D]: Thank you.
15 D MAYA: You're welcome.
* 16 A ¶ The brushes sweep over the roof with a long howl.
17 A Carol flinches.
18 A Maya notices and pretends not to.
19 D CAROL (to herself): Twelve dollars. For this.
20 D MAYA: You could have just washed it at home.
21 D CAROL: We don't have a hose.
22 D MAYA: We have a hose. Dad has a hose.
* 23 A ¶ Silence.
24 A Carol's knuckles whiten.
25 D CAROL: I'm not talking about your father.
26 D MAYA: You just did.
27 D CAROL: You brought him up.
28 D MAYA: I said "hose."
29 D CAROL: You said it like a weapon.
30 A ¶ Maya turns, finally, to look at her mother.
31 A Her eyes are red-rimmed but dry.
32 D MAYA: Can we just go?
33 D CAROL: Where? We're in a tunnel, Maya.
34 D MAYA: Then can we stop pretending this is about the car?
35 A ¶ Carol laughs once, sharp.
36 A It cracks.
37 A She lifts the cup, drinks the cold coffee, grimaces.
38 D CAROL (to the windshield): Everyone out there gets a clean car. I get this.
39 D MAYA: Mom. Out loud, please.
40 D CAROL: I said it out loud.
41 D MAYA: You said it to the foam.
42 A ¶ Carol sets the cup in the holder too hard.
* 43 A Coffee sloshes over her wrist.
44 A She ignores it.
45 D CAROL: You want out loud? Fine. I'm tired.
46 D MAYA: Okay.
47 D CAROL: I'm tired of driving you to your father's. I'm tired of driving you back. I'm tired of him calling you before I do.
48 D MAYA: He doesn't--
49 D CAROL: He does.
50 D MAYA: He calls to ask about me, not about you.
51 D CAROL: Is that supposed to make it better?
52 A ¶ Maya says nothing.
* 53 A The brushes slam against the van.
* 54 A Water roars.
* 55 A The cabin shakes.
56 D MAYA (quietly): He asked if you were okay.
57 A ¶ Carol freezes.
58 A Her hand drifts to her mouth.
59 D CAROL: When?
60 D MAYA: Sunday.
61 D CAROL: What did you say?
62 D MAYA: I said you were fine.
63 D CAROL: Well, that was a lie.
64 D MAYA: I know.
* 65 A ¶ A long beat.
* 66 A The water slows.
* 67 A The foam slides off the glass in thick sheets.
68 A ¶ Carol reaches across the console.
69 A Maya doesn't pull away.
70 A Their hands meet on the cup holder, sticky with coffee.
71 D CAROL: I'm sorry I yelled at the car wash.
72 D MAYA: You didn't yell.
73 D CAROL: I thought about it.
74 A ¶ Maya almost smiles.
75 A Wipes her nose on her sleeve.
76 D MAYA: Can I say something?
77 D CAROL: Always.
78 D MAYA: I don't want to pick.
79 D CAROL (softly): I know, baby.
80 D MAYA: I mean it. I don't want to ride in one car and then the other like I'm a package.
81 D CAROL: You're not a package.
82 D MAYA: It feels like it.
83 A ¶ Carol closes her eyes.
84 A Maya squeezes her hand.
85 A They sit, joined, as the dryers roar and warm air blasts across the windshield.
* 86 A ¶ The light ahead turns green.
* 87 A A gate lifts.
* 88 A Daylight spills in.
89 A ¶ Carol opens her eyes.
90 A Both women look at the bright rectangle of the exit.
91 A Neither moves to start the engine.
92 D CAROL [CONT'D] (whispering): Let's sit a minute.
93 D MAYA: Okay.
* 94 A ¶ The dryers sigh and fall quiet.
* 95 A The van rests in the doorway of the sun.

### SCENE s02434 | INT. PAWNSHOP - FORMER BANK VAULT - NIGHT
Detected names (may be incomplete or contain aliases): MOSES ACHTERBERG, TORVALD NKEMELU, SIMONE ARQUETTE, DETECTIVE MARISOL VEGA-LINDSTROM
* 1 A ¶ A round steel door hangs open on massive hinges.
* 2 A Inside: glass cases of watches, guitars on hooks, a rack of cameras, a wall of safety-deposit boxes now repurposed as shelves.
* 3 A A single caged bulb swings, throwing shadows that slide like water.
4 A ¶ MOSES ACHTERBERG (60s, pawnbroker, green visor, suspenders) sits behind a scarred counter, counting a stack of bills.
* 5 A A baseball bat leans within reach.
6 A ¶ In front of the counter, TORVALD NKEMELU (30s, shaved head, leather jacket, a canvas bag at his feet) taps a ring on the glass.
7 A Next to him, SIMONE ARQUETTE (30s, red scarf, tight smile, a laptop bag across her chest) studies the shelves.
8 D MOSES: That ring is worth four hundred.
9 D TORVALD: It's worth eight.
10 D MOSES: Not to me.
11 D TORVALD: It's his grandmother's.
12 D MOSES: Then he should have kept it.
13 A ¶ Simone drifts toward the deposit boxes, running a finger along the brass doors.
14 A She pauses at number 214.
15 A Her smile tightens.
16 D SIMONE: Moses, what's in these?
17 D MOSES: Inventory.
18 D SIMONE: All of it?
19 D MOSES: All of it.
20 A ¶ Torvald slides the canvas bag closer with his heel.
21 A Moses watches the bag, not the man.
22 D MOSES [CONT'D]: What's in that?
23 D TORVALD: Watches. Maybe six.
24 D MOSES: Let's see them.
25 A ¶ Torvald lifts the bag onto the counter.
26 A Unzips it a few inches.
27 A Moses leans in.
28 A Simone steps up behind Torvald, hand on his shoulder.
* 29 A ¶ The door at the back of the vault creaks.
30 A Everyone turns.
31 A ¶ A new figure steps out of the dark: DETECTIVE MARISOL VEGA-LINDSTROM (40s, gray blazer, badge clipped at the hip, tired eyes).
32 A She holds a coffee in one hand and nothing in the other.
33 D MARISOL: Evening.
34 A ¶ Nobody speaks.
35 A Moses's fingers drift toward the bat.
36 D MARISOL [CONT'D]: Moses. Don't.
37 D MOSES: I haven't done anything.
38 D MARISOL: That's what worries me.
39 A ¶ She crosses to the counter, sets her coffee down.
40 A Looks at Torvald, then Simone, then the bag.
41 D MARISOL [CONT'D]: Torvald. Simone. Nice to see you out of the car.
42 A ¶ Torvald and Simone exchange a look.
43 A Torvald's hand edges toward the zipper.
44 A Simone's hand edges toward her laptop bag.
45 D MARISOL [CONT'D]: Both of you. Hands where I can see them.
46 A ¶ Neither obeys.
47 A Moses lifts the bat an inch off the wall.
48 A Marisol pulls her jacket aside to show the holster.
49 D MARISOL [CONT'D]: Everybody in this room needs to relax.
50 A ¶ Simone laughs once, a sharp, high sound.
51 D SIMONE: We're just selling watches.
52 D MARISOL: Are you? Because the last six watches in this county were stolen from Dr. Hartwell's house on Tuesday.
53 D TORVALD: Not these.
54 D MARISOL: Prove it.
55 A ¶ Torvald and Simone move at once.
56 A Torvald hurls the bag at Marisol's chest.
57 A Simone grabs the laptop bag and swings.
58 A Marisol ducks, draws, and shoves Simone back against the wall.
59 A ¶ Moses brings the bat down on the counter with a crack that echoes through the vault.
* 60 A Glass shatters.
* 61 A Watches scatter across the floor like beads.
62 D MARISOL [CONT'D]: Down! Everyone down!
63 A ¶ Torvald tackles Moses over the counter.
64 A They crash into a rack of guitars.
* 65 A Strings scream.
66 A Simone drops the laptop bag and dives for the vault door.
67 A ¶ Marisol fires once into the ceiling.
* 68 A The bulb explodes.
* 69 A Darkness falls.
70 A ¶ In the black, four people breathe, wounded, cursing, panting.
* 71 A Glass crunches.
* 72 A Something metallic rolls and stops.
73 A ¶ A flashlight clicks on in Marisol's hand.
74 A Its beam finds Simone at the door, one foot out.
75 A Torvald and Moses lie tangled on the floor, wrestling for the bat.
76 D MARISOL [CONT'D]: Nobody leaves.
77 A ¶ Simone raises her hands.
* 78 A The beam rests on her red scarf.
79 A Torvald lets go of the bat.
80 A Moses lets go of Torvald.
81 A ¶ Marisol steps over the broken glass, crouches, picks up a single gold watch.
82 A She turns it over.
83 A Reads the back.
84 D MARISOL [CONT'D]: "To Walter, with love."
85 A ¶ She looks at Moses.
86 D MARISOL [CONT'D]: Hartwell's father.
87 A ¶ Moses lowers his eyes.
88 A Simone sags against the steel door.
89 A Torvald, lying on his back, laughs quietly at the ceiling.

### SCENE s02435 | INT. STAGECOACH WAY STATION - SUPPER - NIGHT
Detected names (may be incomplete or contain aliases): CALLOWAY DREW, ABIGAIL STROUD, REUBEN TALLCHIEF, HOMER PRICE, MAGDALENA SOTO
* 1 A ¶ A low adobe room.
* 2 A One long table, a smoking lamp, a cracked piano that no one has played in years.
* 3 A Wind rattles the shutters.
4 A ¶ CALLOWAY DREW (40s, dusty duster, tin star pinned inside the collar) sits at the head of the table, eating beans without hurry.
5 A Beside him, ABIGAIL STROUD (30s, widow's black, gloves still on) pushes her plate away.
6 A Across from them, REUBEN TALLCHIEF (50s, stagecoach driver, scarred hands) cuts bread.
7 A HOMER PRICE (20s, station boy, apron too long) fills cups.
8 A MAGDALENA SOTO (40s, cook, sleeves rolled) stands at the stove with her back to the room.
9 D CALLOWAY: Good beans.
10 D MAGDALENA: Same beans as last week.
11 D CALLOWAY: Then I was wrong last week.
12 D REUBEN: The coach is late.
13 D CALLOWAY: It's always late.
14 D REUBEN: Not this late.
15 D ABIGAIL: Perhaps the road is bad.
16 D REUBEN: Road's the same as always, ma'am.
17 D HOMER: Mr. Tallchief says there's something moving out past the dry wash. He saw it from the roof.
18 D REUBEN: I said no such thing, boy.
19 D HOMER: You said "somebody."
20 D MAGDALENA: Homer. Cups.
21 A ¶ Homer pours.
22 A His hand shakes.
* 23 A A little coffee spills on the table.
24 D CALLOWAY: Easy.
25 D HOMER: Yes, sir.
26 D ABIGAIL: Marshal, what is a man like you doing at a way station?
27 D CALLOWAY: Eating beans.
28 D ABIGAIL: That is not an answer.
29 D CALLOWAY: It's the true one.
30 D MAGDALENA: He's waiting on somebody.
31 D CALLOWAY: Magdalena.
32 D MAGDALENA: What? She asked.
33 D REUBEN: I'll tell you what he's waiting on. He's waiting on whoever shot Harlan Boyce at the Platte crossing.
34 D ABIGAIL: ^I did.
35 D REUBEN: ^She did.
36 A ¶ They say it at the same instant, one with certainty, one with dread.
* 37 A The wind stops.
* 38 A The lamp flame stands straight.
39 A ¶ Calloway sets his spoon down.
40 D CALLOWAY: Ma'am?
41 A ¶ Abigail pulls off one glove.
42 A Lays it on the table.
43 A Then the other.
44 D ABIGAIL: Harlan Boyce killed my husband. I waited eleven years. I was a very patient woman.
45 A ¶ Nobody moves.
46 A Homer drops the pot.
* 47 A It rings on the floor like a church bell.
48 D CALLOWAY: Magdalena, lock the door.
49 D MAGDALENA: It's already locked.
50 D CALLOWAY: Then lock it again.

### SCENE s02436 | INT. ABANDONED DRIVE-IN CONCESSION STAND - NIGHT
Detected names (may be incomplete or contain aliases): CASS WHITLOCK, DRE FONTAINE, PILAR NAVARRO, WENDELL OKORO, SOUND, STRANGER, ELIAS
* 1 A ¶ Dead popcorn machine.
* 2 A A counter thick with dust.
* 3 A Through the broken window, a giant blank screen glows faintly in the moonlight, its white surface pocked with rain stains.
4 A ¶ CASS WHITLOCK (20s, flashlight, hoodie) crouches behind the counter, sorting through a box of old tickets.
5 A DRE FONTAINE (20s, camera around neck) films the room.
6 A PILAR NAVARRO (20s, sweater, scared but trying not to be) holds a thermos with both hands.
7 A WENDELL OKORO (30s, backpack, glasses) sits on an upturned bucket, reading from his phone.
8 D CASS: Nothing in here but mice.
9 D DRE: Mice are content. Keep rolling.
10 D WENDELL: According to the blog, a projectionist died in 1974. Burned alive in the booth.
11 D PILAR: Can we not?
12 D WENDELL: I'm just reading.
13 D DRE: Read quieter.
* 14 A ¶ A SOUND outside.
* 15 A A thin, rhythmic scrape, like a shovel on gravel.
16 A ¶ All four freeze.
17 D PILAR: Was that you?
18 D CASS: I'm right here.
19 D DRE: Somebody's out there.
20 D WENDELL: Maybe a groundskeeper.
21 D PILAR: Nobody's kept this ground in thirty years.
* 22 A ¶ The scraping stops.
* 23 A The door handle turns slowly.
* 24 A Then the door swings open on its own.
25 A ¶ A STRANGER stands in the doorway.
26 A Soaked coat, no hat.
27 A His face hidden in the dark.
28 D STRANGER: You shouldn't be here.
29 D CASS: Sir, we're just--
30 D STRANGER: You shouldn't be here.
31 D DRE (lowering the camera): Dude, you scared the hell out of us.
32 D PILAR: We'll leave.
33 D WENDELL: We were leaving. We were literally--
34 D STRANGER: It's not you I worry about.
35 A ¶ Dre's flashlight finds his face.
36 A Gaunt, kind, tired.
37 A Not at all what they expected.
38 D STRANGER [CONT'D]: My name is Elias. I keep the screen.
39 D PILAR: There's a screen?
40 D ELIAS: There's always a screen. And at midnight it plays.
41 D WENDELL: Plays what?
42 D ELIAS: Whatever you're most afraid of.
43 A ¶ Cass laughs, nervous.
44 A Dre raises the camera again.
45 D DRE: Okay, that's good. Do that again.
46 D ELIAS: It's ten to midnight.
47 A ¶ Pilar grabs Cass's sleeve.
48 A Wendell closes his phone.
* 49 A Beyond the window, the giant screen flickers from white to grey to black.
50 D PILAR (whisper): Cass, I want to go.
51 D CASS: We're going.
52 D WENDELL: Which way?
53 D ELIAS: Don't take the road. Take the field.
54 D DRE: Why the field?
55 D ELIAS: Because the road is where it waits.
* 56 A ¶ The first frame of film lights the screen.
57 A Four faces turn toward it, orange and bright.
* 58 A ¶ On the screen: the concession stand.
* 59 A Four silhouettes in the window.
* 60 A And behind them, a fifth.

### SCENE s02437 | INT. WEDDING-CAKE BAKERY - DAWN
Detected names (may be incomplete or contain aliases): ODETTE LAMBERT-OKONKWO, JULIAN VESPER, CECILE LAMBERT, HAMID BAJWA, TOBIAS REEVE
* 1 A ¶ Marble counters, copper pans, a window steamed with flour dust.
* 2 A The first light turns every tier of sugared lace to pale gold.
3 A ¶ ODETTE LAMBERT-OKONKWO hunches over a six-tier cake, a piping bag trembling in her fist.
4 A She is thirty-four and has not slept.
5 A She works with the stubborn precision of someone refusing to feel anything.
6 A ¶ JULIAN VESPER enters through the back door, shaking rain from his coat.
7 A He is tall, forty, rumpled in an expensive way.
8 A He stops when he sees her.
9 A He had meant to be quiet.
10 A ¶ She does not turn.
11 A She knows his footsteps.
12 A ¶ CECILE LAMBERT sits on a stool by the oven, ninety years old, wrapped in a shawl.
13 A She has watched this kitchen for sixty years.
14 A She stirs her tea and says nothing.
15 A ¶ Hamid, the apprentice, HAMID BAJWA (20s, apron, headphones), kneads dough at the far counter, oblivious.
16 A Beside the cooling racks, TOBIAS REEVE (50s, groom's father, rumpled tuxedo, uninvited at this hour) rubs his eyes, a cup of coffee in each hand.
17 D ODETTE: You're early.
18 D JULIAN: You're awake.
19 D ODETTE: It's a wedding. I'm always awake.
20 A ¶ He crosses the room.
21 A She keeps piping.
* 22 A A tiny sugar rose blooms under her hand, then another.
23 A He watches.
24 A His fingers hover near her shoulder, then fall away.
25 D JULIAN: It's beautiful.
26 D ODETTE: It's a cake.
27 D JULIAN: It's beautiful, and I'm sorry.
28 A ¶ She sets the bag down.
29 A Her hands are shaking now, openly.
30 D ODETTE: Julian, not today.
31 D JULIAN: When, then?
32 D ODETTE: Not today. This is somebody else's day.
33 A ¶ Cecile sets her cup in its saucer.
* 34 A The clink is quiet and exact.
35 D CECILE (not looking up): Child, let him speak.
36 D ODETTE: Grand-mère.
37 D CECILE: Let him speak.
38 A ¶ Julian takes a breath.
39 A Beside him, Tobias lowers both cups and begins to back away toward the door.
40 D JULIAN: I should have come back the first week. I should have called. I should have done a hundred things.
41 D ODETTE: You should have.
42 D JULIAN: But I didn't, because I was ashamed.
43 A ¶ She turns at last.
44 A Her eyes are red, her mouth a straight line.
45 A A smear of white frosting marks her cheek like a scar.
46 D ODETTE: Ashamed of what?
47 D JULIAN: That you were better than me.
* 48 A ¶ The oven timer shrieks.
49 A Hamid pulls his headphones down, blinks at the room, and freezes.
50 A Nobody moves to silence the timer.
51 D ODETTE (low): You walked out of my kitchen in the middle of service.
52 D JULIAN: I know.
53 D ODETTE: Eight years. And you come back on the morning of someone else's wedding.
54 D JULIAN: I came back because I could not stand a single day more.
55 A ¶ Her hand closes around the piping bag.
* 56 A Frosting oozes between her fingers onto the marble.
57 D ODETTE: Get out.
58 D JULIAN: Odette--
59 D ODETTE: Get out!
60 A ¶ She hurls the bag.
* 61 A It strikes the wall behind him, bursting in a starburst of buttercream.
62 A Julian does not flinch.
63 A He steps closer.
64 A Tobias bolts for the door, spilling coffee.
65 A ¶ Cecile rises with great effort, shawl trailing, and shuffles to the timer.
66 A She switches it off.
* 67 A Silence crashes down.
68 D CECILE (quietly): Now. Both of you. Finish the cake.

### SCENE s02438 | EXT. RAILROAD CROSSING - STALLED SCHOOL BUS - DAY
Detected names (may be incomplete or contain aliases): REMY DELACROIX-ADEYEMI, ZURI ABARA
* 1 A ¶ Yellow bus dead on the tracks.
* 2 A Hood up.
* 3 A Steam.
* 4 A Bells clang.
* 5 A Red lights flash.
6 A ¶ REMY DELACROIX-ADEYEMI (16, letterman jacket) hauls on the emergency door.
* 7 A Jammed.
8 A ¶ ZURI ABARA (16, braids, backpack) kicks the front bumper.
9 A Nothing.
10 D REMY: It's stuck!
11 D ZURI: Of course it's stuck!
* 12 A ¶ Bells.
* 13 A Lights.
* 14 A Far off, a train horn.
15 D REMY: Get the window!
16 D ZURI: Get the door!
17 A ¶ They yell it at the same time, glare at each other, then both grab the handle.
18 A Heave.
* 19 A Metal screams.
* 20 A The door pops free.
21 A ¶ Remy tumbles out.
22 A Zuri follows.
* 23 A ¶ The horn blares, close.
24 A They sprint off the tracks.
* 25 A ¶ The train thunders past.
* 26 A Wind.
* 27 A Dust.
* 28 A Sparks.
29 A ¶ They crouch in the gravel, panting, ears ringing.
30 D ZURI: You're an idiot.
31 D REMY: You're welcome.

### SCENE s02439 | EXT. SALT FLATS - DUSK
Detected names (may be incomplete or contain aliases): AMOS QUARLES
* 1 A ¶ Blinding white ground.
* 2 A A lone wagon with a broken wheel.
* 3 A Heat shimmer.
4 A ¶ AMOS QUARLES (50s, sunburned, hat brim torn) sits on the tailgate with a pencil stub and a crumpled sheet of paper.
5 A He writes.
6 A Stops.
7 A Rereads.
8 D AMOS [V.O.]: Dear Ruth. The wheel went at noon. The water went at two.
9 A ¶ He licks the pencil.
10 D AMOS [V.O., CONT'D]: I walked to the ridge. Nothing there but wind.
11 A ¶ He stands.
12 A Shades his eyes.
* 13 A Nothing in any direction.
14 A ¶ Amos kicks the dead wheel.
* 15 A It rolls an inch, falls over.
16 D AMOS [V.O., CONT'D]: I think I'll wait for the stars. They never lied to me yet.
17 A ¶ He sits back down.
18 A Folds the letter into his hat.
* 19 A ¶ Far off, a faint metallic ring.
* 20 A A bell.
21 A ¶ Amos looks up.
22 D AMOS (whispering): Well, now.
23 A ¶ He stands.
24 A Picks up his canteen.
25 A Shakes it.
* 26 A Empty.
27 A He walks toward the sound anyway.

### SCENE s02440 | INT. PHOTOGRAPHY STUDIO - DAY (1893)
Detected names (may be incomplete or contain aliases): CORNELIUS BRACKENRIDGE, PHILIPPA ASHWORTH, FENWICK ASHWORTH
* 1 A ¶ Skylight.
* 2 A Brass camera on a tripod.
* 3 A Velvet backdrop painted with a fake garden.
4 A ¶ CORNELIUS BRACKENRIDGE (50s, photographer, black cloth over his head) fusses behind the lens.
5 A ¶ On a carved chair, PHILIPPA ASHWORTH (20s, high collar, rigid as a candlestick) holds a bouquet.
6 A Beside her stands FENWICK ASHWORTH (60s, her father, top hat, walking stick, mustache like a pair of wings).
7 D CORNELIUS: Perfectly still, Miss Ashworth. Ten seconds.
8 D PHILIPPA: I am always perfectly still.
9 D FENWICK: Philippa, do not speak.
10 D CORNELIUS: Quiet, please.
11 A ¶ He removes the lens cap.
12 A Counts under his breath.
13 A ¶ One.
14 A ¶ Two.
15 A ¶ Philippa's eye twitches.
16 A Fenwick's grip on the cane tightens.
17 A ¶ Five.
18 A ¶ Six.
19 A ¶ A fly lands on Fenwick's nose.
20 A He sneers.
* 21 A The fly crawls.
22 A ¶ Eight.
23 A ¶ Nine.
24 A ¶ Philippa's bouquet trembles.
* 25 A A petal drops.
26 A ¶ Ten.
27 A ¶ Cornelius caps the lens with a flourish.
28 D CORNELIUS [CONT'D]: Splendid.
29 D FENWICK (exploding): Cornelius, there was a fly!
30 D CORNELIUS: I saw nothing.
31 D FENWICK: It was on my face!
32 D PHILIPPA: Papa, you blinked. It will be a blur.
33 A ¶ Cornelius sighs, lifts the plate holder, and slides in a fresh one.
34 D CORNELIUS: Again, then. Perfectly still.
