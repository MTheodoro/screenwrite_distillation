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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0001.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_earnest_2 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, MISS PRISM, CHASUBLE
1 A ¶ Coming over very slowly.
* 2 D CECILY: But I don’t like German. It isn’t at all a becoming language. I know perfectly well that I look quite plain after my German lesson.
* 3 D MISS PRISM: Child, you know how anxious your guardian is that you should improve yourself in every way. He laid particular stress on your German, as he was leaving for town yesterday. Indeed, he always lays stress on your German when he is leaving for town.
* 4 D CECILY: Dear Uncle Jack is so very serious! Sometimes he is so serious that I think he cannot be quite well.
5 A ¶ Drawing herself up.
* 6 D MISS PRISM: Your guardian enjoys the best of health, and his gravity of demeanour is especially to be commended in one so comparatively young as he is. I know no one who has a higher sense of duty and responsibility.
* 7 D CECILY: I suppose that is why he often looks a little bored when we three are together.
* 8 D MISS PRISM: Cecily! I am surprised at you. Mr. Worthing has many troubles in his life. Idle merriment and triviality would be out of place in his conversation. You must remember his constant anxiety about that unfortunate young man his brother.
* 9 D CECILY: I wish Uncle Jack would allow that unfortunate young man, his brother, to come down here sometimes. We might have a good influence over him, Miss Prism. I am sure you certainly would. You know German, and geology, and things of that kind influence a man very much.
10 A ¶ Cecily begins to write in her diary.
11 A ¶ Shaking her head.
* 12 D MISS PRISM: I do not think that even I could produce any effect on a character that according to his own brother’s admission is irretrievably weak and vacillating. Indeed I am not sure that I would desire to reclaim him. I am not in favour of this modern mania for turning bad people into good people at a moment’s notice. As a man sows so let him reap. You must put away your diary, Cecily. I really don’t see why you should keep a diary at all.
* 13 D CECILY: I keep a diary in order to enter the wonderful secrets of my life. If I didn’t write them down, I should probably forget all about them.
* 14 D MISS PRISM: Memory, my dear Cecily, is the diary that we all carry about with us.
* 15 D CECILY: Yes, but it usually chronicles the things that have never happened, and couldn’t possibly have happened. I believe that Memory is responsible for nearly all the three-volume novels that Mudie sends us.
* 16 D MISS PRISM: Do not speak slightingly of the three-volume novel, Cecily. I wrote one myself in earlier days.
* 17 D CECILY: Did you really, Miss Prism? How wonderfully clever you are! I hope it did not end happily? I don’t like novels that end happily. They depress me so much.
* 18 D MISS PRISM: The good ended happily, and the bad unhappily. That is what Fiction means.
* 19 D CECILY: I suppose so. But it seems very unfair. And was your novel ever published?
* 20 D MISS PRISM: Alas! no. The manuscript unfortunately was abandoned.
21 A ¶ Cecily starts.
* 22 D MISS PRISM: I use the word in the sense of lost or mislaid. To your work, child, these speculations are profitless.
23 A ¶ Smiling.
* 24 D CECILY: But I see dear Dr. Chasuble coming up through the garden.
25 A ¶ Rising and advancing.
* 26 D MISS PRISM: Dr. Chasuble! This is indeed a pleasure.
27 A ¶ Enter Canon Chasuble.
* 28 D CHASUBLE: And how are we this morning? Miss Prism, you are, I trust, well?
* 29 D CECILY: Miss Prism has just been complaining of a slight headache. I think it would do her so much good to have a short stroll with you in the Park, Dr. Chasuble.
* 30 D MISS PRISM: Cecily, I have not mentioned anything about a headache.
* 31 D CECILY: No, dear Miss Prism, I know that, but I felt instinctively that you had a headache. Indeed I was thinking about that, and not about my German lesson, when the Rector came in.
* 32 D CHASUBLE: I hope, Cecily, you are not inattentive.
* 33 D CECILY: Oh, I am afraid I am.
* 34 D CHASUBLE: That is strange. Were I fortunate enough to be Miss Prism’s pupil, I would hang upon her lips.
35 A ¶ Miss Prism glares.
* 36 D CHASUBLE: I spoke metaphorically.—My metaphor was drawn from bees. Ahem! Mr. Worthing, I suppose, has not returned from town yet?
* 37 D MISS PRISM: We do not expect him till Monday afternoon.
* 38 D CHASUBLE: Ah yes, he usually likes to spend his Sunday in London. He is not one of those whose sole aim is enjoyment, as, by all accounts, that unfortunate young man his brother seems to be. But I must not disturb Egeria and her pupil any longer.
* 39 D MISS PRISM: Egeria? My name is Lætitia, Doctor.
40 A ¶ Bowing.
* 41 D CHASUBLE: A classical allusion merely, drawn from the Pagan authors. I shall see you both no doubt at Evensong?
* 42 D MISS PRISM: I think, dear Doctor, I will have a stroll with you. I find I have a headache after all, and a walk might do it good.
* 43 D CHASUBLE: With pleasure, Miss Prism, with pleasure. We might go as far as the schools and back.
44 D MISS PRISM: That would be delightful. Cecily, you will read your Political Economy in my absence. The chapter on the Fall of the Rupee you may omit. It is somewhat too sensational. Even these metallic problems have their melodramatic side.
45 A ¶ Goes down the garden with Dr. Chasuble.

