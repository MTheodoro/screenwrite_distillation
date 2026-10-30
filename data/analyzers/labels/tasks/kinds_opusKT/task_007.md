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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0007.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_superman_21 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE OLD WOMAN, DON JUAN
* 1 A ¶ Another pallor in the void, this time not violet, but a disagreeable smoky yellow.
* 2 A With it, the whisper of a ghostly clarionet turning this tune into infinite sadness:
* 3 A ¶ (Here there is another musical staff.)
4 A ¶ The yellowish pallor moves: there is an old crone wandering in the void, bent and toothless; draped, as well as one can guess, in the coarse brown frock of some religious order.
5 A She wanders and wanders in her slow hopeless way, much as a wasp flies in its rapid busy way, until she blunders against the thing she seeks: companionship.
6 A With a sob of relief the poor old creature clutches at the presence of the man and addresses him in her dry unlovely voice, which can still express pride and resolution as well as suffering.
7 D THE OLD WOMAN: Excuse me; but I am so lonely; and this place is so awful.
8 D DON JUAN: A new comer?
9 D THE OLD WOMAN: Yes: I suppose I died this morning. I confessed; I had extreme unction; I was in bed with my family about me and my eyes fixed on the cross. Then it grew dark; and when the light came back it was this light by which I walk seeing nothing. I have wandered for hours in horrible loneliness.
10 A ¶ sighing.
11 D DON JUAN: Ah! you have not yet lost the sense of time. One soon does, in eternity.
12 D THE OLD WOMAN: Where are we?
13 D DON JUAN: In hell.
14 A ¶ THE OLD WOMAN [proudly] Hell!
15 A I in hell!
16 A How dare you?
17 A ¶ unimpressed.
18 D DON JUAN: Why not, Senora?
19 D THE OLD WOMAN: You do not know to whom you are speaking. I am a lady, and a faithful daughter of the Church.
20 D DON JUAN: I do not doubt it.
21 D THE OLD WOMAN: But how then can I be in hell? Purgatory, perhaps: I have not been perfect: who has? But hell! oh, you are lying.
22 D DON JUAN: Hell, Senora, I assure you; hell at its best--that is, its most solitary--though perhaps you would prefer company.
23 D THE OLD WOMAN: But I have sincerely repented; I have confessed.
24 D DON JUAN: How much?
25 D THE OLD WOMAN: More sins than I really committed. I loved confession.
26 D DON JUAN: Ah, that is perhaps as bad as confessing too little. At all events, Senora, whether by oversight or intention, you are certainly damned, like myself; and there is nothing for it now but to make the best of it.
27 A ¶ THE OLD WOMAN [indignantly] Oh! and I might have been so much wickeder!
28 A All my good deeds wasted!
29 A It is unjust.
30 D DON JUAN: No: you were fully and clearly warned. For your bad deeds, vicarious atonement, mercy without justice. For your good deeds, justice without mercy. We have many good people here.
31 D THE OLD WOMAN: Were you a good man?
32 D DON JUAN: I was a murderer.
33 D THE OLD WOMAN: A murderer! Oh, how dare they send me to herd with murderers! I was not as bad as that: I was a good woman. There is some mistake: where can I have it set right?
34 D DON JUAN: I do not know whether mistakes can be corrected here. Probably they will not admit a mistake even if they have made one.
35 D THE OLD WOMAN: But whom can I ask?
36 D DON JUAN: I should ask the Devil, Senora: he understands the ways of this place, which is more than I ever could.
37 D THE OLD WOMAN: The Devil! I speak to the Devil!
38 D DON JUAN: In hell, Senora, the Devil is the leader of the best society.
39 D THE OLD WOMAN: I tell you, wretch, I know I am not in hell.
40 D DON JUAN: How do you know?
41 D THE OLD WOMAN: Because I feel no pain.
42 D DON JUAN: Oh, then there is no mistake: you are intentionally damned.
43 D THE OLD WOMAN: Why do you say that?
44 D DON JUAN: Because hell, Senora, is a place for the wicked. The wicked are quite comfortable in it: it was made for them. You tell me you feel no pain. I conclude you are one of those for whom Hell exists.
45 D THE OLD WOMAN: Do you feel no pain?
46 D DON JUAN: I am not one of the wicked, Senora; therefore it bores me, bores me beyond description, beyond belief.
47 D THE OLD WOMAN: Not one of the wicked! You said you were a murderer.
48 D DON JUAN: Only a duel. I ran my sword through an old man who was trying to run his through me.
49 D THE OLD WOMAN: If you were a gentleman, that was not a murder.
50 D DON JUAN: The old man called it murder, because he was, he said, defending his daughter's honor. By this he meant that because I foolishly fell in love with her and told her so, she screamed; and he tried to assassinate me after calling me insulting names.
51 D THE OLD WOMAN: You were like all men. Libertines and murderers all, all, all!
52 D DON JUAN: And yet we meet here, dear lady.

### SCENE pt_superman_28 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): DON JUAN, ANA, THE STATUE, THE DEVIL
1 D DON JUAN: Good.
2 A ¶ saluting Dona Ana.
3 D DON JUAN: Senora: your servant.
4 D ANA: But I am going with you.
5 D DON JUAN: I can find my own way to heaven, Ana; but I cannot find yours
6 A ¶ he vanishes.
7 D ANA: How annoying!
8 A ¶ calling after him.
9 D THE STATUE: Bon voyage, Juan!
10 A ¶ He wafts a final blast of his great rolling chords after him as a parting salute.
* 11 A A faint echo of the first ghostly melody comes back in acknowledgment.
12 D THE STATUE: Ah! there he goes.
13 A ¶ Puffing a long breath out through his lips.
14 D THE STATUE: Whew! How he does talk! They'll never stand it in heaven.
15 A ¶ gloomily.
16 D THE DEVIL: His going is a political defeat. I cannot keep these Life Worshippers: they all go. This is the greatest loss I have had since that Dutch painter went--a fellow who would paint a hag of 70 with as much enjoyment as a Venus of 20.
17 D THE STATUE: I remember: he came to heaven. Rembrandt.
18 D THE DEVIL: Ay, Rembrandt. There a something unnatural about these fellows. Do not listen to their gospel, Senor Commander: it is dangerous. Beware of the pursuit of the Superhuman: it leads to an indiscriminate contempt for the Human. To a man, horses and dogs and cats are mere species, outside the moral world. Well, to the Superman, men and women are a mere species too, also outside the moral world. This Don Juan was kind to women and courteous to men as your daughter here was kind to her pet cats and dogs; but such kindness is a denial of the exclusively human character of the soul.
19 D THE STATUE: And who the deuce is the Superman?
20 D THE DEVIL: Oh, the latest fashion among the Life Force fanatics. Did you not meet in Heaven, among the new arrivals, that German Polish madman--what was his name? Nietzsche?
21 D THE STATUE: Never heard of him.
22 D THE DEVIL: Well, he came here first, before he recovered his wits. I had some hopes of him; but he was a confirmed Life Force worshipper. It was he who raked up the Superman, who is as old as Prometheus; and the 20th century will run after this newest of the old crazes when it gets tired of the world, the flesh, and your humble servant.
23 D THE STATUE: Superman is a good cry; and a good cry is half the battle. I should like to see this Nietzsche.
24 D THE DEVIL: Unfortunately he met Wagner here, and had a quarrel with him.
25 D THE STATUE: Quite right, too. Mozart for me!
26 D THE DEVIL: Oh, it was not about music. Wagner once drifted into Life Force worship, and invented a Superman called Siegfried. But he came to his senses afterwards. So when they met here, Nietzsche denounced him as a renegade; and Wagner wrote a pamphlet to prove that Nietzsche was a Jew; and it ended in Nietzsche's going to heaven in a huff. And a good riddance too. And now, my friend, let us hasten to my palace and celebrate your arrival with a grand musical service.
27 D THE STATUE: With pleasure: you're most kind.
28 D THE DEVIL: This way, Commander. We go down the old trap
29 A ¶ he places himself on the grave trap.
30 D THE STATUE: Good.
31 A ¶ Reflectively.
32 D THE STATUE: All the same, the Superman is a fine conception. There is something statuesque about it.
33 A ¶ He places himself on the grave trap beside The Devil.
* 34 A It begins to descend slowly.
* 35 A Red glow from the abyss.
36 D THE STATUE: Ah, this reminds me of old times.
37 D THE DEVIL: And me also.
38 D ANA: Stop!
* 39 A ¶ The trap stops.
40 D THE DEVIL: You, Senora, cannot come this way. You will have an apotheosis. But you will be at the palace before us.
41 D ANA: That is not what I stopped you for. Tell me where can I find the Superman?
42 D THE DEVIL: He is not yet created, Senora.
43 D THE STATUE: And never will be, probably. Let us proceed: the red fire will make me sneeze.
44 A ¶ They descend.
45 D ANA: Not yet created! Then my work is not yet done.
46 A ¶ Crossing herself devoutly.
47 D ANA: I believe in the Life to Come.
48 A ¶ Crying to the universe.

