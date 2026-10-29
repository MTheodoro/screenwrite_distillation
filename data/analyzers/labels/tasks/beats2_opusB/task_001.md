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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusB/group_07001.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01075 | EXT. HANGING BRIDGE OF SPIDERSILK - ABOVE THE MOONLIT CHASM - NIGHT
Detected names (may be incomplete or contain aliases): QUEEN ISOLDE VANTERRE, MORVAN UNMADE, ROYAL HERALD
1 A ¶ Wind howls.
2 A A bridge of woven silver thread spans a bottomless gorge.
3 A Far below, pale lights drift like fallen stars.
4 A ¶ QUEEN ISOLDE VANTERRE, 40s, crowned in antlers of white bone, grips the rail.
5 A Her cloak snaps in the gale.
6 A Opposite her, at the far end of the span: MORVAN THE UNMADE, ageless, a figure of black smoke and one burning eye.
7 D QUEEN ISOLDE: You have no claim on this valley.
8 D MORVAN (echoing, from everywhere): The valley has no claim on you, and yet you bleed for it.
9 A ¶ She steps onto the bridge.
10 A Threads hum beneath her boots.
11 D QUEEN ISOLDE: Go back to your cold hollow, Morvan.
12 D MORVAN: Come and make me.
13 A ¶ A horn sounds from the castle far behind her.
14 A Isolde does not turn.
15 A Smoke rolls along the silver strands.
16 D ROYAL HERALD [V.O.] (distant, over the wind): Majesty! The east wall has fallen! Return at once!
17 D QUEEN ISOLDE (calling back): Hold the gate!
18 A ¶ She draws a pale sword from her belt.
19 A It blazes white.
20 A Morvan lifts a hand; the smoke thickens into a spear of shadow.
21 D MORVAN: You cannot be in two places, little queen.
22 D QUEEN ISOLDE: I am not in two places. I am here.
23 A ¶ She runs.
24 A The bridge sways.
25 A The spear hurls.
26 A Her blade meets it in a burst of light, and the gorge rings like a bell.
27 D MORVAN: Then fall here.
28 D QUEEN ISOLDE: Not while a thread holds.
29 A ¶ She drives forward.
30 A Smoke breaks around her.
31 A The silver strands blaze.
32 A Morvan roars.
33 A ¶ The wind does not let up.

