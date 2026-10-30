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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusB/group_0000.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_dollhouse_0 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): NORA, PORTER, MAID, HELMER
* 1 A ¶ [SCENE.—A room furnished comfortably and tastefully, but not extravagantly.
* 2 A At the back, a door to the right leads to the entrance-hall, another to the left leads to Helmer’s study.
* 3 A Between the doors stands a piano.
* 4 A In the middle of the left-hand wall is a door, and beyond it a window.
* 5 A Near the window are a round table, arm-chairs and a small sofa.
* 6 A In the right-hand wall, at the farther end, another door; and on the same side, nearer the footlights, a stove, two easy chairs and a rocking-chair; between the stove and the door, a small table.
* 7 A Engravings on the walls; a cabinet with china and other small objects; a small book-case with well-bound books.
* 8 A The floors are carpeted, and a fire burns in the stove.
* 9 A It is winter.
* 10 A ¶ A bell rings in the hall; shortly afterwards the door is heard to open.
11 A Enter NORA, humming a tune and in high spirits.
12 A She is in outdoor dress and carries a number of parcels; these she lays on the table to the right.
* 13 A She leaves the outer door open after her, and through it is seen a PORTER who is carrying a Christmas Tree and a basket, which he gives to the MAID who has opened the door.]
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
* 18 A ¶ A bell is heard in the hall.
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
* 9 A ¶ The door-bell rings.
10 D NORA: Doctor Rank! Anything rather than that—anything, whatever it is!
11 A ¶ She puts her hands over her face, pulls herself together, goes to the door and opens it.
12 A RANK is standing without, hanging up his coat.
* 13 A During the following dialogue it begins to grow dark.
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
* 45 A ¶ The sound of a door shutting is heard from below.

### SCENE pd_earnest_0 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): ALGERNON, LANE, JACK
* 1 A ¶ Morning-room in Algernon’s flat in Half-Moon Street.
* 2 A The room is luxuriously and artistically furnished.
* 3 A The sound of a piano is heard in the adjoining room.
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
* 45 A ¶ Goes over and takes sandwich.
46 D ALGERNON: By the way, Shropshire is your county, is it not?
47 D JACK: Eh? Shropshire? Yes, of course. Hallo! Why all these cups? Why cucumber sandwiches? Why such reckless extravagance in one so young? Who is coming to tea?

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
* 12 A A long pause.
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
* 42 A ¶ Merriman does so, and goes out with footman.
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

### SCENE pd_earnest_5 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, ALGERNON, GWENDOLEN, JACK, MERRIMAN, LADY BRACKNELL
1 D CECILY: To please me you are ready to face this fearful ordeal?
2 D ALGERNON: I am!
3 D GWENDOLEN: How absurd to talk of the equality of the sexes! Where questions of self-sacrifice are concerned, men are infinitely beyond us.
4 D JACK: We are.
* 5 A ¶ Clasps hands with Algernon.
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
* 45 A ¶ TABLEAU

### SCENE pd_sisters_0 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OLGA, MASHA, IRINA, BARON TUZENBACH, CHEBUTIKIN, SOLENI
* 1 A ¶ In PROSOROV’S house.
* 2 A A sitting-room with pillars; behind is seen a large dining-room.
* 3 A It is midday, the sun is shining brightly outside.
* 4 A In the dining-room the table is being laid for lunch.
5 A ¶ OLGA, in the regulation blue dress of a teacher at a girl’s high school, is walking about correcting exercise books; MASHA, in a black dress, with a hat on her knees, sits and reads a book; IRINA, in white, stands about, with a thoughtful expression.
6 D OLGA: It’s just a year since father died last May the fifth, on your name-day, Irina. It was very cold then, and snowing. I thought I would never survive it, and you were in a dead faint. And now a year has gone by and we are already thinking about it without pain, and you are wearing a white dress and your face is happy.
* 7 A ¶ Clock strikes twelve.
8 D OLGA: And the clock struck just the same way then.
* 9 A ¶ Pause.
10 D OLGA: I remember that there was music at the funeral, and they fired a volley in the cemetery. He was a general in command of a brigade but there were few people present. Of course, it was raining then, raining hard, and snowing.
11 D IRINA: Why think about it!
12 A ¶ BARON TUZENBACH, CHEBUTIKIN and SOLENI appear by the table in the dining-room, behind the pillars.
13 D OLGA: It’s so warm to-day that we can keep the windows open, though the birches are not yet in flower. Father was put in command of a brigade, and he rode out of Moscow with us eleven years ago. I remember perfectly that it was early in May and that everything in Moscow was flowering then. It was warm too, everything was bathed in sunshine. Eleven years have gone, and I remember everything as if we rode out only yesterday. Oh, God! When I awoke this morning and saw all the light and the spring, joy entered my heart, and I longed passionately to go home.
14 D CHEBUTIKIN: Will you take a bet on it?
15 D TUZENBACH: Oh, nonsense.
16 A ¶ MASHA, lost in a reverie over her book, whistles softly.
17 D OLGA: Don’t whistle, Masha. How can you!
* 18 A ¶ Pause.
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
* 30 A ¶ Pause.
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

