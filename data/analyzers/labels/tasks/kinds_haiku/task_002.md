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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0102.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_fan_20 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD WINDERMERE, LORD DARLINGTON, CECIL GRAHAM, LORD AUGUSTUS, MRS. ERLYNNE
1 A ¶ Up by door .
2 D LORD WINDERMERE: I am really off now, Lord Darlington. I am sorry you are leaving England so soon. Pray call on us when you come back! My wife and I will be charmed to see you!
3 A ¶ Upstage with LORD WINDERMERE.
4 D LORD DARLINGTON: I am afraid I shall be away for many years. Good-night!
5 D CECIL GRAHAM: Arthur!
6 D LORD WINDERMERE: What?
7 D CECIL GRAHAM: I want to speak to you for a moment. No, do come!
8 A ¶ Putting on his coat .
9 D LORD WINDERMERE: I can’t—I’m off!
10 D CECIL GRAHAM: It is something very particular. It will interest you enormously.
11 A ¶ Smiling .
12 D LORD WINDERMERE: It is some of your nonsense, Cecil.
13 D CECIL GRAHAM: It isn’t! It isn’t really.
14 A ¶ Going to him .
15 D LORD AUGUSTUS: My dear fellow, you mustn’t go yet. I have a lot to talk to you about. And Cecil has something to show you.
16 A ¶ Walking over .
17 D LORD WINDERMERE: Well, what is it?
18 D CECIL GRAHAM: Darlington has got a woman here in his rooms. Here is her fan. Amusing, isn’t it?
* 19 A ¶ A pause .
20 D LORD WINDERMERE: Good God!
21 A ¶ Seizes the fan —DUMBY rises .
22 D CECIL GRAHAM: What is the matter?
23 D LORD WINDERMERE: Lord Darlington!
24 A ¶ Turning round .
25 D LORD DARLINGTON: Yes!
26 D LORD WINDERMERE: What is my wife’s fan doing here in your rooms? Hands off, Cecil. Don’t touch me.
27 D LORD DARLINGTON: Your wife’s fan?
28 D LORD WINDERMERE: Yes, here it is!
29 A ¶ Walking towards him .
30 D LORD DARLINGTON: I don’t know!
31 D LORD WINDERMERE: You must know. I demand an explanation. Don’t hold me, you fool.
32 A ¶ To CECIL GRAHAM.
33 A ¶ Aside .
34 D LORD DARLINGTON: She is here after all!
35 D LORD WINDERMERE: Speak, sir! Why is my wife’s fan here? Answer me! By God! I’ll search your rooms, and if my wife’s here, I’ll—
36 A ¶ Moves .
37 D LORD DARLINGTON: You shall not search my rooms. You have no right to do so. I forbid you!
38 D LORD WINDERMERE: You scoundrel! I’ll not leave your room till I have searched every corner of it! What moves behind that curtain?
39 A ¶ Rushes towards the curtain C.
40 A ¶ Enters behind R.
41 D MRS. ERLYNNE: Lord Windermere!
42 D LORD WINDERMERE: Mrs. Erlynne!
43 A ¶ Every one starts and turns round .
44 A LADY WINDERMERE slips out from behind the curtain and glides from the room L.
45 D MRS. ERLYNNE: I am afraid I took your wife’s fan in mistake for my own, when I was leaving your house to-night. I am so sorry.
46 A ¶ Takes fan from him .
47 A LORD WINDERMERE looks at her in contempt .
48 A LORD DARLINGTON in mingled astonishment and anger .
49 A LORD AUGUSTUS turns away .
50 A The other men smile at each other .

### SCENE pt_fan_21 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LADY WINDERMERE, ROSALIE
1 A ¶ FOURTH ACT
2 A ¶ Lying on sofa .
3 D LADY WINDERMERE: How can I tell him? I can’t tell him. It would kill me. I wonder what happened after I escaped from that horrible room. Perhaps she told them the true reason of her being there, and the real meaning of that—fatal fan of mine. Oh, if he knows—how can I look him in the face again? He would never forgive me.
4 A ¶ Touches bell .
5 D LADY WINDERMERE: How securely one thinks one lives—out of reach of temptation, sin, folly. And then suddenly—Oh! Life is terrible. It rules us, we do not rule it.
6 A ¶ Enter ROSALIE R.
7 D ROSALIE: Did your ladyship ring for me?
8 D LADY WINDERMERE: Yes. Have you found out at what time Lord Windermere came in last night?
9 D ROSALIE: His lordship did not come in till five o’clock.
10 D LADY WINDERMERE: Five o’clock? He knocked at my door this morning, didn’t he?
11 D ROSALIE: Yes, my lady—at half-past nine. I told him your ladyship was not awake yet.
12 D LADY WINDERMERE: Did he say anything?
13 D ROSALIE: Something about your ladyship’s fan. I didn’t quite catch what his lordship said. Has the fan been lost, my lady? I can’t find it, and Parker says it was not left in any of the rooms. He has looked in all of them and on the terrace as well.
14 D LADY WINDERMERE: It doesn’t matter. Tell Parker not to trouble. That will do.
15 A ¶ Exit ROSALIE.
16 A ¶ Rising .
17 D LADY WINDERMERE: She is sure to tell him. I can fancy a person doing a wonderful act of self-sacrifice, doing it spontaneously, recklessly, nobly—and afterwards finding out that it costs too much. Why should she hesitate between her ruin and mine? . . . How strange! I would have publicly disgraced her in my own house. She accepts public disgrace in the house of another to save me. . . . There is a bitter irony in things, a bitter irony in the way we talk of good and bad women. . . . Oh, what a lesson! and what a pity that in life we only get our lessons when they are of no use to us! For even if she doesn’t tell, I must. Oh! the shame of it, the shame of it. To tell it is to live through it all again. Actions are the first tragedy in life, words are the second. Words are perhaps the worst. Words are merciless. . . . Oh!
18 A ¶ Starts as LORD WINDERMERE enters .
19 A ¶ Kisses her .
20 D LORD WINDERMERE: Margaret—how pale you look!
21 D LADY WINDERMERE: I slept very badly.
22 A ¶ Sitting on sofa with her .
23 D LORD WINDERMERE: I am so sorry. I came in dreadfully late, and didn’t like to wake you. You are crying, dear.
24 D LADY WINDERMERE: Yes, I am crying, for I have something to tell you, Arthur.
25 D LORD WINDERMERE: My dear child, you are not well. You’ve been doing too much. Let us go away to the country. You’ll be all right at Selby. The season is almost over. There is no use staying on. Poor darling! We’ll go away to-day, if you like.
26 A ¶ Rises .
27 D LORD WINDERMERE: We can easily catch the 3.40. I’ll send a wire to Fannen.
28 A ¶ Crosses and sits down at table to write a telegram .
29 D LADY WINDERMERE: Yes; let us go away to-day. No; I can’t go to-day, Arthur. There is some one I must see before I leave town—some one who has been kind to me.
30 A ¶ Rising and leaning over sofa .
31 D LORD WINDERMERE: Kind to you?
32 D LADY WINDERMERE: Far more than that.
33 A ¶ Rises and goes to him .
34 D LADY WINDERMERE: I will tell you, Arthur, but only love me, love me as you used to love me.
35 D LORD WINDERMERE: Used to? You are not thinking of that wretched woman who came here last night?
36 A ¶ Coming round and sitting R. of her .
37 D LORD WINDERMERE: You don’t still imagine—no, you couldn’t.
38 D LADY WINDERMERE: I don’t. I know now I was wrong and foolish.
39 D LORD WINDERMERE: It was very good of you to receive her last night—but you are never to see her again.
40 D LADY WINDERMERE: Why do you say that?
* 41 A ¶ A pause .
42 A ¶ Holding her hand .
43 D LORD WINDERMERE: Margaret, I thought Mrs. Erlynne was a woman more sinned against than sinning, as the phrase goes. I thought she wanted to be good, to get back into a place that she had lost by a moment’s folly, to lead again a decent life. I believed what she told me—I was mistaken in her. She is bad—as bad as a woman can be.
44 D LADY WINDERMERE: Arthur, Arthur, don’t talk so bitterly about any woman. I don’t think now that people can be divided into the good and the bad as though they were two separate races or creations. What are called good women may have terrible things in them, mad moods of recklessness, assertion, jealousy, sin. Bad women, as they are termed, may have in them sorrow, repentance, pity, sacrifice. And I don’t think Mrs. Erlynne a bad woman—I know she’s not.
45 D LORD WINDERMERE: My dear child, the woman’s impossible. No matter what harm she tries to do us, you must never see her again. She is inadmissible anywhere.

