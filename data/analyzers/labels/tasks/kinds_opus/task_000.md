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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0000.json with the Write tool:
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
* 14 D NORA: Hide the Christmas Tree carefully, Helen. Be sure the children do not see it until this evening, when it is dressed.
15 A ¶ To the PORTER, taking out her purse.
* 16 D NORA: How much?
* 17 D PORTER: Sixpence.
* 18 D NORA: There is a shilling. No, keep the change.
19 A ¶ The PORTER thanks her, and goes out.
20 A NORA shuts the door.
21 A She is laughing to herself, as she takes off her hat and coat.
22 A She takes a packet of macaroons from her pocket and eats one or two; then goes cautiously to her husband’s door and listens.
* 23 D NORA: Yes, he is in.
24 A ¶ Still humming, she goes to the table on the right.
25 A ¶ calls out from his room.
* 26 D HELMER: . Is that my little lark twittering out there?
27 A ¶ busy opening some of the parcels.
* 28 D NORA: . Yes, it is!
* 29 D HELMER: Is it my little squirrel bustling about?
* 30 D NORA: Yes!
* 31 D HELMER: When did my squirrel come home?
* 32 D NORA: Just now.
33 A ¶ Puts the bag of macaroons into her pocket and wipes her mouth.
* 34 D NORA: Come in here, Torvald, and see what I have bought.
* 35 D HELMER: Don’t disturb me.
36 A ¶ A little later, he opens the door and looks into the room, pen in hand.
* 37 D HELMER: Bought, did you say? All these things? Has my little spendthrift been wasting money again?
* 38 D NORA: Yes but, Torvald, this year we really can let ourselves go a little. This is the first Christmas that we have not needed to economise.
* 39 D HELMER: Still, you know, we can’t spend money recklessly.
* 40 D NORA: Yes, Torvald, we may be a wee bit more reckless now, mayn’t we? Just a tiny wee bit! You are going to have a big salary and earn lots and lots of money.
* 41 D HELMER: Yes, after the New Year; but then it will be a whole quarter before the salary is due.
* 42 D NORA: Pooh! we can borrow until then.
* 43 D HELMER: Nora!
44 A ¶ Goes up to her and takes her playfully by the ear.
* 45 D HELMER: The same little featherhead! Suppose, now, that I borrowed fifty pounds today, and you spent it all in the Christmas week, and then on New Year’s Eve a slate fell on my head and killed me, and—
46 A ¶ putting her hands over his mouth.
* 47 D NORA: . Oh! don’t say such horrid things.
* 48 D HELMER: Still, suppose that happened,—what then?
* 49 D NORA: If that were to happen, I don’t suppose I should care whether I owed money or not.
* 50 D HELMER: Yes, but what about the people who had lent it?
* 51 D NORA: They? Who would bother about them? I should not know who they were.
* 52 D HELMER: That is like a woman! But seriously, Nora, you know what I think about that. No debt, no borrowing. There can be no freedom or beauty about a home life that depends on borrowing and debt. We two have kept bravely on the straight road so far, and we will go on the same way for the short time longer that there need be any struggle.
53 A ¶ moving towards the stove.
* 54 D NORA: . As you please, Torvald.
55 A ¶ following her.
* 56 D HELMER: . Come, come, my little skylark must not droop her wings. What is this! Is my little squirrel out of temper?
57 A ¶ Taking out his purse.
* 58 D HELMER: Nora, what do you think I have got here?
59 A ¶ turning round quickly.