### SCENE pt_superman_30 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): OCTAVIUS, VIOLET, MENDOZA, RAMSDEN, TANNER, STRAKER, ANN, DUVAL, THE ANARCHIST, THE SULKY SOCIAL-DEMOCRAT, THE ROWDY SOCIAL-DEMOCRAT, MALONE
1 D OCTAVIUS: Why, Violet, I thought you hardly knew one another before this trip, you and Malone!
2 A ¶ vexed.
3 D VIOLET: I suppose this person was the manager.
4 D MENDOZA: The waiter, madam. I have a grateful recollection of you all. I gathered from the bountiful way in which you treated me that you all enjoyed your visits very much.
5 D VIOLET: What impertinence!
6 A ¶ She turns her back on him, and goes up the hill with Hector.
7 D RAMSDEN: That will do, my friend. You do not expect these ladies to treat you as an acquaintance, I suppose, because you have waited on them at table.
8 D MENDOZA: Pardon me: it was you who claimed my acquaintance. The ladies followed your example. However, this display of the unfortunate manners of your class closes the incident. For the future, you will please address me with the respect due to a stranger and fellow traveller.
9 A ¶ He turns haughtily away and resumes his presidential seat.
10 D TANNER: There! I have found one man on my journey capable of reasonable conversation; and you all instinctively insult him. Even the New Man is as bad as any of you. Enry: you have behaved just like a miserable gentleman.
11 D STRAKER: Gentleman! Not me.
12 D RAMSDEN: Really, Tanner, this tone--
13 D ANN: Don't mind him, Granny: you ought to know him by this time
14 A ¶ she takes his arm and coaxes him away to the hill to join Violet and Hector.
15 A Octavius follows her, doglike.
16 A ¶ calling from the hill.
17 D VIOLET: Here are the soldiers. They are getting out of their motors.
18 A ¶ panicstricken.
19 D DUVAL: Oh, nom de Dieu!
20 D THE ANARCHIST: Fools: the State is about to crush you because you spared it at the prompting of the political hangers-on of the bourgeoisie.
21 A ¶ argumentative to the last.
22 D THE SULKY SOCIAL-DEMOCRAT: On the contrary, only by capturing the State machine--
23 D THE ANARCHIST: It is going to capture you.
24 A ¶ his anguish culminating.
25 D THE ROWDY SOCIAL-DEMOCRAT: Ow, chock it. Wot are we ere for? WOT are we wytin for?
26 A ¶ between his teeth.
27 D MENDOZA: Goon. Talk politics, you idiots: nothing sounds more respectable. Keep it up, I tell you.
28 A ¶ The soldiers line the road, commanding the amphitheatre with their rifles.
29 A The brigands, struggling with an over-whelming impulse to hide behind one another, look as unconcerned as they can.
30 A Mendoza rises superbly, with undaunted front.
31 A The officer in command steps down from the road in to the amphitheatre; looks hard at the brigands; and then inquiringly at Tanner.
32 D THE OFFICER: Who are these men, Senor Ingles?
33 D TANNER: My escort.
34 A ¶ Mendoza, with a Mephistophelean smile, bows profoundly.
35 A An irrepressible grin runs from face to face among the brigands.
36 A They touch their hats, except the Anarchist, who defies the State with folded arms.
* 37 A ¶ The garden of a villa in Granada.
* 38 A Whoever wishes to know what it is like must go to Granada and see.
* 39 A One may prosaically specify a group of hills dotted with villas, the Alhambra on the top of one of the hills, and a considerable town in the valley, approached by dusty white roads in which the children, no matter what they are doing or thinking about, automatically whine for halfpence and reach out little clutching brown palms for them; but there is nothing in this description except the Alhambra, the begging, and the color of the roads, that does not fit Surrey as well as Spain.
* 40 A The difference is that the Surrey hills are comparatively small and ugly, and should properly be called the Surrey Protuberances; but these Spanish hills are of mountain stock: the amenity which conceals their size does not compromise their dignity.
* 41 A ¶ This particular garden is on a hill opposite the Alhambra; and the villa is as expensive and pretentious as a villa must be if it is to be let furnished by the week to opulent American and English visitors.
* 42 A If we stand on the lawn at the foot of the garden and look uphill, our horizon is the stone balustrade of a flagged platform on the edge of infinite space at the top of the hill.
* 43 A Between us and this platform is a flower garden with a circular basin and fountain in the centre, surrounded by geometrical flower beds, gravel paths, and clipped yew trees in the genteelest order.
* 44 A The garden is higher than our lawn; so we reach it by a few steps in the middle of its embankment.
* 45 A The platform is higher again than the garden, from which we mount a couple more steps to look over the balustrade at a fine view of the town up the valley and of the hills that stretch away beyond it to where, in the remotest distance, they become mountains.
* 46 A On our left is the villa, accessible by steps from the left hand corner of the garden.
* 47 A Returning from the platform through the garden and down again to the lawn (a movement which leaves the villa behind us on our right) we find evidence of literary interests on the part of the tenants in the fact that there is no tennis net nor set of croquet hoops, but, on our left, a little iron garden table with books on it, mostly yellow-backed, and a chair beside it.
* 48 A A chair on the right has also a couple of open books upon it.
* 49 A There are no newspapers, a circumstance which, with the absence of games, might lead an intelligent spectator to the most far reaching conclusions as to the sort of people who live in the villa.
50 A Such speculations are checked, however, on this delightfully fine afternoon, by the appearance at a little gate in a paling on our left, of Henry Straker in his professional costume.
51 A He opens the gate for an elderly gentleman, and follows him on to the lawn.
52 A ¶ This elderly gentleman defies the Spanish sun in a black frock coat, tall silk bat, trousers in which narrow stripes of dark grey and lilac blend into a highly respectable color, and a black necktie tied into a bow over spotless linen.
53 A Probably therefore a man whose social position needs constant and scrupulous affirmation without regard to climate: one who would dress thus for the middle of the Sahara or the top of Mont Blanc.
54 A And since he has not the stamp of the class which accepts as its life-mission the advertizing and maintenance of first rate tailoring and millinery, he looks vulgar in his finery, though in a working dress of any kind he would look dignified enough.
55 A He is a bullet cheeked man with a red complexion, stubbly hair, smallish eyes, a hard mouth that folds down at the corners, and a dogged chin.
56 A The looseness of skin that comes with age has attacked his throat and the laps of his cheeks; but he is still hard as an apple above the mouth; so that the upper half of his face looks younger than the lower.
57 A He has the self-confidence of one who has made money, and something of the truculence of one who has made it in a brutalizing struggle, his civility having under it a perceptible menace that he has other methods in reserve if necessary.
58 A Withal, a man to be rather pitied when he is not to be feared; for there is something pathetic about him at times, as if the huge commercial machine which has worked him into his frock coat had allowed him very little of his own way and left his affections hungry and baffled.
59 A At the first word that falls from him it is clear that he is an Irishman whose native intonation has clung to him through many changes of place and rank.
60 A One can only guess that the original material of his speech was perhaps the surly Kerry brogue; but the degradation of speech that occurs in London, Glasgow, Dublin and big cities generally has been at work on it so long that nobody but an arrant cockney would dream of calling it a brogue now; for its music is almost gone, though its surliness is still perceptible.
61 A Straker, as a very obvious cockney, inspires him with implacable contempt, as a stupid Englishman who cannot even speak his own language properly.
62 A Straker, on the other hand, regards the old gentleman's accent as a joke thoughtfully provided by Providence expressly for the amusement of the British race, and treats him normally with the indulgence due to an inferior and unlucky species, but occasionally with indignant alarm when the old gentleman shows signs of intending his Irish nonsense to be taken seriously.
63 D STRAKER: I'll go tell the young lady. She said you'd prefer to stay here
64 A ¶ he turns to go up through the garden to the villa.
65 A ¶ who has been looking round him with lively curiosity.
66 D MALONE: The young lady? That's Miss Violet, eh?
67 A ¶ stopping on the steps with sudden suspicion.
68 D STRAKER: Well, you know, don't you?
69 D MALONE: Do I?
70 A ¶ his temper rising.
71 D STRAKER: Well, do you or don't you?
72 D MALONE: What business is that of yours?
73 A ¶ Straker, now highly indignant, comes back from the steps and confronts the visitor.
74 D STRAKER: I'll tell you what business it is of mine. Miss Robinson--

### SCENE pt_woman_0 | INT. WOMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): SIR JOHN PONTEFRACT, KELVIL, ARCHDEACON DAUBENY, GERALD ARBUTHNOT, FARQUHAR, FRANCIS, LADY HUNSTANTON, LADY CAROLINE PONTEFRACT, MISS HESTER WORSLEY, ALICE
* 1 A ¶ TIME: The Present .
* 2 A ¶ PLACE: The Shires .
* 3 A ¶ The action of the play takes place within twenty-four hours .
* 4 A ¶ LONDON: HAYMARKET THEATRE
* 5 A ¶ Lessee and Manager : Mr. H Beerbohm Tree April 19 th , 1893
6 A ¶ LORD ILLINGWORTH Mr. Tree .
7 A SIR JOHN PONTEFRACT Mr. E. Holman Clark .
8 A LORD ALFRED RUFFORD Mr. Ernest Lawford .
9 A MR. KELVIL, M.P. Mr. Charles Allan .
10 A THE VEN.
11 A ARCHDEACON DAUBENY, D.D. Mr. Kemble .
12 A GERALD ARBUTHNOT Mr. Terry .
13 A FARQUHAR ( Butler ) Mr. Hay .
14 A FRANCIS ( Footman ) Mr. Montague .
15 A LADY HUNSTANTON Miss Rose Leclercq .
16 A LADY CAROLINE PONTEFRACT Miss Le Thière .
17 A LADY STUTFIELD Miss Blanche Horlock .
18 A MRS. ALLONBY Mrs. Tree .
19 A MISS HESTER WORSLEY Miss Julia Neilson .
20 A ALICE ( Maid ) Miss Kelly .
21 A MRS. ARBUTHNOT Mrs. Bernard-Beere .
* 22 A ¶ Lawn in front of the terrace at Hunstanton .
23 A ¶ SIR JOHN and LADY CAROLINE PONTEFRACT, MISS WORSLEY, on chairs under large yew tree .
24 D LADY CAROLINE: I believe this is the first English country house you have stayed at, Miss Worsley?
25 D HESTER: Yes, Lady Caroline.
26 D LADY CAROLINE: You have no country houses, I am told, in America?
27 D HESTER: We have not many.
28 D LADY CAROLINE: Have you any country? What we should call country?
29 A ¶ Smiling .
30 D HESTER: We have the largest country in the world, Lady Caroline. They used to tell us at school that some of our states are as big as France and England put together.
31 D LADY CAROLINE: Ah! you must find it very draughty, I should fancy.
32 A ¶ To SIR JOHN.
33 D LADY CAROLINE: John, you should have your muffler. What is the use of my always knitting mufflers for you if you won’t wear them?
34 D SIR JOHN: I am quite warm, Caroline, I assure you.
35 D LADY CAROLINE: I think not, John. Well, you couldn’t come to a more charming place than this, Miss Worsley, though the house is excessively damp, quite unpardonably damp, and dear Lady Hunstanton is sometimes a little lax about the people she asks down here.
36 A ¶ To SIR JOHN.
37 D LADY CAROLINE: Jane mixes too much. Lord Illingworth, of course, is a man of high distinction. It is a privilege to meet him. And that member of Parliament, Mr. Kettle—
38 D SIR JOHN: Kelvil, my love, Kelvil.
39 D LADY CAROLINE: He must be quite respectable. One has never heard his name before in the whole course of one’s life, which speaks volumes for a man, nowadays. But Mrs. Allonby is hardly a very suitable person.
40 D HESTER: I dislike Mrs. Allonby. I dislike her more than I can say.
41 D LADY CAROLINE: I am not sure, Miss Worsley, that foreigners like yourself should cultivate likes or dislikes about the people they are invited to meet. Mrs. Allonby is very well born. She is a niece of Lord Brancaster’s. It is said, of course, that she ran away twice before she was married. But you know how unfair people often are. I myself don’t believe she ran away more than once.
42 D HESTER: Mr. Arbuthnot is very charming.
43 D LADY CAROLINE: Ah, yes! the young man who has a post in a bank. Lady Hunstanton is most kind in asking him here, and Lord Illingworth seems to have taken quite a fancy to him. I am not sure, however, that Jane is right in taking him out of his position. In my young days, Miss Worsley, one never met any one in society who worked for their living. It was not considered the thing.
44 D HESTER: In America those are the people we respect most.
45 D LADY CAROLINE: I have no doubt of it.
46 D HESTER: Mr. Arbuthnot has a beautiful nature! He is so simple, so sincere. He has one of the most beautiful natures I have ever come across. It is a privilege to meet him .
47 D LADY CAROLINE: It is not customary in England, Miss Worsley, for a young lady to speak with such enthusiasm of any person of the opposite sex. English women conceal their feelings till after they are married. They show them then.
48 D HESTER: Do you, in England, allow no friendship to exist between a young man and a young girl?
49 A ¶ Enter LADY HUNSTANTON, followed by Footman with shawls and a cushion .
50 D LADY CAROLINE: We think it very inadvisable. Jane, I was just saying what a pleasant party you have asked us to meet. You have a wonderful power of selection. It is quite a gift.
51 D LADY HUNSTANTON: Dear Caroline, how kind of you! I think we all do fit in very nicely together. And I hope our charming American visitor will carry back pleasant recollections of our English country life.
52 A ¶ To Footman .
53 D LADY HUNSTANTON: The cushion, there, Francis. And my shawl. The Shetland. Get the Shetland.
54 A ¶ Exit Footman for shawl .
55 A ¶ Enter GERALD ARBUTHNOT.
56 D GERALD: Lady Hunstanton, I have such good news to tell you. Lord Illingworth has just offered to make me his secretary.
57 D LADY HUNSTANTON: His secretary? That is good news indeed, Gerald. It means a very brilliant future in store for you. Your dear mother will be delighted. I really must try and induce her to come up here to-night. Do you think she would, Gerald? I know how difficult it is to get her to go anywhere.
58 D GERALD: Oh! I am sure she would, Lady Hunstanton, if she knew Lord Illingworth had made me such an offer.
59 A ¶ Enter Footman with shawl .
60 D LADY HUNSTANTON: I will write and tell her about it, and ask her to come up and meet him.

