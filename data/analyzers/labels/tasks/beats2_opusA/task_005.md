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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusA/group_00005.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_dollhouse_2 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE CHILDREN, NORA, MAID, HELMER
1 D THE CHILDREN: . Mother, the stranger man has gone out through the gate.
2 D NORA: Yes, dears, I know. But, don’t tell anyone about the stranger man. Do you hear? Not even papa.
3 D CHILDREN: No, mother; but will you come and play again?
4 D NORA: No, no,—not now.
5 D CHILDREN: But, mother, you promised us.
6 D NORA: Yes, but I can’t now. Run away in; I have such a lot to do. Run away in, my sweet little darlings.
7 A ¶ She gets them into the room by degrees and shuts the door on them; then sits down on the sofa, takes up a piece of needlework and sews a few stitches, but soon stops.
8 D NORA: No!
9 A ¶ Throws down the work, gets up, goes to the hall door and calls out.
10 D NORA: Helen! bring the Tree in.
11 A ¶ Goes to the table on the left, opens a drawer, and stops again.
12 D NORA: No, no! it is quite impossible!
13 A ¶ coming in with the Tree.
14 D MAID: . Where shall I put it, ma’am?
15 D NORA: Here, in the middle of the floor.
16 D MAID: Shall I get you anything else?
17 D NORA: No, thank you. I have all I want.
18 A ¶ Exit MAID.
19 A ¶ begins dressing the tree.
20 D NORA: . A candle here-and flowers here—The horrible man! It’s all nonsense—there’s nothing wrong. The tree shall be splendid! I will do everything I can think of to please you, Torvald!—I will sing for you, dance for you—
21 A ¶ HELMER comes in with some papers under his arm.
22 D NORA: Oh! are you back already?
23 D HELMER: Yes. Has anyone been here?
24 D NORA: Here? No.
25 D HELMER: That is strange. I saw Krogstad going out of the gate.
26 D NORA: Did you? Oh yes, I forgot, Krogstad was here for a moment.
27 D HELMER: Nora, I can see from your manner that he has been here begging you to say a good word for him.
28 D NORA: Yes.
29 D HELMER: And you were to appear to do it of your own accord; you were to conceal from me the fact of his having been here; didn’t he beg that of you too?
30 D NORA: Yes, Torvald, but—
31 D HELMER: Nora, Nora, and you would be a party to that sort of thing? To have any talk with a man like that, and give him any sort of promise? And to tell me a lie into the bargain?
32 D NORA: A lie—?
33 D HELMER: Didn’t you tell me no one had been here?
34 A ¶ Shakes his finger at her.
35 D HELMER: My little songbird must never do that again. A songbird must have a clean beak to chirp with—no false notes!
36 A ¶ Puts his arm round her waist.
37 D HELMER: That is so, isn’t it? Yes, I am sure it is.
38 A ¶ Lets her go.
39 D HELMER: We will say no more about it.
40 A ¶ Sits down by the stove.
41 D HELMER: How warm and snug it is here!
42 A ¶ Turns over his papers.
43 A ¶ after a short pause, during which she busies herself with the Christmas Tree.
44 D NORA: Torvald!
45 D HELMER: Yes.

### SCENE pd_dollhouse_3 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HELMER, NORA, RANK
1 D HELMER: That’s right. Well, we will share it, Nora, as man and wife should. That is how it shall be.
2 A ¶ Caressing her.
3 D HELMER: Are you content now? There! There!—not these frightened dove’s eyes! The whole thing is only the wildest fancy!—Now, you must go and play through the Tarantella and practise with your tambourine. I shall go into the inner office and shut the door, and I shall hear nothing; you can make as much noise as you please.
4 A ¶ Turns back at the door.
5 D HELMER: And when Rank comes, tell him where he will find me.
6 A ¶ Nods to her, takes his papers and goes into his room, and shuts the door after him.
7 A ¶ bewildered with anxiety, stands as if rooted to the spot, and whispers.
8 D NORA: . He was capable of doing it. He will do it. He will do it in spite of everything.—No, not that! Never, never! Anything rather than that! Oh, for some help, some way out of it!
9 A ¶ The door-bell rings.
10 D NORA: Doctor Rank! Anything rather than that—anything, whatever it is!
11 A ¶ She puts her hands over her face, pulls herself together, goes to the door and opens it.
12 A RANK is standing without, hanging up his coat.
13 A During the following dialogue it begins to grow dark.
14 D NORA: Good day, Doctor Rank. I knew your ring. But you mustn’t go in to Torvald now; I think he is busy with something.
15 D RANK: And you?
16 A ¶ brings him in and shuts the door after him.
17 D NORA: . Oh, you know very well I always have time for you.
18 D RANK: Thank you. I shall make use of as much of it as I can.
19 D NORA: What do you mean by that? As much of it as you can?
20 D RANK: Well, does that alarm you?
21 D NORA: It was such a strange way of putting it. Is anything likely to happen?
22 D RANK: Nothing but what I have long been prepared for. But I certainly didn’t expect it to happen so soon.
23 A ¶ gripping him by the arm.
24 D NORA: . What have you found out? Doctor Rank, you must tell me.
25 A ¶ sitting down by the stove.
26 D RANK: . It is all up with me. And it can’t be helped.
27 A ¶ with a sigh of relief.
28 D NORA: . Is it about yourself?
29 D RANK: Who else? It is no use lying to one’s self. I am the most wretched of all my patients, Mrs Helmer. Lately I have been taking stock of my internal economy. Bankrupt! Probably within a month I shall lie rotting in the churchyard.
30 D NORA: What an ugly thing to say!
31 D RANK: The thing itself is cursedly ugly, and the worst of it is that I shall have to face so much more that is ugly before that. I shall only make one more examination of myself; when I have done that, I shall know pretty certainly when it will be that the horrors of dissolution will begin. There is something I want to tell you. Helmer’s refined nature gives him an unconquerable disgust at everything that is ugly; I won’t have him in my sick-room.
32 D NORA: Oh, but, Doctor Rank—
33 D RANK: I won’t have him there. Not on any account. I bar my door to him. As soon as I am quite certain that the worst has come, I shall send you my card with a black cross on it, and then you will know that the loathsome end has begun.
34 D NORA: You are quite absurd today. And I wanted you so much to be in a really good humour.
35 D RANK: With death stalking beside me?—To have to pay this penalty for another man’s sin? Is there any justice in that? And in every single family, in one way or another, some such inexorable retribution is being exacted—
36 A ¶ putting her hands over her ears.
37 D NORA: . Rubbish! Do talk of something cheerful.
38 D RANK: Oh, it’s a mere laughing matter, the whole thing. My poor innocent spine has to suffer for my father’s youthful amusements.
39 A ¶ sitting at the table on the left.
40 D NORA: . I suppose you mean that he was too partial to asparagus and pate de foie gras, don’t you?
41 D RANK: Yes, and to truffles.
42 D NORA: Truffles, yes. And oysters too, I suppose?
43 D RANK: Oysters, of course, that goes without saying.
44 D NORA: And heaps of port and champagne. It is sad that all these nice things should take their revenge on our bones.
45 D RANK: Especially that they should revenge themselves on the unlucky bones of those who have not had the satisfaction of enjoying them.
46 D NORA: Yes, that’s the saddest part of it all.
47 A ¶ with a searching look at her.

