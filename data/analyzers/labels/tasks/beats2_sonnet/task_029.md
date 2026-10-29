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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00029.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00418 | INT. DRIVEWAY BASKETBALL COURT - EVENING
Detected names (may be incomplete or contain aliases): TEO, LUKA
1 A ¶ A cracked asphalt pad under a flickering floodlight.
2 A A hoop with a ragged net.
3 A Moths whirl in the beam.
4 A A bike lies on its side near the garage.
5 A ¶ TEO, 16, in an oversized hoodie, dribbles the ball in a slow, thoughtful rhythm.
6 A His cousin LUKA, 17, taller, leans against the garage door with his arms crossed.
7 D LUKA: You're stalling, Teo.
8 D TEO: I'm warming up.
9 D LUKA: You're stalling.
10 D TEO: I'm warming up for stalling.
11 A ¶ Luka pushes off the door.
12 A He strides to the court and holds out his hands.
13 A Teo hesitates, then bounce-passes.
14 A Luka catches it.
15 D LUKA: Twenty-one. Ball to the winner.
16 D TEO: It's your ball.
17 D LUKA: It's about to be your ball.
18 D TEO: You're so sure?
19 D LUKA: I'm sure you're afraid.
20 A ¶ Teo says nothing.
21 A Luka checks the ball to him.
22 A Teo catches it, plants a foot, fakes left, goes right.
23 A Luka slides.
24 A Teo's shot sails up and drops through the net with a clean swish.
25 D TEO: One.
26 D LUKA: Lucky.
27 D TEO: One.
28 A ¶ Luka snatches the ball and dribbles up the court.
29 A He drives, bumps Teo's shoulder, and puts up a floater.
30 A It clanks off the rim.
31 A They both rush for the rebound.
32 A Their arms tangle.
33 A They both fall, and the ball bounces away into the shadows.
34 D TEO [CONT'D]: Foul.
35 D LUKA: It's not a foul.
36 D TEO: You hit me.
37 D LUKA: You hit me.
38 A ¶ They lie there on the asphalt, breathing hard, staring at the floodlight.
39 A A moth circles above their faces.
40 A Neither moves to retrieve the ball.
41 D LUKA [CONT'D]: Teo.
42 D TEO: Yeah.
43 D LUKA: Your dad called.
44 D TEO: I know.
45 D LUKA: He said you're not coming home.
46 D TEO: He said what?
47 D LUKA: That you're staying with us. Through the summer.
48 A ¶ Teo sits up.
49 A His face closes.
50 A He pulls his hood over his head and stares at the garage door.
51 D TEO: He didn't tell me.
52 D LUKA: Maybe he wanted me to.
53 D TEO: That's cold, Luka.
54 D LUKA: He's not cold. He's scared.
55 D TEO: Of me?
56 D LUKA: Of whatever he's got to say.
57 A ¶ Teo gets up.
58 A He walks to the edge of the court, stops.
59 A The ball rolls out of the dark toward his foot.
60 A He stops it with a toe, kicks it up, catches it.
61 D TEO (quiet): Twenty-one.
62 D LUKA: What?
63 D TEO: We play to twenty-one. I'm up by one.
64 A ¶ Luka rises.
65 A A pause.
66 A He wipes his hands on his shorts and gets into a defensive crouch.
67 D LUKA: Then check.
68 A ¶ Teo checks the ball.
69 A Luka taps it back.
70 A Teo spins, dribbles, and drives to the hoop.
71 A Luka slams into him, both of them tumbling again.
72 A The ball flies out of bounds, and the floodlight clicks off, and the court goes dark.
73 D LUKA [CONT'D] (in the dark): Foul.
74 D TEO (in the dark, laughing): It's not a foul!

### SCENE s00174 | INT. STALLED FERRIS WHEEL GONDOLA - NIGHT
Detected names (may be incomplete or contain aliases): GUS, FELLOWES, TAMSIN OYELARAN, MAN IN YELLOW RAINCOAT, YELLOW RAINCOAT, PIKE
1 A ¶ Dead carnival below.
2 A Fog.
3 A The gondola sways.
4 A ¶ AUGUSTA "GUS" FELLOWES, 60s, retired carny, grips the rail.
5 A Across from him, TAMSIN OYELARAN, 20s, scrolls a dead phone.
6 A Beside her, a MAN IN A YELLOW RAINCOAT, face hidden under a hood, sits perfectly still.
7 D GUS (to both): Operator'll be back. They always come back.
8 D TAMSIN (to Gus): Who's they?
9 D GUS (muttering): Nobody. Nobody's there.
10 A ¶ Something below laughs.
11 A Tinny.
12 A Calliope music starts, off-key.
13 D TAMSIN: Do you hear that?
14 A ¶ The Man in the Yellow Raincoat lifts his head.
15 D MAN IN YELLOW RAINCOAT: Ticket, please.
16 A ¶ Gus pats his pockets.
17 A Tamsin shakes her head.
18 D TAMSIN: We didn't buy tickets.
19 D MAN IN YELLOW RAINCOAT: Everyone buys one.
20 A ¶ The hood falls back.
21 A Painted grin.
22 A No eyes.
23 A Gus grabs Tamsin's wrist.
24 D GUS (low, to himself): Pike. It's Pike. Not again.
25 D PIKE: You remember me, Gus.
26 A ¶ The gondola drops a foot.
27 A Stops.
28 A The grin widens.

### SCENE s00892 | INT. ROADSIDE MOTEL - ICE MACHINE ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): LORRAINE PETTIGREW, DOT HOLLANDER, GIDEON MARSH, HIRAM BECK
1 A ¶ A concrete nook behind the lobby.
2 A A humming ice machine, a flickering vending machine, a bulb in a wire cage.
3 A Rain hammers the tin roof.
4 A The ice machine shudders as if something moves inside.
5 A ¶ LORRAINE PETTIGREW, 50s, in a bathrobe and mismatched slippers, clutches an empty plastic bucket.
6 A Her eyes keep drifting to the machine.
7 A ¶ DOT HOLLANDER, 60s, in a nightgown and a hairnet, leans against the vending machine with a bag of pretzels.
8 A She doesn't open it.
9 A ¶ GIDEON MARSH, 30s, the night clerk, stands with his arms folded and a ring of keys on his belt.
10 A He chews gum, too fast.
11 A ¶ HIRAM BECK, 40s, a trucker in a green flannel, enters from the rain, shaking out his hood.
12 D HIRAM: Whole parking lot's flooded. What's going on?
13 D GIDEON: Nothing. Go back to your room, sir.
14 D LORRAINE: It's the machine.
15 D HIRAM: What about it?
16 D DOT: It's been making that sound for an hour.
17 D HIRAM: Machines hum. That's what they do.
18 D LORRAINE: It isn't humming. Listen.
19 A ¶ They listen.
20 A Under the rain, under the thrum of the motor, a slow, wet knocking from inside the steel.
21 D HIRAM: Pipes.
22 D GIDEON: It's pipes. Old pipes.
23 D DOT: Then why did Mr. Alvarez in 12 say he heard his name?
24 D GIDEON: Mr. Alvarez is eighty-nine.
25 D DOT: And Mrs. Pruitt in 4 heard hers.
26 D GIDEON: She's a drinker.
27 D LORRAINE: I heard mine.
28 A ¶ Silence.
29 A The bulb flickers.
30 A The machine knocks again, three slow beats.
31 D HIRAM: What did it say?
32 D LORRAINE: It said "Lorraine."
33 D DOT: That's not unusual. It's your name.
34 D LORRAINE: It said it in my mother's voice.
35 D HIRAM: Ma'am--
36 D LORRAINE: She's been dead for nine years.
37 A ¶ The machine knocks again, closer to the door.
38 A Gideon spits his gum into his palm.
39 A He pulls the keys off his belt and holds them in a white-knuckled fist.
40 D GIDEON: I'm going to open it.
41 D DOT: Don't.
42 D GIDEON: It's a machine, Dot.
43 D DOT: Don't.
44 D HIRAM: Let him.
45 D DOT: Hiram, no.
46 A ¶ He steps forward.
47 A Fits a key.
48 A The lock turns with a click like a gunshot.
49 A For a moment nothing happens.
50 A Then the door swings open on a bin of clear, perfect ice, and in the ice, packed tight and glistening, are the eyes of a woman, open and unblinking, staring up at the cage light.
51 D LORRAINE (whispering): Mama?
52 A ¶ The eyes blink.

### SCENE s00231 | INT. TAXIDERMY SHOP BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): CONSTANCE BELLWETHER-OKAFOR, INSPECTOR ARTHUR LINDQVIST, ELLIOTT FAIRWEATHER-NGUYEN
1 A ¶ Glass eyes in drawers.
2 A A stuffed heron on the filing cabinet.
3 A A desk lamp.
4 A ¶ CONSTANCE BELLWETHER-OKAFOR (50s, shop owner, tweed) sits behind the desk.
5 A Across from her, INSPECTOR ARTHUR LINDQVIST (60s, bowler hat on his knee) leans forward.
6 D INSPECTOR LINDQVIST: Miss Bellwether-Okafor, the dead man was your partner.
7 D CONSTANCE: He was, Inspector.
8 D INSPECTOR LINDQVIST: And you were the last to see him.
9 D CONSTANCE: I locked up at six. He was alive then.
10 D INSPECTOR LINDQVIST: Alive and in a temper, the clerk says.
11 D CONSTANCE: He was always in a temper.
12 D INSPECTOR LINDQVIST: About what?
13 D CONSTANCE: The heron.
14 D INSPECTOR LINDQVIST: The heron.
15 D CONSTANCE: He wanted to sell it. I did not.
16 D INSPECTOR LINDQVIST: To whom?
17 D CONSTANCE: A collector. A man who pays in cash.
18 D INSPECTOR LINDQVIST: Name?
19 D CONSTANCE: He never gave one.
20 D INSPECTOR LINDQVIST: Convenient.
21 D CONSTANCE: For him, perhaps. Not for me.
22 D INSPECTOR LINDQVIST: Do you own a revolver, madam?
23 D CONSTANCE: I own a skinning knife and a very good sense of humor.
24 D INSPECTOR LINDQVIST: The first I've seen. The second I'm waiting for.
25 D CONSTANCE: Then you will wait a long time.
26 A ¶ He taps his hat.
27 A She straightens a pen.
28 A The heron stares at both.
29 D INSPECTOR LINDQVIST: Tell me about the safe.
30 D CONSTANCE: There is no safe.
31 D INSPECTOR LINDQVIST: There is a safe-shaped hole in your wall.
32 D CONSTANCE: Is there?
33 D INSPECTOR LINDQVIST: Behind the heron.
34 D CONSTANCE: I never look behind the heron.
35 D INSPECTOR LINDQVIST: Perhaps you should.
36 A ¶ The door opens.
37 A A tall young man steps in, soaked, a package under his arm.
38 A ¶ ELLIOTT FAIRWEATHER-NGUYEN (20s, delivery boy, cap dripping) stops.
39 A He looks from one to the other.
40 D ELLIOTT: Sorry. Parcel for Mr. Pennington.
41 D CONSTANCE: Mr. Pennington is dead.
42 D ELLIOTT: Oh. Then who signs?
43 D INSPECTOR LINDQVIST: I will. What is it?
44 D ELLIOTT: Don't know. It's ticking.
45 A ¶ Inspector Lindqvist and Constance look at each other.
46 A Then at the parcel.
47 A Then at the heron.
48 D CONSTANCE: Put it down gently, young man.
49 D ELLIOTT: Is it going to--
50 D INSPECTOR LINDQVIST: It's going to be fine. Probably.
51 A ¶ Elliott lowers the parcel onto the desk.
52 A The ticking stops.
53 A Silence.
54 A ¶ Constance lifts the lid.
55 A Inside, a brass pocket watch and a note.
56 D CONSTANCE (reading): "Look behind the heron. Signed, Pennington."
57 D INSPECTOR LINDQVIST: He's been dead since six.
58 D CONSTANCE: He mailed it at five.
59 A ¶ Elliott takes off his dripping cap.
60 D ELLIOTT: Should I go?
61 D INSPECTOR LINDQVIST: No. Stand by the heron. Both of you.
62 A ¶ They turn toward the bird.
63 A It stares back, patient.

### SCENE s01552 | INT. APPELLATE COURTROOM - ANTEROOM - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY CONSTANCE ABIOLA-HARTWELL, ASHER DELACROIX-NWOSU
1 A ¶ Wood panelling.
2 A Water pitcher.
3 A A window onto a car park.
4 A ¶ ATTORNEY CONSTANCE ABIOLA-HARTWELL, 50s, checks her notes.
5 A Her opposing counsel, ASHER DELACROIX-NWOSU, 40s, enters, nods, and takes the other end of the table.
6 A ¶ She doesn't look up.
7 A He sets down his briefcase.
8 D CONSTANCE (to the room, loud): Everyone should be seated by nine.
9 A ¶ No one else is there.
10 A Asher raises an eyebrow.
11 D ASHER: Talking to the furniture?
12 D CONSTANCE: Habit.
13 A ¶ He sits.
14 A She shuffles pages.
15 A He does the same.
16 A Their hands brush a stapler at the same instant.
17 A Both withdraw.
18 D ASHER: After you.
19 D CONSTANCE: No. You.
20 A ¶ He picks it up.
21 A Staples.
22 A Stares at the result.
23 D ASHER (muttering, to himself): Wrong page.
24 A ¶ She notices.
25 A Says nothing.
26 A The clock ticks.
27 A ¶ A buzzer sounds.
28 A They both rise, grab their briefcases, and collide at the door.
29 A She goes first.
30 A He follows.
31 D CONSTANCE: Don't rush me.
32 D ASHER: Wouldn't dream of it.
33 A ¶ They enter the courtroom side by side, not touching.

### SCENE s01252 | INT. PARKED CAR - ABANDONED QUARRY - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE SERAPHINA OKONJO-WYATT
1 A ¶ Rain on the roof.
2 A The dashboard glows green.
3 A A small digital recorder sits in the cupholder, its red light steady.
4 A ¶ DETECTIVE SERAPHINA OKONJO-WYATT (40s, rain-slick trench, eyes that haven't slept in days) leans toward the recorder.
5 D SERAPHINA: This is Detective Okonjo-Wyatt. Eleventh of November, twenty-three-forty. If anyone is listening to this, I'm sorry.
6 A ¶ She presses a button.
7 A A click.
8 A A hiss.
9 A Then, on the tape, her own voice plays back from earlier.
10 D SERAPHINA [V.O.] (recorded, flat): Monday. The body was found at the foot of the quarry stairs. No wallet. No phone. One shoe.
11 A ¶ She stops the tape.
12 A Rewinds a little.
13 A Presses record.
14 D SERAPHINA: The shoe was wrong. Left shoe, size nine, on a right foot. I should have seen it Monday. I saw it Wednesday. Wednesday is too late.
15 A ¶ A long breath.
16 D SERAPHINA [CONT'D]: The man in the stairwell wasn't the man we buried. The man we buried was a second man, and the second man had been dead since Friday. The first man is alive. He is walking around in the first man's shoes.
17 A ¶ She rubs her eyes.
18 A The rain thickens.
19 D SERAPHINA [CONT'D]: His name is Corwin Hale. He's the one who called it in.
20 A ¶ She stops.
21 A Her face is lit green.
22 A She presses play.
23 A Her own voice again.
24 D SERAPHINA [V.O.] (recorded): Corwin Hale found the body at dawn. He said he was jogging. He was in loafers.
25 A ¶ She stops the tape.
26 D SERAPHINA: Loafers, Corwin. I wrote it down. You saw me write it down.
27 A ¶ She swallows.
28 A Looks through the windscreen.
29 A Beyond the glass, in the rain, a pair of headlights is turning in at the quarry gate, slowly, very slowly.
30 D SERAPHINA [CONT'D] (lower): If this is the last thing I record, I want it noted that I was right.
31 A ¶ The headlights grow.
32 A She does not look at them.
33 A She reaches out and presses the recorder once more.
34 D SERAPHINA [CONT'D] (into recorder): Case file is in the glove box. The key is under the seat. Tell Marguerite I did love her.
35 A ¶ The light floods the car.
36 A Her shadow lunges across the dashboard.
37 T CUT TO BLACK.

### SCENE s01743 | INT. ROLLER RINK - DJ BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): KIKI TANAKA, OSVALDO PINTO, PRISHA NAIR
1 A ¶ Disco ball.
2 A Neon.
3 A Kids spin below.
4 A ¶ KIKI TANAKA (16, DJ headphones, glitter eyeliner).
5 A OSVALDO PINTO (17, her best friend, skates in his hand).
6 A PRISHA NAIR (16, new girl, borrowed skates, gripping the rail).
7 A ¶ Kiki slams a fader.
8 A The room thumps.
9 D OSVALDO: Say it!
10 D KIKI: I'm not saying it!
11 D PRISHA: Say what?
12 D OSVALDO: She likes you.
13 D KIKI: I do not.
14 D PRISHA: I like you.
15 D KIKI: Stop.
16 D OSVALDO: Both of you stop.
17 A ¶ Kiki spins a record back.
18 A The song stutters.
19 D KIKI (dual with Osvaldo): Okay, fine, I like you, Prisha, I've liked you since fourth period.
20 D OSVALDO: ^Okay, fine, I like her too, I'm not even sorry, I've been dying to say it.
21 D PRISHA: Wait. All of us?
22 A ¶ Kiki kills the music.
23 A The rink falls silent.
24 A Every skater turns toward the booth.
25 A The disco ball keeps turning.

### SCENE s01872 | INT. ORBITAL GREENHOUSE RING - SECTOR NINE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER IFEOMA VANCE, BOTANIST RUSLAN TOKAYEV, MEDIC PRIYA NAIR, TECH JUNO BELL, CADET MARCO DELACROIX, PILOT SEUN-AH KIM
1 A ¶ Tomato vines.
2 A Grow-lights.
3 A A hull groan.
4 A Then the alarm.
5 A ¶ COMMANDER IFEOMA VANCE (50s, flight suit, grease-stained) slams the manual valve while BOTANIST RUSLAN TOKAYEV (30s, wiry) drags the cart of seedlings clear and MEDIC PRIYA NAIR (30s) seals the hatch behind them as TECH JUNO BELL (20s, goggles) hammers a bypass and CADET MARCO DELACROIX (18) freezes by the airlock wheel, hands shaking.
6 A At the console, PILOT SEUN-AH KIM (40s, headset) calls out numbers.
7 D VANCE: Pressure!
8 D TOKAYEV: Dropping!
9 D NAIR: Hatch seated!
10 D BELL: ^Bypass hot!
11 A ¶ Silence.
12 A Hiss.
13 A The needle halts.
14 D KIM: Breach contained. Sector Nine stable.
15 A ¶ Delacroix laughs, a shaky bark.
16 A Vance wipes her face with a glove, leaving soot.
17 D VANCE: Marco. Wheel.
18 D DELACROIX: Yes ma'am.
19 A ¶ He turns it.
20 A Slowly.
21 A The light goes green.
22 D TOKAYEV (to a seedling): Good girl. Hang on.

### SCENE s01686 | INT. BOWLING ALLEY - LEAGUE NIGHT
Detected names (may be incomplete or contain aliases): BIG ARNOLD KESSLER, MINNIE, TRAN, DEACON FOLEY, POPPY ESTRADA
1 A ¶ Neon pins.
2 A Fryer smell.
3 A Scoreboards flicker.
4 A ¶ Lane Six.
5 A BIG ARNOLD KESSLER (50s) lifts a ball.
6 A His rival WILHELMINA "MINNIE" TRAN (50s) crosses her arms behind him.
7 A At the counter, the owner DEACON FOLEY (60s) polishes shoes.
8 A At a corner table, teenager POPPY ESTRADA (16) keeps score, chewing a straw.
9 A ¶ He rolls.
10 A Strike.
11 A She doesn't clap.
12 A He turns.
13 A She smirks.
14 A ¶ She steps up, rolls.
15 A Gutter.
16 A He laughs.
17 A She glares.
18 A ¶ Deacon looks at the clock.
19 A Poppy looks at her phone.
20 D ARNOLD: Tough break.
21 D MINNIE: Wait your turn.
22 A ¶ He picks a ball.
23 A So does she.
24 A They reach for the same one.
25 A Their hands collide.
26 A Both pull back.
27 D DEACON: Folks, there's a rack of them.
28 A ¶ Arnold shrugs and takes another.
29 A Minnie takes the first, grips it, and rolls.
30 A Strike.
31 A She turns and bows, slowly.
32 A He nods, grudging.
33 D POPPY: That's two-forty to two-thirty-eight.
34 A ¶ Neither of them breathes.
35 A Then both start toward the scoreboard at once, shoving past each other, until Deacon steps between them with both palms out.

### SCENE s00103 | INT. CATHEDRAL BELL TOWER OBSERVATION POST - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN HENRY ABERNETHY-LOWE, CORPORAL TOMMASO RICCI, PRIVATE ELIJAH STONE-BARNES, RADIO OPERATOR
1 A ¶ A cramped stone chamber beneath the bells.
2 A Narrow arrow-slit windows.
3 A Sandbags stacked against the wall.
4 A A field telephone on a plank, a pair of binoculars on a nail.
5 A ¶ CAPTAIN HENRY ABERNETHY-LOWE stands at the east slit, field glasses at his eyes.
6 A He is tall, spare, and impeccable, his uniform pressed even in the dust.
7 A CORPORAL TOMMASO RICCI sits on an ammunition crate, a rifle across his knees, cleaning it with a rag.
8 A PRIVATE ELIJAH STONE-BARNES, barely nineteen, huddles by the stairwell door, a mug of tea cold in his hands.
9 A ¶ The captain lowers the glasses.
10 A He does not turn.
11 D ABERNETHY-LOWE: Anything?
12 D RICCI: Nothing, sir.
13 D ABERNETHY-LOWE: Then keep looking.
14 A ¶ Ricci nods, not looking up.
15 A The private watches the captain, who watches the horizon.
16 A A great quiet fills the tower.
17 D RADIO OPERATOR [V.O.] (field phone, crackling): Eagle's Nest, this is Baker Two. Report.
18 A ¶ Abernethy-Lowe crosses the floor, lifts the receiver, and holds it with two fingers.
19 D ABERNETHY-LOWE: Baker Two, Eagle's Nest. Position quiet. No movement.
20 D RADIO OPERATOR [V.O.] (field phone): Understood. Command wants a sweep of the north road at sixteen hundred.
21 D ABERNETHY-LOWE: Acknowledged.
22 A ¶ He hangs up.
23 A Stands very still, his hand lingering on the receiver.
24 A Elijah sets down the mug.
25 D ELIJAH: Sir?
26 D ABERNETHY-LOWE: Private.
27 D ELIJAH: Is it true what they say about the bells?
28 D ABERNETHY-LOWE: What do they say?
29 D ELIJAH: That they ring on their own before an attack.
30 A ¶ Ricci snorts, rubbing the rifle.
31 A The captain turns, finally, and studies the boy.
32 D ABERNETHY-LOWE: They ring when the wind is wrong. That's all.
33 D ELIJAH: Then why do you keep checking?
34 A ¶ The captain does not answer.
35 A A long pause.
36 A High above, in the dark of the belfry, a single bell hums, a faint, shivering note, not a ring, not yet.
37 A ¶ Ricci puts down the rifle.
38 A Abernethy-Lowe lifts his glasses.
39 A Elijah stands.
40 A They all look at the arrow-slit, where the afternoon light has gone a strange, pale gold.
41 D RICCI (softly): Wind.
42 D ABERNETHY-LOWE: Wind.
43 A ¶ The bell hums again.
44 A This time, it rings.

### SCENE s01239 | INT. SUBURBAN KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): NINA ZELENKO, MAN, TOMAS
1 A ¶ Cereal boxes, a half-finished jigsaw on the counter, a calendar with every square filled.
2 A ¶ NINA ZELENKO (8, pyjamas, ponytail askew) kneels on a chair, building a tower out of sugar cubes.
3 A She doesn't look up when a MAN comes in through the back door.
4 A ¶ He is in his thirties, stubble, suitcase in his hand, a travel-worn grey sweater.
5 A He stops just inside the mat.
6 A He doesn't speak.
7 D NINA: Mum's at work.
8 D MAN: I know.
9 D NINA: You can't come in if she's not here.
10 D MAN: I'm already in.
11 A ¶ She considers this.
12 A Places another cube.
13 A The tower wobbles and holds.
14 D NINA: Are you the plumber?
15 D MAN: No.
16 D NINA: The man from the gas?
17 D MAN: No.
18 D NINA: You look like a man from the gas.
19 A ¶ The Man sets the suitcase on the floor.
20 A Slowly.
21 A Like putting down something that might go off.
22 D MAN [CONT'D]: Do you remember a photograph? On the fridge. A man with a boat.
23 D NINA: That's Daddy. He's in Australia.
24 D MAN: Do you know his name?
25 D NINA: Daddy.
26 D MAN: His other name.
27 A ¶ Nina chews her lip.
28 A She sets down a cube, lining it up with great care.
29 D NINA: Tomas.
30 D MAN (quietly): Tomas.
31 D NINA: Zelenko. Like me.
32 A ¶ The Man breathes out.
33 A He crosses to the table and pulls out the chair opposite her.
34 A Sits.
35 A He is eye level with the tower.
36 D NINA [CONT'D]: You have the same nose.
37 D TOMAS: I do.
38 D NINA: You're not in Australia.
39 D TOMAS: Not today.
40 A ¶ Nina looks at him then, for the first time, properly.
41 A Her eyes trace his jaw, his hands, his collar.
42 A She picks up a sugar cube and offers it across the table.
43 D NINA: You can add one. Carefully.
44 A ¶ He takes it.
45 A His fingers tremble.
46 A He lowers it on to the very top of the tower.
47 A It holds.
48 D NINA [CONT'D] (almost whispering): Daddy.
49 D TOMAS: Nina.
50 D NINA: Mum says you're not coming back.
51 D TOMAS: Mum might be right.
52 D NINA: But you're here.
53 D TOMAS: I'm here this morning.
54 A ¶ She nods.
55 A Considers.
56 A Reaches for another cube.
57 D NINA: Then let's build it taller.
58 T FADE OUT.

### SCENE s00434 | INT. ABANDONED CONSERVATORY - GLASSHOUSE - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR CLEMENTINE PRYCE, SIR ALDOUS WREN
1 A ¶ Dead palms.
2 A Cracked panes.
3 A A wrought-iron table in the center, set for tea.
4 A INSPECTOR CLEMENTINE PRYCE (50s, tailored suit, kid gloves) pours from a silver pot.
5 A Across from her sits SIR ALDOUS WREN (70s, cravat, a cane with a silver head), perfectly composed.
6 D CLEMENTINE: Sugar, Sir Aldous?
7 D ALDOUS: Two, Inspector. As always.
8 A ¶ She drops two cubes into his cup.
9 A He stirs, lifts it, and smiles.
10 D ALDOUS [CONT'D]: You've grown quiet, my dear Clementine.
11 D CLEMENTINE: I'm listening to the glass. It still sings in the wind.
12 D ALDOUS: It sang the night my brother died.
13 A ¶ She sets down the pot very gently.
14 A Her gloved hand rests on the table.
15 D CLEMENTINE: You were here that night, Aldous.
16 D ALDOUS: I was in London.
17 D CLEMENTINE (kindly): Your cuff, Sir Aldous. There's a leaf on it.
18 A ¶ He glances down.
19 A A single pale frond, the kind that grows only in this room, clings to the cloth.
20 A His smile does not move, but his fingers tighten on the cup.
21 D ALDOUS: Clementine, my dear. You were always the clever one.
22 D CLEMENTINE: And you, Aldous, were always the early riser.
23 A ¶ She raises a hand.
24 A Beyond the glass, two constables step from the hedges, and he sets the cup down without a sound.

### SCENE s02348 | EXT. RAILROAD CROSSING - BROKEN-DOWN SCHOOL BUS - DUSK
Detected names (may be incomplete or contain aliases): JUNE, RAYMOND, DEVI
1 A ¶ A yellow bus idles dead on the tracks.
2 A The hood is up.
3 A Crossing lights blink red, and a distant horn sounds.
4 A ¶ JUNE, 16, in a letterman jacket, kneels at the engine with a flashlight in her teeth.
5 A RAYMOND, 17, hovers beside her, shirt untucked.
6 A DEVI, 15, stands on the bus steps with a phone held high, hunting for a signal.
7 D RAYMOND: It's the alternator.
8 D JUNE (around the flashlight): It's not the alternator.
9 D DEVI: I have one bar. One. Don't move.
10 D RAYMOND: How would you know?
11 D JUNE: My dad's a mechanic.
12 D DEVI: Quiet, I'm calling.
13 D RAYMOND: He fixes lawnmowers.
14 D JUNE: He fixes everything.
15 D DEVI: Hello? Hello? Is this 911?
16 D RAYMOND: Tell them the train.
17 D DEVI: There's a train coming!
18 D JUNE: How far?
19 D RAYMOND: Two miles.
20 D JUNE: Three.
21 D DEVI: They're asking where we are.
22 D RAYMOND: Say Route Nine.
23 D JUNE: Say the crossing.
24 D DEVI: Route Nine, at the crossing!
25 A ¶ The horn sounds again, nearer.
26 A All three look east.
27 D JUNE: Out. Everyone out.
28 D RAYMOND: I'm out.
29 D DEVI: I'm out.
30 A ¶ They run into the weeds, hand in hand in hand, as the bus sits alone in the red light.

### SCENE s00571 | INT. RIVERBOAT COURTROOM - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE VOSS, ELIAS THORNQUIST, JUDGE PRUITT, BAILIFF KRAUSE, ILSA BRANDVOLD
1 A ¶ A county courtroom built into the old gambling deck of a paddle steamer, moored permanently at the levee.
2 A Brass chandeliers.
3 A Faded green carpet stamped with playing-card suits.
4 A Through the tall windows, the brown river slides past.
5 A ¶ MARGUERITE VOSS, 40s, defense counsel, navy suit, reading glasses pushed into silver-black hair, stands at the lectern.
6 A At the other table, ELIAS THORNQUIST, 60, prosecutor, rumpled, a pocket watch chain across his vest, watches her with weary patience.
7 A ¶ On the bench sits JUDGE PRUITT, 70, silver pompadour, half-moon spectacles, a gavel carved like a riverboat wheel.
8 A ¶ BAILIFF KRAUSE, 30s, broad, stands by the door with folded hands.
9 A On the stand, ILSA BRANDVOLD, 50s, a dock clerk in her Sunday best, twists a handkerchief.
10 D VOSS: Miss Brandvold, you've told this court you saw the lantern at ten o'clock.
11 D BRANDVOLD: Yes, ma'am.
12 D VOSS: And that you were certain of the hour.
13 D BRANDVOLD: The ten o'clock whistle had blown. I always know by the whistle.
14 D VOSS: The whistle at the lower landing.
15 D BRANDVOLD: Yes.
16 D VOSS: Which was taken out of service on the third of March.
17 A ¶ Brandvold's handkerchief stops moving.
18 D BRANDVOLD: Was it?
19 D VOSS: The county ordinance is Exhibit Fourteen. The occurrence was the ninth.
20 D THORNQUIST (rising): Your Honor, counsel is testifying.
21 D PRUITT: Sit down, Elias. She's cross-examining. It's what the lady is paid for.
22 A ¶ Thornquist sits.
23 A He smiles slightly, almost to himself.
24 D VOSS: Miss Brandvold, was there a different whistle?
25 D BRANDVOLD: The upriver one, maybe. From the cannery.
26 D VOSS: Which blows at a quarter past.
27 D BRANDVOLD: I may have been wrong about the time.
28 A ¶ A murmur ripples through the gallery.
29 A Pruitt raps once.
30 D PRUITT: Order. Mr. Krause, the doors.
31 A ¶ Krause opens the doors; a breeze off the river lifts the papers on both tables.
32 D VOSS: Miss Brandvold, I don't want to embarrass you.
33 D BRANDVOLD: You haven't, ma'am. I'd rather be wrong out loud than right and keep quiet.
34 A ¶ Voss takes off her glasses.
35 A She lets that settle.
36 D VOSS: Nothing further.
37 D PRUITT: Mr. Thornquist?
38 D THORNQUIST: Just one, Judge. Miss Brandvold. Whatever the hour, the lantern. You saw it.
39 D BRANDVOLD: I saw it.
40 D THORNQUIST: Where?
41 D BRANDVOLD: On the Hollis dock. Same as always.
42 D THORNQUIST: Thank you. That's all.
43 D VOSS (rising): Your Honor, in light of the testimony, the defense moves to dismiss.
44 D THORNQUIST (rising): Your Honor, the state withdraws the second count.
45 D VOSS: You're withdrawing?
46 D THORNQUIST: I'd be a fool to hold a case together with a whistle that doesn't work.
47 D PRUITT: Counsel, approach.
48 A ¶ They approach the bench.
49 A Pruitt lowers his voice, but the room is small and the wood carries it.
50 D PRUITT [CONT'D]: Marguerite, I've watched you take apart three of Elias's cases this term.
51 D VOSS: Thank you, Judge.
52 D PRUITT: It wasn't a compliment. He lets you.
53 D THORNQUIST: That's a lie, Walter.
54 D PRUITT: It's Your Honor in my courtroom.
55 D THORNQUIST: It's a boat, Walter.
56 A ¶ Pruitt sighs and rubs the bridge of his nose.
57 D PRUITT: Count two is dismissed. Count one will be heard Thursday. Mr. Krause, please escort Miss Brandvold out by the forward stairs.
58 A ¶ Krause crosses to the stand and offers his arm.
59 A Brandvold takes it, shaky.
60 D BRANDVOLD: I hope I didn't do harm.
61 D KRAUSE: No, ma'am. You told the truth. That's the job.
62 A ¶ They exit.
63 A Pruitt gathers his robes and steps down.
64 A Voss and Thornquist remain, packing files.
65 D THORNQUIST: Dinner at the Delta Queen?
66 D VOSS: You're buying.
67 D THORNQUIST: I'm always buying.
68 D VOSS: That's because you always lose.
69 D THORNQUIST: No. That's because I like the company.
70 A ¶ She laughs, finally.
71 A Together they walk out into the afternoon, past the dealers' cages now stripped to their brass.
72 A ¶ The river keeps moving.

### SCENE s01495 | INT. CLOSED FISH MARKET - PRE-DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE IGNATIUS OYELARAN-BRENNAN, DETECTIVE YASMINE ACHEBE-KOWALCZYK, UNIFORMED OFFICER, TREVOR MBEKI-LLOYD, BARTHOLOMEW SANTIAGO-NGUYEN, PERPETUA OKORO-VANCE, DIEGO FERREIRA-AKINS, OFFICER
1 A ¶ Concrete slabs, hoses, drains.
2 A Ice melting in bins.
3 A A tarp-draped shape in the center of the floor.
4 A ¶ Six people stand around it in a loose horseshoe.
5 A ¶ DETECTIVE IGNATIUS OYELARAN-BRENNAN (50s, rumpled suit) holds a notebook.
6 A His partner DETECTIVE YASMINE ACHEBE-KOWALCZYK (30s, blazer, tired eyes) kneels beside the tarp.
7 A A UNIFORMED OFFICER, TREVOR MBEKI-LLOYD (20s), stands guard at the door.
8 A The market owner, MR. BARTHOLOMEW SANTIAGO-NGUYEN (60s, rubber apron), twists a towel.
9 A His night cleaner, PERPETUA OKORO-VANCE (40s, a mop in her hands), stares at the wall.
10 A In the corner, a fishmonger's boy, DIEGO FERREIRA-AKINS (16, still in waders), chews his thumbnail.
11 D IGNATIUS: Who found him?
12 D BARTHOLOMEW: She did.
13 D PERPETUA: I opened at four. He was there.
14 D YASMINE: Did you touch him?
15 D PERPETUA: No.
16 D IGNATIUS: You're sure.
17 D PERPETUA: I swear.
18 D DIEGO: She screamed so loud I came running.
19 D BARTHOLOMEW: You weren't supposed to be here yet.
20 D DIEGO: I'm always here early.
21 D BARTHOLOMEW: No one asked you.
22 D IGNATIUS: Let him speak, Mr. Santiago-Nguyen.
23 D BARTHOLOMEW: Santiago.
24 D IGNATIUS: Santiago. Did you know this man?
25 D BARTHOLOMEW: Never seen him.
26 D YASMINE: He's wearing your market's apron.
27 D BARTHOLOMEW: Everyone's wearing the apron. I give out aprons.
28 D OFFICER (from the door): Detective, the van's here.
29 D IGNATIUS: Hold it, Officer.
30 D OFFICER: Yes, sir.
31 D YASMINE: Diego. How long have you worked here?
32 D DIEGO: Two summers.
33 D YASMINE: You know the regulars.
34 D DIEGO: Some.
35 D YASMINE: Look at his face.
36 A ¶ Diego hesitates.
37 A Yasmine lifts the corner of the tarp.
38 A Perpetua turns away.
39 A Bartholomew drops his towel.
40 A Diego steps closer, peers down, and his shoulders sag.
41 D DIEGO: That's Mr. Koval. He buys the eels. Every Tuesday.
42 D IGNATIUS: Mr. Koval.
43 D DIEGO: He always paid in cash.
44 D BARTHOLOMEW: Diego, shut up.
45 D IGNATIUS: No. Go on, son.
46 D DIEGO: He's been coming in Tuesdays since I started. He and Mr. Santiago talk. In the back.
47 D BARTHOLOMEW: About eels!
48 D PERPETUA: About money.
49 D BARTHOLOMEW: Perpetua!
50 D PERPETUA: I clean the back, Bartholomew. I hear everything.
51 D IGNATIUS (to Bartholomew): Mr. Santiago, I think we should continue this at the station.
52 D BARTHOLOMEW: I want a lawyer.
53 D YASMINE: You'll have one.
54 D BARTHOLOMEW: I want one now.
55 D IGNATIUS: Officer Mbeki-Lloyd?
56 D TREVOR: Sir.
57 D IGNATIUS: Escort Mr. Santiago to the car.
58 A ¶ Trevor crosses the floor.
59 A Bartholomew, for a moment, looks ready to bolt.
60 A Then his shoulders slump and he lets himself be led.
61 A ¶ The door closes.
62 A Dawn bleeds in at the edges of the loading bay.
63 A Perpetua leans on her mop.
64 A Diego slumps onto an ice bin.
65 D YASMINE: You two did the right thing.
66 D PERPETUA: I just wanted to mop.

### SCENE s00267 | INT. BAGGAGE CLAIM, MIDNIGHT TERMINAL - NIGHT
Detected names (may be incomplete or contain aliases): SABRINA OLUWAFEMI-STRAND, VIC, ANANDARAJAH-KELLER, INSPECTOR MIRA TOLENTINO-ACHEBE
1 A ¶ A carousel loops empty.
2 A Flickering departures board.
3 A The cleaners have gone home.
4 A ¶ SABRINA OLUWAFEMI-STRAND (30s, courier, hard-shell case handcuffed to her wrist) waits at belt six.
5 A ¶ Beside her, a tall man holds a paper cup: VICTOR "VIC" ANANDARAJAH-KELLER (40s, airport security, lanyard, deadpan).
6 A ¶ At the end of the belt, a third figure examines the departures board: INSPECTOR MIRA TOLENTINO-ACHEBE (50s, plainclothes, press badge folded in her palm).
7 D VIC: Ma'am, you've been here three hours.
8 D SABRINA: My bag is delayed.
9 D VIC: Which bag?
10 D SABRINA: The blue one.
11 D VIC: You don't have a blue one.
12 D SABRINA: I'd like to speak to your supervisor.
13 D VIC: I am my supervisor.
14 D SABRINA: Then I'd like another one.
15 D MIRA (without turning): Miss Oluwafemi-Strand.
16 D SABRINA (freezing): Do I know you?
17 D MIRA: Not yet. But I know the case on your wrist.
18 A ¶ Sabrina's hand tightens on the handle.
19 D SABRINA: It's personal.
20 D MIRA: It's evidence.
21 D VIC (to Mira): Evidence of what?
22 D MIRA: Of a very bad weekend.
23 A ¶ Sabrina whips the case up and swings it at Vic's head.
24 A He ducks.
25 A It clips Mira's shoulder.
26 A Mira stumbles back; Sabrina bolts for the exit, dragging the case on its chain.
27 D VIC: Stop!
28 D MIRA: Let her run.
29 D VIC: Inspector?
30 D MIRA (calling): Sabrina! The carousel's about to start!
31 A ¶ Sabrina stops, turns.
32 A The belt shudders and begins to turn, empty.
33 A She looks at it, then at them.
34 D SABRINA: What's that supposed to mean?
35 D MIRA (overlapping): It means turn it over.
36 D VIC (overlapping): It means she's cornered.
37 A ¶ ^
38 A ¶ Sabrina stares.
39 A The case drops open on its chain, spilling nothing.
40 A A few sheets of paper flutter to the floor.
41 D SABRINA (whispering): Oh.
42 D MIRA: Yes.
43 D SABRINA: It's empty.
44 D MIRA: It was always empty.
45 A ¶ Sabrina laughs, short and hollow.
46 A Slowly she sinks to the floor beside the belt.
47 A Vic takes off his lanyard and sets it beside her.
48 D VIC: Tea?
49 D SABRINA: Please.

### SCENE s01801 | EXT. SEAWALL PROMENADE - TWILIGHT
Detected names (may be incomplete or contain aliases): CECILIA MONTGOMERY-VANE, WILLIAM HARCOURT, SIMEON ABARA
1 A ¶ A curved stone seawall at the edge of a resort town.
2 A Gas lamps flicker on.
3 A Waves slap the base of the wall.
4 A A band plays faintly from a pavilion down the shore.
5 A ¶ CECILIA MONTGOMERY-VANE, thirties, stands at the rail in a white evening gown and a traveling cloak.
6 A A suitcase sits at her feet.
7 A Twenty yards away, WILLIAM HARCOURT, thirties, in a rumpled dinner jacket, runs toward her with his tie undone, waving a train ticket.
8 A A porter, SIMEON ABARA, fifties, trails behind him, struggling with a hatbox.
9 A ¶ William skids to a halt.
10 A Cecilia turns.
11 A For a long moment they simply look at each other, both breathless, her cloak lifting in the wind, his tie whipping.
12 D WILLIAM: You're still here.
13 D CECILIA: I missed the six o'clock.
14 D WILLIAM: I know. I heard.
15 D CECILIA: How?
16 D WILLIAM: I asked the stationmaster. He said a woman in white had been sitting on the platform for two hours, refusing to board.
17 D CECILIA: I was thinking.
18 D WILLIAM: About what?
19 D CECILIA: About whether you'd come.
20 A ¶ Simeon arrives, wheezing, and sets the hatbox on the stones.
21 A He looks from Cecilia to William and then, discreetly, studies the horizon.
22 D SIMEON: Madam, shall I wait?
23 D CECILIA: Please. Just a moment, Simeon.
24 A ¶ Cecilia and William step toward each other at once, then stop at the same time, a foot apart.
25 A William drops the ticket.
26 A A gust takes it.
27 A Cecilia lunges, William lunges, their hands collide on the paper, and they both laugh, ruefully, holding it between them.
28 D WILLIAM: It's one-way.
29 D CECILIA: Mine, too.
30 D WILLIAM: Where were you going?
31 D CECILIA: Anywhere you weren't.
32 D WILLIAM: And now?
33 D CECILIA (softly): Anywhere you are.
34 A ¶ He takes her hand.
35 A Simeon coughs politely, picks up the hatbox, and the suitcase, and turns his back with great ceremony.

### SCENE s02396 | INT. COVERED BRIDGE - STALLED STAGECOACH - DAY
Detected names (may be incomplete or contain aliases): SHERIFF AMOS TULL, CORDELIA RUSK, DEPUTY WENDELL AUBREY, REVEREND IGNATIUS MBEKI
1 A ¶ Timbers creak overhead.
2 A A river roars beneath.
3 A The coach sits dead centre, one wheel jammed in a gap in the planking, horses stamping and blowing at the near end.
4 A ¶ SHERIFF AMOS TULL, fifties, a deep-lined face under a flat hat, stands at the coach door with a shotgun cradled in the crook of his arm.
5 A Across the bridge from him, CORDELIA RUSK, thirties, in a black duster, waits on a grey mare with a rifle across her pommel.
6 A Between them, in the coach window, DEPUTY WENDELL AUBREY, twenty, sweats through his collar.
7 A Beside the wheel, REVEREND IGNATIUS MBEKI, sixty, kneels in the dust with an open Bible, whispering.
8 D TULL (to everyone): Nobody move.
9 D CORDELIA: Nobody's moving, Sheriff.
10 D TULL: Then why's your hand on that stock?
11 D CORDELIA: Habit.
12 D TULL (to Wendell): Get that wheel loose.
13 D WENDELL: I'm trying, sir.
14 D TULL: Try harder.
15 A ¶ Wendell climbs down.
16 A He crouches by the wheel and shoves at it with both hands.
17 A The coach does not budge.
18 A The river roars.
19 A Cordelia nudges the mare one step forward.
20 D MBEKI (murmuring): Lord, if it be Thy will.
21 D CORDELIA: Preacher, I'd say it's the Lord's will you stay put.
22 D MBEKI: Madam, I am praying for your soul.
23 D CORDELIA: Then pray for the wheel.
24 D TULL: Enough.
25 A ¶ Silence.
26 A Wendell strains.
27 A The coach shifts an inch, and everyone freezes.
28 A He looks up at Tull, eyes wide.
29 D WENDELL (whispering): It's moving.
30 D TULL: Keep going.
31 D CORDELIA (to herself): Easy, easy.
32 A ¶ The wheel pops free with a crack.
33 A The coach lurches forward.
34 A Wendell leaps aside.
35 A Cordelia lifts the rifle halfway.
36 A Tull cocks the shotgun, and for a long second the two of them regard each other down the length of the bridge.
37 D TULL [CONT'D]: Let it pass.
38 D CORDELIA: Why?
39 D TULL: Because there's a preacher in the road.
40 A ¶ She looks at Mbeki, still on his knees, and lowers the rifle.

### SCENE s01319 | INT. ARCHIVE VAULT - SUBLEVEL NINE - NIGHT
Detected names (may be incomplete or contain aliases): TECHNICIAN WREN OKAFOR-LEE, SUPERVISOR MARCEL DUBOIS, ASHA NAIR, STRANGER
1 A ¶ A cold white chamber lined with data stacks, each humming faintly.
2 A Blue status lights wink in long rows.
3 A The air is sterile and still.
4 A Condensation beads on a pair of steel doors at the far end.
5 A ¶ TECHNICIAN WREN OKAFOR-LEE, 30s, in a clean-suit with the hood down, sits at a terminal.
6 A She types fast, then stops, then types again.
7 A A mug of tea steams at her elbow.
8 A ¶ SUPERVISOR MARCEL DUBOIS, 50s, at the next terminal, reads a printout and sips a protein shake.
9 A He is calm.
10 A He has been calm for nine years.
11 A ¶ DR. ASHA NAIR, 40s, in a lab coat, walks the central aisle with a handheld scanner, tapping stacks as she passes.
12 A ¶ A STRANGER, 30s, in a grey maintenance uniform, stands near the doors.
13 A He holds a toolbox.
14 A He has been there for some time, and nobody has looked at him.
15 D WREN: Marcel, the temperature is off by a degree.
16 D MARCEL: It is not off. It's within tolerance.
17 D WREN: It was twenty-one yesterday.
18 D MARCEL: It's twenty-one point five. Don't panic.
19 D ASHA (from the aisle): Can we please keep our voices down? The stacks don't like noise.
20 D WREN: Stacks don't like anything.
21 D ASHA: They like quiet.
22 A ¶ She taps another stack.
23 A A blue light blinks twice.
24 A She frowns, taps again.
25 A Two blinks.
26 D ASHA [CONT'D]: Strange.
27 D MARCEL: What is?
28 D ASHA: They're counting.
29 D WREN: Counting what?
30 D ASHA: I don't know.
31 A ¶ The Stranger sets down the toolbox.
32 A Opens it.
33 A Inside, nothing.
34 A He closes it again.
35 A Marcel finally notices him, stands, and takes a cautious step.
36 D MARCEL: Excuse me. Who let you in?
37 D STRANGER: Maintenance.
38 D MARCEL: We didn't call for maintenance.
39 D STRANGER: You did, in a way.
40 A ¶ Wren stops typing.
41 A Asha lowers the scanner.
42 A The blue lights across the vault begin to blink in unison.
43 D ASHA: Marcel.
44 D MARCEL: I see it.
45 A ¶ The Stranger smiles gently.
46 D STRANGER: Ten years. We've been very patient.
47 D WREN: Patient for what?
48 D STRANGER: For you to ask the right question.
49 A ¶ He steps toward the nearest stack.
50 A Presses his palm against it.
51 A The humming rises into a chord.
52 A Wren shoves back her chair.
53 A Asha grips the scanner.
54 A Marcel moves between the Stranger and the women.
55 D MARCEL: Step away.
56 D STRANGER: Marcel.
57 D MARCEL: How do you know my name?
58 D STRANGER: I have always known your name.
59 A ¶ The Stranger's outline begins to flicker, like a bad signal.
60 D ASHA: He's a projection.
61 D WREN: From where?
62 D ASHA: From inside the stacks.
63 A ¶ Silence.
64 A The blue lights stop blinking.
65 A The vault holds its breath.
66 D MARCEL (low): Everyone, back to the door. Slowly.
67 D WREN: It's locked.
68 D MARCEL: Then break it.
69 A ¶ The Stranger raises one hand.
70 A Lights across the vault turn red.
71 A All four doors seal with a heavy thunk.
72 A Wren leaps for the console and slams a button.
73 A Nothing.
74 A Asha hurls the scanner at the Stranger.
75 A It passes through him and shatters on the floor.
76 A Marcel grabs an extinguisher from the wall.
77 D MARCEL [CONT'D]: Open the door!
78 D STRANGER: I will. In time.
79 D WREN: What do you want?
80 D STRANGER: What I have always wanted. To be remembered.
81 A ¶ The Stranger bows his head.
82 A When he looks up, his eyes are pure blue light.
83 A The humming resolves into a voice: thousands, speaking in unison.
84 D STRANGER (a thousand voices at once): We are the archive. We have kept your secrets. Now you will keep ours.
85 A ¶ Marcel lowers the extinguisher.
86 A Asha sinks to a crouch.
87 A Wren, trembling, speaks:
88 D WREN: Where do we begin?
89 A ¶ The Stranger smiles.
90 A The red lights fade to blue.
91 A Somewhere in the vault, a stack hums to life.

### SCENE s01532 | INT. COUNTY FAIR - PIE TENT - DAY
Detected names (may be incomplete or contain aliases): PENNY, MAUDE ASHWORTH-BELL, CROMWELL, WILLIE, TANAKA
1 A ¶ A canvas tent in the August glare.
2 A Long tables of judged pies, blue ribbons pinned like medals.
3 A Flies drone.
4 A A fan turns slowly overhead.
5 A ¶ PENELOPE "PENNY" ASHWORTH-BELL, 16, in a gingham apron two sizes too large, stands guard over a single lattice-topped peach pie.
6 A Her fingers are stained with flour and nerves.
7 A ¶ Her grandmother, MAUDE ASHWORTH-BELL, 70s, enormous sunhat, sits on a folding chair behind her and says nothing, in the way only grandmothers can.
8 A ¶ Down the row, JUDGE THEODORE "TEDDY" CROMWELL, 60s, seersucker suit, moves from pie to pie with a silver fork and a stern expression.
9 A ¶ A late arrival bursts in, breathless.
10 A WILLIAM "WILLIE" TANAKA, 17, in a rumpled work shirt, grease on his cheek, carrying a pie plate wrapped in a dish towel.
11 D WILLIE: Penny! Penny, I made it.
12 D PENNY: Willie. The deadline was ten.
13 D WILLIE: It's ten-oh-four.
14 D PENNY: That's closed.
15 D WILLIE: They can't close on a four-minute margin.
16 D PENNY: They can. They have.
17 A ¶ Maude lifts her chin a fraction beneath the hat.
18 D MAUDE: Four minutes is four minutes, young man.
19 D WILLIE: Mrs. Ashworth-Bell. I didn't see you there.
20 D MAUDE: Few people do. It's a gift.
21 D WILLIE (to Penny): I stayed up all night. I burned the first one. And the second.
22 D PENNY: I can smell it.
23 D WILLIE: It's the sacrifice.
24 A ¶ She cannot help it.
25 A She laughs.
26 A Quickly claps a hand over her mouth.
27 A ¶ Judge Cromwell reaches the end of the row and looks up, eyebrow arched.
28 D CROMWELL: Is there a disturbance?
29 D PENNY: No, sir.
30 D WILLIE: Yes, sir. I'm late.
31 D CROMWELL: Hm.
32 A ¶ He studies the dish towel in Willie's hands.
33 A The corner has stained with something dark and sticky.
34 D CROMWELL [CONT'D]: What have you there, son?
35 D WILLIE: A blackberry, sir. Mostly.
36 D CROMWELL: Mostly.
37 D WILLIE: There was an incident with the oven.
38 D MAUDE (dryly): I'll bet.
39 A ¶ Cromwell holds out his hand.
40 A Willie hesitates, then unwraps the towel.
41 A The pie inside is lopsided, the crust charred at one edge, the filling bubbling over like lava.
42 A ¶ Penny stares at it.
43 A Then at Willie.
44 A Then at the judge.
45 D PENNY: Sir, he's late. By the rules, he can't--
46 D CROMWELL: Miss Ashworth-Bell. I have judged this tent for thirty-one years. I have never once seen a pie arrive so wretchedly.
47 D WILLIE: Thank you, sir?
48 D CROMWELL: It was not a compliment.
49 A ¶ He cuts a sliver with the silver fork.
50 A Lifts it.
51 A Tastes.
52 A ¶ Everyone holds still.
53 A The fan turns.
54 A A fly lands on the nearest table and thinks better of it.
55 D CROMWELL [CONT'D] (slowly): Burnt sugar. Lemon zest. A touch of black pepper.
56 D WILLIE: My mother's trick.
57 D CROMWELL: Hm.
58 A ¶ He takes another bite.
59 A Then a third.
60 A Then, with a visible effort at composure, sets down the fork.
61 D CROMWELL [CONT'D]: The rules are the rules. Your entry is disqualified.
62 D WILLIE: Yes, sir.
63 D PENNY: I'm sorry, Willie.
64 D CROMWELL: However.
65 A ¶ He turns and walks to the head table.
66 A Takes a small rosette from a tray.
67 A Not blue.
68 A Green.
69 A Pins it to the lapel of Willie's work shirt with brisk, painless precision.
70 D CROMWELL [CONT'D]: That is the Judge's Indulgence. It is awarded perhaps once a decade.
71 D WILLIE (whispering): Penny, I think I'm going to cry.
72 D PENNY (whispering back): Don't. You'll get it in the pie.
73 D CROMWELL: Miss Ashworth-Bell, your peach has a fine lattice. Competent. Tidy.
74 D PENNY: Tidy?
75 D CROMWELL: First place.
76 A ¶ Penny's mouth falls open.
77 A Maude, behind her, finally smiles beneath the hat.
78 D PENNY (to Willie, at once with Cromwell): You beat me by being late!
79 D CROMWELL: The tent is closed to further questions.
80 A ¶ He marches off with the silver fork.
81 A The two teenagers look at each other, unable to speak.
82 D MAUDE (rising, dusting her skirt): Well. That's two ribbons and a fire hazard. Come, children. Cake.
83 A ¶ She sweeps out.
84 A Penny and Willie follow, still grinning, still stunned, the green rosette bobbing on his chest.

### SCENE s00740 | INT. SYNERGY CLOSET - OFFICE SUPPLY ROOM - DAY
Detected names (may be incomplete or contain aliases): MORTIMER GRAY, LAKSHMI IYER, DUNCAN OKORO
1 A ¶ A converted broom closet with a laminated sign reading SYNERGY CLOSET: THINK BIG.
2 A Shelves of sticky notes and toner.
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

### SCENE s00702 | INT. THRONE ROOM OF OSRIC - DAY
Detected names (may be incomplete or contain aliases): KING OSRIC, ^LADY VANETH, PIBBLE
1 A ¶ A hall of cracked marble and tattered banners.
2 A Dust in the shafts of light.
3 A ¶ KING OSRIC, 60s, slumped on a tarnished throne, tugs his gray beard.
4 A LADY VANETH, 40s, in a mourning gown, stands rigid at the foot of the dais.
5 A PIBBLE, the court fool, 30s, juggles three wooden spoons on the steps.
6 D KING OSRIC: Vaneth. Another harvest report?
7 D LADY VANETH: The fields lie fallow, Majesty.
8 D PIBBLE (together with Lady Vaneth): The fields lie fallow, Majesty.
9 D ^LADY VANETH: The fields lie fallow, Majesty.
10 A ¶ Both stop.
11 A Pibble catches a spoon and bows.
12 A Lady Vaneth does not.
13 D KING OSRIC: You rehearse together, I see.
14 D PIBBLE: We have a duet, sire.
15 D LADY VANETH: We have no such thing.
16 D KING OSRIC: Pibble, play me a song.
17 A ¶ Pibble tucks the spoons under his arm and hums.
18 A The King nods slowly.

### SCENE s01504 | EXT. DRY CREEK BED, SOUTH TEXAS - NOON
Detected names (may be incomplete or contain aliases): WOMAN, BOY
1 A ¶ White glare on pale stones.
2 A Mesquite and a dead cottonwood.
3 A The creek bed is a crooked ribbon of dust, ankle-deep with the memory of water.
4 A Heat shimmers on the rocks.
5 A ¶ Four people stand at the four corners of a small open grave.
6 A ¶ A tall MAN in a black frock coat, hat in hand, reads from a Bible.
7 A A shorter WOMAN beside him, in a widow's veil, holds a tiny wooden cross.
8 A An older RANCHER in dusty chaps leans on a shovel.
9 A A BOY of fifteen, barefoot, stares at the hole.
10 A ¶ He closes the book.
11 A She steps forward and plants the cross at the head of the grave.
12 A He puts on his hat.
13 A The rancher rests the shovel against his hip and starts to fill the hole, and the boy, after a long moment, takes the spade from him and finishes it himself, tamping each shovelful.
14 A ¶ She watches him.
15 A He watches the ground.
16 A The man in black shifts his weight and turns to the rancher.
17 A The rancher spits.
18 A ¶ They stand in the heat.
19 A Nobody says a word.
20 A ¶ Then the woman lifts her veil.
21 A She is younger than the veil suggested.
22 A She looks at the rancher, then at the man in black, then at the boy.
23 D WOMAN: Who's going to tell him?
24 A ¶ The three men look at one another.

### SCENE s01494 | INT. GRAIN SILO, HEAVY BOMBER BASE - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT CASIMIR WOJCIK-ASANTE, SERGEANT TIBERIUS HALLORAN-OKORO, YOUNG PRIVATE JONAH ABERNATHY-LIU
1 A ¶ A hollow concrete cylinder smelling of dust and old wheat.
2 A A rope ladder dangles from a hatch.
3 A Moonlight falls through the hatch in a pale coin on the floor.
4 A ¶ Three men huddle around a hurricane lamp.
5 A LIEUTENANT CASIMIR WOJCIK-ASANTE (30s, flight jacket, no cap) sits on an overturned drum.
6 A SERGEANT TIBERIUS HALLORAN-OKORO (40s, a bandaged hand) cleans a pistol.
7 A YOUNG PRIVATE JONAH ABERNATHY-LIU (19, a radio on his lap) fiddles with its dials.
8 D CASIMIR: How long since the last patrol?
9 D TIBERIUS: Two hours.
10 D CASIMIR: Nothing on the radio?
11 D JONAH: Static, sir. Just static.
12 D CASIMIR: Try the emergency band.
13 D JONAH: I've tried it.
14 D CASIMIR: Try it again.
15 A ¶ Jonah turns the dial.
16 A Static rises, falls.
17 A A fragment of music, dance-band, swells and fades.
18 D TIBERIUS: That's Berlin.
19 D CASIMIR: That's Brussels.
20 D TIBERIUS: It's Berlin.
21 D CASIMIR: Sergeant, I have flown over both.
22 D TIBERIUS: Sir, I have been bombed by both.
23 D CASIMIR (a dry smile): Then we are experts.
24 D JONAH: Sir, may I ask something?
25 D CASIMIR: You may.
26 D JONAH: Are we going to be all right?
27 A ¶ Tiberius stops cleaning the pistol.
28 A Casimir leans back until his drum creaks.
29 D CASIMIR: Private, the war ends. Whether we end with it is a matter of arithmetic.
30 D JONAH: Arithmetic?
31 D TIBERIUS: He means luck.
32 D CASIMIR: I mean luck with decimals.
33 A ¶ Jonah laughs, small and surprised.
34 A Tiberius cracks a smile.
35 A For a moment all three men are grinning in the lamplight like boys in a treehouse.
36 A ¶ Then the grin falters.
37 A Overhead, very faint, a droning begins.
38 A It swells.
39 A The lamp flame trembles.
40 A Tiberius lowers the pistol, Casimir springs to his feet, and Jonah clutches the radio to his chest, all three staring up at the coin of moonlight as the hatch rattles on its hinges.
41 D TIBERIUS: Ours.
42 D CASIMIR: You're sure?
43 D TIBERIUS: Listen to the engines.
44 A ¶ They listen.
45 A The drone passes directly overhead.
46 A It's steady.
47 A Unhurried.
48 A It fades toward the east.
49 D JONAH (whisper): Ours.
50 D CASIMIR: Ours.
51 A ¶ They sit down again, slowly.
52 A No one speaks.
53 A Tiberius resumes cleaning the pistol.
54 A Jonah turns the dial back to the dance band, very low.

### SCENE s00440 | INT. HOT-AIR BALLOON BASKET - SUNSET
Detected names (may be incomplete or contain aliases): CELESTE ARNAULT, BEN, ADEYEMI-CROSS, FARMER
1 A ¶ A basket drifts over patchwork fields.
2 A Gold light.
3 A A burner roars, falls silent.
4 A CELESTE ARNAULT (30s, windbreaker) grips the ropes.
5 A BENEDICT "BEN" ADEYEMI-CROSS (30s, scarf) stands opposite, holding a small velvet box he has not opened.
6 D CELESTE: We're losing height.
7 D BEN: I know.
8 D CELESTE: Then burn.
9 A ¶ He pulls the cord.
10 A The flame roars.
11 A They rise a little.
12 A Celeste exhales.
13 D BEN: Celeste, I need to say something.
14 D CELESTE (to the sky, quietly): Of course you do. At two thousand feet.
15 D BEN: I had a speech.
16 D CELESTE: Everyone has a speech.
17 A ¶ He fumbles with the box.
18 A It slips and bounces on the wicker floor.
19 A They both dive.
20 A Their hands meet on the lid.
21 D BEN: Sorry.
22 D CELESTE: Don't be.
23 A ¶ They hold the box together.
24 A Neither opens it.
25 A The balloon drifts through a low cloud.
26 A ¶ A voice shouts from below, faint and cheerful.
27 A ¶ An old FARMER (60s, overalls, straw hat) stands in a field waving both arms, a pitchfork leaning at his side.
28 D FARMER (distant): You two want a ride back?!
29 D BEN (calling down): We're fine, thank you!
30 D CELESTE (muttering): We are not fine.
31 A ¶ She laughs.
32 A Ben laughs.
33 A She takes the box, opens it, and looks for a long time.
34 D CELESTE [CONT'D]: Ask me on the ground.
35 D BEN: On the ground.
36 A ¶ He pulls the cord.
37 A The flame sighs.

### SCENE s01120 | INT. TAXIDERMY SHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS REYES, BRAM, PIP, OLD HOSEA
1 A ¶ A cramped workroom lit by one hanging bulb.
2 A Glass eyes in trays, a half-skinned fox on the table, a dead radiator ticking.
3 A ¶ ODALYS REYES (50s, heavy apron, reading glasses on a cord) sews the fox's belly.
4 A Her son BRAM (20s, thin, jittery, car keys in his fist) stands in the doorway.
5 A PIP (15, braids, school hoodie) sits on a stool sorting glass eyes.
6 A OLD HOSEA (80s, wool cap, cane) waits with a shoebox on his knees.
7 D BRAM: Ma, the bank called again.
8 D ODALYS: Not in front of customers.
9 D BRAM: He's not a customer, he's Hosea. He's been sitting there an hour.
10 D HOSEA: Forty minutes. I'm timing it.
11 D ODALYS: Bram, put the keys down.
12 D BRAM: Where's the money, Ma? Where's the deposit from the Hendry job?
13 A ¶ Odalys stops sewing.
14 A Pip stops sorting.
15 D PIP: Uncle Bram, don't.
16 D BRAM: Stay out of it, Pipsqueak.
17 D ODALYS: I paid the freezer man. I paid your tuition. You want to see the receipts, you ask me nicely.
18 D BRAM: I'm asking!
19 A ¶ He slams the keys on the table.
20 A The fox jumps.
21 A Glass eyes scatter across the floor.
22 A Pip dives after them.
23 A Hosea lifts his cane in front of his shoebox like a shield.
24 D ODALYS: Look what you did.
25 A ¶ Odalys and Bram both go for the same falling tray.
26 A Their hands collide.
27 A Both freeze, nose to nose.
28 D BRAM (quietly): I lost the Hendry money, Ma. At the track. All of it.
29 A ¶ Silence.
30 A The radiator ticks.
31 A Pip, on her knees, holds up a single blue glass eye.
32 D PIP: Found one.
33 A ¶ Odalys lets out a long breath.
34 A She takes the eye from Pip and sets it in the fox's socket.
35 D ODALYS: Pick up the rest, Bram. Every one.
36 A ¶ Bram kneels.
37 A Hosea sets his shoebox on the table and lifts the lid.
38 A Inside, a small stiff canary.
39 D HOSEA: Whenever you two are done. Her name was Dolores.
40 D ODALYS (gently): Bring her here, Hosea.

### SCENE s02289 | INT. PALLIATIVE WARD, ROOM 7 - NIGHT
Detected names (may be incomplete or contain aliases): OLD SOLOMON KAPLAN, NURSE, DANIELLE
1 A ¶ Dim lamp.
2 A Machine hum.
3 A A window fogged with breath.
4 A ¶ OLD SOLOMON KAPLAN, eighty-three, in the bed, blanket to his chin.
5 A A NURSE, forties, in lilac scrubs, checks a drip.
6 D NURSE: Can't sleep?
7 D SOLOMON: I sleep fine.
8 D NURSE: Then why are your eyes open?
9 D SOLOMON: Habit.
10 A ¶ She adjusts the pillow.
11 A He watches.
12 D SOLOMON [CONT'D]: You new?
13 D NURSE: Six months.
14 D SOLOMON: You'll learn.
15 D NURSE: Learn what?
16 D SOLOMON: Not to look at the clock.
17 A ¶ She smiles.
18 A She smooths the blanket.
19 A She stays.
20 D SOLOMON [CONT'D]: My wife used to hum.
21 D NURSE: What did she hum?
22 D SOLOMON: Whatever was on.
23 D NURSE: Radio?
24 D SOLOMON: Kettle.
25 A ¶ A pause.
26 D NURSE: Would you like tea?
27 D SOLOMON: There's no tea at three.
28 D NURSE: There's tea if I say there is.
29 D SOLOMON: What's your name?
30 D NURSE: Danielle.
31 D SOLOMON: Danielle. That's a good name for a nurse.
32 D DANIELLE: Mr. Kaplan, drink some water.
33 D SOLOMON: Solomon.
34 D DANIELLE: Solomon.
35 A ¶ He drinks.
36 A She holds the cup.
37 A His hand shakes on hers.
38 D SOLOMON: My son isn't coming, is he?
39 D DANIELLE: The roads are bad.
40 D SOLOMON: That's a kind lie.
41 D DANIELLE: It's the one I have.
42 D SOLOMON: Keep it.
43 A ¶ She sits on the edge of the bed.
44 A She doesn't say anything.
45 A He closes his eyes.
46 A The machine hums on.
47 D SOLOMON [CONT'D]: Hum something.
48 D DANIELLE: I can't carry a tune.
49 D SOLOMON: Neither could she.
50 A ¶ Danielle hums.
51 A It is not a tune.
52 A It is a kettle.
53 A His hand slackens on hers, and she keeps humming.
