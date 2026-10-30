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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0004.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_husband_24 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): PHIPPS, MRS. CHEVELEY, LORD GORING, LORD CAVERSHAM, SIR ROBERT CHILTERN
1 D PHIPPS: The candles in the drawing-room are lit, madam, as you directed.
2 D MRS. CHEVELEY: Thank you.
3 A ¶ Rises hastily and slips the letter under a large silver-cased blotting-book that is lying on the table .
4 D PHIPPS: I trust the shades will be to your liking, madam. They are the most becoming we have. They are the same as his lordship uses himself when he is dressing for dinner.
5 A ¶ With a smile .
6 D MRS. CHEVELEY: Then I am sure they will be perfectly right.
7 A ¶ Gravely .
8 D PHIPPS: Thank you, madam.
9 A ¶ MRS. CHEVELEY goes into the drawing-room .
10 A PHIPPS closes the door and retires .
11 A The door is then slowly opened , and MRS. CHEVELEY comes out and creeps stealthily towards the writing-table .
* 12 A Suddenly voices are heard from the smoking-room .
13 A MRS. CHEVELEY grows pale , and stops .
14 A The voices grow louder , and she goes back into the drawing-room , biting her lip .
15 A ¶ Enter LORD GORING and LORD CAVERSHAM.
16 A ¶ Expostulating .
17 D LORD GORING: My dear father, if I am to get married, surely you will allow me to choose the time, place, and person? Particularly the person.
18 A ¶ Testily .
19 D LORD CAVERSHAM: That is a matter for me, sir. You would probably make a very poor choice. It is I who should be consulted, not you. There is property at stake. It is not a matter for affection. Affection comes later on in married life.
20 D LORD GORING: Yes. In married life affection comes when people thoroughly dislike each other, father, doesn’t it?
21 A ¶ Puts on LORD CAVERSHAM’S cloak for him .
22 D LORD CAVERSHAM: Certainly, sir. I mean certainly not, sir. You are talking very foolishly to-night. What I say is that marriage is a matter for common sense.
23 D LORD GORING: But women who have common sense are so curiously plain, father, aren’t they? Of course I only speak from hearsay.
24 D LORD CAVERSHAM: No woman, plain or pretty, has any common sense at all, sir. Common sense is the privilege of our sex.
25 D LORD GORING: Quite so. And we men are so self-sacrificing that we never use it, do we, father?
26 D LORD CAVERSHAM: I use it, sir. I use nothing else.
27 D LORD GORING: So my mother tells me.
28 D LORD CAVERSHAM: It is the secret of your mother’s happiness. You are very heartless, sir, very heartless.
29 D LORD GORING: I hope not, father.
30 A ¶ Goes out for a moment .
31 A Then returns , looking rather put out , with SIR ROBERT CHILTERN.
32 D SIR ROBERT CHILTERN: My dear Arthur, what a piece of good luck meeting you on the doorstep! Your servant had just told me you were not at home. How extraordinary!
33 D LORD GORING: The fact is, I am horribly busy to-night, Robert, and I gave orders I was not at home to any one. Even my father had a comparatively cold reception. He complained of a draught the whole time.
34 D SIR ROBERT CHILTERN: Ah! you must be at home to me, Arthur. You are my best friend. Perhaps by to-morrow you will be my only friend. My wife has discovered everything.
35 D LORD GORING: Ah! I guessed as much!
36 A ¶ Looking at him .
37 D SIR ROBERT CHILTERN: Really! How?
38 A ¶ After some hesitation .
39 D LORD GORING: Oh, merely by something in the expression of your face as you came in. Who told her?
40 D SIR ROBERT CHILTERN: Mrs. Cheveley herself. And the woman I love knows that I began my career with an act of low dishonesty, that I built up my life upon sands of shame—that I sold, like a common huckster, the secret that had been intrusted to me as a man of honour. I thank heaven poor Lord Radley died without knowing that I betrayed him. I would to God I had died before I had been so horribly tempted, or had fallen so low.
41 A ¶ Burying his face in his hands .
* 42 A ¶ After a pause .
43 D LORD GORING: You have heard nothing from Vienna yet, in answer to your wire?
44 A ¶ Looking up .
45 D SIR ROBERT CHILTERN: Yes; I got a telegram from the first secretary at eight o’clock to-night.
46 D LORD GORING: Well?
47 D SIR ROBERT CHILTERN: Nothing is absolutely known against her. On the contrary, she occupies a rather high position in society. It is a sort of open secret that Baron Arnheim left her the greater portion of his immense fortune. Beyond that I can learn nothing.
48 D LORD GORING: She doesn’t turn out to be a spy, then?
49 D SIR ROBERT CHILTERN: Oh! spies are of no use nowadays. Their profession is over. The newspapers do their work instead.
50 D LORD GORING: And thunderingly well they do it.
51 D SIR ROBERT CHILTERN: Arthur, I am parched with thirst. May I ring for something? Some hock and seltzer?

### SCENE pt_husband_25 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD GORING, SIR ROBERT CHILTERN, PHIPPS
1 D LORD GORING: Certainly. Let me.
2 A ¶ Rings the bell .
3 D SIR ROBERT CHILTERN: Thanks! I don’t know what to do, Arthur, I don’t know what to do, and you are my only friend. But what a friend you are—the one friend I can trust. I can trust you absolutely, can’t I?
4 A ¶ Enter PHIPPS.
5 D LORD GORING: My dear Robert, of course. Oh!
6 A ¶ To PHIPPS.
7 D LORD GORING: Bring some hock and seltzer.
8 D PHIPPS: Yes, my lord.
9 D LORD GORING: And Phipps!
10 D PHIPPS: Yes, my lord.
11 D LORD GORING: Will you excuse me for a moment, Robert? I want to give some directions to my servant.
12 D SIR ROBERT CHILTERN: Certainly.
13 D LORD GORING: When that lady calls, tell her that I am not expected home this evening. Tell her that I have been suddenly called out of town. You understand?
14 D PHIPPS: The lady is in that room, my lord. You told me to show her into that room, my lord.
15 D LORD GORING: You did perfectly right.
16 A ¶ Exit PHIPPS.
17 D LORD GORING: What a mess I am in. No; I think I shall get through it. I’ll give her a lecture through the door. Awkward thing to manage, though.
18 D SIR ROBERT CHILTERN: Arthur, tell me what I should do. My life seems to have crumbled about me. I am a ship without a rudder in a night without a star.
19 D LORD GORING: Robert, you love your wife, don’t you?
20 D SIR ROBERT CHILTERN: I love her more than anything in the world. I used to think ambition the great thing. It is not. Love is the great thing in the world. There is nothing but love, and I love her. But I am defamed in her eyes. I am ignoble in her eyes. There is a wide gulf between us now. She has found me out, Arthur, she has found me out.
21 D LORD GORING: Has she never in her life done some folly—some indiscretion—that she should not forgive your sin?
22 D SIR ROBERT CHILTERN: My wife! Never! She does not know what weakness or temptation is. I am of clay like other men. She stands apart as good women do—pitiless in her perfection—cold and stern and without mercy. But I love her, Arthur. We are childless, and I have no one else to love, no one else to love me. Perhaps if God had sent us children she might have been kinder to me. But God has given us a lonely house. And she has cut my heart in two. Don’t let us talk of it. I was brutal to her this evening. But I suppose when sinners talk to saints they are brutal always. I said to her things that were hideously true, on my side, from my stand-point, from the standpoint of men. But don’t let us talk of that.
23 D LORD GORING: Your wife will forgive you. Perhaps at this moment she is forgiving you. She loves you, Robert. Why should she not forgive?
24 D SIR ROBERT CHILTERN: God grant it! God grant it!
25 A ¶ Buries his face in his hands .
26 D SIR ROBERT CHILTERN: But there is something more I have to tell you, Arthur.
27 A ¶ Enter PHIPPS with drinks .
28 A ¶ Hands hock and seltzer to SIR ROBERT CHILTERN.
29 D PHIPPS: Hock and seltzer, sir.
30 D SIR ROBERT CHILTERN: Thank you.
31 D LORD GORING: Is your carriage here, Robert?
32 D SIR ROBERT CHILTERN: No; I walked from the club.
33 D LORD GORING: Sir Robert will take my cab, Phipps.
34 D PHIPPS: Yes, my lord.
35 A ¶ Exit .
36 D LORD GORING: Robert, you don’t mind my sending you away?
37 D SIR ROBERT CHILTERN: Arthur, you must let me stay for five minutes. I have made up my mind what I am going to do to-night in the House. The debate on the Argentine Canal is to begin at eleven.
* 38 A ¶ A chair falls in the drawing-room .
39 D SIR ROBERT CHILTERN: What is that?
40 D LORD GORING: Nothing.
41 D SIR ROBERT CHILTERN: I heard a chair fall in the next room. Some one has been listening.
42 D LORD GORING: No, no; there is no one there.
43 D SIR ROBERT CHILTERN: There is some one. There are lights in the room, and the door is ajar. Some one has been listening to every secret of my life. Arthur, what does this mean?
44 D LORD GORING: Robert, you are excited, unnerved. I tell you there is no one in that room. Sit down, Robert.
45 D SIR ROBERT CHILTERN: Do you give me your word that there is no one there?

### SCENE pt_husband_26 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD GORING, SIR ROBERT CHILTERN, CHEVELEY
1 D LORD GORING: Yes.
2 D SIR ROBERT CHILTERN: Your word of honour?
3 A ¶ Sits down .
4 D LORD GORING: Yes.
5 A ¶ Rises .
6 D SIR ROBERT CHILTERN: Arthur, let me see for myself.
7 D LORD GORING: No, no.
8 D SIR ROBERT CHILTERN: If there is no one there why should I not look in that room? Arthur, you must let me go into that room and satisfy myself. Let me know that no eavesdropper has heard my life’s secret. Arthur, you don’t realise what I am going through.
9 D LORD GORING: Robert, this must stop. I have told you that there is no one in that room—that is enough.
10 A ¶ Rushes to the door of the room .
11 D SIR ROBERT CHILTERN: It is not enough. I insist on going into this room. You have told me there is no one there, so what reason can you have for refusing me?
12 D LORD GORING: For God’s sake, don’t! There is some one there. Some one whom you must not see.
13 D SIR ROBERT CHILTERN: Ah, I thought so!
14 D LORD GORING: I forbid you to enter that room.
15 D SIR ROBERT CHILTERN: Stand back. My life is at stake. And I don’t care who is there. I will know who it is to whom I have told my secret and my shame.
16 A ¶ Enters room .
17 D LORD GORING: Great heavens! his own wife!
18 A ¶ SIR ROBERT CHILTERN comes back , with a look of scorn and anger on his face .
19 D SIR ROBERT CHILTERN: What explanation have you to give me for the presence of that woman here?
20 D LORD GORING: Robert, I swear to you on my honour that that lady is stainless and guiltless of all offence towards you.
21 D SIR ROBERT CHILTERN: She is a vile, an infamous thing!
22 D LORD GORING: Don’t say that, Robert! It was for your sake she came here. It was to try and save you she came here. She loves you and no one else.
23 D SIR ROBERT CHILTERN: You are mad. What have I to do with her intrigues with you? Let her remain your mistress! You are well suited to each other. She, corrupt and shameful—you, false as a friend, treacherous as an enemy even—
24 D LORD GORING: It is not true, Robert. Before heaven, it is not true. In her presence and in yours I will explain all.
25 D SIR ROBERT CHILTERN: Let me pass, sir. You have lied enough upon your word of honour.
26 A ¶ SIR ROBERT CHILTERN goes out .
27 A LORD GORING rushes to the door of the drawing-room , when MRS. CHEVELEY comes out , looking radiant and much amused .
28 A ¶ With a mock curtsey.
29 D MRS. CHEVELEY: Good evening, Lord Goring!
30 D LORD GORING: Mrs. Cheveley! Great heavens! . . . May I ask what you were doing in my drawing-room?
31 D MRS. CHEVELEY: Merely listening. I have a perfect passion for listening through keyholes. One always hears such wonderful things through them.
32 D LORD GORING: Doesn’t that sound rather like tempting Providence?
33 D MRS. CHEVELEY: Oh! surely Providence can resist temptation by this time.
34 A ¶ Makes a sign to him to take her cloak off , which he does .
35 D LORD GORING: I am glad you have called. I am going to give you some good advice.
36 D MRS. CHEVELEY: Oh! pray don’t. One should never give a woman anything that she can’t wear in the evening.
37 D LORD GORING: I see you are quite as wilful as you used to be.
38 D MRS. CHEVELEY: Far more! I have greatly improved. I have had more experience.
39 D LORD GORING: Too much experience is a dangerous thing. Pray have a cigarette. Half the pretty women in London smoke cigarettes. Personally I prefer the other half.
40 D MRS. CHEVELEY: Thanks. I never smoke. My dressmaker wouldn’t like it, and a woman’s first duty in life is to her dressmaker, isn’t it? What the second duty is, no one has as yet discovered.
41 D LORD GORING: You have come here to sell me Robert Chiltern’s letter, haven’t you?
42 D MRS. CHEVELEY: To offer it to you on conditions. How did you guess that?
43 D LORD GORING: Because you haven’t mentioned the subject. Have you got it with you?
* 44 A ¶ Sitting down .
45 D MRS. CHEVELEY: Oh, no! A well-made dress has no pockets.
46 D LORD GORING: What is your price for it?

