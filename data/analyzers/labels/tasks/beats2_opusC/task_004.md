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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusC/group_13004.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s01044 | INT. LIBRARY OF MOTHS - THE HOLLOW TOWER - NIGHT
Detected names (may be incomplete or contain aliases): ORRIN, SABLE, TAMSIN, VESPER
1 A ¶ Shelves rise into darkness, thick with bound ledgers.
2 A Pale moths cover every spine, their wings turning the pages by themselves.
3 A ¶ ORRIN, a young knight in dented mail, steps through the arch, sword half-drawn.
4 A At his side, SABLE, a thief with a hooded cloak and a crooked smile, carries a lantern whose flame burns blue.
5 D ORRIN: Quiet. They sleep.
6 D SABLE: They're moths, Orrin. They don't sleep.
7 A ¶ TAMSIN, a girl of twelve in an apprentice's smock, scurries from behind a shelf, arms full of scrolls, and nearly collides with them.
8 A All three freeze.
9 D TAMSIN: You are not supposed to be here.
10 D SABLE: No one is.
11 A ¶ The moths lift in a silent cloud.
12 A Orrin's sword rings free.
13 A Sable ducks, Tamsin shrieks, scrolls scatter, and the three tumble together into the center aisle, tangled in cloak and chain.
14 A ¶ A hush falls.
15 A ¶ VESPER, tall and thin, robed in gray, steps from between the shelves.
16 A Her face is a smooth mask of bone-white silk.
17 A She raises one hand.
18 A The moths settle.
19 D VESPER: The Archivist welcomes you. Now put down the lantern.

### SCENE s00015 | INT. OBSERVATORY DOME - NIGHT
Detected names (may be incomplete or contain aliases): HETTY, BLACKWOOD, BASTIAN ODUYA, SOLI, VARGAS, WILFRED PRATT, MEI-LING TAN
1 A ¶ A brass telescope as long as a bus points at a slit of stars.
2 A The floor is parquet, the walls lined with star charts and one tipped-over teacup.
3 A On the floor beside the eyepiece platform lies a coat, empty, its sleeves flung wide.
4 A ¶ Five people stand in a loose ring around it, and nobody wants to be the first to look down.
5 A ¶ HENRIETTA "HETTY" BLACKWOOD (60s, observatory director, tweed, a magnifying glass on a chain) stares at the coat.
6 A BASTIAN ODUYA (30s, graduate student, ink on his fingers, a wool hat pulled low).
7 A SOLEDAD "SOLI" VARGAS (40s, night technician, thermos in one hand and the dome keys in the other).
8 A WILFRED PRATT (70s, retired astronomer, a cane, a rumpled evening jacket).
9 A And MEI-LING TAN (20s, journalist, notebook, recorder held out like a candle).
10 D HETTY: Who last saw Doctor Marrow?
11 D BASTIAN: Soli did. She locked up at nine.
12 D SOLI: I locked the north door. I did not lock the dome.
13 D PRATT: Soledad, my dear, a dome has no door. It is a lid.
14 D SOLI: Then I locked the lid, Mr. Pratt.
15 D MEI-LING: Let's slow down. Soli, you said Doctor Marrow asked you for the keys?
16 D SOLI: He asked. I said no.
17 D BASTIAN: You told me you gave them to him.
18 D SOLI: I told you he asked, Bash. You heard what you wanted.
19 D HETTY: Bastian. Where were you at nine?
20 D BASTIAN: Plate room. Cataloguing.
21 D PRATT: For five hours? That's not cataloguing, it's meditation.
22 D BASTIAN: It was the Hartwell plates, Mr. Pratt. You know how many there are.
23 D PRATT: I know how many there were. I counted them in 1989.
24 D MEI-LING: Mr. Pratt, you told me earlier you hadn't been to the observatory in years.
25 D PRATT: Did I?
26 D MEI-LING: Your exact words were, "I haven't set foot on this hill since the Marrow appointment."
27 D PRATT: Then I was speaking figuratively.
28 D HETTY: Wilfred. You have a key.
29 D PRATT: Everyone has a key, Hetty. That's the tragedy of the institution.
30 D SOLI: I don't think everyone has a key.
31 D HETTY: Soli, who does?
32 D SOLI: Me. You. Doctor Marrow.
33 D BASTIAN: And Pratt, apparently.
34 D PRATT: Apparently.
35 D MEI-LING: So four keys. And a coat on the floor.
36 D HETTY: Don't touch the coat, Miss Tan.
37 D MEI-LING: I wasn't going to.
38 D SOLI: You were. You've been inching toward it for five minutes.
39 D MEI-LING: I'm a reporter. Inching is the job.
40 D PRATT: Inching is how the best of us died, my girl.
41 D HETTY: Wilfred, enough.
42 D PRATT: I'm only saying. The coat is on the floor, the lid is open, and Doctor Marrow is not in either of them. Somebody in this room is going to have to explain that. And I would very much like for it not to be me.
43 D BASTIAN: Then explain why your cane is wet.
44 A ¶ A silence.
45 A The telescope creaks.
46 D PRATT: It rained.
47 D SOLI: It hasn't rained since Tuesday.
48 D HETTY: Wilfred.
49 D PRATT: Hetty.
50 D HETTY: Where is he?

