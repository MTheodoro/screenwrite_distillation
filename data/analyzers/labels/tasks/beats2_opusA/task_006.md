You segment screenplay scenes into DRAMATIC BEATS for a screenwriting tool (timeline, mood track, outline).

A dramatic beat is one exchange of action and reaction around a single intention: a character pursues something with
one tactic, and the beat ends when the tactic, the power balance, the subject or the situation changes (a reveal, an
entrance or exit, a decision, a turn in the argument, a new attempt after a failure). Scenes usually have 3-8 beats;
a short scene can have 1-2, a long one up to ~12.
- A beat usually spans SEVERAL paragraphs and dialogue blocks. Do NOT start a beat at every paragraph or speaker change.
- Keep the setup (setting and introductions before anything is at stake) inside the first beat unless it is long
  and self-contained.
- A beat may start in the middle of an action paragraph if the turn happens there.

For each beat give:
- "start": unit number where it starts (the first content unit starts beat 1)
- "type": the coarse beat type and "fine": the best phrase for it, from this list (coarse: [fine phrases]):
  arrives: ["arrives", "bursts in", "slips in", "returns", "is introduced", "makes an entrance", "shows up unannounced", "is ushered in", "drifts in"]
  leaves: ["leaves", "storms out", "slips away", "walks out on", "is sent away", "excuses themself", "is escorted out", "abandons", "exits quietly"]
  confronts: ["confronts", "interrogates", "corners", "calls out", "challenges", "stares down", "demands answers from", "presses", "faces off with"]
  accuses: ["accuses", "blames", "implicates", "points the finger at", "charges", "exposes", "condemns", "suspects", "turns on"]
  threatens: ["threatens", "intimidates", "warns", "blackmails", "issues an ultimatum to", "menaces", "holds at gunpoint", "coerces", "looms over"]
  attacks: ["attacks", "strikes", "grabs", "shoves", "ambushes", "fights", "wrestles", "shoots at", "lunges at"]
  defends: ["defends", "protects", "shields", "stands up for", "justifies themself to", "denies to", "pushes back on", "holds the line against", "covers for"]
  flees: ["flees", "runs", "escapes", "bolts", "retreats", "hides from", "evades", "scrambles away", "slips out"]
  hides: ["hides", "conceals something", "ducks out of sight", "pockets evidence", "covers up", "keeps a secret", "lies low", "masks a feeling", "plays dead"]
  searches: ["searches", "investigates", "snoops", "rummages", "tracks", "looks for", "examines", "questions witnesses", "scans the room"]
  discovers: ["discovers", "finds a clue", "realizes", "notices", "uncovers", "stumbles on", "recognizes", "pieces it together", "catches"]
  reveals: ["reveals", "drops a bombshell on", "shows", "unmasks", "lets slip to", "breaks news to", "comes clean to", "exposes a secret to", "presents evidence to"]
  confesses: ["confesses to", "apologizes to", "admits guilt to", "opens up to", "breaks down to", "unburdens to", "owns up to", "begs forgiveness from", "comes clean to"]
  lies: ["lies to", "deceives", "bluffs", "covers a story for", "misleads", "feigns innocence to", "plays along with", "cons", "fakes it with"]
  deflects: ["deflects", "dodges", "changes the subject on", "stonewalls", "brushes off", "evades", "stalls", "shrugs off", "plays dumb with"]
  persuades: ["persuades", "convinces", "pitches to", "bargains with", "negotiates with", "recruits", "seduces", "flatters", "talks down"]
  pleads: ["pleads with", "begs", "appeals to", "asks for help from", "implores", "bargains for mercy with", "pleads innocence to", "calls for", "prays"]
  comforts: ["comforts", "reassures", "consoles", "calms", "tends to", "embraces", "encourages", "forgives", "steadies"]
  bonds: ["bonds with", "reconnects with", "confides in", "shares a moment with", "flirts with", "trusts", "reminisces with", "thanks", "teams up with"]
  jokes: ["jokes with", "teases", "banters with", "lightens the mood for", "pranks", "plays with", "charms", "amuses", "riffs with"]
  mocks: ["mocks", "taunts", "belittles", "humiliates", "provokes", "insults", "patronizes", "needles", "dismisses"]
  decides: ["decides", "commits", "makes a plan", "chooses", "refuses", "gives an order", "resigns", "accepts", "changes course"]
  observes: ["watches", "listens to", "waits", "spies on", "studies", "eavesdrops on", "keeps watch", "hesitates", "takes it in"]
  works: ["works", "cooks", "cleans", "repairs something", "drives", "prepares", "packs", "writes", "goes through routine"]