### SCENE pt_husband_28 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD GORING, MRS. CHEVELEY
1 D LORD GORING: Oh! I do that as it is. And self-sacrifice is a thing that should be put down by law. It is so demoralising to the people for whom one sacrifices oneself. They always go to the bad.
2 D MRS. CHEVELEY: As if anything could demoralise Robert Chiltern! You seem to forget that I know his real character.
3 D LORD GORING: What you know about him is not his real character. It was an act of folly done in his youth, dishonourable, I admit, shameful, I admit, unworthy of him, I admit, and therefore . . . not his true character.
4 D MRS. CHEVELEY: How you men stand up for each other!
5 D LORD GORING: How you women war against each other!
6 A ¶ Bitterly .
7 D MRS. CHEVELEY: I only war against one woman, against Gertrude Chiltern. I hate her. I hate her now more than ever.
8 D LORD GORING: Because you have brought a real tragedy into her life, I suppose.
9 A ¶ With a sneer .
10 D MRS. CHEVELEY: Oh, there is only one real tragedy in a woman’s life. The fact that her past is always her lover, and her future invariably her husband.
11 D LORD GORING: Lady Chiltern knows nothing of the kind of life to which you are alluding.
12 D MRS. CHEVELEY: A woman whose size in gloves is seven and three-quarters never knows much about anything. You know Gertrude has always worn seven and three-quarters? That is one of the reasons why there was never any moral sympathy between us. . . . Well, Arthur, I suppose this romantic interview may be regarded as at an end. You admit it was romantic, don’t you? For the privilege of being your wife I was ready to surrender a great prize, the climax of my diplomatic career. You decline. Very well. If Sir Robert doesn’t uphold my Argentine scheme, I expose him. Voilà tout .
13 D LORD GORING: You mustn’t do that. It would be vile, horrible, infamous.
14 A ¶ Shrugging her shoulders .
15 D MRS. CHEVELEY: Oh! don’t use big words. They mean so little. It is a commercial transaction. That is all. There is no good mixing up sentimentality in it. I offered to sell Robert Chiltern a certain thing. If he won’t pay me my price, he will have to pay the world a greater price. There is no more to be said. I must go. Good-bye. Won’t you shake hands?
16 D LORD GORING: With you? No. Your transaction with Robert Chiltern may pass as a loathsome commercial transaction of a loathsome commercial age; but you seem to have forgotten that you came here to-night to talk of love, you whose lips desecrated the word love, you to whom the thing is a book closely sealed, went this afternoon to the house of one of the most noble and gentle women in the world to degrade her husband in her eyes, to try and kill her love for him, to put poison in her heart, and bitterness in her life, to break her idol, and, it may be, spoil her soul. That I cannot forgive you. That was horrible. For that there can be no forgiveness.
17 D MRS. CHEVELEY: Arthur, you are unjust to me. Believe me, you are quite unjust to me. I didn’t go to taunt Gertrude at all. I had no idea of doing anything of the kind when I entered. I called with Lady Markby simply to ask whether an ornament, a jewel, that I lost somewhere last night, had been found at the Chilterns’. If you don’t believe me, you can ask Lady Markby. She will tell you it is true. The scene that occurred happened after Lady Markby had left, and was really forced on me by Gertrude’s rudeness and sneers. I called, oh!—a little out of malice if you like—but really to ask if a diamond brooch of mine had been found. That was the origin of the whole thing.
18 D LORD GORING: A diamond snake-brooch with a ruby?
19 D MRS. CHEVELEY: Yes. How do you know?
20 D LORD GORING: Because it is found. In point of fact, I found it myself, and stupidly forgot to tell the butler anything about it as I was leaving.
21 A ¶ Goes over to the writing-table and pulls out the drawers .
22 D LORD GORING: It is in this drawer. No, that one. This is the brooch, isn’t it?
23 A ¶ Holds up the brooch .
24 D MRS. CHEVELEY: Yes. I am so glad to get it back. It was . . a present.
25 D LORD GORING: Won’t you wear it?
26 D MRS. CHEVELEY: Certainly, if you pin it in.
27 A ¶ LORD GORING suddenly clasps it on her arm .
28 D MRS. CHEVELEY: Why do you put it on as a bracelet? I never knew it could be worn as a bracelet.
29 D LORD GORING: Really?
30 A ¶ Holding out her handsome arm .
31 D MRS. CHEVELEY: No; but it looks very well on me as a bracelet, doesn’t it?
32 D LORD GORING: Yes; much better than when I saw it last.
33 D MRS. CHEVELEY: When did you see it last?
* 34 A ¶ Calmly .
35 D LORD GORING: Oh, ten years ago, on Lady Berkshire, from whom you stole it.
36 A ¶ Starting .
37 D MRS. CHEVELEY: What do you mean?
38 D LORD GORING: I mean that you stole that ornament from my cousin, Mary Berkshire, to whom I gave it when she was married. Suspicion fell on a wretched servant, who was sent away in disgrace. I recognised it last night. I determined to say nothing about it till I had found the thief. I have found the thief now, and I have heard her own confession.
39 A ¶ Tossing her head .
40 D MRS. CHEVELEY: It is not true.
41 D LORD GORING: You know it is true. Why, thief is written across your face at this moment.
42 D MRS. CHEVELEY: I will deny the whole affair from beginning to end. I will say that I have never seen this wretched thing, that it was never in my possession.
43 A ¶ MRS. CHEVELEY tries to get the bracelet off her arm , but fails .
44 A LORD GORING looks on amused .
45 A Her thin fingers tear at the jewel to no purpose .
46 A A curse breaks from her .
47 D LORD GORING: The drawback of stealing a thing, Mrs. Cheveley, is that one never knows how wonderful the thing that one steals is. You can’t get that bracelet off, unless you know where the spring is. And I see you don’t know where the spring is. It is rather difficult to find.
48 D MRS. CHEVELEY: You brute! You coward!

### SCENE pt_husband_29 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD GORING, MRS. CHEVELEY
1 A ¶ She tries again to unclasp the bracelet , but fails .
2 D LORD GORING: Oh! don’t use big words. They mean so little.
3 A ¶ Again tears at the bracelet in a paroxysm of rage , with inarticulate sounds .
4 A Then stops , and looks at LORD GORING.
5 D MRS. CHEVELEY: What are you going to do?
6 D LORD GORING: I am going to ring for my servant. He is an admirable servant. Always comes in the moment one rings for him. When he comes I will tell him to fetch the police.
7 A ¶ Trembling .
8 D MRS. CHEVELEY: The police? What for?
9 D LORD GORING: To-morrow the Berkshires will prosecute you. That is what the police are for.
10 A ¶ Is now in an agony of physical terror .
11 A Her face is distorted .
12 A Her mouth awry .
13 A A mask has fallen from her .
14 A She is , for the moment , dreadful to look at .
15 D MRS. CHEVELEY: Don’t do that. I will do anything you want. Anything in the world you want.
16 D LORD GORING: Give me Robert Chiltern’s letter.
17 D MRS. CHEVELEY: Stop! Stop! Let me have time to think.
18 D LORD GORING: Give me Robert Chiltern’s letter.
19 D MRS. CHEVELEY: I have not got it with me. I will give it to you to-morrow.
20 D LORD GORING: You know you are lying. Give it to me at once.
21 A ¶ MRS. CHEVELEY pulls the letter out , and hands it to him .
22 A She is horribly pale .
23 D LORD GORING: This is it?
24 A ¶ In a hoarse voice .
25 D MRS. CHEVELEY: Yes.
26 A ¶ Takes the letter , examines it , sighs , and burns it with the lamp .
27 D LORD GORING: For so well-dressed a woman, Mrs. Cheveley, you have moments of admirable common sense. I congratulate you.
28 A ¶ Catches sight of LADY CHILTERN’S letter , the cover of which is just showing from under the blotting-book .
29 D MRS. CHEVELEY: Please get me a glass of water.
30 D LORD GORING: Certainly.
31 A ¶ Goes to the corner of the room and pours out a glass of water .
32 A While his back is turned MRS. CHEVELEY steals LADY CHILTERN’S letter .
33 A When LORD GORING returns the glass she refuses it with a gesture .
34 D MRS. CHEVELEY: Thank you. Will you help me on with my cloak?
35 D LORD GORING: With pleasure.
36 A ¶ Puts her cloak on .
37 D MRS. CHEVELEY: Thanks. I am never going to try to harm Robert Chiltern again.
38 D LORD GORING: Fortunately you have not the chance, Mrs. Cheveley.
39 D MRS. CHEVELEY: Well, if even I had the chance, I wouldn’t. On the contrary, I am going to render him a great service.
40 D LORD GORING: I am charmed to hear it. It is a reformation.
41 D MRS. CHEVELEY: Yes. I can’t bear so upright a gentleman, so honourable an English gentleman, being so shamefully deceived, and so—
42 D LORD GORING: Well?
43 D MRS. CHEVELEY: I find that somehow Gertrude Chiltern’s dying speech and confession has strayed into my pocket.
44 D LORD GORING: What do you mean?
45 A ¶ With a bitter note of triumph in her voice .
46 D MRS. CHEVELEY: I mean that I am going to send Robert Chiltern the love-letter his wife wrote to you to-night.
47 D LORD GORING: Love-letter?
48 A ¶ Laughing .
49 D MRS. CHEVELEY: ‘I want you. I trust you. I am coming to you. Gertrude.’
50 A ¶ LORD GORING rushes to the bureau and takes up the envelope , finds is empty , and turns round .
51 D LORD GORING: You wretched woman, must you always be thieving? Give me back that letter. I’ll take it from you by force. You shall not leave my room till I have got it.
52 A ¶ He rushes towards her , but MRS. CHEVELEY at once puts her hand on the electric bell that is on the table .
53 A The bell sounds with shrill reverberations , and PHIPPS enters .
* 54 A ¶ After a pause .

