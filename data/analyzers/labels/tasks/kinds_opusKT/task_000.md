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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0000.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pt_barbara_0 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): STEPHEN, LADY BRITOMART
* 1 A ¶ It is after dinner on a January night, in the library in Lady Britomart Undershaft's house in Wilton Crescent.
* 2 A A large and comfortable settee is in the middle of the room, upholstered in dark leather.
* 3 A A person sitting on it [it is vacant at present] would have, on his right, Lady Britomart's writing table, with the lady herself busy at it; a smaller writing table behind him on his left; the door behind him on Lady Britomart's side; and a window with a window seat directly on his left.
* 4 A Near the window is an armchair.
5 A ¶ Lady Britomart is a woman of fifty or thereabouts, well dressed and yet careless of her dress, well bred and quite reckless of her breeding, well mannered and yet appallingly outspoken and indifferent to the opinion of her interlocutory, amiable and yet peremptory, arbitrary, and high-tempered to the last bearable degree, and withal a very typical managing matron of the upper class, treated as a naughty child until she grew into a scolding mother, and finally settling down with plenty of practical ability and worldly experience, limited in the oddest way with domestic and class limitations, conceiving the universe exactly as if it were a large house in Wilton Crescent, though handling her corner of it very effectively on that assumption, and being quite enlightened and liberal as to the books in the library, the pictures on the walls, the music in the portfolios, and the articles in the papers.
6 A ¶ Her son, Stephen, comes in.
7 A He is a gravely correct young man under 25, taking himself very seriously, but still in some awe of his mother, from childish habit and bachelor shyness rather than from any weakness of character.
8 D STEPHEN: What's the matter?
9 D LADY BRITOMART: Presently, Stephen.
10 A ¶ Stephen submissively walks to the settee and sits down.
11 A He takes up The Speaker.
12 D LADY BRITOMART: Don't begin to read, Stephen. I shall require all your attention.
13 D STEPHEN: It was only while I was waiting--
14 D LADY BRITOMART: Don't make excuses, Stephen.
15 A ¶ He puts down The Speaker.
16 D LADY BRITOMART: Now!
17 A ¶ She finishes her writing; rises; and comes to the settee.
18 D LADY BRITOMART: I have not kept you waiting very long, I think.
19 D STEPHEN: Not at all, mother.
20 D LADY BRITOMART: Bring me my cushion.
21 A ¶ He takes the cushion from the chair at the desk and arranges it for her as she sits down on the settee.
22 D LADY BRITOMART: Sit down.
23 A ¶ He sits down and fingers his tie nervously.
24 D LADY BRITOMART: Don't fiddle with your tie, Stephen: there is nothing the matter with it.
25 D STEPHEN: I beg your pardon.
26 A ¶ He fiddles with his watch chain instead.
27 D LADY BRITOMART: Now are you attending to me, Stephen?
28 D STEPHEN: Of course, mother.
29 D LADY BRITOMART: No: it's not of course. I want something much more than your everyday matter-of-course attention. I am going to speak to you very seriously, Stephen. I wish you would let that chain alone.
30 A ¶ STEPHEN [hastily relinquishing the chain] Have I done anything to annoy you, mother?
31 A If so, it was quite unintentional.
32 A ¶ LADY BRITOMART [astonished] Nonsense! [With some remorse] My poor boy, did you think I was angry with you?
33 D STEPHEN: What is it, then, mother? You are making me very uneasy.
34 A ¶ LADY BRITOMART [squaring herself at him rather aggressively] Stephen: may I ask how soon you intend to realize that you are a grown-up man, and that I am only a woman?
35 A ¶ STEPHEN [amazed] Only a--
36 D LADY BRITOMART: Don't repeat my words, please: It is a most aggravating habit. You must learn to face life seriously, Stephen. I really cannot bear the whole burden of our family affairs any longer. You must advise me: you must assume the responsibility.
37 D STEPHEN: I!
38 D LADY BRITOMART: Yes, you, of course. You were 24 last June. You've been at Harrow and Cambridge. You've been to India and Japan. You must know a lot of things now; unless you have wasted your time most scandalously. Well, advise me.
39 A ¶ STEPHEN [much perplexed] You know I have never interfered in the household--
40 D LADY BRITOMART: No: I should think not. I don't want you to order the dinner.
41 D STEPHEN: I mean in our family affairs.
42 D LADY BRITOMART: Well, you must interfere now; for they are getting quite beyond me.
43 A ¶ STEPHEN [troubled] I have thought sometimes that perhaps I ought; but really, mother, I know so little about them; and what I do know is so painful--it is so impossible to mention some things to you--[he stops, ashamed].
44 D LADY BRITOMART: I suppose you mean your father.
45 A ¶ STEPHEN [almost inaudibly] Yes.
46 D LADY BRITOMART: My dear: we can't go on all our lives not mentioning him. Of course you were quite right not to open the subject until I asked you to; but you are old enough now to be taken into my confidence, and to help me to deal with him about the girls.
47 D STEPHEN: But the girls are all right. They are engaged.
48 A ¶ LADY BRITOMART [complacently] Yes: I have made a very good match for Sarah.
49 A Charles Lomax will be a millionaire at 35.
50 A But that is ten years ahead; and in the meantime his trustees cannot under the terms of his father's will allow him more than 800 pounds a year.
51 D STEPHEN: But the will says also that if he increases his income by his own exertions, they may double the increase.
52 D LADY BRITOMART: Charles Lomax's exertions are much more likely to decrease his income than to increase it. Sarah will have to find at least another 800 pounds a year for the next ten years; and even then they will be as poor as church mice. And what about Barbara? I thought Barbara was going to make the most brilliant career of all of you. And what does she do? Joins the Salvation Army; discharges her maid; lives on a pound a week; and walks in one evening with a professor of Greek whom she has picked up in the street, and who pretends to be a Salvationist, and actually plays the big drum for her in public because he has fallen head over ears in love with her.
53 D STEPHEN: I was certainly rather taken aback when I heard they were engaged. Cusins is a very nice fellow, certainly: nobody would ever guess that he was born in Australia; but--

### SCENE pt_barbara_11 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): BARBARA, JENNY, RUMMY, SHIRLEY, UNDERSHAFT
1 D BARBARA: Send Rummy Mitchens out to clear away here.
2 D JENNY: I think she's afraid.
3 A ¶ BARBARA [her resemblance to her mother flashing out for a moment] Nonsense! she must do as she's told.
4 A ¶ JENNY [calling into the shelter] Rummy: the Major says you must come.
5 A ¶ Jenny comes to Barbara, purposely keeping on the side next Bill, lest he should suppose that she shrank from him or bore malice.
6 D BARBARA: Poor little Jenny! Are you tired?
7 A ¶ Looking at the wounded cheek.
8 D BARBARA: Does it hurt?
9 D JENNY: No: it's all right now. It was nothing.
10 A ¶ BARBARA [critically] It was as hard as he could hit, I expect.
11 A Poor Bill!
12 A You don't feel angry with him, do you?
13 D JENNY: Oh no, no, no: indeed I don't, Major, bless his poor heart!
14 A ¶ Barbara kisses her; and she runs away merrily into the shelter.
15 A Bill writhes with an agonizing return of his new and alarming symptoms, but says nothing.
16 A Rummy Mitchens comes from the shelter.
17 A ¶ BARBARA [going to meet Rummy] Now Rummy, bustle.
18 A Take in those mugs and plates to be washed; and throw the crumbs about for the birds.
19 A ¶ Rummy takes the three plates and mugs; but Shirley takes back his mug from her, as there it still come milk left in it.
20 D RUMMY: There ain't any crumbs. This ain't a time to waste good bread on birds.
21 A ¶ PRICE [appearing at the shelter door] Gentleman come to see the shelter, Major.
22 A Says he's your father.
23 D BARBARA: All right. Coming.
24 A ¶ Snobby goes back into the shelter, followed by Barbara.
25 A ¶ RUMMY [stealing across to Bill and addressing him in a subdued voice, but with intense conviction] I'd av the lor of you, you flat eared pignosed potwalloper, if she'd let me.
26 A You're no gentleman, to hit a lady in the face. [Bill, with greater things moving in him, takes no notice].
27 A ¶ SHIRLEY [following her] Here! in with you and don't get yourself into more trouble by talking.
28 A ¶ RUMMY [with hauteur] I ain't ad the pleasure o being hintroduced to you, as I can remember. [She goes into the shelter with the plates].
29 A ¶ BILL [savagely] Don't you talk to me, d'ye hear.
30 A You lea me alone, or I'll do you a mischief.
31 A I'm not dirt under your feet, anyway.
32 A ¶ SHIRLEY [calmly] Don't you be afeerd.
33 A You ain't such prime company that you need expect to be sought after. [He is about to go into the shelter when Barbara comes out, with Undershaft on her right].
34 D BARBARA: Oh there you are, Mr Shirley!
* 35 A ¶ Between them.
36 D BARBARA: This is my father: I told you he was a Secularist, didn't I? Perhaps you'll be able to comfort one another.
37 A ¶ UNDERSHAFT [startled] A Secularist!
38 A Not the least in the world: on the contrary, a confirmed mystic.
39 D BARBARA: Sorry, I'm sure. By the way, papa, what is your religion--in case I have to introduce you again?
40 D UNDERSHAFT: My religion? Well, my dear, I am a Millionaire. That is my religion.
41 D BARBARA: Then I'm afraid you and Mr Shirley wont be able to comfort one another after all. You're not a Millionaire, are you, Peter?
42 D SHIRLEY: No; and proud of it.
43 A ¶ UNDERSHAFT [gravely] Poverty, my friend, is not a thing to be proud of.
44 A ¶ SHIRLEY [angrily] Who made your millions for you?
45 A Me and my like.
46 A What's kep us poor?
47 A Keepin you rich.
48 A I wouldn't have your conscience, not for all your income.
49 D UNDERSHAFT: I wouldn't have your income, not for all your conscience, Mr Shirley.
50 A ¶ He goes to the penthouse and sits down on a form.
51 A ¶ BARBARA [stopping Shirley adroitly as he is about to retort] You wouldn't think he was my father, would you, Peter?
52 A Will you go into the shelter and lend the lasses a hand for a while: we're worked off our feet.
53 A ¶ SHIRLEY [bitterly] Yes: I'm in their debt for a meal, ain't I?
54 D BARBARA: Oh, not because you're in their debt; but for love of them, Peter, for love of them.
55 A ¶ He cannot understand, and is rather scandalized.
56 D BARBARA: There! Don't stare at me. In with you; and give that conscience of yours a holiday
57 A ¶ bustling him into the shelter.
58 A ¶ SHIRLEY [as he goes in] Ah! it's a pity you never was trained to use your reason, miss.
59 A You'd have been a very taking lecturer on Secularism.
60 A ¶ Barbara turns to her father.
61 D UNDERSHAFT: Never mind me, my dear. Go about your work; and let me watch it for a while.
62 D BARBARA: All right.

