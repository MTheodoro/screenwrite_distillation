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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0100.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_barbara_25 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): CUSINS, STEPHEN, UNDERSHAFT, LADY BRITOMART, BARBARA, SARAH
1 A ¶ She goes out.
2 D CUSINS: My guardian angel!
3 A ¶ To Undershaft.
4 D CUSINS: Avaunt!
5 A ¶ He follows Barbara.
6 A ¶ STEPHEN [quietly, at the writing table] You must not mind Cusins, father.
7 A He is a very amiable good fellow; but he is a Greek scholar and naturally a little eccentric.
8 D UNDERSHAFT: Ah, quite so. Thank you, Stephen. Thank you.
9 A ¶ He goes out.
10 A ¶ Stephen smiles patronizingly; buttons his coat responsibly; and crosses the room to the door.
11 A Lady Britomart, dressed for out-of-doors, opens it before he reaches it.
12 A She looks round far the others; looks at Stephen; and turns to go without a word.
13 A ¶ STEPHEN [embarrassed] Mother--
14 D LADY BRITOMART: Don't be apologetic, Stephen. And don't forget that you have outgrown your mother.
15 A ¶ She goes out.
* 16 A ¶ Perivale St Andrews lies between two Middlesex hills, half climbing the northern one.
* 17 A It is an almost smokeless town of white walls, roofs of narrow green slates or red tiles, tall trees, domes, campaniles, and slender chimney shafts, beautifully situated and beautiful in itself.
* 18 A The best view of it is obtained from the crest of a slope about half a mile to the east, where the high explosives are dealt with.
* 19 A The foundry lies hidden in the depths between, the tops of its chimneys sprouting like huge skittles into the middle distance.
* 20 A Across the crest runs a platform of concrete, with a parapet which suggests a fortification, because there is a huge cannon of the obsolete Woolwich Infant pattern peering across it at the town.
* 21 A The cannon is mounted on an experimental gun carriage: possibly the original model of the Undershaft disappearing rampart gun alluded to by Stephen.
* 22 A The parapet has a high step inside which serves as a seat.
23 A ¶ Barbara is leaning over the parapet, looking towards the town.
* 24 A On her right is the cannon; on her left the end of a shed raised on piles, with a ladder of three or four steps up to the door, which opens outwards and has a little wooden landing at the threshold, with a fire bucket in the corner of the landing.
* 25 A The parapet stops short of the shed, leaving a gap which is the beginning of the path down the hill through the foundry to the town.
* 26 A Behind the cannon is a trolley carrying a huge conical bombshell, with a red band painted on it.
* 27 A Further from the parapet, on the same side, is a deck chair, near the door of an office, which, like the sheds, is of the lightest possible construction.
28 A ¶ Cusins arrives by the path from the town.
29 D BARBARA: Well?
30 D CUSINS: Not a ray of hope. Everything perfect, wonderful, real. It only needs a cathedral to be a heavenly city instead of a hellish one.
31 D BARBARA: Have you found out whether they have done anything for old Peter Shirley.
32 D CUSINS: They have found him a job as gatekeeper and timekeeper. He's frightfully miserable. He calls the timekeeping brainwork, and says he isn't used to it; and his gate lodge is so splendid that he's ashamed to use the rooms, and skulks in the scullery.
33 D BARBARA: Poor Peter!
34 A ¶ Stephen arrives from the town.
35 A He carries a fieldglass.
36 A ¶ STEPHEN [enthusiastically] Have you two seen the place?
37 A Why did you leave us?
38 D CUSINS: I wanted to see everything I was not intended to see; and Barbara wanted to make the men talk.
39 D STEPHEN: Have you found anything discreditable?
40 D CUSINS: No. They call him Dandy Andy and are proud of his being a cunning old rascal; but it's all horribly, frightfully, immorally, unanswerably perfect.
41 A ¶ Sarah arrives.
42 D SARAH: Heavens! what a place!
43 A ¶ She crosses to the trolley.
44 D SARAH: Did you see the nursing home!?
45 A ¶ She sits down on the shell.
46 D STEPHEN: Did you see the libraries and schools!?
47 D SARAH: Did you see the ballroom and the banqueting chamber in the Town Hall!?
48 D STEPHEN: Have you gone into the insurance fund, the pension fund, the building society, the various applications of co-operation!?
49 A ¶ Undershaft comes from the office, with a sheaf of telegrams in his hands.
50 D UNDERSHAFT: Well, have you seen everything? I'm sorry I was called away.
51 A ¶ Indicating the telegrams.
52 D UNDERSHAFT: News from Manchuria.
53 D STEPHEN: Good news, I hope.
54 D UNDERSHAFT: Very.
55 D STEPHEN: Another Japanese victory?
56 D UNDERSHAFT: Oh, I don't know. Which side wins does not concern us here. No: the good news is that the aerial battleship is a tremendous success. At the first trial it has wiped out a fort with three hundred soldiers in it.
57 A ¶ CUSINS [from the platform] Dummy soldiers?
58 D UNDERSHAFT: No: the real thing.
59 A ¶ Cusins and Barbara exchange glances.
60 A Then Cusins sits on the step and buries his face in his hands.
61 A Barbara gravely lays her hand on his shoulder, and he looks up at her in a sort of whimsical desperation.
62 D UNDERSHAFT: Well, Stephen, what do you think of the place?

### SCENE pt_barbara_27 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): SARAH, LOMAX, CUSINS, LADY BRITOMART, UNDERSHAFT
1 D SARAH: } LADY BRITOMART. } Confession! BARBARA. } STEPHEN. }
2 D LOMAX: Oh I say!
3 D CUSINS: Yes, a confession. Listen, all. Until I met Barbara I thought myself in the main an honorable, truthful man, because I wanted the approval of my conscience more than I wanted anything else. But the moment I saw Barbara, I wanted her far more than the approval of my conscience.
4 D LADY BRITOMART: Adolphus!
5 D CUSINS: It is true. You accused me yourself, Lady Brit, of joining the Army to worship Barbara; and so I did. She bought my soul like a flower at a street corner; but she bought it for herself.
6 D UNDERSHAFT: What! Not for Dionysos or another?
7 D CUSINS: Dionysos and all the others are in herself. I adored what was divine in her, and was therefore a true worshipper. But I was romantic about her too. I thought she was a woman of the people, and that a marriage with a professor of Greek would be far beyond the wildest social ambitions of her rank.
8 D LADY BRITOMART: Adolphus!!
9 D LOMAX: Oh I say!!!
10 D CUSINS: When I learnt the horrible truth--
11 D LADY BRITOMART: What do you mean by the horrible truth, pray?
12 D CUSINS: That she was enormously rich; that her grandfather was an earl; that her father was the Prince of Darkness--
13 D UNDERSHAFT: Chut!
14 D CUSINS: --and that I was only an adventurer trying to catch a rich wife, then I stooped to deceive about my birth.
15 D LADY BRITOMART: Your birth! Now Adolphus, don't dare to make up a wicked story for the sake of these wretched cannons. Remember: I have seen photographs of your parents; and the Agent General for South Western Australia knows them personally and has assured me that they are most respectable married people.
16 D CUSINS: So they are in Australia; but here they are outcasts. Their marriage is legal in Australia, but not in England. My mother is my father's deceased wife's sister; and in this island I am consequently a foundling.
* 17 A ¶ Sensation.
18 D CUSINS: Is the subterfuge good enough, Machiavelli?
19 A ¶ UNDERSHAFT [thoughtfully] Biddy: this may be a way out of the difficulty.
20 D LADY BRITOMART: Stuff! A man can't make cannons any the better for being his own cousin instead of his proper self
21 A ¶ she sits down in the deck chair with a bounce that expresses her downright contempt for their casuistry.
22 A ¶ UNDERSHAFT [to Cusins] You are an educated man.
23 A That is against the tradition.
24 D CUSINS: Once in ten thousand times it happens that the schoolboy is a born master of what they try to teach him. Greek has not destroyed my mind: it has nourished it. Besides, I did not learn it at an English public school.
25 D UNDERSHAFT: Hm! Well, I cannot afford to be too particular: you have cornered the foundling market. Let it pass. You are eligible, Euripides: you are eligible.
26 A ¶ BARBARA [coming from the platform and interposing between Cusins and Undershaft] Dolly: yesterday morning, when Stephen told us all about the tradition, you became very silent; and you have been strange and excited ever since.
27 A Were you thinking of your birth then?
28 D CUSINS: When the finger of Destiny suddenly points at a man in the middle of his breakfast, it makes him thoughtful.
29 A ¶ Barbara turns away sadly and stands near her mother, listening perturbedly.
30 D UNDERSHAFT: Aha! You have had your eye on the business, my young friend, have you?
31 D CUSINS: Take care! There is an abyss of moral horror between me and your accursed aerial battleships.
32 D UNDERSHAFT: Never mind the abyss for the present. Let us settle the practical details and leave your final decision open. You know that you will have to change your name. Do you object to that?
33 D CUSINS: Would any man named Adolphus--any man called Dolly!--object to be called something else?
34 D UNDERSHAFT: Good. Now, as to money! I propose to treat you handsomely from the beginning. You shall start at a thousand a year.
35 A ¶ with sudden heat, his spectacles twinkling with mischief.
36 D CUSINS: A thousand! You dare offer a miserable thousand to the son-in-law of a millionaire! No, by Heavens, Machiavelli! you shall not cheat me. You cannot do without me; and I can do without you. I must have two thousand five hundred a year for two years. At the end of that time, if I am a failure, I go. But if I am a success, and stay on, you must give me the other five thousand.
37 D UNDERSHAFT: What other five thousand?
38 D CUSINS: To make the two years up to five thousand a year. The two thousand five hundred is only half pay in case I should turn out a failure. The third year I must have ten per cent on the profits.
39 A ¶ UNDERSHAFT [taken aback] Ten per cent!
40 A Why, man, do you know what my profits are?
41 D CUSINS: Enormous, I hope: otherwise I shall require twenty-five per cent.
42 D UNDERSHAFT: But, Mr Cusins, this is a serious matter of business. You are not bringing any capital into the concern.
43 D CUSINS: What! no capital! Is my mastery of Greek no capital? Is my access to the subtlest thought, the loftiest poetry yet attained by humanity, no capital? my character! my intellect! my life! my career! what Barbara calls my soul! are these no capital? Say another word; and I double my salary.
44 D UNDERSHAFT: Be reasonable--
45 A ¶ CUSINS [peremptorily] Mr Undershaft: you have my terms.
46 A Take them or leave them.
47 A ¶ UNDERSHAFT [recovering himself] Very well.
48 A I note your terms; and I offer you half.
49 A ¶ CUSINS [disgusted] Half!
50 A ¶ UNDERSHAFT [firmly] Half.

