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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0106.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_seagull_5 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): ARKADINA, MASHA, NINA, SORIN, DORN, SHAMRAEFF, TRIGORIN
1 D ARKADINA: If you please, my dear.
2 A ¶ Goes off to the left, calling.
3 D MASHA: Mr. Constantine! Oh, Mr. Constantine!
4 A ¶ Comes in from behind the stage.
5 D NINA: I see that the play will never be finished, so now I can go home. Good evening.
6 A ¶ She kisses ARKADINA and PAULINA.
7 D SORIN: Bravo! Bravo!
8 D ARKADINA: Bravo! Bravo! We were quite charmed by your acting. With your looks and such a lovely voice it is a crime for you to hide yourself in the country. You must be very talented. It is your duty to go on the stage, do you hear me?
9 D NINA: It is the dream of my life, which will never come true.
10 D ARKADINA: Who knows? Perhaps it will. But let me present Monsieur Boris Trigorin.
11 D NINA: I am delighted to meet you.
12 A ¶ Embarrassed.
13 D NINA: I have read all your books.
14 A ¶ Drawing NINA down beside her.
15 D ARKADINA: Don’t be afraid of him, dear. He is a simple, good-natured soul, even if he is a celebrity. See, he is embarrassed himself.
16 D DORN: Couldn’t the curtain be raised now? It is depressing to have it down.
17 A ¶ Loudly.
18 D SHAMRAEFF: Jacob, my man! Raise the curtain!
19 A ¶ To TRIGORIN.
20 D NINA: It was a curious play, wasn’t it?
21 D TRIGORIN: Very. I couldn’t understand it at all, but I watched it with the greatest pleasure because you acted with such sincerity, and the setting was beautiful.
* 22 A ¶ A pause.
23 D TRIGORIN: There must be a lot of fish in this lake.
24 D NINA: Yes, there are.
25 D TRIGORIN: I love fishing. I know of nothing pleasanter than to sit on a lake shore in the evening with one’s eyes on a floating cork.
26 D NINA: Why, I should think that for one who has tasted the joys of creation, no other pleasure could exist.
27 D ARKADINA: Don’t talk like that. He always begins to flounder when people say nice things to him.
28 D SHAMRAEFF: I remember when the famous Silva was singing once in the Opera House at Moscow, how delighted we all were when he took the low C. Well, you can imagine our astonishment when one of the church cantors, who happened to be sitting in the gallery, suddenly boomed out: “Bravo, Silva!” a whole octave lower. Like this:
29 A ¶ In a deep bass voice.
30 D SHAMRAEFF: “Bravo, Silva!” The audience was left breathless.
* 31 A ¶ A pause.
32 D DORN: An angel of silence is flying over our heads.
33 D NINA: I must go. Good-bye.
34 D ARKADINA: Where to? Where must you go so early? We shan’t allow it.
35 D NINA: My father is waiting for me.
36 D ARKADINA: How cruel he is, really.
37 A ¶ They kiss each other.
38 D ARKADINA: Then I suppose we can’t keep you, but it is very hard indeed to let you go.
39 D NINA: If you only knew how hard it is for me to leave you all.
40 D ARKADINA: Somebody must see you home, my pet.
41 A ¶ Startled.
42 D NINA: No, no!
43 A ¶ Imploringly.
44 D SORIN: Don’t go!
45 D NINA: I must.

### SCENE pt_seagull_7 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): DORN, MASHA, SORIN, ARKADINA
1 D DORN: Ah, youth, youth!
2 D MASHA: It is always “Youth, youth,” when there is nothing else to be said.
3 A ¶ She takes snuff.
4 A DORN takes the snuff-box out of her hands and flings it into the bushes.
5 D DORN: Don’t do that, it is horrid.
* 6 A ¶ A pause.
7 D DORN: I hear music in the house. I must go in.
8 D MASHA: Wait a moment.
9 D DORN: What do you want?
10 D MASHA: Let me tell you again. I feel like talking.
11 A ¶ She grows more and more excited.
12 D MASHA: I do not love my father, but my heart turns to you. For some reason, I feel with all my soul that you are near to me. Help me! Help me, or I shall do something foolish and mock at my life, and ruin it. I am at the end of my strength.
13 D DORN: What is the matter? How can I help you?
14 D MASHA: I am in agony. No one, no one can imagine how I suffer.
15 A ¶ She lays her head on his shoulder and speaks softly.
16 D MASHA: I love Constantine.
17 D DORN: Oh, how excitable you all are! And how much love there is about this lake of spells!
18 A ¶ Tenderly.
19 D DORN: But what can I do for you, my child? What? What?
* 20 A ¶ The curtain falls.
* 21 A ¶ The lawn in front of SORIN’S house.
* 22 A The house stands in the background, on a broad terrace.
* 23 A The lake, brightly reflecting the rays of the sun, lies to the left.
* 24 A There are flower-beds here and there.
* 25 A It is noon; the day is hot.
26 A ARKADINA, DORN, and MASHA are sitting on a bench on the lawn, in the shade of an old linden.
* 27 A An open book is lying on DORN’S knees .
28 A ¶ To MASHA.
29 D ARKADINA: Come, get up.
30 A ¶ They both get up.
31 D ARKADINA: Stand beside me. You are twenty-two and I am almost twice your age. Tell me, Doctor, which of us is the younger looking?
32 D DORN: You are, of course.
33 D ARKADINA: You see! Now why is it? Because I work; my heart and mind are always busy, whereas you never move off the same spot. You don’t live. It is a maxim of mine never to look into the future. I never admit the thought of old age or death, and just accept what comes to me.
34 D MASHA: I feel as if I had been in the world a thousand years, and I trail my life behind me like an endless scarf. Often I have no desire to live at all. Of course that is foolish. One ought to pull oneself together and shake off such nonsense.
35 A ¶ Sings softly.
36 A ¶ “Tell her, oh flowers--”
37 D ARKADINA: And then I keep myself as correct-looking as an Englishman. I am always well-groomed, as the saying is, and carefully dressed, with my hair neatly arranged. Do you think I should ever permit myself to leave the house half-dressed, with untidy hair? Certainly not! I have kept my looks by never letting myself slump as some women do.
38 A ¶ She puts her arms akimbo, and walks up and down on the lawn.
39 D ARKADINA: See me, tripping on tiptoe like a fifteen-year-old girl.
40 D DORN: I see. Nevertheless, I shall continue my reading.
41 A ¶ He takes up his book.
42 D DORN: Let me see, we had come to the grain-dealer and the rats.
43 D ARKADINA: And the rats. Go on.
44 A ¶ She sits down.
45 D ARKADINA: No, give me the book, it is my turn to read.
46 A ¶ She takes the book and looks for the place.
47 D ARKADINA: And the rats. Ah, here it is.
48 A ¶ She reads.
49 D ARKADINA: “It is as dangerous for society to attract and indulge authors as it is for grain-dealers to raise rats in their granaries. Yet society loves authors. And so, when a woman has found one whom she wishes to make her own, she lays siege to him by indulging and flattering him.” That may be so in France, but it certainly is not so in Russia. We do not carry out a programme like that. With us, a woman is usually head over ears in love with an author before she attempts to lay siege to him. You have an example before your eyes, in me and Trigorin.
50 A ¶ SORIN comes in leaning on a cane, with NINA beside him.
51 A MEDVIEDENKO follows, pushing an arm-chair.
52 A ¶ In a caressing voice, as if speaking to a child.
53 D SORIN: So we are happy now, eh? We are enjoying ourselves to-day, are we? Father and stepmother have gone away to Tver, and we are free for three whole days!

