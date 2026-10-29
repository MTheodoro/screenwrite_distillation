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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusB/group_07002.json with the Write tool:
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

### SCENE s01036 | INT. THORNQUIST DRESSMAKER'S SHOP - LONDON - DAY (1893)
Detected names (may be incomplete or contain aliases): AGNES THORNQUIST, DELPHINE ARCHAMBAULT, COLONEL ASHBY-GREY, YUSUF HADDAD
1 A ¶ Bolts of silk, a cutting table, a brass dummy in half-pinned lilac.
2 A Rain at the window.
3 A ¶ AGNES THORNQUIST, 40s, pins in her mouth, kneels to a hem.
4 A DELPHINE ARCHAMBAULT, 20s, in her slip, stands on a footstool, arms out.
5 A Her eyes avoid the mirror.
6 A ¶ COLONEL ASHBY-GREY, 60s, enters in a damp greatcoat.
7 A YUSUF HADDAD, 30s, tailor's apprentice, follows with a tape over his shoulder.
8 D ASHBY-GREY: Miss Archambault. Your father sends his regards.
9 D DELPHINE: How kind.
10 A ¶ He sets his hat on the cutting table.
11 A Agnes takes the pins from her mouth.
12 D AGNES: Colonel. We weren't expecting you.
13 D ASHBY-GREY: One doesn't schedule a wedding fitting.
14 D AGNES: It's not yet a wedding.
15 D ASHBY-GREY: It will be Saturday.
16 A ¶ Delphine's arm drops an inch.
17 A Agnes taps it back up.
18 D AGNES: Steady, dear.
19 A ¶ Yusuf unrolls the tape.
20 A Measures the waist.
21 A Says nothing.
22 A His fingers tremble.
23 D ASHBY-GREY: Tighter at the bodice. The family insists.
24 D AGNES: She'll not breathe.
25 D ASHBY-GREY: She'll not need to.
26 A ¶ A silence.
27 A Rain hits the glass.
28 A ¶ Delphine looks into the mirror for the first time.
29 A At herself.
30 A At Yusuf behind her.
31 D DELPHINE: Mr. Haddad. Is the silk imported?
32 D YUSUF: From Damascus, miss.
33 D DELPHINE: How far is that?
34 D YUSUF: Very far.
35 D DELPHINE: How long would it take to go?
36 A ¶ Ashby-Grey turns.
37 A His eyes narrow.
38 D ASHBY-GREY: Miss Archambault.
39 D DELPHINE: Merely curious.
40 A ¶ Agnes rises, sets her pins down, and smooths the bodice.
41 A Her thumb brushes Delphine's wrist.
42 A A pulse passes between them.
43 A Quick, quiet.
44 D AGNES (low): I'll let out the seam tonight.
45 D ASHBY-GREY: Pardon?
46 D AGNES: I said I'll take in the seam tonight.
47 A ¶ Ashby-Grey studies her.
48 A Then Yusuf.
49 A Then the door.
50 D ASHBY-GREY: Saturday. Ten sharp.
51 A ¶ He takes his hat and leaves.
52 A The bell tinkles.
53 A The latch clicks.
54 A ¶ Nobody moves.
55 A Then Delphine steps down off the stool, slow, as if it were a scaffold.