### SCENE pt_fan_24 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS. ERLYNNE, LORD WINDERMERE
1 D MRS. ERLYNNE: I shall ask Margaret to give it to me.
2 D LORD WINDERMERE: I hope my wife will give it you.
3 D MRS. ERLYNNE: Oh, I’m sure she will have no objection.
4 D LORD WINDERMERE: I wish that at the same time she would give you a miniature she kisses every night before she prays—It’s the miniature of a young innocent-looking girl with beautiful dark hair.
5 D MRS. ERLYNNE: Ah, yes, I remember. How long ago that seems!
6 A ¶ Goes to sofa and sits down .
7 D MRS. ERLYNNE: It was done before I was married. Dark hair and an innocent expression were the fashion then, Windermere!
* 8 A ¶ A pause .
9 D LORD WINDERMERE: What do you mean by coming here this morning? What is your object?
10 A ¶ Crossing L.C. and sitting .
11 A ¶ With a note of irony in her voice .
12 D MRS. ERLYNNE: To bid good-bye to my dear daughter, of course.
13 A ¶ LORD WINDERMERE bites his under lip in anger .
14 A MRS. ERLYNNE looks at him , and her voice and manner become serious .
15 A In her accents as she talks there is a note of deep tragedy .
16 A For a moment she reveals herself .
17 D MRS. ERLYNNE: Oh, don’t imagine I am going to have a pathetic scene with her, weep on her neck and tell her who I am, and all that kind of thing. I have no ambition to play the part of a mother. Only once in my life have I known a mother’s feelings. That was last night. They were terrible—they made me suffer—they made me suffer too much. For twenty years, as you say, I have lived childless,—I want to live childless still.
18 A ¶ Hiding her feelings with a trivial laugh .
19 D MRS. ERLYNNE: Besides, my dear Windermere, how on earth could I pose as a mother with a grown-up daughter? Margaret is twenty-one, and I have never admitted that I am more than twenty-nine, or thirty at the most. Twenty-nine when there are pink shades, thirty when there are not. So you see what difficulties it would involve. No, as far as I am concerned, let your wife cherish the memory of this dead, stainless mother. Why should I interfere with her illusions? I find it hard enough to keep my own. I lost one illusion last night. I thought I had no heart. I find I have, and a heart doesn’t suit me, Windermere. Somehow it doesn’t go with modern dress. It makes one look old.
20 A ¶ Takes up hand-mirror from table and looks into it .
21 D MRS. ERLYNNE: And it spoils one’s career at critical moments.
22 D LORD WINDERMERE: You fill me with horror—with absolute horror.
23 A ¶ Rising .
24 D MRS. ERLYNNE: I suppose, Windermere, you would like me to retire into a convent, or become a hospital nurse, or something of that kind, as people do in silly modern novels. That is stupid of you, Arthur; in real life we don’t do such things—not as long as we have any good looks left, at any rate. No—what consoles one nowadays is not repentance, but pleasure. Repentance is quite out of date. And besides, if a woman really repents, she has to go to a bad dressmaker, otherwise no one believes in her. And nothing in the world would induce me to do that. No; I am going to pass entirely out of your two lives. My coming into them has been a mistake—I discovered that last night.
25 D LORD WINDERMERE: A fatal mistake.
26 A ¶ Smiling .
27 D MRS. ERLYNNE: Almost fatal.
28 D LORD WINDERMERE: I am sorry now I did not tell my wife the whole thing at once.
29 D MRS. ERLYNNE: I regret my bad actions. You regret your good ones—that is the difference between us.
30 D LORD WINDERMERE: I don’t trust you. I will tell my wife. It’s better for her to know, and from me. It will cause her infinite pain—it will humiliate her terribly, but it’s right that she should know.
31 D MRS. ERLYNNE: You propose to tell her?
32 D LORD WINDERMERE: I am going to tell her.
33 A ¶ Going up to him .
34 D MRS. ERLYNNE: If you do, I will make my name so infamous that it will mar every moment of her life. It will ruin her, and make her wretched. If you dare to tell her, there is no depth of degradation I will not sink to, no pit of shame I will not enter. You shall not tell her—I forbid you.
35 D LORD WINDERMERE: Why?
36 A ¶ After a pause .
37 D MRS. ERLYNNE: If I said to you that I cared for her, perhaps loved her even—you would sneer at me, wouldn’t you?
38 D LORD WINDERMERE: I should feel it was not true. A mother’s love means devotion, unselfishness, sacrifice. What could you know of such things?
39 D MRS. ERLYNNE: You are right. What could I know of such things? Don’t let us talk any more about it—as for telling my daughter who I am, that I do not allow. It is my secret, it is not yours. If I make up my mind to tell her, and I think I will, I shall tell her before I leave the house—if not, I shall never tell her.
40 A ¶ Angrily .
41 D LORD WINDERMERE: Then let me beg of you to leave our house at once. I will make your excuses to Margaret.
42 A ¶ Enter LADY WINDERMERE R. She goes over to MRS. ERLYNNE with the photograph in her hand .
43 A LORD WINDERMERE moves to back of sofa , and anxiously watches MRS. ERLYNNE as the scene progresses .
44 D LADY WINDERMERE: I am so sorry, Mrs. Erlynne, to have kept you waiting. I couldn’t find the photograph anywhere. At last I discovered it in my husband’s dressing-room—he had stolen it.
45 A ¶ Takes the photograph from her and looks at it .
46 D MRS. ERLYNNE: I am not surprised—it is charming.
47 A ¶ Goes over to sofa with LADY WINDERMERE, and sits down beside her .
48 A Looks again at the photograph .
49 D MRS. ERLYNNE: And so that is your little boy! What is he called?
50 D LADY WINDERMERE: Gerard, after my dear father.

### SCENE pt_fan_25 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS. ERLYNNE, LADY WINDERMERE
1 A ¶ Laying the photograph down .
2 D MRS. ERLYNNE: Really?
3 D LADY WINDERMERE: Yes. If it had been a girl, I would have called it after my mother. My mother had the same name as myself, Margaret.
4 D MRS. ERLYNNE: My name is Margaret too.
5 D LADY WINDERMERE: Indeed!
6 D MRS. ERLYNNE: Yes.
* 7 A ¶ Pause .
8 D MRS. ERLYNNE: You are devoted to your mother’s memory, Lady Windermere, your husband tells me.
9 D LADY WINDERMERE: We all have ideals in life. At least we all should have. Mine is my mother.
10 D MRS. ERLYNNE: Ideals are dangerous things. Realities are better. They wound, but they’re better.
11 A ¶ Shaking her head .
12 D LADY WINDERMERE: If I lost my ideals, I should lose everything.
13 D MRS. ERLYNNE: Everything?
14 D LADY WINDERMERE: Yes.
* 15 A ¶ Pause .
16 D MRS. ERLYNNE: Did your father often speak to you of your mother?
17 D LADY WINDERMERE: No, it gave him too much pain. He told me how my mother had died a few months after I was born. His eyes filled with tears as he spoke. Then he begged me never to mention her name to him again. It made him suffer even to hear it. My father—my father really died of a broken heart. His was the most ruined life know.
18 A ¶ Rising .
19 D MRS. ERLYNNE: I am afraid I must go now, Lady Windermere.
20 A ¶ Rising .
21 D LADY WINDERMERE: Oh no, don’t.
22 D MRS. ERLYNNE: I think I had better. My carriage must have come back by this time. I sent it to Lady Jedburgh’s with a note.
23 D LADY WINDERMERE: Arthur, would you mind seeing if Mrs. Erlynne’s carriage has come back?
24 D MRS. ERLYNNE: Pray don’t trouble, Lord Windermere.
25 D LADY WINDERMERE: Yes, Arthur, do go, please.
26 A ¶ LORD WINDERMERE hesitated for a moment and looks at MRS. ERLYNNE.
27 A She remains quite impassive .
28 A He leaves the room .
29 A ¶ [ To MRS. ERLYNNE.] Oh!
30 A What am I to say to you?
31 A You saved me last night? [ Goes towards her .]
32 D MRS. ERLYNNE: Hush—don’t speak of it.
33 D LADY WINDERMERE: I must speak of it. I can’t let you think that I am going to accept this sacrifice. I am not. It is too great. I am going to tell my husband everything. It is my duty.
34 D MRS. ERLYNNE: It is not your duty—at least you have duties to others besides him. You say you owe me something?
35 D LADY WINDERMERE: I owe you everything.
36 D MRS. ERLYNNE: Then pay your debt by silence. That is the only way in which it can be paid. Don’t spoil the one good thing I have done in my life by telling it to any one. Promise me that what passed last night will remain a secret between us. You must not bring misery into your husband’s life. Why spoil his love? You must not spoil it. Love is easily killed. Oh! how easily love is killed. Pledge me your word, Lady Windermere, that you will never tell him. I insist upon it.
37 A ¶ With bowed head .
38 D LADY WINDERMERE: It is your will, not mine.
39 D MRS. ERLYNNE: Yes, it is my will. And never forget your child—I like to think of you as a mother. I like you to think of yourself as one.
40 A ¶ Looking up .
41 D LADY WINDERMERE: I always will now. Only once in my life I have forgotten my own mother—that was last night. Oh, if I had remembered her I should not have been so foolish, so wicked.
42 A ¶ With a slight shudder .
43 D MRS. ERLYNNE: Hush, last night is quite over.
44 A ¶ Enter LORD WINDERMERE.
45 D LORD WINDERMERE: Your carriage has not come back yet, Mrs. Erlynne.
46 D MRS. ERLYNNE: It makes no matter. I’ll take a hansom. There is nothing in the world so respectable as a good Shrewsbury and Talbot. And now, dear Lady Windermere, I am afraid it is really good-bye.
47 A ¶ Moves up C.
48 D MRS. ERLYNNE: Oh, I remember. You’ll think me absurd, but do you know I’ve taken a great fancy to this fan that I was silly enough to run away with last night from your ball. Now, I wonder would you give it to me? Lord Windermere says you may. I know it is his present.
49 D LADY WINDERMERE: Oh, certainly, if it will give you any pleasure. But it has my name on it. It has ‘Margaret’ on it.

### SCENE pt_fan_5 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LADY WINDERMERE
1 A ¶ Tries to open it , but fails .
2 A Sees paper knife on bureau , and with it cuts cover from book .
3 A Begins to start at the first page .
4 D LADY WINDERMERE: ‘Mrs. Erlynne—£600—Mrs. Erlynne—£700—Mrs. Erlynne—£400.’ Oh! it is true! It is true! How horrible!
5 A ¶ Throws book on floor .
6 A ¶ Enter LORD WINDERMERE C.
7 D LORD WINDERMERE: Well, dear, has the fan been sent home yet?
8 A ¶ Going R.C. Sees book .
9 D LORD WINDERMERE: Margaret, you have cut open my bank book. You have no right to do such a thing!
10 D LADY WINDERMERE: You think it wrong that you are found out, don’t you?
11 D LORD WINDERMERE: I think it wrong that a wife should spy on her husband.
12 D LADY WINDERMERE: I did not spy on you. I never knew of this woman’s existence till half an hour ago. Some one who pitied me was kind enough to tell me what every one in London knows already—your daily visits to Curzon Street, your mad infatuation, the monstrous sums of money you squander on this infamous woman!
13 A ¶ Crossing L.
14 D LORD WINDERMERE: Margaret! don’t talk like that of Mrs. Erlynne, you don’t know how unjust it is!
15 A ¶ Turning to him .
16 D LADY WINDERMERE: You are very jealous of Mrs. Erlynne’s honour. I wish you had been as jealous of mine.
17 D LORD WINDERMERE: Your honour is untouched, Margaret. You don’t think for a moment that—
18 A ¶ Puts book back into desk .
19 D LADY WINDERMERE: I think that you spend your money strangely. That is all. Oh, don’t imagine I mind about the money. As far as I am concerned, you may squander everything we have. But what I do mind is that you who have loved me, you who have taught me to love you, should pass from the love that is given to the love that is bought. Oh, it’s horrible!
20 A ¶ Sits on sofa .
21 D LADY WINDERMERE: And it is I who feel degraded! you don’t feel anything. I feel stained, utterly stained. You can’t realise how hideous the last six months seems to me now—every kiss you have given me is tainted in my memory.
22 A ¶ Crossing to her .
23 D LORD WINDERMERE: Don’t say that, Margaret. I never loved any one in the whole world but you.
24 A ¶ Rises .
25 D LADY WINDERMERE: Who is this woman, then? Why do you take a house for her?
26 D LORD WINDERMERE: I did not take a house for her.
27 D LADY WINDERMERE: You gave her the money to do it, which is the same thing.
28 D LORD WINDERMERE: Margaret, as far as I have known Mrs. Erlynne—
29 D LADY WINDERMERE: Is there a Mr. Erlynne—or is he a myth?
30 D LORD WINDERMERE: Her husband died many years ago. She is alone in the world.
31 D LADY WINDERMERE: No relations?
* 32 A ¶ A pause .
33 D LORD WINDERMERE: None.
34 D LADY WINDERMERE: Rather curious, isn’t it?
35 A ¶ L.C.
36 D LORD WINDERMERE: Margaret, I was saying to you—and I beg you to listen to me—that as far as I have known Mrs. Erlynne, she has conducted herself well. If years ago—
37 D LADY WINDERMERE: Oh!
38 A ¶ Crossing R.C.
39 D LADY WINDERMERE: I don’t want details about her life!
40 D LORD WINDERMERE: I am not going to give you any details about her life. I tell you simply this—Mrs. Erlynne was once honoured, loved, respected. She was well born, she had position—she lost everything—threw it away, if you like. That makes it all the more bitter. Misfortunes one can endure—they come from outside, they are accidents. But to suffer for one’s own faults—ah!—there is the sting of life. It was twenty years ago, too. She was little more than a girl then. She had been a wife for even less time than you have.
41 D LADY WINDERMERE: I am not interested in her—and—you should not mention this woman and me in the same breath. It is an error of taste.
42 A ¶ Sitting R. at desk .
43 D LORD WINDERMERE: Margaret, you could save this woman. She wants to get back into society, and she wants you to help her.
44 A ¶ Crossing to her .
45 D LADY WINDERMERE: Me!
46 D LORD WINDERMERE: Yes, you.
47 D LADY WINDERMERE: How impertinent of her!