### SCENE pt_seagull_8 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): ARKADINA, NINA, SORIN, MASHA, DORN, MEDVIEDENKO
1 A ¶ Sits down beside ARKADINA, and embraces her.
2 D NINA: I am so happy. I belong to you now.
3 A ¶ Sits down in his arm-chair.
4 D SORIN: She looks lovely to-day.
5 D ARKADINA: Yes, she has put on her prettiest dress, and looks sweet. That was nice of you.
6 A ¶ She kisses NINA.
7 D ARKADINA: But we mustn’t praise her too much; we shall spoil her. Where is Trigorin?
8 D NINA: He is fishing off the wharf.
9 D ARKADINA: I wonder he isn’t bored.
10 A ¶ She begins to read again.
11 D NINA: What are you reading?
12 D ARKADINA: “On the Water,” by Maupassant.
13 A ¶ She reads a few lines to herself.
14 D ARKADINA: But the rest is neither true nor interesting.
15 A ¶ She lays down the book.
16 D ARKADINA: I am uneasy about my son. Tell me, what is the matter with him? Why is he so dull and depressed lately? He spends all his days on the lake, and I scarcely ever see him any more.
17 D MASHA: His heart is heavy.
18 A ¶ Timidly, to NINA.
19 D MASHA: Please recite something from his play.
20 A ¶ Shrugging her shoulders.
21 D NINA: Shall I? Is it so interesting?
22 A ¶ With suppressed rapture.
23 D MASHA: When he recites, his eyes shine and his face grows pale. His voice is beautiful and sad, and he has the ways of a poet.
24 A ¶ SORIN begins to snore.
25 D DORN: Pleasant dreams!
26 D ARKADINA: Peter!
27 D SORIN: Eh?
28 D ARKADINA: Are you asleep?
29 D SORIN: Not a bit of it.
* 30 A ¶ A pause.
31 D ARKADINA: You don’t do a thing for your health, brother, but you really ought to.
32 D DORN: The idea of doing anything for one’s health at sixty-five!
33 D SORIN: One still wants to live at sixty-five.
34 A ¶ Crossly.
35 D DORN: Ho! Take some camomile tea.
36 D ARKADINA: I think a journey to some watering-place would be good for him.
37 D DORN: Why, yes; he might go as well as not.
38 D ARKADINA: You don’t understand.
39 D DORN: There is nothing to understand in this case; it is quite clear.
40 D MEDVIEDENKO: He ought to give up smoking.
41 D SORIN: What nonsense!
* 42 A ¶ A pause.
43 D DORN: No, that is not nonsense. Wine and tobacco destroy the individuality. After a cigar or a glass of vodka you are no longer Peter Sorin, but Peter Sorin plus somebody else. Your ego breaks in two: you begin to think of yourself in the third person.
44 D SORIN: It is easy for you to condemn smoking and drinking; you have known what life is, but what about me? I have served in the Department of Justice for twenty-eight years, but I have never lived, I have never had any experiences. You are satiated with life, and that is why you have an inclination for philosophy, but I want to live, and that is why I drink my wine for dinner and smoke cigars, and all.
45 D DORN: One must take life seriously, and to take a cure at sixty-five and regret that one did not have more pleasure in youth is, forgive my saying so, trifling.

