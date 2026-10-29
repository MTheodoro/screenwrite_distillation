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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00021.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00272 | INT. MUNICIPAL SWAN-BOAT BOATHOUSE - EVENING
Detected names (may be incomplete or contain aliases): BARNABY QUILL, ODALYS FERREIRA-NNAMDI, PETE, LAZAR
1 A ¶ A cathedral of damp wood.
2 A Eleven fiberglass swans, enormous and faintly smug, are moored nose to tail in the dark water, each wearing the faded expression of a creature that has been pedaled by thousands of children and has forgiven none of them.
3 A ¶ BARNABY QUILL (50s, municipal windbreaker, a lanyard heavy with keys that open nothing important) stands on the dock with a clipboard held like a hymnal.
4 A He is counting swans for the third time and arriving at a different number each time.
5 A ¶ ODALYS FERREIRA-NNAMDI (40s, wet-weather poncho, hair in a hopeful bun) climbs out of a swan with the dignity of a woman leaving a courtroom.
6 D ODALYS: It's twelve.
7 D BARNABY: It's eleven.
8 D ODALYS: The inventory says twelve.
9 D BARNABY: The inventory also says the pond is a lake.
10 A ¶ Behind them, a third voice drifts from the rafters.
11 A PETRU "PETE" LAZAR (20s, cheerful, harness, a flashlight in his teeth) dangles above the water, retrieving a pennant.
12 D PETE (around the flashlight): Thith ith the one.
13 D ODALYS: Pete, take the flashlight out of your mouth.
14 A ¶ Pete spits the flashlight into his palm.
15 A It bounces off a swan's head and sinks.
16 D BARNABY: That was a municipal flashlight.
17 D PETE: It was my flashlight.
18 D ODALYS: It was Barnaby's flashlight.
19 D BARNABY: It was a flashlight in the general sense.
20 D PETE: Can I come down now?
21 D ODALYS: No.
22 D BARNABY: Yes.
23 D ODALYS: No, because if he comes down we'll have to talk about the swan.
24 D BARNABY: We are talking about the swan.
25 D PETE: Which swan?
26 D ODALYS: The twelfth.
27 D PETE: There's a twelfth?
28 D BARNABY: There is not a twelfth.
29 D ODALYS: Barnaby, I rode it. For twenty minutes. It has a steering problem and a name.
30 D BARNABY: What name?
31 D ODALYS: Gerald.
32 D PETE: Gerald's a good name.
33 D BARNABY: Pete, you are suspended in the air by one strap and I need you to stop having opinions.
34 D PETE: I've had opinions the whole time, though.
35 D ODALYS: He's had opinions since March.
36 D BARNABY: In March I told you both the swans were not to be named.
37 D ODALYS: You named the swans.
38 D BARNABY: I named ONE swan. Lucille. Out of respect.
39 D PETE: Lucille's on the left.
40 D ODALYS: Lucille is the one we sank in August.
41 D BARNABY: Lucille is resting.
42 A ¶ A long silence.
43 A Water slaps the pilings.
44 A A swan, somewhere, knocks against the dock with a hollow note.
45 D ODALYS: Barnaby, there are twelve swans.
46 D BARNABY (very quietly): I know.
47 D PETE: So who's got Gerald?
48 A ¶ Barnaby lets the clipboard drop.
49 A It floats.
50 A All three of them watch it drift away across the dark water toward the far swan, which has, impossibly, begun to turn its head.

### SCENE s01720 | INT. DRAINED MUNICIPAL SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, BRAM OKONKWO, PRUDENCE HALE, WENDELL DUCROIX
1 A ¶ Cracked blue tile.
2 A One work light hums over the deep end.
3 A ODALYS VANTERPOOL (30s, night custodian, flashlight like a club) stands on the ladder.
4 A BRAM OKONKWO (20s, her apprentice) clutches a mop.
5 A PRUDENCE HALE (60s, retired lifeguard, whistle on a cord) and WENDELL DUCROIX (40s, city inspector, clipboard) crowd the rim above.
6 D ODALYS: Nobody swims here. Nobody has swum here since--
7 D PRUDENCE: Since the boy. Say it.
8 D WENDELL: The drain cover is secure, I signed it myself, I signed it twice--
9 D BRAM: Something's knocking. Under the tile.
10 D ODALYS: It's the pipes.
11 D PRUDENCE: It's counting.
12 A ¶ Three slow knocks.
13 A The work light dies.
14 A Odalys and Bram scramble up the ladder, colliding, while Wendell drops the clipboard and Prudence blows the whistle once, hard.
15 D WENDELL: Stop blowing that!
16 D BRAM: Who's laughing? Somebody's laughing!
17 D PRUDENCE (whispering): Nobody. Nobody's down there.
18 A ¶ The light snaps back on.
19 A All four freeze.
20 A In the deep end, a single wet footprint, then another, walking toward them.

