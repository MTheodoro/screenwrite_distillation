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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0005.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE pt_pygmalion_4 | INT. PYGMALION - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE FLOWER GIRL, FREDDY, HIGGINS, PICKERING, MRS, MRS. PEARCE
1 A ¶ THE FLOWER GIRL [with grandeur] Never you mind, young man.
2 A I’m going home in a taxi. [She sails off to the cab.
3 A The driver puts his hand behind him and holds the door firmly shut against her.
4 A Quite understanding his mistrust, she shows him her handful of money].
5 A Eightpence ain’t no object to me, Charlie. [He grins and opens the door].
6 A Angel Court, Drury Lane, round the corner of Micklejohn’s oil shop.
7 A Let’s see how fast you can make her hop it. [She gets in and pulls the door to with a slam as the taxicab starts].
8 D FREDDY: Well, I’m dashed!
* 9 A ¶ Next day at 11 a.m.
* 10 A Higgins’s laboratory in Wimpole Street.
* 11 A It is a room on the first floor, looking on the street, and was meant for the drawing-room.
* 12 A The double doors are in the middle of the back hall; and persons entering find in the corner to their right two tall file cabinets at right angles to one another against the walls.
* 13 A In this corner stands a flat writing-table, on which are a phonograph, a laryngoscope, a row of tiny organ pipes with a bellows, a set of lamp chimneys for singing flames with burners attached to a gas plug in the wall by an indiarubber tube, several tuning-forks of different sizes, a life-size image of half a human head, showing in section the vocal organs, and a box containing a supply of wax cylinders for the phonograph.
* 14 A ¶ Further down the room, on the same side, is a fireplace, with a comfortable leather-covered easy-chair at the side of the hearth nearest the door, and a coal-scuttle.
* 15 A There is a clock on the mantelpiece.
* 16 A Between the fireplace and the phonograph table is a stand for newspapers.
* 17 A ¶ On the other side of the central door, to the left of the visitor, is a cabinet of shallow drawers.
* 18 A On it is a telephone and the telephone directory.
* 19 A The corner beyond, and most of the side wall, is occupied by a grand piano, with the keyboard at the end furthest from the door, and a bench for the player extending the full length of the keyboard.
* 20 A On the piano is a dessert dish heaped with fruit and sweets, mostly chocolates.
* 21 A ¶ The middle of the room is clear.
* 22 A Besides the easy chair, the piano bench, and two chairs at the phonograph table, there is one stray chair.
* 23 A It stands near the fireplace.
* 24 A On the walls, engravings; mostly Piranesis and mezzotint portraits.
* 25 A No paintings.
26 A ¶ Pickering is seated at the table, putting down some cards and a tuning-fork which he has been using.
27 A Higgins is standing up near him, closing two or three file drawers which are hanging out.
28 A He appears in the morning light as a robust, vital, appetizing sort of man of forty or thereabouts, dressed in a professional-looking black frock-coat with a white linen collar and black silk tie.
29 A He is of the energetic, scientific type, heartily, even violently interested in everything that can be studied as a scientific subject, and careless about himself and other people, including their feelings.
30 A He is, in fact, but for his years and size, rather like a very impetuous baby “taking notice” eagerly and loudly, and requiring almost as much watching to keep him out of unintended mischief.
31 A His manner varies from genial bullying when he is in a good humor to stormy petulance when anything goes wrong; but he is so entirely frank and void of malice that he remains likeable even in his least reasonable moments.
32 A ¶ HIGGINS [as he shuts the last drawer] Well, I think that’s the whole show.
33 D PICKERING: It’s really amazing. I haven’t taken half of it in, you know.
34 D HIGGINS: Would you like to go over any of it again?
35 A ¶ PICKERING [rising and coming to the fireplace, where he plants himself with his back to the fire] No, thank you; not now.
36 A I’m quite done up for this morning.
37 A ¶ HIGGINS [following him, and standing beside him on his left] Tired of listening to sounds?
38 D PICKERING: Yes. It’s a fearful strain. I rather fancied myself because I can pronounce twenty-four distinct vowel sounds; but your hundred and thirty beat me. I can’t hear a bit of difference between most of them.
39 A ¶ HIGGINS [chuckling, and going over to the piano to eat sweets] Oh, that comes with practice.
40 A You hear no difference at first; but you keep on listening, and presently you find they’re all as different as A from B. [Mrs. Pearce looks in: she is Higgins’s housekeeper] What’s the matter?
41 D MRS: PEARCE
42 A ¶ hesitating, evidently perplexed.
43 D MRS: A young woman wants to see you, sir.
44 D HIGGINS: A young woman! What does she want?
45 D MRS. PEARCE: Well, sir, she says you’ll be glad to see her when you know what she’s come about. She’s quite a common girl, sir. Very common indeed. I should have sent her away, only I thought perhaps you wanted her to talk into your machines. I hope I’ve not done wrong; but really you see such queer people sometimes—you’ll excuse me, I’m sure, sir—
46 D HIGGINS: Oh, that’s all right, Mrs. Pearce. Has she an interesting accent?
47 D MRS. PEARCE: Oh, something dreadful, sir, really. I don’t know how you can take an interest in it.
48 A ¶ HIGGINS [to Pickering] Let’s have her up.
49 A Show her up, Mrs. Pearce [he rushes across to his working table and picks out a cylinder to use on the phonograph].
50 D MRS: PEARCE
51 A ¶ only half resigned to it.
52 D MRS: Very well, sir. It’s for you to say.
53 A ¶ She goes downstairs.
54 D HIGGINS: This is rather a bit of luck. I’ll show you how I make records. We’ll set her talking; and I’ll take it down first in Bell’s visible Speech; then in broad Romic; and then we’ll get her on the phonograph so that you can turn her on as often as you like with the written transcript before you.
55 D MRS: PEARCE
56 A ¶ returning.
57 D MRS: This is the young woman, sir.
58 A ¶ The flower girl enters in state.
59 A She has a hat with three ostrich feathers, orange, sky-blue, and red.
60 A She has a nearly clean apron, and the shoddy coat has been tidied a little.
61 A The pathos of this deplorable figure, with its innocent vanity and consequential air, touches Pickering, who has already straightened himself in the presence of Mrs. Pearce.
62 A But as to Higgins, the only distinction he makes between men and women is that when he is neither bullying nor exclaiming to the heavens against some featherweight cross, he coaxes women as a child coaxes its nurse when it wants to get anything out of her.
63 A ¶ HIGGINS [brusquely, recognizing her with unconcealed disappointment, and at once, baby-like, making an intolerable grievance of it] Why, this is the girl I jotted down last night.
64 A She’s no use: I’ve got all the records I want of the Lisson Grove lingo; and I’m not going to waste another cylinder on it. [To the girl] Be off with you: I don’t want you.
65 D THE FLOWER GIRL: Don’t you be so saucy. You ain’t heard what I come for yet.
66 A ¶ To Mrs. Pearce, who is waiting at the door for further instruction.
67 D THE FLOWER GIRL: Did you tell him I come in a taxi?
68 D MRS. PEARCE: Nonsense, girl! what do you think a gentleman like Mr. Higgins cares what you came in?
69 D THE FLOWER GIRL: Oh, we are proud! He ain’t above giving lessons, not him: I heard him say so. Well, I ain’t come here to ask for any compliment; and if my money’s not good enough I can go elsewhere.
70 D HIGGINS: Good enough for what?
71 D THE FLOWER GIRL: Good enough for ye—oo. Now you know, don’t you? I’m come to have lessons, I am. And to pay for em too: make no mistake.
72 A ¶ HIGGINS [stupent] WELL!!! [Recovering his breath with a gasp] What do you expect me to say to you?
73 D THE FLOWER GIRL: Well, if you was a gentleman, you might ask me to sit down, I think. Don’t I tell you I’m bringing you business?
74 D HIGGINS: Pickering: shall we ask this baggage to sit down or shall we throw her out of the window?
75 A ¶ THE FLOWER GIRL [running away in terror to the piano, where she turns at bay] Ah—ah—ah—ow—ow—ow—oo! [Wounded and whimpering] I won’t be called a baggage when I’ve offered to pay like any lady.
76 A ¶ Motionless, the two men stare at her from the other side of the room, amazed.
77 A ¶ PICKERING [gently] What is it you want, my girl?

