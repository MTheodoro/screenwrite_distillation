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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00006.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00343 | INT. HALL OF MIRRORS - OFF-SEASON FAIRGROUND - NIGHT
Detected names (may be incomplete or contain aliases): CORINNE DUBOIS-ADEYEMI, ARTIE, PLUMLEY
1 A ¶ A canvas-walled maze of warped glass.
2 A Half the bulbs are dead.
3 A Dust coats every frame.
4 A The mirrors turn the dark into a hundred darks.
5 A ¶ CORINNE DUBOIS-ADEYEMI, thirties, a paranormal investigator in a leather jacket, walks slowly down a corridor with a handheld lamp, her reflection stretching tall, then squat, then tall again.
6 A ¶ ARTHUR "ARTIE" PLUMLEY, seventies, the fairground's last attendant, shuffles behind her in a patched coat, a ring of keys swinging at his hip.
7 D CORINNE: Artie, you said the last visitor left in 1987.
8 D ARTIE: So I did.
9 D CORINNE: Then who is the person in the third mirror?
10 D ARTIE: Miss Dubois-Adeyemi, I wouldn't look.
11 A ¶ She looks.
12 A Her reflection waves, but she hasn't moved.
13 D CORINNE: Artie.
14 D ARTIE: Yes, miss.
15 D CORINNE: Is that me?
16 D ARTIE: It was. For a while.
17 A ¶ She steps back.
18 A Her reflection steps forward.
19 A The glass ripples like water.
20 D CORINNE: Artie, open the door.
21 D ARTIE: There's no door, miss. There's only the way you came.
22 D CORINNE: Then take me back.
23 D ARTIE: I'd love to. But I've been looking for the way out since the summer of '87.
24 A ¶ She turns.
25 A Behind her, in every mirror, Artie stands younger, smiling, and a hundred reflections of her are walking away.
26 D CORINNE (a whisper): Artie, what did you do?
27 D ARTIE: I stayed too long, miss. Same as you.
28 A ¶ The lamp gutters out.

### SCENE s00548 | INT. WILLOWBROOK CRICKET PAVILION - RAIN DELAY - DAY
Detected names (may be incomplete or contain aliases): BHASKAR VENKATARAMAN, LORD WILLOUGHBY, FANSHAWE, FLORENCE OKONKWO-BEAUFORT
1 A ¶ Dark wood.
2 A A bar with brass taps.
3 A Team photographs from a century of afternoons.
4 A Rain hammers the tin roof so hard the room rings.
5 A Through the long window, the pitch is a lake.
6 A ¶ BHASKAR VENKATARAMAN, 40s, the home captain, in whites stained green at the knee, stands at the window, arms crossed.
7 A He is silent.
8 A He has been silent for forty minutes.
9 A ¶ LORD WILLOUGHBY "BILLY" FANSHAWE, 60s, the visiting captain, a blazer and a cravat, sits in a leather armchair with a tumbler of whisky and a newspaper.
10 A He turns a page.
11 A He sips.
12 D WILLOUGHBY: Awful weather.
13 D BHASKAR: Mm.
14 D WILLOUGHBY: Might be a draw.
15 D BHASKAR: Mm.
16 D WILLOUGHBY: I say, are you going to say anything other than "Mm"?
17 D BHASKAR: I am conserving words.
18 D WILLOUGHBY: For what?
19 D BHASKAR: For when you apologize.
20 A ¶ Willoughby lowers the paper.
21 A Studies him over his glasses.
22 D WILLOUGHBY: Apologize? For what, pray?
23 D BHASKAR: For the run-out.
24 D WILLOUGHBY: Ah. That.
25 D BHASKAR: Yes. That.
26 D WILLOUGHBY: It was a perfectly legal run-out.
27 D BHASKAR: It was a gentleman's agreement. We had it. You broke it.
28 D WILLOUGHBY: Gentlemen's agreements are a bit rich, aren't they? Between you and me?
29 A ¶ Rain thunders.
30 A Somewhere a gutter overflows.
31 A ¶ FLORENCE OKONKWO-BEAUFORT, 70s, the club umpire, in a white coat and a flat cap, pushes in through the side door with a golf umbrella that is not helping.
32 A She stamps her boots.
33 D FLORENCE: Gentlemen! Ground's unplayable. I've called it.
34 D BHASKAR: Thank you, Florence.
35 D WILLOUGHBY: Dreadful, Florence. Utterly dreadful.
36 D FLORENCE: Don't you "dreadful" me, Billy Fanshawe. I saw that run-out.
37 D WILLOUGHBY: Madam --
38 D BHASKAR: She saw it.
39 D WILLOUGHBY: Thank you, Bhaskar, I can speak for myself --
40 D FLORENCE: I've umpired for thirty-one years. I've seen every kind of foul play. But I've never seen a man do it with such a smile.
41 D WILLOUGHBY (stiffly): It was an honest mistake.
42 D BHASKAR (to Florence): It wasn't.
43 D FLORENCE (to Bhaskar): It wasn't.
44 A ¶ Willoughby sets down his glass.
45 A The ice clinks.
46 A He stands, too fast, and knocks his knee against the table.
47 D WILLOUGHBY: Very well! I concede! It was a bad piece of sportsmanship!
48 A ¶ Silence.
49 A Rain.
50 A The old photographs watch from the walls.
51 D BHASKAR: And?
52 D WILLOUGHBY: And... I apologize.
53 D BHASKAR: To whom?
54 D WILLOUGHBY (through his teeth): To you, Captain Venkataraman.
55 D BHASKAR: And?
56 D WILLOUGHBY: And to Florence.
57 D FLORENCE: And?
58 D WILLOUGHBY: And... to the game.
59 A ¶ The tin roof crackles.
60 A Bhaskar's mouth twitches.
61 A Florence shakes her umbrella, spraying them both.
62 D BHASKAR: Thank you.
63 D FLORENCE: Tea?
64 D WILLOUGHBY: Whisky.
65 D FLORENCE: Tea.
66 A ¶ She pours three cups from a brown pot.
67 A They sit around the table, three old foes in damp white, listening to the water drown the pitch.

### SCENE s01999 | INT. RECORDING BOOTH, DEFUNCT RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): MIRIAM OKONKWO-DELACROIX
1 A ¶ Egg-crate foam on every wall.
2 A A dusty microphone on a boom.
3 A A reel-to-reel recorder with one reel running.
4 A A lamp with a green glass shade.
5 A ¶ MIRIAM OKONKWO-DELACROIX (60s, hair gone white, wool coat still buttoned) sits at the console with a thermos and a cassette recorder.
6 A A red light glows on the cassette.
7 D MIRIAM (into microphone): Testing. One, two. This is Miriam, speaking into the old microphone, Tuesday the ninth.
8 D MIRIAM [V.O.] (from the reel, younger, bright): Good evening and welcome to the Night Owl Hour. I'm Miriam Okonkwo, keeping you company until dawn.
9 D MIRIAM: That voice has no idea.
10 D MIRIAM [V.O.] (from the reel): Tonight's request comes from a gentleman in Marlow Street, who writes: play something for my wife, we've been married thirty years.
11 D MIRIAM: Thirty years. I remember that card.
12 D MIRIAM [V.O.] (from the reel): And so, for Walter and Eleanor. Here's the Platters.
13 D MIRIAM: Walter died in the spring. Eleanor wrote to tell me.
14 D MIRIAM [V.O.] (from the reel): This one is for the ones who stay up late.
15 D MIRIAM: I'm staying up. Don't worry.
16 D MIRIAM [V.O.] (from the reel): Which is most of us, if we're honest.
17 D MIRIAM: Most of us. That's right.
18 D MIRIAM [V.O.] (from the reel): Because the night is long, and the dial is lonely, and I'm here.
19 D MIRIAM: I am here. I'm here, dear.
20 D MIRIAM [V.O.] (from the reel, a fade): Stay tuned. I'll be back after this song.
21 D MIRIAM (into microphone): Station's closing Friday. Last transmission is at midnight. I thought I'd record a goodbye. For whoever's listening.
22 D MIRIAM [V.O.] (from the reel): Good night, owls.
23 D MIRIAM (into microphone): Good night, owls.

