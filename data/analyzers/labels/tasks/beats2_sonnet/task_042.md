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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00042.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01707 | INT. CLOCKMAKER'S SHOP - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LOUISA HARDCASTLE, BARNEY OKAFOR-LISTER
1 A ¶ Hundreds of clocks, all ticking, none in agreement.
2 A Brass gears under glass domes.
3 A Pendulums swing in long cases along the walls.
4 A A single green-shaded lamp lights a workbench strewn with tiny screwdrivers.
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
24 A A thin dusting of gold powder.
25 A She sniffs it.
26 D LOUISA [CONT'D]: Gold leaf.
27 D BARNEY: It would be. For the dial.
28 D LOUISA: It's on the pendulum, not the dial.
29 A ¶ He doesn't answer.
30 A A hundred clocks tick on.
31 A A cuckoo bursts from a case in the dark and sings once, shrilly, and withdraws.
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
44 A The clocks strike the half hour, all at different times.

### SCENE s00863 | INT. ABANDONED OBSERVATORY, MAIN DOME - NIGHT
Detected names (may be incomplete or contain aliases): CASPIAN ROTH, ODETTE LACROIX
1 A ¶ A great copper dome, its slit open to the stars, hangs overhead like the underside of a bell.
2 A A brass telescope as long as a bus rests on a cracked iron mount.
3 A Dead leaves cover the floor.
4 A A single lantern burns on a crate.
5 A ¶ CASPIAN ROTH, fifties, in a long gray coat, sits on an overturned bucket with a laptop open on his knees.
6 A He types, stops, types again.
7 A His face glows pale blue.
8 A Beside him, a satellite phone lies on the crate, its screen dark.
9 A ¶ He lifts his head.
10 A The dome creaks in a wind that shouldn't be there.
11 D CASPIAN (to himself): Come on. Come on.
12 A ¶ He types.
13 A The telescope's great eye twitches an inch to the left, and a gear somewhere shrieks.
14 A He freezes.
15 A The dome is still.
16 D CASPIAN [CONT'D]: That's not me.
17 A ¶ He closes the laptop slowly and reaches for the phone.
18 A As he does, a shape detaches itself from the shadow beneath the telescope and walks forward into the light: ODETTE LACROIX, forties, in a black raincoat, bare hands, no bag.
19 A She is soaked to the skin.
20 A A thin line of water drips from her hem onto the dead leaves with every step.
21 D ODETTE: Don't touch the phone.
22 D CASPIAN: How long have you been here?
23 D ODETTE: Since before you.
24 D CASPIAN: That's impossible. I locked the door.
25 D ODETTE: Which door?
26 A ¶ He looks at the entrance, a heavy oak slab bolted from inside.
27 A Then at the slit overhead.
28 A Then at her wet coat.
29 D CASPIAN: Who sent you?
30 D ODETTE: Nobody sends me. I'm the one who stays.
31 A ¶ She crosses to the crate and looks down at the dead phone, then at the laptop, then at him.
32 A Her eyes are tired, not unkind.
33 D ODETTE [CONT'D]: You came here to upload something.
34 D CASPIAN: Data. Just data.
35 D ODETTE: Data about the star?
36 D CASPIAN: How do you
37 D ODETTE: I'm the last person who could read it.
38 A ¶ A long silence.
39 A A gust of cold air sweeps through the dome.
40 A The lantern gutters, steadies.
41 D CASPIAN (low, to the room): Is anyone else here?
42 D ODETTE: Only the telescope.
43 D CASPIAN: It moved.
44 D ODETTE: It does that when someone looks.
45 A ¶ He sets the laptop on the crate and stands.
46 A She doesn't step back.
47 A Their shadows overlap on the leaf-strewn floor.
48 D CASPIAN: Miss, I don't know what
49 D ODETTE: Caspian. Sit down. You'll want to hear this sitting.
50 A ¶ He stays standing.
51 A Then, slowly, as if all his joints have turned to paper, he lowers himself back onto the bucket.
52 A She picks up the lantern and holds it between them, so that each of them is lit and neither is.
53 D ODETTE [CONT'D]: Tell me what you saw.

### SCENE s00888 | EXT. CORPORATE ROOFTOP - APIARY - MORNING
Detected names (may be incomplete or contain aliases): MARGOT FENWICK, OSKAR LINDGREN, PETRA IONESCU, NEW HIRE, KWAME
1 A ¶ Above the thirty-first floor of Halcyon Dynamics, a sea of glass towers glitters in the sun.
2 A Between the air-conditioning units and a ruined yoga mat, someone has set up six white beehives in a neat row.
3 A Bees drift in lazy loops, indifferent to the quarterly earnings.
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
30 A A single bee lands on his shoulder.
31 A He freezes.
32 D NEW HIRE (whispering): Is it going to--
33 D OSKAR: It's just curious. Breathe out slowly.
34 A ¶ He does.
35 A The bee lifts off.
36 A Margot makes a note on the clipboard.
37 D MARGOT: You handle pressure well. I'll mention that in your file.
38 D NEW HIRE: I haven't actually got a file yet.
39 D MARGOT: Everyone has a file.
40 D PETRA (dry): Everyone has two.
41 A ¶ Margot ignores her.
42 A She approaches the nearest hive and lifts the lid with a flourish.
43 A A hum rises, soft and grave.
44 D MARGOT: This is the queen's chamber. You'll note the order. The discipline. The harmony of purpose. I like to think of our fifth-floor sales team in precisely this way.
45 D OSKAR: The sales team is not a queen.
46 D MARGOT: The sales team is a metaphor, Oskar.
47 D OSKAR: The sales team is a wasp's nest.
48 A ¶ Petra snorts.
49 A Margot closes the lid a little harder than she means to.
50 D NEW HIRE: Can I ask something?
51 D MARGOT: Please.
52 D NEW HIRE: Why bees?
53 A ¶ A beat.
54 A Margot looks at Oskar.
55 A Oskar looks at the sky.
56 A Petra studies her boots.
57 D OSKAR: Margot's husband kept bees.
58 D MARGOT: Oskar.
59 D OSKAR: He died in March. She had the hives lifted here from the farm.
60 D MARGOT (very still): That is private.
61 D OSKAR: It's rooftop. Nothing's private on a rooftop.
62 A ¶ For a moment, nobody speaks.
63 A The wind lifts the edge of Margot's veil.
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
79 A The door sighs shut.
80 A Kwame lifts the veil from his eyes and looks at Oskar, who has already turned back to the hives.
81 D KWAME: Is she always like that?
82 D OSKAR: No. Sometimes she's worse.
83 A ¶ He hands Kwame the smoker.
84 A It's warm and heavy, and a thin white thread curls from its spout.
85 D OSKAR [CONT'D]: Squeeze the bellows. Gently. Like you're asking a question.
86 A ¶ Kwame squeezes.
87 A The smoke drifts across the hive.
88 A The humming softens, lowers, and one by one the bees settle into the quiet.

### SCENE s01836_0 | EXT. TELEGRAPH OFFICE - HIGH DESERT TOWN - DAY
Detected names (may be incomplete or contain aliases): 
1 A ¶ A single-street town of sun-bleached boards.
2 A A telegraph pole leans over the roof of a squat office.
3 A Heat shimmers above the road.
4 A The hitching rail holds one horse and nothing else.

### SCENE s01168 | INT. COMMUNITY THEATRE - GREEN ROOM - NIGHT
Detected names (may be incomplete or contain aliases): FRANCO, DOT, BIFF, LUPE, ROMY
1 A ¶ A windowless closet crammed with costumes, a cracked mirror ringed by bulbs, a coffee maker leaking onto a pile of scripts.
2 A ¶ FRANCO (50s, director, silk scarf, three pairs of glasses on his head) paces in front of the mirror reading cue cards while DOT (60s, stage manager, headset, cardigan with a pen in every pocket) mends a lace collar and bites off a thread, BIFF (30s, lead actor, half-dressed in a pirate costume, one boot on) hops across the room searching for the other boot, LUPE (20s, props girl, glitter on her cheeks) sorts a bucket of fake swords by color, and ROMY (teen, ingenue, sequin bodice) crouches in the corner reciting her lines to a stuffed parrot.
3 D FRANCO: Five minutes to curtain!
4 D DOT: Franco, it's thirty.
5 D FRANCO: Then thirty minutes of panic! Where's my pirate?
6 D BIFF: I'm right here! I can't find my boot!
7 D LUPE: It's under the coffee machine.
8 D BIFF: Why is it under the coffee machine?
9 D ROMY (to the parrot): "Captain, I beg you, do not leave me."
10 D DOT: Romy, honey, say it to the person.
11 D ROMY: The parrot's more supportive.

### SCENE s00682 | INT. LORNE HOUSE - LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTIN LORNE, BEATRIX, CEDRIC MOWBRAY, HESTER QUAYLE
1 A ¶ A fire dying in a marble hearth.
2 A Four chairs in a half-circle.
3 A A decanter, four glasses, a ledger left open on the reading stand.
4 A ¶ AUGUSTIN LORNE, 60s, shrunken in a velvet smoking jacket, sits nearest the fire.
5 A His niece BEATRIX, 30s, stands behind his chair.
6 A CEDRIC MOWBRAY, 40s, the family solicitor, occupies a leather wingback.
7 A HESTER QUAYLE, 50s, the housekeeper, hovers at the door with her hands folded.
8 A ¶ Beatrix pours for the men and does not pour for herself.
9 D AUGUSTIN: Cedric, the clause.
10 D CEDRIC: The clause is clear.
11 D BEATRIX: Clear to whom?
12 D CEDRIC: To anyone who reads.
13 D HESTER: I read it twice.
14 D AUGUSTIN: Of course you did, Hester.
15 D BEATRIX: She was in the room when you signed.
16 D HESTER: I was in the hall.
17 D BEATRIX: Then you heard it through the door.
18 D HESTER: The door was open.
19 D CEDRIC: Doors are often open in this house.
20 D AUGUSTIN: Not the study door.
21 D BEATRIX: No. The study door is always locked.
22 D HESTER: It was open on Thursday.
23 D CEDRIC: Thursday?
24 D HESTER: When the ledger went missing.
25 D AUGUSTIN (slowly): The ledger is here.
26 D BEATRIX: Because someone put it back.
27 D CEDRIC: Or because it was never gone.
28 D HESTER: Mr. Augustin, I told you I saw it on Thursday. Pages torn. Four of them.
29 D AUGUSTIN: Four.
30 D BEATRIX: There are four of us.
31 A ¶ A silence.
32 A The fire pops.
33 D CEDRIC: Surely you are not suggesting --
34 D BEATRIX: I'm suggesting nothing. I'm counting.
35 D AUGUSTIN: Hester. The pages. Where?
36 D HESTER: In the second drawer of the hall cabinet. Under the umbrellas.
37 D CEDRIC: You looked?
38 D HESTER: I clean.
39 D AUGUSTIN: Beatrix, fetch them.
40 A ¶ Beatrix does not move.
41 A Cedric slowly sets his glass on the table, Hester's eyes find the carpet, and Augustin lifts the poker from its stand and holds it across his knees.
42 D AUGUSTIN [CONT'D]: Whoever fetches them first.

### SCENE s01170 | INT. DEFUNCT PLANETARIUM - DOME CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): INES MARCHETTI, TOBY WREN, KOFI ADEYEMI-BELL, RADIO, NIGHT GUARD
1 A ¶ Dust hangs in a single flashlight beam.
2 A A cracked star projector squats at the center like a dead insect.
3 A ¶ INES MARCHETTI (30s, lean, gloved) kneels at the projector's base, a drill whining in her hands.
4 A TOBY WREN (20s, nervous, oversized hoodie) holds the light and keeps glancing at the exit.
5 A KOFI ADEYEMI-BELL (50s, broad, patient) feeds cable from a spool through a panel in the floor.
6 D INES: Hold it still.
7 D TOBY: I am holding it still.
8 D INES: You're holding it like a wet cat.
9 A ¶ The drill bites through.
10 A A brass plate drops and rings across the floor.
11 A All three freeze.
12 A ¶ A RADIO crackles on Kofi's belt.
13 D NIGHT GUARD [V.O.] (over radio, bored): Dome's quiet. Any of you hear that?
14 A ¶ Kofi thumbs the key slowly.
15 D KOFI (into radio, flat): Pipes. Same as every night.
16 D NIGHT GUARD [V.O.]: Copy. Pipes.
17 A ¶ Kofi releases the key.
18 A Toby exhales.
19 A Ines does not look up.
20 D INES: Cable.
21 A ¶ Kofi passes the cable.
22 A Ines threads it into the hole, seats the connector, and the projector's casing opens with a sigh.
23 A Inside, wrapped in velvet, a silver sphere the size of a grapefruit.
24 D TOBY: That's it?
25 D INES: That's it.
26 A ¶ Toby reaches.
27 A Ines slaps his wrist.
28 A Boots echo in the corridor outside.
29 A The three of them kill the light and drop flat behind the projector.
30 A Kofi pulls the velvet over the sphere with one hand and presses Toby's head down with the other.
31 D NIGHT GUARD [V.O.] (over radio, closer): Dome, this is Marsh. I'm at the door.
32 A ¶ The door handle turns.
33 A Ines slides a blade from her sleeve.
34 A Toby grabs Kofi's sleeve.
35 A Kofi quietly lifts a fire extinguisher off the floor, and the three of them hold their breath as the door swings inward half a foot, a wedge of hallway light cutting across the carpet and stopping inches from Ines's boot.
36 D NIGHT GUARD [V.O.] (muttering): Pipes.
37 A ¶ The door closes.
38 A Footsteps fade.
39 D KOFI (whisper): Ninety seconds. Then we move.
40 D INES: Sixty.
41 A ¶ They scatter toward the loading dock, the sphere gone, the dome black.

### SCENE s00242 | EXT. LIFEBOAT ADRIFT, SOUTHERN OCEAN - NOON
Detected names (may be incomplete or contain aliases): CAPTAIN ISOLDE VANDERHOEK-MWAMBA, ENSIGN REMY LAFAYETTE-OSUNDE, MAGS, ODELL-PRZYBYLSKI
1 A ¶ A grey swell.
2 A A hull the colour of old teeth.
3 A The sun a dull coin behind cloud.
4 A ¶ Three figures crowd the boat.
5 A CAPTAIN ISOLDE VANDERHOEK-MWAMBA (50s, cracked lips, officer's cap tied under her chin) sits at the tiller, jaw tight.
6 A ¶ Across from her, ENSIGN REMY LAFAYETTE-OSUNDE (20s, one arm in a makeshift sling, blistered nose) holds a half-empty water tin in his good hand.
7 A ¶ In the bow, the ship's cook, MARGUERITE "MAGS" ODELL-PRZYBYLSKI (60s, apron still on, salt in her eyebrows), stares at the horizon with her chin on her knees.
8 D REMY: Captain, the ration.
9 D ISOLDE: Two sips. Each.
10 D REMY: Last night it was three.
11 D ISOLDE: Last night I thought we'd be rescued by today.
12 D MAGS (not turning): That's what I thought yesterday.
13 D REMY: Mags, don't.
14 D MAGS: I'm only saying.
15 D ISOLDE: Pass the tin.
16 A ¶ Remy hands it over.
17 A She takes a sip, wipes her mouth, passes it on.
18 A Mags takes hers without looking.
19 D MAGS: Captain, how long do you give us?
20 D ISOLDE: I don't give things.
21 D MAGS: How long do you think?
22 D ISOLDE: Three days. Four if the rain comes.
23 D REMY: And if it doesn't?
24 D ISOLDE: Then we'll know.
25 A ¶ Silence.
26 A The swell lifts them, lowers them.
27 D MAGS: There.
28 D REMY: Where?
29 D MAGS: There! A light!
30 A ¶ Remy scrambles up, rocking the boat.
31 A Isolde grabs the gunwale.
32 A A speck of white glints on the horizon.
33 D REMY: Ship. It's a ship.
34 D ISOLDE: It's a glare.
35 D REMY: It's moving!
36 D MAGS: It's moving!
37 D ISOLDE (quietly): It's a gull.
38 A ¶ The speck rises, banks, and becomes a seabird, wheeling above the waves.
39 A It cries once and flies away from them.
40 A ¶ Remy sinks back.
41 A Mags laughs, a cracked little sound.
42 A Then she cries, then she laughs again.
43 D ISOLDE: Mags.
44 D MAGS: I know.
45 D ISOLDE: Pass the tin.
46 D MAGS: It's empty.
47 D ISOLDE: Pass it anyway.

### SCENE s01641 | INT. ROOFTOP GREENHOUSE, GRAND HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): SOLANO, HESTER VANCE, KIERAN, BAPTISTE, STRANGER, CALDER
1 A ¶ Glass walls.
2 A Orchids in hanging baskets.
3 A Rain tapping overhead.
4 A A city smeared into color below.
5 A ¶ DET. SOLANO, 40s, trench coat, sits on a wrought-iron bench, hands in his pockets.
6 A HESTER VANCE, 50s, the hotel manager, waters ferns with a copper can.
7 A KIERAN, 20s, the night porter, hovers near the door.
8 A MR. BAPTISTE, 60s, an elderly guest in a silk robe, studies an orchid.
9 A ¶ A STRANGER, 30s, wet hair, black jacket, steps in.
10 A Nods to no one.
11 A Stands apart.
12 D SOLANO: Evening.
13 D STRANGER: Evening.
14 D SOLANO: You're not a guest.
15 D STRANGER: I'm waiting for someone.
16 D SOLANO: Who?
17 D STRANGER: A friend.
18 D HESTER (not looking up): The greenhouse closes at eleven.
19 D STRANGER: It's ten-forty.
20 D HESTER: Then you have twenty minutes.
21 D KIERAN: Sir, can I take your coat?
22 D STRANGER: No.
23 D SOLANO: What's your friend's name?
24 D STRANGER: You wouldn't know him.
25 D SOLANO: Try me.
26 D STRANGER: Calder.
27 D BAPTISTE (without turning): Calder is dead.
28 D STRANGER: Is he?
29 D BAPTISTE: I buried him in March.
30 D STRANGER: Then who's standing here?
31 A ¶ Silence.
32 A The rain.
33 A A drop falls from a leaf onto the tile.
34 D CALDER (the Stranger, now): Mr. Baptiste. It's been a long time.
35 D BAPTISTE: Not long enough.
36 D CALDER: I came to return something.
37 D SOLANO (low): Hester. Clear the room.
38 D HESTER: Detective?
39 D SOLANO: Now.
40 D KIERAN: Sir, I --
41 D SOLANO: Out, son.
42 A ¶ Kieran backs out of the greenhouse.
43 A Hester sets the can down, walks to the door.
44 A Locks it from the outside.
45 D CALDER: Don't be dramatic.
46 D SOLANO: You're supposed to be in a box.
47 D CALDER: So is he.
48 D BAPTISTE (turning at last): What did you bring me?
49 D CALDER: Your watch.
50 A ¶ He pulls it from his jacket.
51 A Gold.
52 A Heavy.
53 A Holds it up by the chain.
54 D CALDER [CONT'D]: You gave it to me the night you shot me.
55 D BAPTISTE: I gave it to you as a kindness.
56 D CALDER: It stopped at eleven.
57 D BAPTISTE: It always did.
58 A ¶ Solano rises.
59 A His hand is out of his pocket now.
60 D SOLANO: Mr. Calder, put the watch on the bench.
61 D CALDER: It's not for the bench.
62 D SOLANO: Put it down.
63 D CALDER: Detective, I've waited eight months. I can wait one more minute.
64 A ¶ The watch swings.
65 A Tick.
66 A Tick.
67 A Tick.
68 A ¶ It stops.
69 D CALDER [CONT'D]: Eleven.

### SCENE s01324 | EXT. RIVER FERRY - MIDDAY
Detected names (may be incomplete or contain aliases): AMOS QUILL, DEL, RAYE
1 A ¶ A flat timber barge on a rope line, crossing slow brown water.
2 A Cottonwoods on both banks.
3 A One mule, asleep on its feet.
4 A Heat shimmer on the planks.
5 A ¶ AMOS QUILL, 50s, scarecrow-thin, sleeves rolled, hauls the guide rope hand over hand.
6 A Gray stubble.
7 A A stove-in hat.
8 A A dead cigar he never lights.
9 A ¶ DELPHINE "DEL" RAYE, 30s, rides the rail with a saddlebag across her knees.
10 A Red bandana.
11 A Boots too fine for the river.
12 A A rifle wrapped in canvas by her hip.
13 D AMOS: Fare's a nickel.
14 D DEL: Posted says two cents.
15 D AMOS: Posted's old.
16 A ¶ She flips a nickel.
17 A He catches it without looking, drops it in his vest, keeps pulling.
18 D DEL: Many cross today?
19 D AMOS: Some.
20 D DEL: Any stop and ask for a man?
21 D AMOS: Some.
22 A ¶ The barge drifts a foot downstream.
23 A The rope groans.
24 A Amos sets his feet, hauls, and Del gets up, takes the rope behind him, and the two of them pull together, hand over hand, until the barge steadies and the mule opens one eye and shuts it.
25 D DEL [CONT'D]: That's a wide river.
26 D AMOS: Gets wider after a rain.
27 D DEL: Ever sunk one?
28 D AMOS: Once.
29 A ¶ Something thumps against the hull under the planks.
30 A A log, probably.
31 A Amos and Del freeze, he with the rope in both fists, she with a hand on the canvas.
32 A The thump rolls past.
33 A The barge lurches, and both lean the other way, stagger, catch the rail, and laugh without sound.
34 D DEL [CONT'D]: Log.
35 D AMOS: Log.
36 A ¶ She hands the rope back.
37 A He takes it.
38 A Bank shadows creep up the planks.
39 D DEL: I'll pay another nickel to get across faster.
40 D AMOS: River don't take bribes.

### SCENE s01785 | EXT. MONASTERY BELL TOWER - DAWN (1944)
Detected names (may be incomplete or contain aliases): SERGEANT THADDEUS KRUGER, CORPORAL NIKOLAI BOGDANOV, MONK, BROTHER ANSELMO
1 A ¶ A stone belfry open to the sky, half the roof gone.
2 A Below, the valley is smoke and orchard.
3 A A cracked bell hangs silent.
4 A ¶ SERGEANT THADDEUS KRUGER, thirties, lies prone on the floor with a rifle.
5 A CORPORAL NIKOLAI BOGDANOV, twenties, crouches by the stair with a radio.
6 A A MONK, BROTHER ANSELMO, seventies, sits against the wall with rosary beads running through his fingers.
7 D KRUGER: He's in the second window, third floor of the mill.
8 D BOGDANOV: Who is?
9 D KRUGER: The man who has been shooting at us since four.
10 D BROTHER ANSELMO: He is a boy. I saw him yesterday, bringing water to the cows.
11 D KRUGER: Then it's a boy with a rifle, Father.
12 D BROTHER ANSELMO: I am not your father. I am only an old man who rings the bell.
13 D BOGDANOV: Sir, command says hold until eight.
14 D KRUGER: Command is thirty miles from here and has never smelled this smoke.
15 D BOGDANOV: They've asked us to confirm positions.
16 D KRUGER: Tell them we're in a bell tower on a hill, and we're not going anywhere.
17 D BROTHER ANSELMO: Will you let me ring it?
18 D KRUGER: No.
19 D BROTHER ANSELMO: It would tell them we are here.
20 D KRUGER: They know we are here.
21 D BROTHER ANSELMO: It would tell them we are still alive.
22 A ¶ Kruger lowers the rifle and looks at him.
23 A He studies him for a long moment.
24 A In the valley, a rooster crows.
25 D KRUGER: Bogdanov.
26 D BOGDANOV: Sergeant?
27 D KRUGER: Cover the second window.
28 D BOGDANOV: Yes, sir.
29 D KRUGER: Father. One ring.
30 D BROTHER ANSELMO: One ring.

### SCENE s01624 | INT. FAIRLANES BOWLING ALLEY - PINSETTER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SHORTY ALVARADO, TANYA BOSCO
1 A ¶ Behind the lanes.
2 A A long steel cavern of dead machines, each one frozen mid-cycle.
3 A Dust.
4 A The smell of oil and old wax.
5 A ¶ SHORTY ALVARADO, 50s, wide, slow, in a faded satin bowling jacket, sits on an upturned crate.
6 A A duffel bag between his boots.
7 A ¶ Footsteps on the metal catwalk.
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
22 A ¶ A long beat.
23 A Somewhere, a pipe drips.
24 A Tanya crosses.
25 A Crouches.
26 A Unzips the duffel.
27 A ¶ Stacks of bills, rubber-banded.
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
43 A The crate scrapes.
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
72 A The flashlight clatters, spinning light across the machines.
73 A ¶ He goes for her.
74 A She meets him.
75 A They crash into a pinsetter.
76 A A hundred pins rattle in their tubes like startled bones.
77 D SHORTY [CONT'D] (strangled): You think Dominic's your friend?
78 D TANYA: I think he's my boss!
79 D SHORTY: He's a liar!
80 D TANYA: So are you!
81 A ¶ She twists, drives an elbow into his ribs.
82 A He folds.
83 A She pins him against the machine, forearm across his throat.
84 A ¶ Pins spill.
85 A They roll across the floor.
86 A One strikes the dead flashlight and stops.
87 D TANYA [CONT'D]: Nine thousand. Where.
88 A ¶ Shorty's eyes flick to the next machine.
89 A To a panel, slightly ajar.
90 A ¶ She sees it.
91 A Lets him go.
92 A He slides down the metal, wheezing.
93 D SHORTY: You were always sharp. Your mother was too.
94 A ¶ Tanya opens the panel.
95 A Inside: a gym bag.
96 A She unzips it.
97 A Money.
98 A Lots of it.
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
112 A ¶ Far off, a car door.
113 A Another.
114 A Heavy steps on the lane boards beyond the wall.
115 A ¶ Tanya drops the bag.
116 D TANYA: You rat.
117 D SHORTY (softly): Short on patience, remember?
118 A ¶ The door to the pinsetter room crashes open.

### SCENE s00995 | INT. STRIKE-N-SPARE BOWLING ALLEY - THANKSGIVING EVE
Detected names (may be incomplete or contain aliases): GRANDPA WALTER, DOROTHEA, HAL, LINUS, SUNNY, IMOGEN
1 A ¶ Lane 7 has been turned into a dinner table.
2 A Paper turkeys.
3 A Folding chairs.
4 A Ball returns hold gravy boats.
5 A A neon pin flashes overhead.
6 A ¶ GRANDPA WALTER (80s, bowling shirt, thick glasses) sits at the head, carving.
7 A DOROTHEA (50s, pearls, tight smile) sets plates.
8 A HAL (50s, gravy-stained tie) fiddles with a ball polisher.
9 A LINUS (teen, headphones) slouches.
10 A SUNNY (8, pigtails, tiny bowling shoes) crawls under the table.
11 A IMOGEN (30s, tote bag, tired eyes) arrives late, pulling off a scarf.
12 D DOROTHEA: Imogen, you said six.
13 D IMOGEN: It's six-oh-four.
14 D DOROTHEA: Grandpa has been carving for forty minutes.
15 D GRANDPA WALTER: I like carving.
16 D HAL: That's not what you said about the turkey last year.
17 D GRANDPA WALTER: Last year the turkey was dry.
18 D DOROTHEA: It was not dry.
19 D HAL: It was a little dry, Dot.
20 D DOROTHEA: Hal!
21 D LINUS: Can I eat in the car?
22 D DOROTHEA: No.
23 D LINUS: Can I eat on the lane?
24 D HAL: It's literally on the lane, Linus.
25 D SUNNY (from under the table): Aunt Imogen, you have a hole in your sock.
26 D IMOGEN: Thank you, Sunny.
27 D DOROTHEA: Can we all sit, please?
28 D GRANDPA WALTER: Sit. Eat. Say grace.
29 D HAL: Who's saying grace?
30 D DOROTHEA: Imogen, you say it.
31 D IMOGEN: Me?
32 D DOROTHEA: You're the one who left.
33 A ¶ Silence.
34 A The pin on the ceiling flashes.
35 A Linus pulls off his headphones.
36 D IMOGEN: That was unkind, Dorothea.
37 D DOROTHEA: It was accurate.
38 D HAL: Dot, let's not.
39 D DOROTHEA: Nobody asked you, Harold.
40 D GRANDPA WALTER: Girls, girls.
41 D IMOGEN: We're not girls, Grandpa.
42 D DOROTHEA: Speak for yourself.
43 D SUNNY: Can I have pie?
44 D LINUS: Nobody has pie, Sunny. We're in a war.
45 A ¶ Dorothea slams the gravy boat on the table.
46 A Gravy leaps.
47 A It lands on Hal's tie.
48 A He stares at it.
49 D HAL: Well, that's the last straw.
50 A ¶ He stands.
51 A Flings a ball from the return.
52 A It rolls down Lane 7, scattering the cranberry and three chairs.
53 A Strike.
54 A ¶ Everyone stares at the pins.
55 A Then at Grandpa Walter.
56 A He sets down the knife.
57 D GRANDPA WALTER: Nice.
58 A ¶ Linus snickers.
59 A Sunny giggles.
60 A Imogen covers her mouth.
61 A Dorothea tries to stay stern and fails.
62 A Hal bows.

### SCENE s01562 | INT. NEONATAL ICU - NURSES' STATION - 3 A.M.
Detected names (may be incomplete or contain aliases): SAOIRSE ACHEBE-LINDGREN, NURSE PERPETUA OKONKWO-HART, ELIAS FAIRWEATHER-NNAMDI, HOLLIS BRZEZINSKI-OSEI
1 A ¶ Low lights.
2 A Monitors blink like fireflies.
3 A Incubators glow along the far wall.
4 A ¶ DR. SAOIRSE ACHEBE-LINDGREN, 40s, scrubs rumpled, drinks cold tea.
5 A NURSE PERPETUA OKONKWO-HART, 50s, charts at the desk.
6 A RESIDENT DR. ELIAS FAIRWEATHER-NNAMDI, 20s, rubs his eyes.
7 A And the father, HOLLIS BRZEZINSKI-OSEI, 30s, in a jacket over pyjamas, stands with a paper cup he has not touched.
8 D SAOIRSE: Mr. Brzezinski-Osei, sit down.
9 D HOLLIS: I'd rather stand.
10 D SAOIRSE: Please.
11 D HOLLIS: Is she worse?
12 D SAOIRSE: She's the same.
13 D HOLLIS: The same.
14 D PERPETUA: Her numbers are stable.
15 D ELIAS: Her oxygen sats are ninety-four.
16 D HOLLIS: Is that good?
17 D SAOIRSE: It's better than yesterday.
18 D HOLLIS: But it's not good.
19 D ELIAS: It's within range.
20 D HOLLIS: Whose range?
21 D SAOIRSE: Ours.
22 D PERPETUA: Mr. Brzezinski-Osei, she is fighting.
23 D HOLLIS: She weighs less than a bag of sugar.
24 D SAOIRSE: She weighs one kilo, four hundred.
25 D HOLLIS: Everyone keeps telling me the number.
26 D ELIAS: It's what we have.
27 D HOLLIS: I have a name for her.
28 D SAOIRSE: We know. Matilda.
29 D HOLLIS: She doesn't know it.
30 D PERPETUA: She does. I say it every shift.
31 D HOLLIS: You say it?
32 D PERPETUA: Every shift, Mr. Brzezinski-Osei.
33 A ¶ Hollis puts down the cup.
34 A Presses his palms to his eyes.
35 D HOLLIS: Can I hold her?
36 D SAOIRSE: Not tonight.
37 D HOLLIS: When?
38 D SAOIRSE: When her numbers hold for twenty-four hours.
39 D HOLLIS: And if they don't?
40 D ELIAS: They will.
41 D HOLLIS: You don't know that.
42 D ELIAS: No. I don't.
43 A ¶ Silence.
44 A A monitor chirps.
45 A Perpetua looks up, checks the bay, nods.
46 D PERPETUA: She's fine. A feeding pump.
47 A ¶ Hollis laughs, shaky.
48 A Sits.
49 A Finally.
50 D HOLLIS: Tell me about the pump.
51 D SAOIRSE: It's a pump.
52 D HOLLIS: Tell me anyway.
53 A ¶ Saoirse sits across from him.
54 A Takes his hand.
55 A Begins to explain.

### SCENE s01735 | INT. BAIT SHOP - DAWN
Detected names (may be incomplete or contain aliases): LENNOX BARRETT, MAMA PEARL
1 A ¶ Minnow tanks bubble in the half-dark.
2 A A radio on the counter plays low static.
3 A The smell of brine, worms, and old coffee.
4 A Pale light creeps through a salt-fogged window.
5 A ¶ LENNOX BARRETT (50s, the owner, flannel shirt, a thick scar through one eyebrow) stands behind the counter with a landline receiver clamped between ear and shoulder.
6 A His other hand rests flat on a lockbox.
7 A He has not slept.
8 A The clock on the wall says 5:42.
9 D MAMA PEARL [V.O.] (over phone): You promised me, Lennox. You promised you'd be home before the sun came up.
10 D LENNOX: I know I did, Mama.
11 D MAMA PEARL [V.O.] (over phone): I made grits. I put the pan back on the stove twice. Your sister's been here since four. She says there's a man on the dock.
12 D LENNOX: There's always a man on the dock.
13 D MAMA PEARL [V.O.] (over phone): Not like this one. She says he's been standing there since midnight with his hat in his hands.
14 A ¶ Lennox looks out the window.
15 A The dock is empty except for a gull.
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
27 A The sun lifts the edge of the water.

### SCENE s00845 | INT. FIELD BAKERY IN A RUINED CATHEDRAL - NIGHT, 1944
Detected names (may be incomplete or contain aliases): SERGEANT ELIAS MWANGI, CORPORAL TADEUSZ BIELSKI, PRIVATE LACHLAN MUIR, LIEUTENANT HARUKO TANAKA
1 A ¶ Ovens burn where the altar once stood.
2 A Stained glass lies in colored shards along the nave.
3 A Flour sacks form a low wall.
4 A Distant artillery thumps like a slow heart.
5 A ¶ SERGEANT ELIAS MWANGI, forties, sleeves rolled, kneads dough on a pew.
6 A CORPORAL TADEUSZ BIELSKI, twenties, sits against a pillar rubbing his boot.
7 A PRIVATE LACHLAN MUIR, nineteen, feeds wood into an oven.
8 A LIEUTENANT HARUKO TANAKA, thirties, a quartermaster with a notebook, stands at the door reading a list by candlelight.
9 A ¶ He lifts the dough, slaps it down.
10 A She turns a page.
11 A The private fans the fire with his cap.
12 D HARUKO: Eleven hundred loaves by dawn. Sergeant Mwangi, will that be possible?
13 D ELIAS: Possible, ma'am. Pleasant, no.
14 D TADEUSZ: Sergeant, the flour is damp.
15 D ELIAS: Flour is always damp in this country. Everything is.
16 D LACHLAN: Sergeant, do you think the cathedral minds?
17 D ELIAS: Minds what?
18 D LACHLAN: Us. Baking in it.
19 D ELIAS: Private, it's the warmest room for fifty miles. If God wanted it empty He should've kept the roof on.
20 D TADEUSZ: My grandmother would have crossed herself.
21 D HARUKO: Mine would have asked for the recipe.
22 D LACHLAN: What did she bake?
23 D HARUKO: Rice cakes. Very patiently. She said bread was for people in a hurry.
24 D ELIAS: She was right.
25 D TADEUSZ: Then what are we doing?
26 D ELIAS: Hurrying. Badly.
27 A ¶ A shell lands somewhere far off.
28 A Dust sifts from the vault.
29 A Nobody looks up.
30 D LACHLAN: Lieutenant, do you ever write home?
31 D HARUKO: Every Sunday.
32 D LACHLAN: What do you say?
33 D HARUKO: That the bread is excellent.
34 D ELIAS: It is.
35 D TADEUSZ: It is not. It is edible.
36 D ELIAS: Edible is excellent, Corporal. Ask anyone who's been hungry.
37 A ¶ Tadeusz nods slowly.
38 A Lachlan adds a log.
39 A The fire pops.
40 A Haruko tears out a page, folds it, and slips it into her pocket.
41 D HARUKO: Gentlemen, what time is it?
42 D ELIAS: Nearly three.
43 D HARUKO: Then you have two hours to make a thousand loaves.
44 D ELIAS: And what will you do, ma'am?
45 D HARUKO: Pray the bread is excellent.

### SCENE s00713 | INT. PROUTY COTTAGE - PARLOR - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ELEANOR PROUTY, GERALD, CONSTABLE IDRIS
1 A ¶ A low-ceilinged room.
2 A A mantel crowded with china figurines.
3 A A shawl on the arm of a chair.
4 A A grandfather's walking stick leaning by the door.
5 A Rain taps the windows.
6 A ¶ ELEANOR PROUTY, 60s, in a gray cardigan, sits in the straight-backed chair with her hands folded.
7 A GERALD, 60s, her brother-in-law, stands at the window with his back to her.
8 A CONSTABLE IDRIS, 30s, young and awkward, perches on the edge of the settee with a notebook on his knee.
9 D IDRIS: Mrs. Prouty. I'm sorry to trouble you.
10 D ELEANOR: It's no trouble.
11 D IDRIS: I only have a few questions.
12 D ELEANOR: Of course.
13 A ¶ Gerald does not turn.
14 A His hand rests on the curtain.
15 D IDRIS: When did you last see your husband?
16 D ELEANOR: Tuesday morning. At breakfast.
17 D IDRIS: And he went to the allotment?
18 D ELEANOR: He always goes to the allotment.
19 D IDRIS: Did he mention anyone?
20 D ELEANOR: No.
21 A ¶ Idris writes.
22 A The pen scratches in the silence.
23 A A clock chimes the quarter hour.
24 D IDRIS: Was he in good spirits?
25 D ELEANOR (after a pause): He was quiet.
26 A ¶ Gerald lets the curtain fall.
27 D GERALD: Henry was always quiet.
28 D IDRIS: Mr. Prouty, you live next door?
29 D GERALD: Forty years.
30 D IDRIS: And you didn't see him Tuesday?
31 D GERALD: I saw him walk past. Around nine.
32 D IDRIS: Which direction?
33 D GERALD: Toward the river.
34 A ¶ Eleanor looks down at her hands.
35 A She turns her wedding ring a single quarter turn.
36 D IDRIS: The allotment is the other way.
37 A ¶ Nobody speaks.
38 A Idris closes the notebook.
39 A Gerald crosses to the mantel and straightens a china shepherdess that did not need straightening.
40 D GERALD: Perhaps he went for a walk.
41 D IDRIS: Perhaps.
42 D ELEANOR: Would you like tea, Constable?
43 D IDRIS: That would be kind.
44 A ¶ She rises and goes to the kitchen.
45 A Gerald watches her go.
46 A When the kettle clatters in the other room, he turns to Idris with an expression that is almost relief.
47 D GERALD: She has not slept since Tuesday.
48 D IDRIS: No. I should think not.
49 A ¶ Idris tucks the notebook into his pocket.
50 A He glances at the walking stick by the door.
51 A It is wet.
52 A Rain, perhaps.
53 A Or river.

### SCENE s01346 | INT. COMMUNITY HOSPITAL, TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): SAMUEL ACHTERBERG, NURSE LINH DAO, TEAGUE
1 A ¶ White light, steel.
2 A A gurney.
3 A Monitors beeping.
4 A A fan of gauze packets on a tray.
5 A ¶ DR. SAMUEL ACHTERBERG, 40s, scrubs, surgical mask pulled under his chin, wipes his hands.
6 A NURSE LINH DAO, 30s, adjusts a monitor.
7 A A bleeding man, MR. TEAGUE, 50s, in a mechanic's coveralls, sits on the gurney, one hand clamped on his forearm.
8 A ¶ Teague tries to stand.
9 A Achterberg and Dao push him back down together.
10 A Teague shoves free, swings an elbow.
11 A Dao ducks.
12 A Achterberg grabs the arm.
13 A The three of them scuffle against the gurney, a monitor lead pops loose, and the machine screams.
14 A ¶ They freeze, panting.
15 A Teague's arm drips onto the floor.
16 A A long beat.
17 D DR. ACHTERBERG: Mr. Teague, you are bleeding.
18 D TEAGUE: I know I'm bleeding.
19 D DR. ACHTERBERG: You have a lacerated radial artery. If you stand up, you will pass out.
20 D TEAGUE: I don't have time to pass out.
21 D NURSE DAO: Mr. Teague, please sit down.
22 D TEAGUE: My daughter's waiting in the parking lot. She's eleven. She doesn't have a coat. She thinks I'm getting a sandwich.
23 D DR. ACHTERBERG: We can send someone to get her.
24 D TEAGUE: She won't go with a stranger.
25 D NURSE DAO: She'll go with me. Tell me what she looks like.
26 D TEAGUE: Blue backpack. Braids. Her name is Corinne.
27 D NURSE DAO: Corinne. Blue backpack. Braids.
28 D TEAGUE: She hates broccoli.
29 D NURSE DAO: Noted.
30 D DR. ACHTERBERG: Mr. Teague, I need your arm.
31 D TEAGUE: You'll fix it?
32 D DR. ACHTERBERG: I'll fix it.
33 A ¶ Teague lies back.
34 A Dao reconnects the monitor lead.
35 A Achterberg unwraps a suture kit.
36 A The beep slows to a steady rhythm.

### SCENE s02198 | INT. COLD-STORAGE WAREHOUSE - LOADING DOCK - NIGHT
Detected names (may be incomplete or contain aliases): INFORMANT, DETECTIVE LENA VASQUEZ, OFFICER THEO BRANDT, BLAKE MORROW, SILAS GRADY, ASHLEY, DOOR, MARISOL QUINN
1 A ¶ Frost on the steel.
2 A Pallets of frozen fish.
3 A A forklift idles.
4 A Six figures stand in the glare of a single sodium light.
5 A ¶ A man in a hooded jacket, hands raised.
6 A This is the INFORMANT (30s, nervous, runny nose).
7 A Opposite him, DETECTIVE LENA VASQUEZ (40s, badge on her belt, calm) holds a pistol low.
8 A Behind her, OFFICER THEO BRANDT (20s, vest too big) holds a flashlight.
9 A Across the dock, two men in black coats: BLAKE MORROW (50s, smiling) and his silent partner SILAS GRADY (40s, scar through one eyebrow).
10 A And hunched on a pallet, wrapped in a foil blanket, sits a girl of about ten, ASHLEY (10, silent, huge eyes).
11 D VASQUEZ: Hands where I can see them.
12 D INFORMANT: I told you she'd be here.
13 D BLAKE MORROW: You told us a lot of things.
14 D VASQUEZ (to the girl): Honey, come over here.
15 A ¶ Ashley does not move.
16 A Silas Grady takes a half-step.
17 A Vasquez swings the pistol toward him.
18 A Theo's flashlight beam jerks.
19 D THEO: Detective?
20 D VASQUEZ: Hold the line, Theo.
21 D BLAKE: Detective Vasquez. We can settle this.
22 D VASQUEZ: Not with her in the room.
23 D BLAKE: Then let's make the room smaller.
24 A ¶ He nods to Silas.
25 A Silas steps behind the pallet, one hand sliding under his coat.
26 A Ashley pulls her knees to her chest.
27 A ¶ A DOOR slams at the far end of the dock.
28 A A woman in a long raincoat runs in, out of breath, wet hair clinging to her face.
29 A This is MARISOL QUINN (30s, the girl's mother, hysterical).
30 D MARISOL: Ashley!
31 A ¶ The girl looks up.
32 A For the first time, she speaks.
33 D ASHLEY: Mama?
34 A ¶ Everyone freezes.
35 A Blake turns, a smile spreading.
36 A Vasquez turns, her face tightening.
37 A The Informant slowly lowers his hands.
38 A ¶ Silas draws his gun.
39 A Vasquez raises hers.
40 A The flashlight beam jerks to Silas.
41 D BLAKE: Easy. Everybody easy.
42 D VASQUEZ: Silas, put it down.
43 D SILAS (first words, flat): No.
44 A ¶ Marisol lunges for her daughter.
45 A Silas turns, gun swinging.
46 A A shot rings out.
47 A The forklift alarm shrieks.
48 A ¶ And in the echo, we hold on Ashley's face, calm now, unfrightened, looking at all of them as if she had been waiting.

### SCENE s01019 | INT. HOUSEBOAT KITCHEN - THUNDERSTORM - NIGHT
Detected names (may be incomplete or contain aliases): BERNADETTE, WILLEM, JASPER, ARLO
1 A ¶ A narrow galley that rocks with each swell of the canal.
2 A Copper pots hang from hooks and sway like slow bells.
3 A A kettle sits cold on a gas ring.
4 A Rain hammers the roof.
5 A The lights have gone out, and a single oil lamp throws a trembling circle across the table.
6 A ¶ BERNADETTE (70s, silver braid, wool shawl, hands knotted with arthritis) sits at the head of the table with a ball of yarn and two needles she is not using.
7 A Her grandson WILLEM (30s, damp suit jacket, briefcase at his feet) sits across, rigid, his coat still buttoned.
8 A His son JASPER (6, pajamas under a rain slicker, a flashlight he keeps switching on and off) kneels on the bench, his nose against the glass.
9 A ¶ The boat lurches.
10 A A pot swings and clangs against a hook.
11 A Jasper yelps and flicks his flashlight on, pointing it straight at his father's face.
12 A Willem lifts a hand to block the beam.
13 A She watches them both over the rims of her glasses and says nothing.
14 A ¶ The old landline on the wall rings.
15 A A shrill, antique double-bell.
16 A Nobody moves.
17 A It rings again.
18 A She puts down the yarn, eases from the table, shuffles across the swaying floor, and takes the receiver in a hand that trembles only slightly.
19 D BERNADETTE: Yes?
20 D ARLO [V.O.] (over phone, crackling, jovial): Bernie? It's Arlo. I've been calling for an hour.
21 D BERNADETTE: The storm took the lines.
22 D ARLO [V.O.]: And the electric?
23 D BERNADETTE: Gone.
24 D ARLO [V.O.]: Is the boy there? Is Willem there?
25 A ¶ She glances back.
26 A Willem has risen halfway from his chair, his jaw working.
27 A Jasper has twisted around, the flashlight gripped in both small fists.
28 A She turns back and lowers her voice.
29 D BERNADETTE: They're here.
30 D ARLO [V.O.]: Tell Willem I said...
31 A ¶ The line crackles.
32 A She holds the receiver away from her ear, then back.
33 D ARLO [V.O., CONT'D]: ...said I was sorry about the will.
34 D BERNADETTE: You can tell him yourself.
35 D ARLO [V.O.]: Bernie, put him on.
36 A ¶ She holds out the receiver.
37 A Willem crosses the cabin in three strides, snatches it from her hand, and sets it to his ear.
38 A Jasper switches off the flashlight.
39 A The oil lamp gutters.
40 A The boat tilts and rights itself.
41 D WILLEM (into phone, tight): Uncle Arlo. You have some nerve.
42 D ARLO [V.O.]: Willem, listen to me.
43 D WILLEM: No. You listen.
44 A ¶ He turns his back to the room.
45 A His shoulders rise, and for a long moment he says nothing at all.
46 A Bernadette returns to her chair and picks up her knitting.
47 A Jasper slides off the bench and crawls under the table, curling up at his great-grandmother's feet, where the flashlight, switched back on, paints a small yellow moon on the floor.
48 D WILLEM [CONT'D] (quiet, dangerous): Say that again.
49 A ¶ She doesn't look up.
50 A Her needles begin to click.

### SCENE s00830 | EXT. DRY CREEK BED - NOON
Detected names (may be incomplete or contain aliases): JEB HARLAN, CYRUS DOYLE, RUTHIE
1 A ¶ Heat.
2 A Cicadas.
3 A A dead mule.
4 A ¶ JEB HARLAN, 40s, crouches behind it, rifle up.
5 A Across the gully, CYRUS DOYLE, 40s, flat on his belly in the sage.
6 A Both unshaven.
7 A Both in gray hats.
8 D RUTHIE [O.S.]: Boys! Y'all dead yet?
9 A ¶ Jeb flinches.
10 A Cyrus doesn't.
11 D JEB: Ruthie, stay in the wagon!
12 D RUTHIE [O.S.]: Wagon's on fire!
13 A ¶ Silence.
14 A Smoke rolls over the ridge.
15 A ¶ He stands, then drops.
16 A A shot kicks dust off the mule.
17 A He fires back.
18 A Nothing moves in the sage.
19 D CYRUS (hoarse): You hit?
20 D JEB: No. You?
21 D CYRUS: Hell if I know.
22 A ¶ He crawls to the lip of the bank.
23 A He sees the other one's hat.
24 A He grins, ugly.
25 D JEB: That's my hat.
26 D CYRUS: It was on the ground.
27 A ¶ Another shot.
28 A Both duck.
29 A The mule groans, then settles.
30 D RUTHIE [O.S.]: Cyrus! He's lying. Jeb never fired a round!
31 A ¶ He turns his rifle toward Ruthie's voice.
32 A The other one's barrel follows his.
33 A They hold like that, sweat running, the smoke thickening.

### SCENE s01432 | INT. REGIONAL AIRPORT - BAGGAGE CLAIM - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE LINDQVIST, YUSUF BELLAMY
1 A ¶ A single carousel grinds in an empty hall.
2 A Chairs bolted in rows.
3 A A vending machine hums.
4 A The arrivals board flickers "DELAYED."
5 A ¶ SAOIRSE LINDQVIST (40s, wool coat, a funeral program folded small in one hand) waits with her arms crossed.
6 A Beside her stands YUSUF BELLAMY (40s, her brother, rumpled, carry-on at his feet, a plastic bag of airport pretzels untouched).
7 A ¶ Neither looks at the other.
8 A They watch the rubber flaps at the end of the belt.
9 D YUSUF: Thought it'd be busier.
10 D SAOIRSE: Last flight in.
11 D YUSUF: Right.
12 A ¶ A bag slides out.
13 A Black, medium.
14 A Saoirse leans forward.
15 A Yusuf leans forward.
16 A It isn't theirs.
17 A It circles past them, and they both watch it, and neither says what both of them are thinking.
18 D SAOIRSE (to the carousel, brightly): Anyone? No? Okay.
19 D YUSUF: Who are you talking to?
20 D SAOIRSE: Habit.
21 A ¶ Another bag.
22 A A child's suitcase decorated with stickers of a cartoon fox.
23 A Saoirse turns away.
24 A Yusuf stares at it as it passes, then looks at his own shoes, then at the plastic bag of pretzels.
25 A He opens it, takes one, snaps it in half, offers her half without looking.
26 A ¶ She takes it.
27 A Eats it.
28 A They stand shoulder to shoulder, chewing, watching a dull steel belt roll and roll.
29 D YUSUF: Did you call Mum?
30 D SAOIRSE: Tuesday.
31 D YUSUF: What did she say?
32 D SAOIRSE: That the weather's turned.
33 D YUSUF: That's it?
34 D SAOIRSE: That's the whole call.
35 D YUSUF (under his breath): Ten years.
36 D SAOIRSE: What was that?
37 D YUSUF: Nothing.
38 A ¶ The belt shudders.
39 A A last bag drops from the chute, a cracked brown leather case with a torn tag, and rolls toward them alone.
40 A Saoirse's face does not change.
41 A Yusuf's does, finally, a slow collapse, brow, mouth, chin.
42 A He steps toward it and lifts it with both hands as though it might spill.
43 A She lowers her gaze, takes the funeral program out of her palm, and tucks it into her coat where nobody can see.
44 A He sets the case on the floor between them and kneels, thumbs resting on the latches, and she crouches across from him, one hand finding the handle and the other, without asking, closing over his.
45 D YUSUF [CONT'D]: You knew about the house.
46 D SAOIRSE: Yes.
47 D YUSUF: You knew and you let me fly all the way here.
48 D SAOIRSE: I thought you should see it.
49 A ¶ He lets go of the latch.
50 A She does not let go of his hand.
51 D YUSUF (very quietly): It was never about Mum.

### SCENE s01685 | INT. ER TRAUMA BAY 3 - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA RAMASWAMY, NURSE CALEB DUNMORE, INGRID SOLBERG, OTIS WEBB, PARAMEDIC GUS TREMAINE
1 A ¶ Harsh white light.
2 A Stainless steel.
3 A A monitor beeps too fast.
4 A Blood on the floor tiles, smeared by a gurney's wheels.
5 A ¶ DR. PRIYA RAMASWAMY (40s, surgical cap, steady) leans over a patient.
6 A NURSE CALEB DUNMORE (30s, tattooed forearms) squeezes a bag valve.
7 A RESIDENT DR. INGRID SOLBERG (20s, pale and wide-eyed) hovers at the foot of the bed.
8 A On the table lies MR. OTIS WEBB (70s), unconscious, his shirt cut open.
9 D PRIYA: Pressure?
10 D CALEB: Seventy over forty.
11 D PRIYA: Ingrid, give me two units of O neg.
12 D INGRID: Right away, Dr. Ramaswamy.
13 D PRIYA: Priya. Please. Just Priya.
14 A ¶ PARAMEDIC GUS TREMAINE (30s, soaked jacket) bursts in, still holding a clipboard.
15 D GUS: Dr. Priya! Wife says he took nitro an hour ago!
16 D CALEB: He's crashing.
17 A ¶ The monitor flatlines.
18 A A long, flat tone.
19 D PRIYA: Charge to two hundred.
20 D CALEB: Charging.
21 D PRIYA: Clear!
22 A ¶ The body jerks.
23 A The line stays flat.
24 D PRIYA [CONT'D]: Again. Three hundred.
25 D INGRID: Dr. Priya --
26 D PRIYA: Now, Ingrid!
27 A ¶ Another shock.
28 A A blip.
29 A Another.
30 A A steady rhythm.
31 D CALEB: We have a pulse.
32 A ¶ Ingrid exhales.
33 A Priya wipes her forehead with a gloved wrist.

### SCENE s00123 | INT. BAKERY - PROOFING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI BETTENCOURT, LINNEA ASHWORTH
1 A ¶ Warm, yeasty dark.
2 A Steel racks of dough rise under damp cloths.
3 A A single bulb burns over a flour-dusted table.
4 A ¶ NAOMI BETTENCOURT, 30s, sleeves pushed to the elbow, shapes loaves with unhurried hands.
5 A Humming.
6 A At peace.
7 A ¶ The back door scrapes.
8 A Cold air wedges in.
9 D NAOMI: You're early.
10 A ¶ A shape in the doorway, snow on her shoulders.
11 A ¶ LINNEA ASHWORTH, 30s, long coat, a suitcase in one hand, steps into the light.
12 A Her face is thinner than Naomi remembers.
13 D LINNEA: I took the first train.
14 D NAOMI: You said Friday.
15 D LINNEA: It is Friday.
16 A ¶ Naomi looks at the clock over the oven.
17 A 1:40 AM.
18 A She almost laughs.
19 D NAOMI: So it is.
20 A ¶ She wipes her hands on her apron.
21 A She does not cross the room.
22 A Neither does Linnea.
23 A Between them, the racks tick softly as the dough breathes.
24 D LINNEA: You look well.
25 D NAOMI: I look like flour.
26 D LINNEA: That's what I meant.
27 A ¶ Naomi smiles, finally, and gestures to a stool.
28 A Linnea sets down the suitcase and sits.
29 A She watches Naomi's hands work, the push, the fold, the turn.
30 D LINNEA [CONT'D]: I thought about this room every night.
31 D NAOMI: I thought about you every night.
32 A ¶ They speak at the same moment, quietly, a little afraid.
33 D NAOMI [CONT'D]: I'm sorry I left.
34 D LINNEA: I'm sorry I left.
35 A ¶ Nobody moves.
36 A Then Naomi laughs, wet-eyed, and Linnea does too, and the tension breaks like crust.
37 D NAOMI: Stay. Please.
38 D LINNEA: I can't promise.
39 D NAOMI: I'm not asking for a promise. Just the morning bake.
40 A ¶ Linnea rises.
41 A She takes the other end of the table.
42 A She picks up a knife and starts scoring loaves, matching rhythm.
43 A ¶ For a time they work in easy silence.
44 A ¶ Then Linnea sets down the knife.
45 A She slides her left hand into her coat pocket and withdraws a thin envelope, stamped with a hospital seal.
46 D LINNEA [CONT'D]: Before the morning, I should show you this.
47 A ¶ Naomi looks at the seal.
48 A The humming in the room seems to stop.
49 D NAOMI: Linnea.
50 D LINNEA: Read it. Then decide about the bread.

### SCENE s00686 | INT. NORTHBEAM SYNERGIES - OPEN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): BRENDA KOWALCZYK, TREVOR NAKAMURA, PRIYA VENKATARAMAN, GUS TILLMAN
1 A ¶ Rows of identical desks.
2 A A motivational banner reads "TOGETHER WE ALIGN."
3 A A broken printer wheezes in the corner.
4 A ¶ BRENDA KOWALCZYK, 50s, regional VP in a power blazer, stands on a chair with a clicker.
5 A TREVOR NAKAMURA, 30s, middle manager, holds a coffee like a shield.
6 A PRIYA VENKATARAMAN, 30s, a senior analyst with a headset around her neck, scrolls through a spreadsheet.
7 A GUS TILLMAN, 20s, an intern in a too-big tie, takes notes.
8 D BRENDA: Team! Huddle up!
9 A ¶ Nobody huddles.
10 A Trevor drifts closer.
11 D BRENDA [CONT'D]: Today we pivot. From synergy to hypersynergy.
12 D TREVOR (to himself): Pivot where? We don't have a chair.
13 D BRENDA: Trevor, I heard that.
14 D TREVOR: I said "we don't have a chair." For the new hire.
15 D BRENDA: We hire the person, not the chair.
16 D PRIYA (not looking up): Brenda, our Q3 numbers are down forty percent.
17 D BRENDA: Which is why we pivot.
18 D PRIYA: It would be easier to fix the number.
19 D BRENDA: We don't fix numbers, Priya. We reframe them.
20 D GUS (raising a hand): Can I ask a question?
21 D BRENDA: Gus. Welcome to the conversation.
22 D GUS: What does hypersynergy mean?
23 D BRENDA: It means synergy, but faster.
24 D TREVOR (to Gus, low): It means layoffs.
25 D BRENDA: I heard that too.
26 D TREVOR: I know. I wanted you to.
27 A ¶ Brenda climbs down from the chair, slowly, crosses to Trevor, and lowers her voice to a whisper that carries across the entire floor.
28 D BRENDA: You're on a performance improvement plan.
29 D TREVOR: For what?
30 D BRENDA: For saying "layoffs" out loud.
31 D PRIYA (to herself, typing): Seven words. A new record.
32 D GUS (to the room): Does the plan come with a chair?
33 A ¶ Priya snorts.
34 A Trevor stares at Brenda.
35 A Brenda stares back.
36 D BRENDA (to everyone): Everyone back to your desks. We're going to have a very productive day.
37 A ¶ Nobody moves.
38 A The printer coughs and dies.
39 D TREVOR: I'm not on a plan.
40 D BRENDA: You are now.
41 D TREVOR: Then I quit.
42 D PRIYA: Seconded.
43 D GUS (very small): Does that include interns?
44 A ¶ Brenda looks at the banner, then at the three of them, then at the dead printer.
45 A Her smile has not moved at all.
46 D BRENDA: Everybody take fifteen. In fifteen minutes, we circle back to this.
47 A ¶ She steps back up onto the chair.

### SCENE s01765 | INT. DRAGON'S TOOTH MINE - DEEP SHAFT - DAY
Detected names (may be incomplete or contain aliases): ALDRETH, PIP, MARN, YSABEAU, GORRAN
1 A ¶ Black rock veined with ivory.
2 A Lanterns hang from iron hooks.
3 A The walls are warm.
4 A ¶ ALDRETH (40s, foreman, leather vest, pickaxe on his shoulder) squints into the dark.
5 A PIP (12, mine boy, soot-faced, torch held two-handed) grips his sleeve.
6 A MARN (30s, miner, huge arms, a sledge) swings at the vein, stone chips flying.
7 A YSABEAU (20s, mapmaker, ink on her nose, a roll of parchment under her arm) taps a compass.
8 A ¶ The wall exhales.
9 A Hot breath, sulfur-yellow.
10 A Every lantern bows.
11 D PIP: Foreman?
12 D ALDRETH: Nobody move.
13 A ¶ Marn lowers the sledge.
14 A Ysabeau closes the compass.
15 A Pip ducks behind Aldreth.
16 A Together they back up into the narrow shaft as the vein of ivory glows orange and the stone around it begins to crack like an egg.
17 A ¶ A figure steps out of the dark behind them.
18 A GORRAN (60s, a wyrm-warden, scaled leather armor, a staff of blackened bone) taps the floor once.
19 A The cracking stops.
20 D GORRAN: You've dug into the nursery.
21 D ALDRETH: We didn't know.
22 D GORRAN: Few do. Put down the picks. Back out, slowly, and thank the mountain it's sleeping.
23 A ¶ Marn drops the sledge.
24 A Ysabeau bows.
25 A Pip, trembling, holds out his torch, and Gorran takes it, and pinches the flame out with two bare fingers.