### SCENE pd_dollhouse_1 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): NORA, MRS LINDE, SERVANT, KROGSTAD
* 1 D NORA: . Yes—someday, perhaps, after many years, when I am no longer as nice-looking as I am now. Don’t laugh at me! I mean, of course, when Torvald is no longer as devoted to me as he is now; when my dancing and dressing-up and reciting have palled on him; then it may be a good thing to have something in reserve—
2 A ¶ Breaking off.
* 3 D NORA: What nonsense! That time will never come. Now, what do you think of my great secret, Christine? Do you still think I am of no use? I can tell you, too, that this affair has caused me a lot of worry. It has been by no means easy for me to meet my engagements punctually. I may tell you that there is something that is called, in business, quarterly interest, and another thing called payment in installments, and it is always so dreadfully difficult to manage them. I have had to save a little here and there, where I could, you understand. I have not been able to put aside much from my housekeeping money, for Torvald must have a good table. I couldn’t let my children be shabbily dressed; I have felt obliged to use up all he gave me for them, the sweet little darlings!
* 4 D MRS LINDE: So it has all had to come out of your own necessaries of life, poor Nora?
* 5 D NORA: Of course. Besides, I was the one responsible for it. Whenever Torvald has given me money for new dresses and such things, I have never spent more than half of it; I have always bought the simplest and cheapest things. Thank Heaven, any clothes look well on me, and so Torvald has never noticed it. But it was often very hard on me, Christine—because it is delightful to be really well dressed, isn’t it?
* 6 D MRS LINDE: Quite so.
* 7 D NORA: Well, then I have found other ways of earning money. Last winter I was lucky enough to get a lot of copying to do; so I locked myself up and sat writing every evening until quite late at night. Many a time I was desperately tired; but all the same it was a tremendous pleasure to sit there working and earning money. It was like being a man.
* 8 D MRS LINDE: How much have you been able to pay off in that way?
* 9 D NORA: I can’t tell you exactly. You see, it is very difficult to keep an account of a business matter of that kind. I only know that I have paid every penny that I could scrape together. Many a time I was at my wits’ end.
10 A ¶ Smiles.
* 11 D NORA: Then I used to sit here and imagine that a rich old gentleman had fallen in love with me—
* 12 D MRS LINDE: What! Who was it?
* 13 D NORA: Be quiet!—that he had died; and that when his will was opened it contained, written in big letters, the instruction: “The lovely Mrs Nora Helmer is to have all I possess paid over to her at once in cash.”
* 14 D MRS LINDE: But, my dear Nora—who could the man be?
* 15 D NORA: Good gracious, can’t you understand? There was no old gentleman at all; it was only something that I used to sit here and imagine, when I couldn’t think of any way of procuring money. But it’s all the same now; the tiresome old person can stay where he is, as far as I am concerned; I don’t care about him or his will either, for I am free from care now.
16 A ¶ Jumps up.
* 17 D NORA: My goodness, it’s delightful to think of, Christine! Free from care! To be able to be free from care, quite free from care; to be able to play and romp with the children; to be able to keep the house beautifully and have everything just as Torvald likes it! And, think of it, soon the spring will come and the big blue sky! Perhaps we shall be able to take a little trip—perhaps I shall see the sea again! Oh, it’s a wonderful thing to be alive and be happy.
* 18 A ¶ A bell is heard in the hall.
19 A ¶ rising.
* 20 D MRS LINDE: . There is the bell; perhaps I had better go.
* 21 D NORA: No, don’t go; no one will come in here; it is sure to be for Torvald.
22 A ¶ at the hall door.
* 23 D SERVANT: . Excuse me, ma’am—there is a gentleman to see the master, and as the doctor is with him—
* 24 D NORA: Who is it?
25 A ¶ at the door.
* 26 D KROGSTAD: . It is I, Mrs Helmer.
27 A ¶ Mrs LINDE starts, trembles, and turns to the window.
28 A ¶ takes a step towards him, and speaks in a strained, low voice.
* 29 D NORA: . You? What is it? What do you want to see my husband about?
* 30 D KROGSTAD: Bank business—in a way. I have a small post in the Bank, and I hear your husband is to be our chief now—
* 31 D NORA: Then it is—
* 32 D KROGSTAD: Nothing but dry business matters, Mrs Helmer; absolutely nothing else.
* 33 D NORA: Be so good as to go into the study, then.
34 A ¶ She bows indifferently to him and shuts the door into the hall; then comes back and makes up the fire in the stove.
* 35 D MRS LINDE: Nora—who was that man?
* 36 D NORA: A lawyer, of the name of Krogstad.
* 37 D MRS LINDE: Then it really was he.
* 38 D NORA: Do you know the man?
* 39 D MRS LINDE: I used to—many years ago. At one time he was a solicitor’s clerk in our town.
* 40 D NORA: Yes, he was.
* 41 D MRS LINDE: He is greatly altered.
* 42 D NORA: He made a very unhappy marriage.
* 43 D MRS LINDE: He is a widower now, isn’t he?
* 44 D NORA: With several children. There now, it is burning up.
45 A ¶ Shuts the door of the stove and moves the rocking-chair aside.

