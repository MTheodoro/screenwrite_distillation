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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00033.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01584 | INT. VICTORIAN CONSERVATORY - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY EVELYN ASHCROFT, JULIAN THORNBURY
1 A ¶ Glass roof, iron ribs.
2 A Ferns the size of carriages.
3 A A wrought-iron table set for tea in the middle of a green jungle.
4 A ¶ LADY EVELYN ASHCROFT (60s, lavender silk, a cane she uses more for pointing than walking) pours from a silver pot.
5 A Across from her, MR. JULIAN THORNBURY (30s, young solicitor, tight collar, too-new gloves) perches on the edge of a wicker chair.
6 D EVELYN: Sugar, Mr. Thornbury?
7 D JULIAN: Two, thank you.
8 D EVELYN: Two. Ambitious.
9 D JULIAN: I have a sweet tooth, Lady Ashcroft.
10 D EVELYN: I have a lawyer's nephew with a sweet tooth. I trust you are not he.
11 D JULIAN: I am nobody's nephew, my lady.
12 A ¶ She drops two lumps.
13 A Stirs once.
14 A Hands the cup across.
15 D EVELYN: Then you have no reason to flatter me.
16 D JULIAN: I flatter no one.
17 D EVELYN: A pity. I should like to be flattered. At my age it is the only vitamin.
18 A ¶ He sips.
19 A Burns his tongue.
20 A Hides it.
21 D JULIAN: My firm has sent me about the estate.
22 D EVELYN: The estate.
23 D JULIAN: The matter of the east orchard.
24 D EVELYN: The orchard has been mine for forty years.
25 D JULIAN: And the Hargreaves family wishes to purchase it.
26 D EVELYN: The Hargreaves family wishes a great many things.
27 D JULIAN: They offered considerably more than market value.
28 D EVELYN: Then it is worth considerably more than market value.
29 D JULIAN (carefully): That is what the firm suspects.
30 A ¶ She sets down the pot.
31 A Studies him.
32 D EVELYN: You are not as foolish as you dress.
33 D JULIAN: I beg your pardon.
34 D EVELYN: Nothing. Another biscuit?
35 D JULIAN: Thank you.
36 A ¶ He takes one.
37 A She watches him bite.
38 D EVELYN: Do you know what grows in the east orchard, Mr. Thornbury?
39 D JULIAN: Apples, I assume.
40 D EVELYN: Apples. Pears. And beneath the fourth pear tree, a good deal else.
41 D JULIAN: My lady?
42 D EVELYN: Eat your biscuit.
43 A ¶ He does.
44 A A parrot shrieks somewhere in the ferns.
45 A They both pretend not to hear it.
46 D EVELYN [CONT'D]: My late husband was a collector.
47 D JULIAN: Of what?
48 D EVELYN: Whatever he could not bear to leave to others.
49 D JULIAN: That is a poet's phrase.
50 D EVELYN: He was not a poet.
51 A ¶ A pause.
52 A The rain begins on the glass.
53 A Soft, then steady.
54 D JULIAN: Is there anything I should tell the Hargreaves?
55 D EVELYN: Tell them the orchard is not for sale.
56 D JULIAN: May I tell them why?
57 D EVELYN: You may tell them it is sentimental.
58 D JULIAN: Is it?
59 D EVELYN: Entirely.
60 D JULIAN: I shall convey it.
61 A ¶ She pours him more tea.
62 A They sit for a while without speaking.
63 D JULIAN [CONT'D] (gently): Lady Ashcroft, the firm will not stop at one letter.
64 D EVELYN: Then the firm will find me at home.
65 D JULIAN: You are very brave.
66 D EVELYN: I am very old. It is a different thing.
67 A ¶ He smiles.
68 A She smiles back.
69 A In the glass, the rain keeps falling.
70 D EVELYN [CONT'D]: Another cup, Mr. Thornbury?
71 D JULIAN: Please.
72 A ¶ She pours.
73 A The steam rises between them.

### SCENE s00629 | INT. HOSPICE WING - NIGHT SHIFT NURSES' STATION
Detected names (may be incomplete or contain aliases): GRACE, ADEYEMI, DEVON MARSH, INTERCOM, DOREEN, LEONIDAS MARSH
1 A ¶ Low light.
2 A Quiet monitors.
3 A A call button blinks red on a wall panel.
4 A Somewhere down the hall, a television murmurs a game show to nobody.
5 A ¶ GRACELYN "GRACE" ADEYEMI, fifties, charge nurse, signs a chart and doesn't look at her visitor.
6 A DEVON MARSH, thirties, the patient's son, stands at the counter in a rumpled suit, a paper cup of cold coffee in his hand.
7 D INTERCOM [V.O.]: Station, room fourteen. Mr. Marsh is asking for his son again.
8 D GRACE (into the panel): On my way, Doreen.
9 A ¶ She lifts a finger to Devon.
10 A He doesn't move.
11 D DEVON: He keeps calling me Walter.
12 D GRACE: That's his brother. Passed in '98.
13 D DEVON: I know who Walter is.
14 D GRACE: Then you know it's not an insult.
15 A ¶ Devon puts down the cup.
16 A His hand shakes slightly.
17 D DEVON: Grace, I'm not ready for this.
18 D GRACE: Nobody is, Devon. We just show up.
19 D INTERCOM [V.O.] (softer): Grace. He's asking for the window open.
20 D GRACE (into the panel): Open it, Doreen. Let him have the air.
21 A ¶ She turns back to Devon.
22 D GRACE [CONT'D]: Go. Say you're Walter if you have to.
23 D DEVON: He'd know.
24 D GRACE: He'd know and he'd want it anyway.
25 A ¶ A long breath.
26 A Devon straightens his tie, then loosens it again.
27 D DEVON: You've done this a lot.
28 D GRACE: Thirty-one years.
29 D DEVON: Does it get easier?
30 D GRACE (gently): No. You get kinder.
31 A ¶ He nods.
32 A He goes.
33 A She watches him go down the hall until the dark takes his shoulders.
34 D DOREEN [O.S.]: Grace? He's saying hello to somebody.
35 D GRACE (to herself): Good.
36 D LEONIDAS MARSH [O.S.] (faint, delighted): Walter? Is that you, Walter?
37 A ¶ Grace closes her eyes a moment.
38 A She picks up the pen and writes the time.

### SCENE s02480 | INT. ICE ARENA - ZAMBONI BAY - NIGHT
Detected names (may be incomplete or contain aliases): LUCIANA FERRARI-OYELE, DEACON BRUNO, BARTOSZ
1 A ¶ Concrete.
2 A Fluorescent hum.
3 A A resurfacer idles, steam rising off its blade.
4 A Puddles on the floor.
5 A ¶ LUCIANA FERRARI-OYELE, 20s, goalie, pads strapped on, sits on an upturned bucket.
6 A Helmet on her knee.
7 A ¶ DEACON BRUNO, 60s, driver, climbs down from the machine with a coffee.
8 A Slow knees.
9 D LUCIANA: You're late, Deacon.
10 D DEACON: You're early, Lu.
11 A ¶ He sits on a second bucket.
12 A Offers the coffee.
13 A She shakes her head.
14 A ¶ Silence.
15 A Compressor thrum.
16 D LUCIANA: Three hundred shots.
17 D DEACON: That a goal?
18 D LUCIANA: That's tonight. Before they flood the ice.
19 D DEACON: You'll wear a hole in the crease.
20 D LUCIANA: Good.
21 A ¶ A wall speaker CRACKLES.
22 D BARTOSZ [V.O.] (over PA, tinny): Deacon, you in the bay?
23 D DEACON (not moving): Where else.
24 D BARTOSZ [V.O.]: Hold the flood. Coach wants Luciana out there another hour.
25 A ¶ Deacon looks at Luciana.
26 A She looks at the floor.
27 D DEACON: She's already here, Bart.
28 D BARTOSZ [V.O.]: Then she's early. Tell her thanks.
29 A ¶ Click.
30 A Silence.
31 D LUCIANA: He doesn't know I'm out of the lineup.
32 D DEACON: Tell him.
33 D LUCIANA: Tomorrow.
34 D DEACON: Tomorrow, Lu, I'll be flooding ice you're not on.
35 A ¶ She pulls her helmet down.
36 A Stands.
37 A Bangs her stick twice on the concrete.
38 D LUCIANA: Open the door, Deacon.
39 A ¶ He climbs back on the machine.
40 A Lifts the gate.
41 A Cold light pours across the ice.

### SCENE s00898_0 | EXT. HIGH DESERT - LONE CABIN - MORNING
Detected names (may be incomplete or contain aliases): ELIJAH FARROW
1 A ¶ A silver wind combs the sage.
2 A A tin chimney leans.
3 A ELIJAH FARROW, 50s, sits on the porch step in a sun-faded hat, a tin cup steaming in his hands.
4 A His horse dozes at the post, tail flicking, while a crow on the fence rail considers him with one black eye, the wind rattles a loose shutter, the dog's shadow slides across the dust, and Elijah sips, tips back his hat, and waits for something he doesn't name.
5 D ELIJAH (V.O.): Dear Ruth. The roof held through the storm.
6 A ¶ He sets the cup down.
7 A A faraway drone.
8 A A rider, small, grows on the horizon.
9 D ELIJAH [V.O., CONT'D]: I expect I'll have company soon. Don't worry. I've kept the kettle on.
10 A ¶ The rider comes closer, and the crow lifts off the rail.
11 A The horse lifts its head.
12 A Elijah stands slowly, wipes his hands on his trousers, and walks inside.
13 D ELIJAH [CONT'D] (to himself): Well.
14 A ¶ He lifts the shotgun from its pegs above the door and breaks it open.
15 A Two shells.
16 A He thumbs them in.
17 A He closes the gun with a soft, sure click.

### SCENE s01385 | EXT. RIVERBANK - ABANDONED MILL - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT MIREILLE DUVAL, PRIVATE OSKAR LINDGREN, WOUNDED SOLDIER, MORTAR
1 A ¶ Mist.
2 A A rusted waterwheel stands half-sunk in the current.
3 A Birdsong where there should be none.
4 A ¶ Three soldiers crouch behind a broken wall.
5 A Mud to the knees.
6 A Eyes red.
7 A ¶ SERGEANT MIREILLE DUVAL, 30s, holds a rifle across her knees and watches the far bank.
8 A ¶ PRIVATE OSKAR LINDGREN, 19, wrings out a sock.
9 A Ruined boots beside him.
10 A ¶ A third figure lies on his back under a tarp, only a hand showing.
11 A Breath fogs.
12 A He is the WOUNDED SOLDIER, 20s, pale, one sleeve soaked dark.
13 D OSKAR (whispering): Quiet out there.
14 D MIREILLE: Too quiet.
15 D OSKAR: That's what I said.
16 D MIREILLE: You said "quiet."
17 D OSKAR: Same thing.
18 A ¶ She doesn't smile.
19 A Leans out an inch, scans, retreats.
20 D MIREILLE: Mill's empty. I checked.
21 D OSKAR: Checked what?
22 D MIREILLE: Everything.
23 A ¶ Oskar tugs the dry sock on.
24 A Eases a boot over it.
25 A Winces.
26 A ¶ The wounded man stirs.
27 A Mutters.
28 A His good hand claws at the tarp.
29 D WOUNDED SOLDIER (delirious): Mama... the stove's still on...
30 D OSKAR: He's talking.
31 D MIREILLE: Let him.
32 D OSKAR: Should we give him water?
33 D MIREILLE: Save it.
34 A ¶ She taps a canteen.
35 A Hollow.
36 A Oskar nods grimly.
37 D OSKAR (to himself): Three days. Three days since a hot meal.
38 D MIREILLE: Four.
39 D OSKAR: Thank you, Sergeant.
40 A ¶ She almost laughs.
41 A Watches the far bank again.
42 A A heron lifts from the reeds and flaps downriver, low over the water.
43 A Nothing follows it.
44 D MIREILLE (to both): We cross at dark. Single file. No talking.
45 D OSKAR: And him?
46 D MIREILLE: We carry him.
47 D OSKAR: He's dead weight.
48 D MIREILLE: He's a man.
49 A ¶ The wounded soldier opens his eyes.
50 A Clear for the first time.
51 A He looks at Mireille.
52 D WOUNDED SOLDIER: Sergeant.
53 D MIREILLE: Easy.
54 D WOUNDED SOLDIER: Leave me.
55 D MIREILLE: No.
56 D WOUNDED SOLDIER: I'll slow you.
57 D MIREILLE: You'll shut up.
58 A ¶ Oskar crawls to the wounded man's side.
59 A Presses his palm on the dressing.
60 A It's wet.
61 A His face changes.
62 D OSKAR: Sergeant.
63 D MIREILLE: What?
64 D OSKAR: He's bleeding out.
65 A ¶ She looks.
66 A Her jaw sets.
67 A She turns away.
68 A Fingers dig into the stock of the rifle.
69 A ¶ The far bank erupts.
70 A A MORTAR round shrieks over the water and lands in the mill yard behind them.
71 A Brick, mud, black smoke.
72 A ¶ Mireille and Oskar throw themselves flat.
73 A The wounded man gasps.
74 A His hand goes limp.
75 A ¶ Another round.
76 A Closer.
77 A The wall they hide behind splits down the middle.
78 D MIREILLE: Move! Move!
79 D OSKAR: He's gone!
80 D MIREILLE: Take his tags!
81 A ¶ Oskar tears the chain from the dead soldier's neck.
82 A Stuffs it in his jacket.
83 A The two of them scramble, bent double, down the bank toward the waterwheel.
84 D MIREILLE (muttering, rifle up): Merde, merde, merde.
85 A ¶ They splash into the shallows as machine-gun fire stitches the water behind them.
86 D SGT. DUVAL (shouting over the noise): Stay low! Follow me!
87 D OSKAR: Where?
88 D SGT. DUVAL: Anywhere that isn't here!
89 A ¶ She plunges into the current.
90 A He follows, holding his rifle overhead.
91 A Under the waterwheel they vanish into the mist.

### SCENE s01902 | EXT. SALT FLATS, ABANDONED RADIO STATION - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT OKSANA BILYK, LIEUTENANT AUGUSTIN FOURNIER-DIALLO, PRIVATE SOLOMON ADEYEMI, CORPORAL RUTH TALBOT-KWAN, PRIVATE LIAM O'DWYER-SINGH, ELIAS, MANDELBAUM
1 A ¶ Cracked white earth.
2 A A rusted mast.
3 A Wind that tastes of metal.
4 A ¶ SERGEANT OKSANA BILYK (30s, goggles) crouches by a concrete shack.
5 A LIEUTENANT AUGUSTIN FOURNIER-DIALLO (30s, bandaged hand) checks a map.
6 A PRIVATE SOLOMON ADEYEMI (19, rifle) hugs the wall.
7 A CORPORAL RUTH TALBOT-KWAN (40s, medic's pack) kneels by the wounded.
8 A PRIVATE LIAM O'DWYER-SINGH (20, radio operator) fiddles with a dial.
9 A And at the edge of the dust, a lone figure in a tattered coat waves a white rag: ELIAS "THE PRIEST" MANDELBAUM (60s, gaunt, cassock).
10 D BILYK: Hold fire. He's got a flag.
11 D AUGUSTIN: Could be a trick.
12 D SOLOMON: He's not armed.
13 D RUTH: He's barefoot.
14 D LIAM: Sergeant, I'm getting something. Weak.
15 D BILYK: Later. Solomon, cover left.
16 D SOLOMON: Covering.
17 A ¶ The Priest shuffles closer, hands raised, rag fluttering.
18 D ELIAS: Please. Don't shoot. I'm only a priest.
19 D AUGUSTIN: Prove it.
20 D ELIAS: I have a Bible in my coat.
21 D RUTH: That proves nothing.
22 D ELIAS: I have bread in my other coat.
23 D LIAM: Bread?
24 D ELIAS: Stale. But bread.
25 D BILYK: Elias, was it? Where are the others?
26 D ELIAS: There are no others. Everyone left in the night.
27 D AUGUSTIN: Everyone?
28 D ELIAS: Both armies.
29 A ¶ They stare at him.
30 A Silence.
31 A Liam taps the radio.
32 D LIAM: Sergeant. It's an order. Cease-fire, effective oh-six-hundred.
33 D BILYK: What time is it now?
34 D AUGUSTIN: Oh-six-ten.
35 A ¶ Bilyk lowers her rifle.
36 A Solomon lets his drop.
37 A Ruth sits down in the dust, laughing quietly.
38 A Elias hands the bread to the nearest soldier, who takes it without a word.
39 D BILYK: Pack up.

### SCENE s00924 | EXT. TELEGRAPH OFFICE, PRAIRIE JUNCTION - DAY
Detected names (may be incomplete or contain aliases): ZEKE, MORROW, TOMAS ESQUIVEL, BILLIE, TATE, DISPATCHER
1 A ¶ A single-room telegraph shack beside the railroad water tower, its porch sagging.
2 A Heat shimmers off the tracks.
3 A A pinto horse is tied to the rail, flicking flies.
4 A ¶ Inside the open door, EZEKIEL "ZEKE" MORROW (50s, stationmaster, sleeve garters, thick spectacles) sits at the key.
5 A The sounder chatters.
6 A He copies down a message, then looks up as hoofbeats thunder in.
7 A TOMAS ESQUIVEL (20s, deputy, hat low) swings off his horse, ties it badly, and bursts onto the porch, while behind him a lean stranger, WILHELMINA "BILLIE" TATE (30s, drover's coat, a rifle in the crook of her arm) rides up slowly and stays in the saddle, watching the street.
8 D TOMAS: Zeke! Is it true?
9 D ZEKE: Sit down, son.
10 D TOMAS: Is it true they're coming here?
11 A ¶ The sounder chatters again.
12 A Zeke raises a hand for quiet, writes, and then reads aloud.
13 D ZEKE: Tower says the Harlan gang crossed the river an hour ago.
14 D DISPATCHER [V.O.] (over the wire, read aloud by Zeke): Hold the junction. Do not engage. Repeat, do not engage.
15 D TOMAS: Do not engage? They'll burn the depot.
16 A ¶ Billie dismounts, walks up the steps, and without a word takes the telegram from Zeke's hand and reads it.
17 A Tomas stares at her rifle.
18 A Zeke takes off his spectacles and wipes them on his sleeve.
19 D BILLIE: Where's the sheriff?
20 D TOMAS: Dead. Fever, three days back.
21 D BILLIE: Then you're the law.
22 D TOMAS: I'm twenty-two.
23 D BILLIE: Today you're the law.
24 A ¶ A rider appears at the end of the street, then another, then five.
25 A Dust rises behind them.
26 A Tomas draws his pistol and his hand shakes.
27 A Zeke slides under the desk.
28 A Billie raises the rifle, levels it, and fires once.
29 A The lead horse rears, and the riders scatter behind the water tower.
30 D TOMAS: You hit him!
31 D BILLIE: I hit the horse. Don't thank me yet.
32 A ¶ Silence.
33 A Then a white handkerchief appears on a rifle barrel from behind the tower.
34 D ZEKE (from under the desk): Is that what I think it is?
35 D BILLIE: Somebody wants to talk.
36 A ¶ Tomas lets out a breath that is almost a laugh.
37 A Billie lowers the rifle but does not unload it.

### SCENE s00465 | EXT. PACK-ICE FLOE - ARCTIC OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN ISOLDE MARCHETTI-OKORO, WILFRED ACHTERBERG, TEMI, BOLDBAATAR, GWENLLIAN PRYCE-ADEYEMI, CAS, WOLFE
1 A ¶ A vast white plain, riven with blue cracks.
2 A A sled lies overturned, its runners splintered.
3 A Gray light bleeds into a pale horizon.
4 A The wind has dropped, leaving an unnatural hush.
5 A ¶ Four dogs lie curled in the lee of the wreck.
6 A Beside them, five survivors huddle around a small spirit stove, its flame hardly bigger than a thumbnail.
7 A ¶ CAPTAIN ISOLDE MARCHETTI-OKORO (50s, frost-crusted beard of scarf, steady eyes) crouches closest to the flame.
8 A DR. WILFRED ACHTERBERG (60s, bruised cheek, wire spectacles) rubs a bandaged hand.
9 A The navigator, TEMUJIN "TEMI" BOLDBAATAR (30s, parka hood rimmed with fur), studies a brass compass.
10 A The cook, GWENLLIAN PRYCE-ADEYEMI (40s, wool cap pulled to her eyebrows), stirs a pot of gray broth.
11 A And the youngest, CASPIAN "CAS" WOLFE (teens, voice cracked, eyelashes iced), sits wrapped in two blankets and shivers.
12 D ISOLDE: Rations.
13 D GWENLLIAN: Three days if we stretch it, Captain.
14 D ISOLDE: Stretch it.
15 D WILFRED: Isolde, the ice is moving.
16 D ISOLDE: I know, Wilfred.
17 D TEMI: Captain, the compass is spinning.
18 A ¶ Isolde crosses to him and takes the compass.
19 A The needle swings in slow circles, never settling.
20 D ISOLDE: Close to the pole?
21 D TEMI: Too close. Or too far.
22 D CAS: Does that mean we're lost?
23 D GWENLLIAN: Hush, Cas. Drink your broth.
24 A ¶ She hands him a tin cup.
25 A He takes it in both mittens.
26 D ISOLDE: Wilfred, the hand.
27 D WILFRED: It will mend.
28 D ISOLDE: It will blacken.
29 D WILFRED: Then it will blacken.
30 A ¶ He tucks it inside his coat.
31 A Isolde regards him for a long moment, then turns away.
32 D ISOLDE: Temi, pick a heading. Any heading. We cannot stay.
33 D TEMI: East.
34 D ISOLDE: Why east?
35 D TEMI: Because the sun comes from there.
36 D ISOLDE (almost smiling): That's as good a reason as any.
37 A ¶ Cas lifts his head.
38 A His voice is small.
39 D CAS: Captain, will the dogs come?
40 D ISOLDE: The dogs always come.
41 D GWENLLIAN: Not Bramble. Bramble's leg.
42 D ISOLDE: Then we carry Bramble.
43 A ¶ They all look at the old gray husky in the snow.
44 A Bramble thumps her tail once.
45 D WILFRED: Isolde, we can barely carry ourselves.
46 D ISOLDE: We will carry her anyway.
47 A ¶ A silence settles.
48 A The stove flickers.
49 A Temi folds the compass shut and tucks it into his sleeve.
50 D TEMI: East, then.
51 D GWENLLIAN: East.
52 D CAS: East.
53 A ¶ They begin to rise, one by one, creaking, stiff.
54 A Isolde kicks snow over the stove, and the flame dies.
55 A Wilfred lifts Bramble gently into his arms.
56 A Gwenllian shoulders the pack.
57 A Cas pulls his blankets tight.
58 A Temi checks the sky.
59 A ¶ Isolde stands last, looking back at the broken sled.
60 A She lays a gloved hand on the splintered runner, as if on the flank of an animal.
61 D ISOLDE (softly): Good work, old girl.
62 A ¶ She turns and walks east, and the others fall in behind her, five dark figures dwindling on the endless white.

### SCENE s02274 | INT. STAGE STATION KITCHEN, DRY CREEK - LATE MORNING
Detected names (may be incomplete or contain aliases): ODELL PRUITT, MAUDE TEAGUE, ZEBEDIAH HOLLOWAY, ZEB, BARNABY
1 A ¶ A one-room adobe with a cuckoo clock that has run seven minutes slow since the Grant administration.
2 A Flies drift in the heat.
3 A A cast-iron stove ticks as it cools.
4 A ¶ ODELL PRUITT, fifties, stationmaster, wipes a tin cup with a rag that is dirtier than the cup.
5 A At the table MAUDE TEAGUE, thirties, a seed-and-feed saleswoman in a dust-grey travelling dress, peels a boiled egg.
6 A ZEBEDIAH HOLLOWAY, called ZEB, eighty, hat on indoors, whittles a stick down to nothing.
7 D ODELL: Coach is late.
8 D MAUDE: Coach is always late.
9 D ZEB: Wheel, probably.
10 D MAUDE: Or the Piute crossing.
11 D ODELL: It's never the Piute crossing.
12 D ZEB: Might be the Piute crossing.
13 A ¶ A horn sounds, faint and flat, out on the road.
14 D BARNABY [O.S.] (far off): Hey the station! Hey, Odell!
15 D ODELL: There. Wheel.
16 D BARNABY [O.S.] (nearer): Axle! Lost the axle at Mesquite Wash!
17 D MAUDE: I told you it was a wheel.
18 D ZEB: Axle's near enough.
19 A ¶ Odell sets down the cup and takes the egg shell Maude offers without thinking.
20 A She sets the egg on the table.
21 A Zeb finishes whittling and examines the empty air where the stick was.
22 D ODELL (to himself): Another night, then.
23 D MAUDE: Is there stew?
24 D BARNABY [O.S.]: Is there stew?
25 D ODELL: There's stew.
26 D ZEB: There's always stew.
27 A ¶ The cuckoo clock coughs, produces one grey wooden bird, and retires without a sound.

### SCENE s01544_0 | INT. ABANDONED RADIO OBSERVATORY - CONTROL ROOM - DAWN
Detected names (may be incomplete or contain aliases): COLETTE ABIODUN-FENWICK, CASS, DRAGOMIR, NESTOR PELLEGRINI-OYELOWO
1 A ¶ Dead consoles.
2 A A dish groans overhead.
3 A Grey light leaks through a shattered window.
4 A ¶ COLETTE ABIODUN-FENWICK, 40s, bleeding from the scalp, sits slumped against a rack of machines.
5 A Her pistol lies beside her hand, slide locked back.
6 A ¶ Across the room, CASSIUS "CASS" DRAGOMIR, 30s, in a torn parka, stands against the far wall with his hands up, a sat phone dangling from one finger.
7 A ¶ Between them lies a third figure, face down, motionless: NESTOR PELLEGRINI-OYELOWO, 50s, in a lab coat, one hand still clutching a flash drive.
8 D COLETTE: You brought him here.
9 D CASS: I brought a doctor.
10 D COLETTE: You brought a corpse.
11 D CASS: He was breathing when we arrived.
12 D COLETTE: Not when I did.
13 A ¶ Cass lowers a hand.
14 A Colette lifts the empty pistol, hand shaking, and levels it.
15 D CASS: It's empty.
16 D COLETTE: You don't know that.
17 D CASS: I counted.
18 D COLETTE: You counted wrong.
19 D CASS: Colette--
20 D COLETTE (whisper): Don't use my name.
21 A ¶ A cough.
22 A Nestor stirs.
23 A Colette and Cass both leap, he toward the body, she toward the pistol, and they collide in the middle of the floor, knocking over a chair.
24 A The sat phone skids across the tile.
25 A ¶ Nestor rolls onto his back, wheezing.
26 A Opens one eye.
27 D NESTOR: Don't shoot.
28 D COLETTE: Nestor. You're alive.
29 D NESTOR: Barely. Cass?
30 D CASS: Here.
31 D NESTOR: Did you call it in?
32 D CASS: The signal's dead.
33 D NESTOR: The dish.
34 D CASS: The dish is broken.
35 A ¶ Nestor drags himself to a sitting position.
36 A He holds up the flash drive, fingers trembling.
37 D NESTOR: Then we do it the old way. Upload by hand.
38 D COLETTE: To what?
39 D NESTOR: There's a transmitter in the basement.
40 D COLETTE: Then we go down.
41 D CASS: It could be mined.
42 D NESTOR: It could.
43 D COLETTE (standing, dusting her coat): Or it could be our only way home.
44 A ¶ Cass stares at her.
45 A At Nestor.
46 A At the drive.
47 D CASS: Fine. But I carry it.
48 D NESTOR: You'll drop it.
49 D CASS: I will not.
50 A ¶ Colette snatches the drive from Nestor and tosses it to Cass without a word.
51 A He catches it one-handed.
52 D CASS [CONT'D] (deadpan): Thank you.
53 D COLETTE: Don't get used to it.
54 A ¶ They help Nestor to his feet, one on each arm.
55 A Together they shuffle toward the stairwell door, three silhouettes against the grey window.
56 A ¶ Behind them, the dish gives a long metallic groan and turns, by a degree, toward the sky.

### SCENE s02209 | EXT. DRY-DOCK SHIPYARD - ROWING TANK - DAWN
Detected names (may be incomplete or contain aliases): NAOMI BERENSON, COACH ILSE VORHEES
1 A ¶ A vast concrete basin, drained and refilled with grey-green water, used by the old shipyard for hull testing and now, secretly, as a rowing course.
2 A Rusted cranes loom like skeletal herons.
3 A Mist lies on the surface.
4 A ¶ A racing shell sits at the dock, a single scull, polished cedar.
5 A Beside it stands NAOMI BERENSON (30s, Olympic hopeful, lean, hair cropped) in a rain jacket, hands on hips, studying the water.
6 A Her breath fogs.
7 A Her calf muscles twitch.
8 A She is alone, and she has been alone for a long time.
9 A ¶ She crouches, tests the water with two fingers, wipes them on her thigh.
10 A She sets the scull in the water and lowers herself into it with one fluid movement.
11 A The oars dip.
12 A ¶ She begins to row.
13 A ¶ The scull glides across the basin.
14 A Her stroke is long and exact.
15 A The mist parts, closes behind her.
16 A A gull cries.
17 A Somewhere beyond the cranes a siren is heard and fades.
18 A ¶ She reaches the far end, turns the shell with two pulls, and comes back.
19 A Faster now.
20 A The oars bite deeper.
21 A Her shoulders flare, her breath hitches, and the water boils behind the blades.
22 A ¶ At the dock, a figure has appeared.
23 A A woman in a heavy wool coat, thermos in hand, standing absolutely still.
24 A This is COACH ILSE VORHEES (60s, grey crop, stern as a gravestone).
25 A She watches the scull approach.
26 A ¶ Naomi sees her.
27 A Her stroke falters.
28 A The right oar catches the water at a bad angle and the boat veers.
29 A She corrects it.
30 A Her breath is ragged.
31 D COACH VORHEES (calling): Don't stop.
32 D NAOMI (between breaths): I'm not stopping.
33 D COACH VORHEES: Then why are you slowing?
34 D NAOMI: I'm not.
35 D COACH VORHEES: Look at the clock.
36 A ¶ Naomi glances at the waterproof watch strapped to the bow.
37 A Her face falls.
38 A Six minutes fifty.
39 A Not good enough.
40 D NAOMI: I'm having an off day.
41 D COACH VORHEES: You've been having an off day for a year.
42 A ¶ The scull glides the last twenty metres.
43 A Naomi ships the oars, lets the boat drift to the dock, and sits there gasping.
44 A Vorhees crouches, extends a hand.
45 A Naomi takes it and is hauled out onto the concrete.
46 A She sits against a bollard, chest heaving.
47 D NAOMI: Why are you here?
48 D COACH VORHEES: To tell you that Beijing is eleven weeks away.
49 D NAOMI: I know when Beijing is.
50 D COACH VORHEES: Do you? Because you row like someone who has forgotten.
51 A ¶ Naomi stares at the water.
52 A The scull rocks gently at its mooring.
53 A Vorhees unscrews the thermos and pours tea into the cap.
54 A She hands it over.
55 D COACH VORHEES [CONT'D]: Drink.
56 A ¶ Naomi drinks.
57 A The steam rises between them.
58 D NAOMI: I think I'm done.
59 D COACH VORHEES: You think.
60 D NAOMI: I know.
61 D COACH VORHEES: Then say it properly.
62 A ¶ Naomi looks at her.
63 A Looks away.
64 A The cranes, the mist, the grey water.
65 D NAOMI: I can't do it anymore.
66 A ¶ Silence.
67 A The thermos cap trembles in her hands.
68 A Vorhees does not speak for a long time.
69 A Then she sits down on the concrete beside her, heavily, like a woman putting down a load she has carried too long.
70 D COACH VORHEES: Do you know why I came this morning?
71 D NAOMI: To tell me I'm slow.
72 D COACH VORHEES: To tell you that I stopped timing you in March.
73 A ¶ Naomi turns, slowly.
74 D COACH VORHEES [CONT'D]: Every split since March was a lie. I wrote down numbers I knew you'd hit. You've been faster than you think for months.
75 D NAOMI: That's not funny.
76 D COACH VORHEES: I'm not laughing.
77 D NAOMI: Why?
78 D COACH VORHEES: Because you needed someone to lie to you.
79 A ¶ The sun breaks over the cranes.
80 A Light floods the basin.
81 A The mist burns off in a single rolling wave, and the water flashes gold.
82 A Naomi starts to laugh.
83 A It turns into something between laughing and weeping.
84 A Vorhees puts an arm around her.
85 A Neither of them looks at the other.
86 D NAOMI: You're awful.
87 D COACH VORHEES: I'm your coach.
88 A ¶ Naomi wipes her face with her sleeve.
89 A She looks at the scull, already steaming in the sun.
90 D NAOMI: Again?
91 D COACH VORHEES: Again.

### SCENE s01288 | INT. LOST UMBRELLA ARCHIVE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR FINBAR HOLT, CEDRIC LOWE, MAGDA PRZYBYLSKI
1 A ¶ A cavernous basement beneath a railway station.
2 A Wooden racks stretch into darkness, each hung with hundreds of umbrellas, tagged and dated.
3 A A single desk lamp burns green.
4 A The air smells of damp wool and old rain.
5 A ¶ INSPECTOR FINBAR HOLT, 50s, tweed, wire-rimmed spectacles, stands at the desk holding a long black umbrella by its handle.
6 A He turns it slowly in the lamplight.
7 A ¶ CEDRIC LOWE, 60s, the archivist, thin, nervous, with cotton gloves, hovers by the register.
8 A He keeps wiping his palms against his trousers.
9 D HOLT: Mr. Lowe. When was this deposited?
10 D LOWE: I cannot say, Inspector. Our records--
11 D HOLT: Please try.
12 D LOWE: Tuesday, I think. Possibly Wednesday.
13 D HOLT: It is stained.
14 D LOWE: Many of them are stained.
15 D HOLT: Not with this.
16 A ¶ He tilts the umbrella.
17 A Along the ferrule, a dark crust.
18 A Lowe's gaze flicks to it and away.
19 D HOLT [CONT'D]: You found it on the tracks.
20 D LOWE: Platform four. After the last train.
21 D HOLT: And you did not think to call us.
22 D LOWE: It was an umbrella, Inspector. We receive eleven hundred a month.
23 D HOLT: Do you read the papers?
24 D LOWE: I... prefer the crossword.
25 D HOLT: A man was found in the signal box on Tuesday morning. Head injury. No weapon.
26 D LOWE: How dreadful.
27 D HOLT: You seem calm.
28 D LOWE: I am a calm man.
29 D HOLT: Mr. Lowe, I think you are afraid.
30 A ¶ Lowe says nothing.
31 A Holt lays the umbrella on the desk like a body on a slab.
32 A ¶ A door CREAKS at the far end of the room.
33 A Footsteps echo among the racks.
34 A ¶ MAGDA PRZYBYLSKI, 40s, wrapped in a wine-red coat, steps out of the dark.
35 A A leather satchel on her shoulder.
36 A Her hair is wet.
37 D MAGDA: I believe that umbrella is mine.
38 D HOLT: Is it, madam?
39 D MAGDA: I left it on the platform. On Tuesday evening.
40 D LOWE: Magda.
41 D HOLT: You know each other?
42 D LOWE (quickly): No.
43 D MAGDA (simultaneously): Yes.
44 A ¶ Holt takes off his spectacles.
45 A Cleans them on his cuff.
46 D HOLT: Then perhaps one of you will tell me whose name is on the ticket stub in the handle.
47 A ¶ Lowe's mouth opens.
48 A Magda glances at him.
49 A A look passes between them that Holt does not miss.
50 D LOWE: It's not mine.
51 D MAGDA: It's not mine.
52 D HOLT: Then whose?
53 A ¶ The desk lamp FLICKERS.
54 A In the dark, between the racks, an umbrella falls with a clatter.

### SCENE s00215 | INT. COUNTY MORGUE - NIGHT
Detected names (may be incomplete or contain aliases): HILDEGARD OYELOWO-STRAND, MARCUS PELL, EUGENE FAIRBANKS, BODY
1 A ¶ Steel drawers.
2 A Cold fluorescent light.
3 A A radiator knocks.
4 A A gurney in the center.
5 A ¶ DR. HILDEGARD OYELOWO-STRAND, 50s, in scrubs, writes a label.
6 A Her assistant, MARCUS PELL, 20s, wheels in a covered body.
7 A The night guard, EUGENE FAIRBANKS, 60s, sips coffee near the door.
8 D HILDEGARD: Last one tonight.
9 D MARCUS: Where do I put him?
10 D HILDEGARD: Drawer fourteen.
11 A ¶ Marcus wheels the gurney to the wall.
12 A He opens the drawer.
13 A It's already occupied.
14 D MARCUS: Dr. Strand?
15 D HILDEGARD: What?
16 D MARCUS: Fourteen's full.
17 D HILDEGARD: It can't be.
18 A ¶ She crosses.
19 A They both look in.
20 A A sheet.
21 A A shape.
22 A Hildegard flips back a corner.
23 A A pale face.
24 A Marcus gasps.
25 D MARCUS: That's the same guy.
26 D HILDEGARD: That's impossible.
27 A ¶ She looks at the gurney.
28 A Lifts the sheet there.
29 A The same face.
30 D HILDEGARD [CONT'D] (whispering): Eugene. Eugene, come look.
31 D EUGENE: I don't want to.
32 D HILDEGARD: Come look.
33 D EUGENE: I'm on break.
34 D HILDEGARD: Eugene.
35 A ¶ He sets down the coffee.
36 A Comes over, reluctant.
37 A Looks at the two faces.
38 A Pales.
39 D EUGENE: Oh, hell.
40 D MARCUS: Maybe it's twins.
41 D EUGENE: Twins don't die the same day.
42 D HILDEGARD: They do sometimes.
43 D MARCUS: Do they?
44 D HILDEGARD: It happens.
45 A ¶ Lights flicker.
46 A A drawer slides open on its own.
47 A Another.
48 A Then another.
49 A Down the long row, one by one, the drawers roll out.
50 A Cold fog spills across the floor.
51 D EUGENE: Not again.
52 D MARCUS: Not again?
53 D EUGENE: Last time was '98.
54 D HILDEGARD: What happened in '98?
55 D EUGENE: They all sat up.
56 A ¶ Silence.
57 A The radiator stops knocking.
58 A Sheets rustle.
59 A Marcus slowly retreats against the wall.
60 A Hildegard grabs a scalpel and holds it like a talisman.
61 D HILDEGARD (trembling): Everyone stay calm.
62 A ¶ A hand lifts from drawer fourteen and grips the edge.
63 D HILDEGARD [CONT'D]: Eugene. Lock the door.
64 D EUGENE: It's already locked.
65 D HILDEGARD: From the outside?
66 D EUGENE (realizing): From the outside.
67 A ¶ The lights go out.
68 A Somewhere, a gurney wheel squeaks.
69 A Hildegard's breath catches.
70 A Then a voice, small and cheerful, from the dark.
71 D BODY [V.O.]: Evening, doctor.
72 A ¶ The lights flick on.
73 A Every drawer is open.
74 A Every sheet is empty.

### SCENE s02009 | INT. BRIDAL SUITE, MOUNTAIN CHALET - MORNING
Detected names (may be incomplete or contain aliases): THE BRIDE, AUNT FLORENTINA OSEI-VANCE, COUSIN PRUDENCE LINDQVIST, SISTER ODALYS BARTHOLOMEW, MAKEUP ARTIST JIN-HO KOWALCZYK, DENISE
1 A ¶ Chintz and antlers.
2 A A garment bag hangs on a door.
3 A Six women crowd a mirror, a hairdryer roars, and someone's phone plays a wedding march at the wrong speed.
4 A ¶ THE BRIDE (30s, in a half-pinned dress, a veil crushed on one arm, her face fixed in perfect, polite panic) stands on a footstool.
5 A Around her, in a frieze of competence: AUNT FLORENTINA OSEI-VANCE (60s, pearls) with a threaded needle; COUSIN PRUDENCE LINDQVIST (20s, flower crown) with a glue gun; SISTER ODALYS BARTHOLOMEW (30s, matron of honor) with a clipboard; MAKEUP ARTIST JIN-HO KOWALCZYK (30s, brushes in a tool belt) with a compact; and DENISE (40s, planner, earpiece, headset) with a radio.
6 A ¶ Everyone is speaking at once, but no one is hearing anyone.
7 D DENISE (into radio): Bride is in the dress. I repeat, in the dress.
8 D AUNT FLORENTINA: Hold still, dear, there's a gap.
9 D COUSIN PRUDENCE: Is that glitter supposed to be on the bodice?
10 D ODALYS: It's not glitter, it's a thread.
11 D JIN-HO: It's glitter.
12 A ¶ The Bride says nothing.
13 A A single tear tracks through her foundation.
14 A Jin-Ho dabs it with a sponge before it drops; Aunt Florentina stitches; Prudence mends the flower crown with the glue gun; Odalys crosses something off the clipboard; and Denise paces to the window with the radio, listening to a voice no one else can hear.
15 D DENISE [CONT'D] (into radio): Repeat? The groom has what?
16 A ¶ A pause.
17 A Denise turns, slowly.
18 A The room goes silent.
19 A The hairdryer winds down.
20 D DENISE [CONT'D] (to the room, brightly): Everything's fine. Nothing to worry about.
21 D ODALYS: Denise.
22 D DENISE: It's fine.
23 D ODALYS: What did he say?
24 D DENISE: The groom would like a word.
25 A ¶ The Bride steps off the footstool, one satin shoe at a time, and walks to the door.
26 A Aunt Florentina's needle follows her until the thread snaps.
27 A At the threshold, she stops.
28 A Takes the veil from her arm.
29 A Hands it to Denise.
30 D THE BRIDE (quietly): Hold this.
31 A ¶ She goes out.
32 A The door closes.
33 A Prudence lifts the glue gun, sets it down.
34 A Five women look at the closed door.
35 A One by one, they take out their phones.
36 D JIN-HO (muttering): I knew it.

### SCENE s00275 | INT. MINIATURE GOLF WINDMILL - DAY
Detected names (may be incomplete or contain aliases): GRETCHEN POLLARD, WALDO POLLARD, TEENAGE ATTENDANT RUSS OYELARAN, LITTLE MIRABEL
1 A ¶ The big concrete windmill at hole eighteen.
2 A Blades turning slowly.
3 A A tunnel through its base.
4 A ¶ GRETCHEN POLLARD (50s, visor, scorecard in teeth) is wedged halfway into the tunnel on her stomach.
5 A ¶ Her husband WALDO POLLARD (50s, bucket hat) holds her ankles.
6 A ¶ TEENAGE ATTENDANT RUSS OYELARAN (17, name tag, vest) arrives with a rake.
7 A ¶ LITTLE MIRABEL (8, glitter sneakers) watches from the green, club trailing.
8 D RUSS: Ma'am, you can't go in there.
9 D GRETCHEN [O.S.]: My ball's in there!
10 D WALDO: She means it.
11 A ¶ The blades turn.
12 A A blade clips Waldo's hat.
13 A He ducks.
14 A Gretchen shoots out of the tunnel, ball in hand, and the two of them tumble into Russ.
15 A All three go down in a heap.
16 A The rake clatters.
17 D MIRABEL: Is that a hole in one?
18 D RUSS (from the pile): No.
19 A ¶ Gretchen holds up the ball like a trophy.

### SCENE s00516 | INT. COURTROOM 4B - NIGHT
Detected names (may be incomplete or contain aliases): JUDGE HARRIET BALOGUN-REYNOLDS, ATTORNEY QUIGLEY
1 A ¶ A vast oak-paneled room, dark except for the red glow of an emergency exit sign.
2 A A power outage has stopped the clocks.
3 A Benches are empty.
4 A A stenographer's chair sits angled away from the bench.
5 A The witness box stands open like an unlit stage.
6 A ¶ JUDGE HARRIET BALOGUN-REYNOLDS (60s, black robe, flashlight under her chin) sits at the bench, peering through reading glasses at a conference phone placed before her.
7 A Its tiny green light is the only steady glow in the room.
8 D HARRIET (to the room): For the record, we are proceeding under emergency conditions.
9 A ¶ The phone crackles.
10 D ATTORNEY QUIGLEY [V.O.] (through the speaker, tinny): Your Honor, I'm in the parking structure. My signal is poor. Can you hear me?
11 D HARRIET: Barely, Counselor.
12 D QUIGLEY [V.O.]: Your Honor, I move for a continuance.
13 D HARRIET: Denied.
14 D QUIGLEY [V.O.]: Your Honor, the power is out.
15 D HARRIET: The law is not.
16 A ¶ She sets down her flashlight.
17 A It rolls.
18 A She chases it with two fingers, mutters.
19 D HARRIET [CONT'D] (to herself): Forty years. Never a continuance for weather.
20 D QUIGLEY [V.O.]: I didn't catch that.
21 D HARRIET: You weren't meant to.
22 A ¶ She rubs her eyes.
23 A The sign hums.
24 A The silence stretches.
25 D HARRIET [CONT'D]: Counselor, your client has been waiting nine months for this hearing.
26 D QUIGLEY [V.O.]: He's waiting in the car.
27 D HARRIET: Bring him up.
28 D QUIGLEY [V.O.]: Your Honor?
29 D HARRIET: Stairs. Eleven flights. By candlelight if necessary.
30 D QUIGLEY [V.O.]: Your Honor, he's seventy-eight.
31 D HARRIET: I know how old he is.
32 A ¶ A pause.
33 A A long breath crackles on the line.
34 D QUIGLEY [V.O.]: We'll be there in twenty minutes.
35 D HARRIET (softly): Take thirty.
36 A ¶ She switches off the flashlight.
37 A The red sign glows.
38 A She folds her hands, a small figure in a great black robe, and waits.

### SCENE s02030 | INT. CHEESE AFFINAGE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): ARNAUD DELACROIX-MBALLA, SABINE QUIRK, YOSEF ABRAMOWITZ, LEILANI KEAWE, TOMAS ESPINOZA-REID
1 A ¶ Damp limestone.
2 A Shelves of waxed wheels stretch back into the dark.
3 A A single lantern on a hook.
4 A Cool, quiet, almost holy.
5 A ¶ A long oak table at the center.
6 A Five people sit around it with tasting knives and small plates, like it's a dinner party.
7 A ¶ At the head, ARNAUD DELACROIX-MBALLA (60s, owner, white apron).
8 A He cuts a wedge, offers it round.
9 A Steady hands.
10 A ¶ To his right, SABINE QUIRK (30s, buyer, scarf).
11 A She takes the wedge.
12 A Doesn't eat it.
13 A ¶ Across from her, YOSEF ABRAMOWITZ (50s, inspector).
14 A He chews slowly, eyes on the ceiling.
15 A ¶ Beside him, LEILANI KEAWE (20s, sommelier).
16 A She pours wine.
17 A Pours a little too much into one glass.
18 A ¶ At the foot, TOMAS ESPINOZA-REID (40s, silent partner), jacket on, buttoned.
19 D ARNAUD: Eighteen months. Raw milk.
20 D SABINE: It's lovely.
21 D ARNAUD: You haven't tasted it.
22 A ¶ She lifts it.
23 A Eats.
24 A Smiles with her mouth only.
25 D YOSEF: Earthy.
26 D LEILANI: A little mushroom. Hazelnut at the finish.
27 D TOMAS: It's fine.
28 A ¶ Arnaud nods.
29 A Cuts another wedge.
30 A Sets it before Tomas.
31 A Tomas does not touch it.
32 D ARNAUD: You're not hungry?
33 D TOMAS: I ate.
34 D ARNAUD: Before you came?
35 D TOMAS: Before.
36 A ¶ Sabine sets down her knife.
37 A Gently.
38 A Parallel to the plate.
39 A ¶ Leilani refills Yosef's glass.
40 A His hand covers it too late.
41 A She keeps pouring anyway.
42 D YOSEF: That's plenty.
43 D LEILANI: Is it?
44 A ¶ She holds his gaze.
45 A He lowers his hand.
46 D ARNAUD (to the room): Strange thing, an affinage cave. Everything in here changes. Slowly. If you do nothing, it turns.
47 D SABINE: Turns into what?
48 D ARNAUD: Whatever it was always going to be.
49 A ¶ Silence.
50 A Water drips somewhere in the dark.
51 A Tomas shifts.
52 A His jacket pulls open an inch.
53 A A holster, dull black.
54 A He buttons it again.
55 A ¶ Nobody looks at it.
56 A Everybody saw it.
57 A ¶ Arnaud sets down his own knife.
58 A Folds his hands.
59 A Smiles at the table like a man who has just finished a long meal.
60 D ARNAUD [CONT'D]: Now. Shall we discuss the shipment?

### SCENE s02286 | INT. LAUNDROMAT, 24-HOUR - 3 A.M.
Detected names (may be incomplete or contain aliases): TALL MAN, VERONICA CASTELLANOS, NIKOLAI BRODSKY, DOLORES, MARCUS
1 A ¶ Fluorescent hum.
2 A Rows of dryers tumbling.
3 A A vending machine glows.
4 A The windows are black.
5 A ¶ A TALL MAN in a work jacket sits on a folding table, a duffel bag at his feet.
6 A He stares at the dryers.
7 A Across the room, VERONICA CASTELLANOS, thirty, scrubs, sits with a laundry basket in her lap, scrolling her phone.
8 A At the folding table's far end, a younger man, NIKOLAI BRODSKY, hoodie up, folds towels very slowly.
9 A And behind the counter, DOLORES, sixty, the attendant, reads a paperback.
10 D TALL MAN: Excuse me. Is this machine broken?
11 D VERONICA: It says out of order.
12 D TALL MAN: It took my quarters.
13 D DOLORES: There's a number on the sign.
14 D TALL MAN: Is the number answered?
15 D DOLORES: Not at three.
16 A ¶ The man stands.
17 A He is very large.
18 A He crosses to the dryer and lays a palm against its door.
19 A Nikolai's eyes rise from the towels.
20 D NIKOLAI: I'd leave it alone.
21 D TALL MAN: Who asked you?
22 D NIKOLAI: Nobody. Just saying.
23 D TALL MAN: What's in the dryer, kid?
24 D NIKOLAI: Nothing.
25 D TALL MAN: Then why are you worried?
26 A ¶ Veronica sets down her phone.
27 A Dolores sets down her book.
28 D VERONICA: Sir, you should sit down.
29 D TALL MAN: Sit down yourself.
30 A ¶ He yanks the door.
31 A A canvas satchel tumbles out, hits the floor, and spills bundled cash.
32 A Nikolai lunges.
33 A The tall man shoves him back into the folding table, and towels burst across the floor.
34 D MARCUS (holding up a badge): Police. Everybody stay where you are.
35 A ¶ Veronica and Nikolai freeze.
36 A Dolores slowly raises her hands.
37 A Marcus kneels over the satchel, his badge dangling from his chain.
38 D MARCUS [CONT'D]: Who owns this?
39 D DOLORES: He does.
40 D NIKOLAI: She's lying.
41 D VERONICA: He hid it this afternoon. I saw him.
42 D NIKOLAI: She was in on it!
43 A ¶ Marcus stands.
44 A He looks at the three of them, a long beat.
45 A He takes out his cuffs.

### SCENE s01957 | INT. CHEESE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): LUCA FERRANTE, TAMAR ELKAYAM, BRODIE MACLEAN, RHIANNON DAVIES
1 A ¶ Cold.
2 A Wet stone.
3 A Racks of aging wheels in rows.
4 A A single utility bulb.
5 A ¶ LUCA FERRANTE, 40s, crowbar in hand.
6 A TAMAR ELKAYAM, 30s, holds a flashlight.
7 A BRODIE MACLEAN, 20s, hauls a sack.
8 D LUCA: Which wheel?
9 D TAMAR: Third rack. The black wax.
10 D BRODIE: It all looks black.
11 D TAMAR: The one that smells like feet.
12 A ¶ Brodie sniffs.
13 A Gags.
14 A Points.
15 D BRODIE: That one.
16 A ¶ Luca wedges the crowbar under the wheel.
17 A It pops free.
18 A Inside, a hollow core and a small steel case.
19 D LUCA: Got it.
20 A ¶ A flashlight swings in from the entrance.
21 A RHIANNON DAVIES, 30s, in a hairnet and rubber boots, a nightwatch's baton in her fist, steps from the dark.
22 D RHIANNON: Evening.
23 A ¶ They freeze.
24 A Tamar lowers the light.
25 A Brodie drops the sack.
26 D RHIANNON [CONT'D]: That wheel's forty thousand euros.
27 D TAMAR: We'll pay for it.
28 D RHIANNON: Not with cash.
29 A ¶ She steps forward.
30 A She holds out her free hand.
31 A Luca hands her the steel case.
32 D LUCA: You knew.
33 D RHIANNON: I run this cave, mate.
34 A ¶ She slides the case under her arm.
35 A Tamar, Luca, and Brodie exchange looks.
36 A Nobody moves.
37 A Water drips somewhere.
38 D BRODIE: So are we fired?
39 D RHIANNON: You were never hired.

### SCENE s00234 | EXT. SHELLED FARMHOUSE COURTYARD, NORMANDY - DAWN
Detected names (may be incomplete or contain aliases): ZEKE, MATTHIAS-ODUYA, PRIVATE COLM BRANNIGAN-VOSS, RAFA, DELGADO-HOLM
1 A ¶ Mist.
2 A Broken tile.
3 A A dead cow on its side, bloated.
4 A ¶ Three soldiers crouch behind a collapsed wall.
5 A ¶ SERGEANT EZEKIEL "ZEKE" MATTHIAS-ODUYA (30s, helmet netted, chewing nothing) peers over the stones.
6 A ¶ Beside him, PRIVATE COLM BRANNIGAN-VOSS (19, rifle too big, freckles) breathes through his mouth.
7 A ¶ Behind them, CORPORAL RAFAELA "RAFA" DELGADO-HOLM (20s, radio on her back, steady hands) checks her sidearm.
8 D ZEKE: Quiet. Too quiet.
9 D COLM: You say that every time, Sarge.
10 D ZEKE: It's true every time.
11 D RAFA: Barn's clear. House is clear. Nothing on the ridge.
12 D ZEKE: Then why's the cow dead?
13 D RAFA: Shell.
14 D ZEKE: Which shell?
15 D COLM: Ours?
16 D ZEKE: Maybe.
17 A ¶ A bird lands on the cow.
18 A Pecks.
19 A Leaves.
20 D COLM: Corporal Delgado-Holm. Can I ask something?
21 D RAFA: Rafa. Just Rafa.
22 D COLM: Rafa. Why's the radio quiet?
23 D RAFA: Because nobody's talking.
24 D COLM: That's what I mean.
25 D ZEKE: Brannigan. Eyes front.
26 D COLM: Yes, Sarge.
27 A ¶ They wait.
28 A A droplet of mist rolls from Zeke's helmet and hits the mud.
29 D RAFA: Sarge. Door.
30 A ¶ The farmhouse door, which was shut, is now ajar.
31 A A hand-width.
32 D ZEKE (whispering): Colm. Left. Rafa. Right. On three.
33 D COLM: One.
34 D RAFA: Two.
35 A ¶ They rise together, rifles up.
36 A ¶ The door swings wide.
37 A Out steps a goat.
38 A Then a second goat.
39 A A third.
40 A ¶ The squad stares.
41 A The goats stare back.
42 D COLM: Sarge. Was that the thing?
43 D ZEKE (deadpan): That was the thing.
44 D RAFA: I'm going to be sick.
45 A ¶ She laughs, covering her mouth.
46 A Colm sinks down, giggling.
47 A Zeke slumps against the wall, shoulders shaking.
48 A ¶ A whistle in the sky.
49 A Rising.
50 A ¶ They all stop laughing at once.
51 D ZEKE: Down!
52 A ¶ They scatter.
53 A The first shell lands in the barn.
54 A The wall behind them heaves.
55 A The goats bolt in three directions.
56 A Dust and straw rain over three helmets.
57 A ¶ Rafa pulls Colm flat.
58 A Zeke crawls over both of them.
59 D ZEKE [CONT'D] (shouting): Rafa! Radio!
60 D RAFA: It's dead!
61 D ZEKE: Then pray!
62 D COLM: To who?
63 D ZEKE: The goats!

### SCENE s02255 | INT. FERRY CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): AGENT TORVALD, MERCEDES, JIN, HADIZA, COLM, BEATRIX
1 A ¶ A vast steel cavern, trucks and cars chained to the floor.
2 A Engines idle.
3 A A low, constant drone.
4 A Overhead lamps in cages cast slatted shadows.
5 A ¶ AGENT TORVALD, fifties, trench coat, stands beside a white delivery van.
6 A MERCEDES, forties, a ferry officer in a navy jacket, leads two others toward him: JIN, thirties, a mechanic in grease-black overalls, and HADIZA, twenties, a deckhand with a heavy flashlight.
7 A Behind them COLM, sixty, the ship's cook, drags a trolley of crates.
8 A BEATRIX, thirties, a passenger in a cashmere coat, trails at a distance, hugging a briefcase.
9 D TORVALD: Open it.
10 D MERCEDES: Agent Torvald, we have a protocol.
11 D TORVALD: I'm the protocol tonight.
12 D JIN: He's got a warrant, Mercedes.
13 D MERCEDES: He has a piece of paper.
14 D HADIZA: It's got a stamp.
15 D COLM: Stamps are cheap.
16 D TORVALD: Mr. Colm, step back.
17 D COLM: I'm only pushing a trolley, mister.
18 D TORVALD: Then push it elsewhere.
19 A ¶ Colm shrugs and parks the trolley against a pillar.
20 A Beatrix inches nearer.
21 D BEATRIX: Excuse me. Is there a problem?
22 D TORVALD: Ma'am, this doesn't concern you.
23 D BEATRIX: I'm in cabin twelve. It's concerning me.
24 D MERCEDES (to Beatrix): Please return to your cabin, ma'am.
25 D BEATRIX: I'd like to see what's in that van.
26 D JIN: Don't we all.
27 A ¶ Torvald yanks a latch.
28 A The van's rear doors swing open.
29 A Rows of wooden crates, stenciled in a foreign alphabet.
30 A He lifts a lid.
31 A Straw.
32 A Beneath it, bundles of cash wrapped in plastic.
33 A ¶ Silence.
34 D HADIZA: That's... a lot.
35 D JIN: That's a very lot.
36 D MERCEDES: Agent Torvald, whose is this?
37 D TORVALD: Mine, if I'm lucky. Evidence, if I'm not.
38 D BEATRIX (quiet): It's mine.
39 A ¶ They all turn.
40 A Beatrix sets down her briefcase, opens it, takes out a tiny pistol.
41 D BEATRIX [CONT'D]: No heroes, please. I'm tired.
42 D TORVALD: Ma'am, put it down.
43 D BEATRIX: I paid for this ride, Agent. Nobody's taking my cargo.
44 D COLM (sighing): Miss, I've been cooking on this boat for thirty years. I've never seen anything so stupid.
45 D BEATRIX: You haven't seen much, then.
46 D JIN: Mercedes, do something.
47 D MERCEDES: I'm the first officer, not a gunslinger.
48 D HADIZA: I'll hit her with the flashlight.
49 D TORVALD: No, Hadiza.
50 A ¶ Hadiza lowers the flashlight.
51 A Beatrix levels the pistol at Torvald.
52 D BEATRIX: Step away from the van.
53 A ¶ Torvald raises both hands.
54 A Steps back.
55 A Colm slowly takes a pan from the trolley, hand behind his back.
56 D COLM: Miss Beatrix, would you like a coffee?
57 D BEATRIX (blinking): What?
58 A ¶ Colm swings the pan.
59 A It clangs on her wrist.
60 A The pistol clatters across the deck.
61 A Jin dives on it.
62 A Mercedes sits on Beatrix before she can reach it.
63 A Torvald exhales for the first time in a minute.
64 D TORVALD (to Colm): Thank you.
65 D COLM: Mind the straw. It's flammable.

### SCENE s01182 | INT. STRANDED CABLE-CAR GONDOLA - DUSK
Detected names (may be incomplete or contain aliases): ELSPETH, TARIQ, MIREILLE, GUS, PAPADAKIS, BEATRIZ, RESCUE DISPATCH
1 A ¶ Wind shrieks.
2 A The gondola sways on its cable a thousand feet above a white abyss.
3 A Ice rimes the windows.
4 A A single emergency bulb flickers.
5 A ¶ ELSPETH (60s, mountaineering jacket, calm) braces against the door.
6 A TARIQ (30s, ski instructor's red parka) tries to pry open a roof hatch.
7 A MIREILLE (40s, silk scarf, bare hands) holds a toddler's mitten and no toddler.
8 A GUS "TINY" PAPADAKIS (50s, enormous, wearing a rented jacket two sizes small) sits on the floor with his head between his knees.
9 A BEATRIZ (20s, backpack on her lap, headphones around her neck) holds a radio handset.
10 D BEATRIZ (into handset): Dispatch, are you there?
11 D RESCUE DISPATCH [V.O.] (over radio, crackling): Gondola Four, we copy. Hold position. Repeat, hold position.
12 D TARIQ: Hold position? We are the position!
13 A ¶ Elspeth lays a hand on his arm.
14 A He shakes it off, then steps back, ashamed.
15 D ELSPETH: Nobody panics. Not yet.
16 D GUS (muffled, to his knees): I'm not panicking. I'm meditating.
17 A ¶ The gondola lurches.
18 A Everyone grabs a rail.
19 A The bulb dies.
20 A Beatriz clicks a flashlight on and turns the beam to the ceiling.
21 D MIREILLE (whisper): Please. Please.
22 D ELSPETH (to the group): Okay. Listen to me. Everyone's watch, everyone's phone, everyone's jacket. We pool it. Now.
23 A ¶ They hesitate.
24 A Then Gus lifts his head, unzips the tiny jacket, and holds it out.
25 A Tariq follows.
26 A Mireille hands over her scarf with trembling fingers.
27 A Beatriz shares her headphones, her gloves, her granola bar.
28 D RESCUE DISPATCH [V.O.] (over radio): Gondola Four, storm front arrives in forty minutes. Do not exit the cabin.
29 A ¶ Tariq looks at the hatch.
30 A He looks at the drop.
31 A He sits.
32 D TARIQ (to himself): Forty minutes. Forty minutes.
33 A ¶ Elspeth wraps the scarf around Mireille's neck and presses the mitten into her palm.
34 A Mireille grips it.
35 A Wind rattles the glass.
36 D BEATRIZ (into handset): Dispatch, we'll hold. But please hurry.

### SCENE s02106 | EXT. ROADSIDE FRUIT STAND - DAY
Detected names (may be incomplete or contain aliases): HONESTY BOX, BAG, GRACIELA HUNT, BASTIAN, MAN, OTIS WREN
1 A ¶ A plywood shed on a gravel shoulder.
2 A Crates of peaches.
3 A A hand-painted sign: HONESTY BOX - $3 A BAG.
4 A Heat shimmers off the highway.
5 A ¶ GRACIELA HUNT, 50s, in a straw hat, arranges peaches in a pyramid.
6 A Her nephew BASTIAN, 20s, sits on an upturned crate, eating a peach and watching the road.
7 A A dusty pickup rolls up and stops.
8 A ¶ A MAN in a cowboy hat steps out.
9 A This is OTIS WREN, 40s.
10 A He nods at them, picks up a bag, and counts out three singles.
11 A He drops them into the tin box.
12 D OTIS: Thank you kindly.
13 D GRACIELA: Peaches are good this year.
14 D OTIS: They look it.
15 A ¶ Bastian stops chewing.
16 A Graciela straightens a peach that did not need straightening.
17 A Otis fishes a fourth dollar from his wallet and lays it beside the tin.
18 D OTIS [CONT'D]: For the bag.
19 D GRACIELA: Bags are free.
20 D OTIS: Then for the view.
21 A ¶ He climbs into the pickup.
22 A The engine turns.
23 A Graciela watches the tailgate recede until the road shimmers it away.
24 A Then she opens the tin, counts the bills, and counts them again.
25 D BASTIAN: It's all there?
26 D GRACIELA: It's four dollars.
27 D BASTIAN: It's three.
28 D GRACIELA: It's four.
29 A ¶ She slides the extra dollar into her apron.
30 A Bastian bites the peach.

### SCENE s02157 | EXT. ROOFTOP CRICKET PITCH - MUMBAI - DAWN
Detected names (may be incomplete or contain aliases): FARRUKH SHAIKH, CASPIAN MOURA, NEW COACH, IBARRA
1 A ¶ A concrete rooftop between apartment towers.
2 A Wire fencing.
3 A Laundry flapping.
4 A Chai steam.
5 A A mat taped to the cement.
6 A Wickets spray-painted on a water tank.
7 A ¶ FARRUKH SHAIKH, 28, captain, clutches a battered bat.
8 A CASPIAN MOURA, 17, rookie bowler, scuffs a tennis ball on his shirt.
9 A A tall woman in a sari, NEW COACH, 40s, stands at the edge of the mat with a clipboard and no expression.
10 D FARRUKH: Rookie. Let's see it.
11 D CASPIAN: Now?
12 D FARRUKH: Now.
13 A ¶ Caspian jogs in, delivers.
14 A The ball smacks the mat, rises off a crack, and clips the water tank with a bang.
15 A Farrukh doesn't flinch.
16 D FARRUKH [CONT'D]: Again.
17 A ¶ Caspian bowls.
18 A Farrukh swings, misses.
19 A The ball slams the tank again.
20 D NEW COACH (flat): Your grip is open.
21 D CASPIAN: Sorry, Ma'am?
22 D NEW COACH: Close your hand. Where I can't see daylight between your fingers.
23 A ¶ Caspian closes his fingers around the ball.
24 A Bowls.
25 A Farrukh swings.
26 A Connects.
27 A The ball sails off the roof, over the wire, into the morning haze.
28 D FARRUKH (whispering): Who's she?
29 D CASPIAN: She says she's our coach.
30 D FARRUKH: Whose coach?
31 D NEW COACH: Ibarra. Rosa Ibarra.
32 D FARRUKH: Ibarra? As in the Ibarra? From the 2011 final?
33 D IBARRA: I do not discuss 2011.
34 D CASPIAN: You played in 2011?
35 D IBARRA: Another.
36 A ¶ She sets the clipboard on the water tank.
37 A Takes the ball from Caspian.
38 A Rolls it across the mat to Farrukh.
39 D IBARRA [CONT'D]: Captain. Show me what you do with the next one.
40 A ¶ Farrukh looks at the ball.
41 A At Caspian.
42 A At the horizon where the first one landed.
43 D FARRUKH (low): That's the last ball we have.
44 D IBARRA: Then play it well.
