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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00044.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00499 | INT. DINNER THEATER - BACKSTAGE - NIGHT
Detected names (may be incomplete or contain aliases): BARNABY CROWE, DIANTHA FOSTER, GWEN, TAKAHASHI
1 A ¶ A cramped corridor behind a painted flat.
2 A Costume racks, a mirror ringed with bulbs, a prop table covered in plastic daggers and one real turkey leg.
3 A Muffled laughter from the audience.
4 A ¶ BARNABY CROWE (50s, leading man, powdered wig, gout slipper) strides in and flings his hat on the table.
5 A Behind him, DIANTHA FOSTER (30s, ingénue, corset half-laced) hurries, hem in her fist.
6 A Last in is STAGE MANAGER GWENDOLYN "GWEN" TAKAHASHI (40s, black clothes, headset, clipboard) who reads from her list as she walks.
7 D BARNABY (to everyone): Who moved my snuffbox?
8 D GWEN: It's on the mantle, Mr. Crowe.
9 D BARNABY: There is no mantle!
10 D GWEN: It's painted.
11 D BARNABY (muttering): I will not play Hamlet opposite a painted mantle.
12 D DIANTHA: Barnaby, it's "Much Ado."
13 D BARNABY: Is it? I thought we'd done that.
14 D GWEN (to the room): Five minutes, people.
15 D DIANTHA (low, to herself): Breathe. Breathe. It's only two hundred people and a soup course.
16 D BARNABY: Darling, you were magnificent in act one.
17 D DIANTHA: I forgot my line.
18 D BARNABY: Nobody noticed.
19 D DIANTHA: You said "well-played" and then walked offstage.
20 D BARNABY: It was a very good pause.
21 D GWEN: Diantha, your cue is the bell. Mr. Crowe, yours is when she starts to cry.
22 D BARNABY: She's crying?
23 D DIANTHA: Not yet.
24 D GWEN: Then enter on the bell.
25 A ¶ A bell tolls, loud, from the stage.
26 A All three freeze, then bolt through the curtain in a flurry of lace and a clatter of turkey bones.

### SCENE s02317 | INT. FAMILY MINIVAN, PARKED OUTSIDE GRANDMA'S HOUSE - DAY
Detected names (may be incomplete or contain aliases): DAD, ROBERT OYELARAN, MOM, WENDY OYELARAN, TEEN, MAYA, LITTLE BROTHER BENNY
1 A ¶ Rain taps the windshield.
2 A The seats are littered with crayons and fast-food bags.
3 A A tiny air freshener swings from the mirror.
4 A ¶ DAD, ROBERT OYELARAN, forty-five, grips the wheel and stares at the house.
5 A MOM, WENDY OYELARAN, forty-three, in the passenger seat, adjusts her hair in the visor mirror.
6 A In the back, TEEN, MAYA, fifteen, scrolls her phone, earbuds in, and LITTLE BROTHER BENNY, seven, hugs a stuffed rabbit.
7 D WENDY (to the car): Okay. Everyone. Smile, be polite, no complaining.
8 D BENNY: Do I have to hug her?
9 D ROBERT: Yes.
10 D BENNY: She smells like cabbage.
11 D WENDY: Benny.
12 D MAYA (pulling an earbud): Can we skip it this year?
13 D ROBERT: No, Maya.
14 D MAYA (muttering): Great.
15 D WENDY: Robert, you remember what we agreed.
16 D ROBERT: No politics.
17 D WENDY: No politics, no complaints about the casserole.
18 D ROBERT: She makes it on purpose.
19 D WENDY: Robert.
20 D ROBERT: Fine.
21 A ¶ The front door of the house opens.
22 A GRANDMA waves from the porch in a pink cardigan.
23 A Everyone in the van freezes, then waves back at once, teeth bared in unison.
24 D BENNY: She's got the casserole.
25 D ROBERT (under his breath): I know.
26 A ¶ The doors open.
27 A They file out into the rain, Maya last, dragging her feet.
28 A She pauses to pocket her earbuds.
29 D MAYA (whispering): Love you guys.
30 D WENDY: What?
31 D MAYA: Nothing. Let's go.

### SCENE s00597 | INT. GREAT HALL OF A SLEEPING KINGDOM - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN RAVENNA, THANE ALDRIC, SEER IMBOLC, BARD FENWICK, DAME DOLORES, LARK
1 A ¶ A long table laid for a feast no one has touched.
2 A Candles burn low.
3 A Every guest is awake, nobody eats.
4 A ¶ QUEEN RAVENNA, 50s, in a gown the color of old wine, sits at the head.
5 A THANE ALDRIC, 60s, broad, scarred, stares into his cup.
6 A SEER IMBOLC, 70s, blind, hands folded on her cane.
7 A BARD FENWICK, 30s, a lute on his knee, strings muted.
8 A DAME DOLORES, 40s, knight-errant, mud on her boots, gloves still on.
9 A LARK, 12, the page, stands behind the queen's chair holding a jug.
10 D RAVENNA: Seer. You may speak.
11 D IMBOLC: I'd rather not.
12 D RAVENNA: That wasn't a request.
13 D IMBOLC: Then I'll say it once. The king sleeps tonight and does not wake.
14 D ALDRIC: The king is already asleep.
15 D IMBOLC: Not that sleep.
16 A ¶ Fenwick's hand slips on the lute.
17 A A string twangs and dies.
18 A Dolores reaches slowly for her sword hilt.
19 A Lark's jug trembles.
20 D RAVENNA (very softly): Who among us?
21 D IMBOLC: The one who pours.
22 A ¶ Every head turns.
23 A Lark goes white.

### SCENE s02105 | INT. GRAND OPERA HOUSE - STAGE - REHEARSAL DAY
Detected names (may be incomplete or contain aliases): ILARIA BONACCORSI, GASTON FEUERSTEIN, NKEM OKONJO-DREW, BRYNMOR LLOYD-PRICE, ADELHEID MARQUARDT
1 A ¶ An empty stage in work light.
2 A Painted flats of a Venetian canal lean against the wall.
3 A A grand piano sits center stage, its lid propped.
4 A High above, a chandelier is wrapped in plastic like a pinata.
5 A ¶ ILARIA BONACCORSI, 40s, the pianist, plays a slow arpeggio.
6 A At the lip of the stage, a conductor, GASTON FEUERSTEIN, 60s, taps his baton on the music stand.
7 A In the wings, a stagehand, NKEM OKONJO-DREW, 30s, adjusts a rope.
8 A In the pit, a violinist, BRYNMOR LLOYD-PRICE, 20s, tunes, and a soprano, ADELHEID MARQUARDT, 30s, in a rehearsal robe, hums to herself in a corner.
9 A ¶ Nobody speaks.
10 A The arpeggio rolls.
11 A Gaston raises an eyebrow, and Ilaria stops, and the silence fills the hall.
12 A Brynmor slips out of the pit and into the wings, and Nkem passes him a coil of rope without looking.
13 A ¶ Above them the chandelier creaks.
14 A Everyone looks up.
15 A The chain is slipping.
16 A A link clicks.
17 A Adelheid steps back from her corner.
18 A Nkem drops the rope.
19 A Ilaria slams the piano lid shut and Gaston dives for the music stand, and all five scramble toward the wings as the chandelier lurches, swings, and hangs, quivering, by a single thread of steel.
20 A ¶ For a moment nobody breathes.
21 A Then Adelheid begins to laugh.

