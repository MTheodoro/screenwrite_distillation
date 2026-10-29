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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00043.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00545 | INT. HARROWGATE MUSEUM OF NATURAL CURIOSITIES - TAXIDERMY HALL - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR ALDOUS BLYTHE, ROSALIND PEMBERTON-SHAW, CONSTABLE HARGROVE, ARCHIBALD FITCH
1 A ¶ Glass cases in rows, and in every case a creature caught in the middle of a thought: a fox mid-pounce, an owl with one wing half raised, a stoat frozen beside a nest of china eggs.
2 A The gaslamps hiss.
3 A The floor smells of beeswax and arsenic.
4 A ¶ PROFESSOR ALDOUS BLYTHE, 60s, in a velvet jacket and a monocle, strolls along the cases with a candle, humming, while ROSALIND PEMBERTON-SHAW, 30s, the junior curator, trails him with a notebook, writing and sneezing, and CONSTABLE HARGROVE, 40s, a heavy man in a cape, stands with his hands behind his back, studying a stuffed heron as though it has insulted him.
5 D BLYTHE: You see, Constable, the trick of the thing is not the skin. It is the eyes.
6 D HARGROVE: Glass, ain't they?
7 D BLYTHE: Glass, certainly. But placed by a hand that knew the animal.
8 D ROSALIND: Professor, with respect, the Constable is here about the missing curator.
9 D BLYTHE: Ah, yes. Dear Mr. Fitch. He did so love the badgers.
10 D HARGROVE: Last seen Thursday?
11 D BLYTHE: Thursday evening. Closing time. He went down to oil the hinges on the Great Elk.
12 A ¶ The three of them turn toward the end of the hall.
13 A The Great Elk stands in its alcove, antlers spread like a cathedral window, glass eyes catching the candle.
14 A ¶ Something shifts behind the elk.
15 A ¶ ARCHIBALD FITCH, 50s, in a rumpled waistcoat, steps from behind the elk, alive, pale, holding an oil can.
16 A He looks at them like a man waking from a dream.
17 D FITCH: I fell asleep.
18 A ¶ Silence.
19 D ROSALIND: Mr. Fitch! We thought you were dead!
20 D FITCH: For four days?
21 D BLYTHE (smoothly): Well. It was a very long afternoon.
22 A ¶ Hargrove frowns.
23 A He looks at the elk.
24 A At Fitch.
25 A At Blythe, whose candle has begun to shake.
26 D HARGROVE: Professor. There's a piece of tweed in that elk's antlers.
27 A ¶ Everyone looks up.
28 A A scrap of grey cloth.
29 A Wet, dark at one end.
30 D BLYTHE: That is... decorative.

### SCENE s02418 | INT. PRISONER TRANSPORT VAN - NIGHT
Detected names (may be incomplete or contain aliases): ATTORNEY LENORE ISHIGURO-BAPTISTE, DERRICK MALONEY, DEPUTY RHONDA CALLOWAY
1 A ¶ A steel box on wheels.
2 A Bench seats facing each other.
3 A Wire mesh between the compartments.
4 A A bare bulb swings with every turn.
5 A ¶ ATTORNEY LENORE ISHIGURO-BAPTISTE, forties, in a camel coat, perches on the end of the bench with a briefcase on her lap.
6 A Across from her, DERRICK MALONEY, twenty-two, in an orange jumpsuit and wrist chains, glares at the floor.
7 A In the mesh-guarded front seat, DEPUTY RHONDA CALLOWAY, fifties, drives with one eye on the mirror.
8 D LENORE: Listen to me. Don't say anything at the arraignment.
9 D DERRICK: I didn't do it.
10 D LENORE: I know.
11 D DERRICK: Then why are we-
12 D LENORE: Because the judge doesn't know.
13 A ¶ The van hits a pothole.
14 A Derrick bangs his head on the wall.
15 D DERRICK: They said I'd get bail.
16 D LENORE: They said maybe.
17 D DERRICK: Maybe isn't bail.
18 D CALLOWAY (from the front): Quiet back there.
19 D LENORE: We're talking, Deputy.
20 D DERRICK: It's none of your business.
21 D CALLOWAY: It's all of my business. I'm driving.
22 A ¶ Derrick leans forward.
23 A The chains rattle.
24 A Lenore touches his knee with two fingers.
25 D LENORE: Derrick. Stop.
26 A ¶ He freezes.
27 A Slowly sits back.
28 A The tension drains from his shoulders.
29 A He breathes out, long and unsteady.
30 D DERRICK (very quietly): Okay.
31 D LENORE: Okay.
32 A ¶ The van turns a corner.
33 A Through the mesh, Calloway's eyes meet Lenore's in the mirror, and for a moment, they share something like sympathy.

