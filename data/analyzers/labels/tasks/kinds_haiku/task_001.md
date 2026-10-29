You classify screenplay action lines that have NO character as their agent, for a writing tool.
Every line in the script must belong somewhere, so each marked line (`*`) gets exactly one kind:

- `setting`  : the place, scenery, light, weather, time of day, what a space looks/sounds like as a whole
               ("A cramped kitchen.", "Rain hammers the windows.", "Dawn over the harbor.", "Silence.")
- `event`    : something happens or an object/sound/vehicle/machine acts, with no character doing it
               ("The phone rings.", "A car backfires outside.", "Cash.", "The door swings shut.", "A light blinks.")
- `extra`    : done by people or creatures who are NOT characters of the scene (unnamed passers-by, a crowd that
               is not in the names list, an animal, a monster) ("A waiter passes.", "Two women lean on its bumper.")
- `camera`   : shot, edit or on-screen-text directions ("CLOSE ON the letter.", "We see...", "INSERT - phone",
               "SUPER: 1999", "Back to scene.", "INTERCUT", "Time cut.")
- `abstract` : narration, reflection, commentary, theme, time passing, things that are not visible action
               ("Some wounds never close.", "Years pass.", "This is the last time they will speak.")
- `character`: actually done by / describing a character in the names list (the marking was wrong). Then also give
               the name(s).

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block. Only `*` lines need a label;
the rest is context.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0101.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_enemy_10 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): MS
1 A ¶ Hovstad.
2 A It is conceivable.
3 A And in that case—
4 A ¶ Dr. Stockmann.
5 A In that case I promise you—.
6 A Look here, in that case you may print my report—every word of it.
7 A ¶ Hovstad.
8 A May I?
9 A Have I your word for it?
10 A ¶ Dr. Stockmann (giving him the MS.).
11 A Here it is; take it with you.
12 A It can do no harm for you to read it through, and you can give it me back later on.
13 A ¶ Hovstad.
14 A Good, good!
15 A That is what I will do.
16 A And now goodbye, Doctor.
17 A ¶ Dr. Stockmann.
18 A Goodbye, goodbye.
19 A You will see everything will run quite smoothly, Mr. Hovstad—quite smoothly.
20 A ¶ Hovstad.
21 A Hm!—we shall see.
22 A (Bows and goes out.)
23 A ¶ Dr. Stockmann (opens the dining-room door and looks in).
24 A Katherine!
25 A Oh, you are back, Petra?
26 A ¶ Petra (coming in).
27 A Yes, I have just come from the school.
28 A ¶ Mrs. Stockmann (coming in).
29 A Has he not been here yet?
30 A ¶ Dr. Stockmann.
31 A Peter?
32 A No, but I have had a long talk with Hovstad.
33 A He is quite excited about my discovery, I find it has a much wider bearing than I at first imagined.
34 A And he has put his paper at my disposal if necessity should arise.
35 A ¶ Mrs. Stockmann.
36 A Do you think it will?
37 A ¶ Dr. Stockmann.
38 A Not for a moment.
39 A But at all events it makes me feel proud to know that I have the liberal-minded independent press on my side.
40 A Yes, and just imagine—I have had a visit from the Chairman of the Householders' Association!
41 A ¶ Mrs. Stockmann.
42 A Oh!
43 A What did he want?
44 A ¶ Dr. Stockmann.
45 A To offer me his support too.
46 A They will support me in a body if it should be necessary.
47 A Katherine—do you know what I have got behind me?
48 A ¶ Mrs. Stockmann.
49 A Behind you?
50 A No, what have you got behind you?
51 A ¶ Dr. Stockmann.
52 A The compact majority.
53 A ¶ Mrs. Stockmann.
54 A Really?
55 A Is that a good thing for you Thomas?
56 A ¶ Dr. Stockmann.
57 A I should think it was a good thing.
58 A (Walks up and down rubbing his hands.)
59 A By Jove, it's a fine thing to feel this bond of brotherhood between oneself and one's fellow citizens!
60 A ¶ Petra.
61 A And to be able to do so much that is good and useful, father!
62 A ¶ Dr. Stockmann.
63 A And for one's own native town into the bargain, my child!
64 A ¶ Mrs. Stockmann.
65 A That was a ring at the bell.
66 A ¶ Dr. Stockmann.
67 A It must be he, then.
* 68 A (A knock is heard at the door.)
69 A Come in!
70 A ¶ Peter Stockmann (comes in from the hall).
71 A Good morning.
72 A ¶ Dr. Stockmann.
73 A Glad to see you, Peter!
74 A ¶ Mrs. Stockmann.
75 A Good morning, Peter, How are you?
76 A ¶ Peter Stockmann.
77 A So so, thank you.
78 A (To DR. STOCKMANN.)
79 A I received from you yesterday, after office hours, a report dealing with the condition of the water at the Baths.
80 A ¶ Dr. Stockmann.
81 A Yes.
82 A Have you read it?
83 A ¶ Peter Stockmann.
84 A Yes, I have,
85 A ¶ Dr. Stockmann.
86 A And what have you to say to it?
87 A ¶ Peter Stockmann (with a sidelong glance).
88 A Hm!—
89 A ¶ Mrs. Stockmann.
90 A Come along, Petra.
91 A (She and PETRA go into the room on the left.)
92 A ¶ Peter Stockmann (after a pause).
93 A Was it necessary to make all these investigations behind my back?
94 A ¶ Dr. Stockmann.
95 A Yes, because until I was absolutely certain about it—
96 A ¶ Peter Stockmann.
97 A Then you mean that you are absolutely certain now?
98 A ¶ Dr. Stockmann.
99 A Surely you are convinced of that.
100 A ¶ Peter Stockmann.
101 A Is it your intention to bring this document before the Baths Committee as a sort of official communication?
102 A ¶ Dr. Stockmann.
103 A Certainly.
104 A Something must be done in the matter—and that quickly.
105 A ¶ Peter Stockmann.
106 A As usual, you employ violent expressions in your report.
107 A You say, amongst other things, that what we offer visitors in our Baths is a permanent supply of poison.
108 A ¶ Dr. Stockmann.
109 A Well, can you describe it any other way, Peter?
110 A Just think—water that is poisonous, whether you drink it or bathe in it!
111 A And this we offer to the poor sick folk who come to us trustfully and pay us at an exorbitant rate to be made well again!
112 A ¶ Peter Stockmann.
113 A And your reasoning leads you to this conclusion, that we must build a sewer to draw off the alleged impurities from Molledal and must relay the water conduits.
114 A ¶ Dr. Stockmann.
115 A Yes.
116 A Do you see any other way out of it?
117 A I don't.
118 A ¶ Peter Stockmann.
119 A I made a pretext this morning to go and see the town engineer, and, as if only half seriously, broached the subject of these proposals as a thing we might perhaps have to take under consideration some time later on.
120 A ¶ Dr. Stockmann.
121 A Some time later on!
122 A ¶ Peter Stockmann.
123 A He smiled at what he considered to be my extravagance, naturally.
124 A Have you taken the trouble to consider what your proposed alterations would cost?
125 A According to the information I obtained, the expenses would probably mount up to fifteen or twenty thousand pounds.

