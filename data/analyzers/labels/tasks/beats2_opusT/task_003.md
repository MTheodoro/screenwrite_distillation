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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00003.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00593 | INT. SKATE-RINK SNACK BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): PORTIA, KENJI, LUPE, ARCHIE
1 A ¶ Disco ball turning.
2 A Sticky floors.
3 A The smell of nacho cheese.
4 A Skates thump distantly on wooden floorboards beyond the glass.
5 A ¶ PORTIA, 16, in a too-large varsity jacket, slumps at a corner table, chewing a straw.
6 A Across from her, KENJI, 17, bleach-tipped hair, rubs the brim of his cap between his fingers.
7 A LUPE, 15, ponytail, braces, bounces on the balls of her feet at the counter.
8 A ARCHIE, 16, in a hoodie, stands guard by the arcade machine, arms folded.
9 D LUPE: Okay, okay, okay. She's coming.
10 D KENJI: Who's coming?
11 D LUPE: Mrs. Baptiste. With the clipboard.
12 D PORTIA: Hide the trophy.
13 D ARCHIE: What trophy?
14 D PORTIA: The one in your jacket, genius.
15 D ARCHIE: It's not in my jacket.
16 D KENJI: It's sticking out of your jacket.
17 D LUPE: Put it under the nachos.
18 D ARCHIE: Under the nachos?
19 D PORTIA: Under! The! Nachos!
20 A ¶ Archie drops the little gold figurine into the cheese tray and covers it with a napkin.
21 A The four of them freeze as an adult shape appears behind the glass, walking slowly, scanning.
22 A ¶ The shape passes.
23 A They exhale in unison.
24 A Kenji laughs, too loud.
25 A Portia kicks him under the table.
26 D KENJI: Ow!
27 D PORTIA: Sorry. Reflex.
28 D LUPE: She didn't see.
29 D ARCHIE: Of course she didn't. I'm a professional.
30 D PORTIA: You are a thief.
31 D ARCHIE: Borrower.
32 A ¶ Behind the glass, the shape turns back.
33 A The four heads snap to the window.
34 A Archie, in a panic, digs the trophy out of the cheese and shoves it in his hood.
35 A ¶ The shape keeps walking.
36 A Out the door.
37 A Gone.
38 A ¶ For a moment nobody moves.
39 A Then Portia pulls the straw from her mouth and begins to laugh.
40 A Kenji joins.
41 A Lupe doubles over.
42 A Archie, holding a hood full of nacho cheese, lets his head fall back against the arcade cabinet.