- "actor": the character driving the beat (cue name) or null; "target": who it is aimed at, or null
- "mood": the TONE of the beat as an audience feels it, one of: calm, tender, playful, joyful, hopeful, awkward, melancholy, grief, tense, suspense, ominous, fear, hostile, chaotic, triumphant, bittersweet
- "intensity": 1 (faint) to 5 (overwhelming)
- "summary": 6-15 words, present tense, what happens in the beat (names, no quotes)

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusA/group_00006.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_sisters_2 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): KULIGIN, TUZENBACH, IRINA, CHEBUTIKIN, VERSHININ
1 D KULIGIN: Speaking’s a bit difficult, eh, Ivan Romanovitch!
2 A ¶ Pats him on the shoulder.
3 D KULIGIN: Good man! In vino veritas , the ancients used to say.
4 D TUZENBACH: They keep on asking me to get up a concert in aid of the sufferers.
5 D IRINA: As if one could do anything....
6 D TUZENBACH: It might be arranged, if necessary. In my opinion Maria Sergeyevna is an excellent pianist.
7 D KULIGIN: Yes, excellent!
8 D IRINA: She’s forgotten everything. She hasn’t played for three years... or four.
9 D TUZENBACH: In this town absolutely nobody understands music, not a soul except myself, but I do understand it, and assure you on my word of honour that Maria Sergeyevna plays excellently, almost with genius.
10 D KULIGIN: You are right, Baron, I’m awfully fond of Masha. She’s very fine.
11 D TUZENBACH: To be able to play so admirably and to realize at the same time that nobody, nobody can understand you!
12 A ¶ Sighs.
13 D KULIGIN: Yes.... But will it be quite all right for her to take part in a concert?
14 A ¶ Pause.
15 D KULIGIN: You see, I don’t know anything about it. Perhaps it will even be all to the good. Although I must admit that our Director is a good man, a very good man even, a very clever man, still he has such views.... Of course it isn’t his business but still, if you wish it, perhaps I’d better talk to him.
16 A ¶ CHEBUTIKIN takes a porcelain clock into his hands and examines it.
17 D VERSHININ: I got so dirty while the fire was on, I don’t look like anybody on earth.
18 A ¶ Pause.
19 D VERSHININ: Yesterday I happened to hear, casually, that they want to transfer our brigade to some distant place. Some said to Poland, others, to Chita.
20 D TUZENBACH: I heard so, too. Well, if it is so, the town will be quite empty.
21 D IRINA: And we’ll go away, too!
22 A ¶ Drops the clock which breaks to pieces.
23 D CHEBUTIKIN: To smithereens!
24 A ¶ A pause; everybody is pained and confused.
25 A ¶ Gathering up the pieces.
26 D KULIGIN: To smash such a valuable object--oh, Ivan Romanovitch, Ivan Romanovitch! A very bad mark for your misbehaviour!
27 D IRINA: That clock used to belong to our mother.
28 D CHEBUTIKIN: Perhaps.... To your mother, your mother. Perhaps I didn’t break it; it only looks as if I broke it. Perhaps we only think that we exist, when really we don’t. I don’t know anything, nobody knows anything.
29 A ¶ At the door.
30 D CHEBUTIKIN: What are you looking at? Natasha has a little romance with Protopopov, and you don’t see it.... There you sit and see nothing, and Natasha has a little romance with Protopovov....
31 A ¶ Sings.
32 D CHEBUTIKIN: Won’t you please accept this date....
33 A ¶ Exit.
34 D VERSHININ: Yes.
35 A ¶ Laughs.
36 D VERSHININ: How strange everything really is!
37 A ¶ Pause.
38 D VERSHININ: When the fire broke out, I hurried off home; when I get there I see the house is whole, uninjured, and in no danger, but my two girls are standing by the door in just their underclothes, their mother isn’t there, the crowd is excited, horses and dogs are running about, and the girls’ faces are so agitated, terrified, beseeching, and I don’t know what else. My heart was pained when I saw those faces. My God, I thought, what these girls will have to put up with if they live long! I caught them up and ran, and still kept on thinking the one thing: what they will have to live through in this world!
39 A ¶ Fire-alarm; a pause.
40 D VERSHININ: I come here and find their mother shouting and angry.
41 A ¶ MASHA enters with a pillow and sits on the sofa.
42 D VERSHININ: And when my girls were standing by the door in just their underclothes, and the street was red from the fire, there was a dreadful noise, and I thought that something of the sort used to happen many years ago when an enemy made a sudden attack, and looted, and burned.... And at the same time what a difference there really is between the present and the past! And when a little more time has gone by, in two or three hundred years perhaps, people will look at our present life with just the same fear, and the same contempt, and the whole past will seem clumsy and dull, and very uncomfortable, and strange. Oh, indeed, what a life there will be, what a life!
43 A ¶ Laughs.
44 D VERSHININ: Forgive me, I’ve dropped into philosophy again. Please let me continue. I do awfully want to philosophize, it’s just how I feel at present.
45 A ¶ Pause.

