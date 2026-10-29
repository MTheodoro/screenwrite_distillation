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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnetG/group_03004.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00017 | EXT. HOT-AIR BALLOON BASKET - 400 FEET UP - DAY
Detected names (may be incomplete or contain aliases): GLORIA PENDERGAST, WINNIE OKONKWO-HART
1 A ¶ A wicker box.
2 A A burner.
3 A A county fair shrunk to a quilt far below.
4 A ¶ GLORIA PENDERGAST (60s, sun visor, clipboard) stands at one wall.
5 A Beside her, WINNIE OKONKWO-HART (20s, borrowed sweater, white knuckles on the rope).
6 A ¶ Gloria cups her hands and bellows over the side.
7 D GLORIA: Welcome, everyone! Enjoy the view!
8 A ¶ Nobody below hears.
9 A A cow looks up.
10 D WINNIE: Why are we shouting?
11 D GLORIA: Tradition.
12 A ¶ Winnie closes her eyes.
13 A The basket tilts.
14 A She opens them.
15 D WINNIE (to herself): Don't look down. Don't look down.
16 A ¶ Gloria taps her clipboard, squints at a dial, and mutters.
17 D GLORIA (to herself): Pilot never said it'd do that.
18 D WINNIE: Do what?
19 D GLORIA: Nothing. Everybody smile for the camera!
20 A ¶ There is no camera.
21 A Winnie slowly forces a smile anyway.
22 A Gloria hands her the clipboard.
23 D GLORIA [CONT'D]: Hold this. And whatever you do, don't let go of her.
24 D WINNIE: Of who?
25 A ¶ Gloria points at the burner.
26 A It hisses.

### SCENE s01056 | INT. SHUTTERED CAROUSEL PAVILION - ABANDONED AMUSEMENT PARK - NIGHT
Detected names (may be incomplete or contain aliases): DUCHESS, LAVALLE, BONES, SLIM POLLARD, PEARL
1 A ¶ Painted horses frozen mid-gallop, their gilt chipped.
2 A A pipe organ sags in the center.
3 A The roof leaks silver light.
4 A Five figures sit on the platform's edge, boots dangling.
5 A ¶ DUCHESS, 60s, tiny and elegant in a mink collar, taps a cane against a brass pole.
6 A MR. LAVALLE, 50s, dapper, pocket square, polishes a pair of rimless glasses.
7 A BONES, 30s, long and gaunt, sprawls across a bench seat with a thermos of coffee.
8 A SLIM POLLARD, 40s, round as a barrel, sits with a ledger on his knee.
9 A PEARL, 20s, the youngest, in a leather jacket with too many zippers, spins a lock-pick between her fingers.
10 D DUCHESS: Gentlemen. Miss Pearl. We are assembled.
11 D BONES: We've been assembled for an hour.
12 D DUCHESS: And now we are in session.
13 D LAVALLE: Is that a legal term?
14 D DUCHESS: It's a theatrical one.
15 D SLIM: The count is simple. Four million, in unmarked bills, locked in the carousel's center column. The man who stored it was a bad carpenter and a worse liar.
16 D PEARL: Which column? There's six.
17 D SLIM: The one that doesn't turn.
18 D LAVALLE: They all turn.
19 D SLIM: Not that one. I've watched it for three weeks.
20 D BONES: Thank God somebody watched something.
21 D PEARL: How do we get in?
22 D DUCHESS: The same way everyone gets in anywhere. We pretend we belong.
23 D LAVALLE: In a closed amusement park.
24 D DUCHESS: In a closed amusement park, at night, with permits.
25 D SLIM: Are the permits real?
26 D DUCHESS: Mr. Pollard, nothing is real. That's the pleasure of the business.
27 D BONES: Who's driving?
28 D DUCHESS: Pearl.
29 D PEARL: I thought I was the lock.
30 D DUCHESS: You are both. We are a small company.
31 D PEARL (grinning): Then I want a bigger cut.
32 D DUCHESS: You'll have a bigger bow.
33 D LAVALLE: Are we agreed on the split?
34 D SLIM: Equal shares. Five ways.
35 D BONES: Six.
36 D DUCHESS: Six?
37 D BONES: There's a sixth share in Mr. Lavalle's ledger. Somebody we've never met.
38 A ¶ Silence.
39 A The carousel lamps flicker.
40 A Slim turns the ledger toward the light.
41 A Pearl stops spinning the pick.
42 D DUCHESS (very softly): Mr. Lavalle. You told me nobody else knew.
43 D LAVALLE (polishing): I told you what you needed to hear.
44 A ¶ He puts on his glasses.

### SCENE s01073 | INT. COUNTY COURTHOUSE - LOADING DOCK - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NADIA BRENNAN, ATTORNEY ELI MORROW, JUDGE OKONKWO-REYES, DEPUTY HALE
1 A ¶ Concrete.
2 A Rolling carts.
3 A Evidence boxes stacked to the ceiling.
4 A A freight elevator groans.
5 A ¶ ATTORNEY NADIA BRENNAN, 30s, sharp suit, sneakers, drags a box off a cart.
6 A ATTORNEY ELI MORROW, 50s, rumpled, waits with a clipboard.
7 A Opposing counsel.
8 A Neither smiles.
9 D ELI: You're late.
10 D NADIA: Your clerk lost the key.
11 D ELI: She never loses keys.
12 D NADIA: She lost this one.
13 A ¶ She pops the lid.
14 A Inside: a ledger, water-stained.
15 A Eli goes still.
16 D ELI: That's not on the inventory.
17 D NADIA: It is now.
18 A ¶ JUDGE OKONKWO-REYES, 60s, robe over a windbreaker, appears at the elevator door.
19 A Cigarette unlit between her fingers.
20 A Nadia and Eli straighten.
21 D JUDGE OKONKWO-REYES: Counselors. Tell me why a sealed ledger is sitting on a dock.
22 D ELI: Your Honor, she tampered with a chain of custody.
23 D NADIA: He moved it. I found it.
24 D JUDGE OKONKWO-REYES: She found it. He moved it. Wonderful.
25 A ¶ Eli lunges for the ledger.
26 A Nadia jerks it away.
27 A Boxes topple.
28 A A bailiff, DEPUTY HALE, 20s, bursts in from the stairwell, hand on holster.
29 D DEPUTY HALE: Freeze! Everybody!
30 A ¶ All three freeze.
31 A Eli with one hand out.
32 A Nadia clutching the ledger.
33 A The Judge, calm, lights her cigarette.
34 D JUDGE OKONKWO-REYES: Deputy. Stand down. They're lawyers. They only bite on the record.
35 A ¶ Hale lowers his hand.
36 A Exhales.
37 D JUDGE OKONKWO-REYES [CONT'D]: Give me the ledger. Both of you. My chambers, ten minutes.
38 A ¶ Nadia hands it over.
39 A Eli sags against a cart.
40 D ELI: She'll bury us.
41 D NADIA: Not her. She's deciding who gets to dig.
42 A ¶ The elevator doors close on the Judge.
43 A Deputy Hale picks up a fallen box.
44 A Sets it carefully back on the stack.

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

### SCENE s01054 | INT. ROADSIDE MOTEL - ROOM 9 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PROPERTY LENA MARSH
1 A ¶ Pink bedspread.
2 A Wood-paneled walls.
3 A A TV bolted to the dresser, off.
4 A A lamp with a torn shade.
5 A Rain taps the window like fingertips.
6 A ¶ A WOMAN, 30s, wet raincoat, dark circles under her eyes, locks the door.
7 A Slides the chain.
8 A Pulls the curtains shut.
9 A She is alone, and she's checking the room the way a person checks who has already been surprised once.
10 A ¶ She opens the closet.
11 A Empty hangers.
12 A The bathroom.
13 A Empty tub.
14 A Under the bed.
15 A Dust, a lost sock.
16 A ¶ She sits on the edge of the bed and takes a small tape recorder from her bag.
17 A She presses RECORD.
18 D WOMAN (into recorder): Test. Test.
19 A ¶ She stops.
20 A Plays it back.
21 A Her own voice, tinny.
22 D WOMAN [V.O.] (tape): Test. Test.
23 A ¶ She nods.
24 A Records again.
25 D WOMAN: Day one. Motel off Route 9. Nobody followed me. I think.
26 A ¶ She stops the tape.
27 A Looks at the phone on the nightstand.
28 A Beige, rotary, curly cord.
29 A She picks up the receiver.
30 A Dial tone.
31 A She sets it back.
32 A ¶ She rewinds.
33 A Hits PLAY.
34 D WOMAN [V.O.] (tape): Day one. Motel off Route 9. Nobody followed me. I think.
35 A ¶ Then, after her recorded voice, the same voice again, lower, almost tender, saying words she never spoke:
36 D WOMAN [V.O.] (tape, whispering): I'm in the room.
37 A ¶ She freezes.
38 A The tape continues to hiss.
39 A ¶ She hits STOP.
40 A Her thumb shakes.
41 A She rewinds again, plays it again.
42 A The extra line is gone.
43 A Only the first.
44 D WOMAN (quietly): Okay.
45 A ¶ She sets the recorder on the dresser.
46 A Takes off her coat.
47 A Hangs it on the doorknob.
48 A A key tag drops from the pocket and clatters to the floor.
49 A She picks it up.
50 A The tag is stamped in hand-scratched letters: PROPERTY OF LENA MARSH.
51 A ¶ She turns it over, turns it back.
52 D LENA (to herself): Right. Right. I'm Lena.
53 A ¶ She says it as if reminding herself.
54 A She says it again.
55 D LENA [CONT'D]: Lena Marsh. Thirty-four. Dental hygienist. Born in Duluth.
56 A ¶ She reaches for the lamp.
57 A Clicks it off.
58 A The room is almost black.
59 A A glow leaks around the curtain edge.
60 A ¶ On the dresser, the recorder clicks on by itself.
61 A The tape reels turn.
62 D LENA [CONT'D]: No.
63 D LENA [V.O.] (tape): Lena.
64 A ¶ She backs against the wall.
65 D LENA: That's my voice.
66 D LENA [V.O.] (tape): You taped me yesterday. In the car.
67 D LENA: I wasn't in a car yesterday.
68 D LENA [V.O.] (tape): No. But you will be.
69 A ¶ She lunges.
70 A Grabs the recorder.
71 A Rips the cassette out.
72 A Throws it across the room.
73 A It hits the TV and cracks.
74 A ¶ Silence.
75 A Rain.
76 A Breath.
77 A ¶ She slides down the wall until she's sitting on the floor.
78 A She hugs her knees.
79 A ¶ From the bathroom: a click.
80 A A drip.
81 A Another click.
82 D LENA [CONT'D] (whispering): Please.
83 A ¶ The bathroom light snaps on by itself.
84 A A thin line of yellow slides under the door.
85 D LENA [CONT'D] (barely audible): Please don't.
86 A ¶ The doorknob turns on its own.
87 A ¶ She crawls to the bed.
88 A Under it.
89 A Dust, the lost sock.
90 A Her own hand finds the cracked cassette.
91 A ¶ The bathroom door creaks.
92 D LENA [V.O.] (from the cracked cassette, gentle): Day two.
93 A ¶ She presses the cassette to her chest.
94 A Doesn't breathe.
95 A ¶ The bathroom light hums.
96 A The cassette hisses against her chest.
97 D LENA [V.O., CONT'D]: Nobody followed me.
98 D LENA (a thread of voice): I know.
99 A ¶ The lamp clicks on.

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

### SCENE s01116 | INT. VINEYARD CELLAR - BARREL ROOM - DUSK
Detected names (may be incomplete or contain aliases): IZABELLA ROMANO-OKAFOR, TEDDY, GALLOWAY, CAMILA ROMANO, HENRIK ABASI-LUND
1 A ¶ Oak barrels in rows.
2 A Candlelight.
3 A A tasting table with four glasses.
4 A ¶ IZABELLA ROMANO-OKAFOR, 30s, in a linen apron, pours.
5 A Across from her, THEODORE "TEDDY" GALLOWAY, 30s, her ex, swirls and sniffs.
6 A At the end of the table, her sister CAMILA ROMANO, 30s, in a sundress, studies him.
7 A And beside Camila, a quiet man, HENRIK ABASI-LUND, 40s, who has said nothing all evening.
8 A ¶ Teddy sips.
9 A Izabella watches.
10 A Camila watches Izabella.
11 A Henrik watches the wine.
12 D TEDDY: It's good.
13 D IZABELLA: It's better than good.
14 D TEDDY: It's... complex.
15 D CAMILA: He means it's sour.
16 D TEDDY: I do not.
17 D CAMILA: You do. Your nose wrinkles.
18 A ¶ Teddy touches his nose.
19 A Izabella suppresses a smile.
20 A Henrik takes a slow sip and sets down his glass.
21 D HENRIK: It's perfect.
22 A ¶ All three turn.
23 A He shrugs, unbothered.
24 D HENRIK [CONT'D]: I'm the one who sold her the grapes.
25 D IZABELLA (to Teddy): That's Henrik.
26 D TEDDY: I gathered.
27 D IZABELLA: And that's my fiance.
28 A ¶ Teddy's glass stops halfway to his mouth.
29 A Camila lowers her eyes.
30 A Henrik, calmly, takes Izabella's hand.
31 D TEDDY: ...Congratulations.
32 D IZABELLA: Thank you, Teddy.
33 A ¶ He drains the glass.
34 A Sets it down.
35 A Smooths his jacket.
36 A Camila slides the bottle toward him, tender.
37 D CAMILA: Another?
38 D TEDDY (a breath): Please.

### SCENE s01093 | INT. DRIVE-IN PROJECTION BOOTH - TWILIGHT
Detected names (may be incomplete or contain aliases): PEGGY LOUISE WALDROP, TUCKER WALDROP, ABERNATHY
1 A ¶ A cramped booth over an empty lot.
2 A Film canisters.
3 A A coffee can of cigarette butts.
4 A Through the small window, rows of silent cars waiting in the dusk.
5 A ¶ PEGGY LOUISE WALDROP, 17, in a pressed uniform, threads a reel with practiced fingers while her younger brother TUCKER WALDROP, 12, sits on a stool kicking his heels, a comic book on his knee.
6 A Between them, MR. ABERNATHY, 60s, the theater owner, in a short-sleeved shirt and bow tie, checks his pocket watch, taps the projector's housing, and sets a thermos by the door.
7 D MR. ABERNATHY: Seven forty. Start her at eight sharp.
8 D PEGGY: Yes, sir.
9 D MR. ABERNATHY: And Peggy, no repeats of last week.
10 D PEGGY: It wasn't my fault, sir. The reel was upside down.
11 D MR. ABERNATHY: Mm.
12 A ¶ He nods, pats Tucker on the head, and leaves.
13 A His footsteps fade down the iron stairs.
14 A Tucker turns a page.
15 A Peggy finishes lacing the film and flips a switch.
16 A The lamp hums warm.
17 D TUCKER: Is he gone?
18 D PEGGY: He's gone.
19 D TUCKER: Good.
20 A ¶ He slides the comic book aside and pulls a rumpled envelope from his shirt.
21 A Hands it up without looking at her.
22 A Peggy takes it.
23 A Turns it over.
24 A Her name in his careful block capitals.
25 D PEGGY: What's this?
26 D TUCKER: Open it.
27 A ¶ She does.
28 A Inside, a ticket stub and a folded strip of paper.
29 A She unfolds it.
30 A Her breath catches.
31 D TUCKER [CONT'D]: They called the house. About the scholarship.
32 D PEGGY: Tucker.
33 D TUCKER: You got in.
34 A ¶ She sits down hard on the other stool.
35 A Reads the strip again.
36 A Her thumb pauses over the signature at the bottom.
37 A ¶ Down in the lot, the cars dim their lights.
38 A A horn toots, impatient.
39 A Tucker watches her face.
40 D PEGGY (quietly): Don't tell Dad.
41 D TUCKER: He already knows.
42 D PEGGY: What?
43 D TUCKER: He read it first. Then he put it back.
44 A ¶ She stares at him.
45 A Then at the window, where the first car's headlights flick on and off in a signal.
46 A She wipes her eyes with the back of her wrist.
47 A Stands.
48 A Presses the switch.
49 A ¶ The projector clatters to life.
50 A A beam cuts across the lot and lands on the screen: a bright gold title card.
51 D PEGGY [CONT'D] (not looking at him): Hand me the next reel.
52 A ¶ Tucker slides it across.
53 A His fingers brush hers.
54 A She takes it, careful, and sets it beside the first.

### SCENE s01076 | INT. HOTEL BALLROOM - STACKED CHAIRS AFTER A CONFERENCE - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE DELACROIX-OYELARAN, THADDEUS BECK
1 A ¶ Chairs stacked in towers.
2 A A banner reading SYNERGY SUMMIT sags from one corner.
3 A Two coffee urns, empty.
4 A One man, one woman, one table.
5 A ¶ MARGUERITE DELACROIX-OYELARAN, 50s, VP of Culture.
6 A Reading glasses on a chain.
7 A THADDEUS BECK, 30s, regional trainer, name tag still on.
8 A She sits.
9 A He stands.
10 D MARGUERITE: Sit, Thaddeus.
11 D THADDEUS: I'd rather stand.
12 D MARGUERITE: That's what people say before they're fired.
13 D THADDEUS: Am I being fired?
14 D MARGUERITE: No. You're being promoted. Which is worse.
15 D THADDEUS: Okay.
16 D MARGUERITE: You'll lead the new Innovation Pod. Eight people. No budget.
17 D THADDEUS: That's not a promotion.
18 D MARGUERITE: It has a title.
19 D THADDEUS: What title?
20 D MARGUERITE: Chief Pod Officer.
21 D THADDEUS: That's a joke.
22 D MARGUERITE: It's on the org chart. I printed it.
23 D THADDEUS: Marguerite.
24 D MARGUERITE: I know.
25 D THADDEUS: Last month you cut my team in half. You said "lean."
26 D MARGUERITE: It was lean.
27 D THADDEUS: You said "family."
28 D MARGUERITE: We are a family.
29 D THADDEUS: Families don't send a calendar invite for a funeral.
30 D MARGUERITE: Thaddeus.
31 D THADDEUS: They sent me an invite. For my own mentor's funeral. Titled "Farewell Sync."
32 D MARGUERITE: That was an unfortunate template.
33 D THADDEUS: It had a Zoom link.
34 D MARGUERITE: Lower your voice.
35 D THADDEUS: The room is empty!
36 D MARGUERITE: The walls are not.
37 D THADDEUS: I trained four hundred people today. About "psychological safety." Four hundred. I held their hands.
38 D MARGUERITE: And they loved you.
39 D THADDEUS: They're also being laid off.
40 D MARGUERITE: You knew that.
41 D THADDEUS: I found out at lunch. From a vending machine receipt. Somebody's severance code was on it.
42 D MARGUERITE: That's an IT problem.
43 D THADDEUS: No. That's a me problem. I smiled at them. I handed out lanyards. With their termination dates printed on the back.
44 D MARGUERITE (quietly): Thaddeus.
45 D THADDEUS: I'm done. Chief Pod Officer. I'm done.
46 D MARGUERITE: You can't quit. You haven't vested.
47 D THADDEUS: Watch me.
48 A ¶ He rips off his name tag and slaps it on the table.
49 A She stares at it a long moment.
50 D MARGUERITE: That's a two-hundred-dollar badge.
51 D THADDEUS: Put it on the budget I don't have.

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

### SCENE s01034 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): BEATRIX CALLOWAY, NICO ABARA, FENWICK
1 A ¶ Glass eyes glitter from every shelf.
2 A A stuffed owl, a lynx mid-leap, a badger with a crooked grin.
3 A ¶ BEATRIX CALLOWAY, 50s, magnifier on her forehead, kneels by an open drawer while NICO ABARA, 20s, apprentice, holds the lantern and FENWICK, 70s, owner, stands rigid at the door, fingers twitching, and all three have noticed that the fox on the counter is missing its left eye.
4 D BEATRIX: Fenwick, you said nobody came in.
5 D FENWICK: Nobody did, Beatrix.
6 D NICO: The fox, Mr. Fenwick. Look at the fox.
7 A ¶ Beatrix lifts the animal, turns it, peers into the empty socket, pulls a folded note from inside, and Nico leans in, lantern shaking, while Fenwick edges toward the back door, one hand in his coat.
8 D BEATRIX: Stop there, Fenwick.
9 D FENWICK: It's a misunderstanding.
10 D NICO: It says "the eye is in the owl."
11 A ¶ They all turn.
12 A The owl stares back.

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

### SCENE s01038 | INT. FUNERAL HOME - VIEWING ROOM B - DAY
Detected names (may be incomplete or contain aliases): ELOISE FARNSWORTH, CAMILA BRANDAO, DOROTHEA KWAN
1 A ¶ Velvet drapes.
2 A A casket at the far end, closed, spray of lilies.
3 A Folding chairs facing a mahogany table, court reporter's stenotype ticking beside it.
4 A ¶ ELOISE FARNSWORTH, 70s, black gloves, rosary wrapped around one hand, sits very straight.
5 A On her left, CAMILA BRANDAO, 40s, her attorney, legal pad flat.
6 A Across the table, DOROTHEA KWAN, 50s, opposing counsel, reading glasses on a chain.
7 D KWAN: Mrs. Farnsworth, when did you last see your husband alive?
8 D ELOISE: Tuesday.
9 D KWAN: And the will?
10 A ¶ Eloise's rosary clicks once.
11 D ELOISE: What about it?
12 D KWAN: Did she witness it?
13 D BRANDAO: Objection. Who's "she"?
14 D KWAN: The nurse.
15 D ELOISE: Mrs. Okafor.
16 D KWAN: She told us she wasn't present.
17 A ¶ Eloise stares at the casket.
18 A Her fingers work the beads, one, two, three.
19 D BRANDAO: Let the record show my client has not been served that statement.
20 D KWAN: It's in your folder.
21 A ¶ Brandao flips pages.
22 A Stops.
23 A Her thumb presses a corner of paper until it whitens.
24 D ELOISE: I'd like some water.
25 A ¶ Kwan nods to the reporter.
26 A A pitcher is brought.
27 A Eloise's glove shakes as she lifts the cup, then stills.

### SCENE s00005 | INT. FUNICULAR CAR - ALPINE CLIMB - NIGHT
Detected names (may be incomplete or contain aliases): SABINE LACROIX, TEO, BIANCHI, THE MAN IN GRAY, OPERATOR, HALVARD
1 A ¶ A glass cabin crawls up a mountain in the dark, a cable humming overhead and the lights of a casino resort burning at the summit like a held breath.
2 A ¶ SABINE LACROIX (30s, black gloves, a champagne flute she hasn't touched) sits with her back to the glass.
3 A Across from her TEODORO "TEO" BIANCHI (40s, bow tie loose, a briefcase cuffed to his wrist) stares at the floor.
4 A A figure in a gray coat leans in the corner, face lost in the shadow of a hat: THE MAN IN GRAY.
5 A ¶ From a speaker above the door, a bored VOICE of the operator drones through the static.
6 D OPERATOR [V.O.]: Next stop, Summit Station. Please remain seated until the car has come to a complete halt.
7 D SABINE: Fourteen minutes. The vault door cycles at the quarter hour. Teo takes the case through the service lift, I take the lobby, and our friend in gray makes the cameras blink.
8 D TEO: You say that like it's simple.
9 D SABINE: It is simple. It's only terrifying.
10 D THE MAN IN GRAY: My cameras blink for ninety seconds. Not ninety-one.
11 D SABINE: Then we move in eighty.
12 D TEO: And if the guard on the service lift is the new one? The one who doesn't take bribes?
13 D SABINE: Then Teo recites the wine list until he cries.
14 D TEO: That is not funny.
15 D THE MAN IN GRAY: Halvard.
16 D SABINE: What?
17 D HALVARD: My name. If we're doing this, you should have it. Halvard.
18 D SABINE: Halvard. Fine. Eighty seconds, Halvard.
19 D OPERATOR [V.O.]: Summit Station in one minute.
20 D TEO: One minute.
21 D SABINE: Breathe, Teo.
22 D HALVARD: Gloves on.

### SCENE s01075 | EXT. HANGING BRIDGE OF SPIDERSILK - ABOVE THE MOONLIT CHASM - NIGHT
Detected names (may be incomplete or contain aliases): QUEEN ISOLDE VANTERRE, MORVAN UNMADE, ROYAL HERALD
1 A ¶ Wind howls.
2 A A bridge of woven silver thread spans a bottomless gorge.
3 A Far below, pale lights drift like fallen stars.
4 A ¶ QUEEN ISOLDE VANTERRE, 40s, crowned in antlers of white bone, grips the rail.
5 A Her cloak snaps in the gale.
6 A Opposite her, at the far end of the span: MORVAN THE UNMADE, ageless, a figure of black smoke and one burning eye.
7 D QUEEN ISOLDE: You have no claim on this valley.
8 D MORVAN (echoing, from everywhere): The valley has no claim on you, and yet you bleed for it.
9 A ¶ She steps onto the bridge.
10 A Threads hum beneath her boots.
11 D QUEEN ISOLDE: Go back to your cold hollow, Morvan.
12 D MORVAN: Come and make me.
13 A ¶ A horn sounds from the castle far behind her.
14 A Isolde does not turn.
15 A Smoke rolls along the silver strands.
16 D ROYAL HERALD [V.O.] (distant, over the wind): Majesty! The east wall has fallen! Return at once!
17 D QUEEN ISOLDE (calling back): Hold the gate!
18 A ¶ She draws a pale sword from her belt.
19 A It blazes white.
20 A Morvan lifts a hand; the smoke thickens into a spear of shadow.
21 D MORVAN: You cannot be in two places, little queen.
22 D QUEEN ISOLDE: I am not in two places. I am here.
23 A ¶ She runs.
24 A The bridge sways.
25 A The spear hurls.
26 A Her blade meets it in a burst of light, and the gorge rings like a bell.
27 D MORVAN: Then fall here.
28 D QUEEN ISOLDE: Not while a thread holds.
29 A ¶ She drives forward.
30 A Smoke breaks around her.
31 A The silver strands blaze.
32 A Morvan roars.
33 A ¶ The wind does not let up.

### SCENE s01098 | INT. FUNERAL HOME - FAMILY ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSEMARY PEMBERTON-DIALLO, BENEDICT PEMBERTON, DELPHINE ACHEBE-HART, FUNERAL DIRECTOR OSWALD PRICE
1 A ¶ Dim lamps.
2 A A mahogany casket at the front.
3 A Folding chairs in careful rows.
4 A A box of tissues on every seat.
5 A The smell of lilies and carpet cleaner.
6 A ¶ ROSEMARY PEMBERTON-DIALLO, 60s, in black wool, sits ramrod straight in the front row.
7 A Her son BENEDICT PEMBERTON, 40s, rumpled suit, fidgets beside her.
8 A Their cousin, DELPHINE ACHEBE-HART, 50s, large sunglasses indoors, stands against the back wall clutching her purse.
9 D BENEDICT: Mother, I can handle it.
10 D ROSEMARY: You can't handle a toaster.
11 D BENEDICT: That was one time.
12 D DELPHINE (from the back): It was three times, Ben.
13 D BENEDICT: Stay out of it, Delphine.
14 D DELPHINE: Don't tell me to stay out. I'm the one who found the will.
15 D ROSEMARY: The will is none of your business.
16 D DELPHINE: It's my business. I'm named in it.
17 D BENEDICT: You are not.
18 D DELPHINE: Page four. Paragraph two.
19 D ROSEMARY (rising): That paragraph was struck.
20 D DELPHINE: By who?
21 D ROSEMARY: By me.
22 D BENEDICT: Mother!
23 D ROSEMARY: Be quiet, Benedict.
24 D BENEDICT: You can't just --
25 D ROSEMARY: I can do what I please. I'm his widow.
26 D DELPHINE: And I'm his sister's daughter. Which makes me blood.
27 D ROSEMARY: Blood is overrated.
28 D DELPHINE: Says the woman who married into it.
29 A ¶ Silence.
30 A Rosemary stares at the casket.
31 A Her shoulders sag.
32 A Benedict puts a hand on her arm.
33 A She lets it stay.
34 D ROSEMARY (quiet): He would have hated this.
35 D BENEDICT: He would have loved it. The shouting.
36 D DELPHINE (wiping her eyes behind the sunglasses): He started half of it.
37 A ¶ A beat.
38 A Rosemary lets out a short, surprised laugh.
39 A Benedict follows.
40 A Delphine, last, a sob that turns into a snort.
41 A They sit in the gentle ruin.
42 A ¶ The door opens.
43 A FUNERAL DIRECTOR OSWALD PRICE, 50s, black suit, clears his throat.
44 D OSWALD: Ready, whenever you are.
45 D ROSEMARY: Give us a moment, Mr. Price.
46 D OSWALD: Of course.
47 A ¶ He retreats.
48 A Delphine crosses the room and sits on Rosemary's other side.
49 A Three of them in a row, looking at the casket.

### SCENE s01020 | INT. FORMER BOWLING ALLEY - EVIDENCE ANNEX - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OKONKWO, HALVARD PEDERSEN, TECH, KOWALCZYK, OFFICER TRAN, LENNOX, BASHIR
1 A ¶ Lane 12 is a ghost of itself.
2 A Waxed maple, gutters stacked with cardboard banker's boxes.
3 A Overhead, a dead scoreboard still reads HOME 114 / GUEST 98.
4 A ¶ DET. ADAEZE OKONKWO, 40s, rain-wet trench coat, reading glasses pushed up into close-cropped hair, walks the lane like she owns the lease.
5 A ¶ At the ball return sits SGT. HALVARD PEDERSEN, 60, heavy, a thermos between his knees, pretending not to be asleep.
6 D OKONKWO: Who signed the boxes out?
7 D PEDERSEN: Nobody. That's the problem.
8 A ¶ A TECH in a paper suit kneels at the far end, photographing a box lid with a ring light.
9 A Young, narrow shoulders, earbuds in one ear only.
10 D OKONKWO: You. What's your name?
11 D TECH: Just Tech tonight. Ask the lab.
12 A ¶ She moves on.
13 A Doesn't push.
14 A ¶ By the shoe-rental counter, MRS. KOWALCZYK, 70s, cardigan buttoned wrong, clutches a handbag like a flotation device.
15 A She owned this alley for thirty years.
16 D MRS. KOWALCZYK: Strike night was Thursdays. Forty-one lanes of noise. Now listen to it.
17 A ¶ Silence.
18 A A compressor hums somewhere.
19 D OKONKWO: Ma'am, did you give anyone a key?
20 D MRS. KOWALCZYK: The city has my keys. The city has everything.
21 D PEDERSEN (into thermos): Ain't that the truth.
22 A ¶ OFFICER TRAN, 20s, stiff, enters from the lobby with a clipboard.
23 A He stops at the edge of the lane, unsure if he's allowed to step on it.
24 D OFFICER TRAN: Detective. Gate log's clean. Last entry, six forty p.m. Someone named Lennox.
25 D OKONKWO: First name?
26 D OFFICER TRAN: Just Lennox.
27 A ¶ Behind a stack of boxes, a cough.
28 A Everyone looks.
29 A ¶ LENNOX, 50s, gray ponytail, security lanyard, stands up slowly from where he's been sitting on a crate, hands visible and empty.
30 D LENNOX: I'm the night man. I was in the office.
31 D OKONKWO: Mr. Lennox. You've been in the building the whole time.
32 D LENNOX: It's a warm building.
33 A ¶ The Tech glances up, finally pulls the earbud out.
34 D TECH: Bashir. It's Bashir. Since you asked.
35 D OKONKWO: Thank you, Bashir.
36 D BASHIR: Box nineteen has been opened. Seal's cut clean. Razor, not a knife.
37 D OKONKWO: How do you know?
38 D BASHIR: Edge doesn't tear. I do this for a living.
39 A ¶ Okonkwo takes off her glasses.
40 A Folds them.
41 A Looks at Lennox for a long, unhurried moment.
42 D OKONKWO: Walk me through the office, Mr. Lennox.
43 D LENNOX: Sure.
44 A ¶ He doesn't move.
45 A Neither does she.
46 D PEDERSEN: I'll get the coffee.
47 A ¶ He doesn't move either.
48 D BASHIR: Light's good here, if anyone wants to take their time.
49 A ¶ Okonkwo sits down on the foul line, crosses her legs, and waits.

### SCENE s00008 | INT. MUNICIPAL PLANETARIUM - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, ASANTE, WALLACE PYO
1 A ¶ A cramped booth above the dome.
2 A Dials, a projector the size of an oven, a dead cup of coffee on every flat surface.
3 A ¶ JUNIPER "JUNE" ASANTE (30s, hoodie, headset, a laptop plastered with stickers) sits at a console, bored.
4 A Beside her, WALLACE PYO (60s, security guard uniform one size small, a thermos) pretends to read a paperback.
5 A ¶ Through the glass, the empty dome is lit with a slow field of artificial stars.
6 D WALLACE: You're not supposed to be up here.
7 D JUNE: Maintenance.
8 D WALLACE: At two a.m.?
9 D JUNE: Stars don't recalibrate themselves.
10 A ¶ He sips from the thermos.
11 A Turns a page without reading it.
12 D JUNE [CONT'D] (into headset, flat): Ceiling's clear. Roof hatch in four.
13 D WALLACE: Who're you talking to?
14 D JUNE: Myself. Old habit.
15 D WALLACE: You said "roof hatch."
16 D JUNE: I said "roof catch." As in, catch up on emails.
17 D WALLACE: Mm.
18 A ¶ He doesn't believe her.
19 A He doesn't move, either.
20 A ¶ June taps a key.
21 A The stars shift.
22 A The constellation of Orion slides west.
23 D WALLACE [CONT'D]: My wife loved Orion.
24 D JUNE: Everyone does.
25 D WALLACE: She said it looked like a man waiting for a bus.
26 A ¶ June laughs.
27 A Real.
28 A Surprised.
29 D JUNE: That's good.
30 D WALLACE: She was good.
31 A ¶ Quiet.
32 A The projector whirs.
33 D JUNE (under her breath, to the headset): Hold. Hold. He's talking.
34 D WALLACE: There it is again.
35 D JUNE: Hold on, I'm - (beat) - praying. Quietly. For my laptop. It crashes.
36 D WALLACE: Sure it does.
37 A ¶ He sets down the paperback, stands, and stretches until his back cracks.
38 D WALLACE [CONT'D] (to the empty booth): Everyone out of the vault when you're done, please. I lock at six.
39 A ¶ Beat.
40 A June looks at him.
41 D JUNE: You knew.
42 D WALLACE: I'm sixty-one. I know what a van looks like parked behind a dome at midnight.
43 D JUNE: And you sat here.
44 D WALLACE: I'm on break.
45 A ¶ He pours coffee.
46 A Offers her the cup.
47 A ¶ She takes it.
48 D WALLACE [CONT'D]: Don't take the telescope. It's on loan from the university.
49 D JUNE (into headset): Hear that, everybody? Leave the telescope.
50 A ¶ Overhead, the stars drift on, indifferent.

### SCENE s01101 | INT. DECOMMISSIONED SUBMARINE BAY - SPACE STATION - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIANA MBEKI-ROSSI, ENGINEER DORIAN WESTBROOK-ANAND, MEDIC IMANI SOLBERG, SECURITY CHIEF PAVEL ORLOV-DIALLO, LINGUIST ESPERANZA BALOGUN, TEO ABERNATHY-LIU, COMMS
1 A ¶ A long dim hangar.
2 A Hull plates ticking as they cool.
3 A A flickering amber strip light.
4 A A rack of pressure suits like hanging skins.
5 A ¶ CAPTAIN LUCIANA MBEKI-ROSSI, 50s, shaved head, grease-stained flight suit, kneels beside a dark console.
6 A Next to her, ENGINEER DORIAN WESTBROOK-ANAND, 30s, arms crossed, watches a diagnostic wheel spin.
7 A Further off, MEDIC IMANI SOLBERG, 20s, hugs a first-aid case, her hands trembling.
8 A At the hatch, SECURITY CHIEF PAVEL ORLOV-DIALLO, 40s, holds a pulse rifle, eyes on the ceiling.
9 A Two more figures stand in shadow by the far bulkhead: LINGUIST ESPERANZA BALOGUN, 30s, in a pale coat, and a young cadet, TEO ABERNATHY-LIU, 19, clutching a datapad.
10 D LUCIANA: Status.
11 D DORIAN: Core's alive. Everything else is asleep.
12 D LUCIANA: Wake it.
13 D DORIAN: I'm trying.
14 D IMANI (small): Captain?
15 D LUCIANA: Not now.
16 D IMANI: The hull is making a noise.
17 A ¶ Silence.
18 A The strip light flickers.
19 A A distant, rhythmic tapping rolls through the metal.
20 A Pavel's rifle lifts.
21 D PAVEL: It's not the cooling.
22 D ESPERANZA: It's a pattern.
23 D LUCIANA: What kind of pattern?
24 D ESPERANZA (listening): Three. Pause. Three.
25 D TEO: Is that Morse?
26 D ESPERANZA: It's a countdown.
27 D COMMS [V.O.] (crackling, over the intercom): ...bay four... can anyone hear... bay four...
28 A ¶ Luciana grabs the handset from the console.
29 D LUCIANA: This is Mbeki-Rossi. Say again.
30 D COMMS [V.O.]: Captain? Thank god. We're locked in the sub bay. The door sealed itself.
31 D LUCIANA: Who is this?
32 D COMMS [V.O.]: Station Operations. We've been tapping on the hull for an hour.
33 A ¶ Pavel lowers the rifle slowly.
34 A Dorian stands.
35 A Imani lets out a breath.
36 A The tapping continues, closer now.
37 D LUCIANA (into the handset): We're in bay four.
38 D COMMS [V.O.]: No, ma'am. You're not.
39 A ¶ Luciana stares at the handset.
40 A At the others.
41 A At the ceiling, where something taps once, twice, thrice.
42 D DORIAN (whispering): If they're locked in the sub bay...
43 D PAVEL: Then what is that?
44 A ¶ The tapping stops.
45 A A long silence.
46 A The strip light dies.
47 A In the dark, a soft voice laughs, thin and delighted, from the vent above.
48 A ¶ Teo drops the datapad.
49 A It clatters.
50 A No one picks it up.

### SCENE s01086 | INT. BOWLING ALLEY - LANE 12 - FINAL FRAME - NIGHT
Detected names (may be incomplete or contain aliases): DRY CREEK LANES, COACH MURIEL TAPIA, DESHAWN, PRITCHETT, ANNIKA BERGSTROM-ODUYA, HANK WILLOUGHBY, PRESTON LI
1 A ¶ Neon pins.
2 A Sticky carpet.
3 A A trophy case.
4 A The league championship banner: DRY CREEK LANES - TUESDAY NIGHT FINALS.
5 A A crowd packs the seats behind the rail, sweating, silent.
6 A ¶ COACH MURIEL TAPIA, 60s, windbreaker, clipboard, paces behind the scorers' table.
7 A Next to her, DESHAWN "THE HAMMER" PRITCHETT, 30s, in a team polo, chalks his fingers, rolling his shoulders.
8 A At the lane, ANNIKA BERGSTROM-ODUYA, 20s, ponytail, holds her ball against her chest.
9 A Opposite them on the other bench, rival captain HANK WILLOUGHBY, 50s, red bowling shirt, smirks and cracks his knuckles.
10 A At the scoring console, young scorekeeper PRESTON LI, 17, headset on, watches the monitor.
11 D MURIEL: Ten pins. That's all she needs.
12 D DESHAWN: She's got ice in her veins.
13 D MURIEL: She's got a ball in her hands. Pray it's the right one.
14 A ¶ Annika steps up to the approach.
15 A Breathes.
16 A Stares at the head pin.
17 A The crowd hushes.
18 A Hank leans forward, grinning.
19 A Preston grips his headset.
20 D ANNIKA (under her breath): Spare. Just spare.
21 A ¶ She takes four steps.
22 A Swings.
23 A Releases.
24 A The ball tears down the lane, hooks left, a streak of black.
25 A It slams the pocket.
26 A Pins scatter.
27 A Nine fall.
28 A One wobbles.
29 A Stands.
30 A ¶ The crowd groans.
31 A Hank punches the air.
32 D HANK: Told you she'd choke!
33 D DESHAWN: Sit down, Hank.
34 D HANK: Make me.
35 A ¶ Muriel puts a hand on Deshawn's chest.
36 A He holds.
37 A Annika walks back, staring at the single pin.
38 D PRESTON [V.O.] (over the PA, shaky): Attention, bowlers. Lane twelve. Tenth frame. One ball remaining. Annika Bergstrom-Oduya needs the spare for the title.
39 D MURIEL (low): Annie. Look at me.
40 D ANNIKA: I'm looking.
41 D MURIEL: That pin has been waiting thirty years for someone to knock it down.
42 D ANNIKA: It's been waiting for me.
43 D MURIEL: It's been waiting for all of us.
44 A ¶ Deshawn offers a towel.
45 A She wipes her hands.
46 A Hands it back.
47 A Steps up again.
48 A The crowd leans in.
49 A Hank folds his arms, jaw tight.
50 A ¶ She sets her feet.
51 A Looks at the pin.
52 A Takes the four steps again.
53 A Releases.
54 A ¶ The ball rolls slower this time.
55 A Gentle.
56 A A curve so slight it barely bends.
57 A It kisses the last pin at the edge.
58 A The pin spins.
59 A Tilts.
60 A Falls.
61 A ¶ For one second, nothing.
62 A Then the whole alley erupts.
63 A Muriel throws her clipboard in the air.
64 A Deshawn lifts Annika off the floor.
65 A Preston screams into his headset.
66 A Hank sits with his arms still folded.
67 D MURIEL [CONT'D]: That's a title!
68 D DESHAWN: That's a Tuesday!
69 A ¶ Annika laughs and cries at once, still held aloft.
70 A Hank rises, walks over, offers a hand across the rail.
71 D HANK: Good game.
72 D ANNIKA (shaking it): Thanks, Hank.
73 D HANK: Next year, I'm bringing the red ball.
74 D ANNIKA: Bring two.

### SCENE s00001 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VEGA, WOMAN, STRANGER, INGRID
1 A ¶ Glass eyes in jars.
2 A A fox half-stuffed on the bench.
3 A Rain on a skylight.
4 A ¶ ODALYS VEGA (30s, rain-soaked trench coat, badge on her belt) stands in the doorway.
5 A At the bench, a WOMAN in a leather apron sews a pheasant's wing.
6 A Her back is turned.
7 D ODALYS: Evening. Sorry about the hour.
8 D STRANGER: Kettle's on. Sit.
9 A ¶ Odalys sits on a stool.
10 A Looks at the fox.
11 A The fox looks back.
12 D ODALYS: I'm looking into a break-in at the museum. Friday night.
13 D STRANGER: Terrible. They never lock the back.
14 D ODALYS: That's what the guard said. Funny, because he said she never left the bench that night either.
15 D STRANGER: Who?
16 D ODALYS: Nobody. Your name?
17 A ¶ The woman turns.
18 A Warm face.
19 A Needle in her teeth.
20 D STRANGER: Ingrid.
21 A ¶ She sets down the wing.
22 A On the shelf behind her: a small brass key tag.
23 A MUSEUM - REAR.
24 D INGRID: Does she take sugar, your guard?
25 A ¶ Odalys stands.
26 A Her hand drifts to her belt.
27 A Ingrid smiles.
28 D ODALYS: Ingrid. Put the needle down.

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