### SCENE pt_barbara_3 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): LOMAX, LADY BRITOMART, SARAH, BARBARA, MORRISON, UNDERSHAFT
1 D LOMAX: Well, you must admit that this is a bit thick.
2 A ¶ LADY BRITOMART [turning with ominous suavity to Cusins] Adolphus: you are a professor of Greek.
3 A Can you translate Charles Lomax's remarks into reputable English for us?
4 A ¶ CUSINS [cautiously] If I may say so, Lady Brit, I think Charles has rather happily expressed what we all feel.
5 A Homer, speaking of Autolycus, uses the same phrase.
6 A ¶ LOMAX [handsomely] Not that I mind, you know, if Sarah don't.
7 A ¶ LADY BRITOMART [crushingly] Thank you.
8 A Have I your permission, Adolphus, to invite my own husband to my own house?
9 A ¶ CUSINS [gallantly] You have my unhesitating support in everything you do.
10 D LADY BRITOMART: Sarah: have you nothing to say?
11 D SARAH: Do you mean that he is coming regularly to live here?
12 D LADY BRITOMART: Certainly not. The spare room is ready for him if he likes to stay for a day or two and see a little more of you; but there are limits.
13 D SARAH: Well, he can't eat us, I suppose. I don't mind.
14 A ¶ LOMAX [chuckling] I wonder how the old man will take it.
15 D LADY BRITOMART: Much as the old woman will, no doubt, Charles.
16 A ¶ LOMAX [abashed] I didn't mean--at least--
17 D LADY BRITOMART: You didn't think, Charles. You never do; and the result is, you never mean anything. And now please attend to me, children. Your father will be quite a stranger to us.
18 D LOMAX: I suppose he hasn't seen Sarah since she was a little kid.
19 D LADY BRITOMART: Not since she was a little kid, Charles, as you express it with that elegance of diction and refinement of thought that seem never to desert you. Accordingly--er--
20 A ¶ impatiently.
21 D LADY BRITOMART: Now I have forgotten what I was going to say. That comes of your provoking me to be sarcastic, Charles. Adolphus: will you kindly tell me where I was.
22 A ¶ CUSINS [sweetly] You were saying that as Mr Undershaft has not seen his children since they were babies, he will form his opinion of the way you have brought them up from their behavior to-night, and that therefore you wish us all to be particularly careful to conduct ourselves well, especially Charles.
23 D LOMAX: Look here: Lady Brit didn't say that.
24 A ¶ LADY BRITOMART [vehemently] I did, Charles.
25 A Adolphus's recollection is perfectly correct.
26 A It is most important that you should be good; and I do beg you for once not to pair off into opposite corners and giggle and whisper while I am speaking to your father.
27 D BARBARA: All right, mother. We'll do you credit.
28 D LADY BRITOMART: Remember, Charles, that Sarah will want to feel proud of you instead of ashamed of you.
29 D LOMAX: Oh I say! There's nothing to be exactly proud of, don't you know.
30 D LADY BRITOMART: Well, try and look as if there was.
31 A ¶ Morrison, pale and dismayed, breaks into the room in unconcealed disorder.
32 D MORRISON: Might I speak a word to you, my lady?
33 D LADY BRITOMART: Nonsense! Show him up.
34 D MORRISON: Yes, my lady.
35 A ¶ He goes.
36 D LOMAX: Does Morrison know who he is?
37 D LADY BRITOMART: Of course. Morrison has always been with us.
38 D LOMAX: It must be a regular corker for him, don't you know.
39 D LADY BRITOMART: Is this a moment to get on my nerves, Charles, with your outrageous expressions?
40 D LOMAX: But this is something out of the ordinary, really--
41 A ¶ MORRISON [at the door] The--er--Mr Undershaft. [He retreats in confusion].
42 A ¶ Andrew Undershaft comes in.
* 43 A All rise.
44 A Lady Britomart meets him in the middle of the room behind the settee.
45 A ¶ Andrew is, on the surface, a stoutish, easygoing elderly man, with kindly patient manners, and an engaging simplicity of character.
46 A But he has a watchful, deliberate, waiting, listening face, and formidable reserves of power, both bodily and mental, in his capacious chest and long head.
47 A His gentleness is partly that of a strong man who has learnt by experience that his natural grip hurts ordinary people unless he handles them very carefully, and partly the mellowness of age and success.
48 A He is also a little shy in his present very delicate situation.
49 D LADY BRITOMART: Good evening, Andrew.
50 D UNDERSHAFT: How d'ye do, my dear.
51 D LADY BRITOMART: You look a good deal older.
52 A ¶ UNDERSHAFT [apologetically] I AM somewhat older. [With a touch of courtship] Time has stood still with you.
53 A ¶ LADY BRITOMART [promptly] Rubbish!
54 A This is your family.
55 A ¶ UNDERSHAFT [surprised] Is it so large?
56 A I am sorry to say my memory is failing very badly in some things. [He offers his hand with paternal kindness to Lomax].
57 A ¶ LOMAX [jerkily shaking his hand] Ahdedoo.