### SCENE pd_dollhouse_4 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS LINDE, NORA, HELMER, RANK
1 D MRS LINDE: And your husband keeps the key?
2 D NORA: Yes, always.
3 D MRS LINDE: Krogstad must ask for his letter back unread, he must find some pretence—
4 D NORA: But it is just at this time that Torvald generally—
5 D MRS LINDE: You must delay him. Go in to him in the meantime. I will come back as soon as I can.
6 A ¶ She goes out hurriedly through the hall door.
7 A ¶ goes to HELMER’S door, opens it and peeps in.
8 D NORA: . Torvald!
9 A ¶ from the inner room.
10 D HELMER: . Well? May I venture at last to come into my own room again? Come along, Rank, now you will see—
11 A ¶ Halting in the doorway.
12 D HELMER: But what is this?
13 D NORA: What is what, dear?
14 D HELMER: Rank led me to expect a splendid transformation.
15 A ¶ in the doorway.
16 D RANK: . I understood so, but evidently I was mistaken.
17 D NORA: Yes, nobody is to have the chance of admiring me in my dress until tomorrow.
18 D HELMER: But, my dear Nora, you look so worn out. Have you been practising too much?
19 D NORA: No, I have not practised at all.
20 D HELMER: But you will need to—
21 D NORA: Yes, indeed I shall, Torvald. But I can’t get on a bit without you to help me; I have absolutely forgotten the whole thing.
22 D HELMER: Oh, we will soon work it up again.
23 D NORA: Yes, help me, Torvald. Promise that you will! I am so nervous about it—all the people—. You must give yourself up to me entirely this evening. Not the tiniest bit of business—you mustn’t even take a pen in your hand. Will you promise, Torvald dear?
24 D HELMER: I promise. This evening I will be wholly and absolutely at your service, you helpless little mortal. Ah, by the way, first of all I will just—
25 A ¶ Goes towards the hall door.
26 D NORA: What are you going to do there?
27 D HELMER: Only see if any letters have come.
28 D NORA: No, no! don’t do that, Torvald!
29 D HELMER: Why not?
30 D NORA: Torvald, please don’t. There is nothing there.
31 D HELMER: Well, let me look.
32 A ¶ Turns to go to the letter-box.
33 A NORA, at the piano, plays the first bars of the Tarantella.
34 A HELMER stops in the doorway.
35 D HELMER: Aha!
36 D NORA: I can’t dance tomorrow if I don’t practise with you.
37 A ¶ going up to her.
38 D HELMER: . Are you really so afraid of it, dear?
39 D NORA: Yes, so dreadfully afraid of it. Let me practise at once; there is time now, before we go to dinner. Sit down and play for me, Torvald dear; criticise me, and correct me as you play.
40 D HELMER: With great pleasure, if you wish me to.
41 A ¶ Sits down at the piano.
42 A ¶ takes out of the box a tambourine and a long variegated shawl.
43 A She hastily drapes the shawl round her.
44 A Then she springs to the front of the stage and calls out.
45 D NORA: . Now play for me! I am going to dance!
46 A ¶ HELMER plays and NORA dances.
47 A RANK stands by the piano behind HELMER, and looks on.
48 A ¶ as he plays.
49 D HELMER: . Slower, slower!
50 D NORA: I can’t do it any other way.

### SCENE pd_dollhouse_5 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): RANK, HELMER, NORA
1 A ¶ outside.
2 D RANK: . It is I. May I come in for a moment?
3 A ¶ in a fretful whisper.
4 D HELMER: . Oh, what does he want now?
5 A ¶ Aloud.
6 D HELMER: Wait a minute!
7 A ¶ Unlocks the door.
8 D HELMER: Come, that’s kind of you not to pass by our door.
9 D RANK: I thought I heard your voice, and felt as if I should like to look in.
10 A ¶ With a swift glance round.
11 D RANK: Ah, yes!—these dear familiar rooms. You are very happy and cosy in here, you two.
12 D HELMER: It seems to me that you looked after yourself pretty well upstairs too.
13 D RANK: Excellently. Why shouldn’t I? Why shouldn’t one enjoy everything in this world?—at any rate as much as one can, and as long as one can. The wine was capital—
14 D HELMER: Especially the champagne.
15 D RANK: So you noticed that too? It is almost incredible how much I managed to put away!
16 D NORA: Torvald drank a great deal of champagne tonight too.
17 D RANK: Did he?
18 D NORA: Yes, and he is always in such good spirits afterwards.
19 D RANK: Well, why should one not enjoy a merry evening after a well-spent day?
20 D HELMER: Well spent? I am afraid I can’t take credit for that.
21 A ¶ clapping him on the back.
22 D RANK: . But I can, you know!
23 D NORA: Doctor Rank, you must have been occupied with some scientific investigation today.
24 D RANK: Exactly.
25 D HELMER: Just listen!—little Nora talking about scientific investigations!
26 D NORA: And may I congratulate you on the result?
27 D RANK: Indeed you may.
28 D NORA: Was it favourable, then?
29 D RANK: The best possible, for both doctor and patient—certainty.
30 A ¶ quickly and searchingly.
31 D NORA: . Certainty?
32 D RANK: Absolute certainty. So wasn’t I entitled to make a merry evening of it after that?
33 D NORA: Yes, you certainly were, Doctor Rank.
34 D HELMER: I think so too, so long as you don’t have to pay for it in the morning.
35 D RANK: Oh well, one can’t have anything in this life without paying for it.
36 D NORA: Doctor Rank—are you fond of fancy-dress balls?
37 D RANK: Yes, if there is a fine lot of pretty costumes.
38 D NORA: Tell me—what shall we two wear at the next?
39 D HELMER: Little featherbrain!—are you thinking of the next already?
40 D RANK: We two? Yes, I can tell you. You shall go as a good fairy—
41 D HELMER: Yes, but what do you suggest as an appropriate costume for that?
42 D RANK: Let your wife go dressed just as she is in everyday life.
43 D HELMER: That was really very prettily turned. But can’t you tell us what you will be?
44 D RANK: Yes, my dear friend, I have quite made up my mind about that.
45 D HELMER: Well?