### SCENE pt_woman_1 | INT. WOMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LADY HUNSTANTON, LADY CAROLINE, GERALD, HESTER, SIR JOHN, ALLONBY, LADY STUTFIELD
1 A ¶ To Footman .
2 D LADY HUNSTANTON: Just wait, Francis.
3 A ¶ Writes letter .
4 D LADY CAROLINE: That is a very wonderful opening for so young a man as you are, Mr. Arbuthnot.
5 D GERALD: It is indeed, Lady Caroline. I trust I shall be able to show myself worthy of it.
6 D LADY CAROLINE: I trust so.
7 A ¶ To HESTER.
8 D GERALD: You have not congratulated me yet, Miss Worsley.
9 D HESTER: Are you very pleased about it?
10 D GERALD: Of course I am. It means everything to me—things that were out of the reach of hope before may be within hope’s reach now.
11 D HESTER: Nothing should be out of the reach of hope. Life is a hope.
12 D LADY HUNSTANTON: I fancy, Caroline, that Diplomacy is what Lord Illingworth is aiming at. I heard that he was offered Vienna. But that may not be true.
13 D LADY CAROLINE: I don’t think that England should be represented abroad by an unmarried man, Jane. It might lead to complications.
14 D LADY HUNSTANTON: You are too nervous, Caroline. Believe me, you are too nervous. Besides, Lord Illingworth may marry any day. I was in hopes he would have married Lady Kelso. But I believe he said her family was too large. Or was it her feet? I forget which. I regret it very much. She was made to be an ambassador’s wife.
15 D LADY CAROLINE: She certainly has a wonderful faculty of remembering people’s names, and forgetting their faces.
16 D LADY HUNSTANTON: Well, that is very natural, Caroline, is it not?
17 A ¶ To Footman .
18 D LADY HUNSTANTON: Tell Henry to wait for an answer. I have written a line to your dear mother, Gerald, to tell her your good news, and to say she really must come to dinner.
19 A ¶ Exit Footman .
20 D GERALD: That is awfully kind of you, Lady Hunstanton.
21 A ¶ To HESTER.
22 D GERALD: Will you come for a stroll, Miss Worsley?
23 D HESTER: With pleasure.
24 A ¶ Exit with GERALD.
25 D LADY HUNSTANTON: I am very much gratified at Gerald Arbuthnot’s good fortune. He is quite a protégé of mine. And I am particularly pleased that Lord Illingworth should have made the offer of his own accord without my suggesting anything. Nobody likes to be asked favours. I remember poor Charlotte Pagden making herself quite unpopular one season, because she had a French governess she wanted to recommend to every one.
26 D LADY CAROLINE: I saw the governess, Jane. Lady Pagden sent her to me. It was before Eleanor came out. She was far too good-looking to be in any respectable household. I don’t wonder Lady Pagden was so anxious to get rid of her.
27 D LADY HUNSTANTON: Ah, that explains it.
28 D LADY CAROLINE: John, the grass is too damp for you. You had better go and put on your overshoes at once.
29 D SIR JOHN: I am quite comfortable, Caroline, I assure you.
30 D LADY CAROLINE: You must allow me to be the best judge of that, John. Pray do as I tell you.
31 A ¶ SIR JOHN gets up and goes off .
32 D LADY HUNSTANTON: You spoil him, Caroline, you do indeed!
33 A ¶ Enter MRS. ALLONBY and LADY STUTFIELD.
34 A ¶ [ To MRS. ALLONBY.] Well, dear, I hope you like the park.
* 35 A It is said to be well timbered.
36 D MRS. ALLONBY: The trees are wonderful, Lady Hunstanton.
37 D LADY STUTFIELD: Quite, quite wonderful.
38 D MRS. ALLONBY: But somehow, I feel sure that if I lived in the country for six months, I should become so unsophisticated that no one would take the slightest notice of me.
39 D LADY HUNSTANTON: I assure you, dear, that the country has not that effect at all. Why, it was from Melthorpe, which is only two miles from here, that Lady Belton eloped with Lord Fethersdale. I remember the occurrence perfectly. Poor Lord Belton died three days afterwards of joy, or gout. I forget which. We had a large party staying here at the time, so we were all very much interested in the whole affair.
40 D MRS. ALLONBY: I think to elope is cowardly. It’s running away from danger. And danger has become so rare in modern life.
41 D LADY CAROLINE: As far as I can make out, the young women of the present day seem to make it the sole object of their lives to be always playing with fire.
42 D MRS. ALLONBY: The one advantage of playing with fire, Lady Caroline, is that one never gets even singed. It is the people who don’t know how to play with it who get burned up.
43 D LADY STUTFIELD: Yes; I see that. It is very, very helpful.
44 D LADY HUNSTANTON: I don’t know how the world would get on with such a theory as that, dear Mrs. Allonby.
45 D LADY STUTFIELD: Ah! The world was made for men and not for women.
46 D MRS. ALLONBY: Oh, don’t say that, Lady Stutfield. We have a much better time than they have. There are far more things forbidden to us than are forbidden to them.

### SCENE pt_woman_12 | INT. WOMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS. ARBUTHNOT, MRS. ALLONBY, LORD ILLINGWORTH, GERALD, LADY HUNSTANTON, THE ARCHDEACON, LADY CAROLINE
1 D MRS. ARBUTHNOT: You must remember, as you said yourself, you have had so few advantages.
2 D MRS. ALLONBY: Lord Illingworth, I want to speak to you for a moment. Do come over.
3 D LORD ILLINGWORTH: Will you excuse me, Mrs. Arbuthnot? Now, don’t let your charming mother make any more difficulties, Gerald. The thing is quite settled, isn’t it?
4 D GERALD: I hope so.
5 A ¶ LORD ILLINGWORTH goes across to MRS. ARBUTHNOT.
6 D MRS. ALLONBY: I thought you were never going to leave the lady in black velvet.
7 D LORD ILLINGWORTH: She is excessively handsome.
8 A ¶ Looks at MRS. ARBUTHNOT.
9 D LADY HUNSTANTON: Caroline, shall we all make a move to the music-room? Miss Worsley is going to play. You’ll come too, dear Mrs. Arbuthnot, won’t you? You don’t know what a treat is in store for you.
10 A ¶ To Doctor Daubeny.
11 D LADY HUNSTANTON: I must really take Miss Worsley down some afternoon to the rectory. I should so much like dear Mrs. Daubeny to hear her on the violin. Ah, I forgot. Dear Mrs. Daubeny’s hearing is a little defective, is it not?
12 D THE ARCHDEACON: Her deafness is a great privation to her. She can’t even hear my sermons now. She reads them at home. But she has many resources in herself, many resources.
13 D LADY HUNSTANTON: She reads a good deal, I suppose?
14 D THE ARCHDEACON: Just the very largest print. The eyesight is rapidly going. But she’s never morbid, never morbid.
15 A ¶ To LORD ILLINGWORTH.
16 D GERALD: Do speak to my mother, Lord Illingworth, before you go into the music-room. She seems to think, somehow, you don’t mean what you said to me.
17 D MRS. ALLONBY: Aren’t you coming?
18 D LORD ILLINGWORTH: In a few moments. Lady Hunstanton, if Mrs. Arbuthnot would allow me, I would like to say a few words to her, and we will join you later on.
19 D LADY HUNSTANTON: Ah, of course. You will have a great deal to say to her, and she will have a great deal to thank you for. It is not every son who gets such an offer, Mrs. Arbuthnot. But I know you appreciate that, dear.
20 D LADY CAROLINE: John!
21 D LADY HUNSTANTON: Now, don’t keep Mrs. Arbuthnot too long, Lord Illingworth. We can’t spare her.
22 A ¶ Exit following the other guests .
* 23 A Sound of violin heard from music-room .
24 D LORD ILLINGWORTH: So that is our son, Rachel! Well, I am very proud of him. He is a Harford, every inch of him. By the way, why Arbuthnot, Rachel?
25 D MRS. ARBUTHNOT: One name is as good as another, when one has no right to any name.
26 D LORD ILLINGWORTH: I suppose so—but why Gerald?
27 D MRS. ARBUTHNOT: After a man whose heart I broke—after my father.
28 D LORD ILLINGWORTH: Well, Rachel, what is over is over. All I have got to say now in that I am very, very much pleased with our boy. The world will know him merely as my private secretary, but to me he will be something very near, and very dear. It is a curious thing, Rachel; my life seemed to be quite complete. It was not so. It lacked something, it lacked a son. I have found my son now, I am glad I have found him.
29 D MRS. ARBUTHNOT: You have no right to claim him, or the smallest part of him. The boy is entirely mine, and shall remain mine.
30 D LORD ILLINGWORTH: My dear Rachel, you have had him to yourself for over twenty years. Why not let me have him for a little now? He is quite as much mine as yours.
31 D MRS. ARBUTHNOT: Are you talking of the child you abandoned? Of the child who, as far as you are concerned, might have died of hunger and of want?
32 D LORD ILLINGWORTH: You forget, Rachel, it was you who left me. It was not I who left you.
33 D MRS. ARBUTHNOT: I left you because you refused to give the child a name. Before my son was born, I implored you to marry me.
34 D LORD ILLINGWORTH: I had no expectations then. And besides, Rachel, I wasn’t much older than you were. I was only twenty-two. I was twenty-one, I believe, when the whole thing began in your father’s garden.
35 D MRS. ARBUTHNOT: When a man is old enough to do wrong he should be old enough to do right also.
36 D LORD ILLINGWORTH: My dear Rachel, intellectual generalities are always interesting, but generalities in morals mean absolutely nothing. As for saying I left our child to starve, that, of course, is untrue and silly. My mother offered you six hundred a year. But you wouldn’t take anything. You simply disappeared, and carried the child away with you.
37 D MRS. ARBUTHNOT: I wouldn’t have accepted a penny from her. Your father was different. He told you, in my presence, when we were in Paris, that it was your duty to marry me.
38 D LORD ILLINGWORTH: Oh, duty is what one expects from others, it is not what one does oneself. Of course, I was influenced by my mother. Every man is when he is young.
39 D MRS. ARBUTHNOT: I am glad to hear you say so. Gerald shall certainly not go away with you.
40 D LORD ILLINGWORTH: What nonsense, Rachel!
41 D MRS. ARBUTHNOT: Do you think I would allow my son—
42 D LORD ILLINGWORTH: Our son.
43 D MRS. ARBUTHNOT: My son
44 A ¶ LORD ILLINGWORTH shrugs his shoulders.
45 D MRS. ARBUTHNOT: —to go away with the man who spoiled my youth, who ruined my life, who has tainted every moment of my days? You don’t realise what my past has been in suffering and in shame.
46 D LORD ILLINGWORTH: My dear Rachel, I must candidly say that I think Gerald’s future considerably more important than your past.

