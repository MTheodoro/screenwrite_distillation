You segment screenplay scenes into DRAMATIC BEATS for a screenwriting tool (timeline, mood track, outline).

A dramatic beat is one exchange of action and reaction around a single intention: a character pursues something with
one tactic, and the beat ends when the tactic, the power balance, the subject or the situation changes (a reveal, an
entrance or exit, a decision, a turn in the argument, a new attempt after a failure). Scenes usually have 3-8 beats;
a short scene can have 1-2, a long one up to ~12.
- A beat usually spans SEVERAL paragraphs and dialogue blocks. Do NOT start a beat at every paragraph or speaker change.
- Keep the setup (setting and introductions before anything is at stake) inside the first beat unless it is long
  and self-contained.
- A beat may start in the middle of an action paragraph if the turn happens there.

For each beat give:
- "start": unit number where it starts (the first content unit starts beat 1)
- "type": the coarse beat type and "fine": the best phrase for it, from this list (coarse: [fine phrases]):
  arrives: ["arrives", "bursts in", "slips in", "returns", "is introduced", "makes an entrance", "shows up unannounced", "is ushered in", "drifts in"]
  leaves: ["leaves", "storms out", "slips away", "walks out on", "is sent away", "excuses themself", "is escorted out", "abandons", "exits quietly"]
  confronts: ["confronts", "interrogates", "corners", "calls out", "challenges", "stares down", "demands answers from", "presses", "faces off with"]
  accuses: ["accuses", "blames", "implicates", "points the finger at", "charges", "exposes", "condemns", "suspects", "turns on"]
  threatens: ["threatens", "intimidates", "warns", "blackmails", "issues an ultimatum to", "menaces", "holds at gunpoint", "coerces", "looms over"]
  attacks: ["attacks", "strikes", "grabs", "shoves", "ambushes", "fights", "wrestles", "shoots at", "lunges at"]
  defends: ["defends", "protects", "shields", "stands up for", "justifies themself to", "denies to", "pushes back on", "holds the line against", "covers for"]
  flees: ["flees", "runs", "escapes", "bolts", "retreats", "hides from", "evades", "scrambles away", "slips out"]
  hides: ["hides", "conceals something", "ducks out of sight", "pockets evidence", "covers up", "keeps a secret", "lies low", "masks a feeling", "plays dead"]
  searches: ["searches", "investigates", "snoops", "rummages", "tracks", "looks for", "examines", "questions witnesses", "scans the room"]
  discovers: ["discovers", "finds a clue", "realizes", "notices", "uncovers", "stumbles on", "recognizes", "pieces it together", "catches"]
  reveals: ["reveals", "drops a bombshell on", "shows", "unmasks", "lets slip to", "breaks news to", "comes clean to", "exposes a secret to", "presents evidence to"]
  confesses: ["confesses to", "apologizes to", "admits guilt to", "opens up to", "breaks down to", "unburdens to", "owns up to", "begs forgiveness from", "comes clean to"]
  lies: ["lies to", "deceives", "bluffs", "covers a story for", "misleads", "feigns innocence to", "plays along with", "cons", "fakes it with"]
  deflects: ["deflects", "dodges", "changes the subject on", "stonewalls", "brushes off", "evades", "stalls", "shrugs off", "plays dumb with"]
  persuades: ["persuades", "convinces", "pitches to", "bargains with", "negotiates with", "recruits", "seduces", "flatters", "talks down"]
  pleads: ["pleads with", "begs", "appeals to", "asks for help from", "implores", "bargains for mercy with", "pleads innocence to", "calls for", "prays"]
  comforts: ["comforts", "reassures", "consoles", "calms", "tends to", "embraces", "encourages", "forgives", "steadies"]
  bonds: ["bonds with", "reconnects with", "confides in", "shares a moment with", "flirts with", "trusts", "reminisces with", "thanks", "teams up with"]
  jokes: ["jokes with", "teases", "banters with", "lightens the mood for", "pranks", "plays with", "charms", "amuses", "riffs with"]
  mocks: ["mocks", "taunts", "belittles", "humiliates", "provokes", "insults", "patronizes", "needles", "dismisses"]
  decides: ["decides", "commits", "makes a plan", "chooses", "refuses", "gives an order", "resigns", "accepts", "changes course"]
  observes: ["watches", "listens to", "waits", "spies on", "studies", "eavesdrops on", "keeps watch", "hesitates", "takes it in"]
  works: ["works", "cooks", "cleans", "repairs something", "drives", "prepares", "packs", "writes", "goes through routine"]
- "actor": the character driving the beat (cue name) or null; "target": who it is aimed at, or null
- "mood": the TONE of the beat as an audience feels it, one of: calm, tender, playful, joyful, hopeful, awkward, melancholy, grief, tense, suspense, ominous, fear, hostile, chaotic, triumphant, bittersweet
- "intensity": 1 (faint) to 5 (overwhelming)
- "summary": 6-15 words, present tense, what happens in the beat (names, no quotes)

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00027.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02166 | INT. MERCY GENERAL - HOSPICE WING WAITING AREA - NIGHT
Detected names (may be incomplete or contain aliases): CHIDI OKONJO, NGOZI OKONJO, EMEKA OKONJO, ADAEZE OKONJO, TUNDE, ETIM, NURSE
1 A ¶ Two vinyl sofas.
2 A A fish tank with one fish.
3 A A TV on mute, a weather map.
4 A A vending machine with a taped sign: "NO REFUNDS."
5 A A door to the room beyond, shut.
6 A ¶ The Okonjo family, six of them, arranged like pieces on a board.
7 A ¶ CHIDI OKONJO, 60s, the eldest son, sits upright with his coat on.
8 A NGOZI OKONJO, 50s, his sister, fidgets with her rings.
9 A EMEKA OKONJO, 40s, the middle brother, leans on the wall with his arms crossed.
10 A ADAEZE OKONJO, 30s, the youngest, holds a Styrofoam cup of coffee she isn't drinking.
11 A TUNDE, 30s, her husband, studies his phone.
12 A And GRANDMOTHER ADA's old friend MRS. ETIM, 70s, in her church hat, folds a paper napkin into smaller and smaller squares.
13 A ¶ Nobody speaks.
14 A ¶ Chidi checks his watch.
15 A Ngozi checks hers.
16 A Emeka looks at the door.
17 A Adaeze looks at Tunde.
18 A Tunde looks at his phone.
19 A Mrs. Etim looks at the fish.
20 A The fish looks at nothing.
21 D CHIDI: It has been an hour.
22 D NGOZI: It has been fifty-two minutes.
23 D CHIDI: Fifty-two is an hour.
24 D NGOZI: Fifty-two is fifty-two.
25 D EMEKA: Please.
26 A ¶ Adaeze offers the coffee to no one in particular.
27 A Tunde takes it.
28 A Sips.
29 A Makes a face.
30 A Hands it back.
31 D TUNDE: It's cold.
32 D ADAEZE: I know.
33 A ¶ Mrs. Etim unfolds the napkin, smooths it flat on her knee, folds it again.
34 D MRS. ETIM: She asked for jollof last Sunday.
35 D NGOZI: She asked for jollof every Sunday.
36 D MRS. ETIM: This one she ate.
37 D EMEKA: She ate it.
38 D ADAEZE: All of it.
39 A ¶ Silence.
40 A The weather map changes colors.
41 A Nobody looks at the TV.
42 A The door opens and a NURSE's hand rests on the frame, then the door closes again.
43 A ¶ Everyone stands at once.
44 A Chidi, then Ngozi, then Emeka, then Adaeze and Tunde, then Mrs. Etim leaning on her cane.
45 A They stand in a half-circle facing the door.
46 A It does not open again.
47 A No one sits.
48 D CHIDI (quietly): We wait.

### SCENE s00752 | INT. FLOODED ORCHARD COTTAGE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE PERPETUA LOWRY, CALLER, ROSCOE
1 A ¶ Rain drums on a tin roof.
2 A Water has crept an inch under the door and pools on the flagstones.
3 A A single candle burns on the kitchen table, beside a black rotary phone, its cord stretched taut across the room.
4 A ¶ DETECTIVE PERPETUA LOWRY, fifties, in a drenched mackintosh, stands with the receiver at her ear.
5 A She doesn't sit.
6 A A cup of cold tea has been on the table so long it has grown a skin.
7 D CALLER [V.O.] (over phone, thin, amused): You came alone.
8 D PERPETUA: I did.
9 D CALLER [V.O.]: That was brave.
10 D PERPETUA: It was cheaper than a team.
11 A ¶ A long pause on the line.
12 A Rain.
13 A A drip from the ceiling lands in the cup.
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
25 A Her breath fogs it.
26 A A dark shape hangs from the third tree, swinging in the wind.
27 A She stares.
28 A Her shoulders drop a quarter inch.
29 D PERPETUA (very quietly): That's a coat.
30 D CALLER [V.O.]: It's his coat.
31 D PERPETUA: Where is he?
32 D CALLER [V.O.]: Why would I tell you? You haven't asked my name.
33 D PERPETUA: You've been calling me for six nights. I've heard you breathe. I know you've been drinking.
34 D CALLER [V.O.]: Whisky. A decent one.
35 D PERPETUA: Then you can say your name over a decent whisky.
36 A ¶ A pause.
37 A The receiver crackles.
38 A When the voice returns it is lower, tired.
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
52 A ¶ Thunder.
53 A The candle gutters out.