### SCENE pd_dollhouse_6 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HELMER, NORA
1 D HELMER: I have it in me to become a different man.
2 D NORA: Perhaps—if your doll is taken away from you.
3 D HELMER: But to part!—to part from you! No, no, Nora, I can’t understand that idea.
4 A ¶ going out to the right.
5 D NORA: . That makes it all the more certain that it must be done.
6 A ¶ She comes back with her cloak and hat and a small bag which she puts on a chair by the table.
7 D HELMER: Nora, Nora, not now! Wait until tomorrow.
8 A ¶ putting on her cloak.
9 D NORA: . I cannot spend the night in a strange man’s room.
10 D HELMER: But can’t we live here like brother and sister—?
11 A ¶ putting on her hat.
12 D NORA: . You know very well that would not last long.
13 A ¶ Puts the shawl round her.
14 D NORA: Goodbye, Torvald. I won’t see the little ones. I know they are in better hands than mine. As I am now, I can be of no use to them.
15 D HELMER: But some day, Nora—some day?
16 D NORA: How can I tell? I have no idea what is going to become of me.
17 D HELMER: But you are my wife, whatever becomes of you.
18 D NORA: Listen, Torvald. I have heard that when a wife deserts her husband’s house, as I am doing now, he is legally freed from all obligations towards her. In any case, I set you free from all your obligations. You are not to feel yourself bound in the slightest way, any more than I shall. There must be perfect freedom on both sides. See, here is your ring back. Give me mine.
19 D HELMER: That too?
20 D NORA: That too.
21 D HELMER: Here it is.
22 D NORA: That’s right. Now it is all over. I have put the keys here. The maids know all about everything in the house—better than I do. Tomorrow, after I have left her, Christine will come here and pack up my own things that I brought with me from home. I will have them sent after me.
23 D HELMER: All over! All over!—Nora, shall you never think of me again?
24 D NORA: I know I shall often think of you, the children, and this house.
25 D HELMER: May I write to you, Nora?
26 D NORA: No—never. You must not do that.
27 D HELMER: But at least let me send you—
28 D NORA: Nothing—nothing—
29 D HELMER: Let me help you if you are in want.
30 D NORA: No. I can receive nothing from a stranger.
31 D HELMER: Nora—can I never be anything more than a stranger to you?
32 A ¶ taking her bag.
33 D NORA: . Ah, Torvald, the most wonderful thing of all would have to happen.
34 D HELMER: Tell me what that would be!
35 D NORA: Both you and I would have to be so changed that—. Oh, Torvald, I don’t believe any longer in wonderful things happening.
36 D HELMER: But I will believe in it. Tell me! So changed that—?
37 D NORA: That our life together would be a real wedlock. Goodbye.
38 A ¶ She goes out through the hall.
39 A ¶ sinks down on a chair at the door and buries his face in his hands.
40 D HELMER: . Nora! Nora!
41 A ¶ Looks round, and rises.
42 D HELMER: Empty. She is gone.
43 A ¶ A hope flashes across his mind.
44 D HELMER: The most wonderful thing of all—?
45 A ¶ The sound of a door shutting is heard from below.

### SCENE pd_earnest_0 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): ALGERNON, LANE, JACK
1 A ¶ Morning-room in Algernon’s flat in Half-Moon Street.
2 A The room is luxuriously and artistically furnished.
3 A The sound of a piano is heard in the adjoining room.
4 A ¶ Lane is arranging afternoon tea on the table, and after the music has ceased, Algernon enters.
5 D ALGERNON: Did you hear what I was playing, Lane?
6 D LANE: I didn’t think it polite to listen, sir.
7 D ALGERNON: I’m sorry for that, for your sake. I don’t play accurately—any one can play accurately—but I play with wonderful expression. As far as the piano is concerned, sentiment is my forte. I keep science for Life.
8 D LANE: Yes, sir.
9 D ALGERNON: And, speaking of the science of Life, have you got the cucumber sandwiches cut for Lady Bracknell?
10 D LANE: Yes, sir.
11 A ¶ Hands them on a salver.
12 A ¶ Inspects them, takes two, and sits down on the sofa.
13 D ALGERNON: Oh! . . . by the way, Lane, I see from your book that on Thursday night, when Lord Shoreman and Mr. Worthing were dining with me, eight bottles of champagne are entered as having been consumed.
14 D LANE: Yes, sir; eight bottles and a pint.
15 D ALGERNON: Why is it that at a bachelor’s establishment the servants invariably drink the champagne? I ask merely for information.
16 D LANE: I attribute it to the superior quality of the wine, sir. I have often observed that in married households the champagne is rarely of a first-rate brand.
17 D ALGERNON: Good heavens! Is marriage so demoralising as that?
18 D LANE: I believe it is a very pleasant state, sir. I have had very little experience of it myself up to the present. I have only been married once. That was in consequence of a misunderstanding between myself and a young person.
19 A ¶ Languidly .
20 D ALGERNON: I don’t know that I am much interested in your family life, Lane.
21 D LANE: No, sir; it is not a very interesting subject. I never think of it myself.
22 D ALGERNON: Very natural, I am sure. That will do, Lane, thank you.
23 D LANE: Thank you, sir.
24 A ¶ Lane goes out.
25 D ALGERNON: Lane’s views on marriage seem somewhat lax. Really, if the lower orders don’t set us a good example, what on earth is the use of them? They seem, as a class, to have absolutely no sense of moral responsibility.
26 A ¶ Enter Lane.
27 D LANE: Mr. Ernest Worthing.
28 A ¶ Enter Jack.
29 A ¶ Lane goes out .
30 D ALGERNON: How are you, my dear Ernest? What brings you up to town?
31 D JACK: Oh, pleasure, pleasure! What else should bring one anywhere? Eating as usual, I see, Algy!
32 A ¶ Stiffly .
33 D ALGERNON: I believe it is customary in good society to take some slight refreshment at five o’clock. Where have you been since last Thursday?
34 A ¶ Sitting down on the sofa.
35 D JACK: In the country.
36 D ALGERNON: What on earth do you do there?
37 A ¶ Pulling off his gloves .
38 D JACK: When one is in town one amuses oneself. When one is in the country one amuses other people. It is excessively boring.
39 D ALGERNON: And who are the people you amuse?
40 A ¶ Airily .
41 D JACK: Oh, neighbours, neighbours.
42 D ALGERNON: Got nice neighbours in your part of Shropshire?
43 D JACK: Perfectly horrid! Never speak to one of them.
44 D ALGERNON: How immensely you must amuse them!
45 A ¶ Goes over and takes sandwich.
46 D ALGERNON: By the way, Shropshire is your county, is it not?
47 D JACK: Eh? Shropshire? Yes, of course. Hallo! Why all these cups? Why cucumber sandwiches? Why such reckless extravagance in one so young? Who is coming to tea?