### SCENE pt_husband_30 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS. CHEVELEY, LORD GORING, JAMES, LORD CAVERSHAM
1 D MRS. CHEVELEY: Lord Goring merely rang that you should show me out. Good-night, Lord Goring!
2 A ¶ Goes out followed by PHIPPS.
3 A Her face is illumined with evil triumph .
4 A There is joy in her eyes .
5 A Youth seems to have come back to her .
6 A Her last glance is like a swift arrow .
7 A LORD GORING bites his lip , and lights a cigarette .
8 A ¶ FOURTH ACT
* 9 A ¶ Same as Act II .
10 A ¶ LORD GORING is standing by the fireplace with his hands in his pockets .
11 A He is looking rather bored .
12 A ¶ Pulls out his watch , inspects it , and rings the bell .
13 D LORD GORING: It is a great nuisance. I can’t find any one in this house to talk to. And I am full of interesting information. I feel like the latest edition of something or other.
14 A ¶ Enter servant .
15 D JAMES: Sir Robert is still at the Foreign Office, my lord.
16 D LORD GORING: Lady Chiltern not down yet?
17 D JAMES: Her ladyship has not yet left her room. Miss Chiltern has just come in from riding.
18 A ¶ To himself .
19 D LORD GORING: Ah! that is something.
20 D JAMES: Lord Caversham has been waiting some time in the library for Sir Robert. I told him your lordship was here.
21 D LORD GORING: Thank you! Would you kindly tell him I’ve gone?
22 A ¶ Bowing .
23 D JAMES: I shall do so, my lord.
24 A ¶ Exit servant .
25 D LORD GORING: Really, I don’t want to meet my father three days running. It is a great deal too much excitement for any son. I hope to goodness he won’t come up. Fathers should be neither seen nor heard. That is the only proper basis for family life. Mothers are different. Mothers are darlings.
26 A ¶ Throws himself down into a chair , picks up a paper and begins to read it .
27 A ¶ Enter LORD CAVERSHAM.
28 D LORD CAVERSHAM: Well, sir, what are you doing here? Wasting your time as usual, I suppose?
29 A ¶ Throws down paper and rises .
30 D LORD GORING: My dear father, when one pays a visit it is for the purpose of wasting other people’s time, not one’s own.
31 D LORD CAVERSHAM: Have you been thinking over what I spoke to you about last night?
32 D LORD GORING: I have been thinking about nothing else.
33 D LORD CAVERSHAM: Engaged to be married yet?
34 A ¶ Genially .
35 D LORD GORING: Not yet: but I hope to be before lunch-time.
36 A ¶ Caustically .
37 D LORD CAVERSHAM: You can have till dinner-time if it would be of any convenience to you.
38 D LORD GORING: Thanks awfully, but I think I’d sooner be engaged before lunch.
39 D LORD CAVERSHAM: Humph! Never know when you are serious or not.
40 D LORD GORING: Neither do I, father.
* 41 A ¶ A pause .
42 D LORD CAVERSHAM: I suppose you have read The Times this morning?
43 A ¶ Airily .
44 D LORD GORING: The Times? Certainly not. I only read The Morning Post . All that one should know about modern life is where the Duchesses are; anything else is quite demoralising.
45 D LORD CAVERSHAM: Do you mean to say you have not read The Times leading article on Robert Chiltern’s career?
46 D LORD GORING: Good heavens! No. What does it say?
47 D LORD CAVERSHAM: What should it say, sir? Everything complimentary, of course. Chiltern’s speech last night on this Argentine Canal scheme was one of the finest pieces of oratory ever delivered in the House since Canning.
48 D LORD GORING: Ah! Never heard of Canning. Never wanted to. And did . . . did Chiltern uphold the scheme?
49 D LORD CAVERSHAM: Uphold it, sir? How little you know him! Why, he denounced it roundly, and the whole system of modern political finance. This speech is the turning-point in his career, as The Times points out. You should read this article, sir.
50 A ¶ Opens The Times.
51 D LORD CAVERSHAM: ‘Sir Robert Chiltern . . . most rising of our young statesmen . . . Brilliant Orator . . . Unblemished career . . . Well-known integrity of character . . . Represents what is best in English public life . . . Noble contrast to the lax morality so common among foreign politicians.’ They will never say that of you, sir.

### SCENE pt_husband_32 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): MABEL CHILTERN, LORD CAVERSHAM, LORD GORING
1 D MABEL CHILTERN: Oh! I hope you are not going to leave me all alone with Lord Goring? Especially at such an early hour in the day.
2 D LORD CAVERSHAM: I am afraid I can’t take him with me to Downing Street. It is not the Prime Minster’s day for seeing the unemployed.
3 A ¶ Shakes hands with MABEL CHILTERN, takes up his hat and stick , and goes out , with a parting glare of indignation at LORD GORING.
4 A ¶ Takes up roses and begins to arrange them in a bowl on the table .
5 D MABEL CHILTERN: People who don’t keep their appointments in the Park are horrid.
6 D LORD GORING: Detestable.
7 D MABEL CHILTERN: I am glad you admit it. But I wish you wouldn’t look so pleased about it.
8 D LORD GORING: I can’t help it. I always look pleased when I am with you.
9 A ¶ Sadly .
10 D MABEL CHILTERN: Then I suppose it is my duty to remain with you?
11 D LORD GORING: Of course it is.
12 D MABEL CHILTERN: Well, my duty is a thing I never do, on principle. It always depresses me. So I am afraid I must leave you.
13 D LORD GORING: Please don’t, Miss Mabel. I have something very particular to say to you.
14 A ¶ Rapturously .
15 D MABEL CHILTERN: Oh! is it a proposal?
16 A ¶ Somewhat taken aback .
17 D LORD GORING: Well, yes, it is—I am bound to say it is.
18 A ¶ With a sigh of pleasure .
19 D MABEL CHILTERN: I am so glad. That makes the second to-day.
20 A ¶ Indignantly .
21 D LORD GORING: The second to-day? What conceited ass has been impertinent enough to dare to propose to you before I had proposed to you?
22 D MABEL CHILTERN: Tommy Trafford, of course. It is one of Tommy’s days for proposing. He always proposes on Tuesdays and Thursdays, during the Season.
23 D LORD GORING: You didn’t accept him, I hope?
24 D MABEL CHILTERN: I make it a rule never to accept Tommy. That is why he goes on proposing. Of course, as you didn’t turn up this morning, I very nearly said yes. It would have been an excellent lesson both for him and for you if I had. It would have taught you both better manners.
25 D LORD GORING: Oh! bother Tommy Trafford. Tommy is a silly little ass. I love you.
26 D MABEL CHILTERN: I know. And I think you might have mentioned it before. I am sure I have given you heaps of opportunities.
27 D LORD GORING: Mabel, do be serious. Please be serious.
28 D MABEL CHILTERN: Ah! that is the sort of thing a man always says to a girl before he has been married to her. He never says it afterwards.
29 A ¶ Taking hold of her hand .
30 D LORD GORING: Mabel, I have told you that I love you. Can’t you love me a little in return?
31 D MABEL CHILTERN: You silly Arthur! If you knew anything about . . . anything, which you don’t, you would know that I adore you. Every one in London knows it except you. It is a public scandal the way I adore you. I have been going about for the last six months telling the whole of society that I adore you. I wonder you consent to have anything to say to me. I have no character left at all. At least, I feel so happy that I am quite sure I have no character left at all.
32 A ¶ Catches her in his arms and kisses her .
* 33 A Then there is a pause of bliss .
34 D LORD GORING: Dear! Do you know I was awfully afraid of being refused!
35 A ¶ Looking up at him .
36 D MABEL CHILTERN: But you never have been refused yet by anybody, have you, Arthur? I can’t imagine any one refusing you.
37 A ¶ After kissing her again .
38 D LORD GORING: Of course I’m not nearly good enough for you, Mabel.
39 A ¶ Nestling close to him .
40 D MABEL CHILTERN: I am so glad, darling. I was afraid you were.
41 A ¶ After some hesitation .
42 D LORD GORING: And I’m . . . I’m a little over thirty.
43 D MABEL CHILTERN: Dear, you look weeks younger than that.
44 A ¶ Enthusiastically .
45 D LORD GORING: How sweet of you to say so! . . . And it is only fair to tell you frankly that I am fearfully extravagant.
46 D MABEL CHILTERN: But so am I, Arthur. So we’re sure to agree. And now I must go and see Gertrude.

### SCENE pt_husband_38 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD CAVERSHAM, LORD GORING, MASON, MABEL CHILTERN, SIR ROBERT CHILTERN
1 D LORD CAVERSHAM: What does this mean, sir? You don’t mean to say that this charming, clever young lady has been so foolish as to accept you?
2 D LORD GORING: Certainly, father! And Chiltern’s been wise enough to accept the seat in the Cabinet.
3 D LORD CAVERSHAM: I am very glad to hear that, Chiltern . . . I congratulate you, sir. If the country doesn’t go to the dogs or the Radicals, we shall have you Prime Minister, some day.
4 A ¶ Enter MASON.
5 D MASON: Luncheon is on the table, my Lady!
6 A ¶ MASON goes out .
7 D MABEL CHILTERN: You’ll stop to luncheon, Lord Caversham, won’t you?
8 D LORD CAVERSHAM: With pleasure, and I’ll drive you down to Downing Street afterwards, Chiltern. You have a great future before you, a great future. Wish I could say the same for you, sir.
9 A ¶ To LORD GORING.
10 D LORD CAVERSHAM: But your career will have to be entirely domestic.
11 D LORD GORING: Yes, father, I prefer it domestic.
12 D LORD CAVERSHAM: And if you don’t make this young lady an ideal husband, I’ll cut you off with a shilling.
13 D MABEL CHILTERN: An ideal husband! Oh, I don’t think I should like that. It sounds like something in the next world.
14 D LORD CAVERSHAM: What do you want him to be then, dear?
15 D MABEL CHILTERN: He can be what he chooses. All I want is to be . . . to be . . . oh! a real wife to him.
16 D LORD CAVERSHAM: Upon my word, there is a good deal of common sense in that, Lady Chiltern.
17 A ¶ They all go out except SIR ROBERT CHILTERN.
18 A He sinks in a chair , wrapt in thought .
19 A After a little time LADY CHILTERN returns to look for him .
20 A ¶ Leaning over the back of the chair .
21 D LADY CHILTERN: Aren’t you coming in, Robert?
22 A ¶ Taking her hand .
23 D SIR ROBERT CHILTERN: Gertrude, is it love you feel for me, or is it pity merely?
24 A ¶ Kisses him .
25 D LADY CHILTERN: It is love, Robert. Love, and only love. For both of us a new life is beginning.
* 26 A ¶ * * * * *
* 27 A ¶ * * * * *
* 28 A ¶ THE NORTHUMBERLAND PRESS, NEWCASTLE-UPON-TYNE

