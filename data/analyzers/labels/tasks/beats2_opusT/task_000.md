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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00000.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01293 | INT. GRAND CENTRAL WAITING HALL - NIGHT
Detected names (may be incomplete or contain aliases): IMELDA CASTELLANOS, WINIFRED BOYLE, ARTHUR PEMBROKE
1 A ¶ 1946.
2 A High arched windows, benches of dark oak.
3 A A great board of arrivals flicks over names.
4 A Steam from distant trains.
5 A A few soldiers asleep on their duffels.
6 A ¶ IMELDA CASTELLANOS, 40s, in a worn wool coat, sits on a bench with her hands in her lap.
7 A A suitcase at her feet.
8 A A man's hat on top of it.
9 A ¶ WINIFRED BOYLE, 60s, in tweed, with a prim hat and a leather handbag, perches at the far end of the bench.
10 A She has been watching the board for hours.
11 A ¶ ARTHUR PEMBROKE, 30s, in a demobbed uniform with the insignia ripped from the sleeve, walks the aisle.
12 A Stops.
13 A Stares at Imelda.
14 D ARTHUR: Imelda?
15 A ¶ She stands.
16 A The hat falls from the suitcase.
17 A Arthur bends to pick it up, but Winifred gets there first.
18 A She holds it out to Imelda with a trembling hand, and Imelda takes it without taking her eyes off him.
19 D IMELDA: Arthur. You are late.
20 D ARTHUR: The trains. I was told.
21 D IMELDA: You were told four years ago.
22 D ARTHUR: I am here now.
23 A ¶ Winifred rises, smooths her coat, and walks away down the hall.
24 A She does not look back.
25 A Arthur steps closer.
26 A Imelda lifts the hat between them.
27 D IMELDA: Your father's.
28 D ARTHUR: I thought it was lost.
29 D IMELDA: Nothing is lost, Arthur. Only misplaced.
30 A ¶ He puts it on his head.
31 A It fits.
32 A She straightens it with two fingers.

### SCENE s00654 | INT. HEARSE, MOVING - NIGHT
Detected names (may be incomplete or contain aliases): TANDI, LAURENCE BECKFORD, MIREILLE DUVAL, IZZY
1 A ¶ Dark road.
2 A Rain.
3 A The coffin in back is empty of a body.
4 A Full of cash.
5 A ¶ THANDIWE "TANDI" KOWALCZYK drives.
6 A Gloves.
7 A Eyes forward.
8 A ¶ LAURENCE BECKFORD sits shotgun.
9 A Counts.
10 A Loses count.
11 A Counts again.
12 A ¶ In the back, folding the seats down, MIREILLE DUVAL and ISADORE "IZZY" NKEMELU.
13 A She tapes a bag.
14 A He wipes prints from a crowbar.
15 A ¶ She hums.
16 A He tells her to stop.
17 A ¶ She doesn't.
18 A ¶ He rubs his temples.
19 A She kicks the coffin lid shut.
20 D LAURENCE (to the car): Nobody speak.
21 D IZZY: We're past that.
22 D MIREILLE: We're past everything.
23 A ¶ She laughs.
24 A He doesn't.
25 A He holds the crowbar a moment too long.
26 D TANDI: Eyes on the mirror. Both of you.
27 A ¶ They look.
28 A Headlights.
29 A Far behind.
30 A Two white dots, steady.
31 A ¶ She slows.
32 A He glances back at the dots, then at her.
33 A She doesn't speed up.
34 D LAURENCE: Tandi.
35 D TANDI: I see it.
36 A ¶ The hearse drifts onto the shoulder.
37 A She cuts the engine.
38 A Rain on the roof.
39 A The headlights grow.
40 A ¶ They wait.
41 A He puts the crowbar down.
42 A She takes her gloves off, one finger at a time.
43 A ¶ The car passes.
44 A A taxi.
45 A It disappears into the rain.
46 A ¶ Nobody moves for a long time.
47 D MIREILLE (softly): Well. That's the last of the fear.
48 D IZZY: Is it?
49 A ¶ She starts the engine.

### SCENE s02361 | INT. TROLL BRIDGE TOLLHOUSE - DUSK
Detected names (may be incomplete or contain aliases): BRUNHILDE GRUMBLEDOWN, ULFRIC, ERLANDEL, SPRIGGET
1 A ¶ A stone hut under a mossy arch.
2 A A kettle on a hook.
3 A Coins in neat stacks.
4 A Rain taps the slate roof.
5 A ¶ BRUNHILDE GRUMBLEDOWN, 100s, a troll in a patched apron, stirs the kettle.
6 A Her knuckles are mossy, her hands slow.
7 A Her son, ULFRIC, 40s, sits in a corner with his huge back to her, whittling a bone flute that will never be finished.
8 A A lean elf, ERLANDEL, 20s, slips in from the rain and shakes out his cloak; he slides three silver coins onto the counter without a word.
9 A A small goblin girl, SPRIGGET, 8, perches on the windowsill and swings her feet.
10 D ERLANDEL: Evening, Mother Brunhilde.
11 D BRUNHILDE: Erlandel. You're thinner.
12 D ERLANDEL: The road is long.
13 D BRUNHILDE: So is the winter.
14 A ¶ Ulfric does not turn.
15 A The flute scrapes.
16 A Sprigget leans toward Erlandel and whispers, loudly.
17 D SPRIGGET: He hasn't spoken since the flood.
18 D ULFRIC (low, to the wall): I speak.
19 D BRUNHILDE: Ulfric.
20 D ULFRIC: I speak when there's something worth saying.
21 A ¶ Brunhilde ladles tea into four cups and sets them on the counter, one at a time, nudging the last toward her son.
22 A He reaches back without looking and takes it.
23 A Erlandel drinks.
24 A Sprigget hops down, steals a coin, and slips it into her sleeve while everyone pretends to watch the kettle.
25 A Rain pours.

### SCENE s02479 | INT. BOWLING ALLEY - AFTER HOURS
Detected names (may be incomplete or contain aliases): SAL, DUKE, MOSES, BARNEY
1 A ¶ Half the lanes dark.
2 A Shoes stacked on the counter.
3 A A jukebox hums, unplugged.
4 A ¶ SAL, 60, silver hair, sits at lane six, polishing a bowling ball.
5 A DUKE, 40s, big, lingers by the pin-return.
6 A MOSES, 30s, nervous, holds a gym bag against his stomach.
7 A BARNEY, 50s, the owner, wipes a glass behind the bar.
8 A ¶ Quiet.
9 A Almost cozy.
10 D SAL: You made good time.
11 D MOSES: Traffic was nothing.
12 D DUKE: He's sweating.
13 D MOSES: I'm not.
14 D SAL: He's a little sweaty, Duke.
15 D BARNEY: Moses, you want water?
16 D MOSES: No, I want to go.
17 D DUKE: He said he wants to go.
18 D SAL: He hasn't paid.
19 D MOSES: It's in the bag!
20 A ¶ Sal holds out a hand.
21 A Moses unzips the bag.
22 A Newspaper.
23 A Folded newspaper, not cash.
24 A ¶ Silence.
25 A The ball stops turning.
26 D BARNEY (very low): Oh, Moses.
27 A ¶ Sal sets the ball in its rack.
28 A He stands.
29 A Duke steps behind Moses.
30 A Moses drops the bag.