### SCENE pt_seagull_0 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): SORIN, JACOB, MASHA, MEDVIEDENKO, TREPLIEFF
* 1 A ¶ The scene is laid in the park on SORIN’S estate.
* 2 A A broad avenue of trees leads away from the audience toward a lake which lies lost in the depths of the park.
* 3 A The avenue is obstructed by a rough stage, temporarily erected for the performance of amateur theatricals, and which screens the lake from view.
* 4 A There is a dense growth of bushes to the left and right of the stage.
* 5 A A few chairs and a little table are placed in front of the stage.
* 6 A The sun has just set.
7 A JACOB and some other workmen are heard hammering and coughing on the stage behind the lowered curtain .
8 A ¶ MASHA and MEDVIEDENKO come in from the left, returning from a walk.
9 D MEDVIEDENKO: Why do you always wear mourning?
10 D MASHA: I dress in black to match my life. I am unhappy.
11 D MEDVIEDENKO: Why should you be unhappy?
12 A ¶ Thinking it over.
13 D MEDVIEDENKO: I don’t understand it. You are healthy, and though your father is not rich, he has a good competency. My life is far harder than yours. I only have twenty-three roubles a month to live on, but I don’t wear mourning.
14 A ¶ They sit down.
15 D MASHA: Happiness does not depend on riches; poor men are often happy.
16 D MEDVIEDENKO: In theory, yes, but not in reality. Take my case, for instance; my mother, my two sisters, my little brother and I must all live somehow on my salary of twenty-three roubles a month. We have to eat and drink, I take it. You wouldn’t have us go without tea and sugar, would you? Or tobacco? Answer me that, if you can.
17 A ¶ Looking in the direction of the stage.
18 D MASHA: The play will soon begin.
19 D MEDVIEDENKO: Yes, Nina Zarietchnaya is going to act in Treplieff’s play. They love one another, and their two souls will unite to-night in the effort to interpret the same idea by different means. There is no ground on which your soul and mine can meet. I love you. Too restless and sad to stay at home, I tramp here every day, six miles and back, to be met only by your indifference. I am poor, my family is large, you can have no inducement to marry a man who cannot even find sufficient food for his own mouth.
20 D MASHA: It is not that.
21 A ¶ She takes snuff.
22 D MASHA: I am touched by your affection, but I cannot return it, that is all.
23 A ¶ She offers him the snuff-box.
24 D MASHA: Will you take some?
25 D MEDVIEDENKO: No, thank you.
* 26 A ¶ A pause.
27 D MASHA: The air is sultry; a storm is brewing for to-night. You do nothing but moralise or else talk about money. To you, poverty is the greatest misfortune that can befall a man, but I think it is a thousand times easier to go begging in rags than to--You wouldn’t understand that, though.
28 A ¶ SORIN leaning on a cane, and TREPLIEFF come in.
29 D SORIN: For some reason, my boy, country life doesn’t suit me, and I am sure I shall never get used to it. Last night I went to bed at ten and woke at nine this morning, feeling as if, from oversleep, my brain had stuck to my skull.
30 A ¶ Laughing.
31 D SORIN: And yet I accidentally dropped off to sleep again after dinner, and feel utterly done up at this moment. It is like a nightmare.
32 D TREPLIEFF: There is no doubt that you should live in town.
33 A ¶ He catches sight of MASHA and MEDVIEDENKO.
34 D TREPLIEFF: You shall be called when the play begins, my friends, but you must not stay here now. Go away, please.
35 D SORIN: Miss Masha, will you kindly ask your father to leave the dog unchained? It howled so last night that my sister was unable to sleep.
36 D MASHA: You must speak to my father yourself. Please excuse me; I can’t do so.
37 A ¶ To MEDVIEDENKO.
38 D MASHA: Come, let us go.
39 D MEDVIEDENKO: You will let us know when the play begins?
40 A ¶ MASHA and MEDVIEDENKO go out.
41 D SORIN: I foresee that that dog is going to howl all night again. It is always this way in the country; I have never been able to live as I like here. I come down for a month’s holiday, to rest and all, and am plagued so by their nonsense that I long to escape after the first day.
42 A ¶ Laughing.
43 D SORIN: I have always been glad to get away from this place, but I have been retired now, and this was the only place I had to come to. Willy-nilly, one must live somewhere.
44 A ¶ To TREPLIEFF.
45 D JACOB: We are going to take a swim, Mr. Constantine.
46 D TREPLIEFF: Very well, but you must be back in ten minutes.
47 D JACOB: We will, sir.
48 A ¶ Looking at the stage.
49 D TREPLIEFF: Just like a real theatre! See, there we have the curtain, the foreground, the background, and all. No artificial scenery is needed. The eye travels direct to the lake, and rests on the horizon. The curtain will be raised as the moon rises at half-past eight.
50 D SORIN: Splendid!
51 D TREPLIEFF: Of course the whole effect will be ruined if Nina is late. She should be here by now, but her father and stepmother watch her so closely that it is like stealing her from a prison to get her away from home.