### SCENE pd_sisters_1 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANDREY, MASHA, VERSHININ, IRINA, TUZENBACH
1 D ANDREY: You can come to-morrow and fetch these documents.... Go along....
* 2 A ¶ Pause.
3 D ANDREY: He’s gone.
* 4 A ¶ A ring.
5 D ANDREY: Yes, yes....
6 A ¶ Stretches himself and slowly goes into his own room.
7 A ¶ Behind the scene the nurse is singing a lullaby to the child.
8 A MASHA and VERSHININ come in.
9 A While they talk, a maidservant lights candles and a lamp.
10 D MASHA: I don’t know.
* 11 A ¶ Pause.
12 D MASHA: I don’t know. Of course, habit counts for a great deal. After father’s death, for instance, it took us a long time to get used to the absence of orderlies. But, apart from habit, it seems to me in all fairness that, however it may be in other towns, the best and most-educated people are army men.
13 D VERSHININ: I’m thirsty. I should like some tea.
14 A ¶ Glancing at her watch.
15 D MASHA: They’ll bring some soon. I was given in marriage when I was eighteen, and I was afraid of my husband because he was a teacher and I’d only just left school. He then seemed to me frightfully wise and learned and important. And now, unfortunately, that has changed.
16 D VERSHININ: Yes... yes.
17 D MASHA: I don’t speak of my husband, I’ve grown used to him, but civilians in general are so often coarse, impolite, uneducated. Their rudeness offends me, it angers me. I suffer when I see that a man isn’t quite sufficiently refined, or delicate, or polite. I simply suffer agonies when I happen to be among schoolmasters, my husband’s colleagues.
18 D VERSHININ: Yes.... It seems to me that civilians and army men are equally interesting, in this town, at any rate. It’s all the same! If you listen to a member of the local intelligentsia, whether to civilian or military, he will tell you that he’s sick of his wife, sick of his house, sick of his estate, sick of his horses.... We Russians are extremely gifted in the direction of thinking on an exalted plane, but, tell me, why do we aim so low in real life? Why?
19 D MASHA: Why?
20 D VERSHININ: Why is a Russian sick of his children, sick of his wife? And why are his wife and children sick of him?
21 D MASHA: You’re a little downhearted to-day.
22 D VERSHININ: Perhaps I am. I haven’t had any dinner, I’ve had nothing since the morning. My daughter is a little unwell, and when my girls are ill, I get very anxious and my conscience tortures me because they have such a mother. Oh, if you had seen her to-day! What a trivial personality! We began quarrelling at seven in the morning and at nine I slammed the door and went out.
* 23 A ¶ Pause.
24 D VERSHININ: I never speak of her, it’s strange that I bear my complaints to you alone.
25 A ¶ Kisses her hand.
26 D VERSHININ: Don’t be angry with me. I haven’t anybody but you, nobody at all....
* 27 A ¶ Pause.
28 D MASHA: What a noise in the oven. Just before father’s death there was a noise in the pipe, just like that.
29 D VERSHININ: Are you superstitious?
30 D MASHA: Yes.
31 D VERSHININ: That’s strange.
32 A ¶ Kisses her hand.
33 D VERSHININ: You are a splendid, wonderful woman. Splendid, wonderful! It is dark here, but I see your sparkling eyes.
* 34 A ¶ Sits on another chair.
35 D MASHA: There is more light here.
36 D VERSHININ: I love you, love you, love you... I love your eyes, your movements, I dream of them.... Splendid, wonderful woman!
37 A ¶ Laughing.
38 D MASHA: When you talk to me like that, I laugh; I don’t know why, for I’m afraid. Don’t repeat it, please....
39 A ¶ In an undertone.
40 D MASHA: No, go on, it’s all the same to me....
41 A ¶ Covers her face with her hands.
42 D MASHA: Somebody’s coming, let’s talk about something else.
43 A ¶ IRINA and TUZENBACH come in through the dining-room.
44 D TUZENBACH: My surname is really triple. I am called Baron Tuzenbach-Krone-Altschauer, but I am Russian and Orthodox, the same as you. There is very little German left in me, unless perhaps it is the patience and the obstinacy with which I bore you. I see you home every night.
45 D IRINA: How tired I am!
46 D TUZENBACH: And I’ll come to the telegraph office to see you home every day for ten or twenty years, until you drive me away.
47 A ¶ He sees MASHA and VERSHININ; joyfully.

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
* 12 A ¶ Sighs.
13 D KULIGIN: Yes.... But will it be quite all right for her to take part in a concert?
* 14 A ¶ Pause.
15 D KULIGIN: You see, I don’t know anything about it. Perhaps it will even be all to the good. Although I must admit that our Director is a good man, a very good man even, a very clever man, still he has such views.... Of course it isn’t his business but still, if you wish it, perhaps I’d better talk to him.
16 A ¶ CHEBUTIKIN takes a porcelain clock into his hands and examines it.
17 D VERSHININ: I got so dirty while the fire was on, I don’t look like anybody on earth.
* 18 A ¶ Pause.
19 D VERSHININ: Yesterday I happened to hear, casually, that they want to transfer our brigade to some distant place. Some said to Poland, others, to Chita.
20 D TUZENBACH: I heard so, too. Well, if it is so, the town will be quite empty.
21 D IRINA: And we’ll go away, too!
22 A ¶ Drops the clock which breaks to pieces.
23 D CHEBUTIKIN: To smithereens!
* 24 A ¶ A pause; everybody is pained and confused.
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
* 37 A ¶ Pause.
38 D VERSHININ: When the fire broke out, I hurried off home; when I get there I see the house is whole, uninjured, and in no danger, but my two girls are standing by the door in just their underclothes, their mother isn’t there, the crowd is excited, horses and dogs are running about, and the girls’ faces are so agitated, terrified, beseeching, and I don’t know what else. My heart was pained when I saw those faces. My God, I thought, what these girls will have to put up with if they live long! I caught them up and ran, and still kept on thinking the one thing: what they will have to live through in this world!
* 39 A ¶ Fire-alarm; a pause.
40 D VERSHININ: I come here and find their mother shouting and angry.
41 A ¶ MASHA enters with a pillow and sits on the sofa.
42 D VERSHININ: And when my girls were standing by the door in just their underclothes, and the street was red from the fire, there was a dreadful noise, and I thought that something of the sort used to happen many years ago when an enemy made a sudden attack, and looted, and burned.... And at the same time what a difference there really is between the present and the past! And when a little more time has gone by, in two or three hundred years perhaps, people will look at our present life with just the same fear, and the same contempt, and the whole past will seem clumsy and dull, and very uncomfortable, and strange. Oh, indeed, what a life there will be, what a life!
43 A ¶ Laughs.
44 D VERSHININ: Forgive me, I’ve dropped into philosophy again. Please let me continue. I do awfully want to philosophize, it’s just how I feel at present.
* 45 A ¶ Pause.