### SCENE pd_earnest_3 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHASUBLE, MISS PRISM, CECILY, JACK, MERRIMAN, ALGERNON
* 1 D CHASUBLE: It’s pleasant, is it not, to see so perfect a reconciliation? I think we might leave the two brothers together.
* 2 D MISS PRISM: Cecily, you will come with us.
* 3 D CECILY: Certainly, Miss Prism. My little task of reconciliation is over.
* 4 D CHASUBLE: You have done a beautiful action to-day, dear child.
* 5 D MISS PRISM: We must not be premature in our judgments.
* 6 D CECILY: I feel very happy.
7 A ¶ They all go off except Jack and Algernon.
* 8 D JACK: You young scoundrel, Algy, you must get out of this place as soon as possible. I don’t allow any Bunburying here.
9 A ¶ Enter Merriman.
* 10 D MERRIMAN: I have put Mr. Ernest’s things in the room next to yours, sir. I suppose that is all right?
* 11 D JACK: What?
* 12 D MERRIMAN: Mr. Ernest’s luggage, sir. I have unpacked it and put it in the room next to your own.
* 13 D JACK: His luggage?
* 14 D MERRIMAN: Yes, sir. Three portmanteaus, a dressing-case, two hat-boxes, and a large luncheon-basket.
* 15 D ALGERNON: I am afraid I can’t stay more than a week this time.
* 16 D JACK: Merriman, order the dog-cart at once. Mr. Ernest has been suddenly called back to town.
* 17 D MERRIMAN: Yes, sir.
18 A ¶ Goes back into the house.
* 19 D ALGERNON: What a fearful liar you are, Jack. I have not been called back to town at all.
* 20 D JACK: Yes, you have.
* 21 D ALGERNON: I haven’t heard any one call me.
* 22 D JACK: Your duty as a gentleman calls you back.
* 23 D ALGERNON: My duty as a gentleman has never interfered with my pleasures in the smallest degree.
* 24 D JACK: I can quite understand that.
* 25 D ALGERNON: Well, Cecily is a darling.
* 26 D JACK: You are not to talk of Miss Cardew like that. I don’t like it.
* 27 D ALGERNON: Well, I don’t like your clothes. You look perfectly ridiculous in them. Why on earth don’t you go up and change? It is perfectly childish to be in deep mourning for a man who is actually staying for a whole week with you in your house as a guest. I call it grotesque.
* 28 D JACK: You are certainly not staying with me for a whole week as a guest or anything else. You have got to leave . . . by the four-five train.
* 29 D ALGERNON: I certainly won’t leave you so long as you are in mourning. It would be most unfriendly. If I were in mourning you would stay with me, I suppose. I should think it very unkind if you didn’t.
* 30 D JACK: Well, will you go if I change my clothes?
* 31 D ALGERNON: Yes, if you are not too long. I never saw anybody take so long to dress, and with such little result.
* 32 D JACK: Well, at any rate, that is better than being always over-dressed as you are.
* 33 D ALGERNON: If I am occasionally a little over-dressed, I make up for it by being always immensely over-educated.
* 34 D JACK: Your vanity is ridiculous, your conduct an outrage, and your presence in my garden utterly absurd. However, you have got to catch the four-five, and I hope you will have a pleasant journey back to town. This Bunburying, as you call it, has not been a great success for you.
35 A ¶ Goes into the house.
* 36 D ALGERNON: I think it has been a great success. I’m in love with Cecily, and that is everything.
37 A ¶ [Enter Cecily at the back of the garden.
38 A She picks up the can and begins to water the flowers.] But I must see her before I go, and make arrangements for another Bunbury.
39 A Ah, there she is.
* 40 D CECILY: Oh, I merely came back to water the roses. I thought you were with Uncle Jack.
* 41 D ALGERNON: He’s gone to order the dog-cart for me.
* 42 D CECILY: Oh, is he going to take you for a nice drive?
* 43 D ALGERNON: He’s going to send me away.
* 44 D CECILY: Then have we got to part?
* 45 D ALGERNON: I am afraid so. It’s a very painful parting.
* 46 D CECILY: It is always painful to part from people whom one has known for a very brief space of time. The absence of old friends one can endure with equanimity. But even a momentary separation from anyone to whom one has just been introduced is almost unbearable.
* 47 D ALGERNON: Thank you.