### SCENE pt_seagull_10 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NINA, SORIN, DORN, PAULINA, TREPLIEFF
1 A ¶ She and MEDVIEDENKO push the chair before them.
2 D NINA: This is terrible!
3 D SORIN: Yes, yes, it is terrible; but he won’t leave. I shall have a talk with him in a moment.
4 A ¶ They go out.
5 A Only DORN and PAULINA are left.
6 D DORN: How tiresome people are! Your husband deserves to be thrown out of here neck and crop, but it will all end by this old granny Sorin and his sister asking the man’s pardon. See if it doesn’t.
7 D PAULINA: He has sent the carriage horses into the fields too. These misunderstandings occur every day. If you only knew how they excite me! I am ill; see! I am trembling all over! I cannot endure his rough ways.
8 A ¶ Imploringly.
9 D PAULINA: Eugene, my darling, my beloved, take me to you. Our time is short; we are no longer young; let us end deception and concealment, even though it is only at the end of our lives.
* 10 A ¶ A pause.
11 D DORN: I am fifty-five years old. It is too late now for me to change my ways of living.
12 D PAULINA: I know that you refuse me because there are other women who are near to you, and you cannot take everybody. I understand. Excuse me--I see I am only bothering you.
13 A ¶ NINA is seen near the house picking a bunch of flowers.
14 D DORN: No, it is all right.
15 D PAULINA: I am tortured by jealousy. Of course you are a doctor and cannot escape from women. I understand.
16 A ¶ TO NINA, who comes toward him.
17 D DORN: How are things in there?
18 D NINA: Madame Arkadina is crying, and Sorin is having an attack of asthma.
19 D DORN: Let us go and give them both some camomile tea.
20 A ¶ Hands him the bunch of flowers.
21 D NINA: Here are some flowers for you.
22 D DORN: Thank you.
23 A ¶ He goes into the house.
24 A ¶ Following him.
25 D PAULINA: What pretty flowers!
26 A ¶ As they reach the house she says in a low voice.
27 D PAULINA: Give me those flowers! Give them to me!
28 A ¶ DORN hands her the flowers; she tears them to pieces and flings them away.
29 A They both go into the house.
30 A ¶ Alone.
31 D NINA: How strange to see a famous actress weeping, and for such a trifle! Is it not strange, too, that a famous author should sit fishing all day? He is the idol of the public, the papers are full of him, his photograph is for sale everywhere, his works have been translated into many foreign languages, and yet he is overjoyed if he catches a couple of minnows. I always thought famous people were distant and proud; I thought they despised the common crowd which exalts riches and birth, and avenged themselves on it by dazzling it with the inextinguishable honour and glory of their fame. But here I see them weeping and playing cards and flying into passions like everybody else.
32 A ¶ TREPLIEFF comes in without a hat on, carrying a gun and a dead seagull.
33 D TREPLIEFF: Are you alone here?
34 D NINA: Yes.
35 A ¶ TREPLIEFF lays the sea-gull at her feet.
36 D NINA: What do you mean by this?
37 D TREPLIEFF: I was base enough to-day to kill this gull. I lay it at your feet.
38 D NINA: What is happening to you?
39 A ¶ She picks up the gull and stands looking at it.
* 40 A ¶ After a pause.
41 D TREPLIEFF: So shall I soon end my own life.
42 D NINA: You have changed so that I fail to recognise you.
43 D TREPLIEFF: Yes, I have changed since the time when I ceased to recognise you. You have failed me; your look is cold; you do not like to have me near you.
44 D NINA: You have grown so irritable lately, and you talk so darkly and symbolically that you must forgive me if I fail to follow you. I am too simple to understand you.
45 D TREPLIEFF: All this began when my play failed so dismally. A woman never can forgive failure. I have burnt the manuscript to the last page. Oh, if you could only fathom my unhappiness! Your estrangement is to me terrible, incredible; it is as if I had suddenly waked to find this lake dried up and sunk into the earth. You say you are too simple to understand me; but, oh, what is there to understand? You disliked my play, you have no faith in my powers, you already think of me as commonplace and worthless, as many are.
46 A ¶ Stamping his foot.
47 D TREPLIEFF: How well I can understand your feelings! And that understanding is to me like a dagger in the brain. May it be accursed, together with my stupidity, which sucks my life-blood like a snake!