### SCENE pd_dollhouse_2 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE CHILDREN, NORA, MAID, HELMER
* 1 D THE CHILDREN: . Mother, the stranger man has gone out through the gate.
* 2 D NORA: Yes, dears, I know. But, don’t tell anyone about the stranger man. Do you hear? Not even papa.
* 3 D CHILDREN: No, mother; but will you come and play again?
* 4 D NORA: No, no,—not now.
* 5 D CHILDREN: But, mother, you promised us.
* 6 D NORA: Yes, but I can’t now. Run away in; I have such a lot to do. Run away in, my sweet little darlings.
7 A ¶ She gets them into the room by degrees and shuts the door on them; then sits down on the sofa, takes up a piece of needlework and sews a few stitches, but soon stops.
* 8 D NORA: No!
9 A ¶ Throws down the work, gets up, goes to the hall door and calls out.
* 10 D NORA: Helen! bring the Tree in.
11 A ¶ Goes to the table on the left, opens a drawer, and stops again.
* 12 D NORA: No, no! it is quite impossible!
13 A ¶ coming in with the Tree.
* 14 D MAID: . Where shall I put it, ma’am?
* 15 D NORA: Here, in the middle of the floor.
* 16 D MAID: Shall I get you anything else?
* 17 D NORA: No, thank you. I have all I want.
18 A ¶ Exit MAID.
19 A ¶ begins dressing the tree.
* 20 D NORA: . A candle here-and flowers here—The horrible man! It’s all nonsense—there’s nothing wrong. The tree shall be splendid! I will do everything I can think of to please you, Torvald!—I will sing for you, dance for you—
21 A ¶ HELMER comes in with some papers under his arm.
* 22 D NORA: Oh! are you back already?
* 23 D HELMER: Yes. Has anyone been here?
* 24 D NORA: Here? No.
* 25 D HELMER: That is strange. I saw Krogstad going out of the gate.
* 26 D NORA: Did you? Oh yes, I forgot, Krogstad was here for a moment.
* 27 D HELMER: Nora, I can see from your manner that he has been here begging you to say a good word for him.
* 28 D NORA: Yes.
* 29 D HELMER: And you were to appear to do it of your own accord; you were to conceal from me the fact of his having been here; didn’t he beg that of you too?
* 30 D NORA: Yes, Torvald, but—
* 31 D HELMER: Nora, Nora, and you would be a party to that sort of thing? To have any talk with a man like that, and give him any sort of promise? And to tell me a lie into the bargain?
* 32 D NORA: A lie—?
* 33 D HELMER: Didn’t you tell me no one had been here?
34 A ¶ Shakes his finger at her.
* 35 D HELMER: My little songbird must never do that again. A songbird must have a clean beak to chirp with—no false notes!
36 A ¶ Puts his arm round her waist.
* 37 D HELMER: That is so, isn’t it? Yes, I am sure it is.
38 A ¶ Lets her go.
* 39 D HELMER: We will say no more about it.
40 A ¶ Sits down by the stove.
* 41 D HELMER: How warm and snug it is here!
42 A ¶ Turns over his papers.
43 A ¶ after a short pause, during which she busies herself with the Christmas Tree.
* 44 D NORA: Torvald!
* 45 D HELMER: Yes.