### SCENE pd_earnest_1 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): JACK, GWENDOLEN, LADY BRACKNELL
1 D JACK: You really love me, Gwendolen?
2 D GWENDOLEN: Passionately!
3 D JACK: Darling! You don’t know how happy you’ve made me.
4 D GWENDOLEN: My own Ernest!
5 D JACK: But you don’t really mean to say that you couldn’t love me if my name wasn’t Ernest?
6 D GWENDOLEN: But your name is Ernest.
7 D JACK: Yes, I know it is. But supposing it was something else? Do you mean to say you couldn’t love me then?
8 A ¶ Glibly.
9 D GWENDOLEN: Ah! that is clearly a metaphysical speculation, and like most metaphysical speculations has very little reference at all to the actual facts of real life, as we know them.
10 D JACK: Personally, darling, to speak quite candidly, I don’t much care about the name of Ernest . . . I don’t think the name suits me at all.
11 D GWENDOLEN: It suits you perfectly. It is a divine name. It has a music of its own. It produces vibrations.
12 D JACK: Well, really, Gwendolen, I must say that I think there are lots of other much nicer names. I think Jack, for instance, a charming name.
13 D GWENDOLEN: Jack? . . . No, there is very little music in the name Jack, if any at all, indeed. It does not thrill. It produces absolutely no vibrations . . . I have known several Jacks, and they all, without exception, were more than usually plain. Besides, Jack is a notorious domesticity for John! And I pity any woman who is married to a man called John. She would probably never be allowed to know the entrancing pleasure of a single moment’s solitude. The only really safe name is Ernest.
14 D JACK: Gwendolen, I must get christened at once—I mean we must get married at once. There is no time to be lost.
15 D GWENDOLEN: Married, Mr. Worthing?
16 A ¶ Astounded.
17 D JACK: Well . . . surely. You know that I love you, and you led me to believe, Miss Fairfax, that you were not absolutely indifferent to me.
18 D GWENDOLEN: I adore you. But you haven’t proposed to me yet. Nothing has been said at all about marriage. The subject has not even been touched on.
19 D JACK: Well . . . may I propose to you now?
20 D GWENDOLEN: I think it would be an admirable opportunity. And to spare you any possible disappointment, Mr. Worthing, I think it only fair to tell you quite frankly before-hand that I am fully determined to accept you.
21 D JACK: Gwendolen!
22 D GWENDOLEN: Yes, Mr. Worthing, what have you got to say to me?
23 D JACK: You know what I have got to say to you.
24 D GWENDOLEN: Yes, but you don’t say it.
25 D JACK: Gwendolen, will you marry me?
26 A ¶ Goes on his knees.
27 D GWENDOLEN: Of course I will, darling. How long you have been about it! I am afraid you have had very little experience in how to propose.
28 D JACK: My own one, I have never loved any one in the world but you.
29 D GWENDOLEN: Yes, but men often propose for practice. I know my brother Gerald does. All my girl-friends tell me so. What wonderfully blue eyes you have, Ernest! They are quite, quite, blue. I hope you will always look at me just like that, especially when there are other people present.
30 A ¶ Enter Lady Bracknell.
31 D LADY BRACKNELL: Mr. Worthing! Rise, sir, from this semi-recumbent posture. It is most indecorous.
32 D GWENDOLEN: Mamma!
33 A ¶ He tries to rise; she restrains him.
34 D GWENDOLEN: I must beg you to retire. This is no place for you. Besides, Mr. Worthing has not quite finished yet.
35 D LADY BRACKNELL: Finished what, may I ask?
36 D GWENDOLEN: I am engaged to Mr. Worthing, mamma.
37 A ¶ They rise together.
38 D LADY BRACKNELL: Pardon me, you are not engaged to any one. When you do become engaged to some one, I, or your father, should his health permit him, will inform you of the fact. An engagement should come on a young girl as a surprise, pleasant or unpleasant, as the case may be. It is hardly a matter that she could be allowed to arrange for herself . . . And now I have a few questions to put to you, Mr. Worthing. While I am making these inquiries, you, Gwendolen, will wait for me below in the carriage.
39 A ¶ Reproachfully.
40 D GWENDOLEN: Mamma!
41 D LADY BRACKNELL: In the carriage, Gwendolen!
42 A ¶ Gwendolen goes to the door.
43 A She and Jack blow kisses to each other behind Lady Bracknell’s back.
44 A Lady Bracknell looks vaguely about as if she could not understand what the noise was.
45 A Finally turns round.
46 D LADY BRACKNELL: Gwendolen, the carriage!
47 D GWENDOLEN: Yes, mamma.
48 A ¶ Goes out, looking back at Jack.

### SCENE pd_earnest_2 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, MISS PRISM, CHASUBLE
1 A ¶ Coming over very slowly.
2 D CECILY: But I don’t like German. It isn’t at all a becoming language. I know perfectly well that I look quite plain after my German lesson.
3 D MISS PRISM: Child, you know how anxious your guardian is that you should improve yourself in every way. He laid particular stress on your German, as he was leaving for town yesterday. Indeed, he always lays stress on your German when he is leaving for town.
4 D CECILY: Dear Uncle Jack is so very serious! Sometimes he is so serious that I think he cannot be quite well.
5 A ¶ Drawing herself up.
6 D MISS PRISM: Your guardian enjoys the best of health, and his gravity of demeanour is especially to be commended in one so comparatively young as he is. I know no one who has a higher sense of duty and responsibility.
7 D CECILY: I suppose that is why he often looks a little bored when we three are together.
8 D MISS PRISM: Cecily! I am surprised at you. Mr. Worthing has many troubles in his life. Idle merriment and triviality would be out of place in his conversation. You must remember his constant anxiety about that unfortunate young man his brother.
9 D CECILY: I wish Uncle Jack would allow that unfortunate young man, his brother, to come down here sometimes. We might have a good influence over him, Miss Prism. I am sure you certainly would. You know German, and geology, and things of that kind influence a man very much.
10 A ¶ Cecily begins to write in her diary.
11 A ¶ Shaking her head.
12 D MISS PRISM: I do not think that even I could produce any effect on a character that according to his own brother’s admission is irretrievably weak and vacillating. Indeed I am not sure that I would desire to reclaim him. I am not in favour of this modern mania for turning bad people into good people at a moment’s notice. As a man sows so let him reap. You must put away your diary, Cecily. I really don’t see why you should keep a diary at all.
13 D CECILY: I keep a diary in order to enter the wonderful secrets of my life. If I didn’t write them down, I should probably forget all about them.
14 D MISS PRISM: Memory, my dear Cecily, is the diary that we all carry about with us.
15 D CECILY: Yes, but it usually chronicles the things that have never happened, and couldn’t possibly have happened. I believe that Memory is responsible for nearly all the three-volume novels that Mudie sends us.
16 D MISS PRISM: Do not speak slightingly of the three-volume novel, Cecily. I wrote one myself in earlier days.
17 D CECILY: Did you really, Miss Prism? How wonderfully clever you are! I hope it did not end happily? I don’t like novels that end happily. They depress me so much.
18 D MISS PRISM: The good ended happily, and the bad unhappily. That is what Fiction means.
19 D CECILY: I suppose so. But it seems very unfair. And was your novel ever published?
20 D MISS PRISM: Alas! no. The manuscript unfortunately was abandoned.
21 A ¶ Cecily starts.
22 D MISS PRISM: I use the word in the sense of lost or mislaid. To your work, child, these speculations are profitless.
23 A ¶ Smiling.
24 D CECILY: But I see dear Dr. Chasuble coming up through the garden.
25 A ¶ Rising and advancing.
26 D MISS PRISM: Dr. Chasuble! This is indeed a pleasure.
27 A ¶ Enter Canon Chasuble.
28 D CHASUBLE: And how are we this morning? Miss Prism, you are, I trust, well?
29 D CECILY: Miss Prism has just been complaining of a slight headache. I think it would do her so much good to have a short stroll with you in the Park, Dr. Chasuble.
30 D MISS PRISM: Cecily, I have not mentioned anything about a headache.
31 D CECILY: No, dear Miss Prism, I know that, but I felt instinctively that you had a headache. Indeed I was thinking about that, and not about my German lesson, when the Rector came in.
32 D CHASUBLE: I hope, Cecily, you are not inattentive.
33 D CECILY: Oh, I am afraid I am.
34 D CHASUBLE: That is strange. Were I fortunate enough to be Miss Prism’s pupil, I would hang upon her lips.
35 A ¶ Miss Prism glares.
36 D CHASUBLE: I spoke metaphorically.—My metaphor was drawn from bees. Ahem! Mr. Worthing, I suppose, has not returned from town yet?
37 D MISS PRISM: We do not expect him till Monday afternoon.
38 D CHASUBLE: Ah yes, he usually likes to spend his Sunday in London. He is not one of those whose sole aim is enjoyment, as, by all accounts, that unfortunate young man his brother seems to be. But I must not disturb Egeria and her pupil any longer.
39 D MISS PRISM: Egeria? My name is Lætitia, Doctor.
40 A ¶ Bowing.
41 D CHASUBLE: A classical allusion merely, drawn from the Pagan authors. I shall see you both no doubt at Evensong?
42 D MISS PRISM: I think, dear Doctor, I will have a stroll with you. I find I have a headache after all, and a walk might do it good.
43 D CHASUBLE: With pleasure, Miss Prism, with pleasure. We might go as far as the schools and back.
44 D MISS PRISM: That would be delightful. Cecily, you will read your Political Economy in my absence. The chapter on the Fall of the Rupee you may omit. It is somewhat too sensational. Even these metallic problems have their melodramatic side.
45 A ¶ Goes down the garden with Dr. Chasuble.