### SCENE pt_woman_13 | INT. WOMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS. ARBUTHNOT, LORD ILLINGWORTH, GERALD
1 D MRS. ARBUTHNOT: Gerald cannot separate his future from my past.
2 D LORD ILLINGWORTH: That is exactly what he should do. That is exactly what you should help him to do. What a typical woman you are! You talk sentimentally, and you are thoroughly selfish the whole time. But don’t let us have a scene. Rachel, I want you to look at this matter from the common-sense point of view, from the point of view of what is best for our son, leaving you and me out of the question. What is our son at present? An underpaid clerk in a small Provincial Bank in a third-rate English town. If you imagine he is quite happy in such a position, you are mistaken. He is thoroughly discontented.
3 D MRS. ARBUTHNOT: He was not discontented till he met you. You have made him so.
4 D LORD ILLINGWORTH: Of course, I made him so. Discontent is the first step in the progress of a man or a nation. But I did not leave him with a mere longing for things he could not get. No, I made him a charming offer. He jumped at it, I need hardly say. Any young man would. And now, simply because it turns out that I am the boy’s own father and he my own son, you propose practically to ruin his career. That is to say, if I were a perfect stranger, you would allow Gerald to go away with me, but as he is my own flesh and blood you won’t. How utterly illogical you are!
5 D MRS. ARBUTHNOT: I will not allow him to go.
6 D LORD ILLINGWORTH: How can you prevent it? What excuse can you give to him for making him decline such an offer as mine? I won’t tell him in what relations I stand to him, I need hardly say. But you daren’t tell him. You know that. Look how you have brought him up.
7 D MRS. ARBUTHNOT: I have brought him up to be a good man.
8 D LORD ILLINGWORTH: Quite so. And what is the result? You have educated him to be your judge if he ever finds you out. And a bitter, an unjust judge he will be to you. Don’t be deceived, Rachel. Children begin by loving their parents. After a time they judge them. Rarely, if ever, do they forgive them.
9 D MRS. ARBUTHNOT: George, don’t take my son away from me. I have had twenty years of sorrow, and I have only had one thing to love me, only one thing to love. You have had a life of joy, and pleasure, and success. You have been quite happy, you have never thought of us. There was no reason, according to your views of life, why you should have remembered us at all. Your meeting us was a mere accident, a horrible accident. Forget it. Don’t come now, and rob me of . . . of all I have in the whole world. You are so rich in other things. Leave me the little vineyard of my life; leave me the walled-in garden and the well of water; the ewe-lamb God sent me, in pity or in wrath, oh! leave me that. George, don’t take Gerald from me.
10 D LORD ILLINGWORTH: Rachel, at the present moment you are not necessary to Gerald’s career; I am. There is nothing more to be said on the subject.
11 D MRS. ARBUTHNOT: I will not let him go.
12 D LORD ILLINGWORTH: Here is Gerald. He has a right to decide for himself.
13 A ¶ Enter GERALD.
14 D GERALD: Well, dear mother, I hope you have settled it all with Lord Illingworth?
15 D MRS. ARBUTHNOT: I have not, Gerald.
16 D LORD ILLINGWORTH: Your mother seems not to like your coming with me, for some reason.
17 D GERALD: Why, mother?
18 D MRS. ARBUTHNOT: I thought you were quite happy here with me, Gerald. I didn’t know you were so anxious to leave me.
19 D GERALD: Mother, how can you talk like that? Of course I have been quite happy with you. But a man can’t stay always with his mother. No chap does. I want to make myself a position, to do something. I thought you would have been proud to see me Lord Illingworth’s secretary.
20 D MRS. ARBUTHNOT: I do not think you would be suitable as a private secretary to Lord Illingworth. You have no qualifications.
21 D LORD ILLINGWORTH: I don’t wish to seem to interfere for a moment, Mrs. Arbuthnot, but as far as your last objection is concerned, I surely am the best judge. And I can only tell you that your son has all the qualifications I had hoped for. He has more, in fact, than I had even thought of. Far more.
22 A ¶ MRS. ARBUTHNOT remains silent .
23 D LORD ILLINGWORTH: Have you any other reason, Mrs. Arbuthnot, why you don’t wish your son to accept this post?
24 D GERALD: Have you, mother? Do answer.
25 D LORD ILLINGWORTH: If you have, Mrs. Arbuthnot, pray, pray say it. We are quite by ourselves here. Whatever it is, I need not say I will not repeat it.
26 D GERALD: Mother?
27 D LORD ILLINGWORTH: If you would like to be alone with your son, I will leave you. You may have some other reason you don’t wish me to hear.
28 D MRS. ARBUTHNOT: I have no other reason.
29 D LORD ILLINGWORTH: Then, my dear boy, we may look on the thing as settled. Come, you and I will smoke a cigarette on the terrace together. And Mrs. Arbuthnot, pray let me tell you, that I think you have acted very, very wisely.
30 A ¶ Exit with GERALD.
31 A MRS. ARBUTHNOT is left alone .
32 A She stands immobile with a look of unutterable sorrow on her face .
* 33 A ¶ The Picture Gallery at Hunstanton .
* 34 A Door at back leading on to terrace .
35 A ¶ LORD ILLINGWORTH and GERALD, R.C. LORD ILLINGWORTH lolling on a sofa .
36 A GERALD in a chair .
37 D LORD ILLINGWORTH: Thoroughly sensible woman, your mother, Gerald. I knew she would come round in the end.
38 D GERALD: My mother is awfully conscientious, Lord Illingworth, and I know she doesn’t think I am educated enough to be your secretary. She is perfectly right, too. I was fearfully idle when I was at school, and I couldn’t pass an examination now to save my life.
39 D LORD ILLINGWORTH: My dear Gerald, examinations are of no value whatsoever. If a man is a gentleman, he knows quite enough, and if he is not a gentleman, whatever he knows is bad for him.
40 D GERALD: But I am so ignorant of the world, Lord Illingworth.
41 D LORD ILLINGWORTH: Don’t be afraid, Gerald. Remember that you’ve got on your side the most wonderful thing in the world—youth! There is nothing like youth. The middle-aged are mortgaged to Life. The old are in life’s lumber-room. But youth is the Lord of Life. Youth has a kingdom waiting for it. Every one is born a king, and most people die in exile, like most kings. To win back my youth, Gerald, there is nothing I wouldn’t do—except take exercise, get up early, or be a useful member of the community.
42 D GERALD: But you don’t call yourself old, Lord Illingworth?
43 D LORD ILLINGWORTH: I am old enough to be your father, Gerald.
44 D GERALD: I don’t remember my father; he died years ago.
45 D LORD ILLINGWORTH: So Lady Hunstanton told me.
46 D GERALD: It is very curious, my mother never talks to me about my father. I sometimes think she must have married beneath her.
47 A ¶ Winces slightly .
48 D LORD ILLINGWORTH: Really?
49 A ¶ Goes over and puts his hand on GERALD’S shoulder .

### SCENE pt_woman_18 | INT. WOMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): GERALD, LADY CAROLINE, MRS. ARBUTHNOT, HESTER
1 D GERALD: No, Lady Caroline, he is not on the terrace.
2 D LADY CAROLINE: It is very curious. It is time for him to retire.
3 A ¶ Exit LADY CAROLINE.
4 D GERALD: Dear mother, I am afraid I kept you waiting. I forgot all about it. I am so happy to-night, mother; I have never been so happy.
5 D MRS. ARBUTHNOT: At the prospect of going away?
6 D GERALD: Don’t put it like that, mother. Of course I am sorry to leave you. Why, you are the best mother in the whole world. But after all, as Lord Illingworth says, it is impossible to live in such a place as Wrockley. You don’t mind it. But I’m ambitious; I want something more than that. I want to have a career. I want to do something that will make you proud of me, and Lord Illingworth is going to help me. He is going to do everything for me.
7 D MRS. ARBUTHNOT: Gerald, don’t go away with Lord Illingworth. I implore you not to. Gerald, I beg you!
8 D GERALD: Mother, how changeable you are! You don’t seem to know your own mind for a single moment. An hour and a half ago in the Drawing-room you agreed to the whole thing; now you turn round and make objections, and try to force me to give up my one chance in life. Yes, my one chance. You don’t suppose that men like Lord Illingworth are to be found every day, do you, mother? It is very strange that when I have had such a wonderful piece of good luck, the one person to put difficulties in my way should be my own mother. Besides, you know, mother, I love Hester Worsley. Who could help loving her? I love her more than I have ever told you, far more. And if I had a position, if I had prospects, I could—I could ask her to—Don’t you understand now, mother, what it means to me to be Lord Illingworth’s secretary? To start like that is to find a career ready for one—before one—waiting for one. If I were Lord Illingworth’s secretary I could ask Hester to be my wife. As a wretched bank clerk with a hundred a year it would be an impertinence.
9 D MRS. ARBUTHNOT: I fear you need have no hopes of Miss Worsley. I know her views on life. She has just told them to me.
10 A ¶ A pause .
11 D GERALD: Then I have my ambition left, at any rate. That is something—I am glad I have that! You have always tried to crush my ambition, mother—haven’t you? You have told me that the world is a wicked place, that success is not worth having, that society is shallow, and all that sort of thing—well, I don’t believe it, mother. I think the world must be delightful. I think society must be exquisite. I think success is a thing worth having. You have been wrong in all that you taught me, mother, quite wrong. Lord Illingworth is a successful man. He is a fashionable man. He is a man who lives in the world and for it. Well, I would give anything to be just like Lord Illingworth.
12 D MRS. ARBUTHNOT: I would sooner see you dead.
13 D GERALD: Mother, what is your objection to Lord Illingworth? Tell me—tell me right out. What is it?
14 D MRS. ARBUTHNOT: He is a bad man.
15 D GERALD: In what way bad? I don’t understand what you mean.
16 D MRS. ARBUTHNOT: I will tell you.
17 D GERALD: I suppose you think him bad, because he doesn’t believe the same things as you do. Well, men are different from women, mother. It is natural that they should have different views.
18 D MRS. ARBUTHNOT: It is not what Lord Illingworth believes, or what he does not believe, that makes him bad. It is what he is.
19 D GERALD: Mother, is it something you know of him? Something you actually know?
20 D MRS. ARBUTHNOT: It is something I know.
21 D GERALD: Something you are quite sure of?
22 D MRS. ARBUTHNOT: Quite sure of.
23 D GERALD: How long have you known it?
24 D MRS. ARBUTHNOT: For twenty years.
25 D GERALD: Is it fair to go back twenty years in any man’s career? And what have you or I to do with Lord Illingworth’s early life? What business is it of ours?
26 D MRS. ARBUTHNOT: What this man has been, he is now, and will be always.
27 D GERALD: Mother, tell me what Lord Illingworth did? If he did anything shameful, I will not go away with him. Surely you know me well enough for that?
28 D MRS. ARBUTHNOT: Gerald, come near to me. Quite close to me, as you used to do when you were a little boy, when you were mother’s own boy.
29 A ¶ GERALD sits down beside his mother .
30 A She runs her fingers through his hair , and strokes his hands .
31 D MRS. ARBUTHNOT: Gerald, there was a girl once, she was very young, she was little over eighteen at the time. George Harford—that was Lord Illingworth’s name then—George Harford met her. She knew nothing about life. He—knew everything. He made this girl love him. He made her love him so much that she left her father’s house with him one morning. She loved him so much, and he had promised to marry her! He had solemnly promised to marry her, and she had believed him. She was very young, and—and ignorant of what life really is. But he put the marriage off from week to week, and month to month.—She trusted in him all the while. She loved him.—Before her child was born—for she had a child—she implored him for the child’s sake to marry her, that the child might have a name, that her sin might not be visited on the child, who was innocent. He refused. After the child was born she left him, taking the child away, and her life was ruined, and her soul ruined, and all that was sweet, and good, and pure in her ruined also. She suffered terribly—she suffers now. She will always suffer. For her there is no joy, no peace, no atonement. She is a woman who drags a chain like a guilty thing. She is a woman who wears a mask, like a thing that is a leper. The fire cannot purify her. The waters cannot quench her anguish. Nothing can heal her! no anodyne can give her sleep! no poppies forgetfulness! She is lost! She is a lost soul!—That is why I call Lord Illingworth a bad man. That is why I don’t want my boy to be with him.
32 D GERALD: My dear mother, it all sounds very tragic, of course. But I dare say the girl was just as much to blame as Lord Illingworth was.—After all, would a really nice girl, a girl with any nice feelings at all, go away from her home with a man to whom she was not married, and live with him as his wife? No nice girl would.
33 A ¶ After a pause .
34 D MRS. ARBUTHNOT: Gerald, I withdraw all my objections. You are at liberty to go away with Lord Illingworth, when and where you choose.
35 D GERALD: Dear mother, I knew you wouldn’t stand in my way. You are the best woman God ever made. And, as for Lord Illingworth, I don’t believe he is capable of anything infamous or base. I can’t believe it of him—I can’t.
* 36 A ¶ Outside .
37 D HESTER: Let me go! Let me go!
38 A ¶ Enter HESTER in terror , and rushes over to GERALD and flings herself in his arms .
39 D HESTER: Oh! save me—save me from him!
40 D GERALD: From whom?
41 D HESTER: He has insulted me! Horribly insulted me! Save me!
42 D GERALD: Who? Who has dared—?
43 A ¶ LORD ILLINGWORTH enters at back of stage .
44 A HESTER breaks from GERALD’S arms and points to him .
45 A ¶ GERALD [ He is quite beside himself with rage and indignation .] Lord Illingworth, you have insulted the purest thing on God’s earth, a thing as pure as my own mother.
46 A You have insulted the woman I love most in the world with my own mother.
47 A As there is a God in Heaven, I will kill you!
48 A ¶ Rushing across and catching hold of him.
49 D MRS. ARBUTHNOT: No! no!

