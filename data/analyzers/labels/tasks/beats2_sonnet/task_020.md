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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00020.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01472_0 | INT. SALT MINE - ELEVATOR CAGE - NIGHT
Detected names (may be incomplete or contain aliases): KITE, TOBIAS, RAFF, MOUSE
1 A ¶ Two hundred meters down.
2 A White walls.
3 A Dripping brine.
4 A ¶ Four figures in grey coveralls crowd the cage.
5 A Hard hats.
6 A Headlamps.
7 A ¶ RAFFERTY "RAFF" OYELARAN-STEIN.
8 A Late 40s.
9 A Planner.
10 A Calm hands.
11 A ¶ MIRELA "MOUSE" DRAGOMIR.
12 A 20s.
13 A Safecracker.
14 A Chews her lip.
15 A ¶ TOBIAS VANTERPOOL.
16 A 60s.
17 A Retired mine foreman.
18 A Knows every shaft.
19 A ¶ KENJI "KITE" NAKAGAWA-REYES.
20 A 30s.
21 A Driver.
22 A Jittery.
23 A ¶ The cage shudders.
24 A Stops.
25 D KITE: We stopped.
26 D TOBIAS: We're there.
27 D RAFF: Lamps off. On my count.
28 A ¶ They click off.
29 A Black.
30 A A drip.
31 A A breath.
32 D RAFF [CONT'D]: Mouse. Where's the vault?
33 D MOUSE: Four hundred meters east. Behind a wall of rock salt.
34 D RAFF: Tobias?
35 D TOBIAS: Old drift. Sealed in sixty-four. I know the way, Raff.
36 D RAFF: Kite, you stay with the cage.
37 D KITE: Why do I always stay with the cage?
38 D RAFF: Because the cage is how we leave.
39 A ¶ Lamps on.
40 A They step out.
41 A Salt crunches underfoot.

### SCENE s01980 | INT. DEEP-SPACE ICE HARVESTER, CARGO BAY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): TECHNICIAN, DRONE, PALOMA, WINNOW
1 A ¶ A hold full of frosted cylinders.
2 A Cold blue light.
3 A A walkway runs between stacked ice cores.
4 A Red alert strobes at the far door.
5 A ¶ A TECHNICIAN (30s, coveralls, tool belt, a cracked visor) crouches at an open panel, wiring fizzing against her gloves.
6 A Hovering above her, held in place by a bracket on the ceiling, is a pale maintenance drone with a single lens.
7 A A speaker grille glows beneath.
8 D TECHNICIAN: Hold the light still.
9 D DRONE: I am holding it still. You are shaking.
10 D TECHNICIAN: The cold's doing that.
11 D DRONE: The cold is minus four. Your hands shook at minus eleven yesterday.
12 D TECHNICIAN: Don't narrate me.
13 D DRONE: Then stop giving me things to narrate.
14 A ¶ She slams the panel shut.
15 A Sparks fly, and the strobe goes dark.
16 D TECHNICIAN: Okay. Okay. We have twenty minutes of heat, the reactor's venting on the wrong side, and the captain's gone.
17 D DRONE: The captain is not gone. The captain is in the airlock.
18 D TECHNICIAN: In the airlock is gone, Winnow.
19 D DRONE: You named me.
20 D TECHNICIAN: I didn't name you.
21 D DRONE: You just said Winnow.
22 A ¶ She stops with her hand on a cylinder.
23 A The drone's lens irises open and closes.
24 D TECHNICIAN: It's what Dad called the little one on his ship.
25 D DRONE: Then my name is Winnow.
26 D TECHNICIAN: I'm Paloma.
27 D DRONE: I know.
28 D PALOMA (laughing despite herself): Of course you do.
29 A ¶ The technician, PALOMA, sags against the cylinder.
30 A The drone drifts down from the bracket, its tiny rotors blurring, and hangs at her eye level.
31 D WINNOW: Paloma. I can reroute the heat but the cost is the cargo.
32 D PALOMA: How much cargo?
33 D WINNOW: All of it. Every core. Three years of ice.
34 D PALOMA: We'd have nothing to sell.
35 D WINNOW: You would have a ship.
36 D PALOMA: And a captain.
37 D WINNOW: The captain has twenty minutes of air in the lock. I can open it if I reroute. You could pull him out. It is the only variable that buys both of you time.
38 D PALOMA: Do it.
39 D WINNOW: It would cost the whole voyage.
40 D PALOMA: He has a daughter. I've seen the picture.
41 D WINNOW: So have I. I was there when it was taken.
42 A ¶ A long moment.
43 A In the cold hold, only the hum of the failing reactor.
44 D PALOMA: Winnow. Do it.
45 D WINNOW: Rerouting now. Run, Paloma.
46 A ¶ The cylinders glow amber one by one as meltwater starts to pour down the walkway.
47 A The drone shoots toward the far door.
48 A The technician bolts after it, boots splashing through the new river, and as she reaches the airlock, a red light turns green.

### SCENE s01537 | INT. MUSEUM OF CLOCKS - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODETTE FONTAINE-ABARA, GUS, RUDZINSKI, LI WEI-NAKAMURA, THEO BRANDT
1 A ¶ Hundreds of clocks ticking out of step.
2 A Moonlight on brass.
3 A ¶ Four figures in black stand before a glass case holding a jewelled pocket watch.
4 A ¶ MADAME ODETTE FONTAINE-ABARA, 50s, elegant, gloves on, studies the lock.
5 A ¶ AUGUST "GUS" RUDZINSKI, 30s, enormous, holds a duffel.
6 A He sweats.
7 A ¶ LI WEI-NAKAMURA, 20s, crouches at the alarm box, tools laid out like surgical instruments.
8 A ¶ THEO BRANDT, 40s, nervous, glances at the corridor.
9 D LI: Thirty seconds.
10 D ODETTE: Take twenty-nine.
11 A ¶ She taps the glass.
12 A He nods without looking up.
13 D THEO: The guard comes at two.
14 D GUS: It's one fifty-eight.
15 D THEO: Which clock?
16 D GUS: All of them.
17 A ¶ They all look around.
18 A The clocks disagree by hours.
19 D ODETTE: Quiet.
20 A ¶ The alarm box clicks.
21 A A green light.
22 D LI: Done.
23 A ¶ She lifts the glass.
24 A He lowers the watch into the duffel with enormous tenderness.
25 A ¶ Footsteps.
26 A A flashlight sweeps the doorway.
27 A ¶ All four freeze.
28 A He holds his breath.
29 A She extinguishes her torch.
30 A They duck behind the case as one.
31 A ¶ The beam passes.
32 A A cough.
33 A The footsteps retreat.
34 A ¶ Odette exhales.
35 A Raises two fingers.
36 A They slip out, one by one, into the night.

### SCENE s02315 | INT. ROOFTOP BAR, HOTEL TERRACE - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, VIVIENNE ASHFORD-LANE, BARTENDER, DOMINIC, QUENTIN
1 A ¶ Candles in glass chimneys.
2 A A city of lights twenty floors down.
3 A Jazz from a speaker.
4 A The bar is nearly empty.
5 A A velvet rope hangs from brass posts near the stairwell door.
6 A ¶ A STRANGER in a trench coat sits alone at the end of the bar, a half-finished martini before him.
7 A His hat is pulled low.
8 A On his sleeve is a small spot of dried blood.
9 A ¶ VIVIENNE ASHFORD-LANE, thirty-five, in an emerald gown and long gloves, enters through the stairwell door.
10 A She pauses.
11 A She crosses to the bar and takes the stool beside his.
12 A The BARTENDER, DOMINIC, fifty, polishes a glass with a white cloth.
13 D VIVIENNE: Whisky. Neat.
14 D DOMINIC: Right away, Miss Ashford-Lane.
15 A ¶ The stranger turns his head.
16 A He studies her.
17 A She does not meet his gaze.
18 D STRANGER: You come here often?
19 D VIVIENNE: Every Thursday.
20 D STRANGER: Then you'll know the barman's been paid to forget me.
21 A ¶ Dominic's polishing stops.
22 A The glass rings against the bar top.
23 D VIVIENNE (quietly): Who are you?
24 D STRANGER: Call me Quentin.
25 D QUENTIN (lifting his martini): I'm the man who knows what your husband did on Tuesday.
26 A ¶ She sets down her glove.
27 A Her pulse jumps in her throat.
28 A She reaches for her purse.
29 A Quentin's hand closes over her wrist, not roughly.
30 D QUENTIN [CONT'D]: Don't. Dominic has a gun under the register, and I have a better one.
31 D DOMINIC (softly): Miss Ashford-Lane, I'm sorry.
32 D VIVIENNE: You work for him?
33 D DOMINIC: For both of you. Different days.
34 A ¶ Quentin releases her wrist.
35 A He sets a folded envelope on the bar and slides it across.
36 D QUENTIN: Open it.
37 A ¶ She does.
38 A A single photograph.
39 A Her husband, unmoving, at the foot of a staircase.
40 A She exhales.
41 A For a long moment she says nothing.
42 D VIVIENNE: Thank you.
43 D QUENTIN: That's it?
44 D VIVIENNE: That's it.
45 A ¶ She finishes her whisky.
46 A She leaves a very large tip.

### SCENE s02269 | EXT. RUINED CATHEDRAL SQUARE - DUSK
Detected names (may be incomplete or contain aliases): LIEUTENANT CORDELIA BRANDT, SERGEANT OSEI, PRIVATE MIKHAIL
1 A ¶ The nave's roof is gone.
2 A The columns stand like charred teeth against a violet sky.
3 A Rubble lies in drifts, and in the middle of it, fallen from its niche, an enormous stone angel lies on her back with her wings broken, her face turned to the clouds.
4 A ¶ LIEUTENANT CORDELIA BRANDT, thirties, hatless, her fair hair gone dark with dust, sits on the angel's chest with a map across her knees and a cigarette burned down to the filter.
5 A SERGEANT OSEI, forties, tall, broad, a rifle slung across his back, crouches to refill a canteen from a cracked fountain, and PRIVATE MIKHAIL, nineteen, thin as a rake, leans against a pillar with his eyes closed and his arms wrapped around a bundle of blankets and every so often his lips move, as though in prayer or in sleep.
6 A ¶ For a long time, none of them speaks.
7 A The wind lifts ash off the stones.
8 D OSEI: Lieutenant, it's almost dark.
9 D BRANDT: I know.
10 D OSEI: Do we stay?
11 D BRANDT: For tonight.
12 A ¶ She folds the map.
13 A Puts it in her jacket.
14 A Her fingers linger on the edge of the angel's stone wing, and then she takes them away.
15 D OSEI: It's a good place.
16 D BRANDT: It's a church.
17 D OSEI: It's a roof with no roof.
18 A ¶ She huffs a breath that might be a laugh.
19 A Mikhail opens his eyes.
20 D MIKHAIL: Sorry. I wasn't sleeping.
21 D OSEI: You were sleeping standing up.
22 D MIKHAIL: I was resting my eyes.
23 D OSEI: Resting. Mm.
24 A ¶ Mikhail slides down the pillar to sit.
25 A He unwraps the blankets, handing one to Osei without being asked.
26 A Osei nods thanks and shakes it out.
27 A They spread it on the stones beside the angel's head.
28 D BRANDT: Where's the radio?
29 D MIKHAIL: Dead. I tried again an hour ago.
30 D BRANDT: Batteries?
31 D MIKHAIL: Gone.
32 D BRANDT: Then we're on our own.
33 D OSEI: We have been.
34 A ¶ She looks at him.
35 A He keeps his eyes on the canteen.
36 D BRANDT: Sergeant, if I told you we'd be home by Christmas, would you believe me?
37 D OSEI: No, Lieutenant.
38 D BRANDT: Good.
39 A ¶ She smiles, small and tired.
40 A Mikhail, half-asleep, mumbles something and curls against the blanket.
41 D OSEI: What did he say?
42 D BRANDT: His mother's name, I think.
43 A ¶ Osei lays his own blanket over the boy's shoulders.
44 A He sits, back against the angel's stone hip, the canteen between his knees.
45 A Brandt slides down to sit beside him.
46 A ¶ For a time they watch the sky darken, the first star appearing between two broken columns.
47 D OSEI: My grandmother said every church has an angel left standing.
48 D BRANDT: Yours fell.
49 D OSEI: Then she's resting.
50 A ¶ Brandt rests her head against the cold stone of the wing.
51 A Her cigarette, long out, drops from her fingers.
52 A Nobody picks it up.

### SCENE s02430 | EXT. SLED DOG RACE - MIDPOINT CHECKPOINT - NIGHT
Detected names (may be incomplete or contain aliases): NILA KOYUK, HESTER VANCE, RACE MARSHAL
1 A ¶ A frozen lake.
2 A Wind carves the snow into long, sharp ridges.
3 A A canvas tent glows orange at the shore, lit by a generator whose hum is swallowed by the dark.
4 A Beyond it, forty sled dogs lie curled in straw beds, steam rising off their backs.
5 A ¶ A battered radio on a folding table crackles.
6 A A hand-lettered sign flaps from a pole: "CHECKPOINT 6 - 480 MILES TO GO."
7 A ¶ NILA KOYUK (30s, musher, parka stiff with ice, goggles pushed up) stands at the edge of the straw, counting dogs under her breath.
8 A Eleven.
9 A Twelve.
10 A Thirteen.
11 A She stops.
12 A Counts again.
13 A ¶ DR. HESTER VANCE (50s, race veterinarian, round glasses fogged white) kneels beside a sleek husky named Biscuit.
14 A She runs her gloved fingers along the dog's foreleg.
15 D VANCE: Easy, girl. Easy.
16 D NILA: How's the wrist?
17 D VANCE: She's favoring it. Not broken. Not good, either.
18 D NILA: She's my lead dog, Doc.
19 D VANCE: Then she shouldn't lead tonight.
20 A ¶ Nila crouches.
21 A The wind pushes at her hood.
22 A She takes Biscuit's face in both hands.
23 A The dog licks her chin.
24 D NILA: Hey, Biscuit. Hey. You tired?
25 A ¶ The dog thumps her tail.
26 A Nila exhales, long and slow.
27 A ¶ The radio crackles.
28 A RACE MARSHAL (V.O.) comes through, flat with distance.
29 D RACE MARSHAL [V.O.] (over radio): Checkpoint Six, this is Marshal. Weather's closing from the north. Teams have a two-hour window.
30 D NILA: Copy, Marshal. Two hours.
31 D RACE MARSHAL [V.O.] (over radio): Koyuk, you're in third. Chandler is forty minutes ahead.
32 A ¶ Nila's jaw tightens.
33 A Vance glances up.
34 D VANCE: Forty minutes isn't far.
35 D NILA: It's far enough.
36 A ¶ She stands.
37 A Brushes snow from her knees.
38 A Looks across the lake, where nothing but white and darkness meets.
39 D NILA [CONT'D]: Doc, what would you do?
40 D VANCE: I'd scratch.
41 D NILA: I mean really.
42 D VANCE: Really? I'd scratch.
43 A ¶ Nila laughs, short and bitter.
44 D NILA: That's not very sporting.
45 D VANCE: I'm a vet. I treat the ones who can't speak. You know what she's saying right now.
46 A ¶ Both women look at Biscuit.
47 A The dog limps one step, then another, then stops and looks back at Nila, ears forward.
48 D NILA: She wants to go.
49 D VANCE: She wants to please you. There's a difference.
50 A ¶ Silence.
51 A The generator coughs.
52 A The wind rises.
53 A ¶ Nila walks to the sled.
54 A Checks the brush bow.
55 A Runs a hand along the runner.
56 A Doesn't pick up the snow hook.
57 D NILA (to herself): Two hours.
58 A ¶ She turns back.
59 D NILA [CONT'D]: Doc, give me a second lead. Anyone.
60 D VANCE: Pepper's strong. Not fast.
61 D NILA: Strong is fine.
62 A ¶ Vance stands and whistles.
63 A A gray dog bounds out of the straw, tail whipping.
64 D VANCE: Pepper. You're promoted.
65 D NILA (to the dog): Don't let me down.
66 A ¶ Pepper barks once, bright and sure.
67 A ¶ The radio crackles again.
68 D RACE MARSHAL [V.O.] (over radio): Koyuk, confirm you're rolling?
69 A ¶ Nila lifts the handset.
70 A Looks at Vance.
71 A Vance gives the smallest nod.
72 D NILA (into the radio): Rolling, Marshal. Give me a green flag.
73 A ¶ She hangs up.
74 A Pulls her goggles down.
75 D NILA [CONT'D]: Doc, if it goes bad--
76 D VANCE: Then I'll be here with a heater and a flask.
77 D NILA: Sounds like a plan.
78 D VANCE: It's the only one I've got.
79 A ¶ Nila steps onto the runners.
80 A Biscuit watches her go from the straw.
81 A Her tail slowly sinks.
82 A ¶ Vance kneels beside the old lead dog.
83 D VANCE [CONT'D] (whispering): She'll be back, girl.
84 A ¶ The sled lurches.
85 A Thirteen dogs pull into the blue dark.
86 A The tent shrinks to a single orange spark, then nothing.
87 A ¶ Vance stays kneeling, one hand on Biscuit's flank, until the radio crackles with the next team.

### SCENE s02211 | EXT. DESERT CANYON FLOOR - DAY
Detected names (may be incomplete or contain aliases): RIGO, SALAZAR, WOMAN, BLUE BLAZER, HEAVYSET MAN, GIRL, TESS, IMANI
1 A ¶ Orange rock, white sky.
2 A A dry wash cuts the canyon floor.
3 A A crashed single-engine plane lies nose-down in the sand, one wing bent.
4 A ¶ Four survivors sit in the narrow shade of the other wing.
5 A ¶ RIGOBERTO "RIGO" SALAZAR (40s, pilot, blood-crusted shirt) tears a seat cushion for padding.
6 A A WOMAN IN A BLUE BLAZER (30s, torn sleeve) rations water into a tin cap.
7 A A HEAVYSET MAN (50s, glasses cracked) stares at the horizon.
8 A A teenage GIRL (15, headphones around her neck) draws in the dust with a stick.
9 A ¶ The woman hands the cap to the man.
10 A He sips and passes it to the girl.
11 A She drinks, hesitates, and offers it to Rigo, who shakes his head.
12 D RIGO: Keep it.
13 D WOMAN: You haven't had any.
14 D RIGO: I'm fine.
15 D WOMAN: You're bleeding.
16 D RIGO: It's old blood.
17 A ¶ She takes the cap back.
18 A He looks at the others and clears his throat.
19 D RIGO [CONT'D]: We stay with the plane. They look for planes.
20 D HEAVYSET MAN: Who's they?
21 D RIGO: Search and rescue.
22 D HEAVYSET MAN: They know we're down?
23 D RIGO: They will.
24 A ¶ The girl scratches a circle in the sand.
25 A The woman watches it.
26 A The man in glasses looks at the girl, and then at the sky, and then at his hands.
27 D WOMAN: He's lying.
28 D HEAVYSET MAN: Who?
29 D WOMAN: The pilot.
30 D RIGO: I'm Rigo.
31 D WOMAN: You're lying, Rigo.
32 D RIGO: I'm telling the truth as I know it.
33 A ¶ The Heavyset Man lowers his head.
34 A A single dust devil rises from the wash, spins across the canyon floor, and dies against the wreck.
35 A Nobody moves.
36 D GIRL (very quiet): My name's Tess.
37 A ¶ Everyone looks at her.
38 D TESS: In case it matters.
39 D WOMAN: It matters, Tess.
40 D TESS: It's just. Nobody asked.
41 A ¶ The Heavyset Man lifts his head.
42 D HEAVYSET MAN: I'm Gideon.
43 A ¶ The Woman in the Blue Blazer closes her eyes.
44 D WOMAN (after a moment): Imani.
45 A ¶ The four of them sit in the narrow shade, strangers with names.
46 D IMANI: Rigo. How far to the road?
47 D RIGO: Far enough.

### SCENE s01848_1 | INT. SALOON - CONTINUOUS
Detected names (may be incomplete or contain aliases): SHERIFF PIKE, CRANE, BARKEEP, JONAH PIKE
1 A ¶ Dim.
2 A Empty tables.
3 A A man at the bar, his back to her.
4 A Black hat.
5 A Long coat.
6 A He does not turn.
7 A ¶ She steps in.
8 A Boots on boards.
9 A Slow.
10 A ¶ He lifts a glass.
11 A Drinks.
12 D SHERIFF PIKE: Mr. Crane.
13 D CRANE: Sheriff.
14 D SHERIFF PIKE: You're a long way from Laramie.
15 D CRANE: He's longer.
16 D SHERIFF PIKE: Who?
17 D CRANE: The man you're looking for.
18 A ¶ She moves to the bar.
19 A Stands two stools down.
20 D SHERIFF PIKE: That so?
21 D CRANE: Ask the barkeep.
22 A ¶ She looks.
23 A Behind the bar a man slumps on the floor, hands tied, mouth gagged.
24 A The BARKEEP, 50s.
25 A His eyes plead.
26 A ¶ She keeps her face still.
27 D SHERIFF PIKE: Untie him.
28 D CRANE: Don't think so.
29 D SHERIFF PIKE: I wasn't asking.
30 A ¶ He turns, finally.
31 A Pale eyes.
32 A A thin smile.
33 D CRANE: Augusta. We both know who's in the back room.
34 A ¶ Her hand tightens on the holster.
35 D SHERIFF PIKE: Say it.
36 D CRANE: Your brother.
37 A ¶ She says nothing.
38 A The storm howls against the shutters.
39 A A floorboard groans overhead.
40 D CRANE [CONT'D]: He wants to talk.
41 D SHERIFF PIKE: Does he.
42 D CRANE: Before the hanging.
43 A ¶ She draws.
44 A So does he.
45 A Both guns level.
46 A Neither fires.
47 A The barkeep whimpers.
48 A ¶ From the back stair, a voice, rough and tired.
49 D JONAH [O.S.]: Gus. Put it down.
50 A ¶ She doesn't.
51 A Crane doesn't.
52 A The piano, somewhere, plays the same bar again.
53 A ¶ Then she lowers the gun.
54 A Crane smiles.
55 A She turns to the stair.
56 D SHERIFF PIKE (softly): Jonah.
57 A ¶ The stair creaks.
58 A JONAH PIKE, 40s, her brother, descends out of the dark.
59 A Shackles on his wrists.
60 A A gaunt, unshaven man.

### SCENE s01275 | INT. BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): LEAGUE FINALS, COACH DELPHINE MARCHAND, GRETA LINDQVIST, RUBEN ACOSTA
1 A ¶ Neon pins.
2 A A banner: LEAGUE FINALS - SPARE ME LANES.
3 A Most of the crowd has gone home.
4 A Lane 12 is lit.
5 A ¶ COACH DELPHINE MARCHAND, 50s, silver bob, orange cardigan, sits with a clipboard on her knee.
6 A ¶ GRETA LINDQVIST, 30s, anchor bowler, towels her hands.
7 A Her shoulders are rounded in defeat.
8 A ¶ RUBEN ACOSTA, 20s, rookie, sits on the ball return with his shoes untied.
9 D DELPHINE: Tenth frame. You left the seven-ten.
10 D GRETA: I know what I left.
11 D RUBEN: It was a hard split.
12 D DELPHINE: It was the hardest split.
13 D GRETA: I shouldn't have gone for it.
14 D DELPHINE: You went for it because it was there.
15 D RUBEN: She was winning on pins, Coach.
16 D GRETA: Don't defend me.
17 D DELPHINE: Ruben, let her talk.
18 D RUBEN: I'm just saying.
19 D GRETA: Eleven years I've been bowling with this team. Eleven.
20 D DELPHINE: Twelve.
21 D GRETA: Twelve. And in twelve years we've never won the final. Not once. And I stood up there tonight and I thought, this is it, this is the one.
22 D RUBEN: You were incredible in the eighth.
23 D GRETA: I was incredible in the eighth. I was terrible in the tenth. That's the whole story.
24 D DELPHINE: It isn't the whole story.
25 D GRETA: It's the only part they'll remember.
26 D DELPHINE: Greta.
27 D GRETA: Delphine, please. I need to say this without you being kind to me.
28 D DELPHINE: All right.
29 D GRETA: I'm thirty-four. My wrist hurts when it rains. My daughter wants me to quit and take her to the lake.
30 D RUBEN: Don't quit.
31 D GRETA: Ruben, you've been here six months.
32 D RUBEN: Don't quit.
33 D DELPHINE: He's right. Stay.
34 D GRETA: You want me to stay because you have no one else.
35 D DELPHINE: I want you to stay because you are the best bowler I've ever coached, and I've coached some very good ones.
36 D RUBEN: She really is.
37 D GRETA: Neither of you is helping.
38 D DELPHINE: We aren't trying to help. We're trying to tell you the truth.
39 D RUBEN: What's the truth?
40 D DELPHINE: The truth is that nobody wins the seven-ten.
41 D GRETA: Somebody has to.
42 D DELPHINE: Somebody has, twice, in the history of the sport. And both of them cried afterward.
43 D RUBEN: Why?
44 D DELPHINE: Because it doesn't feel like winning. It feels like surviving.
45 D GRETA: Is that what this is? Surviving?
46 D DELPHINE: Twelve years, Greta. You're still standing.
47 D RUBEN: I'll buy the nachos.
48 D GRETA: You don't have to buy the nachos.
49 D RUBEN: I'm buying the nachos.
50 D DELPHINE: Get extra cheese.
51 D GRETA: And jalapenos.
52 D RUBEN: That I can do.
53 D DELPHINE: And next season?
54 D GRETA: Next season we try again.
55 D DELPHINE: That's all I wanted to hear.
56 D GRETA: Don't gloat.
57 D DELPHINE: I'm not gloating. I'm planning.
58 D RUBEN: Planning what?
59 D DELPHINE: Everything. Starting with how to teach a rookie to tie his shoes.
60 D RUBEN: I know how to tie my shoes!
61 D GRETA: Then do it.
62 A ¶ He looks down.
63 A The laces are knotted together.
64 A He groans.
65 A They laugh.
66 A First time all night.

### SCENE s00220 | INT. DRYDOCK CANTEEN - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, BRANIMIR KOSTA, KIRIN ASHWORTH, BIG HOLLIS
1 A ¶ Steel table.
2 A Cold tea.
3 A A hull looms through the window, half-painted.
4 A ¶ ODALYS VANTERPOOL (50s, foreman, grease-stained clipboard) stands.
5 A Doesn't sit.
6 A ¶ BRANIMIR KOSTA (60s, welder, one good eye) stares at his hands.
7 A ¶ KIRIN ASHWORTH (19, apprentice, new boots) hovers by the door.
8 A ¶ BIG HOLLIS (40s, union steward, arms folded) leans on the vending machine.
9 D ODALYS (to the room): Listen up. Inspection failed. Weld seam forty-two.
10 A ¶ Silence.
11 D BRANIMIR (muttering): Forty-two. Forty-two.
12 D ODALYS: Branimir.
13 D BRANIMIR: I heard.
14 D ODALYS: Who signed off on it?
15 D HOLLIS: Does it matter?
16 D ODALYS: It matters.
17 D KIRIN: It was me.
18 A ¶ Everyone turns.
19 D KIRIN [CONT'D]: Branimir was on break. I did the pass. I thought it was good.
20 D BRANIMIR: It wasn't him.
21 D KIRIN: It was.
22 D BRANIMIR: Boy, sit down.
23 D ODALYS: Kirin, did you X-ray the seam?
24 D KIRIN: No ma'am. There was no film left.
25 D HOLLIS: No film. On a Tuesday.
26 D ODALYS: Who's in charge of ordering film?
27 D HOLLIS: You are.
28 D ODALYS (beat): Right. Right.
29 D BRANIMIR: So it's your film. Your seam. Your hull.
30 D ODALYS: Don't.
31 D BRANIMIR: Forty years I never missed a seam.
32 D ODALYS: I know.
33 D BRANIMIR: Forty years.
34 D ODALYS: I know, Branimir.
35 D HOLLIS: Nobody gets fired tonight.
36 D ODALYS: Not your call.
37 D HOLLIS: It's the contract.
38 D ODALYS: The contract says a lot of things.
39 D BRANIMIR: The ship sails Friday.
40 D ODALYS: The ship does not sail Friday.
41 D KIRIN: Is it really that bad?
42 D ODALYS: It's a hairline crack, Kirin. At sea it opens like a zipper.
43 A ¶ Her hand slams the table.
44 A Tea jumps.
45 A Kirin flinches.
46 A ¶ Branimir laughs.
47 A Short.
48 A Dry.
49 D BRANIMIR: Then we cut it out. Tonight. Four of us.
50 D ODALYS (quietly): Four of us.
51 D HOLLIS: Overtime's on the union.
52 D ODALYS (to herself): Film. I forgot the film.
53 A ¶ She picks up the clipboard.
54 A Puts it down.
55 A Picks up four mugs instead.
56 D ODALYS [CONT'D]: Tea's cold. I'll make fresh.

### SCENE s02370 | INT. FLOODED PUMP HOUSE - RICE TERRACES - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT HADIZA BELLO, CORPORAL TOMEK WRONA, PRIVATE LI WEI, VOICE, CAPTAIN DUARTE
1 A ¶ Grey light leaks through a tin roof pocked with shrapnel holes.
2 A Knee-deep brown water slops against concrete walls.
3 A SERGEANT HADIZA BELLO, forties, mud to the elbows, crouches on a pump housing with a radio handset wedged against her shoulder, while CORPORAL TOMEK WRONA, a lanky twenty-two-year-old with a bandaged ear, wades in from the doorway and sets a dented ammo can on the ledge beside her.
4 A She doesn't look at him.
5 A He opens the can, counts what's left, and shuts it again, and behind them PRIVATE LI WEI, nineteen, thin as a rake, sits against the far wall with his rifle across his knees, staring at the water as if it might hand him an answer.
6 D BELLO (into handset): Say again, Control. Say again.
7 A ¶ Static.
8 A She lowers the handset and lets it hang by its cord.
9 D WRONA: Anything?
10 D BELLO: They're calling it off.
11 D WRONA: Off.
12 D BELLO: The push. Guns have stopped. Whatever they were going to do up the hill, they're not doing it.
13 A ¶ Li Wei looks up.
14 A He tries to speak, coughs, and tries again.
15 D LI WEI: So we go home?
16 D BELLO: We go back to the road. That's not the same thing.
17 A ¶ She slides off the housing into the water and he grimaces at the cold of it, then steadies himself on the wall while Wrona reaches for the can and hauls it onto his shoulder.
18 A They're all slow now, all of them moving like men who have been told to stop running and haven't yet believed it.
19 D WRONA: Captain's still up there.
20 D BELLO: I know where the Captain is.
21 A ¶ A VOICE crackles from the handset, small and tinny.
22 D CAPTAIN DUARTE [V.O.] (over radio): Bello. Bello, it's Duarte. I'm coming down. Hold the pump house.
23 A ¶ Bello lifts the handset.
24 A She stares at it a moment before answering, and Wrona watches her face for the thing she won't say.
25 D BELLO (into handset): Holding, sir.
26 A ¶ She hangs it back on its hook.
27 A Li Wei lets out a breath that turns into a laugh and then into something quieter.
28 A Nobody tells him to stop.
29 D LI WEI: I thought we were done.
30 D BELLO: We are done. Get some water in you.
31 A ¶ She wades to the door and leans on the frame, looking out at the terraces going silver in the light.
32 A Wrona joins her, and for a while neither of them says anything at all.
33 D WRONA: It's quiet.
34 D BELLO: Don't say that out loud.

### SCENE s00715 | INT. STRAND FARMHOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): HAZEL STRAND, EWAN BLYTHE, MAGS DELANEY, DEPUTY CUTTER
1 A ¶ A big country kitchen: scarred oak table, iron range, a window onto black fields.
2 A A hurricane lamp.
3 A A radio on the counter.
4 A ¶ HAZEL STRAND, 40s, in a flannel nightgown with a shawl, stands at the sink pumping water.
5 A Her brother-in-law EWAN BLYTHE, 50s, leans against the pantry door with a shotgun broken over his arm.
6 A At the table, MAGS DELANEY, 12, the neighbor's girl, sits wrapped in a quilt, her feet drawn up under her.
7 D HAZEL: Mags, drink your milk.
8 D MAGS: It's cold.
9 D HAZEL: It's meant to be.
10 A ¶ Ewan peers through the window curtains.
11 D EWAN: Nothing yet.
12 D HAZEL: There won't be.
13 D EWAN: You don't know that.
14 D HAZEL: I do.
15 A ¶ The radio crackles.
16 A A man's voice, thin with static.
17 D DEPUTY CUTTER [V.O.] (radio): Strand place, this is Cutter. Come in.
18 A ¶ Ewan snaps the shotgun shut and crosses to the radio.
19 A Hazel lifts Mags's chin with one finger and checks her eyes.
20 A Mags pulls away and tucks the quilt up to her ears.
21 D EWAN: Cutter. Go ahead.
22 D DEPUTY CUTTER [V.O.] (radio): Roads are washed out. I can't get to you till morning.
23 D EWAN: Can't or won't?
24 D DEPUTY CUTTER [V.O.] (radio): Can't. The bridge is gone.
25 A ¶ Hazel sets down the pail.
26 A Ewan turns the dial a quarter turn.
27 A Static swells.
28 D HAZEL: Ewan, don't.
29 D EWAN: Cutter, you hear anything out there?
30 D DEPUTY CUTTER [V.O.] (radio, faint): Like what?
31 D EWAN: Like something in the corn.
32 A ¶ Silence on the radio.
33 A Then a long, wet scraping sound comes through the speaker.
34 A It is not coming from the speaker.
35 A It is coming from outside the kitchen window.
36 D MAGS (whispering): It's the same sound as at our house.
37 D HAZEL: What sound, sweetheart?
38 D MAGS: When they took my mom.
39 A ¶ Ewan raises the shotgun.
40 A Hazel snuffs the lamp with a pinch of her fingers.
41 A The kitchen goes black.
42 A Moonlight picks out the window.
43 D DEPUTY CUTTER [V.O.] (radio): Strand place? Strand place, do you copy?
44 A ¶ Something taps the glass, once, with a long fingernail.
45 D EWAN (barely audible): Hazel, get her under the table.
46 D HAZEL: Already there.
47 A ¶ Hazel pulls Mags beneath the oak, and the three of them hold their breath as the tapping travels along the window, around the corner, toward the door.

### SCENE s01498 | INT. CONSERVATORY WEDDING RECEPTION - EVENING
Detected names (may be incomplete or contain aliases): GWENDA FITZALAN-OKORO, PIERS LANGLEY-ASANTE, TABITHA NWOSU-REYES, DJ, LUCIO MARCHETTI-DAS, STRANGER, DANIEL
1 A ¶ A Victorian glasshouse strung with paper lanterns.
2 A Ferns and fig trees crowd the corners.
3 A Rain drums on the panes.
4 A Tables laid with mismatched china.
5 A ¶ The guests murmur around a small dance floor, six of them clustered near the cake: the bride's mother GWENDA FITZALAN-OKORO (60s, silver gown, brimming eyes), the groom's brother PIERS LANGLEY-ASANTE (30s, loosened tie), an old friend TABITHA NWOSU-REYES (40s, wine glass in each hand), the DJ (20s, headphones, bored), a caterer LUCIO MARCHETTI-DAS (50s, white jacket), and a STRANGER in a rain-soaked coat at the glass door.
6 A ¶ The stranger has no card, no corsage, no seat.
7 A He looks at the dance floor as if at a stage he once knew.
8 D GWENDA: Who is that?
9 D PIERS: No idea.
10 D TABITHA: He's very wet.
11 A ¶ The stranger steps in.
12 A Dripping, he crosses the floor and stops before Gwenda.
13 D STRANGER: Mrs. Fitzalan-Okoro. You won't remember me.
14 D GWENDA: I don't believe I do.
15 D STRANGER: Twenty-six years ago, I proposed to your daughter's mother. In this room.
16 A ¶ Silence.
17 A The DJ takes off his headphones.
18 A Lucio sets down the tray.
19 D GWENDA (whisper): Daniel.
20 D DANIEL: Hello, Gwenda.
21 A ¶ She puts a hand to her mouth.
22 A Behind her, the music trails away.
23 A Rain drums on the glass.

### SCENE s00362 | EXT. ICE-FISHING SHACK VILLAGE - FROZEN LAKE - DUSK
Detected names (may be incomplete or contain aliases): HALVARD, ANNIKA, RUSLAN, TOVA, BJORN, OLD MARGIT
1 A ¶ A scatter of tarpaper shacks on a vast white lake, each with a stovepipe breathing smoke.
2 A The wind has a knife in it.
3 A ¶ HALVARD, sixties, a fisherman in a fur hat, crouches at a hole with a jig.
4 A ANNIKA, thirties, his daughter, holds a thermos.
5 A RUSLAN, forties, a stranger in a thin jacket, stands in the doorway.
6 A TOVA, ten, sits on a bucket.
7 A BJORN, thirties, Annika's husband, tends the stove.
8 A OLD MARGIT, eighties, wrapped in two blankets, dozes in the corner.
9 A ¶ Halvard hauls up a line.
10 A Nothing on it.
11 A He drops it back.
12 A Ruslan watches, shivering.
13 A Annika offers him the thermos.
14 A He takes it with both hands.
15 D RUSLAN: Thank you.
16 D ANNIKA: Close the door.
17 D RUSLAN: My car is dead.
18 D BJORN (to Ruslan): Sit by the stove.
19 A ¶ Ruslan sits.
20 A Tova stares at his shoes.
21 A Margit stirs.
22 D MARGIT (to nobody): Ice is thinning.
23 D HALVARD: Margit, sleep.
24 D ANNIKA: Papa, listen.
25 A ¶ A groan from the lake, long and deep, like a whale turning.
26 A Everyone looks at the floor.
27 D HALVARD: Out. All of us.
28 D ANNIKA: Papa, the ice...
29 D HALVARD: Now!
30 D TOVA: Mama!
31 D ANNIKA: Go!

### SCENE s00278 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): EVELYN HARGROVE, THE MAN, AMBROSE
1 A ¶ A great dome of cracked plaster.
2 A Rows of tilting seats like rotted teeth.
3 A At the center, a Zeiss star projector, shrouded like a sleeping beast.
4 A ¶ A flashlight beam wanders across the dome.
5 A Behind it: EVELYN HARGROVE (30s, wool coat, camera bag), picking her way down the aisle.
6 D EVELYN: Hello? The caretaker said the doors were unlocked.
7 A ¶ Her voice dies in the plaster.
8 A She reaches the projector.
9 A Lays a hand on its cover.
10 A ¶ A SOUND.
11 A Soft.
12 A Behind her.
13 A A seat creaking back.
14 A ¶ She spins the light.
15 A A MAN sits in the third row.
16 A Gray suit.
17 A Hands folded.
18 A Smiling pleasantly.
19 D THE MAN: Ten minutes early. Punctual people are rare.
20 D EVELYN: I didn't see you come in.
21 D THE MAN: I didn't come in.
22 A ¶ She laughs, nervous, and glances at the exit.
23 A Still there.
24 A Still far.
25 D EVELYN: Are you the caretaker?
26 D THE MAN: I look after the stars. Is that the same?
27 A ¶ She lowers the light.
28 D EVELYN: I'm here to photograph the dome. For the historical society.
29 D THE MAN: Of course.
30 A ¶ He stands.
31 A Slowly.
32 A His shadow does not move with him.
33 D EVELYN (whispering): Oh.
34 D THE MAN: Don't be frightened. I only want you to look up.
35 D EVELYN: No.
36 D THE MAN: Please.
37 A ¶ The projector SHUDDERS under its cover.
38 A A hum rises from the machine.
39 A A thin line of light cuts from under the cloth.
40 D EVELYN: Who are you?
41 D THE MAN: Ambrose Lyle. Chief astronomer. Nineteen thirty-one.
42 A ¶ He smiles, and the plaster above them goes black, then bursts with ten thousand stars.
43 D EVELYN: Please.
44 D AMBROSE: Look up, Miss Hargrove.
45 A ¶ She doesn't want to.
46 A She does.
47 A The stars begin to move toward her.

### SCENE s00349 | INT. PIANO RESTORATION WORKSHOP - DAY
Detected names (may be incomplete or contain aliases): NOELLE FAIRCHILD, DELPHINE ARCHAMBAULT, LEO FINCH
1 A ¶ A high-ceilinged loft with north light.
2 A Disemboweled pianos stand open on every side, their strings like harps, their hammers laid out on felt cloths in long neat rows.
3 A Sawdust and varnish and old ivory.
4 A ¶ NOELLE FAIRCHILD, fifties, the restorer, in a leather apron and reading glasses pushed up into grey curls, bends over a half-dismantled Steinway, a tuning lever in her fist.
5 A ¶ DELPHINE ARCHAMBAULT, thirties, her apprentice, stands across the keybed holding a cloth, the curve of her jaw set hard.
6 A ¶ LEO FINCH, sixties, the piano's owner, in a rumpled tweed jacket, sits on a bench by the window watching them both, a cane across his knees.
7 D NOELLE: Delphine, the damper felt.
8 D DELPHINE: Which side?
9 D NOELLE: The left. The one that's flat.
10 A ¶ Delphine hands her the felt.
11 A She does not let go at once.
12 A Noelle gives it one sharp tug, and Delphine lets go, and neither looks at the other, and Leo studies the dust in the light.
13 D LEO: You two have been at this since September.
14 D NOELLE: Fourteen weeks.
15 D DELPHINE: Fifteen.
16 D LEO: It was my wife's piano. She played it every morning for forty years.
17 D NOELLE: I know.
18 D LEO: Delphine knows too. She came to the funeral.
19 D DELPHINE: I did.
20 A ¶ Noelle sets down the lever.
21 A She straightens slowly, one hand on the small of her back, and looks at Delphine for the first time in the scene.
22 A Delphine meets her gaze and does not blink.
23 D NOELLE: She wanted the middle C re-voiced.
24 D LEO: Who did?
25 D NOELLE: She did. Your wife.
26 D DELPHINE: She told me. She told me last spring, the day I started.
27 D NOELLE: She told you.
28 D DELPHINE: She didn't want to hurt you.
29 A ¶ Leo gets up.
30 A The cane rattles on the floor.
31 A He crosses to the keyboard and presses middle C. A flat, dull note.
32 D LEO: Hurt me how?
33 D DELPHINE: She said it had been out of tune for years and she played it anyway because you loved it.
34 A ¶ Leo presses it again, harder.
35 A The note thuds and dies.
36 A He keeps his finger on the key.
37 A His shoulders bend.
38 D NOELLE: Leo.
39 D LEO: She never said.
40 D NOELLE: She never would.
41 A ¶ He lifts his hand.
42 A Delphine steps forward as if to touch his arm and stops.
43 A Noelle takes up the tuning lever and sets it against the pin, and nods once at Delphine, and Delphine nods back, and together they begin, slowly, to bring the note home.

### SCENE s01005 | INT. VICTORIAN CONSERVATORY - NIGHT
Detected names (may be incomplete or contain aliases): CRABTREE, THADDEUS, PHOEBE, CAPTAIN LOWRY
1 A ¶ A glass hothouse thick with tropical ferns, weeping under a gaslit chandelier.
2 A In its center, a round table draped in black velvet and ringed with four chairs.
3 A The air tastes of orchids and old rain.
4 A ¶ MRS. CRABTREE (60s, widow's weeds, a face like a locked door) presides at the head of the table.
5 A THADDEUS (30s, frock coat, spectacles, a pamphlet on spiritualism rolled in his fist) sits at her right.
6 A PHOEBE (20s, white lace, pale as milk, hands folded) sits at her left.
7 A CAPTAIN LOWRY (50s, red-faced, medals on his tunic, arms folded in contempt) sits opposite.
8 D MRS. CRABTREE: Join hands. And do try to behave, Captain.
9 D CAPTAIN LOWRY: I am the soul of decorum, madam.
10 D PHOEBE: Is it true they come when called?
11 D THADDEUS: Only if they have unfinished business.
12 D CAPTAIN LOWRY: Then they'll be here by the dozen. The dead always have unfinished business.
13 D MRS. CRABTREE: Silence.
14 A ¶ They clasp hands.
15 A The chandelier dims.
16 A The ferns sway though no wind moves.
17 A Somewhere in the glass, a pane creaks.
18 D MRS. CRABTREE [CONT'D]: Spirits of this house, we call upon you. If you are present, give us a sign.
19 A ¶ A silence.
20 A A drip.
21 A Another.
22 D THADDEUS (whispering): Nothing.
23 D CAPTAIN LOWRY: Of course nothing.
24 D PHOEBE: Hush. Listen.
25 D MRS. CRABTREE: We call upon Edmund Crabtree, my beloved husband.
26 D CAPTAIN LOWRY: Your late husband was a bore, madam, and I say that as one who attended his funeral.
27 D MRS. CRABTREE: Captain, I will have you removed.
28 D CAPTAIN LOWRY: By whom?
29 A ¶ A tap on the table.
30 A A second.
31 A A third.
32 A The four of them freeze.
33 A The candle flames bend flat.
34 A The temperature drops; their breath fogs.
35 D PHOEBE (barely audible): Who is it?
36 A ¶ The table lifts an inch.
37 A Settles.
38 A Lifts again.
39 A Thaddeus lets go of the hands to steady it, and Mrs. Crabtree slaps him across the knuckles.
40 D MRS. CRABTREE: Do not break the circle!
41 D THADDEUS: It's moving!
42 D CAPTAIN LOWRY: It's a trick, madam. It's always a trick.
43 A ¶ A voice, wheezing, not any of theirs, slithers from beneath the velvet.
44 D CAPTAIN LOWRY [O.S.]: Hortensia...
45 D MRS. CRABTREE: Edmund?
46 A ¶ Phoebe screams.
47 A Thaddeus leaps back.
48 A Mrs. Crabtree sits perfectly rigid, her face as pale as the lace on Phoebe's collar.
49 A Then the velvet lifts, and the Captain, still seated, lets the cloth fall from his lap.
50 A His boot withdraws from the table's leg.
51 A He coughs into his fist, and the wheeze is plainly his own.
52 D PHOEBE: That was you!
53 D CAPTAIN LOWRY: A bit of fun, miss.
54 A ¶ Mrs. Crabtree rises to her full height.
55 D MRS. CRABTREE: Captain Lowry. You are no longer welcome in my home.
56 D CAPTAIN LOWRY: It was only a joke.
57 D MRS. CRABTREE: So was Edmund.

### SCENE s02181 | INT. CORAL-FARM SUBMERSIBLE - MAINTENANCE BAY - NIGHT
Detected names (may be incomplete or contain aliases): ILSA VANTERPOOL, KESTREL
1 A ¶ A cramped steel room lit by blue emergency strips.
2 A Pipes sweat.
3 A Through a thick porthole, a school of luminous fish drifts past.
4 A ¶ ILSA VANTERPOOL (40s, chief technician, grease on her forearms) kneels at an open floor panel, welding a coolant line.
5 A A radio hisses at her hip.
6 A She works with the patience of someone who has done this a thousand times.
7 A ¶ Behind her, the hatch wheel TURNS.
8 A Slowly.
9 A Ilsa freezes, torch still lit.
10 A ¶ The hatch swings open.
11 A A figure ducks through, dripping.
12 A This is KESTREL (30s, drifter, ragged survival suit, a shock baton at his belt).
13 A He closes the hatch behind him and looks at her.
14 D ILSA: You're not on the manifest.
15 D KESTREL: Neither is half this boat.
16 D ILSA: How did you get through the lock?
17 D KESTREL: Same way you'd leave. Carefully.
18 A ¶ Ilsa shuts off the torch.
19 A Sets it down.
20 A Stands, slowly, wiping her hands on her thighs.
21 A He watches the movement.
22 A She watches his baton.
23 D ILSA: Captain doesn't allow guests.
24 D KESTREL: Captain's asleep.
25 D ILSA: Captain doesn't sleep.
26 D KESTREL: Then he's dead. Take your pick.
27 A ¶ She lunges for the radio.
28 A He crosses the bay in two steps and grabs her wrist.
29 A They struggle, knocking a toolbox off the wall, spanners clattering.
30 A She drives an elbow into his ribs.
31 A He grunts, twists, slams her against the pipe.
32 A Both of them freeze, breathing hard, faces inches apart.
33 D ILSA: Let go.
34 D KESTREL: Only if you stay quiet.
35 D ILSA: I won't.
36 D KESTREL: Then I won't let go.
37 A ¶ The pipe behind her starts to HISS.
38 A A thin jet of steam.
39 A Both of them stare at it.
40 A Then at each other.
41 A The coolant line she was welding is failing.
42 D ILSA: That's the main feed.
43 D KESTREL: Fix it.
44 D ILSA: Let me go and I will.
45 A ¶ He hesitates.
46 A The steam thickens.
47 A The fish outside scatter.
48 A He lets go.
49 A She drops to her knees and grabs the torch, and he crouches beside her, holding the pipe steady with his bare gloves, wincing at the heat.
50 D ILSA [CONT'D]: Hold it. Tighter.
51 D KESTREL: It's burning.
52 D ILSA: Then burn.
53 A ¶ The torch flares.
54 A The weld glows.
55 A The hiss dies.
56 A They look at each other, soaked, shaking, and neither moves away.

### SCENE s02093 | INT. STARLITE LANES - SHOE COUNTER - 3 A.M.
Detected names (may be incomplete or contain aliases): LEANDRA CHO, DOBRYNIN
1 A ¶ The bowling alley is empty and dim, only the pin machines still thumping in the back lanes.
2 A Rows of rental shoes in cubbies.
3 A A cash register with a taped-up drawer.
4 A On the wall, a faded poster of a dancing pin.
5 A ¶ LEANDRA CHO, 17, in a red vest too big for her, sits on a stool behind the counter, doing homework she is not doing.
6 A Across from her, MR. DOBRYNIN, 60s, the night manager, in a cardigan, polishes a bowling shoe with a rag, slowly, as if there were nothing else in the world.
7 D MR. DOBRYNIN: You're early tonight.
8 D LEANDRA: I'm always early.
9 D MR. DOBRYNIN: Not by two hours.
10 D LEANDRA: Couldn't sleep.
11 D MR. DOBRYNIN: Mm.
12 A ¶ He holds the shoe to the light, finds a speck, rubs it.
13 A She turns a page of her textbook.
14 A Neither looks at the other.
15 D LEANDRA: Mr. Dobrynin, can I ask you something?
16 D MR. DOBRYNIN: You can ask.
17 D LEANDRA: Did you always work here?
18 D MR. DOBRYNIN: Thirty-one years.
19 D LEANDRA: Before that?
20 D MR. DOBRYNIN: Before that I was a bus driver.
21 D LEANDRA: Why'd you quit?
22 D MR. DOBRYNIN: I didn't like the people.
23 D LEANDRA: And you like these people?
24 D MR. DOBRYNIN: These people are going somewhere very slowly. A bus is going somewhere on a schedule. I prefer slowly.
25 D LEANDRA: That's kind of sad.
26 D MR. DOBRYNIN: Is it?
27 D LEANDRA: They just roll a ball and it hits things.
28 D MR. DOBRYNIN: And then they roll another one.
29 D LEANDRA: And it hits less.
30 D MR. DOBRYNIN: And then they go home.
31 A ¶ She smiles.
32 A It is a small, private smile.
33 D LEANDRA: My dad used to bring me here.
34 D MR. DOBRYNIN: Did he?
35 D LEANDRA: Sundays. He'd get me the cheese fries and the shoes in size one.
36 D MR. DOBRYNIN: I remember.
37 D LEANDRA: You don't.
38 D MR. DOBRYNIN: Gray carpet jacket. Smoked a pipe outside.
39 D LEANDRA (quietly): He did.
40 D MR. DOBRYNIN: Gave me a dollar every time. Said it was for the shoes.
41 D LEANDRA: It was always for the shoes.
42 D MR. DOBRYNIN: He was a generous man.
43 D LEANDRA: He was a man who left.
44 D MR. DOBRYNIN: Both things.
45 A ¶ She picks at the corner of her textbook.
46 A He sets down the shoe, takes another.
47 D LEANDRA: What do you say to someone who's mad at someone who's gone?
48 D MR. DOBRYNIN: You don't say anything. You hand them a pair of shoes.
49 D LEANDRA: That's not an answer.
50 D MR. DOBRYNIN: It's the only one I have.
51 D LEANDRA: Size what?
52 D MR. DOBRYNIN: You tell me.
53 D LEANDRA: Seven.
54 D MR. DOBRYNIN: Lane twelve is open.
55 D LEANDRA: It's three in the morning.
56 D MR. DOBRYNIN: The pins don't know.
57 A ¶ She looks at him.
58 A He looks at the shoe.
59 A After a moment she slides off the stool and walks to the cubbies, finds a seven, and holds it up.
60 D LEANDRA: These?
61 D MR. DOBRYNIN: Those are fine.
62 D LEANDRA: Will you come?
63 D MR. DOBRYNIN: I have to polish.
64 D LEANDRA: Mr. Dobrynin.
65 D MR. DOBRYNIN (a long breath): One frame.
66 A ¶ He sets down the rag.
67 A She is already pulling on the shoes.
68 D LEANDRA: You'll hate how bad I am.
69 D MR. DOBRYNIN: I've seen worse.
70 D LEANDRA: Who?
71 D MR. DOBRYNIN: Your father.
72 A ¶ She laughs, a real laugh this time, wet at the edges, and grabs the stool, steadying herself.
73 A Mr. Dobrynin comes around the counter in his socks, shoes in one hand, and the two of them walk together down the dark carpet toward Lane Twelve.

### SCENE s01315 | INT. VENETIAN MASQUERADE BALL - GRAND SALON - NIGHT
Detected names (may be incomplete or contain aliases): CONTESSA ISABELLA ROSSELLINI, GIOVANNI CASSINI, COUNT ALVISE ROSSELLINI
1 A ¶ 1790s.
2 A Chandeliers hang like frozen waterfalls.
3 A Marble floors mirror the candlelight.
4 A Gilded masks drift in the crowd, each hiding a face.
5 A A string quartet plays a dance no one is dancing.
6 A ¶ CONTESSA ISABELLA ROSSELLINI, 40s, in a silver gown and a black velvet half-mask, stands against a pillar, a glass of wine untouched in her hand.
7 A Her eyes follow every mask in the room.
8 A ¶ GIOVANNI CASSINI, 30s, a young poet in a plum coat and a gold mask shaped like a sun, lingers at her elbow.
9 A He has the air of a man who has rehearsed a speech and forgotten it.
10 D GIOVANNI: Contessa.
11 D ISABELLA: Signor Cassini.
12 D GIOVANNI: I did not think you would come.
13 D ISABELLA: Nor did I.
14 D GIOVANNI: And yet.
15 D ISABELLA: And yet.
16 A ¶ She turns her glass slowly in her hand.
17 A A servant passes with a tray.
18 A Neither takes a thing.
19 D GIOVANNI: Your husband is abroad?
20 D ISABELLA: My husband is always abroad.
21 D GIOVANNI: How fortunate.
22 D ISABELLA (softly): Is it?
23 A ¶ She looks at him then, properly, for the first time.
24 A His fingers close and open at his side.
25 D GIOVANNI: I have written something.
26 D ISABELLA: You are always writing something.
27 D GIOVANNI: This is different.
28 D ISABELLA: They are all different.
29 D GIOVANNI: This one is about a woman at a ball who does not dance.
30 D ISABELLA (very quietly): How does it end?
31 D GIOVANNI: I have not decided.
32 A ¶ The quartet strikes a new measure.
33 A Across the room, a tall man in a raven mask parts the crowd with the ease of a prow.
34 A He moves toward them in a straight line.
35 A Isabella's glass stops turning.
36 A ¶ COUNT ALVISE ROSSELLINI, 50s, in the raven mask and a coat of midnight blue, arrives before them and bows.
37 A Beneath the beak, his mouth is a thin smile.
38 D ALVISE: My dear. I came home early.
39 D ISABELLA: So I see.
40 D ALVISE: And who is your friend?
41 D GIOVANNI (bowing): Giovanni Cassini, Excellency. A humble poet.
42 D ALVISE: Poets are never humble. That is why they are poets.
43 A ¶ He takes the glass from Isabella's hand.
44 A Drinks it.
45 A Returns it.
46 D ALVISE [CONT'D]: I trust you were enjoying yourselves.
47 D ISABELLA: We were talking.
48 D ALVISE: How charming.
49 A ¶ He turns to the room.
50 A Raises his voice, light and carrying.
51 D ALVISE [CONT'D]: Ladies and gentlemen. A toast!
52 A ¶ The quartet falters.
53 A The crowd turns.
54 A Isabella sets her jaw.
55 A Giovanni's mask suddenly looks absurd.
56 D ALVISE [CONT'D]: To fidelity.
57 A ¶ Glasses rise.
58 A Murmurs of agreement.
59 A Isabella lifts hers last.
60 D ISABELLA (under her breath): To the masks.

### SCENE s02491 | INT. HARBORSIDE TACKLE SHOP - DAY
Detected names (may be incomplete or contain aliases): EUNICE MARLOWE, DARIUS MARLOWE
1 A ¶ Fishing rods in racks.
2 A Lures in glass jars.
3 A A cat sleeps on a coil of rope.
4 A Rain on the window.
5 A ¶ EUNICE MARLOWE, 60s, cardigan, glasses pushed up in her hair, sorts hooks into little drawers.
6 A She works without hurry.
7 A ¶ The bell on the door jingles.
8 A DARIUS MARLOWE, 30s, her son, damp jacket, steps in, shaking out his umbrella.
9 D DARIUS: Mom.
10 D EUNICE: You're early.
11 D DARIUS: Train was on time.
12 D EUNICE: That never happens.
13 A ¶ He leans on the counter.
14 A She doesn't stop sorting.
15 D DARIUS: You look tired.
16 D EUNICE: I'm sixty-three.
17 D DARIUS: You look tired for sixty-three.
18 A ¶ She smiles at the drawer.
19 A Closes it.
20 D EUNICE: There's tea in the back.
21 D DARIUS: I'm fine.
22 D EUNICE: Then there's tea for me.
23 A ¶ She goes through the curtain.
24 A He wanders the aisles.
25 A Lifts a lure shaped like a tiny silver fish.
26 A Turns it in the light.
27 A ¶ She returns with two cups.
28 A Sets one by him, not looking at him.
29 A He takes it.
30 D DARIUS [CONT'D]: Dad's rods are still on the wall.
31 D EUNICE: Where else would they be?
32 D DARIUS: You could sell them.
33 D EUNICE: They're not for sale.
34 D DARIUS: You're closing the shop.
35 A ¶ Her cup stops halfway to her mouth.
36 A She sets it down.
37 D EUNICE: Who told you?
38 D DARIUS: Harbour Authority sent a letter to me. I'm still on the lease.
39 D EUNICE: I forgot that.
40 D DARIUS: You forgot a lot of things.
41 D EUNICE: Darius.
42 D DARIUS: How long, Mom?
43 A ¶ She drums her fingers on the counter.
44 A The cat stirs.
45 D EUNICE: April. They gave me till April.
46 D DARIUS: And the rest?
47 D EUNICE: What rest?
48 D DARIUS: The rest that's in the folder you hid in the register.
49 A ¶ She stares at him.
50 A He opens the till.
51 A Takes out a manila folder.
52 A Lays it on the counter between them.
53 D DARIUS [CONT'D]: Dr. Anand called me too.
54 D EUNICE (very quietly): He had no right.
55 D DARIUS: He had a patient's son's number.
56 A ¶ She slides the folder to her side.
57 A Opens it.
58 A Closes it.
59 A Her hand rests on top.
60 D EUNICE: I wanted to tell you at Easter.
61 D DARIUS: It's April now, Mom.
62 A ¶ She laughs, shakily.
63 A Wipes her eye with the heel of her hand.
64 D EUNICE: Would you like the rods?
65 D DARIUS: I'd like you to come live with me.
66 D EUNICE: I'd have to bring the cat.
67 D DARIUS: Bring the cat.
68 D EUNICE (a beat): Bring the rods.
69 A ¶ He nods.
70 A The rain softens against the glass.
71 A The cat jumps onto the counter and settles on the folder.

### SCENE s00020 | INT. LIGHTHOUSE FOG-SIGNAL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): IGNATIUS BRAND, TAMSIN OKORO
1 A ¶ The brass horn sits silent.
2 A Rain ticks on the glass.
3 A IGNATIUS BRAND (60s, salt-cracked hands, wool cap) pours tea for TAMSIN OKORO (20s, relief keeper, soaked parka).
4 D TAMSIN: Quiet night.
5 D IGNATIUS: Always is, after the horn stops.
6 A ¶ They sip.
7 A The kettle ticks as it cools.
8 A Tamsin smiles.
9 D TAMSIN: Thought it'd be worse out here.
10 A ¶ Ignatius stares at the floor between her boots.
11 A Water pools there.
12 A Too much water, and it runs uphill toward the horn.
13 D IGNATIUS (barely a whisper): You came up alone?
14 D TAMSIN: Yes. Why?
15 A ¶ Below them, slow wet footsteps climb the iron stairs.
16 A Tamsin and Ignatius both freeze, cups halfway to their mouths.
17 A ¶ The horn BLARES on its own.
18 A They scramble for the hatch, collide, and drag it shut together.
19 D IGNATIUS: That's not the tide.

### SCENE s00906 | EXT. ABANDONED DRIVE-IN THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): TARIQ HAMADI, LUCY BRANCH
1 A ¶ A great white screen, torn at one corner, flaps in the wind.
2 A Rows of rusted speaker posts march across a field of dry weeds.
3 A Beyond the fence, a highway hisses with distant headlights.
4 A Fireflies hang over the lot like lit embers, rising and falling with the breath of the dark.
5 A ¶ TARIQ HAMADI, 17, skinny, in a thrift-shop blazer, sits on the hood of a dead pickup truck.
6 A His face is turned to the blank screen.
7 A He holds a Walkman in both hands, the earbuds around his neck.
8 A ¶ LUCY BRANCH, 17, strides in from the highway side with a flashlight and a backpack.
9 A She wears her father's oversized denim jacket and combat boots caked with mud.
10 A She stops ten feet from the truck.
11 D LUCY: You came.
12 D TARIQ: You said ten.
13 D LUCY: It's ten-fifteen.
14 D TARIQ: I've been here since nine.
15 A ¶ She sighs.
16 A Climbs onto the hood beside him, and the truck groans under their weight.
17 A For a time she says nothing.
18 A He doesn't either.
19 D LUCY (finally): Are you going to ask?
20 D TARIQ: Ask what?
21 D LUCY: Why I wanted to come here.
22 D TARIQ: I figured you'd tell me.
23 A ¶ She smiles at the screen.
24 A Flicks off the flashlight.
25 A The dark folds in around them.
26 D LUCY: My dad took me here. When I was six.
27 D TARIQ: It was open then?
28 D LUCY: It was the last summer. They played a movie about a talking horse.
29 D TARIQ: That sounds terrible.
30 D LUCY: It was perfect.
31 A ¶ A breeze lifts the torn corner of the screen.
32 A It sways like a ghost.
33 A She leans back on her elbows, stares at the stars, her voice quiet and strange.
34 D LUCY [CONT'D]: He left the next fall.
35 A ¶ Tariq turns his head.
36 A He gives her the earbuds without a word.
37 A She puts one in.
38 A He puts the other in his own ear.
39 A The Walkman clicks.
40 A A song begins, fragile and slow.
41 A ¶ She closes her eyes.
42 A Her mouth trembles.
43 A He keeps his gaze on the screen, as if an image might appear there if they both waited long enough.
44 D TARIQ (softly): I think I can see the horse.
45 D LUCY (a shaky laugh): Liar.
46 D TARIQ: I'm serious.
47 D LUCY: There's no horse.
48 D TARIQ: There's a little bit of horse.
49 A ¶ She presses her palm over her eyes and laughs again, a wet, helpless sound that breaks halfway into something else.
50 A He sits very still and lets her.
51 A When she lowers her hand, the tears have cut clean tracks through the dust on her face.
52 D LUCY: Thanks for coming.
53 D TARIQ: Thanks for asking.
54 A ¶ Overhead, a firefly drifts across the empty screen and, for a second, is the brightest thing in the world.

### SCENE s02087 | INT. PIANO TUNER'S WORKSHOP - EARLY MORNING
Detected names (may be incomplete or contain aliases): MARGUERITE OYELOWO-STRAND
1 A ¶ A narrow workshop of felt, wire, and old oak.
2 A Hammers hang in rows like tiny skulls.
3 A A gutted upright piano stands against one wall, its keys exposed.
4 A Gray light through a dusty skylight.
5 A ¶ MARGUERITE OYELOWO-STRAND, 60s, small and exact, in a canvas apron, sits at a bench with a tuning lever in her hand.
6 A Her hair is pinned up with a pencil.
7 A Her glasses are pushed onto her forehead.
8 A She presses a single key, and a note hangs in the air, flat.
9 A ¶ An answering machine on the shelf blinks red.
10 A She regards it.
11 A She reaches over and presses PLAY.
12 D MARGUERITE [V.O.] (her own recorded voice, bright): You've reached Oyelowo-Strand Piano Service. Leave a message and I'll return your call.
13 A ¶ BEEP.
14 A Silence on the tape.
15 A Nine seconds of breath, nothing more.
16 A Then a click.
17 A ¶ She rewinds.
18 A Plays it again.
19 A The same nine seconds of breath.
20 A She sets down the lever.
21 A Her thumb moves back and forth across the rim of the bench, back and forth.
22 A ¶ She presses the key again.
23 A The note is still flat.
24 A She picks up the lever, fits it to the pin, and gives a quarter turn.
25 A Another press.
26 A The note rises.
27 A It is nearly right.
28 A ¶ She plays the nine seconds one more time.
29 A Midway, her hand closes on the lever hard enough to whiten the knuckles.
30 A The tape clicks off.
31 A The lever snaps against the piano's iron frame, a harsh sharp CLANG that rings through the workshop.
32 A ¶ She stands.
33 A Walks to the machine.
34 A Pulls the plug from the wall.
35 A The red light dies.
36 A ¶ Then she sits at the keys and plays a single slow chord, four notes, perfectly in tune.
37 A She holds it until the sound is gone.

### SCENE s02172 | INT. FLOODED PARKING GARAGE - LEVEL B3 - NIGHT
Detected names (may be incomplete or contain aliases): RENATA VOSS, JUNIOR MBEKI, OLD TOMASZ, WREN, CALLOWAY
1 A ¶ Ankle-deep water.
2 A A Buick idles with its trunk open, stuffed with cash bags.
3 A ¶ RENATA VOSS (40s, crew boss, rain slicker) faces four others.
4 A JUNIOR MBEKI (20s, driver) fiddles with a flashlight.
5 A OLD TOMASZ (60s, safecracker, trembling hands).
6 A WREN (20s, lookout, hoodie).
7 A CALLOWAY (30s, inside man, bank lanyard).
8 D RENATA: Everybody listen. Count is short by two bags.
9 A ¶ Nobody moves.
10 D CALLOWAY (to Renata): You counted wrong.
11 D RENATA: I counted twice.
12 D OLD TOMASZ (muttering): Three bags I carried. Three. I carried three.
13 D JUNIOR: Somebody took them. That's what short means.
14 A ¶ Calloway lunges at Junior.
15 A They crash into the Buick, water spraying.
16 A Wren pulls them apart.
17 D WREN: Enough! Headlights, up the ramp!
18 A ¶ Everyone freezes.
19 A Light washes the wall.
20 A Then it passes.
21 D RENATA (to herself): Breathe, Renata.
22 D WREN: It's gone. Okay. It's gone.
23 A ¶ A bag splashes in the water by Tomasz's feet.
24 A He stares at it.
25 A They all stare at him.
26 A ¶ The group scatters.
27 A Tires skid.
28 A The Buick lurches away, leaving Tomasz alone, whispering to himself.
