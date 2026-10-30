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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0001.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

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
