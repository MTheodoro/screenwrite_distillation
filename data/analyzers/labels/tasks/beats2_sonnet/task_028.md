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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00028.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01613 | INT. CIVIL COURTHOUSE - JURY DELIBERATION ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): FOREWOMAN BEATRICE KOWALSKI-DAVIES, JUROR THADDEUS OKAFOR, JUROR PRUDENCE LINDSTROM, JUROR MARCELINO ALVARADO, OFFICER
1 A ¶ A windowless room.
2 A A long laminate table, twelve chairs, a water pitcher.
3 A A wall clock ticking too loudly.
4 A ¶ Four jurors remain after a long lunch.
5 A The rest have filed out for a break.
6 A ¶ FOREWOMAN BEATRICE KOWALSKI-DAVIES (50s, practical blazer, reading glasses) leafs through her notes.
7 A JUROR THADDEUS OKAFOR (30s, hoodie, bitten nails) taps his pen on the table.
8 A JUROR PRUDENCE LINDSTROM (60s, floral blouse, quiet) arranges a row of peppermints in front of her.
9 A And JUROR MARCELINO ALVARADO (40s, work boots, a thermos of coffee) leans back in his chair, staring at the ceiling.
10 D BEATRICE: Let's recap where we are.
11 D THADDEUS: We're nowhere.
12 D PRUDENCE (gently): We're somewhere, dear.
13 D MARCELINO: We're exactly where we started.
14 A ¶ Beatrice sets down her notes, removes her glasses, rubs the bridge of her nose.
15 A Thaddeus stops tapping.
16 A Prudence unwraps a peppermint and offers it across the table.
17 A Marcelino takes it, pops it into his mouth, and Thaddeus declines.
18 A Beatrice puts her glasses back on and looks at each of them in turn.
19 D BEATRICE: The plaintiff says the contract was breached on March third.
20 D THADDEUS: The defendant says it was never signed.
21 D PRUDENCE: The signature looked genuine.
22 D MARCELINO: It looked traced.
23 D BEATRICE: Mr. Alvarado, you keep saying that.
24 D MARCELINO: I keep seeing it.
25 D THADDEUS: I think she's lying. The plaintiff.
26 D PRUDENCE: She didn't seem like a liar.
27 D THADDEUS: The good ones never do.
28 D BEATRICE: We can't convict on a feeling.
29 D THADDEUS: It's not a criminal case.
30 D BEATRICE: We can't find liability on one either.
31 A ¶ Silence.
32 A The clock ticks.
33 A Prudence folds the peppermint wrapper into a small square.
34 A Marcelino drains his thermos.
35 A Thaddeus resumes tapping.
36 A ¶ The door opens.
37 A A court officer leans in.
38 D OFFICER: Madam Foreman, the judge wants to know if you've reached a verdict.
39 D BEATRICE: Not yet.
40 D OFFICER: How much longer?
41 D BEATRICE: Another hour.
42 D OFFICER: I'll tell her.
43 A ¶ The door closes.
44 A Beatrice sighs, takes a fresh sheet, and writes a single word at the top.
45 D THADDEUS: What did you write?
46 D BEATRICE: "Evidence."
47 A ¶ She underlines it twice.
48 A Prudence nods.
49 A Marcelino leans forward.
50 A Thaddeus, last, sets down his pen and slides his chair closer to the table.

