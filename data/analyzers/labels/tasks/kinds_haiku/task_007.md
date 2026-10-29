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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0107.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s00011 | INT. DECOMMISSIONED GRAIN ELEVATOR - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE OKAFOR, BARNABY QUILL, DELPHINE ROUSSEAU-ADEYEMI
* 1 A ¶ Dust hangs in the shafts of light that fall through the old hopper doors.
* 2 A Forty desks have been dropped onto the concrete in neat rows, and every one of them faces a wall of corrugated steel painted the cheerful green of a hospital.
3 A ¶ PRUDENCE OKAFOR (50s, cardigan buttoned to the throat, lanyard heavy with laminated cards) stands before a whiteboard and caps and uncaps a marker, caps and uncaps it, as if the sound were a metronome for the room.
4 A ¶ At the front desk sit BARNABY QUILL (30s, a tie knotted tight enough to be a verdict) and DELPHINE ROUSSEAU-ADEYEMI (late 20s, headphones around her neck, one earbud in, a half-eaten yogurt sweating at her elbow).
5 D PRUDENCE: The Synergy Taskforce has decided, after consultation, that the synergy is insufficient.
6 A ¶ Barnaby nods before she finishes.
7 A Delphine peels the yogurt lid back, licks it, folds it into a perfect small square.
8 D BARNABY: Insufficient in which direction?
9 D PRUDENCE: Directionally.
10 A ¶ She writes the word DIRECTIONALLY on the whiteboard.
11 A Underlines it twice.
* 12 A The marker squeaks and dies mid-line.
13 A She looks at it with great tenderness, then sets it in the tray as if laying down a child.
14 D DELPHINE: Is this the meeting about the meeting?
15 D PRUDENCE: This is the meeting about the meeting about the meeting.
16 A ¶ Barnaby and Delphine both reach for the same pen at the same instant.
17 A Their fingers touch.
18 A They both withdraw, Barnaby smoothing his tie, Delphine tucking a strand of hair behind her ear, each looking determinedly at a different corner of the ceiling.
* 19 A ¶ Somewhere above them, a pigeon walks across a rafter and drops something.
* 20 A It lands on the carpet tile beside Prudence's shoe.
21 A All three look down at it.
22 A All three look up again.
23 D PRUDENCE [CONT'D]: We'll take that offline.
24 D BARNABY: I'll circulate a note.
25 D DELPHINE: I'll bring a mop.
26 D PRUDENCE: Please do not bring a mop. Mops are a Facilities line item.
27 A ¶ Delphine slowly pulls the earbud out and lays it on the desk beside the yogurt lid.
28 A She straightens it.
29 A Squares it to the edge.
30 A ¶ Prudence picks up a fresh marker.
31 A Holds it.
32 A Does not uncap it.
33 D PRUDENCE [CONT'D]: Barnaby. Your quarterly deck. Is it ready?
34 D BARNABY: It is in a state of readiness.
35 A ¶ He opens his laptop.
* 36 A The screen glows.
* 37 A On it, a single slide: a pie chart, entirely one colour.
38 A He angles the lid down a few degrees, and the three of them stand there in the green light of the hopper doors, pretending not to see it.
39 D PRUDENCE: Excellent.
40 A ¶ She writes ACTION ITEMS on the whiteboard.
* 41 A Under it, nothing.
42 A She stands back and admires the nothing.
43 D DELPHINE: Do I get a lanyard?
44 D PRUDENCE: After the review.
45 D DELPHINE: Which review?
46 D PRUDENCE: The one we are about to schedule.
47 A ¶ Barnaby and Delphine rise together, chairs scraping in unison, and file toward the elevator door that has not worked since 1987.
48 A They arrive at it.
49 A They stop.
50 A They stand side by side, facing steel, and wait.

### SCENE s00012 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): BIRGITTA LUNDQVIST, TOBIAS, GIRL, NOOR, MAN
* 1 A ¶ Fluorescent tubes buzz over a row of dryers, half of them spinning.
* 2 A Rain streaks the front glass.
* 3 A A vending machine hums in the corner.
4 A ¶ BIRGITTA LUNDQVIST (30s, scrubs under a raincoat, tired eyes) feeds quarters into a dryer.
5 A Her son TOBIAS (8, pajamas, rain boots on the wrong feet) sits on a folding table swinging his legs and holding a plastic dinosaur.
6 A Against the wall, a GIRL (10, school uniform, backpack on both shoulders) sits alone with a library book and does not look up.
7 D TOBIAS: Mom, why is it taking so long?
8 D BIRGITTA: Because it's wet, bud.
9 D TOBIAS: Everything's wet. It's raining.
10 A ¶ Birgitta laughs, a short breath of a laugh.
11 A She shuts the dryer door and presses the button.
* 12 A The drum begins to turn.
13 A Tobias hops down, wanders to the vending machine, and presses his nose to the glass while Birgitta checks her phone, frowns at it, and turns the screen face-down on the table, and the Girl, without lifting her eyes from the page, turns one page over.
14 D TOBIAS [CONT'D]: Can I get the gummy ones?
15 D BIRGITTA: It's ten at night.
16 D TOBIAS: It's eleven. The clock says.
17 A ¶ Birgitta looks at the clock.
* 18 A He's right.
19 A She sighs and digs in her pocket for coins.
20 A ¶ Tobias carries his dinosaur over to the Girl and holds it out, nose-first, a ceremonial offering.
21 D TOBIAS [CONT'D]: This is Gary. He's a stegosaurus.
22 A ¶ The Girl looks up.
23 A A long, measuring look.
24 A Then she takes Gary and studies his plates.
25 D GIRL: Stegosaurs had tiny brains.
26 D TOBIAS: Gary's smart.
27 D GIRL: Then he's not a stegosaurus.
28 A ¶ Tobias considers this, deeply wounded, and turns to his mother for ruling.
29 A Birgitta crosses over, dropping her coins into the machine on the way, the machine clunking out a bag of gummies, and kneels between the two children.
30 D BIRGITTA: Hey. Where are your parents?
31 A ¶ The Girl closes her book on her finger.
32 D GIRL: My dad's coming. He's parking.
33 D BIRGITTA: It's been an hour.
34 D GIRL: It's a hard lot to park in.
35 A ¶ Birgitta looks toward the glass.
* 36 A The lot outside is empty except for her own car, rain bouncing off the hood.
37 D BIRGITTA: What's your name, sweetheart?
38 D GIRL: Noor.
39 D BIRGITTA: Noor, I'm going to call someone to help us find your dad. Okay?
40 A ¶ Noor's face changes.
41 A Her shoulders come up.
42 A She grabs her backpack straps in both fists.
43 D NOOR: Don't. He'll be mad. I'm not supposed to tell people where we live.
44 D BIRGITTA: I don't need to know where you live.
45 D NOOR: Then who are you calling?
* 46 A ¶ The front door BANGS open.
47 A A MAN (40s, wet work jacket, breathing hard) stands in the doorway scanning the room.
48 A He sees Noor.
49 A Everything in his posture collapses at once.
50 A Tobias, startled, drops the gummies.
51 A Birgitta rises in front of both children.
52 D MAN: Noor.
53 D NOOR: Dad.
54 A ¶ She runs to him.
55 A He drops to his knees and wraps both arms around her.
56 A Birgitta watches the two of them, her hand on Tobias's head.
57 D BIRGITTA: She's been here an hour.
58 D MAN: The truck wouldn't start. I ran all the way from the bridge. Thank you. Thank you for --
59 D BIRGITTA: Her name is Noor?
60 D MAN: Noor. Yes.
61 A ¶ He kisses the top of her head.
62 A Lifts her.
63 A She buries her face in his collar.
64 A Tobias picks up his gummies and Gary and trots back to his mother.
65 D TOBIAS: Mom? Gary says goodbye.
66 A ¶ Noor lifts her head from her father's shoulder and, very seriously, waves.

### SCENE s00013 | EXT. SALT FLATS - ABANDONED EVAPORATION WORKS - DAY
Detected names (may be incomplete or contain aliases): SILAS WHITTAKER, CONNIE, REYES
* 1 A ¶ A white plain stretches to a white sky.
* 2 A Rotting wooden vats lie in rows like open coffins.
* 3 A Heat shimmers off the crust.
4 A ¶ SILAS WHITTAKER (50s, gray beard, duster bleached by sun) kneels beside a dead horse.
5 A He runs one hand along its neck and says nothing.
* 6 A ¶ Behind him, a shadow lengthens.
7 A He doesn't turn.
8 A ¶ CONSTANCE "CONNIE" REYES (30s, wide-brimmed hat, rifle across her back) stands twenty feet away on the crust.
9 A She holds a canteen by its strap.
10 D CONNIE: That your horse?
11 D SILAS: Was.
12 D CONNIE: Looks like the salt got her.
13 D SILAS: Looks like a bullet got her.
14 A ¶ She walks closer.
15 A Stops short of arm's reach.
16 A He rises, brushing his knees, and finally turns.
17 A His eyes go to the canteen.
18 A Hers go to his holster.
19 D CONNIE: I'll trade you water for a name.
20 D SILAS: I'd trade you a name for a mule.
21 D CONNIE: I don't have a mule.
22 D SILAS: Then you don't have a name worth the water.
23 A ¶ She almost smiles.
24 A He almost doesn't.
* 25 A The wind pulls at her hat brim.
26 A She tilts the canteen.
* 27 A Water slaps against the metal, loud in the silence.
28 D SILAS [CONT'D]: Don't wave that around.
29 D CONNIE: It's mine to wave.
30 A ¶ He takes a step.
31 A She does not move.
32 A He takes another.
33 A Her hand drifts back to the rifle sling.
34 D SILAS: Easy.
35 D CONNIE: You first.
36 A ¶ They stand with the dead horse between them and the white sky above.
37 A Neither one blinks.
38 D SILAS: You work for Dutch Halloran?
39 D CONNIE: Never heard of him.
40 D SILAS: That's a lie, and you tell it badly.
41 D CONNIE: Then I'm in good company.
42 A ¶ He nods slowly.
43 A Looks off toward a ridge on the horizon, a thin dark line.
44 D SILAS: He's coming, you know. He's got six men and a Gatling gun on a wagon.
45 D CONNIE: I know.
46 D SILAS: Then why are you standing here?
47 A ¶ She uncaps the canteen.
48 A Drinks.
49 A Wipes her mouth with the back of her wrist.
50 A Holds it out to him at arm's length, the way one offers food to a dog.
51 D CONNIE: Same reason as you.
52 A ¶ He takes it.
53 A Drinks long.
* 54 A The water runs down his beard.
55 A He hands it back.
56 D SILAS: He killed my brother.
57 D CONNIE: He killed my husband.
58 D SILAS: He burned my ranch.
59 D CONNIE: He took my land.
60 A ¶ They speak at once, the words overlapping, neither stopping for the other.
61 D SILAS: I came out here to die. ^ CONNIE I came out here to finish it.
* 62 A ¶ A beat.
63 A They look at each other, really look, for the first time.
64 D SILAS: Can you shoot that thing?
65 D CONNIE: Better than you can shoot that.
66 A ¶ He glances at his holster.
67 A Almost laughs.
68 D SILAS: What's your plan?
69 A ¶ She points past him at the nearest vat, a long wooden trough sunk in the crust.
70 D CONNIE: Wagon comes down the old cart road. Wheels sink in the brine. Horses panic.
71 D SILAS: And the Gatling?
72 D CONNIE: Pointed at the sky, if the wagon tips.
73 A ¶ He studies the vats.
74 A The road.
75 A The ridge.
76 A The long, long distance.
77 D SILAS: That's a lot of ifs.
78 D CONNIE: You got a better one?
79 A ¶ He doesn't.
80 A He pulls the revolver from his holster and checks the cylinder.
* 81 A Three rounds.
82 A He sighs.
83 D SILAS: Hand me a few.
84 A ¶ She digs in her coat.
85 A Pours a small handful of cartridges into his palm.
86 A He loads them one by one.
* 87 A ¶ On the ridge, a plume of dust rises.
* 88 A A glint of brass.
* 89 A The faint creak of wheels.
90 D CONNIE: Time to pick a vat.
91 A ¶ She walks away toward the trough.
92 A He lingers over the dead horse for one last moment, touches its mane, and follows.

### SCENE s00014 | INT. COURTROOM ABOARD A MOORED RIVER FERRY - DAY
Detected names (may be incomplete or contain aliases): JUDGE AUGUSTINE FAIRWEATHER, MARCELLA DE LUCA, PERCY, NAKAMURA, DISTRICT ATTORNEY WENDELL OSEI, WOMAN, LIEUTENANT SABINE ARROYO
* 1 A ¶ A converted paddle steamer.
* 2 A The bench is a captain's table.
* 3 A Brass portholes line the walls, and the floor lifts gently with the river's swell.
4 A ¶ JUDGE AUGUSTINE FAIRWEATHER (60s, silver hair, half-moon glasses) peers down from the bench.
5 A At the defense table sit MARCELLA DE LUCA (40s, sharp suit, pearl earrings) and her client, PERCIVAL "PERCY" NAKAMURA (50s, rumpled, calm to the point of serenity).
6 A Across the aisle stands DISTRICT ATTORNEY WENDELL OSEI (50s, booming baritone, fountain pen in his breast pocket).
7 D JUDGE FAIRWEATHER: Counsel, we've been over the manifest three times. Is there any objection to its admission?
8 D DE LUCA: None, Your Honor.
9 D OSEI: None, Your Honor.
10 A ¶ They answer at the same time.
11 A Percy glances between them with polite interest.
12 D JUDGE FAIRWEATHER: Then the manifest is admitted, and I would like to thank both counsel for a refreshingly uneventful morning.
13 D OSEI: The People have nothing further.
14 D DE LUCA: Nor does the defense.
15 A ¶ The Judge removes his glasses and pinches the bridge of his nose.
* 16 A A gull cries outside a porthole.
* 17 A The ferry creaks.
18 D JUDGE FAIRWEATHER: Let the record reflect we'll adjourn for lunch.
19 A ¶ He reaches for his gavel.
* 20 A The courtroom door swings open.
21 A ¶ A WOMAN (30s, cargo pants, hair in a braid, a ring of keys at her belt) steps in.
22 A LIEUTENANT SABINE ARROYO, according to the badge on her chest.
23 A She carries a sealed evidence bag in both hands, and she walks the aisle with the careful posture of someone carrying something that might go off.
24 D ARROYO: Your Honor, forgive the interruption. I have a log from the engine room.
25 D OSEI: Lieutenant, I wasn't informed --
26 D ARROYO: Neither was I. I found it ten minutes ago.
27 A ¶ She sets the bag on the bench.
28 A The Judge opens it, slides out a bound ledger, and flips to a page tabbed in red.
29 A His face does not move, but his eyes do.
30 D JUDGE FAIRWEATHER: Mr. Nakamura. Were you aboard the Annabelle on the night of March ninth?
31 D PERCY: I was not.
32 D JUDGE FAIRWEATHER: Then whose signature is this at the foot of the engineer's log?
33 A ¶ He turns the ledger around.
34 A Percy leans over.
35 A Looks.
36 A Sits back with the same serene smile, though his hand has found De Luca's sleeve.
37 D DE LUCA: Your Honor, I'd like a moment with my client.
38 D OSEI: Your Honor, the People move to continue.
39 A ¶ They speak together again, but this time with an edge, neither yielding.
40 D DE LUCA: This is an ambush. ^ OSEI This is evidence.
41 A ¶ The Judge raises his gavel and brings it down once.
* 42 A The ferry rocks beneath it.
43 D JUDGE FAIRWEATHER: Mr. Osei, sit down. Ms. De Luca, you may confer. Lieutenant Arroyo, you will remain exactly where you are.
44 A ¶ Arroyo nods, steps back, and folds her hands.
45 A Percy whispers something to De Luca.
46 A She goes pale.
47 A She looks at the Judge, then at the porthole, then at the river beyond.
48 D DE LUCA (quietly): Percy. Who is Annabelle?
49 A ¶ Percy smiles.
* 50 A The ferry creaks.

### SCENE s00015 | INT. OBSERVATORY DOME - NIGHT
Detected names (may be incomplete or contain aliases): HETTY, BLACKWOOD, BASTIAN ODUYA, SOLI, VARGAS, WILFRED PRATT, MEI-LING TAN
* 1 A ¶ A brass telescope as long as a bus points at a slit of stars.
* 2 A The floor is parquet, the walls lined with star charts and one tipped-over teacup.
* 3 A On the floor beside the eyepiece platform lies a coat, empty, its sleeves flung wide.
4 A ¶ Five people stand in a loose ring around it, and nobody wants to be the first to look down.
5 A ¶ HENRIETTA "HETTY" BLACKWOOD (60s, observatory director, tweed, a magnifying glass on a chain) stares at the coat.
6 A BASTIAN ODUYA (30s, graduate student, ink on his fingers, a wool hat pulled low).
7 A SOLEDAD "SOLI" VARGAS (40s, night technician, thermos in one hand and the dome keys in the other).
8 A WILFRED PRATT (70s, retired astronomer, a cane, a rumpled evening jacket).
9 A And MEI-LING TAN (20s, journalist, notebook, recorder held out like a candle).
10 D HETTY: Who last saw Doctor Marrow?
11 D BASTIAN: Soli did. She locked up at nine.
12 D SOLI: I locked the north door. I did not lock the dome.
13 D PRATT: Soledad, my dear, a dome has no door. It is a lid.
14 D SOLI: Then I locked the lid, Mr. Pratt.
15 D MEI-LING: Let's slow down. Soli, you said Doctor Marrow asked you for the keys?
16 D SOLI: He asked. I said no.
17 D BASTIAN: You told me you gave them to him.
18 D SOLI: I told you he asked, Bash. You heard what you wanted.
19 D HETTY: Bastian. Where were you at nine?
20 D BASTIAN: Plate room. Cataloguing.
21 D PRATT: For five hours? That's not cataloguing, it's meditation.
22 D BASTIAN: It was the Hartwell plates, Mr. Pratt. You know how many there are.
23 D PRATT: I know how many there were. I counted them in 1989.
24 D MEI-LING: Mr. Pratt, you told me earlier you hadn't been to the observatory in years.
25 D PRATT: Did I?
26 D MEI-LING: Your exact words were, "I haven't set foot on this hill since the Marrow appointment."
27 D PRATT: Then I was speaking figuratively.
28 D HETTY: Wilfred. You have a key.
29 D PRATT: Everyone has a key, Hetty. That's the tragedy of the institution.
30 D SOLI: I don't think everyone has a key.
31 D HETTY: Soli, who does?
32 D SOLI: Me. You. Doctor Marrow.
33 D BASTIAN: And Pratt, apparently.
34 D PRATT: Apparently.
35 D MEI-LING: So four keys. And a coat on the floor.
36 D HETTY: Don't touch the coat, Miss Tan.
37 D MEI-LING: I wasn't going to.
38 D SOLI: You were. You've been inching toward it for five minutes.
39 D MEI-LING: I'm a reporter. Inching is the job.
40 D PRATT: Inching is how the best of us died, my girl.
41 D HETTY: Wilfred, enough.
42 D PRATT: I'm only saying. The coat is on the floor, the lid is open, and Doctor Marrow is not in either of them. Somebody in this room is going to have to explain that. And I would very much like for it not to be me.
43 D BASTIAN: Then explain why your cane is wet.
* 44 A ¶ A silence.
* 45 A The telescope creaks.
46 D PRATT: It rained.
47 D SOLI: It hasn't rained since Tuesday.
48 D HETTY: Wilfred.
49 D PRATT: Hetty.
50 D HETTY: Where is he?

### SCENE s00016 | EXT. DRY CREEK BED BENEATH A TRESTLE BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, YOUNG WOMAN, JEDEDIAH, ODALYS
* 1 A ¶ A ribbon of cracked clay winds between two banks of sage.
* 2 A Above, the old trestle spans the gap like the ribs of a long-dead animal, and the first light slides along its timbers in gold and rust.
3 A ¶ A STRANGER (40s, long coat the color of dried blood, hat low, a face the weather has been arguing with for years) walks his horse down the bank in no particular hurry.
* 4 A The animal's hooves crunch on the clay.
5 A He halts at the creek's center and swings down, loosens the cinch, and lets the horse stand, ears flicking at the early flies.
6 A ¶ Across the creek, on the opposite bank, sits a YOUNG WOMAN (20s, a man's shirt rolled at the sleeves, hair cut short with a knife, a shotgun resting across her knees) on a stump.
7 A She has been sitting there all night.
* 8 A A cold fire, a tin cup, a bedroll folded precisely, and a boot print the size of a dinner plate in the dirt beside her.
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
* 22 A The stump creaks.
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
* 39 A At the foot of the second pier, a mound of fresh-turned earth, a plank driven in at its head.
40 A ¶ He takes off his hat.
41 A Holds it against his chest.
* 42 A A breeze comes up and the sage whispers and the hawk screams once and swings away.
43 D JEDEDIAH: Who put him there?
44 D ODALYS: I did.
45 D JEDEDIAH: Who killed him?
46 A ¶ Odalys raises the shotgun, finally, and levels it at his belt buckle.
47 A Her hands do not shake.
48 D ODALYS: The man who sent you.

### SCENE s00017 | EXT. HOT-AIR BALLOON BASKET - 400 FEET UP - DAY
Detected names (may be incomplete or contain aliases): GLORIA PENDERGAST, WINNIE OKONKWO-HART
* 1 A ¶ A wicker box.
* 2 A A burner.
* 3 A A county fair shrunk to a quilt far below.
4 A ¶ GLORIA PENDERGAST (60s, sun visor, clipboard) stands at one wall.
5 A Beside her, WINNIE OKONKWO-HART (20s, borrowed sweater, white knuckles on the rope).
6 A ¶ Gloria cups her hands and bellows over the side.
7 D GLORIA: Welcome, everyone! Enjoy the view!
* 8 A ¶ Nobody below hears.
* 9 A A cow looks up.
10 D WINNIE: Why are we shouting?
11 D GLORIA: Tradition.
12 A ¶ Winnie closes her eyes.
* 13 A The basket tilts.
14 A She opens them.
15 D WINNIE (to herself): Don't look down. Don't look down.
16 A ¶ Gloria taps her clipboard, squints at a dial, and mutters.
17 D GLORIA (to herself): Pilot never said it'd do that.
18 D WINNIE: Do what?
19 D GLORIA: Nothing. Everybody smile for the camera!
* 20 A ¶ There is no camera.
21 A Winnie slowly forces a smile anyway.
22 A Gloria hands her the clipboard.
23 D GLORIA [CONT'D]: Hold this. And whatever you do, don't let go of her.
24 D WINNIE: Of who?
25 A ¶ Gloria points at the burner.
* 26 A It hisses.

### SCENE s00018 | INT. FERRYBOAT SNACK BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDPA EZEKIEL, PIPPA, JUNIOR
* 1 A ¶ Plastic chairs bolted down.
* 2 A Gulls wheel past the window.
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

### SCENE s00019 | INT. MUSHROOM FARM - GROWING TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): MAGNUS LINDGREN, ZUZU, KOWALCZYK, ABIOLA ADEBAYO-CLARK, STRANGER
* 1 A ¶ A mile of dark.
* 2 A Wet concrete.
* 3 A Shelves of pale caps stacked to the ceiling, glowing faintly under purple grow-lights.
* 4 A The air is thick with spores and damp rot.
* 5 A ¶ Four flashlight beams cut the gloom.
6 A ¶ MAGNUS LINDGREN (50s, farm foreman, a ring of keys, a limp) walks point.
7 A Behind him, ZUZANNA "ZUZU" KOWALCZYK (20s, seasonal picker, hairnet, boots too big) clutches a bucket.
8 A Then ABIOLA ADEBAYO-CLARK (30s, state inspector, clipboard, mask pulled under her chin).
9 A Last of all, a STRANGER (30s, soaked jacket, no ID, a duffel strapped across his back) who joined them at the gate.
* 10 A ¶ Something drips.
* 11 A Something shifts.
12 D MAGNUS: Stay close. Don't touch the shelves.
13 D ABIOLA: Why not?
14 D MAGNUS: Contamination.
15 A ¶ She scribbles on her clipboard.
16 A He doesn't watch her do it.
17 A ¶ Zuzu stops.
18 A Her light has found a shelf where the caps are wrong.
* 19 A Taller.
* 20 A Gray-veined.
* 21 A Their gills pulse, slow, like breathing.
22 D ZUZU: Mr. Lindgren.
23 D MAGNUS: Keep walking.
24 D ZUZU: They're moving.
25 D MAGNUS: They're not.
26 A ¶ He walks on.
27 A She doesn't.
28 A The Stranger steps up beside her and lowers his light until it falls on the cap nearest them.
* 29 A It leans toward the beam.
* 30 A Just slightly.
* 31 A Then away.
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
* 42 A The tunnel bends.
* 43 A The grow-lights dim in the curve and the shelves close in on both sides.
44 A ¶ Zuzu hurries to catch up, nearly stumbling.
45 A Her flashlight beam wobbles over a patch of floor.
* 46 A Something lies there, wrapped in a hairnet.
* 47 A A boot.
* 48 A Half a boot.
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
* 64 A A cap bends toward him.
65 D STRANGER (low): Don't move.
66 A ¶ Everyone freezes.
* 67 A The dripping stops.
* 68 A The glow from the shelves swells, then settles, like a held breath released.
* 69 A ¶ Then: a rustle, far down the tunnel.
* 70 A Many small sounds.
* 71 A Soft as a hand on silk.
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
* 83 A ¶ The rustling is closer.
* 84 A Zuzu's bucket tips and spills a hundred pale caps onto the concrete.
* 85 A They quiver.
86 D ZUZU: Please. Please just open the gate.
87 A ¶ Magnus pulls the ring of keys from his belt, holds them out in his shaking hand.
88 D MAGNUS: I can't. They're not for the gate. They're for the door at the other end.
89 D STRANGER: What's at the other end?
90 A ¶ Magnus finally lifts his eyes.
91 D MAGNUS: The reason it's quiet now.
* 92 A ¶ The rustling stops.
* 93 A The grow-lights flicker.
* 94 A A single cap, dead center on the floor, begins to rise.
95 A ¶ Zuzu exhales.
96 A And the Stranger, slowly, unslings the duffel, unzips it, and takes out a small steel canister with a red valve.
97 D STRANGER: Then we go the other way.

### SCENE s00020 | INT. LIGHTHOUSE FOG-SIGNAL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): IGNATIUS BRAND, TAMSIN OKORO
* 1 A ¶ The brass horn sits silent.
* 2 A Rain ticks on the glass.
3 A IGNATIUS BRAND (60s, salt-cracked hands, wool cap) pours tea for TAMSIN OKORO (20s, relief keeper, soaked parka).
4 D TAMSIN: Quiet night.
5 D IGNATIUS: Always is, after the horn stops.
6 A ¶ They sip.
* 7 A The kettle ticks as it cools.
8 A Tamsin smiles.
9 D TAMSIN: Thought it'd be worse out here.
10 A ¶ Ignatius stares at the floor between her boots.
* 11 A Water pools there.
* 12 A Too much water, and it runs uphill toward the horn.
13 D IGNATIUS (barely a whisper): You came up alone?
14 D TAMSIN: Yes. Why?
15 A ¶ Below them, slow wet footsteps climb the iron stairs.
16 A Tamsin and Ignatius both freeze, cups halfway to their mouths.
* 17 A ¶ The horn BLARES on its own.
18 A They scramble for the hatch, collide, and drag it shut together.
19 D IGNATIUS: That's not the tide.

### SCENE s00021 | INT. COMMUNITY POOL SNACK BAR - DAY
Detected names (may be incomplete or contain aliases): BEATRIX LOMBARDI, DESMOND, PIPPA, NANA ROSALIND, LIFEGUARD, KOFI MENSAH
* 1 A ¶ Chlorine haze.
* 2 A A hand-lettered menu.
* 3 A Rain drums the skylight and the pool outside is closed for the day.
4 A ¶ BEATRIX LOMBARDI (40s, harried, whistle around her neck) wipes the counter.
5 A Her kids sit on stools: DESMOND (12, serious, goggles pushed up on his forehead) and little PIPPA (6, one flip-flop on).
6 D BEATRIX: Who ate the last pretzel?
7 D PIPPA: Not me.
8 D DESMOND: She did. There's salt on her chin.
9 A ¶ Pippa wipes her chin with her whole sleeve.
10 D BEATRIX: Pippa.
11 D PIPPA: It was a small pretzel.
12 A ¶ NANA ROSALIND (70s, plastic rain bonnet, enormous purse) pushes in through the swinging door, shaking water off her arms.
13 D NANA ROSALIND: Nobody told me the pool was closed. I swam in the lobby for ten minutes.
14 D DESMOND: You didn't.
15 D NANA ROSALIND: Figuratively.
16 A ¶ Beatrix pours her a coffee.
17 A Nana Rosalind sits, takes Pippa's lone flip-flop, and studies it.
18 D NANA ROSALIND [CONT'D]: Where's the other one?
19 D PIPPA: Lost.
* 20 A ¶ A crackle from the wall speaker.
21 D LIFEGUARD [V.O.] (over intercom): Attention. Someone's goldfish is in the deep end. In a bag. Please claim it.
22 A ¶ Pippa slides off her stool.
23 D PIPPA: Mine.
24 D BEATRIX: You brought a fish to the pool?
25 D PIPPA: He wanted to swim.
26 D DESMOND: It was a good idea, actually.
27 A ¶ Beatrix looks at him, then laughs, helpless.
28 A Nana Rosalind pats her hand.
29 D NANA ROSALIND: Go get the fish, Beatrix. I'll watch the counter.
30 A ¶ A teenager, KOFI MENSAH (16, lifeguard polo, dripping), leans through the pass-through, holding up a sagging bag with a small orange fish.
31 D KOFI: Whose is this? He seems calm.
32 D PIPPA: That's Mr. Bubbles. He's always calm.
33 A ¶ Kofi hands the bag over.
34 A Pippa cradles it like an egg.
35 D BEATRIX: Thank you, Kofi. I'm so sorry.
36 D KOFI: It's the most exciting thing today.
* 37 A ¶ Rain softens on the skylight.
38 A Everyone watches the fish circle once, then settle.

### SCENE s00022 | INT. ABANDONED DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): YUSUF HAMDAN, LUCKY, MORROW, BARNABY QUILL, DAHLIA REYES, MAGNUS WICK
* 1 A ¶ A cinderblock room, the size of a closet.
* 2 A A dead projector the color of old teeth squats in the middle.
* 3 A Spray-painted names cover the walls.
* 4 A A battery lantern throws everything into hard shadow.
5 A ¶ YUSUF HAMDAN (17, thin, nervous laugh, a cheap digital camera on a strap) sits on an overturned crate.
6 A Beside him, LUCINDA "LUCKY" MORROW (17, bleached hair, scraped knees) plays with a lighter.
7 A BARNABY QUILL (18, built like a linebacker, soft voice) blocks the doorway.
8 A DAHLIA REYES (16, hoodie, headphones around her neck) holds a flask she shouldn't have.
9 A MAGNUS WICK (17, varsity jacket, too clean) stands apart from them.
10 D LUCKY: You said you'd be here at nine.
11 D MAGNUS: I was here at nine.
12 D DAHLIA: You were not here at nine, I was here at nine, I sat alone for twenty minutes--
13 D YUSUF: It's not a big deal, we're all here now--
14 D LUCKY: It is a big deal! We swore. After graduation, nobody leaves without--
15 D BARNABY: Lucky.
16 D LUCKY: --without saying it to everyone, that's the rule!
17 D MAGNUS: There's no rule. You made it up.
18 D DAHLIA: She did not make it up, we all signed the wall.
19 A ¶ Dahlia jabs a finger at the concrete.
* 20 A Under a layer of paint, five signatures sit in a ragged circle.
21 D YUSUF (trying to joke): Technically, I signed it in marker. Pretty permanent.
22 D MAGNUS: I'm going to Dartmouth. Fine? I got in. It's done. I didn't want to tell you like this.
* 23 A ¶ Silence.
24 A Then everyone speaks at once.
25 D LUCKY: Dartmouth?
26 D BARNABY: You said Ohio State.
27 D DAHLIA: Why would you lie about that?
28 D YUSUF: Congratulations, I guess?
29 D MAGNUS: Because I knew you'd all look like this!
30 A ¶ Barnaby steps in from the doorway.
31 A Magnus doesn't back up.
32 D BARNABY: Like what?
33 D MAGNUS: Like I already left.
34 A ¶ Lucky snaps the lighter shut.
* 35 A The lantern flickers.
36 A Yusuf lifts the camera and, without asking, takes one picture of all of them.
* 37 A ¶ The flash leaves white afterimages.
* 38 A Nobody says anything.

### SCENE s00023 | INT. FREIGHT ELEVATOR, CANNERY - NIGHT
Detected names (may be incomplete or contain aliases): SAUL VERHOEVEN, NADIA PRUITT, EMEKA OSEI
* 1 A ¶ Steel cage.
* 2 A Flickering bulb.
* 3 A Stuck between floors.
4 A ¶ SAUL VERHOEVEN (50s, grey suit, bleeding sleeve) leans on the wall.
5 A NADIA PRUITT (30s, tactical vest, gun lowered) watches the hatch.
6 A Beside her, a young courier, EMEKA OSEI (20s, backpack hugged tight).
7 D NADIA (to everyone): Nobody touches the panel.
8 D EMEKA (quiet, to Saul): Is it bad? Your arm?
9 D SAUL: It's fine, kid.
10 A ¶ Nadia cranes toward the ceiling.
* 11 A Dust drifts down.
12 D NADIA (under her breath): Come on, come on. Not now.
* 13 A ¶ Boots thump overhead.
* 14 A Then stop.
* 15 A Then nothing.
16 D EMEKA: They're gone?
17 D NADIA (to Emeka): Be still.
18 A ¶ Saul slides the backpack from Emeka's arms.
19 A Emeka lets him.
20 D SAUL (to himself): Should've taken the stairs.
* 21 A ¶ The cage lurches.
* 22 A Slowly, it starts to rise.