### SCENE pd_sisters_3 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANFISA, VERSHININ, IRINA, OLGA, MASHA
1 A ¶ Kisses her.
2 D ANFISA: Well, little girl, here I am, still alive! Still alive! In the High School, together with little Olga, in her official apartments... so the Lord has appointed for my old age. Sinful woman that I am, I’ve never lived like that in my life before.... A large flat, government property, and I’ve a whole room and bed to myself. All government property. I wake up at nights and, oh God, and Holy Mother, there isn’t a happier person than I!
3 A ¶ Looks at his watch.
4 D VERSHININ: We are going soon, Olga Sergeyevna. It’s time for me to go.
5 A ¶ Pause.
6 D VERSHININ: I wish you every... every.... Where’s Maria Sergeyevna?
7 D IRINA: She’s somewhere in the garden. I’ll go and look for her.
8 D VERSHININ: If you’ll be so kind. I haven’t time.
9 D ANFISA: I’ll go and look, too.
10 A ¶ Shouts.
11 D ANFISA: Little Masha, co-ee!
12 A ¶ Goes out with IRINA down into the garden.
13 D ANFISA: Co-ee, co-ee!
14 D VERSHININ: Everything comes to an end. And so we, too, must part.
15 A ¶ Looks at his watch.
16 D VERSHININ: The town gave us a sort of farewell breakfast, we had champagne to drink and the mayor made a speech, and I ate and listened, but my soul was here all the time....
17 A ¶ Looks round the garden.
18 D VERSHININ: I’m so used to you now.
19 D OLGA: Shall we ever meet again?
20 D VERSHININ: Probably not.
21 A ¶ Pause.
22 D VERSHININ: My wife and both my daughters will stay here another two months. If anything happens, or if anything has to be done...
23 D OLGA: Yes, yes, of course. You need not worry.
24 A ¶ Pause.
25 D OLGA: To-morrow there won’t be a single soldier left in the town, it will all be a memory, and, of course, for us a new life will begin....
26 A ¶ Pause.
27 D OLGA: None of our plans are coming right. I didn’t want to be a head-mistress, but they made me one, all the same. It means there’s no chance of Moscow....
28 D VERSHININ: Well... thank you for everything. Forgive me if I’ve... I’ve said such an awful lot--forgive me for that too, don’t think badly of me.
29 A ¶ Wipes her eyes.
30 D OLGA: Why isn’t Masha coming...
31 D VERSHININ: What else can I say in parting? Can I philosophize about anything?
32 A ¶ Laughs.
33 D VERSHININ: Life is heavy. To many of us it seems dull and hopeless, but still, it must be acknowledged that it is getting lighter and clearer, and it seems that the time is not far off when it will be quite clear.
34 A ¶ Looks at his watch.
35 D VERSHININ: It’s time I went! Mankind used to be absorbed in wars, and all its existence was filled with campaigns, attacks, defeats, now we’ve outlived all that, leaving after us a great waste place, which there is nothing to fill with at present; but mankind is looking for something, and will certainly find it. Oh, if it only happened more quickly.
36 A ¶ Pause.
37 D VERSHININ: If only education could be added to industry, and industry to education.
38 A ¶ Looks at his watch.
39 D VERSHININ: It’s time I went....
40 D OLGA: Here she comes.
41 A ¶ Enter MASHA.
42 D VERSHININ: I came to say good-bye....
43 A ¶ OLGA steps aside a little, so as not to be in their way.
44 A ¶ Looking him in the face.
45 D MASHA: Good-bye.

