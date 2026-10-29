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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusB/group_07000.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01025 | INT. STEAMSHIP "MARIGOLD" - LOST AND FOUND OFFICE - DAY
Detected names (may be incomplete or contain aliases): FITCH, BARNABY PLUMLEY, ALOYSIUS FENN, HORTENSE VANDERWELL, NELL
1 A ¶ A narrow room below decks, shelves of forgotten hats, umbrellas, a single ukulele.
2 A A porthole shows slow gray swells.
3 A ¶ MR. FITCH, 50s, round spectacles, ledger in hand, presides behind a brass-railed counter.
4 A He is pleased with the order of the universe.
5 A ¶ The door opens.
6 A BARNABY PLUMLEY, 40s, tweed, mustache like a pushbroom, enters with the confidence of a man who has never been refused.
7 A Behind him, ALOYSIUS FENN, 40s, also in tweed, also mustached, but nervous.
8 D FITCH: Gentlemen. Something lost?
9 D BARNABY: A trunk. Brown, brass corners, initialed B.P.
10 D ALOYSIUS: Or A.F. It's our trunk.
11 D FITCH: Two sets of initials?
12 D BARNABY: We travel together.
13 D ALOYSIUS: Not that way.
14 D FITCH: I did not suggest a way.
15 A ¶ Fitch opens the ledger.
16 A Runs a finger down the page.
17 D FITCH [CONT'D]: Brown trunk, brass corners. Found on Deck C, yesterday.
18 D BARNABY: That's the one.
19 D FITCH: Did it contain anything unusual?
20 D BARNABY: Shirts.
21 D ALOYSIUS: And the Mortimer papers.
22 D BARNABY (sharp): Shirts.
23 D FITCH: Papers, you said?
24 D ALOYSIUS: Shirts and papers. Mostly shirts.
25 A ¶ Fitch produces a trunk from beneath the counter.
26 A Sets it down with ceremony.
27 A Unlatches it.
28 A ¶ Inside: shirts.
29 A Neatly folded.
30 A One small leather folio.
31 D FITCH [CONT'D]: Shirts. And a folio marked "Mortimer."
32 D BARNABY: Yes. Splendid. We'll take it.
33 D FITCH: I'll need a signature.
34 D ALOYSIUS: Of course.
35 A ¶ Fitch slides a form across.
36 A Barnaby reaches.
37 A Aloysius reaches.
38 A Their hands collide on the pen.
39 D BARNABY: After you.
40 D ALOYSIUS: No, you.
41 D BARNABY: I insist.
42 D ALOYSIUS: Then I insist more.
43 A ¶ The door swings open again.
44 A HORTENSE VANDERWELL, 60s, fur stole in the tropics, enters with NELL, 9, in a sailor dress, clutching a stuffed walrus.
45 D HORTENSE: Mr. Fitch! My daughter lost Sir Reginald!
46 D NELL: He's right here, Grandmother.
47 D HORTENSE: Then what are we doing here?
48 D NELL: You said we'd get ice cream.
49 D HORTENSE: Ah. So I did.
50 A ¶ Fitch clears his throat.
51 D FITCH: Madam, as you can see, I am engaged with two gentlemen.
52 D HORTENSE: Two? I see one and a half.
53 D BARNABY: I beg your pardon.
54 D HORTENSE: Is the other one a ghost?
55 D ALOYSIUS: I am quite solid, madam.
56 D HORTENSE: So was my late husband. Look where it got him.
57 A ¶ Silence.
58 A Fitch polishes his spectacles.
59 D FITCH: Nell, was it? What lost thing do you seek?
60 D NELL: Nothing. Grandmother told me to say we were looking for something so she could meet the two men with the matching mustaches.
61 D HORTENSE: Nell!
62 D NELL: You did.
63 D HORTENSE (to Barnaby): Children invent the most extraordinary things.
64 D BARNABY: Madam, we are not available for introductions.
65 D ALOYSIUS: We are engaged.
66 D BARNABY: To other people!
67 D ALOYSIUS: Women!
68 D HORTENSE: How very modern.
69 D FITCH: Might I suggest we resolve the trunk?
70 D BARNABY: Yes. The trunk.
71 D ALOYSIUS: Please.
72 A ¶ Fitch taps the folio.
73 D FITCH: There is a problem, gentlemen.
74 D BARNABY: Which is?
75 D FITCH: This folio does not contain papers. It contains a deed.
76 D ALOYSIUS: Barnaby.
77 D BARNABY: Don't.
78 D FITCH: To the Marigold.
79 D HORTENSE: The ship?
80 D FITCH: The ship. It appears that one of you, or perhaps both, has been selling it for some weeks, to various purchasers, on the open sea.
81 D NELL: Can you sell a boat while you're on it?
82 D HORTENSE: Apparently, dear. Apparently you can.
83 A ¶ Barnaby and Aloysius look at each other.
84 A Then at the door.
85 D BARNABY: After you.
86 D ALOYSIUS: No, you.
87 A ¶ They bolt together, wedged in the doorway.
88 A Fitch rings a brass bell.
89 A Somewhere above, a whistle blows.
90 D NELL: Grandmother, can we still get ice cream?
91 D HORTENSE: Child, we are going to buy the ship.

### SCENE s01096 | INT. GRAND OPERA HOUSE - CATWALK ABOVE THE STAGE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE INEZ CASTELLANO-WU, OFFICER BARNABAS FINCH, STAGE MANAGER DOROTHEA LAMBERT, TOMASZ KRAWCZYK, AUGUSTO ELEGBE, FIGURE, VIOLETTA SANTORO-REYES
1 A ¶ Ropes, sandbags, pulleys in the dark.
2 A Below, a full orchestra tunes.
3 A A chandelier the size of a car hangs motionless beside the catwalk.
4 A ¶ DETECTIVE INEZ CASTELLANO-WU, 40s, black blazer, radio clipped to her belt, creeps along the planks.
5 A Behind her: OFFICER BARNABAS FINCH, 20s, sweating through his uniform; STAGE MANAGER DOROTHEA LAMBERT, 50s, headset, whispering into her collar; and a pair of maintenance men, TOMASZ KRAWCZYK, 40s, and AUGUSTO ELEGBE, 30s, hauling a toolbox between them.
6 A At the far end of the catwalk, half in shadow, crouches a figure with a briefcase.
7 D INEZ (whispering): Everybody quiet.
8 A ¶ She raises a fist.
9 A They halt.
10 A Dorothea clamps a hand over her headset mic.
11 A Tomasz and Augusto set the toolbox down so slowly it makes no sound.
12 A Barnabas draws his sidearm and holds it at his chest.
13 D DOROTHEA (to Inez): Overture starts in four minutes.
14 D INEZ: Then we have four.
15 A ¶ She steps forward.
16 A The planks creak.
17 A The figure at the end stiffens.
18 A A hush falls over the orchestra pit below.
19 D FIGURE (without turning): I wouldn't come closer.
20 D INEZ: Put the case down.
21 D FIGURE: It's not a case. It's a promise.
22 A ¶ Barnabas swallows.
23 A Augusto crosses himself.
24 A Tomasz mutters something in Polish.
25 D TOMASZ (muttering): Boze, nie teraz.
26 D DOROTHEA (to the group): Does anyone know where the cut-off is for the chandelier cable?
27 D AUGUSTO: Stage left. Behind the fly rail.
28 D DOROTHEA: Go. Quietly.
29 A ¶ Augusto slips away.
30 A Inez keeps her eyes on the Figure.
31 D INEZ: You don't have to do this.
32 D FIGURE: Everyone says that.
33 D INEZ: Because it's true.
34 A ¶ The Figure turns.
35 A A woman, 50s, in evening dress and tennis shoes.
36 A VIOLETTA SANTORO-REYES, ex-soprano.
37 A Her face is wet.
38 A In her lap, the briefcase hums.
39 D VIOLETTA: They fired me in this house. I sang four hundred nights.
40 D INEZ: I know.
41 D VIOLETTA: Do you? Do you know what silence sounds like when you were the music?
42 D INEZ: No.
43 A ¶ Violetta nods.
44 A Her fingers drift to the clasp.
45 A Barnabas lifts his gun.
46 D OFFICER BARNABAS: Ma'am, stay still.
47 D INEZ (to Barnabas): Lower it.
48 D OFFICER BARNABAS: Detective --
49 D INEZ: Lower it, Barnabas.
50 A ¶ He lowers it.
51 A Violetta lets out a laugh, brittle and soft.
52 D VIOLETTA: Four minutes, you said.
53 D INEZ: Three.
54 D VIOLETTA: Then let me sing it one last time.
55 D DOROTHEA (into the headset, low): Hold the curtain. Hold it. Give me a spot on the catwalk.
56 A ¶ A spotlight swings up from below and finds Violetta.
57 A She blinks.
58 A Rises.
59 A The briefcase slides from her lap.
60 A It clatters empty to the planks, a few pieces of sheet music spilling out.
61 A ¶ Inez steps to it.
62 A Picks one up.
63 A It is an aria.
64 A Blank staves.
65 D INEZ (softly): There's no bomb.
66 D VIOLETTA: There never was.
67 A ¶ Below, the orchestra falls silent.
68 A Waiting.
69 A Violetta takes a breath, lifts her chin, and sings one clear note into the dark.
70 A It carries up into the rafters.
71 A Nobody on the catwalk moves.
72 D TOMASZ (whispering, awed): Matko Boska.
73 A ¶ Dorothea lowers her hand.
74 A Barnabas holsters his gun.
75 A Inez closes her eyes.

### SCENE pd_sisters_0 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OLGA, MASHA, IRINA, BARON TUZENBACH, CHEBUTIKIN, SOLENI
1 A ¶ In PROSOROV’S house.
2 A A sitting-room with pillars; behind is seen a large dining-room.
3 A It is midday, the sun is shining brightly outside.
4 A In the dining-room the table is being laid for lunch.
5 A ¶ OLGA, in the regulation blue dress of a teacher at a girl’s high school, is walking about correcting exercise books; MASHA, in a black dress, with a hat on her knees, sits and reads a book; IRINA, in white, stands about, with a thoughtful expression.
6 D OLGA: It’s just a year since father died last May the fifth, on your name-day, Irina. It was very cold then, and snowing. I thought I would never survive it, and you were in a dead faint. And now a year has gone by and we are already thinking about it without pain, and you are wearing a white dress and your face is happy.
7 A ¶ Clock strikes twelve.
8 D OLGA: And the clock struck just the same way then.
9 A ¶ Pause.
10 D OLGA: I remember that there was music at the funeral, and they fired a volley in the cemetery. He was a general in command of a brigade but there were few people present. Of course, it was raining then, raining hard, and snowing.
11 D IRINA: Why think about it!
12 A ¶ BARON TUZENBACH, CHEBUTIKIN and SOLENI appear by the table in the dining-room, behind the pillars.
13 D OLGA: It’s so warm to-day that we can keep the windows open, though the birches are not yet in flower. Father was put in command of a brigade, and he rode out of Moscow with us eleven years ago. I remember perfectly that it was early in May and that everything in Moscow was flowering then. It was warm too, everything was bathed in sunshine. Eleven years have gone, and I remember everything as if we rode out only yesterday. Oh, God! When I awoke this morning and saw all the light and the spring, joy entered my heart, and I longed passionately to go home.
14 D CHEBUTIKIN: Will you take a bet on it?
15 D TUZENBACH: Oh, nonsense.
16 A ¶ MASHA, lost in a reverie over her book, whistles softly.
17 D OLGA: Don’t whistle, Masha. How can you!
18 A ¶ Pause.
19 D OLGA: I’m always having headaches from having to go to the High School every day and then teach till evening. Strange thoughts come to me, as if I were already an old woman. And really, during these four years that I have been working here, I have been feeling as if every day my strength and youth have been squeezed out of me, drop by drop. And only one desire grows and gains in strength...
20 D IRINA: To go away to Moscow. To sell the house, drop everything here, and go to Moscow...
21 D OLGA: Yes! To Moscow, and as soon as possible.
22 A ¶ CHEBUTIKIN and TUZENBACH laugh.
23 D IRINA: I expect Andrey will become a professor, but still, he won’t want to live here. Only poor Masha must go on living here.
24 D OLGA: Masha can come to Moscow every year, for the whole summer.
25 A ¶ MASHA is whistling gently.
26 D IRINA: Everything will be arranged, please God.
27 A ¶ Looks out of the window.
28 D IRINA: It’s nice out to-day. I don’t know why I’m so happy: I remembered this morning that it was my name-day, and I suddenly felt glad and remembered my childhood, when mother was still with us. What beautiful thoughts I had, what thoughts!
29 D OLGA: You’re all radiance to-day, I’ve never seen you look so lovely. And Masha is pretty, too. Andrey wouldn’t be bad-looking, if he wasn’t so stout; it does spoil his appearance. But I’ve grown old and very thin, I suppose it’s because I get angry with the girls at school. To-day I’m free. I’m at home. I haven’t got a headache, and I feel younger than I was yesterday. I’m only twenty-eight.... All’s well, God is everywhere, but it seems to me that if only I were married and could stay at home all day, it would be even better.
30 A ¶ Pause.
31 D OLGA: I should love my husband.
32 A ¶ To SOLENI.
33 D TUZENBACH: I’m tired of listening to the rot you talk.
34 A ¶ Entering the sitting-room.
35 D TUZENBACH: I forgot to say that Vershinin, our new lieutenant-colonel of artillery, is coming to see us to-day.
36 A ¶ Sits down to the piano.
37 D OLGA: That’s good. I’m glad.
38 D IRINA: Is he old?
39 D TUZENBACH: Oh, no. Forty or forty-five, at the very outside.
40 A ¶ Plays softly.
41 D TUZENBACH: He seems rather a good sort. He’s certainly no fool, only he likes to hear himself speak.
42 D IRINA: Is he interesting?
43 D TUZENBACH: Oh, he’s all right, but there’s his wife, his mother-in-law, and two daughters. This is his second wife. He pays calls and tells everybody that he’s got a wife and two daughters. He’ll tell you so here. The wife isn’t all there, she does her hair like a flapper and gushes extremely. She talks philosophy and tries to commit suicide every now and again, apparently in order to annoy her husband. I should have left her long ago, but he bears up patiently, and just grumbles.
44 A ¶ Enters with CHEBUTIKIN from the dining-room.
45 D SOLENI: With one hand I can only lift fifty-four pounds, but with both hands I can lift 180, or even 200 pounds. From this I conclude that two men are not twice as strong as one, but three times, perhaps even more....
46 A ¶ Reads a newspaper as he walks.
47 D CHEBUTIKIN: If your hair is coming out... take an ounce of naphthaline and hail a bottle of spirit... dissolve and use daily....
48 A ¶ Makes a note in his pocket diary.

### SCENE s00016 | EXT. DRY CREEK BED BENEATH A TRESTLE BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, YOUNG WOMAN, JEDEDIAH, ODALYS
1 A ¶ A ribbon of cracked clay winds between two banks of sage.
2 A Above, the old trestle spans the gap like the ribs of a long-dead animal, and the first light slides along its timbers in gold and rust.
3 A ¶ A STRANGER (40s, long coat the color of dried blood, hat low, a face the weather has been arguing with for years) walks his horse down the bank in no particular hurry.
4 A The animal's hooves crunch on the clay.
5 A He halts at the creek's center and swings down, loosens the cinch, and lets the horse stand, ears flicking at the early flies.
6 A ¶ Across the creek, on the opposite bank, sits a YOUNG WOMAN (20s, a man's shirt rolled at the sleeves, hair cut short with a knife, a shotgun resting across her knees) on a stump.
7 A She has been sitting there all night.
8 A A cold fire, a tin cup, a bedroll folded precisely, and a boot print the size of a dinner plate in the dirt beside her.
9 A She does not raise the shotgun.
10 A She does not lower her eyes.
11 D STRANGER: Morning.
12 D YOUNG WOMAN: That's debatable.
13 D STRANGER: I'm looking for a man named Cullen Pike.
14 D YOUNG WOMAN: Never heard of him.
15 D STRANGER: He wears a green scarf. Even in summer. Rides a gray with a split ear.
16 A ¶ The Young Woman shifts the shotgun a little.
17 A A pale hawk circles over the bridge, riding the first warm air, and the Stranger watches it for a moment instead of her.
18 D YOUNG WOMAN: What do you want with him?
19 D STRANGER: He's got something of mine.
20 D YOUNG WOMAN: Everybody's got something of somebody's.
21 A ¶ She stands.
22 A The stump creaks.
23 A She crosses the clay with the shotgun in the crook of her arm, stopping ten paces from him, and he, in answer, takes his hand away from the horse's flank and lets it hang loose and open beside his coat.
24 D YOUNG WOMAN [CONT'D]: What's your name, mister?
25 A ¶ The Stranger's eyes go to the bridge.
26 A To the hawk.
27 A To her.
28 D STRANGER: Jedediah.
29 D YOUNG WOMAN: That's a church name.
30 D JEDEDIAH: My mother had hopes.
31 A ¶ She laughs, one short breath, and it startles her more than it does him.
32 A The shotgun dips an inch.
33 A He notices.
34 A He says nothing about it.
35 D YOUNG WOMAN: I'm Odalys. Cullen was my father.
36 D JEDEDIAH: Was.
37 D ODALYS: He's under the second pier. Since Tuesday.
38 A ¶ Jedediah turns his head slowly and looks up the creek bed toward the trestle, its shadow now laid across the clay in long black bars.
39 A At the foot of the second pier, a mound of fresh-turned earth, a plank driven in at its head.
40 A ¶ He takes off his hat.
41 A Holds it against his chest.
42 A A breeze comes up and the sage whispers and the hawk screams once and swings away.
43 D JEDEDIAH: Who put him there?
44 D ODALYS: I did.
45 D JEDEDIAH: Who killed him?
46 A ¶ Odalys raises the shotgun, finally, and levels it at his belt buckle.
47 A Her hands do not shake.
48 D ODALYS: The man who sent you.

### SCENE s01084 | INT. DRAINED SWIMMING POOL - COMMUNITY CENTER - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE CASSIUS RHEE, FORENSIC TECH BELINDA OSEI, CAPTAIN VOSS, DOLORES AMADI
1 A ¶ Cracked blue tile.
2 A A dry deep end littered with leaves.
3 A Floodlights on stands.
4 A Yellow tape across the diving board.
5 A ¶ DETECTIVE CASSIUS RHEE, 40s, rain jacket, notebook, crouches at the bottom of the deep end beside a chalk outline.
6 A FORENSIC TECH BELINDA OSEI, 30s, white suit, kneels with a camera.
7 A A tarp covers something near the drain.
8 D RHEE: Time of death?
9 D OSEI: Medical examiner says midnight. Give or take.
10 D RHEE: Who drained the pool?
11 D OSEI: Nobody. It's been empty since August.
12 D RHEE: Then how did she end up down here?
13 D OSEI: She fell. Or she was pushed.
14 A ¶ He steps over the chalk.
15 A Lifts the tarp with a pen.
16 A Underneath, a single red high-heeled shoe.
17 D RHEE: Where's the other?
18 D OSEI: Haven't found it.
19 A ¶ A phone rings.
20 A Rhee's.
21 A He answers.
22 D CAPTAIN VOSS [V.O.] (tinny, over the phone): Rhee. Anything?
23 D RHEE: A shoe, Captain. Just a shoe.
24 D CAPTAIN VOSS [V.O.]: There's a witness on her way down. Janitor. Says she saw something.
25 D RHEE: Copy.
26 A ¶ He hangs up.
27 A Footsteps on the stairs.
28 A A figure descends: MS. DOLORES AMADI, 60s, janitor's apron, mop in hand like a staff.
29 A She stops at the pool edge.
30 D DOLORES: Detective?
31 D RHEE: Ms. Amadi. Come down.
32 A ¶ She picks her way down the shallow-end steps, mop first.
33 D DOLORES: I saw a man. By the diving board. Very tall. Very quiet.
34 D OSEI: What was he wearing?
35 D DOLORES: Gray. A long coat. Like a priest.
36 D RHEE: Did he see you?
37 D DOLORES: No. But he left something.
38 A ¶ She reaches into her apron pocket.
39 A Pulls out the second red shoe, wrapped in a plastic bag.
40 A Rhee and Osei exchange a look.
41 D OSEI: You touched it?
42 D DOLORES: I wore gloves.
43 D RHEE (taking it): Thank you.
44 A ¶ A clang from the diving board.
45 A All three whip around.
46 A The tape trembles.
47 A A silhouette stands at the top of the board, backlit by dawn.
48 D RHEE [CONT'D] (low): Police! Stay where you are!
49 A ¶ The silhouette leaps.
50 A Rhee lunges.
51 A Osei drops the camera.
52 A Dolores raises the mop.
53 A They collide at the lip of the deep end in a tangle of arms, mop handle and raincoat.
54 A ¶ A bright flash from Osei's camera bursts across the tile.
55 A The man scrambles up the stairs.
56 A Rhee and Dolores sprawl together.
57 A Osei pulls herself up.
58 D OSEI: He's gone!
59 D RHEE (breathing hard): Not far.
60 A ¶ Dolores sits, hand on her chest, mop still clutched.
61 D DOLORES: Detective. I think I know that coat.

### SCENE s01027 | INT. STARLITE ROLLER RINK - SIX A.M.
Detected names (may be incomplete or contain aliases): DEZI ALVARADO, BOY, JUNIOR, FAIRWEATHER
1 A ¶ Carpet-walled, smelling of floor wax and old nacho cheese.
2 A A disco ball turns without light, a silent planet.
3 A The maple floor is empty and gleaming like a frozen lake.
4 A ¶ DEZI ALVARADO, 15, sits on the bench in secondhand skates, laces undone.
5 A Hoodie sleeves swallow her hands.
6 A She has been crying and has recently stopped.
7 A ¶ A figure leans against the snack counter.
8 A A BOY in a faded letterman jacket, tall, thin as a coat rack, a toothpick rolling in his mouth.
9 A He watches her without moving.
10 D BOY: You've got two left feet.
11 D DEZI: I've got one left foot and one broken heart.
12 D BOY: Which is worse?
13 D DEZI: Depends who you ask.
14 A ¶ She stands, wobbles, grabs the rail.
15 A He doesn't help.
16 A A kindness, of a kind.
17 D BOY [CONT'D]: They're saying you took your mother's car.
18 D DEZI: Borrowed.
19 D BOY: Without asking.
20 D DEZI: She was asleep.
21 D BOY: Dezi.
22 A ¶ She looks at him sharply.
23 A He shrugs, almost apologetic.
24 D BOY [CONT'D]: My name's Junior, by the way. Since you're not going to ask.
25 D JUNIOR [CONT'D]: Everyone calls me Junior. My dad's Junior too. Nobody knows who the first one was.
26 D DEZI: That's the saddest thing I've heard all week.
27 D JUNIOR: It's been a long week?
28 D DEZI: Rough.
29 A ¶ She pushes off the rail.
30 A Rolls two feet.
31 A Wavers.
32 A Falls.
33 A Hard.
34 A Sits on the floor with her palms flat.
35 A ¶ For a moment, she isn't sure if she's going to scream or laugh.
36 A ¶ She does both.
37 A ¶ The sound ricochets off the carpeted walls.
38 A Junior flinches, then, slowly, grins.
39 A He steps onto the floor in his sneakers and slides to her.
40 D JUNIOR [CONT'D]: That's it. Get it out.
41 D DEZI: I hate everyone.
42 D JUNIOR: Me too.
43 D DEZI: I hate my mother.
44 D JUNIOR: Mine's all right. But I hate my dad.
45 D DEZI: I don't hate her. I just wanted to drive somewhere nobody knew.
46 D JUNIOR: And you ended up at a roller rink.
47 D DEZI: It was the only thing open.
48 A ¶ The lights come on.
49 A All at once, bright as an operating room.
50 A The disco ball catches a beam and sprays confetti across the walls.
51 A ¶ MS. FAIRWEATHER, 60s, rink manager, a cardigan embroidered with tiny skates, comes through the swinging doors with a ring of keys and a coffee thermos.
52 A She stops dead.
53 D MS. FAIRWEATHER: We don't open for four hours.
54 D JUNIOR: Morning, Ms. Fairweather.
55 D MS. FAIRWEATHER: Junior. You are not supposed to be here. Neither is she. Whoever she is.
56 D DEZI: Dezi.
57 D MS. FAIRWEATHER: Dezi. Well. Are you hurt?
58 D DEZI: No.
59 D MS. FAIRWEATHER: Good. Skates off. Both of you. There's a pot of coffee in the back and a patched-up phone. Call your mother.
60 A ¶ Dezi looks at Junior.
61 A He lifts one shoulder.
62 A Almost a smile.
63 A ¶ She begins to unlace.

### SCENE s01092 | INT. ROWING BOATHOUSE - EARLY MORNING
Detected names (may be incomplete or contain aliases): COACH HESTER LINDQVIST-AMOAH, PASCAL ODUYA-REYNAUD
1 A ¶ Long wooden shells hang from the rafters like the ribs of a whale.
2 A Water slaps the dock outside.
3 A Mist presses against the glass.
4 A The smell of varnish and river mud.
5 A ¶ COACH HESTER LINDQVIST-AMOAH, 60s, thermos in one hand and a stopwatch in the other, sits on an upturned oar rack.
6 A Across the room, her only remaining athlete, PASCAL ODUYA-REYNAUD, 20s, wraps tape around a blistered palm.
7 A They do not look at each other.
8 A A kettle ticks on a hotplate.
9 D HESTER (to the room): Tide's slack at six-fifteen.
10 D PASCAL (to his hand): I know.
11 D HESTER (to no one): Wind from the west. Light.
12 D PASCAL: I read the board.
13 A ¶ She sips from the thermos.
14 A He bites the end of the tape.
15 A The kettle begins to whistle.
16 A Neither moves.
17 A Hester sighs and rises, pulls the kettle off the hotplate, pours two mugs.
18 A ¶ She sets one on the bench beside him.
19 A He doesn't take it.
20 A She sits again.
21 D HESTER: Sixteen minutes on the water. Then back. Then breakfast.
22 D PASCAL: Fine.
23 D HESTER: Don't "fine" me.
24 D PASCAL: Okay, then.
25 D HESTER: Okay is worse.
26 A ¶ He smiles faintly.
27 A Takes the mug.
28 A Warms his hands on it.
29 A Mist drifts in through a crack in the doorframe.
30 D HESTER [CONT'D] (to the room again): Anyone else coming?
31 D PASCAL: You know no one's coming.
32 D HESTER (muttering): I know.
33 A ¶ Pascal sips.
34 A Looks at the shells overhead.
35 A His eyes trace the hull of an eight, then of a single.
36 D PASCAL: Remember when we filled this place?
37 D HESTER: We had fourteen on the squad. And a cox who ate her megaphone.
38 D PASCAL (smiling): Camille.
39 D HESTER: Camille. Yes.
40 A ¶ Quiet.
41 A The water slaps.
42 A A gull cries.
43 D PASCAL: Coach.
44 D HESTER: Hm?
45 D PASCAL: If I miss the cut --
46 D HESTER: You won't.
47 D PASCAL: But if.
48 A ¶ She turns the stopwatch over in her hand.
49 A Reads the back, where someone long ago scratched initials.
50 D HESTER: Then we row anyway.
51 A ¶ He nods.
52 A Finishes his tea.
53 A Sets the mug on the bench and stands.
54 A Pulls on his gloves.
55 A She stands too.
56 A Together they lift a single shell from its cradle.
57 A It swings, light as a leaf.
58 D HESTER [CONT'D] (to the room): Mind the door.
59 D PASCAL (to the boat): Easy.
60 A ¶ They carry it out toward the dock, the mist closing behind.

### SCENE s01056 | INT. SHUTTERED CAROUSEL PAVILION - ABANDONED AMUSEMENT PARK - NIGHT
Detected names (may be incomplete or contain aliases): DUCHESS, LAVALLE, BONES, SLIM POLLARD, PEARL
1 A ¶ Painted horses frozen mid-gallop, their gilt chipped.
2 A A pipe organ sags in the center.
3 A The roof leaks silver light.
4 A Five figures sit on the platform's edge, boots dangling.
5 A ¶ DUCHESS, 60s, tiny and elegant in a mink collar, taps a cane against a brass pole.
6 A MR. LAVALLE, 50s, dapper, pocket square, polishes a pair of rimless glasses.
7 A BONES, 30s, long and gaunt, sprawls across a bench seat with a thermos of coffee.
8 A SLIM POLLARD, 40s, round as a barrel, sits with a ledger on his knee.
9 A PEARL, 20s, the youngest, in a leather jacket with too many zippers, spins a lock-pick between her fingers.
10 D DUCHESS: Gentlemen. Miss Pearl. We are assembled.
11 D BONES: We've been assembled for an hour.
12 D DUCHESS: And now we are in session.
13 D LAVALLE: Is that a legal term?
14 D DUCHESS: It's a theatrical one.
15 D SLIM: The count is simple. Four million, in unmarked bills, locked in the carousel's center column. The man who stored it was a bad carpenter and a worse liar.
16 D PEARL: Which column? There's six.
17 D SLIM: The one that doesn't turn.
18 D LAVALLE: They all turn.
19 D SLIM: Not that one. I've watched it for three weeks.
20 D BONES: Thank God somebody watched something.
21 D PEARL: How do we get in?
22 D DUCHESS: The same way everyone gets in anywhere. We pretend we belong.
23 D LAVALLE: In a closed amusement park.
24 D DUCHESS: In a closed amusement park, at night, with permits.
25 D SLIM: Are the permits real?
26 D DUCHESS: Mr. Pollard, nothing is real. That's the pleasure of the business.
27 D BONES: Who's driving?
28 D DUCHESS: Pearl.
29 D PEARL: I thought I was the lock.
30 D DUCHESS: You are both. We are a small company.
31 D PEARL (grinning): Then I want a bigger cut.
32 D DUCHESS: You'll have a bigger bow.
33 D LAVALLE: Are we agreed on the split?
34 D SLIM: Equal shares. Five ways.
35 D BONES: Six.
36 D DUCHESS: Six?
37 D BONES: There's a sixth share in Mr. Lavalle's ledger. Somebody we've never met.
38 A ¶ Silence.
39 A The carousel lamps flicker.
40 A Slim turns the ledger toward the light.
41 A Pearl stops spinning the pick.
42 D DUCHESS (very softly): Mr. Lavalle. You told me nobody else knew.
43 D LAVALLE (polishing): I told you what you needed to hear.
44 A ¶ He puts on his glasses.

### SCENE s01110 | INT. ANSWERING MACHINE - PARKED CAR OUTSIDE A HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): CORNELIUS AJAYI-WHITLOCK, MACHINE
1 A ¶ Dashboard glow.
2 A A paper coffee cup.
3 A Sodium lights smearing across the windshield.
4 A The engine ticks as it cools.
5 A ¶ CORNELIUS AJAYI-WHITLOCK, 60s, tie loosened, grips the steering wheel with both hands.
6 A A phone rests in the cup holder, speaker on.
7 D MACHINE [V.O.] (electronic, cheerful): You have reached the home of the Ajayi-Whitlock family. We can't come to the phone right now. Leave a message.
8 A ¶ BEEP.
9 D CORNELIUS: Hey, Mara. It's Dad.
10 A ¶ He clears his throat.
11 D CORNELIUS [CONT'D]: I know you're not going to pick up. You haven't picked up in three years. That's fine. I'm not calling to make you.
12 A ¶ He rubs his eyes with the heel of his hand.
13 D CORNELIUS [CONT'D]: Your mother's room is on the fourth floor. Bed six. They moved her out of intensive care this afternoon. She asked about you. She asked if the flowers on her windowsill were from you. I told her yes.
14 A ¶ A long breath.
15 D CORNELIUS [CONT'D]: They weren't. I bought them. At the corner shop. But I thought, what's one more lie after thirty years of marriage. She smiled. That was enough.
16 A ¶ His voice cracks.
17 A He lets it.
18 A A nurse passes the windshield in the lot.
19 A He doesn't look.
20 D CORNELIUS [CONT'D]: The doctor says it could be days. Could be weeks. Could be a month. They don't know. They never know.
21 A ¶ He grips the wheel harder.
22 D CORNELIUS [CONT'D]: I'm not asking you to come. I'm only telling you where we are. Fourth floor. Bed six. Visiting hours until nine. After that, tell the desk you're family. They'll let you in.
23 A ¶ He reaches for the phone.
24 A Stops.
25 D CORNELIUS [CONT'D]: I did love the way you used to leave messages on this machine. Do you remember? You'd sing. Wrong notes. Every time.
26 A ¶ A pause.
27 D CORNELIUS [CONT'D]: Sing something, Mara. If you want. Anything.
28 A ¶ He waits.
29 A Only static.
30 A Then the long tone of the machine closing the line.
31 D MACHINE [V.O.] (cheerful): Your message has been saved.

### SCENE s01062 | INT. STRANDED COACH BUS - 3 A.M.
Detected names (may be incomplete or contain aliases): NAOMI PRESCOTT, EMERY LUND
1 A ¶ A long-distance bus at the roadside, hazard lights ticking amber against a field of black.
2 A Rows of reclining seats, empty.
3 A A fine layer of frost on the inner windows.
4 A The driver's seat is vacant, door gaping open to the night.
5 A ¶ NAOMI PRESCOTT, 30s, parka and wool cap, sits in the third row from the back with a paperback she isn't reading.
6 A Across the aisle, EMERY LUND, 20s, headphones, hoodie, bounces one knee.
7 A ¶ Neither has spoken for twenty minutes.
8 D EMERY (to the bus, loud): Hello? Anyone else on here?
9 A ¶ Silence.
10 A Hazards tick.
11 D NAOMI: There's nobody else.
12 D EMERY: Right.
13 D NAOMI: The driver stepped out for the radio.
14 D EMERY: That was an hour ago.
15 D NAOMI: Forty minutes.
16 D EMERY (muttering): Felt like an hour.
17 A ¶ She pulls the headphones down around her neck.
18 A Naomi turns a page.
19 A Doesn't read it.
20 A The bus creaks, settling on its springs.
21 D EMERY [CONT'D]: Did you hear that?
22 D NAOMI: Hear what?
23 D EMERY: Like tapping.
24 D NAOMI: It's the cold.
25 D EMERY: It's not the cold.
26 D NAOMI: It's the cold.
27 A ¶ Tap.
28 A Tap.
29 A Tap-tap.
30 A ¶ Both sit very still.
31 A The sound comes from somewhere in the back of the bus.
32 A Not the engine.
33 A Not the heater.
34 A Something closer, patient.
35 D EMERY: It's in the luggage rack.
36 D NAOMI: Don't.
37 D EMERY: Someone left a bag.
38 D NAOMI: Emery.
39 D EMERY: I'm going to look.
40 A ¶ She stands.
41 A Naomi stands too, in the same moment, then sits back down, and then stands again.
42 A They both end up in the aisle, and the bus sways, and neither wants to take the first step.
43 D EMERY [CONT'D] (to Naomi, whispering): You first.
44 D NAOMI (to the bus): Whoever's there, we know you're in there.
45 D EMERY: Whoever's there, we know you're in there.
46 A ¶ They say it at the same time.
47 A They look at each other.
48 D NAOMI: Stop that.
49 D EMERY: You stop.
50 A ¶ The tapping stops.
51 A Instead, a soft, wet noise, like a hand pulled slowly out of mud.
52 A ¶ The overhead luggage rack shudders.
53 A A zipper rasps.
54 A A black duffel bag unzips by itself, one slow tooth at a time.
55 A ¶ Naomi clutches the seat.
56 A Emery clutches Naomi's arm.
57 A They back up the aisle together, step for step, until they hit the rear emergency door.
58 D NAOMI [CONT'D] (whispering): Open it.
59 D EMERY: It's locked.
60 D NAOMI: Open it!
61 D EMERY: It's a lever! It's on the floor!
62 A ¶ She drops.
63 A Gropes under the seat.
64 A Naomi keeps her eyes on the duffel.
65 A The zipper rasps another inch.
66 D EMERY [CONT'D] (to herself): Come on. Come on.
67 A ¶ Something pale slides out of the bag.
68 A Fingers, knuckled and long.
69 A They curl around the edge of the rack.
70 D NAOMI (very low): Emery. Pull it. Now.
71 A ¶ Emery pulls.
72 A The emergency door swings out with a clatter, and cold air slams into the bus.
73 A The hazards tick.
74 A The fingers withdraw.
75 D EMERY: Go! Go!
76 A ¶ Naomi shoves her out the door, tumbles after.
77 A They land in the gravel on their hands and knees, gasping.
78 A ¶ Behind them, the bus sits glowing amber, silent.
79 A The duffel, lying on the aisle floor, is zipped shut again.
80 D NAOMI (panting): Don't look back.
81 D EMERY: I'm not.
82 D NAOMI: Good.
83 A ¶ They crawl away from the road.
84 A Neither looks.
85 A Both hear it: the soft tap of a hand on the glass.

### SCENE s01091 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT IRINA SOLOVYOV, AGENT KOFI MENSAH-BELL, LEONARD HAYES-TAKAHASHI, COURIER, HAYES
1 A ¶ Concrete pillars.
2 A Oil stains.
3 A A flickering sodium light.
4 A One car left: a dented Volvo with its trunk open.
5 A ¶ AGENT IRINA SOLOVYOV, 30s, wet hair, tactical vest, crouches behind a pillar, gun drawn.
6 A Beside her, AGENT KOFI MENSAH-BELL, 40s, headset, scans the ramp.
7 A On the far side of the Volvo, a hostage: DR. LEONARD HAYES-TAKAHASHI, 50s, hands zip-tied, mouth taped.
8 A Behind him stands THE COURIER, 30s, black jacket, a gun pressed to Hayes's neck.
9 D IRINA (whispering): Eyes on the target?
10 D KOFI: Northeast pillar. He's moving.
11 D COURIER (calling out): That's far enough!
12 A ¶ Irina and Kofi freeze.
13 A Hayes squeezes his eyes shut.
14 D COURIER [CONT'D]: Drop the weapons. Both of you.
15 D KOFI (raising his voice): We can talk about this.
16 D COURIER: We're talking now.
17 D IRINA (whispering to Kofi): Left. On three.
18 D KOFI (barely moving his lips): He's too close to Hayes.
19 D IRINA: Then we make him move.
20 A ¶ She rolls a coin across the concrete.
21 A It clinks against the Volvo's tire.
22 A The Courier whips his head toward it.
23 A Kofi fires into the pillar behind him.
24 A Concrete bursts.
25 A Irina charges.
26 A ¶ The Courier shoves Hayes forward.
27 A The three collide beside the car in a heap of limbs.
28 A A gun skitters.
29 A Kofi dives for it.
30 A The Courier punches Irina, she slams him against the Volvo, Hayes scrambles under the bumper.
31 D COURIER [CONT'D] (snarling): You don't understand!
32 D IRINA (pinning his arm): Then explain it.
33 A ¶ He heaves.
34 A She holds.
35 A Kofi seizes the loose gun, trains it on the Courier.
36 D KOFI: Down. Now.
37 A ¶ The Courier stills.
38 A His chest rises and falls.
39 A He lets his hand go slack.
40 A Irina kneels on his back and cuffs him.
41 A ¶ Hayes crawls out from under the bumper, tape half-peeled.
42 A Kofi cuts his zip ties.
43 A Hayes gasps.
44 D HAYES (coughing): He said they were coming for me.
45 D KOFI: Who?
46 D HAYES: The Directorate. He wasn't one of them. He was warning me.
47 A ¶ Irina looks at the Courier.
48 A His face is turned against the concrete, eyes wet.
49 D IRINA (quietly): Is that true?
50 D COURIER (muffled): They'll be here in four minutes.
51 A ¶ Kofi checks his watch.
52 A Irina hauls the Courier up.
53 D KOFI: Move.
54 A ¶ They run for the stairwell, the Courier between them, Hayes limping behind.
55 A Footsteps echo.
56 A Somewhere above, tires screech down a ramp.
57 D IRINA (over her shoulder): Level two exit! Go!
58 A ¶ They vanish through the steel door as headlights sweep across the pillars.

### SCENE s01041 | INT. ICE-FISHING SHANTY - LAKE SUPERIOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS MCINTYRE, MARGOT LEBLANC, TEDDY ORLOV, BRIGID FALLON, ANSEL
1 A ¶ A plywood box on a frozen lake, six by eight, glowing orange from a propane heater.
2 A Four holes drilled in the floor, four lines dropped into black water.
3 A Thermoses, a deck of cards, a battered radio playing country music.
4 A ¶ HOLLIS MCINTYRE, 50s, flannel, beard iced at the tips, sits on an overturned bucket.
5 A MARGOT LEBLANC, 40s, wool cap, jigs her rod in slow circles.
6 A TEDDY ORLOV, 12, her nephew, in an oversized snowmobile suit, stares into his hole.
7 A BRIGID FALLON, 30s, newcomer, borrowed boots, holds a cup of cocoa with both hands.
8 A ANSEL, 70s, Hollis's father, dozes by the door.
9 D HOLLIS: Coldest night of the year, they said.
10 D MARGOT: Warmest, if you're lucky.
11 D BRIGID: Do they bite when it's like this?
12 D HOLLIS: They bite when they feel like it.
13 D TEDDY: I got one!
14 A ¶ All four turn.
15 A Teddy's line goes taut.
16 A He heaves.
17 D MARGOT: Easy, kiddo!
18 D HOLLIS: Let him fight!
19 A ¶ The rod bends nearly double.
20 A Ice creaks.
21 A Then the line goes slack.
22 A Teddy tumbles back, laughing.
23 D TEDDY: It got away!
24 D BRIGID: That's the best part.
25 A ¶ She sips.
26 A Settles.
27 A The heater hisses.
28 A Ansel snores.
29 D MARGOT: I love this. The quiet.
30 D HOLLIS: It's not that quiet.
31 D MARGOT: It's quiet enough.
32 A ¶ For a minute, no one speaks.
33 A The radio plays a slow song.
34 A Snow ticks on the roof.
35 D BRIGID: Does the lake ever talk?
36 D HOLLIS: Talk?
37 D BRIGID: The ice. It was making a noise earlier. Like a groan.
38 D MARGOT: It does that. Expansion.
39 D HOLLIS: It's the cold working through it.
40 A ¶ The groan comes again.
41 A Longer, lower.
42 A Teddy leans closer to the hole.
43 D TEDDY: It sounds like a person.
44 D MARGOT: Teddy.
45 D TEDDY: Like someone humming.
46 D HOLLIS: Don't be silly.
47 D MARGOT: Don't be silly.
48 A ¶ They've said it at the same time, same flat tone.
49 A They look at each other and neither smiles.
50 A ¶ The humming continues.
51 A Not the radio.
52 A From under the floor.
53 A ¶ Ansel's eyes open.
54 D ANSEL (whispering): Nobody put your hand in the hole.
55 D BRIGID: What?
56 D ANSEL: Don't. Please.
57 A ¶ Teddy's fingers are already at the edge of the water.
58 A ¶ From the black circle, a pale hand rises, slow, almost tender.
59 A It takes Teddy's mitten between two fingers, holds it, as if checking the size.
60 A ¶ The heater goes out.

### SCENE pd_sisters_6 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): LOPAKHIN, VARYA, TROFIMOV, GAEV, LUBOV ANDREYEVNA, ANYA, CHARLOTTA, ANYA’S VOICE, TROFIMOV’S VOICE, FIERS
1 A ¶ Drags an umbrella out of a bundle, and seems to be waving it about.
2 A LOPAKHIN appears to be frightened.
3 D VARYA: What are you doing?... I never thought...
4 D TROFIMOV: Come along, let’s take our seats... it’s time! The train will be in directly.
5 D VARYA: Peter, here they are, your goloshes, by that trunk.
6 A ¶ In tears.
7 D VARYA: And how old and dirty they are....
8 A ¶ Putting them on.
9 D TROFIMOV: Come on!
10 A ¶ Deeply moved, nearly crying.
11 D GAEV: The train... the station.... Cross in the middle, a white double in the corner....
12 D LUBOV: Let’s go!
13 D LOPAKHIN: Are you all here? There’s nobody else?
14 A ¶ Locks the side-door on the left.
15 D LOPAKHIN: There’s a lot of things in there. I must lock them up. Come!
16 D ANYA: Good-bye, home! Good-bye, old life!
17 D TROFIMOV: Welcome, new life!
18 A ¶ Exit with ANYA.
19 A ¶ VARYA looks round the room and goes out slowly.
20 A YASHA and CHARLOTTA, with her little dog, go out.
21 D LOPAKHIN: Till the spring, then! Come on... till we meet again!
22 A ¶ Exit.
23 A ¶ LUBOV ANDREYEVNA and GAEV are left alone.
24 A They might almost have been waiting for that.
25 A They fall into each other’s arms and sob restrainedly and quietly, fearing that somebody might hear them.
26 A ¶ In despair.
27 D GAEV: My sister, my sister....
28 D LUBOV: My dear, my gentle, beautiful orchard! My life, my youth, my happiness, good-bye! Good-bye!
29 A ¶ Gaily.
30 D ANYA’S VOICE: Mother!
31 A ¶ Gaily, excited.
32 D TROFIMOV’S VOICE: Coo-ee!
33 D LUBOV: To look at the walls and the windows for the last time.... My dead mother used to like to walk about this room....
34 D GAEV: My sister, my sister!
35 D ANYA’S VOICE: Mother!
36 D TROFIMOV’S VOICE: Coo-ee!
37 D LUBOV: We’re coming!
38 A ¶ They go out.
39 A ¶ The stage is empty.
40 A The sound of keys being turned in the locks is heard, and then the noise of the carriages going away.
41 A It is quiet.
42 A Then the sound of an axe against the trees is heard in the silence sadly and by itself.
43 A Steps are heard.
44 A FIERS comes in from the door on the right.
45 A He is dressed as usual, in a short jacket and white waistcoat; slippers on his feet.
46 A He is ill.
47 A He goes to the door and tries the handle.
48 D FIERS: It’s locked. They’ve gone away.
49 A ¶ Sits on a sofa.
50 D FIERS: They’ve forgotten about me.... Never mind, I’ll sit here.... And Leonid Andreyevitch will have gone in a light overcoat instead of putting on his fur coat....
51 A ¶ Sighs anxiously.
52 D FIERS: I didn’t see.... Oh, these young people!
53 A ¶ Mumbles something that cannot be understood.
54 D FIERS: Life’s gone on as if I’d never lived.
55 A ¶ Lying down.
56 D FIERS: I’ll lie down.... You’ve no strength left in you, nothing left at all.... Oh, you... bungler!
57 A ¶ He lies without moving.
58 A The distant sound is heard, as if from the sky, of a breaking string, dying away sadly.
59 A Silence follows it, and only the sound is heard, some way away in the orchard, of the axe falling on the trees.

### SCENE s01045 | INT. GOAT YOGA STUDIO - MORNING
Detected names (may be incomplete or contain aliases): CLAUDETTE FONTENOT, LEONARD PRICE, MAMA ROSE
1 A ¶ A converted barn.
2 A Bamboo mats in neat rows, string lights, a chalkboard reading "Namaste Baa-ck."
3 A Six goats wander the floor, bored, chewing yoga straps.
4 A ¶ CLAUDETTE FONTENOT, 40s, instructor, flowing linen, sits cross-legged on a mat with a phone propped against her water bottle.
5 A LEONARD PRICE, 50s, her only student, a stockbroker in too-tight spandex, attempts a downward dog.
6 D LEONARD: Claudette, one of them is eating my sock.
7 D CLAUDETTE: That's Beyonce. She loves attention.
8 D LEONARD: It's attention with teeth.
9 D CLAUDETTE: Breathe, Leonard. In through the nose.
10 A ¶ He breathes.
11 A Beyonce chews.
12 A He breathes again.
13 A ¶ The phone rings.
14 A A photo of an elderly woman in a floppy hat.
15 A MAMA ROSE.
16 D CLAUDETTE [CONT'D]: Sorry. I have to take this.
17 A ¶ She answers on speaker.
18 D MAMA ROSE [V.O.]: Claudette! Are you on the goat farm again?
19 D CLAUDETTE: It's a studio, Mama.
20 D MAMA ROSE [V.O.]: Is it the goat that eats the shoes?
21 D LEONARD (under his breath): That's the one.
22 D MAMA ROSE [V.O.]: Who's that? A man? Are you seeing a man?
23 D CLAUDETTE: It's a client, Mama.
24 D MAMA ROSE [V.O.]: He sounds fat.
25 D LEONARD: I'm in a very difficult pose.
26 D MAMA ROSE [V.O.]: Claudette, I need you to come home. The faucet is leaking again.
27 D CLAUDETTE: I'll call a plumber.
28 D MAMA ROSE [V.O.]: Plumbers are thieves.
29 D CLAUDETTE: Mama, I love you. I have to teach.
30 D MAMA ROSE [V.O.]: Is the goat singing? I hear a goat singing.
31 A ¶ On cue, Beyonce bleats, triumphant.
32 D CLAUDETTE (to Leonard): She's proud of you.
33 D LEONARD: I'll be sure to thank her.
34 D CLAUDETTE: Goodbye, Mama.
35 A ¶ She hangs up.
36 A Smooths her linen.
37 A Resettles.
38 D CLAUDETTE [CONT'D]: Where were we?
39 D LEONARD: Paying for this.
40 D CLAUDETTE: Right. Warrior One.

### SCENE s01100 | INT. ORBITAL GREENHOUSE RING - OBSERVATION DECK - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): YASMIN HOSSAIN-RYDER, TECHNICIAN WALDEMAR OKPARA, HALCYON, COMMANDER IRIS TANAKA-LUND
1 A ¶ A curved corridor lined with hydroponic racks.
2 A Violet grow-light.
3 A A viewport shows Earth turning slowly below.
4 A The air smells of basil and recycled coolant.
5 A ¶ DR. YASMIN HOSSAIN-RYDER, 40s, sits cross-legged on the floor, a tablet balanced on her knee.
6 A She stirs a pouch of reconstituted tea.
7 A Her colleague, TECHNICIAN WALDEMAR OKPARA, 30s, wipes down a nutrient valve.
8 A Their station AI, a soft voice called HALCYON, murmurs from a speaker near the ceiling.
9 A Beside the viewport, the commander, COMMANDER IRIS TANAKA-LUND, 50s, stands with her arms folded, gazing at the planet.
10 A ¶ Yasmin sips.
11 A Waldemar wipes.
12 A Iris does not move.
13 A She hums low, tuneless.
14 D HALCYON [V.O.]: Humidity at sixty-two percent. Within tolerance.
15 D YASMIN (not looking up): Thank you, Halcyon.
16 D HALCYON [V.O.]: You are welcome. Would you like the evening readings?
17 D YASMIN: Later.
18 A ¶ She taps the tablet.
19 A Waldemar glances at her, then at the commander.
20 A He lowers his voice.
21 D WALDEMAR: Is she okay?
22 D YASMIN: She's thinking.
23 D WALDEMAR: She's been thinking for an hour.
24 D YASMIN: She's the commander. She thinks in hours.
25 A ¶ He nods and returns to the valve.
26 A A drop of nutrient solution beads on the pipe.
27 A He catches it with his thumb.
28 A ¶ Iris turns from the viewport.
29 A Looks at them both with a mild, unreadable expression.
30 D IRIS: We got the message from Mission Control.
31 D YASMIN: The extension?
32 D IRIS: Six more months.
33 A ¶ Waldemar's rag stops.
34 A Yasmin sets down the tablet.
35 A For a moment the only sound is the hum of the racks.
36 D WALDEMAR (carefully): Ma'am, the crew rotation --
37 D IRIS: Is delayed. Yes.
38 D YASMIN: And the supply drop?
39 D IRIS: Sufficient. They believe.
40 A ¶ She walks to the nearest rack, brushes the leaves of a tomato plant with two fingers, and inhales.
41 D IRIS [CONT'D]: Tomatoes should be ready by the third week.
42 A ¶ Yasmin and Waldemar exchange a look.
43 A He nods to her.
44 A She shrugs, resigned.
45 A He folds the rag and sets it by the valve.
46 D HALCYON [V.O.]: Would anyone care for a cup of tea?
47 D IRIS (a small smile): Yes, Halcyon. Four.
48 D HALCYON [V.O.]: Four, Commander? There are three of you.
49 A ¶ Iris pauses.
50 A The smile fades.
51 A She turns to the speaker.
52 D IRIS: ...Three. Of course. Three.
53 A ¶ She walks away toward the corridor, one hand trailing along the rack.
54 A Waldemar watches her go, then looks at Yasmin.
55 D WALDEMAR: Who was the fourth?
56 D YASMIN (quietly): I'll tell you later.

### SCENE s01034 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): BEATRIX CALLOWAY, NICO ABARA, FENWICK
1 A ¶ Glass eyes glitter from every shelf.
2 A A stuffed owl, a lynx mid-leap, a badger with a crooked grin.
3 A ¶ BEATRIX CALLOWAY, 50s, magnifier on her forehead, kneels by an open drawer while NICO ABARA, 20s, apprentice, holds the lantern and FENWICK, 70s, owner, stands rigid at the door, fingers twitching, and all three have noticed that the fox on the counter is missing its left eye.
4 D BEATRIX: Fenwick, you said nobody came in.
5 D FENWICK: Nobody did, Beatrix.
6 D NICO: The fox, Mr. Fenwick. Look at the fox.
7 A ¶ Beatrix lifts the animal, turns it, peers into the empty socket, pulls a folded note from inside, and Nico leans in, lantern shaking, while Fenwick edges toward the back door, one hand in his coat.
8 D BEATRIX: Stop there, Fenwick.
9 D FENWICK: It's a misunderstanding.
10 D NICO: It says "the eye is in the owl."
11 A ¶ They all turn.
12 A The owl stares back.

### SCENE s01087 | EXT. CANAL LOCK - LOWER BASIN - DUSK
Detected names (may be incomplete or contain aliases): LOCKKEEPER HOSEA DRUMMOND, CLEMENTINE DRUMMOND, CAPTAIN EZEKIEL ARDEN, MADAME PERPETUA ARDEN, OFFICER
1 A ¶ 1824.
2 A A narrow barge squeezed in a stone lock.
3 A Water churns.
4 A Lanterns swing on posts.
5 A Ropes creak.
6 A ¶ LOCKKEEPER HOSEA DRUMMOND, 50s, broad, in a tarred coat, cranks the sluice.
7 A His daughter CLEMENTINE DRUMMOND, 12, perches on the gate beam with a coil of rope.
8 A At the stern of the barge, CAPTAIN EZEKIEL ARDEN, 40s, tall hat, cane, looks displeased.
9 A His wife, MADAME PERPETUA ARDEN, 40s, silk veil, grips the rail, glaring at the churning water and murmuring to the horses on the towpath.
10 D HOSEA: Steady now. She'll rise.
11 D EZEKIEL: You said twenty minutes.
12 D HOSEA: I said it'd be about twenty.
13 D CLEMENTINE: It's been twenty-two, sir.
14 D EZEKIEL: Impertinent child.
15 D CLEMENTINE: Accurate child.
16 A ¶ Perpetua lifts her veil.
17 A Stares at Clementine.
18 A A flicker of amusement she smothers at once.
19 D PERPETUA: Ezekiel. Let the man work.
20 D EZEKIEL: I have a train to meet.
21 D HOSEA: No train this side of Wickham.
22 D EZEKIEL: There is a train.
23 D HOSEA: There's a promise of one.
24 A ¶ The water surges.
25 A The barge shudders and lifts.
26 A A rope snaps.
27 A The barge yaws toward the wall.
28 A Clementine scrambles along the beam, grabs the loose end, hauls with both hands.
29 A Hosea spins the crank backward.
30 A Ezekiel stumbles, cane clattering.
31 A Perpetua clutches the rail and shouts at the horses.
32 A They back and the barge straightens.
33 D OFFICER [V.O.] (from the towpath, distant): You there! In the lock! Halt in the Crown's name!
34 A ¶ Everyone freezes.
35 A Water keeps rising.
36 A Hosea looks at the bank.
37 A Four men in coats at the far lamp.
38 A A constable's whistle.
39 D EZEKIEL (quietly, not at all arrogant now): Hosea. Open the upper gate.
40 D HOSEA: Sir?
41 D EZEKIEL: Open it. Now.
42 D CLEMENTINE: Papa?
43 A ¶ Hosea looks at Ezekiel.
44 A At Perpetua, pale.
45 A At Clementine.
46 A He sets his jaw.
47 A Cranks the upper sluice.
48 A The gate groans open.
49 D HOSEA: Hold on to something.
50 A ¶ The water roars.
51 A The barge shoots forward into the dark channel, taking the lantern light with it, and the officers' shouts vanish behind.

### SCENE s01109 | INT. EMPTY GYM - SCOREBOARD CONTROL CLOSET - NIGHT
Detected names (may be incomplete or contain aliases): BILLIE, ROSSITER-KAMARA, JANITOR
1 A ¶ A cramped closet with a hand-wired switchboard.
2 A Taped wires.
3 A A dusty window onto the dark court below.
4 A A folding chair.
5 A ¶ WILHELMINA "BILLIE" ROSSITER-KAMARA, 50s, former point guard, in a faded jersey and sweatpants, sits at the board with a clipboard on her lap.
6 A She taps a button.
7 A Below, the old scoreboard blinks: HOME 00 GUEST 00.
8 D BILLIE: Check, check.
9 A ¶ She taps another button.
10 A A horn blares through the empty gym.
11 A She winces, turns the volume down a notch.
12 D BILLIE [CONT'D] (to herself): Twenty-two years and I still hit the wrong one.
13 A ¶ A crackle on the intercom.
14 D JANITOR [V.O.] (over the PA): Coach? You still in there?
15 D BILLIE (leaning to the mic): Five more minutes, Eddie.
16 D JANITOR [V.O.]: Lights go off at ten.
17 D BILLIE: I know.
18 A ¶ She hangs up the mic.
19 A Looks down through the window.
20 A The court is blank hardwood, the lines worn pale.
21 A She flips a switch.
22 A A spotlight lands on center court.
23 A ¶ She sits for a while, watching the empty circle of light.
24 D BILLIE [CONT'D] (softly): Tip off.
25 A ¶ She presses the home-score button.
26 A HOME climbs: 02.
27 A She presses it again: 04.
28 A Then 06.
29 A Then 08.
30 A She presses it until it reads 99.
31 A A small, crooked smile.
32 A ¶ She hits the horn one last time.
33 A It rolls across the gym, rattling the rafters.
34 D BILLIE [CONT'D] (whispering): Good game.
35 A ¶ She clicks off the spotlight.
36 A The scoreboard goes dark.

### SCENE s00001 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VEGA, WOMAN, STRANGER, INGRID
1 A ¶ Glass eyes in jars.
2 A A fox half-stuffed on the bench.
3 A Rain on a skylight.
4 A ¶ ODALYS VEGA (30s, rain-soaked trench coat, badge on her belt) stands in the doorway.
5 A At the bench, a WOMAN in a leather apron sews a pheasant's wing.
6 A Her back is turned.
7 D ODALYS: Evening. Sorry about the hour.
8 D STRANGER: Kettle's on. Sit.
9 A ¶ Odalys sits on a stool.
10 A Looks at the fox.
11 A The fox looks back.
12 D ODALYS: I'm looking into a break-in at the museum. Friday night.
13 D STRANGER: Terrible. They never lock the back.
14 D ODALYS: That's what the guard said. Funny, because he said she never left the bench that night either.
15 D STRANGER: Who?
16 D ODALYS: Nobody. Your name?
17 A ¶ The woman turns.
18 A Warm face.
19 A Needle in her teeth.
20 D STRANGER: Ingrid.
21 A ¶ She sets down the wing.
22 A On the shelf behind her: a small brass key tag.
23 A MUSEUM - REAR.
24 D INGRID: Does she take sugar, your guard?
25 A ¶ Odalys stands.
26 A Her hand drifts to her belt.
27 A Ingrid smiles.
28 D ODALYS: Ingrid. Put the needle down.

### SCENE s01098 | INT. FUNERAL HOME - FAMILY ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSEMARY PEMBERTON-DIALLO, BENEDICT PEMBERTON, DELPHINE ACHEBE-HART, FUNERAL DIRECTOR OSWALD PRICE
1 A ¶ Dim lamps.
2 A A mahogany casket at the front.
3 A Folding chairs in careful rows.
4 A A box of tissues on every seat.
5 A The smell of lilies and carpet cleaner.
6 A ¶ ROSEMARY PEMBERTON-DIALLO, 60s, in black wool, sits ramrod straight in the front row.
7 A Her son BENEDICT PEMBERTON, 40s, rumpled suit, fidgets beside her.
8 A Their cousin, DELPHINE ACHEBE-HART, 50s, large sunglasses indoors, stands against the back wall clutching her purse.
9 D BENEDICT: Mother, I can handle it.
10 D ROSEMARY: You can't handle a toaster.
11 D BENEDICT: That was one time.
12 D DELPHINE (from the back): It was three times, Ben.
13 D BENEDICT: Stay out of it, Delphine.
14 D DELPHINE: Don't tell me to stay out. I'm the one who found the will.
15 D ROSEMARY: The will is none of your business.
16 D DELPHINE: It's my business. I'm named in it.
17 D BENEDICT: You are not.
18 D DELPHINE: Page four. Paragraph two.
19 D ROSEMARY (rising): That paragraph was struck.
20 D DELPHINE: By who?
21 D ROSEMARY: By me.
22 D BENEDICT: Mother!
23 D ROSEMARY: Be quiet, Benedict.
24 D BENEDICT: You can't just --
25 D ROSEMARY: I can do what I please. I'm his widow.
26 D DELPHINE: And I'm his sister's daughter. Which makes me blood.
27 D ROSEMARY: Blood is overrated.
28 D DELPHINE: Says the woman who married into it.
29 A ¶ Silence.
30 A Rosemary stares at the casket.
31 A Her shoulders sag.
32 A Benedict puts a hand on her arm.
33 A She lets it stay.
34 D ROSEMARY (quiet): He would have hated this.
35 D BENEDICT: He would have loved it. The shouting.
36 D DELPHINE (wiping her eyes behind the sunglasses): He started half of it.
37 A ¶ A beat.
38 A Rosemary lets out a short, surprised laugh.
39 A Benedict follows.
40 A Delphine, last, a sob that turns into a snort.
41 A They sit in the gentle ruin.
42 A ¶ The door opens.
43 A FUNERAL DIRECTOR OSWALD PRICE, 50s, black suit, clears his throat.
44 D OSWALD: Ready, whenever you are.
45 D ROSEMARY: Give us a moment, Mr. Price.
46 D OSWALD: Of course.
47 A ¶ He retreats.
48 A Delphine crosses the room and sits on Rosemary's other side.
49 A Three of them in a row, looking at the casket.

### SCENE s01033 | INT. FUNICULAR CAR - MID-SLOPE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUST MWANGI, SILAS DRAKEFORD, ZOFIA BR, TEN
1 A ¶ Stalled.
2 A Wooden benches, brass rails.
3 A Outside, black pines and a thousand feet of dark.
4 A Wind rocks the car on its cable.
5 A ¶ AUGUST MWANGI, 40s, charcoal coat, gloved hands folded, sits very still.
6 A Tall, calm, eyes of a chess player.
7 A ¶ Across from him, SILAS DRAKEFORD, 40s, wet hair, a bruise ripening on his cheekbone, grips a leather briefcase to his chest.
8 D SILAS: You pulled the brake.
9 D AUGUST: I pulled nothing.
10 D SILAS: Then who did?
11 D AUGUST: The cable did what cables do.
12 A ¶ Silas shifts.
13 A His hand slides toward his pocket.
14 A August watches it.
15 D AUGUST [CONT'D]: Don't.
16 D SILAS: I wasn't.
17 D AUGUST: Then he wouldn't have said I was.
18 D SILAS: Who?
19 D AUGUST: You know who.
20 A ¶ Silas swallows.
21 A His eyes dart to the window.
22 A Nothing but pine and fog.
23 D SILAS: He told you I took it.
24 D AUGUST: He told me you were smart. And that smart men carry briefcases.
25 A ¶ Silas laughs, brittle.
26 A He sets the briefcase on his knees.
27 A Clasps it shut.
28 A ¶ A scrape.
29 A On the roof.
30 A Both men look up.
31 D AUGUST [CONT'D]: Deer.
32 D SILAS: On a funicular?
33 A ¶ Another scrape, heavier.
34 A The car sways.
35 A ¶ The roof hatch slams open.
36 A A boot drops through.
37 A Then a leg.
38 A Then a woman, ZOFIA BRÅTEN, 30s, climbing gear, ice axe, headlamp blazing.
39 A She lands in a crouch, axe leveled.
40 D ZOFIA: Nobody move.
41 A ¶ Both men raise their hands.
42 A She sweeps the light across them, lands on August.
43 D ZOFIA [CONT'D]: You. Open the briefcase.
44 D AUGUST: It's his.
45 D ZOFIA (to Silas): Then you.
46 A ¶ Silas hesitates.
47 A His hand shakes.
48 A He unlatches.
49 A Flips the lid.
50 A ¶ Inside, nothing.
51 A Foam padding, cut to hold something that's no longer there.
52 D ZOFIA [CONT'D]: Where is it?
53 D SILAS: I don't know.
54 A ¶ August smiles.
55 A Slowly lowers his hands.
56 D AUGUST: He knows.
57 A ¶ He nods at the window.
58 A On the glass, a small hand-shaped print.
59 A On the outside.
60 A ¶ The car lurches.
61 A Falls ten feet and catches.
62 A ¶ All three scream.

### SCENE s01090 | EXT. ORCHARD BEHIND A CLOSED CANNERY - LATE SUMMER AFTERNOON
Detected names (may be incomplete or contain aliases): NELL, THEO, DUNNING
1 A ¶ Pears hang heavy on the branches.
2 A Wasps drone over fallen fruit.
3 A Beyond the trees, a corrugated roof rusts under a pale sky.
4 A ¶ NELL, 15, sits with her back against a trunk, knees drawn up.
5 A She has a transistor radio in her lap, tuned to nothing.
6 A A paper sack of pears lies beside her.
7 A Dust on her shoes.
8 A A bruise yellowing on one shin.
9 A ¶ She bites a pear.
10 A Chews.
11 A Does not taste it.
12 A ¶ A twig snaps.
13 A She looks up.
14 A A boy has stepped from between the trees, hands in his pockets.
15 A THEO, 16, tall and awkward, wearing his older brother's jacket.
16 A He stops ten paces away.
17 A ¶ He studies her.
18 A She studies the pear.
19 D THEO: You're on the Dunnings' side.
20 D NELL: Is there a side?
21 A ¶ He shrugs.
22 A Scuffs a pear into the grass with his toe.
23 A She watches the movement and then the dirt.
24 D THEO: They said you left.
25 D NELL: They said a lot.
26 A ¶ He nods slowly.
27 A She offers him a pear without looking up.
28 A He crosses, takes it, sits a careful distance away.
29 A They eat in silence.
30 A A wasp circles his hand.
31 A He lets it.
32 D THEO: My brother's gone. Since June.
33 A ¶ She says nothing.
34 A Turns the dial on the radio.
35 A Static swells, then a thin fragment of a song.
36 A She holds still, listening.
37 A He leans in a little.
38 A The song fades.
39 D THEO [CONT'D]: That was a good one.
40 D NELL: It always is. Then it goes.
41 A ¶ He half-smiles.
42 A She turns the dial again.
43 A Nothing.
44 A She sets the radio on the grass between them.
45 A ¶ A screen door bangs somewhere beyond the trees.
46 A A woman's voice calls a name that is not hers.
47 A Nell's shoulders rise.
48 A Theo watches them rise.
49 D THEO [CONT'D]: That's for you?
50 D NELL: That's for a girl I was.
51 A ¶ He nods as if this makes sense.
52 A Stands.
53 A Offers his hand.
54 A She looks at it for a long moment.
55 A Then takes it.
56 A He pulls her up.
57 A They let go at the same time.
58 A ¶ At the edge of the orchard, an older figure steps out: MRS. DUNNING, 50s, apron, arms folded.
59 A She stops when she sees them both.
60 A Her face softens.
61 A Hardens.
62 A Softens again.
63 A ¶ Nell straightens.
64 A Theo steps half a pace in front of her.
65 A Mrs. Dunning looks at his jacket, at the radio on the grass, at the pear core in Nell's hand.
66 A ¶ She turns and walks back toward the house.
67 A Leaves the door open behind her.
68 A ¶ Nell picks up the radio.
69 A Theo picks up the sack of pears.
70 A They follow, ten paces apart, then five.
