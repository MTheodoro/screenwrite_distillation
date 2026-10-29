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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00032.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02082 | INT. ZERO-G LAUNDROMAT - ORBITAL HAB RING - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): OSKAR, LIN, DOC FENWICK, RHEA
1 A ¶ Washers hum on the walls like nesting beetles.
2 A Clothes float in soapy spheres.
3 A ¶ TANVEER and MBALI float by the dryers, arguing in whispers.
4 A She jabs a finger at his chest.
5 A He catches it, gently.
6 A OSKAR clings to a handrail, pale, a laundry bag knotted around his wrist.
7 A ¶ LIN drifts up from the aft hatch, holding a wrench, and cuts the whisper in half with her voice.
8 D LIN: Who ran a wash with coolant in it?
9 A ¶ Nobody answers.
10 A She turns slowly in the air.
11 A They all look at Oskar.
12 D OSKAR: It was a blue bottle.
13 D LIN: It was coolant.
14 A ¶ DOC FENWICK, an old man in a cardigan, pushes off the far wall like a swimmer and catches a floating sock.
15 A He examines it, sniffs it, and sighs.
16 D DOC FENWICK: Everybody out.
17 A ¶ RHEA, the youngest, laughs, then stops, then laughs harder.
18 A The washer behind her shudders.
19 A A warning light goes from green to red.
20 A Mbali grabs Tanveer.
21 A Lin grabs Oskar.
22 A Doc Fenwick grabs the sock.
23 A The machine bursts open and a pink cloud of foam rolls across the room, swallowing all six of them.

### SCENE s02275 | INT. CRYO-VAULT, DEEP STORAGE - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT KESTREL, PRIYA NAIR, OLUWASEUN, SEUN, GUNNAR, TESS HALVORSEN, OLD MAN BRIGHT
1 A ¶ Frost.
2 A Rows of sleeper pods under blue light.
3 A Six figures in thermals move between them.
4 A ¶ SERGEANT KESTREL, scarred, ex-security.
5 A DR. PRIYA NAIR, wire-rimmed, hands shaking.
6 A OLUWASEUN, nicknamed SEUN, a maintenance rat.
7 A GUNNAR, silent, huge.
8 A TESS HALVORSEN, a trainee with a clipboard.
9 A OLD MAN BRIGHT, hundred and four, upright in a wheelchair.
10 D KESTREL: Everyone, check your pods. Count aloud.
11 D TESS: Four. Five. Six.
12 D PRIYA (muttering): All green. All green. Why is it all green.
13 D GUNNAR: Quiet.
14 D SEUN: Priya, you want me on the cooling loop?
15 D PRIYA: No. Stay here.
16 D BRIGHT (to the room): Count again.
17 A ¶ They freeze.
18 A Every pod lid is open.
19 A Every pod is empty.
20 A Kestrel and Gunnar swing their lights at each other, back to back, and the beams cross on the same blank white wall.
21 D KESTREL (low): Then who's been counting us?