### SCENE pd_sisters_4 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): TROFIMOV, LUBOV ANDREYEVNA, VARYA, GAEV, PISCHIN, YASHA
1 A ¶ Enter TROFIMOV in a worn student uniform and spectacles.
2 D LUBOV: What a marvellous garden! White masses of flowers, the blue sky....
3 D TROFIMOV: Lubov Andreyevna!
4 A ¶ She looks round at him.
5 D TROFIMOV: I only want to show myself, and I’ll go away.
6 A ¶ Kisses her hand warmly.
7 D TROFIMOV: I was told to wait till the morning, but I didn’t have the patience.
8 A ¶ LUBOV ANDREYEVNA looks surprised.
9 A ¶ Crying.
10 D VARYA: It’s Peter Trofimov.
11 D TROFIMOV: Peter Trofimov, once the tutor of your Grisha.... Have I changed so much?
12 A ¶ LUBOV ANDREYEVNA embraces him and cries softly.
13 A ¶ Confused.
14 D GAEV: That’s enough, that’s enough, Luba.
15 A ¶ Weeps.
16 D VARYA: But I told you, Peter, to wait till to-morrow.
17 D LUBOV: My Grisha... my boy... Grisha... my son.
18 D VARYA: What are we to do, little mother? It’s the will of God.
19 A ¶ Softly, through his tears.
20 D TROFIMOV: It’s all right, it’s all right.
21 A ¶ Still weeping.
22 D LUBOV: My boy’s dead; he was drowned. Why? Why, my friend?
23 A ¶ Softly.
24 D LUBOV: Anya’s asleep in there. I am speaking so loudly, making such a noise.... Well, Peter? What’s made you look so bad? Why have you grown so old?
25 D TROFIMOV: In the train an old woman called me a decayed gentleman.
26 D LUBOV: You were quite a boy then, a nice little student, and now your hair is not at all thick and you wear spectacles. Are you really still a student?
27 A ¶ Goes to the door.
28 D TROFIMOV: I suppose I shall always be a student.
29 A ¶ Kisses her brother, then VARYA.
30 D LUBOV: Well, let’s go to bed.... And you’ve grown older, Leonid.
31 A ¶ Follows her.
32 D PISCHIN: Yes, we’ve got to go to bed.... Oh, my gout! I’ll stay the night here. If only, Lubov Andreyevna, my dear, you could get me 240 roubles to-morrow morning--
33 D GAEV: Still the same story.
34 D PISCHIN: Two hundred and forty roubles... to pay the interest on the mortgage.
35 D LUBOV: I haven’t any money, dear man.
36 D PISCHIN: I’ll give it back... it’s a small sum....
37 D LUBOV: Well, then, Leonid will give it to you.... Let him have it, Leonid.
38 D GAEV: By all means; hold out your hand.
39 D LUBOV: Why not? He wants it; he’ll give it back.
40 A ¶ LUBOV ANDREYEVNA, TROFIMOV, PISCHIN, and FIERS go out.
41 A GAEV, VARYA, and YASHA remain.
42 D GAEV: My sister hasn’t lost the habit of throwing money about.
43 A ¶ To YASHA.
44 D GAEV: Stand off, do; you smell of poultry.
45 A ¶ Grins.
46 D YASHA: You are just the same as ever, Leonid Andreyevitch.

