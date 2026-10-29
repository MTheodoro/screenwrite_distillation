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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnetG/group_03002.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01061 | INT. NORTHWIND LOGISTICS - ESCAPE ROOM "THE VAULT OF SYNERGY" - DAY
Detected names (may be incomplete or contain aliases): DIRECTOR GREGOR HALVORSEN, PRIYA NAIR, TODD BEXLEY, BEATRICE KOWALSKI, HR, MARCUS ELLIOT, DELILAH OKONJO
1 A ¶ A windowless basement fitted as a movie-set bank.
2 A Brass safe doors, laser-beam strips of red tape, a ticking digital clock above the mantel: 59:12.
3 A ¶ Six employees in matching fleece vests stand in a ring around a locked chest.
4 A Lanyards.
5 A Name tags.
6 A Forced smiles.
7 A ¶ DIRECTOR GREGOR HALVORSEN, 50s, bald, a vest zipped to the chin, claps once.
8 D GREGOR: Team! Remember. There's no "I" in--
9 A ¶ PRIYA NAIR, 30s, accountant, glances at her watch.
10 D PRIYA: We've got fifty-eight minutes.
11 D GREGOR: Alignment is a journey.
12 A ¶ TODD BEXLEY, 40s, sales, taps the chest.
13 D TODD: It's a padlock. Four digits.
14 D GREGOR: Who has the clue?
15 A ¶ BEATRICE KOWALSKI, 60s, HR, lifts a laminated card with a trembling hand.
16 D BEATRICE: "The date of our greatest quarter."
17 D TODD: That's every quarter.
18 D GREGOR: Todd.
19 D TODD: I'm saying, it's every quarter.
20 A ¶ MARCUS ELLIOT, 20s, junior analyst, stares at the clock.
21 D MARCUS: Fifty-six minutes.
22 D GREGOR: Marcus, please. We don't count down. We count up.
23 A ¶ Marcus nods.
24 A Counts nothing.
25 A His left eye twitches.
26 A ¶ DELILAH OKONJO, 40s, procurement, stands with her arms crossed, in the corner.
27 D DELILAH: It's seventeen forty-two.
28 D GREGOR: Is that a guess?
29 D DELILAH: It's on the whiteboard behind you.
30 A ¶ They all turn.
31 A A whiteboard reads: FOUNDED 1742.
32 A Gregor's smile fixes in place.
33 D GREGOR: Great catch, Delilah.
34 A ¶ Priya enters the code.
35 A The padlock clicks.
36 A The chest opens.
37 A Inside, a single laminated card: CONGRATULATIONS.
38 A PLEASE COMPLETE THE SURVEY.
39 A ¶ Nobody speaks.
40 A Todd picks up the card, turns it over.
41 D TODD: There's a QR code.
42 D BEATRICE: Of course there is.
43 A ¶ They stand there, six fleece vests in a basement, while the clock beeps.
44 A 54:03.
45 A 54:02.

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