### SCENE pt_superman_0 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): RAMSDEN, THE MAID, OCTAVIUS
1 A ¶ Roebuck Ramsden is in his study, opening the morning letters.
* 2 A The study, handsomely and solidly furnished, proclaims the man of means.
* 3 A Not a speck of dust is visible: it is clear that there are at least two housemaids and a parlormaid downstairs, and a housekeeper upstairs who does not let them spare elbow-grease.
4 A Even the top of Roebuck's head is polished: on a sunshiny day he could heliograph his orders to distant camps by merely nodding.
5 A In no other respect, however, does he suggest the military man.
6 A It is in active civil life that men get his broad air of importance, his dignified expectation of deference, his determinate mouth disarmed and refined since the hour of his success by the withdrawal of opposition and the concession of comfort and precedence and power.
7 A He is more than a highly respectable man: he is marked out as a president of highly respectable men, a chairman among directors, an alderman among councillors, a mayor among aldermen.
8 A Four tufts of iron-grey hair, which will soon be as white as isinglass, and are in other respects not at all unlike it, grow in two symmetrical pairs above his ears and at the angles of his spreading jaws.
9 A He wears a black frock coat, a white waistcoat (it is bright spring weather), and trousers, neither black nor perceptibly blue, of one of those indefinitely mixed hues which the modern clothier has produced to harmonize with the religions of respectable men.
10 A He has not been out of doors yet to-day; so he still wears his slippers, his boots being ready for him on the hearthrug.
11 A Surmising that he has no valet, and seeing that he has no secretary with a shorthand notebook and a typewriter, one meditates on how little our great burgess domesticity has been disturbed by new fashions and methods, or by the enterprise of the railway and hotel companies which sell you a Saturday to Monday of life at Folkestone as a real gentleman for two guineas, first class fares both ways included.
* 12 A ¶ How old is Roebuck?
* 13 A The question is important on the threshold of a drama of ideas; for under such circumstances everything depends on whether his adolescence belonged to the sixties or to the eighties.
14 A He was born, as a matter of fact, in 1839, and was a Unitarian and Free Trader from his boyhood, and an Evolutionist from the publication of the Origin of Species.
15 A Consequently he has always classed himself as an advanced thinker and fearlessly outspoken reformer.
* 16 A ¶ Sitting at his writing table, he has on his right the windows giving on Portland Place.
* 17 A Through these, as through a proscenium, the curious spectator may contemplate his profile as well as the blinds will permit.
* 18 A On his left is the inner wall, with a stately bookcase, and the door not quite in the middle, but somewhat further from him.
* 19 A Against the wall opposite him are two busts on pillars: one, to his left, of John Bright; the other, to his right, of Mr Herbert Spencer.
* 20 A Between them hang an engraved portrait of Richard Cobden; enlarged photographs of Martineau, Huxley, and George Eliot; autotypes of allegories by Mr G.F. Watts (for Roebuck believed in the fine arts with all the earnestness of a man who does not understand them), and an impression of Dupont's engraving of Delaroche's Beaux Artes hemicycle, representing the great men of all ages.
* 21 A On the wall behind him, above the mantelshelf, is a family portrait of impenetrable obscurity.
* 22 A ¶ A chair stands near the writing table for the convenience of business visitors.
* 23 A Two other chairs are against the wall between the busts.
24 A ¶ A parlormaid enters with a visitor's card.
25 A Roebuck takes it, and nods, pleased.
* 26 A Evidently a welcome caller.
27 D RAMSDEN: Show him up.
28 A ¶ The parlormaid goes out and returns with the visitor.
29 D THE MAID: Mr Robinson.
30 A ¶ Mr Robinson is really an uncommonly nice looking young fellow.
31 A He must, one thinks, be the jeune premier; for it is not in reason to suppose that a second such attractive male figure should appear in one story.
32 A The slim shapely frame, the elegant suit of new mourning, the small head and regular features, the pretty little moustache, the frank clear eyes, the wholesome bloom and the youthful complexion, the well brushed glossy hair, not curly, but of fine texture and good dark color, the arch of good nature in the eyebrows, the erect forehead and neatly pointed chin, all announce the man who will love and suffer later on.
33 A And that he will not do so without sympathy is guaranteed by an engaging sincerity and eager modest serviceableness which stamp him as a man of amiable nature.
34 A The moment he appears, Ramsden's face expands into fatherly liking and welcome, an expression which drops into one of decorous grief as the young man approaches him with sorrow in his face as well as in his black clothes.
* 35 A Ramsden seems to know the nature of the bereavement.
36 A As the visitor advances silently to the writing table, the old man rises and shakes his hand across it without a word: a long, affectionate shake which tells the story of a recent sorrow common to both.
37 A ¶ concluding the handshake and cheering up.
38 D RAMSDEN: Well, well, Octavius, it's the common lot. We must all face it someday. Sit down.
39 A ¶ Octavius takes the visitor's chair.
40 A Ramsden replaces himself in his own.
41 D OCTAVIUS: Yes: we must face it, Mr Ramsden. But I owed him a great deal. He did everything for me that my father could have done if he had lived.
42 D RAMSDEN: He had no son of his own, you see.
43 D OCTAVIUS: But he had daughters; and yet he was as good to my sister as to me. And his death was so sudden! I always intended to thank him--to let him know that I had not taken all his care of me as a matter of course, as any boy takes his father's care. But I waited for an opportunity and now he is dead--dropped without a moment's warning. He will never know what I felt.
44 A ¶ He takes out his handkerchief and cries unaffectedly.
45 D RAMSDEN: How do we know that, Octavius? He may know it: we cannot tell. Come! Don't grieve.
46 A ¶ Octavius masters himself and puts up his handkerchief.
47 D RAMSDEN: That's right. Now let me tell you something to console you. The last time I saw him--it was in this very room--he said to me: "Tavy is a generous lad and the soul of honor; and when I see how little consideration other men get from their sons, I realize how much better than a son he's been to me." There! Doesn't that do you good?
48 D OCTAVIUS: Mr Ramsden: he used to say to me that he had met only one man in the world who was the soul of honor, and that was Roebuck Ramsden.
49 D RAMSDEN: Oh, that was his partiality: we were very old friends, you know. But there was something else he used to say about you. I wonder whether I ought to tell you or not!
50 D OCTAVIUS: You know best.
51 D RAMSDEN: It was something about his daughter.
52 A ¶ eagerly.
53 D OCTAVIUS: About Ann! Oh, do tell me that, Mr Ramsden.
54 D RAMSDEN: Well, he said he was glad, after all, you were not his son, because he thought that someday Annie and you--
55 A ¶ Octavius blushes vividly.
56 D RAMSDEN: Well, perhaps I shouldn't have told you. But he was in earnest.
57 D OCTAVIUS: Oh, if only I thought I had a chance! You know, Mr Ramsden, I don't care about money or about what people call position; and I can't bring myself to take an interest in the business of struggling for them. Well, Ann has a most exquisite nature; but she is so accustomed to be in the thick of that sort of thing that she thinks a man's character incomplete if he is not ambitious. She knows that if she married me she would have to reason herself out of being ashamed of me for not being a big success of some kind.
58 A ¶ Getting up and planting himself with his back to the fireplace.
59 D RAMSDEN: Nonsense, my boy, nonsense! You're too modest. What does she know about the real value of men at her age?
60 A ¶ More seriously.
61 D RAMSDEN: Besides, she's a wonderfully dutiful girl. Her father's wish would be sacred to her. Do you know that since she grew up to years of discretion, I don't believe she has ever once given her own wish as a reason for doing anything or not doing it. It's always "Father wishes me to," or "Mother wouldn't like it." It's really almost a fault in her. I have often told her she must learn to think for herself.
62 A ¶ shaking his head.
63 D OCTAVIUS: I couldn't ask her to marry me because her father wished it, Mr Ramsden.
64 D RAMSDEN: Well, perhaps not. No: of course not. I see that. No: you certainly couldn't. But when you win her on your own merits, it will be a great happiness to her to fulfil her father's desire as well as her own. Eh? Come! you'll ask her, won't you?
65 A ¶ with sad gaiety.
66 D OCTAVIUS: At all events I promise you I shall never ask anyone else.
67 D RAMSDEN: Oh, you shan't need to. She'll accept you, my boy--although
68 A ¶ here he suddenly becomes very serious indeed.
69 D RAMSDEN: you have one great drawback.
70 A ¶ anxiously.
71 D OCTAVIUS: What drawback is that, Mr Ramsden? I should rather say which of my many drawbacks?
72 D RAMSDEN: I'll tell you, Octavius.
73 A ¶ He takes from the table a book bound in red cloth.