### SCENE s01231 | INT. PARLOUR - SPEKE HOUSE - DAY - 1894
Detected names (may be incomplete or contain aliases): WOMAN, EVELINE ASHCROFT
1 A ¶ Shuttered.
2 A Sheets thrown over the furniture like drowned ghosts.
3 A A single shaft of light picks out a brass phonograph on a side table, its horn pointing at the door.
4 A ¶ No one.
5 A The clock on the mantel has stopped at twenty past four.
6 A ¶ The front door opens somewhere in the house.
7 A Footsteps.
8 A They cross a hall.
9 A Slow, then slower.
10 A ¶ A WOMAN steps into the parlour.
11 A EVELINE ASHCROFT (40s, black mourning silk, travelling veil thrown back, face closed like a locked drawer).
12 A She holds a leather satchel against her chest.
13 A ¶ She stands in the light and doesn't take it in.
14 A Her eyes go to the sheets, the clock.
15 A Then to the phonograph.
16 A ¶ She crosses and lifts the dust cloth from it.
17 A Beneath, a wax cylinder sits on the spindle, labelled in a young hand: For E. — Michaelmas.
18 A ¶ She sets down the satchel.
19 A Wipes her glove across the horn and winds the crank.
20 A Twelve turns.
21 A She sets the needle.
22 A ¶ A hiss, then a crackle.
23 A Then a voice, warm and bright, drifting in from a decade ago.
24 D EVELINE [V.O.] (young, laughing): Is it recording? Is it? Oh, Papa, say something to it.
25 A ¶ A pause on the cylinder.
26 A Eveline is frozen, one hand on the horn.
27 D EVELINE [V.O., CONT'D] (still laughing): Very well, I shall say something. I shall say that I am eighteen, and the house is mine for the summer, and I shall never, ever leave it.
28 A ¶ The recording hisses and breaks into laughter.
29 A Real Eveline's mouth moves, almost a smile, almost not.
30 A ¶ She takes the glove off, finger by finger.
31 A Touches the horn with her bare palm.
32 D EVELINE (quietly): Liar.
33 A ¶ She lifts the needle.
34 A The room goes silent.
35 A She sits on a sheeted chair, and the dust stirs up around her in the light like smoke.
36 A ¶ She doesn't weep.
37 A She looks at the clock.
38 A She stands and crosses to it, opens the glass, and with one finger, restarts the pendulum.
39 A ¶ It ticks.
40 T FADE OUT.

### SCENE s01998 | INT. SENTENCING HEARING, SMALL COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE CORNELIUS ABERNATHY-OKOYE, SERAPHINA DUBOIS-TANAKA, ATTORNEY, MALCOLM ASHFORD-IGWE, PROSECUTOR, ODALYS FERRARI-NKEMELU, ABERNATHY
1 A ¶ A modest county courtroom, oak benches worn smooth by decades of hands.
2 A A flag in the corner, faded by afternoon light.
3 A A stenographer's keys click and then stop.
4 A ¶ JUDGE CORNELIUS ABERNATHY-OKOYE (70s, a face like folded paper, half-moon glasses) looks down from the bench.
5 A Before him, standing at the defense table, a woman in a plain gray suit: SERAPHINA DUBOIS-TANAKA (40s, bookkeeper, wedding ring she keeps turning).
6 A Beside her, her ATTORNEY, MALCOLM ASHFORD-IGWE (50s, silvered temples), holds a single sheet of paper.
7 A ¶ Across the aisle, the PROSECUTOR, ODALYS FERRARI-NKEMELU (30s, hair in a low knot), sits very straight.
8 D ABERNATHY: Mr. Ashford-Igwe. You wished to be heard.
9 D MALCOLM: I did, Your Honor.
10 D ABERNATHY: Go ahead.
11 D MALCOLM (together): My client has no prior record.
12 D ODALYS (together): The State recommends the maximum.
13 A ¶ Each hears the other.
14 A Malcolm stops.
15 A Odalys does not.
16 D ODALYS [CONT'D]: She embezzled four hundred thousand dollars from a church fund.
17 D MALCOLM: She repaid three hundred and ten.
18 D ODALYS: After she was caught.
19 D MALCOLM: Before she was charged.
20 D ABERNATHY: Counsel, one at a time.
21 A ¶ He lifts his glasses and rubs the bridge of his nose.
22 A Seraphina's thumb has gone still on her ring.
23 D ABERNATHY [CONT'D]: Ms. Dubois-Tanaka. Is there something you wish to say?
24 D SERAPHINA: No, sir.
25 D ABERNATHY: You're allowed.
26 D SERAPHINA: I know.
27 D ABERNATHY: Then I'll ask again.
28 A ¶ She glances at Malcolm, who gives the smallest nod.
29 A She lets go of her ring and rests both hands flat on the table.
30 D SERAPHINA: My mother was ill. The church was kind, and I was careful, and then I wasn't.
31 D ABERNATHY: Go on.
32 D SERAPHINA: That's all of it, Your Honor.
33 A ¶ Silence.
34 A The flag stirs in a draft from the air vent.
35 A Odalys looks at her own folded hands.
36 D ABERNATHY: Ms. Ferrari-Nkemelu. Does the State wish to respond?
37 D ODALYS (a long beat): No, Your Honor.
38 D ABERNATHY: No?
39 D ODALYS: The State withdraws its recommendation.
40 A ¶ Malcolm looks at her sharply.
41 A She doesn't look back.
42 A Seraphina's shoulders drop an inch.
43 D ABERNATHY: I'll take the matter under advisement.
44 A ¶ He closes the folder.
45 A The gavel rises, hovers, comes down gently.
46 D ABERNATHY [CONT'D]: We're adjourned.
47 A ¶ He stands.
48 A The courtroom stirs.
49 A Seraphina stays where she is, gazing at the empty bench.

### SCENE s00352 | INT. FAMILY HARDWARE STORE - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): ROSE LINDQVIST, HENRY LINDQVIST, MARGO LINDQVIST-BYRNE, DANNY LINDQVIST, UNCLE FRITZ
1 A ¶ A narrow hardware store, aisles crowded floor to ceiling with bins of nails, rope, washers, paint cans.
2 A A single bulb hangs over the register.
3 A A cardboard sign taped to the door reads: "CLOSED.
4 A FOREVER?"
5 A ¶ ROSE LINDQVIST, sixties, the widow, sits on a stool at the register, a cigar box open in front of her.
6 A HENRY LINDQVIST, forties, her eldest, in a suit, paces the center aisle.
7 A MARGO LINDQVIST-BYRNE, thirties, her daughter, leans against the paint counter with her arms crossed.
8 A DANNY LINDQVIST, twenty-five, her youngest, sits on an upturned bucket by the door.
9 A UNCLE FRITZ, seventies, Rose's brother-in-law, polishes a hammer with a rag, saying nothing.
10 D HENRY: Mom, the offer expires Friday.
11 D ROSE: I know when Friday is.
12 D MARGO: Henry, can you sit down?
13 D HENRY: I'm trying to help.
14 D MARGO: You're trying to pace.
15 D HENRY: Danny, tell her.
16 D DANNY: Tell her what?
17 D HENRY: That fourteen hundred square feet next to a Whole Foods is worth three times what this place makes.
18 D DANNY: I don't know, Henry.
19 D HENRY: You don't know.
20 D DANNY: It's Dad's store.
21 D HENRY: Dad's dead, Danny.
22 A ¶ Silence.
23 A Fritz stops polishing.
24 A Margo uncrosses her arms.
25 A Rose closes the cigar box with a small click.
26 D ROSE: Say that again.
27 D HENRY: Mom, I didn't mean...
28 D ROSE: Say it again, Henry. To my face.
29 A ¶ Henry stops in the middle of the aisle.
30 A He opens his mouth.
31 A He closes it.
32 D MARGO: Mom.
33 D ROSE: Quiet, Margo.
34 A ¶ Danny stands.
35 A The bucket tips and clatters.
36 A Henry spins toward the sound, his sleeve catching a display of screwdrivers, and a hundred handles hit the floor, rolling.
37 D HENRY: Great. Fantastic.
38 D DANNY: I've got it.
39 D HENRY: Leave it, Danny!
40 D DANNY: I said I've got it!
41 A ¶ He drops to his knees and gathers the screwdrivers.
42 A Margo kneels beside him.
43 A Henry stands with his hands open at his sides.
44 A Fritz sets down the hammer, picks up a broom, and begins to sweep, slow and steady.
45 D ROSE: Your father kept the books in this box.
46 A ¶ She lifts the lid.
47 A Inside are index cards, hundreds of them, in neat blue ink.
48 D ROSE [CONT'D]: Every customer who ever couldn't pay. Every tab he let ride. Forty years.
49 D MARGO: Mom, I never knew.
50 D ROSE: Nobody did. That's the thing about your father. He never wanted to be thanked.
51 D HENRY (quiet): How much is owed?
52 D ROSE: I haven't counted. I think it's more than the Whole Foods offer.
53 A ¶ Henry laughs once, a helpless sound.
54 A He sits down on the floor in the middle of the screwdrivers.
55 D HENRY: Uncle Fritz, did you know?
56 D FRITZ: I wrote half those cards.
57 D DANNY: We're not selling.
58 D HENRY: Danny.
59 D DANNY: We're not selling it, Henry.
60 D MARGO: No.
61 D HENRY (rising, pulling at his tie): Then we run it. All four of us. Like he did.
62 D ROSE: Five.
63 A ¶ She nods at Fritz.
64 A He lifts the broom in salute.
65 A Henry crosses to the register and takes the cigar box in both hands, and Rose lets him.

### SCENE s01517 | INT. VILLAGE SCHOOLHOUSE - AFTER HOURS - DUSK
Detected names (may be incomplete or contain aliases): HEADMISTRESS GWENDOLEN BEAUMONT-OKORO, ABEBE LINDQVIST-NWOSU, FATIMA KOWALSKI-ASANTE, BOY
1 A ¶ Rows of small desks.
2 A A globe with a dent in Africa.
3 A Chalk dust drifting through low gold light.
4 A A map of a country that no longer exists.
5 A ¶ Three adults sit at children's desks, knees too high, teacups on the writing slopes.
6 A ¶ HEADMISTRESS GWENDOLEN BEAUMONT-OKORO (60s, spectacles on a chain, a voice like a closing door) sits at the front.
7 A MR. ABEBE LINDQVIST-NWOSU (40s, the caretaker, a ring of keys), crammed behind a desk, drinks from a chipped mug.
8 A MRS. FATIMA KOWALSKI-ASANTE (30s, the only teacher left) rubs her temples.
9 D GWENDOLEN: The inspector arrives Monday.
10 D FATIMA: We know.
11 D GWENDOLEN: He will want to see the registers.
12 D ABEBE: They're in the cellar.
13 D GWENDOLEN: Why?
14 D ABEBE: Because of the flood.
15 D GWENDOLEN: Mr. Lindqvist-Nwosu, the flood was in April.
16 D ABEBE: They're still drying.
17 D FATIMA: They're mold, Abebe.
18 D ABEBE: Mold is a kind of record.
19 D GWENDOLEN: Mrs. Kowalski-Asante, what is the attendance?
20 D FATIMA: Eleven.
21 D GWENDOLEN: Out of?
22 D FATIMA: Sixty.
23 D GWENDOLEN: And the rest?
24 D FATIMA: Gone to the city.
25 D GWENDOLEN: All forty-nine?
26 D FATIMA: All of them. With their parents.
27 D GWENDOLEN: Then we have a school with eleven pupils, a caretaker, a teacher, and a headmistress.
28 D ABEBE: And a globe.
29 D GWENDOLEN: And a globe.
30 A ¶ A knock at the door.
31 A They freeze.
32 A Another knock, small and polite.
33 A ¶ The door opens.
34 A A BOY of nine, in oversized shoes, stands on the threshold with a lunch pail.
35 D BOY: Is this where school is?
36 A ¶ Gwendolen rises, slowly, and smooths her skirt.
37 D GWENDOLEN: It is.
38 D BOY: Am I late?
39 D GWENDOLEN: No. You are the twelfth.

### SCENE s01832 | INT. ROADSIDE WAY STATION - DAY
Detected names (may be incomplete or contain aliases): MA TULLIVER, SPARROW, ORVILLE PENN, SABINA ROJAS, OSCAR HALE, JUDE CALLAHAN, ^OSCAR
1 A ¶ Adobe walls, a stove gone cold, six mismatched chairs pulled to a long table.
2 A Dust hangs in the shaft of light from the door.
3 A Outside, a horse stamps.
4 A ¶ Six people sit down to a meal none of them wants.
5 A The proprietor, MA TULLIVER, sixty, sleeves rolled, ladles beans into tin bowls and says nothing.
6 A Her hired boy, SPARROW, fifteen, sets them down one by one.
7 A A drummer in a checked vest, ORVILLE PENN, forty, sits with his sample case under his boots.
8 A A woman in gray travel wool, SABINA ROJAS, thirty, holds her bowl and does not lift the spoon.
9 A A tall rancher, OSCAR HALE, fifty, takes his hat off for grace though no one says one.
10 A And in the corner chair, back to the wall, a stranger in a dusty duster, JUDE CALLAHAN, thirty-five, watches the door.
11 A ¶ The beans steam.
12 A For a long moment there is only the sound of spoons.
13 D ORVILLE: Lovely weather for the road.
14 D OSCAR: It's rained twice in a year.
15 D ORVILLE: That's what I said.
16 D SABINA: Is there a stage tonight?
17 D MA TULLIVER: Stage came and went.
18 D SABINA: I was told it comes at four.
19 D SPARROW: It did come at four. You were upstairs.
20 D SABINA: Nobody woke me.
21 D MA TULLIVER (over her): Sparrow, fetch the bread.
22 A ¶ He goes.
23 A Oscar glances at Jude, who has not touched his bowl.
24 A Orville clears his throat and opens his mouth, but Sabina speaks first.
25 D SABINA: Mister, are you not hungry?
26 D JUDE: Not particularly.
27 D OSCAR: He's waiting on somebody.
28 D JUDE: I'm waiting on supper to finish.
29 D OSCAR: Then it's finished.
30 A ¶ He shoves his bowl away.
31 A Ma Tulliver sets down her ladle.
32 A The room tightens like a drawn cord.
33 A ¶ She comes around the table, slow, wiping her hands on her apron.
34 A She stops behind Jude's chair and rests one palm on its back.
35 A He does not turn his head.
36 A ¶ Sparrow returns with the bread, sees them, and stops in the doorway with the loaf held against his chest.
37 D SPARROW: Ma?
38 D MA TULLIVER: Put it down, son.
39 A ¶ He sets it on the sideboard.
40 A Orville slides his sample case farther under his chair.
41 A Sabina rises halfway, then sits again as Oscar lays a hand over hers.
42 D JUDE (quietly): Ma'am. You know who I am.
43 D MA TULLIVER (simultaneously): I know whose boy you are.
44 D ^OSCAR (simultaneously): We all know whose boy.
45 A ¶ Jude smiles, tired.
46 A He reaches into his duster.
47 A Everyone in the room draws a breath, and what he takes out is a folded letter, creased soft with handling.
48 D JUDE [CONT'D]: He asked me to bring this.
49 A ¶ He sets it on the table, in the middle of the beans.
50 A Nobody reaches for it.
51 A Outside the horse stamps, and stamps again, and a long shadow crosses the doorway.

### SCENE s01286 | EXT. SUNNYBROOK PETTING ZOO - DAY
Detected names (may be incomplete or contain aliases): BIRTHDAY CLOWN, TEDDY, PRIYANKA DESHMUKH, DOLORES SWAN, GERALD
1 A ¶ Hay bales.
2 A A painted red barn.
3 A A banner reads HAPPY 7TH BIRTHDAY, TEDDY!
4 A Beneath it, a crowd of parents with phones.
5 A ¶ A BIRTHDAY CLOWN, 40s, in an orange wig and enormous shoes, wrestles a bundle of balloon animals.
6 A A goat watches him with great interest.
7 A ¶ MRS. PRIYANKA DESHMUKH, 40s, blazer, lanyard, a party planner with a tight smile, marches over with a clipboard.
8 A ¶ TEDDY, 7, birthday boy, paper crown crooked, stands at the pen.
9 A He holds a carrot out to the goat.
10 A He is very serious.
11 A ¶ DOLORES SWAN, 50s, the zookeeper, in rubber boots and a faded cap, leans on a rake and stares at the clown with wary eyes.
12 D PRIYANKA: You're ten minutes late.
13 D CLOWN: Traffic. Also the goat ate my map.
14 D PRIYANKA: You're a clown. You don't need a map.
15 D CLOWN: I'm a fully qualified clown, ma'am. I have a certificate.
16 D DOLORES: He's got a certificate.
17 D PRIYANKA: Do you have a name, certificate?
18 D CLOWN: Giggles.
19 D PRIYANKA: Your real name.
20 D CLOWN (lowering his voice): Gerald.
21 D DOLORES: Gerald, that goat has been staring at you for five minutes. He doesn't like clowns.
22 D GERALD: Why not?
23 D DOLORES: Last clown was a bad time.
24 A ¶ The goat lowers its head.
25 A Gerald backs away.
26 A The goat steps forward.
27 A Gerald trips over his shoe, grabs a balloon sword from his belt, thrusts it like a rapier.
28 A The sword POPS.
29 A The goat CHARGES.
30 A ¶ Gerald bolts across the yard, wig flying, shoes flapping.
31 A Priyanka drops the clipboard.
32 A Dolores drops the rake and sprints after the goat, shouting.
33 A Teddy bursts into laughter and runs after all of them, crown bouncing.
34 A The parents' phones come up like a field of tiny cameras.
35 D GERALD [CONT'D] (over his shoulder): Is that a good goat?!
36 D DOLORES: That's a goat!
37 A ¶ Gerald vaults a hay bale and lands face-first in the pen.
38 A The goat skids to a stop.
39 A Sniffs his wig.
40 A Eats it.
41 A ¶ Silence.
42 A Then applause.
43 D TEDDY: Best birthday ever!
44 A ¶ Gerald lies in the straw, hairless, beaming.

### SCENE s02254 | EXT. PUBLIC POOL - DIVING PLATFORM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): NOOR, FELIX
1 A ¶ An empty municipal pool at closing time.
2 A The water is green-blue and still.
3 A A ten-meter platform rises above it, rust at the joints, a faded sign reading DIVE AT OWN RISK.
4 A ¶ NOOR, fifteen, in a black one-piece and a wet towel around her shoulders, stands at the base of the ladder with her toes curled around the bottom rung, and FELIX, sixteen, her older cousin, in cutoffs and a tank top, sits in a plastic lifeguard chair eating sunflower seeds and spitting the shells into the pool, and neither of them says anything for a while, and the filter hums, and the drain gurgles, and a plane crosses the pink sky.
5 D FELIX: You don't have to.
6 D NOOR: I know.
7 D FELIX: It's just a platform.
8 D NOOR: It's ten meters.
9 D FELIX: It's ten meters of nothing, then water.
10 D NOOR: That's what I'm afraid of.
11 A ¶ She puts a foot on the second rung.
12 A Takes it off.
13 A Felix watches without comment, rolling a seed between his teeth.
14 D FELIX: Dad did it when he was fourteen.
15 D NOOR: Uncle Rob never did anything he said he did.
16 D FELIX: Okay, that's fair.
17 A ¶ She climbs three rungs, then four, then stops, her knuckles pale on the rail.
18 A Felix stands up, tosses the empty seed bag into a trash can, and walks to the edge of the pool.
19 A He kneels there, looking up.
20 D FELIX [CONT'D]: I'll be right here.
21 D NOOR: You can't catch me from ten meters.
22 D FELIX: I'll catch you after.
23 A ¶ She exhales.
24 A Climbs.
25 A The rungs ring under her feet.
26 A At the top, she stands at the edge of the board with her arms wrapped around herself, her wet hair dripping.
27 A Far below, Felix is very small.
28 D NOOR [CONT'D] (calling down): Don't watch.
29 D FELIX: I'm watching.
30 D NOOR: Felix!
31 D FELIX: Okay, I'm not watching.
32 A ¶ He covers his eyes with both hands.
33 A She laughs, a breath of a sound, and steps off.

### SCENE s00554 | INT. ST. AMBROSE BAKERY - OVEN TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ODILE LAFARGE-MENDOZA, MARCELLUS TREMAINE, TOBIAS GR, NEWALD
1 A ¶ A brick vault, black with a century of smoke.
2 A Iron doors, cooling racks, the slow smell of yesterday's bread.
3 A At the far end, a hole in the wall where the old coal chute used to be, just wide enough for a crouching man.
4 A ¶ ODILE LAFARGE-MENDOZA, 40s, in a baker's apron over a black jumpsuit, kneels at the wall with a chisel and a mallet, coaxing a brick loose with a baker's patience.
5 A MARCELLUS TREMAINE, 60s, flour on his forearms, stands guard at the tunnel mouth, ear cocked toward the street.
6 A TOBIAS GRÜNEWALD, 20s, the apprentice, hugs a lantern and a tray of rolls for cover.
7 D ODILE: Marcellus. Time.
8 D MARCELLUS: Eleven past.
9 D ODILE: Then we have until half.
10 D TOBIAS: What happens at half?
11 D MARCELLUS: The delivery truck.
12 D TOBIAS: I thought it came at four.
13 D MARCELLUS: It does. But the driver likes to sit and smoke.
14 D ODILE: Which gives us twenty minutes.
15 D TOBIAS: To do what?
16 D ODILE: To go through a wall.
17 A ¶ Tobias swallows.
18 A Sets down the tray.
19 A The tunnel is hot and the lantern is trembling.
20 A Odile pries the brick free.
21 A It falls with a soft cough.
22 A Beyond: dark, a draft of cold air, a faint metallic gleam.
23 D MARCELLUS: That's it.
24 D ODILE: That's it.
25 D TOBIAS: What is?
26 D MARCELLUS: The bank vault.
27 D TOBIAS: The bank is on the other side of the street.
28 D ODILE: And the bakery is on this side. And the tunnel crosses under.
29 D TOBIAS: You never said it was a bank.
30 D MARCELLUS: We said it was bread.
31 D TOBIAS: This is not bread!
32 D ODILE: Hush.
33 A ¶ She puts a finger to her lips.
34 A They listen.
35 A The tunnel breathes.
36 A Somewhere above them, a car passes, tires hissing on wet cobbles.
37 D ODILE [CONT'D]: Tobias. You've worked here three years.
38 D TOBIAS: Yes.
39 D ODILE: Have we ever been late with a loaf?
40 D TOBIAS: No.
41 D ODILE: Have we ever been short?
42 D TOBIAS: No.
43 D ODILE: So do you trust me?
44 D TOBIAS: ...Yes.
45 D ODILE: Then hold the lantern.
46 A ¶ He holds it.
47 A His hand stops shaking.
48 A She crawls into the hole.
49 A Marcellus passes her the mallet, then the chisel, then a long, thin steel probe.
50 A She disappears into the dark.
51 A ¶ A scrape.
52 A A tap.
53 A A silence.
54 A A long, long silence.
55 D TOBIAS (whispering): What's she doing?
56 D MARCELLUS: Listening.
57 D TOBIAS: To what?
58 D MARCELLUS: To the lock.
59 D TOBIAS: Locks don't talk.
60 D MARCELLUS: Everything talks, lad. You just have to be quiet enough.
61 A ¶ A click.
62 A A heavy mechanical sigh.
63 A Odile's voice drifts out of the hole, muffled and amused.
64 D ODILE [O.S.]: Gentlemen. We're in.
65 A ¶ Marcellus and Tobias exchange a look.
66 A Tobias laughs, a cracked, delighted laugh, and covers his mouth with a flour-white hand.
67 A Marcellus claps him on the back.
68 A The lantern swings, throwing gold across the old brick.
69 D MARCELLUS: Twenty minutes, Odile.
70 D ODILE [O.S.]: Eighteen.
71 D TOBIAS: What do we do?
72 D MARCELLUS: We bake.

### SCENE s00660 | INT. SALT MINE CONFERENCE CHAMBER, 400 METERS DOWN - DAY
Detected names (may be incomplete or contain aliases): DIGGING DEEPER, MAGS, LUNDQUIST-BEY, VP, FERDIE, OKAFOR, DOLORES PE, A-FITZGERALD, TYBALT CHANDRASEKHAR, STRANGER, VALUE, RAYMOND PELLETIER
1 A ¶ A vaulted hall hewn from crystalline rock, lit by amber work lamps.
2 A The walls glitter.
3 A A corporate banner reads SYNERGY SUMMIT: DIGGING DEEPER, hung from two rusty hooks.
4 A Fifteen folding chairs face a flip chart.
5 A A catering table groans under an untouched platter of sandwiches.
6 A ¶ MARGUERITE "MAGS" LUNDQUIST-BEY, fifties, the regional VP, stands at the flip chart with a laser pointer, hard-hatted and smiling.
7 A Seated in the front row: FERDINAND "FERDIE" OKAFOR, forties, a division head wearing a hard hat over a toupee.
8 A DOLORES PEÑA-FITZGERALD, sixties, legal counsel, holding a clipboard like a rosary.
9 A TYBALT CHANDRASEKHAR, twenties, an intern in an ill-fitting vest.
10 A And a STRANGER in a hard hat and a beige jacket, who sits at the back, notebook open, saying nothing.
11 D MAGS: Team, thank you for coming down. Literally!
12 A ¶ Nobody laughs.
13 A The stranger writes something.
14 D FERDIE: Mags, is the elevator running?
15 D MAGS: It's a hoist, Ferdie.
16 D FERDIE: Is the hoist running?
17 D MAGS (brightly): Let's circle back.
18 D DOLORES: Margaret, I'd like it recorded that I objected to a location with no cell service.
19 D MAGS: It's recorded.
20 D DOLORES: By whom?
21 D MAGS: By... the universe.
22 A ¶ She clicks the laser pointer.
23 A A red dot lands on the flip chart: a pyramid labeled VALUE, with a pit beneath it labeled YOU.
24 D TYBALT (muttering): That's not a good pyramid.
25 D MAGS: Tybalt, did you have something to contribute?
26 D TYBALT: No. Sorry. Just clearing my throat.
27 D STRANGER (from the back): It's a very good pyramid.
28 A ¶ Every head turns.
29 A The stranger doesn't look up from his notebook.
30 D FERDIE: And you are?
31 D STRANGER: Observing.
32 D DOLORES: Observing what?
33 D STRANGER: How long it takes.
34 D MAGS: For what?
35 D STRANGER (writing): Everything.
36 A ¶ A silence settles over the hall.
37 A The amber lamps hum.
38 A A droplet of brine falls from the ceiling and lands on the sandwiches.
39 D FERDIE (to the room): Does anyone know who this is?
40 D TYBALT (very small): I think he's from corporate.
41 D DOLORES: Which corporate?
42 D TYBALT: The one that, um, bought us. Last Thursday.
43 A ¶ Mags's smile falters.
44 A The laser pointer clicks off.
45 D MAGS: Last Thursday.
46 D TYBALT: There was an email.
47 D MAGS: I didn't see an email.
48 D TYBALT: It went to everyone.
49 D FERDIE: I didn't see it either.
50 D DOLORES (dryly): It would have been on the server.
51 D MAGS: Which is...
52 D DOLORES: Upstairs.
53 A ¶ The stranger finally closes his notebook.
54 A He stands, tucks it into his jacket, and takes off his hard hat.
55 A A bald, patient head.
56 A A name badge: RAYMOND PELLETIER, ACQUISITIONS.
57 D RAYMOND: Raymond Pelletier. Acquisitions. Please, continue.
58 D MAGS (faintly): Raymond.
59 D RAYMOND: You were on the pyramid.
60 D MAGS: I was.
61 D RAYMOND: It's very good. But I have to say, the pit is rather deeper than the pyramid is high.
62 A ¶ He gives a small, polite nod and sits again.
63 A Mags stares at the flip chart for a long, long moment.
64 D MAGS (to herself): Well. That's that.
65 A ¶ She lays down the laser pointer.
66 A She sits beside Ferdie, who has slumped in his chair, toupee slightly askew.
67 A Dolores, without a word, puts her hand on Tybalt's shoulder.
68 A ¶ Raymond opens his notebook again.
69 A The lamps hum.
70 D RAYMOND [CONT'D] (to the room, gently): Does anyone want a sandwich?
71 A ¶ Nobody moves.
72 A Then Tybalt raises his hand.

### SCENE s00853 | INT. SMALL CLAIMS COURT, STRIKE ZONE LANES ANNEX - DAY
Detected names (may be incomplete or contain aliases): JUDGE FAIRCLOTH, ELSPETH MORROW, ABERNATHY
1 A ¶ A bowling alley, daytime.
2 A A folding table stands at the end of lane four.
3 A The pins are still set.
4 A A hand-lettered sign: "COURT IN SESSION.
5 A NO SHOES, NO SERVICE."
6 A ¶ JUDGE FAIRCLOTH, sixties, in a black robe over a bowling shirt, sits on a high stool.
7 A ELSPETH MORROW, forties, the plaintiff, stands with a binder.
8 A MR. ABERNATHY, seventies, the defendant, sits in a plastic chair clutching a trophy.
9 D FAIRCLOTH: Ms. Morrow, you allege Mr. Abernathy broke your window with a bowling ball.
10 D ELSPETH: I allege it, Your Honor. Lane six, left-hand hook, two a.m.
11 D ABERNATHY: It wasn't two. It was one-forty.
12 D FAIRCLOTH: Mr. Abernathy, you'll have your turn.
13 D ABERNATHY (muttering): One-forty. I wrote it down.
14 D ELSPETH: The ball came through my bathroom window, Your Honor.
15 D FAIRCLOTH: From the alley?
16 D ELSPETH: From the parking lot. He was bowling in the parking lot.
17 A ¶ Abernathy grips the trophy.
18 A Faircloth leans down from the stool and gestures with his gavel to the empty lanes beyond, as if the gallery were full.
19 D FAIRCLOTH (to the room): Let the record show we have no jury, no clerk, and no coffee.
20 A ¶ He taps the gavel.
21 A It bounces off the table and rolls under lane four.

### SCENE s00237 | INT. SINKING FISHING TRAWLER, WHEELHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN RUTH ABERNATHY-KOMA, BASTIEN LEFEBVRE-ADEOLA, MAEVE ONWUACHI-DRUMM, COAST GUARD
1 A ¶ Water ankle-deep and rising.
2 A A lantern swings from the ceiling.
3 A Waves slam the hull.
4 A ¶ CAPTAIN RUTH ABERNATHY-KOMA (50s, oilskins, grey braid) grips the wheel.
5 A Her knuckles are white.
6 A ¶ Beside her, deckhand BASTIEN LEFEBVRE-ADEOLA (20s, hood, cut lip) bails with a plastic bucket.
7 A ¶ At the radio, first mate MAEVE ONWUACHI-DRUMM (30s, hands taped, glasses fogged) clutches the handset.
8 D MAEVE (into radio): Mayday, mayday, this is trawler Gallant Heron, taking water, request assistance.
9 D COAST GUARD [V.O.] (garbled): Gallant Heron, say again your position.
10 D MAEVE: Forty-one north, sixty-eight west! Forty-one north!
11 D BASTIEN: How much time?
12 D RUTH: Twenty minutes.
13 D BASTIEN: That's not time. That's a prayer.
14 D COAST GUARD [V.O.]: ...ant Heron... one hour... response...
15 D MAEVE: One hour! We don't have one hour!
16 D RUTH: Maeve. Give me the mic.
17 D MAEVE: They can't hear--
18 D RUTH: Give it to me!
19 A ¶ Maeve hands it over.
20 A A wave rocks the boat.
21 A The lantern swings.
22 D RUTH [CONT'D] (into radio): Coast Guard, this is Ruth Abernathy. Last transmission. We are abandoning ship in ten minutes. Three souls. Please mark our position.
23 D BASTIEN: Abandoning to what?
24 D RUTH: The raft.
25 D BASTIEN: The raft's been in the shed since March.
26 D RUTH: Then it's had a long rest.
27 D MAEVE: Captain, the pump's dead!
28 D BASTIEN: I'm bailing!
29 D RUTH: Bail faster!
30 D COAST GUARD [V.O.]: ...Heron... flare... fire flare...
31 D MAEVE: Flare! Where's the flare?
32 D BASTIEN: Port locker!
33 D MAEVE: It's underwater!
34 D RUTH: Then swim!
35 A ¶ Maeve dives into the dark water pooled in the corner.
36 A Surfaces gasping.
37 A A bright orange flare in her fist.
38 D MAEVE: Got it!
39 D RUTH: Up top! Go!
40 A ¶ They push through the hatch.
41 A The sea comes at them in sheets.
42 A Wind grabs the flare, strikes it.
43 A Red fire stabs the sky.
44 A ¶ Far off, a searchlight swings.
45 A Bastien whoops.
46 D BASTIEN: They see us! They see us!
47 D RUTH (to herself): Slow down, Ruth. Don't thank anyone yet.
48 A ¶ The hull groans.
49 A A wave lifts them.
50 A The searchlight finds their faces.

### SCENE s02203 | INT. SHUTTERED OBSERVATORY - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELSPETH COURTENAY, LACHLAN MURRAY, OKSANA PETRENKO, HAMZA YILMAZ, CECILIA ROSSI
1 A ¶ A giant telescope under a retractable roof.
2 A The slit is open; a sliver of starry sky shows.
3 A Wooden floors creak underfoot.
4 A A single reading lamp glows.
5 A ¶ Five people sit in a rough circle of folding chairs, bags at their feet.
6 A ¶ ELSPETH COURTENAY (50s, ex-intelligence, tweed jacket) holds a silver thermos.
7 A LACHLAN MURRAY (30s, analyst, rumpled shirt) taps a laptop.
8 A OKSANA PETRENKO (40s, courier, fingerless gloves) stares at the floor.
9 A HAMZA YILMAZ (50s, broker, wool coat) picks at his cuticles.
10 A And CECILIA ROSSI (20s, junior, very new) sits on the edge of her chair like someone about to be called on.
11 A ¶ Nobody is talking.
12 A Then:
13 D ELSPETH: Let's be clear about why we're here.
14 D LACHLAN: Because someone leaked.
15 D ELSPETH: Because someone is about to.
16 D HAMZA: You can't know that.
17 D ELSPETH: I know what I can prove and I know what I can feel.
18 D OKSANA (muttering): Feelings. Wonderful.
19 D ELSPETH: Oksana, if you have a comment, make it to the room.
20 D OKSANA: I said, feelings are not evidence.
21 D ELSPETH: No. But they're how I've stayed alive.
22 D CECILIA: Excuse me, may I ask something?
23 D ELSPETH: You may.
24 D CECILIA: Why are we meeting in an observatory?
25 D LACHLAN: Nobody listens in an observatory.
26 D HAMZA: Nobody comes to an observatory.
27 D OKSANA: Nobody knows where it is.
28 D ELSPETH: All three.
29 D CECILIA: But the roof is open.
30 D ELSPETH: It always is.
31 D LACHLAN (to himself): That's actually a point.
32 D ELSPETH: Lachlan, your laptop. Is it on the network?
33 D LACHLAN: Offline.
34 D ELSPETH: Prove it.
35 D LACHLAN: Mm. Sure.
36 A ¶ He turns the screen outward.
37 A Airplane mode, no Wi-Fi bars, no Bluetooth.
38 A She nods.
39 D ELSPETH: Hamza. Phone.
40 D HAMZA: In the car.
41 D ELSPETH: Oksana.
42 D OKSANA: Faraday bag.
43 D ELSPETH: Cecilia.
44 D CECILIA: I, um. I left mine at home.
45 D ELSPETH: Good girl.
46 D ELSPETH: Now. To business.
47 D HAMZA: I have a question first.
48 D LACHLAN: I have a question first.
49 D ELSPETH: Make it quick.
50 D HAMZA: If the leak is among us, how do we find it?
51 D ELSPETH: We don't find it. We feed it.
52 D LACHLAN: Feed it what?
53 D ELSPETH: Something false.
54 D OKSANA: And watch where it surfaces.
55 D ELSPETH: Exactly.
56 D CECILIA: But what if we're wrong?
57 D ELSPETH: Then the false information surfaces nowhere and we have wasted a night.
58 D HAMZA: And if we're right?
59 D ELSPETH: Then someone in this room will be very unhappy by dawn.
60 A ¶ A long pause.
61 A The telescope creaks overhead as the dome shifts a few degrees in the wind.
62 A A thin blade of starlight slides across Cecilia's face.
63 A She flinches.
64 D LACHLAN: Who writes the false information?
65 D ELSPETH: I do.
66 D OKSANA: And who delivers it?
67 D ELSPETH: You do. Tomorrow. To three different contacts.
68 D OKSANA: One for each of us?
69 D ELSPETH: Exactly one for each of you.
70 D HAMZA: And me?
71 D ELSPETH: You'll get a different story. A better one.
72 D HAMZA: Why better?
73 D ELSPETH: Because you are more careful than the others.
74 D HAMZA (muttering): I don't know whether to be flattered.
75 D ELSPETH: Don't be.
76 D LACHLAN: Elspeth, how long until dawn?
77 D ELSPETH: Seven hours.
78 D CECILIA: Can we leave before dawn?
79 D ELSPETH: No.
80 D CECILIA: Not even to use the restroom?
81 D ELSPETH: You may use the restroom. Take Oksana.
82 D OKSANA: Why me?
83 D ELSPETH: Because you're the only one who won't talk to her.
84 D OKSANA (to herself): Tremendous.
85 A ¶ She stands.
86 A Cecilia stands.
87 A The two cross the dome room, their footsteps echoing, and exit through a door at the far end.
88 A ¶ The three remaining watch them go.
89 A The lamp flickers.
90 D HAMZA (very low): She doesn't suspect, does she?
91 D ELSPETH: Cecilia?
92 D HAMZA: Oksana.
93 D ELSPETH: Oksana suspects everyone. That is why I trust her.
94 A ¶ Overhead, a single shooting star crosses the open slit of sky.
95 A Nobody sees it but Lachlan, who watches until it is gone.

### SCENE s00171 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): BERNADETTE COLE, NACHO, REYES
1 A ¶ Dryers tumble.
2 A One flickering tube.
3 A Rain on the glass.
4 A ¶ BERNADETTE COLE, 50s, folds a man's shirts.
5 A Precise.
6 A Too precise.
7 A IGNACIO "NACHO" REYES, 20s, enters, soaked, a duffel on his shoulder.
8 A He drops it.
9 A Takes the seat across from her.
10 A She does not look up.
11 A He sets a ring on the folding table.
12 A She folds a sleeve.
13 A He taps the ring.
14 A She smooths a collar.
15 D BERNADETTE: You're late.
16 D NACHO: Bus was slow.
17 D BERNADETTE: Eleven years, Ignacio. The bus was slow.
18 D NACHO: I wrote you.
19 D BERNADETTE: You wrote Dad. Dad's dead.
20 D NACHO: I know he's dead. I was in the room.
21 D BERNADETTE: You were in the hallway.
22 D NACHO: Okay. The hallway. I was in the hallway, Bernie, because you told me not to come in. You said, quote, he doesn't want you here.
23 D BERNADETTE: He didn't.
24 D NACHO: He asked for me. The nurse told me.
25 D BERNADETTE: The nurse didn't know him.
26 D NACHO: Neither did you.
27 A ¶ She stops folding.
28 A A dryer buzzes.
29 A Neither moves.
30 A Then she sweeps the shirts off the table with one arm.
31 A They scatter across the floor.
32 A Nacho stands, kicks the duffel, and the ring spins off the table and rolls under a machine.

### SCENE s00184_0 | INT. APPELLATE COURTROOM - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RUTH ELLINGSWORTH, JUSTICE AMADOU DIALLO-FERNANDEZ, BAILIFF
1 A ¶ Dark wood, high bench, a brass seal.
2 A A hush.
3 A ATTORNEY RUTH ELLINGSWORTH, 50s, stands at the lectern in a navy suit.
4 A Her papers are squared.
5 A Her hands are not.
6 A ¶ JUSTICE AMADOU DIALLO-FERNANDEZ, 60s, looks down from the bench over half-moon glasses.
7 A He has been listening for an hour.
8 D JUSTICE DIALLO-FERNANDEZ: Ms. Ellingsworth, your time is nearly up.
9 D RUTH: I understand, Your Honor. If I may conclude.
10 D JUSTICE DIALLO-FERNANDEZ: You may.
11 D RUTH: The trial court erred in excluding the recording. Without it, the jury never heard my client's own words.
12 D JUSTICE DIALLO-FERNANDEZ: Words he spoke to a priest.
13 D RUTH: To a man who was not, in fact, a priest.
14 D JUSTICE DIALLO-FERNANDEZ: So you say.
15 D RUTH: So the record says. Exhibit nine.
16 A ¶ He flips pages.
17 A She waits.
18 A The door at the back opens with a creak.
19 A A BAILIFF, 30s, hurries down the aisle and hands the Justice a folded note.
20 A He reads.
21 A His face changes.
22 D JUSTICE DIALLO-FERNANDEZ [CONT'D]: Ms. Ellingsworth, I'm informed that the State has just withdrawn its opposition.
23 D RUTH: Withdrawn?
24 D JUSTICE DIALLO-FERNANDEZ: Entirely. Your client's conviction is to be vacated.
25 A ¶ Ruth looks at the back of the room.
26 A Her opponent's chair is empty.
27 A Her phone buzzes against the lectern.
28 A She turns it over.
29 A A name on the screen.
30 D RUTH: Your Honor, may I take this?
31 D JUSTICE DIALLO-FERNANDEZ: Please.
32 A ¶ She raises the phone to her ear.
33 D BAILIFF [V.O.] (over phone): Ma'am, front desk. The real priest just walked in. He confirmed it.
34 A ¶ Ruth lowers the phone and lets her breath out slowly.
35 A The Justice watches her.
36 A She nods once.
37 D RUTH: Thank you, Your Honor.
38 D JUSTICE DIALLO-FERNANDEZ: Don't thank me yet. The paperwork alone will take until Friday.
39 D RUTH: Friday is fine.
40 D JUSTICE DIALLO-FERNANDEZ: I thought it might be.
41 A ¶ She gathers her papers.
42 A He returns to his notes without another glance.
43 A The Bailiff holds the door.
44 A Ruth walks out with a straight back and unsteady knees.

### SCENE s01191 | INT. ABANDONED CAROUSEL WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): TEODORA VANCE-MBEKI, DESMOND CHALK, OLD HARLAN
1 A ¶ A cavernous shed of peeling paint and sawdust.
2 A Dozens of wooden horses hang from the rafters on chains, their glass eyes catching the light of a camping lantern.
3 A Half-carved zebras lie on workbenches.
4 A A pipe organ sits dead under a tarp.
5 A ¶ TEODORA VANCE-MBEKI (30s, parka, flashlight clipped to her collar) pushes through the door, brushes cobwebs off her hair, and stops under the hanging horses.
6 A DESMOND CHALK (40s, real-estate blazer, laminated clipboard) follows her in, sneezing.
7 A Near the back, a gaunt man in a leather apron stands motionless at the workbench with his back to them: OLD HARLAN (70s, hands like roots).
8 D DESMOND: As you can see, the property has character.
9 D TEODORA: It has dust.
10 D DESMOND: Dust is character that has been left alone.
11 A ¶ Old Harlan does not turn.
12 A Teodora raises her flashlight.
13 A The beam finds his shoulder, and then the bench in front of him, where a small wooden horse sits with its mane half-painted in red.
14 D TEODORA: Excuse me, sir? We didn't know anyone was in here.
15 A ¶ He lifts the brush.
16 A Dips it.
17 A Draws a single, slow line down the horse's neck.
18 A Desmond steps closer, reading his clipboard as he goes, and trips on a coil of rope.
19 A He grabs a hanging horse to steady himself and the chain groans.
20 A Teodora catches the clipboard as it flies, and Harlan lays the brush down without a sound.
21 D DESMOND (whisper): He wasn't on the listing.
22 D TEODORA: Neither was the smell.
23 A ¶ Old Harlan turns.
24 A His face is smooth, painted, a carved face with a hinge at the jaw.
25 A It opens.
26 D OLD HARLAN: Closing time.
27 A ¶ Overhead, every horse begins, very slowly, to turn.

### SCENE s01986 | INT. BONDED WAREHOUSE, WINE CELLAR LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): LEONIE BARTHOLOMEW-ACHEBE, NATE, OBUYA, DOROTHEA PRUITT-LANE, MAXIMILIAN VOSS-KAGAN
1 A ¶ Brick vaults, racks of dusty bottles in wooden crates.
2 A A single bare bulb.
3 A Stairs lead up into darkness.
4 A ¶ LEONIE BARTHOLOMEW-ACHEBE (30s, fraud investigator, leather satchel) kneels at a crate with a flashlight.
5 A NATHANIEL "NATE" OBUYA (40s, warehouse manager, lanyard) hovers behind her.
6 A DOROTHEA PRUITT-LANE (60s, private owner, silver cane) stands at the foot of the stairs.
7 A And leaning in the arch of the next vault, a bottle in his hand, is MAXIMILIAN VOSS-KAGAN (50s, collector, silk scarf).
8 D LEONIE: These are labeled 1982.
9 D NATE: They are 1982.
10 D LEONIE: The cork says 2014.
11 D NATE: Corks are replaced.
12 D LEONIE: Not with a laser-etched date.
13 D DOROTHEA: Nathaniel, what is she talking about?
14 D NATE: Mrs. Pruitt-Lane, it's a routine--
15 D LEONIE (over him): It's not routine. Someone's been decanting new wine into old bottles.
16 D MAXIMILIAN: How very cinematic.
17 D DOROTHEA: Max, be quiet.
18 D MAXIMILIAN: Dorothea, I'm only observing.
19 D NATE (to Maximilian): You told me they were authentic.
20 D MAXIMILIAN: They are authentic bottles.
21 D LEONIE (to Maximilian): You sold three hundred of them.
22 D MAXIMILIAN: I sold three hundred bottles of excellent wine.
23 D DOROTHEA: Of 1982.
24 D MAXIMILIAN: Of excellent wine, Dorothea.
25 D NATE: She's going to the police.
26 D LEONIE: Nate, you're making it worse.
27 D NATE (to Leonie): Aren't you?
28 D LEONIE (to Dorothea): Mrs. Pruitt-Lane, your name is on every certificate.
29 D DOROTHEA: My signature, yes.
30 D LEONIE: Your signature authenticates every fake.
31 D DOROTHEA: I authenticated what I was shown.
32 D MAXIMILIAN: She authenticated what she was told.
33 D NATE: By who?
34 D MAXIMILIAN: By you, Nathaniel, you wrote the provenance.
35 D NATE: You told me what to write!
36 D DOROTHEA (sharply): Both of you.
37 A ¶ A long silence.
38 A The bulb buzzes.
39 A Somewhere above, a floorboard creaks.
40 A Leonie lifts her flashlight toward the stairs.
41 D LEONIE: Who else is here?
42 D NATE: No one.
43 D MAXIMILIAN: Just us.
44 D DOROTHEA: Don't lie, Max.
45 A ¶ The beam finds nothing, then a shadow moving on the wall.
46 D LEONIE (low): Nobody move.
47 D MAXIMILIAN: That's the cat.
48 D NATE: We don't have a cat.
49 D DOROTHEA: We have a cat.
50 D NATE: Since when?
51 D DOROTHEA: Since Tuesday. Nathaniel, you should read the memos.
52 A ¶ A clank from above.
53 A All four turn toward the stairs.
54 D LEONIE (whispering): Give me your phones. All of you.
55 D MAXIMILIAN: Absolutely not.
56 D DOROTHEA: Give her yours, Max.
57 D NATE: Mine's dead.
58 D LEONIE: Then you're no use.
59 D NATE: That's harsh.
60 D MAXIMILIAN: That's accurate.
61 D DOROTHEA: Max, the phone.
62 A ¶ Maximilian sighs.
63 A Slides the phone across the stone.
64 A Leonie pockets it.
65 A Her flashlight flickers and dies.
66 A In the darkness, footsteps descend the stairs, heavy, unhurried.
67 D NATE (whispering): That's not the cat.

### SCENE s02260 | EXT. TRACK, MUNICIPAL STADIUM - PRE-DAWN
Detected names (may be incomplete or contain aliases): KALINDA
1 A ¶ Empty bleachers.
2 A Floodlights at half power.
3 A Frost on the infield.
4 A Lane lines glow white.
5 A ¶ KALINDA, thirty-two, a distance runner in a thin jacket and tights, stretches against the starting block, one earbud in, her phone strapped to her upper arm.
6 A A bruise-colored sky pushes against the east wall.
7 A ¶ She checks her watch.
8 A Taps her phone.
9 D KALINDA [V.O.] (her own recorded voice, wry): Day one-oh-seven. Hamstring's tight. Don't be a hero.
10 A ¶ Kalinda grimaces, a small laugh.
11 D KALINDA: Noted.
12 A ¶ She jogs a slow lap.
13 A Her breath puffs in the cold.
14 A At the far curve, she stops, retightens a lace.
15 D KALINDA [V.O.]: Day ninety. Hit the wall at three miles. Cried a little. Kept going.
16 A ¶ She straightens.
17 A Shakes out her arms.
18 A Breaks into a steady pace, long strides, breath in quarter time.
19 D KALINDA [V.O.]: Day sixty. Told Mom I might retire. She said retire from what? I said running. She said, you never started.
20 A ¶ Kalinda snorts.
21 A Rounds the curve.
22 D KALINDA [V.O.]: Day one. Four hundred meters. Walked half. Felt like an idiot.
23 A ¶ She lengthens her stride.
24 A The sky pinks.
25 D KALINDA [V.O.]: Whoever you are today, run like you did on day one. Like you had nothing to prove.
26 A ¶ She nods once to the empty stands.
27 A Runs on, and the floodlights, one by one, click off as dawn takes over.

### SCENE s01450 | EXT. GLASS ORCHARD - TWILIGHT
Detected names (may be incomplete or contain aliases): ORSOLYA THANE, KAEDMON ASH
1 A ¶ An orchard of fruit trees blown from glass.
2 A Trunks of smoky quartz, leaves of green crystal chiming faintly in a wind that smells of cold iron.
3 A Each tree bears hundreds of apples, translucent, glowing from within like lanterns.
4 A A winding path of white gravel leads to a stone well at the center.
5 A ¶ ORSOLYA THANE (60s, gardener, tall, a gown the color of dry moss, silver hair braided to her waist) moves between the trunks with a pair of shears.
6 A She trims nothing; she only touches the leaves, one by one, and listens as each rings a slightly different note.
7 A ¶ At the well, she stops.
8 A Rests a palm on its rim.
9 A From within rises a pale breath of mist.
10 D ORSOLYA (to the orchard): Another year. Another thousand apples. And not one of you has learned to fall.
11 A ¶ The leaves chime, as if in reply.
12 A She takes an apple from a low branch, turns it in her fingers.
13 A Inside, a small flame flickers, steady.
14 D ORSOLYA [CONT'D]: Patience. They said I was good at it.
15 A ¶ She sets the apple on the well's edge.
16 A Another chime, this one deeper, from the roots.
17 A She frowns.
18 A Kneels.
19 A Presses her ear to the quartz trunk.
20 A ¶ A footstep on the gravel.
21 A Not hers.
22 A ¶ KAEDMON ASH (30s, a courier's cloak patched with ravens' feathers, boots soaked to the knee, face gaunt, eyes too bright) steps out between the trees.
23 A He carries a leather satchel against his chest like an infant.
24 D KAEDMON: Gardener.
25 D ORSOLYA: You are not expected.
26 D KAEDMON: Nor am I welcome. I know the ritual.
27 D ORSOLYA: Then you know what the orchard does to those who bring iron.
28 A ¶ He opens his cloak.
29 A A dagger, bare, at his belt.
30 D KAEDMON: I am not the one who needs the iron.
31 A ¶ He reaches into the satchel and withdraws a seed the size of a child's fist, black and rough, ringed in thin gold wire.
32 A The orchard's chimes fall silent.
33 A Every leaf stills.
34 A ¶ Orsolya rises slowly, gripping the shears.
35 D ORSOLYA: Where did you get that?
36 D KAEDMON: Where do you think?
37 D ORSOLYA: From the one who swore never to plant it.
38 D KAEDMON: Promises rot faster than apples.
39 A ¶ He kneels and presses the seed into the white gravel.
40 A The ground shivers.
41 A A hairline crack spreads across the path, and within it a green thread rises, fast, thickening.
42 A Orsolya lunges.
43 A Kaedmon blocks her with his arm; they struggle, her shears tearing his cloak, his dagger skimming her sleeve, until she shoves him against a trunk and the glass sings out in a long, frantic scream.
44 D ORSOLYA: You will kill us all!
45 D KAEDMON: I will wake us.
46 A ¶ The root bursts from the earth, black, glittering, enormous, tearing the well in two.
47 A Apples fall.
48 A Hundreds, thousands, a rain of light, shattering on the gravel, each one releasing its tiny flame, and the orchard ignites, tree after tree, glowing gold and white, until the whole sky is fire and glass.

### SCENE s00035 | INT. FROZEN FOOD WAREHOUSE, WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): ROZ, PETKOVIC, DENNIS ABERNATHY-VOSS, LAZARUS BELL
1 A ¶ Steel racks of frosted boxes.
2 A A vapor cloud rolls off every breath.
3 A The door is frozen shut.
4 A ¶ ROSALIND "ROZ" PETKOVIC (30s, thermal jacket, night inventory clipboard) crouches beside the door, pounding the latch.
5 A Behind her, her coworker DENNIS ABERNATHY-VOSS (40s, beard stiff with frost) paces the aisle.
6 A Between them, hunched on a pallet of peas, sits a stranger in a soaked tuxedo: LAZARUS BELL (50s, slow-blinking, shivering).
7 D ROZ: It's jammed!
8 D DENNIS: Hit it harder!
9 D ROZ: I am hitting it!
10 A ¶ Dennis shoves her aside and throws his shoulder into the door.
11 A It doesn't budge.
12 A They both slump against it, panting.
13 A ¶ Lazarus lifts his head.
14 D LAZARUS: It will not open.
15 D DENNIS: Who the hell are you?
16 D LAZARUS: A man in the wrong place.
17 D ROZ: How did you get in here?
18 D LAZARUS: I walked in. Hours ago. Perhaps days.
19 D DENNIS: Days? We've been here forty minutes.
20 D LAZARUS: You have been here forty minutes. I have been here longer.
21 A ¶ He stands.
22 A His breath doesn't fog.
23 A Roz sees it first and backs away, clipboard hugged to her chest.
24 D ROZ: Dennis.
25 D DENNIS: What?
26 D ROZ: Look at his breath.
27 A ¶ Dennis looks.
28 A Lazarus smiles, apologetic, and spreads his hands.
29 D LAZARUS: I have found it is easier not to tell people.
30 D DENNIS: Tell people what?
31 D LAZARUS: Only that it does not get warmer. That is all.
32 A ¶ Roz grabs Dennis by the sleeve and they both charge the door again, slamming into it together, again and again, until it cracks and bursts open on a blast of loading-dock air.
33 A ¶ They tumble out onto asphalt.
34 A Roz scrambles to look back.
35 A ¶ The freezer door swings gently shut.
36 A Through the shrinking gap, Lazarus raises a hand in farewell.

### SCENE s02041 | INT. REPTILE HOUSE AT THE CITY ZOO - AFTER HOURS
Detected names (may be incomplete or contain aliases): BARNABY OKONKWO-FITCH, PENELOPE ARAKAWA
1 A ¶ Warm, humid air.
2 A Glass terrariums glowing green and amber.
3 A A heat lamp ticks.
4 A A sign reads: "PLEASE DO NOT TAP THE GLASS."
5 A ¶ BARNABY OKONKWO-FITCH (40s, zookeeper, khaki shirt, a bucket of dead mice) whistles tunelessly while he refills water dishes.
6 A His new assistant, PENELOPE ARAKAWA (20s, ponytail, brand-new boots) stands beside him, clutching a clipboard like a shield.
7 D BARNABY: Don't be nervous. They can smell it.
8 D PENELOPE: I'm not nervous.
9 D BARNABY: Your hand is white.
10 D PENELOPE: It's the clipboard. It's heavy.
11 D BARNABY: It's cardboard.
12 A ¶ She lets go.
13 A The clipboard slaps to the floor.
14 A She picks it up.
15 A He pretends not to notice.
16 D BARNABY [CONT'D]: Now. This is Gladys.
17 A ¶ He taps a glass.
18 A Inside, a python the thickness of a fire hose lies coiled around a branch, perfectly still.
19 D PENELOPE: She's lovely.
20 D BARNABY: She's a bit shy.
21 D PENELOPE: I can see that.
22 D BARNABY: She likes it quiet. Soft voices. No sudden moves.
23 D PENELOPE: Understood.
24 D BARNABY: And she hates hats.
25 D PENELOPE: I'm not wearing a hat.
26 D BARNABY: Good. Keep it that way.
27 A ¶ He goes to the next case.
28 A She stays, staring at Gladys, who has not moved.
29 A Penelope tilts her head.
30 A Gladys slowly tilts hers.
31 A ¶ Barnaby returns with a mouse in tongs and the bucket under his arm.
32 A He unlocks the case.
33 A Opens the hatch.
34 A Gladys stirs.
35 D BARNABY [CONT'D] (quiet): Watch.
36 A ¶ The snake unspools.
37 A Slow, silent, hypnotic.
38 A It takes the mouse in a single smooth strike.
39 A Penelope does not flinch.
40 A Barnaby watches her face.
41 D BARNABY [CONT'D]: You're good at this.
42 D PENELOPE: I grew up with a lot of brothers.
43 D BARNABY: That explains it.
44 A ¶ He closes the hatch.
45 A Dusts his hands.
46 A Then, casually, as if it were nothing:
47 D BARNABY [CONT'D]: Penelope.
48 D PENELOPE: Yes?
49 D BARNABY: Do you know why we feed her at night?
50 D PENELOPE: So she's calm for the visitors?
51 D BARNABY: No. Because she's gone.
52 A ¶ A beat.
53 A Penelope looks at the case.
54 A At the coils.
55 A At the branch.
56 A Gladys is exactly where she was.
57 A Perfectly still.
58 D PENELOPE: She's right there.
59 D BARNABY: That's a decoy.
60 D PENELOPE: A what?
61 D BARNABY: We made it. Last Tuesday. I was hoping you wouldn't notice.
62 D PENELOPE (slowly): Where is she?
63 D BARNABY: That's the thing.
64 A ¶ They both look up at the ceiling grate.
65 A A long, heavy thump echoes through the vent.
66 D BARNABY: Don't move.
67 D PENELOPE: Don't move.
68 A ¶ Neither does.
69 A The vent creaks.
70 A Something coils in the dark above them.

### SCENE s02089 | INT. SMALL CLAIMS COURT - LIVESTOCK BARN, COUNTY FAIRGROUNDS - DAY
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE BEAUMONT-LEE, CLERK, WINNIFRED TOLLIVER, ARCHIE, SPENCE, DOROTHEA WEBB, TRUMAN OKONKWO
1 A ¶ A long barn with sawdust floors and a raised dais built from hay pallets.
2 A A flag, a gavel, a laminated seal.
3 A Pens along the walls hold sleepy goats.
4 A The air smells of hay and floor wax.
5 A ¶ JUDGE HORTENSE BEAUMONT-LEE, 60s, in a robe over denim, presides from behind a folding table.
6 A To her left sits the CLERK, WINNIFRED TOLLIVER, 50s, with a stack of forms and a cowbell in lieu of a bailiff's staff.
7 A At the plaintiff's table: ARCHIBALD "ARCHIE" SPENCE, 40s, a farmer in clean overalls.
8 A At the defendant's: DOROTHEA WEBB, 40s, a beekeeper in a veil pushed back.
9 A Between them stands a crate that buzzes faintly.
10 D JUDGE HORTENSE: This court is in session. Mr. Spence, you allege that Ms. Webb's bees ate your clover.
11 D ARCHIE: Not ate, Your Honor. Used.
12 D JUDGE HORTENSE: Used.
13 D ARCHIE: Eight acres. Every blossom. They didn't pay.
14 D DOROTHEA (muttering): Bees don't carry cash.
15 D JUDGE HORTENSE: Ms. Webb, I heard that.
16 D DOROTHEA: It was meant for the record.
17 D WINNIFRED (to the room): Please silence your phones and your livestock.
18 A ¶ In the front row sits TRUMAN OKONKWO, 70s, a fairground vendor in a paper hat, eating a corn dog.
19 D TRUMAN (to the gallery): This is better than the pie contest.
20 A ¶ A goat bleats.
21 A Everyone looks at it.
22 A The Judge sighs and taps her gavel.
23 D JUDGE HORTENSE: Mr. Spence. What do you want?
24 D ARCHIE: Honey.
25 D JUDGE HORTENSE: Ms. Webb. What do you say?
26 D DOROTHEA: I say he's welcome to a jar.
27 D JUDGE HORTENSE: Done. Next case.
28 A ¶ The crate buzzes louder.
29 A Winnifred rings the cowbell.

### SCENE s02108 | INT. FIELD HOSPITAL - STADIUM CONCOURSE - NIGHT
Detected names (may be incomplete or contain aliases): ANSELM OYELARAN-PRICE, KIRSTEN VANTERPOOL, NURSE BEATRIZ HAMMOND-LU, JUDE FAIRCLOUGH
1 A ¶ A concrete concourse beneath the stands, lined with cots.
2 A Overhead, emergency lights flicker.
3 A A banner for a long-ago soccer final hangs askew.
4 A Medics weave between rows.
5 A ¶ DR. ANSELM OYELARAN-PRICE, 50s, in scrubs and a headlamp, bends over a patient.
6 A Across from him, DR. KIRSTEN VANTERPOOL, 40s, snaps off a pair of gloves.
7 A NURSE BEATRIZ HAMMOND-LU, 30s, holds an IV bag aloft like a torch.
8 A A paramedic, JUDE FAIRCLOUGH, 20s, enters pushing an empty gurney.
9 D ANSELM (to Kirsten): We lost the monitor.
10 D KIRSTEN (to Beatriz): Can you bag him?
11 D BEATRIZ: Already am.
12 D ANSELM: Pressure?
13 D KIRSTEN: Falling.
14 D BEATRIZ: He's gone gray.
15 D ANSELM: Start compressions.
16 D KIRSTEN: I've got them.
17 D ANSELM: On three.
18 D KIRSTEN: One.
19 D ANSELM: Two.
20 D BEATRIZ: Three.
21 D JUDE (arriving): What do you need?
22 D ANSELM: Epi, one milligram.
23 D JUDE: Here.
24 D KIRSTEN: Push it.
25 D ANSELM: Pushing.
26 D BEATRIZ: Rhythm?
27 D KIRSTEN: Nothing.
28 D ANSELM: Again.
29 D KIRSTEN: Clear.
30 D JUDE: Clear!
31 A ¶ A pause.
32 A Then a beep, hesitant, weak.
33 A Then another.
34 D BEATRIZ: We've got something.
35 D ANSELM: Pulse?
36 D KIRSTEN: Thready, but there.
37 D ANSELM: Good. Good.
38 D JUDE: Where does he go?
39 D ANSELM: Intensive section. Row four.
40 D KIRSTEN: I'll take him.
41 D ANSELM: No. You'll sit.
42 D KIRSTEN: I'm fine.
43 D ANSELM: You haven't sat in nine hours.
44 D KIRSTEN: Neither have you.
45 D BEATRIZ: Both of you, sit.
46 D ANSELM: We're fine.
47 D KIRSTEN: We're fine.
48 A ¶ Beatriz glares at them.
49 A They sit.

### SCENE s00719 | INT. STARSHIP ARGENT DAWN - ENGINE CORE - SHIP NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER HALLORAN, XIMENA ROJAS-VANCE, BOSUN TUCK, ENSIGN RAVI
1 A ¶ A cathedral of glowing pipes and throbbing coils.
2 A A yellow warning lamp spins.
3 A ¶ COMMANDER HALLORAN, 50s, in a gold-trimmed uniform, grips a rail.
4 A DR. XIMENA ROJAS-VANCE, 40s, a physicist with wild gray hair, taps a console.
5 A BOSUN TUCK, 60s, a grizzled engineer in oil-stained overalls, hauls on a valve wheel.
6 D HALLORAN: Doctor, how long?
7 D XIMENA: Eleven minutes before the core goes critical.
8 D TUCK: Eleven? I said nine.
9 D XIMENA: Your instruments are older than my daughter, Tuck.
10 D TUCK: They've never lied to me.
11 A ¶ ENSIGN RAVI, 20s, in a crisp blue jumpsuit, bursts through the hatch, breathless.
12 D RAVI: Commander! The aft shields are failing!
13 D HALLORAN: Ensign, take the other console.
14 D RAVI: Sir, I haven't been trained --
15 D HALLORAN: Neither was I, when I started.
16 A ¶ Ravi darts to the console.
17 A Ximena and Tuck both reach for the same lever.
18 A Their hands collide.
19 A They glare at each other and then, as one, push.
20 A ¶ The lamp flares white.
21 A The pipes shudder.
22 A Halloran braces, Ravi ducks, Tuck is thrown against the wall.
23 D XIMENA: It's working!
24 D TUCK: Don't say that. Saying it jinxes it.
25 D HALLORAN (quiet): Bosun. Doctor. Ensign. If we get through this, I'm buying the first round.
26 D RAVI: Sir, is that a promise?
27 D HALLORAN: It's an order.
28 A ¶ The core's hum drops to a purr.
29 A The warning lamp dims.
30 A All four slump, grinning.

### SCENE s00062 | INT. ROLLER DERBY RINK, LOCKER ROOM - EVENING
Detected names (may be incomplete or contain aliases): BRUISER, OKONKWO-LARSSON, JOSEFINA ABERNATHY-SILVA, HORTY, BELLAMY-OKORO
1 A ¶ Rows of dented lockers.
2 A Skates on benches like sleeping animals.
3 A A banner on the wall: THE IRON MAIDENS OF MERIDIAN.
4 A The air smells of liniment and nerves.
5 A ¶ BRYNHILDE "BRUISER" OKONKWO-LARSSON (30s, shoulders like a door, face paint half-applied) laces her skates with ferocious focus.
6 A Beside her, rookie JOSEFINA ABERNATHY-SILVA (19, stiff new helmet, wide eyes) copies every move.
7 A Across the room, coach HORTENSIA "HORTY" BELLAMY-OKORO (50s, whistle, tracksuit) leans against a locker with a clipboard.
8 D HORTY: Ladies. Last bout of the season.
9 D BRUISER: We know.
10 D HORTY: Josefina, this is your first jam.
11 D JOSEFINA: I know.
12 D HORTY: You'll be nervous.
13 D JOSEFINA: I'm not nervous.
14 D BRUISER: She's nervous.
15 D HORTY: Good. Nerves keep you alive.
16 A ¶ She blows the whistle once, softly, as a kind of benediction.
17 A Bruiser stands, rolling her neck.
18 D BRUISER: Come on, kid. Stay on my hip.
19 D JOSEFINA: Where's your hip?
20 D BRUISER: Wherever it is when you need it.
21 A ¶ They stack fists.
22 A The crowd roars outside.
23 A A door bangs.
24 A The three women walk out together into a tunnel of light.
