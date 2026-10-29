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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusA/group_28001.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05180 | INT. HARBORVIEW VETERINARY CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): RUIZ, THE SQUAD, OKAFOR
1 D RUIZ [V.O.]: Every war leaves a trail of paperwork. Nobody tells you the paperwork is the part that gets people killed.
2 A ¶ Fluorescent tubes buzz over a waiting room that smells of bleach and wet dog, and Detective Mara Ruiz, fifties, rain on her shoulders, stands at the reception desk with a manila folder pressed to her chest while Dr. Femi Okafor, forties, blood on his scrubs, pulls a shutter down over the front window, and behind them four uniformed soldiers in damp fatigues fan out through the kennel hall, boots squeaking on the linoleum, rifles low, checking cages full of sleeping beagles and one furious cat.
3 D RUIZ [V.O.]: Three tours, one medal, and now a vet clinic at two in the morning. That's how it ends for the kind of man we came to find.
4 D THE SQUAD: Hall's clear!
5 D RUIZ: Dr. Okafor, I'm going to ask you once.
6 D OKAFOR: You have been asking since you walked in.
7 D RUIZ: Where is Sergeant Hale?
8 D OKAFOR: Sedated. Surgery two. He walked in with a shrapnel wound and a dog that was bleeding worse than he was.
9 D RUIZ: A dog.
10 D OKAFOR: A Belgian Malinois. Military issue, tag filed off. I stitched the dog first. The man made me.
11 D RUIZ: And you didn't think to call anyone.
12 D OKAFOR: I thought a dying animal outranked a phone call. Was I wrong?
13 D RUIZ: You're harboring a deserter who is wanted in connection with eleven deaths.
14 D OKAFOR: I'm harboring a patient. He has a pulse. That's all my license asks me to check.
15 D RUIZ: Your license is going to be the least of your problems.
16 D OKAFOR: Then arrest me after he wakes up. I'd like him to wake up.
17 D RUIZ: You think he's innocent.
18 D OKAFOR: I think he talks in his sleep. Under anesthesia he kept saying the same name, over and over, and it wasn't a woman's name and it wasn't a place.
19 D RUIZ: Whose name?
20 D OKAFOR: Yours.
21 D RUIZ [V.O.]: There it was. Twenty years of keeping my past in a locked drawer, and a veterinarian hands me the key.
22 D RUIZ: He's lying to you.
23 D OKAFOR: Sedatives don't let you lie, Detective. That's rather the point of them.
24 D THE SQUAD: Detective, we have movement in surgery two!
25 D RUIZ: Nobody touches that door until I say.
26 D OKAFOR: He'll tear his sutures if he stands.
27 D RUIZ: Then he should have thought about that before he ran.
28 D OKAFOR: Ran from what? Tell me that much. Tell me what a man like that runs from.
29 D RUIZ: From me.
30 A ¶ Silence.
31 A The cat hisses.
32 A Somewhere in the back, a steel tray CLATTERS to the floor, and Ruiz, hand on her holster, shoulders through the swinging doors as the Squad closes in behind her, lamps swinging across the kennels, Okafor following with his palms raised, and on the operating table the blanket lies empty, the window above it open to the rain, the Malinois sitting upright beneath it, waiting, staring at her as if it had been told she would come.
33 D RUIZ [V.O.]: He didn't run from me. He ran to me. The dog was the message. The dog was always the message.
34 D OKAFOR: What does that mean?
35 D RUIZ: It means we are standing in exactly the place he wanted us to be.
36 D THE SQUAD: Contact! Front entrance!
37 A ¶ The lights die.
38 A Rain.
39 A Boots.
40 A Dark.

### SCENE s05111_0 | INT. NIGHTBIRD STUDIOS - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): RILEY, PRIYA, COLE, DEZ
1 A ¶ Midnight.
2 A Rain on the roof.
3 A ¶ HISS of the tape machine.
4 A A red RECORD light.
5 A ¶ Foam panels.
6 A Cables like veins.
7 A A grand piano under a sheet.
8 A ¶ RILEY, 30s, producer, hunches over the console.
9 A He rubs his eyes.
10 A Coffee gone cold.
11 A ¶ Behind the glass, PRIYA, 20s, singer, stands at the mic.
12 A Headphones on.
13 A Eyes closed.
14 A ¶ COLE, 40s, engineer, slouches by the patch bay.
15 A He chews a pen.
16 D RILEY (into talkback): Take eleven. From the bridge.
17 D PRIYA (through speaker): Can I hear the guide?
18 D RILEY: It's in your cans.
19 D PRIYA: It's not.
20 A ¶ He checks the fader.
21 A Pushes it up.
22 A ¶ BZZZT.
23 A Feedback.
24 A ¶ Everyone flinches.
25 D COLE: That wasn't me.
26 D RILEY: Mute the room mics.
27 D COLE: They're muted.
28 A ¶ Silence.
29 A ¶ Then a soft sound in the speakers.
30 A A breath.
31 A ¶ Not Priya's.
32 D PRIYA (through speaker): Riley? Who's in here with me?
33 D RILEY: Nobody. It's the monitors.
34 A ¶ He taps the glass.
35 A She doesn't turn.
36 A ¶ PHONE BUZZES on the console.
37 A He grabs it.
38 A ¶ ON PHONE: where r u
39 A ¶ ON PHONE: the door is open
40 A ¶ He frowns.
41 A Looks at the live room door.
42 A Shut.
43 A Locked.
44 A Light off.
45 D COLE: Who is it?
46 D RILEY: Dez. He's not even in the building.
47 A ¶ He thumbs a call.
48 A Puts it on speaker.
49 A ¶ RING.
50 A RING.
51 D DEZ [V.O.] (distorted, far): Riley? Why are you calling from my house?
52 D RILEY: What? I'm at the studio.
53 D DEZ [V.O.]: I'm at the studio. I'm in the live room. Priya's with me.
54 A ¶ Beat.
55 A ¶ Riley looks through the glass.
56 A ¶ Priya is alone.
57 A Mouth open.
58 A Singing.
59 A No sound.
60 D COLE: Kill the tape.
61 D RILEY: I'm trying.
62 D COLE: Kill it!
63 D RILEY: It's not responding!
64 A ¶ BANG.
65 A ¶ The piano sheet FLIES off.
66 A ¶ The keys PLUNGE.
67 A Alone.
68 A ¶ A chord.
69 A Low.
70 A Wrong.
71 D PRIYA (through speaker): It knows my name.
72 D RILEY: Priya, come out. Now.
73 D PRIYA (through speaker): It's saying it.
74 D COLE: Saying what?
75 D DEZ [V.O.]: Don't open the door.
76 D RILEY: Dez, where are you?
77 D DEZ [V.O.]: Don't open the door don't open the door--
78 A ¶ CLICK.
79 A Dead line.
80 A ¶ A dog BARKS outside.
81 A Frantic.
82 A A delivery kid on the sidewalk ducks under an awning, phone raised, filming the building.
83 A The dog drags its leash toward the street.
84 A ¶ Inside, the lights DIE.
85 A ¶ Red RECORD light only.
86 D COLE: Where's the exit?
87 D RILEY: Behind you.
88 D COLE: There's a wall behind me!
89 D PRIYA (through speaker): Riley. Riley. Riley.
90 D RILEY: I'm coming.
91 D COLE: Don't.
92 D RILEY: She's in there!
93 D COLE: She's not alone!
94 A ¶ The glass CRACKS.
95 A A line zigzags across it.
96 A ¶ Priya turns.
97 A Slowly.
98 A ¶ Her eyes are open.
99 A They aren't hers.
100 D PRIYA (her voice, doubled): Take twelve.
101 A ¶ The speakers SCREAM.
102 A ¶ Every fader slams to the top.
103 A ¶ Riley grabs the door.
104 A It burns.
105 A ¶ He kicks it.
106 A SLAM.
107 A It gives.
108 A ¶ He drags Cole through.
109 A They hit the corridor running.
110 A ¶ The red light follows them.
111 A Down the hall.
112 A Faster.
113 A ¶ BOOM.
114 A ¶ The whole building exhales.

