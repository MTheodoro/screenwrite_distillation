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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00011.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00729 | EXT. CABLE CAR - ABOVE A GORGE - DUSK
Detected names (may be incomplete or contain aliases): BRONWYN DAVIES, TEO, BIANCHI, SAMIRA HADDAD, KWAME BOATENG, ASTRID NYGAARD, HIRO, KAWAGUCHI
1 A ¶ A steel gondola dangles over a mile of nothing.
2 A Wind.
3 A Fog beneath.
4 A Six strangers are packed inside, breathing hard.
5 A ¶ BRONWYN DAVIES, fifties, retired nurse.
6 A TEODORO "TEO" BIANCHI, twenties, backpacker.
7 A SAMIRA HADDAD, forties, mother, clutching a thermos.
8 A KWAME BOATENG, sixties, engineer, calm.
9 A ASTRID NYGAARD, thirties, runner.
10 A HIROSHI "HIRO" KAWAGUCHI, eighties, quiet, folded into the corner.
11 A ¶ The car swings once.
12 A Settles.
13 D KWAME: Everyone breathe. It's a power cut. The backup will come on.
14 D SAMIRA: How long?
15 D KWAME: Twenty minutes. Maybe thirty.
16 D TEO: It's been forty.
17 D KWAME: Then it's coming.
18 D ASTRID: I run this gorge every Sunday. There's a ranger hut on the north side. If we climb out--
19 D BRONWYN: We are not climbing out.
20 D ASTRID: It's four hundred feet to the ridge.
21 D BRONWYN: It's four hundred feet in the wrong direction.
22 D HIRO (softly): Please. The car rocks.
23 D SAMIRA: He's right. Nobody move.
24 D TEO: I have a radio on my phone. No bars.
25 D KWAME: Try the emergency channel.
26 D TEO: It's not that kind of phone.
27 D ASTRID: Then why do you have it?
28 D TEO: For music.
29 D BRONWYN: Lord.
30 D SAMIRA: There is water in the thermos. Tea. We share.
31 D KWAME: Small sips.
32 D SAMIRA: Hiro, you first.
33 D HIRO: Thank you.
34 D BRONWYN: Hiro, how are you feeling?
35 D HIRO: I am eighty-four. I have been in worse. In fifty-eight, I was in a cave for two days.
36 D TEO: What happened?
37 D HIRO: We sang.
38 D ASTRID: Sang what?
39 D HIRO: Whatever we knew. Bad songs. Many verses.
40 D SAMIRA (laughs): Let's do that then.
41 D KWAME: Singing in a swaying car is not--
42 D BRONWYN: Kwame, let the man have his song.
43 D KWAME: Fine. But quietly.
44 D HIRO: I know one.
45 D TEO: Go.
46 D HIRO (sings, thin): "Hotaru no hikari..."
47 D SAMIRA: I know this one! It's the school tune.
48 D BRONWYN: Auld Lang Syne. We all know it.
49 D ASTRID (joining): "Should auld acquaintance be forgot..."
50 D TEO: I don't know the words.
51 D KWAME: Hum.
52 A ¶ All six now.
53 A Low.
54 A Wind carries them across the dark.
55 A ¶ A groan from above.
56 A The cable shudders.
57 A Everyone stops.
58 D ASTRID: Did that--
59 D KWAME: Don't say it.
60 D TEO: It's the wheel. It's coming back on.
61 D BRONWYN: Or it's the other thing.
62 D SAMIRA: What other thing?
63 D KWAME: There's no other thing.
64 D HIRO: There is always another thing.
65 A ¶ The car lurches.
66 A A hiss, a clunk.
67 A The lights stutter on.
68 A Motor whirs.
69 D TEO: YES!
70 D ASTRID: Oh thank God.
71 D SAMIRA: Hiro, you did it.
72 D HIRO: The song did it.
73 A ¶ The gondola begins to move.
74 A Slow.
75 A Steady.
76 A Toward the lit station.
77 D BRONWYN (low, to Kwame): Funny. It's going the wrong way.
78 D KWAME (looking out): That's not the station.
79 A ¶ The lights ahead are a ranger hut.
80 A A single window.
81 A A figure with a rifle.
82 D SAMIRA: Kwame?
83 D KWAME (quiet): Nobody say anything.