### SCENE pt_seagull_11 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): TRIGORIN, TREPLIEFF, NINA, THE VOICE OF ARKADINA
1 A ¶ He sees TRIGORIN, who approaches reading a book.
2 D TREPLIEFF: There comes real genius, striding along like another Hamlet, and with a book, too.
3 A ¶ Mockingly.
4 D TREPLIEFF: “Words, words, words.” You feel the warmth of that sun already, you smile, your eyes melt and glow liquid in its rays. I shall not disturb you.
5 A ¶ He goes out.
6 A ¶ Making notes in his book.
7 D TRIGORIN: Takes snuff and drinks vodka; always wears black dresses; is loved by a schoolteacher--
8 D NINA: How do you do?
9 D TRIGORIN: How are you, Miss Nina? Owing to an unforeseen development of circumstances, it seems that we are leaving here today. You and I shall probably never see each other again, and I am sorry for it. I seldom meet a young and pretty girl now; I can hardly remember how it feels to be nineteen, and the young girls in my books are seldom living characters. I should like to change places with you, if but for an hour, to look out at the world through your eyes, and so find out what sort of a little person you are.
10 D NINA: And I should like to change places with you.
11 D TRIGORIN: Why?
12 D NINA: To find out how a famous genius feels. What is it like to be famous? What sensations does it give you?
13 D TRIGORIN: What sensations? I don’t believe it gives any.
14 A ¶ Thoughtfully.
15 D TRIGORIN: Either you exaggerate my fame, or else, if it exists, all I can say is that one simply doesn’t feel fame in any way.
16 D NINA: But when you read about yourself in the papers?
17 D TRIGORIN: If the critics praise me, I am happy; if they condemn me, I am out of sorts for the next two days.
18 D NINA: This is a wonderful world. If you only knew how I envy you! Men are born to different destinies. Some dully drag a weary, useless life behind them, lost in the crowd, unhappy, while to one out of a million, as to you, for instance, comes a bright destiny full of interest and meaning. You are lucky.
19 D TRIGORIN: I, lucky?
20 A ¶ He shrugs his shoulders.
21 D TRIGORIN: H-m--I hear you talking about fame, and happiness, and bright destinies, and those fine words of yours mean as much to me--forgive my saying so--as sweetmeats do, which I never eat. You are very young, and very kind.
22 D NINA: Your life is beautiful.
23 D TRIGORIN: I see nothing especially lovely about it.
24 A ¶ He looks at his watch.
25 D TRIGORIN: Excuse me, I must go at once, and begin writing again. I am in a hurry.
26 A ¶ He laughs.
27 D TRIGORIN: You have stepped on my pet corn, as they say, and I am getting excited, and a little cross. Let us discuss this bright and beautiful life of mine, though.
28 A ¶ After a few moments’ thought.
29 D TRIGORIN: Violent obsessions sometimes lay hold of a man: he may, for instance, think day and night of nothing but the moon. I have such a moon. Day and night I am held in the grip of one besetting thought, to write, write, write! Hardly have I finished one book than something urges me to write another, and then a third, and then a fourth--I write ceaselessly. I am, as it were, on a treadmill. I hurry for ever from one story to another, and can’t help myself. Do you see anything bright and beautiful in that? Oh, it is a wild life! Even now, thrilled as I am by talking to you, I do not forget for an instant that an unfinished story is awaiting me. My eye falls on that cloud there, which has the shape of a grand piano; I instantly make a mental note that I must remember to mention in my story a cloud floating by that looked like a grand piano. I smell heliotrope; I mutter to myself: a sickly smell, the colour worn by widows; I must remember that in writing my next description of a summer evening. I catch an idea in every sentence of yours or of my own, and hasten to lock all these treasures in my literary store-room, thinking that some day they may be useful to me. As soon as I stop working I rush off to the theatre or go fishing, in the hope that I may find oblivion there, but no! Some new subject for a story is sure to come rolling through my brain like an iron cannonball. I hear my desk calling, and have to go back to it and begin to write, write, write, once more. And so it goes for everlasting. I cannot escape myself, though I feel that I am consuming my life. To prepare the honey I feed to unknown crowds, I am doomed to brush the bloom from my dearest flowers, to tear them from their stems, and trample the roots that bore them under foot. Am I not a madman? Should I not be treated by those who know me as one mentally diseased? Yet it is always the same, same old story, till I begin to think that all this praise and admiration must be a deception, that I am being hoodwinked because they know I am crazy, and I sometimes tremble lest I should be grabbed from behind and whisked off to a lunatic asylum. The best years of my youth were made one continual agony for me by my writing. A young author, especially if at first he does not make a success, feels clumsy, ill-at-ease, and superfluous in the world. His nerves are all on edge and stretched to the point of breaking; he is irresistibly attracted to literary and artistic people, and hovers about them unknown and unnoticed, fearing to look them bravely in the eye, like a man with a passion for gambling, whose money is all gone. I did not know my readers, but for some reason I imagined they were distrustful and unfriendly; I was mortally afraid of the public, and when my first play appeared, it seemed to me as if all the dark eyes in the audience were looking at it with enmity, and all the blue ones with cold indifference. Oh, how terrible it was! What agony!
30 D NINA: But don’t your inspiration and the act of creation give you moments of lofty happiness?
31 D TRIGORIN: Yes. Writing is a pleasure to me, and so is reading the proofs, but no sooner does a book leave the press than it becomes odious to me; it is not what I meant it to be; I made a mistake to write it at all; I am provoked and discouraged. Then the public reads it and says: “Yes, it is clever and pretty, but not nearly as good as Tolstoi,” or “It is a lovely thing, but not as good as Turgenieff’s ‘Fathers and Sons,’” and so it will always be. To my dying day I shall hear people say: “Clever and pretty; clever and pretty,” and nothing more; and when I am gone, those that knew me will say as they pass my grave: “Here lies Trigorin, a clever writer, but he was not as good as Turgenieff.”
32 D NINA: You must excuse me, but I decline to understand what you are talking about. The fact is, you have been spoilt by your success.
33 D TRIGORIN: What success have I had? I have never pleased myself; as a writer, I do not like myself at all. The trouble is that I am made giddy, as it were, by the fumes of my brain, and often hardly know what I am writing. I love this lake, these trees, the blue heaven; nature’s voice speaks to me and wakes a feeling of passion in my heart, and I am overcome by an uncontrollable desire to write. But I am not only a painter of landscapes, I am a man of the city besides. I love my country, too, and her people; I feel that, as a writer, it is my duty to speak of their sorrows, of their future, also of science, of the rights of man, and so forth. So I write on every subject, and the public hounds me on all sides, sometimes in anger, and I race and dodge like a fox with a pack of hounds on his trail. I see life and knowledge flitting away before me. I am left behind them like a peasant who has missed his train at a station, and finally I come back to the conclusion that all I am fit for is to describe landscapes, and that whatever else I attempt rings abominably false.
34 D NINA: You work too hard to realise the importance of your writings. What if you are discontented with yourself? To others you appear a great and splendid man. If I were a writer like you I should devote my whole life to the service of the Russian people, knowing at the same time that their welfare depended on their power to rise to the heights I had attained, and the people should send me before them in a chariot of triumph.
35 D TRIGORIN: In a chariot? Do you think I am Agamemnon?
36 A ¶ They both smile.
37 D NINA: For the bliss of being a writer or an actress I could endure want, and disillusionment, and the hatred of my friends, and the pangs of my own dissatisfaction with myself; but I should demand in return fame, real, resounding fame!
38 A ¶ She covers her face with her hands.
39 D NINA: Whew! My head reels!
* 40 A ¶ From inside the house.
41 D THE VOICE OF ARKADINA: Boris! Boris!
42 D TRIGORIN: She is calling me, probably to come and pack, but I don’t want to leave this place.
43 A ¶ His eyes rest on the lake.
44 D TRIGORIN: What a blessing such beauty is!
45 D NINA: Do you see that house there, on the far shore?

### SCENE pt_seagull_12 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): TRIGORIN, NINA, ARKADINA, MASHA
1 D TRIGORIN: Yes.
2 D NINA: That was my dead mother’s home. I was born there, and have lived all my life beside this lake. I know every little island in it.
3 D TRIGORIN: This is a beautiful place to live.
4 A ¶ He catches sight of the dead sea-gull.
5 D TRIGORIN: What is that?
6 D NINA: A gull. Constantine shot it.
7 D TRIGORIN: What a lovely bird! Really, I can’t bear to go away. Can’t you persuade Irina to stay?
8 A ¶ He writes something in his note-book.
9 D NINA: What are you writing?
10 D TRIGORIN: Nothing much, only an idea that occurred to me.
11 A ¶ He puts the book back in his pocket.
12 D TRIGORIN: An idea for a short story. A young girl grows up on the shores of a lake, as you have. She loves the lake as the gulls do, and is as happy and free as they. But a man sees her who chances to come that way, and he destroys her out of idleness, as this gull here has been destroyed.
* 13 A ¶ A pause.
14 A ARKADINA appears at one of the windows.
15 D ARKADINA: Boris! Where are you?
16 D TRIGORIN: I am coming this minute.
17 A ¶ He goes toward the house, looking back at NINA.
18 A ARKADINA remains at the window.
19 D TRIGORIN: What do you want?
20 D ARKADINA: We are not going away, after all.
21 A ¶ TRIGORIN goes into the house.
22 A NINA comes forward and stands lost in thought.
23 D NINA: It is a dream!
* 24 A ¶ The curtain falls.
* 25 A ¶ The dining-room of SORIN’S house.
* 26 A Doors open out of it to the right and left.
* 27 A A table stands in the centre of the room.
* 28 A Trunks and boxes encumber the floor, and preparations for departure are evident.
29 A TRIGORIN is sitting at a table eating his breakfast, and MASHA is standing beside him .
30 D MASHA: I am telling you all these things because you write books and they may be useful to you. I tell you honestly, I should not have lived another day if he had wounded himself fatally. Yet I am courageous; I have decided to tear this love of mine out of my heart by the roots.
31 D TRIGORIN: How will you do it?
32 D MASHA: By marrying Medviedenko.
33 D TRIGORIN: The school-teacher?
34 D MASHA: Yes.
35 D TRIGORIN: I don’t see the necessity for that.
36 D MASHA: Oh, if you knew what it is to love without hope for years and years, to wait for ever for something that will never come! I shall not marry for love, but marriage will at least be a change, and will bring new cares to deaden the memories of the past. Shall we have another drink?
37 D TRIGORIN: Haven’t you had enough?
38 D MASHA: Fiddlesticks!
39 A ¶ She fills a glass.
40 D MASHA: Don’t look at me with that expression on your face. Women drink oftener than you imagine, but most of them do it in secret, and not openly, as I do. They do indeed, and it is always either vodka or brandy.
41 A ¶ They touch glasses.
42 D MASHA: To your good health! You are so easy to get on with that I am sorry to see you go.
43 A ¶ They drink.
44 D TRIGORIN: And I am sorry to leave.
45 D MASHA: You should ask her to stay.
46 D TRIGORIN: She would not do that now. Her son has been behaving outrageously. First he attempted suicide, and now I hear he is going to challenge me to a duel, though what his provocation may be I can’t imagine. He is always sulking and sneering and preaching about a new form of art, as if the field of art were not large enough to accommodate both old and new without the necessity of jostling.
47 D MASHA: It is jealousy. However, that is none of my business.
* 48 A ¶ A pause.
49 A JACOB walks through the room carrying a trunk; NINA comes in and stands by the window.
50 D MASHA: That schoolteacher of mine is none too clever, but he is very good, poor man, and he loves me dearly, and I am sorry for him. However, let me say good-bye and wish you a pleasant journey. Remember me kindly in your thoughts.
51 A ¶ She shakes hands with him.
52 D MASHA: Thanks for your goodwill. Send me your books, and be sure to write something in them; nothing formal, but simply this: “To Masha, who, forgetful of her origin, for some unknown reason is living in this world.” Good-bye.
53 A ¶ She goes out.