### SCENE pt_fan_6 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD WINDERMERE, PARKER
* 1 A ¶ A pause .
2 D LORD WINDERMERE: Margaret, I came to ask you a great favour, and I still ask it of you, though you have discovered what I had intended you should never have known that I have given Mrs. Erlynne a large sum of money. I want you to send her an invitation for our party to-night.
3 A ¶ Standing L. of her .
4 D LADY WINDERMERE: You are mad!
5 A ¶ Rises .
6 D LORD WINDERMERE: I entreat you. People may chatter about her, do chatter about her, of course, but they don’t know anything definite against her. She has been to several houses—not to houses where you would go, I admit, but still to houses where women who are in what is called Society nowadays do go. That does not content her. She wants you to receive her once.
7 D LADY WINDERMERE: As a triumph for her, I suppose?
8 D LORD WINDERMERE: No; but because she knows that you are a good woman—and that if she comes here once she will have a chance of a happier, a surer life than she has had. She will make no further effort to know you. Won’t you help a woman who is trying to get back?
9 D LADY WINDERMERE: No! If a woman really repents, she never wishes to return to the society that has made or seen her ruin.
10 D LORD WINDERMERE: I beg of you.
11 A ¶ Crossing to door R.
12 D LADY WINDERMERE: I am going to dress for dinner, and don’t mention the subject again this evening. Arthur
13 A ¶ going to him C.
14 D LADY WINDERMERE: , you fancy because I have no father or mother that I am alone in the world, and that you can treat me as you choose. You are wrong, I have friends, many friends.
15 A ¶ L.C.
16 D LORD WINDERMERE: Margaret, you are talking foolishly, recklessly. I won’t argue with you, but I insist upon your asking Mrs. Erlynne to-night.
17 A ¶ R.C.
18 D LADY WINDERMERE: I shall do nothing of the kind.
19 A ¶ Crossing L.C.
20 D LORD WINDERMERE: You refuse?
21 D LADY WINDERMERE: Absolutely!
22 D LORD WINDERMERE: Ah, Margaret, do this for my sake; it is her last chance.
23 D LADY WINDERMERE: What has that to do with me?
24 D LORD WINDERMERE: How hard good women are!
25 D LADY WINDERMERE: How weak bad men are!
26 D LORD WINDERMERE: Margaret, none of us men may be good enough for the women we marry—that is quite true—but you don’t imagine I would ever—oh, the suggestion is monstrous!
27 D LADY WINDERMERE: Why should you be different from other men? I am told that there is hardly a husband in London who does not waste his life over some shameful passion.
28 D LORD WINDERMERE: I am not one of them.
29 D LADY WINDERMERE: I am not sure of that!
30 D LORD WINDERMERE: You are sure in your heart. But don’t make chasm after chasm between us. God knows the last few minutes have thrust us wide enough apart. Sit down and write the card.
31 D LADY WINDERMERE: Nothing in the whole world would induce me.
32 A ¶ Crossing to bureau .
33 D LORD WINDERMERE: Then I will!
34 A ¶ Rings electric bell , sits and writes card .
35 D LADY WINDERMERE: You are going to invite this woman?
36 A ¶ Crossing to him .
37 D LORD WINDERMERE: Yes.
* 38 A ¶ Pause .
39 A Enter PARKER.
40 D LORD WINDERMERE: Parker!
41 D PARKER: Yes, my lord.
42 A ¶ Comes down L.C.
43 D LORD WINDERMERE: Have this note sent to Mrs. Erlynne at No. 84A Curzon Street.
44 A ¶ Crossing to L.C. and giving note to PARKER.
45 D LORD WINDERMERE: There is no answer!
46 A ¶ Exit PARKER C.

### SCENE pt_fan_7 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): LADY WINDERMERE, PARKER, DUCHESS OF BERWICK, LADY AGATHA
1 D LADY WINDERMERE: Arthur, if that woman comes here, I shall insult her.
2 D LORD WINDERMERE: Margaret, don’t say that.
3 D LADY WINDERMERE: I mean it.
4 D LORD WINDERMERE: Child, if you did such a thing, there’s not a woman in London who wouldn’t pity you.
5 D LADY WINDERMERE: There is not a good woman in London who would not applaud me. We have been too lax. We must make an example. I propose to begin to-night.
6 A ¶ Picking up fan .
7 D LADY WINDERMERE: Yes, you gave me this fan to-day; it was your birthday present. If that woman crosses my threshold, I shall strike her across the face with it.
8 D LORD WINDERMERE: Margaret, you couldn’t do such a thing.
9 D LADY WINDERMERE: You don’t know me!
10 A ¶ Moves R.
11 A ¶ Enter PARKER.
12 A ¶ Parker!
13 D PARKER: Yes, my lady.
14 D LADY WINDERMERE: I shall dine in my own room. I don’t want dinner, in fact. See that everything is ready by half-past ten. And, Parker, be sure you pronounce the names of the guests very distinctly to-night. Sometimes you speak so fast that I miss them. I am particularly anxious to hear the names quite clearly, so as to make no mistake. You understand, Parker?
15 D PARKER: Yes, my lady.
16 D LADY WINDERMERE: That will do!
17 A ¶ Exit PARKER C.
18 A ¶ [ Speaking to LORD WINDERMERE.] Arthur, if that woman comes here—I warn you—
19 D LORD WINDERMERE: Margaret, you’ll ruin us!
20 D LADY WINDERMERE: Us! From this moment my life is separate from yours. But if you wish to avoid a public scandal, write at once to this woman, and tell her that I forbid her to come here!
21 D LORD WINDERMERE: I will not—I cannot—she must come!
22 D LADY WINDERMERE: Then I shall do exactly as I have said.
23 A ¶ Goes R.
24 D LADY WINDERMERE: You leave me no choice.
25 A ¶ Exit R.
26 A ¶ Calling after her .
27 D LORD WINDERMERE: Margaret! Margaret!
* 28 A ¶ A pause .
29 D LORD WINDERMERE: My God! What shall I do? I dare not tell her who this woman really is. The shame would kill her.
30 A ¶ Sinks down into a chair and buries his face in his hands .
31 A ¶ * * * * *
* 32 A ¶ Drawing-room in Lord Windermere’s house .
* 33 A Door R.U. opening into ball-room , where band is playing .
* 34 A Door L. through which guests are entering .
* 35 A Door L.U. opens on to illuminated terrace .
* 36 A Palms , flowers , and brilliant lights .
* 37 A Room crowded with guests .
38 A Lady Windermere is receiving them .
39 A ¶ Up C.
40 D DUCHESS OF BERWICK: So strange Lord Windermere isn’t here. Mr. Hopper is very late, too. You have kept those five dances for him, Agatha?
41 A ¶ Comes down .
42 D LADY AGATHA: Yes, mamma.
43 A ¶ Sitting on sofa .
44 D DUCHESS OF BERWICK: Just let me see your card. I’m so glad Lady Windermere has revived cards.—They’re a mother’s only safeguard. You dear simple little thing!
45 A ¶ Scratches out two names .
46 D DUCHESS OF BERWICK: No nice girl should ever waltz with such particularly younger sons! It looks so fast! The last two dances you might pass on the terrace with Mr. Hopper.
47 A ¶ Enter MR. DUMBY and LADY PLYMDALE from the ball-room .
48 D LADY AGATHA: Yes, mamma.
49 A ¶ Fanning herself .
50 D DUCHESS OF BERWICK: The air is so pleasant there.
51 D PARKER: Mrs. Cowper-Cowper. Lady Stutfield. Sir James Royston. Mr. Guy Berkeley.

### SCENE pt_fan_8 | INT. FAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): DUMBY, LADY STUTFIELD, DUCHESS OF BERWICK, MR. COWPER-COWPER, PARKER, HOPPER, LADY AGATHA, LORD WINDERMERE, LORD AUGUSTUS
1 A ¶ These people enter as announced .
2 D DUMBY: Good evening, Lady Stutfield. I suppose this will be the last ball of the season?
3 D LADY STUTFIELD: I suppose so, Mr. Dumby. It’s been a delightful season, hasn’t it?
4 D DUMBY: Quite delightful! Good evening, Duchess. I suppose this will be the last ball of the season?
5 D DUCHESS OF BERWICK: I suppose so, Mr. Dumby. It has been a very dull season, hasn’t it?
6 D DUMBY: Dreadfully dull! Dreadfully dull!
7 D MR. COWPER-COWPER: Good evening, Mr. Dumby. I suppose this will be the last ball of the season?
8 D DUMBY: Oh, I think not. There’ll probably be two more.
9 A ¶ Wanders back to LADY PLYMDALE.
10 D PARKER: Mr. Rufford. Lady Jedburgh and Miss Graham. Mr. Hopper.
11 A ¶ These people enter as announced .
12 D HOPPER: How do you do, Lady Windermere? How do you do, Duchess?
13 A ¶ Bows to LADY AGATHA.
14 D DUCHESS OF BERWICK: Dear Mr. Hopper, how nice of you to come so early. We all know how you are run after in London.
15 D HOPPER: Capital place, London! They are not nearly so exclusive in London as they are in Sydney.
16 D DUCHESS OF BERWICK: Ah! we know your value, Mr. Hopper. We wish there were more like you. It would make life so much easier. Do you know, Mr. Hopper, dear Agatha and I are so much interested in Australia. It must be so pretty with all the dear little kangaroos flying about. Agatha has found it on the map. What a curious shape it is! Just like a large packing case. However, it is a very young country, isn’t it?
17 D HOPPER: Wasn’t it made at the same time as the others, Duchess?
18 D DUCHESS OF BERWICK: How clever you are, Mr. Hopper. You have a cleverness quite of your own. Now I mustn’t keep you.
19 D HOPPER: But I should like to dance with Lady Agatha, Duchess.
20 D DUCHESS OF BERWICK: Well, I hope she has a dance left. Have you a dance left, Agatha?
21 D LADY AGATHA: Yes, mamma.
22 D DUCHESS OF BERWICK: The next one?
23 D LADY AGATHA: Yes, mamma.
24 D HOPPER: May I have the pleasure?
25 A ¶ LADY AGATHA bows .
26 D DUCHESS OF BERWICK: Mind you take great care of my little chatterbox, Mr. Hopper.
27 A ¶ LADY AGATHA and MR. HOPPER pass into ball-room .
28 A ¶ Enter LORD WINDERMERE.
29 D LORD WINDERMERE: Margaret, I want to speak to you.
30 D LADY WINDERMERE: In a moment.
* 31 A ¶ The music drops .
32 D PARKER: Lord Augustus Lorton.
33 A ¶ Enter LORD AUGUSTUS.
34 D LORD AUGUSTUS: Good evening, Lady Windermere.
35 D DUCHESS OF BERWICK: Sir James, will you take me into the ball-room? Augustus has been dining with us to-night. I really have had quite enough of dear Augustus for the moment.
36 A ¶ SIR JAMES ROYSTON gives the DUCHESS his arm and escorts her into the ball-room .
37 D PARKER: Mr. and Mrs. Arthur Bowden. Lord and Lady Paisley. Lord Darlington.
38 A ¶ These people enter as announced .
39 A ¶ Coming up to LORD WINDERMERE.
40 D LORD AUGUSTUS: Want to speak to you particularly, dear boy. I’m worn to a shadow. Know I don’t look it. None of us men do look what we really are. Demmed good thing, too. What I want to know is this. Who is she? Where does she come from? Why hasn’t she got any demmed relations? Demmed nuisance, relations! But they make one so demmed respectable.
41 D LORD WINDERMERE: You are talking of Mrs. Erlynne, I suppose? I only met her six months ago. Till then, I never knew of her existence.
42 D LORD AUGUSTUS: You have seen a good deal of her since then.
43 A ¶ Coldly .
44 D LORD WINDERMERE: Yes, I have seen a good deal of her since then. I have just seen her.
45 D LORD AUGUSTUS: Egad! the women are very down on her. I have been dining with Arabella this evening! By Jove! you should have heard what she said about Mrs. Erlynne. She didn’t leave a rag on her. . . .