### SCENE pt_barbara_13 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): CUSINS, BARBARA, UNDERSHAFT
1 A ¶ indignant, in her mother's manner.
2 D CUSINS: Yes, my dear, it's very wearing to be in love with you. If it lasts, I quite think I shall die young.
3 D BARBARA: Should you mind?
4 D CUSINS: Not at all.
5 A ¶ He is suddenly softened, and kisses her over the drum, evidently not for the first time, as people cannot kiss over a big drum without practice.
6 A Undershaft coughs.
7 D BARBARA: It's all right, papa, we've not forgotten you. Dolly: explain the place to papa: I haven't time.
8 A ¶ She goes busily into the shelter.
* 9 A ¶ Undershaft and Adolpbus now have the yard to themselves.
10 A Undershaft, seated on a form, and still keenly attentive, looks hard at Adolphus.
11 A Adolphus looks hard at him.
12 D UNDERSHAFT: I fancy you guess something of what is in my mind, Mr Cusins.
13 A ¶ Cusins flourishes his drumsticks as if in the art of beating a lively rataplan, but makes no sound.
14 D UNDERSHAFT: Exactly so. But suppose Barbara finds you out!
15 D CUSINS: You know, I do not admit that I am imposing on Barbara. I am quite genuinely interested in the views of the Salvation Army. The fact is, I am a sort of collector of religions; and the curious thing is that I find I can believe them all. By the way, have you any religion?
16 D UNDERSHAFT: Yes.
17 D CUSINS: Anything out of the common?
18 D UNDERSHAFT: Only that there are two things necessary to Salvation.
19 A ¶ CUSINS [disappointed, but polite] Ah, the Church Catechism.
20 A Charles Lomax also belongs to the Established Church.
21 D UNDERSHAFT: The two things are--
22 D CUSINS: Baptism and--
23 D UNDERSHAFT: No. Money and gunpowder.
24 A ¶ CUSINS [surprised, but interested] That is the general opinion of our governing classes.
25 A The novelty is in hearing any man confess it.
26 D UNDERSHAFT: Just so.
27 D CUSINS: Excuse me: is there any place in your religion for honor, justice, truth, love, mercy and so forth?
28 D UNDERSHAFT: Yes: they are the graces and luxuries of a rich, strong, and safe life.
29 D CUSINS: Suppose one is forced to choose between them and money or gunpowder?
30 D UNDERSHAFT: Choose money and gunpowder; for without enough of both you cannot afford the others.
31 D CUSINS: That is your religion?
32 D UNDERSHAFT: Yes.
* 33 A ¶ The cadence of this reply makes a full close in the conversation.
34 A Cusins twists his face dubiously and contemplates Undershaft.
35 A Undershaft contemplates him.
36 D CUSINS: Barbara won't stand that. You will have to choose between your religion and Barbara.
37 D UNDERSHAFT: So will you, my friend. She will find out that that drum of yours is hollow.
38 D CUSINS: Father Undershaft: you are mistaken: I am a sincere Salvationist. You do not understand the Salvation Army. It is the army of joy, of love, of courage: it has banished the fear and remorse and despair of the old hellridden evangelical sects: it marches to fight the devil with trumpet and drum, with music and dancing, with banner and palm, as becomes a sally from heaven by its happy garrison. It picks the waster out of the public house and makes a man of him: it finds a worm wriggling in a back kitchen, and lo! a woman! Men and women of rank too, sons and daughters of the Highest. It takes the poor professor of Greek, the most artificial and self-suppressed of human creatures, from his meal of roots, and lets loose the rhapsodist in him; reveals the true worship of Dionysos to him; sends him down the public street drumming dithyrambs
39 A ¶ he plays a thundering flourish on the drum.
40 D UNDERSHAFT: You will alarm the shelter.
41 D CUSINS: Oh, they are accustomed to these sudden ecstasies of piety. However, if the drum worries you--
42 A ¶ he pockets the drumsticks; unhooks the drum; and stands it on the ground opposite the gateway.
43 D UNDERSHAFT: Thank you.
44 D CUSINS: You remember what Euripides says about your money and gunpowder?
45 D UNDERSHAFT: No.
46 A ¶ CUSINS [declaiming]
47 A ¶ One and another In money and guns may outpass his brother; And men in their millions float and flow And seethe with a million hopes as leaven; And they win their will; or they miss their will; And their hopes are dead or are pined for still: But whoe'er can know As the long days go That to live is happy, has found his heaven.
48 A ¶ My translation: what do you think of it?
49 D UNDERSHAFT: I think, my friend, that if you wish to know, as the long days go, that to live is happy, you must first acquire money enough for a decent life, and power enough to be your own master.
50 D CUSINS: You are damnably discouraging.
51 A ¶ He resumes his declamation.
52 A ¶ Is it so hard a thing to see That the spirit of God--whate'er it be-- The Law that abides and changes not, ages long, The Eternal and Nature-born: these things be strong.
53 A What else is Wisdom?
54 A What of Man's endeavor, Or God's high grace so lovely and so great?
55 A To stand from fear set free? to breathe and wait?
56 A To hold a hand uplifted over Fate?
57 A And shall not Barbara be loved for ever?