### SCENE pd_dollhouse_3 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HELMER, NORA, RANK
* 1 D HELMER: That’s right. Well, we will share it, Nora, as man and wife should. That is how it shall be.
2 A ¶ Caressing her.
* 3 D HELMER: Are you content now? There! There!—not these frightened dove’s eyes! The whole thing is only the wildest fancy!—Now, you must go and play through the Tarantella and practise with your tambourine. I shall go into the inner office and shut the door, and I shall hear nothing; you can make as much noise as you please.
4 A ¶ Turns back at the door.
* 5 D HELMER: And when Rank comes, tell him where he will find me.
6 A ¶ Nods to her, takes his papers and goes into his room, and shuts the door after him.
7 A ¶ bewildered with anxiety, stands as if rooted to the spot, and whispers.
* 8 D NORA: . He was capable of doing it. He will do it. He will do it in spite of everything.—No, not that! Never, never! Anything rather than that! Oh, for some help, some way out of it!
* 9 A ¶ The door-bell rings.
* 10 D NORA: Doctor Rank! Anything rather than that—anything, whatever it is!
11 A ¶ She puts her hands over her face, pulls herself together, goes to the door and opens it.
12 A RANK is standing without, hanging up his coat.
* 13 A During the following dialogue it begins to grow dark.
* 14 D NORA: Good day, Doctor Rank. I knew your ring. But you mustn’t go in to Torvald now; I think he is busy with something.
* 15 D RANK: And you?
16 A ¶ brings him in and shuts the door after him.
* 17 D NORA: . Oh, you know very well I always have time for you.
* 18 D RANK: Thank you. I shall make use of as much of it as I can.
* 19 D NORA: What do you mean by that? As much of it as you can?
* 20 D RANK: Well, does that alarm you?
* 21 D NORA: It was such a strange way of putting it. Is anything likely to happen?
* 22 D RANK: Nothing but what I have long been prepared for. But I certainly didn’t expect it to happen so soon.
23 A ¶ gripping him by the arm.
* 24 D NORA: . What have you found out? Doctor Rank, you must tell me.
25 A ¶ sitting down by the stove.
* 26 D RANK: . It is all up with me. And it can’t be helped.
27 A ¶ with a sigh of relief.
* 28 D NORA: . Is it about yourself?
* 29 D RANK: Who else? It is no use lying to one’s self. I am the most wretched of all my patients, Mrs Helmer. Lately I have been taking stock of my internal economy. Bankrupt! Probably within a month I shall lie rotting in the churchyard.
* 30 D NORA: What an ugly thing to say!
* 31 D RANK: The thing itself is cursedly ugly, and the worst of it is that I shall have to face so much more that is ugly before that. I shall only make one more examination of myself; when I have done that, I shall know pretty certainly when it will be that the horrors of dissolution will begin. There is something I want to tell you. Helmer’s refined nature gives him an unconquerable disgust at everything that is ugly; I won’t have him in my sick-room.
* 32 D NORA: Oh, but, Doctor Rank—
* 33 D RANK: I won’t have him there. Not on any account. I bar my door to him. As soon as I am quite certain that the worst has come, I shall send you my card with a black cross on it, and then you will know that the loathsome end has begun.
* 34 D NORA: You are quite absurd today. And I wanted you so much to be in a really good humour.
* 35 D RANK: With death stalking beside me?—To have to pay this penalty for another man’s sin? Is there any justice in that? And in every single family, in one way or another, some such inexorable retribution is being exacted—
36 A ¶ putting her hands over her ears.
* 37 D NORA: . Rubbish! Do talk of something cheerful.
* 38 D RANK: Oh, it’s a mere laughing matter, the whole thing. My poor innocent spine has to suffer for my father’s youthful amusements.
39 A ¶ sitting at the table on the left.
* 40 D NORA: . I suppose you mean that he was too partial to asparagus and pate de foie gras, don’t you?
* 41 D RANK: Yes, and to truffles.
* 42 D NORA: Truffles, yes. And oysters too, I suppose?
* 43 D RANK: Oysters, of course, that goes without saying.
* 44 D NORA: And heaps of port and champagne. It is sad that all these nice things should take their revenge on our bones.
* 45 D RANK: Especially that they should revenge themselves on the unlucky bones of those who have not had the satisfaction of enjoying them.
* 46 D NORA: Yes, that’s the saddest part of it all.
47 A ¶ with a searching look at her.

