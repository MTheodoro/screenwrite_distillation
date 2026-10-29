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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusB/group_07003.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01095 | EXT. DRY GOAT PEN BEHIND A FORSAKEN CHURCH - EVENING
Detected names (may be incomplete or contain aliases): SHERIFF AUGUSTINE TREVINO, ABIGAIL FROST-MWANGI, JEREMIAH FROST
1 A ¶ 1878.
2 A Dust.
3 A A broken fence.
4 A A leaning cross.
5 A Three goats chew at nothing.
6 A ¶ SHERIFF AUGUSTINE TREVINO, 60s, tin star pinned crooked, stands over a shallow grave.
7 A Hat in his hands.
8 A ABIGAIL FROST-MWANGI, 30s, widow's black, holds a rusted shovel.
9 A Between them, a boy, JEREMIAH FROST, 10, squats by a goat and strokes its ear.
10 A ¶ The wind pushes a tumbleweed through the pen.
11 A Nobody watches it go.
12 D AUGUSTINE: Ma'am.
13 A ¶ Abigail doesn't turn.
14 A She sets the shovel against the fence.
15 A Dusts her palms on her skirt.
16 A One at a time.
17 D AUGUSTINE [CONT'D]: He'd have wanted a preacher.
18 D ABIGAIL: He'd have wanted his horse.
19 A ¶ Augustine nods.
20 A Looks at the cross.
21 A Looks at the boy.
22 A Jeremiah lifts a handful of dry grass for the goat.
23 D AUGUSTINE: I'll see to the horse.
24 D ABIGAIL: Don't trouble yourself.
25 D AUGUSTINE: No trouble.
26 A ¶ She takes the hat from his hands and sets it on the cross.
27 A The brim catches the wind.
28 A She weights it with a stone.
29 D ABIGAIL: That's his now.
30 A ¶ Augustine opens his mouth.
31 A Closes it.
32 A Pulls a folded paper from his vest and holds it out.
33 A She doesn't take it.
34 D ABIGAIL [CONT'D]: Read it to him.
35 A ¶ Augustine looks at the grave.
36 A Clears his throat.
37 A Doesn't read.
38 A He folds the paper smaller, crouches, and tucks it into the dirt beside the cross.
39 A ¶ Jeremiah stands, brushes his knees.
40 A Walks to his mother.
41 A Takes her hand.
42 A Together they look at the cross until the light turns orange.
43 A The goats wander off.

### SCENE s00010 | INT. FUNICULAR CONTROL HUT - NIGHT
Detected names (may be incomplete or contain aliases): OKSANA VOLKOV, DEZ, ACHEBE, MARGUERITE, BOOT, TARIQ BEN-HAIM
1 A ¶ A concrete box bolted to a mountainside.
2 A One window.
3 A Below it, the cable runs down into fog.
4 A ¶ OKSANA VOLKOV (40s, lean, grease on her cuffs) stands at a bank of dials.
5 A A wrench in her fist.
6 A She hasn't blinked in a while.
7 A ¶ DESMOND "DEZ" ACHEBE (30s, soaked parka, bad limp) sits on an overturned crate.
8 A A pistol rests on his knee.
9 A Not pointed.
10 A Not far from pointed.
11 A ¶ Between them on the floor: a canvas duffel, zipped.
12 D DEZ: Stop looking at the brake.
13 D OKSANA: I'm looking at the gauge.
14 D DEZ: You're looking at the brake.
15 A ¶ She lets the wrench drop to her side.
16 A Slowly.
17 D OKSANA: Car Two is stopped at the midpoint. Eleven people inside. Two of them are kids.
18 D DEZ: Then you better start it again when I say.
19 A ¶ The radio on the desk CRACKLES.
20 D MARGUERITE [V.O.] (radio, tinny): Hut, this is Base. Oksana, come in.
21 A ¶ Dez raises the pistol an inch.
22 A Oksana looks at it.
23 A Looks at the radio.
24 D DEZ: Say everything's fine.
25 A ¶ She lifts the handset.
26 A Thumbs the key.
27 D OKSANA: Base, Hut. Everything's fine.
28 D MARGUERITE [V.O.] (radio): Your readout says Car Two is holding. Why is Car Two holding?
29 D OKSANA: Wind shear. Routine.
30 D MARGUERITE [V.O.] (radio): There's no wind at the summit station. I'm looking at the flag.
31 A ¶ Dez stands.
32 A Limps one step closer.
33 A The pistol is level now.
34 D DEZ (low): Tell her to go home.
35 D OKSANA (into handset): Marguerite, finish your shift. I've got it.
36 A ¶ Silence on the line.
37 A Fog presses at the window.
38 D MARGUERITE [V.O.] (radio): Okay.
39 A ¶ Click.
40 A Dead air.
41 A ¶ Dez exhales through his nose.
42 A Not relief.
43 A Arithmetic.
44 D DEZ: She's calling someone.
45 D OKSANA: She's calling the sheriff. Twenty minutes up the grade.
46 D DEZ: Then we have fifteen.
47 A ¶ He nudges the duffel with his boot.
48 D DEZ [CONT'D]: Open it.
49 D OKSANA: I don't want to see what's in it.
50 D DEZ: Open it.
51 A ¶ She kneels.
52 A Pulls the zipper.
53 A Inside: a hard-shell case, steel, handcuffed to a leather strap.
54 A She looks up.
55 D OKSANA: This is somebody's wrist strap.
56 D DEZ: It's somebody's problem.
57 A ¶ A BOOT scrapes outside.
58 A Both freeze.
59 A ¶ The door swings in.
60 A TARIQ BEN-HAIM (20s, uniform of the ski patrol, red jacket, wet to the skin) stands in the frame with his hands half raised.
61 A Snow in his eyebrows.
62 D TARIQ: Nobody told me the lift was down. I walked up the service road --
63 A ¶ He sees the pistol.
64 A Stops.
65 D DEZ: Close the door.
66 D TARIQ: Okay. Okay.
67 A ¶ He closes it.
68 A Stays against it.
69 D OKSANA (to Tariq, flat): Sit on the floor. Hands on your knees.
70 A ¶ Tariq sits.
71 A Careful, slow.
72 D DEZ: Who knows you're here?
73 D TARIQ: My radio's on channel six. It's always on.
74 A ¶ Dez looks at the red radio clipped to Tariq's vest.
75 A Crosses to him.
76 A Rips it free.
77 A Thumbs it off.
78 D DEZ: Now nobody does.
79 A ¶ From the desk, the base radio hisses again.
80 D MARGUERITE [V.O.] (radio): Oksana. I can see the headlights on the service road. Two sets. Don't tell me everything's fine.
81 A ¶ Dez turns.
82 A Slowly.
83 A Aims at the handset.
84 D OKSANA (quiet): Dez. If I don't answer, she calls it in as a hostage.
85 D DEZ: Then answer.
86 A ¶ She picks up the handset.
87 A Her thumb rests on the key but doesn't press it.
88 D OKSANA: What do I tell her?
89 A ¶ Dez's jaw works.
90 A Outside, far down the slope, an engine growls.
91 A Closer.
92 A Tires on gravel.
93 D DEZ: Tell her the truth. Tell her I want the car moving.
94 D OKSANA (keying): Marguerite. There's a man in the hut with a gun. He wants Car Two moving.
95 D MARGUERITE [V.O.] (radio): Copy. Then move it.
96 A ¶ Oksana stares at the handset.
97 A Tariq stares at Oksana.
98 D TARIQ: Ma'am, don't. The kids --
99 D DEZ: Shut up.
100 D OKSANA: Marguerite, say that again.
101 D MARGUERITE [V.O.] (radio): Move it. Slow. Sheriff's at the bottom station. Moving the car puts it in his hands.
102 A ¶ Dez's eyes go to the window.
103 A Headlights sweep across the fog.
104 A Then the glass goes white.
105 D DEZ: Don't.
106 A ¶ Oksana puts her palm on the lever.
107 D OKSANA: You can still walk out.
108 D DEZ: With what?
109 A ¶ He kicks the duffel toward her.
110 A Hard.
111 A It slides to her knees.
112 D DEZ [CONT'D]: Take it. Take the damn case.
113 A ¶ She doesn't move.
114 A Tariq doesn't move.
115 A The cable HUMS under load, waiting.
116 A ¶ Dez cocks the pistol.
117 D DEZ [CONT'D]: Pull it.
118 A ¶ She pulls.
119 A ¶ The whole hut SHUDDERS.
120 A Down in the fog, the cable begins to run.

### SCENE s01085 | INT. NIGHT LAUNDROMAT - 2 A.M.
Detected names (may be incomplete or contain aliases): IMOGEN LAU, SULEIMAN BAH
1 A ¶ Buzzing tubes.
2 A Twelve machines, all but two idle.
3 A A vending machine glows.
4 A Rain at the glass.
5 A Lint in the corners like snow.
6 A ¶ IMOGEN LAU, 30s, scrubs under a trench coat, sits on a folding table.
7 A Boots swinging.
8 A A paperback open and unread.
9 A Her dryer turns a single blue sock.
10 A ¶ SULEIMAN BAH, 30s, tall, soft cardigan, loads a washer.
11 A Careful with each shirt.
12 A He folds one before he puts it in.
13 A ¶ Silence.
14 A ¶ Her eyes flick to him.
15 A His hands pause on a collar.
16 A Resume.
17 D IMOGEN: You fold before you wash.
18 D SULEIMAN: Habit.
19 D IMOGEN: Strange habit.
20 D SULEIMAN: Strange hours.
21 A ¶ She turns a page she hasn't read.
22 A He shuts the washer.
23 A Coins.
24 A Click.
25 A Water starts.
26 D IMOGEN: You come here often?
27 D SULEIMAN: Tuesdays.
28 D IMOGEN: It's Thursday.
29 A ¶ He looks at the dryer.
30 A At the single blue sock.
31 D SULEIMAN: Missed a Tuesday.
32 A ¶ She nods.
33 A Watches the sock tumble.
34 A He leans against the washer.
35 A Not too close.
36 A Not far.
37 D IMOGEN: Night shift?
38 D SULEIMAN: Nurse. You?
39 D IMOGEN: Same.
40 D SULEIMAN: Which floor?
41 D IMOGEN: Fourth.
42 D SULEIMAN: Third.
43 A ¶ A beat.
44 A The washer sloshes.
45 A The vending machine hums.
46 A She taps her book.
47 D IMOGEN: We've never met.
48 D SULEIMAN: We passed on the stairs. Once.
49 D IMOGEN: Did we?
50 D SULEIMAN: You had a croissant.
51 A ¶ She almost smiles.
52 A Hides it with the book.
53 A He picks a coin from his palm and rolls it across his knuckles.
54 D IMOGEN: That was a bad day.
55 D SULEIMAN: It was a good croissant.
56 A ¶ The dryer buzzes.
57 A She hops down.
58 A Opens it.
59 A Pulls out the sock.
60 A Looks at it.
61 A At him.
62 D IMOGEN: Don't suppose you've lost one.
63 A ¶ He reaches into his cardigan pocket.
64 A Pulls out a blue sock.
65 A The match.
66 A ¶ They hold the two socks side by side.
67 A Neither says anything.
68 D IMOGEN [CONT'D]: Tuesday?
69 D SULEIMAN: Tuesday.
70 A ¶ She sets her sock in his palm.
71 A Their fingers do not touch.
72 A Almost.
73 A She picks up her book and walks out into the rain without her coat.

### SCENE s01093 | INT. DRIVE-IN PROJECTION BOOTH - TWILIGHT
Detected names (may be incomplete or contain aliases): PEGGY LOUISE WALDROP, TUCKER WALDROP, ABERNATHY
1 A ¶ A cramped booth over an empty lot.
2 A Film canisters.
3 A A coffee can of cigarette butts.
4 A Through the small window, rows of silent cars waiting in the dusk.
5 A ¶ PEGGY LOUISE WALDROP, 17, in a pressed uniform, threads a reel with practiced fingers while her younger brother TUCKER WALDROP, 12, sits on a stool kicking his heels, a comic book on his knee.
6 A Between them, MR. ABERNATHY, 60s, the theater owner, in a short-sleeved shirt and bow tie, checks his pocket watch, taps the projector's housing, and sets a thermos by the door.
7 D MR. ABERNATHY: Seven forty. Start her at eight sharp.
8 D PEGGY: Yes, sir.
9 D MR. ABERNATHY: And Peggy, no repeats of last week.
10 D PEGGY: It wasn't my fault, sir. The reel was upside down.
11 D MR. ABERNATHY: Mm.
12 A ¶ He nods, pats Tucker on the head, and leaves.
13 A His footsteps fade down the iron stairs.
14 A Tucker turns a page.
15 A Peggy finishes lacing the film and flips a switch.
16 A The lamp hums warm.
17 D TUCKER: Is he gone?
18 D PEGGY: He's gone.
19 D TUCKER: Good.
20 A ¶ He slides the comic book aside and pulls a rumpled envelope from his shirt.
21 A Hands it up without looking at her.
22 A Peggy takes it.
23 A Turns it over.
24 A Her name in his careful block capitals.
25 D PEGGY: What's this?
26 D TUCKER: Open it.
27 A ¶ She does.
28 A Inside, a ticket stub and a folded strip of paper.
29 A She unfolds it.
30 A Her breath catches.
31 D TUCKER [CONT'D]: They called the house. About the scholarship.
32 D PEGGY: Tucker.
33 D TUCKER: You got in.
34 A ¶ She sits down hard on the other stool.
35 A Reads the strip again.
36 A Her thumb pauses over the signature at the bottom.
37 A ¶ Down in the lot, the cars dim their lights.
38 A A horn toots, impatient.
39 A Tucker watches her face.
40 D PEGGY (quietly): Don't tell Dad.
41 D TUCKER: He already knows.
42 D PEGGY: What?
43 D TUCKER: He read it first. Then he put it back.
44 A ¶ She stares at him.
45 A Then at the window, where the first car's headlights flick on and off in a signal.
46 A She wipes her eyes with the back of her wrist.
47 A Stands.
48 A Presses the switch.
49 A ¶ The projector clatters to life.
50 A A beam cuts across the lot and lands on the screen: a bright gold title card.
51 D PEGGY [CONT'D] (not looking at him): Hand me the next reel.
52 A ¶ Tucker slides it across.
53 A His fingers brush hers.
54 A She takes it, careful, and sets it beside the first.

### SCENE s01031 | EXT. SUNSET GARDENS RETIREMENT HOME - BOCCE COURT - DAY
Detected names (may be incomplete or contain aliases): BERTIE, MOSCATO, LOU, GENOVESE, HIRO NAKAMURA, DORIS PELLEGRINO, SKIP, TATE
1 A ¶ Crushed oyster-shell lane, green benches, a hand-painted banner: LEAGUE FINALS.
2 A Folding chairs full of cardigans.
3 A ¶ ALBERTINA "BERTIE" MOSCATO, 80, pearls, steel spine, rolls her wrist like a bishop blessing.
4 A LOU "THE HAMMER" GENOVESE, 82, undershirt, arms like cured hams, glares from the other end.
5 A ¶ Bertie lets fly.
6 A The ball skims, kisses the pallino.
7 A Applause.
8 D BERTIE: Beat that, Hammer!
9 D LOU: I've beaten better, Bertie!
10 A ¶ HIRO NAKAMURA, 78, referee, pressed shirt, kneels with a tape measure.
11 A He measures.
12 A Looks up.
13 D HIRO: Bertie leads by half an inch.
14 A ¶ DORIS PELLEGRINO, 75, Lou's partner, sun visor, mutters.
15 D DORIS: Half an inch. I've had longer lunches.
16 A ¶ Lou steps to the line.
17 A Spits on his palm.
18 A Rolls.
19 A The ball veers left, strikes Bertie's ball, scatters it.
20 A The crowd gasps.
21 D LOU: Ha!
22 D BERTIE: Cheat!
23 D HIRO: Legal. Lou leads.
24 A ¶ ORVILLE "SKIP" TATE, 85, Bertie's partner, wheelchair, a blanket across his knees, rolls up.
25 D SKIP: Bertie, you owe me three dollars if you lose.
26 D BERTIE: Skip, I never lose.
27 D SKIP: Ninety-one losses, Bertie. I counted.
28 D BERTIE: Quiet, you old goat.
29 A ¶ She picks up the last ball.
30 A Stares down the court.
31 A Quiet descends.
32 A A wind chime tinkles.
33 A ¶ She steps.
34 A Swings.
35 A Lets go.
36 A ¶ The ball curves, ticks the fence, rolls, and stops dead against the pallino.
37 A ¶ Silence.
38 A Then an uproar.
39 D DORIS: Hiro, it's wood. Look at the grain!
40 D HIRO: Bertie wins.
41 D LOU (low): Rematch.
42 D BERTIE: Next Sunday, Hammer. Bring your checkbook.

### SCENE pd_sisters_5 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHARLOTTA, LUBOV ANDREYEVNA, VARYA, PISCHIN, TROFIMOV, YASHA
1 D CHARLOTTA: Ein, zwei, drei .
2 A ¶ She quickly lifts up the shawl, which is hanging down.
3 A ANYA is standing behind it; she bows and runs to her mother, hugs her and runs back to the drawing-room amid general applause.
4 A ¶ Applauds.
5 D LUBOV: Bravo, bravo!
6 D CHARLOTTA: Once again! Ein, zwei, drei !
7 A ¶ Lifts the shawl.
8 A VARYA stands behind it and bows.
9 A ¶ Astonished.
10 D PISCHIN: Think of that, now.
11 D CHARLOTTA: The end!
12 A ¶ Throws the shawl at PISCHIN, curtseys and runs into the drawing-room.
13 A ¶ Runs after her.
14 D PISCHIN: Little wretch.... What? Would you?
15 A ¶ Exit.
16 D LUBOV: Leonid hasn’t come yet. I don’t understand what he’s doing so long in town! Everything must be over by now. The estate must be sold; or, if the sale never came off, then why does he stay so long?
17 A ¶ Tries to soothe her.
18 D VARYA: Uncle has bought it. I’m certain of it.
19 A ¶ Sarcastically.
20 D TROFIMOV: Oh, yes!
21 D VARYA: Grandmother sent him her authority for him to buy it in her name and transfer the debt to her. She’s doing it for Anya. And I’m certain that God will help us and uncle will buy it.
22 D LUBOV: Grandmother sent fifteen thousand roubles from Yaroslav to buy the property in her name--she won’t trust us--and that wasn’t even enough to pay the interest.
23 A ¶ Covers her face with her hands.
24 D LUBOV: My fate will be settled to-day, my fate....
25 A ¶ Teasing VARYA.
26 D TROFIMOV: Madame Lopakhin!
27 A ¶ Angry.
28 D VARYA: Eternal student! He’s already been expelled twice from the university.
29 D LUBOV: Why are you getting angry, Varya? He’s teasing you about Lopakhin, well what of it? You can marry Lopakhin if you want to, he’s a good, interesting man.... You needn’t if you don’t want to; nobody wants to force you against your will, my darling.
30 D VARYA: I do look at the matter seriously, little mother, to be quite frank. He’s a good man, and I like him.
31 D LUBOV: Then marry him. I don’t understand what you’re waiting for.
32 D VARYA: I can’t propose to him myself, little mother. People have been talking about him to me for two years now, but he either says nothing, or jokes about it. I understand. He’s getting rich, he’s busy, he can’t bother about me. If I had some money, even a little, even only a hundred roubles, I’d throw up everything and go away. I’d go into a convent.
33 D TROFIMOV: How nice!
34 A ¶ To TROFIMOV.
35 D VARYA: A student ought to have sense!
36 A ¶ Gently, in tears.
37 D VARYA: How ugly you are now, Peter, how old you’ve grown!
38 A ¶ To LUBOV ANDREYEVNA, no longer crying.
39 D VARYA: But I can’t go on without working, little mother. I want to be doing something every minute.
40 A ¶ Enter YASHA.
41 A ¶ Nearly laughing.
42 D YASHA: Epikhodov’s broken a billiard cue!
43 A ¶ Exit.
44 D VARYA: Why is Epikhodov here? Who said he could play billiards? I don’t understand these people.
45 A ¶ Exit.
46 D LUBOV: Don’t tease her, Peter, you see that she’s quite unhappy without that.
47 D TROFIMOV: She takes too much on herself, she keeps on interfering in other people’s business. The whole summer she’s given no peace to me or to Anya, she’s afraid we’ll have a romance all to ourselves. What has it to do with her? As if I’d ever given her grounds to believe I’d stoop to such vulgarity! We are above love.

### SCENE s01046 | INT. VOSSBERG & CRANE - EXECUTIVE NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE ADEYEMI, MALCOLM VOSSBERG
1 A ¶ Six sleek pods, each shaped like a lacquered egg.
2 A Soft ambient chimes.
3 A A sign on the wall: REST IS RESULTS.
4 A ¶ PRUDENCE ADEYEMI, 40s, in a pressed navy suit, stands outside pod three.
5 A She has been standing there a long time.
6 A Her phone is in her hand, screen dark.
7 A ¶ MALCOLM VOSSBERG, 50s, in shirtsleeves, tie loosened to a politician's disarray, emerges from pod four rubbing his eyes.
8 A He sees her.
9 A He smiles.
10 A He is not surprised.
11 D MALCOLM: Prudence. I thought you'd gone home.
12 D PRUDENCE: I did.
13 D MALCOLM: Then you came back.
14 D PRUDENCE: For my coat.
15 A ¶ She doesn't move toward the coat rack.
16 A He does.
17 A He lifts her coat off a hook, holds it out.
18 A She takes it.
19 A Doesn't put it on.
20 D MALCOLM: Rough week.
21 D PRUDENCE: It's Thursday.
22 D MALCOLM: Rough Thursday.
23 A ¶ He adjusts a pod's dial.
24 A The chimes change key.
25 D MALCOLM [CONT'D]: The numbers will be fine. They always are.
26 D PRUDENCE: Are they?
27 D MALCOLM: You doubt me?
28 D PRUDENCE: I doubt the spreadsheet.
29 D MALCOLM: It's your spreadsheet.
30 D PRUDENCE: It's the one you rewrote.
31 A ¶ Silence.
32 A The chimes continue.
33 A A faint hiss of oxygen from the pods.
34 D MALCOLM: I thought you'd appreciate the efficiency.
35 D PRUDENCE: Efficiency.
36 D MALCOLM: Streamlining.
37 A ¶ Prudence folds her coat over her arm.
38 A Folds it a second time.
39 A Smooths it flat with both hands, too carefully.
40 D PRUDENCE: I'll be in my office.
41 D MALCOLM: You were just leaving.
42 D PRUDENCE: I changed my mind.
43 A ¶ He nods.
44 A Looks at the pod.
45 A Looks at her.
46 D MALCOLM: Sleep on it. That's what these are for.
47 A ¶ She turns, walks to the door.
48 A Pauses with one hand on the frame.
49 D PRUDENCE: Do you sleep in there?
50 D MALCOLM: Every day.
51 D PRUDENCE: And dream?
52 D MALCOLM: Never.
53 D PRUDENCE: That's what I thought.
54 A ¶ She leaves.
55 A He watches the door close, then climbs back into pod four and seals the lid.

### SCENE s01058 | INT. BARBERSHOP - SAGUARO FLATS - AFTERNOON
Detected names (may be incomplete or contain aliases): COLTER BANKS, MAGDALENA REYES
1 A ¶ One chair, one mirror, one spittoon.
2 A Sun lances through the front window.
3 A A fly drones against the glass.
4 A ¶ COLTER BANKS, 40s, barber, sleeves rolled, strops a razor.
5 A In the chair, MAGDALENA REYES, 30s, trail dust on her coat, a gun belt buckled low, lies back with a hot towel on her face.
6 D COLTER: Haircut or shave?
7 D MAGDALENA (muffled): Shave.
8 D COLTER: You've got no beard, ma'am.
9 D MAGDALENA: Then it'll be quick.
10 A ¶ He chuckles.
11 A Lifts the towel.
12 A Her eyes are closed.
13 A She doesn't smile.
14 D COLTER [CONT'D]: Nice town, isn't it?
15 D MAGDALENA: Quiet.
16 D COLTER: Quiet's good for business.
17 D MAGDALENA: Not for yours.
18 D COLTER: I don't need a crowd. Just a few regulars.
19 D MAGDALENA: Like Sheriff Haynes.
20 A ¶ His strop stops mid-stroke.
21 D COLTER: You know the sheriff?
22 D MAGDALENA: I know his boots. They're on your wall. Left side, behind the broom.
23 A ¶ Colter's eyes flick to the corner.
24 A A pair of polished boots, neat, side by side, dusty at the toes.
25 D COLTER: Left them here weeks ago. Said he'd be back.
26 D MAGDALENA: He won't.
27 D COLTER: Is that a fact.
28 D MAGDALENA: It's a fact, Colter.
29 A ¶ He sets the razor on the counter.
30 A Picks up a comb.
31 A Combs her hair with sudden care.
32 D COLTER: I never told you my name.
33 D MAGDALENA: It's on the window.
34 D COLTER: Right.
35 A ¶ He combs.
36 A She waits.
37 A The fly buzzes.
38 A Out in the street, a dog barks, stops.
39 D COLTER [CONT'D]: Is there something I should know?
40 D MAGDALENA: I'm going to ask you a question, and I want you to answer it honestly.
41 D COLTER: All right.
42 D MAGDALENA: Where's the sheriff?
43 D COLTER: Out of town.
44 D MAGDALENA: Where?
45 D COLTER: Does it matter?
46 D MAGDALENA: It's my brother who sent him.
47 A ¶ Colter's hand stops on her scalp.
48 A The comb freezes.
49 D COLTER: Your brother?
50 D MAGDALENA: Santiago Reyes. Brown horse. Left ear notched.
51 D COLTER: I don't--
52 D MAGDALENA: Sheriff Haynes rode out of here with him and his saddlebags and came back with only the horse.
53 A ¶ Colter steps away from the chair.
54 A She opens her eyes.
55 A Calm.
56 A Cold.
57 D COLTER: Ma'am, I'm only a barber.
58 D MAGDALENA: You're a man with a bad shave and a good alibi.
59 D COLTER: I don't understand.
60 D MAGDALENA: Look in the mirror.
61 A ¶ He does.
62 A Behind him, in the glass, the front door has quietly opened.
63 A A pair of boots on the threshold.
64 A The sheriff's, or the same cut.
65 D MAGDALENA [CONT'D] (without turning): Close the door, Colter. Sit down.
66 A ¶ He sits.
67 A His hands are shaking.
68 A She rises, rolls her sleeves, and takes the razor from the counter.
69 A Tests the edge with her thumb.
70 D MAGDALENA [CONT'D]: Now. Let's have that talk.

### SCENE s01059 | INT. LOGGING CAMP MESS HALL - ARBITRATION HEARING - DAY
Detected names (may be incomplete or contain aliases): PETRA ILLES, REGINALD TOLLIVER, OTTOLINE FRYE, CLERK, ABIODUN SHOLA
1 A ¶ Long pine tables pushed into a U. Axes on hooks.
2 A Snow outside the windows.
3 A A coffee urn steams in the corner.
4 A ¶ PETRA ILLES, 40s, plaid jacket over blazer, stands at the head of the U. REGINALD TOLLIVER, 50s, three-piece suit, sits opposite her with his hands steepled.
5 A OTTOLINE FRYE, 60s, the foreman, sits in the witness chair, a rifle-green parka zipped to her chin.
6 D PETRA: Ms. Frye. Who signed off on the timber survey?
7 D OTTOLINE: I did.
8 D PETRA: Did you walk the ridge?
9 D OTTOLINE: Not myself.
10 D PETRA: Then how?
11 D REGINALD: Objection. Foundation.
12 D PETRA: She's the foreman.
13 D REGINALD: She's not a surveyor.
14 D OTTOLINE: I know a tree when I see one.
15 D PETRA: Did you see this one?
16 D OTTOLINE: I saw the stump.
17 D PETRA: And the stump said?
18 D REGINALD: Objection!
19 A ¶ The door bangs.
20 A A CLERK, 20s, snow on his hat, hurries in with a folder, ducking as though the rafters were low.
21 A ABIODUN SHOLA, per the badge on his coat.
22 A Everyone looks.
23 D ABIODUN: Sorry. Sorry. Urgent filing.
24 D PETRA: Mr. Shola, we're in session.
25 D ABIODUN: It's about the ridge.
26 D REGINALD: Whose side is this?
27 D ABIODUN: Yours, I think. Or hers.
28 A ¶ He slaps the folder on the table between them.
29 A Petra and Reginald reach for it.
30 D PETRA: Give me that.
31 D REGINALD: Give me that.
32 A ¶ They stop.
33 A Both draw back.
34 A Ottoline takes the folder, opens it.
35 A Reads.
36 D OTTOLINE (slowly): That ridge was never ours.
37 A ¶ The mess hall goes quiet.
38 A Even the coffee urn seems to stop bubbling.

### SCENE s01040 | INT. TERMINATOR GREENHOUSE - TIDALLY LOCKED WORLD - TWILIGHT
Detected names (may be incomplete or contain aliases): ILSA VANTONGEREN, BRAM, QUILLON, SEPHORA
1 A ¶ A long glass nave on the border between day and night.
2 A To the east, a white-hot sun hangs unmoving.
3 A To the west, black sky and frozen plains.
4 A Inside, tomato vines climb silver wires, heavy with fruit.
5 A ¶ ILSA VANTONGEREN, 50s, botanist, hair wrapped in a faded scarf, kneels among the roots.
6 A She hums as she works, one hand cupping a green fruit like a held breath.
7 A ¶ BRAM, 20s, her apprentice, stands behind her.
8 A He holds a tablet and stares at it as if it had insulted him.
9 D BRAM: Ilsa. The heat sink is at ninety-four.
10 D ILSA: Ninety-four of what?
11 D BRAM: Percent.
12 A ¶ She rises slowly.
13 A Her knees crack.
14 A She doesn't look at the tablet.
15 A She looks at the glass.
16 D ILSA: It was ninety-one an hour ago.
17 D BRAM: I know.
18 D ILSA: Then why are you telling me like it's news?
19 A ¶ He swallows.
20 A He pockets the tablet.
21 A ¶ QUILLON, 30s, the colony's engineer, jogs down the nave, boots clanging on the grating.
22 A He is out of breath, face slick, goggles pushed up on his forehead.
23 D QUILLON: Ilsa! Bram! The shade array's jammed.
24 D ILSA: Jammed how?
25 D QUILLON: It won't rotate. The motor's seized.
26 D BRAM: Because of the heat?
27 D QUILLON: Because of a bolt. Someone put a bolt in the gear.
28 D ILSA: Someone?
29 D QUILLON: Or something.
30 A ¶ Dr. Sephora Oyama's voice crackles from a speaker in the roof.
31 D SEPHORA [V.O.]: Greenhouse, this is Medical. We have a patient with heat stroke in the corridor. Is anyone free to--
32 D ILSA (cutting in): We're busy.
33 D BRAM (over her): Send Quillon!
34 D QUILLON (over Bram): I can't, I'm needed here!
35 D SEPHORA [V.O.]: Please. She's asking for you, Ilsa.
36 A ¶ Ilsa stops.
37 A Her hand falls from the tomato.
38 A The vines rustle, as if the plants were leaning to listen.
39 D ILSA: Who is?
40 D SEPHORA [V.O.]: Your daughter.
41 A ¶ She turns to the glass.
42 A Stares at the white sun.
43 A Her shoulders fall, then straighten.
44 D ILSA: Bram. Take the tomatoes. All of them. Into the cold room.
45 D BRAM: All of them?
46 D ILSA: All. Quillon, fix the array. I don't care if you have to swing from it.
47 D QUILLON: And you?
48 D ILSA: I'm going to my daughter.
49 A ¶ She is already running.
50 A Her scarf comes loose and trails behind her like a flag.
51 A ¶ Bram watches her go.
52 A Quillon grabs his arm.
53 D QUILLON [CONT'D]: Come on. We've got maybe ten minutes.
54 D BRAM: Before what?
55 D QUILLON: Before the glass starts cracking.
56 A ¶ He is already moving.
57 A Bram scrambles after, arms full of fruit, tomatoes bouncing and rolling across the floor.

### SCENE pd_dollhouse_3 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HELMER, NORA, RANK
1 D HELMER: That’s right. Well, we will share it, Nora, as man and wife should. That is how it shall be.
2 A ¶ Caressing her.
3 D HELMER: Are you content now? There! There!—not these frightened dove’s eyes! The whole thing is only the wildest fancy!—Now, you must go and play through the Tarantella and practise with your tambourine. I shall go into the inner office and shut the door, and I shall hear nothing; you can make as much noise as you please.
4 A ¶ Turns back at the door.
5 D HELMER: And when Rank comes, tell him where he will find me.
6 A ¶ Nods to her, takes his papers and goes into his room, and shuts the door after him.
7 A ¶ bewildered with anxiety, stands as if rooted to the spot, and whispers.
8 D NORA: . He was capable of doing it. He will do it. He will do it in spite of everything.—No, not that! Never, never! Anything rather than that! Oh, for some help, some way out of it!
9 A ¶ The door-bell rings.
10 D NORA: Doctor Rank! Anything rather than that—anything, whatever it is!
11 A ¶ She puts her hands over her face, pulls herself together, goes to the door and opens it.
12 A RANK is standing without, hanging up his coat.
13 A During the following dialogue it begins to grow dark.
14 D NORA: Good day, Doctor Rank. I knew your ring. But you mustn’t go in to Torvald now; I think he is busy with something.
15 D RANK: And you?
16 A ¶ brings him in and shuts the door after him.
17 D NORA: . Oh, you know very well I always have time for you.
18 D RANK: Thank you. I shall make use of as much of it as I can.
19 D NORA: What do you mean by that? As much of it as you can?
20 D RANK: Well, does that alarm you?
21 D NORA: It was such a strange way of putting it. Is anything likely to happen?
22 D RANK: Nothing but what I have long been prepared for. But I certainly didn’t expect it to happen so soon.
23 A ¶ gripping him by the arm.
24 D NORA: . What have you found out? Doctor Rank, you must tell me.
25 A ¶ sitting down by the stove.
26 D RANK: . It is all up with me. And it can’t be helped.
27 A ¶ with a sigh of relief.
28 D NORA: . Is it about yourself?
29 D RANK: Who else? It is no use lying to one’s self. I am the most wretched of all my patients, Mrs Helmer. Lately I have been taking stock of my internal economy. Bankrupt! Probably within a month I shall lie rotting in the churchyard.
30 D NORA: What an ugly thing to say!
31 D RANK: The thing itself is cursedly ugly, and the worst of it is that I shall have to face so much more that is ugly before that. I shall only make one more examination of myself; when I have done that, I shall know pretty certainly when it will be that the horrors of dissolution will begin. There is something I want to tell you. Helmer’s refined nature gives him an unconquerable disgust at everything that is ugly; I won’t have him in my sick-room.
32 D NORA: Oh, but, Doctor Rank—
33 D RANK: I won’t have him there. Not on any account. I bar my door to him. As soon as I am quite certain that the worst has come, I shall send you my card with a black cross on it, and then you will know that the loathsome end has begun.
34 D NORA: You are quite absurd today. And I wanted you so much to be in a really good humour.
35 D RANK: With death stalking beside me?—To have to pay this penalty for another man’s sin? Is there any justice in that? And in every single family, in one way or another, some such inexorable retribution is being exacted—
36 A ¶ putting her hands over her ears.
37 D NORA: . Rubbish! Do talk of something cheerful.
38 D RANK: Oh, it’s a mere laughing matter, the whole thing. My poor innocent spine has to suffer for my father’s youthful amusements.
39 A ¶ sitting at the table on the left.
40 D NORA: . I suppose you mean that he was too partial to asparagus and pate de foie gras, don’t you?
41 D RANK: Yes, and to truffles.
42 D NORA: Truffles, yes. And oysters too, I suppose?
43 D RANK: Oysters, of course, that goes without saying.
44 D NORA: And heaps of port and champagne. It is sad that all these nice things should take their revenge on our bones.
45 D RANK: Especially that they should revenge themselves on the unlucky bones of those who have not had the satisfaction of enjoying them.
46 D NORA: Yes, that’s the saddest part of it all.
47 A ¶ with a searching look at her.

### SCENE s01068 | INT. DANCE MARATHON HALL - NIGHT (1932)
Detected names (may be incomplete or contain aliases): EVELYN PRATT, JACK HOLLISTER
1 A ¶ A cavernous ballroom, plank floor, paper streamers gone limp.
2 A Hour 487.
3 A A banner reads LAST COUPLE STANDING WINS $1,000.
4 A The couples have gone to their cots.
5 A A gramophone scratches out one slow waltz to an empty floor.
6 A ¶ EVELYN PRATT, 20s, in a tattered satin dress, shoes in her hand, sways alone in the middle of the boards.
7 A Eyes closed.
8 D EVELYN (to the empty hall): Anybody got a cigarette?
9 A ¶ No answer.
10 A Gramophone crackle.
11 D EVELYN [CONT'D] (muttering): Four hundred eighty-seven hours. And the only thing that moves is the record.
12 A ¶ A cot creaks in the shadows.
13 A A match flares.
14 A JACK HOLLISTER, 20s, in a wilted white shirt, pushes himself off a bench and shuffles into the light, a cigarette between his lips.
15 D JACK: Here.
16 A ¶ He offers it.
17 A She takes a drag.
18 A Gives it back.
19 D EVELYN: Thanks. You were sleeping.
20 D JACK: I was resting my eyes.
21 D EVELYN: In a dance marathon.
22 D JACK: It's called pacing.
23 A ¶ She laughs.
24 A It wakes him a little.
25 A He sets the cigarette on the edge of the gramophone and holds out one hand.
26 D JACK [CONT'D]: Fifteen minutes left on the clock.
27 D EVELYN: Then dance with me.
28 D JACK: I thought you'd never ask.
29 A ¶ She drops her shoes.
30 A Takes his hand.
31 A They begin to turn, slow, a little off the beat.
32 D EVELYN: If we win, what will you do with a thousand dollars?
33 D JACK: Buy a hat.
34 D EVELYN: That's all?
35 D JACK: A nice hat.
36 D EVELYN: And me?
37 D JACK: You'd get a better hat.
38 A ¶ They both begin to say the same line.
39 D EVELYN: I'd dance another four hundred hours for you.
40 D JACK: I'd dance another four hundred hours for you.
41 A ¶ They stop.
42 A Both startled.
43 A Then, softly, they laugh.
44 D EVELYN [CONT'D]: Don't promise. Just hold on.
45 A ¶ He holds her.
46 A The gramophone skips and keeps going.

### SCENE s01063 | INT. MUSEUM OF CLOCKS - GREAT HALL - NIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA VOSS, BARTHOLOMEW QUILL, KENJI AOKI, DESPINA ARVANITIS, LOOKOUT
1 A ¶ A hundred timepieces, each telling a different hour.
2 A Grandfather cases line the walls like sentries.
3 A Pendulums swing out of rhythm, ticks overlapping in a thin, endless rain.
4 A At the center, under a glass dome, a gilded astronomical clock the size of a carriage glitters, its planets frozen mid-orbit.
5 A ¶ Five minutes to midnight.
6 A The building is dark, sleeping.
7 A ¶ In the shadow of a long-case clock, four figures crouch like cats.
8 A ¶ SERAPHINA VOSS, 40s, in black from throat to ankle, headlamp dimmed to a red coin, leads.
9 A At her shoulder, BARTHOLOMEW QUILL, 60s, silk scarf, gloved fingers unscrewing the cover plate of a wall panel.
10 A KENJI AOKI, 20s, in a catering uniform with a pocketed screwdriver, carries a coil of fiber cable.
11 A DESPINA ARVANITIS, 30s, enormous eyes, a stethoscope hanging from her neck, taps a glass case with the delicacy of a safecracker.
12 A ¶ A small radio crackles from Seraphina's belt.
13 D LOOKOUT [V.O.] (whispering): Guard's on the east stairs. Two minutes.
14 D SERAPHINA (low): Understood.
15 D BARTHOLOMEW: Panel's open.
16 D KENJI: Wires are color-coded.
17 D BARTHOLOMEW: Ignore the colors. Follow the dust.
18 D KENJI: Why?
19 D BARTHOLOMEW: The ones that move are the ones they trust.
20 A ¶ Kenji nods.
21 A Pinches a wire.
22 A Clips it.
23 D DESPINA: Seraphina. The dome has a second lock.
24 D SERAPHINA: Meaning?
25 D DESPINA: Meaning it listens.
26 A ¶ She presses the stethoscope to the glass.
27 A Closes her eyes.
28 A Her whole body bends toward the sound.
29 A ¶ Tick, tick, tick, tick.
30 D DESPINA [CONT'D] (whispering): It's counting. Three seconds to a click.
31 D BARTHOLOMEW: Can you match it?
32 D DESPINA: I can try.
33 A ¶ She slides a slim tool beneath the dome's rim.
34 A Waits.
35 A A pendulum on the east wall swings out.
36 A Another answers.
37 A ¶ Tick.
38 A Click.
39 A A pin falls.
40 D LOOKOUT [V.O.]: One minute. He's at the landing.
41 D SERAPHINA: Go.
42 A ¶ Despina lifts the dome.
43 A Slow, trembling.
44 A It rises on invisible springs, a hush of glass.
45 A The planets of the clock gleam, close enough to touch.
46 A ¶ Kenji slides a velvet bag under the gilded sun and eases it free.
47 A The gears whisper once.
48 A Then still.
49 D BARTHOLOMEW (hushed): It's heavier than it looks.
50 D KENJI: They always are.
51 D LOOKOUT [V.O.]: Thirty seconds!
52 D SERAPHINA: Seal it. Back to the wall.
53 A ¶ They snap the dome back down.
54 A The pin settles.
55 A The clock gleams behind its glass, minus one small golden sun.
56 A ¶ Somewhere in the hall, a bell tolls.
57 A Midnight.
58 A Every clock in the museum begins to strike, a hundred chimes, a hundred hours, clamor and swell.
59 A ¶ The four crouch, hands over ears, as the hall rings around them like a cathedral.
60 A The guard's footsteps, if any, are drowned entirely.
61 D KENJI (laughing, shouting): That's the best alarm I ever heard!
62 D SERAPHINA: Quiet!
63 A ¶ The last chime fades.
64 A Silence, then a single tick, then a hundred.
65 D LOOKOUT [V.O.]: He's gone to the west wing. You're clear.
66 A ¶ Bartholomew exhales.
67 A Despina leans on the long-case clock, trembling and grinning.
68 A Kenji laughs without sound.
69 A Seraphina lets go of the radio.
70 D SERAPHINA: Walk. Don't run. Let's go home.

### SCENE s01026 | INT. GENERATION SHIP "TERRAPIN" - HYDROPONIC LAUNDRY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA VOSS, KOJI TANABE, AMARA OKELLO, TERRAPIN, PELL
1 A ¶ A warm, humid hold.
2 A Rows of lettuce racks climb the walls under violet grow-lamps.
3 A In the center, three washing drums turn, slow and patient.
4 A ¶ CAPTAIN ISADORA VOSS, 50s, silver braid, sleeves rolled, folds a coverall with military precision.
5 A Across from her, KOJI TANABE, 30s, engineer, grease on his cuffs, sits on a drum and stares at a handheld.
6 A ¶ DR. AMARA OKELLO, 40s, ship's physician, enters with a cart of sheets.
7 D AMARA: Captain. The night cycle is half over. You should rest.
8 D VOSS: I rest when the laundry is done.
9 D AMARA: It never is.
10 D VOSS: That's the beauty of it.
11 A ¶ Koji glances up.
12 A Back down.
13 D KOJI: Captain, I'm getting a drift on the aft coolant. Point two percent.
14 D VOSS: Over what?
15 D KOJI: Forty days.
16 D VOSS: Fix it.
17 D KOJI: I have. Three times.
18 A ¶ Voss sets the coverall down.
19 A Looks at him properly.
20 D VOSS: Then it's not drift.
21 D KOJI: No, ma'am.
22 A ¶ A soft chime.
23 A From the ceiling grille:
24 D TERRAPIN [V.O.]: Attention. Compartment seven pressure variance detected. Corrective action in progress.
25 D VOSS: Terrapin, which compartment is seven?
26 D TERRAPIN [V.O.]: The nursery.
27 A ¶ A beat.
28 A Amara's hand tightens on the cart.
29 D AMARA: How much variance?
30 D TERRAPIN [V.O.]: Point four kilopascals. Within tolerance.
31 D KOJI: Tolerance is point five.
32 D VOSS: Meaning we're one bad hour from not being within it.
33 A ¶ PELL, 19, galley apprentice, barefoot, slides in clutching a mop like a rifle.
34 D PELL: Captain! Somebody's in the cold lock. Banging on the inside.
35 D VOSS: Nobody's in the cold lock.
36 D PELL: I heard it.
37 D TERRAPIN [V.O.]: Cold lock occupancy: zero.
38 D PELL: Then why's it hitting back?
39 A ¶ The room goes still.
40 A Even the drums seem to slow.
41 A ¶ Then, faintly, from the far end of the hold: knock.
42 A Knock.
43 A Knock.
44 A A pause.
45 A Knock.
46 D AMARA: That's the code.
47 D VOSS: What code?
48 D AMARA: The medical one. Three, pause, one. Emergency.
49 D KOJI: Nobody's logged to the lock.
50 D VOSS: Terrapin, open the cold lock.
51 D TERRAPIN [V.O.]: Unable. Door sealed by order of Captain Voss.
52 D VOSS: I gave no such order.
53 D TERRAPIN [V.O.]: Issued four hundred days ago.
54 A ¶ Voss and Koji turn to look at each other.
55 A They speak at once.
56 D VOSS: Cancel the seal.
57 D KOJI: Cancel the seal!
58 D AMARA: Cancel the seal now!
59 D PELL (to nobody): I'm gonna throw up.
60 D TERRAPIN [V.O.]: Cancel denied. Reason: crew safety.
61 A ¶ The knocking quickens.
62 A Frantic.
63 A The cold lock door begins to frost over from the outside.
64 A ¶ Voss grabs a wrench off Koji's belt.
65 A Runs.
66 A The others follow.
67 A The drums turn on, spinning white sheets in empty light.

### SCENE s01080 | INT. MUNICIPAL ARBITRATION ROOM - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR SALAZAR-KIM, LAWYER DEWITT PIKE, YUSUPOVA
1 A ¶ Fake wood paneling.
2 A A humming vending machine in the corner.
3 A A conference table too big for the room.
4 A ¶ ARBITRATOR SALAZAR-KIM, 50s, bifocals, reads a file.
5 A Across from her sit LAWYER DEWITT PIKE, 40s, tie clip shaped like a gavel, and CLIENT MRS. YUSUPOVA, 70s, handbag on her lap.
6 A Pike clicks a pen.
7 A Mrs. Yusupova stares at the vending machine.
8 A Salazar-Kim turns a page, Pike clicks again, and Mrs. Yusupova opens her handbag, closes it, opens it.
9 D SALAZAR-KIM: Mr. Pike, your client claims the landlord shut off her heat for three winters.
10 D PIKE: Correct.
11 D SALAZAR-KIM: Mrs. Yusupova, is that accurate?
12 D MRS. YUSUPOVA: Cold. Always cold. I wear coat in kitchen.
13 D SALAZAR-KIM: And the landlord, Mr. Brandt, says he was never notified.
14 D PIKE: We have eleven letters.
15 D SALAZAR-KIM: Sent how?
16 D PIKE: Certified mail.
17 D MRS. YUSUPOVA: Also I knock his door. Many times.
18 D SALAZAR-KIM: Did he answer?
19 D MRS. YUSUPOVA: Once. He gave me blanket.
20 D PIKE: Your Honor, that's not relevant.
21 D SALAZAR-KIM: I'm an arbitrator, Mr. Pike. Not a Your Honor. And I'd like to hear about the blanket.
22 D MRS. YUSUPOVA: Gray. Scratchy. Smell like dog.
23 D SALAZAR-KIM (writing): Gray, scratchy, smelled like dog.
24 D PIKE: We'd ask for restitution of nine thousand dollars.
25 D SALAZAR-KIM: And the blanket?
26 D MRS. YUSUPOVA: Keep. Is warm.

### SCENE s01113 | INT. CRYO-VAULT - ORBITAL STATION - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER ODALYS REEVES-AKINTOLA, TECH SANTIAGO OYELARAN-WOO, DOCTOR MIRIAM BELLAMY, PIXIE
1 A ¶ Frost on steel.
2 A Rows of dark capsules.
3 A A single red indicator blinks.
4 A Breath hangs in the air.
5 A ¶ COMMANDER ODALYS REEVES-AKINTOLA, 40s, parka over her flight suit, kneels by capsule 17 and wipes frost from its window.
6 A Behind her, TECH SANTIAGO OYELARAN-WOO, 30s, scans a diagnostic panel.
7 A Over by the airlock, DOCTOR MIRIAM BELLAMY, 50s, lifts a medical scanner, and next to her a scruffy teenage stowaway, PIXIE, 15, shivers in a borrowed coat.
8 D SANTIAGO: Pod 17 is cold.
9 D ODALYS: Pod 17 is empty.
10 D MIRIAM: Then where is the occupant?
11 D PIXIE: Maybe he got up and left.
12 A ¶ Nobody laughs.
13 A Miriam lowers the scanner.
14 A Odalys stands slowly.
15 A Santiago taps the panel; the indicator blinks red.
16 D ODALYS: Open it.
17 D SANTIAGO: Ma'am --
18 D ODALYS: Open it.
19 A ¶ He presses the release.
20 A The capsule hisses.
21 A The lid lifts.
22 A Inside: a folded blanket, a child's drawing, a shut-off pulse monitor.
23 A ¶ Odalys picks up the drawing.
24 A Studies it.
25 A Her thumb smooths the paper's edge.
26 A Miriam steps closer, then stops.
27 A ¶ Pixie reaches for the monitor.
28 A Santiago catches her wrist, gently.
29 A She pulls away, embarrassed, and sits on the floor.
30 D ODALYS [CONT'D] (quiet): Seal it.
31 A ¶ Santiago closes the lid.
32 A The hiss fades.
33 A Miriam puts a hand on Odalys's shoulder.
34 A Odalys folds the drawing in half, then in half again, and slides it into her pocket.

### SCENE pd_dollhouse_0 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): NORA, PORTER, MAID, HELMER
1 A ¶ [SCENE.—A room furnished comfortably and tastefully, but not extravagantly.
2 A At the back, a door to the right leads to the entrance-hall, another to the left leads to Helmer’s study.
3 A Between the doors stands a piano.
4 A In the middle of the left-hand wall is a door, and beyond it a window.
5 A Near the window are a round table, arm-chairs and a small sofa.
6 A In the right-hand wall, at the farther end, another door; and on the same side, nearer the footlights, a stove, two easy chairs and a rocking-chair; between the stove and the door, a small table.
7 A Engravings on the walls; a cabinet with china and other small objects; a small book-case with well-bound books.
8 A The floors are carpeted, and a fire burns in the stove.
9 A It is winter.
10 A ¶ A bell rings in the hall; shortly afterwards the door is heard to open.
11 A Enter NORA, humming a tune and in high spirits.
12 A She is in outdoor dress and carries a number of parcels; these she lays on the table to the right.
13 A She leaves the outer door open after her, and through it is seen a PORTER who is carrying a Christmas Tree and a basket, which he gives to the MAID who has opened the door.]
14 D NORA: Hide the Christmas Tree carefully, Helen. Be sure the children do not see it until this evening, when it is dressed.
15 A ¶ To the PORTER, taking out her purse.
16 D NORA: How much?
17 D PORTER: Sixpence.
18 D NORA: There is a shilling. No, keep the change.
19 A ¶ The PORTER thanks her, and goes out.
20 A NORA shuts the door.
21 A She is laughing to herself, as she takes off her hat and coat.
22 A She takes a packet of macaroons from her pocket and eats one or two; then goes cautiously to her husband’s door and listens.
23 D NORA: Yes, he is in.
24 A ¶ Still humming, she goes to the table on the right.
25 A ¶ calls out from his room.
26 D HELMER: . Is that my little lark twittering out there?
27 A ¶ busy opening some of the parcels.
28 D NORA: . Yes, it is!
29 D HELMER: Is it my little squirrel bustling about?
30 D NORA: Yes!
31 D HELMER: When did my squirrel come home?
32 D NORA: Just now.
33 A ¶ Puts the bag of macaroons into her pocket and wipes her mouth.
34 D NORA: Come in here, Torvald, and see what I have bought.
35 D HELMER: Don’t disturb me.
36 A ¶ A little later, he opens the door and looks into the room, pen in hand.
37 D HELMER: Bought, did you say? All these things? Has my little spendthrift been wasting money again?
38 D NORA: Yes but, Torvald, this year we really can let ourselves go a little. This is the first Christmas that we have not needed to economise.
39 D HELMER: Still, you know, we can’t spend money recklessly.
40 D NORA: Yes, Torvald, we may be a wee bit more reckless now, mayn’t we? Just a tiny wee bit! You are going to have a big salary and earn lots and lots of money.
41 D HELMER: Yes, after the New Year; but then it will be a whole quarter before the salary is due.
42 D NORA: Pooh! we can borrow until then.
43 D HELMER: Nora!
44 A ¶ Goes up to her and takes her playfully by the ear.
45 D HELMER: The same little featherhead! Suppose, now, that I borrowed fifty pounds today, and you spent it all in the Christmas week, and then on New Year’s Eve a slate fell on my head and killed me, and—
46 A ¶ putting her hands over his mouth.
47 D NORA: . Oh! don’t say such horrid things.
48 D HELMER: Still, suppose that happened,—what then?
49 D NORA: If that were to happen, I don’t suppose I should care whether I owed money or not.
50 D HELMER: Yes, but what about the people who had lent it?
51 D NORA: They? Who would bother about them? I should not know who they were.
52 D HELMER: That is like a woman! But seriously, Nora, you know what I think about that. No debt, no borrowing. There can be no freedom or beauty about a home life that depends on borrowing and debt. We two have kept bravely on the straight road so far, and we will go on the same way for the short time longer that there need be any struggle.
53 A ¶ moving towards the stove.
54 D NORA: . As you please, Torvald.
55 A ¶ following her.
56 D HELMER: . Come, come, my little skylark must not droop her wings. What is this! Is my little squirrel out of temper?
57 A ¶ Taking out his purse.
58 D HELMER: Nora, what do you think I have got here?
59 A ¶ turning round quickly.

### SCENE pd_earnest_0 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): ALGERNON, LANE, JACK
1 A ¶ Morning-room in Algernon’s flat in Half-Moon Street.
2 A The room is luxuriously and artistically furnished.
3 A The sound of a piano is heard in the adjoining room.
4 A ¶ Lane is arranging afternoon tea on the table, and after the music has ceased, Algernon enters.
5 D ALGERNON: Did you hear what I was playing, Lane?
6 D LANE: I didn’t think it polite to listen, sir.
7 D ALGERNON: I’m sorry for that, for your sake. I don’t play accurately—any one can play accurately—but I play with wonderful expression. As far as the piano is concerned, sentiment is my forte. I keep science for Life.
8 D LANE: Yes, sir.
9 D ALGERNON: And, speaking of the science of Life, have you got the cucumber sandwiches cut for Lady Bracknell?
10 D LANE: Yes, sir.
11 A ¶ Hands them on a salver.
12 A ¶ Inspects them, takes two, and sits down on the sofa.
13 D ALGERNON: Oh! . . . by the way, Lane, I see from your book that on Thursday night, when Lord Shoreman and Mr. Worthing were dining with me, eight bottles of champagne are entered as having been consumed.
14 D LANE: Yes, sir; eight bottles and a pint.
15 D ALGERNON: Why is it that at a bachelor’s establishment the servants invariably drink the champagne? I ask merely for information.
16 D LANE: I attribute it to the superior quality of the wine, sir. I have often observed that in married households the champagne is rarely of a first-rate brand.
17 D ALGERNON: Good heavens! Is marriage so demoralising as that?
18 D LANE: I believe it is a very pleasant state, sir. I have had very little experience of it myself up to the present. I have only been married once. That was in consequence of a misunderstanding between myself and a young person.
19 A ¶ Languidly .
20 D ALGERNON: I don’t know that I am much interested in your family life, Lane.
21 D LANE: No, sir; it is not a very interesting subject. I never think of it myself.
22 D ALGERNON: Very natural, I am sure. That will do, Lane, thank you.
23 D LANE: Thank you, sir.
24 A ¶ Lane goes out.
25 D ALGERNON: Lane’s views on marriage seem somewhat lax. Really, if the lower orders don’t set us a good example, what on earth is the use of them? They seem, as a class, to have absolutely no sense of moral responsibility.
26 A ¶ Enter Lane.
27 D LANE: Mr. Ernest Worthing.
28 A ¶ Enter Jack.
29 A ¶ Lane goes out .
30 D ALGERNON: How are you, my dear Ernest? What brings you up to town?
31 D JACK: Oh, pleasure, pleasure! What else should bring one anywhere? Eating as usual, I see, Algy!
32 A ¶ Stiffly .
33 D ALGERNON: I believe it is customary in good society to take some slight refreshment at five o’clock. Where have you been since last Thursday?
34 A ¶ Sitting down on the sofa.
35 D JACK: In the country.
36 D ALGERNON: What on earth do you do there?
37 A ¶ Pulling off his gloves .
38 D JACK: When one is in town one amuses oneself. When one is in the country one amuses other people. It is excessively boring.
39 D ALGERNON: And who are the people you amuse?
40 A ¶ Airily .
41 D JACK: Oh, neighbours, neighbours.
42 D ALGERNON: Got nice neighbours in your part of Shropshire?
43 D JACK: Perfectly horrid! Never speak to one of them.
44 D ALGERNON: How immensely you must amuse them!
45 A ¶ Goes over and takes sandwich.
46 D ALGERNON: By the way, Shropshire is your county, is it not?
47 D JACK: Eh? Shropshire? Yes, of course. Hallo! Why all these cups? Why cucumber sandwiches? Why such reckless extravagance in one so young? Who is coming to tea?

### SCENE pd_dollhouse_4 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS LINDE, NORA, HELMER, RANK
1 D MRS LINDE: And your husband keeps the key?
2 D NORA: Yes, always.
3 D MRS LINDE: Krogstad must ask for his letter back unread, he must find some pretence—
4 D NORA: But it is just at this time that Torvald generally—
5 D MRS LINDE: You must delay him. Go in to him in the meantime. I will come back as soon as I can.
6 A ¶ She goes out hurriedly through the hall door.
7 A ¶ goes to HELMER’S door, opens it and peeps in.
8 D NORA: . Torvald!
9 A ¶ from the inner room.
10 D HELMER: . Well? May I venture at last to come into my own room again? Come along, Rank, now you will see—
11 A ¶ Halting in the doorway.
12 D HELMER: But what is this?
13 D NORA: What is what, dear?
14 D HELMER: Rank led me to expect a splendid transformation.
15 A ¶ in the doorway.
16 D RANK: . I understood so, but evidently I was mistaken.
17 D NORA: Yes, nobody is to have the chance of admiring me in my dress until tomorrow.
18 D HELMER: But, my dear Nora, you look so worn out. Have you been practising too much?
19 D NORA: No, I have not practised at all.
20 D HELMER: But you will need to—
21 D NORA: Yes, indeed I shall, Torvald. But I can’t get on a bit without you to help me; I have absolutely forgotten the whole thing.
22 D HELMER: Oh, we will soon work it up again.
23 D NORA: Yes, help me, Torvald. Promise that you will! I am so nervous about it—all the people—. You must give yourself up to me entirely this evening. Not the tiniest bit of business—you mustn’t even take a pen in your hand. Will you promise, Torvald dear?
24 D HELMER: I promise. This evening I will be wholly and absolutely at your service, you helpless little mortal. Ah, by the way, first of all I will just—
25 A ¶ Goes towards the hall door.
26 D NORA: What are you going to do there?
27 D HELMER: Only see if any letters have come.
28 D NORA: No, no! don’t do that, Torvald!
29 D HELMER: Why not?
30 D NORA: Torvald, please don’t. There is nothing there.
31 D HELMER: Well, let me look.
32 A ¶ Turns to go to the letter-box.
33 A NORA, at the piano, plays the first bars of the Tarantella.
34 A HELMER stops in the doorway.
35 D HELMER: Aha!
36 D NORA: I can’t dance tomorrow if I don’t practise with you.
37 A ¶ going up to her.
38 D HELMER: . Are you really so afraid of it, dear?
39 D NORA: Yes, so dreadfully afraid of it. Let me practise at once; there is time now, before we go to dinner. Sit down and play for me, Torvald dear; criticise me, and correct me as you play.
40 D HELMER: With great pleasure, if you wish me to.
41 A ¶ Sits down at the piano.
42 A ¶ takes out of the box a tambourine and a long variegated shawl.
43 A She hastily drapes the shawl round her.
44 A Then she springs to the front of the stage and calls out.
45 D NORA: . Now play for me! I am going to dance!
46 A ¶ HELMER plays and NORA dances.
47 A RANK stands by the piano behind HELMER, and looks on.
48 A ¶ as he plays.
49 D HELMER: . Slower, slower!
50 D NORA: I can’t do it any other way.

### SCENE pd_sisters_3 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANFISA, VERSHININ, IRINA, OLGA, MASHA
1 A ¶ Kisses her.
2 D ANFISA: Well, little girl, here I am, still alive! Still alive! In the High School, together with little Olga, in her official apartments... so the Lord has appointed for my old age. Sinful woman that I am, I’ve never lived like that in my life before.... A large flat, government property, and I’ve a whole room and bed to myself. All government property. I wake up at nights and, oh God, and Holy Mother, there isn’t a happier person than I!
3 A ¶ Looks at his watch.
4 D VERSHININ: We are going soon, Olga Sergeyevna. It’s time for me to go.
5 A ¶ Pause.
6 D VERSHININ: I wish you every... every.... Where’s Maria Sergeyevna?
7 D IRINA: She’s somewhere in the garden. I’ll go and look for her.
8 D VERSHININ: If you’ll be so kind. I haven’t time.
9 D ANFISA: I’ll go and look, too.
10 A ¶ Shouts.
11 D ANFISA: Little Masha, co-ee!
12 A ¶ Goes out with IRINA down into the garden.
13 D ANFISA: Co-ee, co-ee!
14 D VERSHININ: Everything comes to an end. And so we, too, must part.
15 A ¶ Looks at his watch.
16 D VERSHININ: The town gave us a sort of farewell breakfast, we had champagne to drink and the mayor made a speech, and I ate and listened, but my soul was here all the time....
17 A ¶ Looks round the garden.
18 D VERSHININ: I’m so used to you now.
19 D OLGA: Shall we ever meet again?
20 D VERSHININ: Probably not.
21 A ¶ Pause.
22 D VERSHININ: My wife and both my daughters will stay here another two months. If anything happens, or if anything has to be done...
23 D OLGA: Yes, yes, of course. You need not worry.
24 A ¶ Pause.
25 D OLGA: To-morrow there won’t be a single soldier left in the town, it will all be a memory, and, of course, for us a new life will begin....
26 A ¶ Pause.
27 D OLGA: None of our plans are coming right. I didn’t want to be a head-mistress, but they made me one, all the same. It means there’s no chance of Moscow....
28 D VERSHININ: Well... thank you for everything. Forgive me if I’ve... I’ve said such an awful lot--forgive me for that too, don’t think badly of me.
29 A ¶ Wipes her eyes.
30 D OLGA: Why isn’t Masha coming...
31 D VERSHININ: What else can I say in parting? Can I philosophize about anything?
32 A ¶ Laughs.
33 D VERSHININ: Life is heavy. To many of us it seems dull and hopeless, but still, it must be acknowledged that it is getting lighter and clearer, and it seems that the time is not far off when it will be quite clear.
34 A ¶ Looks at his watch.
35 D VERSHININ: It’s time I went! Mankind used to be absorbed in wars, and all its existence was filled with campaigns, attacks, defeats, now we’ve outlived all that, leaving after us a great waste place, which there is nothing to fill with at present; but mankind is looking for something, and will certainly find it. Oh, if it only happened more quickly.
36 A ¶ Pause.
37 D VERSHININ: If only education could be added to industry, and industry to education.
38 A ¶ Looks at his watch.
39 D VERSHININ: It’s time I went....
40 D OLGA: Here she comes.
41 A ¶ Enter MASHA.
42 D VERSHININ: I came to say good-bye....
43 A ¶ OLGA steps aside a little, so as not to be in their way.
44 A ¶ Looking him in the face.
45 D MASHA: Good-bye.

### SCENE s01047 | EXT. SALT FLAT - ABANDONED STAGECOACH - HIGH NOON
Detected names (may be incomplete or contain aliases): MARSHAL CULLEN BRODERICK, DUTCH, LUPE VARGAS
1 A ¶ White to the horizon.
2 A Heat shimmer bends the sky.
3 A A stagecoach tilts on a broken axle, one wheel cocked in the crust.
4 A ¶ MARSHAL CULLEN BRODERICK, 50s, tin star, dust-gray duster, steps down from the coach, rifle across his arm, while behind him DUTCH, a lean outlaw in manacles, shuffles toward the shade, and LUPE VARGAS, 30s, the driver, slaps her hat against her knee, checks the horses, and mutters at the broken wheel, all three of them squinting at a dark speck on the horizon that keeps growing.
5 D CULLEN (to the others): Nobody run. There's nowhere to run to.
6 D DUTCH (low, to Cullen): Marshal, take these off me. If that's riders, I can shoot.
7 D CULLEN: No.
8 D LUPE (to herself): Three days. Three goddamn days of salt.
9 D CULLEN: Lupe. Water.
10 A ¶ She tosses him a canteen.
11 A He drinks, passes it to Dutch.
12 A Dutch drinks, passes it back.
13 A The speck becomes a rider.
14 D DUTCH: That's a lone horse.
15 D CULLEN: Could be a lone man.
16 D LUPE: Could be a mirage.
17 A ¶ The rider slows.
18 A Stops a hundred yards out.
19 A Raises a white cloth.
20 A Waves it.
21 A ¶ Cullen lowers the rifle.
22 A Dutch exhales.
23 A Lupe pulls her hat down.