### SCENE pt_husband_9 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD GORING, MABEL CHILTERN
1 D LORD GORING: You should go to bed, Miss Mabel.
2 D MABEL CHILTERN: Lord Goring!
3 D LORD GORING: My father told me to go to bed an hour ago. I don’t see why I shouldn’t give you the same advice. I always pass on good advice. It is the only thing to do with it. It is never of any use to oneself.
4 D MABEL CHILTERN: Lord Goring, you are always ordering me out of the room. I think it most courageous of you. Especially as I am not going to bed for hours.
5 A ¶ Goes over to the sofa .
6 D MABEL CHILTERN: You can come and sit down if you like, and talk about anything in the world, except the Royal Academy, Mrs. Cheveley, or novels in Scotch dialect. They are not improving subjects.
7 A ¶ Catches sight of something that is lying on the sofa half hidden by the cushion .
8 D MABEL CHILTERN: What is this? Some one has dropped a diamond brooch! Quite beautiful, isn’t it?
9 A ¶ Shows it to him .
10 D MABEL CHILTERN: I wish it was mine, but Gertrude won’t let me wear anything but pearls, and I am thoroughly sick of pearls. They make one look so plain, so good and so intellectual. I wonder whom the brooch belongs to.
11 D LORD GORING: I wonder who dropped it.
12 D MABEL CHILTERN: It is a beautiful brooch.
13 D LORD GORING: It is a handsome bracelet.
14 D MABEL CHILTERN: It isn’t a bracelet. It’s a brooch.
15 D LORD GORING: It can be used as a bracelet.
16 A ¶ Takes it from her , and , pulling out a green letter-case , puts the ornament carefully in it , and replaces the whole thing in his breast-pocket with the most perfect sang froid .
17 D MABEL CHILTERN: What are you doing?
18 D LORD GORING: Miss Mabel, I am going to make a rather strange request to you.
19 A ¶ Eagerly .
20 D MABEL CHILTERN: Oh, pray do! I have been waiting for it all the evening.
21 A ¶ Is a little taken aback , but recovers himself .
22 D LORD GORING: Don’t mention to anybody that I have taken charge of this brooch. Should any one write and claim it, let me know at once.
23 D MABEL CHILTERN: That is a strange request.
24 D LORD GORING: Well, you see I gave this brooch to somebody once, years ago.
25 D MABEL CHILTERN: You did?
26 D LORD GORING: Yes.
27 A ¶ LADY CHILTERN enters alone .
* 28 A The other guests have gone .
29 D MABEL CHILTERN: Then I shall certainly bid you good-night. Good-night, Gertrude!
30 A ¶ Exit .
31 D LADY CHILTERN: Good-night, dear!
32 A ¶ To LORD GORING.
33 D LADY CHILTERN: You saw whom Lady Markby brought here to-night?
34 D LORD GORING: Yes. It was an unpleasant surprise. What did she come here for?
35 D LADY CHILTERN: Apparently to try and lure Robert to uphold some fraudulent scheme in which she is interested. The Argentine Canal, in fact.
36 D LORD GORING: She has mistaken her man, hasn’t she?
37 D LADY CHILTERN: She is incapable of understanding an upright nature like my husband’s!
38 D LORD GORING: Yes. I should fancy she came to grief if she tried to get Robert into her toils. It is extraordinary what astounding mistakes clever women make.
39 D LADY CHILTERN: I don’t call women of that kind clever. I call them stupid!
40 D LORD GORING: Same thing often. Good-night, Lady Chiltern!
41 D LADY CHILTERN: Good-night!
42 A ¶ Enter SIR ROBERT CHILTERN.
43 D SIR ROBERT CHILTERN: My dear Arthur, you are not going? Do stop a little!
44 D LORD GORING: Afraid I can’t, thanks. I have promised to look in at the Hartlocks’. I believe they have got a mauve Hungarian band that plays mauve Hungarian music. See you soon. Good-bye!
45 A ¶ Exit
46 D SIR ROBERT CHILTERN: How beautiful you look to-night, Gertrude!

### SCENE pt_pygmalion_0 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE DAUGHTER, THE MOTHER, THE BYSTANDER, FREDDY, THE FLOWER GIRL
* 1 A ¶ Covent Garden at 11.15 p.m.
* 2 A Torrents of heavy summer rain.
* 3 A Cab whistles blowing frantically in all directions.
4 A Pedestrians running for shelter into the market and under the portico of St. Paul’s Church, where there are already several people, among them a lady and her daughter in evening dress.
5 A They are all peering out gloomily at the rain, except one man with his back turned to the rest, who seems wholly preoccupied with a notebook in which he is writing busily.
* 6 A ¶ The church clock strikes the first quarter.
7 A ¶ THE DAUGHTER [in the space between the central pillars, close to the one on her left] I’m getting chilled to the bone.
8 A What can Freddy be doing all this time?
9 A He’s been gone twenty minutes.
10 A ¶ THE MOTHER [on her daughter’s right] Not so long.
11 A But he ought to have got us a cab by this.
12 A ¶ A BYSTANDER [on the lady’s right] He won’t get no cab not until half-past eleven, missus, when they come back after dropping their theatre fares.
13 D THE MOTHER: But we must have a cab. We can’t stand here until half-past eleven. It’s too bad.
14 D THE BYSTANDER: Well, it ain’t my fault, missus.
15 D THE DAUGHTER: If Freddy had a bit of gumption, he would have got one at the theatre door.
16 D THE MOTHER: What could he have done, poor boy?
17 D THE DAUGHTER: Other people got cabs. Why couldn’t he?
18 A ¶ Freddy rushes in out of the rain from the Southampton Street side, and comes between them closing a dripping umbrella.
19 A He is a young man of twenty, in evening dress, very wet around the ankles.
20 D THE DAUGHTER: Well, haven’t you got a cab?
21 D FREDDY: There’s not one to be had for love or money.
22 D THE MOTHER: Oh, Freddy, there must be one. You can’t have tried.
23 D THE DAUGHTER: It’s too tiresome. Do you expect us to go and get one ourselves?
24 D FREDDY: I tell you they’re all engaged. The rain was so sudden: nobody was prepared; and everybody had to take a cab. I’ve been to Charing Cross one way and nearly to Ludgate Circus the other; and they were all engaged.
25 D THE MOTHER: Did you try Trafalgar Square?
26 D FREDDY: There wasn’t one at Trafalgar Square.
27 D THE DAUGHTER: Did you try?
28 D FREDDY: I tried as far as Charing Cross Station. Did you expect me to walk to Hammersmith?
29 D THE DAUGHTER: You haven’t tried at all.
30 D THE MOTHER: You really are very helpless, Freddy. Go again; and don’t come back until you have found a cab.
31 D FREDDY: I shall simply get soaked for nothing.
32 D THE DAUGHTER: And what about us? Are we to stay here all night in this draught, with next to nothing on. You selfish pig—
33 D FREDDY: Oh, very well: I’ll go, I’ll go.
34 A ¶ He opens his umbrella and dashes off Strandwards, but comes into collision with a flower girl, who is hurrying in for shelter, knocking her basket out of her hands.
* 35 A A blinding flash of lightning, followed instantly by a rattling peal of thunder, orchestrates the incident.
36 D THE FLOWER GIRL: Nah then, Freddy: look wh’ y’ gowin, deah.
37 D FREDDY: Sorry
38 A ¶ he rushes off.
39 A ¶ THE FLOWER GIRL [picking up her scattered flowers and replacing them in the basket] There’s menners f’ yer!
40 A Te-oo banches o voylets trod into the mad. [She sits down on the plinth of the column, sorting her flowers, on the lady’s right.
41 A She is not at all an attractive person.
42 A She is perhaps eighteen, perhaps twenty, hardly older.
43 A She wears a little sailor hat of black straw that has long been exposed to the dust and soot of London and has seldom if ever been brushed.
44 A Her hair needs washing rather badly: its mousy color can hardly be natural.
45 A She wears a shoddy black coat that reaches nearly to her knees and is shaped to her waist.
46 A She has a brown skirt with a coarse apron.
47 A Her boots are much the worse for wear.
48 A She is no doubt as clean as she can afford to be; but compared to the ladies she is very dirty.
49 A Her features are no worse than theirs; but their condition leaves something to be desired; and she needs the services of a dentist].
50 D THE MOTHER: How do you know that my son’s name is Freddy, pray?
51 D THE FLOWER GIRL: Ow, eez ye-ooa san, is e? Wal, fewd dan y’ de-ooty bawmz a mather should, eed now bettern to spawl a pore gel’s flahrzn than ran awy atbaht pyin. Will ye-oo py me f’them?
* 52 A ¶ Here, with apologies, this desperate attempt to represent her dialect without a phonetic alphabet must be abandoned as unintelligible outside London.
53 D THE DAUGHTER: Do nothing of the sort, mother. The idea!
54 D THE MOTHER: Please allow me, Clara. Have you any pennies?
55 D THE DAUGHTER: No. I’ve nothing smaller than sixpence.
56 A ¶ THE FLOWER GIRL [hopefully] I can give you change for a tanner, kind lady.
57 A ¶ THE MOTHER [to Clara] Give it to me. [Clara parts reluctantly].
58 A Now [to the girl] This is for your flowers.
59 D THE FLOWER GIRL: Thank you kindly, lady.
60 D THE DAUGHTER: Make her give you the change. These things are only a penny a bunch.
61 D THE MOTHER: Do hold your tongue, Clara.
62 A ¶ To the girl.
63 D THE MOTHER: You can keep the change.
64 D THE FLOWER GIRL: Oh, thank you, lady.
65 D THE MOTHER: Now tell me how you know that young gentleman’s name.