### SCENE pt_barbara_18 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS BAINES, UNDERSHAFT, BILL, BARBARA, CUSINS, JENNY
1 A ¶ her eyes fill with tears.
2 D MRS BAINES: oh, think of those poor people, Mr Undershaft: think of how much it means to them, and how little to a great man like you.
3 A ¶ UNDERSHAFT [sardonically gallant] Mrs Baines: you are irresistible.
4 A I can't disappoint you; and I can't deny myself the satisfaction of making Bodger pay up.
5 A You shall have your five thousand pounds.
6 D MRS BAINES: Thank God!
7 D UNDERSHAFT: You don't thank me?
8 D MRS BAINES: Oh sir, don't try to be cynical: don't be ashamed of being a good man. The Lord will bless you abundantly; and our prayers will be like a strong fortification round you all the days of your life.
9 A ¶ With a touch of caution.
10 D MRS BAINES: You will let me have the cheque to show at the meeting, won't you? Jenny: go in and fetch a pen and ink.
11 A ¶ Jenny runs to the shelter door.
12 D UNDERSHAFT: Do not disturb Miss Hill: I have a fountain pen.
13 A ¶ Jenny halts.
14 A He sits at the table and writes the cheque.
15 A Cusins rises to make more room for him.
* 16 A They all watch him silently.
17 A ¶ BILL [cynically, aside to Barbara, his voice and accent horribly debased] Wot prawce Selvytion nah?
18 D BARBARA: Stop.
19 A ¶ Undershaft stops writing: they all turn to her in surprise.
20 D BARBARA: Mrs Baines: are you really going to take this money?
21 A ¶ MRS BAINES [astonished] Why not, dear?
22 D BARBARA: Why not! Do you know what my father is? Have you forgotten that Lord Saxmundham is Bodger the whisky man? Do you remember how we implored the County Council to stop him from writing Bodger's Whisky in letters of fire against the sky; so that the poor drinkruined creatures on the embankment could not wake up from their snatches of sleep without being reminded of their deadly thirst by that wicked sky sign? Do you know that the worst thing I have had to fight here is not the devil, but Bodger, Bodger, Bodger, with his whisky, his distilleries, and his tied houses? Are you going to make our shelter another tied house for him, and ask me to keep it?
23 D BILL: Rotten drunken whisky it is too.
24 D MRS BAINES: Dear Barbara: Lord Saxmundham has a soul to be saved like any of us. If heaven has found the way to make a good use of his money, are we to set ourselves up against the answer to our prayers?
25 D BARBARA: I know he has a soul to be saved. Let him come down here; and I'll do my best to help him to his salvation. But he wants to send his cheque down to buy us, and go on being as wicked as ever.
26 A ¶ UNDERSHAFT [with a reasonableness which Cusins alone perceives to be ironical] My dear Barbara: alcohol is a very necessary article.
27 A It heals the sick--
28 D BARBARA: It does nothing of the sort.
29 D UNDERSHAFT: Well, it assists the doctor: that is perhaps a less questionable way of putting it. It makes life bearable to millions of people who could not endure their existence if they were quite sober. It enables Parliament to do things at eleven at night that no sane person would do at eleven in the morning. Is it Bodger's fault that this inestimable gift is deplorably abused by less than one per cent of the poor?
30 A ¶ He turns again to the table; signs the cheque; and crosses it.
31 D MRS BAINES: Barbara: will there be less drinking or more if all those poor souls we are saving come to-morrow and find the doors of our shelters shut in their faces? Lord Saxmundham gives us the money to stop drinking--to take his own business from him.
32 A ¶ CUSINS [impishly] Pure self-sacrifice on Bodger's part, clearly!
33 A Bless dear Bodger! [Barbara almost breaks down as Adolpbus, too, fails her].
34 A ¶ UNDERSHAFT [tearing out the cheque and pocketing the book as he rises and goes past Cusins to Mrs Baines] I also, Mrs Baines, may claim a little disinterestedness.
35 A Think of my business! think of the widows and orphans! the men and lads torn to pieces with shrapnel and poisoned with lyddite [Mrs Baines shrinks; but he goes on remorselessly]! the oceans of blood, not one drop of which is shed in a really just cause! the ravaged crops! the peaceful peasants forced, women and men, to till their fields under the fire of opposing armies on pain of starvation! the bad blood of the fierce little cowards at home who egg on others to fight for the gratification of their national vanity!
36 A All this makes money for me: I am never richer, never busier than when the papers are full of it.
37 A Well, it is your work to preach peace on earth and goodwill to men. [Mrs Baines's face lights up again].
38 A Every convert you make is a vote against war. [Her lips move in prayer].
39 A Yet I give you this money to help you to hasten my own commercial ruin. [He gives her the cheque].
40 A ¶ CUSINS [mounting the form in an ecstasy of mischief] The millennium will be inaugurated by the unselfishness of Undershaft and Bodger.
41 A Oh be joyful! [He takes the drumsticks from his pockets and flourishes them].
42 A ¶ MRS BAINES [taking the cheque] The longer I live the more proof I see that there is an Infinite Goodness that turns everything to the work of salvation sooner or later.
43 A Who would have thought that any good could have come out of war and drink?
44 A And yet their profits are brought today to the feet of salvation to do its blessed work. [She is affected to tears].
45 A ¶ JENNY [running to Mrs Baines and throwing her arms round her] Oh dear! how blessed, how glorious it all is!
46 A ¶ CUSINS [in a convulsion of irony] Let us seize this unspeakable moment.
47 A Let us march to the great meeting at once.
48 A Excuse me just an instant. [He rushes into the shelter.
49 A Jenny takes her tambourine from the drum head].
50 D MRS BAINES: Mr Undershaft: have you ever seen a thousand people fall on their knees with one impulse and pray? Come with us to the meeting. Barbara shall tell them that the Army is saved, and saved through you.
51 A ¶ CUSINS [returning impetuously from the shelter with a flag and a trombone, and coming between Mrs Baines and Undershaft] You shall carry the flag down the first street, Mrs Baines [he gives her the flag].
52 A Mr Undershaft is a gifted trombonist: he shall intone an Olympian diapason to the West Ham Salvation March. [Aside to Undershaft, as he forces the trombone on him] Blow, Machiavelli, blow.
53 A ¶ UNDERSHAFT [aside to him, as he takes the trombone] The trumpet in Zion! [Cusins rushes to the drum, which he takes up and puts on.
54 A Undershaft continues, aloud] I will do my best.
55 A I could vamp a bass if I knew the tune.
56 D CUSINS: It is a wedding chorus from one of Donizetti's operas; but we have converted it. We convert everything to good here, including Bodger. You remember the chorus. "For thee immense rejoicing--immenso giubilo--immenso giubilo."
57 A ¶ With drum obbligato.
58 D CUSINS: Rum tum ti tum tum, tum tum ti ta--
59 D BARBARA: Dolly: you are breaking my heart.
60 D CUSINS: What is a broken heart more or less here? Dionysos Undershaft has descended. I am possessed.
61 D MRS BAINES: Come, Barbara: I must have my dear Major to carry the flag with me.
62 D JENNY: Yes, yes, Major darling.
63 A ¶ CUSINS [snatches the tambourine out of Jenny's hand and mutely offers it to Barbara].
64 A ¶ BARBARA [coming forward a little as she puts the offer behind her with a shudder, whilst Cusins recklessly tosses the tambourine back to Jenny and goes to the gate] I can't come.
65 D JENNY: Not come!
66 A ¶ MRS BAINES [with tears in her eyes] Barbara: do you think I am wrong to take the money?

### SCENE pt_barbara_19 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): BARBARA, JENNY, MRS BAINES, BILL, SHIRLEY, RUMMY
1 A ¶ BARBARA [impulsively going to her and kissing her] No, no: God help you, dear, you must: you are saving the Army.
2 A Go; and may you have a great meeting!
3 D JENNY: But arn't you coming?
4 D BARBARA: No.
5 A ¶ She begins taking off the silver brooch from her collar.
6 D MRS BAINES: Barbara: what are you doing?
7 D JENNY: Why are you taking your badge off? You can't be going to leave us, Major.
8 A ¶ BARBARA [quietly] Father: come here.
9 A ¶ UNDERSHAFT [coming to her] My dear! [Seeing that she is going to pin the badge on his collar, he retreats to the penthouse in some alarm].
10 A ¶ BARBARA [following him] Don't be frightened. [She pins the badge on and steps back towards the table, showing him to the others] There!
11 A It's not much for 5000 pounds is it?
12 D MRS BAINES: Barbara: if you won't come and pray with us, promise me you will pray for us.
13 D BARBARA: I can't pray now. Perhaps I shall never pray again.
14 D MRS BAINES: Barbara!
15 D JENNY: Major!
16 A ¶ BARBARA [almost delirious] I can't bear any more.
17 A Quick march!
18 A ¶ CUSINS [calling to the procession in the street outside] Off we go.
19 A Play up, there!
20 A Immenso giubilo. [He gives the time with his drum; and the band strikes up the march, which rapidly becomes more distant as the procession moves briskly away].
21 D MRS BAINES: I must go, dear. You're overworked: you will be all right tomorrow. We'll never lose you. Now Jenny: step out with the old flag. Blood and Fire!
22 A ¶ She marches out through the gate with her flag.
23 D JENNY: Glory Hallelujah!
24 A ¶ flourishing her tambourine and marching.
25 A ¶ UNDERSHAFT [to Cusins, as he marches out past him easing the slide of his trombone] "My ducats and my daughter"!
26 A ¶ CUSINS [following him out] Money and gunpowder!
27 D BARBARA: Drunkenness and Murder! My God: why hast thou forsaken me?
28 A ¶ She sinks on the form with her face buried in her hands.
* 29 A The march passes away into silence.
30 A Bill Walker steals across to her.
31 A ¶ BILL [taunting] Wot prawce Selvytion nah?
32 D SHIRLEY: Don't you hit her when she's down.
33 D BILL: She it me wen aw wiz dahn. Waw shouldn't I git a bit o me own back?
34 A ¶ BARBARA [raising her head] I didn't take your money, Bill. [She crosses the yard to the gate and turns her back on the two men to hide her face from them].
35 A ¶ BILL [sneering after her] Naow, it warn't enough for you. [Turning to the drum, he misses the money].
36 A Ellow!
37 A If you ain't took it summun else az.
38 A Were's it gorn?
39 A Blame me if Jenny Ill didn't take it arter all!
40 A ¶ RUMMY [screaming at him from the loft] You lie, you dirty blackguard!
41 A Snobby Price pinched it off the drum wen e took ap iz cap.
42 A I was ap ere all the time an see im do it.
43 D BILL: Wot! Stowl maw money! Waw didn't you call thief on him, you silly old mucker you?
44 D RUMMY: To serve you aht for ittin me acrost the face. It's cost y'pahnd, that az.
45 A ¶ Raising a paean of squalid triumph.
46 D RUMMY: I done you. I'm even with you. I've ad it aht o y--.
47 A ¶ Bill snatches up Shirley's mug and hurls it at her.
48 A She slams the loft door and vanishes.
* 49 A The mug smashes against the door and falls in fragments.
50 A ¶ BILL [beginning to chuckle] Tell us, ole man, wot o'clock this morrun was it wen im as they call Snobby Prawce was sived?
51 A ¶ BARBARA [turning to him more composedly, and with unspoiled sweetness] About half past twelve, Bill.
52 A And he pinched your pound at a quarter to two.
53 A I know.
54 A Well, you can't afford to lose it.
55 A I'll send it to you.
56 A ¶ BILL [his voice and accent suddenly improving] Not if I was to starve for it.
57 A I ain't to be bought.
58 D SHIRLEY: Ain't you? You'd sell yourself to the devil for a pint o beer; ony there ain't no devil to make the offer.
59 A ¶ BILL [unshamed] So I would, mate, and often av, cheerful.
60 A But she cawn't buy me. [Approaching Barbara] You wanted my soul, did you?
61 A Well, you ain't got it.
62 D BARBARA: I nearly got it, Bill. But we've sold it back to you for ten thousand pounds.
63 D SHIRLEY: And dear at the money!
64 D BARBARA: No, Peter: it was worth more than money.
65 A ¶ BILL [salvationproof] It's no good: you cawn't get rahnd me nah.
66 A I don't blieve in it; and I've seen today that I was right. [Going] So long, old soupkitchener!
67 A Ta, ta, Major Earl's Grendorter! [Turning at the gate] Wot prawce Selvytion nah?
68 A Snobby Prawce!
69 A Ha! ha!
70 A ¶ BARBARA [offering her hand] Goodbye, Bill.
71 A ¶ BILL [taken aback, half plucks his cap off then shoves it on again defiantly] Git aht. [Barbara drops her hand, discouraged.
72 A He has a twinge of remorse].
73 A But thet's aw rawt, you knaow.
74 A Nathink pasnl.
75 A Naow mellice.
76 A So long, Judy. [He goes].

### SCENE pt_barbara_2 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): STEPHEN, LADY BRITOMART, BARBARA, SARAH, LOMAX
1 A ¶ STEPHEN [bitterly] We are utterly dependent on him and his cannons, then!
2 D LADY BRITOMART: Certainly not: the money is settled. But he provided it. So you see it is not a question of taking money from him or not: it is simply a question of how much. I don't want any more for myself.
3 D STEPHEN: Nor do I.
4 D LADY BRITOMART: But Sarah does; and Barbara does. That is, Charles Lomax and Adolphus Cusins will cost them more. So I must put my pride in my pocket and ask for it, I suppose. That is your advice, Stephen, is it not?
5 D STEPHEN: No.
6 A ¶ LADY BRITOMART [sharply] Stephen!
7 D STEPHEN: Of course if you are determined--
8 D LADY BRITOMART: I am not determined: I ask your advice; and I am waiting for it. I will not have all the responsibility thrown on my shoulders.
9 A ¶ STEPHEN [obstinately] I would die sooner than ask him for another penny.
10 A ¶ LADY BRITOMART [resignedly] You mean that I must ask him.
11 A Very well, Stephen: It shall be as you wish.
12 A You will be glad to know that your grandfather concurs.
13 A But he thinks I ought to ask Andrew to come here and see the girls.
14 A After all, he must have some natural affection for them.
15 D STEPHEN: Ask him here!!!
16 D LADY BRITOMART: Do not repeat my words, Stephen. Where else can I ask him?
17 D STEPHEN: I never expected you to ask him at all.
18 D LADY BRITOMART: Now don't tease, Stephen. Come! you see that it is necessary that he should pay us a visit, don't you?
19 A ¶ STEPHEN [reluctantly] I suppose so, if the girls cannot do without his money.
20 D LADY BRITOMART: Thank you, Stephen: I knew you would give me the right advice when it was properly explained to you. I have asked your father to come this evening.
21 A ¶ Stephen bounds from his seat.
22 D LADY BRITOMART: Don't jump, Stephen: it fidgets me.
23 A ¶ STEPHEN [in utter consternation] Do you mean to say that my father is coming here to-night--that he may be here at any moment?
24 A ¶ LADY BRITOMART [looking at her watch] I said nine. [He gasps.
25 A She rises].
26 A Ring the bell, please. [Stephen goes to the smaller writing table; presses a button on it; and sits at it with his elbows on the table and his head in his hands, outwitted and overwhelmed].
27 A It is ten minutes to nine yet; and I have to prepare the girls.
28 A I asked Charles Lomax and Adolphus to dinner on purpose that they might be here.
29 A Andrew had better see them in case he should cherish any delusions as to their being capable of supporting their wives. [The butler enters: Lady Britomart goes behind the settee to speak to him].
30 A Morrison: go up to the drawingroom and tell everybody to come down here at once. [Morrison withdraws.
31 A Lady Britomart turns to Stephen].
32 A Now remember, Stephen, I shall need all your countenance and authority. [He rises and tries to recover some vestige of these attributes].
33 A Give me a chair, dear. [He pushes a chair forward from the wall to where she stands, near the smaller writing table.
34 A She sits down; and he goes to the armchair, into which he throws himself].
35 A I don't know how Barbara will take it.
36 A Ever since they made her a major in the Salvation Army she has developed a propensity to have her own way and order people about which quite cows me sometimes.
37 A It's not ladylike: I'm sure I don't know where she picked it up.
38 A Anyhow, Barbara shan't bully me; but still it's just as well that your father should be here before she has time to refuse to meet him or make a fuss.
39 A Don't look nervous, Stephen, it will only encourage Barbara to make difficulties.
40 A I am nervous enough, goodness knows; but I don't show it.
41 A ¶ Sarah and Barbara come in with their respective young men, Charles Lomax and Adolphus Cusins.
42 A Sarah is slender, bored, and mundane.
43 A Barbara is robuster, jollier, much more energetic.
44 A Sarah is fashionably dressed: Barbara is in Salvation Army uniform.
45 A Lomax, a young man about town, is like many other young men about town.
46 A He is affected with a frivolous sense of humor which plunges him at the most inopportune moments into paroxysms of imperfectly suppressed laughter.
47 A Cusins is a spectacled student, slight, thin haired, and sweet voiced, with a more complex form of Lomax's complaint.
48 A His sense of humor is intellectual and subtle, and is complicated by an appalling temper.
49 A The lifelong struggle of a benevolent temperament and a high conscience against impulses of inhuman ridicule and fierce impatience has set up a chronic strain which has visibly wrecked his constitution.
50 A He is a most implacable, determined, tenacious, intolerant person who by mere force of character presents himself as--and indeed actually is--considerate, gentle, explanatory, even mild and apologetic, capable possibly of murder, but not of cruelty or coarseness.
51 A By the operation of some instinct which is not merciful enough to blind him with the illusions of love, he is obstinately bent on marrying Barbara.
52 A Lomax likes Sarah and thinks it will be rather a lark to marry her.
53 A Consequently he has not attempted to resist Lady Britomart's arrangements to that end.
54 A ¶ All four look as if they had been having a good deal of fun in the drawingroom.
55 A The girls enter first, leaving the swains outside.
56 A Sarah comes to the settee.
57 A Barbara comes in after her and stops at the door.
58 D BARBARA: Are Cholly and Dolly to come in?
59 A ¶ LADY BRITOMART [forcibly] Barbara: I will not have Charles called Cholly: the vulgarity of it positively makes me ill.
60 D BARBARA: It's all right, mother. Cholly is quite correct nowadays. Are they to come in?
61 D LADY BRITOMART: Yes, if they will behave themselves.
62 A ¶ BARBARA [through the door] Come in, Dolly, and behave yourself.
63 A ¶ Barbara comes to her mother's writing table.
64 A Cusins enters smiling, and wanders towards Lady Britomart.
65 A ¶ SARAH [calling] Come in, Cholly. [Lomax enters, controlling his features very imperfectly, and places himself vaguely between Sarah and Barbara].
66 A ¶ LADY BRITOMART [peremptorily] Sit down, all of you. [They sit.
67 A Cusins crosses to the window and seats himself there.
68 A Lomax takes a chair.
69 A Barbara sits at the writing table and Sarah on the settee].
* 70 A I don't in the least know what you are laughing at, Adolphus.
* 71 A I am surprised at you, though I expected nothing better from Charles Lomax.
72 A ¶ CUSINS [in a remarkably gentle voice] Barbara has been trying to teach me the West Ham Salvation March.
73 D LADY BRITOMART: I see nothing to laugh at in that; nor should you if you are really converted.
74 A ¶ CUSINS [sweetly] You were not present.
75 A It was really funny, I believe.
76 D LOMAX: Ripping.
77 D LADY BRITOMART: Be quiet, Charles. Now listen to me, children. Your father is coming here this evening.
* 78 A ¶ General stupefaction.
79 A ¶ LOMAX [remonstrating] Oh I say!
80 D LADY BRITOMART: You are not called on to say anything, Charles.
81 D SARAH: Are you serious, mother?
82 D LADY BRITOMART: Of course I am serious. It is on your account, Sarah, and also on Charles's.
* 83 A ¶ Silence.
84 A Charles looks painfully unworthy.
85 D LADY BRITOMART: I hope you are not going to object, Barbara.
86 D BARBARA: I! why should I? My father has a soul to be saved like anybody else. He's quite welcome as far as I am concerned.
87 A ¶ LOMAX [still remonstrant] But really, don't you know!
88 A Oh I say!
89 A ¶ LADY BRITOMART [frigidly] What do you wish to convey, Charles?

### SCENE pt_barbara_25 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): CUSINS, STEPHEN, UNDERSHAFT, LADY BRITOMART, BARBARA, SARAH
1 A ¶ She goes out.
2 D CUSINS: My guardian angel!
3 A ¶ To Undershaft.
4 D CUSINS: Avaunt!
5 A ¶ He follows Barbara.
6 A ¶ STEPHEN [quietly, at the writing table] You must not mind Cusins, father.
7 A He is a very amiable good fellow; but he is a Greek scholar and naturally a little eccentric.
8 D UNDERSHAFT: Ah, quite so. Thank you, Stephen. Thank you.
9 A ¶ He goes out.
10 A ¶ Stephen smiles patronizingly; buttons his coat responsibly; and crosses the room to the door.
11 A Lady Britomart, dressed for out-of-doors, opens it before he reaches it.
12 A She looks round far the others; looks at Stephen; and turns to go without a word.
13 A ¶ STEPHEN [embarrassed] Mother--
14 D LADY BRITOMART: Don't be apologetic, Stephen. And don't forget that you have outgrown your mother.
15 A ¶ She goes out.
* 16 A ¶ Perivale St Andrews lies between two Middlesex hills, half climbing the northern one.
* 17 A It is an almost smokeless town of white walls, roofs of narrow green slates or red tiles, tall trees, domes, campaniles, and slender chimney shafts, beautifully situated and beautiful in itself.
* 18 A The best view of it is obtained from the crest of a slope about half a mile to the east, where the high explosives are dealt with.
* 19 A The foundry lies hidden in the depths between, the tops of its chimneys sprouting like huge skittles into the middle distance.
* 20 A Across the crest runs a platform of concrete, with a parapet which suggests a fortification, because there is a huge cannon of the obsolete Woolwich Infant pattern peering across it at the town.
* 21 A The cannon is mounted on an experimental gun carriage: possibly the original model of the Undershaft disappearing rampart gun alluded to by Stephen.
* 22 A The parapet has a high step inside which serves as a seat.
23 A ¶ Barbara is leaning over the parapet, looking towards the town.
* 24 A On her right is the cannon; on her left the end of a shed raised on piles, with a ladder of three or four steps up to the door, which opens outwards and has a little wooden landing at the threshold, with a fire bucket in the corner of the landing.
* 25 A The parapet stops short of the shed, leaving a gap which is the beginning of the path down the hill through the foundry to the town.
* 26 A Behind the cannon is a trolley carrying a huge conical bombshell, with a red band painted on it.
* 27 A Further from the parapet, on the same side, is a deck chair, near the door of an office, which, like the sheds, is of the lightest possible construction.
28 A ¶ Cusins arrives by the path from the town.
29 D BARBARA: Well?
30 D CUSINS: Not a ray of hope. Everything perfect, wonderful, real. It only needs a cathedral to be a heavenly city instead of a hellish one.
31 D BARBARA: Have you found out whether they have done anything for old Peter Shirley.
32 D CUSINS: They have found him a job as gatekeeper and timekeeper. He's frightfully miserable. He calls the timekeeping brainwork, and says he isn't used to it; and his gate lodge is so splendid that he's ashamed to use the rooms, and skulks in the scullery.
33 D BARBARA: Poor Peter!
34 A ¶ Stephen arrives from the town.
35 A He carries a fieldglass.
36 A ¶ STEPHEN [enthusiastically] Have you two seen the place?
37 A Why did you leave us?
38 D CUSINS: I wanted to see everything I was not intended to see; and Barbara wanted to make the men talk.
39 D STEPHEN: Have you found anything discreditable?
40 D CUSINS: No. They call him Dandy Andy and are proud of his being a cunning old rascal; but it's all horribly, frightfully, immorally, unanswerably perfect.
41 A ¶ Sarah arrives.
42 D SARAH: Heavens! what a place!
43 A ¶ She crosses to the trolley.
44 D SARAH: Did you see the nursing home!?
45 A ¶ She sits down on the shell.
46 D STEPHEN: Did you see the libraries and schools!?
47 D SARAH: Did you see the ballroom and the banqueting chamber in the Town Hall!?
48 D STEPHEN: Have you gone into the insurance fund, the pension fund, the building society, the various applications of co-operation!?
49 A ¶ Undershaft comes from the office, with a sheaf of telegrams in his hands.
50 D UNDERSHAFT: Well, have you seen everything? I'm sorry I was called away.
51 A ¶ Indicating the telegrams.
52 D UNDERSHAFT: News from Manchuria.
53 D STEPHEN: Good news, I hope.
54 D UNDERSHAFT: Very.
55 D STEPHEN: Another Japanese victory?
56 D UNDERSHAFT: Oh, I don't know. Which side wins does not concern us here. No: the good news is that the aerial battleship is a tremendous success. At the first trial it has wiped out a fort with three hundred soldiers in it.
57 A ¶ CUSINS [from the platform] Dummy soldiers?
58 D UNDERSHAFT: No: the real thing.
59 A ¶ Cusins and Barbara exchange glances.
60 A Then Cusins sits on the step and buries his face in his hands.
61 A Barbara gravely lays her hand on his shoulder, and he looks up at her in a sort of whimsical desperation.
62 D UNDERSHAFT: Well, Stephen, what do you think of the place?

### SCENE pt_barbara_27 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): SARAH, LOMAX, CUSINS, LADY BRITOMART, UNDERSHAFT
1 D SARAH: } LADY BRITOMART. } Confession! BARBARA. } STEPHEN. }
2 D LOMAX: Oh I say!
3 D CUSINS: Yes, a confession. Listen, all. Until I met Barbara I thought myself in the main an honorable, truthful man, because I wanted the approval of my conscience more than I wanted anything else. But the moment I saw Barbara, I wanted her far more than the approval of my conscience.
4 D LADY BRITOMART: Adolphus!
5 D CUSINS: It is true. You accused me yourself, Lady Brit, of joining the Army to worship Barbara; and so I did. She bought my soul like a flower at a street corner; but she bought it for herself.
6 D UNDERSHAFT: What! Not for Dionysos or another?
7 D CUSINS: Dionysos and all the others are in herself. I adored what was divine in her, and was therefore a true worshipper. But I was romantic about her too. I thought she was a woman of the people, and that a marriage with a professor of Greek would be far beyond the wildest social ambitions of her rank.
8 D LADY BRITOMART: Adolphus!!
9 D LOMAX: Oh I say!!!
10 D CUSINS: When I learnt the horrible truth--
11 D LADY BRITOMART: What do you mean by the horrible truth, pray?
12 D CUSINS: That she was enormously rich; that her grandfather was an earl; that her father was the Prince of Darkness--
13 D UNDERSHAFT: Chut!
14 D CUSINS: --and that I was only an adventurer trying to catch a rich wife, then I stooped to deceive about my birth.
15 D LADY BRITOMART: Your birth! Now Adolphus, don't dare to make up a wicked story for the sake of these wretched cannons. Remember: I have seen photographs of your parents; and the Agent General for South Western Australia knows them personally and has assured me that they are most respectable married people.
16 D CUSINS: So they are in Australia; but here they are outcasts. Their marriage is legal in Australia, but not in England. My mother is my father's deceased wife's sister; and in this island I am consequently a foundling.
* 17 A ¶ Sensation.
18 D CUSINS: Is the subterfuge good enough, Machiavelli?
19 A ¶ UNDERSHAFT [thoughtfully] Biddy: this may be a way out of the difficulty.
20 D LADY BRITOMART: Stuff! A man can't make cannons any the better for being his own cousin instead of his proper self
21 A ¶ she sits down in the deck chair with a bounce that expresses her downright contempt for their casuistry.
22 A ¶ UNDERSHAFT [to Cusins] You are an educated man.
23 A That is against the tradition.
24 D CUSINS: Once in ten thousand times it happens that the schoolboy is a born master of what they try to teach him. Greek has not destroyed my mind: it has nourished it. Besides, I did not learn it at an English public school.
25 D UNDERSHAFT: Hm! Well, I cannot afford to be too particular: you have cornered the foundling market. Let it pass. You are eligible, Euripides: you are eligible.
26 A ¶ BARBARA [coming from the platform and interposing between Cusins and Undershaft] Dolly: yesterday morning, when Stephen told us all about the tradition, you became very silent; and you have been strange and excited ever since.
27 A Were you thinking of your birth then?
28 D CUSINS: When the finger of Destiny suddenly points at a man in the middle of his breakfast, it makes him thoughtful.
29 A ¶ Barbara turns away sadly and stands near her mother, listening perturbedly.
30 D UNDERSHAFT: Aha! You have had your eye on the business, my young friend, have you?
31 D CUSINS: Take care! There is an abyss of moral horror between me and your accursed aerial battleships.
32 D UNDERSHAFT: Never mind the abyss for the present. Let us settle the practical details and leave your final decision open. You know that you will have to change your name. Do you object to that?
33 D CUSINS: Would any man named Adolphus--any man called Dolly!--object to be called something else?
34 D UNDERSHAFT: Good. Now, as to money! I propose to treat you handsomely from the beginning. You shall start at a thousand a year.
35 A ¶ with sudden heat, his spectacles twinkling with mischief.
36 D CUSINS: A thousand! You dare offer a miserable thousand to the son-in-law of a millionaire! No, by Heavens, Machiavelli! you shall not cheat me. You cannot do without me; and I can do without you. I must have two thousand five hundred a year for two years. At the end of that time, if I am a failure, I go. But if I am a success, and stay on, you must give me the other five thousand.
37 D UNDERSHAFT: What other five thousand?
38 D CUSINS: To make the two years up to five thousand a year. The two thousand five hundred is only half pay in case I should turn out a failure. The third year I must have ten per cent on the profits.
39 A ¶ UNDERSHAFT [taken aback] Ten per cent!
40 A Why, man, do you know what my profits are?
41 D CUSINS: Enormous, I hope: otherwise I shall require twenty-five per cent.
42 D UNDERSHAFT: But, Mr Cusins, this is a serious matter of business. You are not bringing any capital into the concern.
43 D CUSINS: What! no capital! Is my mastery of Greek no capital? Is my access to the subtlest thought, the loftiest poetry yet attained by humanity, no capital? my character! my intellect! my life! my career! what Barbara calls my soul! are these no capital? Say another word; and I double my salary.
44 D UNDERSHAFT: Be reasonable--
45 A ¶ CUSINS [peremptorily] Mr Undershaft: you have my terms.
46 A Take them or leave them.
47 A ¶ UNDERSHAFT [recovering himself] Very well.
48 A I note your terms; and I offer you half.
49 A ¶ CUSINS [disgusted] Half!
50 A ¶ UNDERSHAFT [firmly] Half.