### SCENE pt_seagull_13 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): TRIGORIN, NINA, ARKADINA, SORIN, JACOB
1 A ¶ Holding out her closed hand to TRIGORIN.
2 D NINA: Is it odd or even?
3 D TRIGORIN: Even.
4 A ¶ With a sigh.
5 D NINA: No, it is odd. I had only one pea in my hand. I wanted to see whether I was to become an actress or not. If only some one would advise me what to do!
6 D TRIGORIN: One cannot give advice in a case like this.
* 7 A ¶ A pause.
8 D NINA: We shall soon part, perhaps never to meet again. I should like you to accept this little medallion as a remembrance of me. I have had your initials engraved on it, and on this side is the name of one of your books: “Days and Nights.”
9 D TRIGORIN: How sweet of you!
10 A ¶ He kisses the medallion.
11 D TRIGORIN: It is a lovely present.
12 D NINA: Think of me sometimes.
13 D TRIGORIN: I shall never forget you. I shall always remember you as I saw you that bright day--do you recall it?--a week ago, when you wore your light dress, and we talked together, and the white seagull lay on the bench beside us.
14 A ¶ Lost in thought.
15 D NINA: Yes, the sea-gull.
* 16 A ¶ A pause.
17 D NINA: I beg you to let me see you alone for two minutes before you go.
18 A ¶ She goes out to the left.
19 A At the same moment ARKADINA comes in from the right, followed by SORIN in a long coat, with his orders on his breast, and by JACOB, who is busy packing.
20 D ARKADINA: Stay here at home, you poor old man. How could you pay visits with that rheumatism of yours?
21 A ¶ To TRIGORIN.
22 D ARKADINA: Who left the room just now, was it Nina?
23 D TRIGORIN: Yes.
24 D ARKADINA: I beg your pardon; I am afraid we interrupted you.
25 A ¶ She sits down.
26 D ARKADINA: I think everything is packed. I am absolutely exhausted.
27 A ¶ Reading the inscription on the medallion.
28 D TRIGORIN: “Days and Nights, page 121, lines 11 and 12.”
29 A ¶ Clearing the table.
30 D JACOB: Shall I pack your fishing-rods, too, sir?
31 D TRIGORIN: Yes, I shall need them, but you can give my books away.
32 D JACOB: Very well, sir.
33 A ¶ To himself.
34 D TRIGORIN: Page 121, lines 11 and 12.
35 A ¶ To ARKADINA.
36 D TRIGORIN: Have we my books here in the house?
37 D ARKADINA: Yes, they are in my brother’s library, in the corner cupboard.
38 D TRIGORIN: Page 121--
39 A ¶ He goes out.
40 D SORIN: You are going away, and I shall be lonely without you.
41 D ARKADINA: What would you do in town?
42 D SORIN: Oh, nothing in particular, but somehow--
43 A ¶ He laughs.
44 D SORIN: They are soon to lay the corner-stone of the new court-house here. How I should like to leap out of this minnow-pond, if but for an hour or two! I am tired of lying here like an old cigarette stump. I have ordered the carriage for one o’clock. We can go away together.
* 45 A ¶ After a pause.
46 D ARKADINA: No, you must stay here. Don’t be lonely, and don’t catch cold. Keep an eye on my boy. Take good care of him; guide him along the proper paths.

### SCENE pt_seagull_14 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): ARKADINA, SORIN, TREPLIEFF, MEDVIEDENKO
* 1 A ¶ A pause.
2 D ARKADINA: I am going away, and so shall never find out why Constantine shot himself, but I think the chief reason was jealousy, and the sooner I take Trigorin away, the better.
3 D SORIN: There were--how shall I explain it to you?--other reasons besides jealousy for his act. Here is a clever young chap living in the depths of the country, without money or position, with no future ahead of him, and with nothing to do. He is ashamed and afraid of being so idle. I am devoted to him and he is fond of me, but nevertheless he feels that he is useless here, that he is little more than a dependent in this house. It is the pride in him.
4 D ARKADINA: He is a misery to me!
5 A ¶ Thoughtfully.
6 D ARKADINA: He might possibly enter the army.
7 A ¶ Gives a whistle, and then speaks with hesitation.
8 D SORIN: It seems to me that the best thing for him would be if you were to let him have a little money. For one thing, he ought to be allowed to dress like a human being. See how he looks! Wearing the same little old coat that he has had for three years, and he doesn’t even possess an overcoat!
9 A ¶ Laughing.
10 D SORIN: And it wouldn’t hurt the youngster to sow a few wild oats; let him go abroad, say, for a time. It wouldn’t cost much.
11 D ARKADINA: Yes, but--However, I think I might manage about his clothes, but I couldn’t let him go abroad. And no, I don’t think I can let him have his clothes even, now.
12 A ¶ Decidedly.
13 D ARKADINA: I have no money at present.
14 A ¶ SORIN laughs.
15 D ARKADINA: I haven’t indeed.
16 A ¶ Whistles.
17 D SORIN: Very well. Forgive me, darling; don’t be angry. You are a noble, generous woman!
18 A ¶ Weeping.
19 D ARKADINA: I really haven’t the money.
20 D SORIN: If I had any money of course I should let him have some myself, but I haven’t even a penny. The farm manager takes my pension from me and puts it all into the farm or into cattle or bees, and in that way it is always lost for ever. The bees die, the cows die, they never let me have a horse.
21 D ARKADINA: Of course I have some money, but I am an actress and my expenses for dress alone are enough to bankrupt me.
22 D SORIN: You are a dear, and I am very fond of you, indeed I am. But something is the matter with me again.
23 A ¶ He staggers.
24 D SORIN: I feel giddy.
25 A ¶ He leans against the table.
26 D SORIN: I feel faint, and all.
27 A ¶ Frightened.
28 D ARKADINA: Peter!
29 A ¶ She tries to support him.
30 D ARKADINA: Peter! dearest!
31 A ¶ She calls.
32 D ARKADINA: Help! Help!
33 A ¶ TREPLIEFF and MEDVIEDENKO come in; TREPLIEFF has a bandage around his head.
34 D ARKADINA: He is fainting!
35 D SORIN: I am all right.
36 A ¶ He smiles and drinks some water.
37 D SORIN: It is all over now.
38 A ¶ To his mother.
39 D TREPLIEFF: Don’t be frightened, mother, these attacks are not dangerous; my uncle often has them now.
40 A ¶ To his uncle.
41 D TREPLIEFF: You must go and lie down, Uncle.
42 D SORIN: Yes, I think I shall, for a few minutes. I am going to Moscow all the same, but I shall lie down a bit before I start.
43 A ¶ He goes out leaning on his cane.
44 A ¶ Giving him his arm.
45 D MEDVIEDENKO: Do you know this riddle? On four legs in the morning; on two legs at noon; and on three legs in the evening?