### SCENE pd_earnest_4 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, GWENDOLEN, MERRIMAN
* 1 D CECILY: Do you suggest, Miss Fairfax, that I entrapped Ernest into an engagement? How dare you? This is no time for wearing the shallow mask of manners. When I see a spade I call it a spade.
2 A ¶ Satirically.
* 3 D GWENDOLEN: I am glad to say that I have never seen a spade. It is obvious that our social spheres have been widely different.
4 A ¶ Enter Merriman, followed by the footman.
5 A He carries a salver, table cloth, and plate stand.
6 A Cecily is about to retort.
7 A The presence of the servants exercises a restraining influence, under which both girls chafe.
* 8 D MERRIMAN: Shall I lay tea here as usual, Miss?
9 A ¶ Sternly, in a calm voice.
* 10 D CECILY: Yes, as usual.
11 A ¶ Merriman begins to clear table and lay cloth.
* 12 A A long pause.
13 A Cecily and Gwendolen glare at each other.
* 14 D GWENDOLEN: Are there many interesting walks in the vicinity, Miss Cardew?
* 15 D CECILY: Oh! yes! a great many. From the top of one of the hills quite close one can see five counties.
* 16 D GWENDOLEN: Five counties! I don’t think I should like that; I hate crowds.
17 A ¶ Sweetly.
* 18 D CECILY: I suppose that is why you live in town?
19 A ¶ Gwendolen bites her lip, and beats her foot nervously with her parasol.
20 A ¶ Looking round.
* 21 D GWENDOLEN: Quite a well-kept garden this is, Miss Cardew.
* 22 D CECILY: So glad you like it, Miss Fairfax.
* 23 D GWENDOLEN: I had no idea there were any flowers in the country.
* 24 D CECILY: Oh, flowers are as common here, Miss Fairfax, as people are in London.
* 25 D GWENDOLEN: Personally I cannot understand how anybody manages to exist in the country, if anybody who is anybody does. The country always bores me to death.
* 26 D CECILY: Ah! This is what the newspapers call agricultural depression, is it not? I believe the aristocracy are suffering very much from it just at present. It is almost an epidemic amongst them, I have been told. May I offer you some tea, Miss Fairfax?
27 A ¶ With elaborate politeness.
* 28 D GWENDOLEN: Thank you.
29 A ¶ Aside.
* 30 D GWENDOLEN: Detestable girl! But I require tea!
31 A ¶ Sweetly.
* 32 D CECILY: Sugar?
33 A ¶ Superciliously.
* 34 D GWENDOLEN: No, thank you. Sugar is not fashionable any more.
35 A ¶ Cecily looks angrily at her, takes up the tongs and puts four lumps of sugar into the cup.
36 A ¶ Severely.
* 37 D CECILY: Cake or bread and butter?
38 A ¶ In a bored manner.
* 39 D GWENDOLEN: Bread and butter, please. Cake is rarely seen at the best houses nowadays.
40 A ¶ Cuts a very large slice of cake, and puts it on the tray.
* 41 D CECILY: Hand that to Miss Fairfax.
* 42 A ¶ Merriman does so, and goes out with footman.
43 A Gwendolen drinks the tea and makes a grimace.
44 A Puts down cup at once, reaches out her hand to the bread and butter, looks at it, and finds it is cake.
45 A Rises in indignation.
* 46 D GWENDOLEN: You have filled my tea with lumps of sugar, and though I asked most distinctly for bread and butter, you have given me cake. I am known for the gentleness of my disposition, and the extraordinary sweetness of my nature, but I warn you, Miss Cardew, you may go too far.
47 A ¶ Rising.
* 48 D CECILY: To save my poor, innocent, trusting boy from the machinations of any other girl there are no lengths to which I would not go.
* 49 D GWENDOLEN: From the moment I saw you I distrusted you. I felt that you were false and deceitful. I am never deceived in such matters. My first impressions of people are invariably right.
* 50 D CECILY: It seems to me, Miss Fairfax, that I am trespassing on your valuable time. No doubt you have many other calls of a similar character to make in the neighbourhood.
51 A ¶ Enter Jack.
52 A ¶ Catching sight of him.
* 53 D GWENDOLEN: Ernest! My own Ernest!