### SCENE pt_barbara_3 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): LOMAX, LADY BRITOMART, SARAH, BARBARA, MORRISON, UNDERSHAFT
1 D LOMAX: Well, you must admit that this is a bit thick.
2 A ¶ LADY BRITOMART [turning with ominous suavity to Cusins] Adolphus: you are a professor of Greek.
3 A Can you translate Charles Lomax's remarks into reputable English for us?
4 A ¶ CUSINS [cautiously] If I may say so, Lady Brit, I think Charles has rather happily expressed what we all feel.
5 A Homer, speaking of Autolycus, uses the same phrase.
6 A ¶ LOMAX [handsomely] Not that I mind, you know, if Sarah don't.
7 A ¶ LADY BRITOMART [crushingly] Thank you.
8 A Have I your permission, Adolphus, to invite my own husband to my own house?
9 A ¶ CUSINS [gallantly] You have my unhesitating support in everything you do.
10 D LADY BRITOMART: Sarah: have you nothing to say?
11 D SARAH: Do you mean that he is coming regularly to live here?
12 D LADY BRITOMART: Certainly not. The spare room is ready for him if he likes to stay for a day or two and see a little more of you; but there are limits.
13 D SARAH: Well, he can't eat us, I suppose. I don't mind.
14 A ¶ LOMAX [chuckling] I wonder how the old man will take it.
15 D LADY BRITOMART: Much as the old woman will, no doubt, Charles.
16 A ¶ LOMAX [abashed] I didn't mean--at least--
17 D LADY BRITOMART: You didn't think, Charles. You never do; and the result is, you never mean anything. And now please attend to me, children. Your father will be quite a stranger to us.
18 D LOMAX: I suppose he hasn't seen Sarah since she was a little kid.
19 D LADY BRITOMART: Not since she was a little kid, Charles, as you express it with that elegance of diction and refinement of thought that seem never to desert you. Accordingly--er--
20 A ¶ impatiently.
21 D LADY BRITOMART: Now I have forgotten what I was going to say. That comes of your provoking me to be sarcastic, Charles. Adolphus: will you kindly tell me where I was.
22 A ¶ CUSINS [sweetly] You were saying that as Mr Undershaft has not seen his children since they were babies, he will form his opinion of the way you have brought them up from their behavior to-night, and that therefore you wish us all to be particularly careful to conduct ourselves well, especially Charles.
23 D LOMAX: Look here: Lady Brit didn't say that.
24 A ¶ LADY BRITOMART [vehemently] I did, Charles.
25 A Adolphus's recollection is perfectly correct.
26 A It is most important that you should be good; and I do beg you for once not to pair off into opposite corners and giggle and whisper while I am speaking to your father.
27 D BARBARA: All right, mother. We'll do you credit.
28 D LADY BRITOMART: Remember, Charles, that Sarah will want to feel proud of you instead of ashamed of you.
29 D LOMAX: Oh I say! There's nothing to be exactly proud of, don't you know.
30 D LADY BRITOMART: Well, try and look as if there was.
31 A ¶ Morrison, pale and dismayed, breaks into the room in unconcealed disorder.
32 D MORRISON: Might I speak a word to you, my lady?
33 D LADY BRITOMART: Nonsense! Show him up.
34 D MORRISON: Yes, my lady.
35 A ¶ He goes.
36 D LOMAX: Does Morrison know who he is?
37 D LADY BRITOMART: Of course. Morrison has always been with us.
38 D LOMAX: It must be a regular corker for him, don't you know.
39 D LADY BRITOMART: Is this a moment to get on my nerves, Charles, with your outrageous expressions?
40 D LOMAX: But this is something out of the ordinary, really--
41 A ¶ MORRISON [at the door] The--er--Mr Undershaft. [He retreats in confusion].
42 A ¶ Andrew Undershaft comes in.
* 43 A All rise.
44 A Lady Britomart meets him in the middle of the room behind the settee.
45 A ¶ Andrew is, on the surface, a stoutish, easygoing elderly man, with kindly patient manners, and an engaging simplicity of character.
46 A But he has a watchful, deliberate, waiting, listening face, and formidable reserves of power, both bodily and mental, in his capacious chest and long head.
47 A His gentleness is partly that of a strong man who has learnt by experience that his natural grip hurts ordinary people unless he handles them very carefully, and partly the mellowness of age and success.
48 A He is also a little shy in his present very delicate situation.
49 D LADY BRITOMART: Good evening, Andrew.
50 D UNDERSHAFT: How d'ye do, my dear.
51 D LADY BRITOMART: You look a good deal older.
52 A ¶ UNDERSHAFT [apologetically] I AM somewhat older. [With a touch of courtship] Time has stood still with you.
53 A ¶ LADY BRITOMART [promptly] Rubbish!
54 A This is your family.
55 A ¶ UNDERSHAFT [surprised] Is it so large?
56 A I am sorry to say my memory is failing very badly in some things. [He offers his hand with paternal kindness to Lomax].
57 A ¶ LOMAX [jerkily shaking his hand] Ahdedoo.