### SCENE s00530 | INT. ABANDONED GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): DEKE MARSHALL, OLLIE, MIRIAM MARSHALL
1 A ¶ Dust hangs in the flashlight beam like smoke.
2 A Rusted chutes, a floor of old husk, a ladder going up into black.
3 A ¶ DEKE MARSHALL, 40s, a farmer's jacket, grips a flashlight in one hand and OLLIE, 8, by the wrist with the other, hauling him toward the door while MIRIAM MARSHALL, 40s, Deke's wife, swings a crowbar at the ladder's base and screams at the dark above, and Ollie, crying, drops his stuffed rabbit, turns back for it, and Deke yanks him so hard the boy's shoe slides off in the grain.
4 A ¶ Something heavy shifts overhead.
5 A Husk rains down.
6 D DEKE: Don't look up.
7 D MIRIAM: Don't look up!
8 D OLLIE: Daddy, it knows my name!
9 A ¶ The beam shakes.
10 A The door is three steps away, chained from outside.
11 D MIRIAM (quiet): Deke. The chain.
12 D DEKE: I see it.
13 A ¶ The ladder creaks.
14 A One rung at a time.
15 A Slowly now.
16 A ¶ Ollie goes silent.
17 A Stops crying.
18 A Holds his father's hand and stares at the door.