### SCENE pt_ghosts_0 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ENGSTRAND, REGINA
* 1 A ¶ A spacious garden-room, with one door to the left, and two doors to the right.
* 2 A In the middle of the room a round table, with chairs about it.
* 3 A On the table lie books, periodicals, and newspapers.
* 4 A In the foreground to the left a window, and by it a small sofa, with a worktable in front of it.
* 5 A In the background, the room is continued into a somewhat narrower conservatory, the walls of which are formed by large panes of glass.
* 6 A In the right-hand wall of the conservatory is a door leading down into the garden.
* 7 A Through the glass wall a gloomy fjord landscape is faintly visible, veiled by steady rain.
8 A ¶ ENGSTRAND, the carpenter, stands by the garden door.
9 A His left leg is somewhat bent; he has a clump of wood under the sole of his boot.
10 A REGINA, with an empty garden syringe in her hand, hinders him from advancing.
11 A ¶ In a low voice.
12 D REGINA: What do you want? Stop where you are. You're positively dripping.
13 D ENGSTRAND: It's the Lord's own rain, my girl.
14 D REGINA: It's the devil's rain, I say.
15 D ENGSTRAND: Lord, how you talk, Regina.
16 A ¶ Limps a step or two forward into the room.
17 D ENGSTRAND: It's just this as I wanted to say--
18 D REGINA: Don't clatter so with that foot of yours, I tell you! The young master's asleep upstairs.
19 D ENGSTRAND: Asleep? In the middle of the day?
20 D REGINA: It's no business of yours.
21 D ENGSTRAND: I was out on the loose last night--
22 D REGINA: I can quite believe that.
23 D ENGSTRAND: Yes, we're weak vessels, we poor mortals, my girl--
24 D REGINA: So it seems.
25 D ENGSTRAND: --and temptations are manifold in this world, you see. But all the same, I was hard at work, God knows, at half-past five this morning.
26 D REGINA: Very well; only be off now. I won't stop here and have rendezvous's
* 27 A ¶ Note: This and other French words by Regina are in that language in the original.
28 D REGINA: with you.
29 D ENGSTRAND: What do you say you won't have?
30 D REGINA: I won't have any one find you here; so just you go about your business.
31 A ¶ Advances a step or two.
32 D ENGSTRAND: Blest if I go before I've had a talk with you. This afternoon I shall have finished my work at the school house, and then I shall take to-night's boat and be off home to the town.
33 A ¶ Mutters.
34 D REGINA: Pleasant journey to you!
35 D ENGSTRAND: Thank you, my child. To-morrow the Orphanage is to be opened, and then there'll be fine doings, no doubt, and plenty of intoxicating drink going, you know. And nobody shall say of Jacob Engstrand that he can't keep out of temptation's way.
36 D REGINA: Oh!
37 D ENGSTRAND: You see, there's to be heaps of grand folks here to-morrow. Pastor Manders is expected from town, too.
38 D REGINA: He's coming to-day.
39 D ENGSTRAND: There, you see! And I should be cursedly sorry if he found out anything against me, don't you understand?
40 D REGINA: Oho! is that your game?
41 D ENGSTRAND: Is what my game?
42 A ¶ Looking hard at him.
43 D REGINA: What are you going to fool Pastor Manders into doing, this time?
44 D ENGSTRAND: Sh! sh! Are you crazy? Do I want to fool Pastor Manders? Oh no! Pastor Manders has been far too good a friend to me for that. But I just wanted to say, you know--that I mean to be off home again to-night.
45 D REGINA: The sooner the better, say I.
46 D ENGSTRAND: Yes, but I want you with me, Regina.
47 A ¶ Open-mouthed.
48 D REGINA: You want me--? What are you talking about?
49 D ENGSTRAND: I want you to come home with me, I say.
50 A ¶ Scornfully.
51 D REGINA: Never in this world shall you get me home with you.
52 D ENGSTRAND: Oh, we'll see about that.
53 D REGINA: Yes, you may be sure we'll see about it! Me, that have been brought up by a lady like Mrs. Alving! Me, that am treated almost as a daughter here! Is it me you want to go home with you?--to a house like yours? For shame!

### SCENE pt_ghosts_1 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ENGSTRAND, REGINA
1 D ENGSTRAND: What the devil do you mean? Do you set yourself up against your father, you hussy?
2 A ¶ Mutters without looking at him.
3 D REGINA: You've said often enough I was no concern of yours.
4 D ENGSTRAND: Pooh! Why should you bother about that--
5 D REGINA: Haven't you many a time sworn at me and called me a--? Fi donc !
6 D ENGSTRAND: Curse me, now, if ever I used such an ugly word.
7 D REGINA: Oh, I remember very well what word you used.
8 D ENGSTRAND: Well, but that was only when I was a bit on, don't you know? Temptations are manifold in this world, Regina.
9 D REGINA: Ugh!
10 D ENGSTRAND: And besides, it was when your mother was that aggravating--I had to find something to twit her with, my child. She was always setting up for a fine lady.
11 A ¶ Mimics.
12 D ENGSTRAND: "Let me go, Engstrand; let me be. Remember I was three years in Chamberlain Alving's family at Rosenvold."
13 A ¶ Laughs.
14 D ENGSTRAND: Mercy on us! She could never forget that the Captain was made a Chamberlain while she was in service here.
15 D REGINA: Poor mother! you very soon tormented her into her grave.
16 A ¶ With a twist of his shoulders.
17 D ENGSTRAND: Oh, of course! I'm to have the blame for everything.
18 A ¶ Turns away; half aloud.
19 D REGINA: Ugh--! And that leg too!
20 D ENGSTRAND: What do you say, my child?
21 D REGINA: Pied de mouton .
22 D ENGSTRAND: Is that English, eh?
23 D REGINA: Yes.
24 D ENGSTRAND: Ay, ay; you've picked up some learning out here; and that may come in useful now, Regina.
* 25 A ¶ After a short silence.
26 D REGINA: What do you want with me in town?
27 D ENGSTRAND: Can you ask what a father wants with his only child? A'n't I a lonely, forlorn widower?
28 D REGINA: Oh, don't try on any nonsense like that with me! Why do you want me?
29 D ENGSTRAND: Well, let me tell you, I've been thinking of setting up in a new line of business.
30 A ¶ Contemptuously.
31 D REGINA: You've tried that often enough, and much good you've done with it.
32 D ENGSTRAND: Yes, but this time you shall see, Regina! Devil take me--
33 A ¶ Stamps.
34 D REGINA: Stop your swearing!
35 D ENGSTRAND: Hush, hush; you're right enough there, my girl. What I wanted to say was just this--I've laid by a very tidy pile from this Orphanage job.
36 D REGINA: Have you? That's a good thing for you.
37 D ENGSTRAND: What can a man spend his ha'pence on here in this country hole?
38 D REGINA: Well, what then?
39 D ENGSTRAND: Why, you see, I thought of putting the money into some paying speculation. I thought of a sort of a sailor's tavern--
40 D REGINA: Pah!
41 D ENGSTRAND: A regular high-class affair, of course; not any sort of pig-sty for common sailors. No! damn it! it would be for captains and mates, and--and--regular swells, you know.
42 D REGINA: And I was to--?
43 D ENGSTRAND: You were to help, to be sure. Only for the look of the thing, you understand. Devil a bit of hard work shall you have, my girl. You shall do exactly what you like.
44 D REGINA: Oh, indeed!
45 D ENGSTRAND: But there must be a petticoat in the house; that's as clear as daylight. For I want to have it a bit lively like in the evenings, with singing and dancing, and so on. You must remember they're weary wanderers on the ocean of life.

