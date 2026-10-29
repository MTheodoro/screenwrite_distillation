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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnetG/group_03005.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_earnest_4 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, GWENDOLEN, MERRIMAN
1 D CECILY: Do you suggest, Miss Fairfax, that I entrapped Ernest into an engagement? How dare you? This is no time for wearing the shallow mask of manners. When I see a spade I call it a spade.
2 A ¶ Satirically.
3 D GWENDOLEN: I am glad to say that I have never seen a spade. It is obvious that our social spheres have been widely different.
4 A ¶ Enter Merriman, followed by the footman.
5 A He carries a salver, table cloth, and plate stand.
6 A Cecily is about to retort.
7 A The presence of the servants exercises a restraining influence, under which both girls chafe.
8 D MERRIMAN: Shall I lay tea here as usual, Miss?
9 A ¶ Sternly, in a calm voice.
10 D CECILY: Yes, as usual.
11 A ¶ Merriman begins to clear table and lay cloth.
12 A A long pause.
13 A Cecily and Gwendolen glare at each other.
14 D GWENDOLEN: Are there many interesting walks in the vicinity, Miss Cardew?
15 D CECILY: Oh! yes! a great many. From the top of one of the hills quite close one can see five counties.
16 D GWENDOLEN: Five counties! I don’t think I should like that; I hate crowds.
17 A ¶ Sweetly.
18 D CECILY: I suppose that is why you live in town?
19 A ¶ Gwendolen bites her lip, and beats her foot nervously with her parasol.
20 A ¶ Looking round.
21 D GWENDOLEN: Quite a well-kept garden this is, Miss Cardew.
22 D CECILY: So glad you like it, Miss Fairfax.
23 D GWENDOLEN: I had no idea there were any flowers in the country.
24 D CECILY: Oh, flowers are as common here, Miss Fairfax, as people are in London.
25 D GWENDOLEN: Personally I cannot understand how anybody manages to exist in the country, if anybody who is anybody does. The country always bores me to death.
26 D CECILY: Ah! This is what the newspapers call agricultural depression, is it not? I believe the aristocracy are suffering very much from it just at present. It is almost an epidemic amongst them, I have been told. May I offer you some tea, Miss Fairfax?
27 A ¶ With elaborate politeness.
28 D GWENDOLEN: Thank you.
29 A ¶ Aside.
30 D GWENDOLEN: Detestable girl! But I require tea!
31 A ¶ Sweetly.
32 D CECILY: Sugar?
33 A ¶ Superciliously.
34 D GWENDOLEN: No, thank you. Sugar is not fashionable any more.
35 A ¶ Cecily looks angrily at her, takes up the tongs and puts four lumps of sugar into the cup.
36 A ¶ Severely.
37 D CECILY: Cake or bread and butter?
38 A ¶ In a bored manner.
39 D GWENDOLEN: Bread and butter, please. Cake is rarely seen at the best houses nowadays.
40 A ¶ Cuts a very large slice of cake, and puts it on the tray.
41 D CECILY: Hand that to Miss Fairfax.
42 A ¶ Merriman does so, and goes out with footman.
43 A Gwendolen drinks the tea and makes a grimace.
44 A Puts down cup at once, reaches out her hand to the bread and butter, looks at it, and finds it is cake.
45 A Rises in indignation.
46 D GWENDOLEN: You have filled my tea with lumps of sugar, and though I asked most distinctly for bread and butter, you have given me cake. I am known for the gentleness of my disposition, and the extraordinary sweetness of my nature, but I warn you, Miss Cardew, you may go too far.
47 A ¶ Rising.
48 D CECILY: To save my poor, innocent, trusting boy from the machinations of any other girl there are no lengths to which I would not go.
49 D GWENDOLEN: From the moment I saw you I distrusted you. I felt that you were false and deceitful. I am never deceived in such matters. My first impressions of people are invariably right.
50 D CECILY: It seems to me, Miss Fairfax, that I am trespassing on your valuable time. No doubt you have many other calls of a similar character to make in the neighbourhood.
51 A ¶ Enter Jack.
52 A ¶ Catching sight of him.
53 D GWENDOLEN: Ernest! My own Ernest!

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