### SCENE pt_seagull_15 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): SORIN, MEDVIEDENKO, ARKADINA, TREPLIEFF
1 A ¶ Laughing.
2 D SORIN: Yes, exactly, and on one’s back at night. Thank you, I can walk alone.
3 D MEDVIEDENKO: Dear me, what formality!
4 A ¶ He and SORIN go out.
5 D ARKADINA: He gave me a dreadful fright.
6 D TREPLIEFF: It is not good for him to live in the country. Mother, if you would only untie your purse-strings for once, and lend him a thousand roubles! He could then spend a whole year in town.
7 D ARKADINA: I have no money. I am an actress and not a banker.
* 8 A ¶ A pause.
9 D TREPLIEFF: Please change my bandage for me, mother, you do it so gently.
10 A ¶ ARKADINA goes to the cupboard and takes out a box of bandages and a bottle of iodoform.
11 D ARKADINA: The doctor is late.
12 D TREPLIEFF: Yes, he promised to be here at nine, and now it is noon already.
13 D ARKADINA: Sit down.
14 A ¶ She takes the bandage off his head.
15 D ARKADINA: You look as if you had a turban on. A stranger that was in the kitchen yesterday asked to what nationality you belonged. Your wound is almost healed.
16 A ¶ She kisses his head.
17 D ARKADINA: You won’t be up to any more of these silly tricks again, will you, when I am gone?
18 D TREPLIEFF: No, mother. I did that in a moment of insane despair, when I had lost all control over myself. It will never happen again.
19 A ¶ He kisses her hand.
20 D TREPLIEFF: Your touch is golden. I remember when you were still acting at the State Theatre, long ago, when I was still a little chap, there was a fight one day in our court, and a poor washerwoman was almost beaten to death. She was picked up unconscious, and you nursed her till she was well, and bathed her children in the washtubs. Have you forgotten it?
21 D ARKADINA: Yes, entirely.
22 A ¶ She puts on a new bandage.
23 D TREPLIEFF: Two ballet dancers lived in the same house, and they used to come and drink coffee with you.
24 D ARKADINA: I remember that.
25 D TREPLIEFF: They were very pious.
* 26 A ¶ A pause.
27 D TREPLIEFF: I love you again, these last few days, as tenderly and trustingly as I did as a child. I have no one left me now but you. Why, why do you let yourself be controlled by that man?
28 D ARKADINA: You don’t understand him, Constantine. He has a wonderfully noble personality.
29 D TREPLIEFF: Nevertheless, when he has been told that I wish to challenge him to a duel his nobility does not prevent him from playing the coward. He is about to beat an ignominious retreat.
30 D ARKADINA: What nonsense! I have asked him myself to go.
31 D TREPLIEFF: A noble personality indeed! Here we are almost quarrelling over him, and he is probably in the garden laughing at us at this very moment, or else enlightening Nina’s mind and trying to persuade her into thinking him a man of genius.
32 D ARKADINA: You enjoy saying unpleasant things to me. I have the greatest respect for that man, and I must ask you not to speak ill of him in my presence.
33 D TREPLIEFF: I have no respect for him at all. You want me to think him a genius, as you do, but I refuse to lie: his books make me sick.
34 D ARKADINA: You envy him. There is nothing left for people with no talent and mighty pretensions to do but to criticise those who are really gifted. I hope you enjoy the consolation it brings.
35 A ¶ With irony.
36 D TREPLIEFF: Those who are really gifted, indeed!
37 A ¶ Angrily.
38 D TREPLIEFF: I am cleverer than any of you, if it comes to that!
39 A ¶ He tears the bandage off his head.
40 D TREPLIEFF: You are the slaves of convention, you have seized the upper hand and now lay down as law everything that you do; all else you strangle and trample on. I refuse to accept your point of view, yours and his, I refuse!
41 D ARKADINA: That is the talk of a decadent.
42 D TREPLIEFF: Go back to your beloved stage and act the miserable ditch-water plays you so much admire!
43 D ARKADINA: I never acted in a play like that in my life. You couldn’t write even the trashiest music-hall farce, you idle good-for-nothing!
44 D TREPLIEFF: Miser!
45 D ARKADINA: Rag-bag!