### SCENE pd_earnest_3 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHASUBLE, MISS PRISM, CECILY, JACK, MERRIMAN, ALGERNON
1 D CHASUBLE: It’s pleasant, is it not, to see so perfect a reconciliation? I think we might leave the two brothers together.
2 D MISS PRISM: Cecily, you will come with us.
3 D CECILY: Certainly, Miss Prism. My little task of reconciliation is over.
4 D CHASUBLE: You have done a beautiful action to-day, dear child.
5 D MISS PRISM: We must not be premature in our judgments.
6 D CECILY: I feel very happy.
7 A ¶ They all go off except Jack and Algernon.
8 D JACK: You young scoundrel, Algy, you must get out of this place as soon as possible. I don’t allow any Bunburying here.
9 A ¶ Enter Merriman.
10 D MERRIMAN: I have put Mr. Ernest’s things in the room next to yours, sir. I suppose that is all right?
11 D JACK: What?
12 D MERRIMAN: Mr. Ernest’s luggage, sir. I have unpacked it and put it in the room next to your own.
13 D JACK: His luggage?
14 D MERRIMAN: Yes, sir. Three portmanteaus, a dressing-case, two hat-boxes, and a large luncheon-basket.
15 D ALGERNON: I am afraid I can’t stay more than a week this time.
16 D JACK: Merriman, order the dog-cart at once. Mr. Ernest has been suddenly called back to town.
17 D MERRIMAN: Yes, sir.
18 A ¶ Goes back into the house.
19 D ALGERNON: What a fearful liar you are, Jack. I have not been called back to town at all.
20 D JACK: Yes, you have.
21 D ALGERNON: I haven’t heard any one call me.
22 D JACK: Your duty as a gentleman calls you back.
23 D ALGERNON: My duty as a gentleman has never interfered with my pleasures in the smallest degree.
24 D JACK: I can quite understand that.
25 D ALGERNON: Well, Cecily is a darling.
26 D JACK: You are not to talk of Miss Cardew like that. I don’t like it.
27 D ALGERNON: Well, I don’t like your clothes. You look perfectly ridiculous in them. Why on earth don’t you go up and change? It is perfectly childish to be in deep mourning for a man who is actually staying for a whole week with you in your house as a guest. I call it grotesque.
28 D JACK: You are certainly not staying with me for a whole week as a guest or anything else. You have got to leave . . . by the four-five train.
29 D ALGERNON: I certainly won’t leave you so long as you are in mourning. It would be most unfriendly. If I were in mourning you would stay with me, I suppose. I should think it very unkind if you didn’t.
30 D JACK: Well, will you go if I change my clothes?
31 D ALGERNON: Yes, if you are not too long. I never saw anybody take so long to dress, and with such little result.
32 D JACK: Well, at any rate, that is better than being always over-dressed as you are.
33 D ALGERNON: If I am occasionally a little over-dressed, I make up for it by being always immensely over-educated.
34 D JACK: Your vanity is ridiculous, your conduct an outrage, and your presence in my garden utterly absurd. However, you have got to catch the four-five, and I hope you will have a pleasant journey back to town. This Bunburying, as you call it, has not been a great success for you.
35 A ¶ Goes into the house.
36 D ALGERNON: I think it has been a great success. I’m in love with Cecily, and that is everything.
37 A ¶ [Enter Cecily at the back of the garden.
38 A She picks up the can and begins to water the flowers.] But I must see her before I go, and make arrangements for another Bunbury.
39 A Ah, there she is.
40 D CECILY: Oh, I merely came back to water the roses. I thought you were with Uncle Jack.
41 D ALGERNON: He’s gone to order the dog-cart for me.
42 D CECILY: Oh, is he going to take you for a nice drive?
43 D ALGERNON: He’s going to send me away.
44 D CECILY: Then have we got to part?
45 D ALGERNON: I am afraid so. It’s a very painful parting.
46 D CECILY: It is always painful to part from people whom one has known for a very brief space of time. The absence of old friends one can endure with equanimity. But even a momentary separation from anyone to whom one has just been introduced is almost unbearable.
47 D ALGERNON: Thank you.

