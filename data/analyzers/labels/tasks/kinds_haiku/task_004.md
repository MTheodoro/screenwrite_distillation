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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0104.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE pt_pygmalion_31 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ HIGGINS [sunnily] Oh, don’t bother.
2 A She’ll buy em all right enough.
3 A Good-bye.
4 A ¶ They kiss.
5 A Mrs. Higgins runs out.
6 A Higgins, left alone, rattles his cash in his pocket; chuckles; and disports himself in a highly self-satisfied manner.
* 7 A ¶ ***********************
* 8 A ¶ The rest of the story need not be shown in action, and indeed, would hardly need telling if our imaginations were not so enfeebled by their lazy dependence on the ready-makes and reach-me-downs of the ragshop in which Romance keeps its stock of “happy endings” to misfit all stories.
9 A Now, the history of Eliza Doolittle, though called a romance because of the transfiguration it records seems exceedingly improbable, is common enough.
* 10 A Such transfigurations have been achieved by hundreds of resolutely ambitious young women since Nell Gwynne set them the example by playing queens and fascinating kings in the theatre in which she began by selling oranges.
11 A Nevertheless, people in all directions have assumed, for no other reason than that she became the heroine of a romance, that she must have married the hero of it.
* 12 A This is unbearable, not only because her little drama, if acted on such a thoughtless assumption, must be spoiled, but because the true sequel is patent to anyone with a sense of human nature in general, and of feminine instinct in particular.
13 A ¶ Eliza, in telling Higgins she would not marry him if he asked her, was not coquetting: she was announcing a well-considered decision.
14 A When a bachelor interests, and dominates, and teaches, and becomes important to a spinster, as Higgins with Eliza, she always, if she has character enough to be capable of it, considers very seriously indeed whether she will play for becoming that bachelor’s wife, especially if he is so little interested in marriage that a determined and devoted woman might capture him if she set herself resolutely to do it.
15 A Her decision will depend a good deal on whether she is really free to choose; and that, again, will depend on her age and income.
16 A If she is at the end of her youth, and has no security for her livelihood, she will marry him because she must marry anybody who will provide for her.
17 A But at Eliza’s age a good-looking girl does not feel that pressure; she feels free to pick and choose.
18 A She is therefore guided by her instinct in the matter.
19 A Eliza’s instinct tells her not to marry Higgins.
20 A It does not tell her to give him up.
21 A It is not in the slightest doubt as to his remaining one of the strongest personal interests in her life.
22 A It would be very sorely strained if there was another woman likely to supplant her with him.
23 A But as she feels sure of him on that last point, she has no doubt at all as to her course, and would not have any, even if the difference of twenty years in age, which seems so great to youth, did not exist between them.
* 24 A ¶ As our own instincts are not appealed to by her conclusion, let us see whether we cannot discover some reason in it.
25 A When Higgins excused his indifference to young women on the ground that they had an irresistible rival in his mother, he gave the clue to his inveterate old-bachelordom.
* 26 A The case is uncommon only to the extent that remarkable mothers are uncommon.
27 A If an imaginative boy has a sufficiently rich mother who has intelligence, personal grace, dignity of character without harshness, and a cultivated sense of the best art of her time to enable her to make her house beautiful, she sets a standard for him against which very few women can struggle, besides effecting for him a disengagement of his affections, his sense of beauty, and his idealism from his specifically sexual impulses.
28 A This makes him a standing puzzle to the huge number of uncultivated people who have been brought up in tasteless homes by commonplace or disagreeable parents, and to whom, consequently, literature, painting, sculpture, music, and affectionate personal relations come as modes of sex if they come at all.
29 A The word passion means nothing else to them; and that Higgins could have a passion for phonetics and idealize his mother instead of Eliza, would seem to them absurd and unnatural.
* 30 A Nevertheless, when we look round and see that hardly anyone is too ugly or disagreeable to find a wife or a husband if he or she wants one, whilst many old maids and bachelors are above the average in quality and culture, we cannot help suspecting that the disentanglement of sex from the associations with which it is so commonly confused, a disentanglement which persons of genius achieve by sheer intellectual analysis, is sometimes produced or aided by parental fascination.
31 A ¶ Now, though Eliza was incapable of thus explaining to herself Higgins’s formidable powers of resistance to the charm that prostrated Freddy at the first glance, she was instinctively aware that she could never obtain a complete grip of him, or come between him and his mother (the first necessity of the married woman).
32 A To put it shortly, she knew that for some mysterious reason he had not the makings of a married man in him, according to her conception of a husband as one to whom she would be his nearest and fondest and warmest interest.
33 A Even had there been no mother-rival, she would still have refused to accept an interest in herself that was secondary to philosophic interests.
* 34 A Had Mrs. Higgins died, there would still have been Milton and the Universal Alphabet.
* 35 A Landor’s remark that to those who have the greatest power of loving, love is a secondary affair, would not have recommended Landor to Eliza.
36 A Put that along with her resentment of Higgins’s domineering superiority, and her mistrust of his coaxing cleverness in getting round her and evading her wrath when he had gone too far with his impetuous bullying, and you will see that Eliza’s instinct had good grounds for warning her not to marry her Pygmalion.
37 A ¶ And now, whom did Eliza marry?
38 A For if Higgins was a predestinate old bachelor, she was most certainly not a predestinate old maid.
* 39 A Well, that can be told very shortly to those who have not guessed it from the indications she has herself given them.
40 A ¶ Almost immediately after Eliza is stung into proclaiming her considered determination not to marry Higgins, she mentions the fact that young Mr. Frederick Eynsford Hill is pouring out his love for her daily through the post.
41 A Now Freddy is young, practically twenty years younger than Higgins: he is a gentleman (or, as Eliza would qualify him, a toff), and speaks like one; he is nicely dressed, is treated by the Colonel as an equal, loves her unaffectedly, and is not her master, nor ever likely to dominate her in spite of his advantage of social standing.
42 A Eliza has no use for the foolish romantic tradition that all women love to be mastered, if not actually bullied and beaten.
* 43 A “When you go to women,” says Nietzsche, “take your whip with you.”
* 44 A Sensible despots have never confined that precaution to women: they have taken their whips with them when they have dealt with men, and been slavishly idealized by the men over whom they have flourished the whip much more than by women.
* 45 A No doubt there are slavish women as well as slavish men; and women, like men, admire those that are stronger than themselves.
* 46 A But to admire a strong person and to live under that strong person’s thumb are two different things.
* 47 A The weak may not be admired and hero-worshipped; but they are by no means disliked or shunned; and they never seem to have the least difficulty in marrying people who are too good for them.
* 48 A They may fail in emergencies; but life is not one long emergency: it is mostly a string of situations for which no exceptional strength is needed, and with which even rather weak people can cope if they have a stronger partner to help them out.
* 49 A Accordingly, it is a truth everywhere in evidence that strong people, masculine or feminine, not only do not marry stronger people, but do not show any preference for them in selecting their friends.
* 50 A When a lion meets another with a louder roar “the first lion thinks the last a bore.”
* 51 A The man or woman who feels strong enough for two, seeks for every other quality in a partner than strength.
* 52 A ¶ The converse is also true.
* 53 A Weak people want to marry strong people who do not frighten them too much; and this often leads them to make the mistake we describe metaphorically as “biting off more than they can chew.”
* 54 A They want too much for too little; and when the bargain is unreasonable beyond all bearing, the union becomes impossible: it ends in the weaker party being either discarded or borne as a cross, which is worse.
* 55 A People who are not only weak, but silly or obtuse as well, are often in these difficulties.
56 A ¶ This being the state of human affairs, what is Eliza fairly sure to do when she is placed between Freddy and Higgins?
57 A Will she look forward to a lifetime of fetching Higgins’s slippers or to a lifetime of Freddy fetching hers?
* 58 A There can be no doubt about the answer.
59 A Unless Freddy is biologically repulsive to her, and Higgins biologically attractive to a degree that overwhelms all her other instincts, she will, if she marries either of them, marry Freddy.
60 A ¶ And that is just what Eliza did.
* 61 A ¶ Complications ensued; but they were economic, not romantic.
62 A Freddy had no money and no occupation.
63 A His mother’s jointure, a last relic of the opulence of Largelady Park, had enabled her to struggle along in Earlscourt with an air of gentility, but not to procure any serious secondary education for her children, much less give the boy a profession.
64 A A clerkship at thirty shillings a week was beneath Freddy’s dignity, and extremely distasteful to him besides.
65 A His prospects consisted of a hope that if he kept up appearances somebody would do something for him.
66 A The something appeared vaguely to his imagination as a private secretaryship or a sinecure of some sort.
67 A To his mother it perhaps appeared as a marriage to some lady of means who could not resist her boy’s niceness.
68 A Fancy her feelings when he married a flower girl who had become declassee under extraordinary circumstances which were now notorious!
69 A ¶ It is true that Eliza’s situation did not seem wholly ineligible.
70 A Her father, though formerly a dustman, and now fantastically disclassed, had become extremely popular in the smartest society by a social talent which triumphed over every prejudice and every disadvantage.
71 A Rejected by the middle class, which he loathed, he had shot up at once into the highest circles by his wit, his dustmanship (which he carried like a banner), and his Nietzschean transcendence of good and evil.
72 A At intimate ducal dinners he sat on the right hand of the Duchess; and in country houses he smoked in the pantry and was made much of by the butler when he was not feeding in the dining-room and being consulted by cabinet ministers.
73 A But he found it almost as hard to do all this on four thousand a year as Mrs. Eynsford Hill to live in Earlscourt on an income so pitiably smaller that I have not the heart to disclose its exact figure.
74 A He absolutely refused to add the last straw to his burden by contributing to Eliza’s support.
75 A ¶ Thus Freddy and Eliza, now Mr. and Mrs. Eynsford Hill, would have spent a penniless honeymoon but for a wedding present of 500 pounds from the Colonel to Eliza.
76 A It lasted a long time because Freddy did not know how to spend money, never having had any to spend, and Eliza, socially trained by a pair of old bachelors, wore her clothes as long as they held together and looked pretty, without the least regard to their being many months out of fashion.
77 A Still, 500 pounds will not last two young people for ever; and they both knew, and Eliza felt as well, that they must shift for themselves in the end.
78 A She could quarter herself on Wimpole Street because it had come to be her home; but she was quite aware that she ought not to quarter Freddy there, and that it would not be good for his character if she did.
79 A ¶ Not that the Wimpole Street bachelors objected.
80 A When she consulted them, Higgins declined to be bothered about her housing problem when that solution was so simple.
81 A Eliza’s desire to have Freddy in the house with her seemed of no more importance than if she had wanted an extra piece of bedroom furniture.
82 A Pleas as to Freddy’s character, and the moral obligation on him to earn his own living, were lost on Higgins.
83 A He denied that Freddy had any character, and declared that if he tried to do any useful work some competent person would have the trouble of undoing it: a procedure involving a net loss to the community, and great unhappiness to Freddy himself, who was obviously intended by Nature for such light work as amusing Eliza, which, Higgins declared, was a much more useful and honorable occupation than working in the city.
84 A When Eliza referred again to her project of teaching phonetics, Higgins abated not a jot of his violent opposition to it.
85 A He said she was not within ten years of being qualified to meddle with his pet subject; and as it was evident that the Colonel agreed with him, she felt she could not go against them in this grave matter, and that she had no right, without Higgins’s consent, to exploit the knowledge he had given her; for his knowledge seemed to her as much his private property as his watch: Eliza was no communist.
86 A Besides, she was superstitiously devoted to them both, more entirely and frankly after her marriage than before it.
87 A ¶ It was the Colonel who finally solved the problem, which had cost him much perplexed cogitation.
88 A He one day asked Eliza, rather shyly, whether she had quite given up her notion of keeping a flower shop.
89 A She replied that she had thought of it, but had put it out of her head, because the Colonel had said, that day at Mrs. Higgins’s, that it would never do.
90 A The Colonel confessed that when he said that, he had not quite recovered from the dazzling impression of the day before.
91 A They broke the matter to Higgins that evening.
92 A The sole comment vouchsafed by him very nearly led to a serious quarrel with Eliza.
93 A It was to the effect that she would have in Freddy an ideal errand boy.
94 A ¶ Freddy himself was next sounded on the subject.
95 A He said he had been thinking of a shop himself; though it had presented itself to his pennilessness as a small place in which Eliza should sell tobacco at one counter whilst he sold newspapers at the opposite one.
96 A But he agreed that it would be extraordinarily jolly to go early every morning with Eliza to Covent Garden and buy flowers on the scene of their first meeting: a sentiment which earned him many kisses from his wife.
97 A He added that he had always been afraid to propose anything of the sort, because Clara would make an awful row about a step that must damage her matrimonial chances, and his mother could not be expected to like it after clinging for so many years to that step of the social ladder on which retail trade is impossible.
* 98 A ¶ This difficulty was removed by an event highly unexpected by Freddy’s mother.
99 A Clara, in the course of her incursions into those artistic circles which were the highest within her reach, discovered that her conversational qualifications were expected to include a grounding in the novels of Mr. H.G. Wells.
100 A She borrowed them in various directions so energetically that she swallowed them all within two months.
* 101 A The result was a conversion of a kind quite common today.
* 102 A A modern Acts of the Apostles would fill fifty whole Bibles if anyone were capable of writing it.
103 A ¶ Poor Clara, who appeared to Higgins and his mother as a disagreeable and ridiculous person, and to her own mother as in some inexplicable way a social failure, had never seen herself in either light; for, though to some extent ridiculed and mimicked in West Kensington like everybody else there, she was accepted as a rational and normal—or shall we say inevitable?—sort of human being.
104 A At worst they called her The Pusher; but to them no more than to herself had it ever occurred that she was pushing the air, and pushing it in a wrong direction.
105 A Still, she was not happy.
106 A She was growing desperate.
107 A Her one asset, the fact that her mother was what the Epsom greengrocer called a carriage lady had no exchange value, apparently.
108 A It had prevented her from getting educated, because the only education she could have afforded was education with the Earlscourt green grocer’s daughter.
109 A It had led her to seek the society of her mother’s class; and that class simply would not have her, because she was much poorer than the greengrocer, and, far from being able to afford a maid, could not afford even a housemaid, and had to scrape along at home with an illiberally treated general servant.
110 A Under such circumstances nothing could give her an air of being a genuine product of Largelady Park.
111 A And yet its tradition made her regard a marriage with anyone within her reach as an unbearable humiliation.
112 A Commercial people and professional people in a small way were odious to her.
113 A She ran after painters and novelists; but she did not charm them; and her bold attempts to pick up and practise artistic and literary talk irritated them.
114 A She was, in short, an utter failure, an ignorant, incompetent, pretentious, unwelcome, penniless, useless little snob; and though she did not admit these disqualifications (for nobody ever faces unpleasant truths of this kind until the possibility of a way out dawns on them) she felt their effects too keenly to be satisfied with her position.
115 A ¶ Clara had a startling eyeopener when, on being suddenly wakened to enthusiasm by a girl of her own age who dazzled her and produced in her a gushing desire to take her for a model, and gain her friendship, she discovered that this exquisite apparition had graduated from the gutter in a few months’ time.
116 A It shook her so violently, that when Mr. H. G. Wells lifted her on the point of his puissant pen, and placed her at the angle of view from which the life she was leading and the society to which she clung appeared in its true relation to real human needs and worthy social structure, he effected a conversion and a conviction of sin comparable to the most sensational feats of General Booth or Gypsy Smith.
117 A Clara’s snobbery went bang.
118 A Life suddenly began to move with her.
119 A Without knowing how or why, she began to make friends and enemies.
120 A Some of the acquaintances to whom she had been a tedious or indifferent or ridiculous affliction, dropped her: others became cordial.
121 A To her amazement she found that some “quite nice” people were saturated with Wells, and that this accessibility to ideas was the secret of their niceness.
122 A People she had thought deeply religious, and had tried to conciliate on that tack with disastrous results, suddenly took an interest in her, and revealed a hostility to conventional religion which she had never conceived possible except among the most desperate characters.
123 A They made her read Galsworthy; and Galsworthy exposed the vanity of Largelady Park and finished her.
124 A It exasperated her to think that the dungeon in which she had languished for so many unhappy years had been unlocked all the time, and that the impulses she had so carefully struggled with and stifled for the sake of keeping well with society, were precisely those by which alone she could have come into any sort of sincere human contact.
125 A In the radiance of these discoveries, and the tumult of their reaction, she made a fool of herself as freely and conspicuously as when she so rashly adopted Eliza’s expletive in Mrs. Higgins’s drawing-room; for the new-born Wellsian had to find her bearings almost as ridiculously as a baby; but nobody hates a baby for its ineptitudes, or thinks the worse of it for trying to eat the matches; and Clara lost no friends by her follies.
126 A They laughed at her to her face this time; and she had to defend herself and fight it out as best she could.
127 A ¶ When Freddy paid a visit to Earlscourt (which he never did when he could possibly help it) to make the desolating announcement that he and his Eliza were thinking of blackening the Largelady scutcheon by opening a shop, he found the little household already convulsed by a prior announcement from Clara that she also was going to work in an old furniture shop in Dover Street, which had been started by a fellow Wellsian.
128 A This appointment Clara owed, after all, to her old social accomplishment of Push.
129 A She had made up her mind that, cost what it might, she would see Mr. Wells in the flesh; and she had achieved her end at a garden party.
130 A She had better luck than so rash an enterprise deserved.
131 A Mr. Wells came up to her expectations.
132 A Age had not withered him, nor could custom stale his infinite variety in half an hour.
133 A His pleasant neatness and compactness, his small hands and feet, his teeming ready brain, his unaffected accessibility, and a certain fine apprehensiveness which stamped him as susceptible from his topmost hair to his tipmost toe, proved irresistible.
134 A Clara talked of nothing else for weeks and weeks afterwards.
135 A And as she happened to talk to the lady of the furniture shop, and that lady also desired above all things to know Mr. Wells and sell pretty things to him, she offered Clara a job on the chance of achieving that end through her.
136 A ¶ And so it came about that Eliza’s luck held, and the expected opposition to the flower shop melted away.
* 137 A The shop is in the arcade of a railway station not very far from the Victoria and Albert Museum; and if you live in that neighborhood you may go there any day and buy a buttonhole from Eliza.
* 138 A ¶ Now here is a last opportunity for romance.
* 139 A Would you not like to be assured that the shop was an immense success, thanks to Eliza’s charms and her early business experience in Covent Garden?
140 A Alas! the truth is the truth: the shop did not pay for a long time, simply because Eliza and her Freddy did not know how to keep it.
141 A True, Eliza had not to begin at the very beginning: she knew the names and prices of the cheaper flowers; and her elation was unbounded when she found that Freddy, like all youths educated at cheap, pretentious, and thoroughly inefficient schools, knew a little Latin.
142 A It was very little, but enough to make him appear to her a Porson or Bentley, and to put him at his ease with botanical nomenclature.
143 A Unfortunately he knew nothing else; and Eliza, though she could count money up to eighteen shillings or so, and had acquired a certain familiarity with the language of Milton from her struggles to qualify herself for winning Higgins’s bet, could not write out a bill without utterly disgracing the establishment.
144 A Freddy’s power of stating in Latin that Balbus built a wall and that Gaul was divided into three parts did not carry with it the slightest knowledge of accounts or business: Colonel Pickering had to explain to him what a cheque book and a bank account meant.
145 A And the pair were by no means easily teachable.
146 A Freddy backed up Eliza in her obstinate refusal to believe that they could save money by engaging a bookkeeper with some knowledge of the business.
147 A How, they argued, could you possibly save money by going to extra expense when you already could not make both ends meet?
148 A But the Colonel, after making the ends meet over and over again, at last gently insisted; and Eliza, humbled to the dust by having to beg from him so often, and stung by the uproarious derision of Higgins, to whom the notion of Freddy succeeding at anything was a joke that never palled, grasped the fact that business, like phonetics, has to be learned.
* 149 A ¶ On the piteous spectacle of the pair spending their evenings in shorthand schools and polytechnic classes, learning bookkeeping and typewriting with incipient junior clerks, male and female, from the elementary schools, let me not dwell.
* 150 A There were even classes at the London School of Economics, and a humble personal appeal to the director of that institution to recommend a course bearing on the flower business.
151 A He, being a humorist, explained to them the method of the celebrated Dickensian essay on Chinese Metaphysics by the gentleman who read an article on China and an article on Metaphysics and combined the information.
152 A He suggested that they should combine the London School with Kew Gardens.
153 A Eliza, to whom the procedure of the Dickensian gentleman seemed perfectly correct (as in fact it was) and not in the least funny (which was only her ignorance) took his advice with entire gravity.
154 A But the effort that cost her the deepest humiliation was a request to Higgins, whose pet artistic fancy, next to Milton’s verse, was calligraphy, and who himself wrote a most beautiful Italian hand, that he would teach her to write.
155 A He declared that she was congenitally incapable of forming a single letter worthy of the least of Milton’s words; but she persisted; and again he suddenly threw himself into the task of teaching her with a combination of stormy intensity, concentrated patience, and occasional bursts of interesting disquisition on the beauty and nobility, the august mission and destiny, of human handwriting.
156 A Eliza ended by acquiring an extremely uncommercial script which was a positive extension of her personal beauty, and spending three times as much on stationery as anyone else because certain qualities and shapes of paper became indispensable to her.
157 A She could not even address an envelope in the usual way because it made the margins all wrong.
158 A ¶ Their commercial school days were a period of disgrace and despair for the young couple.
159 A They seemed to be learning nothing about flower shops.
160 A At last they gave it up as hopeless, and shook the dust of the shorthand schools, and the polytechnics, and the London School of Economics from their feet for ever.
* 161 A Besides, the business was in some mysterious way beginning to take care of itself.
162 A They had somehow forgotten their objections to employing other people.
163 A They came to the conclusion that their own way was the best, and that they had really a remarkable talent for business.
164 A The Colonel, who had been compelled for some years to keep a sufficient sum on current account at his bankers to make up their deficits, found that the provision was unnecessary: the young people were prospering.
* 165 A It is true that there was not quite fair play between them and their competitors in trade.
166 A Their week-ends in the country cost them nothing, and saved them the price of their Sunday dinners; for the motor car was the Colonel’s; and he and Higgins paid the hotel bills.
167 A Mr. F. Hill, florist and greengrocer (they soon discovered that there was money in asparagus; and asparagus led to other vegetables), had an air which stamped the business as classy; and in private life he was still Frederick Eynsford Hill, Esquire.
168 A Not that there was any swank about him: nobody but Eliza knew that he had been christened Frederick Challoner.
169 A Eliza herself swanked like anything.
* 170 A ¶ That is all.
* 171 A That is how it has turned out.
172 A It is astonishing how much Eliza still manages to meddle in the housekeeping at Wimpole Street in spite of the shop and her own family.
173 A And it is notable that though she never nags her husband, and frankly loves the Colonel as if she were his favorite daughter, she has never got out of the habit of nagging Higgins that was established on the fatal night when she won his bet for him.
174 A She snaps his head off on the faintest provocation, or on none.
175 A He no longer dares to tease her by assuming an abysmal inferiority of Freddy’s mind to his own.
176 A He storms and bullies and derides; but she stands up to him so ruthlessly that the Colonel has to ask her from time to time to be kinder to Higgins; and it is the only request of his that brings a mulish expression into her face.
* 177 A Nothing but some emergency or calamity great enough to break down all likes and dislikes, and throw them both back on their common humanity—and may they be spared any such trial!—will ever alter this.
178 A She knows that Higgins does not need her, just as her father did not need her.
179 A The very scrupulousness with which he told her that day that he had become used to having her there, and dependent on her for all sorts of little services, and that he should miss her if she went away (it would never have occurred to Freddy or the Colonel to say anything of the sort) deepens her inner certainty that she is “no more to him than them slippers”, yet she has a sense, too, that his indifference is deeper than the infatuation of commoner souls.
180 A She is immensely interested in him.
181 A She has even secret mischievous moments in which she wishes she could get him alone, on a desert island, away from all ties and with nobody else in the world to consider, and just drag him off his pedestal and see him making love like any common man.
* 182 A We all have private imaginations of that sort.
183 A But when it comes to business, to the life that she really leads as distinguished from the life of dreams and fancies, she likes Freddy and she likes the Colonel; and she does not like Higgins and Mr. Doolittle.
* 184 A Galatea never does quite like Pygmalion: his relation to her is too godlike to be altogether agreeable.