### SCENE pd_earnest_5 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, ALGERNON, GWENDOLEN, JACK, MERRIMAN, LADY BRACKNELL
* 1 D CECILY: To please me you are ready to face this fearful ordeal?
* 2 D ALGERNON: I am!
3 D GWENDOLEN: How absurd to talk of the equality of the sexes! Where questions of self-sacrifice are concerned, men are infinitely beyond us.
* 4 D JACK: We are.
* 5 A ¶ Clasps hands with Algernon.
* 6 D CECILY: They have moments of physical courage of which we women know absolutely nothing.
7 A ¶ To Jack.
* 8 D GWENDOLEN: Darling!
9 A ¶ To Cecily.
* 10 D ALGERNON: Darling!
11 A ¶ They fall into each other’s arms.
12 A ¶ Enter Merriman.
13 A When he enters he coughs loudly, seeing the situation.
* 14 D MERRIMAN: Ahem! Ahem! Lady Bracknell!
* 15 D JACK: Good heavens!
16 A ¶ Enter Lady Bracknell.
17 A The couples separate in alarm.
18 A Exit Merriman.
* 19 D LADY BRACKNELL: Gwendolen! What does this mean?
* 20 D GWENDOLEN: Merely that I am engaged to be married to Mr. Worthing, mamma.
* 21 D LADY BRACKNELL: Come here. Sit down. Sit down immediately. Hesitation of any kind is a sign of mental decay in the young, of physical weakness in the old.
22 A ¶ Turns to Jack.
* 23 D LADY BRACKNELL: Apprised, sir, of my daughter’s sudden flight by her trusty maid, whose confidence I purchased by means of a small coin, I followed her at once by a luggage train. Her unhappy father is, I am glad to say, under the impression that she is attending a more than usually lengthy lecture by the University Extension Scheme on the Influence of a permanent income on Thought. I do not propose to undeceive him. Indeed I have never undeceived him on any question. I would consider it wrong. But of course, you will clearly understand that all communication between yourself and my daughter must cease immediately from this moment. On this point, as indeed on all points, I am firm.
* 24 D JACK: I am engaged to be married to Gwendolen, Lady Bracknell!
* 25 D LADY BRACKNELL: You are nothing of the kind, sir. And now, as regards Algernon! . . . Algernon!
* 26 D ALGERNON: Yes, Aunt Augusta.
* 27 D LADY BRACKNELL: May I ask if it is in this house that your invalid friend Mr. Bunbury resides?
28 A ¶ Stammering.
* 29 D ALGERNON: Oh! No! Bunbury doesn’t live here. Bunbury is somewhere else at present. In fact, Bunbury is dead.
* 30 D LADY BRACKNELL: Dead! When did Mr. Bunbury die? His death must have been extremely sudden.
31 A ¶ Airily.
* 32 D ALGERNON: Oh! I killed Bunbury this afternoon. I mean poor Bunbury died this afternoon.
* 33 D LADY BRACKNELL: What did he die of?
* 34 D ALGERNON: Bunbury? Oh, he was quite exploded.
* 35 D LADY BRACKNELL: Exploded! Was he the victim of a revolutionary outrage? I was not aware that Mr. Bunbury was interested in social legislation. If so, he is well punished for his morbidity.
* 36 D ALGERNON: My dear Aunt Augusta, I mean he was found out! The doctors found out that Bunbury could not live, that is what I mean—so Bunbury died.
* 37 D LADY BRACKNELL: He seems to have had great confidence in the opinion of his physicians. I am glad, however, that he made up his mind at the last to some definite course of action, and acted under proper medical advice. And now that we have finally got rid of this Mr. Bunbury, may I ask, Mr. Worthing, who is that young person whose hand my nephew Algernon is now holding in what seems to me a peculiarly unnecessary manner?
* 38 D JACK: That lady is Miss Cecily Cardew, my ward.
39 A ¶ Lady Bracknell bows coldly to Cecily.
* 40 D ALGERNON: I am engaged to be married to Cecily, Aunt Augusta.
* 41 D LADY BRACKNELL: I beg your pardon?
* 42 D CECILY: Mr. Moncrieff and I are engaged to be married, Lady Bracknell.
43 A ¶ With a shiver, crossing to the sofa and sitting down.
* 44 D LADY BRACKNELL: I do not know whether there is anything peculiarly exciting in the air of this particular part of Hertfordshire, but the number of engagements that go on seems to me considerably above the proper average that statistics have laid down for our guidance. I think some preliminary inquiry on my part would not be out of place. Mr. Worthing, is Miss Cardew at all connected with any of the larger railway stations in London? I merely desire information. Until yesterday I had no idea that there were any families or persons whose origin was a Terminus.
45 A ¶ Jack looks perfectly furious, but restrains himself.
46 A ¶ In a clear, cold voice.
* 47 D JACK: Miss Cardew is the grand-daughter of the late Mr. Thomas Cardew of 149 Belgrave Square, S.W.; Gervase Park, Dorking, Surrey; and the Sporran, Fifeshire, N.B.
* 48 D LADY BRACKNELL: That sounds not unsatisfactory. Three addresses always inspire confidence, even in tradesmen. But what proof have I of their authenticity?