### SCENE pt_ghosts_10 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): MANDERS, MRS. ALVING
1 A ¶ Stands still.
2 D MANDERS: Right? Right! In such principles?
3 D MRS. ALVING: Here, in my loneliness, I have come to the same way of thinking, Pastor Manders. But I have never dared to say anything. Well! now my boy shall speak for me.
4 D MANDERS: You are greatly to be pitied, Mrs. Alving. But now I must speak seriously to you. And now it is no longer your business manager and adviser, your own and your husband's early friend, who stands before you. It is the priest--the priest who stood before you in the moment of your life when you had gone farthest astray.
5 D MRS. ALVING: And what has the priest to say to me?
6 D MANDERS: I will first stir up your memory a little. The moment is well chosen. To-morrow will be the tenth anniversary of your husband's death. To-morrow the memorial in his honour will be unveiled. To-morrow I shall have to speak to the whole assembled multitude. But to-day I will speak to you alone.
7 D MRS. ALVING: Very well, Pastor Manders. Speak.
8 D MANDERS: Do you remember that after less than a year of married life you stood on the verge of an abyss? That you forsook your house and home? That you fled from your husband? Yes, Mrs. Alving--fled, fled, and refused to return to him, however much he begged and prayed you?
9 D MRS. ALVING: Have you forgotten how infinitely miserable I was in that first year?
10 D MANDERS: It is the very mark of the spirit of rebellion to crave for happiness in this life. What right have we human beings to happiness? We have simply to do our duty, Mrs. Alving! And your duty was to hold firmly to the man you had once chosen, and to whom you were bound by the holiest ties.
11 D MRS. ALVING: You know very well what sort of life Alving was leading--what excesses he was guilty of.
12 D MANDERS: I know very well what rumours there were about him; and I am the last to approve the life he led in his young days, if report did not wrong him. But a wife is not appointed to be her husband's judge. It was your duty to bear with humility the cross which a Higher Power had, in its wisdom, laid upon you. But instead of that you rebelliously throw away the cross, desert the backslider whom you should have supported, go and risk your good name and reputation, and--nearly succeed in ruining other people's reputation into the bargain.
13 D MRS. ALVING: Other people's? One other person's, you mean.
14 D MANDERS: It was incredibly reckless of you to seek refuge with me.
15 D MRS. ALVING: With our clergyman? With our intimate friend?
16 D MANDERS: Just on that account. Yes, you may thank God that I possessed the necessary firmness; that I succeeded in dissuading you from your wild designs; and that it was vouchsafed me to lead you back to the path of duty, and home to your lawful husband.
17 D MRS. ALVING: Yes, Pastor Manders, that was certainly your work.
18 D MANDERS: I was but a poor instrument in a Higher Hand. And what a blessing has it not proved to you, all the days of your life, that I induced you to resume the yoke of duty and obedience! Did not everything happen as I foretold? Did not Alving turn his back on his errors, as a man should? Did he not live with you from that time, lovingly and blamelessly, all his days? Did he not become a benefactor to the whole district? And did he not help you to rise to his own level, so that you, little by little, became his assistant in all his undertakings? And a capital assistant, too--oh, I know, Mrs. Alving, that praise is due to you.--But now I come to the next great error in your life.
19 D MRS. ALVING: What do you mean?
20 D MANDERS: Just as you once disowned a wife's duty, so you have since disowned a mother's.
21 D MRS. ALVING: Ah--!
22 D MANDERS: You have been all your life under the dominion of a pestilent spirit of self-will. The whole bias of your mind has been towards insubordination and lawlessness. You have never known how to endure any bond. Everything that has weighed upon you in life you have cast away without care or conscience, like a burden you were free to throw off at will. It did not please you to be a wife any longer, and you left your husband. You found it troublesome to be a mother, and you sent your child forth among strangers.
23 D MRS. ALVING: Yes, that is true. I did so.
24 D MANDERS: And thus you have become a stranger to him.
25 D MRS. ALVING: No! no! I am not.
26 D MANDERS: Yes, you are; you must be. And in what state of mind has he returned to you? Bethink yourself well, Mrs. Alving. You sinned greatly against your husband;--that you recognise by raising yonder memorial to him. Recognise now, also, how you have sinned against your son--there may yet be time to lead him back from the paths of error. Turn back yourself, and save what may yet be saved in him. For
27 A ¶ With uplifted forefinger.
28 D MANDERS: verily, Mrs. Alving, you are a guilt-laden mother! This I have thought it my duty to say to you.
* 29 A ¶ Silence.
30 A ¶ Slowly and with self-control.
31 D MRS. ALVING: You have now spoken out, Pastor Manders; and to-morrow you are to speak publicly in memory of my husband. I shall not speak to-morrow. But now I will speak frankly to you, as you have spoken to me.
32 D MANDERS: To be sure; you will plead excuses for your conduct--
33 D MRS. ALVING: No. I will only tell you a story.
34 D MANDERS: Well--?
35 D MRS. ALVING: All that you have just said about my husband and me, and our life after you had brought me back to the path of duty--as you called it--about all that you know nothing from personal observation. From that moment you, who had been our intimate friend, never set foot in our house gain.
36 D MANDERS: You and your husband left the town immediately after.
37 D MRS. ALVING: Yes; and in my husband's lifetime you never came to see us. It was business that forced you to visit me when you undertook the affairs of the Orphanage.
38 A ¶ Softly and hesitatingly.
39 D MANDERS: Helen--if that is meant as a reproach, I would beg you to bear in mind--
40 D MRS. ALVING: --the regard you owed to your position, yes; and that I was a runaway wife. One can never be too cautious with such unprincipled creatures.
41 D MANDERS: My dear--Mrs. Alving, you know that is an absurd exaggeration--
42 D MRS. ALVING: Well well, suppose it is. My point is that your judgment as to my married life is founded upon nothing but common knowledge and report.
43 D MANDERS: I admit that. What then?
44 D MRS. ALVING: Well, then, Pastor Manders--I will tell you the truth. I have sworn to myself that one day you should know it--you alone!
45 D MANDERS: What is the truth, then?

### SCENE pt_ghosts_12 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OSWALD, REGINA, PASTOR MANDERS, MRS. ALVING
1 D OSWALD: Yes. What can a fellow do out of doors in this eternal rain? But I hear dinner is ready. That's capital!
2 A ¶ With a parcel, from the dining-room.
3 D REGINA: A parcel has come for you, Mrs. Alving.
4 A ¶ Hands it to her.
5 A ¶ With a glance at MR. MANDERS.
6 D MRS. ALVING: No doubt copies of the ode for to-morrow's ceremony.
7 D MANDERS: H'm--
8 D REGINA: And dinner is ready.
9 D MRS. ALVING: Very well. We will come directly. I will just--
10 A ¶ Begins to open the parcel.
11 A ¶ To OSWALD.
12 D REGINA: Would Mr. Alving like red or white wine?
13 D OSWALD: Both, if you please.
14 D REGINA: Bien . Very well, sir.
15 A ¶ She goes into the dining-room.
16 D OSWALD: I may as well help to uncork it.
17 A ¶ He also goes into the dining room, the door of which swings half open behind him.
18 A ¶ Who has opened the parcel.
19 D MRS. ALVING: Yes, I thought so. Here is the Ceremonial Ode, Pastor Manders.
20 A ¶ With folded hands.
21 D MANDERS: With what countenance I am to deliver my discourse to-morrow--!
22 D MRS. ALVING: Oh, you will get through it somehow.
23 A ¶ Softly, so as not to be heard in the dining-room.
24 D MANDERS: Yes; it would not do to provoke scandal.
25 A ¶ Under her breath, but firmly.
26 D MRS. ALVING: No. But then this long, hateful comedy will be ended. From the day after to-morrow, I shall act in every way as though he who is dead had never lived in this house. There shall be no one here but my boy and his mother.
* 27 A ¶ From the dining-room comes the noise of a chair overturned, and at the same moment is heard:
28 A ¶ Sharply, but in a whisper.
29 D REGINA: Oswald! take care! are you mad? Let me go!
30 A ¶ Starts in terror.
31 D MRS. ALVING: Ah--!
32 A ¶ She stares wildly towards the half-open door.
33 A OSWALD is heard laughing and humming.
* 34 A A bottle is uncorked.
35 A ¶ Agitated.
36 D MANDERS: What can be the matter? What is it, Mrs. Alving?
37 A ¶ Hoarsely.
38 D MRS. ALVING: Ghosts! The couple from the conservatory--risen again!
39 D MANDERS: Is it possible! Regina--? Is she--?
40 D MRS. ALVING: Yes. Come. Not a word--!
41 A ¶ She seizes PASTOR MANDERS by the arm, and walks unsteadily towards the dining-room.
* 42 A ¶ The same room.
* 43 A The mist still lies heavy over the landscape.
44 A ¶ MANDERS and MRS. ALVING enter from the dining-room.
45 A ¶ Still in the doorway.
46 D MRS. ALVING: Velbekomme
* 47 A ¶ Note: A phrase equivalent to the German Prosit die Mahlzeit --May good digestion wait on appetite.
48 D MRS. ALVING: , Mr. Manders.

### SCENE pt_ghosts_13 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS. ALVING, OSWALD, REGINA, MANDERS
1 A ¶ Turns back towards the dining-room.
2 D MRS. ALVING: Aren't you coming too, Oswald?
* 3 A ¶ From within.
4 D OSWALD: No, thank you. I think I shall go out a little.
5 D MRS. ALVING: Yes, do. The weather seems a little brighter now.
6 A ¶ She shuts the dining-room door, goes to the hall door, and calls:.
7 D MRS. ALVING: Regina!
* 8 A ¶ Outside.
9 D REGINA: Yes, Mrs. Alving?
10 D MRS. ALVING: Go down to the laundry, and help with the garlands.
11 D REGINA: Yes, Mrs. Alving.
12 A ¶ MRS. ALVING assures herself that REGINA goes; then shuts the door.
13 D MANDERS: I suppose he cannot overhear us in there?
14 D MRS. ALVING: Not when the door is shut. Besides, he's just going out.
15 D MANDERS: I am still quite upset. I don't know how I could swallow a morsel of dinner.
16 A ¶ Controlling her nervousness, walks up and down.
17 D MRS. ALVING: Nor I. But what is to be done now?
18 D MANDERS: Yes; what is to be done? I am really quite at a loss. I am so utterly without experience in matters of this sort.
19 D MRS. ALVING: I feel sure that, so far, no mischief has been done.
20 D MANDERS: No; heaven forbid! But it is an unseemly state of things, nevertheless.
21 D MRS. ALVING: It is only an idle fancy on Oswald's part; you may be sure of that.
22 D MANDERS: Well, as I say, I am not accustomed to affairs of the kind. But I should certainly think--
23 D MRS. ALVING: Out of the house she must go, and that immediately. That is as clear as daylight--
24 D MANDERS: Yes, of course she must.
25 D MRS. ALVING: But where to? It would not be right to--
26 D MANDERS: Where to? Home to her father, of course.
27 D MRS. ALVING: To whom did you say?
28 D MANDERS: To her--But then, Engstrand is not--? Good God, Mrs. Alving, it's impossible! You must be mistaken after all.
29 D MRS. ALVING: Unfortunately there is no possibility of mistake. Johanna confessed everything to me; and Alving could not deny it. So there was nothing to be done but to get the matter hushed up.
30 D MANDERS: No, you could do nothing else.
31 D MRS. ALVING: The girl left our service at once, and got a good sum of money to hold her tongue for the time. The rest she managed for herself when she got to town. She renewed her old acquaintance with Engstrand, no doubt let him see that she had money in her purse, and told him some tale about a foreigner who put in here with a yacht that summer. So she and Engstrand got married in hot haste. Why, you married them yourself.
32 D MANDERS: But then how to account for--? I recollect distinctly Engstrand coming to give notice of the marriage. He was quite overwhelmed with contrition, and bitterly reproached himself for the misbehaviour he and his sweetheart had been guilty of.
33 D MRS. ALVING: Yes; of course he had to take the blame upon himself.
34 D MANDERS: But such a piece of duplicity on his part! And towards me too! I never could have believed it of Jacob Engstrand. I shall not fail to take him seriously to task; he may be sure of that.--And then the immorality of such a connection! For money--! How much did the girl receive?
35 D MRS. ALVING: Three hundred dollars.
36 D MANDERS: Just think of it--for a miserable three hundred dollars, to go and marry a fallen woman!
37 D MRS. ALVING: Then what have you to say of me? I went and married a fallen man.
38 D MANDERS: Why--good heavens!--what are you talking about! A fallen man!
39 D MRS. ALVING: Do you think Alving was any purer when I went with him to the altar than Johanna was when Engstrand married her?
40 D MANDERS: Well, but there is a world of difference between the two cases--
41 D MRS. ALVING: Not so much difference after all--except in the price:--a miserable three hundred dollars and a whole fortune.
42 D MANDERS: How can you compare such absolutely dissimilar cases? You had taken counsel with your own heart and with your natural advisers.
43 A ¶ Without looking at him.
44 D MRS. ALVING: I thought you understood where what you call my heart had strayed to at the time.
45 A ¶ Distantly.

