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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0125.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00723 | INT. FERRIS WHEEL GONDOLA 14 - COMPLAINTS DEPARTMENT - DAY
Detected names (may be incomplete or contain aliases): PRIYA RAMANATHAN, HUGH BELLAMY, CORKY, WASHINGTON, MS. FENWICK-ADEYEMI
* 1 A ¶ A decommissioned gondola bolted to a service platform.
* 2 A Two desks.
* 3 A One window.
* 4 A One fire extinguisher nobody trusts.
5 A ¶ PRIYA RAMANATHAN, thirties, headset, ironed blouse.
6 A Armour.
7 A ¶ HUGH BELLAMY, fifties, comb-over, mug reading WORLD'S OKAYEST BOSS.
8 A He leans in the doorway.
9 D HUGH: Priya. Quarterly numbers.
10 D PRIYA: Good.
11 D HUGH: Good?
12 D PRIYA: Complaints are down forty percent.
13 D HUGH: Brilliant.
14 D PRIYA: Because the phone line's been unplugged since June.
15 A ¶ Hugh freezes.
16 A Smile stuck.
17 D HUGH: Unplugged.
18 D PRIYA: By you. For "restructuring."
19 A ¶ Hugh enters.
20 A Sits on the desk.
21 A Sighs like a man in a hot-air balloon.
22 D HUGH: Okay. Okay. Nobody tells Corporate.
23 D PRIYA: Corporate's in the next gondola.
24 A ¶ CORDELL "CORKY" WASHINGTON, twenties, pops up from under the other desk.
25 A Headphones.
26 A Cheese puff dust on his lip.
27 D CORKY: Morning!
28 D HUGH: You live here?
29 D CORKY: Gondola's got Wi-Fi.
* 30 A ¶ The gondola sways.
31 A All three grab something.
32 D PRIYA: Why are we moving?
33 D CORKY: Wheel's on. Maintenance said "test."
34 D HUGH: Test what?
35 D CORKY: Whether it still goes.
* 36 A ¶ The gondola lifts.
* 37 A Rises.
* 38 A Through the window the city tilts into view.
39 A Hugh's mug slides.
40 A He catches it.
* 41 A ¶ An old PHONE on the wall RINGS.
42 A Everyone stares.
43 D PRIYA: That's connected?
44 D HUGH: That's not supposed to be connected.
* 45 A ¶ Ring.
* 46 A Ring.
47 A Priya answers.
48 A Puts it on speaker.
49 D PRIYA: Complaints. Priya.
50 D MS. FENWICK-ADEYEMI [V.O.] (over phone, crisp): Ms. Ramanathan. Marjorie Fenwick-Adeyemi. Head of Customer Experience.
51 A ¶ Hugh mouths: Corporate.
52 A Corky mouths: In the next gondola.
53 D MS. FENWICK-ADEYEMI [V.O., CONT'D]: I'm told your department has had no complaints in four months.
54 D PRIYA: That's correct.
55 D MS. FENWICK-ADEYEMI [V.O.]: It's the most impressive thing I've ever seen.
56 A ¶ Hugh straightens.
57 A Smiles.
58 A Corky gives a thumbs-up.
59 D MS. FENWICK-ADEYEMI [V.O., CONT'D]: I'd like to put you in charge of the whole company.
60 D PRIYA (beat): What?
61 D HUGH (whisper): Say yes.
62 D MS. FENWICK-ADEYEMI [V.O.]: Mr. Bellamy is, of course, being let go.
63 A ¶ Hugh's mug hits the floor.
64 D HUGH: What?!
65 D CORKY: Oh, wow.
66 D PRIYA (into phone): Can I call you back?
67 D MS. FENWICK-ADEYEMI [V.O.]: I'm in the next gondola.
68 A ¶ They all turn.
69 A Through the window, ten feet away, a woman in a grey suit lifts a phone.
70 A Waves.
* 71 A ¶ The wheel stops.
* 72 A Hangs.
* 73 A Wind.
* 74 A Silence.
75 A ¶ Hugh drops onto the desk.
76 D HUGH: Priya. I trained you.
77 D PRIYA: You taught me where the mute button was.
78 D HUGH: That's training!
79 D CORKY (to no one): I can see her lunch.
80 A ¶ Priya hangs up.
81 A Looks at Hugh.
82 A At the extinguisher.
83 A At the city below.
84 D PRIYA: I have a condition.
85 D HUGH: Anything.
86 D PRIYA: Plug the phones back in.
87 D HUGH (horrified): Why?
88 D PRIYA: So we can hear what people actually think.
89 A ¶ Hugh gulps.
* 90 A The wheel jolts.
* 91 A It starts to descend.
92 D CORKY: That's going to be loud.
93 D HUGH: How loud?
94 D CORKY (shrugs, eats a puff): Gondola loud.
* 95 A ¶ The wheel carries them down into the noise of the city.

### SCENE s00724 | INT. CURLING RINK - 5 A.M.
Detected names (may be incomplete or contain aliases): INGRID SOLBERG, KAMALA JOSHI
* 1 A ¶ Empty ice.
* 2 A Frost smoke on the boards.
* 3 A A zamboni hums somewhere far off.
4 A ¶ INGRID SOLBERG, thirties, national-team jacket, sits on the hack with a polishing cloth.
5 A She buffs one granite stone.
6 A Slow circles.
7 A Calm.
8 A ¶ She sets it down.
9 A Picks up another.
* 10 A ¶ A door CLANKS at the far end.
* 11 A Footsteps on rubber matting.
12 A Ingrid doesn't look up.
13 A ¶ KAMALA JOSHI, twenties, rookie, duffel bag, bright eyes.
14 A Too bright.
15 A She stops at the boards.
16 D KAMALA: You're early.
17 D INGRID: Always.
18 D KAMALA: Coach said six.
19 D INGRID: Coach says a lot.
20 A ¶ Kamala steps onto the ice.
21 A Slides carefully.
22 A Settles on a bench near the house.
23 D KAMALA: I watched your Oslo final. Eleven times.
24 D INGRID: Then you know the ending.
25 D KAMALA: She misses the draw. You win.
26 D INGRID (beat): She doesn't miss. I did.
27 A ¶ Kamala laughs.
28 A Ingrid doesn't.
29 A The cloth keeps circling.
30 D KAMALA: I'm second skip. They told me last night.
31 A ¶ Ingrid's hand stops.
32 A A breath.
33 A She sets the stone down gently.
34 D INGRID: Did they say whose spot?
35 D KAMALA: No. Just that it's open.
36 D INGRID: It's not open.
37 A ¶ She stands.
38 A Walks to the sheet.
39 A Her jacket reads CAPTAIN in small stitching.
40 D INGRID [CONT'D]: I signed the release at midnight.
41 A ¶ Kamala's face falls.
42 D KAMALA: You quit?
43 D INGRID: I was cut. She was told to keep it quiet until you'd arrived.
44 D KAMALA: Who told you?
45 D INGRID: Coach. Same one who said six.
46 A ¶ She holds out the stone's handle to Kamala.
47 D INGRID [CONT'D]: Throw it.
48 D KAMALA: I don't--
49 D INGRID: Throw it. I want to see what they chose.
50 A ¶ Kamala takes the handle.
51 A Sets her feet.
52 A Pushes.
* 53 A The stone glides, long and clean, to the button.
54 A ¶ Ingrid watches it stop.
55 A A small nod.
56 D INGRID [CONT'D]: Good.
57 A ¶ She picks up her bag and walks off the ice.

### SCENE s00725 | INT. BOWLING ALLEY - LANE 9 - ARBITRATION HEARING - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR HELENA MBEKI, SUNITA KAPOOR, CONRAD ASHWORTH, DMITRI VOLKOV, PAULINA ZAJAC
* 1 A ¶ A defunct bowling alley, repurposed.
* 2 A Folding tables over the gutters.
* 3 A A pin-setting machine looms behind the panel like a sleeping beast.
4 A ¶ ARBITRATOR HELENA MBEKI, sixties, reading glasses on a chain, presides from the scoring desk.
5 A At the left table: attorney SUNITA KAPOOR, forties, crisp navy suit.
6 A At the right: attorney CONRAD ASHWORTH, fifties, rumpled tweed.
7 A In the witness chair, a plastic bowling seat: DMITRI VOLKOV, sixties, retired foreman, hands folded.
8 A At a small side table, court reporter PAULINA ZAJAC, twenties, fingers poised.
* 9 A ¶ Quiet.
* 10 A Pins rattle faintly somewhere behind a wall.
11 D HELENA: We are on the record. Mr. Volkov, you've been sworn.
12 D DMITRI: I have.
13 D SUNITA: Mr. Volkov, thank you for coming. I'd like to ask about the night of the fourteenth.
14 D DMITRI: Of course.
15 D SUNITA: You were foreman on the closing shift at the Calloway plant?
16 D DMITRI: Twenty-two years.
17 D SUNITA: And that night, you signed the safety log?
18 D DMITRI: I did. As I always did.
19 D SUNITA: Was the lockout valve on press four engaged?
20 D DMITRI: It was.
21 D CONRAD: Objection. Leading.
22 D HELENA: Overruled, Mr. Ashworth. She is asking for a fact.
23 D CONRAD: Then I'll hold my fire, Madam Arbitrator.
24 D SUNITA: Mr. Volkov. Was the valve engaged?
25 D DMITRI: Yes.
26 D SUNITA: You're certain.
27 D DMITRI: I checked it with my own hand.
28 D SUNITA: And yet the incident report states that press four cycled at eleven forty.
29 D DMITRI: It did.
30 D SUNITA: How is that possible if the valve was engaged?
31 D DMITRI: Because I disengaged it at eleven thirty-five.
32 D PAULINA (quietly): Could the witness repeat that?
33 D DMITRI: I disengaged it at eleven thirty-five.
34 D CONRAD: Madam Arbitrator, may we have a moment?
35 D HELENA: No. Mr. Volkov, why would you do that?
36 D DMITRI: Because Mr. Calloway's son told me to. He said the order was behind. He said nobody would be near it.
37 D SUNITA: Was anyone near it?
38 D DMITRI (long pause): My nephew. Nikolai. He was cleaning the die.
39 D HELENA: Ms. Kapoor, do you have further questions?
40 D SUNITA: Only one. Mr. Volkov, why did you sign the log?
41 D DMITRI: Because they said they would pay for his hospital. And I did not know how to say no.
42 D CONRAD: I withdraw my objection. And I withdraw my client's motion.
43 D HELENA: Mr. Ashworth?
44 D CONRAD: My client wishes to settle.
45 D HELENA: Ms. Zajac, strike nothing.
46 D PAULINA: Yes, ma'am.
47 D HELENA: We are adjourned.

### SCENE s00726 | INT. CHURCH BASEMENT - ROLLER DERBY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TAMSIN FAIRWEATHER, NANA OKONKWO, ROSA ESPINOZA, KIT HALVORSEN, YUKI TANABE
* 1 A ¶ Folding chairs.
* 2 A A Sunday-school felt board still reading LOVE THY NEIGHBOUR.
3 A Five women lace skates under a flickering bulb.
4 A ¶ TAMSIN FAIRWEATHER, thirties, captain, tapes her wrist.
5 A NANA OKONKWO, twenties, jammer, bounces a knee.
6 A ROSA ESPINOZA, forties, blocker, eats a banana.
7 A KIT HALVORSEN, nineteen, rookie, stares at her laces.
8 A YUKI TANABE, thirties, ref in stripes, sits apart with a clipboard.
9 D TAMSIN: Kit, you're good?
10 D KIT: Fine.
11 D NANA: She's not fine. She's looking at her shoes.
12 D ROSA: Leave her, Nana.
13 D NANA: I'm just saying. First bout.
14 A ¶ Kit pulls a lace tight.
15 A Snaps it.
16 D KIT: It's a church basement. How scary can it be?
17 D YUKI: Last month somebody lost a tooth in the nave.
* 18 A ¶ Silence.
19 A Rosa chews her banana.
20 D TAMSIN: Alright, listen. Keep your heads up and your elbows in. No heroics.
21 D NANA: No heroics.
22 D ROSA (deadpan): Some heroics.
23 A ¶ Tamsin grins.
24 A Stands.
* 25 A The felt board rattles on its easel.
26 D TAMSIN: Let's go.

### SCENE s00727 | INT. ORBITAL GREENHOUSE RING - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ADEOLA NWOSU, LEIF ARNARSON, ENGINEER MIRA SOLANKI
* 1 A ¶ Curved rows of tomato vines under violet grow-light.
* 2 A Condensation beads on the inside of the viewports.
* 3 A Earth hangs in the glass like a bruised plum.
4 A ¶ CAPTAIN ADEOLA NWOSU, fifties, grey at the temples, sits on an upturned crate, peeling an orange with a care that suggests she has no intention of eating it.
5 A Opposite, botanist LEIF ARNARSON, forties, kneels at a tray of seedlings, misting them one by one.
6 A ENGINEER MIRA SOLANKI, thirties, leans on a pipe rack with a wrench she isn't using.
* 7 A ¶ Nobody speaks for a long time.
* 8 A A pump ticks.
9 A Leif counts leaves under his breath.
10 D ADEOLA: Mira, the coolant loop.
11 D MIRA: Holding.
12 D ADEOLA: Good.
13 A ¶ Leif sprays the last seedling and wipes his hands on his trousers, slowly, one finger at a time.
14 A Mira turns the wrench over, sets it on the rack, picks it up again.
15 A Adeola finishes the orange, lays the peel in a single unbroken spiral on her knee, and does not look at either of them.
16 D LEIF (to the plants): You'll be fine. You'll all be fine.
17 D MIRA: Leif.
18 D LEIF: I'm talking to the plants.
19 D ADEOLA (to the room): Everyone is fine. Dinner at nineteen hundred.
20 A ¶ She stands.
* 21 A The peel falls.
22 A Mira steps over it without comment.
23 A Leif reaches for it, then stops, hand hovering.
* 24 A ¶ A soft chime from the wall panel.
* 25 A Amber light slides across all three faces.
26 A Nobody moves toward it.
27 D LEIF: That's the pressure alert.
28 D MIRA: It's been doing that.
29 D ADEOLA (a beat too late): I know.
30 A ¶ Mira finally crosses to the panel.
31 A Reads it.
32 A Her thumb presses the screen, once, as if testing for a pulse.
33 A She turns, and her face gives away what she doesn't say.
34 A Leif sees it.
35 A He sits down on the floor between the trays, knees up.
36 A Adeola walks to the viewport, her reflection laid over the Earth.
37 D ADEOLA [CONT'D] (mutters): Eleven days.
38 A ¶ Mira picks up the peel from the floor and holds it out to Leif.
39 A He takes it.
40 A They look at each other, and then at the captain's back, and no one asks.

### SCENE s00728 | INT. SECRETARY'S OFFICE, NEW YORK INSURANCE COMPANY - NIGHT (1927)
Detected names (may be incomplete or contain aliases): MILLICENT HARGROVE
* 1 A ¶ A cramped office after hours.
* 2 A A single green-shaded lamp.
* 3 A Filing cabinets crowd the walls like silent clerks.
* 4 A On the desk, a bulky wax-cylinder dictating machine, horn pointed up.
5 A ¶ MILLICENT HARGROVE, thirties, trim in a navy dress, hair pinned firm, sits very straight.
6 A She winds the crank with a gloved hand and adjusts the horn.
7 D MILLICENT (brisk, to the machine): Testing. Millicent Hargrove, Policy Division, March the ninth, nineteen twenty-seven. If this is heard, the ledger in the lower drawer is the true one.
8 A ¶ She stops the machine.
9 A Presses a lever.
* 10 A The cylinder spins back, crackling.
11 D MILLICENT [V.O.] (from the machine, thin and tinny): ...the ledger in the lower drawer is the true one.
12 A ¶ She nods, satisfied.
13 A Then her eyes lift to the frosted glass of the door.
* 14 A A shadow passes slowly.
15 A She holds perfectly still.
* 16 A ¶ The shadow stops.
* 17 A The doorknob rattles.
18 D MILLICENT [CONT'D] (whispering, to herself): Not yet. Not yet.
19 A ¶ She snatches the cylinder from the machine and wraps it in her scarf.
* 20 A The knob turns again.
21 A She slides the lower drawer open, drops the bundle inside, locks it, and pockets the key in her stocking.
* 22 A ¶ The door opens a crack.
* 23 A Lamplight catches the edge of a man's hat.
24 A Millicent lifts her chin and smiles the brightest smile of her life.
25 D MILLICENT [CONT'D] (calling out): Come in, do. I've only just finished.

### SCENE s00729 | EXT. CABLE CAR - ABOVE A GORGE - DUSK
Detected names (may be incomplete or contain aliases): BRONWYN DAVIES, TEO, BIANCHI, SAMIRA HADDAD, KWAME BOATENG, ASTRID NYGAARD, HIRO, KAWAGUCHI
* 1 A ¶ A steel gondola dangles over a mile of nothing.
* 2 A Wind.
* 3 A Fog beneath.
4 A Six strangers are packed inside, breathing hard.
5 A ¶ BRONWYN DAVIES, fifties, retired nurse.
6 A TEODORO "TEO" BIANCHI, twenties, backpacker.
7 A SAMIRA HADDAD, forties, mother, clutching a thermos.
8 A KWAME BOATENG, sixties, engineer, calm.
9 A ASTRID NYGAARD, thirties, runner.
10 A HIROSHI "HIRO" KAWAGUCHI, eighties, quiet, folded into the corner.
* 11 A ¶ The car swings once.
* 12 A Settles.
13 D KWAME: Everyone breathe. It's a power cut. The backup will come on.
14 D SAMIRA: How long?
15 D KWAME: Twenty minutes. Maybe thirty.
16 D TEO: It's been forty.
17 D KWAME: Then it's coming.
18 D ASTRID: I run this gorge every Sunday. There's a ranger hut on the north side. If we climb out--
19 D BRONWYN: We are not climbing out.
20 D ASTRID: It's four hundred feet to the ridge.
21 D BRONWYN: It's four hundred feet in the wrong direction.
22 D HIRO (softly): Please. The car rocks.
23 D SAMIRA: He's right. Nobody move.
24 D TEO: I have a radio on my phone. No bars.
25 D KWAME: Try the emergency channel.
26 D TEO: It's not that kind of phone.
27 D ASTRID: Then why do you have it?
28 D TEO: For music.
29 D BRONWYN: Lord.
30 D SAMIRA: There is water in the thermos. Tea. We share.
31 D KWAME: Small sips.
32 D SAMIRA: Hiro, you first.
33 D HIRO: Thank you.
34 D BRONWYN: Hiro, how are you feeling?
35 D HIRO: I am eighty-four. I have been in worse. In fifty-eight, I was in a cave for two days.
36 D TEO: What happened?
37 D HIRO: We sang.
38 D ASTRID: Sang what?
39 D HIRO: Whatever we knew. Bad songs. Many verses.
40 D SAMIRA (laughs): Let's do that then.
41 D KWAME: Singing in a swaying car is not--
42 D BRONWYN: Kwame, let the man have his song.
43 D KWAME: Fine. But quietly.
44 D HIRO: I know one.
45 D TEO: Go.
46 D HIRO (sings, thin): "Hotaru no hikari..."
47 D SAMIRA: I know this one! It's the school tune.
48 D BRONWYN: Auld Lang Syne. We all know it.
49 D ASTRID (joining): "Should auld acquaintance be forgot..."
50 D TEO: I don't know the words.
51 D KWAME: Hum.
52 A ¶ All six now.
* 53 A Low.
* 54 A Wind carries them across the dark.
* 55 A ¶ A groan from above.
* 56 A The cable shudders.
57 A Everyone stops.
58 D ASTRID: Did that--
59 D KWAME: Don't say it.
60 D TEO: It's the wheel. It's coming back on.
61 D BRONWYN: Or it's the other thing.
62 D SAMIRA: What other thing?
63 D KWAME: There's no other thing.
64 D HIRO: There is always another thing.
* 65 A ¶ The car lurches.
* 66 A A hiss, a clunk.
* 67 A The lights stutter on.
* 68 A Motor whirs.
69 D TEO: YES!
70 D ASTRID: Oh thank God.
71 D SAMIRA: Hiro, you did it.
72 D HIRO: The song did it.
* 73 A ¶ The gondola begins to move.
* 74 A Slow.
* 75 A Steady.
* 76 A Toward the lit station.
77 D BRONWYN (low, to Kwame): Funny. It's going the wrong way.
78 D KWAME (looking out): That's not the station.
* 79 A ¶ The lights ahead are a ranger hut.
* 80 A A single window.
81 A A figure with a rifle.
82 D SAMIRA: Kwame?
83 D KWAME (quiet): Nobody say anything.

### SCENE s00730 | INT. WIZARD'S ABANDONED LIBRARY - TWILIGHT
Detected names (may be incomplete or contain aliases): ORRIN THISTLEDOWN
* 1 A ¶ A circular chamber at the top of a leaning tower.
* 2 A Shelves spiral to a ceiling lost in cobweb.
* 3 A Dust hangs in the last red light from a cracked rose window.
* 4 A On a lectern in the centre lies an enormous book, its pages stirring though there is no wind.
* 5 A ¶ The silence is old and settled.
* 6 A ¶ A heavy door groans.
* 7 A Boots on stone.
8 A ¶ ORRIN THISTLEDOWN, sixties, a thin man in a patched travelling cloak, enters leaning on a gnarled staff.
9 A He is breathing hard from the stairs.
10 A A wiry grey beard, spectacles tied with twine.
11 A He pauses, taking in the room as one takes in a grave.
12 D ORRIN (softly): Well. You kept it tidy, old friend.
13 A ¶ He crosses to the lectern.
14 A Brushes dust from the open page with the back of his hand.
15 A Reads.
16 A His lips move.
17 A ¶ From his satchel he draws a folded letter, brown at the edges.
18 A He smooths it on the lectern beside the book.
19 D ORRIN [V.O.] (reading the letter, in his younger voice): "Orrin, if you read this, I am gone, and the tower is yours. The book will not open for anyone but you. Do not be afraid of it. It is only lonely."
20 A ¶ Orrin lowers the letter.
21 A He looks up at the rose window, where the last sun is bleeding out.
22 D ORRIN [CONT'D] (to the book): Lonely. Aye. So are we.
23 A ¶ He sets his staff against the shelves, rolls up his sleeves, and turns the first page.
* 24 A A faint golden glow rises from the paper and catches in his spectacles.
25 D ORRIN [CONT'D] (a small, wondering laugh): There you are.
* 26 A ¶ The pages begin to turn on their own, one after another, patient as breathing.
27 A Orrin pulls up a stool and sits.

### SCENE s00731 | INT. FUNICULAR TICKET HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): LOLA ITURBE, JULIAN ASANTE-WRIGHT
* 1 A ¶ Closed for the season.
* 2 A Rain on the glass.
* 3 A A brass ticket machine.
* 4 A A space heater ticking orange.
5 A ¶ LOLA ITURBE, thirties, wool coat, soaked hair, sits on the counter with a thermos.
6 A Alone.
7 A She stares at the dead cable car through the window.
8 A ¶ She sips.
9 A Checks her watch.
10 A Sips.
* 11 A ¶ The door BANGS open.
* 12 A Wind.
* 13 A Wet leaves.
14 A ¶ JULIAN ASANTE-WRIGHT, late thirties, rain-slicked trench, a suitcase in one hand.
15 A He stops dead.
16 D JULIAN: You're not supposed to be here.
17 D LOLA: Neither are you.
18 A ¶ He shuts the door.
19 A It takes two tries.
20 A She watches him fight it.
21 A He doesn't say thanks.
22 D JULIAN: The last train left at nine.
23 D LOLA: Eight forty.
24 D JULIAN: Eight forty.
25 A ¶ He sets the suitcase on the floor.
26 A Looks at the heater.
27 A She slides the thermos along the counter.
28 A He doesn't take it.
29 D JULIAN [CONT'D]: Is that coffee?
30 D LOLA: Tea.
31 D JULIAN: Right.
32 A ¶ He takes it.
33 A Sips.
34 A Grimaces.
35 D JULIAN [CONT'D]: That's awful.
36 D LOLA: It's chamomile. It's meant to be.
37 A ¶ She smiles.
38 A Barely.
39 A He almost does.
40 A ¶ He sits on the bench by the wall.
41 A She stays on the counter.
* 42 A Rain drums.
43 D JULIAN: How long have you been here?
44 D LOLA: Since six.
45 D JULIAN: Why?
46 D LOLA: I had a ticket.
47 D JULIAN: For the nine o'clock?
48 D LOLA: For the one last year.
49 A ¶ He looks at her.
50 A Slowly she takes a crumpled ticket from her pocket.
51 A Holds it up, a stub, brown at the corners.
52 A ¶ He recognises it.
53 A His jaw tightens.
54 D JULIAN: Lola.
55 D LOLA: You never came.
56 D JULIAN: I wrote.
57 D LOLA: You wrote a postcard. Of a lighthouse.
58 D JULIAN: It was a nice lighthouse.
59 A ¶ She laughs, short and sharp.
60 A He doesn't.
61 D LOLA: It's a year, Julian. A year since I stood on that platform.
62 D JULIAN: I know.
63 D LOLA: No, you don't. You were in Lisbon.
64 D JULIAN: I was in a hospital.
* 65 A ¶ Silence.
* 66 A The heater ticks.
67 D LOLA: What?
68 D JULIAN: My mother. She had a stroke the night before. I couldn't--
69 D LOLA: You never said.
70 D JULIAN: You never asked.
71 A ¶ She slides off the counter.
72 A Crosses to him.
73 A He stands.
74 D LOLA: I waited here. Alone. I thought you'd--
75 D JULIAN: Stop.
76 D LOLA: I thought you'd chosen not to--
77 D JULIAN: Lola, stop.
78 A ¶ She doesn't.
79 A He steps closer.
80 A Her hands are shaking.
81 A So are his.
82 D LOLA: You could have called.
83 D JULIAN: She was dying. I was holding her hand!
84 D LOLA (louder): And I was holding a ticket!
* 85 A ¶ The words hang.
* 86 A Rain slams the glass.
87 A Both breathe hard.
88 A ¶ He reaches out.
89 A She slaps his hand away.
90 A He catches her wrist anyway.
91 A Neither pulls back.
92 D JULIAN: She's alive.
93 D LOLA (stunned): What?
94 D JULIAN: She recovered. She asks about you every week.
95 A ¶ Lola's face crumples.
96 A She sags against him, forehead to his collar.
97 A His arms close around her.
* 98 A The suitcase tips over.
99 A Neither notices.
100 D LOLA (muffled): Idiot.
101 D JULIAN: Yes.
102 A ¶ He rests his chin on her hair.
103 A She grips his coat in both fists.
* 104 A ¶ The funicular lights flicker.
* 105 A A distant mechanical hum starts up.
* 106 A The cable car, far above, begins to move.
107 A ¶ They both lift their heads and stare.
108 D JULIAN [CONT'D]: That's not scheduled.
109 D LOLA (wiping her face): Then let's see where it goes.

### SCENE s00732 | EXT. OPEN OCEAN - INFLATABLE DINGHY - DAY
Detected names (may be incomplete or contain aliases): GUNNAR PEDERSEN, FELIX ODUYA, TARIQ MANSOOR
* 1 A ¶ A grey swell lifts the orange raft and lets it fall again, patient as a hand.
* 2 A The sky has no edges.
3 A Three men lie in the bottom of the boat like fish nobody wanted.
4 A ¶ GUNNAR PEDERSEN, fifties, sunburnt to the colour of brick, tends a bailing cup.
5 A FELIX ODUYA, thirties, the youngest, stares at his own cracked palms.
6 A TARIQ MANSOOR, forties, the engineer, sits upright against the pontoon with the last water jug cradled in his lap.
7 D GUNNAR (hoarse): Give him some.
8 D TARIQ: He had his share.
9 D GUNNAR: He is shaking.
10 D TARIQ: He is cold. He is not thirsty.
11 A ¶ Felix lifts his head.
12 A His lips are split.
13 D FELIX: I can hear it. Listen. A motor.
14 A ¶ Gunnar and Tariq both go still.
* 15 A Wind.
* 16 A Slap of water on rubber.
* 17 A Nothing.
18 D TARIQ: You hear the sea.
19 D FELIX: It's a motor.
20 A ¶ He lurches to his knees, rocking the raft.
21 A Gunnar grabs the rope.
22 A Tariq clutches the jug.
23 A Felix stands, arms high, waving at the empty horizon, shouting a name nobody recognises.
24 D GUNNAR: Sit, boy. Sit.
25 A ¶ Felix collapses.
* 26 A The jug tilts.
* 27 A A mouthful of water spills across Tariq's knees.
28 A He stares at it, soaking into the cloth.
29 A Then, very slowly, he lifts the jug and offers it across the raft.
30 A His hand shakes.
31 A He is not looking at either of them.
32 D TARIQ (quietly): Drink.

### SCENE s00733 | INT. SALT MINE - SEALED CHAMBER, DEPTH 600 FEET - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): FOREMAN AUGUSTIN BRANDT, PETRU VASILE, HANNELORE KRUG, JIN-HO PARK, MBALI DLAMINI
* 1 A ¶ A cathedral of white.
* 2 A Walls of rock salt rise forty feet, glittering where the lamps touch them.
* 3 A Iron rails vanish into a black tunnel to the east, now choked with rubble.
* 4 A The air is dry as paper.
5 A ¶ FOREMAN AUGUSTIN BRANDT, fifties, broad as a doorway, stands with his back to the rubble, his lamp swinging.
6 A Around him, four miners have gathered: young PETRU VASILE, nineteen, still clutching a lunch tin; veteran HANNELORE KRUG, sixties, a woman with a face like a closed fist; JIN-HO PARK, thirties, the surveyor, unrolling a map; and the new hire, MBALI DLAMINI, twenties, who has not yet been told she is useful.
7 D AUGUSTIN (evenly): We are not in danger. We are in a pause.
8 D PETRU: How long is a pause?
9 D AUGUSTIN: Until they dig.
10 D JIN-HO: The east shaft is gone. But the old ventilation line runs north.
11 D HANNELORE: Old is the word.
12 D JIN-HO: I'm only saying it exists.
13 A ¶ Mbali sets her pack down.
14 A Takes out a thermos.
15 A Sets it on a salt block.
16 A Her hand does not shake, and the others notice it does not.
17 D MBALI: There's water for three days if we're careful.
18 D AUGUSTIN: Three days is plenty.
19 A ¶ He smiles.
20 A It does not reach his eyes.
21 A Hannelore sees it.
22 A Jin-ho sees her seeing.
23 A ¶ Petru offers his lunch tin around.
24 A Everyone declines.
25 A He tucks it back in his jacket and pats it twice, as if it were a pet.
* 26 A ¶ Behind them, a low crack.
* 27 A A thin seam opens in the wall.
* 28 A Salt dust drifts like snow.
29 A All five heads turn.
30 A All five stop breathing.
31 D AUGUSTIN [CONT'D] (too light): That's the rock settling.
32 D HANNELORE: Rock does not settle at six hundred feet.
33 D JIN-HO: It does if it's being told to.
34 A ¶ They scatter, five lamps flinching in five directions, then regroup at the far wall.
35 A Mbali is the first to speak.
36 D MBALI: Foreman. How many were in the east tunnel when it came down?
37 A ¶ Augustin looks at her.
* 38 A The seam widens, a soft hiss of wind from somewhere that should not have wind.
39 D AUGUSTIN: Eight.
* 40 A ¶ Silence.
41 D PETRU: But we counted five.
42 D AUGUSTIN (quiet): Yes.
43 A ¶ Hannelore takes a slow step back.
* 44 A Mbali's lamp catches the seam.
45 A Behind it, something pale shifts, and a hand, human, reaches out and curls around the salt.

### SCENE s00734 | INT. SKI LODGE - IMPROVISED TRIAGE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELSPETH VANTERPOOL, WILLA PETTIGREW, NURSE BUNMI OYELARAN, JOAQUIM PINTO, STRANGER, DAMIAN
* 1 A ¶ Blizzard shakes the shutters.
* 2 A The dining hall has been cleared, tables pushed to the walls, a stretcher laid across the cloth of the nearest.
3 A DR. ELSPETH VANTERPOOL, fifties, in a borrowed fleece, leans over WILLA PETTIGREW, thirties, a skier with a deformed shin who clenches a lodge napkin in her teeth.
4 A NURSE BUNMI OYELARAN, twenties, cuts the ski boot with trauma shears while ski patroller JOAQUIM PINTO, forties, braces Willa's shoulders and murmurs nonsense about the weather.
5 A ¶ In the corner, a STRANGER in a soaked parka stands by the fireplace.
6 A Nobody asked him in.
7 A He watches the leg, not the face.
8 D ELSPETH: Pulse in the foot?
9 D BUNMI: Faint.
10 D JOAQUIM: She's going white.
11 D ELSPETH: Joaquim, keep her talking. Bunmi, traction splint.
12 A ¶ The Stranger steps forward, takes the splint from the cabinet, and unfolds it in one smooth motion.
13 A Bunmi blinks.
14 A Elspeth glares.
15 D ELSPETH [CONT'D]: Who the hell are you?
16 D STRANGER: Damian Kowalczyk. Paramedic. Truck's buried at the pass.
17 A ¶ He kneels.
18 A Elspeth studies him a second, nods once, and shifts her hands to make room.
19 A Willa spits out the napkin.
20 D WILLA: Is he going to cut it off?
21 D DAMIAN: No. I'm going to pull. You're going to hate me.
22 A ¶ Together the three of them lock the leg and take the weight.
* 23 A The room holds its breath.

### SCENE s00735 | INT. MINIVAN - INSIDE AN AUTOMATIC CAR WASH TUNNEL - DAY
Detected names (may be incomplete or contain aliases): DESMOND, PRU, ROXY, POP-POP
* 1 A ¶ Dark suds slide down the windshield in sheets.
* 2 A Blue light, pink light, a roar of brushes.
3 A The Okafor-Lindgren family sits sealed inside a rocking cocoon: DESMOND, fifties, gripping the wheel at ten and two though the van is on rails; his wife PRUDENCE "PRU", fifties, turned sideways in the front seat; their daughter ROXANNE "ROXY", sixteen, wedged in back with her knees against her chest; and Pru's father BARTHOLOMEW "POP-POP", eighties, queen of the back seat, tucked in a plaid blanket and a hat.
4 D DESMOND: Nobody touch the doors.
5 D PRU: Nobody is touching the doors.
6 D ROXY: Mom, I'm literally nowhere near the doors.
7 D POP-POP: Is it raining?
8 D PRU: No, Daddy, it's a car wash.
9 D POP-POP: Whose car?
10 D DESMOND: Ours.
11 D POP-POP: I thought it was Desmond's.
12 D DESMOND: It is mine. Ours. It's our car.
13 D ROXY: Pop-Pop, you've been in a car wash before.
14 D POP-POP: Not with a family in it.
15 D PRU: Desmond, the foam's coming in the vent.
16 D DESMOND: It is not coming in the vent.
17 D ROXY: It's coming in the vent.
18 D DESMOND: Roxy, don't help.
19 D ROXY: I'm not helping, I'm reporting.
20 D POP-POP: Roxanne, you look like your grandmother when you frown.
21 D ROXY: Is that good?
22 D POP-POP: She frightened me in the nineteen-sixties and I married her.
23 D PRU: Daddy, we've heard.
24 D DESMOND: Pru, tell your father not to say "frightened me" while I'm in a tunnel.
25 D PRU: He can say what he wants.
26 D POP-POP: I'm eighty-four.
27 D ROXY: You're eighty-four and you're the reason we're in here. You said the van smelled like soup.
28 D POP-POP: It did smell like soup.
29 D DESMOND: It smelled like Pru's lasagne.
30 D PRU: Excuse me?
31 D DESMOND: I like the lasagne!
32 D PRU: You said it smelled.
33 D DESMOND: Everything smells! It's a van!
34 D ROXY: Dad, the sign says "Put in neutral."
35 D DESMOND: I know what it says.
36 D PRU: Are you in neutral?
37 D DESMOND: I am in neutral.
38 D POP-POP: Is it neutral?
39 D DESMOND: It's neutral, Bartholomew.
40 D POP-POP: Don't take that tone.
41 D ROXY: Dad, you're supposed to be in neutral and also not touching the brakes.
42 D DESMOND: I'm not touching the brakes!
43 D PRU: Your foot is on the brake.
44 D DESMOND: My foot is hovering.
45 D ROXY: Hovering on the brake.
46 D POP-POP: Is that why the brushes are stuck?
* 47 A ¶ Everyone falls silent.
* 48 A The brushes slap the roof, steady, thudding, oddly intimate.
49 D PRU (softly): Desmond.
50 D DESMOND: It's fine.
51 D ROXY: Is it fine?
52 D DESMOND: It's fine!
* 53 A ¶ The brushes lift.
* 54 A A wave of warm air blows through the tunnel.
55 A Pop-Pop begins to laugh, a wheeze that grows and grows, and one by one the others join him, helpless, water running down the glass.

### SCENE s00736 | INT. HEDGE-WITCH'S COTTAGE - KITCHEN - EVENING
Detected names (may be incomplete or contain aliases): SERAPHINA QUILL
* 1 A ¶ A low-beamed room.
* 2 A Bunches of dried thyme and nettle hang from the rafters.
* 3 A A kettle sings on a cast-iron stove.
* 4 A Through a small window, an orchard is going dark.
5 D SERAPHINA [O.S.] (from upstairs, annoyed): I know you are in there! I can hear you chewing!
* 6 A ¶ Thumping on the stairs.
7 A SERAPHINA QUILL, seventies, small and broad, in a flour-dusted apron, stumps into the kitchen with a broom in one hand.
8 A She stops.
* 9 A The kitchen is empty.
10 A She looks under the table, behind the door, in the wood-bin.
11 A ¶ She scowls.
12 A She lowers the broom.
13 D SERAPHINA: Fine. Keep it.
14 A ¶ She goes to the stove and moves the kettle off the heat.
15 A She finds a clay cup on the shelf and pours something dark and steaming.
16 A She drinks.
17 A She pulls a stool to the table and sits heavily.
18 A ¶ Her eyes drift to a stoppered bottle on the sill.
* 19 A Inside, a pale blue light pulses once, then dims.
20 A She watches it for a while.
21 D SERAPHINA [CONT'D] (quietly): Thirty years, you stubborn thing.
22 A ¶ She takes the bottle down and holds it in both hands.
* 23 A The light brightens at her touch.
24 A She smiles, tired but real.
25 D SERAPHINA [CONT'D]: Go on, then. I'm too old to keep a ghost in a bottle.
26 A ¶ She pulls the stopper.
* 27 A The blue light drifts out in a slow curl, circles the kitchen once, kisses the dried thyme, and slips through the glass of the window into the dusk.
28 A ¶ She sits there until the cup has gone cold.
29 A Then she gets up, wipes her hands on her apron, and starts to chop an onion.

### SCENE s00737 | INT. FAMILY HOME - DINING ROOM - AFTER THE FUNERAL
Detected names (may be incomplete or contain aliases): AUGUSTINE PELLEGRINI, PHILIPPA
* 1 A ¶ Casserole dishes crowd the long walnut table, foil peeled back, forks standing in them like flags in captured ground.
* 2 A The guests have gone.
* 3 A Only the photographs remain, a hundred faces watching from the sideboard.
4 A ¶ AUGUSTINE PELLEGRINI, seventies, stiff in his black suit, stands at the head of the table counting plates.
5 A His daughter PHILIPPA, forties, leans in the doorway still wearing her coat and her black gloves, keys in her fist like a dagger.
6 D AUGUSTINE (to the room, brightly): Thank you all for coming. Truly. Your kindness is a comfort.
7 D PHILIPPA: Dad. They've left.
8 D AUGUSTINE (to the photographs): Eddie, will you have more of the ham?
9 A ¶ Philippa pulls her gloves off one finger at a time.
10 A Her father stacks two plates, sets down a third, picks up a fourth, and arranges them in a tower that shivers under his shaking hand.
11 A She crosses to him.
12 A He steps aside, and she takes the stack and slides it back onto the table.
13 A He takes it again.
14 A She takes it back.
15 A They stand, hands on china, eye to eye, neither letting go.
16 D PHILIPPA: She isn't coming home, Dad.
17 D AUGUSTINE (softly, to himself): Two years of pills in the green bowl.
18 D PHILIPPA: Dad.
19 D AUGUSTINE: You were in Denver!
* 20 A ¶ The plates slip.
* 21 A They crash.
22 A The sound rolls through the house and out into the quiet street, and neither of them moves to pick up a single shard.

### SCENE s00738 | EXT. HOT-AIR BALLOON BASKET - 2,000 FEET - SUNRISE
Detected names (may be incomplete or contain aliases): GERALDINE PLUMMER, PERCIVAL
* 1 A ¶ A wicker basket the size of a closet drifts over a patchwork of farmland.
* 2 A Gold light.
* 3 A Cows like grains of rice.
4 A ¶ GERALDINE PLUMMER, sixties, floral scarf, holds a flask of champagne.
5 A Her husband PERCIVAL, sixties, straw hat, grips the burner cord with the stiff calm of a man who doesn't know what it does.
6 D GERALDINE: It's lovely.
7 D PERCIVAL: It is.
8 D GERALDINE: Forty years, and you finally took me up.
9 D PERCIVAL: Forty-one.
10 D GERALDINE: Forty-one.
11 A ¶ She pours two paper cups.
12 A They clink.
13 A They sip.
* 14 A Silence.
* 15 A The burner hisses.
16 D PERCIVAL: Geraldine. There's something I should tell you.
17 D GERALDINE: Oh?
18 D PERCIVAL: The pilot didn't come.
19 D GERALDINE: What do you mean?
20 D PERCIVAL: The man at the field. He had a cold. He said, "You can manage."
21 D GERALDINE: Percival.
22 D PERCIVAL: I read the manual.
23 D GERALDINE: Percival!
24 D PERCIVAL: It's a very short manual.
* 25 A ¶ The basket tilts.
* 26 A A gust.
27 A Geraldine grabs the rope.
28 D GERALDINE: How do we land?
29 D PERCIVAL: It says: "Gently."
30 D PERCIVAL: Don't panic!
31 D GERALDINE: I'm not panicking!
32 A ¶ They both scream as the balloon lurches toward a barn.

### SCENE s00739 | EXT. ALPINE BIVOUAC LEDGE - NIGHT
Detected names (may be incomplete or contain aliases): LUCIEN DUMONT, ODALYS FERRAND
* 1 A ¶ A narrow shelf of rock, two thousand feet above a sleeping valley.
* 2 A Snow hisses against a tiny orange tent pitched at an angle that argues with gravity.
* 3 A A stove burns blue.
4 A ¶ LUCIEN DUMONT, forties, bearded, ice in his moustache, stirs a pot of soup.
5 A Beside him, ODALYS FERRAND, thirties, wrapped in a sleeping bag, her knees drawn up, sips from a battered tin mug.
6 D ODALYS: It's quiet, Lucien.
7 D LUCIEN: Too quiet, Oddy?
8 D ODALYS: No. Just quiet.
9 D LUCIEN: Good. We deserve it.
10 A ¶ He ladles soup into her mug.
11 A She smiles, small and grateful.
12 A They sit watching the stars come out above the ridge.
* 13 A Far below, tiny lights flicker in a village.
14 D ODALYS: Tomorrow, the summit.
15 D LUCIEN: Tomorrow, the summit.
16 D ODALYS: And a hot bath.
17 D LUCIEN: And a hot bath.
18 A ¶ She leans her head on his shoulder.
19 A He lets her.
* 20 A For a moment, nothing in the world is wrong.
* 21 A ¶ Then a thin hiss.
* 22 A Not the stove.
23 A Odalys lifts her head.
24 A Lucien freezes, ladle in the air.
25 A Both listen.
* 26 A The ice above them creaks.
27 D ODALYS: Lucien--
28 D LUCIEN: Don't move.
29 A ¶ They both look up.
* 30 A A crack runs across the overhang, bright and fine as a hair.
31 D LUCIEN: We have to go.
32 D ODALYS: We have to go.
33 A ¶ They scramble.
34 A He grabs the rope, she grabs the pack.
* 35 A The tent lurches.
* 36 A Soup spills, hissing on the stove.
37 D LUCIEN [CONT'D]: Clip in! Clip in, Oddy!
38 D ODALYS: I'm clipped, I'm clipped!
39 A ¶ They tumble out of the tent together and dive into the snow at the ledge's edge as the overhang breaks free and thunders past.
* 40 A The tent is gone in a white roar.
* 41 A ¶ The avalanche dies into silence.
42 A They lie panting, tangled in the rope, their breath mingling in clouds.
43 D ODALYS [CONT'D] (a shaky laugh): Well. That was quiet.
44 D LUCIEN (laughs too): Very.

### SCENE s00740 | INT. SYNERGY CLOSET - OFFICE SUPPLY ROOM - DAY
Detected names (may be incomplete or contain aliases): MORTIMER GRAY, LAKSHMI IYER, DUNCAN OKORO
* 1 A ¶ A converted broom closet with a laminated sign reading SYNERGY CLOSET: THINK BIG.
* 2 A Shelves of sticky notes and toner.
3 A Three colleagues stand shoulder to shoulder with nowhere to put their elbows: MORTIMER GRAY, fifties, regional director; LAKSHMI IYER, thirties, project lead; DUNCAN OKORO, twenties, intern.
4 D MORTIMER: Right. Let's circle back on the circle-back.
5 D LAKSHMI: We circled back last week.
6 D MORTIMER: And what did we learn?
7 D LAKSHMI: That we should circle back.
8 D DUNCAN: Sorry, can I ask what the project is?
9 D MORTIMER: The project is alignment.
10 D DUNCAN: Aligned with what?
11 D MORTIMER: With the vision.
12 D LAKSHMI: Which is?
13 D MORTIMER: It's in the deck.
14 D LAKSHMI: The deck is forty slides and slide nine is a picture of a canoe.
15 D MORTIMER: It's a metaphor.
16 D DUNCAN: For what?
17 D MORTIMER: For paddling.
18 D LAKSHMI: Together.
19 D MORTIMER: Exactly. Thank you, Lakshmi.
20 D DUNCAN: I thought we were going to cancel the thing.
21 D MORTIMER: What thing?
22 D DUNCAN: The thing that the other thing replaced.
23 D LAKSHMI: Duncan, that was the original thing.
24 D DUNCAN: Oh.
25 D MORTIMER: We don't cancel things. We sunset them.
26 D LAKSHMI: Sunset them how?
27 D MORTIMER: Gently. With a runway.
28 D DUNCAN: What's at the end of the runway?
29 D MORTIMER: Another meeting.
30 D LAKSHMI: Of course it is.
31 D DUNCAN: Do you have to be in the closet for this?
32 D MORTIMER: The conference room is booked.
33 D LAKSHMI: For what?
34 D MORTIMER: A meeting about the closet.
35 D DUNCAN: I need to get toner.
36 D MORTIMER: Take whatever you need. This is a safe space.
37 D LAKSHMI: It's a closet.
38 D MORTIMER: A safe closet.
39 D DUNCAN: Is anyone writing this down?
40 D MORTIMER: No. That's the beauty of it.

### SCENE s00741 | INT. RAILWAY WAITING ROOM - NIGHT (1884)
Detected names (may be incomplete or contain aliases): HARRIET COLLINGWOOD, MAN, ELIAS
* 1 A ¶ A cold hall of benches and a cast-iron stove.
* 2 A Gaslight hisses.
* 3 A Snow has stopped the last train.
4 A ¶ MRS. HARRIET COLLINGWOOD, sixties, in black bombazine, knits by the stove.
5 A A MAN in a worn greatcoat sits on the far bench, hat low, a carpetbag between his boots.
6 D MAN: Good evening, ma'am.
7 D HARRIET: It is not, sir. It is snowing.
8 D MAN: So it is.
9 A ¶ She knits.
* 10 A The needles click.
11 A He rubs his hands.
12 D MAN [CONT'D]: Are you waiting for the Dover connection?
13 D HARRIET: I am waiting for my nephew. He is meant to meet me.
14 D MAN: In this?
15 D HARRIET: He is a very unreliable young man.
16 A ¶ The man laughs, a short warm sound.
17 D HARRIET [CONT'D]: And you, sir? You have the look of a person who has been waiting longer than a night.
18 D MAN: Twenty years, ma'am. My name is Elias Fairchild.
19 A ¶ Harriet's needles stop.
20 A She looks up for the first time.
21 D HARRIET: Fairchild. You are Charles's brother.
22 D ELIAS: I am.
23 D HARRIET: He spoke of you with great bitterness.
24 D ELIAS: He had cause.
25 A ¶ She resumes knitting.
26 A After a moment she pats the bench beside her.
27 A Elias crosses the hall and sits.

### SCENE s00742 | INT. COUNTY COURTHOUSE - ATTORNEY-CLIENT ROOM - MORNING
Detected names (may be incomplete or contain aliases): ARTEMIS CROSS, ROLLY, PEARCE
* 1 A ¶ A grey cube.
* 2 A Metal table.
* 3 A Two chairs.
* 4 A A buzzing fluorescent.
5 A ¶ ARTEMIS CROSS, forties, public defender, sits with a thick file, pen clicking.
6 A She doesn't look up.
* 7 A ¶ The door buzzes and swings open.
* 8 A Chains.
* 9 A A shuffle.
10 A ¶ ROLLAND "ROLLY" PEARCE, twenties, county orange, cuffs front, wide shoulders, thin voice, enters.
* 11 A The door slams behind him.
12 D ARTEMIS: Sit down, Rolly.
13 D ROLLY: Ms. Cross.
14 D ARTEMIS: Artemis is fine.
15 D ROLLY: Ms. Cross is fine.
16 A ¶ He sits.
17 A She slides a photograph across the table.
18 A He doesn't look at it.
19 D ARTEMIS: Do you know that man?
20 D ROLLY: No.
21 D ARTEMIS: He says he knows you.
22 D ROLLY: People say things.
23 D ARTEMIS: He said you were at the Dockside on the twelfth.
24 D ROLLY: I was home.
25 D ARTEMIS: Alone?
26 D ROLLY: With my cat.
27 D ARTEMIS: Rolly, the cat can't testify.
28 D ROLLY: Then you're in trouble.
29 A ¶ She stops clicking.
30 A Locks eyes with him.
31 D ARTEMIS: Listen to me. The DA offers eight years. Eight, Rolly. If we go to trial and lose, it's twenty.
32 D ROLLY: And if we win?
33 D ARTEMIS: You walk.
34 D ROLLY: Then we win.
35 D ARTEMIS: That's not how it works.
36 D ROLLY: That's how I want it to work.
37 A ¶ She flips a page.
38 A Reads.
39 A Turns another.
40 D ARTEMIS: The man in the photo recanted this morning.
41 D ROLLY (straightening): What?
42 D ARTEMIS: The witness changed his story.
43 D ROLLY: That's good.
44 D ARTEMIS: It's complicated, because someone leaned on him. And I think you know who.
45 A ¶ Rolly stares at the table.
* 46 A The fluorescent buzzes.
47 D ROLLY: Ms. Cross. If I say a name, can you keep it in this room?
48 D ARTEMIS: That's the whole point of the room.
49 A ¶ He leans forward.
50 A She lays down the pen.

### SCENE s00743 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): NKIRU EZEIGBO, WYATT MERRIWEATHER, TOMASZ KOWAL, JUDGE REYNOSO
* 1 A ¶ Stainless steel.
* 2 A Mirrored door.
* 3 A Four floors of descent.
4 A ¶ NKIRU EZEIGBO, thirties, defence attorney, bangs her briefcase against her knee.
5 A WYATT MERRIWEATHER, forties, prosecutor, studies the floor numbers.
6 A TOMASZ KOWAL, fifties, bailiff, keeps both hands on his belt.
* 7 A ¶ The car shudders.
* 8 A Lights flicker.
* 9 A The elevator stops between floors.
10 D NKIRU: Of course.
11 D WYATT: It does this.
12 D TOMASZ: Fourth time this month.
* 13 A ¶ Nkiru's cell phone buzzes.
14 A She answers on speaker.
15 D JUDGE REYNOSO [V.O.] (over phone): Counsel. Where are you?
16 D NKIRU: Stuck, Your Honour.
17 D JUDGE REYNOSO [V.O.]: Both of you?
18 D WYATT: Mr. Kowal is with us.
19 D JUDGE REYNOSO [V.O.]: I'm calling the jury. You have ten minutes.
20 D NKIRU: Wyatt, we need to settle.
21 D WYATT: I know.
22 D NKIRU: Then why did you reject my offer?
23 D WYATT: Because you didn't make one.
24 D NKIRU: I'm making one now.
25 D WYATT: I'm making one now.
* 26 A ¶ Silence.
27 A They glare at each other in the mirror.
28 D TOMASZ: For what it's worth, I'd take it.
* 29 A ¶ Lights return.
* 30 A The elevator drops with a lurch.
31 A All three grab the rail.

### SCENE s00744 | INT. NORMANDY FARMHOUSE - CELLAR - NIGHT (1944)
Detected names (may be incomplete or contain aliases): MARGUERITE LEBLANC
* 1 A ¶ Stone steps.
* 2 A Sacks of seed potatoes.
* 3 A Wine racks lie smashed.
* 4 A A single oil lamp throws a trembling circle on the floor.
* 5 A Above, the rhythmic thud of distant artillery sifts dust from the beams.
6 A ¶ MARGUERITE LEBLANC, thirties, war correspondent, trench coat torn at the shoulder, kneels over a wire recorder balanced on a crate.
7 A Her hands are steady.
8 A Her face is not.
9 A ¶ She threads the wire through the reel.
10 A Listens upward.
11 A Threads it again.
12 A ¶ She presses the record lever.
* 13 A A red light glows.
14 D MARGUERITE (into the microphone, low): This is Marguerite LeBlanc. The ninth of June, nineteen forty-four. I am in a cellar outside Carentan. The Germans are in the next field.
* 15 A ¶ A shell lands close.
* 16 A Dust rains.
17 A She flinches, covers the recorder with her body, then straightens.
18 D MARGUERITE [CONT'D] (into the microphone): They have been shelling for six hours. I have no food. I have a notebook and this machine.
19 A ¶ She stops.
20 A Rewinds.
21 A Plays it back.
22 D MARGUERITE [V.O.] (from the machine, tinny): "...I have no food. I have a notebook and this machine."
23 A ¶ She grimaces.
24 A Presses stop.
25 A Presses record again.
26 D MARGUERITE [CONT'D] (into the microphone): Correction. I have a notebook, this machine, and half a tin of sardines.
27 A ¶ A wry twist of her mouth.
28 A She opens the tin with her penknife.
29 A Eats one fish with her fingers.
* 30 A ¶ Upstairs, a door BANGS.
* 31 A Boots on boards.
32 A She goes still.
33 A She slides the tin under the crate.
34 A She extinguishes the lamp with her palm.
* 35 A ¶ Darkness.
* 36 A Only the faint red glow of the recorder.
37 A She smothers it with her coat.
* 38 A ¶ Boots cross the floor above, step by step.
* 39 A Dust trickles.
40 A Her breath is shallow and quick.
* 41 A ¶ The boots stop directly overhead.
* 42 A A floorboard creaks.
43 A She does not move.
44 A She does not blink.
45 A ¶ A voice mutters in German.
46 A A second answers, lower.
47 A A laugh.
48 A The boots move away toward the front door.
49 A ¶ She exhales, long and slow.
50 A Lifts the coat.
* 51 A The recorder's red eye glows, defiant.
52 A ¶ She relights the lamp with trembling fingers.
53 A She pulls the microphone to her mouth.
54 D MARGUERITE [CONT'D] (whispering): They have gone. For now.
55 A ¶ She winds the wire back.
56 A Plays.
57 D MARGUERITE [V.O., CONT'D] (from the machine): "They have gone. For now."
58 A ¶ She stares at the spinning reel.
59 A Then she reaches for her notebook and begins to write, fast, the pencil scratching in time with the shells.
* 60 A ¶ Another shell lands.
* 61 A Closer.
* 62 A Plaster falls from the ceiling and settles in her hair.
63 A ¶ She keeps writing.
64 D MARGUERITE [CONT'D] (into the microphone, steady): The cellar door is the only way out. It is locked from the outside.
65 A ¶ She stops.
66 A Looks at the stairs.
* 67 A The top step is bright with a thin line of lamplight from under the door.
68 A ¶ She rises, climbs three steps, and tests the handle.
* 69 A It does not give.
70 D MARGUERITE [CONT'D] (to herself): Naturally.
71 A ¶ She descends.
72 A Sits again at the recorder.
73 A Presses record.
74 D MARGUERITE [CONT'D] (into the microphone): If this recording is found, please send it to the Daily Courier, London. Tell them I filed on time.
75 A ¶ She smiles at that.
* 76 A It does not last.
* 77 A ¶ The ceiling groans.
* 78 A A crack runs along the central beam.
* 79 A Sand drips in a steady stream.
80 A ¶ She gathers the notebook and the reel into her satchel.
81 A She slings it across her chest.
82 A She climbs the stairs, braces her shoulder against the door, and shoves.
83 A Once.
84 A Twice.
* 85 A ¶ The wood creaks but holds.
86 A ¶ She steps back, breathing hard, and looks for something.
87 A Anything.
88 A Her eyes land on the broken wine rack.
89 A She grabs a splintered post.
90 A ¶ She wedges it under the latch.
91 A She leans her whole weight on it.
* 92 A ¶ The door cracks.
* 93 A Light spills down the steps.
94 A She shoves harder, teeth bared.
* 95 A ¶ The door gives.
96 A She tumbles into a kitchen with half a roof, and lies on the floor for one breath, two, in the red glow of a burning barn through the window.
97 A ¶ She sits up.
98 A Checks the satchel.
* 99 A The reel is intact.
100 D MARGUERITE [CONT'D] (a whisper, almost a laugh): Filed.
101 A ¶ She stands, pulls the coat tight, and walks out into the firelight.

### SCENE s00745 | INT. PLANETARIUM DOME - AFTER HOURS
Detected names (may be incomplete or contain aliases): IMOGEN VASSEUR, TAVIAN OKONJO
* 1 A ¶ The false sky hangs overhead, a hush of ten thousand painted stars.
* 2 A Reclined seats form concentric rings below.
* 3 A The projector at the centre hums like a sleeping animal.
4 A ¶ IMOGEN VASSEUR, thirties, in a green coat, sits in the third row with her shoes off, one foot tucked beneath her.
5 A Beside her, TAVIAN OKONJO, thirties, tie loosened, holds a paper bag of roasted chestnuts, steam curling from the top.
6 D TAVIAN: Orion.
7 D IMOGEN: That's Cassiopeia.
8 D TAVIAN: It has a belt.
9 D IMOGEN: It has a W.
10 A ¶ They laugh and reach into the bag at the same moment.
11 A Their hands collide inside it.
12 A They both freeze, fingers touching chestnut shells, the heat of the paper between them.
13 A Neither pulls away.
* 14 A ¶ Overhead, the sky rotates one degree.
* 15 A A meteor streaks across the dome, projected, perfect.
16 D IMOGEN [CONT'D] (softly): Tavian. I got the fellowship.
17 A ¶ His fingers loosen.
* 18 A The bag tilts.
* 19 A Chestnuts roll out across the seat and fall one by one into the dark.
20 A He does not catch them.
21 D TAVIAN: Where?
22 D IMOGEN: Santiago.
23 A ¶ They both look up at a sky that suddenly seems very large.

### SCENE s00746 | EXT. JUNGLE CLEARING - CRASHED BUSH PLANE - DAY
Detected names (may be incomplete or contain aliases): CORA, MALABANAN, IFEOMA NNADI, GRETCHEN HOLM
* 1 A ¶ The fuselage lies like a dead insect, one wing crumpled against a kapok tree.
* 2 A Steam rises from the earth.
* 3 A Insects drone.
4 A ¶ CORAZON "CORA" MALABANAN, forties, pilot, sits on the wing with her leg splinted in a map.
5 A IFEOMA NNADI, thirties, geologist, kneels at a stream, filling bottles.
6 A GRETCHEN HOLM, twenties, intern, paces with a hand over her mouth.
7 D CORA: Gretchen, sit.
8 D GRETCHEN: I can't.
9 D CORA: You can. You're just choosing not to.
10 D IFEOMA (from the stream): Water's clean. I tested it.
11 D GRETCHEN: How do you test water?
12 D IFEOMA: I drank a mouthful an hour ago. I'm still here.
13 D CORA: Practical.
14 D IFEOMA: Cora, how long until the beacon pings?
15 D CORA: Two days. Maybe three.
16 D GRETCHEN: Maybe four!
17 D CORA: Maybe four.
18 A ¶ Ifeoma crosses and hands Cora a bottle.
19 A Cora drinks and passes it to Gretchen, who drinks and hands it back, shaking.
20 D GRETCHEN: It's so quiet.
21 D IFEOMA: It isn't. Listen.
22 A ¶ They listen.
* 23 A The drone swells.
* 24 A Under it, something rhythmic.
* 25 A Wood on wood.
26 D CORA: That's a drum.
27 D GRETCHEN: Is that good?
28 D IFEOMA: Possibly.
29 D CORA: Possibly not.
30 A ¶ They look at each other.
* 31 A The drumming stops.
* 32 A A hush falls, absolute.
33 D GRETCHEN (whispering): What does that mean?
34 D CORA: It means they know we're here.
35 D IFEOMA: It means they've been watching us.
36 A ¶ Both women speak at once, voices overlapping.
37 A Gretchen backs toward the plane.
38 D GRETCHEN: Who are "they"?
* 39 A ¶ The bushes part.
40 A A line of figures in painted masks emerges silently.
41 A The three women stand shoulder to shoulder.
42 D CORA (low): Nobody run.

### SCENE s00747 | INT. VENDING MACHINE REPAIR DEPOT - WAREHOUSE FLOOR - MORNING
Detected names (may be incomplete or contain aliases): DELIA ACHTERBERG, NORBERT PIMM
* 1 A ¶ Rows of dead snack machines stand against the corrugated walls, dozens of glass faces glowing faintly with the light of nothing.
* 2 A A forklift idles in an aisle.
* 3 A The air smells of cold coffee and burnt wiring.
4 A ¶ DELIA ACHTERBERG, forties, in an orange safety vest two sizes too big, perches on a stool among the machines with a clipboard on her knee.
5 A She has been counting the same row for an hour.
6 A Her pen taps once for each machine, a metronome of grievance.
* 7 A ¶ The service door clangs open.
* 8 A Sunlight cuts across the floor.
9 A NORBERT PIMM, fifties, regional quality manager, enters in a pressed suit and shiny brogues, carrying a leather folio and the faint air of a man who has never once been in a warehouse.
10 A He stops.
11 A He sees the machines.
12 A He sees Delia.
13 A He smiles.
14 D NORBERT: Delia! There you are.
15 D DELIA (not looking up): Here I am.
16 D NORBERT: I come bearing news.
17 D DELIA: You always do.
18 A ¶ Norbert advances through the aisle, picking his way between puddles of oil, and sets the folio on a machine labelled OUT OF ORDER.
19 A Delia lifts her pen and sets it down on the clipboard without a sound.
20 A Norbert opens the folio, closes it, opens it again, and places a single sheet of paper in her lap.
21 D NORBERT [CONT'D]: Your position has been reclassified.
22 D DELIA: To what?
23 D NORBERT: Synergy Associate.
24 D DELIA: That's not a job.
25 D NORBERT: It's a journey.
26 A ¶ She stands.
* 27 A The clipboard slides to the floor.
28 A She takes a step toward him and he takes one back, bumping a machine, which dispenses a lone packet of crisps with a mechanical sigh.
29 A Both of them look at it in silence.
30 D DELIA (quietly): Eleven years, Norbert.
31 D NORBERT: And we value every one of them.
32 A ¶ She picks up the crisps.
33 A Tears the packet.
34 A Eats one, slowly, looking at him, and drops the empty bag at his feet.
35 D DELIA: That machine has been broken since 2019.
36 D NORBERT: Then it's an exciting time for it.
37 A ¶ Delia laughs, a low terrible sound, and then she is not laughing, and the forklift beeps in the distance like a heart monitor in the quiet.

### SCENE s00748 | INT. CORPORATE OFFICE - 31ST FLOOR - MORNING
Detected names (may be incomplete or contain aliases): HORTENSE BELLWEATHER, ARCHIBALD DRUMMOND
* 1 A ¶ An open-plan floor of the sort that wins architecture awards and loses employees.
* 2 A Glass walls.
* 3 A Beanbags nobody sits in.
* 4 A A kombucha tap that dispenses nothing.
5 A In the corner office, behind a desk the size of a landing strip, sits HORTENSE BELLWEATHER, fifties, in a charcoal suit and a necklace of tiny silver clocks.
6 A She has the posture of a woman who has survived four mergers.
* 7 A ¶ On the desk, a speakerphone the colour of an old tooth.
* 8 A Beside it, a cold cup of tea.
9 A ¶ She stares at the phone.
* 10 A It blinks green.
11 D HORTENSE: Archibald. Speak.
12 D ARCHIBALD [V.O.] (over speakerphone, jaunty): Hortense! Morning! Lovely morning. Are you looking out the window?
13 D HORTENSE: I'm looking at my screen.
14 D ARCHIBALD [V.O.]: Look out the window.
15 A ¶ She turns her chair.
16 A Across the plaza, in the opposing tower, a man in a cream suit waves from the thirty-first floor.
17 A ARCHIBALD DRUMMOND, sixties, silver hair, big teeth.
18 A He holds his own phone to his ear and waves with the other hand.
19 D HORTENSE: You moved your desk to face mine.
20 D ARCHIBALD [V.O.]: Corporate suggested "transparency."
21 D HORTENSE: Corporate suggested "dialogue."
22 D ARCHIBALD [V.O.]: Transparency is dialogue with glass.
23 A ¶ Hortense sets her tea down.
24 A She does not smile.
* 25 A The clocks on her necklace jingle.
26 D HORTENSE: What do you want?
27 D ARCHIBALD [V.O.]: A little chat. About the Henderson account.
28 D HORTENSE: The Henderson account is mine.
29 D ARCHIBALD [V.O.]: Is it?
30 D HORTENSE: I won it.
31 D ARCHIBALD [V.O.]: You did. In 2016.
32 A ¶ She taps a pen on the desk.
33 A Across the plaza, Archibald pulls a thick binder from a drawer and holds it up to the glass, like a magician showing an empty hat.
34 D HORTENSE: What's that?
35 D ARCHIBALD [V.O.]: The reorganisation.
36 D HORTENSE: I wasn't consulted.
37 D ARCHIBALD [V.O.]: You were cc'd.
38 D HORTENSE: On a Friday at five.
39 D ARCHIBALD [V.O.]: Best day for news.
40 A ¶ She rises and crosses to the window, pressing a hand to the cold glass.
* 41 A Down below, the plaza fountain is dry, its basin full of cigarette butts and coins.
* 42 A A pigeon bathes in the dust.
43 D HORTENSE: Under the plan, who reports to whom?
44 D ARCHIBALD [V.O.]: You report to me.
45 D HORTENSE: Say that again.
46 D ARCHIBALD [V.O.]: You. Report. To me.
47 A ¶ Hortense nods slowly.
48 A She returns to her chair.
49 A She picks up the speakerphone and brings it close, until her mouth is inches from the grille.
50 D HORTENSE: Archibald. How many years have you worked here?
51 D ARCHIBALD [V.O.]: Nineteen.
52 D HORTENSE: And how many have I?
53 D ARCHIBALD [V.O.]: Thirty-one.
54 D HORTENSE: Thirty-one. Do you know what I've learned?
55 D ARCHIBALD [V.O.]: That silence is golden?
56 D HORTENSE: That people with binders are afraid of people without them.
57 A ¶ Across the plaza, Archibald's smile flickers.
58 A He lowers the binder.
59 D ARCHIBALD [V.O.]: Hortense, this isn't personal.
60 D HORTENSE: It's the most personal thing in this building.
61 A ¶ She opens a drawer.
62 A Withdraws a single sheet of paper and a gold fountain pen.
63 A She uncaps the pen with a small, decisive click.
64 A She writes.
* 65 A The nib scratches.
66 A Across the way, Archibald leans forward, squinting.
67 D ARCHIBALD [V.O.]: What are you doing?
68 D HORTENSE: Redistributing.
69 A ¶ She holds the sheet to the window.
* 70 A Large block letters, readable even at forty yards: I RESIGN.
* 71 A EFFECTIVE IMMEDIATELY.
* 72 A TAKE THE KOMBUCHA.
73 A ¶ Archibald's mouth opens.
74 A The binder slips from his hands.
75 A He bends to retrieve it and bumps his head on the desk.
76 D ARCHIBALD [V.O.] (muffled, wincing): Hortense!
77 D HORTENSE: Goodbye, Archibald.
78 A ¶ She presses the button.
* 79 A The line clicks dead.
80 A She gathers her tea, her pen, and a single silver clock from the necklace, which she unhooks and places on the desk like a chess piece.
81 A ¶ Then she walks out, heels ringing on the polished floor, past the empty beanbags and the silent tap, and into the elevator.
82 A ¶ Across the plaza, Archibald presses his face to the glass.
* 83 A Behind him, the floor has gone very quiet.

### SCENE s00749 | INT. TAXIDERMIST'S WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): BASTIAN VOLKERS, SOLENE, MERIEL, ROYSTON, GIRL, PIA
* 1 A ¶ A long room of glass eyes.
* 2 A Foxes, owls, a stag with one antler snapped.
* 3 A Moonlight crawls over the benches.
* 4 A A power cut has stopped the wall clock at 2:14.
5 A ¶ Five people stand in the dark with a single torch: BASTIAN VOLKERS, forties, who owns the place; his sister SOLENE, thirties; their cousin MERIEL, twenties; the neighbour ROYSTON, sixties; and a GIRL, perhaps ten, in a nightgown, whom no one has invited.
6 D BASTIAN: Who let you in?
7 A ¶ The Girl says nothing.
8 A She stares at the stag.
9 D SOLENE: Bas, she's soaked. Look at her feet.
10 D MERIEL: Where are your parents, sweetheart?
11 A ¶ The Girl lifts a hand and points.
12 A Not at any of them.
13 A At the stag.
14 A Her fingers tremble.
15 D ROYSTON (low): Child, that's a dead deer.
16 D GIRL: He said I could sleep in him.
17 A ¶ They freeze.
* 18 A The torch jerks.
* 19 A Light skates across the glass eyes, and every one seems to turn.
20 D BASTIAN: Who said?
21 D GIRL (whispering): My name is Pia.
* 22 A ¶ Behind her, the stag's head slowly lowers.
23 D PIA (smiling): He's very warm.

### SCENE s00750 | INT. CITY BANK - SUBTERRANEAN VAULT - NIGHT
Detected names (may be incomplete or contain aliases): SABINE ARROWOOD
* 1 A ¶ A cathedral of steel.
* 2 A Rows of safe-deposit boxes climb the walls, thousands of little brass doors.
* 3 A Cold light from a single emergency strip.
* 4 A The great round door stands ajar, its locking bolts retracted like the fingers of a sleeper.
* 5 A ¶ Empty.
* 6 A Silent.
* 7 A A single security camera turns on its bracket and finds nothing.
* 8 A ¶ A footfall on the stairs.
* 9 A Another.
* 10 A Then the quiet scrape of a crowbar being laid down.
11 A ¶ SABINE ARROWOOD, forties, enters in a black jumpsuit, gloves tucked in her belt, a canvas bag over one shoulder.
12 A Dark hair under a cap.
13 A She pauses at the door, looks at the open bolts, and smiles slightly as if at a private joke.
14 D SABINE (low): Sloppy.
15 A ¶ She crosses the vault, runs a gloved finger along the boxes.
16 A Stops at number 4417.
17 A She reaches into her bag and takes out a small recorder.
18 A She clicks it on.
19 D SABINE [V.O.] (from the recorder, her own voice, recorded days ago): "If you're hearing this, Sabine, the door will be open, and the box will be empty. Don't panic. That's the plan."
20 A ¶ Sabine stares at the recorder.
21 A Her smile fades.
22 A She clicks it off.
23 A She slides the key into 4417.
24 A Turns.
* 25 A The door swings open.
* 26 A Nothing inside but a folded note.
27 A ¶ She unfolds it.
28 A Reads.
29 D SABINE [CONT'D] (softly): Clever girl.
30 A ¶ She pockets the note, shoulders the bag, and strides to the open vault door.
* 31 A Alarms stay silent.
32 A She pauses at the threshold, glances back at the shining wall of boxes, and shuts the great door behind her.

### SCENE s00751 | INT. ABANDONED CANNERY - PROCESSING FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): IVO HARTLEY-SPAN, PUSHPA RANA, LEOPOLDO MENDES, QUILLA ASHFORD, CEDRIC FAIRBANKS, MAEVE O'DWYER
* 1 A ¶ A hangar of rust and rain.
* 2 A Long steel conveyors run the length of the building like the ribs of a drowned whale.
* 3 A Windows are blind with salt.
* 4 A Somewhere beneath the planks, the tide breathes in and out through broken pilings, and the whole floor sighs with it.
* 5 A A string of work lights, powered by a coughing generator outside, strings pale yellow beads down the aisle.
* 6 A ¶ A documentary crew has made camp among the vats.
* 7 A Six people, six camp chairs, a scatter of cables.
8 A ¶ IVO HARTLEY-SPAN, fifties, director, a vast man in a linen coat, sits with a clipboard balanced on his belly.
9 A PUSHPA RANA, thirties, sound recordist, holds a boom mic like a fishing rod and listens to the dark with half-closed eyes.
10 A LEOPOLDO MENDES, twenties, camera operator, wipes a lens with a spotless cloth he has wiped it with already.
11 A QUILLA ASHFORD, thirties, producer, has a phone pressed to her ear and a frown carved between her brows.
12 A CEDRIC FAIRBANKS, sixties, the historian, wears a tweed cap and quotes from a leather notebook.
13 A MAEVE O'DWYER, forties, the local guide, stands apart with her arms crossed, looking at nothing.
14 D IVO: Let's roll on the long shot. Leo, can you keep the conveyor in frame?
15 D LEOPOLDO: It's in frame.
16 D IVO: Beautiful. Pushpa?
17 D PUSHPA: Room tone's good. There's a hum.
18 D IVO: The generator?
19 D PUSHPA: Lower.
20 A ¶ Ivo lowers the clipboard.
21 A Pushpa tilts the boom toward the floorboards, then toward the rafters, then back to the floor, as if tracking a small animal.
22 A Leopoldo pans slowly across the vats, and Cedric, noticing the lens, straightens his cap and clears his throat for the camera.
23 A Quilla drops the phone into her lap and rubs her eyes with the heel of her hand.
24 D QUILLA: No signal. Again.
25 D CEDRIC (reading): "The Hallam Cannery closed in nineteen fifty-three, following an accident on the lower line in which nine workers were lost."
26 D MAEVE: Eleven.
27 D CEDRIC: I beg your pardon?
28 D MAEVE: Eleven were lost. Nine is what the paper said.
29 A ¶ Cedric blinks.
30 A He flips the page of his notebook, finds nothing to correct her, and closes it.
31 D CEDRIC: Local knowledge. Invaluable.
32 D MAEVE: It isn't knowledge. It's my grandmother.
33 D IVO: Maeve, would you be willing to say that on camera?
34 D MAEVE: Not tonight.
35 D IVO: Tomorrow, then.
36 D MAEVE: We won't be here tomorrow.
* 37 A ¶ Silence.
* 38 A The tide sighs under the floor.
* 39 A The generator coughs outside, catches, coughs again.
40 A Pushpa turns slowly and looks at Maeve over the boom.
41 D PUSHPA: Why not?
42 D MAEVE: Because nobody stays past three.
43 D QUILLA (trying a laugh): That's marvellous. We'll put that in the trailer.
44 D LEOPOLDO: What happens at three?
45 D MAEVE: Nothing. That's what they say. Nothing happens.
46 A ¶ Ivo sets the clipboard on the floor.
47 A He rises with an effort, takes a torch from his bag, and walks to the nearest conveyor.
48 A He runs the beam along its length.
* 49 A Rust.
* 50 A Dust.
* 51 A A single glove, small, stiff, grey with age.
52 D IVO (softly): Well. Somebody's been here.
53 A ¶ He bends to pick it up.
* 54 A Before his fingers touch it, the work lights flicker.
55 A Cedric steadies his cap.
56 A Quilla stands.
57 A Pushpa lowers the boom.
58 A Leopoldo turns the camera toward the dark end of the hall, and for a long moment all six of them listen to the building listening back.
* 59 A ¶ The lights steady.
* 60 A Nothing has changed.
* 61 A Only the glove, now, is on the other side of the conveyor.
62 D LEOPOLDO (very quietly): Did anyone see that move?
* 63 A ¶ Nobody answers.
64 A Ivo straightens, wipes his hand on his coat, and walks back to his chair with the careful tread of a man pretending not to hurry.
65 D IVO (clearing his throat): Right. Let's get the interviews done by two.
66 D CEDRIC: Two?
67 D IVO: Just in case.
68 A ¶ Maeve looks at him for the first time with something like approval.
69 A Quilla sits.
70 A Pushpa lifts the boom.
* 71 A The hum of the generator rises, falls, rises again, like breath.

### SCENE s00752 | INT. FLOODED ORCHARD COTTAGE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE PERPETUA LOWRY, CALLER, ROSCOE
* 1 A ¶ Rain drums on a tin roof.
* 2 A Water has crept an inch under the door and pools on the flagstones.
* 3 A A single candle burns on the kitchen table, beside a black rotary phone, its cord stretched taut across the room.
4 A ¶ DETECTIVE PERPETUA LOWRY, fifties, in a drenched mackintosh, stands with the receiver at her ear.
5 A She doesn't sit.
* 6 A A cup of cold tea has been on the table so long it has grown a skin.
7 D CALLER [V.O.] (over phone, thin, amused): You came alone.
8 D PERPETUA: I did.
9 D CALLER [V.O.]: That was brave.
10 D PERPETUA: It was cheaper than a team.
* 11 A ¶ A long pause on the line.
* 12 A Rain.
* 13 A A drip from the ceiling lands in the cup.
14 D CALLER [V.O.]: Do you know where Edmund Hale is, Detective?
15 D PERPETUA: In a drawer at the county morgue.
16 D CALLER [V.O.]: Then you know I didn't do it.
17 D PERPETUA: I know you wanted me to think so.
18 A ¶ She picks up a pencil and turns it between her fingers.
19 A She studies the pooling water.
20 A She walks, slowly, to the window and looks out at the black orchard, where bare branches thrash.
21 D CALLER [V.O.]: Look at the third tree from the gate.
22 A ¶ Perpetua doesn't move.
23 D CALLER [V.O., CONT'D]: Go on.
24 A ¶ She leans closer to the glass.
* 25 A Her breath fogs it.
* 26 A A dark shape hangs from the third tree, swinging in the wind.
27 A She stares.
28 A Her shoulders drop a quarter inch.
29 D PERPETUA (very quietly): That's a coat.
30 D CALLER [V.O.]: It's his coat.
31 D PERPETUA: Where is he?
32 D CALLER [V.O.]: Why would I tell you? You haven't asked my name.
33 D PERPETUA: You've been calling me for six nights. I've heard you breathe. I know you've been drinking.
34 D CALLER [V.O.]: Whisky. A decent one.
35 D PERPETUA: Then you can say your name over a decent whisky.
* 36 A ¶ A pause.
* 37 A The receiver crackles.
* 38 A When the voice returns it is lower, tired.
39 D ROSCOE [V.O.] (over phone): Roscoe Hale. Edmund's brother.
40 A ¶ Perpetua closes her eyes.
41 A The pencil snaps in her fist.
42 D PERPETUA: You buried him in the orchard.
43 D ROSCOE [V.O.]: I buried what was left.
44 D PERPETUA: Why call me?
45 D ROSCOE [V.O.]: Because someone should know where he is. And the police won't dig in the rain.
46 A ¶ She sets the broken pencil on the table.
47 A She looks at the candle, at the cold tea, at the dark window.
48 D PERPETUA: Roscoe. Where are you now?
49 D ROSCOE [V.O.]: Look at the gate.
50 A ¶ She turns.
51 A In the doorway of the kitchen, silhouetted by lightning, a man's shape is standing with a phone in his hand.
* 52 A ¶ Thunder.
* 53 A The candle gutters out.

### SCENE s00753 | INT. VILLAGE CHURCH - WEDDING - DAY
Detected names (may be incomplete or contain aliases): CONGRATS ROSALIND, GROOM FERDINAND, BRIDE ROSALIND, FATHER MALACHY, MOTHER IRENE, BEST MAN, GIDEON, DJ
* 1 A ¶ Pews packed.
* 2 A Organ droning.
* 3 A A banner reading CONGRATS ROSALIND & FERDINAND, slightly crooked.
4 A ¶ At the altar: BRIDE ROSALIND, thirties, in a dress with a train like a snow drift.
5 A GROOM FERDINAND, thirties, sweating through a rented tux.
6 A FATHER MALACHY, sixties, bearded officiant, clutching a prayer book.
7 A In the front pew, MOTHER IRENE, sixties, in a hat the size of a satellite dish.
8 A Beside Ferdinand: BEST MAN, twenties, hungover, swaying.
9 D FATHER MALACHY: If anyone objects to this union, speak now.
* 10 A ¶ A pause.
11 A The BEST MAN raises a hand.
12 D BEST MAN: Hang on.
13 D ROSALIND: Oh, for God's sake.
14 D BEST MAN: I just wanted to say I love you both.
15 D FERDINAND: Thank you, Gideon.
16 A ¶ The Best Man, now GIDEON, beams.
* 17 A ¶ Over the church speakers, a booming voice.
18 D DJ [V.O.] (over PA): Ladies and gentlemen, give it up for the happy couple!
19 D FATHER MALACHY: We're not there yet!
20 D MOTHER IRENE (standing): Who hired that man?
21 D ROSALIND: Mother!
22 D DJ [V.O.] (over PA): Drop the bass!
* 23 A ¶ A thump rattles the pews.
24 A Everyone ducks.
25 D GIDEON (slurring): Best. Day. Ever.
26 D FERDINAND: Rosalind, I do. I do. Can we just finish?
27 D ROSALIND: Fine. I do!
28 D FATHER MALACHY: You may now--
* 29 A ¶ The organ explodes into a dance remix.
30 A Everyone throws up their hands.

### SCENE s00754 | INT. ROOFTOP CALL CENTRE - HOTEL TERRACE - DAY
Detected names (may be incomplete or contain aliases): ROSALEEN FINNEGAN, JAMAL TURNER, BIANCA ESTRADA, KOJO ASARE
* 1 A ¶ Forty headsets under striped parasols on the roof of a failing seaside hotel.
* 2 A Seagulls wheel overhead.
* 3 A Customers are reached by phone, by hope, and by the mercy of a hot wind that keeps lifting the scripts from the tables.
4 A ¶ ROSALEEN FINNEGAN, fifties, supervisor, walks the rows with a megaphone slung from her shoulder and a thermos of tea.
5 A JAMAL TURNER, thirties, team lead, reads a script in a monotone.
6 A BIANCA ESTRADA, twenties, newest hire, listens to a caller with her hand over her mouth.
7 A KOJO ASARE, forties, quality assurance, sits apart with a stopwatch, a clipboard, and a face like a closed door.
8 D ROSALEEN (into megaphone): Remember, people! A smile can be heard down the line!
9 D JAMAL (not smiling): Thank you for holding.
10 A ¶ Bianca covers the mouthpiece and looks up at Rosaleen, who ignores her.
11 A Kojo clicks the stopwatch and writes a figure on his clipboard.
12 A A gust flips three scripts off Jamal's table; he chases them across the tiles, snatching, swearing under his breath, while Rosaleen steps neatly over a paper in her path and keeps walking, thermos aloft.
13 D BIANCA (whispering): Ms. Finnegan. The customer says his house is on fire.
14 D ROSALEEN: Is it our house?
15 D BIANCA: No.
16 D ROSALEEN: Then follow the script.
17 D BIANCA: But he said--
18 D ROSALEEN: Page four. "I understand your frustration."
19 A ¶ Bianca nods.
20 A She uncovers the mouthpiece.
21 A Kojo clicks the stopwatch again, scratches another figure, and glances at Rosaleen with the faintest lift of one eyebrow.
22 A Jamal returns with the scripts clutched to his chest, slaps them on the table, and slumps into his chair.
23 D JAMAL (low): Kojo. How many?
24 D KOJO: Forty-one this hour.
25 D JAMAL: Forty-one what?
26 D KOJO: Complaints we failed to resolve.
27 D JAMAL: That's... normal.
28 D KOJO: It was twelve yesterday.
29 A ¶ Jamal glances at Rosaleen.
30 A She is cheerfully yelling encouragement through the megaphone at a row of headsets.
* 31 A A wave breaks on the beach far below.
32 A Bianca pushes her headset off one ear and stares at the horizon.
33 D BIANCA (very quietly): Sir? Sir, I'm sorry. I can hear it. I can hear the fire.
34 A ¶ She stands.
* 35 A The chair falls over behind her.
36 A Jamal rises to catch it.
* 37 A Kojo's stopwatch clicks.
38 A Rosaleen turns, megaphone halfway to her mouth.
39 D ROSALEEN: Bianca. Sit.
40 D BIANCA (into the headset, steady): Sir, give me your address.
41 D ROSALEEN: Bianca, that is not on the script.
42 A ¶ Bianca tears off the headset and drops it on the table.
43 A She picks up the phone, the real one, the one with a cord.
44 A She dials three digits and holds it to her ear.
45 A Jamal steps beside her.
46 A Kojo, slowly, sets down his clipboard.
47 D BIANCA (into phone): Yes. There's a fire at forty-two Marlow Road.
48 D ROSALEEN (louder): Bianca!
49 A ¶ Jamal turns to Rosaleen.
50 A He takes the megaphone off her shoulder with one hand, unhurried, and sets it on the table.
51 D JAMAL: Rosaleen. Shut up.
* 52 A ¶ The terrace goes silent.
53 A Forty heads turn.
* 54 A The wind lifts the scripts and carries them over the parapet, white wings falling into the sea.

### SCENE s00755 | EXT. BOCCE COURT - SUNSET LODGE RETIREMENT HOME - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CONNIE, PAPADAKIS, ELMER HOLLINGSWORTH, VIOLA REARDON
* 1 A ¶ A clay court framed by weathered boards, bordered by hydrangeas gone brown at the edges.
* 2 A The sun is low and gold.
* 3 A A radio plays something slow from an open window.
4 A ¶ CONSTANTINE "CONNIE" PAPADAKIS, seventies, white shirt, braces, crouches with a green ball cupped in his palm.
5 A Across the court ELMER HOLLINGSWORTH, seventies, in a flat cap, leans on a cane and studies the pallino.
6 A Between them, seated on a folding chair with a clipboard, VIOLA REARDON, eighties, referee, in a lavender cardigan, watches both with equal indifference.
7 A ¶ Connie rolls.
* 8 A The ball curves, slows, kisses the pallino, and stops.
9 A Elmer's cane taps once against the boards.
10 A Viola writes down a number without a word.
11 A ¶ Elmer picks up his own ball, weighs it, sets his feet, and rolls.
* 12 A It rolls wide, wobbles, and dies a hand's breadth from the line.
13 A Connie nods, folds his arms, and gazes at the sky.
14 A Viola capitalises something on her clipboard.
15 A Neither man looks at the other.
16 A ¶ Connie takes his second ball from the bucket and turns it over twice, and Elmer, from the far end, produces a handkerchief and blots his forehead with the slow ceremony of a man not in a hurry.
17 A Viola lowers the clipboard and takes a long sip of her iced tea.
18 D VIOLA: Four to two.
19 D CONNIE: Thank you, Viola.
20 D ELMER: Two's not bad.
21 D VIOLA: It's two.
22 A ¶ Connie rolls again.
* 23 A Another kiss, another stop.
24 A Elmer watches it settle and for a moment his cane trembles.
25 A He reaches into his cardigan, fingers a folded photograph, then thinks better of it and tucks it back.
26 D CONNIE: You all right, Elmer?
27 D ELMER: Sun's in my eyes.
28 D CONNIE: Sun's behind you.
29 D ELMER: Then it's the other one.
30 A ¶ Viola caps her pen.
31 A She rises, brushes clay from her cardigan, and walks the length of the court at her own pace, bends, and measures with a short string.
32 A She straightens.
33 D VIOLA: Game.
34 D CONNIE: Good game.
35 D ELMER: Hm.
36 A ¶ They shake hands over the boards, a dry brief shake.
37 A Viola gathers the balls into the bucket.
38 A Connie holds the gate for Elmer.
39 A Elmer goes through it and does not say thank you, and Connie does not seem to expect it, and the radio drifts on.

### SCENE s00756 | INT. SAL'S TAP ROOM - 1 A.M.
Detected names (may be incomplete or contain aliases): BIG LOU SALVATORE, FINN DOYLE
* 1 A ¶ Empty stools.
* 2 A Neon beer sign, half dead.
* 3 A A television mutters a weather map to nobody.
4 A ¶ BIG LOU SALVATORE, fifties, bartender, wipes a glass that has been clean since Tuesday.
5 A At the far end of the bar sits FINN DOYLE, thirties, wearing a jacket that doesn't fit, a hat he hasn't removed, a duffel bag at his feet.
6 D BIG LOU (to the empty room): Last call, folks!
* 7 A ¶ Nobody answers.
8 A He sets the glass down.
9 A Pours a whiskey.
10 A Slides it to Finn.
11 D BIG LOU [CONT'D]: You're early.
12 D FINN: You're late.
13 D BIG LOU: It's my bar.
14 D FINN: It's my money.
15 A ¶ Big Lou raises an eyebrow, polishes another glass.
16 A Finn nudges the duffel with his boot.
17 D BIG LOU (muttering): Eighty grand and he wants a drink.
18 D FINN: I heard that.
19 D BIG LOU: You were meant to.
* 20 A ¶ A car passes outside, headlights sliding across the ceiling.
21 A Both go still.
* 22 A The light fades.
23 D FINN: Lou.
24 D BIG LOU: Finn.
25 D FINN: We're clean.
26 D BIG LOU: We're clean.
27 A ¶ They stare at each other.
* 28 A The weather map blinks.

### SCENE s00757 | INT. MUSEUM OF LOCKS - GREAT HALL - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR AMBROSE TREVELYAN, LADY CORDELIA ASHGROVE, PERIKLES NAKOS, MISS JOSEPHINE FINCH, HADLEY
* 1 A ¶ A vaulted gallery lined with glass cabinets of antique locks, padlocks, and hand-wrought keys.
* 2 A Gaslamp-style fixtures cast brass light.
* 3 A A grandfather clock ticks.
* 4 A Under a glass dome in the centre, an empty velvet cushion.
5 A ¶ INSPECTOR AMBROSE TREVELYAN, fifties, in a bowler hat, walks the length of the hall with hands clasped behind him.
6 A He pauses at the cushion.
7 D AMBROSE: The Duke's Key. Gone at half-past nine.
8 A ¶ LADY CORDELIA ASHGROVE, sixties, widow, in pearls and furs, sits stiffly on a bench.
9 A DR. PERIKLES NAKOS, forties, curator, wrings his hands beside her.
10 A MISS JOSEPHINE FINCH, twenties, the cataloguer, stands pale near the stairs.
11 A MR. HADLEY, seventies, the night butler, holds a tray of untouched sherry.
12 D CORDELIA: It is an outrage.
13 D PERIKLES: Madam, the cabinet was locked.
14 D AMBROSE: Locked, yes. Opened, no.
15 D JOSEPHINE: Then how--
16 D AMBROSE: Miss Finch. You were the last to leave the hall.
17 D JOSEPHINE: I was.
18 D AMBROSE: You saw nothing?
19 D JOSEPHINE: Only Mr. Hadley, with the sherry.
20 D HADLEY: I never left the pantry, sir.
21 D AMBROSE: That is a pity.
22 A ¶ Ambrose raises the glass dome, sets it aside, and picks up the velvet cushion.
23 A He turns it over, examines the underside, and shakes it.
* 24 A Dust falls.
25 A Perikles and Cordelia lean away; Josephine and Hadley edge toward the door.
26 D AMBROSE [CONT'D]: Nobody leave.
27 A ¶ They all freeze.
* 28 A The clock ticks.
29 D AMBROSE [CONT'D]: The key was never in the cabinet. It was swapped at the last catalogue. The one on this cushion was a copy.
30 D CORDELIA: Preposterous.
31 D AMBROSE: Dr. Nakos, who signed the catalogue?
32 A ¶ Perikles looks at Josephine.
33 A Josephine looks at Hadley.
34 A Hadley looks at Cordelia.
35 A Cordelia rises, drawing her furs about her like a shield, and takes one step toward the stairs.
36 A ¶ The four of them bolt in four directions.
37 A Ambrose lifts a whistle to his lips and blows.
* 38 A Doors slam.
* 39 A Footsteps thunder on marble.
* 40 A A constable's lantern swings through the arch, and the hall fills with shouting.

### SCENE s00758 | INT. MRI SUITE - HOSPITAL BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE KEANE, TECH DELPHINE ABERNATHY, EUSTACE QUINN
* 1 A ¶ A white tube hums at the centre of a cold room.
* 2 A Warning signs plaster the walls.
* 3 A Through a glass window, a control booth glows green.
4 A ¶ DR. SAOIRSE KEANE, forties, radiologist, leans on the console.
5 A TECH DELPHINE ABERNATHY, twenties, adjusts a dial.
6 A On the sliding table inside the machine lies EUSTACE QUINN, seventies, a patient in a gown, hands folded across his chest.
7 D DELPHINE: Mr. Quinn, we're starting. Try to stay still.
8 D EUSTACE [V.O.] (over intercom, shaky): I'm still.
9 D SAOIRSE: Good.
* 10 A ¶ The machine thumps.
* 11 A A grey image flickers onto the monitor.
12 A Saoirse leans forward.
13 A Delphine does the same.
* 14 A Their faces light from below.
15 D DELPHINE: There.
16 D SAOIRSE: I see it.
17 D DELPHINE: That's not a tumour.
18 D SAOIRSE: It is not.
19 A ¶ They share a smile of relief.
20 A Delphine reaches for the intercom.
21 D DELPHINE: Mr. Quinn, good news--
* 22 A ¶ On the screen the image jolts.
* 23 A The table inside the machine slides forward.
24 A Eustace's hand flies up.
* 25 A A metal tray flies across the room and clangs against the tube.
26 D SAOIRSE: His ring!
27 D DELPHINE: Pull the table!
28 A ¶ Both women lunge.
29 A Delphine slams the emergency button, Saoirse throws her weight on the stop lever.
* 30 A The magnet whines down.
* 31 A ¶ Silence.
32 A They rush into the room, drag the table free, and catch Eustace as he sits up, gasping, his wedding ring tugging at his finger.
33 D EUSTACE (laughing and wincing): Forty years it's never come off.

### SCENE s00759 | INT. CRANE & SONS FUNERAL HOME - VIEWING ROOM B - DAY
Detected names (may be incomplete or contain aliases): BARNABAS FLINT, ROSAMUND ACHEBE, HOLLIS DUNMORE, JUNO PAREKH, LEOPOLD ISHIGURO, SELWYN CRANE
* 1 A ¶ A deposition in a room meant for mourning.
* 2 A Folding tables have been set among potted lilies.
* 3 A An empty casket stands on a draped bier at the head of the room, lid open, lined with white satin.
* 4 A Soft organ music leaks from a ceiling speaker no one can find the switch for.
5 A ¶ BARNABAS FLINT, fifties, plaintiff's counsel, sits at the near table with a stack of exhibits.
6 A ROSAMUND ACHEBE, forties, defence counsel, sits across from him, calm as a priest.
7 A At the head of the table, HOLLIS DUNMORE, sixties, the witness, a retired claims adjuster in a navy blazer, lowers himself into a funeral parlour armchair.
8 A JUNO PAREKH, twenties, the videographer, hunches behind her tripod.
9 A LEOPOLD ISHIGURO, fifties, the court reporter, sets up his steno machine by the casket.
10 A MR. SELWYN CRANE, seventies, funeral director, hovers in the doorway with a box of tissues.
11 D BARNABAS: Mr. Dunmore, I'm going to ask you to identify Exhibit Twelve.
12 D HOLLIS: Of course.
13 D ROSAMUND: Objection. Foundation.
14 D BARNABAS: He wrote it.
15 D ROSAMUND: He hasn't said that.
16 D HOLLIS: I wrote it.
17 D ROSAMUND: Don't help him, Mr. Dunmore.
18 D HOLLIS: I'm only saying.
19 D BARNABAS: Please read the highlighted line.
20 D HOLLIS: "Claim denied pursuant to section nine."
21 D JUNO (from behind the tripod): Sorry, can you speak up?
22 D HOLLIS: "Claim denied pursuant to section nine."
23 D LEOPOLD: Section nine or section "nine-dash-b"?
24 D HOLLIS: Nine.
25 D BARNABAS: And what is section nine?
26 D ROSAMUND: Objection. Calls for a legal conclusion.
27 D SELWYN (from the door, softly): Forgive me. Would anyone like a tissue?
28 D BARNABAS: No, thank you, Mr. Crane.
29 D ROSAMUND: Not at present.
30 D HOLLIS: I'll take one.
31 A ¶ Selwyn glides in, sets the box beside Hollis, and glides out.
32 A Juno steps from behind the tripod to adjust the lens and trips on a lily pot.
33 A Leopold catches the pot.
34 A Barnabas and Rosamund both reach for the water pitcher at once; their hands knock it over, and a flood runs across the exhibits.
35 A Hollis grabs his own copy and holds it above his head like a man fording a river.
36 D ROSAMUND: Barnabas, that's my notes!
37 D BARNABAS: It's my exhibit!
38 D LEOPOLD: Can we go off the record?
39 D JUNO: I'm still rolling.
40 D HOLLIS: Does anyone have a towel?
41 D SELWYN (returning, with an armload of black linen): Our finest.
42 A ¶ They mop in silence.
* 43 A The organ swells.
* 44 A Water drips off the casket's satin.
45 D BARNABAS (wringing a page): Let's resume.

### SCENE s00760 | INT. WAX MUSEUM - GRAND GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): HAROLD WINTERBOTTOM, ZUZANA KRAJEWSKI, MOSES TEMBO, KAI NAKAMURA-REID, ILSE ARENDT, VESPER LANE
* 1 A ¶ Hushed.
* 2 A Rows of figures in frozen poses: a queen, a boxer, a saint, a pirate.
* 3 A Their glass eyes catch the sodium glow from a security lamp.
4 A ¶ HAROLD WINTERBOTTOM, sixties, night guard, sits on a stool with a thermos.
5 A Near the pirate, cleaners ZUZANA KRAJEWSKI, forties, and MOSES TEMBO, thirties, sweep.
6 A Apprentice KAI NAKAMURA-REID, nineteen, polishes a cabinet.
7 A Curator ILSE ARENDT, fifties, taps a tablet by the door.
8 D HAROLD: Quiet night.
9 D ILSE: They're always quiet.
10 D ZUZANA (low): Moses. The boxer moved.
11 D MOSES: He did not.
12 D ZUZANA: His fist was down.
13 D MOSES: It's still down.
14 A ¶ Kai stops polishing.
15 A He looks at the boxer's fist.
* 16 A It is raised.
17 D KAI: Ms. Arendt?
18 D ILSE: Don't be silly, Kai.
* 19 A ¶ The lights dip.
20 A Harold stands, torch in hand, the stool toppling.
* 21 A Ilse's tablet blinks out.
22 A Zuzana and Moses back toward the saint, brooms raised, and Kai edges to Harold's side, polishing cloth clutched in his fist like a talisman.
* 23 A ¶ The door at the far end creaks open.
24 A ¶ VESPER LANE, thirties, in a long grey coat and white gloves, steps in.
25 A Pale.
26 A Perfectly still.
27 A Hair pinned.
28 A A lace veil tucked into her collar.
29 A She stops beside the queen.
30 A She tilts her head and looks at the five living people the way someone looks at figures in a window.
31 D VESPER (softly): I'm so sorry I'm late.
32 D HAROLD: We're closed, miss.
33 D VESPER: I know. I'm the fiftieth figure.
34 A ¶ She walks to an empty plinth near the pirate and steps onto it.
35 A Turns.
36 A Folds her hands.
37 A And stops, mid-breath, mid-smile, mid-blink.
38 A ¶ No one moves.
* 39 A The boxer's fist drops with a soft clack.

### SCENE s00761 | INT. ICE-FISHING SHANTY - ARCTIC LAKE - NIGHT
Detected names (may be incomplete or contain aliases): WALLY, BRODERICK, EMMANUEL OKAFOR-NWANKWO, STRANGER, JONAS
* 1 A ¶ A plywood box on a frozen lake.
* 2 A A stove glows red.
* 3 A Two holes in the floor, black water showing, lines trembling.
* 4 A Frost on the walls.
* 5 A The wind outside is a crowd of ghosts.
6 A ¶ WALLACE "WALLY" BRODERICK, fifties, big man, gutting a fish at the table.
7 A EMMANUEL OKAFOR-NWANKWO, thirties, schoolteacher, huddles by the stove with a mug.
8 A Neither says much.
* 9 A ¶ The door bangs.
* 10 A Snow whips in.
11 A A figure in a snow-crusted parka stumbles inside, pulls the door shut, and leans against it, gasping.
12 D STRANGER: Thank God. I saw the light.
13 D WALLY: Sit. Warm up.
14 A ¶ The Stranger drops onto a bucket, pulls off his hood.
15 A A young man, lips blue, eyebrows frosted.
16 A His hands shake.
17 A Emmanuel passes him the mug without a word.
18 A He drinks.
19 A His eyes flick to the knife in Wally's hand, then to the fish, then away.
20 D EMMANUEL: What's your name?
21 D STRANGER: Jonas.
22 D EMMANUEL: Where are you headed, Jonas?
23 D JONAS: The north shore. My truck died.
24 D WALLY: There's no road on the north shore.
25 D JONAS: There is a cabin.
26 D WALLY: There's no cabin.
27 D JONAS: Then I was lied to.
28 A ¶ He laughs, uneasy.
29 A Emmanuel sets a hand on the stove and warms it.
30 A Wally slices the fish with a short, sure stroke, and for a while only the knife speaks.
31 D EMMANUEL: He's right, Wally. People get lost.
32 D WALLY: People do.
33 A ¶ Jonas finishes the mug and sets it down.
34 A He stretches his hands to the fire and looks, for the first time, relaxed.
35 A Wally slides a piece of fish across to him on the blade.
36 A Jonas takes it, chews, nods thanks.
37 D JONAS: Who's got the line?
38 D WALLY: He does.
39 A ¶ Wally nods at Emmanuel.
40 A Emmanuel lifts the line.
* 41 A A fish thrashes.
42 A He hauls.
43 A Jonas leans in to help.
44 A They both grip the line.
45 A Wally watches them, his knife stilled in his hand.
* 46 A ¶ The fish comes up, a fat lake trout, silver-black.
47 A Emmanuel laughs.
48 A Jonas laughs.
49 A Wally doesn't.
50 A He wipes the blade on his sleeve.
51 D WALLY [CONT'D]: You walked far?
52 D JONAS: All night.
53 D WALLY: In that wind.
54 D JONAS: It wasn't so bad.
55 A ¶ Wally's gaze drops to Jonas's boots.
56 A They are clean.
57 A No snow packed in the treads, no ice at the laces.
58 A Wally says nothing.
59 D EMMANUEL: Jonas, what do you do?
60 D JONAS: I'm a surveyor.
61 D EMMANUEL: For who?
62 D JONAS: The county.
63 A ¶ Emmanuel nods.
64 A Wally tilts his head and studies Jonas's face, the thin line of his smile.
65 D WALLY: Emmanuel.
66 D EMMANUEL: Hm?
67 D WALLY: Come help me with the stove.
68 D EMMANUEL: It's fine.
69 D WALLY: Come help me.
70 A ¶ Emmanuel stands.
71 A They cross to the stove together.
72 A Wally leans close, mouth by Emmanuel's ear.
73 D WALLY [CONT'D] (whispering): He's got no breath.
74 D EMMANUEL: What?
75 D WALLY: In this cold. Watch.
76 A ¶ Emmanuel looks.
77 A Jonas sits by the table, his face pale in the lamp.
78 A No fog drifts from his lips.
79 A Not one thread.
80 A ¶ Jonas turns his head and smiles, wide.
81 A The stove light catches his eyes, and for a moment they are the colour of lake water under ice.
82 D JONAS: Don't stop on my account.
83 A ¶ Wally lifts the knife.
84 A Emmanuel grabs the poker.
85 A Jonas stands up slowly, unfolding to a height the shanty cannot hold.
86 A His head brushes the ceiling.
87 D JONAS [CONT'D] (softly): I was only looking for company.
* 88 A ¶ The lines in the holes go taut at once, all together, and something far below begins to pull.