### SCENE pt_woman_19 | INT. WOMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): GERALD ARBUTHNOT, MRS. ARBUTHNOT, ALICE R.C, LADY HUNSTANTON, ALLONBY
1 A ¶ Thrusting her back .
2 D GERALD: Don’t hold me, mother. Don’t hold me—I’ll kill him!
3 D MRS. ARBUTHNOT: Gerald!
4 D GERALD: Let me go, I say!
5 D MRS. ARBUTHNOT: Stop, Gerald, stop! He is your own father!
6 A ¶ GERALD clutches his mother’s hands and looks into her face .
7 A She sinks slowly on the ground in shame .
8 A HESTER steals towards the door .
9 A LORD ILLINGWORTH frowns and bites his lip .
10 A After a time GERALD raises his mother up , puts his arm round her , and leads her from the room .
* 11 A ¶ FOURTH ACT
* 12 A ¶ Sitting-room at Mrs. Arbuthnot’s .
* 13 A Large open French window at back , looking on to garden .
* 14 A Doors R.C. and L.C.
15 A ¶ GERALD ARBUTHNOT writing at table .
16 A ¶ Enter ALICE R.C. followed by LADY HUNSTANTON and MRS. ALLONBY.
17 D ALICE: Lady Hunstanton and Mrs. Allonby.
18 A ¶ Exit L.C.
19 D LADY HUNSTANTON: Good morning, Gerald.
20 A ¶ Rising .
21 D GERALD: Good morning, Lady Hunstanton. Good morning, Mrs. Allonby.
22 A ¶ Sitting down .
23 D LADY HUNSTANTON: We came to inquire for your dear mother, Gerald. I hope she is better?
24 D GERALD: My mother has not come down yet, Lady Hunstanton.
25 D LADY HUNSTANTON: Ah, I am afraid the heat was too much for her last night. I think there must have been thunder in the air. Or perhaps it was the music. Music makes one feel so romantic—at least it always gets on one’s nerves.
26 D MRS. ALLONBY: It’s the same thing, nowadays.
27 D LADY HUNSTANTON: I am so glad I don’t know what you mean, dear. I am afraid you mean something wrong. Ah, I see you’re examining Mrs. Arbuthnot’s pretty room. Isn’t it nice and old-fashioned?
28 A ¶ Surveying the room through her lorgnette .
29 D MRS. ALLONBY: It looks quite the happy English home.
30 D LADY HUNSTANTON: That’s just the word, dear; that just describes it. One feels your mother’s good influence in everything she has about her, Gerald.
31 D MRS. ALLONBY: Lord Illingworth says that all influence is bad, but that a good influence is the worst in the world.
32 D LADY HUNSTANTON: When Lord Illingworth knows Mrs. Arbuthnot better he will change his mind. I must certainly bring him here.
33 D MRS. ALLONBY: I should like to see Lord Illingworth in a happy English home.
34 D LADY HUNSTANTON: It would do him a great deal of good, dear. Most women in London, nowadays, seem to furnish their rooms with nothing but orchids, foreigners, and French novels. But here we have the room of a sweet saint. Fresh natural flowers, books that don’t shock one, pictures that one can look at without blushing.
35 D MRS. ALLONBY: But I like blushing.
36 D LADY HUNSTANTON: Well, there is a good deal to be said for blushing, if one can do it at the proper moment. Poor dear Hunstanton used to tell me I didn’t blush nearly often enough. But then he was so very particular. He wouldn’t let me know any of his men friends, except those who were over seventy, like poor Lord Ashton: who afterwards, by the way, was brought into the Divorce Court. A most unfortunate case.
37 D MRS. ALLONBY: I delight in men over seventy. They always offer one the devotion of a lifetime. I think seventy an ideal age for a man.
38 D LADY HUNSTANTON: She is quite incorrigible, Gerald, isn’t she? By-the-by, Gerald, I hope your dear mother will come and see me more often now. You and Lord Illingworth start almost immediately, don’t you?
39 D GERALD: I have given up my intention of being Lord Illingworth’s secretary.
40 D LADY HUNSTANTON: Surely not, Gerald! It would be most unwise of you. What reason can you have?
41 D GERALD: I don’t think I should be suitable for the post.
42 D MRS. ALLONBY: I wish Lord Illingworth would ask me to be his secretary. But he says I am not serious enough.
43 D LADY HUNSTANTON: My dear, you really mustn’t talk like that in this house. Mrs. Arbuthnot doesn’t know anything about the wicked society in which we all live. She won’t go into it. She is far too good. I consider it was a great honour her coming to me last night. It gave quite an atmosphere of respectability to the party.
44 D MRS. ALLONBY: Ah, that must have been what you thought was thunder in the air.
45 D LADY HUNSTANTON: My dear, how can you say that? There is no resemblance between the two things at all. But really, Gerald, what do you mean by not being suitable?
46 D GERALD: Lord Illingworth’s views of life and mine are too different.
47 D LADY HUNSTANTON: But, my dear Gerald, at your age you shouldn’t have any views of life. They are quite out of place. You must be guided by others in this matter. Lord Illingworth has made you the most flattering offer, and travelling with him you would see the world—as much of it, at least, as one should look at—under the best auspices possible, and stay with all the right people, which is so important at this solemn moment in your career.
48 D GERALD: I don’t want to see the world: I’ve seen enough of it.
49 D MRS. ALLONBY: I hope you don’t think you have exhausted life, Mr. Arbuthnot. When a man says that, one knows that life has exhausted him.
50 D GERALD: I don’t wish to leave my mother.
51 D LADY HUNSTANTON: Now, Gerald, that is pure laziness on your part. Not leave your mother! If I were your mother I would insist on your going.