### SCENE pd_dollhouse_4 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS LINDE, NORA, HELMER, RANK
* 1 D MRS LINDE: And your husband keeps the key?
* 2 D NORA: Yes, always.
* 3 D MRS LINDE: Krogstad must ask for his letter back unread, he must find some pretence—
* 4 D NORA: But it is just at this time that Torvald generally—
* 5 D MRS LINDE: You must delay him. Go in to him in the meantime. I will come back as soon as I can.
6 A ¶ She goes out hurriedly through the hall door.
7 A ¶ goes to HELMER’S door, opens it and peeps in.
* 8 D NORA: . Torvald!
9 A ¶ from the inner room.
* 10 D HELMER: . Well? May I venture at last to come into my own room again? Come along, Rank, now you will see—
11 A ¶ Halting in the doorway.
* 12 D HELMER: But what is this?
* 13 D NORA: What is what, dear?
* 14 D HELMER: Rank led me to expect a splendid transformation.
15 A ¶ in the doorway.
* 16 D RANK: . I understood so, but evidently I was mistaken.
* 17 D NORA: Yes, nobody is to have the chance of admiring me in my dress until tomorrow.
* 18 D HELMER: But, my dear Nora, you look so worn out. Have you been practising too much?
* 19 D NORA: No, I have not practised at all.
* 20 D HELMER: But you will need to—
* 21 D NORA: Yes, indeed I shall, Torvald. But I can’t get on a bit without you to help me; I have absolutely forgotten the whole thing.
* 22 D HELMER: Oh, we will soon work it up again.
* 23 D NORA: Yes, help me, Torvald. Promise that you will! I am so nervous about it—all the people—. You must give yourself up to me entirely this evening. Not the tiniest bit of business—you mustn’t even take a pen in your hand. Will you promise, Torvald dear?
* 24 D HELMER: I promise. This evening I will be wholly and absolutely at your service, you helpless little mortal. Ah, by the way, first of all I will just—
25 A ¶ Goes towards the hall door.
* 26 D NORA: What are you going to do there?
* 27 D HELMER: Only see if any letters have come.
* 28 D NORA: No, no! don’t do that, Torvald!
* 29 D HELMER: Why not?
* 30 D NORA: Torvald, please don’t. There is nothing there.
* 31 D HELMER: Well, let me look.
32 A ¶ Turns to go to the letter-box.
33 A NORA, at the piano, plays the first bars of the Tarantella.
34 A HELMER stops in the doorway.
* 35 D HELMER: Aha!
* 36 D NORA: I can’t dance tomorrow if I don’t practise with you.
37 A ¶ going up to her.
* 38 D HELMER: . Are you really so afraid of it, dear?
* 39 D NORA: Yes, so dreadfully afraid of it. Let me practise at once; there is time now, before we go to dinner. Sit down and play for me, Torvald dear; criticise me, and correct me as you play.
* 40 D HELMER: With great pleasure, if you wish me to.
41 A ¶ Sits down at the piano.
42 A ¶ takes out of the box a tambourine and a long variegated shawl.
43 A She hastily drapes the shawl round her.
44 A Then she springs to the front of the stage and calls out.
* 45 D NORA: . Now play for me! I am going to dance!
46 A ¶ HELMER plays and NORA dances.
47 A RANK stands by the piano behind HELMER, and looks on.
48 A ¶ as he plays.
* 49 D HELMER: . Slower, slower!
* 50 D NORA: I can’t do it any other way.

### SCENE pd_dollhouse_5 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): RANK, HELMER, NORA
1 A ¶ outside.
* 2 D RANK: . It is I. May I come in for a moment?
3 A ¶ in a fretful whisper.
* 4 D HELMER: . Oh, what does he want now?
5 A ¶ Aloud.
* 6 D HELMER: Wait a minute!
7 A ¶ Unlocks the door.
* 8 D HELMER: Come, that’s kind of you not to pass by our door.
* 9 D RANK: I thought I heard your voice, and felt as if I should like to look in.
10 A ¶ With a swift glance round.
* 11 D RANK: Ah, yes!—these dear familiar rooms. You are very happy and cosy in here, you two.
* 12 D HELMER: It seems to me that you looked after yourself pretty well upstairs too.
* 13 D RANK: Excellently. Why shouldn’t I? Why shouldn’t one enjoy everything in this world?—at any rate as much as one can, and as long as one can. The wine was capital—
* 14 D HELMER: Especially the champagne.
* 15 D RANK: So you noticed that too? It is almost incredible how much I managed to put away!
* 16 D NORA: Torvald drank a great deal of champagne tonight too.
* 17 D RANK: Did he?
* 18 D NORA: Yes, and he is always in such good spirits afterwards.
* 19 D RANK: Well, why should one not enjoy a merry evening after a well-spent day?
* 20 D HELMER: Well spent? I am afraid I can’t take credit for that.
21 A ¶ clapping him on the back.
* 22 D RANK: . But I can, you know!
* 23 D NORA: Doctor Rank, you must have been occupied with some scientific investigation today.
* 24 D RANK: Exactly.
* 25 D HELMER: Just listen!—little Nora talking about scientific investigations!
* 26 D NORA: And may I congratulate you on the result?
* 27 D RANK: Indeed you may.
* 28 D NORA: Was it favourable, then?
* 29 D RANK: The best possible, for both doctor and patient—certainty.
30 A ¶ quickly and searchingly.
* 31 D NORA: . Certainty?
* 32 D RANK: Absolute certainty. So wasn’t I entitled to make a merry evening of it after that?
* 33 D NORA: Yes, you certainly were, Doctor Rank.
* 34 D HELMER: I think so too, so long as you don’t have to pay for it in the morning.
* 35 D RANK: Oh well, one can’t have anything in this life without paying for it.
* 36 D NORA: Doctor Rank—are you fond of fancy-dress balls?
* 37 D RANK: Yes, if there is a fine lot of pretty costumes.
* 38 D NORA: Tell me—what shall we two wear at the next?
* 39 D HELMER: Little featherbrain!—are you thinking of the next already?
* 40 D RANK: We two? Yes, I can tell you. You shall go as a good fairy—
* 41 D HELMER: Yes, but what do you suggest as an appropriate costume for that?
* 42 D RANK: Let your wife go dressed just as she is in everyday life.
* 43 D HELMER: That was really very prettily turned. But can’t you tell us what you will be?
* 44 D RANK: Yes, my dear friend, I have quite made up my mind about that.
* 45 D HELMER: Well?

