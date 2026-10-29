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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00008.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00034 | INT. SALT-PORK STORAGE LOFT, SHIPYARD - EVENING, 1840s
Detected names (may be incomplete or contain aliases): CAPTAIN EZEKIAL HOLLOWAY, SILAS PETHERBRIDGE, OLUWASEUN ADEBAYO, ABIGAIL FINCH, JEREMIAH TUCKER, THEODORE VANE
1 A ¶ A low-beamed room smelling of tar and brine.
2 A Barrels line the walls.
3 A A single oil lamp casts a shaky circle on the planks.
4 A Rain drums the roof.
5 A ¶ Six figures sit on barrel tops around a makeshift table of planks.
6 A ¶ CAPTAIN EZEKIAL HOLLOWAY (50s, weathered, grey queue) presides.
7 A Beside him is his first mate, SILAS PETHERBRIDGE (30s, red whiskers, cheerful).
8 A Across from them sits the shipwright, OLUWASEUN ADEBAYO (40s, broad-shouldered, leather apron).
9 A Next to him, the ship's cook, MRS. ABIGAIL FINCH (60s, spectacles, sleeves rolled).
10 A At the end, young cabin boy JEREMIAH TUCKER (13, freckled, wide-eyed).
11 A Lastly, the agent, MR. THEODORE VANE (40s, black coat, ink-stained fingers) sits stiffly apart.
12 D HOLLOWAY: Gentlemen. Madam. We sail Thursday if the weather holds.
13 D PETHERBRIDGE: It won't, Captain.
14 D HOLLOWAY: It will if I will it so.
15 D ADEBAYO: The hull will hold. The cargo is another question.
16 D VANE: The cargo is insured.
17 D FINCH: Insured against what, Mr. Vane? A woman cannot pickle a drowned ship.
18 D VANE: Against everything, Mrs. Finch.
19 D PETHERBRIDGE: Except honesty.
20 D JEREMIAH: Sir, what is the cargo?
21 A ¶ Silence.
22 A Vane looks to Holloway.
23 A Holloway looks at his hands.
24 D HOLLOWAY: Tea, boy.
25 D JEREMIAH: Only tea?
26 D ADEBAYO (gently): Tea and what comes with it.
27 D VANE: Mr. Adebayo, I would remind you of your contract.
28 D ADEBAYO: I made the contract in good faith. I did not know the ship was meant for Lisbon.
29 D FINCH: Lisbon.
30 D VANE: A port like any other.
31 D PETHERBRIDGE: Not for what we carry.
32 D HOLLOWAY: Enough.
33 A ¶ A long pause.
34 A Rain on the roof.
35 D JEREMIAH: I don't mind, sir. I can keep quiet.
36 D FINCH (softly): That, child, is exactly what worries me.