### SCENE pd_earnest_6 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): JACK, ALGERNON, GWENDOLEN, CECILY, LADY BRACKNELL, CHASUBLE, MISS PRISM
1 A ¶ Seizes hold of Algernon.
* 2 D JACK: Dr. Chasuble, my unfortunate brother. Miss Prism, my unfortunate brother. Gwendolen, my unfortunate brother. Algy, you young scoundrel, you will have to treat me with more respect in the future. You have never behaved to me like a brother in all your life.
* 3 D ALGERNON: Well, not till to-day, old boy, I admit. I did my best, however, though I was out of practice.
4 A ¶ Shakes hands.
5 A ¶ To Jack.
* 6 D GWENDOLEN: My own! But what own are you? What is your Christian name, now that you have become some one else?
* 7 D JACK: Good heavens! . . . I had quite forgotten that point. Your decision on the subject of my name is irrevocable, I suppose?
* 8 D GWENDOLEN: I never change, except in my affections.
* 9 D CECILY: What a noble nature you have, Gwendolen!
* 10 D JACK: Then the question had better be cleared up at once. Aunt Augusta, a moment. At the time when Miss Prism left me in the hand-bag, had I been christened already?
* 11 D LADY BRACKNELL: Every luxury that money could buy, including christening, had been lavished on you by your fond and doting parents.
* 12 D JACK: Then I was christened! That is settled. Now, what name was I given? Let me know the worst.
* 13 D LADY BRACKNELL: Being the eldest son you were naturally christened after your father.
14 A ¶ Irritably.
* 15 D JACK: Yes, but what was my father’s Christian name?
16 A ¶ Meditatively.
* 17 D LADY BRACKNELL: I cannot at the present moment recall what the General’s Christian name was. But I have no doubt he had one. He was eccentric, I admit. But only in later years. And that was the result of the Indian climate, and marriage, and indigestion, and other things of that kind.
* 18 D JACK: Algy! Can’t you recollect what our father’s Christian name was?
* 19 D ALGERNON: My dear boy, we were never even on speaking terms. He died before I was a year old.
* 20 D JACK: His name would appear in the Army Lists of the period, I suppose, Aunt Augusta?
* 21 D LADY BRACKNELL: The General was essentially a man of peace, except in his domestic life. But I have no doubt his name would appear in any military directory.
* 22 D JACK: The Army Lists of the last forty years are here. These delightful records should have been my constant study.
23 A ¶ Rushes to bookcase and tears the books out.
* 24 D JACK: M. Generals . . . Mallam, Maxbohm, Magley, what ghastly names they have—Markby, Migsby, Mobbs, Moncrieff! Lieutenant 1840, Captain, Lieutenant-Colonel, Colonel, General 1869, Christian names, Ernest John.
25 A ¶ Puts book very quietly down and speaks quite calmly.
* 26 D JACK: I always told you, Gwendolen, my name was Ernest, didn’t I? Well, it is Ernest after all. I mean it naturally is Ernest.
* 27 D LADY BRACKNELL: Yes, I remember now that the General was called Ernest, I knew I had some particular reason for disliking the name.
* 28 D GWENDOLEN: Ernest! My own Ernest! I felt from the first that you could have no other name!
* 29 D JACK: Gwendolen, it is a terrible thing for a man to find out suddenly that all his life he has been speaking nothing but the truth. Can you forgive me?
* 30 D GWENDOLEN: I can. For I feel that you are sure to change.
* 31 D JACK: My own one!
32 A ¶ To Miss Prism.
* 33 D CHASUBLE: Lætitia!
34 A ¶ Embraces her.
35 A ¶ Enthusiastically.
* 36 D MISS PRISM: Frederick! At last!
* 37 D ALGERNON: Cecily!
38 A ¶ Embraces her.
* 39 D ALGERNON: At last!
* 40 D JACK: Gwendolen!
41 A ¶ Embraces her.
* 42 D JACK: At last!
* 43 D LADY BRACKNELL: My nephew, you seem to be displaying signs of triviality.
* 44 D JACK: On the contrary, Aunt Augusta, I’ve now realised for the first time in my life the vital Importance of Being Earnest.
* 45 A ¶ TABLEAU

### SCENE pd_sisters_0 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OLGA, MASHA, IRINA, BARON TUZENBACH, CHEBUTIKIN, SOLENI
* 1 A ¶ In PROSOROV’S house.
* 2 A A sitting-room with pillars; behind is seen a large dining-room.
* 3 A It is midday, the sun is shining brightly outside.
* 4 A In the dining-room the table is being laid for lunch.
5 A ¶ OLGA, in the regulation blue dress of a teacher at a girl’s high school, is walking about correcting exercise books; MASHA, in a black dress, with a hat on her knees, sits and reads a book; IRINA, in white, stands about, with a thoughtful expression.
* 6 D OLGA: It’s just a year since father died last May the fifth, on your name-day, Irina. It was very cold then, and snowing. I thought I would never survive it, and you were in a dead faint. And now a year has gone by and we are already thinking about it without pain, and you are wearing a white dress and your face is happy.
* 7 A ¶ Clock strikes twelve.
* 8 D OLGA: And the clock struck just the same way then.
* 9 A ¶ Pause.
* 10 D OLGA: I remember that there was music at the funeral, and they fired a volley in the cemetery. He was a general in command of a brigade but there were few people present. Of course, it was raining then, raining hard, and snowing.
* 11 D IRINA: Why think about it!
12 A ¶ BARON TUZENBACH, CHEBUTIKIN and SOLENI appear by the table in the dining-room, behind the pillars.
* 13 D OLGA: It’s so warm to-day that we can keep the windows open, though the birches are not yet in flower. Father was put in command of a brigade, and he rode out of Moscow with us eleven years ago. I remember perfectly that it was early in May and that everything in Moscow was flowering then. It was warm too, everything was bathed in sunshine. Eleven years have gone, and I remember everything as if we rode out only yesterday. Oh, God! When I awoke this morning and saw all the light and the spring, joy entered my heart, and I longed passionately to go home.
* 14 D CHEBUTIKIN: Will you take a bet on it?
* 15 D TUZENBACH: Oh, nonsense.
16 A ¶ MASHA, lost in a reverie over her book, whistles softly.
* 17 D OLGA: Don’t whistle, Masha. How can you!
* 18 A ¶ Pause.
* 19 D OLGA: I’m always having headaches from having to go to the High School every day and then teach till evening. Strange thoughts come to me, as if I were already an old woman. And really, during these four years that I have been working here, I have been feeling as if every day my strength and youth have been squeezed out of me, drop by drop. And only one desire grows and gains in strength...
* 20 D IRINA: To go away to Moscow. To sell the house, drop everything here, and go to Moscow...
* 21 D OLGA: Yes! To Moscow, and as soon as possible.
22 A ¶ CHEBUTIKIN and TUZENBACH laugh.
* 23 D IRINA: I expect Andrey will become a professor, but still, he won’t want to live here. Only poor Masha must go on living here.
* 24 D OLGA: Masha can come to Moscow every year, for the whole summer.
25 A ¶ MASHA is whistling gently.
* 26 D IRINA: Everything will be arranged, please God.
27 A ¶ Looks out of the window.
* 28 D IRINA: It’s nice out to-day. I don’t know why I’m so happy: I remembered this morning that it was my name-day, and I suddenly felt glad and remembered my childhood, when mother was still with us. What beautiful thoughts I had, what thoughts!
* 29 D OLGA: You’re all radiance to-day, I’ve never seen you look so lovely. And Masha is pretty, too. Andrey wouldn’t be bad-looking, if he wasn’t so stout; it does spoil his appearance. But I’ve grown old and very thin, I suppose it’s because I get angry with the girls at school. To-day I’m free. I’m at home. I haven’t got a headache, and I feel younger than I was yesterday. I’m only twenty-eight.... All’s well, God is everywhere, but it seems to me that if only I were married and could stay at home all day, it would be even better.
* 30 A ¶ Pause.
31 D OLGA: I should love my husband.
32 A ¶ To SOLENI.
* 33 D TUZENBACH: I’m tired of listening to the rot you talk.
34 A ¶ Entering the sitting-room.
* 35 D TUZENBACH: I forgot to say that Vershinin, our new lieutenant-colonel of artillery, is coming to see us to-day.
36 A ¶ Sits down to the piano.
* 37 D OLGA: That’s good. I’m glad.
* 38 D IRINA: Is he old?
* 39 D TUZENBACH: Oh, no. Forty or forty-five, at the very outside.
40 A ¶ Plays softly.
* 41 D TUZENBACH: He seems rather a good sort. He’s certainly no fool, only he likes to hear himself speak.
* 42 D IRINA: Is he interesting?
* 43 D TUZENBACH: Oh, he’s all right, but there’s his wife, his mother-in-law, and two daughters. This is his second wife. He pays calls and tells everybody that he’s got a wife and two daughters. He’ll tell you so here. The wife isn’t all there, she does her hair like a flapper and gushes extremely. She talks philosophy and tries to commit suicide every now and again, apparently in order to annoy her husband. I should have left her long ago, but he bears up patiently, and just grumbles.
44 A ¶ Enters with CHEBUTIKIN from the dining-room.
* 45 D SOLENI: With one hand I can only lift fifty-four pounds, but with both hands I can lift 180, or even 200 pounds. From this I conclude that two men are not twice as strong as one, but three times, perhaps even more....
46 A ¶ Reads a newspaper as he walks.
* 47 D CHEBUTIKIN: If your hair is coming out... take an ounce of naphthaline and hail a bottle of spirit... dissolve and use daily....
48 A ¶ Makes a note in his pocket diary.

