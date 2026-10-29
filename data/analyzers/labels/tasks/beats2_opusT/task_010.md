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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00010.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02141 | EXT. HOT-AIR BALLOON - OVER THE TANEZROUFT DESERT - DAY
Detected names (may be incomplete or contain aliases): PILOT MAREN COLE, BOY, AMADI
1 A ¶ The envelope is half-collapsed, patched with a dozen mismatched swatches of canvas.
2 A The wicker basket drags a shadow across a sea of red dunes that goes on to every horizon.
3 A No road.
4 A No river.
5 A A wind that tastes of iron.
6 A ¶ PILOT MAREN COLE, 50s, leather helmet pushed back, sun-cracked lips, sits against the burner and rations water with a bottle cap.
7 A Opposite her, a BOY, 12, thin as a pole in a man's flight jacket, stares at the horizon without blinking.
8 D MAREN: Drink.
9 D BOY: You first.
10 D MAREN: I had mine.
11 D BOY: You didn't.
12 D MAREN: Then drink half and give me the rest.
13 A ¶ The Boy sips.
14 A Hands her the bottle.
15 A She does not drink, just holds it.
16 D BOY: What's your name?
17 D MAREN: Maren.
18 D BOY: I'm not going to call you that.
19 D MAREN: You can call me whatever you like. What do I call you?
20 D BOY: Nothing yet.
21 D MAREN: That's a bad name.
22 A ¶ The balloon dips, then lifts again.
23 A The burner coughs.
24 A Maren jams a boot against the gas line and it steadies.
25 D MAREN [CONT'D]: Propane's low. Forty minutes of flame, maybe less.
26 D BOY: Then what?
27 D MAREN: Then we go where the wind sends us.
28 D BOY: Is that far?
29 D MAREN: No farther than we've come.
30 A ¶ The Boy shifts.
31 A A silver chain slides from his collar.
32 A A small tin medal on the end.
33 A Engraved: AMADI.
34 D MAREN [CONT'D]: That's your name.
35 D BOY: It's my brother's name.
36 D MAREN: Where's your brother?
37 D BOY: In the plane.
38 A ¶ Maren looks at the dunes.
39 A A long way off, a thin black thread of smoke rises, flattens, wavers in the heat.
40 D MAREN: Amadi.
41 A ¶ The Boy looks at her.
42 D MAREN [CONT'D]: That's a good name. Two syllables. Easy to shout.
43 D AMADI: Don't.
44 D MAREN: Why not?
45 D AMADI: When you shout, somebody doesn't come.
46 A ¶ Maren says nothing.
47 A She puts the bottle in his hands.
48 D MAREN: Drink the rest, Amadi.
49 A ¶ He drinks.
50 A She watches the smoke.
51 A The burner flames sputter, and for the first time a thin wind catches the envelope and turns the basket, very slowly, toward the thread of black.
52 D AMADI: Maren.
53 D MAREN: Yes.
54 D AMADI: Is that where we are going?
55 D MAREN: That is where the wind is going.
56 A ¶ The flame dies.
57 A Silence.
58 A The basket swings.
59 A The desert slides under them like a tide.

### SCENE s00094 | EXT. ROOFTOP APIARY - GOLDEN HOUR
Detected names (may be incomplete or contain aliases): AMARA OKEKE, THEO BALASUBRAMANIAN, GRANDMOTHER NNEKA
1 A ¶ Hives like pastel filing cabinets.
2 A Bees drift over the city skyline.
3 A A string of bulbs sways overhead.
4 A ¶ AMARA OKEKE (30s, veil pushed back, honey on her wrist) lifts a frame heavy with comb.
5 A THEO BALASUBRAMANIAN (30s, borrowed veil, delighted) stands too close, holding a smoker he has not lit.
6 D AMARA: Step back.
7 D THEO: I'm fine.
8 D AMARA: You're stepping on the queen's door.
9 D THEO: I'm sorry, Your Majesty.
10 A ¶ She laughs.
11 A He lights the smoker.
12 A A white plume.
13 D AMARA: Gently.
14 D THEO: Always.
15 A ¶ The stairwell door bangs.
16 A GRANDMOTHER NNEKA (80s, floral housecoat, cane, a shopping bag) hobbles onto the roof.
17 D NNEKA: Amara!
18 D AMARA: Mama?
19 D THEO: Hello, ma'am.
20 D NNEKA: Who is the boy?
21 D AMARA: It's Theo, Mama. I told you.
22 D NNEKA: You told me Thursday.
23 D THEO: Today is Thursday.
24 D NNEKA: Then I am on time.
25 A ¶ She sets the bag on a hive.
26 A Amara lunges to catch it.
27 D AMARA: Mama! Not there.
28 D NNEKA: It's only plantains.
29 D THEO: They'll love the plantains.
30 D NNEKA: They better. Come, boy. Eat.

### SCENE s00518 | INT. FUNICULAR RAILWAY - CAR 2 - NIGHT
Detected names (may be incomplete or contain aliases): IMANI KARANJA-WELLS, MAN, IGNATIUS ABRAMOWITZ, ENRIQUE VALD, S-MORROW
1 A ¶ A steep little tram climbing a mountain of lights.
2 A Wooden benches, brass rails, windows fogged from breath.
3 A Below, the city sprawls like spilled jewelry.
4 A The cable hums.
5 A ¶ IMANI KARANJA-WELLS (30s, wool coat, camera bag) sits alone on a bench, bundled against the cold.
6 A She gazes at the city.
7 A A thermos cup warms her hands.
8 A ¶ Across the aisle, at the far end, an old couple's empty seats.
9 A A conductor's bell hangs unrung.
10 A The car climbs, slow and gentle.
11 A ¶ At the next stop, the doors hiss open and a MAN steps in, dusting snow from his shoulders: IGNATIUS ABRAMOWITZ (30s, big red scarf, paper bag of roasted chestnuts).
12 A He freezes at the sight of her.
13 D IGNATIUS: Imani?
14 D IMANI: Ignatius.
15 D IGNATIUS: I thought you were in Lisbon.
16 D IMANI: I was in Lisbon. Then I wasn't.
17 D IGNATIUS: How long?
18 D IMANI: Three weeks.
19 A ¶ He nods.
20 A He sits down, one bench across.
21 A The doors close.
22 A The car climbs on.
23 D IGNATIUS: Chestnut?
24 D IMANI: Sure.
25 A ¶ He passes the bag.
26 A She takes one.
27 A It burns her fingers.
28 A She tosses it from hand to hand.
29 D IGNATIUS: They're hot.
30 D IMANI: I noticed.
31 A ¶ Silence.
32 A The city drops away below the windows.
33 D IGNATIUS: I got your postcard.
34 D IMANI: Did you?
35 D IGNATIUS: Three of them. They all said the same thing.
36 D IMANI: Which was?
37 D IGNATIUS: "Wish you were here."
38 D IMANI: That's the whole message.
39 D IGNATIUS: It's an interesting message to send to a man you left.
40 A ¶ She says nothing.
41 A She cracks the chestnut.
42 A Eats half.
43 A Offers him the rest.
44 A He takes it.
45 D IMANI: I didn't leave you.
46 D IGNATIUS: You left a note.
47 D IMANI: I left a note because I couldn't say it.
48 D IGNATIUS: Say what?
49 D IMANI: That I was scared.
50 A ¶ A light flickers on the car's ceiling.
51 A The funicular shudders to a halt.
52 A Silence.
53 A The cable stops humming.
54 D IGNATIUS: Are we stuck?
55 D IMANI: Looks like it.
56 A ¶ A third voice, rough and breathless, cuts in from the platform as the door slides open.
57 A A conductor in a gray cap, ENRIQUE VALDÉS-MORROW (60s, whistle around his neck, lantern swinging), leans into the car.
58 D ENRIQUE: Power cut, folks. Ten minutes. Sit tight.
59 D IMANI: Thank you.
60 D IGNATIUS: We're not going anywhere.
61 A ¶ Enrique glances from one to the other.
62 A He tips his cap and slides the door shut.
63 D IMANI (quietly): You said that on purpose.
64 D IGNATIUS: Which part?
65 D IMANI: We're not going anywhere.
66 A ¶ He looks at the city.
67 A Its lights shimmer through the fogged glass.
68 D IGNATIUS: I meant it.
69 A ¶ She leans her head against the window.
70 A A tiny smile.
71 D IMANI: Ten minutes.
72 D IGNATIUS: Ten minutes.
73 D IMANI (very softly): Then say something.
74 A ¶ He opens his mouth.
75 A Outside, all the lights in the city flicker, die, and then, one by one, come back.

### SCENE s01678 | INT. DEEP-SEA CORE LAB - NIGHT
Detected names (may be incomplete or contain aliases): SABINE ARGYLE, TEODOR MARSH, VESPER
1 A ¶ A pressurized steel cylinder, lit a sickly amber.
2 A Pipes sweat.
3 A Through a single thick porthole, the black water presses close, and something pale drifts past and is gone.
4 A ¶ DR. SABINE ARGYLE (40s, cropped hair, a sleeve of burn scars) kneels at a sample drawer.
5 A At the console, her partner TEODOR MARSH (50s, round glasses) taps a failing readout.
6 A Between them hovers the lab's AI, VESPER, a small amber light in a ceiling lattice.
7 A ¶ The floor shivers.
8 A A bolt pings off the wall.
9 D SABINE: That wasn't the pump.
10 D TEODOR: That wasn't the pump.
11 D VESPER [V.O.]: Hull stress at nine percent above tolerance.
12 A ¶ The two scientists exchange a look.
13 A Sabine slams the drawer shut; Teodor lunges for the console.
14 A They collide in the narrow aisle, tangling arms, and both catch the same railing as the lab pitches.
15 D SABINE: Vesper, which section?
16 D TEODOR: Vesper, which section?
17 D VESPER [V.O.]: Aft. The sample bay.
18 A ¶ The porthole darkens.
19 A A pale shape presses against it, slow, deliberate.
20 A The shiver in the floor becomes a groan.
21 D SABINE: Seal it.
22 D TEODOR: Seal it now!
23 A ¶ They throw their shoulders against the bulkhead wheel together, and it turns, screeching, and the amber light flickers and holds.

### SCENE s02024 | INT. HALLORAN FAMILY GREENHOUSE - SATURDAY MORNING
Detected names (may be incomplete or contain aliases): GRANDMA ROSALIND HALLORAN, TOBY
1 A ¶ A glass lean-to bolted to the back of a brick house.
2 A Tomato vines, hanging fern baskets, a rusted wheelbarrow.
3 A Condensation drips from every pane.
4 A A radio on a shelf plays low country music.
5 A ¶ GRANDMA ROSALIND HALLORAN (70s, tiny, sunhat, hands like gnarled roots) kneels at a seed tray.
6 A ¶ Beside her, TOBIAS "TOBY" HALLORAN (9, cowlick, one shoe untied) holds a trowel like a sword.
7 A ¶ Near the door, DESMOND HALLORAN (40s, Toby's father, rumpled) drinks coffee from a thermos lid.
8 A Next to him, JUNIPER HALLORAN (15, black nail polish, earbuds in) scrolls her phone.
9 D DESMOND: Toby, easy with that.
10 D TOBY: I am easy.
11 D ROSALIND: He is a delicate surgeon.
12 D JUNIPER: He is a menace.
13 A ¶ Toby jabs the trowel into the soil.
14 A It strikes something hard.
15 A CLINK.
16 D TOBY: Gran! There's something!
17 D ROSALIND: Stop digging.
18 D TOBY: It's metal!
19 D ROSALIND: Stop digging, Tobias.
20 A ¶ Her voice is suddenly flat, brittle.
21 A Everyone goes still.
22 A Even the radio seems to hush.
23 D DESMOND: Mum?
24 D ROSALIND: Step back. Everyone.
25 A ¶ She pushes herself up, wincing, takes Toby by the shoulders and moves him aside.
26 A She brushes dirt away with her thumb.
27 A A rusted tin lid appears, stamped with faded red roses.
28 D JUNIPER (pulling out one earbud): Is that a body?
29 D DESMOND: Juniper!
30 D ROSALIND: It is not a body.
31 D TOBY: Is it treasure?
32 D ROSALIND (quietly): It is something I buried the year your grandfather left.
33 A ¶ The room holds its breath.
34 A Desmond sets down the thermos lid.
35 D DESMOND: Mum, you don't have to--
36 D ROSALIND: I do. It's been forty years. I'm tired of tending around it.
37 A ¶ She kneels again, slower.
38 A Works her fingers under the lid.
39 A It resists, then gives with a shriek of old metal.
40 A ¶ Inside, wrapped in oilcloth, a bundle of letters tied with twine, a man's gold watch, and a child's baby shoe.
41 D TOBY: That's tiny.
42 D JUNIPER: That's Dad's.
43 A ¶ Desmond stares at the shoe.
44 A He crouches slowly, picks it up.
45 A His thumb rubs the faded stitching.
46 D DESMOND: You said you lost these.
47 D ROSALIND: I said a lot of things.
48 D DESMOND (louder): You told me he took everything!
49 D ROSALIND (louder): I told you what I could bear to tell you!
50 A ¶ The shout rings off the glass.
51 A Toby flinches.
52 A Juniper steps in front of him, protective, then looks mortified and steps back.
53 D DESMOND (to Rosalind): Forty years.
54 D ROSALIND (to Desmond): Forty years.
55 A ¶ Silence.
56 A Condensation drips from a pane onto a fern frond.
57 A Plink.
58 A ¶ Rosalind lifts the watch, wipes the face with her sleeve.
59 A Holds it to her ear.
60 D ROSALIND [CONT'D]: Still ticking.
61 D DESMOND: It can't be.
62 D ROSALIND: Your father always wound it twice a day. I think I kept doing it, in my head, after.
63 D TOBY (small voice): Can I hold it?
64 A ¶ Rosalind looks at Desmond.
65 A He nods, slow.
66 A She presses the watch into Toby's palm, folding his fingers around it.
67 D ROSALIND: Gently, my darling. It has been waiting a long time.
68 A ¶ Toby lifts it to his ear, eyes huge.
69 D TOBY: It's like a tiny heart.
70 D JUNIPER (softly): That is actually kind of sweet.
71 D DESMOND: Don't tell anyone.
72 D JUNIPER: I'll tell everyone.
73 A ¶ The corner of Desmond's mouth twitches.
74 A He sits down hard on the overturned wheelbarrow and laughs, short and wet.
75 A Rosalind lets out a breath and laughs too.
76 A Juniper joins, helpless.
77 A Toby looks from face to face, confused and thrilled.
78 D TOBY: What's funny?
79 D ROSALIND: Absolutely nothing.
80 D DESMOND: Absolutely nothing.
81 D ROSALIND: Absolutely nothing.
82 D JUNIPER: Everything.
83 A ¶ The radio, as if on cue, turns to a slow waltz.
84 A Rosalind sets the tin in the sun, lid open, and goes back to her seed tray.
85 D ROSALIND: Now. Who wants to plant some tomatoes?

### SCENE s02309 | INT. DEEP-SPACE HAULER, CARGO BAY 3 - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIAN ASANTE-BROOKS, FIRST MATE YUKI TANABE-REYES, CARGO MASTER BORIS ZIELINSKI, MEDIC ANJALI VERMA, STOWAWAY, PILOT
1 A ¶ Stacked containers.
2 A Amber work lights.
3 A A thin layer of frost on the deck plates.
4 A The air recyclers wheeze.
5 A ¶ CAPTAIN LUCIAN ASANTE-BROOKS, fifties, stands at a manifest console.
6 A FIRST MATE YUKI TANABE-REYES, thirties, runs a scanner along a container seam.
7 A CARGO MASTER BORIS ZIELINSKI, forties, big and tired, drags a crowbar.
8 A MEDIC ANJALI VERMA, thirties, hugs a trauma kit.
9 A A STOWAWAY, fifteen, sits cross-legged on a crate, arms wrapped round his knees.
10 A And the ship's AI, a disembodied voice named PILOT, hums through the wall speakers.
11 D LUCIAN: Boris, open it.
12 D BORIS: It's sealed from the inside.
13 D YUKI: That's impossible.
14 D ANJALI: Then who sealed it?
15 D PILOT [V.O.]: Captain, thermal sensors indicate a heat signature in Container Seventeen.
16 D LUCIAN: How warm?
17 D PILOT [V.O.]: Thirty-seven degrees Celsius.
18 A ¶ Yuki lowers her scanner.
19 A Boris sets his crowbar against the seam.
20 A Anjali edges away from the container, closer to the stowaway.
21 A The boy watches it with wide, unblinking eyes.
22 D STOWAWAY: Don't open it.
23 D LUCIAN: Who are you?
24 D STOWAWAY: Please, don't.
25 D BORIS: Captain, the lock's cooling.
26 D YUKI: It's venting. Pressure's equalising.
27 D PILOT [V.O.]: Warning. Structural integrity of Container Seventeen has been compromised.
28 A ¶ The seam splits.
29 A A hiss of white vapour floods the deck, Boris staggers back, Yuki fires a flare, Anjali drags the boy behind a crate, and Lucian draws his sidearm.
30 A The door swings open.
31 A ¶ Inside, curled on a bed of packing foam, a figure raises its head.
32 A It has the boy's face.

### SCENE s01538 | EXT. ABANDONED DRIVE-IN THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): NEELY, JAMES-OKONKWO, LUCY, ARAUJO-PRICE, OLD BARN, HOLLINGSWORTH
1 A ¶ A cracked lot of weeds and speaker posts.
2 A A huge screen, blank and peeling, glows faintly under the moon.
3 A ¶ On the hood of a rust-pitted pickup, two teenagers share a thermos.
4 A ¶ CORNELIUS "NEELY" JAMES-OKONKWO, 17, in a letterman jacket two sizes too big, pours coffee into the cap.
5 A He is trying very hard to look relaxed.
6 A ¶ Beside him, LUCINDA "LUCY" ARAUJO-PRICE, 17, in a flannel and combat boots, swings her legs and counts stars.
7 D NEELY: Dad used to bring me here.
8 D LUCY: Before they closed it?
9 D NEELY: Before everything.
10 D LUCY: What did you watch?
11 D NEELY: Whatever was on. Monster movies, mostly.
12 D LUCY: Scary?
13 D NEELY: Not to him.
14 A ¶ She laughs.
15 A Takes the cap.
16 A Sips.
17 A Makes a face.
18 D LUCY: This is terrible.
19 D NEELY: It's my grandmother's recipe.
20 D LUCY: Your grandmother hated you.
21 D NEELY: Possibly.
22 A ¶ They sit.
23 A Crickets.
24 A The screen creaks in the wind.
25 D LUCY: I leave Friday.
26 D NEELY: I know.
27 D LUCY: You're not going to say anything?
28 D NEELY: I'm saying it. I'm saying "I know."
29 D LUCY: That's not saying.
30 D NEELY: It's most of what I've got.
31 A ¶ She hands back the cap.
32 A Their fingers touch.
33 A Neither pulls away.
34 D LUCY: There's a car.
35 D NEELY: Where?
36 D LUCY: Behind the screen. Headlights.
37 A ¶ He looks.
38 A Two white eyes crawl along the fence line.
39 D NEELY: Probably nothing.
40 D LUCY: It's stopping.
41 A ¶ The headlights go dark.
42 A A door opens.
43 A A figure walks toward them across the lot, hands in pockets.
44 A ¶ BARNABY "OLD BARN" HOLLINGSWORTH, 60s, in a security jacket, flashlight swinging, whistling a tuneless song.
45 D OLD BARN: Evening, kids.
46 D NEELY: Evening, Mr. Hollingsworth.
47 D OLD BARN: Thought I'd find you here.
48 D NEELY: You knew?
49 D OLD BARN: Your father told me. Before he passed.
50 A ¶ Neely goes quiet.
51 A Lucy touches his sleeve.
52 D OLD BARN [CONT'D]: He said, "If the boy ever comes out here with somebody, tell him there's a reel in the projection booth. Third shelf. Marked 'Neely.'"
53 D NEELY: A reel.
54 D OLD BARN: He never said what's on it.
55 D NEELY (slowly): Is the projector--
56 D OLD BARN: Still works. I oiled her last week. Don't ask me why.
57 A ¶ Lucy slides off the hood.
58 A Takes Neely's hand.
59 D LUCY: Come on.
60 A ¶ They cross the lot, Old Barn lighting the way.
61 A The flashlight beam swings across the blank screen and, far above, the first flicker of an old image begins to shimmer.

### SCENE s00859 | INT. DEEP-SEA HABITAT "ABYSSAL FIVE," COMMAND CABIN - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN OKONJO ADEYEMI, BIRGIT SOLBERG, RAVI NAIR, SURFACE
1 A ¶ A cramped steel cylinder lined with gauges.
2 A A single porthole shows blackness lit by the drifting glow of jellyfish.
3 A A radio crackles on a bracket over the main console.
4 A ¶ CAPTAIN OKONJO ADEYEMI, fifties, sits at the console with his hand hovering over a red switch.
5 A BIRGIT SOLBERG, thirties, the geologist, floats against a bulkhead, her face lit green by a monitor.
6 A RAVI NAIR, twenties, the comms tech, kneels by an open panel with a soldering iron.
7 D OKONJO: How long until the pressure seal gives?
8 D BIRGIT: Nine minutes. Maybe ten.
9 D RAVI: I can reroute the main to the secondary.
10 D OKONJO: Then do it.
11 A ¶ He sparks the iron and hunches.
12 A She watches the gauge.
13 A The radio hisses.
14 D SURFACE [V.O.]: Abyssal Five, this is Surface Control. Do you read?
15 A ¶ Okonjo grabs the mic.
16 D OKONJO: Surface, Okonjo. We read you.
17 D SURFACE [V.O.]: Captain, we are seeing a pressure anomaly on your hull. Advise.
18 D OKONJO: We know. We're working it.
19 D SURFACE [V.O.]: Recommend immediate ascent.
20 D BIRGIT: Ascent? That's three hours of decompression.
21 D OKONJO: Surface, negative on ascent. We're working it.
22 A ¶ The hull groans.
23 A A rivet pops and rolls across the deck, ringing.
24 A Ravi's iron hovers over the circuit board.
25 D RAVI: Almost. Almost.
26 A ¶ He touches the iron down.
27 A A bright blue arc snaps.
28 A The lights flicker, hold, and steady.
29 A The groaning stops.
30 A The gauge needle sinks slowly out of the red.
31 D BIRGIT: It's holding.
32 D SURFACE [V.O.]: Abyssal Five, do you copy? We show pressure normalizing.
33 A ¶ Okonjo lets out a breath so long it fogs the glass of a dial.
34 A Ravi sits back on his heels and laughs, high and cracked.
35 A Birgit presses a palm to the bulkhead and shuts her eyes.
36 D OKONJO: Surface, Abyssal Five. We copy. Stand by.
37 A ¶ He releases the key.
38 A The radio hisses.
39 A Silence fills the cabin, filled only by the soft tick of cooling metal.

### SCENE s01955_1 | INT. GONDOLA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MIREILLE CASTANEDA, OZZIE BERGSTROM, NKECHI OBI, DARIUSZ PAWLAK, XIMENA TORRES, NEIL, ATWOOD
1 A ¶ Six people share a steel cabin built for eight.
2 A Windows fog with breath.
3 A A flask passes hand to hand.
4 A ¶ MIREILLE CASTANEDA, 60s, in a white wool coat, sits in the corner with her eyes closed, rubbing a rosary between her thumb and finger.
5 A OZZIE BERGSTROM, 30s, a lanky snowboarder, leans against the door, thumbing a dead phone.
6 A NKECHI OBI, 40s, a nurse, tends to DARIUSZ PAWLAK, 70s, whose hand trembles around a thermos.
7 A XIMENA TORRES, 20s, squeezes onto the bench beside them, scrolling through a map with no signal.
8 A And CORNELIUS "NEIL" ATWOOD, 50s, stands at the window and watches the dark.
9 A ¶ He turns from the window.
10 A She glances at him.
11 A They both look away.
12 A ¶ Ozzie slides to the floor.
13 A Ximena shifts to make room for his legs, and Nkechi tucks a blanket around Dariusz's knees.
14 A Mireille sighs.
15 D NEIL: How long has it been?
16 D NKECHI: Forty minutes.
17 D NEIL: It feels like four hours.
18 D OZZIE: It always does.
19 D XIMENA: Has anyone tried the emergency cord?
20 D DARIUSZ: It's been pulled twice.
21 D NKECHI: Both times, a recorded voice said help was coming.
22 D MIREILLE (eyes closed): Help is always coming.
23 A ¶ Silence.
24 A The cabin sways.
25 A Everyone shifts their weight at once, and Ozzie curses.
26 A They steady.
27 A Nkechi glances at Dariusz, who has gone pale.
28 D NKECHI [CONT'D]: Drink some water.
29 D DARIUSZ: I am fine.
30 D NKECHI: I know. Drink.
31 A ¶ He does.
32 A She smiles and pats his hand.
33 A Neil returns to the window.
34 A Ximena folds up her phone.
35 A Ozzie tilts his head back against the door.
36 A ¶ The cabin lurches once and then, with a long, heavy groan, begins to move.

### SCENE s02350 | INT. STRANDED CABLE CAR - ALPINE RIDGE - DAWN
Detected names (may be incomplete or contain aliases): HANNELORE BR, CKNER, ISAAC MBEKI-LOWE, PAULINE ACHTERBERG
1 A ¶ A glass-walled gondola hanging motionless over a gorge.
2 A Frost on the windows.
3 A A white sea of cloud below.
4 A The cable creaks.
5 A A single bench seat, a steel pole.
6 A ¶ Three passengers.
7 A They have been here since last night.
8 A ¶ HANNELORE BRÜCKNER, 60s, in a loden coat, sits upright with her handbag on her knees.
9 A Her lips are blue.
10 A She has not complained once.
11 A ¶ ISAAC MBEKI-LOWE, 30s, in a ski jacket, crouches against the door.
12 A His phone is dead.
13 A He taps it anyway.
14 A ¶ PAULINE ACHTERBERG, 20s, in a thin windbreaker, huddles in the corner with a thermos.
15 A She unscrews it, checks it, screws it shut.
16 A ¶ The gondola sways.
17 A Everyone stops breathing until it stills.
18 D ISAAC: Anyone have a lighter?
19 D HANNELORE: I don't smoke.
20 D ISAAC: It's not for smoking.
21 D PAULINE: I have matches.
22 D ISAAC: Why didn't you say?
23 D PAULINE: You didn't ask.
24 A ¶ She hands him a small box.
25 A He takes it, strikes one.
26 A It flares and dies.
27 A He strikes another and cups it.
28 A They all lean toward the tiny glow like a campfire.
29 A ¶ Hannelore opens her handbag.
30 A Takes out a folded newspaper.
31 A Smooths it on her knee.
32 A Holds it out.
33 D HANNELORE: It burns.
34 D ISAAC: It's your paper.
35 D HANNELORE: It's yesterday's.
36 A ¶ Isaac takes it.
37 A Tears off a corner.
38 A Lights it.
39 A A thin yellow flame climbs and wavers, and the gondola glows for a few seconds.
40 A Nobody speaks.
41 A ¶ Pauline reaches out and lets her palm hover over the flame.
42 A Isaac moves the paper closer to her without a word.
43 A When it burns down to his fingers, he lets it fall and stamps it out.
44 A ¶ The cable jolts.
45 A Everyone grabs a rail.
46 A A distant mechanical groan comes from the tower.
47 A Hannelore turns her head slowly toward the sound, as though recognizing an old acquaintance.
48 D HANNELORE [CONT'D]: That is the generator.
49 D ISAAC: How do you know?
50 D HANNELORE: My husband built the first one.
51 D PAULINE: Is that good?
52 D HANNELORE: It means they are trying.
53 A ¶ The gondola lurches forward a foot and stops.
54 A Pauline laughs once, a dry bark.
55 A Isaac slides down the door and sits.
56 A Hannelore folds her hands again, and for the first time her shoulders drop.

### SCENE s02153 | INT. GALLERIA MALL - SMALL CLAIMS COURT - DAY
Detected names (may be incomplete or contain aliases): JUDGE FELICITY ADEBAYO-STONE, DOMINIC TREMBLAY, PETRA LINDGREN, JUDGE
1 A ¶ A converted shoe store.
2 A Rows of benches.
3 A A judge's bench where the cash register used to be.
4 A The shoe-sizing stool is the witness stand.
5 A ¶ JUDGE FELICITY ADEBAYO-STONE, 60s, robe over a cardigan, glasses on a beaded chain.
6 A DOMINIC TREMBLAY, 40s, plaintiff, folder of receipts.
7 A PETRA LINDGREN, 30s, defendant, flour on her jacket.
8 D JUDGE (to the room): Order, order. For the record, this is case 41-C. Mr. Tremblay v. Ms. Lindgren. Mr. Tremblay.
9 D DOMINIC: Your Honor, Ms. Lindgren sold me a wedding cake. It collapsed in the middle of the reception.
10 D JUDGE: Ms. Lindgren?
11 D PETRA: Your Honor, the cake did not collapse. It was pushed.
12 D DOMINIC: By whom?
13 D PETRA: By your uncle.
14 D DOMINIC: My uncle was nowhere near the cake.
15 D PETRA: He was on top of the cake.
16 D JUDGE: Counsel, please.
17 D DOMINIC: I'm not counsel, Your Honor. I'm the groom.
18 D JUDGE: And I'm sorry for your loss, Mr. Tremblay.
19 D DOMINIC: Thank you, Your Honor.
20 D JUDGE: Ms. Lindgren, did the cake have internal supports?
21 D PETRA: Four dowels and a central column.
22 D JUDGE: And your professional opinion on the collapse?
23 D PETRA: Your Honor, nothing in the dowel schedule accounts for a man in a rented tuxedo using the top tier as a diving board.
24 D DOMINIC: That is slander.
25 D PETRA: It is video.
26 D JUDGE: There is video?
27 D PETRA: Eleven phones, Your Honor. I have a flash drive.
28 D JUDGE (muttering): Dear God, a flash drive.
29 D DOMINIC: Your Honor, my uncle has a bad knee.
30 D JUDGE: Then he should not have been diving.
31 D PETRA: I rest my case.
32 D DOMINIC: Your Honor, I request a refund of four hundred dollars.
33 D JUDGE: Mr. Tremblay, I request that you never again describe your uncle as "nowhere near" anything.
34 D DOMINIC: Understood.
35 D JUDGE: Judgment for the defendant. Ms. Lindgren, you may keep the cake.
36 D PETRA: There is no cake, Your Honor.
37 D JUDGE: Then I recommend you keep the flash drive.
38 A ¶ The gavel, a shoehorn, cracks on the register.
39 A Dominic gathers his receipts.
40 A Petra gathers her jacket.
41 A The Judge rubs her temples.

### SCENE s01214 | INT. CALL CENTER IN A FORMER CHURCH - DAY
Detected names (may be incomplete or contain aliases): BLESSING, DESMOND PEMBERTON-AGYEMAN, LAVINIA OKORO-HALVERSEN, WORLD'S OKAYEST AGENT
1 A ¶ Cubicles fill the nave.
2 A Gothic arches overhead, fluorescent panels bolted to the vaulted ceiling.
3 A Where the altar stood, a standing desk with a headset-wearing mannequin.
4 A Stained glass casts blue and amber light on rows of identical monitors.
5 A A hand-lettered banner above the apse reads: "YOUR CALL IS A BLESSING."
6 A ¶ At a long table once used for communion, DESMOND PEMBERTON-AGYEMAN (40s, gray suit, lanyard) stands holding a cardboard box of personal effects.
7 A Across from him sits LAVINIA OKORO-HALVERSEN (50s, floral blouse, reading glasses pushed up on her head), the floor manager, a clipboard in her lap.
8 D LAVINIA: Desmond. Sit.
9 D DESMOND: I'd rather stand, Lavinia.
10 D LAVINIA: It's not a sermon.
11 D DESMOND: It feels like one.
12 A ¶ She pats the pew-bench beside her.
13 A He doesn't move.
14 A A phone rings somewhere in the nave and is picked up on the second ring.
15 D LAVINIA: Fourteen years, Desmond.
16 D DESMOND: Fifteen in March.
17 D LAVINIA: Fifteen. Well, you've done admirable work.
18 D DESMOND: Is this the part where you tell me why I'm leaving?
19 D LAVINIA: It isn't a leaving. It's a reallocation.
20 D DESMOND: Of what?
21 D LAVINIA: Of you.
22 D DESMOND: To where?
23 D LAVINIA: Upstairs.
24 D DESMOND: We have an upstairs?
25 D LAVINIA: The bell tower.
26 A ¶ He looks up.
27 A Far overhead, a narrow staircase vanishes into the rafters.
28 A Dust turns in a shaft of colored light.
29 D DESMOND: What's in the bell tower?
30 D LAVINIA: The new quality-assurance team.
31 D DESMOND: How many on it?
32 D LAVINIA: One.
33 D DESMOND: Who?
34 D LAVINIA: You.
35 A ¶ Desmond sets the box on the table.
36 A Rummages in it, finds a mug that reads "WORLD'S OKAYEST AGENT," holds it for a long moment, and places it carefully on the desk.
37 D DESMOND (to the nave): Everyone. A moment, please.
38 A ¶ The call center falls silent.
39 A Forty heads in forty cubicles rise above forty partitions.
40 D DESMOND [CONT'D] (to the room): I'm being promoted to the bell tower.
41 A ¶ Silence.
42 A Somewhere, a headset clatters to the floor.
43 A Somewhere in the back, someone begins to clap, stops, and thinks better of it.
44 D LAVINIA (low, to Desmond): Please don't make a scene.
45 D DESMOND (low, to Lavinia): I'm only making an announcement.
46 D LAVINIA: That's how scenes begin.
47 A ¶ He lifts the box.
48 A Turns toward the staircase.
49 A Pauses at the foot of it, one hand on the rail.
50 D DESMOND (to himself): Fifteen years. Finally, a view.
51 A ¶ He climbs.
52 A The stairs creak.
53 A Lavinia lowers the clipboard onto the communion table and gazes up after him, her face unreadable in the colored light.
54 D LAVINIA (quietly, to no one): Do you know, I think he'll do very well up there.
55 A ¶ A bell rings, once, from high above.
56 A All forty headsets chime at the same instant: "Thank you for calling.
57 A Your call is a blessing."

### SCENE s02502 | EXT. GLACIER - CREVASSE LIP - DAY
Detected names (may be incomplete or contain aliases): LEILANI KEAWE, CORMAC BRANNIGAN
1 A ¶ Wind.
2 A Blue ice.
3 A Two climbers roped together on a slope that ends in air.
4 A ¶ LEILANI KEAWE, 30s, hauling on a rope, braced against an axe.
5 A CORMAC BRANNIGAN, 40s, dangling thirty feet below in a harness, face white.
6 D LEILANI (shouting down): Hold on!
7 D CORMAC (shouting up): I'm holding!
8 D LEILANI (to both of them): Come on, come on, come on.
9 A ¶ The rope creaks.
10 A Ice crumbles.
11 A She grunts.
12 A Digs in.
13 D LEILANI [CONT'D] (to herself): Don't look down. Don't look down.
14 D CORMAC: Leilani! My leg!
15 D LEILANI: What about it?
16 D CORMAC: It's gone numb!
17 D LEILANI (to the ice): Of course it is.
18 A ¶ She heaves.
19 A He rises a foot.
20 A The axe slips.
21 A She jams it deeper.
22 D LEILANI [CONT'D] (to Cormac): Kick the wall! Find a hold!
23 D CORMAC: I can't feel anything!
24 D LEILANI (to the sky): Please.
25 A ¶ Cormac swings.
26 A Boots scrape ice.
27 A A foothold.
28 A He steadies.
29 D CORMAC: I've got something!
30 D LEILANI: Then climb!

### SCENE s02508 | INT. FUNERAL HOME - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): BRONAGH QUILTY, EMEKA QUILTY, CORDELIA QUILTY
1 A ¶ Foil-covered casseroles.
2 A Wilting lilies.
3 A A kettle starts to whistle.
4 A ¶ BRONAGH QUILTY, 50s, black dress, cuts a cake.
5 A EMEKA QUILTY, 40s, her brother, loosens his tie.
6 A CORDELIA QUILTY, 30s, the youngest, sits on the counter with her shoes in her hand.
7 D BRONAGH: Somebody get that.
8 D EMEKA: I've got it.
9 D CORDELIA: He's got it.
10 A ¶ Emeka snatches the kettle off the burner.
11 A The whistle dies.
12 D BRONAGH: Mind the cake.
13 D CORDELIA: Nobody wants the cake.
14 D EMEKA: I want the cake.
15 D BRONAGH: Nobody wants your cake, Emeka.
16 D EMEKA: Mam made that cake.
17 D BRONAGH: Mam made that cake in nineteen ninety-four.
18 D CORDELIA: That's why it's hard.
19 D EMEKA: It's tradition.
20 D BRONAGH: It's a doorstop.
21 A ¶ Emeka sets the kettle down.
22 A Hard.
23 D EMEKA: She's been in the ground four hours.
24 D BRONAGH: I know.
25 D EMEKA: You're slicing her cake like it's a bake sale.
26 D BRONAGH: Somebody has to feed the neighbours.
27 D CORDELIA: You didn't have to put on the apron.
28 D BRONAGH: It's Mam's apron.
29 D CORDELIA: That's what I mean.
30 A ¶ Bronagh puts down the knife.
31 A Silence.
32 A A fridge hums.
33 A Emeka pulls out a chair.
34 A Sits.
35 A Puts his head in his hands.
36 D EMEKA (muffled): I never said goodbye.
37 D CORDELIA: You said it on Tuesday.
38 D EMEKA: She was asleep.
39 D BRONAGH: She heard you.
40 D EMEKA: You don't know that.
41 D BRONAGH: I know she squeezed my hand when I said your name.
42 A ¶ He looks up.
43 A His eyes are red.
44 A Cordelia slides off the counter.
45 A Bronagh picks up the knife again, and cuts the cake, slowly, into three pieces.
46 A ¶ She puts one in front of each of them.

### SCENE s01841 | INT. FISH MARKET OFFICE - EARLY MORNING
Detected names (may be incomplete or contain aliases): MIRIAM KOSKI, DETECTIVE ANSEL WOO, DETECTIVE RUTH DELACROIX, ENZO FERRARA
1 A ¶ A glass-walled office above the ice floor.
2 A Fluorescent hum.
3 A A wall calendar of tuna.
4 A ¶ MIRIAM KOSKI, 50s, the market's bookkeeper, sits at a steel desk.
5 A Her ledger is open.
6 A Her cardigan smells faintly of brine.
7 A ¶ Across from her sits DETECTIVE ANSEL WOO, 40s, notebook out.
8 A He smiles pleasantly.
9 A Behind him, leaning on the filing cabinet, is his partner DETECTIVE RUTH DELACROIX, 30s, silent, chewing gum.
10 A ¶ Near the door stands the owner, ENZO FERRARA, 60s, in rubber boots, wiping his hands on a rag.
11 A He has been wiping them for some time.
12 D WOO: Quiet morning.
13 D MIRIAM: They start at four.
14 D WOO: And the books balance.
15 D MIRIAM: They always balance.
16 A ¶ Ruth pushes off the cabinet and drifts to the window.
17 A Enzo steps aside to let her pass, and as she goes by she picks a pen off the desk, rolls it in her fingers, sets it back.
18 A Miriam watches the pen.
19 A Woo flips a page of the notebook.
20 A Enzo tosses the rag onto a chair, crosses the room to the door, and locks it, quietly, with a click that makes Miriam's shoulders lift.
21 A Ruth turns from the window.
22 D RUTH: Miriam. Where's the second ledger?
23 D MIRIAM: There isn't a second.
24 D RUTH: She says there isn't.
25 D WOO (to Enzo): He says there isn't, too.
26 D ENZO (tight smile): There isn't.
27 A ¶ Miriam lowers her eyes to the ledger.
28 A Her finger finds a column, and a drop of sweat falls onto the page.

### SCENE s00366 | INT. MATTRESS SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): DUANE PETTIGREW, LUCINDA FROST, THEO FROST
1 A ¶ A cavernous warehouse of beds.
2 A Banners scream "BLOWOUT."
3 A A fake sunrise glows over a king-size.
4 A ¶ DUANE PETTIGREW, forties, a salesman in a shiny tie, hovers over a couple.
5 A LUCINDA FROST, thirties, bounces gently on a firm model.
6 A Her husband THEO FROST, thirties, lies flat on a plush one with his shoes on.
7 D DUANE: This one has four layers of memory foam.
8 D LUCINDA: I'll take your word.
9 A ¶ Duane clasps his hands.
10 A Theo rolls over and sinks into the foam with a long sigh while Lucinda stands and moves to a third bed, which Duane hurriedly pats, and while Theo's shoes drag a smear of mud across the quilted top, Duane gasps and lunges with a wipe, and Lucinda kneels to inspect the springs.
11 D THEO: I can't get up.
12 D LUCINDA: It's only a mattress.
13 D THEO: It has me.
14 D DUANE: That's the contouring technology!
15 A ¶ Duane takes Theo's arm and heaves.
16 A Theo comes up an inch and falls back.
17 A Lucinda grabs his other arm.
18 A They pull in unison and the three tumble off the edge of the bed in a heap, the sign "BLOWOUT" swaying overhead.

### SCENE s00402 | INT. DOUBLEWIDE TRAILER - LIVING ROOM - DAY
Detected names (may be incomplete or contain aliases): FLORENCE, EZEKIEL, DARIUS, LOLA, IGNATIUS, WANJIRU
1 A ¶ A cramped, wood-paneled room crowded with an old man's life: a recliner, a gun rack with no guns, stacks of National Geographic, a fish tank gone green.
2 A Boxes labeled in marker line the walls.
3 A ¶ FLORENCE, 60s, eldest, in a church dress, sits on the sofa with a legal pad.
4 A EZEKIEL, 50s, her brother, stands at the window with his arms crossed.
5 A DARIUS, 30s, a nephew in a work shirt, sits on a box.
6 A LOLA, 20s, a niece in cutoffs, picks at the fish tank lid.
7 A IGNATIUS, 40s, the lawyer in a cheap suit, stands by the door with a folder.
8 A WANJIRU, 70s, Uncle Teodoro's long-time neighbor, sits very still in the recliner.
9 D FLORENCE: Mr. Ignatius, read the will.
10 D IGNATIUS: It's brief.
11 D EZEKIEL: It always is.
12 D IGNATIUS: "To my sister Florence, the clock. To my brother Ezekiel, the truck. To my nephew Darius, the tools. To my niece Lola, the fish."
13 D LOLA: The fish.
14 D DARIUS: He left her the fish.
15 D LOLA: The fish are dead.
16 D FLORENCE: That's what you inherit, dear.
17 A ¶ Ezekiel turns from the window.
18 A His jaw is tight.
19 D EZEKIEL: And the land?
20 D IGNATIUS: There is a final line.
21 D FLORENCE: Read it.
22 D IGNATIUS: "The land and the trailer I leave to Wanjiru, who stayed."
23 A ¶ For a moment, no one moves.
24 A Then Ezekiel strides across the room, grabs a stack of magazines, and hurls them against the wall.
25 A They burst into a fan of glossy pages.
26 A Darius leaps up, boxes toppling, and Lola scrambles back onto the sofa.
27 A Florence stands, and Wanjiru does not.
28 D EZEKIEL: Stayed? He stayed! We all stayed! We just stayed somewhere else!
29 D FLORENCE: Ezekiel, sit.
30 D EZEKIEL: No.
31 A ¶ He kicks the nearest box.
32 A It splits, and paperbacks tumble out.
33 A Darius lunges for his arm, and the two stumble against the fish tank, which rocks, slops green water, and settles.
34 A Ignatius backs against the door.
35 A Wanjiru finally speaks.
36 D WANJIRU (calm): He knew you would do this.
37 A ¶ Everyone stops.
38 A They look at the old woman in the recliner.
39 A She folds her hands.
40 D WANJIRU [CONT'D]: That's why he told me where the key is.
41 A ¶ She opens her palm.
42 A In it, a small brass key, tarnished and warm.

### SCENE s01183 | INT. NEON BOWLING ALLEY - KARAOKE NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI FINCH, SPUD, CARTWRIGHT, OSKAR VLASIC, BETH
1 A ¶ Strobe lights, disco pins, a bad ballad echoing through the lanes.
2 A ¶ LT. NAOMI FINCH (40s, leather jacket) leans against the shoe counter, eyes on a booth in the back.
3 A DWAYNE "SPUD" CARTWRIGHT (30s, too-bright shirt) is at the karaoke mic, mid-song, glancing at a briefcase beside the booth.
4 A The briefcase sits beside OSKAR VLASIC (50s, fur collar), who nurses a soda.
5 A Behind the counter, BETH (20s, name tag, skeptical) polishes shoes.
6 D SPUD (singing, off-key): Baby, I'm just a fool for the way you walk away.
7 A ¶ Finch pushes off the counter and crosses the lane.
8 A Oskar sees her.
9 A His hand slides to the briefcase.
10 A Spud drops the mic mid-note, Finch draws, Oskar yanks the briefcase free, and in a single tangle of limbs Beth ducks, Spud lunges, Oskar sprints for the lane gutter, and Finch skids across the polished boards after him as the music blares on.
11 D FINCH: Police! Stop!
12 D OSKAR: Not tonight!
13 A ¶ He hurls the briefcase.
14 A It bursts on the pin deck.
15 A Out spill rental shoe coupons.
16 A Hundreds of them.
17 A Oskar freezes.
18 A Finch freezes.
19 D FINCH: That's the briefcase?
20 D OSKAR: It's mine.
21 D SPUD (into the mic, delighted): Shoes!
22 D BETH: Both of you owe me for the lane.

### SCENE s00169 | INT. CAR FERRY - UPPER DECK DINING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MATRIARCH ZAINAB ABDULLAHI-PREWITT, CYRIL, AUGUSTINE, PERPETUA, ROSAMUND, THADDEUS
1 A ¶ A long cafeteria table bolted to the floor.
2 A Fluorescent lights.
3 A A view of black water.
4 A The ferry throbs beneath them.
5 A ¶ Six members of the Abdullahi-Prewitt family sit with trays of congealed shepherd's pie.
6 A A funeral reception, after the funeral.
7 A ¶ MATRIARCH ZAINAB ABDULLAHI-PREWITT, 70s, at the head.
8 A Her sons, CYRIL, 50s, and AUGUSTINE, 40s, glare across the table.
9 A Cyril's wife, PERPETUA, 50s, grips her napkin.
10 A Their daughter ROSAMUND, 20s, scrolls on her phone.
11 A And the youngest, THADDEUS, 16, keeps his eyes on the water.
12 D ZAINAB: Eat. He would have wanted us to eat.
13 D CYRIL: He wanted the boat.
14 D AUGUSTINE: He wanted the boat sold.
15 D CYRIL: He wanted it kept.
16 D PERPETUA: Cyril, please.
17 D AUGUSTINE: You never listened to him.
18 D CYRIL: I listened. I just disagreed.
19 D ROSAMUND: Can we not do this on a ferry?
20 D THADDEUS: We're not leaving a ferry.
21 D ZAINAB: Quiet, all of you.
22 A ¶ They are not quiet.
23 D AUGUSTINE: Dad's will says I sell it.
24 D CYRIL: Dad's will says I decide.
25 D PERPETUA: Both of you, stop.
26 D AUGUSTINE: You always take his side.
27 D PERPETUA: I take no side. I take the family's.
28 D ROSAMUND: There is no family.
29 D THADDEUS: I'm still here.
30 A ¶ Silence.
31 A The ferry lurches over a wave.
32 A Trays slide.
33 A Zainab rises, steadies herself on the table.
34 D ZAINAB: Your father's will is in my purse. He wrote it on a napkin.
35 D CYRIL: A napkin?
36 D ZAINAB: A napkin.
37 A ¶ She opens her purse.
38 A Withdraws a folded, grease-spotted paper napkin.
39 A She sets it down.
40 A Flattens it.
41 A Everyone leans in.
42 D ZAINAB [CONT'D]: "Give the boat to whoever sails it."
43 A ¶ Silence.
44 D ZAINAB [CONT'D]: That's all.
45 A ¶ Thaddeus rises, slowly.
46 A He crosses to the window.
47 A He looks out into the dark at the glow of the wheelhouse.
48 D THADDEUS (quietly): I know how.
49 A ¶ The others look at him.
50 A For the first time all evening, nobody speaks.

### SCENE s01581 | INT. SYNERGY PARTNERS - OPEN OFFICE - FRIDAY, 4:55 PM
Detected names (may be incomplete or contain aliases): BRANDEN CHASE, PRIYANKA MENON, DEZ, WILLIAMS, CALLIE ZIMMERMAN, HOLLOWAY, VP
1 A ¶ Beanbags.
2 A A kombucha tap.
3 A A neon sign reads "GOOD VIBES ONLY."
4 A Under it, five exhausted people.
5 A ¶ BRANDEN CHASE (30s, quarter-zip, gelled hair) stands at a whiteboard that says "SYNERGY 2.0 - ALIGN.
6 A PIVOT.
7 A ELEVATE."
8 A ¶ PRIYANKA MENON (30s, headphones, eye bags) slumps at her desk.
9 A DESMOND "DEZ" WILLIAMS (40s, cardigan, thermos) chews a pen.
10 A CALLIE ZIMMERMAN (20s, intern, notebook) sits upright, vibrating.
11 A And MR. HOLLOWAY (60s, regional VP, face on a video call projected on the wall) frowns from a rectangle.
12 D BRANDEN: Okay team, quick pulse check before the weekend.
13 D PRIYANKA (muttering): There is no pulse.
14 D HOLLOWAY [V.O.] (from the screen): I can't hear you, Priyanka.
15 D PRIYANKA: I said I'm thrilled.
16 D BRANDEN: Dez, the Q3 deck?
17 D DEZ: Done.
18 D BRANDEN: Done done, or "done" done?
19 D DEZ: Done in the sense that I'll never open it again.
20 D CALLIE: I made a mood board!
21 D BRANDEN: Callie, love the energy.
22 D PRIYANKA (to Callie, low): Save it. They'll sell it back to you.
23 D HOLLOWAY [V.O.]: Someone mentioned the layoffs?
24 D BRANDEN: No one mentioned layoffs, sir.
25 D HOLLOWAY [V.O.]: Because I'm seeing a rumor.
26 D DEZ (to himself): I'm seeing a door.
27 D BRANDEN: Team, let's take a breath.
28 D PRIYANKA: Everyone breathing? Great. Branden, are we getting cut?
29 D BRANDEN: I can't speak to that.
30 D PRIYANKA: You can speak to everything else.
31 D DEZ: He's mute on the one subject that matters.
32 D CALLIE: Is this a good time to share my mood board?
33 D HOLLOWAY [V.O.]: Callie, was it? We'll circle back.
34 D BRANDEN: Okay. Okay. Let's all just, you know, honor the process.
35 D PRIYANKA: The process has a sign-off sheet?
36 D DEZ: Process is a verb, Priyanka. We are the object.
37 D HOLLOWAY [V.O.]: I'll let you all go early. Happy weekend.
38 A ¶ The screen goes black.
39 A Nobody moves.
40 D BRANDEN (brightly): Great sync, everyone.
41 A ¶ He erases "ELEVATE" with his sleeve.
42 A Callie slowly closes her notebook.
43 D DEZ (to himself): I'm going to miss the kombucha.

### SCENE s00238 | EXT. COMMUNITY POOL, DIVING PLATFORM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): PETE, ADEYEMI-LANDRY, BEANPOLE, OKONJO, SUNITA MARCHETTI-DAS, CASPIAN FROST-NKEMELU, ROSALIND, GWENDOLYN TARASOVA
1 A ¶ Chlorine light, gold on blue.
2 A The ten-meter platform stands over the water like a lighthouse in swim trunks.
3 A ¶ Six teenagers cluster at the top, bare feet on warm concrete.
4 A ¶ PERPETUA "PETE" ADEYEMI-LANDRY, 16, tall and laconic, stretches her calves against the rail.
5 A She does not look down.
6 A ¶ BRIAN "BEANPOLE" OKONJO, 15, adjusts his goggles for the fifth time, lips moving as he rehearses a joke he will never tell.
7 A ¶ SUNITA MARCHETTI-DAS, 16, ponytail wet, picks at a nail.
8 A ¶ CASPIAN FROST-NKEMELU, 17, shirtless, tries very hard to look relaxed.
9 A ¶ The twins ROSALIND and GWENDOLYN TARASOVA, 15, share a towel and a single earbud each.
10 A ¶ Wind moves the surface of the pool like a hand smoothing a bedsheet.
11 D PETE: Who's first?
12 D BEANPOLE: Not me.
13 D SUNITA: Not me.
14 D CASPIAN: I'll go.
15 D PETE: You said that last week.
16 D CASPIAN: And last week I almost did.
17 A ¶ The twins exchange a look.
18 A Take the earbuds out in unison.
19 D ROSALIND: We'll go together.
20 D GWENDOLYN (overlapping): We'll go together.
21 A ¶ ^
22 A ¶ They step to the edge, hands linked.
23 A Neither speaks.
24 A Below, a lifeguard whistles a lazy tune.
25 D SUNITA: Wait. Wait. Don't.
26 D ROSALIND: Why?
27 D GWENDOLYN: Why?
28 D SUNITA: Because after this, it's September.
29 A ¶ Silence.
30 A Even the wind seems to pause.
31 A ¶ She says it quietly.
32 A They hear it anyway.
33 A ¶ Pete finally looks down.
34 A Her face softens.
35 A She sits on the edge of the platform, legs swinging into the sky.
36 D PETE: Then let's make it a good one.
37 A ¶ Caspian sits beside her.
38 A Beanpole joins them, goggles fogged.
39 A Sunita comes last, close enough that their shoulders touch.
40 A ¶ The twins look at each other once more.
41 A Then, together, they jump.
42 A ¶ The splash is distant and silver.
43 A The others lean over to watch the ripples spread outward, ring after ring, until they reach the walls.
44 D BEANPOLE (softly): Okay. Now me.

### SCENE s02452 | INT. SUBMARINE MUSEUM - TORPEDO ROOM - WRESTLING MAT - NIGHT
Detected names (may be incomplete or contain aliases): HARBOR DISTRICT WRESTLING, COACH BASIL MWANGI, DMITRI VOLKOV, HECTOR LE, N-ABARA, EDDIE PRAGER
1 A ¶ The torpedo room of a decommissioned Cold War submarine, converted into a practice space.
2 A Rusted racks line the walls.
3 A A blue wrestling mat covers the deck plates.
4 A Pipes sweat overhead; a green emergency bulb throws everything into the color of pond water.
5 A ¶ A faded banner: "HARBOR DISTRICT WRESTLING - STATE TRIALS."
6 A ¶ COACH BASIL MWANGI (50s, squat, bald, whistle on a bootlace) paces the edge of the mat.
7 A He holds a stopwatch and a coffee thermos, and uses neither.
8 A ¶ DMITRI VOLKOV (17, heavy shoulders, scarred eyebrow) crouches on the mat, rolling his neck.
9 A HECTOR LEÓN-ABARA (17, wiry, taped fingers) shakes out his arms in the opposite corner.
10 A EDDIE PRAGER (30s, local ref, striped shirt, reading glasses on a cord) squats between them to inspect their singlets.
11 D BASIL: Last round of the night. Winner goes to State.
12 D DMITRI: Coach, we've wrestled forty times.
13 D BASIL: This is the forty-first.
14 D HECTOR: He always gets the underhook.
15 D BASIL: Then you break it.
16 D DMITRI: He won't.
17 D HECTOR: I will.
18 D BASIL: Boys.
19 D EDDIE: Gentlemen. Hands.
20 A ¶ They touch hands.
21 A Both are damp.
22 D EDDIE [CONT'D]: Wrestle.
23 A ¶ They lock up.
24 A Dmitri drives.
25 A Hector sprawls.
26 A The mat squeaks.
27 D BASIL: Hips, Hector!
28 D DMITRI (grunting): Get off me.
29 D HECTOR: Get off me!
30 D EDDIE: Both of you, break!
31 A ¶ They break.
32 A Circle.
33 A Dmitri shoots a double.
34 A Hector hops back, drops his weight, and rides Dmitri to the mat.
35 D BASIL: That's it!
36 D EDDIE: Two points, León-Abara.
37 D DMITRI: That was a stall!
38 D EDDIE: It was not.
39 D BASIL: It was beautiful.
40 D DMITRI: Coach, whose side are you on?
41 D BASIL: Both. Neither. Wrestling.
42 A ¶ Dmitri spits on the mat.
43 A Hector smirks.
44 A Eddie raises a warning finger.
45 D EDDIE: One more of that, Volkov, and it's a penalty.
46 D DMITRI: He's baiting me.
47 D HECTOR: He's tired.
48 D BASIL: They're both tired. Wrestle!
49 A ¶ They lock up again.
50 A The green bulb flickers.
51 A Dmitri snaps a headlock.
52 A Hector twists.
53 A For a moment they are one tangled shape.
54 D EDDIE: Pin, pin, hold it--
55 D BASIL: Get your shoulders up, Hector!
56 D HECTOR (through his teeth): I'm trying!
57 D DMITRI (through his teeth): Stay down!
58 A ¶ The pipes overhead groan.
59 A A drop of condensation splashes onto Eddie's glasses.
60 A He wipes it, never taking his eyes from the mat.
61 D EDDIE: One. Two.
62 A ¶ Hector bridges.
63 A His neck veins strain.
64 A Dmitri leans harder.
65 D BASIL: Coach says up, Hector, up!
66 D HECTOR: Coach says what?
67 D BASIL: UP!
68 A ¶ Hector explodes.
69 A He throws a hip, rolls, and lands on top of Dmitri with a crash that shakes the deck plates.
70 A Dmitri's shoulders hit the mat.
71 D EDDIE: One. Two. Three!
72 A ¶ He slaps the mat.
73 A Hector rolls away, chest heaving.
74 A Dmitri lies face up, staring at the pipes.
75 D EDDIE [CONT'D]: Winner, León-Abara.
76 A ¶ Silence.
77 A Basil sets down the thermos.
78 A Walks onto the mat and kneels beside Dmitri.
79 D BASIL: You okay, Volkov?
80 D DMITRI (flat): Fine.
81 D BASIL: You wrestled well.
82 D DMITRI: I lost.
83 D BASIL: Both of those things are true.
84 A ¶ Dmitri sits up.
85 A Hector offers a hand.
86 A Dmitri looks at it for a long beat.
87 A Takes it.
88 D DMITRI (quietly): Take it to State.
89 D HECTOR: I will.
90 D DMITRI: And break his underhook.
91 A ¶ Hector grins.
92 A Eddie checks his stopwatch and folds his glasses.
93 D EDDIE: I'm going home.
94 D BASIL: Coffee, Eddie?
95 D EDDIE: God, yes.
96 A ¶ The green bulb buzzes.
97 A Somewhere deep in the sub, a drip keeps time.

### SCENE s01611 | INT. APPELLATE COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE FLORENCE ADEYEMI-HART, ATTORNEY GABRIEL SOTOMAYOR-BELL, ATTORNEY NADINE KRAUSE
1 A ¶ Dark wood, flags, a ceiling of coffered plaster.
2 A The gallery is nearly empty.
3 A The gavel sits unused.
4 A ¶ JUDGE FLORENCE ADEYEMI-HART (60s, black robe, silver locs) presides.
5 A Before her, two lawyers at separate lecterns: ATTORNEY GABRIEL SOTOMAYOR-BELL (40s, navy suit) and ATTORNEY NADINE KRAUSE (50s, gray pinstripe).
6 D FLORENCE: Counselors, we've heard enough on the statute.
7 D GABRIEL: Your Honor, one final point.
8 D NADINE (overlapping): Your Honor, I object to a final point.
9 D FLORENCE: Let him finish.
10 D GABRIEL: The plaintiff's right of way was established in nineteen-fifty.
11 D NADINE: Established by whom?
12 D GABRIEL: ^By the county.
13 D NADINE: ^By a county that no longer exists.
14 A ¶ Florence raises a hand.
15 A Both stop.
16 A She adjusts her glasses, glances at a document, and sets it aside.
17 D FLORENCE: Mr. Sotomayor-Bell, sit down.
18 A ¶ He sits.
19 A Nadine remains standing, stiff.
20 D FLORENCE [CONT'D]: Ms. Krause, you too.
21 A ¶ Nadine lowers herself slowly.
22 A The courtroom is silent.
23 D FLORENCE [CONT'D]: The court will rule from the bench.
24 A ¶ She pauses.
25 A Gabriel clasps his hands.
26 A Nadine doesn't blink.
27 D FLORENCE [CONT'D]: Affirmed.
28 A ¶ A single exhale from the gallery.
29 A Gabriel closes his folder.
30 A Nadine gathers her papers with great care, and neither looks at the other.

### SCENE s00753 | INT. VILLAGE CHURCH - WEDDING - DAY
Detected names (may be incomplete or contain aliases): CONGRATS ROSALIND, GROOM FERDINAND, BRIDE ROSALIND, FATHER MALACHY, MOTHER IRENE, BEST MAN, GIDEON, DJ
1 A ¶ Pews packed.
2 A Organ droning.
3 A A banner reading CONGRATS ROSALIND & FERDINAND, slightly crooked.
4 A ¶ At the altar: BRIDE ROSALIND, thirties, in a dress with a train like a snow drift.
5 A GROOM FERDINAND, thirties, sweating through a rented tux.
6 A FATHER MALACHY, sixties, bearded officiant, clutching a prayer book.
7 A In the front pew, MOTHER IRENE, sixties, in a hat the size of a satellite dish.
8 A Beside Ferdinand: BEST MAN, twenties, hungover, swaying.
9 D FATHER MALACHY: If anyone objects to this union, speak now.
10 A ¶ A pause.
11 A The BEST MAN raises a hand.
12 D BEST MAN: Hang on.
13 D ROSALIND: Oh, for God's sake.
14 D BEST MAN: I just wanted to say I love you both.
15 D FERDINAND: Thank you, Gideon.
16 A ¶ The Best Man, now GIDEON, beams.
17 A ¶ Over the church speakers, a booming voice.
18 D DJ [V.O.] (over PA): Ladies and gentlemen, give it up for the happy couple!
19 D FATHER MALACHY: We're not there yet!
20 D MOTHER IRENE (standing): Who hired that man?
21 D ROSALIND: Mother!
22 D DJ [V.O.] (over PA): Drop the bass!
23 A ¶ A thump rattles the pews.
24 A Everyone ducks.
25 D GIDEON (slurring): Best. Day. Ever.
26 D FERDINAND: Rosalind, I do. I do. Can we just finish?
27 D ROSALIND: Fine. I do!
28 D FATHER MALACHY: You may now--
29 A ¶ The organ explodes into a dance remix.
30 A Everyone throws up their hands.

### SCENE s02476 | INT. S.S. MARGUERITE - PURSER'S OFFICE - NIGHT - 1912
Detected names (may be incomplete or contain aliases): PURSER HOLLOWAY, STOWAWAY, DECKHAND, CAPTAIN VANE, CLEMENTINE, PIP
1 A ¶ Brass lamp.
2 A Rolling floor.
3 A A stack of passenger manifests slides with every swell.
4 A ¶ PURSER HOLLOWAY, 50s, neat as a pin, drags a STOWAWAY by the collar into the office.
5 A The Stowaway is small, soot-faced, in a boy's cap and oversized coat.
6 A Pip, a young DECKHAND, hovers by the door.
7 D HOLLOWAY: Another one, Captain, in the coal bunker!
8 A ¶ CAPTAIN VANE, 60s, white beard, brass buttons, looks up from his chart without hurry.
9 D VANE: A boy?
10 D STOWAWAY (a woman's voice, defiant): I am no boy.
11 A ¶ The cap falls.
12 A Dark curls spill out.
13 A Holloway lets go as if burned.
14 D VANE: Name?
15 D STOWAWAY: Clementine Ashworth. And you will take me to New York.
16 D HOLLOWAY: She'll be put off at Queenstown!
17 D VANE: Mr. Holloway, we left Queenstown yesterday.
18 D CLEMENTINE: There! You see?
19 A ¶ Pip snickers.
20 A Holloway glares at him.
21 D VANE: Miss Ashworth, what is in New York?
22 D CLEMENTINE (softer): My father. He thinks I'm dead.
23 A ¶ The lamp swings.
24 A Everyone watches the shadows swing with it.
25 D VANE: Pip. Fetch Miss Ashworth some tea and a blanket.
26 D PIP: Aye, sir!
27 A ¶ He's gone.
28 A Holloway sputters.
29 D HOLLOWAY: Captain, regulations!
30 D VANE: Regulations don't swim, Mr. Holloway. And neither, I suspect, do you.
31 A ¶ He turns the chart.
32 A Holloway slumps into his chair.
33 A Clementine laughs, and the ship rolls on.

### SCENE s01829 | INT. CIRCUIT COURT HALLWAY - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSALIND HARTE, ELIAS HARTE, ATTORNEY NOEL BASHIR
1 A ¶ A long terrazzo corridor lined with scarred oak benches, each with a brass nameplate for a donor nobody remembers.
2 A Fluorescent tubes hum overhead.
3 A A radiator under a tall window knocks twice and goes silent.
4 A Through the glass, a parking structure and a gray sky.
5 A ¶ On the bench nearest the courtroom doors, ROSALIND HARTE, 58, sits upright in a navy suit that fit better ten years ago.
6 A Her hands hold a plastic folder closed on her lap.
7 A Her reading glasses hang from a chain, untouched.
8 A ¶ Next to her but not touching, her son ELIAS HARTE, 31, hunches forward, elbows on his knees, a county-issue lanyard around his neck, his hair cut short by someone else.
9 A He picks at a thread on his cuff.
10 A ¶ At the water fountain, leaning with arms crossed, is ATTORNEY NOEL BASHIR, 40s, in a charcoal suit and a tie loosened half an inch.
11 A He has been standing there for some time.
12 D ROSALIND: You haven't eaten.
13 D ELIAS: I'm fine.
14 D ROSALIND: There's a machine at the end. I have quarters.
15 D ELIAS: I'm not hungry.
16 D ROSALIND: You said that in the car.
17 D ELIAS: Because I wasn't.
18 D NOEL (crossing to them): We have twenty minutes. The judge wants the statement before the lunch recess.
19 D ROSALIND: Does it have to be him who reads it?
20 D NOEL: It's his statement, Mrs. Harte.
21 D ROSALIND: I wrote half of it.
22 D ELIAS: You wrote all of it.
23 D ROSALIND: I wrote what you told me.
24 D ELIAS: You wrote what I should have told you.
25 D NOEL: Either way, it needs to be said out loud. The judge wants to hear a voice, not a page.
26 D ELIAS: And if my voice doesn't work?
27 D NOEL: Then you wait and try again.
28 D ELIAS: She doesn't give people a second try.
29 D NOEL: She gives them more than you think.
30 D ROSALIND: Noel, do you have children?
31 D NOEL: Two.
32 D ROSALIND: Then you know it's not about what the judge gives.
33 D NOEL (gently): I know.
34 A ¶ Elias stands abruptly, walks to the window, and lays his palm flat against the glass.
35 A The radiator knocks again.
36 A Rosalind opens the folder, takes out three typed pages, and smooths them against her knee.
37 D ROSALIND: I'll read the first paragraph with you.
38 D ELIAS: Mom.
39 D ROSALIND: Not for the judge. For the hallway.
40 D ELIAS: Nobody's in the hallway.
41 D ROSALIND: Then it won't matter if I stumble.
42 A ¶ She begins, almost inaudibly, to read.
43 A Elias turns from the window.
44 A Noel steps back toward the fountain, giving them the bench.