### SCENE pt_enemy_13 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): MS
1 A ¶ Dr. Stockmann.
2 A The source is poisoned, man!
3 A Are you mad?
4 A We are making our living by retailing filth and corruption!
5 A The whole of our flourishing municipal life derives its sustenance from a lie!
6 A ¶ Peter Stockmann.
7 A All imagination—or something even worse.
8 A The man who can throw out such offensive insinuations about his native town must be an enemy to our community.
9 A ¶ Dr. Stockmann (going up to him).
10 A Do you dare to—!
11 A ¶ Mrs. Stockmann (throwing herself between them).
12 A Thomas!
13 A ¶ Petra (catching her father by the arm).
14 A Don't lose your temper, father!
15 A ¶ Peter Stockmann.
16 A I will not expose myself to violence.
17 A Now you have had a warning; so reflect on what you owe to yourself and your family.
18 A Goodbye.
19 A (Goes out.)
20 A ¶ Dr. Stockmann (walking up and down).
21 A Am I to put up with such treatment as this?
22 A In my own house, Katherine!
23 A What do you think of that!
24 A ¶ Mrs. Stockmann.
25 A Indeed it is both shameful and absurd, Thomas—
26 A ¶ Petra.
27 A If only I could give uncle a piece of my mind—
28 A ¶ Dr. Stockmann.
29 A It is my own fault.
30 A I ought to have flown out at him long ago!—shown my teeth!—bitten!
31 A To hear him call me an enemy to our community!
32 A Me!
33 A I shall not take that lying down, upon my soul!
34 A ¶ Mrs. Stockmann.
35 A But, dear Thomas, your brother has power on his side.
36 A ¶ Dr. Stockmann.
37 A Yes, but I have right on mine, I tell you.
38 A ¶ Mrs. Stockmann.
39 A Oh yes, right—right.
40 A What is the use of having right on your side if you have not got might?
41 A ¶ Petra.
42 A Oh, mother!—how can you say such a thing!
43 A ¶ Dr. Stockmann.
44 A Do you imagine that in a free country it is no use having right on your side?
45 A You are absurd, Katherine.
46 A Besides, haven't I got the liberal-minded, independent press to lead the way, and the compact majority behind me?
47 A That is might enough, I should think!
48 A ¶ Mrs. Stockmann.
49 A But, good heavens, Thomas, you don't mean to?
50 A ¶ Dr. Stockmann.
51 A Don't mean to what?
52 A ¶ Mrs. Stockmann.
53 A To set yourself up in opposition to your brother.
54 A ¶ Dr. Stockmann.
55 A In God's name, what else do you suppose I should do but take my stand on right and truth?
56 A ¶ Petra.
57 A Yes, I was just going to say that.
58 A ¶ Mrs. Stockmann.
59 A But it won't do you any earthly good.
60 A If they won't do it, they won't.
61 A ¶ Dr. Stockmann.
62 A Oho, Katherine!
63 A Just give me time, and you will see how I will carry the war into their camp.
64 A ¶ Mrs. Stockmann.
65 A Yes, you carry the war into their camp, and you get your dismissal—that is what you will do.
66 A ¶ Dr. Stockmann.
67 A In any case I shall have done my duty towards the public—towards the community, I, who am called its enemy!
68 A ¶ Mrs. Stockmann.
69 A But towards your family, Thomas?
70 A Towards your own home!
71 A Do you think that is doing your duty towards those you have to provide for?
72 A ¶ Petra.
73 A Ah, don't think always first of us, mother.
74 A ¶ Mrs. Stockmann.
75 A Oh, it is easy for you to talk; you are able to shift for yourself, if need be.
76 A But remember the boys, Thomas; and think a little of yourself too, and of me—
77 A ¶ Dr. Stockmann.
78 A I think you are out of your senses, Katherine!
79 A If I were to be such a miserable coward as to go on my knees to Peter and his damned crew, do you suppose I should ever know an hour's peace of mind all my life afterwards?
80 A ¶ Mrs. Stockmann.
81 A I don't know anything about that; but God preserve us from the peace of mind we shall have, all the same, if you go on defying him!
82 A You will find yourself again without the means of subsistence, with no income to count upon.
83 A I should think we had had enough of that in the old days.
84 A Remember that, Thomas; think what that means.
85 A ¶ Dr. Stockmann (collecting himself with a struggle and clenching his fists).
86 A And this is what this slavery can bring upon a free, honourable man!
87 A Isn't it horrible, Katherine?
88 A ¶ Mrs. Stockmann.
89 A Yes, it is sinful to treat you so, it is perfectly true.
90 A But, good heavens, one has to put up with so much injustice in this world.
91 A There are the boys, Thomas!
92 A Look at them!
93 A What is to become of them?
94 A Oh, no, no, you can never have the heart—.
95 A (EJLIF and MORTEN have come in, while she was speaking, with their school books in their hands.)
96 A ¶ Dr. Stockmann.
97 A The boys— I (Recovers himself suddenly.)
98 A No, even if the whole world goes to pieces, I will never bow my neck to this yokel (Goes towards his room.)
99 A ¶ Mrs. Stockmann (following him).
100 A Thomas—what are you going to do!
101 A ¶ Dr. Stockmann (at his door).
102 A I mean to have the right to look my sons in the face when they are grown men.
103 A (Goes into his room.)
104 A ¶ Mrs. Stockmann (bursting into tears).
105 A God help us all!
106 A ¶ Petra.
107 A Father is splendid!
108 A He will not give in.
109 A ¶ (The boys look on in amazement; PETRA signs to them not to speak.)
* 110 A ¶ (SCENE.—The editorial office of the "People's Messenger."
* 111 A The entrance door is on the left-hand side of the back wall; on the right-hand side is another door with glass panels through which the printing room can be seen.
* 112 A Another door in the right-hand wall.
* 113 A In the middle of the room is a large table covered with papers, newspapers and books.
* 114 A In the foreground on the left a window, before which stands a desk and a high stool.
* 115 A There are a couple of easy chairs by the table, and other chairs standing along the wall.
* 116 A The room is dingy and uncomfortable; the furniture is old, the chairs stained and torn.
* 117 A In the printing room the compositors are seen at work, and a printer is working a handpress.
118 A HOVSTAD is sitting at the desk, writing.
119 A BILLING comes in from the right with DR. STOCKMANN'S manuscript in his hand.)
120 A ¶ Billing.
121 A Well, I must say!
122 A ¶ Hovstad (still writing).
123 A Have you read it through?
124 A ¶ Billing (laying the MS. on the desk).
125 A Yes, indeed I have.
126 A ¶ Hovstad.
127 A Don't you think the Doctor hits them pretty hard?
128 A ¶ Billing.
129 A Hard?
130 A Bless my soul, he's crushing!
131 A Every word falls like—how shall I put it?—like the blow of a sledgehammer.
132 A ¶ Hovstad.
133 A Yes, but they are not the people to throw up the sponge at the first blow.
134 A ¶ Billing.
135 A That is true; and for that reason we must strike blow upon blow until the whole of this aristocracy tumbles to pieces.
136 A As I sat in there reading this, I almost seemed to see a revolution in being.

### SCENE pt_enemy_14 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ Hovstad (turning round).
2 A Hush!—Speak so that Aslaksen cannot hear you.
3 A ¶ Billing (lowering his voice).
4 A Aslaksen is a chicken-hearted chap, a coward; there is nothing of the man in him.
5 A But this time you will insist on your own way, won't you?
6 A You will put the Doctor's article in?
7 A ¶ Hovstad.
8 A Yes, and if the Mayor doesn't like it—
9 A ¶ Billing.
10 A That will be the devil of a nuisance.
11 A ¶ Hovstad.
12 A Well, fortunately we can turn the situation to good account, whatever happens.
13 A If the Mayor will not fall in with the Doctor's project, he will have all the small tradesmen down on him—the whole of the Householders' Association and the rest of them.
14 A And if he does fall in with it, he will fall out with the whole crowd of large shareholders in the Baths, who up to now have been his most valuable supporters—
15 A ¶ Billing.
16 A Yes, because they will certainly have to fork out a pretty penny—
17 A ¶ Hovstad.
18 A Yes, you may be sure they will.
19 A And in this way the ring will be broken up, you see, and then in every issue of the paper we will enlighten the public on the Mayor's incapability on one point and another, and make it clear that all the positions of trust in the town, the whole control of municipal affairs, ought to be put in the hands of the Liberals.
20 A ¶ Billing.
21 A That is perfectly true!
22 A I see it coming—I see it coming; we are on the threshold of a revolution!
* 23 A ¶ (A knock is heard at the door.)
24 A ¶ Hovstad.
25 A Hush!
26 A (Calls out.)
27 A Come in!
28 A (DR. STOCKMANN comes in by the street door.
29 A HOVSTAD goes to meet him.)
30 A Ah, it is you, Doctor!
31 A Well?
32 A ¶ Dr. Stockmann.
33 A You may set to work and print it, Mr. Hovstad!
34 A ¶ Hovstad.
35 A Has it come to that, then?
36 A ¶ Billing.
37 A Hurrah!
38 A ¶ Dr. Stockmann.
39 A Yes, print away.
40 A Undoubtedly it has come to that.
41 A Now they must take what they get.
42 A There is going to be a fight in the town, Mr. Billing!
43 A ¶ Billing.
44 A War to the knife, I hope!
45 A We will get our knives to their throats, Doctor!
46 A ¶ Dr. Stockmann.
47 A This article is only a beginning.
48 A I have already got four or five more sketched out in my head.
49 A Where is Aslaksen?
50 A ¶ Billing (calls into the printing-room).
51 A Aslaksen, just come here for a minute!
52 A ¶ Hovstad.
53 A Four or five more articles, did you say?
54 A On the same subject?
55 A ¶ Dr. Stockmann.
56 A No—far from it, my dear fellow.
57 A No, they are about quite another matter.
58 A But they all spring from the question of the water supply and the drainage.
59 A One thing leads to another, you know.
60 A It is like beginning to pull down an old house, exactly.
61 A ¶ Billing.
62 A Upon my soul, it's true; you find you are not done till you have pulled all the old rubbish down.
63 A ¶ Aslaksen (coming in).
64 A Pulled down?
65 A You are not thinking of pulling down the Baths surely, Doctor?
66 A ¶ Hovstad.
67 A Far from it, don't be afraid.
68 A ¶ Dr. Stockmann.
69 A No, we meant something quite different.
70 A Well, what do you think of my article, Mr. Hovstad?
71 A ¶ Hovstad.
72 A I think it is simply a masterpiece.
73 A ¶ Dr. Stockmann.
74 A Do you really think so?
75 A Well, I am very pleased, very pleased.
76 A ¶ Hovstad.
77 A It is so clear and intelligible.
78 A One need have no special knowledge to understand the bearing of it.
79 A You will have every enlightened man on your side.
80 A ¶ Aslaksen.
81 A And every prudent man too, I hope?
82 A ¶ Billing.
83 A The prudent and the imprudent—almost the whole town.
84 A ¶ Aslaksen.
85 A In that case we may venture to print it.
86 A ¶ Dr. Stockmann.
87 A I should think so!
88 A ¶ Hovstad.
89 A We will put it in tomorrow morning.
90 A ¶ Dr. Stockmann.
91 A Of course—you must not lose a single day.
92 A What I wanted to ask you, Mr. Aslaksen, was if you would supervise the printing of it yourself.
93 A ¶ Aslaksen.
94 A With pleasure.
95 A ¶ Dr. Stockmann.
96 A Take care of it as if it were a treasure!
97 A No misprints—every word is important.
98 A I will look in again a little later; perhaps you will be able to let me see a proof.
99 A I can't tell you how eager I am to see it in print, and see it burst upon the public—
100 A ¶ Billing.
101 A Burst upon them—yes, like a flash of lightning!
102 A ¶ Dr. Stockmann. —and to have it submitted to the judgment of my intelligent fellow townsmen.
103 A You cannot imagine what I have gone through today.
104 A I have been threatened first with one thing and then with another; they have tried to rob me of my most elementary rights as a man—
105 A ¶ Billing.
106 A What!
107 A Your rights as a man!
108 A ¶ Dr. Stockmann. —they have tried to degrade me, to make a coward of me, to force me to put personal interests before my most sacred convictions.
109 A ¶ Billing.
110 A That is too much—I'm damned if it isn't.
111 A ¶ Hovstad.
112 A Oh, you mustn't be surprised at anything from that quarter.
113 A ¶ Dr. Stockmann.
114 A Well, they will get the worst of it with me; they may assure themselves of that.
115 A I shall consider the "People's Messenger" my sheet-anchor now, and every single day I will bombard them with one article after another, like bombshells—
116 A ¶ Aslaksen.
117 A Yes, but
118 A ¶ Billing.
119 A Hurrah!—it is war, it is war!
120 A ¶ Dr. Stockmann.
121 A I shall smite them to the ground—I shall crush them—I shall break down all their defenses, before the eyes of the honest public!
122 A That is what I shall do!
123 A ¶ Aslaksen, Yes, but in moderation, Doctor—proceed with moderation.

### SCENE pt_enemy_16 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ Billing.
2 A Do you think I am not quite aware of that?
3 A My object is precisely not to get it.
4 A A slight of that kind stimulates a man's fighting power—it is like getting a supply of fresh bile—and I am sure one needs that badly enough in a hole-and-corner place like this, where it is so seldom anything happens to stir one up.
5 A ¶ Hovstad (writing).
6 A Quite so, quite so.
7 A ¶ Billing.
8 A Ah, I shall be heard of yet!—Now I shall go and write the appeal to the Householders' Association.
9 A (Goes into the room on the right.)
10 A ¶ Hovstad (sitting al his desk, biting his penholder, says slowly).
11 A Hm!—that's it, is it.
* 12 A (A knock is heard.)
13 A Come in!
14 A (PETRA comes in by the outer door.
15 A HOVSTAD gets up.)
16 A What, you!—here?
17 A ¶ Petra.
18 A Yes, you must forgive me—
19 A ¶ Hovstad (pulling a chair forward).
20 A Won't you sit down?
21 A ¶ Petra.
22 A No, thank you; I must go again in a moment.
23 A ¶ Hovstad.
24 A Have you come with a message from your father, by any chance?
25 A ¶ Petra.
26 A No, I have come on my own account.
27 A (Takes a book out of her coat pocket.)
28 A Here is the English story.
29 A ¶ Hovstad.
30 A Why have you brought it back?
31 A ¶ Petra.
32 A Because I am not going to translate it.
33 A ¶ Hovstad.
34 A But you promised me faithfully.
35 A ¶ Petra.
36 A Yes, but then I had not read it, I don't suppose you have read it either?
37 A ¶ Hovstad.
38 A No, you know quite well I don't understand English; but—
39 A ¶ Petra.
40 A Quite so.
41 A That is why I wanted to tell you that you must find something else.
42 A (Lays the book on the table.)
43 A You can't use this for the "People's Messenger."
44 A ¶ Hovstad.
45 A Why not?
46 A ¶ Petra.
47 A Because it conflicts with all your opinions.
48 A ¶ Hovstad.
49 A Oh, for that matter—
50 A ¶ Petra.
51 A You don't understand me.
52 A The burden of this story is that there is a supernatural power that looks after the so-called good people in this world and makes everything happen for the best in their case—while all the so-called bad people are punished.
53 A ¶ Hovstad.
54 A Well, but that is all right.
55 A That is just what our readers want.
56 A ¶ Petra.
57 A And are you going to be the one to give it to them?
58 A For myself, I do not believe a word of it.
59 A You know quite well that things do not happen so in reality.
60 A ¶ Hovstad.
61 A You are perfectly right; but an editor cannot always act as he would prefer.
62 A He is often obliged to bow to the wishes of the public in unimportant matters.
63 A Politics are the most important thing in life—for a newspaper, anyway; and if I want to carry my public with me on the path that leads to liberty and progress, I must not frighten them away.
64 A If they find a moral tale of this sort in the serial at the bottom of the page, they will be all the more ready to read what is printed above it; they feel more secure, as it were.
65 A ¶ Petra.
66 A For shame!
67 A You would never go and set a snare like that for your readers; you are not a spider!
68 A ¶ Hovstad (smiling).
69 A Thank you for having such a good opinion of me.
70 A No; as a matter of fact that is Billing's idea and not mine.
71 A ¶ Petra.
72 A Billing's!
73 A ¶ Hovstad.
74 A Yes; anyway, he propounded that theory here one day.
75 A And it is Billing who is so anxious to have that story in the paper; I don't know anything about the book.
76 A ¶ Petra.
77 A But how can Billing, with his emancipated views—
78 A ¶ Hovstad.
79 A Oh, Billing is a many-sided man.
80 A He is applying for the post of secretary to the Bench, too, I hear.
81 A ¶ Petra.
82 A I don't believe it, Mr. Hovstad.
83 A How could he possibly bring himself to do such a thing?
84 A ¶ Hovstad.
85 A Ah, you must ask him that.
86 A ¶ Petra.
87 A I should never have thought it of him.
88 A ¶ Hovstad (looking more closely at her).
89 A No?
90 A Does it really surprise you so much?
91 A ¶ Petra.
92 A Yes.
93 A Or perhaps not altogether.
94 A Really, I don't quite know
95 A ¶ Hovstad.
96 A We journalists are not much worth, Miss Stockmann.
97 A ¶ Petra.
98 A Do you really mean that?
99 A ¶ Hovstad.
100 A I think so sometimes.
101 A ¶ Petra.
102 A Yes, in the ordinary affairs of everyday life, perhaps; I can understand that.
103 A But now, when you have taken a weighty matter in hand—
104 A ¶ Hovstad.
105 A This matter of your father's, you mean?
106 A ¶ Petra.
107 A Exactly.
108 A It seems to me that now you must feel you are a man worth more than most.
109 A ¶ Hovstad.
110 A Yes, today I do feel something of that sort.
111 A ¶ Petra.
112 A Of course you do, don't you?
113 A It is a splendid vocation you have chosen—to smooth the way for the march of unappreciated truths, and new and courageous lines of thought.
114 A If it were nothing more than because you stand fearlessly in the open and take up the cause of an injured man—
115 A ¶ Hovstad.
116 A Especially when that injured man is—ahem!—I don't rightly know how to—
117 A ¶ Petra.
118 A When that man is so upright and so honest, you mean?
119 A ¶ Hovstad (more gently).
120 A Especially when he is your father I meant.
121 A ¶ Petra (suddenly checked).
122 A That?

### SCENE pt_enemy_21 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): MS
1 A ¶ Aslaksen.
2 A It is public opinion—the enlightened public—householders and people of that kind; they control the newspapers.
3 A ¶ Dr. Stockmann (composedly).
4 A And I have all these influences against me?
5 A ¶ Aslaksen.
6 A Yes, you have.
7 A It would mean the absolute ruin of the community if your article were to appear.
8 A ¶ Dr. Stockmann.
9 A Indeed.
10 A ¶ Peter Stockmann.
11 A My hat and stick, if you please.
12 A (DR. STOCKMANN takes off the hat and lays it on the table with the stick.
13 A PETER STOCKMANN takes them up.)
14 A Your authority as mayor has come to an untimely end.
15 A ¶ Dr. Stockmann.
16 A We have not got to the end yet.
17 A (To HOVSTAD.)
18 A Then it is quite impossible for you to print my article in the "People's Messenger"?
19 A ¶ Hovstad.
20 A Quite impossible—out of regard for your family as well.
21 A ¶ Mrs. Stockmann.
22 A You need not concern yourself about his family, thank you, Mr. Hovstad.
23 A ¶ Peter Stockmann (taking a paper from his pocket).
24 A It will be sufficient, for the guidance of the public, if this appears.
25 A It is an official statement.
26 A May I trouble you?
27 A ¶ Hovstad (taking the paper).
28 A Certainly; I will see that it is printed.
29 A ¶ Dr. Stockmann.
30 A But not mine.
31 A Do you imagine that you can silence me and stifle the truth!
32 A You will not find it so easy as you suppose.
33 A Mr. Aslaksen, kindly take my manuscript at once and print it as a pamphlet—at my expense.
34 A I will have four hundred copies—no, five or six hundred.
35 A ¶ Aslaksen.
36 A If you offered me its weight in gold, I could not lend my press for any such purpose, Doctor.
37 A It would be flying in the face of public opinion.
38 A You will not get it printed anywhere in the town.
39 A ¶ Dr. Stockmann.
40 A Then give it me back.
41 A ¶ Hovstad (giving him the MS.).
42 A Here it is.
43 A ¶ Dr. Stockmann (taking his hat and stick).
44 A It shall be made public all the same.
45 A I will read it out at a mass meeting of the townspeople.
46 A All my fellow-citizens shall hear the voice of truth!
47 A ¶ Peter Stockmann.
48 A You will not find any public body in the town that will give you the use of their hall for such a purpose.
49 A ¶ Aslaksen.
50 A Not a single one, I am certain.
51 A ¶ Billing.
52 A No, I'm damned if you will find one.
53 A ¶ Mrs. Stockmann.
54 A But this is too shameful!
55 A Why should every one turn against you like that?
56 A ¶ Dr. Stockmann (angrily).
57 A I will tell you why.
58 A It is because all the men in this town are old women—like you; they all think of nothing but their families, and never of the community.
59 A ¶ Mrs. Stockmann (putting her arm into his).
60 A Then I will show them that an old woman can be a man for once.
61 A I am going to stand by you, Thomas!
62 A ¶ Dr. Stockmann.
63 A Bravely said, Katherine!
64 A It shall be made public—as I am a living soul!
65 A If I can't hire a hall, I shall hire a drum, and parade the town with it and read it at every street-corner.
66 A ¶ Peter Stockmann.
67 A You are surely not such an errant fool as that!
68 A ¶ Dr. Stockmann.
69 A Yes, I am.
70 A ¶ Aslaksen.
71 A You won't find a single man in the whole town to go with you.
72 A ¶ Billing.
73 A No, I'm damned if you will.
74 A ¶ Mrs. Stockmann.
75 A Don't give in, Thomas.
76 A I will tell the boys to go with you.
77 A ¶ Dr. Stockmann.
78 A That is a splendid idea!
79 A ¶ Mrs. Stockmann.
80 A Morten will be delighted; and Ejlif will do whatever he does.
81 A ¶ Dr. Stockmann.
82 A Yes, and Petra!—and you too, Katherine!
83 A ¶ Mrs. Stockmann.
84 A No, I won't do that; but I will stand at the window and watch you, that's what I will do.
85 A ¶ Dr. Stockmann (puts his arms round her and kisses her).
86 A Thank you, my dear!
87 A Now you and I are going to try a fall, my fine gentlemen!
88 A I am going to see whether a pack of cowards can succeed in gagging a patriot who wants to purify society!
89 A (He and his wife go out by the street door.)
90 A ¶ Peter Stockmann (shaking his head seriously).
91 A Now he has sent her out of her senses, too.
* 92 A ¶ (SCENE.—A big old-fashioned room in CAPTAIN HORSTER'S house.
* 93 A At the back folding-doors, which are standing open, lead to an ante-room.
* 94 A Three windows in the left-hand wall.
* 95 A In the middle of the opposite wall a platform has been erected.
* 96 A On this is a small table with two candles, a water-bottle and glass, and a bell.
* 97 A The room is lit by lamps placed between the windows.
* 98 A In the foreground on the left there is a table with candles and a chair.
* 99 A To the right is a door and some chairs standing near it.
* 100 A The room is nearly filled with a crowd of townspeople of all sorts, a few women and schoolboys being amongst them.
* 101 A People are still streaming in from the back, and the room is soon filled.)
102 A ¶ 1st Citizen (meeting another).
103 A Hullo, Lamstad!
104 A You here too?
105 A ¶ 2nd Citizen.
106 A I go to every public meeting, I do.
107 A ¶ 3rd Citizen.
108 A Brought your whistle too, I expect!
109 A ¶ 2nd Citizen.
110 A I should think so.
111 A Haven't you?
112 A ¶ 3rd Citizen.
113 A Rather!
114 A And old Evensen said he was going to bring a cow-horn, he did.
115 A ¶ 2nd Citizen.
116 A Good old Evensen!
117 A (Laughter among the crowd.)
118 A ¶ 4th Citizen (coming up to them).
119 A I say, tell me what is going on here tonight?
120 A ¶ 2nd Citizen.
121 A Dr. Stockmann is going to deliver an address attacking the Mayor.
122 A ¶ 4th Citizen.
123 A But the Mayor is his brother.
124 A ¶ 1st Citizen.
125 A That doesn't matter; Dr. Stockmann's not the chap to be afraid.
126 A ¶ 3rd Citizen.
127 A But he is in the wrong; it said so in the “People’s Messenger.”

### SCENE pt_enemy_22 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ 2nd Citizen.
2 A Yes, I expect he must be in the wrong this time, because neither the Householders’ Association nor the Citizens’ Club would lend him their hall for his meeting.
3 A ¶ 1st Citizen.
4 A He couldn’t even get the loan of the hall at the Baths.
5 A ¶ 2nd Citizen.
6 A No, I should think not.
7 A ¶ A Man in another part of the crowd.
8 A I say—who are we to back up in this?
9 A ¶ Another Man, beside him.
10 A Watch Aslaksen, and do as he does.
11 A ¶ Billing (pushing his way through the crowd, with a writing-case under his arm).
12 A Excuse me, gentlemen—do you mind letting me through?
13 A I am reporting for the “People’s Messenger.”
14 A Thank you very much!
15 A (He sits down at the table on the left.)
16 A ¶ A Workman.
17 A Who was that?
18 A ¶ Second Workman.
19 A Don’t you know him?
20 A It’s Billing, who writes for Aslaksen’s paper.
21 A ¶ (CAPTAIN HORSTER brings in MRS. STOCKMANN and PETRA through the door on the right.
22 A EJLIF and MORTEN follow them in.)
23 A ¶ Horster.
24 A I thought you might all sit here; you can slip out easily from here, if things get too lively.
25 A ¶ Mrs. Stockmann.
26 A Do you think there will be a disturbance?
27 A ¶ Horster.
28 A One can never tell—with such a crowd.
29 A But sit down, and don’t be uneasy.
30 A ¶ Mrs. Stockmann (sitting down).
31 A It was extremely kind of you to offer my husband the room.
32 A ¶ Horster.
33 A Well, if nobody else would—
34 A ¶ Petra (who has sat down beside her mother).
35 A And it was a plucky thing to do, Captain Horster.
36 A ¶ Horster.
37 A Oh, it is not such a great matter as all that.
38 A ¶ (HOVSTAD and ASLAKSEN make their way through the crowd.)
39 A ¶ Aslaksen (going up to HORSTER).
40 A Has the Doctor not come yet?
41 A ¶ Horster.
42 A He is waiting in the next room.
43 A (Movement in the crowd by the door at the back.)
44 A ¶ Hovstad.
45 A Look—here comes the Mayor!
46 A ¶ Billing.
47 A Yes, I’m damned if he hasn’t come after all!
48 A ¶ (PETER STOCKMANN makes his way gradually through the crowd, bows courteously, and takes up a position by the wall on the left.
49 A Shortly afterwards Dr. STOCKMANN comes in by the right-hand door.
50 A He is dressed in a black frock-coat, with a white tie.
51 A There is a little feeble applause, which is hushed down.
* 52 A Silence is obtained.)
53 A ¶ Dr. Stockmann (in an undertone).
54 A How do you feel, Katherine?
55 A ¶ Mrs. Stockmann.
56 A All right, thank you.
57 A (Lowering her voice.)
58 A Be sure not to lose your temper, Thomas.
59 A ¶ Dr. Stockmann.
60 A Oh, I know how to control myself.
61 A ¶ (Looks at his watch, steps on to the platform, and bows.
62 A It is a quarter past—so I will begin.
63 A (Takes his MS. out of his pocket).
64 A ¶ Aslaksen.
65 A I think we ought to elect a chairman first.
66 A ¶ Dr. Stockmann.
67 A No, it is quite unnecessary.
68 A ¶ Some of the Crowd.
69 A Yes—yes!
70 A ¶ Peter Stockmann.
71 A I certainly think too that we ought to have a chairman.
72 A ¶ Dr. Stockmann.
73 A But I have called this meeting to deliver a lecture, Peter.
74 A ¶ Peter Stockmann.
75 A Dr. Stockmann’s lecture may possibly lead to a considerable conflict of opinion.
76 A ¶ Voices in the Crowd.
77 A A chairman!
78 A A chairman !
79 A ¶ Hovstad.
80 A The general wish of the meeting seems to be that a chairman should be elected.
81 A ¶ Dr. Stockmann (restraining himself).
82 A Very well—let the meeting have its way.
83 A ¶ Aslaksen.
84 A Will the Mayor be good enough to undertake the task ?
85 A ¶ Three Men (clapping their hands).
86 A Bravo!
87 A Bravo!
88 A ¶ Peter Stockmann.
89 A For various reasons, which you will easily understand, I must beg to be excused.
90 A But fortunately we have amongst us a man who I think will be acceptable to you all.
91 A I refer to the President of the Householders' Association, Mr. Aslaksen.
92 A ¶ Several voices.
93 A Yes—Aslaksen!
94 A Bravo Aslaksen!
95 A ¶ (DR. STOCKMANN takes up his MS. and walks up and down the platform.)
96 A ¶ Aslaksen.
97 A Since my fellow-citizens choose to entrust me with this duty, I cannot refuse.
98 A ¶ (Loud applause.
99 A ASLAKSEN mounts the platform.)
100 A ¶ Billing (writing), "Mr. Aslaksen was elected with enthusiasm."
101 A ¶ Aslaksen.
102 A And now, as I am in this position, I should like to say a few brief words.
103 A I am a quiet and peaceable man, who believes in discreet moderation, and—and—in moderate discretion.
104 A All my friends can bear witness to that.
105 A ¶ Several Voices.
106 A That's right!
107 A That's right, Aslaksen!

### SCENE pt_enemy_24 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ Dr. Stockmann.
2 A I have already told you that what I want to speak about is the great discovery I have made lately—the discovery that all the sources of our moral life are poisoned and that the whole fabric of our civic community is founded on the pestiferous soil of falsehood.
3 A ¶ Voices of disconcerted Citizens.
4 A What is that he says?
5 A ¶ Peter Stockmann.
6 A Such an insinuation—!
7 A ¶ Aslaksen (with his hand on his bell).
8 A I call upon the speaker to moderate his language.
9 A ¶ Dr. Stockmann.
10 A I have always loved my native town as a man only can love the home of his youthful days.
11 A I was not old when I went away from here; and exile, longing and memories cast as it were an additional halo over both the town and its inhabitants.
12 A (Some clapping and applause.)
13 A And there I stayed, for many years, in a horrible hole far away up north.
14 A When I came into contact with some of the people that lived scattered about among the rocks, I often thought it would of been more service to the poor half-starved creatures if a veterinary doctor had been sent up there, instead of a man like me.
15 A (Murmurs among the crowd.)
16 A ¶ Billing (laying down his pen).
17 A I'm damned if I have ever heard—!
18 A ¶ Hovstad.
19 A It is an insult to a respectable population!
20 A ¶ Dr. Stockmann.
21 A Wait a bit!
22 A I do not think anyone will charge me with having forgotten my native town up there.
23 A I was like one of the eider-ducks brooding on its nest, and what I hatched was the plans for these Baths.
24 A (Applause and protests.)
25 A And then when fate at last decreed for me the great happiness of coming home again—I assure you, gentlemen, I thought I had nothing more in the world to wish for.
26 A Or rather, there was one thing I wished for—eagerly, untiringly, ardently—and that was to be able to be of service to my native town and the good of the community.
27 A ¶ Peter Stockmann (looking at the ceiling).
28 A You chose a strange way of doing it—ahem!
29 A ¶ Dr. Stockmann.
30 A And so, with my eyes blinded to the real facts, I revelled in happiness.
31 A But yesterday morning—no, to be precise, it was yesterday afternoon—the eyes of my mind were opened wide, and the first thing I realised was the colossal stupidity of the authorities—.
32 A (Uproar, shouts and laughter, MRS. STOCKMANN coughs persistently.)
33 A ¶ Peter Stockmann.
34 A Mr. Chairman!
35 A ¶ Aslaksen (ringing his bell).
36 A By virtue of my authority—!
37 A ¶ Dr. Stockmann.
38 A It is a petty thing to catch me up on a word, Mr. Aslaksen.
39 A What I mean is only that I got scent of the unbelievable piggishness our leading men had been responsible for down at the Baths.
40 A I can't stand leading men at any price!—I have had enough of such people in my time.
41 A They are like billy-goats on a young plantation; they do mischief everywhere.
42 A They stand in a free man's way, whichever way he turns, and what I should like best would be to see them exterminated like any other vermin—.
43 A (Uproar.)
44 A ¶ Peter Stockmann.
45 A Mr. Chairman, can we allow such expressions to pass?
46 A ¶ Aslaksen (with his hand on his bell).
47 A Doctor—!
48 A ¶ Dr. Stockmann.
49 A I cannot understand how it is that I have only now acquired a clear conception of what these gentry are, when I had almost daily before my eyes in this town such an excellent specimen of them—my brother Peter—slow-witted and hide-bound in prejudice—.
50 A (Laughter, uproar and hisses.
51 A MRS. STOCKMANN Sits coughing assiduously.
52 A ASLAKSEN rings his bell violently.)
53 A ¶ The Drunken Man (who has got in again).
54 A Is it me he is talking about?
55 A My name's Petersen, all right—but devil take me if I—
56 A ¶ Angry Voices.
57 A Turn out that drunken man!
58 A Turn him out.
59 A (He is turned out again.)
60 A ¶ Peter Stockmann.
61 A Who was that person?
62 A ¶ 1st Citizen.
63 A I don't know who he is, Mr. Mayor.
64 A ¶ 2nd Citizen.
65 A He doesn't belong here.
66 A ¶ 3rd Citizen.
67 A I expect he is a navvy from over at—(the rest is inaudible).
68 A ¶ Aslaksen.
69 A He had obviously had too much beer.
70 A Proceed, Doctor; but please strive to be moderate in your language.
71 A ¶ Dr. Stockmann.
72 A Very well, gentlemen, I will say no more about our leading men.
73 A And if anyone imagines, from what I have just said, that my object is to attack these people this evening, he is wrong—absolutely wide of the mark.
74 A For I cherish the comforting conviction that these parasites—all these venerable relics of a dying school of thought—are most admirably paving the way for their own extinction; they need no doctor's help to hasten their end.
75 A Nor is it folk of that kind who constitute the most pressing danger to the community.
76 A It is not they who are most instrumental in poisoning the sources of our moral life and infecting the ground on which we stand.
77 A It is not they who are the most dangerous enemies of truth and freedom amongst us.
78 A ¶ Shouts from all sides.
79 A Who then?
80 A Who is it?
81 A Name!
82 A Name!
83 A ¶ Dr. Stockmann.
84 A You may depend upon it—I shall name them!
85 A That is precisely the great discovery I made yesterday.
86 A (Raises his voice.)
87 A The most dangerous enemy of truth and freedom amongst us is the compact majority—yes, the damned compact Liberal majority—that is it!
88 A Now you know!
89 A (Tremendous uproar.
90 A Most of the crowd are shouting, stamping and hissing.
91 A Some of the older men among them exchange stolen glances and seem to be enjoying themselves.
92 A MRS. STOCKMANN gets up, looking anxious.
93 A EJLIF and MORTEN advance threateningly upon some schoolboys who are playing pranks.
94 A ASLAKSEN rings his bell and begs for silence.
95 A HOVSTAD and BILLING both talk at once, but are inaudible.
* 96 A At last quiet is restored.)
97 A ¶ Aslaksen.
98 A As Chairman, I call upon the speaker to withdraw the ill-considered expressions he has just used.
99 A ¶ Dr. Stockmann.
100 A Never, Mr. Aslaksen!
101 A It is the majority in our community that denies me my freedom and seeks to prevent my speaking the truth.
102 A ¶ Hovstad.
103 A The majority always has right on its side.
104 A ¶ Billing.
105 A And truth too, by God!
106 A ¶ Dr. Stockmann.
107 A The majority never has right on its side.
108 A Never, I say!
109 A That is one of these social lies against which an independent, intelligent man must wage war.
110 A Who is it that constitute the majority of the population in a country?
111 A Is it the clever folk, or the stupid?
112 A I don't imagine you will dispute the fact that at present the stupid people are in an absolutely overwhelming majority all the world over.
113 A But, good Lord!—you can never pretend that it is right that the stupid folk should govern the clever ones!
114 A (Uproar and cries.)
115 A Oh, yes—you can shout me down, I know!
116 A But you cannot answer me.
117 A The majority has might on its side—unfortunately; but right it has not.
118 A I am in the right—I and a few other scattered individuals.
119 A The minority is always in the right.
120 A (Renewed uproar.)
121 A ¶ Hovstad.
122 A Aha!—so Dr. Stockmann has become an aristocrat since the day before yesterday!
123 A ¶ Dr. Stockmann.
124 A I have already said that I don't intend to waste a word on the puny, narrow-chested, short-winded crew whom we are leaving astern.
125 A Pulsating life no longer concerns itself with them.
126 A I am thinking of the few, the scattered few amongst us, who have absorbed new and vigorous truths.
127 A Such men stand, as it were, at the outposts, so far ahead that the compact majority has not yet been able to come up with them; and there they are fighting for truths that are too newly-born into the world of consciousness to have any considerable number of people on their side as yet.
128 A ¶ Hovstad.
129 A So the Doctor is a revolutionary now!
130 A ¶ Dr. Stockmann.
131 A Good heavens—of course I am, Mr. Hovstad!
132 A I propose to raise a revolution against the lie that the majority has the monopoly of the truth.
133 A What sort of truths are they that the majority usually supports?
134 A They are truths that are of such advanced age that they are beginning to break up.
135 A And if a truth is as old as that, it is also in a fair way to become a lie, gentlemen.
136 A (Laughter and mocking cries.)
137 A Yes, believe me or not, as you like; but truths are by no means as long-lived at Methuselah—as some folk imagine.
138 A A normally constituted truth lives, let us say, as a rule seventeen or eighteen, or at most twenty years—seldom longer.
139 A But truths as aged as that are always worn frightfully thin, and nevertheless it is only then that the majority recognises them and recommends them to the community as wholesome moral nourishment.
140 A There is no great nutritive value in that sort of fare, I can assure you; and, as a doctor, I ought to know.
141 A These "majority truths" are like last year's cured meat—like rancid, tainted ham; and they are the origin of the moral scurvy that is rampant in our communities.
142 A ¶ Aslaksen.
143 A It appears to me that the speaker is wandering a long way from his subject.
144 A ¶ Peter Stockmann.
145 A I quite agree with the Chairman.
146 A ¶ Dr. Stockmann.
147 A Have you gone clean out of your senses, Peter?
148 A I am sticking as closely to my subject as I can; for my subject is precisely this, that it is the masses, the majority—this infernal compact majority—that poisons the sources of our moral life and infects the ground we stand on.
149 A ¶ Hovstad.
150 A And all this because the great, broadminded majority of the people is prudent enough to show deference only to well-ascertained and well-approved truths?
151 A ¶ Dr. Stockmann.
152 A Ah, my good Mr. Hovstad, don't talk nonsense about well-ascertained truths!
153 A The truths of which the masses now approve are the very truths that the fighters at the outposts held to in the days of our grandfathers.
154 A We fighters at the outposts nowadays no longer approve of them; and I do not believe there is any other well-ascertained truth except this, that no community can live a healthy life if it is nourished only on such old marrowless truths.
155 A ¶ Hovstad.
156 A But, instead of standing there using vague generalities, it would be interesting if you would tell us what these old marrowless truths are, that we are nourished on.
157 A ¶ (Applause from many quarters.)
158 A ¶ Dr. Stockmann.
159 A Oh, I could give you a whole string of such abominations; but to begin with I will confine myself to one well-approved truth, which at bottom is a foul lie, but upon which nevertheless Mr. Hovstad and the "People's Messenger" and all the "Messenger's" supporters are nourished.
160 A ¶ Hovstad.
161 A And that is—?
162 A ¶ Dr. Stockmann.
163 A That is, the doctrine you have inherited from your forefathers and proclaim thoughtlessly far and wide—the doctrine that the public, the crowd, the masses, are the essential part of the population—that they constitute the People—that the common folk, the ignorant and incomplete element in the community, have the same right to pronounce judgment and to approve, to direct and to govern, as the isolated, intellectually superior personalities in it.

### SCENE pt_enemy_27 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): DOCTOR
* 1 A ¶ (SCENE.—DR. STOCKMANN'S study.
* 2 A Bookcases and cabinets containing specimens, line the walls.
* 3 A At the back is a door leading to the hall; in the foreground on the left, a door leading to the sitting-room.
* 4 A In the righthand wall are two windows, of which all the panes are broken.
* 5 A The DOCTOR'S desk, littered with books and papers, stands in the middle of the room, which is in disorder.
* 6 A It is morning.
7 A DR. STOCKMANN in dressing-gown, slippers and a smoking-cap, is bending down and raking with an umbrella under one of the cabinets.
8 A After a little while he rakes out a stone.)
9 A ¶ Dr. Stockmann (calling through the open sitting-room door).
10 A Katherine, I have found another one.
11 A ¶ Mrs. Stockmann (from the sitting-room).
12 A Oh, you will find a lot more yet, I expect.
13 A ¶ Dr. Stockmann (adding the stone to a heap of others on the table).
14 A I shall treasure these stones as relics.
15 A Ejlif and Morten shall look at them every day, and when they are grown up they shall inherit them as heirlooms.
16 A (Rakes about under a bookcase.)
17 A Hasn't—what the deuce is her name?—the girl, you know—hasn't she been to fetch the glazier yet?
18 A ¶ Mrs. Stockmann (coming in).
19 A Yes, but he said he didn't know if he would be able to come today.
20 A ¶ Dr. Stockmann.
21 A You will see he won't dare to come.
22 A ¶ Mrs. Stockmann.
23 A Well, that is just what Randine thought—that he didn't dare to, on account of the neighbours.
24 A (Calls into the sitting-room.)
25 A What is it you want, Randine?
26 A Give it to me.
27 A (Goes in, and comes out again directly.)
28 A Here is a letter for you, Thomas.
29 A ¶ Dr. Stockmann.
30 A Let me see it.
31 A (Opens and reads it.)
32 A Ah!—of course.
33 A ¶ Mrs. Stockmann.
34 A Who is it from?
35 A ¶ Dr. Stockmann.
36 A From the landlord.
37 A Notice to quit.
38 A ¶ Mrs. Stockmann.
39 A Is it possible?
40 A Such a nice man
41 A ¶ Dr. Stockmann (looking at the letter).
42 A Does not dare do otherwise, he says.
43 A Doesn't like doing it, but dare not do otherwise—on account of his fellow-citizens—out of regard for public opinion.
44 A Is in a dependent position—dares not offend certain influential men.
45 A ¶ Mrs. Stockmann.
46 A There, you see, Thomas!
47 A ¶ Dr. Stockmann.
48 A Yes, yes, I see well enough; the whole lot of them in the town are cowards; not a man among them dares do anything for fear of the others.
49 A (Throws the letter on to the table.)
50 A But it doesn't matter to us, Katherine.
51 A We are going to sail away to the New World, and—
52 A ¶ Mrs. Stockmann.
53 A But, Thomas, are you sure we are well advised to take this step?
54 A ¶ Dr. Stockmann.
55 A Are you suggesting that I should stay here, where they have pilloried me as an enemy of the people—branded me—broken my windows!
56 A And just look here, Katherine—they have torn a great rent in my black trousers too!
57 A ¶ Mrs. Stockmann.
58 A Oh, dear!—and they are the best pair you have got!
59 A ¶ Dr. Stockmann.
60 A You should never wear your best trousers when you go out to fight for freedom and truth.
61 A It is not that I care so much about the trousers, you know; you can always sew them up again for me.
62 A But that the common herd should dare to make this attack on me, as if they were my equals—that is what I cannot, for the life of me, swallow!
63 A ¶ Mrs. Stockmann.
64 A There is no doubt they have behaved very ill toward you, Thomas; but is that sufficient reason for our leaving our native country for good and all?
65 A ¶ Dr. Stockmann.
66 A If we went to another town, do you suppose we should not find the common people just as insolent as they are here?
67 A Depend upon it, there is not much to choose between them.
68 A Oh, well, let the curs snap—that is not the worst part of it.
69 A The worst is that, from one end of this country to the other, every man is the slave of his Party.
70 A Although, as far as that goes, I daresay it is not much better in the free West either; the compact majority, and liberal public opinion, and all that infernal old bag of tricks are probably rampant there too.
71 A But there things are done on a larger scale, you see.
72 A They may kill you, but they won't put you to death by slow torture.
73 A They don't squeeze a free man's soul in a vice, as they do here.
74 A And, if need be, one can live in solitude.
75 A (Walks up and down.)
76 A If only I knew where there was a virgin forest or a small South Sea island for sale, cheap—
77 A ¶ Mrs. Stockmann.
78 A But think of the boys, Thomas!
79 A ¶ Dr. Stockmann (standing still).
80 A What a strange woman you are, Katherine!
81 A Would you prefer to have the boys grow up in a society like this?
82 A You saw for yourself last night that half the population are out of their minds; and if the other half have not lost their senses, it is because they are mere brutes, with no sense to lose.
83 A ¶ Mrs. Stockmann.
84 A But, Thomas dear, the imprudent things you said had something to do with it, you know.
85 A ¶ Dr. Stockmann.
86 A Well, isn't what I said perfectly true?
87 A Don't they turn every idea topsy-turvy?
88 A Don't they make a regular hotchpotch of right and wrong?
89 A Don't they say that the things I know are true, are lies?
90 A The craziest part of it all is the fact of these "liberals," men of full age, going about in crowds imagining that they are the broad-minded party!
91 A Did you ever hear anything like it, Katherine!
92 A ¶ Mrs. Stockmann.
93 A Yes, yes, it's mad enough of them, certainly; but—(PETRA comes in from the sitting-room).
94 A Back from school already?
95 A ¶ Petra.
96 A Yes.
97 A I have been given notice of dismissal.
98 A ¶ Mrs. Stockmann.
99 A Dismissal?
100 A ¶ Dr. Stockmann.
101 A You too?
102 A ¶ Petra.
103 A Mrs. Busk gave me my notice; so I thought it was best to go at once.
104 A ¶ Dr. Stockmann.
105 A You were perfectly right, too!
106 A ¶ Mrs. Stockmann.
107 A Who would have thought Mrs. Busk was a woman like that!
108 A ¶ Petra.
109 A Mrs. Busk isn't a bit like that, mother; I saw quite plainly how it hurt her to do it.
110 A But she didn't dare do otherwise, she said; and so I got my notice.
111 A ¶ Dr. Stockmann (laughing and rubbing his hands).
112 A She didn't dare do otherwise, either!
113 A It's delicious!
114 A ¶ Mrs. Stockmann.
115 A Well, after the dreadful scenes last night—
116 A ¶ Petra.
117 A It was not only that.
118 A Just listen to this, father!
119 A ¶ Dr. Stockmann.
120 A Well?
121 A ¶ Petra.
122 A Mrs. Busk showed me no less than three letters she received this morning—
123 A ¶ Dr. Stockmann.
124 A Anonymous, I suppose?
125 A ¶ Petra.
126 A Yes.
127 A ¶ Dr. Stockmann.
128 A Yes, because they didn't dare to risk signing their names, Katherine!
129 A ¶ Petra.
130 A And two of them were to the effect that a man, who has been our guest here, was declaring last night at the Club that my views on various subjects are extremely emancipated—
131 A ¶ Dr. Stockmann.
132 A You did not deny that, I hope?
133 A ¶ Petra.
134 A No, you know I wouldn't.
135 A Mrs. Busk's own views are tolerably emancipated, when we are alone together; but now that this report about me is being spread, she dare not keep me on any longer.
136 A ¶ Mrs. Stockmann.
137 A And someone who had been a guest of ours!
138 A That shows you the return you get for your hospitality, Thomas!
139 A ¶ Dr. Stockmann.
140 A We won't live in such a disgusting hole any longer.
141 A Pack up as quickly as you can, Katherine; the sooner we can get away, the better.

### SCENE pt_enemy_6 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): DOCTOR, STOCKMANN
1 A ¶ Hovstad (getting up).
2 A All the conduit-pipes—?
3 A ¶ Dr. Stockmann.
4 A Yes, of course.
5 A The intake is too low down; it will have to be lifted to a position much higher up.
6 A ¶ Petra.
7 A Then you were right after all.
8 A ¶ Dr. Stockmann.
9 A Ah, you remember, Petra—I wrote opposing the plans before the work was begun.
10 A But at that time no one would listen to me.
11 A Well, I am going to let them have it now.
12 A Of course I have prepared a report for the Baths Committee; I have had it ready for a week, and was only waiting for this to come.
13 A (Shows the letter.)
14 A Now it shall go off at once.
15 A (Goes into his room and comes back with some papers.)
16 A Look at that!
17 A Four closely written sheets!—and the letter shall go with them.
18 A Give me a bit of paper, Katherine—something to wrap them up in.
19 A That will do!
20 A Now give it to-to-(stamps his foot)—what the deuce is her name?—give it to the maid, and tell her to take it at once to the Mayor.
21 A ¶ (Mrs. Stockmann takes the packet and goes out through the dining-room.)
22 A ¶ Petra.
23 A What do you think Uncle Peter will say, father?
24 A ¶ Dr. Stockmann.
25 A What is there for him to say?
26 A I should think he would be very glad that such an important truth has been brought to light.
27 A ¶ Hovstad.
28 A Will you let me print a short note about your discovery in the "Messenger?"
29 A ¶ Dr. Stockmann.
30 A I shall be very much obliged if you will.
31 A ¶ Hovstad.
32 A It is very desirable that the public should be informed of it without delay.
33 A ¶ Dr. Stockmann.
34 A Certainly.
35 A ¶ Mrs. Stockmann (coming back).
36 A She has just gone with it.
37 A ¶ Billing.
38 A Upon my soul, Doctor, you are going to be the foremost man in the town!
39 A ¶ Dr. Stockmann (walking about happily).
40 A Nonsense!
41 A As a matter of fact I have done nothing more than my duty.
42 A I have only made a lucky find—that's all.
43 A Still, all the same...
44 A ¶ Billing.
45 A Hovstad, don't you think the town ought to give Dr. Stockmann some sort of testimonial?
46 A ¶ Hovstad.
47 A I will suggest it, anyway.
48 A ¶ Billing.
49 A And I will speak to Aslaksen about it.
50 A ¶ Dr. Stockmann.
51 A No, my good friends, don't let us have any of that nonsense.
52 A I won't hear anything of the kind.
53 A And if the Baths Committee should think of voting me an increase of salary, I will not accept it.
54 A Do you hear, Katherine?—I won't accept it.
55 A ¶ Mrs. Stockmann.
56 A You are quite right, Thomas.
57 A ¶ Petra (lifting her glass).
58 A Your health, father!
59 A ¶ Hovstad and Billing.
60 A Your health, Doctor!
61 A Good health!
62 A ¶ Horster (touches glasses with DR. STOCKMANN).
63 A I hope it will bring you nothing but good luck.
64 A ¶ Dr. Stockmann.
65 A Thank you, thank you, my dear fellows!
66 A I feel tremendously happy!
67 A It is a splendid thing for a man to be able to feel that he has done a service to his native town and to his fellow-citizens.
68 A Hurrah, Katherine!
69 A (He puts his arms round her and whirls her round and round, while she protests with laughing cries.
70 A They all laugh, clap their hands, and cheer the DOCTOR.
71 A The boys put their heads in at the door to see what is going on.)
* 72 A ¶ (SCENE.—The same.
* 73 A The door into the dining room is shut.
* 74 A It is morning.
75 A MRS. STOCKMANN, with a sealed letter in her hand, comes in from the dining room, goes to the door of the DOCTOR'S study, and peeps in.)
76 A ¶ Mrs. Stockmann.
77 A Are you in, Thomas?
78 A ¶ Dr. Stockmann (from within his room).
79 A Yes, I have just come in.
80 A (Comes into the room.)
81 A What is it?
82 A ¶ Mrs. Stockmann.
83 A A letter from your brother.
84 A ¶ Dr. Stockmann.
85 A Aha, let us see!
86 A (Opens the letter and reads:) "I return herewith the manuscript you sent me" (reads on in a low murmur) H'm!—
87 A ¶ Mrs. Stockmann.
88 A What does he say?
89 A ¶ Dr. Stockmann (putting the papers in his pocket).
90 A Oh, he only writes that he will come up here himself about midday.
91 A ¶ Mrs. Stockmann.
92 A Well, try and remember to be at home this time.
93 A ¶ Dr. Stockmann.
94 A That will be all right; I have got through all my morning visits.
95 A ¶ Mrs. Stockmann.
96 A I am extremely curious to know how he takes it.
97 A ¶ Dr. Stockmann.
98 A You will see he won't like it's having been I, and not he, that made the discovery.
99 A ¶ Mrs. Stockmann.
100 A Aren't you a little nervous about that?
101 A ¶ Dr. Stockmann.
102 A Oh, he really will be pleased enough, you know.
103 A But, at the same time, Peter is so confoundedly afraid of anyone's doing any service to the town except himself.
104 A ¶ Mrs. Stockmann.
105 A I will tell you what, Thomas—you should be good natured, and share the credit of this with him.
106 A Couldn't you make out that it was he who set you on the scent of this discovery?
107 A ¶ Dr. Stockmann.
108 A I am quite willing.
109 A If only I can get the thing set right.
110 A I—
111 A ¶ (MORTEN KIIL puts his head in through the door leading from the hall, looks around in an enquiring manner, and chuckles.)
112 A ¶ Morten Kiil (slyly).
113 A Is it—is it true?
114 A ¶ Mrs. Stockmann (going to the door).
115 A Father!—is it you?
116 A ¶ Dr. Stockmann.
117 A Ah, Mr. Kiil—good morning, good morning!
118 A ¶ Mrs. Stockmann.
119 A But come along in.
120 A ¶ Morten Kiil.
121 A If it is true, I will; if not, I am off.
122 A ¶ Dr. Stockmann.
123 A If what is true?

### SCENE pt_enemy_8 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ Hovstad.
2 A Have you heard from the Mayor yet?
3 A ¶ Dr. Stockmann.
4 A Not yet.
5 A He is coming here later.
6 A ¶ Hovstad.
7 A I have given the matter a great deal of thought since last night.
8 A ¶ Dr. Stockmann.
9 A Well?
10 A ¶ Hovstad.
11 A From your point of view, as a doctor and a man of science, this affair of the water supply is an isolated matter.
12 A I mean, you do not realise that it involves a great many other things.
13 A ¶ Dr. Stockmann.
14 A How do you mean?—Let us sit down, my dear fellow.
15 A No, sit here on the couch.
16 A (HOVSTAD Sits down on the couch, DR. STOCKMANN On a chair on the other side of the table.)
17 A Now then.
18 A You mean that—?
19 A ¶ Hovstad.
20 A You said yesterday that the pollution of the water was due to impurities in the soil.
21 A ¶ Dr. Stockmann.
22 A Yes, unquestionably it is due to that poisonous morass up at Molledal.
23 A ¶ Hovstad.
24 A Begging your pardon, Doctor, I fancy it is due to quite another morass altogether.
25 A ¶ Dr. Stockmann.
26 A What morass?
27 A ¶ Hovstad.
28 A The morass that the whole life of our town is built on and is rotting in.
29 A ¶ Dr. Stockmann.
30 A What the deuce are you driving at, Hovstad?
31 A ¶ Hovstad.
32 A The whole of the town's interests have, little by little, got into the hands of a pack of officials.
33 A ¶ Dr. Stockmann.
34 A Oh, come!—they are not all officials.
35 A ¶ Hovstad.
36 A No, but those that are not officials are at any rate the officials' friends and adherents; it is the wealthy folk, the old families in the town, that have got us entirely in their hands.
37 A ¶ Dr. Stockmann.
38 A Yes, but after all they are men of ability and knowledge.
39 A ¶ Hovstad.
40 A Did they show any ability or knowledge when they laid the conduit pipes where they are now?
41 A ¶ Dr. Stockmann.
42 A No, of course that was a great piece of stupidity on their part.
43 A But that is going to be set right now.
44 A ¶ Hovstad.
45 A Do you think that will be all such plain sailing?
46 A ¶ Dr. Stockmann.
47 A Plain sailing or no, it has got to be done, anyway.
48 A ¶ Hovstad.
49 A Yes, provided the press takes up the question.
50 A ¶ Dr. Stockmann.
51 A I don't think that will be necessary, my dear fellow, I am certain my brother—
52 A ¶ Hovstad.
53 A Excuse me, doctor; I feel bound to tell you I am inclined to take the matter up.
54 A ¶ Dr. Stockmann.
55 A In the paper?
56 A ¶ Hovstad.
57 A Yes.
58 A When I took over the "People's Messenger" my idea was to break up this ring of self-opinionated old fossils who had got hold of all the influence.
59 A ¶ Dr. Stockmann.
60 A But you know you told me yourself what the result had been; you nearly ruined your paper.
61 A ¶ Hovstad.
62 A Yes, at the time we were obliged to climb down a peg or two, it is quite true—because there was a danger of the whole project of the Baths coming to nothing if they failed us.
63 A But now the scheme has been carried through, and we can dispense with these grand gentlemen.
64 A ¶ Dr. Stockmann.
65 A Dispense with them, yes; but, we owe them a great debt of gratitude.
66 A ¶ Hovstad.
67 A That shall be recognised ungrudgingly, But a journalist of my democratic tendencies cannot let such an opportunity as this slip.
68 A The bubble of official infallibility must be pricked.
69 A This superstition must be destroyed, like any other.
70 A ¶ Dr. Stockmann.
71 A I am whole-heartedly with you in that, Mr. Hovstad; if it is a superstition, away with it!
72 A ¶ Hovstad.
73 A I should be very reluctant to bring the Mayor into it, because he is your brother.
74 A But I am sure you will agree with me that truth should be the first consideration.
75 A ¶ Dr. Stockmann.
76 A That goes without saying.
77 A (With sudden emphasis.)
78 A Yes, but—but—
79 A ¶ Hovstad.
80 A You must not misjudge me.
81 A I am neither more self-interested nor more ambitious than most men.
82 A ¶ Dr. Stockmann.
83 A My dear fellow—who suggests anything of the kind?
84 A ¶ Hovstad.
85 A I am of humble origin, as you know; and that has given me opportunities of knowing what is the most crying need in the humbler ranks of life.
86 A It is that they should be allowed some part in the direction of public affairs, Doctor.
87 A That is what will develop their faculties and intelligence and self respect—
88 A ¶ Dr. Stockmann.
89 A I quite appreciate that.
90 A ¶ Hovstad.
91 A Yes—and in my opinion a journalist incurs a heavy responsibility if he neglects a favourable opportunity of emancipating the masses—the humble and oppressed.
92 A I know well enough that in exalted circles I shall be called an agitator, and all that sort of thing; but they may call what they like.
93 A If only my conscience doesn't reproach me, then—
94 A ¶ Dr. Stockmann.
95 A Quite right!
96 A Quite right, Mr. Hovstad.
97 A But all the same—devil take it!
* 98 A (A knock is heard at the door.)
99 A Come in!
100 A ¶ (ASLAKSEN appears at the door.
101 A He is poorly but decently dressed, in black, with a slightly crumpled white neckcloth; he wears gloves and has a felt hat in his hand.)
102 A ¶ Aslaksen (bowing).
103 A Excuse my taking the liberty, Doctor—
104 A ¶ Dr. Stockmann (getting up).
105 A Ah, it is you, Aslaksen!
106 A ¶ Aslaksen.
107 A Yes, Doctor.
108 A ¶ Hovstad (standing up).
109 A Is it me you want, Aslaksen?
110 A ¶ Aslaksen.
111 A No; I didn't know I should find you here.
112 A No, it was the Doctor I—
113 A ¶ Dr. Stockmann.
114 A I am quite at your service.
115 A What is it?

### SCENE pt_fan_0 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD WINDERMERE, LORD DARLINGTON, PARKER, ROSALIE
1 A ¶ The action of the play takes place within twenty-four hours , beginning on a Tuesday afternoon at five o’clock , and ending the next day at 1.30 p.m.
2 A ¶ LONDON: ST. JAMES’S THEATRE
3 A ¶ Lessee and Manager : Mr. George Alexander February 22 nd , 1892.
4 A ¶ LORD WINDERMERE Mr. George Alexander .
5 A LORD DARLINGTON Mr. Nutcombe Gould .
6 A LORD AUGUSTUS LORTON Mr. H. H. Vincent .
7 A MR. CECIL GRAHAM Mr. Ben Webster .
8 A MR. DUMBY Mr. Vane-Tempest .
9 A MR. HOPPER Mr. Alfred Holles .
10 A PARKER ( Butler ) Mr. V. Sansbury .
11 A LADY WINDERMERE Miss Lily Hanbury .
12 A THE DUCHESS OF BERWICK Miss Fanny Coleman .
13 A LADY AGATHA CARLISLE Miss Laura Graves .
14 A LADY PLYMDALE Miss Granville .
15 A LADY JEDBURGH Miss B. Page .
16 A LADY STUTFIELD Miss Madge Girdlestone .
17 A MRS. COWPER-COWPER Miss A. de Winton .
18 A MRS. ERLYNNE Miss Marion Terry .
19 A ROSALIE ( Maid ) Miss Winifred Dolan .
* 20 A ¶ Morning-room of Lord Windermere’s house in Carlton House Terrace .
* 21 A Doors C. and R. Bureau with books and papers R. Sofa with small tea-table L. Window opening on to terrace L. Table R.
22 A ¶ LADY WINDERMERE is at table R. , arranging roses in a blue bowl .
23 A ¶ Enter PARKER.
24 D PARKER: Is your ladyship at home this afternoon?
25 D LADY WINDERMERE: Yes—who has called?
26 D PARKER: Lord Darlington, my lady.
27 A ¶ Hesitates for a moment .
28 D LADY WINDERMERE: Show him up—and I’m at home to any one who calls.
29 D PARKER: Yes, my lady.
30 A ¶ Exit C.
31 D LADY WINDERMERE: It’s best for me to see him before to-night. I’m glad he’s come.
32 A ¶ Enter PARKER C.
33 D PARKER: Lord Darlington,
34 A ¶ Enter LORD DARLINGTON C.
35 A ¶ Exit PARKER.
36 D LORD DARLINGTON: How do you do, Lady Windermere?
37 D LADY WINDERMERE: How do you do, Lord Darlington? No, I can’t shake hands with you. My hands are all wet with these roses. Aren’t they lovely? They came up from Selby this morning.
38 D LORD DARLINGTON: They are quite perfect.
39 A ¶ Sees a fan lying on the table .
40 D LORD DARLINGTON: And what a wonderful fan! May I look at it?
41 D LADY WINDERMERE: Do. Pretty, isn’t it! It’s got my name on it, and everything. I have only just seen it myself. It’s my husband’s birthday present to me. You know to-day is my birthday?
42 D LORD DARLINGTON: No? Is it really?
43 D LADY WINDERMERE: Yes, I’m of age to-day. Quite an important day in my life, isn’t it? That is why I am giving this party to-night. Do sit down.
44 A ¶ Still arranging flowers .
45 A ¶ Sitting down .
46 D LORD DARLINGTON: I wish I had known it was your birthday, Lady Windermere. I would have covered the whole street in front of your house with flowers for you to walk on. They are made for you.
* 47 A ¶ A short pause .
48 D LADY WINDERMERE: Lord Darlington, you annoyed me last night at the Foreign Office. I am afraid you are going to annoy me again.
49 D LORD DARLINGTON: I, Lady Windermere?
50 A ¶ Enter PARKER and FOOTMAN C. , with tray and tea things .
51 D LADY WINDERMERE: Put it there, Parker. That will do.
52 A ¶ Wipes her hands with her pocket-handkerchief , goes to tea-table , and sits down .
53 D LADY WINDERMERE: Won’t you come over, Lord Darlington?
54 A ¶ Exit PARKER C.
55 A ¶ Takes chair and goes across L.C.
56 D LORD DARLINGTON: I am quite miserable, Lady Windermere. You must tell me what I did.
57 A ¶ Sits down at table L.
58 D LADY WINDERMERE: Well, you kept paying me elaborate compliments the whole evening.
59 A ¶ Smiling .
60 D LORD DARLINGTON: Ah, nowadays we are all of us so hard up, that the only pleasant things to pay are compliments. They’re the only things we can pay.
61 A ¶ Shaking her head .

### SCENE pt_fan_12 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LADY WINDERMERE, LORD DARLINGTON, DUCHESS OF BERWICK, LADY AGATHA, HOPPER, LADY PLYMDALE, DUMBY, CECIL GRAHAM
1 D LADY WINDERMERE: Then, not at all!
* 2 A ¶ A pause .
3 D LORD DARLINGTON: You break my heart!
4 D LADY WINDERMERE: Mine is already broken.
* 5 A ¶ A pause .
6 D LORD DARLINGTON: To-morrow I leave England. This is the last time I shall ever look on you. You will never see me again. For one moment our lives met—our souls touched. They must never meet or touch again. Good-bye, Margaret.
7 A ¶ Exit .
8 D LADY WINDERMERE: How alone I am in life! How terribly alone!
* 9 A ¶ The music stops .
10 A Enter the DUCHESS OF BERWICK and LORD PAISLEY laughing and talking .
11 A Other guests come on from ball-room .
12 D DUCHESS OF BERWICK: Dear Margaret, I’ve just been having such a delightful chat with Mrs. Erlynne. I am so sorry for what I said to you this afternoon about her. Of course, she must be all right if you invite her. A most attractive woman, and has such sensible views on life. Told me she entirely disapproved of people marrying more than once, so I feel quite safe about poor Augustus. Can’t imagine why people speak against her. It’s those horrid nieces of mine—the Saville girls—they’re always talking scandal. Still, I should go to Homburg, dear, I really should. She is just a little too attractive. But where is Agatha? Oh, there she is:
13 A ¶ LADY AGATHA and MR. HOPPER enter from terrace L.U.E.
14 D DUCHESS OF BERWICK: Mr. Hopper, I am very, very angry with you. You have taken Agatha out on the terrace, and she is so delicate.
15 D HOPPER: Awfully sorry, Duchess. We went out for a moment and then got chatting together.
16 D DUCHESS OF BERWICK: Ah, about dear Australia, I suppose?
17 D HOPPER: Yes!
18 D DUCHESS OF BERWICK: Agatha, darling!
19 A ¶ Beckons her over .
20 D LADY AGATHA: Yes, mamma!
21 A ¶ Aside .
22 D DUCHESS OF BERWICK: Did Mr. Hopper definitely—
23 D LADY AGATHA: Yes, mamma.
24 D DUCHESS OF BERWICK: And what answer did you give him, dear child?
25 D LADY AGATHA: Yes, mamma.
26 A ¶ Affectionately .
27 D DUCHESS OF BERWICK: My dear one! You always say the right thing. Mr. Hopper! James! Agatha has told me everything. How cleverly you have both kept your secret.
28 D HOPPER: You don’t mind my taking Agatha off to Australia, then, Duchess?
29 A ¶ Indignantly .
30 D DUCHESS OF BERWICK: To Australia? Oh, don’t mention that dreadful vulgar place.
31 D HOPPER: But she said she’d like to come with me.
32 A ¶ Severely .
33 D DUCHESS OF BERWICK: Did you say that, Agatha?
34 D LADY AGATHA: Yes, mamma.
35 D DUCHESS OF BERWICK: Agatha, you say the most silly things possible. I think on the whole that Grosvenor Square would be a more healthy place to reside in. There are lots of vulgar people live in Grosvenor Square, but at any rate there are no horrid kangaroos crawling about. But we’ll talk about that to-morrow. James, you can take Agatha down. You’ll come to lunch, of course, James. At half-past one, instead of two. The Duke will wish to say a few words to you, I am sure.
36 D HOPPER: I should like to have a chat with the Duke, Duchess. He has not said a single word to me yet.
37 D DUCHESS OF BERWICK: I think you’ll find he will have a great deal to say to you to-morrow.
38 A ¶ Exit LADY AGATHA with MR. HOPPER.
39 D DUCHESS OF BERWICK: And now good-night, Margaret. I’m afraid it’s the old, old story, dear. Love—well, not love at first sight, but love at the end of the season, which is so much more satisfactory.
40 D LADY WINDERMERE: Good-night, Duchess.
41 A ¶ Exit the DUCHESS OF BERWICK on LORD PAISLEY’S arm .
42 D LADY PLYMDALE: My dear Margaret, what a handsome woman your husband has been dancing with! I should be quite jealous if I were you! Is she a great friend of yours?
43 D LADY WINDERMERE: No!
44 D LADY PLYMDALE: Really? Good-night, dear.
45 A ¶ Looks at MR. DUMBY and exit .
46 D DUMBY: Awful manners young Hopper has!
47 D CECIL GRAHAM: Ah! Hopper is one of Nature’s gentlemen, the worst type of gentleman I know.

### SCENE pt_fan_13 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): DUMBY, CECIL GRAHAM, LORD WINDERMERE L.U.E, LADY JEDBURGH, ERLYNNE, PARKER
1 D DUMBY: Sensible woman, Lady Windermere. Lots of wives would have objected to Mrs. Erlynne coming. But Lady Windermere has that uncommon thing called common sense.
2 D CECIL GRAHAM: And Windermere knows that nothing looks so like innocence as an indiscretion.
3 D DUMBY: Yes; dear Windermere is becoming almost modern. Never thought he would.
4 A ¶ Bows to LADY WINDERMERE and exit .
5 D LADY JEDBURGH: Good night, Lady Windermere. What a fascinating woman Mrs. Erlynne is! She is coming to lunch on Thursday, won’t you come too? I expect the Bishop and dear Lady Merton.
6 D LADY WINDERMERE: I am afraid I am engaged, Lady Jedburgh.
7 D LADY JEDBURGH: So sorry. Come, dear.
8 A ¶ Exeunt LADY JEDBURGH and MISS GRAHAM.
9 A ¶ Enter MRS. ERLYNNE and LORD WINDERMERE.
10 D MRS. ERLYNNE: Charming ball it has been! Quite reminds me of old days.
11 A ¶ Sits on sofa .
12 D MRS. ERLYNNE: And I see that there are just as many fools in society as there used to be. So pleased to find that nothing has altered! Except Margaret. She’s grown quite pretty. The last time I saw her—twenty years ago, she was a fright in flannel. Positive fright, I assure you. The dear Duchess! and that sweet Lady Agatha! Just the type of girl I like! Well, really, Windermere, if I am to be the Duchess’s sister-in-law—
13 A ¶ Sitting L. of her .
14 D LORD WINDERMERE: But are you—?
15 A ¶ Exit MR. CECIL GRAHAM with rest of guests .
16 A LADY WINDERMERE watches , with a look of scorn and pain , MRS. ERLYNNE and her husband .
17 A They are unconscious of her presence .
18 D MRS. ERLYNNE: Oh, yes! He’s to call to-morrow at twelve o’clock! He wanted to propose to-night. In fact he did. He kept on proposing. Poor Augustus, you know how he repeats himself. Such a bad habit! But I told him I wouldn’t give him an answer till to-morrow. Of course I am going to take him. And I dare say I’ll make him an admirable wife, as wives go. And there is a great deal of good in Lord Augustus. Fortunately it is all on the surface. Just where good qualities should be. Of course you must help me in this matter.
19 D LORD WINDERMERE: I am not called on to encourage Lord Augustus, I suppose?
20 D MRS. ERLYNNE: Oh, no! I do the encouraging. But you will make me a handsome settlement, Windermere, won’t you?
21 A ¶ Frowning .
22 D LORD WINDERMERE: Is that what you want to talk to me about to-night?
23 D MRS. ERLYNNE: Yes.
24 A ¶ With a gesture of impatience .
25 D LORD WINDERMERE: I will not talk of it here.
26 A ¶ Laughing .
27 D MRS. ERLYNNE: Then we will talk of it on the terrace. Even business should have a picturesque background. Should it not, Windermere? With a proper background women can do anything.
28 D LORD WINDERMERE: Won’t to-morrow do as well?
29 D MRS. ERLYNNE: No; you see, to-morrow I am going to accept him. And I think it would be a good thing if I was able to tell him that I had—well, what shall I say?—£2000 a year left to me by a third cousin—or a second husband—or some distant relative of that kind. It would be an additional attraction, wouldn’t it? You have a delightful opportunity now of paying me a compliment, Windermere. But you are not very clever at paying compliments. I am afraid Margaret doesn’t encourage you in that excellent habit. It’s a great mistake on her part. When men give up saying what is charming, they give up thinking what is charming. But seriously, what do you say to £2000? £2500, I think. In modern life margin is everything. Windermere, don’t you think the world an intensely amusing place? I do!
30 A ¶ Exit on terrace with LORD WINDERMERE.
* 31 A Music strikes up in ball-room.
32 D LADY WINDERMERE: To stay in this house any longer is impossible. To-night a man who loves me offered me his whole life. I refused it. It was foolish of me. I will offer him mine now. I will give him mine. I will go to him!
33 A ¶ Puts on cloak and goes to the door , then turns back .
34 A Sits down at table and writes a letter , puts it into an envelope , and leaves it on table .
35 D LADY WINDERMERE: Arthur has never understood me. When he reads this, he will. He may do as he chooses now with his life. I have done with mine as I think best, as I think right. It is he who has broken the bond of marriage—not I. I only break its bondage.
36 A ¶ Exit .
37 A ¶ PARKER enters L. and crosses towards the ball-room R. Enter MRS. ERLYNNE.
38 D MRS. ERLYNNE: Is Lady Windermere in the ball-room?
39 D PARKER: Her ladyship has just gone out.
40 D MRS. ERLYNNE: Gone out? She’s not on the terrace?
41 D PARKER: No, madam. Her ladyship has just gone out of the house.
42 A ¶ Starts , and looks at the servant with a puzzled expression in her face .
43 D MRS. ERLYNNE: Out of the house?
44 D PARKER: Yes, madam—her ladyship told me she had left a letter for his lordship on the table.
45 D MRS. ERLYNNE: A letter for Lord Windermere?
46 D PARKER: Yes, madam.
47 D MRS. ERLYNNE: Thank you.
48 A ¶ [ Exit PARKER.
49 A The music in the ball-room stops .] Gone out of her house!
50 A A letter addressed to her husband! [ Goes over to bureau and looks at letter .
51 A Takes it up and lays it down again with a shudder of fear .] No, no!
52 A It would be impossible!
53 A Life doesn’t repeat its tragedies like that!
54 A Oh, why does this horrible fancy come across me?
55 A Why do I remember now the one moment of my life I most wish to forget?
56 A Does life repeat its tragedies? [ Tears letter open and reads it , then sinks down into a chair with a gesture of anguish .] Oh, how terrible!
57 A The same words that twenty years ago I wrote to her father! and how bitterly I have been punished for it!
58 A No; my punishment, my real punishment is to-night, is now! [ Still seated R. ]
59 A ¶ Enter LORD WINDERMERE L.U.E.

### SCENE pt_fan_14 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD WINDERMERE, MRS. ERLYNNE, LORD AUGUSTUS R.U.E
1 D LORD WINDERMERE: Have you said good-night to my wife?
2 A ¶ Comes C.
3 A ¶ Crushing letter in her hand .
4 D MRS. ERLYNNE: Yes.
5 D LORD WINDERMERE: Where is she?
6 D MRS. ERLYNNE: She is very tired. She has gone to bed. She said she had a headache.
7 D LORD WINDERMERE: I must go to her. You’ll excuse me?
8 A ¶ Rising hurriedly .
9 D MRS. ERLYNNE: Oh, no! It’s nothing serious. She’s only very tired, that is all. Besides, there are people still in the supper-room. She wants you to make her apologies to them. She said she didn’t wish to be disturbed.
10 A ¶ Drops letter .
11 D MRS. ERLYNNE: She asked me to tell you!
12 A ¶ Picks up letter .
13 D LORD WINDERMERE: You have dropped something.
14 D MRS. ERLYNNE: Oh yes, thank you, that is mine.
15 A ¶ Puts out her hand to take it .
16 A ¶ Still looking at letter .
17 D LORD WINDERMERE: But it’s my wife’s handwriting, isn’t it?
18 A ¶ Takes the letter quickly .
19 D MRS. ERLYNNE: Yes, it’s—an address. Will you ask them to call my carriage, please?
20 D LORD WINDERMERE: Certainly.
21 A ¶ Goes L. and Exit .
22 D MRS. ERLYNNE: Thanks! What can I do? What can I do? I feel a passion awakening within me that I never felt before. What can it mean? The daughter must not be like the mother—that would be terrible. How can I save her? How can I save my child? A moment may ruin a life. Who knows that better than I? Windermere must be got out of the house; that is absolutely necessary.
23 A ¶ Goes L.
24 D MRS. ERLYNNE: But how shall I do it? It must be done somehow. Ah!
25 A ¶ Enter LORD AUGUSTUS R.U.E. carrying bouquet .
26 D LORD AUGUSTUS: Dear lady, I am in such suspense! May I not have an answer to my request?
27 D MRS. ERLYNNE: Lord Augustus, listen to me. You are to take Lord Windermere down to your club at once, and keep him there as long as possible. You understand?
28 D LORD AUGUSTUS: But you said you wished me to keep early hours!
29 A ¶ Nervously .
30 D MRS. ERLYNNE: Do what I tell you. Do what I tell you.
31 D LORD AUGUSTUS: And my reward?
32 D MRS. ERLYNNE: Your reward? Your reward? Oh! ask me that to-morrow. But don’t let Windermere out of your sight to-night. If you do I will never forgive you. I will never speak to you again. I’ll have nothing to do with you. Remember you are to keep Windermere at your club, and don’t let him come back to-night.
33 A ¶ Exit L.
34 D LORD AUGUSTUS: Well, really, I might be her husband already. Positively I might.
35 A ¶ Follows her in a bewildered manner .
36 A ¶ * * * * *
* 37 A ¶ Lord Darlington’s Rooms .
* 38 A A large sofa is in front of fireplace R. At the back of the stage a curtain is drawn across the window .
* 39 A Doors L. and R. Table R. with writing materials.
* 40 A Table C. with syphons, glasses, and Tantalus frame .
* 41 A Table L. with cigar and cigarette box.
* 42 A Lamps lit .
43 A ¶ Standing by the fireplace .
44 D LADY WINDERMERE: Why doesn’t he come? This waiting is horrible. He should be here. Why is he not here, to wake by passionate words some fire within me? I am cold—cold as a loveless thing. Arthur must have read my letter by this time. If he cared for me, he would have come after me, would have taken me back by force. But he doesn’t care. He’s entrammelled by this woman—fascinated by her—dominated by her. If a woman wants to hold a man, she has merely to appeal to what is worst in him. We make gods of men and they leave us. Others make brutes of them and they fawn and are faithful. How hideous life is! . . . Oh! it was mad of me to come here, horribly mad. And yet, which is the worst, I wonder, to be at the mercy of a man who loves one, or the wife of a man who in one’s own house dishonours one? What woman knows? What woman in the whole world? But will he love me always, this man to whom I am giving my life? What do I bring him? Lips that have lost the note of joy, eyes that are blinded by tears, chill hands and icy heart. I bring him nothing. I must go back—no; I can’t go back, my letter has put me in their power—Arthur would not take me back! That fatal letter! No! Lord Darlington leaves England to-morrow. I will go with him—I have no choice.
45 A ¶ Sits down for a few moments .
46 A Then starts up and puts on her cloak .
47 D LADY WINDERMERE: No, no! I will go back, let Arthur do with me what he pleases. I can’t wait here. It has been madness my coming. I must go at once. As for Lord Darlington—Oh! here he is! What shall I do? What can I say to him? Will he let me go away at all? I have heard that men are brutal, horrible . . . Oh!
48 A ¶ Hides her face in her hands .
49 A ¶ Enter MRS. ERLYNNE L.
50 D MRS. ERLYNNE: Lady Windermere!
51 A ¶ LADY WINDERMERE starts and looks up .
52 A Then recoils in contempt .

### SCENE pt_fan_16 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LADY WINDERMERE, MRS. ERLYNNE, LORD AUGUSTUS LORTON, LORD DARLINGTON, DUMBY
1 A ¶ Rising .
2 D LADY WINDERMERE: Ah! you admit you have a hold!
3 D MRS. ERLYNNE: Yes, and I will tell you what it is. It is his love for you, Lady Windermere.
4 D LADY WINDERMERE: You expect me to believe that?
5 D MRS. ERLYNNE: You must believe it! It is true. It is his love for you that has made him submit to—oh! call it what you like, tyranny, threats, anything you choose. But it is his love for you. His desire to spare you—shame, yes, shame and disgrace.
6 D LADY WINDERMERE: What do you mean? You are insolent! What have I to do with you?
7 A ¶ Humbly .
8 D MRS. ERLYNNE: Nothing. I know it—but I tell you that your husband loves you—that you may never meet with such love again in your whole life—that such love you will never meet—and that if you throw it away, the day may come when you will starve for love and it will not be given to you, beg for love and it will be denied you—Oh! Arthur loves you!
9 D LADY WINDERMERE: Arthur? And you tell me there is nothing between you?
10 D MRS. ERLYNNE: Lady Windermere, before Heaven your husband is guiltless of all offence towards you! And I—I tell you that had it ever occurred to me that such a monstrous suspicion would have entered your mind, I would have died rather than have crossed your life or his—oh! died, gladly died!
11 A ¶ Moves away to sofa R.
12 D LADY WINDERMERE: You talk as if you had a heart. Women like you have no hearts. Heart is not in you. You are bought and sold.
13 A ¶ Sits L.C.
14 A ¶ Starts , with a gesture of pain .
15 A Then restrains herself , and comes over to where LADY WINDERMERE is sitting .
16 A As she speaks , she stretches out her hands towards her , but does not dare to touch her .
17 D MRS. ERLYNNE: Believe what you choose about me. I am not worth a moment’s sorrow. But don’t spoil your beautiful young life on my account! You don’t know what may be in store for you, unless you leave this house at once. You don’t know what it is to fall into the pit, to be despised, mocked, abandoned, sneered at—to be an outcast! to find the door shut against one, to have to creep in by hideous byways, afraid every moment lest the mask should be stripped from one’s face, and all the while to hear the laughter, the horrible laughter of the world, a thing more tragic than all the tears the world has ever shed. You don’t know what it is. One pays for one’s sin, and then one pays again, and all one’s life one pays. You must never know that.—As for me, if suffering be an expiation, then at this moment I have expiated all my faults, whatever they have been; for to-night you have made a heart in one who had it not, made it and broken it.—But let that pass. I may have wrecked my own life, but I will not let you wreck yours. You—why, you are a mere girl, you would be lost. You haven’t got the kind of brains that enables a woman to get back. You have neither the wit nor the courage. You couldn’t stand dishonour! No! Go back, Lady Windermere, to the husband who loves you, whom you love. You have a child, Lady Windermere. Go back to that child who even now, in pain or in joy, may be calling to you.
18 A ¶ LADY WINDERMERE rises .
19 D MRS. ERLYNNE: God gave you that child. He will require from you that you make his life fine, that you watch over him. What answer will you make to God if his life is ruined through you? Back to your house, Lady Windermere—your husband loves you! He has never swerved for a moment from the love he bears you. But even if he had a thousand loves, you must stay with your child. If he was harsh to you, you must stay with your child. If he ill-treated you, you must stay with your child. If he abandoned you, your place is with your child.
20 A ¶ LADY WINDERMERE bursts into tears and buries her face in her hands .
21 A ¶ [ Rushing to her .] Lady Windermere!
22 A ¶ Holding out her hands to her , helplessly , as a child might do .
23 D LADY WINDERMERE: Take me home. Take me home.
24 A ¶ Is about to embrace her .
25 A Then restrains herself .
26 A There is a look of wonderful joy in her face .
27 D MRS. ERLYNNE: Come! Where is your cloak?
28 A ¶ Getting it from sofa .
29 D MRS. ERLYNNE: Here. Put it on. Come at once!
30 A ¶ They go to the door .
31 D LADY WINDERMERE: Stop! Don’t you hear voices?
32 D MRS. ERLYNNE: No, no! There was no one!
33 D LADY WINDERMERE: Yes, there is! Listen! Oh! that is my husband’s voice! He is coming in! Save me! Oh, it’s some plot! You have sent for him.
* 34 A ¶ Voices outside .
35 D MRS. ERLYNNE: Silence! I’m here to save you, if I can. But I fear it is too late! There!
36 A ¶ Points to the curtain across the window .
37 D MRS. ERLYNNE: The first chance you have, slip out, if you ever get a chance!
38 D LADY WINDERMERE: But you?
39 D MRS. ERLYNNE: Oh! never mind me. I’ll face them.
40 A ¶ LADY WINDERMERE hides herself behind the curtain .
* 41 A ¶ Outside .
42 D LORD AUGUSTUS: Nonsense, dear Windermere, you must not leave me!
43 D MRS. ERLYNNE: Lord Augustus! Then it is I who am lost!
44 A ¶ Hesitates for a moment , then looks round and sees door R. , and exits through it .
45 A ¶ [ Enter LORD DARLINGTON, MR. DUMBY, LORD WINDERMERE, LORD AUGUSTUS LORTON, and MR. CECIL GRAHAM.
46 D DUMBY: What a nuisance their turning us out of the club at this hour! It’s only two o’clock.
47 A ¶ Sinks into a chair .
48 D DUMBY: The lively part of the evening is only just beginning.
49 A ¶ Yawns and closes his eyes .
