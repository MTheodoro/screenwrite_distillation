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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusC/group_13003.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01050 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERRERA
1 A ¶ Dark.
2 A Foam sluices over the windshield.
3 A Spinning brushes.
4 A Sodium light bleeds through soap in slow orange waves.
5 A ¶ ODALYS FERRERA, 40s, sits behind the wheel of a dented sedan, both hands on ten and two.
6 A Funeral dress.
7 A Hair still pinned.
8 D ODALYS [V.O.]: Forty-one years. He never once washed the car.
9 A ¶ The brushes slap the roof.
10 A She doesn't flinch.
11 D ODALYS [V.O., CONT'D]: Said it would just get dirty again.
12 A ¶ She switches off the radio.
13 A The tunnel roars.
14 D ODALYS [V.O., CONT'D]: So I let it.
15 A ¶ Rinse arches fire.
16 A Water drums the glass.
17 A She leans her forehead on the wheel.
18 D ODALYS [V.O., CONT'D]: Now I'm paying six dollars to sit in here.
19 A ¶ The dryer blasts.
20 A The car shudders.
21 A She starts laughing.
22 A Then she stops.
23 A ¶ She puts the car in drive.
24 A Rolls into the light.

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

### SCENE s01078 | INT. SKATING RINK CONCESSION STAND - AFTERNOON
Detected names (may be incomplete or contain aliases): JUNE, ABARA, DANNY KOSTOPOULOS, MR. PRUITT
1 A ¶ 1989.
2 A Faded posters of rollerskates.
3 A A disco ball turns slowly over empty hardwood.
4 A The popcorn machine hums.
5 A Behind the counter, a cluttered shelf of mismatched rental skates.
6 A ¶ JUNIPER "JUNE" ABARA, 16, braids and a Walkman, counts quarters into a cash drawer.
7 A She is the only one working.
8 A Her mouth moves silently with whatever she hears.
9 A ¶ The front door chimes.
10 A DANNY KOSTOPOULOS, 17, enters.
11 A Letterman jacket too big for him.
12 A He carries a gym bag.
13 D DANNY: Hey. Is the big room open?
14 D JUNE (pulling off a headphone): Not till four.
15 D DANNY: I'll wait.
16 D JUNE: Suit yourself.
17 A ¶ He sits on a stool.
18 A Taps the counter.
19 A Pretends not to look at her.
20 A She pretends not to notice.
21 D DANNY: Do you work here, like, always?
22 D JUNE: Saturdays. And school nights. And whenever Mr. Pruitt forgets to pay somebody else.
23 D DANNY: That sounds rough.
24 D JUNE: It's okay. I get free popcorn.
25 A ¶ She slides a small bag across the counter.
26 A He takes it.
27 D DANNY: Thanks.
28 D JUNE: Don't tell Pruitt.
29 D DANNY: Wouldn't.
30 A ¶ They sit in friendly quiet.
31 A The disco ball turns.
32 A A speaker crackles overhead.
33 D MR. PRUITT [V.O.] (over the PA): June, did you restock the nacho cheese?
34 D JUNE (calling up at the ceiling): Yes, Mr. Pruitt!
35 D MR. PRUITT [V.O.]: Good girl.
36 A ¶ June rolls her eyes.
37 A Danny almost laughs.
38 A He pulls a folded paper from his jacket.
39 D DANNY: Can I ask you something? Not weird.
40 D JUNE: That's how weird questions start.
41 D DANNY: It's about my sister.
42 D JUNE: Okay.
43 A ¶ He unfolds the paper.
44 A A flyer.
45 A A missing-person flyer, photocopied crooked.
46 A A girl's face, braids like June's.
47 D DANNY: She worked here. Last summer.
48 A ¶ June stops counting quarters.
49 D JUNE: Rosalind.
50 D DANNY: You knew her?
51 D JUNE: I took her shifts. When she left.
52 D DANNY: She didn't leave. She --
53 A ¶ He cuts himself off.
54 A June closes the cash drawer.
55 A Very slowly.
56 D JUNE: Danny. Mr. Pruitt keeps a locked room. Behind the skate lockers.
57 D DANNY: What's in it?
58 D JUNE: I don't know. But Rosalind's jacket is hanging on the door.
59 A ¶ Danny stares at her.
60 A The popcorn machine hums.
61 A The disco ball spins across his face.
62 D DANNY: Show me.
63 D JUNE: Not now.
64 D DANNY: Why not?
65 D MR. PRUITT [V.O.] (over the PA, cheerful): Folks, we're opening the big room early today. Skate on in!
66 A ¶ The doors at the far end of the rink swing open.
67 A Light floods the floor.
68 D JUNE: That's why.
69 A ¶ She reaches under the counter.
70 A Pulls out a ring of keys.
71 A Presses them into his palm.
72 D JUNE [CONT'D]: Four o'clock. When the music's loud. The brass one.
73 D DANNY (barely a whisper): Thank you.
74 D JUNE: Don't thank me yet.
75 A ¶ Danny pockets the keys.
76 A Picks up his gym bag.
77 A Skaters spill through the far doors.
78 A June puts on her Walkman and turns back to the register, calm as a clock.
79 A ¶ The disco ball catches Danny's face one last time as he walks into the crowd.

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

### SCENE s01112 | EXT. ICE-CAVE MOUTH - GLACIER - DAWN
Detected names (may be incomplete or contain aliases): NADIA, VOLKOV-ASANTE, NAT, BELL-TAKAHASHI, DESMOND OKONKWO-PARR
1 A ¶ A blue gash in a field of white.
2 A Wind scours the snow into long ripples.
3 A Three tiny figures stand at the lip of a frozen lake, backs to the cave.
4 A ¶ NADEZHDA "NADIA" VOLKOV-ASANTE, 40s, orange parka, iced eyelashes, drags a sled carrying a sleeping bag.
5 A Next to her, IGNATIUS "NAT" BELL-TAKAHASHI, 30s, hood drawn, gloves split at the fingertips, winds a rope around his waist.
6 A Dragging up the rear, DESMOND OKONKWO-PARR, 20s, lagging, hobbles on one swollen ankle.
7 D NADIA: Rest stop. Ten minutes.
8 D NAT: We don't have ten.
9 D NADIA: We have what we have.
10 A ¶ She drops the sled's handle.
11 A He kneels, checking the knot on the sleeping bag, while Desmond lowers himself onto his pack.
12 A Nat pulls out a thermos, takes a swallow, hands it to Desmond.
13 A Desmond drinks, hands it to Nadia, who sips and stares across the frozen lake at a ridge of dark rock.
14 D NADIA [CONT'D]: That's the pass.
15 D NAT: How far?
16 D NADIA: Six kilometers. Maybe seven.
17 D DESMOND (quietly): I can walk.
18 D NAT: You can't.
19 D DESMOND: I can crawl.
20 D NADIA: Nobody's crawling.
21 A ¶ She stands, tightens the sled's strap.
22 A Nat rises, unwinds the rope, ties one end to the sled and the other to Desmond's pack.
23 A Desmond opens his mouth to protest.
24 A Nat holds up a hand.
25 D NAT: You're the anchor. Don't argue.
26 D DESMOND: That's backwards.
27 D NAT: Humor me.
28 A ¶ Wind gusts, whipping powder across their faces.
29 A Nadia pulls up her hood, turns toward the pass, and leans into the haul line.
30 A The sled lurches.
31 A Nat falls in beside her.
32 A Desmond, tethered, drags his foot.
33 A ¶ They walk.
34 A No one speaks.
35 A Their shadows lengthen across the ice.

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