### SCENE pt_barbara_32 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): BARBARA, CUSINS, UNDERSHAFT
1 A ¶ She is transfigured.
2 D BARBARA: I have got rid of the bribe of bread. I have got rid of the bribe of heaven. Let God's work be done for its own sake: the work he had to create us to do because it cannot be done except by living men and women. When I die, let him be in my debt, not I in his; and let me forgive him as becomes a woman of my rank.
3 D CUSINS: Then the way of life lies through the factory of death?
4 D BARBARA: Yes, through the raising of hell to heaven and of man to God, through the unveiling of an eternal light in the Valley of The Shadow.
5 A ¶ Seizing him with both hands.
6 D BARBARA: Oh, did you think my courage would never come back? did you believe that I was a deserter? that I, who have stood in the streets, and taken my people to my heart, and talked of the holiest and greatest things with them, could ever turn back and chatter foolishly to fashionable people about nothing in a drawingroom? Never, never, never, never: Major Barbara will die with the colors. Oh! and I have my dear little Dolly boy still; and he has found me my place and my work. Glory Hallelujah!
7 A ¶ She kisses him.
8 D CUSINS: My dearest: consider my delicate health. I cannot stand as much happiness as you can.
9 D BARBARA: Yes: it is not easy work being in love with me, is it? But it's good for you.
10 A ¶ She runs to the shed, and calls, childlike.
11 D BARBARA: Mamma! Mamma!
12 A ¶ Bilton comes out of the shed, followed by Undershaft.
13 D BARBARA: I want Mamma.
14 D UNDERSHAFT: She is taking off her list slippers, dear.
15 A ¶ He passes on to Cusins.
16 D UNDERSHAFT: Well? What does she say?
17 D CUSINS: She has gone right up into the skies.
18 A ¶ LADY BRITOMART [coming from the shed and stopping on the steps, obstructing Sarah, who follows with Lomax.
19 A Barbara clutches like a baby at her mother's skirt].
* 20 A Barbara: when will you learn to be independent and to act and think for yourself?
21 A I know as well as possible what that cry of "Mamma, Mamma," means.
* 22 A Always running to me!
23 A ¶ SARAH [touching Lady Britomart's ribs with her finger tips and imitating a bicycle horn] Pip!
24 A Pip!
25 A ¶ LADY BRITOMART [highly indignant] How dare you say Pip! pip! to me, Sarah?
26 A You are both very naughty children.
27 A What do you want, Barbara?
28 D BARBARA: I want a house in the village to live in with Dolly.
29 A ¶ Dragging at the skirt.
30 D BARBARA: Come and tell me which one to take.
31 A ¶ UNDERSHAFT [to Cusins] Six o'clock tomorrow morning, my young friend.

### SCENE pt_barbara_6 | INT. BARBARA - CONTINUOUS
Detected names (may be incomplete or contain aliases): BARBARA, UNDERSHAFT, LOMAX, LADY BRITOMART, CUSINS, STEPHEN
1 D BARBARA: In West Ham. At the sign of the cross. Ask anybody in Canning Town. Where are your works?
2 D UNDERSHAFT: In Perivale St Andrews. At the sign of the sword. Ask anybody in Europe.
3 D LOMAX: Hadn't I better play something?
4 D BARBARA: Yes. Give us Onward, Christian Soldiers.
5 D LOMAX: Well, that's rather a strong order to begin with, don't you know. Suppose I sing Thou'rt passing hence, my brother. It's much the same tune.
6 D BARBARA: It's too melancholy. You get saved, Cholly; and you'll pass hence, my brother, without making such a fuss about it.
7 D LADY BRITOMART: Really, Barbara, you go on as if religion were a pleasant subject. Do have some sense of propriety.
8 D UNDERSHAFT: I do not find it an unpleasant subject, my dear. It is the only one that capable people really care for.
9 A ¶ LADY BRITOMART [looking at her watch] Well, if you are determined to have it, I insist on having it in a proper and respectable way.
10 A Charles: ring for prayers. [General amazement.
11 A Stephen rises in dismay].
12 A ¶ LOMAX [rising] Oh I say!
13 A ¶ UNDERSHAFT [rising] I am afraid I must be going.
14 D LADY BRITOMART: You cannot go now, Andrew: it would be most improper. Sit down. What will the servants think?
15 D UNDERSHAFT: My dear: I have conscientious scruples. May I suggest a compromise? If Barbara will conduct a little service in the drawingroom, with Mr Lomax as organist, I will attend it willingly. I will even take part, if a trombone can be procured.
16 D LADY BRITOMART: Don't mock, Andrew.
17 A ¶ UNDERSHAFT [shocked--to Barbara] You don't think I am mocking, my love, I hope.
18 D BARBARA: No, of course not; and it wouldn't matter if you were: half the Army came to their first meeting for a lark.
19 A ¶ Rising.
20 D BARBARA: Come along. Come, Dolly. Come, Cholly.
21 A ¶ She goes out with Undershaft, who opens the door for her.
22 A Cusins rises.
23 D LADY BRITOMART: I will not be disobeyed by everybody. Adolphus: sit down. Charles: you may go. You are not fit for prayers: you cannot keep your countenance.
24 D LOMAX: Oh I say!
25 A ¶ He goes out.
26 A ¶ LADY BRITOMART [continuing] But you, Adolphus, can behave yourself if you choose to.
27 A I insist on your staying.
28 D CUSINS: My dear Lady Brit: there are things in the family prayer book that I couldn't bear to hear you say.
29 D LADY BRITOMART: What things, pray?
30 D CUSINS: Well, you would have to say before all the servants that we have done things we ought not to have done, and left undone things we ought to have done, and that there is no health in us. I cannot bear to hear you doing yourself such an unjustice, and Barbara such an injustice. As for myself, I flatly deny it: I have done my best. I shouldn't dare to marry Barbara--I couldn't look you in the face--if it were true. So I must go to the drawingroom.
31 A ¶ LADY BRITOMART [offended] Well, go. [He starts for the door].
32 A And remember this, Adolphus [he turns to listen]: I have a very strong suspicion that you went to the Salvation Army to worship Barbara and nothing else.
33 A And I quite appreciate the very clever way in which you systematically humbug me.
34 A I have found you out.
35 A Take care Barbara doesn't.
36 A That's all.
37 A ¶ CUSINS [with unruffled sweetness] Don't tell on me. [He goes out].
38 D LADY BRITOMART: Sarah: if you want to go, go. Anything's better than to sit there as if you wished you were a thousand miles away.
39 A ¶ SARAH [languidly] Very well, mamma. [She goes].
40 A ¶ Lady Britomart, with a sudden flounce, gives way to a little gust of tears.
41 A ¶ STEPHEN [going to her] Mother: what's the matter?
42 A ¶ LADY BRITOMART [swishing away her tears with her handkerchief] Nothing.
43 A Foolishness.
44 A You can go with him, too, if you like, and leave me with the servants.
45 D STEPHEN: Oh, you mustn't think that, mother. I--I don't like him.
46 D LADY BRITOMART: The others do. That is the injustice of a woman's lot. A woman has to bring up her children; and that means to restrain them, to deny them things they want, to set them tasks, to punish them when they do wrong, to do all the unpleasant things. And then the father, who has nothing to do but pet them and spoil them, comes in when all her work is done and steals their affection from her.
47 D STEPHEN: He has not stolen our affection from you. It is only curiosity.
48 A ¶ LADY BRITOMART [violently] I won't be consoled, Stephen.
49 A There is nothing the matter with me. [She rises and goes towards the door].
50 D STEPHEN: Where are you going, mother?
51 D LADY BRITOMART: To the drawingroom, of course.
52 A ¶ She goes out.
* 53 A Onward, Christian Soldiers, on the concertina, with tambourine accompaniment, is heard when the door opens.
54 D LADY BRITOMART: Are you coming, Stephen?
55 D STEPHEN: No. Certainly not.
56 A ¶ She goes.
57 A He sits down on the settee, with compressed lips and an expression of strong dislike.
* 58 A ¶ The yard of the West Ham shelter of the Salvation Army is a cold place on a January morning.
* 59 A The building itself, an old warehouse, is newly whitewashed.
* 60 A Its gabled end projects into the yard in the middle, with a door on the ground floor, and another in the loft above it without any balcony or ladder, but with a pulley rigged over it for hoisting sacks.
* 61 A Those who come from this central gable end into the yard have the gateway leading to the street on their left, with a stone horse-trough just beyond it, and, on the right, a penthouse shielding a table from the weather.
62 A There are forms at the table; and on them are seated a man and a woman, both much down on their luck, finishing a meal of bread [one thick slice each, with margarine and golden syrup] and diluted milk.
63 A ¶ The man, a workman out of employment, is young, agile, a talker, a poser, sharp enough to be capable of anything in reason except honesty or altruistic considerations of any kind.
64 A The woman is a commonplace old bundle of poverty and hard-worn humanity.
65 A She looks sixty and probably is forty-five.
* 66 A If they were rich people, gloved and muffed and well wrapped up in furs and overcoats, they would be numbed and miserable; for it is a grindingly cold, raw, January day; and a glance at the background of grimy warehouses and leaden sky visible over the whitewashed walls of the yard would drive any idle rich person straight to the Mediterranean.
67 A But these two, being no more troubled with visions of the Mediterranean than of the moon, and being compelled to keep more of their clothes in the pawnshop, and less on their persons, in winter than in summer, are not depressed by the cold: rather are they stung into vivacity, to which their meal has just now given an almost jolly turn.
68 A The man takes a pull at his mug, and then gets up and moves about the yard with his hands deep in his pockets, occasionally breaking into a stepdance.

### SCENE pt_candida_0 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): PROSERPINE, MORELL, LEXY
* 1 A ¶ A fine October morning in the north east suburbs of London, a vast district many miles away from the London of Mayfair and St. James's, much less known there than the Paris of the Rue de Rivoli and the Champs Elysees, and much less narrow, squalid, fetid and airless in its slums; strong in comfortable, prosperous middle class life; wide-streeted, myriad-populated; well-served with ugly iron urinals, Radical clubs, tram lines, and a perpetual stream of yellow cars; enjoying in its main thoroughfares the luxury of grass-grown "front gardens," untrodden by the foot of man save as to the path from the gate to the hall door; but blighted by an intolerable monotony of miles and miles of graceless, characterless brick houses, black iron railings, stony pavements, slaty roofs, and respectably ill dressed or disreputably poorly dressed people, quite accustomed to the place, and mostly plodding about somebody else's work, which they would not do if they themselves could help it.
* 2 A The little energy and eagerness that crop up show themselves in cockney cupidity and business "push."
* 3 A Even the policemen and the chapels are not infrequent enough to break the monotony.
* 4 A The sun is shining cheerfully; there is no fog; and though the smoke effectually prevents anything, whether faces and hands or bricks and mortar, from looking fresh and clean, it is not hanging heavily enough to trouble a Londoner.
* 5 A ¶ This desert of unattractiveness has its oasis.
* 6 A Near the outer end of the Hackney Road is a park of 217 acres, fenced in, not by railings, but by a wooden paling, and containing plenty of greensward, trees, a lake for bathers, flower beds with the flowers arranged carefully in patterns by the admired cockney art of carpet gardening and a sandpit, imported from the seaside for the delight of the children, but speedily deserted on its becoming a natural vermin preserve for all the petty fauna of Kingsland, Hackney and Hoxton.
* 7 A A bandstand, an unfinished forum for religious, anti-religious and political orators, cricket pitches, a gymnasium, and an old fashioned stone kiosk are among its attractions.
* 8 A Wherever the prospect is bounded by trees or rising green grounds, it is a pleasant place.
* 9 A Where the ground stretches far to the grey palings, with bricks and mortar, sky signs, crowded chimneys and smoke beyond, the prospect makes it desolate and sordid.
* 10 A ¶ The best view of Victoria Park is from the front window of St. Dominic's Parsonage, from which not a single chimney is visible.
* 11 A The parsonage is a semi-detached villa with a front garden and a porch.
* 12 A Visitors go up the flight of steps to the porch: tradespeople and members of the family go down by a door under the steps to the basement, with a breakfast room, used for all meals, in front, and the kitchen at the back.
* 13 A Upstairs, on the level of the hall door, is the drawing-room, with its large plate glass window looking on the park.
14 A In this room, the only sitting-room that can be spared from the children and the family meals, the parson, the Reverend James Mavor Morell does his work.
15 A He is sitting in a strong round backed revolving chair at the right hand end of a long table, which stands across the window, so that he can cheer himself with the view of the park at his elbow.
* 16 A At the opposite end of the table, adjoining it, is a little table; only half the width of the other, with a typewriter on it.
17 A His typist is sitting at this machine, with her back to the window.
* 18 A The large table is littered with pamphlets, journals, letters, nests of drawers, an office diary, postage scales and the like.
* 19 A A spare chair for visitors having business with the parson is in the middle, turned to his end.
* 20 A Within reach of his hand is a stationery case, and a cabinet photograph in a frame.
* 21 A Behind him the right hand wall, recessed above the fireplace, is fitted with bookshelves, on which an adept eye can measure the parson's divinity and casuistry by a complete set of Browning's poems and Maurice's Theological Essays, and guess at his politics from a yellow backed Progress and Poverty, Fabian Essays, a Dream of John Ball, Marx's Capital, and half a dozen other literary landmarks in Socialism.
* 22 A Opposite him on the left, near the typewriter, is the door.
* 23 A Further down the room, opposite the fireplace, a bookcase stands on a cellaret, with a sofa near it.
* 24 A There is a generous fire burning; and the hearth, with a comfortable armchair and a japanned flower painted coal scuttle at one side, a miniature chair for a boy or girl on the other, a nicely varnished wooden mantelpiece, with neatly moulded shelves, tiny bits of mirror let into the panels, and a travelling clock in a leather case (the inevitable wedding present), and on the wall above a large autotype of the chief figure in Titian's Virgin of the Assumption, is very inviting.
* 25 A Altogether the room is the room of a good housekeeper, vanquished, as far as the table is concerned, by an untidy man, but elsewhere mistress of the situation.
* 26 A The furniture, in its ornamental aspect, betrays the style of the advertised "drawing-room suite" of the pushing suburban furniture dealer; but there is nothing useless or pretentious in the room.
* 27 A The paper and panelling are dark, throwing the big cheery window and the park outside into strong relief.
28 A ¶ The Reverend James Mavor Morell is a Christian Socialist clergyman of the Church of England, and an active member of the Guild of St. Matthew and the Christian Social Union.
29 A A vigorous, genial, popular man of forty, robust and goodlooking, full of energy, with pleasant, hearty, considerate manners, and a sound, unaffected voice, which he uses with the clean, athletic articulation of a practised orator, and with a wide range and perfect command of expression.
30 A He is a first rate clergyman, able to say what he likes to whom he likes, to lecture people without setting himself up against them, to impose his authority on them without humiliating them, and to interfere in their business without impertinence.
31 A His well-spring of spiritual enthusiasm and sympathetic emotion has never run dry for a moment: he still eats and sleeps heartily enough to win the daily battle between exhaustion and recuperation triumphantly.
32 A Withal, a great baby, pardonably vain of his powers and unconsciously pleased with himself.
33 A He has a healthy complexion, a good forehead, with the brows somewhat blunt, and the eyes bright and eager, a mouth resolute, but not particularly well cut, and a substantial nose, with the mobile, spreading nostrils of the dramatic orator, but, like all his features, void of subtlety.
34 A ¶ The typist, Miss Proserpine Garnett, is a brisk little woman of about 30, of the lower middle class, neatly but cheaply dressed in a black merino skirt and a blouse, rather pert and quick of speech, and not very civil in her manner, but sensitive and affectionate.
35 A She is clattering away busily at her machine whilst Morell opens the last of his morning's letters.
36 A He realizes its contents with a comic groan of despair.
37 D PROSERPINE: Another lecture?
38 D MORELL: Yes. The Hoxton Freedom Group want me to address them on Sunday morning (great emphasis on "Sunday," this being the unreasonable part of the business). What are they?
39 D PROSERPINE: Communist Anarchists, I think.
40 D MORELL: Just like Anarchists not to know that they can't have a parson on Sunday! Tell them to come to church if they want to hear me: it will do them good. Say I can only come on Mondays and Thursdays. Have you the diary there?
41 A ¶ PROSERPINE (taking up the diary).
42 A Yes.
43 D MORELL: Have I any lecture on for next Monday?
44 A ¶ PROSERPINE (referring to diary).
45 A Tower Hamlets Radical Club.
46 D MORELL: Well, Thursday then?
47 D PROSERPINE: English Land Restoration League.
48 D MORELL: What next?
49 D PROSERPINE: Guild of St. Matthew on Monday. Independent Labor Party, Greenwich Branch, on Thursday. Monday, Social-Democratic Federation, Mile End Branch. Thursday, first Confirmation class-- (Impatiently). Oh, I'd better tell them you can't come. They're only half a dozen ignorant and conceited costermongers without five shillings between them.
50 A ¶ MORELL (amused).
51 A Ah; but you see they're near relatives of mine, Miss Garnett.
52 A ¶ PROSERPINE (staring at him).
53 A Relatives of YOURS!
54 D MORELL: Yes: we have the same father--in Heaven.
55 A ¶ PROSERPINE (relieved).
56 A Oh, is that all?
57 A ¶ MORELL (with a sadness which is a luxury to a man whose voice expresses it so finely).
58 A Ah, you don't believe it.
59 A Everybody says it: nobody believes it--nobody.
60 A (Briskly, getting back to business.)
61 A Well, well!
62 A Come, Miss Proserpine, can't you find a date for the costers?
63 A What about the 25th?: that was vacant the day before yesterday.
64 A ¶ PROSERPINE (referring to diary).
65 A Engaged--the Fabian Society.
66 D MORELL: Bother the Fabian Society! Is the 28th gone too?
67 D PROSERPINE: City dinner. You're invited to dine with the Founder's Company.
68 D MORELL: That'll do; I'll go to the Hoxton Group of Freedom instead. (She enters the engagement in silence, with implacable disparagement of the Hoxton Anarchists in every line of her face. Morell bursts open the cover of a copy of The Church Reformer, which has come by post, and glances through Mr. Stewart Hendlam's leader and the Guild of St. Matthew news. These proceedings are presently enlivened by the appearance of Morell's curate, the Reverend Alexander Mill, a young gentleman gathered by Morell from the nearest University settlement, whither he had come from Oxford to give the east end of London the benefit of his university training. He is a conceitedly well intentioned, enthusiastic, immature person, with nothing positively unbearable about him except a habit of speaking with his lips carefully closed for half an inch from each corner, a finicking arthulation, and a set of horribly corrupt vowels, notably ow for o, this being his chief means of bringing Oxford refinement to bear on Hackney vulgarity. Morell, whom he has won over by a doglike devotion, looks up indulgently from The Church Reformer as he enters, and remarks) Well, Lexy! Late again, as usual.
69 D LEXY: I'm afraid so. I wish I could get up in the morning.
70 A ¶ MORELL (exulting in his own energy).
71 A Ha! ha!
72 A (Whimsically.)
73 A Watch and pray, Lexy: watch and pray.
74 D LEXY: I know. (Rising wittily to the occasion.) But how can I watch and pray when I am asleep? Isn't that so, Miss Prossy?
75 A ¶ PROSERPINE (sharply).
76 A Miss Garnett, if you please.
77 D LEXY: I beg your pardon--Miss Garnett.
78 D PROSERPINE: You've got to do all the work to-day.
79 D LEXY: Why?
80 D PROSERPINE: Never mind why. It will do you good to earn your supper before you eat it, for once in a way, as I do. Come: don't dawdle. You should have been off on your rounds half an hour ago.
81 A ¶ LEXY (perplexed).
82 A Is she in earnest, Morell?
83 A ¶ MORELL (in the highest spirits--his eyes dancing).
84 A Yes.
85 A I am going to dawdle to-day.
86 D LEXY: You! You don't know how.
87 A ¶ MORELL (heartily).
88 A Ha! ha!
89 A Don't I?
90 A I'm going to have this day all to myself--or at least the forenoon.
91 A My wife's coming back: she's due here at 11.45.
92 A ¶ LEXY (surprised).
93 A Coming back already--with the children?
94 A I thought they were to stay to the end of the month.
95 D MORELL: So they are: she's only coming up for two days, to get some flannel things for Jimmy, and to see how we're getting on without her.
96 A ¶ LEXY (anxiously).
97 A But, my dear Morell, if what Jimmy and Fluffy had was scarlatina, do you think it wise--
98 D MORELL: Scarlatina!--rubbish, German measles. I brought it into the house myself from the Pycroft Street School. A parson is like a doctor, my boy: he must face infection as a soldier must face bullets. (He rises and claps Lexy on the shoulder.) Catch the measles if you can, Lexy: she'll nurse you; and what a piece of luck that will be for you!--eh?
99 A ¶ LEXY (smiling uneasily).
100 A It's so hard to understand you about Mrs. Morell--
101 A ¶ MORELL (tenderly).
102 A Ah, my boy, get married--get married to a good woman; and then you'll understand.
103 A That's a foretaste of what will be best in the Kingdom of Heaven we are trying to establish on earth.
104 A That will cure you of dawdling.
105 A An honest man feels that he must pay Heaven for every hour of happiness with a good spell of hard, unselfish work to make others happy.
106 A We have no more right to consume happiness without producing it than to consume wealth without producing it.
107 A Get a wife like my Candida; and you'll always be in arrear with your repayment.
108 A (He pats Lexy affectionately on the back, and is leaving the room when Lexy calls to him.)
109 D LEXY: Oh, wait a bit: I forgot. (Morell halts and turns with the door knob in his hand.) Your father-in-law is coming round to see you. (Morell shuts the door again, with a complete change of manner.)
110 A ¶ MORELL (surprised and not pleased).
111 A Mr. Burgess?

### SCENE pt_candida_10 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): BURGESS, LEXY, CANDIDA, MARCHBANKS, MORELL, EUGENE, PROSERPINE
1 A ¶ BURGESS (strongly remonstrating).
2 A Aw, no, Candy.
3 A 'Ang it all!
4 A (Lexy Mill comes in, looking anxious and important.)
5 A ¶ LEXY (hastening to shake hands with Candida).
6 A How do you do, Mrs. Morell?
7 A So glad to see you back again.
8 D CANDIDA: Thank you, Lexy. You know Eugene, don't you?
9 D LEXY: Oh, yes. How do you do, Marchbanks?
10 D MARCHBANKS: Quite well, thanks.
11 A ¶ LEXY (to Morell).
12 A I've just come from the Guild of St. Matthew.
13 A They are in the greatest consternation about your telegram.
14 A There's nothing wrong, is there?
15 D CANDIDA: What did you telegraph about, James?
16 A ¶ LEXY (to Candida).
17 A He was to have spoken for them tonight.
18 A They've taken the large hall in Mare Street and spent a lot of money on posters.
19 A Morell's telegram was to say he couldn't come.
20 A It came on them like a thunderbolt.
21 A ¶ CANDIDA (surprized, and beginning to suspect something wrong).
22 A Given up an engagement to speak!
23 D BURGESS: First time in his life, I'll bet. Ain' it, Candy?
24 A ¶ LEXY (to Morell).
25 A They decided to send an urgent telegram to you asking whether you could not change your mind.
26 A Have you received it?
27 A ¶ MORELL (with restrained impatience).
28 A Yes, yes: I got it.
29 D LEXY: It was reply paid.
30 D MORELL: Yes, I know. I answered it. I can't go.
31 D CANDIDA: But why, James?
32 A ¶ MORELL (almost fiercely).
33 A Because I don't choose.
34 A These people forget that I am a man: they think I am a talking machine to be turned on for their pleasure every evening of my life.
35 A May I not have ONE night at home, with my wife, and my friends?
* 36 A ¶ (They are all amazed at this outburst, except Eugene.
37 A His expression remains unchanged.)
38 D CANDIDA: Oh, James, you know you'll have an attack of bad conscience to-morrow; and I shall have to suffer for that.
39 A ¶ LEXY (intimidated, but urgent).
40 A I know, of course, that they make the most unreasonable demands on you.
41 A But they have been telegraphing all over the place for another speaker: and they can get nobody but the President of the Agnostic League.
42 A ¶ MORELL (promptly).
43 A Well, an excellent man.
44 A What better do they want?
45 D LEXY: But he always insists so powerfully on the divorce of Socialism from Christianity. He will undo all the good we have been doing. Of course you know best; but--(He hesitates.)
46 A ¶ CANDIDA (coaxingly).
47 A Oh, DO go, James.
48 A We'll all go.
49 A ¶ BURGESS (grumbling).
50 A Look 'ere, Candy!
51 A I say!
52 A Let's stay at home by the fire, comfortable.
53 A He won't need to be more'n a couple-o'-hour away.
54 D CANDIDA: You'll be just as comfortable at the meeting. We'll all sit on the platform and be great people.
55 A ¶ EUGENE (terrified).
56 A Oh, please don't let us go on the platform.
57 A No--everyone will stare at us--I couldn't.
58 A I'll sit at the back of the room.
59 D CANDIDA: Don't be afraid. They'll be too busy looking at James to notice you.
60 A ¶ MORELL (turning his head and looking meaningly at her over his shoulder).
61 A Prossy's complaint, Candida!
62 A Eh?
63 A ¶ CANDIDA (gaily).
64 A Yes.
65 A ¶ BURGESS (mystified).
66 A Prossy's complaint.
67 A Wot are you talking about, James?
68 A ¶ MORELL (not heeding him, rises; goes to the door; and holds it open, shouting in a commanding voice).
69 A Miss Garnett.
70 A ¶ PROSERPINE (in the distance).
71 A Yes, Mr. Morell.
72 A Coming.
* 73 A (They all wait, except Burgess, who goes stealthily to Lexy and draws him aside.)
74 D BURGESS: Listen here, Mr. Mill. Wot's Prossy's complaint? Wot's wrong with 'er?
75 A ¶ LEXY (confidentially).
76 A Well, I don't exactly know; but she spoke very strangely to me this morning.
77 A I'm afraid she's a little out of her mind sometimes.
78 A ¶ BURGESS (overwhelmed).
79 A Why, it must be catchin'!
80 A Four in the same 'ouse!
81 A (He goes back to the hearth, quite lost before the instability of the human intellect in a clergyman's house.)
82 A ¶ PROSERPINE (appearing on the threshold).
83 A What is it, Mr. Morell?
84 D MORELL: Telegraph to the Guild of St. Matthew that I am coming.
85 A ¶ PROSERPINE (surprised).
86 A Don't they expect you?
87 A ¶ MORELL (peremptorily).
88 A Do as I tell you.
89 A ¶ (Proserpine frightened, sits down at her typewriter, and obeys.
90 A Morell goes across to Burgess, Candida watching his movements all the time with growing wonder and misgiving.)
91 D MORELL: Burgess: you don't want to come?
92 A ¶ BURGESS (in deprecation).
93 A Oh, don't put it like that, James.
94 A It's only that it ain't Sunday, you know.
95 D MORELL: I'm sorry. I thought you might like to be introduced to the chairman. He's on the Works Committee of the County Council and has some influence in the matter of contracts. (Burgess wakes up at once. Morell, expecting as much, waits a moment, and says) Will you come?
96 A ¶ BURGESS (with enthusiasm).
97 A Course I'll come, James.
98 A Ain' it always a pleasure to 'ear you.
99 A ¶ MORELL (turning from him).
100 A I shall want you to take some notes at the meeting, Miss Garnett, if you have no other engagement.
101 A (She nods, afraid to speak.)
102 A You are coming, Lexy, I suppose.
103 D LEXY: Certainly.

### SCENE pt_candida_11 | INT. CANDIDA - CONTINUOUS
Detected names (may be incomplete or contain aliases): CANDIDA, MORELL, MARCHBANKS
1 D CANDIDA: We are all coming, James.
2 D MORELL: No: you are not coming; and Eugene is not coming. You will stay here and entertain him--to celebrate your return home. (Eugene rises, breathless.)
3 D CANDIDA: But James--
4 A ¶ MORELL (authoritatively).
5 A I insist.
6 A You do not want to come; and he does not want to come.
7 A (Candida is about to protest.)
8 A Oh, don't concern yourselves: I shall have plenty of people without you: your chairs will be wanted by unconverted people who have never heard me before.
9 A ¶ CANDIDA (troubled).
10 A Eugene: wouldn't you like to come?
11 D MORELL: I should be afraid to let myself go before Eugene: he is so critical of sermons. (Looking at him.) He knows I am afraid of him: he told me as much this morning. Well, I shall show him how much afraid I am by leaving him here in your custody, Candida.
12 A ¶ MARCHBANKS (to himself, with vivid feeling).
13 A That's brave.
14 A That's beautiful.
15 A (He sits down again listening with parted lips.)
16 A ¶ CANDIDA (with anxious misgiving).
17 A But--but--Is anything the matter, James?
18 A (Greatly troubled.)
19 A I can't understand--
20 D MORELL: Ah, I thought it was I who couldn't understand, dear. (He takes her tenderly in his arms and kisses her on the forehead; then looks round quietly at Marchbanks.)
* 21 A ¶ Late in the evening.
* 22 A Past ten.
* 23 A The curtains are drawn, and the lamps lighted.
* 24 A The typewriter is in its case; the large table has been cleared and tidied; everything indicates that the day's work is done.
25 A ¶ Candida and Marchbanks are seated at the fire.
* 26 A The reading lamp is on the mantelshelf above Marchbanks, who is sitting on the small chair reading aloud from a manuscript.
* 27 A A little pile of manuscripts and a couple of volumes of poetry are on the carpet beside him.
28 A Candida is in the easy chair with the poker, a light brass one, upright in her hand.
29 A She is leaning back and looking at the point of it curiously, with her feet stretched towards the blaze and her heels resting on the fender, profoundly unconscious of her appearance and surroundings.
30 A ¶ MARCHBANKS (breaking off in his recitation): Every poet that ever lived has put that thought into a sonnet.
31 A He must: he can't help it.
32 A (He looks to her for assent, and notices her absorption in the poker.)
33 A Haven't you been listening?
* 34 A (No response.)
35 A Mrs. Morell!
36 A ¶ CANDIDA (starting).
37 A Eh?
38 D MARCHBANKS: Haven't you been listening?
39 A ¶ CANDIDA (with a guilty excess of politeness).
40 A Oh, yes.
41 A It's very nice.
42 A Go on, Eugene.
43 A I'm longing to hear what happens to the angel.
44 A ¶ MARCHBANKS (crushed--the manuscript dropping from his hand to the floor).
45 A I beg your pardon for boring you.
46 D CANDIDA: But you are not boring me, I assure you. Please go on. Do, Eugene.
47 D MARCHBANKS: I finished the poem about the angel quarter of an hour ago. I've read you several things since.
48 A ¶ CANDIDA (remorsefully).
49 A I'm so sorry, Eugene.
50 A I think the poker must have fascinated me.
51 A (She puts it down.)
52 D MARCHBANKS: It made me horribly uneasy.
53 D CANDIDA: Why didn't you tell me? I'd have put it down at once.
54 D MARCHBANKS: I was afraid of making you uneasy, too. It looked as if it were a weapon. If I were a hero of old, I should have laid my drawn sword between us. If Morell had come in he would have thought you had taken up the poker because there was no sword between us.
55 A ¶ CANDIDA (wondering).
56 A What?
57 A (With a puzzled glance at him.)
58 A I can't quite follow that.
59 A Those sonnets of yours have perfectly addled me.
60 A Why should there be a sword between us?
61 A ¶ MARCHBANKS (evasively).
62 A Oh, never mind.
63 A (He stoops to pick up the manuscript.)
64 D CANDIDA: Put that down again, Eugene. There are limits to my appetite for poetry--even your poetry. You've been reading to me for more than two hours--ever since James went out. I want to talk.
65 A ¶ MARCHBANKS (rising, scared).
66 A No: I mustn't talk.
67 A (He looks round him in his lost way, and adds, suddenly) I think I'll go out and take a walk in the park.
68 A (Making for the door.)
69 D CANDIDA: Nonsense: it's shut long ago. Come and sit down on the hearth-rug, and talk moonshine as you usually do. I want to be amused. Don't you want to?
70 A ¶ MARCHBANKS (in half terror, half rapture).
71 A Yes.
72 D CANDIDA: Then come along. (She moves her chair back a little to make room. He hesitates; then timidly stretches himself on the hearth-rug, face upwards, and throws back his head across her knees, looking up at her.)
73 D MARCHBANKS: Oh, I've been so miserable all the evening, because I was doing right. Now I'm doing wrong; and I'm happy.
74 A ¶ CANDIDA (tenderly amused at him).
75 A Yes: I'm sure you feel a great grown up wicked deceiver--quite proud of yourself, aren't you?
76 A ¶ MARCHBANKS (raising his head quickly and turning a little to look round at her).
77 A Take care.
78 A I'm ever so much older than you, if you only knew.
79 A (He turns quite over on his knees, with his hands clasped and his arms on her lap, and speaks with growing impulse, his blood beginning to stir.)
80 A May I say some wicked things to you?
81 A ¶ CANDIDA (without the least fear or coldness, quite nobly, and with perfect respect for his passion, but with a touch of her wise-hearted maternal humor).
82 A No. But you may say anything you really and truly feel.
83 A Anything at all, no matter what it is.
84 A I am not afraid, so long as it is your real self that speaks, and not a mere attitude--a gallant attitude, or a wicked attitude, or even a poetic attitude.
85 A I put you on your honor and truth.
86 A Now say whatever you want to.
87 A ¶ MARCHBANKS (the eager expression vanishing utterly from his lips and nostrils as his eyes light up with pathetic spirituality).
88 A Oh, now I can't say anything: all the words I know belong to some attitude or other--all except one.
89 D CANDIDA: What one is that?
90 A ¶ MARCHBANKS (softly, losing himself in the music of the name).
91 A Candida, Candida, Candida, Candida, Candida.
92 A I must say that now, because you have put me on my honor and truth; and I never think or feel Mrs. Morell: it is always Candida.
93 D CANDIDA: Of course. And what have you to say to Candida?
94 D MARCHBANKS: Nothing, but to repeat your name a thousand times. Don't you feel that every time is a prayer to you?
95 D CANDIDA: Doesn't it make you happy to be able to pray?
96 D MARCHBANKS: Yes, very happy.
97 D CANDIDA: Well, that happiness is the answer to your prayer. Do you want anything more?
98 A ¶ MARCHBANKS (in beatitude).
99 A No: I have come into heaven, where want is unknown.
100 A ¶ (Morell comes in.
101 A He halts on the threshold, and takes in the scene at a glance.)
102 A ¶ MORELL (grave and self-contained).
103 A I hope I don't disturb you.
104 A (Candida starts up violently, but without the smallest embarrassment, laughing at herself.
105 A Eugene, still kneeling, saves himself from falling by putting his hands on the seat of the chair, and remains there, staring open mouthed at Morell.)
106 A ¶ CANDIDA (as she rises).
107 A Oh, James, how you startled me!
108 A I was so taken up with Eugene that I didn't hear your latch-key.
109 A How did the meeting go off?
110 A Did you speak well?