### SCENE pd_earnest_4 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, GWENDOLEN, MERRIMAN
1 D CECILY: Do you suggest, Miss Fairfax, that I entrapped Ernest into an engagement? How dare you? This is no time for wearing the shallow mask of manners. When I see a spade I call it a spade.
2 A ¶ Satirically.
3 D GWENDOLEN: I am glad to say that I have never seen a spade. It is obvious that our social spheres have been widely different.
4 A ¶ Enter Merriman, followed by the footman.
5 A He carries a salver, table cloth, and plate stand.
6 A Cecily is about to retort.
7 A The presence of the servants exercises a restraining influence, under which both girls chafe.
8 D MERRIMAN: Shall I lay tea here as usual, Miss?
9 A ¶ Sternly, in a calm voice.
10 D CECILY: Yes, as usual.
11 A ¶ Merriman begins to clear table and lay cloth.
12 A A long pause.
13 A Cecily and Gwendolen glare at each other.
14 D GWENDOLEN: Are there many interesting walks in the vicinity, Miss Cardew?
15 D CECILY: Oh! yes! a great many. From the top of one of the hills quite close one can see five counties.
16 D GWENDOLEN: Five counties! I don’t think I should like that; I hate crowds.
17 A ¶ Sweetly.
18 D CECILY: I suppose that is why you live in town?
19 A ¶ Gwendolen bites her lip, and beats her foot nervously with her parasol.
20 A ¶ Looking round.
21 D GWENDOLEN: Quite a well-kept garden this is, Miss Cardew.
22 D CECILY: So glad you like it, Miss Fairfax.
23 D GWENDOLEN: I had no idea there were any flowers in the country.
24 D CECILY: Oh, flowers are as common here, Miss Fairfax, as people are in London.
25 D GWENDOLEN: Personally I cannot understand how anybody manages to exist in the country, if anybody who is anybody does. The country always bores me to death.
26 D CECILY: Ah! This is what the newspapers call agricultural depression, is it not? I believe the aristocracy are suffering very much from it just at present. It is almost an epidemic amongst them, I have been told. May I offer you some tea, Miss Fairfax?
27 A ¶ With elaborate politeness.
28 D GWENDOLEN: Thank you.
29 A ¶ Aside.
30 D GWENDOLEN: Detestable girl! But I require tea!
31 A ¶ Sweetly.
32 D CECILY: Sugar?
33 A ¶ Superciliously.
34 D GWENDOLEN: No, thank you. Sugar is not fashionable any more.
35 A ¶ Cecily looks angrily at her, takes up the tongs and puts four lumps of sugar into the cup.
36 A ¶ Severely.
37 D CECILY: Cake or bread and butter?
38 A ¶ In a bored manner.
39 D GWENDOLEN: Bread and butter, please. Cake is rarely seen at the best houses nowadays.
40 A ¶ Cuts a very large slice of cake, and puts it on the tray.
41 D CECILY: Hand that to Miss Fairfax.
42 A ¶ Merriman does so, and goes out with footman.
43 A Gwendolen drinks the tea and makes a grimace.
44 A Puts down cup at once, reaches out her hand to the bread and butter, looks at it, and finds it is cake.
45 A Rises in indignation.
46 D GWENDOLEN: You have filled my tea with lumps of sugar, and though I asked most distinctly for bread and butter, you have given me cake. I am known for the gentleness of my disposition, and the extraordinary sweetness of my nature, but I warn you, Miss Cardew, you may go too far.
47 A ¶ Rising.
48 D CECILY: To save my poor, innocent, trusting boy from the machinations of any other girl there are no lengths to which I would not go.
49 D GWENDOLEN: From the moment I saw you I distrusted you. I felt that you were false and deceitful. I am never deceived in such matters. My first impressions of people are invariably right.
50 D CECILY: It seems to me, Miss Fairfax, that I am trespassing on your valuable time. No doubt you have many other calls of a similar character to make in the neighbourhood.
51 A ¶ Enter Jack.
52 A ¶ Catching sight of him.
53 D GWENDOLEN: Ernest! My own Ernest!

### SCENE pd_earnest_5 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, ALGERNON, GWENDOLEN, JACK, MERRIMAN, LADY BRACKNELL
1 D CECILY: To please me you are ready to face this fearful ordeal?
2 D ALGERNON: I am!
3 D GWENDOLEN: How absurd to talk of the equality of the sexes! Where questions of self-sacrifice are concerned, men are infinitely beyond us.
4 D JACK: We are.
5 A ¶ Clasps hands with Algernon.
6 D CECILY: They have moments of physical courage of which we women know absolutely nothing.
7 A ¶ To Jack.
8 D GWENDOLEN: Darling!
9 A ¶ To Cecily.
10 D ALGERNON: Darling!
11 A ¶ They fall into each other’s arms.
12 A ¶ Enter Merriman.
13 A When he enters he coughs loudly, seeing the situation.
14 D MERRIMAN: Ahem! Ahem! Lady Bracknell!
15 D JACK: Good heavens!
16 A ¶ Enter Lady Bracknell.
17 A The couples separate in alarm.
18 A Exit Merriman.
19 D LADY BRACKNELL: Gwendolen! What does this mean?
20 D GWENDOLEN: Merely that I am engaged to be married to Mr. Worthing, mamma.
21 D LADY BRACKNELL: Come here. Sit down. Sit down immediately. Hesitation of any kind is a sign of mental decay in the young, of physical weakness in the old.
22 A ¶ Turns to Jack.
23 D LADY BRACKNELL: Apprised, sir, of my daughter’s sudden flight by her trusty maid, whose confidence I purchased by means of a small coin, I followed her at once by a luggage train. Her unhappy father is, I am glad to say, under the impression that she is attending a more than usually lengthy lecture by the University Extension Scheme on the Influence of a permanent income on Thought. I do not propose to undeceive him. Indeed I have never undeceived him on any question. I would consider it wrong. But of course, you will clearly understand that all communication between yourself and my daughter must cease immediately from this moment. On this point, as indeed on all points, I am firm.
24 D JACK: I am engaged to be married to Gwendolen, Lady Bracknell!
25 D LADY BRACKNELL: You are nothing of the kind, sir. And now, as regards Algernon! . . . Algernon!
26 D ALGERNON: Yes, Aunt Augusta.
27 D LADY BRACKNELL: May I ask if it is in this house that your invalid friend Mr. Bunbury resides?
28 A ¶ Stammering.
29 D ALGERNON: Oh! No! Bunbury doesn’t live here. Bunbury is somewhere else at present. In fact, Bunbury is dead.
30 D LADY BRACKNELL: Dead! When did Mr. Bunbury die? His death must have been extremely sudden.
31 A ¶ Airily.
32 D ALGERNON: Oh! I killed Bunbury this afternoon. I mean poor Bunbury died this afternoon.
33 D LADY BRACKNELL: What did he die of?
34 D ALGERNON: Bunbury? Oh, he was quite exploded.
35 D LADY BRACKNELL: Exploded! Was he the victim of a revolutionary outrage? I was not aware that Mr. Bunbury was interested in social legislation. If so, he is well punished for his morbidity.
36 D ALGERNON: My dear Aunt Augusta, I mean he was found out! The doctors found out that Bunbury could not live, that is what I mean—so Bunbury died.
37 D LADY BRACKNELL: He seems to have had great confidence in the opinion of his physicians. I am glad, however, that he made up his mind at the last to some definite course of action, and acted under proper medical advice. And now that we have finally got rid of this Mr. Bunbury, may I ask, Mr. Worthing, who is that young person whose hand my nephew Algernon is now holding in what seems to me a peculiarly unnecessary manner?
38 D JACK: That lady is Miss Cecily Cardew, my ward.
39 A ¶ Lady Bracknell bows coldly to Cecily.
40 D ALGERNON: I am engaged to be married to Cecily, Aunt Augusta.
41 D LADY BRACKNELL: I beg your pardon?
42 D CECILY: Mr. Moncrieff and I are engaged to be married, Lady Bracknell.
43 A ¶ With a shiver, crossing to the sofa and sitting down.
44 D LADY BRACKNELL: I do not know whether there is anything peculiarly exciting in the air of this particular part of Hertfordshire, but the number of engagements that go on seems to me considerably above the proper average that statistics have laid down for our guidance. I think some preliminary inquiry on my part would not be out of place. Mr. Worthing, is Miss Cardew at all connected with any of the larger railway stations in London? I merely desire information. Until yesterday I had no idea that there were any families or persons whose origin was a Terminus.
45 A ¶ Jack looks perfectly furious, but restrains himself.
46 A ¶ In a clear, cold voice.
47 D JACK: Miss Cardew is the grand-daughter of the late Mr. Thomas Cardew of 149 Belgrave Square, S.W.; Gervase Park, Dorking, Surrey; and the Sporran, Fifeshire, N.B.
48 D LADY BRACKNELL: That sounds not unsatisfactory. Three addresses always inspire confidence, even in tradesmen. But what proof have I of their authenticity?

