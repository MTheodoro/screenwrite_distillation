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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusC/group_13005.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s01116 | INT. VINEYARD CELLAR - BARREL ROOM - DUSK
Detected names (may be incomplete or contain aliases): IZABELLA ROMANO-OKAFOR, TEDDY, GALLOWAY, CAMILA ROMANO, HENRIK ABASI-LUND
1 A ¶ Oak barrels in rows.
2 A Candlelight.
3 A A tasting table with four glasses.
4 A ¶ IZABELLA ROMANO-OKAFOR, 30s, in a linen apron, pours.
5 A Across from her, THEODORE "TEDDY" GALLOWAY, 30s, her ex, swirls and sniffs.
6 A At the end of the table, her sister CAMILA ROMANO, 30s, in a sundress, studies him.
7 A And beside Camila, a quiet man, HENRIK ABASI-LUND, 40s, who has said nothing all evening.
8 A ¶ Teddy sips.
9 A Izabella watches.
10 A Camila watches Izabella.
11 A Henrik watches the wine.
12 D TEDDY: It's good.
13 D IZABELLA: It's better than good.
14 D TEDDY: It's... complex.
15 D CAMILA: He means it's sour.
16 D TEDDY: I do not.
17 D CAMILA: You do. Your nose wrinkles.
18 A ¶ Teddy touches his nose.
19 A Izabella suppresses a smile.
20 A Henrik takes a slow sip and sets down his glass.
21 D HENRIK: It's perfect.
22 A ¶ All three turn.
23 A He shrugs, unbothered.
24 D HENRIK [CONT'D]: I'm the one who sold her the grapes.
25 D IZABELLA (to Teddy): That's Henrik.
26 D TEDDY: I gathered.
27 D IZABELLA: And that's my fiance.
28 A ¶ Teddy's glass stops halfway to his mouth.
29 A Camila lowers her eyes.
30 A Henrik, calmly, takes Izabella's hand.
31 D TEDDY: ...Congratulations.
32 D IZABELLA: Thank you, Teddy.
33 A ¶ He drains the glass.
34 A Sets it down.
35 A Smooths his jacket.
36 A Camila slides the bottle toward him, tender.
37 D CAMILA: Another?
38 D TEDDY (a breath): Please.

### SCENE s01105 | EXT. BOMBED-OUT CINEMA - ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT FIONNUALA BRADY-ESCOBAR, SERGEANT IKENNA ABARA, JAMSHID TAVAKOLI
1 A ¶ Half a marquee hangs by its cables.
2 A The facade is gone; the screen stands bare and cracked like a tooth.
3 A Smoke drifts across a starless sky.
4 A Below, a city of broken lamps.
5 A ¶ LIEUTENANT FIONNUALA BRADY-ESCOBAR, 30s, short dark hair, torn sleeve, crouches behind a ventilation stack with a scoped rifle across her knees.
6 A The scar on her cheek catches the glow of distant fires.
7 A Beside her, SERGEANT IKENNA ABARA, 40s, thick-armed, bleeds slowly from a bandage on his thigh.
8 A Further back, behind a toppled projector, huddles a civilian in a grease-stained coat: MR. JAMSHID TAVAKOLI, 60s, a projectionist, spectacles cracked.
9 A ¶ She lifts the scope.
10 A He presses a hand to the bandage.
11 D IKENNA: Anything?
12 D FIONNUALA: Two on the street. One on the balcony opposite.
13 D IKENNA: Ours?
14 D FIONNUALA: No.
15 A ¶ She doesn't move.
16 A The balcony light flickers.
17 A Mr. Tavakoli shifts and a piece of masonry falls from the projector.
18 A She flinches.
19 A Ikenna grabs her sleeve.
20 D IKENNA: Easy.
21 D FIONNUALA: He's making noise.
22 D IKENNA: He's old.
23 D FIONNUALA: He's loud.
24 A ¶ Tavakoli raises both hands, a gesture of apology.
25 A She exhales.
26 A Lowers the rifle an inch.
27 D MR. TAVAKOLI (whispering): I show films here thirty years. I know every board in this roof.
28 D FIONNUALA: Then tell me which ones creak.
29 D MR. TAVAKOLI: All of them. Except those.
30 A ¶ He points to a line of beams near the edge, bare against the sky.
31 D FIONNUALA: Can we reach them?
32 D MR. TAVAKOLI: If you crawl.
33 A ¶ She nods at Ikenna.
34 A He grimaces, rolls onto his stomach, begins to inch toward the beams.
35 A Blood darkens the roof where he passes.
36 A ¶ She watches him go.
37 A Then, quietly, she pulls the old man close and speaks in his ear.
38 D FIONNUALA: When he reaches the end, you follow. Do not stop.
39 D MR. TAVAKOLI: And you?
40 D FIONNUALA: I stay.
41 A ¶ He starts to protest.
42 A Her eyes silence him.
43 A A distant shell whistles in.
44 A They duck.
45 A The projectionist clings to the screen's iron frame.
46 A ¶ Ikenna reaches the beams.
47 A Raises one hand: the signal.
48 A Tavakoli crawls after him, gray hair dusted white with plaster.
49 A ¶ Fionnuala rises into a crouch.
50 A Raises the rifle.
51 A The balcony light flares.
52 A She takes aim.
53 A ¶ Below, in the bare screen's reflection, a thousand flickers of fire wink like frames of a lost film.

### SCENE s01103 | INT. FLOODED CELLAR OF A VICTORIAN ASYLUM - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA MAXWELL-ODUYA, ARTEMUS PIKE, VOICE
1 A ¶ Ankle-deep black water.
2 A Rusted bed frames stacked against slick brick walls.
3 A A single lantern hangs from a chain, throwing a dim yellow circle.
4 A Somewhere, dripping.
5 A ¶ DR. CORDELIA MAXWELL-ODUYA, 40s, in a tailored coat and rubber boots, moves slowly through the water with a lamp raised high.
6 A Behind her, her assistant, ARTEMUS PIKE, 20s, frightened and trying not to show it, clutches a camera.
7 D CORDELIA: Mind the step.
8 D ARTEMUS: There's a step?
9 D CORDELIA: There was. Somewhere.
10 A ¶ Water ripples around her boots.
11 A A bed frame creaks against the wall.
12 A Artemus lifts the camera, thumbs the shutter.
13 A The flash burns the room white for an instant: iron frames, wet bricks, and a figure standing against the far wall.
14 A ¶ Cordelia freezes.
15 A Artemus lowers the camera.
16 A Darkness again, the lantern small.
17 D ARTEMUS [CONT'D] (whispering): Did you see --
18 D CORDELIA: Yes.
19 D ARTEMUS: It looked like --
20 D CORDELIA: I said yes, Artemus.
21 A ¶ Another creak.
22 A The lantern chain sways.
23 A The yellow circle swings across the wall and finds nothing but brick.
24 D ARTEMUS: Doctor, I think we should go.
25 D CORDELIA: We came for a reason.
26 D ARTEMUS: I've forgotten the reason.
27 D CORDELIA: Patient forty-one. Mary Hargreave. Locked here in eighteen-ninety.
28 D ARTEMUS: For what?
29 D CORDELIA: For hearing things.
30 A ¶ A soft sound rolls through the water.
31 A A woman's voice, thin as paper, humming a lullaby.
32 A Artemus's hands tighten on the camera.
33 A Cordelia's lamp trembles.
34 D VOICE [O.S.] (humming, then singing): Hush, little one, the water's deep...
35 D ARTEMUS: Doctor.
36 D CORDELIA: Don't answer her.
37 D ARTEMUS: I wasn't going to.
38 D VOICE [O.S.]: ...hush, little one, I'll never sleep...
39 A ¶ The song comes closer.
40 A Water stirs between them.
41 A Something pale rises beneath the surface, a hand, then a wrist, then a face.
42 D CORDELIA (whispering at the same moment as Artemus): Do not look.
43 D ARTEMUS: ^Do not look.
44 A ¶ They both turn their faces.
45 A The singing stops.
46 A The hand breaks the surface a foot from Cordelia's boot, fingers open, trembling.
47 A It closes around her ankle.
48 A ¶ She screams.
49 A The lantern chain snaps.
50 A Darkness.
51 A ¶ Artemus's camera flashes.
52 A In the white blink: Cordelia on her knees, and a woman in a rotting nightgown holding her ankle, mouth open in a soundless song.
53 A ¶ Black.
54 A ¶ The water settles.
55 A The dripping resumes.

### SCENE s01114 | INT. HOSPITAL STAIRWELL - LANDING BETWEEN FLOORS - 3 A.M.
Detected names (may be incomplete or contain aliases): ANSELMO KWAKU-REYNOLDS, OPERATOR
1 A ¶ Concrete steps.
2 A A humming exit sign.
3 A A window onto a dark parking structure.
4 A A vending machine glows at the landing.
5 A ¶ DR. ANSELMO KWAKU-REYNOLDS, 40s, scrubs, paper hat crumpled in his fist, sits on the steps with his head against the wall.
6 A A phone rests on his knee, speaker on.
7 D OPERATOR [V.O.] (distant, tired): Cardiology to Dr. Kwaku-Reynolds. Please call extension four-four-one-two.
8 D ANSELMO (to the phone): I'm on a break.
9 D OPERATOR [V.O.]: Doctor, they said it's urgent.
10 D ANSELMO: It's always urgent.
11 A ¶ He turns the phone face down on the step.
12 A The voice continues in muffled bursts.
13 A He lets it.
14 D ANSELMO [CONT'D] (to himself, steady): Forty-one patients on the unit. Three discharges at eight. Two transfers at noon. One bed that nobody gets until I sign off on a chart I haven't finished. And I'm sitting on a stair.
15 A ¶ He laughs, quietly.
16 A Wipes a hand over his face.
17 D ANSELMO [CONT'D]: When I was a student, an old attending told me: "A doctor is a man who fixes what he can and carries what he can't." I thought it was poetry.
18 A ¶ A pause.
19 A The vending machine hums.
20 D ANSELMO [CONT'D]: It's a weight limit.
21 A ¶ He stands, brushes off his scrubs, flattens the paper hat, puts it on.
22 A Picks up the phone.
23 D ANSELMO [CONT'D] (into the phone): This is Kwaku-Reynolds. Coming up.
24 D OPERATOR [V.O.]: Thank you, Doctor.
25 A ¶ He pockets the phone and climbs.

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

### SCENE pd_earnest_5 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, ALGERNON, GWENDOLEN, JACK, MERRIMAN, LADY BRACKNELL
1 D CECILY: To please me you are ready to face this fearful ordeal?
2 D ALGERNON: I am!
3 D GWENDOLEN: How absurd to talk of the equality of the sexes! Where questions of self-sacrifice are concerned, men are infinitely beyond us.
4 D JACK: We are.
5 A ¶ Clasps hands with Algernon.
6 D CECILY: They have moments of physical courage of which we women know absolutely nothing.
7 A ¶ To Jack.
8 D GWENDOLEN: Darling!
9 A ¶ To Cecily.
10 D ALGERNON: Darling!
11 A ¶ They fall into each other’s arms.
12 A ¶ Enter Merriman.
13 A When he enters he coughs loudly, seeing the situation.
14 D MERRIMAN: Ahem! Ahem! Lady Bracknell!
15 D JACK: Good heavens!
16 A ¶ Enter Lady Bracknell.
17 A The couples separate in alarm.
18 A Exit Merriman.
19 D LADY BRACKNELL: Gwendolen! What does this mean?
20 D GWENDOLEN: Merely that I am engaged to be married to Mr. Worthing, mamma.
21 D LADY BRACKNELL: Come here. Sit down. Sit down immediately. Hesitation of any kind is a sign of mental decay in the young, of physical weakness in the old.
22 A ¶ Turns to Jack.
23 D LADY BRACKNELL: Apprised, sir, of my daughter’s sudden flight by her trusty maid, whose confidence I purchased by means of a small coin, I followed her at once by a luggage train. Her unhappy father is, I am glad to say, under the impression that she is attending a more than usually lengthy lecture by the University Extension Scheme on the Influence of a permanent income on Thought. I do not propose to undeceive him. Indeed I have never undeceived him on any question. I would consider it wrong. But of course, you will clearly understand that all communication between yourself and my daughter must cease immediately from this moment. On this point, as indeed on all points, I am firm.
24 D JACK: I am engaged to be married to Gwendolen, Lady Bracknell!
25 D LADY BRACKNELL: You are nothing of the kind, sir. And now, as regards Algernon! . . . Algernon!
26 D ALGERNON: Yes, Aunt Augusta.
27 D LADY BRACKNELL: May I ask if it is in this house that your invalid friend Mr. Bunbury resides?
28 A ¶ Stammering.
29 D ALGERNON: Oh! No! Bunbury doesn’t live here. Bunbury is somewhere else at present. In fact, Bunbury is dead.
30 D LADY BRACKNELL: Dead! When did Mr. Bunbury die? His death must have been extremely sudden.
31 A ¶ Airily.
32 D ALGERNON: Oh! I killed Bunbury this afternoon. I mean poor Bunbury died this afternoon.
33 D LADY BRACKNELL: What did he die of?
34 D ALGERNON: Bunbury? Oh, he was quite exploded.
35 D LADY BRACKNELL: Exploded! Was he the victim of a revolutionary outrage? I was not aware that Mr. Bunbury was interested in social legislation. If so, he is well punished for his morbidity.
36 D ALGERNON: My dear Aunt Augusta, I mean he was found out! The doctors found out that Bunbury could not live, that is what I mean—so Bunbury died.
37 D LADY BRACKNELL: He seems to have had great confidence in the opinion of his physicians. I am glad, however, that he made up his mind at the last to some definite course of action, and acted under proper medical advice. And now that we have finally got rid of this Mr. Bunbury, may I ask, Mr. Worthing, who is that young person whose hand my nephew Algernon is now holding in what seems to me a peculiarly unnecessary manner?
38 D JACK: That lady is Miss Cecily Cardew, my ward.
39 A ¶ Lady Bracknell bows coldly to Cecily.
40 D ALGERNON: I am engaged to be married to Cecily, Aunt Augusta.
41 D LADY BRACKNELL: I beg your pardon?
42 D CECILY: Mr. Moncrieff and I are engaged to be married, Lady Bracknell.
43 A ¶ With a shiver, crossing to the sofa and sitting down.
44 D LADY BRACKNELL: I do not know whether there is anything peculiarly exciting in the air of this particular part of Hertfordshire, but the number of engagements that go on seems to me considerably above the proper average that statistics have laid down for our guidance. I think some preliminary inquiry on my part would not be out of place. Mr. Worthing, is Miss Cardew at all connected with any of the larger railway stations in London? I merely desire information. Until yesterday I had no idea that there were any families or persons whose origin was a Terminus.
45 A ¶ Jack looks perfectly furious, but restrains himself.
46 A ¶ In a clear, cold voice.
47 D JACK: Miss Cardew is the grand-daughter of the late Mr. Thomas Cardew of 149 Belgrave Square, S.W.; Gervase Park, Dorking, Surrey; and the Sporran, Fifeshire, N.B.
48 D LADY BRACKNELL: That sounds not unsatisfactory. Three addresses always inspire confidence, even in tradesmen. But what proof have I of their authenticity?

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

### SCENE s01035 | INT. QUARANTINED CRUISE SHIP - GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): RENATA KOVAC, MILES TOBIN, ADEBAYO ROSS, CAPTAIN HALE
1 A ¶ Shelves of magnets, snow globes, sunscreen.
2 A The registers are dark.
3 A Emergency strips light the floor.
4 A Through the glass storefront, an empty promenade deck rocks gently at anchor.
5 A ¶ RENATA KOVAC, 40s, ship's purser, hair in a messy bun, uniform jacket unbuttoned, sits behind the counter with a radio on her knee.
6 A MILES TOBIN, 30s, ship's doctor, mask around his chin, leans on a shelf.
7 A ADEBAYO ROSS, 50s, passenger, bathrobe, paper slippers, pretends to read a paperback.
8 A ¶ The radio crackles.
9 D CAPTAIN HALE [V.O.]: Shop, this is the bridge. Status.
10 D RENATA (into radio): Three souls, sir. All calm.
11 D CAPTAIN HALE [V.O.]: Keep them there. We've got a boat coming at dawn.
12 D RENATA: Understood.
13 A ¶ She sets the radio down.
14 A The silence returns.
15 D ADEBAYO (to no one): Two weeks on a boat, and the one thing they sell me is snow globes.
16 D MILES: You can have mine.
17 D ADEBAYO: Does it come with a cure?
18 D MILES: It comes with a mild placebo effect.
19 A ¶ Adebayo laughs, then coughs.
20 A Miles straightens, watches him.
21 D MILES [CONT'D] (quietly): Sir, how long has that been going?
22 D ADEBAYO: It's a tickle.
23 D MILES: How long?
24 D ADEBAYO: Since Tuesday.
25 A ¶ Renata stiffens.
26 A She slides her hand slowly toward the radio.
27 D RENATA (to all): Everyone stay exactly where you are.
28 D MILES: Renata.
29 D RENATA: Don't.
30 D MILES: He's not necessarily--
31 D RENATA: You said no one on this deck was symptomatic.
32 A ¶ Miles opens his mouth.
33 A Closes it.
34 D ADEBAYO (muttering): I should've stayed in the cabin.
35 A ¶ The storefront lights flicker.
36 A Outside, a searchlight sweeps the promenade.
37 A Then a second.
38 A Then a third, from a hull that isn't theirs.
39 D RENATA: That's not the dawn boat.
40 D MILES: No.
41 A ¶ She lifts the radio.
42 D RENATA [CONT'D]: Bridge, we have lights on the promenade.
43 A ¶ Static.
44 A Nothing.
45 A She tries again.
46 D RENATA [CONT'D]: Bridge?
47 D CAPTAIN HALE [V.O.] (whispering): Don't open the door. They're not ours.

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

### SCENE s01077 | EXT. SALT FLATS - ABANDONED RAILWAY SIDING - DAWN
Detected names (may be incomplete or contain aliases): MAJOR ALEKSANDRA VOSS, LIEUTENANT RAFAEL OROZCO
1 A ¶ Glare off the white crust.
2 A A rusting locomotive sits on a rail that leads nowhere.
3 A Smoke on the horizon.
4 A ¶ MAJOR ALEKSANDRA VOSS, 40s, field coat, a bandage across her palm, crouches by the engine's wheel.
5 A Beside her, LIEUTENANT RAFAEL OROZCO, 20s, pale and sunburned, scans the horizon with binoculars.
6 A ¶ She wipes grit from a map.
7 A He lowers the glasses.
8 D OROZCO: Dust on the east road, Major.
9 D VOSS: How much?
10 D OROZCO: A lot.
11 A ¶ She stands.
12 A Squints.
13 A Unfolds the map across the locomotive's flank.
14 D VOSS: Armor, then. Or trucks. We'll know in a minute.
15 A ¶ He doesn't move.
16 A She looks at him.
17 A He is gripping the binoculars hard.
18 D VOSS [CONT'D]: Lieutenant.
19 D OROZCO: Ma'am.
20 D VOSS: Breathe.
21 A ¶ He does.
22 A She takes the glasses from his hands, raises them.
23 A Her jaw sets.
24 D OROZCO: It's trucks?
25 D VOSS: It's both.
26 A ¶ She hands the binoculars back.
27 A He looks again.
28 A Lowers them slowly.
29 D OROZCO: We could hole up in the engine.
30 D VOSS: It's a coffin with a smokestack.
31 A ¶ He nods.
32 A He stares at the rails.
33 A She folds the map, tucks it into her coat, pulls out a small mirror.
34 D OROZCO: What's that for?
35 D VOSS: Signal. If anyone is still listening on that ridge.
36 A ¶ He watches her angle the mirror to the sun.
37 A A flash.
38 A Another.
39 A Another.
40 A She waits.
41 A He waits.
42 A Nothing answers.
43 D OROZCO: Ma'am. If nobody is there?
44 D VOSS: Then we signal anyway.
45 A ¶ She flashes again.
46 A The dust cloud swells on the road.
47 A He pulls his rifle from his shoulder.
48 A She puts her hand on the barrel.
49 A Gently.
50 A He looks at her.
51 D VOSS [CONT'D]: Not yet.
52 A ¶ He lowers it.
53 A The sun climbs higher.
54 A Far off, an engine note rises, like a long breath drawn.
55 A ¶ She keeps flashing the mirror.
56 A He starts to count under his breath.

### SCENE s01088 | EXT. MANGROVE SWAMP - TIDAL FLAT - DAWN
Detected names (may be incomplete or contain aliases): BEE, CALLOWAY, BRAM OKONJO, CAPTAIN HALVARD SKOGLUND
1 A ¶ Roots like fingers.
2 A Grey mud.
3 A A capsized skiff on its side.
4 A Mosquitos in clouds.
5 A ¶ BIANCA "BEE" CALLOWAY, 30s, torn shirt, drags a water jug through the mud.
6 A BRAM OKONJO, 40s, one boot missing, limps behind her.
7 A Between them, a bundled shape on a stretcher of branches: CAPTAIN HALVARD SKOGLUND, 60s, eyes closed.
8 D BEE: Bram. Pull.
9 D BRAM: I'm pulling.
10 D BEE: You're limping.
11 D BRAM: I'm limping and pulling.
12 A ¶ She stops.
13 A Wipes her face.
14 A Squats by the captain.
15 A Puts two fingers at his neck.
16 D BEE: Cap. Cap, you in there?
17 A ¶ He stirs.
18 A Mumbles.
19 A Doesn't wake.
20 D BRAM: Tide's turning.
21 D BEE: I can see.
22 D BRAM: We have maybe ten minutes before the flat goes under.
23 A ¶ She stands.
24 A Looks at the skiff.
25 A Looks at the horizon where a thin line of silver crawls toward them.
26 D BEE: Leave the jug.
27 D BRAM: That's our water.
28 D BEE: And that's his life. Choose.
29 A ¶ Bram stares at her.
30 A Drops the jug.
31 A It sinks into the mud with a slow burp.
32 A He grabs the stretcher.
33 A She grabs the other end.
34 A They lift.
35 A They stumble.
36 A A root catches Bram's foot; he falls.
37 A The stretcher tilts.
38 A The captain groans.
39 D BEE [CONT'D]: Bram!
40 D BRAM: Go on without me.
41 D BEE: Not a chance.
42 A ¶ She sets the stretcher down.
43 A Hauls him up by the belt.
44 A He leans on her.
45 A Their breath rasps.
46 D BRAM: Bee. If I --
47 D BEE: You're not going to.
48 D BRAM: If I do.
49 D BEE: Don't.
50 A ¶ The silver line is closer.
51 A The mud begins to glisten.
52 A A bird shrieks from the roots.
53 D CAPTAIN HALVARD (eyes still shut): Boys. Girls. Hold your horses.
54 D BEE: Cap!
55 D CAPTAIN HALVARD: I can walk.
56 D BRAM: You can't.
57 D CAPTAIN HALVARD: I can crawl. Let me.
58 A ¶ He pushes himself off the stretcher.
59 A Falls to hands and knees.
60 A Starts to crawl.
61 A Bee and Bram watch him go, mud to the elbows.
62 D BEE (quiet): Stubborn old man.
63 D BRAM: He taught us.
64 A ¶ They follow.
65 A The water laps their ankles.
66 A The roots rise ahead like a gate.

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

### SCENE s01055 | INT. PHILOMENA'S KITCHEN - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): PHILOMENA ROSSETTI, ARTUR ROSSETTI, SOLEDAD
1 A ¶ A kitchen from another decade.
2 A Yellow linoleum, a table with a plastic cloth printed with lemons, a clock shaped like a rooster.
3 A On the stove, a pot of sauce simmers, spitting.
4 A Steam beads the windowpanes.
5 A ¶ PHILOMENA ROSSETTI, 80, sleeves pushed to the elbows, hair in a hairnet, stirs.
6 A Her hands are knotted like old rope.
7 A At the table, ARTUR ROSSETTI, 50s, her son, in a church shirt, slices bread with surgical care.
8 A His daughter SOLEDAD, 16, sits cross-legged on a chair, eyes on her phone, headphones around her neck.
9 D PHILOMENA: You never come on Sundays anymore.
10 D ARTUR: I come on Sundays, Ma.
11 D PHILOMENA: You come on the Sundays you remember.
12 D ARTUR: That's most of them.
13 D PHILOMENA: Most. Hmph.
14 A ¶ She tastes the sauce.
15 A Adds salt.
16 A Stirs.
17 D SOLEDAD: It smells good, Nonna.
18 D PHILOMENA: It smells like your grandfather's lies.
19 D SOLEDAD: What?
20 D PHILOMENA: He swore he could cook. He burned water.
21 D ARTUR: Ma, not today.
22 D PHILOMENA: Why not today?
23 D ARTUR: Because.
24 D PHILOMENA: Because what?
25 D ARTUR: Because it's Sunday.
26 A ¶ She snorts.
27 A Taps the spoon on the pot.
28 D PHILOMENA: You think I don't know why you've brought the child.
29 D ARTUR: Soledad's here because she wanted to see you.
30 D SOLEDAD: I did.
31 D PHILOMENA: You came to hold my hand while Arturo tells me something he has been practicing in the car.
32 D ARTUR: Ma.
33 D PHILOMENA: Tell me.
34 A ¶ Artur sets the knife down.
35 A Wipes his fingers.
36 A Looks at his daughter, who looks at her phone, pretending not to hear.
37 D ARTUR: The doctor called.
38 D PHILOMENA: Which doctor?
39 D ARTUR: The one with the results. For the house.
40 D PHILOMENA: The house is not sick.
41 D ARTUR: The house is not sick, Ma. You are.
42 A ¶ The clock ticks.
43 A The sauce pops.
44 A Philomena does not turn.
45 D PHILOMENA: I know that.
46 D ARTUR: You know?
47 D PHILOMENA: I am eighty. I have buried a husband, two brothers, and a dog named Salvatore. I know what a cough means.
48 D SOLEDAD: Nonna?
49 D PHILOMENA: Hush, cara.
50 D ARTUR: They want to put you somewhere. Just for a little while. Somewhere with nurses.
51 D PHILOMENA: Somewhere with nurses.
52 D ARTUR: Not forever.
53 D PHILOMENA: They never say forever. They say a little while.
54 D ARTUR: I didn't want to.
55 D PHILOMENA: You didn't want to tell me, or you didn't want to put me in a place?
56 D ARTUR: Both.
57 A ¶ She turns now.
58 A Her face is wet.
59 A It isn't steam.
60 A She wipes it on her sleeve.
61 D PHILOMENA: Sit with me. Both of you.
62 A ¶ They sit.
63 A She lifts the pot, spoons a bowl, sets it before Soledad.
64 D PHILOMENA [CONT'D]: Eat. It gets cold.
65 D SOLEDAD: I'm not hungry.
66 D PHILOMENA: You'll be hungry in a month. When I'm not here to feed you.
67 A ¶ She says it lightly.
68 A A joke.
69 A Nobody laughs.
70 D ARTUR: Ma. Please.
71 D PHILOMENA: Arturo. Your father's recipe. It's in the drawer, under the knives. Never in a book. I wrote it on the back of an electric bill.
72 D ARTUR: I know.
73 D PHILOMENA: You do not know. You think there is a secret ingredient. There isn't. There is only a woman standing here at four o'clock every Sunday for fifty-eight years.
74 A ¶ She sits.
75 A Folds her hands.
76 D PHILOMENA [CONT'D]: That's the ingredient. Now eat.
77 A ¶ Soledad takes a spoonful.
78 A Her face crumples.
79 A She keeps eating.
80 A ¶ Artur reaches across the lemons and takes his mother's hand.
81 A It is small and knotted and warm.
82 A ¶ The rooster clock ticks.
83 A On the stove, the sauce goes on simmering.

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

### SCENE pd_sisters_2 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): KULIGIN, TUZENBACH, IRINA, CHEBUTIKIN, VERSHININ
1 D KULIGIN: Speaking’s a bit difficult, eh, Ivan Romanovitch!
2 A ¶ Pats him on the shoulder.
3 D KULIGIN: Good man! In vino veritas , the ancients used to say.
4 D TUZENBACH: They keep on asking me to get up a concert in aid of the sufferers.
5 D IRINA: As if one could do anything....
6 D TUZENBACH: It might be arranged, if necessary. In my opinion Maria Sergeyevna is an excellent pianist.
7 D KULIGIN: Yes, excellent!
8 D IRINA: She’s forgotten everything. She hasn’t played for three years... or four.
9 D TUZENBACH: In this town absolutely nobody understands music, not a soul except myself, but I do understand it, and assure you on my word of honour that Maria Sergeyevna plays excellently, almost with genius.
10 D KULIGIN: You are right, Baron, I’m awfully fond of Masha. She’s very fine.
11 D TUZENBACH: To be able to play so admirably and to realize at the same time that nobody, nobody can understand you!
12 A ¶ Sighs.
13 D KULIGIN: Yes.... But will it be quite all right for her to take part in a concert?
14 A ¶ Pause.
15 D KULIGIN: You see, I don’t know anything about it. Perhaps it will even be all to the good. Although I must admit that our Director is a good man, a very good man even, a very clever man, still he has such views.... Of course it isn’t his business but still, if you wish it, perhaps I’d better talk to him.
16 A ¶ CHEBUTIKIN takes a porcelain clock into his hands and examines it.
17 D VERSHININ: I got so dirty while the fire was on, I don’t look like anybody on earth.
18 A ¶ Pause.
19 D VERSHININ: Yesterday I happened to hear, casually, that they want to transfer our brigade to some distant place. Some said to Poland, others, to Chita.
20 D TUZENBACH: I heard so, too. Well, if it is so, the town will be quite empty.
21 D IRINA: And we’ll go away, too!
22 A ¶ Drops the clock which breaks to pieces.
23 D CHEBUTIKIN: To smithereens!
24 A ¶ A pause; everybody is pained and confused.
25 A ¶ Gathering up the pieces.
26 D KULIGIN: To smash such a valuable object--oh, Ivan Romanovitch, Ivan Romanovitch! A very bad mark for your misbehaviour!
27 D IRINA: That clock used to belong to our mother.
28 D CHEBUTIKIN: Perhaps.... To your mother, your mother. Perhaps I didn’t break it; it only looks as if I broke it. Perhaps we only think that we exist, when really we don’t. I don’t know anything, nobody knows anything.
29 A ¶ At the door.
30 D CHEBUTIKIN: What are you looking at? Natasha has a little romance with Protopopov, and you don’t see it.... There you sit and see nothing, and Natasha has a little romance with Protopovov....
31 A ¶ Sings.
32 D CHEBUTIKIN: Won’t you please accept this date....
33 A ¶ Exit.
34 D VERSHININ: Yes.
35 A ¶ Laughs.
36 D VERSHININ: How strange everything really is!
37 A ¶ Pause.
38 D VERSHININ: When the fire broke out, I hurried off home; when I get there I see the house is whole, uninjured, and in no danger, but my two girls are standing by the door in just their underclothes, their mother isn’t there, the crowd is excited, horses and dogs are running about, and the girls’ faces are so agitated, terrified, beseeching, and I don’t know what else. My heart was pained when I saw those faces. My God, I thought, what these girls will have to put up with if they live long! I caught them up and ran, and still kept on thinking the one thing: what they will have to live through in this world!
39 A ¶ Fire-alarm; a pause.
40 D VERSHININ: I come here and find their mother shouting and angry.
41 A ¶ MASHA enters with a pillow and sits on the sofa.
42 D VERSHININ: And when my girls were standing by the door in just their underclothes, and the street was red from the fire, there was a dreadful noise, and I thought that something of the sort used to happen many years ago when an enemy made a sudden attack, and looted, and burned.... And at the same time what a difference there really is between the present and the past! And when a little more time has gone by, in two or three hundred years perhaps, people will look at our present life with just the same fear, and the same contempt, and the whole past will seem clumsy and dull, and very uncomfortable, and strange. Oh, indeed, what a life there will be, what a life!
43 A ¶ Laughs.
44 D VERSHININ: Forgive me, I’ve dropped into philosophy again. Please let me continue. I do awfully want to philosophize, it’s just how I feel at present.
45 A ¶ Pause.

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

### SCENE s01054 | INT. ROADSIDE MOTEL - ROOM 9 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PROPERTY LENA MARSH
1 A ¶ Pink bedspread.
2 A Wood-paneled walls.
3 A A TV bolted to the dresser, off.
4 A A lamp with a torn shade.
5 A Rain taps the window like fingertips.
6 A ¶ A WOMAN, 30s, wet raincoat, dark circles under her eyes, locks the door.
7 A Slides the chain.
8 A Pulls the curtains shut.
9 A She is alone, and she's checking the room the way a person checks who has already been surprised once.
10 A ¶ She opens the closet.
11 A Empty hangers.
12 A The bathroom.
13 A Empty tub.
14 A Under the bed.
15 A Dust, a lost sock.
16 A ¶ She sits on the edge of the bed and takes a small tape recorder from her bag.
17 A She presses RECORD.
18 D WOMAN (into recorder): Test. Test.
19 A ¶ She stops.
20 A Plays it back.
21 A Her own voice, tinny.
22 D WOMAN [V.O.] (tape): Test. Test.
23 A ¶ She nods.
24 A Records again.
25 D WOMAN: Day one. Motel off Route 9. Nobody followed me. I think.
26 A ¶ She stops the tape.
27 A Looks at the phone on the nightstand.
28 A Beige, rotary, curly cord.
29 A She picks up the receiver.
30 A Dial tone.
31 A She sets it back.
32 A ¶ She rewinds.
33 A Hits PLAY.
34 D WOMAN [V.O.] (tape): Day one. Motel off Route 9. Nobody followed me. I think.
35 A ¶ Then, after her recorded voice, the same voice again, lower, almost tender, saying words she never spoke:
36 D WOMAN [V.O.] (tape, whispering): I'm in the room.
37 A ¶ She freezes.
38 A The tape continues to hiss.
39 A ¶ She hits STOP.
40 A Her thumb shakes.
41 A She rewinds again, plays it again.
42 A The extra line is gone.
43 A Only the first.
44 D WOMAN (quietly): Okay.
45 A ¶ She sets the recorder on the dresser.
46 A Takes off her coat.
47 A Hangs it on the doorknob.
48 A A key tag drops from the pocket and clatters to the floor.
49 A She picks it up.
50 A The tag is stamped in hand-scratched letters: PROPERTY OF LENA MARSH.
51 A ¶ She turns it over, turns it back.
52 D LENA (to herself): Right. Right. I'm Lena.
53 A ¶ She says it as if reminding herself.
54 A She says it again.
55 D LENA [CONT'D]: Lena Marsh. Thirty-four. Dental hygienist. Born in Duluth.
56 A ¶ She reaches for the lamp.
57 A Clicks it off.
58 A The room is almost black.
59 A A glow leaks around the curtain edge.
60 A ¶ On the dresser, the recorder clicks on by itself.
61 A The tape reels turn.
62 D LENA [CONT'D]: No.
63 D LENA [V.O.] (tape): Lena.
64 A ¶ She backs against the wall.
65 D LENA: That's my voice.
66 D LENA [V.O.] (tape): You taped me yesterday. In the car.
67 D LENA: I wasn't in a car yesterday.
68 D LENA [V.O.] (tape): No. But you will be.
69 A ¶ She lunges.
70 A Grabs the recorder.
71 A Rips the cassette out.
72 A Throws it across the room.
73 A It hits the TV and cracks.
74 A ¶ Silence.
75 A Rain.
76 A Breath.
77 A ¶ She slides down the wall until she's sitting on the floor.
78 A She hugs her knees.
79 A ¶ From the bathroom: a click.
80 A A drip.
81 A Another click.
82 D LENA [CONT'D] (whispering): Please.
83 A ¶ The bathroom light snaps on by itself.
84 A A thin line of yellow slides under the door.
85 D LENA [CONT'D] (barely audible): Please don't.
86 A ¶ The doorknob turns on its own.
87 A ¶ She crawls to the bed.
88 A Under it.
89 A Dust, the lost sock.
90 A Her own hand finds the cracked cassette.
91 A ¶ The bathroom door creaks.
92 D LENA [V.O.] (from the cracked cassette, gentle): Day two.
93 A ¶ She presses the cassette to her chest.
94 A Doesn't breathe.
95 A ¶ The bathroom light hums.
96 A The cassette hisses against her chest.
97 D LENA [V.O., CONT'D]: Nobody followed me.
98 D LENA (a thread of voice): I know.
99 A ¶ The lamp clicks on.

### SCENE s00018 | INT. FERRYBOAT SNACK BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDPA EZEKIEL, PIPPA, JUNIOR
1 A ¶ Plastic chairs bolted down.
2 A Gulls wheel past the window.
3 A GRANDPA EZEKIEL (70s, cardigan, newspaper folded in quarters) stirs his coffee while his granddaughter PIPPA (9, bandaged knee, sticker book) turns pages beside him and her older brother JUNIOR (14, hood up, one earbud in) slouches opposite, ignoring both and sliding his sandwich crust from one side of the plate to the other.
4 D PIPPA: Grandpa, did you ever fall off a boat?
5 D EZEKIEL: Twice.
6 D PIPPA: Did it hurt?
7 D EZEKIEL: The second time, no. By then I knew how.
8 D JUNIOR: That's not how that works.
9 D EZEKIEL: It is if you do it right.
10 D PIPPA: Show me.
11 D EZEKIEL: Not on this boat.
12 D JUNIOR: Can we get off at the next stop?
13 D EZEKIEL: There's no next stop. It's a ferry.
14 D PIPPA: Then we're stuck.
15 D EZEKIEL: Stuck is a strong word. We're simply committed.

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