### SCENE pd_sisters_1 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANDREY, MASHA, VERSHININ, IRINA, TUZENBACH
* 1 D ANDREY: You can come to-morrow and fetch these documents.... Go along....
* 2 A ¶ Pause.
* 3 D ANDREY: He’s gone.
* 4 A ¶ A ring.
* 5 D ANDREY: Yes, yes....
6 A ¶ Stretches himself and slowly goes into his own room.
7 A ¶ Behind the scene the nurse is singing a lullaby to the child.
8 A MASHA and VERSHININ come in.
9 A While they talk, a maidservant lights candles and a lamp.
* 10 D MASHA: I don’t know.
* 11 A ¶ Pause.
* 12 D MASHA: I don’t know. Of course, habit counts for a great deal. After father’s death, for instance, it took us a long time to get used to the absence of orderlies. But, apart from habit, it seems to me in all fairness that, however it may be in other towns, the best and most-educated people are army men.
* 13 D VERSHININ: I’m thirsty. I should like some tea.
14 A ¶ Glancing at her watch.
* 15 D MASHA: They’ll bring some soon. I was given in marriage when I was eighteen, and I was afraid of my husband because he was a teacher and I’d only just left school. He then seemed to me frightfully wise and learned and important. And now, unfortunately, that has changed.
* 16 D VERSHININ: Yes... yes.
* 17 D MASHA: I don’t speak of my husband, I’ve grown used to him, but civilians in general are so often coarse, impolite, uneducated. Their rudeness offends me, it angers me. I suffer when I see that a man isn’t quite sufficiently refined, or delicate, or polite. I simply suffer agonies when I happen to be among schoolmasters, my husband’s colleagues.
* 18 D VERSHININ: Yes.... It seems to me that civilians and army men are equally interesting, in this town, at any rate. It’s all the same! If you listen to a member of the local intelligentsia, whether to civilian or military, he will tell you that he’s sick of his wife, sick of his house, sick of his estate, sick of his horses.... We Russians are extremely gifted in the direction of thinking on an exalted plane, but, tell me, why do we aim so low in real life? Why?
* 19 D MASHA: Why?
* 20 D VERSHININ: Why is a Russian sick of his children, sick of his wife? And why are his wife and children sick of him?
* 21 D MASHA: You’re a little downhearted to-day.
* 22 D VERSHININ: Perhaps I am. I haven’t had any dinner, I’ve had nothing since the morning. My daughter is a little unwell, and when my girls are ill, I get very anxious and my conscience tortures me because they have such a mother. Oh, if you had seen her to-day! What a trivial personality! We began quarrelling at seven in the morning and at nine I slammed the door and went out.
* 23 A ¶ Pause.
* 24 D VERSHININ: I never speak of her, it’s strange that I bear my complaints to you alone.
25 A ¶ Kisses her hand.
* 26 D VERSHININ: Don’t be angry with me. I haven’t anybody but you, nobody at all....
* 27 A ¶ Pause.
* 28 D MASHA: What a noise in the oven. Just before father’s death there was a noise in the pipe, just like that.
* 29 D VERSHININ: Are you superstitious?
* 30 D MASHA: Yes.
* 31 D VERSHININ: That’s strange.
32 A ¶ Kisses her hand.
* 33 D VERSHININ: You are a splendid, wonderful woman. Splendid, wonderful! It is dark here, but I see your sparkling eyes.
* 34 A ¶ Sits on another chair.
* 35 D MASHA: There is more light here.
* 36 D VERSHININ: I love you, love you, love you... I love your eyes, your movements, I dream of them.... Splendid, wonderful woman!
37 A ¶ Laughing.
* 38 D MASHA: When you talk to me like that, I laugh; I don’t know why, for I’m afraid. Don’t repeat it, please....
39 A ¶ In an undertone.
* 40 D MASHA: No, go on, it’s all the same to me....
41 A ¶ Covers her face with her hands.
* 42 D MASHA: Somebody’s coming, let’s talk about something else.
43 A ¶ IRINA and TUZENBACH come in through the dining-room.
* 44 D TUZENBACH: My surname is really triple. I am called Baron Tuzenbach-Krone-Altschauer, but I am Russian and Orthodox, the same as you. There is very little German left in me, unless perhaps it is the patience and the obstinacy with which I bore you. I see you home every night.
* 45 D IRINA: How tired I am!
* 46 D TUZENBACH: And I’ll come to the telegraph office to see you home every day for ten or twenty years, until you drive me away.
47 A ¶ He sees MASHA and VERSHININ; joyfully.