### SCENE pd_earnest_6 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): JACK, ALGERNON, GWENDOLEN, CECILY, LADY BRACKNELL, CHASUBLE, MISS PRISM
1 A ¶ Seizes hold of Algernon.
2 D JACK: Dr. Chasuble, my unfortunate brother. Miss Prism, my unfortunate brother. Gwendolen, my unfortunate brother. Algy, you young scoundrel, you will have to treat me with more respect in the future. You have never behaved to me like a brother in all your life.
3 D ALGERNON: Well, not till to-day, old boy, I admit. I did my best, however, though I was out of practice.
4 A ¶ Shakes hands.
5 A ¶ To Jack.
6 D GWENDOLEN: My own! But what own are you? What is your Christian name, now that you have become some one else?
7 D JACK: Good heavens! . . . I had quite forgotten that point. Your decision on the subject of my name is irrevocable, I suppose?
8 D GWENDOLEN: I never change, except in my affections.
9 D CECILY: What a noble nature you have, Gwendolen!
10 D JACK: Then the question had better be cleared up at once. Aunt Augusta, a moment. At the time when Miss Prism left me in the hand-bag, had I been christened already?
11 D LADY BRACKNELL: Every luxury that money could buy, including christening, had been lavished on you by your fond and doting parents.
12 D JACK: Then I was christened! That is settled. Now, what name was I given? Let me know the worst.
13 D LADY BRACKNELL: Being the eldest son you were naturally christened after your father.
14 A ¶ Irritably.
15 D JACK: Yes, but what was my father’s Christian name?
16 A ¶ Meditatively.
17 D LADY BRACKNELL: I cannot at the present moment recall what the General’s Christian name was. But I have no doubt he had one. He was eccentric, I admit. But only in later years. And that was the result of the Indian climate, and marriage, and indigestion, and other things of that kind.
18 D JACK: Algy! Can’t you recollect what our father’s Christian name was?
19 D ALGERNON: My dear boy, we were never even on speaking terms. He died before I was a year old.
20 D JACK: His name would appear in the Army Lists of the period, I suppose, Aunt Augusta?
21 D LADY BRACKNELL: The General was essentially a man of peace, except in his domestic life. But I have no doubt his name would appear in any military directory.
22 D JACK: The Army Lists of the last forty years are here. These delightful records should have been my constant study.
23 A ¶ Rushes to bookcase and tears the books out.
24 D JACK: M. Generals . . . Mallam, Maxbohm, Magley, what ghastly names they have—Markby, Migsby, Mobbs, Moncrieff! Lieutenant 1840, Captain, Lieutenant-Colonel, Colonel, General 1869, Christian names, Ernest John.
25 A ¶ Puts book very quietly down and speaks quite calmly.
26 D JACK: I always told you, Gwendolen, my name was Ernest, didn’t I? Well, it is Ernest after all. I mean it naturally is Ernest.
27 D LADY BRACKNELL: Yes, I remember now that the General was called Ernest, I knew I had some particular reason for disliking the name.
28 D GWENDOLEN: Ernest! My own Ernest! I felt from the first that you could have no other name!
29 D JACK: Gwendolen, it is a terrible thing for a man to find out suddenly that all his life he has been speaking nothing but the truth. Can you forgive me?
30 D GWENDOLEN: I can. For I feel that you are sure to change.
31 D JACK: My own one!
32 A ¶ To Miss Prism.
33 D CHASUBLE: Lætitia!
34 A ¶ Embraces her.
35 A ¶ Enthusiastically.
36 D MISS PRISM: Frederick! At last!
37 D ALGERNON: Cecily!
38 A ¶ Embraces her.
39 D ALGERNON: At last!
40 D JACK: Gwendolen!
41 A ¶ Embraces her.
42 D JACK: At last!
43 D LADY BRACKNELL: My nephew, you seem to be displaying signs of triviality.
44 D JACK: On the contrary, Aunt Augusta, I’ve now realised for the first time in my life the vital Importance of Being Earnest.
45 A ¶ TABLEAU