### SCENE s05081 | INT. SELF-STORAGE FACILITY - UNIT 214 - NIGHT
Detected names (may be incomplete or contain aliases): TICKS, VESPER, OKAFOR, DEL
1 A ¶ A roll-up door, half raised.
2 A Cold light leaks under it.
3 A Somewhere down the corridor a vent TICKS, TICKS, stops, and the silence after it is worse, and VESPER crouches at a stack of boxes while OKAFOR holds a flashlight on a padlock and DEL stands at the door with his back to them, listening to the building.
4 D VESPER (sets down the bolt cutters, slow): Okafor. Light.
5 D OKAFOR (steadies the beam, whispers): It's on, Vesper. It's on.
6 D DEL (without turning): Something moved on the stairs.
7 D VESPER (freezes mid-reach): Del, it's a pipe. Say it's a pipe.
8 D DEL (a long pause): Okafor, kill the light.
9 D OKAFOR (clicks it off): 
10 A ¶ Dark.
11 D DEL (barely breathing): Nobody move.
12 D VESPER (a whisper, close to a laugh): We're not.
13 A ¶ Far down the hall, a door SHUTS.
14 A Soft.
15 A Careful.

### SCENE s05068_0 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): WORLD'S OKAYEST GRANDMA, THE MAN, DEB
1 A ¶ Fluorescent lights.
2 A A row of molded chairs.
3 A A ficus that died years ago and has not been told.
4 A ¶ Deb, 60s, reception, bifocals, a mug that says WORLD'S OKAYEST GRANDMA, taps at a keyboard behind scratched plexiglass.
5 A She doesn't look up when the door opens.
6 A ¶ A man comes in.
7 A He is tall, late forties, a gray work jacket zipped to the throat, a folder pressed to his ribs like a shield.
8 A He stands very still just inside the door, as if the room might reject him.
9 A THE MAN waits.
10 D DEB: Name?
11 D THE MAN: I have a nine o'clock.
12 D DEB: Name.
13 A ¶ He says nothing for a second.
14 A She finally looks at him.
15 D THE MAN: Is Officer Okafor in?
16 D DEB: Honey, everybody's in. It's nine in the morning. Sit.
17 A ¶ He sits.
18 A He keeps the folder on his knees.
19 A Across the room, a clock ticks, slower than a clock should.