### SCENE pd_sisters_2 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): KULIGIN, TUZENBACH, IRINA, CHEBUTIKIN, VERSHININ
* 1 D KULIGIN: Speaking’s a bit difficult, eh, Ivan Romanovitch!
2 A ¶ Pats him on the shoulder.
* 3 D KULIGIN: Good man! In vino veritas , the ancients used to say.
* 4 D TUZENBACH: They keep on asking me to get up a concert in aid of the sufferers.
* 5 D IRINA: As if one could do anything....
* 6 D TUZENBACH: It might be arranged, if necessary. In my opinion Maria Sergeyevna is an excellent pianist.
* 7 D KULIGIN: Yes, excellent!
* 8 D IRINA: She’s forgotten everything. She hasn’t played for three years... or four.
9 D TUZENBACH: In this town absolutely nobody understands music, not a soul except myself, but I do understand it, and assure you on my word of honour that Maria Sergeyevna plays excellently, almost with genius.
* 10 D KULIGIN: You are right, Baron, I’m awfully fond of Masha. She’s very fine.
* 11 D TUZENBACH: To be able to play so admirably and to realize at the same time that nobody, nobody can understand you!
* 12 A ¶ Sighs.
* 13 D KULIGIN: Yes.... But will it be quite all right for her to take part in a concert?
* 14 A ¶ Pause.
* 15 D KULIGIN: You see, I don’t know anything about it. Perhaps it will even be all to the good. Although I must admit that our Director is a good man, a very good man even, a very clever man, still he has such views.... Of course it isn’t his business but still, if you wish it, perhaps I’d better talk to him.
16 A ¶ CHEBUTIKIN takes a porcelain clock into his hands and examines it.
* 17 D VERSHININ: I got so dirty while the fire was on, I don’t look like anybody on earth.
* 18 A ¶ Pause.
* 19 D VERSHININ: Yesterday I happened to hear, casually, that they want to transfer our brigade to some distant place. Some said to Poland, others, to Chita.
* 20 D TUZENBACH: I heard so, too. Well, if it is so, the town will be quite empty.
* 21 D IRINA: And we’ll go away, too!
22 A ¶ Drops the clock which breaks to pieces.
* 23 D CHEBUTIKIN: To smithereens!
* 24 A ¶ A pause; everybody is pained and confused.
25 A ¶ Gathering up the pieces.
* 26 D KULIGIN: To smash such a valuable object--oh, Ivan Romanovitch, Ivan Romanovitch! A very bad mark for your misbehaviour!
* 27 D IRINA: That clock used to belong to our mother.
* 28 D CHEBUTIKIN: Perhaps.... To your mother, your mother. Perhaps I didn’t break it; it only looks as if I broke it. Perhaps we only think that we exist, when really we don’t. I don’t know anything, nobody knows anything.
29 A ¶ At the door.
* 30 D CHEBUTIKIN: What are you looking at? Natasha has a little romance with Protopopov, and you don’t see it.... There you sit and see nothing, and Natasha has a little romance with Protopovov....
31 A ¶ Sings.
* 32 D CHEBUTIKIN: Won’t you please accept this date....
33 A ¶ Exit.
* 34 D VERSHININ: Yes.
35 A ¶ Laughs.
* 36 D VERSHININ: How strange everything really is!
* 37 A ¶ Pause.
* 38 D VERSHININ: When the fire broke out, I hurried off home; when I get there I see the house is whole, uninjured, and in no danger, but my two girls are standing by the door in just their underclothes, their mother isn’t there, the crowd is excited, horses and dogs are running about, and the girls’ faces are so agitated, terrified, beseeching, and I don’t know what else. My heart was pained when I saw those faces. My God, I thought, what these girls will have to put up with if they live long! I caught them up and ran, and still kept on thinking the one thing: what they will have to live through in this world!
* 39 A ¶ Fire-alarm; a pause.
* 40 D VERSHININ: I come here and find their mother shouting and angry.
41 A ¶ MASHA enters with a pillow and sits on the sofa.
* 42 D VERSHININ: And when my girls were standing by the door in just their underclothes, and the street was red from the fire, there was a dreadful noise, and I thought that something of the sort used to happen many years ago when an enemy made a sudden attack, and looted, and burned.... And at the same time what a difference there really is between the present and the past! And when a little more time has gone by, in two or three hundred years perhaps, people will look at our present life with just the same fear, and the same contempt, and the whole past will seem clumsy and dull, and very uncomfortable, and strange. Oh, indeed, what a life there will be, what a life!
43 A ¶ Laughs.
* 44 D VERSHININ: Forgive me, I’ve dropped into philosophy again. Please let me continue. I do awfully want to philosophize, it’s just how I feel at present.
* 45 A ¶ Pause.