### SCENE s01035 | INT. QUARANTINED CRUISE SHIP - GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): RENATA KOVAC, MILES TOBIN, ADEBAYO ROSS, CAPTAIN HALE
1 A ¶ Shelves of magnets, snow globes, sunscreen.
2 A The registers are dark.
3 A Emergency strips light the floor.
4 A Through the glass storefront, an empty promenade deck rocks gently at anchor.
5 A ¶ RENATA KOVAC, 40s, ship's purser, hair in a messy bun, uniform jacket unbuttoned, sits behind the counter with a radio on her knee.
6 A MILES TOBIN, 30s, ship's doctor, mask around his chin, leans on a shelf.
7 A ADEBAYO ROSS, 50s, passenger, bathrobe, paper slippers, pretends to read a paperback.
8 A ¶ The radio crackles.
9 D CAPTAIN HALE [V.O.]: Shop, this is the bridge. Status.
10 D RENATA (into radio): Three souls, sir. All calm.
11 D CAPTAIN HALE [V.O.]: Keep them there. We've got a boat coming at dawn.
12 D RENATA: Understood.
13 A ¶ She sets the radio down.
14 A The silence returns.
15 D ADEBAYO (to no one): Two weeks on a boat, and the one thing they sell me is snow globes.
16 D MILES: You can have mine.
17 D ADEBAYO: Does it come with a cure?
18 D MILES: It comes with a mild placebo effect.
19 A ¶ Adebayo laughs, then coughs.
20 A Miles straightens, watches him.
21 D MILES [CONT'D] (quietly): Sir, how long has that been going?
22 D ADEBAYO: It's a tickle.
23 D MILES: How long?
24 D ADEBAYO: Since Tuesday.
25 A ¶ Renata stiffens.
26 A She slides her hand slowly toward the radio.
27 D RENATA (to all): Everyone stay exactly where you are.
28 D MILES: Renata.
29 D RENATA: Don't.
30 D MILES: He's not necessarily--
31 D RENATA: You said no one on this deck was symptomatic.
32 A ¶ Miles opens his mouth.
33 A Closes it.
34 D ADEBAYO (muttering): I should've stayed in the cabin.
35 A ¶ The storefront lights flicker.
36 A Outside, a searchlight sweeps the promenade.
37 A Then a second.
38 A Then a third, from a hull that isn't theirs.
39 D RENATA: That's not the dawn boat.
40 D MILES: No.
41 A ¶ She lifts the radio.
42 D RENATA [CONT'D]: Bridge, we have lights on the promenade.
43 A ¶ Static.
44 A Nothing.
45 A She tries again.
46 D RENATA [CONT'D]: Bridge?
47 D CAPTAIN HALE [V.O.] (whispering): Don't open the door. They're not ours.

### SCENE s01060 | INT. LUNAR AGRICULTURAL DOME - CAFETERIA - DAY CYCLE
Detected names (may be incomplete or contain aliases): HALCYON PRYCE, TEODORO FALCONE, CHIOMA UDOH, NADEEM ROUSSEAU, COMMANDER BENEDIKT STONE
1 A ¶ A circular canteen under a clear shell.
2 A Earth hangs in the sky like a blue marble.
3 A Long tables of recycled plastic, trays of steaming something.
4 A A hum of pumps from beneath the floor.
5 A ¶ DR. HALCYON PRYCE, 50s, lead agronomist, white coat over coveralls, sits at a central table stirring something green with a spork.
6 A Across from her, TEODORO FALCONE, 40s, mechanic, grease under his nails, eats a protein bar with no pleasure.
7 A CHIOMA UDOH, 30s, hydroponics tech, tablet propped against a water pouch, scrolls a spreadsheet.
8 D HALCYON: Do you taste that?
9 D TEODORO: It's lunch.
10 D HALCYON: It's kale. Mostly.
11 D TEODORO: It's mostly lunch.
12 D CHIOMA: Cycle three yield is down four percent.
13 D HALCYON: Down from what?
14 D CHIOMA: From the last harvest.
15 D HALCYON: That's not a number. That's a mood.
16 D CHIOMA: Four percent is a number.
17 D HALCYON: It depends on who's counting.
18 D TEODORO: I'm counting calories. Mine are low.
19 D HALCYON: Teodoro, you've been quiet this week.
20 D TEODORO: I'm always quiet.
21 D HALCYON: Quiet-quiet or worried-quiet?
22 D TEODORO: Pump seven is making a sound.
23 D HALCYON: What kind of sound?
24 D TEODORO: A mean one.
25 D CHIOMA: Mean how?
26 D TEODORO: Like a dog that hasn't decided yet.
27 D HALCYON: Have you filed a ticket?
28 D TEODORO: I filed three. Maintenance said "scheduled."
29 D HALCYON: When?
30 D TEODORO: Spring.
31 D HALCYON: It's October.
32 D TEODORO: I'm aware.
33 A ¶ A figure appears at the cafeteria entrance.
34 A NADEEM ROUSSEAU, 20s, intern, lanky, glasses sliding down his nose, balances a tray with the posture of someone who has never carried a tray.
35 A He scans the room and heads toward them.
36 D NADEEM: Is this seat taken?
37 D HALCYON: Sit.
38 D NADEEM: Thank you, Doctor.
39 D HALCYON: Halcyon. Dr. is for formal complaints.
40 D NADEEM: Halcyon. Okay.
41 A ¶ He sits.
42 A Opens his mouth.
43 A Closes it.
44 A Opens it again.
45 D NADEEM [CONT'D]: Sorry. I'm new. Today's my second day.
46 D TEODORO: You'll get used to the food.
47 D NADEEM: Is it always this beige?
48 D CHIOMA: Only on days that end in Y.
49 D NADEEM: What do you do here?
50 D CHIOMA: I keep the plants alive. Teodoro keeps the plants' water alive. Halcyon keeps all of us alive.
51 D HALCYON: Aspirationally.
52 D NADEEM: That's a lot of alive.
53 D HALCYON: On a rock with no air, it's the only job.
54 D NADEEM: I read about the bio-loop in school. Water, nutrients, light. Every molecule counted.
55 D HALCYON: And?
56 D NADEEM: It's more beautiful in a textbook.
57 D HALCYON: It's less beautiful in a textbook. The textbook doesn't smell.
58 D TEODORO (muttering): Pump seven.
59 D NADEEM: Sorry?
60 D CHIOMA: Don't. He'll tell you for an hour.
61 D TEODORO: It's a good story.
62 D CHIOMA: It's a pump.
63 D TEODORO: It's a pump with a personality.
64 D NADEEM: I like pumps.
65 D TEODORO (looking up): Kid, you're hired.
66 D HALCYON: He's already hired.
67 D TEODORO: Then you're promoted.
68 D NADEEM: To what?
69 D TEODORO: To the person who gets to listen.
70 D CHIOMA: Good luck.
71 A ¶ COMMANDER BENEDIKT STONE, 60s, dome administrator, cane tapping, pauses at the end of their table with a tray of nothing but coffee.
72 D BENEDIKT: Dr. Pryce. Mr. Falcone. Is this the new hire?
73 D NADEEM: Yes, sir.
74 D BENEDIKT: Welcome to the Moon. Try not to break it.
75 A ¶ He moves on.
76 A Nadeem laughs, uncertain.
77 A He picks up his spork and tastes the green stuff.
78 A His face does something complicated.
79 D NADEEM: That's really kale.
80 D HALCYON: Told you.
81 A ¶ They eat.
82 A Pumps hum below.
83 A Overhead, Earth turns slowly, blue and white and very far away.

### SCENE s01042 | INT. COMMUNITY CENTER LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH RUTHANNE PIKE, ZEKE, DOM, MEI-LING, COACH
1 A ¶ Dented lockers, wet benches, a whiteboard with a half-erased play.
2 A The fluorescent tubes buzz.
3 A ¶ COACH RUTHANNE PIKE, 50s, whistle around her neck, paces the length of the room.
4 A ZEKE, 20s, taped wrists, sits head down.
5 A DOM, 30s, pulls on a jersey.
6 A MEI-LING, 20s, goalie, rocks on her toes.
7 D COACH (to all): Third period. We're down two.
8 D ZEKE: We're down three.
9 D COACH: Down two. The ref owes us one.
10 D DOM: He owes us two.
11 D MEI-LING (muttering): Ref owes us a kidney.
12 D COACH: Zeke, look at me. Look up.
13 A ¶ He lifts his head.
14 D COACH [CONT'D]: You're the fastest man on this ice.
15 D ZEKE: My knee.
16 D COACH: Your knee's fine.
17 D DOM: Coach, the knee isn't fine.
18 D COACH: Dom, tie your skates.
19 D DOM: They're tied.
20 D COACH: Tie them again.
21 A ¶ Mei-Ling punches her pads, twice.
22 A The sound is a heartbeat.
23 D MEI-LING: Nobody gets past me. Not one.
24 D COACH: That's what I like to hear.
25 A ¶ The horn sounds down the hall.
26 A They rise as one.
27 A Zeke limps, then doesn't.

### SCENE s00002 | INT. DROWNED CATHEDRAL - BEEKEEPERS' LIBRARY - DUSK
Detected names (may be incomplete or contain aliases): TAMSIN HALE, BRAM, PIP, POLLY, SERAPH VANE
1 A ¶ Knee-deep green water fills the nave.
2 A Shelves of wax-sealed books rise like reefs from it, and bees drift between the pillars in slow gold ribbons.
3 A ¶ TAMSIN HALE (20s, barefoot, hair tied with twine) wades along a shelf, tracing spines with two fingers.
4 A Behind her, old BRAM (70s, white beard stained with honey) skims comb into a bucket.
5 A Beside the font, twin girls PIP and POLLY (10, identical, freckled) float paper boats made of recipe pages.
6 D TAMSIN: This one hums.
7 D BRAM: They all hum. Leave it be.
8 D POLLY: Pip says the roof is thinking again.
9 D PIP: I said it was dreaming.
10 A ¶ High above, a pane of old glass lets in the last amber light.
11 A The bees rise toward it, then settle.
12 A ¶ A figure pushes through the west door, shaking water from a long coat of feathers: SERAPH VANE (40s, tall, ink on her lips, a lantern with no flame).
13 A She stops, hearing the hum.
14 A Smiles faintly.
15 D SERAPH: Is the keeper in?
16 D BRAM: The keeper is always in. He's just slow.
17 A ¶ Tamsin slides the humming book back into its place.
18 A The bees go quiet.

### SCENE s01065 | INT. HOUSING COURT - COURTROOM 3 - MORNING
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABBOTT-LUND, LANDLORD DEXTER OLUYEMI, TENANT MARISELA QUINTANILLA, CORNELIUS PRATT
1 A ¶ A cramped courtroom with a leaking ceiling tile and a plastic bucket underneath.
2 A A worn carpet, three rows of benches, a flag on a crooked pole.
3 A ¶ JUDGE HORTENSE ABBOTT-LUND, 60s, reading glasses perched on a long nose, peers over the bench.
4 A LANDLORD DEXTER OLUYEMI, 40s, cufflinks, signet ring, stands at one table.
5 A TENANT MARISELA QUINTANILLA, 30s, in her work uniform from a bakery, flour still on one sleeve, stands at the other.
6 A Beside her, ATTY.
7 A CORNELIUS PRATT, 50s, a threadbare suit, a briefcase with a broken clasp.
8 D ABBOTT-LUND: Mr. Oluyemi, you've served notice?
9 D DEXTER: Yes, Your Honor.
10 D ABBOTT-LUND: Mr. Pratt, you dispute it?
11 D PRATT: We do, Your Honor. My client wasn't informed of the rent increase.
12 D DEXTER: It was posted in the lobby.
13 D MARISELA: There's no lobby. There's a hallway.
14 D DEXTER: Same thing.
15 D MARISELA: There's a hallway with a broken light. I can't read in the dark.
16 D ABBOTT-LUND: Ms. Quintanilla, please address me.
17 D MARISELA: Sorry, Judge.
18 D ABBOTT-LUND: Mr. Pratt, any further objection?
19 D PRATT: Only that Mr. Oluyemi has been collecting rent for a unit that doesn't have a working stove for six months.
20 D DEXTER: I replaced the stove.
21 D MARISELA: With a hot plate.
22 D ABBOTT-LUND: That's enough.
23 A ¶ The bucket under the ceiling tile pings with a single drop.

### SCENE s01077 | EXT. SALT FLATS - ABANDONED RAILWAY SIDING - DAWN
Detected names (may be incomplete or contain aliases): MAJOR ALEKSANDRA VOSS, LIEUTENANT RAFAEL OROZCO
1 A ¶ Glare off the white crust.
2 A A rusting locomotive sits on a rail that leads nowhere.
3 A Smoke on the horizon.
4 A ¶ MAJOR ALEKSANDRA VOSS, 40s, field coat, a bandage across her palm, crouches by the engine's wheel.
5 A Beside her, LIEUTENANT RAFAEL OROZCO, 20s, pale and sunburned, scans the horizon with binoculars.
6 A ¶ She wipes grit from a map.
7 A He lowers the glasses.
8 D OROZCO: Dust on the east road, Major.
9 D VOSS: How much?
10 D OROZCO: A lot.
11 A ¶ She stands.
12 A Squints.
13 A Unfolds the map across the locomotive's flank.
14 D VOSS: Armor, then. Or trucks. We'll know in a minute.
15 A ¶ He doesn't move.
16 A She looks at him.
17 A He is gripping the binoculars hard.
18 D VOSS [CONT'D]: Lieutenant.
19 D OROZCO: Ma'am.
20 D VOSS: Breathe.
21 A ¶ He does.
22 A She takes the glasses from his hands, raises them.
23 A Her jaw sets.
24 D OROZCO: It's trucks?
25 D VOSS: It's both.
26 A ¶ She hands the binoculars back.
27 A He looks again.
28 A Lowers them slowly.
29 D OROZCO: We could hole up in the engine.
30 D VOSS: It's a coffin with a smokestack.
31 A ¶ He nods.
32 A He stares at the rails.
33 A She folds the map, tucks it into her coat, pulls out a small mirror.
34 D OROZCO: What's that for?
35 D VOSS: Signal. If anyone is still listening on that ridge.
36 A ¶ He watches her angle the mirror to the sun.
37 A A flash.
38 A Another.
39 A Another.
40 A She waits.
41 A He waits.
42 A Nothing answers.
43 D OROZCO: Ma'am. If nobody is there?
44 D VOSS: Then we signal anyway.
45 A ¶ She flashes again.
46 A The dust cloud swells on the road.
47 A He pulls his rifle from his shoulder.
48 A She puts her hand on the barrel.
49 A Gently.
50 A He looks at her.
51 D VOSS [CONT'D]: Not yet.
52 A ¶ He lowers it.
53 A The sun climbs higher.
54 A Far off, an engine note rises, like a long breath drawn.
55 A ¶ She keeps flashing the mirror.
56 A He starts to count under his breath.

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

### SCENE s01021 | INT. LIGHTHOUSE LAMP ROOM - DAWN
Detected names (may be incomplete or contain aliases): IGNACIO, WREN
1 A ¶ Salt-streaked glass.
2 A A Fresnel lens the size of a bus shelter, still turning.
3 A Slow.
4 A Heavy.
5 A ¶ IGNACIO, 30s, keeper's wool sweater, kneels at the brass base with an oilcan.
6 A Hands black with grease.
7 A ¶ He hums.
8 A Off-key.
9 A Pleased with himself.
10 A ¶ The hatch bangs.
11 A ¶ He freezes.
12 A Listens.
13 A ¶ Boots on iron stairs.
14 A Coming up.
15 D IGNACIO (muttering): Supply boat's not till Friday.
16 A ¶ The hatch lifts.
17 A A suitcase thumps onto the floor.
18 A ¶ WREN, 30s, soaked to the bone, red scarf plastered to her neck, hauls herself up.
19 A Breathing hard.
20 A Grinning hard.
21 A ¶ He stands.
22 A Oilcan still in hand.
23 D IGNACIO [CONT'D]: No.
24 D WREN: Hello to you too.
25 D IGNACIO: You can't be here.
26 D WREN: I rowed.
27 D IGNACIO: You rowed. Eleven miles.
28 D WREN: Nine. I cut the corner.
29 A ¶ He sets the can down.
30 A Carefully.
31 A Like it might go off.
32 A ¶ She drops her bag.
33 A Wrings out the scarf.
34 A Water pools on the floor.
35 D IGNACIO: You wrote that you were done.
36 D WREN: I wrote a lot of things.
37 D IGNACIO: You wrote one letter. Four lines.
38 D WREN: It was a good four lines.
39 A ¶ He turns away.
40 A Faces the lens.
41 A It sweeps past, throwing fractured light across his face.
42 A ¶ She watches.
43 A Doesn't close the gap.
44 D WREN [CONT'D]: You kept the light on.
45 D IGNACIO: It's a lighthouse.
46 D WREN: You kept it polished.
47 D IGNACIO: It's my job.
48 D WREN (softly): Ignacio.
49 A ¶ He doesn't answer.
50 A His shoulders drop an inch.
51 A ¶ She crosses to the rail.
52 A Rain ticks against the glass.
53 A Far below, the sea is a gray animal, restless.
54 D WREN [CONT'D]: I almost didn't make it. The boat took water by the rocks.
55 D IGNACIO: You could have drowned.
56 D WREN: I know.
57 D IGNACIO: You could have drowned, and I'd have been up here. Oiling a gear.
58 A ¶ She turns.
59 A Their eyes meet.
60 A Held.
61 D WREN: Say it, then.
62 D IGNACIO: Say what?
63 D WREN: Whatever you've been rehearsing.
64 A ¶ A beat.
65 A He shakes his head.
66 A A small, defeated laugh.
67 D IGNACIO: It was better yesterday.
68 D WREN: Try me.
69 D IGNACIO: I missed you.
70 D WREN: I missed you.
71 A ¶ They say it on top of each other.
72 A Neither stops.
73 D IGNACIO: I was angry. I'm still angry.
74 D WREN: I was scared. I'm still scared.
75 A ¶ They stop.
76 A Both laugh.
77 A Short.
78 A Wet.
79 D IGNACIO: You're dripping on my floor.
80 D WREN: You're welcome.
81 A ¶ He picks up a towel from a hook.
82 A Tosses it.
83 A She catches it one-handed.
84 A ¶ She dries her face.
85 A Her hands.
86 A She's slowing down.
87 D WREN [CONT'D]: Is there tea?
88 D IGNACIO: There's a kettle.
89 D WREN: That's not what I asked.
90 D IGNACIO: There's a kettle and a tin that might be tea.
91 D WREN: Might be.
92 D IGNACIO: It's been there since March.
93 D WREN: Brave.
94 A ¶ He crosses to the hatch.
95 A Stops.
96 A Looks down the shaft.
97 D IGNACIO: Stairs are slick. Come on.
98 D WREN: Is that an invitation?
99 D IGNACIO: It's a warning.
100 A ¶ She smiles.
101 A Picks up her suitcase.
102 A He takes it from her before she can protest.
103 A ¶ They descend.
104 A His head vanishes first.
105 A Then hers.
106 A ¶ The lens keeps turning.
107 A Light sweeps the empty room.

### SCENE s01048 | INT. KRVX 91.3 FM - RURAL RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): DEE-DEE HARGROVE, ROLAND TIBBETTS, CAL PINKERTON, CALLER
1 A ¶ A cinderblock studio in a cornfield.
2 A Foam-padded walls, a mixing board with taped-over knobs, a window onto the black field.
3 A A red ON AIR light burns.
4 A ¶ DEE-DEE HARGROVE, 40s, headphones, cardigan, a thermos of tea, sits at the console.
5 A She speaks into the mic in the voice of a lifelong friend.
6 D DEE-DEE: That was Patsy Cline, and you're listening to Night Owls on KRVX. Four a.m. in Calloway County. Roads are clear and the corn is quiet.
7 A ¶ She flicks a switch.
8 A Music slides in.
9 A She leans back.
10 A ¶ ROLAND TIBBETTS, 60s, station engineer, in coveralls, enters with a toolbox and a flashlight.
11 A He sets the box down next to a cabinet of cables.
12 D ROLAND: Transmitter's running hot again.
13 D DEE-DEE: Is it going to melt?
14 D ROLAND: Not tonight.
15 D DEE-DEE: Then let it be.
16 A ¶ He snorts.
17 A Sits on a stool.
18 A Unwraps a sandwich.
19 A ¶ CAL PINKERTON, 20s, intern, lanky, sleepy, shuffles in with an armful of CDs and drops them on the console.
20 A He yawns.
21 D CAL: Request line's been quiet. Except one.
22 D DEE-DEE: Who?
23 D CAL: Doesn't give a name.
24 A ¶ The studio phone blinks.
25 A Dee-Dee pushes a button.
26 A Her mic opens to the caller, softly.
27 D DEE-DEE: KRVX, you're on the air.
28 A ¶ A pause.
29 A Static, then a thin voice, dry as paper.
30 D CALLER [V.O.]: Hello. I'd like to hear "Wild Horses."
31 D DEE-DEE: Of course. Is it for someone?
32 D CALLER [V.O.]: For the three of you.
33 A ¶ Dee-Dee looks up.
34 A Roland stops chewing.
35 A Cal looks at the window.
36 D DEE-DEE: That's very kind. May I ask your name?
37 D CALLER [V.O.]: You can see me.
38 A ¶ Out in the black field, a single flashlight clicks on.
39 A It points toward the studio.
40 A It does not move.
41 A ¶ Cal steps to the glass.
42 A Roland stands, sandwich forgotten.
43 A Dee-Dee keeps her voice steady.
44 D DEE-DEE [CONT'D] (into mic): Here's that request, folks.
45 A ¶ She slides the fader.
46 A The song begins.
47 A In the field, the flashlight goes out.

### SCENE s01067 | INT. VICTORIAN ICE HOUSE - ESTATE GROUNDS - EVENING (1887)
Detected names (may be incomplete or contain aliases): ABIGAIL FENWICK-HALE, TOBIAS RUSK, STRANGER, RUPERT
1 A ¶ A brick dome half-sunk in the earth.
2 A Blocks of ice stacked in straw, sawdust floor, a sharp cold that smells of wet stone.
3 A A lantern hangs from a hook.
4 A Breath clouds in the light.
5 A ¶ ABIGAIL FENWICK-HALE, 30s, housekeeper, shawl over her shoulders, counts blocks with a slate.
6 A TOBIAS RUSK, 50s, groundskeeper, canvas coat, sits on a crate, whittling.
7 A A STRANGER, 40s, in a good coat and muddy boots, stands near the entrance holding a bowler hat.
8 D ABIGAIL (to both): Forty-two blocks. Enough for the garden party.
9 D TOBIAS: Forty-two's plenty.
10 D ABIGAIL: You'll want to turn the straw before the guests arrive.
11 D TOBIAS: I'll do it, Miss Abigail.
12 A ¶ The Stranger clears his throat.
13 D STRANGER: Forgive me. I'm looking for the master of the house.
14 D TOBIAS: He's up at the manor, sir.
15 D STRANGER: I tried the door. Nobody answered.
16 D ABIGAIL: The door is closed after four.
17 D STRANGER: So I discovered.
18 D ABIGAIL: And you are?
19 D STRANGER: A friend of the family.
20 D TOBIAS (under his breath): Never seen him.
21 D ABIGAIL: Which family?
22 D STRANGER: The Ashworths.
23 A ¶ Tobias stops whittling.
24 A The shavings fall.
25 D ABIGAIL: The Ashworths left in March.
26 D STRANGER: Did they? I hadn't heard. I'm afraid I've been abroad.
27 D ABIGAIL: Where abroad?
28 D STRANGER: Calcutta.
29 D ABIGAIL: That's a long way to come for an empty house.
30 D STRANGER: I came for the cold.
31 D ABIGAIL: Pardon?
32 D STRANGER: The ice house. They kept something here, once. A sealed tin.
33 D TOBIAS: Nothing's here but ice, sir.
34 D STRANGER: Of course. I only wished to be certain.
35 A ¶ He turns his hat in his hands.
36 A Raises his eyes.
37 D STRANGER [CONT'D]: My name is Rupert Ashworth. I was supposed to have inherited.
38 A ¶ Abigail's slate slips from her fingers and clatters on the floor.
39 A Tobias rises, knife in hand.
40 D ABIGAIL: Mr. Rupert died in the Punjab. We had the letter.
41 D RUPERT: Reports of my death were premature.
42 D TOBIAS (to Abigail): Miss, I'd stand behind me.
43 A ¶ She doesn't move.
44 A The lantern flickers.
45 D RUPERT: I only want the tin.
46 D ABIGAIL (to the cold air): God help us.
47 D RUPERT: I'd settle for that, too.
48 A ¶ He smiles.
49 A A thin, apologetic, tired smile.
50 A Behind him, the ice house door creaks in the wind, and all three turn to look at it.

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

### SCENE s01089 | INT. FIELD HOSPITAL - CONVERTED CHURCH - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR SIOBHAN DELANEY-WRIGHT, SERGEANT MIKHAIL TERZIC, NURSE ROSALIND PARK-EZEIGWE, PRIVATE OSWIN FALCONER, CORPORAL TEDDY AGUILAR, RADIO
1 A ¶ Pews pushed against the walls.
2 A Cots in the nave.
3 A An altar draped with a bloody sheet.
4 A A lone candle on the pulpit.
5 A Distant artillery, fading.
6 A ¶ MAJOR SIOBHAN DELANEY-WRIGHT, 40s, surgeon, apron stiff with dried blood, writes in a ledger at a pew-desk.
7 A SERGEANT MIKHAIL TERZIC, 30s, bandaged arm, sits on a cot.
8 A NURSE ROSALIND PARK-EZEIGWE, 20s, hair pinned under a cap, adjusts an IV.
9 A PRIVATE OSWIN FALCONER, 18, sleeps in the next cot, face grey.
10 A Nearby, a radio operator, CORPORAL TEDDY AGUILAR, 20s, headphones around his neck, fiddles with a set.
11 D SIOBHAN: Corporal. Anything?
12 D TEDDY: Static, Major.
13 D SIOBHAN: Try the other band.
14 A ¶ He turns the dial.
15 A A voice comes through, clipped and tired.
16 D RADIO [V.O.]: ...say again, Dagger Six, this is Hammer. Enemy withdrawing along the river road. All units hold.
17 A ¶ Siobhan looks up.
18 A So does Mikhail.
19 A Rosalind stills with the IV bag in her hand.
20 D MIKHAIL: They're withdrawing?
21 D TEDDY: That's what it says.
22 D ROSALIND: Then it's over?
23 D SIOBHAN: It's over tonight. Not tomorrow.
24 A ¶ She closes the ledger.
25 A Stands.
26 A Wipes her palms on her apron.
27 A Crosses to Oswin's cot, checks his pulse.
28 A Nods.
29 A Draws the blanket up.
30 D ROSALIND: He'll make it?
31 D SIOBHAN: If he sleeps.
32 A ¶ Mikhail rolls his shoulder, winces, tests the bandage.
33 A Rosalind sets down the IV and crosses to him, unwraps the dressing, checks the wound.
34 A He grimaces.
35 A Teddy turns the volume up, trying for another voice.
36 D MIKHAIL: How is it?
37 D ROSALIND: Clean. You'll keep the arm.
38 D MIKHAIL: That is good. I like the arm.
39 D ROSALIND (dry): So does your wife, I imagine.
40 D MIKHAIL: She likes the other one more.
41 A ¶ They laugh, quietly, careful of the sleepers.
42 A The laugh dies.
43 A The church holds its breath.
44 A Siobhan walks down the aisle between the cots, letting her hand trail along the pews.
45 D RADIO [V.O.]: Dagger Six, copy that. Ceasefire at oh-six-hundred. Repeat, ceasefire at oh-six-hundred.
46 D TEDDY (whispering): Ma'am. Ceasefire. Six a.m.
47 D SIOBHAN (not turning): Thank you, Corporal.
48 A ¶ Teddy pulls the headphones off.
49 A Rubs his face.
50 A Rosalind sits on the end of Mikhail's cot, suddenly unable to stand.
51 A Mikhail pats her shoulder with his good hand.
52 A ¶ At the altar, Siobhan stops.
53 A Lifts the bloody sheet.
54 A Folds it, corner by corner.
55 A Lays it on the stone.
56 A Straightens it.
57 A Steps back.
58 A ¶ Behind her, Oswin stirs, murmurs, and falls still again.
59 A The candle gutters and holds.
60 D SIOBHAN [CONT'D] (to the room): Everyone rest. I'll take first watch.
61 A ¶ Rosalind and Mikhail nod.
62 A Teddy lies back on his cot, the radio on his chest, fading into static and sleep.
63 A Siobhan sits in the front pew, hands folded, eyes on the candle.

### SCENE s00004 | INT. RIVERBOAT CASINO - PRIVATE DINING SALON - NIGHT
Detected names (may be incomplete or contain aliases): HORACE VANDERMEER, NEELY, ABBOTT, MILES KOWALCZYK
1 A ¶ Red velvet.
2 A Brass lamps.
3 A A paddle wheel churns beyond the portholes, and the whole room sways with the current.
4 A ¶ A long table set for three, with a court reporter's absence conspicuous.
5 A At its head sits HORACE VANDERMEER (50s, silver temples, a gray double-breasted suit, a fountain pen he never uncaps).
6 A He is the attorney for the plaintiff.
7 A ¶ Across from him, CORNELIUS "NEELY" ABBOTT (60s, ruddy, a carnation in his lapel, a glass of bourbon sweating at his elbow).
8 A The witness.
9 A Genial.
10 A Rich.
11 A ¶ At the foot of the table, MILES KOWALCZYK (30s, lean, perfect posture, a fresh haircut) arranges his notes.
12 A He represents Abbott.
13 A ¶ A deposition, held on a boat so no one can serve a subpoena in the wrong county.
14 D HORACE: We'll keep this informal, Mr. Abbott.
15 D NEELY: Neely. Everyone calls me Neely.
16 D MILES: Mr. Abbott will answer to his name.
17 D NEELY: Miles, relax. We're among friends.
18 D HORACE: Are we?
19 D NEELY: I hope so.
20 A ¶ Horace smiles.
21 A Uncaps nothing.
22 A Turns a page.
23 D HORACE: You've owned the Gilded Heron for how long?
24 D NEELY: Eleven years. Since my father passed.
25 D MILES: Objection. Relevance.
26 D HORACE: It's a deposition, Mr. Kowalczyk. Objections are noted, not ruled upon.
27 D MILES: Noted, then.
28 D NEELY: Let him ask. I've nothing to hide.
29 A ¶ A waiter pours coffee, withdraws.
30 A The paddle wheel thuds.
31 A Glasses shiver.
32 D HORACE: And the vessel carries how many guests on a Friday?
33 D NEELY: Three hundred, maybe three-fifty.
34 D HORACE: Sprinklers?
35 D NEELY: Of course.
36 D HORACE: Inspected?
37 D NEELY: Every year.
38 D MILES: Mr. Abbott, you needn't elaborate.
39 D NEELY: He's only asking about the boat.
40 D HORACE: Only about the boat.
41 A ¶ He turns another page.
42 A Pleasant.
43 A Unhurried.
44 A He might be reading a menu.
45 D HORACE [CONT'D]: Wonderful. Then let's talk about the fire.
46 A ¶ Neely's glass stops halfway to his lips.
47 D NEELY: Which fire?
48 D HORACE: The one in the engine room, August third.
49 D NEELY: That was minor.
50 D MILES: Mr. Abbott -
51 D NEELY: - a small electrical matter. The crew handled it.
52 D HORACE: The crew locked it.
53 D NEELY: I don't follow.
54 D HORACE: The engine room door. Locked from the outside. Eleven men inside.
55 D MILES: Objection! He's testifying.
56 D HORACE: He is, in fact, answering. Mr. Abbott?
57 D NEELY (too fast): That door sticks. It's old.
58 D HORACE: It sticks from the outside only?
59 D NEELY: It - I wouldn't know.
60 D HORACE: You signed the work order.
61 D NEELY: My signature is on a great many things.
62 D HORACE: This one is dated July thirtieth. Replace latch with exterior bolt. Reason given: theft prevention.
63 A ¶ Silence.
64 A Miles stops writing.
65 A The boat creaks.
66 D MILES: Where did you get that?
67 D HORACE: From the contractor's invoice file. Delivered this morning, with a very nervous apology.
68 D NEELY: He's lying.
69 D HORACE: He's dead, Mr. Abbott. Since Tuesday. His widow brought the file.
70 A ¶ Neely sets down the glass.
71 A It trembles against the saucer.
72 D NEELY: Miles. Say something.
73 D MILES: I'd like a recess.
74 D HORACE: We are on a river, Mr. Kowalczyk. Where would you recess to?
75 D MILES: The deck.
76 D HORACE: Of course.
77 A ¶ Miles stands, then sits again.
78 A He looks at Neely.
79 A Neely won't look at anyone.
80 D NEELY (quietly): It was supposed to be empty.
81 D MILES: Neely, don't -
82 D NEELY: The insurance man said the engine room would be empty at night.
83 D HORACE: And the eleven?
84 D NEELY: They weren't on the schedule.
85 A ¶ Horace finally uncaps the fountain pen.
86 A Writes one line.
87 A The nib scratches.
88 A Loud.
89 D HORACE: That will do for today.
90 A ¶ He caps the pen.
91 A The paddle wheel thuds.
92 A The lamps sway.

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

### SCENE s01043 | INT. ASSAY OFFICE - GOLD RUSH TOWN - DAY (1851)
Detected names (may be incomplete or contain aliases): THADDEUS WHIT, CORNELIA BASS
1 A ¶ A plank room, one window grimed with dust, a counter scarred by a thousand scales.
2 A Weighing pans, crucibles, a brass balance under glass.
3 A ¶ THADDEUS WHIT, 50s, spectacles, black sleeve garters, presides behind the counter.
4 A His fingers are stained yellow from nitric acid.
5 A ¶ The door bangs.
6 A CORNELIA BASS, 30s, trousers and a man's hat, strides in.
7 A Dust to her knees.
8 A A leather pouch swings from her belt.
9 D THADDEUS: We close in ten minutes, madam.
10 D CORNELIA: Then I'll be quick.
11 A ¶ She drops the pouch on the counter.
12 A It thuds.
13 D THADDEUS: What have you got?
14 D CORNELIA: Color.
15 A ¶ He unties the cord.
16 A Pours.
17 A Dull yellow dust pools on a sheet of paper.
18 A ¶ He pinches some.
19 A Rolls it between his fingers.
20 A Holds it to the light.
21 D THADDEUS: Where was this panned?
22 D CORNELIA: Dry Creek.
23 D THADDEUS: Dry Creek has been dry for a year.
24 D CORNELIA: That's why it's called Dry Creek.
25 A ¶ He gives her a thin smile.
26 A Reaches for a vial.
27 D THADDEUS: A drop of acid. For the test.
28 D CORNELIA: Go on.
29 A ¶ He doses the metal.
30 A It stays bright.
31 A He nods.
32 D THADDEUS: It's good.
33 D CORNELIA: I know.
34 D THADDEUS: Twelve dollars an ounce.
35 D CORNELIA: Twenty.
36 D THADDEUS: Fourteen.
37 D CORNELIA: Seventeen and the sack.
38 D THADDEUS: Done.
39 A ¶ He weighs it.
40 A Writes a slip.
41 A Counts bills from a strongbox.
42 A Slides them over.
43 A She doesn't count them.
44 D CORNELIA: You'll be here tomorrow?
45 D THADDEUS: Every day but Sunday.
46 D CORNELIA: Good. I'll bring more.
47 D THADDEUS: Madam, if I may. A woman alone in these hills--
48 D CORNELIA: I'm not alone.
49 D THADDEUS: Your husband?
50 D CORNELIA: My claim. A hundred yards of dirt. And a rifle.
51 D THADDEUS: Ah.
52 A ¶ She tips her hat.
53 A Heads for the door.
54 A Stops with her hand on the latch.
55 D CORNELIA [CONT'D]: Mr. Whit.
56 D THADDEUS: Yes?
57 D CORNELIA: You tested my gold with acid.
58 D THADDEUS: Standard practice.
59 D CORNELIA: And you held it to the light.
60 D THADDEUS: Also standard.
61 D CORNELIA: But you never looked at the weight.
62 A ¶ Thaddeus freezes.
63 A The pen drops from his fingers.
64 D CORNELIA [CONT'D]: That scale tilts two grains left. I've been watching it for three weeks.
65 D THADDEUS: It's properly calibrated.
66 D CORNELIA: It's not.
67 D THADDEUS: I'll ask you to leave.
68 D CORNELIA: You'll ask me nothing.
69 A ¶ She turns back.
70 A Her hand slips beneath her coat.
71 D THADDEUS: Madam.
72 D CORNELIA: Open the strongbox.
73 D THADDEUS: This is robbery.
74 D CORNELIA: It's restitution.
75 A ¶ He doesn't move.
76 A The clock ticks.
77 A Dust drifts through the light.
78 D THADDEUS: There's four hundred dollars.
79 D CORNELIA: There's four thousand. Under the false bottom.
80 A ¶ Thaddeus goes white.
81 A He kneels, trembling, lifts the strongbox's lining.
82 D THADDEUS: How?
83 D CORNELIA: I used to keep books in Sacramento.
84 A ¶ He lays a bundle on the counter.
85 A Then another.
86 A She slides them into her pouch.
87 D CORNELIA [CONT'D] (over his words): We never met.
88 D THADDEUS: We never met.
89 A ¶ They say it together.
90 A She smiles.
91 A He doesn't.
92 A ¶ She leaves.
93 A The door clacks shut.
94 A The bell above it jingles for a long time.

### SCENE s01078 | INT. SKATING RINK CONCESSION STAND - AFTERNOON
Detected names (may be incomplete or contain aliases): JUNE, ABARA, DANNY KOSTOPOULOS, MR. PRUITT
1 A ¶ 1989.
2 A Faded posters of rollerskates.
3 A A disco ball turns slowly over empty hardwood.
4 A The popcorn machine hums.
5 A Behind the counter, a cluttered shelf of mismatched rental skates.
6 A ¶ JUNIPER "JUNE" ABARA, 16, braids and a Walkman, counts quarters into a cash drawer.
7 A She is the only one working.
8 A Her mouth moves silently with whatever she hears.
9 A ¶ The front door chimes.
10 A DANNY KOSTOPOULOS, 17, enters.
11 A Letterman jacket too big for him.
12 A He carries a gym bag.
13 D DANNY: Hey. Is the big room open?
14 D JUNE (pulling off a headphone): Not till four.
15 D DANNY: I'll wait.
16 D JUNE: Suit yourself.
17 A ¶ He sits on a stool.
18 A Taps the counter.
19 A Pretends not to look at her.
20 A She pretends not to notice.
21 D DANNY: Do you work here, like, always?
22 D JUNE: Saturdays. And school nights. And whenever Mr. Pruitt forgets to pay somebody else.
23 D DANNY: That sounds rough.
24 D JUNE: It's okay. I get free popcorn.
25 A ¶ She slides a small bag across the counter.
26 A He takes it.
27 D DANNY: Thanks.
28 D JUNE: Don't tell Pruitt.
29 D DANNY: Wouldn't.
30 A ¶ They sit in friendly quiet.
31 A The disco ball turns.
32 A A speaker crackles overhead.
33 D MR. PRUITT [V.O.] (over the PA): June, did you restock the nacho cheese?
34 D JUNE (calling up at the ceiling): Yes, Mr. Pruitt!
35 D MR. PRUITT [V.O.]: Good girl.
36 A ¶ June rolls her eyes.
37 A Danny almost laughs.
38 A He pulls a folded paper from his jacket.
39 D DANNY: Can I ask you something? Not weird.
40 D JUNE: That's how weird questions start.
41 D DANNY: It's about my sister.
42 D JUNE: Okay.
43 A ¶ He unfolds the paper.
44 A A flyer.
45 A A missing-person flyer, photocopied crooked.
46 A A girl's face, braids like June's.
47 D DANNY: She worked here. Last summer.
48 A ¶ June stops counting quarters.
49 D JUNE: Rosalind.
50 D DANNY: You knew her?
51 D JUNE: I took her shifts. When she left.
52 D DANNY: She didn't leave. She --
53 A ¶ He cuts himself off.
54 A June closes the cash drawer.
55 A Very slowly.
56 D JUNE: Danny. Mr. Pruitt keeps a locked room. Behind the skate lockers.
57 D DANNY: What's in it?
58 D JUNE: I don't know. But Rosalind's jacket is hanging on the door.
59 A ¶ Danny stares at her.
60 A The popcorn machine hums.
61 A The disco ball spins across his face.
62 D DANNY: Show me.
63 D JUNE: Not now.
64 D DANNY: Why not?
65 D MR. PRUITT [V.O.] (over the PA, cheerful): Folks, we're opening the big room early today. Skate on in!
66 A ¶ The doors at the far end of the rink swing open.
67 A Light floods the floor.
68 D JUNE: That's why.
69 A ¶ She reaches under the counter.
70 A Pulls out a ring of keys.
71 A Presses them into his palm.
72 D JUNE [CONT'D]: Four o'clock. When the music's loud. The brass one.
73 D DANNY (barely a whisper): Thank you.
74 D JUNE: Don't thank me yet.
75 A ¶ Danny pockets the keys.
76 A Picks up his gym bag.
77 A Skaters spill through the far doors.
78 A June puts on her Walkman and turns back to the register, calm as a clock.
79 A ¶ The disco ball catches Danny's face one last time as he walks into the crowd.