### SCENE pt_pygmalion_13 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): HIGGINS, LIZA, PICKERING, MRS
1 A ¶ HIGGINS [impressively] Stop.
2 A You’ll come regularly to see your daughter.
3 A It’s your duty, you know.
4 A My brother is a clergyman; and he could help you in your talks with her.
5 A ¶ DOOLITTLE [evasively] Certainly.
6 A I’ll come, Governor.
7 A Not just this week, because I have a job at a distance.
8 A But later on you may depend on me.
9 A Afternoon, gentlemen.
10 A Afternoon, ma’am. [He takes off his hat to Mrs. Pearce, who disdains the salutation and goes out.
11 A He winks at Higgins, thinking him probably a fellow sufferer from Mrs. Pearce’s difficult disposition, and follows her].
12 D LIZA: Don’t you believe the old liar. He’d as soon you set a bull-dog on him as a clergyman. You won’t see him again in a hurry.
13 D HIGGINS: I don’t want to, Eliza. Do you?
14 D LIZA: Not me. I don’t want never to see him again, I don’t. He’s a disgrace to me, he is, collecting dust, instead of working at his trade.
15 D PICKERING: What is his trade, Eliza?
16 D LIZA: Talking money out of other people’s pockets into his own. His proper trade’s a navvy; and he works at it sometimes too—for exercise—and earns good money at it. Ain’t you going to call me Miss Doolittle any more?
17 D PICKERING: I beg your pardon, Miss Doolittle. It was a slip of the tongue.
18 D LIZA: Oh, I don’t mind; only it sounded so genteel. I should just like to take a taxi to the corner of Tottenham Court Road and get out there and tell it to wait for me, just to put the girls in their place a bit. I wouldn’t speak to them, you know.
19 D PICKERING: Better wait til we get you something really fashionable.
20 D HIGGINS: Besides, you shouldn’t cut your old friends now that you have risen in the world. That’s what we call snobbery.
21 D LIZA: You don’t call the like of them my friends now, I should hope. They’ve took it out of me often enough with their ridicule when they had the chance; and now I mean to get a bit of my own back. But if I’m to have fashionable clothes, I’ll wait. I should like to have some. Mrs. Pearce says you’re going to give me some to wear in bed at night different to what I wear in the daytime; but it do seem a waste of money when you could get something to show. Besides, I never could fancy changing into cold things on a winter night.
22 D MRS: PEARCE
23 A ¶ coming back.
24 D MRS: Now, Eliza. The new things have come for you to try on.
25 D LIZA: Ah—ow—oo—ooh!
26 A ¶ She rushes out.
27 D MRS: PEARCE
28 A ¶ following her.
29 D MRS: Oh, don’t rush about like that, girl
30 A ¶ She shuts the door behind her.
31 D HIGGINS: Pickering: we have taken on a stiff job.
32 A ¶ PICKERING [with conviction] Higgins: we have.
* 33 A ¶ It is Mrs. Higgins’s at-home day.
* 34 A Nobody has yet arrived.
* 35 A Her drawing-room, in a flat on Chelsea embankment, has three windows looking on the river; and the ceiling is not so lofty as it would be in an older house of the same pretension.
* 36 A The windows are open, giving access to a balcony with flowers in pots.
* 37 A If you stand with your face to the windows, you have the fireplace on your left and the door in the right-hand wall close to the corner nearest the windows.
38 A ¶ Mrs. Higgins was brought up on Morris and Burne Jones; and her room, which is very unlike her son’s room in Wimpole Street, is not crowded with furniture and little tables and nicknacks.
* 39 A In the middle of the room there is a big ottoman; and this, with the carpet, the Morris wall-papers, and the Morris chintz window curtains and brocade covers of the ottoman and its cushions, supply all the ornament, and are much too handsome to be hidden by odds and ends of useless things.
* 40 A A few good oil-paintings from the exhibitions in the Grosvenor Gallery thirty years ago (the Burne Jones, not the Whistler side of them) are on the walls.
* 41 A The only landscape is a Cecil Lawson on the scale of a Rubens.
42 A There is a portrait of Mrs. Higgins as she was when she defied fashion in her youth in one of the beautiful Rossettian costumes which, when caricatured by people who did not understand, led to the absurdities of popular estheticism in the eighteen-seventies.
43 A ¶ In the corner diagonally opposite the door Mrs. Higgins, now over sixty and long past taking the trouble to dress out of the fashion, sits writing at an elegantly simple writing-table with a bell button within reach of her hand.
* 44 A There is a Chippendale chair further back in the room between her and the window nearest her side.
* 45 A At the other side of the room, further forward, is an Elizabethan chair roughly carved in the taste of Inigo Jones.
* 46 A On the same side a piano in a decorated case.
* 47 A The corner between the fireplace and the window is occupied by a divan cushioned in Morris chintz.
* 48 A ¶ It is between four and five in the afternoon.
49 A ¶ The door is opened violently; and Higgins enters with his hat on.
50 D MRS: HIGGINS
51 A ¶ dismayed.
52 D MRS: Henry
53 A ¶ scolding him.
54 D MRS: ! What are you doing here to-day? It is my at home day: you promised not to come.
55 A ¶ As he bends to kiss her, she takes his hat off, and presents it to him.
56 D HIGGINS: Oh bother!
57 A ¶ He throws the hat down on the table.
58 D MRS. HIGGINS: Go home at once.
59 A ¶ HIGGINS [kissing her] I know, mother.
60 A I came on purpose.
61 D MRS. HIGGINS: But you mustn’t. I’m serious, Henry. You offend all my friends: they stop coming whenever they meet you.
62 D HIGGINS: Nonsense! I know I have no small talk; but people don’t mind.
63 A ¶ He sits on the settee.
64 D MRS. HIGGINS: Oh! don’t they? Small talk indeed! What about your large talk? Really, dear, you mustn’t stay.
65 D HIGGINS: I must. I’ve a job for you. A phonetic job.
66 D MRS. HIGGINS: No use, dear. I’m sorry; but I can’t get round your vowels; and though I like to get pretty postcards in your patent shorthand, I always have to read the copies in ordinary writing you so thoughtfully send me.
67 D HIGGINS: Well, this isn’t a phonetic job.

### SCENE pt_pygmalion_17 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): LIZA, HIGGINS, MRS, FREDDY, MRS. EYNSFORD HILL
1 D LIZA: How do you do?
2 A ¶ Freddy bows and sits down in the Elizabethan chair, infatuated.
3 A ¶ HIGGINS [suddenly] By George, yes: it all comes back to me! [They stare at him].
4 A Covent Garden! [Lamentably] What a damned thing!
5 D MRS. HIGGINS: Henry, please!
6 A ¶ He is about to sit on the edge of the table.
7 D MRS. HIGGINS: Don’t sit on my writing-table: you’ll break it.
8 A ¶ HIGGINS [sulkily] Sorry.
9 A ¶ He goes to the divan, stumbling into the fender and over the fire-irons on his way; extricating himself with muttered imprecations; and finishing his disastrous journey by throwing himself so impatiently on the divan that he almost breaks it.
10 A Mrs. Higgins looks at him, but controls herself and says nothing.
* 11 A ¶ A long and painful pause ensues.
12 D MRS: HIGGINS
13 A ¶ at last, conversationally.
14 D MRS: Will it rain, do you think?
15 D LIZA: The shallow depression in the west of these islands is likely to move slowly in an easterly direction. There are no indications of any great change in the barometrical situation.
16 D FREDDY: Ha! ha! how awfully funny!
17 D LIZA: What is wrong with that, young man? I bet I got it right.
18 D FREDDY: Killing!
19 D MRS. EYNSFORD HILL: I’m sure I hope it won’t turn cold. There’s so much influenza about. It runs right through our whole family regularly every spring.
20 A ¶ LIZA [darkly] My aunt died of influenza: so they said.
21 D MRS: EYNSFORD HILL
22 A ¶ clicks her tongue sympathetically.
23 D MRS: !!!
24 A ¶ LIZA [in the same tragic tone] But it’s my belief they done the old woman in.
25 D MRS: HIGGINS
26 A ¶ puzzled.
27 D MRS: Done her in?
28 D LIZA: Y-e-e-e-es, Lord love you! Why should she die of influenza? She come through diphtheria right enough the year before. I saw her with my own eyes. Fairly blue with it, she was. They all thought she was dead; but my father he kept ladling gin down her throat til she came to so sudden that she bit the bowl off the spoon.
29 D MRS: EYNSFORD HILL
30 A ¶ startled.
31 D MRS: Dear me!
32 A ¶ LIZA [piling up the indictment] What call would a woman with that strength in her have to die of influenza?
33 A What become of her new straw hat that should have come to me?
34 A Somebody pinched it; and what I say is, them as pinched it done her in.
35 D MRS. EYNSFORD HILL: What does doing her in mean?
36 A ¶ HIGGINS [hastily] Oh, that’s the new small talk.
37 A To do a person in means to kill them.
38 D MRS: EYNSFORD HILL
39 A ¶ to Eliza, horrified.
40 D MRS: You surely don’t believe that your aunt was killed?
41 D LIZA: Do I not! Them she lived with would have killed her for a hat-pin, let alone a hat.
42 D MRS. EYNSFORD HILL: But it can’t have been right for your father to pour spirits down her throat like that. It might have killed her.
43 D LIZA: Not her. Gin was mother’s milk to her. Besides, he’d poured so much down his own throat that he knew the good of it.
44 D MRS. EYNSFORD HILL: Do you mean that he drank?
45 D LIZA: Drank! My word! Something chronic.
46 D MRS. EYNSFORD HILL: How dreadful for you!
47 D LIZA: Not a bit. It never did him no harm what I could see. But then he did not keep it up regular.
48 A ¶ Cheerfully.
49 D LIZA: On the burst, as you might say, from time to time. And always more agreeable when he had a drop in. When he was out of work, my mother used to give him fourpence and tell him to go out and not come back until he’d drunk himself cheerful and loving-like. There’s lots of women has to make their husbands drunk to make them fit to live with.
50 A ¶ Now quite at her ease.

### SCENE pt_pygmalion_18 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): LIZA, FREDDY, MRS, HIGGINS, PICKERING, CLARA, MRS. EYNSFORD HILL
1 D LIZA: You see, it’s like this. If a man has a bit of a conscience, it always takes him when he’s sober; and then it makes him low-spirited. A drop of booze just takes that off and makes him happy.
2 A ¶ To Freddy, who is in convulsions of suppressed laughter.
3 D LIZA: Here! what are you sniggering at?
4 D FREDDY: The new small talk. You do it so awfully well.
5 D LIZA: If I was doing it proper, what was you laughing at?
6 A ¶ To Higgins.
7 D LIZA: Have I said anything I oughtn’t?
8 D MRS: HIGGINS
9 A ¶ interposing.
10 D MRS: Not at all, Miss Doolittle.
11 D LIZA: Well, that’s a mercy, anyhow.
12 A ¶ Expansively.
13 D LIZA: What I always say is—
14 A ¶ HIGGINS [rising and looking at his watch] Ahem!
15 A ¶ LIZA [looking round at him; taking the hint; and rising] Well: I must go. [They all rise.
16 A Freddy goes to the door].
17 A So pleased to have met you.
18 A Good-bye. [She shakes hands with Mrs. Higgins].
19 D MRS. HIGGINS: Good-bye.
20 D LIZA: Good-bye, Colonel Pickering.
21 D PICKERING: Good-bye, Miss Doolittle.
22 A ¶ They shake hands.
23 A ¶ LIZA [nodding to the others] Good-bye, all.
24 A ¶ FREDDY [opening the door for her] Are you walking across the Park, Miss Doolittle?
25 A If so—
26 D LIZA: Walk! Not bloody likely.
* 27 A ¶ Sensation.
28 D LIZA: I am going in a taxi.
29 A ¶ She goes out.
30 A ¶ Pickering gasps and sits down.
31 A Freddy goes out on the balcony to catch another glimpse of Eliza.
32 D MRS: EYNSFORD HILL
33 A ¶ suffering from shock.
34 D MRS: Well, I really can’t get used to the new ways.
35 A ¶ CLARA [throwing herself discontentedly into the Elizabethan chair].
36 A Oh, it’s all right, mamma, quite right.
37 A People will think we never go anywhere or see anybody if you are so old-fashioned.
38 D MRS. EYNSFORD HILL: I daresay I am very old-fashioned; but I do hope you won’t begin using that expression, Clara. I have got accustomed to hear you talking about men as rotters, and calling everything filthy and beastly; though I do think it horrible and unladylike. But this last is really too much. Don’t you think so, Colonel Pickering?
39 D PICKERING: Don’t ask me. I’ve been away in India for several years; and manners have changed so much that I sometimes don’t know whether I’m at a respectable dinner-table or in a ship’s forecastle.
40 D CLARA: It’s all a matter of habit. There’s no right or wrong in it. Nobody means anything by it. And it’s so quaint, and gives such a smart emphasis to things that are not in themselves very witty. I find the new small talk delightful and quite innocent.
41 D MRS: EYNSFORD HILL
42 A ¶ rising.
43 D MRS: Well, after that, I think it’s time for us to go.
44 A ¶ Pickering and Higgins rise.
45 A ¶ CLARA [rising] Oh yes: we have three at homes to go to still.
46 A Good-bye, Mrs. Higgins.
47 A Good-bye, Colonel Pickering.
48 A Good-bye, Professor Higgins.
49 A ¶ HIGGINS [coming grimly at her from the divan, and accompanying her to the door] Good-bye.
50 A Be sure you try on that small talk at the three at-homes.
51 A Don’t be nervous about it.
52 A Pitch it in strong.
53 A ¶ CLARA [all smiles] I will.
54 A Good-bye.
55 A Such nonsense, all this early Victorian prudery!
56 A ¶ HIGGINS [tempting her] Such damned nonsense!
57 D CLARA: Such bloody nonsense!
58 D MRS: EYNSFORD HILL
59 A ¶ convulsively.
60 D MRS: Clara!

