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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00028.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05157 | INT. LINCOLN HIGH SCHOOL - GIRLS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): NADIA, PHONE, KOFI, LUCAS, MS. BRANDT, JUNIORS
1 A ¶ SUPER: "DAY 11 OF THE SIEGE"
2 A ¶ Cracked tile.
3 A A mirror with one long diagonal fracture.
4 A Dust sifts from the ceiling with every distant THUMP.
5 A ¶ Outside, beyond the frosted window, smoke.
6 A Somewhere a siren winds down and stops.
7 A ¶ NADIA, 17, backpack on her chest, crouches in the end stall with her knees pulled up.
8 A She counts under her breath.
9 A ¶ ON PHONE (TEXT FROM MOM): where r u
10 A ¶ ON PHONE (TEXT FROM MOM): please
11 A ¶ No bars.
12 A The message sits there, sending.
13 A ¶ CLOSE ON the phone's battery icon.
14 A 4%.
15 A ¶ The door SLAMS open.
16 A Nadia flinches.
17 A KOFI, 17, flashlight clipped to his collar, pushes in backwards, dragging LUCAS, 16, who is limping, by the strap of his bag.
18 A Kofi kicks the door shut and wedges a mop handle under the knob.
19 D KOFI (whispering): Girls' bathroom. Seriously?
20 D LUCAS: It was the only one with a lock.
21 A ¶ Silence.
22 A ¶ A drip.
23 A A fan that doesn't turn.
24 D NADIA (from the stall): It doesn't have a lock.
25 A ¶ Kofi spins, flashlight up.
26 A Nadia opens the stall door an inch.
27 A She lowers her phone.
28 D KOFI: Nadia?
29 D NADIA: Put the light down.
30 A ¶ He lowers it.
31 A Lucas slumps against the sinks and slides to the floor, wincing.
32 A ¶ INSERT - LUCAS'S ANKLE.
33 A Swollen, black at the edges.
34 A ¶ The wall behind them SHUDDERS.
35 A Plaster falls.
36 A A long, low rumble passes through the floor, and the three of them freeze at once, hands on whatever is nearest, until it passes.
37 A ¶ Dust.
38 A Ringing.
39 A Nothing.
40 D MS. BRANDT [O.S.] (through the door, muffled): Is anyone in there?
41 A ¶ All three look at each other.
42 A Kofi holds a finger to his lips and mouths NO. Nadia nods.
43 D MS. BRANDT [O.S., CONT'D]: It's Ms. Brandt. I can hear you breathing. Let me in.
44 D LUCAS (mouthing): It's a trick.
45 D NADIA (whispering): It's not a trick. It's Brandt.
46 D KOFI (whispering): Brandt left on the first bus.
47 A ¶ Silence.
48 A The handle turns.
49 A Stops against the mop.
50 A ¶ On the floor, light spills from under the door in a slow, even sweep.
51 A Something glides past outside, and then another, and a third.
52 A ¶ THE JUNIORS, a dozen kids in the corridor, press flat to the wall, quiet as shadows, led by a hand-sign nobody dares to say aloud.
53 A They pass the door.
54 A They are gone.
55 A ¶ ON PHONE (TEXT FROM MOM): I love you. whatever happens
56 A ¶ Nadia reads it.
57 A She doesn't type back.
58 A She presses the phone to her chest.
59 A ¶ Kofi crawls to the door, listens, lets out a long breath.
60 A Lucas grabs his sleeve.
61 D LUCAS: Don't open it.
62 D KOFI: I'm not opening it.
63 D NADIA (quiet, cold): Then why are you still touching the mop?
64 A ¶ He looks down.
65 A His hand is on the handle.
66 A He pulls it back.
67 D MS. BRANDT [O.S.] (close now, right behind the door): Last chance, kids. They are coming through the east wing.
68 A ¶ The lights flicker.
69 A The mirror finishes cracking.
70 A A long, thin piece falls and shatters in the sink.
71 A ¶ Then a loud, clear BANG from the corridor, and every one of them dives under the sinks, arms over each other, as the door rattles and the mop handle holds.
72 A ¶ Smoke curls under the door.
73 A ¶ Nobody moves.
74 A ¶ Nobody speaks.
75 A ¶ Nothing.
76 A ¶ Nadia's phone buzzes.
77 A She does not look.
78 A ¶ ON PHONE (TEXT FROM MOM): I'm coming

### SCENE s05158 | EXT. BORDER CHECKPOINT - DAWN
Detected names (may be incomplete or contain aliases): OKONKWO, GRIEVE, HOBBS, VANE, LENA
1 A ¶ Mist on a concrete lane.
2 A A barrier arm, striped red and white.
3 A A kiosk with one lit window.
4 A ¶ Grieve, 50s, border officer, tired, holds a clipboard against the cold.
5 A Opposite him stands Okonkwo, 40s, a solicitor in a sodden trenchcoat, a briefcase at her feet.
6 A Behind her in the car, Tomasz, 30s, and a small girl, Lena, 6, asleep on his shoulder.
7 A ¶ INSERT - THE PASSPORT.
8 A The photograph does not match the face in the car.
9 A ¶ Silence.
10 A ¶ Hobbs, 30s, a sergeant, appears in the kiosk window with a phone to his ear.
11 D OKONKWO: I've been very patient, Officer Grieve. I've been patient since four this morning. I would like to remind you that my client has a hearing at ten in Rotterdam, that the girl has a right to be with her father, and that the paperwork you are holding is, quite frankly, immaculate.
12 D GRIEVE: It is immaculate. That's what bothers me.
13 D OKONKWO: Is that a legal objection?
14 D GRIEVE: It's an observation.
15 D OKONKWO: Then you'll understand if I write it down.
16 D GRIEVE: Please do. Spell it with a "k."
17 D OKONKWO (beat): That's not funny.
18 D GRIEVE: It wasn't meant to be.
19 D HOBBS (on the phone, from the kiosk): Sir, I've got the Home Office on the line. They say the order's been revoked.
20 A ¶ Grieve doesn't turn.
21 D GRIEVE: Revoked when?
22 D VANE [V.O.] (on the phone, tinny, crisp): Eleven fifty-two last night, Mr Grieve. Mr Vane, Asylum Casework. Your man isn't who he says he is, and neither, I'm afraid, is she.
23 A ¶ CLOSE ON Okonkwo.
24 A Her face doesn't move.
25 A Her hand goes to the briefcase.
26 D OKONKWO (very quietly): I think we should all take a breath.
27 A ¶ The girl wakes.
28 A Looks at the officers.
29 A Looks at Okonkwo.
30 D LENA: Mummy?
31 A ¶ Grieve looks at Okonkwo.
32 A Then he looks at the barrier arm, and he drops the clipboard.
33 A ¶ BACK TO SCENE.

### SCENE s05159_0 | INT. HOPE VALLEY FERTILITY CLINIC - WAITING ROOM - MORNING
Detected names (may be incomplete or contain aliases): BETH, CAL, INTERCOM
1 A ¶ We see a bright, quiet waiting room.
2 A Pale green walls.
3 A A fish tank bubbling in the corner.
4 A A rack of old magazines no one has touched.
5 A Sunlight comes through the blinds in thin stripes.
6 A ¶ CLOSE ON a wall clock.
7 A It reads 9:02.
8 A ¶ BETH, 30s, nervous, in a yellow cardigan, sits on the edge of a chair, twisting a tissue.
9 A Next to her is CAL, 30s, tall, dressed too neatly, holding a folder of forms.
10 D CAL (smiling too hard, patting her knee): It's going to be great.
11 D BETH (whispering): You said that about the camping trip.
12 D CAL (a beat): Okay, that was a different kind of great.
13 A ¶ The fish tank bubbles.
14 A A little orange fish swims in a circle.
15 A Beth watches it as if it knows something.
16 D INTERCOM [V.O.]: Beth and Cal Whitaker, Dr. Okafor will see you now. Room three, please.
17 D BETH (standing, dropping the tissue): Oh gosh. That's us. That's definitely us.
18 D CAL (picking it up, handing it back): It's us. Breathe.

### SCENE s05159_1 | INT. DR. OKAFOR'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): OKAFOR, BETH, CAL, ^CAL, TINA
1 A ¶ A warm room.
2 A Diplomas on the wall.
3 A A box of tissues, strategically placed.
4 A A model of a uterus on the desk that Cal keeps looking at, then looking away from.
5 A ¶ DR. OKAFOR, 50s, kind eyes, silver glasses, stands to greet them.
6 D DR. OKAFOR (shaking Beth's hand, then Cal's): Please, sit. I'm Dr. Okafor. I've read your file. How are you feeling?
7 D BETH (sitting, folding her hands): Fine! Good. Super.
8 D CAL (sitting, crossing his legs, then uncrossing): Fantastic. Never better.
9 D DR. OKAFOR (gently, with a small smile): You're both very brave to be here.
10 D BETH (laughing, nervous): We are not. We are very afraid.
11 D CAL (nodding hard): We're terrified.
12 A ¶ Both speak at once.
13 D BETH: It's been three years.
14 D ^CAL: It's been three years.
15 A ¶ They look at each other.
16 A The room goes quiet for a second.
17 D DR. OKAFOR (taking off her glasses): That is a long time to hope.
18 A ¶ Beth's face crumples a little.
19 A Cal takes her hand, and she lets him.
20 D BETH (wiping her eye): Sorry. I told myself I wouldn't do this.
21 D DR. OKAFOR (sliding the tissue box across): Everyone does. It's one of the reasons I keep a big box.
22 A ¶ The door opens a crack.
23 A TINA, 20s, a nurse in cartoon scrubs, leans in.
24 D TINA (whispering, apologetic): Doctor, I'm so sorry. The lab is on the phone.
25 D DR. OKAFOR (to the couple): Excuse me one moment.
26 A ¶ She picks up the desk phone.
27 A We hear a faint voice through it.
28 D TINA [V.O.] (through the phone, tinny): It's about the samples from last week, Doctor. They've come back.
29 D DR. OKAFOR (listening, her face changing; beat): Thank you, Tina. I'll tell them myself.
30 A ¶ She puts the phone down very slowly.
31 A Beth grips Cal's hand so hard his fingers go white.
32 D BETH (very small): Is it bad?
33 D DR. OKAFOR (smiling, for the first time all morning): Beth. Cal. I think you should both take a deep breath.
34 A ¶ Outside, the fish swims once around the tank and stops.
35 A The light in the blinds turns gold.
36 D CAL (breathless): Is that a yes?
37 D DR. OKAFOR (nodding): It's a yes.
38 A ¶ Beth bursts into tears.
39 A Cal laughs, jumps up, knocks over the model on the desk, and catches it in the air.
40 D CAL [CONT'D] (holding it up like a trophy): Sorry! I got it! I got it!
41 D BETH (laughing through tears): Cal, sit DOWN.
42 A ¶ He sits.
43 A They hold each other.
44 A Dr. Okafor looks away to give them privacy and quietly dabs her own eyes.
45 A ¶ Sunlight.
46 A Quiet.
47 A Somewhere, a baby cries in another room and everyone smiles.

### SCENE s05160 | INT. NORTHSIDE SOUND - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER, OSEI, MARGUERITE
1 A ¶ ON CAMERA: handheld, shaky, a red REC dot in the corner.
2 A The mic stand fills the frame, then swings toward JUNIPER, 19, headphones around their neck, staring at a lyric sheet.
3 D JUNIPER (to camera): This is take nineteen. They said twelve was fine. I said twelve was fine.
4 D OSEI [O.S.]: Twelve was not fine.
5 A ¶ The camera whips left.
6 A OSEI, 20s, engineer, hunched at the glass of the control room.
7 A A studio dog sleeps under his chair.
8 A A pizza guy hovers at the door with two boxes, unsure whether to knock.
9 D OSEI [CONT'D]: You rushed the bridge.
10 D JUNIPER: I didn't rush -- they're the one who
11 D OSEI: -- you came in early on "stay" --
12 D JUNIPER: -- because the click track is wrong, Osei, it's wrong, I told you --
13 A ¶ A phone BUZZES on the console.
14 A Osei thumbs it.
15 A Speaker.
16 D MARGUERITE [V.O.] (tinny, over the phone): Hi, babe, is it done? The label guy is asking.
17 D JUNIPER: He's asking?
18 D OSEI: Marguerite, not now --
19 D MARGUERITE [V.O.]: -- he wants the single Friday, Juniper, they have a slot, and you promised --
20 D JUNIPER: I never promised! You promised! You said I'd get to say when it's done!
21 A ¶ Juniper rips the headphones off and hurls them.
22 A They CRACK against the glass.
23 A The dog bolts.
24 A The pizza guy backs out.
25 A The camera drops, tilts, catches the ceiling tiles, and cuts to black.

### SCENE s05161 | INT. SWIFTLINE DELIVERY WAREHOUSE - MORNING
Detected names (may be incomplete or contain aliases): BARRY, NADINE, ROBIN, DO NOT
1 A ¶ We see a huge warehouse with many shelves and conveyor belts.
2 A Its early morning and the lights are still turning on one by one.
3 A BARRY, 40s, a shift supervisor who thinks he is very important, walks in carrying a coffee and a clipboard.
4 A ¶ CLOSE ON Barry's name tag, which says "BARRY - SUPERVISOR" in big letters.
5 D BARRY: Good morning team! Big day today!
6 A ¶ Nobody answers.
7 A We see NADINE, 30s, tired, sitting on a pallet jack eating a granola bar, and ROBIN, 20s, who uses they/them pronouns, scrolling on their phone near the sorting belt.
8 D NADINE: Its 6 AM Barry.
9 D BARRY: And whats that mean? It means the early bird gets the worm!
10 D ROBIN (muttering to self): I dont even like worms.
11 D BARRY: What was that Robin?
12 D ROBIN: Nothing. Good morning.
13 A ¶ Barry nods happily and puts his coffee down on a stack of boxes marked FRAGILE, then walks to the control panel and presses a green button and the belt starts to move slowly, and Nadine stands up and stretches while Robin puts their phone in their pocket and walks to the end of the belt and picks up the first package, and Barry checks his clipboard and looks very pleased with himself while a forklift beeps somewhere far away.
14 D BARRY (to everyone): Okay everybody listen up. Today is a normal day. Nothing special. Just normal packages, normal routes, normal everything.
15 D NADINE: You said normal three times.
16 D BARRY: Because its normal!
17 A ¶ Nadine looks at Robin.
18 A Robin looks at Nadine.
19 A They both look at Barry.
20 D ROBIN (quietly, to Nadine): He's lying about something.
21 D NADINE (quietly): Obviously.
22 A ¶ We see the belt carry a small brown box down the line.
23 A It is the only box that is not scanned by the machine.
24 A CLOSE ON the box.
25 A It has a red sticker that says "DO NOT OPEN - PRIVATE".
26 D NADINE [CONT'D] (reading the label): Barry what is this?
27 D BARRY (too fast): Its nothing. Just a regular box. Put it back.
28 D ROBIN: It doesnt have a barcode.
29 D BARRY: Some boxes dont have barcodes Robin that is a known thing.
30 A ¶ Robin lifts the box off the belt.
31 A It is light.
32 A Something inside RATTLES softly.
33 A Barry's face goes white and he drops his clipboard, which CLATTERS on the concrete floor.
34 D NADINE (to herself): Oh no. He's sweating.
35 D BARRY: Please put it down. Please. Both of you.
36 D ROBIN (to the room): Is it a bomb?
37 D BARRY: Its not a bomb!
38 D NADINE: Then open it.
39 D BARRY: I cant let you open it!
40 A ¶ Nadine takes the box from Robin and in one move she tears the red sticker and rips the tape.
41 A Robin leans in, Barry covers his eyes with both hands, and a forklift driver in the distance honks twice for no reason.
42 A ¶ CLOSE ON the open box.
43 A Inside are forty-two tiny bottles of hotel shampoo, six stolen name tags from other supervisors, and a laminated sign that says "WORLDS BEST BOSS".
44 A ¶ Silence.
45 D NADINE: These are the name tags from Dayton.
46 D ROBIN: Barry. Did you make yourself an award?
47 D BARRY (small voice): It was going to be a surprise.
48 D NADINE: For who?
49 D BARRY: For me. At the Friday meeting. I was going to have you all give it to me.
50 D ROBIN (to Nadine): I want to be mad but I'm mostly impressed.
51 D NADINE (to the group of the whole warehouse, shouting): Hey everybody! Barry made himself an award!
52 A ¶ From far away in the building we hear a slow, growing round of applause, and a lone forklift honks.
53 A Barry sits down on the pallet jack and puts his face in his hands.
54 D BARRY (muffled): Can I at least keep the shampoo.
55 A ¶ Nadine tosses him one small bottle.
56 A Robin sets the laminated sign on top of Barry's head like a crown.
57 D ROBIN: Congratulations boss.

### SCENE s05162 | EXT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): HALE, BRANDT
1 A ¶ Detective Annika Brandt, 40s, sits at the far end of the bar with a club soda and a view of the elevator.
2 A She keeps her jacket on.
3 A Under it, a wire taped below the ribs.
4 A Her phone sits face up beside the glass.
5 A ¶ The phone BUZZES.
6 A She lets it ring twice, then answers and puts it to her ear.
7 D HALE [V.O.]: Tell me you're up there.
8 D BRANDT: Corner. By the heater. Where are you?
9 D HALE [V.O.]: Parking structure. Level three. I'm giving it five minutes.
10 D BRANDT: Five minutes is fine.
11 D HALE [V.O.]: You come alone?
12 D BRANDT: You asked me to.
13 A ¶ The line goes quiet.
14 A Wind snaps a string of lights overhead.
15 A She watches the elevator numbers climb on the display, 2, 3, 4, and her thumb goes still on the glass.
16 D BRANDT [CONT'D]: Hale. Level three. You said that already?
17 D HALE [V.O.]: Yeah. Why?
18 D BRANDT: No reason. Come on up.
19 A ¶ She ends the call.
20 A The phone lights.
21 A ¶ ON PHONE: unknown number -- "ur not alone up there"
22 A ¶ She reads it once.
23 A She does not look around.
24 A She sets the phone face down and slides a hand into her jacket, thumbs the transmitter.
25 D BRANDT [CONT'D] (low, to the wire): Unit two, confirm the garage camera. Level three. Is anyone there?
26 A ¶ A beat.
27 A Nothing in the earpiece.
28 A Static, then a CLICK.
29 A ¶ The elevator DINGS.
30 A Tomasz Hale, 50s, rumpled suit, steps out and scans the roof.
31 A He sees her, hesitates, then crosses to the stool beside hers.
32 A He sits too carefully, as though the cushion might be wired.
33 D HALE: You look like a cop.
34 D BRANDT: You look like a man who's late.
35 D HALE: I wasn't in the garage.
36 A ¶ She turns her head.
37 D BRANDT: Say that again.
38 D HALE: I took the stairs. I was on the stairs the whole time. The call, it wasn't me calling.
39 A ¶ Her phone BUZZES against the bar.
40 A She doesn't touch it.
41 A He nods at it.
42 D HALE [CONT'D]: That's him. He's got my phone. He's got my kid's school schedule too, Detective, that was the part I couldn't, I had to come.
43 D BRANDT: Who has your phone?
44 D HALE: The man at the table behind you. Blue shirt. Don't turn around.
45 A ¶ The ice in her glass shifts.
46 A Somewhere behind her a chair scrapes.
47 A ¶ ON PHONE: unknown number -- "good. now both of u stand up"
48 D BRANDT (barely moving): How long has he been sitting there?
49 D HALE: Since before I got here. He walked me up.
50 D BRANDT: And the garage?
51 D HALE: There's no one in the garage. There's never been anyone. He wanted you to say it out loud.
52 A ¶ She exhales.
53 A Her hand comes out of the jacket empty.
54 A Behind her, a glass is set down, softly, and a shadow lengthens across the bar top.
55 D BRANDT: Then he's already heard everything.
56 D HALE: Every word.
57 A ¶ The phone BUZZES a third time.
58 A Neither of them looks at it.
59 A She slides off the stool, standing straight, still not turning around.
60 A He stays seated, staring into his lap.
61 D BRANDT (quietly): Stay seated, Tomasz. Whatever happens next, you stay in that chair.
62 D HALE: What are you going to do?
63 A ¶ She lifts the wire's transmitter out from under her shirt in plain view and lays it on the bar.
64 D BRANDT: Say hello.
65 A ¶ She turns around.

### SCENE s05164 | INT. NIGHT BUS 41 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): MIRA CALLING, HOODIE GUY, TEODOR
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- Rain on the window.
3 A City lights smear into gold stripes.
4 A ¶ -- CLOSE ON a bus card tapping the reader.
5 A BEEP.
6 A ¶ -- ANGLE ON the back rows.
7 A Nearly empty.
8 A A bag of fries going cold.
9 A ¶ MIRA, 16, backpack in her lap, sits near the middle.
10 A Across the aisle, HOODIE GUY, 40s, hood up, face turned to the window.
11 A He has been there since the depot.
12 A ¶ She digs out her phone.
13 A Dials.
14 D MIRA (into phone, whispering): Dad? It's me. I'm on the 41. I know it's late. (glances around) Yeah, I'm okay. I just. I needed to go somewhere.
15 D TEODOR [V.O.]: Where are you going, Mira?
16 D MIRA (pressing her forehead to the glass): Aunt Lena's. She said I could come anytime. (a breath) You weren't going to let me leave, so I didn't tell you.
17 D TEODOR [V.O.]: I'm not mad.
18 D MIRA (laughs, bitter): You are. You're doing the voice.
19 A ¶ -- WE SEE the Hoodie Guy's shoulders tighten.
20 A He does not turn.
21 A ¶ -- INSERT: a cracked phone screen on his knee.
22 A It lights up: "MIRA CALLING?" no, "DAD HOME".
23 A It is silent.
24 A He sets it face down.
25 D TEODOR [V.O.]: Tell me which stop. I'll pick you up. We don't have to talk.
26 D MIRA (her voice breaks): You'd just stand there with the car running, Dad. You'd say nothing for forty minutes.
27 D TEODOR [V.O.]: That's, that's not --
28 D MIRA (cutting in, louder): It is! It's what you do! Mom left and you said nothing, I got in your car and you said nothing, I said I hated you and you said NOTHING!
29 A ¶ Heads on the bus lift.
30 A The Hoodie Guy pushes his hood back.
31 A Gray stubble, red eyes.
32 A Her phone is still at her ear.
33 A His mouth moves on the same words as the voice in the speaker.
34 D TEODOR [V.O.] (and across the aisle, aloud, the same sentence): I'm sorry, Mira.
35 A ¶ BACK TO SCENE: Mira slowly lowers the phone.
36 A The call timer ticks.
37 A The bus HISSES to a stop.
38 D MIRA (staring at him, barely audible): Dad?
39 D TEODOR (standing in the aisle, hands open, voice thick): Say it again. Say it all again, to my face, while I'm standing here.
40 A ¶ The doors fold open on the rain.
41 A Neither of them moves.

### SCENE s05166 | INT. SUDS & DUDS LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): COLT, MO, PRISCILLA, TESSA, BLARES
1 A ¶ Tessa, 17, sits on a dryer typing fast while Jaylen, 17, watches the door and Mo, 16, hugs a duffel that clearly is not full of laundry.
2 A Priscilla, 18, the attendant, mops near the machines pretending she doesn't hear anything.
3 A Colt, 19, in a letterman jacket, leans on the soda machine, eyes locked on the duffel.
4 A ¶ ON PHONE: Tessa to Group: "he's HERE. do NOT look at him"
5 A ¶ Everyone looks at him.
6 D COLT: Yo. Mo. You got my stuff or what.
7 D MO: It's not your stuff. It's Wren's.
8 A ¶ Wren, 17, hoodie up, emerges from the bathroom drying her hands, sees Colt, stops dead.
9 A Jaylen steps between them, Tessa slips off the dryer and edges toward the exit, Priscilla's mop bumps the duffel, and a dozen glossy flash drives spill out across the wet floor like silver fish.
10 D PRISCILLA: Nope. I didn't see that. I'm on break.
11 A ¶ ON PHONE: Wren to Tessa: "RUN"
12 D TESSA (under her breath): I literally told you.
13 A ¶ Colt grins and grabs a drive.
14 A Wren lunges.
15 A The lights flicker, a dryer buzzer BLARES, and everybody freezes as blue and red light sweeps across the front window.

### SCENE s05167 | INT. GREENFIELD VETERINARY CLINIC - AFTER HOURS
Detected names (may be incomplete or contain aliases): LUCAS, ALMA PRUITT, ABERNATHY, DEPUTY HARLOW
1 A ¶ Rain.
2 A ¶ The waiting room.
3 A Empty chairs.
4 A A fish tank bubbling.
5 A A wall clock reads 11:48.
6 A ¶ LUCAS, 20s, a vet tech in scrubs, kneels beside the reception desk, a flashlight in his teeth, looking at the floor.
7 A DR. ALMA PRUITT, 50s, stands over him holding a clipboard.
8 A MRS. ABERNATHY, 70s, in a raincoat, sits in a plastic chair with an empty cat carrier on her lap.
9 A ¶ Silence.
10 D DR. PRUITT: Lucas. Tell me again.
11 D LUCAS (taking the flashlight out): She was in the carrier at nine. I checked her. I swear I checked her.
12 D MRS. ABERNATHY: Biscuit doesn't just disappear.
13 A ¶ Nothing.
14 A ¶ Lucas stands.
15 A He crosses to the supply cabinet and opens it.
16 A Bandages.
17 A Syringes.
18 A A bag of kibble torn open, the floor under it dusted with crumbs.
19 A He crouches.
20 A Small paw prints in the powder of spilled flea treatment, leading toward the back hall.
21 D LUCAS: Look.
22 A ¶ Dr. Pruitt looks.
23 A Mrs. Abernathy rises, the carrier trembling in her hands.
24 A The prints stop at a closed door marked STAFF ONLY.
25 D DR. PRUITT: That door's always locked.
26 D LUCAS: Not tonight.
27 A ¶ The knob.
28 A It turns by itself.
29 A A soft CLICK.
30 A ¶ Mrs. Abernathy gasps.
31 A Dr. Pruitt steps in front of her.
32 A Lucas lifts the flashlight like a weapon.
33 A ¶ The door swings open.
34 A Dark.
35 A Cold.
36 A The smell of antiseptic.
37 A ¶ A small shape.
38 A Two green eyes.
39 A ¶ And then, behind them, the front bell JANGLES.
40 A The glass door BANGS against the wall.
41 A Wind and rain flood in.
42 A ¶ DEPUTY HARLOW, 40s, hat dripping, steps inside and shuts the door behind him.
43 A He looks at the three of them.
44 A At the open staff door.
45 A At the cat carrier.
46 D DEPUTY HARLOW: Evening. Somebody called in a break-in at this address.
47 D DR. PRUITT (too fast): No. No break-in.
48 D LUCAS: Nobody called.
49 A ¶ Silence.
50 D DEPUTY HARLOW: Funny. The call came from inside.
51 A ¶ The three of them turn, slowly, to the staff door.
52 A The small shape in the dark steps forward into the light.
53 A A gray cat.
54 A Biscuit.
55 A A tiny brass key hangs from her collar.
56 A ¶ Nothing else moves.

### SCENE s05168 | INT. SUBWAY CAR - RUSH HOUR - STALLED
Detected names (may be incomplete or contain aliases): FRANCESCA, DEVIN, GUS, BERNADETTE, TARIQ
1 A ¶ A packed car.
2 A The lights flicker, then the train JERKS to a stop between stations.
3 A The announcement crackles and dies.
4 A Nobody can move more than two inches.
5 A ¶ FRANCESCA, 30, in a bridesmaid dress with a garment bag over one arm, is pinned against the door.
6 A She holds her phone above her head, searching for a signal.
7 A DEVIN, 32, in a rumpled suit, is wedged against her back, holding a cake box very carefully above his head.
8 D DEVIN: Sorry. Sorry. Is that your elbow?
9 D FRANCESCA: That is your cake.
10 D DEVIN: It's a wedding cake. For a wedding.
11 D FRANCESCA: Which wedding?
12 D DEVIN: Mine. Well. My sister's. I'm best man.
13 A ¶ She cranes around.
14 A He blinks at her.
15 A She has a streak of mascara under one eye, and a tiara crooked in her hair.
16 D FRANCESCA: I'm the maid of honor. At the Whitfield wedding.
17 D DEVIN: That's my sister.
18 D FRANCESCA: Then you're the brother who never RSVPs.
19 A ¶ He opens his mouth, closes it.
20 A GUS, 60s, a retired conductor squeezed in beside them with a trombone case, chuckles.
21 A BERNADETTE, 20s, in tights and a tutu, is crouched on the floor eating a bagel.
22 A TARIQ, 18, headphones on, is asleep standing up, drooling against a pole.
23 D GUS: You two should just get married.
24 A ¶ FRANCESCA and DEVIN (together) No.
25 A ¶ The train shudders.
26 A Lights out.
27 A Total darkness.
28 A A collective groan.
29 A Then the screen of her phone glows.
30 A ¶ ON PHONE: Mom: "WHERE ARE YOU.
31 A CEREMONY IN 20"
32 A ¶ ON PHONE: Bride: "if the cake's not here by 3 I'm eloping"
33 D DEVIN: Uh oh.
34 D FRANCESCA: Oh no.
35 A ¶ She turns to look at him in the blue glow.
36 A The tiara has slipped almost over one eye.
37 A He lowers the cake box an inch and, in the dark, breathes out.
38 A ¶ This is the last time they will be strangers.
39 A ¶ The emergency lights come on.
40 A A dull thunk, and the train lurches forward.
41 A Everybody tilts the same direction.
42 A The cake box slides out of Devin's hands, Francesca catches it, Gus catches her, and Bernadette catches the bagel.
43 D TARIQ (waking up, loudly): Did we make it?
44 D BERNADETTE: No.
45 D TARIQ: Cool.

### SCENE s05169 | INT. DUSTY RECORDS - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): ABEL, CLEMENTINE, HUX, BAND
1 A ¶ A converted barn in the high desert.
2 A Egg-crate foam stapled to the walls.
3 A A tumbleweed, a real one, sits in the corner like a joke nobody got around to cleaning up.
4 A ¶ Clementine, 30s, boots up on the console, picks at a lap steel.
5 A Abel, 40s, the producer, flannel and tired eyes, stares at the monitor.
6 A Hux, 20s, leans in the doorway chewing a toothpick.
7 A A teenage kid in an apron sweeps the same square foot of floor over and over.
8 A A dog snoozes under the couch.
9 A ¶ CLOSE ON the tape machine, reels turning.
10 D ABEL: that's not what we cut yesterday.
11 D CLEMENTINE: it's close.
12 D ABEL: it's not close. you slowed the bridge.
13 D HUX: she didn't slow it. i did.
14 D ABEL: why'd you slow it?
15 D HUX: i dunno. felt right. felt like, you know. like riding in.
16 D CLEMENTINE: riding in where.
17 D HUX: town. i dunno. i said i dunno.
18 A ¶ ANGLE ON the glass.
19 A THE BAND, five men in dusty hats, stand in the live room staring at the control room, waiting.
20 A One of them lifts a fiddle bow and lowers it again.
21 D THE BAND (in unison, muffled through glass): we ready?
22 D ABEL (pressing the talkback): not yet.
23 D CLEMENTINE: you always say not yet.
24 D ABEL: because it's never yet.
25 D HUX (quietly): you could just say yes, Abel. once.
26 D ABEL: i don't say yes to things that aren't finished.
27 D CLEMENTINE: nothing's ever finished. that's the whole thing about it.
28 A ¶ The kid stops sweeping.
29 A The dog lifts its head.
30 A Abel stands, grabs his hat, crosses to the door.
31 A Hux doesn't move out of his way.
32 D HUX: where you going?
33 D ABEL: out. air.
34 D CLEMENTINE: you leave, the take's gone.
35 D ABEL: then it's gone.
36 A ¶ He shoulders past Hux, pushes the door.
37 A Heat and sunlight pour in.
38 A He stops.
39 A WE SEE the red ON AIR light above the door, still lit.
40 A ¶ BACK TO SCENE: Clementine's hand is on the record button.
41 A She hasn't taken it off.
42 A She looks at him through the open door, and doesn't say anything.
43 D THE BAND (through the glass, hopeful): we ready now?
44 D ABEL (without turning): yeah.

### SCENE s05170 | INT. ST. ANNE'S HOSPITAL - PEDIATRIC WAITING AREA - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA, TOBY, THE WOMAN, GUS, OKAFOR, DENISE
1 A ¶ Fluorescent hum.
2 A Half the lights off.
3 A ¶ Rain on the tall windows.
4 A A vending machine glows blue in the corner.
5 A ¶ PRIYA (30s, scrubs, cardigan) wheels a med cart past rows of empty chairs.
6 A A boy, TOBY (8), sits alone in a dinosaur pajama top, swinging his feet.
7 A Next to him, a WOMAN in a damp raincoat stares at the floor, one hand clamped on the boy's backpack strap while GUS, the night security guard, sips coffee by the elevators and pretends not to watch her.
8 D PRIYA: Still waiting on the paperwork, sweetie?
9 D TOBY: She says we have to wait.
10 A ¶ Priya looks at THE WOMAN.
11 A The Woman doesn't look up.
12 D PRIYA: Ma'am? Can I get you a blanket?
13 D THE WOMAN: We're fine.
14 A ¶ Wind pushes the rain sideways against the glass.
15 D PRIYA (gentle): He's been here two hours. It's okay to tell me who you're waiting for.
16 A ¶ Gus wanders over, thumbs in his belt.
17 D GUS: Everything alright over here?
18 D PRIYA: Everything's fine, Gus.
19 A ¶ Gus nods.
20 A Retreats.
21 A The elevator DINGS.
22 A The doors slide open on empty air, then close again.
23 D THE WOMAN: My mother's upstairs. Fourth floor. They won't let kids up after nine.
24 D TOBY: Grandma has a tube in her nose.
25 D PRIYA: I know. I'm on her floor tonight. I can sit with him right here.
26 A ¶ The Woman finally lifts her eyes.
27 A Red-rimmed.
28 A Tired in a way sleep won't fix.
29 D THE WOMAN: You'd do that?
30 D PRIYA: It's a slow night.
31 A ¶ Somewhere a monitor beeps.
32 A Steady.
33 A Patient.
34 A A mop bucket squeaks down a far hallway.
35 D PRIYA [CONT'D]: I'm Priya.
36 D THE WOMAN: Denise.
37 A ¶ Denise lets go of the backpack strap, finger by finger.
38 A Toby scoots closer to Priya and examines her ID badge.
39 D TOBY: Your picture looks mad.
40 D PRIYA: I was. It was six a.m.
41 A ¶ Denise almost laughs.
42 A ¶ The elevator DINGS again.
43 A DR. OKAFOR (60s, rumpled, reading glasses on a cord) steps out, chart in hand, sneakers soaked through.
44 D DR. OKAFOR: Denise Marlowe? Your mother's asking for you. And for the young man.
45 D DENISE: He's not allowed up.
46 D DR. OKAFOR: Tonight he is.
47 A ¶ Toby grabs his backpack.
48 A Denise stands.
49 A Her knees crack.
50 A ¶ Outside, the rain thins to drizzle.
51 A The vending machine hums on.
52 D DENISE (to Priya): Thank you.
53 D PRIYA: Go on.
54 A ¶ They walk toward the elevator.
55 A Gus holds the door.
56 A Nobody says anything else.

### SCENE s05172 | INT. JUNO'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNO, THE BAND
1 A ¶ Dark.
2 A Fairy lights, half of them dead.
3 A ¶ Posters.
4 A A beanbag.
5 A Laundry in a heap that could be anything.
6 A ¶ JUNO (16) lies in bed, earbuds out, eyes open.
7 A She listens.
8 A ¶ Silence.
9 A ¶ Then, through the wall: a thud.
10 A A slow one.
11 A ¶ She sits up.
12 A ¶ Another thud.
13 A Wood on wood.
14 A ¶ She grabs her phone.
15 A Taps it.
16 A Nothing.
17 A Her phone.
18 A Dead.
19 A ¶ The thudding finds a rhythm.
20 A Four beats.
21 A Four beats.
22 A Under it, a low hum, wrong, like something breathing through a tube.
23 D JUNO (whisper): Hello?
24 A ¶ Nothing.
25 A ¶ She swings her legs out.
26 A Floorboard creaks.
27 A She freezes.
28 A Waits.
29 A ¶ The wall goes quiet.
30 A ¶ Then a voice, muffled, lazy, sung half a note flat.
31 D THE BAND [O.S.] (muffled, through wall): Wonderwall... one, two, three...
32 A ¶ Juno stares at the wall.
33 D THE BAND [O.S., CONT'D] (muffled): Sorry! Sorry! Dave, you're on the wrong key!
34 A ¶ A cymbal CRASHES.
35 A A guitar squeals.
36 A ¶ Juno exhales.
37 A Her whole body unclenches.
38 A She laughs, a short, shaky bark.
39 D JUNO (to the wall): It's one a.m.!
40 D THE BAND [O.S.] (muffled): Sorry, Juno!
41 A ¶ A pause.
42 A She lies back.
43 A Pulls the duvet up.
44 A ¶ Quiet.
45 A ¶ Rain on the window.
46 A ¶ Her closet door, which was closed, is open now.
47 A An inch.
48 A ¶ She doesn't see it.
49 A She closes her eyes.
50 A ¶ From the wall, soft, in unison:
51 D THE BAND [O.S.] (muffled, hushed): ...we're not in the garage, Juno.
52 A ¶ Her eyes snap open.
53 A ¶ Silence.

### SCENE s05173 | INT. SUDS & SPIN LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): LENA VOSS, STRANGER, JOSIE, ABEL, MARCUS, KANE
1 A ¶ Dryers TUMBLE.
2 A Neon BUZZES.
3 A ¶ DR. LENA VOSS (40s, scrubs under a parka) is on her knees beside a man crumpled against a washer.
4 A Gripping his wrist.
5 A Counting.
6 A ¶ A STRANGER (60s, grey stubble, bleeding from the scalp) pulls the heavy door of dryer nine shut and leans on it, panting.
7 D LENA: Stay with me. Eyes up here.
8 D STRANGER: Name's Marcus. Not that anyone asked.
9 A ¶ Lena pauses.
10 D LENA: Marcus. Good. Marcus, who did this?
11 A ¶ JOSIE (20s, hoodie, folding socks) backs away from the counter, phone raised.
12 A A tiny terrier on a leash YAPS at everyone.
13 D JOSIE: I'm calling nine-one-one!
14 A ¶ A dryer BANGS open.
15 A ABEL (50s, security vest) bursts through the back door, flashlight swinging.
16 D ABEL: Nobody move!
17 D MARCUS: Abel, he's gone out the front. Go!
18 A ¶ Abel does not go.
19 A Officer KANE shoves through the front door, gun up, rain on his shoulders.
20 D KANE: Police! Hands!
21 A ¶ Everyone raises their hands except Lena, who is still pressing a folded towel to a wound.
22 A ¶ Two teenagers by the soap machine freeze mid-chew.
23 A ¶ This is the last time any of them will be strangers.
24 A ¶ The dryer THUDS.
25 A Something inside it is still running.

### SCENE s05175 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SAL, KAY, TEDDY, BIG DAVE, RUTH
1 A ¶ Dark.
2 A Candles on the counter.
3 A A camping lantern hisses on the table.
4 D SAL [V.O.]: Power went out at eight-fifteen. By nine, the whole street was in somebody's kitchen. That's how it works out here.
5 A ¶ SAL (40s, cardigan, tea towel on shoulder) stirs a pot on a gas ring, while KAY (60s, his mother-in-law) cuts bread at the table, TEDDY (9) kneels on a chair building a wobbly tower of mugs, and a golden retriever sleeps with its chin on Sal's slipper.
6 A Through the window, two teenagers from next door shine a phone torch over the fence, whispering and giggling.
7 A ¶ BIG DAVE (50s, huge, soaked) appears in the back doorway holding a bag of ice.
8 D BIG DAVE: Freezer's gone at ours. Is yours alright?
9 D SAL: Come in, Dave, you're letting the heat out.
10 D KAY: There's no heat, Sal.
11 D SAL: Then you're letting the cold out.
12 A ¶ Teddy's tower collapses.
13 A The dog lifts its head, sighs, resumes sleeping.
14 D TEDDY: It wasn't me!
15 D KAY: It's never you.
16 D BIG DAVE: Who's the lady out front?
17 D SAL: What lady?
18 D BIG DAVE: Standing on your drive. Umbrella. Been there ten minutes.
19 A ¶ They look.
20 A Through the window: a figure at the end of the path, still, umbrella dripping.
21 D SAL [V.O.]: I didn't know her. That's all I'll say about that.
22 D KAY: She looks lost.
23 D TEDDY: She looks cold.
24 D SAL: Teddy, stay put.
25 A ¶ Sal opens the front door.
26 A The Woman (50s, neat grey coat) steps in out of the rain, folds her umbrella.
27 D THE WOMAN: I'm sorry. Is this number fourteen? My sister's number fourteen.
28 D SAL: This is twelve.
29 D THE WOMAN: Oh. Ruth Aldana. Ruth. I'm so sorry.
30 D KAY: Ruth! Sit down, Ruth. Soup?
31 D BIG DAVE: Fourteen's the one with the gnome.
32 D RUTH: That's her.
33 D TEDDY: We've got bread.
34 D SAL [V.O.]: There's no manual for strangers on a night like this. You just pull out another chair.
35 A ¶ Ruth sits.
36 A The candle gutters and holds.
37 A The dog thumps its tail once on the lino.

### SCENE s05176_0 | EXT. FISHING TRAWLER "NORTHERN STAR" - NIGHT
Detected names (may be incomplete or contain aliases): 
1 A ¶ Black water.
2 A A creaking hull.
3 A Fog.

### SCENE s05176_1 | INT. TRAWLER - GALLEY - CONTINUOUS
Detected names (may be incomplete or contain aliases): JONAH, NELL, HALE, DR. SUN, PETE
1 A ¶ CLOSE ON a sat-phone on the table, its green light blinking.
2 A Beside it, JONAH (20s) lies on a bench, shirt soaked red at the ribs.
3 A ¶ NELL (30s, oilskins, shaking hands) presses a rag to the wound.
4 A HALE (60s, the captain) stands in the doorway, staring at the ceiling.
5 D NELL: Stay with me, Jonah. Cap, get Dr. Sun on that thing.
6 D HALE: Line's open.
7 A ¶ Nell grabs the phone, thumb-hits speaker.
8 D DR. SUN [V.O.] (crackling): Nell? I can barely hear you. Is the bleeding steady?
9 D NELL: Steady-ish. It's deep. Pete's the only one who's done this before.
10 A ¶ ANGLE ON the hatch.
11 A PETE (50s, grey beard) is on the ladder, face white, hands empty.
12 D PETE: I can't, Nell. I told you. I can't do it again.
13 D DR. SUN [V.O.]: Pete. Listen to me. You can.
14 A ¶ A heavy THUMP from above.
15 A Something drags across the deck.
16 A ¶ Everyone looks up.
17 D HALE: That wasn't the nets.
18 A ¶ WE SEE the hatch.
19 A Bolted.
20 A Shaking.
21 A ¶ BACK TO SCENE:
22 A ¶ Jonah grips Nell's wrist.
23 D JONAH: Nell... something's out there.
24 A ¶ The lights die.

### SCENE s05179_0 | EXT. HARBOR LOT - FOOD TRUCK "ROSA'S RUEDA" - DAY
Detected names (may be incomplete or contain aliases): ROSA, DANNY, SKYE
1 A ¶ Sun on chrome.
2 A Gulls.
3 A Steam rolling out of the order window.
4 A ¶ ROSA (50s, apron, forearms like cables) flips tortillas without looking.
5 A A line of customers stretches to the road.
6 A ¶ DANNY (14) leans out the window with the receipt pad.
7 D DANNY: Two al pastor, one veggie, extra lime.
8 D ROSA: Say please to the lime.
9 D DANNY: Please, lime.
10 A ¶ From the cab, SKYE (20s, they/them, braids, bandana) leans back against the dashboard with a clipboard.
11 A Skye taps the pen against their teeth.
12 D SKYE: Rosa, the health inspector's coming at noon. They've already emailed.
13 D ROSA: Let him come.
14 D SKYE: They said "her." They're a woman.
15 D ROSA: Then let her come.

### SCENE s05179_1 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHUY, ROSA, SKYE, DANNY
1 A ¶ CLOSE ON the grill.
2 A Grease popping.
3 A The propane gauge ticking toward red.
4 A ¶ CHUY (70s, Rosa's father, hat low) sits on an overturned crate by the back door, peeling an orange with a pocketknife.
5 D CHUY: Mija, the tank is low.
6 D ROSA: It's fine, Papá.
7 D CHUY: It is not fine. It is whistling.
8 A ¶ Rosa listens.
9 A A faint hiss, thin as thread.
10 A She glances at Skye.
11 D ROSA: Skye, check the valve.
12 D SKYE: I'm bookkeeping, not plumbing.
13 D DANNY: I'll do it.
14 D ROSA: You'll do nothing. Stay by the window.
15 A ¶ Danny bangs the counter, annoyed.
16 A A customer chuckles.

### SCENE s05179_2 | EXT. HARBOR LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): INSPECTOR WELLS, ROSA, SKYE
1 A ¶ A white sedan pulls into the lot.
2 A INSPECTOR WELLS (40s, windbreaker, tablet) steps out and looks at the truck.
3 A At the line.
4 A At the sky.
5 D WELLS: Good afternoon! Anyone in charge?
6 A ¶ Rosa leans out the order window, wiping her hands.
7 D ROSA: Inspector. We are open for business.
8 D WELLS: You have a permit?
9 D ROSA: I have a daughter who keeps all the paperwork.
10 D SKYE (from the cab): I'm not her daughter. I'm the accountant.
11 D WELLS (not looking up): I'm sure they're lovely. I'll start with the kitchen.

### SCENE s05179_3 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): WELLS, ROSA, CHUY, SKYE, DANNY, FLICKERS
1 A ¶ Wells climbs in.
2 A Eyes the grill.
3 A Sniffs.
4 D WELLS: Do you smell gas?
5 D ROSA: Only the fresh tortillas.
6 D WELLS: That's gas, ma'am.
7 D CHUY: Mija. Tell him.
8 D ROSA: Papá, please.
9 A ¶ ANGLE ON the hose behind the grill.
10 A A hairline crack.
11 A The hiss now audible.
12 D SKYE: Rosa. The hose.
13 D DANNY: It's been like that since Friday.
14 A ¶ Rosa freezes.
15 A Slowly turns on her son.
16 D ROSA: Since Friday?
17 D DANNY: I told Abuelo. He said it was okay.
18 D CHUY: I said it would hold.
19 D ROSA: Hold?
20 D WELLS: I'm going to need everyone out of the truck.
21 D ROSA: Nobody is leaving my truck.
22 D WELLS: Ma'am...
23 D ROSA: Thirty years. My husband built this grill. My father taught me this salsa. You don't come in here with a tablet and tell me to leave.
24 A ¶ INSERT - THE TANK GAUGE.
25 A Needle on red.
26 D SKYE (low): Rosa. Please.
27 D ROSA: Don't "please" me. You all knew.
28 A ¶ Silence.
29 A The hiss grows.
30 A Customers outside have gone quiet.
31 D DANNY: Mamá, I'm sorry.
32 A ¶ Rosa's shoulders drop.
33 A She looks at him.
34 A At Chuy.
35 A At the hose.
36 D WELLS: The ignition. The pilot's still lit.
37 A ¶ BACK TO SCENE:
38 A ¶ Rosa lunges for the shutoff valve.
39 A Wells grabs her arm.
40 D WELLS [CONT'D]: Don't touch the burner!
41 D SKYE: Everyone OUT!
42 A ¶ Chuy rises.
43 A Danny grabs his grandfather's arm.
44 A Rosa wrenches free and cranks the valve.
45 A ¶ The hiss stops.
46 A ¶ Everyone stands still.
47 A ¶ Then the pilot light FLICKERS, catches the last of the escaped gas, and the grill WHUMPS into a fireball that blows the order window across the lot.

### SCENE s05179_4 | EXT. HARBOR LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): ROSA
1 A ¶ Smoke boils up.
2 A Customers scatter.
3 A Gulls explode into the sky.
4 A ¶ Danny drags Chuy clear.
5 A Skye hauls Wells over the tailgate.
6 A Rosa staggers out last, apron smoking, a charred tortilla still in her hand.
7 A ¶ She looks at her truck.
8 A At the black smear on the asphalt.
9 D ROSA (quiet): Well. That's the inspection.
10 A ¶ Skye begins to laugh.
11 A Danny too.
12 A Wells pats out a spark on his sleeve and finally, helplessly, joins them.

### SCENE s05182 | INT. BLACKWATER SOUND - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): BAND, SPARK
1 A ¶ A converted cannery.
2 A Brick, baffles, foam.
3 A Forty-eight channels on the console in the control room beyond the glass, every fader at unity.
4 A The red ON AIR light burns steadily over the door.
5 A ¶ Outside, a storm has been building since sunset.
6 A Wind leans on the roll-up door.
7 A Water beads along the skylight seams.
8 A ¶ THE BAND stands at their marks: drummer behind the kit, bassist with headphones half on, two guitarists sharing one tuner, a keyboardist leaning on a Rhodes.
9 A Take fourteen of "Low Tide."
10 A Slate called.
11 A Click track in their cans.
12 D THE BAND (counting in, together): One, two, three, four.
13 A ¶ They play.
14 A Tight.
15 A Almost right.
16 A The drummer drops a fill, the bassist drifts a hair behind the grid, and the track grinds to a halt on the bridge.
17 D THE BAND: Stop. Stop. Sorry.
18 A ¶ Talkback is dead.
19 A The glass shows only their reflection and the dark behind it.
20 A ¶ The click track keeps ticking in every headphone.
21 A Tick.
22 A Tick.
23 A Tick.
24 D THE BAND: Engineer? Can we get a playback?
25 A ¶ Nothing.
26 A The monitors hiss at -40 dB noise floor.
27 A The patch bay shows a row of green LEDs, then one by one they go amber.
28 A ¶ Rain begins to find a way through the roof.
29 A A drop lands on the snare.
30 A Another on the Rhodes lid.
31 D THE BAND: Somebody check the breaker.
32 A ¶ The guitarists unplug and cross to the panel by the loading door.
33 A The drummer lifts his sticks and freezes.
34 A The bassist freezes too.
35 A The click track stops.
36 A ¶ All five go still.
37 A ¶ Low in the walls, an electrical whine climbs.
38 A Pitch rising.
39 A Rising.
40 D THE BAND: That's the transformer. Pull the plugs. Pull everything.
41 A ¶ They scramble.
42 A The keyboardist yanks the Rhodes cable, the bassist rips his headphones off, the drummer dives for the floor tom, and two of them collide at the gear cart, tangle in a snake of XLR cables, and go down together, mics clattering around them.
43 D THE BAND: Get up! Get off the mats, it's the floor, it's wet!
44 A ¶ Water has pooled under the loading door and spreads across the hardwood in a thin black sheet toward the power strips.
45 A ¶ Silence.
46 A Drip.
47 A Drip.
48 A ¶ Then a hum.
49 A Deep.
50 A Everything in the room powers up at once, console, amps, monitors, and the speakers SCREAM a wall of feedback that shakes the foam from the ceiling.
51 D THE BAND: Out! Everybody out, now!
52 A ¶ They run.
53 A The group scatters for the emergency exit, one toward the stage door, two to the control room, one back for the master tape.
54 A The master tape wins.
55 A He grabs the reel under his arm.
56 A ¶ A SPARK jumps from the strip to the water.
57 A ¶ The overhead lights BURST one after another, glass raining down, and the whole live room goes white, then black, then white.
58 D THE BAND: Go! Go! Go!
59 A ¶ The fire door SLAMS open on the storm.
60 A They pour into the rain, drenched, shouting names into the wind, and behind them the cannery windows flash blue and die.
61 D THE BAND: Count heads!
62 A ¶ Five.
63 A Five.
64 A They count again to be sure.

### SCENE s05183 | INT. GRAND MERIDIAN HOTEL - 9TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): KIM LARSEN, KIP LARSEN, DETECTIVE SORA NAKAMURA, ODOM, ^KIM
1 A ¶ KIM LARSEN, 30s, wet coat, backs along the wall.
2 A Her phone.
3 A Dead.
4 D KIM [V.O.]: Eight hours since the flood took the lobby. Nobody warns you the elevators are the first to go.
5 A ¶ Emergency lights.
6 A Amber.
7 A Silence.
8 A ¶ KIP LARSEN, 40s, her brother, limps from the stairwell, a fire axe in one hand.
9 A Behind him, DETECTIVE SORA NAKAMURA, 50s, drags a bleeding MRS. ODOM, 70s, by the sleeve.
10 A ¶ A door SLAMS somewhere below.
11 A Water.
12 A Rising.
13 A ¶ Kim's phone flickers on for one second.
14 A ¶ ON PHONE: where r u
15 A ¶ Then black again.
16 A Nothing.
17 D KIM: Kip, the stairs.
18 D KIP: Kim, the stairs.
19 D ^KIM: They're flooded!
20 D KIP: They're flooded!
21 D SORA: Then we go up. The roof.
22 D MRS. ODOM: My knees.
23 A ¶ A pipe BURSTS.
24 A The lights BUZZ out.
25 A ¶ Dark.
26 A Breath.
27 A Rain.

### SCENE s05184 | INT. SUNSET BARN - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, GUS, BEA, BOING
1 A ¶ String lights sway over a dance floor littered with confetti and shoes.
2 A A half-eaten cake leans like a tower in Pisa.
3 A The DJ booth glows, empty, still thumping a bass line nobody is dancing to.
4 A ¶ On the cake table, a plastic bride-and-groom topper wobbles.
5 A Then, impossibly, climbs down.
6 A ¶ GUS, a wiry corgi in a tiny bow tie, trots in, dragging a garter in his teeth.
7 A ¶ BEA, 20s, the bride's sibling, in a rumpled suit, tie loose, hair wild, vaults a chair and skids to a stop in front of him.
8 A Bea is out of breath, and they are grinning like a person who has just won something.
9 D BEA: Gus! Drop the garter, buddy. That belongs to the bouquet relay.
10 A ¶ Gus drops it.
11 A Then snatches it back.
12 A BOING, his tail whips a candle holder, and a tower of cups topples with a CRASH.
13 D GUS: Sorry, Captain Bea! The relay's the only game I'm any good at!
14 D BEA: Nobody's saying you're not good. They're saying you cheat.
15 D GUS: I do not cheat. I take shortcuts.
16 A ¶ Bea laughs and crouches.
17 A They point to the finish line, a ribbon strung between two keg stands at the far end of the barn.
18 D BEA: Okay, Gus-Gus, ground rules. Garter in mouth, no teeth on the ribbon, and nobody bites the best man.
19 D GUS: That was ONE time!
20 A ¶ A starter pistol, actually a champagne cork, POPS from the balcony.
21 A The crowd, offscreen, ROARS.
22 A ¶ Bea sprints.
23 A Gus scrambles after them, paws skittering on the polished boards.
24 A Over a fallen chair.
25 A Under a table.
26 A WHOOSH past a sleeping uncle.
27 A The garter flutters like a flag.
28 D BEA: Left, Gus, left!
29 D GUS: I know where left is! I'm a professional!
30 A ¶ They hit the ribbon together.
31 A SNAP.
32 A Streamers rain down.
33 A Gus tumbles into Bea's arms, and they both go down laughing on a pile of discarded party hats.
34 D BEA: Photo finish. Tie game.
35 D GUS (panting): Rematch at the honeymoon?
36 D BEA: Don't push your luck, champ.
37 A ¶ Gus puts the garter on Bea's head like a crown.
38 A Bea lets him.

### SCENE s05186 | INT. HOLLOWAY FAMILY HOME - FUNERAL RECEPTION - DAY
Detected names (may be incomplete or contain aliases): JONI, JORY, AMES, PHONE
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- A casserole dish passes from hand to hand down the hallway.
3 A ¶ -- Black umbrellas drip in a brass stand.
4 A ¶ -- A framed photo of GRANDMA LUCILLE on the piano, sunlight on the glass.
5 A ¶ -- Cousins pressed together on the stairs, plates balanced on knees.
6 A ¶ Joni Holloway, 40s, in a grey dress, ladles punch with a steady smile, while across the room her brother Jory Holloway, 40s, loosens his tie by the fireplace and Ames Okoro, 20s, their cousin, who uses they/them, drifts between the aunts with a tray, collecting cups, watching Joni and Jory the way someone watches two dogs near a bone.
7 D JONI (to the room): There's more food in the kitchen. Please. Eat.
8 A ¶ The room murmurs thanks.
9 A Forks clink.
10 D JORY (muttering): Eat. Sure. Like it's a holiday.
11 D AMES: They said the will's being read after dessert.
12 A ¶ Joni stiffens.
13 A Jory doesn't.
14 A ¶ -- LATER: The light has shifted.
15 A Plates stacked.
16 A Laughter.
17 A Someone tells a story about Lucille's terrible driving, and for a moment the whole room breathes.
18 D JORY (to Joni, easy): Remember the time she backed into the church sign?
19 D JONI (smiling): She said it was in her way.
20 A ¶ They laugh.
21 A It's the first real laugh of the day.
22 A Ames lowers the tray, relieved.
23 A ¶ Then Ames's phone BUZZES.
24 A ¶ ON PHONE (TEXT): did joni tell jory about the house yet
25 A ¶ Ames goes still.
26 A Joni notices.
27 A Jory notices Joni notice.
28 D JORY: What house?
29 D JONI (to herself): Not here. Not now.
30 D AMES (to the room): I think I'll get more coffee.
31 D JORY: Sit down, Ames. What house, Joni?
32 A ¶ The laughter dies out, one conversation at a time.
33 A Everyone is watching now.
34 D JONI: Grandma sold the house in March. To me. For a dollar.
35 A ¶ Silence.
36 A The clock on the mantel ticks.

### SCENE s05187_0 | INT. LUMENFLOW - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): WAITER, TEENAGERS, DOG, TAVI BROOKS, RHEA NAKAGAWA, OSEI
1 A ¶ Standing desks.
2 A Bean bags.
3 A A neon sign: MOVE FAST.
4 A A WAITER in a vest sets out catered sandwiches.
5 A Two TEENAGERS on a school tour peer at a whiteboard.
6 A A DOG sleeps under a desk.
7 A ¶ TAVI BROOKS, 30s, they/them, hoodie, stares at a laptop.
8 A Across the row, RHEA NAKAGAWA, 40s, CEO, reads a printed memo upside down, as if that's how it came.
9 A ¶ OSEI, 20s, engineer, carries three monitors and sets none of them down.
10 D RHEA: Tavi. Got a sec?
11 D TAVI: Not really.
12 A ¶ Rhea waits.
13 A Tavi's cursor blinks.
14 D TAVI [CONT'D]: Okay.
15 A ¶ They walk to the glass room.
16 A The waiter's tray clinks behind them.

### SCENE s05187_1 | INT. GLASS CONFERENCE ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): RHEA, TAVI, RECEPTIONIST, PHONE
1 A ¶ Rhea closes the door.
2 A Doesn't sit.
3 D RHEA: Series B didn't close.
4 D TAVI: I saw the Slack.
5 D RHEA: Payroll's Friday.
6 A ¶ Tavi's thumb rubs the edge of the table.
7 D TAVI: They told me they'd cover through spring.
8 D RHEA: Who did?
9 D TAVI: You did.
10 A ¶ Outside, Osei finally sets a monitor down.
11 A Picks it up again.
12 A ¶ The intercom CRACKLES.
13 D RECEPTIONIST [V.O.]: Rhea, there's a gentleman here from the board.
14 D RHEA (into the room): Tell him five minutes.
15 D RECEPTIONIST [V.O.]: He says he's already on his way up.
16 A ¶ Tavi's phone lights up on the table.
17 A ¶ ON PHONE (TEXT): osei: tell me u didn't sign it
18 A ¶ Tavi turns it face-down.
19 A Rhea sees.
20 D RHEA: Did you?
21 D TAVI: I put my name where it was asked for.
22 A ¶ Through the glass, the dog stands, stretches, trots toward the elevator.
23 A ¶ The elevator DINGS.

### SCENE s05188 | INT. CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): PAT PELLETIER, PATSY PELLETIER, DEACON FLINT, CHOIR
1 A ¶ Gaslight hisses in brass sconces.
2 A Steam drifts off a copper kettle on a woodstove.
3 A Above, through the floorboards, the groan of an organ and a hundred muffled hymns.
4 A A winter wind rattles the high, narrow windows.
5 A ¶ A ring of mismatched chairs.
6 A In it sit PAT PELLETIER, a rosy, round man in suspenders, and PATSY PELLETIER, his sister, in a bonnet, knitting something that is mostly knot, and DEACON FLINT, thin as a candlestick, who holds a hymnal like a shield.
7 A ¶ Overhead, THE CHOIR launches into a hymn.
8 D THE CHOIR [O.S.] (muffled, soaring): Rock of Ages, cleft for me!
9 D PAT: Friends, we're going to begin.
10 D PATSY: Pat, we've begun. You began when you sat down.
11 D PAT: Then we're beginning again, Patsy.
12 D DEACON FLINT (to the room): Is it the custom to speak all at once, or one by one?
13 D PATSY: One by one, Deacon.
14 D PAT: Though some of us never stop.
15 D PATSY: I heard that.
16 D PAT: You were meant to.
17 A ¶ The kettle WHISTLES.
18 A Everyone turns.
19 D DEACON FLINT (muttering to himself): Lord, give me strength or give me a drink.
20 D PAT: Beg pardon, Deacon?
21 D DEACON FLINT: Nothing. Hymn. I was humming a hymn.
22 D PATSY: You were not humming.
23 D THE CHOIR [O.S.]: Let me hide myself in Thee!
24 D PAT (to the room, loud): Everyone, here's the rule. What's said under the floor stays under the floor.
25 D PATSY: And what's said above?
26 D PAT: Is the Lord's business, Patsy.
27 D DEACON FLINT: Hold on. Patsy, you told me last week you'd quit.
28 D PATSY: I did quit. Twice.
29 D PAT: She quit on Tuesday and again on Wednesday.
30 D PATSY: Because Tuesday didn't take!
31 D DEACON FLINT: That's three drinks in three days, then.
32 D PAT: Two. The third was medicinal.
33 D PATSY: Pat!
34 A ¶ The organ builds.
35 A The floorboards tremble.
36 A Dust sifts into the kettle steam.
37 D DEACON FLINT (rising): I will not sit in a room of liars!
38 D PAT: Sit down, Deacon!
39 D PATSY: Pat, stop shouting!
40 D DEACON FLINT: You're the ones who are shouting!
41 D PAT: We are discussing!
42 D THE CHOIR [O.S.]: Amen! AMEN!
43 A ¶ The chandelier above them SWINGS.
44 A A jar of pickles rolls off a shelf and SMASHES.
45 A In the silence that follows, all three stare at the pickle brine spreading across the floor.
46 D PATSY (quietly): Well. That's a sign.
47 D PAT: Of what?
48 D DEACON FLINT: That I'd like a pickle.

### SCENE s05189_0 | EXT. TRAWLER "MARGARET ANN" - NORTH ATLANTIC - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN DAVID VOSS, LIN PARK
1 A ¶ Grey sea.
2 A Grey sky.
3 A A rust-streaked trawler, forty years old, wallows through a swell with nets hanging from her outriggers.
4 A ¶ Salt.
5 A Wind.
6 A Gulls.
7 A ¶ CAPTAIN DAVID VOSS, 60s, wind-cracked face, oilskins, stands in the wheelhouse door.
8 A His hands are scarred.
9 A His eyes are the color of the water.
10 A ¶ On the deck below, LIN PARK, 20s, deckhand, in orange gear, hauls a net hand over hand.
11 A Her gloves are torn.
12 A She is on her first season.

### SCENE s05189_1 | INT. WHEELHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): COAST GUARD, VOSS, PHONE
1 A ¶ Radar glow.
2 A A dented thermos.
3 A A paper chart pinned with a wrench.
4 A ¶ Voss thumbs the radio.
5 D COAST GUARD [V.O.] (crackling): Margaret Ann, Margaret Ann, this is Station Halvard. Come back.
6 D VOSS: Halvard, Margaret Ann. Go ahead.
7 D COAST GUARD [V.O.]: Captain, we have a gale warning, force nine, bearing two-seven-zero. Recommend you return to port.
8 D VOSS: How long?
9 D COAST GUARD [V.O.]: Four hours. Maybe less.
10 A ¶ Voss sets the handset down.
11 A Nothing.
12 A ¶ The sea heaves.
13 A Spray.
14 A Silence.
15 A ¶ His phone on the dash lights up.
16 A ¶ ON PHONE (TEXT): dad. please come home.
17 A ¶ He turns it face-down.

### SCENE s05189_2 | EXT. DECK - CONTINUOUS
Detected names (may be incomplete or contain aliases): LIN, NOELLE, VOSS
1 A ¶ Lin lets the net drop, shaking out her hands.
2 D LIN: Captain says anything?
3 D NOELLE [O.S.] (from the hold): Not to me.
4 A ¶ Nobody has seen Noelle in an hour.
5 A ¶ Lin looks at the sky.
6 A A grey wall climbs the horizon.
7 A ¶ This is the last time the Margaret Ann will fish these waters.
8 D VOSS (from above): Cut the net, Lin.
9 D LIN: There's six tons in it.
10 D VOSS: Cut it.
11 A ¶ She draws her knife.
12 A Rope.
13 A Salt.
14 A The first drops of rain.
15 A ¶ The net falls away into the dark.

### SCENE s05190 | EXT. BORDER CHECKPOINT - DAY
Detected names (may be incomplete or contain aliases): VOSS, MARTA, PAVEL, BAND
1 A ¶ Rain.
2 A A striped barrier.
3 A A mud road choked with carts, 1948 plates on a single black sedan.
4 A ¶ Corporal Voss, 40s, wet wool coat, stamps papers without looking up.
5 A A dog sniffs the wheels of a cart.
6 A A boy in a flat cap watches it.
7 A ¶ Marta, 30s, steps up with a violin case.
8 A Pavel, her brother, 20s, hangs back, hands in pockets.
9 D VOSS: Papers.
10 D MARTA: All in order.
11 A ¶ He flips them.
12 A Stops.
13 A She holds her breath.
14 D VOSS: This stamp is from a town that doesn't exist.
15 D MARTA: It did last week.
16 A ¶ A beat.
17 A He nearly smiles.
18 A Then the barrier SLAMS down between them.
19 D VOSS: Open the case.
20 A ¶ She does.
21 A Violin.
22 A He lifts it, shakes it.
23 A Something RATTLES inside.
24 D PAVEL: Don't.
25 D VOSS: Quiet.
26 D MARTA: It's my mother's. It rattles because it is old. Please. You know what a thing like that is worth to a person. You have a mother. You had one. She stood in a line like this once, I promise you. Somebody looked at her papers and decided. That is all this is. Somebody decides. And today it is you, and you can decide to be the kind who lets a woman keep her mother's violin, or the kind who breaks it open to find nothing. There is nothing in there, Corporal. There is only the sound it made at her funeral.
27 D VOSS: You talk a lot for someone with a bad stamp.
28 D MARTA: I talk when I am afraid.
29 A ¶ He sets the violin down.
30 A Gently.
31 A ¶ From the road behind, THE BAND arrives, six brass players in muddy uniforms, instruments clutched like rifles.
32 D THE BAND (ragged, together): Let us through, Corporal!
33 A ¶ The dog BARKS.
34 A The boy bolts.
35 A Voss looks at the band, at her, at the barrier.
36 A ¶ He lifts it.
37 D VOSS: Go. Before I count.