### SCENE s01082 | INT. MINIATURE GOLF CLUBHOUSE - A PIRATE SHIP FOUNDERED IN PLASTER - DAY
Detected names (may be incomplete or contain aliases): BARNABY QUINCE, ODALYS FERREIRA-LAWSON, PARROT, CHILD
1 A ¶ A clubhouse built like a shipwreck.
2 A Fiberglass barnacles.
3 A A parrot animatronic that squawks on a timer.
4 A Scorecards pinned to a mast.
5 A The windows overlook a windmill hole where nobody is playing.
6 A ¶ BARNABY QUINCE, 50s, tour-guide's moustache, pirate hat two sizes small, sits behind the counter practicing a speech to the empty room.
7 A Beside the register, ODALYS FERREIRA-LAWSON, 20s, mini-golf league champion, rolls a putter along the floorboards, bored.
8 D BARNABY (to the room): Ahoy, ye mighty putters! Today we face the Kraken's Revenge, hole eighteen, par three...
9 D ODALYS: Nobody is here, Barnaby.
10 D BARNABY (muttering to himself): Practice makes plunder.
11 D ODALYS: You say that to the parrot, too.
12 D BARNABY: The parrot's a good listener.
13 A ¶ The parrot squawks on cue.
14 D PARROT [V.O.]: Pieces of eight! Pieces of eight!
15 D BARNABY: See?
16 D ODALYS: It's on a loop.
17 A ¶ She sinks a putt into a coffee cup.
18 A Barnaby claps.
19 A She bows.
20 D BARNABY: Ladies and gentlemen --
21 D ODALYS: There's no ladies and gentlemen.
22 D BARNABY: Ladies and gentleman.
23 D ODALYS: Gentleperson.
24 D BARNABY (delighted): Gentleperson! Excellent.
25 A ¶ The door chimes.
26 A A family of six enters in matching shirts.
27 A They fill the clubhouse with sunburn and noise.
28 A Barnaby leaps up, hat tilting.
29 D BARNABY [CONT'D] (grandly, to all): Welcome, brave souls! Who dares challenge the Kraken?
30 A ¶ A small child points at Odalys.
31 D CHILD: She's got a golf stick!
32 D ODALYS (to the child): It's a putter.
33 D BARNABY (to the child): It's a cutlass, my boy.
34 A ¶ They speak at once.
35 D BARNABY [CONT'D]: Eighteen holes of peril!
36 D ODALYS: ^Eighteen holes of boredom.
37 D BARNABY (hissing): Odalys.
38 D ODALYS (whispering back): What? It's honest.
39 A ¶ The family cheers anyway.
40 A Barnaby sweeps the hat off, bows with a flourish.
41 A The hat tips off his head, rolls across the floor, and stops at the child's feet.
42 A The child puts it on.
43 D BARNABY (quietly, to himself): Well, that's a first.
44 D ODALYS (to him, under her breath): Don't get used to it. You'll want it back.
45 A ¶ Barnaby hands out putters.
46 A Odalys slides the scorecards across the counter.
47 A The parrot squawks.
48 D PARROT [V.O.]: Pieces of eight!
49 D ODALYS (deadpan): And a mutiny.

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

### SCENE s01070 | INT. FLOODED RICE MILL - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT OKAFOR, CORPORAL HALVORSEN, PRIVATE LIN, STRANGER, TEODOR
1 A ¶ Knee-deep brown water.
2 A Sacks float like dead cattle.
3 A SERGEANT OKAFOR, 40s, scarred jaw, holds a lantern low.
4 A CORPORAL HALVORSEN, 20s, freckled, covers the door with a rifle.
5 A PRIVATE LIN, 19, thin, shivers beside a radio set.
6 A ¶ A man in a farmer's coat wades out of the dark.
7 A Hands up.
8 A STRANGER, 50s, mud to the waist.
9 D STRANGER: Don't shoot. I live here.
10 D OKAFOR: Nobody lives here. Name.
11 D STRANGER: Teodor. Teodor Vasko. The mill is my brother's.
12 A ¶ Halvorsen steps closer.
13 A Lin keeps her eyes on the radio.
14 D HALVORSEN: Sarge, he came from the north bank. That's their side.
15 D TEODOR: The bridge is gone. I swam.
16 A ¶ Distant engines.
17 A Okafor kills the lantern.
18 A Dark.
19 D OKAFOR (whispering): Lin. Radio. Now.
20 D LIN: Static, Sergeant. Only static.
21 A ¶ The engines grow louder.
22 A Halvorsen cocks the rifle.

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

### SCENE s01069 | EXT. AUTO SALVAGE YARD - CAR CRUSHER BAY - NIGHT
Detected names (may be incomplete or contain aliases): MAN, WOMAN, KID, NINA, ELI
1 A ¶ Towers of flattened cars.
2 A A hydraulic crusher squats at the end of a gravel lane, its steel jaws open like a mouth.
3 A A sodium lamp buzzes on a pole.
4 A ¶ A MAN in a dark jacket, 40s, slams the trunk of a black sedan shut.
5 A He wipes his hands on his pants.
6 A From the passenger side, a WOMAN in a leather coat, 30s, hurries around the car, hugging herself.
7 A ¶ At the office window, a KID, 17, in a hoodie, watches from behind a curtain.
8 A ¶ The man opens the sedan's back door.
9 A A heavy gym bag sits on the seat.
10 D WOMAN: Did you check the plates?
11 D MAN: Twice.
12 D WOMAN: Did you check the plates again?
13 D MAN: Nina. They're clean.
14 D WOMAN (softly): Don't say my name.
15 D MAN: Who's going to hear?
16 A ¶ She nods toward the office.
17 A The Kid has vanished from the window.
18 D MAN [CONT'D]: That's Terrence's nephew. He doesn't count.
19 D NINA: Everyone counts.
20 A ¶ The man hauls out the gym bag.
21 A It lands on the gravel with a clink.
22 A ¶ The office door opens.
23 A The Kid steps out, hands in pockets, walking slow.
24 D KID: You guys need the crusher?
25 D MAN: Yeah. For the sedan.
26 D KID: Papers?
27 D NINA: No papers.
28 D KID: No papers, no crusher. That's Terrence's rule.
29 D MAN: Terrence is a friend.
30 D KID: Terrence is in Phoenix.
31 A ¶ The man smiles, shows teeth.
32 A He steps closer.
33 A The Kid doesn't step back.
34 D MAN: Kid. What's your name?
35 D KID: Eli.
36 D MAN: Eli. Listen to me. A man left this car here. It's got to go.
37 D ELI: Then he can come back and fill out a form.
38 D NINA: Eli, we're running behind.
39 D ELI: Then you should've been on time.
40 A ¶ The man lunges, grabs Eli by the hoodie.
41 A Eli drops his phone, kicks the man's shin, and twists free.
42 A The man staggers into the sedan's open door.
43 A Nina grabs the gym bag and swings it into the man's back.
44 A All three go down in the gravel, tangled.
45 A ¶ Eli scrambles to the crusher's control panel.
46 A Slaps a lever.
47 A The jaws groan and begin to close.
48 D NINA: Eli! Don't!
49 D ELI (shouting): You said no papers!
50 A ¶ The man rolls away.
51 A The jaws descend on the sedan with a scream of metal.
52 A The gym bag, caught half under the door, is dragged in.
53 A ¶ Nina stares, mouth open.
54 A The man gets up slowly, face bleeding.
55 D MAN (to Eli, hoarse): You have any idea what was in that bag?
56 D ELI (dead calm): Terrence's rules.
57 A ¶ The crusher bottoms out.
58 A Glass bursts.
59 A A cloud of dust and loose banknotes swirls up through the sodium light, drifting down like snow.

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

### SCENE s01066 | EXT. ARCTIC ICE SHELF - LIFE RAFT CAMP - DAY
Detected names (may be incomplete or contain aliases): JOSEPHINE TALLCHIEF, DARIUS OKAFOR, BERNADETTE LACROIX, RESCUE ONE
1 A ¶ A bright white world.
2 A A yellow raft hauled up on a floe, a tarp strung from poles, a single seal-oil stove.
3 A Wind sighs.
4 A ¶ JOSEPHINE TALLCHIEF, 30s, parka hood trimmed with fur, kneels at the stove and stirs a pot.
5 A DARIUS OKAFOR, 40s, frostbitten cheeks, sits against the raft with a rifle.
6 A BERNADETTE LACROIX, 20s, in a red survival suit, stands at the edge of the floe with a radio.
7 D BERNADETTE (into radio): Rescue One, this is the Meridian. Do you copy?
8 A ¶ The radio hisses.
9 D RESCUE ONE [V.O.] (garbled): ...Meridian... position... say again...
10 D BERNADETTE: We're at seventy-eight north.
11 D RESCUE ONE [V.O.]: ...hold... coming...
12 A ¶ She grins.
13 A Turns to the others.
14 D BERNADETTE [CONT'D]: They're coming!
15 D JOSEPHINE: How long?
16 D BERNADETTE: Two hours!
17 D DARIUS (rising): Two hours. We can make two hours.
18 A ¶ The floe groans.
19 A A crack zigzags across the ice between them.
20 A Josephine and Darius lunge for the raft as the floe splits, and Bernadette leaps across the gap, landing hard in Josephine's arms.
21 A All three tumble into the raft as the ice shelf shifts and a second crack opens right where the stove had been.
22 D JOSEPHINE: Cut the line!
23 D DARIUS: Cut the line!
24 A ¶ Bernadette hacks the rope.
25 A The raft slides free.
26 A The three huddle.
27 A The stove sinks into black water.
28 D RESCUE ONE [V.O.] (clear now): Meridian, we have you. Stay put.

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