### SCENE pt_pygmalion_2 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE NOTE TAKER, THE FLOWER GIRL, THE GENTLEMAN, THE SARCASTIC BYSTANDER, THE DAUGHTER, THE MOTHER
1 A ¶ To the girl.
2 D THE NOTE TAKER: How do you come to be up so far east? You were born in Lisson Grove.
3 A ¶ THE FLOWER GIRL [appalled] Oh, what harm is there in my leaving Lisson Grove?
4 A It wasn’t fit for a pig to live in; and I had to pay four-and-six a week. [In tears] Oh, boo—hoo—oo—
5 D THE NOTE TAKER: Live where you like; but stop that noise.
6 A ¶ THE GENTLEMAN [to the girl] Come, come! he can’t touch you: you have a right to live where you please.
7 A ¶ A SARCASTIC BYSTANDER [thrusting himself between the note taker and the gentleman] Park Lane, for instance.
8 A I’d like to go into the Housing Question with you, I would.
9 A ¶ THE FLOWER GIRL [subsiding into a brooding melancholy over her basket, and talking very low-spiritedly to herself] I’m a good girl, I am.
10 A ¶ THE SARCASTIC BYSTANDER [not attending to her] Do you know where I come from?
11 A ¶ THE NOTE TAKER [promptly] Hoxton.
* 12 A ¶ Titterings.
* 13 A Popular interest in the note taker’s performance increases.
14 A ¶ THE SARCASTIC ONE [amazed] Well, who said I didn’t?
15 A Bly me!
16 A You know everything, you do.
17 A ¶ THE FLOWER GIRL [still nursing her sense of injury] Ain’t no call to meddle with me, he ain’t.
18 A ¶ THE BYSTANDER [to her] Of course he ain’t.
19 A Don’t you stand it from him. [To the note taker] See here: what call have you to know about people what never offered to meddle with you?
20 A Where’s your warrant?
21 A ¶ SEVERAL BYSTANDERS [encouraged by this seeming point of law] Yes: where’s your warrant?
22 D THE FLOWER GIRL: Let him say what he likes. I don’t want to have no truck with him.
23 D THE BYSTANDER: You take us for dirt under your feet, don’t you? Catch you taking liberties with a gentleman!
24 D THE SARCASTIC BYSTANDER: Yes: tell HIM where he come from if you want to go fortune-telling.
25 D THE NOTE TAKER: Cheltenham, Harrow, Cambridge, and India.
26 D THE GENTLEMAN: Quite right.
* 27 A ¶ Great laughter.
* 28 A Reaction in the note taker’s favor.
29 A Exclamations of He knows all about it.
30 A Told him proper.
31 A Hear him tell the toff where he come from? etc.
32 D THE GENTLEMAN: May I ask, sir, do you do this for your living at a music hall?
33 D THE NOTE TAKER: I’ve thought of that. Perhaps I shall some day.
* 34 A ¶ The rain has stopped; and the persons on the outside of the crowd begin to drop off.
35 A ¶ THE FLOWER GIRL [resenting the reaction] He’s no gentleman, he ain’t, to interfere with a poor girl.
36 A ¶ THE DAUGHTER [out of patience, pushing her way rudely to the front and displacing the gentleman, who politely retires to the other side of the pillar] What on earth is Freddy doing?
37 A I shall get pneumonia if I stay in this draught any longer.
38 A ¶ THE NOTE TAKER [to himself, hastily making a note of her pronunciation of “monia”] Earlscourt.
39 A ¶ THE DAUGHTER [violently] Will you please keep your impertinent remarks to yourself?
40 D THE NOTE TAKER: Did I say that out loud? I didn’t mean to. I beg your pardon. Your mother’s Epsom, unmistakeably.
41 A ¶ THE MOTHER [advancing between her daughter and the note taker] How very curious!
42 A I was brought up in Largelady Park, near Epsom.
43 A ¶ THE NOTE TAKER [uproariously amused] Ha! ha!
44 A What a devil of a name!
45 A Excuse me. [To the daughter] You want a cab, do you?
46 D THE DAUGHTER: Don’t dare speak to me.
47 D THE MOTHER: Oh, please, please Clara.
48 A ¶ Her daughter repudiates her with an angry shrug and retires haughtily.
49 D THE MOTHER: We should be so grateful to you, sir, if you found us a cab.
50 A ¶ The note taker produces a whistle.
51 D THE MOTHER: Oh, thank you.
52 A ¶ She joins her daughter.
53 D THE MOTHER: The note taker blows a piercing blast.
54 D THE SARCASTIC BYSTANDER: There! I knowed he was a plain-clothes copper.
55 D THE BYSTANDER: That ain’t a police whistle: that’s a sporting whistle.
56 A ¶ THE FLOWER GIRL [still preoccupied with her wounded feelings] He’s no right to take away my character.
57 A My character is the same to me as any lady’s.
58 D THE NOTE TAKER: I don’t know whether you’ve noticed it; but the rain stopped about two minutes ago.
59 D THE BYSTANDER: So it has. Why didn’t you say so before? and us losing our time listening to your silliness.
60 A ¶ He walks off towards the Strand.
61 D THE SARCASTIC BYSTANDER: I can tell where you come from. You come from Anwell. Go back there.

### SCENE pt_pygmalion_21 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): PICKERING, HIGGINS, MRS
1 D PICKERING: Yes: let’s. Her remarks will be delicious.
2 D HIGGINS: She’ll mimic all the people for us when we get home.
3 D PICKERING: Ripping.
4 A ¶ Both are heard laughing as they go downstairs.
5 D MRS: HIGGINS
6 A ¶ rises with an impatient bounce, and returns to her work at the writing-table.
7 A She sweeps a litter of disarranged papers out of her way; snatches a sheet of paper from her stationery case; and tries resolutely to write.
8 A At the third line she gives it up; flings down her pen; grips the table angrily and exclaims.
9 D MRS: Oh, men! men!! men!!!
* 10 A ¶ The Wimpole Street laboratory.
* 11 A Midnight.
* 12 A Nobody in the room.
* 13 A The clock on the mantelpiece strikes twelve.
* 14 A The fire is not alight: it is a summer night.
15 A ¶ Presently Higgins and Pickering are heard on the stairs.
16 A ¶ HIGGINS [calling down to Pickering] I say, Pick: lock up, will you.
17 A I shan’t be going out again.
18 D PICKERING: Right. Can Mrs. Pearce go to bed? We don’t want anything more, do we?
19 D HIGGINS: Lord, no!
20 A ¶ Eliza opens the door and is seen on the lighted landing in opera cloak, brilliant evening dress, and diamonds, with fan, flowers, and all accessories.
21 A She comes to the hearth, and switches on the electric lights there.
22 A She is tired: her pallor contrasts strongly with her dark eyes and hair; and her expression is almost tragic.
23 A She takes off her cloak; puts her fan and flowers on the piano; and sits down on the bench, brooding and silent.
24 A Higgins, in evening dress, with overcoat and hat, comes in, carrying a smoking jacket which he has picked up downstairs.
25 A He takes off the hat and overcoat; throws them carelessly on the newspaper stand; disposes of his coat in the same way; puts on the smoking jacket; and throws himself wearily into the easy-chair at the hearth.
26 A Pickering, similarly attired, comes in.
27 A He also takes off his hat and overcoat, and is about to throw them on Higgins’s when he hesitates.
28 D PICKERING: I say: Mrs. Pearce will row if we leave these things lying about in the drawing-room.
29 D HIGGINS: Oh, chuck them over the bannisters into the hall. She’ll find them there in the morning and put them away all right. She’ll think we were drunk.
30 D PICKERING: We are, slightly. Are there any letters?
31 D HIGGINS: I didn’t look.
32 A ¶ Pickering takes the overcoats and hats and goes down stairs.
33 A Higgins begins half singing half yawning an air from La Fanciulla del Golden West.
34 A Suddenly he stops and exclaims.
35 D HIGGINS: I wonder where the devil my slippers are!
36 A ¶ Eliza looks at him darkly; then leaves the room.
37 A ¶ Higgins yawns again, and resumes his song.
38 A Pickering returns, with the contents of the letter-box in his hand.
39 D PICKERING: Only circulars, and this coroneted billet-doux for you.
40 A ¶ He throws the circulars into the fender, and posts himself on the hearthrug, with his back to the grate.
41 A ¶ HIGGINS [glancing at the billet-doux] Money-lender. [He throws the letter after the circulars].
42 A ¶ Eliza returns with a pair of large down-at-heel slippers.
43 A She places them on the carpet before Higgins, and sits as before without a word.
44 A ¶ HIGGINS [yawning again] Oh Lord!
45 A What an evening!
46 A What a crew!
47 A What a silly tomfoollery! [He raises his shoe to unlace it, and catches sight of the slippers.
48 A He stops unlacing and looks at them as if they had appeared there of their own accord].
49 A Oh! they’re there, are they?
50 A ¶ PICKERING [stretching himself] Well, I feel a bit tired.
51 A It’s been a long day.
52 A The garden party, a dinner party, and the opera!
53 A Rather too much of a good thing.
54 A But you’ve won your bet, Higgins.
55 A Eliza did the trick, and something to spare, eh?
56 A ¶ HIGGINS [fervently] Thank God it’s over!
57 A ¶ Eliza flinches violently; but they take no notice of her; and she recovers herself and sits stonily as before.
58 D PICKERING: Were you nervous at the garden party? I was. Eliza didn’t seem a bit nervous.
59 D HIGGINS: Oh, she wasn’t nervous. I knew she’d be all right. No, it’s the strain of putting the job through all these months that has told on me. It was interesting enough at first, while we were at the phonetics; but after that I got deadly sick of it. If I hadn’t backed myself to do it I should have chucked the whole thing up two months ago. It was a silly notion: the whole thing has been a bore.
60 D PICKERING: Oh come! the garden party was frightfully exciting. My heart began beating like anything.
61 D HIGGINS: Yes, for the first three minutes. But when I saw we were going to win hands down, I felt like a bear in a cage, hanging about doing nothing. The dinner was worse: sitting gorging there for over an hour, with nobody but a damned fool of a fashionable woman to talk to! I tell you, Pickering, never again for me. No more artificial duchesses. The whole thing has been simple purgatory.
62 D PICKERING: You’ve never been broken in properly to the social routine.
63 A ¶ Strolling over to the piano.
64 D PICKERING: I rather enjoy dipping into it occasionally myself: it makes me feel young again. Anyhow, it was a great success: an immense success. I was quite frightened once or twice because Eliza was doing it so well. You see, lots of the real people can’t do it at all: they’re such fools that they think style comes by nature to people in their position; and so they never learn. There’s always something professional about doing a thing superlatively well.
65 D HIGGINS: Yes: that’s what drives me mad: the silly people don’t know their own silly business.
66 A ¶ Rising.
67 D HIGGINS: However, it’s over and done with; and now I can go to bed at last without dreading tomorrow.
68 A ¶ Eliza’s beauty becomes murderous.
69 D PICKERING: I think I shall turn in too. Still, it’s been a great occasion: a triumph for you. Good-night.
70 A ¶ He goes.
71 A ¶ HIGGINS [following him] Good-night. [Over his shoulder, at the door] Put out the lights, Eliza; and tell Mrs. Pearce not to make coffee for me in the morning: I’ll take tea. [He goes out].
72 A ¶ Eliza tries to control herself and feel indifferent as she rises and walks across to the hearth to switch off the lights.
73 A By the time she gets there she is on the point of screaming.
74 A She sits down in Higgins’s chair and holds on hard to the arms.
75 A Finally she gives way and flings herself furiously on the floor raging.
76 A ¶ HIGGINS [in despairing wrath outside] What the devil have I done with my slippers? [He appears at the door].