### SCENE s00284 | INT. PEST-CONTROL TRAINING SEMINAR - HOTEL BALLROOM - DAY
Detected names (may be incomplete or contain aliases): HUMPHREY, BRANDYWINE-OYELOWO, PRIZZY, DELACROIX-NAKASHIMA
1 A ¶ Folding chairs.
2 A A projector screen with a photograph of a cockroach the size of a thumb.
3 A A tray of lukewarm danishes.
4 A Two chairs are occupied.
5 A ¶ AUGUSTUS "HUMPHREY" BRANDYWINE-OYELOWO (50s, rumpled blazer, lanyard) is trying to open a danish with the ferocity of a man defusing a bomb.
6 A ¶ In the next chair, PRISCILLA "PRIZZY" DELACROIX-NAKASHIMA (30s, crisp polo, notebook) is writing in a hand so neat it looks typeset.
7 A ¶ At the front, nobody.
8 A The presenter has not arrived.
9 A The cockroach on the screen stares at the room with enormous composure.
10 D HUMPHREY: Prizzy, I think we've been had.
11 D PRIZZY: Humphrey, we paid for the seminar.
12 D HUMPHREY: We paid for a seminar. We didn't pay for an absence.
13 D PRIZZY: I'm sure he's coming.
14 D HUMPHREY: It's been forty minutes. I've eaten two danishes. I have regrets.
15 D PRIZZY (muttering): Regrets, he says.
16 A ¶ A pause.
17 A Humphrey looks at the screen.
18 A At the cockroach.
19 D HUMPHREY: That's a lot of bug.
20 D PRIZZY: That's an American cockroach.
21 D HUMPHREY: Is it? It looks Greek.
22 D PRIZZY: Humphrey.
23 D HUMPHREY: It's got the look. Stately. Doomed.
24 A ¶ Prizzy puts down her pen.
25 A Humphrey takes a bite of danish.
26 D HUMPHREY [CONT'D] (to the empty room): Anyone?
27 A ¶ The empty room does not answer.
28 A A fluorescent tube buzzes.
29 D PRIZZY: I could present.
30 D HUMPHREY: You could.
31 D PRIZZY: I know all the slides. I've seen the deck.
32 D HUMPHREY: You have the deck?
33 D PRIZZY: It's on my laptop.
34 D HUMPHREY: Prizzy, that's the bravest thing anyone's said since the continental breakfast.
35 A ¶ She stands.
36 A Smooths her polo.
37 A Walks to the front.
38 A Plugs in the cable.
39 A The projector flickers, then flares to life with a new slide: a diagram of a roach's digestive tract.
40 D PRIZZY (to the room): Good morning, everyone.
41 D HUMPHREY (whispering to himself): Oh, this is going to be good.
42 A ¶ Prizzy clears her throat, takes a breath.
43 A The door at the back bangs in the wind, and nobody comes in.
44 A ¶ Humphrey slumps.
45 A Prizzy continues, regardless.
46 D PRIZZY [CONT'D] (to the empty doorway, kindly): We're in the middle of a seminar.
47 D HUMPHREY: Prizzy, let the draft in. It might be the roaches.

### SCENE s00205 | INT. ABANDONED SKATING RINK - DAWN
Detected names (may be incomplete or contain aliases): COACH IGNATIUS PRZYBYLSKI, DARIUS, FONTENOT, RADIO ANNOUNCER, LEN, AKINTOLA-BRADY
1 A ¶ A vast hall with a cracked ice surface, half-melted and gray.
2 A Bleachers stripped bare.
3 A A scoreboard dangles by one chain.
4 A Pale light pours through a hole in the roof, striking the center of the rink like a spotlight.
5 A ¶ COACH IGNATIUS PRZYBYLSKI, 60s, bundled in a parka, sits on a bucket at the boards, holding a stopwatch in mittened hands.
6 A His breath rises in plumes.
7 A On the ice, DARIUS "THE WALL" FONTENOT, 30s, a goalie with a dented mask, stands in a crouch at the net, a puck at his feet.
8 A A radio on the boards crackles.
9 D RADIO ANNOUNCER [V.O.] (over radio): And that's the final from Calgary, folks. Eagles take it six to two.
10 D COACH IGNATIUS (turning it down): Six to two. Hear that, Darius?
11 D DARIUS: I heard it.
12 D COACH IGNATIUS: That's us, in three weeks, if you do not fix your glove side.
13 D DARIUS: My glove side is fine.
14 D COACH IGNATIUS: Your glove side is a screen door.
15 A ¶ Darius takes the puck and flicks it into the net.
16 A Coach shakes his head.
17 A ¶ A figure enters from the locker-room tunnel: LENNOX "LEN" AKINTOLA-BRADY, 20s, a rookie in a too-big jersey, skates tied around his neck.
18 A He stops at the boards, intimidated.
19 D LEN: Coach? Am I late?
20 D COACH IGNATIUS: You are early, which is worse. It means you didn't sleep.
21 D LEN: I slept.
22 D COACH IGNATIUS: You slept badly.
23 A ¶ Len sits, ties a skate.
24 A Darius watches from the net.
25 A Coach clicks the stopwatch.
26 D COACH IGNATIUS [CONT'D]: Len, shoot on Darius.
27 D LEN: Me? On him?
28 D COACH IGNATIUS: You see anyone else?
29 A ¶ Len steps on the ice.
30 A Skates a slow circle.
31 A Darius lowers his mask.
32 A Len winds up, shoots.
33 A Darius flicks the glove.
34 A The puck hits it and drops.
35 A Len stares.
36 D DARIUS (muttering): Screen door.
37 D LEN: Sorry?
38 D DARIUS: Nothing.
39 A ¶ Len shoots again.
40 A Darius makes the save with his pad.
41 A Coach scribbles.
42 A Len shoots again.
43 A This time the puck sails over the glove.
44 D COACH IGNATIUS: Again.
45 D LEN: Again?
46 D DARIUS: Again.
47 A ¶ They say it at once, a little too loudly.
48 A Coach covers a smile.
49 A ¶ Len shoots.
50 A Darius lunges.
51 A The puck clangs off the post.
52 A The radio crackles.
53 D RADIO ANNOUNCER [V.O.] (over radio): We now return to our regular programming.
54 A ¶ Coach clicks the radio off.
55 A Quiet.
56 A Len and Darius stand facing each other.
57 D COACH IGNATIUS: Good. Again.

### SCENE s00163 | INT. PUDDING LANE BAKERY - NIGHT - 1666
Detected names (may be incomplete or contain aliases): MASTER THOMAS FARRIER-WELLS, MISTRESS GWENLLIAN FARRIER-WELLS, HOBB PETTIGREW, JOAN MACKENZIE-AJAYI, ABRAHAM BENVENISTE, STRANGER, SILVANUS
1 A ¶ A low-beamed oven room.
2 A Flour in the air.
3 A Trays of unbaked loaves.
4 A A hearth glowing orange.
5 A ¶ Six people sit around a long table, sharing a late supper of bread and cheese by one candle.
6 A ¶ MASTER THOMAS FARRIER-WELLS, 50s, baker, at the head.
7 A His wife, MISTRESS GWENLLIAN FARRIER-WELLS, 40s.
8 A Their journeyman, HOBB PETTIGREW, 20s.
9 A The maid, JOAN MACKENZIE-AJAYI, teens.
10 A A traveling cloth merchant, ABRAHAM BENVENISTE, 60s.
11 A And a young STRANGER in a green cloak, hood up.
12 D THOMAS: Eat. There's more in the oven.
13 D GWENLLIAN: There is always more in the oven.
14 D HOBB (whispering to Joan): Not if the master keeps counting.
15 D JOAN (whispering back): He counts crumbs.
16 A ¶ Abraham chuckles.
17 A The Stranger says nothing, breaking bread slowly.
18 D ABRAHAM: Friend, you've eaten little.
19 D STRANGER: I'm saving room.
20 D ABRAHAM: For what?
21 D STRANGER: For the fire.
22 A ¶ A silence.
23 A Thomas sets down his knife.
24 D THOMAS: Sir?
25 D STRANGER (throwing back the hood): Forgive me. My name is Silvanus Carew. I serve the Lord Mayor. I came to warn you.
26 D GWENLLIAN: Of what?
27 D SILVANUS: Of this oven.
28 D THOMAS: My oven has stood thirty years.
29 D SILVANUS: My lord says the wind is wrong tonight.
30 A ¶ Thomas stares at him.
31 A Joan reaches for the poker, smothers the fire.
32 D THOMAS: Hobb, damp the hearth!
33 D SILVANUS: Master baker, damp the hearth!
34 A ¶ They speak at once, loud, and the silence afterward is a cliff.
35 D HOBB: Master?
36 D THOMAS: Do it.
37 A ¶ Hobb leaps to the hearth, dumps a bucket.
38 A Steam billows.
39 A The room goes grey.
40 A Everyone coughs.
41 A ¶ When it clears, Gwenllian is clutching Thomas's sleeve.
42 A Joan has her hand over her mouth.
43 A Abraham has risen.
44 A ¶ Silvanus is smiling, sadly, as he lowers his hood.
45 D SILVANUS [CONT'D]: Too late, I fear. The wind has already come.
46 A ¶ From beyond the shutters, faint, a bell begins to ring.

### SCENE s02324 | INT. FISH-DRYING SHED - ICELANDIC COAST - DAWN
Detected names (may be incomplete or contain aliases): SKAR, ELINBORG, KARI, BJARNI, ÓSKAR, SIGRÚN
1 A ¶ A long timber shed.
2 A Slatted walls leak gray sea light.
3 A Thousands of cod hang from the rafters in rows, stiff as boards.
4 A The air smells of salt and iron.
5 A A woodstove ticks in the corner.
6 A ¶ GRANDPA ÓSKAR, 80s, wears a wool cap pulled low and a face like a cliff.
7 A He sits on an overturned crate, mending a net with fingers that don't need to look.
8 A ¶ ELINBORG, 40s, his daughter, stands rigid by the door in a city coat.
9 A Wrong boots.
10 A She holds a folder against her chest.
11 A ¶ KARI, 16, her son, lounges against the wall in headphones, hood up.
12 A Earbuds leaking tinny bass.
13 A ¶ SIGRÚN, 12, Kari's sister, sits cross-legged on the floor, counting fish with her lips.
14 A ¶ BJARNI, 50s, Óskar's other son, comes in last.
15 A Shoulders wide.
16 A A thermos in one fist.
17 A Mud to the knee.
18 D ELINBORG: You told me it was shut down.
19 D ÓSKAR: It was shut down. Now it's open.
20 D BJARNI: Dad wanted to dry one more season.
21 D ELINBORG: Dad is eighty-four.
22 D ÓSKAR: Dad can hear you.
23 D KARI (not looking up): Can we go?
24 D ELINBORG: Kari, take those out.
25 D KARI: Why?
26 D ELINBORG: Because your grandfather is talking.
27 A ¶ Kari removes one earbud.
28 A Slowly.
29 A Like a concession.
30 D ÓSKAR: Your mother wants to sell this place.
31 D ELINBORG: I want to talk about it.
32 D BJARNI: That's what selling is.
33 D SIGRÚN: Seven hundred and twelve.
34 D BJARNI: What is?
35 D SIGRÚN: The fish.
36 A ¶ Nobody answers her.
37 D ELINBORG: The offer is real. A developer from Reykjavík. They want the shoreline.
38 D ÓSKAR: They want a hotel.
39 D ELINBORG: They want a lot of things.
40 D BJARNI: Dad built the racks.
41 D ÓSKAR: I built the racks. My father built the shed.
42 D ELINBORG: And what did his father build?
43 D ÓSKAR: Nothing. He died on a boat.
44 D ELINBORG: Pabbi.
45 D ÓSKAR: Don't Pabbi me.
46 A ¶ Silence.
47 A The stove ticks.
48 A A cod sways on its string, knocking another.
49 D ELINBORG: Dad, please.
50 D BJARNI: Dad, enough.
51 D KARI (quietly): Can I say something?
52 D ÓSKAR: You can say something.
53 D KARI: I don't care about the hotel. I don't care about any of it. But I think... I think the smell here is the best thing I've ever smelled.
54 D ELINBORG: Kari.
55 D KARI: I'm serious. It smells like him. Like Afi. Like everything he's ever worn.
56 D ÓSKAR: That is a fair description.
57 D SIGRÚN: Seven hundred and twelve.
58 D BJARNI: Okay, we heard you.
59 D SIGRÚN: Seven hundred and twelve is the number Mom said the developer wants.
60 D ELINBORG: Sigrún.
61 D SIGRÚN: Seven hundred and twelve thousand. That's what they offered. I read it.
62 D ELINBORG: You read my folder.
63 D SIGRÚN: It was open.
64 D ÓSKAR (a thin smile): She counts well, this one.
65 D ELINBORG (softer): Pabbi. I'm not trying to take it from you.
66 D ÓSKAR: You are a little bit.
67 D ELINBORG: A little bit.
68 D ÓSKAR: It's all right. Everyone takes a little.
69 A ¶ He sets the net down.
70 A Stands.
71 A Walks to the nearest rack.
72 A Reaches up and lifts a fish from its string.
73 A Holds it out to Kari.
74 D ÓSKAR [CONT'D]: Smell it.
75 A ¶ Kari does.
76 A Closes his eyes.
77 D KARI: Yeah.
78 D ÓSKAR: Now tell me what it's worth.
79 D KARI: I don't know.
80 D ÓSKAR: Neither do I. That's the problem.
81 A ¶ Elinborg laughs.
82 A Wipes her eyes with the back of her glove.
83 A Bjarni pours coffee into the thermos lid and hands it to his sister without a word.
84 A ¶ She takes it.
85 A ¶ Sigrún goes back to counting.

### SCENE s00490 | INT. FLOODED TELEGRAPH OFFICE - RIVER TOWN - DAY
Detected names (may be incomplete or contain aliases): TOBIAS FINCH, BILLIE, STRAND, KITTREDGE, OPERATOR
1 A ¶ Brown water stands six inches deep across the plank floor.
2 A The counter has been propped on crates.
3 A A potbelly stove sits cold.
4 A Outside the single window, the main street is a slow brown river with a drowned wagon in the middle of it.
5 A ¶ TOBIAS FINCH (60s, sleeve garters, spectacles on a string) perches on the counter with his boots tucked under him, working the telegraph key with two fingers.
6 A He hums a hymn without a tune.
7 A ¶ The door bangs open.
8 A SHERIFF WILHELMINA "BILLIE" STRAND (40s, dripping slicker, silver star pinned crooked) wades in, dragging a man by the chain between his wrists.
9 A The man, KITTREDGE (30s, split lip, hat gone), stumbles in her wake and falls to his knees in the water.
10 D BILLIE: Up.
11 D KITTREDGE: It's cold.
12 D BILLIE: So is the grave. Up.
13 A ¶ He climbs onto a crate by the wall.
14 A She hooks the chain on a ring bolted to the plank.
15 A She sits across from him on an overturned bucket, rifle across her lap.
16 D TOBIAS: Sheriff. I wasn't told you were coming.
17 D BILLIE: The bridge went out at noon. We didn't have a choice.
18 D TOBIAS: Is that Kittredge?
19 D KITTREDGE: In the flesh.
20 D BILLIE: Quiet.
21 A ¶ Tobias looks from one to the other, then back at the key.
22 A He taps out a few dots and dashes.
23 A A fainter tapping answers from the line, and then a voice, thin and metallic, speaks from a brass horn on the wall.
24 D OPERATOR [O.S.] (through the horn): Dry Fork office. Dry Fork. Do you copy, Finch?
25 D TOBIAS: I copy.
26 D OPERATOR [O.S.]: Judge Maddox says hold the prisoner. He rides in the morning.
27 D BILLIE: Tell him there's no morning if this river keeps rising.
28 D TOBIAS (into the horn): Sheriff says the river is up.
29 D OPERATOR [O.S.]: Judge says the river is the Lord's business. Hold the prisoner.
30 A ¶ Billie stands.
31 A She crosses the flooded floor and takes the horn from its hook.
32 A She speaks into it low and flat.
33 D BILLIE: This is Strand. I have a man in irons and a foot of water in the room. If the judge wants him in the morning, he can come get him.
34 D OPERATOR [O.S.]: I'll relay that.
35 D BILLIE: Relay it exactly.
36 A ¶ She hangs the horn on its hook.
37 A Kittredge laughs, a wet, cracked sound.
38 A She turns to him.
39 D KITTREDGE: You'd have made a fine judge.
40 D BILLIE: I'd have made a fine hangman, but they wouldn't give me the job.
41 A ¶ Tobias stops tapping.
42 A The river laps the stove legs.
43 A A wagon wheel knocks against the building from outside, slow and steady, like someone asking to be let in.
44 D KITTREDGE: How long before the water gets to the chain?
45 D BILLIE: Long enough.
46 D KITTREDGE: And if it doesn't?
47 A ¶ She steps close.
48 A She crouches.
49 A She looks him full in the face and he looks back, and neither blinks.
50 A Between them, the water ripples with the rhythm of the wheel.
51 D BILLIE [CONT'D]: Then you and I and Tobias have one night to find out what each of us believes in.
52 A ¶ Tobias takes off his spectacles and polishes them on his sleeve.
53 A His hands shake slightly.
54 D TOBIAS: I believe in coffee, Sheriff.
55 D BILLIE: You've got a stove?
56 D TOBIAS: Cold.
57 D BILLIE: You've got matches?
58 A ¶ He opens a drawer under the counter, rummages, and holds up a damp box.
59 A She takes it, shakes it, listens.
60 A A faint rattle.
61 A She nods once.
62 A ¶ She wades to the stove, opens its door, pulls a handful of kindling from the crate beside it, and piles it inside.
63 A She strikes a match.
64 A It sputters.
65 A Strikes another.
66 A It catches.
67 A ¶ For the first time in the room, there is warmth.
68 A Kittredge leans toward it as far as the chain allows.
69 A Tobias slides down off the counter into the water with a gasp, gathers his coat, and carries a pot to the stove.
70 A ¶ The horn on the wall crackles once more.
71 D OPERATOR [O.S.]: Strand. Message from the judge.
72 D BILLIE: Go on.
73 D OPERATOR [O.S.]: He says: "Understood."
74 A ¶ Billie almost smiles.
75 A She sits back down on the bucket and lays the rifle across her knees.
76 D KITTREDGE: That's all?
77 D BILLIE: That's plenty.
78 A ¶ Outside, the drowned wagon shifts and begins, slowly, to turn downstream.

### SCENE s01840 | INT. MIDNIGHT BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): RICO VALDEZ, DAISY MORALES
1 A ¶ Lane 14.
2 A Neon pins.
3 A The ball return coughs.
4 A A scoreboard overhead flickers and shows two names: RICO and BLANK.
5 A ¶ RICO VALDEZ, 40s, a heavy man in a purple league shirt, sits on the bench retying his shoes.
6 A His ball is a scuffed black orb with initials in gold.
7 A He has bowled a perfect game twice in his life, and tonight he is eleven frames in.
8 A ¶ On the lane beside him, no one.
9 A The scoreboard says BLANK.
10 A The seat is empty.
11 A ¶ He rises, takes the ball, steps to the line.
12 A He breathes.
13 A Rolls.
14 A The ball hooks gently and blasts the pocket.
15 A Strike.
16 A The scoreboard dings.
17 A ¶ He does not celebrate.
18 A He walks to the ball return and waits.
19 A ¶ A shadow falls across the approach.
20 A A figure stands in the doorway of the lane, small, a tiny silhouette.
21 A A girl, maybe nine, in a pink hoodie, holds a ball two sizes too heavy for her.
22 A ¶ The girl is DAISY MORALES, and she has been looking at him since the ninth frame.
23 D RICO: Closed to the public.
24 D DAISY: I'm not the public.
25 D RICO: Who are you, then?
26 D DAISY: The next frame.
27 D RICO: That's not a thing.
28 D DAISY: It is on your scoreboard.
29 A ¶ He turns.
30 A The scoreboard above reads BLANK.
31 A As he watches, the letters rearrange.
32 A DAISY.
33 D RICO: Somebody typed that.
34 D DAISY: Somebody did.
35 D RICO: Who?
36 D DAISY: My dad. He said you'd show me how.
37 D RICO: Your dad.
38 D DAISY: He bowled here. Before.
39 D RICO (slowly): Before what?
40 D DAISY: Before you took the last frame.
41 A ¶ Rico stares.
42 A The ball return rumbles.
43 A His ball rolls up and bumps against his hand, and he does not pick it up.
44 D RICO: Kid. What's your father's name?
45 D DAISY: Manuel.
46 D RICO: Manny Morales.
47 D DAISY: Yes.
48 D RICO: Manny's dead.
49 D DAISY: I know.
50 D RICO: He had a seven-ten split in the tenth. Twenty-three years ago. I bowled against him.
51 D DAISY: He said you let him have it.
52 D RICO: I didn't let him.
53 D DAISY: He said you did.
54 D RICO: He missed. He missed the seven.
55 D DAISY: He didn't miss. You moved the pin.
56 A ¶ Rico laughs, a dry bark.
57 A Then he stops.
58 D RICO: Who told you that?
59 D DAISY: My dad. In a letter. He wrote it before.
60 D RICO: Before.
61 D DAISY: He wanted me to ask you why.
62 A ¶ Rico sinks onto the bench.
63 A The neon buzzes.
64 A Daisy walks the length of the lane toward him, ball dragging, until she stands in front of him.
65 D RICO: Because I was twenty-two, kid. Because I wanted to be the guy who bowled a three hundred in the state final. And he was better, and I knew it.
66 D DAISY: So you cheated.
67 D RICO: I did.
68 D DAISY: Did you win?
69 D RICO: I won.
70 D DAISY: Did you bowl three hundred?
71 D RICO (barely audible): No. Two seventy-one.
72 D DAISY: Dad said you'd say two seventy-one.
73 A ¶ Silence.
74 A Rico looks at her, at the ball, at the empty lane.
75 D RICO: What do you want from me?
76 D DAISY: Show me how to throw.
77 D RICO: That's all?
78 D DAISY: That's all.
79 A ¶ He rises.
80 A He places her fingers in the holes.
81 A He adjusts her wrist.
82 D RICO: Don't look at the pins. Look at the arrow.
83 D DAISY: Which arrow?
84 D RICO: The one in the middle.
85 A ¶ She rolls.
86 A The ball wobbles down the lane, drifts left, and drops into the gutter.
87 A Daisy deflates.
88 D DAISY: That's bad.
89 D RICO: That's a start.
90 D DAISY: Again?
91 A ¶ He fetches her ball.
92 A She rolls.
93 A It strikes three pins.
94 A She jumps.
95 A Rico, for the first time in the scene, smiles, and the scoreboard dings.

### SCENE s00512 | EXT. RIVER CROSSING - DAY
Detected names (may be incomplete or contain aliases): DRIVER AMOS PRICKETT, LEONORA VASQUEZ-TATE, BOY, LIJAH, TATE
1 A ¶ A swollen brown river, wide and quick.
2 A A stagecoach sits in the middle of it, wheels sunk to the hubs, water slapping at the doors.
3 A The horses stand with heads low, trembling.
4 A ¶ DRIVER AMOS PRICKETT (50s, duster, hat tied on with a bandanna) stands on the box with the reins in both fists, staring at the far bank.
5 A ¶ Inside, face pressed to the window, sits MRS. LEONORA VASQUEZ-TATE (40s, black traveling dress, hatbox in her lap).
6 A Beside her, a BOY in a derby, ELIJAH "LIJAH" TATE (12, her son), grips the leather strap.
7 D AMOS (without turning): Ma'am, I'd keep still.
8 D LEONORA: We have been still for an hour.
9 D AMOS: Then you're good at it.
10 A ¶ The coach shifts.
11 A The hatbox slides.
12 A Lijah catches it.
13 D LIJAH: Ma, the water's coming in.
14 D LEONORA: I see it.
15 D LIJAH: Is it going to tip?
16 A ¶ She doesn't answer.
17 A Her gloved hand reaches over and settles over his, over the strap, over the hatbox.
18 D AMOS: Whole thing's gonna shift. When it does, you climb up here, both of you. Don't look down.
19 A ¶ Leonora and Lijah both reach for the door.
20 A Amos swears, swings down onto the roof, and hooks an arm through the luggage rail; the coach lurches, the horses scream, and Leonora tumbles into her son.
21 A They tangle in the narrow seat for a second, then Amos throws open the door and hauls them up one after the other onto the box.
22 A ¶ They crouch there, three figures in a row on the top of a sinking coach.
23 A The water tugs at the wheels.
24 A Somewhere on the far bank, a dog begins to bark.
25 D LIJAH (small): Mister Prickett?
26 D AMOS: Yeah.
27 D LIJAH: I lost my hat.
28 A ¶ Amos looks.
29 A The derby is floating away on the current, turning like a leaf.
30 D AMOS: Reckon it's going where we're going.
31 D LEONORA (low): Amos.
32 D AMOS: Ma'am.
33 A ¶ She opens the hatbox.
34 A Inside, folded in tissue, lies a child's christening gown.
35 A She lifts it out.
36 A She holds it to her face.
37 D LEONORA: I don't want it to be ruined.
38 D AMOS: It won't be.
39 A ¶ She gives it to Lijah.
40 A He tucks it inside his shirt.
41 A The coach settles, and holds.
42 A ¶ The horses start forward on their own.
43 A The wheels bite the river bed.
44 A Slowly, with a groan of timber, they climb toward the bank.

### SCENE s00797 | INT. UNDERWATER HOCKEY POOL - NIGHT
Detected names (may be incomplete or contain aliases): COACH BEVERLY STANISLAUS, RUSLAN VOLODIN, LOTTIE FAIRBANKS, DEWAYNE PICKETT, PHAM
1 A ¶ Chlorine haze.
2 A A tiled deck.
3 A Six lanes taped off with orange cones.
4 A Snorkels and fins in rows along the wall.
5 A ¶ COACH BEVERLY STANISLAUS, 50s, whistle between her teeth, paces the deck.
6 A RUSLAN VOLODIN, 20s, the team captain, sits on the edge with his feet in the water, taping his stick.
7 A LOTTIE FAIRBANKS, 19, adjusts her mask, while DEWAYNE PICKETT, 22, the goalie, bounces on his toes and glares at the scoreboard.
8 A On the far side, MR. PHAM, 40s, the referee, in a black-and-white striped rash guard, checks his watch and says nothing.
9 A ¶ Beverly stops pacing.
10 A She blows the whistle once.
11 A Ruslan looks up.
12 A Lottie flinches.
13 A Dewayne turns from the board and starts toward her, but she holds up a hand and he stops.
14 D BEVERLY: Four seconds on the clock. Down one. Who wants it?
15 D RUSLAN: I do.
16 D DEWAYNE: You always do.
17 D RUSLAN: Somebody has to.
18 D LOTTIE: I'll take it, Coach.
19 D BEVERLY: You'll take the pass.
20 D LOTTIE: That's what I said.
21 D DEWAYNE (under his breath): That's not what you said.
22 A ¶ Lottie's mask snaps down.
23 A Ruslan rises, water streaming off his legs.
24 D RUSLAN: Say it again, Dewayne.
25 D DEWAYNE: I said it was a bad idea. Four seconds, one shot, all on you.
26 D RUSLAN: Then block better.
27 D DEWAYNE: I'm a goalie, not a miracle.
28 A ¶ Beverly steps between them.
29 A Pham finally blows his own whistle, a thin shriek.
30 A Everyone turns.
31 D PHAM: Gentlemen. Ladies. Positions.
32 A ¶ They slip into the water in single file, silent.
33 A Beverly stands on the deck, hands on her hips, watching the surface close over their heads.
34 A ¶ Under the lights, the pool goes still.
35 A Then a ripple.
36 A Then a roar of bubbles.

### SCENE s01990 | INT. WITNESS PREP ROOM, SUPERIOR COURT - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY OCTAVIA BELLWEATHER-JIN, SAMUEL IGWE-ROSENBERG
1 A ¶ A windowless room.
2 A Steel table.
3 A Two plastic chairs.
4 A A water pitcher sweating on a tray.
5 A ¶ ATTORNEY OCTAVIA BELLWEATHER-JIN (40s, severe bun) sits across from her witness, DR. SAMUEL IGWE-ROSENBERG (60s, forensic accountant, tie too tight).
6 A She slides a folder across the table.
7 A He doesn't open it.
8 D OCTAVIA: Dr. Igwe-Rosenberg, tomorrow you take the stand.
9 D SAMUEL: I know.
10 D OCTAVIA: Opposing counsel will ask about the ledger.
11 D SAMUEL: I know that too.
12 D OCTAVIA: And you'll say what?
13 D SAMUEL: That the ledger is incomplete.
14 D OCTAVIA: No. You'll say it contains discrepancies that are consistent with accounting error.
15 D SAMUEL: They are not consistent with accounting error.
16 D OCTAVIA: You'll say they are.
17 D SAMUEL: Ms. Bellweather-Jin, I have been a forensic accountant for thirty-one years.
18 D OCTAVIA: Which is why they'll believe you.
19 D SAMUEL: Because I'll lie?
20 D OCTAVIA: Because you'll be precise.
21 D SAMUEL: Precisely incorrect.
22 D OCTAVIA: Precisely helpful.
23 A ¶ He pours water into a paper cup.
24 A Holds it without drinking.
25 D SAMUEL: What happens if I tell the truth?
26 D OCTAVIA: Then my client loses.
27 D SAMUEL: And if he deserves to?
28 D OCTAVIA: It isn't my job to decide that.
29 D SAMUEL: Then whose job is it?
30 D OCTAVIA: A jury's.
31 D SAMUEL: Who will rely on my testimony.
32 D OCTAVIA: Who will rely on your credentials.
33 D SAMUEL: They're the same thing.
34 D OCTAVIA: Not in this room.
35 A ¶ He sets the cup down.
36 A Pushes the folder back across the table unopened.
37 D SAMUEL: I'll testify, Ms. Bellweather-Jin. But I'll say what the ledger says.
38 A ¶ She looks at him a long time.
39 A Then she opens the folder, takes out a single page, and slides it to him.
40 D OCTAVIA: Then say this.
41 D SAMUEL (reading): "The ledger contains discrepancies. Their cause cannot be determined from the ledger alone."
42 D OCTAVIA: Is that true?
43 D SAMUEL (a pause): It's true.
44 D OCTAVIA: Then it's all I'm asking.
45 A ¶ He folds the page in half, and in half again, and puts it in his breast pocket.

### SCENE s01723 | INT. WIRELESS ROOM - STEAMSHIP "MERIDIAN" - NIGHT (1912)
Detected names (may be incomplete or contain aliases): AGNES FENWICK, PHILIPPA ASHCROFT, CAPTAIN HARGREAVES
1 A ¶ A cramped brass-and-oak cabin.
2 A A spark-gap transmitter crackles.
3 A A speaking tube hangs by the door.
4 A ¶ AGNES FENWICK (20s, wireless operator, ink on her cuffs) taps a key, headphones crooked on her head.
5 A PHILIPPA ASHCROFT (30s, first-class passenger in a fur collar) stands behind her, gripping the back of the chair.
6 D PHILIPPA: She said it was only a drill. She promised.
7 D AGNES: She says a great many things, ma'am.
8 A ¶ Philippa leans closer.
9 A Agnes pulls a sheet of paper from under the key and covers it with her sleeve.
10 A She watches her the way a cat watches a draft.
11 D PHILIPPA: Show me what you wrote.
12 D AGNES: I can't.
13 D PHILIPPA: She told me to ask. She gave me leave.
14 A ¶ The speaking tube whistles.
15 A Agnes snatches the cap off.
16 D CAPTAIN HARGREAVES [V.O.] (through the tube): Miss Fenwick. Is the passenger with you?
17 D AGNES: She is, sir.
18 D CAPTAIN HARGREAVES [V.O.] (through the tube): Then you'll finish the message and you'll send it as written. All of it. Do you understand?
19 A ¶ Philippa takes the paper from under Agnes's sleeve.
20 A She reads.
21 A Her face goes white.
22 A Agnes stands, and the chair scrapes the deck.
23 D AGNES: Ma'am, please sit.
24 D PHILIPPA (very quiet): Send it.
25 A ¶ Agnes lowers her hand to the key.
26 A The spark leaps.

### SCENE s01309 | INT. PHONE REPAIR SHOP - NIGHT
Detected names (may be incomplete or contain aliases): NADINE PRICE, ELIJAH SOTO
1 A ¶ A narrow cramped counter lit by a flickering fluorescent.
2 A Racks of cracked screens, cables hung like vines, a smell of solder and warm plastic.
3 A Rain on the shutter.
4 A ¶ NADINE PRICE, 30s, in a hooded sweatshirt, hunches over a disassembled phone with a tiny screwdriver and a magnifying lamp.
5 A Across the counter, ELIJAH SOTO, 20s, the shop's owner, sits on a stool with a bag of chips.
6 A He scrolls on another phone, bored, feet up on a box.
7 D NADINE: Elijah, it's still ringing.
8 D ELIJAH: So pick it up.
9 D NADINE: It has no battery. I took the battery out.
10 D ELIJAH: Then it's not ringing.
11 D NADINE: It's ringing.
12 A ¶ He lowers his phone.
13 A A tinny, impossible melody drifts from the gutted device.
14 A The lamp's bulb flickers.
15 A Nadine lifts the case with two fingers.
16 A Inside, where the board should be, is a hole.
17 A From the hole, the ringing grows louder, and a thin pale finger curls over the edge.
18 A Elijah drops the chips.
19 A Nadine hurls the phone across the shop.
20 A It SMASHES against the shutter.
21 A The ringing stops.
22 A The finger is gone.
23 A They stand frozen, staring at the broken pieces on the floor, the rain, the silence.
24 D ELIJAH (whispering): Do we answer it?
25 D NADINE: It's off.
26 A ¶ Across the shop, from the pile of shattered plastic, a small LED blinks green.

### SCENE s02407 | INT. SCHOOL BUS - FOG ROAD - NIGHT
Detected names (may be incomplete or contain aliases): MABEL TRASK, CORA, BAXTER, OSWIN
1 A ¶ A yellow bus idles on a country road, headlights swallowed by white fog.
2 A The windows are fogged on the inside too.
3 A Rows of green vinyl seats, empty except for four.
4 A ¶ MABEL TRASK, fifties, driver, grips the big wheel in cracked leather gloves.
5 A She wears a cardigan and a hairnet and has not spoken since the engine stalled.
6 A Behind her, in the first seat, CORA, ten, hugs a lunchbox.
7 A Across the aisle, her brother BAXTER, eight, draws a face in the window glass.
8 A In the rear, hunched against the emergency door, OSWIN, fourteen, wears headphones around his neck.
9 D BAXTER: Why'd we stop?
10 D MABEL: Fog.
11 D CORA: That's not a reason.
12 D MABEL: It's the only one I've got.
13 D OSWIN (from the back): There's something in the road.
14 D CORA: There's something in the road.
15 A ¶ Mabel leans forward.
16 A The headlights show only white.
17 A Then, at the edge of the beam, a tall figure, motionless, in a long coat, head tilted.
18 D MABEL: Stay in your seats.
19 D BAXTER: Is it a man?
20 D MABEL: I don't know.
21 A ¶ The figure takes a step.
22 A Then another.
23 A Mabel's hand slides to the door lever.
24 A The knuckles whiten.
25 D OSWIN: Don't open it.
26 D MABEL: I'm not going to.
27 A ¶ The figure lifts a hand.
28 A Taps the glass of the windshield, once, with one long finger.
29 A ¶ Mabel shuts off the headlights.
30 A Dark.
31 A Four sets of breathing.

### SCENE s00400 | INT. GENERATION SHIP "KESTREL" - CARGO HOLD C - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): TOMASZ, REN, ASTRID, BASHIR
1 A ¶ Stacked cryo-crates.
2 A Condensation drips from the ceiling.
3 A Cold light, long shadows.
4 A A hatch in the far wall is sealed with yellow tape.
5 A ¶ TOMASZ, 50, crew chief, in a quilted jacket, leans against a crate.
6 A REN, 20s, logistics, holds a tablet.
7 A ASTRID, 40, a medic, kneels beside a cracked cryo-pod.
8 A BASHIR, 30s, an engineer, stands at the sealed hatch with a wrench.
9 D TOMASZ: Count again.
10 D REN: Two hundred twelve.
11 D ASTRID: Two hundred eleven. This one's empty.
12 D BASHIR: Two hundred ten. I counted the manifest.
13 D TOMASZ: You don't count the manifest. You count the pods.
14 D REN: The manifest says two hundred twelve.
15 D BASHIR: The manifest is old.
16 D ASTRID: This pod isn't cracked from the outside.
17 D REN: What do you mean?
18 D ASTRID: The glass bowed out. Someone woke up in here.
19 D TOMASZ: Nobody wakes up. We don't wake until arrival.
20 D BASHIR: Then someone did.
21 D TOMASZ: Then someone's in this ship we don't know about.
22 D REN: That's impossible.
23 D ASTRID: So is the pod.
24 D BASHIR: The hatch is taped from the inside.
25 A ¶ They all turn to him.
26 A He taps the yellow tape with the wrench.
27 A It is peeled from the inside edge.
28 D TOMASZ: Open it.
29 D BASHIR: I'd rather not.
30 D TOMASZ: Open it.
31 D BASHIR: I'd rather you didn't.
32 A ¶ Behind the hatch, someone knocks, once.
33 A Politely.

### SCENE s01983 | INT. DOUBLE-DECKER TOUR BUS, EMPTY, PARKED IN DEPOT - DAY
Detected names (may be incomplete or contain aliases): GUS BELLOWES-ADEYEMI, FERDY, LAGRANGE
1 A ¶ A red open-top bus, parked indoors under fluorescent lights.
2 A Plastic seats.
3 A A microphone on a coiled cord.
4 A Nobody aboard but two men.
5 A ¶ GUS BELLOWES-ADEYEMI (50s, tour-guide blazer, sweaty) stands at the front with the microphone.
6 A Seated three rows back, arms crossed, is FERDINAND "FERDY" LAGRANGE (40s, same blazer, one size smaller), clutching a clipboard.
7 D GUS (into microphone, cheerful): Ladies and gentlemen, welcome aboard the Grand Heritage Tour!
8 A ¶ He waves at the empty seats.
9 A Ferdy scribbles on the clipboard.
10 D FERDY: You're not smiling with your eyes.
11 D GUS: I'm smiling with my mouth.
12 D FERDY: That's the problem.
13 A ¶ Gus lowers the mic.
14 A Raises it.
15 A Clears his throat.
16 D GUS (into microphone): To your left, the Old Customs House, built in eighteen...
17 A ¶ He glances at his index card.
18 A Turns it over.
19 A Turns it back.
20 D GUS [CONT'D] (muttering): Eighteen what.
21 D FERDY: Eighteen-forty.
22 D GUS: Eighteen-forty. To your left, built in eighteen-forty--
23 D FERDY: Forty-one.
24 D GUS: It says forty here.
25 D FERDY: It was wrong. I fixed it.
26 A ¶ Gus slowly lowers the microphone to his chest.
27 D GUS: You rewrote my card.
28 D FERDY: I corrected your card.
29 D GUS: It's my route.
30 D FERDY: It's my company.
31 D GUS: Your uncle's company.
32 D FERDY: He left it to me.
33 D GUS: He left it to you because you were standing there.
34 A ¶ Ferdy stands.
35 A The bus rocks.
36 A Gus takes a step toward the aisle.
37 A The microphone cord pulls taut between them like a leash.
38 D FERDY (to the empty seats): Ladies and gentlemen, please excuse the driver, who has a problem with authority.
39 D GUS (to the empty seats): Ladies and gentlemen, please disregard the owner, who has never driven this bus once.
40 D FERDY: I have too!
41 D GUS: You hit the carousel.
42 D FERDY: That carousel was in the road.
43 D GUS: It's been there since the nineteen-twenties!
44 A ¶ Ferdy lunges for the microphone.
45 A Gus holds it above his head.
46 A Ferdy jumps, trips on the cord, and lands on the seat with the mic in his lap.
47 A Gus stands over him, panting.
48 A Neither of them says anything.
49 A Gus is absolutely furious.
50 A Ferdy looks up at him, wounded and stunned.
51 D FERDY (small): You're right. I hit the carousel.
52 A ¶ Gus's face falls from fury to bewilderment.
53 D GUS: ...That's it?
54 D FERDY: That's it.
55 D GUS: You're just going to say that?
56 D FERDY: I've wanted to say it for six years.
57 A ¶ Gus sits down heavily on the seat across the aisle.
58 A He rubs his face with both hands.
59 D GUS: He was in the middle of the road, Ferdy.
60 D FERDY: The carousel?
61 D GUS: The pony. The one in the middle.
62 D FERDY: Was that why you took the left?
63 D GUS: I thought it was a real pony.
64 A ¶ They stare at each other.
65 A Ferdy's lip twitches.
66 A Gus's does too.
67 A Then Ferdy snorts, and Gus wheezes, and the two men fall into helpless, honking laughter, rocking the whole bus.
68 D FERDY (gasping): A real pony.
69 D GUS (wiping his eyes): Don't.
70 D FERDY: In the middle of the road.
71 D GUS: Stop.
72 A ¶ Their laughter dies slowly.
73 A Ferdy lifts the microphone, holds it between them like a peace pipe, and offers it to Gus.
74 D FERDY (into microphone, to the empty seats): Ladies and gentlemen. This is Gus. He knows the way.
75 A ¶ He passes it over.
76 A Gus looks at it for a long moment, then stands, steps to the front, and clears his throat.
77 D GUS (into microphone, gently): To your left, the Old Customs House. Built in eighteen-forty-one.
78 D FERDY: Thank you.
79 D GUS (muttering): Eighteen-forty.

### SCENE s02336 | INT. FLORESCENT BREAK ROOM - MERIDIAN SYNERGY CORP - DAY
Detected names (may be incomplete or contain aliases): YOUNG WOMAN, VOLKOV, CASSANDRA
1 A ¶ A microwave beeps.
2 A A motivational poster reads TEAMWORK in a font that has given up.
3 A ¶ A YOUNG WOMAN in a lanyard stands before the coffee machine, holding two empty pods and one full one.
4 A She has the posture of someone who has been told not to touch anything.
5 A ¶ MS. VOLKOV, 50s, regional director, enters in a pencil skirt and a visible air of purpose.
6 D MS. VOLKOV: You're the intern.
7 D YOUNG WOMAN: Yes. Cassandra.
8 D MS. VOLKOV: Cassandra. You've been here three weeks and I haven't seen you do one thing.
9 D CASSANDRA: I've been doing the thing you asked.
10 D MS. VOLKOV: What thing?
11 D CASSANDRA: Shadowing you.
12 A ¶ Ms. Volkov considers this.
13 A She takes the pod from Cassandra, studies it, and drops it in the trash.
14 D MS. VOLKOV: Then she should have noticed I don't drink this brand.
15 D CASSANDRA: She did.
16 D MS. VOLKOV: Who?
17 D CASSANDRA: Me. I noticed. I just didn't know she was allowed to say it.
18 A ¶ They look at each other.
19 A The microwave beeps again.
20 D MS. VOLKOV: You're promoted.
21 D CASSANDRA: I'm what?
22 D MS. VOLKOV: To associate. Effective now. She who notices things should be in the meetings.
23 D CASSANDRA: Wait. Who is "she"?
24 D MS. VOLKOV (already leaving): Whoever's holding the pod.
25 A ¶ She exits.
26 A Cassandra looks down at the pod.
27 A Looks at the poster.
28 A Quietly, she sets the pod on the counter and walks out after her.

### SCENE s01881 | INT. GLASS-DOMED OBSERVATORY, LUNAR FAR SIDE STATION - DAY
Detected names (may be incomplete or contain aliases): COMMANDER HORATIO LINDQVIST, AMARA OKONKWO-REYES, TECHNICIAN BEN YAZZIE, CORDELIA FAIRWEATHER, ENGINEER JUNE KAWAMURA, STRANGER, PRYCE
1 A ¶ A great telescope sleeps under a sheet of dust.
2 A Earthlight spills through the dome.
3 A Six people sit around a folding table, plates of reconstituted eggs untouched.
4 A ¶ COMMANDER HORATIO LINDQVIST (50s, silver temples, careful) presides.
5 A DR. AMARA OKONKWO-REYES (40s, sharp, notebook) sits at his right.
6 A TECHNICIAN BEN YAZZIE (30s) fiddles with a salt packet.
7 A MRS. CORDELIA FAIRWEATHER (60s, tailored, a visitor from the supply ship) eats nothing.
8 A ENGINEER JUNE KAWAMURA (30s) stirs her coffee.
9 A A tall man in a station jacket, STRANGER (40s, unreadable), stands just inside the door, hat in hand.
10 D COMMANDER LINDQVIST: Mrs. Fairweather, I trust you slept well.
11 D CORDELIA: Remarkably. I'm told the silence here is the best in the solar system.
12 D OKONKWO-REYES: It is. Nothing carries.
13 D YAZZIE: Not even sound. Not even, y'know, gossip.
14 D JUNE: Ben.
15 D YAZZIE: What? I'm only saying.
16 A ¶ The Stranger takes a step forward.
17 A Everyone turns, then politely turns back.
18 D CORDELIA: And who is our guest?
19 D STRANGER: We haven't met, ma'am. I came in with the supply crew.
20 D COMMANDER LINDQVIST: He's the new relief mechanic. Name of Pryce. Mr. Pryce, sit down.
21 D PRYCE: Thank you, Commander.
22 A ¶ He takes the empty chair.
23 A Okonkwo-Reyes studies him over her notebook.
24 D OKONKWO-REYES: Mr. Pryce, forgive me. The crew manifest for last Thursday's flight lists twelve passengers. Twelve names. None of them yours.
25 D PRYCE: I came on the second shuttle.
26 D OKONKWO-REYES: There was no second shuttle.
27 A ¶ Silence.
28 A June's spoon stops.
29 A Yazzie's salt packet bursts, scattering white on the table like frost.
30 D COMMANDER LINDQVIST: Dr. Okonkwo-Reyes--
31 D PRYCE: It's all right, Commander. She's right.
32 A ¶ He rises.
33 A Straightens his jacket.
34 A Takes off the station badge and lays it on the table, face up.
35 D PRYCE [CONT'D]: My name is Pryce. I'm the chairman of the board that signed off on this station. I came to see for myself whether the stories were true.
36 D CORDELIA (coolly): What stories?
37 D PRYCE: That the telescope hasn't worked since March. That the funding was diverted. That everyone at this table has been lying to Earth for six months.
38 A ¶ Nobody moves.
39 A The earthlight, blue and enormous, slides a finger of shadow across the dome.
40 D COMMANDER LINDQVIST: Mr. Pryce. Before you say another word, I'd ask you to look up.
41 A ¶ Pryce looks up.
42 A Through the dome, far off, a point of light blooms and pulses.
43 A Then another.
44 A Then a ring of them, pale as pearls, arranged in a perfect circle.
45 D PRYCE: What am I looking at?
46 D COMMANDER LINDQVIST: The reason we stopped reporting.

### SCENE s02460 | INT. DRAGON'S TAX OFFICE - DAY
Detected names (may be incomplete or contain aliases): GORLAN THRUM, PHINEAS ABERNATHY-OLU, VESUVIA
1 A ¶ A cave lined with ledgers.
2 A Gold coins in neat stacks.
3 A A huge brass desk, a quill taller than a man.
4 A ¶ GORLAN THRUM (40s, goblin accountant, ink-stained, eyeshade) sits on a towering stool.
5 A PHINEAS ABERNATHY-OLU (30s, human farmer, hat in hands) stands before him, shaking.
6 D GORLAN: Your tithe is eleven sheep.
7 D PHINEAS: Eleven, Master Gorlan?
8 D GORLAN: Eleven.
9 D PHINEAS: I have nine.
10 D GORLAN: You have nine and a ewe in lamb.
11 D PHINEAS: She isn't due until spring.
12 D GORLAN: Lambs count.
13 A ¶ A rumble shakes the cave.
14 A Dust sifts from the ceiling.
15 A A voice booms from somewhere beyond the ledgers.
16 D VESUVIA [O.S.]: Gorlan, is the farmer negotiating?
17 D GORLAN (calling back): No, Your Radiance.
18 D PHINEAS (muttering): I would never.
19 D VESUVIA [O.S.]: Good. I dislike negotiation.
20 D GORLAN: Phineas, the dragon is generous but not patient. Choose.
21 D PHINEAS: What are my choices?
22 D GORLAN: Eleven sheep, or an apple pie every Sunday for ten years.
23 D PHINEAS: Pie?
24 D GORLAN: Her Radiance has a sweet tooth.
25 D PHINEAS: Then I choose the pie.
26 D VESUVIA [O.S.] (delighted): Excellent.

### SCENE s00290 | INT. FLOODED CHURCH CRYPT - COMMAND POST - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR WINIFRED BAPTISTE-OKONKWO, CAPTAIN LUCIAN HARGREAVES-DIALLO, STACKS, WILLOUGHBY, LIEUTENANT SIMONE ARCHAMBAULT-TSOSIE, CORPORAL REUBEN VASQUEZ-OLUWOLE, COLONEL
1 A ¶ Vaulted brick.
2 A Knee-deep water.
3 A A table on cinderblocks, a field telephone, three lanterns.
4 A Mortar dust drifts down with each distant shell.
5 A ¶ MAJOR WINIFRED BAPTISTE-OKONKWO (40s, helmet off, tired) leans over a map.
6 A ¶ CAPTAIN LUCIAN HARGREAVES-DIALLO (30s, bandaged forehead) sits on the table edge.
7 A ¶ SERGEANT EUSTACE "STACKS" WILLOUGHBY (50s, immense, silent) cleans a rifle.
8 A ¶ LIEUTENANT SIMONE ARCHAMBAULT-TSOSIE (20s, radio operator) crouches by the field telephone.
9 A ¶ CORPORAL REUBEN VASQUEZ-OLUWOLE (20s, sentry) watches the stairs.
10 A ¶ The field telephone buzzes.
11 A Simone grabs it.
12 D SIMONE: Command post.
13 D COLONEL [V.O.] (over the phone, thin): Status.
14 D SIMONE: Holding, sir. Water's rising.
15 D COLONEL [V.O.]: Hold until dawn.
16 D SIMONE: Sir, they're shelling the nave.
17 D COLONEL [V.O.]: Hold until dawn, Lieutenant.
18 A ¶ The line clicks.
19 A Simone lowers the receiver.
20 D WINIFRED: Well?
21 D SIMONE: Dawn.
22 D LUCIAN: That's five hours.
23 D WINIFRED: Then we'll see five hours.
24 A ¶ A shell hits the church.
25 A The crypt shakes.
26 A Mortar rains.
27 A A lantern swings, throws shadows.
28 D REUBEN (muttering): Closer. Closer.
29 D STACKS (rumble): Let them.
30 A ¶ Winifred and Lucian step aside, water sloshing.
31 A They whisper over the map.
32 D WINIFRED: If the north wall goes, we pull back through the ossuary.
33 D LUCIAN: And if the ossuary floods?
34 D WINIFRED: Then we swim.
35 A ¶ A third shell, so close the lanterns gutter.
36 A Reuben shouts from the stairs.
37 D REUBEN: Movement! Top step!
38 A ¶ Everyone drops.
39 A Rifles up.
40 A Stacks rolls behind the table.
41 A Simone drags the phone under it.
42 A ¶ A boot appears on the stairs.
43 A Then a hand, empty, open.
44 D WINIFRED: Hold fire!
45 D LUCIAN: Hold fire!
46 A ¶ Nobody fires.
47 A A voice, thin and foreign, from the dark above.
48 D REUBEN (calling up): Show yourself!
49 A ¶ The crypt shakes one more time.
50 A Then, for the first time in hours, silence.
51 D STACKS (low): That's the barrage ending.
52 A ¶ Dust settles.
53 A Water stills.
54 A Reuben lowers his rifle at last.
55 D WINIFRED (to the whole crypt): Stand down. Rest in shifts.
56 D LUCIAN: Dawn?
57 D WINIFRED: Dawn.
58 A ¶ She turns to the map and does not look back at the stairs.

### SCENE s01551 | INT. EMERGENCY ROOM - TRAUMA BAY THREE - NIGHT
Detected names (may be incomplete or contain aliases): CHIDINMA OKAFOR-LINDQVIST, TOBIAS ACHTERBERG-NNAMDI, NURSE BEATRIZ COLQUHOUN-SANTOS
1 A ¶ Blood on the floor.
2 A Monitors shrieking.
3 A A gurney with a young man strapped to it, chest rising in shallow gasps.
4 A ¶ DR. CHIDINMA OKAFOR-LINDQVIST, 40s, in a gown and gloves, leans over the patient.
5 A Beside her, RESIDENT DR. TOBIAS ACHTERBERG-NNAMDI, 20s, holds a suction wand, white-faced.
6 A At the foot of the bed, NURSE BEATRIZ COLQUHOUN-SANTOS, 30s, cuts the patient's shirt with trauma shears.
7 D CHIDINMA: Pressure?
8 D TOBIAS: Seventy over forty.
9 D BEATRIZ: Falling.
10 D CHIDINMA: Two large-bore lines. Now.
11 D TOBIAS: Already in.
12 D BEATRIZ: Left arm's blown.
13 D CHIDINMA: Then go to the neck.
14 D TOBIAS: Dr. Okafor-Lindqvist, he's seventeen.
15 D CHIDINMA: Pressure.
16 D BEATRIZ: Sixty over thirty.
17 D TOBIAS: What's the mechanism?
18 D CHIDINMA: Stab wound, left chest, no exit.
19 D BEATRIZ: Pulse ox ninety.
20 D TOBIAS: Pneumothorax?
21 D CHIDINMA: Hemothorax. Chest tube. Tobias, you do it.
22 D TOBIAS: Me?
23 D CHIDINMA: Yes. Now.
24 D BEATRIZ: Betadine.
25 D TOBIAS: Okay. Okay.
26 D CHIDINMA: Fifth intercostal, mid-axillary. You know this.
27 D TOBIAS: I know this.
28 D BEATRIZ: Pressure's fifty.
29 D CHIDINMA: Push the blood.
30 D BEATRIZ: O-neg's up.
31 D TOBIAS: Incision.
32 D CHIDINMA: Good. Bluntly through the muscle.
33 D TOBIAS: There's a rush of blood.
34 D CHIDINMA: Good. That's the chest. Insert the tube.
35 D TOBIAS: It's in.
36 D BEATRIZ: Pressure sixty.
37 D CHIDINMA: Seventy?
38 D BEATRIZ: Seventy.
39 D TOBIAS: Output is eight hundred cc and rising.
40 D CHIDINMA: We go to the OR.
41 D BEATRIZ: OR's clearing.
42 D CHIDINMA: Get the surgeon.
43 D BEATRIZ: Calling.
44 D TOBIAS: Dr. Okafor-Lindqvist?
45 D CHIDINMA: Yes?
46 D TOBIAS: I thought he was gone.
47 D CHIDINMA: So did I.
48 A ¶ She rips off her gloves.
49 A Squeezes his shoulder once.
50 D CHIDINMA [CONT'D]: Good work, Doctor.

### SCENE s01006 | INT. COURTROOM - CONVERTED RIVER FERRY - DAY
Detected names (may be incomplete or contain aliases): JUDGE FAIRWEATHER, ROSAMUND, TIMOTHY, BAILIFF DOYLE
1 A ¶ A courtroom bolted into the old car deck of a retired ferry.
2 A Porthole windows.
3 A Brass railings.
4 A The floor rolls faintly with the current.
5 A The gallery is empty save for gulls on the sills.
6 A ¶ JUDGE FAIRWEATHER (70s, red robe, half-moon glasses) presides from a raised platform.
7 A ROSAMUND (40s, prosecutor, charcoal suit) stands at the lectern with a stack of exhibits.
8 A TIMOTHY (30s, defense counsel, rumpled tie) sits next to an empty chair.
9 A BAILIFF DOYLE (50s, wide shoulders, mustache) leans by the door, bored.
10 D JUDGE FAIRWEATHER: The court will resume.
11 D ROSAMUND: Your Honor, the state calls its final witness.
12 D TIMOTHY: Objection.
13 D JUDGE FAIRWEATHER: Overruled, Mr. Timothy.
14 D TIMOTHY: It's Mr. Beasley, Your Honor. Timothy is my first name.
15 D JUDGE FAIRWEATHER: Sit down, Timothy.
16 A ¶ He sits.
17 A Rosamund shuffles her papers, then sets them down.
18 D ROSAMUND: The state calls the defendant's mother.
19 D TIMOTHY: She is not here.
20 D ROSAMUND: She was subpoenaed.
21 D BAILIFF DOYLE: She went to the galley.
22 D JUDGE FAIRWEATHER: Bailiff, fetch her.
23 A ¶ He lumbers off.
24 A The ferry lurches.
25 A Papers slide across the table.
26 A Timothy catches his water glass.
27 A Rosamund catches the Judge's gavel.
28 A They exchange a long look, and for a moment both of them smile, then they remember where they are.
29 D JUDGE FAIRWEATHER [CONT'D]: Counsel, would you care to settle?
30 D ROSAMUND: We're beyond that, Your Honor.
31 D TIMOTHY: We were beyond that at the first harbor.
32 D JUDGE FAIRWEATHER: Then the court is adjourned until we dock.
33 A ¶ The gavel falls.
34 A A gull flaps off the sill.
35 A In the galley, a faint cheer rises, and everyone in the courtroom pretends not to hear.

### SCENE s00673 | EXT. NIGHT FERRY - UPPER DECK - NIGHT
Detected names (may be incomplete or contain aliases): GIRL, IGNACIO, WREN
1 A ¶ Wind drags the black water past the rail in long, unbroken sheets.
2 A The ferry's lamps throw a weak yellow circle on the planks, and past that circle there is nothing but weather.
3 A ¶ A GIRL, ten, sits on an overturned lifebuoy crate with her knees pulled to her chest.
4 A Her coat is two sizes too big and has belonged to someone else.
5 A Beside her, upright as a post, stands IGNACIO, seventies, a hat clamped in both fists against the gusts.
6 D GIRL: You said we'd be there by dark.
7 D IGNACIO: It is dark.
8 D GIRL: You know what I mean.
9 A ¶ He turns the hat in his hands, a slow revolution, as if he could find the right side of it by feel.
10 D IGNACIO: The captain says the crossing is slower tonight. Currents.
11 D GIRL: You always say the captain.
12 D IGNACIO: Because the captain always says.
13 A ¶ A swell lifts the ferry and sets it down hard.
14 A The girl's hand shoots out and grips his sleeve.
15 A He does not look at it.
16 A He lets it stay.
17 D IGNACIO [CONT'D]: What is your name? Your whole name. Tell it to me once more.
18 D GIRL: You know it.
19 D IGNACIO: I want to hear how you say it.
20 A ¶ Her chin lifts against the wind.
21 D GIRL: Wren Salazar-Imbert.
22 D IGNACIO: Again. Slower.
23 D WREN: Wren Salazar-Imbert. Wren. Like the bird. Like the small one that makes the loud noise.
24 D IGNACIO: Good. When they ask at the dock, you say it like that.
25 D WREN: Who is going to ask?
26 A ¶ He does not answer.
27 A The foghorn sounds, once, long enough to shake the rail.
28 A Wren tightens her grip on his sleeve, and neither of them looks toward the dark where the shore should be.
29 D WREN [CONT'D]: Ignacio. Will you be there?
30 D IGNACIO: I am here now.
31 D WREN: That is not what I asked.
32 A ¶ The ferry rolls.
33 A The lamp swings.
34 A Ignacio sets his hat on her head, pulling it down over her ears, and she lets him.

### SCENE s02392 | INT. FATHER'S TACKLE SHOP - EVENING
Detected names (may be incomplete or contain aliases): CALLIE FENWICK-NAKAMURA
1 A ¶ Rows of rods in wall racks, tins of hooks, a stuffed pike on a plaque.
2 A A bell above the door has gone still.
3 A The shop smells of old rope and kerosene.
4 A ¶ CALLIE FENWICK-NAKAMURA, forties, in a canvas jacket, stands at the counter with a cardboard box.
5 A She is packing a life's work into it.
6 A A pair of reading glasses.
7 A A thermos.
8 A A ledger.
9 A She works slowly, as if the objects might break if she hurried.
10 A ¶ On the wall, a landline phone with a long curled cord.
11 A Beside it, an answering machine blinks 1.
12 A ¶ She stops.
13 A Looks at the machine.
14 A Looks away.
15 A Picks up the thermos.
16 A Sets it down.
17 A Her hand drifts to the button and then retreats.
18 A ¶ She goes to the window, flips the sign from OPEN to CLOSED, and rests her forehead on the cold glass.
19 A ¶ The machine clicks.
20 A A tape whirs.
21 D CALLIE [V.O.] (recorded greeting): Hi, you've reached Fenwick's Tackle. We're out on the water. Leave a message and we'll call you back when the fish quit biting.
22 A ¶ A BEEP.
23 A ¶ She turns around.
24 A Slowly.
25 A Crosses to the counter.
26 A Presses the button again.
27 D CALLIE [V.O., CONT'D] (recorded greeting): Hi, you've reached Fenwick's Tackle...
28 A ¶ She presses stop.
29 A The tape clicks.
30 A She stands with her palm flat on the machine, the way one touches a sleeping animal.
31 A ¶ Then, briskly, she wraps the cord around her wrist and pulls the phone off the wall.
32 A A cloud of plaster dust drifts down.
33 A She sets the phone in the box.
34 A Folds the flaps.
35 A Tapes them shut.
36 A ¶ The bell above the door rings.
37 A She does not look up.
38 A She reaches for the stuffed pike on its plaque and takes it down, runs a finger along its glass eye, and, to the empty shop, in a voice almost too quiet to hear:
39 D CALLIE (recorded greeting): We'll call you back.
40 A ¶ She tucks the pike under her arm.
41 A Picks up the box.
42 A Turns off the light.

### SCENE s02190 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): GRANDMOTHER ILONA, TOBY, NELL, NELL'S BROTHER RAFE, PATTERSON
1 A ¶ A round room, whitewashed.
2 A A kettle ticks on an iron stove.
3 A Rain slides down the glass in slow threads.
4 A Five places are set at a table built for four.
5 A ¶ GRANDMOTHER ILONA (80s, shawl, hands folded) watches the empty fifth chair.
6 A Her grandson TOBY (20s, damp jacket) stirs his soup and does not drink it.
7 A His wife NELL (20s, pregnant, cardigan buttoned wrong) counts the spoons.
8 A NELL'S BROTHER RAFE (30s, unshaven) pours whisky into his tea.
9 A And the housekeeper, MRS. PATTERSON (60s, apron), sets down bread with exaggerated care.
10 A ¶ The lamp above the table dims.
11 A Brightens.
12 D GRANDMOTHER ILONA: Toby, the bread.
13 D TOBY: Thank you, Gran.
14 A ¶ He doesn't take any.
15 A Nell slides the board toward him with one finger.
16 D NELL: Rafe, you were out at the rocks today.
17 D RAFE: Checking the lines.
18 D NELL: Find anything?
19 D RAFE: Nothing worth mentioning, Nell.
20 A ¶ Mrs. Patterson sets a sixth bowl at the fifth place.
21 A Nobody comments.
22 A The kettle goes quiet.
23 A The soup steams across the empty chair.
24 D GRANDMOTHER ILONA: Mrs. Patterson, thank you.
25 D MRS. PATTERSON: He always liked the leeks.
26 A ¶ Toby puts down his spoon.
27 A Rafe turns his cup in a slow circle.
28 A Far above them, the great lamp grinds round, and its beam crosses the window once, white, then gone.
