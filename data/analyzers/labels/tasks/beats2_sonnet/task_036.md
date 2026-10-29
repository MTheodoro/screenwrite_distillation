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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00036.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00049 | EXT. CLIFFSIDE STAIRCASE OF THE WIND TEMPLE - DAWN
Detected names (may be incomplete or contain aliases): ALDRIC VANTERPOOL, THESSALY, SORREL IRONBARK, BARNABUS GLIMMERWICK
1 A ¶ Ten thousand steps, hewn into rock.
2 A Prayer flags snap.
3 A Clouds boil below.
4 A ¶ ALDRIC VANTERPOOL (30s, battered armor, scabbard empty) climbs, panting.
5 A Behind him, a hooded girl, THESSALY (teen, silver eyes, bare feet) hops step to step like a goat.
6 A Further down, burly SORREL IRONBARK (40s, axe on back, braided beard) hauls himself up, wheezing.
7 A Last comes the old wizard BARNABUS GLIMMERWICK (80s, crooked staff, patched robes), who rests on every third step.
8 D ALDRIC: Barnabus, hurry!
9 D BARNABUS: I am a wizard, not a mountain goat!
10 D THESSALY (skipping): I'm a mountain goat.
11 D SORREL (muttering): Gods, the stairs.
12 A ¶ Thessaly stops at a landing.
13 A Above, a stone gate, and between its pillars, a shimmering curtain of wind.
14 A She puts out her hand.
15 A It ripples.
16 D THESSALY: It's open.
17 D ALDRIC: Is it safe?
18 D THESSALY: No.
19 D SORREL: Good. I dislike safe.
20 A ¶ Barnabus catches up, bent double.
21 D BARNABUS: Aldric, listen. When we cross, the Wind Warden will ask each of us one question.
22 D ALDRIC: What question?
23 D BARNABUS: What we fear most.
24 D SORREL: ^That's easy.
25 D THESSALY: ^That's easy.
26 A ¶ They answer together, then glare at each other.
27 D ALDRIC: Sorrel?
28 D SORREL: Being forgotten.
29 D ALDRIC: Thessaly?
30 D THESSALY (small): Being found.
31 A ¶ Aldric draws a breath.
32 A Wind howls through the gate.
33 A He steps toward it, hand on the empty scabbard.
34 D ALDRIC: Then we go together.

### SCENE s01496 | INT. STRANDED GONDOLA CAR, ALPINE CABLEWAY - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, ELDERLY MAN, TEENAGE GIRL, OPERATOR, PATROL, TEENAGER, INES
1 A ¶ A glass box swaying slightly in the dark, forty meters above a gorge.
2 A Frost on the windows.
3 A A single battery lamp.
4 A The far lights of a village glitter like spilled sugar.
5 A ¶ Five people are packed inside, and a voice on a radio makes six.
6 A Skis, packs, a child's sled strapped to the wall.
7 A Their breath fogs the glass.
8 A ¶ A WOMAN in her fifties sits upright, coat buttoned to the chin, a folded map in her lap.
9 A A MAN in his thirties crouches by the door with a phone held high.
10 A A TEENAGE GIRL hugs her knees on the bench.
11 A An ELDERLY MAN with a cane and a flat cap sits staring at the ceiling.
12 A A YOUNG WOMAN in ski patrol red leans against the control panel.
13 A ¶ The man's phone shows no signal.
14 A He lowers it.
15 A ¶ The radio on the control panel crackles.
16 D OPERATOR [V.O.] (radio, faint): Gondola Nine, Base. Do you read?
17 A ¶ The patrol woman grabs the handset.
18 D PATROL: Base, Gondola Nine. We read. Six aboard, all stable.
19 D OPERATOR [V.O.] (radio): Copy six. Power's out on the whole line. Rescue crew's three hours out.
20 A ¶ The elderly man grunts.
21 A The woman refolds her map, creasing it in half, then in quarters.
22 D PATROL (to the car): Three hours. Everyone stay put. Please.
23 A ¶ She sets the handset down.
24 A The teenager shifts.
25 D TEENAGER: I'm cold. Ines, what do we do?
26 D INES: We sort it.
27 A ¶ The man in the door unzips his jacket.
28 A He crosses to the bench and spreads it over the teenager.
29 A He sits back on his heels.
30 A The old man watches him.
31 D ELDERLY MAN: You know her?
32 D MAN: No.
33 D ELDERLY MAN: Hm.
34 A ¶ The man looks at the teenager.
35 A She shakes her head, once.
36 A He turns away.
37 A ¶ The gondola lurches.
38 A A creak travels the cable from far above.
39 A Everyone freezes.
40 A The lamp flickers.
41 A The glass trembles in its frame.
42 D INES: It's the wind. Just the wind.
43 D WOMAN: It's not the wind.
44 D INES: Ma'am...
45 D WOMAN: It's the cable. Listen.
46 A ¶ They listen.
47 A A thin, rhythmic singing runs along the steel, rising in pitch.
48 D INES (into radio, sharp): Base, Base. We have cable noise. Repeat, cable noise.
49 D OPERATOR [V.O.] (radio): Say again, Nine?
50 D INES: Cable noise! Singing, pitching up!
51 D OPERATOR [V.O.] (radio): Hold on. Hold on, Nine.
52 A ¶ The old man lifts his cane and lays it across his knees like a rifle.
53 A The teenager pulls the jacket closer.
54 A The man by the door stands, swaying, and puts a hand on the glass.
55 A Far below, the gorge exhales cold air.
56 A ¶ The singing stops.
57 A A long, absolute silence.
58 A Then the car drops six inches, stops, and swings.
59 A ¶ Nobody screams.
60 A The young woman in red just closes her eyes.
61 D WOMAN (very quiet): All right. All right.
62 A ¶ She takes the teenager's hand.
63 A The teenager takes the old man's.
64 A He takes the man's.
65 A A chain.
66 A A shaky one.
67 D INES (whispering to herself): Come on, rescue. Come on.
68 A ¶ The radio hisses.
69 A No voice.
70 A The lamp holds, steady and small, as the car sways out over nothing.