### SCENE pt_superman_10 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANN, OCTAVIUS, MISS RAMSDEN, TANNER, VIOLET
1 D ANN: Hadn't you better go with her, Tavy?
2 D OCTAVIUS: She won't have me.
3 D MISS RAMSDEN: Of course she won't. She's going straight to that man.
4 D TANNER: As a natural result of her virtuous reception here.
5 A ¶ much troubled.
6 D RAMSDEN: There, Susan! You hear! and there's some truth in it. I wish you could reconcile it with your principles to be a little patient with this poor girl. She's very young; and there's a time for everything.
7 D MISS RAMSDEN: Oh, she will get all the sympathy she wants from the men. I'm surprised at you, Roebuck.
8 D TANNER: So am I, Ramsden, most favorably.
9 A ¶ Violet appears at the door.
10 A She is as impenitent and self-assured a young lady as one would desire to see among the best behaved of her sex.
11 A Her small head and tiny resolute mouth and chin; her haughty crispness of speech and trimness of carriage; the ruthless elegance of her equipment, which includes a very smart hat with a dead bird in it, mark a personality which is as formidable as it is exquisitely pretty.
12 A She is not a siren, like Ann: admiration comes to her without any compulsion or even interest on her part; besides, there is some fun in Ann, but in this woman none, perhaps no mercy either: if anything restrains her, it is intelligence and pride, not compassion.
13 A Her voice might be the voice of a schoolmistress addressing a class of girls who had disgraced themselves, as she proceeds with complete composure and some disgust to say what she has come to say.
14 D VIOLET: I have only looked in to tell Miss Ramsden that she will find her birthday present to me, the filagree bracelet, in the housekeeper's room.
15 D TANNER: Do come in, Violet, and talk to us sensibly.
16 D VIOLET: Thank you: I have had quite enough of the family conversation this morning. So has your mother, Ann: she has gone home crying. But at all events, I have found out what some of my pretended friends are worth. Good bye.
17 D TANNER: No, no: one moment. I have something to say which I beg you to hear.
18 A ¶ She looks at him without the slightest curiosity, but waits, apparently as much to finish getting her glove on as to hear what he has to say.
19 D TANNER: I am altogether on your side in this matter. I congratulate you, with the sincerest respect, on having the courage to do what you have done. You are entirely in the right; and the family is entirely in the wrong.
* 20 A ¶ Sensation.
21 A Ann and Miss Ramsden rise and turn toward the two.
22 A Violet, more surprised than any of the others, forgets her glove, and comes forward into the middle of the room, both puzzled and displeased.
23 A Octavius alone does not move or raise his head; he is overwhelmed with shame.
24 A ¶ pleading to Tanner to be sensible.
25 D ANN: Jack!
26 A ¶ outraged.
27 D MISS RAMSDEN: Well, I must say!
28 A ¶ sharply to Tanner.
29 D VIOLET: Who told you?
30 D TANNER: Why, Ramsden and Tavy of course. Why should they not?
31 D VIOLET: But they don't know.
32 D TANNER: Don't know what?
33 D VIOLET: They don't know that I am in the right, I mean.
34 D TANNER: Oh, they know it in their hearts, though they think themselves bound to blame you by their silly superstitions about morality and propriety and so forth. But I know, and the whole world really knows, though it dare not say so, that you were right to follow your instinct; that vitality and bravery are the greatest qualities a woman can have, and motherhood her solemn initiation into womanhood; and that the fact of your not being legally married matters not one scrap either to your own worth or to our real regard for you.
35 A ¶ flushing with indignation.
36 D VIOLET: Oh! You think me a wicked woman, like the rest. You think I have not only been vile, but that I share your abominable opinions. Miss Ramsden: I have borne your hard words because I knew you would be sorry for them when you found out the truth. But I won't bear such a horrible insult as to be complimented by Jack on being one of the wretches of whom he approves. I have kept my marriage a secret for my husband's sake. But now I claim my right as a married woman not to be insulted.
37 A ¶ raising his head with inexpressible relief.
38 D OCTAVIUS: You are married!
39 D VIOLET: Yes; and I think you might have guessed it. What business had you all to take it for granted that I had no right to wear my wedding ring? Not one of you even asked me: I cannot forget that.
40 A ¶ in ruins.
41 D TANNER: I am utterly crushed. I meant well--I apologize--abjectly apologize.
42 D VIOLET: I hope you will be more careful in future about the things you say. Of course one does not take them seriously. But they are very disagreeable, and rather in bad taste.
43 A ¶ bowing to the storm.
44 D TANNER: I have no defence: I shall know better in future than to take any woman's part. We have all disgraced ourselves in your eyes, I am afraid, except Ann, SHE befriended you. For Ann's sake, forgive us.
45 D VIOLET: Yes: Ann has been very kind; but then Ann knew.
46 D TANNER: Oh!
47 A ¶ stiffly.
48 D MISS RAMSDEN: And who, pray, is the gentleman who does not acknowledge his wife?
49 A ¶ promptly.
50 D VIOLET: That is my business, Miss Ramsden, and not yours. I have my reasons for keeping my marriage a secret for the present.
51 D RAMSDEN: All I can say is that we are extremely sorry, Violet. I am shocked to think of how we have treated you.
52 A ¶ awkwardly.