### SCENE s00782 | INT. FIELD HOSPITAL - CONVERTED ICE RINK - NIGHT
Detected names (may be incomplete or contain aliases): LUCIA FONTANILLA, NURSE GRETA HOLMQVIST, ABEL TESFAYE, RAFI, CORDERO, KOFI
1 A ¶ Cots on the ice mats.
2 A Generators drone.
3 A Breath hangs in the cold.
4 A A Zamboni bay is now supply storage.
5 A ¶ DR. LUCIA FONTANILLA, 40s, scrubs under a parka, works over a patient on a gurney.
6 A NURSE GRETA HOLMQVIST, 50s, holds the instrument tray.
7 A The patient, ABEL TESFAYE, 30s, grips the rail, sweating.
8 D LUCIA: Pressure?
9 D GRETA: Ninety over fifty.
10 D LUCIA: Drop another liter.
11 A ¶ Greta hangs a bag.
12 A The line tangles.
13 A She curses and fixes it.
14 A Lucia presses on Abel's side.
15 A He groans.
16 D ABEL: Doc, it's okay. Stop.
17 D LUCIA: It's not okay, Abel.
18 A ¶ RAFAEL "RAFI" CORDERO, 20s, paramedic, bursts through the doors with a teenage boy in tow.
19 A The boy, KOFI, 15, has a bandaged hand.
20 D RAFI: Doctor! Triage says you've got a bed.
21 D LUCIA: I've got a floor.
22 D RAFI: Then I'll take the floor.
23 D KOFI: Is that my brother?
24 A ¶ Abel turns his head.
25 D ABEL: Kofi.
26 A ¶ Kofi runs.
27 A Rafi grabs for him, misses.
28 A Kofi barrels into Greta.
29 A The tray flies.
30 A Scalpels clatter across the ice.
31 A Lucia lunges to catch the tray and slips.
32 A Rafi catches her.
33 A They fall together, tangled, in a heap by the gurney.
34 A ¶ She is first up.
35 A She looks down at Abel.
36 A His monitor flatlines.
37 D LUCIA [CONT'D]: Greta! Paddles!
38 D GRETA: Charging!
39 A ¶ She slaps the paddles together.
40 A Lucia takes them.
41 A Kofi freezes at the foot of the cot, hands over his mouth.
42 D LUCIA: Clear!
43 A ¶ Abel arches.
44 A Falls.
45 A A blip.
46 A Another blip.
47 D GRETA: We've got him.
48 A ¶ She exhales.
49 A Lucia lets the paddles drop on his chest.
50 A Her hands shake.
51 D KOFI (whisper): Is he okay?
52 D RAFI: He's okay.
53 A ¶ Lucia turns to Kofi, steps close.
54 A She inspects the bandaged hand.
55 D LUCIA: Who did this wrap?
56 D KOFI: Me.
57 D LUCIA: It's terrible.
58 D KOFI: Sorry.
59 D LUCIA: Sit. I'll redo it. After.
60 A ¶ Kofi sits on the ice.
61 A Abel's eyes flutter open.
62 D ABEL (faint): Doc?
63 D LUCIA: Still here.

### SCENE s00765 | INT. BOXING RING - CORNER - NIGHT
Detected names (may be incomplete or contain aliases): PRISS, VANTONGEREN, MEL BRANDVOLD
1 A ¶ A hot arena.
2 A A roaring crowd that is only noise.
3 A Bright ropes, spit buckets, a canvas stained the colour of old tea.
4 A ¶ PRISCILLA "PRISS" VANTONGEREN, twenties, in red trunks, sits on the stool between rounds, chest heaving, a swollen eye closing.
5 A She wears a wireless earpiece.
6 A Her coach, old MEL BRANDVOLD, sixty-eight, stands at ringside two states away on a hospital bed phone, his voice crackling through the bud.
7 D MEL [V.O.] (over earpiece): Priss. Priss, look at me. Can you see?
8 D PRISS: I can see.
9 D MEL [V.O.]: How many fingers?
10 D PRISS: I can't see you, Mel. You're in Tulsa.
11 D MEL [V.O.]: Humour me.
12 D PRISS: Three.
13 D MEL [V.O.]: Good girl. Listen. Round seven. She drops her left every time she throws the hook.
14 D PRISS: I know.
15 D MEL [V.O.]: Step in and counter.
16 D PRISS: What if I'm too tired?
17 D MEL [V.O.]: Priss, I've seen you tired. I've never seen you quit.
18 A ¶ The bell rings.
19 A She rises, mouthguard in, gloves up.
20 A Across the ring her opponent circles, taller, quicker.
21 A Priss bobs, weaves, takes a jab on the shoulder, slips a second, and steps in.
22 A The hook sails past her ear.
23 D PRISS (muttering): Now.
24 A ¶ She throws the right.
25 A It lands.
26 A The opponent staggers, drops her guard, and Priss follows with the left, a short chopping blow that snaps the head back and sends the crowd to its feet.
27 D MEL [V.O.] (over earpiece, shouting): That's it! That's my girl!
28 A ¶ The referee steps between.
29 A Priss stands over her opponent, trembling.

### SCENE s00952 | INT. ASSEMBLY ROOM, BATH - 1790s - NIGHT
Detected names (may be incomplete or contain aliases): LADY CONSTANCE ASHWORTH-BELLAMY, MISS GEORGIANA TREVELYAN-SOLOMON, DUCHESS ELEANOR MARCHMONT-IDOWU
1 A ¶ Candles.
2 A A string quartet.
3 A Powdered wigs.
4 A Silk and sweat.
5 A ¶ LADY CONSTANCE ASHWORTH-BELLAMY (30s) and MISS GEORGIANA TREVELYAN-SOLOMON (20s) stand at the edge of the dance floor, fans snapping.
6 A A third woman, DUCHESS ELEANOR MARCHMONT-IDOWU (60s), leans heavily on her cane between them.
7 D CONSTANCE: She's staring again.
8 D GEORGIANA: Who?
9 D CONSTANCE: The Duchess. She thinks we cannot see her.
10 D DUCHESS: I can hear you perfectly well.
11 D GEORGIANA: Your Grace --
12 D DUCHESS: Do not "Your Grace" me. You were both whispering.
13 D CONSTANCE: We were admiring your pearls.
14 D DUCHESS: You were admiring my debts.
15 D GEORGIANA: Never!
16 D DUCHESS: Then you are fools. Everyone else is.
17 A ¶ The quartet begins a minuet.
18 A The Duchess lifts her cane and points it at the floor.
19 D DUCHESS [CONT'D]: Dance, both of you. And smile.

### SCENE s00148 | INT. FERRIS WHEEL GONDOLA - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, IMELDA VASQUEZ-LEE, DMITRI
1 A ¶ A cramped steel cabin, swaying.
2 A Neon midway lights wheel below.
3 A Two figures in black.
4 A ¶ A STRANGER in a ski mask works at the gondola's roof hatch.
5 A Beside him, IMELDA VASQUEZ-LEE, 30s, holds a rope coil.
6 D STRANGER (muttering): Come on, come on.
7 D IMELDA: Quiet.
8 D STRANGER: I'm talking to the hatch.
9 A ¶ The hatch pops.
10 A Cold air.
11 A He pulls himself up.
12 A She hands him a duffel.
13 D STRANGER [CONT'D] (to the group): Okay, everyone, nobody panic.
14 D IMELDA: There's no one else.
15 D STRANGER: Habit.
16 A ¶ The wheel lurches.
17 A Both grab the rail.
18 D IMELDA: Dmitri.
19 D DMITRI: What?
20 D IMELDA: Your mask slipped.
21 D DMITRI (adjusting it): Names are for inside.
22 D IMELDA: We are inside.
23 A ¶ They speak at once, whispering.
24 D IMELDA [CONT'D]: Next gondola in ten seconds.
25 D DMITRI: Next gondola in ten seconds.
26 A ¶ They grin.
27 A She clips the rope to the rail.
28 A He steps out onto the roof.

### SCENE s01728 | EXT. SALT FLAT - DAWN
Detected names (may be incomplete or contain aliases): ANNELIESE VOGT, JORUND HALVORSEN, PILAR ESPINOSA, MOX, DEV KAPOOR, DISPATCH
1 A ¶ White to every horizon.
2 A A pickup truck, hood up, sits dead in the middle of nothing.
3 A Heat shimmer already.
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
25 A ¶ A long silence.
26 A Dev slides out from under the truck and sits up, wiping his hands on his shirt.
27 D DEV: Is the phone working, Jorund?
28 D JORUND: It has a battery.
29 D DEV: Is the phone working?
30 D JORUND: Pilar, hand me the pack.
31 A ¶ Pilar passes the pack.
32 A He unzips it.
33 A He takes out the satellite phone, dials, holds it to his ear.
34 A The others lean in.
35 A A beat.
36 A His eyes settle on the horizon.
37 D JORUND [CONT'D]: It's ringing.
38 D MOX: Oh, thank God.
39 D PILAR: Put it on speaker.
40 D DEV (quiet): Wait for it.
41 A ¶ A click.
42 A A voice, warm, bored.
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
61 A ¶ At the edge of the flat, a mile away, sunlight catches the windshield of a second truck, parked, with its engine running, waiting.
62 D ANNELIESE: Jorund. Who told you to drive out here?
63 A ¶ Jorund looks at the phone.
64 A He looks at the truck.
65 A He looks at Mox, who does not look back.
66 D JORUND: Mox, put your hands where I can see them.
67 D MOX: Jorund, it isn't what you think.
68 D JORUND: Nobody ever says what it is.
69 A ¶ Mox takes one step out of the cab.
70 A Pilar's camera drops into the salt.

### SCENE s00708 | INT. BLACKWOOD LODGE - GREAT ROOM - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR QUENTIN LAIRD, ODETTE, BASIL, NGOZI, HARLAN
1 A ¶ A hunting lodge in deep snow.
2 A Antlers on every wall.
3 A A fire roars in a stone hearth.
4 A Outside, a blizzard howls.
5 A ¶ PROFESSOR QUENTIN LAIRD, 60s, in a cardigan, stands before the fire.
6 A ODETTE, 30s, a journalist, sits cross-legged on a rug with a notebook.
7 A BASIL, 40s, the caretaker, nurses a whiskey at the bar.
8 A NGOZI, 30s, a doctor, stares at her phone, which shows no bars.
9 A HARLAN, 50s, in a camouflage vest, paces behind the sofa.
10 D QUENTIN (to everyone): I appreciate your patience. As you can see, we are snowed in.
11 D ODETTE: For how long?
12 D BASIL: Two days. Maybe three.
13 D NGOZI (to herself): No signal. Of course.
14 D HARLAN: Who called us here?
15 D QUENTIN: I did.
16 D HARLAN: You said it was a reunion.
17 D QUENTIN: It was.
18 D HARLAN: Then why are we missing someone?
19 A ¶ Nobody answers.
20 A The fire cracks.
21 D ODETTE (to Quentin): You said the sixth guest would come at nine.
22 D QUENTIN: He will.
23 D BASIL: It's past eleven.
24 D QUENTIN: He is very punctual, when he wants to be.
25 A ¶ Ngozi pockets her phone.
26 A Harlan's pacing stops.
27 D NGOZI: Quentin, who is he?
28 D QUENTIN: Someone we all knew, a long time ago.
29 D HARLAN: Name.
30 D QUENTIN: Teddy Marsh.
31 A ¶ Basil drops his glass.
32 A It shatters.
33 A Odette stops writing.
34 D BASIL (low): Teddy died. Twenty years ago.
35 D QUENTIN: Did he?
36 A ¶ The front door rattles.
37 A Everyone turns.
38 A The wind howls, and the rattling stops.
39 A Quentin smiles faintly into the fire.
40 D ODETTE (to herself): Stay calm. Stay calm.
41 D NGOZI: Basil. Check the door.
42 D BASIL: Why me?
43 D NGOZI: Because you're the caretaker.
44 D BASIL: It's not in my contract.
45 A ¶ Harlan crosses the room and lays his hand on the latch.
46 A The rattling begins again, softer, and he draws back.
47 D HARLAN (to the room): Does anyone else hear that?
48 A ¶ Odette closes her notebook.
49 A Quentin sits, finally, in the leather chair, and folds his hands.
50 D QUENTIN: That would be him.

### SCENE s01631 | INT. ARBITRATION ROOM, OLD COURTHOUSE - DAY
Detected names (may be incomplete or contain aliases): JUDGE ABERNATHY, OKAFOR, LINDGREN, TSUKAMOTO, BAILIFF DUFFY
1 A ¶ Oak panels.
2 A A tall window.
3 A A radiator that knocks.
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
16 A ¶ The radiator knocks.
17 A Everyone looks at it.
18 D DUFFY: That's been happening since Monday, Judge.
19 D JUDGE ABERNATHY: Thank you, Duffy.
20 D TSUKAMOTO: Your Honor, may I ask counsel to speak one at a time?
21 D JUDGE ABERNATHY: You may. And you shall.
22 A ¶ A beat.
23 A Okafor pulls a paper from his folder.
24 D OKAFOR: Exhibit nine. A signature, notarized, dated the fourth.
25 D LINDGREN (reading, then slowly): That is not my client's signature.
26 D OKAFOR: What?
27 D LINDGREN: That is yours.
28 A ¶ Okafor looks at the page.
29 A His face drains.
30 A The radiator knocks again, softly.
31 D JUDGE ABERNATHY: Mr. Okafor, would you care to explain?
32 A ¶ Okafor laughs.
33 A Short.
34 A Then longer.
35 D OKAFOR: Your Honor, I may have grabbed the wrong folder.

### SCENE s00552 | INT. HOSPITAL CORRIDOR - VENDING ALCOVE - 4 A.M.
Detected names (may be incomplete or contain aliases): AGNES PRZYBYLSKI, WALTER OKAFOR
1 A ¶ A narrow nook off the oncology ward.
2 A A humming vending machine with half its snacks sold out, a stained couch, a wall clock that has lost its minute hand.
3 A Fluorescent light falls flat across everything.
4 A ¶ AGNES PRZYBYLSKI, 70s, in a cardigan buttoned wrong, feeds a dollar bill into the machine.
5 A The machine spits it back.
6 A She smooths it on the glass.
7 A Feeds it again.
8 A It spits it back.
9 A WALTER OKAFOR, 70s, in a hospital gown and a pair of borrowed slippers, shuffles in with an IV pole, and settles onto the couch, wincing, and watches her fail a third time.
10 D WALTER: It doesn't like that one.
11 D AGNES: It's a dollar.
12 D WALTER: Not that dollar.
13 A ¶ She tries a different bill.
14 A The machine takes it.
15 A A coil turns.
16 A A bag of pretzels falls.
17 D AGNES: Thank you.
18 D WALTER: You're welcome.
19 D AGNES: I wasn't talking to you.
20 D WALTER: I know.
21 A ¶ She retrieves the pretzels and sits on the other end of the couch.
22 A She opens the bag.
23 A Offers him one without looking.
24 A He takes it.
25 D AGNES: My husband's in 412.
26 D WALTER: Mine's in 414.
27 D AGNES: Your husband?
28 D WALTER: My wife. I misspoke. It's the hour.
29 D AGNES: Mm.
30 A ¶ They chew.
31 A The vending machine hums.
32 A A cart rattles somewhere down the hall.
33 D WALTER: What's he got?
34 D AGNES: Lungs.
35 D WALTER: Mine's a pancreas.
36 D AGNES: That's a bad one.
37 D WALTER: It is.
38 D AGNES: Mine too, I suppose.
39 D WALTER: You suppose.
40 A ¶ She turns the empty bag in her hands, folds it into a precise little triangle.
41 D AGNES: I'm supposed to be strong. He's the one in the bed. But I'm the one who needs to be told what to eat.
42 D WALTER: I eat nothing. I just carry the pole around.
43 D AGNES: Does it help?
44 D WALTER: Somewhat. It gives me something to hold.
45 A ¶ She laughs, a real, small laugh.
46 A He smiles.
47 A They sit with that for a minute.
48 A The clock without a minute hand shows 4:00, as it has for years.
49 D AGNES: What's her name?
50 D WALTER: Delia.
51 D AGNES: Delia. That's pretty.
52 D WALTER: It is.
53 D AGNES: And does she know you're out here?
54 D WALTER: She's asleep.
55 D AGNES: Does yours?
56 D WALTER: Walter?
57 D AGNES: No. I'm Agnes. Your wife.
58 D WALTER: I know who you are.
59 D AGNES: You called me Delia.
60 A ¶ He stops.
61 A A beat.
62 A He looks at his own hand, the cuff of the gown, the IV.
63 A He looks at her.
64 A His whole face collapses and reassembles itself.
65 D WALTER: Agnes.
66 D AGNES: Yes.
67 D WALTER: You're the one in 414.
68 D AGNES: I'm the one in 412. You're 414.
69 D WALTER: Then who's in 412?
70 D AGNES: My husband.
71 D WALTER: Who's your husband?
72 D AGNES: You, Walter.
73 A ¶ He nods slowly.
74 A His eyes fill.
75 A She takes his hand, the one without the IV, and holds it in both of hers.
76 D AGNES [CONT'D]: It's four in the morning. Let's go back.
77 D WALTER: Can I have a pretzel first?
78 A ¶ She hands him the empty bag.
79 A He holds it like a relic.
80 D WALTER [CONT'D]: They're all gone.
81 D AGNES: We'll get more.
82 A ¶ She feeds the machine another dollar.

### SCENE s01914 | INT. SKY-FERRY GALLEY, ABOVE THE CLOUDSEA - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN ZEPHYRA QUILL, FIRST MATE BRANNOCH TAL, PIP SILVERTONGUE, GUNNAR EMBERFIST, DAME OSWYTHA MARROWGATE
1 A ¶ Copper pots.
2 A Hanging lanterns.
3 A A porthole full of pink cloud.
4 A The deck tilts gently, then rights itself.
5 A ¶ CAPTAIN ZEPHYRA QUILL (40s, salt-and-pepper braid, brass goggles on her forehead) sits at a long table, a ledger open before her.
6 A Across from her, FIRST MATE BRANNOCH TAL (30s, scarred cheek, rope-burned palms) peels an apple with a dagger.
7 A At the stove, cook PIP SILVERTONGUE (14, flour on her nose) stirs a pot.
8 A And at the head of the table, GUNNAR EMBERFIST (60s, dwarf, forge-blackened apron) hammers a loose rivet with a wrench.
9 D ZEPHYRA: Tally's short again.
10 D BRANNOCH: By how much?
11 D ZEPHYRA: Forty crowns.
12 D GUNNAR: Forty crowns buys a lot of rivets.
13 D PIP: Forty crowns buys a lot of pie.
14 D BRANNOCH: Pip, you ate the last of the pie.
15 D PIP: I did not. Gunnar did.
16 D GUNNAR: I did not!
17 D ZEPHYRA: Nobody ate anything. Pie doesn't vanish on its own.
18 D BRANNOCH: It does on this ship.
19 D GUNNAR: Brannoch, hand me that lantern.
20 D BRANNOCH: Hand it yourself, Gunnar.
21 D PIP: I'll get it!
22 A ¶ Pip scrambles for the lantern.
23 A Gunnar reaches for it too.
24 A They collide.
25 A The lantern drops, rolls, and stops against the captain's boot.
26 A She stoops, retrieves it, and sets it on the table without comment.
27 D ZEPHYRA: Pip, bring the soup. Gunnar, mind the rivet. Brannoch, put the dagger away before you lose a finger.
28 D BRANNOCH (sheathing it): Aye, Captain.
29 D PIP: Soup's coming!
30 D GUNNAR: Rivet's holding!
31 A ¶ The galley hatch bangs open.
32 A A gust of cold air sweeps through.
33 A In the doorway stands DAME OSWYTHA MARROWGATE (70s, imperial blue coat, a cane topped with a silver owl).
34 A She surveys the room.
35 A Silence falls.
36 D OSWYTHA: Captain Quill. A word.
37 D ZEPHYRA: Dame Oswytha. You're a long way from the Admiralty.
38 D OSWYTHA: I came by courier. I had a thing to deliver.
39 A ¶ She taps the cane.
40 A A small brass tube falls from the owl's beak, rolls across the table, and stops at Zephyra's ledger.
41 D BRANNOCH (low): That's the royal seal.
42 D GUNNAR (lower): I'll kill the pie thief myself.
43 D PIP (lowest): Mother of clouds.
44 A ¶ Zephyra breaks the seal.
45 A Unrolls the scroll.
46 A Reads.
47 A Her face does not change, which is worse.
48 D ZEPHYRA: Pardon.
49 D OSWYTHA: Full. Retroactive. For the forty crowns, and the fifteen before that, and the rest.
50 D BRANNOCH: Captain?
51 D ZEPHYRA: We've been pardoned for smuggling.
52 D GUNNAR: Smuggling?
53 D PIP: We smuggled?
54 D ZEPHYRA: Pip, we've always smuggled.
55 D PIP: I thought it was just cargo.
56 D OSWYTHA: It was both.
57 A ¶ She turns toward the door.
58 A Stops.
59 A Looks over her shoulder.
60 D OSWYTHA [CONT'D]: The Admiralty requests that you stop. The Crown, however, would like to hire you.
61 D ZEPHYRA: For what?
62 D OSWYTHA: Smuggling. Of a different sort.
63 A ¶ Zephyra laughs, short and surprised.
64 A Brannoch whistles.
65 A Gunnar sets down the wrench.
66 A Pip carries the soup to the table, slowly, eyes wide, and for the first time in her short life says nothing at all.
67 D ZEPHYRA: Dame Oswytha, join us for dinner.
68 D OSWYTHA: I thought you'd never ask.
69 A ¶ Chairs scrape.
70 A The ship tilts.
71 A The lanterns swing.

### SCENE s01802 | INT. NIGHT-SHIFT DINER - BOOTH - 3 A.M.
Detected names (may be incomplete or contain aliases): RUTH ALMEIDA-STONE, LORELEI, WAITRESS, MAN, COOK, BERNARD
1 A ¶ Vinyl booths.
2 A A flickering OPEN sign.
3 A Rain on the glass.
4 A A jukebox plays something low.
5 A ¶ RUTH ALMEIDA-STONE, forties, sits with her coat on and a cold coffee.
6 A Across from her, her sister LORELEI, thirties, stares into her own cup.
7 A A WAITRESS stands at the end of the booth with a pot, patient.
8 A ¶ Nobody speaks.
9 A Ruth turns the sugar dispenser in a slow circle.
10 D RUTH: You came all this way.
11 D LORELEI: I said I would.
12 D WAITRESS: Refill, ladies?
13 D RUTH: Please.
14 A ¶ The waitress pours.
15 A Lorelei puts her hand over her cup, then removes it, then lets the waitress pour.
16 A ¶ A bell over the door jingles.
17 A A MAN in a soaked trench coat steps in, scans the room, and heads toward their booth.
18 D MAN (low): Ruth.
19 A ¶ Ruth does not look up.
20 A Lorelei does.
21 D LORELEI: Who is this?
22 D RUTH: Nobody.
23 D MAN: I'm not nobody. I'm the one who drove four hours.
24 A ¶ He sits next to Lorelei without being invited.
25 A She slides away, but he's already too close.
26 D LORELEI: Excuse me?
27 D MAN: Ruth, tell her.
28 D RUTH: Don't.
29 D MAN: Tell her about Dad.
30 A ¶ Lorelei turns to her sister.
31 D LORELEI: What about Dad?
32 A ¶ Ruth says nothing.
33 A The waitress retreats.
34 A Through the kitchen pass, a COOK in a stained apron slaps a bell.
35 D COOK [O.S.]: Order up! The jukebox ends one song and begins another.
36 D MAN: She hasn't told you.
37 D LORELEI: Ruth.
38 D RUTH: He's not who you think he was.
39 A ¶ The man leans back, satisfied, and slips off his hat.
40 A Under the diner light, he has their father's chin.
41 D LORELEI (whispering): Who are you?
42 D BERNARD: Bernard Almeida-Stone. Your brother.
43 A ¶ Lorelei stares at him.
44 A Then at Ruth.
45 A Ruth finally looks up, and she is crying, and not hiding it.
46 D RUTH: I wanted to tell you. I swear I did.
47 A ¶ Lorelei slides out of the booth and stands.
48 A She picks up her purse.
49 A Bernard stands too.
50 A Ruth reaches for her sister's sleeve, and Lorelei steps back.
51 D LORELEI: Sit down.
52 A ¶ Ruth sits.
53 A Bernard sits.
54 A Lorelei does not.

### SCENE s00957 | EXT. MESA OVERLOOK, HIGH DESERT - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, CAPTAIN LEONIDAS HARGROVE-ABASI, SALLY QUILLFEATHER-DIAZ, OWEN TIBBS-OKORO, EPHRAIM
1 A ¶ Red rock.
2 A A sky going gold.
3 A Four riders reining in on the edge of a drop that falls a thousand feet to the canyon floor.
4 A ¶ A man in a black duster, a STRANGER, holds his horse apart, a rifle across the saddle.
5 A The three behind him wait: CAPTAIN LEONIDAS HARGROVE-ABASI (50s, cavalry hat), a gunslinger called SALLY QUILLFEATHER-DIAZ (30s, two revolvers, one scarred cheek), and a boy bugler, OWEN TIBBS-OKORO (15).
6 D LEONIDAS (to the Stranger): Your name, friend.
7 D STRANGER: Don't have one.
8 D SALLY: Everyone has one.
9 D OWEN (excited): Maybe he's a ghost!
10 D STRANGER (dryly): Maybe.
11 A ¶ He lowers the rifle.
12 A He looks at Sally for a long moment, and something passes behind his eyes.
13 D STRANGER [CONT'D]: Sally Quillfeather. Last time I saw you, you were nine.
14 D SALLY: Who the hell --
15 D STRANGER: Ephraim. Ephraim Quillfeather.
16 D SALLY: My brother's dead.
17 D EPHRAIM: So they told you.
18 D LEONIDAS (over him): Stand down, Sally!
19 D SALLY (over him): Don't you dare, Ephraim!
20 A ¶ The echo rolls off the mesa and into the canyon.
21 A Owen lifts his bugle halfway to his mouth, then lowers it.
22 A Nobody moves.

### SCENE s01778 | INT. GRAIN SILO - BASE LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE CROSBY, MAX, ODUYA, OLD ENRICO FABBRI, STRANGER, ANSELM
1 A ¶ Rust-streaked concrete.
2 A A single hanging bulb swings.
3 A Wheat dust hangs in the beam.
4 A Somewhere above, metal ticks.
5 A ¶ DELPHINE CROSBY, thirties, holds a flashlight steady.
6 A MAXWELL "MAX" ODUYA, twenties, kneels by a hatch with a crowbar.
7 A OLD ENRICO FABBRI, seventies, sits on an upturned bucket.
8 A A STRANGER stands motionless at the foot of the ladder, face in shadow.
9 D DELPHINE: Everyone. Stay where you are.
10 A ¶ Nobody moves.
11 A The ticking stops.
12 D MAX (to himself): It's the pipes. It's just the pipes.
13 D ENRICO (to Max): Boy. Put the bar down.
14 A ¶ Max doesn't.
15 A The Stranger takes one slow step into the light.
16 A Wheat dust clings to the shoulders of his coat.
17 A His eyes do not blink.
18 D STRANGER: I've been up there a long time.
19 D DELPHINE (to the Stranger): Who are you?
20 D STRANGER: Anselm. My name was Anselm.
21 A ¶ The bulb dies.
22 A In the dark: the ladder groans.
23 A Delphine's flashlight snaps back on.
24 A ¶ ANSELM is now six feet from Max, who has raised the crowbar.
25 A The wheat around his boots is moving.
26 D ANSELM: It remembers me.
27 D ENRICO (whisper): Don't let him touch the grain.
28 D DELPHINE (to the group): Back to the door. All of you. Now.
29 A ¶ Max swings.
30 A Anselm catches the bar in one hand.
31 A The silo shudders, and the floor of wheat begins to rise.

### SCENE s01242 | EXT. DRY SALT LAKE - HOMESTEAD PORCH - AFTERNOON
Detected names (may be incomplete or contain aliases): JEREMIAH PIKE, STRANGER, JEDEDIAH
1 A ¶ A white crust of land that runs to the mountains.
2 A A weathered shack with a sagging porch roof.
3 A A rain barrel, empty.
4 A A windmill creaks, turning once in a while.
5 A ¶ An old rancher, JEREMIAH PIKE (70s, suspenders, a face like cracked leather), sits on a rocking chair whittling a stick.
6 A A shotgun leans against the rail.
7 A He doesn't pick it up.
8 A ¶ A rider appears out of the shimmer, leading a skinny horse.
9 A The rider dismounts at the edge of the yard: a lean man in a long duster, hat pulled low.
10 A A STRANGER.
11 D STRANGER: Afternoon.
12 D JEREMIAH: Afternoon.
13 D STRANGER: I'm looking for water for the horse.
14 D JEREMIAH: Barrel's dry.
15 D STRANGER: So I see.
16 D JEREMIAH: Well's behind the house. Bucket's on the nail. Mind the rope.
17 A ¶ The Stranger nods.
18 A Leads the horse around the side.
19 A A pump handle squeaks.
20 A Water splashes.
21 A Jeremiah whittles on.
22 A ¶ Presently the Stranger returns, hat in hand.
23 A He is younger than he looked: forty, if that.
24 A A scar runs down one cheek.
25 D STRANGER [CONT'D]: That's a good well.
26 D JEREMIAH: Dug it myself. Nineteen years ago.
27 D STRANGER: Nineteen.
28 D JEREMIAH: You say that like it means something.
29 D STRANGER: Might.
30 D JEREMIAH: Sit if you like.
31 A ¶ The Stranger takes the other step of the porch.
32 A Lowers himself.
33 A Their eyes are on the horizon.
34 D JEREMIAH [CONT'D]: You got a name?
35 D STRANGER: Used to.
36 D JEREMIAH: Used to is a fine name for a man.
37 A ¶ The Stranger half smiles.
38 A The windmill turns.
39 A A hawk circles far off.
40 D STRANGER: Jedediah.
41 D JEREMIAH (still whittling): Jedediah what?
42 D JEDEDIAH: Pike.
43 A ¶ The knife stops.
44 A Jeremiah stares at the stick in his hand as though it had just spoken.
45 D JEREMIAH: Pike's my name.
46 D JEDEDIAH: I know it.
47 D JEREMIAH: I had a boy named Jedediah.
48 D JEDEDIAH: I know.
49 A ¶ Neither looks at the other.
50 A The wind picks up a veil of white dust and lets it fall again.
51 D JEREMIAH: He ran off when he was twenty-one.
52 D JEDEDIAH: Twenty-one and two months.
53 D JEREMIAH: Took a horse.
54 D JEDEDIAH: This one's his granddaughter.
55 A ¶ Jeremiah laughs, short, dry, a sound with no air in it.
56 A He lowers the stick.
57 A Looks at it.
58 A Places it carefully on the rail.
59 D JEREMIAH: You hungry?
60 D JEDEDIAH: I could eat.
61 D JEREMIAH: I've beans.
62 D JEDEDIAH: Beans are good.
63 D JEREMIAH: Beans are what there is.
64 A ¶ He rises with a groan.
65 A Stops with a hand on the door.
66 D JEREMIAH [CONT'D]: Don't go getting any ideas about staying.
67 D JEDEDIAH: No, sir.
68 D JEREMIAH: I snore.
69 D JEDEDIAH: I remember.
70 A ¶ Jeremiah's back is turned.
71 A His shoulders tremble once.
72 A Then he goes inside.
73 A Jedediah sits there a while longer, hat on his knee, looking at the white horizon.
74 A ¶ He picks up the stick Jeremiah left on the rail and, with the little knife from his belt, begins to finish the carving.
75 T FADE OUT.

### SCENE s01499 | INT. REVOLVING RESTAURANT ATOP A TELEVISION TOWER - NIGHT
Detected names (may be incomplete or contain aliases): DIMITRI OKAFOR-LIND, SOLANGE ASHWORTH-NDIAYE, HALVARD PEREIRA-GOH, SABINE KOWALSKI-ABARA, WAITER, THEODORE BRIGHT-OSEI
1 A ¶ White tablecloths.
2 A A slow circular carpet.
3 A The city lights sweep past the glass like a clock hand.
4 A ¶ At a corner table sit two couples and a waiter.
5 A DIMITRI OKAFOR-LIND (50s, sharp tie) stirs his coffee without drinking it.
6 A His wife SOLANGE ASHWORTH-NDIAYE (40s, pearls, sharp eyes) watches the room.
7 A Across from them, HALVARD PEREIRA-GOH (40s, tuxedo, a bandaged wrist) smiles too widely, while his date SABINE KOWALSKI-ABARA (30s, red dress, tense jaw) spins the stem of her glass.
8 A The WAITER, THEODORE BRIGHT-OSEI (20s, ironed apron), refills the water.
9 A ¶ The restaurant turns one degree.
10 A Dimitri glances at Halvard.
11 A Halvard glances at Sabine.
12 A Sabine glances at the waiter.
13 A The waiter, hands steady, sets the pitcher down, slides a folded napkin to Solange and steps back with a bow.
14 A Solange unfolds it beneath the table and reads.
15 A Her face does not move.
16 D DIMITRI (low): Well?
17 D SOLANGE: Sit still.
18 A ¶ The restaurant turns another degree.
19 A Halvard lifts his glass to his lips, and Sabine, without looking, takes his wrist.
20 A He freezes.
21 A Dimitri's hand slides toward his jacket.
22 A Theodore, still beside the table, tightens his grip on the pitcher handle.
23 A Solange folds the napkin back along its creases, lays it by her plate, and smiles at Sabine for the first time.
24 D SOLANGE [CONT'D] (pleasant): She tells me the elevator has stopped.
25 A ¶ The lights go out.
26 A In the dark, the carpet keeps turning, and she says nothing at all.

### SCENE s01673 | INT. ABANDONED CURLING RINK - DUSK
Detected names (may be incomplete or contain aliases): TOBIAS WREN, MIREILLE WREN, ANNOUNCER
1 A ¶ A vast barn of a building, its ice long since gone to a grey, cracked sheet.
2 A Rust-colored light pours through broken clerestory windows and lies in long bars across the floor.
3 A Hanging from the rafters, a faded banner reads PROVINCIAL CHAMPIONS 1987.
4 A ¶ TOBIAS WREN (60s, broad shoulders gone soft, a wool cap pulled low) kneels at the hack, one stone beside him.
5 A His hands, thick-knuckled and patient, rest on the handle as if on a sleeping animal's flank.
6 A ¶ Ten paces away stands his granddaughter, MIREILLE WREN (17, lean, wearing a team jacket two sizes too large).
7 A She holds a broom she does not seem to want.
8 A ¶ A radio crackles on a rusted bench.
9 A A tinny announcer's voice leaks out.
10 D ANNOUNCER [V.O.] (through radio): And the final end goes to Saskatoon, who take the national title.
11 A ¶ Tobias does not look at the radio.
12 A He sets the stone, and pushes.
13 A It slides, slow and crooked, and dies far short of the house.
14 D MIREILLE: You pulled it.
15 D TOBIAS: The ice is gone, that's all.
16 A ¶ She sweeps a few strokes anyway, out of habit, then stops.
17 D MIREILLE: Coach called. They filled my spot.
18 A ¶ Tobias nods, as if to himself.
19 A He wipes the handle with his sleeve, slowly, front and back.
20 D TOBIAS: Cold in here.
21 D MIREILLE: Yeah.
22 A ¶ Neither moves.
23 A Outside, a truck idles, waiting.
24 A Its horn gives a single polite tap.
25 A ¶ She lowers the broom to the floor, carefully, as one lays down a sleeping child.
26 A Then she walks toward the door.
27 A At the threshold she turns.
28 D MIREILLE: You coming?
29 A ¶ Tobias lifts the stone, studies it, and sets it upright on the bench beside the radio.
30 D TOBIAS: In a minute.
31 A ¶ She goes.
32 A The light on the floor dims one bar at a time.

### SCENE s02055 | INT. SCHOOL BAND ROOM - AFTER HOURS
Detected names (may be incomplete or contain aliases): JUBILEE ADEBAYO-MORROW, HOLLY, PRZYBYLSKI, MOM
1 A ¶ A cramped practice room.
2 A Gray carpet, acoustic foam on the walls, a battered upright piano, music stands knocked askew.
3 A A single lamp glows.
4 A On the shelf, a row of dusty trophies.
5 A Rain on the high window.
6 A ¶ JUBILEE ADEBAYO-MORROW (16, braces, oversize cardigan, a trombone case at her feet) perches on the piano bench, picking at a loose thread.
7 A ¶ Across the room, HOLDEN "HOLLY" PRZYBYLSKI (17, drum sticks tucked behind one ear, band jacket, a skateboard under one arm) leans in the doorway.
8 D HOLLY: They said you quit.
9 D JUBILEE: I didn't quit.
10 D HOLLY: They said it at assembly. Mr. Dunphy said it.
11 D JUBILEE: Mr. Dunphy says a lot of things.
12 D HOLLY: He said you were "taking a break."
13 D JUBILEE: It's a break.
14 D HOLLY: From what?
15 D JUBILEE: From being second chair.
16 D HOLLY: You're not second chair.
17 D JUBILEE: I'm second to Ingrid.
18 D HOLLY: Ingrid has a private tutor.
19 D JUBILEE: Ingrid has a private everything.
20 D HOLLY: So what?
21 D JUBILEE: So I can't win.
22 D HOLLY: Jubilee.
23 D JUBILEE: What?
24 D HOLLY: It's a trombone, not a war.
25 D JUBILEE (sharply): You don't understand.
26 D HOLLY: Then explain.
27 D JUBILEE: It's not that I'm not good. It's that I'm good and it doesn't matter.
28 D HOLLY: It matters to me.
29 D JUBILEE: You're a drummer.
30 D HOLLY: I'm a drummer who listens.
31 D JUBILEE: To what?
32 D HOLLY: To you. Every Tuesday. Through the wall.
33 D JUBILEE: That's creepy.
34 D HOLLY: It's the practice room next door.
35 D JUBILEE: It's still creepy.
36 D HOLLY: It's the best thing I hear all week.
37 A ¶ A phone rings, muffled, from inside Holly's jacket.
38 A He fishes it out, glances at the screen.
39 D HOLLY [CONT'D] (into phone): Hey, Mom. No. I'm still at school. No, I'm fine.
40 D MOM [V.O.] (tinny): Holden, it's nine o'clock. Where are you?
41 D HOLLY (into phone): Band room. Helping a friend.
42 D MOM [V.O.]: Which friend?
43 D HOLLY (into phone): Jubilee.
44 D MOM [V.O.]: The trombone girl?
45 D HOLLY (into phone): Mom.
46 D MOM [V.O.]: I'm only asking.
47 D HOLLY (into phone): I'll be home soon.
48 A ¶ He hangs up.
49 A Pockets the phone.
50 A Jubilee is watching him.
51 D JUBILEE: She knows about me?
52 D HOLLY: Everyone knows about you.
53 D JUBILEE: What do they know?
54 D HOLLY: That you're really good. And that you're pretending you're not.
55 D JUBILEE: I'm not pretending.
56 D HOLLY: Okay.
57 D JUBILEE: I'm not.
58 D HOLLY: Jubilee, play something.
59 D JUBILEE: Now?
60 D HOLLY: Now.
61 D JUBILEE: There's nobody here.
62 D HOLLY: I'm here.
63 A ¶ A long silence.
64 A Rain on the window.
65 A Jubilee looks at the case, then at him.
66 D JUBILEE: What do you want to hear?
67 D HOLLY: Whatever you were going to play before you quit.
68 A ¶ She snaps the latches open.
69 A Lifts the trombone.
70 A Slides the slide out, slow, like a drawn breath.
71 D JUBILEE: It's not finished.
72 D HOLLY: Neither am I.
73 A ¶ She raises the horn.
74 A He crosses the room, sits on an upturned bucket, and pulls out his sticks.
75 A He taps the lid of the piano once, softly, counting her in.

### SCENE s00111 | INT. GRAIN SILO FREIGHT ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): VALERIAN ASHFORD-OKORO, DOROTHEA KLEIN-AMADI
1 A ¶ A rusted cage elevator, open at the sides, hangs in the cavernous dark of a silo.
2 A A single caged bulb swings overhead.
3 A Below, forty meters down, a drift of grain glimmers like gold sand.
4 A ¶ VALERIAN ASHFORD-OKORO, a lean man in his fifties with a gray ponytail and an unbuttoned coat, grips the control lever.
5 A Across from him stands DOROTHEA KLEIN-AMADI, a woman in her forties in a flight jacket, her back pressed to the cage and her eyes on his hands.
6 A The elevator hums, mid-shaft, motionless.
7 A ¶ She breathes slowly.
8 A He does not look at her.
9 D VALERIAN: Press the button.
10 D DOROTHEA: Which one?
11 D VALERIAN: The red one.
12 A ¶ She doesn't move.
13 A He sighs.
14 D VALERIAN [CONT'D]: It won't hurt you.
15 D DOROTHEA: It's the alarm.
16 D VALERIAN: It's the stop.
17 D DOROTHEA: It says ALARM.
18 D VALERIAN: The label is wrong.
19 A ¶ She laughs, shrill and brittle.
20 A He turns his head.
21 A In the swinging light, his eyes are red-rimmed and exhausted.
22 D VALERIAN [CONT'D]: Press it.
23 D DOROTHEA: Why do you need it stopped?
24 D VALERIAN: So we can talk.
25 D DOROTHEA: We are talking.
26 D VALERIAN: So we can talk without the sound.
27 A ¶ She studies him.
28 A Then slowly, she lifts a gloved hand and presses the red button.
29 A A shriek tears through the silo.
30 A He winces.
31 A She holds it.
32 A The cage shudders and jerks, and her face is a mask of calm.
33 A ¶ He lunges.
34 A She drops the glove and slams him against the wall.
35 A For a second they are locked together, breathing in each other's faces, and then she shoves him back, hard, and the lever snaps under her palm.
36 A The elevator drops, ten feet, twenty, and catches with a bang that rattles every bone.
37 A ¶ They hang there, gasping.
38 A The alarm dies.
39 A The bulb swings.
40 A In the new silence, a faint trickle of grain begins to run.
41 D DOROTHEA (panting): That's the stop.
42 D VALERIAN (gasping): That's the stop.
43 A ¶ He slides down the wall to sit.
44 A She stays upright, trembling.
45 D DOROTHEA: Now talk.
46 D VALERIAN: You won't like it.
47 D DOROTHEA: I have never liked you.
48 A ¶ He laughs.
49 A It becomes a cough.
50 A She waits.
51 D VALERIAN: I sold the shipment.
52 D DOROTHEA: Which shipment?
53 D VALERIAN: All of it.
54 A ¶ She stops breathing.
55 A Looks at the dark below.
56 A The grain has found a seam and is pouring, a thin gold thread into the black.
57 D DOROTHEA: Who bought it?
58 D VALERIAN: You don't want to know.
59 D DOROTHEA: Valerian.
60 D VALERIAN: Your brother.
61 A ¶ The bulb stops swinging.
62 A The elevator creaks.
63 A She closes her eyes.
64 A When she opens them, her face is clear and cold and very quiet.
65 D DOROTHEA: Good.
66 D VALERIAN: Good?
67 D DOROTHEA: I was hoping it was him.
68 A ¶ She steps over his legs, grabs the broken lever, and wrenches it back into the housing.
69 A The motor groans.
70 A The elevator begins, slowly, to rise.
71 D VALERIAN: Where are we going?
72 D DOROTHEA: To see my brother.
73 D VALERIAN: And me?
74 A ¶ She looks down at him.
75 A Ignores the question.
76 A Rolls her shoulders.
77 A The cage climbs toward the dim circle of the roof, grain still whispering through the dark below.

### SCENE s00678 | INT. STRIKE ZONE LANES - LANE 14 - NIGHT
Detected names (may be incomplete or contain aliases): SPUD, NOWAK, LORETTA VANCE, DUTCH AMARI, PEARL, GIDEON, MINNOW
1 A ¶ The neon pins glow pink over a pile of cash on the scoring table.
2 A Six people stand frozen under the haze of cigarette smoke.
3 A ¶ KAZIMIERZ "SPUD" NOWAK, 50s, shoes untied, grips a ball like a grenade.
4 A LORETTA VANCE, 40s, red lipstick, holds the money.
5 A DUTCH AMARI, 30s, tall, leans on the ball return.
6 A PEARL, 60s, the lane attendant, polishes a shoe with great calm.
7 A GIDEON, 20s, nervously jingles car keys.
8 A MINNOW, 12, drops under the table.
9 D SPUD: Loretta, put the cash down and nobody gets scuffed.
10 D LORETTA: Scuffed? Spud, you rented these shoes.
11 D DUTCH: Pearl, whose side are you on?
12 D PEARL: Lane 14's.
13 A ¶ Gideon bolts.
14 A Spud hurls the ball; it thunders down the lane and scatters the pins, and Gideon, mid-stride, hops and screams as his keys skid into the gutter.
15 D MINNOW (from under the table): Strike!

### SCENE s01566 | EXT. THE GLASS DESERT - DAWN
Detected names (may be incomplete or contain aliases): WARDEN SALT, OPPOSITE HER, WILLA, FAIRWEATHER-ACHEBE
1 A ¶ A vast plain of fused sand, smooth as a frozen sea.
2 A Wind carves ripples in the surface.
3 A The sky is a bruise of peach and violet.
4 A Far off, a ridge of black towers rises like broken teeth.
5 A ¶ Two figures stand on the glass.
6 A Each throws a long shadow.
7 A ¶ THE WARDEN OF SALT, tall, gaunt, draped in a cloak of white crystals, holds a staff topped with a clouded lens.
8 A Where her feet touch the glass, small stars of frost bloom.
9 A ¶ OPPOSITE HER, a girl: WILHELMINA "WILLA" FAIRWEATHER-ACHEBE, 15, in a patched travelling coat, a leather satchel across her chest.
10 A She carries a lantern whose flame is a deep, steady blue.
11 D WARDEN: You are a long way from the green.
12 D WILLA: I had a reason.
13 D WARDEN: Everyone does.
14 D WILLA: Mine is better.
15 A ¶ The Warden tilts her head.
16 A The crystals on her cloak chime.
17 D WARDEN: Show me.
18 A ¶ Willa lifts the lantern.
19 A The blue flame flares.
20 A Across the glass, a hundred feet away, a patch of sand ripples and darkens, as though something beneath it has turned over in its sleep.
21 D WARDEN [CONT'D] (a long breath): Who gave you that?
22 D WILLA: My grandmother.
23 D WARDEN: Where is she?
24 D WILLA: Under the sand.
25 D WARDEN: I do not take the dead.
26 D WILLA: She said you'd say that.
27 A ¶ The Warden raises her staff.
28 A The lens clears.
29 A In it, a swirl of tiny figures: a woman in a shawl, a child on her knee, an old man laughing, all spinning slowly.
30 D WILLA [CONT'D] (whispering): That's her.
31 D WARDEN: So it is.
32 D WILLA: Let her go.
33 D WARDEN: She is not mine to release.
34 D WILLA: Then whose?
35 A ¶ The Warden looks past the girl at the black towers.
36 A Wind rattles the crystals on her cloak.
37 D WARDEN: Theirs.
38 D WILLA: The Silent Court.
39 D WARDEN: You know the name.
40 D WILLA: I know all the names. She taught me.
41 A ¶ Willa steps forward.
42 A The lantern's blue light spills across the glass, and where it touches, cracks race out in glittering fans.
43 A The Warden stumbles back a half step.
44 D WARDEN: Careful. This ground is old.
45 D WILLA: So am I.
46 D WARDEN: You are fifteen.
47 D WILLA: I've been fifteen a long time.
48 A ¶ They stand.
49 A The wind drops.
50 A Even the cracks stop whispering.
51 D WARDEN: What will you give?
52 D WILLA: What do you ask?
53 D WARDEN: A season of your life.
54 D WILLA: Which season?
55 D WARDEN: Spring.
56 A ¶ Willa's face does not change.
57 A Her hand tightens on the lantern.
58 D WILLA: Why spring?
59 D WARDEN: Because it is when you were meant to bloom.
60 D WILLA: And in exchange?
61 D WARDEN: One hour with her. No more.
62 D WILLA: An hour.
63 D WARDEN: Under the sand. Where she sleeps.
64 A ¶ Willa looks at the blue flame.
65 A At the towers.
66 A At the lens, where a tiny woman raises her small hand.
67 D WILLA (to herself): One hour.
68 D WARDEN: Choose.
69 D WILLA: I choose.
70 D WARDEN: Speak it.
71 A ¶ At the same moment, in the same breath, both of them whisper a single word.
72 D WILLA: Yes.
73 D WARDEN: Yes.
74 A ¶ The glass shudders.
75 A A wide circle of the desert floor turns clear as water, and beneath it, deep down, a long stair descends into lamplight.
76 A ¶ The Warden steps aside.
77 A She sweeps one crystalled arm toward the opening.
78 A Willa walks forward, lantern held before her.
79 A Frost blooms behind her heels.
80 A ¶ At the edge of the clear circle she pauses.
81 A Does not turn.
82 D WILLA [CONT'D]: Warden. Will it hurt?
83 D WARDEN: Only when you climb back up.
84 A ¶ Willa nods.
85 A Takes the first step down.
86 A The Warden stands alone on the glass, her staff planted, the wind picking up again, until the girl's blue light shrinks to a point and winks out.

### SCENE s02015 | INT. COLLECTOR'S LIBRARY, COUNTRY HOUSE - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR CLEMENTINE ARDEN-OYELOWO, HOUSEKEEPER, PRUDENCE WHITLOCK-ABARA
1 A ¶ A tall room lined with leather spines, a ladder on a brass rail.
2 A Green-shaded lamps, a cold hearth, tea service untouched on a low table.
3 A Rain on the long windows.
4 A ¶ INSPECTOR CLEMENTINE ARDEN-OYELOWO (40s, brown tweed, a notebook in her breast pocket) stands at a glass cabinet.
5 A A single shelf in the cabinet is empty, the dust outlining a rectangle where a book once stood.
6 A ¶ At the fireplace, holding a cup of tea she hasn't touched, stands the HOUSEKEEPER, PRUDENCE WHITLOCK-ABARA (50s, gray dress, keys at her belt).
7 A Her hand does not shake.
8 A Her eyes never leave the Inspector.
9 D CLEMENTINE: It was here this morning.
10 D PRUDENCE: It was.
11 D CLEMENTINE: You're certain.
12 D PRUDENCE: I dusted it myself.
13 D CLEMENTINE: At what hour?
14 D PRUDENCE: Nine.
15 D CLEMENTINE: And you locked the cabinet.
16 D PRUDENCE: I did.
17 D CLEMENTINE: Who else has the key?
18 D PRUDENCE: The master.
19 D CLEMENTINE: Who is abroad.
20 D PRUDENCE: In Lisbon.
21 A ¶ The Inspector runs a gloved finger along the empty shelf.
22 A Studies the rectangle.
23 A Turns.
24 D CLEMENTINE: Mrs. Whitlock-Abara. How long have you served this house?
25 D PRUDENCE: Twenty-two years.
26 D CLEMENTINE: And the book?
27 D PRUDENCE: It was here before I came.
28 D CLEMENTINE: What was it worth?
29 D PRUDENCE (a pause): I don't know.
30 D CLEMENTINE: You don't know.
31 D PRUDENCE: It wasn't mine to value.
32 A ¶ She sets the teacup on the mantel with a faint, precise click.
33 A Clementine watches her do it.
34 D CLEMENTINE: You could have taken it.
35 D PRUDENCE: I could have.
36 D CLEMENTINE: You had the key and the hour.
37 D PRUDENCE: I did.
38 D CLEMENTINE: So why didn't you?
39 D PRUDENCE: Because I'd have been caught.
40 D CLEMENTINE: By whom?
41 D PRUDENCE: By you, Inspector.
42 A ¶ For a moment, the two women regard each other.
43 A A log settles in the cold hearth, which holds no fire.
44 A The rain slackens.
45 D CLEMENTINE (slowly): You knew I'd come.
46 D PRUDENCE: I've been expecting you since breakfast.
47 D CLEMENTINE: Because the book was gone.
48 D PRUDENCE: Because it was never there.
49 A ¶ Clementine goes still.
50 A She looks at the dust on the shelf.
51 A At the rectangle.
52 A Then she crouches and, with her pen, lifts an edge of the shelf paper.
53 A Beneath it, in the wood, a thin slot.
54 A Inside the slot, nothing.
55 A She lets the paper fall.
56 D CLEMENTINE: It's a decoy.
57 D PRUDENCE: It's been a decoy for thirty years.
58 D CLEMENTINE: Who knew?
59 D PRUDENCE: Everyone who works here.
60 D CLEMENTINE: Except the master?
61 D PRUDENCE: Except the master.
62 A ¶ Clementine straightens.
63 A For the first time, she smiles, and Prudence, almost, smiles back.
64 D CLEMENTINE: Where is it, Mrs. Whitlock-Abara?
65 D PRUDENCE: In the kitchen. Behind the flour tin. I'll make you a fresh pot.
66 A ¶ She lifts the tray and goes out.
67 A Clementine stays where she is, one hand resting on the glass.

### SCENE s00865 | INT. SUBURBAN KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): MINA, GUS, ROWAN
1 A ¶ Cereal boxes, a half-eaten banana, a school permission slip stuck under a magnet.
2 A The radio plays traffic.
3 A ¶ MINA, forties, tosses a lunch bag onto the counter.
4 A GUS, her father, seventies, stands at the sink drying a mug.
5 A ROWAN, eleven, her son, sits on a stool with a backpack on his lap, hands tight on the straps.
6 A ¶ She checks her watch.
7 A He sets down the mug.
8 A The boy stares at the table.
9 D MINA: Rowan, shoes.
10 D ROWAN: They're on.
11 D MINA: Other shoes.
12 A ¶ He does not move.
13 A She walks around the counter and crouches in front of him.
14 A She puts a hand on his knee.
15 A He pulls it away.
16 D GUS: Mina. Let him.
17 D MINA: Dad, we're late.
18 D GUS: He's not ready.
19 A ¶ She looks up at her father, then at her son, then at the clock.
20 A She opens her mouth, closes it, and takes a breath.
21 D MINA: Rowan, is it the test?
22 A ¶ He shakes his head.
23 A She waits.
24 A The radio moves on to the weather.
25 A Gus takes the backpack from the boy's lap, sets it on the floor, and sits beside him.
26 D GUS: I'll walk you in.
27 A ¶ Rowan nods once.
28 A Mina stands, picks up the lunch bag, and holds it out.
29 A He takes it.
30 D MINA: I'll pick you up.
31 D ROWAN: Okay.
32 A ¶ She leans in to kiss his hair, and for the first time he lets her.