### SCENE s01051 | INT. HOLLOWAY CIDER MILL - PRESS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER HOLLOWAY, RHYS DOYLE, BEATA NOWAK, COLM, OLUWASEUN ADEYEMI
1 A ¶ A long timber barn that smells of fermenting apples and wet wood.
2 A Wooden presses with iron screws, barrels stacked to the rafters.
3 A A lantern on a hook sways in a draft nobody can find.
4 A Bees drowse in the beams, drunk on sugar, their hum a low drone.
5 A ¶ JUNIPER HOLLOWAY, 50s, mill owner, apron stained russet to the elbows, ladles pulp into a cloth.
6 A Her braid is thick as a rope.
7 A ¶ RHYS DOYLE, 30s, hired hand, leans on a broom and doesn't sweep.
8 A BEATA NOWAK, 60s, Juniper's sister, sits on an upturned crate peeling an apple in one unbroken ribbon.
9 A COLM, 20s, the grandson, perches on a barrel with a harmonica he isn't playing.
10 A OLUWASEUN ADEYEMI, 40s, the buyer from the city, in a camel coat that doesn't belong here, taps a clipboard.
11 D JUNIPER (to the room): Last press of the season. Then we can all go home.
12 D RHYS: Or stay.
13 D BEATA: No one's staying.
14 D OLUWASEUN: I do need a count by midnight.
15 D JUNIPER: You'll have it.
16 A ¶ She turns the screw.
17 A Juice runs into a trough, amber and slow.
18 A The sound is oddly soft.
19 D COLM: It sounds like someone breathing.
20 D BEATA: It's the cider, Colm.
21 D COLM: Not the cider. Under it.
22 A ¶ They go still.
23 A The juice drips.
24 A The bees hum.
25 A And beneath it all, a slow, wet inhale.
26 A Then an exhale.
27 D RHYS (muttering): Pipes.
28 D JUNIPER: There are no pipes in the press room.
29 D OLUWASEUN: Is there a basement?
30 A ¶ Juniper and Beata exchange a look so quick it's nearly nothing.
31 D BEATA: No basement.
32 D JUNIPER: We don't dig here.
33 D OLUWASEUN: Why not?
34 D JUNIPER: The ground doesn't like it.
35 A ¶ Oluwaseun smiles, thinks it a joke.
36 A Nobody smiles back.
37 A ¶ The lantern swings.
38 A Its light crosses Rhys's face, Beata's hands, Colm's eyes, Juniper's braid.
39 A The hum of bees thickens.
40 A ¶ Juniper lifts a ladle to her lips.
41 A Tastes.
42 A Her face doesn't change.
43 D JUNIPER [CONT'D] (to Colm): Put your harmonica down, love.
44 D COLM: I wasn't--
45 D JUNIPER: Now.
46 A ¶ He sets it on the barrel.
47 A It rolls an inch.
48 A Stops.
49 A ¶ Beata stops peeling.
50 A The ribbon of apple skin hangs, quivering, in her fingers.
51 D BEATA (softly): It's early.
52 D JUNIPER: It's early.
53 D OLUWASEUN: What is?
54 A ¶ The breathing quickens.
55 A The barrel under Colm shudders.
56 A The staves bulge, as if something inside is leaning out.
57 A ¶ All five freeze.
58 A The bees fall silent in the rafters.
59 A ¶ Then, in one motion, Rhys drops the broom, Beata drops the apple, Colm scrambles off the barrel, Oluwaseun stumbles backward over the trough, and Juniper turns calmly, takes a mallet from a hook, and faces the barrel as if she'd been expecting it since March.
60 D JUNIPER [CONT'D] (to all): Out. Quiet. Don't run.
61 A ¶ They go.
62 A Slowly.
63 A Colm last, looking back.
64 A ¶ Juniper steps to the barrel.
65 A Raises the mallet.
66 A Waits.
67 A ¶ The staves creak.
68 A The breath hitches.
69 A Waits with her.

### SCENE pd_earnest_6 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): JACK, ALGERNON, GWENDOLEN, CECILY, LADY BRACKNELL, CHASUBLE, MISS PRISM
1 A ¶ Seizes hold of Algernon.
2 D JACK: Dr. Chasuble, my unfortunate brother. Miss Prism, my unfortunate brother. Gwendolen, my unfortunate brother. Algy, you young scoundrel, you will have to treat me with more respect in the future. You have never behaved to me like a brother in all your life.
3 D ALGERNON: Well, not till to-day, old boy, I admit. I did my best, however, though I was out of practice.
4 A ¶ Shakes hands.
5 A ¶ To Jack.
6 D GWENDOLEN: My own! But what own are you? What is your Christian name, now that you have become some one else?
7 D JACK: Good heavens! . . . I had quite forgotten that point. Your decision on the subject of my name is irrevocable, I suppose?
8 D GWENDOLEN: I never change, except in my affections.
9 D CECILY: What a noble nature you have, Gwendolen!
10 D JACK: Then the question had better be cleared up at once. Aunt Augusta, a moment. At the time when Miss Prism left me in the hand-bag, had I been christened already?
11 D LADY BRACKNELL: Every luxury that money could buy, including christening, had been lavished on you by your fond and doting parents.
12 D JACK: Then I was christened! That is settled. Now, what name was I given? Let me know the worst.
13 D LADY BRACKNELL: Being the eldest son you were naturally christened after your father.
14 A ¶ Irritably.
15 D JACK: Yes, but what was my father’s Christian name?
16 A ¶ Meditatively.
17 D LADY BRACKNELL: I cannot at the present moment recall what the General’s Christian name was. But I have no doubt he had one. He was eccentric, I admit. But only in later years. And that was the result of the Indian climate, and marriage, and indigestion, and other things of that kind.
18 D JACK: Algy! Can’t you recollect what our father’s Christian name was?
19 D ALGERNON: My dear boy, we were never even on speaking terms. He died before I was a year old.
20 D JACK: His name would appear in the Army Lists of the period, I suppose, Aunt Augusta?
21 D LADY BRACKNELL: The General was essentially a man of peace, except in his domestic life. But I have no doubt his name would appear in any military directory.
22 D JACK: The Army Lists of the last forty years are here. These delightful records should have been my constant study.
23 A ¶ Rushes to bookcase and tears the books out.
24 D JACK: M. Generals . . . Mallam, Maxbohm, Magley, what ghastly names they have—Markby, Migsby, Mobbs, Moncrieff! Lieutenant 1840, Captain, Lieutenant-Colonel, Colonel, General 1869, Christian names, Ernest John.
25 A ¶ Puts book very quietly down and speaks quite calmly.
26 D JACK: I always told you, Gwendolen, my name was Ernest, didn’t I? Well, it is Ernest after all. I mean it naturally is Ernest.
27 D LADY BRACKNELL: Yes, I remember now that the General was called Ernest, I knew I had some particular reason for disliking the name.
28 D GWENDOLEN: Ernest! My own Ernest! I felt from the first that you could have no other name!
29 D JACK: Gwendolen, it is a terrible thing for a man to find out suddenly that all his life he has been speaking nothing but the truth. Can you forgive me?
30 D GWENDOLEN: I can. For I feel that you are sure to change.
31 D JACK: My own one!
32 A ¶ To Miss Prism.
33 D CHASUBLE: Lætitia!
34 A ¶ Embraces her.
35 A ¶ Enthusiastically.
36 D MISS PRISM: Frederick! At last!
37 D ALGERNON: Cecily!
38 A ¶ Embraces her.
39 D ALGERNON: At last!
40 D JACK: Gwendolen!
41 A ¶ Embraces her.
42 D JACK: At last!
43 D LADY BRACKNELL: My nephew, you seem to be displaying signs of triviality.
44 D JACK: On the contrary, Aunt Augusta, I’ve now realised for the first time in my life the vital Importance of Being Earnest.
45 A ¶ TABLEAU

### SCENE s00000 | INT. DRAINED ROLLER RINK - TEMPORARY COUNTY COURTROOM - DAY
Detected names (may be incomplete or contain aliases): ADAEZE OKAFOR, LEV BRANDT, JUDGE HOLLIS TRAN, CLERK
1 A ¶ A roller rink.
2 A Maple floor, warped by flood.
3 A Disco ball still hangs over the bench, wrapped in bubble wrap.
4 A ¶ Folding tables.
5 A Folding chairs.
6 A A flag on a mic stand.
7 A ¶ Courthouse is under repair.
8 A Justice is here instead.
9 A ¶ ADAEZE OKAFOR (40s, sharp navy suit, sneakers under the table, reading glasses pushed into cropped grey hair) stands at the defense table.
10 A Alone.
11 A Her client's chair is empty.
12 A ¶ Across the aisle: LEV BRANDT (50s, heavy, rumpled, a pastry crumb on his tie) shuffles exhibits.
13 A Calm.
14 A Too calm.
15 A ¶ On a raised DJ booth, now a bench: JUDGE HOLLIS TRAN (60s, silver braid over one shoulder, half-moon spectacles, a thermos of tea).
16 A She taps a gavel made from a skate wheel and a dowel.
17 A ¶ Rink speakers hiss.
18 D JUDGE TRAN: Back on the record.
19 D LEV: Your Honor, the People are ready.
20 D ADAEZE: The defense is not.
21 D JUDGE TRAN: Counsel, your client is late.
22 D ADAEZE: My client is in a hospital.
23 D LEV: Convenient.
24 D ADAEZE: Say that again.
25 D LEV: I said, convenient.
26 D JUDGE TRAN: Mr. Brandt.
27 D LEV: It is, Judge. Day three of trial. Day three of a medical emergency.
28 D ADAEZE: He had a seizure on the stairs.
29 D LEV: Which stairs?
30 D ADAEZE: The stairs of this building. The one with the leak.
31 A ¶ A drip.
32 A Somewhere.
33 A Plink.
34 A Plink.
35 A ¶ Everyone listens.
36 D JUDGE TRAN: I have a doctor's note?
37 D ADAEZE: I filed it at seven.
38 D LEV: I never received it.
39 D ADAEZE: I emailed you.
40 D LEV: My inbox says otherwise.
41 D ADAEZE: Your inbox says a lot of things.
42 D JUDGE TRAN: Enough.
43 A ¶ Silence.
44 A The disco ball turns a quarter inch in a draft.
45 A ¶ Lev smiles.
46 A Opens a folder.
47 A Slides one page onto the table.
48 D LEV: Then the People move to proceed in absentia.
49 D ADAEZE: Objection.
50 D JUDGE TRAN: Basis?
51 D ADAEZE: Every basis.
52 D LEV: She can't list one.
53 D ADAEZE: Sixth Amendment. Confrontation. Presence. Counsel of choice.
54 D LEV: He waived presence on Monday.
55 D ADAEZE: He did not.
56 D LEV: Page four of the waiver.
57 A ¶ Adaeze freezes.
58 A Hands go to her own stack.
59 A Flips.
60 A Flips.
61 D JUDGE TRAN: Ms. Okafor?
62 D ADAEZE: Page four.
63 A ¶ She finds it.
64 A Reads.
65 A Her jaw sets.
66 A ¶ A signature.
67 A Her client's.
68 A Dated Monday.
69 D ADAEZE [CONT'D]: That is not his hand.
70 D LEV: It is his hand.
71 D ADAEZE: He signs with a loop. This has no loop.
72 D LEV: People change.
73 D ADAEZE: Not in a week.
74 D JUDGE TRAN: Counsel, approach.
75 A ¶ They do.
76 A Skates of silence.
77 A Their shoes squeak on the maple.
78 D JUDGE TRAN [CONT'D] (low): Mr. Brandt. Where did you get this?
79 D LEV (low): From the clerk.
80 D ADAEZE (low): Which clerk?
81 D LEV: The one who works here.
82 D ADAEZE: There are four.
83 D LEV: The one with the lanyard.
84 D ADAEZE: They all have lanyards!
85 D JUDGE TRAN: Lower your voice.
86 D ADAEZE (hissing): You forged it.
87 D LEV: Careful.
88 D ADAEZE: Or you let someone forge it. Same thing.
89 D LEV: That is slander, counselor.
90 D JUDGE TRAN: Stop. Both of you.
91 A ¶ Beat.
92 A The drip: plink.
93 A ¶ Judge Tran lifts the page toward the light.
94 A Tilts it.
95 A Squints.
96 A ¶ Her thumb rubs the signature.
97 A Black comes away.
98 A Wet.
99 A ¶ She holds the thumb up for them to see.
100 D JUDGE TRAN [CONT'D]: Ink's still wet.
101 A ¶ Lev's smile dies.
102 D LEV: Your Honor, that's - that can't -
103 D ADAEZE: Monday, you said.
104 D LEV: The photocopier smears.
105 D JUDGE TRAN: It is a pen, Mr. Brandt. A felt-tip. Not a copier.
106 D LEV: I can explain.
107 D ADAEZE: Please. Do.
108 D LEV: It was a... a re-signing. For the file.
109 D JUDGE TRAN: By whom?
110 A ¶ Lev opens his mouth.
111 A Closes it.
112 A ¶ Behind him, the rink doors swing open.
113 A Wind.
114 A A clerk in a lanyard stands there, small, pale, holding a felt-tip pen like a dropped weapon.
115 D CLERK [O.S.]: I'm sorry. He said it was routine.
116 A ¶ Nobody moves.
117 D JUDGE TRAN (quiet): Mr. Brandt. Sit down.
118 A ¶ Lev sits.
119 A Slowly.
120 A His chair squeaks on the maple.
121 D ADAEZE: Your Honor, the defense moves for dismissal with prejudice.
122 D JUDGE TRAN: Granted.
123 A ¶ The skate-wheel gavel.
124 A One tap.
125 A Echo, bright against the rafters.
126 A ¶ Adaeze exhales.
127 A Takes off her glasses.
128 A Rubs her eyes.
129 D ADAEZE (to herself): Sneakers. Best decision I made all week.
130 A ¶ Judge Tran pours tea.
131 A Steam curls in the cold.
132 D JUDGE TRAN: Court is adjourned. Somebody turn that ball off.
133 A ¶ The disco ball stops turning.

### SCENE pd_dollhouse_5 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): RANK, HELMER, NORA
1 A ¶ outside.
2 D RANK: . It is I. May I come in for a moment?
3 A ¶ in a fretful whisper.
4 D HELMER: . Oh, what does he want now?
5 A ¶ Aloud.
6 D HELMER: Wait a minute!
7 A ¶ Unlocks the door.
8 D HELMER: Come, that’s kind of you not to pass by our door.
9 D RANK: I thought I heard your voice, and felt as if I should like to look in.
10 A ¶ With a swift glance round.
11 D RANK: Ah, yes!—these dear familiar rooms. You are very happy and cosy in here, you two.
12 D HELMER: It seems to me that you looked after yourself pretty well upstairs too.
13 D RANK: Excellently. Why shouldn’t I? Why shouldn’t one enjoy everything in this world?—at any rate as much as one can, and as long as one can. The wine was capital—
14 D HELMER: Especially the champagne.
15 D RANK: So you noticed that too? It is almost incredible how much I managed to put away!
16 D NORA: Torvald drank a great deal of champagne tonight too.
17 D RANK: Did he?
18 D NORA: Yes, and he is always in such good spirits afterwards.
19 D RANK: Well, why should one not enjoy a merry evening after a well-spent day?
20 D HELMER: Well spent? I am afraid I can’t take credit for that.
21 A ¶ clapping him on the back.
22 D RANK: . But I can, you know!
23 D NORA: Doctor Rank, you must have been occupied with some scientific investigation today.
24 D RANK: Exactly.
25 D HELMER: Just listen!—little Nora talking about scientific investigations!
26 D NORA: And may I congratulate you on the result?
27 D RANK: Indeed you may.
28 D NORA: Was it favourable, then?
29 D RANK: The best possible, for both doctor and patient—certainty.
30 A ¶ quickly and searchingly.
31 D NORA: . Certainty?
32 D RANK: Absolute certainty. So wasn’t I entitled to make a merry evening of it after that?
33 D NORA: Yes, you certainly were, Doctor Rank.
34 D HELMER: I think so too, so long as you don’t have to pay for it in the morning.
35 D RANK: Oh well, one can’t have anything in this life without paying for it.
36 D NORA: Doctor Rank—are you fond of fancy-dress balls?
37 D RANK: Yes, if there is a fine lot of pretty costumes.
38 D NORA: Tell me—what shall we two wear at the next?
39 D HELMER: Little featherbrain!—are you thinking of the next already?
40 D RANK: We two? Yes, I can tell you. You shall go as a good fairy—
41 D HELMER: Yes, but what do you suggest as an appropriate costume for that?
42 D RANK: Let your wife go dressed just as she is in everyday life.
43 D HELMER: That was really very prettily turned. But can’t you tell us what you will be?
44 D RANK: Yes, my dear friend, I have quite made up my mind about that.
45 D HELMER: Well?

### SCENE s01044 | INT. LIBRARY OF MOTHS - THE HOLLOW TOWER - NIGHT
Detected names (may be incomplete or contain aliases): ORRIN, SABLE, TAMSIN, VESPER
1 A ¶ Shelves rise into darkness, thick with bound ledgers.
2 A Pale moths cover every spine, their wings turning the pages by themselves.
3 A ¶ ORRIN, a young knight in dented mail, steps through the arch, sword half-drawn.
4 A At his side, SABLE, a thief with a hooded cloak and a crooked smile, carries a lantern whose flame burns blue.
5 D ORRIN: Quiet. They sleep.
6 D SABLE: They're moths, Orrin. They don't sleep.
7 A ¶ TAMSIN, a girl of twelve in an apprentice's smock, scurries from behind a shelf, arms full of scrolls, and nearly collides with them.
8 A All three freeze.
9 D TAMSIN: You are not supposed to be here.
10 D SABLE: No one is.
11 A ¶ The moths lift in a silent cloud.
12 A Orrin's sword rings free.
13 A Sable ducks, Tamsin shrieks, scrolls scatter, and the three tumble together into the center aisle, tangled in cloak and chain.
14 A ¶ A hush falls.
15 A ¶ VESPER, tall and thin, robed in gray, steps from between the shelves.
16 A Her face is a smooth mask of bone-white silk.
17 A She raises one hand.
18 A The moths settle.
19 D VESPER: The Archivist welcomes you. Now put down the lantern.

### SCENE s01086 | INT. BOWLING ALLEY - LANE 12 - FINAL FRAME - NIGHT
Detected names (may be incomplete or contain aliases): DRY CREEK LANES, COACH MURIEL TAPIA, DESHAWN, PRITCHETT, ANNIKA BERGSTROM-ODUYA, HANK WILLOUGHBY, PRESTON LI
1 A ¶ Neon pins.
2 A Sticky carpet.
3 A A trophy case.
4 A The league championship banner: DRY CREEK LANES - TUESDAY NIGHT FINALS.
5 A A crowd packs the seats behind the rail, sweating, silent.
6 A ¶ COACH MURIEL TAPIA, 60s, windbreaker, clipboard, paces behind the scorers' table.
7 A Next to her, DESHAWN "THE HAMMER" PRITCHETT, 30s, in a team polo, chalks his fingers, rolling his shoulders.
8 A At the lane, ANNIKA BERGSTROM-ODUYA, 20s, ponytail, holds her ball against her chest.
9 A Opposite them on the other bench, rival captain HANK WILLOUGHBY, 50s, red bowling shirt, smirks and cracks his knuckles.
10 A At the scoring console, young scorekeeper PRESTON LI, 17, headset on, watches the monitor.
11 D MURIEL: Ten pins. That's all she needs.
12 D DESHAWN: She's got ice in her veins.
13 D MURIEL: She's got a ball in her hands. Pray it's the right one.
14 A ¶ Annika steps up to the approach.
15 A Breathes.
16 A Stares at the head pin.
17 A The crowd hushes.
18 A Hank leans forward, grinning.
19 A Preston grips his headset.
20 D ANNIKA (under her breath): Spare. Just spare.
21 A ¶ She takes four steps.
22 A Swings.
23 A Releases.
24 A The ball tears down the lane, hooks left, a streak of black.
25 A It slams the pocket.
26 A Pins scatter.
27 A Nine fall.
28 A One wobbles.
29 A Stands.
30 A ¶ The crowd groans.
31 A Hank punches the air.
32 D HANK: Told you she'd choke!
33 D DESHAWN: Sit down, Hank.
34 D HANK: Make me.
35 A ¶ Muriel puts a hand on Deshawn's chest.
36 A He holds.
37 A Annika walks back, staring at the single pin.
38 D PRESTON [V.O.] (over the PA, shaky): Attention, bowlers. Lane twelve. Tenth frame. One ball remaining. Annika Bergstrom-Oduya needs the spare for the title.
39 D MURIEL (low): Annie. Look at me.
40 D ANNIKA: I'm looking.
41 D MURIEL: That pin has been waiting thirty years for someone to knock it down.
42 D ANNIKA: It's been waiting for me.
43 D MURIEL: It's been waiting for all of us.
44 A ¶ Deshawn offers a towel.
45 A She wipes her hands.
46 A Hands it back.
47 A Steps up again.
48 A The crowd leans in.
49 A Hank folds his arms, jaw tight.
50 A ¶ She sets her feet.
51 A Looks at the pin.
52 A Takes the four steps again.
53 A Releases.
54 A ¶ The ball rolls slower this time.
55 A Gentle.
56 A A curve so slight it barely bends.
57 A It kisses the last pin at the edge.
58 A The pin spins.
59 A Tilts.
60 A Falls.
61 A ¶ For one second, nothing.
62 A Then the whole alley erupts.
63 A Muriel throws her clipboard in the air.
64 A Deshawn lifts Annika off the floor.
65 A Preston screams into his headset.
66 A Hank sits with his arms still folded.
67 D MURIEL [CONT'D]: That's a title!
68 D DESHAWN: That's a Tuesday!
69 A ¶ Annika laughs and cries at once, still held aloft.
70 A Hank rises, walks over, offers a hand across the rail.
71 D HANK: Good game.
72 D ANNIKA (shaking it): Thanks, Hank.
73 D HANK: Next year, I'm bringing the red ball.
74 D ANNIKA: Bring two.

### SCENE s01064 | EXT. THE GLASS BRIDGE OF AETHERMERE - DAWN
Detected names (may be incomplete or contain aliases): QUEEN IDRISSA, SIR BALTHAZAR, FINNEGAN, MORGANA
1 A ¶ A span of living crystal between two floating islands, fog beneath it, bells ringing somewhere unseen.
2 A ¶ QUEEN IDRISSA, tall and crowned in silver thorns, stands at the middle of the bridge.
3 A Behind her, SIR BALTHAZAR, white-bearded, in bronze plate, grips a staff that hums with blue light.
4 A Before her, a ragged young WANDERER named FINNEGAN carries nothing but a cracked lute.
5 D IDRISSA: You trespass, minstrel.
6 D FINNEGAN: I'm only crossing.
7 D BALTHAZAR: Cross to what?
8 D FINNEGAN: To the far island. My brother's there.
9 D IDRISSA: There is no brother.
10 D BALTHAZAR: There is no brother.
11 A ¶ A third figure strides out of the fog: MORGANA, a woman in green, hair full of leaves, a bow slung across her back.
12 A She holds up a hand.
13 D MORGANA: Lower your staff, Balthazar. He speaks true.
14 D BALTHAZAR: How would you know?
15 D MORGANA: Because the brother is me.
16 A ¶ Finnegan drops the lute.
17 A It rings on the crystal.
18 A The bridge begins to hum.

### SCENE s01102 | INT. WEDDING TENT IN A FLOODED MEADOW - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FERREIRA, ADEBAYO KUROSAWA, BERNADETTE, CALLUM OYELARAN, PIA
1 A ¶ Fairy lights sag.
2 A Rain drums the canvas.
3 A Muddy shoes in a pile by the dance floor.
4 A A three-tier cake leans, slightly.
5 A ¶ MARISOL FERREIRA, 30s, in a ruined white gown, stands on a chair holding a champagne bottle.
6 A Her groom, ADEBAYO KUROSAWA, 30s, soaked tux, stands below, arms raised to catch her.
7 A Aunt BERNADETTE, 60s, clutches a tray of canapés.
8 A The best man, CALLUM OYELARAN, 30s, tries to rescue the cake.
9 A The flower girl, PIA, 8, sits under a table with a kitten.
10 D MARISOL: Everyone, listen!
11 A ¶ Rain hammers louder.
12 A Nobody listens.
13 D ADEBAYO (to her): Marisol, come down.
14 D MARISOL (to herself): I will not cry. I will not cry.
15 D CALLUM (over his shoulder): Somebody help me with this cake!
16 D BERNADETTE: Not unless it floats!
17 A ¶ The canvas sags.
18 A Water pours through a seam onto the dance floor.
19 A Callum, Bernadette, and Adebayo dive for the cake as one.
20 A They collide, slide, and sit down hard in the mud.
21 A The cake tilts, hovers, then lands neatly on Callum's lap.
22 A ¶ Marisol stops.
23 A Stares.
24 A Starts to laugh.
25 D MARISOL (to the crowd, lifting the bottle): To the wettest wedding in the county!
26 A ¶ Pia crawls out from under the table, kitten in her arms.
27 A Adebayo reaches for Marisol's hand.
28 A She jumps down into his arms.

### SCENE pd_dollhouse_1 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): NORA, MRS LINDE, SERVANT, KROGSTAD
1 D NORA: . Yes—someday, perhaps, after many years, when I am no longer as nice-looking as I am now. Don’t laugh at me! I mean, of course, when Torvald is no longer as devoted to me as he is now; when my dancing and dressing-up and reciting have palled on him; then it may be a good thing to have something in reserve—
2 A ¶ Breaking off.
3 D NORA: What nonsense! That time will never come. Now, what do you think of my great secret, Christine? Do you still think I am of no use? I can tell you, too, that this affair has caused me a lot of worry. It has been by no means easy for me to meet my engagements punctually. I may tell you that there is something that is called, in business, quarterly interest, and another thing called payment in installments, and it is always so dreadfully difficult to manage them. I have had to save a little here and there, where I could, you understand. I have not been able to put aside much from my housekeeping money, for Torvald must have a good table. I couldn’t let my children be shabbily dressed; I have felt obliged to use up all he gave me for them, the sweet little darlings!
4 D MRS LINDE: So it has all had to come out of your own necessaries of life, poor Nora?
5 D NORA: Of course. Besides, I was the one responsible for it. Whenever Torvald has given me money for new dresses and such things, I have never spent more than half of it; I have always bought the simplest and cheapest things. Thank Heaven, any clothes look well on me, and so Torvald has never noticed it. But it was often very hard on me, Christine—because it is delightful to be really well dressed, isn’t it?
6 D MRS LINDE: Quite so.
7 D NORA: Well, then I have found other ways of earning money. Last winter I was lucky enough to get a lot of copying to do; so I locked myself up and sat writing every evening until quite late at night. Many a time I was desperately tired; but all the same it was a tremendous pleasure to sit there working and earning money. It was like being a man.
8 D MRS LINDE: How much have you been able to pay off in that way?
9 D NORA: I can’t tell you exactly. You see, it is very difficult to keep an account of a business matter of that kind. I only know that I have paid every penny that I could scrape together. Many a time I was at my wits’ end.
10 A ¶ Smiles.
11 D NORA: Then I used to sit here and imagine that a rich old gentleman had fallen in love with me—
12 D MRS LINDE: What! Who was it?
13 D NORA: Be quiet!—that he had died; and that when his will was opened it contained, written in big letters, the instruction: “The lovely Mrs Nora Helmer is to have all I possess paid over to her at once in cash.”
14 D MRS LINDE: But, my dear Nora—who could the man be?
15 D NORA: Good gracious, can’t you understand? There was no old gentleman at all; it was only something that I used to sit here and imagine, when I couldn’t think of any way of procuring money. But it’s all the same now; the tiresome old person can stay where he is, as far as I am concerned; I don’t care about him or his will either, for I am free from care now.
16 A ¶ Jumps up.
17 D NORA: My goodness, it’s delightful to think of, Christine! Free from care! To be able to be free from care, quite free from care; to be able to play and romp with the children; to be able to keep the house beautifully and have everything just as Torvald likes it! And, think of it, soon the spring will come and the big blue sky! Perhaps we shall be able to take a little trip—perhaps I shall see the sea again! Oh, it’s a wonderful thing to be alive and be happy.
18 A ¶ A bell is heard in the hall.
19 A ¶ rising.
20 D MRS LINDE: . There is the bell; perhaps I had better go.
21 D NORA: No, don’t go; no one will come in here; it is sure to be for Torvald.
22 A ¶ at the hall door.
23 D SERVANT: . Excuse me, ma’am—there is a gentleman to see the master, and as the doctor is with him—
24 D NORA: Who is it?
25 A ¶ at the door.
26 D KROGSTAD: . It is I, Mrs Helmer.
27 A ¶ Mrs LINDE starts, trembles, and turns to the window.
28 A ¶ takes a step towards him, and speaks in a strained, low voice.
29 D NORA: . You? What is it? What do you want to see my husband about?
30 D KROGSTAD: Bank business—in a way. I have a small post in the Bank, and I hear your husband is to be our chief now—
31 D NORA: Then it is—
32 D KROGSTAD: Nothing but dry business matters, Mrs Helmer; absolutely nothing else.
33 D NORA: Be so good as to go into the study, then.
34 A ¶ She bows indifferently to him and shuts the door into the hall; then comes back and makes up the fire in the stove.
35 D MRS LINDE: Nora—who was that man?
36 D NORA: A lawyer, of the name of Krogstad.
37 D MRS LINDE: Then it really was he.
38 D NORA: Do you know the man?
39 D MRS LINDE: I used to—many years ago. At one time he was a solicitor’s clerk in our town.
40 D NORA: Yes, he was.
41 D MRS LINDE: He is greatly altered.
42 D NORA: He made a very unhappy marriage.
43 D MRS LINDE: He is a widower now, isn’t he?
44 D NORA: With several children. There now, it is burning up.
45 A ¶ Shuts the door of the stove and moves the rocking-chair aside.

### SCENE s00019 | INT. MUSHROOM FARM - GROWING TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): MAGNUS LINDGREN, ZUZU, KOWALCZYK, ABIOLA ADEBAYO-CLARK, STRANGER
1 A ¶ A mile of dark.
2 A Wet concrete.
3 A Shelves of pale caps stacked to the ceiling, glowing faintly under purple grow-lights.
4 A The air is thick with spores and damp rot.
5 A ¶ Four flashlight beams cut the gloom.
6 A ¶ MAGNUS LINDGREN (50s, farm foreman, a ring of keys, a limp) walks point.
7 A Behind him, ZUZANNA "ZUZU" KOWALCZYK (20s, seasonal picker, hairnet, boots too big) clutches a bucket.
8 A Then ABIOLA ADEBAYO-CLARK (30s, state inspector, clipboard, mask pulled under her chin).
9 A Last of all, a STRANGER (30s, soaked jacket, no ID, a duffel strapped across his back) who joined them at the gate.
10 A ¶ Something drips.
11 A Something shifts.
12 D MAGNUS: Stay close. Don't touch the shelves.
13 D ABIOLA: Why not?
14 D MAGNUS: Contamination.
15 A ¶ She scribbles on her clipboard.
16 A He doesn't watch her do it.
17 A ¶ Zuzu stops.
18 A Her light has found a shelf where the caps are wrong.
19 A Taller.
20 A Gray-veined.
21 A Their gills pulse, slow, like breathing.
22 D ZUZU: Mr. Lindgren.
23 D MAGNUS: Keep walking.
24 D ZUZU: They're moving.
25 D MAGNUS: They're not.
26 A ¶ He walks on.
27 A She doesn't.
28 A The Stranger steps up beside her and lowers his light until it falls on the cap nearest them.
29 A It leans toward the beam.
30 A Just slightly.
31 A Then away.
32 D STRANGER: They don't like the light.
33 D ZUZU: Who are you?
34 A ¶ He doesn't answer.
35 A Behind them, Abiola's pen scratches, stops, scratches again.
36 D ABIOLA: Foreman. Your water logs don't match the humidity readings.
37 D MAGNUS: I'll fix it.
38 D ABIOLA: Not a fix. A discrepancy.
39 D MAGNUS: I said I'll fix it.
40 A ¶ He is walking faster.
41 A Keys jangling.
42 A The tunnel bends.
43 A The grow-lights dim in the curve and the shelves close in on both sides.
44 A ¶ Zuzu hurries to catch up, nearly stumbling.
45 A Her flashlight beam wobbles over a patch of floor.
46 A Something lies there, wrapped in a hairnet.
47 A A boot.
48 A Half a boot.
49 A ¶ She stops.
50 A Her mouth opens, closes.
51 D ZUZU (whisper): Abiola.
52 D ABIOLA: Hm?
53 D ZUZU: Look at the floor.
54 A ¶ Abiola looks.
55 A Her pen stops mid-word.
56 D ABIOLA: Mr. Lindgren. What is that.
57 A ¶ Magnus has turned.
58 A He holds his light on the boot, then on Zuzu, and for a moment nobody says anything at all.
59 D MAGNUS: Previous picker. Quit last week.
60 D ABIOLA: Quit without his boot?
61 D MAGNUS: People are strange.
62 A ¶ The Stranger takes one slow step backward.
63 A His duffel scrapes a shelf.
64 A A cap bends toward him.
65 D STRANGER (low): Don't move.
66 A ¶ Everyone freezes.
67 A The dripping stops.
68 A The glow from the shelves swells, then settles, like a held breath released.
69 A ¶ Then: a rustle, far down the tunnel.
70 A Many small sounds.
71 A Soft as a hand on silk.
72 D ZUZU (barely audible): What is that?
73 A ¶ The Stranger looks at Magnus.
74 A Magnus looks at his keys.
75 D STRANGER: He knows.
76 D MAGNUS: I don't.
77 D STRANGER: Then why did you lock the gate behind us?
78 A ¶ Abiola turns to Magnus slowly.
79 A Her clipboard lowers.
80 D ABIOLA: Mr. Lindgren.
81 D MAGNUS: It's protocol.
82 D ABIOLA: It's a lie.
83 A ¶ The rustling is closer.
84 A Zuzu's bucket tips and spills a hundred pale caps onto the concrete.
85 A They quiver.
86 D ZUZU: Please. Please just open the gate.
87 A ¶ Magnus pulls the ring of keys from his belt, holds them out in his shaking hand.
88 D MAGNUS: I can't. They're not for the gate. They're for the door at the other end.
89 D STRANGER: What's at the other end?
90 A ¶ Magnus finally lifts his eyes.
91 D MAGNUS: The reason it's quiet now.
92 A ¶ The rustling stops.
93 A The grow-lights flicker.
94 A A single cap, dead center on the floor, begins to rise.
95 A ¶ Zuzu exhales.
96 A And the Stranger, slowly, unslings the duffel, unzips it, and takes out a small steel canister with a red valve.
97 D STRANGER: Then we go the other way.

### SCENE s00003 | INT. SALT MINE CURLING HALL - NIGHT
Detected names (may be incomplete or contain aliases): DEZ, PRATT, INEZ MOREAU, ABEBE TESFAYE, FOREMAN GUS HALVERSEN
1 A ¶ A long gallery cut from white rock, lit by work lamps on cable.
2 A Painted lanes run down the salt floor.
3 A At the far end, a faded house.
4 A ¶ The Deepwater Miners are down two ends in the final.
5 A Their last stone is about to go.
6 A ¶ COACH DESMOND "DEZ" PRATT (50s, windbreaker, stopwatch on a lanyard) paces behind the hogline.
7 A Skip INEZ MOREAU (30s, braided, taped knuckles) crouches in the house with her broom flat on the ice, calling the line.
8 A At the hack, lead ABEBE TESFAYE (20s, rangy, headband) slides out of his delivery, the stone rumbling off, while Dez mouths numbers and Inez sweeps nothing, waiting.
9 A The stone curls, hesitates, and dies a foot short of the button.
10 A ¶ Nobody speaks.
11 A Salt dust drifts in the lamplight.
12 D DEZ: That's the game.
13 D INEZ: It's not. We have one more.
14 D DEZ: We had one more.
15 D ABEBE: I pulled it. My fault.
16 D INEZ: Your slide was fine. The ice was heavy.
17 A ¶ Boots on the stairs.
18 A A man in a hard hat and reflective vest comes down the gallery, carrying a clipboard: FOREMAN GUS HALVERSEN (60s, soot in his creases, no smile).
19 A Dez straightens.
20 A Inez rises.
21 A Abebe stands the broom against the wall and wipes his palms on his knees.
22 D GUS: Shift change in ten. You've got to clear the lane.
23 D DEZ: Gus, we're mid-final.
24 D GUS: You were mid-final.
25 D INEZ: Give us the end. Please.
26 A ¶ Gus looks at the stone, at the button, at the scoreboard.
27 A Taps his pencil on the clipboard.
28 D GUS: One stone. Then you're out.
29 D DEZ: Thank you.
30 D GUS: Don't. Just throw it.
31 A ¶ Abebe picks up the stone.
32 A His hands shake.
33 A Inez crosses to him and takes the handle for a second, then lets go.
34 D INEZ (softly): Breathe out when you let go.
35 D ABEBE: I know.
36 D INEZ: I know you know.
37 A ¶ He slides.
38 A It's a clean release.
39 A The stone goes long, slow, tired.
40 A It touches nothing.
41 A ¶ The work lamps hum.
42 A Gus checks his watch.

### SCENE s01049 | INT. JURY ROOM - FLOODLIT TENT - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA ACHTERBERG, DEEZ, PRUITT, MIN-JUN HAN
1 A ¶ A federal courthouse flattened by a hurricane, so the court sits in a canvas tent on the parking lot.
2 A Folding table, plastic chairs, a single fan.
3 A Generator thrum outside.
4 A Rain on the roof.
5 A ¶ GLORIA ACHTERBERG, 60s, foreperson, cardigan, a stack of index cards in front of her.
6 A DWAYNE "DEEZ" PRUITT, 30s, ball cap, sits arms crossed.
7 A MIN-JUN HAN, 40s, nurse, kneads her temples.
8 D GLORIA (to the room): Let's take another vote. All in favor of conviction.
9 A ¶ Deez doesn't raise his hand.
10 A Min-Jun hesitates.
11 A Gloria raises hers.
12 D GLORIA [CONT'D]: One.
13 D MIN-JUN: Gloria, I'm not sure--
14 D GLORIA: You said yesterday you were.
15 D MIN-JUN: I said I leaned.
16 D DEEZ: I never leaned.
17 D GLORIA: Deez, with respect, you haven't opened your mouth in two days.
18 D DEEZ: I'm saving it.
19 D GLORIA: For what?
20 D DEEZ: For when it matters.
21 A ¶ He stands.
22 A The chair scrapes.
23 A He crosses to a pitcher, pours water, drinks.
24 A Then, without warning, he slams the cup down.
25 D DEEZ [CONT'D] (to himself): Twelve men on a bench and none of them looked at the kid.
26 D MIN-JUN: Deez?
27 D DEEZ: You heard me.
28 D GLORIA: We are not here to rehash the trial.
29 D DEEZ: Gloria, he's nineteen. He had a record of one parking ticket.
30 D GLORIA: He had a gun.
31 D DEEZ: He had a toy.
32 D GLORIA: The witness said it was real.
33 D DEEZ: The witness was a hundred yards away in the dark.
34 A ¶ Min-Jun rises, steps between them, hands out.
35 D MIN-JUN: Stop. Both of you.
36 D DEEZ: She keeps calling it a verdict. It's a guess.
37 D GLORIA: You think I haven't been losing sleep?
38 D DEEZ: I think you made up your mind on day one.
39 A ¶ Gloria slaps her cards down.
40 A They fan across the table.
41 A Deez knocks them to the floor with the back of his hand.
42 A Min-Jun snatches one before it's lost.
43 D MIN-JUN: Enough! We have to be unanimous!
44 D DEEZ: Then we're not leaving this tent.
45 D GLORIA (very quiet): Then we're not leaving.
46 A ¶ The generator coughs.
47 A The lights flicker.
48 A All three look up.
49 A The fan slows to a stop.
50 A ¶ In the dark, no one moves.

### SCENE pd_dollhouse_6 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HELMER, NORA
1 D HELMER: I have it in me to become a different man.
2 D NORA: Perhaps—if your doll is taken away from you.
3 D HELMER: But to part!—to part from you! No, no, Nora, I can’t understand that idea.
4 A ¶ going out to the right.
5 D NORA: . That makes it all the more certain that it must be done.
6 A ¶ She comes back with her cloak and hat and a small bag which she puts on a chair by the table.
7 D HELMER: Nora, Nora, not now! Wait until tomorrow.
8 A ¶ putting on her cloak.
9 D NORA: . I cannot spend the night in a strange man’s room.
10 D HELMER: But can’t we live here like brother and sister—?
11 A ¶ putting on her hat.
12 D NORA: . You know very well that would not last long.
13 A ¶ Puts the shawl round her.
14 D NORA: Goodbye, Torvald. I won’t see the little ones. I know they are in better hands than mine. As I am now, I can be of no use to them.
15 D HELMER: But some day, Nora—some day?
16 D NORA: How can I tell? I have no idea what is going to become of me.
17 D HELMER: But you are my wife, whatever becomes of you.
18 D NORA: Listen, Torvald. I have heard that when a wife deserts her husband’s house, as I am doing now, he is legally freed from all obligations towards her. In any case, I set you free from all your obligations. You are not to feel yourself bound in the slightest way, any more than I shall. There must be perfect freedom on both sides. See, here is your ring back. Give me mine.
19 D HELMER: That too?
20 D NORA: That too.
21 D HELMER: Here it is.
22 D NORA: That’s right. Now it is all over. I have put the keys here. The maids know all about everything in the house—better than I do. Tomorrow, after I have left her, Christine will come here and pack up my own things that I brought with me from home. I will have them sent after me.
23 D HELMER: All over! All over!—Nora, shall you never think of me again?
24 D NORA: I know I shall often think of you, the children, and this house.
25 D HELMER: May I write to you, Nora?
26 D NORA: No—never. You must not do that.
27 D HELMER: But at least let me send you—
28 D NORA: Nothing—nothing—
29 D HELMER: Let me help you if you are in want.
30 D NORA: No. I can receive nothing from a stranger.
31 D HELMER: Nora—can I never be anything more than a stranger to you?
32 A ¶ taking her bag.
33 D NORA: . Ah, Torvald, the most wonderful thing of all would have to happen.
34 D HELMER: Tell me what that would be!
35 D NORA: Both you and I would have to be so changed that—. Oh, Torvald, I don’t believe any longer in wonderful things happening.
36 D HELMER: But I will believe in it. Tell me! So changed that—?
37 D NORA: That our life together would be a real wedlock. Goodbye.
38 A ¶ She goes out through the hall.
39 A ¶ sinks down on a chair at the door and buries his face in his hands.
40 D HELMER: . Nora! Nora!
41 A ¶ Looks round, and rises.
42 D HELMER: Empty. She is gone.
43 A ¶ A hope flashes across his mind.
44 D HELMER: The most wonderful thing of all—?
45 A ¶ The sound of a door shutting is heard from below.

### SCENE s01104 | EXT. RAILROAD WATER TOWER - HIGH PLAINS - DAWN
Detected names (may be incomplete or contain aliases): MARSHAL EZEKIEL DUNMORE, ODESSA PRATT-ADEYEMI, LAZARUS, RADIO
1 A ¶ A rusted tower on spindly legs.
2 A Dust devils on the flats.
3 A A single telegraph wire hums in the wind.
4 A ¶ MARSHAL EZEKIEL DUNMORE, 50s, hat low, rides in on a gray mare and dismounts at the base.
5 A Waiting there: ODESSA PRATT-ADEYEMI, 30s, canvas duster, rifle across her lap.
6 A Beside her, a boy, LAZARUS, 14, holds a canteen and keeps his eyes on his boots.
7 A ¶ Dunmore ties his horse.
8 A Takes his time.
9 D DUNMORE: You sent the telegram.
10 D ODESSA: I did.
11 D DUNMORE: Said you had the Whitaker brothers.
12 D ODESSA: I did, until they climbed the tower.
13 A ¶ Dunmore looks up.
14 A Two silhouettes against the pale sky, cross-legged on the catwalk.
15 D DUNMORE: They armed?
16 D ODESSA: They've got a Winchester and a jug.
17 A ¶ The telegraph wire sings.
18 A Dunmore pulls a pair of spectacles from his pocket, polishes them, puts them on.
19 A Lazarus finally looks up at him.
20 D LAZARUS: Marshal. Are you going to shoot them?
21 D DUNMORE: Not unless they ask nicely.
22 A ¶ Lazarus almost smiles.
23 A Odessa lifts her rifle a hair.
24 D RADIO [V.O.] (crackling from the saddlebag): Dunmore, this is Fort Bell. Report.
25 A ¶ Dunmore pulls a small field radio from the saddle.
26 A Raises it to his mouth.
27 D DUNMORE: Three at the tower. Two up high. Holding.
28 D RADIO [V.O.]: Copy. Reinforcements by noon.
29 D DUNMORE: They'll be too late.
30 A ¶ He clicks it off.
31 A Takes the rifle from Odessa's lap, hands it back to her, butt first.
32 A Walks to the ladder.
33 A Puts his boot on the first rung.
34 D ODESSA: Marshal.
35 A ¶ He pauses.
36 A She meets his eyes.
37 A Neither speaks.
38 A Lazarus watches both of them.
39 A Dunmore tips his hat and climbs.

### SCENE s01106 | INT. FERRY CAFE - RAINY DAY
Detected names (may be incomplete or contain aliases): HAZEL OKONKWO-LARSEN, JONAH PELLEGRINI, WENDELL ACHTERBERG
1 A ¶ Steam on the windows.
2 A A chalkboard menu.
3 A Wet umbrellas in a bucket.
4 A The ferry's engine thrums through the floor.
5 A ¶ HAZEL OKONKWO-LARSEN, 30s, hair damp, sits at a corner table with a cup of tea.
6 A Across from her, JONAH PELLEGRINI, 30s, in a yellow raincoat, stirs sugar into coffee.
7 A Next to them, a stranger, WENDELL ACHTERBERG, 60s, reads a newspaper pretending not to listen.
8 D HAZEL: You said you'd be on the nine o'clock.
9 D JONAH: I missed it.
10 D HAZEL: You always miss it.
11 D JONAH: I got caught up.
12 D HAZEL: In what?
13 D JONAH: Life.
14 D WENDELL (from behind the paper): That's usually what it is.
15 D HAZEL (turning): Excuse me?
16 D WENDELL: Nothing. Carry on.
17 D JONAH: Sir, this is a private conversation.
18 D WENDELL: It's a ferry cafe. Nothing's private.
19 D HAZEL: He has a point.
20 D JONAH: Hazel.
21 D HAZEL: He does.
22 D JONAH: You're on his side now?
23 D WENDELL: I'm not on anyone's side. I'm reading about a cricket match.
24 D HAZEL (to Wendell): Who's winning?
25 D WENDELL: Nobody. It rained.
26 A ¶ Jonah laughs, despite himself.
27 A Hazel's mouth twitches.
28 A The ferry horn blasts.
29 A All three look up.
30 A Rain streams down the glass.
31 D JONAH (softly, to Hazel): I'm sorry.
32 D HAZEL (softly): I know.
33 D WENDELL (lowering the paper): And that's that.

### SCENE pd_earnest_2 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, MISS PRISM, CHASUBLE
1 A ¶ Coming over very slowly.
2 D CECILY: But I don’t like German. It isn’t at all a becoming language. I know perfectly well that I look quite plain after my German lesson.
3 D MISS PRISM: Child, you know how anxious your guardian is that you should improve yourself in every way. He laid particular stress on your German, as he was leaving for town yesterday. Indeed, he always lays stress on your German when he is leaving for town.
4 D CECILY: Dear Uncle Jack is so very serious! Sometimes he is so serious that I think he cannot be quite well.
5 A ¶ Drawing herself up.
6 D MISS PRISM: Your guardian enjoys the best of health, and his gravity of demeanour is especially to be commended in one so comparatively young as he is. I know no one who has a higher sense of duty and responsibility.
7 D CECILY: I suppose that is why he often looks a little bored when we three are together.
8 D MISS PRISM: Cecily! I am surprised at you. Mr. Worthing has many troubles in his life. Idle merriment and triviality would be out of place in his conversation. You must remember his constant anxiety about that unfortunate young man his brother.
9 D CECILY: I wish Uncle Jack would allow that unfortunate young man, his brother, to come down here sometimes. We might have a good influence over him, Miss Prism. I am sure you certainly would. You know German, and geology, and things of that kind influence a man very much.
10 A ¶ Cecily begins to write in her diary.
11 A ¶ Shaking her head.
12 D MISS PRISM: I do not think that even I could produce any effect on a character that according to his own brother’s admission is irretrievably weak and vacillating. Indeed I am not sure that I would desire to reclaim him. I am not in favour of this modern mania for turning bad people into good people at a moment’s notice. As a man sows so let him reap. You must put away your diary, Cecily. I really don’t see why you should keep a diary at all.
13 D CECILY: I keep a diary in order to enter the wonderful secrets of my life. If I didn’t write them down, I should probably forget all about them.
14 D MISS PRISM: Memory, my dear Cecily, is the diary that we all carry about with us.
15 D CECILY: Yes, but it usually chronicles the things that have never happened, and couldn’t possibly have happened. I believe that Memory is responsible for nearly all the three-volume novels that Mudie sends us.
16 D MISS PRISM: Do not speak slightingly of the three-volume novel, Cecily. I wrote one myself in earlier days.
17 D CECILY: Did you really, Miss Prism? How wonderfully clever you are! I hope it did not end happily? I don’t like novels that end happily. They depress me so much.
18 D MISS PRISM: The good ended happily, and the bad unhappily. That is what Fiction means.
19 D CECILY: I suppose so. But it seems very unfair. And was your novel ever published?
20 D MISS PRISM: Alas! no. The manuscript unfortunately was abandoned.
21 A ¶ Cecily starts.
22 D MISS PRISM: I use the word in the sense of lost or mislaid. To your work, child, these speculations are profitless.
23 A ¶ Smiling.
24 D CECILY: But I see dear Dr. Chasuble coming up through the garden.
25 A ¶ Rising and advancing.
26 D MISS PRISM: Dr. Chasuble! This is indeed a pleasure.
27 A ¶ Enter Canon Chasuble.
28 D CHASUBLE: And how are we this morning? Miss Prism, you are, I trust, well?
29 D CECILY: Miss Prism has just been complaining of a slight headache. I think it would do her so much good to have a short stroll with you in the Park, Dr. Chasuble.
30 D MISS PRISM: Cecily, I have not mentioned anything about a headache.
31 D CECILY: No, dear Miss Prism, I know that, but I felt instinctively that you had a headache. Indeed I was thinking about that, and not about my German lesson, when the Rector came in.
32 D CHASUBLE: I hope, Cecily, you are not inattentive.
33 D CECILY: Oh, I am afraid I am.
34 D CHASUBLE: That is strange. Were I fortunate enough to be Miss Prism’s pupil, I would hang upon her lips.
35 A ¶ Miss Prism glares.
36 D CHASUBLE: I spoke metaphorically.—My metaphor was drawn from bees. Ahem! Mr. Worthing, I suppose, has not returned from town yet?
37 D MISS PRISM: We do not expect him till Monday afternoon.
38 D CHASUBLE: Ah yes, he usually likes to spend his Sunday in London. He is not one of those whose sole aim is enjoyment, as, by all accounts, that unfortunate young man his brother seems to be. But I must not disturb Egeria and her pupil any longer.
39 D MISS PRISM: Egeria? My name is Lætitia, Doctor.
40 A ¶ Bowing.
41 D CHASUBLE: A classical allusion merely, drawn from the Pagan authors. I shall see you both no doubt at Evensong?
42 D MISS PRISM: I think, dear Doctor, I will have a stroll with you. I find I have a headache after all, and a walk might do it good.
43 D CHASUBLE: With pleasure, Miss Prism, with pleasure. We might go as far as the schools and back.
44 D MISS PRISM: That would be delightful. Cecily, you will read your Political Economy in my absence. The chapter on the Fall of the Rupee you may omit. It is somewhat too sensational. Even these metallic problems have their melodramatic side.
45 A ¶ Goes down the garden with Dr. Chasuble.

### SCENE s01029 | INT. SYNERGY DYNAMICS - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): DARRYL PENHALLOW
1 A ¶ Forty identical desks.
2 A Forty identical monitors.
3 A A banner reads WE ARE FAMILY!
4 A ¶ DARRYL PENHALLOW, 30s, lanyard, tie two sizes too wide, stands bolt upright at his desk.
5 A Eyes wide.
6 A Smiling.
7 D DARRYL [V.O.]: This is my third reorg this quarter. I've been promoted twice. I still do the same job.
8 A ¶ He types.
9 A Fast.
10 A Frantic.
11 A Smiling.
12 D DARRYL [V.O., CONT'D]: Synergy is not a word. It's a hostage note.
13 A ¶ A cheerful intercom chime.
14 A ¶ He grabs a stapler.
15 A Clutches it to his chest.
16 A Smiling.
17 D DARRYL [V.O., CONT'D]: Quick wins. Low-hanging fruit. Circle back. Ping me.
18 A ¶ He drops the stapler.
19 A Picks up a mug: WORLD'S OKAYEST EMPLOYEE.
20 D DARRYL (to the room, bright): Great job, team!
21 A ¶ No one answers.
22 A Forty monitors glow.
23 D DARRYL [CONT'D] (muttering): We are so aligned.
24 A ¶ He sips from the empty mug.
25 A Sets it down.
26 A Smiles.

### SCENE pd_sisters_4 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): TROFIMOV, LUBOV ANDREYEVNA, VARYA, GAEV, PISCHIN, YASHA
1 A ¶ Enter TROFIMOV in a worn student uniform and spectacles.
2 D LUBOV: What a marvellous garden! White masses of flowers, the blue sky....
3 D TROFIMOV: Lubov Andreyevna!
4 A ¶ She looks round at him.
5 D TROFIMOV: I only want to show myself, and I’ll go away.
6 A ¶ Kisses her hand warmly.
7 D TROFIMOV: I was told to wait till the morning, but I didn’t have the patience.
8 A ¶ LUBOV ANDREYEVNA looks surprised.
9 A ¶ Crying.
10 D VARYA: It’s Peter Trofimov.
11 D TROFIMOV: Peter Trofimov, once the tutor of your Grisha.... Have I changed so much?
12 A ¶ LUBOV ANDREYEVNA embraces him and cries softly.
13 A ¶ Confused.
14 D GAEV: That’s enough, that’s enough, Luba.
15 A ¶ Weeps.
16 D VARYA: But I told you, Peter, to wait till to-morrow.
17 D LUBOV: My Grisha... my boy... Grisha... my son.
18 D VARYA: What are we to do, little mother? It’s the will of God.
19 A ¶ Softly, through his tears.
20 D TROFIMOV: It’s all right, it’s all right.
21 A ¶ Still weeping.
22 D LUBOV: My boy’s dead; he was drowned. Why? Why, my friend?
23 A ¶ Softly.
24 D LUBOV: Anya’s asleep in there. I am speaking so loudly, making such a noise.... Well, Peter? What’s made you look so bad? Why have you grown so old?
25 D TROFIMOV: In the train an old woman called me a decayed gentleman.
26 D LUBOV: You were quite a boy then, a nice little student, and now your hair is not at all thick and you wear spectacles. Are you really still a student?
27 A ¶ Goes to the door.
28 D TROFIMOV: I suppose I shall always be a student.
29 A ¶ Kisses her brother, then VARYA.
30 D LUBOV: Well, let’s go to bed.... And you’ve grown older, Leonid.
31 A ¶ Follows her.
32 D PISCHIN: Yes, we’ve got to go to bed.... Oh, my gout! I’ll stay the night here. If only, Lubov Andreyevna, my dear, you could get me 240 roubles to-morrow morning--
33 D GAEV: Still the same story.
34 D PISCHIN: Two hundred and forty roubles... to pay the interest on the mortgage.
35 D LUBOV: I haven’t any money, dear man.
36 D PISCHIN: I’ll give it back... it’s a small sum....
37 D LUBOV: Well, then, Leonid will give it to you.... Let him have it, Leonid.
38 D GAEV: By all means; hold out your hand.
39 D LUBOV: Why not? He wants it; he’ll give it back.
40 A ¶ LUBOV ANDREYEVNA, TROFIMOV, PISCHIN, and FIERS go out.
41 A GAEV, VARYA, and YASHA remain.
42 D GAEV: My sister hasn’t lost the habit of throwing money about.
43 A ¶ To YASHA.
44 D GAEV: Stand off, do; you smell of poultry.
45 A ¶ Grins.
46 D YASHA: You are just the same as ever, Leonid Andreyevitch.

### SCENE s01052 | INT. DEEP-SPACE SURVEY CAPSULE - SLEEP CYCLE
Detected names (may be incomplete or contain aliases): TAMARA OSEI
1 A ¶ A tube the size of a van.
2 A Cramped.
3 A Every surface a panel or a cabinet.
4 A A single porthole shows a pinhole star field, motionless.
5 A ¶ TAMARA OSEI, 40s, floats in a sleeping bag strapped to the wall.
6 A Her eyes are open.
7 A She hasn't slept.
8 A ¶ She unzips.
9 A Drifts to the console.
10 A Types a command with one finger.
11 A ¶ A soft chime.
12 A A woman's recorded voice, calm, from the speaker.
13 D TAMARA [V.O.] (recording): Day four hundred and twelve. All systems nominal. Crew morale: fine.
14 A ¶ She stops the playback.
15 A Her thumb stays on the button.
16 A ¶ She opens a locker.
17 A Takes out a small paper photograph, creased.
18 A Holds it to the light.
19 A Puts it back without looking.
20 A ¶ She types again.
21 A Another chime.
22 D TAMARA [V.O., CONT'D] (recording): Day four hundred and thirteen. All systems nominal. Crew morale: fine.
23 A ¶ She plays it again.
24 A And again.
25 A Same words, same tone, same breath in the same place.
26 A ¶ She sets the recorder down.
27 A It spins slowly, tumbling in the air.
28 A ¶ She presses her palm flat to the porthole.
29 A The glass is cold.
30 A Her breath fogs it.
31 A ¶ She wipes it with her sleeve.
32 A The stars come back.
33 A ¶ She presses record.
34 D TAMARA: Day four hundred and fourteen.
35 A ¶ A long pause.
36 D TAMARA [CONT'D]: All systems nominal.
37 A ¶ She doesn't say the rest.
38 A She turns the recorder off and floats there, hand still against the glass.

### SCENE s01061 | INT. NORTHWIND LOGISTICS - ESCAPE ROOM "THE VAULT OF SYNERGY" - DAY
Detected names (may be incomplete or contain aliases): DIRECTOR GREGOR HALVORSEN, PRIYA NAIR, TODD BEXLEY, BEATRICE KOWALSKI, HR, MARCUS ELLIOT, DELILAH OKONJO
1 A ¶ A windowless basement fitted as a movie-set bank.
2 A Brass safe doors, laser-beam strips of red tape, a ticking digital clock above the mantel: 59:12.
3 A ¶ Six employees in matching fleece vests stand in a ring around a locked chest.
4 A Lanyards.
5 A Name tags.
6 A Forced smiles.
7 A ¶ DIRECTOR GREGOR HALVORSEN, 50s, bald, a vest zipped to the chin, claps once.
8 D GREGOR: Team! Remember. There's no "I" in--
9 A ¶ PRIYA NAIR, 30s, accountant, glances at her watch.
10 D PRIYA: We've got fifty-eight minutes.
11 D GREGOR: Alignment is a journey.
12 A ¶ TODD BEXLEY, 40s, sales, taps the chest.
13 D TODD: It's a padlock. Four digits.
14 D GREGOR: Who has the clue?
15 A ¶ BEATRICE KOWALSKI, 60s, HR, lifts a laminated card with a trembling hand.
16 D BEATRICE: "The date of our greatest quarter."
17 D TODD: That's every quarter.
18 D GREGOR: Todd.
19 D TODD: I'm saying, it's every quarter.
20 A ¶ MARCUS ELLIOT, 20s, junior analyst, stares at the clock.
21 D MARCUS: Fifty-six minutes.
22 D GREGOR: Marcus, please. We don't count down. We count up.
23 A ¶ Marcus nods.
24 A Counts nothing.
25 A His left eye twitches.
26 A ¶ DELILAH OKONJO, 40s, procurement, stands with her arms crossed, in the corner.
27 D DELILAH: It's seventeen forty-two.
28 D GREGOR: Is that a guess?
29 D DELILAH: It's on the whiteboard behind you.
30 A ¶ They all turn.
31 A A whiteboard reads: FOUNDED 1742.
32 A Gregor's smile fixes in place.
33 D GREGOR: Great catch, Delilah.
34 A ¶ Priya enters the code.
35 A The padlock clicks.
36 A The chest opens.
37 A Inside, a single laminated card: CONGRATULATIONS.
38 A PLEASE COMPLETE THE SURVEY.
39 A ¶ Nobody speaks.
40 A Todd picks up the card, turns it over.
41 D TODD: There's a QR code.
42 D BEATRICE: Of course there is.
43 A ¶ They stand there, six fleece vests in a basement, while the clock beeps.
44 A 54:03.
45 A 54:02.

### SCENE s01022 | INT. MILLBROOK TELEPHONE EXCHANGE - NIGHT (1924)
Detected names (may be incomplete or contain aliases): MABEL PRZYBYLSKI, STRANGER, CROWE, ABERNATHY, TOBY, SHERIFF DUNMORE
1 A ¶ A small room above the feed store.
2 A A cord switchboard with a hundred brass jacks.
3 A A kerosene lamp backs up a weak electric bulb.
4 A ¶ MABEL PRZYBYLSKI, 20s, headset over pinned-up hair, plugs and unplugs cords with practiced speed.
5 A She is alone and likes it that way.
6 A ¶ A buzz.
7 A A light on the board.
8 A She plugs in.
9 D MABEL: Number, please.
10 A ¶ She listens.
11 A Pulls the cord.
12 A Connects another.
13 A The room breathes.
14 A ¶ Boots on the stairs.
15 A The door opens without a knock.
16 A ¶ A STRANGER in a long coat, hat low, rain on his shoulders.
17 A He carries a leather satchel.
18 D MABEL [CONT'D]: We're closed to the public, sir.
19 D STRANGER: I need the line to Harrisburg.
20 D MABEL: That's the long-distance trunk. Company use only.
21 D STRANGER: It's urgent.
22 D MABEL: Everything is, at this hour.
23 A ¶ A new buzz.
24 A Another light.
25 A She ignores it.
26 D STRANGER: My name is Elias Crowe. I'm with the state railway board.
27 D MABEL: You have a paper that says so?
28 A ¶ He opens the satchel.
29 A Pulls out an envelope.
30 A She takes it, reads it by the lamp.
31 A Her face tightens.
32 D CROWE: It is in order.
33 D MABEL: It's a telegram form. Anyone can fill one out.
34 D CROWE: Then call the manager.
35 A ¶ She hesitates.
36 A Pulls a cord.
37 A Cranks a handle.
38 D MABEL (into headset): Mr. Abernathy? Sorry to wake you. There's a gentleman here.
39 A ¶ The earpiece crackles.
40 A A thin, irritable voice leaks into the room.
41 D ABERNATHY [V.O.]: At this hour? Is the building on fire?
42 D MABEL: No, sir. A man from the railway board.
43 D ABERNATHY [V.O.]: Tell him to come in the morning.
44 D CROWE (leaning toward her): Tell him it concerns the six-ten freight.
45 A ¶ Mabel's eyes flick up.
46 A She repeats it.
47 A ¶ A long silence on the line.
48 A Then Abernathy, quieter.
49 D ABERNATHY [V.O.]: Put him through. And Mabel. Plug in the sheriff's line too.
50 D MABEL: Sir?
51 D ABERNATHY [V.O.]: Do it.
52 A ¶ She obeys.
53 A Her hands are not quite steady now.
54 A ¶ The door opens again.
55 A TOBY, 12, the messenger boy, cap too big, bursts in dripping and out of breath.
56 D TOBY: Miss Mabel! Somebody cut the wire at the Calder bridge. Pa says the whole east line's dead.
57 A ¶ Crowe straightens.
58 A Mabel looks from the boy to the stranger.
59 D MABEL: Mr. Crowe. How did you know about the freight?
60 D CROWE: I don't know anything about wires.
61 D TOBY: Then why's your satchel got a coil of copper in it?
62 A ¶ Everyone looks.
63 A A bright loop of wire pokes out of the satchel.
64 A ¶ The board buzzes.
65 A Light after light.
66 A The sheriff's line clicks live.
67 D SHERIFF DUNMORE [V.O.]: Millbrook exchange. Dunmore. Who's there with you, Miss Przybylski?
68 A ¶ Mabel's hand rests on the key.
69 A She looks at Crowe.
70 A Crowe looks at the door.
71 D MABEL: Stay where you are, Mr. Crowe. Toby, lock that door.
72 D TOBY: Yes, ma'am.
73 A ¶ The bolt slides home.
74 A The lamp flickers.
75 A The board keeps buzzing.