### SCENE pd_sisters_0 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): OLGA, MASHA, IRINA, BARON TUZENBACH, CHEBUTIKIN, SOLENI
1 A ¶ In PROSOROV’S house.
2 A A sitting-room with pillars; behind is seen a large dining-room.
3 A It is midday, the sun is shining brightly outside.
4 A In the dining-room the table is being laid for lunch.
5 A ¶ OLGA, in the regulation blue dress of a teacher at a girl’s high school, is walking about correcting exercise books; MASHA, in a black dress, with a hat on her knees, sits and reads a book; IRINA, in white, stands about, with a thoughtful expression.
6 D OLGA: It’s just a year since father died last May the fifth, on your name-day, Irina. It was very cold then, and snowing. I thought I would never survive it, and you were in a dead faint. And now a year has gone by and we are already thinking about it without pain, and you are wearing a white dress and your face is happy.
7 A ¶ Clock strikes twelve.
8 D OLGA: And the clock struck just the same way then.
9 A ¶ Pause.
10 D OLGA: I remember that there was music at the funeral, and they fired a volley in the cemetery. He was a general in command of a brigade but there were few people present. Of course, it was raining then, raining hard, and snowing.
11 D IRINA: Why think about it!
12 A ¶ BARON TUZENBACH, CHEBUTIKIN and SOLENI appear by the table in the dining-room, behind the pillars.
13 D OLGA: It’s so warm to-day that we can keep the windows open, though the birches are not yet in flower. Father was put in command of a brigade, and he rode out of Moscow with us eleven years ago. I remember perfectly that it was early in May and that everything in Moscow was flowering then. It was warm too, everything was bathed in sunshine. Eleven years have gone, and I remember everything as if we rode out only yesterday. Oh, God! When I awoke this morning and saw all the light and the spring, joy entered my heart, and I longed passionately to go home.
14 D CHEBUTIKIN: Will you take a bet on it?
15 D TUZENBACH: Oh, nonsense.
16 A ¶ MASHA, lost in a reverie over her book, whistles softly.
17 D OLGA: Don’t whistle, Masha. How can you!
18 A ¶ Pause.
19 D OLGA: I’m always having headaches from having to go to the High School every day and then teach till evening. Strange thoughts come to me, as if I were already an old woman. And really, during these four years that I have been working here, I have been feeling as if every day my strength and youth have been squeezed out of me, drop by drop. And only one desire grows and gains in strength...
20 D IRINA: To go away to Moscow. To sell the house, drop everything here, and go to Moscow...
21 D OLGA: Yes! To Moscow, and as soon as possible.
22 A ¶ CHEBUTIKIN and TUZENBACH laugh.
23 D IRINA: I expect Andrey will become a professor, but still, he won’t want to live here. Only poor Masha must go on living here.
24 D OLGA: Masha can come to Moscow every year, for the whole summer.
25 A ¶ MASHA is whistling gently.
26 D IRINA: Everything will be arranged, please God.
27 A ¶ Looks out of the window.
28 D IRINA: It’s nice out to-day. I don’t know why I’m so happy: I remembered this morning that it was my name-day, and I suddenly felt glad and remembered my childhood, when mother was still with us. What beautiful thoughts I had, what thoughts!
29 D OLGA: You’re all radiance to-day, I’ve never seen you look so lovely. And Masha is pretty, too. Andrey wouldn’t be bad-looking, if he wasn’t so stout; it does spoil his appearance. But I’ve grown old and very thin, I suppose it’s because I get angry with the girls at school. To-day I’m free. I’m at home. I haven’t got a headache, and I feel younger than I was yesterday. I’m only twenty-eight.... All’s well, God is everywhere, but it seems to me that if only I were married and could stay at home all day, it would be even better.
30 A ¶ Pause.
31 D OLGA: I should love my husband.
32 A ¶ To SOLENI.
33 D TUZENBACH: I’m tired of listening to the rot you talk.
34 A ¶ Entering the sitting-room.
35 D TUZENBACH: I forgot to say that Vershinin, our new lieutenant-colonel of artillery, is coming to see us to-day.
36 A ¶ Sits down to the piano.
37 D OLGA: That’s good. I’m glad.
38 D IRINA: Is he old?
39 D TUZENBACH: Oh, no. Forty or forty-five, at the very outside.
40 A ¶ Plays softly.
41 D TUZENBACH: He seems rather a good sort. He’s certainly no fool, only he likes to hear himself speak.
42 D IRINA: Is he interesting?
43 D TUZENBACH: Oh, he’s all right, but there’s his wife, his mother-in-law, and two daughters. This is his second wife. He pays calls and tells everybody that he’s got a wife and two daughters. He’ll tell you so here. The wife isn’t all there, she does her hair like a flapper and gushes extremely. She talks philosophy and tries to commit suicide every now and again, apparently in order to annoy her husband. I should have left her long ago, but he bears up patiently, and just grumbles.
44 A ¶ Enters with CHEBUTIKIN from the dining-room.
45 D SOLENI: With one hand I can only lift fifty-four pounds, but with both hands I can lift 180, or even 200 pounds. From this I conclude that two men are not twice as strong as one, but three times, perhaps even more....
46 A ¶ Reads a newspaper as he walks.
47 D CHEBUTIKIN: If your hair is coming out... take an ounce of naphthaline and hail a bottle of spirit... dissolve and use daily....
48 A ¶ Makes a note in his pocket diary.

### SCENE pd_sisters_1 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANDREY, MASHA, VERSHININ, IRINA, TUZENBACH
1 D ANDREY: You can come to-morrow and fetch these documents.... Go along....
2 A ¶ Pause.
3 D ANDREY: He’s gone.
4 A ¶ A ring.
5 D ANDREY: Yes, yes....
6 A ¶ Stretches himself and slowly goes into his own room.
7 A ¶ Behind the scene the nurse is singing a lullaby to the child.
8 A MASHA and VERSHININ come in.
9 A While they talk, a maidservant lights candles and a lamp.
10 D MASHA: I don’t know.
11 A ¶ Pause.
12 D MASHA: I don’t know. Of course, habit counts for a great deal. After father’s death, for instance, it took us a long time to get used to the absence of orderlies. But, apart from habit, it seems to me in all fairness that, however it may be in other towns, the best and most-educated people are army men.
13 D VERSHININ: I’m thirsty. I should like some tea.
14 A ¶ Glancing at her watch.
15 D MASHA: They’ll bring some soon. I was given in marriage when I was eighteen, and I was afraid of my husband because he was a teacher and I’d only just left school. He then seemed to me frightfully wise and learned and important. And now, unfortunately, that has changed.
16 D VERSHININ: Yes... yes.
17 D MASHA: I don’t speak of my husband, I’ve grown used to him, but civilians in general are so often coarse, impolite, uneducated. Their rudeness offends me, it angers me. I suffer when I see that a man isn’t quite sufficiently refined, or delicate, or polite. I simply suffer agonies when I happen to be among schoolmasters, my husband’s colleagues.
18 D VERSHININ: Yes.... It seems to me that civilians and army men are equally interesting, in this town, at any rate. It’s all the same! If you listen to a member of the local intelligentsia, whether to civilian or military, he will tell you that he’s sick of his wife, sick of his house, sick of his estate, sick of his horses.... We Russians are extremely gifted in the direction of thinking on an exalted plane, but, tell me, why do we aim so low in real life? Why?
19 D MASHA: Why?
20 D VERSHININ: Why is a Russian sick of his children, sick of his wife? And why are his wife and children sick of him?
21 D MASHA: You’re a little downhearted to-day.
22 D VERSHININ: Perhaps I am. I haven’t had any dinner, I’ve had nothing since the morning. My daughter is a little unwell, and when my girls are ill, I get very anxious and my conscience tortures me because they have such a mother. Oh, if you had seen her to-day! What a trivial personality! We began quarrelling at seven in the morning and at nine I slammed the door and went out.
23 A ¶ Pause.
24 D VERSHININ: I never speak of her, it’s strange that I bear my complaints to you alone.
25 A ¶ Kisses her hand.
26 D VERSHININ: Don’t be angry with me. I haven’t anybody but you, nobody at all....
27 A ¶ Pause.
28 D MASHA: What a noise in the oven. Just before father’s death there was a noise in the pipe, just like that.
29 D VERSHININ: Are you superstitious?
30 D MASHA: Yes.
31 D VERSHININ: That’s strange.
32 A ¶ Kisses her hand.
33 D VERSHININ: You are a splendid, wonderful woman. Splendid, wonderful! It is dark here, but I see your sparkling eyes.
34 A ¶ Sits on another chair.
35 D MASHA: There is more light here.
36 D VERSHININ: I love you, love you, love you... I love your eyes, your movements, I dream of them.... Splendid, wonderful woman!
37 A ¶ Laughing.
38 D MASHA: When you talk to me like that, I laugh; I don’t know why, for I’m afraid. Don’t repeat it, please....
39 A ¶ In an undertone.
40 D MASHA: No, go on, it’s all the same to me....
41 A ¶ Covers her face with her hands.
42 D MASHA: Somebody’s coming, let’s talk about something else.
43 A ¶ IRINA and TUZENBACH come in through the dining-room.
44 D TUZENBACH: My surname is really triple. I am called Baron Tuzenbach-Krone-Altschauer, but I am Russian and Orthodox, the same as you. There is very little German left in me, unless perhaps it is the patience and the obstinacy with which I bore you. I see you home every night.
45 D IRINA: How tired I am!
46 D TUZENBACH: And I’ll come to the telegraph office to see you home every day for ten or twenty years, until you drive me away.
47 A ¶ He sees MASHA and VERSHININ; joyfully.