### SCENE pt_superman_11 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE LEGS, TANNER, THE CHAUFFEUR, OCTAVIUS, STRAKER
* 1 A ¶ On the carriage drive in the park of a country house near Richmond a motor car has broken down.
2 A It stands in front of a clump of trees round which the drive sweeps to the house, which is partly visible through them: indeed Tanner, standing in the drive with the car on his right hand, could get an unobstructed view of the west corner of the house on his left were he not far too much interested in a pair of supine legs in blue serge trousers which protrude from beneath the machine.
3 A He is watching them intently with bent back and hands supported on his knees.
4 A His leathern overcoat and peaked cap proclaim him one of the dismounted passengers.
5 D THE LEGS: Aha! I got him.
6 D TANNER: All right now?
7 D THE LEGS: All right now.
8 A ¶ Tanner stoops and takes the legs by the ankles, drawing their owner forth like a wheelbarrow, walking on his hands, with a hammer in his mouth.
9 A He is a young man in a neat suit of blue serge, clean shaven, dark eyed, square fingered, with short well brushed black hair and rather irregular sceptically turned eyebrows.
10 A When he is manipulating the car his movements are swift and sudden, yet attentive and deliberate.
11 A With Tanner and Tanner's friends his manner is not in the least deferential, but cool and reticent, keeping them quite effectually at a distance whilst giving them no excuse for complaining of him.
12 A Nevertheless he has a vigilant eye on them always, and that, too, rather cynically, like a man who knows the world well from its seamy side.
13 A He speaks slowly and with a touch of sarcasm; and as he does not at all affect the gentleman in his speech, it may be inferred that his smart appearance is a mark of respect to himself and his own class, not to that which employs him.
14 A ¶ He now gets into the car to test his machinery and put his cap and overcoat on again.
15 A Tanner takes off his leather overcoat and pitches it into the car.
16 A The chauffeur (or automobilist or motoreer or whatever England may presently decide to call him) looks round inquiringly in the act of stowing away his hammer.
17 D THE CHAUFFEUR: Had enough of it, eh?
18 D TANNER: I may as well walk to the house and stretch my legs and calm my nerves a little.
19 A ¶ Looking at his watch.
20 D TANNER: I suppose you know that we have come from Hyde Park Corner to Richmond in twenty-one minutes.
21 D THE CHAUFFEUR: I'd have done it under fifteen if I'd had a clear road all the way.
22 D TANNER: Why do you do it? Is it for love of sport or for the fun of terrifying your unfortunate employer?
23 D THE CHAUFFEUR: What are you afraid of?
24 D TANNER: The police, and breaking my neck.
25 D THE CHAUFFEUR: Well, if you like easy going, you can take a bus, you know. It's cheaper. You pay me to save your time and give you the value of your thousand pound car.
26 A ¶ He sits down calmly.
27 D TANNER: I am the slave of that car and of you too. I dream of the accursed thing at night.
28 D THE CHAUFFEUR: You'll get over that. If you're going up to the house, may I ask how long you're goin to stay there? Because if you mean to put in the whole morning talkin to the ladies, I'll put the car in the stables and make myself comfortable. If not, I'll keep the car on the go about here til you come.
29 D TANNER: Better wait here. We shan't be long. There's a young American gentleman, a Mr Malone, who is driving Mr Robinson down in his new American steam car.
30 A ¶ springing up and coming hastily out of the car to Tanner.
31 D THE CHAUFFEUR: American steam car! Wot! racin us down from London!
32 D TANNER: Perhaps they're here already.
33 D THE CHAUFFEUR: If I'd known it!
34 A ¶ with deep reproach.
35 D THE CHAUFFEUR: Why didn't you tell me, Mr Tanner?
36 D TANNER: Because I've been told that this car is capable of 84 miles an hour; and I already know what YOU are capable of when there is a rival car on the road. No, Henry: there are things it is not good for you to know; and this was one of them. However, cheer up: we are going to have a day after your own heart. The American is to take Mr Robinson and his sister and Miss Whitefield. We are to take Miss Rhoda.
37 A ¶ consoled, and musing on another matter.
38 D THE CHAUFFEUR: That's Miss Whitefield's sister, isn't it?
39 D TANNER: Yes.
40 D THE CHAUFFEUR: And Miss Whitefield herself is goin in the other car? Not with you?
41 D TANNER: Why the devil should she come with me? Mr Robinson will be in the other car.
42 A ¶ The Chauffeur looks at Tanner with cool incredulity, and turns to the car, whistling a popular air softly to himself.
43 A Tanner, a little annoyed, is about to pursue the subject when he hears the footsteps of Octavius on the gravel.
44 A Octavius is coming from the house, dressed for motoring, but without his overcoat.
45 D TANNER: We've lost the race, thank Heaven: here's Mr Robinson. Well, Tavy, is the steam car a success?
46 D OCTAVIUS: I think so. We came from Hyde Park Corner here in seventeen minutes.
47 A ¶ The Chauffeur, furious, kicks the car with a groan of vexation.
48 D OCTAVIUS: How long were you?
49 D TANNER: Oh, about three quarters of an hour or so.
50 A ¶ remonstrating.
51 D THE CHAUFFEUR: Now, now, Mr Tanner, come now! We could ha done it easy under fifteen.
52 D TANNER: By the way, let me introduce you. Mr Octavius Robinson: Mr Enry Straker.
53 D STRAKER: Pleased to meet you, sir. Mr Tanner is gittin at you with his Enry Straker, you know. You call it Henery. But I don't mind, bless you.
54 D TANNER: You think it's simply bad taste in me to chaff him, Tavy. But you're wrong. This man takes more trouble to drop his aiches than ever his father did to pick them up. It's a mark of caste to him. I have never met anybody more swollen with the pride of class than Enry is.
55 D STRAKER: Easy, easy! A little moderation, Mr Tanner.
56 D TANNER: A little moderation, Tavy, you observe. You would tell me to draw it mild, But this chap has been educated. What's more, he knows that we haven't. What was that board school of yours, Straker?
57 D STRAKER: Sherbrooke Road.