### SCENE pt_pygmalion_22 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): LIZA, HIGGINS
1 A ¶ LIZA [snatching up the slippers, and hurling them at him one after the other with all her force] There are your slippers.
2 A And there.
3 A Take your slippers; and may you never have a day’s luck with them!
4 A ¶ HIGGINS [astounded] What on earth—! [He comes to her].
5 A What’s the matter?
6 A Get up. [He pulls her up].
7 A Anything wrong?
8 A ¶ LIZA [breathless] Nothing wrong—with YOU.
9 A I’ve won your bet for you, haven’t I?
10 A That’s enough for you.
11 A I don’t matter, I suppose.
12 D HIGGINS: YOU won my bet! You! Presumptuous insect! I won it. What did you throw those slippers at me for?
13 D LIZA: Because I wanted to smash your face. I’d like to kill you, you selfish brute. Why didn’t you leave me where you picked me out of—in the gutter? You thank God it’s all over, and that now you can throw me back again there, do you?
14 A ¶ She crisps her fingers, frantically.
15 A ¶ HIGGINS [looking at her in cool wonder] The creature IS nervous, after all.
16 A ¶ LIZA [gives a suffocated scream of fury, and instinctively darts her nails at his face]!!
17 A ¶ HIGGINS [catching her wrists] Ah! would you?
18 A Claws in, you cat.
19 A How dare you show your temper to me?
20 A Sit down and be quiet. [He throws her roughly into the easy-chair].
21 A ¶ LIZA [crushed by superior strength and weight] What’s to become of me?
22 A What’s to become of me?
23 D HIGGINS: How the devil do I know what’s to become of you? What does it matter what becomes of you?
24 D LIZA: You don’t care. I know you don’t care. You wouldn’t care if I was dead. I’m nothing to you—not so much as them slippers.
25 A ¶ HIGGINS [thundering] THOSE slippers.
26 A ¶ LIZA [with bitter submission] Those slippers.
27 A I didn’t think it made any difference now.
* 28 A ¶ A pause.
29 A Eliza hopeless and crushed.
30 A Higgins a little uneasy.
31 A ¶ HIGGINS [in his loftiest manner] Why have you begun going on like this?
32 A May I ask whether you complain of your treatment here?
33 D LIZA: No.
34 D HIGGINS: Has anybody behaved badly to you? Colonel Pickering? Mrs. Pearce? Any of the servants?
35 D LIZA: No.
36 D HIGGINS: I presume you don’t pretend that I have treated you badly.
37 D LIZA: No.
38 D HIGGINS: I am glad to hear it.
39 A ¶ He moderates his tone.
40 D HIGGINS: Perhaps you’re tired after the strain of the day. Will you have a glass of champagne?
41 A ¶ He moves towards the door.
42 D LIZA: No.
43 A ¶ Recollecting her manners.
44 D LIZA: Thank you.
45 A ¶ HIGGINS [good-humored again] This has been coming on you for some days.
46 A I suppose it was natural for you to be anxious about the garden party.
47 A But that’s all over now. [He pats her kindly on the shoulder.
48 A She writhes].
49 A There’s nothing more to worry about.
50 D LIZA: No. Nothing more for you to worry about.
51 A ¶ She suddenly rises and gets away from him by going to the piano bench, where she sits and hides her face.
52 D LIZA: Oh God! I wish I was dead.
53 A ¶ HIGGINS [staring after her in sincere surprise] Why? in heaven’s name, why? [Reasonably, going to her] Listen to me, Eliza.
54 A All this irritation is purely subjective.
55 D LIZA: I don’t understand. I’m too ignorant.
56 D HIGGINS: It’s only imagination. Low spirits and nothing else. Nobody’s hurting you. Nothing’s wrong. You go to bed like a good girl and sleep it off. Have a little cry and say your prayers: that will make you comfortable.
57 D LIZA: I heard YOUR prayers. “Thank God it’s all over!”
58 A ¶ HIGGINS [impatiently] Well, don’t you thank God it’s all over?
59 A Now you are free and can do what you like.
60 A ¶ LIZA [pulling herself together in desperation] What am I fit for?
61 A What have you left me fit for?
62 A Where am I to go?
63 A What am I to do?
64 A What’s to become of me?
65 A ¶ HIGGINS [enlightened, but not at all impressed] Oh, that’s what’s worrying you, is it? [He thrusts his hands into his pockets, and walks about in his usual manner, rattling the contents of his pockets, as if condescending to a trivial subject out of pure kindness].
66 A I shouldn’t bother about it if I were you.
67 A I should imagine you won’t have much difficulty in settling yourself, somewhere or other, though I hadn’t quite realized that you were going away. [She looks quickly at him: he does not look at her, but examines the dessert stand on the piano and decides that he will eat an apple].
68 A You might marry, you know. [He bites a large piece out of the apple, and munches it noisily].
69 A You see, Eliza, all men are not confirmed old bachelors like me and the Colonel.
70 A Most men are the marrying sort (poor devils!); and you’re not bad-looking; it’s quite a pleasure to look at you sometimes—not now, of course, because you’re crying and looking as ugly as the very devil; but when you’re all right and quite yourself, you’re what I should call attractive.
71 A That is, to the people in the marrying line, you understand.
72 A You go to bed and have a good nice rest; and then get up and look at yourself in the glass; and you won’t feel so cheap.
73 A ¶ Eliza again looks at him, speechless, and does not stir.
74 A ¶ The look is quite lost on him: he eats his apple with a dreamy expression of happiness, as it is quite a good one.
75 A ¶ HIGGINS [a genial afterthought occurring to him] I daresay my mother could find some chap or other who would do very well—
76 D LIZA: We were above that at the corner of Tottenham Court Road.
77 A ¶ HIGGINS [waking up] What do you mean?
78 D LIZA: I sold flowers. I didn’t sell myself. Now you’ve made a lady of me I’m not fit to sell anything else. I wish you’d left me where you found me.

### SCENE pt_pygmalion_23 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): HIGGINS, LIZA, THE PARLOR-MAID
1 A ¶ HIGGINS [slinging the core of the apple decisively into the grate] Tosh, Eliza.
2 A Don’t you insult human relations by dragging all this cant about buying and selling into it.
3 A You needn’t marry the fellow if you don’t like him.
4 D LIZA: What else am I to do?
5 D HIGGINS: Oh, lots of things. What about your old idea of a florist’s shop? Pickering could set you up in one: he’s lots of money.
6 A ¶ Chuckling.
7 D HIGGINS: He’ll have to pay for all those togs you have been wearing today; and that, with the hire of the jewellery, will make a big hole in two hundred pounds. Why, six months ago you would have thought it the millennium to have a flower shop of your own. Come! you’ll be all right. I must clear off to bed: I’m devilish sleepy. By the way, I came down for something: I forget what it was.
8 D LIZA: Your slippers.
9 D HIGGINS: Oh yes, of course. You shied them at me.
10 A ¶ He picks them up, and is going out when she rises and speaks to him.
11 D LIZA: Before you go, sir—
12 A ¶ HIGGINS [dropping the slippers in his surprise at her calling him sir] Eh?
13 D LIZA: Do my clothes belong to me or to Colonel Pickering?
14 A ¶ HIGGINS [coming back into the room as if her question were the very climax of unreason] What the devil use would they be to Pickering?
15 D LIZA: He might want them for the next girl you pick up to experiment on.
16 A ¶ HIGGINS [shocked and hurt] Is THAT the way you feel towards us?
17 D LIZA: I don’t want to hear anything more about that. All I want to know is whether anything belongs to me. My own clothes were burnt.
18 D HIGGINS: But what does it matter? Why need you start bothering about that in the middle of the night?
19 D LIZA: I want to know what I may take away with me. I don’t want to be accused of stealing.
20 A ¶ HIGGINS [now deeply wounded] Stealing!
21 A You shouldn’t have said that, Eliza.
22 A That shows a want of feeling.
23 D LIZA: I’m sorry. I’m only a common ignorant girl; and in my station I have to be careful. There can’t be any feelings between the like of you and the like of me. Please will you tell me what belongs to me and what doesn’t?
24 A ¶ HIGGINS [very sulky] You may take the whole damned houseful if you like.
25 A Except the jewels.
26 A They’re hired.
27 A Will that satisfy you? [He turns on his heel and is about to go in extreme dudgeon].
28 A ¶ LIZA [drinking in his emotion like nectar, and nagging him to provoke a further supply] Stop, please. [She takes off her jewels].
29 A Will you take these to your room and keep them safe?
30 A I don’t want to run the risk of their being missing.
31 A ¶ HIGGINS [furious] Hand them over. [She puts them into his hands].
32 A If these belonged to me instead of to the jeweler, I’d ram them down your ungrateful throat. [He perfunctorily thrusts them into his pockets, unconsciously decorating himself with the protruding ends of the chains].
33 A ¶ LIZA [taking a ring off] This ring isn’t the jeweler’s: it’s the one you bought me in Brighton.
34 A I don’t want it now. [Higgins dashes the ring violently into the fireplace, and turns on her so threateningly that she crouches over the piano with her hands over her face, and exclaims] Don’t you hit me.
35 D HIGGINS: Hit you! You infamous creature, how dare you accuse me of such a thing? It is you who have hit me. You have wounded me to the heart.
36 A ¶ LIZA [thrilling with hidden joy] I’m glad.
37 A I’ve got a little of my own back, anyhow.
38 A ¶ HIGGINS [with dignity, in his finest professional style] You have caused me to lose my temper: a thing that has hardly ever happened to me before.
39 A I prefer to say nothing more tonight.
40 A I am going to bed.
41 A ¶ LIZA [pertly] You’d better leave a note for Mrs. Pearce about the coffee; for she won’t be told by me.
42 A ¶ HIGGINS [formally] Damn Mrs. Pearce; and damn the coffee; and damn you; and damn my own folly in having lavished MY hard-earned knowledge and the treasure of my regard and intimacy on a heartless guttersnipe. [He goes out with impressive decorum, and spoils it by slamming the door savagely].
43 A ¶ Eliza smiles for the first time; expresses her feelings by a wild pantomime in which an imitation of Higgins’s exit is confused with her own triumph; and finally goes down on her knees on the hearthrug to look for the ring.
* 44 A ¶ Mrs. Higgins’s drawing-room.
45 A She is at her writing-table as before.
46 A The parlor-maid comes in.
47 A ¶ THE PARLOR-MAID [at the door] Mr. Henry, mam, is downstairs with Colonel Pickering.
48 D MRS. HIGGINS: Well, show them up.
49 D THE PARLOR-MAID: They’re using the telephone, mam. Telephoning to the police, I think.
50 D MRS. HIGGINS: What!
51 A ¶ THE PARLOR-MAID [coming further in and lowering her voice] Mr. Henry’s in a state, mam.
52 A I thought I’d better tell you.
53 D MRS. HIGGINS: If you had told me that Mr. Henry was not in a state it would have been more surprising. Tell them to come up when they’ve finished with the police. I suppose he’s lost something.
54 D THE PARLOR-MAID: Yes, maam
55 A ¶ going.
56 D MRS. HIGGINS: Go upstairs and tell Miss Doolittle that Mr. Henry and the Colonel are here. Ask her not to come down till I send for her.
57 D THE PARLOR-MAID: Yes, mam.
58 A ¶ Higgins bursts in.
59 A He is, as the parlor-maid has said, in a state.
60 D HIGGINS: Look here, mother: here’s a confounded thing!
61 D MRS. HIGGINS: Yes, dear. Good-morning.
62 A ¶ He checks his impatience and kisses her, whilst the parlor-maid goes out.
63 D MRS. HIGGINS: What is it?