### SCENE pt_seagull_17 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): TRIGORIN, ARKADINA, SHAMRAEFF
1 D TRIGORIN: I am irresistibly impelled toward her. It may be that this is just what I need.
2 D ARKADINA: What, the love of a country girl? Oh, how little you know yourself!
3 D TRIGORIN: People sometimes walk in their sleep, and so I feel as if I were asleep, and dreaming of her as I stand here talking to you. My imagination is shaken by the sweetest and most glorious visions. Release me!
4 A ¶ Shuddering.
5 D ARKADINA: No, no! I am only an ordinary woman; you must not say such things to me. Do not torment me, Boris; you frighten me.
6 D TRIGORIN: You could be an extraordinary woman if you only would. Love alone can bring happiness on earth, love the enchanting, the poetical love of youth, that sweeps away the sorrows of the world. I had no time for it when I was young and struggling with want and laying siege to the literary fortress, but now at last this love has come to me. I see it beckoning; why should I fly?
7 A ¶ With anger.
8 D ARKADINA: You are mad!
9 D TRIGORIN: Release me.
10 D ARKADINA: You have all conspired together to torture me to-day.
11 A ¶ She weeps.
12 A ¶ Clutching his head desperately.
13 D TRIGORIN: She doesn’t understand me! She won’t understand me!
14 D ARKADINA: Am I then so old and ugly already that you can talk to me like this without any shame about another woman?
15 A ¶ She embraces and kisses him.
16 D ARKADINA: Oh, you have lost your senses! My splendid, my glorious friend, my love for you is the last chapter of my life.
17 A ¶ She falls on her knees.
18 D ARKADINA: You are my pride, my joy, my light.
19 A ¶ She embraces his knees.
20 D ARKADINA: I could never endure it should you desert me, if only for an hour; I should go mad. Oh, my wonder, my marvel, my king!
21 D TRIGORIN: Some one might come in.
22 A ¶ He helps her to rise.
23 D ARKADINA: Let them come! I am not ashamed of my love.
24 A ¶ She kisses his hands.
25 D ARKADINA: My jewel! My despair! You want to do a foolish thing, but I don’t want you to do it. I shan’t let you do it!
26 A ¶ She laughs.
27 D ARKADINA: You are mine, you are mine! This forehead is mine, these eyes are mine, this silky hair is mine. All your being is mine. You are so clever, so wise, the first of all living writers; you are the only hope of your country. You are so fresh, so simple, so deeply humourous. You can bring out every feature of a man or of a landscape in a single line, and your characters live and breathe. Do you think that these words are but the incense of flattery? Do you think I am not speaking the truth? Come, look into my eyes; look deep; do you find lies there? No, you see that I alone know how to treasure you. I alone tell you the truth. Oh, my very dear, you will go with me? You will? You will not forsake me?
28 D TRIGORIN: I have no will of my own; I never had. I am too indolent, too submissive, too phlegmatic, to have any. Is it possible that women like that? Take me. Take me away with you, but do not let me stir a step from your side.
29 A ¶ To herself.
30 D ARKADINA: Now he is mine!
31 A ¶ Carelessly, as if nothing unusual had happened.
32 D ARKADINA: Of course you must stay here if you really want to. I shall go, and you can follow in a week’s time. Yes, really, why should you hurry away?
33 D TRIGORIN: Let us go together.
34 D ARKADINA: As you like. Let us go together then.
* 35 A ¶ A pause.
36 A TRIGORIN writes something in his note-book.
37 D ARKADINA: What are you writing?
38 D TRIGORIN: A happy expression I heard this morning: “A grove of maiden pines.” It may be useful.
39 A ¶ He yawns.
40 D TRIGORIN: So we are really off again, condemned once more to railway carriages, to stations and restaurants, to Hamburger steaks and endless arguments!
41 A ¶ SHAMRAEFF comes in.
42 D SHAMRAEFF: I am sorry to have to inform you that your carriage is at the door. It is time to start, honoured madam, the train leaves at two-five. Would you be kind enough, madam, to remember to inquire for me where Suzdaltzeff the actor is now? Is he still alive, I wonder? Is he well? He and I have had many a jolly time together. He was inimitable in “The Stolen Mail.” A tragedian called Izmailoff was in the same company, I remember, who was also quite remarkable. Don’t hurry, madam, you still have five minutes. They were both of them conspirators once, in the same melodrama, and one night when in the course of the play they were suddenly discovered, instead of saying “We have been trapped!” Izmailoff cried out: “We have been rapped!”
43 A ¶ He laughs.
44 D SHAMRAEFF: Rapped!
45 A ¶ While he has been talking JACOB has been busy with the trunks, and the maid has brought ARKADINA her hat, coat, parasol, and gloves.
46 A The cook looks hesitatingly through the door on the right, and finally comes into the room.
47 A PAULINA comes in.
48 A MEDVIEDENKO comes in.
49 A ¶ Presenting ARKADINA with a little basket.

### SCENE pt_seagull_18 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): PAULINA, ARKADINA, SORIN, MEDVIEDENKO, JACOB, THE COOK, SHAMRAEFF, TRIGORIN, NINA, MASHA
1 D PAULINA: Here are some plums for the journey. They are very sweet ones. You may want to nibble something good on the way.
2 D ARKADINA: You are very kind, Paulina.
3 D PAULINA: Good-bye, my dearie. If things have not been quite as you could have wished, please forgive us.
4 A ¶ She weeps.
5 D ARKADINA: It has been delightful, delightful. You mustn’t cry.
6 A ¶ SORIN comes in through the door on the left, dressed in a long coat with a cape, and carrying his hat and cane.
7 A He crosses the room.
8 D SORIN: Come, sister, it is time to start, unless you want to miss the train. I am going to get into the carriage.
9 A ¶ He goes out.
10 D MEDVIEDENKO: I shall walk quickly to the station and see you off there.
11 A ¶ He goes out.
12 D ARKADINA: Good-bye, all! We shall meet again next summer if we live.
13 A ¶ The maid servant, JACOB, and the cook kiss her hand.
14 D ARKADINA: Don’t forget me.
15 A ¶ She gives the cook a rouble.
16 D ARKADINA: There is a rouble for all three of you.
17 D THE COOK: Thank you, mistress; a pleasant journey to you.
18 D JACOB: God bless you, mistress.
19 D SHAMRAEFF: Send us a line to cheer us up.
20 A ¶ TO TRIGORIN.
21 D SHAMRAEFF: Good-bye, sir.
22 D ARKADINA: Where is Constantine? Tell him I am starting. I must say good-bye to him.
23 A ¶ To JACOB.
24 D ARKADINA: I gave the cook a rouble for all three of you.
25 A ¶ All go out through the door on the right.
* 26 A The stage remains empty.
* 27 A Sounds of farewell are heard.
28 A The maid comes running back to fetch the basket of plums which has been forgotten.
29 A TRIGORIN comes back.
30 D TRIGORIN: I had forgotten my cane. I think I left it on the terrace.
31 A ¶ He goes toward the door on the right and meets NINA, who comes in at that moment.
32 D TRIGORIN: Is that you? We are off.
33 D NINA: I knew we should meet again.
34 A ¶ With emotion.
35 D NINA: I have come to an irrevocable decision, the die is cast: I am going on the stage. I am deserting my father and abandoning everything. I am beginning life anew. I am going, as you are, to Moscow. We shall meet there.
36 A ¶ Glancing about him.
37 D TRIGORIN: Go to the Hotel Slavianski Bazar. Let me know as soon as you get there. I shall be at the Grosholski House in Moltchanofka Street. I must go now.
* 38 A ¶ A pause.
39 D NINA: Just one more minute!
40 A ¶ In a low voice.
41 D TRIGORIN: You are so beautiful! What bliss to think that I shall see you again so soon!
42 A ¶ She sinks on his breast.
43 D TRIGORIN: I shall see those glorious eyes again, that wonderful, ineffably tender smile, those gentle features with their expression of angelic purity! My darling!
44 A ¶ A prolonged kiss.
* 45 A ¶ The curtain falls.
* 46 A ¶ Two years elapse between the third and fourth acts.
* 47 A ¶ A sitting-room in SORIN’S house, which has been converted into a writing-room for TREPLIEFF.
* 48 A To the right and left are doors leading into inner rooms, and in the centre is a glass door opening onto a terrace.
* 49 A Besides the usual furniture of a sitting-room there is a writing-desk in the right-hand corner of the room.
* 50 A There is a Turkish divan near the door on the left, and shelves full of books stand against the walls.
* 51 A Books are lying scattered about on the windowsills and chairs.
* 52 A It is evening.
* 53 A The room is dimly lighted by a shaded lamp on a table.
* 54 A The wind moans in the tree tops and whistles down the chimney.
* 55 A The watchman in the garden is heard sounding his rattle.
56 A MEDVIEDENKO and MASHA come in .
57 A ¶ Calling TREPLIEFF.
58 D MASHA: Mr. Constantine, where are you?
59 A ¶ Looking about her.