### SCENE pd_sisters_3 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANFISA, VERSHININ, IRINA, OLGA, MASHA
1 A ¶ Kisses her.
2 D ANFISA: Well, little girl, here I am, still alive! Still alive! In the High School, together with little Olga, in her official apartments... so the Lord has appointed for my old age. Sinful woman that I am, I’ve never lived like that in my life before.... A large flat, government property, and I’ve a whole room and bed to myself. All government property. I wake up at nights and, oh God, and Holy Mother, there isn’t a happier person than I!
3 A ¶ Looks at his watch.
4 D VERSHININ: We are going soon, Olga Sergeyevna. It’s time for me to go.
* 5 A ¶ Pause.
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
* 21 A ¶ Pause.
22 D VERSHININ: My wife and both my daughters will stay here another two months. If anything happens, or if anything has to be done...
23 D OLGA: Yes, yes, of course. You need not worry.
* 24 A ¶ Pause.
25 D OLGA: To-morrow there won’t be a single soldier left in the town, it will all be a memory, and, of course, for us a new life will begin....
* 26 A ¶ Pause.
27 D OLGA: None of our plans are coming right. I didn’t want to be a head-mistress, but they made me one, all the same. It means there’s no chance of Moscow....
28 D VERSHININ: Well... thank you for everything. Forgive me if I’ve... I’ve said such an awful lot--forgive me for that too, don’t think badly of me.
29 A ¶ Wipes her eyes.
30 D OLGA: Why isn’t Masha coming...
31 D VERSHININ: What else can I say in parting? Can I philosophize about anything?
32 A ¶ Laughs.
33 D VERSHININ: Life is heavy. To many of us it seems dull and hopeless, but still, it must be acknowledged that it is getting lighter and clearer, and it seems that the time is not far off when it will be quite clear.
34 A ¶ Looks at his watch.
35 D VERSHININ: It’s time I went! Mankind used to be absorbed in wars, and all its existence was filled with campaigns, attacks, defeats, now we’ve outlived all that, leaving after us a great waste place, which there is nothing to fill with at present; but mankind is looking for something, and will certainly find it. Oh, if it only happened more quickly.
* 36 A ¶ Pause.
37 D VERSHININ: If only education could be added to industry, and industry to education.
38 A ¶ Looks at his watch.
39 D VERSHININ: It’s time I went....
40 D OLGA: Here she comes.
41 A ¶ Enter MASHA.
42 D VERSHININ: I came to say good-bye....
43 A ¶ OLGA steps aside a little, so as not to be in their way.
44 A ¶ Looking him in the face.
45 D MASHA: Good-bye.

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
* 27 A ¶ Goes to the door.
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
* 39 A ¶ The stage is empty.
* 40 A The sound of keys being turned in the locks is heard, and then the noise of the carriages going away.
* 41 A It is quiet.
* 42 A Then the sound of an axe against the trees is heard in the silence sadly and by itself.
* 43 A Steps are heard.
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
* 58 A The distant sound is heard, as if from the sky, of a breaking string, dying away sadly.
* 59 A Silence follows it, and only the sound is heard, some way away in the orchard, of the axe falling on the trees.

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
* 120 A His chair squeaks on the maple.
121 D ADAEZE: Your Honor, the defense moves for dismissal with prejudice.
122 D JUDGE TRAN: Granted.
123 A ¶ The skate-wheel gavel.
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
* 8 A At the hack, lead ABEBE TESFAYE (20s, rangy, headband) slides out of his delivery, the stone rumbling off, while Dez mouths numbers and Inez sweeps nothing, waiting.
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
71 A It trembles against the saucer.
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
* 1 A ¶ A colossal tortoise, patient as a hill, plods across a salt flat.
* 2 A On its domed shell, a market of striped awnings and lanterns sways to each slow step.
3 A ¶ Five merchants cluster at the crest.
4 A MAEVE THORNWICK (50s, spice-seller, apron stained saffron).
5 A Her apprentice KIT (teens, wiry, a pouch of glass beads).
6 A Rival glassblower DOMINIC ASHFORD (40s, sooty, barrel-chested).
7 A Cloth-weaver LADY ISOLDE (60s, veil of spun silver).
8 A And the market's crier, OLD PERRIN (80s, a hand bell).
* 9 A ¶ The ground trembles.
* 10 A The tortoise slows.
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
* 25 A ¶ The tortoise rises on its legs, lifting the whole market toward the sky.

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
* 13 A Click.
* 14 A Click.
* 15 A Click.
16 A ¶ Between them, on a stool: MRS. PEARL ADEYEMI (70s, church hat, a purse held like a shield).
17 A Their father's oldest friend.
18 A She hasn't taken her coat off.
* 19 A ¶ Click.
* 20 A Click.
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
* 58 A ¶ The whistle shrieks.

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
* 9 A Not pointed.
* 10 A Not far from pointed.
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