### SCENE pt_ghosts_15 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): MANDERS, MRS. ALVING, ENGSTRAND
1 D MANDERS: Ah, you are thinking of the possibility that--Alas! yes, family life is certainly not always so pure as it ought to be. But in such a case as you point to, one can never know--at least with any certainty. Here, on the other hand--that you, a mother, can think of letting your son--
2 D MRS. ALVING: But I cannot--I wouldn't for anything in the world; that is precisely what I am saying.
3 D MANDERS: No, because you are a "coward," as you put it. But if you were not a "coward," then--? Good God! a connection so shocking!
4 D MRS. ALVING: So far as that goes, they say we are all sprung from connections of that sort. And who is it that arranged the world so, Pastor Manders?
5 D MANDERS: Questions of that kind I must decline to discuss with you, Mrs. Alving; you are far from being in the right frame of mind for them. But that you dare to call your scruples "cowardly"--!
6 D MRS. ALVING: Let me tell you what I mean. I am timid and faint-hearted because of the ghosts that hang about me, and that I can never quite shake off.
7 D MANDERS: What do you say hangs about you?
8 D MRS. ALVING: Ghosts! When I heard Regina and Oswald in there, it was as though ghosts rose up before me. But I almost think we are all of us ghosts, Pastor Manders. It is not only what we have inherited from our father and mother that "walks" in us. It is all sorts of dead ideas, and lifeless old beliefs, and so forth. They have no vitality, but they cling to us all the same, and we cannot shake them off. Whenever I take up a newspaper, I seem to see ghosts gliding between the lines. There must be ghosts all the country over, as thick as the sands of the sea. And then we are, one and all, so pitifully afraid of the light.
9 D MANDERS: Aha--here we have the fruits of your reading. And pretty fruits they are, upon my word! Oh, those horrible, revolutionary, free-thinking books!
10 D MRS. ALVING: You are mistaken, my dear Pastor. It was you yourself who set me thinking; and I thank you for it with all my heart.
11 D MANDERS: I!
12 D MRS. ALVING: Yes--when you forced me under the yoke of what you called duty and obligation; when you lauded as right and proper what my whole soul rebelled against as something loathsome. It was then that I began to look into the seams of your doctrines. I wanted only to pick at a single knot; but when I had got that undone, the whole thing ravelled out. And then I understood that it was all machine-sewn.
13 A ¶ Softly, with emotion.
14 D MANDERS: And was that the upshot of my life's hardest battle?
15 D MRS. ALVING: Call it rather your most pitiful defeat.
16 D MANDERS: It was my greatest victory, Helen--the victory over myself.
17 D MRS. ALVING: It was a crime against us both.
18 D MANDERS: When you went astray, and came to me crying, "Here I am; take me!" I commanded you, saying, "Woman, go home to your lawful husband." Was that a crime?
19 D MRS. ALVING: Yes, I think so.
20 D MANDERS: We two do not understand each other.
21 D MRS. ALVING: Not now, at any rate.
22 D MANDERS: Never--never in my most secret thoughts have I regarded you otherwise than as another's wife.
23 D MRS. ALVING: Oh--indeed?
24 D MANDERS: Helen--!
25 D MRS. ALVING: People so easily forget their past selves.
26 D MANDERS: I do not. I am what I always was.
27 A ¶ Changing the subject.
28 D MRS. ALVING: Well well well; don't let us talk of old times any longer. You are now over head and ears in Boards and Committees, and I am fighting my battle with ghosts, both within me and without.
29 D MANDERS: Those without I shall help you to lay. After all the terrible things I have heard from you today, I cannot in conscience permit an unprotected girl to remain in your house.
30 D MRS. ALVING: Don't you think the best plan would be to get her provided for?--I mean, by a good marriage.
31 D MANDERS: No doubt. I think it would be desirable for her in every respect. Regina is now at the age when--Of course I don't know much about these things, but--
32 D MRS. ALVING: Regina matured very early.
33 D MANDERS: Yes, I thought so. I have an impression that she was remarkably well developed, physically, when I prepared her for confirmation. But in the meantime, she ought to be at home, under her father's eye--Ah! but Engstrand is not--That he--that he--could so hide the truth from me!
* 34 A ¶ A knock at the door into the hall.
35 D MRS. ALVING: Who can this be? Come in!
36 A ¶ In his Sunday clothes, in the doorway.
37 D ENGSTRAND: I humbly beg your pardon, but--
38 D MANDERS: Aha! H'm--
39 D MRS. ALVING: Is that you, Engstrand?
40 D ENGSTRAND: --there was none of the servants about, so I took the great liberty of just knocking.
41 D MRS. ALVING: Oh, very well. Come in. Do you want to speak to me?
42 A ¶ Comes in.
43 D ENGSTRAND: No, I'm obliged to you, ma'am; it was with his Reverence I wanted to have a word or two.
44 A ¶ Walking up and down the room.
45 D MANDERS: Ah--indeed! You want to speak to me, do you?

### SCENE pt_ghosts_18 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): MANDERS, MRS. ALVING, OSWALD
1 D MANDERS: Well, what do you say of that man now, Mrs. Alving? That was a very different account of matters, was it not?
2 D MRS. ALVING: Yes, it certainly was.
3 D MANDERS: It only shows how excessively careful one ought to be in judging one's fellow creatures. But what a heartfelt joy it is to ascertain that one has been mistaken! Don't you think so?
4 D MRS. ALVING: I think you are, and will always be, a great baby, Manders.
5 D MANDERS: I?
6 A ¶ Laying her two hands upon his shoulders.
7 D MRS. ALVING: And I say that I have half a mind to put my arms round your neck, and kiss you.
8 A ¶ Stepping hastily back.
9 D MANDERS: No, no! God bless me! What an idea!
10 A ¶ With a smile.
11 D MRS. ALVING: Oh, you needn't be afraid of me.
12 A ¶ By the table.
13 D MANDERS: You have sometimes such an exaggerated way of expressing yourself. Now, let me just collect all the documents, and put them in my bag.
14 A ¶ He does so.
15 D MANDERS: There, that's all right. And now, good-bye for the present. Keep your eyes open when Oswald comes back. I shall look in again later.
16 A ¶ He takes his hat and goes out through the hall door.
17 A ¶ Sighs, looks for a moment out of the window, sets the room in order a little, and is about to go into the dining-room, but stops at the door with a half-suppressed cry.
18 D MRS. ALVING: Oswald, are you still at table?
* 19 A ¶ In the dining room.
20 D OSWALD: I'm only finishing my cigar.
21 D MRS. ALVING: I thought you had gone for a little walk.
22 D OSWALD: In such weather as this?
* 23 A ¶ A glass clinks.
24 A MRS. ALVING leaves the door open, and sits down with her knitting on the sofa by the window.
25 D OSWALD: Wasn't that Pastor Manders that went out just now?
26 D MRS. ALVING: Yes; he went down to the Orphanage.
27 D OSWALD: H'm.
* 28 A ¶ The glass and decanter clink again.
29 A ¶ With a troubled glance.
30 D MRS. ALVING: Dear Oswald, you should take care of that liqueur. It is strong.
31 D OSWALD: It keeps out the damp.
32 D MRS. ALVING: Wouldn't you rather come in here, to me?
33 D OSWALD: I mayn't smoke in there.
34 D MRS. ALVING: You know quite well you may smoke cigars.
35 D OSWALD: Oh, all right then; I'll come in. Just a tiny drop more first. There!
36 A ¶ He comes into the room with his cigar, and shuts the door after him.
* 37 A A short silence.
38 D OSWALD: Where has the pastor gone to?
39 D MRS. ALVING: I have just told you; he went down to the Orphanage.
40 D OSWALD: Oh, yes; so you did.
41 D MRS. ALVING: You shouldn't sit so long at table, Oswald.
42 A ¶ Holding his cigar behind him.
43 D OSWALD: But I find it so pleasant, mother.
44 A ¶ Strokes and caresses her.
45 D OSWALD: Just think what it is for me to come home and sit at mother's own table, in mother's room, and eat mother's delicious dishes.
46 D MRS. ALVING: My dear, dear boy!
47 A ¶ Somewhat impatiently, walks about and smokes.

### SCENE pt_ghosts_19 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OSWALD, MRS. ALVING
1 D OSWALD: And what else can I do with myself here? I can't set to work at anything.
2 D MRS. ALVING: Why can't you?
3 D OSWALD: In such weather as this? Without a single ray of sunshine the whole day?
4 A ¶ Walks up the room.
5 D OSWALD: Oh, not to be able to work--!
6 D MRS. ALVING: Perhaps it was not quite wise of you to come home?
7 D OSWALD: Oh, yes, mother; I had to.
8 D MRS. ALVING: You know I would ten times rather forgo the joy of having you here, than let you--
9 A ¶ Stops beside the table.
10 D OSWALD: Now just tell me, mother: does it really make you so very happy to have me home again?
11 D MRS. ALVING: Does it make me happy!
12 A ¶ Crumpling up a newspaper.
13 D OSWALD: I should have thought it must be pretty much the same to you whether I was in existence or not.
14 D MRS. ALVING: Have you the heart to say that to your mother, Oswald?
15 D OSWALD: But you've got on very well without me all this time.
16 D MRS. ALVING: Yes; I have got on without you. That is true.
* 17 A ¶ A silence.
* 18 A Twilight slowly begins to fall.
19 A OSWALD paces to and fro across the room.
20 A He has laid his cigar down.
21 A ¶ Stops beside MRS. ALVING.
22 D OSWALD: Mother, may I sit on the sofa beside you?
23 A ¶ Makes room for him.
24 D MRS. ALVING: Yes, do, my dear boy.
25 A ¶ Sits down.
26 D OSWALD: There is something I must tell you, mother.
27 A ¶ Anxiously.
28 D MRS. ALVING: Well?
29 A ¶ Looks fixedly before him.
30 D OSWALD: For I can't go on hiding it any longer.
31 D MRS. ALVING: Hiding what? What is it?
32 A ¶ As before.
33 D OSWALD: I could never bring myself to write to you about it; and since I've come home--
34 A ¶ Seizes him by the arm.
35 D MRS. ALVING: Oswald, what is the matter?
36 D OSWALD: Both yesterday and to-day I have tried to put the thoughts away from me--to cast them off; but it's no use.
37 A ¶ Rising.
38 D MRS. ALVING: Now you must tell me everything, Oswald!
39 A ¶ Draws her down to the sofa again.
40 D OSWALD: Sit still; and then I will try to tell you.--I complained of fatigue after my journey--
41 D MRS. ALVING: Well? What then?
42 D OSWALD: But it isn't that that is the matter with me; not any ordinary fatigue--
43 A ¶ Tries to jump up.
44 D MRS. ALVING: You are not ill, Oswald?
45 A ¶ Draws her down again.
46 D OSWALD: Sit still, mother. Do take it quietly. I'm not downright ill, either; not what is commonly called "ill."
47 A ¶ Clasps his hands above his head.
48 D OSWALD: Mother, my mind is broken down--ruined--I shall never be able to work again!