### SCENE s00757 | INT. MUSEUM OF LOCKS - GREAT HALL - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR AMBROSE TREVELYAN, LADY CORDELIA ASHGROVE, PERIKLES NAKOS, MISS JOSEPHINE FINCH, HADLEY
1 A ¶ A vaulted gallery lined with glass cabinets of antique locks, padlocks, and hand-wrought keys.
2 A Gaslamp-style fixtures cast brass light.
3 A A grandfather clock ticks.
4 A Under a glass dome in the centre, an empty velvet cushion.
5 A ¶ INSPECTOR AMBROSE TREVELYAN, fifties, in a bowler hat, walks the length of the hall with hands clasped behind him.
6 A He pauses at the cushion.
7 D AMBROSE: The Duke's Key. Gone at half-past nine.
8 A ¶ LADY CORDELIA ASHGROVE, sixties, widow, in pearls and furs, sits stiffly on a bench.
9 A DR. PERIKLES NAKOS, forties, curator, wrings his hands beside her.
10 A MISS JOSEPHINE FINCH, twenties, the cataloguer, stands pale near the stairs.
11 A MR. HADLEY, seventies, the night butler, holds a tray of untouched sherry.
12 D CORDELIA: It is an outrage.
13 D PERIKLES: Madam, the cabinet was locked.
14 D AMBROSE: Locked, yes. Opened, no.
15 D JOSEPHINE: Then how--
16 D AMBROSE: Miss Finch. You were the last to leave the hall.
17 D JOSEPHINE: I was.
18 D AMBROSE: You saw nothing?
19 D JOSEPHINE: Only Mr. Hadley, with the sherry.
20 D HADLEY: I never left the pantry, sir.
21 D AMBROSE: That is a pity.
22 A ¶ Ambrose raises the glass dome, sets it aside, and picks up the velvet cushion.
23 A He turns it over, examines the underside, and shakes it.
24 A Dust falls.
25 A Perikles and Cordelia lean away; Josephine and Hadley edge toward the door.
26 D AMBROSE [CONT'D]: Nobody leave.
27 A ¶ They all freeze.
28 A The clock ticks.
29 D AMBROSE [CONT'D]: The key was never in the cabinet. It was swapped at the last catalogue. The one on this cushion was a copy.
30 D CORDELIA: Preposterous.
31 D AMBROSE: Dr. Nakos, who signed the catalogue?
32 A ¶ Perikles looks at Josephine.
33 A Josephine looks at Hadley.
34 A Hadley looks at Cordelia.
35 A Cordelia rises, drawing her furs about her like a shield, and takes one step toward the stairs.
36 A ¶ The four of them bolt in four directions.
37 A Ambrose lifts a whistle to his lips and blows.
38 A Doors slam.
39 A Footsteps thunder on marble.
40 A A constable's lantern swings through the arch, and the hall fills with shouting.

### SCENE s00293 | INT. COMMUNITY CENTER BASEMENT - FOLDING-CHAIR CIRCLE - NIGHT
Detected names (may be incomplete or contain aliases): DOLLIE, ENGSTROM-ACHEBE, CORNELL BEAUMONT-ASANTE, YASMINE KOWALSKI-HADDAD, TIBERIUS FAIRWEATHER-MWANGI, HARPER DELACROIX-YAMAMOTO
1 A ¶ A low-ceilinged room with a linoleum floor and a coffee urn that has been warm since 1994.
2 A Posters of tide pools on cinderblock walls.
3 A Five chairs in a circle, one empty.
4 A ¶ FACILITATOR DOLORES "DOLLIE" ENGSTROM-ACHEBE (60s, cardigan, kind eyes, a voice trained to be even) sits with a clipboard on her knee.
5 A ¶ CORNELL BEAUMONT-ASANTE (40s, mechanic's hands scrubbed pink, work shirt with his name stitched on) grips a paper cup.
6 A ¶ YASMINE KOWALSKI-HADDAD (30s, scrubs, hair coming loose, eyes bright with no sleep) sits with her feet tucked under her.
7 A ¶ OLD MR. TIBERIUS FAIRWEATHER-MWANGI (80s, tweed cap in his lap, hearing aid whistling softly) leans on a cane.
8 A ¶ HARPER DELACROIX-YAMAMOTO (17, hoodie, earbuds around neck) has chosen the chair nearest the door.
9 D DOLLIE: Thank you for coming. Who would like to start?
10 D CORNELL: I'll start.
11 D DOLLIE: Thank you, Cornell.
12 D CORNELL: My wife used to say I never talked. Said I could run a whole day on three words. Truth is I just never knew where to put the rest of them.
13 D YASMINE: That's me with my mother. Eleven years of silence in the same kitchen.
14 D CORNELL: And now she's gone.
15 D YASMINE: And now the kitchen's loud.
16 D TIBERIUS: What's that?
17 D DOLLIE: She says the kitchen's loud, Tiberius.
18 D TIBERIUS: Mine's the opposite. Mine hums. The refrigerator hums so much I think it's her.
19 D HARPER: That's not weird.
20 D TIBERIUS: It's a bit weird, young man.
21 D HARPER: I'm not a man.
22 D TIBERIUS: Young person, then. Forgive me.
23 D HARPER: It's fine.
24 D DOLLIE: Harper, would you like to share?
25 D HARPER: No.
26 D DOLLIE: That's all right.
27 D HARPER: Okay, maybe.
28 A ¶ A long pause.
29 A The urn gurgles.
30 D HARPER [CONT'D]: My dad's phone still gets texts. I read them sometimes. People tell him about their day. I don't know why I keep reading.
31 D YASMINE: You keep him company.
32 D HARPER: He's not there.
33 D YASMINE: Neither's my mother, and I still set two cups.
34 D CORNELL: Two cups.
35 D YASMINE: Every morning.
36 D CORNELL: I do that with the truck. I leave the passenger seat clear.
37 D TIBERIUS: What for?
38 D CORNELL: In case.
39 D TIBERIUS: Ah.
40 D DOLLIE: It's a good thing, to leave room.
41 D CORNELL: Is it?
42 D DOLLIE: I think so. I leave a chair in this circle every week. For whoever isn't here yet.
43 D HARPER: That's why there's an empty one.
44 D DOLLIE: That's why.
45 D TIBERIUS: It's not empty. My Winnie sits there.
46 A ¶ Silence.
47 A Nobody laughs.
48 D CORNELL (low): Mine too.
49 D YASMINE: Mine's in the kitchen.
50 D HARPER (very quietly): Mine's on the phone.
51 D DOLLIE: Then we're full tonight.

### SCENE s01564 | EXT. LIFE RAFT - OPEN OCEAN - DAY
Detected names (may be incomplete or contain aliases): LEILA ACHEBE-KOWALCZYK, ANSELM ODUYA-FENWICK, SOLENE BRZEZINSKI-OKORO, CAPTAIN ELWOOD NNAMDI-LINDQVIST, KIT ADEBAYO-HART
1 A ¶ A yellow raft on flat grey water.
2 A A torn canopy flaps.
3 A The horizon is empty.
4 A ¶ Five survivors share the space.
5 A ¶ LEILA ACHEBE-KOWALCZYK, 30s, ties a rag to an oar.
6 A ANSELM ODUYA-FENWICK, 40s, bails with a cut-off bottle.
7 A SOLENE BRZEZINSKI-OKORO, 20s, hugs her knees.
8 A Old CAPTAIN ELWOOD NNAMDI-LINDQVIST, 60s, fingers a rosary.
9 A And little KIT ADEBAYO-HART, 12, lies curled in the middle.
10 D LEILA: Eight days.
11 D ANSELM: Nine.
12 D LEILA: Eight.
13 D ANSELM: She counted the first night as one.
14 D SOLENE: I didn't count.
15 D ELWOOD: Nine, then.
16 A ¶ Anselm bails.
17 A Water arcs over the side.
18 A No one speaks.
19 D KIT (whisper): Is it going to rain?
20 D SOLENE: No.
21 D KIT: How do you know?
22 D SOLENE: I don't.
23 D LEILA: Don't tell him that.
24 D ANSELM: Why not? It's true.
25 D LEILA: Because he's twelve.
26 A ¶ Elwood turns a bead.
27 A Mouths a word.
28 A Solene watches the rosary as if it might answer.
29 D SOLENE: Captain. Are we drifting?
30 D ELWOOD: North.
31 D SOLENE: Towards what?
32 D ELWOOD: Towards nothing.
33 A ¶ Anselm stops bailing.
34 A Stares at the water.
35 D ANSELM: There's a shadow.
36 D LEILA: Where?
37 D ANSELM: Under us.
38 A ¶ They all lean.
39 A A long dark shape slides beneath the raft, then another.
40 A Leila grips Kit's shoulder.
41 A Anselm lifts the bottle like a weapon.
42 A Elwood closes his eyes.
43 D SOLENE (whisper): Don't look.
44 D KIT: Why?
45 D SOLENE: Because it looks back.
46 A ¶ The shapes pass.
47 A Water laps.
48 A The raft rocks, gently, and settles.
49 D LEILA: Dolphins.
50 D ANSELM: Sharks.
51 D LEILA: Dolphins, Anselm.
52 D ANSELM: Fine. Dolphins.
53 A ¶ Kit laughs, small, cracked.
54 A Elwood opens his eyes and looks at the sky, where a thin line of cloud has appeared in the east.

### SCENE s01162 | INT. BLACKSMITH'S SHOP - TOWN OF DRY CREEK - DAY
Detected names (may be incomplete or contain aliases): MARSHAL WEBB, LAURENT, DOC AMBROSE, SISSY
1 A ¶ A low-beamed smithy.
2 A A forge glows orange in the back; hammers and tongs hang from the wall like surgical tools.
3 A Heat shimmers off the anvil.
4 A Through the open double door, a dusty street baking in the sun, a horse tied to a rail, a church steeple, and a single wooden gallows frame at the far end of town, no rope yet.
5 A ¶ MARSHAL WEBB (50s, long duster, tarnished star, a face the color of saddle leather) sits on a barrel, loading shells into a shotgun one at a time.
6 A The metallic click is steady and unhurried.
7 A ¶ LAURENT (40s, the smith, leather apron, forearms scarred by a thousand burns) works the bellows, eyes on the coals.
8 A He hasn't spoken since the Marshal walked in.
9 A ¶ DOC AMBROSE (60s, black frock coat, round spectacles, a physician's bag) leans in the doorway, polishing his glasses on a handkerchief.
10 A ¶ SISSY (teen, calico dress, a bundle of laundry on her hip) stands behind the anvil, glancing between the men.
11 D WEBB: How long till the horses are shod?
12 D LAURENT: Three hours.
13 D WEBB: I need them in two.
14 D LAURENT: Then you need another smith.
15 A ¶ Webb clicks another shell home.
16 A Laurent pulls the bellows.
17 A Sparks dance.
18 A The heat builds.
19 D DOC AMBROSE: Gentlemen. It's a hot day.
20 D WEBB: Doc, stay out of it.
21 D DOC AMBROSE: I only observe that tempers rise with the temperature.
22 D LAURENT (to the coals): Then close the door and let him cook.
23 A ¶ Sissy shifts her bundle and takes a half-step toward the door.
24 D WEBB: Girl. Stay put.
25 D SISSY: My mother expects me.
26 D WEBB: Your mother can wait.
27 A ¶ Sissy stops.
28 A The bellows sigh.
29 A Webb finishes loading, snaps the shotgun shut, and rests it across his knees.
30 D WEBB [CONT'D]: Laurent. The Tarrant boys will be in town by sundown.
31 D LAURENT: I heard.
32 D WEBB: You were their father's friend.
33 D LAURENT: I shod their father's mule. That's not friendship.
34 D DOC AMBROSE: It is, in these parts.
35 D WEBB: They want the man we've got in the jail.
36 D LAURENT: Then give him to them.
37 D WEBB: He's a murderer.
38 D LAURENT: So are they.
39 A ¶ Webb stands.
40 A Slowly.
41 A He walks to the forge, holding the shotgun at his hip, and looks down at the coals.
42 A The orange light carves his face into hard planes.
43 D WEBB: I'm not giving anyone to anyone, Laurent. I'm asking you to put a shoe on a horse so I can ride out and meet them in daylight.
44 D LAURENT: And if you don't come back?
45 D WEBB: Then the shoe wasn't any good.
46 A ¶ Laurent lifts a glowing horseshoe from the coals with tongs.
47 A Webb doesn't flinch.
48 A The metal hisses as Laurent drops it on the anvil and raises his hammer.
49 D DOC AMBROSE (quietly): If I might suggest, Marshal, the gallows could use a rope.
50 D WEBB: I know what the gallows needs.
51 A ¶ The hammer falls.
52 A Once.
53 A Twice.
54 A Sissy flinches at the clang.
55 A Outside, a dog barks and a distant bell tolls the hour.
56 A Webb sets the shotgun down on the anvil.
57 D WEBB [CONT'D]: Laurent. After this one, shoe them all.
58 D LAURENT: I will.
59 A ¶ The hammer swings again, steady as a heartbeat, and the heat in the smithy builds and builds.

### SCENE s01935 | EXT. TOLL BRIDGE OVER A MISTY GORGE - DAWN
Detected names (may be incomplete or contain aliases): WYNDRA, SIR OSRIC, THISBE, GRIMBOLD, MARROW
1 A ¶ Ropes and rotted planks span a chasm.
2 A Mist swallows the far end.
3 A A lantern hangs from a crooked post.
4 A ¶ WYNDRA, a sorceress in grey robes, stands at the center of the bridge.
5 A Beside her, SIR OSRIC, an old knight in dented armor, leans on his sword.
6 A THISBE, a young thief with a quick grin, crouches at the rail, picking the lock of a small chest.
7 A GRIMBOLD, a squat troll in a toll collector's cap, blocks the path ahead.
8 A MARROW, a wolf the size of a pony, circles behind him.
9 D GRIMBOLD: Three coins each.
10 A ¶ She reaches into her robe.
11 A He draws his sword a hand's breadth.
12 A She smiles and produces a single silver coin, which she tosses in a high arc over the gorge.
13 A The troll watches it fall.
14 A Marrow lunges.
15 A ¶ Thisbe vaults the rail and kicks the wolf in the ribs.
16 A He yelps.
17 A The troll swings his club and the old knight blocks it with his shield.
18 A The planks groan.
19 D OSRIC: Enough! We have no quarrel!
20 D WYNDRA: Put down your weapons.
21 A ¶ She lifts one hand.
22 A The mist thickens.
23 A The club slows in midair.
24 A Marrow whimpers and sits.
25 A The troll lowers his cap over his eyes.
26 D GRIMBOLD (grumbling): Two coins, then.

### SCENE s01476 | INT. ORBITAL GREENHOUSE RING - "SOLARIUM 3" - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): IMOGEN FAIRWEATHER-OKORO
1 A ¶ A curved corridor of glass and ribbed steel, wrapped around a slow-turning station.
2 A Rows of tomato vines climb silver trellises under violet grow-lamps.
3 A Beyond the glass, Saturn's rings burn thin and gold against black.
4 A ¶ DR. IMOGEN FAIRWEATHER-OKORO (50s, close-cropped gray hair, a patched blue jumpsuit, hands stained green to the wrist) walks the rows with a tablet.
5 A She is humming.
6 A She stops at a vine and presses a ripe tomato between thumb and finger.
7 D IMOGEN: Good girl.
8 A ¶ She plucks it, bites in, closes her eyes.
9 A The station is quiet.
10 A The lamps hum on a calm note.
11 A Everything is exactly as it should be.
12 A ¶ She taps the tablet and speaks into it.
13 D IMOGEN [CONT'D]: Greenhouse log, day four hundred and twelve. Yield nominal. Humidity nominal. Crew morale...
14 A ¶ She smiles at the empty corridor.
15 D IMOGEN [CONT'D]: Nominal. Seeing as I'm the crew.
16 A ¶ A soft chime.
17 A The tablet screen flickers.
18 A A recorded voice, her own, younger, bright, comes through the speaker.
19 D IMOGEN [V.O.] (recording): Log, day one. If you're hearing this, Imogen, then the relief ship is overdue and I've been right about the schedule all along.
20 A ¶ Imogen's smile fades.
21 A She lifts the tablet and scrolls.
22 A A file she does not remember is open.
23 D IMOGEN [V.O., CONT'D] (recording): Don't go to the east vines. The ones in the corner. Don't water them. Don't touch them. They aren't ours.
24 A ¶ Imogen turns her head slowly.
25 A At the end of the ring, past the last trellis, a single vine she has never planted is climbing the glass, pulsing, in time with her breath.

### SCENE s00956 | INT. FIELD TENT, FORWARD AID STATION - NIGHT
Detected names (may be incomplete or contain aliases): MEDIC VICTORINE OKONJO-HALVORSEN, BRANDVOLD
1 A ¶ Canvas walls snap in the wind.
2 A A single hurricane lamp swings on a hook.
3 A Two empty cots.
4 A A field radio crackles beside a stack of ration tins.
5 A ¶ MEDIC VICTORINE OKONJO-HALVORSEN (30s) sits alone on the nearer cot with her sleeves rolled above the elbows.
6 A Her hands are steady.
7 A She winds a roll of gauze and does not look at the radio.
8 A ¶ It coughs.
9 D BRANDVOLD [V.O.] (over radio): Aid station four, this is Control. Report.
10 A ¶ She stares at it.
11 A She lets it ask twice.
12 D BRANDVOLD [V.O., CONT'D] (over radio): Victorine. Pick up.
13 A ¶ She lifts the handset.
14 D VICTORINE: Control, aid station four. No wounded.
15 D BRANDVOLD [V.O.] (over radio): None?
16 D VICTORINE: None left.
17 A ¶ A pause on the line.
18 A The wind pushes the canvas in and out like breathing.
19 D BRANDVOLD [V.O.] (over radio): Evacuation at oh-four-hundred. Pack what you can carry.
20 A ¶ She sets down the gauze.
21 A She does not move to pack.
22 D VICTORINE: Sergeant. Was it Anselmo?
23 D BRANDVOLD [V.O.] (over radio): Yes.
24 A ¶ She nods, to no one.
25 A She folds the blanket from the second cot into a tight square and holds it in her lap.
26 D BRANDVOLD [V.O.] (over radio): Control, out.
27 A ¶ The radio goes to static.
28 A She switches it off and sits in the lamplight, listening to the wind.

### SCENE s01415 | EXT. FROZEN WATERFALL - GORGE - DAY
Detected names (may be incomplete or contain aliases): AUGIE, DELACROIX-OWUSU, THALIA RENFREW, ZEPH, OKONJO, QUINLAN BRADSHAW-LEE
1 A ¶ A canyon of blue ice, walls streaked with silver where the water froze mid-fall.
2 A The sky is a slice of white between cliffs.
3 A Wind whistles through the cracks.
4 A ¶ Four climbers cling to the face.
5 A Ropes run taut between them.
6 A ¶ AUGUSTINE "AUGIE" DELACROIX-OWUSU, 30s, leads, swinging an ice axe in short, practiced arcs.
7 A Below him, THALIA RENFREW, 20s, belays on a narrow ledge, her hands sheathed in battered mittens.
8 A Further down, ZEPHANIAH "ZEPH" OKONJO, 40s, the guide, hangs from a screw with one arm.
9 A At the bottom, the youngest, QUINLAN BRADSHAW-LEE, 17, stands on the snow, waiting his turn.
10 D AUGIE (calling down): Ice is good!
11 D THALIA: Copy!
12 A ¶ She feeds him rope.
13 A Zeph watches the line shiver.
14 A Quinlan stamps his feet.
15 A ¶ Augie pulls over a lip and anchors himself.
16 A Looks down the face, grins.
17 D AUGIE: Zeph! Your turn!
18 A ¶ Zeph begins to climb.
19 A He moves with the slow confidence of a man who has done this ten thousand times.
20 A Axe, kick, axe, kick.
21 A ¶ Halfway up, a CRACK splits the air.
22 A ¶ All four freeze.
23 A ¶ A fissure races across the ice, a bright zigzag of white, and a slab the size of a door calves off the wall above Zeph and falls.
24 D THALIA: Zeph!
25 A ¶ He flings himself sideways.
26 A The slab clips his pack and spins him.
27 A His axe slips.
28 A He swings, catches, hangs.
29 A ¶ Augie hauls the rope in, arm over arm.
30 A Thalia braces.
31 A Quinlan scrambles up the snow slope toward the base of the wall, shouting.
32 D QUINLAN: Hold on! I'm coming!
33 D ZEPH (through his teeth): Stay down, boy!
34 A ¶ Another crack.
35 A A second slab shakes loose, then a third.
36 A The whole sheet of ice shudders, groans, and begins to peel from the cliff like old paint.
37 A ¶ Augie and Thalia lock eyes.
38 A Wordlessly, together, they haul with everything they have.
39 A Zeph kicks into the wall.
40 A His crampons bite.
41 A He lunges up and over the ledge as the ice behind him thunders into the gorge.
42 A ¶ They collapse in a heap, all three tangled in rope, breathing fast.
43 A ¶ Quinlan, at the bottom, stands in the settling snow with his hands on his head, laughing and gasping.
44 D QUINLAN: That was incredible.
45 D ZEPH: It was not.

### SCENE s00104 | INT. POTTERY KILN SHED - DUSK
Detected names (may be incomplete or contain aliases): LEILANI KAHALE, DARIUS PELLEGRINO-OKAFOR
1 A ¶ Brick walls.
2 A A squat kiln glowing orange at its seams.
3 A Shelves of unglazed bowls.
4 A Clay dust in the air like flour.
5 A ¶ LEILANI KAHALE (30s, apron, forearms grey with slip) crouches at the kiln, peering through a peephole.
6 A DARIUS PELLEGRINO-OKAFOR (30s, jacket, an umbrella he does not need) stands in the doorway holding a paper bag.
7 D LEILANI: You're letting the heat out.
8 D DARIUS: Sorry.
9 A ¶ He steps in.
10 A Closes the door.
11 D DARIUS [CONT'D]: I brought dumplings.
12 D LEILANI: I'm firing.
13 D DARIUS: I can wait.
14 D LEILANI: It's six hours.
15 D DARIUS: Then I brought a lot of dumplings.
16 A ¶ She almost smiles.
17 A Turns back to the peephole.
18 D LEILANI: Cone eight is down. Cone nine soon.
19 D DARIUS: Is that good?
20 D LEILANI: It's necessary.
21 A ¶ He sets the bag on a shelf.
22 A Wanders along the bowls, touching the rims with one finger.
23 A She watches him, in profile, across the glow of the kiln.
24 D DARIUS: These are beautiful.
25 D LEILANI: They're unfinished.
26 D DARIUS: So am I.
27 D LEILANI: That's a terrible line.
28 D DARIUS: I know. I rehearsed it.
29 A ¶ She laughs.
30 A He turns.
31 A Their eyes meet.
32 D LEILANI: I missed you. DARIUS ^I missed you.
33 A ¶ Both stop.
34 A The kiln ticks.
35 A Neither moves.
36 D LEILANI: Stay.
37 D DARIUS: For the firing?
38 D LEILANI: For the firing.
39 A ¶ He crosses the shed, sits on an upturned bucket by the kiln, and opens the bag.
40 A Steam rises, ginger and sesame.
41 A She sits beside him on the floor.
42 A He passes her a dumpling.
43 A She holds it up to the orange light.
44 D LEILANI [CONT'D]: Six hours.
45 D DARIUS: We have time.

### SCENE s01809 | INT. FEDERAL COURTHOUSE - HOLDING CORRIDOR - DAY
Detected names (may be incomplete or contain aliases): JUDGE PRUDENCE ADEKUNLE-WALSH, DEFENSE COUNSEL THEODORE MBATHA, PROSECUTOR LUCINDA FAIRCLOUGH, SEBASTIAN OKORO-LANE, DEPUTY MARCUS HOLLINGBERRY, JUROR FOREPERSON
1 A ¶ A narrow, windowless corridor behind the courtroom.
2 A Cinder block painted the color of old teeth.
3 A A bench bolted to the wall.
4 A At one end a steel door with a buzzer.
5 A At the other, a wall phone in a wire cage.
6 A ¶ JUDGE PRUDENCE ADEKUNLE-WALSH, sixties, in her robe, stands in the doorway from chambers, tapping a gavel against her palm.
7 A DEFENSE COUNSEL THEODORE MBATHA, forties, paces.
8 A PROSECUTOR LUCINDA FAIRCLOUGH, thirties, sits on the bench with her briefcase on her knees.
9 A The defendant, MR. SEBASTIAN OKORO-LANE, fifties, sits cuffed on the opposite end, rocking.
10 A The court officer, DEPUTY MARCUS HOLLINGBERRY, forties, has a hand on his radio.
11 A The wall phone rings.
12 A Everyone freezes.
13 A It rings again.
14 A Lucinda lifts her head.
15 A Theodore stops pacing.
16 A Sebastian stops rocking.
17 A Deputy Hollingberry unclips his radio and steps toward the phone.
18 D HOLLINGBERRY: Hold on.
19 A ¶ He lifts the receiver.
20 A A tinny voice crackles.
21 D JUROR FOREPERSON [V.O.] (over phone): Your Honor? We've reached a verdict. But we have a problem.
22 D HOLLINGBERRY (to the group): It's the jury. They've got a verdict.
23 D JUDGE ADEKUNLE-WALSH (to the deputy): What problem?
24 D HOLLINGBERRY (into phone): What problem?
25 D JUROR FOREPERSON [V.O.] (over phone): One of us is missing. Number nine. He went to the restroom forty minutes ago.
26 A ¶ The group erupts at once.
27 A Theodore swears.
28 A Lucinda stands, her briefcase sliding off her knees.
29 A The judge, unmoving, closes her eyes.
30 A Sebastian slumps to the floor and mutters at the tile.
31 D SEBASTIAN (to himself): They lost a juror. They lost a juror.
32 D THEODORE (to the judge): Your Honor, I move for a mistrial.
33 D LUCINDA (to the judge): Your Honor, the state opposes. An alternate can be seated.
34 D JUDGE ADEKUNLE-WALSH (to everyone): Quiet. All of you. Quiet.
35 A ¶ The corridor falls silent.
36 A The judge walks the length of it, robe swishing, and takes the phone out of the deputy's hand.
37 A She listens for a moment.
38 D JUDGE ADEKUNLE-WALSH [CONT'D] (into phone): Madam Foreperson, did anyone knock on the restroom door?
39 D JUROR FOREPERSON [V.O.] (over phone): Yes, Your Honor.
40 D JUDGE ADEKUNLE-WALSH (into phone): And?
41 D JUROR FOREPERSON [V.O.] (over phone): He knocked back.
42 A ¶ The judge hangs up.
43 A She hands the receiver to Hollingberry, turns to the corridor, and raises her gavel.
44 A Then she lowers it and, quietly, to nobody, says:
45 D JUDGE ADEKUNLE-WALSH [CONT'D] (muttering): Thirty years on the bench.

### SCENE s01851 | INT. NIGHT TRAIN DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): POLLY, SCHRADER, MISS VERONIKA HAAS, KAZ, BLUME
1 A ¶ A narrow dining car, white tablecloths, brass lamps.
2 A The rails clack beneath.
3 A Outside the window, the dark country streams by.
4 A ¶ CAPTAIN LEOPOLD "POLLY" SCHRADER, 50s, stout, a retired customs officer in a three-piece suit, cuts into a steak with ceremony.
5 A Across from him, MISS VERONIKA HAAS, 30s, silver cigarette holder, sips from a thin glass and watches him over the rim.
6 A At the next table, alone, sits their waiter-turned-witness, KAZIMIR "KAZ" BLUME, 20s, in a white jacket, polishing the same spoon for the fourth time.
7 D POLLY: You don't eat, Miss Haas.
8 D VERONIKA: I never do at night.
9 D POLLY: A woman who doesn't eat at night is a woman with something on her mind.
10 D VERONIKA: Or on her conscience.
11 A ¶ The train lurches.
12 A Her glass slides an inch.
13 A Polly catches it before it falls, and holds it a moment too long in his hand.
14 D POLLY: Careful.
15 D VERONIKA: Thank you, Captain.
16 D KAZ (from the next table): Sir, if I may. The steak. Is it satisfactory?
17 D POLLY: Kaz, my boy, the steak is excellent.
18 D KAZ: I'm glad, sir. I prepared it myself.
19 A ¶ Polly's knife stops.
20 D POLLY: Did you.
21 D KAZ: It was the last of the lot. The cook was indisposed.
22 A ¶ Veronika sets her glass down very softly.
23 A The lamps shake.
24 A The knife rests on the plate.
25 A Polly dabs his lips with a napkin, rises to his full, unsteady height, and clutches the table.
26 D POLLY [CONT'D]: Veronika. I feel--
27 A ¶ She is already on her feet.
28 A She catches his arm as he buckles, easing him into the chair.
29 A Kaz has put down the spoon.
30 D VERONIKA: Kaz. The window.
31 D KAZ: Yes, miss.
32 A ¶ He slides the sash up.
33 A Night air floods the car.
34 A Polly breathes, hard, his eyes on her.
35 D POLLY (whispering): Veronika. The steak.
36 D VERONIKA: I know, Polly.
37 D POLLY: You?
38 D VERONIKA: Not me, darling.
39 A ¶ She turns, slowly, to Kaz, who stands in the open window with the spoon in his hand and a different expression than before.
40 D KAZ (quietly): Miss Haas. You weren't meant to be at this table.

### SCENE s00439 | EXT. HIGH DESERT WINDMILL - DAY
Detected names (may be incomplete or contain aliases): EZRA, HATTIE, TOM
1 A ¶ A creaking windmill over a stock tank.
2 A Three riders sit their horses in the shade.
3 D EZRA: Water's low.
4 D HATTIE: Water's always low.
5 D EZRA: Then why're we out here?
6 D HATTIE: Because Tom says the old man buried something under this mill.
7 D TOM: I never said that.
8 D HATTIE: You said it Tuesday.
9 D TOM: I said somebody told me a man told me.
10 D EZRA: That's three hands removed from nothing.
11 D HATTIE: Dig.
12 D TOM: With what?
13 D HATTIE: Your spurs.
14 D EZRA: Hattie, I'm too old to dig.
15 D HATTIE: Then watch Tom.
16 D TOM: I'm not digging, either.
17 D EZRA: Well, somebody better.
18 A ¶ A long wind moves through the blades.
19 A The mill creaks.
20 A The three sit and look at one another.

### SCENE s00264 | INT. PARKED CAR, PARKING GARAGE LEVEL P3 - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE CASSIUS ONWUDIWE-HARLOW, DISPATCH
1 A ¶ Concrete.
2 A Sodium light.
3 A A car idling, engine just above a whisper.
4 A ¶ DETECTIVE CASSIUS ONWUDIWE-HARLOW (50s, stained trench, thermos in the cupholder) sits behind the wheel.
5 A Alone.
6 A ¶ He watches an elevator door.
7 A It does not open.
8 A ¶ He turns off the engine.
9 A Silence.
10 A A drip somewhere.
11 A ¶ He picks up a cell phone.
12 A Dials.
13 A Puts it to his ear.
14 D DISPATCH [V.O.]: Dispatch.
15 D CASSIUS: Cassius Harlow. Badge two-one-four. I'm on P3 at the Meridian.
16 D DISPATCH [V.O.]: Copy, Detective. Status?
17 D CASSIUS: Stakeout. Nothing yet.
18 D DISPATCH [V.O.]: Need backup?
19 D CASSIUS: No.
20 D DISPATCH [V.O.]: Detective, it's two a.m.
21 D CASSIUS: I know what time it is.
22 D DISPATCH [V.O.]: You've been there six hours.
23 D CASSIUS: Seven.
24 A ¶ He sets the phone on the dash.
25 A Opens the thermos.
26 A Pours coffee into the cap.
27 A Sips.
28 A Winces.
29 D CASSIUS [CONT'D] (to himself): Cold.
30 A ¶ He watches the elevator again.
31 A A light above the door blinks: 3.
32 A Then dims.
33 D CASSIUS [CONT'D] (whispering): Come on. Come on, you son of a--
34 A ¶ The elevator dings.
35 A The door slides open.
36 A Empty.
37 A ¶ He sits very still.
38 A Then slowly lets out a breath.
39 A Closes his eyes.
40 D CASSIUS [CONT'D] (to himself): Not tonight.
41 A ¶ The phone buzzes on the dash.
42 A He picks it up.
43 D DISPATCH [V.O.]: Detective, the subject has been detained at the airport. You're clear to stand down.
44 D CASSIUS: Airport.
45 D DISPATCH [V.O.]: He never came to the Meridian.
46 D CASSIUS: Of course he didn't.
47 D DISPATCH [V.O.]: Go home, Cassius.
48 D CASSIUS: Copy.
49 A ¶ He ends the call.
50 A Puts the thermos back in the cupholder.
51 A Starts the engine.
52 D CASSIUS [CONT'D] (to the rearview): Seven hours.
53 A ¶ He backs out slowly.
54 A The elevator door slides shut behind him on its own.

### SCENE s00556 | INT. THE GILDED MIC KARAOKE BAR - TUESDAY NIGHT
Detected names (may be incomplete or contain aliases): JOSEFINA OLIVEIRA, DARREN FITZWILLIAM, MEI-LING CHOW, CHUKS, EZEKWESILI, ANDRE BEAUCHAMP, BETTINA KOWALSKI, DJ
1 A ¶ Sticky booths.
2 A A disco ball missing half its mirrors.
3 A A screen the size of a billboard scrolls lyrics in karaoke-blue.
4 A Six strangers share one corner table, an enormous plate of fries between them.
5 A ¶ JOSEFINA OLIVEIRA, 30s, a leather jacket and a cautious smile, clutches a song binder.
6 A DARREN FITZWILLIAM, 30s, a shirt with too many buttons undone, leans back, king of the booth.
7 A MEI-LING CHOW, 20s, cat-eye glasses, sips a mocktail, eyes darting.
8 A CHUKWUEMEKA "CHUKS" EZEKWESILI, 30s, in a bright print shirt, drums the table with his thumbs.
9 A ANDRE BEAUCHAMP, 40s, quiet, nursing a ginger ale.
10 A BETTINA KOWALSKI, 50s, a sequined cardigan, waves her arm at the DJ.
11 D BETTINA (to the table): All right, kids. Who's going first?
12 D DARREN: Ladies first.
13 D JOSEFINA: That's sexist.
14 D DARREN: It's chivalrous.
15 D MEI-LING (muttering): It's a trap.
16 D CHUKS: I'll go.
17 D ANDRE: Chuks, you've been dying to go since we sat down.
18 D CHUKS: Because I have a gift, Andre. A gift.
19 D BETTINA: Do you have a number?
20 D CHUKS: Eleven. "Dancing Queen."
21 D DARREN: Abba. Brave.
22 D JOSEFINA: He'll destroy it.
23 D CHUKS: I'll honor it.
24 A ¶ He bounds to the stage.
25 A The screen lights.
26 A A familiar piano riff.
27 A He grips the mic like a torch.
28 A Sings the first line, loud, glorious, a note short of flat.
29 A The table roars.
30 D BETTINA: Go on, baby!
31 D MEI-LING (softly): Oh, he's actually good.
32 D JOSEFINA: He's terrible.
33 D MEI-LING: He's terrible and good.
34 D DARREN (leaning toward Josefina): You should do one next.
35 D JOSEFINA: I don't sing.
36 D DARREN: Everyone sings.
37 D JOSEFINA: I sing in the shower.
38 D DARREN: Well, there's no shower here.
39 D JOSEFINA (dry): Thank God.
40 D ANDRE (to Mei-Ling, quietly): Do you want to go?
41 D MEI-LING: I'd rather die.
42 D ANDRE: I'll go with you.
43 A ¶ She stares at him.
44 A A small, astonished smile.
45 D MEI-LING: You would?
46 D ANDRE: Duet. Whatever you pick.
47 D MEI-LING: ...Something slow.
48 D ANDRE: Slow's good.
49 D BETTINA (to the whole table): Look at this! Two matches and a marching band!
50 D DARREN (under his breath): Bettina, you're a menace.
51 D BETTINA: That's the nicest thing you've said all night, Darren.
52 A ¶ On stage, Chuks hits the chorus.
53 A The whole bar sings along, shouting, tipsy, joyous.
54 A Josefina, in spite of herself, mouths the words.
55 A Darren sees.
56 A He grins.
57 A She catches him and glares, then laughs.

### SCENE s00299 | INT. TRAFFIC COURT - HEARING ROOM 4 - DAY
Detected names (may be incomplete or contain aliases): JUDGE PERPETUA OSEI-LANGSTROM, BART, KENYATTA-VOSS, PROSECUTOR ILSE NAKAGAWA-OYELOWO
1 A ¶ Fluorescent glare.
2 A Beige carpet.
3 A A flag leaning slightly.
4 A A bailiff's chair, empty.
5 A ¶ JUDGE PERPETUA OSEI-LANGSTROM (60s, robe over a cardigan, reading glasses on a chain) peers down at a file.
6 A At the defendant's table, BARTHOLOMEW "BART" KENYATTA-VOSS (40s, wrinkled blazer, a cardboard tube under his arm) stands very straight.
7 A Across the aisle, PROSECUTOR ILSE NAKAGAWA-OYELOWO (30s, immaculate, a binder as thick as a phone book) leafs through exhibits.
8 D BART: Your Honor, I'd like to submit the exhibit.
9 D JUDGE PERPETUA: What exhibit, Mr. Kenyatta-Voss?
10 A ¶ Bart pulls the cardboard tube open.
11 A Out slides a rolled-up poster, which unfurls across the table in a slow, majestic curl: a hand-drawn map of an intersection, annotated in four colors of marker, with arrows, sunbeams, and a smiling cartoon sedan.
12 A Ilse gapes.
13 A Judge Perpetua removes her glasses, polishes them, puts them back on.
14 A Bart steps forward to flatten a corner, knocking Ilse's binder to the floor.
15 A She kneels to gather it, he kneels to help, their heads nearly collide, and the poster slides off the table and onto Judge Perpetua's bench, where it covers her gavel.
16 D ILSE: Objection.
17 D JUDGE PERPETUA: On what grounds?
18 D ILSE: The sedan has a face.
19 D JUDGE PERPETUA: Overruled. Mr. Kenyatta-Voss, proceed.
20 D BART: Your Honor, as the map shows, the stop sign was obscured by a sycamore.
21 D ILSE: It was obscured by a sycamore he planted.
22 D BART: Prove it.
23 D ILSE: I have the permit.
24 A ¶ She holds up a stapled paper.
25 A Bart looks at it.
26 A Looks at the poster.
27 A Looks at the cartoon sedan, which smiles back.
28 D BART (quietly): I'll pay the fine.
29 D JUDGE PERPETUA: Forty dollars, payable at the window.
30 A ¶ She raps the gavel through the poster.
31 A It makes a small soft tearing sound.

### SCENE s00606 | INT. FUNERAL HOME - FAMILY ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): DOLLY SUTHERLAND, RAY-RAY SUTHERLAND, UNCLE WENDELL, AUNT PRISCILLA, CAROL BENNING
1 A ¶ Sour coffee.
2 A A sheet cake with a cut missing.
3 A Folding chairs facing a closed door.
4 A ¶ DOLLY SUTHERLAND, 50s, pulls tissues from a box.
5 A RAY-RAY SUTHERLAND, 20s, tugs at a tie.
6 A UNCLE WENDELL, 70s, in a brown suit, pours coffee into a paper cup.
7 A AUNT PRISCILLA, 60s, in a lavender dress, adjusts a hat.
8 A CAROL BENNING, 40s, the neighbor, holds a covered dish.
9 D DOLLY: She wanted the blue one.
10 D PRISCILLA: She did not. She wanted the green.
11 D RAY-RAY: Aunt Dolly said blue.
12 D WENDELL: Blue is for babies.
13 D PRISCILLA: Wendell, hush.
14 D CAROL: I brought the casserole.
15 D DOLLY: Carol, you shouldn't have.
16 D CAROL: It's tuna.
17 D WENDELL: Lord.
18 D RAY-RAY: Does anyone know where she put the will?
19 D PRISCILLA: Ray-Ray!
20 D DOLLY: Not here.
21 D RAY-RAY: Then where?
22 D WENDELL: Not today, son.
23 D CAROL: I'll just put this in the kitchen.
24 D DOLLY: She was my mother, Priscilla.
25 D PRISCILLA: She was my sister.
26 D DOLLY: She was my mother first.
27 D PRISCILLA: She was my sister longer.
28 A ¶ They both stop.
29 A Their eyes meet.
30 A Dolly looks away first.
31 A Priscilla straightens her hat.
32 D PRISCILLA [CONT'D]: The green one, then.
33 D DOLLY: The green.

### SCENE s00620 | INT. DECOMMISSIONED LIGHTHOUSE - "INNOVATION LANTERN" OPEN-PLAN FLOOR - MORNING
Detected names (may be incomplete or contain aliases): DELPHINE OKONKWO-REYES, VERB, BARN, TULLY, YUKI HASEGAWA, OZZIE, PRIETO, MAEVE KILLORAN
1 A ¶ Salt has crept into every corner of the converted tower, and the beanbags have gone faintly green with it.
2 A Five desks spiral up the inner wall like the thread of a screw, each one lit by a bulb that flickers whenever the old beam mechanism groans overhead.
3 A ¶ DELPHINE OKONKWO-REYES, fifties, a woman who laminates her own compliments, stands at a whiteboard that reads SYNERGY IS A VERB in three different colors of marker.
4 A ¶ BARNABY "BARN" TULLY, thirties, a sales lead in a vest too clean for the sea air, sits cross-legged on a beanbag, tapping a stylus against his teeth.
5 A ¶ YUKI HASEGAWA, late twenties, the only one with a real coffee, watches the whiteboard the way one watches a slow leak.
6 A ¶ OSWALDO "OZZIE" PRIETO, sixties, the building's last maintenance man, oils a hinge nobody asked him to oil.
7 A ¶ MAEVE KILLORAN, forties, finance, holds a printout against her chest like a shield.
8 D DELPHINE: Team. Team! Gather. Today we pivot from silos to... lighthouses.
9 D BARN: Del, we are in a lighthouse.
10 D DELPHINE: Which is why it's authentic, Barn.
11 A ¶ Yuki sets her cup down very gently.
12 D YUKI: Delphine, the quarterly lease line is eleven percent of --
13 D MAEVE: Forty. It's forty percent, Yuki, I told you it was forty --
14 D OZZIE: Beam's been out since March, you know.
15 D DELPHINE: Ozzie, bless you, we're not discussing the beam --
16 D BARN: Maeve, hang on, if it's forty then the pivot deck is wrong --
17 D MAEVE: The pivot deck is a hostage note, Barn!
18 D YUKI: Ozzie, is the lower stairwell flooding or not?
19 D OZZIE: Little bit.
20 D DELPHINE (brightly): We call that "organic flow," Yuki.
21 A ¶ Maeve slaps the printout onto the nearest desk.
22 A The stylus stops mid-tap.
23 D MAEVE: Eleven months of "organic flow." Eleven months of kombucha on tap and not one invoice paid on time.
24 D BARN: That's not on me, Maeve, I closed Halloran --
25 D YUKI: You closed Halloran with a refund clause --
26 D DELPHINE: Everybody, breathe. Ozzie, tell them it's fine.
27 A ¶ Ozzie wipes his hands on a rag, slowly, and looks up the long spiral of desks to the dead lamp.
28 D OZZIE: Del. Honest answer? The tower's got a lean.
29 A ¶ Silence.
30 A Then the whiteboard slides an inch down the wall and the marker tray clatters to the floor.
31 D DELPHINE (very quietly): Nobody leaves until we align.
32 A ¶ Maeve sweeps the printout off the desk and rips it in two, then in four.
33 A Barn is on his feet.
34 A Yuki is already pulling on her coat.
35 D MAEVE: Align this, Del.
36 A ¶ She throws the pieces.
37 A They flutter down the stairwell like snow.

### SCENE s01659 | INT. MARBLE FUNERAL PARLOR - DAY
Detected names (may be incomplete or contain aliases): UNCLE BASIL, TESS, MONTY, ZELDA
1 A ¶ Soft carpet.
2 A A hush.
3 A Wreaths of white lilies on stands.
4 A At the front, a closed mahogany coffin.
5 A ¶ UNCLE BASIL, 60s, in a black suit, greets guests at the door.
6 A TESS, 30s, in a black dress and sunglasses, shakes his hand.
7 A MONTY, 40s, in a rumpled black suit, follows her in.
8 A ZELDA, 50s, in a veiled hat, sits in the front row, hands folded.
9 D UNCLE BASIL: Thank you for coming. Thank you.
10 D TESS: So sorry for your loss.
11 D UNCLE BASIL: Thank you, dear.
12 D TESS (low): He's in position.
13 D UNCLE BASIL (low): Who?
14 D TESS: Uncle Basil.
15 D UNCLE BASIL: That's me, dear.
16 D TESS: I know.
17 D MONTY (hushed): Tess, what are you doing?
18 D TESS: Quiet, Monty.
19 A ¶ They walk down the aisle.
20 A Zelda turns her veiled head.
21 D ZELDA (whispering): Tess. Monty. Sit.
22 A ¶ They sit.
23 A Zelda leans in.
24 D ZELDA [CONT'D] (to Monty): Is everything in place?
25 D MONTY: Everything's in place.
26 D ZELDA (to Tess): And the vault?
27 D TESS: Monty has the vault.
28 D MONTY: I have the vault.
29 D ZELDA: Good. When the organ starts, you move.
30 D TESS: And Uncle Basil?
31 D ZELDA: Basil is the one who's dead.
32 A ¶ Tess blinks.
33 A Monty chokes.
34 D MONTY: Uncle Basil is at the door.
35 D ZELDA: That is Basil's twin. Basilius. They've been swapping for decades.
36 D TESS: Then who's in the coffin?
37 D ZELDA: The plan.
38 A ¶ The organ begins.
39 A A slow, mournful hymn.
40 A Everyone in the room stands.
41 A Zelda lifts her veil, revealing a very small smile.
42 D ZELDA [CONT'D] (whispering): Now.
43 A ¶ The coffin lid opens by itself.

### SCENE s01859 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): LUCY, TEO REYES
1 A ¶ Twenty-four-hour laundromat on a dead corner.
2 A Fluorescent tubes buzz.
3 A Rows of dryers tumble in the dark.
4 A A row of orange plastic chairs faces a window onto the empty street.
5 A ¶ LUCINDA "LUCY" REYES, 30s, scrubs under a coat, sits slumped in the nearest chair watching a dryer turn.
6 A Beside her, her younger brother TEO REYES, 22, thin, new haircut, holds a plastic basket of folded shirts on his lap like a shield.
7 A At the change machine, feeding quarters one at a time, stands their mother ADELA REYES, 60s, in a church dress and sneakers.
8 A ¶ The coins ring in the dispenser.
9 D ADELA: Teo. Come help me.
10 D TEO: I'm busy.
11 D ADELA: With what?
12 D TEO: Sitting.
13 D LUCY: He's being a man.
14 D TEO: Lucy.
15 D LUCY: Sorry. Being a grown-up.
16 A ¶ Adela collects the quarters in her cupped hands and carries them over.
17 D ADELA: Two loads. Forty minutes.
18 D LUCY: Mom, it's midnight.
19 D ADELA: So? We have forty minutes.
20 A ¶ She sits between them.
21 A She sets the quarters on her knee and counts them.
22 A Teo sets down the basket.
23 A Lucy tilts her head back against the wall.
24 D TEO: I got the job.
25 A ¶ Adela's fingers stop.
26 D LUCY: What job?
27 D TEO: The one in Tucson.
28 D LUCY (sitting up): Tucson?
29 D TEO: I leave Friday.
30 A ¶ Silence.
31 A The dryers hum.
32 A Adela resumes counting.
33 D ADELA: That's good.
34 D TEO: You're not mad?
35 D ADELA: Why would I be?
36 D TEO: Because you said--
37 D ADELA: I said a lot of things.
38 D LUCY: Teo, Mom's crying.
39 D ADELA: I'm not crying.
40 D LUCY: You are.
41 D ADELA: It's the lint.
42 A ¶ Teo takes the quarters from his mother's knee and puts them in her palm, and she closes her fingers around his hand.

### SCENE s01943 | INT. LUNAR LAVA TUBE - GREENHOUSE - ARTIFICIAL DAY
Detected names (may be incomplete or contain aliases): PALOMA REYNOSO, THE VISITOR, ORIN
1 A ¶ A cathedral of black basalt, strung with grow-lamps.
2 A Rows of tomatoes and soybeans climb trellises under a violet glow.
3 A Condensation drips from a vaulted ceiling.
4 A ¶ DR. PALOMA REYNOSO, 40s, in a canvas apron over a thermal suit, prunes a tomato vine with delicate care.
5 A Behind her, an airlock hisses.
6 A ¶ A figure in a worn pressure suit steps through, visor fogged.
7 A It stops three paces inside and stands very still, as if afraid to wake the plants.
8 D PALOMA: You're not on the roster.
9 D THE VISITOR: No. I came on the supply drone.
10 D PALOMA: The drone carries cargo.
11 D THE VISITOR: I was cargo.
12 A ¶ Paloma sets down her shears.
13 A She approaches, slowly, until she can see through the visor to the face behind it: gaunt, unshaven, eyes red.
14 D PALOMA: Take off your helmet.
15 D THE VISITOR: I'd rather not.
16 D PALOMA: Then you can't stay.
17 A ¶ He lifts his hands to the seals.
18 A The helmet rotates with a hiss.
19 A He draws a breath of the humid air and closes his eyes.
20 A The scent of tomatoes fills the cave.
21 D PALOMA [CONT'D]: Who are you?
22 D THE VISITOR: Orin Feld. Systems tech, Tycho Base. I left four years ago.
23 A ¶ Paloma staggers back against a trellis.
24 A The tomatoes sway.
25 D PALOMA: Orin Feld died on the surface. We held a service.
26 D ORIN: I know. I was there. In the back.
27 D PALOMA: You were dead.
28 D ORIN: For a while. It was easier.
29 A ¶ Paloma slaps him.
30 A The crack echoes off the basalt.
31 A Orin does not lift a hand.
32 A He just stands, helmet under one arm, cheek reddening.
33 D PALOMA: Four years. Four years, Orin.
34 D ORIN: Paloma--
35 D PALOMA: Dr. Reynoso, to you.
36 A ¶ She turns away, shoulders shaking, and presses her palm to a vine.
37 A A tomato drops into her hand.
38 A She stares at it.
39 D ORIN: It's the first one, isn't it?
40 D PALOMA: The first red one. Yes.
41 D ORIN: Eat it.
42 A ¶ She does not move.
43 A He steps forward, takes it gently from her fingers, and bites into it.
44 A Juice runs down his chin.
45 A He laughs.
46 A He is crying.
47 D ORIN [CONT'D]: God. I forgot.
48 A ¶ Paloma looks at him.
49 A Slowly, she smiles, and reaches for another.

### SCENE s00549 | INT. LUNAR RADIO OBSERVATORY - CONTROL ROOM - DAY
Detected names (may be incomplete or contain aliases): COMMANDER NATHANIEL ASHBY, PRIYAMVADA LUTHRA, PETROVSKY, MISS ELLINGTON, TECH DOYLE
1 A ¶ A cramped steel room lit by banks of green screens.
2 A Out the porthole, a grey plain of regolith and a dish the size of a stadium tilting toward the stars.
3 A The air tastes of recycled coffee.
4 A ¶ COMMANDER NATHANIEL ASHBY, 50s, a command jacket and a weary jaw, sits in the center seat.
5 A DR. PRIYAMVADA LUTHRA, 40s, in a lab coat, stands at the main console.
6 A MR. PETROVSKY, 60s, the old engineer, eats from a tube.
7 A MISS ELLINGTON, 30s, a communications officer with a headset.
8 A TECH DOYLE, 20s, a freckled intern, hugs a clipboard.
9 D ASHBY: Dr. Luthra. Report.
10 D LUTHRA: Three signals. Same source. Same frequency. Same pattern every eleven minutes.
11 D ELLINGTON: It repeats exactly.
12 D PETROVSKY: No natural source repeats exactly.
13 D DOYLE: Could it be a pulsar?
14 D LUTHRA: Pulsars drift. This doesn't.
15 D ASHBY: Origin?
16 D LUTHRA: Sagittarius. Forty light years.
17 D PETROVSKY: So whoever sent it, sent it forty years ago.
18 D ELLINGTON: Or they're still sending.
19 D DOYLE: Does it say anything?
20 D LUTHRA: It's a prime sequence. Two, three, five, seven, eleven. Then a gap. Then --
21 D ASHBY: Then?
22 D LUTHRA: Then our own coordinates.
23 A ¶ Silence.
24 A The dish groans outside, a long metallic sound.
25 D PETROVSKY: Our coordinates. The Moon's.
26 D LUTHRA: The Moon's. Down to the meter.
27 D ELLINGTON: Somebody knows we're here.
28 D DOYLE: Or somebody always did.
29 A ¶ Ashby stands.
30 A Looks at the screens.
31 A Looks at the porthole.
32 A The dish turns another degree.
33 D ASHBY: Send nothing. Log everything. Nobody leaves this room.

### SCENE s00090 | INT. COUNTY HOSPITAL - POLIO WARD - NIGHT
Detected names (may be incomplete or contain aliases): ALISTAIR VANCE-HOLLOWAY, NURSE BERNADETTE OKONJO, THEODORA LINDQUIST, CASPER WU, CHAPLAIN AUGUSTUS DELACROIX-BENNETT
1 A ¶ Iron lungs line the room like a row of steel whales.
2 A Green light.
3 A A ceiling fan turns slowly.
4 A A radio murmurs a dance tune from a distant city.
5 A ¶ DR. ALISTAIR VANCE-HOLLOWAY (50s, tall, courteous, bow tie loosened) pauses at the foot of a bed with a chart.
6 A NURSE BERNADETTE OKONJO (40s, starched cap, quick hands) adjusts a dial on the nearest machine.
7 A MRS. THEODORA LINDQUIST (60s, wool coat, handbag in both hands) sits very straight on a visitor's chair.
8 A CASPER WU (20s, medical student, borrowed white coat) stands by the door, taking notes.
9 A CHAPLAIN AUGUSTUS DELACROIX-BENNETT (70s, soft voice, stole around his neck) kneels in prayer at a bedside.
10 A ¶ He reads the chart a long time.
11 A Mrs. Lindquist watches him.
12 A Nurse Okonjo does not.
13 D MRS. LINDQUIST: He seems comfortable.
14 D DR. VANCE-HOLLOWAY: He is resting.
15 D MRS. LINDQUIST: That is not the same thing.
16 D DR. VANCE-HOLLOWAY: No. It is not.
17 A ¶ She nods, grateful for the honesty.
18 A He closes the chart.
19 D CASPER (low): Doctor, the pressure reading on bed six--
20 D DR. VANCE-HOLLOWAY: Later, Mr. Wu.
21 D CASPER: Yes, sir.
22 A ¶ Okonjo crosses to the window.
23 A The blinds are drawn.
24 A She tugs a cord and the slats rise.
25 A Moonlight spills onto the machine, silvering the boy inside, who sleeps with his mouth a little open.
26 D NURSE OKONJO: His color is better.
27 D MRS. LINDQUIST: Is it?
28 D NURSE OKONJO: Pink in the cheeks.
29 A ¶ Dr. Vance-Holloway steps closer.
30 A He lifts the boy's wrist.
31 A A long moment.
32 D DR. VANCE-HOLLOWAY: Nurse. The oxygen.
33 D NURSE OKONJO: Already, Doctor.
34 A ¶ She is turning a valve.
35 A He does not say what she did, and she does not say what she saw.
36 A Casper looks from one to the other, understanding nothing, then too much.
37 D CASPER: Doctor?
38 D DR. VANCE-HOLLOWAY: Fetch the Chaplain.
39 D CASPER: He's here.
40 D DR. VANCE-HOLLOWAY: Then bring him.
41 A ¶ Casper crosses the room.
42 A The Chaplain looks up from his prayer before he arrives.
43 D CHAPLAIN DELACROIX-BENNETT: I know.
44 A ¶ He rises, creaking, and takes Mrs. Lindquist's hand.
45 A She stares at it without understanding.
46 A Then the radio gives a bright trumpet note, and Mrs. Lindquist rises, breath catching, and lets the handbag fall.
47 D MRS. LINDQUIST: No.
48 D DR. VANCE-HOLLOWAY: Mrs. Lindquist.
49 D MRS. LINDQUIST: He was pink. She said he was pink.
50 D NURSE OKONJO (quietly): He was, ma'am.
51 A ¶ Mrs. Lindquist crosses to the bed.
52 A Puts a hand on the cold steel.
53 A The machine wheezes its steady wheeze, pushing air into a chest that no longer asks.
54 D DR. VANCE-HOLLOWAY: I am so sorry.
55 A ¶ She does not turn.
56 A Nobody speaks.
57 A In the corner, the radio plays on, a waltz, cheerful and absurd.
58 A Nurse Okonjo crosses and switches it off, and the silence that follows is the loudest thing in the ward.

### SCENE s00546 | INT. NORTHERN LIGHTS CURLING CLUB - SHEET THREE - NIGHT
Detected names (may be incomplete or contain aliases): SKIP BRITTA LINDGREN-KOWALSKI, MURDOCH FINLAY, YUKI TANAKA-REID, TERRENCE ODUMODU, OLUWASEUN ADEBAYO
1 A ¶ Pebbled ice, white and hard under flat lights.
2 A Red and yellow rings painted beneath the surface.
3 A A scoreboard ticks.
4 A The crowd, forty fans in parkas, hushes.
5 A ¶ SKIP BRITTA LINDGREN-KOWALSKI, 40s, a wool toque and a steady squint, crouches in the house with her broom held like a rudder.
6 A At the hack, MURDOCH FINLAY, 50s, her veteran lead, gathers a stone.
7 A At the sideline, YUKI TANAKA-REID, 20s, the youngest on the team, grips a broom and bites her lip.
8 A TERRENCE ODUMODU, 30s, the vice-skip, in a quilted vest, watches the scoreboard like a hawk.
9 D BRITTA: Hurry hard!
10 A ¶ Murdoch releases.
11 A The stone glides.
12 A The broom crew sprints alongside it.
13 D YUKI: Hard! Hard!
14 D TERRENCE: Hard!
15 D BRITTA: HARD!
16 A ¶ The stone slides, hovers at the edge of the button.
17 A Nothing moves.
18 A Forty parkas hold their breath.
19 A ¶ Then it curls.
20 A A gentle arc.
21 A A sliver of daylight.
22 A It nudges the opponent's stone aside and settles dead center.
23 A ¶ The crowd explodes.
24 A Yuki jumps and flings her broom in the air.
25 A Terrence hugs Murdoch so hard he lifts him.
26 A Britta stays crouched, forehead on her broom handle, shaking.
27 A ¶ A woman in an official's jacket strides across the ice, clipboard in hand.
28 A ¶ OLUWASEUN ADEBAYO, 50s, the head official, wears a tight bun and a sour look.
29 A She inspects the stone with a tape measure.
30 D OLUWASEUN: Measure's confirmed. Team Lindgren takes the end.
31 A ¶ Britta looks up.
32 A Eyes wide.
33 D BRITTA: We won?
34 D OLUWASEUN: You won the end. The match is Thursday.
35 A ¶ Britta laughs, helpless.
36 A The crowd roars again.
37 D TERRENCE (to Yuki): Was that real?
38 D YUKI (breathless): I think so.

### SCENE s01783 | INT. NORTH STAR ROLLER RINK - DJ BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): INEZ CASTELLANOS-WHITE, RECORD
1 A ¶ A glass cubicle above an empty rink.
2 A A mirror ball turns, throwing flecks of light.
3 A Pink neon buzzes.
4 A The floor below is bare maple, still scuffed from the evening's skaters.
5 A ¶ INEZ CASTELLANOS-WHITE, sixteen, in a rental-skate shirt with her name sewn on the pocket, sits alone at the turntables.
6 A She wears headphones around her neck.
7 A A cassette recorder sits beside a cardboard box of tapes.
8 A ¶ She presses PLAY.
9 A A hiss of tape.
10 D INEZ [V.O.] (recorded, younger): Okay, is it recording? It's recording. This is the first mix tape of Inez Castellanos-White, age twelve. Do not tell my brother.
11 A ¶ She freezes the tape with a click.
12 A Pushes her chair back.
13 A Stares down at the empty rink.
14 A ¶ She laughs, short, and rubs her eyes with the heel of her hand.
15 D INEZ: Twelve.
16 A ¶ She presses PLAY again.
17 D INEZ [V.O.] (recorded): I'm going to be a DJ. I'm going to be the best one in the whole state, and when I'm famous I'm going to buy this rink and nobody will ever skate backward again.
18 A ¶ A hiccup of tape.
19 A A pause.
20 A A younger giggle.
21 D INEZ [V.O., CONT'D] (recorded): Okay, here's my favorite song. I made the transition myself.
22 A ¶ A scratchy needle drop.
23 A A bright pop song swells over the tape hiss.
24 A Inez listens.
25 A Her foot starts to tap.
26 A ¶ She stops it.
27 A Rewinds.
28 A Plays again.
29 A Stops.
30 A She picks up the tape and turns it over in her fingers.
31 D INEZ [CONT'D] (to the tape): You were so bad.
32 A ¶ She goes to the turntables and pulls a record from its sleeve.
33 A She sets it on the platter.
34 A Lowers the needle.
35 A The same bright pop song, clean and loud, fills the empty rink.
36 A ¶ She lifts the second turntable's arm and brings it down at a point she knows by heart.
37 A The song doubles, then slides into the next, a seam so smooth it is nearly invisible.
38 A ¶ She watches the empty floor.
39 A Her shoulders loosen.
40 D INEZ [CONT'D] (softly): There.
41 A ¶ She picks up the cassette recorder, presses RECORD, and holds the microphone close to her mouth.
42 D INEZ [V.O., CONT'D] (recorded): Okay. This is the second mix tape of Inez Castellanos-White, age sixteen. It's recording.
43 A ¶ She laughs.
44 A She lets the music run under it.
45 D INEZ [V.O., CONT'D] (recorded): Do not tell my brother.
46 A ¶ The mirror ball turns.
47 A Light slides across the floor, across her face, across the boxes of tapes.
48 A On the maple below, for a moment, it looks as though someone is skating.
49 A ¶ Inez ejects the cassette, writes on its label with a marker, and puts it in her pocket.
50 A ¶ She turns off the neon.
51 A The booth goes dark except for the mirror ball's last slow spin.