### SCENE pd_sisters_5 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHARLOTTA, LUBOV ANDREYEVNA, VARYA, PISCHIN, TROFIMOV, YASHA
1 D CHARLOTTA: Ein, zwei, drei .
2 A ¶ She quickly lifts up the shawl, which is hanging down.
3 A ANYA is standing behind it; she bows and runs to her mother, hugs her and runs back to the drawing-room amid general applause.
4 A ¶ Applauds.
5 D LUBOV: Bravo, bravo!
6 D CHARLOTTA: Once again! Ein, zwei, drei !
7 A ¶ Lifts the shawl.
8 A VARYA stands behind it and bows.
9 A ¶ Astonished.
10 D PISCHIN: Think of that, now.
11 D CHARLOTTA: The end!
12 A ¶ Throws the shawl at PISCHIN, curtseys and runs into the drawing-room.
13 A ¶ Runs after her.
14 D PISCHIN: Little wretch.... What? Would you?
15 A ¶ Exit.
16 D LUBOV: Leonid hasn’t come yet. I don’t understand what he’s doing so long in town! Everything must be over by now. The estate must be sold; or, if the sale never came off, then why does he stay so long?
17 A ¶ Tries to soothe her.
18 D VARYA: Uncle has bought it. I’m certain of it.
19 A ¶ Sarcastically.
20 D TROFIMOV: Oh, yes!
21 D VARYA: Grandmother sent him her authority for him to buy it in her name and transfer the debt to her. She’s doing it for Anya. And I’m certain that God will help us and uncle will buy it.
22 D LUBOV: Grandmother sent fifteen thousand roubles from Yaroslav to buy the property in her name--she won’t trust us--and that wasn’t even enough to pay the interest.
23 A ¶ Covers her face with her hands.
24 D LUBOV: My fate will be settled to-day, my fate....
25 A ¶ Teasing VARYA.
26 D TROFIMOV: Madame Lopakhin!
27 A ¶ Angry.
28 D VARYA: Eternal student! He’s already been expelled twice from the university.
29 D LUBOV: Why are you getting angry, Varya? He’s teasing you about Lopakhin, well what of it? You can marry Lopakhin if you want to, he’s a good, interesting man.... You needn’t if you don’t want to; nobody wants to force you against your will, my darling.
30 D VARYA: I do look at the matter seriously, little mother, to be quite frank. He’s a good man, and I like him.
31 D LUBOV: Then marry him. I don’t understand what you’re waiting for.
32 D VARYA: I can’t propose to him myself, little mother. People have been talking about him to me for two years now, but he either says nothing, or jokes about it. I understand. He’s getting rich, he’s busy, he can’t bother about me. If I had some money, even a little, even only a hundred roubles, I’d throw up everything and go away. I’d go into a convent.
33 D TROFIMOV: How nice!
34 A ¶ To TROFIMOV.
35 D VARYA: A student ought to have sense!
36 A ¶ Gently, in tears.
37 D VARYA: How ugly you are now, Peter, how old you’ve grown!
38 A ¶ To LUBOV ANDREYEVNA, no longer crying.
39 D VARYA: But I can’t go on without working, little mother. I want to be doing something every minute.
40 A ¶ Enter YASHA.
41 A ¶ Nearly laughing.
42 D YASHA: Epikhodov’s broken a billiard cue!
43 A ¶ Exit.
44 D VARYA: Why is Epikhodov here? Who said he could play billiards? I don’t understand these people.
45 A ¶ Exit.
46 D LUBOV: Don’t tease her, Peter, you see that she’s quite unhappy without that.
47 D TROFIMOV: She takes too much on herself, she keeps on interfering in other people’s business. The whole summer she’s given no peace to me or to Anya, she’s afraid we’ll have a romance all to ourselves. What has it to do with her? As if I’d ever given her grounds to believe I’d stoop to such vulgarity! We are above love.

