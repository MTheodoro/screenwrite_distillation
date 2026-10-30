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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0020.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00500 | INT. AUCTION HOUSE - BACK ROOM - DAY
Detected names (may be incomplete or contain aliases): CORNELIUS WREN, PHILIPPA VANTONGEREN, DETECTIVE ANSELM OBI
* 1 A ¶ A narrow room behind the sale floor.
* 2 A Velvet-draped easels.
* 3 A A single tall window.
* 4 A Through the wall, the muffled voice of an auctioneer and the occasional rap of a gavel.
5 A ¶ CORNELIUS WREN (60s, tweed, silk pocket square) sits at a polished table with a cup of tea, serene.
6 A Across from him, PHILIPPA VANTONGEREN (40s, tailored suit, folder in her lap) sits very upright, a pen between her fingers.
7 D CORNELIUS: You'll find the provenance is impeccable.
8 D PHILIPPA: I'm sure.
9 D CORNELIUS: Painted in 1884. Single owner since 1921. Never exhibited.
10 D PHILIPPA: Never exhibited.
11 D CORNELIUS: Never.
12 A ¶ He sips.
13 A She taps the pen against the folder.
14 A Her eyes stay on the cup.
15 D CORNELIUS [CONT'D]: My dear, you look unwell.
16 D PHILIPPA: I'm well.
17 D CORNELIUS: You've hardly touched your biscuit.
18 D PHILIPPA: I don't care for biscuits.
19 D CORNELIUS: No one cares for them. They are an excuse for tea.
20 A ¶ She smiles, briefly.
* 21 A The gavel falls in the next room.
22 D CORNELIUS [CONT'D]: So. Shall we sign?
23 D PHILIPPA: Of course.
24 A ¶ She opens the folder and slides a document across the table.
25 A He reads it, uncaps his fountain pen, and begins to sign.
* 26 A ¶ The door opens.
27 A A tall man in a navy suit enters without knocking: DETECTIVE ANSELM OBI (50s, badge on his belt, hands in his pockets).
28 A He closes the door behind him.
29 D ANSELM: Mr. Wren.
30 D CORNELIUS: This is a private meeting.
31 D ANSELM: I know. I've been listening to it for twenty minutes.
32 A ¶ Philippa sets down her pen.
33 A She lifts the collar of her blouse and reveals a small wire.
34 D CORNELIUS: You.
35 D PHILIPPA: Me.
36 A ¶ Cornelius stands so fast his chair goes over.
37 A He lunges for the document; she snatches it.
38 A He reaches for the window latch; Anselm catches his arm and twists it behind his back, and they stagger together against the easel, which topples, and a velvet cloth slides off a tarnished gold frame to reveal a painting of a small girl in a blue dress holding an apple.
* 39 A ¶ Silence.
40 A The three of them stare.
41 D ANSELM: That's not a Corot.
42 D CORNELIUS (strangled): It's a very good copy.
43 D PHILIPPA: It's a very good forgery.
* 44 A ¶ In the sale room, the gavel falls again.

### SCENE s00501 | EXT. SALT FLATS - HIGH NOON
Detected names (may be incomplete or contain aliases): ZEB, CULLEN, MATT
* 1 A ¶ A white plain without edges, hammered flat by heat.
* 2 A The horizon trembles in the glare.
* 3 A A dead wagon sits crooked, one wheel lost in a crust of salt.
* 4 A No wind.
* 5 A No shadow of any bird.
6 A ¶ ZEBEDIAH "ZEB" CULLEN (40s, black coat bleached gray at the shoulders, a dry tongue worrying the corner of his mouth) leads a stumbling mule across the white.
7 A On the mule's back, slumped like a sack of grain, rides his boy, MATTHIAS "MATT" CULLEN (14, hat tied under his chin with twine, lips cracked red).
8 D ZEB: Matt.
9 D MATT: Pa.
10 D ZEB: Eyes open.
11 D MATT: They are.
12 D ZEB: Open wider.
13 A ¶ The boy grins weakly.
14 A A hard grin, with no water behind it.
15 A The mule stops.
16 A Zeb pulls the lead and the mule refuses.
17 A He turns and sees the mule's legs trembling, a thin line of foam on its lip.
18 D ZEB [CONT'D]: Not now, old girl.
19 A ¶ He draws the canteen from his hip, shakes it.
* 20 A A slosh.
* 21 A A single mouthful.
22 A He holds it out to Matt.
23 D MATT: You first.
24 D ZEB: Drink.
25 D MATT: Pa, you drink.
26 D ZEB: Matthias.
27 A ¶ The boy takes the canteen with both hands.
28 A He drinks half the mouthful.
29 A He passes it back.
30 A Zeb tips what remains onto the mule's tongue.
31 A The animal shudders and walks on.
* 32 A ¶ Then the sound comes: a low rumble, like thunder under a floor.
* 33 A The horizon darkens.
* 34 A A black line rises along the edge of the world, spreading wide as a mountain.
35 D MATT: Pa, what is that?
36 D ZEB: Storm.
37 D MATT: There's no clouds.
38 D ZEB: Dust. It's dust. Get down. Get down, boy!
39 A ¶ He drags Matt from the saddle and presses him flat into the salt, throws his coat over them both, and lies on top, bracing.
40 A The mule bolts.
* 41 A The wall of dust crashes over them with a howl that swallows speech, a white-brown roar that fills the sky from end to end, and for a long minute there is nothing in the world but weight and wind.
* 42 A ¶ Then, as quickly as it came, it is gone.
* 43 A The sky is clear.
* 44 A The plain is flat.
45 A Under the coat, two breaths.
46 A ¶ Zeb lifts the edge.
47 A Salt streams off his shoulders.
48 A He looks down.
49 D ZEB [CONT'D]: Matt?
50 D MATT: I'm here.
51 D ZEB: Good.
52 D MATT: Did we lose the mule?
53 D ZEB: Not yet.
54 A ¶ Far across the white, a small gray shape stands patient in the shimmer, waiting for them.

### SCENE s00502 | INT. CATERING VAN - PARKED OUTSIDE A WEDDING VENUE - DAY
Detected names (may be incomplete or contain aliases): MIRKO DELL'ORTO, TAMSIN OKPARA, BRIGITTE LACROIX-HAYES, LEONARD HAYES
* 1 A ¶ A white panel van with a three-tier cake lashed to the floor in a plexiglass box.
* 2 A Crumb-dusted dashboard.
* 3 A A wilted bouquet in a cup holder.
* 4 A The engine ticks as it cools.
5 A ¶ MIRKO DELL'ORTO (40s, pastry chef, chef's whites unbuttoned) sits in the driver's seat gripping the wheel.
6 A Beside him, his assistant TAMSIN OKPARA (20s, hair net, rubber gloves), holds a clipboard against her knees.
7 A In the back, wedged between trays of sugar flowers, sit the groom's mother, BRIGITTE LACROIX-HAYES (60s, mother-of-the-groom, fascinator tilted), and her husband LEONARD HAYES (60s, brown suit, hands clasped over his belly).
8 A ¶ Nobody speaks.
9 D MIRKO (finally): It's a very nice cake.
10 D BRIGITTE: It's leaning.
11 D MIRKO: It is a Tower of Pisa style.
12 D BRIGITTE: It's a tower of Pisa, Mirko, in the sense that it's falling over.
13 D LEONARD: Brigitte.
14 D BRIGITTE: Don't "Brigitte" me.
15 D TAMSIN: Chef, I can fix it with a toothpick.
16 D MIRKO: Tamsin.
17 D TAMSIN: Three toothpicks and a wad of buttercream.
18 D MIRKO: No toothpicks.
19 D TAMSIN: A skewer, then.
20 D MIRKO: Tamsin, no.
21 A ¶ She puts down the clipboard.
22 A She reaches over the seat, pulls a long bamboo skewer from a drawer, and gives it a look.
23 D BRIGITTE: What's she doing?
24 D LEONARD: She's building a cake.
25 D BRIGITTE: It's already built.
26 D LEONARD: It's been built wrongly.
27 D BRIGITTE: Leonard, do you ever listen to yourself?
28 D LEONARD: Every morning, dear.
29 A ¶ Mirko turns around in his seat.
30 A He regards the cake the way a general regards a failing front.
31 D MIRKO: Okay. We do this in five minutes. Tamsin, the skewer. Leonard, hold the top tier.
32 D LEONARD: Me?
33 D MIRKO: You have steady hands.
34 D LEONARD: I have a tremor.
35 D MIRKO: Then use the tremor.
36 D BRIGITTE: Mirko, I swear to God.
37 D MIRKO: Madame, I have never lost a cake.
38 D BRIGITTE: You are losing this one.
39 D MIRKO: I am not losing it. I am fixing it.
40 A ¶ He climbs into the back.
* 41 A The van rocks.
42 A Leonard, uncertain, reaches out.
43 A Tamsin kneels.
44 A The skewer slides in at an angle, slowly, and the top tier begins to straighten, one grudging degree at a time.
45 D LEONARD: It's moving.
46 D TAMSIN: It's working.
47 D BRIGITTE (under her breath): Mother of God.
48 D MIRKO: Hold still.
49 D LEONARD: I am still.
50 D MIRKO: You're breathing.
51 D LEONARD: It's a vital function.
* 52 A ¶ The tier snaps into place.
* 53 A A little rain of sugar pearls patters to the floor.
54 A All four of them freeze, hands in the air, as though a bird has landed on them.
55 D BRIGITTE: Well.
56 D MIRKO: Well.
57 D TAMSIN: It's straight.
58 D LEONARD: It's straight.
59 D BRIGITTE (quietly): Thank you, Mirko.
60 D MIRKO: Madame.
61 A ¶ He nods.
62 A He climbs back out.
63 A Brigitte straightens her fascinator.
64 A Leonard wipes his palms on his trousers.
65 A Tamsin sits back, flushed, still holding the skewer like a baton.
* 66 A ¶ The back door of the van swings open.
* 67 A A bright, noisy hall beyond.
* 68 A A clipboard bangs twice on the door frame, and a bored voice somewhere says the cake team is up.
69 D MIRKO: We're ready.
70 A ¶ He looks at the cake.
* 71 A It leans, very slightly, again.
72 D MIRKO [CONT'D] (whispering): Don't breathe.

### SCENE s00503 | INT. OPEN-PLAN OFFICE - CUBICLE 14C - DAY
Detected names (may be incomplete or contain aliases): PERSEVERE, NORBERT PLUM, IMOGEN TRAVIS-OKORO
* 1 A ¶ Grey carpet tiles.
* 2 A Grey partitions.
* 3 A A ficus, plastic, gathering dust on a filing cabinet.
* 4 A A motivational poster: PERSEVERE, with a kayaker in a flooded canyon.
5 A ¶ NORBERT PLUM (50s, short-sleeved dress shirt, lanyard overlong) types with two fingers.
6 A He hasn't smiled since 2011.
7 A ¶ IMOGEN TRAVIS-OKORO (20s, new hire, cardigan with a sticker still on the sleeve) appears at the cubicle opening with a box of donuts.
8 D IMOGEN: Hi! I'm Imogen. I'm in 14D.
9 A ¶ Norbert doesn't look up.
10 D NORBERT: There's no 14D.
11 D IMOGEN: They built it this morning.
12 D NORBERT: Hm.
13 A ¶ She sets the box on his desk.
14 A He finally looks at it.
15 A Then at her.
16 A Then, very slowly, he opens the lid and takes a donut.
17 D NORBERT [CONT'D]: Thank you.
18 D IMOGEN: You're welcome!
19 A ¶ He bites.
20 A His eyes close.
21 A A tear slides from one of them.
22 D IMOGEN [CONT'D]: Are you okay?
23 D NORBERT: Fourteen years. Nobody has ever brought me a donut.
24 A ¶ He wipes his face with the lanyard.
25 A She pulls over a chair and sits.

### SCENE s00504 | EXT. BOCCE COURT - COMMUNITY CLUB - DUSK
Detected names (may be incomplete or contain aliases): NONNO ALDO BARSANTI, LUCIA FERRANTE, DONOVAN BROTHERS, PADRAIC, CORMAC, REFEREE SIGNORA TESTA, KOFI ANTWI
* 1 A ¶ Crushed oyster shell, rolled flat.
* 2 A String lights.
* 3 A Folding chairs along the rail.
* 4 A Final match, tied.
5 A ¶ NONNO ALDO BARSANTI (80s, cardigan, one eye clouded) crouches at the foul line.
6 A His partner LUCIA FERRANTE (70s, sun hat, fierce) stands beside him.
7 A Across the court: the DONOVAN BROTHERS, PADRAIC (50s, mustache) and CORMAC (50s, mustache, identical), arms crossed.
8 A Between them, REFEREE SIGNORA TESTA (60s, whistle, a ruler in her hand) measures the gap between pallino and ball.
9 A In the front row, young KOFI ANTWI (10, orange soda, the only one not wearing white) watches.
10 A ¶ Aldo rolls.
* 11 A The ball curves, kisses the pallino, stops.
12 D LUCIA: Eh!
13 D PADRAIC: That's a touch.
14 D CORMAC: That's a foul.
15 D TESTA (measuring): Touch. Aldo's.
16 D CORMAC: Madonna.
17 A ¶ Cormac hurls his ball.
* 18 A It cracks into Lucia's, scattering the cluster.
19 A Lucia lunges.
20 A Padraic grabs her arm.
21 A Aldo grabs Padraic's collar.
22 A Testa blows the whistle, step-stepping between them with the ruler held like a sword, and Kofi stands on his chair, soda raised, and the entire club goes silent as the pallino rolls to a stop at the exact center of the court.

### SCENE s00505 | INT. ROLLER RINK - SNACK COUNTER - NIGHT
Detected names (may be incomplete or contain aliases): PETRA WOLANSKA, LEVI NAKASHIMA-BOYD
* 1 A ¶ A wood-floored barn with a mirror ball turning slow.
* 2 A Neon palm trees on the walls.
* 3 A The air smells of nacho cheese and floor polish.
* 4 A A disco anthem thumps under the skaters' wheels.
5 A ¶ PETRA WOLANSKA (15, braces, borrowed rental skates laced wrong) sits on the end of a bench, holding a paper cone of fries she isn't eating.
6 A Her eyes track the rink.
7 A ¶ LEVI NAKASHIMA-BOYD (16, concession apron over a hockey jersey, wheels strapped to his work shoes with zip ties) rolls up on the other side of the counter and leans there.
8 D LEVI: You're not skating.
9 D PETRA: I'm resting.
10 D LEVI: For forty minutes?
11 D PETRA: It's a long rest.
12 A ¶ He laughs.
13 A She almost does.
14 A She scoops a fry into her mouth.
15 D LEVI: Come on. I'll show you.
16 D PETRA: I'll fall.
17 D LEVI: Everyone falls.
18 D PETRA: I'll fall in front of people.
19 D LEVI: Those people are eight years old.
20 A ¶ She stands, wobbling, and he reaches over the counter, swings out the gate, and glides to her side.
21 A He offers an elbow.
22 A She grabs it with both hands and they shuffle out onto the boards, Petra rigid as a plank, Levi sliding backward, murmuring instructions, and a group of small children whips past like startled birds.
23 D PETRA: Don't let go.
24 D LEVI: I won't.
25 D PETRA: You're letting go.
26 D LEVI: I'm not.
27 A ¶ He lets go.
28 A She glides, three feet, five, ten, arms out, eyes huge.
29 A She doesn't fall.
30 D PETRA: Levi! Levi, look!
31 D LEVI: I'm looking!
32 A ¶ She laughs, a real laugh now, bright and cracked.
* 33 A The mirror ball throws spots of light across her face, one after another, like small applause.

### SCENE s00506 | EXT. SUSPENSION BRIDGE - INSPECTION GANTRY - DUSK
Detected names (may be incomplete or contain aliases): ASTRID MOLNAR, DAMIAN OYELOWO, INSPECTOR LUDWIG VAHL
* 1 A ¶ Two hundred feet above a gray estuary.
* 2 A The bridge's main cable rises in a long sweep, wrapped in galvanized wire.
* 3 A A narrow steel gantry hangs beneath the deck on rails, rattling in the wind.
4 A ¶ A woman and two men ride it, tethered to the rail by carabiners, as it creeps out along the span.
5 A ¶ ASTRID MOLNAR (40s, structural engineer, yellow helmet, a hammer swinging from her belt) leads, tapping the cable with a small mallet.
6 A She listens to each ring as a doctor listens to a chest.
7 A ¶ DAMIAN OYELOWO (30s, rope-access tech, weathered, grinning) follows, checking every shackle with a gloved thumb.
8 A His camera hangs at his hip, and he photographs every third bolt without being asked.
9 A ¶ The third rides at the back: INSPECTOR LUDWIG VAHL (60s, state auditor, pressed overcoat under the harness, hat clamped under one arm).
10 A He does not look down.
11 A He does not look anywhere in particular.
12 D ASTRID: Stop there.
13 D DAMIAN: Here?
14 D ASTRID: There. Eleven o'clock on the cable.
15 A ¶ Damian leans out.
16 A He points his lens.
* 17 A The shutter clicks.
18 D DAMIAN: Fretting. Maybe a broken wire.
19 D ASTRID: How many?
20 D DAMIAN: I count four.
21 A ¶ Ludwig finally speaks, in a measured voice, as if reading from a script.
22 D LUDWIG: The report states the cables were replaced in 2019.
23 D ASTRID: They were wrapped in 2019.
24 D LUDWIG: Wrapped, replaced.
25 D ASTRID: Not the same.
26 A ¶ He cleans his glasses with a handkerchief and looks, for the first time, at the cable.
27 A He studies it for a long minute.
28 D LUDWIG: How long has she known?
29 D ASTRID: Who?
30 D LUDWIG: Whoever signed the report.
31 A ¶ Damian lowers his camera.
32 A He looks at Astrid.
33 A She looks at the water.
34 D ASTRID: Since the day she signed it.
35 A ¶ Ludwig puts his glasses back on.
* 36 A The gantry shudders as a truck crosses the deck above, the whole structure humming like a plucked string.
37 D LUDWIG: Then I will need your name on the second report.
38 D ASTRID: I thought you'd never ask.
39 A ¶ She holds out the mallet.
40 A He takes it.
41 A He taps the cable once, gently, and listens to the dull tone that rings back, the sound of something old and tired and honest.
* 42 A ¶ Beyond them, a sodium lamp flickers on at the far tower, then the next, then the next, until the whole span is a string of pale lights floating over the dark water.
43 D DAMIAN: Is it going to hold?
44 D ASTRID: Tonight.
45 D DAMIAN: And tomorrow?
46 A ¶ She lays her palm flat against the cable, and does not answer.
* 47 A ¶ The gantry creaks to a halt.
48 A Ludwig glances at the straps looped around his waist, then at the two of them.
49 A Slowly, he unhooks the carabiner from the rail and re-hooks it, twice, as a man might check a lock he already knows is secure.
50 D LUDWIG: Gentlemen. Madam. I am afraid of heights.
51 D DAMIAN (softly): We know.
52 D ASTRID: You did well.
53 A ¶ He nods once.
54 A They stand together on the thin steel, three small figures against an immense gray sky, until the wind drops enough for the gantry to turn back.

### SCENE s00507 | INT. VENTRILOQUIST'S ATTIC - NIGHT
Detected names (may be incomplete or contain aliases): MAXIMILIAN ROOK, KNOCK, WOMAN, JOURNALIST, ODELIA
* 1 A ¶ A low, slant-roofed room under the eaves.
* 2 A Dozens of wooden dummies sit in rows on rickety shelves, glass eyes gleaming.
* 3 A A steamer trunk lies open on the floor, lined with red velvet.
* 4 A Rain taps the skylight.
5 A ¶ MAXIMILIAN ROOK (70s, bow tie askew, dressing gown, white gloves) kneels beside the trunk, tenderly arranging the limbs of a dummy: a small boy in a sailor suit with a painted smile.
* 6 A ¶ A KNOCK at the attic hatch.
7 A A WOMAN climbs through (30s, trench coat, a recorder in her hand), a journalist, shaking rain from her collar.
8 D JOURNALIST: Mr. Rook? I rang the bell.
9 D MAXIMILIAN: The bell doesn't work.
10 D JOURNALIST: I noticed. The door was open.
11 D MAXIMILIAN: It always is.
12 A ¶ She looks around, scanning the shelves.
13 D JOURNALIST: Quite the audience.
14 D MAXIMILIAN: They're my family.
15 D JOURNALIST: All of them?
16 D MAXIMILIAN: Forty-one. Forty-two, with Percy.
17 A ¶ He pats the sailor-boy.
* 18 A Its head lolls, and the painted smile shifts in the lamplight.
19 D JOURNALIST: Odelia Fairweather, from the Courier. May I?
20 A ¶ She sets her recorder on the trunk, clicks it on.
21 D ODELIA: Mr. Rook, you retired in 1974. People say you stopped because you could no longer tell where your voice ended and theirs began.
22 D MAXIMILIAN: People say a great deal.
23 D ODELIA: Is it true?
24 D MAXIMILIAN (gently): Ask Percy.
25 D ODELIA: I'd rather ask you.
26 D MAXIMILIAN: But he's the one who knows.
27 A ¶ He lifts Percy onto his knee.
28 A His hand slides inside the dummy's back.
* 29 A Its jaw clacks.
30 D MAXIMILIAN (a piping boy's voice, lips unmoving): Hello, lady.
31 A ¶ Odelia laughs, uneasy.
32 D ODELIA: Very good.
33 D MAXIMILIAN (the boy's voice, lips unmoving): Max is old. He forgets to eat.
34 D MAXIMILIAN (in his own voice, startled): Percy.
35 D MAXIMILIAN (the boy's voice, lips unmoving): He forgets to sleep. He forgets which of us is which.
36 D MAXIMILIAN: That is enough.
37 D MAXIMILIAN (the boy's voice, lips unmoving): Max, stop moving your lips.
38 A ¶ Maximilian's hand withdraws.
39 A He stares at it.
* 40 A The dummy's jaw hangs open.
* 41 A Silence in the attic.
* 42 A Rain.
43 D ODELIA (whispering): Mr. Rook?
44 D MAXIMILIAN: I did not say that.
45 D ODELIA: I know.
46 D MAXIMILIAN: I was not saying it.
47 A ¶ Odelia reaches for the recorder.
48 A Her hand trembles.
* 49 A The little red light blinks.
50 A From the shelves, one by one, the painted heads begin to turn, wood clicking against wood, until forty-one pairs of glass eyes rest upon the journalist.
51 D MAXIMILIAN (the boy's voice, lips unmoving): Hello, lady. Do stay.
52 A ¶ Maximilian lifts his gloved hands and lets the dummy slide back into the velvet.
* 53 A It settles with a soft sigh.
54 A He stands, gown trailing.
55 D MAXIMILIAN: Miss Fairweather. You had better go.
56 D ODELIA: Mr. Rook, I...
57 D MAXIMILIAN: Go down the stairs. Do not look at the shelves. Do not answer if anyone calls your name.
58 A ¶ She snatches the recorder.
59 A She crosses to the hatch, one step at a time.
60 A Behind her, in the dark, forty-two small voices begin, very quietly, to hum.
61 A ¶ At the hatch she stops.
62 D ODELIA: Will you be all right?
63 D MAXIMILIAN: They've never hurt me.
64 D ODELIA: That isn't what I asked.
65 A ¶ He turns to the shelves.
66 A The old man's shoulders drop, and he smiles for the first time, the exact smile painted on Percy's face.
67 D MAXIMILIAN: Goodnight, my dear.
68 A ¶ She climbs down.
* 69 A The hatch closes on its own.

### SCENE s00508 | INT. FERRY TERMINAL - WAITING ROOM - EARLY MORNING
Detected names (may be incomplete or contain aliases): PERPETUA OSEI-ADJEI, MAN, JULIAN OSEI-ADJEI
* 1 A ¶ Plastic benches bolted in rows.
* 2 A A vending machine glowing blue.
* 3 A A departures board reads CANCELLED in red beside every sailing.
* 4 A Fog presses at the windows like a hand.
5 A ¶ PERPETUA OSEI-ADJEI (60s, camel coat, a small suitcase between her feet) sits alone with her purse on her lap.
6 A She has not taken off her gloves.
7 A ¶ She watches the board.
8 A She watches the door.
9 A She watches nothing.
* 10 A ¶ A clock ticks, loud in the silence.
* 11 A A gull lands on the sill, regards her, and leaves.
* 12 A ¶ The door opens.
* 13 A Cold air.
14 A A MAN steps in, shaking out a wet umbrella: JULIAN OSEI-ADJEI (30s, her son, scarf, luggage on wheels).
15 A He sees her and stops dead.
16 D JULIAN: Mother.
17 D PERPETUA: You came.
18 D JULIAN: You said the 6:15.
19 D PERPETUA: It's cancelled.
20 D JULIAN: I saw the board.
21 A ¶ He crosses to the vending machine.
22 A He studies it without buying.
23 D PERPETUA: They say it will clear by noon.
24 D JULIAN: They always say that.
25 A ¶ He sits, one bench away.
26 A He sets the umbrella down.
* 27 A It drips on the linoleum between them.
28 D PERPETUA: Your father would have liked the fog.
29 D JULIAN: Would he.
30 D PERPETUA: He said fog was honest. Everything looks the way it feels.
31 A ¶ Julian says nothing.
32 A He picks at the handle of his suitcase.
33 D JULIAN: Did you eat?
34 D PERPETUA: A little.
35 D JULIAN: What did you eat?
36 D PERPETUA: Toast.
37 D JULIAN: That isn't a meal.
38 D PERPETUA: It is if you are me.
39 A ¶ He almost smiles.
40 A He rises, crosses to the vending machine, feeds a coin.
* 41 A A packet drops.
42 A He brings it to her.
* 43 A Biscuits.
44 A ¶ She takes them, turns the packet over, reads the ingredients as though they were a letter.
45 D PERPETUA [CONT'D]: Too much sugar.
46 D JULIAN: Eat them anyway.
47 A ¶ She opens the packet.
48 A She eats one.
49 A She offers him the packet.
50 A He takes one.
51 A They chew in silence.
52 D JULIAN [CONT'D]: When did you last visit the grave?
53 D PERPETUA: Sunday.
54 D JULIAN: I haven't been in a year.
55 D PERPETUA: I know.
56 D JULIAN: I didn't know what to say to him.
57 D PERPETUA: He wouldn't have talked back.
58 D JULIAN: That's the problem.
59 A ¶ A soft laugh.
60 A She folds the packet and tucks it into her purse.
* 61 A The loudspeaker clicks on: a bored recorded voice announces a one-hour delay.
62 D JULIAN [CONT'D]: One hour.
63 D PERPETUA: One hour.
64 D JULIAN: We could go.
65 D PERPETUA: Where?
66 D JULIAN: The grave. It's ten minutes by taxi.
67 A ¶ She looks at him.
68 A Her gloved hands tighten on the purse.
69 A Her eyes go to the window, where the fog is thinning.
70 D PERPETUA: I'll need to freshen my lipstick.
71 D JULIAN: Take your time.
72 A ¶ She stands.
73 A She straightens her coat.
74 A She picks up her small suitcase, and he, without being asked, takes it from her hand.
75 A ¶ They walk to the door together.
76 A At the threshold he holds it open, and she goes through first, into the gray.

### SCENE s00509 | INT. COURTHOUSE - BASEMENT BOILER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ATTORNEY NADINE KOWALSKI-BEAUFORT, CUSTODIAN, WALTER, PROSECUTOR LEOPOLD ASHWORTH
* 1 A ¶ Pipes the width of tree trunks.
* 2 A A hissing furnace.
* 3 A A single caged bulb.
* 4 A On a workbench: a jar of coffee and a radio playing low jazz.
5 A ¶ ATTORNEY NADINE KOWALSKI-BEAUFORT (40s, wet raincoat, briefcase) picks her way between the pipes, calling softly.
6 D NADINE: Mr. Fitch? Walter Fitch?
* 7 A ¶ A rattle of keys.
8 A An old CUSTODIAN (60s, coveralls, ring of keys at his belt) steps from behind the boiler, wiping his hands on a rag.
9 D CUSTODIAN: You're not allowed down here.
10 D NADINE: I'm Nadine Kowalski. Your daughter's attorney.
11 D CUSTODIAN (a pause): Celeste has an attorney?
12 D NADINE: She does now.
13 A ¶ He sets the rag on the workbench, studies her, then pulls a second stool from the shadows.
14 A She sits.
15 A He pours coffee into a chipped mug and slides it across.
16 D CUSTODIAN [CONT'D]: Black. Sorry. No cream.
17 D NADINE: Black's fine.
* 18 A ¶ The jazz plays.
* 19 A The furnace ticks.
20 D NADINE [CONT'D]: Mr. Fitch, your daughter is on trial tomorrow.
21 D WALTER: I know.
22 D NADINE: She says she was at home the night of the break-in. She says she was with you.
23 D WALTER: I'd say the same.
24 D NADINE: Were you?
25 A ¶ He rubs his jaw.
* 26 A The keys clink at his belt.
27 D WALTER: I'm the night janitor. I'm here nights.
28 D NADINE: So you weren't with her.
29 D WALTER: No.
30 D NADINE: Then why would she say it?
31 D WALTER: Because I told her to.
32 A ¶ She puts down her mug.
33 A Slowly, she folds her hands.
34 D NADINE: Mr. Fitch, I need you to repeat that very carefully.
35 D WALTER: I told her to say it. I knew the judge would believe a father.
36 D NADINE: You knew she wasn't home.
37 D WALTER: I knew where she was.
38 D NADINE: Where?
39 D WALTER: Here.
* 40 A ¶ The caged bulb swings.
* 41 A Shadows lurch across the pipes.
42 A Nadine stands.
43 D NADINE: Here? In the courthouse?
44 D WALTER: Down here. With me. She came to fix a pipe.
45 D NADINE: Why would she—
46 D WALTER: She's a plumber, Ms. Kowalski. She works nights. She was in the east vault, patching a leak, the night someone cleaned out the evidence room upstairs.
47 D NADINE: So she had access.
48 D WALTER: She had a keycard I gave her.
49 D NADINE: And you didn't tell the police.
50 D WALTER: I'm telling you.
51 D NADINE: Why now?
52 D WALTER: Why now?
53 A ¶ They stop.
* 54 A The radio plays a soft saxophone note.
55 A He smiles, grimly.
56 D WALTER [CONT'D]: Because the man who stole it is the one prosecuting her.
57 A ¶ Nadine sits down very slowly.
* 58 A The mug rattles on the bench.
* 59 A ¶ High above, a door opens.
60 A Footsteps descend the iron stairs, unhurried.
61 A A silhouette stops at the bottom step: PROSECUTOR LEOPOLD ASHWORTH (50s, charcoal suit, cufflinks catching the bulb).
62 D ASHWORTH: Evening, Walter. Visitors?
63 A ¶ Walter does not turn.
64 A Nadine slowly closes her briefcase.

### SCENE s00510 | INT. BANQUET HALL - QUINCEAÑERA - NIGHT
Detected names (may be incomplete or contain aliases): DJ, XIMENA DELGADILLO-PARK, ABUELA CONSUELO, RAMIRO
* 1 A ¶ Crepe-paper arches.
* 2 A A chocolate fountain.
* 3 A A disco ball.
* 4 A Tables set with pink linen, centerpieces of plastic roses.
* 5 A A DJ booth sits abandoned, the music paused mid-song.
6 A ¶ XIMENA DELGADILLO-PARK (15, ball gown, tiara slipping, sneakers visible beneath the hem) stands alone on the dance floor, spotlit by a single light.
7 A ¶ Behind a pillar, ABUELA CONSUELO (70s, black lace, rosary bracelet) watches her.
8 A ¶ Across the room by the buffet, TÍO RAMIRO (50s, shiny suit, tie loosened, wine glass in hand) leans on a table.
9 D XIMENA: Where is he?
* 10 A ¶ Nobody answers.
11 D XIMENA [CONT'D]: Where is my father?
12 A ¶ Ramiro sets his glass down.
13 A Consuelo steps out from behind the pillar.
14 D CONSUELO: Mija.
15 D XIMENA: He promised.
16 D RAMIRO: He's on his way.
17 D XIMENA: He said that at the church.
18 D RAMIRO: Traffic.
19 D XIMENA: It's a Saturday, Tío.
* 20 A ¶ Silence.
* 21 A The disco ball turns.
* 22 A Little diamonds of light slide over the tables.
23 D CONSUELO: Come. Dance with your grandmother.
24 D XIMENA: I don't want to dance.
25 D CONSUELO: Ximena.
26 D XIMENA: It's my party and he isn't here.
27 A ¶ She yanks the tiara off and throws it across the floor.
* 28 A It skitters and spins under a table.
29 A Ramiro starts forward; Consuelo raises a hand to stop him.
30 A Ximena kicks off one sneaker, then the other.
* 31 A They bounce off the stage.
32 D RAMIRO: Don't do this.
33 D XIMENA: Do what? Embarrass him?
34 D RAMIRO: Embarrass yourself.
35 D XIMENA: Good.
36 A ¶ She storms to the banquet table, grabs a tray of cupcakes, and sends it crashing to the floor.
* 37 A The hall freezes.
* 38 A Frosting splatters.
39 A A distant guest gasps.
40 A ¶ Consuelo and Ramiro both advance on her.
41 A She backs against the fountain and the chocolate wobbles in its tiers.
42 D CONSUELO: Mi amor.
43 D XIMENA: Don't call me that.
44 A ¶ Ramiro stops.
45 A Consuelo keeps coming.
* 46 A She holds out her arms, the rosary jangling.
47 D XIMENA [CONT'D] (a whisper): He isn't coming.
48 D CONSUELO: No.
49 D XIMENA: He's never coming.
50 D CONSUELO: No.
51 A ¶ The girl crumples into her grandmother's arms.
52 A They stand there, a small black-lace shape and a large pink one, rocking.
* 53 A Ramiro takes off his jacket and lays it on Ximena's shoulders.
* 54 A ¶ The DJ booth crackles.
* 55 A The paused song restarts, soft and slow.
56 D RAMIRO (gruff): I'll dance with you, mija. I'm a terrible dancer.
57 A ¶ Ximena laughs into the lace.
58 A She wipes her face.
* 59 A She looks up.
60 D XIMENA: You're the worst dancer I know.
61 D RAMIRO: And yet here I am.
62 A ¶ He offers his hand.
63 A She takes it.
64 A They walk onto the floor in her bare feet and his dress shoes, and Consuelo stands to the side, one hand to her heart.

### SCENE s00511 | INT. CATHEDRAL BELL TOWER - DAY
Detected names (may be incomplete or contain aliases): SERGEANT IRENE VASCONCELOS, PRIVATE HAMZA QURESHI, CORPORAL OTTOLINE DE WILDE
* 1 A ¶ Stone steps spiral up into a chamber of oak beams and ancient dust.
* 2 A Light falls through louvered slits in thin gold bars.
* 3 A In the center, a bronze bell the size of a truck, tongue wrapped in canvas.
4 A ¶ SERGEANT IRENE VASCONCELOS (30s, face smeared with soot, helmet netted with dry grass) lies prone at a slit window, rifle braced, a cold cup of tea beside her elbow.
* 5 A Below, a ruined square lies empty under the sun.
6 A ¶ PRIVATE HAMZA QURESHI (19, spotter, binoculars on a strap) kneels at the next slit, lips moving silently as he counts windows across the plaza.
7 A ¶ CORPORAL OTTOLINE DE WILDE (40s, radio operator, a darned sock peeking from her boot) sits against the bell with the handset in her lap.
8 A She is knitting something small and gray.
* 9 A ¶ Nobody speaks for a long time.
10 A ¶ Down in the square, a dog crosses, trots, stops, sniffs a boot.
11 A Hamza lowers his binoculars.
12 A Irene does not move.
13 D OTTOLINE: Was a good dog, once.
14 D IRENE: Mm.
15 A ¶ The dog moves on.
16 A Hamza lifts the glasses.
17 A Ottoline's needles click.
* 18 A The bell ticks softly as the stone cools.
19 D HAMZA (barely audible): Four minutes.
20 A ¶ Irene breathes out, slowly, and in.
21 A She touches the cold tea with one finger, not drinking it.

### SCENE s00512 | EXT. RIVER CROSSING - DAY
Detected names (may be incomplete or contain aliases): DRIVER AMOS PRICKETT, LEONORA VASQUEZ-TATE, BOY, LIJAH, TATE
* 1 A ¶ A swollen brown river, wide and quick.
* 2 A A stagecoach sits in the middle of it, wheels sunk to the hubs, water slapping at the doors.
* 3 A The horses stand with heads low, trembling.
4 A ¶ DRIVER AMOS PRICKETT (50s, duster, hat tied on with a bandanna) stands on the box with the reins in both fists, staring at the far bank.
5 A ¶ Inside, face pressed to the window, sits MRS. LEONORA VASQUEZ-TATE (40s, black traveling dress, hatbox in her lap).
6 A Beside her, a BOY in a derby, ELIJAH "LIJAH" TATE (12, her son), grips the leather strap.
7 D AMOS (without turning): Ma'am, I'd keep still.
8 D LEONORA: We have been still for an hour.
9 D AMOS: Then you're good at it.
* 10 A ¶ The coach shifts.
* 11 A The hatbox slides.
12 A Lijah catches it.
13 D LIJAH: Ma, the water's coming in.
14 D LEONORA: I see it.
15 D LIJAH: Is it going to tip?
16 A ¶ She doesn't answer.
17 A Her gloved hand reaches over and settles over his, over the strap, over the hatbox.
18 D AMOS: Whole thing's gonna shift. When it does, you climb up here, both of you. Don't look down.
19 A ¶ Leonora and Lijah both reach for the door.
20 A Amos swears, swings down onto the roof, and hooks an arm through the luggage rail; the coach lurches, the horses scream, and Leonora tumbles into her son.
21 A They tangle in the narrow seat for a second, then Amos throws open the door and hauls them up one after the other onto the box.
22 A ¶ They crouch there, three figures in a row on the top of a sinking coach.
* 23 A The water tugs at the wheels.
24 A Somewhere on the far bank, a dog begins to bark.
25 D LIJAH (small): Mister Prickett?
26 D AMOS: Yeah.
27 D LIJAH: I lost my hat.
28 A ¶ Amos looks.
* 29 A The derby is floating away on the current, turning like a leaf.
30 D AMOS: Reckon it's going where we're going.
31 D LEONORA (low): Amos.
32 D AMOS: Ma'am.
33 A ¶ She opens the hatbox.
* 34 A Inside, folded in tissue, lies a child's christening gown.
35 A She lifts it out.
36 A She holds it to her face.
37 D LEONORA: I don't want it to be ruined.
38 D AMOS: It won't be.
39 A ¶ She gives it to Lijah.
40 A He tucks it inside his shirt.
* 41 A The coach settles, and holds.
42 A ¶ The horses start forward on their own.
* 43 A The wheels bite the river bed.
* 44 A Slowly, with a groan of timber, they climb toward the bank.

### SCENE s00513 | INT. CHEESE AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HONORIA WYNDHAM-LEE, FERMIN OKONKWO-DAHL, MADAME SOLANGE ARQUETTE, ROLLO PINKERTON
* 1 A ¶ A limestone tunnel hung with lanterns.
* 2 A Wooden shelves stacked with wheels of cheese, each stamped with a date.
* 3 A The air is cold, damp, and sharp with ammonia.
* 4 A Somewhere, water drips.
5 A ¶ INSPECTOR HONORIA WYNDHAM-LEE (50s, tailored overcoat, gloves) walks the aisle with a leather satchel, tapping the wheels with a small silver hammer.
6 A ¶ Behind her trails FERMIN OKONKWO-DAHL (30s, cheesemonger, rubber apron), who holds a lantern high.
7 A Further back, the owner, MADAME SOLANGE ARQUETTE (60s, shawl, a wedge of cheese in her fist), muttering as she chews.
8 A ¶ A fourth figure, ROLLO PINKERTON (40s, apprentice, nervous grin), drifts at the end of the line, tidying shelves nobody asked him to tidy.
9 D HONORIA (to the group): I'll be quick. Where was Monsieur Brisard found?
10 D FERMIN: Between those two racks. Behind the Gruyère.
11 D HONORIA: Face up?
12 D FERMIN: Face down.
13 D HONORIA: In the rind?
14 D FERMIN: In the rind.
15 D SOLANGE (to herself): Forty years I have made this cheese.
16 D HONORIA: Madame Arquette?
17 D SOLANGE: Forty years and never a murder.
18 D HONORIA: We aren't calling it that yet.
19 D SOLANGE: You didn't say "accident."
20 A ¶ Honoria crouches by the rack.
21 A She runs a glove along the wooden slats and holds it to the light: a streak of blue-green mold.
22 D HONORIA: Rollo.
23 D ROLLO: Yes, Inspector?
24 D HONORIA: When did you last wash these shelves?
25 D ROLLO: Tuesday.
26 D HONORIA: This mold is a week old.
27 D ROLLO: I might have missed a spot.
28 D HONORIA: Rollo, did you see Monsieur Brisard on Tuesday?
29 D ROLLO (too fast): No.
30 D FERMIN: You did. You gave him his lunch.
31 D ROLLO: That was Monday.
32 D SOLANGE (muttering): Monday, Tuesday. All the same in a cave.
33 D HONORIA (to the room): Everyone stay where you are. Fermin, the lantern lower. There.
34 A ¶ The light drops.
* 35 A On the stone floor, almost invisible, a trail of fine white powder leads away down the tunnel.
36 D HONORIA [CONT'D] (quietly): Now that is interesting.

### SCENE s00514 | INT. OBSERVATORY DOME - SÉANCE - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ZELDA VOSKUIJLEN, PROFESSOR EDMUND HARTWELL, YOUNG WOMAN, MAN
* 1 A ¶ A great brass telescope tilts toward a slit of stars.
* 2 A A round oak table fills the center of the floor, ringed by four chairs.
* 3 A A single candle gutters.
* 4 A The dome creaks as it turns.
5 A ¶ MADAME ZELDA VOSKUIJLEN (60s, turban, rings on every finger) presides, palms flat on the wood.
6 A To her left sits PROFESSOR EDMUND HARTWELL (70s, astronomer, pocket watch); to her right, a YOUNG WOMAN in mourning grey (20s, veil pushed back); opposite, a MAN in a damp overcoat who has given no name (40s, gloved).
7 D MADAME ZELDA: Hands joined. Breathe. Is there a presence among us?
* 8 A ¶ The candle gutters.
9 A Hartwell clears his throat.
10 D HARTWELL: My dear, is this strictly necessary?
11 D YOUNG WOMAN: Hush.
12 D MADAME ZELDA: Is there a presence?
* 13 A ¶ The telescope creaks as though a hand had nudged it.
* 14 A The dome stills.
* 15 A A single cold breath crosses the table.
16 D MAN (low): Adelheid?
17 A ¶ The Young Woman jerks her hand free.
18 D YOUNG WOMAN: Who said that?
19 D HARTWELL (over her): Edmund, I mean, I did not.
20 D MADAME ZELDA (over both): Silence! Hands!
21 D MAN: It's not the dead who answer. It's the clock in your pocket, Professor.
22 A ¶ Hartwell pulls out the pocket watch.
* 23 A It is ticking backward.
24 D HARTWELL: This is not possible.
25 A ¶ The Young Woman stands, ripping off her veil.
26 A She is not young.
27 A She is ADELHEID HARTWELL (50s, his wife, long thought drowned), her face lit white by the candle.
28 D ADELHEID: Hello, Edmund.
29 A ¶ The Man removes his glove and lays a badge on the table.
30 A Hartwell sways.

### SCENE s00515 | INT. CARTOGRAPHER'S MAP ROOM - ROYAL GEOGRAPHICAL SOCIETY - DAY - 1887
Detected names (may be incomplete or contain aliases): SIR RUPERT ASHBY-LOVELL, MISS ANNELIESE BASU, THADDEUS OKEKE
* 1 A ¶ A long hall lined with oak map drawers.
* 2 A A skylight pours soft gray light onto a drafting table the size of a rowboat.
* 3 A Globes in brass frames.
* 4 A A smell of vellum, ink, and cold tea.
5 A ¶ SIR RUPERT ASHBY-LOVELL (60s, silver whiskers, frock coat) stoops over the table, magnifying glass in hand.
* 6 A A half-finished map of the Zambezi lies pinned open.
7 A ¶ MISS ANNELIESE BASU (30s, drafting apron, spectacles pushed up into her hair) stands at his shoulder, holding a bottle of india ink.
8 A She is the only woman in the building not carrying a tray.
9 A ¶ On the far side of the table, MR. THADDEUS OKEKE (40s, young curator, ink stains on his cuffs, a chart tube under his arm) fidgets with a ruler.
10 D SIR RUPERT: The river bends.
11 D ANNELIESE: It does not.
12 D SIR RUPERT: I have seen the sketches. It bends east.
13 D ANNELIESE: You have seen one sketch. By a man who was never within a hundred miles.
14 D THADDEUS: Sir Rupert, if I may.
15 D SIR RUPERT: You may not.
16 D ANNELIESE: He may.
17 D SIR RUPERT: Miss Basu.
18 D ANNELIESE: Mr. Okeke measured it himself.
19 D THADDEUS (unrolling the chart): Three summers, sir. On foot. With a theodolite and a very bad mule.
20 A ¶ Sir Rupert straightens.
21 A The magnifying glass lowers.
* 22 A For a moment nobody speaks.
* 23 A A clock ticks.
24 D SIR RUPERT: Show me.
25 A ¶ Thaddeus spreads the chart.
* 26 A The river on it runs straight, then bends west, a long soft curve.
27 A Anneliese sets the india ink beside it.
28 A Sir Rupert bends close.
29 D SIR RUPERT [CONT'D]: That is not on my map.
30 D ANNELIESE: No, sir.
31 D SIR RUPERT: This will cost the Society a reprint.
32 D THADDEUS: Seven hundred pounds.
33 D SIR RUPERT: Seven hundred.
34 D ANNELIESE: It is a very small sum for being right.
35 A ¶ He eyes her.
36 A She meets his eye.
37 A A long, silent, civil duel of gazes.
38 D SIR RUPERT: Miss Basu, you are impertinent.
39 D ANNELIESE: Yes, sir.
40 D SIR RUPERT: Mr. Okeke, you are insubordinate.
41 D THADDEUS: Yes, sir.
42 D SIR RUPERT (softly): You are both entirely correct.
43 A ¶ He takes the pen from the stand and, with a hand that trembles only slightly, strikes through the old river and begins to draw the new one.

### SCENE s00516 | INT. COURTROOM 4B - NIGHT
Detected names (may be incomplete or contain aliases): JUDGE HARRIET BALOGUN-REYNOLDS, ATTORNEY QUIGLEY
* 1 A ¶ A vast oak-paneled room, dark except for the red glow of an emergency exit sign.
* 2 A A power outage has stopped the clocks.
* 3 A Benches are empty.
* 4 A A stenographer's chair sits angled away from the bench.
* 5 A The witness box stands open like an unlit stage.
6 A ¶ JUDGE HARRIET BALOGUN-REYNOLDS (60s, black robe, flashlight under her chin) sits at the bench, peering through reading glasses at a conference phone placed before her.
* 7 A Its tiny green light is the only steady glow in the room.
8 D HARRIET (to the room): For the record, we are proceeding under emergency conditions.
* 9 A ¶ The phone crackles.
10 D ATTORNEY QUIGLEY [V.O.] (through the speaker, tinny): Your Honor, I'm in the parking structure. My signal is poor. Can you hear me?
11 D HARRIET: Barely, Counselor.
12 D QUIGLEY [V.O.]: Your Honor, I move for a continuance.
13 D HARRIET: Denied.
14 D QUIGLEY [V.O.]: Your Honor, the power is out.
15 D HARRIET: The law is not.
16 A ¶ She sets down her flashlight.
* 17 A It rolls.
18 A She chases it with two fingers, mutters.
19 D HARRIET [CONT'D] (to herself): Forty years. Never a continuance for weather.
20 D QUIGLEY [V.O.]: I didn't catch that.
21 D HARRIET: You weren't meant to.
22 A ¶ She rubs her eyes.
* 23 A The sign hums.
* 24 A The silence stretches.
25 D HARRIET [CONT'D]: Counselor, your client has been waiting nine months for this hearing.
26 D QUIGLEY [V.O.]: He's waiting in the car.
27 D HARRIET: Bring him up.
28 D QUIGLEY [V.O.]: Your Honor?
29 D HARRIET: Stairs. Eleven flights. By candlelight if necessary.
30 D QUIGLEY [V.O.]: Your Honor, he's seventy-eight.
31 D HARRIET: I know how old he is.
* 32 A ¶ A pause.
* 33 A A long breath crackles on the line.
34 D QUIGLEY [V.O.]: We'll be there in twenty minutes.
35 D HARRIET (softly): Take thirty.
36 A ¶ She switches off the flashlight.
* 37 A The red sign glows.
38 A She folds her hands, a small figure in a great black robe, and waits.

### SCENE s00517 | EXT. WATER TOWER - STALLED TRAIN - HIGH DESERT - DAY
Detected names (may be incomplete or contain aliases): ENGINEER SILAS DUNBAR, FIREMAN CALLUM NAKAGAWA, MARSHAL DELPHINE ARCENEAUX, CONDUCTOR BARTHOLOMEW ENGSTROM, TELEGRAPH CLERK
* 1 A ¶ A locomotive idles at a sun-blasted siding.
* 2 A The wooden tank towers above, dripping from its spout.
* 3 A Dust.
* 4 A A coil of rope.
* 5 A A line of boxcars stretching behind into the heat.
6 A ¶ ENGINEER SILAS DUNBAR (50s, striped cap, grease to the elbows) hangs from the water spout, wrestling the chain.
7 A Below him, FIREMAN CALLUM NAKAGAWA (20s, bare-chested, black with soot) braces the ladder.
8 A Standing in the shade of the tank, hand on her pistol, waits MARSHAL DELPHINE ARCENEAUX (40s, tan duster, silver badge).
* 9 A ¶ A telegraph key chatters from the little station beside the track.
10 A Up on the first boxcar roof, CONDUCTOR BARTHOLOMEW ENGSTROM (60s, brass buttons, pocket watch) cups his hands to his mouth.
11 D BARTHOLOMEW: Passengers inside! Shutters down!
12 D TELEGRAPH CLERK [O.S.] (shouting from the station): Marshal! Wire from Santa Fe! Riders on the ridge!
13 D DELPHINE: How many?
14 D TELEGRAPH CLERK [O.S.]: Eight! Maybe ten!
15 D SILAS (from the spout): Callum, haul!
16 D CALLUM: Hauling!
17 D DELPHINE: Silas, how long for the tank?
18 D SILAS: Five minutes!
19 D DELPHINE: You have two.
20 A ¶ Callum strains on the chain.
21 A The spout swings; water crashes down in a silver wall, drenching the three of them as they grab the ladder, the pipe, the pistol, and scatter in separate directions.
22 A Silas drops to the ties.
23 A Callum leaps for the cab.
24 A Delphine drops to one knee and raises her rifle toward the ridge.
25 A ¶ On the ridge, tiny horsemen appear against the sky.
26 D DELPHINE [CONT'D]: Callum! Full steam!
27 D CALLUM: Aye!
* 28 A ¶ The locomotive shrieks.
* 29 A Steam bursts.
* 30 A The train lurches forward.

### SCENE s00518 | INT. FUNICULAR RAILWAY - CAR 2 - NIGHT
Detected names (may be incomplete or contain aliases): IMANI KARANJA-WELLS, MAN, IGNATIUS ABRAMOWITZ, ENRIQUE VALD, S-MORROW
* 1 A ¶ A steep little tram climbing a mountain of lights.
* 2 A Wooden benches, brass rails, windows fogged from breath.
* 3 A Below, the city sprawls like spilled jewelry.
* 4 A The cable hums.
5 A ¶ IMANI KARANJA-WELLS (30s, wool coat, camera bag) sits alone on a bench, bundled against the cold.
6 A She gazes at the city.
7 A A thermos cup warms her hands.
* 8 A ¶ Across the aisle, at the far end, an old couple's empty seats.
* 9 A A conductor's bell hangs unrung.
* 10 A The car climbs, slow and gentle.
11 A ¶ At the next stop, the doors hiss open and a MAN steps in, dusting snow from his shoulders: IGNATIUS ABRAMOWITZ (30s, big red scarf, paper bag of roasted chestnuts).
12 A He freezes at the sight of her.
13 D IGNATIUS: Imani?
14 D IMANI: Ignatius.
15 D IGNATIUS: I thought you were in Lisbon.
16 D IMANI: I was in Lisbon. Then I wasn't.
17 D IGNATIUS: How long?
18 D IMANI: Three weeks.
19 A ¶ He nods.
20 A He sits down, one bench across.
* 21 A The doors close.
* 22 A The car climbs on.
23 D IGNATIUS: Chestnut?
24 D IMANI: Sure.
25 A ¶ He passes the bag.
26 A She takes one.
27 A It burns her fingers.
28 A She tosses it from hand to hand.
29 D IGNATIUS: They're hot.
30 D IMANI: I noticed.
* 31 A ¶ Silence.
* 32 A The city drops away below the windows.
33 D IGNATIUS: I got your postcard.
34 D IMANI: Did you?
35 D IGNATIUS: Three of them. They all said the same thing.
36 D IMANI: Which was?
37 D IGNATIUS: "Wish you were here."
38 D IMANI: That's the whole message.
39 D IGNATIUS: It's an interesting message to send to a man you left.
40 A ¶ She says nothing.
41 A She cracks the chestnut.
42 A Eats half.
43 A Offers him the rest.
44 A He takes it.
45 D IMANI: I didn't leave you.
46 D IGNATIUS: You left a note.
47 D IMANI: I left a note because I couldn't say it.
48 D IGNATIUS: Say what?
49 D IMANI: That I was scared.
* 50 A ¶ A light flickers on the car's ceiling.
* 51 A The funicular shudders to a halt.
* 52 A Silence.
* 53 A The cable stops humming.
54 D IGNATIUS: Are we stuck?
55 D IMANI: Looks like it.
* 56 A ¶ A third voice, rough and breathless, cuts in from the platform as the door slides open.
57 A A conductor in a gray cap, ENRIQUE VALDÉS-MORROW (60s, whistle around his neck, lantern swinging), leans into the car.
58 D ENRIQUE: Power cut, folks. Ten minutes. Sit tight.
59 D IMANI: Thank you.
60 D IGNATIUS: We're not going anywhere.
61 A ¶ Enrique glances from one to the other.
62 A He tips his cap and slides the door shut.
63 D IMANI (quietly): You said that on purpose.
64 D IGNATIUS: Which part?
65 D IMANI: We're not going anywhere.
66 A ¶ He looks at the city.
* 67 A Its lights shimmer through the fogged glass.
68 D IGNATIUS: I meant it.
69 A ¶ She leans her head against the window.
70 A A tiny smile.
71 D IMANI: Ten minutes.
72 D IGNATIUS: Ten minutes.
73 D IMANI (very softly): Then say something.
74 A ¶ He opens his mouth.
* 75 A Outside, all the lights in the city flicker, die, and then, one by one, come back.

### SCENE s00519 | INT. CLOCK REPAIR SHOP - DAY
Detected names (may be incomplete or contain aliases): CLEMENTINE HAWTHORNE-DIAZ, BLESSING OYELARAN, DETECTIVE MARCELLINE ROUX
* 1 A ¶ A cramped shop crowded with ticking.
* 2 A Wall clocks, cuckoo clocks, a grandfather in a corner.
* 3 A Brass gears on a velvet tray.
* 4 A A lamp with a magnifying arm.
* 5 A Dust motes drift in the window light.
6 A ¶ CLEMENTINE HAWTHORNE-DIAZ (50s, watchmaker's loupe on a headband, apron full of tiny tools) bends over a pocket watch, tweezers in hand.
7 A Her assistant BLESSING OYELARAN (20s, sleeves pushed up) sits at a second bench polishing a mainspring.
8 A Across the counter stands DETECTIVE MARCELLINE ROUX (40s, trench coat, notebook), who has been silent for some time.
9 D CLEMENTINE: It stopped at 9:47.
10 D ROUX: I know.
11 D CLEMENTINE: Someone smashed the crystal.
12 D ROUX: I know.
13 D CLEMENTINE: And bent the hands. Somebody wanted it to stop there.
14 D ROUX: Yes.
15 A ¶ She sets down the tweezers.
16 A Blessing looks up.
17 A Roux flips a page of her notebook.
18 D ROUX [CONT'D]: When did you sell it?
19 D CLEMENTINE: March. A woman came in. Tall. Hat. She paid in cash.
20 D ROUX: Name?
21 D CLEMENTINE: She didn't give one.
22 D BLESSING: She did.
23 A ¶ Clementine turns to her.
24 A Blessing shrinks.
25 D BLESSING [CONT'D]: When I wrote the receipt. She said Pettigrew.
26 D ROUX: Pettigrew?
27 D BLESSING: She spelled it. P-E-T-T-I-G-R-E-W.
28 D ROUX (writing): That's the victim's name.
* 29 A ¶ A cuckoo clock chimes.
* 30 A The bird shoots out, crying, and retreats.
31 A Clementine waits for it to finish before she speaks.
32 D CLEMENTINE: She bought her own watch.
33 D ROUX: Or someone wanted me to think so.
34 D BLESSING: Why would she smash it?
35 D ROUX: Because she wasn't the one who died at 9:47.
* 36 A ¶ Silence.
* 37 A The grandfather clock ticks once.
* 38 A Twice.
39 A Roux closes her notebook and gazes at the face of every clock in the room.
* 40 A ¶ Every one of them shows a slightly different time.

### SCENE s00520 | INT. CHEESE AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): OSEI ADJEI-BOATENG, PRIYA RAMANATHAN, RADIO, MARGUERITE, DMITRI VOLKOV
* 1 A ¶ Limestone walls sweat.
* 2 A Racks of wheels, floor to ceiling.
* 3 A Cold.
* 4 A Blue work-lights hum.
5 A ¶ OSEI ADJEI-BOATENG, 40s, hairnet, rubber apron, taps a wheel with a brass mallet.
6 A Listens.
7 A Moves on.
8 A ¶ PRIYA RAMANATHAN, 20s, clipboard, headlamp, trails him.
9 A New hire.
10 A Overeager.
11 D PRIYA: Eleven months on that one?
12 D OSEI: Fourteen.
13 D PRIYA: It sounds hollow.
14 D OSEI: It sounds fine.
15 A ¶ He keeps walking.
16 A She keeps writing.
* 17 A ¶ A rack of Alpine wheels.
* 18 A Humidity gauge.
* 19 A Everything in order.
20 D PRIYA: Nobody else works nights?
21 D OSEI: Nobody else wants to.
22 D PRIYA: Why do you?
23 D OSEI: Quiet.
* 24 A ¶ A drip.
* 25 A Somewhere deep in the cave, metal clicks.
* 26 A Soft.
* 27 A Regular.
28 A ¶ Priya glances up.
29 A Osei does not.
30 D PRIYA: Is that --
31 D OSEI: Pipes.
* 32 A ¶ Beat.
* 33 A The clicking stops.
34 A ¶ Priya relaxes.
35 A Laughs at herself.
36 D PRIYA: Sorry. First week. Everything's a ghost.
37 D OSEI: There's coffee in the cold room. Go. Warm up.
38 D PRIYA: You sure?
39 D OSEI: Go.
40 A ¶ She goes.
41 A Her headlamp swings away down the aisle.
42 A ¶ Osei waits.
43 A Counts her footsteps.
* 44 A Silence.
45 A ¶ He crouches.
46 A Pulls a wheel half out of the lowest rack.
* 47 A Behind it: a gap.
* 48 A Duffel bag.
49 A ¶ He unzips it.
* 50 A Cash.
* 51 A Banded.
* 52 A Stacks of it.
* 53 A ¶ A RADIO crackles on his belt.
54 D MARGUERITE [V.O.] (over radio): Osei. Dock camera shows a van.
55 D OSEI (low): Not mine.
56 D MARGUERITE [V.O.] (over radio): Nobody's on the schedule tonight. Nobody.
57 A ¶ Osei zips the bag.
58 A Stands.
59 A Looks toward the cold room.
60 D OSEI (into radio): The new girl. Who hired her?
61 D MARGUERITE [V.O.] (over radio): Nobody hired her.
62 A ¶ Osei's hand goes to the mallet.
* 63 A ¶ Footsteps.
* 64 A Not Priya's.
* 65 A Heavy.
* 66 A Behind him.
67 A ¶ DMITRI VOLKOV, 50s, wet wool coat, gray stubble, steps out from between two racks.
68 A Hands in pockets.
69 A Smiling like a man at a funeral reception.
70 D DMITRI: Osei. Good. Saved me the search.
71 D OSEI: You're early.
72 D DMITRI: She's very good, no? The girl. Two weeks of paperwork. Fourteen months of cheese.
73 A ¶ Priya returns.
74 A No clipboard.
75 A No headlamp.
76 A A small pistol, held steady.
77 D PRIYA (flat): Bag.
78 A ¶ Osei lifts the duffel.
79 A Slowly.
80 D OSEI: Your coffee's cold.
81 D PRIYA: So are you.
82 A ¶ Dmitri takes the bag.
83 A Weighs it in one hand.
84 D DMITRI: Count it.
85 D PRIYA: I did. Last Tuesday.
86 A ¶ Osei looks at the mallet.
87 A At the wheel.
88 A At the exit.
89 D MARGUERITE [V.O.] (over radio): Osei? Osei, answer me.
90 A ¶ Dmitri plucks the radio off his belt.
91 A Turns it off.
92 D DMITRI: She talks a lot, your wife.
93 A ¶ Osei's jaw sets.
94 D OSEI: She's calling the police.
95 D DMITRI: She is calling the dock. The dock is mine.
96 A ¶ Priya cocks the pistol.
* 97 A The click echoes down the cave.
* 98 A The same click from before.
99 A ¶ Osei closes his eyes.
100 D OSEI: Pipes.
101 D PRIYA: Pipes.

### SCENE s00521 | INT. LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): NKEM OKPARA, BART, LENNOX
* 1 A ¶ Fluorescent hum.
* 2 A One dryer turning, a single red sock tumbling.
3 A ¶ NKEM OKPARA, 30s, in a hospital lanyard, stares at a folded child's pajama set.
4 A BARTHOLOMEW "BART" LENNOX, 60s, mop in hand, watches from the doorway.
5 D BART: You been here since midnight. Machine two's been done since one.
6 D NKEM: I know.
7 A ¶ She does not move.
8 A Bart steps closer.
9 D BART: Whose are they?
10 D NKEM (sudden, loud): Mine! They were -- they're mine, I'm allowed to wash them!
11 A ¶ She hurls the pajamas at the dryer.
* 12 A They slap the glass.
13 A Bart does not flinch.
14 D BART: Nobody said you weren't.
15 D NKEM: Stop being nice to me.
16 D BART: Can't help it.
17 D NKEM: I SAID --
18 D BART: Okay.
19 D NKEM: Stop!
* 20 A ¶ Silence.
* 21 A The red sock turns.
22 A Nkem slides down the machine to the floor.
23 D NKEM [CONT'D] (quiet): She's seven. She's fine. She's in a bed upstairs, and she's fine.
24 A ¶ Bart sits on an upturned bucket.
25 D BART: Then fold the rest.

### SCENE s00522 | INT. NIGHT FERRY - CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): ISOLDE VANTERPOOL, RAFFERTY KANE, JUNG-HO PARK, WINNIE ASHCROFT-DELANEY, SALAZAR
* 1 A ¶ Diesel.
* 2 A Chains rattling.
* 3 A Forty cars, bumper to bumper, under caged yellow lights.
* 4 A The ship rolls, barely.
5 A ¶ ISOLDE VANTERPOOL, 30s, purser's vest, walks the lanes with a flashlight.
6 A She checks each windshield.
7 A Ticks a list.
8 A ¶ She stops at a white delivery van.
9 A Taps the hood.
10 A Moves on.
11 A ¶ RAFFERTY KANE, 50s, a trucker in a stained cap, sits on a bumper with a thermos.
12 A He raises it in greeting.
13 D RAFFERTY: Evening, miss. Lovely crossing.
14 D ISOLDE: Smooth water tonight.
15 D RAFFERTY: That's what I said to my ex-wife. Look how that ended.
16 A ¶ She almost smiles.
17 A Writes something down.
18 A ¶ JUNG-HO PARK, 20s, headphones around his neck, leans out of a hatchback, bleary.
19 A He yawns.
20 D JUNG-HO: Is there a vending machine on this deck?
21 D ISOLDE: Passenger lounge. Deck four.
22 D JUNG-HO (to himself): Of course there is.
23 A ¶ He ducks back in.
24 A Isolde keeps walking.
25 A ¶ WINNIE ASHCROFT-DELANEY, 70s, a tartan blanket over her knees, sits in a small hatchback, window cracked.
* 26 A A cat carrier on her lap.
27 D WINNIE (to the group, generally): Does anybody know if the cats are allowed out for the crossing?
28 D RAFFERTY: Rules say no.
29 D WINNIE: Rules say. Hm.
30 A ¶ Isolde leans down to her window.
31 D ISOLDE: Ma'am, I'll check on her in an hour. Promise.
32 D WINNIE: It's a him.
33 D ISOLDE: I'll check on him in an hour.
34 A ¶ She straightens.
* 35 A Her radio squawks.
36 D SALAZAR [V.O.] (over PA): Purser to bridge. Purser to bridge. Please confirm car count.
37 A ¶ Isolde keys her radio.
38 D ISOLDE: Forty-one, Captain. Forty-one vehicles.
39 D SALAZAR [V.O.] (over PA): Say again.
40 D ISOLDE: Forty-one.
* 41 A ¶ A long pause.
* 42 A Static.
43 D SALAZAR [V.O.] (over PA): Manifest says forty.
44 A ¶ She stops walking.
45 D ISOLDE (quietly, to herself): Forty-one.
46 A ¶ She turns slowly.
47 A Eyes down the lanes.
48 A Counting under her breath.
49 A ¶ Rafferty watches her.
50 A The thermos stops halfway to his mouth.
51 D RAFFERTY: Something wrong, love?
52 D ISOLDE: Nothing. Routine.
53 A ¶ She isn't convincing.
54 A She moves down the aisle, flashlight low.
55 A Stops at the white van again.
* 56 A ¶ Plates: out of state.
* 57 A Not on her list.
58 A She hadn't ticked it because she hadn't noticed it.
* 59 A It had been there, quiet, like furniture.
60 A ¶ She reaches for the rear door handle.
* 61 A Locked.
62 D JUNG-HO (from his car): Hey, uh. That van was here when I parked.
63 D ISOLDE: Which means?
64 D JUNG-HO: Means nobody got out of it. Not once. I've been watching.
65 A ¶ Rafferty sets down the thermos.
66 A Stands up.
67 A Slow.
68 D RAFFERTY: Miss. Step back.
69 D ISOLDE: Why?
70 D RAFFERTY (very calm): Because I'm a driver. And I know what that engine sounds like when it's not an engine.
71 A ¶ Isolde listens.
* 72 A Underneath the diesel and the chains, a thin electric whine.
* 73 A Steady.
* 74 A Patient.
75 A ¶ She backs away.
76 A One step.
77 A Two.
78 D ISOLDE (into radio, steady): Captain. Evacuate the car deck. All hands. Now.
79 D SALAZAR [V.O.] (over PA): Purser, what is it?
80 A ¶ Winnie rolls her window up.
81 A Clutches the carrier.
82 D WINNIE (to the cat, muttering): Hush, hush, hush.
83 A ¶ Jung-Ho is already out of the hatchback, running for the stairwell.
* 84 A ¶ The van's side door slides open an inch.
85 A A single hand reaches out.
86 A Pale.
87 A Gloved.
88 A It sets a small black box on the deck.
* 89 A ¶ Then the door slides shut again.
* 90 A ¶ The whine climbs.
91 D RAFFERTY (shouting to the whole deck): EVERYBODY OUT! MOVE!
92 A ¶ Isolde grabs Winnie's door.
93 A Yanks it open.
94 D ISOLDE: Ma'am. Leave the car.
95 D WINNIE: The cat --
96 D ISOLDE: Bring the cat.
97 A ¶ They run.
* 98 A Behind them the black box blinks once.
* 99 A Green.
* 100 A ¶ Then red.

### SCENE s00523 | EXT. RICE TERRACE BUNKER - DAWN
Detected names (may be incomplete or contain aliases): LIEUTENANT NIKOLA VASKO, CORPORAL ABEBE TESFAYE, LINNEA STROM
* 1 A ¶ Mud.
* 2 A Standing water, ankle deep.
* 3 A Sandbags slumped like drunks.
* 4 A A shell crater full of rain.
5 A ¶ LIEUTENANT NIKOLA VASKO, 30s, helmet gone, one sleeve black with blood, sits against the sandbags.
6 A Staring at nothing.
7 A ¶ CORPORAL ABEBE TESFAYE, 20s, kneels beside him.
8 A Rifle across his knees.
9 A Hands shaking.
* 10 A ¶ The guns have stopped.
* 11 A That is the horror of it.
12 D ABEBE: Sir. Sir, it's quiet.
13 D VASKO: I hear.
14 D ABEBE: Should we go?
15 D VASKO: Where?
16 A ¶ Abebe has no answer.
* 17 A A bird starts up in the flooded trees.
* 18 A Another.
19 D ABEBE: They're singing.
20 D VASKO: They don't know.
21 A ¶ Abebe unslings his canteen.
22 A Offers it.
23 A Vasko drinks.
24 A Hands it back.
25 D VASKO [CONT'D]: How many?
26 D ABEBE: Two of us.
27 D VASKO: Three. Count the radio man.
28 D ABEBE: He's not -- sir. He's not counting.
29 A ¶ Vasko closes his eyes.
30 A Nods.
* 31 A ¶ Boots in the mud.
32 A Abebe snaps his rifle up.
33 A ¶ LINNEA STROM, 30s, a red cross on her armband, comes over the dike with a canvas bag.
34 A She is soaked to the thigh.
35 A She raises both hands slowly.
36 D LINNEA: Medic. Don't.
37 A ¶ Abebe lowers the rifle an inch.
38 D ABEBE: Which side?
39 D LINNEA: Yours. I think.
40 A ¶ She kneels at Vasko.
41 A Cuts the sleeve with scissors.
42 A He doesn't look.
43 D LINNEA [CONT'D]: Lieutenant. Stay with me.
44 D VASKO: I'm here.
45 D LINNEA: Good. Keep being here.
46 A ¶ Abebe sits.
* 47 A The rifle slides into the water.
48 A He lets it.
49 D ABEBE: Is it over?
50 D LINNEA: For today.
51 A ¶ She pulls a bandage tight.
52 A Vasko hisses.
* 53 A ¶ The sun clears the ridge.
* 54 A Light spills across the flooded terrace, gold on grey.
55 A ¶ Nobody speaks.
* 56 A Birds go on singing.

### SCENE s00524 | INT. PELL & SONS CLOCKMAKERS - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR FOLASADE OYELARAN, CEDRIC PELL, TELEPHONE, DELPHINE
* 1 A ¶ A narrow shop that has outlived its century.
* 2 A Two hundred clocks line the walls, each a different hour, each ticking out of step, so that the room breathes like a sleeping animal.
* 3 A Brass, walnut, bone.
* 4 A A single green-shaded lamp burns on the workbench.
5 A ¶ INSPECTOR FOLASADE OYELARAN, 50s, a grey raincoat dripping onto the floorboards, stands in the middle of this noise with the stillness of someone used to being the only quiet thing in a room.
6 A ¶ CEDRIC PELL, 60s, watchmaker's loupe pushed up into thinning hair, sits at the bench, a half-assembled movement before him.
7 A His hands are steady.
8 A His eyes are not.
9 D OYELARAN: Mr. Pell, you told the constable you were home all evening.
10 D PELL: I was home. Upstairs. I live above the shop, Inspector.
11 D OYELARAN: Yet your lamp was lit down here at nine.
12 D PELL: Clocks do not repair themselves.
* 13 A ¶ A cuckoo bursts from a wall case.
* 14 A Nine-thirty on some forgotten schedule.
15 A Pell flinches.
16 A Oyelaran does not.
17 D OYELARAN: You flinch at that one.
18 D PELL: It was my wife's. She wound it every morning for thirty years.
19 D OYELARAN: And Mr. Hartigan? Did he wind anything?
20 D PELL (too quickly): I don't know a Hartigan.
* 21 A ¶ The cuckoo retreats.
* 22 A A grandfather clock tolls once, deep and wet, as though underwater.
23 A ¶ Oyelaran crosses to the bench.
24 A Lifts the movement between two fingers.
25 A Turns it to the light.
26 D OYELARAN: Interesting. The mainspring is brand new. The rest is a hundred years old.
27 D PELL: Restorations are mixed.
28 D OYELARAN: Mr. Hartigan's watch was found in the canal this afternoon. Stopped at 8:52.
29 A ¶ Pell goes very still.
30 D PELL: Water does that.
31 D OYELARAN: Water doesn't wind a mainspring backward, Mr. Pell.
* 32 A ¶ Silence.
* 33 A Two hundred clocks and not one of them says the same time.
* 34 A ¶ A TELEPHONE rings on the wall.
* 35 A Old rotary.
* 36 A Black.
* 37 A It rings and rings.
38 D PELL: Let it.
39 D OYELARAN: No. I think you should answer.
40 A ¶ Pell rises.
41 A Crosses.
42 A Lifts the receiver.
43 A Listens.
44 A His face loses its color.
45 D DELPHINE [V.O.] (over phone, thin): Cedric? Papa? Are they there yet?
46 D PELL (into phone, hoarse): Delphine, not now.
47 D DELPHINE [V.O.] (over phone): I did what you said. I put the watch in the canal. But Papa, it was still ticking when I --
48 A ¶ Pell slams the receiver down.
* 49 A Too late.
* 50 A The line was open long enough.
51 A ¶ Oyelaran has not moved.
52 A Her voice is gentle, almost tender.
53 D OYELARAN: Your daughter is very honest.
54 D PELL: She is a child.
55 D OYELARAN: She is twenty-six.
56 A ¶ Pell sinks onto the stool.
* 57 A The loupe falls from his hair and rolls across the bench, stopping against a screwdriver.
58 D PELL: He came for the shop. He wanted the building. Hartigan, he said it was only a matter of time before the street --
59 D OYELARAN: So you wound his watch backward and put him in the canal.
60 D PELL: No!
61 A ¶ He stands again, trembling.
62 A The anger rises up out of him like steam.
63 D PELL [CONT'D]: No. I did not touch the man. He fell. I swear to you, he fell, he was on the stairs, he laughed at me, Inspector, he laughed at my wife's cuckoo --
64 D OYELARAN: Mr. Pell.
65 D PELL: -- and I only wanted him quiet --
66 D OYELARAN: Cedric.
67 A ¶ He stops.
68 A Breathing hard.
69 D OYELARAN [CONT'D]: Sit down.
70 A ¶ He sits.
* 71 A The cuckoo bursts again, absurd, bright.
72 A Both of them watch it.
73 D PELL (small): She never could stand that bird.
74 A ¶ Oyelaran almost smiles.
* 75 A Almost.
76 D OYELARAN: I will need the key to the cellar.
77 A ¶ Pell's hand moves to his waistcoat.
* 78 A The chain.
* 79 A A small brass key.
80 A He holds it out across the bench.
81 A ¶ She takes it.
* 82 A The lamp flickers.
* 83 A ¶ The telephone begins to ring again.
84 D OYELARAN [CONT'D] (gently): Let it ring.

### SCENE s00525 | INT. CHURCH BELL TOWER - DAY
Detected names (may be incomplete or contain aliases): SERGEANT MAGNUS HADLEY, PRIVATE QUIGG, PRIVATE NASRIN KHALIL, CORPORAL TOMASZ WIERZBICKI, MOTHER AGATHE
* 1 A ¶ Snow drifts through the broken louvres and settles on the great bronze bell like flour on a baker's arm.
* 2 A The wooden stair groans below.
* 3 A The air smells of pigeon and old rope.
4 A ¶ SERGEANT MAGNUS HADLEY, 40s, a face scoured by wind, crouches at the north louvre with binoculars.
5 A PRIVATE QUIGG, 19, freckled, hugs a machine gun.
6 A PRIVATE NASRIN KHALIL, 20s, a field radio strapped to her back, picks at a frozen knot.
7 A CORPORAL TOMASZ WIERZBICKI, 30s, sits against the wall, bandaging his own hand.
8 D QUIGG: They're moving in the orchard.
9 D HADLEY: Count.
10 D NASRIN: Nine? Ten --
11 D QUIGG: Twelve. I said twelve.
12 D TOMASZ (muttering): Twelve, nine, who cares, we're up a steeple.
13 D HADLEY: Quiet. Both of you.
* 14 A ¶ A footstep on the stair.
* 15 A Slow.
16 A Four rifles swing.
17 A ¶ MOTHER AGATHE, 70s, a black habit and a snow-crusted shawl, climbs into the loft carrying a kettle.
18 A She is breathing hard and not remotely afraid.
19 D MOTHER AGATHE: You have been in my bell tower since Tuesday. I thought you might want tea.
20 D NASRIN: Mother, you can't be up here --
21 D QUIGG: Is it safe? Did you check it?
22 D TOMASZ: She's a nun, she's not going to poison us.
23 D MOTHER AGATHE: Not before the second cup.
24 A ¶ Hadley lowers the binoculars.
25 A For the first time all day, he laughs.

### SCENE s00526 | INT. STARLITE ROLLER RINK - AFTER HOURS
Detected names (may be incomplete or contain aliases): ODALYS FERREIRA, STARLITE STAFF, FITZ MCALLISTER, BASHIR KARIMI, DJ, JUNIPER FERREIRA
* 1 A ¶ A cavern of scuffed maple and dead disco light.
* 2 A A mirror ball turns slowly, throwing coins of silver across the walls.
* 3 A The air smells of popcorn oil, rubber wheels, and thirty years of cheap perfume.
4 A ¶ ODALYS FERREIRA, 50s, in a faded satin jacket that says STARLITE STAFF, stands at the center of the floor with a push broom.
5 A She has been sweeping the same square of wood for some time.
6 A ¶ At the skate counter, FITZ MCALLISTER, 60s, owner, sorts a bin of rental skates by size.
7 A He doesn't look up.
* 8 A A mug of coffee steams beside a signed contract.
9 A ¶ BASHIR KARIMI, 30s, a suit too good for this building, leans against the DJ booth with a briefcase.
10 A JUNIPER FERREIRA, 17, headphones around her neck, sits on the rail with her skates in her lap, pretending to lace them.
11 D BASHIR: Mrs. Ferreira, I don't want to rush anyone. But the buyer needs the keys by Friday.
12 D ODALYS: I heard you the first time.
13 D FITZ: She heard you.
14 D ODALYS: Thirty-one years I've swept this floor.
15 D BASHIR: And the new development will keep a plaque --
16 D ODALYS: A plaque.
17 D JUNIPER: Mom.
18 D ODALYS: Don't "Mom" me. You learned to walk on this floor.
19 D JUNIPER: I learned to fall on this floor.
20 A ¶ Fitz puts down a skate.
21 A Laughs once, softly.
22 A Then louder.
23 A Then it turns into something else.
24 A He covers his face.
25 D FITZ: I signed it, Odie. Tuesday. I couldn't tell you.
* 26 A ¶ The broom drops.
* 27 A It clatters across the maple, a flat hollow sound that rings up into the rafters.
28 D ODALYS: You what.
29 D FITZ: The roof is gone. The boiler is gone. I've been paying the electric with my pension --
30 D ODALYS: YOU DIDN'T ASK ME.
31 D BASHIR: Please, let's all just take a breath --
32 D ODALYS (to Bashir): Get out.
33 D JUNIPER (to Bashir): Get out.
34 A ¶ Bashir picks up his briefcase and, for once, is quick about it.
* 35 A The glass door closes behind him with a polite chime.
* 36 A ¶ The mirror ball keeps turning.
37 A Odalys sits down hard on the floor.
38 A Fitz comes around the counter and sits beside her, knees creaking.
* 39 A Neither speaks.
40 A ¶ Juniper stands.
41 A Laces her skates properly this time.
42 A She rolls out onto the empty rink, slow, then faster, and loops the whole oval alone.
43 D ODALYS (watching, softly): She's got your father's stride.
44 D FITZ: She's got yours.
45 A ¶ Odalys wipes her cheek with the heel of her hand.
46 A Then stands, offers Fitz a hand up.
47 A He takes it.
48 D ODALYS: Put on the Bee Gees.
49 D FITZ: We're closed.
50 D ODALYS: Put on the Bee Gees, Fitzgerald.
51 A ¶ He crosses to the booth.
52 A Taps a button.
* 53 A A bass line thumps out of tired speakers.
54 A The silver light sweeps the three of them as Juniper glides past, arms out, laughing.

### SCENE s00527 | EXT. SALT FLATS TELEGRAPH RELAY - DAY
Detected names (may be incomplete or contain aliases): SADIE MULVANEY, ELIAS CROW, TEODORA VEGA, PIKE, WHISTLER
* 1 A ¶ White to every horizon.
* 2 A A shack on stilts.
* 3 A A single pole line running away into heat shimmer.
* 4 A The sky is the color of a new nickel.
5 A ¶ SADIE MULVANEY, 30s, hat low, Winchester across her lap, sits on the porch rail.
6 A She is shelling pistachios with one hand.
7 A ¶ ELIAS CROW, 50s, relay operator, bald, sleeves rolled, sits on a barrel beside her, drinking from a tin cup.
* 8 A Calm.
* 9 A Too calm.
* 10 A ¶ Inside, through the open door: the steady TAP-TAP-TAP of the key.
11 D SADIE: Wire's working.
12 D ELIAS: Always does.
13 D SADIE: Thought they cut the line at Dry Fork.
14 D ELIAS: They did.
15 A ¶ She looks at him.
16 A He keeps drinking.
* 17 A ¶ A dust plume.
18 A Three riders, far off, coming slow.
19 A ¶ TEODORA VEGA, 20s, a bandolier and a bad limp, steps out of the shack carrying a coffeepot.
20 A She sets it down on the boards.
21 D TEODORA: Riders.
22 D SADIE: I see them.
23 D TEODORA: Elias, did you --
24 D ELIAS: Sit, Teo. Pour.
25 A ¶ She pours.
26 A Sadie accepts a cup.
* 27 A The riders grow.
28 A ¶ PIKE, 40s, a grey duster, leads them in on a bay mare.
29 A Behind him, WHISTLER, 20s, a boy with a tin whistle in his teeth, and no one else.
* 30 A Just two.
31 A ¶ They stop at the hitching rail.
32 A Pike tips his hat.
33 D PIKE: Miss Mulvaney.
34 D SADIE: Pike.
35 D PIKE: Heard you were dead.
36 D SADIE: Heard the same about you.
37 A ¶ Whistler blows a thin note and grins.
38 A Teodora's hand drifts toward her hip.
39 D TEODORA: Tell the boy to quit that.
40 D WHISTLER: Tell the lady I'm sorry.
41 D PIKE: Easy, Whistle.
42 D ELIAS: Gentlemen. There's coffee. There's shade. Nobody needs to die before noon.
43 D PIKE: Elias, you old rat. You look well.
44 D ELIAS: I look the same.
45 D SADIE (to Elias): You knew they were coming.
46 D ELIAS: Didn't know. Hoped.
47 D SADIE: That's not the same thing.
48 D TEODORA: What did you do, Elias?
49 D PIKE: He sent the wire.
* 50 A ¶ Quiet.
* 51 A The tapping inside goes on.
* 52 A No one is at the key.
53 A ¶ Sadie looks at the door.
54 A Then at Teodora.
55 A Then at Elias, who sets his tin cup carefully on the rail.
56 D ELIAS: Autopilot. Rig's on a timer.
57 D TEODORA: A timer for what?
58 D ELIAS: The Army, Teo. Forty men. Forty-one miles. They'll be here before dark.
59 D SADIE: You sold us.
60 D ELIAS: I sold a salt shack and a dead line. And bought a year of my life.
61 A ¶ Whistler's whistle drops from his mouth.
62 D WHISTLER: Pike, you said it was only --
63 D PIKE: Shut up, Whistle.
64 D SADIE: Teodora. Pike's going to draw. Left side.
65 D TEODORA: I know.
66 D PIKE: Now that's rude, Miss Mulvaney --
67 A ¶ Sadie fires first.
* 68 A The Winchester cracks.
* 69 A Pike's hat goes spinning out over the flats.
70 D WHISTLER: God, I'm sorry -- I'm sorry --
71 A ¶ He drops his gun in the salt.
72 A Raises both hands.
73 A Pike sits in the dust, staring at his empty head.
74 D PIKE (softly): Sadie. That was my good hat.
75 D ELIAS: Sadie. Let them go. Both of them.
76 D SADIE: Why should I?
77 D ELIAS: Because the Army's still coming for us. And I'd like fewer witnesses.
78 A ¶ She levers another round.
79 A Lowers the barrel.
80 D SADIE: Take the horses. Ride south. Don't stop.
81 A ¶ Pike nods.
82 A He and Whistler mount.
83 A They go, slow at first, then not.
84 A ¶ Teodora looks at Elias.
85 A Her voice is level.
86 D TEODORA: You get a head start. One hour. After that, I come looking.
87 D ELIAS: Fair.
88 A ¶ He takes his hat from the porch nail.
89 A Steps off the boards into the white glare and starts walking.
* 90 A No horse.
* 91 A No bag.
92 A ¶ Sadie watches until he is a speck.
93 D SADIE: Teo.
94 D TEODORA: Yeah.
95 D SADIE: Cut the wire.

### SCENE s00528 | INT. VELVET HOURS FUNERAL PARLOR - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LOU DEVEREAUX, MISS ALTHEA CROWNINSHIELD, SPATS, BRINDISI
* 1 A ¶ Satin-lined caskets on trestles.
* 2 A Potted ferns.
* 3 A A gramophone plays a muted waltz.
4 A ¶ LOU DEVEREAUX, 40s, camel overcoat, snap-brim hat, sits in a leather chair, dealing himself solitaire on the lid of a coffin.
5 A ¶ MISS ALTHEA CROWNINSHIELD, 50s, the proprietor, in black crepe and pearls, pours two glasses of sherry.
6 A Her hand is perfectly steady.
7 D ALTHEA: You're early, Mr. Devereaux.
8 D LOU: Early's polite. Late's a funeral.
9 D ALTHEA: You find that amusing?
10 D LOU: In this business? Everything.
11 A ¶ She hands him a glass.
12 A He sips.
13 A Nods approval.
14 D LOU [CONT'D]: Good sherry.
15 D ALTHEA: My late husband's.
16 D LOU: He had taste.
17 D ALTHEA: He had a will.
18 A ¶ Lou smiles.
19 A Lays a red queen on a black king.
20 D LOU: About that. The boys tell me the account at First Mercantile is a little light.
21 D ALTHEA: They are mistaken.
22 D LOU: Seventeen thousand light, Miss Crowninshield.
23 D ALTHEA: Then someone has been careless with my money.
24 A ¶ ANGELO "SPATS" BRINDISI, 30s, white spats, a pencil moustache, slides in from the hallway holding a ledger like a hymn book.
25 A He nods at Althea with exaggerated courtesy.
26 D SPATS: Evening, Ma'am. Boss.
27 D LOU: Spats. Show the lady.
28 A ¶ Spats opens the ledger on the coffin.
29 A Althea does not glance at it.
30 D ALTHEA: I know what it says.
31 D LOU: Then you know the numbers don't lie.
32 D ALTHEA: Numbers never do, Mr. Devereaux. People do.
33 A ¶ She crosses to a tall ferns pot.
34 A Lifts a fern.
* 35 A Beneath it, a small brass bell on a cord.
36 A She rings it, once.
* 37 A A bright, silly chime.
38 D LOU: What's that for?
39 D ALTHEA: A courtesy.
* 40 A ¶ Every one of the coffin lids in the room creaks open an inch.
41 A A dozen gun barrels slide out, gleaming, steady.
42 A ¶ Spats drops the ledger.
43 A Lou's cards scatter.
44 D ALTHEA [CONT'D]: My husband always said: never trust a man who rushes a funeral.
45 D LOU (raising his glass slowly): Well. To your late husband.
46 D ALTHEA: To the late Mr. Devereaux.
47 A ¶ She clinks her glass to his.
* 48 A The waltz plays on.

### SCENE s00529 | INT. CONSERVATORY GREENHOUSE - ORCHID SHOW - DAY
Detected names (may be incomplete or contain aliases): WREN ASHBY-LOVELACE, STRANGER, ABARA, TAMSIN
* 1 A ¶ Glass and humid green.
* 2 A Ten thousand blossoms on risers: slipper orchids like lacquered tongues, moth orchids like frozen flight.
* 3 A Rain ticks on the panes overhead.
4 A ¶ WREN ASHBY-LOVELACE, 30s, in a cardigan the color of moss, bends close to a speckled bloom with a magnifying glass, entirely absorbed.
5 A ¶ A STRANGER, 30s, a woman in a rain-darkened trench and a scarf the red of a struck match, stops beside her.
6 A She does not look at the orchids.
7 A She looks at Wren.
8 D STRANGER: That one is lying to you.
9 D WREN: Excuse me?
10 D STRANGER: The label says Paphiopedilum. But it's a hybrid. Look at the staminode.
11 A ¶ Wren lowers the glass.
12 A Looks.
13 A Looks again.
14 A She laughs, low and surprised.
15 D WREN: You're right. She's right. Whoever grew it, I mean.
16 D STRANGER: She'd be furious with you for guessing.
17 A ¶ MR. ABARA, 60s, a show steward with a lapel rosette, glides by with a clipboard and clears his throat.
18 D MR. ABARA: Ladies, the judging begins at noon. Kindly keep to the path.
19 A ¶ He moves on.
20 A The two women watch him go, then glance at each other, conspirators.
21 D WREN: I'm Wren.
22 D STRANGER (after a beat): Tamsin.
23 A ¶ She extends her hand.
24 A Wren takes it.
25 A Neither lets go at once.
* 26 A ¶ Above, the rain thickens.
27 A TAMSIN lifts her scarf, and, shyly, shows Wren the orchid pinned beneath it: a hybrid, speckled, impossible.
28 D TAMSIN: I grew it for the judging. I was going to lose on purpose.
29 D WREN: Don't. Not today.

### SCENE s00530 | INT. ABANDONED GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): DEKE MARSHALL, OLLIE, MIRIAM MARSHALL
* 1 A ¶ Dust hangs in the flashlight beam like smoke.
* 2 A Rusted chutes, a floor of old husk, a ladder going up into black.
3 A ¶ DEKE MARSHALL, 40s, a farmer's jacket, grips a flashlight in one hand and OLLIE, 8, by the wrist with the other, hauling him toward the door while MIRIAM MARSHALL, 40s, Deke's wife, swings a crowbar at the ladder's base and screams at the dark above, and Ollie, crying, drops his stuffed rabbit, turns back for it, and Deke yanks him so hard the boy's shoe slides off in the grain.
* 4 A ¶ Something heavy shifts overhead.
* 5 A Husk rains down.
6 D DEKE: Don't look up.
7 D MIRIAM: Don't look up!
8 D OLLIE: Daddy, it knows my name!
* 9 A ¶ The beam shakes.
* 10 A The door is three steps away, chained from outside.
11 D MIRIAM (quiet): Deke. The chain.
12 D DEKE: I see it.
* 13 A ¶ The ladder creaks.
* 14 A One rung at a time.
* 15 A Slowly now.
16 A ¶ Ollie goes silent.
17 A Stops crying.
18 A Holds his father's hand and stares at the door.

### SCENE s00531 | EXT. CABLE CAR GONDOLA - HIGH OVER A HARBOR - NIGHT
Detected names (may be incomplete or contain aliases): CALLUM DRUMMOND-OKAFOR, SUNITA RAO, REYES, FELIX ODUYA
* 1 A ¶ A glass bubble swinging a hundred meters above black water.
* 2 A City lights fall away in every direction.
* 3 A Wind leans on the cabin.
* 4 A ¶ The gondola has stopped.
* 5 A Dead stop.
* 6 A It sways.
7 A ¶ CALLUM DRUMMOND-OKAFOR, 30s, rumpled tuxedo, bow tie undone, grips the handrail.
8 A SUNITA RAO, 30s, bridesmaid's dress the color of a bruised plum, heels in one hand, leans against the opposite glass.
9 D CALLUM: We're fine.
10 D SUNITA: We are not fine. We are stuck.
11 D CALLUM: Stuck is a kind of fine.
* 12 A ¶ Silence.
* 13 A The cabin sways.
14 A They both grab the rail.
15 A Eyes meet.
16 A Both freeze.
17 D SUNITA: You look terrible.
18 D CALLUM: You left the wedding.
19 D SUNITA: You followed me.
20 D CALLUM: Also terrible, I know.
* 21 A ¶ A speaker crackles near the ceiling.
22 D REYES [V.O.] (over intercom): Gondola four, this is control. Are you hurt? Over.
23 D CALLUM (to the speaker): No. Just stuck. Are we going to move?
24 D REYES [V.O.] (over intercom): Power's out on the whole peak. Twenty minutes. Maybe thirty. Please sit down.
25 A ¶ Sunita sits on the bench.
26 A Callum sits across from her.
27 A Their knees almost touch.
28 D SUNITA: Twenty minutes.
29 D CALLUM: I can count to twenty minutes of anything.
30 D SUNITA: You said that about your marriage.
31 A ¶ His mouth twitches.
32 A A pained half-smile.
33 D CALLUM: Twelve minutes in, I'll have thought of something good.
* 34 A ¶ Light blooms in the next gondola, thirty feet away, swaying.
35 A A silhouette stands at the glass, waving both arms.
36 A ¶ FELIX ODUYA, 30s, in a groom's white jacket, pounds on the glass of the adjacent cabin and mouths words.
37 D SUNITA (without turning): Don't look.
38 D CALLUM: Is that --
39 D SUNITA: Don't.
40 A ¶ Felix cups his hands against the glass.
41 A Shouts.
* 42 A Muffled, through two walls of glass and a gale.
43 D FELIX [O.S.] (muffled): SUNITA! I CAN EXPLAIN!
44 A ¶ Callum and Sunita both stand.
45 A They crash together at the center of the cabin, arguing, then not arguing, her hand fisted in his lapel, his on her wrist, then her jaw.
* 46 A The gondola lurches.
47 A ¶ They fall back to the bench, laughing, helpless, horrified.
48 D SUNITA: I can't believe he's the groom.
49 D CALLUM: I can't believe you're the one who brought the ring.
50 D REYES [V.O.] (over intercom): Gondola four? I'm hearing a lot of shouting. Everyone okay?
51 D SUNITA (to the speaker): Never better.
* 52 A ¶ The lights flicker on.
* 53 A The cable shudders.
* 54 A The gondola begins, slowly, to move, toward the shore, toward the other cabin, toward whatever comes next.
55 A ¶ Callum offers her his hand.
56 A She takes it.

### SCENE s00532 | INT. NANA ROSALBA'S KITCHEN - POWER OUT - NIGHT
Detected names (may be incomplete or contain aliases): NANA ROSALBA, DESMOND, IMANI, KOFI, AUNT PETRA
* 1 A ¶ Candles in jam jars.
* 2 A A pot of rice losing its heat on a dead stove.
* 3 A Rain on the tin roof, loud as applause.
4 A ¶ NANA ROSALBA, 80s, in a housecoat, ladles soup by feel.
5 A Her son DESMOND, 50s, kneels at the breaker box with a phone flashlight in his teeth.
6 A His daughter IMANI, 16, scrolls a dead phone in disgust.
7 A KOFI, 9, hides under the table with a toy truck.
8 A AUNT PETRA, 60s, wrings her hands by the window.
9 D DESMOND (around the phone): Everybody stay put.
10 D PETRA: We are staying put, Desmond, there is nowhere to go.
11 D IMANI (to herself): Twelve percent. I had twelve percent.
12 D NANA (to the room): Bowls. Whoever is standing, get bowls.
13 D KOFI (from under the table): It's too dark to find the bowls.
14 D NANA: Then find them with your hands, like Jesus.
15 D IMANI: Nana --
16 D DESMOND: Mama, he didn't --
17 D PETRA: It's in the Bible somewhere.
* 18 A ¶ Thunder cracks.
* 19 A The candles gutter.
20 A Kofi shrieks.
21 A Everyone talks at once, and then all stop.
22 A ¶ Nana places a bowl in front of her grandson, then touches his hair.
23 D NANA (softly): Eat.

### SCENE s00533 | EXT. STOCKYARD AUCTION RING - DAY
Detected names (may be incomplete or contain aliases): HEIFER, HOLLIS BRADDOCK, MARIBEL BRADDOCK, TAVISH DOYLE, DOLLY, AUCTIONEER
* 1 A ¶ Plank bleachers.
* 2 A Dust.
* 3 A A hand-lettered sign: LOT 14, HEIFER, OPEN BIDDING.
* 4 A Flies work the heat.
5 A ¶ HOLLIS BRADDOCK, 60s, a hat older than his marriage, sits in the third row with his hands in his lap.
6 A Beside him MARIBEL BRADDOCK, 50s, stares straight ahead, ring finger bare.
7 A Across the aisle TAVISH DOYLE, 40s, in a clean vest, a bidder's card in his fist, doesn't look at either of them.
8 A ¶ DOLLY, 12, Hollis's granddaughter, sits at the rail with her boots dangling and watches all three.
9 D AUCTIONEER [O.S.] (over the loudspeaker): Who'll give me four? Four hundred, four, I got four, now five, five, who'll give five?
10 A ¶ Tavish lifts his card.
11 A Hollis does not move.
12 A Maribel's jaw tightens.
13 D AUCTIONEER [O.S., CONT'D]: Five, I got five from the man in the vest, now six? Six for a good milker, six?
14 A ¶ Hollis shifts in his seat.
15 A Takes off his hat, turns it twice by the brim, puts it back on.
16 A Maribel slides one foot six inches away from his.
17 A Dolly picks at a splinter and keeps looking at her grandfather's hands.
18 D AUCTIONEER [O.S., CONT'D]: Six anywhere? Going once --
19 A ¶ Hollis lifts one finger.
20 A Barely.
21 D AUCTIONEER [O.S., CONT'D]: Six, I got six! Seven?
22 A ¶ Tavish glances over, nods at Hollis, once.
23 A Lifts his card.
24 D MARIBEL (to the air): Eleven years.
25 D HOLLIS: Mm.
26 D AUCTIONEER [O.S.]: Seven, going --
27 A ¶ Hollis lowers his hand.
28 A Dolly looks at Maribel.
29 A Maribel looks at Tavish.
* 30 A ¶ Gavel.

### SCENE s00534 | INT. GENERATION SHIP "HALCYON" - SEED VAULT - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): ENGINEER AKINYI WAMBUGU, ARCHIVIST VOSS
* 1 A ¶ A long white corridor lined with frost-skinned drawers.
* 2 A Each is labeled in small black type: wheat, barley, lentil, cacao.
* 3 A Cold exhales from the vents.
* 4 A A low pump hum.
5 A ¶ ENGINEER AKINYI WAMBUGU, 40s, thermal gloves, a utility belt, checks a sensor panel.
6 A ARCHIVIST VOSS, 50s, a cardigan too thin for the temperature, stands at the end of the aisle holding a slim black case against her chest.
7 D AKINYI: You're not on the roster.
8 D VOSS: I'm the Archivist. I'm always on the roster.
9 D AKINYI: Not for this deck. Not at this hour.
10 A ¶ Voss does not answer.
11 A She walks the aisle, running her fingertips along the frosted drawers.
12 A Akinyi watches the case.
13 D AKINYI [CONT'D]: That's a lot of case for a woman who inventories paper.
14 D VOSS: It's only an old habit.
15 D AKINYI: Show me.
16 A ¶ Voss stops at a drawer marked SOLANUM TUBEROSUM.
17 A Pulls the handle.
* 18 A A tray of small grey tubers slides out under glass.
19 A She sets the case on the counter.
20 A Clicks the lock.
21 A Does not open it.
22 D VOSS: You know what we've lost in four generations, Akinyi?
23 D AKINYI: Eleven strains of rice. Three of coffee.
24 D VOSS: Four hundred and six varieties. I counted every one.
25 A ¶ She slides the case a few centimeters toward the potatoes.
26 A Akinyi's eyes flick to the panel.
* 27 A The temperature reading has not changed.
* 28 A Neither has her breathing.
29 D AKINYI: So what's in the case?
30 D VOSS: Things the Council doesn't want to be counted.
31 D AKINYI: That's contraband.
32 D VOSS: That's a library.
33 A ¶ Akinyi pulls a data slate from her belt.
34 A Taps it.
* 35 A A tone sounds in the ceiling.
36 D VOSS [CONT'D] (very quiet): You just called them.
37 D AKINYI: I called the Captain. He asked me to.
38 A ¶ Voss nods.
* 39 A Slow.
40 A Her hand lifts from the case, rests flat on the cold metal beside it.
41 D VOSS: Then do it. Open the drawer. Put it all in the shredder. Four hundred and six.
42 D AKINYI: I can't.
43 D VOSS: You can. You're holding the key.
44 A ¶ Akinyi looks down.
* 45 A In her palm, a brass key.
46 A She does not know when she took it from her belt.
47 D AKINYI: You knew I'd bring it.
48 D VOSS: I knew you'd bring it.
* 49 A ¶ The vents shudder.
* 50 A Steam rolls along the floor.
* 51 A Footsteps, far off.
* 52 A Many.
53 A ¶ Akinyi lays the key on the counter, next to the case, carefully, as though it were something alive.
54 D AKINYI: Then you've got four minutes.
55 A ¶ Voss opens the case.