### SCENE s00579 | EXT. EIFFEL TOWER - SECOND PLATFORM SCAFFOLD - DAY (1888)
Detected names (may be incomplete or contain aliases): ODETTE LACROIX, JULES PERRIN, INSPECTOR MAXIME BOUCHARD
1 A ¶ Wind.
2 A Paris spreads below like a map.
3 A Iron beams ring with hammers.
4 A ¶ She crouches on a plank, a bolt of grey wool across her knees, stitching a harness.
5 A ODETTE LACROIX, 22, seamstress, calloused fingertips, a scar on her chin.
6 A ¶ Twenty feet off, he walks a girder like a tightrope, a rivet gun on his hip.
7 A JULES PERRIN, 25, rivetter, cap low, easy balance.
8 A ¶ She doesn't look up.
9 A He grins anyway.
10 D JULES: That one for me?
11 D ODETTE: For whoever falls first.
12 A ¶ He crosses the beam.
13 A Drops beside her.
14 A Close.
15 D JULES: Then it's for you.
16 A ¶ She bites the thread.
17 A Hands him the harness.
18 D ODETTE: Put it on.
19 A ¶ He does.
20 A She tightens the buckle with a brisk tug.
21 A He winces and smiles.
22 A She doesn't smile.
23 A Her eyes slide to the beam behind him.
24 A ¶ A man's head rises from the ladder shaft.
25 A Bowler hat.
26 A Black coat.
27 A Soft hands.
28 A INSPECTOR MAXIME BOUCHARD, 50, with a notebook, climbing like a man who hates heights.
29 D BOUCHARD: Monsieur Perrin?
30 A ¶ Jules turns.
31 A Goes still.
32 A Odette's needle stops in the wool.
33 D BOUCHARD [CONT'D]: The foreman says you were here Tuesday night.
34 D JULES: I was home.
35 D BOUCHARD: The foreman says otherwise.
36 A ¶ Silence.
37 A The wind lifts his notebook pages.
38 A He grips them.
39 D ODETTE: He was with me.
40 A ¶ Bouchard looks at her.
41 A A long moment.
42 A Then he closes the notebook.
43 D BOUCHARD: Of course he was.
44 A ¶ He turns and descends the ladder.
45 A They watch the bowler vanish.
46 A She exhales.
47 A He lets his shoulders drop.
48 D JULES: You didn't have to.
49 D ODETTE: Yes.
50 A ¶ She picks the needle back up.

### SCENE s01698 | EXT. BRIDGE OVER A BOTTOMLESS RAVINE - DAWN
Detected names (may be incomplete or contain aliases): HOODED TRAVELER, TROLL, ORVAL GRUNDSTONE, MAELIS
1 A ¶ A rope bridge strung between two cliffs, shrouded in mist.
2 A Below, a river roars unseen.
3 A ¶ A HOODED TRAVELER (30s, patched cloak, a staff in hand) stands at the near end.
4 A On the far side waits a TROLL, ORVAL GRUNDSTONE (towering, mossy, a toll ledger tucked under one arm).
5 D HOODED TRAVELER: Is this the only crossing?
6 D ORVAL: Only one for a hundred leagues.
7 D HOODED TRAVELER: Then I'll pay the toll.
8 D ORVAL: Toll is a story. A true one.
9 A ¶ The traveler sets down the staff, lowers the hood to reveal a weathered face and a braid of silver-streaked hair.
10 D HOODED TRAVELER: Very well. My name is Maelis. I was a queen.
11 D ORVAL: Many were.
12 D MAELIS: I lost my crown to my brother.
13 D ORVAL: Many did.
14 D MAELIS: I killed him for it.
15 A ¶ Orval stops writing in the ledger.
16 A The mist swirls between them.
17 D ORVAL: That is new.
18 D MAELIS: Is it enough?
19 D ORVAL: It is a beginning. Cross. Mind the third plank.
20 A ¶ She steps onto the bridge.
21 A It sways.
22 A She grips the rope.
23 D MAELIS: I will mind it.
24 D ORVAL: I did not say it was safe.
25 A ¶ She crosses, plank by plank, one hand always on the rope.
26 A At the third plank she pauses, steps over it, and continues.
27 A On the far side, Orval offers a massive hand to help her up.
28 A She takes it.
29 D ORVAL [CONT'D]: Your name was Maelis.
30 D MAELIS: It still is.
31 D ORVAL: Is it?
32 A ¶ She smiles, thin and tired, and walks on into the mist.

### SCENE s01017 | EXT. SLED-DOG CHECKPOINT - ARCTIC DUSK
Detected names (may be incomplete or contain aliases): INGRID, BAPTISTE, MARSHAL VOGEL
1 A ¶ A canvas tent in a field of blue snow.
2 A A propane heater.
3 A A rack of frozen dogs' booties.
4 A Wind flaps the tent walls.
5 A Overhead, the aurora begins to spill green.
6 A ¶ INGRID (30s, parka, frost in her eyelashes) kneels beside a team of eight huskies, rubbing a dog's paw.
7 A BAPTISTE (40s, race vet, orange snowsuit, stethoscope) checks another dog's heartbeat.
8 A A handheld radio crackles on a crate between them.
9 D MARSHAL VOGEL [V.O.] (radio): Checkpoint Four, this is Race Control. Status on team nineteen.
10 D INGRID: Race Control, team nineteen is at Checkpoint Four. Two hours rest. Then out.
11 D MARSHAL VOGEL [V.O.]: Negative. Storm front closing. You have twenty minutes.
12 D INGRID (to Baptiste): Twenty minutes?
13 D BAPTISTE: She can't run eight dogs in twenty.
14 D INGRID: They can.
15 D BAPTISTE: Not that one.
16 A ¶ He points.
17 A A big gray husky named Ash lies on his side, tongue lolling, ribs fluttering.
18 A Ingrid's face drops.
19 A She crawls to him.
20 D INGRID: Ash. Hey. Hey, big man.
21 D BAPTISTE: He's dehydrated. I'm pulling him from the team.
22 D INGRID: No.
23 D BAPTISTE: Ingrid.
24 D INGRID: He's my lead.
25 D BAPTISTE: He's a dog.
26 D INGRID: He's my lead dog.
27 A ¶ The radio crackles again.
28 D MARSHAL VOGEL [V.O.]: Team nineteen, you have fifteen.
29 A ¶ Ingrid grabs the radio.
30 D INGRID: Race Control, scratch team nineteen.
31 D MARSHAL VOGEL [V.O.]: Say again?
32 D INGRID: I'm scratching. I'm staying with my dog.
33 A ¶ A beat of static.
34 A Baptiste smiles, and brings her a cup of water for Ash.
35 A Above them the aurora breaks wide and green across the dark.

### SCENE s00099 | INT. NIGHT TRAIN - SLEEPER COMPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): CLEMENCE ARDOIN, SULEIMAN HADDAD
1 A ¶ A narrow cabin of dark wood and brass.
2 A Two bunks.
3 A A lamp swings with the rails.
4 A Rain slides sideways down the window.
5 A ¶ CLEMENCE ARDOIN (30s, wool coat, hair undone) sits on the lower bunk with her shoes still on.
6 A SULEIMAN HADDAD (30s, travel-worn suit, a single suitcase) stands at the window with his back to her.
7 A He does not turn.
8 A ¶ She watches the back of his neck.
9 A He watches the dark.
10 D CLEMENCE: You could have taken another car.
11 D SULEIMAN: There was no other car.
12 D CLEMENCE: There's always another car.
13 D SULEIMAN: Not at two in the morning.
14 D CLEMENCE: You didn't ask.
15 D SULEIMAN: Neither did you.
16 A ¶ The rails clack.
17 A She smooths her skirt.
18 A He loosens his tie, pulls it off, folds it once, twice, and tucks it in his pocket.
19 D CLEMENCE: Tell me why you came.
20 D SULEIMAN: I told you.
21 D CLEMENCE: You told me a story about a conference.
22 D SULEIMAN: It was a good conference.
23 D CLEMENCE: In Lyon. Where I live.
24 D SULEIMAN: It's a big city.
25 D CLEMENCE: Suleiman.
26 D SULEIMAN: Clemence.
27 D CLEMENCE: Say it.
28 D SULEIMAN: I got on the wrong train.
29 D CLEMENCE: You got on the right one.
30 D SULEIMAN: That's worse.
31 D CLEMENCE: Yes.
32 A ¶ He finally turns.
33 A The lamp lights half his face.
34 A She is already standing.
35 A They are closer than either planned.
36 D SULEIMAN: Six years.
37 D CLEMENCE: Seven in March.
38 D SULEIMAN: You counted.
39 D CLEMENCE: You didn't?
40 D SULEIMAN: Every day.
41 D CLEMENCE: Then why is this the first time?
42 D SULEIMAN: Because you would have said no.
43 D CLEMENCE: I might have said yes.
44 D SULEIMAN: Might.
45 D CLEMENCE: Might.
46 A ¶ The train screams around a curve and throws her against his chest.
47 A He catches her.
48 A Neither lets go.
49 D CLEMENCE [CONT'D]: That was an accident.
50 D SULEIMAN: I know.
51 D CLEMENCE: I'm not sorry.
52 D SULEIMAN: Neither am I.
53 A ¶ She slaps him, hard, across the cheek.
54 A He doesn't flinch.
55 A She slaps him again, and then she is crying, and then she is holding onto his lapels, and he says her name into her hair, again and again, as the rain beats on the glass and the train carries them toward a station neither of them knows.

### SCENE s00869 | EXT. ENCHANTED ORCHARD, STONE WELL - DAWN
Detected names (may be incomplete or contain aliases): ALARIC THORNE, PERCIVAL ASHDOWN
1 A ¶ Apple trees hang heavy with silver fruit.
2 A Mist curls over the grass.
3 A A moss-green well stands at the center, its rim carved with runes that faintly glow.
4 A ¶ ALARIC THORNE, thirties, a wandering knight in a travel-stained cloak, kneels at the well's edge, lowering a leather bucket on a rope.
5 A His horse grazes nearby.
6 A ¶ The bucket rises.
7 A He tips it and drinks from his hands.
8 A The water glitters.
9 A ¶ A branch snaps behind him.
10 A He spins, hand on his hilt.
11 A ¶ PERCIVAL ASHDOWN, thirties, in a scholar's gray robe, steps out of the trees with a satchel over one shoulder and a book in his hand.
12 A He raises his empty palm.
13 D PERCIVAL: Peace, friend. I mean no harm.
14 D ALARIC: Most who say that do.
15 D PERCIVAL: Then I shall say it quietly.
16 A ¶ Alaric lowers his hand.
17 A Percival smiles, steps to the well, and peers over the rim.
18 D PERCIVAL [CONT'D]: You've drunk from it.
19 D ALARIC: I was thirsty.
20 D PERCIVAL: Of course. Everyone is.
21 A ¶ He closes his book and tucks it into the satchel.
22 D ALARIC: What does it do?
23 D PERCIVAL: It shows you what you've lost.
24 D ALARIC: I've lost nothing.
25 D PERCIVAL: Then you won't mind looking.
26 A ¶ He nods at the well.
27 A Alaric hesitates, then bends over the rim.
28 A The water stills.
29 A Something pale rises in it.
30 A He watches it for a long moment, and his shoulders go slack.
31 A ¶ He turns away from the well and wipes his face with his sleeve.
32 A He does not look at the scholar, who has the decency to look at the trees.
33 D ALARIC [CONT'D]: How far is the nearest village?
34 D PERCIVAL: Half a day. I will walk with you, if you like.
35 D ALARIC: I prefer to walk alone.
36 D PERCIVAL: Then I shall walk very far behind.
37 A ¶ Alaric almost smiles.
38 A He gathers his horse's reins and starts across the orchard.
39 A Percival waits until the knight is a dozen paces ahead, then follows, whistling softly.

### SCENE s01016 | EXT. CORN MAZE - NIGHT
Detected names (may be incomplete or contain aliases): WYATT, JOLENE, BUBBA, TINA
1 A ¶ Walls of dry stalks twice head-height.
2 A Moon behind thin cloud.
3 A The paths twist like intestines.
4 A Wind rustles the husks.
5 A ¶ WYATT (20s, letterman jacket, flashlight) leads, sweeping the beam.
6 A JOLENE (20s, hoodie, nervous giggle) clutches his sleeve.
7 A BUBBA (30s, big man, camo cap, a bag of beef jerky) bumps behind them.
8 A TINA (teen, braces, a phone held up like a candle) trails at the rear.
9 A ¶ They stop at a fork.
10 A Wyatt aims the beam left, then right.
11 A Corn stalks lean in on both sides like crowding spectators.
12 D WYATT: Which way?
13 D TINA: I'm out of battery.
14 D JOLENE: We came in from the left.
15 D BUBBA: We came in from the right.
16 A ¶ They freeze.
17 A The wind stops.
18 A Somewhere in the rows, a stalk snaps.
19 A Another.
20 A A third, closer.
21 A Wyatt kills the light.
22 A ¶ A shape rises from the left path.
23 A Tall.
24 A Thin.
25 A Wearing a feed-sack head.
26 A It tilts.
27 A Stares.
28 A ¶ Jolene screams.
29 A Bubba drops the jerky.
30 A Wyatt grabs both girls and wheels right.
31 A They sprint, crashing through stalks, but the shape follows without hurrying, gliding between the rows like a fish.
32 A Tina trips.
33 A Bubba hauls her up by the hood, and the four of them burst into a small clearing at the center of the maze.
34 A ¶ A wooden scarecrow, upright on a pole, waits there.
35 A Its sack head turns to face them.
36 A ¶ They scatter.

### SCENE s00318 | INT. PRESCHOOL PLAYGROUND - NAP TIME - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDMA ODALIE KOWALSKI-ADEYEMI, BERTIE, NNAMDI-LINDGREN, AUNT RUFINA PRYCE-OYELARAN, COUSIN TAVIAN BRAITHWAITE-OSEI, BABY SITTER, JOJO, ABARA-FENWICK, LITTLE ZURI ADEKUNLE-HOLM
1 A ¶ Foam mats.
2 A Mobile of felt moons.
3 A Six figures in miniature chairs at a very small table, holding very small teacups.
4 A ¶ GRANDMA ODALIE KOWALSKI-ADEYEMI (70s, church hat).
5 A UNCLE BARTHOLOMEW "BERTIE" NNAMDI-LINDGREN (50s, delivery uniform).
6 A AUNT RUFINA PRYCE-OYELARAN (40s, scrubs).
7 A COUSIN TAVIAN BRAITHWAITE-OSEI (30s, suit).
8 A THE BABY SITTER, MS. JOSEPHINE "JOJO" ABARA-FENWICK (20s, lanyard).
9 A And the child, LITTLE ZURI ADEKUNLE-HOLM (4, tutu over snow pants).
10 D ZURI (solemn): More tea, please.
11 D ODALIE: Of course, dear.
12 A ¶ She pours from an empty pot.
13 A Bertie sips from a cup of nothing.
14 A Rufina checks her watch.
15 A Tavian's phone buzzes; he silences it.
16 A Jojo mouths along with every word.
17 D ZURI: She spilled.
18 D BERTIE: She did?
19 D RUFINA: She did not.
20 D TAVIAN: She did a little.
21 D ODALIE: He's lying. She spilled a lot.
22 D ZURI: He did it.
23 D JOJO: Who's he?
24 D ZURI: Him.
25 A ¶ Everybody points at somebody else.
26 D ZURI [CONT'D]: Nap time!
27 A ¶ They lower their heads onto the table, one by one, a perfect silent tableau.
28 A Zuri peeks.
29 A Smiles.
30 A Lowers her head too.

### SCENE s00999 | INT. TRAIN CAR FIELD HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): IYER, LUDMILLA
1 A ¶ A converted freight car rolling through mountains.
2 A Cots bolted to the walls.
3 A Lanterns on hooks.
4 A A surgical table at the center, bolted to the floor.
5 A Rain hammers the roof.
6 A Every few seconds the wheels shriek over a joint.
7 A ¶ DR. IYER (40s, surgeon, cap, apron already stained) stands at the table, sleeves rolled.
8 A LUDMILLA (30s, a patient strapped to the table, face gray with pain, a bloody dressing across her abdomen) stares at the ceiling.
9 D IYER: Ludmilla, I need you to stay with me.
10 D LUDMILLA: I am here.
11 D IYER: Count backwards from ten.
12 D LUDMILLA: Ten. Nine.
13 D IYER: Good.
14 A ¶ He lays out instruments on a tray.
15 A A forceps clatters to the floor.
16 A He picks it up, wipes it with a rag, and sets it back.
17 A His hands shake only slightly.
18 D LUDMILLA: Doctor. Your hands.
19 D IYER: They always do before.
20 D LUDMILLA: Do they stop?
21 D IYER: When the knife starts.
22 A ¶ She smiles weakly.
23 A The train lurches.
24 A The tray slides.
25 A Iyer catches it with one hand and steadies her shoulder with the other.
26 D IYER [CONT'D]: Eight?
27 D LUDMILLA: Eight.
28 A ¶ He pours antiseptic over the wound.
29 A She hisses through her teeth, her fingers digging into the table's edge.
30 A He talks fast and low, never looking up, laying gauze, clamping a bleeder, pressing a pad flat with the heel of his palm while she shudders and clenches her jaw and the lantern swings over both of them.
31 D IYER: Seven.
32 D LUDMILLA: Seven. Seven.
33 D IYER: Stay with me.
34 D LUDMILLA: Doctor, there is something you must know.
35 D IYER: Later.
36 D LUDMILLA: I am not what I told you.
37 D IYER: Ludmilla.
38 D LUDMILLA: The papers in my coat. They are false.
39 A ¶ He doesn't answer.
40 A Cuts.
41 A She gasps.
42 A Blood pools.
43 A He suctions it with a rubber bulb, swabs, clamps again.
44 D IYER: Six.
45 D LUDMILLA: I am a courier. For the partisans.
46 D IYER: Five. Keep counting.
47 D LUDMILLA: There is a name in the lining. Memorize it.
48 D IYER: I am busy.
49 D LUDMILLA: Please.
50 A ¶ He glances at her coat, hanging on the wall hook.
51 A Then back at her.
52 A She is crying now, silently, tears running into her ears.
53 D IYER: What is the name?
54 D LUDMILLA: Commander Alder. Station nine.
55 D IYER: Alder. Station nine.
56 D LUDMILLA: Say it again.
57 D IYER: Alder. Station nine. Four.
58 D LUDMILLA: Four.
59 A ¶ The wheels shriek.
60 A A flash of lightning lights the car white.
61 A For a moment the lantern, the table, the two of them are frozen like a photograph.
62 D IYER: Three.
63 D LUDMILLA: Three... two...
64 A ¶ Her voice fades.
65 A Her eyes flutter.
66 A He pushes a final suture through, ties it, and cuts the thread.
67 D IYER: One.
68 A ¶ She doesn't answer.
69 A He presses two fingers to her neck.
70 A Waits.
71 A Her chest rises.
72 A Falls.
73 A Rises.
74 A ¶ He sags against the table.
75 A Tears off his gloves.
76 A Looks at her coat on the hook.
77 A Then, with the care of a man who has decided something, he crosses the car, lifts the hem, and finds the lining.
78 A ¶ Behind him, Ludmilla opens one eye.
79 D LUDMILLA: You were supposed to forget.
80 D IYER: I never forget a name.

### SCENE s00543 | EXT. PARKING GARAGE ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): FRANCINE OYELOWO, LENNY
1 A ¶ Sodium lights.
2 A Oil stains.
3 A One car left, a faded blue sedan with a flat front tire.
4 A The city glows beyond the low concrete wall.
5 A ¶ FRANCINE OYELOWO, 40s, a dental hygienist's scrubs under a trench coat, kneels at the flat with a jack and a lug wrench.
6 A Her younger brother LEONARD "LENNY" OYELOWO, 30s, a rumpled courier's jacket, leans against the wall with a cigarette he hasn't lit.
7 A ¶ She wrestles a lug nut.
8 A It doesn't budge.
9 D LENNY: Want me to?
10 D FRANCINE: No.
11 D LENNY: It's been twenty minutes.
12 D FRANCINE: Then it's been twenty minutes.
13 A ¶ He pockets the cigarette.
14 A Watches.
15 A She grunts, adjusts her grip, tries again.
16 D LENNY: Fran.
17 D FRANCINE: Don't.
18 D LENNY: I didn't say anything.
19 D FRANCINE: You said "Fran" like you were going to say something.
20 A ¶ He lets that sit.
21 A Wind carries the faint sound of a siren from the street.
22 D LENNY: Mom called.
23 A ¶ She stops.
24 A The wrench hangs from her hand.
25 D FRANCINE: When?
26 D LENNY: This morning. She asked if you were coming Sunday.
27 D FRANCINE: And what did you say?
28 D LENNY: I said I'd ask.
29 D FRANCINE: Why would you ask me?
30 D LENNY: Because you won't answer her.
31 A ¶ She resumes.
32 A Harder.
33 A The wrench scrapes.
34 A The lug nut turns half a rotation.
35 D FRANCINE: She's been telling people I'm "away on business."
36 D LENNY: It's easier than saying you left.
37 D FRANCINE: I didn't leave. I moved.
38 D LENNY: Four hundred miles is leaving.
39 A ¶ She rocks back on her heels.
40 A Looks up at him.
41 A Her face is wet, but her voice is level.
42 D FRANCINE: You want to talk about leaving? You sent a postcard for two years.
43 D LENNY: It was a good postcard.
44 D FRANCINE: It said, "Weather's nice."
45 D LENNY: It was.
46 A ¶ A brittle laugh escapes her.
47 A He allows himself a half smile.
48 A Then it fades.
49 D LENNY [CONT'D]: I should've called.
50 D FRANCINE: Yes.
51 D LENNY: I should've come.
52 D FRANCINE: Yes.
53 D LENNY: I'm here now.
54 D FRANCINE: You're here because my car broke down.
55 D LENNY: No. I'm here because I got the text.
56 A ¶ She stares.
57 A He takes the wrench from her hand, kneels, fits it on the lug nut.
58 A Braces.
59 A Leans his full weight.
60 A ¶ It gives with a crack.
61 D FRANCINE (quietly): Show-off.
62 D LENNY: Always.
63 A ¶ He keeps going.
64 A Four nuts, a flat, the spare.
65 A She hands him each tool before he asks.
66 A They work in silence for a long minute, side by side, in the rhythm of two people who learned this from the same father.
67 D FRANCINE: Dad hated the way you held the wrench.
68 D LENNY: Dad hated everything I held.
69 D FRANCINE: That isn't true.
70 D LENNY: He hated the way I held you. When you cried.
71 A ¶ She freezes.
72 D FRANCINE: You remember that?
73 D LENNY: Every day.
74 A ¶ She turns away, looks out over the wall at the lit city.
75 A Her shoulders shake once.
76 A He doesn't touch her.
77 A He keeps working.
78 D FRANCINE: Why now?
79 D LENNY: Because Mom's sick, Fran.
80 A ¶ The words hang.
81 A She does not turn.
82 D FRANCINE: How sick?
83 D LENNY: Sick.
84 A ¶ She closes her eyes.
85 A Presses both hands against the cold concrete.
86 D FRANCINE: You waited till the rooftop to tell me.
87 D LENNY: You wouldn't have heard it anywhere else.
88 A ¶ She nods.
89 A Slowly.
90 A A man's hand and a woman's hand finally touch on the wrench, and neither moves.
91 D FRANCINE: Sunday.
92 D LENNY: Sunday.
93 A ¶ She takes the wrench.
94 A Finishes the last nut herself.

### SCENE s01379 | INT. BOWLING ALLEY - LANE 12 - NIGHT
Detected names (may be incomplete or contain aliases): COACH ARTIE KOWALCZYK, RUBY DELGADO, TEDDY BRIGHT, DEVON WALLACE, FUJIMOTO, GIL SANTORO
1 A ¶ Championship night.
2 A Cigarette haze under the neon.
3 A A scoreboard overhead: Ninth frame.
4 A Tied, 218 to 218.
5 A ¶ COACH ARTIE KOWALCZYK, 60s, sweat-stained cardigan, stands behind the bench chewing a toothpick down to nothing.
6 A At the approach, RUBY DELGADO, 20s, steps up with a pink ball, wipes her palm on a towel, never meeting his eyes.
7 A Behind her, TEDDY BRIGHT, 19, rubs his bad shoulder against the rail.
8 A DEVON WALLACE, 30s, the anchor, folds his arms and watches the pins.
9 A Two rows back on the bench, the tiny MRS. FUJIMOTO, 70s, knits a scarf, needles clicking steadily.
10 A At the far lane, rival captain GIL SANTORO, 40s, grins and spins a ball on one finger.
11 D ARTIE: Spare, Ruby. That's all we need.
12 A ¶ Ruby nods.
13 A Takes her stance.
14 A Behind her, Teddy stops rubbing his shoulder.
15 A Devon unfolds his arms.
16 A Mrs. Fujimoto drops a stitch.
17 A ¶ She releases.
18 A The ball rolls down the oil, swerving left, then straight.
19 A Pins explode.
20 A Nine.
21 A ¶ One left.
22 A The ten pin wobbles.
23 A Everybody holds their breath.
24 A ¶ It stands.
25 A ¶ Ruby turns slowly.
26 A Walks back to the bench.
27 A Sits beside Mrs. Fujimoto.
28 A Picks up her towel.
29 A Folds it into a perfect square.
30 D ARTIE: That's okay.
31 A ¶ Devon takes the pink ball from the rack.
32 A Weighs it.
33 A Hands it back to her.
34 D DEVON: Again.
35 D RUBY: It's not my turn.
36 D DEVON: I know.
37 A ¶ He walks to the approach himself.

### SCENE s01985 | INT. GREENHOUSE, BOTANICAL GARDEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): IZABELA FONTANAROSA, ARSLAN DEMIRTA, WELLS
1 A ¶ Glass and iron.
2 A Fog on the panes.
3 A Banana palms, orchids dripping with condensation, a stone bench in a clearing of ferns.
4 A ¶ IZABELA FONTANAROSA (40s, garden curator, gardening gloves tucked in her belt, silver in her braid) sits on the bench with a thermos.
5 A ¶ ARSLAN DEMIRTAŞ-WELLS (40s, visiting botanist, rain-damp coat, field notebook) stands in the doorway, dripping.
6 D ARSLAN: Is this the Victorian wing?
7 D IZABELA: It's the only wing.
8 D ARSLAN: Then I'm in the right place.
9 D IZABELA: You're wet.
10 D ARSLAN: I walked from the station.
11 D IZABELA: It's eleven miles.
12 D ARSLAN: I like to walk.
13 D IZABELA: You like to make a point.
14 D ARSLAN: I like to make a point while walking.
15 A ¶ She pours a second cup from the thermos and sets it on the bench beside her.
16 A He crosses the clearing and sits.
17 A Takes the cup.
18 A Drinks.
19 A Closes his eyes.
20 D ARSLAN [CONT'D]: That's not coffee.
21 D IZABELA: Chicory. I stopped drinking coffee the year you left.
22 D ARSLAN: You hated coffee before I left.
23 D IZABELA: I hated how you made it.
24 D ARSLAN: I made it with love.
25 D IZABELA: You made it with a blowtorch.
26 D ARSLAN: The stove was broken.
27 D IZABELA: The stove was fine. You liked the blowtorch.
28 D ARSLAN: It had personality.
29 D IZABELA: So did the smoke alarm.
30 D ARSLAN: You kept that.
31 D IZABELA: I replace the battery every spring.
32 D ARSLAN: Why?
33 D IZABELA: Because you'd have wanted me to.
34 A ¶ He puts the cup down.
35 A Turns on the bench to face her.
36 D ARSLAN: Izabela, I got your letter about the orchid.
37 D IZABELA: The Paphiopedilum.
38 D ARSLAN: The Paphiopedilum.
39 D IZABELA: It bloomed.
40 D ARSLAN: After eleven years?
41 D IZABELA: Eleven years, two months, nine days.
42 D ARSLAN: You counted.
43 D IZABELA: I'm a curator. I count things.
44 D ARSLAN: I'd like to see it.
45 D IZABELA: It's behind you.
46 A ¶ He turns.
47 A Between two ferns, in a shaft of gray morning light, a slipper orchid hangs, mottled maroon and green.
48 A He stands.
49 A Walks to it.
50 A Touches nothing.
51 D ARSLAN: Oh.
52 D IZABELA: Yes.
53 D ARSLAN: It looks like you.
54 D IZABELA: Don't be absurd.
55 D ARSLAN: Stubborn, and magnificent, and not at all pleased to see me.
56 D IZABELA: I'm pleased.
57 D ARSLAN: You're not smiling.
58 D IZABELA: I'm smiling with my gloves on.
59 D ARSLAN: Take them off.
60 D IZABELA: They're in my belt.
61 D ARSLAN: Then take them out.
62 A ¶ She laughs, and it surprises her.
63 A She stands and joins him at the orchid.
64 A They look at it together for a long time.
65 D ARSLAN [CONT'D]: Eleven years.
66 D IZABELA: Two months, nine days.
67 D ARSLAN: I'd like to stay for the second bloom.
68 D IZABELA: That could take another eleven years.
69 D ARSLAN: I walked eleven miles.
70 D IZABELA: You did.
71 D ARSLAN: I can wait.

### SCENE s00161 | INT. GENERATION SHIP "MERIDIAN" - SEED VAULT - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN IFEOMA ROTHSCHILD-ADAMU, CHIEF BOTANIST HAKON LEIVESTAD, ENGINEER PRAVEEN MBANDAKA-DOYLE, TECHNICIAN SOLENNE ACHTERBERG-NGO, YUSUF KAZEMI-BROOKS, BRIDGE, COMMANDER DEWITT LARKSPUR-OSEI, LARKSPUR
1 A ¶ A frozen cavern of steel drawers, floor to ceiling.
2 A Blue frost on the rails.
3 A Breath fogs in the air.
4 A ¶ Five crew in thermal suits, headlamps swinging, work a cart down the center aisle.
5 A ¶ CAPTAIN IFEOMA ROTHSCHILD-ADAMU, 50s, leads.
6 A CHIEF BOTANIST HAKON LEIVESTAD, 40s, carries a scanner.
7 A ENGINEER PRAVEEN MBANDAKA-DOYLE, 30s, hauls a toolbox.
8 A TECHNICIAN SOLENNE ACHTERBERG-NGO, 20s, monitors a wrist display.
9 A And YUSUF KAZEMI-BROOKS, 30s, medic, trails with a field kit.
10 D IFEOMA (to all): Vault Four. Be quick. The air scrubbers fail in nine minutes.
11 D HAKON: Drawer four-twelve.
12 D PRAVEEN (muttering): Four-twelve, four-twelve.
13 D SOLENNE: Temperature's rising.
14 D YUSUF: How much?
15 D SOLENNE: Two degrees. In a minute.
16 D IFEOMA: Move.
17 A ¶ They reach the drawer.
18 A Hakon scans.
19 A Green light.
20 A He pulls.
21 A Inside: row upon row of tiny vials, frosted white.
22 D HAKON (softly): The wheat.
23 D PRAVEEN: Take it.
24 D HAKON: All of it.
25 A ¶ He lifts a rack.
26 A Hands it to Solenne.
27 A She slides it into a cooler.
28 A Yusuf hovers, anxious.
29 A ¶ The ship shudders.
30 A A klaxon begins, low and pulsing.
31 D IFEOMA (into her collar): Bridge, status.
32 D BRIDGE [V.O.] (radio, tinny): Captain, we've lost cooling on Deck Nine. You have six minutes.
33 D IFEOMA: Understood.
34 A ¶ At the far end of the aisle, a hatch slides open.
35 A A figure steps through, silhouetted by red emergency light.
36 A ¶ COMMANDER DEWITT LARKSPUR-OSEI, 60s, black uniform, a sidearm drawn, stands in the doorway.
37 D LARKSPUR: Nobody touches the seed.
38 A ¶ The five crew freeze.
39 A Hakon, mid-lift, half-turns.
40 A Praveen's toolbox hits the floor.
41 A Solenne steps back.
42 A Yusuf raises both hands.
43 A Ifeoma does not move.
44 D IFEOMA: Commander. The vault is failing.
45 D LARKSPUR: The vault is mine.
46 D IFEOMA: The ship will starve.
47 D LARKSPUR: The ship will obey.
48 A ¶ A tense silence.
49 A The klaxon pulses.
50 D SOLENNE (whispering): Captain...
51 D IFEOMA (low): Easy.
52 D HAKON (to himself): The wheat is warming.
53 A ¶ Ifeoma takes one slow step forward, palms open.
54 D IFEOMA: Dewitt. We both took the oath.
55 D LARKSPUR: I took it first.
56 A ¶ He steps closer.
57 A The gun trembles.
58 D IFEOMA: Then keep it. Open the lock. Let us take the seed.
59 A ¶ A beat.
60 A Then Larkspur lowers his weapon.
61 A Hand shaking, he pulls a keycard from his jacket and sweeps it over the panel.
62 A A deep thunk.
63 A The vault door opens wider.
64 D LARKSPUR (hoarse): Go.
65 A ¶ They run.
66 A The cart rattles.
67 A Frost sprays from the wheels.
68 A Behind them, the Commander stays by the hatch, watching them vanish into the dark with the ship's future in a cooler.

### SCENE s02293 | INT. DENTIST WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): CLOWN, PATRICIA VOSS, DEEDEE, MILO, JUANITA, GUS
1 A ¶ Beige chairs.
2 A A fish tank.
3 A A bowl of lollipops marked FOR GOOD PATIENTS ONLY.
4 A ¶ A CLOWN in full costume sits stiffly with a balloon animal.
5 A DR. PATRICIA VOSS, the dentist, in a mask, hovers by the door.
6 A DEEDEE, her receptionist, types.
7 A A little boy, MILO, six, wails in his mother's lap.
8 A His mother, JUANITA, bounces him.
9 D DEEDEE: Mr. Clown? You're next.
10 D CLOWN: I'm not a patient. I'm the entertainment.
11 D DR. VOSS: We didn't book entertainment.
12 D CLOWN: Somebody did. Under "Gus."
13 D DEEDEE: Gus?
14 D CLOWN: That's me. Gus the Clown.
15 D GUS (tapping his nose): Honk.
16 A ¶ MILO shrieks.
17 A Juanita clamps her hand over his mouth.
18 A Dr. Voss and Deedee both lunge for the lollipops.
19 A The three adults collide at the bowl, sending lollipops flying; Gus slips, his balloon dog squeaks, and the fish tank sloshes.
20 A ¶ Milo stops crying.
21 A He stares at Gus.
22 D MILO: Do the dog again.
23 A ¶ Gus, flat on the floor, honks.

### SCENE s00569 | INT. GRAND PALMERSTON HOTEL - VENTRILOQUISTS' CONVENTION - BACKSTAGE - NIGHT
Detected names (may be incomplete or contain aliases): ANNUAL INTERNATIONAL CONGRESS VENTRILOQUISTS, MORTIMER PLUMLEY, BEATRICE OKONJO, HUGO VANDERKELEN, MRS. PEMBERTON
1 A ¶ A cramped green room crowded with trunks of wooden dummies.
2 A Glass eyes glint from hat boxes.
3 A A sign above the door reads: ANNUAL INTERNATIONAL CONGRESS OF VENTRILOQUISTS - 47TH YEAR.
4 A Muffled applause drifts through the wall.
5 A ¶ MORTIMER PLUMLEY, 50s, a tuxedo and a hairpiece, sits before a mirror, adjusting a dummy on his knee: a wooden schoolboy in a cap, grinning.
6 A BEATRICE OKONJO, 40s, in a sequined gown, tunes a puppet duck.
7 A HUGO VANDERKELEN, 30s, a nervous newcomer in a rented tux, clutches a lone lamb-shaped sock puppet.
8 D MORTIMER: Quiet, Hugo. You're twitching.
9 D HUGO: I'm not twitching.
10 D BEATRICE: You are twitching.
11 D HUGO: It's a tic.
12 D MORTIMER: A tic is fine. A twitch is a tell.
13 D HUGO: Mortimer, I can't do this.
14 D MORTIMER: Of course you can.
15 D HUGO: My lamb has no personality.
16 D MORTIMER: Then give it one.
17 D HUGO: How?
18 D MORTIMER (in his dummy's voice, high and cheeky): Just make it sassy!
19 A ¶ The dummy's mouth clacks.
20 A Beatrice's duck quacks in agreement.
21 A Hugo's lamb droops.
22 A A speaker above the door crackles.
23 D MRS. PEMBERTON [V.O.] (over PA, brisk): Attention, ventriloquists. The Congress will begin the Grand Finale in ten minutes. Contestants please report to the stage left wing. That includes Mr. Vanderkelen.
24 D HUGO (squeaking): She said my name.
25 D BEATRICE: She says everyone's name.
26 D MORTIMER (as the dummy): Don't wet yourself, kid.
27 D HUGO: I'm going to be sick.
28 D BEATRICE: Not on the duck.
29 A ¶ She turns the duck away.
30 A Mortimer's dummy slides off his knee and tumbles across the floor into a pile of trunks.
31 A He lunges.
32 A Hugo lunges.
33 A Beatrice lunges.
34 A All three collide, the duck squawking, the lamb flying through the air, wooden limbs rattling.
35 A ¶ Mortimer lands on top of Hugo.
36 A Beatrice lands on both.
37 A The dummy lands upright on a trunk, grinning.
38 D MORTIMER (muffled): Get off.
39 D HUGO (muffled): I can't.
40 D BEATRICE: Everyone get off me!
41 D MRS. PEMBERTON [V.O.] (over PA): Contestants. Eight minutes.
42 A ¶ They untangle.
43 A Beatrice dusts off her gown.
44 A Hugo retrieves the lamb, its ear torn.
45 A Mortimer tests the dummy's jaw.
46 D HUGO: Is it broken?
47 D MORTIMER: Cheek's loose.
48 D BEATRICE: Duct tape.
49 D MORTIMER: I don't carry duct tape to a gala.
50 D BEATRICE: I do.
51 A ¶ She digs into her purse and produces a roll.
52 A Together they bind the dummy's jaw, then the lamb's ear.
53 A Hugo is breathing steadier now.
54 D HUGO: It looks ridiculous.
55 D MORTIMER: Ridiculous wins.
56 D BEATRICE: Ridiculous is the whole point.
57 D HUGO: What if I freeze?
58 D MORTIMER: Then freeze.
59 D HUGO: That's your advice?
60 D MORTIMER: Freeze convincingly.
61 A ¶ Beatrice laughs.
62 A A spotlight flares in the doorway.
63 A The applause on the other side of the wall swells.
64 D MRS. PEMBERTON [V.O.] (over PA): Five minutes!
65 D HUGO (squeaking): Five minutes!
66 D BEATRICE: You'll be fine.
67 D MORTIMER (as the dummy): Break a leg, lamb chop.
68 D HUGO (in a tiny lamb voice, trembling): Baa.
69 A ¶ They all stare at the lamb, which, for the first time, seems to look back.
70 D MORTIMER: There it is.
71 D BEATRICE: That's personality.
72 D HUGO (lamb voice, firm): Baa!
73 A ¶ He marches to the door, lamb on hand, chin up.
74 A Beatrice and Mortimer follow, one with a duck under her arm, one with a taped dummy on his shoulder.
75 A The curtain parts.
76 A Light and applause flood in.
77 A They step through.

### SCENE s00129 | INT. ST. CASIMIR LANES - CONVERTED CHURCH - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND PARKHURST, DEACON PARKHURST, NADINE FOLASADE, GUS TREVELYAN
1 A ¶ A nave of oiled maple lanes where the pews once stood.
2 A Stained glass glows behind the pin decks.
3 A The league scoreboard hangs where the crucifix used to be.
4 A ¶ Four men and women sit at the last lane in the last frame of the season.
5 A No one is cheering.
6 A The place is nearly empty.
7 A ¶ ROSALIND PARKHURST, 60s, cardigan, bowling shoes polished like church shoes, wipes her ball with a towel.
8 A Beside her, her son DEACON PARKHURST, 30s, sits with his elbows on his knees, staring at his phone without reading it.
9 A ¶ Across the lane sit their opponents.
10 A NADINE FOLASADE, 40s, braids tied back, rolls her shoulders.
11 A Next to her, an old man in a bowling shirt, GUS TREVELYAN, 70s, tape on two fingers, a cigarette unlit between them.
12 A ¶ The pin deck resets with a long mechanical groan.
13 D ROSALIND: Your father used to say the pins knew.
14 D DEACON: Knew what?
15 D ROSALIND: Whether you wanted it.
16 A ¶ Deacon puts the phone away.
17 D DEACON: Mom, it's a Tuesday.
18 D ROSALIND: It's the Tuesday.
19 A ¶ Nadine gets up.
20 A Walks to the ball return.
21 A Picks up a green ball.
22 A Weighs it.
23 A Puts it back.
24 A Picks up a blue one.
25 D NADINE: You boys have been on our lane too long.
26 D GUS: Twelve years.
27 D NADINE: Twelve years, and nobody has said a word.
28 D GUS: Because there was nothing to say.
29 D NADINE: There was plenty.
30 A ¶ Deacon looks at his mother.
31 A Rosalind does not look at him.
32 D DEACON: Is there something I should know?
33 D ROSALIND: Take your turn.
34 D DEACON: I'm asking.
35 D ROSALIND: Take your turn, Deacon.
36 A ¶ He stands.
37 A Picks his ball.
38 A Steps to the line.
39 A Pauses.
40 D DEACON [CONT'D]: Dad used to bring us here Sundays.
41 D GUS: Your dad used to bring a lot of people here Sundays.
42 A ¶ Deacon turns.
43 A Nadine has gone very still.
44 A Rosalind has put the towel down.
45 D ROSALIND: Gus.
46 D GUS: Might as well. Twelve years is long enough.
47 D NADINE: Don't.
48 D GUS: Your father had two families, son. This lane was where they met without knowing.
49 D DEACON (quiet): Say that again.
50 D GUS: I've been polite twelve years.
51 D NADINE: Gus, shut your mouth.
52 D ROSALIND: He's not lying.
53 A ¶ Deacon looks at the ball in his hands.
54 A His grip tightens.
55 A The leather creaks.
56 D DEACON: Nadine?
57 D NADINE (evenly): Your father was my father too.
58 A ¶ A long silence.
59 A Somewhere in the rafters a pigeon shifts.
60 A ¶ Deacon sets the ball down.
61 A It rolls, slow, down the lane, crosses the arrows, kisses the head pin, and drops all ten.
62 A ¶ Nobody looks at the scoreboard.
63 D ROSALIND: Strike.
64 D NADINE (not smiling): Your game.
65 D DEACON (turning to Gus): Why tonight?
66 D GUS: Because it's the last frame, son. After tonight there's no lane to share.
67 A ¶ Deacon walks away from the line.
68 A He passes his mother.
69 A He passes Nadine.
70 A He stops at the end of the lane, where the stained glass throws red light across his hands.
71 A ¶ He picks up the blue ball.
72 A Holds it out to Nadine.
73 D DEACON: Roll one.
74 A ¶ She hesitates.
75 A Then she takes it.

### SCENE s02435 | INT. STAGECOACH WAY STATION - SUPPER - NIGHT
Detected names (may be incomplete or contain aliases): CALLOWAY DREW, ABIGAIL STROUD, REUBEN TALLCHIEF, HOMER PRICE, MAGDALENA SOTO
1 A ¶ A low adobe room.
2 A One long table, a smoking lamp, a cracked piano that no one has played in years.
3 A Wind rattles the shutters.
4 A ¶ CALLOWAY DREW (40s, dusty duster, tin star pinned inside the collar) sits at the head of the table, eating beans without hurry.
5 A Beside him, ABIGAIL STROUD (30s, widow's black, gloves still on) pushes her plate away.
6 A Across from them, REUBEN TALLCHIEF (50s, stagecoach driver, scarred hands) cuts bread.
7 A HOMER PRICE (20s, station boy, apron too long) fills cups.
8 A MAGDALENA SOTO (40s, cook, sleeves rolled) stands at the stove with her back to the room.
9 D CALLOWAY: Good beans.
10 D MAGDALENA: Same beans as last week.
11 D CALLOWAY: Then I was wrong last week.
12 D REUBEN: The coach is late.
13 D CALLOWAY: It's always late.
14 D REUBEN: Not this late.
15 D ABIGAIL: Perhaps the road is bad.
16 D REUBEN: Road's the same as always, ma'am.
17 D HOMER: Mr. Tallchief says there's something moving out past the dry wash. He saw it from the roof.
18 D REUBEN: I said no such thing, boy.
19 D HOMER: You said "somebody."
20 D MAGDALENA: Homer. Cups.
21 A ¶ Homer pours.
22 A His hand shakes.
23 A A little coffee spills on the table.
24 D CALLOWAY: Easy.
25 D HOMER: Yes, sir.
26 D ABIGAIL: Marshal, what is a man like you doing at a way station?
27 D CALLOWAY: Eating beans.
28 D ABIGAIL: That is not an answer.
29 D CALLOWAY: It's the true one.
30 D MAGDALENA: He's waiting on somebody.
31 D CALLOWAY: Magdalena.
32 D MAGDALENA: What? She asked.
33 D REUBEN: I'll tell you what he's waiting on. He's waiting on whoever shot Harlan Boyce at the Platte crossing.
34 D ABIGAIL: ^I did.
35 D REUBEN: ^She did.
36 A ¶ They say it at the same instant, one with certainty, one with dread.
37 A The wind stops.
38 A The lamp flame stands straight.
39 A ¶ Calloway sets his spoon down.
40 D CALLOWAY: Ma'am?
41 A ¶ Abigail pulls off one glove.
42 A Lays it on the table.
43 A Then the other.
44 D ABIGAIL: Harlan Boyce killed my husband. I waited eleven years. I was a very patient woman.
45 A ¶ Nobody moves.
46 A Homer drops the pot.
47 A It rings on the floor like a church bell.
48 D CALLOWAY: Magdalena, lock the door.
49 D MAGDALENA: It's already locked.
50 D CALLOWAY: Then lock it again.

### SCENE s01922 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): TEO MARCHETTI, LULA BRIGHTWATER, HAMID ZAIDI, ESTELLE VANTERPOOL
1 A ¶ A cramped cinderblock room lit by the glow of the projector.
2 A The reel clatters.
3 A Below, through a small window, a sea of parked cars and a flickering screen.
4 A ¶ TEO MARCHETTI, 16, skinny, in a paper hat from the snack bar, threads film with careful hands.
5 A Behind him, LULA BRIGHTWATER, 16, braids and a denim jacket, sits on an upturned crate, swinging her feet.
6 D LULA: You said your uncle wouldn't be here tonight.
7 D TEO: He isn't. He's in Tulsa.
8 D LULA: Then why are you sweating?
9 D TEO: It's a hundred degrees in here.
10 A ¶ HAMID ZAIDI, 17, Teo's best friend, slouches in the doorway with a bag of popcorn and a smirk.
11 A He has not been invited.
12 D HAMID: Marchetti. Heard you were showing a double feature up here. Me and Lula.
13 D TEO: Nobody said that.
14 D HAMID: Lula said it. At the pool.
15 A ¶ Lula stops swinging her feet.
16 A Teo looks at her.
17 A She looks at the floor.
18 D LULA: I said we might hang out. That's different.
19 D HAMID: It's the same thing, apparently.
20 D TEO: Hamid, go back downstairs.
21 D HAMID: You can't tell me what to do. You're a guy in a paper hat.
22 A ¶ Teo's jaw tightens.
23 A He turns off the second projector and stands, gripping the reel in his fist like something he might throw.
24 D TEO: Say it again.
25 D LULA: Teo, don't.
26 A ¶ MRS. ESTELLE VANTERPOOL, 60s, the theater owner, in a cardigan and orthopedic shoes, appears in the doorway behind Hamid.
27 A She taps a flashlight against her palm.
28 D MRS. VANTERPOOL: Mr. Marchetti. Why is the screen showing a blank sheet?
29 A ¶ Teo drops the reel.
30 A It rolls across the floor and stops at her feet.
31 D TEO: It's my fault, Mrs. Vanterpool. All of it.
32 A ¶ She picks it up, studies the three of them, and hands the reel back to Teo.
33 D MRS. VANTERPOOL: Then you can fix it. And your friends can buy their own popcorn.

### SCENE s00028 | INT. BACKSTAGE, SUBMARINE-THEMED MUSEUM GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): ELOISE VANTERPOOL, ROMAN ASTOR-LIN, HESTER PENHALLOW, COLM BRADSHAW
1 A ¶ A cramped storeroom of plush squid, periscope keychains, and cardboard boxes marked FRAGILE.
2 A A string of party lights hangs over a folding table of wilting cupcakes.
3 A ¶ ELOISE VANTERPOOL (30s, rolled-up sleeves, name tag reading "Ask Me About Barnacles") counts stock with a clicker.
4 A At the doorway, ROMAN ASTOR-LIN (30s, rumpled blazer, wet from the rain) lingers with a bouquet of grocery-store carnations.
5 D ROMAN: Hi.
6 D ELOISE: You're late.
7 D ROMAN: I know.
8 D ELOISE: By three years, in fact.
9 D ROMAN (quietly): I know.
10 A ¶ She keeps clicking.
11 A He sets the carnations on the table, beside a cupcake that has "CONGRATS" piped across it in blue.
12 D ROMAN [CONT'D]: Whose party?
13 D ELOISE: Retirement. Dr. Penhallow. Thirty-one years of squid.
14 D ROMAN: I came to see you.
15 D ELOISE: Ro, don't.
16 D ROMAN: Eloise, listen. I didn't leave because I wanted to. My mother got sick, I flew to Singapore, and every time I tried to write the letter it came out like a lie. So I stopped trying. And then it was a year. And then it was too long.
17 D ELOISE: You could have called.
18 D ROMAN: I could have done a lot of things. I'm not asking you to forgive me. I'm only asking you to let me stand here for a minute.
19 A ¶ She stops clicking.
20 A She sets the clicker down and finally turns.
21 D ELOISE: Your mother?
22 D ROMAN: She passed in March.
23 D ELOISE (softer): I'm sorry.
24 D ROMAN: Thank you.
25 D ELOISE: Ro...
26 D ROMAN: Yeah?
27 D ELOISE: You still have that stupid scarf?
28 D ROMAN (laughing, relieved): It's in the car.
29 A ¶ Laughter from the corridor.
30 A A door bangs open and a crowd of coworkers fills the storeroom with noise.
31 A At the front, a new arrival: DR. HESTER PENHALLOW (60s, tweed, bow tie shaped like a seahorse), glowing with champagne.
32 D PENHALLOW: Eloise! There you are! Is this the famous Roman?
33 D ELOISE (blushing): Dr. Penhallow, he's not--
34 D PENHALLOW: You've been talking about him for three years. Have a cupcake, dear boy.
35 A ¶ Roman looks at Eloise.
36 A She does not meet his eyes, but she does not deny it.
37 D ROMAN: Thank you. I will.
38 A ¶ Behind them, a grinning intern, COLM BRADSHAW (20s, lanyard, hopeful), holds up a phone.
39 D COLM: Group photo! Everyone squeeze in!
40 A ¶ Eloise steps beside Roman.
41 A Their shoulders touch.
42 A Neither moves away.
43 D ELOISE (low): You're buying dinner.
44 D ROMAN (low): Anything.
45 D ELOISE (low): Anywhere?
46 D ROMAN (low): Anywhere.
47 A ¶ Colm's flash goes off.
48 A For one frame, they are both laughing.
49 D PENHALLOW: Lovely. Now, who wants to hear about the giant squid?
50 A ¶ Groans from everyone.
51 A Eloise leans against Roman and whispers.
52 D ELOISE: Run.
53 A ¶ They slip out through the storeroom's back door.
54 A The party lights keep swaying behind them.

### SCENE s00807 | INT. AIR DUCT - ABOVE VAULT CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ANDREJ MOKOENA
1 A ¶ Cramped aluminum.
2 A A pencil flashlight in his teeth.
3 A Dust motes.
4 A The distant hum of a security camera swiveling below.
5 A ¶ ANDREJ MOKOENA, 30s, crawls on his elbows with a coil of rope on his back and a small recorder strapped to his sleeve.
6 A He stops at a vent grate.
7 A Looks down at a laser grid.
8 A ¶ He spits the flashlight into his hand.
9 A Whispers.
10 D ANDREJ: Okay. Okay. Rehearsal one.
11 A ¶ He taps the recorder.
12 A Plays it.
13 D ANDREJ [V.O.] (recorded, whisper): Step one. Rope on the vent bolt. Step two. Lower down, slow, between beam three and beam four. Step three. Don't sneeze.
14 A ¶ He winces.
15 D ANDREJ: I'm going to sneeze.
16 A ¶ He pinches his nose.
17 A Waits.
18 A It passes.
19 A He taps the recorder again.
20 D ANDREJ [V.O.] (recorded): Step four. The safe's a Hargrove. Combination is the date of the Armistice, flipped. Eleven eleven, nineteen eighteen, so one-one, one-one, one-eight, one-nine.
21 D ANDREJ: That's seven numbers. Hargrove's six.
22 A ¶ He frowns.
23 A Rewinds.
24 D ANDREJ [V.O.] (recorded): ...one-one, one-one, one-eight, one-nine...
25 D ANDREJ: Drop the last nine. One-one, one-one, one-eight.
26 A ¶ He whispers it three times, like a spell, then taps the recorder to start a new take.
27 D ANDREJ [CONT'D]: Rehearsal two. If I die in this duct, tell my mother I was a pastry chef.
28 A ¶ A click below.
29 A A faint red light sweeps across the vent.
30 A He freezes.
31 A The light passes.
32 D ANDREJ [CONT'D] (barely audible): Step one.
33 A ¶ He slides the first bolt loose.

### SCENE s00030 | INT. BEEKEEPER'S KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): FLORIAN ACHTERBERG, MAREN, EZRA, ODALYS
1 A ¶ Honey-gold light slants through a window crusted with propolis.
2 A On the table, a cracked jar leaks slow amber across oilcloth.
3 A FLORIAN ACHTERBERG (70s, veil pushed back, hands like roots) stands rigid at the stove.
4 A His daughter MAREN (40s, city coat, car keys still in her fist) has not sat down.
5 A At the table, her son EZRA (9, scabbed elbows) hides behind a comic book, while his aunt ODALYS (50s, flour on her apron) pretends to knead dough.
6 D MAREN: You sold the north hives without telling me.
7 D FLORIAN: They were mine to sell.
8 D ODALYS: Maren, sit. There's tea.
9 D MAREN: I don't want tea. Dad, those were Mom's.
10 D FLORIAN: Your mother is dead eleven years. The bees don't know it.
11 D EZRA (from behind the comic): Are we fighting?
12 D ODALYS: No, sweetheart. We're discussing.
13 D MAREN: I drove six hours. I thought you were sick.
14 D FLORIAN: I am old. It's the same thing.
15 D MAREN (breaking): You could have asked me.
16 D FLORIAN: And you would have said keep them. And I would have kept them. And they would have died, because I can't lift the supers anymore.
17 A ¶ Silence.
18 A A single bee drifts across the room and lands on the leaking jar.
19 D ODALYS: Ezra, bring me the dish towel.
20 A ¶ He does.
21 A Maren sits at last.
22 A Florian turns from the stove, picks up the jar, and sets it in front of her.
23 D FLORIAN: Taste.
24 D MAREN: Dad.
25 D FLORIAN: Taste it.
26 A ¶ She dips a finger.
27 A Her face softens as she tastes, and she covers her mouth with her wrist.
28 D MAREN: It's hers.
29 D FLORIAN: The last of the north. I saved it for you.

### SCENE s01357 | INT. RESTAURANT KITCHEN, AFTER CLOSE - NIGHT
Detected names (may be incomplete or contain aliases): CHEF IMANI JOSEPH, SOUS-CHEF DARIUS PELL, DISHWASHER PEARL, WAITER ANSELM, STRANGER, LEOPOLD
1 A ¶ Steel counters.
2 A A hose coiled on the drain.
3 A Five people sit on overturned crates sharing a bottle.
4 A ¶ CHEF IMANI JOSEPH, 40s, still in whites.
5 A SOUS-CHEF DARIUS PELL, 30s.
6 A DISHWASHER PEARL, 50s.
7 A WAITER ANSELM, 20s.
8 A And a STRANGER in a gray coat, fifties, who wandered in through the alley door.
9 A ¶ Imani pours a round.
10 A Darius passes the bread.
11 A Pearl hums.
12 A Anselm laughs.
13 A The Stranger accepts a glass and says nothing.
14 D IMANI: So what do we call him?
15 D DARIUS: He's a health inspector.
16 D PEARL: He's not an inspector.
17 D ANSELM: He's a ghost.
18 D DARIUS (over Anselm): He ate the last of the soup.
19 D PEARL (over Darius): Hush, let the man speak.
20 D STRANGER: Leopold.
21 D IMANI: Leopold what?
22 D LEOPOLD: Just Leopold. I used to cook here.
23 A ¶ Silence.
24 A Imani lowers her glass.
25 A He lifts his, to her.
26 D LEOPOLD [CONT'D]: Good soup. Needs salt.
27 A ¶ Imani smiles.
28 A She stands, crosses to the stove, adds a pinch.
29 A He nods.

### SCENE s01406 | INT. APARTMENT - KITCHEN - DAWN
Detected names (may be incomplete or contain aliases): BERNADETTE OYELARAN-STACK, NURSE
1 A ¶ A small kitchen.
2 A Linoleum.
3 A A kettle on the stove, steam rising.
4 A Two mugs on the counter, one chipped.
5 A A coat hangs on the back of the door, a man's coat, gray wool.
6 A ¶ BERNADETTE OYELARAN-STACK, 60s, in a bathrobe, stands at the sink with her hands under the tap.
7 A The water runs a long time.
8 A She doesn't wash anything.
9 A ¶ The phone on the wall rings.
10 A Once.
11 A Twice.
12 A Three times.
13 A She lets it.
14 A Finally she dries her hands on the robe, reaches over, and picks it up.
15 D BERNADETTE: Hello.
16 D NURSE [V.O.] (over phone): Mrs. Stack? This is Carol, from the hospice.
17 D BERNADETTE: Yes.
18 D NURSE [V.O.] (over phone): I'm so sorry to call so early.
19 D BERNADETTE: That's all right.
20 D NURSE [V.O.] (over phone): He passed about an hour ago. Very peacefully.
21 A ¶ Bernadette nods.
22 A Looks at the coat on the door.
23 A Looks at the two mugs.
24 D BERNADETTE: Thank you for telling me.
25 D NURSE [V.O.] (over phone): Would you like us to send someone?
26 D BERNADETTE: No. Not yet.
27 D NURSE [V.O.] (over phone): Is there anyone with you?
28 D BERNADETTE: I'm fine.
29 A ¶ She hangs up.
30 A Stands very still.
31 A The kettle begins to whistle, thin and rising.
32 A ¶ She turns off the burner.
33 A Takes the chipped mug from the counter.
34 A Pours.
35 A The tea steams.
36 A She sets it in front of the empty chair at the table and sits across from it.
37 A ¶ The whistle fades.
38 A She wraps both hands around the other mug and holds it close.