### SCENE pt_woman_7 | INT. WOMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS. ALLONBY, LORD ILLINGWORTH, LADY STUTFIELD, LADY HUNSTANTON, LADY CAROLINE
1 D MRS. ALLONBY: I have still the mask.
2 D LORD ILLINGWORTH: It makes your eyes lovelier.
3 D MRS. ALLONBY: Thank you. Come.
4 A ¶ Sees MRS. ARBUTHNOT’S letter on table , and takes it up and looks at envelope .
5 D LORD ILLINGWORTH: What a curious handwriting! It reminds me of the handwriting of a woman I used to know years ago.
6 D MRS. ALLONBY: Who?
7 D LORD ILLINGWORTH: Oh! no one. No one in particular. A woman of no importance.
8 A ¶ Throws letter down , and passes up the steps of the terrace with MRS. ALLONBY.
9 A They smile at each other .
* 10 A ¶ Drawing-room at Hunstanton , after dinner , lamps lit .
* 11 A Door L.C. Door R.C.
12 A ¶ Ladies seated on sofas .
13 D MRS. ALLONBY: What a comfort it is to have got rid of the men for a little!
14 D LADY STUTFIELD: Yes; men persecute us dreadfully, don’t they?
15 D MRS. ALLONBY: Persecute us? I wish they did.
16 D LADY HUNSTANTON: My dear!
17 D MRS. ALLONBY: The annoying thing is that the wretches can be perfectly happy without us. That is why I think it is every woman’s duty never to leave them alone for a single moment, except during this short breathing space after dinner; without which I believe we poor women would be absolutely worn to shadows.
18 A ¶ Enter Servants with coffee .
19 D LADY HUNSTANTON: Worn to shadows, dear?
20 D MRS. ALLONBY: Yes, Lady Hunstanton. It is such a strain keeping men up to the mark. They are always trying to escape from us.
21 D LADY STUTFIELD: It seems to me that it is we who are always trying to escape from them. Men are so very, very heartless. They know their power and use it.
22 A ¶ Takes coffee from Servant .
23 D LADY CAROLINE: What stuff and nonsense all this about men is! The thing to do is to keep men in their proper place.
24 D MRS. ALLONBY: But what is their proper place, Lady Caroline?
25 D LADY CAROLINE: Looking after their wives, Mrs. Allonby.
26 A ¶ Takes coffee from Servant .
27 D MRS. ALLONBY: Really? And if they’re not married?
28 D LADY CAROLINE: If they are not married, they should be looking after a wife. It’s perfectly scandalous the amount of bachelors who are going about society. There should be a law passed to compel them all to marry within twelve months.
29 A ¶ Refuses coffee .
30 D LADY STUTFIELD: But if they’re in love with some one who, perhaps, is tied to another?
31 D LADY CAROLINE: In that case, Lady Stutfield, they should be married off in a week to some plain respectable girl, in order to teach them not to meddle with other people’s property.
32 D MRS. ALLONBY: I don’t think that we should ever be spoken of as other people’s property. All men are married women’s property. That is the only true definition of what married women’s property really is. But we don’t belong to any one.
33 D LADY STUTFIELD: Oh, I am so very, very glad to hear you say so.
34 D LADY HUNSTANTON: But do you really think, dear Caroline, that legislation would improve matters in any way? I am told that, nowadays, all the married men live like bachelors, and all the bachelors like married men.
35 D MRS. ALLONBY: I certainly never know one from the other.
36 D LADY STUTFIELD: Oh, I think one can always know at once whether a man has home claims upon his life or not. I have noticed a very, very sad expression in the eyes of so many married men.
37 D MRS. ALLONBY: Ah, all that I have noticed is that they are horribly tedious when they are good husbands, and abominably conceited when they are not.
38 D LADY HUNSTANTON: Well, I suppose the type of husband has completely changed since my young days, but I’m bound to state that poor dear Hunstanton was the most delightful of creatures, and as good as gold.
39 D MRS. ALLONBY: Ah, my husband is a sort of promissory note; I’m tired of meeting him.
40 D LADY CAROLINE: But you renew him from time to time, don’t you?
41 D MRS. ALLONBY: Oh no, Lady Caroline. I have only had one husband as yet. I suppose you look upon me as quite an amateur.
42 D LADY CAROLINE: With your views on life I wonder you married at all.
43 D MRS. ALLONBY: So do I.
44 D LADY HUNSTANTON: My dear child, I believe you are really very happy in your married life, but that you like to hide your happiness from others.
45 D MRS. ALLONBY: I assure you I was horribly deceived in Ernest.
46 D LADY HUNSTANTON: Oh, I hope not, dear. I knew his mother quite well. She was a Stratton, Caroline, one of Lord Crowland’s daughters.
47 D LADY CAROLINE: Victoria Stratton? I remember her perfectly. A silly fair-haired woman with no chin.