### SCENE pt_superman_14 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANN, TANNER, RAMSDEN, MRS WHITEFIELD, HECTOR, OCTAVIUS
1 D ANN: You talk so well.
2 D TANNER: Talk! Talk! It means nothing to you but talk. Well, go back to your mother, and help her to poison Rhoda's imagination as she has poisoned yours. It is the tame elephants who enjoy capturing the wild ones.
3 D ANN: I am getting on. Yesterday I was a boa constrictor: to-day I am an elephant.
4 D TANNER: Yes. So pack your trunk and begone; I have no more to say to you.
5 D ANN: You are so utterly unreasonable and impracticable. What can I do?
6 D TANNER: Do! Break your chains. Go your way according to your own conscience and not according to your mother's. Get your mind clean and vigorous; and learn to enjoy a fast ride in a motor car instead of seeing nothing in it but an excuse for a detestable intrigue. Come with me to Marseilles and across to Algiers and to Biskra, at sixty miles an hour. Come right down to the Cape if you like. That will be a Declaration of Independence with a vengeance. You can write a book about it afterwards. That will finish your mother and make a woman of you.
7 A ¶ thoughtfully.
8 D ANN: I don't think there would be any harm in that, Jack. You are my guardian: you stand in my father's place, by his own wish. Nobody could say a word against our travelling together. It would be delightful: thank you a thousand times, Jack. I'll come.
9 A ¶ aghast.
10 D TANNER: You'll come!!!
11 D ANN: Of course.
12 D TANNER: But--
13 A ¶ he stops, utterly appalled; then resumes feebly.
14 D TANNER: No: look here, Ann: if there's no harm in it there's no point in doing it.
15 D ANN: How absurd you are! You don't want to compromise me, do you?
16 D TANNER: Yes: that's the whole sense of my proposal.
17 D ANN: You are talking the greatest nonsense; and you know it. You would never do anything to hurt me.
18 D TANNER: Well, if you don't want to be compromised, don't come.
19 A ¶ with simple earnestness.
20 D ANN: Yes, I will come, Jack, since you wish it. You are my guardian; and think we ought to see more of one another and come to know one another better.
21 A ¶ Gratefully.
22 D ANN: It's very thoughtful and very kind of you, Jack, to offer me this lovely holiday, especially after what I said about Rhoda. You really are good--much better than you think. When do we start?
23 D TANNER: But--
24 A ¶ The conversation is interrupted by the arrival of Mrs Whitefield from the house.
25 A She is accompanied by the American gentleman, and followed by Ramsden and Octavius.
26 A ¶ Hector Malone is an Eastern American; but he is not at all ashamed of his nationality.
27 A This makes English people of fashion think well of him, as of a young fellow who is manly enough to confess to an obvious disadvantage without any attempt to conceal or extenuate it.
28 A They feel that he ought not to be made to suffer for what is clearly not his fault, and make a point of being specially kind to him.
29 A His chivalrous manners to women, and his elevated moral sentiments, being both gratuitous and unusual, strike them as being a little unfortunate; and though they find his vein of easy humor rather amusing when it has ceased to puzzle them (as it does at first), they have had to make him understand that he really must not tell anecdotes unless they are strictly personal and scandalous, and also that oratory is an accomplishment which belongs to a cruder stage of civilization than that in which his migration has landed him.
30 A On these points Hector is not quite convinced: he still thinks that the British are apt to make merits of their stupidities, and to represent their various incapacities as points of good breeding.
31 A English life seems to him to suffer from a lack of edifying rhetoric (which he calls moral tone); English behavior to show a want of respect for womanhood; English pronunciation to fail very vulgarly in tackling such words as world, girl, bird, etc.; English society to be plain spoken to an extent which stretches occasionally to intolerable coarseness; and English intercourse to need enlivening by games and stories and other pastimes; so he does not feel called upon to acquire these defects after taking great paths to cultivate himself in a first rate manner before venturing across the Atlantic.
32 A To this culture he finds English people either totally indifferent as they very commonly are to all culture, or else politely evasive, the truth being that Hector's culture is nothing but a state of saturation with our literary exports of thirty years ago, reimported by him to be unpacked at a moment's notice and hurled at the head of English literature, science and art, at every conversational opportunity.
33 A The dismay set up by these sallies encourages him in his belief that he is helping to educate England.
34 A When he finds people chattering harmlessly about Anatole France and Nietzsche, he devastates them with Matthew Arnold, the Autocrat of the Breakfast Table, and even Macaulay; and as he is devoutly religious at bottom, he first leads the unwary, by humorous irreverences, to wave popular theology out of account in discussing moral questions with him, and then scatters them in confusion by demanding whether the carrying out of his ideals of conduct was not the manifest object of God Almighty in creating honest men and pure women.
35 A The engaging freshness of his personality and the dumbfoundering staleness of his culture make it extremely difficult to decide whether he is worth knowing; for whilst his company is undeniably pleasant and enlivening, there is intellectually nothing new to be got out of him, especially as he despises politics, and is careful not to talk commercial shop, in which department he is probably much in advance of his English capitalist friends.
36 A He gets on best with romantic Christians of the amoristic sect: hence the friendship which has sprung up between him and Octavius.
37 A ¶ In appearance Hector is a neatly built young man of twenty-four, with a short, smartly trimmed black beard, clear, well shaped eyes, and an ingratiating vivacity of expression.
38 A He is, from the fashionable point of view, faultlessly dressed.
39 A As he comes along the drive from the house with Mrs Whitefield he is sedulously making himself agreeable and entertaining, and thereby placing on her slender wit a burden it is unable to bear.
40 A An Englishman would let her alone, accepting boredom and indifference of their common lot; and the poor lady wants to be either let alone or let prattle about the things that interest her.
41 A ¶ Ramsden strolls over to inspect the motor car.
42 A Octavius joins Hector.
43 A ¶ pouncing on her mother joyously.
44 D ANN: Oh, mamma, what do you think! Jack is going to take me to Nice in his motor car. Isn't it lovely? I am the happiest person in London.
45 A ¶ desperately.
46 D TANNER: Mrs Whitefield objects. I am sure she objects. Doesn't she, Ramsden?
47 D RAMSDEN: I should think it very likely indeed.
48 D ANN: You don't object, do you, mother?
49 D MRS WHITEFIELD: I object! Why should I? I think it will do you good, Ann.
50 A ¶ Trotting over to Tanner.
51 D MRS WHITEFIELD: I meant to ask you to take Rhoda out for a run occasionally: she is too much in the house; but it will do when you come back.
52 D TANNER: Abyss beneath abyss of perfidy!
53 A ¶ hastily, to distract attention from this outburst.
54 D ANN: Oh, I forgot: you have not met Mr Malone. Mr Tanner, my guardian: Mr Hector Malone.
55 D HECTOR: Pleased to meet you, Mr Tanner. I should like to suggest an extension of the travelling party to Nice, if I may.
56 D ANN: Oh, we're all coming. That's understood, isn't it?
57 D HECTOR: I also am the modest possessor of a motor car. If Miss Robinson will allow me the privilege of taking her, my car is at her service.
58 D OCTAVIUS: Violet!
* 59 A ¶ General constraint.
60 A ¶ subduedly.