### SCENE s02196 | INT. VICTORIAN CONSERVATORY - MORNING
Detected names (may be incomplete or contain aliases): INSPECTOR HALVERSON, SERGEANT OKAFOR, MISS CORDELIA FITCH, ASHWORTH BOTANIST
1 A ¶ Glass and iron.
2 A Ferns, orchids, a dripping fountain.
3 A A body in a gardener's apron lies under a toppled palm in a spreading pool of water.
4 A Fresh footprints cross the tile.
5 A ¶ INSPECTOR HALVERSON (50s, rumpled tweed) crouches by the corpse.
6 A Beside him, SERGEANT OKAFOR (30s, notebook, damp umbrella) stands guard.
7 A In wicker chairs near the door sit MISS CORDELIA FITCH (60s, the owner, pearls and a cane) and MR. ASHWORTH THE BOTANIST (50s, glasses, ink-stained cuffs).
8 D HALVERSON: Who found him?
9 D MISS FITCH: I did. I came for my tea.
10 D MR. ASHWORTH: She screamed. I came running.
11 D HALVERSON: Did either of you touch him?
12 D MISS FITCH: Certainly not.
13 D MR. ASHWORTH: I only checked the pulse.
14 D HALVERSON: Where were you at six?
15 D MISS FITCH: In bed.
16 D MR. ASHWORTH: In the library.
17 D OKAFOR (to Halverson, low): She lied. The housemaid said she was awake at five.
18 D HALVERSON (to himself): Interesting.
19 A ¶ He rises.
20 A Walks the tiled path slowly.
21 A Stops at the fountain.
22 A Peers into the water.
23 A He picks something out with two fingers: a silver button.
24 D HALVERSON [CONT'D] (holding it up): Whose is this?
25 D MISS FITCH: Not mine.
26 D MR. ASHWORTH: Not mine.
27 A ¶ Silence.
28 A The fountain gurgles.
29 A Okafor, flipping pages, mutters a name.
30 A Halverson glances at him.
31 D HALVERSON: Say that again, Sergeant.
32 D OKAFOR: The victim's coat had one button missing.
33 D MISS FITCH: He had it sewn.
34 D MR. ASHWORTH: He had it sewn last Tuesday.
35 D HALVERSON: Then this one is not his.
36 A ¶ He looks at both of them in turn.
37 A Miss Fitch's hand tightens on the cane.
38 A Mr. Ashworth's mouth opens, then shuts.
39 D HALVERSON [CONT'D] (to everyone): Nobody leaves the glasshouse.
40 A ¶ Overhead, a pane of glass rattles in the wind.

### SCENE s00871 | INT. NIGHT FERRY - CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): INES VARELA, SEUN ADEYEMI, HARLAN COOPER-REID, PRIYA NAIR, DMITRI SOKOLOV, GRANDMA ZOFIA
1 A ¶ Engines thrum.
2 A Six figures around a rusted minivan.
3 A INES VARELA, 40s, SEUN ADEYEMI, 30s, HARLAN COOPER-REID, 60s, PRIYA NAIR, 20s, DMITRI SOKOLOV, 50s, and GRANDMA ZOFIA, 80s, in a folding chair.
4 A ¶ She clutches an urn.
5 A He pretends not to see.
6 A They all stare at the lid.
7 D INES: We scatter it at the island, like she said.
8 D HARLAN: She said the harbor.
9 D SEUN: She said both. She said a lot of things.
10 A ¶ Zofia laughs at nothing.
11 A Priya takes the urn from Ines, gently, and Ines lets go too fast.
12 D PRIYA (to herself): Okay. Okay.
13 D DMITRI: Someone opened this.
14 A ¶ Silence.
15 A He holds up the lid, tape peeled.
16 A Harlan studies the floor.
17 A Ines reaches for the urn again.
18 D INES: Who opened it?
19 D HARLAN: She asked me to look.
20 D SEUN (over Harlan): You looked? You LOOKED?
21 D DMITRI: Seun, quiet.
22 D INES (over both): There's nothing in it, is there.
23 A ¶ Priya tips the urn.
24 A Ash, grey, real.
25 A Everyone exhales.
26 A Zofia stops laughing.
27 D ZOFIA: That is not Marta.
28 A ¶ They turn as one.

### SCENE s00024 | EXT. GLACIER CREVASSE LEDGE - DAWN
Detected names (may be incomplete or contain aliases): TOBIAS ANSELM, MARGUERITE DELACROIX-ODUYA, RANGER
1 A ¶ A blue throat of ice drops away into dark.
2 A Forty feet down, on a shelf barely wider than a door, a man and a woman cling together in the frozen quiet.
3 A His left leg is bent wrong.
4 A She has one crampon and a rope that ends in frayed threads.
5 A ¶ TOBIAS ANSELM (40s, beard crusted white) tries to sit upright.
6 A He gasps and slides back against the wall.
7 A MARGUERITE DELACROIX-ODUYA (30s, climbing helmet cracked at the brow) crouches beside him, working a splint from a tent pole and webbing.
8 A ¶ She does not look at his face.
9 A She looks at the knot.
10 D TOBIAS: Leave it. Go up.
11 D MARGUERITE (without looking up): Shut up and hold the pole.
12 A ¶ He holds it.
13 A His hands shake.
14 A She pulls the strap tight and he screams, a sound that echoes down and never comes back.
15 A ¶ A hiss from her chest pocket.
16 A She freezes, then fumbles out a handheld radio.
17 D RANGER [O.S.] (over radio, thin with static): Team Four, Base. We have you on the thermal. Hold position. Helicopter wheels up in forty.
18 A ¶ Relief breaks across her face.
19 A She laughs, a cracked sound, and kisses the radio.
20 D MARGUERITE (into radio): Copy, Base. Two alive. One leg. Please hurry.
21 D RANGER [O.S.] (over radio): Copy two alive. Wind is picking up on the ridge. Stay low.
22 A ¶ She turns to him, grinning for the first time.
23 D MARGUERITE (to Tobias): Forty minutes. You hear that?
24 D TOBIAS (a whisper): I heard.
25 A ¶ He says it too calmly.
26 A She notices his lips, which are turning grey.
27 A She tears off her glove and presses two fingers to his neck.
28 D MARGUERITE (to herself): No. No no no. Stay with me, you stubborn old goat.
29 A ¶ He opens his eyes.
30 A Faintly, he smiles.
31 A ¶ Above them, the ice groans.
32 A A fine rain of snow sifts down.
33 A She pulls him against her chest and tucks her jacket around them both.
34 D RANGER [O.S.] (over radio): Team Four, Base. Weather window closing. Say again your status.
35 A ¶ She stares at the radio, then at the dark beyond the ledge.
36 A She keys it.
37 D MARGUERITE (into radio): Base, we are not going anywhere. Tell them to hurry.
38 A ¶ She sets the radio on his chest, where he can hear it.
39 A The ice groans again, and this time something far below answers.

### SCENE s00590 | INT. GLASSHOUSE CONSERVATORY - SUNSET
Detected names (may be incomplete or contain aliases): CORALIE DUVERNAY, RAFAEL OYARZ, SIGRID
1 A ¶ A Victorian palm house of iron and glass, tall as a cathedral.
2 A Sunset floods the panes amber and rose.
3 A Orchids hang in baskets; a stone fountain trickles into a lily pond.
4 A Brass paths wind through ferns.
5 A Everything is green, damp, and gold.
6 A ¶ CORALIE DUVERNAY, 30s, in a cream silk dress with a hem darkened by wet leaves, sits on the edge of the fountain, a folded letter in her lap.
7 A Her dark hair is coming loose from its pins.
8 A ¶ RAFAEL OYARZÚN, 30s, in a travelling coat, bag at his feet, stands at the end of the path, hat in hand.
9 A His face is rain-streaked, though it has been dry all day.
10 A ¶ At the far arch, hands clasped, stands SIGRID, 60s, Coralie's aunt, in black wool, severe, silver chignon.
11 D RAFAEL: You wrote that you were leaving.
12 D CORALIE: I wrote that I was thinking of it.
13 D SIGRID: She wrote nothing of the sort. I wrote it.
14 D CORALIE: Aunt Sigrid!
15 D SIGRID: Someone had to.
16 D RAFAEL: Then you weren't thinking of it.
17 D CORALIE: I was. I am. I don't know.
18 D SIGRID: She knows.
19 D CORALIE: Let me speak!
20 D RAFAEL: Please.
21 D SIGRID: She has had a year to speak.
22 D CORALIE: And you had a year to come back.
23 D RAFAEL: I was detained.
24 D CORALIE: For a year?
25 D RAFAEL: For eleven months. The last was spent walking.
26 D SIGRID: He expects pity.
27 D RAFAEL: I expect nothing.
28 D CORALIE: Then why are you here?
29 D RAFAEL: Because I could not do otherwise.
30 A ¶ A silence.
31 A The fountain murmurs.
32 A Light falls through the glass in long copper bars, laying stripes across the three of them.
33 A ¶ Sigrid sighs, drops her hands.
34 D SIGRID: I will see to the tea.
35 A ¶ She exits through the arch.
36 A Her footsteps fade among the ferns.
37 A ¶ Coralie rises.
38 A Smooths the letter against her skirt, folds it once more, and lets it fall into the lily pond, where it floats, bleeding blue ink.
39 D CORALIE: There. Now we have nothing to argue about.
40 D RAFAEL: We never did.
41 D CORALIE: No. Only each other.
42 A ¶ He takes a step.
43 A She takes one.
44 A They stop an arm's length apart.
45 A The light goes out of the glass, rose to ash, all at once.

### SCENE s01573 | INT. GRAIN ELEVATOR CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NADIA KOWALCZYK, DISPATCH, MARCUS TREVELYAN
1 A ¶ Concrete.
2 A Steel.
3 A A wall of dead monitors.
4 A One lit.
5 A ¶ NADIA KOWALCZYK (30s, hard hat, dust in her braid) crouches at a console.
6 A Headset on.
7 A A flashlight clamped in her teeth.
8 A ¶ She types.
9 A Stops.
10 A Types.
11 A ¶ On the monitor: a progress bar.
12 A 71%.
13 A ¶ The radio on the desk crackles.
14 D DISPATCH [V.O.] (through static): Kowalczyk, status.
15 D NADIA (into headset): Almost in.
16 D DISPATCH [V.O.]: Plant manager's asking. He says the auditors arrive at six.
17 D NADIA: Tell him the auditors can wait.
18 D DISPATCH [V.O.]: He says the auditors can't.
19 A ¶ She pulls the flashlight from her mouth.
20 A 84%.
21 D NADIA: Then tell him the numbers are wrong. Tell him the silo three weights have been wrong since March.
22 D DISPATCH [V.O.]: Repeat?
23 A ¶ She says nothing.
24 A 96%.
25 A ¶ Somewhere below, a heavy door booms shut.
26 A Nadia freezes.
27 A Kills the flashlight.
28 A ¶ Footsteps on the steel stairs.
29 A Slow.
30 A Unhurried.
31 A ¶ The door handle turns.
32 A ¶ MARCUS TREVELYAN (50s, plant manager, pressed shirt, no hard hat) steps in.
33 A He holds a clipboard.
34 A He smiles.
35 D MARCUS: Working late.
36 D NADIA: Just routine.
37 D MARCUS: On a Sunday. At two in the morning.
38 A ¶ The radio crackles.
39 D DISPATCH [V.O.]: Kowalczyk? You still there?
40 A ¶ Marcus crosses to the radio.
41 A Switches it off.
42 A The room goes silent but for the console fan.
43 A ¶ On the monitor: 99%.
44 A ¶ Nadia's hand drifts to a wrench on the desk.
45 D MARCUS [CONT'D]: Step away from the keyboard, Nadia.
46 A ¶ She doesn't.
47 A ¶ He drops the clipboard.
48 A Lunges.
49 A ¶ The wrench swings.
50 A The monitor flashes: 100%.

### SCENE s00622 | INT. ABANDONED DRIVE-IN PROJECTION BOOTH - DUSK
Detected names (may be incomplete or contain aliases): ROZ, BEAUMONT, KWAME ASANTE-BEAUMONT
1 A ¶ Dust hangs in the last orange light like a held breath.
2 A A cracked projector squats in the middle of the room, and through the small square window the huge blank screen glows pink, empty of everything but weeds at its feet.
3 A ¶ ROSALIND "ROZ" BEAUMONT, sixty-eight, runs a thumb along the projector's lens cap as if checking a sleeping animal for a pulse.
4 A Her grandson, KWAME ASANTE-BEAUMONT, fifteen, stands in the doorway with a duffel bag he has not put down.
5 D KWAME: Mum said you'd be mad.
6 D ROZ: Your mother's been saying that since 1994. I've never once been mad on schedule.
7 A ¶ He lets the bag slide to the floor.
8 A She does not turn around.
9 D ROZ [CONT'D]: You want to see something?
10 A ¶ She flips a rusted switch.
11 A Nothing.
12 A She flips it again.
13 A The projector coughs, and a long, trembling beam of white light leaps out the window and lands on the screen like a thrown door.
14 D KWAME: It works?
15 D ROZ: It does not. That's the sun, in the glass. Always happens at dusk.
16 A ¶ They both watch the shape of the light slide down the screen and fade.
17 D KWAME: I'm sorry about Grandad.
18 D ROZ: Mm.
19 D KWAME: I'm sorry I didn't come.
20 D ROZ: Sit down, you're blocking my view.
21 A ¶ He sits.
22 A She finally turns, and puts a hand briefly on his hair.

### SCENE s02133 | INT. SAN BERNARDO ABBEY - WINE CELLAR - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT CORNELIUS HOLLOWAY, PRIVATE BAPTISTE FONTAINE, CORPORAL YUKI TAKADA, BROTHER ANSELMO, OBERLEUTNANT KRAUSS
1 A ¶ Barrel-vaulted stone.
2 A Rows of dusty casks.
3 A A single oil lamp.
4 A Somewhere above, the dull thud of artillery, steady as a clock.
5 A ¶ SERGEANT CORNELIUS HOLLOWAY, 35, helmet off, Tommy gun across his knees, sits on a cask.
6 A PRIVATE BAPTISTE FONTAINE, 20, French-Canadian, shivering, wraps a bandage round his own forearm.
7 A CORPORAL YUKI TAKADA, 25, Nisei interpreter, sits on the stairs with an Italian phrasebook.
8 A ¶ BROTHER ANSELMO, 70, Benedictine, stout, wine-stained robe, pours three tin cups from a cask.
9 A His hands are steady.
10 D HOLLOWAY: Brother, how long have you been in this cellar?
11 D ANSELMO: Since the bombs came. Eleven days.
12 D TAKADA (translating): Undici giorni.
13 D ANSELMO (in English): Eleven. Yes. Thank you, my son.
14 A ¶ Fontaine takes a cup.
15 A Holloway takes a cup.
16 A He sniffs and drinks.
17 D FONTAINE: Sergeant, he's good.
18 D HOLLOWAY: The wine?
19 D FONTAINE: The wine. And the Brother.
20 D TAKADA: Sergeant, the church above us is clear. No enemy.
21 D HOLLOWAY: Good.
22 A ¶ Silence.
23 A The artillery thuds.
24 A Dust sifts from the vault.
25 D ANSELMO: You are hungry. I have bread.
26 D HOLLOWAY: We're fine.
27 D ANSELMO: I insist.
28 A ¶ He disappears behind a rack of casks.
29 A Holloway looks at Takada.
30 A Takada shakes his head.
31 A Fontaine leans toward Holloway.
32 D FONTAINE: Sergeant, he said "eleven days." But the shelling started on the ninth.
33 D HOLLOWAY: Say that again.
34 D FONTAINE: Day nine. The shelling.
35 A ¶ Holloway stands.
36 A Slowly.
37 A His hand finds the Tommy gun.
38 D HOLLOWAY: Corporal. Ask him who the bread is for.
39 D TAKADA (calling): Padre, per chi è il pane?
40 A ¶ No answer.
41 A Takada stands too.
42 A Fontaine raises his rifle.
43 A The lamp flickers.
44 D TAKADA [CONT'D] (whisper): He's not answering.
45 A ¶ Holloway edges past the first cask.
46 A Fontaine follows him, boots silent on the flagstones.
47 A The second rack.
48 A The third.
49 A A narrow door, ajar, set in the stone.
50 D HOLLOWAY: Brother Anselmo. Come out.
51 A ¶ The door swings open.
52 A Anselmo stands in the opening, a loaf of bread in each hand.
53 A Behind him, a pale OFFICER in a grey-green greatcoat sits on a pallet, leg splinted, a Luger in his fist, pointed at Holloway.
54 A ¶ OBERLEUTNANT KRAUSS, 30, blond, sweat-slick, eyes steady.
55 D KRAUSS (accented): Gentlemen. Please do not make the Brother choose.
56 A ¶ Fontaine's rifle swings to Krauss.
57 A Takada's pistol clears the holster.
58 A Holloway's Tommy gun rises.
59 A Everyone holds.
60 D ANSELMO (softly): No more dying in my cellar.
61 A ¶ Nobody moves.
62 A The artillery thuds.
63 A A barrel creaks.
64 A Anselmo lowers the bread to the stone floor, one loaf and then the other, and raises both open hands between the guns.
65 D HOLLOWAY: Brother, step aside.
66 D ANSELMO: No.
67 D KRAUSS: He's a stubborn man.
68 D FONTAINE: Sergeant, I can't see a shot.
69 D HOLLOWAY: Then don't take it.
70 D TAKADA (to Krauss, in German): Wie lange hier?
71 D KRAUSS: Eleven days.
72 A ¶ Takada closes his eyes for a long moment.
73 D TAKADA: Sergeant. He was telling the truth.
74 D HOLLOWAY: He was telling us something.
75 A ¶ He lowers the Tommy gun an inch.
76 A Fontaine does not.
77 A Krauss does not.
78 A The oil lamp gutters.

### SCENE s01471 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): PEPPER, ADEYEMI-HALL, DEZ, CARVALHO, CAPTAIN OLUWASEUN BRANNIGAN
1 A ¶ A round room wrapped around a spiral stair.
2 A A kettle sits on a coal stove.
3 A A wall phone with a cord like a pigtail hangs by the door.
4 A Rain hammers the little windows.
5 A ¶ PERPETUA "PEPPER" ADEYEMI-HALL (50s, oilskin coat, tired humor) is wrestling a very large frozen turkey into a very small oven.
6 D PEPPER: In you go. Nobody's judging.
7 A ¶ The turkey does not go in.
8 A She tries it sideways.
9 D PEPPER [CONT'D]: Wide-body. Fine. Everybody's built different.
10 A ¶ DESMOND "DEZ" CARVALHO (30s, a nervous inspector in a suit that has never seen weather) stands dripping on the mat, holding a clipboard like a shield.
11 D DEZ: Ms. Adeyemi-Hall, I'm required to note that the lamp is, technically, off.
12 D PEPPER: The lamp is resting.
13 D DEZ: Ships rely on that lamp.
14 D PEPPER: Ships rely on a lot of things. They also rely on a roast.
15 D DEZ: There is a ship out there right now.
16 D PEPPER: There's always a ship out there. Sit. Sit! You're making the room look nervous.
17 A ¶ Dez sits on a stool.
18 A It wobbles.
19 A He grips the table.
20 D DEZ: I was told the Board of Maritime Safety had been in touch.
21 D PEPPER: The Board of Maritime Safety sent me a calendar. January's a puffin.
22 A ¶ She finally jams the turkey in and slams the oven door.
23 A Victory.
24 A She dusts her hands.
25 A Dez writes something down.
26 D PEPPER [CONT'D]: What did you just write?
27 D DEZ: "Turkey."
28 D PEPPER: Good. Underline it.
29 A ¶ The wall phone RINGS.
30 A Both of them look at it.
31 A It RINGS again.
32 A Pepper does not move.
33 D DEZ: Aren't you going to...?
34 D PEPPER: It's the same man every Thursday. He wants to know about the weather.
35 D DEZ: It's Thursday?
36 D PEPPER: It's always Thursday somewhere. Answer it, if you're so keen.
37 A ¶ Dez picks up the receiver.
38 A Holds it at arm's length.
39 A ¶ X
40 A ¶ Dez goes white.
41 A He holds the receiver out to Pepper.
42 A She doesn't take it.
43 D DEZ (whisper): A ferry. There's a ferry.
44 D PEPPER: Tell him the lamp is resting.
45 D DEZ: I will not tell him the lamp is resting!
46 D BRANNIGAN [V.O.] (over phone): Hello? Is someone there? Is that the keeper?
47 A ¶ Dez clamps the phone to his chest, panting.
48 A Pepper sighs, as if he's asked her to move a sofa.
49 A She heaves herself up, sets the kettle aside, and takes the receiver.
50 D PEPPER (into phone): Marguerite. Pepper. I'll have her lit in four minutes. Stand off to starboard and sing something.
51 D BRANNIGAN [V.O.] (over phone): Four minutes? It's a thirty-minute climb.
52 D PEPPER (into phone): Not if you know the stairs.
53 A ¶ She hangs up.
54 A Walks to the spiral stair.
55 A Dez follows, clipboard abandoned.
56 D DEZ: You can't climb it in four minutes.
57 D PEPPER: No.
58 A ¶ She opens a panel beside the stair.
59 A Inside: a small brass lever and a rope.
60 A She hauls the lever.
61 A Far above, something grinds, then flares.
62 A A white sweep of light crosses the window and the kitchen goes bright, then dark, then bright.
63 A ¶ Dez stares.
64 D DEZ: It was always automatic?
65 D PEPPER: Since nineteen-eighty. I just like to see who turns up.
66 D DEZ: Then why was it off?
67 D PEPPER: I switched it off at six. To see who'd notice.
68 A ¶ She picks up the kettle again.
69 A Dez opens his mouth, closes it, and picks up his clipboard.
70 A ¶ The kitchen door BANGS open.
71 A A wet, enormous man in a ferry captain's cap fills the frame: CAPTAIN OLUWASEUN BRANNIGAN (60s, a tide-beaten face, furious), a handheld radio still crackling at his belt.
72 A Behind him, the storm.
73 D BRANNIGAN: Which of you turned my lighthouse off?
74 A ¶ Pepper points at Dez without looking.
75 D DEZ: Me?!
76 D BRANNIGAN (to Dez, advancing): You? You're the one?
77 D DEZ: No! I'm the inspector!
78 D BRANNIGAN: Inspector of what?
79 D PEPPER: Turkey.
80 A ¶ Brannigan stops.
81 A Smells the air.
82 A Sniffs again.
83 A His face softens by degrees.
84 D BRANNIGAN: Is that sage?
85 D PEPPER: Take your coat off, Seun. The phone can have your voice. There's enough for everyone.
86 D BRANNIGAN (still suspicious): How much enough?
87 D PEPPER: Wide-body enough.
88 A ¶ Brannigan peels off his dripping coat.
89 A Dez, bewildered, makes room on the stool.
90 A It wobbles.
91 A All three men and the turkey settle in as the lighthouse beam wheels slowly past the window, over and over.
92 D DEZ (quietly, to himself): Underline "turkey."
93 A ¶ He does.

### SCENE s00071 | INT. CLOSED FUNICULAR STATION - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AGNES PRUITT, DELROY CAMPBELL, WEI-LING CHOU, FATHER TOBIAS
1 A ¶ Wooden benches, a dead ticket window, a brass clock stopped at ten past four.
2 A Rain ticks on a skylight.
3 A ¶ AGNES PRUITT (60s, retired schoolteacher, buttoned to the chin) pours tea from a flask into four paper cups.
4 A DELROY CAMPBELL (40s, line mechanic in a grease-stained parka) sits on the bench by the door.
5 A WEI-LING CHOU (30s, insurance investigator, wet umbrella across her knees) studies the clock.
6 A FATHER TOBIAS (70s, rumpled cardigan under a black coat) leans on the ticket window, humming.
7 D AGNES: Sugar, anyone?
8 D DELROY: Just the tea.
9 D WEI-LING: Who owns this station now, Mr. Campbell?
10 D DELROY: The company. Nobody comes up here but me.
11 D FATHER TOBIAS: And us. A fine thing, the four of us in a snowglobe.
12 D AGNES: It's rain, Father.
13 D FATHER TOBIAS: Then a rain globe.
14 A ¶ Wei-Ling accepts a cup, sips, and smiles for the first time.
15 D WEI-LING: It's good tea.
16 D AGNES: I know.
17 A ¶ Wei-Ling lowers the cup.
18 A Her eyes go to the ticket window.
19 A A faint metal glint sits behind the grille.
20 D WEI-LING: Mr. Campbell. Is that the cash box?
21 A ¶ Delroy and Father Tobias both look at the window.
22 A Nobody speaks.
23 A Delroy stands.
24 D DELROY: It was empty when I locked it.
25 D AGNES: Was it?
26 A ¶ Delroy lunges for the window.
27 A Father Tobias steps in front of him, and the two grapple against the counter, the old priest surprisingly strong.
28 A Wei-Ling drops the umbrella and tries to pull them apart.
29 A Agnes sets down the flask, calmly, and the three of them freeze as she opens her coat to show a revolver tucked in her belt.
30 D AGNES [CONT'D]: The tea was only for waiting.
31 A ¶ Wei-Ling's cup slips from her hand.
32 A Delroy slumps onto the bench.
33 A The clock, for no reason at all, ticks forward one minute.

### SCENE s01906_1 | INT. ROADHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): AMOS WREN
1 A ¶ A room of overturned chairs and cold ashes.
2 A A bar stripped of bottles.
3 A On the bar, a lantern, and beside the lantern a folded letter propped against a glass.
4 A ¶ A boot on the porch.
5 A The door creaks.
6 A A long shadow falls across the floor.
7 A ¶ AMOS WREN (50s, weathered duster, hat the color of old tobacco) stops on the threshold.
8 A He studies the room.
9 A The chairs.
10 A The ashes.
11 A The letter.
12 A ¶ He takes off his hat.
13 A Smooths his hair with one palm.
14 A Holds the hat against his chest, as though in church.
15 D AMOS (under his breath): Well, Amos. You came all this way.
16 A ¶ He crosses to the bar.
17 A His spurs ring once, loud, then he stills them with a hand on his thigh.
18 A He lifts the letter.
19 A Turns it over.
20 A Her hand, small and slanted.
21 A His name.
22 A ¶ He reads without moving his lips.
23 A Then, quietly, aloud.
24 D AMOS [V.O.] (her words, in his voice): "Amos. If you've come, then I was wrong about you, and I am glad of it. If you have not, then no one is reading this, and I may say anything."
25 A ¶ He stops.
26 A Lowers the paper an inch.
27 A Looks at the door.
28 A Looks at the letter again.
29 D AMOS [V.O., CONT'D]: "The house is yours. The land was never ours, only lent. Sell the stove. Burn the rest. Do not come looking for the grave; there isn't one. I asked the wind."
30 A ¶ His thumb moves over the line.
31 A Once.
32 A Twice.
33 A His jaw works.
34 A He sets the hat on the bar, very precisely, brim down.
35 D AMOS (to the empty room): Asked the wind.
36 A ¶ He folds the letter along its old creases.
37 A Slides it inside his coat, over his heart, and pats it flat.
38 A Lifts the lantern.
39 A The flame leans, steadies, burns clean.
40 D AMOS [CONT'D] (hoarse): All right, Lottie.
41 A ¶ He turns the lantern low.
42 A Walks to the door.
43 A Stops with one hand on the frame, and for a long while looks out at the road he came by.
44 A The sun is a bruise on the horizon.
45 A Wind lifts his coat.
46 D AMOS [CONT'D] (a short laugh): Never could win an argument with you.
47 A ¶ He sets the lantern on the sill, where its light will show from the road.
48 A Steps out.
49 A Pulls the door shut behind him, gently, as if not to wake anyone.

### SCENE s02224 | INT. COUNTY COURTHOUSE - COURTROOM 3B - DAY
Detected names (may be incomplete or contain aliases): JUDGE IMELDA CARDENAS, WENDELL PRATT, SOO-JIN HAN, BARTY, QUILL
1 A ¶ A cramped room under a failing skylight.
2 A Radiators clank.
3 A ¶ JUDGE IMELDA CARDENAS, sixties, silver braid, presides.
4 A WENDELL PRATT, fifties, rumpled prosecutor.
5 A SOO-JIN HAN, thirties, sharp defense counsel in a navy suit.
6 A In the box, BARTHOLOMEW "BARTY" QUILL, seventies, a retired beekeeper in a borrowed tie.
7 D SOO-JIN: Mr. Quill, you've kept bees how long?
8 D BARTY: Fifty-one years, Ms. Han.
9 D WENDELL: Objection. Relevance.
10 D JUDGE CARDENAS: Mr. Pratt, you've been relevant to nothing since lunch. Overruled.
11 D WENDELL: Your Honor, with respect--
12 D JUDGE CARDENAS: I said overruled, Wendell.
13 D SOO-JIN: Mr. Quill, on the night of the fourteenth, you saw a van near the apiary.
14 D BARTY: Gray van. No plates. Engine running.
15 D WENDELL: Leading!
16 D SOO-JIN: He's describing, Your Honor.
17 D JUDGE CARDENAS: He is describing. Sit, Mr. Pratt.
18 D WENDELL: I am sitting, Judge.
19 D JUDGE CARDENAS: You are hovering. Sit lower.
20 D BARTY: Can I say something about the bees?
21 D SOO-JIN: Please, Barty.
22 D WENDELL: Mr. Quill, you don't have to--
23 D BARTY: I want to. They go quiet when strangers come. That night, they went quiet at ten, not nine. Somebody was at the hive an hour before the van.
24 D SOO-JIN: An hour before.
25 D BARTY: Right, Ms. Han. Which means the van wasn't the first.
26 D WENDELL: That's speculation.
27 D JUDGE CARDENAS: It's beekeeping, Wendell, and it's more than you've given me all week.
28 D SOO-JIN: Mr. Quill, who else keeps hives within a mile?
29 D BARTY: Just the Pellegrino boy and me.
30 D WENDELL: Your Honor, this is a fishing expedition.
31 D JUDGE CARDENAS: It is a honey expedition, and I'll allow it.
32 D SOO-JIN: And the Pellegrino boy, Barty, does he drive a gray van?
33 D BARTY: He drives a bicycle.
34 D WENDELL: Thank you!
35 D BARTY: But his uncle drives a gray van.
36 D WENDELL: Objection!
37 D JUDGE CARDENAS: Overruled. Go on, Mr. Quill.
38 D BARTY: Uncle Dario. Owes me forty dollars since March.
39 D SOO-JIN: Nothing further, Your Honor.
40 D JUDGE CARDENAS: Mr. Pratt, cross?
41 D WENDELL (a long pause): Mr. Quill, about that forty dollars.
42 D BARTY: Yes, Mr. Pratt?
43 D WENDELL: You hold a grudge, don't you?
44 D BARTY: I hold bees, Mr. Pratt. Grudges just sting.
45 D JUDGE CARDENAS: Court is in recess until two. Ms. Han, bring me honey.
46 D SOO-JIN: Your Honor?
47 D JUDGE CARDENAS: Jar of it. My cold's back.

### SCENE s01347 | INT. MESS TENT, FORWARD CAMP - DAY
Detected names (may be incomplete or contain aliases): SERGEANT MORRIS HALE, PRIVATE ELLIOT QUAYLE
1 A ¶ A canvas tent flapping in dry wind.
2 A Trestle tables, tin plates, a single coffee urn.
3 A The distant rumble of artillery has stopped.
4 A Everything has stopped.
5 A ¶ SERGEANT MORRIS HALE, 50s, grizzled, sits alone at the end of a bench, writing a letter in pencil.
6 A A tin mug steams at his elbow.
7 A ¶ He writes.
8 A He stops.
9 A He crosses a line out.
10 A He writes again.
11 A ¶ The tent flap parts.
12 A PRIVATE ELLIOT QUAYLE, 19, enters, helmet off, cropped hair, a young face wrapped around old eyes.
13 A He carries a rifle by the sling and a folded paper in his teeth.
14 A He takes the paper out and stands at attention.
15 D QUAYLE: Sergeant Hale.
16 D HALE: At ease, Private.
17 D QUAYLE: Sir, I've been told to give you this.
18 A ¶ He holds out the paper.
19 A Hale does not take it.
20 A He sets down the pencil.
21 D HALE: Sit.
22 D QUAYLE: Sergeant, I'm supposed to deliver it and come straight back.
23 D HALE: Then sit and come straight back after.
24 A ¶ Quayle sits.
25 A Hale slides the mug across the table.
26 A Quayle takes it.
27 A They both watch the tent flap moving.
28 D HALE [CONT'D]: Quiet out there.
29 D QUAYLE: Yes, Sergeant.
30 D HALE: How long?
31 D QUAYLE: Since noon.
32 D HALE: Is that long?
33 D QUAYLE: Longest it's been since I got here.
34 D HALE: How long have you been here?
35 D QUAYLE: Six weeks.
36 D HALE: That's not long.
37 D QUAYLE: No, Sergeant.
38 A ¶ Hale picks up the paper, unfolds it, reads, folds it again.
39 A He sets it on the table beside his letter.
40 D HALE: Do you know what this says?
41 D QUAYLE: No, Sergeant.
42 D HALE: It says the war is over.
43 D QUAYLE: Sir?
44 D HALE: Armistice at noon. That's why it's quiet.
45 A ¶ Quayle sits very still.
46 A He sets the mug down.
47 A His hands lie flat on the table.
48 D QUAYLE: Sergeant, nobody told us.
49 D HALE: They're telling us now.
50 D QUAYLE: Is it true?
51 D HALE: It's signed.
52 D QUAYLE: Then why do we still have to stand watch?
53 D HALE: Because nobody told the other side.
54 D QUAYLE (softly): Oh.
55 D HALE: Don't take your helmet off yet.
56 D QUAYLE: No, Sergeant.
57 D HALE: You can take your boots off.
58 D QUAYLE: Sir?
59 D HALE: I've never seen a man win a war with his boots on.
60 A ¶ Quayle laughs, helpless, and puts his hands over his face.
61 A Hale lifts the pencil and finishes his sentence.
62 A The tent flap moves.
63 A The wind carries a distant bugle, very thin, very far.
64 D QUAYLE: Sergeant. Is that ours?
65 D HALE: It's somebody's.
66 D QUAYLE: What do we do now?
67 D HALE: We eat, Private.
68 D QUAYLE: And after?
69 D HALE: After, you write to your mother.
70 D QUAYLE: What do I tell her?
71 D HALE (not looking up): Tell her you were in the mess tent when it happened.

### SCENE s01194 | EXT. WHALE-RIB BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): SERAPHINA OKONKWO-DREY, BRAM LAME, TASHI, GREYMOOR
1 A ¶ A colossal skeleton arches over a fogbound chasm.
2 A Ribs the width of oaks form a walkway.
3 A Prayer flags snap from the vertebrae.
4 A ¶ SERAPHINA OKONKWO-DREY (30s, hooded cloak, staff of white wood) steps onto the bridge.
5 A BRAM THE LAME (50s, iron crutch) shuffles behind her.
6 A TASHI (12, goat bell on a cord) skips ahead.
7 A Last, GREYMOOR (ageless, antlered, silver eyes) waits on the far side.
8 D SERAPHINA: Stay on the bones.
9 D TASHI: Which bones?
10 D BRAM: All of them, you fool.
11 A ¶ The bridge shudders.
12 A A rib cracks.
13 A Seraphina grabs Tashi's collar, Bram lunges for the rail, and all three crash to their knees as a gap opens ahead.
14 D GREYMOOR: You are late.
15 D SERAPHINA: The tide was early.
16 D GREYMOOR: The tide was never yours.
17 A ¶ Greymoor raises one hand.
18 A Mist rises, thick and white.
19 A The bridge heals itself with a groan.
20 A Bram stands, stunned.
21 A Tashi laughs, a bright note.
22 D TASHI: Again!
23 A ¶ Seraphina and Greymoor lock eyes.
24 A Neither blinks.

### SCENE s01301 | EXT. SKI JUMP TOWER - TOP PLATFORM - DAWN
Detected names (may be incomplete or contain aliases): COACH LARS EKBERG, MIKA SAARINEN, OFFICIAL YEVGENY MARKOV
1 A ¶ Wind whips the flags.
2 A Below, a white ramp falls away to a snowy outrun and a ribbon of crowd.
3 A ¶ COACH LARS EKBERG, 50s, fur-trimmed parka, stands behind the jumper with a radio in his fist.
4 A ¶ MIKA SAARINEN, 20s, in a skin-tight suit and goggles, sits on the starting bar.
5 A Her knees tremble.
6 A ¶ OFFICIAL YEVGENY MARKOV, 40s, in an orange vest, hunches over a clipboard and a wind gauge.
7 D LARS: Wind's shifting.
8 D MIKA: Is it going to be okay?
9 D YEVGENY (to Lars, low): Eight metres a second. Gusting.
10 D LARS (to Mika): It's fine. You've done worse.
11 D MIKA: I haven't.
12 D LARS: You've jumped in a blizzard.
13 D MIKA: I fell in a blizzard.
14 D LARS: You landed in a blizzard.
15 D YEVGENY (to the radio): Gate open on my word.
16 D MIKA: Coach, I can't feel my hands.
17 D LARS: Good. Then they can't shake.
18 D YEVGENY (to the whole tower): Silence on the platform, please.
19 A ¶ Everyone is still.
20 A Wind.
21 A A raven calls.
22 D LARS (muttering): Come on, girl. Come on.
23 D YEVGENY: Go.
24 A ¶ Mika pushes off.
25 A The ramp swallows her.
26 A A hiss of ice.
27 A A scream from the crowd, then a roar.
28 A ¶ Lars drops the radio.
29 A Presses his gloved fists to his mouth.
30 D YEVGENY [CONT'D] (into the radio, shaky): She landed. She stood it up.
31 A ¶ Lars laughs.
32 A Tears freeze on his beard.

### SCENE s00972 | INT. FERRY CAFETERIA - NIGHT CROSSING
Detected names (may be incomplete or contain aliases): DOLORES, PAZ, HENRIK
1 A ¶ Orange plastic booths.
2 A A coffee urn rattles with the engine.
3 A Rain on the windows.
4 A Nobody else aboard.
5 A ¶ DOLORES (60s, black cardigan, rosary wound around her wrist) sits stiff.
6 A Across from her, PAZ (40s, leather jacket, same jaw) peels a label off a water bottle.
7 A ¶ HENRIK (50s, rumpled suit, folder under his arm) arrives with two paper cups.
8 A Sets one down.
9 A Hesitates.
10 A Sets the other down too.
11 A ¶ She doesn't touch hers.
12 A She watches her sister.
13 D HENRIK: Your mother's will is short.
14 D DOLORES: Mine, she says. My mother. Not yours.
15 A ¶ Paz stops peeling.
16 A She looks up.
17 D PAZ: Our mother.
18 A ¶ She slides the label across the table.
19 A A small, damp scrap.
20 D HENRIK: It leaves the house to one of you.
21 A ¶ She laughs.
22 A Short.
23 A Ugly.
24 A The other stays silent.
25 D DOLORES: Which one.
26 D HENRIK: The one who stayed.
27 A ¶ Paz stands.
28 A Sits again.
29 A Her knee bounces under the table.
30 D PAZ: Twenty years she called me every Sunday.
31 D DOLORES: And I washed her every morning.
32 A ¶ She slams a palm on the Formica.
33 A The urn rattles louder.
34 A Henrik flinches, opens the folder, closes it.
35 D HENRIK: There's a letter. She asked me to read it only if you both were present.
36 D DOLORES: Read it, then.
37 A ¶ He unfolds the page.
38 A Clears his throat.
39 A Her eyes are already wet.
40 A The other's are not.
41 D HENRIK (reading): "Neither of you gets the house."
42 A ¶ Silence.
43 A The ferry horn sounds, long and low.
44 A ¶ She reaches for the cup.
45 A Her hands shake.
46 A Paz takes the other cup, drinks, and nods once at the window.
47 D PAZ: She never could make a decision.
48 D DOLORES: She made this one.

### SCENE s01750 | INT. RADIO HUT - FLOODED RICE PADDY - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR WHITCOMBE, SOLDIER, ODETTE LAMBERT, TRAN
1 A ¶ Bamboo walls on stilts above black water.
2 A A kerosene lamp.
3 A A field radio on a crate, its dials faintly glowing.
4 A Rain drums the thatch and drips through in three places, into three cooking pots.
5 A ¶ MAJOR WHITCOMBE (50s, British liaison, damp mustache, an unlit cigar) sits cross-legged on a rolled blanket, a map across his knees.
6 A At the radio, a SOLDIER (20s, barefoot, helmet at his feet, thin as the bamboo) twists the dial through static.
7 A In the corner, ODETTE LAMBERT (30s, field nurse, hair cut short as a boy's) wraps bandage around a wounded forearm that is, evidently, her own.
8 D SOLDIER: Nothing. Only the ocean.
9 D WHITCOMBE: That is not the ocean, son. That is the sound of the Pacific not talking to us.
10 D SOLDIER: Yes, sir.
11 D WHITCOMBE: What is your name?
12 D SOLDIER: Tran, sir.
13 D WHITCOMBE: First or last?
14 D TRAN: Last. My first is Minh.
15 D WHITCOMBE: Minh Tran. Good. You will be on the radio until dawn, Minh. If anyone answers, you wake me. If no one answers, you wake me anyway.
16 D TRAN: Why, sir?
17 D WHITCOMBE: Because the night is long, and I should like to be told when it ends.
18 A ¶ Odette finishes her bandage and bites the end of the tape.
19 A She tests the knot.
20 A It holds.
21 D ODETTE: Major, you might tell him the real reason.
22 D WHITCOMBE: Which is?
23 D ODETTE: That we've been cut off for three days, and you want to hear a human voice.
24 D WHITCOMBE: Madame Lambert, you are insubordinate.
25 D ODETTE: I'm a nurse. It's a symptom.
26 D WHITCOMBE: Of what?
27 D ODETTE: Of watching men pretend.
28 A ¶ A drip lands in a pot with a clear, small note.
29 A Tran turns the dial.
30 A The static rises, falls, rises.
31 D TRAN: Sir, may I speak?
32 D WHITCOMBE: You may.
33 D TRAN: My brother is in the north. He's with them.
34 D WHITCOMBE: With them.
35 D TRAN: With the other side. I don't know where. If I hear his voice on this radio I don't know what I'll do.
36 D WHITCOMBE: Then you will do what a soldier does. You will wake me.
37 D TRAN: And then?
38 D WHITCOMBE: Then we shall see.
39 D ODETTE (gently): He means he won't shoot, Minh.
40 D WHITCOMBE: I did not say that.
41 D ODETTE: You didn't have to.
42 A ¶ The Major lifts the cigar to his mouth, finds it unlit, lowers it.
43 A The lamp flickers.
44 A Tran adjusts one last dial, and for a heartbeat the static thins, and a thread of faint music comes through, a woman singing in a language none of them speaks.
45 A ¶ The three of them listen.
46 D WHITCOMBE: Whatever that is, do not touch it.
47 D TRAN: No, sir.
48 A ¶ The song fades.
49 A The rain keeps falling, in three pots, in the dark.

### SCENE s00309 | INT. ABANDONED LIGHTHOUSE LENS ROOM, MOONLIGHT - NIGHT
Detected names (may be incomplete or contain aliases): CALLISTA ROUSSEL-OKAFOR, DES, ACHTERBERG-NNAMDI, MARIGOLD PEMBERTON-ASANTE, ZEPHYR KOWALCZYK-ADEYEMI, INSPECTOR MALACHI QUARTERMAINE-OSEI
1 A ¶ A great Fresnel lens, dark, towering over the room like a cathedral of cut glass.
2 A A rusted catwalk wraps it.
3 A Wind sings through broken panes.
4 A ¶ Four people sit on crates in a loose circle, sharing a thermos.
5 A They are strangers by temperament, partners by accident.
6 A ¶ CALLISTA ROUSSEL-OKAFOR (30s, field jacket, a laptop open on her knee) taps keys.
7 A DESMOND "DES" ACHTERBERG-NNAMDI (40s, bearded, binoculars at his chest) glasses the sea.
8 A MARIGOLD PEMBERTON-ASANTE (50s, silver hair, birdwatcher's vest) tends the thermos.
9 A And young ZEPHYR KOWALCZYK-ADEYEMI (20s, headphones at his neck, restless) paces the catwalk.
10 A ¶ The sea beyond is flat as slate.
11 A The moon is a coin on it.
12 D MARIGOLD (to the group): Tea, anyone?
13 D DES: Please.
14 D CALLISTA: Not now.
15 D ZEPHYR (from above): Nothing yet.
16 D MARIGOLD (muttering): Always nothing yet, then everything at once.
17 A ¶ She pours.
18 A The steam rises in a thin ribbon.
19 A Callista types.
20 A Des lowers the binoculars.
21 D DES (to Callista): You're sure of the coordinates?
22 D CALLISTA: I'm sure of the data. Whoever sent it, less so.
23 D DES (to himself): It's a wild goose chase.
24 D ZEPHYR (calling down): It's a boat.
25 A ¶ They all look up.
26 A Zephyr points.
27 A On the black water, a light, small and white, is moving toward the lighthouse.
28 D CALLISTA: That's not on the schedule.
29 D DES: No lights, then lights.
30 D MARIGOLD: Hush. Let it come.
31 A ¶ The boat grows.
32 A A slow engine.
33 A Zephyr descends the catwalk with quick steps.
34 A The four of them gather at the window.
35 A Wind whines in the glass.
36 A ¶ The boat slides up to the rocks.
37 A A figure climbs onto the landing.
38 A Thin, soaked, a case in one hand.
39 A He is already climbing the iron stair.
40 A ¶ INSPECTOR MALACHI QUARTERMAINE-OSEI (50s, long coat, hat in hand) steps into the lens room, and stops.
41 A He looks at each of them in turn.
42 D MALACHI: Good evening. Thank you for waiting.
43 A ¶ Callista closes her laptop.
44 A Slowly.
45 A Des lowers his binoculars.
46 A Marigold sets down the thermos.
47 A Zephyr moves, quietly, between the inspector and the stair.
48 D MALACHI [CONT'D] (mildly): Please. Don't. I'm here as a friend.
49 A ¶ He sets the case on a crate and opens it.
50 A Inside, a folded sheet of paper and a revolver.
51 D MALACHI [CONT'D]: One of you wrote to me. I should like to know which.
52 A ¶ Silence.
53 A The moon cuts through the lens and throws one blade of light across the floor.

### SCENE s00720 | INT. MUNICIPAL PIGEON CENSUS OFFICE - SUBBASEMENT - DAY
Detected names (may be incomplete or contain aliases): GWENDOLYN PRATT, TOBIAS NKEMELU, ANJALI VERMA, OSKAR LINDQVIST, MARISOL DUARTE, INTERCOM, LEONARD
1 A ¶ A windowless room under City Hall, lit by one fluorescent tube that has been dying since the last administration.
2 A Clipboards hang from nails like pelts.
3 A On every wall, laminated maps of the city are stuck with coloured pins, each pin a flock nobody has visited in years.
4 A ¶ GWENDOLYN PRATT, fifties, Regional Avian Statistics Director, stands on a wobbling chair in a cardigan the colour of weak tea.
5 A She holds a single grey feather aloft like a verdict.
6 A ¶ Around the long table, the team has gone still.
7 A ¶ TOBIAS NKEMELU, thirties, the only person in the office with a tan, lowers his sandwich.
8 A ANJALI VERMA, twenties, sharp-eyed, clicks her pen once, twice.
9 A OSKAR LINDQVIST, sixties, a man built entirely of corduroy, does not look up from his crossword.
10 A MARISOL DUARTE, forties, the department's tired heart, sits with her coat still on.
11 D GWENDOLYN (to everyone): Colleagues. The Mayor's office wants the Q3 count by four o'clock. We have counted, by my reckoning, eleven pigeons.
12 D TOBIAS: Eleven in total? In the city?
13 D GWENDOLYN: Eleven that are confirmed to be pigeons and not, as Oskar's report suggested, "a mood."
14 D OSKAR (not looking up): Seven letters. "Regret, in a hat."
15 D ANJALI (to Gwendolyn): Ma'am, I've been telling you since March. The spreadsheet's counting the same bird. Reginald. He's got a limp.
16 D GWENDOLYN: Reginald is a limp. Reginald is not a flock.
17 A ¶ Gwendolyn steps down from the chair.
18 A It rocks, then forgives her.
19 A She smooths the cardigan and, for the first time, looks tired.
20 D GWENDOLYN [CONT'D] (muttering, to herself): Thirty years. Thirty years of pins.
21 A ¶ An INTERCOM crackles on the wall above the door, a beige box with a tongue of dust.
22 D LEONARD [V.O.] (over intercom, bright): Hello, subbasement! Leonard from Facilities. Quick heads up, the four o'clock deadline has been moved to "whenever." The Mayor has discovered squirrels.
23 A ¶ The room exhales as one body.
24 A Tobias resumes his sandwich.
25 A Anjali caps her pen.
26 D MARISOL (to Leonard's box): Thank you, Leonard.
27 D LEONARD [V.O.] (over intercom): Also, someone's been leaving feathers in the lift. Just flagging.
28 A ¶ Gwendolyn looks at the feather in her hand.
29 A She walks to the nearest map and, with great ceremony, pins it to the middle of the city.
30 D GWENDOLYN (quietly, to Marisol): Put that down as twelve.
31 D MARISOL: It's a feather.
32 D GWENDOLYN: It's a pigeon in spirit.
33 A ¶ Oskar fills in a word.
34 A He nods, satisfied, at no one at all.
35 D OSKAR (to himself): Hat.

### SCENE s02335 | INT. BOWLING ALLEY - LANE 9 - NIGHT
Detected names (may be incomplete or contain aliases): HAPPY BIRTHDAY NOOR, WESLEY, BEANS, PRISCILLA, NOOR'S MOTHER, HAKIMI, RUDY
1 A ¶ Neon pins on the wall.
2 A Carpet printed with comets.
3 A The scoring monitor above lane 9 reads HAPPY BIRTHDAY NOOR in rainbow letters.
4 A Balls clatter down the lanes in the dim.
5 A ¶ NOOR, 15, sits in a plastic chair with a paper crown tilted on her head.
6 A She holds a slice of cake like a plate she's not sure she's allowed to eat from.
7 A ¶ WESLEY, 15, flips through the score sheet with studied boredom.
8 A BEANS, 14, bites a straw flat.
9 A PRISCILLA, 16, texts under the table, glancing up at the door every few seconds.
10 A ¶ Nobody speaks.
11 A A ball thunders down the next lane, and all four of them watch it.
12 A ¶ NOOR'S MOTHER, MRS. HAKIMI, 40s, in a work blazer, stands at the shoe counter signing a receipt.
13 A She doesn't look at the kids.
14 A ¶ Behind the counter, RUDY, 60s, spritzes a pair of size sevens with disinfectant.
15 A He watches Noor the way a man watches weather.
16 D WESLEY: You're up, Noor.
17 D NOOR: I know.
18 D WESLEY: It's your birthday. You go first.
19 D NOOR: I said I know.
20 A ¶ She doesn't move.
21 A She sets the cake on her knee.
22 A Priscilla's phone buzzes, and she slides it into her sleeve.
23 D BEANS: Is she going to throw it or what?
24 D NOOR: Who?
25 D BEANS: Anyone.
26 D PRISCILLA (under her breath): She's not coming.
27 D NOOR (not looking up): Who's not coming?
28 D WESLEY: Nobody. Throw the ball.
29 A ¶ Noor rises.
30 A Takes a ten-pound ball from the rack.
31 A She holds it with both hands, studies the pins.
32 A Down the lane, the machine resets.
33 A ¶ At the counter, Mrs. Hakimi turns.
34 A For a moment her eyes meet her daughter's.
35 A She lifts one hand in a half wave, then returns to the receipt.
36 A ¶ Noor raises the ball.
37 A Draws back.
38 A Lets it go.
39 A It rolls hard and straight into the gutter.
40 A The monitor chirps: GUTTER.
41 A ¶ No one says a word.
42 A Rudy sets down the disinfectant and presses the button that raises the bumpers.
43 A ¶ Noor stays at the line.
44 A Her paper crown has slipped over one eye.
45 A She does not fix it.

### SCENE s00121 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): PIA CALLOWAY, WENDELL OYELARAN, INTERCOM, MRS. DUBOIS
1 A ¶ A cramped room of hot metal and film smell.
2 A Two projectors rattle in unison, throwing twin beams through small square windows.
3 A ¶ PIA CALLOWAY, 16, in her father's oversized work shirt, threads a reel with quick, careful hands.
4 A Beside her, WENDELL OYELARAN, 17, holds a flashlight and a paper sack of popcorn he has no intention of sharing.
5 A ¶ He peers over her shoulder.
6 A She swats him away without looking.
7 D WENDELL: You're holding it wrong.
8 D PIA: I've held it a hundred times.
9 D WENDELL: Holding it wrong a hundred times.
10 A ¶ She grins in spite of herself, then locks the gate.
11 A The projector sings.
12 A A faint cheer drifts up from the cars below.
13 A ¶ An INTERCOM crackles on the wall.
14 D MRS. DUBOIS [O.S.] (intercom): Pia, honey, reel two's late. Cars are honking.
15 D PIA (to the intercom): Coming up, Mrs. Dubois. Ninety seconds.
16 D MRS. DUBOIS [O.S.] (intercom): Ninety seconds is how long the Hendersons will wait before they ask for their dollar back.
17 A ¶ She lets go of the button and turns, flustered.
18 A He is already holding out the second reel like a dinner plate.
19 D WENDELL: Ninety seconds. I'll count.
20 D PIA: You'll count wrong.
21 D WENDELL: Then count with me.
22 A ¶ She takes the reel.
23 A He leans in, shoulder to shoulder, so close their flashlights tangle.
24 A She does not move away.
25 D PIA: Wend. If this goes wrong, my dad will fire me.
26 D WENDELL: It's your dad's booth.
27 D PIA: That's why.
28 A ¶ Together they thread.
29 A The leader slips through the rollers, sprockets bite, and she tightens her jaw and he quiets his breathing, both of them staring at the same sliver of film.
30 D MRS. DUBOIS [O.S.] (intercom): Sixty seconds.
31 D PIA: We know!
32 D WENDELL: We know!
33 A ¶ The changeover cue flashes in the corner of the screen.
34 A She thumbs the switch.
35 A The first projector dies.
36 A The second blazes.
37 A ¶ Below, the cars cheer.
38 A She exhales.
39 A He laughs.
40 A They stand there, shaking, two kids on top of the world.
41 D WENDELL [CONT'D]: Best job in the county.
42 D PIA: Worst pay.
43 D WENDELL: Best view.
44 A ¶ She looks at him.
45 A He is looking at the screen.
46 A ¶ On the glass, the light of the film flickers across both faces.

### SCENE s00025 | INT. MOBILE SURGICAL TRUCK, FAIRGROUND - NIGHT
Detected names (may be incomplete or contain aliases): IMELDA CASTELLANOS-BRIGHT, TOOTS, VASSILIEV, WENDELL, DISPATCH
1 A ¶ Steel walls.
2 A Fluorescent hum.
3 A Outside, a carousel plays a warped waltz.
4 A ¶ DR. IMELDA CASTELLANOS-BRIGHT (50s, silver braid, precise) scrubs at a stainless sink.
5 A Across the narrow room, ANTON "TOOTS" VASSILIEV (30s, medic, tattooed forearms) wheels in a gurney.
6 A A sheet covers the shape on it.
7 D IMELDA: Toots. Slower.
8 D TOOTS: Sorry, Doc. Floor's uneven.
9 D IMELDA: It's a truck in a field. Everything's uneven.
10 A ¶ Toots locks the gurney.
11 A The carousel music thins, then swells.
12 D TOOTS: Vitals are stable. Pressure's low, but he's talking.
13 D IMELDA: Who is he?
14 D TOOTS: Calls himself Wendell. Fell off the Ferris wheel.
15 D IMELDA: Fell.
16 D TOOTS: That's his word.
17 A ¶ Imelda dries her hands.
18 A She folds the sheet back.
19 A WENDELL (60s, pale, cheerful, fairground jacket) squints up at the lights.
20 D WENDELL: Hello, hello. Don't go to any trouble.
21 D IMELDA: Mr. Wendell, I'm Dr. Castellanos-Bright. Where does it hurt?
22 D WENDELL: Nowhere, really. Funny that.
23 D IMELDA (to Toots): Pain meds?
24 D TOOTS: None. He refused.
25 D IMELDA: Refused?
26 D WENDELL: I like to feel where I am.
27 A ¶ She checks his pupils.
28 A He follows her light with unnerving ease.
29 A Toots shifts on his feet.
30 D TOOTS: Doc, a word?
31 D IMELDA: Say it here.
32 D TOOTS: It's not a thing for here.
33 A ¶ She holds his gaze.
34 A Then she walks him to the corner, out of Wendell's earshot.
35 D IMELDA (low): What.
36 D TOOTS: Fall was sixty feet. He landed on concrete.
37 D IMELDA: And?
38 D TOOTS: Nothing's broken. Not a rib. Not a bruise.
39 A ¶ Imelda looks back at Wendell.
40 A He waves.
41 D IMELDA: Then he's lucky.
42 D TOOTS: Doc, I felt for a pulse four times. I couldn't find one.
43 A ¶ The radio on the wall CRACKLES.
44 D DISPATCH [V.O.] (over radio): Mobile Two, dispatch. Ambulance en route, ETA fifteen. Say your patient's condition.
45 A ¶ Imelda keys the radio, eyes on Wendell.
46 D IMELDA (into radio): Dispatch, patient is stable. Repeat, stable.
47 D DISPATCH [V.O.] (over radio): Copy. Be advised, caller says the Ferris wheel victim was pronounced at the scene. Please confirm identity.
48 A ¶ Silence.
49 A The carousel waltz winds down to a single note.
50 D TOOTS: Doc.
51 D IMELDA: I heard.
52 A ¶ She turns.
53 A Wendell is sitting up, the sheet pooled at his waist.
54 A He's still smiling.
55 A His chest does not rise or fall.
56 D WENDELL: Dr. Castellanos-Bright. I think I'd like some of that pain medicine after all.
57 D IMELDA (slowly): Why's that, Mr. Wendell?
58 D WENDELL: Because it's starting.
59 A ¶ He looks down at his hands.
60 A They are going translucent, like wax over a flame.
61 D TOOTS (whispering): Doc, back away.
62 A ¶ Imelda doesn't.
63 A She reaches out and takes Wendell's hand, which is already cooling.
64 D IMELDA: Toots, tell dispatch to cancel the ambulance.
65 D TOOTS: Doc--
66 D IMELDA (not looking away): Tell them he's been pronounced.
67 A ¶ Toots stares at her.
68 A Then he lifts the radio, and his voice breaks.
69 D TOOTS (into radio): Dispatch, Mobile Two. Cancel the ambulance.
70 D WENDELL: Thank you for staying.
71 A ¶ The sheet settles over an empty gurney.
72 A Outside, the carousel starts again from the beginning.

### SCENE s02365 | INT. DERELICT MARS SURFACE HABITAT - COMMON ROOM - SOL 412
Detected names (may be incomplete or contain aliases): HATTIE, OKONJO-BELL, LEOPOLD ASHWORTH, COMMS OFFICER RENATA KWIATKOWSKI, BILLIE, TSANG
1 A ¶ Red dust coats every surface.
2 A A cracked dome overhead lets in amber light.
3 A Cots, a folding table, shelves of dehydrated meals, a dead plant in a coffee tin.
4 A A generator whirs weakly in the next compartment.
5 A ¶ MISSION SPECIALIST HARRIET "HATTIE" OKONJO-BELL, 40s, in a faded jumpsuit, sits at the table cleaning a helmet visor with a rag.
6 A Her hair is chopped short.
7 A Her eyes are tired but sharp.
8 A ¶ DR. LEOPOLD ASHWORTH, 60s, leans against a shelf, wrapped in a thermal blanket, coughing into a fist.
9 A A gray beard has grown unevenly on his cheeks.
10 A ¶ COMMS OFFICER RENATA KWIATKOWSKI, 30s, kneels beside a dead radio set with a screwdriver, muttering in Polish.
11 D HATTIE: Any luck?
12 D RENATA: It's the transmitter. The coil's burned through.
13 D HATTIE: Can you fix it?
14 D RENATA: With what? A paper clip and a prayer?
15 D LEOPOLD (rasping): I have a prayer.
16 D RENATA: Save it for the oxygen.
17 A ¶ Hattie sets the visor down.
18 A A faint rumble builds in the walls.
19 A The three of them look up.
20 A Dust trickles from the dome.
21 D HATTIE: Another quake?
22 D LEOPOLD: No. That's an engine.
23 A ¶ Renata drops the screwdriver.
24 A They all stare at the ceiling.
25 A The rumble grows, a roar, then a shriek of thrusters.
26 A A shadow slides across the dome, long and dark.
27 A ¶ A final shudder.
28 A Silence.
29 A ¶ Then a hatch clanks at the far end of the room.
30 A It swings open.
31 A A figure in a white suit steps through, visor up, face lit by the amber glow: CAPTAIN WILHELMINA "BILLIE" TSANG, 50s, with a rescue beacon in one gloved hand.
32 D BILLIE: Hello, Hattie.
33 A ¶ Hattie rises very slowly.
34 A Her rag slides from the table.
35 D HATTIE: You came back.
36 D BILLIE: I said I would.
37 D LEOPOLD (a tired laugh): You said it forty times.
38 D BILLIE: And I meant it forty times.
39 A ¶ Renata crosses the room in three strides and throws her arms around Billie's suit.
40 A The visor clacks against her forehead.
41 A She laughs and sobs and swears in Polish.
42 A Hattie stays where she is, one hand on the back of a chair.
43 D HATTIE (quietly): How long do we have?
44 D BILLIE: Eleven minutes before the dust storm.
45 D HATTIE: Then we go.
46 D BILLIE: We go.
47 A ¶ She hands the beacon to Leopold, helps him up, drapes the blanket across his shoulders.
48 A He leans on her.
49 A The generator sputters and stops.
50 A In the sudden quiet the dead plant in its coffee tin catches the light from the open hatch, and for one moment, it looks green.

### SCENE s00911 | INT. CARGO CRANE CAB - SHIPPING PORT - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RENATA VOSS, KARIM SALEH, LEO FONTANA, OLGA DRAGOMIR
1 A ¶ A glass cockpit forty metres above a sea of stacked containers.
2 A Sodium lamps glow below.
3 A Wind shakes the window.
4 A A thermos, a radio, a paper bag of cold fries.
5 A ¶ AGENT RENATA VOSS, 40s, crouches below the control panel, gun drawn, her breath fogging the glass.
6 A KARIM SALEH, 30s, the crane operator, sits frozen at the joystick, hands raised.
7 A LEO FONTANA, 50s, a dockworker with a limp, clutches a canvas satchel against his chest.
8 A OLGA DRAGOMIR, 40s, a customs officer, stands at the rear door with a flashlight, mouth tight.
9 D RENATA: Nobody move.
10 D KARIM: I'm not moving.
11 D LEO: Neither am I.
12 D OLGA (low): This isn't what we agreed.
13 D RENATA: Ma'am, put the light down.
14 A ¶ Olga lowers it.
15 A The beam wobbles across the floor.
16 A Leo takes one step back.
17 A Karim lowers one hand to the joystick.
18 A Renata and Olga fire a look at each other.
19 A The wind gusts.
20 A The cab sways.
21 D RENATA [CONT'D]: Mr. Fontana, the satchel.
22 D LEO: It's mine.
23 D RENATA: It's evidence.
24 D LEO: It's my pension.
25 D OLGA: Leo, shut up.
26 A ¶ They all freeze again, Renata with her gun on Leo, Leo with his satchel, Olga with her hand drifting inside her coat, Karim with his fingers inches from the lever.
27 A A truck horn blares on the dock far below.
28 A Everyone flinches.
29 D KARIM (whispering): I could drop them. One pull. The whole container.
30 D RENATA: Don't.
31 D KARIM: I'm saying I could.
32 D OLGA (sharp): Karim.
33 A ¶ Olga draws a pistol.
34 A Renata swings her aim.
35 A Leo dives.
36 A Karim yanks the lever.
37 A The crane lurches.
38 A Containers shriek in their chains.
39 A The floor tilts and everyone slides, gun, satchel, flashlight tumbling into the corner, and the whole cab begins to swing out over the black water.