### SCENE pt_ghosts_2 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ENGSTRAND, REGINA, PASTOR MANDERS
1 A ¶ Nearer.
2 D ENGSTRAND: Now don't be a fool and stand in your own light, Regina. What's to become of you out here? Your mistress has given you a lot of learning; but what good is that to you? You're to look after the children at the new Orphanage, I hear. Is that the sort of thing for you, eh? Are you so dead set on wearing your life out for a pack of dirty brats?
3 D REGINA: No; if things go as I want them to--Well there's no saying--there's no saying.
4 D ENGSTRAND: What do you mean by "there's no saying"?
5 D REGINA: Never you mind.--How much money have you saved?
6 D ENGSTRAND: What with one thing and another, a matter of seven or eight hundred crowns.
* 7 A ¶ A "krone" is equal to one shilling and three-halfpence.
8 D REGINA: That's not so bad.
9 D ENGSTRAND: It's enough to make a start with, my girl.
10 D REGINA: Aren't you thinking of giving me any?
11 D ENGSTRAND: No, I'm blest if I am!
12 D REGINA: Not even of sending me a scrap of stuff for a new dress?
13 D ENGSTRAND: Come to town with me, my lass, and you'll soon get dresses enough.
14 D REGINA: Pooh! I can do that on my own account, if I want to.
15 D ENGSTRAND: No, a father's guiding hand is what you want, Regina. Now, I've got my eye on a capital house in Little Harbour Street. They don't want much ready-money; and it could be a sort of a Sailors' Home, you know.
16 D REGINA: But I will not live with you! I have nothing whatever to do with you. Be off!
17 D ENGSTRAND: You wouldn't stop long with me, my girl. No such luck! If you knew how to play your cards, such a fine figure of a girl as you've grown in the last year or two--
18 D REGINA: Well?
19 D ENGSTRAND: You'd soon get hold of some mate--or maybe even a captain--
20 D REGINA: I won't marry any one of that sort. Sailors have no savoir vivre .
21 D ENGSTRAND: What's that they haven't got?
22 D REGINA: I know what sailors are, I tell you. They're not the sort of people to marry.
23 D ENGSTRAND: Then never mind about marrying them. You can make it pay all the same.
24 A ¶ More confidentially.
25 D ENGSTRAND: He--the Englishman--the man with the yacht--he came down with three hundred dollars, he did; and she wasn't a bit handsomer than you.
26 A ¶ Making for him.
27 D REGINA: Out you go!
28 A ¶ Falling back.
29 D ENGSTRAND: Come, come! You're not going to hit me, I hope.
30 D REGINA: Yes, if you begin talking about mother I shall hit you. Get away with you, I say!
31 A ¶ Drives him back towards the garden door.
32 D REGINA: And don't slam the doors. Young Mr. Alving--
33 D ENGSTRAND: He's asleep; I know. You're mightily taken up about young Mr. Alving--
34 A ¶ More softly.
35 D ENGSTRAND: Oho! you don't mean to say it's him as--?
36 D REGINA: Be off this minute! You're crazy, I tell you! No, not that way. There comes Pastor Manders. Down the kitchen stairs with you.
37 A ¶ Towards the right.
38 D ENGSTRAND: Yes, yes, I'm going. But just you talk to him as is coming there. He's the man to tell you what a child owes its father. For I am your father all the same, you know. I can prove it from the church register.
39 A ¶ He goes out through the second door to the right, which REGINA has opened, and closes again after him.
40 A REGINA glances hastily at herself in the mirror, dusts herself with her pocket handkerchief; and settles her necktie; then she busies herself with the flowers.
41 A ¶ PASTOR MANDERS, wearing an overcoat, carrying an umbrella, and with a small travelling-bag on a strap over his shoulder, comes through the garden door into the conservatory.
42 D MANDERS: Good-morning, Miss Engstrand.
43 A ¶ Turning round, surprised and pleased.
44 D REGINA: No, really! Good morning, Pastor Manders. Is the steamer in already?
45 D MANDERS: It is just in.
46 A ¶ Enters the sitting-room.

### SCENE pt_ghosts_21 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OSWALD, MRS. ALVING, REGINA
1 A ¶ After a while, looks up and remains resting upon his elbow.
2 D OSWALD: If it had only been something inherited--something one wasn't responsible for! But this! To have thrown away so shamefully, thoughtlessly, recklessly, one's own happiness, one's own health, everything in the world--one's future, one's very life--!
3 D MRS. ALVING: No, no, my dear, darling boy; this is impossible!
4 A ¶ Bends over him.
5 D MRS. ALVING: Things are not so desperate as you think.
6 D OSWALD: Oh, you don't know--
7 A ¶ Springs up.
8 D OSWALD: And then, mother, to cause you all this sorrow! Many a time I have almost wished and hoped that at bottom you didn't care so very much about me.
9 D MRS. ALVING: I, Oswald? My only boy! You are all I have in the world! The only thing I care about!
10 A ¶ Seizes both her hands and kisses them.
11 D OSWALD: Yes, yes, I see it. When I'm at home, I see it, of course; and that's almost the hardest part for me.--But now you know the whole story and now we won't talk any more about it to-day. I daren't think of it for long together.
12 A ¶ Goes up the room.
13 D OSWALD: Get me something to drink, mother.
14 D MRS. ALVING: To drink? What do you want to drink now?
15 D OSWALD: Oh, anything you like. You have some cold punch in the house.
16 D MRS. ALVING: Yes, but my dear Oswald--
17 D OSWALD: Don't refuse me, mother. Do be kind, now! I must have something to wash down all these gnawing thoughts.
18 A ¶ Goes into the conservatory.
19 D OSWALD: And then--it's so dark here!
20 A ¶ MRS. ALVING pulls a bell-rope on the right.
21 D OSWALD: And this ceaseless rain! It may go on week after week, for months together. Never to get a glimpse of the sun! I can't recollect ever having seen the sun shine all the times I've been at home.
22 D MRS. ALVING: Oswald--you are thinking of going away from me.
23 D OSWALD: H'm--
24 A ¶ Drawing a heavy breath.
25 D OSWALD: --I'm not thinking of anything. I cannot think of anything!
26 A ¶ In a low voice.
27 D OSWALD: I let thinking alone.
* 28 A ¶ From the dining-room.
29 D REGINA: Did you ring, ma'am?
30 D MRS. ALVING: Yes; let us have the lamp in.
31 D REGINA: Yes, ma'am. It's ready lighted.
32 A ¶ Goes out.
33 A ¶ Goes across to OSWALD.
34 D MRS. ALVING: Oswald, be frank with me.
35 D OSWALD: Well, so I am, mother.
36 A ¶ Goes to the table.
37 D OSWALD: I think I have told you enough.
38 A ¶ REGINA brings the lamp and sets it upon the table.
39 D MRS. ALVING: Regina, you may bring us a small bottle of champagne.
40 D REGINA: Very well, ma'am.
41 A ¶ Goes out.
42 A ¶ Puts his arm round MRS. ALVING's neck.
43 D OSWALD: That's just what I wanted. I knew mother wouldn't let her boy go thirsty.
44 D MRS. ALVING: My own, poor, darling Oswald; how could I deny you anything now?
45 A ¶ Eagerly.

### SCENE pt_ghosts_22 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OSWALD, MRS. ALVING, REGINA
1 D OSWALD: Is that true, mother? Do you mean it?
2 D MRS. ALVING: How? What?
3 D OSWALD: That you couldn't deny me anything.
4 D MRS. ALVING: My dear Oswald--
5 D OSWALD: Hush!
6 A ¶ Brings a tray with a half-bottle of champagne and two glasses, which she sets on the table.
7 D REGINA: Shall I open it?
8 D OSWALD: No, thanks. I will do it myself.
9 A ¶ REGINA goes out again.
10 A ¶ Sits down by the table.
11 D MRS. ALVING: What was it you meant--that I mustn't deny you?
12 A ¶ Busy opening the bottle.
13 D OSWALD: First let us have a glass--or two.
14 A ¶ The cork pops; he pours wine into one glass, and is about to pour it into the other.
15 A ¶ Holding her hand over it.
16 D MRS. ALVING: Thanks; not for me.
17 D OSWALD: Oh! won't you? Then I will!
18 A ¶ He empties the glass, fills, and empties it again; then he sits down by the table.
19 A ¶ In expectancy.
20 D MRS. ALVING: Well?
21 A ¶ Without looking at her.
22 D OSWALD: Tell me--I thought you and Pastor Manders seemed so odd--so quiet--at dinner to-day.
23 D MRS. ALVING: Did you notice it?
24 D OSWALD: Yes. H'm--
* 25 A ¶ After a short silence.
26 D OSWALD: Tell me: what do you think of Regina?
27 D MRS. ALVING: What do I think?
28 D OSWALD: Yes; isn't she splendid?
29 D MRS. ALVING: My dear Oswald, you don't know her as I do--
30 D OSWALD: Well?
31 D MRS. ALVING: Regina, unfortunately, was allowed to stay at home too long. I ought to have taken her earlier into my house.
32 D OSWALD: Yes, but isn't she splendid to look at, mother?
33 A ¶ He fills his glass.
34 D MRS. ALVING: Regina has many serious faults--
35 D OSWALD: Oh, what does that matter?
36 A ¶ He drinks again.
37 D MRS. ALVING: But I am fond of her, nevertheless, and I am responsible for her. I wouldn't for all the world have any harm happen to her.
38 A ¶ Springs up.
39 D OSWALD: Mother, Regina is my only salvation!
40 A ¶ Rising.
41 D MRS. ALVING: What do you mean by that?
42 D OSWALD: I cannot go on bearing all this anguish of soul alone.
43 D MRS. ALVING: Have you not your mother to share it with you?
44 D OSWALD: Yes; that's what I thought; and so I came home to you. But that will not do. I see it won't do. I cannot endure my life here.
45 D MRS. ALVING: Oswald!

### SCENE pt_ghosts_25 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): MANDERS, REGINA, OSWALD, MRS. ALVING
1 D MANDERS: We must stand by Engstrand and his Sailors' Home. Regina must go to him and help him--
2 D REGINA: No thank you, sir.
3 A ¶ Noticing her for the first time.
4 D MANDERS: What--? You here? And with a glass in your hand!
5 A ¶ Hastily putting the glass down.
6 D REGINA: Pardon!
7 D OSWALD: Regina is going with me, Mr. Manders.
8 D MANDERS: Going! With you!
9 D OSWALD: Yes; as my wife--if she wishes it.
10 D MANDERS: But, merciful God--!
11 D REGINA: I can't help it, sir.
12 D OSWALD: Or she'll stay here, if I stay.
13 A ¶ Involuntarily.
14 D REGINA: Here!
15 D MANDERS: I am thunderstruck at your conduct, Mrs. Alving.
16 D MRS. ALVING: They will do neither one thing nor the other; for now I can speak out plainly.
17 D MANDERS: You surely will not do that! No, no, no!
18 D MRS. ALVING: Yes, I can speak and I will. And no ideals shall suffer after all.
19 D OSWALD: Mother--what is it you are hiding from me?
20 A ¶ Listening.
21 D REGINA: Oh, ma'am, listen! Don't you hear shouts outside.
22 A ¶ She goes into the conservatory and looks out.
23 A ¶ At the window on the left.
24 D OSWALD: What's going on? Where does that light come from?
25 A ¶ Cries out.
26 D REGINA: The Orphanage is on fire!
27 A ¶ Rushing to the window.
28 D MRS. ALVING: On fire!
29 D MANDERS: On fire! Impossible! I've just come from there.
30 D OSWALD: Where's my hat? Oh, never mind it--Father's Orphanage--!
31 A ¶ He rushes out through the garden door.
32 D MRS. ALVING: My shawl, Regina! The whole place is in a blaze!
33 D MANDERS: Terrible! Mrs. Alving, it is a judgment upon this abode of lawlessness.
34 D MRS. ALVING: Yes, of course. Come, Regina.
35 A ¶ She and REGINA hasten out through the hall.
36 A ¶ Clasps his hands together.
37 D MANDERS: And we left it uninsured!
38 A ¶ He goes out the same way.
* 39 A ¶ The room as before.
* 40 A All the doors stand open.
* 41 A The lamp is still burning on the table.
* 42 A It is dark out of doors; there is only a faint glow from the conflagration in the background to the left.
43 A ¶ MRS. ALVING, with a shawl over her head, stands in the conservatory, looking out.
44 A REGINA, also with a shawl on, stands a little behind her.
45 D MRS. ALVING: The whole thing burnt!--burnt to the ground!
46 D REGINA: The basement is still burning.
47 D MRS. ALVING: How is it Oswald doesn't come home? There's nothing to be saved.
48 D REGINA: Should you like me to take down his hat to him?
49 D MRS. ALVING: Has he not even got his hat on?