### SCENE pt_superman_17 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): STRAKER, TANNER, THE CHIEF, THE ANARCHIST, MENDOZA, THE MAJORITY, THE ROWDY SOCIAL-DEMOCRAT
1 A ¶ rising to the height of his destiny.
2 D STRAKER: D'y'mean it?
3 D TANNER: I do.
4 D STRAKER: When?
5 D TANNER: Now. Is that machine ready to start?
6 A ¶ quailing.
7 D STRAKER: But you can't--
8 A ¶ cutting him short by getting into the car.
9 D TANNER: Off we go. First to the bank for money; then to my rooms for my kit; then to your rooms for your kit; then break the record from London to Dover or Folkestone; then across the channel and away like mad to Marseilles, Gibraltar, Genoa, any port from which we can sail to a Mahometan country where men are protected from women.
10 D STRAKER: Garn! you're kiddin.
11 A ¶ resolutely.
12 D TANNER: Stay behind then. If you won't come I'll do it alone.
13 A ¶ He starts the motor.
14 A ¶ running after him.
15 D STRAKER: Here! Mister! arf a mo! steady on!
16 A ¶ he scrambles in as the car plunges forward.
* 17 A ¶ Evening in the Sierra Nevada.
* 18 A Rolling slopes of brown, with olive trees instead of apple trees in the cultivated patches, and occasional prickly pears instead of gorse and bracken in the wilds.
* 19 A Higher up, tall stone peaks and precipices, all handsome and distinguished.
* 20 A No wild nature here: rather a most aristocratic mountain landscape made by a fastidious artist-creator.
* 21 A No vulgar profusion of vegetation: even a touch of aridity in the frequent patches of stones: Spanish magnificence and Spanish economy everywhere.
* 22 A ¶ Not very far north of a spot at which the high road over one of the passes crosses a tunnel on the railway from Malaga to Granada, is one of the mountain amphitheatres of the Sierra.
* 23 A Looking at it from the wide end of the horse-shoe, one sees, a little to the right, in the face of the cliff, a romantic cave which is really an abandoned quarry, and towards the left a little hill, commanding a view of the road, which skirts the amphitheatre on the left, maintaining its higher level on embankments and on an occasional stone arch.
24 A On the hill, watching the road, is a man who is either a Spaniard or a Scotchman.
25 A Probably a Spaniard, since he wears the dress of a Spanish goatherd and seems at home in the Sierra Nevada, but very like a Scotchman for all that.
26 A In the hollow, on the slope leading to the quarry-cave, are about a dozen men who, as they recline at their cave round a heap of smouldering white ashes of dead leaf and brushwood, have an air of being conscious of themselves as picturesque scoundrels honoring the Sierra by using it as an effective pictorial background.
27 A As a matter of artistic fact they are not picturesque; and the mountains tolerate them as lions tolerate lice.
28 A An English policeman or Poor Law Guardian would recognize them as a selected band of tramps and ablebodied paupers.
* 29 A ¶ This description of them is not wholly contemptuous.
* 30 A Whoever has intelligently observed the tramp, or visited the ablebodied ward of a workhouse, will admit that our social failures are not all drunkards and weaklings.
31 A Some of them are men who do not fit the class they were born into.
* 32 A Precisely the same qualities that make the educated gentleman an artist may make an uneducated manual laborer an ablebodied pauper.
* 33 A There are men who fall helplessly into the workhouse because they are good for nothing; but there are also men who are there because they are strongminded enough to disregard the social convention (obviously not a disinterested one on the part of the ratepayer) which bids a man live by heavy and badly paid drudgery when he has the alternative of walking into the workhouse, announcing himself as a destitute person, and legally compelling the Guardians to feed, clothe and house him better than he could feed, clothe and house himself without great exertion.
* 34 A When a man who is born a poet refuses a stool in a stockbroker's office, and starves in a garret, spunging on a poor landlady or on his friends and relatives rather than work against his grain; or when a lady, because she is a lady, will face any extremity of parasitic dependence rather than take a situation as cook or parlormaid, we make large allowances for them.
* 35 A To such allowances the ablebodied pauper and his nomadic variant the tramp are equally entitled.
* 36 A ¶ Further, the imaginative man, if his life is to be tolerable to him, must have leisure to tell himself stories, and a position which lends itself to imaginative decoration.
* 37 A The ranks of unskilled labor offer no such positions.
* 38 A We misuse our laborers horribly; and when a man refuses to be misused, we have no right to say that he is refusing honest work.
* 39 A Let us be frank in this matter before we go on with our play; so that we may enjoy it without hypocrisy.
* 40 A If we were reasoning, farsighted people, four fifths of us would go straight to the Guardians for relief, and knock the whole social system to pieces with most beneficial reconstructive results.
* 41 A The reason we do got do this is because we work like bees or ants, by instinct or habit, not reasoning about the matter at all.
* 42 A Therefore when a man comes along who can and does reason, and who, applying the Kantian test to his conduct, can truly say to us, If everybody did as I do, the world would be compelled to reform itself industrially, and abolish slavery and squalor, which exist only because everybody does as you do, let us honor that man and seriously consider the advisability of following his example.
* 43 A Such a man is the able-bodied, able-minded pauper.
* 44 A Were he a gentleman doing his best to get a pension or a sinecure instead of sweeping a crossing, nobody would blame him; for deciding that so long as the alternative lies between living mainly at the expense of the community and allowing the community to live mainly at his, it would be folly to accept what is to him personally the greater of the two evils.
* 45 A ¶ We may therefore contemplate the tramps of the Sierra without prejudice, admitting cheerfully that our objects--briefly, to be gentlemen of fortune--are much the same as theirs, and the difference in our position and methods merely accidental.
* 46 A One or two of them, perhaps, it would be wiser to kill without malice in a friendly and frank manner; for there are bipeds, just as there are quadrupeds, who are too dangerous to be left unchained and unmuzzled; and these cannot fairly expect to have other men's lives wasted in the work of watching them.
* 47 A But as society has not the courage to kill them, and, when it catches them, simply wreaks on them some superstitious expiatory rites of torture and degradation, and than lets them loose with heightened qualifications for mischief, it is just as well that they are at large in the Sierra, and in the hands of a chief who looks as if he might possibly, on provocation, order them to be shot.
48 A ¶ This chief, seated in the centre of the group on a squared block of stone from the quarry, is a tall strong man, with a striking cockatoo nose, glossy black hair, pointed beard, upturned moustache, and a Mephistophelean affectation which is fairly imposing, perhaps because the scenery admits of a larger swagger than Piccadilly, perhaps because of a certain sentimentality in the man which gives him that touch of grace which alone can excuse deliberate picturesqueness.
49 A His eyes and mouth are by no means rascally; he has a fine voice and a ready wit; and whether he is really the strongest man in the party, or not, he looks it.
50 A He is certainly, the best fed, the best dressed, and the best trained.
* 51 A The fact that he speaks English is not unexpected in spite of the Spanish landscape; for with the exception of one man who might be guessed as a bullfighter ruined by drink and one unmistakable Frenchman, they are all cockney or American; therefore, in a land of cloaks and sombreros, they mostly wear seedy overcoats, woollen mufflers, hard hemispherical hats, and dirty brown gloves.
52 A Only a very few dress after their leader, whose broad sombrero with a cock's feather in the band, and voluminous cloak descending to his high boots, are as un-English as possible.
53 A None of them are armed; and the ungloved ones keep their hands in their pockets because it is their national belief that it must be dangerously cold in the open air with the night coming on.
* 54 A (It is as warm an evening as any reasonable man could desire).
* 55 A ¶ Except the bullfighting inebriate there is only one person in the company who looks more than, say, thirty-three.
56 A He is a small man with reddish whiskers, weak eyes, and the anxious look of a small tradesman in difficulties.
57 A He wears the only tall hat visible: it shines in the sunset with the sticky glow of some sixpenny patent hat reviver, often applied and constantly tending to produce a worse state of the original surface than the ruin it was applied to remedy.
58 A He has a collar and cuff of celluloid; and his brown Chesterfield overcoat, with velvet collar, is still presentable.
59 A He is pre-eminently the respectable man of the party, and is certainly over forty, possibly over fifty.
60 A He is the corner man on the leader's right, opposite three men in scarlet ties on his left.
61 A One of these three is the Frenchman.
62 A Of the remaining two, who are both English, one is argumentative, solemn, and obstinate; the other rowdy and mischievous.
63 A ¶ The chief, with a magnificent fling of the end of his cloak across his left shoulder, rises to address them.
64 A The applause which greets him shows that he is a favorite orator.
65 D THE CHIEF: Friends and fellow brigands. I have a proposal to make to this meeting. We have now spent three evenings in discussing the question Have Anarchists or Social-Democrats the most personal courage? We have gone into the principles of Anarchism and Social-Democracy at great length. The cause of Anarchy has been ably represented by our one Anarchist, who doesn't know what Anarchism means
66 A ¶ laughter.
67 D THE CHIEF: --
68 A ¶ rising.
69 D THE ANARCHIST: A point of order, Mendoza--
70 A ¶ forcibly.
71 D MENDOZA: No, by thunder: your last point of order took half an hour. Besides, Anarchists don't believe in order.
72 A ¶ mild, polite but persistent: he is, in fact, the respectable looking elderly man in the celluloid collar and cuffs.
73 D THE ANARCHIST: That is a vulgar error. I can prove--
74 D MENDOZA: Order, order.
75 A ¶ THE OTHERS [shouting] Order, order.
76 A Sit down.
77 A Chair!
78 A Shut up.
79 A ¶ The Anarchist is suppressed.
80 D MENDOZA: On the other hand we have three Social-Democrats among us. They are not on speaking terms; and they have put before us three distinct and incompatible views of Social-Democracy.
81 A ¶ shouting assent.
82 D THE MAJORITY: Hear, hear! So we are. Right.
83 A ¶ smarting under oppression.
84 D THE ROWDY SOCIAL-DEMOCRAT: You ain't no Christian. You're a Sheeny, you are.
85 A ¶ with crushing magnanimity.
86 D MENDOZA: My friend; I am an exception to all rules. It is true that I have the honor to be a Jew; and, when the Zionists need a leader to reassemble our race on its historic soil of Palestine, Mendoza will not be the last to volunteer
87 A ¶ sympathetic applause--hear, hear, etc.
88 D MENDOZA: But I am not a slave to any superstition. I have swallowed all the formulas, even that of Socialism; though, in a sense, once a Socialist, always a Socialist.

