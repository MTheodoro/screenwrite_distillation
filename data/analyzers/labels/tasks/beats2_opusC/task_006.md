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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusC/group_13006.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s01057 | INT. HOSPITAL BARGE "MERCY ELEANOR" - WARD DECK - NIGHT
Detected names (may be incomplete or contain aliases): ISMAIL KARIMI, NURSE BRONWEN ACKERLEY, ORDERLY TOBIAS FINCH, LINH THAI, ODETTA WRAY
1 A ¶ A converted river freighter.
2 A Twelve cots on a steel deck, curtains on ceiling rails, an IV pole tied to a pillar with bungee cord.
3 A Through round portholes, the lights of a riverbank town drift by.
4 A ¶ DR. ISMAIL KARIMI, 50s, rumpled scrubs, reading glasses hanging from one ear, signs a chart at a card table nailed to the floor.
5 A NURSE BRONWEN ACKERLEY, 40s, tall, silver braid, checks an IV bag with a flashlight.
6 A ORDERLY TOBIAS FINCH, 20s, headphones around his neck, mops in lazy circles.
7 A DR. LINH THAI, 30s, resident, sits cross-legged on a cot, stethoscope draped, eating crackers from a sleeve.
8 A And at the end of the row, MRS. ODETTA WRAY, 70s, the only patient awake, sits up in a cot with a blanket over her knees.
9 D ISMAIL: Bed six, no change.
10 D BRONWEN: Bed six, no change.
11 D ISMAIL: Bed nine?
12 D LINH: Temp is ninety-nine point one.
13 D ISMAIL: Fine. Leave it.
14 D LINH: I was going to.
15 D TOBIAS: Do we have more mop heads?
16 D BRONWEN: Closet, port side.
17 D TOBIAS: Port is?
18 D BRONWEN: Left.
19 D TOBIAS: Thanks.
20 A ¶ The barge shifts.
21 A A low groan runs through the hull.
22 A Nobody reacts.
23 A The IV pole sways against its bungee.
24 D MRS. WRAY: Doctor.
25 D ISMAIL: Yes, Mrs. Wray.
26 D MRS. WRAY: Is it always so slow at night?
27 D ISMAIL: Usually it's slower.
28 D MRS. WRAY: Then I'm in luck.
29 D ISMAIL: Are you in pain?
30 D MRS. WRAY: Only boredom.
31 D LINH (through crackers): I can read you something.
32 D MRS. WRAY: What have you got?
33 D LINH: The back of the cracker box.
34 D MRS. WRAY: Go ahead.
35 D LINH: "Made with whole grains. Best before March."
36 D MRS. WRAY: Beautiful.
37 A ¶ Bronwen stifles a laugh.
38 A Ismail glances over his glasses, almost smiles.
39 D TOBIAS: Dr. Karimi, should I do the starboard side next?
40 D ISMAIL: If you like.
41 D TOBIAS: I do like.
42 D ISMAIL: Then carry on.
43 A ¶ The barge's horn sounds, low and soft, a note across water.
44 D BRONWEN: That's Calder Landing.
45 D ISMAIL: We dock in an hour.
46 D LINH: Do we get shore leave?
47 D ISMAIL: We get paperwork.
48 D LINH: Same thing.
49 D ISMAIL: Dr. Thai.
50 D LINH: Sorry.
51 A ¶ Mrs. Wray settles into her pillow.
52 A Her eyes close.
53 A A pulse monitor beeps in a slow, steady tick.
54 A ¶ Bronwen adjusts the blanket across her knees.
55 A Tucks it neat.
56 D BRONWEN (softly): Sleep well.
57 D MRS. WRAY (eyes closed): Everything's fine?
58 D BRONWEN: Everything's fine.
59 A ¶ She turns off the flashlight.
60 A The ward falls into amber, quiet, familiar dark.

