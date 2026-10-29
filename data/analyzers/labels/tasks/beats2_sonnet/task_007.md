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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00007.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02075 | INT. SPARKLE-KING CAR WASH - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): WREN LINDQVIST, DOTTIE ABERNATHY-REYES, HANK
1 A ¶ A drive-through tunnel gone quiet.
2 A Wet brushes hang motionless, dripping.
3 A A glass booth by the exit holds a space heater, a radio, and two plastic chairs.
4 A Fluorescent hum.
5 A ¶ WREN LINDQVIST, 17, in a yellow company polo two sizes too big, sits on a chair with her feet up on a bucket.
6 A Beside her, DOTTIE ABERNATHY-REYES, 17, hair in a scarf, works a crossword with a pen chewed flat.
7 A Neither is looking at the other.
8 A It is 1:40 a.m.
9 A ¶ The radio crackles.
10 A It is a handheld CB sitting on the console, a relic that the owner insists on.
11 D HANK [O.S.] (over radio): Sparkle-King, this is Hank, you kids alive in there?
12 A ¶ Wren picks it up and thumbs the button without sitting up.
13 D WREN: Alive, Hank.
14 D HANK [O.S.] (over radio): Good. Don't let anybody through the tunnel after two. The brush motor's acting up.
15 D WREN: Nobody's coming through, Hank. It's a Tuesday.
16 D HANK [O.S.] (over radio): That's how it gets you.
17 A ¶ She sets the radio down.
18 A Dottie writes a word in her puzzle and erases it.
19 D DOTTIE: Seven letters. "Feeling of wanting to be elsewhere."
20 D WREN: Restless.
21 D DOTTIE: That's eight.
22 D WREN: Is it?
23 A ¶ Dottie counts on her fingers, lips moving.
24 A Wren watches her do it, then looks away at the tunnel, at the brushes hanging still.
25 D DOTTIE: You didn't apply to the program, did you.
26 D WREN: Which program.
27 D DOTTIE: The summer one. In Duluth. You said you would.
28 D WREN: I said I might.
29 A ¶ Dottie nods.
30 A She flips the paper, finds another clue, doesn't read it.
31 A She was supposed to be on the Duluth shuttle with Wren.
32 A She picks at the gummy edge of her pen cap.
33 D DOTTIE: My mom thinks you're a bad influence.
34 D WREN: I wash cars.
35 D DOTTIE: She says that's what a bad influence would say.
36 A ¶ They laugh, the small, unwilling laugh of two people who have heard the same joke for a year.
37 A The space heater ticks.
38 A Somewhere in the tunnel, a drip lands in a bucket, and then another.
39 D WREN: Do you think they'll be mad? If I don't go?
40 D DOTTIE: Who's they?
41 D WREN: Everyone. Your mom. Mine. You.
42 D DOTTIE: I'd be mad for like a week.
43 D WREN: That's a long time.
44 D DOTTIE: It's a week.
45 A ¶ The radio crackles again.
46 D HANK [O.S.] (over radio): Girls, I'm gonna need you to hit the emergency stop on the brush motor. I can hear it from the house.
47 A ¶ Wren reaches for the radio.
48 A Dottie, without looking, hits the red button on the wall.
49 A The tunnel's low hum drops away and the silence is enormous.
50 D HANK [O.S., CONT'D] (over radio): Thank you. Good work.
51 D WREN (to Dottie): Good work.
52 D DOTTIE (to the crossword): Good work.
53 A ¶ Dottie reaches over and takes the pen out of her own mouth and offers it to Wren, who does not need it, and takes it anyway.
54 A They sit there in the quiet.
55 A Wren writes something in a square.
56 A Dottie watches it appear.
57 D DOTTIE [CONT'D]: That's not seven letters.
58 D WREN: It's what fits.
59 A ¶ Dottie squints at the page.
60 A She reads it twice.
61 A She leans her head against Wren's shoulder, briefly, as if testing it, then straightens, as if she hadn't.
62 D DOTTIE: Fine. It fits.
63 A ¶ Outside the booth window, a single set of headlights swings off the road and slows toward the tunnel mouth.
64 A Neither of them sees it yet.
65 D WREN: You want a pop?
66 D DOTTIE: I want a lot of things.
67 D WREN (standing): They've got orange.
68 D DOTTIE: Orange is fine.
69 A ¶ Wren walks to the machine in the corner.
70 A A coin drops.
71 A A can clatters down.
72 A She carries it back and cracks it open and hands it over and Dottie drinks, looking at the headlights, and then at her.
73 A The lights stop at the tunnel mouth and idle there.
74 D WREN (into the radio, tired): Hank, we've got a car.
75 D HANK [O.S.] (over radio): Tell 'em we're closed.
76 D WREN (to Dottie): We're closed.
77 A ¶ Dottie stands.
78 A Smooths her scarf.
79 A Walks to the booth door.
80 D DOTTIE: I'll tell them.
81 A ¶ She goes out.
82 A Wren watches her through the glass, a small figure walking toward the headlights, one hand lifted, shaking her head.
83 A The car's engine idles, then backs away.
84 A Dottie turns, walks back, and sits down.
85 D DOTTIE [CONT'D]: They said thanks anyway.
86 D WREN: For what?
87 D DOTTIE: I don't know. Being closed.
88 A ¶ Wren laughs, properly this time, and puts her feet back up on the bucket.
89 A The heater ticks.
90 A The radio is quiet.
91 A On the paper between them, a word sits in its squares, almost the right length.

### SCENE s02086 | INT. AEROSTAT BAKERY - UPPER CLOUD DECK OF VENUS - DAY
Detected names (may be incomplete or contain aliases): MADAME ADEBOLA-QUINN, PIETRO, DISPATCH, NOOR, INSPECTOR LOGANATHAN
1 A ¶ A warm, low-ceilinged kitchen suspended in the sulfur haze, its walls lined with copper ovens and rattling racks of dough.
2 A Through a thick quartz porthole, orange clouds roil like boiling custard.
3 A The air smells of yeast and faint lemon.
4 A Every surface is bolted down.
5 A ¶ At a floured table kneads MADAME ADEBOLA-QUINN, 60s, the head baker, a woman built like a ship's prow, with burn scars freckling her forearms and a gaze that has outlasted three bankruptcies.
6 A Beside her, PIETRO, 19, her apprentice, is piping icing onto a tray of tiny cakes with the care of someone defusing a bomb.
7 A ¶ An intercom speaker above the oven door crackles.
8 D DISPATCH [V.O.] (over intercom): Bakery, this is Dispatch. Cloud shear in four minutes. Secure your loose items.
9 D MADAME ADEBOLA-QUINN: Acknowledged.
10 A ¶ She wipes her hands on her apron.
11 A Pietro glances at the porthole, where the clouds are beginning to churn faster.
12 A A cake slips from the tray and lands on the floor with a quiet splat.
13 A ¶ At the back, NOOR, 30s, a pastry cook with flour to her elbows, hauls a tray of buns into the warming rack and does not turn around.
14 D NOOR: Starboard shutters are down, Madame.
15 D PIETRO: Madame. The shear is on the starboard side.
16 D MADAME ADEBOLA-QUINN: I can smell it.
17 D PIETRO: Should we turn off the ovens?
18 D MADAME ADEBOLA-QUINN: We do not turn off the ovens. We turn off the nerves.
19 A ¶ The floor shudders.
20 A Racks rattle.
21 A A cloud of flour lifts from the table and hangs in the air like smoke.
22 A Madame Adebola-Quinn lays a steady hand on a copper oven door.
23 A Pietro takes the icing bag in a white-knuckled grip and keeps piping.
24 A ¶ The door at the far end of the kitchen bangs open.
25 A A figure staggers in, a tall woman in a gray inspector's coat dusted with orange pollen, holding a clipboard and a respirator mask in one hand.
26 A This is INSPECTOR LOGANATHAN, 40s, severe, her lenses fogged.
27 A She coughs and waves the mask.
28 D INSPECTOR LOGANATHAN: Surprise audit. Nobody move.
29 D MADAME ADEBOLA-QUINN: We are about to be sheared.
30 D INSPECTOR LOGANATHAN: Then this will be a very memorable audit.
31 A ¶ The floor drops half a foot, rises again.
32 A Everything tilts.
33 A Pietro yelps.
34 A A rack of rolls crashes to the floor and scatters across the tile.
35 A The inspector grabs the nearest table and hangs on.
36 D DISPATCH [V.O.] (over intercom): Shear in thirty seconds. All hands, brace.
37 D PIETRO (near tears): I don't want to die in a bakery!
38 D MADAME ADEBOLA-QUINN (deadpan): You'll die in a very clean bakery.
39 D INSPECTOR LOGANATHAN (writing on her clipboard): That's the first compliment I've noted.
40 A ¶ The shear hits.
41 A The whole kitchen lurches, spins a quarter turn on its tether, and settles.
42 A Flour falls like snow.
43 A Then, slowly, the shaking stops.
44 A The orange clouds beyond the porthole begin to calm.
45 A They stand there, three people covered in white, hanging on to a table.
46 D PIETRO (tiny): Did we make it?
47 D DISPATCH [V.O.] (over intercom): Shear has passed. Carry on.
48 D MADAME ADEBOLA-QUINN (to the room): Carry on.
49 A ¶ She straightens.
50 A Picks a cake off the floor, blows on it, and bites it.
51 A She nods.
52 D MADAME ADEBOLA-QUINN [CONT'D]: Still good.
53 A ¶ The inspector lowers her clipboard.
54 A She takes a cake from the tray, tastes it, and lowers her mask.
55 D INSPECTOR LOGANATHAN: Pass.

### SCENE s00703 | INT. TRENCH DUGOUT - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN OSTRANDER, LT. PRUITT
1 A ¶ Timber props, a guttering candle, a field radio crackling on an ammo crate.
2 A Shells thump overhead and dust sifts down.
3 A ¶ CAPTAIN OSTRANDER, 40s, sits against the wall with his helmet in his lap.
4 A He reaches for the handset, lifts it, and puts it down.
5 A He lifts it again.
6 D OSTRANDER: Battalion, this is Fox Two. Do you read?
7 D LT. PRUITT [V.O.] (radio, faint): Fox Two, Battalion. We read you. Say your status.
8 A ¶ He closes his eyes.
9 A When he opens them he is steadier.
10 D OSTRANDER: We are holding. Half the company is gone. He wants us to fall back.
11 D PRUITT [V.O.] (radio): Negative, Fox Two. Hold position. Reinforcements at oh-four-hundred.
12 A ¶ Ostrander laughs, short and dry.
13 A He wipes his face with a gloved hand.
14 A A shell lands closer.
15 A The candle gutters out.
16 D OSTRANDER: They'll be late.
17 D PRUITT [V.O.] (radio): Say again?
18 A ¶ He sets the handset in its cradle, and in the dark, listens.

### SCENE s01763 | INT. COLLAPSED SUBWAY TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): MAGDA KOWAL, RAVI MENON, JOAQUIN BELTRAN, XIMENA ORTIZ, OLD TEO, BEA
1 A ¶ Concrete, rebar, rubble.
2 A A single emergency light flickers in a cage on the wall.
3 A Dust hangs in the beam.
4 A Water drips somewhere out of sight.
5 A ¶ MAGDA KOWAL (50s, transit worker, hard hat, reflective vest) leans against a slab, one hand on her ribs.
6 A RAVI MENON (20s, student, backpack, scuffed laptop) sits cross-legged, scrolling a dead phone.
7 A JOAQUIN BELTRAN (40s, commuter, suit jacket wrapped around a bleeding hand) paces.
8 A XIMENA ORTIZ (30s, pregnant, hand on her belly) rests on a plastic crate.
9 A OLD TEO (70s, flat cap, harmonica in his breast pocket) sits against the wall, eyes closed.
10 A BEA (9, school uniform, a pink backpack, sitting very close to Ximena) hums.
11 D MAGDA: Everybody, listen. Rescue knows we're down here.
12 D JOAQUIN: How?
13 D MAGDA: Because they always know.
14 D RAVI (muttering): Phone's dead. Mine's dead.
15 D JOAQUIN: We all have dead phones, kid.
16 A ¶ Ximena adjusts her seat.
17 A She winces and tries to hide it.
18 A Bea looks up at her and places a small hand over Ximena's.
19 D BEA: Is the baby kicking?
20 D XIMENA: A little.
21 D BEA: Does it know we're in a tunnel?
22 D XIMENA: I don't think so.
23 D BEA: Good.
24 A ¶ Old Teo opens one eye, takes the harmonica from his pocket, wipes it on his sleeve, and plays a single low note.
25 A It trembles in the cave.
26 D MAGDA: Teo, save your breath.
27 D TEO: It saves itself.
28 A ¶ He plays another, then a phrase, slow and tender.
29 A Ravi stops scrolling.
30 A Joaquin stops pacing.
31 A Even Magda lowers her head.
32 A The light flickers.
33 A For the length of a verse, no one speaks.
34 D JOAQUIN (to himself): My wife is going to kill me.
35 D RAVI: It's not your fault.
36 D JOAQUIN: I took the late train. I never take the late train.
37 D BEA: I take it every day.
38 D JOAQUIN: Do you?
39 D BEA: My grandma meets me at Elm.
40 A ¶ Ximena and Magda exchange a look over the child's head.
41 A Teo lowers the harmonica.
42 D TEO: She'll be at Elm tonight too.
43 D BEA: I know.
44 D MAGDA: Okay. Okay. Water first. Joaquin, what have you got?
45 D JOAQUIN: A bottle. Half.
46 D MAGDA: Ravi?
47 D RAVI: Nothing. A granola bar.
48 D MAGDA: Break it in six.
49 D RAVI: It's tiny.
50 D MAGDA: Break it in six.
51 A ¶ He does.
52 A He gives Bea the biggest piece.
53 A She hands it to Ximena.
54 A Ximena breaks it again and hands half back.
55 A ¶ Overhead, concrete shifts with a groan.
56 A Dust sifts down in a thin ribbon.
57 A Everyone looks up.
58 A The light dims, brightens, holds.
59 D TEO (softly): Play me a song, little one.
60 D BEA: I don't know any.
61 D TEO: Hum the one you were humming.
62 A ¶ Bea hums.
63 A Teo finds the key on his harmonica and joins.
64 A The others sit and let the music do the work.

### SCENE s00112 | EXT. LIFEBOAT - OPEN SEA - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN MAGNUS EKSTROM-ADEBAYO, PIA RAMIREZ-OKONKWO, DELPHINE, BAZ
1 A ¶ A cramped orange boat rocks on a grey swell.
2 A Four figures huddle under a torn canopy.
3 A ¶ CAPTAIN MAGNUS EKSTROM-ADEBAYO (60s, grizzled, hand clamped on the tiller) squints at the horizon.
4 A He is silent.
5 A Beside him, DR. PIA RAMIREZ-OKONKWO (40s, soaked blazer) wrings out her scarf.
6 A At the bow, young DELPHINE (16, wide-eyed, life jacket too big) clutches a flare gun.
7 A In the middle, BAZ (30s, steward, torn jacket) lies on his back, one arm over his eyes.
8 A ¶ He shifts.
9 A She looks at him.
10 D PIA: Baz. Are you awake?
11 D BAZ: No.
12 D PIA: Good. Stay that way.
13 A ¶ Magnus lifts one finger.
14 A Everyone goes still.
15 A He points.
16 A ¶ A smudge on the horizon.
17 A A smoke trail.
18 D DELPHINE: Captain! Is that a ship?
19 D MAGNUS: It is.
20 D DELPHINE: Should I fire it?
21 D MAGNUS: Not yet.
22 A ¶ She lowers the gun.
23 A Baz sits up, clutching the gunwale.
24 D BAZ: Fire it now, Delphine!
25 D MAGNUS: Wait.
26 D PIA: Magnus, if she doesn't--
27 D MAGNUS: It's too far. They'd never see it.
28 A ¶ He steadies the tiller.
29 A They wait.
30 A The smoke thickens.
31 A A hull appears.
32 A Grey.
33 A Steel.
34 A Moving toward them.
35 D MAGNUS [CONT'D]: Now.
36 A ¶ Delphine fires.
37 A A red star climbs into the sky.
38 A They scream, all four of them, together.

### SCENE s00522 | INT. NIGHT FERRY - CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): ISOLDE VANTERPOOL, RAFFERTY KANE, JUNG-HO PARK, WINNIE ASHCROFT-DELANEY, SALAZAR
1 A ¶ Diesel.
2 A Chains rattling.
3 A Forty cars, bumper to bumper, under caged yellow lights.
4 A The ship rolls, barely.
5 A ¶ ISOLDE VANTERPOOL, 30s, purser's vest, walks the lanes with a flashlight.
6 A She checks each windshield.
7 A Ticks a list.
8 A ¶ She stops at a white delivery van.
9 A Taps the hood.
10 A Moves on.
11 A ¶ RAFFERTY KANE, 50s, a trucker in a stained cap, sits on a bumper with a thermos.
12 A He raises it in greeting.
13 D RAFFERTY: Evening, miss. Lovely crossing.
14 D ISOLDE: Smooth water tonight.
15 D RAFFERTY: That's what I said to my ex-wife. Look how that ended.
16 A ¶ She almost smiles.
17 A Writes something down.
18 A ¶ JUNG-HO PARK, 20s, headphones around his neck, leans out of a hatchback, bleary.
19 A He yawns.
20 D JUNG-HO: Is there a vending machine on this deck?
21 D ISOLDE: Passenger lounge. Deck four.
22 D JUNG-HO (to himself): Of course there is.
23 A ¶ He ducks back in.
24 A Isolde keeps walking.
25 A ¶ WINNIE ASHCROFT-DELANEY, 70s, a tartan blanket over her knees, sits in a small hatchback, window cracked.
26 A A cat carrier on her lap.
27 D WINNIE (to the group, generally): Does anybody know if the cats are allowed out for the crossing?
28 D RAFFERTY: Rules say no.
29 D WINNIE: Rules say. Hm.
30 A ¶ Isolde leans down to her window.
31 D ISOLDE: Ma'am, I'll check on her in an hour. Promise.
32 D WINNIE: It's a him.
33 D ISOLDE: I'll check on him in an hour.
34 A ¶ She straightens.
35 A Her radio squawks.
36 D SALAZAR [V.O.] (over PA): Purser to bridge. Purser to bridge. Please confirm car count.
37 A ¶ Isolde keys her radio.
38 D ISOLDE: Forty-one, Captain. Forty-one vehicles.
39 D SALAZAR [V.O.] (over PA): Say again.
40 D ISOLDE: Forty-one.
41 A ¶ A long pause.
42 A Static.
43 D SALAZAR [V.O.] (over PA): Manifest says forty.
44 A ¶ She stops walking.
45 D ISOLDE (quietly, to herself): Forty-one.
46 A ¶ She turns slowly.
47 A Eyes down the lanes.
48 A Counting under her breath.
49 A ¶ Rafferty watches her.
50 A The thermos stops halfway to his mouth.
51 D RAFFERTY: Something wrong, love?
52 D ISOLDE: Nothing. Routine.
53 A ¶ She isn't convincing.
54 A She moves down the aisle, flashlight low.
55 A Stops at the white van again.
56 A ¶ Plates: out of state.
57 A Not on her list.
58 A She hadn't ticked it because she hadn't noticed it.
59 A It had been there, quiet, like furniture.
60 A ¶ She reaches for the rear door handle.
61 A Locked.
62 D JUNG-HO (from his car): Hey, uh. That van was here when I parked.
63 D ISOLDE: Which means?
64 D JUNG-HO: Means nobody got out of it. Not once. I've been watching.
65 A ¶ Rafferty sets down the thermos.
66 A Stands up.
67 A Slow.
68 D RAFFERTY: Miss. Step back.
69 D ISOLDE: Why?
70 D RAFFERTY (very calm): Because I'm a driver. And I know what that engine sounds like when it's not an engine.
71 A ¶ Isolde listens.
72 A Underneath the diesel and the chains, a thin electric whine.
73 A Steady.
74 A Patient.
75 A ¶ She backs away.
76 A One step.
77 A Two.
78 D ISOLDE (into radio, steady): Captain. Evacuate the car deck. All hands. Now.
79 D SALAZAR [V.O.] (over PA): Purser, what is it?
80 A ¶ Winnie rolls her window up.
81 A Clutches the carrier.
82 D WINNIE (to the cat, muttering): Hush, hush, hush.
83 A ¶ Jung-Ho is already out of the hatchback, running for the stairwell.
84 A ¶ The van's side door slides open an inch.
85 A A single hand reaches out.
86 A Pale.
87 A Gloved.
88 A It sets a small black box on the deck.
89 A ¶ Then the door slides shut again.
90 A ¶ The whine climbs.
91 D RAFFERTY (shouting to the whole deck): EVERYBODY OUT! MOVE!
92 A ¶ Isolde grabs Winnie's door.
93 A Yanks it open.
94 D ISOLDE: Ma'am. Leave the car.
95 D WINNIE: The cat --
96 D ISOLDE: Bring the cat.
97 A ¶ They run.
98 A Behind them the black box blinks once.
99 A Green.
100 A ¶ Then red.

### SCENE s01813 | INT. NIGHT COURT - ARRAIGNMENT ROOM - 1 A.M.
Detected names (may be incomplete or contain aliases): JUDGE OCTAVIA ROSENBLATT-ODUYA, PUBLIC DEFENDER LEON FAIRWEATHER, ASSISTANT MERCEDES IBARRA-NOLAN, MAN, CORWIN
1 A ¶ A drab room under buzzing fluorescents.
2 A A raised bench, a witness stand with a chipped rail, a row of empty gallery seats.
3 A A clock stuck at ten past three.
4 A ¶ JUDGE OCTAVIA ROSENBLATT-ODUYA, sixties, sits at the bench with a thermos.
5 A At the defense table, PUBLIC DEFENDER LEON FAIRWEATHER, thirties, shuffles papers that do not need shuffling.
6 A At the prosecution table, ASSISTANT DA MERCEDES IBARRA-NOLAN, forties, taps a pen.
7 A In the dock stands a MAN in a green hospital gown, barefoot, tall, hair sticking up.
8 D JUDGE ROSENBLATT-ODUYA (to the room): We're on the record. Docket 4471. State versus...
9 A ¶ She squints at her papers.
10 D JUDGE ROSENBLATT-ODUYA [CONT'D] (to herself): John Doe? Again?
11 D LEON: Your Honor, my client has declined to give his name.
12 D MAN: It's not that I decline. I'm not certain.
13 D JUDGE ROSENBLATT-ODUYA: Mr. Doe, do you understand the charge?
14 D MAN: Trespassing at the aquarium.
15 D MERCEDES: After hours. In the shark tank.
16 D MAN: It was a very peaceful tank.
17 D LEON (to the Man, low): Please don't talk.
18 D MERCEDES (to the judge): The State will note he also had a crowbar and a wetsuit.
19 D LEON: It was a diving lesson.
20 D MERCEDES: At two in the morning.
21 D MAN (muttering): I was looking for someone.
22 D JUDGE ROSENBLATT-ODUYA: Looking for whom?
23 D MAN: A woman. Long hair. She said her name was Marisol and that she lived in the tank.
24 A ¶ Leon closes his eyes.
25 A Mercedes sets down her pen.
26 A The judge puts a hand over her mouth to cover a smile.
27 D JUDGE ROSENBLATT-ODUYA: Mr. Doe...
28 D MAN: It's not Doe. I remember now. It's Corwin.
29 D LEON (whispering): Corwin?
30 D CORWIN: Corwin Albright-Santos. I'm a marine biologist.
31 D MERCEDES (to the judge): Your Honor, he's been in the system four times this year.
32 D CORWIN: Five.
33 D LEON: Corwin, please.
34 D JUDGE ROSENBLATT-ODUYA: Mr. Albright-Santos, I'm going to release you on your own recognizance. On one condition.
35 D CORWIN: Anything.
36 D JUDGE ROSENBLATT-ODUYA: Stay out of the tank.
37 D CORWIN (after a long pause): I'll try.
38 A ¶ She bangs the gavel.
39 A The clock still reads ten past three.

### SCENE s00870 | INT. PARKING GARAGE LEVEL P4 - "SYNERGY SOCIAL" TENT - DAY
Detected names (may be incomplete or contain aliases): DESMOND PRUITT, ANOUK VAN DER BERG, TAKESHI ONO, LOLA FERREIRA
1 A ¶ A pop-up gazebo between two oil stains.
2 A Banner: MANDATORY FUN.
3 A Folding table.
4 A Sheet cake, sweating.
5 A ¶ DESMOND PRUITT, 50s, lanyard heavy as a medal.
6 A Clipboard.
7 A Smiles at nobody.
8 A ¶ ANOUK VAN DER BERG, 30s, auditor.
9 A Stabs cake with a plastic knife.
10 A Doesn't look up.
11 A ¶ TAKESHI ONO, 20s, intern.
12 A Hoodie.
13 A Holding a balloon he was told to hold.
14 A ¶ LOLA FERREIRA, 40s, HR.
15 A Headset.
16 A Always mid-sentence.
17 D DESMOND: Welcome, team. Who's having fun?
18 A ¶ Silence.
19 A A car alarm chirps two floors up.
20 D DESMOND [CONT'D]: Let's circle back on that.
21 D ANOUK: Is this billable?
22 D LOLA (into headset): No, I'm listening, I'm just also here.
23 A ¶ Takeshi's balloon drifts toward a sprinkler.
24 A He catches it.
25 A Desmond and Takeshi both freeze.
26 D DESMOND: That's a safety balloon.
27 D TAKESHI: It's a regular balloon.
28 D DESMOND: Compliance says safety.
29 A ¶ Anouk slides a slice of cake onto a paper plate.
30 A Lola and Desmond reach for it at once.
31 A They fight over the plate.
32 A Frosting on a lanyard.
33 D LOLA: Wellness incident. I'm logging it.
34 D ANOUK: You're the logger.
35 D LOLA: I'm logging that I logged.
36 A ¶ A forklift beeps in reverse.
37 A Everyone looks.
38 A It goes nowhere.
39 D TAKESHI: Do we get to leave?
40 D DESMOND: Leave is a strong word.
41 D ANOUK: Ten minutes of fun, then my report.
42 D DESMOND: What's in the report?
43 D ANOUK: Cake. Mostly cake.
44 A ¶ The group scatters toward their cars, then stops.
45 A Nobody has the right keys.
46 A They drift back to the table.
47 D LOLA (whispering): Same time next quarter.
48 A ¶ Desmond raises the clipboard like a toast.
49 A Nobody joins him.

### SCENE s01189 | INT. CONVERTED CINEMA FIELD HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA NAIR, NURSE, SEBASTIAN OYELOWO, MAN, THEO ABBASI, MS. HALLORAN
1 A ¶ A former movie palace.
2 A The velvet seats have been ripped out and replaced with rows of cots.
3 A The screen at the front is a mural of water-stained gold curtains.
4 A Plastic sheeting hangs from the balcony.
5 A Generator hum.
6 A Coughing.
7 A ¶ DR. PRIYA NAIR (40s, scrubs two sizes large, hair under a surgical cap) crosses the aisle, clipboard pressed to her chest.
8 A She is the only one moving fast.
9 A ¶ A NURSE, SEBASTIAN OYELOWO (30s, soft-spoken, glasses taped at the hinge), trails her with a tray.
10 A ¶ At the center of the stage, a boy lies on a cot, wrapped in a foil blanket.
11 A The boy, ten, flushed and unconscious, does not stir.
12 A ¶ Beside him, a MAN in a stained suit sits slumped on a folding chair.
13 A THEO ABBASI (50s, the boy's father, unshaven, wedding ring turning round his finger) grips the cot's rail.
14 A ¶ She reaches the cot.
15 A Checks the chart.
16 A He watches her read.
17 D PRIYA: How long has the fever been over a hundred and three?
18 D THEO: Since the lights went out.
19 D SEBASTIAN: Four hours.
20 A ¶ She lays a hand on the boy's forehead.
21 A He winces.
22 A She tilts his head, thumbs back an eyelid.
23 A He doesn't resist.
24 D PRIYA (quietly, to Sebastian): Start the line. Saline, then the second antibiotic.
25 D SEBASTIAN: We're out of the second.
26 A ¶ She does not turn.
27 A Her shoulders stiffen.
28 A She breathes in once.
29 D PRIYA: Then the first, double. And find me a pharmacist.
30 D SEBASTIAN: There are no pharmacists.
31 D PRIYA: Then find me someone who used to be one.
32 A ¶ He nods and leaves.
33 A The generator stutters.
34 A Lights dim, brighten.
35 A Theo looks up.
36 D THEO: Doctor.
37 D PRIYA: Mr. Abbasi.
38 D THEO: Is he going to make it?
39 A ¶ She looks at him.
40 A Not at the chart, not at the boy.
41 A At him.
42 D PRIYA: I don't know yet.
43 A ¶ He nods.
44 A It is the answer he expected, but he needed to hear it said.
45 A He lowers his head onto the rail.
46 A ¶ Priya straightens.
47 A Across the hall, a second cot.
48 A A second father.
49 A A nurse waving frantically.
50 A ¶ She walks toward it.
51 A Then stops.
52 A Turns back.
53 A Kneels beside the boy and tucks the foil blanket tighter, careful of his arm.
54 D PRIYA [CONT'D] (whisper): Stay with us, little one.
55 A ¶ He does not stir.
56 A ¶ She stands.
57 A The generator coughs again.
58 A This time the lights go out entirely.
59 A ¶ Darkness.
60 A Someone sobs.
61 A A match flares.
62 A Another.
63 A A third.
64 A Sebastian reappears, holding a candle, a woman beside him in a grey cardigan, shaking out her hands.
65 D SEBASTIAN: Doctor, this is Ms. Halloran. She ran a pharmacy for thirty years.
66 A ¶ Priya takes in the cardigan, the shaking hands, the tired eyes.
67 A She puts out her own.
68 D PRIYA: Do you remember how to mix a pediatric dose?
69 A ¶ The woman almost smiles.
70 D MS. HALLORAN: Like my own name.
71 D PRIYA: Good. Because tonight, you're the only name I trust.
72 A ¶ The woman nods, rolls up her sleeves, and follows Sebastian into the dark.
73 A Priya stands over the cot.
74 A The candle flames lean.
75 D THEO (not looking up): Thank you.
76 D PRIYA: Don't. Not yet.
77 A ¶ She stays beside the boy, one hand on the rail, her eyes on the rise and fall of the foil.
78 A The mural curtains hang above them, golden, ruined, waiting for a show that never begins.

### SCENE s00334 | INT. TAXIDERMY SHOP - BACK ROOM - DAY
Detected names (may be incomplete or contain aliases): CORNELIA BRIGHT, DESMOND ARCHULETA
1 A ¶ Glass eyes everywhere.
2 A A stuffed badger on the desk.
3 A A deposition table cleared between a moose head and a fox in mid-pounce.
4 A ¶ ATTY.
5 A CORNELIA BRIGHT, forties, in a grey suit, sits with a legal pad.
6 A DESMOND ARCHULETA, fifties, the shop owner, sits across from her in a smock, hands folded.
7 D CORNELIA: State your name for the record.
8 D DESMOND: Desmond Archuleta.
9 D CORNELIA: And you have owned this shop how long?
10 D DESMOND: Twenty-two years.
11 D CORNELIA: And in that time you've never kept a customer's property past the pickup date.
12 D DESMOND: Never.
13 D CORNELIA: Never once.
14 D DESMOND: Not once.
15 D CORNELIA: Mr. Archuleta, how many animals are in this room?
16 D DESMOND: I couldn't say. Thirty. Forty.
17 D CORNELIA: Would it surprise you to learn that forty-one are registered, and forty-two are present?
18 D DESMOND: Counting error.
19 D CORNELIA: Would it surprise you that the forty-second is a recently deceased Great Dane belonging to my client?
20 A ¶ Desmond's hands unfold.
21 A Cornelia's pen stops.
22 A They stare at each other.
23 A Behind Desmond, the badger on the desk seems to lean forward.
24 D DESMOND: I want a lawyer.
25 D CORNELIA: I am the lawyer.
26 A ¶ They both rise at once.
27 A The table scrapes.
28 A A glass eye rolls to the floor between them.

### SCENE s02050 | INT. ORBITAL RECYCLING DEPOT - SORTING FLOOR - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): KIRA ASANTE-VOLKOV, DMITRI OLUWASEUN, INSPECTOR LEOPOLDINE HARGROVE-SATO
1 A ¶ Conveyor belts shuttle crushed satellites past a gantry.
2 A Sparks.
3 A The smell of hot solder.
4 A ¶ KIRA ASANTE-VOLKOV (30s, sorter, welding mask pushed up) pulls a gray panel off the belt, turns it over.
5 A A strip of tape on the back: a name, scratched through.
6 A ¶ Across the floor, DMITRI OLUWASEUN (50s, shift lead, clipboard) watches her.
7 A He does not look at the panel.
8 A He looks at her hands.
9 D KIRA: This is from Sector Nine.
10 D DMITRI: Everything's from Sector Nine.
11 D KIRA: It's still warm.
12 A ¶ He sets down the clipboard.
13 A Walks over.
14 A Slowly.
15 A The belt grinds.
16 D DMITRI: Put it back.
17 D KIRA: It has a serial.
18 D DMITRI: Put it back on the belt.
19 A ¶ She doesn't.
20 A A door hisses open at the far end.
21 A A third figure strides in: INSPECTOR LEOPOLDINE HARGROVE-SATO (40s, gray coat, a slim case).
22 A The belts slow, then stop.
23 A Silence.
24 D LEOPOLDINE: Good morning. Please step away from the panel.
25 A ¶ Kira lowers it.
26 A Dmitri straightens, pulls his clipboard to his chest.
27 D LEOPOLDINE [CONT'D]: Which of you is Asante-Volkov?
28 A ¶ Neither answers.
29 A The belt starts again, with a lurch.

### SCENE s00594 | INT. HOSPITAL WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA PEMBERTON, WALTER PEMBERTON, DR. ESCOBEDO
1 A ¶ Vinyl chairs bolted in rows.
2 A A vending machine glowing.
3 A A muted TV showing a cooking competition.
4 A ¶ GLORIA PEMBERTON, 60s, in a church dress and orthopedic shoes, sits bolt upright, purse on her lap, rosary twisted around her fingers.
5 A Next to her, WALTER PEMBERTON, 60s, in a windbreaker, stares at a single spot on the carpet.
6 A A coffee cup in his hand has gone cold.
7 A ¶ A phone rings on the reception desk, unattended.
8 A Neither of them moves.
9 A It rings five times.
10 A Stops.
11 D GLORIA: Walter.
12 D WALTER: Yes.
13 D GLORIA: Say something.
14 D WALTER: What do you want me to say?
15 D GLORIA: Anything.
16 D WALTER: It's a long night.
17 D GLORIA: That's something.
18 A ¶ Silence.
19 A On the TV, a chef flips an omelet.
20 A Gloria's rosary beads click.
21 A Walter shifts his weight, sets the cup on the floor, picks it up again.
22 A ¶ The intercom crackles overhead.
23 D DR. ESCOBEDO [V.O.] (over speaker, tinny): Family of Pemberton, please come to Room 4.
24 A ¶ They both rise at once, bump shoulders, step back.
25 A Gloria goes first.
26 A Walter hesitates, drops his cup in the trash, and grabs her arm, and they stand there a moment, staring at the closed door at the end of the corridor, her fingers digging into his sleeve while his hand covers hers, neither of them able to take the first step, until Gloria whispers a prayer, takes a breath, and moves, and Walter follows a half-step behind her, the way he has for forty years.
27 D DR. ESCOBEDO [V.O., CONT'D]: Mr. and Mrs. Pemberton. Take your time.
28 D GLORIA (stopping): No. Not take my time.
29 D WALTER: Gloria.
30 D GLORIA: If I take my time, I'll turn around.
31 D WALTER: Then we don't take our time.
32 A ¶ He squeezes her hand.
33 A She nods.
34 A They walk.
35 A At the door, she grips the handle, pauses, and pushes.

### SCENE s00573 | EXT. WHALE-RIB BRIDGE - DUSK
Detected names (may be incomplete or contain aliases): GRUB MAWDLEY, TAMSIN, ROOK, STRANGER, ZEPHYRINE
1 A ¶ A bridge of bleached ribs over a gorge.
2 A Fog below.
3 A A toll hut perched at the midpoint.
4 A ¶ GRUB MAWDLEY, goblin, one eye, sits on the toll barrel.
5 A Chewing.
6 A ¶ Two pilgrims approach: TAMSIN, young, sword too big for her, and ROOK, old, hooded, leaning on a staff.
7 A ¶ Behind them, a STRANGER in grey rags, bare feet.
8 A Silent.
9 A Following.
10 D MAWDLEY: Toll. Two coppers. Each.
11 D TAMSIN (to Rook): He's got no right. The queen abolished tolls.
12 D ROOK (muttering): Queens abolish. Goblins collect.
13 D MAWDLEY: Three coppers. I heard that.
14 D TAMSIN: Fine.
15 A ¶ She counts coins.
16 A Mawdley bites each one.
17 A The Stranger steps up beside them.
18 D MAWDLEY [CONT'D]: And you? Rags. Nothing to pay with?
19 D STRANGER: I pay differently.
20 D MAWDLEY: Everybody says that.
21 D TAMSIN: Don't test him.
22 D MAWDLEY: Don't test me.
23 A ¶ Tamsin and Mawdley glare at each other.
24 A Fog thickens.
25 A The ribs begin to hum.
26 D ROOK (to everyone): Step back. All of you. Now.
27 A ¶ The Stranger throws back the hood.
28 A Silver hair.
29 A Eyes like struck flint.
30 D STRANGER: Zephyrine.
31 A ¶ Mawdley drops the coin.
32 A The bridge SHUDDERS.
33 D ZEPHYRINE: I built this bridge. You've been charging for my bones.
34 D MAWDLEY (whispering): Oh, no.
35 A ¶ The ribs CRACK.
36 A Light floods upward from the gorge.

### SCENE s01153 | INT. SALVAGE TUG "HALCYON" - COMMAND DECK - SHIP TIME 0412
Detected names (may be incomplete or contain aliases): COMMANDER ISSA, ROOK, ENSIGN TARQUIN, JONAH
1 A ¶ Dim blue.
2 A Instrument glow.
3 A Frost on the edge of a viewport that shows nothing but black and a distant, tumbling hull.
4 A ¶ COMMANDER ISSA (40s, grey jumpsuit, scar through one eyebrow) sits in the captain's chair, eyes on a scrolling console.
5 A ROOK (30s, engineer, pushed-up sleeves, grease on her cheek) kneels under an open panel, wiring.
6 A ENSIGN TARQUIN (20s, pressed uniform, nervous hands) stands at the comms station with a headset.
7 D ISSA: Status on the derelict.
8 D TARQUIN: Thermal reading's ambient, Commander. No heat signature.
9 D ISSA: Life signs?
10 D TARQUIN: None.
11 D ROOK (from under the panel): Which means there's nothing to find, so why are we still here?
12 D ISSA: Because it's salvage, Rook. Salvage pays.
13 D ROOK: It pays if the thing doesn't kill us.
14 D TARQUIN (to the room): Does anyone else feel that temperature drop?
15 A ¶ Nobody answers.
16 A Issa taps the console.
17 A A pulse of green runs through the hull.
18 D ISSA: Rook, how long until we're docked?
19 D ROOK: Ninety minutes if I finish the seal.
20 D ISSA: Do it in sixty.
21 D ROOK (muttering): Sure. And I'll grow another arm.
22 A ¶ She slides out, seals the panel, and wipes her hands.
23 A The deck lights flicker.
24 A A tone chimes.
25 D TARQUIN: Commander, we have an incoming hail. From the derelict.
26 D ISSA: Impossible.
27 D TARQUIN: Audio only.
28 D ISSA: Put it up.
29 A ¶ A hiss of static.
30 A Then a thin voice, a whisper through a thousand miles of vacuum.
31 D JONAH [V.O.] (distorted, recorded): ...please... anyone... the hull is breached... we are still aboard...
32 D TARQUIN: It's repeating. Same thirty seconds. Loop.
33 D ROOK: Who's aboard? The manifest said the crew was evacuated.
34 D ISSA: The manifest said a lot of things.
35 A ¶ He stands.
36 A Straightens his jumpsuit.
37 A Looks at each of them in turn.
38 D ISSA [CONT'D]: Rook, suit up. Tarquin, keep the channel open. I'm going over.
39 D TARQUIN: Alone, Commander?
40 D ISSA: Nobody else is qualified to be wrong.
41 D ROOK: Sir, with respect, that's the stupidest thing I've ever heard.
42 D ISSA: It's also the plan.
43 A ¶ Rook sighs, grabs a helmet.
44 A Tarquin tightens his headset.
45 A At the airlock, the inner door cycles open with a soft pneumatic breath.
46 A ¶ A figure stands inside, in a salvage suit that doesn't fit the Halcyon's fleet.
47 A JONAH (40s, a ragged beard behind a cracked faceplate, one glove missing) holds a flare gun in his remaining hand.
48 D JONAH: Don't. Don't touch the console.
49 D ISSA: Who are you?
50 D JONAH: Jonah Reyes. Navigator, Mercator. I've been on that hull for fourteen months.
51 D TARQUIN (whisper): That's impossible.
52 D JONAH: It's the only thing I've been telling myself.
53 D ROOK (to herself, low): Fourteen months.
54 A ¶ Jonah steps forward, the flare gun trembling.
55 D JONAH [CONT'D]: Commander. Listen to me. That loop isn't mine. I stopped sending it a year ago. Something else is using my voice.
56 A ¶ Issa's hand finds the emergency stud on his chair arm.
57 A The lights go red.
58 A A claxon begins.
59 D ISSA: Everyone to stations. Rook, seal the airlock. Tarquin, sever the hull link.
60 D TARQUIN: Sever?
61 D ISSA: Do it now!
62 A ¶ Tarquin slams the break lever.
63 A The viewport flares.
64 A On the derelict, a long, slow light switches on, bright as a second sun, and turns toward the Halcyon.
65 D JONAH (quiet): Too late.
66 A ¶ The whole ship shudders.
67 A The flare gun drops from Jonah's hand and bounces on the deck, spinning, lighting every face in turn.

### SCENE s02243 | INT. ROOFTOP AVIARY, HOTEL - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE RAVI SANDHU, LORNA FITCH, ASHWORTH, BETTINA
1 A ¶ Wire cages.
2 A Cooing.
3 A A dead parrot on the floor in a puddle of seed.
4 A Gray light.
5 A ¶ DETECTIVE RAVI SANDHU, forties, rumpled trench, kneels by the body.
6 A LORNA FITCH, fifties, the hotel's head of security, stands with a clipboard.
7 A MR. ASHWORTH, sixties, the owner, wrings his hands in the corner.
8 A BETTINA, twenty, a chambermaid, clutches a mop.
9 D SANDHU: Who found it?
10 D BETTINA: I did, sir. At five.
11 D SANDHU: Door locked?
12 D LORNA: Always. Keys: me, Mr. Ashworth, the bird handler.
13 D ASHWORTH: He's on holiday.
14 D SANDHU: Convenient.
15 A ¶ Sandhu turns the parrot over.
16 A A tiny tag around its leg reads Percival.
17 A He freezes.
18 D SANDHU [CONT'D]: Everyone out.
19 A ¶ They scatter, Bettina first, Ashworth tripping on his own cane, Lorna last, throwing a look back as the door swings shut.

### SCENE s01380 | INT. COUNTY COURTHOUSE - COURTROOM 3 - NIGHT
Detected names (may be incomplete or contain aliases): RHEA KOSTOPOULOS, WALTER NGATA
1 A ¶ The room after everyone has gone.
2 A Folding chairs askew, a fan turning lazily above empty benches, a bailiff's coffee cup still ringing the oak rail.
3 A The jury box is a row of pressed-flat cushions.
4 A ¶ RHEA KOSTOPOULOS, 40s, defense attorney, sits alone at the long table with her shoes off and her jacket over the chair.
5 A The verdict form lies in front of her.
6 A She has read it twelve times.
7 A ¶ The side door opens.
8 A WALTER NGATA, 50s, prosecutor, tie loosened to half-mast, carries two paper cups and sets one on her table without a word.
9 A He lowers himself into the chair opposite, and for a while the only sound is the fan, the clock, the hum of the vending machine in the corridor.
10 A She lifts the cup, sniffs it, takes a sip, and winces.
11 A He does the same and winces in precisely the same way, and they both look at the cups as if the coffee had betrayed them both equally.
12 D WALTER: It's terrible.
13 D RHEA: It's honest.
14 D WALTER: I wanted to say good trial.
15 D RHEA: You won, Walter. You can say anything.
16 D WALTER: I know. That's why it's hard to say.
17 A ¶ She turns the verdict form face down.
18 A He watches her do it.
19 A Then he stands, crosses to the jury box, and picks up a cushion that has slid off a seat, patting it back into place as though it matters.
20 A She laughs once, without humor, and he turns.
21 D WALTER [CONT'D]: What?
22 D RHEA: You're tidying.
23 D WALTER: Habit.
24 D RHEA: Thirty years and you still fix the chairs.
25 D WALTER: Someone has to.
26 D RHEA: Hector Salas is going away for twenty-five years.
27 D WALTER: He was guilty.
28 D RHEA: He was nineteen.
29 D WALTER: So was the boy in the road.
30 A ¶ Silence.
31 A The fan ticks.
32 A She looks at her hands.
33 D RHEA: I know. I stood there while his mother cried, and I thought, I'm on the wrong side of this room.
34 D WALTER: You weren't.
35 D RHEA: No. I wasn't. Somebody had to be.
36 A ¶ He sits again, heavily.
37 A Pushes the cup toward the center of the table.
38 A She pushes hers to meet it.
39 D WALTER: Want to get a drink?
40 D RHEA: I want to go home and sleep for a week.
41 D WALTER: That's a no.
42 D RHEA: That's a ask me again in a month.
43 D WALTER: I will.
44 A ¶ She stands, gathers her files and her shoes, the verdict form folded into her briefcase.
45 A At the door she pauses with a hand on the light switch.
46 D RHEA: Walter.
47 D WALTER: Yes?
48 D RHEA: Fix the chairs on your way out.
49 A ¶ She flicks the switch.
50 A Half the room goes dark.
51 A He sits a moment longer in the remaining light, then rises and begins, one by one, to straighten them.

### SCENE s01826 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): VINNIE, CARUSO, DARIUS CALLOWAY, MARISOL DEVEREAUX, LORNE TREMBLAY, ^MARISOL
1 A ¶ A windowless room behind a pawnshop.
2 A Shelves of unclaimed guitars, a safe the size of a refrigerator, a card table under a hanging bulb.
3 A A space heater ticks in the corner.
4 A ¶ Four people.
5 A VINCENT "VINNIE" CARUSO, 50s, the owner, sits at the card table counting cash into stacks with a wet thumb.
6 A His nephew DARIUS CALLOWAY, 20s, leans on the safe with arms folded, a duffel bag at his feet.
7 A At the door stands MARISOL DEVEREAUX, 30s, in a long coat, one hand in her pocket.
8 A And across from Vinnie, on a folding chair, sits LORNE TREMBLAY, 40s, a courier who has not taken off his gloves.
9 D VINNIE: Eleven. Twelve.
10 A ¶ He slides a stack to Lorne and starts a new one.
11 D LORNE: It was fifteen.
12 D VINNIE: It was fifteen before the thing with the plates.
13 D LORNE: Nobody told me about plates.
14 D VINNIE: Nobody told me you'd double-park.
15 A ¶ Darius uncrosses his arms, bends to unzip the duffel an inch, looks inside, and zips it again.
16 A Marisol shifts against the door frame and the floor creaks.
17 A Lorne watches her.
18 A She watches Vinnie.
19 A Vinnie keeps counting, and no one in the room touches anything they haven't already touched.
20 D LORNE: Who is she?
21 D VINNIE: A friend of the family.
22 D LORNE: She doesn't look like family.
23 D MARISOL: That's because I'm not.
24 A ¶ She takes her hand out of her pocket.
25 A It is empty.
26 A She sets it on the doorknob, and Lorne breathes out.
27 D LORNE: You're making me nervous, lady.
28 D MARISOL: Good.
29 D VINNIE: Marisol, sit.
30 D MARISOL: I'm fine.
31 D VINNIE: Sit down. You're scaring the courier.
32 A ¶ She sits on an amp case near the door.
33 A Darius crouches by the duffel again.
34 D DARIUS: Uncle V. It's not all there.
35 D VINNIE: Of course it's not all there.
36 D DARIUS: Then what's the point of--
37 D VINNIE (cutting in): What's the point is we count it twice, once for him and once for us.
38 A ¶ Lorne leans forward.
39 A The chair squeaks.
40 D LORNE: I want to know what's in the duffel.
41 D DARIUS: Paperwork.
42 D LORNE: Paperwork doesn't make a sound like that.
43 D VINNIE: It's a lot of paper.
44 A ¶ Lorne stands.
45 A Darius stands.
46 A Vinnie sets his stack down.
47 A Marisol rises off the amp case with one slow movement and stands between the door and the table.
48 A Nobody speaks.
49 A The space heater ticks louder than it did.
50 D LORNE: Open it.
51 D DARIUS: No.
52 D LORNE: Open it, or I walk and take the eleven.
53 D VINNIE: Take the eleven.
54 D LORNE: Twelve.
55 D VINNIE: Twelve.
56 A ¶ Lorne reaches down for the money, but Darius steps forward and blocks the table.
57 A They stand almost chest to chest.
58 A Lorne is shorter.
59 A He does not step back.
60 D MARISOL: Darius.
61 D DARIUS (over his shoulder): He's not leaving with it.
62 D VINNIE (simultaneously): Let him take the twelve.
63 D ^MARISOL: Let him go, Darius.
64 A ¶ Darius does not move.
65 A Marisol puts her hand into her coat pocket again, and this time the shape in it is not empty.
66 D MARISOL [CONT'D]: Step away from the table.
67 A ¶ Everyone freezes.
68 A The bulb sways.
69 A It lights Lorne's face, then Darius's, then Marisol's, then Vinnie's, one after another, as it swings.
70 A ¶ Darius steps back.
71 A His hands come up.
72 A Lorne takes the twelve stacks, folds them into his jacket, and walks to the door.
73 A Marisol opens it for him and he goes through.
74 A ¶ The door closes.
75 A The latch clicks.
76 A Vinnie lets out a breath he has been holding for a long time, and sits.
77 D VINNIE (to Marisol): You had nothing in the pocket.
78 D MARISOL: I had a stapler.
79 A ¶ Darius, still with his hands up, starts to laugh.
80 A It cracks halfway into a cough.
81 A Vinnie rubs his eyes with one hand, then reaches across and unzips the duffel himself.
82 A ¶ Inside, under a folded newspaper, are bricks of cash, rubber-banded.
83 D VINNIE: Count it again.
84 D DARIUS: Now?
85 D VINNIE: Now.
86 A ¶ Darius kneels.
87 A Marisol takes off her coat and hangs it on a guitar neck.
88 A Somewhere out front the shop bell rings once, and all three go quiet and look at the door.

### SCENE s01483 | EXT. MANGROVE SWAMP - HIDDEN OXBOW LAGOON - DAWN
Detected names (may be incomplete or contain aliases): DESTA ALEMAYEHU-VOSS, KIPP LOUGHRAN
1 A ¶ Mist on black water.
2 A Tangled roots like the knuckles of drowned giants.
3 A A kingfisher stitches blue over the surface.
4 A ¶ A dugout canoe drifts to the bank.
5 A DESTA ALEMAYEHU-VOSS (40s, cracked sunglasses, rope-burned palms, a satchel of dried fish) steps ashore.
6 A Behind her, curled in the bow, KIPP LOUGHRAN (teen, thin, a bandaged ankle) hugs his knees.
7 D DESTA: Camp's through here.
8 D KIPP: You said that yesterday.
9 D DESTA: Yesterday I was lying.
10 A ¶ She hauls the canoe up the bank.
11 A Kipp limps after, peering around.
12 A ¶ An ironwood tree.
13 A A hammock.
14 A A fire pit with warm ash.
15 A A stack of dry kindling.
16 A A rusted pot, upturned, drying in the sun.
17 D KIPP: Somebody lives here.
18 D DESTA: Somebody did.
19 D KIPP: Who?
20 A ¶ She sets down the satchel.
21 A Takes out the fish and starts to lay them on a flat stone.
22 D DESTA: Let's eat.
23 A ¶ Kipp stays by the tree.
24 A He runs a finger along the bark.
25 A Fresh cuts.
26 A A tally: dozens of notches, in columns of five.
27 D KIPP: These are new.
28 D DESTA (not looking up): Don't touch things.
29 D KIPP: How long since the last notch?
30 D DESTA: Eat.
31 A ¶ He turns.
32 A Looks at her.
33 A She keeps her eyes on the fish.
34 A The kingfisher flies off.
35 D KIPP: You've been here before.
36 D DESTA: Once.
37 D KIPP: When?
38 A ¶ She lifts her head.
39 A Her eyes go past him to the upturned pot, where a small boot, child-sized and rotted, sticks out from under the rim.
40 D DESTA [CONT'D] (very softly): Kipp. Don't turn around.
41 A ¶ He turns around.
42 A He sees the boot.
43 A He sees the tally.
44 A He counts the columns, lips moving, and stops at the last notch, which is shallow and fresh.
45 D KIPP: There's one for me.
46 A ¶ Desta says nothing.
47 A The mist closes over the water.

### SCENE s00477 | INT. MATTRESS SHOWROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAN, GUARD DESHAWN, GILBERT
1 A ¶ Ninety beds in perfect rows.
2 A A neon sign: SLEEP KINGDOM.
3 A Rain on the roll-up door.
4 A One security light, buzzing.
5 A ¶ A MAN in a bathrobe (50s, slippers, a thermos of soup) sits on the edge of a king-size display, staring at the ceiling.
6 A ¶ GUARD DESHAWN (30s, polyester uniform, flashlight) enters from the back office.
7 A Stops.
8 A Raises the flashlight.
9 D GUARD DESHAWN: Sir.
10 A ¶ The man waves without looking.
11 D MAN: Evening.
12 D GUARD DESHAWN: Sir. We are closed.
13 D MAN: I know.
14 D GUARD DESHAWN: How did you get in?
15 D MAN: Ordered a delivery. Left the door ajar. Your driver was very nice.
16 D GUARD DESHAWN: You can't be here.
17 D MAN: I haven't slept in six weeks. Do you know what that does to a person?
18 D GUARD DESHAWN: No.
19 D MAN: It does something. Not good. I keep seeing a man in the corner of the room. Turns out it's a coat rack. But the point stands.
20 D GUARD DESHAWN: Sir. I will have to call someone.
21 D MAN: Call whoever you like. Let me just try this one for ten minutes.
22 D GUARD DESHAWN: It's a three-thousand-dollar mattress.
23 D MAN: Hence the ten minutes.
24 D GUARD DESHAWN: I'm going to need your name.
25 D MAN: Gilbert.
26 D GUARD DESHAWN: Gilbert what?
27 D GILBERT: Gilbert Ferreira-Whitlock. Hyphenated, a long story, involves a cousin.
28 D GUARD DESHAWN: Mr. Whitlock.
29 D GILBERT: Ferreira-Whitlock. The hyphen is the whole point.
30 D GUARD DESHAWN: Gilbert. My shift ends at six.
31 D GILBERT: Then we have six hours.
32 D GUARD DESHAWN: You don't have six hours. You have until I call my manager.
33 D GILBERT: Your manager is Brenda. Brenda told me, and I quote, "he's a sweetheart, let him sleep."
34 D GUARD DESHAWN: When?
35 D GILBERT: Tuesday. At the open house. I do not remember it clearly but I trust Brenda.
36 D GUARD DESHAWN: There is no open house on Tuesday.
37 D GILBERT: Then it was a dream. A very restful dream.
38 D GUARD DESHAWN: Gilbert, please.
39 D GILBERT: Deshawn. May I call you Deshawn? It says Deshawn on the tag.
40 D GUARD DESHAWN: It says GUARD DESHAWN on the tag.
41 D GILBERT: That's what I said.
42 D GUARD DESHAWN: You said Deshawn.
43 D GILBERT: It's a lovely name.
44 A ¶ Deshawn sits on the next bed over.
45 A Springs sigh.
46 A He puts the flashlight on his knee.
47 D GUARD DESHAWN: My mother had a bed like this.
48 D GILBERT: Did she sleep well?
49 D GUARD DESHAWN: She did.
50 D GILBERT: There. You see.
51 A ¶ Gilbert lies down in his robe, hands folded on his chest.
52 A He closes his eyes.
53 D GILBERT [CONT'D]: Don't leave. I might wake up.
54 D GUARD DESHAWN: Ten minutes.
55 D GILBERT: Ten minutes.
56 A ¶ Deshawn lies back.
57 A The neon buzzes.
58 A The rain keeps on.
59 A ¶ Two snores, nearly in unison.

### SCENE s00126 | INT. SKYLARK ROLLER RINK - AFTER HOURS
Detected names (may be incomplete or contain aliases): SLIM, DUBREUIL, MARISOL AGUILERA, BIG TEDDY KOWALSKI, MOUSE, PETROVA, DETECTIVE HARUKI SATO
1 A ¶ Disco ball dead.
2 A Neon half-lit.
3 A The rink floor is a lacquered oval of scuffs.
4 A In the center, a card table.
5 A Five folding chairs.
6 A ¶ Five people.
7 A All in shoes, none on skates.
8 A ¶ CORNELIUS "SLIM" DUBREUIL, 60s, tall, silver pompadour, dinner jacket from another decade, deals cards like he is laying bricks.
9 A ¶ MARISOL AGUILERA, 30s, red lipstick, tailored black jumpsuit, counts chips without looking.
10 A ¶ BIG TEDDY KOWALSKI, 50s, shoulders like a vending machine, a toothpick in his teeth.
11 A ¶ "MOUSE" PETROVA, 20s, hood up, sneakers untied, fingers drumming the table.
12 A ¶ And DETECTIVE HARUKI SATO, 40s, plain suit, plain tie, wedding ring, a face that gives away nothing at all.
13 D SLIM: Nobody leaves the table till the pot's been called. House rule.
14 D MARISOL: Since when does a roller rink have house rules?
15 D SLIM: Since I bought it, Marisol.
16 D BIG TEDDY: It's a good rink. Smells like feet and popcorn.
17 D MOUSE: Smells like money. Slim, you cut the deck twice.
18 D SLIM: I cut it once, Mouse. Your eyes are tired.
19 D MOUSE: My eyes are fine. Haruki, what do you say?
20 D SATO: I say I came to play cards.
21 D MARISOL: You came to listen, Haruki. We all know it.
22 D SATO: Marisol, if I wanted to listen, I'd have brought a wire.
23 D BIG TEDDY (chuckles): Wire. Heh.
24 D SLIM: Ante up, children.
25 D MOUSE: Slim, who's the sixth chair for?
26 D SLIM: There's no sixth chair.
27 D MOUSE: There's a chair. Right there. By the door.
28 D SLIM: That's a coat rack, Mouse.
29 D SATO: Mouse is right, Slim. That's a chair.
30 D BIG TEDDY: Why would there be a sixth chair, Slim?
31 D SLIM (quiet): For whoever's coming to collect.
32 D MARISOL: Collect what?
33 D SLIM: Teddy. Tell her.
34 D BIG TEDDY: Slim, I don't...
35 D SLIM: Tell her what you sold me.
36 D BIG TEDDY: Marisol, I never meant...
37 D MARISOL: Teddy.
38 D BIG TEDDY: It was the Bay Street job. They knew the route. I gave them the route.
39 D MOUSE: Oh, no.
40 D SATO: Nobody move.
41 A ¶ The front doors of the rink swing wide.
42 A Light floods in.

### SCENE s00771 | INT. NIGHT FERRY - VENDING ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, ROSALIND ACHTERBERG, ELIAS, TEO, DECKHAND, PRIYA
1 A ¶ Humming machines.
2 A Sticky floor.
3 A Dark windows.
4 A ¶ A STRANGER, 50s, wet coat, sits on the bench.
5 A He stares at his hands.
6 A ¶ ROSALIND ACHTERBERG, 60s, steps in with a paper cup.
7 A She stops.
8 A Her grip tightens on the cup.
9 D ROSALIND: You're on my bench.
10 D STRANGER: I don't know you.
11 A ¶ She studies him.
12 A Something in his jaw.
13 D ROSALIND: Elias.
14 A ¶ He looks up.
15 A Long beat.
16 D ELIAS: Rosalind. You got old.
17 D ROSALIND: Twenty years will do that.
18 A ¶ TEO, 9, in a hoodie too big for him, peeks from behind the snack machine.
19 A He clutches a bag of chips.
20 D TEO: Grandma, who's that?
21 D ROSALIND: Nobody, Teo. Go find your mother.
22 D ELIAS (softly): Teo. Good name.
23 A ¶ A DECKHAND, PRIYA, 20s, orange vest, leans in.
24 D PRIYA: Ma'am, we dock in ten. Everyone okay?
25 A ¶ Rosalind sits.
26 A Not beside him.
27 A Near.
28 D ROSALIND: We're fine, Priya.
29 A ¶ He nods once.
30 A She sips.
31 A The ferry rocks.

### SCENE s00692 | INT. CARGO WAREHOUSE - LOADING BAY 6 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT FOLASADE ADEBAYO, REUBEN MARSH, PD, FOLA, STRANGER, IMELDA DRAY, NIKOLAI
1 A ¶ Concrete.
2 A Pallets.
3 A Sodium lights buzzing.
4 A A forklift idles.
5 A ¶ AGENT FOLASADE ADEBAYO, 30s, FBI jacket under a rain slicker, moves between shipping crates with her weapon low.
6 A Behind her, REUBEN MARSH, 50s, local PD, wheezes, flashlight in hand.
7 D REUBEN: Fola, wait.
8 D FOLA: Keep your voice down.
9 D REUBEN: Nobody's here.
10 D FOLA: Somebody dropped this.
11 A ¶ She holds up a ring of keys.
12 A Reuben shines the light on them.
13 A ¶ A STRANGER, 40s, in a dark wool coat, stands motionless at the end of the aisle.
14 A Both swing their guns toward him.
15 D STRANGER: Easy. Easy.
16 D FOLA: Hands where I can see them.
17 D STRANGER: They're empty.
18 D REUBEN: Name.
19 D STRANGER: You first.
20 A ¶ Fola takes a step forward.
21 A The Stranger smiles.
22 D STRANGER [CONT'D]: Agent Adebayo. You look tired.
23 D FOLA: How do you know my name?
24 D STRANGER: I've read your reports.
25 D REUBEN: What reports?
26 D FOLA: Reuben, don't.
27 D STRANGER: Detective Marsh. You should ask her about Lagos.
28 A ¶ Reuben's light wavers on Fola's face.
29 D REUBEN: What's in Lagos?
30 D FOLA: Nothing. He's playing us.
31 D STRANGER: Or I'm the only honest one here.
32 A ¶ IMELDA DRAY, 50s, steps out of the shadow behind Reuben, a silenced pistol pressed to the back of his neck.
33 A She is in a janitor's smock, calm as a clerk.
34 D IMELDA: Drop it, Detective.
35 A ¶ Reuben drops the flashlight.
36 A It rolls.
37 D FOLA: Imelda. Walk away.
38 D IMELDA: I can't. Not until I get the ledger.
39 D FOLA: I don't have it.
40 D IMELDA: No. He does.
41 A ¶ All three look at the Stranger.
42 A He taps his coat.
43 D STRANGER: My name is Nikolai Orlov. I'd like to hand it over, if you'll all stop pointing things at me.
44 D NIKOLAI (CONT'D): The ledger names every one of you.
45 D REUBEN: Fola, what does he mean every one of us?
46 D FOLA: It means somebody in this room is on the take.
47 D IMELDA: Or two.
48 D NIKOLAI: Or three.
49 A ¶ Silence.
50 A Rain on the roof.
51 D REUBEN: I didn't do anything.
52 D NIKOLAI: Not yet.
53 A ¶ Imelda cocks the pistol.

### SCENE s02331 | INT. BAKERY - PREDAWN
Detected names (may be incomplete or contain aliases): PILAR, JONAH, DELACROIX-WU
1 A ¶ A narrow shop.
2 A Racks of proofing dough under cloth.
3 A A radio plays low, in Portuguese.
4 A Flour in the air like smoke.
5 A ¶ PILAR, 30s, scores loaves with a razor in fast, even strokes.
6 A Apron, forearms white to the elbow.
7 A ¶ JONAH, 30s, the delivery driver, leans on the counter with a crate under one arm, and has been leaning there too long.
8 D PILAR: You're early.
9 D JONAH: You're late.
10 D PILAR: I've been here since two.
11 D JONAH: That's what I mean.
12 A ¶ She doesn't smile.
13 A She slides a tray into the oven, closes the door with her hip, and wipes her hands on her apron, and he pretends to read the crate label while she does.
14 D PILAR: You bring the rye flour?
15 D JONAH: Forty pounds. And the thing you asked for.
16 A ¶ He reaches into his jacket and pulls out a small paper bag, slightly crushed.
17 A She takes it, opens it, looks inside.
18 A A single cherry.
19 D PILAR: One?
20 D JONAH: They only had one.
21 D PILAR: It's July.
22 D JONAH: That's when they stop having them.
23 A ¶ She sets the cherry on the cutting board and looks at it as if it were a coin from a country she has never visited.
24 A ¶ Jonah sets down the crate.
25 A Steps closer.
26 A She doesn't step away.
27 D PILAR [CONT'D] (together): You shouldn't.
28 D JONAH (together): I wanted to.
29 A ¶ They both laugh, quietly.
30 A The radio fills the gap.
31 A ¶ The back door opens.
32 A MR. DELACROIX-WU, 70, her landlord, in a tweed cap and a rain-spotted coat, steps in stamping his shoes.
33 A He takes in the two of them, the cherry, the flour.
34 D MR. DELACROIX-WU: Pilar. The roof.
35 D PILAR: What about the roof?
36 D MR. DELACROIX-WU: It leaks onto the dough.
37 A ¶ Pilar and Jonah look at the ceiling together.
38 A A drop forms.
39 A Falls.
40 A Lands on a loaf with a soft plop.
41 A Nobody moves for a moment.
42 A Jonah picks up the cherry and sets it gently on the damp loaf, like a crown.

### SCENE s00954 | EXT. SALOON ROOFTOP, DEAD MAN'S CROSSING - SUNSET
Detected names (may be incomplete or contain aliases): SHERIFF OBADIAH TRELAWNEY-KANE, JED, RUSSO-ABIOLA, MAGDALENA SOLIS-FAIRWEATHER, FINN, O'HALLORAN-DIOP
1 A ¶ A flat saloon roof with a rickety rain barrel at one corner.
2 A A church bell hangs from a crooked post nearby.
3 A The street below is still.
4 A Warm light on dust.
5 A ¶ SHERIFF OBADIAH TRELAWNEY-KANE (50s, white mustache, a star pinned to a faded vest) sits on the barrel playing a harmonica.
6 A Across from him, DEPUTY JEDEDIAH "JED" RUSSO-ABIOLA (20s, hat tilted) eats beans from a tin.
7 A A woman in a gingham dress, MAGDALENA SOLIS-FAIRWEATHER (30s, a basket on her arm), hangs laundry on a line between two chimneys.
8 A Near the edge, FINNEGAN "FINN" O'HALLORAN-DIOP (40s, drover's hat pulled low) leans against the bell post, whittling.
9 D OBADIAH (to Jed): Quiet day.
10 D JED: Too quiet.
11 D MAGDALENA (to all of them): Anyone want pie?
12 D FINN (muttering): Pie, she says.
13 D OBADIAH: I'll take pie, Maggie.
14 D JED: I'll take two.
15 D MAGDALENA: Then you can come get it.
16 D OBADIAH: Come get it, Jed.
17 D JED: Why me?
18 D FINN: Because you're the youngest, son.
19 D JED: I'm not --
20 D OBADIAH: Quiet.
21 D FINN: Hear that?
22 A ¶ All four go still.
23 A Far off, hoofbeats.
24 A A hundred horses.
25 A Then a thousand.
26 A The church bell hums on its post.
27 D MAGDALENA: Obadiah?
28 D OBADIAH: Everyone down.
29 D JED: But sir --
30 D FINN: Down!
31 A ¶ They drop behind the parapet.
32 A From the end of the street, a dark mass rolls in: a cattle drive, massive and wild, tearing down Main Street toward them.
33 D JED (laughing, relieved): It's only cattle.
34 D OBADIAH: Look at the riders.
35 A ¶ Behind the stampede, a line of masked men with torches lopes into town.
36 D MAGDALENA (whispering): Lord help us.
37 D FINN (to himself): Not today.
38 A ¶ Obadiah rises, tucks the harmonica into his vest, and draws his revolver.