### SCENE s00227 | EXT. SALT FLAT, ABANDONED STAGE STOP - NOON
Detected names (may be incomplete or contain aliases): JED, ARROWOOD, MARISOL QUINTANILLA
1 A ¶ White ground.
2 A White sky.
3 A A dead well.
4 A Two hitching posts.
5 A ¶ JEDEDIAH "JED" ARROWOOD (50s, long duster, one glove) sits on a crate.
6 A Whittles.
7 A Doesn't look up.
8 A ¶ Hooves.
9 A Slow.
10 A ¶ MARISOL QUINTANILLA (30s, black hat, rifle across the saddle) rides in.
11 A Stops thirty feet off.
12 A ¶ He keeps whittling.
13 A She keeps still.
14 D JED: Water's bad.
15 D MARISOL: I brought my own.
16 D JED: Figured.
17 A ¶ She swings down.
18 A Boots crunch.
19 A She leaves the rifle on the horse.
20 A ¶ He folds his knife.
21 A Slides it into his boot.
22 D MARISOL: You're a long way from Dodge.
23 D JED: So are you.
24 A ¶ A hawk.
25 A A wind.
26 A Nothing else.
27 A ¶ She walks toward him.
28 A Ten feet.
29 A Five.
30 D MARISOL: Eleven years.
31 D JED: Twelve.
32 A ¶ She stops.
33 A Her hand drifts to the holster.
34 A ¶ He raises his glove hand.
35 A Slow.
36 A Palm out.
37 D JED [CONT'D]: I don't have a gun.
38 D MARISOL: Liar.
39 D JED: Left it in the well.
40 A ¶ She stares.
41 A Then at the well.
42 A Back at him.
43 D MARISOL: Why?
44 D JED: So you'd have to ask.
45 A ¶ She draws.
46 A ¶ He doesn't move.
47 A The barrel shakes.
48 A The hawk screams.
49 A ¶ Then she holsters it, and slaps him once across the face with the flat of her hand.
50 A He takes it.
51 D MARISOL: Now we're even.
52 A ¶ She turns for her horse.
53 A He lets out a breath that's been twelve years in the making.

### SCENE s01857 | INT. PARKING GARAGE LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): NORA VESS, ELISE MARCHETTI
1 A ¶ Concrete.
2 A Sodium light.
3 A A single car, hood up.
4 A ¶ NORA VESS, 30s, journalist.
5 A Leather jacket.
6 A She stands behind a pillar.
7 A ¶ Thirty feet away, in the car's glow, a woman waits.
8 A DR. ELISE MARCHETTI, 50s.
9 A Raincoat.
10 A A briefcase.
11 A ¶ Nora steps out.
12 D NORA: You're early.
13 D ELISE: So are you.
14 D NORA: You said midnight.
15 D ELISE: I said when it was safe.
16 A ¶ Nora walks closer.
17 A Her heels echo.
18 A Elise watches.
19 D NORA: Is it safe?
20 D ELISE: No.
21 D NORA: Then why are we here?
22 D ELISE: Because it won't get safer.
23 A ¶ Elise sets the briefcase on the hood.
24 A Her hands tremble.
25 A She lifts the latches.
26 D ELISE [CONT'D]: Before I open this. One condition.
27 D NORA: Name it.
28 D ELISE: My name stays out of it.
29 D NORA: Your name is the story.
30 D ELISE: Then there's no story.
31 A ¶ Nora folds her arms.
32 A Elise doesn't blink.
33 D NORA: You called me.
34 D ELISE: I know.
35 D NORA: You said they'd kill you.
36 D ELISE: I said they might.
37 D NORA: Does that change the condition?
38 D ELISE: It makes it firm.
39 A ¶ A car engine growls somewhere above.
40 A Both women look up.
41 A The sound passes.
42 D NORA: Where do they park?
43 D ELISE: Level two. Executive spaces.
44 D NORA: Then we have time.
45 D ELISE: We have fifteen minutes.
46 A ¶ Nora pulls a recorder from her jacket and sets it on the hood beside the case.
47 A She presses record.
48 A A red light glows.
49 D NORA: Say it for the tape.
50 D ELISE: I can't.
51 D NORA: Then show me.
52 A ¶ Elise opens the lid.
53 A Papers, hundreds of them, and a small drive.
54 A She lifts a page and holds it under the light.
55 D ELISE: Lot four-four-one-seven. The shipment dates are wrong.
56 D NORA: Wrong how?
57 D ELISE: Backdated. All of them.
58 D NORA: By how long?
59 D ELISE: Six months.
60 D NORA: That's fraud.
61 D ELISE: It's worse.
62 A ¶ She hands the page across.
63 A Nora reads.
64 A Her lips move.
65 A She looks up.
66 D NORA: Those are drug trials.
67 D ELISE: Yes.
68 D NORA: Patients died.
69 D ELISE: Eleven.
70 D NORA: And they knew.
71 D ELISE: They knew in March.
72 A ¶ Nora lets the page fall to the hood.
73 A Her face is pale.
74 D NORA: You signed the reports.
75 D ELISE: I did.
76 D NORA: Then you're in it.
77 D ELISE: I know.
78 D NORA: So why come to me?
79 D ELISE: Because I'd rather go down with the truth than up with the lie.
80 A ¶ Nora studies her.
81 A The light buzzes overhead.
82 A In the distance, a second engine starts.
83 D NORA: Keep talking.
84 D ELISE: Not here.
85 D NORA: Where?
86 D ELISE: Take the case. Go.
87 D NORA: And you?
88 D ELISE (a thin smile): I'll be right behind you.
89 A ¶ Nora snaps the case shut, lifts it, and backs toward the ramp.
90 A Elise watches her go.
91 A The engine closes in.

### SCENE s01711 | INT. AIRPORT LONG-TERM PARKING STRUCTURE - LEVEL 4 - NIGHT
Detected names (may be incomplete or contain aliases): VESTA KORHONEN, ABEL TRUJILLO, SERGEANT LENNOX ODUYA, HAYDEN PRYCE, ZELDA MORROW
1 A ¶ Concrete.
2 A Oil stains.
3 A Sodium lights hum.
4 A A lone car alarm somewhere, then silence.
5 A ¶ VESTA KORHONEN (40s, charcoal coat, briefcase) walks to a sedan, keys out, shoulders tight.
6 A Footsteps echo behind her.
7 A She stops.
8 A They stop.
9 A ¶ She turns.
10 A A man in a gray parka, ABEL TRUJILLO (50s, thick glasses), stands ten feet away, hands visible.
11 D ABEL: Ms. Korhonen.
12 D VESTA: I don't know you.
13 D ABEL: You will.
14 D VESTA: Back off.
15 D ABEL: I'm not armed.
16 D VESTA: Everybody says that.
17 D ABEL: Check me.
18 D VESTA: Absolutely not.
19 D ABEL: Then listen. I worked with your brother.
20 D VESTA: My brother worked alone.
21 D ABEL: He told you that.
22 D VESTA: He told me everything.
23 D ABEL: He told you what he could.
24 D VESTA: Where is he?
25 D ABEL: Not here.
26 D VESTA: Where?
27 D ABEL: I can take you.
28 D VESTA: Why would I go anywhere with you?
29 D ABEL: Because you flew in for this. You wouldn't be here if you didn't half believe me.
30 D VESTA: Don't tell me what I believe.
31 D ABEL: Then tell me yourself.
32 D VESTA: I believe my brother is dead.
33 D ABEL: Is that what they told you?
34 D VESTA: It's what the police told me.
35 D ABEL: And what did you tell yourself?
36 A ¶ She falls silent.
37 A Her grip on the briefcase whitens.
38 A ¶ A third figure steps out of the dark behind Abel: SERGEANT LENNOX ODUYA (30s, patrol uniform, hand on holster).
39 D LENNOX: Mr. Trujillo. Step away from the lady.
40 D ABEL: Officer, there's no need --
41 D LENNOX: Now.
42 A ¶ Abel raises his hands.
43 A Vesta stares at Lennox, then at Abel, then at the ramp.
44 A Two more cars roll up from below, headlights blinding, and a woman and a man, HAYDEN PRYCE (30s) and ZELDA MORROW (40s), step out in dark suits.
45 D HAYDEN: Ms. Korhonen? Federal agents. We need you to come with us.
46 D VESTA: Why?
47 D ZELDA: Because that man isn't who he says.
48 A ¶ Abel meets her eyes, silent, then lowers his hands and turns his palms up: I told you.

### SCENE s00497 | INT. PARKING GARAGE - LEVEL 3 - NIGHT
Detected names (may be incomplete or contain aliases): FRANKIE DELACORTE, MALIK OYELARAN, BLYTHE ARMSTRONG-LEE
1 A ¶ Concrete pillars.
2 A Fluorescent tubes buzzing.
3 A A rented limousine idling with its doors open, bass pulsing faintly from a dance hall a block away.
4 A ¶ FRANKIE DELACORTE (17, rented tuxedo two sizes large, corsage crushed in his fist) sits on the limo bumper.
5 A MALIK OYELARAN (17, his best friend, bow tie hanging) leans against a pillar, spinning a set of car keys on one finger.
6 A BLYTHE ARMSTRONG-LEE (17, Frankie's date, silver dress, heels in one hand) stands at the edge of the headlights, arms folded.
7 A ¶ Nobody speaks for a long while.
8 D MALIK: Well. That was a dance.
9 D FRANKIE: Don't.
10 D MALIK: I'm only saying.
11 D BLYTHE: He's only saying.
12 D FRANKIE: Blythe.
13 D BLYTHE: You said you'd tell him.
14 D FRANKIE: I was going to.
15 D BLYTHE: You said, quote, "Tonight."
16 A ¶ Malik stops spinning the keys.
17 A He looks from one to the other, then at the floor.
18 A Frankie stands, brushes his knees, and takes a step toward Blythe; she steps back; Malik takes a step forward as if to separate them; and all three of them stop at once, caught in the light like three deer on a road.
19 D MALIK: Tell me what?
20 D FRANKIE: Nothing.
21 D BLYTHE: That he's moving to Denver.
22 D MALIK (to Frankie): You told her first.
23 D FRANKIE: Mal.
24 D MALIK: You told her before me.
25 D FRANKIE: It was an accident.
26 D MALIK: How do you accidentally tell someone you're leaving?
27 D BLYTHE: He doesn't leave till August.
28 D MALIK: August is three months.
29 D BLYTHE: Three months is a long time.
30 D MALIK: It's the length of a summer, Blythe.
31 D FRANKIE: Hey. I'm standing right here.
32 D MALIK: Then say something.
33 A ¶ Frankie opens his mouth.
34 A Closes it.
35 A His corsage drops to the concrete.
36 A Malik shoves him, once, in the chest, not hard.
37 A Frankie stumbles back against the limo.
38 A Neither moves.
39 A ¶ Blythe sets her heels on the hood and wraps her arms around herself.
40 A A car alarm chirps somewhere on the level below.
41 D FRANKIE: I didn't want it to end like this.
42 D MALIK: It's not ending. It's Denver.
43 D FRANKIE: It's the same thing.
44 D MALIK: It is not.
45 A ¶ He picks up the corsage.
46 A He hands it back.
47 A Frankie turns it over in his hand, then holds it out to Blythe, who looks at it, takes it, and pins it to Malik's lapel.
48 D BLYTHE: There. Now we all have a flower.
49 D MALIK: I'm not wearing this.
50 D BLYTHE: You are.
51 A ¶ He lets it stay.

### SCENE s01548 | EXT. SALOON PORCH - DUSK
Detected names (may be incomplete or contain aliases): JERRY, ACHTERBERG-NWOSU, DOLLY MAE FAIRWEATHER-ODUYA, GUS, KOWALCZYK-LAW, MADAME PRUDENCE LOCKHART-ADEYEMI
1 A ¶ A false-fronted saloon at the dry end of a dust street.
2 A The sun sinks behind a ridge, throwing long shadows.
3 A A tin windmill clanks.
4 A ¶ SHERIFF JEREMIAH "JERRY" ACHTERBERG-NWOSU, 50s, sits in a rocker with a shotgun across his knees.
5 A He rolls a cigarette with slow, thick fingers.
6 A ¶ On the step below him, DOLLY MAE FAIRWEATHER-ODUYA, 20s, sweeps dust with a broom and does not look up.
7 A Her apron is stained.
8 A ¶ Leaning on a post, a stranger in a flat-brimmed hat watches the street.
9 A AUGUSTUS "GUS" KOWALCZYK-LAW, 40s, drover, spurs jingling when he shifts.
10 D JERRY: Evening, Gus.
11 D GUS: Sheriff.
12 D JERRY: Cattle all watered?
13 D GUS: Every last head.
14 D DOLLY MAE: Don't see why you need a watered cow to rob a bank.
15 A ¶ Jerry's cigarette stops halfway to his lip.
16 A Gus does not move.
17 A The windmill clanks.
18 D JERRY: Dolly Mae.
19 D DOLLY MAE: I'm sweeping, Sheriff.
20 D JERRY: You're talking.
21 D DOLLY MAE: Can't I do both?
22 A ¶ From the far end of the street, a horse picks its way through the dusk, hooves soft in the powder.
23 A Its rider is a woman in black, face shadowed by a widow's veil.
24 A She reins in at the foot of the porch and dismounts with a stiff, practised ease.
25 A ¶ MADAME PRUDENCE LOCKHART-ADEYEMI, 60s, black dress, carpetbag, steel in her eye.
26 A She lifts her veil, studies the three of them one by one, and drops a letter on the porch boards where Jerry will have to look at it.
27 D PRUDENCE: Sheriff. Your name, I'm told, is on this.
28 D JERRY: Ma'am.
29 D PRUDENCE: My husband owned the bank. He died last Tuesday. Someone in this town knows how.
30 A ¶ Jerry lowers the shotgun.
31 A Gus pushes off his post.
32 A Dolly Mae sets down the broom, and for the first time, looks Prudence in the eye.
33 D JERRY: Mrs. Lockhart-Adeyemi, I'm sorry for your loss.
34 D PRUDENCE: Don't be sorry. Be useful.
35 D GUS (low): Ma'am, I'd be careful what you say on this porch.
36 D PRUDENCE: Mr. Kowalczyk-Law. You are the last man in this territory to give me advice on caution.
37 A ¶ Gus' hand drifts to his belt.
38 A Jerry thumbs the shotgun's hammer, easy.
39 A Dolly Mae steps back on the stairs and the broom clatters behind her.
40 A Prudence does not flinch, standing in the half-light with her carpetbag held in front of her like a Bible.
41 D PRUDENCE [CONT'D] (quietly): Someone has until sunrise.
42 A ¶ She steps up onto the porch.
43 A Walks between them, through the swing doors, into the saloon.
44 A The doors flap and settle.
45 D JERRY: Well.
46 D DOLLY MAE: Well.
47 D GUS: Well, hell.
48 A ¶ Jerry takes up the shotgun.
49 A Gus tips his hat.
50 A Dolly Mae gathers her broom.
51 A Not one of them looks at another.

### SCENE s01447 | INT. DIALYSIS UNIT - EVENING
Detected names (may be incomplete or contain aliases): ABEL STONEHOUSE, GWEN, TRAN, SAMIR HADDAD-VOLKOV
1 A ¶ Rows of recliners, each with a machine beside it, each machine with its slow red heartbeat of tubing.
2 A Late sun through blinds.
3 A ¶ ABEL STONEHOUSE (70s, retired carpenter, flat cap in his lap) sits tethered to a machine, a crossword in his free hand.
4 A Beside him, NURSE GWENDOLYN "GWEN" TRAN (40s, scrubs patterned with cartoon owls) adjusts a line.
5 A Across the room, DR. SAMIR HADDAD-VOLKOV (50s, tie loosened, tablet clutched to his chest) reads a chart, then reads it again.
6 D GWEN: Five letters, "to compress."
7 D ABEL: Squeeze.
8 D GWEN: That's six.
9 D ABEL: Press.
10 D GWEN: There it is.
11 D ABEL: I have been doing this since before you were born, Gwen.
12 D GWEN: I was born in 1983.
13 D ABEL: Then since you were in diapers.
14 A ¶ She laughs.
15 A He fills in the squares.
16 A Down the room, Samir hasn't moved.
17 A His thumb slides up and down the edge of the tablet.
18 D GWEN: You're ahead of schedule today.
19 D ABEL: I'm always ahead of schedule.
20 D GWEN: You've been here three hours and not once complained about the chair.
21 D ABEL: The chair's fine.
22 D GWEN: That's what concerns me.
23 A ¶ Samir crosses to them.
24 A His smile is the kind worn for photographs.
25 D SAMIR: Abel. How are the numbers feeling?
26 D ABEL: I don't feel numbers, Doctor. I feel Tuesdays.
27 D SAMIR: Fair. Gwen, a word?
28 D GWEN: Of course.
29 A ¶ She follows him to the hallway.
30 A Abel pretends to resume his crossword but his eyes track them.
31 A Samir speaks low.
32 A Gwen's hand goes to her mouth.
33 A She says something; Samir shakes his head.
34 A She says it again.
35 A ¶ Abel puts down his pen.
36 A ¶ Gwen returns first, composed, face a mask of cheer.
37 D ABEL: That was a long word.
38 D GWEN: It was a short word. The doctor just says it slowly.
39 D ABEL: Gwen.
40 D GWEN: Yes, Abel?
41 D ABEL: Seven letters. "To spare someone the truth."
42 D GWEN (after a beat): I'm not good at crosswords.
43 A ¶ Samir comes up behind her, sets the tablet in Abel's lap, turns the screen.
44 A A graph, a line, a downward slope.
45 A Abel looks at it as he might at a bad joist.
46 D ABEL: That's not a Tuesday.
47 D SAMIR: No.
48 D ABEL: How long?
49 D SAMIR: Abel --
50 D ABEL: I'm a carpenter, Samir. Measure twice.
51 D SAMIR: Months. Perhaps less.
52 A ¶ Abel nods once.
53 A Picks up the pen.
54 A Fills one more square, slowly, in capital letters.
55 D GWEN: What did you write?
56 D ABEL: Seven letters. Protect.
57 A ¶ He folds the crossword, tucks it into his cap, and lowers the cap onto his head.

### SCENE s01342 | INT. HYDROPONIC BAY, GENERATION SHIP HALCYON - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): OKONKWO, LIRA PETROVA, HAMASAKI, TEODORO, GIRL, MBEKI, NEWT
1 A ¶ Green racks, pink grow-lights, mist.
2 A A long table of lettuces.
3 A Four crew in coveralls prune and murmur.
4 A ¶ OKONKWO, 40s, ties off a vine.
5 A LIRA PETROVA, 20s, weighs a tomato.
6 A DR. HAMASAKI, 60s, taps a tablet.
7 A TEODORO, 30s, wipes a lens.
8 A Nobody hurries.
9 D OKONKWO: Third rack's leaning.
10 D LIRA: The blue lamp's out.
11 D TEODORO: I'll fix it.
12 D DR. HAMASAKI: Don't fix it. Replace it.
13 A ¶ A hatch hisses.
14 A A small GIRL, 12, ship-born, hair in two buns, steps in hugging a bucket.
15 A She sets the bucket down and every head turns.
16 D OKONKWO: You're off-shift, little one.
17 D GIRL: I brought worms.
18 D TEODORO: What's your name again?
19 D GIRL: Newt.
20 A ¶ MBEKI, 50s, the bay chief, steps out from behind a rack with a pruning knife.
21 D MBEKI: Newt. Mind the mist.
22 D LIRA (over Okonkwo): Good worms.
23 D TEODORO (over Lira): How many, Newt?
24 D DR. HAMASAKI: Don't count them, Teodoro. Plant them.
25 D NEWT: They don't mind.
26 D DR. HAMASAKI: I'm sure they don't, Newt.
27 A ¶ Okonkwo smiles, ties another vine.

### SCENE s00260 | INT. ABANDONED LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): HARPER OSEI-LINDQVIST, JAZ, ABERNATHY-TRAN, KEZIAH ONYANGO-FALLOWS, MATT, KOWALSKI-BELLO, LOTTIE SUNDARAM-REEVES, KEEPER
1 A ¶ A round room.
2 A Peeling wallpaper the color of old tea.
3 A A cast-iron stove.
4 A A spiral stair winding up into darkness.
5 A Salt crusts the windows.
6 A ¶ Five friends have made camp on the floor with sleeping bags and flashlights.
7 A ¶ HARPER OSEI-LINDQVIST (20s, canvas jacket, mug of instant coffee) sits cross-legged near the stove.
8 A ¶ JASPER "JAZ" ABERNATHY-TRAN (20s, knit cap, deck of cards) shuffles with a nervous flick.
9 A ¶ KEZIAH ONYANGO-FALLOWS (20s, vintage windbreaker, hair in a bandana) reads a tattered logbook by flashlight.
10 A ¶ MATEUSZ "MATT" KOWALSKI-BELLO (30s, flannel, camera tripod) adjusts a lens.
11 A ¶ And LOTTIE SUNDARAM-REEVES (20s, oversized sweater, pale), who hasn't spoken since they arrived, hugs her knees by the window.
12 D HARPER: So the logbook. Read it again.
13 D KEZIAH: "October ninth. Fog thick as wool. The light turns but no ship answers. I hear footsteps on the stair, though I am alone."
14 D JAZ: Spooky.
15 D KEZIAH: "October tenth. The footsteps again. This time they stop at my door."
16 D MATT: Cut it. We can't use this on camera.
17 D JAZ: Why not?
18 D MATT: It's too good. We'll need to reshoot.
19 D HARPER: It's a log, Matt. It's not a script.
20 D KEZIAH: "October eleventh. The door is open. I did not open it."
21 A ¶ A creak from the stair above.
22 A Everyone looks.
23 A Nothing.
24 A Only the dark.
25 D LOTTIE (very quietly): There's something on the stairs.
26 D HARPER: There's nothing.
27 D LOTTIE: There's something.
28 D MATT: Where?
29 D LOTTIE: The third landing.
30 A ¶ Keziah clicks her flashlight toward the third landing.
31 A The beam finds a pale shape, slim and still, standing with its head tilted.
32 A A figure in a keeper's coat, face blurred as if seen through wet glass.
33 D KEZIAH: Oh no.
34 D JAZ: Don't move. Nobody move.
35 D HARPER (through her teeth): Matt, are you filming?
36 D MATT: Yes.
37 D HARPER: Keep filming.
38 A ¶ The figure takes one step down.
39 A The boards creak.
40 A Another.
41 A Jaz drops the cards; they scatter like white birds.
42 A Matt swings the camera.
43 A Lottie rises, steps toward the stair, mesmerized.
44 D KEZIAH: Lottie, don't.
45 D LOTTIE: It wants to show me something.
46 D HARPER: Lottie!
47 A ¶ She grabs Lottie's arm.
48 A Lottie turns, eyes glassy, smiling.
49 D LOTTIE (softly): He's lonely.
50 A ¶ The figure reaches the second landing.
51 A The temperature drops.
52 A Their breath fogs.
53 A The stove flame bends sideways, then goes out.
54 A ¶ Darkness.
55 A Five flashlights jitter.
56 A Five beams find the keeper's coat, now at the bottom of the stair, its face almost clear.
57 A Almost human.
58 D KEEPER (a whisper, a wind): Stay.
59 A ¶ Jaz screams.
60 A Matt backs into the stove.
61 A Keziah slams the logbook shut.
62 A Harper wrenches Lottie back with both hands, and the five of them stumble toward the door.
63 A They crash through it, tumbling onto the wet grass outside.
64 A The sea roars.
65 A The lighthouse beam sweeps over them, steady, impossible, from a lamp that has been dead for forty years.
66 A ¶ They stare up.
67 A The beam swings away.
68 A ¶ Lottie, panting, laughs weakly.
69 D LOTTIE [CONT'D]: Nobody believed me.
70 D MATT (shaking): I got it. I got all of it.
71 D HARPER: Delete it.
72 D MATT: What?
73 D HARPER: Delete it. Please.
74 A ¶ Matt looks at the camera.
75 A At Harper.
76 A At the lighthouse.
77 A He nods.
78 A Presses the button, and the light on the camera goes out.

### SCENE s01221 | INT. LIGHTHOUSE KEEPER'S COTTAGE - KITCHEN - DUSK
Detected names (may be incomplete or contain aliases): HANNELORE VOSS, INGRID VOSS, DESMOND OKAFOR, RADIO, ^INGRID
1 A ¶ A stove, a table, a window full of grey sea.
2 A A radio crackles on the shelf.
3 A ¶ HANNELORE VOSS (60s, retired keeper, sleeves rolled) peels potatoes.
4 A Her daughter INGRID VOSS (30s, city coat still on) hasn't sat down.
5 A ¶ Across the table, DESMOND OKAFOR (40s, estate agent, folder in hand) waits with a patient smile.
6 D HANNELORE: Tea?
7 D DESMOND: We're fine, thank you.
8 D HANNELORE: Ingrid?
9 D INGRID: Mum, sit down.
10 A ¶ Hannelore keeps peeling.
11 A The skin curls into the sink.
12 D DESMOND: The valuation is generous, Mrs. Voss. The Trust will keep the light running.
13 D HANNELORE: It's been running since 1894.
14 D INGRID: It's been failing since 2009.
15 D DESMOND: The structural report was quite specific.
16 A ¶ Hannelore sets down the knife.
17 A Wipes her hands, slowly, on a cloth.
18 D HANNELORE: She read the report before I did. She always was quick.
19 A ¶ Ingrid looks away.
20 D INGRID: Mum.
21 D HANNELORE: Your father painted that railing every spring. She remembers.
22 A ¶ The radio hisses.
23 D RADIO [V.O.] (crackling): Coastguard to Skerry Light. Weather warning. Gale force nine from the northwest by twenty hundred. Over.
24 A ¶ Nobody moves.
25 A Hannelore doesn't reach for the handset.
26 D DESMOND: Shouldn't someone answer that?
27 D HANNELORE: It's a recording. They stopped sending real people years ago.
28 D INGRID: Sign it, Mum.
29 D HANNELORE: She wants me gone before the storm.
30 D INGRID: I want you warm.
31 D HANNELORE: I was warm when she left for London.
32 A ¶ Ingrid's jaw sets.
33 A Desmond slides the folder an inch closer.
34 D HANNELORE [CONT'D]: Don't push that at me.
35 D DESMOND: Mrs. Voss, I only--
36 D INGRID: Just let her breathe.
37 D HANNELORE: Stop talking for me!
38 D DESMOND: It's a standard form!
39 A ¶ Both speak at once.
40 D HANNELORE: You sold the house in Kiel.
41 D ^INGRID: You buried Dad here.
42 A ¶ Silence.
43 A The wind finds the window frame.
44 D HANNELORE: He wanted the sea.
45 D INGRID: He wanted you to leave. He told me. In the hospital.
46 A ¶ Hannelore hurls the potato.
47 A It strikes the wall, bursts, slides down the paint.
48 D HANNELORE: Liar!
49 A ¶ Ingrid doesn't flinch.
50 A Desmond stands.
51 A Nobody sits again.
52 D RADIO [V.O.] (crackling): Coastguard to Skerry Light. Do you copy? Over.
53 A ¶ Hannelore crosses to the shelf.
54 A Picks up the handset.
55 A Looks at it.
56 A Puts it down.
57 A ¶ The pen lies on the folder.
58 A She takes it.
59 T FADE OUT.

### SCENE s02415 | INT. STATION WAGON - HIGHWAY - DAY
Detected names (may be incomplete or contain aliases): MATEUS FERRARI-OKONJO, ILSE, TEODORA, BLAISE, NANDI
1 A ¶ Windows down.
2 A Wind roars.
3 A A cooler wedged between two kids in the back seat.
4 A ¶ MATEUS FERRARI-OKONJO, forties, drives with one hand.
5 A His wife ILSE, forties, navigates with a paper map.
6 A In the back, TEODORA, fourteen, scowls at her phone; BLAISE, eleven, kicks the seat; and baby NANDI, one, gums a rubber giraffe.
7 D BLAISE: Are we there yet?
8 D MATEUS: No.
9 D ILSE: It's another forty minutes.
10 D BLAISE: You said that an hour ago.
11 D TEODORA: Stop kicking.
12 A ¶ He kicks harder.
13 A She slaps his knee.
14 A He yelps.
15 A The baby shrieks.
16 A Mateus turns the radio up.
17 D ILSE: Turn that down.
18 D MATEUS: It's the good part.
19 D ILSE: It's the same part it's always been.
20 D TEODORA: Dad, he's kicking me.
21 D MATEUS: Blaise.
22 D BLAISE: She started it.
23 D ILSE: Mateus, the exit.
24 A ¶ He swerves.
25 A Brakes squeal.
26 A The cooler thumps.
27 A Nandi howls.
28 A A truck blasts its horn.
29 D MATEUS: Sorry. Sorry.
30 D ILSE: You missed it.
31 D MATEUS: I did not.
32 D ILSE: You did.
33 D TEODORA (to Blaise, low): I'm telling Mom you broke the cooler.
34 D BLAISE: I did not!
35 A ¶ The giraffe flies across the car and hits the windshield.
36 A Silence.
37 A The baby laughs.

### SCENE s00228 | INT. TREEHOLLOW ARCHIVE OF THE MOSS-KEEPERS - TWILIGHT
Detected names (may be incomplete or contain aliases): HESPERIA THORNQUILL, OSWIN FERNLEIGH, BRAMBLE-JACK, ILUNA WAVEREAD
1 A ¶ Inside the trunk of a tree so old its heartwood has hollowed into a cathedral.
2 A Shelves of bark scrolls spiral up the walls.
3 A Fireflies drift among them like patient candles.
4 A ¶ At a root-table in the center sit four figures, each with a small lamp.
5 A ¶ HESPERIA THORNQUILL (60s, keeper-in-chief, silver braid to her knees) turns the pages of a mossbound book.
6 A She is calm in the way of those who have never been hurried.
7 A ¶ Beside her, the young scribe OSWIN FERNLEIGH (17, ink to the elbows) copies a line, tongue between his teeth.
8 A ¶ Across from them a travelling tinker, BRAMBLE-JACK (40s, patched coat, pockets that clink), polishes a brass key with his sleeve.
9 A ¶ At the end of the table, a stranger from the river-folk, ILUNA WAVEREAD (30s, damp hair, a shell necklace), sits with her chin in her palm.
10 D HESPERIA (to the table): We begin the evening readings.
11 A ¶ Nobody moves.
12 A The fireflies drift.
13 D OSWIN: Keeper Thornquill, should I record the weather?
14 D HESPERIA: Yes, child. Rain in the east, none in the west.
15 D OSWIN: Rain in the east.
16 A ¶ He writes.
17 A She smiles at the book.
18 D BRAMBLE-JACK (low, to himself): Same rain as yesterday. Same rain as a hundred years.
19 D HESPERIA: Bramble-Jack, if you have a thought, share it with us all.
20 D BRAMBLE-JACK: Nothing, Keeper. Just brass.
21 A ¶ He holds the key up.
22 A It catches a firefly's light.
23 D ILUNA: It's a lovely key.
24 D BRAMBLE-JACK: Isn't it? Found it in a trout.
25 D ILUNA: In a trout?
26 D BRAMBLE-JACK: Don't ask.
27 A ¶ She laughs, soft, and he looks pleased.
28 A ¶ Hesperia closes the book.
29 A Opens another.
30 D HESPERIA: Iluna Wavereads. You came with a question.
31 D ILUNA: I did. Though it's been so peaceful, I almost forgot.
32 D HESPERIA: Ask it anyway.
33 D ILUNA (to the room): The river-folk say a door lies under this tree. They say it opens once a generation.
34 D OSWIN (whispering): The cellar door.
35 D HESPERIA: Oswin.
36 D OSWIN: Sorry, Keeper.
37 A ¶ Hesperia turns a page.
38 A The parchment rustles.
39 D HESPERIA: There is a door. It does not open for questions.
40 D ILUNA: What does it open for?
41 D HESPERIA: Patience.
42 D BRAMBLE-JACK: She's been waiting six years, Keeper. I counted.
43 D HESPERIA: Then six years is not yet enough.
44 A ¶ Iluna sighs, amused rather than defeated.
45 D ILUNA: Oswin, would you like to hear what the river says about the archive?
46 D OSWIN: Please.
47 D ILUNA: It says you keep the quietest place in the whole forest.
48 D OSWIN: It does?
49 D ILUNA: It does. And it says the quiet is the door.
50 A ¶ Hesperia looks up from the book for the first time.
51 A Studies the river-woman a long moment.
52 D HESPERIA: Who taught you that?
53 D ILUNA: Nobody. I listened.
54 D HESPERIA (to herself): Well. Well, well.
55 A ¶ She closes the book on her finger.
56 D HESPERIA [CONT'D]: Bramble-Jack, bring the key.
57 A ¶ He rises, key in his palm, and crosses the root floor.
58 A At the base of the spiral stair, he kneels.
59 A The key fits nothing visible.
60 D BRAMBLE-JACK: Where do I--
61 D HESPERIA: Wherever it is quietest.
62 A ¶ He closes his eyes.
63 A Listens.
64 A Then touches the key to the grain of the wood, and the grain opens, gently, like an eyelid.
65 A ¶ Warm gold light spills across the floor.
66 D OSWIN (to Iluna): You did that.
67 D ILUNA: We all did.
68 A ¶ The fireflies drift toward the light, in no hurry at all.

### SCENE s02303 | INT. FISHING BOAT, MOORED AT DOCK - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RENATA OKAFOR-LINDGREN, GWEN, HARTIGAN
1 A ¶ A deposition held in a wheelhouse.
2 A A stenographer's machine on a tackle crate.
3 A Gulls outside.
4 A The boat creaks.
5 A ¶ ATTORNEY RENATA OKAFOR-LINDGREN, forties, sharp suit, sea-legs unsteady, leans against a bulkhead.
6 A Opposite, in a folding chair, sits CAPTAIN GWENDOLYN "GWEN" HARTIGAN, sixty, weathered, arms crossed.
7 D RENATA: State your name for the record.
8 D GWEN: Gwendolyn Hartigan.
9 D RENATA: And you were the captain on the night of the sixth.
10 D GWEN: I'm captain every night.
11 A ¶ Renata slides a photograph across the crate.
12 A Gwen doesn't look at it.
13 D RENATA: She was found in your hold.
14 D GWEN: She was my deckhand.
15 D RENATA: And she was alive when she boarded?
16 D GWEN: She was alive when she came on. She was alive when she went below.
17 A ¶ Renata taps the photo.
18 A Gwen's jaw tightens.
19 D RENATA: And when she came up?
20 D GWEN: She didn't.

### SCENE s00826 | INT. STARLIGHT ROLLER RINK - NIGHT
Detected names (may be incomplete or contain aliases): NEIL, PRATT, MILDRED ASHCROFT, FITZ
1 A ¶ A mirror ball turns slowly over a dead floor.
2 A Dust lies on the skate rental counter.
3 A Somewhere an old organ wheezes a note and stops.
4 A ¶ CORNELIUS "NEIL" PRATT, fifties, in a rumpled suit, carries a lantern and a ledger.
5 A MILDRED ASHCROFT, sixties, his realtor, follows in a tweed coat with her keys held like a weapon.
6 A FITZ, a lean teenager with a flashlight and a tool bag, brings up the rear.
7 D NEIL: Mildred, you said the power was off.
8 D MILDRED: It is, Neil.
9 D NEIL: Then who is playing the organ?
10 D MILDRED: The building settles. It makes noises.
11 A ¶ Fitz crouches by the wall and pokes at a fuse box.
12 A He whistles through his teeth, a tuneless little line.
13 D FITZ: Mr. Pratt, the box is cold. Dead for years.
14 A ¶ All three turn.
15 A At the far end of the rink, a pair of skates, white leather, laces tied, sits at the edge of the floor, as if someone has just stepped out of them.
16 A ¶ Mildred takes a step back.
17 A Neil steps forward and lifts his lantern.
18 A Fitz swings his flashlight at the skates and holds it there, the beam very steady.
19 D NEIL: Those weren't there when we came in.
20 D MILDRED: Nonsense. They were.
21 D FITZ: Mildred, they weren't.
22 A ¶ Nobody moves.
23 A The mirror ball turns.
24 A Spots of light cross their faces, one after another.
25 A ¶ The skates slide a few inches toward them across the floor, wheels humming.
26 A Neil, Mildred, and Fitz stop breathing together.
27 A The wheels go quiet.
28 D MILDRED (carefully, to nobody): Well. We'll note it in the listing.
29 A ¶ She writes in her notebook, her pen perfectly smooth.
30 A Neil sets down the lantern.
31 D NEIL: Fitz, go and check the doors.
32 D FITZ: They're locked, sir. From outside.
33 A ¶ The organ plays one low chord.
34 A The three of them stay where they are, watching the skates, which do not move again.

### SCENE s00396 | INT. ROOTHOUSE TEAROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ALDOUS, SEREN, PIP, WIDOW HARROWGATE
1 A ¶ A parlor grown inside the hollow of an immense oak.
2 A The walls are living bark, polished by decades of elbows.
3 A Honey-colored light falls through a knothole window, and tiny lanterns of captured fireflies hang from the ceiling on spider-silk.
4 A A kettle on a mushroom-stool burner sings.
5 A ¶ ALDOUS, 70, a wizard in a tea-stained cardigan, pours from a pot shaped like a sleeping badger.
6 A SEREN, 20s, an apprentice in a patched green cloak, stirs her cup and stirs it again.
7 A PIP, 9, a boy with soot on his chin, sits under the table feeding crumbs to something invisible.
8 D ALDOUS: Milk?
9 D SEREN: Please.
10 D PIP: Is it a lot of milk?
11 D ALDOUS: It's enough.
12 D SEREN: It's a bit much.
13 D ALDOUS: You said please.
14 D PIP: Seren said please, I said please, Master Aldous said please.
15 D SEREN: Nobody said please to the cat.
16 D ALDOUS: We have a cat?
17 D PIP: We have a cat under the table.
18 D SEREN: We don't have a cat.
19 D PIP: It's a very quiet cat.
20 A ¶ Aldous passes Seren her tea.
21 A She holds it, not drinking.
22 A She watches the knothole.
23 A ¶ A shadow crosses the window.
24 A The door, a round slab of bark on a leather hinge, swings inward.
25 A WIDOW HARROWGATE, 80s, small and square in a black bonnet, leans on a cane carved from a single antler.
26 A She has the look of a woman who has been on her way for a very long time.
27 D ALDOUS: Mrs. Harrowgate.
28 D WIDOW HARROWGATE: Aldous. You've aged.
29 D ALDOUS: You're early.
30 D WIDOW HARROWGATE: I'm precisely on time. You were always late.
31 D SEREN: Tea?
32 D WIDOW HARROWGATE: Not today, girl.
33 D PIP: Is she the one with the owl?
34 D SEREN: Pip.
35 D WIDOW HARROWGATE: I am the one with the owl.
36 D ALDOUS: Sit, Hester.
37 D WIDOW HARROWGATE: I'll stand.
38 A ¶ She doesn't.
39 A She lowers herself into the nearest chair, set at the head of the table like a throne.
40 A The firefly lanterns brighten very slightly.
41 A Nobody says anything.
42 A Aldous refills his cup.
43 A Seren stirs.
44 A Pip, under the table, tugs at the invisible cat's tail.
45 A The kettle sings on.

### SCENE s00226 | INT. GRAIN ELEVATOR CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LEONIDAS PAPADAKIS, CORA BEAUMONT-TEAGUE
1 A ¶ A cramped booth above a concrete silo.
2 A Dials, a swivel chair, a space heater.
3 A Through the window, conveyor belts hang motionless in the dark.
4 A ¶ LEONIDAS PAPADAKIS (50s, county auditor, windbreaker) sits at the desk with a ledger open.
5 A He checks numbers with a pencil.
6 A He is calm.
7 A ¶ Boots on the iron stairs.
8 A The door opens.
9 A ¶ CORA BEAUMONT-TEAGUE (40s, elevator manager, rolled sleeves) enters with two chipped mugs of coffee.
10 D CORA: Cream?
11 D LEONIDAS: Black's fine.
12 A ¶ She hands him a mug.
13 A He sips.
14 A She doesn't.
15 D CORA: Long drive from the county seat.
16 D LEONIDAS: Two hours. I like the quiet.
17 D CORA: Nothing quieter than a silo at midnight.
18 A ¶ He nods and turns a page.
19 A She studies the back of his head.
20 D LEONIDAS: The weigh tickets for September match the bank deposits.
21 D CORA: Good.
22 D LEONIDAS: October's a little thin.
23 D CORA: Rain. Hauling slowed.
24 D LEONIDAS: Mm.
25 A ¶ He turns another page.
26 A Behind him, a shadow crosses the window.
27 A Cora sees it.
28 A She doesn't blink.
29 D LEONIDAS [CONT'D]: It's the volume I can't square. Four thousand bushels, gone on paper.
30 D CORA: Spillage.
31 D LEONIDAS: That's a lot of spillage.
32 D CORA: It's a big elevator.
33 A ¶ He closes the ledger.
34 A Looks at her for the first time.
35 D LEONIDAS: I'd like to use your phone.
36 D CORA: Line's down.
37 D LEONIDAS: It was working an hour ago.
38 D CORA: Storms.
39 A ¶ There are no storms.
40 A Both of them know it.
41 A ¶ He reaches for the receiver on the wall.
42 A She reaches for it too.
43 A Their hands land on it together.
44 A They freeze, her fingers over his, the heater ticking.
45 D CORA [CONT'D]: Don't.
46 D LEONIDAS: Let go.
47 A ¶ She grips harder.
48 A He twists.
49 A The mugs rattle off the desk and shatter, coffee across the ledger.
50 A They stumble apart, both breathing hard.
51 D LEONIDAS [CONT'D] (softly): I've already sent copies to the state office.
52 A ¶ Cora lets go of the phone.
53 A She sinks into the swivel chair.
54 D CORA: When?
55 D LEONIDAS: Tuesday.
56 A ¶ She begins, quietly, to laugh.
57 D CORA: Then why did you drive out?
58 D LEONIDAS: To give you a chance to explain.
59 A ¶ Outside, the conveyor belts begin to turn on their own.

### SCENE s02200 | INT. COUNTY COURTHOUSE - WITNESS STAND - DAY
Detected names (may be incomplete or contain aliases): JUDGE ODETTE MARCHAND, ATTORNEY RUPERT KLINE, NURSE GWENDOLYN ASARE
1 A ¶ An old courtroom of dark oak and brass, high windows letting in a smear of grey light.
2 A The gallery is half full.
3 A A clock above the door ticks louder than anyone would like.
4 A ¶ JUDGE ODETTE MARCHAND (60s, white hair in a tight bun, reading glasses on a chain) sits behind the bench, hands steepled.
5 A At the prosecution table, ATTORNEY RUPERT KLINE (40s, sharp suit, a habit of straightening his cuffs) rises with a folder.
6 A And on the witness stand, with her hands flat on her knees, sits NURSE GWENDOLYN ASARE (50s, grey cardigan, wedding band worn thin).
7 A ¶ She stares straight ahead.
8 A He crosses slowly toward her.
9 D KLINE: Ms. Asare, thank you for being here.
10 D ASARE: I was subpoenaed.
11 D KLINE: So you were.
12 A ¶ He smiles a little.
13 A She doesn't.
14 A The judge removes her glasses, polishes them on her sleeve, and puts them back.
15 D KLINE [CONT'D]: You were on shift the night of March the ninth.
16 D ASARE: Yes.
17 D KLINE: Alone on the ward?
18 D ASARE: With two aides. One went home sick at midnight.
19 D KLINE: And the patient in bed four, Mr. Fennimore. He was your responsibility.
20 D ASARE: He was.
21 D KLINE: You administered his medication at three a.m.
22 D ASARE: At ten past three.
23 A ¶ Kline pauses.
24 A He had not expected correction.
25 A He glances at the judge.
26 A She gives him nothing.
27 D KLINE: Ten past three. Thank you for the precision.
28 D ASARE: I always chart the time.
29 A ¶ He walks back to his table, lifts a single sheet from the folder, and holds it between two fingers like something dead.
30 D KLINE: This is the medication record. It lists the dose as fifty milligrams.
31 D ASARE: It does.
32 D KLINE: The pharmacy log says five.
33 D ASARE: It says five.
34 D KLINE: So which is right?
35 A ¶ She is silent.
36 A The clock ticks.
37 A Judge Marchand leans forward very slightly.
38 A In the gallery, someone coughs.
39 D KLINE [CONT'D]: Ms. Asare?
40 D ASARE: Both.
41 D KLINE: Both?
42 D ASARE: The pharmacy sent five. I gave fifty.
43 A ¶ A murmur sweeps the room.
44 A Kline sets the sheet down.
45 A He is no longer smiling.
46 D KLINE: Why?
47 D ASARE: Because Dr. Whitfield wrote fifty.
48 D KLINE: And the pharmacy?
49 D ASARE: Made a mistake.
50 D KLINE: And you followed the doctor's order over the pharmacy's.
51 D ASARE: I always do.
52 D KLINE: Even when the numbers disagree?
53 D ASARE: Mr. Kline, I have been a nurse for thirty-one years. When a doctor writes an order, I do not second-guess it.
54 D KLINE: Even when it kills a man?
55 A ¶ She flinches.
56 A Her hand rises, a fraction, then falls back to her knee.
57 D JUDGE MARCHAND: Mr. Kline.
58 D KLINE: Withdrawn, Your Honour.
59 D JUDGE MARCHAND: Ms. Asare, would you like a recess?
60 D ASARE: No, Your Honour.
61 A ¶ She draws a long breath.
62 A Then she raises her eyes, finds the back of the courtroom, and speaks to someone nobody else can see.
63 D ASARE [CONT'D]: I knew when I gave it. I felt the weight of the syringe. I knew.
64 A ¶ The room has gone entirely quiet.
65 A Judge Marchand removes her glasses again and does not polish them this time.
66 D KLINE (gently): Then why did you do it?
67 D ASARE: Because if I questioned him, I would have been wrong. And if I was right, he would have been wrong. And no one wins that.
68 A ¶ She stops.
69 A Her whole body seems to loosen.
70 A The tension of weeks drops out of her shoulders like a coat.
71 D KLINE: Thank you.
72 D ASARE: Is that all?
73 D KLINE: That is all.
74 A ¶ He nods to the judge and sits.
75 A Asare stays where she is for a moment, hands in her lap, and then slowly rises.
76 A Her legs are unsteady.
77 A She walks down from the stand, past the table, past the gallery, to the back door.
78 A ¶ She pushes it open herself.
79 A Light spills in.
80 A She goes out into it.
81 A ¶ Judge Marchand watches the empty doorway.
82 A She picks up her gavel, then sets it down without striking.
83 D JUDGE MARCHAND: We will adjourn until two.

### SCENE s01474 | INT. NIGHT-SHIFT CAR WASH - 3 A.M.
Detected names (may be incomplete or contain aliases): NADIA SZABO, DOM, ACHEBE, OLD HARLAN PRICE, LUIS FERRO, VANCE
1 A ¶ Fluorescent lights.
2 A Wet concrete.
3 A A conveyor hums, empty.
4 A ¶ Four people around a break-room table inside a glass booth.
5 A Vending coffee.
6 A Donuts.
7 A ¶ NADIA SZABO (30s, manager) counts the till.
8 A DOMINIC "DOM" ACHEBE (20s) eats.
9 A OLD HARLAN PRICE (70s) does a crossword.
10 A LUIS FERRO (50s) stirs his coffee for too long.
11 D DOM: Seven letters, "cheerful and quiet."
12 D HARLAN: Serene.
13 D NADIA: That's six.
14 D LUIS (not looking up): Nobody's cheerful at three in the morning.
15 D DOM: I'm cheerful.
16 D NADIA: You're asleep.
17 D HARLAN: Placid. Seven.
18 D DOM: He's eating.
19 D NADIA: Both.
20 A ¶ Quiet.
21 A The conveyor hums.
22 A Headlights sweep the glass.
23 A ¶ A black sedan rolls to the entrance and stops.
24 A Nobody gets out.
25 D NADIA [CONT'D]: Closed sign's on.
26 D HARLAN: Sign's always on.
27 D LUIS (low): Nobody go out.
28 D DOM: Why not?
29 D LUIS: That's the third night. Same car. Same plate. Look at the plate.
30 A ¶ They look.
31 A Dom stops chewing.
32 D HARLAN: Who parks and waits at a car wash?
33 D LUIS: A man who's already clean.
34 D NADIA: Luis...
35 A ¶ The sedan's door opens.
36 A A polished shoe touches wet concrete.
37 A MR. VANCE (50s, camel coat, pleasant face) steps out and walks toward the booth, hands visible, smiling.
38 D LUIS (whispering): He asked me last night where the cameras are.
39 D NADIA: And you said?
40 D LUIS: Nothing.
41 D HARLAN: Good.
42 D DOM: Then why's he coming to ask again?
43 A ¶ Nadia's hand slides under the counter and closes on something cold.

### SCENE s00190 | INT. CABLE CAR CABIN - ALPINE GORGE - NIGHT
Detected names (may be incomplete or contain aliases): SOLVEIG RASMUSSEN, AGENT KAZIMIR DOBRYNIN, LUCIEN FAUREAU, TAMARA QUINN
1 A ¶ A glass box suspended over blackness.
2 A Wind buffets it.
3 A Lights of a village glimmer far below.
4 A ¶ DR. SOLVEIG RASMUSSEN, 40s, grips a metal briefcase.
5 A Opposite her, AGENT KAZIMIR DOBRYNIN, 50s, sits calm, a pistol in his lap.
6 A LUCIEN FAUREAU, 30s, the operator, huddles near the control panel.
7 A TAMARA QUINN, 20s, a journalist with a camera, crouches by the door.
8 A ¶ Static from the radio.
9 A The cabin lurches and stops.
10 D SOLVEIG: Why did we stop?
11 D LUCIEN: Wind. It trips the brake.
12 D KAZIMIR: The wind did not trip it.
13 A ¶ Lucien checks the panel.
14 A Tamara lifts the camera and starts filming.
15 A Kazimir slides a hand over the lens.
16 D KAZIMIR [CONT'D]: No.
17 D TAMARA: Public interest.
18 D KAZIMIR: Private interest. Mine.
19 A ¶ Solveig edges the briefcase behind her knees.
20 A Kazimir notices.
21 A He raises the pistol, not at her, but at the ceiling.
22 A A single shot cracks the roof light.
23 A Wind shrieks in.
24 A Lucien dives for the floor.
25 A Tamara drops the camera.
26 A It skids to the door and tumbles out of a gap.
27 A Solveig lunges for the pistol, and Kazimir catches her wrist.
28 A They struggle.
29 A The cabin swings.
30 D SOLVEIG: Let go.
31 D KAZIMIR: The case, Doctor.
32 D SOLVEIG: It's not yours.
33 D KAZIMIR: It was never yours.
34 A ¶ Lucien crawls toward the panel.
35 A Tamara grabs his ankle.
36 D TAMARA: What are you doing?
37 D LUCIEN: Restarting the brake.
38 D TAMARA: Don't. He'll kill us.
39 D LUCIEN: He'll kill us anyway.
40 A ¶ He hits a lever.
41 A The cabin lurches forward.
42 A Kazimir loses his balance.
43 A Solveig wrenches the pistol free, and it clatters across the floor.
44 A Tamara scoops it up and aims at Kazimir with both hands.
45 D TAMARA [CONT'D]: Sit down.
46 D KAZIMIR: You will not shoot.
47 D TAMARA: Try me.
48 A ¶ Kazimir sits.
49 A Solveig flips the case open: nothing inside but a photograph.
50 A Lucien stares at it.
51 A Kazimir smiles.
52 D SOLVEIG: You wanted a photograph?
53 D KAZIMIR: I wanted the man in it.
54 A ¶ Solveig turns it over.
55 A A name.
56 A Her own.
57 A The cabin glides on into the dark.
58 D LUCIEN (to the room): We're ten minutes from the station.
59 D TAMARA: Then we have ten minutes.
60 D KAZIMIR: For what?
61 D TAMARA: For you to talk.
62 A ¶ Kazimir says nothing.
63 A The wind drops.
64 A Solveig steadies herself on the rail and holds the photograph up to the light.
65 A The faces blur.
66 A The village grows closer below.
67 D SOLVEIG: Who sent you?
68 D KAZIMIR: The man who took your picture.
69 D SOLVEIG: My father took that picture.
70 D KAZIMIR: Yes.
71 A ¶ Tamara's grip on the pistol tightens.
72 A Lucien checks the panel.
73 A The cabin hums.
74 A A light on the dock ahead flashes red.
75 D LUCIEN: Station's alerted.
76 D TAMARA: They'll be waiting.
77 A ¶ Kazimir shrugs.
78 A Solveig folds the photograph into her coat.
79 A The cabin glides into the dock.
80 A The door slides open.
81 A Armed uniformed men fill the platform.
82 D KAZIMIR: Doctor. Ask them whose uniforms those are.
83 A ¶ Solveig looks.
84 A Her face falls.
85 A She takes a step back.
86 D SOLVEIG: Those are my father's.

### SCENE s01670 | INT. FUNICULAR TICKET BOOTH - MORNING
Detected names (may be incomplete or contain aliases): ELOISE VANTERPOOL, DEZ, OKAFOR, PRUDENCE LAWSON, THADDEUS BRIGHT
1 A ¶ A glass booth no bigger than a closet, perched at the bottom of a steep hill railway.
2 A Brass fittings, a gentle hum of cable overhead.
3 A ¶ ELOISE VANTERPOOL (30s, soft-spoken, wearing a belted coat) stamps tickets one by one.
4 A Across the counter, DESMOND "DEZ" OKAFOR (30s, rumpled tweed, a paper bag of pastries) hovers.
5 D DEZ: Eloise, you have stamped that same ticket three times.
6 D ELOISE: Then it's very well stamped, Dez.
7 A ¶ He slides the bag through the slot.
8 A She peeks inside and smiles.
9 D DEZ: Apricot. Your favorite.
10 D ELOISE: You remembered.
11 D DEZ: I remember everything about you. Except where I left my umbrella.
12 A ¶ The booth door opens.
13 A PRUDENCE LAWSON (60s, silver bun, carrying a knitted bag) steps in, shaking the damp from her shoulders.
14 D PRUDENCE: Two for the summit, please. And don't let me interrupt.
15 D ELOISE: You aren't, Mrs. Lawson.
16 D DEZ: You aren't, Mrs. Lawson.
17 D PRUDENCE: Dear me. You two even speak alike.
18 A ¶ A tall man, THADDEUS BRIGHT (40s, conductor's cap), raps on the glass from outside.
19 D THADDEUS: Car's leaving, Prudence! Mind the step!
20 A ¶ Prudence waves, tucks her tickets away, and exits.
21 A Eloise and Dez watch the car rise.

### SCENE s02045 | INT. TRAIN DINING CAR - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR AUGUSTIN BELLWETHER, COUNTESS ISOLDE VON RAMSAUER, PRISCA ABERNETHY-LUND
1 A ¶ A vintage dining car on a night run through the Alps.
2 A White linen, silver cutlery, brass lamps swaying gently.
3 A Pine forests slide past in the dark windows.
4 A ¶ At a corner table, three people share a quiet dinner: INSPECTOR AUGUSTIN BELLWETHER (50s, rumpled tweed, small notebook peeking from a pocket), COUNTESS ISOLDE VON RAMSAUER (60s, pearls, a lorgnette), and a young woman, PRISCA ABERNETHY-LUND (20s, secretary, gloves in her lap).
5 A ¶ The train sways.
6 D BELLWETHER: You were saying, Countess?
7 D ISOLDE: I was saying that I did not like the man.
8 D BELLWETHER: So you said.
9 D ISOLDE: I said it twice. I'll say it a third time.
10 D PRISCA: Countess, please.
11 D ISOLDE: Do not shush me, child. He is dead. I am entitled to my opinion.
12 A ¶ Bellwether sets down his fork.
13 A The lamp swings.
14 A He and Prisca both reach for the salt at once, collide, and stop.
15 A She withdraws her hand with a nervous laugh.
16 A He takes the salt and sprinkles it.
17 D BELLWETHER: Miss Abernethy-Lund, you worked for Mr. Vanterpool.
18 D PRISCA: Three years.
19 D BELLWETHER: And you saw him last at--
20 D PRISCA: Seven. In his compartment. He asked me for a pen.
21 D BELLWETHER: And you gave him one.
22 D PRISCA: Yes.
23 D BELLWETHER: A green one.
24 A ¶ Prisca stares at her gloves.
25 D PRISCA: Yes.
26 D ISOLDE: What of it?
27 D BELLWETHER: There was no pen in the compartment, Countess.
28 A ¶ The train enters a tunnel.
29 A The windows go black.
30 A The lamps flicker.
31 A When they return, the three are in exactly the same positions, though no one is eating.
32 D BELLWETHER [CONT'D] (mildly): It is a small thing. But small things are my profession.
33 D ISOLDE: Inspector, are you accusing my companion?
34 D BELLWETHER: I'm observing. And I would like a quiet dinner. So, if you please, we shall continue after dessert.
35 A ¶ He picks up his fork again.
36 A After a moment, Isolde does the same.
37 A Prisca, pale, follows.

### SCENE s02253 | EXT. CATTLE PEN AT DUSK - SUNDAY
Detected names (may be incomplete or contain aliases): HANK YAZZIE, MILLIE, LAZARUS, PETE
1 A ¶ Dust.
2 A Lowing steers.
3 A A split-rail fence, a bucket, a lantern on a post.
4 A ¶ HANK YAZZIE, forties, leans on the fence.
5 A MILLIE, thirties, a cook in a flour-dusted apron, ladles beans from a pot.
6 A LAZARUS, sixty, a one-eyed drover, sits on an upturned bucket whittling.
7 A PETE, nineteen, new on the crew, brushes a horse.
8 D MILLIE (to everyone): Supper's up.
9 D HANK: Smells good.
10 D LAZARUS: Smells like boots.
11 D MILLIE: Then don't eat it, Laz.
12 D LAZARUS: I'll eat it.
13 D PETE: Mrs. Millie, can I have seconds?
14 D MILLIE: You haven't had firsts.
15 D PETE: I'm planning ahead.
16 D HANK: Pete, how's the bay mare?
17 D PETE: Limping, Mr. Yazzie.
18 D HANK: Which leg?
19 D PETE: Left front.
20 D LAZARUS: It's the right.
21 D PETE: It's the left.
22 D LAZARUS (muttering): Boy can't tell his left from his own elbow.
23 D MILLIE: Lazarus.
24 D LAZARUS: I'm just saying.
25 D HANK: Look at the hoof, Pete. Look, not guess.
26 D PETE: Yes, sir.
27 A ¶ He crouches.
28 A Lifts the mare's foot.
29 A Squints.
30 D PETE [CONT'D]: Stone.
31 D HANK: Pick it out.
32 D LAZARUS: Right front. Told you.
33 D PETE: Left.
34 D LAZARUS: Right!
35 D HANK: Everyone eat.
36 A ¶ They quiet.
37 A Millie passes bowls.
38 A The steers settle.
39 A Lazarus slowly resumes whittling.

### SCENE s00359 | EXT. HOT-AIR BALLOON LAUNCH FIELD - BEFORE DAWN
Detected names (may be incomplete or contain aliases): JUNO ASHFORD, COLM BRADY, PHOEBE LINWOOD
1 A ¶ A cold meadow under a lavender sky.
2 A Dozens of balloons lie limp on the dew, fans roaring, burners flaring orange against the dark.
3 A ¶ JUNO ASHFORD, thirties, a pilot in a quilted vest, checks the basket's rigging.
4 A COLM BRADY, thirties, her ground chief, holds the crown line.
5 A PHOEBE LINWOOD, thirties, a journalist, stands at the basket with a notebook, her scarf wrapped twice.
6 D JUNO (to the crew): Okay, everyone, burners on in two minutes.
7 A ¶ Colm nods.
8 A He glances at Phoebe, then at Juno, then back at Phoebe.
9 A She smiles.
10 A He looks away fast.
11 D PHOEBE (to Juno): Is it always this cold?
12 D JUNO: Always. That's how you know it'll be worth it.
13 A ¶ She takes Phoebe's hand and helps her over the wicker rim.
14 A Colm watches this with an expression he hides.
15 A He busies himself with a knot.
16 D COLM (to himself): Idiot. Idiot. Idiot.
17 D JUNO: What was that?
18 D COLM: Nothing! Rigging.
19 A ¶ The burner roars.
20 A The envelope swells.
21 A Phoebe steps back, awed, and bumps into Juno, and neither of them moves away.
22 A Colm drops the line, picks it up, drops it again.
23 D PHOEBE (to the whole crew): Is anyone else coming up?
24 D COLM (too quickly): I'll hold the ground.
25 D JUNO (to Colm, softly): Colm. Come up.
26 A ¶ He hesitates.
27 A She reaches down a hand.
28 A He takes it.
29 A She hauls him over the rim, and the three of them stand shoulder to shoulder in the basket as the balloon lifts, silent, into the first pink light.

### SCENE s02306 | EXT. WINDMILL FARM, EVENING
Detected names (may be incomplete or contain aliases): EUGENE HAUSER, CORA, PATRICK, WIDOW IMOGENE SPARROW, ISAIAH MOBLEY, TELEGRAPH CLERK
1 A ¶ A single wooden windmill creaks above a dry stock tank.
2 A Beyond it, a wire fence and a field of stubble.
3 A Wind lifts the dust in slow brown ropes.
4 A ¶ On the porch of a low house five people sit in mismatched chairs.
5 A EUGENE HAUSER, seventy, bent, holds a tin cup between his knees.
6 A His daughter-in-law CORA, forty, sits with her sleeves rolled and a bowl of shelled peas in her lap.
7 A Her son PATRICK, fifteen, whittles a clothespin.
8 A A neighbour, WIDOW IMOGENE SPARROW, sixty-five, fans herself with a hat.
9 A And a hired man, ISAIAH MOBLEY, thirty, leans on the rail with his boots crossed.
10 A ¶ He watches the road.
11 A Nobody else does.
12 A The windmill creaks.
13 D CORA: Wind's up.
14 D EUGENE: Been up all day.
15 D IMOGENE: It'll turn.
16 D PATRICK: It always turns.
17 D ISAIAH: Not always.
18 A ¶ They fall quiet.
19 A A far-off hammering echoes from somewhere beyond the hill.
20 D TELEGRAPH CLERK [O.S.] (shouting from the road): Telegram! Telegram for Hauser!
21 A ¶ Cora lifts her head.
22 A Eugene sets down the cup.
23 A Imogene's fan stops.
24 A Patrick looks at the knife in his hand, then at his mother.
25 A Isaiah straightens from the rail, but says nothing, and crosses the yard to the gate.
26 A ¶ He takes the envelope.
27 A He turns it over once.
28 A He carries it back and hands it to Eugene, who holds it without opening it.
29 D EUGENE: Read it, Cora.
30 D CORA: It isn't mine.
31 D EUGENE: Read it anyway.
32 A ¶ She wipes her hands on her skirt, takes the envelope, tears it open.
33 A Her eyes travel down the page and then back up, slowly.
34 A The peas stay in her lap.
35 D CORA [CONT'D]: They want us to sign for the water rights.
36 D EUGENE: That all?
37 D CORA: That's all.
38 D IMOGENE: Thank God.
39 D PATRICK: Is that good?
40 D EUGENE: It's something.
41 A ¶ He takes up the cup again.
42 A The wind drops.
43 A The windmill turns once, slowly, as though remembering how.

### SCENE s01461 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): NANA PHILOMENA, TEODOR
1 A ¶ A low-beamed room that smells of woodsmoke and yeast.
2 A A cast-iron stove ticks.
3 A Copper pans hang from a rack above a scrubbed pine table.
4 A Through the window, frost coats a vegetable garden and a rooster stands on the fence post like a weathervane.
5 A ¶ NANA PHILOMENA (80s, shawl over a flannel nightgown, hands knotted as old rope) kneads dough at the table, her movements slow and exact.
6 A Across from her, her grandson TEODOR (7, pajamas with rocket ships, hair in a cowlick) kneels on a chair, a ball of dough in each fist.
7 D TEODOR: Mine's a rabbit.
8 D NANA PHILOMENA: It looks like a potato.
9 D TEODOR: It's a rabbit potato.
10 A ¶ She smiles, dusts flour from her thumb, and takes his dough.
11 A Pinches two ears from the top.
12 A Hands it back.
13 D NANA PHILOMENA: Now it's a rabbit.
14 A ¶ He sets it on the tray beside the others.
15 A A row of small misshapen animals.
16 A Outside, the rooster crows once, late.
17 D TEODOR: Nana?
18 D NANA PHILOMENA: Mm.
19 D TEODOR: Will you teach me the bread song?
20 D NANA PHILOMENA: There's no song.
21 D TEODOR: Mum says there is.
22 D NANA PHILOMENA: Your mother talks too much.
23 A ¶ She begins to hum, a low, wavering tune, kneading in time.
24 A He hums with her, a half-step off, and neither corrects the other.

### SCENE s02411 | INT. APARTMENT KITCHEN - 3 A.M.
Detected names (may be incomplete or contain aliases): NOREEN CALLAHAN-SINGH, ANSELM CALLAHAN-SINGH
1 A ¶ One lamp.
2 A A wailing baby monitor on the counter, its green bars spiking.
3 A NOREEN CALLAHAN-SINGH, thirties, in a faded T-shirt, jiggles a bottle on the stove, glances at the monitor, flips the burner off, and bangs the pot against the sink while her husband ANSELM CALLAHAN-SINGH, thirties, stumbles in with a blanket over his shoulder, bumps the doorframe, mutters a curse, grabs the bottle out of her hand, and shakes it near his ear to test the heat.
4 D NOREEN: It's too hot.
5 D ANSELM: It's fine.
6 D NOREEN: Test it on your wrist.
7 D ANSELM (to the monitor): Hold on, buddy. Daddy's coming.
8 D NOREEN (to the kitchen): Why is nobody else awake in this building?
9 D ANSELM: They have earplugs.
10 A ¶ She snatches the bottle back, holds it under the cold tap, and hands it over.
11 A He nods once.
12 A She leans on the counter and rubs her eyes as the cries rise to a pitch, then a hiccup, then, somehow, a silence.
13 A ¶ They look at the monitor.
14 A The bars flatten.
15 D NOREEN [CONT'D] (whispering): Don't breathe.
16 D ANSELM (whispering): I'm not.