### SCENE pt_barbara_32 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): BARBARA, CUSINS, UNDERSHAFT
1 A ¶ She is transfigured.
2 D BARBARA: I have got rid of the bribe of bread. I have got rid of the bribe of heaven. Let God's work be done for its own sake: the work he had to create us to do because it cannot be done except by living men and women. When I die, let him be in my debt, not I in his; and let me forgive him as becomes a woman of my rank.
3 D CUSINS: Then the way of life lies through the factory of death?
4 D BARBARA: Yes, through the raising of hell to heaven and of man to God, through the unveiling of an eternal light in the Valley of The Shadow.
5 A ¶ Seizing him with both hands.
6 D BARBARA: Oh, did you think my courage would never come back? did you believe that I was a deserter? that I, who have stood in the streets, and taken my people to my heart, and talked of the holiest and greatest things with them, could ever turn back and chatter foolishly to fashionable people about nothing in a drawingroom? Never, never, never, never: Major Barbara will die with the colors. Oh! and I have my dear little Dolly boy still; and he has found me my place and my work. Glory Hallelujah!
7 A ¶ She kisses him.
8 D CUSINS: My dearest: consider my delicate health. I cannot stand as much happiness as you can.
9 D BARBARA: Yes: it is not easy work being in love with me, is it? But it's good for you.
10 A ¶ She runs to the shed, and calls, childlike.
11 D BARBARA: Mamma! Mamma!
12 A ¶ Bilton comes out of the shed, followed by Undershaft.
13 D BARBARA: I want Mamma.
14 D UNDERSHAFT: She is taking off her list slippers, dear.
15 A ¶ He passes on to Cusins.
16 D UNDERSHAFT: Well? What does she say?
17 D CUSINS: She has gone right up into the skies.
18 A ¶ LADY BRITOMART [coming from the shed and stopping on the steps, obstructing Sarah, who follows with Lomax.
19 A Barbara clutches like a baby at her mother's skirt].
* 20 A Barbara: when will you learn to be independent and to act and think for yourself?
21 A I know as well as possible what that cry of "Mamma, Mamma," means.
* 22 A Always running to me!
23 A ¶ SARAH [touching Lady Britomart's ribs with her finger tips and imitating a bicycle horn] Pip!
24 A Pip!
25 A ¶ LADY BRITOMART [highly indignant] How dare you say Pip! pip! to me, Sarah?
26 A You are both very naughty children.
27 A What do you want, Barbara?
28 D BARBARA: I want a house in the village to live in with Dolly.
29 A ¶ Dragging at the skirt.
30 D BARBARA: Come and tell me which one to take.
31 A ¶ UNDERSHAFT [to Cusins] Six o'clock tomorrow morning, my young friend.

### SCENE pt_barbara_6 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): BARBARA, UNDERSHAFT, LOMAX, LADY BRITOMART, CUSINS, STEPHEN
1 D BARBARA: In West Ham. At the sign of the cross. Ask anybody in Canning Town. Where are your works?
2 D UNDERSHAFT: In Perivale St Andrews. At the sign of the sword. Ask anybody in Europe.
3 D LOMAX: Hadn't I better play something?
4 D BARBARA: Yes. Give us Onward, Christian Soldiers.
5 D LOMAX: Well, that's rather a strong order to begin with, don't you know. Suppose I sing Thou'rt passing hence, my brother. It's much the same tune.
6 D BARBARA: It's too melancholy. You get saved, Cholly; and you'll pass hence, my brother, without making such a fuss about it.
7 D LADY BRITOMART: Really, Barbara, you go on as if religion were a pleasant subject. Do have some sense of propriety.
8 D UNDERSHAFT: I do not find it an unpleasant subject, my dear. It is the only one that capable people really care for.
9 A ¶ LADY BRITOMART [looking at her watch] Well, if you are determined to have it, I insist on having it in a proper and respectable way.
10 A Charles: ring for prayers. [General amazement.
11 A Stephen rises in dismay].
12 A ¶ LOMAX [rising] Oh I say!
13 A ¶ UNDERSHAFT [rising] I am afraid I must be going.
14 D LADY BRITOMART: You cannot go now, Andrew: it would be most improper. Sit down. What will the servants think?
15 D UNDERSHAFT: My dear: I have conscientious scruples. May I suggest a compromise? If Barbara will conduct a little service in the drawingroom, with Mr Lomax as organist, I will attend it willingly. I will even take part, if a trombone can be procured.
16 D LADY BRITOMART: Don't mock, Andrew.
17 A ¶ UNDERSHAFT [shocked--to Barbara] You don't think I am mocking, my love, I hope.
18 D BARBARA: No, of course not; and it wouldn't matter if you were: half the Army came to their first meeting for a lark.
19 A ¶ Rising.
20 D BARBARA: Come along. Come, Dolly. Come, Cholly.
21 A ¶ She goes out with Undershaft, who opens the door for her.
22 A Cusins rises.
23 D LADY BRITOMART: I will not be disobeyed by everybody. Adolphus: sit down. Charles: you may go. You are not fit for prayers: you cannot keep your countenance.
24 D LOMAX: Oh I say!
25 A ¶ He goes out.
26 A ¶ LADY BRITOMART [continuing] But you, Adolphus, can behave yourself if you choose to.
27 A I insist on your staying.
28 D CUSINS: My dear Lady Brit: there are things in the family prayer book that I couldn't bear to hear you say.
29 D LADY BRITOMART: What things, pray?
30 D CUSINS: Well, you would have to say before all the servants that we have done things we ought not to have done, and left undone things we ought to have done, and that there is no health in us. I cannot bear to hear you doing yourself such an unjustice, and Barbara such an injustice. As for myself, I flatly deny it: I have done my best. I shouldn't dare to marry Barbara--I couldn't look you in the face--if it were true. So I must go to the drawingroom.
31 A ¶ LADY BRITOMART [offended] Well, go. [He starts for the door].
32 A And remember this, Adolphus [he turns to listen]: I have a very strong suspicion that you went to the Salvation Army to worship Barbara and nothing else.
33 A And I quite appreciate the very clever way in which you systematically humbug me.
34 A I have found you out.
35 A Take care Barbara doesn't.
36 A That's all.
37 A ¶ CUSINS [with unruffled sweetness] Don't tell on me. [He goes out].
38 D LADY BRITOMART: Sarah: if you want to go, go. Anything's better than to sit there as if you wished you were a thousand miles away.
39 A ¶ SARAH [languidly] Very well, mamma. [She goes].
40 A ¶ Lady Britomart, with a sudden flounce, gives way to a little gust of tears.
41 A ¶ STEPHEN [going to her] Mother: what's the matter?
42 A ¶ LADY BRITOMART [swishing away her tears with her handkerchief] Nothing.
43 A Foolishness.
44 A You can go with him, too, if you like, and leave me with the servants.
45 D STEPHEN: Oh, you mustn't think that, mother. I--I don't like him.
46 D LADY BRITOMART: The others do. That is the injustice of a woman's lot. A woman has to bring up her children; and that means to restrain them, to deny them things they want, to set them tasks, to punish them when they do wrong, to do all the unpleasant things. And then the father, who has nothing to do but pet them and spoil them, comes in when all her work is done and steals their affection from her.
47 D STEPHEN: He has not stolen our affection from you. It is only curiosity.
48 A ¶ LADY BRITOMART [violently] I won't be consoled, Stephen.
49 A There is nothing the matter with me. [She rises and goes towards the door].
50 D STEPHEN: Where are you going, mother?
51 D LADY BRITOMART: To the drawingroom, of course.
52 A ¶ She goes out.
* 53 A Onward, Christian Soldiers, on the concertina, with tambourine accompaniment, is heard when the door opens.
54 D LADY BRITOMART: Are you coming, Stephen?
55 D STEPHEN: No. Certainly not.
56 A ¶ She goes.
57 A He sits down on the settee, with compressed lips and an expression of strong dislike.
* 58 A ¶ The yard of the West Ham shelter of the Salvation Army is a cold place on a January morning.
* 59 A The building itself, an old warehouse, is newly whitewashed.
* 60 A Its gabled end projects into the yard in the middle, with a door on the ground floor, and another in the loft above it without any balcony or ladder, but with a pulley rigged over it for hoisting sacks.
* 61 A Those who come from this central gable end into the yard have the gateway leading to the street on their left, with a stone horse-trough just beyond it, and, on the right, a penthouse shielding a table from the weather.
62 A There are forms at the table; and on them are seated a man and a woman, both much down on their luck, finishing a meal of bread [one thick slice each, with margarine and golden syrup] and diluted milk.
63 A ¶ The man, a workman out of employment, is young, agile, a talker, a poser, sharp enough to be capable of anything in reason except honesty or altruistic considerations of any kind.
64 A The woman is a commonplace old bundle of poverty and hard-worn humanity.
65 A She looks sixty and probably is forty-five.
* 66 A If they were rich people, gloved and muffed and well wrapped up in furs and overcoats, they would be numbed and miserable; for it is a grindingly cold, raw, January day; and a glance at the background of grimy warehouses and leaden sky visible over the whitewashed walls of the yard would drive any idle rich person straight to the Mediterranean.
67 A But these two, being no more troubled with visions of the Mediterranean than of the moon, and being compelled to keep more of their clothes in the pawnshop, and less on their persons, in winter than in summer, are not depressed by the cold: rather are they stung into vivacity, to which their meal has just now given an almost jolly turn.
68 A The man takes a pull at his mug, and then gets up and moves about the yard with his hands deep in his pockets, occasionally breaking into a stepdance.

### SCENE pt_candida_0 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): PROSERPINE, MORELL, LEXY
* 1 A ¶ A fine October morning in the north east suburbs of London, a vast district many miles away from the London of Mayfair and St. James's, much less known there than the Paris of the Rue de Rivoli and the Champs Elysees, and much less narrow, squalid, fetid and airless in its slums; strong in comfortable, prosperous middle class life; wide-streeted, myriad-populated; well-served with ugly iron urinals, Radical clubs, tram lines, and a perpetual stream of yellow cars; enjoying in its main thoroughfares the luxury of grass-grown "front gardens," untrodden by the foot of man save as to the path from the gate to the hall door; but blighted by an intolerable monotony of miles and miles of graceless, characterless brick houses, black iron railings, stony pavements, slaty roofs, and respectably ill dressed or disreputably poorly dressed people, quite accustomed to the place, and mostly plodding about somebody else's work, which they would not do if they themselves could help it.
* 2 A The little energy and eagerness that crop up show themselves in cockney cupidity and business "push."
* 3 A Even the policemen and the chapels are not infrequent enough to break the monotony.
* 4 A The sun is shining cheerfully; there is no fog; and though the smoke effectually prevents anything, whether faces and hands or bricks and mortar, from looking fresh and clean, it is not hanging heavily enough to trouble a Londoner.
* 5 A ¶ This desert of unattractiveness has its oasis.
* 6 A Near the outer end of the Hackney Road is a park of 217 acres, fenced in, not by railings, but by a wooden paling, and containing plenty of greensward, trees, a lake for bathers, flower beds with the flowers arranged carefully in patterns by the admired cockney art of carpet gardening and a sandpit, imported from the seaside for the delight of the children, but speedily deserted on its becoming a natural vermin preserve for all the petty fauna of Kingsland, Hackney and Hoxton.
* 7 A A bandstand, an unfinished forum for religious, anti-religious and political orators, cricket pitches, a gymnasium, and an old fashioned stone kiosk are among its attractions.
* 8 A Wherever the prospect is bounded by trees or rising green grounds, it is a pleasant place.
* 9 A Where the ground stretches far to the grey palings, with bricks and mortar, sky signs, crowded chimneys and smoke beyond, the prospect makes it desolate and sordid.
* 10 A ¶ The best view of Victoria Park is from the front window of St. Dominic's Parsonage, from which not a single chimney is visible.
* 11 A The parsonage is a semi-detached villa with a front garden and a porch.
* 12 A Visitors go up the flight of steps to the porch: tradespeople and members of the family go down by a door under the steps to the basement, with a breakfast room, used for all meals, in front, and the kitchen at the back.
* 13 A Upstairs, on the level of the hall door, is the drawing-room, with its large plate glass window looking on the park.
14 A In this room, the only sitting-room that can be spared from the children and the family meals, the parson, the Reverend James Mavor Morell does his work.
15 A He is sitting in a strong round backed revolving chair at the right hand end of a long table, which stands across the window, so that he can cheer himself with the view of the park at his elbow.
* 16 A At the opposite end of the table, adjoining it, is a little table; only half the width of the other, with a typewriter on it.
17 A His typist is sitting at this machine, with her back to the window.
* 18 A The large table is littered with pamphlets, journals, letters, nests of drawers, an office diary, postage scales and the like.
* 19 A A spare chair for visitors having business with the parson is in the middle, turned to his end.
* 20 A Within reach of his hand is a stationery case, and a cabinet photograph in a frame.
* 21 A Behind him the right hand wall, recessed above the fireplace, is fitted with bookshelves, on which an adept eye can measure the parson's divinity and casuistry by a complete set of Browning's poems and Maurice's Theological Essays, and guess at his politics from a yellow backed Progress and Poverty, Fabian Essays, a Dream of John Ball, Marx's Capital, and half a dozen other literary landmarks in Socialism.
* 22 A Opposite him on the left, near the typewriter, is the door.
* 23 A Further down the room, opposite the fireplace, a bookcase stands on a cellaret, with a sofa near it.
* 24 A There is a generous fire burning; and the hearth, with a comfortable armchair and a japanned flower painted coal scuttle at one side, a miniature chair for a boy or girl on the other, a nicely varnished wooden mantelpiece, with neatly moulded shelves, tiny bits of mirror let into the panels, and a travelling clock in a leather case (the inevitable wedding present), and on the wall above a large autotype of the chief figure in Titian's Virgin of the Assumption, is very inviting.
* 25 A Altogether the room is the room of a good housekeeper, vanquished, as far as the table is concerned, by an untidy man, but elsewhere mistress of the situation.
* 26 A The furniture, in its ornamental aspect, betrays the style of the advertised "drawing-room suite" of the pushing suburban furniture dealer; but there is nothing useless or pretentious in the room.
* 27 A The paper and panelling are dark, throwing the big cheery window and the park outside into strong relief.
28 A ¶ The Reverend James Mavor Morell is a Christian Socialist clergyman of the Church of England, and an active member of the Guild of St. Matthew and the Christian Social Union.
29 A A vigorous, genial, popular man of forty, robust and goodlooking, full of energy, with pleasant, hearty, considerate manners, and a sound, unaffected voice, which he uses with the clean, athletic articulation of a practised orator, and with a wide range and perfect command of expression.
30 A He is a first rate clergyman, able to say what he likes to whom he likes, to lecture people without setting himself up against them, to impose his authority on them without humiliating them, and to interfere in their business without impertinence.
31 A His well-spring of spiritual enthusiasm and sympathetic emotion has never run dry for a moment: he still eats and sleeps heartily enough to win the daily battle between exhaustion and recuperation triumphantly.
32 A Withal, a great baby, pardonably vain of his powers and unconsciously pleased with himself.
33 A He has a healthy complexion, a good forehead, with the brows somewhat blunt, and the eyes bright and eager, a mouth resolute, but not particularly well cut, and a substantial nose, with the mobile, spreading nostrils of the dramatic orator, but, like all his features, void of subtlety.
34 A ¶ The typist, Miss Proserpine Garnett, is a brisk little woman of about 30, of the lower middle class, neatly but cheaply dressed in a black merino skirt and a blouse, rather pert and quick of speech, and not very civil in her manner, but sensitive and affectionate.
35 A She is clattering away busily at her machine whilst Morell opens the last of his morning's letters.
36 A He realizes its contents with a comic groan of despair.
37 D PROSERPINE: Another lecture?
38 D MORELL: Yes. The Hoxton Freedom Group want me to address them on Sunday morning (great emphasis on "Sunday," this being the unreasonable part of the business). What are they?
39 D PROSERPINE: Communist Anarchists, I think.
40 D MORELL: Just like Anarchists not to know that they can't have a parson on Sunday! Tell them to come to church if they want to hear me: it will do them good. Say I can only come on Mondays and Thursdays. Have you the diary there?
41 A ¶ PROSERPINE (taking up the diary).
42 A Yes.
43 D MORELL: Have I any lecture on for next Monday?
44 A ¶ PROSERPINE (referring to diary).
45 A Tower Hamlets Radical Club.
46 D MORELL: Well, Thursday then?
47 D PROSERPINE: English Land Restoration League.
48 D MORELL: What next?
49 D PROSERPINE: Guild of St. Matthew on Monday. Independent Labor Party, Greenwich Branch, on Thursday. Monday, Social-Democratic Federation, Mile End Branch. Thursday, first Confirmation class-- (Impatiently). Oh, I'd better tell them you can't come. They're only half a dozen ignorant and conceited costermongers without five shillings between them.
50 A ¶ MORELL (amused).
51 A Ah; but you see they're near relatives of mine, Miss Garnett.
52 A ¶ PROSERPINE (staring at him).
53 A Relatives of YOURS!
54 D MORELL: Yes: we have the same father--in Heaven.
55 A ¶ PROSERPINE (relieved).
56 A Oh, is that all?
57 A ¶ MORELL (with a sadness which is a luxury to a man whose voice expresses it so finely).
58 A Ah, you don't believe it.
59 A Everybody says it: nobody believes it--nobody.
60 A (Briskly, getting back to business.)
61 A Well, well!
62 A Come, Miss Proserpine, can't you find a date for the costers?
63 A What about the 25th?: that was vacant the day before yesterday.
64 A ¶ PROSERPINE (referring to diary).
65 A Engaged--the Fabian Society.
66 D MORELL: Bother the Fabian Society! Is the 28th gone too?
67 D PROSERPINE: City dinner. You're invited to dine with the Founder's Company.
68 D MORELL: That'll do; I'll go to the Hoxton Group of Freedom instead. (She enters the engagement in silence, with implacable disparagement of the Hoxton Anarchists in every line of her face. Morell bursts open the cover of a copy of The Church Reformer, which has come by post, and glances through Mr. Stewart Hendlam's leader and the Guild of St. Matthew news. These proceedings are presently enlivened by the appearance of Morell's curate, the Reverend Alexander Mill, a young gentleman gathered by Morell from the nearest University settlement, whither he had come from Oxford to give the east end of London the benefit of his university training. He is a conceitedly well intentioned, enthusiastic, immature person, with nothing positively unbearable about him except a habit of speaking with his lips carefully closed for half an inch from each corner, a finicking arthulation, and a set of horribly corrupt vowels, notably ow for o, this being his chief means of bringing Oxford refinement to bear on Hackney vulgarity. Morell, whom he has won over by a doglike devotion, looks up indulgently from The Church Reformer as he enters, and remarks) Well, Lexy! Late again, as usual.
69 D LEXY: I'm afraid so. I wish I could get up in the morning.
70 A ¶ MORELL (exulting in his own energy).
71 A Ha! ha!
72 A (Whimsically.)
73 A Watch and pray, Lexy: watch and pray.
74 D LEXY: I know. (Rising wittily to the occasion.) But how can I watch and pray when I am asleep? Isn't that so, Miss Prossy?
75 A ¶ PROSERPINE (sharply).
76 A Miss Garnett, if you please.
77 D LEXY: I beg your pardon--Miss Garnett.
78 D PROSERPINE: You've got to do all the work to-day.
79 D LEXY: Why?
80 D PROSERPINE: Never mind why. It will do you good to earn your supper before you eat it, for once in a way, as I do. Come: don't dawdle. You should have been off on your rounds half an hour ago.
81 A ¶ LEXY (perplexed).
82 A Is she in earnest, Morell?
83 A ¶ MORELL (in the highest spirits--his eyes dancing).
84 A Yes.
85 A I am going to dawdle to-day.
86 D LEXY: You! You don't know how.
87 A ¶ MORELL (heartily).
88 A Ha! ha!
89 A Don't I?
90 A I'm going to have this day all to myself--or at least the forenoon.
91 A My wife's coming back: she's due here at 11.45.
92 A ¶ LEXY (surprised).
93 A Coming back already--with the children?
94 A I thought they were to stay to the end of the month.
95 D MORELL: So they are: she's only coming up for two days, to get some flannel things for Jimmy, and to see how we're getting on without her.
96 A ¶ LEXY (anxiously).
97 A But, my dear Morell, if what Jimmy and Fluffy had was scarlatina, do you think it wise--
98 D MORELL: Scarlatina!--rubbish, German measles. I brought it into the house myself from the Pycroft Street School. A parson is like a doctor, my boy: he must face infection as a soldier must face bullets. (He rises and claps Lexy on the shoulder.) Catch the measles if you can, Lexy: she'll nurse you; and what a piece of luck that will be for you!--eh?
99 A ¶ LEXY (smiling uneasily).
100 A It's so hard to understand you about Mrs. Morell--
101 A ¶ MORELL (tenderly).
102 A Ah, my boy, get married--get married to a good woman; and then you'll understand.
103 A That's a foretaste of what will be best in the Kingdom of Heaven we are trying to establish on earth.
104 A That will cure you of dawdling.
105 A An honest man feels that he must pay Heaven for every hour of happiness with a good spell of hard, unselfish work to make others happy.
106 A We have no more right to consume happiness without producing it than to consume wealth without producing it.
107 A Get a wife like my Candida; and you'll always be in arrear with your repayment.
108 A (He pats Lexy affectionately on the back, and is leaving the room when Lexy calls to him.)
109 D LEXY: Oh, wait a bit: I forgot. (Morell halts and turns with the door knob in his hand.) Your father-in-law is coming round to see you. (Morell shuts the door again, with a complete change of manner.)
110 A ¶ MORELL (surprised and not pleased).
111 A Mr. Burgess?

### SCENE pt_candida_10 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): BURGESS, LEXY, CANDIDA, MARCHBANKS, MORELL, EUGENE, PROSERPINE
1 A ¶ BURGESS (strongly remonstrating).
2 A Aw, no, Candy.
3 A 'Ang it all!
4 A (Lexy Mill comes in, looking anxious and important.)
5 A ¶ LEXY (hastening to shake hands with Candida).
6 A How do you do, Mrs. Morell?
7 A So glad to see you back again.
8 D CANDIDA: Thank you, Lexy. You know Eugene, don't you?
9 D LEXY: Oh, yes. How do you do, Marchbanks?
10 D MARCHBANKS: Quite well, thanks.
11 A ¶ LEXY (to Morell).
12 A I've just come from the Guild of St. Matthew.
13 A They are in the greatest consternation about your telegram.
14 A There's nothing wrong, is there?
15 D CANDIDA: What did you telegraph about, James?
16 A ¶ LEXY (to Candida).
17 A He was to have spoken for them tonight.
18 A They've taken the large hall in Mare Street and spent a lot of money on posters.
19 A Morell's telegram was to say he couldn't come.
20 A It came on them like a thunderbolt.
21 A ¶ CANDIDA (surprized, and beginning to suspect something wrong).
22 A Given up an engagement to speak!
23 D BURGESS: First time in his life, I'll bet. Ain' it, Candy?
24 A ¶ LEXY (to Morell).
25 A They decided to send an urgent telegram to you asking whether you could not change your mind.
26 A Have you received it?
27 A ¶ MORELL (with restrained impatience).
28 A Yes, yes: I got it.
29 D LEXY: It was reply paid.
30 D MORELL: Yes, I know. I answered it. I can't go.
31 D CANDIDA: But why, James?
32 A ¶ MORELL (almost fiercely).
33 A Because I don't choose.
34 A These people forget that I am a man: they think I am a talking machine to be turned on for their pleasure every evening of my life.
35 A May I not have ONE night at home, with my wife, and my friends?
* 36 A ¶ (They are all amazed at this outburst, except Eugene.
37 A His expression remains unchanged.)
38 D CANDIDA: Oh, James, you know you'll have an attack of bad conscience to-morrow; and I shall have to suffer for that.
39 A ¶ LEXY (intimidated, but urgent).
40 A I know, of course, that they make the most unreasonable demands on you.
41 A But they have been telegraphing all over the place for another speaker: and they can get nobody but the President of the Agnostic League.
42 A ¶ MORELL (promptly).
43 A Well, an excellent man.
44 A What better do they want?
45 D LEXY: But he always insists so powerfully on the divorce of Socialism from Christianity. He will undo all the good we have been doing. Of course you know best; but--(He hesitates.)
46 A ¶ CANDIDA (coaxingly).
47 A Oh, DO go, James.
48 A We'll all go.
49 A ¶ BURGESS (grumbling).
50 A Look 'ere, Candy!
51 A I say!
52 A Let's stay at home by the fire, comfortable.
53 A He won't need to be more'n a couple-o'-hour away.
54 D CANDIDA: You'll be just as comfortable at the meeting. We'll all sit on the platform and be great people.
55 A ¶ EUGENE (terrified).
56 A Oh, please don't let us go on the platform.
57 A No--everyone will stare at us--I couldn't.
58 A I'll sit at the back of the room.
59 D CANDIDA: Don't be afraid. They'll be too busy looking at James to notice you.
60 A ¶ MORELL (turning his head and looking meaningly at her over his shoulder).
61 A Prossy's complaint, Candida!
62 A Eh?
63 A ¶ CANDIDA (gaily).
64 A Yes.
65 A ¶ BURGESS (mystified).
66 A Prossy's complaint.
67 A Wot are you talking about, James?
68 A ¶ MORELL (not heeding him, rises; goes to the door; and holds it open, shouting in a commanding voice).
69 A Miss Garnett.
70 A ¶ PROSERPINE (in the distance).
71 A Yes, Mr. Morell.
72 A Coming.
* 73 A (They all wait, except Burgess, who goes stealthily to Lexy and draws him aside.)
74 D BURGESS: Listen here, Mr. Mill. Wot's Prossy's complaint? Wot's wrong with 'er?
75 A ¶ LEXY (confidentially).
76 A Well, I don't exactly know; but she spoke very strangely to me this morning.
77 A I'm afraid she's a little out of her mind sometimes.
78 A ¶ BURGESS (overwhelmed).
79 A Why, it must be catchin'!
80 A Four in the same 'ouse!
81 A (He goes back to the hearth, quite lost before the instability of the human intellect in a clergyman's house.)
82 A ¶ PROSERPINE (appearing on the threshold).
83 A What is it, Mr. Morell?
84 D MORELL: Telegraph to the Guild of St. Matthew that I am coming.
85 A ¶ PROSERPINE (surprised).
86 A Don't they expect you?
87 A ¶ MORELL (peremptorily).
88 A Do as I tell you.
89 A ¶ (Proserpine frightened, sits down at her typewriter, and obeys.
90 A Morell goes across to Burgess, Candida watching his movements all the time with growing wonder and misgiving.)
91 D MORELL: Burgess: you don't want to come?
92 A ¶ BURGESS (in deprecation).
93 A Oh, don't put it like that, James.
94 A It's only that it ain't Sunday, you know.
95 D MORELL: I'm sorry. I thought you might like to be introduced to the chairman. He's on the Works Committee of the County Council and has some influence in the matter of contracts. (Burgess wakes up at once. Morell, expecting as much, waits a moment, and says) Will you come?
96 A ¶ BURGESS (with enthusiasm).
97 A Course I'll come, James.
98 A Ain' it always a pleasure to 'ear you.
99 A ¶ MORELL (turning from him).
100 A I shall want you to take some notes at the meeting, Miss Garnett, if you have no other engagement.
101 A (She nods, afraid to speak.)
102 A You are coming, Lexy, I suppose.
103 D LEXY: Certainly.

### SCENE pt_candida_11 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): CANDIDA, MORELL, MARCHBANKS
1 D CANDIDA: We are all coming, James.
2 D MORELL: No: you are not coming; and Eugene is not coming. You will stay here and entertain him--to celebrate your return home. (Eugene rises, breathless.)
3 D CANDIDA: But James--
4 A ¶ MORELL (authoritatively).
5 A I insist.
6 A You do not want to come; and he does not want to come.
7 A (Candida is about to protest.)
8 A Oh, don't concern yourselves: I shall have plenty of people without you: your chairs will be wanted by unconverted people who have never heard me before.
9 A ¶ CANDIDA (troubled).
10 A Eugene: wouldn't you like to come?
11 D MORELL: I should be afraid to let myself go before Eugene: he is so critical of sermons. (Looking at him.) He knows I am afraid of him: he told me as much this morning. Well, I shall show him how much afraid I am by leaving him here in your custody, Candida.
12 A ¶ MARCHBANKS (to himself, with vivid feeling).
13 A That's brave.
14 A That's beautiful.
15 A (He sits down again listening with parted lips.)
16 A ¶ CANDIDA (with anxious misgiving).
17 A But--but--Is anything the matter, James?
18 A (Greatly troubled.)
19 A I can't understand--
20 D MORELL: Ah, I thought it was I who couldn't understand, dear. (He takes her tenderly in his arms and kisses her on the forehead; then looks round quietly at Marchbanks.)
* 21 A ¶ Late in the evening.
* 22 A Past ten.
* 23 A The curtains are drawn, and the lamps lighted.
* 24 A The typewriter is in its case; the large table has been cleared and tidied; everything indicates that the day's work is done.
25 A ¶ Candida and Marchbanks are seated at the fire.
* 26 A The reading lamp is on the mantelshelf above Marchbanks, who is sitting on the small chair reading aloud from a manuscript.
* 27 A A little pile of manuscripts and a couple of volumes of poetry are on the carpet beside him.
28 A Candida is in the easy chair with the poker, a light brass one, upright in her hand.
29 A She is leaning back and looking at the point of it curiously, with her feet stretched towards the blaze and her heels resting on the fender, profoundly unconscious of her appearance and surroundings.
30 A ¶ MARCHBANKS (breaking off in his recitation): Every poet that ever lived has put that thought into a sonnet.
31 A He must: he can't help it.
32 A (He looks to her for assent, and notices her absorption in the poker.)
33 A Haven't you been listening?
* 34 A (No response.)
35 A Mrs. Morell!
36 A ¶ CANDIDA (starting).
37 A Eh?
38 D MARCHBANKS: Haven't you been listening?
39 A ¶ CANDIDA (with a guilty excess of politeness).
40 A Oh, yes.
41 A It's very nice.
42 A Go on, Eugene.
43 A I'm longing to hear what happens to the angel.
44 A ¶ MARCHBANKS (crushed--the manuscript dropping from his hand to the floor).
45 A I beg your pardon for boring you.
46 D CANDIDA: But you are not boring me, I assure you. Please go on. Do, Eugene.
47 D MARCHBANKS: I finished the poem about the angel quarter of an hour ago. I've read you several things since.
48 A ¶ CANDIDA (remorsefully).
49 A I'm so sorry, Eugene.
50 A I think the poker must have fascinated me.
51 A (She puts it down.)
52 D MARCHBANKS: It made me horribly uneasy.
53 D CANDIDA: Why didn't you tell me? I'd have put it down at once.
54 D MARCHBANKS: I was afraid of making you uneasy, too. It looked as if it were a weapon. If I were a hero of old, I should have laid my drawn sword between us. If Morell had come in he would have thought you had taken up the poker because there was no sword between us.
55 A ¶ CANDIDA (wondering).
56 A What?
57 A (With a puzzled glance at him.)
58 A I can't quite follow that.
59 A Those sonnets of yours have perfectly addled me.
60 A Why should there be a sword between us?
61 A ¶ MARCHBANKS (evasively).
62 A Oh, never mind.
63 A (He stoops to pick up the manuscript.)
64 D CANDIDA: Put that down again, Eugene. There are limits to my appetite for poetry--even your poetry. You've been reading to me for more than two hours--ever since James went out. I want to talk.
65 A ¶ MARCHBANKS (rising, scared).
66 A No: I mustn't talk.
67 A (He looks round him in his lost way, and adds, suddenly) I think I'll go out and take a walk in the park.
68 A (Making for the door.)
69 D CANDIDA: Nonsense: it's shut long ago. Come and sit down on the hearth-rug, and talk moonshine as you usually do. I want to be amused. Don't you want to?
70 A ¶ MARCHBANKS (in half terror, half rapture).
71 A Yes.
72 D CANDIDA: Then come along. (She moves her chair back a little to make room. He hesitates; then timidly stretches himself on the hearth-rug, face upwards, and throws back his head across her knees, looking up at her.)
73 D MARCHBANKS: Oh, I've been so miserable all the evening, because I was doing right. Now I'm doing wrong; and I'm happy.
74 A ¶ CANDIDA (tenderly amused at him).
75 A Yes: I'm sure you feel a great grown up wicked deceiver--quite proud of yourself, aren't you?
76 A ¶ MARCHBANKS (raising his head quickly and turning a little to look round at her).
77 A Take care.
78 A I'm ever so much older than you, if you only knew.
79 A (He turns quite over on his knees, with his hands clasped and his arms on her lap, and speaks with growing impulse, his blood beginning to stir.)
80 A May I say some wicked things to you?
81 A ¶ CANDIDA (without the least fear or coldness, quite nobly, and with perfect respect for his passion, but with a touch of her wise-hearted maternal humor).
82 A No. But you may say anything you really and truly feel.
83 A Anything at all, no matter what it is.
84 A I am not afraid, so long as it is your real self that speaks, and not a mere attitude--a gallant attitude, or a wicked attitude, or even a poetic attitude.
85 A I put you on your honor and truth.
86 A Now say whatever you want to.
87 A ¶ MARCHBANKS (the eager expression vanishing utterly from his lips and nostrils as his eyes light up with pathetic spirituality).
88 A Oh, now I can't say anything: all the words I know belong to some attitude or other--all except one.
89 D CANDIDA: What one is that?
90 A ¶ MARCHBANKS (softly, losing himself in the music of the name).
91 A Candida, Candida, Candida, Candida, Candida.
92 A I must say that now, because you have put me on my honor and truth; and I never think or feel Mrs. Morell: it is always Candida.
93 D CANDIDA: Of course. And what have you to say to Candida?
94 D MARCHBANKS: Nothing, but to repeat your name a thousand times. Don't you feel that every time is a prayer to you?
95 D CANDIDA: Doesn't it make you happy to be able to pray?
96 D MARCHBANKS: Yes, very happy.
97 D CANDIDA: Well, that happiness is the answer to your prayer. Do you want anything more?
98 A ¶ MARCHBANKS (in beatitude).
99 A No: I have come into heaven, where want is unknown.
100 A ¶ (Morell comes in.
101 A He halts on the threshold, and takes in the scene at a glance.)
102 A ¶ MORELL (grave and self-contained).
103 A I hope I don't disturb you.
104 A (Candida starts up violently, but without the smallest embarrassment, laughing at herself.
105 A Eugene, still kneeling, saves himself from falling by putting his hands on the seat of the chair, and remains there, staring open mouthed at Morell.)
106 A ¶ CANDIDA (as she rises).
107 A Oh, James, how you startled me!
108 A I was so taken up with Eugene that I didn't hear your latch-key.
109 A How did the meeting go off?
110 A Did you speak well?

### SCENE pt_candida_12 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MORELL, CANDIDA, MARCHBANKS
1 D MORELL: I have never spoken better in my life.
2 D CANDIDA: That was first rate! How much was the collection?
3 D MORELL: I forgot to ask.
4 A ¶ CANDIDA (to Eugene).
5 A He must have spoken splendidly, or he would never have forgotten that.
6 A (To Morell.)
7 A Where are all the others?
8 D MORELL: They left long before I could get away: I thought I should never escape. I believe they are having supper somewhere.
9 A ¶ CANDIDA (in her domestic business tone).
10 A Oh; in that case, Maria may go to bed.
11 A I'll tell her.
12 A (She goes out to the kitchen.)
13 A ¶ MORELL (looking sternly down at Marchbanks).
14 A Well?
15 A ¶ MARCHBANKS (squatting cross-legged on the hearth-rug, and actually at ease with Morell--even impishly humorous).
16 A Well?
17 D MORELL: Have you anything to tell me?
18 D MARCHBANKS: Only that I have been making a fool of myself here in private whilst you have been making a fool of yourself in public.
19 D MORELL: Hardly in the same way, I think.
20 A ¶ MARCHBANKS (scrambling up--eagerly).
21 A The very, very, VERY same way.
22 A I have been playing the good man just like you.
23 A When you began your heroics about leaving me here with Candida--
24 A ¶ MORELL (involuntarily).
25 A Candida?
26 D MARCHBANKS: Oh, yes: I've got that far. Heroics are infectious: I caught the disease from you. I swore not to say a word in your absence that I would not have said a month ago in your presence.
27 D MORELL: Did you keep your oath?
28 D MARCHBANKS: (suddenly perching himself grotesquely on the easy chair). I was ass enough to keep it until about ten minutes ago. Up to that moment I went on desperately reading to her--reading my own poems--anybody's poems--to stave off a conversation. I was standing outside the gate of Heaven, and refusing to go in. Oh, you can't think how heroic it was, and how uncomfortable! Then--
29 A ¶ MORELL (steadily controlling his suspense).
30 A Then?
31 A ¶ MARCHBANKS (prosaically slipping down into a quite ordinary attitude in the chair).
32 A Then she couldn't bear being read to any longer.
33 D MORELL: And you approached the gate of Heaven at last?
34 D MARCHBANKS: Yes.
35 D MORELL: Well? (Fiercely.) Speak, man: have you no feeling for me?
36 A ¶ MARCHBANKS (softly and musically).
37 A Then she became an angel; and there was a flaming sword that turned every way, so that I couldn't go in; for I saw that that gate was really the gate of Hell.
38 A ¶ MORELL (triumphantly).
39 A She repulsed you!
40 A ¶ MARCHBANKS (rising in wild scorn).
41 A No, you fool: if she had done that I should never have seen that I was in Heaven already.
42 A Repulsed me!
43 A You think that would have saved me--virtuous indignation!
44 A Oh, you are not worthy to live in the same world with her.
45 A (He turns away contemptuously to the other side of the room.)
46 A ¶ MORELL (who has watched him quietly without changing his place).
* 47 A Do you think you make yourself more worthy by reviling me, Eugene?
48 D MARCHBANKS: Here endeth the thousand and first lesson. Morell: I don't think much of your preaching after all: I believe I could do it better myself. The man I want to meet is the man that Candida married.
49 D MORELL: The man that--? Do you mean me?
50 D MARCHBANKS: I don't mean the Reverend James Mavor Morell, moralist and windbag. I mean the real man that the Reverend James must have hidden somewhere inside his black coat--the man that Candida loved. You can't make a woman like Candida love you by merely buttoning your collar at the back instead of in front.
51 A ¶ MORELL (boldly and steadily).
52 A When Candida promised to marry me, I was the same moralist and windbag that you now see.
53 A I wore my black coat; and my collar was buttoned behind instead of in front.
54 A Do you think she would have loved me any the better for being insincere in my profession?
55 A ¶ MARCHBANKS (on the sofa hugging his ankles).
56 A Oh, she forgave you, just as she forgives me for being a coward, and a weakling, and what you call a snivelling little whelp and all the rest of it.
57 A (Dreamily.)
58 A A woman like that has divine insight: she loves our souls, and not our follies and vanities and illusions, or our collars and coats, or any other of the rags and tatters we are rolled up in.
59 A (He reflects on this for an instant; then turns intently to question Morell.)
60 A What I want to know is how you got past the flaming sword that stopped me.
61 A ¶ MORELL (meaningly).
62 A Perhaps because I was not interrupted at the end of ten minutes.
63 A ¶ MARCHBANKS (taken aback).
64 A What!
65 D MORELL: Man can climb to the highest summits; but he cannot dwell there long.
66 D MARCHBANKS: It's false: there can he dwell for ever and there only. It's in the other moments that he can find no rest, no sense of the silent glory of life. Where would you have me spend my moments, if not on the summits?
67 D MORELL: In the scullery, slicing onions and filling lamps.
68 D MARCHBANKS: Or in the pulpit, scrubbing cheap earthenware souls?
69 D MORELL: Yes, that, too. It was there that I earned my golden moment, and the right, in that moment, to ask her to love me. I did not take the moment on credit; nor did I use it to steal another man's happiness.
70 A ¶ MARCHBANKS (rather disgustedly, trotting back towards the fireplace).
71 A I have no doubt you conducted the transaction as honestly as if you were buying a pound of cheese.
72 A (He stops on the brink of the hearth-rug and adds, thoughtfully, to himself, with his back turned to Morell) I could only go to her as a beggar.
73 A ¶ MORELL (starting).
74 A A beggar dying of cold--asking for her shawl?
75 A ¶ MARCHBANKS (turning, surprised).
76 A Thank you for touching up my poetry.
77 A Yes, if you like, a beggar dying of cold asking for her shawl.
78 A ¶ MORELL (excitedly).
79 A And she refused.
80 A Shall I tell you why she refused?
81 A I CAN tell you, on her own authority.
82 A It was because of--
83 D MARCHBANKS: She didn't refuse.
84 D MORELL: Not!
85 D MARCHBANKS: She offered me all I chose to ask for, her shawl, her wings, the wreath of stars on her head, the lilies in her hand, the crescent moon beneath her feet--
86 A ¶ MORELL (seizing him).
87 A Out with the truth, man: my wife is my wife: I want no more of your poetic fripperies.
88 A I know well that if I have lost her love and you have gained it, no law will bind her.

### SCENE pt_candida_13 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MARCHBANKS, MORELL, CANDIDA, MILL, BURGESS, PROSERPINE
1 A ¶ MARCHBANKS (quaintly, without fear or resistance).
2 A Catch me by the shirt collar, Morell: she will arrange it for me afterwards as she did this morning.
3 A (With quiet rapture.)
4 A I shall feel her hands touch me.
5 D MORELL: You young imp, do you know how dangerous it is to say that to me? Or (with a sudden misgiving) has something made you brave?
6 D MARCHBANKS: I'm not afraid now. I disliked you before: that was why I shrank from your touch. But I saw to-day--when she tortured you--that you love her. Since then I have been your friend: you may strangle me if you like.
7 A ¶ MORELL (releasing him).
8 A Eugene: if that is not a heartless lie--if you have a spark of human feeling left in you--will you tell me what has happened during my absence?
9 D MARCHBANKS: What happened! Why, the flaming sword--(Morell stamps with impatience.) Well, in plain prose, I loved her so exquisitely that I wanted nothing more than the happiness of being in such love. And before I had time to come down from the highest summits, you came in.
10 A ¶ MORELL (suffering deeply).
11 A So it is still unsettled--still the misery of doubt.
12 D MARCHBANKS: Misery! I am the happiest of men. I desire nothing now but her happiness. (With dreamy enthusiasm.) Oh, Morell, let us both give her up. Why should she have to choose between a wretched little nervous disease like me, and a pig-headed parson like you? Let us go on a pilgrimage, you to the east and I to the west, in search of a worthy lover for her--some beautiful archangel with purple wings--
13 D MORELL: Some fiddlestick. Oh, if she is mad enough to leave me for you, who will protect her? Who will help her? who will work for her? who will be a father to her children? (He sits down distractedly on the sofa, with his elbows on his knees and his head propped on his clenched fists.)
14 A ¶ MARCHBANKS (snapping his fingers wildly).
15 A She does not ask those silly questions.
16 A It is she who wants somebody to protect, to help, to work for--somebody to give her children to protect, to help and to work for.
17 A Some grown up man who has become as a little child again.
18 A Oh, you fool, you fool, you triple fool!
19 A I am the man, Morell: I am the man.
20 A (He dances about excitedly, crying.)
21 A You don't understand what a woman is.
22 A Send for her, Morell: send for her and let her choose between--(The door opens and Candida enters.
23 A He stops as if petrified.)
24 A ¶ CANDIDA (amazed, on the threshold).
25 A What on earth are you at, Eugene?
26 A ¶ MARCHBANKS (oddly).
27 A James and I are having a preaching match; and he is getting the worst of it.
28 A (Candida looks quickly round at Morell.
29 A Seeing that he is distressed, she hurries down to him, greatly vexed, speaking with vigorous reproach to Marchbanks.)
30 D CANDIDA: You have been annoying him. Now I won't have it, Eugene: do you hear? (Putting her hand on Morell's shoulder, and quite forgetting her wifely tact in her annoyance.) My boy shall not be worried: I will protect him.
31 A ¶ MORELL (rising proudly).
32 A Protect!
33 A ¶ CANDIDA (not heeding him--to Eugene).
34 A What have you been saying?
35 A ¶ MARCHBANKS (appalled).
36 A Nothing--
37 D CANDIDA: Eugene! Nothing?
38 A ¶ MARCHBANKS (piteously).
39 A I mean--I--I'm very sorry.
40 A I won't do it again: indeed I won't.
41 A I'll let him alone.
42 A ¶ MORELL (indignantly, with an aggressive movement towards Eugene).
43 A Let me alone!
44 A You young--
45 A ¶ CANDIDA (Stopping him).
46 A Sh--no, let me deal with him, James.
47 D MARCHBANKS: Oh, you're not angry with me, are you?
48 A ¶ CANDIDA (severely).
49 A Yes, I am--very angry.
50 A I have a great mind to pack you out of the house.
51 A ¶ MORELL (taken aback by Candida's vigor, and by no means relishing the sense of being rescued by her from another man).
52 A Gently, Candida, gently.
53 A I am able to take care of myself.
54 A ¶ CANDIDA (petting him).
55 A Yes, dear: of course you are.
56 A But you mustn't be annoyed and made miserable.
57 A ¶ MARCHBANKS (almost in tears, turning to the door).
58 A I'll go.
59 D CANDIDA: Oh, you needn't go: I can't turn you out at this time of night. (Vehemently.) Shame on you! For shame!
60 A ¶ MARCHBANKS (desperately).
61 A But what have I done?
62 D CANDIDA: I know what you have done--as well as if I had been here all the time. Oh, it was unworthy! You are like a child: you cannot hold your tongue.
63 D MARCHBANKS: I would die ten times over sooner than give you a moment's pain.
64 A ¶ CANDIDA (with infinite contempt for this puerility).
65 A Much good your dying would do me!
66 D MORELL: Candida, my dear: this altercation is hardly quite seemingly. It is a matter between two men; and I am the right person to settle it.
67 D CANDIDA: Two MEN! Do you call that a man? (To Eugene.) You bad boy!
68 A ¶ MARCHBANKS (gathering a whimsically affectionate courage from the scolding).
69 A If I am to be scolded like this, I must make a boy's excuse.
70 A He began it.
71 A And he's bigger than I am.
72 A ¶ CANDIDA (losing confidence a little as her concern for Morell's dignity takes the alarm).
73 A That can't be true.
74 A (To Morell.)
* 75 A You didn't begin it, James, did you?
76 A ¶ MORELL (contemptuously).
77 A No.
78 A ¶ MARCHBANKS (indignant).
79 A Oh!
80 A ¶ MORELL (to Eugene).
81 A YOU began it--this morning.
82 A (Candida, instantly connecting this with his mysterious allusion in the afternoon to something told him by Eugene in the morning, looks quickly at him, wrestling with the enigma.
83 A Morell proceeds with the emphasis of offended superiority.)
84 A But your other point is true.
85 A I am certainly the bigger of the two, and, I hope, the stronger, Candida.
86 A So you had better leave the matter in my hands.
87 A ¶ CANDIDA (again soothing him).
88 A Yes, dear; but--(Troubled.)
89 A I don't understand about this morning.
90 A ¶ MORELL (gently snubbing her).
91 A You need not understand, my dear.
92 D CANDIDA: But, James, I--(The street bell rings.) Oh, bother! Here they all come. (She goes out to let them in.)
93 A ¶ MARCHBANKS (running to Morell ).
94 A Oh, Morell, isn't it dreadful?
95 A She's angry with us: she hates me.
96 A What shall I do?
97 A ¶ MORELL (with quaint desperation, clutching himself by the hair).
98 A Eugene: my head is spinning round.
99 A I shall begin to laugh presently.
100 A (He walks up and down the middle of the room.)
101 A ¶ MARCHBANKS (following him anxiously).
102 A No, no: she'll think I've thrown you into hysterics.
103 A Don't laugh.
* 104 A (Boisterous voices and laughter are heard approaching.
105 A Lexy Mill, his eyes sparkling, and his bearing denoting unwonted elevation of spirit, enters with Burgess, who is greasy and self-complacent, but has all his wits about him.
106 A Miss Garnett, with her smartest hat and jacket on, follows them; but though her eyes are brighter than before, she is evidently a prey to misgiving.
107 A She places herself with her back to her typewriting table, with one hand on it to rest herself, passes the other across her forehead as if she were a little tired and giddy.
108 A Marchbanks relapses into shyness and edges away into the corner near the window, where Morell's books are.)
109 A ¶ MILL (exhilaratedly).
110 A Morell: I MUST congratulate you.
111 A (Grasping his hand.)
112 A What a noble, splendid, inspired address you gave us!
113 A You surpassed yourself.
114 D BURGESS: So you did, James. It fair kep' me awake to the last word. Didn't it, Miss Garnett?
115 A ¶ PROSERPINE (worriedly).
116 A Oh, I wasn't minding you: I was trying to make notes.
117 A (She takes out her note-book, and looks at her stenography, which nearly makes her cry.)

### SCENE pt_candida_5 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MARCHBANKS, CANDIDA, MORELL, PROSERPINE
1 D MARCHBANKS: I want to stay, of course--unless the reverend gentleman, your husband, has anything to advance to the contrary.
2 D CANDIDA: Shall he stay, James, if he promises to be a good boy and to help me to lay the table? (Marchbanks turns his head and looks steadfastly at Morell over his shoulder, challenging his answer.)
3 A ¶ MORELL (shortly).
4 A Oh, yes, certainly: he had better.
5 A (He goes to the table and pretends to busy himself with his papers there.)
6 A ¶ MARCHBANKS (offering his arm to Candida).
7 A Come and lay the table.(She takes it and they go to the door together.
8 A As they go out he adds) I am the happiest of men.
9 D MORELL: So was I--an hour ago.
* 10 A ¶ The same day.
* 11 A The same room.
* 12 A Late in the afternoon.
* 13 A The spare chair for visitors has been replaced at the table, which is, if possible, more untidy than before.
14 A Marchbanks, alone and idle, is trying to find out how the typewriter works.
15 A Hearing someone at the door, he steals guiltily away to the window and pretends to be absorbed in the view.
16 A Miss Garnett, carrying the notebook in which she takes down Morell's letters in shorthand from his dictation, sits down at the typewriter and sets to work transcribing them, much too busy to notice Eugene.
17 A Unfortunately the first key she strikes sticks.
18 D PROSERPINE: Bother! You've been meddling with my typewriter, Mr. Marchbanks; and there's not the least use in your trying to look as if you hadn't.
19 A ¶ MARCHBANKS (timidly).
20 A I'm very sorry, Miss Garnett.
21 A I only tried to make it write.
22 D PROSERPINE: Well, you've made this key stick.
23 A ¶ MARCHBANKS (earnestly).
24 A I assure you I didn't touch the keys.
25 A I didn't, indeed.
26 A I only turned a little wheel.
27 A (He points irresolutely at the tension wheel.)
28 D PROSERPINE: Oh, now I understand. (She sets the machine to rights, talking volubly all the time.) I suppose you thought it was a sort of barrel-organ. Nothing to do but turn the handle, and it would write a beautiful love letter for you straight off, eh?
29 A ¶ MARCHBANKS (seriously).
30 A I suppose a machine could be made to write love-letters.
31 A They're all the same, aren't they!
32 A ¶ PROSERPINE (somewhat indignantly: any such discussion, except by way of pleasantry, being outside her code of manners).
33 A How do I know?
34 A Why do you ask me?
35 D MARCHBANKS: I beg your pardon. I thought clever people--people who can do business and write letters, and that sort of thing--always had love affairs.
36 A ¶ PROSERPINE (rising, outraged).
37 A Mr. Marchbanks!
38 A (She looks severely at him, and marches with much dignity to the bookcase.)
39 A ¶ MARCHBANKS (approaching her humbly).
40 A I hope I haven't offended you.
41 A Perhaps I shouldn't have alluded to your love affairs.
42 A ¶ PROSERPINE (plucking a blue book from the shelf and turning sharply on him).
43 A I haven't any love affairs.
44 A How dare you say such a thing?
45 A ¶ MARCHBANKS (simply).
46 A Really!
47 A Oh, then you are shy, like me.
48 A Isn't that so?
49 D PROSERPINE: Certainly I am not shy. What do you mean?
50 A ¶ MARCHBANKS (secretly).
51 A You must be: that is the reason there are so few love affairs in the world.
52 A We all go about longing for love: it is the first need of our natures, the loudest cry Of our hearts; but we dare not utter our longing: we are too shy.
53 A (Very earnestly.)
54 A Oh, Miss Garnett, what would you not give to be without fear, without shame--
55 A ¶ PROSERPINE (scandalized), Well, upon my word!
56 A ¶ MARCHBANKS (with petulant impatience).
57 A Ah, don't say those stupid things to me: they don't deceive me: what use are they?
58 A Why are you afraid to be your real self with me?
59 A I am just like you.
60 D PROSERPINE: Like me! Pray, are you flattering me or flattering yourself? I don't feel quite sure which. (She turns to go back to the typewriter.)
61 A ¶ MARCHBANKS (stopping her mysteriously).
62 A Hush!
63 A I go about in search of love; and I find it in unmeasured stores in the bosoms of others.
64 A But when I try to ask for it, this horrible shyness strangles me; and I stand dumb, or worse than dumb, saying meaningless things--foolish lies.
65 A And I see the affection I am longing for given to dogs and cats and pet birds, because they come and ask for it.
66 A (Almost whispering.)
67 A It must be asked for: it is like a ghost: it cannot speak unless it is first spoken to.
68 A (At his normal pitch, but with deep melancholy.)
69 A All the love in the world is longing to speak; only it dare not, because it is shy, shy, shy.
70 A That is the world's tragedy.
71 A (With a deep sigh he sits in the spare chair and buries his face in his hands.)
72 A ¶ PROSERPINE (amazed, but keeping her wits about her--her point of honor in encounters with strange young men).
73 A Wicked people get over that shyness occasionally, don't they?
74 A ¶ MARCHBANKS (scrambling up almost fiercely).
75 A Wicked people means people who have no love: therefore they have no shame.
76 A They have the power to ask love because they don't need it: they have the power to offer it because they have none to give.
77 A (He collapses into his seat, and adds, mournfully) But we, who have love, and long to mingle it with the love of others: we cannot utter a word.
78 A (Timidly.)
79 A You find that, don't you?
80 D PROSERPINE: Look here: if you don't stop talking like this, I'll leave the room, Mr. Marchbanks: I really will. It's not proper. (She resumes her seat at the typewriter, opening the blue book and preparing to copy a passage from it.)
81 A ¶ MARCHBANKS (hopelessly).
82 A Nothing that's worth saying IS proper.
83 A (He rises, and wanders about the room in his lost way, saying) I can't understand you, Miss Garnett.
84 A What am I to talk about?
85 A ¶ PROSERPINE (snubbing him).
86 A Talk about indifferent things, talk about the weather.
87 D MARCHBANKS: Would you stand and talk about indifferent things if a child were by, crying bitterly with hunger?
88 D PROSERPINE: I suppose not.
89 D MARCHBANKS: Well: I can't talk about indifferent things with my heart crying out bitterly in ITS hunger.
90 D PROSERPINE: Then hold your tongue.
91 D MARCHBANKS: Yes: that is what it always comes to. We hold our tongues. Does that stop the cry of your heart?--for it does cry: doesn't it? It must, if you have a heart.
92 A ¶ PROSERPINE (suddenly rising with her hand pressed on her heart).
93 A Oh, it's no use trying to work while you talk like that.
94 A (She leaves her little table and sits on the sofa.
95 A Her feelings are evidently strongly worked on.)
96 A It's no business of yours, whether my heart cries or not; but I have a mind to tell you, for all that.
97 D MARCHBANKS: You needn't. I know already that it must.
98 D PROSERPINE: But mind: if you ever say I said so, I'll deny it.
99 A ¶ MARCHBANKS (compassionately).
100 A Yes, I know.
101 A And so you haven't the courage to tell him?
102 A ¶ PROSERPINE (bouncing up).
103 A HIM!
104 A Who?
105 D MARCHBANKS: Whoever he is. The man you love. It might be anybody. The curate, Mr. Mill, perhaps.
106 A ¶ PROSERPINE (with disdain).
107 A Mr. Mill!!!
108 A A fine man to break my heart about, indeed!
109 A I'd rather have you than Mr. Mill.
110 A ¶ MARCHBANKS (recoiling).
111 A No, really--I'm very sorry; but you mustn't think of that.
112 A I--
113 D PROSERPINE: (testily, crossing to the fire and standing at it with her back to him). Oh, don't be frightened: it's not you. It's not any one particular person.
114 D MARCHBANKS: I know. You feel that you could love anybody that offered--
115 A ¶ PROSERPINE (exasperated).
116 A Anybody that offered!
117 A No, I do not.
118 A What do you take me for?

### SCENE pt_candida_6 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MARCHBANKS, PROSERPINE, BURGESS, MORELL
1 A ¶ MARCHBANKS (discouraged).
2 A No use.
3 A You won't make me REAL answers--only those things that everybody says.
4 A (He strays to the sofa and sits down disconsolately.)
5 A ¶ PROSERPINE (nettled at what she takes to be a disparagement of her manners by an aristocrat).
6 A Oh, well, if you want original conversation, you'd better go and talk to yourself.
7 D MARCHBANKS: That is what all poets do: they talk to themselves out loud; and the world overhears them. But it's horribly lonely not to hear someone else talk sometimes.
8 D PROSERPINE: Wait until Mr. Morell comes. HE'LL talk to you. (Marchbanks shudders.) Oh, you needn't make wry faces over him: he can talk better than you. (With temper.) He'd talk your little head off. (She is going back angrily to her place, when, suddenly enlightened, he springs up and stops her.)
9 D MARCHBANKS: Ah, I understand now!
10 A ¶ PROSERPINE (reddening).
11 A What do you understand?
12 D MARCHBANKS: Your secret. Tell me: is it really and truly possible for a woman to love him?
13 A ¶ PROSERPINE (as if this were beyond all bounds).
14 A Well!!
15 A ¶ MARCHBANKS (passionately).
16 A No, answer me.
17 A I want to know: I MUST know.
18 A I can't understand it.
19 A I can see nothing in him but words, pious resolutions, what people call goodness.
20 A You can't love that.
21 A ¶ PROSERPINE (attempting to snub him by an air of cool propriety).
22 A I simply don't know what you're talking about.
23 A I don't understand you.
24 A ¶ MARCHBANKS (vehemently).
25 A You do.
26 A You lie--
27 D PROSERPINE: Oh!
28 D MARCHBANKS: You DO understand; and you KNOW. (Determined to have an answer.) Is it possible for a woman to love him?
29 A ¶ PROSERPINE (looking him straight in the face.)
30 A Yes.
31 A (He covers his face with his hands.)
32 A Whatever is the matter with you!
33 A (He takes down his hands and looks at her.
34 A Frightened at the tragic mask presented to her, she hurries past him at the utmost possible distance, keeping her eyes on his face until he turns from her and goes to the child's chair beside the hearth, where he sits in the deepest dejection.
35 A As she approaches the door, it opens and Burgess enters.
36 A On seeing him, she ejaculates) Praise heaven, here's somebody! (and sits down, reassured, at her table.
37 A She puts a fresh sheet of paper into the typewriter as Burgess crosses to Eugene.)
38 A ¶ BURGESS (bent on taking care of the distinguished visitor).
* 39 A Well: so this is the way they leave you to yourself, Mr. Morchbanks.
* 40 A I've come to keep you company.
41 A (Marchbanks looks up at him in consternation, which is quite lost on him.)
42 A James is receivin' a deppitation in the dinin' room; and Candy is hupstairs educatin' of a young stitcher gurl she's hinterusted in.
43 A She's settin' there learnin' her to read out of the "'Ev'nly Twins."
44 A (Condolingly.)
45 A You must find it lonesome here with no one but the typist to talk to.
46 A (He pulls round the easy chair above fire, and sits down.)
47 A ¶ PROSERPINE (highly incensed).
48 A He'll be all right now that he has the advantage of YOUR polished conversation: that's one comfort, anyhow.
49 A (She begins to typewrite with clattering asperity.)
50 A ¶ BURGESS (amazed at her audacity).
51 A Hi was not addressin' myself to you, young woman, that I'm awerr of.
52 A ¶ PROSERPINE (tartly, to Marchbanks).
53 A Did you ever see worse manners, Mr. Marchbanks?
54 A ¶ BURGESS (with pompous severity).
55 A Mr. Morchbanks is a gentleman and knows his place, which is more than some people do.
56 A ¶ PROSERPINE (fretfully).
57 A It's well you and I are not ladies and gentlemen: I'd talk to you pretty straight if Mr. Marchbanks wasn't here.
58 A (She pulls the letter out of the machine so crossly that it tears.)
59 A There, now I've spoiled this letter--have to be done all over again.
60 A Oh, I can't contain myself--silly old fathead!
61 A ¶ BURGESS (rising, breathless with indignation).
62 A Ho!
63 A I'm a silly ole fathead, am I?
64 A Ho, indeed (gasping).
65 A Hall right, my gurl!
66 A Hall right.
67 A You just wait till I tell that to your employer.
68 A You'll see.
69 A I'll teach you: see if I don't.
70 D PROSERPINE: I--
71 A ¶ BURGESS (cutting her short).
72 A No, you've done it now.
73 A No huse a-talkin' to me.
74 A I'll let you know who I am.
75 A (Proserpine shifts her paper carriage with a defiant bang, and disdainfully goes on with her work.)
76 A Don't you take no notice of her, Mr. Morchbanks.
77 A She's beneath it.
78 A (He sits down again loftily.)
79 A ¶ MARCHBANKS (miserably nervous and disconcerted).
80 A Hadn't we better change the subject.
81 A I--I don't think Miss Garnett meant anything.
82 A ¶ PROSERPINE (with intense conviction).
83 A Oh, didn't I though, just!
84 D BURGESS: I wouldn't demean myself to take notice on her.
* 85 A ¶ (An electric bell rings twice.)
86 A ¶ PROSERPINE (gathering up her note-book and papers).
87 A That's for me.
88 A (She hurries out.)
89 A ¶ BURGESS (calling after her).
90 A Oh, we can spare you.
91 A (Somewhat relieved by the triumph of having the last word, and yet half inclined to try to improve on it, he looks after her for a moment; then subsides into his seat by Eugene, and addresses him very confidentially.)
92 A Now we're alone, Mr. Morchbanks, let me give you a friendly 'int that I wouldn't give to everybody.
93 A 'Ow long 'ave you known my son-in-law James here?
94 D MARCHBANKS: I don't know. I never can remember dates. A few months, perhaps.
95 D BURGESS: Ever notice anything queer about him?
96 D MARCHBANKS: I don't think so.
97 A ¶ BURGESS (impressively).
98 A No more you wouldn't.
99 A That's the danger in it.
100 A Well, he's mad.
101 D MARCHBANKS: Mad!
102 D BURGESS: Mad as a Morch 'are. You take notice on him and you'll see.
103 A ¶ MARCHBANKS (beginning).
104 A But surely that is only because his opinions--
105 A ¶ BURGESS (touching him with his forefinger on his knee, and pressing it as if to hold his attention with it).
106 A That's wot I used tee think, Mr. Morchbanks.
107 A Hi thought long enough that it was honly 'is hopinions; though, mind you, hopinions becomes vurry serious things when people takes to hactin on 'em as 'e does.
108 A But that's not wot I go on.
109 A (He looks round to make sure that they are alone, and bends over to Eugene's ear.)
110 A Wot do you think he says to me this mornin' in this very room?
111 D MARCHBANKS: What?
112 D BURGESS: He sez to me--this is as sure as we're settin' here now--he sez: "I'm a fool," he sez;--"and yore a scounderl"--as cool as possible. Me a scounderl, mind you! And then shook 'ands with me on it, as if it was to my credit! Do you mean to tell me that that man's sane?
113 D MORELL: (outside, calling to Proserpine, holding the door open). Get all their names and addresses, Miss Garnett.
114 A ¶ PROSERPINE (in the distance).
115 A Yes, Mr. Morell.
116 A ¶ (Morell comes in, with the deputation's documents in his hands.)
117 A ¶ BURGESS (aside to Marchbanks).
118 A Yorr he is.
119 A Just you keep your heye on him and see.
120 A (Rising momentously.)
121 A I'm sorry, James, to 'ave to make a complaint to you.
122 A I don't want to do it; but I feel I oughter, as a matter o' right and duty.
123 D MORELL: What's the matter?
124 D BURGESS: Mr. Morchbanks will bear me out: he was a witness. (Very solemnly.) Your young woman so far forgot herself as to call me a silly ole fat 'ead.

### SCENE pt_enemy_0 | INT. ENEMY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ DRAMATIS PERSONAE
2 A ¶ Dr. Thomas Stockmann, Medical Officer of the Municipal Baths.
3 A Mrs. Stockmann, his wife.
4 A Petra (their daughter) a teacher.
5 A Ejlif & Morten (their sons, aged 13 and 10 respectively).
6 A Peter Stockmann (the Doctor's elder brother), Mayor of the Town and Chief Constable, Chairman of the Baths' Committee, etc. Morten Kiil, a tanner (Mrs. Stockmann's adoptive father).
7 A Hovstad, editor of the "People's Messenger."
8 A Billing, sub-editor.
9 A Captain Horster.
10 A Aslaksen, a printer.
11 A ¶ Men of various conditions and occupations, a few women, and a troop of schoolboys—the audience at a public meeting.
12 A ¶ The action takes place in a coastal town in southern Norway,
13 A ¶ AN ENEMY OF THE PEOPLE
* 14 A ¶ (SCENE.—DR. STOCKMANN'S sitting-room.
* 15 A It is evening.
* 16 A The room is plainly but neatly appointed and furnished.
* 17 A In the right-hand wall are two doors; the farther leads out to the hall, the nearer to the doctor's study.
* 18 A In the left-hand wall, opposite the door leading to the hall, is a door leading to the other rooms occupied by the family.
* 19 A In the middle of the same wall stands the stove, and, further forward, a couch with a looking-glass hanging over it and an oval table in front of it.
* 20 A On the table, a lighted lamp, with a lampshade.
* 21 A At the back of the room, an open door leads to the dining-room.
22 A BILLING is seen sitting at the dining table, on which a lamp is burning.
23 A He has a napkin tucked under his chin, and MRS. STOCKMANN is standing by the table handing him a large plate-full of roast beef.
* 24 A The other places at the table are empty, and the table somewhat in disorder, evidently a meal having recently been finished.)
25 A ¶ Mrs. Stockmann.
26 A You see, if you come an hour late, Mr. Billing, you have to put up with cold meat.
27 A ¶ Billing (as he eats).
28 A It is uncommonly good, thank you—remarkably good.
29 A ¶ Mrs. Stockmann.
30 A My husband makes such a point of having his meals punctually, you know.
31 A ¶ Billing.
32 A That doesn't affect me a bit.
33 A Indeed, I almost think I enjoy a meal all the better when I can sit down and eat all by myself, and undisturbed.
34 A ¶ Mrs. Stockmann.
35 A Oh well, as long as you are enjoying it—.
36 A (Turns to the hall door, listening.)
37 A I expect that is Mr. Hovstad coming too.
38 A ¶ Billing.
39 A Very likely.
40 A ¶ (PETER STOCKMANN comes in.
41 A He wears an overcoat and his official hat, and carries a stick.)
42 A ¶ Peter Stockmann.
43 A Good evening, Katherine.
44 A ¶ Mrs. Stockmann (coming forward into the sitting-room).
45 A Ah, good evening—is it you?
46 A How good of you to come up and see us!
47 A ¶ Peter Stockmann.
48 A I happened to be passing, and so—(looks into the dining-room).
49 A But you have company with you, I see.
50 A ¶ Mrs. Stockmann (a little embarrassed).
51 A Oh, no—it was quite by chance he came in.
52 A (Hurriedly.)
53 A Won't you come in and have something, too?
54 A ¶ Peter Stockmann.
55 A I!
56 A No, thank you.
57 A Good gracious—hot meat at night!
58 A Not with my digestion.
59 A ¶ Mrs. Stockmann.
60 A Oh, but just once in a way—
61 A ¶ Peter Stockmann.
62 A No, no, my dear lady; I stick to my tea and bread and butter.
63 A It is much more wholesome in the long run—and a little more economical, too.
64 A ¶ Mrs. Stockmann (smiling).
65 A Now you mustn't think that Thomas and I are spendthrifts.
66 A ¶ Peter Stockmann.
67 A Not you, my dear; I would never think that of you.
68 A (Points to the Doctor's study.)
69 A Is he not at home?
70 A ¶ Mrs. Stockmann.
71 A No, he went out for a little turn after supper—he and the boys.
72 A ¶ Peter Stockmann.
73 A I doubt if that is a wise thing to do.
74 A (Listens.)
75 A I fancy I hear him coming now.
76 A ¶ Mrs. Stockmann.
77 A No, I don't think it is he.
* 78 A (A knock is heard at the door.)
79 A Come in!
80 A (HOVSTAD comes in from the hall.)
81 A Oh, it is you, Mr. Hovstad!
82 A ¶ Hovstad.
83 A Yes, I hope you will forgive me, but I was delayed at the printers.
84 A Good evening, Mr. Mayor.
85 A ¶ Peter Stockmann (bowing a little distantly).
86 A Good evening.
87 A You have come on business, no doubt.
88 A ¶ Hovstad.
89 A Partly.
90 A It's about an article for the paper.
91 A ¶ Peter Stockmann.
92 A So I imagined.
93 A I hear my brother has become a prolific contributor to the "People's Messenger."
94 A ¶ Hovstad.
95 A Yes, he is good enough to write in the "People's Messenger" when he has any home truths to tell.
96 A ¶ Mrs. Stockmann (to HOVSTAD).
97 A But won't you—?
98 A (Points to the dining-room.)
99 A ¶ Peter Stockmann.
100 A Quite so, quite so.
101 A I don't blame him in the least, as a writer, for addressing himself to the quarters where he will find the readiest sympathy.
102 A And, besides that, I personally have no reason to bear any ill will to your paper, Mr. Hovstad.
103 A ¶ Hovstad.
104 A I quite agree with you.
105 A ¶ Peter Stockmann.
106 A Taking one thing with another, there is an excellent spirit of toleration in the town—an admirable municipal spirit.
107 A And it all springs from the fact of our having a great common interest to unite us—an interest that is in an equally high degree the concern of every right-minded citizen.
108 A ¶ Hovstad.
109 A The Baths, yes.
110 A ¶ Peter Stockmann.
111 A Exactly—-our fine, new, handsome Baths.
112 A Mark my words, Mr. Hovstad—the Baths will become the focus of our municipal life!
113 A Not a doubt of it!
114 A ¶ Mrs. Stockmann.
115 A That is just what Thomas says.
116 A ¶ Peter Stockmann.
117 A Think how extraordinarily the place has developed within the last year or two!
118 A Money has been flowing in, and there is some life and some business doing in the town.
119 A Houses and landed property are rising in value every day.
120 A ¶ Hovstad.
121 A And unemployment is diminishing,
122 A ¶ Peter Stockmann.
123 A Yes, that is another thing.
124 A The burden on the poor rates has been lightened, to the great relief of the propertied classes; and that relief will be even greater if only we get a really good summer this year, and lots of visitors—plenty of invalids, who will make the Baths talked about.
125 A ¶ Hovstad.
126 A And there is a good prospect of that, I hear.
127 A ¶ Peter Stockmann.
128 A It looks very promising.
129 A Inquiries about apartments and that sort of thing are reaching us, every day.
130 A ¶ Hovstad.
131 A Well, the doctor's article will come in very suitably.
132 A ¶ Peter Stockmann.
133 A Has he been writing something just lately?
134 A ¶ Hovstad.
135 A This is something he wrote in the winter; a recommendation of the Baths—an account of the excellent sanitary conditions here.
136 A But I held the article over, temporarily.