### SCENE s01037 | INT. ROTATING RESTAURANT - TOWER SUMMIT - NIGHT
Detected names (may be incomplete or contain aliases): ROZ KAPLAN, TREVOR DUNN, NEW GIRL, SUNNY
1 A ¶ A circular room on a slow turn.
2 A The city slides past the windows like a conveyor.
3 A White tablecloths, empty chairs, a pianist's bench with no pianist.
4 A ¶ ROZ KAPLAN, 50s, silver bob, red lipstick, sits at a corner table with a blueprint under her wine glass.
5 A Opposite her, TREVOR DUNN, 30s, hotel uniform, nervous hands.
6 A ¶ A NEW GIRL, 20s, denim jacket, backpack, slides into the third chair without being invited.
7 D NEW GIRL: Sorry I'm late. The elevator stopped at every floor.
8 D ROZ: It's a tourist elevator.
9 D NEW GIRL: It was a hostage situation.
10 D ROZ: You've got the codes?
11 D NEW GIRL: I've got the codes.
12 D TREVOR: Who is she?
13 D ROZ: Trevor, this is Sunny Lockwood. She's the one I told you about.
14 D SUNNY: Nice to meet you. I'm the one with the thumbs.
15 D TREVOR: The thumbs?
16 D SUNNY: Locksmith's daughter. Four generations of thumbs.
17 D ROZ: She's good. She's very good. She's also nineteen.
18 D TREVOR: Twenty-one.
19 D SUNNY: Twenty. Don't lie for me.
20 D ROZ: Let's start. The vault is on sixty-one, under the observation deck. Every ninety minutes the restaurant makes a full revolution. We have exactly four minutes where the north camera faces the wall.
21 D TREVOR: Because of the rotation.
22 D ROZ: Because of the rotation. Sunny takes the first lock. I take the second. Trevor, you stay at the maitre d' stand and pour wine.
23 D TREVOR: I can pour wine.
24 D ROZ: You can pour wine badly. That's all anyone expects.
25 D SUNNY: What's the haul?
26 D ROZ: Eleven million. Bearer bonds. In a briefcase that looks like a briefcase.
27 D SUNNY: Eleven's good. What's my cut?
28 D ROZ: Two.
29 D SUNNY: Three.
30 D ROZ: Two and a half.
31 D SUNNY: She drives a hard bargain.
32 D TREVOR: She who?
33 D SUNNY: Roz. It's a figure of speech. I'm talking about Roz.
34 D ROZ: I know who you mean.
35 D SUNNY: She counts every penny.
36 D ROZ: She buys every drink. Shut up and listen.
37 A ¶ Trevor pours wine for no one.
38 A The glass fills.
39 A He sets the bottle down too hard.
40 D ROZ [CONT'D]: After the second lock, there's a pneumatic tube. Documents only. We use it to send the bonds down to the kitchen.
41 D TREVOR: They go down by tube.
42 D ROZ: They go down by tube. At the kitchen, Marguerite takes them in a casserole dish.
43 D SUNNY: Who's Marguerite?
44 D ROZ: My sister.
45 D SUNNY: You have a sister?
46 D ROZ: Everyone has a sister.
47 D TREVOR: I don't.
48 D ROZ: Then you're lucky.
49 D SUNNY: What about security?
50 D ROZ: Two guards. One reads novels. The other sleeps. We tested them for six weeks.
51 D SUNNY: Six weeks of watching a man read a novel.
52 D ROZ: It was a Dickens.
53 D SUNNY: Which?
54 D ROZ: Bleak House.
55 D SUNNY (laughing): Oh, I like her.
56 D TREVOR: Who?
57 D SUNNY: Roz. You keep asking.
58 D ROZ: Pay attention. Revolution starts at eleven forty. We're in position by eleven thirty. Questions?
59 D TREVOR: What if the guard doesn't sleep?
60 D ROZ: Then I buy him a drink.
61 D SUNNY: What if he doesn't drink?
62 D ROZ: Everyone drinks, sweetheart.
63 D SUNNY: What if the vault door is a different model?
64 D ROZ: It isn't.
65 D SUNNY: What if it is?
66 D ROZ: Then you'll earn your three.
67 D SUNNY (grinning): Three?
68 D ROZ: Two and a half. Don't push.
69 A ¶ The room turns.
70 A The city lights drift past, one landmark after another.
71 D TREVOR: It's a little beautiful, actually.
72 D ROZ: It's a job, Trevor.
73 D TREVOR: Can it be both?
74 D ROZ: No.
75 A ¶ Sunny lifts her glass.
76 A Roz clinks it.
77 A Trevor, last, doesn't quite reach.

### SCENE s01059 | INT. LOGGING CAMP MESS HALL - ARBITRATION HEARING - DAY
Detected names (may be incomplete or contain aliases): PETRA ILLES, REGINALD TOLLIVER, OTTOLINE FRYE, CLERK, ABIODUN SHOLA
1 A ¶ Long pine tables pushed into a U. Axes on hooks.
2 A Snow outside the windows.
3 A A coffee urn steams in the corner.
4 A ¶ PETRA ILLES, 40s, plaid jacket over blazer, stands at the head of the U. REGINALD TOLLIVER, 50s, three-piece suit, sits opposite her with his hands steepled.
5 A OTTOLINE FRYE, 60s, the foreman, sits in the witness chair, a rifle-green parka zipped to her chin.
6 D PETRA: Ms. Frye. Who signed off on the timber survey?
7 D OTTOLINE: I did.
8 D PETRA: Did you walk the ridge?
9 D OTTOLINE: Not myself.
10 D PETRA: Then how?
11 D REGINALD: Objection. Foundation.
12 D PETRA: She's the foreman.
13 D REGINALD: She's not a surveyor.
14 D OTTOLINE: I know a tree when I see one.
15 D PETRA: Did you see this one?
16 D OTTOLINE: I saw the stump.
17 D PETRA: And the stump said?
18 D REGINALD: Objection!
19 A ¶ The door bangs.
20 A A CLERK, 20s, snow on his hat, hurries in with a folder, ducking as though the rafters were low.
21 A ABIODUN SHOLA, per the badge on his coat.
22 A Everyone looks.
23 D ABIODUN: Sorry. Sorry. Urgent filing.
24 D PETRA: Mr. Shola, we're in session.
25 D ABIODUN: It's about the ridge.
26 D REGINALD: Whose side is this?
27 D ABIODUN: Yours, I think. Or hers.
28 A ¶ He slaps the folder on the table between them.
29 A Petra and Reginald reach for it.
30 D PETRA: Give me that.
31 D REGINALD: Give me that.
32 A ¶ They stop.
33 A Both draw back.
34 A Ottoline takes the folder, opens it.
35 A Reads.
36 D OTTOLINE (slowly): That ridge was never ours.
37 A ¶ The mess hall goes quiet.
38 A Even the coffee urn seems to stop bubbling.

### SCENE s01047 | EXT. SALT FLAT - ABANDONED STAGECOACH - HIGH NOON
Detected names (may be incomplete or contain aliases): MARSHAL CULLEN BRODERICK, DUTCH, LUPE VARGAS
1 A ¶ White to the horizon.
2 A Heat shimmer bends the sky.
3 A A stagecoach tilts on a broken axle, one wheel cocked in the crust.
4 A ¶ MARSHAL CULLEN BRODERICK, 50s, tin star, dust-gray duster, steps down from the coach, rifle across his arm, while behind him DUTCH, a lean outlaw in manacles, shuffles toward the shade, and LUPE VARGAS, 30s, the driver, slaps her hat against her knee, checks the horses, and mutters at the broken wheel, all three of them squinting at a dark speck on the horizon that keeps growing.
5 D CULLEN (to the others): Nobody run. There's nowhere to run to.
6 D DUTCH (low, to Cullen): Marshal, take these off me. If that's riders, I can shoot.
7 D CULLEN: No.
8 D LUPE (to herself): Three days. Three goddamn days of salt.
9 D CULLEN: Lupe. Water.
10 A ¶ She tosses him a canteen.
11 A He drinks, passes it to Dutch.
12 A Dutch drinks, passes it back.
13 A The speck becomes a rider.
14 D DUTCH: That's a lone horse.
15 D CULLEN: Could be a lone man.
16 D LUPE: Could be a mirage.
17 A ¶ The rider slows.
18 A Stops a hundred yards out.
19 A Raises a white cloth.
20 A Waves it.
21 A ¶ Cullen lowers the rifle.
22 A Dutch exhales.
23 A Lupe pulls her hat down.

### SCENE s01074 | INT. OFFICE SUPPLY CLOSET WITH A BIRTHDAY PARTY - DAY
Detected names (may be incomplete or contain aliases): GLORIA PETROSYAN, DEZ, ADEYEMI, PRIYA NAIR, TALL MAN, BERTRAM, MAILROOM KID
1 A ¶ A closet turned party room.
2 A Paper streamers.
3 A A sheet cake on a filing box.
4 A Fluorescent hum.
5 A A banner: HAPPY 5TH ANNIVERSARY OF THE REORG.
6 A ¶ GLORIA PETROSYAN, 50s, regional manager, lanyard heavy with badges, cuts cake into identical squares.
7 A DESMOND "DEZ" ADEYEMI, 30s, tie loosened, scrolls his phone.
8 A PRIYA NAIR, 20s, intern, holds a stack of paper plates like a shield.
9 A ¶ A TALL MAN in a gray suit leans in the doorway.
10 A Clipboard.
11 A No smile.
12 A Nobody knows him.
13 D GLORIA: Cake?
14 D DEZ: I'm good.
15 D PRIYA: I'll take his. If he's not.
16 D GLORIA: Take two.
17 A ¶ Priya takes two.
18 A Eats one standing.
19 A Dez keeps scrolling.
20 D TALL MAN: Is this the Q3 alignment huddle?
21 D GLORIA: It's cake.
22 D TALL MAN: But is it a huddle?
23 D DEZ (muttering): Everything's a huddle.
24 D PRIYA: Is that bad?
25 D DEZ: It's Tuesday.
26 A ¶ The Tall Man writes something.
27 A Gloria slides a square toward him.
28 A He doesn't take it.
29 D GLORIA: You're with Compliance?
30 D TALL MAN: Efficiency.
31 D DEZ: Same floor as Compliance.
32 D TALL MAN: Different elevator.
33 A ¶ Priya laughs.
34 A Stops.
35 A Looks at Gloria.
36 A Gloria is not laughing.
37 D GLORIA: Name?
38 D TALL MAN: Hollis. Bertram Hollis.
39 D GLORIA: Mr. Hollis. Cake?
40 D BERTRAM (softening): Fine. A small one.
41 A ¶ She hands him a plate.
42 A He eats.
43 A Chews slowly.
44 A Dez finally pockets his phone.
45 D DEZ: So what's being made efficient?
46 D BERTRAM: Closets.
47 D PRIYA: This closet?
48 D BERTRAM: Any closet.
49 A ¶ Gloria and Dez trade a look.
50 A Priya stuffs the second square in her mouth whole.
51 D GLORIA: We use this one.
52 D BERTRAM: For parties.
53 D GLORIA: For morale.
54 D BERTRAM: Morale isn't a line item.
55 D DEZ: Neither is you.
56 A ¶ Silence.
57 A Priya swallows.
58 A Bertram caps his pen, uncaps it.
59 D BERTRAM: I'll note the cake.
60 D GLORIA: Note the frosting. It's lemon.
61 D BERTRAM: Lemon.
62 D PRIYA: Lemon's her mother's recipe.
63 D GLORIA: It's not.
64 D PRIYA: Oh.
65 A ¶ The door swings.
66 A A cart of toner cartridges rolls in, pushed by nobody visible.
67 A Everyone steps back.
68 A The cart bumps the cake box.
69 A Cake wobbles.
70 A ¶ All four grab at the box.
71 A Dez catches the front corner.
72 A Priya the back.
73 A Gloria the cake.
74 A Bertram the banner.
75 A Everything holds.
76 A ¶ They stand like that.
77 A Breathing.
78 D DEZ: Nobody say anything.
79 D BERTRAM: I wasn't going to.
80 D GLORIA: Mr. Hollis, you're holding a banner.
81 D BERTRAM: So I am.
82 A ¶ He doesn't let go.
83 A Neither does anyone else.
84 A The fluorescent hum fills the closet.
85 D PRIYA: Is this the huddle?
86 D BERTRAM (dry): Yes.
87 D GLORIA: Then I'd say alignment is achieved.
88 A ¶ Dez snorts.
89 A Priya giggles.
90 A Bertram, against his will, almost smiles.
91 A The cart's wheel squeaks once, and a tiny voice calls from behind the toner.
92 D MAILROOM KID [O.S.]: Sorry! Sorry. Is that Gloria's closet?
93 D GLORIA (calling): It's everyone's closet.
94 D MAILROOM KID [O.S.]: Cool. Also there's cake?
95 A ¶ Gloria hands Priya the knife.
96 D GLORIA: Cut another.

### SCENE s01066 | EXT. ARCTIC ICE SHELF - LIFE RAFT CAMP - DAY
Detected names (may be incomplete or contain aliases): JOSEPHINE TALLCHIEF, DARIUS OKAFOR, BERNADETTE LACROIX, RESCUE ONE
1 A ¶ A bright white world.
2 A A yellow raft hauled up on a floe, a tarp strung from poles, a single seal-oil stove.
3 A Wind sighs.
4 A ¶ JOSEPHINE TALLCHIEF, 30s, parka hood trimmed with fur, kneels at the stove and stirs a pot.
5 A DARIUS OKAFOR, 40s, frostbitten cheeks, sits against the raft with a rifle.
6 A BERNADETTE LACROIX, 20s, in a red survival suit, stands at the edge of the floe with a radio.
7 D BERNADETTE (into radio): Rescue One, this is the Meridian. Do you copy?
8 A ¶ The radio hisses.
9 D RESCUE ONE [V.O.] (garbled): ...Meridian... position... say again...
10 D BERNADETTE: We're at seventy-eight north.
11 D RESCUE ONE [V.O.]: ...hold... coming...
12 A ¶ She grins.
13 A Turns to the others.
14 D BERNADETTE [CONT'D]: They're coming!
15 D JOSEPHINE: How long?
16 D BERNADETTE: Two hours!
17 D DARIUS (rising): Two hours. We can make two hours.
18 A ¶ The floe groans.
19 A A crack zigzags across the ice between them.
20 A Josephine and Darius lunge for the raft as the floe splits, and Bernadette leaps across the gap, landing hard in Josephine's arms.
21 A All three tumble into the raft as the ice shelf shifts and a second crack opens right where the stove had been.
22 D JOSEPHINE: Cut the line!
23 D DARIUS: Cut the line!
24 A ¶ Bernadette hacks the rope.
25 A The raft slides free.
26 A The three huddle.
27 A The stove sinks into black water.
28 D RESCUE ONE [V.O.] (clear now): Meridian, we have you. Stay put.