### SCENE s01011 | INT. ROADSIDE MOTEL LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CLERK, RHONDA, TRUDY, LAMAR, DALE
1 A ¶ A cinderblock room with six humming dryers and a vending machine that sells nothing.
2 A A single bulb, bare, buzzes.
3 A A mop bucket stands in a pool of gray water.
4 A The door to the lot is propped open with a brick.
5 A ¶ A CLERK (30s, name tag crooked, plastic key ring on his wrist) folds towels at a steel table.
6 A RHONDA (40s, bathrobe over street clothes, a baby monitor in her hand) sits on a plastic chair watching a dryer spin.
7 A TRUDY (60s, hair curlers, cardigan buttoned wrong) stares into a washer as it fills.
8 A LAMAR (20s, hoodie, headphones, a garbage bag of clothes at his feet) leans against the wall.
9 A ¶ The clerk looks up when a dryer buzzes.
10 A Looks at the others.
11 A Looks back at the towels.
12 D RHONDA: You're not going to fold mine, are you?
13 D CLERK: No, ma'am.
14 D RHONDA: Good.
15 D TRUDY: There's a stain on my sleeve that won't come out.
16 D CLERK: Which one?
17 D TRUDY: The red one.
18 D CLERK: I don't think that's coming out.
19 D TRUDY: That's what everyone says.
20 A ¶ Lamar pulls off his headphones.
21 A Everyone is looking at the washer.
22 A The water inside has turned pink.
23 D LAMAR: Is that normal?
24 D CLERK: It happens.
25 D LAMAR: What happens?
26 D CLERK: Colors bleed.
27 A ¶ Rhonda holds the baby monitor to her ear.
28 A A faint hiss of static.
29 A She turns the knob.
30 A The hiss grows, and under it, a slow wet breathing.
31 D RHONDA: Trudy, did you bring a baby?
32 D TRUDY: Of course not.
33 A ¶ The Clerk sets down the towel.
34 A His eyes drift to the open door, the dark lot, the single car with its engine ticking.
35 D CLERK (quietly): Dale. My name is Dale.
36 D LAMAR: What?
37 D DALE: You asked me my name, earlier. I wasn't ready to say.
38 A ¶ The overhead bulb flickers.
39 A Rhonda lowers the monitor slowly.
40 A The breathing now comes from the dryer, the one still turning, the one with the small round window.
41 D DALE [CONT'D]: Nobody open that.
42 A ¶ Trudy opens it.

### SCENE s00063 | EXT. FLOATING MARKET ON THE SKY-LAKE OF AELDRATH - DAWN
Detected names (may be incomplete or contain aliases): THESSALONIKE VANTERPOOL-ORUNMILA, CORNELIUS ABRAHAM-WYNNE, MORWENNA
1 A ¶ Boats hang in the air on ropes of braided cloud.
2 A Merchants shout over a sea of drifting lanterns.
3 A Gulls the color of silver coins wheel overhead.
4 A Far below, a moonlit ocean.
5 A ¶ A skiff drifts toward the market's edge.
6 A At its tiller sits THESSALONIKE VANTERPOOL-ORUNMILA (30s, battered leather coat, a cutlass at her belt).
7 A Behind her, the apprentice-mage CORNELIUS ABRAHAM-WYNNE (19, ink-stained fingers, spellbook hugged).
8 A Between them, hooded and silent, a cloaked woman waits: this is MORWENNA (age unknown, eyes like twin moons).
9 D THESSALONIKE: Hold on.
10 D CORNELIUS: To what?
11 D THESSALONIKE: Anything.
12 A ¶ The skiff slams into the dock.
13 A Cornelius pitches forward and Morwenna catches him by the collar without opening her eyes.
14 D MORWENNA: Careful, child.
15 D CORNELIUS: I'm trying.
16 D MORWENNA: Try harder.
17 D THESSALONIKE (tying off the boat): We have until noon. Cornelius, you find the spice merchant. Morwenna, the cloud-weaver. I'll find the passage.
18 D CORNELIUS: What passage?
19 D THESSALONIKE: The one that isn't on the map.
20 D MORWENNA: It never is.
21 A ¶ They split.
22 A Thessalonike weaves through the crowd, hand on her cutlass.
23 A Cornelius ducks under a banner of dried starfish.
24 A Morwenna drifts like smoke, unhurried, and stalls fall quiet as she passes.
25 A ¶ At the spice stall, Cornelius meets a vendor with ten arms.
26 A Everything he says comes out in a nervous rush.
27 D CORNELIUS [CONT'D] (to the vendor): Er, hello, I need saffron. The sky kind. Not the ground kind.
28 A ¶ At the weavers' stall, Morwenna lifts a veil of mist, and the old woman behind it kneels.
29 D MORWENNA (quietly): Don't. I am not what I was.
30 A ¶ Thessalonike, meanwhile, finds an iron door half-sunk in a wall of cloud.
31 A She puts her palm on it.
32 A It hums.
33 A She grins.
34 D THESSALONIKE (to herself): There you are.
35 A ¶ Behind her, Cornelius and Morwenna arrive, panting, arms full of paper-wrapped parcels.
36 D CORNELIUS: Got the saffron!
37 D MORWENNA: Got the weaving.
38 D THESSALONIKE: Got the door.
39 A ¶ They stare at it.
40 A The hum swells to a chord, and the iron door swings open on a stair of falling stars.
41 D CORNELIUS: Is that safe?
42 D MORWENNA: Nothing is.
43 A ¶ Thessalonike steps through first.
44 A Cornelius follows.
45 A Morwenna pauses, glances back over the market, and whispers to the bright, indifferent sky.
46 D MORWENNA [CONT'D]: Forgive us.

### SCENE s00441 | INT. GRAND HOTEL - HONEYMOON SUITE - MORNING
Detected names (may be incomplete or contain aliases): HARRY, FOSTER-WELLS, GWENDOLYN, MILDRED PETTIBONE, LIONEL, PARROT
1 A ¶ A fat canopy bed buried in pink pillows.
2 A Champagne bucket tipped over.
3 A A parrot on a brass stand.
4 A ¶ HARRIGAN "HARRY" FOSTER-WELLS (50s, bathrobe, one slipper) staggers from the bathroom clutching a toothbrush.
5 A His new wife GWENDOLYN (40s, silk turban) shrieks from the bed, flings a pillow, and knocks the champagne bucket into the parrot's cage.
6 A Her sister MILDRED PETTIBONE (60s, stern, steaming iron in hand) bursts in through the connecting door, ignoring both of them, while the bellhop LIONEL (20s, brass buttons) wheels in a breakfast cart with a cheerful whistle.
7 A ¶ He trips on the cart.
8 A It careens across the room.
9 A She leaps aside.
10 A He catches it.
11 A The parrot lands on his head.
12 D PARROT (squawking): Congratulations!
13 D HARRY: Get it off!
14 D GWENDOLYN: Don't hurt Percival!
15 D MILDRED: I told you not to marry him.
16 D LIONEL: Breakfast, sir!
17 A ¶ Harry spins.
18 A The parrot flaps.
19 A The toothbrush flies.
20 A It hits the iron.
21 A The iron hits the bucket.
22 A A fountain of ice erupts.
23 D GWENDOLYN: Harry, the pearls!
24 D HARRY: What pearls?
25 D LIONEL: The pearls on the tray, sir.
26 A ¶ Everyone looks at the tray.
27 A On a silver plate, beside the croissants, sits a double strand of pearls.
28 D MILDRED (grimly): I'll take those.
29 A ¶ She plucks them.
30 A He bows.
31 A She exits through the connecting door, slamming it.
32 A The parrot settles on Harry's shoulder and preens.
33 D PARROT: Till death!

### SCENE s01994 | INT. ABANDONED SUBWAY STATION, PLATFORM - NIGHT
Detected names (may be incomplete or contain aliases): ARVID SOLHEIM-MBEKI, IRENE DUCASSE-ONYANGO, LORCAN FITZGERALD-PARK, TAMSIN VEL, ZQUEZ-ROY
1 A ¶ A ghost station, tiles cracked, an old clock stopped at 4:17.
2 A A single working fluorescent flickers over a table set with four chairs and a briefcase.
3 A Dust motes in the light.
4 A The tunnel mouths gape on either side.
5 A ¶ ARVID SOLHEIM-MBEKI (50s, gray overcoat, patient) sits with his hands folded on the briefcase.
6 A Opposite him sits IRENE DUCASSE-ONYANGO (40s, tailored coat, burner phone face-down by her elbow).
7 A At the table's end sits LORCAN FITZGERALD-PARK (30s, hoodie, jaw tight).
8 A And standing in a tunnel mouth, half in shadow, arms folded, is TAMSIN VELÁZQUEZ-ROY (30s, leather jacket, a stillness that makes the others look jumpy).
9 D ARVID: Thank you for coming.
10 D IRENE: You gave us little choice.
11 D ARVID: I gave you a table. A chair. A briefcase.
12 D IRENE: A briefcase we haven't opened.
13 D ARVID: Quite.
14 D LORCAN: Let's just open it.
15 D ARVID: Not yet.
16 D LORCAN: Why not yet?
17 D ARVID: Because once it's open, we are four people who have seen what is inside it. And we cannot be less than that again.
18 A ¶ Irene turns her phone face-up.
19 A Checks the screen.
20 A Turns it face-down.
21 D IRENE: Where is Tamsin sitting?
22 D ARVID: She prefers standing.
23 D IRENE: She's making me nervous.
24 D TAMSIN (from the tunnel): Good.
25 D LORCAN: Can we please just--
26 D ARVID: Lorcan. Do you remember the night of the fourteenth?
27 D LORCAN: No.
28 D ARVID: Think.
29 D LORCAN: I was at home.
30 D ARVID: Alone?
31 D LORCAN: Yes.
32 D ARVID: Irene, do you remember it?
33 D IRENE: Vaguely.
34 D ARVID: Where were you?
35 D IRENE: At the gallery.
36 D ARVID: Until what hour?
37 D IRENE: Late.
38 D ARVID: How late?
39 D IRENE: I don't see why this matters.
40 D ARVID: It matters because on the night of the fourteenth, a man named Dominic Ashworth was found at the bottom of a staircase. And none of us has ever said a word about it.
41 A ¶ Silence.
42 A The fluorescent buzzes.
43 A The stopped clock watches.
44 D LORCAN: I didn't touch him.
45 D ARVID: No one said you did.
46 D LORCAN: I wasn't even there.
47 D ARVID: No one said you were.
48 D IRENE (too evenly): Arvid, what is in the briefcase?
49 D ARVID: A reason to be honest.
50 A ¶ Tamsin steps from the tunnel into the light.
51 A She walks to the table and puts a hand flat on the briefcase lid, next to Arvid's.
52 D TAMSIN: It's his. Dominic's.
53 D LORCAN: His what?
54 D TAMSIN: His record. Every payment. Every name.
55 D IRENE: Who told you that?
56 D TAMSIN: He did. Before.
57 A ¶ Irene's hand goes still on the phone.
58 A Lorcan leans forward.
59 D LORCAN: That's why you called us.
60 D ARVID: That's why I called you.
61 D IRENE: To threaten us.
62 D ARVID: To give you a choice. Open it, burn it, or walk away with it unopened and live as people who might someday regret that.
63 D LORCAN: That's three options.
64 D ARVID: It's more than he got.
65 A ¶ Nobody speaks.
66 A Irene reaches out, slowly, and rests her fingertips on the lock.
67 A Lorcan stands, chair scraping, and takes two steps back toward the stairs.
68 D TAMSIN (quietly): Lorcan.
69 A ¶ He stops.
70 D TAMSIN [CONT'D]: Sit down.
71 A ¶ He sits.
72 A Irene presses the latch.
73 A It clicks.
74 A ¶ The lid lifts one inch.
75 A A light from inside spills across her face.
76 D ARVID (softly): There you are.

### SCENE s02414 | INT. CARDIAC ICU - NURSES' STATION - 4 A.M.
Detected names (may be incomplete or contain aliases): NURSE ROSALEEN ADEKUNLE-MARSH
1 A ¶ A glass-walled island among curtained bays.
2 A Monitors beep in a soft, uneven chorus.
3 A A whiteboard lists names and numbers in four colours of marker.
4 A Coffee grows a skin in a paper cup.
5 A The corridor lights are dimmed to the colour of weak tea.
6 A ¶ NURSE ROSALEEN ADEKUNLE-MARSH, fifties, in navy scrubs and compression socks, sits at a terminal, reading glasses pushed up into grey-streaked hair.
7 A She is a veteran, lined and unhurried, who has done this shift a thousand times.
8 A A name tag on her lanyard reads R. ADEKUNLE.
9 A A dictation recorder lies by her keyboard, its red light steady.
10 A ¶ She presses the button.
11 D ROSALEEN: Four-ten. Mr. Dacosta. Stable overnight, pressure holding, no events. Four-twelve. Mrs. Lindahl. Sleeping.
12 A ¶ She releases the button.
13 A A monitor chirps.
14 A She does not look up.
15 A She sips cold coffee, grimaces, sets the cup down.
16 A ¶ A call light blinks over bay six.
17 A She glances at it.
18 A Watches it blink.
19 A Turns back to the screen, and types for a moment, and the light blinks on.
20 A ¶ Finally she rises, and her knees pop.
21 A She walks to the bay.
22 A Looks in.
23 A A man sleeps with his mouth open.
24 A The chart at his feet is in order.
25 A She straightens his blanket by half an inch.
26 A ¶ Back at the station, she presses the recorder again.
27 D ROSALEEN [CONT'D]: Four-fourteen. Called at four-oh-six. No complaint. Repositioned. Resting.
28 A ¶ She stops.
29 A Listens.
30 A The corridor is quiet.
31 A A faint voice drifts from the intercom on the wall.
32 D ROSALEEN [V.O.] (playback): Four-ten. Mr. Dacosta. Stable overnight...
33 A ¶ She frowns.
34 A The recorder is still running, but she has not touched it.
35 A She picks it up, thumbs the rewind.
36 A Her own voice, tinny, fills the air.
37 D ROSALEEN [V.O., CONT'D] (playback): Four-fourteen. Called at four-oh-six.
38 A ¶ A longer pause.
39 A Then, under her own voice, almost lost in the hiss, a second recording she does not remember making.
40 D ROSALEEN [V.O., CONT'D] (playback, faint): Rosaleen? It's cold in here.
41 A ¶ She stops the tape.
42 A The ward is silent.
43 A She looks at the dark corridor and the bay doors and all the blinking lights, and for a long moment she doesn't move.
44 A ¶ Then she takes off her glasses and wipes them on her sleeve.
45 D ROSALEEN (to herself): Long night.
46 A ¶ She puts the recorder in her pocket and walks the length of the ward, checking each bay in turn.

### SCENE s00159 | EXT. SNOWFIELD - BELOW A CRASHED BUSH PLANE - DAY
Detected names (may be incomplete or contain aliases): ASTRID VESTERGAARD-NNAMDI
1 A ¶ White.
2 A Everything white.
3 A A twisted aluminum wing juts from a drift like a broken bone.
4 A Wind scours the ridge.
5 A ¶ ASTRID VESTERGAARD-NNAMDI, 30s, in a torn orange parka, kneels beside a battered satchel.
6 A Her face is cracked with cold.
7 A A tiny emergency radio sits in her lap, its antenna taped to a ski pole.
8 A ¶ She lifts it.
9 A Presses the key.
10 A Releases.
11 A ¶ Static.
12 A ¶ She tries again.
13 A Static.
14 A ¶ She sets it down.
15 A Breathes.
16 A Fumbles in the satchel, withdraws a small digital recorder, and presses PLAY.
17 D ASTRID [V.O.] (recording, scratchy): Day two. I'm okay. Cold, but okay. I keep calling. Nobody answers.
18 A ¶ She listens, eyes shut.
19 D ASTRID [V.O., CONT'D] (recording): If you find this, tell Mom I wasn't scared.
20 A ¶ Her mouth twists.
21 A She turns the recorder off.
22 A ¶ She looks at the wing.
23 A At the sky.
24 A At the ridge, where a shape, grey, hunched, sways.
25 A ¶ She stills.
26 A Her hand finds the pistol flare in her pocket.
27 A ¶ The shape resolves.
28 A A caribou.
29 A It stares.
30 A She stares.
31 A A moment of animal truce.
32 A ¶ It turns and ambles over the ridge.
33 A ¶ She lets out a shuddering breath, laughs once, short, ragged.
34 A ¶ The radio crackles.
35 A ¶ Three clicks.
36 A A pause.
37 A Three clicks again, from far away.
38 A ¶ She grabs it.
39 A Fumbles.
40 A Presses the key.
41 D ASTRID (hoarse): This is Astrid. This is Astrid Vestergaard. I'm alive.
42 A ¶ She drops her head.
43 A Snow stings her cheek.
44 A ¶ She closes her eyes and listens to the radio.

### SCENE s01970 | INT. COUNTY SALT DOME - NIGHT
Detected names (may be incomplete or contain aliases): NGOZI ADEYEMI-BROOKS, DEZ, PRUITT, BILLIE WARSHAW, TOMASZ KR, ARLO MENDES
1 A ¶ A cavern of road salt, pale as a glacier.
2 A A single work lamp hums on a tripod.
3 A ¶ NGOZI ADEYEMI-BROOKS (50s, plow-crew foreman, reading glasses on a cord) stands over a clipboard.
4 A Around her: DEZ "THE DEACON" PRUITT (30s, enormous, soft-voiced), BILLIE WARSHAW (20s, rookie, hi-vis too big), TOMASZ KRÓL (60s, mechanic, grease to the elbow) and ARLO MENDES (40s, union steward, thermos in hand).
5 A ¶ She taps the clipboard.
6 A They go quiet.
7 D NGOZI: Listen up, all of you. The county cut the overnight run. Starting Friday.
8 A ¶ Nobody moves.
9 A Tomasz sets down his wrench.
10 D TOMASZ: Cut how.
11 D NGOZI: Cut like gone.
12 D ARLO: They can't. It's in the contract.
13 D NGOZI: Arlo, it's in the contract that they can.
14 A ¶ He looks at the thermos.
15 A Unscrews it.
16 A Doesn't pour.
17 D BILLIE: So I just got here.
18 D DEZ: Billie.
19 D BILLIE: Three weeks. I bought boots.
20 D DEZ: Billie, hush a second.
21 A ¶ She does.
22 A He rests a hand on her shoulder, then thinks better of it and lets it drop.
23 D TOMASZ (to himself): Thirty-one winters.
24 D ARLO: I'll file tonight. Grievance, the whole thing. Ngozi, you sign as witness, Dez, you sign, Tomasz you sign, and Billie, you're probationary so you don't sign anything, you just watch.
25 D BILLIE: That's not fair.
26 D ARLO: No. It's not.
27 D NGOZI: Nobody is filing anything tonight.
28 D ARLO: Excuse me?
29 D NGOZI: I took the deal.
30 A ¶ Silence.
31 A Salt ticks somewhere in the dark as a small slide settles.
32 D DEZ: What deal.
33 D NGOZI: Day shift. Four of us stay. Two go.
34 D ARLO: Who decides who goes.
35 D NGOZI: I do.
36 D TOMASZ: Then say it.
37 D NGOZI: Tomasz, I'm not going to say it in front of the kids.
38 D TOMASZ: I'm sixty-three years old. Say it.
39 A ¶ She takes off her glasses.
40 A They drop on the cord against her chest.
41 D NGOZI: You and Billie. Seniority says you, Tomasz, and last-hired says her, and I fought for it every other way and the number didn't move.
42 D DEZ: You put me ahead of him?
43 D NGOZI: I put nobody ahead of anybody. A spreadsheet did.
44 D ARLO: A spreadsheet. Fantastic. I'll tell my wife I lost a man to a spreadsheet.
45 D BILLIE: I can go. It's fine. I can go.
46 D TOMASZ: Don't you dare say that's fine.
47 D BILLIE: Then what do I say?
48 D TOMASZ: Say you want to burn the place down.
49 D BILLIE: I want to burn the place down.
50 D TOMASZ: Good girl. Now say it like you mean it.
51 A ¶ Dez laughs, a short bark, and that breaks it.
52 A Arlo laughs.
53 A Even Ngozi's mouth moves.
54 A ¶ Then Tomasz is not laughing.
55 A He turns away toward the dark of the dome.
56 D DEZ: Hey. Old man.
57 D TOMASZ (muttering): Thirty-one winters, and a spreadsheet.
58 A ¶ Ngozi puts her glasses back on, picks up the clipboard, and turns it to face them.
59 D NGOZI: Everyone sign the grievance. Everyone. I'll sign first.
60 D ARLO: You just said.
61 D NGOZI: I said nobody files tonight. It's four a.m. We file at nine.
62 A ¶ She signs.
63 A Passes it to Dez.

### SCENE s02494 | INT. TIDE MILL MUSEUM - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODILE FONTAINE, FENWICK PRIDDY, LAKSHMI IYER, ULRICH BAUMANN, DELILAH MWANGI, FRANK
1 A ¶ A great timber wheel hangs motionless in a dry race.
2 A Pale moonlight leaks through slatted windows and lays long bars across the floor.
3 A Millstones the size of cartwheels sit in their cases like fallen moons.
4 A ¶ Five figures in dark clothes drop one by one from a skylight on ropes.
5 A MADAME ODILE FONTAINE, 60s, the planner, lands first, soundless, silver hair under a black scarf.
6 A FENWICK PRIDDY, 50s, the safecracker, follows, wheezing.
7 A LAKSHMI IYER, 30s, the electrician, lands lightly.
8 A ULRICH BAUMANN, 40s, the muscle, thuds down last and winces at the noise.
9 A And DELILAH MWANGI, 30s, the inside woman, steps out of the shadows in a museum fleece, a lanyard around her neck.
10 D ODILE (to the group): Positions.
11 A ¶ They scatter without a word.
12 A Lakshmi to the fuse box.
13 A Ulrich to the stairwell.
14 D FENWICK (muttering): Forty years since I did a window.
15 D ODILE (to Fenwick): You did it last month.
16 D FENWICK: That was a different window.
17 D LAKSHMI: Power's mine in ninety seconds.
18 D DELILAH (to Odile): The case is on the second floor. Under the gears.
19 D ODILE: And the guard?
20 D DELILAH: Asleep. I put something in his tea.
21 D ODILE (low): Good girl.
22 A ¶ They climb.
23 A Wooden stairs complain under each step.
24 A On the second floor, behind a cluster of cogs, a glass case holds a bronze tide-clock the size of a loaf.
25 A ¶ Fenwick kneels.
26 A Puts his stethoscope to the lock.
27 A Closes his eyes.
28 D FENWICK: Come on, sweetheart.
29 D LAKSHMI [O.S.] (from below, a stage whisper): Lights in five.
30 D ODILE (to everyone): Hold your breath.
31 A ¶ The mill goes black.
32 A In the dark, a click.
33 A A second click.
34 A The case glass lifts.
35 A ¶ Fenwick lifts the clock out with both hands.
36 A Cradles it like an infant.
37 D FENWICK: Got her.
38 A ¶ A beam of white light sweeps the room.
39 A The guard in the doorway, rubbing his eyes.
40 A A thermos in his hand.
41 A Everyone freezes.
42 D FRANK [O.S.] (slurred): Delilah?
43 A ¶ Delilah steps forward, into the light, smiling.
44 D DELILAH: Frank. You should be asleep.
45 D FRANK [O.S.]: I was. Had a dream.
46 A ¶ She crosses to him.
47 A Slips an arm round his shoulder.
48 A Turns him around.
49 D DELILAH: Back to bed, Frank.
50 A ¶ He lets himself be steered.
51 A Odile exhales.
52 A The beam retreats.
53 A Ulrich's fist unclenches.
54 A ¶ Fenwick tucks the clock into a velvet bag.
55 A They file toward the skylight, silent and fast.
56 A ¶ Last up the rope, Odile glances back at the great wheel.
57 A She touches two fingers to her lips and presses them to the timber as she passes.

### SCENE s01266 | INT. OBSERVATORY LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR ALISTAIR GREYSON-MBEKI, INSPECTOR LENORE QUIGLEY-ABARA, PRUNELLA DOUGHTY
1 A ¶ A circular room beneath a copper dome, shelves climbing in tiers around a wrought-iron gallery.
2 A A rolling ladder on a brass track.
3 A A reading table, a green banker's lamp, a half-drunk glass of sherry.
4 A A body-sized shape of dust where a rug has been recently pulled aside.
5 A ¶ PROFESSOR ALISTAIR GREYSON-MBEKI (60s, tweed jacket, bow tie) lies on the floor, face turned toward the dome.
6 A His eyes are open.
7 A A small wooden stool tilts nearby, one leg snapped.
8 A ¶ INSPECTOR LENORE QUIGLEY-ABARA (40s, black wool coat, notebook) crouches at his shoulder, gloved fingers hovering over his collar.
9 A Behind her, in the doorway, stands the housekeeper MRS. PRUNELLA DOUGHTY (60s, apron, white curls, hands clasped tight), who is trying not to look.
10 D QUIGLEY-ABARA: When did you find him?
11 D PRUNELLA: Half past nine, Inspector. I came in to turn down the lamp.
12 D QUIGLEY-ABARA: And the door?
13 D PRUNELLA: Open. Always open. He hates a closed door.
14 A ¶ Quigley-Abara stands.
15 A Walks the circumference of the room slowly, trailing a hand along the shelves.
16 A At the ladder she stops, tests the brass track with a thumbnail, and lifts a smear of something pale.
17 D QUIGLEY-ABARA: Chalk.
18 D PRUNELLA: For the blackboard.
19 D QUIGLEY-ABARA: There's no blackboard in this room.
20 D PRUNELLA: No. I suppose there isn't.
21 A ¶ The Inspector turns.
22 A Prunella has moved a little way into the room, and now stands with one hand on the reading table, steadying herself.
23 A The other hand has found the sherry glass and turned it a quarter turn to hide a lipstick mark on its rim.
24 D QUIGLEY-ABARA: Mrs. Doughty.
25 D PRUNELLA: Yes, Inspector?
26 D QUIGLEY-ABARA: Do you take sherry?
27 D PRUNELLA: Never.
28 D QUIGLEY-ABARA: That's your shade of pink, though.
29 A ¶ Prunella's mouth works.
30 A Slowly she lifts her chin, as if resolving to be brave about something she hasn't yet been accused of.
31 D PRUNELLA: He asked me to sit with him.
32 D QUIGLEY-ABARA: Did he?
33 D PRUNELLA: Last night. It was his birthday. He had no one.
34 D QUIGLEY-ABARA: And you drank sherry together.
35 D PRUNELLA: One glass.
36 D QUIGLEY-ABARA: And then?
37 D PRUNELLA: And then I went to bed.
38 D QUIGLEY-ABARA: And he climbed the ladder, in the dark, at seventy-one, to reach the Almagest.
39 D PRUNELLA: He always did that.
40 D QUIGLEY-ABARA: Not with a stool.
41 A ¶ She crosses to the broken stool and rights it.
42 A Looks at the snapped leg: the wood is white and fresh, with a clean diagonal where a saw has been.
43 D QUIGLEY-ABARA [CONT'D]: That's not a fall.
44 D PRUNELLA (very quietly): No.
45 D QUIGLEY-ABARA: Who sawed it?
46 D PRUNELLA: I did.
47 A ¶ The Inspector does not move.
48 A The lamp hums.
49 A In the high copper dome, the wind lifts a flap of loose metal and lets it fall with a soft clang.
50 D PRUNELLA [CONT'D]: He was going to sell the telescope.
51 D QUIGLEY-ABARA: To whom?
52 D PRUNELLA: To a man who'd put it in a hotel lobby.
53 D QUIGLEY-ABARA: And that was cause enough.
54 D PRUNELLA: Forty years I've polished that brass.
55 A ¶ She sits down on the reading chair.
56 A Smooths her apron.
57 A Folds her hands.
58 A Quigley-Abara closes the notebook, comes round the table, and takes the sherry glass by its stem.
59 A She sets it in an evidence bag.
60 A The sound of the bag zip is very loud.
61 D QUIGLEY-ABARA: Thank you, Mrs. Doughty.
62 D PRUNELLA: Will there be tea?
63 D QUIGLEY-ABARA: There will be tea.
64 T FADE OUT.

### SCENE s01527 | INT. FUNERAL PARLOUR VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GUS, MARLOWE-DIAZ, DETECTIVE CORDELIA VANTERPOOL
1 A ¶ A narrow room of lilac carpet and low lamps.
2 A A closed casket on trestles, a spray of white carnations beside it.
3 A The only sound is the refrigeration unit breathing behind the wall.
4 A ¶ AUGUSTINE "GUS" MARLOWE-DIAZ, 50s, in a tidy black suit, sits in the front row with his hat on his knee.
5 A He has the steady manner of a man long used to waiting rooms.
6 A His shoes are polished to a high gloss.
7 A ¶ The door opens softly.
8 A DETECTIVE CORDELIA VANTERPOOL, 40s, in a damp mackintosh, enters without a sound.
9 A She stands at the back and does not sit.
10 D CORDELIA: Mr. Marlowe-Diaz.
11 D GUS: Detective. You came.
12 D CORDELIA: You asked me to.
13 D GUS: I did.
14 A ¶ She walks the aisle.
15 A Her heels leave faint prints in the nap of the carpet.
16 A She stops beside the casket.
17 A Rests two fingers on its lid, then removes them.
18 D CORDELIA: You've kept the lamp low.
19 D GUS: She disliked bright rooms.
20 D CORDELIA: So I've heard.
21 D GUS: Tea? The undertaker left a flask. It's still warm.
22 D CORDELIA: No. Thank you.
23 D GUS: It's good tea.
24 A ¶ He pours himself one anyway.
25 A Hands steady.
26 A Offers her the second cup with a small, courteous tilt of the head.
27 A She takes it, finally, and holds it without drinking.
28 D CORDELIA: You told the desk sergeant you had something to say about the night she died.
29 D GUS: I did. I do. Only I'd like to say it sitting down, and I'd like you to sit too.
30 A ¶ She hesitates, then lowers herself into the chair beside him.
31 A The cup rattles faintly on its saucer.
32 A He notes it, and says nothing.
33 D GUS [CONT'D]: Forty years, I managed that warehouse. Never late. Never ill.
34 D CORDELIA: So the file says.
35 D GUS: And she managed me. In her way.
36 D CORDELIA: In her way.
37 D GUS: She kept the accounts. She kept the house. She kept a good many other things besides.
38 A ¶ Cordelia turns the cup in its saucer.
39 A The tea has gone still.
40 D CORDELIA: Mr. Marlowe-Diaz, the coroner's report mentions bruising on the wrists.
41 D GUS: Does it?
42 D CORDELIA: It does.
43 D GUS: How unfortunate.
44 A ¶ He sips.
45 A Sets the cup down with great care, in exactly the ring it left on the saucer before.
46 A The refrigeration unit cycles off.
47 A The room is suddenly, ferociously quiet.
48 D CORDELIA: The nephew told us she had been afraid.
49 D GUS: Marcus talks a great deal.
50 D CORDELIA: Of whom was she afraid?
51 D GUS: Of the dark, mostly. The dark and the stairs.
52 D CORDELIA: The stairs.
53 D GUS: Steep. Narrow. I told her a hundred times.
54 A ¶ Cordelia sets down her cup.
55 A Reaches into her mackintosh.
56 A Draws out a brown paper evidence bag, and places it on the empty chair on her other side.
57 D GUS [CONT'D] (not looking at it): You'll want to be careful. That's an old house. Things come apart.
58 D CORDELIA: This came apart on a Tuesday.
59 D GUS: Tuesday.
60 D CORDELIA: You told us you were at the lodge until midnight.
61 D GUS: So I was.
62 D CORDELIA: The lodge was closed for repairs. The caretaker has a sign-in book. She signed in alone.
63 A ¶ For the first time, Gus turns his head.
64 A The courteous mask does not slip.
65 A It simply stops being worn.
66 D GUS: Cordelia. May I call you Cordelia?
67 D CORDELIA: No.
68 D GUS: She did not suffer.
69 D CORDELIA: That is not for you to say.
70 D GUS (softly): No. I suppose it isn't.
71 A ¶ He rises, brushes his trousers, and settles his hat on his head.
72 A Holds out both wrists, side by side, palms up, as if waiting for a bracelet or a blessing.
73 A ¶ Cordelia takes the evidence bag from the chair.
74 A Does not open it.
75 A Does not need to.
76 D CORDELIA: Sit down, Mr. Marlowe-Diaz.
77 D GUS: I would rather stand.
78 D CORDELIA: Then stand.
79 A ¶ Outside, a car door closes.
80 A Footsteps on gravel.
81 A The lamp flickers once, and steadies.

### SCENE s00599 | INT. FISH MARKET OFFICE - 5 A.M.
Detected names (may be incomplete or contain aliases): KOVACS, STELLA, NUNZIO, SPUDS, MABEL, DEACON
1 A ¶ Fluorescent tube.
2 A Ice buckets.
3 A Stacked styrofoam crates reeking of brine.
4 A A cracked window shows the dark harbor.
5 A ¶ MR. KOVACS, 60s, grey suit, sits behind a metal desk.
6 A STELLA, 30s, sleek in a trench coat, leans against a filing cabinet.
7 A NUNZIO, 40s, apron smeared with blood, wipes a cleaver on a rag.
8 A SPUDS, 20s, jittery, bounces his knee.
9 A MABEL, 50s, bookkeeper, spectacles on a chain, sorts receipts.
10 A DEACON, 70s, white-haired, in a church coat, sits quietly by the door with a fishing basket on his lap.
11 D KOVACS: Where's the money, Spuds?
12 D SPUDS: I don't have it, Mr. K.
13 D NUNZIO: He says that every week.
14 D STELLA: Because every week it's true.
15 D SPUDS: Hey! I'm right here.
16 D MABEL: Spuds, dear, you're nineteen thousand short.
17 D SPUDS: Mabel, you know I love you...
18 D MABEL: Don't "Mabel" me.
19 D KOVACS: Quiet, all of you.
20 A ¶ The room freezes.
21 A Kovacs turns to Deacon, who has not moved.
22 D KOVACS [CONT'D]: Deacon. Open the basket.
23 D DEACON: It's only fish, Mr. K.
24 D KOVACS: Open it.
25 A ¶ Deacon lifts the lid.
26 A Inside, wrapped in newsprint, rows of banded bills.
27 A Spuds gasps.
28 A Stella steps back.
29 A Nunzio lowers the cleaver.
30 A Mabel drops her pen.
31 D DEACON: I was keeping it safe.
32 D KOVACS: For whom?
33 D DEACON: For Spuds. The boy's got a baby coming.
34 D SPUDS: You what?
35 D DEACON: Don't thank me yet.

### SCENE s01712 | INT. TINY APARTMENT - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): JOANNA CRUZ-DELACROIX, VOICE MAIL, DANIEL
1 A ¶ A narrow galley kitchen.
2 A Mismatched mugs.
3 A A window over the sink opens onto a brick wall and one square of sky.
4 A ¶ JOANNA CRUZ-DELACROIX (30s) stands at the counter in an oversized cardigan.
5 A A phone sits face-down beside a bowl of cold noodles.
6 A She stirs them, doesn't eat.
7 A She picks up the phone, flips it, sets it down.
8 A ¶ Her thumb hovers over the screen.
9 A She takes a breath.
10 A Presses.
11 A ¶ The phone rings through the speaker.
12 A Once.
13 A Twice.
14 A Three times.
15 D VOICE MAIL [V.O.]: You've reached Daniel. I can't come to the phone right now. Leave a message.
16 A ¶ She mouths the next word along with the recording.
17 D VOICE MAIL [V.O., CONT'D] (a soft laugh): Or don't. I'll know it was you.
18 A ¶ BEEP.
19 A ¶ She opens her mouth.
20 A Closes it.
21 A Her free hand rises to her collarbone, where a thin chain holds a small silver ring.
22 A ¶ She ends the call.
23 A Sets the phone down.
24 A Walks to the window.
25 A Opens it, and cold air rushes in.
26 A She breathes it deeply.
27 A ¶ The phone buzzes on the counter.
28 A She doesn't turn.
29 A It buzzes again.
30 A She turns slowly, looks at it, and crosses back.
31 A ¶ The screen shows a single word: DANIEL.
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
44 A The noodles go on cooling beside her.

### SCENE s00971 | INT. HOLLOWED ASTEROID ORCHARD - SHIFT NIGHT
Detected names (may be incomplete or contain aliases): TAVITA, NELL, ISAAK, MEI-LIN, OSEI
1 A ¶ A cavern of rock lit by amber grow-lamps.
2 A Rows of dwarf apple trees bolted to drifting soil trays.
3 A Pollen-drones hum like tired insects.
4 A ¶ TAVITA (50s, broad, vacuum-scarred hands) stands at a control stump.
5 A NELL (20s, sharp, ink-stained fingers) clutches a tablet.
6 A ISAAK (60s, wiry, one cloudy eye) leans on a ladder.
7 A MEI-LIN (30s, braided cables in her hair) hovers upside down.
8 A OSEI (teen, oversized pressure jacket) grips a pruning rod.
9 D TAVITA: Hull pressure's dropping in the north orchard. Everyone stays calm.
10 D NELL: Calm is a luxury. The seal's gone, Tavita. I can hear it.
11 D ISAAK: Then shut the bulkhead. Trees can bloom again.
12 D MEI-LIN: Not if we're on the wrong side of it. Osei's still holding row nine.
13 D OSEI: I can let go. I can run.
14 D TAVITA: You'll run when I say run.
15 D NELL: Forty seconds of air at that leak rate. Maybe thirty.
16 D ISAAK: Then thirty is what we use. Mei-Lin, drones to the breach. Nell, patch kit. Osei, row nine, now.
17 D MEI-LIN: Drones are going. They won't hold it.
18 D TAVITA: They don't have to hold it. They only have to buy us the walk.

### SCENE s01682 | INT. COMMUNITY CENTER KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): MAN IN GREEN CARDIGAN, GREEN CARDIGAN, GRETCHEN POLLARD, WALTER
1 A ¶ Folding tables.
2 A Stacked casserole dishes.
3 A A wall clock stuck at 8:10.
4 A ¶ A MAN IN A GREEN CARDIGAN (60s) stands at the sink, scrubbing a pan.
5 A Across the room, GRETCHEN POLLARD (50s, name tag, clipboard) counts paper plates.
6 D GRETCHEN: Okay, everybody, last call for leftovers.
7 A ¶ Nobody answers.
8 A The room is empty but for the two of them.
9 D GRETCHEN [CONT'D] (to herself): Nine hundred and twelve. Who ate a thousand plates?
10 D MAN IN GREEN CARDIGAN: You've got a lot of plates.
11 D GRETCHEN: Do I know you?
12 D MAN IN GREEN CARDIGAN: Walter. Walter Lindqvist. I'm with the Thursday group.
13 D WALTER: Anyway. I'll be done in a minute.
14 A ¶ Gretchen tallies.
15 A Walter scrubs.
16 D GRETCHEN: You're not on the sign-in sheet, Walter.
17 D WALTER: Nobody ever is.
18 D GRETCHEN (muttering): Then who's been eating all the pie?
19 D WALTER: I'd say it was me, but I like to be honest.
20 A ¶ She checks the clock.
21 A Still 8:10.
22 A She shakes her head and goes back to counting.

### SCENE s01949 | INT. OPERATING THEATER 4 - NIGHT
Detected names (may be incomplete or contain aliases): KALANI MAHOE, BEATRIX LUND, TOMASZ WRONA, YARA HADDAD, ANAESTHETIST, ROSA
1 A ¶ Cold white light.
2 A The steady beep of a monitor.
3 A A patient lies draped on the table, only a rectangle of skin exposed.
4 A ¶ DR. KALANI MAHOE, 50s, surgeon, bends over the field.
5 A BEATRIX LUND, 30s, scrub nurse, passes instruments.
6 A TOMASZ WRONA, 20s, the resident, holds a retractor.
7 A YARA HADDAD, 40s, circulating nurse, stands by the door.
8 A At the head of the table, the ANAESTHETIST, 40s, watches the monitors.
9 D MAHOE: Retractor.
10 D TOMASZ: Got it.
11 D MAHOE (to the room): Everyone with me. We are closing in ten minutes.
12 D ANAESTHETIST: Blood pressure's holding.
13 D BEATRIX: Suture.
14 D MAHOE (to himself): Almost there.
15 A ¶ The anaesthetist glances at the screen, then at the surgeon.
16 A She taps a dial.
17 D ROSA: Kalani, her sats just dropped.
18 D MAHOE: How far?
19 D ROSA: Ninety-one.
20 D TOMASZ: Is that bad?
21 D YARA (from the door): Don't ask.
22 D MAHOE: Rosa, ventilate. Beatrix, hold the sutures.
23 D BEATRIX: Holding.
24 D MAHOE: Tomasz, you can breathe now.
25 A ¶ Tomasz lets out a long breath.
26 A The monitor settles.

### SCENE s00131 | INT. HOTEL SERVICE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): CHEF BASILE ORTEGA, SHANICE DORSEY, UNCLE VITO PALAZZO, DEV RAMASWAMY, TILDA BJORKLUND, BRIDE, MOIRA KENNEDY
1 A ¶ A stainless box, too small.
2 A A three-tier wedding cake on a rolling cart takes up most of it.
3 A Six people squeeze around it.
4 A ¶ CHEF BASILE ORTEGA, 50s, apron, sweat.
5 A SHANICE DORSEY, 20s, bridal planner, clipboard.
6 A UNCLE VITO PALAZZO, 60s, tuxedo, too tight.
7 A DEV RAMASWAMY, 20s, the photographer, camera bag.
8 A TILDA BJORKLUND, 30s, bridesmaid in a puffy teal gown.
9 A And the BRIDE herself, MOIRA KENNEDY, 28, in a veil, eyes closed, breathing slow.
10 A ¶ The elevator jolts.
11 A Stops.
12 A The lights flicker.
13 D TILDA: Oh no.
14 D SHANICE: It's fine. It's a service elevator. They stall.
15 D BASILE: Stall! Cake, madame, is made of stall!
16 D VITO: Somebody push the button.
17 D DEV: I'm pushing it.
18 D SHANICE: Don't push it, it's the alarm.
19 D TILDA: Everything is the alarm!
20 D MOIRA (eyes closed): Everybody stop.
21 A ¶ Nobody stops.
22 D BASILE: Fondant! The humidity!
23 D VITO: Is it hot in here?
24 D DEV: It's very hot in here.
25 D SHANICE: Please. Everyone please.
26 D TILDA: My dress is sticking to my...
27 D MOIRA: Everybody.
28 A ¶ Dev leans on the wall.
29 A The cart rolls an inch.
30 A The cake sways.
31 A Everyone lunges at once.
32 A Basile catches the top tier.
33 A Vito catches Basile.
34 A Shanice catches Vito.
35 A Tilda catches Shanice's clipboard.
36 A The cake settles.
37 D BASILE: Do not breathe!
38 D VITO: I'm not breathing.
39 D SHANICE: Can we call someone?
40 D TILDA: I have no signal!
41 D DEV: I have one bar.
42 D BASILE: Zero bars on the cake!
43 D MOIRA (opening her eyes): I'm leaving him.
44 A ¶ Silence.
45 A The cake swings.
46 D TILDA: What?
47 D MOIRA: I'm leaving him. I've been thinking about it for three weeks, and I'm leaving him, and I'm doing it in the elevator.
48 D SHANICE: Moira, honey.
49 D VITO: Not on the cake.
50 A ¶ The elevator lurches back to life.
51 A It rises.
52 A It dings.
53 A The doors open on a ballroom of two hundred guests, all of them turned to look.

### SCENE s01333 | EXT. LIFEBOAT, OPEN SEA - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN HESS, YOUNG PETER, ADEBAYO, COOK, DMITRI, LENKA, TOBIAS
1 A ¶ Six figures crowd a seven-man boat.
2 A Grey swell.
3 A No land.
4 A A water jug sits empty at the center thwart.
5 A ¶ CAPTAIN HESS, 50s, scorched face, holds the tiller.
6 A YOUNG PETER, 15, bails with a tin cup.
7 A MRS. ADEBAYO, 60s, clutches a sodden prayer shawl.
8 A THE COOK, DMITRI, 40s, rows alone on the left oar.
9 A LENKA, 20s, lies curled in the bow with a bandaged leg.
10 A And TOBIAS, 30s, sits with his hands over his face.
11 A ¶ Dmitri pulls, the oar bows and cracks, and Hess grabs the tiller as Peter lunges for the cup, Mrs. Adebayo shifts to steady Lenka, and Tobias lifts his head.
12 D HESS: Easy, Dmitri. We lose that oar, we lose the day.
13 D DMITRI: We lost the day last night, Captain.
14 D MRS. ADEBAYO: Peter, give me the cup. You'll wear your arm off.
15 D PETER: I'm fine, Mrs. Adebayo.
16 D TOBIAS: Is that smoke, Lenka? Do you see it?
17 D LENKA: It's cloud.
18 D TOBIAS: It looks like smoke.
19 D LENKA: Then I'm sorry, Tobias.
20 D HESS: Nobody drinks seawater. Nobody.
21 D DMITRI: Captain, nobody did.
22 D HESS: Then we're alive, aren't we?
23 A ¶ Silence.
24 A The swell lifts the boat and sets it down.

### SCENE s01578 | INT. DEEP-SEA HABITAT MODULE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): IMANI KAGWE, COMMANDER ARVID LUNDQVIST
1 A ¶ Cramped.
2 A Pipes sweat.
3 A Red emergency strip along the ceiling.
4 A Through a porthole: black water, drifting silt.
5 A ¶ DR. IMANI KAGWE (40s, braided hair, a surgeon's steady hands) stands at a console.
6 A Behind her, COMMANDER ARVID LUNDQVIST (50s, close-cropped silver, a voice trained to be calm) holds a tablet.
7 D LUNDQVIST: Oxygen's holding.
8 D KAGWE: For how long?
9 D LUNDQVIST: Nine hours.
10 D KAGWE: That's not holding. That's a countdown.
11 A ¶ She turns.
12 A Their eyes meet.
13 A He sets the tablet down.
14 D LUNDQVIST: The surface team says forty-eight.
15 D KAGWE: The surface team says what it's told to say.
16 D LUNDQVIST: You think they're lying.
17 D KAGWE: I think you are.
18 A ¶ A pipe groans.
19 A A thin jet of water hisses from a seam in the wall.
20 A Neither moves.
21 D LUNDQVIST: The seam isn't structural.
22 D KAGWE: It's weeping brine. It's structural.
23 D LUNDQVIST: Imani.
24 D KAGWE: Don't.
25 A ¶ He grabs a wrench from the wall.
26 A She steps in front of it.
27 A He tries to go around her.
28 A She blocks him.
29 A They collide, the wrench clattering to the deck.
30 D LUNDQVIST: Let me patch it!
31 D KAGWE: You'll shear the coupling!
32 A ¶ He shoves her.
33 A She shoves back.
34 A He slams against the console.
35 A She slams against the bulkhead.
36 A The jet widens.
37 A ¶ The lights flicker.
38 A Alarms begin to chirp, softly at first.
39 A ¶ They both freeze, staring at the porthole.
40 A Beyond the glass, something large and pale slides past.
41 A ¶ It does not slide past again.

### SCENE s00822 | INT. ST. CECILIA'S HOSPITAL - ROOFTOP GREENHOUSE OPERATING SUITE - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE VOSS, NURSE TOBIAS KANE, RESIDENT PRIYA NAIR, HAL BRODERICK, SCRUB TECH JUNE ALVARADO, ANSELM FAIRWEATHER
1 A ¶ Rain ticks on glass panels.
2 A Ferns crowd the corners of a sterile field under the stars.
3 A ¶ DR. MARGUERITE VOSS, fifties, silver braid tucked under her cap, hums as she sutures.
4 A Across the table NURSE TOBIAS KANE, calm and broad, passes her instruments before she asks.
5 A RESIDENT PRIYA NAIR, twenties, watches the monitor with a small smile.
6 D VOSS: Lovely tissue. Textbook.
7 D TOBIAS: Pressure's a rock.
8 A ¶ DR. HAL BRODERICK, the anesthesiologist, sixties, sips tea at his station and turns a crossword page.
9 A SCRUB TECH JUNE ALVARADO counts sponges aloud, relaxed, almost singing it.
10 D JUNE: Eleven, twelve, thirteen.
11 D PRIYA: Fourteen is on the floor.
12 D VOSS: Then it's not in the patient. Wonderful.
13 A ¶ She ties off the last stitch.
14 A Everyone exhales.
15 A Tobias reaches for the dressing.
16 A ¶ The greenhouse door hisses open.
17 A DR. ANSELM FAIRWEATHER, hospital chief of surgery, steps in dripping, his mask on crooked.
18 A He does not look at the patient.
19 A He looks at Voss, and at the clipboard in his hand.
20 A ¶ Broderick's pen stops moving over the crossword.
21 A Tobias lowers the dressing, slowly, back to the tray.
22 A June stops counting.
23 D ANSELM: Dr. Voss. A word. Outside.
24 A ¶ Voss sets down the needle driver, aligns it with the edge of the tray, and does not turn around.

### SCENE s02373 | INT. MINIATURE GOLF CLUBHOUSE - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN HOOK'S INVITATIONAL, BARNABY PLOTT, DEE, OKAFOR-LINDQVIST, MARCUS VANCE, TALL STRANGER
1 A ¶ A snack-bar-and-trophy-case combo built to look like a pirate ship, with a fibreglass parrot bolted over the register.
2 A The carpet is the green of a sick lawn.
3 A Rain taps the porthole windows.
4 A A hand-lettered banner reads: CAPTAIN HOOK'S INVITATIONAL - FINAL ROUND.
5 A ¶ BARNABY PLOTT, sixties, beard dyed an unnatural black, in a captain's hat and a tracksuit, polishes a plastic trophy with a napkin.
6 A At the counter, DOLORES "DEE" OKAFOR-LINDQVIST, forties, a brisk accountant in a rain slicker, studies a clipboard.
7 A In a booth, young MARCUS VANCE, twenty, wears a bowling shirt and sips a slushie with great solemnity.
8 D DEE: So the prize pool is four hundred dollars.
9 D BARNABY: Four hundred and twelve. Counting the raffle.
10 D DEE: And the entry fees were forty each, eleven entrants.
11 D BARNABY: Correct.
12 D DEE: Then the prize pool is four forty.
13 D BARNABY: Ah. Well. There's the hat.
14 D DEE: Barnaby.
15 D BARNABY: The hat was twenty-eight dollars.
16 D MARCUS (through straw): It's a good hat.
17 D DEE: Nobody asked you.
18 D MARCUS: Sorry.
19 A ¶ A beat of calm.
20 A Barnaby sets the trophy on the shelf.
21 A Dee clicks her pen shut.
22 A The rain eases.
23 A For a moment the whole place feels cosy.
24 D BARNABY: You know, I think this is the best year we've had.
25 D DEE: It might be.
26 D MARCUS: The windmill was running smooth this morning.
27 D BARNABY: That windmill has not run smooth since the Reagan administration.
28 D MARCUS: Well. It did today.
29 D DEE (still writing): Who's the other finalist?
30 D BARNABY: Some fellow. Showed up at nine, paid cash. Name on the sheet is... Smith.
31 D DEE: Just Smith.
32 D BARNABY: I assumed he was shy.
33 A ¶ The door opens.
34 A A TALL STRANGER in a trench coat enters, shaking out an umbrella.
35 A Sixty, silver hair, eyes like cold coins.
36 A He walks to the counter and sets a putter on it.
37 D STRANGER: I'm here for the final.
38 D BARNABY: Mister Smith! Wonderful. Dee, this is the competition.
39 D STRANGER: It's not Smith.
40 D DEE: Pardon?
41 D STRANGER: It's Vance.
42 A ¶ Marcus chokes on his slushie.
43 A Barnaby looks from the stranger to Marcus and back.
44 A Dee puts down her pen.
45 D MARCUS: Dad?
46 D VANCE: Hello, Marcus.
47 D BARNABY: You two know each other?
48 D MARCUS: He told me he was dead.
49 D VANCE: I told you I was in Arizona.
50 D MARCUS: For nine years.
51 D DEE: Mr. Vance, we don't actually have a rule about estranged fathers, but I think I should say the raffle money is already spent.
52 D BARNABY: Spent on the hat.
53 D DEE: Barnaby.
54 D VANCE: I read about the tournament in the paper. Your name was on the entry list. I thought, he's still playing.
55 D MARCUS: I never stopped.
56 D VANCE: I know. I used to watch you through the fence.
57 A ¶ Barnaby takes off the hat and holds it to his chest.
58 A Dee's eyes go wide.
59 A Nobody speaks.
60 A The parrot above the register creaks on its bolt.
61 D MARCUS (quiet): Fine. Eighteen holes. Winner buys lunch.
62 D VANCE: And the loser?
63 D MARCUS: Asks the other one a question.
64 A ¶ Vance nods once.
65 A He picks up his putter.
66 A Marcus slides out of the booth with his own, an old one with tape on the grip.
67 D BARNABY (whispering to Dee): I think that's the best tournament we've ever had.
68 D DEE (whispering back): I'm still short twelve dollars.

### SCENE s01582 | EXT. DESERT SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): MARIBEL SOTO, ANDRÉS, OLD MAN BENEDICTO
1 A ¶ Glare.
2 A White crust to every horizon.
3 A A jeep sits with its hood up, wheels sunk to the axles.
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
15 A A few drops.
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
34 A ¶ On the horizon: a shimmer.
35 A A dot.
36 A A dust plume.
37 A ¶ They both freeze.
38 D ANDRÉS [CONT'D]: Is that a car?
39 D MARIBEL: Don't hope.
40 A ¶ The dot grows.
41 A A battered pickup rolls out of the glare and stops thirty feet away.
42 A ¶ The door opens.
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

### SCENE s01522 | INT. CORPORATE WELLNESS NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRIYA DESHMUKH-LOWE, WALLY, PRZYBYSZ, VP, SUNNIVA ABARA
1 A ¶ Six sleep pods.
2 A One occupied.
3 A Whale sounds on a loop.
4 A ¶ PRIYA DESHMUKH-LOWE, 30s, lanyard, laptop balanced on her knees inside the pod.
5 A Typing in the dark.
6 A ¶ The hatch hisses open.
7 A WALTER "WALLY" PRZYBYSZ, 50s, regional VP, leans in with a clipboard.
8 D WALLY: Priya. Nap quota's twenty minutes.
9 D PRIYA: This is a nap.
10 D WALLY: You're answering email.
11 D PRIYA: Napping with intent.
12 A ¶ Wally ticks a box.
13 A Writes.
14 A Frowns.
15 A ¶ Behind him, the door swings.
16 A DR. SUNNIVA ABARA, 40s, Chief Wellbeing Officer, crisp blazer, tablet like a shield.
17 D SUNNIVA: Walter. Is she charging overage?
18 D WALLY: She's... overachieving.
19 D SUNNIVA (to Priya): I need you rested for the layoff announcement.
20 A ¶ Priya's typing stops.
21 A Wally's pen stops.
22 A The whales go on.
23 D PRIYA: When?
24 D SUNNIVA: After your nap.
25 A ¶ Priya closes the laptop.
26 A Smiles.
27 A Lies back, hands folded like a corpse.
28 D WALLY (whisper to Sunniva): She knows.
29 D SUNNIVA: She knows nothing.
30 A ¶ Priya snores.
31 A Loudly.
32 A Fakely.
33 A ¶ Wally sweats.
34 A Sunniva checks her watch.
35 A The whales sing.

### SCENE s00521 | INT. LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): NKEM OKPARA, BART, LENNOX
1 A ¶ Fluorescent hum.
2 A One dryer turning, a single red sock tumbling.
3 A ¶ NKEM OKPARA, 30s, in a hospital lanyard, stares at a folded child's pajama set.
4 A BARTHOLOMEW "BART" LENNOX, 60s, mop in hand, watches from the doorway.
5 D BART: You been here since midnight. Machine two's been done since one.
6 D NKEM: I know.
7 A ¶ She does not move.
8 A Bart steps closer.
9 D BART: Whose are they?
10 D NKEM (sudden, loud): Mine! They were -- they're mine, I'm allowed to wash them!
11 A ¶ She hurls the pajamas at the dryer.
12 A They slap the glass.
13 A Bart does not flinch.
14 D BART: Nobody said you weren't.
15 D NKEM: Stop being nice to me.
16 D BART: Can't help it.
17 D NKEM: I SAID --
18 D BART: Okay.
19 D NKEM: Stop!
20 A ¶ Silence.
21 A The red sock turns.
22 A Nkem slides down the machine to the floor.
23 D NKEM [CONT'D] (quiet): She's seven. She's fine. She's in a bed upstairs, and she's fine.
24 A ¶ Bart sits on an upturned bucket.
25 D BART: Then fold the rest.

### SCENE s02444 | INT. SHIPBOARD OPERATING THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER-MBEKI
1 A ¶ A hospital ship in mid-ocean.
2 A Steel walls, bolted tables, lamps swaying in their housings.
3 A The deck rolls with a slow rhythm.
4 A Water drips from an unseen pipe.
5 A ¶ The theatre is empty.
6 A Instruments laid out in perfect rows.
7 A A digital recorder rests on the scrub sink, its red light blinking.
8 A ¶ The door swings open.
9 A A woman steps through: DR. SAOIRSE KELLEHER-MBEKI (40s, blue scrubs soaked at the collar, surgical cap, eyes red from forty hours awake).
10 A She carries a paper cup of tea and a patient file.
11 A ¶ She sets the cup down.
12 A Looks at the empty table.
13 D SAOIRSE: Nobody. Good.
14 A ¶ She picks up the recorder.
15 A Presses play.
16 A Her own voice fills the room, taped hours earlier.
17 D SAOIRSE [V.O.] (recording): Patient Adebayo. Male, fifty-two. Perforated bowel. We began at nineteen hundred.
18 A ¶ Saoirse stops the recording.
19 A Rewinds.
20 A Plays again.
21 D SAOIRSE [V.O., CONT'D] (recording): Complication at twenty-one-forty. Hemorrhage. We called it at twenty-two-ten.
22 A ¶ She snaps it off.
23 A Her hand trembles.
24 A She sits on the edge of the table, hard.
25 D SAOIRSE (softly): Twenty-two-ten.
26 A ¶ She lifts the tea and sips.
27 A Grimaces.
28 A It's cold.
29 A She sips again anyway.
30 A ¶ The ship pitches.
31 A The tea slides off the sink and spills across the floor.
32 A She does not move.
33 D SAOIRSE [CONT'D] (to the empty room): I did everything right.
34 A ¶ No answer.
35 A Water drips.
36 A ¶ She stands, crosses to the instrument tray, and lifts a scalpel.
37 A Turns it in the light.
38 A Sets it down.
39 A Picks up the recorder again.
40 D SAOIRSE [CONT'D] (into recorder): Dictation. Adebayo, continued. Cause of death: acute hemorrhage secondary to--
41 A ¶ Her voice catches.
42 A She presses stop.
43 A Closes her eyes.
44 A ¶ She keeps speaking to the empty theatre.
45 D SAOIRSE [CONT'D] (whispering): I'm sorry. I'm so sorry.
46 A ¶ She pulls a grey ship's blanket from a shelf and drapes it over her shoulders.
47 A Presses the recorder to her chest.
48 D SAOIRSE [V.O., CONT'D] (recording, from earlier): Time of death, twenty-two-ten. Closing.
49 A ¶ She opens her eyes.
50 A Sets the recorder in its cradle, light still blinking, and sits in the dark alone.

### SCENE s01982 | INT. FIDELITY PRUDENTIAL MUTUAL, CLAIMS DEPARTMENT - DAY
Detected names (may be incomplete or contain aliases): SMILE IS, CLAIM WELL-FILED, MISS GWENDOLYN TILLMAN, HORATIO PEMBERTON-HALE, GRAY MAN, GRAY SUIT, VOICE, VOSS
1 A ¶ A sea of identical desks and green-shaded lamps.
2 A Typewriters clatter in unison.
3 A Above the manager's glass-walled office hangs a banner: A SMILE IS A CLAIM WELL-FILED.
4 A ¶ MISS GWENDOLYN TILLMAN (30s, cat-eye glasses, ledger in hand) stands before the manager's desk.
5 A Behind it sits MR. HORATIO PEMBERTON-HALE (50s, pinstripe, pencil moustache), who hasn't looked up from his blotter.
6 A ¶ A MAN IN A GRAY SUIT (40s, bowler, no briefcase) stands at the window with his back to them.
7 D PEMBERTON-HALE: Miss Tillman, your productivity is down four percent.
8 D GWENDOLYN: Mr. Pemberton-Hale, I processed eleven hundred claims.
9 D PEMBERTON-HALE: Eleven hundred and four were expected.
10 D GWENDOLYN: There were four holidays.
11 D PEMBERTON-HALE: Then the holidays are down four percent.
12 A ¶ He still hasn't looked up.
13 A The Man in the Gray Suit turns from the window, smiling at no one.
14 D GRAY MAN: Don't mind me.
15 D PEMBERTON-HALE (not looking): We don't.
16 A ¶ The desk phone rings.
17 A Pemberton-Hale lifts it without taking his eyes from the blotter.
18 D PEMBERTON-HALE [CONT'D] (into phone): Claims.
19 D VOICE [V.O.] (over phone, thin and tinny): Horatio. It's Head Office. Is the efficiency man there yet?
20 D PEMBERTON-HALE (into phone): Who?
21 D VOICE [V.O.]: The efficiency man. Mr. Alistair Voss. Gray suit, bowler. He's to review the department.
22 A ¶ Pemberton-Hale's pencil stops.
23 A He looks up, slowly, past Gwendolyn, to the man at the window.
24 D PEMBERTON-HALE (into phone): I'll call you back.
25 A ¶ He hangs up.
26 A Rises.
27 A The Man in the Gray Suit takes off his bowler.
28 D PEMBERTON-HALE [CONT'D]: Mr. Voss.
29 D VOSS: Please. Sit. I've been enjoying the show.
30 A ¶ Pemberton-Hale does not sit.
31 A Neither does Gwendolyn, who has quietly put down her ledger and folded her hands behind her back.
32 D VOSS [CONT'D]: Tell me, Mr. Pemberton-Hale, how many of your employees are four percent down?
33 D PEMBERTON-HALE: One. Miss Tillman.
34 D VOSS: And how many are four percent up?
35 D PEMBERTON-HALE (a long pause): None.
36 D VOSS: Then the department is meeting target.
37 A ¶ Pemberton-Hale's mouth opens, closes.
38 A Gwendolyn picks up her ledger and walks to the door.
39 D GWENDOLYN: Excuse me. I have eleven hundred claims to file.
40 A ¶ She closes the glass door behind her very gently.
41 A Through the glass, the typewriters clatter on.
