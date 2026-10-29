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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00004.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02327 | EXT. BAIL BONDS DRIVE-THRU - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL, HUGO, DOUG
1 A ¶ A cinderblock shack with a pneumatic tube and a speaker post.
2 A Neon: BAIL 24/7.
3 A Rain.
4 A ¶ MARISOL, 30s, in a cardigan, sits inside behind bulletproof glass, eating cereal from a mug.
5 A ¶ A battered hatchback pulls up.
6 A HUGO, 50s, rolls down the window and leans toward the post.
7 D HUGO: Hi. I'd like to bail out my brother.
8 D MARISOL (through the speaker): Name?
9 D HUGO: Rodolfo.
10 D MARISOL: Charge?
11 D HUGO: Is "sleepwalking" a charge?
12 A ¶ She stops chewing.
13 D MARISOL: Sir.
14 D HUGO: He took a municipal bus. In pajamas. Drove it to Tulsa.
15 D DOUG [O.S.] (over the speaker, scratchy): Marisol, is that the sleepwalker?
16 D MARISOL: Doug, you're on the intercom again.
17 D DOUG [O.S.]: Tell him it's two thousand.
18 D HUGO: Two thousand?
19 D MARISOL: He said that on purpose.
20 D DOUG [O.S.]: I did.
21 A ¶ Hugo pulls out a fistful of crumpled bills.
22 A Counts.
23 A Frowns.
24 A Looks up.
25 D HUGO: I have eleven hundred.
26 D MARISOL: Leave your watch.
27 D HUGO: It's my father's watch.
28 D DOUG [O.S.]: Then leave your car.
29 D HUGO: Then how do I take him home?
30 A ¶ A long beat.
31 A Marisol sets the mug down.
32 A Presses the tube button.
33 A A canister whooshes toward Hugo's window.
34 D MARISOL: Sign the form.