### SCENE s01157 | EXT. LIFEBOAT - OPEN SEA - DAWN
Detected names (may be incomplete or contain aliases): SKIPPER BRODIE, ADAIR, MEI, TOLLIVER, SAMSON, NAN
1 A ¶ A battered orange lifeboat rides a long swell under a pearl sky.
2 A Six figures huddle under a torn canopy.
3 A Salt crusts every face.
4 A ¶ SKIPPER BRODIE (50s, captain's cap, split lip) holds the tiller with both hands.
5 A ADAIR (30s, ship's mate, ripped oilskin) sits opposite, passing a ration tin from hand to hand.
6 A MEI (20s, stewardess, wrapped in a blanket) holds a thin plastic cup under a drip of rain from the canopy.
7 A TOLLIVER (60s, first-class passenger, tattered dinner jacket) stares at the horizon with his hands between his knees.
8 A SAMSON (40s, engineer, sunburned scalp) rows with a single splintered oar.
9 A NAN (12, ship's boy, enormous lifejacket) sits at the bow, a rope around her wrist.
10 D ADAIR: Biscuit.
11 A ¶ He hands the tin to Mei.
12 A She takes one, hands it on.
13 A Tolliver takes one without looking.
14 A Samson stops rowing, takes one, and chews loudly.
15 D BRODIE: We'll hold this heading until noon.
16 D SAMSON (between bites): And if the wind turns?
17 D BRODIE: Then we turn with it.
18 A ¶ Nan lifts her head.
19 A She points at the horizon with her free hand.
20 A A thin black smudge at the line of the sea.
21 D NAN: Skipper.
22 D BRODIE: I see it.
23 D TOLLIVER: Smoke?
24 D BRODIE: Or a cloud.
25 D SAMSON: It's smoke.
26 D ADAIR: It could be a trawler.
27 D MEI: Or something burning.
28 A ¶ Nobody speaks.
29 A The lifeboat rocks.
30 A Mei sets down her cup with care.
31 A Tolliver straightens his dinner jacket.
32 D TOLLIVER: Skipper, I have a flare in my pocket.
33 D BRODIE: You what?
34 D TOLLIVER: I had it all night. I did not wish to waste it.
35 A ¶ Brodie stares at him.
36 A Samson lets the oar slip from his hand and clatter in the bottom of the boat.
37 A Adair closes his eyes and takes a long breath through his nose.
38 D ADAIR (low, to Brodie): Sir, I'll take it from him.
39 D BRODIE: No. Leave him his dignity.
40 A ¶ Tolliver draws the flare from his pocket, unscrews the cap, and strikes it against the gunwale.
41 A A red plume of smoke shoots up.
42 A The lifeboat glows crimson.
43 A ¶ For a moment nothing happens.
44 A Then Nan begins to laugh, and Mei begins to cry, and Samson wraps an arm around the girl and presses her head against his shoulder.
45 A Brodie lets the tiller go and sits back.
46 D BRODIE [CONT'D] (barely audible): There she is.
47 A ¶ On the horizon, the smudge grows a mast.

### SCENE s00694 | INT. FENN & SON UPHOLSTERY - REAR LOADING DOCK - NIGHT
Detected names (may be incomplete or contain aliases): LAZLO FENN, RAY OBUYA
1 A ¶ Bolts of fabric stacked to the rafters.
2 A A single hanging bulb.
3 A The roll-up door is half open to the rain.
4 A ¶ LAZLO FENN, 50s, a heavy-set man in suspenders, counts bills at a workbench.
5 A RAY OBUYA, 30s, in a leather jacket, leans against a stack of velvet, thumbing a lighter on and off.
6 D RAY: It's short.
7 D LAZLO: It isn't.
8 D RAY: Count it again.
9 A ¶ Lazlo does not look up.
10 A He finishes the stack, squares the edges against the bench, and starts a second.
11 D LAZLO: Your boss has a long memory. So do I.
12 D RAY: My boss said four. That's three-eight.
13 D LAZLO: It's four.
14 A ¶ Ray pushes off the velvet and takes one step.
15 A He is close enough now to see the sweat on the other man's collar.
16 D RAY: Then why are you counting like a man who got robbed?
17 D LAZLO: Because I'm careful.
18 D RAY: You've been careful for twenty years and I never once saw you count twice.
19 A ¶ Lazlo stops.
20 A He lays both hands flat on the money.
21 A Behind him, a roll of fabric slumps on its stand.
22 D RAY [CONT'D]: Who's behind the roll?
23 D LAZLO: Nobody.
24 D RAY: He's smaller than you. He's breathing too hard.
25 D LAZLO: Ray. Let it go.
26 A ¶ Ray draws a revolver from the small of his back and lowers it, slowly, toward the floor.
27 D RAY: Come out of there and I won't ask where the other two hundred went.
28 A ¶ The roll shifts.
29 A A boy, thin, no more than sixteen, steps out into the light with a fistful of cash held against his chest.

### SCENE s00363 | INT. SEED VAULT - ARCTIC ISLAND - NIGHT
Detected names (may be incomplete or contain aliases): IVO LUNDQVIST, NORA
1 A ¶ A frozen concrete tunnel, shelves of sealed foil packets disappearing into the dark.
2 A Every breath is a cloud.
3 A ¶ IVO LUNDQVIST, forties, a thief in a thermal suit, kneels at a steel case, a pry bar in his gloved hands.
4 A His earpiece crackles.
5 D NORA [V.O.] (over earpiece): Ivo, you have six minutes before the guard rotation.
6 D IVO (whisper): I know.
7 A ¶ He cracks the case.
8 A It opens.
9 A Inside lies a single glass vial, pale gold.
10 D NORA [V.O.] (over earpiece): Don't touch it. Is it the right strain?
11 A ¶ He lifts it to the light.
12 A He turns it.
13 A He sets it back.
14 D IVO: Wrong label.
15 D NORA [V.O.] (over earpiece): Then try the next case.
16 A ¶ He rises.
17 A He crosses the tunnel in three strides.
18 A He pries the second case.
19 A A siren starts low and climbs.
20 A Ivo lunges backward, slips on the ice, and the vial flies out of his hand.
21 D NORA [V.O.] (over earpiece): Ivo! What happened?
22 A ¶ Ivo and the vial hang in the air for a long beat.
23 A He catches it a hand's width above the floor.
24 A The siren stops.
25 A Silence.
26 D IVO: Got it.
27 D NORA [V.O.] (over earpiece, quiet): Good. Now turn around.
28 A ¶ He does.
29 A A single red dot rests on his chest.
30 A At the end of the tunnel, the guard lowers a rifle.
31 D IVO: Nora?
32 D NORA [V.O.] (over earpiece): He pays better.

### SCENE s01704 | INT. ZOO REPTILE HOUSE - OFFICE - DAY
Detected names (may be incomplete or contain aliases): NELLIE, BRIGHTWATER, PERCIVAL ADEWALE-STONE, HECTOR NAVARRO, INTERCOM
1 A ¶ Cluttered desk.
2 A A taxidermy iguana on a filing cabinet.
3 A An intercom box on the wall.
4 A ¶ ELEANOR "NELLIE" BRIGHTWATER (40s, khaki vest, perpetually frazzled) runs a hand through her hair.
5 A Across from her, new hire PERCIVAL ADEWALE-STONE (20s, brand-new uniform, a clipboard clutched to his chest) sits rigidly.
6 A By the door, groundskeeper HECTOR NAVARRO (60s, rubber boots, tobacco-stained mustache) leans on a broom.
7 D NELLIE: So. Your first day.
8 D PERCIVAL: Yes. I'm very excited.
9 D NELLIE: Don't be.
10 D HECTOR: It builds character.
11 D INTERCOM [V.O.]: Nellie, it's the snake house. Mamba's out.
12 A ¶ Nellie shuts her eyes.
13 A Percival stares at the intercom.
14 D PERCIVAL: Out of what?
15 D NELLIE: Out of everything.
16 A ¶ She leaps to her feet and knocks the desk; papers go flying.
17 A Hector drops the broom.
18 A Percival ducks, and they all tangle in the doorway, jostling, pushing, shoving each other out into the corridor.
19 D INTERCOM [V.O., CONT'D]: Also the python. And the gift shop.
20 D HECTOR: The gift shop?
21 D NELLIE: Nobody panic.
22 D PERCIVAL: Everyone's panicking.
23 D HECTOR: I'm not.
24 D NELLIE: Hector, you're holding the broom upside down.
25 D HECTOR: That's my panic.
26 A ¶ They scatter down the hall in three directions, shouting.

### SCENE s00250 | INT. ORBITAL SALVAGE TUG "LONG PATIENCE," CARGO BAY - SHIP NIGHT
Detected names (may be incomplete or contain aliases): OKSANA REYNOLDS-ADEBOYE, COMMS, SIMEON AKINTOLA-VEGA
1 A ¶ Strip lighting.
2 A Mag-boots clank.
3 A Crates stacked in nets.
4 A A viewport shows a wreck turning slowly against the stars.
5 A ¶ OKSANA REYNOLDS-ADEBOYE (40s, engineer, grease up to the elbows) crouches over an open hatch, a wrench in one hand.
6 A She does not look up when the intercom hisses.
7 D COMMS [V.O.]: Engineer. Bridge. Report.
8 A ¶ She keeps working.
9 A Turns a bolt.
10 A Another.
11 D OKSANA: Still on it.
12 D COMMS [V.O.]: Captain wants a status on the coupling.
13 D OKSANA: Tell the Captain it's a coupling.
14 D COMMS [V.O.]: Copy.
15 A ¶ She sets the wrench down.
16 A Wipes her hands on her thighs.
17 A From a vent behind her, a soft click.
18 A ¶ She turns slowly.
19 A Nothing.
20 A But she picks the wrench back up.
21 A ¶ A second figure floats in from the airlock: SIMEON AKINTOLA-VEGA (30s, flight tech, jumpsuit unzipped to the chest).
22 A He anchors himself with one boot to a crate and stares at her.
23 D SIMEON: You okay?
24 D OKSANA: Fine.
25 D SIMEON: You've been down here nine hours.
26 D OKSANA: It's a big coupling.
27 D SIMEON: Captain says come up.
28 D OKSANA: Captain says what?
29 D COMMS [V.O.]: Engineer, Captain says come up. Immediately.
30 D OKSANA (to the intercom): Why?
31 D COMMS [V.O.]: Something on the scanner. Something near the wreck.
32 A ¶ Oksana and Simeon look at each other.
33 A She tightens her grip on the wrench.
34 A He zips his jumpsuit to the collar.
35 D SIMEON: What is it?
36 D COMMS [V.O.]: Unknown. Moving. Matching our heading.
37 D OKSANA: How close?
38 D COMMS [V.O.]: Twelve kilometers. And closing.
39 A ¶ She lets the wrench drift.
40 A It spins slowly in front of her, catching the light.
41 D SIMEON: I'm going up.
42 D OKSANA: Wait.
43 A ¶ He waits.
44 A Her eyes go to the viewport.
45 A The wreck rotates; behind it, a shape too regular to be debris.
46 A ¶ She says nothing.
47 A Neither does he.
48 A They float side by side.
49 D COMMS [V.O.]: Engineer? Tech? Respond.
50 A ¶ Simeon opens his mouth.
51 A Closes it.
52 A Oksana presses the intercom.
53 D OKSANA (evenly): We're coming up.
54 A ¶ She lets go.
55 A Drifts across the bay.
56 A At the door she stops, lays one palm flat on a crate as if for luck.
57 A ¶ Then she follows Simeon into the corridor.

### SCENE s01822 | INT. SALT MINE ELEVATOR CAGE - NIGHT
Detected names (may be incomplete or contain aliases): CASIMIR DRAGOMIR, INSPECTOR LEILA FARHAT, DOMINIK VESEL
1 A ¶ A steel cage the size of a confessional hangs in a shaft, two hundred meters of dark below its floor.
2 A The walls sweat brine.
3 A A single caged bulb swings, though the cage itself is still.
4 A ¶ CASIMIR DRAGOMIR, 40s, mining engineer, hard hat cocked over one eye, grips the control lever with a white fist.
5 A Across from him, wedged against the mesh, stands INSPECTOR LEILA FARHAT, 30s, in a borrowed orange jumpsuit two sizes too large, a laminated badge swinging at her sternum.
6 A She keeps her eyes on the ceiling.
7 A ¶ The cage shudders.
8 A A shower of salt grit rains down on both of them.
9 D LEILA: You said it was a routine descent.
10 D CASIMIR: It was routine until it stopped.
11 D LEILA: Then start it.
12 D CASIMIR: I have pulled it eleven times.
13 D LEILA: Pull it twelve.
14 A ¶ He pulls.
15 A The lever clacks.
16 A Nothing.
17 D CASIMIR: There is a stone in the guide rail, or the cable has slipped a tooth, or the dispatcher has gone to his supper. I do not know which. I know only that I am forty-six years old and the sign at the top says six persons maximum and we are two and still we are not moving.
18 D LEILA: Do you want to hear what I wrote in my report on this shaft?
19 D CASIMIR: No.
20 D LEILA: That the guide rails were due for replacement in March.
21 D CASIMIR: It is October.
22 D LEILA: Yes.
23 D CASIMIR: Then you are a woman who knew.
24 D LEILA: I am a woman who filed.
25 A ¶ A sound rolls up out of the dark below, a long metallic yawn, like a ship settling.
26 A Both of them look down through the grated floor.
27 A The bulb swings.
28 A Neither speaks until it stops.
29 D CASIMIR (whispering): That is not the rail.
30 D LEILA: Then what?
31 D CASIMIR: Somebody is in the shaft.
32 A ¶ A beam of white light cuts up through the grating from below.
33 A It sweeps their boots, then their faces, then settles on Casimir's chest.
34 A He raises a hand against it.
35 A ¶ From the dark, a third person climbs into view along the guide rails, a dripping figure hand over hand: DOMINIK VESEL, 60s, a night-shift rigger in a rusted harness, a headlamp strapped to his forehead, a coil of rope slung across his shoulder.
36 A He grips the cage floor and hangs there, grinning through salt-white stubble.
37 D DOMINIK: Forty minutes I have been under you, shouting.
38 D CASIMIR: Dominik.
39 D DOMINIK: You didn't hear.
40 D CASIMIR: I did not.
41 D DOMINIK: Of course not. You never listen when the lever is in your hand.
42 A ¶ He hauls one leg onto the floor grate.
43 A Leila steps back to give him room, though there is none.
44 D LEILA: Who is this?
45 D CASIMIR: My rigger.
46 D DOMINIK (to Leila): Madam, with respect, if you knew what I know about this cable you would not be standing so calmly.
47 D LEILA: I am not calm.
48 D DOMINIK: Then you are the first sensible one today.
49 A ¶ He swings the rope off his shoulder and clips it to a ring in the cage wall, then to his harness, then, without asking, to Leila's belt.
50 A She looks down at the carabiner clicking shut against her hip.
51 D LEILA: What are you doing?
52 D DOMINIK: Insurance.
53 D CASIMIR: Dominik. Tell us.
54 A ¶ Dominik wipes his face.
55 A His grin goes.
56 D DOMINIK: The cable is fraying at the third splice. Not the first, the third. It will hold a minute, maybe two. Not more.
57 D CASIMIR: You are certain?
58 D DOMINIK: I held it in my hand.
59 A ¶ The cage jerks.
60 A A hard small drop, an inch, then it catches.
61 A All three go rigid.
62 D LEILA: Move the lever.
63 D CASIMIR: If I move it the splice may part.
64 D LEILA: And if you don't?
65 D CASIMIR: Then the splice may part anyway.
66 A ¶ Dominik laughs, one short bark that echoes in the shaft.
67 A He claps Casimir on the shoulder.
68 D DOMINIK: There. A man who understands the odds.
69 A ¶ Casimir takes a long breath.
70 A He sets his hand on the lever, and with the other hand he reaches out and grips Leila's wrist.
71 D CASIMIR: Hold the mesh. Both hands.
72 A ¶ She does.
73 A He pulls the lever down.
74 A The cage lurches, climbs a meter, a second meter, screaming against the rail, then stops again so hard that her hard hat clatters off and falls away into the dark.
75 A They all listen to it fall.
76 A It does not hit anything for a very long time.
77 D DOMINIK (softly): That was a good hat.
78 A ¶ Above them, far up the shaft, a pinprick of daylight-colored lamp appears and begins to grow.

### SCENE s01411 | INT. REGIONAL AIRPORT - GATE B - NIGHT
Detected names (may be incomplete or contain aliases): FINN LARKSPUR-MBEKI, MINA, OSTROWSKI, GRANDPA TOBIAS, GRANDMA ESME ADEBAYO, TANNOY
1 A ¶ Empty chairs, a dim terminal.
2 A A departure board flickers: ALL FLIGHTS DELAYED.
3 A Rain streaks the windows onto a runway of dark glass.
4 A ¶ FINN LARKSPUR-MBEKI, 30s, rumpled, sits with a coffee and a boarding pass, scribbling in a notebook.
5 A ¶ Across the aisle, WILHELMINA "MINA" OSTROWSKI, 30s, clutches a small suitcase and stares at the floor, thumb worrying a loose ring on her finger.
6 A ¶ Two seats down, an old couple, GRANDPA TOBIAS and GRANDMA ESME ADEBAYO, 70s, share a thermos, bickering softly.
7 D TANNOY [V.O.]: Attention passengers. Flight 418 to Denver is delayed until further notice.
8 A ¶ A collective groan.
9 A Finn caps his pen.
10 D FINN (to the room): Of course it is.
11 A ¶ Mina looks up.
12 A Their eyes meet.
13 A She glances away first.
14 D FINN [CONT'D] (to Mina): Long night.
15 D MINA: Seems so.
16 D FINN: You headed to Denver?
17 D MINA: Eventually.
18 D FINN: Me too. Business. You?
19 D MINA: A wedding.
20 D FINN: Whose?
21 D MINA: Mine.
22 A ¶ Finn blinks.
23 A Nods slowly.
24 A Looks at the ring on her finger.
25 D FINN: Congratulations?
26 D MINA: Ask me in Denver.
27 A ¶ He smiles.
28 A She almost does too.
29 A The old couple, across the aisle, are unabashedly listening.
30 D ESME (to Tobias): I told you she was nervous.
31 D TOBIAS: She's not nervous, she's sulking.
32 D ESME: Nervous.
33 D TOBIAS: ^ Sulking.
34 A ¶ They glare at each other.
35 A Mina and Finn share a quiet look, and for the first time, both of them laugh.
36 D FINN: What's his name?
37 D MINA: Gordon.
38 D FINN: Gordon.
39 D MINA: He's very kind.
40 D FINN: That's a good thing.
41 D MINA: It is.
42 D FINN: But?
43 D MINA: But nothing. He's kind.
44 A ¶ She stands.
45 A Walks to the window, her reflection lost against the rain.
46 A Finn watches her back.
47 A He tears a page from his notebook, folds it, hesitates, then puts it in his pocket.
48 D TANNOY [V.O.]: Attention. Flight 418 will board in fifteen minutes.
49 A ¶ Silence.
50 A Everyone looks up at the speaker.
51 D MINA (to the window): Fifteen minutes.
52 D FINN: Enough time for a coffee.
53 D MINA: Enough time for anything.
54 A ¶ She turns.
55 A Their eyes meet again.
56 A She crosses back and sits beside him, not across from him.
57 D MINA [CONT'D]: Tell me something true.
58 D FINN: I don't like Denver.
59 D MINA: That's not it.
60 D FINN: I'm going because I'm afraid to stay.
61 D MINA: Of what?
62 D FINN: Of the place I'm supposed to be.
63 A ¶ She breathes out.
64 A Her hand finds his on the armrest.
65 A For a moment neither moves.
66 D TANNOY [V.O.]: Final boarding call for Flight 418.
67 A ¶ The old couple stand, collecting thermos and coats.
68 A Esme pauses at the end of the aisle, looks down at the pair of them.
69 D ESME: Go on, dears. Or don't. But decide.
70 D TOBIAS: Esme.
71 D ESME: ^ What? I'm eighty. I get to say.
72 A ¶ She takes his arm and leads him toward the jetway.
73 A Finn and Mina watch them go.
74 A Then Mina slides the ring off her finger, slowly, and holds it in her open palm between them.
75 D MINA (to herself): Well. Here we are.
76 A ¶ Finn closes her fingers around the ring.
77 A The board above them flickers once more and goes dark.

### SCENE s01608 | INT. SLEEPER TRAIN - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): DOCTOR MIRABELLE ACHEBE-LONG, COLONEL PERCIVAL HOLLOWAY-GRANT, MISS ODALYS FERNSBY, VLADIMIR ZHURAVLEV, DESMOND ISAIAH
1 A ¶ A narrow carriage, polished wood and brass, white tablecloths swaying with the rails.
2 A Outside the windows, black fields slide by in the dark, broken now and then by a lone farm light.
3 A ¶ Five passengers sit scattered among the tables, each with a half-finished meal and a private worry.
4 A ¶ DOCTOR MIRABELLE ACHEBE-LONG (50s, tailored suit, a leather bag at her feet) cuts a piece of fish with surgical care.
5 A Opposite her sits COLONEL PERCIVAL HOLLOWAY-GRANT (70s, regimental tie, a monocle) tapping a cigarette against a silver case.
6 A At the next table, MISS ODALYS FERNSBY (20s, hat with a feather, gloves) peers into a compact mirror.
7 A Across the aisle, a heavyset man, MR. VLADIMIR ZHURAVLEV (60s, fur collar, hands like shovels), pours vodka into a glass.
8 A And near the door, the porter, DESMOND ISAIAH (30s, white jacket, a tray), waits with the patience of the trained.
9 D MIRABELLE: Colonel, you were saying about the Rhodesian campaign.
10 D PERCIVAL: Was I? Yes. The heat was infernal.
11 D ODALYS (not looking up): It must have been dreadful.
12 D VLADIMIR (over her): War is always dreadful.
13 D PERCIVAL (over him): I recall a particularly dreadful afternoon in nineteen eleven.
14 D MIRABELLE (to Odalys): Miss Fernsby, are you quite well?
15 D ODALYS: Perfectly.
16 D VLADIMIR: She is not. Look at her hands.
17 D ODALYS: My hands are fine.
18 D DESMOND: Shall I bring tea, miss?
19 D ODALYS: No, thank you.
20 D PERCIVAL: Tea is a sovereign remedy.
21 D MIRABELLE: So is silence.
22 A ¶ Percival glares.
23 A Vladimir laughs, a bark.
24 A The train lurches around a curve and a glass falls from a nearby table, shattering.
25 A Everyone looks.
26 A Desmond bends to sweep it up.
27 D DESMOND: Beg pardon, ladies and gentlemen.
28 D PERCIVAL: Careful, my boy.
29 D DESMOND: Yes, Colonel.
30 A ¶ As he gathers the shards, he stops.
31 A In the debris lies a small brass key.
32 A He glances up.
33 A Odalys has gone very pale.
34 A Her eyes meet his.
35 A She shakes her head, once.
36 A ¶ Desmond closes his hand over the key and says nothing.
37 A He stands.
38 A The train rushes on.

### SCENE s02518 | EXT. RIVER BOATHOUSE - DAWN
Detected names (may be incomplete or contain aliases): COACH ARCHIBALD PELHAM-GREENE, JASPER OKUMURA, DOLORES RIVAS, ANSELM TREMAINE
1 A ¶ Mist rising off a flat brown river.
2 A Racing shells rest on racks like sleeping insects.
3 A Dew on the dock boards.
4 A A single crow on a piling.
5 A ¶ COACH ARCHIBALD PELHAM-GREENE, 60s, tweed jacket and megaphone, stands at the end of the dock.
6 A JASPER OKUMURA, 20s, stroke, sits on the edge with his oar across his knees.
7 A DOLORES RIVAS, 20s, coxswain, tiny in an oversized windbreaker, studies a clipboard.
8 A ANSELM TREMAINE, 20s, bow, ties his shoes with great ceremony.
9 D ARCHIBALD: Eights in five.
10 D DOLORES: We're ready.
11 D ARCHIBALD: Are you?
12 D JASPER: Yes, Coach.
13 D ARCHIBALD: Anselm?
14 D ANSELM: Yes, Coach.
15 D ARCHIBALD: You look like a man tying his shoes.
16 D ANSELM: I am.
17 D ARCHIBALD: Tie them faster.
18 A ¶ Anselm ties them slower.
19 A Dolores stifles a laugh.
20 D ARCHIBALD [CONT'D]: Regatta in nine days. Their stroke rate is thirty-eight.
21 D JASPER: Ours is thirty-six.
22 D ARCHIBALD: Ours is thirty-six and clean.
23 D JASPER: Clean wins.
24 D ARCHIBALD: Clean wins eventually.
25 A ¶ Dolores raises her hand.
26 D DOLORES: Coach, can I say something?
27 D ARCHIBALD: You may.
28 D DOLORES: I've been counting strokes since March.
29 D ARCHIBALD: And?
30 D DOLORES: We're never as bad as we think we are.
31 A ¶ A silence.
32 A Archibald looks at the river.
33 A The crow flies off.
34 D ARCHIBALD: That's the best thing anyone's said all season.
35 A ¶ He raps the megaphone on the post.
36 D ARCHIBALD [CONT'D]: Boat on the water.
37 A ¶ They stand.
38 A Four people lift a shell with the unhurried care of men carrying a coffin.
39 A Nobody speaks.
40 A The mist parts.

### SCENE s00960 | EXT. ICE-LOCKED LIFEBOAT, ARCTIC FLOE - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN BRYNHILD OLSEN-ADESANYA, FIRST MATE HIRAM DELACROIX-NWOSU, FINA, LARSEN-OKAFOR, TEMPERANCE BRIGGS-MOHAMMED
1 A ¶ A battered orange lifeboat frozen into a plain of pack ice.
2 A White sky.
3 A White ground.
4 A The only color: the boat, four parkas, and a thin line of red blood on the ice.
5 A ¶ CAPTAIN BRYNHILD OLSEN-ADESANYA (50s, frost in her eyebrows, a compass on a lanyard) crouches at the stern, rationing biscuits.
6 A Across from her, FIRST MATE HIRAM DELACROIX-NWOSU (40s, one glove missing) sits staring at his bare hand.
7 A At the bow, COOK YOSEFINA "FINA" LARSEN-OKAFOR (30s) feeds a tin stove with the last of the splinters.
8 A And curled in the bottom of the boat, wrapped in a tarp, lies deckhand TEMPERANCE BRIGGS-MOHAMMED (20s), breathing shallowly.
9 D BRYNHILD: Nine biscuits. Four of us.
10 D FINA: Two and a quarter each.
11 D BRYNHILD: Two each. The quarter goes to Temperance.
12 D HIRAM: She won't eat it.
13 D BRYNHILD: She will.
14 A ¶ Temperance stirs.
15 A Her eyelids flutter.
16 D TEMPERANCE (hoarse): Is it morning?
17 D FINA: It's morning.
18 D TEMPERANCE: Is it warm?
19 D FINA (gently): No, love.
20 A ¶ A silence.
21 A The stove ticks.
22 A The wind picks up, sliding a ribbon of snow across the floe.
23 A ¶ Hiram's head lifts.
24 A He cocks it, listening.
25 D HIRAM: Do you hear that?
26 D BRYNHILD: Hear what?
27 D HIRAM: An engine.
28 A ¶ They all go still.
29 A Far off, a faint drone.
30 A Fina laughs, one cracked note.
31 D FINA: It's the wind.
32 D HIRAM: It's an engine, Fina.
33 A ¶ Brynhild stands, shading her eyes.
34 A A dark speck on the horizon, growing.
35 A Temperance grips the tarp.
36 A Then the speck resolves into a long gray shape with a red cross on its flank, and the drone swells into the unmistakable thrum of a rescue helicopter.
37 A ¶ Nobody cheers.
38 A Nobody moves.
39 A Then Hiram begins to weep, and Fina puts her arm around him, and Brynhild picks up the flare gun with a hand that will not stop shaking.

### SCENE s00846 | INT. SUDSY'S 24-HOUR CAR WASH, TUNNEL BAY - NIGHT
Detected names (may be incomplete or contain aliases): THE MAN, DUKE, RHODA FENWICK, CITY INSPECTOR, BOONE
1 A ¶ Brushes hang like giant sleeping spiders.
2 A Neon pink water pools on the concrete.
3 A A radio plays soft country from a plastic shelf.
4 A The tunnel is empty.
5 A ¶ THE MAN, forties, in a camel coat and gloves, enters on foot from the rain, a briefcase held tight against his chest.
6 A He glances at the exit, then at the cash window.
7 A ¶ DUKE, sixty, the night attendant, sits on an upturned bucket with a thermos between his knees, doing a crossword.
8 A RHODA FENWICK, thirties, in a navy suit with a lanyard that says CITY INSPECTOR, steps out of the office with a clipboard, pen already uncapped.
9 A ¶ Duke fills in a word and looks up.
10 A The Man edges along the wall, trying to keep out of the light.
11 A Rhoda follows him with her eyes, then with her pen, and writes something on the clipboard, and walks toward him at an even pace.
12 D RHODA: Evening. You here for a wash?
13 D THE MAN: I walked.
14 D RHODA: That's an odd way to get a car washed.
15 D THE MAN: I'm between cars.
16 A ¶ Duke pours coffee into the thermos cap and drinks.
17 A He doesn't take his eyes off the briefcase.
18 D DUKE: Eleven letters. "Unwelcome visitor."
19 D RHODA: Trespasser.
20 D DUKE: That's ten.
21 D RHODA: Intruder. Eight. Well, I tried.
22 A ¶ The Man lets the briefcase drop to his side.
23 A It swings, heavy, and thuds against his knee.
24 A Rhoda's pen stops.
25 D RHODA [CONT'D]: Sir, what's your name?
26 D THE MAN: Does it matter?
27 D RHODA: I like to put a name on my forms.
28 D THE MAN: Boone.
29 A ¶ Duke chuckles into his thermos.
30 D DUKE: Boone like Daniel?
31 D BOONE: Boone like Walter. Walter Boone.
32 A ¶ Rhoda writes it down.
33 A Duke fills in four more squares of the puzzle.
34 A Boone sets the briefcase on the floor and slides it, with his foot, a few inches toward the drain.
35 D RHODA: Mr. Boone, would you open that for me?
36 D BOONE: It's just papers.
37 D RHODA: Then it won't take a minute.
38 A ¶ Boone looks at Duke.
39 A Duke looks at the crossword.
40 A Boone kneels, thumbs the latches, and lifts the lid.
41 A Inside, stacked in rubber bands, is a thick wall of cash.
42 A ¶ Rhoda lowers the clipboard and says nothing for a long moment.
43 D RHODA [CONT'D]: That's a lot of papers.
44 D BOONE: I'm a very organized man.
45 A ¶ Duke drains his thermos, caps it, and rises with a grunt.
46 A He slides a squeegee off its rack and holds it like a cane.
47 D DUKE: Seven across. "Fair deal."
48 D RHODA: Hush.
49 D DUKE: Eight letters. Starts with a G.
50 A ¶ Boone and Rhoda both turn to stare at him.

### SCENE s00414 | INT. TINY TEA SHOP - MORNING
Detected names (may be incomplete or contain aliases): PERPETUA OLDFIELD, SAMUEL
1 A ¶ A shop the width of a hallway.
2 A Shelves of tins to the ceiling.
3 A A brass scale.
4 A A counter polished by decades of elbows.
5 A A bell above the door.
6 A ¶ PERPETUA OLDFIELD, 60s, in a lilac cardigan, stands behind the counter arranging tins by color.
7 A SAMUEL, 30s, a young man in an ill-fitting blazer, stands at the other side with a clipboard.
8 D SAMUEL: Mrs. Oldfield, I'm from the council.
9 D PERPETUA: Lovely. Tea?
10 D SAMUEL: I'm not supposed to.
11 D PERPETUA: Of course. Which kind?
12 D SAMUEL: Whatever you have.
13 D PERPETUA: I have two hundred and fourteen.
14 D SAMUEL: Whichever is fastest.
15 D PERPETUA: Oh, that would be a gunpowder green. It rolls itself.
16 A ¶ She takes a tin down, measures leaves onto the brass scale, adds one, takes one away.
17 D SAMUEL: It's about the inspection.
18 D PERPETUA: Mm.
19 D SAMUEL: Your sign is two inches over the permitted size.
20 D PERPETUA: Is it?
21 D SAMUEL: By code.
22 D PERPETUA: Which code?
23 D SAMUEL: Section nineteen. Paragraph four. Subsection... B.
24 D PERPETUA: Subsection B has always been my favorite.
25 A ¶ She pours hot water from a kettle into a small white pot.
26 A The steam rises between them.
27 A Samuel adjusts his tie.
28 D SAMUEL: I don't want to give you a violation.
29 D PERPETUA: Then don't.
30 D SAMUEL: It's the law.
31 D PERPETUA: So it is.
32 A ¶ She sets a cup in front of him.
33 A He looks at it.
34 A He looks at his clipboard.
35 D SAMUEL: I really shouldn't.
36 D PERPETUA: It's only tea.
37 A ¶ He takes the cup.
38 A Sips.
39 A His eyes widen slightly.
40 A He lowers the clipboard onto the counter.
41 D SAMUEL: This is very good.
42 D PERPETUA: It's the leaf.
43 D SAMUEL: Is it the sign?
44 D PERPETUA: Excuse me?
45 D SAMUEL: The sign. Is it good tea because of the sign?
46 D PERPETUA (smiling): Mr. Samuel. I think you should take another sip.
47 A ¶ He does.
48 A He sits on the stool by the counter.
49 A She goes back to arranging tins.
50 A The bell does not ring.
51 A Outside, the sign, two inches too large, swings gently in the wind.

### SCENE s01291 | INT. ROSELLE'S WEDDING CAKE ATELIER - MORNING
Detected names (may be incomplete or contain aliases): BART, OYELARAN, CHLOE FENWICK-DASH, LUDWIK, DONNA
1 A ¶ A pink-walled bakery in a state of panic.
2 A Racks of sugar flowers, bowls of fondant, a six-tier cake on a marble counter.
3 A A wall clock reads 8:47.
4 A The ceremony begins at ten.
5 A ¶ BARTHOLOMEW "BART" OYELARAN, 30s, the groom, in a tuxedo shirt and no jacket, paces with a phone pinched between his chin and his shoulder.
6 A He has icing on his cuff.
7 A ¶ CHLOE FENWICK-DASH, 30s, the bride, in a hoodie over a half-pinned gown, stands rigid before the cake.
8 A Her veil is askew.
9 A She stares at the third tier.
10 A ¶ LUDWIK, 50s, the pastry chef, a mountain of apron and moustache, wrings a dish towel and says nothing.
11 D DONNA [V.O.] (from the phone, shrill): Bartholomew! Is that a sunflower on my daughter's cake?
12 D BART (into the phone): Mrs. Fenwick-Dash, it's a daisy.
13 D DONNA [V.O.]: It is a sunflower, Bartholomew. I specifically said no sunflowers.
14 D CHLOE: Mom, it's not a sunflower!
15 D DONNA [V.O.]: Chloe, is that you? Why are you at the bakery? You're supposed to be at the salon!
16 D CHLOE: The salon burned down.
17 D BART (whispering): It did not burn down.
18 D CHLOE (whispering): It's a metaphor.
19 D LUDWIK: Madame, it is a daisy. Look. Five petals.
20 D DONNA [V.O.]: I count nine!
21 A ¶ Bart holds the phone out.
22 A Counts the petals.
23 A Brings it back.
24 D BART: Seven.
25 D DONNA [V.O.]: That is not a daisy, Bartholomew. That is a sunflower in a daisy costume.
26 A ¶ Ludwik snatches a pastry knife.
27 A Slices the offending flower off the tier.
28 A It thumps to the counter.
29 A He hands the cake an apologetic pat.
30 D LUDWIK: Now it is nothing.
31 D DONNA [V.O.]: Better!
32 A ¶ Chloe throws her bouquet at the wall.
33 A Bart ends the call.
34 A Silence, then, softly, from the counter:
35 D CHLOE: Bart.
36 D BART: Yeah?
37 D CHLOE: Let's elope.
38 A ¶ Ludwik hands them each a slice of the sunflower.

### SCENE s00053 | INT. OPEN-PLAN OFFICE, SYNERGY HOLDINGS - DAY
Detected names (may be incomplete or contain aliases): RAY, FENNIMORE-SALAZAR, DELPHINE OKAFOR-LUND, INTERN QUENTIN BOSCH
1 A ¶ Cubicles.
2 A Motivational posters.
3 A A broken ficus.
4 A A whiteboard reads: PIVOT TO JOY.
5 A ¶ RAYMOND "RAY" FENNIMORE-SALAZAR (40s, vice president of Vibes, a lanyard of lanyards) claps his hands.
6 A DELPHINE OKAFOR-LUND (30s, tired, double-fisted coffee) watches from her desk.
7 A Next to her sits INTERN QUENTIN BOSCH (20s, tie from a high school dance).
8 D RAY: Team! Quick sync.
9 D DELPHINE: It's four-fifty-nine.
10 D RAY: Perfect time for a sync!
11 D QUENTIN (whispering): He means a meeting.
12 D RAY: A circle-back! A deep dive! A moment of alignment!
13 D DELPHINE: It's a Friday.
14 D RAY: Friday is the new Monday.
15 A ¶ He draws a giant circle on the whiteboard, then another, then a third.
16 A Delphine and Quentin stare, appalled.
17 D RAY [CONT'D]: Who can tell me what this means?
18 D QUENTIN: ^Three circles.
19 D DELPHINE: ^Three circles.
20 A ¶ They say it together.
21 A Ray points at them both, delighted.
22 D RAY: Exactly! The Triple Loop!
23 D DELPHINE: Ray.
24 D RAY: Yes?
25 D DELPHINE: I'm going home.
26 D RAY (crestfallen): Is that a no on the loop?
27 A ¶ She gathers her bag.
28 A Quentin, loyal, stays seated.
29 D QUENTIN: I like the loop, Ray.
30 A ¶ Ray beams.
31 A Delphine pauses in the doorway.
32 D DELPHINE: Quentin. Run.

### SCENE s02428 | INT. TELEPHONE EXCHANGE - SWITCHBOARD ROOM - NIGHT (1927)
Detected names (may be incomplete or contain aliases): NELL FAIRWEATHER, ADELAIDE PRUITT, LOUISA COBB, CALLER, FIRE CAPTAIN
1 A ¶ A long room of mahogany switchboards.
2 A Rows of operators in headsets, cords snaking in brass.
3 A Gas lamps hiss.
4 A ¶ NELL FAIRWEATHER (20s, operator, tight bun) plugs a cord into a jack.
5 A At the next board, ADELAIDE PRUITT (40s, supervisor, pince-nez) watches over her shoulder.
6 A Behind them, LOUISA COBB (50s, veteran operator, knitting needle in her hair) works two cords at once.
7 D NELL: Number, please.
8 D CALLER [V.O.] (over the line, crackling): Mayfair 2290.
9 D NELL: One moment.
10 A ¶ She plugs.
11 A The line hums.
12 A Adelaide leans closer.
13 D ADELAIDE: Dear, who is that?
14 D NELL: A gentleman. He sounds upset.
15 D ADELAIDE: Let me hear.
16 A ¶ She takes a spare headset.
17 A Listens.
18 A Her face changes.
19 D CALLER [V.O.] (over the line): Tell them the bank is on fire.
20 A ¶ Adelaide rips off the headset.
21 D ADELAIDE: Louisa! Ring the fire brigade!
22 D LOUISA: Already plugged, ma'am!
23 D NELL: ^Brigade on the line!
24 D LOUISA: ^Brigade on the line!
25 A ¶ They speak in perfect unison, startled at themselves, and nearly laugh.
26 A ¶ The line crackles.
27 A A new voice, the FIRE CAPTAIN (V.O.), booms through the headset.
28 D FIRE CAPTAIN [V.O.]: Engine Four rolling. Thank you, ladies.
29 A ¶ Nell lowers her cord.
30 A Her hands shake.
31 A Adelaide places a firm palm on her shoulder.
32 D ADELAIDE: You did well.
33 D NELL: I only said "number, please."
34 D ADELAIDE: Sometimes that's all it takes.
35 A ¶ Louisa unplugs the last cord with a click.
36 A The room exhales.
37 A A hundred cords sway.
38 A Quiet returns.

### SCENE s00636 | INT. MOBILE MRI TRAILER - PARKED BEHIND RURAL CLINIC - MORNING
Detected names (may be incomplete or contain aliases): SABINA ROTHENBERG, TECHNOLOGIST FELIX AGYEMAN, ARMANDO KESSLER
1 A ¶ A white box on wheels with a humming magnet at its heart.
2 A A glass partition.
3 A On the other side, a patient lies on a sliding table with his head in a cage.
4 A ¶ DR. SABINA ROTHENBERG, forties, radiologist, sits at the console, tapping the mouse.
5 A Beside her, TECHNOLOGIST FELIX AGYEMAN, thirties, adjusts a dial.
6 A On the table, ARMANDO KESSLER, sixty, a farmer, looks at the ceiling.
7 D SABINA (into the mic): Mr. Kessler, this is the last sequence. Just breathe normally.
8 D ARMANDO [V.O.] (through speaker): Doc, you've said that three times.
9 D SABINA: And I mean it more each time.
10 A ¶ Felix smiles briefly.
11 A The magnet knocks in a steady rhythm.
12 D FELIX: Motion's good. He's a model patient.
13 D SABINA: He's lying very still.
14 D FELIX: That's what I said.
15 D SABINA: Felix, when did he last eat?
16 D FELIX: Six, he said. He drove forty miles.
17 D SABINA: Mm.
18 A ¶ The images build on the monitor, slice by slice.
19 A Sabina leans closer.
20 A Her smile slackens.
21 D FELIX: Everything okay?
22 D SABINA: Yes.
23 D FELIX: You went quiet.
24 D SABINA: I'm reading.
25 A ¶ The magnet knocks.
26 A Felix watches her for a long moment, and then looks at the screen.
27 D FELIX: Is that --
28 D SABINA: Don't.
29 D FELIX: It's bilateral.
30 D SABINA: I said don't.
31 D FELIX: Sabina.
32 D SABINA: Not until he's out of the machine.
33 A ¶ Felix slowly takes his hand off the dial.
34 D ARMANDO [V.O.] (through speaker): Everything all right in there? You two have gone awful quiet.
35 A ¶ Sabina presses the button.
36 D SABINA: Everything's fine, Mr. Kessler. A few more minutes.
37 A ¶ She releases it and sits very still, and Felix, without a word, reaches over and turns the monitor away from the glass.
38 A ¶ The magnet knocks.
39 A And knocks.

### SCENE s02359 | EXT. SHELLED VINEYARD - DAWN
Detected names (may be incomplete or contain aliases): CORPORAL ELIAS VOSS, SERGEANT MARISKA DOBOS, CHILD
1 A ¶ Rows of broken vines in gray mist.
2 A A stone wall half collapsed.
3 A A crater at its foot, still smoking.
4 A ¶ CORPORAL ELIAS VOSS, 20s, lies in the crater with his rifle across his chest.
5 A He listens to his own breath.
6 A He has not spoken in hours.
7 A ¶ SERGEANT MARISKA DOBOS, 30s, crawls up beside him on elbows, helmet scraped silver.
8 A She lowers herself into the crater without a sound.
9 D DOBOS (whispering): They're gone.
10 D VOSS: Gone where?
11 D DOBOS: Over the ridge.
12 A ¶ He lets out a breath he has held since midnight.
13 A His hand, still locked on the rifle, begins to shake.
14 A She watches it and says nothing, then lays hers over his until the shaking slows.
15 A ¶ A scrape of stone.
16 A They both freeze.
17 A ¶ A boy rises from behind the wall.
18 A A CHILD, 8, in a man's coat, his cheeks smeared with dirt, holding a single bunch of grapes.
19 A He looks at the rifles.
20 A At them.
21 A ¶ He holds out the grapes.
22 A ¶ Voss lowers the rifle.
23 A Dobos takes a grape.
24 A Eats it.
25 A Nods once.
26 A The child nods back and vanishes behind the wall.

### SCENE s01336 | EXT. FROZEN WATERFALL BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): SIR ALARIC VENN, BRYNJOLF
1 A ¶ A bridge of ice spans a gorge where a waterfall hung and froze mid-fall.
2 A Blue light from within the ice.
3 A A thousand-foot drop on either side.
4 A ¶ SIR ALARIC VENN, 40s, silver cuirass, cloak crusted with frost, edges out from the south bank.
5 A At the north end stands BRYNJOLF, 40s, bear-furred, axe on his shoulder, beard threaded with icicles.
6 A ¶ They meet in the middle.
7 A Both stop.
8 D ALARIC: Brynjolf.
9 D BRYNJOLF: Alaric.
10 D ALARIC: Cold morning for a duel.
11 D BRYNJOLF: Cold men fight best.
12 D ALARIC: You came alone.
13 D BRYNJOLF: So did you.
14 A ¶ A silence.
15 A Beneath them, the ice groans, a long deep song.
16 A Neither flinches.
17 D ALARIC: I'd like to cross.
18 D BRYNJOLF: I'd like the same.
19 D ALARIC: Then you step back.
20 D BRYNJOLF (at the same time): Then you step aside.
21 A ¶ They both stop.
22 A Both smile, thinly.
23 A Alaric tilts his head.
24 A Brynjolf mirrors it.
25 D BRYNJOLF [CONT'D] (at the same time): We might freeze here.
26 D ALARIC (at the same time): We might both freeze.
27 A ¶ Brynjolf laughs, short and sharp.
28 A He lowers the axe.
29 A Alaric lowers his hand from the sword hilt.
30 A A crack travels beneath their feet.
31 A ¶ They freeze.
32 A The crack runs between them, glittering, and stops.
33 A They look down, then at each other.
34 D ALARIC [CONT'D]: That was not me.
35 D BRYNJOLF: It was not me.
36 D ALARIC: Then who?
37 A ¶ Above Alaric, a pillar of ice breaks loose from the cliff.
38 A Brynjolf sees it first.
39 A He lunges.
40 A He pulls Alaric down.
41 A The pillar shatters on the bridge where Alaric stood.
42 A The two men roll across the planks, and when they stop, each has a hand on the other's throat.
43 D ALARIC [CONT'D] (strangled): You pulled me down.
44 D BRYNJOLF (strangled): You were standing there.
45 A ¶ They let go.
46 A Both gasp in the thin air.
47 A Wind whistles.
48 D BRYNJOLF [CONT'D]: The bridge is breaking.
49 D ALARIC: Then we cross together.
50 A ¶ They help each other up.
51 A The bridge sings.

### SCENE s00831 | INT. MARCHETTI PAWN AND LOAN, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LOU MARCHETTI, DETECTIVE IRENE KOWALCZYK, ARTIE
1 A ¶ A single green-shaded lamp.
2 A Shelves of wristwatches, trumpets, wedding bands in cigar boxes.
3 A The shop's front shutters are down, and rain taps the steel.
4 A ¶ LOU MARCHETTI, sixties, in suspenders and a rumpled shirt, sits at a rolltop desk counting bills into a drawer.
5 A DETECTIVE IRENE KOWALCZYK, forties, trench coat belted tight, stands by a shelf of cameras.
6 A She turns one over in her hands as if it interests her.
7 A ¶ ARTIE, nineteen, the stock boy, stands in the doorway holding a broom.
8 A He has not swept anything.
9 A ¶ He glances at the desk.
10 A She notices him glance.
11 D KOWALCZYK: Quiet night, Mr. Marchetti.
12 D LOU: They're all quiet. I run a quiet place.
13 A ¶ She sets down the camera and picks up a pocket watch.
14 A She holds it to her ear, then to the light.
15 D KOWALCZYK: Funny. This one's engraved. "To Walter, from Dora, 1951." You buy this last week?
16 D LOU: I buy a lot of things.
17 D KOWALCZYK: Walter Pinski. He was found in the river on Tuesday.
18 A ¶ Lou counts another bill.
19 A He puts it in the drawer, closes the drawer, and rests both hands on top of it.
20 A ¶ Artie lets the broom slide until the handle taps the floor.
21 A Lou looks at him.
22 A Artie picks it up again, too fast.
23 D LOU: Artie. Go home.
24 D ARTIE: It's raining, Mr. Marchetti.
25 D LOU: Go home anyway.
26 A ¶ He leaves.
27 A The bell over the front door rings once, thin and far away.
28 A She sets the watch gently on the desk in front of Lou and sits down opposite him, unbuttoning her coat.
29 D KOWALCZYK: Take your time.
30 A ¶ He looks at the watch for a long moment, then pushes it a few inches back toward her.

### SCENE s00082 | INT. HAUNTED HOUSE CALL CENTER - DAY
Detected names (may be incomplete or contain aliases): HOLLIS PEMBERTON, YASMIN TARHAN, KENJI MORIMOTO, BEATRIX OYELOWO, REGIONAL VP DARIUS ACHTERBERG
1 A ¶ Cubicles painted black.
2 A Plastic cobwebs on the monitors.
3 A Headsets everywhere.
4 A ¶ HOLLIS PEMBERTON (50s, supervisor, cardigan) stirs coffee with a pen.
5 A YASMIN TARHAN (20s, headset) types fast.
6 A KENJI MORIMOTO (30s, headset) stares at a ceiling skeleton.
7 A BEATRIX OYELOWO (40s, headset, rosary around her wrist) murmurs into a script.
8 A ¶ Yasmin slams a key.
9 A The phones fall silent.
10 A Everyone turns.
11 D HOLLIS: Anyone.
12 A ¶ Nobody answers.
13 D KENJI: The line's gone dead.
14 D YASMIN: All of them.
15 A ¶ A door at the back swings open.
16 A REGIONAL VP DARIUS ACHTERBERG (60s, tailored suit, ghost-white skin) glides in and stops under the skeleton.
17 A He looks at each of them.
18 A His mouth is thin.
19 D DARIUS: Who scared the callers away?
20 A ¶ Hollis lowers his pen.
21 A Beatrix crosses herself.
22 A Kenji, very slowly, raises a finger at the skeleton.
23 D KENJI: It was already like that.
24 A ¶ Darius studies the skeleton.
25 A Then the pen in Hollis's hand.
26 A Then the pen's bite marks.
27 D DARIUS: Well done.
28 A ¶ He leaves.
29 A The phones ring all at once.

### SCENE s01563 | EXT. LANTERN MARSH - TWILIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA ACHEBE-LINDQVIST, FERRYWOMAN, SHADOW
1 A ¶ A shallow lake of black water under a violet sky.
2 A Reeds taller than houses.
3 A Thousands of lanterns drift above the surface, each held by a thin silver thread that rises into mist.
4 A The air smells of rain and old coins.
5 A ¶ On a rotted jetty at the edge of the marsh stands SERAPHINA ACHEBE-LINDQVIST, 17, in a ragged green cloak, a lantern pole in her fist.
6 A Her boots are wet to the knee.
7 A Her hair has come loose from its braid.
8 A ¶ Behind her, wrapped in a patchwork shawl, a figure sits on an overturned bucket: THE FERRYWOMAN, ageless, skin like bark, eyes pale as river stones.
9 A She mends a net by feel.
10 A ¶ A third presence stirs in the reeds.
11 A A boy-shaped shadow with a heron's long legs, wading toward them without a sound.
12 D SERAPHINA: Is that him?
13 D FERRYWOMAN: That is what comes.
14 D SERAPHINA: I asked who.
15 D FERRYWOMAN: And I answered.
16 A ¶ The shadow reaches the jetty.
17 A Climbs up, dripping.
18 A It unfolds into a gaunt young man in a ferryman's coat, face white and handsome, eyes dark as wells.
19 A He looks at Seraphina.
20 A Bows.
21 D SHADOW: Greetings.
22 D SERAPHINA: Who are you?
23 D SHADOW: Whoever you need.
24 D FERRYWOMAN: Do not trust him.
25 D SHADOW: She never does.
26 A ¶ Seraphina steps back.
27 A The lantern pole trembles.
28 A The threads overhead hum.
29 D SERAPHINA: I came for my brother.
30 D SHADOW: I know.
31 D SERAPHINA: They said you took him.
32 D SHADOW: They say a great deal.
33 D SERAPHINA: Did you?
34 A ¶ The Shadow glances at the Ferrywoman.
35 A She does not look up from her net.
36 D SHADOW: Your brother is a lantern. Third row, left of the willow.
37 D SERAPHINA: A lantern?
38 D SHADOW: They all are, eventually.
39 A ¶ Seraphina looks out at the thousands of lights.
40 A They sway, gentle, indifferent.
41 D SERAPHINA: I want him back.
42 D SHADOW: I can make an exchange.
43 D FERRYWOMAN: Seraphina.
44 D SERAPHINA: What exchange?
45 D SHADOW: A year of your life.
46 D SERAPHINA: A year.
47 D SHADOW: For a year of his.
48 A ¶ The Ferrywoman drops her net.
49 A It slides off her knee into the water, and sinks.
50 D FERRYWOMAN (low): Listen to me, child. He is not what he says.
51 D SHADOW: I am exactly what I say.
52 D FERRYWOMAN: Then tell her your name.
53 A ¶ The Shadow smiles for the first time.
54 A A smile like a closing door.
55 D SHADOW: Orren.
56 A ¶ At the word, every lantern on the marsh flares, a thousand white flames at once, and Seraphina cries out and raises an arm against the glare.
57 A Orren stands in the light, untouched, polite, waiting.

### SCENE s01828 | INT. DESALINATION HABITAT - CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ENGINEER PRIYA NAIR, HELMUT KASSEL, UNIT SEVEN
1 A ¶ Seabed pressure hum.
2 A Condensation on every pipe.
3 A Emergency strips at ankle height.
4 A ¶ ENGINEER PRIYA NAIR, 40s, sits on the floor against a bulkhead, a toolkit open beside her.
5 A She is rewiring a panel by feel.
6 A Her hands are steady.
7 A ¶ DR. HELMUT KASSEL, 60s, stands over her in a gray sweater.
8 A He holds a clipboard he has stopped writing on.
9 A ¶ A drone, UNIT SEVEN, a squat gray cylinder on treads, idles at the end of the corridor, blue eye dimming and brightening.
10 D HELMUT: Pressure's down four percent.
11 D PRIYA: I know.
12 D HELMUT: Since the shift change.
13 D PRIYA: I said I know.
14 A ¶ She strips a wire with her teeth, spits the insulation.
15 A Helmut watches her do it.
16 D HELMUT: You're not asking me to hold the light.
17 D PRIYA: You'd drop it.
18 A ¶ He sets the clipboard on the floor, clicks on the penlight, and aims it at the panel.
19 A She does not thank him.
20 A ¶ The drone rolls forward a meter and stops.
21 A Its eye turns amber.
22 D UNIT SEVEN [V.O.] (flat synthetic voice): Reminder. Evacuation capsule capacity is two. Habitat population is three.
23 A ¶ Priya's hands stop.
24 A Helmut's penlight wavers.
25 D PRIYA: Unit Seven. Mute.
26 D UNIT SEVEN [V.O.]: Muting is not permitted during a pressure advisory.
27 D PRIYA: Then roll back.
28 A ¶ The drone rolls back.
29 A A meter.
30 A Two.
31 A The amber stays on.
32 A ¶ Helmut crouches.
33 A He puts a hand on Priya's wrist.
34 A She looks at it, then at him.
35 A She does not pull away.
36 D HELMUT: How long until it holds?
37 D PRIYA: An hour. Maybe three.
38 D HELMUT: And if it doesn't?
39 A ¶ She shrugs.
40 A He nods slowly.
41 A He takes his hand back, picks up the clipboard, and writes something.
42 A Tears off the page.
43 A Folds it.
44 A Sets it beside her toolkit.
45 D PRIYA: What is that?
46 D HELMUT: Names, for the capsule. In order.
47 A ¶ She doesn't open it.
48 A She goes back to the panel, and the wire slides home with a small click.
49 A ¶ The pipes overhead shudder once.
50 A A bead of water forms on the ceiling, hangs, and falls onto the folded paper.
51 A ¶ Priya covers it with her palm.
52 A She looks up the corridor at the drone's amber eye.
53 D PRIYA [CONT'D]: Unit Seven. Tell the surface we are fine.
54 D UNIT SEVEN [V.O.]: Transmitting. Confirm: you are fine?
55 A ¶ She says nothing.
56 A The eye returns to blue.
57 A ¶ Helmut slides down the wall until he is sitting beside her.
58 A They watch the panel.
59 A The pressure gauge ticks up one notch, then holds.
60 D HELMUT (quietly): Three percent.
61 D PRIYA: Two.
62 A ¶ He laughs, softly, and closes his eyes.

### SCENE s01287 | EXT. MANGROVE SWAMP - DUSK
Detected names (may be incomplete or contain aliases): ELSPETH GRAY, WANJIRU KARIUKI, HENRIK DAHL, YUSUF AL-RASHID
1 A ¶ Roots like knuckles.
2 A Black water, glassy, ringed with mosquitoes.
3 A A heavy sky bruised orange and green.
4 A The air tastes of rot and salt.
5 A ¶ Four people wade single file, waist-deep.
6 A Packs held over their heads.
7 A ¶ ELSPETH GRAY, 50s, in a drenched canvas hat, leads.
8 A Her face is lined, sunburnt, patient.
9 A She tests each step with a bamboo pole.
10 A ¶ WANJIRU KARIUKI, 30s, close behind, wears a field vest with too many pockets.
11 A Her braid is plastered to her neck.
12 A She carries the sat-phone, dead for three days.
13 A ¶ HENRIK DAHL, 40s, tall and blond, grey with fever, stumbles through the rear.
14 A His glasses are cracked.
15 A ¶ YUSUF AL-RASHID, 20s, the youngest, carries Henrik's pack as well as his own.
16 A He grins when he thinks no one's watching.
17 D ELSPETH: Roots ahead. Step high.
18 D WANJIRU: How far to the river?
19 D ELSPETH: Two miles. Maybe three.
20 D WANJIRU: Maybe is an expensive word.
21 D ELSPETH: It's the only one I've got.
22 A ¶ She plants her pole.
23 A Water ripples around her thighs.
24 A She stops.
25 D ELSPETH [CONT'D]: Stay still.
26 A ¶ They do.
27 A A long beat.
28 A Frogs fall silent.
29 A ¶ Something large breaks the surface twenty feet away.
30 A A dark ridge, a pair of eyes.
31 A It glides toward the nearest root and slides beneath it.
32 A ¶ Nobody breathes.
33 D YUSUF (whispering): Is it a log?
34 D ELSPETH: It's not a log.
35 D YUSUF: Is it going to eat us?
36 D WANJIRU: It's been eating the whole way. We're just the dessert.
37 D HENRIK (hoarse): Wanji.
38 D WANJIRU: Henrik. Don't talk.
39 D HENRIK: I need to sit.
40 D WANJIRU: You can't sit. It's a swamp.
41 D HENRIK: I'm going to sit anyway.
42 D YUSUF: I've got him.
43 A ¶ He braces Henrik.
44 A Elspeth glares at the root where the shape vanished.
45 A She waves a hand: forward.
46 A ¶ They move.
47 A Slowly, silently, a procession of damp shadows across the dusk.
48 D ELSPETH: Single file. Keep to the left bank. The right is deeper.
49 D WANJIRU: How do you know?
50 D ELSPETH: I came here thirty years ago. With my husband.
51 D WANJIRU: What happened?
52 D ELSPETH: He went to the right bank.
53 A ¶ Nobody asks more.
54 A ¶ They wade on.
55 A Henrik coughs, a cracked wet sound.
56 A Yusuf pats his back.
57 A Wanjiru adjusts the sat-phone on her shoulder.
58 A She tries the power switch.
59 A Nothing.
60 D WANJIRU [CONT'D] (under her breath): Come on. Come on.
61 A ¶ The sky darkens a shade.
62 A Fireflies bloom in the branches overhead, hundreds, drifting down like green sparks.
63 D YUSUF: It's beautiful.
64 D HENRIK: It's malaria.
65 D YUSUF: Can't it be both?
66 D HENRIK (a faint smile): Possibly.
67 D ELSPETH: Quiet now. We cross the channel in front of us. Hold hands.
68 A ¶ They link: Elspeth, Wanjiru, Yusuf, Henrik.
69 A A chain across the black water.
70 D ELSPETH [CONT'D]: On three. One. Two.
71 A ¶ Something SPLASHES behind them.
72 D ELSPETH [CONT'D]: Go!
73 A ¶ They plunge forward.
74 A Water surges to their chests.
75 A Yusuf pulls Henrik, who is half-floating.
76 A Wanjiru holds the phone high.
77 A Elspeth thrashes ahead, bamboo pole cutting a path.
78 A ¶ They reach the far bank.
79 A Haul themselves up into mud and roots.
80 A Collapse, gasping.
81 A ¶ Behind them, a long ripple fades across the channel.
82 D WANJIRU (laughing, crying): We made it.
83 D ELSPETH: We made the channel.
84 D YUSUF: There's more?
85 D ELSPETH: Two miles.
86 A ¶ He lies back.
87 A Stares at the sky.
88 A Fireflies drift across his face.
89 D YUSUF: Okay.

### SCENE s00386 | INT. THE CROWN AND ANCHOR TAVERN - 1783 - NIGHT
Detected names (may be incomplete or contain aliases): GILES, MARGUERITE, JEB, CAPTAIN SILAS
1 A ¶ Low beams.
2 A A fire.
3 A Tallow smoke.
4 A A cracked auction block stands in the middle of the floor, and the room is crowded to the walls.
5 A ¶ GILES, 50, the auctioneer, stands on the block with a gavel and a face like wet bread.
6 A MARGUERITE, 30, a widow in good black, sits at the front, hands folded.
7 A JEB, 20s, a ship's boy, hovers behind her chair.
8 A CAPTAIN SILAS, 60, in a salt-stiff coat, lounges near the hearth.
9 D GILES: Lot forty. One brig, the Halcyon, hull sound, rigging poor. Do I hear fifty guineas?
10 D CAPTAIN SILAS: Forty.
11 D MARGUERITE: Sixty.
12 D JEB: Missus, we cannot afford sixty.
13 D CAPTAIN SILAS: Sixty-five.
14 D MARGUERITE: Seventy.
15 D GILES: Seventy from the lady. Do I hear seventy-five?
16 D JEB: Missus!
17 D CAPTAIN SILAS: Seventy-five.
18 D MARGUERITE: Eighty.
19 D GILES: Eighty. Going once.
20 A ¶ The room hushes.
21 A Silas looks at her across the smoke.
22 A She looks back.
23 A Neither blinks.
24 A He lifts a single finger.
25 D CAPTAIN SILAS: Ninety.
26 A ¶ Marguerite stands.
27 A She turns to Jeb, takes the purse from his belt, and puts it on the block.
28 D MARGUERITE: That is everything I own, Mr. Giles.
29 D GILES: It's one hundred and twelve.
30 D MARGUERITE: Then it is a hundred and twelve.
31 A ¶ Silas laughs, then stops.
32 A She has not moved.
33 D GILES: Sold.

### SCENE s02170 | INT. ICE HARVESTER GALLEY - SATURN RING ORBIT - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE, TOBIAH, MIRA, KOZLOV, SENNA
1 A ¶ Frost on every surface.
2 A Red strobe.
3 A The hull groans.
4 A ¶ ADAEZE (40s, flight engineer, burn-scarred hands) jams a pry bar into a sealed hatch.
5 A TOBIAH (20s, rookie, suit two sizes too big) holds a failing lamp.
6 A MIRA (30s, medic) counts breaths off a wrist display.
7 A ¶ KOZLOV (50s, captain, grey stubble) slaps a dead console.
8 A Nothing.
9 A ¶ A small shape in the vent grate.
10 A SENNA (14, stowaway, hollow-eyed) watching.
11 D TOBIAH: Pressure's dropping. Forty percent.
12 D ADAEZE: Hold the light still!
13 D MIRA: Who is that? In the vent?
14 D KOZLOV: Not now, Mira.
15 D TOBIAH: Thirty-five!
16 D ADAEZE: Then stop talking and pull!
17 D MIRA: Kid. Kid, come out.
18 D SENNA: It's behind the wall.
19 D KOZLOV: Both of you, quiet.
20 A ¶ Silence.
21 A Scratching inside the bulkhead.
22 A Moving.
23 A Fast.
24 D KOZLOV: We leave. Now.
25 D ADAEZE: Hatch isn't open!
26 D SENNA: It heard you.
27 A ¶ The bulkhead BUCKLES.
28 A Everyone freezes.
29 D TOBIAH: I'm not going first!
30 D MIRA: I'm taking the kid!

### SCENE s00749 | INT. TAXIDERMIST'S WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): BASTIAN VOLKERS, SOLENE, MERIEL, ROYSTON, GIRL, PIA
1 A ¶ A long room of glass eyes.
2 A Foxes, owls, a stag with one antler snapped.
3 A Moonlight crawls over the benches.
4 A A power cut has stopped the wall clock at 2:14.
5 A ¶ Five people stand in the dark with a single torch: BASTIAN VOLKERS, forties, who owns the place; his sister SOLENE, thirties; their cousin MERIEL, twenties; the neighbour ROYSTON, sixties; and a GIRL, perhaps ten, in a nightgown, whom no one has invited.
6 D BASTIAN: Who let you in?
7 A ¶ The Girl says nothing.
8 A She stares at the stag.
9 D SOLENE: Bas, she's soaked. Look at her feet.
10 D MERIEL: Where are your parents, sweetheart?
11 A ¶ The Girl lifts a hand and points.
12 A Not at any of them.
13 A At the stag.
14 A Her fingers tremble.
15 D ROYSTON (low): Child, that's a dead deer.
16 D GIRL: He said I could sleep in him.
17 A ¶ They freeze.
18 A The torch jerks.
19 A Light skates across the glass eyes, and every one seems to turn.
20 D BASTIAN: Who said?
21 D GIRL (whispering): My name is Pia.
22 A ¶ Behind her, the stag's head slowly lowers.
23 D PIA (smiling): He's very warm.