### SCENE s00000 | INT. DRAINED ROLLER RINK - TEMPORARY COUNTY COURTROOM - DAY
Detected names (may be incomplete or contain aliases): ADAEZE OKAFOR, LEV BRANDT, JUDGE HOLLIS TRAN, CLERK
* 1 A ¶ A roller rink.
* 2 A Maple floor, warped by flood.
* 3 A Disco ball still hangs over the bench, wrapped in bubble wrap.
* 4 A ¶ Folding tables.
* 5 A Folding chairs.
* 6 A A flag on a mic stand.
* 7 A ¶ Courthouse is under repair.
* 8 A Justice is here instead.
9 A ¶ ADAEZE OKAFOR (40s, sharp navy suit, sneakers under the table, reading glasses pushed into cropped grey hair) stands at the defense table.
10 A Alone.
* 11 A Her client's chair is empty.
12 A ¶ Across the aisle: LEV BRANDT (50s, heavy, rumpled, a pastry crumb on his tie) shuffles exhibits.
13 A Calm.
14 A Too calm.
15 A ¶ On a raised DJ booth, now a bench: JUDGE HOLLIS TRAN (60s, silver braid over one shoulder, half-moon spectacles, a thermos of tea).
16 A She taps a gavel made from a skate wheel and a dowel.
* 17 A ¶ Rink speakers hiss.
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
* 31 A ¶ A drip.
* 32 A Somewhere.
* 33 A Plink.
* 34 A Plink.
35 A ¶ Everyone listens.
36 D JUDGE TRAN: I have a doctor's note?
37 D ADAEZE: I filed it at seven.
38 D LEV: I never received it.
39 D ADAEZE: I emailed you.
40 D LEV: My inbox says otherwise.
41 D ADAEZE: Your inbox says a lot of things.
42 D JUDGE TRAN: Enough.
* 43 A ¶ Silence.
* 44 A The disco ball turns a quarter inch in a draft.
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
* 66 A ¶ A signature.
* 67 A Her client's.
* 68 A Dated Monday.
69 D ADAEZE [CONT'D]: That is not his hand.
70 D LEV: It is his hand.
71 D ADAEZE: He signs with a loop. This has no loop.
72 D LEV: People change.
73 D ADAEZE: Not in a week.
74 D JUDGE TRAN: Counsel, approach.
75 A ¶ They do.
* 76 A Skates of silence.
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
* 91 A ¶ Beat.
* 92 A The drip: plink.
93 A ¶ Judge Tran lifts the page toward the light.
94 A Tilts it.
95 A Squints.
96 A ¶ Her thumb rubs the signature.
* 97 A Black comes away.
* 98 A Wet.
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
* 112 A ¶ Behind him, the rink doors swing open.
* 113 A Wind.
114 A A clerk in a lanyard stands there, small, pale, holding a felt-tip pen like a dropped weapon.
115 D CLERK [O.S.]: I'm sorry. He said it was routine.
116 A ¶ Nobody moves.
117 D JUDGE TRAN (quiet): Mr. Brandt. Sit down.
118 A ¶ Lev sits.
119 A Slowly.
120 A His chair squeaks on the maple.
121 D ADAEZE: Your Honor, the defense moves for dismissal with prejudice.
122 D JUDGE TRAN: Granted.
* 123 A ¶ The skate-wheel gavel.
* 124 A One tap.
* 125 A Echo, bright against the rafters.
126 A ¶ Adaeze exhales.
127 A Takes off her glasses.
128 A Rubs her eyes.
129 D ADAEZE (to herself): Sneakers. Best decision I made all week.
130 A ¶ Judge Tran pours tea.
* 131 A Steam curls in the cold.
132 D JUDGE TRAN: Court is adjourned. Somebody turn that ball off.
* 133 A ¶ The disco ball stops turning.

### SCENE s00001 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VEGA, WOMAN, STRANGER, INGRID
* 1 A ¶ Glass eyes in jars.
* 2 A A fox half-stuffed on the bench.
* 3 A Rain on a skylight.
4 A ¶ ODALYS VEGA (30s, rain-soaked trench coat, badge on her belt) stands in the doorway.
5 A At the bench, a WOMAN in a leather apron sews a pheasant's wing.
6 A Her back is turned.
7 D ODALYS: Evening. Sorry about the hour.
8 D STRANGER: Kettle's on. Sit.
9 A ¶ Odalys sits on a stool.
10 A Looks at the fox.
* 11 A The fox looks back.
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
* 22 A On the shelf behind her: a small brass key tag.
* 23 A MUSEUM - REAR.
24 D INGRID: Does she take sugar, your guard?
25 A ¶ Odalys stands.
26 A Her hand drifts to her belt.
27 A Ingrid smiles.
28 D ODALYS: Ingrid. Put the needle down.

### SCENE s00002 | INT. DROWNED CATHEDRAL - BEEKEEPERS' LIBRARY - DUSK
Detected names (may be incomplete or contain aliases): TAMSIN HALE, BRAM, PIP, POLLY, SERAPH VANE
* 1 A ¶ Knee-deep green water fills the nave.
* 2 A Shelves of wax-sealed books rise like reefs from it, and bees drift between the pillars in slow gold ribbons.
3 A ¶ TAMSIN HALE (20s, barefoot, hair tied with twine) wades along a shelf, tracing spines with two fingers.
4 A Behind her, old BRAM (70s, white beard stained with honey) skims comb into a bucket.
5 A Beside the font, twin girls PIP and POLLY (10, identical, freckled) float paper boats made of recipe pages.
6 D TAMSIN: This one hums.
7 D BRAM: They all hum. Leave it be.
8 D POLLY: Pip says the roof is thinking again.
9 D PIP: I said it was dreaming.
* 10 A ¶ High above, a pane of old glass lets in the last amber light.
* 11 A The bees rise toward it, then settle.
12 A ¶ A figure pushes through the west door, shaking water from a long coat of feathers: SERAPH VANE (40s, tall, ink on her lips, a lantern with no flame).
13 A She stops, hearing the hum.
14 A Smiles faintly.
15 D SERAPH: Is the keeper in?
16 D BRAM: The keeper is always in. He's just slow.
17 A ¶ Tamsin slides the humming book back into its place.
* 18 A The bees go quiet.

### SCENE s00003 | INT. SALT MINE CURLING HALL - NIGHT
Detected names (may be incomplete or contain aliases): DEZ, PRATT, INEZ MOREAU, ABEBE TESFAYE, FOREMAN GUS HALVERSEN
* 1 A ¶ A long gallery cut from white rock, lit by work lamps on cable.
* 2 A Painted lanes run down the salt floor.
* 3 A At the far end, a faded house.
* 4 A ¶ The Deepwater Miners are down two ends in the final.
* 5 A Their last stone is about to go.
6 A ¶ COACH DESMOND "DEZ" PRATT (50s, windbreaker, stopwatch on a lanyard) paces behind the hogline.
7 A Skip INEZ MOREAU (30s, braided, taped knuckles) crouches in the house with her broom flat on the ice, calling the line.
8 A At the hack, lead ABEBE TESFAYE (20s, rangy, headband) slides out of his delivery, the stone rumbling off, while Dez mouths numbers and Inez sweeps nothing, waiting.
* 9 A The stone curls, hesitates, and dies a foot short of the button.
10 A ¶ Nobody speaks.
* 11 A Salt dust drifts in the lamplight.
12 D DEZ: That's the game.
13 D INEZ: It's not. We have one more.
14 D DEZ: We had one more.
15 D ABEBE: I pulled it. My fault.
16 D INEZ: Your slide was fine. The ice was heavy.
* 17 A ¶ Boots on the stairs.
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
* 38 A It's a clean release.
* 39 A The stone goes long, slow, tired.
* 40 A It touches nothing.
* 41 A ¶ The work lamps hum.
42 A Gus checks his watch.

### SCENE s00004 | INT. RIVERBOAT CASINO - PRIVATE DINING SALON - NIGHT
Detected names (may be incomplete or contain aliases): HORACE VANDERMEER, NEELY, ABBOTT, MILES KOWALCZYK
* 1 A ¶ Red velvet.
* 2 A Brass lamps.
* 3 A A paddle wheel churns beyond the portholes, and the whole room sways with the current.
* 4 A ¶ A long table set for three, with a court reporter's absence conspicuous.
5 A At its head sits HORACE VANDERMEER (50s, silver temples, a gray double-breasted suit, a fountain pen he never uncaps).
6 A He is the attorney for the plaintiff.
7 A ¶ Across from him, CORNELIUS "NEELY" ABBOTT (60s, ruddy, a carnation in his lapel, a glass of bourbon sweating at his elbow).
8 A The witness.
9 A Genial.
10 A Rich.
11 A ¶ At the foot of the table, MILES KOWALCZYK (30s, lean, perfect posture, a fresh haircut) arranges his notes.
12 A He represents Abbott.
* 13 A ¶ A deposition, held on a boat so no one can serve a subpoena in the wrong county.
14 D HORACE: We'll keep this informal, Mr. Abbott.
15 D NEELY: Neely. Everyone calls me Neely.
16 D MILES: Mr. Abbott will answer to his name.
17 D NEELY: Miles, relax. We're among friends.
18 D HORACE: Are we?
19 D NEELY: I hope so.
20 A ¶ Horace smiles.
21 A Uncaps nothing.
22 A Turns a page.
23 D HORACE: You've owned the Gilded Heron for how long?
24 D NEELY: Eleven years. Since my father passed.
25 D MILES: Objection. Relevance.
26 D HORACE: It's a deposition, Mr. Kowalczyk. Objections are noted, not ruled upon.
27 D MILES: Noted, then.
28 D NEELY: Let him ask. I've nothing to hide.
29 A ¶ A waiter pours coffee, withdraws.
* 30 A The paddle wheel thuds.
* 31 A Glasses shiver.
32 D HORACE: And the vessel carries how many guests on a Friday?
33 D NEELY: Three hundred, maybe three-fifty.
34 D HORACE: Sprinklers?
35 D NEELY: Of course.
36 D HORACE: Inspected?
37 D NEELY: Every year.
38 D MILES: Mr. Abbott, you needn't elaborate.
39 D NEELY: He's only asking about the boat.
40 D HORACE: Only about the boat.
41 A ¶ He turns another page.
42 A Pleasant.
43 A Unhurried.
44 A He might be reading a menu.
45 D HORACE [CONT'D]: Wonderful. Then let's talk about the fire.
46 A ¶ Neely's glass stops halfway to his lips.
47 D NEELY: Which fire?
48 D HORACE: The one in the engine room, August third.
49 D NEELY: That was minor.
50 D MILES: Mr. Abbott -
51 D NEELY: - a small electrical matter. The crew handled it.
52 D HORACE: The crew locked it.
53 D NEELY: I don't follow.
54 D HORACE: The engine room door. Locked from the outside. Eleven men inside.
55 D MILES: Objection! He's testifying.
56 D HORACE: He is, in fact, answering. Mr. Abbott?
57 D NEELY (too fast): That door sticks. It's old.
58 D HORACE: It sticks from the outside only?
59 D NEELY: It - I wouldn't know.
60 D HORACE: You signed the work order.
61 D NEELY: My signature is on a great many things.
62 D HORACE: This one is dated July thirtieth. Replace latch with exterior bolt. Reason given: theft prevention.
* 63 A ¶ Silence.
64 A Miles stops writing.
* 65 A The boat creaks.
66 D MILES: Where did you get that?
67 D HORACE: From the contractor's invoice file. Delivered this morning, with a very nervous apology.
68 D NEELY: He's lying.
69 D HORACE: He's dead, Mr. Abbott. Since Tuesday. His widow brought the file.
70 A ¶ Neely sets down the glass.
* 71 A It trembles against the saucer.
72 D NEELY: Miles. Say something.
73 D MILES: I'd like a recess.
74 D HORACE: We are on a river, Mr. Kowalczyk. Where would you recess to?
75 D MILES: The deck.
76 D HORACE: Of course.
77 A ¶ Miles stands, then sits again.
78 A He looks at Neely.
79 A Neely won't look at anyone.
80 D NEELY (quietly): It was supposed to be empty.
81 D MILES: Neely, don't -
82 D NEELY: The insurance man said the engine room would be empty at night.
83 D HORACE: And the eleven?
84 D NEELY: They weren't on the schedule.
85 A ¶ Horace finally uncaps the fountain pen.
86 A Writes one line.
* 87 A The nib scratches.
* 88 A Loud.
89 D HORACE: That will do for today.
90 A ¶ He caps the pen.
* 91 A The paddle wheel thuds.
* 92 A The lamps sway.

### SCENE s00005 | INT. FUNICULAR CAR - ALPINE CLIMB - NIGHT
Detected names (may be incomplete or contain aliases): SABINE LACROIX, TEO, BIANCHI, THE MAN IN GRAY, OPERATOR, HALVARD
* 1 A ¶ A glass cabin crawls up a mountain in the dark, a cable humming overhead and the lights of a casino resort burning at the summit like a held breath.
2 A ¶ SABINE LACROIX (30s, black gloves, a champagne flute she hasn't touched) sits with her back to the glass.
3 A Across from her TEODORO "TEO" BIANCHI (40s, bow tie loose, a briefcase cuffed to his wrist) stares at the floor.
4 A A figure in a gray coat leans in the corner, face lost in the shadow of a hat: THE MAN IN GRAY.
5 A ¶ From a speaker above the door, a bored VOICE of the operator drones through the static.
6 D OPERATOR [V.O.]: Next stop, Summit Station. Please remain seated until the car has come to a complete halt.
7 D SABINE: Fourteen minutes. The vault door cycles at the quarter hour. Teo takes the case through the service lift, I take the lobby, and our friend in gray makes the cameras blink.
8 D TEO: You say that like it's simple.
9 D SABINE: It is simple. It's only terrifying.
10 D THE MAN IN GRAY: My cameras blink for ninety seconds. Not ninety-one.
11 D SABINE: Then we move in eighty.
12 D TEO: And if the guard on the service lift is the new one? The one who doesn't take bribes?
13 D SABINE: Then Teo recites the wine list until he cries.
14 D TEO: That is not funny.
15 D THE MAN IN GRAY: Halvard.
16 D SABINE: What?
17 D HALVARD: My name. If we're doing this, you should have it. Halvard.
18 D SABINE: Halvard. Fine. Eighty seconds, Halvard.
19 D OPERATOR [V.O.]: Summit Station in one minute.
20 D TEO: One minute.
21 D SABINE: Breathe, Teo.
22 D HALVARD: Gloves on.

### SCENE s00006 | EXT. TORTOISE MARKET - GIANT SHELL - DAWN
Detected names (may be incomplete or contain aliases): MAEVE THORNWICK, KIT, DOMINIC ASHFORD, LADY ISOLDE, OLD PERRIN
1 A ¶ A colossal tortoise, patient as a hill, plods across a salt flat.
* 2 A On its domed shell, a market of striped awnings and lanterns sways to each slow step.
3 A ¶ Five merchants cluster at the crest.
4 A MAEVE THORNWICK (50s, spice-seller, apron stained saffron).
5 A Her apprentice KIT (teens, wiry, a pouch of glass beads).
6 A Rival glassblower DOMINIC ASHFORD (40s, sooty, barrel-chested).
7 A Cloth-weaver LADY ISOLDE (60s, veil of spun silver).
8 A And the market's crier, OLD PERRIN (80s, a hand bell).
* 9 A ¶ The ground trembles.
10 A The tortoise slows.
11 D MAEVE (to everyone): Hold your wares! She's stopping!
12 D PERRIN (ringing the bell): Stopping! Stopping!
13 D KIT (to Maeve): Is she sick?
14 D MAEVE: She's listening. Quiet now.
15 D DOMINIC (muttering): Last time she stopped, we lost half the lanterns.
16 D ISOLDE (to Dominic): Then keep your mouth shut, and perhaps we keep the other half.
17 D DOMINIC (to himself): Old witch.
18 D ISOLDE: I heard that.
* 19 A ¶ A deep groan rolls through the shell.
* 20 A Crates slide.
* 21 A A lantern shatters.
22 D PERRIN (to everyone, louder): Brace! Brace!
23 D KIT (to himself): Don't fall, don't fall, don't fall.
24 D MAEVE: Everyone, hands on the rails! Now!
25 A ¶ The tortoise rises on its legs, lifting the whole market toward the sky.

### SCENE s00007 | INT. BOWLING ALLEY - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): LUCKY STRIKE LANES, ROSALIND OKONKWO-HART, DEVANTE, PEARL ADEYEMI
* 1 A ¶ Dead neon.
* 2 A Sixteen lanes.
* 3 A The smell of old shoe spray and fryer oil.
* 4 A ¶ A banner over the counter, curling at one corner: LUCKY STRIKE LANES - SINCE 1974.
* 5 A Beneath it, a handwritten sign: CLOSED FOR GOOD.
* 6 A ¶ Cardboard boxes line the shoe counter.
* 7 A A radio plays low, a ballgame, nobody listening.
8 A ¶ ROSALIND OKONKWO-HART (40s, tired eyes, her late father's cardigan two sizes too big) wraps trophies in newspaper.
9 A Methodical.
10 A Careful.
11 A Every one gets its own page.
12 A ¶ Her brother DEVANTE (30s, leather jacket, restless hands) slouches against lane nine, flicking the lever on the ball return.
13 A Click.
14 A Click.
15 A Click.
16 A ¶ Between them, on a stool: MRS. PEARL ADEYEMI (70s, church hat, a purse held like a shield).
17 A Their father's oldest friend.
18 A She hasn't taken her coat off.
19 A ¶ Click.
20 A Click.
21 D ROSALIND: Stop that.
22 D DEVANTE: It's a lever.
23 D ROSALIND: It's loud.
24 A ¶ He stops.
25 A Picks at a splinter on the rail.
26 A Rosalind turns a trophy over in her hands.
* 27 A A bowler, gold paint chipped off one knee.
28 D PEARL: He bowled a 290 once.
29 D ROSALIND: I know.
30 D PEARL: Nineteen eighty-eight.
31 D DEVANTE: It was a 289.
32 D PEARL: He told me 290.
33 D DEVANTE: He rounded up.
34 D PEARL: He did not round.
35 A ¶ Rosalind sets the trophy in a box.
36 A Takes another.
37 A Wraps.
* 38 A The paper crackles.
39 D DEVANTE (to Rosalind): You're keeping those?
40 D ROSALIND: They're his.
41 D DEVANTE: They're junk.
42 D ROSALIND: Then leave them.
43 D DEVANTE: I'm not leaving anything. I'm just asking.
44 A ¶ He kicks a bowling ball.
* 45 A It rolls an inch, rocks back.
46 A He stares at it.
47 D PEARL: The buyer's coming at nine?
48 D ROSALIND: Eight.
49 D PEARL: He's turning it into a gym.
50 D ROSALIND: I know.
51 D PEARL: A gym.
52 D DEVANTE: Pearl.
53 D PEARL: I'm only saying.
54 A ¶ Devante crosses to the pin deck.
55 A Climbs over the gutter rail, and walks down lane nine toward the pins.
56 A Rosalind looks up.
57 A Pearl looks up.
58 A He walks the entire length, boots loud on the wood, and stops at the foul line, back to them.
59 D ROSALIND: Don't scuff the boards.
60 D DEVANTE: They're getting torn out.
61 D ROSALIND: Still.
62 A ¶ He steps off the lane.
63 A Picks up a ball.
64 A Weighs it.
65 A Sets it down.
66 A ¶ Rosalind tapes a box shut.
* 67 A The tape shrieks.
68 A Pearl flinches.
69 D PEARL: He always said you'd be the one to close up.
70 A ¶ Rosalind's hands stop.
71 A Then keep going.
72 D ROSALIND: I'm not closing anything. The bank is.
73 D PEARL: You know what I mean.
74 D ROSALIND: I don't.
75 A ¶ Devante turns.
76 A Pearl turns.
77 A Rosalind lifts the box, struggling with its weight.
78 A Devante and Pearl both step forward, then both freeze.
79 A Rosalind sets the box down herself.
80 D DEVANTE: Let me.
81 D ROSALIND: I've got it.
82 D DEVANTE: You'll hurt your back.
83 D ROSALIND: I've hurt it before.
84 A ¶ She lifts.
85 A Carries it to the door.
86 A Sets it on the step.
* 87 A Cold air floods the lanes.
88 D PEARL: Rosalind, honey, your coat.
89 D ROSALIND: I'm fine.
90 D PEARL: You're shaking.
91 D ROSALIND: It's cold.
92 A ¶ Pearl reaches into her purse.
93 A Pulls out a folded bowling shirt, faded green, a name embroidered on the pocket: CHUKS.
94 A ¶ She holds it out.
95 A Rosalind doesn't take it.
96 D DEVANTE (quiet): Where'd you get that?
97 D PEARL: He left it in my car. Years ago.
* 98 A ¶ Silence.
* 99 A The radio crackles: a crowd roars somewhere far away.
100 A ¶ Devante takes the shirt.
101 A Looks at it.
102 A Folds it once more, carefully, along the same creases.
103 A Walks to the box by the door.
104 A Lays it on top.
105 A ¶ He doesn't say anything.
106 A Neither does Rosalind.
107 A She tapes the flaps shut.
108 A ¶ Pearl finally stands.
109 A Buttons her coat.
110 D PEARL [CONT'D]: Eight o'clock, you said.
111 D ROSALIND: Eight.
112 D PEARL: I'll bring coffee.
113 A ¶ She goes.
* 114 A The door sighs closed behind her.
115 A ¶ Devante and Rosalind alone.
* 116 A The radio talks to nobody.
117 A ¶ He crosses to the counter.
118 A Picks up the last trophy.
119 A Offers it to her, base first.
120 A ¶ She takes it.
121 A Wraps it.
* 122 A Her page is today's sports section.
123 D DEVANTE: Which one's this?
124 D ROSALIND: Doubles. Nineteen ninety-one. With Mom.
125 D DEVANTE: Huh.
126 A ¶ He sets his hand on the box lid.
127 A Leaves it there a moment.
128 A ¶ Then he reaches up and kills the radio.
* 129 A ¶ The alley goes quiet.
* 130 A Only the hum of the cooler.
* 131 A Only the paper.

### SCENE s00008 | INT. MUNICIPAL PLANETARIUM - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, ASANTE, WALLACE PYO
* 1 A ¶ A cramped booth above the dome.
* 2 A Dials, a projector the size of an oven, a dead cup of coffee on every flat surface.
3 A ¶ JUNIPER "JUNE" ASANTE (30s, hoodie, headset, a laptop plastered with stickers) sits at a console, bored.
4 A Beside her, WALLACE PYO (60s, security guard uniform one size small, a thermos) pretends to read a paperback.
* 5 A ¶ Through the glass, the empty dome is lit with a slow field of artificial stars.
6 D WALLACE: You're not supposed to be up here.
7 D JUNE: Maintenance.
8 D WALLACE: At two a.m.?
9 D JUNE: Stars don't recalibrate themselves.
10 A ¶ He sips from the thermos.
11 A Turns a page without reading it.
12 D JUNE [CONT'D] (into headset, flat): Ceiling's clear. Roof hatch in four.
13 D WALLACE: Who're you talking to?
14 D JUNE: Myself. Old habit.
15 D WALLACE: You said "roof hatch."
16 D JUNE: I said "roof catch." As in, catch up on emails.
17 D WALLACE: Mm.
18 A ¶ He doesn't believe her.
19 A He doesn't move, either.
20 A ¶ June taps a key.
* 21 A The stars shift.
* 22 A The constellation of Orion slides west.
23 D WALLACE [CONT'D]: My wife loved Orion.
24 D JUNE: Everyone does.
25 D WALLACE: She said it looked like a man waiting for a bus.
26 A ¶ June laughs.
27 A Real.
28 A Surprised.
29 D JUNE: That's good.
30 D WALLACE: She was good.
* 31 A ¶ Quiet.
* 32 A The projector whirs.
33 D JUNE (under her breath, to the headset): Hold. Hold. He's talking.
34 D WALLACE: There it is again.
35 D JUNE: Hold on, I'm - (beat) - praying. Quietly. For my laptop. It crashes.
36 D WALLACE: Sure it does.
37 A ¶ He sets down the paperback, stands, and stretches until his back cracks.
38 D WALLACE [CONT'D] (to the empty booth): Everyone out of the vault when you're done, please. I lock at six.
* 39 A ¶ Beat.
40 A June looks at him.
41 D JUNE: You knew.
42 D WALLACE: I'm sixty-one. I know what a van looks like parked behind a dome at midnight.
43 D JUNE: And you sat here.
44 D WALLACE: I'm on break.
45 A ¶ He pours coffee.
46 A Offers her the cup.
47 A ¶ She takes it.
48 D WALLACE [CONT'D]: Don't take the telescope. It's on loan from the university.
49 D JUNE (into headset): Hear that, everybody? Leave the telescope.
* 50 A ¶ Overhead, the stars drift on, indifferent.

### SCENE s00009 | INT. GRAIN ELEVATOR - ROLLER DERBY TRACK - NIGHT
Detected names (may be incomplete or contain aliases): BRUISE, CASTILLO, TAMARA GRAY-OYELARAN, DOT KWIATKOWSKI, JONAS FELD
* 1 A ¶ A concrete silo floor, converted.
* 2 A Oval track taped on the slab, plywood bleachers, one hanging bulb per corner.
* 3 A Dust floats in the beams.
* 4 A ¶ The Harvest Hellcats are down nine in the final jam.
5 A Their jammer, MARISOL "BRUISE" CASTILLO (20s, shaved sides, mouthguard dangling), sits on the infield bench lacing her skates tight enough to hurt.
6 A ¶ Beside her, team captain TAMARA GRAY-OYELARAN (30s, tall, eye-black, taped wrist) watches the clock.
7 A Across the track, rival jammer DOT KWIATKOWSKI (40s, braids, quiet) stretches her calf, never looking over.
8 A ¶ Referee JONAS FELD (50s, striped shirt, whistle in his teeth) walks the track, checking the lines.
9 A ¶ Tamara watches Bruise.
10 A Bruise watches the floor.
* 11 A ¶ The clock reads 1:14.
12 D TAMARA: Left side. Don't force it.
13 D BRUISE: I wasn't going to.
14 D TAMARA: You were.
15 D BRUISE: I'm fine.
16 A ¶ Tamara slaps the bench between them.
17 A Once.
18 A Bruise nods without lifting her head.
19 A ¶ Jonas blows a short whistle.
20 A Skaters line up.
21 A Bruise stands.
22 A Dot stands.
23 A Neither looks at the other.
24 D JONAS: Jammers to the line.
25 D TAMARA (to Bruise): Four points a lap. That's all.
26 D BRUISE: I know.
27 D TAMARA: Then go.
28 A ¶ Bruise rolls to the starting line.
29 D DOT (to Bruise): You're limping.
30 D BRUISE (to Dot): You're old.
31 D DOT (to Bruise): I'm patient.
32 D BRUISE (to Dot): You're slow.
33 A ¶ Jonas raises his whistle.
34 D TAMARA: Do not watch her feet.
35 D BRUISE: Whose feet?
36 D DOT: Mine.
* 37 A ¶ Beat.
* 38 A The grain-elevator echo carries it.
39 D JONAS: Quiet on the line.
40 D TAMARA: It's a three-lap jam, Bruise.
41 D BRUISE: I said I know.
42 D DOT: Give her a minute. She's praying.
43 D BRUISE: I'm not praying.
44 D DOT: You're moving your lips.
45 D BRUISE: I'm counting.
46 D TAMARA: She counts like her mother.
47 D BRUISE: Leave my mother out of it.
48 D BRUISE: Just blow it already.
49 D DOT: Just blow it already.
50 D JONAS: Last warning. Hush.
51 A ¶ Bruise rolls her shoulders.
52 A Dot rolls hers.
53 A Their eyes finally meet.
* 54 A Two seconds.
* 55 A Three.
56 A ¶ Jonas lifts the whistle.
* 57 A A cold quiet drops over the whole silo.
58 A ¶ The whistle shrieks.

### SCENE s00010 | INT. FUNICULAR CONTROL HUT - NIGHT
Detected names (may be incomplete or contain aliases): OKSANA VOLKOV, DEZ, ACHEBE, MARGUERITE, BOOT, TARIQ BEN-HAIM
* 1 A ¶ A concrete box bolted to a mountainside.
* 2 A One window.
* 3 A Below it, the cable runs down into fog.
4 A ¶ OKSANA VOLKOV (40s, lean, grease on her cuffs) stands at a bank of dials.
5 A A wrench in her fist.
6 A She hasn't blinked in a while.
7 A ¶ DESMOND "DEZ" ACHEBE (30s, soaked parka, bad limp) sits on an overturned crate.
8 A A pistol rests on his knee.
9 A Not pointed.
10 A Not far from pointed.
* 11 A ¶ Between them on the floor: a canvas duffel, zipped.
12 D DEZ: Stop looking at the brake.
13 D OKSANA: I'm looking at the gauge.
14 D DEZ: You're looking at the brake.
15 A ¶ She lets the wrench drop to her side.
16 A Slowly.
17 D OKSANA: Car Two is stopped at the midpoint. Eleven people inside. Two of them are kids.
18 D DEZ: Then you better start it again when I say.
* 19 A ¶ The radio on the desk CRACKLES.
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
* 36 A ¶ Silence on the line.
* 37 A Fog presses at the window.
38 D MARGUERITE [V.O.] (radio): Okay.
* 39 A ¶ Click.
* 40 A Dead air.
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
* 53 A Inside: a hard-shell case, steel, handcuffed to a leather strap.
54 A She looks up.
55 D OKSANA: This is somebody's wrist strap.
56 D DEZ: It's somebody's problem.
* 57 A ¶ A BOOT scrapes outside.
58 A Both freeze.
* 59 A ¶ The door swings in.
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
* 79 A ¶ From the desk, the base radio hisses again.
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
* 90 A Outside, far down the slope, an engine growls.
* 91 A Closer.
* 92 A Tires on gravel.
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
* 103 A Headlights sweep across the fog.
* 104 A Then the glass goes white.
105 D DEZ: Don't.
106 A ¶ Oksana puts her palm on the lever.
107 D OKSANA: You can still walk out.
108 D DEZ: With what?
109 A ¶ He kicks the duffel toward her.
110 A Hard.
* 111 A It slides to her knees.
112 D DEZ [CONT'D]: Take it. Take the damn case.
113 A ¶ She doesn't move.
114 A Tariq doesn't move.
* 115 A The cable HUMS under load, waiting.
116 A ¶ Dez cocks the pistol.
117 D DEZ [CONT'D]: Pull it.
118 A ¶ She pulls.
* 119 A ¶ The whole hut SHUDDERS.
* 120 A Down in the fog, the cable begins to run.