### SCENE pt_superman_2 | INT. SUPERMAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): TANNER, RAMSDEN, OCTAVIUS
1 D TANNER: You won't get it, my boy, if Ramsden upsets the will.
2 D RAMSDEN: Ha! I see. You have got me in a cleft stick.
3 D TANNER: He leaves me nothing but the charge of Ann's morals, on the ground that I have already more money than is good for me. That shows that he had his wits about him, doesn't it?
4 A ¶ grimly.
5 D RAMSDEN: I admit that.
6 A ¶ rising and coming from his refuge by the wall.
7 D OCTAVIUS: Mr Ramsden: I think you are prejudiced against Jack. He is a man of honor, and incapable of abusing--
8 D TANNER: Don't, Tavy: you'll make me ill. I am not a man of honor: I am a man struck down by a dead hand. Tavy: you must marry her after all and take her off my hands. And I had set my heart on saving you from her!
9 D OCTAVIUS: Oh, Jack, you talk of saving me from my highest happiness.
10 D TANNER: Yes, a lifetime of happiness. If it were only the first half hour's happiness, Tavy, I would buy it for you with my last penny. But a lifetime of happiness! No man alive could bear it: it would be hell on earth.
11 A ¶ violently.
12 D RAMSDEN: Stuff, sir. Talk sense; or else go and waste someone else's time: I have something better to do than listen to your fooleries
13 A ¶ he positively kicks his way to his table and resumes his seat.
14 D TANNER: You hear him, Tavy! Not an idea in his head later than eighteen-sixty. We can't leave Ann with no other guardian to turn to.
15 D RAMSDEN: I am proud of your contempt for my character and opinions, sir. Your own are set forth in that book, I believe.
16 A ¶ eagerly going to the table.
17 D TANNER: What! You've got my book! What do you think of it?
18 D RAMSDEN: Do you suppose I would read such a book, sir?
19 D TANNER: Then why did you buy it?
20 D RAMSDEN: I did not buy it, sir. It has been sent me by some foolish lady who seems to admire your views. I was about to dispose of it when Octavius interrupted me. I shall do so now, with your permission.
21 A ¶ He throws the book into the waste paper basket with such vehemence that Tanner recoils under the impression that it is being thrown at his head.
22 D TANNER: You have no more manners than I have myself. However, that saves ceremony between us.
23 A ¶ He sits down again.
24 D TANNER: What do you intend to do about this will?
25 D OCTAVIUS: May I make a suggestion?
26 D RAMSDEN: Certainly, Octavius.
27 D OCTAVIUS: Aren't we forgetting that Ann herself may have some wishes in this matter?
28 D RAMSDEN: I quite intend that Annie's wishes shall be consulted in every reasonable way. But she is only a woman, and a young and inexperienced woman at that.
29 D TANNER: Ramsden: I begin to pity you.
* 30 A ¶ hotly.
31 D RAMSDEN: I don't want to know how you feel towards me, Mr Tanner.
32 D TANNER: Ann will do just exactly what she likes. And what's more, she'll force us to advise her to do it; and she'll put the blame on us if it turns out badly. So, as Tavy is longing to see her--
33 A ¶ shyly.
34 D OCTAVIUS: I am not, Jack.
35 D TANNER: You lie, Tavy: you are. So let's have her down from the drawing-room and ask her what she intends us to do. Off with you, Tavy, and fetch her.
36 A ¶ Tavy turns to go.
37 D TANNER: And don't be long for the strained relations between myself and Ramsden will make the interval rather painful
38 A ¶ Ramsden compresses his lips, but says nothing--.
39 D OCTAVIUS: Never mind him, Mr Ramsden. He's not serious.
40 A ¶ He goes out.
* 41 A ¶ RAMSDEN [very deliberately] Mr Tanner: you are the most impudent person I have ever met.
42 A ¶ seriously.
43 D TANNER: I know it, Ramsden. Yet even I cannot wholly conquer shame. We live in an atmosphere of shame. We are ashamed of everything that is real about us; ashamed of ourselves, of our relatives, of our incomes, of our accents, of our opinions, of our experience, just as we are ashamed of our naked skins. Good Lord, my dear Ramsden, we are ashamed to walk, ashamed to ride in an omnibus, ashamed to hire a hansom instead of keeping a carriage, ashamed of keeping one horse instead of two and a groom-gardener instead of a coachman and footman. The more things a man is ashamed of, the more respectable he is. Why, you're ashamed to buy my book, ashamed to read it: the only thing you're not ashamed of is to judge me for it without having read it; and even that only means that you're ashamed to have heterodox opinions. Look at the effect I produce because my fairy godmother withheld from me this gift of shame. I have every possible virtue that a man can have except--
44 D RAMSDEN: I am glad you think so well of yourself.
45 D TANNER: All you mean by that is that you think I ought to be ashamed of talking about my virtues. You don't mean that I haven't got them: you know perfectly well that I am as sober and honest a citizen as yourself, as truthful personally, and much more truthful politically and morally.

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
