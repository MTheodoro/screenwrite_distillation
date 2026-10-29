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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_csonnet/group_00006.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05197 | EXT. CRAB BOAT "SECOND WIND" - MORNING
Detected names (may be incomplete or contain aliases): LEON, HOODIE GUY, MUM, LEO, HANNAH
1 A ¶ flat sea. gulls. a thermos steaming on the gunwale.
2 A ¶ THE WOMAN, 30s, in a borrowed oilskin two sizes too big, sits on a coil of line holding her phone out over the water like a fishing rod.
3 A LEON, 30s, at the wheel, pretends not to watch her.
4 A HOODIE GUY, 20s, sits on the hatch cover with his hood up eating a cold sausage roll.
5 D LEON: you wont get signal out there either
6 D THE WOMAN: Worth a try
7 A ¶ Her phone BUZZES.
8 A She jumps.
9 A Looks at the screen.
10 A Lifts it.
11 D THE WOMAN [CONT'D] (into phone): Hi mum
12 D MUM [V.O.] (tinny): Where ARE you. Your dad said you went off with a fisherman
13 D THE WOMAN: Its a boat trip Mum. Its fine.
14 D MUM [V.O.]: Is he nice
15 D THE WOMAN: He's a, hes got a boat
16 D MUM [V.O.]: That's not an answer
17 A ¶ Leon turns the wheel half a degree.
18 A The boat leans.
19 A Hoodie Guy lifts his hood back and looks at her, then at Leon, then at the sausage roll.
20 D HOODIE GUY: She's got her mum on speaker
21 D LEON: Shes not on speaker Leo
22 D THE WOMAN: Its Leo.
23 D LEON: Yeah Leo. He's my nephew. Leo, not Leon. Obviously.
24 D LEO (shrugging): Everyone gets it wrong.
25 D MUM [V.O.]: Who's Leo
26 D THE WOMAN: Nobody Mum bye
27 A ¶ She ends the call.
28 A Silence.
29 A The engine thrums.
30 D THE WOMAN [CONT'D]: Im Hannah by the way. You never asked.
31 D LEON: I didnt want to rush it
32 D HANNAH: You rushed the boat
33 D LEON: The boat was an emergency
34 D HANNAH: I was on the pier for ten minutes and you said and I quote get in
35 D LEON (smiling at the horizon): And you did.
36 D HANNAH (simultaneously, mouth full): ^ LEO Get a room.
37 A ¶ Hannah throws a glove at Leo.
38 A He catches it.
39 A Leon laughs and the boat rolls once, and Hannah steadies herself on his arm.
40 A She doesn't take her hand away.
41 A ¶ Gulls.

### SCENE s05198_0 | INT. NEW BEGINNINGS FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): BRENDA OKONKWO, ELLIOT VANCE, MARA FELDMAN, BRAD FELDMAN, BRETT FELDMAN
1 A ¶ Soft jazz.
2 A Beige everything.
3 A A fish tank with one very depressed fish.
4 A Applause-ready bright.
5 A A wall of baby photos.
6 A ¶ Behind the front desk, BRENDA OKONKWO, 50s, receptionist, queen of the clipboard.
7 A At the coffee machine, DR. ELLIOT VANCE, 40s, handsome in a way that costs money.
8 A On the couch, MARA FELDMAN, 30s, nervous, holding a stack of forms, and next to her, her husband BRAD FELDMAN, 30s, who doesn't look up from his phone.
9 A ¶ Enter BRETT FELDMAN, 30s, in a suit that doesn't fit, with a bouquet.
10 D BRETT: Honey! I came as soon as I could!
11 A ¶ Everyone turns.
12 A Brad looks up.
13 A Mara looks at Brad.
14 A Brad looks at Brett.
15 A Brett looks at the bouquet, then at Mara.
16 D BRENDA (deadpan): Well. That's a lot of husbands.
17 D MARA: Brett is Brad's brother.
18 D BRETT: I'm the fun one.
19 D BRAD: He is not the fun one.
20 D DR. VANCE (reading a clipboard): Mrs. Feldman? We're ready for you.
21 D MARA: Both of them can come?
22 D DR. VANCE (smiling too widely): Of course. The more the merrier.
23 A ¶ Mara stands.
24 A Brad stands.
25 A Brett stands.
26 A They all move toward the door, then all stop, because Brenda is holding up a hand.
27 D BRENDA: Just the one husband, hon.
28 D BRAD: I'll go.
29 D BRETT: I'll go.
30 D MARA: I'm going. Alone.
31 D DR. VANCE (brightly): Excellent.
32 A ¶ Mara exits through the inner door.
33 A Dr. Vance follows.
34 A It closes.
35 A Brad and Brett stand in silence.
36 A The fish blows a bubble.
37 D BRAD: Why are you here?
38 D BRETT: Mom said you needed support.
39 D BRAD: Mom said that?
40 D BRETT: She said you looked "fragile."
41 D BRENDA (not looking up): He does.
42 A ¶ ON PHONE: Brad's screen lights.
43 A A text from an unknown number.
44 A ¶ ON PHONE: "dont let him in the room. hes not who u think."
45 D BRAD (reading, pale): Oh.
46 D BRETT: What?
47 D BRAD: Nothing. Spam.
48 D BRETT: Let me see.
49 D BRAD: No.
50 D BRETT: Brad.
51 A ¶ They grapple for the phone, Brett lunges, Brad ducks, the bouquet goes flying and lands in the fish tank.
52 A The fish, for the first time, looks interested.
53 D BRENDA (sighs): That's a four-hundred-dollar fish.

### SCENE s05198_1 | INT. NEW BEGINNINGS FERTILITY CLINIC - EXAM ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): MARA, DR. VANCE, BRAD, BRETT, BRENDA
1 A ¶ Mara on the table, paper gown.
2 A Dr. Vance snaps on gloves, humming.
3 A On the counter, a vial with a handwritten label.
4 A She squints at it.
5 D MARA: That says Feldman.
6 D DR. VANCE: It does.
7 D MARA: Which Feldman?
8 D DR. VANCE (gently): The one who's paying.
9 A ¶ A pause.
10 A Mara sits up.
11 D MARA: Doctor, which one is it?
12 D DR. VANCE (his smile never moves): Does it matter?
13 A ¶ The lights flicker.
14 A Out in the waiting room, the fish tank bubbles.
15 A Brenda, alone at her desk, quietly locks the front door.
16 A ¶ This is the last time anyone will ask that question.
17 A ¶ Brad and Brett burst through the inner door, panting, the soggy bouquet still in Brett's hand.
18 D BRAD: Mara, don't let him
19 D BRETT: Honey, it's not what
20 D DR. VANCE (overlapping): Gentlemen, please, this is a sterile environment.
21 D MARA (overlapping): Which of you?
22 D BRAD (overlapping): It wasn't me!
23 D BRETT (overlapping): It was supposed to be a gift!
24 A ¶ Mara looks at one, then the other, then at the vial, then at Dr. Vance, who has quietly slipped a hand into his coat pocket.
25 A A cold gleam of metal.
26 D DR. VANCE: Everyone stay very calm.
27 D BRENDA [O.S.] (through the door): Doctor, your two o'clock is here!
28 D DR. VANCE (without turning): Reschedule her.
29 D BRENDA [O.S.]: She says she's the police.
30 A ¶ Everyone freezes.
31 A Dr. Vance's smile finally falls off his face.
32 A Brett holds up the soggy bouquet like a white flag.
33 D BRETT (whispering): Can I go now?

### SCENE s05199 | INT. NGUYEN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): KIT, JO
1 A ¶ Dark.
2 A A phone flashlight swings across the room and lands on a fridge covered in magnets.
3 A A neighbor's dog BARKS outside.
4 A Through the window, two teenagers on a trampoline in the next yard use their phones as lanterns, shrieking with laughter.
5 A ¶ Kit, 40s, pyjama bottoms and a "World's Okayest Coach" mug, stumbles in and sets down a laptop on the counter.
6 A It's at 4 percent.
7 A Behind him Jo, 40s, his wife, in a team fleece, carries a stack of whiteboards under one arm and a bag of frozen peas under the other.
8 A ¶ The laptop lights up.
9 A Slack, glowing, on screen.
10 A ¶ ON SCREEN: #coaches-all - Marcus: "Anyone got the lineup for Saturday? lights are out here too lol"
11 A ¶ ON SCREEN: #coaches-all - Priya: "Kit?? you're on the sheet"
12 A ¶ He winces.
13 A Taps a key.
14 A The screen dims.
15 D KIT: Battery saver. Battery saver.
16 D JO: You said you'd print it.
17 D KIT: The printer needs power. It's literally in the name.
18 A ¶ She slaps the peas onto the counter, sets down the boards, and starts scribbling in the dark with a marker that doesn't work.
19 A He holds the phone light over her shoulder while she draws Xs and Os and arrows pointing off the edge of the board.
20 A He frowns, she frowns, and the dog outside barks again, and the teenagers on the trampoline shout something about a penalty.
21 D JO: Left wing's a problem.
22 D KIT: Left wing's a Tuesday problem. It's a Saturday problem now.
23 A ¶ She turns, glares, and holds out the marker.
24 A He takes it.
25 A Tries it on the board.
26 A Nothing.
27 A Shakes it.
28 A Tries again.
29 A Nothing.
30 D JO: Give it here.
31 A ¶ She snatches it back.
32 A Bites the cap.
33 A Presses hard.
34 A A faint grey line appears, then a clean black one, bold as a gunshot.
35 D JO [CONT'D]: There.
36 D KIT: You intimidated a marker.
37 D JO: It knows who's in charge.
38 A ¶ The laptop blinks.
39 A 2 percent.
40 A ¶ ON SCREEN: #coaches-all - Marcus: "ok we're going with 4-4-2 unless someone objects"
41 A ¶ ON SCREEN: #coaches-all - Priya: "Kit?? last chance"
42 A ¶ Kit lunges.
43 A Jo lunges.
44 A Their hands collide on the keyboard and the machine makes a tiny, dying chirp.
45 A ¶ ON SCREEN: #coaches-all - Kit: "4-3-3 left wing Danny, subs on at 60"
46 A ¶ Send.
47 A The screen goes black.
48 A ¶ Silence.
49 A The darkness settles.
50 A Even the dog stops.
51 D KIT: Was that right?
52 D JO: No.
53 A ¶ He laughs.
54 A She laughs.
55 A The fridge shudders on, the overhead light blinks to life, and every magnet on the door sings a little as the compressor catches.
56 A ¶ They squint at each other in the sudden brightness.
57 A He's holding the marker.
58 A She's holding the peas.
59 D KIT: Dinner?
60 D JO: Peas.
61 D KIT: Peas.