### SCENE s01553 | INT. LOCKER ROOM - HALFTIME
Detected names (may be incomplete or contain aliases): ODUYA-LINDGREN, JAZZ, ABERNATHY-OKORO, COACH, DEE, KOWALCZYK
1 A ¶ Sweat, steam, rattling lockers.
2 A A whiteboard scrawled with arrows.
3 A ¶ COACH MARGUERITE "MAGS" ODUYA-LINDGREN, 50s, paces with a clipboard.
4 A The team captain, JASMINE "JAZZ" ABERNATHY-OKORO, 20s, sits on a bench with a towel over her head.
5 D COACH: Fourteen down.
6 D JAZZ: I know.
7 D COACH: Fourteen.
8 D JAZZ: I know, Coach.
9 D COACH: She knows, she says.
10 D JAZZ: We know.
11 A ¶ The coach slams the clipboard against a locker.
12 A Jazz flinches.
13 A She pulls the towel off, wipes her face, and doesn't look up.
14 D COACH [CONT'D]: They run the same play every time. Every single time.
15 D JAZZ: So why can't we stop it?
16 D COACH: Because you're watching the ball.
17 D JAZZ: We're supposed to watch the ball!
18 D COACH: You're supposed to watch the hips!
19 A ¶ The door bangs.
20 A A rookie stands there, sweating.
21 A DESHAWN "DEE" KOWALCZYK, 19, number twelve, helmet under her arm.
22 D DEE: Coach. Can I say something?
23 D COACH: No.
24 D JAZZ: Yes.
25 D DEE: I see it. The tell. The left shoulder drops before the screen.
26 A ¶ Silence.
27 A The coach turns.
28 A Jazz lifts her chin.
29 D COACH: Say that again.
30 D DEE: Left shoulder. Every time.
31 D JAZZ (standing): Then we hit it.
32 D COACH: Then we hit it.

### SCENE s01185 | EXT. DRIVE-IN THEATER - NIGHT
Detected names (may be incomplete or contain aliases): SADIE QUILLEN, STRANGER, BIG TOMMY SERRANO, DETECTIVE LUCIA ORTEGA, ELIAS
1 A ¶ A black-and-white monster movie flickers on the screen.
2 A Rows of empty cars.
3 A One pickup parked dead center.
4 A ¶ SADIE QUILLEN (30s, trench coat) slides out of her sedan.
5 A Walks the aisle.
6 A Hands in pockets.
7 A ¶ A STRANGER (40s, flat cap) sits on the pickup's tailgate.
8 A Eating popcorn.
9 D SADIE: You're early.
10 D STRANGER: You're slow.
11 A ¶ Behind him, BIG TOMMY SERRANO (50s, enormous, suspenders) rises from the truck bed.
12 A Silent.
13 A Holding a tire iron.
14 D SADIE: You brought a friend.
15 D STRANGER: Insurance.
16 A ¶ Sadie smiles.
17 A A click in the dark.
18 A From another car, a gun barrel.
19 A DETECTIVE LUCIA ORTEGA (40s, badge on a chain) steps into the screen's glow.
20 D ORTEGA: Hands up. All of you.
21 A ¶ Tommy swings.
22 A Sadie ducks.
23 A The Stranger hurls popcorn.
24 A Ortega fires into the sky.
25 A Everyone dives.
26 A The film's monster roars on the screen.
27 A ¶ Sadie rolls under the pickup.
28 A Tommy drops the iron.
29 D ORTEGA [CONT'D] (to the Stranger): Name.
30 D STRANGER: Elias Brandt.
31 D ORTEGA: Elias. Thank you.
32 D ELIAS (softly): Wait. Wrong answer.
33 A ¶ He grins.
34 A The truck's engine roars to life.

### SCENE s01593 | INT. COUNTY ARCHIVE - READING ROOM - RAINY AFTERNOON
Detected names (may be incomplete or contain aliases): TEDDY, BRANDT, EZEKIEL FAIRBANKS, MIRIAM ACHTERBERG
1 A ¶ High windows, streaked with rain.
2 A Oak tables.
3 A Green-shaded lamps.
4 A The hush of paper.
5 A ¶ THEODORA "TEDDY" BRANDT (40s, cardigan, a pencil behind her ear) turns the pages of a bound ledger with white cotton gloves.
6 A At the next table, EZEKIEL FAIRBANKS (60s, tweed, a magnifying glass on a cord) reads a yellowed newspaper.
7 A And behind the desk, the archivist MIRIAM ACHTERBERG (50s, bun, reading glasses on her forehead) sorts index cards.
8 A ¶ Teddy stops on a page.
9 A Lifts a corner with her pencil.
10 A Looks again.
11 A ¶ She glances at Ezekiel.
12 A He is watching her over the top of his newspaper.
13 A They both look away.
14 D MIRIAM (to the room): Reading room closes at five, everyone.
15 A ¶ Neither responds.
16 A ¶ Teddy photographs the page with her phone, the shutter click loud in the silence.
17 A Miriam's eyes flick up, then down.
18 A She files a card.
19 A ¶ Ezekiel rises, stretches, and strolls to Teddy's table.
20 A He glances at the ledger.
21 A His face stays perfectly polite.
22 D EZEKIEL: Interesting hand. Eighteen-nineties?
23 D TEDDY: Eighteen-ninety-four.
24 D EZEKIEL: Mm. I hear the county clerk was a drinker.
25 D TEDDY: I hear a lot of things.
26 A ¶ He nods.
27 A Returns to his table.
28 A Sits.
29 A Turns a page of his newspaper without reading it.
30 A ¶ Teddy takes a slow breath and closes the ledger.
31 A She slips off one glove, then the other, and folds them over the cover.
32 D MIRIAM (to herself): Someone always takes that one.
33 A ¶ Teddy looks up.
34 A Miriam keeps sorting.
35 D TEDDY: Which one?
36 D MIRIAM: The hand.
37 D TEDDY: You've seen it?
38 D MIRIAM: It's gone out four times this year.
39 A ¶ Ezekiel's newspaper lowers a fraction.
40 A Rain presses at the glass.
41 D TEDDY: Who else?
42 D MIRIAM: I can't say. Patron privacy.
43 D TEDDY: Of course.
44 A ¶ Teddy gathers her things.
45 A Stands.
46 A Walks to the desk and slides the ledger across.
47 D TEDDY [CONT'D]: Thank you.
48 D MIRIAM: Come again.
49 D TEDDY: I'll try.
50 A ¶ She leaves.
51 A The door sighs shut behind her.
52 A ¶ Ezekiel folds his newspaper, tucks it under his arm, and approaches the desk.
53 D EZEKIEL: The same one, please.
54 A ¶ Miriam lifts the ledger.
55 A Holds it for a moment.
56 D MIRIAM: It's very popular today.
57 A ¶ She passes it over.
58 A He opens it to the marked page.
59 A Smiles very slightly.
60 A Takes out his own phone.

### SCENE s02421 | INT. BOWLING ALLEY BASEMENT - ROLLER DERBY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): WANDA, PRUITT, DELPHINE ARCEMENT, SUNNY MAKOA, MARGUERITE VOSS, GUS TREMAINE, TINY FOLAU
1 A ¶ Cinderblock walls, a leaking pipe, the muffled thunder of strikes overhead.
2 A Benches bolted to the floor.
3 A A whiteboard reads "SEMIFINAL."
4 A ¶ WANDA "WRECKER" PRUITT (30s, captain, stitches over one eyebrow) laces her skates.
5 A Beside her, DELPHINE ARCEMENT (20s, rookie jammer, wide-eyed) tapes her wrist guards.
6 A ¶ SUNNY MAKOA (40s, blocker, built like a refrigerator) eats a banana.
7 A MARGUERITE VOSS (50s, coach, tracksuit, whistle) paces.
8 A GUS TREMAINE (60s, bout announcer, headset around his neck) leans in the doorway.
9 A TINY FOLAU (20s, pivot, five-foot-nothing, enormous voice) sits on a cooler.
10 D MARGUERITE: Listen up. We are down two points in the standings and they have the best jammer in the league.
11 D WANDA: Which is why we skate her into the wall, Coach.
12 D DELPHINE: Wrecker, I thought we weren't allowed to plan that.
13 D WANDA: Rookie, we're allowed to plan anything. We're just not allowed to get caught.
14 D SUNNY: Wanda has a point. Also, the wall is very hard.
15 D TINY: Sunny, you ate a whole banana in two bites. Respect.
16 D SUNNY: Tiny, I am a professional.
17 D GUS: Ladies, three minutes to first whistle. Somebody tell me how to pronounce "Delphine Arcement" for the crowd.
18 D DELPHINE: Del-FEEN. Ar-suh-MAHN.
19 D GUS: Del-FEEN Ar-suh-MAHN. Got it. And you, Tiny?
20 D TINY: Tiny. Like the opposite of me.
21 D GUS: It's poetry, kid.
22 D MARGUERITE: Gus, out. Now.
23 D GUS: Out. I'm out. Break a leg, but not really.
24 A ¶ Gus exits.
25 D WANDA: Rookie, you're jamming second period.
26 D DELPHINE: Me? Wrecker, I've only done it in practice.
27 D WANDA: Practice is where you stop being scared of the real thing.
28 D DELPHINE: I am scared of the real thing.
29 D SUNNY: Good. Scared people duck.
30 D MARGUERITE: Delphine. Look at me. You skate the inside line. Sunny and Tiny open the gap. Wanda holds the pivot.
31 D TINY (shouting up the stairs): Hey! Somebody shut off the pipe!
32 D SUNNY: Tiny, it's a basement. There's always a pipe.
33 D WANDA: Then we skate like there's no pipe.
34 A ¶ A thunderous strike rolls overhead.
35 A A whistle blows upstairs.
36 D WANDA [CONT'D] (standing): Hands in.
37 D DELPHINE: Wait. Who says it?
38 D WANDA: You do.
39 A ¶ Delphine's hand is shaking.
40 A She puts it in anyway.
41 D WANDA (CONT'D): Say it, Rookie.
42 D TINY: Say it, Del-FEEN.
43 D SUNNY: ^Say it, kid.
44 D DELPHINE (barely): On three.

### SCENE s00320 | INT. LIGHTHOUSE LAMP ROOM TEA SHOP - DUSK
Detected names (may be incomplete or contain aliases): ODALYS VANCE, BRAM OKONKWO, HESTER PELL
1 A ¶ The lamp room of a decommissioned lighthouse, glazed on all sides, the great lens long ago swapped for six mismatched tables.
2 A Salt has frosted the windows from outside.
3 A Inside, steam from a copper urn beads on the brass rail.
4 A Every cup in the room is chipped in the same place, as if by one clumsy hand.
5 A ¶ ODALYS VANCE, forties, a insurance assessor in a rain-spotted camel coat, sits with her back to the sea.
6 A Her notebook is closed.
7 A Her pen is not.
8 A ¶ BRAM OKONKWO, sixties, the shop's owner, a broad man with flour-white forearms and a limp he pretends is a stroll, sets a teapot between them without being asked.
9 A ¶ HESTER PELL, eighties, sits at the farthest table in a knitted hat, spooning sugar into a cup that is already full.
10 A She has not looked up since Odalys arrived.
11 D ODALYS: The policy was taken out eleven days before the fire.
12 D BRAM: Eleven days is a good number. Lucky, in some places.
13 D ODALYS: The fire started in the cellar. The cellar had no wiring. No stove. Nothing that burns by itself.
14 D BRAM: Old buildings do surprise us.
15 D ODALYS: Your lease says the cellar was sealed in 1994. Someone unsealed it. Someone with a key to a door that, on paper, does not exist.
16 D BRAM: I have a great many keys. Lighthouses are sentimental about keys.
17 D ODALYS: Mr. Okonkwo, I am not accusing you.
18 D BRAM: That is the most frightening sentence in your language.
19 D HESTER (not looking up): He did not light it.
20 D ODALYS: Mrs. Pell. I did not know you were listening.
21 D HESTER: I have listened to this room for fifty years. It is the only thing I do properly.
22 D BRAM: Hester, please.
23 D HESTER: Your father kept the lamp, Bram. Mine kept the logbook. You know what a logbook is for.
24 D BRAM: Not now.
25 D ODALYS: What is it for, Mrs. Pell?
26 D HESTER: For the nights nobody wants remembered.
27 D BRAM: That book burned.
28 D HESTER: That book is in my handbag.
29 D ODALYS: Then the fire was not an accident, and it was not for the insurance.
30 D BRAM: Stop. Both of you. Stop talking.
31 D HESTER: He wrote a name on page forty. A boy. Seventeen. The wrong rocks, the right storm. Your father let the lamp go dark that night, Bram, to save oil.
32 D BRAM: He was ordered to.
33 D HESTER: He was paid to.
34 D ODALYS: And the cellar?
35 D HESTER: The cellar is where the boy was kept until the tide went out.
36 A ¶ The urn hisses.
37 A Bram's hand closes on the teapot handle and the pot shatters against the brass rail, tea running black across the floorboards toward Hester's shoes.
38 D BRAM: Nobody was meant to ever open that door!

### SCENE s01937 | INT. HOSPITAL MRI SUITE - NIGHT
Detected names (may be incomplete or contain aliases): THEODORE ABIODUN, BERNADETTE KOWALSKI
1 A ¶ A hum like a held note.
2 A The scanner sits dark.
3 A A patient's gurney is parked beside it, empty.
4 A Rain taps a high window.
5 A ¶ DR. THEODORE ABIODUN, 50s, rubs his eyes at the control desk.
6 A BERNADETTE KOWALSKI, 70s, in a hospital gown and slippers, sits on the edge of a plastic chair.
7 A He notices her only when he turns.
8 A ¶ He rises.
9 A She does not.
10 D THEODORE: Mrs. Kowalski. You're supposed to be upstairs.
11 D BERNADETTE: I couldn't sleep.
12 D THEODORE: You could have rung for a nurse.
13 D BERNADETTE: They told me the scan was clean.
14 D THEODORE: It is.
15 D BERNADETTE: Then why are you here at one in the morning?
16 D THEODORE: I like the quiet.
17 D BERNADETTE: Doctors don't like quiet. They like numbers.
18 A ¶ He pulls a stool close and sits.
19 A Neither speaks for a moment.
20 D THEODORE: Your daughter called.
21 D BERNADETTE: She calls every day.
22 D THEODORE: She asked me to check you were comfortable.
23 D BERNADETTE: She asked you to lie to me.
24 D THEODORE: Mrs. Kowalski.
25 D BERNADETTE: Dr. Abiodun. Do I look like a woman who needs to be handled?
26 A ¶ He considers this.
27 A He lifts a folder from the desk and sets it in her lap.
28 D THEODORE: Fourteen months. Perhaps sixteen. I should have said so this afternoon.
29 D BERNADETTE: You were kind enough not to.
30 D THEODORE: I was a coward.
31 D BERNADETTE: You were both. It's allowed.
32 A ¶ She opens the folder, glances at the images, and closes it.
33 A Her hands rest on top of it, perfectly still.
34 D BERNADETTE [CONT'D]: My husband went in eleven weeks. Fourteen months is a luxury.
35 D THEODORE: I'm sorry.
36 D BERNADETTE: Don't be. Sit with me a while.
37 D THEODORE: I will.
38 D BERNADETTE: Tell me about the quiet.
39 D THEODORE: It's mostly the machine.
40 D BERNADETTE: Then listen to it with me.
41 A ¶ The hum swells softly.
42 A They sit side by side, two figures in the blue half-light, as the rain eases.

### SCENE s00256 | INT. NIGHT BOAT, RIVER DANUBE - NIGHT
Detected names (may be incomplete or contain aliases): OLGA RADOMSKA-IKEJIANI, DETECTIVE KASPAR NWANKWO-BRUUN, LAURA
1 A ¶ A narrow cabin.
2 A Brass lamp.
3 A Curtains drawn.
4 A A tray with two untouched cups of tea.
5 A ¶ OLGA RADOMSKA-IKEJIANI (40s, black gloves, a fur collar) sits on the bunk.
6 A She stirs her tea slowly, never lifting it.
7 A ¶ Across from her, DETECTIVE KASPAR NWANKWO-BRUUN (50s, trench, bruised knuckles) leans against the door.
8 A ¶ He is calm.
9 A She is calm.
10 A The boat rocks.
11 D KASPAR: You knew him.
12 D OLGA: Everyone knew him.
13 D KASPAR: Better than most.
14 D OLGA: Worse.
15 D KASPAR: He wrote to you every week.
16 D OLGA: Letters are cheap.
17 A ¶ She sips.
18 A Sets the cup down.
19 A He watches the cup, not her.
20 D KASPAR: He's dead, Olga.
21 D OLGA: So I hear.
22 D KASPAR: Poisoned.
23 D OLGA: How careless.
24 A ¶ He moves.
25 A In a single step he is across the cabin.
26 A She rises just as quickly.
27 A They stand an inch apart.
28 D KASPAR [CONT'D] (quietly): Give me the glove.
29 D OLGA: Which?
30 D KASPAR: The left.
31 A ¶ She holds out her left hand.
32 A He takes it.
33 A Peels the glove, finger by finger.
34 A ¶ On her wrist: a bruise shaped like a ring of fingertips.
35 D KASPAR [CONT'D]: He fought.
36 D OLGA: He was stronger than he looked.
37 D KASPAR: Than you looked.
38 A ¶ She yanks free.
39 A He catches her again.
40 A They grapple.
41 A The lamp swings.
42 A Tea spills across the floor.
43 A She wrenches a hairpin from her hair, jabs at his arm.
44 A He twists it away.
45 A Both crash onto the bunk, breathing hard.
46 A ¶ Then the cabin door opens.
47 A A woman's voice, off-screen, calm and amused:
48 D LAURA [O.S.]: Kaspar. Olga. You're both very loud.
49 A ¶ They freeze.
50 A Kaspar, over Olga, hand at her throat.
51 A Olga, under him, the pin at his ribs.
52 D OLGA (whispering): Who is that?
53 D KASPAR (whispering back): My wife.
54 A ¶ Olga laughs, a low rich laugh.
55 A He lets go.
56 A She sits up, smoothing her fur.
57 D OLGA: Then this is a very different kind of poisoning.

### SCENE s00146 | INT. MOBILE HOME - KITCHEN TABLE - DAY
Detected names (may be incomplete or contain aliases): BEATRIX LOMAX-DIALLO, HENRY TAKAHASHI, DANTE VELARDE
1 A ¶ A narrow kitchen.
2 A Wood paneling.
3 A A window unit rattles.
4 A On the table: a stack of papers, a stamp pad, and a coffee mug that says WORLD'S OKAYEST NOTARY.
5 A ¶ BEATRIX LOMAX-DIALLO, 60s, notary, reading glasses on her forehead, sits at the head.
6 A To her left, HENRY TAKAHASHI, 70s, widower, rests both hands flat.
7 A To her right, his son-in-law, DANTE VELARDE, 40s, in a pressed shirt, fidgets with a pen.
8 A ¶ She stamps a page.
9 A He watches the stamp.
10 A ¶ He reaches for another page.
11 A She slides it toward him.
12 D BEATRIX: This one transfers the deed.
13 D HENRY: I know what it does.
14 D DANTE: Henry, take your time.
15 D HENRY: I've taken my time. I'm seventy-three.
16 A ¶ Dante nods.
17 A He lowers his eyes.
18 A Beatrix clears her throat.
19 D BEATRIX: Mr. Velarde, you'll sign as witness.
20 D DANTE: Of course.
21 A ¶ She slides the pen to him.
22 A He takes it.
23 A His hand shakes slightly.
24 A He signs.
25 A She notarizes.
26 D BEATRIX [CONT'D]: Mr. Takahashi, you are conveying the property to your daughter Keiko's estate, correct?
27 D HENRY: Keiko's gone.
28 D BEATRIX: I'm sorry.
29 D HENRY: To her children, then.
30 D DANTE: They're minors.
31 D BEATRIX: A trustee, then.
32 D HENRY (looking at Dante): You.
33 A ¶ Dante pauses.
34 A He sets down the pen.
35 D DANTE: Henry, I don't need to be trustee.
36 D HENRY: You'll do it right.
37 A ¶ Beatrix looks from one to the other.
38 A She taps the stamp.
39 A She lifts the final page.
40 A He holds out his hand.
41 A She places the page in it.
42 A ¶ He reads.
43 A Slow.
44 A Every line.
45 A Then he signs, large and square, and slides it back.
46 A ¶ She stamps.
47 A The sound is small, dry, final.
48 D BEATRIX: Congratulations.
49 D HENRY: Is that what it is?
50 A ¶ She smiles, gently, and pours him more coffee.

### SCENE s00626 | EXT. SALT FLAT - DEAD VEHICLE - DAY
Detected names (may be incomplete or contain aliases): IMOGEN STRAND, CALLUM REID
1 A ¶ A white plain, blinding, cracked in hexagons to the horizon.
2 A The heat has a sound.
3 A A pickup truck sits dead on its rims with the hood propped open, and in its thin stripe of shade two figures sit side by side on the dirt.
4 A ¶ IMOGEN STRAND, forties, sun-darkened, cracked lips, a scarf tied over her head, shreds a map into narrow strips and braids them.
5 A Across from her, CALLUM REID, twenties, her nephew, with a gaze fixed so steady it has stopped meaning anything, turns a plastic bottle slowly, holding it up to the light.
6 A ¶ Half a finger of water.
7 A Maybe less.
8 D IMOGEN (to the empty horizon): Eleven miles to the highway. Maybe nine.
9 D CALLUM: Maybe.
10 A ¶ She finishes the braid and ties it around his wrist without asking.
11 A He lets her.
12 D IMOGEN (muttering): Should've turned at the cattle guard.
13 A ¶ He sets the bottle down between them, label facing her, a quiet gesture of an offer.
14 A She pushes it back with one finger.
15 A He pushes it again.
16 A For a long moment neither of them speaks.
17 A ¶ Then Imogen's eyes go past him, to the truck's rear bumper, and stay there.
18 A A pale smear of damp in the dirt.
19 A A slow, steady drip from under the truck.
20 A ¶ Callum turns to look.
21 A His face doesn't change.
22 A His hand closes over hers.
23 D CALLUM: It's the radiator.
24 D IMOGEN: It's the water tank, Cal. The tank was full.
25 A ¶ He gets up very slowly.
26 A In the shade of the chassis, the second spare jug lies on its side, its cap cracked, empty.

### SCENE s00707 | INT. CASTELLANO'S LAUNDRY & DRY CLEANING - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): VINCE CASTELLANO, DOLLY, MOE ZIELINSKI, NADIA, ^DOLLY
1 A ¶ Steam.
2 A Rows of plastic-wrapped suits.
3 A A pressing machine hisses.
4 A ¶ VINCE CASTELLANO, 50s, in an undershirt, stands over a table of cash.
5 A DOLLY, 40s, in a pressed blouse, folds a sheet with great care.
6 A MOE ZIELINSKI, 60s, a hulking presser, sets down the iron.
7 A NADIA, 20s, new to the shop, feeds a collar into the machine.
8 A ¶ Vince counts.
9 A Dolly folds.
10 A Nobody speaks.
11 A ¶ Nadia glances at the door.
12 D VINCE: Moe.
13 D MOE: Yeah?
14 D VINCE: Whose turn was it to lock up?
15 D MOE (together with Dolly): Mine.
16 D ^DOLLY: Hers.
17 A ¶ They look at each other.
18 A Dolly's fold goes crooked.
19 D VINCE: Which?
20 D MOE: I locked it.
21 D DOLLY: I saw him. He locked it.
22 A ¶ Vince sets down the cash.
23 A Nadia presses the machine.
24 A It hisses.
25 A Steam hides her face.
26 D VINCE (to Nadia): Kid, you got somewhere to be?
27 D NADIA: No, sir.
28 D VINCE: You keep looking at that door.
29 A ¶ Nadia lets go of the machine.
30 A A beat.
31 A Moe picks up the iron again.
32 A Behind her, the front bell chimes.

### SCENE s00945 | INT. NEONATAL ICU, NIGHT SHIFT - 4 A.M.
Detected names (may be incomplete or contain aliases): PHILOMENA ADEGBOYE-LINDGREN
1 A ¶ Rows of incubators glow like small amber lanterns.
2 A Monitors blink green.
3 A A radiator ticks.
4 A No one is at the nurses' station.
5 A ¶ The desk phone's red light flashes.
6 A An answering machine clicks on.
7 D PHILOMENA [V.O.] (recorded): You've reached Neonatal. If this is an emergency, hang up and call the floor line. Otherwise, leave your message after the tone.
8 A ¶ Beep.
9 A Dead air.
10 A Then a click, and the line goes silent.
11 A ¶ The double doors swing open.
12 A DR. PHILOMENA ADEGBOYE-LINDGREN (40s, scrubs, hair under a cap, a coffee cup in each hand) pushes through backward, shouldering the door.
13 A She sets one coffee on the desk, takes a sip of the other, and looks at the flashing phone.
14 A ¶ She presses the button.
15 A The message plays again.
16 A She listens to the beep, the silence, the click.
17 A ¶ She frowns.
18 A She picks up the receiver, checks the dial tone, replaces it.
19 A ¶ She walks the row of incubators.
20 A At each one she checks the monitor, taps the chart, nods.
21 A At the fourth she stops, reaching to adjust a blanket.
22 A Her hand hovers.
23 A ¶ The baby is awake.
24 A Eyes open.
25 A Staring at her without blinking.
26 A ¶ She smiles, adjusts the blanket, and moves on.
27 A ¶ At the sixth incubator she stops again.
28 A Empty.
29 A A name card still clipped to the frame.
30 A She checks the chart.
31 A Her pen stops.
32 D PHILOMENA (under her breath): Where did you go?
33 A ¶ She looks back toward the desk.
34 A The red light has stopped flashing.
35 A She walks slowly toward it.
36 A Beside the phone lies a hospital bracelet, tiny, the plastic still warm.
37 A ¶ She picks it up.
38 A Turns it over.
39 A ¶ On the back, in fresh marker: HER NAME.
40 A ¶ The monitors all flatline at once.
41 D PHILOMENA [CONT'D] (whispering): No.
42 A ¶ She spins.
43 A The row of incubators stands in perfect order.
44 A Every one of them is empty.
45 A Every one of them is lit.
46 A ¶ The answering machine clicks on again.
47 D PHILOMENA [V.O.] (recorded): You've reached Neonatal. Leave your message after the tone.
48 A ¶ Beep.
49 A And this time, a small breath on the line.

### SCENE s01003 | INT. FLOODED CHAPEL CRYPT - NIGHT
Detected names (may be incomplete or contain aliases): HARLAN, PENNY, NOLA
1 A ¶ Ankle-deep black water.
2 A Stone arches.
3 A Lanterns on ropes.
4 A Names of the dead carved on every column.
5 A Something drips, then something larger drips.
6 A ¶ HARLAN (50s, woolen coat, reading glasses) steadies a lantern.
7 A PENNY (30s, hiking boots, camera bag) wades behind him.
8 A NOLA (20s, white nightgown under a borrowed jacket, bare feet) clings to the pillar.
9 D HARLAN: Everyone stay together.
10 D PENNY: Harlan, we are together. There are three of us.
11 D NOLA: Four.
12 D HARLAN: What?
13 D NOLA: There were four when we came down.
14 D PENNY: Nola, honey, count again.
15 D NOLA: One, two, three...
16 D HARLAN: Don't.
17 D PENNY: Let her.
18 D NOLA: Four.
19 A ¶ Harlan raises the lantern.
20 A The crypt stretches out, silent.
21 A Shadows lengthen between the columns.
22 D HARLAN (muttering): Just the damp. Just the damp.
23 D PENNY: Who are you talking to?
24 D HARLAN: Myself.
25 D NOLA: He's talking to it.
26 D PENNY: Nola!
27 D NOLA: It's listening.
28 A ¶ The water ripples.
29 A Not from their legs.
30 A From the far end of the crypt, a slow wake spreads toward them.
31 D HARLAN: Everyone back to the stairs. Now.
32 D PENNY: Which way is that?
33 D NOLA: Behind you.
34 A ¶ Penny turns.
35 A The stairs are gone.
36 A Only wall, and in the wall a carved name that was not there a minute ago.
37 D PENNY: Oh my God. That's my name.
38 D HARLAN: That's impossible.
39 D NOLA: It's the fourth.
40 D HARLAN (to himself): Count the lanterns. Count the lanterns.
41 A ¶ The lanterns, one by one, go out.

### SCENE s01606 | INT. FARMHOUSE CELLAR - NIGHT
Detected names (may be incomplete or contain aliases): FAITH BROOKS, WALT, JUNE, DRIFTER, EPHRAIM
1 A ¶ Damp stone.
2 A Shelves of jarred peaches.
3 A A single bare bulb swings from a cord.
4 A ¶ Four people stand in the middle of the cellar.
5 A FAITH BROOKS (30s, flannel, a lantern in one hand).
6 A Her husband WALT (30s, ball cap, a shovel).
7 A Her little sister JUNIPER "JUNE" (16, braids, a stuffed rabbit).
8 A And an older man they found at the door, named only as the DRIFTER (60s, long coat, calm).
9 D FAITH: Walt, shut the hatch.
10 D WALT: It's shut.
11 D JUNE: Faith, I don't like it down here.
12 D FAITH: Hush, June.
13 A ¶ The Drifter inspects a jar.
14 A Holds it to the bulb.
15 A Something inside moves.
16 D DRIFTER: Nice peaches.
17 D WALT: They're fine.
18 D DRIFTER: They're alive.
19 A ¶ Faith's lantern wavers.
20 A June clutches the rabbit.
21 D FAITH: Who are you?
22 D DRIFTER (smiling): Call me Ephraim.
23 D WALT: Ephraim, put that down.
24 D EPHRAIM: Walter, you have no idea what you're keeping.
25 A ¶ Ephraim sets the jar back.
26 A The bulb flickers.
27 A Behind the shelves, something scrapes the wall, patient and slow.

### SCENE s01004 | INT. PUBLIC LIBRARY - BOOK RETURNS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LEOPOLD, WINIFRED, STRANGER, CASPIAN, AGNES, MURIEL
1 A ¶ A back room behind the circulation desk.
2 A Steel carts piled with returned books.
3 A A conveyor belt chugs.
4 A A radiator ticks.
5 A The overhead light has a moth in it.
6 A ¶ LEOPOLD (60s, cardigan, lanyard) shelves a cart, humming a waltz.
7 A WINIFRED (60s, volunteer vest, library-card earrings) peels stickers from paperbacks at a table.
8 A Neither looks up when the book-drop chute rattles and a thick novel thumps into the bin.
9 D WINIFRED: That's the Dostoevsky again.
10 D LEOPOLD: Fourth time this month.
11 D WINIFRED: Somebody's reading it very slowly.
12 D LEOPOLD: Somebody's very patient.
13 D WINIFRED: Or in love.
14 D LEOPOLD: With a Russian?
15 D WINIFRED: Leopold, it happens.
16 A ¶ He laughs, shakes his head.
17 A The chute rattles again.
18 A A paperback with a cracked spine tumbles out.
19 A Winifred flips it open.
20 A Something slides from the pages: a folded note.
21 D WINIFRED [CONT'D]: Oh.
22 D LEOPOLD: What?
23 D WINIFRED: "Same time next Tuesday?"
24 D LEOPOLD: Is it signed?
25 D WINIFRED: It says "C."
26 D LEOPOLD: Well, C will have to wait.
27 A ¶ The back door squeaks.
28 A A STRANGER (30s, long coat, scarf wound to his chin, rain on his hair) leans in, hesitating.
29 D STRANGER: Pardon me. I'm sorry. Is this where you leave things?
30 D WINIFRED: The main desk closed at nine.
31 D STRANGER: I wasn't looking for the desk.
32 D LEOPOLD: Are you looking for a book, young man?
33 D STRANGER: I'm looking for a note.
34 A ¶ Winifred clutches the paper to her chest.
35 A Leopold tucks his hands behind his back.
36 A The stranger smiles, and it changes his whole face.
37 D STRANGER [CONT'D]: My name is Caspian. I leave one in this one every Tuesday.
38 D WINIFRED: For whom?
39 D CASPIAN: For whoever finds it.
40 D LEOPOLD: That seems unwise.
41 D CASPIAN: It's led to some very good conversations.
42 D WINIFRED: Leopold, he's the C.
43 D LEOPOLD: I gathered.
44 A ¶ The chute rattles one more time.
45 A A woman's voice floats down the shaft, laughing: "Caspian?
46 A Are you down there?"
47 A A pair of shoes appears at the lip of the opening, then a pair of legs, and AGNES (30s, red umbrella, wet laughing eyes) squeezes through and drops to the floor with a grunt.
48 D AGNES: I told you the chute was big enough.
49 D CASPIAN: It's a book drop, Agnes.
50 D AGNES: It was a very comfortable book drop.
51 A ¶ She notices the two older people.
52 A Straightens her coat.
53 A Holds out a hand.
54 D AGNES [CONT'D]: Good evening. I'm so sorry about the intrusion.
55 D LEOPOLD: Not at all.
56 D WINIFRED: It's been a slow night.
57 D AGNES: We'll just collect his note and be going.
58 D WINIFRED: Of course.
59 A ¶ She hands over the paper.
60 A Caspian takes it, unfolds it, reads it, and offers it to Agnes.
61 A She laughs, kisses his cheek, and tucks it into her pocket.
62 A ¶ A third figure appears at the door, MURIEL (70s, librarian's brooch, stern as a verdict).
63 A The two lovers freeze.
64 A Leopold and Winifred straighten up.
65 D MURIEL: It is eleven o'clock. This room is closed.
66 D CASPIAN: We were just leaving.
67 D MURIEL: By the door. Not the chute.
68 D AGNES: Yes, ma'am.
69 A ¶ They file out.
70 A Muriel watches them go.
71 A When they are gone, she looks at the note-less table, at Winifred's guilty face, at Leopold's studied innocence.
72 D MURIEL: Which of you encouraged them?
73 D LEOPOLD: I shelve. I don't encourage.
74 D WINIFRED: Neither do I.
75 A ¶ Muriel nods.
76 A Picks up the Dostoevsky.
77 A Opens it.
78 A Takes out a second note.
79 A Reads it.
80 A Her lips twitch.
81 D MURIEL: Next Tuesday, then.

### SCENE s01253 | INT. HOSPICE - FAMILY LOUNGE - AFTERNOON
Detected names (may be incomplete or contain aliases): MERCEDES ARANDA-LINDGREN, RAMIRO BELLWETHER, CONSTANZA BELLWETHER-NAKAMURA, FELIX BELLWETHER
1 A ¶ A soft, sunny room: beige sofas, a fish tank, a jigsaw half-done on a coffee table.
2 A A television plays a gardening programme with the sound off.
3 A Somewhere down the hall, a trolley rattles.
4 A ¶ DR. MERCEDES ARANDA-LINDGREN (50s, grey cardigan, low voice) pours four cups of tea from a pot she did not need to bring.
5 A She sets the tray on the table with great care.
6 A Her hands are very still.
7 A ¶ On the sofa sit three siblings: the eldest, RAMIRO BELLWETHER (50s, rumpled suit, wedding ring he keeps turning), the middle, CONSTANZA BELLWETHER-NAKAMURA (40s, ironed blouse, handbag clutched on her knees), and the youngest, FELIX BELLWETHER (30s, scruffy, headphones around his neck).
8 D RAMIRO: She's been better this week.
9 D FELIX: She asked for the radio.
10 D CONSTANZA: She asked for soup.
11 D MERCEDES: She did.
12 A ¶ She hands out cups.
13 A Ramiro accepts his without looking.
14 A Constanza sets hers on the table, untouched.
15 A Felix cradles his between both palms as if it were a bird.
16 D MERCEDES [CONT'D]: She's been very bright these past days. It happens sometimes. A rally. We see it more than people expect.
17 D RAMIRO: A rally.
18 D MERCEDES: Yes.
19 D RAMIRO: So she's improving.
20 D MERCEDES: She's comfortable.
21 A ¶ He nods, slowly.
22 A Turns the ring.
23 A On the television, a woman in a straw hat bends to trim a rose, silent as a mime.
24 D CONSTANZA: When can she come home?
25 A ¶ Mercedes lifts her own cup.
26 A Sips.
27 A Sets it down, rim to saucer, with no sound at all.
28 D MERCEDES: That's a question I'd like to talk about.
29 D FELIX: Not yet.
30 D RAMIRO: Felix.
31 D FELIX: I'm not ready.
32 D CONSTANZA: Nobody's saying...
33 D MERCEDES: Felix.
34 A ¶ He looks at her.
35 A She waits.
36 A The fish tank bubbles.
37 A A clownfish noses a plastic castle.
38 D MERCEDES [CONT'D]: When someone gets bright, like your mother, it often means they're gathering themselves. It can last a day. It can last a week. But it is, very often, the last good thing.
39 A ¶ Constanza's hand finds her brother's arm.
40 A Ramiro's ring stops turning.
41 A Felix stares into the tea.
42 D FELIX (whispering): Is that what you meant by comfortable?
43 D MERCEDES: It's what I meant.
44 A ¶ Silence.
45 A The trolley rattles down the corridor and fades.
46 A Constanza opens her handbag, takes out a tissue, and folds it twice but does not use it.
47 D RAMIRO: How long?
48 D MERCEDES: Days.
49 D RAMIRO: How many?
50 D MERCEDES: I can't say exactly. I'd rather not guess in front of you.
51 A ¶ He exhales.
52 A Taps the sofa arm twice, hard, like a man hammering a nail.
53 A Then stops.
54 D CONSTANZA: She wants to see the garden.
55 D MERCEDES: She can see it. Today. We'll take the chair.
56 D CONSTANZA: And the dog.
57 D MERCEDES: Whatever she wants.
58 D FELIX (looking up): She wants the radio.
59 D MERCEDES: Then bring the radio.
60 A ¶ Felix nods.
61 A Stands, clumsy, spilling tea.
62 A He sets the cup on the tray and wipes his palms on his jeans.
63 A Constanza rises too.
64 A Ramiro follows, last, placing his tea on the table with a precision that looks like violence.
65 A ¶ At the door he stops.
66 D RAMIRO: Doctor.
67 D MERCEDES: Yes?
68 D RAMIRO: Thank you for the tea.
69 D MERCEDES (gently): You're welcome.
70 A ¶ The three siblings leave.
71 A Mercedes remains alone with the tray, the unfinished cups, the jigsaw.
72 A She picks up a puzzle piece from the table, turns it in her fingers, and sets it carefully in the sky of a sunny picture, where it fits exactly.
73 T FADE OUT.

### SCENE s00564 | EXT. RAILROAD CROSSING - FIELD TRIP BUS - DAY
Detected names (may be incomplete or contain aliases): ROSCOE LANGSTON, PHOEBE ABERNATHY-LIU
1 A ¶ A yellow school bus idles at a country crossing.
2 A Barn-red freight cars clatter by, one after another, endless.
3 A Heat shimmers over the tracks.
4 A The bus is empty but for two.
5 A ¶ ROSCOE LANGSTON, 13, in a buttoned-up shirt and a tie his mother chose, sits alone in the back with a field-trip permission slip folded in his fist.
6 A Across the aisle PHOEBE ABERNATHY-LIU, 13, in a denim vest with a patch for every band she has not heard, sprawls with her boots on the seat.
7 A ¶ The train rattles on.
8 A Neither speaks.
9 A He steals a look.
10 A She steals one back.
11 D ROSCOE: Where's everyone?
12 D PHOEBE: Museum.
13 D ROSCOE: Why aren't we at the museum?
14 D PHOEBE: Because I threw up.
15 D ROSCOE: And me?
16 D PHOEBE: Because you volunteered to stay with me.
17 D ROSCOE: I did?
18 D PHOEBE: You raised your hand.
19 A ¶ He thinks about this.
20 A His ears go red.
21 D ROSCOE: Oh.
22 A ¶ She grins.
23 A Props her chin on her fist.
24 A He fiddles with his tie.
25 A The train keeps coming.
26 D PHOEBE: Have you ever counted them?
27 D ROSCOE: The cars?
28 D PHOEBE: Yeah.
29 D ROSCOE: No.
30 D PHOEBE: Want to?
31 D ROSCOE: Okay.
32 A ¶ They press their faces to the glass.
33 A Their lips move.
34 A Two voices, soft, almost in unison.
35 D ROSCOE [CONT'D]: Forty-one. Forty-two.
36 D PHOEBE: Forty-three.
37 D ROSCOE: Forty-four.
38 A ¶ She leans her shoulder against his.
39 A He freezes.
40 A Does not pull away.
41 A The train goes on and on.
42 D PHOEBE: Sixty.
43 D ROSCOE: Sixty-one.
44 D PHOEBE: Roscoe.
45 D ROSCOE: Yeah?
46 D PHOEBE: Don't lose count.
47 A ¶ He doesn't.
48 A The train thunders past, the whole bus trembles, and a line of sunlit boxcars flickers over their faces like a film.
49 D ROSCOE: Eighty-eight.
50 D PHOEBE: Eighty-nine.
51 A ¶ Her hand finds his on the seat.
52 A He turns his over.
53 A She laces her fingers with his.
54 A Neither looks away from the window.
55 D ROSCOE: Ninety.
56 D PHOEBE: Ninety-one.
57 A ¶ The last car passes.
58 A Silence rolls in behind it, long and bright.
59 A A crossing bell stops.
60 A Gates rise.
61 D ROSCOE: Ninety-three.
62 D PHOEBE: Ninety-three.
63 A ¶ She does not let go.
64 A The bus engine coughs.
65 A The driver, offscreen, honks twice.
66 A They stay where they are a moment longer.

### SCENE s01099_1 | INT. APPELLATE COURTROOM - LATER
Detected names (may be incomplete or contain aliases): JUDGE ARCHIBALD-NWOSU, GIDEON, PHILOMENA
1 A ¶ Packed gallery.
2 A Three judges at the bench.
3 A Gideon at the lectern, folio open, knuckles white.
4 D JUDGE ARCHIBALD-NWOSU: Counsel. You may proceed.
5 A ¶ He takes a breath.
6 D GIDEON: May it please the court.
7 D PHILOMENA: Mr. Okafor-Lindgren, please. Your Honor will do.

### SCENE s01760 | INT. WHOLESALE FLOWER MARKET - 4 A.M.
Detected names (may be incomplete or contain aliases): AURELIO FONTANA, BEATRIX HALLORAN, JUN, NONNA
1 A ¶ Concrete floor slick with water and petals.
2 A Buckets of peonies, ranunculus, lilies stacked to the ceiling.
3 A Forklifts beep somewhere in the vaulted dark.
4 A The air smells green and cold.
5 A ¶ AURELIO FONTANA (30s, florist, rolled sleeves, thorn scratches on his forearms) lifts a bucket of white ranunculus in each hand and sets them on his cart.
6 A BEATRIX HALLORAN (30s, rival florist, canvas apron, sleeves tied around her waist) reaches for the same stems and comes up with his hand.
7 A ¶ They freeze.
8 A The bucket tips between them, spilling cold water over both their boots.
9 A He lunges to save it and she lunges at the same instant, and they collide, and white petals burst into the air like startled birds.
10 D AURELIO: Those were mine.
11 D BEATRIX: They were on the floor.
12 D AURELIO: In my bucket.
13 D BEATRIX: In a puddle.
14 A ¶ JUN (20s, market porter, headphones, a hand truck) rolls past, glances at them, and rolls on without comment.
15 A ¶ Aurelio's phone buzzes in his apron.
16 A He fishes it out and puts it to his ear.
17 D NONNA [V.O.] (over phone): Aurelio? Aurelio, the roses, did you get the roses?
18 D AURELIO: Nonna, it's four in the morning.
19 D NONNA [V.O.] (over phone): The wedding is at eleven. A wedding doesn't care what time it is.
20 D AURELIO: I know. I'm at the market right now.
21 D NONNA [V.O.] (over phone): Who are you with? I hear a girl.
22 A ¶ Beatrix covers a laugh.
23 A Aurelio turns his shoulder, and Beatrix picks a ranunculus from the floor and tucks it behind his ear while he is distracted.
24 D AURELIO (into phone): A colleague, Nonna.
25 D NONNA [V.O.] (over phone): Is she pretty?
26 D AURELIO: I'll call you back.
27 A ¶ He hangs up.
28 A He pulls the flower from his ear, studies it, doesn't give it back.
29 D BEATRIX: You can keep the ranunculus. But I'm taking the peonies.
30 D AURELIO: Fine.
31 D BEATRIX: And the lilies.
32 D AURELIO: Beatrix.
33 D BEATRIX: Yes?
34 D AURELIO: Whose wedding is it?
35 D BEATRIX: Mine, in a way. My sister's. Eleven o'clock.
36 D AURELIO: Ours is eleven too.
37 A ¶ They look at each other.
38 A Jun rolls past again, in the other direction, headphones still on, humming.

### SCENE s02026 | INT. CLOSED OBSERVATION TOWER - STAIRWELL LANDING - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RENATA VOSS, ELIAS MBEKI, DEPUTY HANNAH OAKES, SIREN, DOCTOR AMARA LINDQVIST
1 A ¶ Concrete.
2 A One bulb.
3 A Rain in the vents.
4 A ¶ AGENT RENATA VOSS (40s) crouches over a duffel bag.
5 A Zipper open.
6 A Cash, passports, a phone.
7 A Her breathing is slow, controlled.
8 A ¶ Footsteps below.
9 A Heavy.
10 A Climbing.
11 A ¶ She zips the bag.
12 A Stands.
13 A Back to the wall.
14 A ¶ A figure rounds the landing.
15 A ELIAS MBEKI (50s), coat soaked, pistol low.
16 A He stops.
17 A Sees her.
18 A Neither moves.
19 A ¶ Behind him, DEPUTY HANNAH OAKES (30s), radio on her shoulder, edges up the steps.
20 D ELIAS (low): Renata.
21 D RENATA: Elias.
22 D HANNAH: Hands where I can see them!
23 D ELIAS: Hannah, stand down.
24 A ¶ Renata's eyes flick to the bag.
25 A His follow.
26 A Both lunge at once.
27 A Elbows, knees, a snarl.
28 A The bag skids across the concrete.
29 A ¶ She hooks his leg.
30 A He drives her into the railing.
31 A It groans.
32 A ¶ The pistol clatters down the stairs.
33 A Hannah ducks aside as it passes her boots.
34 A ¶ He gets a forearm across her throat.
35 A She bites his wrist.
36 A He yanks free.
37 A ¶ Hannah raises her weapon.
38 A Shaky.
39 A Trying to find a clean line.
40 D HANNAH: Stop! Both of you!
41 A ¶ They don't.
42 A Then a SIREN builds outside.
43 A Red and blue strobe through the vent slats.
44 A ¶ They freeze, still tangled.
45 A Breathing hard.
46 A Rain drums on the roof.
47 A ¶ DOCTOR AMARA LINDQVIST (60s, civilian) appears at the top of the stairs, hands raised, trembling, a thermos in one.
48 D AMARA (breathless): Please. I only came up to fix the lamp.
49 A ¶ Nobody answers.
50 A The siren fades past.
51 A ¶ Renata lets go first.
52 A He follows.
53 A They step apart.
54 D ELIAS (tired): It's over.
55 D RENATA: It never is.
56 A ¶ She sits down on the stairs, defeated, and holds out her wrists.

### SCENE s01515 | INT. ROOFTOP HELIPAD, UNIVERSITY HOSPITAL - DAWN
Detected names (may be incomplete or contain aliases): IMANI OKAFOR-REYES, NURSE ALARIC BRIGHTWATER-LUU, TRANSPLANT COORDINATOR SERAPHINA KOWALSKI-ASANTE
1 A ¶ Wind whips the windsock.
2 A The city below is a quilt of pink and gray.
3 A A helicopter idles on the pad, rotors turning slow.
4 A ¶ Three staff stand by a wheeled cooler: DR. IMANI OKAFOR-REYES (40s, flight suit), NURSE ALARIC BRIGHTWATER-LUU (30s, backpack), and TRANSPLANT COORDINATOR SERAPHINA KOWALSKI-ASANTE (50s, headset).
5 A The cooler contains a donor heart.
6 D IMANI (to everyone): Okay. Last check. Cooler sealed? Ice good? Paperwork in?
7 D ALARIC: Sealed. Ice good. Paperwork in.
8 D SERAPHINA (into headset): Control, we are loaded. Requesting clearance.
9 D SERAPHINA [CONT'D] (to the others): Four minutes.
10 D IMANI (to herself): Four minutes. I can do four minutes.
11 A ¶ The rotors whine.
12 A Alaric lifts the cooler's handle, lowers it, lifts it again.
13 D ALARIC: Doctor, can I ask something?
14 D IMANI: Go.
15 D ALARIC: Is it supposed to feel this heavy?
16 D IMANI: Yes.
17 D ALARIC: Is it supposed to feel this light?
18 D IMANI: Also yes.
19 D SERAPHINA: Clearance in thirty.
20 D IMANI: Then let's go.
21 A ¶ She steps toward the helicopter.
22 A Alaric steps after her.
23 A Seraphina pulls off her headset, takes a breath, and walks to the pad's edge.
24 A She looks down at the waking city.
25 A Then, quietly, to the empty air:
26 D SERAPHINA [CONT'D] (to the donor): Thank you.
27 A ¶ The rotors speed up.
28 A The sun clears the buildings.
29 A And somewhere in the cooler, nothing moves at all.

### SCENE s00462 | INT. GRAND BALLROOM - STEAMSHIP "MERIDIAN QUEEN" - NIGHT
Detected names (may be incomplete or contain aliases): NELL, VASCONCELOS-HART, CAPTAIN JULIAN ABERCROMBIE-SATO, AUNT BEATRICE, LORD PERCIVAL HOLLOWAY
1 A ¶ A glittering room of mirrors and chandeliers.
2 A A string quartet plays a waltz.
3 A Couples whirl across a parquet floor, gowns blooming like opened flowers.
4 A Waiters weave among them with trays of champagne.
5 A ¶ At the edge of the floor, ELEANOR "NELL" VASCONCELOS-HART (20s, emerald gown, gloved hands clasped) stands beside a potted palm and watches the dancers.
6 A She holds an untouched glass.
7 A ¶ Across the room, CAPTAIN JULIAN ABERCROMBIE-SATO (30s, white dress uniform, polished buttons) stands alone beside the bandstand.
8 A He is looking at her.
9 A When she glances up, he glances away.
10 A ¶ Her chaperone, AUNT BEATRICE (60s, lorgnette, plum silk), taps her fan against Nell's arm.
11 D BEATRICE: Stand up straight, child.
12 A ¶ Nell straightens.
13 A Her eyes slide back to the captain.
14 D BEATRICE [CONT'D]: That man has been staring for twenty minutes.
15 D NELL: I hadn't noticed.
16 D BEATRICE: Then you are the only one.
17 A ¶ A waiter offers a tray.
18 A Nell takes a fresh glass and trades it for the old.
19 A Her fingers tremble.
20 A ¶ The quartet shifts into a new waltz.
21 A Julian crosses the floor.
22 A Couples part for him.
23 A He stops before Nell and bows.
24 D JULIAN: Miss Vasconcelos-Hart.
25 D NELL: Captain.
26 D JULIAN: Would you honor me with this dance?
27 A ¶ Beatrice's fan snaps open.
28 A Nell glances at her.
29 A The fan lowers by an inch.
30 A Nell sets her glass on the waiter's tray and takes his hand.
31 A ¶ They step onto the floor.
32 A He places a hand at her waist.
33 A She rests hers on his shoulder.
34 A They begin to turn, stiff at first, then easier.
35 D JULIAN [CONT'D]: You do not dance often.
36 D NELL: I do not dance at all.
37 D JULIAN: Then I am honored.
38 A ¶ The music swells.
39 A Her gloved fingers tighten on his sleeve.
40 A He leads her through the crowd, and the room blurs gold around them.
41 A ¶ A loud crash cuts through the music.
42 A A tray of glasses has hit the floor.
43 A Dancers stumble and stop.
44 A ¶ At the entrance stands LORD PERCIVAL HOLLOWAY (40s, tailcoat, red carnation), flushed and unsteady, one hand clutching a champagne bottle by the neck.
45 A He stares across the ballroom at Nell.
46 D PERCIVAL (shouting): Eleanor!
47 A ¶ The quartet falters.
48 A Beatrice gasps.
49 A Nell and Julian freeze mid-turn.
50 A ¶ Julian steps in front of her.
51 A Percival strides forward, shoving through the crowd.
52 A A waiter dodges.
53 A A matron shrieks.
54 A Two stewards rush to intercept, and Percival swings the bottle, and the stewards jump back.
55 D JULIAN: Lord Holloway, you are drunk.
56 D PERCIVAL: And you are in my way.
57 A ¶ Julian does not move.
58 A Nell steps beside him, then past him.
59 A She faces Percival directly, her chin raised.
60 D NELL: Percival. Put that down.
61 A ¶ He stares at her.
62 A The bottle trembles in his grasp.
63 A Slowly, he lowers it.
64 D PERCIVAL (hoarse): You promised.
65 D NELL: I promised nothing.
66 A ¶ His face crumples.
67 A The bottle slips from his fingers and shatters on the parquet.
68 A Champagne foams across the floor.
69 A The quartet has stopped.
70 A The entire ballroom holds its breath.
71 A ¶ Beatrice sweeps forward and takes Percival firmly by the elbow.
72 A He allows himself to be led.
73 A The crowd parts for them.
74 A ¶ A moment of silence.
75 A Then the first violin lifts his bow, and the waltz resumes, hesitant, uncertain.
76 A ¶ Julian turns to Nell.
77 A She is trembling.
78 A He holds out his hand.
79 D JULIAN: Shall we finish?
80 A ¶ She looks at his hand.
81 A She looks at the shattered glass.
82 A She looks at the doors where Beatrice and Percival have vanished.
83 A ¶ Then she places her hand in his, and the two of them step back into the dance.

### SCENE s00674 | INT. HARTWIG OBSERVATORY - DOME CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR EMIL HARTWIG, CORA BELLINGHAM
1 A ¶ A great brass telescope tilts toward a slit of stars.
2 A Star charts blanket every wall.
3 A A desk lamp, a cold teapot, a black intercom box on the wall.
4 A ¶ PROFESSOR EMIL HARTWIG, 60s, rumpled tweed, ink on his cuffs, sits hunched over a ledger.
5 A He looks up at the intercom as it crackles.
6 D CORA [V.O.] (through the intercom): Professor? Are you still up there?
7 D HARTWIG: Who is that?
8 D CORA [V.O.]: The night porter's niece. They let me in at the gate. I need to ask you about the Calloway disappearance.
9 A ¶ Hartwig closes the ledger very carefully.
10 D HARTWIG: I don't discuss that. Good night.
11 D CORA [V.O.]: Your assistant was last seen climbing these stairs. Eleven years ago tonight.
12 D HARTWIG: Is that what the papers say?
13 D CORA [V.O.]: That is what the logbook says. The one in your hand.
14 A ¶ Hartwig's fingers tighten on the ledger.
15 A He glances at the dome door.
16 D HARTWIG: The door at the bottom is locked.
17 D CORA [V.O.]: I know. I'm calling from the landing.
18 A ¶ A knock, three soft raps, echoes up the iron staircase.
19 A Hartwig stands.
20 A His chair scrapes.
21 D HARTWIG: How did you get a key?
22 D CORA [V.O.]: I didn't. It was never locked from my side.
23 A ¶ The dome door swings open.
24 A CORA BELLINGHAM, 30s, rain-soaked trench coat, a brass key on a chain around her neck, steps into the lamplight.
25 A She holds a small handset against her ear and clicks it off.
26 D CORA: Hello, Professor.
27 D HARTWIG: You're not the porter's niece.
28 D CORA: No.
29 D HARTWIG: Then who?
30 D CORA: Daniel Calloway was my brother.
31 A ¶ Hartwig takes a step back and bumps the telescope.
32 A It swings an inch and groans.
33 D HARTWIG: I was cleared. There was an inquiry.
34 D CORA: There was. It asked the wrong questions.
35 A ¶ She walks to the desk and puts the brass key on the ledger.
36 D CORA [CONT'D]: That's the key to the sub-basement. Daniel's key. It was in his coat, in the river.
37 D HARTWIG: That proves nothing.
38 D CORA: It proves he had a reason to go down there. Why would an astronomer go down?
39 D HARTWIG: Cora--
40 D CORA: You said my name. I didn't give it.
41 A ¶ Hartwig stops.
42 A The lamp hums.
43 A A moth circles it.
44 D HARTWIG: Heard it from the porter. At the gate.
45 D CORA: The porter retired in March.
46 A ¶ Silence.
47 A Hartwig sits slowly in his chair.
48 D HARTWIG: He fell, you understand. There was an instrument case on the stair. A terrible accident.
49 D CORA: Then why hide it?
50 D HARTWIG: Because he wasn't alone on the stair.
51 A ¶ He opens the ledger and turns it toward her.
52 A A page of neat handwriting, and below it a second hand, shakier.
53 D HARTWIG [CONT'D]: Read the last line. Not mine.
54 A ¶ Cora leans over the page.
55 A Her face does not change, but her hand finds the edge of the desk.
56 D CORA (reading, quietly): "I pushed him. Forgive me. - T. Wexler."
57 D HARTWIG: The old director. He died that winter. I've kept this page for eleven years, because I didn't know who to hand it to.
58 D CORA: You could have handed it to the police.
59 D HARTWIG: And be asked why I waited?
60 D CORA (beat): Yes. Why did you wait?
61 A ¶ Hartwig looks up at the slit of sky, where a single bright star hangs.
62 D HARTWIG: Because I was afraid he would come back and ask me the same thing.

### SCENE s00688 | INT. BAYVIEW DINER - BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): YUSUF, BEA, LENNY
1 A ¶ Empty except for one booth.
2 A Rain on the window.
3 A Fry oil smell.
4 A ¶ YUSUF, 30s, sits stiffly with his hands in his lap.
5 A BEA, 30s, slides in opposite.
6 A LENNY, 60s, their father, shuffles over with a coffee pot.
7 D BEA: Yusuf. You came.
8 D YUSUF: You said Dad was sick.
9 D LENNY: Not sick. Old.
10 D BEA: Lenny, sit down.
11 D LENNY: It's my diner.
12 D YUSUF (rising): Then why is it for sale?
13 A ¶ Lenny sets the pot down.
14 A It rattles.
15 D LENNY: Because your sister doesn't want it.
16 D BEA: Because you were never going to give it to him!
17 A ¶ Yusuf stands.
18 A Bea grabs his wrist.
19 D BEA [CONT'D]: Yusuf. Please.
20 A ¶ He sits.
21 A Lenny pours coffee, three cups, his hand steady.
22 D LENNY: Eat something, both of you.

### SCENE s00926 | INT. SIGNAL BUNKER, MOUNTAIN PASS - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA REYES-WINTHROP, LIEUTENANT KOFI ASANTE-BRIGGS, COMMAND
1 A ¶ A concrete cell the size of a freight elevator.
2 A One bare bulb.
3 A A field radio on a shelf, its dial glowing amber.
4 A Frost feathers the inside of a rifle slit.
5 A ¶ CAPTAIN ISADORA REYES-WINTHROP (30s, grey streak in black hair, eyes like cold coins) sits on an ammo box with her boots off, rubbing her feet.
6 A Opposite her, LIEUTENANT KOFI ASANTE-BRIGGS (20s, still wearing his helmet, as if afraid to take it off) stares at the radio.
7 A ¶ It hisses.
8 A A voice breaks through.
9 D COMMAND [V.O.] (over radio): All stations, cease fire. Repeat, cease fire. It's over.
10 A ¶ Neither moves.
11 D KOFI: Captain?
12 D ISADORA: I heard.
13 D KOFI: Is it a trick?
14 D ISADORA: Probably not.
15 A ¶ She pulls her socks back on, slowly.
16 A He finally removes his helmet.
17 A His hair is wet with sweat.
18 D COMMAND [V.O.] (over radio): Acknowledge, bunker seven.
19 A ¶ Isadora lifts the handset, lets her thumb hover, and sets it down again.
20 D ISADORA: Give me a minute.

### SCENE s00258 | EXT. TRAIN WATER TOWER, RAILWAY SIDING - NIGHT
Detected names (may be incomplete or contain aliases): WIDOW HESTER GALLOWAY-BIRD, TRAVELLING DOCTOR AMARA OKONKWO-WESTBROOK
1 A ¶ A wooden tower on iron legs.
2 A A pump house.
3 A Rails vanish into dark prairie.
4 A ¶ Two women sit under it, a small fire between them, boots stretched toward the heat.
5 A ¶ WIDOW HESTER GALLOWAY-BIRD (60s, wide-brimmed hat, shotgun across her knees) pokes the embers with a stick.
6 A ¶ TRAVELLING DOCTOR AMARA OKONKWO-WESTBROOK (40s, black bag, dusty skirt) writes in a leather book.
7 A ¶ The fire cracks.
8 D HESTER: You writing about me?
9 D AMARA: About the weather.
10 D HESTER: No weather in that book.
11 D AMARA: It's a long book.
12 A ¶ Hester snorts.
13 A Amara closes the cover, folds her hands.
14 D HESTER: Where you headed?
15 D AMARA: North. There's a fever in Redwater.
16 D HESTER: Redwater's dead.
17 D AMARA: Not all of it.
18 D HESTER: Not all, I'll grant you.
19 D AMARA: How far is it?
20 D HESTER: Two days on foot. One on a horse.
21 D AMARA: I've no horse.
22 D HESTER: I have.
23 D AMARA: Is she for sale?
24 D HESTER: She's not a she. She's a gelding. And no.
25 D AMARA: Rent, then.
26 D HESTER (to the fire): I've been waiting thirty years for someone to ask me that.
27 D AMARA: Is that a yes?
28 D HESTER: It's a story.
29 D AMARA: Tell it.
30 D HESTER: My husband had a horse. Same gelding's mother. He rode her to Redwater the winter of the sickness. Carried medicine.
31 D AMARA: And?
32 D HESTER: He didn't come back.
33 D AMARA: I'm sorry.
34 D HESTER: Don't be. He was a fool. He said she'd carry him anywhere.
35 D AMARA: Did she?
36 D HESTER: She came back. Alone. Saddle empty.
37 D AMARA (softly): She did her job.
38 D HESTER (to the fire): Everybody does, eventually.
39 A ¶ She stirs the embers.
40 A Sparks swirl into the black.
41 D HESTER [CONT'D] (louder, to the dark): Hear that? She'll ride.
42 D AMARA: Who are you talking to?
43 D HESTER: The horse. And the husband.
44 A ¶ Amara smiles in spite of herself.
45 A She reaches over, takes the stick, and pokes the fire herself.
46 D AMARA: Then let's sleep. We leave at dawn.
47 D HESTER: We?
48 D AMARA: You're not letting a stranger ride your husband's horse alone.
49 A ¶ Hester looks at her.
50 A For the first time, she laughs.
51 D HESTER: Doctor, you're smarter than you look.
52 D AMARA: I've been told.
53 A ¶ They settle back.
54 A The rails hum faintly in the cold.
55 A Far off, a whistle.

### SCENE s01271 | INT. BOMBED CATHEDRAL BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): IMRE HALASZ, TEODORO BASCO, LI WEI, AGNES FARQUHAR, RINGS
1 A ¶ Stone stairs spiral up into smoke.
2 A A great bronze bell hangs cracked.
3 A Slit windows.
4 A Dust falls like snow.
5 A ¶ SGT. IMRE HALASZ, 40s, grey in his beard, crouches at a slit window.
6 A Rifle braced.
7 A ¶ CPL.
8 A TEODORO BASCO, 20s, wiry, kneels beside a field radio.
9 A Headset crooked.
10 A ¶ PVT.
11 A LI WEI, 19, round glasses taped at the hinge, sits against the wall.
12 A Hugging his helmet.
13 A ¶ He stares at nothing.
14 A ¶ LT. AGNES FARQUHAR, 30s, mud to the knees, climbs into the room.
15 A Pistol out.
16 A Breathing hard.
17 A ¶ She drops beside the sergeant.
18 D FARQUHAR: Report.
19 D HALASZ: Two tanks at the bridge. Infantry behind them.
20 D BASCO: Command says hold.
21 D FARQUHAR: Hold what?
22 D BASCO: The tower, ma'am.
23 D FARQUHAR: We're in the tower.
24 D BASCO: That's what I told them.
25 D HALASZ: They've seen us. Light on the bell.
26 A ¶ He points.
27 A A glint on the bronze.
28 D FARQUHAR: Cover it.
29 D LI: With what?
30 D FARQUHAR: Your jacket.
31 A ¶ He doesn't move.
32 D HALASZ: Li.
33 D LI: Yes, Sergeant.
34 D HALASZ: Jacket.
35 A ¶ He peels it off.
36 A Climbs the bell frame.
37 A Drapes it over the metal.
38 A Hands shaking.
39 A ¶ A distant WHUMP.
40 D BASCO: Incoming!
41 A ¶ All four drop.
42 A ¶ The wall SHUDDERS.
43 A Plaster rains.
44 D FARQUHAR: Where?
45 D HALASZ: Short. Nave.
46 D BASCO: Sergeant, they're ranging us.
47 D LI: They're ranging us. They're ranging us.
48 D FARQUHAR: Private!
49 D LI: I'm fine.
50 D HALASZ: He's not fine.
51 D FARQUHAR: Nobody's fine. Basco, get me the battery.
52 D BASCO: Radio's dead on the artillery net.
53 D FARQUHAR: Then use the infantry net.
54 D BASCO: They don't answer.
55 D HALASZ: Because they're running.
56 A ¶ He turns back to the slit.
57 D HALASZ [CONT'D]: Infantry's on the bridge. Fifty metres.
58 D FARQUHAR: Count?
59 D HALASZ: Thirty. Forty.
60 D LI: We have nine magazines.
61 D BASCO: Eight. I gave one to the medic.
62 D LI: The medic's dead.
63 A ¶ Silence.
64 A Basco looks at him.
65 A Then away.
66 A ¶ Another WHUMP.
67 A Closer.
68 A ¶ The bell RINGS, one flat note.
69 A Dust pours from the vault.
70 D FARQUHAR: Down. Everyone down!
71 A ¶ She grabs Li by the collar.
72 A Hauls him flat.
73 A ¶ He grips her sleeve.
74 D LI: Lieutenant, I can't.
75 D FARQUHAR: You can.
76 D LI: I can't.
77 D HALASZ: Li. Look at me.
78 A ¶ He does.
79 D HALASZ [CONT'D]: Forty men on that bridge. Four of us up here. You know what that makes us?
80 D LI: Dead.
81 D HALASZ: Inconvenient.
82 A ¶ A breath.
83 A Something almost like a laugh.
84 A ¶ Basco slams the radio.
85 D BASCO: Got them! Got somebody!
86 D FARQUHAR: Who?
87 D BASCO: Don't know. Sounds like cavalry.
88 D HALASZ: We don't have cavalry.
89 D BASCO: Then it's somebody's cousin.
90 A ¶ The third shell lands.
91 A Direct hit on the stair below.
92 A The floor LURCHES.
93 A ¶ They scramble.
94 A Rifles up.
95 A Faces white with plaster.
96 D FARQUHAR: Positions.
97 A ¶ He crawls to the slit.
98 A She takes the east window.
99 A Basco kneels, radio in one fist, rifle in the other.
100 A ¶ Li lifts his rifle.
101 A Steadies it on the sill.
102 D LI: Sergeant?
103 D HALASZ: Yes?
104 D LI: When it starts, don't let me stop.
105 D HALASZ: I won't.
106 A ¶ The bell hums.
107 A Beyond it, boots on the bridge.
108 D HALASZ [CONT'D]: Wait for it.