### SCENE pd_sisters_6 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): LOPAKHIN, VARYA, TROFIMOV, GAEV, LUBOV ANDREYEVNA, ANYA, CHARLOTTA, ANYA’S VOICE, TROFIMOV’S VOICE, FIERS
1 A ¶ Drags an umbrella out of a bundle, and seems to be waving it about.
2 A LOPAKHIN appears to be frightened.
3 D VARYA: What are you doing?... I never thought...
4 D TROFIMOV: Come along, let’s take our seats... it’s time! The train will be in directly.
5 D VARYA: Peter, here they are, your goloshes, by that trunk.
6 A ¶ In tears.
7 D VARYA: And how old and dirty they are....
8 A ¶ Putting them on.
9 D TROFIMOV: Come on!
10 A ¶ Deeply moved, nearly crying.
11 D GAEV: The train... the station.... Cross in the middle, a white double in the corner....
12 D LUBOV: Let’s go!
13 D LOPAKHIN: Are you all here? There’s nobody else?
14 A ¶ Locks the side-door on the left.
15 D LOPAKHIN: There’s a lot of things in there. I must lock them up. Come!
16 D ANYA: Good-bye, home! Good-bye, old life!
17 D TROFIMOV: Welcome, new life!
18 A ¶ Exit with ANYA.
19 A ¶ VARYA looks round the room and goes out slowly.
20 A YASHA and CHARLOTTA, with her little dog, go out.
21 D LOPAKHIN: Till the spring, then! Come on... till we meet again!
22 A ¶ Exit.
23 A ¶ LUBOV ANDREYEVNA and GAEV are left alone.
24 A They might almost have been waiting for that.
25 A They fall into each other’s arms and sob restrainedly and quietly, fearing that somebody might hear them.
26 A ¶ In despair.
27 D GAEV: My sister, my sister....
28 D LUBOV: My dear, my gentle, beautiful orchard! My life, my youth, my happiness, good-bye! Good-bye!
29 A ¶ Gaily.
30 D ANYA’S VOICE: Mother!
31 A ¶ Gaily, excited.
32 D TROFIMOV’S VOICE: Coo-ee!
33 D LUBOV: To look at the walls and the windows for the last time.... My dead mother used to like to walk about this room....
34 D GAEV: My sister, my sister!
35 D ANYA’S VOICE: Mother!
36 D TROFIMOV’S VOICE: Coo-ee!
37 D LUBOV: We’re coming!
38 A ¶ They go out.
39 A ¶ The stage is empty.
40 A The sound of keys being turned in the locks is heard, and then the noise of the carriages going away.
41 A It is quiet.
42 A Then the sound of an axe against the trees is heard in the silence sadly and by itself.
43 A Steps are heard.
44 A FIERS comes in from the door on the right.
45 A He is dressed as usual, in a short jacket and white waistcoat; slippers on his feet.
46 A He is ill.
47 A He goes to the door and tries the handle.
48 D FIERS: It’s locked. They’ve gone away.
49 A ¶ Sits on a sofa.
50 D FIERS: They’ve forgotten about me.... Never mind, I’ll sit here.... And Leonid Andreyevitch will have gone in a light overcoat instead of putting on his fur coat....
51 A ¶ Sighs anxiously.
52 D FIERS: I didn’t see.... Oh, these young people!
53 A ¶ Mumbles something that cannot be understood.
54 D FIERS: Life’s gone on as if I’d never lived.
55 A ¶ Lying down.
56 D FIERS: I’ll lie down.... You’ve no strength left in you, nothing left at all.... Oh, you... bungler!
57 A ¶ He lies without moving.
58 A The distant sound is heard, as if from the sky, of a breaking string, dying away sadly.
59 A Silence follows it, and only the sound is heard, some way away in the orchard, of the axe falling on the trees.