### SCENE pd_dollhouse_6 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HELMER, NORA
* 1 D HELMER: I have it in me to become a different man.
* 2 D NORA: Perhaps—if your doll is taken away from you.
* 3 D HELMER: But to part!—to part from you! No, no, Nora, I can’t understand that idea.
4 A ¶ going out to the right.
* 5 D NORA: . That makes it all the more certain that it must be done.
6 A ¶ She comes back with her cloak and hat and a small bag which she puts on a chair by the table.
* 7 D HELMER: Nora, Nora, not now! Wait until tomorrow.
8 A ¶ putting on her cloak.
* 9 D NORA: . I cannot spend the night in a strange man’s room.
* 10 D HELMER: But can’t we live here like brother and sister—?
11 A ¶ putting on her hat.
* 12 D NORA: . You know very well that would not last long.
13 A ¶ Puts the shawl round her.
* 14 D NORA: Goodbye, Torvald. I won’t see the little ones. I know they are in better hands than mine. As I am now, I can be of no use to them.
* 15 D HELMER: But some day, Nora—some day?
* 16 D NORA: How can I tell? I have no idea what is going to become of me.
* 17 D HELMER: But you are my wife, whatever becomes of you.
* 18 D NORA: Listen, Torvald. I have heard that when a wife deserts her husband’s house, as I am doing now, he is legally freed from all obligations towards her. In any case, I set you free from all your obligations. You are not to feel yourself bound in the slightest way, any more than I shall. There must be perfect freedom on both sides. See, here is your ring back. Give me mine.
* 19 D HELMER: That too?
* 20 D NORA: That too.
* 21 D HELMER: Here it is.
* 22 D NORA: That’s right. Now it is all over. I have put the keys here. The maids know all about everything in the house—better than I do. Tomorrow, after I have left her, Christine will come here and pack up my own things that I brought with me from home. I will have them sent after me.
* 23 D HELMER: All over! All over!—Nora, shall you never think of me again?
* 24 D NORA: I know I shall often think of you, the children, and this house.
* 25 D HELMER: May I write to you, Nora?
* 26 D NORA: No—never. You must not do that.
* 27 D HELMER: But at least let me send you—
* 28 D NORA: Nothing—nothing—
* 29 D HELMER: Let me help you if you are in want.
* 30 D NORA: No. I can receive nothing from a stranger.
* 31 D HELMER: Nora—can I never be anything more than a stranger to you?
32 A ¶ taking her bag.
* 33 D NORA: . Ah, Torvald, the most wonderful thing of all would have to happen.
* 34 D HELMER: Tell me what that would be!
* 35 D NORA: Both you and I would have to be so changed that—. Oh, Torvald, I don’t believe any longer in wonderful things happening.
* 36 D HELMER: But I will believe in it. Tell me! So changed that—?
* 37 D NORA: That our life together would be a real wedlock. Goodbye.
38 A ¶ She goes out through the hall.
39 A ¶ sinks down on a chair at the door and buries his face in his hands.
* 40 D HELMER: . Nora! Nora!
41 A ¶ Looks round, and rises.
* 42 D HELMER: Empty. She is gone.
43 A ¶ A hope flashes across his mind.
* 44 D HELMER: The most wonderful thing of all—?
* 45 A ¶ The sound of a door shutting is heard from below.