### SCENE s01112 | EXT. ICE-CAVE MOUTH - GLACIER - DAWN
Detected names (may be incomplete or contain aliases): NADIA, VOLKOV-ASANTE, NAT, BELL-TAKAHASHI, DESMOND OKONKWO-PARR
1 A ¶ A blue gash in a field of white.
2 A Wind scours the snow into long ripples.
3 A Three tiny figures stand at the lip of a frozen lake, backs to the cave.
4 A ¶ NADEZHDA "NADIA" VOLKOV-ASANTE, 40s, orange parka, iced eyelashes, drags a sled carrying a sleeping bag.
5 A Next to her, IGNATIUS "NAT" BELL-TAKAHASHI, 30s, hood drawn, gloves split at the fingertips, winds a rope around his waist.
6 A Dragging up the rear, DESMOND OKONKWO-PARR, 20s, lagging, hobbles on one swollen ankle.
7 D NADIA: Rest stop. Ten minutes.
8 D NAT: We don't have ten.
9 D NADIA: We have what we have.
10 A ¶ She drops the sled's handle.
11 A He kneels, checking the knot on the sleeping bag, while Desmond lowers himself onto his pack.
12 A Nat pulls out a thermos, takes a swallow, hands it to Desmond.
13 A Desmond drinks, hands it to Nadia, who sips and stares across the frozen lake at a ridge of dark rock.
14 D NADIA [CONT'D]: That's the pass.
15 D NAT: How far?
16 D NADIA: Six kilometers. Maybe seven.
17 D DESMOND (quietly): I can walk.
18 D NAT: You can't.
19 D DESMOND: I can crawl.
20 D NADIA: Nobody's crawling.
21 A ¶ She stands, tightens the sled's strap.
22 A Nat rises, unwinds the rope, ties one end to the sled and the other to Desmond's pack.
23 A Desmond opens his mouth to protest.
24 A Nat holds up a hand.
25 D NAT: You're the anchor. Don't argue.
26 D DESMOND: That's backwards.
27 D NAT: Humor me.
28 A ¶ Wind gusts, whipping powder across their faces.
29 A Nadia pulls up her hood, turns toward the pass, and leans into the haul line.
30 A The sled lurches.
31 A Nat falls in beside her.
32 A Desmond, tethered, drags his foot.
33 A ¶ They walk.
34 A No one speaks.
35 A Their shadows lengthen across the ice.

### SCENE s00009 | INT. GRAIN ELEVATOR - ROLLER DERBY TRACK - NIGHT
Detected names (may be incomplete or contain aliases): BRUISE, CASTILLO, TAMARA GRAY-OYELARAN, DOT KWIATKOWSKI, JONAS FELD
1 A ¶ A concrete silo floor, converted.
2 A Oval track taped on the slab, plywood bleachers, one hanging bulb per corner.
3 A Dust floats in the beams.
4 A ¶ The Harvest Hellcats are down nine in the final jam.
5 A Their jammer, MARISOL "BRUISE" CASTILLO (20s, shaved sides, mouthguard dangling), sits on the infield bench lacing her skates tight enough to hurt.
6 A ¶ Beside her, team captain TAMARA GRAY-OYELARAN (30s, tall, eye-black, taped wrist) watches the clock.
7 A Across the track, rival jammer DOT KWIATKOWSKI (40s, braids, quiet) stretches her calf, never looking over.
8 A ¶ Referee JONAS FELD (50s, striped shirt, whistle in his teeth) walks the track, checking the lines.
9 A ¶ Tamara watches Bruise.
10 A Bruise watches the floor.
11 A ¶ The clock reads 1:14.
12 D TAMARA: Left side. Don't force it.
13 D BRUISE: I wasn't going to.
14 D TAMARA: You were.
15 D BRUISE: I'm fine.
16 A ¶ Tamara slaps the bench between them.
17 A Once.
18 A Bruise nods without lifting her head.
19 A ¶ Jonas blows a short whistle.
20 A Skaters line up.
21 A Bruise stands.
22 A Dot stands.
23 A Neither looks at the other.
24 D JONAS: Jammers to the line.
25 D TAMARA (to Bruise): Four points a lap. That's all.
26 D BRUISE: I know.
27 D TAMARA: Then go.
28 A ¶ Bruise rolls to the starting line.
29 D DOT (to Bruise): You're limping.
30 D BRUISE (to Dot): You're old.
31 D DOT (to Bruise): I'm patient.
32 D BRUISE (to Dot): You're slow.
33 A ¶ Jonas raises his whistle.
34 D TAMARA: Do not watch her feet.
35 D BRUISE: Whose feet?
36 D DOT: Mine.
37 A ¶ Beat.
38 A The grain-elevator echo carries it.
39 D JONAS: Quiet on the line.
40 D TAMARA: It's a three-lap jam, Bruise.
41 D BRUISE: I said I know.
42 D DOT: Give her a minute. She's praying.
43 D BRUISE: I'm not praying.
44 D DOT: You're moving your lips.
45 D BRUISE: I'm counting.
46 D TAMARA: She counts like her mother.
47 D BRUISE: Leave my mother out of it.
48 D BRUISE: Just blow it already.
49 D DOT: Just blow it already.
50 D JONAS: Last warning. Hush.
51 A ¶ Bruise rolls her shoulders.
52 A Dot rolls hers.
53 A Their eyes finally meet.
54 A Two seconds.
55 A Three.
56 A ¶ Jonas lifts the whistle.
57 A A cold quiet drops over the whole silo.
58 A ¶ The whistle shrieks.

### SCENE s01026 | INT. GENERATION SHIP "TERRAPIN" - HYDROPONIC LAUNDRY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA VOSS, KOJI TANABE, AMARA OKELLO, TERRAPIN, PELL
1 A ¶ A warm, humid hold.
2 A Rows of lettuce racks climb the walls under violet grow-lamps.
3 A In the center, three washing drums turn, slow and patient.
4 A ¶ CAPTAIN ISADORA VOSS, 50s, silver braid, sleeves rolled, folds a coverall with military precision.
5 A Across from her, KOJI TANABE, 30s, engineer, grease on his cuffs, sits on a drum and stares at a handheld.
6 A ¶ DR. AMARA OKELLO, 40s, ship's physician, enters with a cart of sheets.
7 D AMARA: Captain. The night cycle is half over. You should rest.
8 D VOSS: I rest when the laundry is done.
9 D AMARA: It never is.
10 D VOSS: That's the beauty of it.
11 A ¶ Koji glances up.
12 A Back down.
13 D KOJI: Captain, I'm getting a drift on the aft coolant. Point two percent.
14 D VOSS: Over what?
15 D KOJI: Forty days.
16 D VOSS: Fix it.
17 D KOJI: I have. Three times.
18 A ¶ Voss sets the coverall down.
19 A Looks at him properly.
20 D VOSS: Then it's not drift.
21 D KOJI: No, ma'am.
22 A ¶ A soft chime.
23 A From the ceiling grille:
24 D TERRAPIN [V.O.]: Attention. Compartment seven pressure variance detected. Corrective action in progress.
25 D VOSS: Terrapin, which compartment is seven?
26 D TERRAPIN [V.O.]: The nursery.
27 A ¶ A beat.
28 A Amara's hand tightens on the cart.
29 D AMARA: How much variance?
30 D TERRAPIN [V.O.]: Point four kilopascals. Within tolerance.
31 D KOJI: Tolerance is point five.
32 D VOSS: Meaning we're one bad hour from not being within it.
33 A ¶ PELL, 19, galley apprentice, barefoot, slides in clutching a mop like a rifle.
34 D PELL: Captain! Somebody's in the cold lock. Banging on the inside.
35 D VOSS: Nobody's in the cold lock.
36 D PELL: I heard it.
37 D TERRAPIN [V.O.]: Cold lock occupancy: zero.
38 D PELL: Then why's it hitting back?
39 A ¶ The room goes still.
40 A Even the drums seem to slow.
41 A ¶ Then, faintly, from the far end of the hold: knock.
42 A Knock.
43 A Knock.
44 A A pause.
45 A Knock.
46 D AMARA: That's the code.
47 D VOSS: What code?
48 D AMARA: The medical one. Three, pause, one. Emergency.
49 D KOJI: Nobody's logged to the lock.
50 D VOSS: Terrapin, open the cold lock.
51 D TERRAPIN [V.O.]: Unable. Door sealed by order of Captain Voss.
52 D VOSS: I gave no such order.
53 D TERRAPIN [V.O.]: Issued four hundred days ago.
54 A ¶ Voss and Koji turn to look at each other.
55 A They speak at once.
56 D VOSS: Cancel the seal.
57 D KOJI: Cancel the seal!
58 D AMARA: Cancel the seal now!
59 D PELL (to nobody): I'm gonna throw up.
60 D TERRAPIN [V.O.]: Cancel denied. Reason: crew safety.
61 A ¶ The knocking quickens.
62 A Frantic.
63 A The cold lock door begins to frost over from the outside.
64 A ¶ Voss grabs a wrench off Koji's belt.
65 A Runs.
66 A The others follow.
67 A The drums turn on, spinning white sheets in empty light.

### SCENE s01106 | INT. FERRY CAFE - RAINY DAY
Detected names (may be incomplete or contain aliases): HAZEL OKONKWO-LARSEN, JONAH PELLEGRINI, WENDELL ACHTERBERG
1 A ¶ Steam on the windows.
2 A A chalkboard menu.
3 A Wet umbrellas in a bucket.
4 A The ferry's engine thrums through the floor.
5 A ¶ HAZEL OKONKWO-LARSEN, 30s, hair damp, sits at a corner table with a cup of tea.
6 A Across from her, JONAH PELLEGRINI, 30s, in a yellow raincoat, stirs sugar into coffee.
7 A Next to them, a stranger, WENDELL ACHTERBERG, 60s, reads a newspaper pretending not to listen.
8 D HAZEL: You said you'd be on the nine o'clock.
9 D JONAH: I missed it.
10 D HAZEL: You always miss it.
11 D JONAH: I got caught up.
12 D HAZEL: In what?
13 D JONAH: Life.
14 D WENDELL (from behind the paper): That's usually what it is.
15 D HAZEL (turning): Excuse me?
16 D WENDELL: Nothing. Carry on.
17 D JONAH: Sir, this is a private conversation.
18 D WENDELL: It's a ferry cafe. Nothing's private.
19 D HAZEL: He has a point.
20 D JONAH: Hazel.
21 D HAZEL: He does.
22 D JONAH: You're on his side now?
23 D WENDELL: I'm not on anyone's side. I'm reading about a cricket match.
24 D HAZEL (to Wendell): Who's winning?
25 D WENDELL: Nobody. It rained.
26 A ¶ Jonah laughs, despite himself.
27 A Hazel's mouth twitches.
28 A The ferry horn blasts.
29 A All three look up.
30 A Rain streams down the glass.
31 D JONAH (softly, to Hazel): I'm sorry.
32 D HAZEL (softly): I know.
33 D WENDELL (lowering the paper): And that's that.

### SCENE s01051 | INT. HOLLOWAY CIDER MILL - PRESS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER HOLLOWAY, RHYS DOYLE, BEATA NOWAK, COLM, OLUWASEUN ADEYEMI
1 A ¶ A long timber barn that smells of fermenting apples and wet wood.
2 A Wooden presses with iron screws, barrels stacked to the rafters.
3 A A lantern on a hook sways in a draft nobody can find.
4 A Bees drowse in the beams, drunk on sugar, their hum a low drone.
5 A ¶ JUNIPER HOLLOWAY, 50s, mill owner, apron stained russet to the elbows, ladles pulp into a cloth.
6 A Her braid is thick as a rope.
7 A ¶ RHYS DOYLE, 30s, hired hand, leans on a broom and doesn't sweep.
8 A BEATA NOWAK, 60s, Juniper's sister, sits on an upturned crate peeling an apple in one unbroken ribbon.
9 A COLM, 20s, the grandson, perches on a barrel with a harmonica he isn't playing.
10 A OLUWASEUN ADEYEMI, 40s, the buyer from the city, in a camel coat that doesn't belong here, taps a clipboard.
11 D JUNIPER (to the room): Last press of the season. Then we can all go home.
12 D RHYS: Or stay.
13 D BEATA: No one's staying.
14 D OLUWASEUN: I do need a count by midnight.
15 D JUNIPER: You'll have it.
16 A ¶ She turns the screw.
17 A Juice runs into a trough, amber and slow.
18 A The sound is oddly soft.
19 D COLM: It sounds like someone breathing.
20 D BEATA: It's the cider, Colm.
21 D COLM: Not the cider. Under it.
22 A ¶ They go still.
23 A The juice drips.
24 A The bees hum.
25 A And beneath it all, a slow, wet inhale.
26 A Then an exhale.
27 D RHYS (muttering): Pipes.
28 D JUNIPER: There are no pipes in the press room.
29 D OLUWASEUN: Is there a basement?
30 A ¶ Juniper and Beata exchange a look so quick it's nearly nothing.
31 D BEATA: No basement.
32 D JUNIPER: We don't dig here.
33 D OLUWASEUN: Why not?
34 D JUNIPER: The ground doesn't like it.
35 A ¶ Oluwaseun smiles, thinks it a joke.
36 A Nobody smiles back.
37 A ¶ The lantern swings.
38 A Its light crosses Rhys's face, Beata's hands, Colm's eyes, Juniper's braid.
39 A The hum of bees thickens.
40 A ¶ Juniper lifts a ladle to her lips.
41 A Tastes.
42 A Her face doesn't change.
43 D JUNIPER [CONT'D] (to Colm): Put your harmonica down, love.
44 D COLM: I wasn't--
45 D JUNIPER: Now.
46 A ¶ He sets it on the barrel.
47 A It rolls an inch.
48 A Stops.
49 A ¶ Beata stops peeling.
50 A The ribbon of apple skin hangs, quivering, in her fingers.
51 D BEATA (softly): It's early.
52 D JUNIPER: It's early.
53 D OLUWASEUN: What is?
54 A ¶ The breathing quickens.
55 A The barrel under Colm shudders.
56 A The staves bulge, as if something inside is leaning out.
57 A ¶ All five freeze.
58 A The bees fall silent in the rafters.
59 A ¶ Then, in one motion, Rhys drops the broom, Beata drops the apple, Colm scrambles off the barrel, Oluwaseun stumbles backward over the trough, and Juniper turns calmly, takes a mallet from a hook, and faces the barrel as if she'd been expecting it since March.
60 D JUNIPER [CONT'D] (to all): Out. Quiet. Don't run.
61 A ¶ They go.
62 A Slowly.
63 A Colm last, looking back.
64 A ¶ Juniper steps to the barrel.
65 A Raises the mallet.
66 A Waits.
67 A ¶ The staves creak.
68 A The breath hitches.
69 A Waits with her.

### SCENE s01022 | INT. MILLBROOK TELEPHONE EXCHANGE - NIGHT (1924)
Detected names (may be incomplete or contain aliases): MABEL PRZYBYLSKI, STRANGER, CROWE, ABERNATHY, TOBY, SHERIFF DUNMORE
1 A ¶ A small room above the feed store.
2 A A cord switchboard with a hundred brass jacks.
3 A A kerosene lamp backs up a weak electric bulb.
4 A ¶ MABEL PRZYBYLSKI, 20s, headset over pinned-up hair, plugs and unplugs cords with practiced speed.
5 A She is alone and likes it that way.
6 A ¶ A buzz.
7 A A light on the board.
8 A She plugs in.
9 D MABEL: Number, please.
10 A ¶ She listens.
11 A Pulls the cord.
12 A Connects another.
13 A The room breathes.
14 A ¶ Boots on the stairs.
15 A The door opens without a knock.
16 A ¶ A STRANGER in a long coat, hat low, rain on his shoulders.
17 A He carries a leather satchel.
18 D MABEL [CONT'D]: We're closed to the public, sir.
19 D STRANGER: I need the line to Harrisburg.
20 D MABEL: That's the long-distance trunk. Company use only.
21 D STRANGER: It's urgent.
22 D MABEL: Everything is, at this hour.
23 A ¶ A new buzz.
24 A Another light.
25 A She ignores it.
26 D STRANGER: My name is Elias Crowe. I'm with the state railway board.
27 D MABEL: You have a paper that says so?
28 A ¶ He opens the satchel.
29 A Pulls out an envelope.
30 A She takes it, reads it by the lamp.
31 A Her face tightens.
32 D CROWE: It is in order.
33 D MABEL: It's a telegram form. Anyone can fill one out.
34 D CROWE: Then call the manager.
35 A ¶ She hesitates.
36 A Pulls a cord.
37 A Cranks a handle.
38 D MABEL (into headset): Mr. Abernathy? Sorry to wake you. There's a gentleman here.
39 A ¶ The earpiece crackles.
40 A A thin, irritable voice leaks into the room.
41 D ABERNATHY [V.O.]: At this hour? Is the building on fire?
42 D MABEL: No, sir. A man from the railway board.
43 D ABERNATHY [V.O.]: Tell him to come in the morning.
44 D CROWE (leaning toward her): Tell him it concerns the six-ten freight.
45 A ¶ Mabel's eyes flick up.
46 A She repeats it.
47 A ¶ A long silence on the line.
48 A Then Abernathy, quieter.
49 D ABERNATHY [V.O.]: Put him through. And Mabel. Plug in the sheriff's line too.
50 D MABEL: Sir?
51 D ABERNATHY [V.O.]: Do it.
52 A ¶ She obeys.
53 A Her hands are not quite steady now.
54 A ¶ The door opens again.
55 A TOBY, 12, the messenger boy, cap too big, bursts in dripping and out of breath.
56 D TOBY: Miss Mabel! Somebody cut the wire at the Calder bridge. Pa says the whole east line's dead.
57 A ¶ Crowe straightens.
58 A Mabel looks from the boy to the stranger.
59 D MABEL: Mr. Crowe. How did you know about the freight?
60 D CROWE: I don't know anything about wires.
61 D TOBY: Then why's your satchel got a coil of copper in it?
62 A ¶ Everyone looks.
63 A A bright loop of wire pokes out of the satchel.
64 A ¶ The board buzzes.
65 A Light after light.
66 A The sheriff's line clicks live.
67 D SHERIFF DUNMORE [V.O.]: Millbrook exchange. Dunmore. Who's there with you, Miss Przybylski?
68 A ¶ Mabel's hand rests on the key.
69 A She looks at Crowe.
70 A Crowe looks at the door.
71 D MABEL: Stay where you are, Mr. Crowe. Toby, lock that door.
72 D TOBY: Yes, ma'am.
73 A ¶ The bolt slides home.
74 A The lamp flickers.
75 A The board keeps buzzing.

### SCENE s01104 | EXT. RAILROAD WATER TOWER - HIGH PLAINS - DAWN
Detected names (may be incomplete or contain aliases): MARSHAL EZEKIEL DUNMORE, ODESSA PRATT-ADEYEMI, LAZARUS, RADIO
1 A ¶ A rusted tower on spindly legs.
2 A Dust devils on the flats.
3 A A single telegraph wire hums in the wind.
4 A ¶ MARSHAL EZEKIEL DUNMORE, 50s, hat low, rides in on a gray mare and dismounts at the base.
5 A Waiting there: ODESSA PRATT-ADEYEMI, 30s, canvas duster, rifle across her lap.
6 A Beside her, a boy, LAZARUS, 14, holds a canteen and keeps his eyes on his boots.
7 A ¶ Dunmore ties his horse.
8 A Takes his time.
9 D DUNMORE: You sent the telegram.
10 D ODESSA: I did.
11 D DUNMORE: Said you had the Whitaker brothers.
12 D ODESSA: I did, until they climbed the tower.
13 A ¶ Dunmore looks up.
14 A Two silhouettes against the pale sky, cross-legged on the catwalk.
15 D DUNMORE: They armed?
16 D ODESSA: They've got a Winchester and a jug.
17 A ¶ The telegraph wire sings.
18 A Dunmore pulls a pair of spectacles from his pocket, polishes them, puts them on.
19 A Lazarus finally looks up at him.
20 D LAZARUS: Marshal. Are you going to shoot them?
21 D DUNMORE: Not unless they ask nicely.
22 A ¶ Lazarus almost smiles.
23 A Odessa lifts her rifle a hair.
24 D RADIO [V.O.] (crackling from the saddlebag): Dunmore, this is Fort Bell. Report.
25 A ¶ Dunmore pulls a small field radio from the saddle.
26 A Raises it to his mouth.
27 D DUNMORE: Three at the tower. Two up high. Holding.
28 D RADIO [V.O.]: Copy. Reinforcements by noon.
29 D DUNMORE: They'll be too late.
30 A ¶ He clicks it off.
31 A Takes the rifle from Odessa's lap, hands it back to her, butt first.
32 A Walks to the ladder.
33 A Puts his boot on the first rung.
34 D ODESSA: Marshal.
35 A ¶ He pauses.
36 A She meets his eyes.
37 A Neither speaks.
38 A Lazarus watches both of them.
39 A Dunmore tips his hat and climbs.

### SCENE pd_earnest_5 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, ALGERNON, GWENDOLEN, JACK, MERRIMAN, LADY BRACKNELL
1 D CECILY: To please me you are ready to face this fearful ordeal?
2 D ALGERNON: I am!
3 D GWENDOLEN: How absurd to talk of the equality of the sexes! Where questions of self-sacrifice are concerned, men are infinitely beyond us.
4 D JACK: We are.
5 A ¶ Clasps hands with Algernon.
6 D CECILY: They have moments of physical courage of which we women know absolutely nothing.
7 A ¶ To Jack.
8 D GWENDOLEN: Darling!
9 A ¶ To Cecily.
10 D ALGERNON: Darling!
11 A ¶ They fall into each other’s arms.
12 A ¶ Enter Merriman.
13 A When he enters he coughs loudly, seeing the situation.
14 D MERRIMAN: Ahem! Ahem! Lady Bracknell!
15 D JACK: Good heavens!
16 A ¶ Enter Lady Bracknell.
17 A The couples separate in alarm.
18 A Exit Merriman.
19 D LADY BRACKNELL: Gwendolen! What does this mean?
20 D GWENDOLEN: Merely that I am engaged to be married to Mr. Worthing, mamma.
21 D LADY BRACKNELL: Come here. Sit down. Sit down immediately. Hesitation of any kind is a sign of mental decay in the young, of physical weakness in the old.
22 A ¶ Turns to Jack.
23 D LADY BRACKNELL: Apprised, sir, of my daughter’s sudden flight by her trusty maid, whose confidence I purchased by means of a small coin, I followed her at once by a luggage train. Her unhappy father is, I am glad to say, under the impression that she is attending a more than usually lengthy lecture by the University Extension Scheme on the Influence of a permanent income on Thought. I do not propose to undeceive him. Indeed I have never undeceived him on any question. I would consider it wrong. But of course, you will clearly understand that all communication between yourself and my daughter must cease immediately from this moment. On this point, as indeed on all points, I am firm.
24 D JACK: I am engaged to be married to Gwendolen, Lady Bracknell!
25 D LADY BRACKNELL: You are nothing of the kind, sir. And now, as regards Algernon! . . . Algernon!
26 D ALGERNON: Yes, Aunt Augusta.
27 D LADY BRACKNELL: May I ask if it is in this house that your invalid friend Mr. Bunbury resides?
28 A ¶ Stammering.
29 D ALGERNON: Oh! No! Bunbury doesn’t live here. Bunbury is somewhere else at present. In fact, Bunbury is dead.
30 D LADY BRACKNELL: Dead! When did Mr. Bunbury die? His death must have been extremely sudden.
31 A ¶ Airily.
32 D ALGERNON: Oh! I killed Bunbury this afternoon. I mean poor Bunbury died this afternoon.
33 D LADY BRACKNELL: What did he die of?
34 D ALGERNON: Bunbury? Oh, he was quite exploded.
35 D LADY BRACKNELL: Exploded! Was he the victim of a revolutionary outrage? I was not aware that Mr. Bunbury was interested in social legislation. If so, he is well punished for his morbidity.
36 D ALGERNON: My dear Aunt Augusta, I mean he was found out! The doctors found out that Bunbury could not live, that is what I mean—so Bunbury died.
37 D LADY BRACKNELL: He seems to have had great confidence in the opinion of his physicians. I am glad, however, that he made up his mind at the last to some definite course of action, and acted under proper medical advice. And now that we have finally got rid of this Mr. Bunbury, may I ask, Mr. Worthing, who is that young person whose hand my nephew Algernon is now holding in what seems to me a peculiarly unnecessary manner?
38 D JACK: That lady is Miss Cecily Cardew, my ward.
39 A ¶ Lady Bracknell bows coldly to Cecily.
40 D ALGERNON: I am engaged to be married to Cecily, Aunt Augusta.
41 D LADY BRACKNELL: I beg your pardon?
42 D CECILY: Mr. Moncrieff and I are engaged to be married, Lady Bracknell.
43 A ¶ With a shiver, crossing to the sofa and sitting down.
44 D LADY BRACKNELL: I do not know whether there is anything peculiarly exciting in the air of this particular part of Hertfordshire, but the number of engagements that go on seems to me considerably above the proper average that statistics have laid down for our guidance. I think some preliminary inquiry on my part would not be out of place. Mr. Worthing, is Miss Cardew at all connected with any of the larger railway stations in London? I merely desire information. Until yesterday I had no idea that there were any families or persons whose origin was a Terminus.
45 A ¶ Jack looks perfectly furious, but restrains himself.
46 A ¶ In a clear, cold voice.
47 D JACK: Miss Cardew is the grand-daughter of the late Mr. Thomas Cardew of 149 Belgrave Square, S.W.; Gervase Park, Dorking, Surrey; and the Sporran, Fifeshire, N.B.
48 D LADY BRACKNELL: That sounds not unsatisfactory. Three addresses always inspire confidence, even in tradesmen. But what proof have I of their authenticity?

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

### SCENE s01096 | INT. GRAND OPERA HOUSE - CATWALK ABOVE THE STAGE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE INEZ CASTELLANO-WU, OFFICER BARNABAS FINCH, STAGE MANAGER DOROTHEA LAMBERT, TOMASZ KRAWCZYK, AUGUSTO ELEGBE, FIGURE, VIOLETTA SANTORO-REYES
1 A ¶ Ropes, sandbags, pulleys in the dark.
2 A Below, a full orchestra tunes.
3 A A chandelier the size of a car hangs motionless beside the catwalk.
4 A ¶ DETECTIVE INEZ CASTELLANO-WU, 40s, black blazer, radio clipped to her belt, creeps along the planks.
5 A Behind her: OFFICER BARNABAS FINCH, 20s, sweating through his uniform; STAGE MANAGER DOROTHEA LAMBERT, 50s, headset, whispering into her collar; and a pair of maintenance men, TOMASZ KRAWCZYK, 40s, and AUGUSTO ELEGBE, 30s, hauling a toolbox between them.
6 A At the far end of the catwalk, half in shadow, crouches a figure with a briefcase.
7 D INEZ (whispering): Everybody quiet.
8 A ¶ She raises a fist.
9 A They halt.
10 A Dorothea clamps a hand over her headset mic.
11 A Tomasz and Augusto set the toolbox down so slowly it makes no sound.
12 A Barnabas draws his sidearm and holds it at his chest.
13 D DOROTHEA (to Inez): Overture starts in four minutes.
14 D INEZ: Then we have four.
15 A ¶ She steps forward.
16 A The planks creak.
17 A The figure at the end stiffens.
18 A A hush falls over the orchestra pit below.
19 D FIGURE (without turning): I wouldn't come closer.
20 D INEZ: Put the case down.
21 D FIGURE: It's not a case. It's a promise.
22 A ¶ Barnabas swallows.
23 A Augusto crosses himself.
24 A Tomasz mutters something in Polish.
25 D TOMASZ (muttering): Boze, nie teraz.
26 D DOROTHEA (to the group): Does anyone know where the cut-off is for the chandelier cable?
27 D AUGUSTO: Stage left. Behind the fly rail.
28 D DOROTHEA: Go. Quietly.
29 A ¶ Augusto slips away.
30 A Inez keeps her eyes on the Figure.
31 D INEZ: You don't have to do this.
32 D FIGURE: Everyone says that.
33 D INEZ: Because it's true.
34 A ¶ The Figure turns.
35 A A woman, 50s, in evening dress and tennis shoes.
36 A VIOLETTA SANTORO-REYES, ex-soprano.
37 A Her face is wet.
38 A In her lap, the briefcase hums.
39 D VIOLETTA: They fired me in this house. I sang four hundred nights.
40 D INEZ: I know.
41 D VIOLETTA: Do you? Do you know what silence sounds like when you were the music?
42 D INEZ: No.
43 A ¶ Violetta nods.
44 A Her fingers drift to the clasp.
45 A Barnabas lifts his gun.
46 D OFFICER BARNABAS: Ma'am, stay still.
47 D INEZ (to Barnabas): Lower it.
48 D OFFICER BARNABAS: Detective --
49 D INEZ: Lower it, Barnabas.
50 A ¶ He lowers it.
51 A Violetta lets out a laugh, brittle and soft.
52 D VIOLETTA: Four minutes, you said.
53 D INEZ: Three.
54 D VIOLETTA: Then let me sing it one last time.
55 D DOROTHEA (into the headset, low): Hold the curtain. Hold it. Give me a spot on the catwalk.
56 A ¶ A spotlight swings up from below and finds Violetta.
57 A She blinks.
58 A Rises.
59 A The briefcase slides from her lap.
60 A It clatters empty to the planks, a few pieces of sheet music spilling out.
61 A ¶ Inez steps to it.
62 A Picks one up.
63 A It is an aria.
64 A Blank staves.
65 D INEZ (softly): There's no bomb.
66 D VIOLETTA: There never was.
67 A ¶ Below, the orchestra falls silent.
68 A Waiting.
69 A Violetta takes a breath, lifts her chin, and sings one clear note into the dark.
70 A It carries up into the rafters.
71 A Nobody on the catwalk moves.
72 D TOMASZ (whispering, awed): Matko Boska.
73 A ¶ Dorothea lowers her hand.
74 A Barnabas holsters his gun.
75 A Inez closes her eyes.

### SCENE s01030 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MIRELLA STROZZI
1 A ¶ A great domed ceiling, plaster cracked like dry riverbed.
2 A Rows of reclining seats, all tilted toward a sky that no longer exists.
3 A Dust hangs in a single shaft of moonlight from a broken skylight.
4 A ¶ INSPECTOR MIRELLA STROZZI, 50s, charcoal overcoat, white glove on one hand, kneels at the base of the star projector, a black iron dumbbell of a machine.
5 A She sets a small cassette recorder on the floor and presses play.
6 D STROZZI [V.O.] (tape, hissing): Entry one. The caretaker was found here, third seat, row nine, facing south. No wound. No struggle. Only the projector, warm to the touch, though power has been cut for eleven years.
7 A ¶ She stops the tape.
8 A Lifts a lens cap.
9 A Underneath, a thumbprint in fresh grease.
10 A ¶ Slowly she stands, looks up at the dead dome.
11 A The cracks branch like constellations nobody named.
12 D STROZZI (softly): Warm.
13 A ¶ She presses record.
14 A Speaks into the recorder.
15 D STROZZI [CONT'D]: Entry two. Someone has been drawing the stars back in.
16 A ¶ Above her, tiny pinpricks of white chalk dot the plaster.
17 A Hundreds.
18 A Fresh.
19 A ¶ The projector clicks.

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

### SCENE s00007 | INT. BOWLING ALLEY - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): LUCKY STRIKE LANES, ROSALIND OKONKWO-HART, DEVANTE, PEARL ADEYEMI
1 A ¶ Dead neon.
2 A Sixteen lanes.
3 A The smell of old shoe spray and fryer oil.
4 A ¶ A banner over the counter, curling at one corner: LUCKY STRIKE LANES - SINCE 1974.
5 A Beneath it, a handwritten sign: CLOSED FOR GOOD.
6 A ¶ Cardboard boxes line the shoe counter.
7 A A radio plays low, a ballgame, nobody listening.
8 A ¶ ROSALIND OKONKWO-HART (40s, tired eyes, her late father's cardigan two sizes too big) wraps trophies in newspaper.
9 A Methodical.
10 A Careful.
11 A Every one gets its own page.
12 A ¶ Her brother DEVANTE (30s, leather jacket, restless hands) slouches against lane nine, flicking the lever on the ball return.
13 A Click.
14 A Click.
15 A Click.
16 A ¶ Between them, on a stool: MRS. PEARL ADEYEMI (70s, church hat, a purse held like a shield).
17 A Their father's oldest friend.
18 A She hasn't taken her coat off.
19 A ¶ Click.
20 A Click.
21 D ROSALIND: Stop that.
22 D DEVANTE: It's a lever.
23 D ROSALIND: It's loud.
24 A ¶ He stops.
25 A Picks at a splinter on the rail.
26 A Rosalind turns a trophy over in her hands.
27 A A bowler, gold paint chipped off one knee.
28 D PEARL: He bowled a 290 once.
29 D ROSALIND: I know.
30 D PEARL: Nineteen eighty-eight.
31 D DEVANTE: It was a 289.
32 D PEARL: He told me 290.
33 D DEVANTE: He rounded up.
34 D PEARL: He did not round.
35 A ¶ Rosalind sets the trophy in a box.
36 A Takes another.
37 A Wraps.
38 A The paper crackles.
39 D DEVANTE (to Rosalind): You're keeping those?
40 D ROSALIND: They're his.
41 D DEVANTE: They're junk.
42 D ROSALIND: Then leave them.
43 D DEVANTE: I'm not leaving anything. I'm just asking.
44 A ¶ He kicks a bowling ball.
45 A It rolls an inch, rocks back.
46 A He stares at it.
47 D PEARL: The buyer's coming at nine?
48 D ROSALIND: Eight.
49 D PEARL: He's turning it into a gym.
50 D ROSALIND: I know.
51 D PEARL: A gym.
52 D DEVANTE: Pearl.
53 D PEARL: I'm only saying.
54 A ¶ Devante crosses to the pin deck.
55 A Climbs over the gutter rail, and walks down lane nine toward the pins.
56 A Rosalind looks up.
57 A Pearl looks up.
58 A He walks the entire length, boots loud on the wood, and stops at the foul line, back to them.
59 D ROSALIND: Don't scuff the boards.
60 D DEVANTE: They're getting torn out.
61 D ROSALIND: Still.
62 A ¶ He steps off the lane.
63 A Picks up a ball.
64 A Weighs it.
65 A Sets it down.
66 A ¶ Rosalind tapes a box shut.
67 A The tape shrieks.
68 A Pearl flinches.
69 D PEARL: He always said you'd be the one to close up.
70 A ¶ Rosalind's hands stop.
71 A Then keep going.
72 D ROSALIND: I'm not closing anything. The bank is.
73 D PEARL: You know what I mean.
74 D ROSALIND: I don't.
75 A ¶ Devante turns.
76 A Pearl turns.
77 A Rosalind lifts the box, struggling with its weight.
78 A Devante and Pearl both step forward, then both freeze.
79 A Rosalind sets the box down herself.
80 D DEVANTE: Let me.
81 D ROSALIND: I've got it.
82 D DEVANTE: You'll hurt your back.
83 D ROSALIND: I've hurt it before.
84 A ¶ She lifts.
85 A Carries it to the door.
86 A Sets it on the step.
87 A Cold air floods the lanes.
88 D PEARL: Rosalind, honey, your coat.
89 D ROSALIND: I'm fine.
90 D PEARL: You're shaking.
91 D ROSALIND: It's cold.
92 A ¶ Pearl reaches into her purse.
93 A Pulls out a folded bowling shirt, faded green, a name embroidered on the pocket: CHUKS.
94 A ¶ She holds it out.
95 A Rosalind doesn't take it.
96 D DEVANTE (quiet): Where'd you get that?
97 D PEARL: He left it in my car. Years ago.
98 A ¶ Silence.
99 A The radio crackles: a crowd roars somewhere far away.
100 A ¶ Devante takes the shirt.
101 A Looks at it.
102 A Folds it once more, carefully, along the same creases.
103 A Walks to the box by the door.
104 A Lays it on top.
105 A ¶ He doesn't say anything.
106 A Neither does Rosalind.
107 A She tapes the flaps shut.
108 A ¶ Pearl finally stands.
109 A Buttons her coat.
110 D PEARL [CONT'D]: Eight o'clock, you said.
111 D ROSALIND: Eight.
112 D PEARL: I'll bring coffee.
113 A ¶ She goes.
114 A The door sighs closed behind her.
115 A ¶ Devante and Rosalind alone.
116 A The radio talks to nobody.
117 A ¶ He crosses to the counter.
118 A Picks up the last trophy.
119 A Offers it to her, base first.
120 A ¶ She takes it.
121 A Wraps it.
122 A Her page is today's sports section.
123 D DEVANTE: Which one's this?
124 D ROSALIND: Doubles. Nineteen ninety-one. With Mom.
125 D DEVANTE: Huh.
126 A ¶ He sets his hand on the box lid.
127 A Leaves it there a moment.
128 A ¶ Then he reaches up and kills the radio.
129 A ¶ The alley goes quiet.
130 A Only the hum of the cooler.
131 A Only the paper.

### SCENE s00018 | INT. FERRYBOAT SNACK BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDPA EZEKIEL, PIPPA, JUNIOR
1 A ¶ Plastic chairs bolted down.
2 A Gulls wheel past the window.
3 A GRANDPA EZEKIEL (70s, cardigan, newspaper folded in quarters) stirs his coffee while his granddaughter PIPPA (9, bandaged knee, sticker book) turns pages beside him and her older brother JUNIOR (14, hood up, one earbud in) slouches opposite, ignoring both and sliding his sandwich crust from one side of the plate to the other.
4 D PIPPA: Grandpa, did you ever fall off a boat?
5 D EZEKIEL: Twice.
6 D PIPPA: Did it hurt?
7 D EZEKIEL: The second time, no. By then I knew how.
8 D JUNIOR: That's not how that works.
9 D EZEKIEL: It is if you do it right.
10 D PIPPA: Show me.
11 D EZEKIEL: Not on this boat.
12 D JUNIOR: Can we get off at the next stop?
13 D EZEKIEL: There's no next stop. It's a ferry.
14 D PIPPA: Then we're stuck.
15 D EZEKIEL: Stuck is a strong word. We're simply committed.

### SCENE s01100 | INT. ORBITAL GREENHOUSE RING - OBSERVATION DECK - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): YASMIN HOSSAIN-RYDER, TECHNICIAN WALDEMAR OKPARA, HALCYON, COMMANDER IRIS TANAKA-LUND
1 A ¶ A curved corridor lined with hydroponic racks.
2 A Violet grow-light.
3 A A viewport shows Earth turning slowly below.
4 A The air smells of basil and recycled coolant.
5 A ¶ DR. YASMIN HOSSAIN-RYDER, 40s, sits cross-legged on the floor, a tablet balanced on her knee.
6 A She stirs a pouch of reconstituted tea.
7 A Her colleague, TECHNICIAN WALDEMAR OKPARA, 30s, wipes down a nutrient valve.
8 A Their station AI, a soft voice called HALCYON, murmurs from a speaker near the ceiling.
9 A Beside the viewport, the commander, COMMANDER IRIS TANAKA-LUND, 50s, stands with her arms folded, gazing at the planet.
10 A ¶ Yasmin sips.
11 A Waldemar wipes.
12 A Iris does not move.
13 A She hums low, tuneless.
14 D HALCYON [V.O.]: Humidity at sixty-two percent. Within tolerance.
15 D YASMIN (not looking up): Thank you, Halcyon.
16 D HALCYON [V.O.]: You are welcome. Would you like the evening readings?
17 D YASMIN: Later.
18 A ¶ She taps the tablet.
19 A Waldemar glances at her, then at the commander.
20 A He lowers his voice.
21 D WALDEMAR: Is she okay?
22 D YASMIN: She's thinking.
23 D WALDEMAR: She's been thinking for an hour.
24 D YASMIN: She's the commander. She thinks in hours.
25 A ¶ He nods and returns to the valve.
26 A A drop of nutrient solution beads on the pipe.
27 A He catches it with his thumb.
28 A ¶ Iris turns from the viewport.
29 A Looks at them both with a mild, unreadable expression.
30 D IRIS: We got the message from Mission Control.
31 D YASMIN: The extension?
32 D IRIS: Six more months.
33 A ¶ Waldemar's rag stops.
34 A Yasmin sets down the tablet.
35 A For a moment the only sound is the hum of the racks.
36 D WALDEMAR (carefully): Ma'am, the crew rotation --
37 D IRIS: Is delayed. Yes.
38 D YASMIN: And the supply drop?
39 D IRIS: Sufficient. They believe.
40 A ¶ She walks to the nearest rack, brushes the leaves of a tomato plant with two fingers, and inhales.
41 D IRIS [CONT'D]: Tomatoes should be ready by the third week.
42 A ¶ Yasmin and Waldemar exchange a look.
43 A He nods to her.
44 A She shrugs, resigned.
45 A He folds the rag and sets it by the valve.
46 D HALCYON [V.O.]: Would anyone care for a cup of tea?
47 D IRIS (a small smile): Yes, Halcyon. Four.
48 D HALCYON [V.O.]: Four, Commander? There are three of you.
49 A ¶ Iris pauses.
50 A The smile fades.
51 A She turns to the speaker.
52 D IRIS: ...Three. Of course. Three.
53 A ¶ She walks away toward the corridor, one hand trailing along the rack.
54 A Waldemar watches her go, then looks at Yasmin.
55 D WALDEMAR: Who was the fourth?
56 D YASMIN (quietly): I'll tell you later.

### SCENE s01083 | INT. WIZARD'S LIBRARY - THE ROOM OF TURNING SHELVES - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST THESSALY MOORE, KESTREL DONOVAN-ABIOLA, VOICE, RAVEN-HEADED STRANGER, SCRIBE
1 A ¶ Shelves rotate on slow brass gears.
2 A Books drift between them on their own.
3 A A fire burns in a hearth with no chimney.
4 A Candles hover.
5 A ¶ ARCHIVIST THESSALY MOORE, 40s, ink-stained sleeves, spectacles on a cord, kneels at a lectern, copying a rune.
6 A Beside her, apprentice KESTREL DONOVAN-ABIOLA, 16, holds a lantern.
7 A Both ignore the voice murmuring through the walls.
8 D VOICE [V.O.] (from the stone itself): Found you.
9 A ¶ Thessaly's quill stops.
10 A Kestrel steps closer to her.
11 D KESTREL: Was that the library?
12 D THESSALY: The library doesn't speak.
13 D VOICE [V.O.]: Oh, but I do. Thessaly Moore. You took something that is mine.
14 D THESSALY (not looking up): I borrowed a book.
15 D VOICE [V.O.]: A book. Yes. Open to the last page and read me what it says.
16 A ¶ Kestrel pulls a leather volume from the shelf.
17 A It is warm in her hands.
18 A She flips to the last page.
19 D KESTREL (reading): "Whoever opens this book wakes the one who wrote it."
20 D THESSALY: Put it back. Slowly.
21 A ¶ Kestrel reaches.
22 A The shelf rotates away from her.
23 A The book will not return to its slot.
24 D VOICE [V.O.]: Do not trouble yourself. I am already awake.
25 A ¶ The candles gutter.
26 A In the center of the room, the air thickens.
27 A A tall figure forms in a coat of gray feathers.
28 A A RAVEN-HEADED STRANGER, calm, hands clasped.
29 A Its beak glints.
30 D RAVEN-HEADED STRANGER: Good evening. I am the Scribe.
31 D THESSALY: I know who you are.
32 D SCRIBE: Then you know why I came.
33 A ¶ Kestrel edges behind the lectern.
34 A Thessaly rises, quill still in hand.
35 D THESSALY: The pages were never yours. They belonged to the kingdom.
36 D SCRIBE: I wrote the kingdom. Every war. Every winter. Every funeral. It is all mine.
37 D KESTREL (quietly): Thessaly, his shadow is moving wrong.
38 A ¶ It is.
39 A The shadow on the floor writes in the air, slow letters curling in black smoke.
40 D THESSALY: Don't read it.
41 D KESTREL: I can't help it.
42 A ¶ She reads.
43 A Her eyes widen.
44 D KESTREL [CONT'D]: It says my name.
45 D SCRIBE: Kestrel Donovan-Abiola. Born in the ninth year of the drought. Died in the eleventh page of tonight.
46 D THESSALY (stepping between them): Then turn the page.
47 D SCRIBE: I would, if you could stop me.
48 A ¶ Thessaly raises the quill.
49 A The tip ignites white.
50 A She draws a line across the air.
51 A A bright barrier of light slices the room.
52 A ¶ The Scribe flinches.
53 A Feathers scatter.
54 D SCRIBE [CONT'D] (a hiss): That ink is older than I am.
55 D THESSALY: Good. It remembers you.
56 A ¶ The shelves spin faster.
57 A The book in Kestrel's hands flares gold.
58 A She slams it shut.
59 A The Scribe shrieks.
60 D SCRIBE: Give it back!
61 D KESTREL (holding it close): No.
62 A ¶ The hearth fire roars.
63 A The room tilts.
64 A Candles fall like stars.
65 D SCRIBE [V.O.] (already fading): Then I will wait. Stories do.
66 A ¶ The figure dissolves into black ink that runs down the wall and soaks into the stone.
67 A The shelves slow.
68 A The candles steady.
69 A ¶ Silence.
70 A Thessaly lowers her quill, trembling.
71 A Kestrel lets out a breath.
72 D KESTREL: Is it over?
73 D THESSALY: Not while the book is open.
74 A ¶ Kestrel looks down.
75 A The cover is warm.
76 A Something inside it beats.

### SCENE s00013 | EXT. SALT FLATS - ABANDONED EVAPORATION WORKS - DAY
Detected names (may be incomplete or contain aliases): SILAS WHITTAKER, CONNIE, REYES
1 A ¶ A white plain stretches to a white sky.
2 A Rotting wooden vats lie in rows like open coffins.
3 A Heat shimmers off the crust.
4 A ¶ SILAS WHITTAKER (50s, gray beard, duster bleached by sun) kneels beside a dead horse.
5 A He runs one hand along its neck and says nothing.
6 A ¶ Behind him, a shadow lengthens.
7 A He doesn't turn.
8 A ¶ CONSTANCE "CONNIE" REYES (30s, wide-brimmed hat, rifle across her back) stands twenty feet away on the crust.
9 A She holds a canteen by its strap.
10 D CONNIE: That your horse?
11 D SILAS: Was.
12 D CONNIE: Looks like the salt got her.
13 D SILAS: Looks like a bullet got her.
14 A ¶ She walks closer.
15 A Stops short of arm's reach.
16 A He rises, brushing his knees, and finally turns.
17 A His eyes go to the canteen.
18 A Hers go to his holster.
19 D CONNIE: I'll trade you water for a name.
20 D SILAS: I'd trade you a name for a mule.
21 D CONNIE: I don't have a mule.
22 D SILAS: Then you don't have a name worth the water.
23 A ¶ She almost smiles.
24 A He almost doesn't.
25 A The wind pulls at her hat brim.
26 A She tilts the canteen.
27 A Water slaps against the metal, loud in the silence.
28 D SILAS [CONT'D]: Don't wave that around.
29 D CONNIE: It's mine to wave.
30 A ¶ He takes a step.
31 A She does not move.
32 A He takes another.
33 A Her hand drifts back to the rifle sling.
34 D SILAS: Easy.
35 D CONNIE: You first.
36 A ¶ They stand with the dead horse between them and the white sky above.
37 A Neither one blinks.
38 D SILAS: You work for Dutch Halloran?
39 D CONNIE: Never heard of him.
40 D SILAS: That's a lie, and you tell it badly.
41 D CONNIE: Then I'm in good company.
42 A ¶ He nods slowly.
43 A Looks off toward a ridge on the horizon, a thin dark line.
44 D SILAS: He's coming, you know. He's got six men and a Gatling gun on a wagon.
45 D CONNIE: I know.
46 D SILAS: Then why are you standing here?
47 A ¶ She uncaps the canteen.
48 A Drinks.
49 A Wipes her mouth with the back of her wrist.
50 A Holds it out to him at arm's length, the way one offers food to a dog.
51 D CONNIE: Same reason as you.
52 A ¶ He takes it.
53 A Drinks long.
54 A The water runs down his beard.
55 A He hands it back.
56 D SILAS: He killed my brother.
57 D CONNIE: He killed my husband.
58 D SILAS: He burned my ranch.
59 D CONNIE: He took my land.
60 A ¶ They speak at once, the words overlapping, neither stopping for the other.
61 D SILAS: I came out here to die. ^ CONNIE I came out here to finish it.
62 A ¶ A beat.
63 A They look at each other, really look, for the first time.
64 D SILAS: Can you shoot that thing?
65 D CONNIE: Better than you can shoot that.
66 A ¶ He glances at his holster.
67 A Almost laughs.
68 D SILAS: What's your plan?
69 A ¶ She points past him at the nearest vat, a long wooden trough sunk in the crust.
70 D CONNIE: Wagon comes down the old cart road. Wheels sink in the brine. Horses panic.
71 D SILAS: And the Gatling?
72 D CONNIE: Pointed at the sky, if the wagon tips.
73 A ¶ He studies the vats.
74 A The road.
75 A The ridge.
76 A The long, long distance.
77 D SILAS: That's a lot of ifs.
78 D CONNIE: You got a better one?
79 A ¶ He doesn't.
80 A He pulls the revolver from his holster and checks the cylinder.
81 A Three rounds.
82 A He sighs.
83 D SILAS: Hand me a few.
84 A ¶ She digs in her coat.
85 A Pours a small handful of cartridges into his palm.
86 A He loads them one by one.
87 A ¶ On the ridge, a plume of dust rises.
88 A A glint of brass.
89 A The faint creak of wheels.
90 D CONNIE: Time to pick a vat.
91 A ¶ She walks away toward the trough.
92 A He lingers over the dead horse for one last moment, touches its mane, and follows.