### SCENE s01084 | INT. DRAINED SWIMMING POOL - COMMUNITY CENTER - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE CASSIUS RHEE, FORENSIC TECH BELINDA OSEI, CAPTAIN VOSS, DOLORES AMADI
1 A ¶ Cracked blue tile.
2 A A dry deep end littered with leaves.
3 A Floodlights on stands.
4 A Yellow tape across the diving board.
5 A ¶ DETECTIVE CASSIUS RHEE, 40s, rain jacket, notebook, crouches at the bottom of the deep end beside a chalk outline.
6 A FORENSIC TECH BELINDA OSEI, 30s, white suit, kneels with a camera.
7 A A tarp covers something near the drain.
8 D RHEE: Time of death?
9 D OSEI: Medical examiner says midnight. Give or take.
10 D RHEE: Who drained the pool?
11 D OSEI: Nobody. It's been empty since August.
12 D RHEE: Then how did she end up down here?
13 D OSEI: She fell. Or she was pushed.
14 A ¶ He steps over the chalk.
15 A Lifts the tarp with a pen.
16 A Underneath, a single red high-heeled shoe.
17 D RHEE: Where's the other?
18 D OSEI: Haven't found it.
19 A ¶ A phone rings.
20 A Rhee's.
21 A He answers.
22 D CAPTAIN VOSS [V.O.] (tinny, over the phone): Rhee. Anything?
23 D RHEE: A shoe, Captain. Just a shoe.
24 D CAPTAIN VOSS [V.O.]: There's a witness on her way down. Janitor. Says she saw something.
25 D RHEE: Copy.
26 A ¶ He hangs up.
27 A Footsteps on the stairs.
28 A A figure descends: MS. DOLORES AMADI, 60s, janitor's apron, mop in hand like a staff.
29 A She stops at the pool edge.
30 D DOLORES: Detective?
31 D RHEE: Ms. Amadi. Come down.
32 A ¶ She picks her way down the shallow-end steps, mop first.
33 D DOLORES: I saw a man. By the diving board. Very tall. Very quiet.
34 D OSEI: What was he wearing?
35 D DOLORES: Gray. A long coat. Like a priest.
36 D RHEE: Did he see you?
37 D DOLORES: No. But he left something.
38 A ¶ She reaches into her apron pocket.
39 A Pulls out the second red shoe, wrapped in a plastic bag.
40 A Rhee and Osei exchange a look.
41 D OSEI: You touched it?
42 D DOLORES: I wore gloves.
43 D RHEE (taking it): Thank you.
44 A ¶ A clang from the diving board.
45 A All three whip around.
46 A The tape trembles.
47 A A silhouette stands at the top of the board, backlit by dawn.
48 D RHEE [CONT'D] (low): Police! Stay where you are!
49 A ¶ The silhouette leaps.
50 A Rhee lunges.
51 A Osei drops the camera.
52 A Dolores raises the mop.
53 A They collide at the lip of the deep end in a tangle of arms, mop handle and raincoat.
54 A ¶ A bright flash from Osei's camera bursts across the tile.
55 A The man scrambles up the stairs.
56 A Rhee and Dolores sprawl together.
57 A Osei pulls herself up.
58 D OSEI: He's gone!
59 D RHEE (breathing hard): Not far.
60 A ¶ Dolores sits, hand on her chest, mop still clutched.
61 D DOLORES: Detective. I think I know that coat.

### SCENE s01040 | INT. TERMINATOR GREENHOUSE - TIDALLY LOCKED WORLD - TWILIGHT
Detected names (may be incomplete or contain aliases): ILSA VANTONGEREN, BRAM, QUILLON, SEPHORA
1 A ¶ A long glass nave on the border between day and night.
2 A To the east, a white-hot sun hangs unmoving.
3 A To the west, black sky and frozen plains.
4 A Inside, tomato vines climb silver wires, heavy with fruit.
5 A ¶ ILSA VANTONGEREN, 50s, botanist, hair wrapped in a faded scarf, kneels among the roots.
6 A She hums as she works, one hand cupping a green fruit like a held breath.
7 A ¶ BRAM, 20s, her apprentice, stands behind her.
8 A He holds a tablet and stares at it as if it had insulted him.
9 D BRAM: Ilsa. The heat sink is at ninety-four.
10 D ILSA: Ninety-four of what?
11 D BRAM: Percent.
12 A ¶ She rises slowly.
13 A Her knees crack.
14 A She doesn't look at the tablet.
15 A She looks at the glass.
16 D ILSA: It was ninety-one an hour ago.
17 D BRAM: I know.
18 D ILSA: Then why are you telling me like it's news?
19 A ¶ He swallows.
20 A He pockets the tablet.
21 A ¶ QUILLON, 30s, the colony's engineer, jogs down the nave, boots clanging on the grating.
22 A He is out of breath, face slick, goggles pushed up on his forehead.
23 D QUILLON: Ilsa! Bram! The shade array's jammed.
24 D ILSA: Jammed how?
25 D QUILLON: It won't rotate. The motor's seized.
26 D BRAM: Because of the heat?
27 D QUILLON: Because of a bolt. Someone put a bolt in the gear.
28 D ILSA: Someone?
29 D QUILLON: Or something.
30 A ¶ Dr. Sephora Oyama's voice crackles from a speaker in the roof.
31 D SEPHORA [V.O.]: Greenhouse, this is Medical. We have a patient with heat stroke in the corridor. Is anyone free to--
32 D ILSA (cutting in): We're busy.
33 D BRAM (over her): Send Quillon!
34 D QUILLON (over Bram): I can't, I'm needed here!
35 D SEPHORA [V.O.]: Please. She's asking for you, Ilsa.
36 A ¶ Ilsa stops.
37 A Her hand falls from the tomato.
38 A The vines rustle, as if the plants were leaning to listen.
39 D ILSA: Who is?
40 D SEPHORA [V.O.]: Your daughter.
41 A ¶ She turns to the glass.
42 A Stares at the white sun.
43 A Her shoulders fall, then straighten.
44 D ILSA: Bram. Take the tomatoes. All of them. Into the cold room.
45 D BRAM: All of them?
46 D ILSA: All. Quillon, fix the array. I don't care if you have to swing from it.
47 D QUILLON: And you?
48 D ILSA: I'm going to my daughter.
49 A ¶ She is already running.
50 A Her scarf comes loose and trails behind her like a flag.
51 A ¶ Bram watches her go.
52 A Quillon grabs his arm.
53 D QUILLON [CONT'D]: Come on. We've got maybe ten minutes.
54 D BRAM: Before what?
55 D QUILLON: Before the glass starts cracking.
56 A ¶ He is already moving.
57 A Bram scrambles after, arms full of fruit, tomatoes bouncing and rolling across the floor.

### SCENE s01082 | INT. MINIATURE GOLF CLUBHOUSE - A PIRATE SHIP FOUNDERED IN PLASTER - DAY
Detected names (may be incomplete or contain aliases): BARNABY QUINCE, ODALYS FERREIRA-LAWSON, PARROT, CHILD
1 A ¶ A clubhouse built like a shipwreck.
2 A Fiberglass barnacles.
3 A A parrot animatronic that squawks on a timer.
4 A Scorecards pinned to a mast.
5 A The windows overlook a windmill hole where nobody is playing.
6 A ¶ BARNABY QUINCE, 50s, tour-guide's moustache, pirate hat two sizes small, sits behind the counter practicing a speech to the empty room.
7 A Beside the register, ODALYS FERREIRA-LAWSON, 20s, mini-golf league champion, rolls a putter along the floorboards, bored.
8 D BARNABY (to the room): Ahoy, ye mighty putters! Today we face the Kraken's Revenge, hole eighteen, par three...
9 D ODALYS: Nobody is here, Barnaby.
10 D BARNABY (muttering to himself): Practice makes plunder.
11 D ODALYS: You say that to the parrot, too.
12 D BARNABY: The parrot's a good listener.
13 A ¶ The parrot squawks on cue.
14 D PARROT [V.O.]: Pieces of eight! Pieces of eight!
15 D BARNABY: See?
16 D ODALYS: It's on a loop.
17 A ¶ She sinks a putt into a coffee cup.
18 A Barnaby claps.
19 A She bows.
20 D BARNABY: Ladies and gentlemen --
21 D ODALYS: There's no ladies and gentlemen.
22 D BARNABY: Ladies and gentleman.
23 D ODALYS: Gentleperson.
24 D BARNABY (delighted): Gentleperson! Excellent.
25 A ¶ The door chimes.
26 A A family of six enters in matching shirts.
27 A They fill the clubhouse with sunburn and noise.
28 A Barnaby leaps up, hat tilting.
29 D BARNABY [CONT'D] (grandly, to all): Welcome, brave souls! Who dares challenge the Kraken?
30 A ¶ A small child points at Odalys.
31 D CHILD: She's got a golf stick!
32 D ODALYS (to the child): It's a putter.
33 D BARNABY (to the child): It's a cutlass, my boy.
34 A ¶ They speak at once.
35 D BARNABY [CONT'D]: Eighteen holes of peril!
36 D ODALYS: ^Eighteen holes of boredom.
37 D BARNABY (hissing): Odalys.
38 D ODALYS (whispering back): What? It's honest.
39 A ¶ The family cheers anyway.
40 A Barnaby sweeps the hat off, bows with a flourish.
41 A The hat tips off his head, rolls across the floor, and stops at the child's feet.
42 A The child puts it on.
43 D BARNABY (quietly, to himself): Well, that's a first.
44 D ODALYS (to him, under her breath): Don't get used to it. You'll want it back.
45 A ¶ Barnaby hands out putters.
46 A Odalys slides the scorecards across the counter.
47 A The parrot squawks.
48 D PARROT [V.O.]: Pieces of eight!
49 D ODALYS (deadpan): And a mutiny.

### SCENE s01111 | INT. SURPRISE PARTY - APARTMENT LIVING ROOM - DARK - EVENING
Detected names (may be incomplete or contain aliases): BEA, LINDQVIST-ADE, COLM FITZGIBBON, ROZ, PELLEGRINO-OKON, YOSHIRO BAPTISTE, TIBBY, MORROW, DELIVERY GUY, ALL
1 A ¶ Balloons.
2 A A banner.
3 A A cake with too many candles.
4 A Five adults crouch behind furniture, whispering, trying not to giggle.
5 A ¶ BEATRIX "BEA" LINDQVIST-ADE, 40s, behind the couch with a noisemaker.
6 A COLM FITZGIBBON, 30s, behind the armchair holding a camera.
7 A ROSALIND "ROZ" PELLEGRINO-OKON, 50s, under the dining table with the cake.
8 A YOSHIRO BAPTISTE, 20s, crouched by the door, finger on the lights.
9 A And TIBERIUS "TIBBY" MORROW, 60s, hidden inside the coat closet.
10 D BEA (whispering): She's coming up the stairs.
11 D COLM (whispering): How do you know?
12 D BEA: I hear her keys.
13 D ROZ: She's got the wrong keys.
14 D YOSHIRO: Shh!
15 A ¶ The doorknob rattles.
16 A All five freeze.
17 A A key scrapes and fails.
18 A Another.
19 A A third.
20 D TIBBY (from the closet): Is it her?
21 D BEA: Quiet!
22 A ¶ The door swings open.
23 A A silhouette in the hall: a stranger in a delivery uniform, holding a pizza box.
24 D DELIVERY GUY: Uh. Hello?
25 A ¶ Yoshiro flips the lights.
26 A Everyone leaps up.
27 D ALL: Surprise!
28 A ¶ Roz pitches the cake into the air.
29 A Colm's flash goes off.
30 A Bea blows the noisemaker in the Delivery Guy's face.
31 A He yelps, the pizza flies, the cake lands on Tibby as he tumbles out of the closet.
32 A ¶ Silence.
33 A Frosting drips from Tibby's nose.
34 A The Delivery Guy stares at them all.
35 D DELIVERY GUY [CONT'D]: ...Does anyone here order a large pepperoni?
36 D BEA (weakly): Wrong apartment?
37 D DELIVERY GUY: Apparently.
38 A ¶ Tibby licks frosting from his lip.
39 D TIBBY: Well. I'll take the pizza.

### SCENE s01046 | INT. VOSSBERG & CRANE - EXECUTIVE NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE ADEYEMI, MALCOLM VOSSBERG
1 A ¶ Six sleek pods, each shaped like a lacquered egg.
2 A Soft ambient chimes.
3 A A sign on the wall: REST IS RESULTS.
4 A ¶ PRUDENCE ADEYEMI, 40s, in a pressed navy suit, stands outside pod three.
5 A She has been standing there a long time.
6 A Her phone is in her hand, screen dark.
7 A ¶ MALCOLM VOSSBERG, 50s, in shirtsleeves, tie loosened to a politician's disarray, emerges from pod four rubbing his eyes.
8 A He sees her.
9 A He smiles.
10 A He is not surprised.
11 D MALCOLM: Prudence. I thought you'd gone home.
12 D PRUDENCE: I did.
13 D MALCOLM: Then you came back.
14 D PRUDENCE: For my coat.
15 A ¶ She doesn't move toward the coat rack.
16 A He does.
17 A He lifts her coat off a hook, holds it out.
18 A She takes it.
19 A Doesn't put it on.
20 D MALCOLM: Rough week.
21 D PRUDENCE: It's Thursday.
22 D MALCOLM: Rough Thursday.
23 A ¶ He adjusts a pod's dial.
24 A The chimes change key.
25 D MALCOLM [CONT'D]: The numbers will be fine. They always are.
26 D PRUDENCE: Are they?
27 D MALCOLM: You doubt me?
28 D PRUDENCE: I doubt the spreadsheet.
29 D MALCOLM: It's your spreadsheet.
30 D PRUDENCE: It's the one you rewrote.
31 A ¶ Silence.
32 A The chimes continue.
33 A A faint hiss of oxygen from the pods.
34 D MALCOLM: I thought you'd appreciate the efficiency.
35 D PRUDENCE: Efficiency.
36 D MALCOLM: Streamlining.
37 A ¶ Prudence folds her coat over her arm.
38 A Folds it a second time.
39 A Smooths it flat with both hands, too carefully.
40 D PRUDENCE: I'll be in my office.
41 D MALCOLM: You were just leaving.
42 D PRUDENCE: I changed my mind.
43 A ¶ He nods.
44 A Looks at the pod.
45 A Looks at her.
46 D MALCOLM: Sleep on it. That's what these are for.
47 A ¶ She turns, walks to the door.
48 A Pauses with one hand on the frame.
49 D PRUDENCE: Do you sleep in there?
50 D MALCOLM: Every day.
51 D PRUDENCE: And dream?
52 D MALCOLM: Never.
53 D PRUDENCE: That's what I thought.
54 A ¶ She leaves.
55 A He watches the door close, then climbs back into pod four and seals the lid.

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

### SCENE s01072 | INT. MAINTENANCE CRAWLSPACE ABOVE CUBICLE FARM - DAY
Detected names (may be incomplete or contain aliases): RENATA KOWALCZYK, INTERCOM
1 A ¶ Ductwork.
2 A Dust.
3 A A folding chair wedged between pipes.
4 A A thermos.
5 A A lunch bag labeled "DO NOT TOUCH."
6 A ¶ RENATA KOWALCZYK, 40s, lanyard, cardigan, eats a sandwich.
7 A Content.
8 A A small desk fan hums.
9 A ¶ Through the vent grate below: the office.
10 A Fluorescent hum.
11 A Keyboards.
12 D INTERCOM [V.O.]: Good afternoon, team. A reminder that the quarterly synergy audit begins at three.
13 A ¶ Renata chews.
14 A Nods.
15 A Pours tea.
16 D INTERCOM [V.O., CONT'D]: Auditors will be reviewing all workstations. Including unoccupied ones.
17 A ¶ She stops chewing.
18 D INTERCOM [V.O., CONT'D]: Employee Kowalczyk's desk has been unoccupied for eleven months. Please report to Facilities.
19 A ¶ Renata sets down the sandwich.
20 A Looks through the grate.
21 A Her empty cubicle.
22 A A dead plant.
23 A Her nameplate.
24 A ¶ A flashlight beam sweeps the crawlspace behind her.
25 D RENATA (whispering): Oh, no.

### SCENE s01070 | INT. FLOODED RICE MILL - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT OKAFOR, CORPORAL HALVORSEN, PRIVATE LIN, STRANGER, TEODOR
1 A ¶ Knee-deep brown water.
2 A Sacks float like dead cattle.
3 A SERGEANT OKAFOR, 40s, scarred jaw, holds a lantern low.
4 A CORPORAL HALVORSEN, 20s, freckled, covers the door with a rifle.
5 A PRIVATE LIN, 19, thin, shivers beside a radio set.
6 A ¶ A man in a farmer's coat wades out of the dark.
7 A Hands up.
8 A STRANGER, 50s, mud to the waist.
9 D STRANGER: Don't shoot. I live here.
10 D OKAFOR: Nobody lives here. Name.
11 D STRANGER: Teodor. Teodor Vasko. The mill is my brother's.
12 A ¶ Halvorsen steps closer.
13 A Lin keeps her eyes on the radio.
14 D HALVORSEN: Sarge, he came from the north bank. That's their side.
15 D TEODOR: The bridge is gone. I swam.
16 A ¶ Distant engines.
17 A Okafor kills the lantern.
18 A Dark.
19 D OKAFOR (whispering): Lin. Radio. Now.
20 D LIN: Static, Sergeant. Only static.
21 A ¶ The engines grow louder.
22 A Halvorsen cocks the rifle.

### SCENE s01097 | INT. CURLING CLUB - BAR - NIGHT
Detected names (may be incomplete or contain aliases): RAGS, ENGSTROM, TOBY, ADEKUNLE, LOLO, BEAUMONT
1 A ¶ Wood paneling.
2 A A dartboard.
3 A Brooms hung on pegs.
4 A Through the frosted glass, the ice gleams under floodlights.
5 A ¶ SKIP RAGNHILD "RAGS" ENGSTROM, 40s, tweed vest, nurses a ginger ale.
6 A Her third, TOBIAS "TOBY" ADEKUNLE, 30s, still in his team sweater, picks at a bowl of peanuts.
7 A Their lead, ELOISE "LOLO" BEAUMONT, 20s, shoes off, feet on a stool, scrolls her phone.
8 D RAGS: Lolo, put the phone down.
9 D LOLO: It's the final scores.
10 D RAGS: We lost.
11 D LOLO: By one stone.
12 D TOBY: By one stone, Rags. One.
13 D RAGS: Don't you start, Toby.
14 D TOBY: I'm just saying, if you'd called the hammer on the ninth end --
15 D RAGS: I called the hammer.
16 D TOBY: You called it late.
17 A ¶ Rags slams her glass on the bar.
18 A Lolo drops the phone.
19 A Toby freezes mid-peanut.
20 D RAGS: I called it when the ice told me to.
21 D LOLO: Rags, the ice doesn't talk.
22 D RAGS: It does if you listen.
23 A ¶ A silence.
24 A Toby slowly crunches a peanut.
25 A Lolo picks up her phone, slides it into her pocket.
26 A Rags unclenches her fist.
27 D RAGS [CONT'D] (quieter): We did well, Lolo.
28 D LOLO: We did.
29 D TOBY: We did great, Rags.
30 D RAGS: Don't suck up, Toby.
31 D TOBY: I'm sucking up with respect.
32 A ¶ Rags almost smiles.
33 A Lifts her glass.
34 D RAGS: To the ninth end.
35 D LOLO: To the ninth end.
36 D TOBY: To the hammer.
37 A ¶ They clink.
38 A Beyond the glass, the Zamboni hums across the ice, erasing everything.

### SCENE s01062 | INT. STRANDED COACH BUS - 3 A.M.
Detected names (may be incomplete or contain aliases): NAOMI PRESCOTT, EMERY LUND
1 A ¶ A long-distance bus at the roadside, hazard lights ticking amber against a field of black.
2 A Rows of reclining seats, empty.
3 A A fine layer of frost on the inner windows.
4 A The driver's seat is vacant, door gaping open to the night.
5 A ¶ NAOMI PRESCOTT, 30s, parka and wool cap, sits in the third row from the back with a paperback she isn't reading.
6 A Across the aisle, EMERY LUND, 20s, headphones, hoodie, bounces one knee.
7 A ¶ Neither has spoken for twenty minutes.
8 D EMERY (to the bus, loud): Hello? Anyone else on here?
9 A ¶ Silence.
10 A Hazards tick.
11 D NAOMI: There's nobody else.
12 D EMERY: Right.
13 D NAOMI: The driver stepped out for the radio.
14 D EMERY: That was an hour ago.
15 D NAOMI: Forty minutes.
16 D EMERY (muttering): Felt like an hour.
17 A ¶ She pulls the headphones down around her neck.
18 A Naomi turns a page.
19 A Doesn't read it.
20 A The bus creaks, settling on its springs.
21 D EMERY [CONT'D]: Did you hear that?
22 D NAOMI: Hear what?
23 D EMERY: Like tapping.
24 D NAOMI: It's the cold.
25 D EMERY: It's not the cold.
26 D NAOMI: It's the cold.
27 A ¶ Tap.
28 A Tap.
29 A Tap-tap.
30 A ¶ Both sit very still.
31 A The sound comes from somewhere in the back of the bus.
32 A Not the engine.
33 A Not the heater.
34 A Something closer, patient.
35 D EMERY: It's in the luggage rack.
36 D NAOMI: Don't.
37 D EMERY: Someone left a bag.
38 D NAOMI: Emery.
39 D EMERY: I'm going to look.
40 A ¶ She stands.
41 A Naomi stands too, in the same moment, then sits back down, and then stands again.
42 A They both end up in the aisle, and the bus sways, and neither wants to take the first step.
43 D EMERY [CONT'D] (to Naomi, whispering): You first.
44 D NAOMI (to the bus): Whoever's there, we know you're in there.
45 D EMERY: Whoever's there, we know you're in there.
46 A ¶ They say it at the same time.
47 A They look at each other.
48 D NAOMI: Stop that.
49 D EMERY: You stop.
50 A ¶ The tapping stops.
51 A Instead, a soft, wet noise, like a hand pulled slowly out of mud.
52 A ¶ The overhead luggage rack shudders.
53 A A zipper rasps.
54 A A black duffel bag unzips by itself, one slow tooth at a time.
55 A ¶ Naomi clutches the seat.
56 A Emery clutches Naomi's arm.
57 A They back up the aisle together, step for step, until they hit the rear emergency door.
58 D NAOMI [CONT'D] (whispering): Open it.
59 D EMERY: It's locked.
60 D NAOMI: Open it!
61 D EMERY: It's a lever! It's on the floor!
62 A ¶ She drops.
63 A Gropes under the seat.
64 A Naomi keeps her eyes on the duffel.
65 A The zipper rasps another inch.
66 D EMERY [CONT'D] (to herself): Come on. Come on.
67 A ¶ Something pale slides out of the bag.
68 A Fingers, knuckled and long.
69 A They curl around the edge of the rack.
70 D NAOMI (very low): Emery. Pull it. Now.
71 A ¶ Emery pulls.
72 A The emergency door swings out with a clatter, and cold air slams into the bus.
73 A The hazards tick.
74 A The fingers withdraw.
75 D EMERY: Go! Go!
76 A ¶ Naomi shoves her out the door, tumbles after.
77 A They land in the gravel on their hands and knees, gasping.
78 A ¶ Behind them, the bus sits glowing amber, silent.
79 A The duffel, lying on the aisle floor, is zipped shut again.
80 D NAOMI (panting): Don't look back.
81 D EMERY: I'm not.
82 D NAOMI: Good.
83 A ¶ They crawl away from the road.
84 A Neither looks.
85 A Both hear it: the soft tap of a hand on the glass.

### SCENE s01029 | INT. SYNERGY DYNAMICS - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): DARRYL PENHALLOW
1 A ¶ Forty identical desks.
2 A Forty identical monitors.
3 A A banner reads WE ARE FAMILY!
4 A ¶ DARRYL PENHALLOW, 30s, lanyard, tie two sizes too wide, stands bolt upright at his desk.
5 A Eyes wide.
6 A Smiling.
7 D DARRYL [V.O.]: This is my third reorg this quarter. I've been promoted twice. I still do the same job.
8 A ¶ He types.
9 A Fast.
10 A Frantic.
11 A Smiling.
12 D DARRYL [V.O., CONT'D]: Synergy is not a word. It's a hostage note.
13 A ¶ A cheerful intercom chime.
14 A ¶ He grabs a stapler.
15 A Clutches it to his chest.
16 A Smiling.
17 D DARRYL [V.O., CONT'D]: Quick wins. Low-hanging fruit. Circle back. Ping me.
18 A ¶ He drops the stapler.
19 A Picks up a mug: WORLD'S OKAYEST EMPLOYEE.
20 D DARRYL (to the room, bright): Great job, team!
21 A ¶ No one answers.
22 A Forty monitors glow.
23 D DARRYL [CONT'D] (muttering): We are so aligned.
24 A ¶ He sips from the empty mug.
25 A Sets it down.
26 A Smiles.

### SCENE s01045 | INT. GOAT YOGA STUDIO - MORNING
Detected names (may be incomplete or contain aliases): CLAUDETTE FONTENOT, LEONARD PRICE, MAMA ROSE
1 A ¶ A converted barn.
2 A Bamboo mats in neat rows, string lights, a chalkboard reading "Namaste Baa-ck."
3 A Six goats wander the floor, bored, chewing yoga straps.
4 A ¶ CLAUDETTE FONTENOT, 40s, instructor, flowing linen, sits cross-legged on a mat with a phone propped against her water bottle.
5 A LEONARD PRICE, 50s, her only student, a stockbroker in too-tight spandex, attempts a downward dog.
6 D LEONARD: Claudette, one of them is eating my sock.
7 D CLAUDETTE: That's Beyonce. She loves attention.
8 D LEONARD: It's attention with teeth.
9 D CLAUDETTE: Breathe, Leonard. In through the nose.
10 A ¶ He breathes.
11 A Beyonce chews.
12 A He breathes again.
13 A ¶ The phone rings.
14 A A photo of an elderly woman in a floppy hat.
15 A MAMA ROSE.
16 D CLAUDETTE [CONT'D]: Sorry. I have to take this.
17 A ¶ She answers on speaker.
18 D MAMA ROSE [V.O.]: Claudette! Are you on the goat farm again?
19 D CLAUDETTE: It's a studio, Mama.
20 D MAMA ROSE [V.O.]: Is it the goat that eats the shoes?
21 D LEONARD (under his breath): That's the one.
22 D MAMA ROSE [V.O.]: Who's that? A man? Are you seeing a man?
23 D CLAUDETTE: It's a client, Mama.
24 D MAMA ROSE [V.O.]: He sounds fat.
25 D LEONARD: I'm in a very difficult pose.
26 D MAMA ROSE [V.O.]: Claudette, I need you to come home. The faucet is leaking again.
27 D CLAUDETTE: I'll call a plumber.
28 D MAMA ROSE [V.O.]: Plumbers are thieves.
29 D CLAUDETTE: Mama, I love you. I have to teach.
30 D MAMA ROSE [V.O.]: Is the goat singing? I hear a goat singing.
31 A ¶ On cue, Beyonce bleats, triumphant.
32 D CLAUDETTE (to Leonard): She's proud of you.
33 D LEONARD: I'll be sure to thank her.
34 D CLAUDETTE: Goodbye, Mama.
35 A ¶ She hangs up.
36 A Smooths her linen.
37 A Resettles.
38 D CLAUDETTE [CONT'D]: Where were we?
39 D LEONARD: Paying for this.
40 D CLAUDETTE: Right. Warrior One.

### SCENE s01032 | INT. SUGAR MILL - BOILING FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): JETHRO MALLORY, PILAR ESCOBEDO, HENRIK SOLBERG
1 A ¶ A cavernous hall of copper vats, rafters lost in steam.
2 A A table has been dragged to the center, a thick plank on two barrels.
3 A Folding chairs ring it.
4 A Crates of burlap sacks serve as bleachers.
5 A Lanterns hang from hooks.
6 A ¶ JETHRO MALLORY, 40s, shirtless under a leather apron, shoulders like sacks of grain, sits at one side of the table.
7 A Across from him, PILAR ESCOBEDO, 20s, rolled sleeves, braid down her back, calm as a tide pool.
8 A ¶ Between them, HENRIK SOLBERG, 60s, referee, rubs his hands in chalk and sets them on top of theirs.
9 D HENRIK: Elbows on the pads. Grips locked.
10 A ¶ Jethro grips.
11 A Pilar grips.
12 A Their knuckles whiten.
13 D HENRIK [CONT'D]: Ready?
14 D JETHRO: Born ready.
15 D PILAR: Skip the speech.
16 D HENRIK: Go!
17 A ¶ Both tense.
18 A The table groans.
19 A A vein rises on Jethro's neck.
20 A Pilar's jaw clenches.
21 A Neither moves.
22 A ¶ The crowd begins a low chant: Jeth-ro.
23 A Jeth-ro.
24 D PILAR (through teeth): You sweat a lot.
25 D JETHRO: It's a sweaty room.
26 D PILAR: Your wife make that apron?
27 D JETHRO: My mother.
28 D PILAR: She loves you.
29 D JETHRO: Shut up.
30 A ¶ Henrik crouches, eyes on the hands.
31 A Sweat drips from Jethro's nose onto the plank.
32 A ¶ Pilar shifts her weight.
33 A Her free hand grips the table's edge.
34 A Jethro's arm trembles, a small tremor.
35 A Hers does too.
36 A ¶ They breathe together, in, out.
37 D HENRIK: Hold your lines.
38 A ¶ Jethro surges.
39 A His hand pushes hers an inch toward the pad.
40 A The crowd roars.
41 D PILAR (gasping): Not yet.
42 A ¶ She drives back.
43 A His arm straightens.
44 A Equal again.
45 A ¶ Both freeze.
46 A Both stare.
47 A Neither blinks.
48 D JETHRO: You're good.
49 D PILAR: My father taught me. At a mill like this.
50 D JETHRO: Where?
51 D PILAR: Matanzas.
52 D JETHRO: I had a cousin in Matanzas.
53 D PILAR: Everyone does.
54 A ¶ They laugh, tight and brief.
55 A The effort cracks it.
56 A ¶ Jethro lunges again.
57 A The table skids across the floor.
58 A Henrik leaps clear.
59 A Chairs topple.
60 A The crowd scatters back as the barrels shift.
61 A ¶ Pilar twists, wrenches her shoulder, slams the back of his hand toward the pad.
62 A It stops an inch from the wood.
63 A Both grunt.
64 D HENRIK: Hold! Hold! The table!
65 A ¶ They don't hold.
66 A They are locked.
67 A The table tilts.
68 A They tumble together onto the sacks, hands still clasped, wrestling.
69 A ¶ Henrik blows a whistle.
70 A No one hears.
71 D PILAR (rolling): Pad's behind you!
72 D JETHRO: Is not!
73 D HENRIK: It is! It's behind you both!
74 A ¶ They tumble over the barrels, bounce against a vat, freeze.
75 A Steam hisses.
76 A Their joined hands hover above a sack of raw sugar.
77 A Neither willing to break.
78 D PILAR: Truce?
79 D JETHRO: Till dawn.
80 D PILAR: Dawn's fine.
81 A ¶ They let go together.
82 A Both slump on the sacks, panting.
83 D HENRIK (to the crowd): Draw! The match is a draw!
84 A ¶ A cheer, ragged.
85 A Jethro and Pilar lie there staring at the rafters, arms spread, hands shaking.
86 D JETHRO: Again?
87 D PILAR: Tomorrow.
88 D JETHRO: Bring your father.
89 D PILAR: He's dead.
90 D JETHRO: Then bring his arm.
91 A ¶ Pilar smiles, for the first time.
92 A She sits up and reaches for the table.
93 D HENRIK: You people are insane.
94 A ¶ She slams her elbow on the plank.
95 A Jethro hauls himself up and does the same.
96 A The crowd goes silent.
97 D HENRIK [CONT'D] (sighing): Ready?

### SCENE s01115 | EXT. TREEHOUSE IN A SYCAMORE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): WINNIE, AUGUSTINE OKORO-BAKER, KIERAN PRZYBYLSKI-DIOP, LOTTE ABERNATHY-SATO
1 A ¶ A crooked platform nailed into the branches of an old sycamore.
2 A A rope ladder.
3 A A tin sign: NO PARENTS.
4 A Golden light slanting through leaves.
5 A ¶ WINIFRED "WINNIE" OKORO-BAKER, 12, sits cross-legged with a deck of cards.
6 A Her best friend, KIERAN PRZYBYLSKI-DIOP, 12, lies on his back chewing a grass blade.
7 A On the opposite branch, her older brother AUGUSTINE OKORO-BAKER, 16, strums a ukulele with the lazy patience of someone who isn't practicing.
8 A And in the lower fork, with legs dangling, sits a new neighbor, LOTTE ABERNATHY-SATO, 13, clutching a paper bag of licorice and watching all three with wide, uncertain eyes.
9 D WINNIE: Deal me in.
10 D KIERAN: You don't know how to play.
11 D WINNIE: I know enough.
12 D AUGUSTINE (strumming): She cheats.
13 D WINNIE: I do not!
14 D AUGUSTINE: ^She cheats.
15 D KIERAN (laughing): You both said it at the same time.
16 A ¶ Winnie throws a card at Augustine.
17 A It flutters off the platform and spins to the ground.
18 A Lotte leans down to follow its path, then straightens and offers the bag.
19 D LOTTE: Licorice?
20 D WINNIE (brightening): Yes. Black or red?
21 D LOTTE: Both.
22 A ¶ Kieran sits up.
23 A Winnie plucks a red strand.
24 A Augustine, still strumming, leans across to take a black one.
25 A Lotte smiles, relieved.
26 D KIERAN: You're the new one.
27 D LOTTE: Lotte.
28 D AUGUSTINE: Where'd you move from?
29 D LOTTE: Rotterdam.
30 D WINNIE: Where's that?
31 D LOTTE: Far.
32 A ¶ Kieran shuffles the deck.
33 A Winnie takes a card, glances at it, then slides it face down.
34 A Augustine's chords slow into something sweeter.
35 A Lotte tucks her knees up.
36 A A breeze lifts the sycamore leaves.
37 A ¶ The four of them sit in the green quiet.
38 A The ukulele hums.
39 A A card drifts down from somewhere above and lands in Lotte's lap.
40 A She looks at it, then at the others, and grins.

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

### SCENE s01107 | EXT. ROOFTOP WATER TANK - SUBURBAN NIGHT
Detected names (may be incomplete or contain aliases): SADIE KOWALSKI-IBRAHIM, MILO BERGSTROM, RADIO
1 A ¶ A wooden tank on stilts above a flat tar roof.
2 A Cicadas.
3 A A radio plays low from an open window below.
4 A ¶ SADIE KOWALSKI-IBRAHIM, 16, sits on the ledge with her feet dangling.
5 A Her younger cousin MILO BERGSTROM, 13, climbs the last rung of the ladder, breathless.
6 A He freezes when he sees her.
7 A She doesn't turn.
8 A ¶ He climbs onto the roof.
9 A She hears him.
10 A Shifts a few inches to make room.
11 A He sits.
12 A They stare at the neighbors' lit windows.
13 D RADIO [V.O.] (muffled, from below): ...and now, the late-night countdown. Number three this week...
14 A ¶ She hums along.
15 A He taps his heel against the brick.
16 A A long moment passes.
17 A ¶ He offers her a cracker from his pocket.
18 A She takes it.
19 A They chew in the dark.
20 A ¶ She shoves him gently.
21 A He shoves back.
22 A She nearly slides off the ledge; he grabs her sleeve.
23 A They both go still.
24 A Then she laughs, and he lets go, and neither of them says what almost happened.
25 D RADIO [V.O.]: ...and the number one song in the country...
26 A ¶ She stands, brushes crumbs from her knees.
27 A Holds out her hand.
28 A He takes it.
29 A They climb down together, the song swelling behind them.