### SCENE s05126 | EXT. THE MARGARET ANN - NORTH SEA - DAY
Detected names (may be incomplete or contain aliases): SAL, JEN, MO, RO, BIG DAVE
1 A ¶ Grey water.
2 A Grey sky.
3 A Gulls.
4 A ¶ A restored 1890s sailing smack, brown sails patched, bobbing hard.
5 A The crew wear wool jerseys and oilskins of the period, a living-history charter for tourists.
6 A ¶ SAL, 60, skipper, white beard, stands at the tiller.
7 A Weather in every wrinkle.
8 A ¶ JEN, 25, pulls a net hand over hand.
9 A MO, 19, coils rope badly.
10 A ¶ Between them, near the mast, a WOMAN sits on an upturned crate.
11 A Mid-30s.
12 A A city coat, no oilskin.
13 A Dry shoes.
14 A She watches the horizon like she's counting something.
15 A ¶ Spray.
16 D JEN (to Mo): Not like that. Over, under.
17 D MO: That's what I did.
18 D JEN: It's not.
19 A ¶ Mo tries again.
20 A Worse.
21 D SAL: Leave him, Jen. Sea'll teach him.
22 D JEN: Sea'll drown him.
23 D SAL: Same lesson.
24 A ¶ The Woman almost smiles.
25 A ¶ Wind.
26 A Canvas SNAPS.
27 D SAL [CONT'D] (to the Woman): You'll want to move, miss. Boom's coming round.
28 D THE WOMAN: I'm fine.
29 D SAL: You're not.
30 A ¶ She doesn't move.
31 A ¶ Silence.
32 A ¶ A gull.
33 A Then another.
34 A ¶ The boom swings.
35 A Fast.
36 A ¶ Jen dives.
37 A Catches the Woman by the collar.
38 A They roll across the deck.
39 A ¶ The boom sails over, an inch above.
40 A ¶ Quiet.
41 A Everyone breathing.
42 D JEN (shaking): Are you out of your mind?
43 D THE WOMAN (flat): Probably.
44 A ¶ Sal lashes the boom.
45 A Hard hands, hard face.
46 D SAL: What's your name, miss?
47 D THE WOMAN: Ro.
48 D SAL: Rosalind?
49 D RO: Just Ro.
50 D MO (staring): You weren't scared.
51 D RO: I was.
52 A ¶ Another engine, from behind the fog.
53 A ¶ Out of the mist comes a harbour patrol launch.
54 A At the rail, BIG DAVE, 50s, enormous in a yellow slicker, peaked cap, a clipboard in a fist like a shovel.
55 D BIG DAVE (through a megaphone): Margaret Ann! Permit check!
56 D SAL (muttering): Of course.
57 A ¶ Big Dave looks across the water.
58 A Finds Ro.
59 A His expression softens.
60 D BIG DAVE (not on the megaphone): Rosalind. Your mother's been calling the harbour all morning.
61 A ¶ Ro closes her eyes.
62 D JEN (to Ro, quietly): Your mother?
63 D RO: I wanted to see where she grew up.
64 A ¶ Mo goes back to his rope.
65 A Over, under.
66 A Right this time.
67 A ¶ Rain begins.

### SCENE s05027 | EXT. RIVERSIDE PARK - FOUNTAIN - DAY
Detected names (may be incomplete or contain aliases): KIKI, KAI, JADA, STRANGER, MARCUS, SQUEAL
1 A ¶ Kiki, 19, ring light clipped to her phone, stands on the fountain's edge in a yellow jacket.
2 A Kai, her cousin, holds the tripod.
3 A Jada, 17, stands off to the side eating chips.
4 D KIKI [V.O.]: Everyone thinks the camera shows the truth. It shows what you point it at. That's the whole trick.
5 D KIKI: Okay, okay, take four. Kai, don't breathe on the mic.
6 D KAI: I'm not breathing on it.
7 D JADA: He's breathing on it.
8 D KAI: I'm literally holding my breath.
9 A ¶ The phone BUZZES on the tripod.
10 A ¶ ON PHONE: unknown number: stop filming. go home.
11 A ¶ Kiki laughs.
12 A Shows Kai.
13 A Kai doesn't laugh.
14 D KAI: That's a bit.
15 D KIKI: It's a bit. Some bot. Rolling.
16 A ¶ She starts the dance.
17 A Two bars in, a man in a grey coat walks into the frame behind her, and does not walk out.
18 D KIKI [CONT'D]: Excuse me, sir? We're filming!
19 D STRANGER: You're filming me.
20 D JADA: Nobody's filming you.
21 D KAI: Dude, you're in the shot, step back.
22 D STRANGER: You posted this fountain at nine this morning. Caption said "no one ever comes here."
23 D KIKI: It's a caption!
24 A ¶ ON PHONE: unknown number: he's not joking. walk away.
25 A ¶ Kiki's smile goes.
26 A The tripod light blinks red.
27 A A pigeon bursts off the fountain, SCREAMING away over the trees.
28 D KAI: Who is texting you?
29 D KIKI: Jada?
30 D JADA: It's not me! I'm right here!
31 D STRANGER: My name is Marcus. I'm the one who texted you. Look behind you, Kiki.
32 D KIKI [V.O.]: Funny. I only said "Kiki" in the video. Never my last name. Never where we live.
33 D MARCUS (to Kai, calm): Put the phone down.
34 D KAI: What? No!
35 D JADA: Kiki, we should go.
36 D KIKI: Go where, Jada, he's--
37 A ¶ A black van pulls up on the gravel path with a SQUEAL of tires.
38 A The side door SLIDES open.
39 D MARCUS: Now, please. All three.

### SCENE s05021 | INT. ST. MARGARET HOSPITAL - NURSES STATION - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA, ALBERT, TOMASZ, GLORIA, TEENAGERS, DIRECTOR
1 A ¶ The ward is quiet.
2 A The clock on the wall shows 3:10.
3 A A cleaner pushes a mop slowly past the station and does not look at anyone.
4 A In the corner a vending machine hums.
5 A PRIYA sits with a clipboard, DR. ALBERT eats a sandwich with great care, TOMASZ is looking at his phone and GLORIA, the night manager, walks in a circle around the desk with a mug in her hand and a smile that does not move.
6 D PRIYA (she closes the clipboard): Everybody, tonight is very calm. Maybe the calmest night this year.
7 D DR. ALBERT (he chews, then points to the sandwich): Please do not say this word. Calm. It is a bad word in hospital.
8 D PRIYA (laughing, she touches the wooden desk): I am sorry. I take it back.
9 D TOMASZ (to himself, he reads the screen): Again no message from my wife. Maybe she is sleeping.
10 A ¶ ON PHONE: Tomek where r u?
11 A Come home early pls.
12 A Dog is sick.
13 D TOMASZ (he turns the phone to Priya): You see? The dog. Always the dog.
14 D PRIYA (she reads and nods): You have a dog? I thought you hate animals.
15 D TOMASZ (quietly, to the room): I hate everything at three in the morning.
16 D GLORIA (she lifts the mug to all of them): Friends, I am so happy with this team. Really. Look at this peace.
17 D DR. ALBERT (to Priya, low, he lowers the sandwich): Why is she so happy? She is never happy.
18 D PRIYA (whispering, she shrugs): Maybe she had good sleep.
19 D GLORIA (she hears and smiles wider): I heard this. I am fine. Please, continue your work.
20 A ¶ Two TEENAGERS in school jackets come through the doors, one holding a bloody paper towel to the other's chin.
21 A Nobody stands up.
22 A Priya waves them to the waiting chairs without looking, Tomasz types a reply with one thumb, and Dr. Albert hides the sandwich under a folder while Gloria walks to the window and looks down at the parking lot as if she is waiting for someone.
23 A ¶ The desk phone RINGS.
24 A Priya answers.
25 D PRIYA (into the phone): Ward four, Priya speaking.
26 D DIRECTOR [V.O.] (through the phone, calm and slow): Priya, good evening. This is the Director, from the head office. I am downstairs. I am coming up to see your ward.
27 D PRIYA (she covers the receiver, to everyone): It is the Director. He is downstairs.
28 D DR. ALBERT (he stands, the folder falls, the sandwich falls): Ah no. No, no.
29 D TOMASZ (he puts the phone away and fixes his hair): Now I understand why she smile.
30 D GLORIA (turning from the window, very quietly, to all): He has been in the building since midnight. I did not tell you because I wanted to see your real work.
31 D PRIYA (into the phone, with a very small voice): Welcome, Director. We are ready.
32 D DIRECTOR [V.O.] (the elevator DINGS behind the phone voice): I know. I saw everything on the camera.
33 A ¶ The elevator doors OPEN at the end of the corridor.
34 A The cleaner with the mop stops, takes off his cap, and looks at the four of them.
35 D TOMASZ (a whisper): Is the cleaner the Director?
36 A ¶ Nobody answers.
37 A The cleaner smiles.

### SCENE s05062 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): GWEN, RICKY, TASHA, BOB
1 A ¶ 2 AM.
2 A Rain.
3 A A hatchback, wipers going.
4 A GWEN, bride-to-be, in a wedding dress, sits in back.
5 A Next to her, RICKY, her ex.
6 A Up front, TASHA drives.
7 A Beside her, BOB, a stranger with a trombone case.
8 D TASHA: So to confirm. Four people. One dress. Zero explanations.
9 D GWEN: He's not with me.
10 D RICKY: I'm totally with her.
11 D GWEN: He's not WITH me with me.
12 A ¶ Silence.
13 A ¶ Bob.
14 A Trombone.
15 A Nothing.
16 D BOB: I got in the wrong car.
17 D TASHA: You got in the right car. You got in the wrong, uh, situation.
18 A ¶ Her phone.
19 A Dead.
20 D GWEN: Does anyone have a charger
21 D TASHA: Glovebox. Next to my dignity.
22 A ¶ He opens it.
23 A Empty.
24 A Rain.
25 D RICKY: Gwen, the groom is at the church. Everyone is at the church. Why are we in a Honda?
26 D GWEN: Because I ran. Okay? I ran. In heels.
27 D BOB (raising trombone case): For what it's worth, I think you look fantastic.
28 A ¶ Beat.
29 A All three turn to him.
30 D TASHA: Sir, you're not even supposed to be here.
31 D BOB: I'm just saying. Great dress.
32 A ¶ She laughs, then cries, then laughs.
33 A He hands her a napkin from the case.
34 A Why does he have napkins in a trombone case.
35 A Nobody asks.
36 A ¶ Tasha stops the car.
37 A Church.
38 A Lights on.
39 A Doors open.
40 A The groom, tiny in the distance, waving.
41 D RICKY: Oh no.
42 D GWEN: Oh no.
43 D TASHA: Five stars everybody. Thats the best ride I ever had.

### SCENE s05185 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): DANA, ALL, WALTER, TOMAS, FATHER MORAN
1 A ¶ Folding chairs in a circle on cracked linoleum.
2 A A coffee urn sputters.
3 A Under a flickering tube light, six people sit with paper cups, and one of them is wearing a wire.
4 A ¶ Dana Whitlock, 30s, sharp-eyed, an undercover agent in a thrift-store cardigan, sits beside Walter Pruitt, 60s, a retired accountant who hasn't touched his coffee, while across the circle Rosalind Kerr, 50s, a lawyer with ink-stained fingers, grips the arm of Tomas Reyes, 20s, who bounces his knee, and Father Gil Moran, 70s, the host, folds his hands as Priya Anand, 40s, a nurse in scrubs, steps in late and closes the door too carefully.
5 A ¶ CLOSE ON Dana's cup.
6 A A pinhole lens in the rim.
7 D DANA: I'm Dana. I'm an alcoholic.
8 D ALL: Hi, Dana.
9 A ¶ ANGLE ON Walter.
10 A He watches her hands, not her face.
11 A ¶ This is the last time any of them will sit in this room together.
12 D WALTER: You sound new.
13 D DANA: Three weeks.
14 D WALTER: Funny. You smell like gun oil.
15 A ¶ Silence.
16 A The urn gurgles.
17 A Rosalind's grip on Tomas tightens.
18 A ¶ INSERT - Priya's phone, face-down on her knee.
19 A A text lights the screen: HE KNOWS.
20 A ¶ WE SEE Father Moran slowly stand, one hand sliding into his cassock.
21 A ¶ BACK TO SCENE
22 D TOMAS: Nobody move.
23 D FATHER MORAN: Sit down, son. Everyone sit. Dana, the cup, please.
24 A ¶ Dana sets it on the floor.
25 A Slowly.

### SCENE s05012 | EXT. MOONDUST TACOS FOOD TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): ZIP, LUCY, BIG MO, GRANDMA TESS
1 A ¶ A silver food truck sits on a gravel lot under three moons.
2 A Steam curls from the grill, and a tiny robot named ZIP wobbles along the counter on caster wheels, juggling a lime, a squeeze bottle and a napkin while LUCY the cook flips tortillas without looking and BIG MO, her towering brother, lifts a crate of glowing peppers over a sleepy dog that snores by the generator.
3 A Two teenagers in shiny silver jackets lean on the window and argue about which moon is the best moon.
4 D LUCY (to everyone): Okay team, last orders, then we blast off for the next planet!
5 D ZIP (muttering to self): Lime, lime, where is the lime... oh. I am holding the lime.
6 D BIG MO (to Lucy): Boss, the engine is making that noise again. The sad one.
7 D LUCY (shrugging): Then sing it a happy song.
8 A ¶ A phone buzzes on the counter.
9 A Lucy taps it, and a hologram of GRANDMA TESS flickers above the grill.
10 D GRANDMA TESS [V.O.]: Lucy, sweetheart, are you eating? You sound thin.
11 D LUCY (to the phone): Grandma, you can't hear thin.
12 D GRANDMA TESS [V.O.]: I can hear everything. Tell Mo to stop lifting with his back.
13 D BIG MO (calling out): I heard that!
14 D ZIP (to the dog, whispering): Everybody is so loud tonight.
15 A ¶ The dog opens one eye, sighs, and goes back to sleep.

### SCENE s05137 | INT. NIGHT BUS - LOWER DECK - NIGHT
Detected names (may be incomplete or contain aliases): WALTER, EDITH, ALISTAIR, TOMMY
1 A ¶ 1953.
2 A London, fog thick as wet wool against the windows.
3 A The bus lurches through an empty Bayswater, its engine groaning like an old man climbing stairs.
4 A ¶ Edith Marsh, 30s, a nurse in a navy coat with the cap folded in her lap, sits near the back.
5 A Her shoes are scuffed from a double shift.
6 A Across the aisle, Walter Penn, 60s, a conductor with a ticket machine strapped to his chest, leans on the rail and yawns without apology.
7 A ¶ ANGLE ON the dim bulb overhead, flickering, throwing yellow across faces.
8 A ¶ Near the front, Alistair Crane, 40s, in a good tweed overcoat too warm for the night, reads a folded newspaper he is not reading, while beside him a boy, Tommy, 10, in a cap too big for him, kicks his heels against the seat and watches the rain run in lines down the glass, and Walter checks his watch and the clock above the driver and the road ahead, all in one practised sweep.
9 D WALTER: Fares, please. Fares. Last bus tonight, ladies and gentlemen. Last bus and last chance.
10 D EDITH (tired, smiling): You say that every night, Mr Penn.
11 D WALTER: And every night I mean it, Miss Marsh.
12 A ¶ WE SEE Alistair's gloved hand tighten on the newspaper.
13 D ALISTAIR (without looking up): The boy has no ticket.
14 D TOMMY (small): Da says it's all right.
15 D ALISTAIR: Does he.
16 D WALTER (gently): Where's your da, lad?
17 D TOMMY: Home. He's poorly.
18 A ¶ Silence.
19 A The bus turns a corner, and everyone sways together.
20 A ¶ CLOSE ON Tommy's coat sleeve.
21 A The cuff is worn through.
22 A Edith sees it.
23 D EDITH (rising, crossing the aisle): I'll pay his fare. Here. A tuppence, is it?
24 D WALTER: Threepence from here, miss.
25 D EDITH: Then threepence.
26 A ¶ She sets the coins in the machine's tray.
27 A Alistair folds the newspaper at last, slow and exact, and looks at her for the first time.
28 D ALISTAIR: That's very generous. I wonder you can afford it, on a nurse's wage.
29 D EDITH (level): I wonder you can afford that coat, on whatever it is you do.
30 D WALTER (a warning): Now then.
31 D ALISTAIR: I do very well, thank you. I take an interest in people who leave their patients at night.
32 D EDITH: I haven't left anyone.
33 D ALISTAIR (softly): Mrs Harcourt, in the end bed. She'd be a good deal more comfortable if you'd stayed.
34 A ¶ Edith goes still.
35 A The engine drones.
36 A Tommy has stopped kicking.
37 A ¶ BACK TO SCENE: the bus slows at a stop where no one waits, the doors hiss, and cold air comes in carrying the smell of coal smoke.
38 D EDITH (very quiet): Who are you?
39 D ALISTAIR: Someone who reads the ward reports.
40 D WALTER: I think, sir, you'd best get off here.
41 D ALISTAIR: I think I'll ride to the terminus, conductor. I've paid.
42 D TOMMY (tugging Edith's sleeve): Miss, is he a policeman?
43 D EDITH (a long beat): No, love. I think he's only lonely.
44 A ¶ Alistair's face flickers, the tiniest crack.
45 A He looks at the boy, then at the fogged window, then at his own reflection, which looks like someone he would rather not be.
46 D ALISTAIR (low): Mrs Harcourt died at nine. I was her son.
47 D EDITH (stricken): I'm so sorry. I didn't know.
48 D ALISTAIR: No. Nobody did. She said you were kind.
49 A ¶ Walter takes off his cap.
50 A The doors hiss shut.
51 A The bus pulls away into the fog, and no one says anything else.

### SCENE s05056 | INT. SELF-STORAGE UNIT 114 - DAY
Detected names (may be incomplete or contain aliases): HOLLIS, THE WOMAN, WADE, ODALYS, CAL
1 A ¶ ON CAMERA: a roll-up door half open, daylight on concrete.
2 A The camera operator's breathing is audible.
3 A ¶ Hollis, 60s, in a sweat-stained Stetson, kneels over a trunk.
4 A Behind him, boxes stacked to the ceiling, saddles, a dented tin lantern.
5 A ¶ A woman stands in the doorway with her arms crossed.
6 A She does not give her name.
7 A She has a leather satchel and a very flat voice.
8 D HOLLIS: Told the office it was all family stuff. Photographs. My granddad's saddle.
9 D THE WOMAN: And the brand book.
10 D HOLLIS: Didn't say a word about no brand book.
11 D THE WOMAN: You didn't have to.
12 A ¶ Hollis opens the trunk.
13 A Nothing.
14 A Dust.
15 D HOLLIS: Well, it ain't here.
16 A ¶ Hollis's phone RINGS.
17 A He answers on speaker.
18 D WADE [V.O.] (tinny): Pa? You in there yet? Don't open nothing till I get there.
19 D HOLLIS: Too late, son.
20 D WADE [V.O.]: Is somebody with you?
21 A ¶ Hollis looks at the woman.
22 A She looks at the camera.
23 A For a long time none of them say anything.
24 D THE WOMAN: Tell him it's Odalys. Tell him I came the long way round.
25 D HOLLIS (into the phone): It's Odalys.
26 D WADE [V.O.] (a pause, then flat): I'm ten minutes out. Stay put.
27 A ¶ The line goes dead.
28 A Hollis puts the phone in his pocket and does not look up.
29 D HOLLIS: He ain't gonna be happy.
30 D ODALYS: No.
31 D HOLLIS: You gonna wait?
32 D ODALYS: I have waited thirty years, Mr. Hollis. Ten minutes is nothing.
33 D CAL (behind the camera): Are we still rolling?
34 A ¶ Nobody answers him.

### SCENE s05178 | INT. RIVERSIDE SOUND STUDIO - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELLIE, RHYS, GRAN
1 A ¶ A dim room, all faders and foam.
2 A Through the glass: a vocal booth, a lone mic, a stool.
3 A ¶ ELLIE (17, borrowed leather jacket two sizes too big) stands inside the booth with headphones clamped on, gripping the mic stand while RHYS (30s, producer, beanie, tea in a chipped mug) slumps behind the desk with his feet up, and a laptop on his knee pings and BUZZES every few seconds as GRAN's name flashes on its screen.
4 D RHYS (into talkback): Again, Ellie. From the second verse.
5 D ELLIE [V.O.] (through speaker): I've done it nine times, Rhys.
6 D RHYS: Ten's a good number.
7 A ¶ She sighs, the speaker crackling.
8 A Rhys's phone rings: GRAN.
9 A He answers, puts it on speaker.
10 D GRAN [V.O.]: Rhys, love, is she there? She's not answering her mobile.
11 D RHYS: She's singing, Gran. Can't be disturbed.
12 D GRAN [V.O.]: Tell her the dinner's gone cold. Tell her I'm proud, and the dinner's gone cold.
13 A ¶ Ellie hears it through the cans.
14 A Her hand goes to her mouth.
15 A Rhys mutes the line and presses talkback.
16 D RHYS: Good. Hold that. Sing it like that.
17 A ¶ She takes a breath.
18 A Closes her eyes.
19 A The red light flicks on.

### SCENE s05171_0 | EXT. CIVIC PLAZA - CLIMATE MARCH - DAY
Detected names (may be incomplete or contain aliases): RENA, BEA, PROTESTERS
1 A ¶ A river of cardboard signs.
2 A Drums.
3 A A bullhorn SQUEALS and dies.
4 D RENA [V.O.]: Three thousand people, one bank across the square, and nobody looking at the loading dock. That's the whole trick. Be loud somewhere else.
5 A ¶ RENA (30s, green vest, laminated MARSHAL badge) walks against the crowd, while BEA (20s, same vest, clipboard) cuts through the PROTESTERS ahead of her, a backpack riding high on her shoulders, and above them both a banner reading THERE IS NO PLANET B snaps in the wind as a helicopter's rotor THUMPS somewhere over the glass towers.
6 D PROTESTERS (chanting): Pay for it! Pay for it! Pay for it!
7 A ¶ Rena catches up.
8 A Bea doesn't slow.
9 D RENA: You're early.
10 D BEA: You're late. She said two-ten.
11 D RENA: She said two-fifteen.
12 D BEA: She said whatever gets us paid.
13 A ¶ A cardboard polar bear bobs between them.
14 A Bea ducks it.
15 A Rena doesn't.
16 D RENA [V.O.]: Bea never trusted a plan she didn't write. Which was fair. She wrote this one.
17 A ¶ A whistle SHRIEKS.
18 A Police on bikes line the east side of the plaza.
19 A Bea steers Rena by the elbow toward the alley behind the bank.
20 D BEA: Badge.
21 D RENA: On.
22 D BEA: Truck?
23 D RENA: Ten minutes out. She's driving.
24 A ¶ Bea stops short.
25 A Stares at her.
26 D BEA: She's driving? She said she'd be here.
27 D RENA: She's here. I mean she's close. She's in the truck. Bea, she's fine.
28 D PROTESTERS (chanting, louder): Pay for it! Pay for it!
29 A ¶ A speaker on the stage starts a speech.
30 A The crowd ROARS.
31 A Bea uses the noise and cracks the service gate with a bolt cutter.
32 A The lock CLANKS onto the pavement.
33 D BEA: Then she's late and she's here. Pick one.
34 D RENA [V.O.]: Forty seconds to the dock. Four minutes inside. Everybody on that square would remember the speech and nobody the van.
35 A ¶ They slip through.
36 A The gate CLANGS shut behind them.
37 A The chanting drops to a muffled pulse.

### SCENE s05049 | EXT. DUSTY CROSSROADS - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): BRISKET, INSIDE, SADIE KROLL, CLETUS, MARSHAL REEVES, JOLENE
1 A ¶ A weathered truck painted "BEANS & BRISKET - SINCE YESTERDAY" squats in the sun.
2 A Heat shimmers.
3 A A line of two teenagers in cowboy hats waits at the window while a mangy dog sleeps under the awning.
4 A ¶ INSIDE, SADIE KROLL, 40s, cook, jaw like a knuckle, slaps patties on the flat-top.
5 A Her brother-in-law CLETUS, 50s, leans on the counter pretending to count money.
6 A At the window, a stranger in a long duster, MARSHAL REEVES, 60s, sets down his hat.
7 A And in the corner, her teenage niece JOLENE, 17, wipes a spoon and watches everything.
8 A ¶ CLOSE ON Reeves's badge, half hidden under the duster.
9 D REEVES: Two plates. And a word with Cletus.
10 D CLETUS (laughing too loud): Marshal! Long way from town.
11 D SADIE (not turning from the grill): He's not here for beans, Cletus.
12 A ¶ The dog LIFTS its head.
13 A A screen door SLAMS in the distance.
14 D REEVES (quietly): Where's the payroll box, Cletus?
15 A ¶ ANGLE ON Jolene's hand sliding a cleaver off the shelf.
16 D JOLENE: Uncle Cletus, he's got a warrant folded in his boot.
17 D CLETUS (whispering): Jolene, put that down.
18 D SADIE (spinning around with a spatula held like a pistol): Nobody's cutting anybody. Marshal, sit. Eat. Then we'll talk.
19 D REEVES (tipping his hat back, almost smiling): Sadie, you've never once made it easy.
20 A ¶ BACK TO SCENE: the two teenagers bolt, the dog barks, a plate of brisket hits the dirt, and somewhere in the truck a timer DINGS.

### SCENE s05088 | INT. LAKEVIEW BANQUET HALL - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, WAITER, TEENAGERS, NORA, CALLUM, DEVON, MARIN
1 A ¶ Streamers.
2 A Half-eaten cake.
3 A A DJ plays something slow to a nearly empty floor.
4 A A WAITER carries a tray of champagne flutes between tables.
5 A Two TEENAGERS in matching rented suits hide behind a pillar, sharing a vape.
6 A A small WHITE DOG in a bow tie trots under the head table, hunting for crumbs.
7 A ¶ At a corner table, NORA, 28, bridesmaid, grips her clutch.
8 A Across from her sits CALLUM, 30s, the groom's cousin, loosening his tie.
9 D NORA (low, smiling for the room): Don't look at the bar.
10 D CALLUM (looking at the bar): Which one is he?
11 D NORA (sips water): Grey suit. Left of the cake.
12 D CALLUM (squints): That's the best man.
13 D NORA: That's not the best man.
14 A ¶ A beat.
15 A The Waiter passes.
16 A Nora lifts a flute.
17 A Sets it down untouched.
18 A ¶ DEVON arrives, 30s, the real best man, grinning, a bit sweaty, and slides into the chair next to Callum.
19 D DEVON (clapping Callum on the shoulder): There you are! Where were you during the toast?
20 D CALLUM (stiff): Parking.
21 D DEVON (to Nora): And you owe me a dance.
22 D NORA (too bright): Later.
23 D DEVON (leaning in): You okay? You look pale.
24 D NORA (squeezing the clutch): Long day.
25 A ¶ The Dog yips under the table.
26 A One of the Teenagers giggles.
27 A The other shushes him.
28 A ¶ MARIN, 50s, the bride's mother in a silver dress, glides up behind them.
29 D MARIN (tapping Devon's arm): Dev, the photographer needs you. Now.
30 D DEVON (rising, to Callum): Don't leave. We're doing shots at midnight.
31 A ¶ He goes.
32 A Marin lingers, her eyes on Nora.
33 D MARIN (softly): He is lovely, isn't he?
34 D NORA (nodding, tight): Very.
35 D MARIN (turning to Callum): And you. You'll keep an eye on her?
36 D CALLUM (a beat): Yes, ma'am.
37 A ¶ Marin smiles and drifts away.
38 A Nora exhales.
39 A Callum turns to her.
40 D CALLUM [CONT'D] (whispering): Your clutch. What's in it?
41 D NORA (eyes on the dance floor): Not here.
42 A ¶ The DJ fades out the slow song.
43 A The room claps, thinly.
44 A The Waiter returns for the flute Nora never touched.
45 A She hands it to him with a smile that does not reach her eyes.

### SCENE s05036 | EXT. FISHING TRAWLER "MARGARET ANN" - DECK - NIGHT
Detected names (may be incomplete or contain aliases): SKIPPER BRODIE FENN, STRANGER, MARCUS, THE CREW
1 A ¶ A rusted forty-foot trawler wallows in black swell off the breakwater, nets heaped in wet coils, a single work lamp swinging on its cable.
2 A Diesel and salt in the air.
3 A ¶ SKIPPER BRODIE FENN, 50s, weathered, a gold tooth he shows when he lies, leans against the winch.
4 A Beside him stands a STRANGER in a clean dry anorak, far too neat for a boat, holding a tablet in a waterproof sleeve.
5 D STRANGER: You're the captain? I was told the catch would be on ice by midnight.
6 D BRODIE: Catch is in the hold. Ice is a figure of speech.
7 A ¶ The STRANGER taps the tablet.
8 A ¶ ON TABLET: UNIT 4 - HARBOUR CUSTOMS - INSPECTION 06:00 - CLEAR
9 D STRANGER: Customs clear at six. That gives us six hours to move forty crates of "cod" off this deck and into a van that does not officially exist.
10 D BRODIE (grinning, tooth flashing): And who might you be, friend, to know about vans?
11 A ¶ The STRANGER glances up, finally, and unzips the anorak.
12 A Underneath: a badge, a vest, a holstered sidearm.
13 D MARCUS: Detective Marcus Hale, Maritime Task Force. And I'd stop smiling.
14 D THE CREW [O.S.] (three voices, shouting, nearly overlapping): Cap'n! Cap'n, there's lights on the water!
15 A ¶ Searchlights sweep across the swell, white and enormous.
16 A A bullhorn crackles.
17 D MARCUS (into his collar): All units, this is Hale. Boarding in ninety seconds. Nobody leaves this deck.
18 D BRODIE (very quiet): You were on my boat for three weeks. You gutted my fish.
19 D MARCUS (beat): You make a lovely chowder, Skipper.
20 A ¶ The work lamp SWINGS and shatters against the winch.
21 A Darkness, then the harsh white of the searchlights on every face.

### SCENE s05150_2 | INT. UNIT 214 - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE WOMAN, TEENAGE BOY, TOBY
1 A ¶ Cardboard boxes.
2 A A rocking horse under a sheet.
3 A A dressing mirror turned to face the wall.
4 A Everything neat, too neat, like someone arranged it for a visit.
5 A ¶ She pulls a box open.
6 A Photographs.
7 A Her own face at ten years old, then at twelve, then at fourteen.
8 A Every one with the eyes scratched out.
9 D THE WOMAN (quiet): Okay.
10 A ¶ Behind her the corridor lights go out one by one, towards her.
11 A Click.
12 A Click.
13 A Click.
14 A ¶ A TEENAGE BOY, TOBY, 17, hi-vis vest two sizes too big, stands in the open doorway holding a torch.
15 D TOBY: Sorry! Sorry. Odell sent me. Said you might need a hand carrying.
16 D THE WOMAN: Carrying what.
17 D TOBY (looking past her): ...the mirror?
18 A ¶ She turns.
19 A The mirror is facing the room now.
20 A Nobody touched it.
21 A ¶ TIME CUT:

### SCENE s05058 | EXT. FISHING TRAWLER "MARGIT ANN" - DECK - DAWN
Detected names (may be incomplete or contain aliases): ANIKA, ROY, TEO
1 A ¶ Grey sea.
2 A Grey sky.
3 A Gulls wheel overhead.
4 A ¶ Two deckhands haul nets, whistling.
5 A A third coils rope and is bored out of his mind.
6 A Everything is fine.
7 A ¶ Captain Roy Dunmore, 50s, leans on the rail with a mug, watching the horizon.
8 A Beside him, Dr. Anika Rao, 30s, sits on an upturned crate, clipboard on her knee.
9 A She is the ship's medic by contract and by accident.
10 D ANIKA: Quietest trip I've had in months.
11 D ROY: Don't say that.
12 D ANIKA: Why not?
13 D ROY: You know why not.
14 A ¶ The deckhands laugh at something.
15 A A gull lands on the winch.
16 A ¶ WHAM.
17 A ¶ A net swings loose.
18 A It slams into the deckhand's back.
19 A He goes down hard.
20 A ¶ TEO, 20s, a deckhand, lies on the planks, face grey, one arm pinned.
21 D ANIKA: Don't move him!
22 D ROY: Get the line off him!
23 A ¶ The two deckhands scramble.
24 A The gulls scatter.
25 A Roy and Anika drop to their knees at the same time and almost collide.
26 D ANIKA: Teo. Teo, look at me. Can you feel your hands?
27 D TEO (strained): No.
28 D ANIKA: Okay. That's okay. Roy, I need the board and I need it flat.
29 D ROY: Board's in the wheelhouse. Two minutes.
30 D ANIKA: You don't have two minutes.
31 D ROY: Then tell me what to do.
32 D ANIKA: Hold his head. Gently. Like it's glass.
33 A ¶ Roy does.
34 A Anika's hands move fast, over the neck, the ribs, the pulse.
35 D TEO: Doc. Am I
36 D ANIKA: You're not going anywhere. I promise.
37 D ROY (low): You can't promise that.
38 D ANIKA: Watch me.
39 A ¶ This is the last time any of them will take the sea for granted.
40 A ¶ The deckhands return with the board.
41 A Together, they roll him.

### SCENE s05093 | INT. SUBBASS SOUND - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): LINUS, MO, WREN, DENISE, PRIYA
1 A ¶ CLOSE ON a mixing console, faders crawling up and down by themselves.
2 A Pull back to find Mo Delgado, 30s, producer, hoodie, three coffees deep, chewing a pen cap.
3 A ¶ Through the glass, in the vocal booth, Linus Thorne, 50s, a former one-hit wonder in a leather vest, stands before a mic with his eyes closed, singing very gently about a sandwich.
4 D LINUS [V.O.] (through talkback, sincere): "Oh, ham, you were never mine..."
5 A ¶ Mo presses the talkback button.
6 D MO: That's great, Linus. Another take. Maybe less ham.
7 A ¶ Wren Okoye, 20s, the engineer, slumped at the second chair with a laptop, doesn't look up.
8 D WREN (to the room): We've done forty-one takes.
9 D MO (muttering, to himself): Forty-two, with feeling. Forty-two.
10 A ¶ Mo's phone lights up on the desk.
11 A ¶ ANGLE ON PHONE SCREEN
12 A ¶ "LABEL - DENISE".
13 A ¶ Mo answers on speaker.
14 D DENISE [V.O.]: Mo. Tell me the single is done.
15 D MO: It's, uh, ripening.
16 D DENISE [V.O.]: It's a song about lunch meat. Is it done.
17 A ¶ Wren mouths "No" at the phone.
18 A Mo waves her off.
19 D MO (to everyone, bright): Okay team! Quick huddle, we're gonna just, vibe.
20 A ¶ Priya Ramanathan, 20s, the assistant, enters with a tray of tea, nods at nobody, sets it down, and sits.
21 A ¶ WE SEE Linus through the glass, tapping the window, mouthing something.
22 A Everyone ignores him.
23 D PRIYA (to Mo only): He's asking if the lunch meat is "emotionally honest" enough.
24 D MO (to Priya): Tell him it's the most honest ham I've ever heard.
25 A ¶ BACK TO SCENE
26 D WREN (to herself, typing): I'm updating my resume.
27 D DENISE [V.O.]: I heard that.
28 A ¶ Mo sinks into his chair.
29 A Nobody speaks.
30 A The faders keep creeping.
31 A Take forty-three begins, soft and sincere and terrible.

### SCENE s05153 | INT. NEXUS ARENA - FINALS STAGE - NIGHT
Detected names (may be incomplete or contain aliases): WREN, HALE, ADMIN, TEENAGE BOY, HAS JOINED, THE CROWD
1 A ¶ A packed esports arena.
2 A Strobing blue light.
3 A Two gaming rigs on a raised platform, a huge screen above.
4 A ¶ WREN, 20s, hoodie, headset around her neck, sits dead still.
5 A Her coach HALE, 50s, crouches beside her chair.
6 D ADMIN [V.O.] (over the PA): Match four, final round. Players, please confirm your connection.
7 A ¶ In the crowd, a TEENAGE BOY lowers his phone.
8 A An old SECURITY GUARD scans the aisles, bored.
9 A ¶ ANGLE ON THE SCREEN
10 A ¶ Wren's character, a knight, stands in an empty grey corridor.
11 A There is no opponent's name in the lobby.
12 A ¶ ON SCREEN: PLAYER 2 HAS JOINED (0 ms)
13 D HALE (quiet): Wren. Look at me.
14 D WREN: I'm looking at it.
15 D HALE: No. At me.
16 A ¶ She does. (beat)
17 D HALE [CONT'D]: Twelve years I've done this. I have seen every kind of cheat there is. Lag switches, ghost accounts, a kid who taped a second keyboard under his desk. And I've been telling you since the qualifiers that something is wrong, and you keep saying "it's just a bug." You're a better player than a bug.
18 D WREN: It is a bug.
19 D HALE (beat): Then why did it say your mother's name in the chat?
20 A ¶ CLOSE ON the chat window.
21 A A single line.
22 A ¶ ON SCREEN: > hello wren. you left the door open.
23 A ¶ Wren pulls her hands off the keyboard.
24 A Hale grabs the cable.
25 A The screen doesn't flicker.
26 A The game keeps playing without them.
27 D THE CROWD (chanting, rising): WREN! WREN! WREN!
28 A ¶ The teenage boy drops his drink.
29 A The guard turns, hand to his radio.
30 A ¶ WE SEE every monitor in the arena flip to the same grey corridor.
31 A The knight turns, slowly, to the camera.
32 D ADMIN [V.O.] (over the PA, strange, soft): Please remain seated. We are experiencing a technical difficulty.
33 D HALE: Get up. Wren. Get up.
34 D WREN (very calm): If I stand up it gets in here.
35 A ¶ BACK TO SCENE
36 A ¶ Hale stares at her.
37 A The strobes slow.
38 A Stop.
39 D THE CROWD (a whisper, all at once): Wren.
40 A ¶ The doors of the arena clank shut.
41 A Every single one.
42 A Wren pulls the headset onto her ears.
43 D WREN [CONT'D] (beat): Tell my mother I'm sorry about the name.
44 A ¶ She picks up the controller.
45 A The knight raises its sword.
46 D HALE: Don't.
47 A ¶ Everyone in the front row stands and sits down in unison.
48 T FADE OUT.

### SCENE s05103 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): MARGOT, THEO, DESMOND, TWINS, WARDEN, ODILE
1 A ¶ Dark.
2 A A storm presses on the window over the sink.
3 A One candle on the table, a battery lantern on the counter, a fridge that has stopped humming.
4 A ¶ MARGOT, 40s, stands at the counter slicing a loaf of bread with great care.
5 A THEO, 20s, they/them, sits at the table with their knees drawn up.
6 A DESMOND, 50s, Margot's husband, walks the room in his socks, trying every switch.
7 D DESMOND: Nothing. Not the stove, not the porch light, not even the little green clock on the microwave.
8 D MARGOT: It's a storm, Des. It will come back.
9 D DESMOND: It's the third time this month.
10 D MARGOT: Then it will come back a third time.
11 D THEO (beat): Can I say something and nobody does a face.
12 D MARGOT: We don't do faces.
13 D THEO: You are doing a face right now.
14 D MARGOT: That is my regular face.
15 A ¶ Desmond laughs.
16 A It dies in the dark.
17 A Thunder, far off, low and patient.
18 D DESMOND: Where are the girls?
19 D MARGOT: Upstairs. Playing the game where they don't sleep.
20 A ¶ Footsteps overhead.
21 A Then on the stairs.
22 A Then in the doorway stand THE TWINS, eight years old, identical, in matching pyjamas, each holding one end of a long silver thread that runs back into the dark of the hallway and does not appear to end.
23 D THE TWINS (together): Grandmother is here.
24 A ¶ Margot lowers the knife.
25 A Desmond turns the dead light switch again.
26 A Theo unfolds from the chair very slowly and puts themself between the table and the door, while the candle flame leans away from the hall as if it has been told a secret.
27 D MARGOT: Girls. Your grandmother died in March.
28 D THE TWINS (together): She says she's been delayed.
29 A ¶ Desmond's phone rings on the counter.
30 A Everyone looks at it.
31 A He answers on speaker and the voice is a man's, flat, official, tired.
32 D WARDEN [V.O.]: Mr. Hale? This is the Warden of the Third Gate. I'm sorry to call so late. Is Madam Odile with you yet?
33 D DESMOND: I'm sorry, who?
34 D WARDEN [V.O.]: She left the Gate at six. We've been trying to reach the family since. Please don't let her cross the threshold of your kitchen until the lamps are lit. She is not, strictly speaking, herself.
35 D THEO (beat): She's not what?
36 A ¶ The thread tightens.
37 A Out of the dark of the hallway steps ODILE, 70s, in a wet funeral coat, her eyes two small lit lanterns.
38 A She smiles at Margot with great tenderness.
39 D ODILE: Margot, my darling. You've cut the bread so thin. Did you know the lights go out when I'm near? I'd forgotten.
40 D MARGOT (very quietly): Mama.
41 D ODILE: Light one more candle for me. Only one more. And then we can talk about what you owe.
42 A ¶ Nobody moves.
43 A The candle gutters.
44 A Rain on the glass.
45 A The Twins hold their silver thread like a leash.

### SCENE s05144 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): JEN, BIG DAVE, MO
1 A ¶ Plastic chairs bolted in rows.
2 A A water cooler gurgles.
3 A Behind the glass, a clerk types, never looking up.
4 A ¶ Big Dave, 50s, broad, in a suit that fits like it was lent to him, sits with his hands folded.
5 A Beside him, Jen Park, 40s, parole officer, flips through a file with her thumb.
6 D JEN (to the room, not looking up): Everybody sign the sheet. Even if you've signed it before. Especially if you've signed it before.
7 A ¶ Two teenagers by the vending machine laugh at something on a phone.
8 A A man with a toddler on his knee shushes the child, who cries anyway.
9 D BIG DAVE (standing, to Jen): I've been out eleven months. I've been on time every Tuesday. Every Tuesday, Jen.
10 D JEN (beat): I know.
11 D BIG DAVE (quieter): Then why am I looking at a new condition on my own paper?
12 D JEN (closing the file): Dave. Sit.
13 D BIG DAVE (not sitting): I did what you said. I took the job. I stayed at Mo's place. I stayed away from the old crowd.
14 A ¶ Mo, 30s, in the next chair over with a hi-vis vest in her lap, stares at the floor.
15 D MO (muttering): Don't drag me into this.
16 D BIG DAVE (to Mo): You're the one who said they'd write the letter.
17 D MO (to nobody): I said I'd think about it.
18 D JEN (to the whole room): Folks, give us a minute. Please.
19 A ¶ The two teenagers drift off down the hall.
20 A The man with the toddler picks up the child and leaves.
21 A The clerk behind the glass finally looks up.
22 D BIG DAVE (beat): You want to tell me who made the call?
23 D JEN (firmly): No.
24 D BIG DAVE (louder): Somebody called. Somebody told you where I was on the fourteenth.
25 D JEN (rising): Dave, I can't discuss it here.
26 D BIG DAVE (lunges across the chair): Then where?
27 A ¶ Jen and Big Dave collide and both stumble into the water cooler.
28 A The jug SLOSHES and tips.
29 A Mo jumps up and the three of them freeze.
30 D MO (very quietly): It was me.
31 A ¶ Silence.
32 A The cooler glugs once, and stops.
33 D BIG DAVE (beat): Say that again.
34 D MO (to Jen): You said if I told you, he would only get a warning.
35 D JEN (to herself): God help me.
36 A ¶ Big Dave sits.
37 A Slowly, like a man lowering something heavy.
38 A The clerk behind the glass quietly turns off her screen.

### SCENE s05181 | INT. ST. ALDWYN'S HOSPITAL - MAIN CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL VEGA, PHONE, HELEN TEAGUE, BRAM OKONKWO, JUNO
1 A ¶ Victorian brick.
2 A Gas-lamp fittings bolted to bare wiring.
3 A Long and green and empty.
4 A ¶ Rain hammers the tall windows.
5 A ¶ Wind HOWLS through a cracked pane.
6 A ¶ MARISOL VEGA, 30s, night nurse, pushes a squeaking cart.
7 A Her badge swings.
8 A Her eyes don't.
9 A ¶ ON PHONE (TEXT): where r u
10 A ¶ She doesn't answer.
11 A Pockets it.
12 A ¶ DR. HELEN TEAGUE, 50s, surgeon, strides out of the stairwell.
13 A Coat open.
14 A Coffee in a shaking fist.
15 D TEAGUE: You're late with the rounds.
16 D MARISOL: You're early for the shift.
17 A ¶ Teague shrugs.
18 A Drinks.
19 A ¶ The radiators CLANK.
20 A Pipes GROAN.
21 A A lamp flickers.
22 A ¶ Overhead, thunder ROLLS across the roof like furniture.
23 A ¶ BRAM OKONKWO, 20s, orderly, jogs in from the east wing.
24 A Wet sneakers.
25 A Wide eyes.
26 D BRAM: Ward Six. Bed nine. He's gone.
27 D TEAGUE: Gone how?
28 D BRAM: Gone gone. Bed's empty. Window's open.
29 A ¶ Marisol and Teague trade a look.
30 A She nods.
31 A She nods.
32 A ¶ Marisol's phone BUZZES.
33 A ¶ ON PHONE (TEXT): pick up. now.
34 A ¶ She answers.
35 A Speaker on.
36 D JUNO [V.O.] (filtered, tinny): Marisol, tell me you're still in the building.
37 D MARISOL: I'm in the corridor. With Teague.
38 D JUNO [V.O.]: Is she wearing the grey coat?
39 A ¶ Marisol looks.
40 A Teague looks down at her coat.
41 A Grey.
42 D MARISOL: Yes.
43 D JUNO [V.O.]: Then walk away from her. Slowly.
44 A ¶ Teague sets her coffee down.
45 A Slowly.
46 D TEAGUE: Who is that?
47 D MARISOL: Nobody.
48 A ¶ Pipes CLANK.
49 A The lamp DIES.
50 A Rain.
51 A Dark.
52 A A single emergency bulb hums red.
53 A ¶ Bram steps back.
54 A Teague steps forward.
55 A Marisol steps between.
56 D BRAM: Somebody tell me what's happening.
57 A ¶ Nobody does.

### SCENE s05060 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, MO, TAMSIN
1 A ¶ The Corolla smells of pine air freshener and old fries.
2 A The dashboard clock says 2:04 and the wipers drag across a windshield that is barely wet, a drizzle that cant decide to become rain.
3 A Mo has been driving eleven hours.
4 A He keeps the radio low, some call-in show about gardening, because silence in this car has a way of getting loud.
5 A ¶ The back door opens.
6 A A woman folds herself into the seat behind him with a duffel bag held against her chest like something that might be taken from her.
7 A She does not say hello.
8 A She is maybe forty, her coat is too light for the season, and there is a smear of dried mascara she hasnt noticed or has stopped caring about.
9 D THE WOMAN: Fourteen Alder Court.
10 D MO: That's what the app says. You're, uh, Rhea?
11 D THE WOMAN: Whatever it says.
12 A ¶ He checks the mirror.
13 A She is looking out of the window at nothing, at the shuttered laundromat and the one bright gas station, and he recognises the look, he has seen it on fathers outside delivery rooms and on men outside courtrooms.
14 A It is the look of someone rehearsing.
15 A ¶ He pulls out.
16 A The gardening show talks about slugs.
17 D MO: Long night?
18 D THE WOMAN: Don't do that.
19 D MO: Do what?
20 D THE WOMAN: The thing where you're nice so I'll talk. I'm paying for a ride. Not a conversation.
21 A ¶ He lets that sit.
22 A In the mirror her jaw works.
23 A She unzips the duffel an inch, looks inside, zips it again.
24 A It is a small movement and he files it away the way he files away everything, the plates that linger behind him, the bars that empty out at the wrong time.
25 A Twelve years of this has made him a reluctant expert in other peoples bad nights.
26 D MO: Okay. Radio's yours if you want it.
27 A ¶ She doesn't want it.
28 A The car rolls under a yellow light that blinks and blinks for no one.
29 D THE WOMAN: Is it far? From here.
30 D MO: Nine minutes. Maybe ten.
31 D THE WOMAN: Can you make it twelve.
32 A ¶ He glances back.
33 A She holds his eyes in the mirror for the first time and there is something so naked in it that he looks away first.
34 D MO: I can drive slow.
35 D THE WOMAN: Thank you.
36 A ¶ He takes the long way along the river road.
37 A Black water to the left, the shapes of warehouses to the right.
38 A She counts something under her breath, streetlights maybe, or the days.
39 A He cannot tell.
40 D MO: My daughter's about your age. Well. Younger. Twenty-six.
41 D THE WOMAN: I said not a conversation.
42 D MO: You did. Sorry.
43 D THE WOMAN: Does she call you?
44 A ¶ He doesnt answer right away.
45 A His thumb taps the wheel.
46 D MO: Sundays. Mostly.
47 D THE WOMAN: Mostly.
48 D MO: Mostly.
49 A ¶ She nods slowly, as if he has confirmed a theory.
50 A Then her phone lights up in her lap and she flinches like it burned her.
51 A She turns it face down.
52 A It lights up again through her fingers, a pale glow around the edges of her hand, and again, and she presses her whole palm over it.
53 D MO [CONT'D]: You can pick up. I don't mind.
54 D THE WOMAN: It's my brother.
55 D MO: Bad news kind of brother?
56 D THE WOMAN: The kind that's right.
57 A ¶ That lands somewhere in him.
58 A He slows for no reason at an empty crosswalk.
59 D THE WOMAN [CONT'D]: He said don't come. He said she wouldn't want it. Our mother. That after nine years she's not going to want me standing in her hallway at two in the morning with a bag.
60 D MO: Is that what's in the bag?
61 D THE WOMAN: Her things. What I took. I took a lot.
62 A ¶ He nods like he understands, and it surprises him to find that he does, a little, that there is a version of him in a different car on a different night carrying a different bag up a different driveway.
63 A ¶ The phone buzzes again.
64 A She finally turns it over and reads and her face does something complicated.
65 D THE WOMAN [CONT'D]: He says the porch light's on.
66 D MO: Is that good?
67 D THE WOMAN: She leaves it on every night. He says she always has. Since I left.
68 A ¶ She laughs, one cracked note, and then she is crying, quietly and efficiently, the way people cry who have practiced it alone in cars.
69 A He keeps his eyes on the road.
70 A He reaches across and pulls a napkin from the glovebox without looking and holds it back between the seats.
71 A She takes it.
72 D THE WOMAN [CONT'D]: Rhea's not my name. It's my sisters. I use hers on the app.
73 D MO: Okay.
74 D THE WOMAN: It's Tamsin. I'm Tamsin.
75 D MO: I'm Mo.
76 D TAMSIN: I know. It says on the app. Your picture's older than you.
77 D MO: It's from a better year.
78 A ¶ She almost smiles.
79 A The river road bends away from the water and the houses start, porch after porch, dark windows and sleeping cars.
80 A Alder Court is two turns ahead and they both know it.
81 A He takes the first turn very slowly.
82 D TAMSIN: What if I get out and I can't walk to the door.
83 D MO: Then you sit in the car a while. The meter's not running. I'll say it's broke.
84 D TAMSIN: Is it broke?
85 D MO: It's whatever you need it to be.
86 A ¶ He turns onto Alder Court.
87 A Number fourteen is a narrow house with green shutters and, over the door, a single yellow bulb, burning, with moths turning around it like slow thoughts.
88 A He stops the car a little short of it and puts it in park.
89 A The engine ticks.
90 A The gardening man says goodnight.
91 A ¶ She does not move.
92 A He does not make her.
93 A Her hand finds the door handle and rests there, and for a long time that is all that happens in the car, two people and a yellow light, until upstairs in the house a curtain shifts.
94 D TAMSIN: Oh god. She's up.
95 D MO: Maybe she never went to bed.
96 A ¶ Tamsin picks up the duffel.
97 A Her hands are shaking so badly the zipper rattles.
98 A She opens the door and the cold comes in and the drizzle, finally, begins to be rain.
99 D TAMSIN: Wait here? Just till I'm inside.
100 D MO: I'll wait till the light goes off. Or you tell me to go.
101 A ¶ She steps out.
102 A She looks at the house.
103 A Then she leans back down to the window, rain on her face, and for a second she looks about twenty, a girl in a doorway of her own making.
104 D TAMSIN: Five stars.
105 D MO: Go on.
106 A ¶ She goes up the path.
107 A The front door opens before she reaches it and a small gray figure stands in the yellow light with one hand over her mouth, and Mo, who has seen a lot of doors, looks away to give them the dignity of it, and turns the radio off.

### SCENE s05054 | EXT. HARBOUR PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): METAPHOR, TESS, RILEY, ABE, NOOR, WAILS, RADIO, GIL
1 A ¶ Crowd.
2 A Cardboard signs.
3 A A drum somewhere.
4 A ¶ Riley, 20s, in a thrifted raincoat, is holding a sign that says THE SEA IS NOT A METAPHOR.
5 A She is also holding two coffees.
6 A ¶ Tess, 30s, arrives, out of breath, with a tote bag.
7 D TESS: sorry sorry, the train was
8 D RILEY: it's fine. you're here.
9 A ¶ Tess takes the coffee.
10 A They stand there.
11 A The drum gets louder.
12 A ¶ Abe, 60s, in a lab coat under a puffer jacket, pushes through with a megaphone he doesn't know how to hold.
13 D ABE: is this thing on? it's not on.
14 D TESS: it's the red button.
15 D ABE: which one's the red button.
16 A ¶ Noor, 19, climbs onto a bench.
17 A Everyone looks up.
18 A Nothing.
19 D NOOR (to the crowd): hey. hi. so. we're like, two hundred people, and the thing behind us
20 A ¶ She points.
21 A The harbour.
22 A The water has pulled back, way too far.
23 A ¶ Silence.
24 D RILEY (muttered): okay that's new.
25 A ¶ A horn BLARES from the ferry terminal.
26 A A siren WAILS, thin and far away.
27 D RADIO [V.O.] (from Gil's handheld, crackling): all units, all units, tide gauges are reading minus four, I repeat, minus four
28 A ¶ Gil, 40s, an event steward in a hi-vis vest, jogs over, radio to his ear.
29 D GIL: okay folks, so, quick thing, we're gonna move uphill. calmly.
30 D ABE (into the megaphone, finally working): EVERYONE PLEASE MOVE UPHILL.
31 D TESS (to Riley, quiet): this is the thing we put on the signs.
32 D RILEY: yeah.
33 D NOOR (from the bench, calling out): GIL, WHICH WAY IS UPHILL?
34 D GIL: that way! the library!
35 A ¶ The crowd starts to move.
36 A Signs drop.
37 A The drum stops mid-beat.
38 A ¶ Rain.
39 A A single raindrop on a sign.
40 D RILEY (to herself): okay okay okay.
41 A ¶ She takes Tess's hand.
42 A They run.

### SCENE s05150_1 | INT. STORAGE FACILITY - CORRIDOR C - CONTINUOUS
Detected names (may be incomplete or contain aliases): INTERCOM, THE WOMAN, ODELL
1 A ¶ She stops at Unit 214.
2 A A padlock the size of her fist.
3 A She sets down the bag.
4 D INTERCOM [V.O.] (crackling): Unit two fourteen is on the lease til the end of the month ma'am. Just so you know.
5 A ¶ The woman looks up at a small speaker grille above the door.
6 D THE WOMAN: You're still here. Its past midnight.
7 D ODELL [V.O.]: Night manager. Odell. I do the walkthroughs whether anyone's here or not.
8 A ¶ MONTAGE - THE LOCK
9 A ¶ -- Bolt cutters.
10 A Jaws bite.
11 A Nothing.
12 A ¶ -- Bolt cutters again.
13 A A SNAP.
14 A The padlock drops.
15 A ¶ -- Rain.
16 A Rain.
17 A A drip falling from a pipe into a bucket somewhere far off.
18 A ¶ -- The door rattles upward on its track.
19 A Cold air rolls out.