### SCENE pt_ghosts_29 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OSWALD, MRS. ALVING, REGINA
1 A ¶ Impatiently.
2 D OSWALD: Oh, do shut all the doors! This killing dread--
3 D MRS. ALVING: Close the doors, Regina.
4 A ¶ REGINA shuts them and remains standing by the hall door.
5 A MRS. ALVING takes her shawl off: REGINA does the same.
6 A MRS. ALVING draws a chair across to OSWALD'S, and sits by him.
7 D MRS. ALVING: There now! I am going to sit beside you--
8 D OSWALD: Yes, do. And Regina shall stay here too. Regina shall be with me always. You will come to the rescue, Regina, won't you?
9 D REGINA: I don't understand--
10 D MRS. ALVING: To the rescue?
11 D OSWALD: Yes--when the need comes.
12 D MRS. ALVING: Oswald, have you not your mother to come to the rescue?
13 D OSWALD: You?
14 A ¶ Smiles.
15 D OSWALD: No, mother; that rescue you will never bring me.
16 A ¶ Laughs sadly.
17 D OSWALD: You! ha ha!
18 A ¶ Looks earnestly at her.
19 D OSWALD: Though, after all, who ought to do it if not you?
20 A ¶ Impetuously.
21 D OSWALD: Why can't you say "thou" to me, Regina?
* 22 A ¶ Note: "Sige du" = Fr. tutoyer.
23 D OSWALD: Why don't you call me "Oswald"?
24 A ¶ Softly.
25 D REGINA: I don't think Mrs. Alving would like it.
26 D MRS. ALVING: You shall have leave to, presently. And meanwhile sit over here beside us.
27 A ¶ REGINA seats herself demurely and hesitatingly at the other side of the table.
28 D MRS. ALVING: And now, my poor suffering boy, I am going to take the burden off your mind--
29 D OSWALD: You, mother?
30 D MRS. ALVING: --all the gnawing remorse and self-reproach you speak of.
31 D OSWALD: And you think you can do that?
32 D MRS. ALVING: Yes, now I can, Oswald. A little while ago you spoke of the joy of life; and at that word a new light burst for me over my life and everything connected with it.
33 A ¶ Shakes his head.
34 D OSWALD: I don't understand you.
35 D MRS. ALVING: You ought to have known your father when he was a young lieutenant. He was brimming over with the joy of life!
36 D OSWALD: Yes, I know he was.
37 D MRS. ALVING: It was like a breezy day only to look at him. And what exuberant strength and vitality there was in him!
38 D OSWALD: Well--?
39 D MRS. ALVING: Well then, child of joy as he was--for he was like a child in those days--he had to live at home here in a half-grown town, which had no joys to offer him--only dissipations. He had no object in life--only an official position. He had no work into which he could throw himself heart and soul; he had only business. He had not a single comrade that could realise what the joy of life meant--only loungers and boon-companions--
40 D OSWALD: Mother--!
41 D MRS. ALVING: So the inevitable happened.
42 D OSWALD: The inevitable?
43 D MRS. ALVING: You told me yourself, this evening, what would become of you if you stayed at home.
44 D OSWALD: Do you mean to say that father--?
45 D MRS. ALVING: Your poor father found no outlet for the overpowering joy of life that was in him. And I brought no brightness into his home.
46 D OSWALD: Not even you?
47 D MRS. ALVING: They had taught me a great deal about duties and so forth, which I went on obstinately believing in. Everything was marked out into duties--into my duties, and his duties, and--I am afraid I made his home intolerable for your poor father, Oswald.

### SCENE pt_ghosts_3 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): PASTOR MANDERS, REGINA
1 D MANDERS: Terrible weather we have been having lately.
2 A ¶ Follows him.
3 D REGINA: It's such blessed weather for the country, sir.
4 D MANDERS: No doubt; you are quite right. We townspeople give too little thought to that.
5 A ¶ He begins to take off his overcoat.
6 D REGINA: Oh, mayn't I help you?--There! Why, how wet it is? I'll just hang it up in the hall. And your umbrella, too--I'll open it and let it dry.
7 A ¶ She goes out with the things through the second door on the right.
8 A PASTOR MANDERS takes off his travelling bag and lays it and his hat on a chair.
9 A Meanwhile REGINA comes in again.
10 D MANDERS: Ah, it's a comfort to get safe under cover. I hope everything is going on well here?
11 D REGINA: Yes, thank you, sir.
12 D MANDERS: You have your hands full, I suppose, in preparation for to-morrow?
13 D REGINA: Yes, there's plenty to do, of course.
14 D MANDERS: And Mrs. Alving is at home, I trust?
15 D REGINA: Oh dear, yes. She's just upstairs, looking after the young master's chocolate.
16 D MANDERS: Yes, by-the-bye--I heard down at the pier that Oswald had arrived.
17 D REGINA: Yes, he came the day before yesterday. We didn't expect him before to-day.
18 D MANDERS: Quite strong and well, I hope?
19 D REGINA: Yes, thank you, quite; but dreadfully tired with the journey. He has made one rush right through from Paris--the whole way in one train, I believe. He's sleeping a little now, I think; so perhaps we'd better talk a little quietly.
20 D MANDERS: Sh!--as quietly as you please.
21 A ¶ Arranging an arm-chair beside the table.
22 D REGINA: Now, do sit down, Pastor Manders, and make yourself comfortable.
23 A ¶ He sits down; she places a footstool under his feet.
24 D REGINA: There! Are you comfortable now, sir?
25 D MANDERS: Thanks, thanks, extremely so.
26 A ¶ Looks at her.
27 D MANDERS: Do you know, Miss Engstrand, I positively believe you have grown since I last saw you.
28 D REGINA: Do you think so, Sir? Mrs. Alving says I've filled out too.
29 D MANDERS: Filled out? Well, perhaps a little; just enough.
* 30 A ¶ Short pause.
31 D REGINA: Shall I tell Mrs. Alving you are here?
32 D MANDERS: Thanks, thanks, there is no hurry, my dear child.--By-the-bye, Regina, my good girl, tell me: how is your father getting on out here?
33 D REGINA: Oh, thank you, sir, he's getting on well enough.
34 D MANDERS: He called upon me last time he was in town.
35 D REGINA: Did he, indeed? He's always so glad of a chance of talking to you, sir.
36 D MANDERS: And you often look in upon him at his work, I daresay?
37 D REGINA: I? Oh, of course, when I have time, I--
38 D MANDERS: Your father is not a man of strong character, Miss Engstrand. He stands terribly in need of a guiding hand.
39 D REGINA: Oh, yes; I daresay he does.
40 D MANDERS: He requires some one near him whom he cares for, and whose judgment he respects. He frankly admitted as much when he last came to see me.
41 D REGINA: Yes, he mentioned something of the sort to me. But I don't know whether Mrs. Alving can spare me; especially now that we've got the new Orphanage to attend to. And then I should be so sorry to leave Mrs. Alving; she has always been so kind to me.
42 D MANDERS: But a daughter's duty, my good girl--Of course, we should first have to get your mistress's consent.
43 D REGINA: But I don't know whether it would be quite proper for me, at my age, to keep house for a single man.
44 D MANDERS: What! My dear Miss Engstrand! When the man is your own father!
45 D REGINA: Yes, that may be; but all the same--Now, if it were in a thoroughly nice house, and with a real gentleman--
46 D MANDERS: Why, my dear Regina--
47 D REGINA: --one I could love and respect, and be a daughter to--

### SCENE pt_ghosts_34 | INT. GHOSTS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OSWALD, MRS. ALVING
1 D OSWALD: Do not leave me! Where are you going?
2 A ¶ In the hall.
3 D MRS. ALVING: To fetch the doctor, Oswald! Let me pass!
4 A ¶ Also outside.
5 D OSWALD: You shall not go out. And no one shall come in.
* 6 A ¶ The locking of a door is heard.
7 A ¶ Comes in again.
8 D MRS. ALVING: Oswald! Oswald--my child!
9 A ¶ Follows her.
10 D OSWALD: Have you a mother's heart for me--and yet can see me suffer from this unutterable dread?
11 A ¶ After a moment's silence, commands herself, and says:.
12 D MRS. ALVING: Here is my hand upon it.
13 D OSWALD: Will you--?
14 D MRS. ALVING: If it should ever be necessary. But it will never be necessary. No, no; it is impossible.
15 D OSWALD: Well, let us hope so. And let us live together as long as we can. Thank you, mother.
16 A ¶ He seats himself in the arm-chair which MRS. ALVING has moved to the sofa.
* 17 A Day is breaking.
* 18 A The lamp is still burning on the table.
19 A ¶ Drawing near cautiously.
20 D MRS. ALVING: Do you feel calm now?
21 D OSWALD: Yes.
22 A ¶ Bending over him.
23 D MRS. ALVING: It has been a dreadful fancy of yours, Oswald--nothing but a fancy. All this excitement has been too much for you. But now you shall have a long rest; at home with your mother, my own blessëd boy. Everything you point to you shall have, just as when you were a little child.--There now. The crisis is over. You see how easily it passed! Oh, I was sure it would.--And do you see, Oswald, what a lovely day we are going to have? Brilliant sunshine! Now you can really see your home.
24 A ¶ She goes to the table and puts out the lamp.
* 25 A Sunrise.
* 26 A The glacier and the snow-peaks in the background glow in the morning light.
27 A ¶ Sits in the arm-chair with his back towards the landscape, without moving.
28 A Suddenly he says:.
29 D OSWALD: Mother, give me the sun.
30 A ¶ By the table, starts and looks at him.
31 D MRS. ALVING: What do you say?
32 A ¶ Repeats, in a dull, toneless voice.
33 D OSWALD: The sun. The sun.
34 A ¶ Goes to him.
35 D MRS. ALVING: Oswald, what is the matter with you?
36 A ¶ Seems to shrink together to the chair; all his muscles relax; his face is expressionless, his eyes have a glassy stare.
37 A ¶ Quivering with terror.
38 D MRS. ALVING: What is this?
39 A ¶ Shrieks.
40 D MRS. ALVING: Oswald! what is the matter with you?
41 A ¶ Falls on her knees beside him and shakes him.
42 D MRS. ALVING: Oswald! Oswald! look at me! Don't you know me?
43 A ¶ Tonelessly as before.
44 D OSWALD: The sun.--The sun.
45 A ¶ Springs up in despair, entwines her hands in her hair and shrieks.
46 D MRS. ALVING: I cannot bear it!
47 A ¶ Whispers, as though petrified.
48 D MRS. ALVING: ; I cannot bear it! Never!
49 A ¶ Suddenly.
50 D MRS. ALVING: Where has he got them?