### SCENE s02266 | INT. COURTHOUSE STAIRWELL - DAY
Detected names (may be incomplete or contain aliases): CONSTANCE ADEYEMI, RONAN BLAKE
1 A ¶ Concrete steps, a steel railing, a window of wired glass.
2 A Muffled footsteps echo from other floors.
3 A ¶ CONSTANCE ADEYEMI, forties, a defense lawyer in a navy suit, hair pulled back so tight it pulls her eyes, leans against the railing with a coffee she hasn't touched.
4 A RONAN BLAKE, thirties, her client, in a borrowed tie two inches too short, holds a rolled-up folder like a club.
5 D RONAN: You said it would be quick.
6 D CONSTANCE: It is quick.
7 D RONAN: It's been four hours.
8 D CONSTANCE: Four hours is quick for murder.
9 D RONAN (small laugh): Manslaughter.
10 D CONSTANCE: Don't say the word out loud.
11 A ¶ He nods.
12 A Goes quiet.
13 A Down the stairwell a door bangs; both of them turn their heads, wait, then relax.
14 D CONSTANCE [CONT'D]: The jury is back at three.
15 D RONAN: How do I look?
16 A ¶ She studies him: the tie, the folder, the way his shoulders curl inward.
17 A She reaches out and unrolls the folder, flattens it, hands it back.
18 D CONSTANCE: Carry it like a book. Not like a weapon.
19 A ¶ He does.
20 A Straightens his tie.
21 A It doesn't help.
22 D RONAN: Will they believe me?
23 D CONSTANCE: They'll believe what you show them.
24 D RONAN: I'm not good at showing.
25 D CONSTANCE: I know.
26 A ¶ She sets her cup on the rail.
27 A Takes out a handkerchief and pushes it into his hand.
28 D CONSTANCE [CONT'D]: When they read the verdict, look at the jury. Not at me. Not at the floor.
29 D RONAN: Why?
30 D CONSTANCE: Because they remember who looked.
31 A ¶ He folds the handkerchief into a neat square and slips it into his breast pocket, where it sits crooked and white.
32 D RONAN: You've done this before.
33 D CONSTANCE: Yes.
34 D RONAN: How many times?
35 D CONSTANCE: Enough.
36 A ¶ She picks up the cup again, and this time she drinks.

### SCENE s01884 | INT. COMMUNITY CENTER BASEMENT, BINGO NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): MAGS, DELACOURT-PIKE, DARNELL FONTAINE, LORRAINE FONTAINE, STRANGER, CALVIN
1 A ¶ Folding tables, fluorescent flicker, a coffee urn the size of a toddler.
2 A Forty chairs, eleven players.
3 A A cage of numbered balls spins slowly.
4 A ¶ Behind the microphone, MARGUERITE "MAGS" DELACOURT-PIKE (60s, cardigan, rhinestone glasses) holds a ball.
5 A At table three, DARNELL FONTAINE (30s, delivery uniform) hunches over four cards.
6 A Beside him, his mother LORRAINE FONTAINE (60s, church hat) marks each number with a stub of crayon.
7 D MAGS: B-nine.
8 D LORRAINE: That's yours.
9 D DARNELL: I know it's mine.
10 D MAGS: I-twenty-two.
11 D DARNELL: Mama, I told you I'd come on Thursday.
12 D LORRAINE: You said Thursday, and then you said Friday, and then you said next week.
13 D MAGS: N-forty-one.
14 D DARNELL: I've been working doubles.
15 D LORRAINE: Doing what?
16 D DARNELL: Deliveries. The same as last time you asked.
17 D MAGS: G-fifty-six.
18 D LORRAINE (marking): Funny. I called the depot. They said you quit in May.
19 A ¶ Darnell's crayon stops.
20 A He puts it down.
21 D DARNELL: You called my work.
22 D LORRAINE: I called a number on your jacket.
23 D MAGS: O-seventy-one.
24 A ¶ A STRANGER (40s, windbreaker, clipboard) sits at the edge of table three.
25 A Nobody saw him arrive.
26 D STRANGER: Mr. Fontaine. I'm sorry to interrupt.
27 D DARNELL: Who are you?
28 D STRANGER: Calvin Ortega, county clerk's office. You missed three hearings.
29 D LORRAINE: What hearings?
30 D DARNELL: Mama, don't.
31 D CALVIN: I only need a signature, sir. Right here.
32 D MAGS: Table three, keep it down, please. B-four.
33 A ¶ Darnell takes the pen.
34 A Signs.
35 A His hand shakes.
36 A Lorraine reads the form over his shoulder, then looks at the cards, then at him.
37 D LORRAINE: You lost the apartment.
38 D DARNELL: In June.
39 D LORRAINE: Where have you been sleeping?
40 D DARNELL: In the van. Until they took the van.
41 D MAGS: B-nine. Again. Somebody's got a B-nine.
42 A ¶ Lorraine stands.
43 A The chair scrapes.
44 A Heads turn.
45 A She takes off her church hat and puts it down on the table, very gently, like laying a flag.
46 D LORRAINE: You come home. Tonight.
47 D DARNELL: Mama--
48 D LORRAINE: I am not asking.
49 D DARNELL (rising, voice cracking): Why are you doing this here? In front of everyone?
50 D LORRAINE: Because everywhere else you stop picking up the phone.
51 A ¶ He flings the cards.
52 A They scatter.
53 A Marked or not, they rain across the floor.
54 D DARNELL: I didn't want you to see me like this!
55 D MAGS: Table three!
56 D DARNELL: Like what? Like a man who failed?
57 A ¶ Calvin retreats three steps, clipboard raised like a shield.
58 A Mags has gone silent, one ball in her fist.
59 A Eleven players watch.
60 A The cage creaks once more and stops.
61 D LORRAINE: Like my son.
62 A ¶ He stands there.
63 A She does not move.
64 A Mags, very softly, into the microphone.
65 D MAGS: Bingo, I think. If anyone's asking.

### SCENE s01947 | INT. FUNICULAR STATION VAULT - NIGHT
Detected names (may be incomplete or contain aliases): CAMILLE DUVALL, RASHID AL-TAMIMI, SVEN EKLUND, ODESSA RUIZ
1 A ¶ A brass-and-marble ticket hall at the foot of an alpine rail line.
2 A Behind a hidden panel, the old bank vault gapes open, its steel door scarred by a thermal lance.
3 A Dust motes drift in lantern light.
4 A ¶ CAMILLE DUVALL, 40s, tailored black coat, pale and still, sits on an overturned crate with a coil of rope across her knees.
5 A She waits.
6 A A step ahead of her stands RASHID AL-TAMIMI, 50s, shaven head, a surgeon's calm; he is gently lifting a velvet-wrapped ingot from a cart.
7 A SVEN EKLUND, 30s, red-bearded and nervous, kneels beside him, counting bars into a leather duffel.
8 A ODESSA RUIZ, 30s, a lookout with a stopwatch, leans in the archway, tapping her boot.
9 D CAMILLE: Time?
10 D ODESSA: Four minutes to the first car.
11 A ¶ She nods.
12 A She does not move from the crate.
13 D RASHID: Seventeen bars.
14 D SVEN: Eighteen.
15 D RASHID: Count again.
16 A ¶ He does, lips moving.
17 A He shakes his head and adds one more bar to the bag.
18 A The duffel sags.
19 A He grunts and drags it toward the archway, where she meets him and takes the other strap.
20 D SVEN: Camille, there were thirty.
21 D CAMILLE: There were thirty. Now there are eighteen, because someone got here first.
22 D RASHID: Who?
23 D CAMILLE: Someone with a key.
24 A ¶ Silence.
25 A Odessa's stopwatch ticks.
26 A Sven looks at the floor.
27 A Rashid straightens and turns toward the vault, slowly, as if the empty shelves might speak.
28 D ODESSA: Three minutes.
29 D CAMILLE: We take what we have and go.
30 D RASHID: We also look at who knew the plan.
31 A ¶ He stares at Sven.
32 A Sven goes red.
33 A The duffel slides from his hand.
34 D SVEN: I didn't.
35 D CAMILLE: Nobody's accusing you.
36 D RASHID: I am.
37 A ¶ She stands.
38 A She folds the rope.
39 A She sets it in the cart with the same care she gave the rest.
40 D CAMILLE: Rashid, it's a trade. We keep eighteen bars, and the thief keeps twelve. We never speak of it again.
41 D RASHID: And if the thief speaks?
42 D CAMILLE: Then we'll know exactly who it was.
43 A ¶ Odessa clicks the stopwatch.
44 A Two minutes.
45 D ODESSA: Time's up.

### SCENE s01622 | EXT. PAGODA ROOFTOP, FLOODED RICE PADDIES - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT OKONKWO, PRIVATE LINDQVIST, CORPORAL HAYASHI, MARCHETTI
1 A ¶ Mist on black water.
2 A A cracked tiled roof.
3 A Five soldiers pressed flat against it.
4 A ¶ SERGEANT OKONKWO, 40s, broad, calm, scans the treeline with binoculars.
5 A Beside him, PRIVATE LINDQVIST, 19, pale, hugs a radio like a baby.
6 A ¶ Quiet.
7 A ¶ CORPORAL HAYASHI, 30s, sniper, wiry, settles behind her rifle.
8 A Below, MARCHETTI, 20s, loud even in whispers, drags a crate of ammunition up the slope and spills three boxes, which clatter down the tiles, while Okonkwo grabs Lindqvist's collar to stop him sliding after them and Hayashi swears under her breath and Marchetti dives, catching one box, losing the other two.
9 A They splash into the paddy.
10 A Ripples spread.
11 A ¶ Silence.
12 A Everyone holds.
13 D MARCHETTI (whispering): Sorry. Sorry.
14 D OKONKWO: Be quiet.
15 A ¶ A crack.
16 A Far off.
17 A A bullet chips a tile beside Lindqvist's head.
18 A ¶ Everyone flattens.
19 A Radio hisses.
20 A Lindqvist fumbles it.
21 D LINDQVIST: They've seen us. They've seen us.
22 D OKONKWO: Good. Let them look at me.
23 A ¶ He stands.
24 A Raises one hand.
25 A Waves at the mist.
26 D HAYASHI: Sergeant --
27 A ¶ Nothing.
28 A A long breath.
29 A The mist stays still.
30 A ¶ Then a white scarf, tied to a stick, rises from the far tree line.
31 A Waves slowly.
32 D OKONKWO: Hold fire.
33 D MARCHETTI: It's a trick.
34 D HAYASHI: It's a kid. A kid with a scarf.
35 A ¶ Lindqvist laughs, one wet hiccup.
36 A Marchetti sinks onto the tiles.
37 A Hayashi lowers her rifle one inch.
38 A ¶ A second crack.
39 A Closer.
40 A The scarf drops out of sight.
41 A ¶ Everyone is moving again.
42 A Hayashi up on one knee, Okonkwo hauling Lindqvist back by the strap, Marchetti sliding down the far side toward the water, the radio shrieking static in Lindqvist's arms, and a third shot ringing off the bronze bell above.
43 D OKONKWO: Down! Down the back!
44 A ¶ Lindqvist slides.
45 A Marchetti catches him.
46 A They hit the water together.
47 A ¶ Mist closes over the roof.
48 A ¶ Silence again.
49 A One tile, rocking.
50 A Then still.

### SCENE s01992_0 | EXT. ICE CAVE MOUTH, GLACIER - DAY
Detected names (may be incomplete or contain aliases): HANNELORE BR, CKNER-ODUYA, GIDEON PEARCE-NAKAGAWA, INGRID SANDQVIST, KWESI MENSAH-DUBOIS, TOBY, FERRANTE
1 A ¶ Blue-white walls.
2 A A tunnel of ice mouthing into a blizzard.
3 A Five climbers huddle in the entrance, ropes tangled, one stove sputtering.
4 A ¶ HANNELORE BRÜCKNER-ODUYA (40s, expedition leader, frost in her eyebrows).
5 A GIDEON PEARCE-NAKAGAWA (30s, medic).
6 A INGRID SANDQVIST (20s, photographer, camera under her jacket).
7 A KWESI MENSAH-DUBOIS (30s, guide, bad knee).
8 A TOBIAS "TOBY" FERRANTE (50s, client, wealthy, too many layers).
9 A ¶ A shriek of wind.
10 A The stove gutters.
11 D HANNELORE: Rope up. Now.
12 D TOBY: We just sat down.
13 D HANNELORE: We just stopped. It's not the same.
14 D GIDEON: Kwesi, how's the knee?
15 D KWESI: It's fine.
16 D GIDEON: It's not fine. I can see you limping.
17 D KWESI: It's frozen, which is better than fine.
18 A ¶ Ingrid takes a picture.
19 A Toby swats at the lens.
20 A She jerks the camera away, he grabs for it, the cord snaps around his wrist, and both topple sideways into Gideon, who lands on the stove.
21 A It goes out.
22 D GIDEON [CONT'D] (rolling away): Oh, that's lovely.
23 D HANNELORE: Everybody up. Up!
24 A ¶ Wind.
25 A A deep groan from the ice above.
26 A Powdered snow sifts down.
27 A They freeze, all five, heads tilted back.
28 D KWESI (low): That's not wind.
29 D HANNELORE: No.
30 A ¶ A crack, like a rifle shot.
31 A Hannelore bellows.
32 D HANNELORE [CONT'D]: Out! Everyone out!
33 A ¶ They scatter in five directions, ropes whipping behind.
34 A Toby runs deeper into the cave.
35 A Ingrid sprints for the blizzard.
36 A Gideon drags Kwesi by the collar.
37 A Hannelore stands her ground a second longer than she should, then dives.
38 A ¶ The ice roof comes down in a roar.
39 A White.
40 A Silence.

### SCENE s02363 | INT. HOSPITAL ROOFTOP GARDEN - MORNING
Detected names (may be incomplete or contain aliases): IMELDA FAIRWEATHER-NKEMELU, ARTHUR PENHALIGON, JULIETTE PENHALIGON, NURSE BEATRIX OYELAKIN, DR. FAIRWEATHER
1 A ¶ A walled terrace above the oncology wing.
2 A Raised beds of lavender and rosemary.
3 A Wrought-iron benches, a trellis of late roses.
4 A Pigeons strut.
5 A The city hums far below.
6 A ¶ DR. IMELDA FAIRWEATHER-NKEMELU, 50s, in a white coat gone limp, sits on a bench with a paper cup.
7 A She has not slept.
8 A A gray streak runs through her hair.
9 A ¶ MR. ARTHUR PENHALIGON, 70s, in a hospital gown and a corduroy cardigan, sits beside her, IV pole parked at his knee.
10 A His cheeks are hollow.
11 A His eyes are very clear.
12 A ¶ His daughter, JULIETTE PENHALIGON, 40s, in a trench coat, perches on the bench's arm, hands clasped.
13 A ¶ A nurse, NURSE BEATRIX OYELAKIN, 30s, in blue scrubs, hovers at the door with a clipboard.
14 D PENHALIGON: You'll tell it plainly, Doctor.
15 D DR. FAIRWEATHER: Yes.
16 D PENHALIGON: Good. Everyone else has been very gentle.
17 D DR. FAIRWEATHER: The scan shows the tumor has spread to the liver.
18 D PENHALIGON: How long?
19 D DR. FAIRWEATHER: Weeks. Perhaps a few months.
20 D JULIETTE (quietly): Dad.
21 D PENHALIGON: It's all right, Juliette.
22 D DR. FAIRWEATHER: We can keep you comfortable. We can plan the time.
23 D PENHALIGON: Plan.
24 D DR. FAIRWEATHER: Yes.
25 D PENHALIGON: I have been planning since I was a young man. I planned to write a novel. I planned to see Lisbon.
26 D DR. FAIRWEATHER: Have you seen Lisbon?
27 D PENHALIGON: Never.
28 D DR. FAIRWEATHER: Then there is something to plan.
29 D PENHALIGON (a thin smile): You are a surprising doctor.
30 D DR. FAIRWEATHER: I have been told.
31 D JULIETTE (to the doctor): Can he travel?
32 D DR. FAIRWEATHER: With supervision. In two weeks. Not more.
33 D BEATRIX (from the door): Doctor, the families are waiting in Bay Three.
34 D DR. FAIRWEATHER (rising, to Beatrix): Two minutes.
35 D PENHALIGON: Doctor.
36 D DR. FAIRWEATHER: Yes, Mr. Penhaligon.
37 D PENHALIGON: Thank you for sitting.
38 A ¶ She nods.
39 A Touches his shoulder for a moment, light as a petal, and goes.
40 A The door closes.
41 A A pigeon lands on the trellis.
42 A Juliette takes her father's hand.
43 A He looks at the lavender.

### SCENE s02217 | INT. VETERINARY HOSPITAL - SURGERY SUITE - 2 A.M.
Detected names (may be incomplete or contain aliases): ISADORA KEMP, TECH PRESTON LI, ARTHUR BELL
1 A ¶ Stainless steel, a hush of oxygen.
2 A On the table, a golden retriever under anaesthesia, chest rising slow.
3 A A heart monitor chirps in a calm rhythm.
4 A ¶ DR. ISADORA KEMP (40s, surgeon, mask down) scrubs at the sink.
5 A TECH PRESTON LI (20s, scrubs with cartoon dogs) prepares instruments.
6 A OWNER MR. ARTHUR BELL (70s, cardigan, trembling) watches from the window of the observation room, his palm flat against the glass.
7 D ISADORA: Preston, ready?
8 D PRESTON: Ready.
9 D ISADORA: Blade.
10 A ¶ He hands it over.
11 A She works without ceremony, a quick incision.
12 A The retriever's belly opens clean.
13 A She examines the field, brow furrowing.
14 D PRESTON: How's it look?
15 D ISADORA: Better than the X-ray.
16 D PRESTON: Good.
17 D ISADORA (to herself): Much better.
18 A ¶ She reaches in.
19 A Withdraws a twisted length of blue cloth, glistening.
20 A Holds it to the light.
21 D ISADORA [CONT'D] (to the room): Everyone, we found it.
22 A ¶ The intercom crackles.
23 A Mr. Bell's voice, thin and anxious, from the observation room.
24 D MR. BELL [O.S.]: Is that.
25 D ISADORA: A sock, Mr. Bell.
26 D MR. BELL [O.S.]: It's blue.
27 D ISADORA: It is.
28 D MR. BELL [O.S.]: It's Margaret's.
29 D ISADORA: Margaret's sock?
30 D MR. BELL [O.S.]: She left them. When she died. I couldn't throw them away.
31 A ¶ Isadora stops.
32 A Preston looks at her.
33 A She lowers the sock into the tray, quietly, as if it were glass.
34 D ISADORA: Mr. Bell, we'll clean it.
35 D MR. BELL [O.S.]: Please.
36 D ISADORA: Preston, put it in a bag.
37 D PRESTON: Yes, Doctor.
38 D ISADORA: A clean bag.
39 D PRESTON: A very clean bag.
40 A ¶ The monitor chirps.
41 A The retriever sighs in her sleep.
42 D ISADORA (to herself, almost): Who eats a sock.
43 D PRESTON: A dog in grief.
44 D ISADORA: I think so, yes.
45 A ¶ She resumes.
46 A The incision closes under her hands, stitch after stitch.
47 A Preston wipes his eyes with the back of his glove.

### SCENE s00973 | INT. GLASS-FOREST APIARY TOWER - DUSK
Detected names (may be incomplete or contain aliases): WYNFRED, SABLE, LUCAN
1 A ¶ Hexagonal windows hum with ten thousand bees.
2 A WYNFRED, an old beekeeper in a veil of moth silk, pours smoke into a brass censer.
3 A SABLE, a young storm-witch with wet hair, sits on the hive-table.
4 A LUCAN, a knight with a cracked pauldron, stands by the stairs.
5 D WYNFRED: You came a long way for honey.
6 D LUCAN: I came for the queen.
7 D SABLE: He means the hive's queen. Not the crown.
8 D WYNFRED: Does he?
9 D LUCAN: I mean what I said.
10 D SABLE: You mean what you were told to say.
11 D LUCAN: The king is dying.
12 D WYNFRED: Kings do.
13 D LUCAN: His physician says only royal jelly can hold the fever.
14 D SABLE: And the physician is lying.
15 D LUCAN: You don't know that.
16 D SABLE: I know the smell of a man who wants a hive burned.
17 D WYNFRED: Quiet, child. Let him say it.
18 D LUCAN: I was told to take the queen. Alive if she'd come. Dead if not.
19 D WYNFRED: And you believed it.
20 D LUCAN: I believed the king.
21 D SABLE: The king hasn't spoken in a month.
22 D LUCAN: Then who sent me?
23 D WYNFRED: Ask the hive.
24 A ¶ The humming deepens.
25 A Wynfred sets down the censer.
26 D LUCAN: I won't kill a queen of bees.
27 D SABLE: Then what will you do?
28 D LUCAN: I'll warn the king.
29 D WYNFRED: He can't hear you.
30 D LUCAN (shouting): Then I'll make the palace hear!
31 D SABLE: Then I will!
32 D LUCAN: Then I will!
33 D WYNFRED: Both of you, stop.
34 D LUCAN: He is my king.
35 D SABLE: And this is my home.
36 D WYNFRED: Then go together. Fire answers fire. Bees answer storm.

### SCENE s01807 | INT. ABANDONED RADIO STATION - STUDIO B - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, AIR, NELL
1 A ¶ A dead studio.
2 A Foam panels hanging in strips.
3 A A broadcast desk dusted with plaster.
4 A A single red ON AIR bulb, unlit.
5 A Cold breath hangs in the beam of a flashlight.
6 A ¶ A WOMAN in a drenched raincoat limps through the door, flashlight gripped in both hands, the beam shaking over the room.
7 A Mud to the knees.
8 A A cut at her hairline.
9 A She shuts the door behind her, drags the desk's heavy chair in front of it, and wedges the back under the knob.
10 A Her breathing is loud in the dead air.
11 A ¶ She sweeps the beam across the booth.
12 A Dials.
13 A Faders.
14 A A coffee mug with the mold of years.
15 A A corkboard of staff photos and a laminated badge hanging from a nail on a lanyard.
16 D WOMAN (muttering): Okay. Okay. Okay.
17 A ¶ She crosses to the desk, plants the flashlight on its end so the beam strikes the ceiling, and shrugs off her coat.
18 A She flips the toggle on the console.
19 A Nothing.
20 A She flips it again.
21 A A hum, then a tick, and the ON AIR bulb glows red, flooding the booth in a color like a wound.
22 A ¶ She jumps back, knocking the mug onto the floor.
23 A It shatters.
24 A She waits.
25 A Nothing answers.
26 A She crouches, picks up the lanyard, and reads the badge in the red light, turning it toward the beam.
27 D WOMAN [CONT'D] (reading): Nell Okonjo-Reyes. Overnight host.
28 A ¶ She looks at the photograph on the badge.
29 A It looks like her.
30 A She lifts a hand to her own face, pressing the cut, then drops it.
31 D NELL (whispering): That's me.
32 A ¶ A hiss from the speaker above the desk.
33 A Then a voice, her own, thin and recorded, slowed by the failing tape.
34 D NELL [V.O.] (recorded, faint): ...if you're hearing this, Nell, don't go to the lobby. Don't open the second door. Whatever it says in your voice, it isn't you.
35 A ¶ Nell stares at the speaker.
36 A The tape runs on in hiss.
37 A Behind her, in the corridor, something slides along the wall, patient, in no hurry.
38 A The chair against the door creaks as its back leg shifts a quarter-inch.
39 A She does not turn.
40 A She takes the badge, wraps the lanyard once around her wrist, grabs the flashlight, and with a trembling hand switches off the red light.
41 A ¶ The booth goes black.
42 D NELL [V.O., CONT'D] (recorded): Stay in the dark. It can't read what it can't see.
43 A ¶ In the dark, a soft knock comes at the door.
44 A Once.
45 A Twice.
46 A Then a voice, calm and warm, her own.
47 D NELL [O.S.]: Nell? It's me. Let me in.
48 A ¶ Nell stands rigid in the black.
49 A Her lips move.
50 A She says nothing.
51 A The knocking stops.
52 A The chair creaks again, steadily, as though a patient hand is pressing from the other side.
53 D NELL (barely audible): No.

### SCENE s01151 | INT. OFFICE - OPEN-PLAN FLOOR - MORNING
Detected names (may be incomplete or contain aliases): VERB, KENDRA, BARRY, LEILANI, SCOTT, PRAKASH, ^SCOTT, HENDERSON
1 A ¶ Cubicles.
2 A Motivational posters ("SYNERGY IS A VERB").
3 A A glass conference room in the corner with a big screen blinking: ALL-HANDS 9:00.
4 A ¶ KENDRA (30s, sleek blazer, lanyard) leans on a cubicle wall sipping oat-milk coffee.
5 A BARRY (40s, cargo shorts, laminated badge, thermos) sits at his desk, typing like it's a chore.
6 A LEILANI (20s, intern, bright tote bag) hugs a stack of binders.
7 A SCOTT (40s, manager, quarter-zip, headset) paces with his hands behind his back.
8 A DR. PRAKASH (50s, consultant, tweed jacket, tablet) stands quietly by the conference room.
9 D SCOTT: Good morning, team! Beautiful day to be productive!
10 D KENDRA: Morning, Scott.
11 D BARRY (muttering): Morning.
12 D LEILANI: Good morning, Mr. Scott!
13 D SCOTT: Leilani, it's just Scott.
14 D LEILANI: Sorry, Mr. Just Scott.
15 A ¶ Kendra snorts coffee.
16 A Barry stifles a laugh.
17 D SCOTT: Alright, alright. Dr. Prakash is here to help us transition into the exciting new Q3 optimization.
18 D PRAKASH: Good morning.
19 D KENDRA: Is it an audit?
20 D SCOTT: It's a transition.
21 D BARRY: Is it layoffs?
22 D SCOTT: It's an opportunity!
23 D LEILANI: Oh, I love opportunities.
24 D PRAKASH: Perhaps we begin in the conference room.
25 D SCOTT: Great idea, Dr. P.
26 D BARRY: Hey, Kendra.
27 D KENDRA: Yeah?
28 D BARRY: Do you have the Henderson file?
29 D KENDRA: You asked me yesterday.
30 D BARRY: Right. But do you have it?
31 D KENDRA: It's in the shared drive.
32 D LEILANI: I have a binder on Henderson!
33 D ^SCOTT: We don't need the Henderson file today.
34 D PRAKASH: Henderson is already resolved.
35 D KENDRA: Wait, what?
36 A ¶ They all stop.
37 A Prakash taps his tablet.
38 A The conference screen flickers, flashing a list of names.
39 A Under HENDERSON, a line: TERMINATED.
40 D BARRY: Terminated? He's on vacation.
41 D PRAKASH: He was. Henderson, Pruitt, Salazar, and Okoye.
42 D SCOTT: Dr. Prakash, we agreed to sequence the announcement.
43 D PRAKASH: I'm sequencing it now.
44 D KENDRA (low): Barry, check your email.
45 A ¶ Barry opens a window.
46 A His eyes go wide.
47 A Kendra grabs her phone.
48 A Leilani drops two binders.
49 D LEILANI: Is it bad?
50 D SCOTT (brightly): It's an opportunity!
51 A ¶ Everyone looks at him.
52 A He laughs, weakly, and tugs the zipper of his quarter-zip all the way up.
53 D KENDRA: Scott. Your name is on the list.
54 D SCOTT (a long beat): Is it?
55 D BARRY: Number one.
56 A ¶ Scott looks at the screen.
57 A He doesn't breathe.
58 A Then, very slowly, he reaches for Barry's thermos and takes a long drink.
59 D SCOTT: This coffee is terrible.
60 D BARRY: It's tea.

### SCENE s01435 | INT. ABANDONED SALOON - DUSK
Detected names (may be incomplete or contain aliases): HOLLIS GREER, DORA, SIX-CROWS
1 A ¶ Dust blankets the long bar.
2 A A chandelier hangs by one chain, glass prisms scattered across the floorboards like frozen rain.
3 A Through shattered windows the sky bleeds orange into violet.
4 A ¶ HOLLIS GREER (50s, lean as a fence post, long coat gone grey from travel) stands at the bar with a tin cup.
5 A He wipes a stool with his sleeve.
6 A Sits.
7 A Pours water from a canteen and does not drink it.
8 D HOLLIS (to the empty room): Evening, folks.
9 A ¶ Nothing.
10 A A loose shutter bangs.
11 D HOLLIS [CONT'D]: Place looks like it's seen better days. Same as me.
12 A ¶ He sets the cup down.
13 A Looks at the mirror behind the bar.
14 A A crack runs through it like a river on a map.
15 A His own reflection splits in two.
16 D HOLLIS [CONT'D] (muttering): Don't you start.
17 A ¶ A voice rings from outside, clear in the thin air.
18 D DORA [O.S.]: Hollis Greer!
19 A ¶ He doesn't flinch.
20 A He sets down the cup, slow.
21 D HOLLIS: I hear you.
22 D DORA [O.S.]: Thought you might. Come out.
23 D HOLLIS: I'm tired, Dora.
24 D DORA [O.S.]: So am I. I rode three hundred miles. Come out or I come in.
25 A ¶ He rubs his face.
26 A Stands.
27 A Settles his coat.
28 A Moves to the doorway but does not cross it.
29 D HOLLIS: Everybody who's listening, I'd like it noted I asked nicely.
30 D DORA [O.S.]: Nobody's listening.
31 D HOLLIS: The horses are.
32 A ¶ The batwing doors creak.
33 A Spurs ring.
34 A ¶ THEODORA "DORA" SIX-CROWS (40s, braided hair silver at the roots, a Winchester slung across her back, face weathered like bark) pushes through.
35 A Her eyes take in the wreck of the saloon, the chandelier, the cracked mirror, the man.
36 D DORA: You look old.
37 D HOLLIS: You look exactly the same.
38 D DORA: That's not a compliment.
39 D HOLLIS: It wasn't meant as one.
40 A ¶ She walks to the bar.
41 A Takes his cup.
42 A Drinks.
43 A Sets it back.
44 D DORA: You still owe me a horse.
45 D HOLLIS: I owe you more than a horse.
46 D DORA: Start with the horse.

### SCENE s00435 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND, MAN IN HOODIE, ABUELA TERESA, TEEN GIRL, DARIO
1 A ¶ Humming dryers.
2 A A flickering fluorescent tube.
3 A Five people, one crowded bench.
4 D ROSALIND: That's my machine.
5 D YOUNG MAN: It was empty.
6 D ROSALIND: It was paused.
7 D ABUELA TERESA: Mija, let him have it.
8 D ROSALIND: Mama, I've been here since six.
9 D TEEN GIRL (not looking up from phone): Y'all are loud.
10 D YOUNG MAN: I'm Dario, by the way.
11 D ROSALIND: I don't care, Dario.
12 D ABUELA TERESA: Dario, you want a tamale?
13 D DARIO: Yes, ma'am.
14 D ROSALIND: Mama!
15 D MAN IN HOODIE: Can someone cover me for the dryer? I need quarters.
16 D TEEN GIRL: Nobody has quarters.
17 D ROSALIND: I have quarters.
18 D MAN IN HOODIE: God bless you.
19 D ROSALIND: Take the machine, Dario.
20 D DARIO: Thank you. Really.

### SCENE s02264 | INT. COUNTRY HOUSE DINING ROOM - 1840S - EVENING
Detected names (may be incomplete or contain aliases): AGNES, FOTHERGILL, EDMUND
1 A ¶ A long mahogany table laid for three.
2 A Silver, crystal, candles.
3 A A fire crackles.
4 A A portrait of a stern ancestor presides over the sideboard.
5 A ¶ AGNES, forties, in dove-gray silk, sits at the head.
6 A MR. FOTHERGILL, fifties, a visiting solicitor, to her right, with a napkin tucked in his collar.
7 A EDMUND, twenty, her son, sits opposite him, turning a wine glass by its stem.
8 A ¶ She lifts the soup tureen herself.
9 A Ladles three portions.
10 A Her hand is quite steady.
11 D FOTHERGILL: This is excellent.
12 D AGNES: Cook will be pleased.
13 A ¶ He samples it.
14 A She watches him.
15 A Edmund watches the glass.
16 D FOTHERGILL: Mrs. Whitcombe, I regret I have news.
17 D AGNES: Mr. Fothergill, you always have news. Eat first.
18 A ¶ He eats.
19 A A pause.
20 A The fire pops.
21 D EDMUND: Mother, I think perhaps we should hear it.
22 D AGNES: After soup.
23 D EDMUND: But if it concerns--
24 D AGNES: After soup, Edmund.
25 A ¶ He subsides.
26 A Sets down his glass.
27 A The candle flames shiver as a servant's footsteps pass in the hall and fade.
28 D FOTHERGILL: The estate. The creditors have called in the note.
29 A ¶ Agnes sets down her spoon.
30 A Aligns it with the edge of her bowl.
31 D AGNES: How much?
32 D FOTHERGILL: Four thousand pounds.
33 D EDMUND: We don't have four thousand.
34 D FOTHERGILL: I know.
35 D EDMUND: Then we'll sell the east pasture.
36 D AGNES: The east pasture was your father's.
37 D EDMUND: Father is dead.
38 A ¶ She looks at him.
39 A He drops his eyes.
40 A Fothergill coughs into his napkin.
41 D FOTHERGILL: There is another way.
42 D AGNES: There always is.
43 D FOTHERGILL: A marriage. A gentleman in Bath, a widower of good family, has inquired--
44 D AGNES (to Edmund): Pass the bread.
45 D EDMUND: Mother.
46 D AGNES: The bread, Edmund.
47 A ¶ He passes it.
48 A She tears off a piece, takes her time buttering it.
49 A Fothergill waits, napkin twisted in his fist.
50 D FOTHERGILL: It would settle the debt.
51 D AGNES: And whom does the gentleman wish to marry?
52 A ¶ Fothergill looks, slowly, at Edmund.
53 A Edmund stares back, color draining from his face.
54 A Agnes, not looking at either of them, takes a bite of bread.
55 D AGNES [CONT'D] (mildly): I see. More soup, Mr. Fothergill?
56 A ¶ He holds out his bowl.
57 A She fills it.
58 A He takes it with a trembling hand and does not meet her eyes.
59 A Edmund rises.
60 D EDMUND: Excuse me.
61 D AGNES: Sit down.
62 A ¶ He doesn't.
63 A He walks to the fire and stands with his back to the table, his shoulders very straight.
64 D FOTHERGILL (clearing his throat): The offer remains open until Friday.
65 D AGNES: Then we shall eat our dinner, and sleep, and tomorrow I shall write to Bath.
66 D FOTHERGILL: Madam?
67 D AGNES: Whatever I write, Mr. Fothergill, is my own business.
68 A ¶ She resumes her soup.
69 A At the fire, Edmund lifts a hand and wipes his eyes, quickly, with the back of his wrist.

### SCENE s00559 | INT. DR. FEINBERG'S DENTAL OFFICE - WAITING ROOM - EVENING
Detected names (may be incomplete or contain aliases): SURPRISE, GRANDMA ROSEMARY, GLENDA PRZYBYLSKI, MARVIN, SKYLER, LAZLO KERESZTES, THADDEUS FEINBERG
1 A ¶ Beige chairs, a fish tank, a wall of laminated posters of cheerful molars.
2 A The lights are dim.
3 A A banner above the receptionist's desk reads, in glitter: SURPRISE, GRANDMA!
4 A ¶ Six conspirators crouch behind furniture.
5 A GLENDA PRZYBYLSKI, 40s, in a party hat, ducks behind the water cooler holding a cake; her husband MARVIN, 50s, behind the ficus with a stack of paper cups, while their teenage daughter SKYLER, 16, hides under the receptionist's desk, filming on her phone; LAZLO KERESZTES, 30s, the nervous nephew, slips behind the coat stand with a party horn, and THADDEUS FEINBERG, 60s, the dentist, in scrubs and a pointy hat, sits on the reception counter, stifling a laugh, while everyone whispers, shushes, and knocks into everyone else.
6 A ¶ The front door chimes.
7 A ¶ Everyone freezes.
8 A A chair creaks.
9 A Lazlo's horn squeaks.
10 A Marvin drops a paper cup.
11 A Glenda hisses at both of them.
12 A Skyler's phone beeps.
13 A The door opens.
14 A Nobody enters.
15 D THADDEUS (whispering): Where is she?
16 D GLENDA (whispering back): She's coming.
17 D MARVIN (whispering): My knee is stuck.
18 D LAZLO (whispering): Mine too.
19 A ¶ The door chimes again.
20 A Nobody enters.
21 A Wind moves a magazine.
22 D GLENDA: Well, that's the worst possible timing.
23 D LAZLO: It's okay. She'll be here. She always is.
24 A ¶ The lights flip on.
25 A Everyone stands.
26 A In the doorway, in a flowered coat, is GRANDMA ROSEMARY, 80s, who looks at the banner, the cake, the party hats, and the open mouth of the dentist, and says, quite calmly:
27 D GRANDMA ROSEMARY: I thought the appointment was tomorrow.

### SCENE s01209 | EXT. GLASS FOREST - DAWN
Detected names (may be incomplete or contain aliases): KESTREL AYODELE-VANCE, BARROW, THE LADY IMOGEN, PIP
1 A ¶ Trees of translucent crystal rise in endless columns, trunks like frozen waterfalls.
2 A Light bends through them, scattering rainbows across a floor of powdered quartz.
3 A The air chimes.
4 A ¶ KESTREL AYODELE-VANCE (20s, scout's leathers, a bow slung across her back) steps through the trunks, careful of each footfall.
5 A BARROW (50s, dwarf, bearded, hammer at his belt) trundles behind her.
6 A THE LADY IMOGEN (ageless, pale cloak, sword of white metal) walks last, one hand tracing the trees.
7 A And between them, trotting at Kestrel's heels, a small fox-faced creature named PIP (appears to be a child of seven, ears slightly too pointed).
8 D PIP: Is it true the trees sing?
9 D KESTREL: Only when they're angry.
10 D BARROW: Which is always.
11 A ¶ A deep thrum shakes the forest.
12 A Crystals tremble.
13 A Pip clutches Kestrel's hand.
14 A Imogen halts and raises her blade.
15 A Kestrel nocks an arrow; Barrow swings the hammer from his belt; they form a rough triangle around the child, backs to the trunks.
16 D THE LADY IMOGEN: Stay close. Do not look at your reflection.
17 D BARROW (muttering): Easy for her to say. She hasn't got one.
18 A ¶ The thrum rises to a chord.
19 A From between the trees, a shape, tall, many-limbed, assembled from shards, glides forward.
20 A It tilts.
21 A Its glittering face turns toward Pip.
22 D KESTREL: Barrow, left!
23 A ¶ Barrow charges.
24 A The creature swats him aside; he tumbles into a trunk, which rings like a bell.
25 A Kestrel looses an arrow.
26 A It shatters on the creature's chest.
27 A Imogen lunges and her blade sinks to the hilt.
28 A The creature shrieks, a sound like glass breaking underwater.
29 A It lashes out and sweeps Imogen off her feet, then Kestrel, then Barrow, who has staggered back into the fight.
30 D PIP (shouting): Stop!
31 A ¶ Everything freezes.
32 A Kestrel on her back.
33 A Barrow half-risen.
34 A Imogen with her sword pinned.
35 A The creature, towering, turns to the child.
36 A Pip steps forward.
37 A He holds out both hands.
38 D PIP [CONT'D] (quietly): I know your song.
39 A ¶ He hums three notes.
40 A The creature sways.
41 A Its shards soften from white to gold.
42 A It kneels, slowly, until its face is level with the boy's.
43 D KESTREL (whisper): Pip.
44 D PIP: It's all right. It's only lonely.
45 A ¶ Imogen lowers the blade.
46 A Barrow lowers the hammer.
47 A The creature reaches out one shard-fingered hand and touches Pip's forehead, and a single rainbow bursts through the canopy and floods the clearing in color.
48 D THE LADY IMOGEN (softly): Of course.
49 D BARROW (rising, to no one): Always the small ones.
50 A ¶ The forest begins, very softly, to sing.

### SCENE s00504 | EXT. BOCCE COURT - COMMUNITY CLUB - DUSK
Detected names (may be incomplete or contain aliases): NONNO ALDO BARSANTI, LUCIA FERRANTE, DONOVAN BROTHERS, PADRAIC, CORMAC, REFEREE SIGNORA TESTA, KOFI ANTWI
1 A ¶ Crushed oyster shell, rolled flat.
2 A String lights.
3 A Folding chairs along the rail.
4 A Final match, tied.
5 A ¶ NONNO ALDO BARSANTI (80s, cardigan, one eye clouded) crouches at the foul line.
6 A His partner LUCIA FERRANTE (70s, sun hat, fierce) stands beside him.
7 A Across the court: the DONOVAN BROTHERS, PADRAIC (50s, mustache) and CORMAC (50s, mustache, identical), arms crossed.
8 A Between them, REFEREE SIGNORA TESTA (60s, whistle, a ruler in her hand) measures the gap between pallino and ball.
9 A In the front row, young KOFI ANTWI (10, orange soda, the only one not wearing white) watches.
10 A ¶ Aldo rolls.
11 A The ball curves, kisses the pallino, stops.
12 D LUCIA: Eh!
13 D PADRAIC: That's a touch.
14 D CORMAC: That's a foul.
15 D TESTA (measuring): Touch. Aldo's.
16 D CORMAC: Madonna.
17 A ¶ Cormac hurls his ball.
18 A It cracks into Lucia's, scattering the cluster.
19 A Lucia lunges.
20 A Padraic grabs her arm.
21 A Aldo grabs Padraic's collar.
22 A Testa blows the whistle, step-stepping between them with the ruler held like a sword, and Kofi stands on his chair, soda raised, and the entire club goes silent as the pallino rolls to a stop at the exact center of the court.

### SCENE s01203 | INT. PAWN SHOP - EVENING
Detected names (may be incomplete or contain aliases): ODETTE BRIDGEWATER-LANE, MARCELINO FARRELL
1 A ¶ Glass cases of watches, guitars hung on the wall, a neon OPEN sign buzzing in the window.
2 A The register drawer is half out.
3 A ¶ ODETTE BRIDGEWATER-LANE (60s, widow's black, handbag hugged to her ribs) stands at the counter.
4 A A wedding ring sits on a velvet pad between her and MARCELINO FARRELL (40s, shirtsleeves, loupe pushed up on his forehead), who turns it under a lamp.
5 D MARCELINO: Thirty dollars.
6 D ODETTE: Eighty.
7 D MARCELINO: It's a plain band, Mrs. Bridgewater-Lane.
8 D ODETTE: It's forty-one years.
9 A ¶ He sets the loupe down.
10 A She does not blink.
11 A He slides the ring an inch toward her, then an inch back, then taps the glass case and, with a sigh, opens the register, counts out bills, closes it, and counts them again.
12 D MARCELINO: Fifty. And I'm robbing myself.
13 D ODETTE (to the room): Everyone's been robbed by somebody.
14 A ¶ She takes the money.
15 A Slips it into the handbag.
16 A Then, without a word, she lifts the ring from the pad and puts it back on her finger.
17 D MARCELINO: Ma'am.
18 D ODETTE: I'm sorry. I changed my mind.
19 D MARCELINO: Keep the fifty.
20 D ODETTE: No.
21 A ¶ She lays the bills on the counter, squares them neatly, and walks out.
22 A The bell on the door rings once.

### SCENE s00701 | INT. WESTSIDE MINI-GOLF - WINDMILL HOLE - SUNSET
Detected names (may be incomplete or contain aliases): JAMAL, SKYE, MARCUS, DOLORES, PIM, ^MARCUS
1 A ¶ Fake turf, a creaking windmill, a sign: "HOLE 9 - PAR 3."
2 A Plastic gnomes line the rail.
3 A ¶ JAMAL, 16, in a faded band tee, leans on his putter.
4 A SKYE, 16, purple streaks in her hair, chews gum.
5 A MARCUS, 17, stands too close to her.
6 A DOLORES, 60s, the attendant in a visor, perches on a stool with a clipboard.
7 A PIM, 12, Skye's little brother, crouches to peer into the windmill.
8 D DOLORES: Last group. Hole nine closes in five.
9 D JAMAL: Skye, you're up.
10 D SKYE (together): I know.
11 D ^MARCUS: I know.
12 A ¶ They glance at each other.
13 A Marcus looks away first.
14 A Skye lines up the putt.
15 D PIM: Don't hit it too hard! The blade will smack it back!
16 D SKYE: Pim, back off.
17 A ¶ He takes two steps back.
18 A She putts.
19 A The ball rolls, enters the windmill, and clatters out the wrong side.
20 A ¶ Marcus laughs.
21 A Skye glares.
22 A Jamal hands her another ball without a word.
23 D DOLORES (writing): That's a six.

### SCENE s00647 | INT. NIGHT MARKET FISH STALL - 3 A.M.
Detected names (may be incomplete or contain aliases): INSPECTOR HONOR MBEKI, WEI-LING CHEN, KEN, DOYLE, ZSOFIA SZABO
1 A ¶ Crushed ice, tin tubs, and a hanging bulb swinging in the draft of the refrigeration fans.
2 A Silver bodies glisten in rows.
3 A A radio plays something thin and old.
4 A ¶ INSPECTOR HONOR MBEKI, forties, in a gray trench, stands under the bulb with her hands in her pockets.
5 A Across the counter, WEI-LING CHEN, sixties, a fishmonger in rubber boots, guts a snapper with a short, bright knife.
6 A Between them, on the ice, a plastic bag with something heavy and dark inside.
7 A Behind the stall, half-hidden by the tarp, KENDRICK "KEN" DOYLE, thirties, in a hoodie, watches and chews a thumbnail.
8 A In the far corner, ZSOFIA SZABO, seventies, who sells the next stall's lemons, sits on an upturned crate peeling one with her thumbnail, apparently asleep.
9 D MBEKI: Mrs. Chen. This bag was in your ice.
10 D WEI-LING: Everything's in my ice.
11 D MBEKI: Is it yours?
12 D WEI-LING (not looking up): I sell fish.
13 A ¶ The knife keeps moving.
14 A Ken shifts his weight.
15 A The tarp rustles.
16 A Mbeki's eyes flick to it, and back.
17 D MBEKI (to the stall): Anyone else want to claim it?
18 A ¶ Silence.
19 A Zsofia's lemon peel falls in a single long spiral.
20 D KEN (muttering): Not mine.
21 D MBEKI: I didn't ask you, Mr. Doyle.
22 D KEN: You said anyone.
23 D MBEKI: So I did.
24 A ¶ Wei-Ling lays the knife down, wipes her hands, and slides the bag toward Mbeki across the ice without breaking eye contact.
25 A Ken starts forward, stops.
26 A Zsofia opens one eye.
27 A Mbeki takes the bag, weighs it, and sets it down.
28 D MBEKI [CONT'D] (softly): Mrs. Chen. Open it.
29 D WEI-LING: Why?
30 D MBEKI: Because it's yours.
31 A ¶ Wei-Ling's face doesn't move.
32 A But her hand, reaching for the zipper, trembles.
33 A She opens it.
34 A Inside: a heavy iron key ring, dozens of keys, and a folded photograph of a young man.
35 A ¶ She looks at the photo for a long time.
36 D WEI-LING: That is my son.
37 A ¶ Ken drops his thumb from his teeth.
38 A Zsofia, quietly, sets down the lemon.

### SCENE s00915 | INT. TOLLIVER HOUSE - KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GLORIA MENDEZ-HART, RAYMOND TOLLIVER, CLAIRE TOLLIVER
1 A ¶ Sunlight on yellow linoleum.
2 A A clock shaped like a rooster.
3 A A pot of coffee on the stove, a stack of unopened mail.
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
26 A The clock ticks.
27 A A fly buzzes against the window.
28 A It is, in every way, an ordinary morning.
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
40 A ¶ The toast pops.
41 A Gloria sets a plate in front of her daughter, jam spread thick, butter melting.
42 A Claire stares at it.
43 D CLAIRE [CONT'D]: I need to tell you something.
44 D GLORIA: You always say that before you tell us something awful.
45 D CLAIRE: It isn't awful.
46 D RAYMOND (lowering the paper): Then say it.
47 D CLAIRE: I'm not going to Chicago.
48 A ¶ Silence.
49 A The rooster clock ticks.
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
83 A The coffee boils over behind her.
84 A Nobody moves to stop it.

### SCENE s00463 | INT. OPEN-PLAN OFFICE - "SYNERGY POD" - DAY
Detected names (may be incomplete or contain aliases): BARNABY CHOWDHURY-PELL, ODALYS FERREIRA
1 A ¶ A grey carpet-tiled field of identical desks under a ceiling of recessed fluorescent squares.
2 A A motivational poster of a rowing team hangs crooked on a pillar.
3 A Nothing in the room is on fire, which seems to be the best that can be said for it.
4 A ¶ BARNABY CHOWDHURY-PELL (40s, lanyard, forced cheer) stands at a whiteboard, marker raised.
5 A His direct report, ODALYS FERREIRA (30s, headphones around her neck), sits very still at the front of the room.
6 A ¶ He caps the marker.
7 A He uncaps it.
8 A He smiles at her.
9 D BARNABY: Great news. Nobody's getting fired.
10 D ODALYS (flat): Okay.
11 A ¶ He nods.
12 A She nods.
13 A He draws a circle on the whiteboard and does not explain it.
14 D BARNABY: Instead, we're pivoting to a flat org chart.
15 D ODALYS: Meaning?
16 D BARNABY: Meaning nobody has a manager.
17 A ¶ He caps the marker once more and sets it down with great care.
18 A She watches him do it.
19 D ODALYS: Including you.
20 D BARNABY: Especially me.
21 A ¶ He beams.
22 A She slowly removes her headphones, lays them on the desk, and stands.
23 A He does not stop smiling as she gathers her bag and walks out.
24 A The circle on the whiteboard stays unexplained.

### SCENE s01233 | INT. COURTHOUSE - EMPTY COURTROOM 4B - NIGHT
Detected names (may be incomplete or contain aliases): NADIRA SULTANOVA, ELIAS THORNQUIST
1 A ¶ A mid-size municipal court, the kind with fake wood panelling and a drop ceiling.
2 A Fluorescent tubes buzz.
3 A Half the lights are off, leaving the jury box in gloom and the bench in a pool of white.
4 A ¶ Chairs are stacked in the gallery.
5 A A cleaning cart stands abandoned by the door, its mop bucket still steaming.
6 A ¶ NADIRA SULTANOVA (40s, sharp tailoring gone limp after a fourteen-hour day, hair clipped up with a pen) stands in the well of the court with a legal pad.
7 A She faces the empty jury box.
8 A ¶ She is alone with the room.
9 A Or she thinks she is.
10 D NADIRA (to the jury box): Ladies and gentlemen, the state will tell you that my client is a liar.
11 A ¶ She waits.
12 A Silence.
13 A The jury box regards her.
14 D NADIRA [CONT'D] (to the jury box): They will tell you he lied about the ledger, about the date, about the signature.
15 A ¶ She turns a page.
16 D NADIRA [CONT'D] (muttering): Too long. Cut the signature.
17 A ¶ She crosses out a line with her pen.
18 A Behind her, a soft cough.
19 A ¶ She spins.
20 A In the back row, half-hidden by the stacked chairs, sits ELIAS THORNQUIST (70s, retired bailiff, grey cleaners' overalls, thick glasses held together with tape).
21 A A paperback lies on his knee.
22 A He is not reading it.
23 D NADIRA [CONT'D] (to Elias): How long have you been there?
24 D ELIAS: Since the second part.
25 D NADIRA: Which part is that?
26 D ELIAS: The part where you said "ledger" like it was a bad word.
27 A ¶ Nadira studies him.
28 A The tube above her flickers and settles.
29 D NADIRA: I'm rehearsing. The trial starts at nine.
30 D ELIAS: I know. I'll be sitting at the back.
31 D NADIRA: You're a bailiff?
32 D ELIAS: Was. Thirty-one years. Now I clean the brass.
33 D NADIRA (to the room, dry): Wonderful. A critic.
34 A ¶ Elias grins, a quick crooked flash.
35 D ELIAS: You want a critique?
36 D NADIRA: I want a jury.
37 D ELIAS: Not got one. Got me.
38 A ¶ She exhales through her nose.
39 A Takes a step toward him, the legal pad hanging at her side.
40 D NADIRA: Fine. Tell me.
41 D ELIAS: You open with the word "liar." Don't.
42 D NADIRA: It's the state's word.
43 D ELIAS: It's still your first word. They'll remember it.
44 A ¶ She stops.
45 A Absorbs this.
46 A Looks back at the jury box as if seeing it for the first time.
47 D NADIRA (muttering): He's right.
48 D ELIAS: I'm always right. It's the curse of the cleaning staff.
49 D NADIRA (to Elias): What would you open with?
50 D ELIAS: I'd open with the weather.
51 D NADIRA: The weather.
52 D ELIAS: Thirty-one years, I never saw a juror hear a word in the first minute. They're looking for their umbrellas. Give them something to hold. Say it rained that night.
53 D NADIRA: It did rain.
54 D ELIAS: Then say that.
55 A ¶ She turns to the empty jury box.
56 A Draws a breath.
57 A Straightens her spine.
58 D NADIRA (to the jury box): It rained on the night of the fourteenth.
59 A ¶ Elias nods once.
60 A Behind him the mop bucket gives a final hiss.
61 D NADIRA [CONT'D] (to the jury box): It rained, and a man went to a bank, and he signed his name.
62 D ELIAS: Better.
63 D NADIRA (to Elias): Shut up. I'm working.
64 A ¶ He mimes zipping his lips.
65 A She almost smiles.
66 A She goes on, quieter, rolling each phrase slowly, and he follows her with his eyes, lips moving a half-second behind her words like an old pew regular who has heard the liturgy a thousand times.
67 A ¶ She finishes.
68 A Silence.
69 A The tubes buzz.
70 D ELIAS (softly): Ladies and gentlemen.
71 D NADIRA (to the jury box): Ladies and gentlemen.
72 A ¶ She bows her head.
73 A The empty box does not applaud.
74 A Elias stands, tucks his paperback under his arm, picks up the mop, and begins on the floor by the door.
75 D NADIRA [CONT'D] (muttering): Weather.
76 T FADE OUT.

### SCENE s00323 | INT. STALLED CABLE CAR GONDOLA - DAY
Detected names (may be incomplete or contain aliases): RAVI, NKECHI, OLEG, PILAR
1 A ¶ RAVI, forties, a hiking guide, sits on the floor with his boots braced against the door.
2 A NKECHI, thirties, grips the rail.
3 A OLEG, seventies, holds a thermos in both hands.
4 A PILAR, twenties, films the white nothing outside on her phone.
5 A ¶ The gondola has been still for two hours.
6 A He licks his lips.
7 A She lowers the phone.
8 A They all look at the roof as it ticks in the cold.
9 D RAVI: Rescue said four hours. That was one hour ago, so three.
10 D NKECHI: It was two hours ago. So two.
11 D OLEG: It is whatever number keeps us calm. I choose three.
12 D PILAR: My battery is nineteen percent.
13 D RAVI: Then stop filming the clouds.
14 D PILAR: They're getting closer.
15 D NKECHI: Clouds don't get closer. We get lower.
16 D OLEG: Nobody said lower.
17 D RAVI: The cable sags in the cold. It is normal. Everybody breathe slowly, in through the nose.
18 D PILAR: I am breathing. I'm breathing so loudly.
19 D NKECHI: We are fine. Somebody pour the tea.
20 D OLEG: Last cup is mine. After that, we take turns.

### SCENE s00813 | INT. FAMILY LIVING ROOM - UPRIGHT PIANO - EVENING
Detected names (may be incomplete or contain aliases): ARNOLD TEMPLETON-WU, JOSEFINA
1 A ¶ A dim room.
2 A A lamp with a yellowed shade.
3 A A walnut upright against the wall, its front panel off, hammers exposed like a ribcage.
4 A ¶ ARNOLD TEMPLETON-WU, 60s, piano tuner, kneels beside it with a tuning lever.
5 A His daughter JOSEFINA, 30s, leans in the doorway, coat still on.
6 A ¶ She doesn't come in.
7 A ¶ He strikes a key.
8 A Listens.
9 A Adjusts a pin.
10 A Strikes again.
11 D JOSEFINA: You didn't call.
12 D ARNOLD: I wrote.
13 D JOSEFINA: A postcard isn't a call.
14 D ARNOLD: It's quicker.
15 D JOSEFINA: It took six weeks.
16 A ¶ He strikes a key.
17 A Doesn't answer.
18 D JOSEFINA [CONT'D]: Mom's piano.
19 D ARNOLD: She'd want it tuned.
20 D JOSEFINA: She'd want a lot of things.
21 A ¶ He pauses.
22 A Rests the lever on the strings.
23 D ARNOLD: Do you want to sit?
24 D JOSEFINA: I'm fine.
25 D ARNOLD: There's tea.
26 D JOSEFINA: I'm fine.
27 A ¶ He nods.
28 A Resumes.
29 A A key.
30 A A pin.
31 A A key.
32 A ¶ She finally crosses the room.
33 A Drops her bag.
34 A Perches on the arm of the sofa.
35 D JOSEFINA [CONT'D]: How long have you been working on it?
36 D ARNOLD: Three days.
37 D JOSEFINA: That's a lot for a tuning.
38 D ARNOLD: It's an old instrument.
39 D JOSEFINA: Dad.
40 D ARNOLD: Hm.
41 D JOSEFINA: You don't have to be here alone.
42 D ARNOLD: I'm not alone. I've got the piano.
43 D JOSEFINA: That's the saddest thing you've said all year.
44 A ¶ He strikes a key.
45 A A beat.
46 A Another.
47 D ARNOLD: This one's flat.
48 D JOSEFINA: They all are.
49 D ARNOLD: No. Just this one. Listen.
50 A ¶ He plays an A. Then the A above it.
51 A They clash faintly.
52 A Josefina tilts her head.
53 D JOSEFINA: I can hear it.
54 D ARNOLD: That's your mother's ear.
55 D JOSEFINA: She told me once she could hear when a room was out of tune.
56 D ARNOLD: She could.
57 D JOSEFINA: What did the room sound like when she left?
58 A ¶ He stops.
59 A His hand hangs above the keys.
60 D ARNOLD: Like this.
61 A ¶ He plays the flat A. It hangs between them, wavering.
62 D JOSEFINA: Can you fix it?
63 D ARNOLD: I've tried.
64 D JOSEFINA: Let me.
65 D ARNOLD: You've never tuned.
66 D JOSEFINA: I've listened my whole life.
67 A ¶ He studies her.
68 A Hands her the lever.
69 A She kneels beside him.
70 A Presses the key.
71 A Turns the pin a hair, then another, her head cocked, her eyes closed.
72 A ¶ The A rises.
73 A Settles.
74 A Becomes true.
75 A ¶ She opens her eyes.
76 A He is watching her, not the piano.
77 D ARNOLD [CONT'D]: That's it.
78 D JOSEFINA: That's it?
79 D ARNOLD: That's the note.
80 A ¶ She plays it again.
81 A A clean, level tone.
82 A The room seems to lean toward it.
83 D JOSEFINA (quiet): I should have come sooner.
84 D ARNOLD: You came.
85 A ¶ She sets down the lever.
86 A He puts a hand on the piano's side, the way you might touch a shoulder.
87 D ARNOLD [CONT'D]: Want tea now?
88 D JOSEFINA: Yes.
89 A ¶ He rises, knees cracking.
90 A Goes to the kitchen.
91 A She stays at the piano and plays, one finger at a time, the first line of a lullaby.