### SCENE s01443 | EXT. MOSSY STONE BRIDGE OVER A FOGGY GORGE - DAY
Detected names (may be incomplete or contain aliases): GRUMBLEWICK, ELOWEN THISTLEDOWN, BRAMBLEKIN
1 A ¶ A humpbacked bridge, green with moss, sits across a ravine of mist.
2 A At its center, a stool carved from a single mushroom cap.
3 A ¶ On the stool sits GRUMBLEWICK (ancient troll, belly like a boulder, a tiny abacus in his lap).
4 A Before him stand two travelers: ELOWEN THISTLEDOWN (young, herbalist's satchel) and a hooded PEDDLER named BRAMBLEKIN (stooped, bells on his cloak).
5 D GRUMBLEWICK: Toll's three coppers.
6 D ELOWEN: Three?
7 D BRAMBLEKIN: Three?
8 D ELOWEN: ^It was two last spring.
9 D BRAMBLEKIN: ^It was two last spring.
10 A ¶ Grumblewick flicks a bead on his abacus.
11 D GRUMBLEWICK: Inflation.
12 D ELOWEN: We can pay.
13 D GRUMBLEWICK: Then do.
14 A ¶ Elowen counts out coins.
15 A Bramblekin watches the fog.
16 D BRAMBLEKIN: Ever think about crossing yourself?
17 D GRUMBLEWICK: Every day.
18 A ¶ He pockets the coppers, hums a flat tune, and waves them on.

### SCENE s01653 | INT. HOLLOW WHALE-BONE MARKET - NIGHT
Detected names (may be incomplete or contain aliases): ELDRIN, SYLVETTE, GORRAK, THISTLE
1 A ¶ A cathedral of ribs.
2 A Moonlight slants between them.
3 A Stalls of glass beads, herbs, bottled lightning.
4 A Torches burn blue.
5 A ¶ ELDRIN, 40s, a gaunt wizard in a cloak stitched with eyes, stalks between stalls.
6 A SYLVETTE, 30s, a thief in a green hood, trails him by three paces.
7 A GORRAK, 50s, a troll in a leather apron, hauls a barrel.
8 A THISTLE, 10, a barefoot child with a lantern, skips ahead.
9 D ELDRIN (to everyone): Hold your wares! The market is closing!
10 A ¶ He lifts his staff.
11 A Eyes on his cloak snap open, scanning the stalls.
12 D SYLVETTE (muttering): Closing. He says closing like it means something.
13 A ¶ She slips a vial from a stall and into her sleeve.
14 A He doesn't turn.
15 A ¶ He stops at a stall.
16 A Taps a jar of black powder.
17 D ELDRIN: This. How much?
18 D GORRAK: For him? Ten crowns.
19 D ELDRIN: For whom?
20 D GORRAK: For whoever asks.
21 D ELDRIN (to himself): Everyone asks.
22 A ¶ He drops coins into a bowl.
23 A Takes the jar.
24 A Holds it up to a torch.
25 A It glows.
26 A Behind him, Thistle tugs at Gorrak's apron.
27 D THISTLE: Is that a dragon's tooth?
28 D GORRAK: It's a very old tooth.
29 D THISTLE: Can I touch it?
30 D GORRAK: No.
31 A ¶ She does.
32 A Sparks leap from her fingertips.
33 A She yelps, grinning.
34 D SYLVETTE (to Thistle, low): Give that here.
35 D THISTLE: It's mine.
36 D SYLVETTE: It's his.
37 D THISTLE: He gave it to me.
38 D SYLVETTE: He doesn't give anything to anyone.
39 A ¶ Eldrin turns.
40 A His eyes, on the cloak, all swivel to Sylvette.
41 A His real eyes stay on Thistle.
42 D ELDRIN (to Thistle): Keep it.
43 D THISTLE: Truly?
44 D ELDRIN (to Sylvette): And you may keep the vial.
45 A ¶ Sylvette stops cold.
46 A Slowly takes the vial from her sleeve.
47 D SYLVETTE: How long have you known?
48 D ELDRIN: Since you took it.
49 A ¶ He turns away.
50 A The blue torches gutter.
51 A High above, between the ribs, a pale shape moves against the moon.
52 A A vast wing.
53 A A slow breath.
54 D GORRAK (to the whole market): Everybody down.
55 A ¶ The market goes still.
56 D THISTLE (whispering): Is it the whale?
57 D ELDRIN: It is the whale's dream.
58 A ¶ He lowers his staff.
59 A The shape passes.
60 A The moonlight returns.
61 A Somewhere a bead rolls off a stall and clinks.

### SCENE s01313 | EXT. FROZEN MOUNTAIN LAKE - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN ROSALIE KERR, JIN-HO PARK, BEATRIZ SOLANO, THADDEUS OKAFOR, LENNOX BELL, PILAR MENDOZA-RUIZ, THRUM
1 A ¶ A vast white bowl ringed by black pines.
2 A A bush plane lies on its belly in the middle of the ice, tail snapped, one wing crumpled.
3 A Smoke curls from the engine.
4 A ¶ Six survivors huddle around the wreck, their breath a ragged mist.
5 A ¶ CAPTAIN ROSALIE KERR, 50s, the pilot, in a bomber jacket gone to rags, sits against the fuselage.
6 A A bloody bandage on her forearm.
7 A Her face is grey.
8 A ¶ DR. JIN-HO PARK, 40s, in a stained parka, kneels beside her, checking her pulse.
9 A His fingers are blue.
10 A ¶ BEATRIZ SOLANO, 30s, in a fleece, strides the perimeter with a flare gun.
11 A She scans the sky.
12 A ¶ MR. THADDEUS OKAFOR, 60s, a retired judge in a three-piece suit and galoshes, stands rigid with his briefcase on his chest.
13 A ¶ LENNOX BELL, 20s, a bicycle courier, perches on the broken wing, headphones around his neck.
14 A ¶ PILAR MENDOZA-RUIZ, 30s, a student, crouches by the engine, feeding sticks into a sputtering fire.
15 D PARK: She's bleeding too much.
16 D BEATRIZ: Then stop it.
17 D PARK: I'm trying.
18 D OKAFOR: Gentlemen, ladies. Order, please.
19 D LENNOX: Dude, there's no order. We're on a lake.
20 D PILAR: Fire's dying.
21 D BEATRIZ: Feed it.
22 D PILAR: With what?
23 D BEATRIZ: Everything.
24 A ¶ Okafor sets down the briefcase.
25 A Opens it.
26 A Hundreds of pages of legal briefs.
27 A He tears them out in fistfuls, tosses them into the flames.
28 A They flare gold.
29 D OKAFOR: Thirty years of my life.
30 D LENNOX: Right on.
31 A ¶ A distant THRUM.
32 A Everyone freezes.
33 A The sound grows.
34 A Beatriz raises the flare gun.
35 D BEATRIZ: Quiet.
36 A ¶ She fires.
37 A A red star climbs into the sky, hangs, drifts.
38 A The THRUM stops.
39 A ¶ Then it starts again, closer.
40 A Louder.
41 D PILAR: They saw it.
42 D PARK: Don't say that yet.
43 A ¶ A helicopter bursts over the treeline, blades flogging the pines.
44 A Lennox leaps from the wing, waving both arms.
45 A Okafor takes off his hat.
46 A Rosalie lifts her head and smiles.
47 D KERR (barely): About time.
48 A ¶ Beatriz drops the flare gun.
49 A Pilar sobs into her scarf.
50 A Park lets out a breath he has held since the crash and slumps against the fuselage.

### SCENE s02147 | EXT. HIGHWAY 9 UNDERPASS - DAY
Detected names (may be incomplete or contain aliases): BARTEK LISOWSKI, JULES, PENELOPE
1 A ¶ A white delivery van reading "SWEET NOTHINGS BAKERY" sits wedged under a concrete overpass, its roof crushed against the girders.
2 A Traffic backs up for a mile.
3 A Horns.
4 A ¶ BARTEK LISOWSKI, 50s, driver, round and sweating, stands on the bumper inspecting the roof with the dignity of a surgeon.
5 A His assistant JULES, 22, nose ring, apron over a hoodie, holds a phone to her ear and a clipboard to her chest.
6 A The back doors are open.
7 A Inside, a seven-tier wedding cake, miraculously upright, trembles with every honk.
8 D JULES (into the phone): Pen, we're fine. We're almost there.
9 D PENELOPE [V.O.] (phone): The ceremony is in twenty minutes.
10 D JULES: Yes. Yes. I know.
11 D BARTEK (to himself): Twelve feet two. The sign said twelve feet six.
12 D JULES (covering the phone): Bartek, the sign was for the other bridge.
13 D BARTEK: There is only one bridge.
14 D JULES: There are two. We took the wrong one.
15 D PENELOPE [V.O.] (phone): Jules, what was that?
16 D JULES: Nothing! A bird!
17 D BARTEK (to the traffic): Please! Please! A little patience!
18 A ¶ A horn answers him.
19 A Then another.
20 A He mops his forehead.
21 D BARTEK [CONT'D] (to Jules): Let the air out of the tires.
22 D JULES: The tires?
23 D BARTEK: It lowers the van. An inch. Maybe two.
24 D PENELOPE [V.O.] (phone): Jules, I can hear honking. Where are you?
25 D JULES: It's a parade.
26 D PENELOPE [V.O.]: On a Saturday morning?
27 D JULES: It's a very Saturday parade.
28 A ¶ Bartek kneels.
29 A Unscrews a valve.
30 A Hiss.
31 A The van sinks half an inch, then stops.
32 A The cake sways.
33 A Jules gasps.
34 A Bartek holds up one palm like a conductor.
35 D BARTEK: Steady. Steady.
36 A ¶ The cake settles.
37 A A man in the next car leans on his horn.
38 D BARTEK [CONT'D] (whisper): I will end him.
39 D JULES: Bartek!
40 D BARTEK: Pardon. A joke.
41 D PENELOPE [V.O.] (phone, sharp): Jules. Are you at the church, or are you not at the church?
42 D JULES: Pen, we will be at the church. I swear.
43 A ¶ Bartek unscrews the second valve.
44 A The van sinks another inch.
45 A The roof shrieks off the girder.
46 A The van rolls free.
47 A The cake lurches.
48 A Jules shrieks.
49 A Bartek, arms wide, stands in the road in front of the van as if he could catch the cake with his body.
50 A ¶ It stays.
51 A All three seconds of silence are enormous.
52 D BARTEK [CONT'D] (to the traffic, hoarse): You may go now.
53 A ¶ Horns erupt, joyfully.

### SCENE s01453 | INT. ARLO'S APARTMENT - ENTRY HALL - NIGHT
Detected names (may be incomplete or contain aliases): ARLO PENDERGAST
1 A ¶ Dark.
2 A A key rattles in the lock.
3 A The door swings inward, bumping a stack of unopened mail.
4 A ¶ ARLO PENDERGAST (40s, rain-soaked suit, a cake box under one arm, a party hat still on his head from a party that ended badly) steps inside.
5 A He closes the door with his heel.
6 A Flips the switch.
7 A ¶ Nothing.
8 D ARLO: Of course.
9 A ¶ He fumbles in the dark.
10 A Finds the wall.
11 A Finds a plant.
12 A Apologizes to the plant.
13 D ARLO [CONT'D]: Sorry.
14 A ¶ The red light of an answering machine blinks on a side table.
15 A He stares at it.
16 A He presses PLAY.
17 D ARLO [V.O.] (answering machine, cheerful): Hi! You've reached Arlo. I'm either out having an amazing time or I'm in the bath. Leave a message!
18 A ¶ A long beep.
19 A Silence.
20 A Arlo (the real one) exhales through his nose.
21 A ¶ He sets the cake box on the table.
22 A Opens it.
23 A Inside, a small cake, the frosting smeared, a single candle bent sideways.
24 A The words "HAPPY 40TH" have slid into "HAPPY 4 TH."
25 D ARLO: Happy 4th.
26 A ¶ He picks up the candle.
27 A Lights it with a match from his pocket.
28 A The flame illuminates his face from below, hollow-eyed, absurd under the paper hat.
29 A ¶ He sits on the floor.
30 A Tilts the cake toward himself.
31 A Takes a breath to blow it out.
32 A ¶ The answering machine clicks.
33 A Another message.
34 D ARLO [V.O.] (answering machine, slightly drunk): Hey, it's me. Future me. Just wanted to say, whatever you wished for, you're welcome.
35 A ¶ Arlo sits perfectly still.
36 A The candle burns down.
37 A ¶ He laughs.
38 A First small, then helpless, then in great wheezing gasps, tears running into the party hat's elastic.
39 A He blows out the candle, sits in the smoke, and eats the cake with his fingers.

### SCENE s01377 | INT. ST. CLEMENT'S HOSPITAL - LAUNDRY CHUTE LANDING - NIGHT
Detected names (may be incomplete or contain aliases): HELEN VOSS, NURSE AGNES BRANDT, CECILIA MARCH
1 A ¶ A cramped steel landing at the bottom of the laundry chute, lit by one humming tube.
2 A Canvas bins.
3 A Stacks of folded sheets.
4 A A radiator ticks.
5 A ¶ DR. HELEN VOSS, 40s, rumpled white coat, crouches beside a bin.
6 A Her fingers are on a patient's wrist.
7 A ¶ NURSE AGNES BRANDT, 50s, thick glasses, kneels across from her with a penlight.
8 A Between them, on a pile of sheets, lies an unconscious elderly woman in a hospital gown.
9 D HELEN: Pulse is thready.
10 D AGNES: She came down the chute?
11 D HELEN: Three floors. Bin broke her fall.
12 A ¶ She presses two fingers to the woman's neck.
13 A Leans in close.
14 D AGNES: How long has she been missing?
15 D HELEN: Since the evening round.
16 A ¶ Agnes lifts the old woman's eyelid.
17 A Shines the light.
18 A The pupil shrinks.
19 D AGNES: She's responding.
20 D HELEN: Good.
21 A ¶ She starts to rise.
22 A The old woman groans.
23 A Helen drops back down.
24 A ¶ CECILIA MARCH, 80s, wild white hair, gown twisted around her, opens bleary eyes.
25 A Her gaze goes from one face to the other.
26 D CECILIA: Is it Tuesday?
27 D HELEN: It's Thursday, Mrs. March.
28 D CECILIA: I have to feed the hens.
29 A ¶ Agnes shoots Helen a worried glance.
30 A Helen shakes her head, a small signal.
31 A Wait.
32 A ¶ She takes the old woman's hand.
33 A Squeezes.
34 A ¶ Cecilia squeezes back, strong.
35 A Too strong.
36 A Her fingers lock.
37 D CECILIA [CONT'D]: They'll peck each other if I don't.
38 A ¶ Helen tries to pull free.
39 A Can't.
40 A Agnes reaches to help.
41 A Cecilia's other hand snaps out and catches her wrist.
42 A ¶ Both women freeze.
43 D AGNES: Mrs. March, please let go.
44 D CECILIA: Where's my husband?
45 A ¶ She sits up.
46 A Fast.
47 A The sheets slide off.
48 A Her eyes are suddenly very clear.
49 D HELEN: He's not here.
50 D CECILIA: He promised he'd come.
51 A ¶ She pushes herself to her feet.
52 A Helen scrambles back.
53 A Agnes grabs for the old woman's arm and gets a handful of gown.
54 A ¶ The radiator bangs.
55 A Cecilia flinches.
56 A Her grip loosens.
57 A ¶ She turns toward the sound.
58 A Stares at it.
59 A Her shoulders sag.
60 D CECILIA [CONT'D] (small): He's been dead nine years, hasn't he.
61 A ¶ The two women exchange a look.
62 A Neither answers.
63 A ¶ She sits down again, slowly, on the pile of sheets, and puts her hands in her lap.
64 A She seems to shrink.
65 A ¶ Agnes touches her shoulder, gently now.
66 A Helen exhales, long and shaky, and presses the call button on the wall.
67 D HELEN (into the intercom): Gurney to laundry level. Patient found. Stable.
68 A ¶ She releases the button.
69 A Looks down at the old woman.
70 A Smiles, tired.
71 A ¶ Cecilia pats her hand.
72 A Almost motherly.

### SCENE s00087 | INT. HYPERBARIC CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI ESCOBEDO, PAUL ZIELINSKI, TECH ARDEN FLETCHER, CHARGE NURSE BIRGITTA
1 A ¶ Steel hull.
2 A Porthole glass.
3 A Pipes that shudder as pressure climbs.
4 A ¶ DR. NAOMI ESCOBEDO (40s, scrubs, calm eyes) adjusts a valve while PAUL ZIELINSKI (60s, diver, wrapped in a thin blanket) stares at the gauge and TECH ARDEN FLETCHER (20s, headset, ponytail) logs numbers on a clipboard beyond the porthole, tapping the glass whenever the needle moves.
5 D CHARGE NURSE BIRGITTA [V.O.] (intercom): Chamber, status?
6 D NAOMI: Two atmospheres. Holding.
7 D PAUL: Twice the weight on my chest. Same as the day I surfaced too fast.
8 D NAOMI: You came up in eleven minutes. Nobody does that and walks.
9 D PAUL: I walked.
10 D NAOMI: You crawled. I read the report.
11 D PAUL: I don't remember crawling.
12 D NAOMI: You will tomorrow.
13 D PAUL: Will I.
14 D NAOMI: That's what we do here.
15 D BIRGITTA [V.O.] (intercom): Doctor, ten minutes remaining.
16 D NAOMI: Copy.

### SCENE s02394 | INT. SUPREME COURT ANTEROOM - NIGHT
Detected names (may be incomplete or contain aliases): ATTORNEY JULIAN ASHWORTH-BELLAMY, JUDGE PRENTISS
1 A ¶ A tall mahogany room lined with law reports.
2 A A green banker's lamp.
3 A A black rotary telephone on a long cord.
4 A ¶ ATTORNEY JULIAN ASHWORTH-BELLAMY, fifties, in shirtsleeves, paces with the receiver at his ear.
5 A His tie is loosened, his collar open.
6 D JULIAN: Judge, with respect, the petition was filed before the deadline.
7 D JUDGE PRENTISS [V.O.] (over phone): It was filed at 12:01, Mr. Ashworth-Bellamy.
8 D JULIAN: By a clock that was running two minutes slow.
9 D JUDGE PRENTISS [V.O.]: Then I'm afraid your clock is the court's problem no longer.
10 A ¶ Julian stops pacing.
11 A He sets the lamp straight with one finger.
12 A Breathes.
13 D JULIAN: Your Honor. A man's life is at stake.
14 D JUDGE PRENTISS [V.O.]: And I've read every page of it.
15 D JULIAN: Then you know.
16 D JUDGE PRENTISS [V.O.]: I know the rules.
17 D JULIAN (rising): To hell with the rules. He's going to die in six hours for a crime he did not commit!
18 A ¶ A pause on the line.
19 A Julian slams his palm on the desk.
20 A The lamp rattles.
21 D JUDGE PRENTISS [V.O.] (quietly): Then I suggest you spend the next six hours more wisely than shouting at me.
22 A ¶ Click.
23 A Dial tone.
24 A Julian stands in the lamplight, the receiver still against his ear, as the hum fills the room.

### SCENE s01007 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): ALOYSIUS, BRYONY, CASSIUS, DELPHINE, EZRA
1 A ¶ A domed theater gone to ruin.
2 A Rows of broken chairs fan toward a hulking star projector.
3 A Moonlight slips through a crack in the dome.
4 A Dust drifts like constellations.
5 A ¶ ALOYSIUS (60s, caretaker's coat, keys on his belt) leads the way with a flashlight.
6 A BRYONY (30s, journalist, notebook) follows.
7 A CASSIUS (20s, her photographer, three cameras round his neck) hangs back.
8 A DELPHINE (40s, astronomer, a thick scarf) runs a hand along the projector.
9 A EZRA (teen, hoodie, headphones, the caretaker's grandson) sits in the front row with his feet on the seat in front.
10 D ALOYSIUS: The last show was in eighty-nine. They forgot to turn the stars off.
11 D BRYONY: Forgot?
12 D ALOYSIUS: Or didn't want to.
13 D CASSIUS: I can't see anything.
14 D DELPHINE: That's the point.
15 A ¶ She flips a switch on the projector.
16 A Nothing.
17 A Another.
18 A A hum builds.
19 A The dome shudders.
20 A A smear of light climbs the plaster.
21 D EZRA (without looking up): It's just the old bulb.
22 D ALOYSIUS: It's the stars.
23 A ¶ The light resolves into a tangle of pinpoints, swirling in the wrong places.
24 A Delphine tilts her head, frowning.
25 A The constellations are wrong.
26 A Orion is facing the wrong way, and a seventh star burns where there should be six.
27 D BRYONY: Is that supposed to happen?
28 D DELPHINE: No.
29 A ¶ The seventh star pulses.
30 A Cassius lifts a camera and the flash blinds them.
31 A When their eyes recover, Ezra is standing in the aisle, staring up, headphones around his neck, mouth slightly open.
32 D ALOYSIUS: Ezra.
33 D EZRA: It knows my name.
34 D ALOYSIUS: What did you say?
35 D EZRA: It's whispering.
36 A ¶ Delphine rushes to the projector and kills the power.
37 A The dome goes black.
38 A A single hiss ripples through the room, and then nothing.
39 A In the dark, Cassius's camera clicks once on its own.

### SCENE s01805 | INT. ORCHARD HOUSE - KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): BEN, OYELARAN-STAHL, ADELAIDE, MARCELLUS, PHILIPPA
1 A ¶ A farm kitchen before sun-up.
2 A A pot of oatmeal rests on the stove.
3 A A thermos, a lunch pail, and a pair of small rubber boots stand by the door.
4 A The window is a blue square.
5 A ¶ BENEDICT "BEN" OYELARAN-STAHL, fifties, sits at the table with his hat on, turning a coffee cup a quarter turn at a time.
6 A His wife ADELAIDE sits across from him and does not touch her bowl.
7 A Their son MARCELLUS, seventeen, stands at the sink with a duffel bag over his shoulder, running the tap.
8 A Their daughter PHILIPPA, eleven, sits on the stairs in her nightgown, chin on knees.
9 A ¶ The tap runs.
10 A Nobody turns it off.
11 D BEN: Your mother packed you the good bread.
12 D MARCELLUS: Thanks, Mom.
13 D ADELAIDE: Mind the crust. It's still warm.
14 D PHILIPPA: Marcy, are you taking the tractor?
15 D MARCELLUS: No, Pip. The bus.
16 D PHILIPPA: Then who's going to drive the tractor?
17 D BEN: I will.
18 D PHILIPPA: You don't like the tractor.
19 D BEN: I like it well enough.
20 A ¶ Ben stands, crosses to the window, looks out at the dark orchard.
21 A His shoulders do not move.
22 A Marcellus finally shuts the tap off.
23 A The kitchen goes very still.
24 D ADELAIDE: You've got your ticket?
25 D MARCELLUS: In my coat.
26 D ADELAIDE: Show me.
27 A ¶ He pulls it out.
28 A She reads it as though it were a letter, then folds it carefully along its crease and hands it back.
29 A Her fingers linger on his sleeve.
30 D PHILIPPA: Can I come to the bus stop?
31 D BEN: No.
32 D PHILIPPA: Why not?
33 D BEN: Because there's school.
34 D PHILIPPA: It's Saturday.
35 D BEN (a beat): So it is.
36 A ¶ Marcellus puts down the duffel.
37 A Philippa runs down the stairs and hugs his leg.
38 A He ruffles her hair.
39 A Ben takes his hat off and holds it by the brim.
40 D BEN [CONT'D]: Marcellus.
41 D MARCELLUS: Yes, Dad.
42 D BEN: The trees will still be here.
43 D MARCELLUS: I know.
44 D BEN: When you come back.
45 D MARCELLUS: I know.
46 A ¶ Adelaide stands, takes the lunch pail from the shelf, and fills it, slowly, with bread, a wedge of cheese, an apple.
47 A She snaps the lid shut and holds it out.
48 A He takes it.
49 A For a moment both of them keep a hold of it.
50 D ADELAIDE: Go on, then. You'll miss it.
51 A ¶ He nods.
52 A At the door he sits on the bench and pulls on his boots, taking much longer than boots require.
53 A Ben puts his hat on, takes it off, and puts it on again.
54 D PHILIPPA: Marcy?
55 D MARCELLUS: Yeah, Pip?
56 D PHILIPPA: You forgot your thermos.
57 A ¶ She holds it up.
58 A He takes it and kisses the top of her head, and then, with his free hand, reaches for Ben's.
59 A Ben shakes it once, briskly, as he would with a neighbor, and then pulls him in and holds him a second too long.
60 A ¶ Marcellus slings the duffel and goes out into the blue.
61 A The screen door bangs.
62 A Nobody moves.
63 A Then Adelaide ladles oatmeal into Ben's bowl and puts it in front of him.
64 D ADELAIDE: Eat.
65 D BEN: I'm not hungry.
66 D ADELAIDE: Eat anyway.
67 A ¶ He sits.
68 A He eats.

### SCENE s01139 | INT. WEDDING TENT - GENERATOR TRAILER - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI, HENRIK, GRAN IMELDA, BEST MAN DEWEY
1 A ¶ A cramped steel trailer behind the marquee.
2 A Cables, fuel cans, a dim bulb.
3 A The generator thrums.
4 A Through the thin wall, a band plays a slow song.
5 A ¶ NAOMI (late 20s, bridesmaid dress, boots) sits on a crate with a flask.
6 A She's been crying, a little, and has wiped it off.
7 A ¶ HENRIK (30s, rolled shirtsleeves, tie loosened) slips in, shutting the door.
8 A He doesn't see her.
9 A He leans his forehead against the wall.
10 A ¶ She coughs.
11 A ¶ He spins.
12 D HENRIK: Jesus.
13 D NAOMI: Sorry. I was here first.
14 D HENRIK: You're a bridesmaid.
15 D NAOMI: You're the groom's brother.
16 A ¶ He nods.
17 A She holds out the flask.
18 A He takes it.
19 A Drinks.
20 A Hands it back.
21 D HENRIK: Why are you in the generator trailer?
22 D NAOMI: It's the only quiet place. You?
23 D HENRIK: Same.
24 A ¶ They sit in silence.
25 A The band shifts to a waltz.
26 D NAOMI: You gave a nice toast.
27 D HENRIK: It was a lie.
28 D NAOMI: All toasts are lies.
29 A ¶ He laughs.
30 A She laughs.
31 A Then it fades.
32 D HENRIK: Do you know the bride well?
33 D NAOMI: Twelve years. Since college.
34 D HENRIK: Then you know why she's marrying him.
35 D NAOMI (carefully): I know why she thinks she is.
36 A ¶ He studies her.
37 A She holds the look.
38 A Outside, a spotlight sweeps the tent wall.
39 D HENRIK (to himself): I should go back.
40 D NAOMI: You should.
41 A ¶ Neither moves.
42 A He sits on a fuel can across from her.
43 A Closer than before.
44 A She offers the flask again.
45 A Their fingers touch.
46 A She doesn't pull away.
47 D HENRIK: Naomi.
48 D NAOMI: You remember my name.
49 D HENRIK: It's on the place cards.
50 D NAOMI: Is that all it is?
51 A ¶ He leans in.
52 A She leans in.
53 A A heartbeat from a kiss.
54 A ¶ The trailer door bangs open.
55 A GRAN IMELDA (80s, silk shawl, cane) fills the frame, with BEST MAN DEWEY (30s, drunk, tux jacket on backwards) on her arm.
56 D GRAN IMELDA (to the whole tent): Found them!
57 D DEWEY (slurring): The bride's been looking for you, Henrik. She says you're late for the photograph.
58 A ¶ Naomi and Henrik spring apart.
59 D GRAN IMELDA (to Naomi, pointed): And you, dear. She's looking for you, too.
60 A ¶ Naomi stands, smooths her dress.
61 A Henrik takes his tie in both hands.
62 D NAOMI (low, to Henrik): Don't let this be the end of it.
63 D HENRIK (low): It isn't.
64 A ¶ They walk past Gran Imelda together into the lights.
65 A Imelda watches them go, then turns to Dewey.
66 D GRAN IMELDA: Young man. Never tell the groom's mother what you saw.
67 D DEWEY (muttering): I didn't see anything.

### SCENE s02060 | INT. GRAND HOTEL - PENTHOUSE SUITE - NIGHT
Detected names (may be incomplete or contain aliases): GENEVIEVE MONTAGUE-OSEI, MASKED MAN, LUCIEN FAIRWEATHER-ODUYA
1 A ¶ Gilded mirrors.
2 A A white piano.
3 A A cocktail cabinet inlaid with mother-of-pearl.
4 A French windows open on a balcony, and beyond it a city of lights.
5 A ¶ A figure in a tuxedo and a domino mask kneels at a wall safe behind a painting, working a stethoscope against its steel face.
6 A He is lean, gloved, silent.
7 A ¶ The doorknob turns.
8 A He freezes.
9 A The painting drops back over the safe.
10 A He slides behind a velvet curtain.
11 A ¶ A woman enters: GENEVIEVE MONTAGUE-OSEI (50s, evening gown, a glass of champagne in one hand).
12 A She flicks on a lamp.
13 A She sets down her glass on the piano.
14 A She crosses to the painting.
15 A Adjusts it by a half inch.
16 D GENEVIEVE (without turning): You may come out. I can smell the rubber.
17 A ¶ The curtain stirs.
18 A The MASKED MAN steps out, hands raised, glove squeaking.
19 D MASKED MAN: Madame.
20 D GENEVIEVE: Your name.
21 D MASKED MAN: That would be unwise.
22 D GENEVIEVE: Then I shall call you Monsieur Curtain.
23 D MASKED MAN: Charming.
24 A ¶ She lifts the champagne, sips, studies him over the rim.
25 D GENEVIEVE: You are very good. The alarm is quiet.
26 D MASKED MAN: I had help.
27 D GENEVIEVE: The bellhop?
28 D MASKED MAN: The night manager.
29 D GENEVIEVE: Ah. Lucien. He has always been lazy.
30 A ¶ She walks around him in a slow circle.
31 A He turns to follow.
32 A They halt, face to face, close enough to touch.
33 D GENEVIEVE [CONT'D]: What is it you want?
34 D MASKED MAN: Nothing that belongs to you.
35 D GENEVIEVE: Everything in this room belongs to me.
36 D MASKED MAN: Not the diamonds.
37 D GENEVIEVE (smiling): Ah. You know about the diamonds.
38 D MASKED MAN: I know they're not real.
39 A ¶ The smile fades.
40 A A beat.
41 A Then he lunges for the painting; she smashes her glass against the piano and slashes at him with the stem.
42 A He ducks, spins, wrenches the painting down.
43 A She grabs his arm.
44 A They stagger, crash into the cocktail cabinet, and bottles shatter.
45 A ¶ He gets the painting.
46 A She gets the mask.
47 A It tears away.
48 A Beneath it: the face of a man in his sixties, lined, gentle.
49 A LUCIEN FAIRWEATHER-ODUYA, the night manager, panting.
50 D GENEVIEVE [CONT'D] (whispering): Lucien.
51 D LUCIEN: Genevieve.
52 D GENEVIEVE: You said you would never.
53 D LUCIEN: You said the diamonds were real.
54 A ¶ They stand, ruined, among the glass.

### SCENE s01967 | EXT. MARATHON AID STATION - MILE 22 - 3 A.M.
Detected names (may be incomplete or contain aliases): OTTILIE MARSH, PAVEL DVORAK, YOSHIRO TANABE
1 A ¶ A folding table under a sodium streetlight.
2 A Paper cups in rows.
3 A A cooler of orange slices.
4 A The course winds into the dark.
5 A ¶ OTTILIE MARSH, 60s, in a reflective vest, tops up cups from a jug.
6 A PAVEL DVORAK, 30s, a volunteer, sits on a camp chair and stares at the road.
7 A YOSHIRO TANABE, 40s, a medic, arranges bandages in a tackle box.
8 A ¶ Ottilie finishes the row.
9 A She wipes her hands.
10 A She glances at the road, then at Pavel.
11 A He does not look at her.
12 A ¶ She slides a cup across the table.
13 A He takes it.
14 A He holds it without drinking.
15 D YOSHIRO: Anyone coming?
16 D OTTILIE: Not yet.
17 D PAVEL: They'll be a while. The leaders passed an hour ago.
18 D YOSHIRO: I'd run it again.
19 D OTTILIE: You would not.
20 D YOSHIRO: I would.
21 A ¶ She smiles.
22 A He does not.
23 A Pavel gets up and stands at the edge of the light.
24 A He puts the cup down on the table without a word.
25 A After a moment she follows his gaze.
26 D OTTILIE: It was last year, wasn't it.
27 D PAVEL: I'm fine.
28 A ¶ She walks to the table, takes up the jug, and carries it to him.
29 A She holds out a full cup, and he accepts it with both hands.
30 D YOSHIRO: Headlights.
31 A ¶ They all turn.
32 A A lone runner appears at the edge of the dark, slow and swaying.
33 A Pavel steps forward with the cup held out in front of him like an offering.

### SCENE s01692 | INT. ROOFTOP CONSERVATORY - EVENING
Detected names (may be incomplete or contain aliases): SOLANGE MARCHETTI, ARTHUR BEAUMONT, CORDELIA BEAUMONT, LEOPOLD VASS, HANNELORE KRUG, LAZARUS RENNICK
1 A ¶ Glass and ironwork.
2 A Orchids in terra-cotta pots.
3 A A string quartet tunes in the corner.
4 A ¶ SOLANGE MARCHETTI (30s, emerald dress) accepts a champagne flute while her fiancé, ARTHUR BEAUMONT (30s, tuxedo) is intercepted by his mother, CORDELIA BEAUMONT (60s, pearls), who plucks a stray thread from his lapel as the cellist, LEOPOLD VASS (20s, nervous), drops his bow and scrambles after it, and the violist, HANNELORE KRUG (40s, steel-rimmed glasses), steadies a music stand that Leopold's elbow almost topples, and Solange, observing all this, steps backward into a potted fern.
5 D SOLANGE: Sorry, ferns. Sorry.
6 D ARTHUR: You all right?
7 D SOLANGE: Splendid.
8 A ¶ At the door, LAZARUS RENNICK (30s, rumpled suit, a mysterious envelope) appears.
9 A He catches her eye, taps his chest twice.
10 A She stiffens.
11 A Arthur doesn't notice.
12 D CORDELIA: Arthur, stand straight.
13 D ARTHUR: I am standing straight, Mother.
14 D CORDELIA: Straighter.
15 D SOLANGE: Arthur, I need a moment.
16 D ARTHUR: Solange, I need a moment.
17 A ¶ Both laugh, awkwardly.
18 A Cordelia lifts an eyebrow.
19 A Hannelore sets the stand down and glances toward the door.
20 A Lazarus is gone.
21 A The envelope sits on the threshold, white against the dark tiles.
22 D SOLANGE: I'll be right back.
23 A ¶ She crosses the conservatory quickly, snatches the envelope, tears it open.
24 A Her face drains of color.
25 A Behind her, the quartet strikes up the first bars of a waltz, bright and cheerful.

### SCENE s01747 | INT. TIDAL POWER STATION - OCEAN PLANET HABITAT - DAY
Detected names (may be incomplete or contain aliases): YSOLDE FARAH, PAVAN IYER, GREAVES
1 A ¶ A glass-walled control gallery above a roaring turbine bay.
2 A Seawater thunders through the lower deck.
3 A Everything hums.
4 A Everything is calm.
5 A ¶ YSOLDE FARAH (40s, station chief, dark braid, mug of tea) sits at the main console and watches a wall of green graphs.
6 A PAVAN IYER (30s, technician, sleeves rolled, a pen behind each ear) moves between panels, tapping readouts and writing nothing down.
7 A MR. GREAVES (60s, inspector from the Ministry, gray suit, a slim case) stands at the window with his back to them.
8 A ¶ The graphs scroll.
9 A All green.
10 D YSOLDE: You'll find we're ahead of schedule, Mr. Greaves.
11 D GREAVES: So I've heard.
12 D PAVAN: Three weeks ahead. Four, if you count the sluice.
13 D GREAVES: I don't count the sluice.
14 D PAVAN: Then three.
15 A ¶ Ysolde sips her tea.
16 A She sets it down, slightly off the coaster, and nudges it back with one finger.
17 A Pavan stops tapping.
18 A For a moment the only sound is the sea in the bay below.
19 A ¶ Greaves turns from the window and lays his slim case on the console.
20 A He opens it.
21 A Inside, a thin tablet.
22 A He taps it, and a schedule opens, yellow with warnings.
23 A Ysolde leans forward to read it, and Pavan leans forward to read it over her shoulder, and Greaves watches them both without a flicker of expression.
24 D YSOLDE: That's the old log.
25 D GREAVES: That's the log you filed.
26 D PAVAN (carefully): It must be a sync issue.
27 D GREAVES: I don't think so.
28 A ¶ Pavan wipes his palms on his trousers.
29 A Ysolde takes the pen from behind his ear, and puts it in her pocket, and closes the case, gently, as one closes the eyes of the dead.
30 D YSOLDE: Pavan, would you get Mr. Greaves some tea?
31 D PAVAN: Of course.
32 A ¶ He doesn't move.
33 D GREAVES: He has already seen the turbines, Ms. Farah.
34 D YSOLDE: Then you know what we've done.
35 D GREAVES: I know what you haven't.
36 A ¶ Below, the roar of the water changes pitch.
37 A A slow, rising note, like a held breath.
38 A The graphs on the wall go amber, then red, one after another down the row.
39 A ¶ Nobody looks at them.
40 A Ysolde picks up her tea.
41 A Her hand is perfectly steady.
42 D YSOLDE: How long?
43 D GREAVES: Four minutes.
44 D PAVAN: For what?
45 A ¶ Greaves walks to the door.
46 A He holds it open for the two of them, politely, the way a man holds a door for guests leaving a very good party.

### SCENE s02213 | INT. DEPARTMENT STORE - SERVICE ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): TEDDY, ROYCE, BASTIEN NOVAK, MOTH
1 A ¶ A cargo lift, steel-lined, scarred by trolleys.
2 A One bare bulb.
3 A The floor indicator is stuck between 3 and 4.
4 A ¶ THEODORA "TEDDY" ROYCE (50s, night cleaner, bucket at her feet) sits on an overturned crate, holding a rosary.
5 A Opposite her, BASTIEN NOVAK (20s, security guard, uniform askew) leans against the wall, torch dead in his hand.
6 A In the corner, a girl in a nightgown, MOTH (9, bare feet, huge eyes), hugs a stuffed rabbit.
7 D TEDDY: How long have we been in here?
8 D BASTIEN: Forty minutes.
9 D TEDDY: It feels like four hours.
10 D BASTIEN: It feels like forty minutes, Teddy.
11 D TEDDY: You counted?
12 D BASTIEN: I looked at my watch.
13 D TEDDY: Your watch stopped.
14 D BASTIEN: It didn't stop.
15 D TEDDY: Show me.
16 A ¶ He turns his wrist.
17 A The second hand is frozen at 11:47.
18 A He stares at it.
19 A Looks up.
20 A Then his face gives away nothing at all.
21 D BASTIEN: It's the battery.
22 D TEDDY: It's the elevator.
23 D BASTIEN: Elevators don't stop watches.
24 D TEDDY: This one does.
25 D MOTH: Teddy, I'm cold.
26 D TEDDY: I know, sweetheart.
27 D MOTH: Can we go home?
28 D BASTIEN: Where's home, kid?
29 D MOTH: Down.
30 D BASTIEN: Down where?
31 D MOTH: Down below the basement.
32 A ¶ Silence.
33 A Teddy lowers her rosary.
34 A Bastien's mouth opens, then closes.
35 D BASTIEN: There's no below the basement.
36 D MOTH: There is.
37 D TEDDY: Moth, stop.
38 D MOTH: You said I could tell.
39 D TEDDY: I said you could tell me. Not him.
40 D BASTIEN: Tell me what?
41 D MOTH: That's where they keep the ones who stay.
42 D BASTIEN: Stay where?
43 D MOTH: Stay in the store.
44 D BASTIEN: This is a department store, kid.
45 D MOTH: After closing.
46 A ¶ Teddy puts a hand on Bastien's arm.
47 A He shakes it off.
48 D BASTIEN: Teddy. Who is she?
49 D TEDDY: She's. A friend.
50 D BASTIEN: Whose friend?
51 D TEDDY: She was here before the store was.
52 D BASTIEN: Before the store?
53 D TEDDY: This was a farm. Her family's. Her father sold it. Her mother wouldn't leave.
54 D BASTIEN: That was a hundred years ago.
55 D TEDDY: One hundred and eleven.
56 D MOTH: I'm nine.
57 D BASTIEN: You're nine.
58 D MOTH: Always nine.
59 A ¶ The bulb dims.
60 A Bastien backs into the corner, torch up like a club.
61 A Teddy doesn't move.
62 A Moth looks at him, tilts her head, and takes a step.
63 A ¶ The bulb pops.
64 A Dark.
65 A In the black, the elevator groans and begins to descend.
66 A The only sound is the rabbit being squeezed, a thin squeak, and a girl's voice humming a lullaby that is somehow older than anything in the building.
67 A ¶ Bastien's torch clicks on, flickers, shows the lift empty but for the bucket and the crate.
68 A Teddy's rosary lies on the floor.
69 A A small wet footprint beside it, bare and tiny.
70 A Another, leading to the doors.
71 A ¶ The lift stops.
72 A The doors open on a long dark corridor, floor tiled in black and white, and at the end of it, a little girl waving.

### SCENE s01703 | INT. GRAND HOTEL LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CROWE, IMOGEN TATE, PIOTR SELENKO, WICK, WICKHAM, BELLHOP, GUARD, HOTEL SECURITY
1 A ¶ Steam hisses from industrial presses.
2 A Carts of white linen.
3 A A tall window shows the city's lights.
4 A ¶ CROWE (50s, quiet, hotel uniform) pushes a cart down the aisle, the picture of a bored night porter.
5 A Behind him, three figures in identical gray overalls follow: IMOGEN TATE (30s), who counts keys; PIOTR SELENKO (40s), who whistles; and DESMOND "WICK" WICKHAM (20s), who hums a tune.
6 D CROWE (to the group): We walk. We do not run. We do not look at the cameras.
7 D WICK (under his breath): Which cameras?
8 D IMOGEN: Wick.
9 D WICK: Sorry.
10 A ¶ They reach a service lift.
11 A Crowe presses the call button.
12 A Nothing.
13 D PIOTR: Is it supposed to be broken?
14 D CROWE: It is supposed to be slow.
15 A ¶ The lift arrives.
16 A A BELLHOP (20s, pillbox hat) steps off, sees them, nods.
17 A They nod back.
18 A He walks on, whistling the same tune as Piotr.
19 A ¶ The doors close.
20 A The four of them ride up in silence.
21 A Crowe checks a pocket watch.
22 A Imogen clicks her tongue against her teeth.
23 D IMOGEN (to herself): Two hundred and six. Two hundred and seven.
24 D PIOTR: What are you counting?
25 D IMOGEN: Seconds.
26 A ¶ Ding.
27 A The doors open on the penthouse corridor.
28 A The carpet is red, the walls gold.
29 A A single guard sits in an armchair at the far end, asleep.
30 D CROWE (to the group): Gentle. Gentle.
31 A ¶ They creep past the guard.
32 A Wick, passing, nudges a vase with his elbow; it wobbles; he catches it, grinning like a boy.
33 A Imogen swallows a laugh.
34 A ¶ Crowe produces a key.
35 A The suite door opens without a sound.
36 A Inside: a vault door, humming softly, gleaming.
37 A Nobody speaks.
38 A ¶ Then every light in the corridor comes on at once.
39 A The guard stands, no longer asleep, and unholsters a pistol.
40 D GUARD: Welcome, gentlemen. And lady.
41 A ¶ Crowe's shoulders sag a fraction.
42 A He slowly raises his hands.
43 D CROWE: Evening, Marcus.
44 A ¶ The Guard smiles, and now we see the badge on his belt: HOTEL SECURITY, DIRECTOR.

### SCENE s00114 | INT. LAKESIDE BOATHOUSE BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELOWEN TREGARTHEN-ADEYEMI, ARTEMIS KOWALCZYK-MWANGI, LEONID BRAUNSTEIN-OKAFOR, MIRABEL
1 A ¶ A long timber hall on stilts above black water.
2 A Faded bunting.
3 A A chandelier with half its bulbs out.
4 A Through tall windows, the lake lies glassy and still under a quarter moon.
5 A A gramophone in the corner plays a thin, crackling waltz.
6 A ¶ Four people occupy the room, and only one of them is dancing.
7 A ¶ ELOWEN TREGARTHEN-ADEYEMI (30s, sea-green dress, bare shoulders) turns slowly in the center of the floor, alone, her eyes half closed.
8 A At the bar, ARTEMIS KOWALCZYK-MWANGI (30s, rolled-up shirt sleeves, a bottle in one hand) pours two glasses and pours a third.
9 A LEONID BRAUNSTEIN-OKAFOR (50s, dinner jacket, white gloves) stands near the gramophone with a hand on the horn, as if holding the music in place.
10 A And on the window seat, curled like a cat, sits a girl of eight, MIRABEL (small, in a nightgown, hair loose), who is not supposed to be awake.
11 A ¶ She spins.
12 A The hem of her dress sweeps the boards.
13 A She stops, breathless, and looks directly at him.
14 D ELOWEN: You never asked me to dance.
15 A ¶ He lowers the bottle.
16 A He does not answer.
17 A She walks toward him, slowly, leaving a track in the dust.
18 D ARTEMIS: I don't dance.
19 D ELOWEN: You did once.
20 D ARTEMIS: That was a different year.
21 D ELOWEN: It was this year.
22 A ¶ Leonid clears his throat.
23 A Both glance at him.
24 D LEONID: Perhaps I should adjust the record.
25 D ELOWEN: Leave it.
26 A ¶ He lifts his hand from the horn, relieved.
27 A Artemis puts down the bottle.
28 A He steps out from behind the bar.
29 A For a moment they stand a yard apart.
30 D ARTEMIS: The lake is still.
31 D ELOWEN: It always is, here.
32 D ARTEMIS: That frightens me.
33 D ELOWEN: Does it?
34 D ARTEMIS: You don't know what's under it.
35 A ¶ She smiles at that, the first smile of the night, and takes his hand.
36 A He lets her.
37 A She pulls him gently onto the floor, one arm round his shoulder, the other in his palm, and they sway to the gramophone's crooked waltz.
38 A At the window, Mirabel hugs her knees.
39 D LEONID (softly): Lovely.
40 D MIRABEL (also softly): He's going to cry.
41 D LEONID: Who?
42 D MIRABEL: Him.
43 A ¶ Leonid peers.
44 A Artemis's face is turned to the dark window, jaw set, eyes bright.
45 A He does not cry.
46 A Not yet.
47 A He holds her closer.
48 D ARTEMIS: I couldn't stay.
49 D ELOWEN: I know.
50 D ARTEMIS: I couldn't tell you why.
51 D ELOWEN: I know that too.
52 A ¶ The record stutters.
53 A Leonid lunges for the needle.
54 A The room goes still and quiet, and Elowen stops, her hand still in Artemis's, her eyes on his face.
55 D ELOWEN [CONT'D]: Say it, then.
56 D ARTEMIS: Say what?
57 D ELOWEN: Whatever it is you came all this way to say.
58 A ¶ He opens his mouth.
59 A Closes it.
60 A From the window seat comes the dry rustle of Mirabel unfolding, and then her small, bare feet on the boards, crossing the room, stopping beside them.
61 D MIRABEL: He wants you to come back.
62 A ¶ Silence.
63 A Then the lake, at last, ripples, once, and a single bulb of the chandelier pops.
64 D ELOWEN: Does he?
65 D ARTEMIS (barely): Yes.
66 A ¶ Elowen releases his hand.
67 A Steps back.
68 A She looks at the child, at Leonid, at the bottle on the bar, and then at Artemis again, and for a long moment says nothing at all.
69 A ¶ Then she slaps him.
70 A The crack rings through the hall.
71 A The gramophone, which Leonid has been holding down with both hands, begins, absurdly, to play again.
72 D ELOWEN (trembling): Eleven years.
73 D ARTEMIS: I know.
74 D ELOWEN: Eleven years, and you send a child.
75 D MIRABEL: I wasn't sent. I came.
76 A ¶ Artemis laughs, a wet, helpless sound.
77 A Elowen turns away toward the dark windows, her back straight.
78 A Leonid, with great delicacy, picks up the third glass and offers it to her.
79 A She takes it.
80 A She drinks it in one swallow.

### SCENE s02119 | INT. CABLE CAR - HIGH ALPINE SPAN - NIGHT
Detected names (may be incomplete or contain aliases): LENA VASSILIOU, MILOS FERRANTE-OKORO
1 A ¶ A glass gondola hanging motionless over a black gorge.
2 A Two benches face each other.
3 A The cable creaks.
4 A Wind howls.
5 A A single emergency lamp glows orange.
6 A ¶ LENA VASSILIOU, 30s, in a wool coat, sits on the downhill bench, one hand gripping the rail, the other pressed flat on a leather briefcase in her lap.
7 A Across from her sits MILOS FERRANTE-OKORO, 40s, in an overcoat, knees bouncing, a thin smile on his face.
8 A ¶ Neither has spoken since the car stopped.
9 A Lena stares at the cable.
10 A Milos stares at the briefcase.
11 D MILOS: It's a long way down, Lena.
12 D LENA: I know how far it is, Milos.
13 A ¶ He reaches for the briefcase.
14 A She pulls it back.
15 A He stops with his hand halfway, and then leans back with elaborate calm and crosses his legs.
16 A The gondola sways.
17 A Lena shifts her grip.
18 A A button on his coat catches the lamp and flashes.
19 A Milos looks out the window, hums three bars of something, and glances at her again.
20 A Lena watches his hands.
21 A His fingers drum on his knee, one, two, one, two.
22 A She counts the beat.
23 D LENA [CONT'D]: They'll restart the motor soon.
24 D MILOS: They'll restart it when I tell them.
25 D LENA: You can't tell them from here.
26 D MILOS: Can't I?
27 A ¶ He lifts his sleeve and taps his watch.
28 A A tiny red light blinks on its face.
29 A Lena goes still.
30 D LENA: How long?
31 D MILOS: Ten minutes, Lena.
32 D LENA: Then you'd better take the case.
33 A ¶ She lifts it and holds it out across the gap.
34 A Milos looks at it for a long time, then at her, then at the case.
35 A He does not take it.

### SCENE s02017 | INT. VILLAGE HALL, AMATEUR DRAMATICS REHEARSAL - NIGHT
Detected names (may be incomplete or contain aliases): DIRECTOR HILDEGARD OYEGUN-LAMBERT, LEADING LADY DORIS ABERNATHY-OKOYE, VILLAIN REGINALD TSAI-FAIRBANKS, STAGEHAND JUNIPER ACHEBE-MOREAU
1 A ¶ A cold hall with a stacked-chair smell.
2 A Folding table of tea urns.
3 A A makeshift stage of pallets.
4 A ¶ Four people stand in a loose semicircle: DIRECTOR HILDEGARD OYEGUN-LAMBERT (60s, scarf, a script held aloft), the LEADING LADY DORIS ABERNATHY-OKOYE (50s, hat and gloves already on), the VILLAIN REGINALD TSAI-FAIRBANKS (40s, cape, mustache of black felt), and the STAGEHAND JUNIPER ACHEBE-MOREAU (teen, headphones round her neck).
5 D HILDEGARD: From "Who among you has done this?"
6 D DORIS: Who among you has done this?
7 D REGINALD: I have done nothing.
8 D DORIS: Then why is the knife in your pocket?
9 D REGINALD (to himself): Is it the left or the right?
10 D HILDEGARD: The left, Reginald.
11 D REGINALD: The left.
12 A ¶ He pulls out a rubber dagger.
13 A Dramatic pause.
14 A It folds in half.
15 D JUNIPER (muttering): Told you not to buy it at the dollar store.
16 D HILDEGARD: Juniper.
17 D JUNIPER: Sorry.
18 D HILDEGARD (to the room): Everyone, a short break.
19 A ¶ They disperse.
20 A Doris heads to the tea urn.
21 A Reginald examines the dagger.
22 A Hildegard and Juniper stay center stage.
23 D HILDEGARD [CONT'D]: That wasn't the dollar store.
24 D JUNIPER: What?
25 D HILDEGARD: The knife. It's not from the dollar store.
26 D JUNIPER: Then where?
27 D HILDEGARD: It's not the prop knife at all. Reginald brought his own.
28 D JUNIPER: So?
29 D HILDEGARD: This is the prop.
30 A ¶ She holds up the folded rubber.
31 A Then, slowly, she turns toward Reginald, who is stirring tea.
32 A A real blade glints in his pocket as he bends.
33 A ¶ Doris sees it.
34 A Juniper sees it.
35 A Hildegard lowers the script.
36 D HILDEGARD [CONT'D] (very calmly): Reginald. Show me the other one.

### SCENE s01018 | INT. DEEP-SEA MINING SUBMERSIBLE - COCKPIT - SIX KILOMETERS DOWN
Detected names (may be incomplete or contain aliases): CAPTAIN ZHAO, ALVARO, LENA
1 A ¶ A pressurized sphere barely wider than a bathtub.
2 A Banks of dials and gauges.
3 A Three seats facing a viewport thick as a dinner plate.
4 A Beyond it, nothing.
5 A Black water, falling snow of dead plankton.
6 A ¶ CAPTAIN ZHAO (50s, headset, steady voice) grips the yoke.
7 A ALVARO (30s, sweat-soaked polo, geologist) pores over a sonar screen.
8 A LENA (20s, rookie, braids tucked under a company cap) monitors the oxygen scrubbers.
9 D ZHAO: Depth six-oh-two-one. Holding.
10 D ALVARO: Sonar's picking up something big.
11 D LENA: How big?
12 D ALVARO: Bigger than the sub. Bigger than the seabed shelf.
13 D ZHAO: Is it moving?
14 D ALVARO: It's breathing.
15 D LENA: Captain, oxygen is dipping.
16 D ZHAO: Dipping how?
17 D LENA: Four percent in two minutes.
18 D ALVARO: Cap, the contact is closing.
19 D ZHAO: Lena, shut down the non-essentials.
20 D LENA: Shutting down.
21 D ALVARO: It's right under us.
22 D ZHAO: Alvaro, give me a heading.
23 D ALVARO: Up. Any direction up.
24 A ¶ The sub shudders.
25 A A groan rolls through the hull.
26 A Lena grips her seat.
27 A The viewport floods with a slow pale glow, climbing from below.
28 D LENA: Oh my God.
29 D ZHAO: Blow ballast.
30 D ALVARO: Blowing.
31 D LENA: It's not working.
32 D ZHAO: Blow it again!
33 D ALVARO: The valves are frozen.
34 A ¶ The glow swells.
35 A Something vast turns beneath them, an eye as wide as a cathedral, and the viewport fills with its slow, gold, curious gaze.

### SCENE s00265 | EXT. SUNKEN GARDEN BENEATH A FALLEN STARSHIP - NIGHT
Detected names (may be incomplete or contain aliases): IRENEUS BASKERVILLE-ADE, MYRT, OKONKWO-SPARROW, HOLGER STAVROS-NWACHUKWU, THEO, LAVENDER-OSEI, GRANDMAMA NKECHI WINTERBOURNE
1 A ¶ A hull the size of a cathedral lies crumpled across a valley.
2 A Under its arch, moss and glowing mushrooms have colonized a courtyard of broken tile.
3 A ¶ Five figures circle a fire in the courtyard center.
4 A ¶ IRENEUS BASKERVILLE-ADE (50s, wizard, coat of many pockets) feeds twigs to the flames.
5 A ¶ MYRTLE "MYRT" OKONKWO-SPARROW (20s, bard, lute on her back) tunes a string.
6 A ¶ HOLGER STAVROS-NWACHUKWU (30s, mercenary, scarred jaw) sharpens a long blade on a whetstone.
7 A ¶ THEODORA "THEO" LAVENDER-OSEI (teens, apprentice, ink on her chin) copies glyphs from the hull onto a scroll.
8 A ¶ And GRANDMAMA NKECHI WINTERBOURNE (80s, wrapped in quilts, eyes sharp as tacks) sits on a stool nearest the fire.
9 D IRENEUS (to the group): We rest here till dawn.
10 D HOLGER: Rest? With that thing over us?
11 D IRENEUS: It's a ship, Holger. It's dead.
12 D HOLGER: So were the last three things I fought.
13 D MYRT: Holger, relax. Listen to this.
14 A ¶ She plucks a gentle melody.
15 A The mushrooms pulse, brightening in time.
16 A Theo looks up from her scroll, startled.
17 D THEO: Oh. They like it.
18 D MYRT: Everything likes it.
19 D HOLGER (muttering): Not me.
20 D GRANDMAMA: You like it, boy. You just won't say.
21 D HOLGER: Grandmama--
22 D GRANDMAMA: Hush.
23 A ¶ The fire cracks.
24 A Ireneus rises, brushing his coat.
25 D IRENEUS: Theo, the glyphs. What do they say?
26 D THEO: Um. "Do not wake the garden."
27 A ¶ A long silence.
28 A The music stops.
29 A Myrt's hand freezes on the strings.
30 D MYRT: Theo.
31 D THEO: Sorry. I only just read it.
32 D HOLGER (rising, blade drawn): Everyone quiet.
33 D IRENEUS: Holger, put that away.
34 D HOLGER: No.
35 A ¶ Beneath them, the ground trembles.
36 A The mushrooms flare white, then red.
37 A A distant hum rises through the soil like a stirring giant.
38 D MYRT: Ireneus.
39 D IRENEUS: I know.
40 D GRANDMAMA (mildly, to the fire): Well. That's the trouble with gardens.
41 A ¶ The hull groans.
42 A Vines uncoil from the ceiling, thick as cables, and begin to descend.
43 A Holger swings at one.
44 A It splits, spills glowing sap, and lunges for his throat.
45 D HOLGER: Theo, run!
46 D THEO: Where?
47 D HOLGER: Anywhere!
48 A ¶ Myrt strikes a chord, wild, dissonant.
49 A The vines recoil.
50 A Ireneus hurls a handful of powder; it ignites in a flash of orange.
51 A Theo hauls Grandmama up by the elbow and they stumble toward the arch.
52 D IRENEUS (over the roar): Don't look back!
53 D MYRT: I am looking!
54 D HOLGER: Then look faster!
55 A ¶ A vine catches Holger's ankle.
56 A He topples.
57 A Myrt dives, slashes with her lute-strap.
58 A It parts.
59 A Together they scramble to their feet.
60 A ¶ The five reach the arch just as the entire garden convulses, erupting into a roar of green light.
61 A ¶ They tumble onto cold grass beyond.
62 A Behind them, the starship shudders, then lies still.
63 D GRANDMAMA (breathing hard): Hm.
64 D THEO: Grandmama?
65 D GRANDMAMA: I'd like to go home now.

### SCENE s00050 | INT. NIGHT BUS, MIDWEST HIGHWAY - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE ARMITAGE-NOLAN, DOM, ACHEBE, DRIVER
1 A ¶ Half-lit aisle.
2 A Rows of sleeping strangers.
3 A The engine drones like a long exhale.
4 A Rain streaks the windows.
5 A ¶ CELESTE ARMITAGE-NOLAN (30s, red scarf, paperback open on her knee) sits halfway back.
6 A Across the aisle, DOMINIC "DOM" ACHEBE (30s, rumpled suit, cold coffee) has been staring at her book for twenty minutes.
7 A He finally leans over.
8 D DOM: Is it any good?
9 D CELESTE: It's a murder mystery.
10 D DOM: Does everyone die?
11 D CELESTE: Mostly.
12 D DOM: Sounds restful.
13 A ¶ She laughs, quietly, despite herself.
14 A The bus hits a pothole and the whole cabin lurches.
15 A Her book slides to the floor.
16 A Dom retrieves it and hands it back.
17 A Their fingers touch.
18 D DRIVER [V.O.] (over intercom, crackling): Folks, we're pulling into Dubuque for a ten-minute break. Stretch your legs. Don't wander.
19 D CELESTE (to the cabin, dry): Don't wander, he says.
20 D DOM (to himself): Where would I go?
21 A ¶ He stands.
22 A The bus brakes hiss.
23 A Celeste rises too, and they collide in the narrow aisle.
24 D CELESTE: Sorry.
25 D DOM: No, I'm sorry.
26 D CELESTE: I'm Celeste.
27 D DOM: Dom.
28 A ¶ They shake hands, lingering.
29 D DRIVER [V.O.] (over intercom): Anybody traveling to Chicago, I'll be holding the bus for exactly ten minutes. Not eleven.
30 D DOM: Chicago.
31 D CELESTE: Me too.
32 A ¶ He looks at her, hope in his face.
33 D DOM: Then I guess we have eleven hours.
34 A ¶ She picks up her book.
35 D CELESTE: Then you'd better tell me who did it.

### SCENE s01131 | INT. ICE RINK - RESURFACER GARAGE - NIGHT
Detected names (may be incomplete or contain aliases): ROXANNE, GUS, TAMSIN, FIGURE
1 A ¶ A concrete bay with a hulking resurfacing machine, drips from the ceiling, a flickering overhead tube.
2 A The big door is shut.
3 A The cold bites.
4 A ¶ ROXANNE (30s, parka) crouches by the machine's wheel with a flashlight.
5 A GUS (50s, rink manager, keys on a lanyard) holds the clipboard.
6 A TAMSIN (teen, hockey jersey, skates over her shoulder) stays near the door.
7 D GUS: Roxanne, the water tank's been leaking since Tuesday.
8 D ROXANNE: It's not water, Gus.
9 A ¶ She points the flashlight.
10 A A dark red trail runs from the machine's blade toward the drain.
11 D TAMSIN: I'm going to get my dad.
12 D GUS: Tamsin, stay here.
13 D TAMSIN: It smells like pennies, Mr. Gus.
14 A ¶ The machine's engine coughs once.
15 A Nobody touched it.
16 A Gus drops his clipboard.
17 A Roxanne stands.
18 A ¶ Under the machine's belly, a FIGURE uncurls, grey and frost-furred, long fingers dragging the concrete.
19 D ROXANNE: Don't move.
20 A ¶ The Figure rises.
21 A Its blue lips shape words that make no sound.
22 A It takes a step toward Tamsin.
23 A ¶ Gus swings his keys like a flail.
24 A The Figure catches his wrist.
25 A They struggle.
26 A Roxanne grabs a pry bar and slams it into the thing's ribs.
27 A It shrieks, soundless, and throws them both against the wall.
28 D TAMSIN: Run!
29 A ¶ All three scatter.
30 A The Figure watches them go, then folds back under the machine, patient.

### SCENE s00598 | EXT. CANYON RIM WAGON CAMP - TWILIGHT
Detected names (may be incomplete or contain aliases): SHERIFF EZEKIEL TOLLIVER, MADAME CELESTINE, ROYCE BARLOW, PEARL, SILAS
1 A ¶ A dry arroyo cuts the earth below, red walls blackening in the dusk.
2 A A single canvas-topped wagon, wheels sunk to the hubs.
3 A A cookfire sputters, spitting coals.
4 A Beyond the light, ridge after ridge disappears into purple.
5 A ¶ SHERIFF EZEKIEL TOLLIVER, 50s, long coat dusted white, sits on an overturned crate with a tin plate of beans, eating without hunger.
6 A Across the fire: MADAME CELESTINE, 40s, in a black traveling dress with a cameo at her throat, mending a glove with quick, exact stitches.
7 A ROYCE BARLOW, 30s, wiry, hat pulled low, cleans a rifle he doesn't need to clean.
8 A PEARL, 19, red braids, kneels at the wagon tongue feeding a mule from her palm.
9 A SILAS, 70s, gray beard, sits against a wheel with his eyes closed, a harmonica loose in his hand.
10 D TOLLIVER: Madame. How far to the river?
11 D CELESTINE: Two days. Maybe three.
12 D TOLLIVER: With the mule or without?
13 D CELESTINE (not looking up): Without, we'd be there tomorrow.
14 D ROYCE: The mule's fine.
15 D TOLLIVER: Royce, I didn't ask the mule.
16 D ROYCE: Then I'll say it for the mule. He's fine.
17 A ¶ A thin laugh from the wagon wheel.
18 A Silas opens one eye.
19 D SILAS: Mule's older than you, Royce. Treat him respectful.
20 D PEARL (to the mule, murmuring): Don't listen to them. You're beautiful.
21 A ¶ Tolliver sets down his plate.
22 A Studies the ridge line.
23 A A long silence.
24 A Wind lifts embers off the fire and carries them over the rim.
25 D TOLLIVER (to the group): Everyone sleep with a boot on.
26 D ROYCE: Why?
27 D TOLLIVER: Because I said.
28 D CELESTINE (low): He's seen something.
29 D TOLLIVER: I have not.
30 D CELESTINE: You've felt it, then.
31 D TOLLIVER (muttering): Damn this country.
32 D PEARL: Sheriff?
33 D TOLLIVER: Yes, Pearl.
34 D PEARL: There's a light on the north ridge.
35 A ¶ They all turn.
36 A High on the far ridge, tiny and steady, a single flame flickers.
37 D SILAS: Not a campfire.
38 D ROYCE: Too still.
39 D CELESTINE: It's a lantern. Someone is signaling.
40 D TOLLIVER: To whom?
41 D CELESTINE: To us.
42 A ¶ Royce racks the rifle.
43 A Pearl stands, one hand still on the mule.
44 A Silas pushes himself up, grunting, the harmonica clenched in his fist.
45 D TOLLIVER: Douse the fire.
46 A ¶ Pearl kicks dirt over the coals.
47 A The dark closes in.
48 A Far above, the light on the ridge blinks once, twice, three times.
49 D TOLLIVER [CONT'D] (whispering): Nobody answers.
50 A ¶ On the ridge, the light goes out.
51 A ¶ The canyon is silent.
52 A A coyote begins to cry, somewhere very near, and stops mid-note.

### SCENE s01936 | INT. GRAIN SILO - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN TSAI, KATYA BRANDVOLD, RUFUS DELACOURT, SILAS OKOYE
1 A ¶ Dark.
2 A A circular concrete shaft.
3 A A single flashlight beam jitters over rusted ladders.
4 A ¶ IMOGEN TSAI, 20s, clutches the flashlight.
5 A KATYA BRANDVOLD, 20s, presses against her back.
6 A RUFUS DELACOURT, 30s, kneels at a hatch.
7 A SILAS OKOYE, 40s, leans on his knees and wheezes.
8 D IMOGEN: Did you hear that?
9 D KATYA: Don't say that.
10 D RUFUS: It's the wind.
11 D SILAS: There is no wind in a silo.
12 D KATYA: Then what is it?
13 D IMOGEN: Quiet.
14 A ¶ Something drags above them.
15 A A slow scrape on concrete.
16 D RUFUS: It's on the ladder.
17 D SILAS: It's on our ladder.
18 D KATYA: Imogen, give me the light.
19 D IMOGEN: No.
20 D KATYA: Give me the light, or I swear to God...
21 D IMOGEN: Katya, stop. If you move, it knows where we are.
22 D SILAS: It already knows.
23 D RUFUS: Then why hasn't it come down?
24 D KATYA: Because it's waiting for one of us to scream.
25 D IMOGEN: I'm not going to scream.
26 A ¶ The flashlight flickers out.
27 A Somewhere above, a long, patient breath.
