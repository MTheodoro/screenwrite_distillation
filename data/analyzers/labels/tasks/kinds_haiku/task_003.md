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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0103.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_hedda_0 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MISS JULIANA TESMAN, BERTA
* 1 A ¶ A spacious, handsome, and tastefully furnished drawing room, decorated in dark colours.
* 2 A In the back, a wide doorway with curtains drawn back, leading into a smaller room decorated in the same style as the drawing-room.
* 3 A In the right-hand wall of the front room, a folding door leading out to the hall.
* 4 A In the opposite wall, on the left, a glass door, also with curtains drawn back.
* 5 A Through the panes can be seen part of a verandah outside, and trees covered with autumn foliage.
* 6 A An oval table, with a cover on it, and surrounded by chairs, stands well forward.
* 7 A In front, by the wall on the right, a wide stove of dark porcelain, a high-backed arm-chair, a cushioned foot-rest, and two footstools.
* 8 A A settee, with a small round table in front of it, fills the upper right-hand corner.
* 9 A In front, on the left, a little way from the wall, a sofa.
* 10 A Further back than the glass door, a piano.
* 11 A On either side of the doorway at the back a whatnot with terra-cotta and majolica ornaments.-- Against the back wall of the inner room a sofa, with a table, and one or two chairs.
* 12 A Over the sofa hangs the portrait of a handsome elderly man in a General's uniform.
* 13 A Over the table a hanging lamp, with an opal glass shade.--A number of bouquets are arranged about the drawing-room, in vases and glasses.
* 14 A Others lie upon the tables.
* 15 A The floors in both rooms are covered with thick carpets.--Morning light.
* 16 A The sun shines in through the glass door.
17 A ¶ MISS JULIANA TESMAN, with her bonnet on a carrying a parasol, comes in from the hall, followed by BERTA, who carries a bouquet wrapped in paper.
18 A MISS TESMAN is a comely and pleasant- looking lady of about sixty-five.
19 A She is nicely but simply dressed in a grey walking-costume.
20 A BERTA is a middle-aged woman of plain and rather countrified appearance.
21 A ¶ [Stops close to the door, listens, and says softly:] Upon my word, I don't believe they are stirring yet!
22 A ¶ [Also softly.] I told you so, Miss.
23 A Remember how late the steamboat got in last night.
24 A And then, when they got home!--good Lord, what a lot the young mistress had to unpack before she could get to bed.
25 A ¶ Well well--let them have their sleep out.
26 A But let us see that they get a good breath of the fresh morning air when they do appear.
27 A ¶ [She goes to the glass door and throws it open.
28 A ¶ [Beside the table, at a loss what to do with the bouquet in her hand.] I declare there isn't a bit of room left.
29 A I think I'll put it down here, Miss. [She places it on the piano.
30 A ¶ So you've got a new mistress now, my dear Berta.
31 A Heaven knows it was a wrench to me to part with you.
32 A ¶ [On the point of weeping.] And do you think it wasn't hard for me, too, Miss?
33 A After all the blessed years I've been with you and Miss Rina.(1)
34 A ¶ We must make the best of it, Berta.
35 A There was nothing else to be done.
36 A George can't do without you, you see-he absolutely can't.
37 A He has had you to look after him ever since he was a little boy.
38 A ¶ Ah but, Miss Julia, I can't help thinking of Miss Rina lying helpless at home there, poor thing.
39 A And with only that new girl too!
40 A She'll never learn to take proper care of an invalid.
41 A ¶ Oh, I shall manage to train her.
42 A And of course, you know, I shall take most of it upon myself.
43 A You needn't be uneasy about my poor sister, my dear Berta.
44 A ¶ Well, but there's another thing, Miss.
45 A I'm so mortally afraid I shan't be able to suit the young mistress.
46 A ¶ Oh well--just at first there may be one or two things--
47 A ¶ Most like she'll be terrible grand in her ways.
48 A ¶ Well, you can't wonder at that--General Gabler's daughter!
49 A Think of the sort of life she was accustomed to in her father's time.
50 A Don't you remember how we used to see her riding down the road along with the General?
51 A In that long black habit--and with feathers in her hat?
52 A ¶ Yes, indeed--I remember well enough!--But, good Lord, I should never have dreamt in those days that she and Master George would make a match of it.
53 A ¶ Nor I.--But by-the-bye, Berta--while I think of it: in future you mustn't say Master George.
54 A You must say Dr. Tesman.
55 A ¶ Yes, the young mistress spoke of that too--last night--the moment they set foot in the house.
56 A Is it true then, Miss?
57 A ¶ Yes, indeed it is.
58 A Only think, Berta--some foreign university has made him a doctor--while he has been abroad, you understand.
59 A I hadn't heard a word about it, until he told me himself upon the pier.
60 A ¶ Well well, he's clever enough for anything, he is.
61 A But I didn't think he'd have gone in for doctoring people.
62 A ¶ No no, it's not that sort of doctor he is. [Nods significantly.] But let me tell you, we may have to call him something still grander before long.
63 A ¶ You don't say so!
64 A What can that be, Miss?
65 A ¶ [Smiling.] H'm--wouldn't you like to know! [With emotion.] Ah, dear dear--if my poor brother could only look up from his grave now, and see what his little boy has grown into! [Looks around.] But bless me, Berta--why have you done this?
66 A Taken the chintz covers off all the furniture.
67 A ¶ The mistress told me to.
68 A She can't abide covers on the chairs, she says.
69 A ¶ Are they going to make this their everyday sitting-room then?
70 A ¶ Yes, that's what I understood--from the mistress.
71 A Master George--the doctor--he said nothing.
72 A ¶ GEORGE TESMAN comes from the right into the inner room, humming to himself, and carrying an unstrapped empty portmanteau.
73 A He is a middle-sized, young-looking man of thirty-three, rather stout, with a round, open, cheerful face, fair hair and beard.
74 A He wears spectacles, and is somewhat carelessly dressed in comfortable indoor clothes.
75 A ¶ Good morning, good morning, George.
76 A ¶ [In the doorway between the rooms.] Aunt Julia!
77 A Dear Aunt Julia! [Goes up to her and shakes hands warmly.] Come all this way--so early!
78 A Eh?
79 A ¶ Why, of course I had to come and see how you were getting on.
80 A ¶ In spite of your having had no proper night's rest?
81 A ¶ Oh, that makes no difference to me.
82 A ¶ Well, I suppose you got home all right from the pier?
83 A Eh?
84 A ¶ Yes, quite safely, thank goodness.
85 A Judge Brack was good enough to see me right to my door.
86 A ¶ We were so sorry we couldn't give you a seat in the carriage.
87 A But you saw what a pile of boxes Hedda had to bring with her.
88 A ¶ Yes, she had certainly plenty of boxes.
89 A ¶ [To TESMAN.] Shall I go in and see if there's anything I can do for the mistress?
90 A ¶ No thank you, Berta--you needn't.
91 A She said she would ring if she wanted anything.
92 A ¶ [Going towards the right.] Very well.
93 A ¶ But look here--take this portmanteau with you.
94 A ¶ [Taking it.] I'll put it in the attic.
95 A ¶ [She goes out by the hall door.
96 A ¶ Fancy, Auntie--I had the whole of that portmanteau chock full of copies of the documents.
97 A You wouldn't believe how much I have picked up from all the archives I have been examining--curious old details that no one has had any idea of--
98 A ¶ Yes, you don't seem to have wasted your time on your wedding trip, George.

### SCENE pt_hedda_11 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): TESMANS, HEDDA, JUDGE BRACK
1 A ¶ H'm--that is what it may come to, all the same.
2 A ¶ Well but, Judge Brack--it would show the most incredible lack of consideration for me. [Gesticulates with his arms.] For--just think--I'm a married man!
3 A We have married on the strength of these prospects, Hedda and I; and run deep into debt; and borrowed money from Aunt Julia too.
4 A Good heavens, they had as good as promised me the appointment.
5 A Eh?
6 A ¶ Well, well, well--no doubt you will get it in the end; only after a contest.
7 A ¶ [Immovable in her arm-chair.] Fancy, Tesman, there will be a sort of sporting interest in that.
8 A ¶ Why, my dearest Hedda, how can you be so indifferent about it?
9 A ¶ [As before.] I am not at all indifferent.
10 A I am most eager to see who wins.
11 A ¶ In any case, Mrs. Tesman, it is best that you should know how matters stand.
12 A I mean--before you set about the little purchases I hear you are threatening.
13 A ¶ This can make no difference.
14 A ¶ Indeed!
15 A Then I have no more to say.
16 A Good-bye! [To TESMAN.] I shall look in on my way back from my afternoon walk, and take you home with me.
17 A ¶ Oh yes, yes--your news has quite upset me.
18 A ¶ [Reclining, holds out her hand.] Good-bye, Judge; and be sure you call in the afternoon.
19 A ¶ Many thanks.
20 A Good-bye, good-bye!
21 A ¶ [Accompanying him to the door.] Good-bye my dear Judge!
22 A You must really excuse me-- [JUDGE BRACK goes out by the hall door.
23 A ¶ [Crosses the room.] Oh Hedda--one should never rush into adventures.
24 A Eh?
25 A ¶ [Looks at him, smiling.] Do you do that?
26 A ¶ Yes, dear--there is no denying--it was adventurous to go and marry and set up house upon mere expectations.
27 A ¶ Perhaps you are right there.
28 A ¶ Well--at all events, we have our delightful home, Hedda!
29 A Fancy, the home we both dreamed of--the home we were in love with, I may almost say.
30 A Eh?
31 A ¶ [Rising slowly and wearily.] It was part of our compact that we were to go into society--to keep open house.
32 A ¶ Yes, if you only knew how I had been looking forward to it!
33 A Fancy--to see you as hostess--in a select circle!
34 A Eh?
35 A Well, well, well--for the present we shall have to get on without society, Hedda--only to invite Aunt Julia now and then.--Oh, I intended you to lead such an utterly different life, dear--!
36 A ¶ Of course I cannot have my man in livery just yet.
37 A ¶ Oh, no, unfortunately.
38 A It would be out of the question for us to keep a footman, you know.
39 A ¶ And the saddle-horse I was to have had--
40 A ¶ [Aghast.] The saddle-horse!
41 A ¶ --I suppose I must not think of that now.
42 A ¶ Good heavens, no!--that's as clear as daylight!
43 A ¶ [Goes up the room.] Well, I shall have one thing at least to kill time with in the meanwhile.
44 A ¶ [Beaming.] Oh thank heaven for that!
45 A What is it, Hedda.
46 A Eh?
47 A ¶ [In the middle doorway, looks at him with covert scorn.] My pistols, George.
48 A ¶ [In alarm.] Your pistols!
49 A ¶ [With cold eyes.] General Gabler's pistols.
50 A ¶ [She goes out through the inner room, to the left.
51 A ¶ [Rushes up to the middle doorway and calls after her:] No, for heaven's sake, Hedda darling--don't touch those dangerous things!
52 A For my sake Hedda!
53 A Eh?
* 54 A ¶ The room at the TESMANS' as in the first Act, except that the piano has been removed, and an elegant little writing-table with the book-shelves put in its place.
* 55 A A smaller table stands near the sofa on the left.
* 56 A Most of the bouquets have been taken away.
* 57 A MRS. ELVSTED'S bouquet is upon the large table in front.--It is afternoon.
58 A ¶ HEDDA, dressed to receive callers, is alone in the room.
59 A She stands by the open glass door, loading a revolver.
* 60 A The fellow to it lies in an open pistol-case on the writing- table.
61 A ¶ [Looks down the garden, and calls:] So you are here again, Judge!
62 A ¶ [Is heard calling from a distance.] As you see, Mrs. Tesman!
63 A ¶ [Raises the pistol and points.] Now I'll shoot you, Judge Brack!
64 A ¶ [Calling unseen.] No, no, no!
65 A Don't stand aiming at me!
66 A ¶ This is what comes of sneaking in by the back way.(7) [She fires.
67 A ¶ [Nearer.] Are you out of your senses--!
68 A ¶ Dear me--did I happen to hit you?
69 A ¶ [Still outside.] I wish you would let these pranks alone!
70 A ¶ Come in then, Judge.
71 A ¶ JUDGE BRACK, dressed as though for a men's party, enters by the glass door.
72 A He carries a light overcoat over his arm.

### SCENE pt_hedda_12 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ What the deuce--haven't you tired of that sport, yet?
2 A What are you shooting at?
3 A ¶ Oh, I am only firing in the air.
4 A ¶ [Gently takes the pistol out of her hand.] Allow me, madam! [Looks at it.] Ah--I know this pistol well! [Looks around.] Where is the case?
5 A Ah, here it is. [Lays the pistol in it, and shuts it.] Now we won't play at that game any more to-day.
6 A ¶ Then what in heaven's name would you have me do with myself?
7 A ¶ Have you had no visitors?
8 A ¶ [Closing the glass door.] Not one.
9 A I suppose all our set are still out of town.
10 A ¶ And is Tesman not at home either?
11 A ¶ [At the writing-table, putting the pistol-case in a drawer which she shuts.] No. He rushed off to his aunt's directly after lunch; he didn't expect you so early.
12 A ¶ H'm--how stupid of me not to have thought of that!
13 A ¶ [Turning her head to look at him.] Why stupid?
14 A ¶ Because if I had thought of it I should have come a little--earlier.
15 A ¶ [Crossing the room.] Then you would have found no one to receive you; for I have been in my room changing my dress ever since lunch.
16 A ¶ And is there no sort of little chink that we could hold a parley through?
17 A ¶ You have forgotten to arrange one.
18 A ¶ That was another piece of stupidity.
19 A ¶ Well, we must just settle down here--and wait.
20 A Tesman is not likely to be back for some time yet.
21 A ¶ Never mind; I shall not be impatient.
22 A ¶ HEDDA seats herself in the corner of the sofa.
23 A BRACK lays his overcoat over the back of the nearest chair, and sits down, but keeps his hat in his hand.
* 24 A A short silence.
25 A They look at each other.
26 A ¶ Well?
27 A ¶ [In the same tone.] Well?
28 A ¶ I spoke first.
29 A ¶ [Bending a little forward.] Come, let us have a cosy little chat, Mrs. Hedda.(8)
30 A ¶ [Leaning further back in the sofa.] Does it not seem like a whole eternity since our last talk?
31 A Of course I don't count those few words yesterday evening and this morning.
32 A ¶ You mean since our last confidential talk?
33 A Our last tete-a-tete ?
34 A ¶ Well yes--since you put it so.
35 A ¶ Not a day passed but I have wished that you were home again.
36 A ¶ And I have done nothing but wish the same thing.
37 A ¶ You?
38 A Really, Mrs. Hedda?
39 A And I thought you had been enjoying your tour so much!
40 A ¶ Oh yes, you may be sure of that!
41 A ¶ But Tesman's letters spoke of nothing but happiness.
42 A ¶ Oh, Tesman!
43 A You see, he thinks nothing is so delightful as grubbing in libraries and making copies of old parchments, or whatever you call them.
44 A ¶ [With a smile of malice.] Well, that is his vocation in life--or part of it at any rate.
45 A ¶ Yes, of course; and no doubt when it's your vocation--.
46 A But I !
47 A Oh, my dear Mr. Brack, how mortally bored I have been.
48 A ¶ [Sympathetically.] Do you really say so?
49 A In downright earnest?
50 A ¶ Yes, you can surely understand it--!
51 A To go for six whole months without meeting a soul that knew anything of our circle, or could talk about things we were interested in.
52 A ¶ Yes, yes--I too should feel that a deprivation.
53 A ¶ And then, what I found most intolerable of all--
54 A ¶ Well?
55 A ¶ --was being everlastingly in the company of--one and the same person--
56 A ¶ [With a nod of assent.] Morning, noon, and night, yes--at all possible times and seasons.
57 A ¶ I said "everlastingly."
58 A ¶ Just so.
59 A But I should have thought, with our excellent Tesman, one could--
60 A ¶ Tesman is--a specialist, my dear Judge.
61 A ¶ Undeniable.
62 A ¶ And specialists are not at all amusing to travel with.
63 A Not in the long run at any rate.

### SCENE pt_hedda_20 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS, ELVSTED
1 A ¶ Because I have such a dread of scandal.
2 A ¶ Yes, Hedda, you are a coward at heart.
3 A ¶ A terrible coward. [Changing her tone.] But it was a lucky thing for you.
4 A And now you have found ample consolation at the Elvsteds'.
5 A ¶ I know what Thea has confided to you.
6 A ¶ And perhaps you have confided to her something about us?
7 A ¶ Not a word.
8 A She is too stupid to understand anything of that sort.
9 A ¶ Stupid?
10 A ¶ She is stupid about matters of that sort.
11 A ¶ And I am cowardly. [Bends over towards him, without looking him in the face, and says more softly:] But now I will confide something to you.
12 A ¶ [Eagerly.] Well?
13 A ¶ The fact that I dared not shoot you down--
14 A ¶ Yes!
15 A ¶ --that was not my arrant cowardice--that evening.
16 A ¶ [Looks at her a moment, understands, and whispers passionately.] Oh, Hedda!
17 A Hedda Gabler!
18 A Now I begin to see a hidden reason beneath our comradeship!
19 A You(11) and I--!
20 A After all, then, it was your craving for life--
21 A ¶ [Softly, with a sharp glance.] Take care!
22 A Believe nothing of the sort!
* 23 A ¶ [Twilight has begun to fall.
24 A The hall door is opened from without by BERTA.
25 A ¶ [Closes the album with a bang and calls smilingly:] Ah, at last!
26 A My darling Thea,--come along!
27 D MRS: ELVSTED enters from the hall. She is in evening dress. The door is closed behind her.
28 A ¶ [On the sofa, stretches out her arms towards her.] My sweet Thea--you can't think how I have been longing for you!
29 A ¶ [MRS. ELVSTED, in passing, exchanges slight salutations with the gentlemen in the inner room, then goes up to the table and gives HEDDA her hand.
30 A EILERT LOVBORG has risen.
31 A He and MRS. ELVSTED greet each other with a silent nod.
32 A ¶ Ought I to go in and talk to your husband for a moment?
33 A ¶ Oh, not at all.
34 A Leave those two alone.
35 A They will soon be going.
36 A ¶ Are they going out?
37 A ¶ Yes, to a supper-party.
38 A ¶ [Quickly, to LOVBORG.] Not you?
39 A ¶ Mr. Lovborg remains with us.
40 A ¶ [Takes a chair and is about to seat herself at his side.] Oh, how nice it is here!
41 A ¶ No, thank you, my little Thea!
42 A Not there!
43 A You'll be good enough to come over here to me.
44 A I will sit between you.
45 A ¶ Yes, just as you please.
46 A ¶ [She goes round the table and seats herself on the sofa on HEDDA'S right.
47 A LOVBORG re-seats himself on his chair.
48 A ¶ [After a short pause, to HEDDA.] Is not she lovely to look at?
49 A ¶ [Lightly stroking her hair.] Only to look at!
50 A ¶ Yes.
51 A For we two--she and I--we are two real comrades.
52 A We have absolute faith in each other; so we can sit and talk with perfect frankness--
53 A ¶ Not round about, Mr. Lovborg?
54 A ¶ Well--
55 A ¶ [Softly clinging close to HEDDA.] Oh, how happy I am, Hedda!
56 A For only think, he says I have inspired him too.
57 A ¶ [Looks at her with a smile.] Ah!
58 A Does he say that, dear?
59 A ¶ And then she is so brave, Mrs. Tesman!
60 A ¶ Good heavens--am I brave?
61 A ¶ Exceedingly--where your comrade is concerned.
62 A ¶ Ah, yes--courage!
63 A If one only had that!
64 A ¶ What then?
65 A What do you mean?
66 A ¶ Then life would perhaps be liveable, after all. [With a sudden change of tone.] But now, my dearest Thea, you really must have a glass of cold punch.
67 A ¶ No, thanks--I never take anything of that kind.
68 A ¶ Well then, you, Mr. Lovborg.

### SCENE pt_hedda_23 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS, TESMANS
1 A ¶ Oh God!--if he would only come as you see him now!
2 A ¶ He will come as I see him--so, and not otherwise! [Rises and approaches THEA.] You may doubt him as long as you please; I believe in him.
3 A And now we will try--
4 A ¶ You have some hidden motive in this, Hedda!
5 A ¶ Yes, I have.
6 A I want for once in my life to have power to mould a human destiny.
7 A ¶ Have you not the power?
8 A ¶ I have not--and have never had it.
9 A ¶ Not your husband's?
10 A ¶ Do you think that is worth the trouble?
11 A Oh, if you could only understand how poor I am.
12 A And fate has made you so rich! [Clasps her passionately in her arms.] I think I must burn your hair off after all.
13 A ¶ Let me go!
14 A Let me go!
15 A I am afraid of you, Hedda!
16 A ¶ [In the middle doorway.] Tea is laid in the dining-room, ma'am.
17 A ¶ Very well.
18 A We are coming
19 A ¶ No, no, no!
20 A I would rather go home alone!
21 A At once!
22 A ¶ Nonsense!
23 A First you shall have a cup of tea, you little stupid.
24 A And then--at ten o'clock--Eilert Lovborg will be here--with vine-leaves in his hair.
25 A ¶ [She drags MRS. ELVSTED almost by force to the middle doorway.
* 26 A ¶ The room at the TESMANS'.
* 27 A The curtains are drawn over the middle doorway, and also over the glass door.
* 28 A The lamp, half turned down, and with a shade over it, is burning on the table.
* 29 A In the stove, the door of which stands open, there has been a fire, which is now nearly burnt out.
30 D MRS: ELVSTED, wrapped in a large shawl, and with her feet upon a foot-rest, sits close to the stove, sunk back in the arm-chair. HEDDA, fully dressed, lies sleeping upon the sofa, with a sofa-blanket over her.
31 A ¶ [After a pause, suddenly sits up in her chair, and listens eagerly.
32 A Then she sinks back again wearily, moaning to herself.] Not yet!--Oh God--oh God--not yet!
33 A ¶ BERTA slips cautiously in by the hall door.
34 A She has a letter in her hand.
35 A ¶ [Turns and whispers eagerly.] Well--has any one come?
36 A ¶ [Softly.] Yes, a girl has just brought this letter.
37 A ¶ [Quickly, holding out her hand.] A letter!
38 A Give it to me!
39 A ¶ No, it's for Dr. Tesman, ma'am.
40 A ¶ Oh, indeed.
41 A ¶ It was Miss Tesman's servant that brought it.
42 A I'll lay it here on the table.
43 A ¶ Yes, do.
44 A ¶ [Laying down the letter.] I think I had better put out the lamp.
45 A It's smoking.
46 A ¶ Yes, put it out.
47 A It must soon be daylight now.
48 A ¶ [Putting out the lamp.] It is daylight already, ma'am.
49 A ¶ Yes, broad day!
50 A And no one come back yet--!
51 A ¶ Lord bless you, ma'am--I guessed how it would be.
52 A ¶ You guessed?
53 A ¶ Yes, when I saw that a certain person had come back to town--and that he went off with them.
54 A For we've heard enough about that gentleman before now.
55 A ¶ Don't speak so loud.
56 A You will waken Mrs. Tesman.
57 A ¶ [Looks towards the sofa and sighs.] No, no--let her sleep, poor thing.
58 A Shan't I put some wood on the fire?
59 A ¶ Thanks, not for me.
60 A ¶ Oh, very well. [She goes softly out by the hall door.
61 A ¶ [Is wakened by the shutting of the door, and looks up.] What's that--?
62 A ¶ It was only the servant.
63 A ¶ [Looking about her.] Oh, we're here--!
64 A Yes, now I remember. [Sits erect upon the sofa, stretches herself, and rubs her eyes.] What o'clock is it, Thea?
65 A ¶ [Looks at her watch.] It's past seven.
66 A ¶ When did Tesman come home?
67 A ¶ He has not come.
68 A ¶ Not come home yet?
69 A ¶ [Rising.] No one has come.
70 A ¶ Think of our watching and waiting here till four in the morning--

### SCENE pt_hedda_24 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ [Wringing her hands.] And how I watched and waited for him!
2 A ¶ [Yawns, and says with her hand before her mouth.] Well well--we might have spared ourselves the trouble.
3 A ¶ Did you get a little sleep?
4 A ¶ Oh yes; I believe I have slept pretty well.
5 A Have you not?
6 A ¶ Not for a moment.
7 A I couldn't, Hedda!--not to save my life.
8 A ¶ [Rises and goes towards her.] There there there!
9 A There's nothing to be so alarmed about.
10 A I understand quite well what has happened.
11 A ¶ Well, what do you think?
12 A Won't you tell me?
13 A ¶ Why, of course it has been a very late affair at Judge Brack's--
14 A ¶ Yes, yes--that is clear enough.
15 A But all the same--
16 A ¶ And then, you see, Tesman hasn't cared to come home and ring us up in the middle of the night. [Laughing.] Perhaps he wasn't inclined to show himself either--immediately after a jollification.
17 A ¶ But in that case--where can he have gone?
18 A ¶ Of course he has gone to his Aunts' and slept there.
19 A They have his old room ready for him.
20 A ¶ No, he can't be with them for a letter has just come for him from Miss Tesman.
21 A There it lies.
22 A ¶ Indeed? [Looks at the address.] Why yes, it's addressed in Aunt Julia's hand.
23 A Well then, he has remained at Judge Brack's.
24 A And as for Eilert Lovborg--he is sitting, with vine-leaves in his hair, reading his manuscript.
25 A ¶ Oh, Hedda, you are just saying things you don't believe a bit.
26 A ¶ You really are a little blockhead, Thea.
27 A ¶ Oh yes, I suppose I am.
28 A ¶ And how mortally tired you look.
29 A ¶ Yes, I am mortally tired.
30 A ¶ Well then, you must do as I tell you.
31 A You must go into my room and lie down for a little while.
32 A ¶ Oh no, no--I shouldn't be able to sleep.
33 A ¶ I am sure you would.
34 A ¶ Well, but you husband is certain to come soon now; and then I want to know at once--
35 A ¶ I shall take care to let you know when he comes.
36 A ¶ Do you promise me, Hedda?
37 A ¶ Yes, rely upon me.
38 A Just you go in and have a sleep in the meantime.
39 A ¶ Thanks; then I'll try. [She goes off to the inner room.
40 A ¶ [HEDDA goes up to the glass door and draws back the curtains.
* 41 A The broad daylight streams into the room.
42 A Then she takes a little hand-glass from the writing-table, looks at herself in it, and arranges her hair.
43 A Next she goes to the hall door and presses the bell-button.
44 A ¶ BERTA presently appears at the hall door.
45 A ¶ Did you want anything, ma'am?
46 A ¶ Yes; you must put some more wood in the stove.
47 A I am shivering.
48 A ¶ Bless me--I'll make up the fire at once. [She rakes the embers together and lays a piece of wood upon them; then stops and listens.] That was a ring at the front door, ma'am.
49 A ¶ Then go to the door.
50 A I will look after the fire.
51 A ¶ It'll soon burn up. [She goes out by the hall door.
52 A ¶ [HEDDA kneels on the foot-rest and lays some more pieces of wood in the stove.
53 A ¶ After a short pause, GEORGE TESMAN enters from the hall.
54 A He steals on tiptoe towards the middle doorway and is about to slip through the curtains.
55 A ¶ [At the stove, without looking up.] Good morning.
56 A ¶ [Turns.] Hedda! [Approaching her.] Good heavens--are you up so early?
57 A Eh?
58 A ¶ Yes, I am up very early this morning.
59 A ¶ And I never doubted you were still sound asleep!
60 A Fancy that, Hedda!
61 A ¶ Don't speak so loud.
62 A Mrs. Elvsted is resting in my room.
63 A ¶ Has Mrs. Elvsted been here all night?
64 A ¶ Yes, since no one came to fetch her.
65 A ¶ Ah, to be sure.
66 A ¶ [Closes the door of the stove and rises.] Well, did you enjoy yourselves at Judge Brack's?

### SCENE pt_hedda_3 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ [Produces a flat parcel wrapped in newspaper and hands it to him.] Look here, my dear boy.
2 A ¶ [Opening the parcel.] Well, I declare!--Have you really saved them for me, Aunt Julia!
3 A Hedda! isn't this touching--eh?
4 A ¶ [Beside the whatnot on the right.] Well, what is it?
5 A ¶ My old morning-shoes!
6 A My slippers.
7 A ¶ Indeed.
8 A I remember you often spoke of them while we were abroad.
9 A ¶ Yes, I missed them terribly. [Goes up to her.] Now you shall see them, Hedda!
10 A ¶ [Going towards the stove.] Thanks, I really don't care about it.
11 A ¶ [Following her.] Only think--ill as she was, Aunt Rina embroidered these for me.
12 A Oh you can't think how many associations cling to them.
13 A ¶ [At the table.] Scarcely for me.
14 A ¶ Of course not for Hedda, George.
15 A ¶ Well, but now that she belongs to the family, I thought--
16 A ¶ [Interrupting.] We shall never get on with this servant, Tesman.
17 A ¶ Not get on with Berta?
18 A ¶ Why, dear, what puts that in your head?
19 A Eh?
20 A ¶ [Pointing.] Look there!
21 A She has left her old bonnet lying about on a chair.
22 A ¶ [In consternation, drops the slippers on the floor.] Why, Hedda--
23 A ¶ Just fancy, if any one should come in and see it!
24 A ¶ But Hedda--that's Aunt Julia's bonnet.
25 A ¶ Is it!
26 A ¶ [Taking up the bonnet.] Yes, indeed it's mine.
27 A And, what's more, it's not old, Madam Hedda.
28 A ¶ I really did not look closely at it, Miss Tesman.
29 A ¶ [Trying on the bonnet.] Let me tell you it's the first time I have worn it--the very first time.
30 A ¶ And a very nice bonnet it is too--quite a beauty!
31 A ¶ Oh, it's no such great things, George. [Looks around her.] My parasol--?
32 A Ah, here. [Takes it.] For this is mine too-- [mutters] --not Berta's.
33 A ¶ A new bonnet and a new parasol!
34 A Only think, Hedda.
35 A ¶ Very handsome indeed.
36 A ¶ Yes, isn't it?
37 A Eh?
38 A But Auntie, take a good look at Hedda before you go!
39 A See how handsome she is!
40 A ¶ Oh, my dear boy, there's nothing new in that.
41 A Hedda was always lovely.
42 A ¶ [She nods and goes toward the right.
43 A ¶ [Following.] Yes, but have you noticed what splendid condition she is in?
44 A How she has filled out on the journey?
45 A ¶ [Crossing the room.] Oh, do be quiet--!
46 A ¶ [Who has stopped and turned.] Filled out?
47 A ¶ Of course you don't notice it so much now that she has that dress on.
48 A But I, who can see--
49 A ¶ [At the glass door, impatiently.] Oh, you can't see anything.
50 A ¶ It must be the mountain air in the Tyrol--
51 A ¶ [Curtly, interrupting.] I am exactly as I was when I started.
52 A ¶ So you insist; but I'm quite certain you are not.
53 A Don't you agree with me, Auntie?
54 A ¶ [Who has been gazing at her with folded hands.] Hedda is lovely-- lovely--lovely. [Goes up to her, takes her head between both hands, draws it downwards, and kisses her hair.] God bless and preserve Hedda Tesman--for George's sake.
55 A ¶ [Gently freeing herself.] Oh--!
56 A Let me go.
57 A ¶ [In quiet emotion.] I shall not let a day pass without coming to see you.
58 A ¶ No you won't, will you, Auntie?
59 A Eh?
60 A ¶ Good-bye--good-bye!
61 A ¶ [She goes out by the hall door.
62 A TESMAN accompanies her.
* 63 A The door remains half open.
64 A TESMAN can be heard repeating his message to Aunt Rina and his thanks for the slippers.
65 A ¶ [In the meantime, HEDDA walks about the room, raising her arms and clenching her hands as if in desperation.
66 A Then she flings back the curtains from the glass door, and stands there looking out.
67 A ¶ [Presently, TESMAN returns and closes the door behind him.

### SCENE pt_hedda_31 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): TESMANS, HEDDA, MISS TESMAN
1 A ¶ [HEDDA listens for a moment at the door.
2 A Then she goes up to the writing-table, takes out the packet of manuscript, peeps under the cover, draws a few of the sheets half out, and looks at them.
3 A Next she goes over and seats herself in the arm-chair beside the stove, with the packet in her lap.
4 A Presently she opens the stove door, and then the packet.
5 A ¶ [Throws one of the quires into the fire and whispers to herself.] Now I am burning your child, Thea!--Burning it, curly-locks! [Throwing one or two more quires into the stove.] Your child and Eilert Lovborg's. [Throws the rest in.] I am burning--I am burning your child.
* 6 A ¶ The same rooms at the TESMANS'.
* 7 A It is evening.
* 8 A The drawing- room is in darkness.
* 9 A The back room is lighted by the hanging lamp over the table.
* 10 A The curtains over the glass door are drawn close.
11 A ¶ HEDDA, dressed in black, walks to and fro in the dark room.
12 A Then she goes into the back room and disappears for a moment to the left.
13 A She is heard to strike a few chords on the piano.
14 A Presently she comes in sight again, and returns to the drawing-room.
15 A ¶ BERTA enters from the right, through the inner room, with a lighted lamp, which she places on the table in front of the corner settee in the drawing-room.
16 A Her eyes are red with weeping, and she has black ribbons in her cap.
17 A She goes quietly and circumspectly out to the right.
18 A HEDDA goes up to the glass door, lifts the curtain a little aside, and looks out into the darkness.
19 A ¶ Shortly afterwards, MISS TESMAN, in mourning, with a bonnet and veil on, comes in from the hall.
20 A HEDDA goes towards her and holds out her hand.
21 A ¶ Yes, Hedda, here I am, in mourning and forlorn; for now my poor sister has at last found peace.
22 A ¶ I have heard the news already, as you see.
23 A Tesman sent me a card.
24 A ¶ Yes, he promised me he would.
25 A But nevertheless I thought that to Hedda--here in the house of life--I ought myself to bring the tidings of death.
26 A ¶ That was very kind of you.
27 A ¶ Ah, Rina ought not to have left us just now.
28 A This is not the time for Hedda's house to be a house of mourning.
29 A ¶ [Changing the subject.] She died quite peacefully, did she not, Miss Tesman?
30 A ¶ Oh, her end was so calm, so beautiful.
31 A And then she had the unspeakable happiness of seeing George once more--and bidding him good-bye.--Has he not come home yet?
32 A ¶ No. He wrote that he might be detained.
33 A But won't you sit down?
34 A ¶ No thank you, my dear, dear Hedda.
35 A I should like to, but I have so much to do.
36 A I must prepare my dear one for her rest as well as I can.
37 A She shall go to her grave looking her best.
38 A ¶ Can I not help you in any way?
39 A ¶ Oh, you must not think of it!
40 A Hedda Tesman must have no hand in such mournful work.
41 A Nor let her thought dwell on it either--not at this time.
42 A ¶ One is not always mistress of one's thoughts--
43 A ¶ [Continuing.] Ah yes, it is the way of the world.
44 A At home we shall be sewing a shroud; and here there will soon be sewing too, I suppose--but of another sort, thank God!
45 A ¶ GEORGE TESMAN enters by the hall door.
46 A ¶ Ah, you have come at last!
47 A ¶ You here, Aunt Julia?
48 A With Hedda?
49 A Fancy that!
50 A ¶ I was just going, my dear boy.
51 A Well, have you done all you promised?
52 A ¶ No; I'm really afraid I have forgotten half of it.
53 A I must come to you again to-morrow.
54 A To-day my brain is all in a whirl.
55 A I can't keep my thoughts together.
56 A ¶ Why, my dear George, you mustn't take it in this way.
57 A ¶ Mustn't--?
58 A How do you mean?
59 A ¶ Even in your sorrow you must rejoice, as I do--rejoice that she is at rest.
60 A ¶ Oh yes, yes--you are thinking of Aunt Rina.
61 A ¶ You will feel lonely now, Miss Tesman.
62 A ¶ Just at first, yes.
63 A But that will not last very long, I hope.
64 A I daresay I shall soon find an occupant for Rina's little room.
65 A ¶ Indeed?
66 A Who do you think will take it?
67 A Eh?
68 A ¶ Oh, there's always some poor invalid or other in want of nursing, unfortunately.
69 A ¶ Would you really take such a burden upon you again?
70 A ¶ A burden!
71 A Heaven forgive you, child--it has been no burden to me.
72 A ¶ But suppose you had a total stranger on your hands--
73 A ¶ Oh, one soon makes friends with sick folk; and it's such an absolute necessity for me to have some one to live for.
74 A Well, heaven be praised, there may soon be something in this house, too, to keep an old aunt busy.
75 A ¶ Oh, don't trouble about anything here.
76 A ¶ Yes, just fancy what a nice time we three might have together, if--?
77 A ¶ If--?
78 A ¶ [Uneasily.] Oh nothing.
79 A It will all come right.
80 A Let us hope so--eh?
81 A ¶ Well well, I daresay you two want to talk to each other. [Smiling.] And perhaps Hedda may have something to tell you too, George.
82 A Good-bye!
83 A I must go home to Rina. [Turning at the door.] How strange it is to think that now Rina is with me and with my poor brother as well!
84 A ¶ Yes, fancy that, Aunt Julia!
85 A Eh?
86 A ¶ [MISS TESMAN goes out by the hall door.
87 A ¶ [Follows TESMAN coldly and searchingly with her eyes.] I almost believe your Aunt Rina's death affects you more than it does your Aunt Julia.
88 A ¶ Oh, it's not that alone.
89 A It's Eilert I am so terribly uneasy about.

### SCENE pt_hedda_37 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): TESMAN, ELVSTED
1 A ¶ No; the police have it.
2 A ¶ What will the police do with it?
3 A ¶ Search till they find the owner.
4 A ¶ Do you think they will succeed?
5 A ¶ [Bends over her and whispers.] No, Hedda Gabler--not so long as I say nothing.
6 A ¶ [Looks frightened at him.] And if you do not say nothing,--what then?
7 A ¶ [Shrugs his shoulders.] There is always the possibility that the pistol was stolen.
8 A ¶ [Firmly.] Death rather than that.
9 A ¶ [Smiling.] People say such things--but they don't do them.
10 A ¶ [Without replying.] And supposing the pistol was not stolen, and the owner is discovered?
11 A What then?
12 A ¶ Well, Hedda--then comes the scandal!
13 A ¶ The scandal!
14 A ¶ Yes, the scandal--of which you are so mortally afraid.
15 A You will, of course, be brought before the court--both you and Mademoiselle Diana.
16 A She will have to explain how the thing happened--whether it was an accidental shot or murder.
17 A Did the pistol go off as he was trying to take it out of his pocket, to threaten her with?
18 A Or did she tear the pistol out of his hand, shoot him, and push it back into his pocket?
19 A That would be quite like her; for she is an able-bodied young person, this same Mademoiselle Diana.
20 A ¶ But I have nothing to do with all this repulsive business.
21 A ¶ No. But you will have to answer the question: Why did you give Eilert the pistol?
22 A And what conclusions will people draw from the fact that you did give it to him?
23 A ¶ [Lets her head sink.] That is true.
24 A I did not think of that.
25 A ¶ Well, fortunately, there is no danger, so long as I say nothing.
26 A ¶ [Looks up at him.] So I am in your power, Judge Brack.
27 A You have me at your beck and call, from this time forward.
28 A ¶ [Whispers softly.] Dearest Hedda--believe me--I shall not abuse my advantage.
29 A ¶ I am in your power none the less.
30 A Subject to your will and your demands.
31 A A slave, a slave then! [Rises impetuously.] No, I cannot endure the thought of that!
32 A Never!
33 A ¶ [Looks half-mockingly at her.] People generally get used to the inevitable.
34 A ¶ [Returns his look.] Yes, perhaps. [She crosses to the writing-table.
35 A Suppressing an involuntary smile, she imitates TESMAN'S intonations.] Well?
36 A Are you getting on, George?
37 A Eh?
38 A ¶ Heaven knows, dear.
39 A In any case it will be the work of months.
40 A ¶ [As before.] Fancy that! [Passes her hands softly through Mrs. Elvsted's hair.] Doesn't it seem strange to you, Thea?
41 A Here are you sitting with Tesman--just as you used to sit with Eilert Lovborg?
42 A ¶ Ah, if I could only inspire your husband in the same way!
43 A ¶ Oh, that will come too--in time.
44 A ¶ Yes, do you know, Hedda--I really think I begin to feel something of the sort.
45 A But won't you go and sit with Brack again?
46 A ¶ Is there nothing I can do to help you two?
47 A ¶ No, nothing in the world. [Turning his head.] I trust to you to keep Hedda company, my dear Brack.
48 A ¶ [With a glance at HEDDA.] With the very greatest of pleasure.
49 A ¶ Thanks.
50 A But I am tired this evening.
51 A I will go in and lie down a little on the sofa.
52 A ¶ Yes, do dear--eh?
53 A ¶ [HEDDA goes into the back room and draws the curtains.
* 54 A A short pause.
55 A Suddenly she is heard playing a wild dance on the piano.
56 A ¶ [Starts from her chair.] Oh--what is that?
57 A ¶ [Runs to the doorway.] Why, my dearest Hedda--don't play dance-music to-night!
58 A Just think of Aunt Rina!
59 A And of Eilert too!
60 A ¶ [Puts her head out between the curtains.] And of Aunt Julia.
61 A And of all the rest of them.--After this, I will be quiet. [Closes the curtains again.]
62 A ¶ [At the writing-table.] It's not good for her to see us at this distressing work.
63 A I'll tell you what, Mrs. Elvsted,--you shall take the empty room at Aunt Julia's, and then I will come over in the evenings, and we can sit and work there--eh?
64 A ¶ [In the inner room.] I hear what you are saying, Tesman.
65 A But how am I to get through the evenings out here?
66 A ¶ [Turning over the papers.] Oh, I daresay Judge Brack will be so kind as to look in now and then, even though I am out.
67 A ¶ [In the arm-chair, calls out gaily.] Every blessed evening, with all the pleasure in life, Mrs. Tesman!
68 A We shall get on capitally together, we two!
69 A ¶ [Speaking loud and clear.] Yes, don't you flatter yourself we will, Judge Brack?
70 A Now that you are the one cock in the basket--
* 71 A ¶ [A shot is heard within.
72 A TESMAN, MRS. ELVSTED, and BRACK leap to their feet.
73 A ¶ Oh, now she is playing with those pistols again.
74 A ¶ [He throws back the curtains and runs in, followed by MRS. ELVSTED.
75 A HEDDA lies stretched on the sofa, lifeless.
* 76 A Confusion and cries.
77 A BERTA enters in alarm from the right.
78 A ¶ [Shrieks to BRACK.] Shot herself!
79 A Shot herself in the temple!
80 A Fancy that!

### SCENE pt_hedda_9 | INT. HEDDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): GEORGE TESMAN, BERTA
1 A ¶ Oh--then of course it must have been she.
2 A ¶ [Wringing her hands.] And now just fancy, Hedda--I hear that this singing-woman--that she is in town again!
3 A Oh, I don't know what to do--
4 A ¶ [Glancing towards the inner room.] Hush!
5 A Here comes Tesman. [Rises and whispers.] Thea--all this must remain between you and me.
6 A ¶ [Springing up.] Oh yes--yes!
7 A For heaven's sake--!
8 A ¶ GEORGE TESMAN, with a letter in his hand, comes from the right through the inner room.
9 A ¶ There now--the epistle is finished.
10 A ¶ That's right.
11 A And now Mrs. Elvsted is just going.
12 A Wait a moment--I'll go with you to the garden gate.
13 A ¶ Do you think Berta could post the letter, Hedda dear?
14 A ¶ [Takes it.] I will tell her to.
15 A ¶ BERTA enters from the hall.
16 A ¶ Judge Brack wishes to know if Mrs. Tesman will receive him.
17 A ¶ Yes, ask Judge Brack to come in.
18 A And look here--put this letter in the post.
19 A ¶ Taking the letter.
20 D BERTA: Yes, ma'am.
21 A ¶ [She opens the door for JUDGE BRACK and goes out herself.
22 A Brack is a man of forty-five; thick set, but well-built and elastic in his movements.
23 A His face is roundish with an aristocratic profile.
24 A His hair is short, still almost black, and carefully dressed.
25 A His eyebrows thick.
26 A His moustaches are also thick, with short-cut ends.
27 A He wears a well-cut walking-suit, a little too youthful for his age.
28 A He uses an eye-glass, which he now and then lets drop.
29 A ¶ [With his hat in his hand, bowing.] May one venture to call so early in the day?
30 A ¶ Of course one may.
31 A ¶ [Presses his hand.] You are welcome at any time. [Introducing him.] Judge Brack--Miss Rysing--
32 A ¶ Oh--!
33 A ¶ [Bowing.] Ah--delighted--
34 A ¶ [Looks at him and laughs.] It's nice to have a look at you by daylight, Judge!
35 A ¶ So you find me--altered?
36 A ¶ A little younger, I think.
37 A ¶ Thank you so much.
38 A ¶ But what do you think of Hedda--eh?
39 A Doesn't she look flourishing?
40 A She has actually--
41 A ¶ Oh, do leave me alone.
42 A You haven't thanked Judge Brack for all the trouble he has taken--
43 A ¶ Oh, nonsense--it was a pleasure to me--
44 A ¶ Yes, you are a friend indeed.
45 A But here stands Thea all impatience to be off--so au revoir Judge.
46 A I shall be back again presently.
* 47 A ¶ [Mutual salutations.
48 A MRS. ELVSTED and HEDDA go out by the hall door.
49 A ¶ Well,--is your wife tolerably satisfied--
50 A ¶ Yes, we can't thank you sufficiently.
51 A Of course she talks of a little re-arrangement here and there; and one or two things are still wanting.
52 A We shall have to buy some additional trifles.
53 A ¶ Indeed!
54 A ¶ But we won't trouble you about these things.
55 A Hedda says she herself will look after what is wanting.--Shan't we sit down?
56 A Eh?
57 A ¶ Thanks, for a moment. [Seats himself beside the table.] There is something I wanted to speak to you about, my dear Tesman.
58 A ¶ Indeed?
59 A Ah, I understand! [Seating himself.] I suppose it's the serious part of the frolic that is coming now.
60 A Eh?
61 A ¶ Oh, the money question is not so very pressing; though, for that matter, I wish we had gone a little more economically to work.
62 A ¶ But that would never have done, you know!
63 A Think of Hedda, my dear fellow!
64 A You, who know her so well--!
65 A I couldn't possibly ask her to put up with a shabby style of living!
66 A ¶ No, no--that is just the difficulty.
67 A ¶ And then--fortunately--it can't be long before I receive my appointment.
68 A ¶ Well, you see--such things are often apt to hang fire for a long time.
69 A ¶ Have you heard anything definite?
70 A Eh?
71 A ¶ Nothing exactly definite--. [Interrupting himself.] But by-the-bye--I have one piece of news for you.
72 A ¶ Well?
73 A ¶ Your old friend, Eilert Lovborg, has returned to town.
74 A ¶ I know that already.

### SCENE pt_husband_0 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): EARL CAVERSHAM, SIR ROBERT CHILTERN, MASON, COUNTESS BASILDON, MARCHMONT, VICOMTE DE NANJAC
1 A ¶ TIME: The Present
2 A ¶ PLACE: London .
3 A ¶ The action of the play is completed within twenty-four hours .
4 A ¶ THEATRE ROYAL, HAYMARKET
5 A ¶ Sole Lessee : Mr. Herbert Beerbohm Tree
6 A ¶ Managers : Mr. Lewis Waller and Mr. H. H. Morell
7 A ¶ January 3 rd , 1895
8 A ¶ THE EARL OF CAVERSHAM Mr. Alfred Bishop .
9 A VISCOUNT GORING Mr. Charles H. Hawtrey .
10 A SIR ROBERT CHILTERN Mr. Lewis Waller .
11 A VICOMTE DE NANJAC Mr. Cosmo Stuart .
12 A MR. MONTFORD Mr. Harry Stanford .
13 A PHIPPS Mr. C. H. Brookfield .
14 A MASON Mr. H. Deane .
15 A JAMES Mr. Charles Meyrick .
16 A HAROLD Mr. Goodhart .
17 A LADY CHILTERN Miss Julia Neilson .
18 A LADY MARKBY Miss Fanny Brough .
19 A COUNTESS OF BASILDON Miss Vane Featherston .
20 A MRS. MARCHMONT Miss Helen Forsyth .
21 A MISS MABEL CHILTERN Miss Maud Millet .
22 A MRS. CHEVELEY Miss Florence West .
* 23 A ¶ The octagon room at Sir Robert Chiltern’s house in Grosvenor Square .
* 24 A ¶ The room is brilliantly lighted and full of guests .
25 A At the top of the staircase stands LADY CHILTERN, a woman of grave Greek beauty , about twenty-seven years of age .
26 A She receives the guests as they come up .
* 27 A Over the well of the staircase hangs a great chandelier with wax lights , which illumine a large eighteenth-century French tapestry—representing the Triumph of Love , from a design by Boucher—that is stretched on the staircase wall .
* 28 A On the right is the entrance to the music-room .
* 29 A The sound of a string quartette is faintly heard .
* 30 A The entrance on the left leads to other reception-rooms .
31 A MRS. MARCHMONT and LADY BASILDON, two very pretty women , are seated together on a Louis Seize sofa .
32 A They are types of exquisite fragility .
33 A Their affectation of manner has a delicate charm .
34 A Watteau would have loved to paint them .
35 D MRS. MARCHMONT: Going on to the Hartlocks’ to-night, Margaret?
36 D LADY BASILDON: I suppose so. Are you?
37 D MRS. MARCHMONT: Yes. Horribly tedious parties they give, don’t they?
38 D LADY BASILDON: Horribly tedious! Never know why I go. Never know why I go anywhere.
39 D MRS. MARCHMONT: I come here to be educated.
40 D LADY BASILDON: Ah! I hate being educated!
41 D MRS. MARCHMONT: So do I. It puts one almost on a level with the commercial classes, doesn’t it? But dear Gertrude Chiltern is always telling me that I should have some serious purpose in life. So I come here to try to find one.
42 A ¶ Looking round through her lorgnette .
43 D LADY BASILDON: I don’t see anybody here to-night whom one could possibly call a serious purpose. The man who took me in to dinner talked to me about his wife the whole time.
44 D MRS. MARCHMONT: How very trivial of him!
45 D LADY BASILDON: Terribly trivial! What did your man talk about?
46 D MRS. MARCHMONT: About myself.
47 A ¶ Languidly .
48 D LADY BASILDON: And were you interested?
49 A ¶ Shaking her head .
50 D MRS. MARCHMONT: Not in the smallest degree.
51 D LADY BASILDON: What martyrs we are, dear Margaret!
52 A ¶ Rising .
53 D MRS. MARCHMONT: And how well it becomes us, Olivia!
54 A ¶ They rise and go towards the music-room .
55 A The VICOMTE DE NANJAC, a young attaché known for his neckties and his Anglomania , approaches with a low bow , and enters into conversation .
56 A ¶ Announcing guests from the top of the staircase .
57 D MASON: Mr. and Lady Jane Barford. Lord Caversham.
58 A ¶ Enter LORD CAVERSHAM, an old gentleman of seventy , wearing the riband and star of the Garter .
59 A A fine Whig type .
60 A Rather like a portrait by Lawrence .
61 D LORD CAVERSHAM: Good evening, Lady Chiltern! Has my good-for-nothing young son been here?
62 A ¶ Smiling .
63 D LADY CHILTERN: I don’t think Lord Goring has arrived yet.
64 A ¶ Coming up to LORD CAVERSHAM.
65 D MABEL CHILTERN: Why do you call Lord Goring good-for-nothing?
66 A ¶ MABEL CHILTERN is a perfect example of the English type of prettiness , the apple-blossom type .
67 A She has all the fragrance and freedom of a flower .
68 A There is ripple after ripple of sunlight in her hair , and the little mouth , with its parted lips , is expectant , like the mouth of a child .
69 A She has the fascinating tyranny of youth , and the astonishing courage of innocence .
70 A To sane people she is not reminiscent of any work of art .
71 A But she is really like a Tanagra statuette , and would be rather annoyed if she were told so .
72 D LORD CAVERSHAM: Because he leads such an idle life.
73 D MABEL CHILTERN: How can you say such a thing? Why, he rides in the Row at ten o’clock in the morning, goes to the Opera three times a week, changes his clothes at least five times a day, and dines out every night of the season. You don’t call that leading an idle life, do you?
74 A ¶ Looking at her with a kindly twinkle in his eyes .
75 D LORD CAVERSHAM: You are a very charming young lady!
76 D MABEL CHILTERN: How sweet of you to say that, Lord Caversham! Do come to us more often. You know we are always at home on Wednesdays, and you look so well with your star!
77 D LORD CAVERSHAM: Never go anywhere now. Sick of London Society. Shouldn’t mind being introduced to my own tailor; he always votes on the right side. But object strongly to being sent down to dinner with my wife’s milliner. Never could stand Lady Caversham’s bonnets.

### SCENE pt_husband_22 | INT. HUSBAND - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORD CAVERSHAM, LORD GORING, PHIPPS
1 D LORD CAVERSHAM: What do you mean, sir?
2 D LORD GORING: During the Season, father, I only talk seriously on the first Tuesday in every month, from four to seven.
3 D LORD CAVERSHAM: Well, make it Tuesday, sir, make it Tuesday.
4 D LORD GORING: But it is after seven, father, and my doctor says I must not have any serious conversation after seven. It makes me talk in my sleep.
5 D LORD CAVERSHAM: Talk in your sleep, sir? What does that matter? You are not married.
6 D LORD GORING: No, father, I am not married.
7 D LORD CAVERSHAM: Hum! That is what I have come to talk to you about, sir. You have got to get married, and at once. Why, when I was your age, sir, I had been an inconsolable widower for three months, and was already paying my addresses to your admirable mother. Damme, sir, it is your duty to get married. You can’t be always living for pleasure. Every man of position is married nowadays. Bachelors are not fashionable any more. They are a damaged lot. Too much is known about them. You must get a wife, sir. Look where your friend Robert Chiltern has got to by probity, hard work, and a sensible marriage with a good woman. Why don’t you imitate him, sir? Why don’t you take him for your model?
8 D LORD GORING: I think I shall, father.
9 D LORD CAVERSHAM: I wish you would, sir. Then I should be happy. At present I make your mother’s life miserable on your account. You are heartless, sir, quite heartless.
10 D LORD GORING: I hope not, father.
11 D LORD CAVERSHAM: And it is high time for you to get married. You are thirty-four years of age, sir.
12 D LORD GORING: Yes, father, but I only admit to thirty-two—thirty-one and a half when I have a really good buttonhole. This buttonhole is not . . . trivial enough.
13 D LORD CAVERSHAM: I tell you you are thirty-four, sir. And there is a draught in your room, besides, which makes your conduct worse. Why did you tell me there was no draught, sir? I feel a draught, sir, I feel it distinctly.
14 D LORD GORING: So do I, father. It is a dreadful draught. I will come and see you to-morrow, father. We can talk over anything you like. Let me help you on with your cloak, father.
15 D LORD CAVERSHAM: No, sir; I have called this evening for a definite purpose, and I am going to see it through at all costs to my health or yours. Put down my cloak, sir.
16 D LORD GORING: Certainly, father. But let us go into another room.
17 A ¶ Rings bell .
18 D LORD GORING: There is a dreadful draught here.
19 A ¶ Enter PHIPPS.
20 D LORD GORING: Phipps, is there a good fire in the smoking-room?
21 D PHIPPS: Yes, my lord.
22 D LORD GORING: Come in there, father. Your sneezes are quite heartrending.
23 D LORD CAVERSHAM: Well, sir, I suppose I have a right to sneeze when I choose?
24 A ¶ Apologetically .
25 D LORD GORING: Quite so, father. I was merely expressing sympathy.
26 D LORD CAVERSHAM: Oh, damn sympathy. There is a great deal too much of that sort of thing going on nowadays.
27 D LORD GORING: I quite agree with you, father. If there was less sympathy in the world there would be less trouble in the world.
28 A ¶ Going towards the smoking-room .
29 D LORD CAVERSHAM: That is a paradox, sir. I hate paradoxes.
30 D LORD GORING: So do I, father. Everybody one meets is a paradox nowadays. It is a great bore. It makes society so obvious.
31 A ¶ Turning round , and looking at his son beneath his bushy eyebrows .
32 D LORD CAVERSHAM: Do you always really understand what you say, sir?
33 A ¶ After some hesitation .
34 D LORD GORING: Yes, father, if I listen attentively.
35 A ¶ Indignantly .
36 D LORD CAVERSHAM: If you listen attentively! . . . Conceited young puppy!
37 A ¶ Goes off grumbling into the smoking-room .
38 A PHIPPS enters .
39 D LORD GORING: Phipps, there is a lady coming to see me this evening on particular business. Show her into the drawing-room when she arrives. You understand?
40 D PHIPPS: Yes, my lord.
41 D LORD GORING: It is a matter of the gravest importance, Phipps.
42 D PHIPPS: I understand, my lord.
43 D LORD GORING: No one else is to be admitted, under any circumstances.
44 D PHIPPS: I understand, my lord.
* 45 A ¶ Bell rings .
46 D LORD GORING: Ah! that is probably the lady. I shall see her myself.

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