### SCENE pd_sisters_3 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANFISA, VERSHININ, IRINA, OLGA, MASHA
1 A ¶ Kisses her.
* 2 D ANFISA: Well, little girl, here I am, still alive! Still alive! In the High School, together with little Olga, in her official apartments... so the Lord has appointed for my old age. Sinful woman that I am, I’ve never lived like that in my life before.... A large flat, government property, and I’ve a whole room and bed to myself. All government property. I wake up at nights and, oh God, and Holy Mother, there isn’t a happier person than I!
3 A ¶ Looks at his watch.
* 4 D VERSHININ: We are going soon, Olga Sergeyevna. It’s time for me to go.
* 5 A ¶ Pause.
* 6 D VERSHININ: I wish you every... every.... Where’s Maria Sergeyevna?
* 7 D IRINA: She’s somewhere in the garden. I’ll go and look for her.
* 8 D VERSHININ: If you’ll be so kind. I haven’t time.
* 9 D ANFISA: I’ll go and look, too.
10 A ¶ Shouts.
* 11 D ANFISA: Little Masha, co-ee!
12 A ¶ Goes out with IRINA down into the garden.
* 13 D ANFISA: Co-ee, co-ee!
* 14 D VERSHININ: Everything comes to an end. And so we, too, must part.
15 A ¶ Looks at his watch.
* 16 D VERSHININ: The town gave us a sort of farewell breakfast, we had champagne to drink and the mayor made a speech, and I ate and listened, but my soul was here all the time....
17 A ¶ Looks round the garden.
* 18 D VERSHININ: I’m so used to you now.
* 19 D OLGA: Shall we ever meet again?
* 20 D VERSHININ: Probably not.
* 21 A ¶ Pause.
* 22 D VERSHININ: My wife and both my daughters will stay here another two months. If anything happens, or if anything has to be done...
* 23 D OLGA: Yes, yes, of course. You need not worry.
* 24 A ¶ Pause.
* 25 D OLGA: To-morrow there won’t be a single soldier left in the town, it will all be a memory, and, of course, for us a new life will begin....
* 26 A ¶ Pause.
* 27 D OLGA: None of our plans are coming right. I didn’t want to be a head-mistress, but they made me one, all the same. It means there’s no chance of Moscow....
* 28 D VERSHININ: Well... thank you for everything. Forgive me if I’ve... I’ve said such an awful lot--forgive me for that too, don’t think badly of me.
29 A ¶ Wipes her eyes.
* 30 D OLGA: Why isn’t Masha coming...
* 31 D VERSHININ: What else can I say in parting? Can I philosophize about anything?
32 A ¶ Laughs.
* 33 D VERSHININ: Life is heavy. To many of us it seems dull and hopeless, but still, it must be acknowledged that it is getting lighter and clearer, and it seems that the time is not far off when it will be quite clear.
34 A ¶ Looks at his watch.
* 35 D VERSHININ: It’s time I went! Mankind used to be absorbed in wars, and all its existence was filled with campaigns, attacks, defeats, now we’ve outlived all that, leaving after us a great waste place, which there is nothing to fill with at present; but mankind is looking for something, and will certainly find it. Oh, if it only happened more quickly.
* 36 A ¶ Pause.
* 37 D VERSHININ: If only education could be added to industry, and industry to education.
38 A ¶ Looks at his watch.
* 39 D VERSHININ: It’s time I went....
* 40 D OLGA: Here she comes.
41 A ¶ Enter MASHA.
* 42 D VERSHININ: I came to say good-bye....
43 A ¶ OLGA steps aside a little, so as not to be in their way.
44 A ¶ Looking him in the face.
* 45 D MASHA: Good-bye.