### SCENE s02239 | INT. MIRROR VAULT OF THE DROWNED KING - NIGHT
Detected names (may be incomplete or contain aliases): SORREL, BRIGID
1 A ¶ A cavern of black glass.
2 A Ten thousand mirrors cover walls, floor, ceiling.
3 A Torchlight multiplies into a bonfire of stars.
4 A Every reflection moves a half-second late.
5 A ¶ SORREL, thirties, a thief in a hooded cloak, creeps along a narrow ledge of obsidian.
6 A She clutches a leather satchel.
7 A She stops.
8 A Her reflection stops, then.
9 D SORREL (muttering): Don't look. Don't look.
10 A ¶ She looks.
11 A The reflections grin.
12 D SORREL [CONT'D] (to the vault): I'm only here for the crown! You can keep the rest!
13 A ¶ Silence.
14 A A single mirror cracks, a thin white line.
15 D SORREL [CONT'D] (to herself): Brilliant. Wake the whole place.
16 A ¶ She steps off the ledge onto a dais.
17 A A crown of black pearl rests on a pillow of bone.
18 A She reaches for it.
19 D BRIGID [O.S.]: Don't.
20 A ¶ Sorrel spins.
21 A A figure steps out of a mirror, not around it, out of it, as a swimmer climbs from a pool.
22 A ¶ BRIGID, forties, tall, in a silver surcoat, a long sword in one hand.
23 A Her face is the same as Sorrel's, older, scarred across the brow.
24 D SORREL: Who are you?
25 D BRIGID: You. After you take it.
26 A ¶ They stare at each other.
27 A Torches gutter.
28 D SORREL (to the vault): Is she real?
29 D BRIGID: Don't bother. The vault doesn't answer.
30 D SORREL (muttering): That's the first honest thing I've heard in a week.
31 A ¶ Brigid raises the sword.
32 A Sorrel pulls a short knife.
33 A They circle the dais, each step mirrored a thousand times.
34 D BRIGID: Put the knife down.
35 D SORREL: Put the sword down.
36 D BRIGID: I won't.
37 D SORREL: Then neither will I.
38 A ¶ They lunge together.
39 A Steel rings.
40 A Sorrel ducks, rolls under Brigid's blade.
41 A Brigid whirls and kicks the knife from her grip.
42 A It skitters across the glass.
43 A Both lunge for it.
44 A Both reach it.
45 A Both freeze, hands on the hilt.
46 D BRIGID: Let go.
47 D SORREL: You let go.
48 D BRIGID (quiet): I wore this knife the night I took the crown. It cost me a sister.
49 D SORREL: I don't have a sister.
50 D BRIGID: You will.
51 A ¶ Sorrel's grip loosens.
52 A Brigid's too.
53 A The knife lies between them.
54 D SORREL (to the whole vault): Someone tell me what's happening!
55 A ¶ The mirrors all go dark, one after another, like candles.
56 A Only two torches remain.
57 A In their light the women stand on the dais, panting.
58 D BRIGID: It's the king's last trick. It shows you what you'll become.
59 D SORREL (muttering): Wonderful. A warning with a sword.
60 D BRIGID: Leave the crown. Walk out.
61 D SORREL: And you?
62 D BRIGID: I'll vanish. Like I always do.
63 A ¶ Sorrel looks at the crown.
64 A At Brigid.
65 A At the dark glass.
66 D SORREL (to herself): Fine.
67 A ¶ She steps back from the dais.
68 A Slings her satchel over her shoulder.
69 A Brigid lowers the sword.
70 D BRIGID: Thank you.
71 D SORREL: Don't thank me. I want a better offer next time.
72 A ¶ Brigid smiles, sad, and steps backward into a mirror.
73 A It swallows her.
74 A The crown stays on its bone pillow.
75 A ¶ Sorrel exits along the ledge.
76 A At the cavern's mouth she stops, glances back once.
77 A Her reflection nods.

### SCENE s00306 | INT. EMPTY INDOOR TENNIS COURT - DAWN
Detected names (may be incomplete or contain aliases): OTIS BRAITHWAITE-NKOSI, LEO, AMAECHI-DAHL
1 A ¶ Green carpet.
2 A Sodium lamps coming up.
3 A A basket of balls.
4 A ¶ OTIS BRAITHWAITE-NKOSI (40s, track jacket) feeds balls from the basket.
5 A Across the net, LEONTYNE "LEO" AMAECHI-DAHL (16, racket too big for her) returns them.
6 A Thock.
7 A Thock.
8 A Thock.
9 D OTIS: Again.
10 D LEO: Again.
11 A ¶ They speak at the same time.
12 D OTIS: Reset your feet.
13 D LEO: I'm resetting my feet.
14 D OTIS: Then reset them faster.
15 A ¶ Thock.
16 A She hits wide.
17 A He doesn't flinch.
18 D LEO: Coach.
19 D OTIS: Leo.
20 D LEO: Same time tomorrow?
21 D OTIS: Same time.
22 A ¶ She smiles.
23 A He feeds another ball.

### SCENE s01549 | INT. ANTIQUARIAN BOOKSHOP - UPSTAIRS READING ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): PROFESSOR IMOGEN LOWERY-ACHEBE, PIP, OKONKWO-DAVIES
1 A ¶ Tall shelves on three walls.
2 A A rolling ladder.
3 A Dust turning in a diagonal bar of light.
4 A A single leather armchair with a cracked arm.
5 A On a round table sit a pot of tea and two untouched cups.
6 A ¶ PROFESSOR IMOGEN LOWERY-ACHEBE, 60s, in a tweed skirt and pearl buttons, stands by the window with her back to the room.
7 A A magnifying glass hangs from her neck on a ribbon.
8 A ¶ Behind her, seated at the table, is her former student, DETECTIVE-SERGEANT PHILIPPA "PIP" OKONKWO-DAVIES, 30s, in a damp raincoat.
9 A She has not taken it off.
10 A Her notebook lies closed.
11 D PIP: Thank you for seeing me.
12 D IMOGEN: I almost didn't.
13 D PIP: I know.
14 D IMOGEN: You always asked questions with your hands folded. It was a trick.
15 D PIP: It still is.
16 A ¶ Pip unclasps her hands, deliberately, and lays them flat on the table.
17 A Imogen turns.
18 A Looks at the hands.
19 A Looks at the teapot.
20 D IMOGEN: Shall I pour?
21 D PIP: Please.
22 A ¶ Imogen pours.
23 A The china clinks.
24 A A thin line of steam climbs between them.
25 D IMOGEN: The bookseller. Mr. Fenwick.
26 D PIP: Yes.
27 D IMOGEN: He was found in the cellar.
28 D PIP: Yes.
29 D IMOGEN: With a first folio.
30 D PIP (a pause): How do you know about the folio?
31 D IMOGEN: It was in the newspaper.
32 D PIP: The newspaper didn't mention a folio.
33 A ¶ Imogen sets down the pot.
34 A Carefully.
35 A The spout trembles once, and she steadies it with her other hand.
36 D IMOGEN: The newspaper mentioned a book.
37 D PIP: A book. Yes.
38 D IMOGEN: I assumed.
39 D PIP: You assumed correctly.
40 A ¶ Imogen lowers herself into the armchair, which sighs.
41 A She does not look at the shelves behind her.
42 A Pip does, once, her eye travelling along the spines to a gap at the height of Imogen's shoulder.
43 D PIP [CONT'D]: That's a rare space.
44 D IMOGEN: Books are borrowed.
45 D PIP: By whom?
46 D IMOGEN: By people who ask nicely.
47 D PIP: And did he ask nicely?
48 D IMOGEN: Mr. Fenwick asked in a great many ways.
49 A ¶ Pip lifts her cup.
50 A Does not sip.
51 A Holds it, level, like a measure.
52 D PIP: He wrote a letter to the Society. Three weeks before he died.
53 D IMOGEN: Did he.
54 D PIP: He said a colleague had been selling pages from the folio.
55 D IMOGEN: Did he name the colleague?
56 D PIP: He didn't have to.
57 A ¶ Imogen smooths her skirt.
58 A Her fingers find the magnifying glass on its ribbon and wind the ribbon once around her hand.
59 D IMOGEN: Philippa.
60 D PIP: Professor.
61 D IMOGEN: You were my best student.
62 D PIP: I know.
63 D IMOGEN: I taught you to see.
64 D PIP: You did.
65 D IMOGEN: Then see this. There is nothing in this room that is not what it appears to be.
66 A ¶ Pip sets her cup down.
67 A Reaches into her raincoat.
68 A Draws out a slim glass sleeve, and in it, a single torn page, brown at the edges, in a looping Elizabethan hand.
69 D PIP: Forensics found this in his hand.
70 A ¶ Imogen looks at the page.
71 A Then at the shelf.
72 A Then at the window, where the light has slipped down the wall and is now the colour of tea.
73 D IMOGEN (softly): He did write beautifully.
74 D PIP: Who?
75 D IMOGEN: Shakespeare. I mean Shakespeare.
76 D PIP: I know who you mean.
77 A ¶ They sit, two women and a pot of cooling tea, while the bar of light slides off the table and onto the floor.

### SCENE s00353 | INT. FUNERAL PARLOR SPEAKEASY - 1927 - NIGHT
Detected names (may be incomplete or contain aliases): MAGDA, FOSTER, LENNY, ODETTE, PIANIST, MAN, DIRECTOR, WHITCOMB
1 A ¶ Velvet drapes, casket stands doubling as bars.
2 A A jazz trio plays muted.
3 A ¶ MAGDA, thirties, a bartender, pours gin into teacups.
4 A FOSTER, forties, a bootlegger, counts bills.
5 A LENNY, twenties, his nephew, dozes in a coffin cushion.
6 A ODETTE, twenties, a singer, sips at the piano.
7 A THE PIANIST, sixties, plays on.
8 A ¶ A MAN, fifties, in a black frock coat and a funeral director's pin, steps in from the foyer.
9 D MAGDA: Fosse's here.
10 A ¶ She sets down the bottle.
11 A He surveys the room.
12 A Foster pockets his cash.
13 D DIRECTOR: Evening. I run this establishment.
14 D FOSTER: We've been paying your rent.
15 D DIRECTOR: I'm told that was not rent. I am Mr. Whitcomb.
16 D WHITCOMB: And I'd like my casket stands back.
17 A ¶ Lenny wakes.
18 A He rolls out of the cushion.
19 A Odette stops singing.
20 A The pianist plays one wrong note and stops.

### SCENE s00547 | INT. NIGHT TRAIN "ALBATROSS" - SLEEPER CAR - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR ABEL STROM, MADAME VALENTINE ROUX, HESTER PRYCE, PORTER GILES
1 A ¶ A narrow corridor of polished mahogany and brass fixtures.
2 A Curtains drawn over the windows.
3 A Beyond them, the dark rushes by.
4 A The carriage sways in a long steady pulse.
5 A ¶ INSPECTOR ABEL STROM, 50s, a hat too small for his head, a ticket punch in one hand, walks the corridor slowly, checking doors, listening.
6 A At each cabin he pauses.
7 A At the third he knocks.
8 A ¶ A door opens a crack.
9 A MADAME VALENTINE ROUX, 60s, a silk robe and a cold cream mask, peers out with an eye like a coin.
10 D ROUX: Yes?
11 D STROM: Madame. A disturbance reported. Did you hear anything?
12 D ROUX: I hear the train. I hear my own pulse. I hear a gentleman in the corridor who will not let a woman sleep.
13 D STROM: My apologies. Have you seen anyone pass?
14 A ¶ She considers him.
15 A Behind her, a light flicks on in the next compartment.
16 D ROUX: Only the doctor.
17 D STROM: Which doctor?
18 D ROUX: The one in four.
19 A ¶ She shuts the door.
20 A He moves on.
21 A Cabin four.
22 A He raises his hand to knock, hesitates, listens.
23 A A soft murmur inside, a woman's voice.
24 A He taps.
25 A ¶ The door opens.
26 A DR. HESTER PRYCE, 40s, a black medical bag in one hand and a wet handkerchief in the other, regards him with sleepless composure.
27 D PRYCE: Inspector.
28 D STROM: Doctor. I'm told you were attending someone.
29 D PRYCE: A porter. A faint. Nothing serious.
30 D STROM: Which porter?
31 D PRYCE: The young one. Giles.
32 D STROM: Ah.
33 A ¶ He peers past her shoulder.
34 A The compartment is dim.
35 A A figure lies on the lower berth, motionless under a blanket.
36 A ¶ PORTER GILES, 20s, in a half-buttoned uniform, one hand pressed to his temple, lifts his head and gives a weak, apologetic smile.
37 D GILES: Sorry for the fuss, sir.
38 D STROM: Nothing to apologize for, my boy. Rest.
39 A ¶ He steps back.
40 A Pryce eases the door half closed.
41 A For a moment their eyes hold.
42 A She is calm.
43 A He is polite.
44 A Neither blinks.
45 D STROM [CONT'D]: Doctor, a curious thing. The ticket in your name was bought in Vienna.
46 D PRYCE: It was.
47 D STROM: And yet the conductor reports you boarded in Prague.
48 D PRYCE: He's mistaken.
49 D STROM: He rarely is.
50 A ¶ She smiles.
51 A It is a small, tired smile.
52 D PRYCE: Inspector, would you care for tea?
53 D STROM: I would like the truth, Doctor.
54 D PRYCE: Over tea.
55 A ¶ He thinks.
56 A Nods once.
57 A She opens the door wider.
58 A He enters.
59 A The compartment smells of lavender and iodine.
60 A ¶ On the lower berth, Giles has gone still.
61 A His eyes are open.
62 A He is not looking at the Inspector.
63 A He is looking at Pryce.
64 D STROM (gently): Doctor. Your patient is not breathing.
65 A ¶ Pryce does not turn.
66 D PRYCE: I know.
67 A ¶ She closes the door.
68 A The latch clicks.
69 A In the corridor, Madame Roux's door opens again, an inch, and a single coin-bright eye peers out.
70 A It watches the door of cabin four for a long time.
71 A Then, quietly, it shuts.

### SCENE s02357 | EXT. GHOST TOWN - DEAD FERRY LANDING - DUSK
Detected names (may be incomplete or contain aliases): SHERIFF MORDECAI WELLS, CALISTA REYNOSO, PRESTON GRIGGS, DISPATCH
1 A ¶ A dry riverbed.
2 A A rotting dock with no water beneath it.
3 A Wind in a broken pilot-house.
4 A A weathered sign: LAST CROSSING.
5 A ¶ SHERIFF MORDECAI WELLS, 50s, bone-thin, gray coat.
6 A A tin star gone dull.
7 A He stands at the end of the pier, hat tipped back.
8 A ¶ CALISTA REYNOSO, 20s, a bounty hunter in dusty leathers.
9 A Scarred cheek.
10 A Dual pistols.
11 A She sits on a barrel, legs swinging.
12 A ¶ PRESTON GRIGGS, 40s, in irons, wrists chained, face swollen.
13 A He kneels on the planks.
14 A ¶ A radio set crackles from a saddlebag.
15 D WELLS: You said the river was here.
16 D CALISTA: It was here.
17 D WELLS: Where is it now?
18 D CALISTA: Went to Mexico, I guess.
19 A ¶ Griggs laughs, a raw cough.
20 D GRIGGS: Told you. Told you both.
21 D WELLS: Shut him up.
22 D CALISTA: He's tired.
23 D GRIGGS: Tired. That's the word.
24 A ¶ The radio spits static.
25 A A woman's voice, faint.
26 D DISPATCH [V.O.] (over radio): Sheriff Wells, come in. Sheriff Wells.
27 A ¶ Wells crosses the dock.
28 A Lifts the receiver.
29 D WELLS: This is Wells.
30 D DISPATCH [V.O.] (over radio): Mordecai. The judge says to bring him in alive.
31 D WELLS: Understood.
32 D DISPATCH [V.O.] (over radio): Alive. You hear?
33 D WELLS: I heard.
34 A ¶ He sets the receiver down.
35 A Turns.
36 D CALISTA: Well?
37 D WELLS: Judge wants him breathing.
38 D CALISTA: Judge isn't here.
39 D GRIGGS (smiling): There it is.
40 A ¶ Wells pulls his revolver.
41 A Calista lays a hand on one of hers.
42 A The wind kicks up dust.
43 A A loose plank bangs somewhere.
44 A Nobody moves.
45 D WELLS: We take him in at dawn.
46 D CALISTA: And tonight?
47 D WELLS: We sit.
48 A ¶ He holsters the gun.
49 A Sits on the dock edge, legs over the dry bed.
50 A After a moment, Calista joins him.
51 A Griggs, between them, lowers his head.

### SCENE s00144_0 | INT. AGING CAVE - ALPINE CHEESE DAIRY - NIGHT
Detected names (may be incomplete or contain aliases): ANGELIKA STROBL, DIDI, HOFER, PETRA LUNDQVIST-AGYEMAN, FRAU BERGMANN
1 A ¶ A hand-hewn tunnel, damp and cold.
2 A Shelves of wheels stacked to the ceiling, each the size of a tire, smelling of mold and old milk.
3 A Strings of bare bulbs.
4 A Water drips in a slow metronome.
5 A ¶ Three figures in white coats and hairnets creep between the racks.
6 A ¶ ANGELIKA STROBL, 40s, lean, planner, carries a thermal scanner.
7 A DIETMAR "DIDI" HOFER, 50s, safecracker, wears a headlamp and a toolbelt.
8 A PETRA LUNDQVIST-AGYEMAN, 30s, driver, clutches a walkie.
9 A And the night watchman, FRAU BERGMANN, 60s, somewhere above them, a flashlight in her fist and a radio on her hip, who has not yet noticed anything.
10 A ¶ A bulb flickers.
11 D ANGELIKA (whispering): Aisle nine. Wheel forty.
12 D DIDI: Which wheel?
13 D ANGELIKA: The one with the red seal.
14 A ¶ They fan out.
15 A Didi knocks a wheel.
16 A It rocks.
17 A Petra lunges.
18 A Catches it.
19 A Her biceps shake.
20 D PETRA (through teeth): Careful.
21 D DIDI: Sorry.
22 A ¶ Angelika finds it.
23 A A wheel the size of a wagon, wax-sealed.
24 A She taps.
25 A It rings hollow.
26 D ANGELIKA: Didi.
27 A ¶ He kneels.
28 A Cracks the seal with a pick.
29 A Wax flakes.
30 A Inside: a steel box.
31 D DIDI: Hello, beautiful.
32 D PETRA: It's in the cheese?
33 D ANGELIKA: Forty years. Nobody looks in a wheel.
34 A ¶ Didi lifts the box.
35 A A click.
36 A A light.
37 A ¶ A flashlight beam sweeps the aisle above.
38 D BERGMANN [O.S.] (sharp): Wer ist da?
39 A ¶ Everyone freezes.
40 A Petra mouths a curse.
41 D ANGELIKA (whispering): Night watch.
42 A ¶ The beam comes closer.
43 A Footsteps on the gantry.
44 A A shadow spills between the racks.
45 A ¶ Didi bolts.
46 A Slams into a shelf.
47 A Wheels tumble.
48 A A cascade of cheese thunders down the aisle.
49 A ¶ He drops the box.
50 A Petra yanks him back.
51 A Angelika snatches it mid-air, ducks, rolls through the wreckage.
52 D BERGMANN [O.S., CONT'D]: Halt!
53 A ¶ They scramble.
54 A Cheese everywhere.
55 A The beam sweeps wildly.
56 D PETRA: Go go go!
57 A ¶ All three bolt for the tunnel mouth, slipping on rinds.
58 A Behind them, a landslide of Gruyere pours into the aisle and buries the guard to her ankles.

### SCENE s01798 | INT. OFFICE BREAK ROOM - DAY
Detected names (may be incomplete or contain aliases): DISH SOAP DISPENSER, DEBORAH PIERCE, FELIX NWOSU, SHANTI VENKATARAMAN, KURT BJORKLUND, TEODORA IVANOVA
1 A ¶ Beige.
2 A A microwave with a taped sign: NOT A DISH SOAP DISPENSER.
3 A A fridge covered in passive-aggressive notes.
4 A A cake sits on the table, untouched.
5 A ¶ DEBORAH PIERCE, fifties, hovers behind the cake with a knife.
6 A FELIX NWOSU, twenties, hugs a laptop.
7 A SHANTI VENKATARAMAN, thirties, stands at the coffee machine as if she has been standing there for a decade.
8 A KURT BJORKLUND, forties, leans in the doorway.
9 A And TEODORA IVANOVA, sixty, the birthday girl, sits at the table, smiling with the stiffness of a hostage.
10 D DEBORAH: Okay, everybody! Cake time!
11 D FELIX (to himself): Cake time.
12 D SHANTI (to Deborah): I didn't know it was Teodora's birthday.
13 D DEBORAH: It's not. It's her retirement.
14 D TEODORA: It's both.
15 D KURT: It's a hybrid.
16 D DEBORAH: Teodora, how many years?
17 D TEODORA: Thirty-one.
18 D FELIX: Thirty-one?
19 D SHANTI: I've been here eleven and I've never seen you.
20 D TEODORA: I sit by the copier.
21 D KURT (to the room): Does anyone have a plate?
22 D DEBORAH: They're in the cupboard.
23 D FELIX: They're not in the cupboard.
24 D SHANTI: They're by the sink.
25 D KURT: They're in the drawer.
26 A ¶ Everyone starts at once.
27 A Deborah opens the cupboard, Felix checks the sink, Shanti pulls the drawer, Kurt says "I'll look in the fridge" and does not move.
28 A Teodora watches from the table, hands folded.
29 D TEODORA: It's all right. I don't need a plate.
30 D DEBORAH: Of course you do.
31 D TEODORA: I brought my own.
32 A ¶ She takes a small blue enamel plate from her bag and sets it on the table.
33 A The others stop.
34 A Nobody says a word.
35 D FELIX (muttering): Thirty-one years.
36 D DEBORAH (to the group): Let's sing!
37 A ¶ They sing, ragged and sparse.
38 A Teodora lifts her plate with both hands as if receiving a sacrament.
39 A Deborah cuts the cake, hands her the first slice, and Teodora eats it slowly, looking at none of them.
40 D KURT (muttering): Good cake.
41 D SHANTI (softly, to Teodora): Thank you.
42 D TEODORA: For what?
43 D SHANTI: I don't know.
44 A ¶ Teodora nods, as if that were exactly right, and takes another bite.

### SCENE s02140 | INT. ROLLERAMA SKATE CENTER - MAIN FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): DANI MORALES, INTERCOM, KALLIS
1 A ¶ 1986.
2 A After closing.
3 A The disco ball turns slowly, scattering coins of light on an empty maple floor.
4 A Speakers hiss.
5 A Carpeted benches.
6 A Hundreds of rental skates racked on the wall like a choir.
7 A ¶ DANI MORALES, 16, Walkman, jean jacket with a band patch, sits on the rail lacing a pair of beat-up quads.
8 A She breathes carefully, like someone who has rehearsed this.
9 D INTERCOM [O.S.] (crackling): Dani? Is that you out there?
10 D DANI (startled): It's me, Mr. Kallis.
11 D INTERCOM [O.S.]: I told you the rink closes at eleven.
12 D DANI: I know. I'm just... finishing.
13 D INTERCOM [O.S.]: Finishing what?
14 D DANI: My last lap.
15 A ¶ A long pause on the intercom.
16 A A click.
17 A A heavy door opens somewhere.
18 A Footsteps cross the carpet.
19 A ¶ MR. KALLIS, 60s, the owner, cardigan, keys on a retractor, thick glasses, stands at the edge of the floor.
20 A He holds a mop like a staff and a Styrofoam cup of cold coffee.
21 D KALLIS: Your last lap.
22 D DANI: Yes, sir.
23 D KALLIS: Your mother called.
24 D DANI: Of course she did.
25 D KALLIS: She thought you might be here.
26 D DANI: I'm always here.
27 D KALLIS: Yes. That's what worries her.
28 A ¶ Dani stands on her skates, wobbles, finds the balance.
29 A She pushes off the rail, glides ten feet, and stops.
30 D DANI: Mr. Kallis, can I ask you something?
31 D KALLIS: It's your last lap. Ask.
32 D DANI: Do you think it matters? That I'm leaving?
33 D KALLIS: Leaving the rink?
34 D DANI: Leaving town.
35 A ¶ Kallis leans the mop on the rail.
36 A Takes off his glasses.
37 A Cleans them on his cardigan.
38 D KALLIS: Dani, I opened this rink in 1971. Forty kids skated here that first night. Do you know how many of them still live in this town?
39 D DANI: How many?
40 D KALLIS: Two. One of them is the mailman.
41 D DANI: That's sad.
42 D KALLIS: No. It's what a rink is. A place you leave from.
43 A ¶ Dani considers that.
44 A She rolls closer to him, slow and uncertain.
45 D DANI: My dad skated here.
46 D KALLIS: He did. He was terrible.
47 D DANI: He told me he was great.
48 D KALLIS: He told everyone he was great. That was the whole trouble.
49 A ¶ Dani laughs, a short sharp surprise.
50 A Then her face crumples.
51 A She wipes her nose on her sleeve.
52 D DANI: I don't want to go.
53 D KALLIS: Yes you do.
54 D DANI: How do you know?
55 D KALLIS: Because you came to say goodbye to the floor, not to me.
56 A ¶ Dani glances at the floor.
57 A At the lights spinning across the maple.
58 D DANI: It's a really good floor.
59 D KALLIS: I refinish it every June.
60 D DANI: I know. I helped you.
61 D KALLIS: So you did.
62 A ¶ He crosses to the sound booth, flips a switch.
63 A A slow song starts.
64 A Something with synthesizers and a long, aching bridge.
65 A Dani looks up.
66 D DANI: Mr. Kallis. Is this the couples skate?
67 D KALLIS: It's your last lap. I don't make the rules.
68 A ¶ Dani lets out a small, wet laugh and starts to skate.
69 A Slowly at first, then with a long glide that carries her all the way around the rink.
70 A Kallis, by the booth, turns off the overhead lights.
71 A Only the disco ball remains.
72 D DANI (calling, passing): Mr. Kallis, am I good?
73 D KALLIS: You are terrible.
74 D DANI (still skating, grinning): Just like my dad.
75 D KALLIS: Better.
76 A ¶ She comes around again.
77 A This time he steps onto the floor in his loafers, arms out, as if to catch her.
78 A She skates past, close enough to touch.
79 A Their fingertips brush.
80 A ¶ The song swells.
81 A The ball spins.
82 A The old man stays at center floor as the girl circles him, once, twice, a third time, and then drifts toward the exit, where the door is propped open on the cold bright night.
83 D DANI [CONT'D]: Bye, Mr. Kallis.
84 D KALLIS: Bye, Dani.
85 A ¶ She doesn't look back.
86 A The song fades.
87 A The disco ball keeps turning.

### SCENE s01542 | INT. DERELICT MINING BARGE - ENGINE DECK - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ISABELLA RUSSO-ADEBAYO, FLORIAN KIPKEMBOI, VOICE, DOLLY, ACHEBE-LINDGREN
1 A ¶ Stillness.
2 A Pipes sweat.
3 A Emergency strips glow amber along the catwalk.
4 A Nothing moves.
5 A ¶ CAPTAIN ISABELLA RUSSO-ADEBAYO, 50s, rests a hand on a cold turbine casing.
6 A Her breath hangs in front of her.
7 A Her crewmate FLORIAN KIPKEMBOI, 30s, crouches beside a floor hatch and inspects the seal with a torch.
8 D FLORIAN: Pressure's holding.
9 D ISABELLA: It shouldn't be.
10 D FLORIAN: The ship's been dead six years.
11 D ISABELLA: Dead ships don't hold pressure.
12 A ¶ Florian shrugs.
13 A Taps the hatch.
14 A A hollow echo rolls out through the deck.
15 D VOICE [O.S.] (over the intercom, soft): Welcome aboard.
16 A ¶ Isabella snaps her head around.
17 A Florian leaps to his feet and aims the torch at a speaker grille on the bulkhead.
18 D ISABELLA: Who's that?
19 D VOICE [O.S.] (warm): I am the barge. I have waited.
20 D FLORIAN: It's a recording.
21 D ISABELLA: It answered me.
22 D VOICE [O.S.] (over the intercom): Floor hatch, please. Do not open it.
23 A ¶ Florian is already kneeling, fingers on the latch.
24 A Isabella lunges for his collar, pulls him back, and the two of them tumble against the rail as the hatch springs open on its own and a ladder drops out of the dark.
25 A ¶ A figure climbs up.
26 A Slowly.
27 A First a hand, then a shoulder, then a head wrapped in a rag of silver foil.
28 A COMPUTER TECHNICIAN DOLORES "DOLLY" ACHEBE-LINDGREN, 60s, in a patched cardigan and welding goggles, hauls herself onto the deck, wipes her palms, and surveys the two visitors with the air of a landlady inspecting a late rent.
29 D DOLLY: You're early.
30 D ISABELLA: Early for what?
31 D DOLLY: The inspection.
32 D FLORIAN: We're not inspectors.
33 D DOLLY: Then you're squatters. Worse.
34 A ¶ She waves a spanner at them.
35 A Then at the speaker grille.
36 D DOLLY [CONT'D] (to the grille): Barge. Stand down.
37 D VOICE [O.S.] (sulking): I was being hospitable.
38 D DOLLY: You were being creepy.
39 A ¶ Isabella looks at Florian.
40 A Florian looks at Isabella.
41 A Dolly pushes her goggles onto her forehead and her eyes, tired and amused, settle on each in turn.
42 D DOLLY [CONT'D]: Six years I've been down in the bilge, keeping this old girl company. You two are the first living souls through that hatch.
43 D ISABELLA: And the barge?
44 D DOLLY: Is lonely. Mind your manners.
45 A ¶ Florian lowers the torch.
46 A Isabella lets out a slow breath.
47 D ISABELLA: Is there tea?
48 D DOLLY: There's something called tea.
49 A ¶ She turns and climbs down the ladder, spanner swinging.
50 A Florian follows.
51 A After a moment, Isabella does too, and the hatch settles shut above them with a soft pneumatic sigh.

### SCENE s02338 | INT. PET CEMETERY - GIFT SHOP - DAY
Detected names (may be incomplete or contain aliases): FENELLA ABERNATHY, TOBY QUINN, TRACKSUIT MAN, TRACKSUIT, PRUITT
1 A ¶ A cramped shop inside a converted barn.
2 A Shelves of tiny urns, plush angel wings, paw-print stepping stones.
3 A A cash register shaped like a bone.
4 A Soft harp music drifts from a speaker.
5 A ¶ FENELLA ABERNATHY, 50s, in a lavender smock, arranges a display of memorial candles.
6 A She hums with the harp.
7 A ¶ Behind the counter, TOBY QUINN, 20s, scrolls on his phone, a name tag reading TOBY (ASK ME ABOUT GRIEF).
8 A ¶ The door jingles.
9 A A MAN IN A TRACKSUIT, 40s, sunglasses on indoors, steps in carrying a shoebox.
10 D TRACKSUIT MAN: Hi. I'd like to bury a hamster.
11 D FENELLA (warmly): Oh. I'm so sorry for your loss.
12 D TRACKSUIT MAN: It's not a loss. It's a business decision.
13 A ¶ Fenella tilts her head.
14 A Toby sets his phone down.
15 D TOBY: What kind of hamster?
16 D TRACKSUIT MAN: The kind that owes me money.
17 A ¶ Silence.
18 A The harp plays on.
19 D FENELLA: Plots start at three hundred dollars. For rodents, two hundred.
20 D TRACKSUIT MAN: Does that include a marker?
21 D FENELLA: Marker is extra.
22 D TRACKSUIT MAN: What does it say?
23 D TOBY: Whatever you want. "Beloved companion." "In loving memory."
24 D TRACKSUIT MAN: Can it say "Dead"?
25 D FENELLA: We would have to run that by Mr. Pruitt.
26 A ¶ A phone on the wall rings.
27 A Fenella answers it.
28 D FENELLA [CONT'D] (into phone): Rosewood Rest, this is Fenella.
29 D PRUITT [O.S.] (over the phone, a gravelly voice): Fenella, it's Pruitt. Is someone trying to bury a hamster?
30 D FENELLA: How did you know?
31 D PRUITT [O.S.]: It's the third this week.
32 D FENELLA: Are you quite sure it's a hamster?
33 D PRUITT [O.S.]: I have never been sure.
34 A ¶ Fenella covers the mouthpiece.
35 A Whispers to Toby.
36 D FENELLA [CONT'D] (whispering): Mr. Pruitt says it's the third.
37 D TOBY (whispering): Of what?
38 D FENELLA (whispering): Of the week.
39 A ¶ The Tracksuit Man shifts the shoebox from one arm to the other.
40 A It makes a small rattle.
41 D TRACKSUIT MAN: Is there a problem?
42 D TOBY: No problem, sir. Fenella, the phone.
43 D FENELLA (into phone): Mr. Pruitt, I'll call you back.
44 A ¶ She hangs up.
45 D TRACKSUIT MAN: Do you take cash?
46 D FENELLA: We take cash.
47 D TOBY: We take cash.
48 D TRACKSUIT MAN: Good. Because I'd like to pay in advance. For all of them.
49 A ¶ He sets the shoebox on the counter.
50 A Opens the lid a crack.
51 A Fenella peeks inside.
52 A Her smile freezes.
53 A Toby leans in.
54 D TOBY [CONT'D]: That's not a hamster.
55 D TRACKSUIT MAN: I told you. Business decision.
56 D FENELLA (very calmly): Toby. Lock the door.
57 A ¶ Toby locks the door.
58 A The harp plays on.
59 D TRACKSUIT MAN (removing his sunglasses): Now. Tell me about your grief counseling.
60 A ¶ Fenella and Toby exchange a long look.
61 D PRUITT [O.S.] (through the wall speaker, faint): Is everything all right in there?
62 D FENELLA (brightly, to the speaker): Perfectly fine, Mr. Pruitt!
63 D TOBY (to the Tracksuit Man): Sir, would you like a candle?
64 A ¶ The man picks one up.
65 A Smells it.
66 D TRACKSUIT MAN: Does this one come in lavender?
67 D FENELLA: It comes in lavender.
68 D TRACKSUIT MAN: Then I'll take it.
69 A ¶ He sets down a wad of bills.
70 A Fenella counts them with trembling fingers.
71 A Toby stares at the box.
72 A The harp swells.
73 A ¶ Slowly, Fenella slides the box off the counter and into a drawer, and shuts it as if closing a secret.

### SCENE s01721_1 | INT. CABLE CAR - CONTINUOUS
Detected names (may be incomplete or contain aliases): HOLLIS BRANNIGAN, INGRID SOLVANG, TOMASZ KRAWIEC, KEIKO ARAI, DARA NWOSU, RUFUS
1 A ¶ HOLLIS BRANNIGAN (50s, park ranger, weathered face, steady hands) sits by the door with a thermos.
2 A He pours a cup and passes it along.
3 A INGRID SOLVANG (30s, climber, rope burns on her palms) takes it and smiles.
4 A She says nothing.
5 A ¶ Beside her, TOMASZ KRAWIEC (40s, heavy coat, camera around his neck) photographs the gorge.
6 A His hands shake.
7 A KEIKO ARAI (20s, student, headphones around her neck) leans against the window, eyes closed.
8 A DARA NWOSU (30s, nurse, practical sneakers) checks a child's mitten, then pockets it.
9 D HOLLIS: Power's out on the whole line. They'll winch us by dark.
10 D TOMASZ: By dark? That's six hours.
11 D HOLLIS: Closer to four.
12 A ¶ He glances at the roof hatch.
13 A Nobody else notices.
14 D DARA: You keep looking up.
15 D HOLLIS: Habit.
16 A ¶ She studies him.
17 A He drinks his coffee.
18 A ¶ The radio on his belt crackles.
19 A Everyone looks at it.
20 D RUFUS [V.O.] (over radio): Station to car four. Hollis, you read me?
21 A ¶ Hollis thumbs the key.
22 D HOLLIS: Loud and clear, Rufus. What's the word?
23 D RUFUS [V.O.] (over radio): Don't let anybody open the hatch.
24 A ¶ Silence.
25 A Tomasz lowers his camera.
26 A Keiko opens her eyes.
27 D KEIKO: Why would he say that?
28 D RUFUS [V.O.] (over radio): Because it isn't the wind, Hollis. Check the roof. Count the weight.
29 A ¶ Hollis stands.
30 A The car dips, slow and heavy, toward the back.
31 A Ingrid grips the rail.
32 A Dara moves in front of Keiko.
33 A Tomasz backs away until he hits the glass.
34 A ¶ Overhead, something shifts.
35 A A pause.
36 A Then three soft taps on the hatch, polite as a neighbor's.
37 D TOMASZ (whispering): I count five of us.
38 D DARA: There are five of us.
39 A ¶ The taps come again.
40 A From underneath the floor.

### SCENE s00285 | INT. DRIVE-IN THEATER PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): DOCTOR MARGUERITE OYELARAN-STACK, PADDY, GALLAGHER-NWOSU, SHERIFF HOLCOMB JABLONSKI, JUNIPER PARK-MBEKI, SAUL, ODETTE ABERNATHY-VOSS, MRS. ABERNATHY
1 A ¶ A cramped concrete box above the snack bar.
2 A Two projectors, dusty.
3 A A shelf of film cans.
4 A One small window overlooking a lot of weeds and a blank screen leaning in the dark.
5 A ¶ Six people crowd the booth.
6 A Rain drums the roof.
7 A A lantern sits on an overturned can, throwing their shadows huge.
8 A ¶ DOCTOR MARGUERITE OYELARAN-STACK (50s, medical bag, cardigan) kneels by a figure lying on the floor under a coat.
9 A ¶ The coat covers the face of PATRICK "PADDY" GALLAGHER-NWOSU (30s, projectionist), who is not moving.
10 A ¶ SHERIFF HOLCOMB JABLONSKI (60s, rain slicker, flashlight) stands at the door, back to the wall, watching the stairs.
11 A ¶ TWO TEENAGERS huddle by the window.
12 A They are JUNIPER PARK-MBEKI (16, letterman jacket) and her brother SAUL (17, headphones around his neck, shaking).
13 A ¶ By the film shelf, an old woman, MRS. ODETTE ABERNATHY-VOSS (70s, shawl, a thermos clutched like a talisman).
14 D MARGUERITE: He's gone.
15 D SAUL: He can't be.
16 D JUNIPER: Saul, don't.
17 D MRS. ABERNATHY: He was fine at the second reel.
18 D HOLCOMB: Everybody quiet.
19 A ¶ They fall quiet.
20 A Rain.
21 A And below the rain, a slow scrape on the stairs.
22 A Something dragging.
23 D SAUL: That's him.
24 D MARGUERITE: He's right there, Saul.
25 D SAUL: Then who's on the stairs?
26 D JUNIPER: Oh God.
27 D MRS. ABERNATHY: Don't say His name. Not in here.
28 D HOLCOMB: Lock the door.
29 D JUNIPER: There's no lock!
30 D SAUL: Use the can! Use a film can!
31 D MARGUERITE: Hold on, hold on, everyone--
32 D HOLCOMB (over her): Get back from the door!
33 D SAUL (over him): It's coming up!
34 D JUNIPER (over both): Saul, shut UP!
35 D MRS. ABERNATHY (over everyone): It wants the projector!
36 A ¶ They all stop.
37 A Look at her.
38 D MRS. ABERNATHY [CONT'D] (quietly): It always wants the projector.
39 A ¶ The scrape reaches the top of the stairs.
40 A Stops.
41 A The lantern flame leans toward the door, as if drawn.
42 D HOLCOMB (muttering): Nothing there. Nothing there.
43 A ¶ Something knocks.
44 A Three times.
45 A Soft.
46 A Almost polite.
47 D SAUL: Don't open it.
48 D MARGUERITE: Nobody's opening it.
49 A ¶ The door handle turns.
50 D JUNIPER (whispering): It's locked, right? Tell me it's locked.
51 D HOLCOMB: There's no lock, I said!
52 A ¶ The door swings in.
53 A Empty landing.
54 A Wet footprints on the concrete, leading in.
55 A ¶ The footprints lead to Paddy's body.
56 A ¶ The coat slides slowly off his face.
57 D MARGUERITE (to herself): No pulse. I checked. I checked.
58 A ¶ Paddy's eyes open.
59 A White.
60 A Wet.
61 A He looks at the projectors.
62 D PADDY (a rasp): Roll it.
63 A ¶ Every projector in the booth clatters to life by itself.
64 A Light erupts against the blank screen outside, and a figure of the sheriff, thirty feet tall, begins to move across it.
65 A ¶ Holcomb looks over his shoulder at the window.
66 A At himself on the screen.
67 A He raises his flashlight.
68 D HOLCOMB (barely): That's not me.
69 A ¶ On the screen, the giant Holcomb turns and looks into the booth.

### SCENE s00928 | INT. MUNICIPAL CLOCK TOWER, MECHANISM ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SPARROW, OKONKWO-REID, PATSY, VELLACOTT
1 A ¶ Brass wheels the size of wagon tires turn in the dark, each tooth polished by a century of oil.
2 A A catwalk skirts the gears.
3 A Below, behind a steel grate, the vault of the Merchants' Exchange sleeps.
4 A ¶ SILAS "SPARROW" OKONKWO-REID (40s, silver mustache, gloves the color of old cream) works a hand drill into the vault grate with the patience of a watchman.
5 A Beside him, a canvas roll of tools.
6 A Behind him, the great pendulum swings.
7 D SPARROW (to the gears): Three and a half minutes, old girl. Don't fail me now.
8 A ¶ The drill bites through.
9 A He blows the dust away and lifts the grate.
10 A He smiles.
11 A ¶ Footsteps on the stair.
12 A Quick, light.
13 A Sparrow freezes, drops the drill, and slides a hand toward his coat.
14 A ¶ PATRICIA "PATSY" VELLACOTT (30s, bobbed wig, a pearl-handled revolver at her hip) appears on the landing, unhurried, and gives him a small wave.
15 D SPARROW [CONT'D]: Patsy! You were meant to be at the bank.
16 D PATSY: The bank was dull, Sparrow. You were slowing.
17 D SPARROW: I'm precise. It is a different thing.
18 D PATSY: The watchman makes his round in four minutes.
19 D SPARROW: Then we have three and a half.
20 A ¶ She crouches beside the open grate and peers into the dark.
21 D PATSY: Sparrow, you beautiful old crook.
22 D SPARROW: Flattery will cost you ten percent.
23 A ¶ The pendulum swings.
24 A The great clock begins to chime midnight, deafening in the cramped room.
25 A They freeze.
26 D PATSY (shouting over it): That's not on the schedule!
27 D SPARROW (shouting back): Nothing is on the schedule, Patsy!
28 A ¶ Below, in the vault, a light snaps on.
29 A A heavy door opens.
30 A Boots.
31 D PATSY: Sparrow, tell me that's the watchman.
32 D SPARROW: It's the watchman.
33 D PATSY: You're lying.
34 D SPARROW: Yes.
35 A ¶ She draws the pearl-handled revolver at last, grinning like a girl at a fair.
36 D PATSY: Ten percent off the top, then.
37 D SPARROW: Naturally. Run.

### SCENE s01325 | INT. WRESTLING WEIGH-IN SAUNA - PRE-DAWN
Detected names (may be incomplete or contain aliases): KWAME ASANTE, SOLVEIG HAUG
1 A ¶ Cedar benches.
2 A A single bulb.
3 A Steam hangs thick enough to hold a handprint.
4 A ¶ KWAME ASANTE, 20s, towel over his head, sits hunched, elbows on knees.
5 A SOLVEIG HAUG, 40s, his cornerman, perches across from him with a digital scale in her lap.
6 A Neither looks up.
7 D KWAME: What's it say?
8 D SOLVEIG: Hundred and fifty-four point eight.
9 D KWAME: Limit's one-fifty-four.
10 D SOLVEIG: I can read, Kwame.
11 D KWAME: Then it's four-tenths of a pound.
12 D SOLVEIG: It's four-tenths of a pound.
13 D KWAME: Your mother's in the stands today.
14 D SOLVEIG: Don't.
15 D KWAME: I'm only saying.
16 D SOLVEIG: Sweat.
17 D KWAME: Four more minutes?
18 D SOLVEIG: Six.
19 D KWAME: You said four.
20 D SOLVEIG: I say what the scale says.
21 D KWAME: Last time, you said the scale lied.
22 D SOLVEIG: Last time, you ate a banana.
23 D KWAME: It was a small banana.
24 D SOLVEIG: It was a banana, Kwame.
25 D KWAME: Everybody's gonna look at me when I step up. All of them.
26 D SOLVEIG: They look at everybody.
27 D KWAME: You're not scared?
28 D SOLVEIG: I'm warm.
29 D KWAME: That's not an answer.
30 D SOLVEIG: It's the only one I've got at five a.m.
31 D KWAME: Give me the scale.
32 D SOLVEIG: Not yet.
33 D KWAME: Solveig.
34 D SOLVEIG: Four minutes. Then I give it to you.
35 D KWAME: You said six.
36 D SOLVEIG: Then six.
37 A ¶ He pulls the towel lower.
38 A She sets the scale on the bench between them and wipes her palm on her knee.
39 A Steam rolls over them both.

### SCENE s01332 | INT. FIELD KITCHEN IN A RUINED OPERA HOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CAPTAIN ANNELIES DE VRIES, BEL, CORPORAL EZRA PRYCE, PRIVATE LUCIEN BEAUMONT, SUNDARAM, WRÓBEL
1 A ¶ Plaster cherubs on the ceiling, dust on the velvet seats.
2 A In the orchestra pit, a canvas-covered stove ticks and hisses.
3 A A gaping hole in the roof lets a shaft of watery sunlight fall onto the stage, where a dozen mess tins steam in a row.
4 A ¶ CAPTAIN ANNELIES DE VRIES, 40s, reading glasses pushed up into gray-blond hair, leans on a conductor's stand with a ledger.
5 A SERGEANT IGNACY WRÓBEL, 50s, thick mustache, stirs a vat of barley soup with an oar-length spoon.
6 A CORPORAL EZRA PRYCE, 20s, peels potatoes on the lip of the stage with excruciating care.
7 A PRIVATE LUCIEN BEAUMONT, 19, sits in the first row with a rifle across his knees and a tin of cigarettes he is not allowed to open.
8 A PRIVATE "DOC" SUNDARAM, 30s, a medic with a faded red cross on his sleeve, picks his way down the aisle holding a crate of tinned peaches.
9 A ¶ The distant guns thud, soft as a bass drum in another building.
10 A Nobody reacts.
11 D DE VRIES (to the room): Mess in ten minutes. Tins out, men. Boots off the seats.
12 A ¶ Beaumont lowers his boots.
13 A Pryce nods without looking up.
14 A Wróbel taps the spoon on the rim of the vat, the rhythm of a conductor calling an overture.
15 D WRÓBEL (to Pryce): Thinner, Corporal. That peel is thick enough to roof a barn.
16 D PRYCE: Sergeant, the potatoes are rotten.
17 D WRÓBEL: Then peel the rotten out of them.
18 A ¶ Doc Sundaram sets the crate on the stage, pries off a lid with his thumbnail, lifts a peach out, and sniffs it.
19 A He glances at the captain, shrugs, and eats a piece with his fingers while Beaumont watches with open longing and Pryce holds out a hand until Doc drops a slice into it, and the sergeant pretends not to see any of it, stirring a little harder.
20 D SUNDARAM (muttering): Best thing I've eaten since Naples.
21 D DE VRIES: Doc, you'll share that with the ward.
22 D SUNDARAM: Always, Captain.
23 A ¶ She makes a mark in her ledger.
24 A A flake of plaster drifts down from the ceiling and lands on the page.
25 A She blows it away.
26 D BEAUMONT: Captain, is it true there's a piano under the stage?
27 D DE VRIES: There is.
28 D BEAUMONT: Does anyone play?
29 D DE VRIES: Not since the third.
30 D WRÓBEL (to the soup): I played in Kraków once. Badly.
31 D PRYCE: You, Sergeant?
32 D WRÓBEL: Everyone plays badly in Kraków. It is the national style.
33 A ¶ Pryce grins into his peel.
34 A Beaumont laughs, then covers his mouth as if it were illegal.
35 A Somewhere far away a shell lands, long and low.
36 A The chandelier overhead shivers, then stills.
37 D DE VRIES (to the room): Steady. That was ours.
38 D SUNDARAM (muttering): Always theirs when it's close.
39 D WRÓBEL: Tins! Line up. If you can't hold a tin, hold a spoon.
40 A ¶ They shuffle onto the stage, one after another, and form a ragged line in the weak sun.
41 A Wróbel ladles.
42 A Steam rises from each tin into the beam of light, and for a moment the whole ruined theater looks like a painting of a feast.
43 D PRYCE (quietly): Captain, what do we do when it's over?
44 D DE VRIES: Eat.
45 D PRYCE: And after that?
46 D DE VRIES: After that, Corporal, we peel more potatoes.

### SCENE s02488 | EXT. RIVER OF ASH - FERRY - TWILIGHT
Detected names (may be incomplete or contain aliases): IXARA, BRUM
1 A ¶ A black skiff drifts on slow grey water.
2 A Pale ash falls like snow.
3 A ¶ IXARA, 30s, ferrywoman, silver-white hair, poles in silence.
4 A BRUM, 50s, a traveler in a cloak, sits upright with a lantern at his feet.
5 D IXARA: Where to?
6 D BRUM: The far shore.
7 D IXARA: Everyone says the far shore.
8 D BRUM: Everyone's headed there.
9 D IXARA: Not everyone has the fare.
10 D BRUM: I have the fare.
11 D IXARA: What is it?
12 D BRUM: A name.
13 D IXARA: Whose?
14 D BRUM: Yours.
15 D IXARA (carefully): Mine's not for sale.
16 D BRUM: It's not for sale. It's for the toll. You told it to the last passenger, and he told it to me. You have been Ixara for nine hundred years. Before that you were someone else.
17 D IXARA: Hush.
18 D BRUM: They had a name for you in the old tongue. I have it here.
19 D IXARA: Stop.
20 D IXARA (together): Do not speak it.
21 D BRUM: I'm going to speak it.
22 A ¶ Ash thickens.
23 A The lantern gutters.

### SCENE s02001 | INT. LISTENING POST, CHALK TUNNEL UNDER A COASTAL RIDGE - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ELSPETH MORRIGAN-ADEWALE, LIEUTENANT BASTIAN OKOYE-LINDGREN, GUS, PELLETIER-ONUOHA, COMMANDER
1 A ¶ A narrow chalk-white tunnel shored with timber.
2 A Hurricane lamps hang from nails.
3 A At a plank table, a radio set glows green, headphones draped over its dial.
4 A The sea is a dull pulse in the rock.
5 A ¶ CAPTAIN ELSPETH MORRIGAN-ADEWALE (40s, wool greatcoat, tin mug between both palms) sits with her back to the wall, eyes on the radio.
6 A Opposite her, a field cot, and on it LIEUTENANT BASTIAN OKOYE-LINDGREN (20s, collar open, a letter half-written on his knee).
7 A A third man, SERGEANT AUGUSTIN "GUS" PELLETIER-ONUOHA (30s, signal corps, headphones on), is bent over the set with a pencil.
8 A ¶ For an hour nothing has come over the wire.
9 A The three of them have the look of people who have stopped expecting it to.
10 D ELSPETH: Gus, anything?
11 D GUS: Static, ma'am.
12 D ELSPETH: Same static as before?
13 D GUS: Same. Pretty one.
14 D BASTIAN: Pretty static. I'll tell Mother.
15 D ELSPETH: Lieutenant, the letter.
16 D BASTIAN: Captain?
17 D ELSPETH: Don't write that last page until morning.
18 A ¶ He looks at her.
19 A Folds the page once, and tucks it into his breast pocket with ceremony.
20 D BASTIAN: Yes, ma'am.
21 A ¶ The radio gives a click.
22 A A long, dry hiss.
23 A Gus freezes, one finger raised.
24 A Elspeth sets down her mug without making a sound.
25 D COMMANDER [V.O.] (through the headphones, loud enough to leak): Hawk Nest, Hawk Nest, this is Tower. Do you read?
26 D GUS (into mic): Tower, Hawk Nest. Loud and clear.
27 D COMMANDER [V.O.]: Hawk Nest, stand by for orders.
28 D GUS (to Elspeth): Orders, ma'am.
29 D ELSPETH: I heard.
30 A ¶ She stands, takes the headphones from Gus, and settles them on her ears.
31 D ELSPETH [CONT'D] (into mic): Tower, Hawk Nest. Captain Morrigan-Adewale speaking.
32 D COMMANDER [V.O.]: Captain, the ridge is to be vacated by oh-four-hundred.
33 D ELSPETH (a beat): Repeat, Tower?
34 D COMMANDER [V.O.]: Vacate by oh-four-hundred. Demolition charges on the tunnel mouth. Acknowledge.
35 A ¶ Silence.
36 A Gus looks at Bastian.
37 A Bastian looks at Elspeth.
38 D ELSPETH (into mic): Tower, we have a signal watch of seven hours remaining.
39 D COMMANDER [V.O.]: Captain, the watch is cancelled. The enemy has taken the eastern shore.
40 D BASTIAN (whispering): But it's calm.
41 D GUS (whispering): Too calm.
42 D ELSPETH (into mic): Understood, Tower. Hawk Nest will withdraw.
43 A ¶ She pulls the headphones off.
44 A The tunnel is quiet.
45 A The sea thumps against the cliff, faint, constant.
46 D ELSPETH [CONT'D] (to the room): Gentlemen. Pack the set. Leave the tin.
47 D GUS: Ma'am, the tin has the codebooks.
48 D ELSPETH: Then burn the codebooks first.
49 D BASTIAN: And the letters?
50 D ELSPETH: Take your letters.
51 A ¶ Bastian hesitates.
52 A Takes his letter from his pocket.
53 A Holds it out to her.
54 D BASTIAN: Captain, would you post it?
55 D ELSPETH: I'll try.
56 D BASTIAN (together): Thank you.
57 D GUS (together): Thank you.
58 A ¶ Both stop.
59 A Gus looks at his pencil.
60 A Bastian looks at his boots.
61 D ELSPETH: Let's go.
62 A ¶ She takes the lamp from its nail, and the three of them step into the dark of the tunnel mouth, where, beyond the ridge, a faint red line is beginning to rise out of the sea.

### SCENE s00195 | INT. CORPORATE MAILROOM - DAY
Detected names (may be incomplete or contain aliases): GERALD PFEFFERKORN, NEHA BHATTACHARYA-WELLS, DON, KRUMBLE
1 A ¶ A basement windowless room lined with pigeonholes, a jammed copier, and a framed poster: "TEAMWORK: BECAUSE NOBODY CAN DO IT ALONE."
2 A A fluorescent tube buzzes.
3 A Cardboard boxes are stacked to the ceiling in the corner like a failing skyline.
4 A ¶ GERALD PFEFFERKORN, 50s, mailroom supervisor, wears a lanyard with three laminated cards and a worn gray cardigan.
5 A He sorts envelopes at triple speed.
6 A NEHA BHATTACHARYA-WELLS, 20s, the new hire, in a crisp blazer, stands in the doorway, holding a binder.
7 A DONOVAN "DON" KRUMBLE, 40s, a regional manager, arrives behind her, wearing a tie with tiny cartoon calculators.
8 D GERALD: Name?
9 D NEHA: Neha. First day.
10 D GERALD: Sit. Don't touch the copier.
11 D NEHA: Is it broken?
12 D GERALD: It's alive. There's a difference.
13 D DON (entering): Gerald! Great news. Efficiency review.
14 D GERALD (not looking up): We've been efficient since 1994.
15 D DON: Which is why we're moving to quarterly.
16 D NEHA: Quarterly what?
17 D DON: Everything.
18 A ¶ Gerald drops a stack of letters.
19 A The copier lets out a long, plaintive beep.
20 D GERALD: Don, the mail comes daily.
21 D DON: And we'll bill it quarterly.
22 D NEHA: Bill who?
23 D DON: Ourselves. It's called internal chargeback.
24 A ¶ Gerald removes his glasses and rubs the bridge of his nose.
25 A He gestures at the stack of undelivered boxes.
26 D GERALD: Those are your Q3 bonus checks.
27 D DON (brightly): Then they're early!
28 D GERALD: They're three weeks late. Because of you.
29 D DON: Let's not assign blame. Let's assign tasks.
30 A ¶ Neha raises her hand.
31 A Don points at her like she's won a prize.
32 D NEHA: Can I ask a question?
33 D DON: Please.
34 D NEHA: Why are we pretending this makes sense?
35 A ¶ Silence.
36 A The copier beeps again.
37 A Don's smile holds a moment too long.
38 A Gerald puts his glasses back on.
39 D DON (softly): Welcome aboard, Neha.

### SCENE s01350 | EXT. ROOFTOP FIVES COURT, COPENHAGEN - DUSK
Detected names (may be incomplete or contain aliases): ASTRID LUNDGAARD, MATEUSZ KR, THANDI MOKOENA, RADIO
1 A ¶ A tarred roof above a canal.
2 A A white-painted court on the asphalt, four walls of corrugated steel.
3 A Chimney pots and TV aerials ring the horizon.
4 A Down in the water, a barge horn moans.
5 A ¶ ASTRID LUNDGAARD, 40s, silver braid, plays barefoot, gloved hand hitting a hard rubber ball.
6 A Across from her, MATEUSZ KRÓL, 30s, shirtless, a tattoo of a swallow across his ribs.
7 A In the corner, with a stopwatch and a radio headset, THANDI MOKOENA, 20s, referee, jots numbers on her palm.
8 A ¶ Astrid slams a backhand.
9 A The ball cracks off the steel and Mateusz dives, scrapes his knee, returns it high, and Astrid follows it back with a lunge and a swing, and he counters with a lob that lands in the corner, while Thandi shouts the score into her headset.
10 D THANDI (to the whole roof): Eleven all! Next point takes the set!
11 D RADIO [V.O.] (tinny, from the headset): Copy, referee. Broadcast is live. Keep it moving.
12 D MATEUSZ (muttering): Live. Everything's live. Nothing's alive.
13 D ASTRID (to Mateusz): You're drifting left.
14 D MATEUSZ: You always say that.
15 D ASTRID: Because you always drift.
16 A ¶ They set.
17 A Astrid serves, a vicious spinning shot.
18 A Mateusz reads it, steps in, volleys.
19 A They rally, long, ferocious.
20 A Thandi counts.
21 D THANDI (to herself): Please don't go to twelve.
22 D ASTRID (to Thandi): Girl, hush. Let us breathe.
23 A ¶ The ball skims the tape and drops.
24 A A held breath.
25 A Astrid and Mateusz stare at where it died.
26 D THANDI (to the whole roof): Point, Lundgaard! Set to Lundgaard!
27 A ¶ Mateusz drops to a knee, panting.
28 A Astrid walks to him, extends a gloved hand.
29 A He takes it.
30 A Down on the canal, the barge horn sounds again, longer this time.

### SCENE s02126 | INT. STRIKE ZONE LANES - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR NELL AKINTOLA
1 A ¶ A defunct bowling alley.
2 A Dead pinsetters hulk in the dark beyond the glass.
3 A A steel desk.
4 A A cassette recorder on the blotter.
5 A A rotary phone, unplugged.
6 A ¶ Nothing moves.
7 A ¶ A key turns.
8 A The door sticks, then gives.
9 A INSPECTOR NELL AKINTOLA, 50s, raincoat, flat shoes, a paper evidence bag under her arm, steps in and shakes water from her hair.
10 A ¶ She sets the bag on the desk.
11 A Presses PLAY on the recorder.
12 D NELL [V.O.] (tape, tinny): Tuesday. Strike Zone. Owner says he never left the shift.
13 D NELL: He did.
14 D NELL [V.O.] (tape): Receipts say otherwise. Parking stub at the Harbour Hotel, ten fifteen.
15 D NELL: Ten fourteen, actually.
16 D NELL [V.O.] (tape): Lane eleven. The foul line. Something under the tape.
17 D NELL: Three keys on a ring. Tagged. Not his.
18 D NELL [V.O.] (tape): Ask about the night man.
19 D NELL: Night man doesn't exist.
20 D NELL [V.O.] (tape): So who signed the sheet?
21 D NELL: That's what I'm asking, Nell.
22 A ¶ She stops the tape.
23 A Rewinds a few seconds.
24 A Presses PLAY.
25 D NELL [V.O.] (tape): Ask about the night man.
26 A ¶ She nods.
27 A Takes out a pen.
28 A Writes on her palm.
29 A Switches off the recorder.
30 D NELL: Night man.
31 A ¶ She turns off the light and leaves.
32 A The door clicks shut.

### SCENE s00858 | INT. DEVEREAUX NATURAL HISTORY MUSEUM, TAXIDERMY HALL - AFTER HOURS
Detected names (may be incomplete or contain aliases): MONTAGUE FINCH, PHILIPPA HOLT, DASHIELL WREN, XIMENA ROJAS, LUDO PETRIE
1 A ¶ Glass cases in long, shadowed rows: a snarling bear, a heron on one leg, a family of foxes frozen mid-pounce.
2 A A moth circles the one working lamp.
3 A Dust lies in a fine gray veil across everything.
4 A ¶ MONTAGUE FINCH, sixties, the museum director, stands under the lamp with a gold pocket watch in his hand and a smudge of dust on his cuff.
5 A PHILIPPA HOLT, forties, a private detective in a green overcoat, kneels beside the heron's case, shining a penlight on the lock.
6 A DASHIELL WREN, thirties, the night guard, stands in the doorway with a baton and a sour expression.
7 A XIMENA ROJAS, twenties, the intern, clutches a sheaf of loan forms against her chest.
8 A LUDO PETRIE, fifties, the taxidermist, sits on a stool in the corner with a sleeve of his cardigan unraveling in his fingers.
9 D PHILIPPA: The lock wasn't forced.
10 D MONTAGUE: Then someone had a key.
11 D DASHIELL: Only three keys exist. Mine. Mr. Finch's. And the taxidermist's.
12 D LUDO: Mine's in my pocket.
13 A ¶ He proves it by pulling out a ring, jingling it, and returning it.
14 A Montague turns his watch over in his palm.
15 A Philippa lifts the lid of the case, takes out a single feather with a pair of tweezers, and holds it up to the lamp.
16 A Dashiell shifts his weight and reaches for a handkerchief.
17 A Ximena sets the loan forms on a bench, then picks them up again, as though they might be needed.
18 A Ludo winds the loose thread of his cardigan around his finger until it goes white.
19 D PHILIPPA: This isn't a heron feather. It's from an ibis.
20 D MONTAGUE: I beg your pardon?
21 D PHILIPPA: Someone swapped the specimen. The ibis is worth forty times the heron.
22 D XIMENA: I catalogued it last month. It was an ibis, in case nine.
23 D DASHIELL: Case nine is empty.
24 D LUDO (quietly): It was never empty.
25 A ¶ Everyone turns to look at him.
26 A He lets the thread fall.