### SCENE pt_pygmalion_26 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS, PICKERING, MRS. HIGGINS, DOOLITTLE, THE PARLOR-MAID, LIZA
1 A ¶ ironically.
2 D MRS: Quite sure?
3 D PICKERING: Absolutely. Really, that was all.
4 D MRS. HIGGINS: You didn’t thank her, or pet her, or admire her, or tell her how splendid she’d been.
5 A ¶ HIGGINS [impatiently] But she knew all about that.
6 A We didn’t make speeches to her, if that’s what you mean.
7 A ¶ PICKERING [conscience stricken] Perhaps we were a little inconsiderate.
8 A Is she very angry?
9 D MRS: HIGGINS
10 A ¶ returning to her place at the writing-table.
11 D MRS: Well, I’m afraid she won’t go back to Wimpole Street, especially now that Mr. Doolittle is able to keep up the position you have thrust on her; but she says she is quite willing to meet you on friendly terms and to let bygones be bygones.
12 A ¶ HIGGINS [furious] Is she, by George?
13 A Ho!
14 D MRS. HIGGINS: If you promise to behave yourself, Henry, I’ll ask her to come down. If not, go home; for you have taken up quite enough of my time.
15 D HIGGINS: Oh, all right. Very well. Pick: you behave yourself. Let us put on our best Sunday manners for this creature that we picked out of the mud.
16 A ¶ He flings himself sulkily into the Elizabethan chair.
17 A ¶ DOOLITTLE [remonstrating] Now, now, Henry Higgins! have some consideration for my feelings as a middle class man.
18 D MRS. HIGGINS: Remember your promise, Henry.
19 A ¶ She presses the bell-button on the writing-table.
20 D MRS. HIGGINS: Mr. Doolittle: will you be so good as to step out on the balcony for a moment. I don’t want Eliza to have the shock of your news until she has made it up with these two gentlemen. Would you mind?
21 D DOOLITTLE: As you wish, lady. Anything to help Henry to keep her off my hands.
22 A ¶ He disappears through the window.
23 A ¶ The parlor-maid answers the bell.
24 A Pickering sits down in Doolittle’s place.
25 D MRS. HIGGINS: Ask Miss Doolittle to come down, please.
26 D THE PARLOR-MAID: Yes, mam.
27 A ¶ She goes out.
28 D MRS. HIGGINS: Now, Henry: be good.
29 D HIGGINS: I am behaving myself perfectly.
30 D PICKERING: He is doing his best, Mrs. Higgins.
* 31 A ¶ A pause.
32 A Higgins throws back his head; stretches out his legs; and begins to whistle.
33 D MRS. HIGGINS: Henry, dearest, you don’t look at all nice in that attitude.
34 A ¶ HIGGINS [pulling himself together] I was not trying to look nice, mother.
35 D MRS. HIGGINS: It doesn’t matter, dear. I only wanted to make you speak.
36 D HIGGINS: Why?
37 D MRS. HIGGINS: Because you can’t speak and whistle at the same time.
38 A ¶ Higgins groans.
* 39 A Another very trying pause.
40 A ¶ HIGGINS [springing up, out of patience] Where the devil is that girl?
41 A Are we to wait here all day?
42 A ¶ Eliza enters, sunny, self-possessed, and giving a staggeringly convincing exhibition of ease of manner.
43 A She carries a little work-basket, and is very much at home.
44 A Pickering is too much taken aback to rise.
45 D LIZA: How do you do, Professor Higgins? Are you quite well?
46 A ¶ HIGGINS [choking] Am I— [He can say no more].
47 D LIZA: But of course you are: you are never ill. So glad to see you again, Colonel Pickering.
48 A ¶ He rises hastily; and they shake hands.
49 D LIZA: Quite chilly this morning, isn’t it?
50 A ¶ She sits down on his left.
51 A He sits beside her.
52 D HIGGINS: Don’t you dare try this game on me. I taught it to you; and it doesn’t take me in. Get up and come home; and don’t be a fool.
53 A ¶ Eliza takes a piece of needlework from her basket, and begins to stitch at it, without taking the least notice of this outburst.
54 D MRS. HIGGINS: Very nicely put, indeed, Henry. No woman could resist such an invitation.
55 D HIGGINS: You let her alone, mother. Let her speak for herself. You will jolly soon see whether she has an idea that I haven’t put into her head or a word that I haven’t put into her mouth. I tell you I have created this thing out of the squashed cabbage leaves of Covent Garden; and now she pretends to play the fine lady with me.

### SCENE pt_pygmalion_3 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE NOTE TAKER, THE FLOWER GIRL, THE MOTHER, THE DAUGHTER, THE GENTLEMAN, PICKERING, HIGGINS, FREDDY
1 A ¶ THE NOTE TAKER [helpfully] H anwell.
2 A ¶ THE SARCASTIC BYSTANDER [affecting great distinction of speech] Thenk you, teacher.
3 A Haw haw!
4 A So long [he touches his hat with mock respect and strolls off].
5 D THE FLOWER GIRL: Frightening people like that! How would he like it himself.
6 D THE MOTHER: It’s quite fine now, Clara. We can walk to a motor bus. Come.
7 A ¶ She gathers her skirts above her ankles and hurries off towards the Strand.
8 D THE DAUGHTER: But the cab—
* 9 A ¶ her mother is out of hearing.
10 D THE DAUGHTER: Oh, how tiresome!
11 A ¶ She follows angrily.
* 12 A ¶ All the rest have gone except the note taker, the gentleman, and the flower girl, who sits arranging her basket, and still pitying herself in murmurs.
13 D THE FLOWER GIRL: Poor girl! Hard enough for her to live without being worrited and chivied.
14 A ¶ THE GENTLEMAN [returning to his former place on the note taker’s left] How do you do it, if I may ask?
15 D THE NOTE TAKER: Simply phonetics. The science of speech. That’s my profession; also my hobby. Happy is the man who can make a living by his hobby! You can spot an Irishman or a Yorkshireman by his brogue. I can place any man within six miles. I can place him within two miles in London. Sometimes within two streets.
16 D THE FLOWER GIRL: Ought to be ashamed of himself, unmanly coward!
17 D THE GENTLEMAN: But is there a living in that?
18 D THE NOTE TAKER: Oh yes. Quite a fat one. This is an age of upstarts. Men begin in Kentish Town with 80 pounds a year, and end in Park Lane with a hundred thousand. They want to drop Kentish Town; but they give themselves away every time they open their mouths. Now I can teach them—
19 D THE FLOWER GIRL: Let him mind his own business and leave a poor girl—
20 A ¶ THE NOTE TAKER [explosively] Woman: cease this detestable boohooing instantly; or else seek the shelter of some other place of worship.
21 A ¶ THE FLOWER GIRL [with feeble defiance] I’ve a right to be here if I like, same as you.
22 D THE NOTE TAKER: A woman who utters such depressing and disgusting sounds has no right to be anywhere—no right to live. Remember that you are a human being with a soul and the divine gift of articulate speech: that your native language is the language of Shakespear and Milton and The Bible; and don’t sit there crooning like a bilious pigeon.
23 A ¶ THE FLOWER GIRL [quite overwhelmed, and looking up at him in mingled wonder and deprecation without daring to raise her head] Ah—ah—ah—ow—ow—oo!
24 A ¶ THE NOTE TAKER [whipping out his book] Heavens! what a sound! [He writes; then holds out the book and reads, reproducing her vowels exactly] Ah—ah—ah—ow—ow—ow—oo!
25 A ¶ THE FLOWER GIRL [tickled by the performance, and laughing in spite of herself] Garn!
26 D THE NOTE TAKER: You see this creature with her kerbstone English: the English that will keep her in the gutter to the end of her days. Well, sir, in three months I could pass that girl off as a duchess at an ambassador’s garden party. I could even get her a place as lady’s maid or shop assistant, which requires better English. That’s the sort of thing I do for commercial millionaires. And on the profits of it I do genuine scientific work in phonetics, and a little as a poet on Miltonic lines.
27 D THE GENTLEMAN: I am myself a student of Indian dialects; and—
28 A ¶ THE NOTE TAKER [eagerly] Are you?
29 A Do you know Colonel Pickering, the author of Spoken Sanscrit?
30 D THE GENTLEMAN: I am Colonel Pickering. Who are you?
31 D THE NOTE TAKER: Henry Higgins, author of Higgins’s Universal Alphabet.
32 A ¶ PICKERING [with enthusiasm] I came from India to meet you.
33 D HIGGINS: I was going to India to meet you.
34 D PICKERING: Where do you live?
35 D HIGGINS: 27A Wimpole Street. Come and see me tomorrow.
36 D PICKERING: I’m at the Carlton. Come with me now and let’s have a jaw over some supper.
37 D HIGGINS: Right you are.
38 A ¶ THE FLOWER GIRL [to Pickering, as he passes her] Buy a flower, kind gentleman.
39 A I’m short for my lodging.
40 D PICKERING: I really haven’t any change. I’m sorry
41 A ¶ he goes away.
42 A ¶ HIGGINS [shocked at girl’s mendacity] Liar.
43 A You said you could change half-a-crown.
44 A ¶ THE FLOWER GIRL [rising in desperation] You ought to be stuffed with nails, you ought. [Flinging the basket at his feet] Take the whole blooming basket for sixpence.
* 45 A ¶ The church clock strikes the second quarter.
46 A ¶ HIGGINS [hearing in it the voice of God, rebuking him for his Pharisaic want of charity to the poor girl] A reminder. [He raises his hat solemnly; then throws a handful of money into the basket and follows Pickering].
47 A ¶ THE FLOWER GIRL [picking up a half-crown] Ah—ow—ooh! [Picking up a couple of florins] Aaah—ow—ooh! [Picking up several coins] Aaaaaah—ow—ooh! [Picking up a half-sovereign] Aasaaaaaaaaah—ow—ooh!!!
48 A ¶ FREDDY [springing out of a taxicab] Got one at last.
49 A Hallo! [To the girl] Where are the two ladies that were here?
50 D THE FLOWER GIRL: They walked to the bus when the rain stopped.
51 D FREDDY: And left me with a cab on my hands. Damnation!