### SCENE pd_earnest_0 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): ALGERNON, LANE, JACK
* 1 A ¶ Morning-room in Algernon’s flat in Half-Moon Street.
* 2 A The room is luxuriously and artistically furnished.
* 3 A The sound of a piano is heard in the adjoining room.
4 A ¶ Lane is arranging afternoon tea on the table, and after the music has ceased, Algernon enters.
* 5 D ALGERNON: Did you hear what I was playing, Lane?
* 6 D LANE: I didn’t think it polite to listen, sir.
* 7 D ALGERNON: I’m sorry for that, for your sake. I don’t play accurately—any one can play accurately—but I play with wonderful expression. As far as the piano is concerned, sentiment is my forte. I keep science for Life.
* 8 D LANE: Yes, sir.
* 9 D ALGERNON: And, speaking of the science of Life, have you got the cucumber sandwiches cut for Lady Bracknell?
* 10 D LANE: Yes, sir.
11 A ¶ Hands them on a salver.
12 A ¶ Inspects them, takes two, and sits down on the sofa.
* 13 D ALGERNON: Oh! . . . by the way, Lane, I see from your book that on Thursday night, when Lord Shoreman and Mr. Worthing were dining with me, eight bottles of champagne are entered as having been consumed.
* 14 D LANE: Yes, sir; eight bottles and a pint.
* 15 D ALGERNON: Why is it that at a bachelor’s establishment the servants invariably drink the champagne? I ask merely for information.
* 16 D LANE: I attribute it to the superior quality of the wine, sir. I have often observed that in married households the champagne is rarely of a first-rate brand.
* 17 D ALGERNON: Good heavens! Is marriage so demoralising as that?
* 18 D LANE: I believe it is a very pleasant state, sir. I have had very little experience of it myself up to the present. I have only been married once. That was in consequence of a misunderstanding between myself and a young person.
19 A ¶ Languidly .
* 20 D ALGERNON: I don’t know that I am much interested in your family life, Lane.
* 21 D LANE: No, sir; it is not a very interesting subject. I never think of it myself.
* 22 D ALGERNON: Very natural, I am sure. That will do, Lane, thank you.
* 23 D LANE: Thank you, sir.
24 A ¶ Lane goes out.
* 25 D ALGERNON: Lane’s views on marriage seem somewhat lax. Really, if the lower orders don’t set us a good example, what on earth is the use of them? They seem, as a class, to have absolutely no sense of moral responsibility.
26 A ¶ Enter Lane.
* 27 D LANE: Mr. Ernest Worthing.
28 A ¶ Enter Jack.
29 A ¶ Lane goes out .
* 30 D ALGERNON: How are you, my dear Ernest? What brings you up to town?
* 31 D JACK: Oh, pleasure, pleasure! What else should bring one anywhere? Eating as usual, I see, Algy!
32 A ¶ Stiffly .
* 33 D ALGERNON: I believe it is customary in good society to take some slight refreshment at five o’clock. Where have you been since last Thursday?
34 A ¶ Sitting down on the sofa.
* 35 D JACK: In the country.
* 36 D ALGERNON: What on earth do you do there?
37 A ¶ Pulling off his gloves .
* 38 D JACK: When one is in town one amuses oneself. When one is in the country one amuses other people. It is excessively boring.
* 39 D ALGERNON: And who are the people you amuse?
40 A ¶ Airily .
* 41 D JACK: Oh, neighbours, neighbours.
* 42 D ALGERNON: Got nice neighbours in your part of Shropshire?
* 43 D JACK: Perfectly horrid! Never speak to one of them.
* 44 D ALGERNON: How immensely you must amuse them!
* 45 A ¶ Goes over and takes sandwich.
* 46 D ALGERNON: By the way, Shropshire is your county, is it not?
* 47 D JACK: Eh? Shropshire? Yes, of course. Hallo! Why all these cups? Why cucumber sandwiches? Why such reckless extravagance in one so young? Who is coming to tea?