### SCENE pt_seagull_19 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): MASHA, MEDVIEDENKO, PAULINA
1 D MASHA: There is no one here. His old uncle is forever asking for Constantine, and can’t live without him for an instant.
2 D MEDVIEDENKO: He dreads being left alone.
3 A ¶ Listening to the wind.
4 D MEDVIEDENKO: This is a wild night. We have had this storm for two days.
5 A ¶ Turning up the lamp.
6 D MASHA: The waves on the lake are enormous.
7 D MEDVIEDENKO: It is very dark in the garden. Do you know, I think that old theatre ought to be knocked down. It is still standing there, naked and hideous as a skeleton, with the curtain flapping in the wind. I thought I heard a voice weeping in it as I passed there last night.
8 D MASHA: What an idea!
* 9 A ¶ A pause.
10 D MEDVIEDENKO: Come home with me, Masha.
11 A ¶ Shaking her head.
12 D MASHA: I shall spend the night here.
13 A ¶ Imploringly.
14 D MEDVIEDENKO: Do come, Masha. The baby must be hungry.
15 D MASHA: Nonsense, Matriona will feed it.
* 16 A ¶ A pause.
17 D MEDVIEDENKO: It is a pity to leave him three nights without his mother.
18 D MASHA: You are getting too tiresome. You used sometimes to talk of other things besides home and the baby, home and the baby. That is all I ever hear from you now.
19 D MEDVIEDENKO: Come home, Masha.
20 D MASHA: You can go home if you want to.
21 D MEDVIEDENKO: Your father won’t give me a horse.
22 D MASHA: Yes, he will; ask him.
23 D MEDVIEDENKO: I think I shall. Are you coming home to-morrow?
24 D MASHA: Yes, yes, to-morrow.
25 A ¶ She takes snuff.
26 A TREPLIEFF and PAULINA come in.
27 A TREPLIEFF is carrying some pillows and a blanket, and PAULINA is carrying sheets and pillow cases.
28 A They lay them on the divan, and TREPLIEFF goes and sits down at his desk.
29 D MASHA: Who is that for, mother?
30 D PAULINA: Mr. Sorin asked to sleep in Constantine’s room to-night.
31 D MASHA: Let me make the bed.
32 A ¶ She makes the bed.
33 A PAULINA goes up to the desk and looks at the manuscripts lying on it. [A pause.]
34 D MEDVIEDENKO: Well, I am going. Good-bye, Masha.
35 A ¶ He kisses his wife’s hand.
36 D MEDVIEDENKO: Good-bye, mother.
37 A ¶ He tries to kiss his mother-in-law’s hand.
38 A ¶ Crossly.
39 D PAULINA: Be off, in God’s name!
40 A ¶ TREPLIEFF shakes hands with him in silence, and MEDVIEDENKO goes out.
41 A ¶ Looking at the manuscripts.
42 D PAULINA: No one ever dreamed, Constantine, that you would one day turn into a real author. The magazines pay you well for your stories.
43 A ¶ She strokes his hair.
44 D PAULINA: You have grown handsome, too. Dear, kind Constantine, be a little nicer to my Masha.
45 A ¶ Still making the bed.
46 D MASHA: Leave him alone, mother.
47 D PAULINA: She is a sweet child.
* 48 A ¶ A pause.
49 D PAULINA: A woman, Constantine, asks only for kind looks. I know that from experience.

### SCENE pt_seagull_20 | INT. SEAGULL - CONTINUOUS
Detected names (may be incomplete or contain aliases): MASHA, PAULINA, DORN, MEDVIEDENKO, SORIN
1 A ¶ TREPLIEFF gets up from his desk and goes out without a word.
2 D MASHA: There now! You have vexed him. I told you not to bother him.
3 D PAULINA: I am sorry for you, Masha.
4 D MASHA: Much I need your pity!
5 D PAULINA: My heart aches for you. I see how things are, and understand.
6 D MASHA: You see what doesn’t exist. Hopeless love is only found in novels. It is a trifle; all one has to do is to keep a tight rein on oneself, and keep one’s head clear. Love must be plucked out the moment it springs up in the heart. My husband has been promised a school in another district, and when we have once left this place I shall forget it all. I shall tear my passion out by the roots.
* 7 A ¶ The notes of a melancholy waltz are heard in the distance.
8 D PAULINA: Constantine is playing. That means he is sad.
9 A ¶ MASHA silently waltzes a few turns to the music.
10 D MASHA: The great thing, mother, is not to have him continually in sight. If my Simon could only get his remove I should forget it all in a month or two. It is a trifle.
11 A ¶ DORN and MEDVIEDENKO come in through the door on the left, wheeling SORIN in an arm-chair.
12 D MEDVIEDENKO: I have six mouths to feed now, and flour is at seventy kopecks.
13 D DORN: A hard riddle to solve!
14 D MEDVIEDENKO: It is easy for you to make light of it. You are rich enough to scatter money to your chickens, if you wanted to.
15 D DORN: You think I am rich? My friend, after practising for thirty years, during which I could not call my soul my own for one minute of the night or day, I succeeded at last in scraping together one thousand roubles, all of which went, not long ago, in a trip which I took abroad. I haven’t a penny.
16 A ¶ To her husband.
17 D MASHA: So you didn’t go home after all?
18 A ¶ Apologetically.
19 D MEDVIEDENKO: How can I go home when they won’t give me a horse?
20 A ¶ Under her breath, with bitter anger.
21 D MASHA: Would I might never see your face again!
22 A ¶ SORIN in his chair is wheeled to the left-hand side of the room.
23 A PAULINA, MASHA, and DORN sit down beside him.
24 A MEDVIEDENKO stands sadly aside.
25 D DORN: What a lot of changes you have made here! You have turned this sitting-room into a library.
26 D MASHA: Constantine likes to work in this room, because from it he can step out into the garden to meditate whenever he feels like it.
* 27 A ¶ The watchman’s rattle is heard.
28 D SORIN: Where is my sister?
29 D DORN: She has gone to the station to meet Trigorin. She will soon be back.
30 D SORIN: I must be dangerously ill if you had to send for my sister.
31 A ¶ He falls silent for a moment.
32 D SORIN: A nice business this is! Here I am dangerously ill, and you won’t even give me any medicine.
33 D DORN: What shall I prescribe for you? Camomile tea? Soda? Quinine?
34 D SORIN: Don’t inflict any of your discussions on me again.
35 A ¶ He nods toward the sofa.
36 D SORIN: Is that bed for me?
37 D PAULINA: Yes, for you, sir.
38 D SORIN: Thank you.
39 A ¶ Sings.
40 D DORN: “The moon swims in the sky to-night.”
41 D SORIN: I am going to give Constantine an idea for a story. It shall be called “The Man Who Wished--L’Homme qui a voulu.” When I was young, I wished to become an author; I failed. I wished to be an orator; I speak abominably,
42 A ¶ Exciting himself.
43 D SORIN: with my eternal “and all, and all,” dragging each sentence on and on until I sometimes break out into a sweat all over. I wished to marry, and I didn’t; I wished to live in the city, and here I am ending my days in the country, and all.
44 D DORN: You wished to become State Councillor, and--you are one!
45 A ¶ Laughing.
46 D SORIN: I didn’t try for that, it came of its own accord.
47 D DORN: Come, you must admit that it is petty to cavil at life at sixty-two years of age.