### SCENE pd_earnest_1 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): JACK, GWENDOLEN, LADY BRACKNELL
* 1 D JACK: You really love me, Gwendolen?
* 2 D GWENDOLEN: Passionately!
* 3 D JACK: Darling! You don’t know how happy you’ve made me.
* 4 D GWENDOLEN: My own Ernest!
* 5 D JACK: But you don’t really mean to say that you couldn’t love me if my name wasn’t Ernest?
* 6 D GWENDOLEN: But your name is Ernest.
* 7 D JACK: Yes, I know it is. But supposing it was something else? Do you mean to say you couldn’t love me then?
8 A ¶ Glibly.
* 9 D GWENDOLEN: Ah! that is clearly a metaphysical speculation, and like most metaphysical speculations has very little reference at all to the actual facts of real life, as we know them.
* 10 D JACK: Personally, darling, to speak quite candidly, I don’t much care about the name of Ernest . . . I don’t think the name suits me at all.
* 11 D GWENDOLEN: It suits you perfectly. It is a divine name. It has a music of its own. It produces vibrations.
* 12 D JACK: Well, really, Gwendolen, I must say that I think there are lots of other much nicer names. I think Jack, for instance, a charming name.
* 13 D GWENDOLEN: Jack? . . . No, there is very little music in the name Jack, if any at all, indeed. It does not thrill. It produces absolutely no vibrations . . . I have known several Jacks, and they all, without exception, were more than usually plain. Besides, Jack is a notorious domesticity for John! And I pity any woman who is married to a man called John. She would probably never be allowed to know the entrancing pleasure of a single moment’s solitude. The only really safe name is Ernest.
* 14 D JACK: Gwendolen, I must get christened at once—I mean we must get married at once. There is no time to be lost.
* 15 D GWENDOLEN: Married, Mr. Worthing?
16 A ¶ Astounded.
* 17 D JACK: Well . . . surely. You know that I love you, and you led me to believe, Miss Fairfax, that you were not absolutely indifferent to me.
* 18 D GWENDOLEN: I adore you. But you haven’t proposed to me yet. Nothing has been said at all about marriage. The subject has not even been touched on.
* 19 D JACK: Well . . . may I propose to you now?
* 20 D GWENDOLEN: I think it would be an admirable opportunity. And to spare you any possible disappointment, Mr. Worthing, I think it only fair to tell you quite frankly before-hand that I am fully determined to accept you.
* 21 D JACK: Gwendolen!
* 22 D GWENDOLEN: Yes, Mr. Worthing, what have you got to say to me?
* 23 D JACK: You know what I have got to say to you.
* 24 D GWENDOLEN: Yes, but you don’t say it.
* 25 D JACK: Gwendolen, will you marry me?
26 A ¶ Goes on his knees.
* 27 D GWENDOLEN: Of course I will, darling. How long you have been about it! I am afraid you have had very little experience in how to propose.
* 28 D JACK: My own one, I have never loved any one in the world but you.
* 29 D GWENDOLEN: Yes, but men often propose for practice. I know my brother Gerald does. All my girl-friends tell me so. What wonderfully blue eyes you have, Ernest! They are quite, quite, blue. I hope you will always look at me just like that, especially when there are other people present.
30 A ¶ Enter Lady Bracknell.
* 31 D LADY BRACKNELL: Mr. Worthing! Rise, sir, from this semi-recumbent posture. It is most indecorous.
* 32 D GWENDOLEN: Mamma!
33 A ¶ He tries to rise; she restrains him.
* 34 D GWENDOLEN: I must beg you to retire. This is no place for you. Besides, Mr. Worthing has not quite finished yet.
* 35 D LADY BRACKNELL: Finished what, may I ask?
* 36 D GWENDOLEN: I am engaged to Mr. Worthing, mamma.
37 A ¶ They rise together.
* 38 D LADY BRACKNELL: Pardon me, you are not engaged to any one. When you do become engaged to some one, I, or your father, should his health permit him, will inform you of the fact. An engagement should come on a young girl as a surprise, pleasant or unpleasant, as the case may be. It is hardly a matter that she could be allowed to arrange for herself . . . And now I have a few questions to put to you, Mr. Worthing. While I am making these inquiries, you, Gwendolen, will wait for me below in the carriage.
39 A ¶ Reproachfully.
* 40 D GWENDOLEN: Mamma!
* 41 D LADY BRACKNELL: In the carriage, Gwendolen!
42 A ¶ Gwendolen goes to the door.
43 A She and Jack blow kisses to each other behind Lady Bracknell’s back.
44 A Lady Bracknell looks vaguely about as if she could not understand what the noise was.
45 A Finally turns round.
* 46 D LADY BRACKNELL: Gwendolen, the carriage!
* 47 D GWENDOLEN: Yes, mamma.
48 A ¶ Goes out, looking back at Jack.
