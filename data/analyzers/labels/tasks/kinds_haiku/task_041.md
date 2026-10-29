You classify screenplay action lines that have NO character as their agent, for a writing tool.
Every line in the script must belong somewhere, so each marked line (`*`) gets exactly one kind:

- `setting`  : the place, scenery, light, weather, time of day, what a space looks/sounds like as a whole
               ("A cramped kitchen.", "Rain hammers the windows.", "Dawn over the harbor.", "Silence.")
- `event`    : something happens or an object/sound/vehicle/machine acts, with no character doing it
               ("The phone rings.", "A car backfires outside.", "Cash.", "The door swings shut.", "A light blinks.")
- `extra`    : done by people or creatures who are NOT characters of the scene (unnamed passers-by, a crowd that
               is not in the names list, an animal, a monster) ("A waiter passes.", "Two women lean on its bumper.")
- `camera`   : shot, edit or on-screen-text directions ("CLOSE ON the letter.", "We see...", "INSERT - phone",
               "SUPER: 1999", "Back to scene.", "INTERCUT", "Time cut.")
- `abstract` : narration, reflection, commentary, theme, time passing, things that are not visible action
               ("Some wounds never close.", "Years pass.", "This is the last time they will speak.")
- `character`: actually done by / describing a character in the names list (the marking was wrong). Then also give
               the name(s).

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block. Only `*` lines need a label;
the rest is context.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0141.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01368 | INT. SURGICAL OBSERVATION GALLERY - DAY
Detected names (may be incomplete or contain aliases): ELEANOR WHITLOCK, VIKRAM RAO, NURSE SINEAD DUFFY, RESIDENT TAKUMI IKEDA, INTERN PALOMA RIVERA, LESZEK BUKOWSKI
* 1 A ¶ A tiered room above an operating theater, glass wall onto green tiles and white light.
* 2 A Folding chairs on a stepped floor.
* 3 A A pot of lukewarm coffee, untouched.
* 4 A Beyond the glass, a quiet operation unfolds without a sound.
5 A ¶ DR. ELEANOR WHITLOCK, 60s, chief of surgery, silver bob and half-moon glasses, sits front and center with a clipboard on her knee.
6 A DR. VIKRAM RAO, 40s, lean, in a charcoal sweater, stands with his arms folded at the glass.
7 A NURSE SINEAD DUFFY, 30s, freckled, ties off a supply bag.
8 A RESIDENT TAKUMI IKEDA, 20s, hollow-eyed, nods over a clipboard.
9 A INTERN PALOMA RIVERA, 20s, bright-eyed, takes notes with great seriousness.
10 A And Mr. LESZEK BUKOWSKI, 70s, an elderly volunteer observer in a corduroy jacket and a hospital visitor's badge, sits in the back row with a paper bag of lemon drops.
11 A ¶ Below, the surgeons work.
* 12 A Nothing seems to happen.
* 13 A A hand moves.
* 14 A A suture is pulled.
15 D WHITLOCK: Dr. Rao, how long has the cardiac been under?
16 D RAO: Three hours and ten minutes.
17 D WHITLOCK: Is that long?
18 D RAO: For this one, it's average.
19 D PALOMA (writing): Three hours, ten minutes, average.
20 D TAKUMI (muttering): It feels longer.
21 D SINEAD: It always does from up here.
22 A ¶ Bukowski unwraps a lemon drop and pops it in his mouth.
* 23 A The wrapper crackles.
24 A Everyone turns.
25 A He holds up the bag.
26 D BUKOWSKI: Anyone?
27 D WHITLOCK: Mr. Bukowski, this is a sterile gallery.
28 D BUKOWSKI: It's a lemon drop.
29 D RAO: Let him have it, Eleanor.
30 D WHITLOCK: I will, Vikram. Provided he does not choke.
31 D BUKOWSKI: I'm seventy-three. I've outlived four cardiologists.
32 D SINEAD: That's not the comfort you think it is, Mr. Bukowski.
33 A ¶ Paloma giggles, claps a hand over her mouth.
34 A Takumi's head sinks lower.
* 35 A Below, the surgeon gestures; a monitor beeps; a gloved hand lifts a clamp.
36 D PALOMA: Is that the valve?
37 D RAO: That's the valve.
38 D PALOMA: It's beautiful.
39 D RAO: It's a pump with a door, Paloma.
40 D PALOMA: A beautiful pump with a door.
41 D WHITLOCK: Intern, you're learning.
42 A ¶ Bukowski offers the bag to Takumi.
43 A Takumi, half asleep, takes a lemon drop without looking.
44 A Sinead catches Paloma's eye and rolls her own.
45 A Rao paces to the end of the glass, turns, comes back.
46 A Whitlock marks something on her sheet.
47 D TAKUMI (waking): Did I miss something?
48 D SINEAD: Only the valve.
49 D TAKUMI: Damn.
50 D WHITLOCK: Dr. Ikeda.
51 D TAKUMI: Sorry, Chief.
52 D RAO: He'll watch the closing.
53 D TAKUMI: I'll watch the closing.
54 D BUKOWSKI: What closes?
55 D SINEAD: The chest.
56 D BUKOWSKI: How long does that take?
57 D SINEAD: About as long as it takes you to finish that bag.
58 A ¶ Bukowski regards the bag, shakes it, counts, and sighs.
59 D BUKOWSKI: Then I'd better ration.
* 60 A ¶ The monitor below settles into a long, even rhythm.
61 A In the gallery, five of them turn to watch the closing, and one, Bukowski, puts the bag away.

### SCENE s01369 | INT. FAMILY KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GRANDPA FELIX, MOM RHONDA, DAD CYRUS, TILLY, JOJO, KIT
* 1 A ¶ Cereal boxes.
* 2 A A burning toaster.
* 3 A Sunlight on yellow linoleum.
4 A ¶ GRANDPA FELIX, 70s, in a bathrobe, reads a newspaper upside-down.
5 A MOM RHONDA, 40s, shoves lunches into bags.
6 A DAD CYRUS, 40s, hunts for his keys.
7 A TILLY, 12, scowls over her phone.
8 A JOJO, 8, balances a spoon on his nose.
9 A And baby KIT, 2, bangs a pot lid on the high chair tray.
10 A ¶ Cyrus opens a drawer and slams it.
11 A Rhonda hands Tilly a lunch.
12 A Tilly drops it.
* 13 A Jojo's spoon falls into the cereal.
14 A Felix turns the paper right side up.
15 D RHONDA: Who has the keys?
16 D CYRUS: Not me.
17 D TILLY: Not me.
18 D JOJO: Not me!
19 D FELIX: Not at my age.
20 D RHONDA: Kit?
21 D KIT (banging): Bam!
22 D CYRUS: She's got them.
23 A ¶ Rhonda lifts Kit, who clutches the keys in a sticky fist.
24 A She pries them loose.
25 A Kit wails.
26 A Jojo dives to catch the falling spoon.
27 A Tilly bursts out laughing.
28 D RHONDA: Everybody, lunch, coats, now.
29 D FELIX: I'd like it noted I did nothing wrong.
30 D TILLY: Grandpa, you're reading it upside down.
31 D FELIX: It's better that way.
32 A ¶ They scatter.
* 33 A Coats fly.
* 34 A The toaster smokes.
35 A Cyrus yanks the plug.
* 36 A Quiet falls like a dropped plate.
37 D RHONDA (softly): Same time tomorrow?
38 D CYRUS: Yes please.

### SCENE s01370 | INT. ICE HOUSE - BEHIND THE LIVERY - DAY
Detected names (may be incomplete or contain aliases): OTIS WREN, IDA MARROW, WADE WREN, SILAS PRUETT
* 1 A ¶ Sawdust floors.
* 2 A Blocks of river ice stacked to the rafters, steaming in the heat.
* 3 A Cold breath hangs in the air.
4 A ¶ OTIS WREN, 60s, leather apron, hands like split kindling, chips at a block with a pick.
5 A Slow.
6 A Methodical.
* 7 A ¶ The door scrapes open.
* 8 A Light cuts the dark.
9 A ¶ IDA MARROW, 30s, dust-caked duster, rifle sling across her chest, steps in.
10 A She lets the door close behind her.
11 A ¶ He doesn't look up.
12 D OTIS: Ice is two bits a pound.
13 D IDA: I'm not buying ice.
14 A ¶ He keeps chipping.
15 A She walks the aisle between the stacks.
16 A Runs a glove along the frost.
17 D OTIS: Then you're lost.
18 D IDA: Your boy Wade. Where is he?
19 A ¶ The pick stops.
20 A He sets it down.
21 A Wipes his hands on the apron, one finger at a time.
22 D OTIS: Wade's in Cheyenne.
23 D IDA: Wade was in Cheyenne in March.
24 A ¶ Behind a far stack, a boot scuffs.
25 A She hears it.
26 A He hears her hear it.
27 D OTIS: Rats.
28 D IDA: Big ones.
29 A ¶ She slides the rifle off her shoulder.
30 A Doesn't raise it.
31 A Lets it hang.
32 A ¶ WADE WREN, 20s, thin, sunburned, steps out from the ice with a pistol low against his thigh.
33 A His eyes are red-rimmed.
34 A He hasn't slept.
35 D WADE: Pa, go back to work.
36 D OTIS: Son, hush.
37 D WADE: She's alone.
38 D IDA: Am I?
39 A ¶ Wade glances at the door.
40 A At the dark gaps between the stacks.
41 A His grip tightens.
42 D WADE: You're bluffing.
43 D IDA: Maybe.
* 44 A ¶ Silence.
* 45 A Water drips from the rafters.
* 46 A It ticks on the sawdust.
47 D OTIS: What'd he take from you?
48 D IDA: My brother's horse. And my brother's life, after.
49 D WADE: He drew first.
50 D IDA: He was nineteen. He was holding a hat.
51 A ¶ Wade flinches.
52 A Otis sees it.
53 A Something in the old man's shoulders drops a half inch.
54 D OTIS: Wade.
55 D WADE: He had his hand under his coat.
56 D IDA: For the hat.
57 D OTIS (quiet): Put the pistol down.
58 D WADE: No.
59 A ¶ A thin figure moves in the doorway, backlit.
60 A A shadow first, then a man.
61 A ¶ SILAS PRUETT, 50s, tin star on a faded vest, holds a shotgun with both hands.
62 A He walks in like a man paying a debt.
63 D SILAS: Evening, all.
64 D IDA: It's noon.
65 D SILAS: Feels later.
66 A ¶ He stops by the ice block nearest Otis.
67 A Takes in the room.
* 68 A Three people.
* 69 A Two guns.
* 70 A One question.
71 D SILAS: Wade, you're under arrest.
72 D WADE: For what?
73 D SILAS: Murder, son. I've got a warrant in my pocket I've been carrying three weeks.
74 D OTIS: Three weeks.
75 D SILAS: I'm slow.
76 D IDA: You're late.
77 D SILAS: Same thing.
78 A ¶ Wade's pistol swings between them.
79 A Silas.
80 A Ida.
81 A Silas.
82 A His breath comes shallow and fast.
83 D WADE: I ain't going to hang.
84 D SILAS: Nobody's hanging anybody today.
85 D IDA: I'd like to.
86 D SILAS: I know you would, ma'am.
87 A ¶ Otis takes one step.
88 A Puts himself between his son and the rifle.
89 A Arms open, palms out.
90 D OTIS: Everybody breathe.
* 91 A ¶ Nobody does.
* 92 A ¶ A block of ice shifts overhead.
* 93 A Groans.
* 94 A Cracks.
95 A ¶ They all look up.
96 D OTIS [CONT'D]: That's the chain.
97 D SILAS: Move.
98 D WADE: Don't tell me--
99 D SILAS [CONT'D]: ^ Move!
100 D IDA: ^ Get out of there!
* 101 A ¶ The chain snaps.
* 102 A A block the size of a wagon bed drops, hits the floor, and bursts.
* 103 A Shards fly.
104 A Everyone dives.
* 105 A ¶ Silence.
* 106 A Then coughing.
* 107 A Ice dust drifts like smoke.
108 A ¶ Wade scrambles up first, pistol still in hand, ears ringing.
109 A He sees Ida on one knee, rifle raised, trained on his chest.
110 A ¶ He raises his own.
111 A ¶ Both freeze.
112 D IDA: Drop it.
113 D WADE: You drop it.
114 A ¶ Silas drags himself upright behind the shattered block, shotgun levelled at them both.
115 A Blood on his forehead.
116 A His hands do not shake.
117 D SILAS: Nobody's dropping anything.
118 A ¶ Otis is on the floor.
119 A A shard of ice has pinned his leg.
120 A He groans, grips the sawdust.
121 D OTIS: Wade.
122 A ¶ Wade looks down.
123 A His father's face is gray.
124 D OTIS [CONT'D]: Look at me. Not her.
125 A ¶ Wade looks.
126 A His pistol wavers.
127 A ¶ Ida's finger moves on the trigger.
128 A Silas sees it.
129 D SILAS: Ida Marrow. Don't.
130 D IDA: Why not?
131 D SILAS: Because I'm the one who's going to have to write it up.
* 132 A ¶ A beat.
* 133 A Almost a laugh.
* 134 A It doesn't land.
135 A ¶ Wade takes a breath.
136 A Another.
137 A He lowers the pistol an inch.
138 A Two.
139 A ¶ Ida doesn't.
140 D IDA: Say his name.
141 D WADE: What?
142 D IDA: My brother. Say it.
143 A ¶ Wade's mouth works.
* 144 A Nothing comes.
145 D OTIS (through his teeth): Say it, boy.
146 D WADE: Tom.
147 D IDA: Tom what?
148 D WADE: Tom Marrow.
149 A ¶ She holds the rifle on him another long second.
150 A Then the barrel dips.
151 A ¶ Wade drops the pistol.
* 152 A It thuds into the sawdust.
153 A ¶ Silas moves in fast.
154 A Cuffs.
* 155 A Click, click.
156 A Wade doesn't resist.
157 A He's crying without a sound.
158 A ¶ Ida stands over Otis.
159 A Lifts the ice shard off his leg with one hard heave.
160 A Tosses it aside.
161 D OTIS: Why'd you do that?
162 D IDA: Somebody should leave this place standing.
163 A ¶ She shoulders the rifle.
164 A Walks to the door.
* 165 A Light pours around her.
166 D SILAS: Ma'am. You'll need to testify.
167 D IDA: I know.
168 A ¶ She goes.
* 169 A The door scrapes shut.
* 170 A ¶ Drip.
* 171 A Drip.
* 172 A The ice keeps melting.

### SCENE s01371_0 | INT. LIGHTHOUSE KEEPER'S COTTAGE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): PENNY ALDERWICK, RADIO, FATHER, SHUTTER BANGS
* 1 A ¶ A storm rattles the shutters.
* 2 A A coal stove glows.
* 3 A On the table, a half-built model ship, a jar of glue, and a pot of cocoa gone cold.
4 A ¶ PENNY ALDERWICK, 9, in her father's too-big wool sweater, kneels on a chair and fits a tiny mast into the deck.
5 A Her tongue sticks out in concentration.
* 6 A ¶ A RADIO crackles on the shelf.
* 7 A A hiss of static, then a man's warm voice.
8 D FATHER [V.O.] (over radio): Lighthouse base, this is the supply boat Gannet. Penny, you there?
9 A ¶ She lunges for the radio.
10 A Presses the button.
11 D PENNY: I'm here, Papa! Over!
12 D FATHER [V.O.] (over radio): How's the lamp?
13 D PENNY: Turning. I counted. Forty-one seconds each time, just like you said.
14 D FATHER [V.O.] (over radio): That's my girl. Seas are rough. I'll be an hour late, maybe two. Keep the stove fed and stay put.
15 D PENNY: Can I stay up?
16 D FATHER [V.O.] (over radio): Until I'm home.
17 A ¶ She grins.
18 A Sets the radio down gently, as if it might break.
* 19 A ¶ A SHUTTER BANGS somewhere upstairs.
20 A Penny freezes.
21 A Looks at the ceiling.
22 D PENNY (whispering): It's just wind.
23 A ¶ She climbs down and lifts the oil lantern.
24 A Creeps to the stairs.
* 25 A The light throws her shadow huge on the wall.

### SCENE s01371_1 | INT. LIGHTHOUSE COTTAGE - STAIRS - CONTINUOUS
Detected names (may be incomplete or contain aliases): SHADOW, EZRA TULLY, PENNY, RADIO, FATHER
* 1 A ¶ Each step creaks.
* 2 A At the top, a window hangs open.
* 3 A Rain whips in.
* 4 A The curtain flaps like a ghost.
5 A ¶ She runs to it.
6 A Strains to pull the sash down.
* 7 A It sticks.
8 A ¶ A SHADOW falls across the glass from outside.
9 A ¶ Penny gasps.
10 A Backs away.
11 A ¶ A face presses to the window, pale and wet.
12 A A knuckle raps the pane.
13 A ¶ EZRA TULLY, 70s, drenched yellow oilskins, white beard dripping, gestures frantically at the latch.
* 14 A His boat lantern swings from one hand.
15 D EZRA (muffled): Let me in, child! I'm half drowned!
16 A ¶ Penny stares.
17 A Her lantern shakes.
18 D PENNY: Papa says not to open the door to strangers.
19 D EZRA (muffled): I'm no stranger! I'm the lamp-man from Skerry Point! Your father's friend!
20 D PENNY: What's his name, then?
21 D EZRA (muffled): Harold! He drinks his tea with a pinch of salt!
22 A ¶ Penny's eyes widen.
23 A That's right.
24 A She hesitates, then yanks the latch.
* 25 A ¶ The window swings wide.
26 A Ezra tumbles over the sill in a heap of dripping canvas, laughing and wheezing.
27 D EZRA [CONT'D]: Bless you. My engine died a mile out. I rowed the whole way.
28 D PENNY: You'd better come down. There's cocoa.
29 D EZRA: Cold?
30 D PENNY: Yes.
31 D EZRA: Perfect. I'm too wet to be fussy.
* 32 A ¶ The RADIO hisses downstairs.
* 33 A Faint, urgent.
34 D FATHER [V.O.] (over radio, distant): Penny? Penny, answer me!
35 A ¶ She sprints down the stairs.
36 A Ezra follows, dripping, as fast as old knees allow.

### SCENE s01371_2 | INT. LIGHTHOUSE COTTAGE - KITCHEN - CONTINUOUS
Detected names (may be incomplete or contain aliases): PENNY, FATHER
1 A ¶ Penny grabs the radio and presses the button.
2 D PENNY: Papa! I'm here! Somebody came! Mister Tully rowed over and he's all wet!
* 3 A ¶ Static.
4 A Then the father's voice, tight.
5 D FATHER [V.O.] (over radio): Who?
6 D PENNY: Mister Tully. From Skerry Point. He knew about the salt.
* 7 A ¶ A long pause.
* 8 A The storm howls.
9 D FATHER [V.O.] (over radio): Penny. Ezra Tully died in March.
10 A ¶ Penny turns, slowly.
11 A Ezra stands in the doorway, smiling gently.
* 12 A The water dripping from his coat makes no sound on the floor.
* 13 A ¶ The lantern in her hand goes out.
14 D PENNY (barely a whisper): Papa?
15 D FATHER [V.O.] (over radio): Stay where you are. Keep the lamp turning. I'm coming.
* 16 A ¶ Above them, the great lamp swings its beam across the window.
* 17 A One flash.
18 A Ezra is gone.
* 19 A Only the wet footprints remain.
20 A ¶ Penny holds the radio to her chest.
21 A Starts counting.
22 D PENNY: One. Two. Three...

### SCENE s01372 | EXT. GLASS ORCHARD - DUSK
Detected names (may be incomplete or contain aliases): BRIAR, TAMSIN, KESTREL VANE
* 1 A ¶ Trees of blown glass.
* 2 A Fruit that hums.
* 3 A Wind makes them chime.
4 A ¶ BRIAR, 40s, a pruner in a moss-colored coat, works a ladder.
5 A Snip.
6 A Snip.
7 A She doesn't look down.
8 A ¶ At the base, TAMSIN, 20s, holds the ladder.
9 A Her knuckles are white.
10 D TAMSIN: You said you'd stop at dusk.
11 D BRIAR: It's not dusk.
12 A ¶ Tamsin looks west.
* 13 A The sun is a thumbnail above the hills.
14 D TAMSIN: It's nearly.
15 A ¶ Snip.
* 16 A A glass pear drops.
17 A Tamsin catches it.
* 18 A It sings in her palm, one thin note.
19 D BRIAR: Put it in the basket.
20 A ¶ She doesn't.
21 A She holds it.
22 A Closes her fingers around it.
* 23 A ¶ A shadow moves between the trees.
* 24 A Slow.
* 25 A Wrong-shaped.
26 A ¶ KESTREL VANE, 60s, a crown of brass antlers, steps into the lane.
27 A Bare feet.
28 A No sound on the gravel.
29 A ¶ Briar stops cutting.
* 30 A The chimes die.
31 D KESTREL: Evening, sisters.
32 D BRIAR: Not your orchard anymore.
33 D KESTREL: Not yours either.
34 A ¶ Tamsin's fist tightens.
* 35 A The pear cracks.
* 36 A A hairline of light runs through it.
37 D TAMSIN: Briar.
38 D BRIAR: Hold the ladder.
* 39 A ¶ The pear shatters.
* 40 A Every tree in the orchard rings at once, a scream of glass.

### SCENE s01373 | INT. DROWNED CATHEDRAL - NAVE - TWILIGHT
Detected names (may be incomplete or contain aliases): NERISSA, BARNABY, ODALYS
* 1 A ¶ Seawater fills the cathedral to the height of a man's knee, black and perfectly still.
* 2 A Through the shattered rose window a violet sky bleeds in.
* 3 A Pews rise from the flood like the ribs of some enormous animal, and pale lantern-fish drift between them, trailing threads of cold light.
* 4 A ¶ A flat-bottomed boat noses between the pillars.
5 A In the stern, a woman poles steadily, her coat the green of old copper.
6 A In the bow sits a man with a ledger across his knees, and between them, a girl hugs a birdcage covered in cloth.
7 D NERISSA (calling ahead): Mind the altar rail. It bites.
8 D BARNABY: It does not bite. It is a rail.
9 D NERISSA: It took my last pole in half.
10 D BARNABY: Because you steered it into the rail.
11 A ¶ The girl has not spoken.
12 A She watches the water as though something might rise out of it.
* 13 A Under the cloth, something in the cage shifts and murmurs.
14 D ODALYS: It's awake.
15 D NERISSA: It's not awake.
16 D BARNABY: It is certainly awake.
17 D ODALYS: It wants out.
18 D NERISSA: They always want out, love. That's the nature of--
19 D BARNABY: We agreed that it stays covered until the choir loft.
20 D NERISSA: We agreed nothing. You agreed. I poled.
21 A ¶ He closes the ledger with a snap.
22 A She leans harder into the pole.
* 23 A The boat glides through a drift of drowned hymn-books, their pages spread like pale hands.
* 24 A ¶ At the far end of the nave, the water begins to move.
* 25 A A slow ring spreads from the base of the pulpit, then another.
* 26 A The lantern-fish scatter.
27 A ¶ Odalys sees it first.
28 A Her grip tightens on the cage.
29 A She says nothing.
30 D BARNABY: Nerissa.
31 D NERISSA: I see it.
32 D BARNABY: You are not looking at it.
33 D NERISSA: I am looking at everything. That is the point of looking.
34 D ODALYS: It's under us.
35 A ¶ The pole stops mid-stroke.
* 36 A Water drips off the end and sets small circles ringing outward.
37 A Under the boat, something enormous and unhurried turns over in the dark.
38 D BARNABY (very softly): Give it the bird.
39 D ODALYS: No.
40 D NERISSA: Odalys--
41 D ODALYS: It's mine. It sings for me.
42 D BARNABY: Child, I am asking you--
43 D NERISSA: Don't ask her, Barnaby, you'll only make it worse--
44 D BARNABY: I am being perfectly reasonable!
45 D NERISSA: You are shouting in a church!
* 46 A ¶ The boat lifts.
* 47 A Not much.
* 48 A Enough that the water slides off the hull in a sheet.
49 A Odalys pulls the cloth from the cage in a single sweep.
* 50 A ¶ Inside, a small gray wren opens its beak and sings a single, impossible note.
* 51 A Every pane left in the rose window answers it.
* 52 A ¶ The water goes still.
53 A ¶ Barnaby lowers the ledger.
54 A Nerissa lowers the pole.
55 A Odalys, eyes shut, holds the cage up toward the light.
* 56 A ¶ Slowly, the boat settles.

### SCENE s01374 | INT. MINIATURE GOLF COURSE - CLUBHOUSE - DAY
Detected names (may be incomplete or contain aliases): DENNIS OKAFOR, CAPTAIN HOOK, MARISOL BELTRAN, BIG LOU PACHECO
* 1 A ¶ A cramped clubhouse shaped like a pirate ship.
* 2 A Plastic parrots on every shelf.
* 3 A A faded scoreboard.
* 4 A The air smells of nacho cheese and carpet glue.
5 A ¶ DENNIS OKAFOR, 40s, in a sun-bleached polo that reads CAPTAIN HOOK'S, sits behind the counter counting quarters into paper rolls.
6 A He is the calmest man alive.
7 A ¶ Across the counter, MARISOL BELTRAN, 30s, tidy blazer, clipboard, sharp ponytail, waits with a polite smile.
8 D MARISOL: Thank you for seeing me, Mr. Okafor.
9 D DENNIS: Call me Dennis. Everybody does.
10 D MARISOL: Dennis. I'm with the county inspector's office.
11 D DENNIS: That's nice. Quarter?
12 A ¶ He offers her one.
13 A She declines.
14 D MARISOL: This is a routine visit.
15 D DENNIS: I love routine.
16 D MARISOL: Your last inspection was fourteen months ago.
17 D DENNIS: Time flies when you're having fun.
18 A ¶ She flips a page.
19 A Makes a mark.
20 A He keeps counting, perfectly relaxed.
21 D MARISOL: I'll need to see the electrical panel.
22 D DENNIS: Back by the windmill. Hole nine.
23 D MARISOL: And the fire exits.
24 D DENNIS: Hole twelve has a very nice one. It's the volcano.
25 D MARISOL: The volcano is the fire exit?
26 D DENNIS: It's themed.
27 A ¶ She almost smiles.
28 A Catches herself.
29 A Writes something.
30 D MARISOL: And your permit for the animal attractions.
31 D DENNIS: We don't have animals.
32 D MARISOL: The sign out front says LIVE ALLIGATOR.
33 D DENNIS: That's a lie. I mean, a joke. A marketing joke.
34 D MARISOL: Is it?
35 D DENNIS: It's fiberglass. His name is Kevin.
* 36 A ¶ From the back of the clubhouse comes a low, wet THUMP.
* 37 A Then a scrape of claws on linoleum.
38 A ¶ Dennis keeps counting.
* 39 A A quarter rolls off the counter.
40 D MARISOL: What was that?
41 D DENNIS: Pipes.
42 D MARISOL: That sounded like a--
43 D DENNIS: Old building. Very expressive pipes.
* 44 A ¶ THUMP.
* 45 A Something large and unseen slides into a stack of plastic buckets.
* 46 A They clatter.
47 A ¶ Marisol sets down her clipboard.
48 A Slowly.
49 D MARISOL: Dennis.
50 D DENNIS: Yes, ma'am.
51 D MARISOL: Open the back room.
52 A ¶ Dennis sighs.
53 A Finally sets down the quarters.
54 A Shuffles to the door, unhooks a small brass latch.
* 55 A ¶ Before he can turn the handle, it bursts open from inside.
56 A ¶ BIG LOU PACHECO, 50s, wet suit unzipped to the waist, bandaged forearm, and a cooler under one arm, stumbles out.
57 A Behind him, in the dim storeroom, a four-foot alligator blinks at the light.
58 D BIG LOU: Dennis, he ate the hush puppies.
* 59 A ¶ Silence.
60 A The alligator hisses.
61 A ¶ Marisol looks at Dennis.
62 A Dennis looks at the ceiling.
63 D DENNIS: That's Kevin.
64 D MARISOL: That is not fiberglass.
65 D DENNIS: He's a different Kevin.

### SCENE s01375_0 | INT. LAMPLIGHTERS' GUILD - COPPER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CORNELIUS AGNEW, TOBIAS HALE
* 1 A ¶ 1887.
* 2 A Gas London.
* 3 A A narrow workshop lined with lamp-heads, brass keys, and tin oil cans.
* 4 A A single jet burns low over a scarred table.
5 A ¶ CORNELIUS AGNEW, 70, stooped, spectacles on a cord, polishes a lamp-glass with a rag.
6 A He does it too slowly.
7 A He has all night.
* 8 A ¶ The door opens.
* 9 A Cold fog drifts in.
10 A ¶ TOBIAS HALE, 28, wet through, bowler in hand, ink-stained cuffs, enters.
11 A He looks around like a man who has been here before.
12 D TOBIAS: Mr. Agnew.
13 D CORNELIUS: You're late.
14 D TOBIAS: The omnibus broke an axle.
15 D CORNELIUS: I said ten o'clock.
16 D TOBIAS: It is ten o'clock.
17 A ¶ Cornelius lifts the glass to the jet.
18 A Squints through it.
19 D CORNELIUS: Quarter past, by my reckoning.
20 A ¶ Tobias lets that sit.
21 A Hangs his hat on a hook.
22 A Doesn't sit.
23 D TOBIAS: You asked me here.
24 D CORNELIUS: I did.
25 D TOBIAS: You said it was about the Pettigrew matter.
26 D CORNELIUS: It is.
27 A ¶ He sets the glass down.
28 A Lifts another.
29 A Starts again.
* 30 A ¶ A long beat.
* 31 A A long, patient beat.
32 D TOBIAS: Mr. Agnew, I have an editor waiting on copy.
33 D CORNELIUS: Let him wait.
34 D TOBIAS: I can't.
35 D CORNELIUS: You can. It's an extraordinary thing, waiting. You'd be surprised what a man will say when you let him.
36 D TOBIAS: Is that what this is?
37 D CORNELIUS: I'm an old man. I'm only polishing.
38 A ¶ Tobias crosses to the table.
39 A Looks at the lamp-glass.
40 A At the old man's hands, trembling slightly.
41 D TOBIAS: Eleven lamps went dark on Marlow Street the night Pettigrew died.
42 D CORNELIUS: Eleven.
43 D TOBIAS: Someone put them out.
44 D CORNELIUS: The wind.
45 D TOBIAS: There was no wind.
46 A ¶ Cornelius puts down the rag.
47 A Takes off his spectacles.
48 A Folds them.
49 D CORNELIUS: You've done your homework.
50 D TOBIAS: I've done nothing yet.
51 D CORNELIUS: Then you'll want to sit.
52 A ¶ Tobias stays standing.
53 A Cornelius shrugs and lowers himself onto a stool, bones cracking.
54 D CORNELIUS [CONT'D]: I was told to do it. By a man in a good coat. He paid me forty sovereigns.
55 D TOBIAS: Who?
56 D CORNELIUS: I don't know his name.
57 D TOBIAS: Would you know his face?
58 D CORNELIUS: I'd know his coat.
59 A ¶ Tobias takes out a notebook.
60 A Writes.
* 61 A The pencil scratches loud in the quiet.
62 D TOBIAS: Why are you telling me?
63 D CORNELIUS: Because I've lit those lamps for fifty-one years. And I put out eleven in one night so a man could be killed in the dark.
64 A ¶ He looks up.
65 A His eyes are wet and clear.
66 D CORNELIUS [CONT'D]: That's a hard thing to polish off.
67 A ¶ Tobias stops writing.
68 A Looks at him a while.
69 D TOBIAS: They'll hang you.
70 D CORNELIUS: Probably.
71 D TOBIAS: I should say I won't print it.
72 D CORNELIUS: But you will.
73 D TOBIAS: I will.
74 D CORNELIUS: Good lad.
* 75 A ¶ Somewhere in the fog outside, a church bell tolls the half hour.
76 D TOBIAS (quiet): I'm sorry.
77 D CORNELIUS (quiet): Don't be.
78 A ¶ They speak at the same time.
79 D TOBIAS: You could run.
80 D CORNELIUS: ^ I'd like to finish my round.
81 A ¶ They both stop.
* 82 A The jet hisses.
83 A Tobias lowers the pencil.
84 D TOBIAS: Your round.
85 D CORNELIUS: Marlow Street. Eleven lamps. I put them out. I'd like to put them back.
86 A ¶ Tobias puts the notebook in his pocket.
87 A Takes his hat from the hook.
88 D TOBIAS: I'll walk with you.
89 D CORNELIUS: You'll get wet.
90 D TOBIAS: I'm already wet.
91 A ¶ Cornelius almost smiles.
92 A Rises with effort.
93 A Collects a long brass pole from the corner, a hooked key hanging from its tip.
94 A ¶ He blows out the jet on the way past.
95 A They walk out together into the fog.

### SCENE s01375_1 | EXT. MARLOW STREET - NIGHT
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ Dark.
* 2 A Eleven dead lamps in a long row.
3 A ¶ Cornelius lifts the pole to the first one.
* 4 A A click.
* 5 A A flare.
* 6 A A pool of gold on wet cobble.
7 A ¶ He moves to the next.
8 A Tobias walks a step behind, hat in his hands, saying nothing.
* 9 A ¶ One by one, the street comes back to life.

### SCENE s01376 | INT. HOSPITAL - HYPERBARIC CHAMBER ANTEROOM - DAY
Detected names (may be incomplete or contain aliases): SUNITA RAGHAVAN, NURSE FELIX OYELARAN, IMOGEN VASCO
* 1 A ¶ A small tiled room with a round porthole window into a steel pressure chamber.
* 2 A Gauges tick.
* 3 A A wall clock reads 2:15.
4 A ¶ DR. SUNITA RAGHAVAN, 50s, scrubs and reading glasses, stands at the console reviewing a chart.
5 A She is relaxed.
6 A She is eating almonds.
7 A ¶ NURSE FELIX OYELARAN, 30s, checks a valve with a gloved hand.
8 A Whistles faintly.
9 D SUNITA: Pressure steady?
10 D FELIX: Two point four. Just like the textbook.
11 D SUNITA: Patient comfortable?
12 D FELIX: Mr. Arkwright's asleep. He said the hum reminded him of his mother's refrigerator.
13 D SUNITA: That's the nicest thing anyone's said about this machine.
14 A ¶ They share a small laugh.
* 15 A The chamber hums.
16 A ¶ DR. IMOGEN VASCO, 40s, hospital administrator's badge, steps in with a tablet and a face without expression.
17 D IMOGEN: Dr. Raghavan. Nurse Oyelaran.
18 D SUNITA: Imogen. Almond?
19 D IMOGEN: No, thank you.
20 D FELIX: Everything all right?
21 D IMOGEN: I need a word about Mr. Arkwright.
22 D SUNITA: Of course. What about him?
23 D IMOGEN: His daughter called legal an hour ago.
24 D SUNITA: His daughter. Gwen. She's lovely. She sat with him all morning.
25 D IMOGEN: She says he was never told the full risk of the procedure.
26 D SUNITA: I went through the consent form with her line by line.
27 D IMOGEN: She says you did it while he was sedated.
28 D FELIX: That's not what happened.
29 D IMOGEN: I'm not saying it is.
30 D SUNITA: Then what are you saying?
31 D IMOGEN: I'm saying there's a record that says otherwise.
32 D SUNITA: What record?
33 D IMOGEN: The sedation log. It has a time on it. 1:40.
34 D FELIX: That's wrong.
35 D IMOGEN: It's what the system shows.
36 D SUNITA: Felix, you charted the sedation.
37 D FELIX: I did. At 2:00. After consent.
38 D IMOGEN: The system says 1:40.
39 D FELIX: Then someone changed it.
40 D IMOGEN: Who could have?
41 D FELIX (slowly): Dr. Raghavan.
42 D SUNITA: What?
43 D FELIX: You asked me for the keyboard at 1:50. To fix a typo.
44 D SUNITA: I fixed a typo.
45 D FELIX: You were on the sedation log.
46 D SUNITA: Because I was checking the dose.
47 D IMOGEN: Dr. Raghavan.
48 D SUNITA: This is ridiculous.
49 D IMOGEN: I have to ask you to step out of the chamber rotation while we review.
50 D SUNITA: You can't be serious.
51 D IMOGEN: It's procedure.
52 D SUNITA: I have forty years of procedure. I know exactly what it is.
53 D FELIX: I'm sorry. I didn't want to say it.
54 D SUNITA: Say what, Felix?
55 D FELIX: That I saw your hand move.
56 A ¶ Sunita sets down the almonds.
57 A Takes off her glasses.
58 A Her voice is very quiet.
59 D SUNITA: Pressure is two point four. In eleven minutes we need to bring him up. Who is going to do that, Imogen?
60 D IMOGEN: Nurse Oyelaran is certified.
61 D SUNITA: Then I suppose it will be Nurse Oyelaran.
62 D FELIX: Dr. Raghavan, I--
63 D SUNITA: Go on, Felix. The gauge won't watch itself.

### SCENE s01377 | INT. ST. CLEMENT'S HOSPITAL - LAUNDRY CHUTE LANDING - NIGHT
Detected names (may be incomplete or contain aliases): HELEN VOSS, NURSE AGNES BRANDT, CECILIA MARCH
* 1 A ¶ A cramped steel landing at the bottom of the laundry chute, lit by one humming tube.
* 2 A Canvas bins.
* 3 A Stacks of folded sheets.
* 4 A A radiator ticks.
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
* 47 A The sheets slide off.
48 A Her eyes are suddenly very clear.
49 D HELEN: He's not here.
50 D CECILIA: He promised he'd come.
51 A ¶ She pushes herself to her feet.
52 A Helen scrambles back.
53 A Agnes grabs for the old woman's arm and gets a handful of gown.
* 54 A ¶ The radiator bangs.
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

### SCENE s01378 | INT. SALT MINE ELEVATOR CAGE - DEEP SHAFT - NIGHT
Detected names (may be incomplete or contain aliases): MAURA KELLEHER, DEZ, OYELOWO, TRUDY NAKASHIMA, OLD HENRY BASKIN, JOEL
* 1 A ¶ The cage hangs motionless in blackness.
* 2 A White crystalline walls sweat.
* 3 A A single caged bulb flickers, turning five faces the color of old teeth.
4 A ¶ MAURA KELLEHER, 50s, foreman's helmet, grips the lever.
5 A DESMOND "DEZ" OYELOWO, 20s, wide-eyed, presses his back to the bars.
6 A TRUDY NAKASHIMA, 30s, geologist, clutches a clipboard.
7 A OLD HENRY BASKIN, 70s, silent, stares upward.
8 A And little JOEL, 12, the foreman's nephew, crouches on the floor with his hands over his ears.
* 9 A ¶ Somewhere far below, something scrapes.
* 10 A Slow.
* 11 A Patient.
12 D MAURA: Everybody stay calm.
13 D DEZ: Calm? The cable's stopped!
14 D TRUDY: It didn't stop. It was cut.
15 D MAURA: Don't say that.
16 D TRUDY: I'm just saying what I see.
17 D HENRY (muttering): Down there. Always down there.
18 D DEZ: What's down there? Henry? What's he talking about?
19 D MAURA: Leave him be.
20 D JOEL: It's coming up.
21 D TRUDY: Joel, honey--
22 D JOEL: I can hear its feet.
* 23 A ¶ The scraping grows louder.
* 24 A Nearer.
* 25 A The bulb dims.
26 D DEZ (to himself): Okay okay okay okay.
27 D MAURA: Dez, shut the gate. Now.
28 D DEZ: It's shut!
29 D TRUDY: It's not latched.
30 D MAURA: Latch it!
31 A ¶ Dez fumbles at the bolt.
32 A His hands shake.
* 33 A Below, the scrape becomes a heavy wet drag, and the cage trembles on its cable.
34 D HENRY (whispering): He said we'd never dig this deep.
* 35 A ¶ The bulb goes out.
* 36 A ¶ Darkness.
* 37 A Breathing.
38 A Joel starts to whimper.
* 39 A ¶ Something knocks, once, gently, on the underside of the floor.

### SCENE s01379 | INT. BOWLING ALLEY - LANE 12 - NIGHT
Detected names (may be incomplete or contain aliases): COACH ARTIE KOWALCZYK, RUBY DELGADO, TEDDY BRIGHT, DEVON WALLACE, FUJIMOTO, GIL SANTORO
* 1 A ¶ Championship night.
* 2 A Cigarette haze under the neon.
* 3 A A scoreboard overhead: Ninth frame.
* 4 A Tied, 218 to 218.
5 A ¶ COACH ARTIE KOWALCZYK, 60s, sweat-stained cardigan, stands behind the bench chewing a toothpick down to nothing.
6 A At the approach, RUBY DELGADO, 20s, steps up with a pink ball, wipes her palm on a towel, never meeting his eyes.
7 A Behind her, TEDDY BRIGHT, 19, rubs his bad shoulder against the rail.
8 A DEVON WALLACE, 30s, the anchor, folds his arms and watches the pins.
9 A Two rows back on the bench, the tiny MRS. FUJIMOTO, 70s, knits a scarf, needles clicking steadily.
10 A At the far lane, rival captain GIL SANTORO, 40s, grins and spins a ball on one finger.
11 D ARTIE: Spare, Ruby. That's all we need.
12 A ¶ Ruby nods.
13 A Takes her stance.
14 A Behind her, Teddy stops rubbing his shoulder.
15 A Devon unfolds his arms.
16 A Mrs. Fujimoto drops a stitch.
17 A ¶ She releases.
* 18 A The ball rolls down the oil, swerving left, then straight.
* 19 A Pins explode.
* 20 A Nine.
* 21 A ¶ One left.
* 22 A The ten pin wobbles.
23 A Everybody holds their breath.
* 24 A ¶ It stands.
25 A ¶ Ruby turns slowly.
26 A Walks back to the bench.
27 A Sits beside Mrs. Fujimoto.
28 A Picks up her towel.
29 A Folds it into a perfect square.
30 D ARTIE: That's okay.
31 A ¶ Devon takes the pink ball from the rack.
32 A Weighs it.
33 A Hands it back to her.
34 D DEVON: Again.
35 D RUBY: It's not my turn.
36 D DEVON: I know.
37 A ¶ He walks to the approach himself.

### SCENE s01380 | INT. COUNTY COURTHOUSE - COURTROOM 3 - NIGHT
Detected names (may be incomplete or contain aliases): RHEA KOSTOPOULOS, WALTER NGATA
* 1 A ¶ The room after everyone has gone.
* 2 A Folding chairs askew, a fan turning lazily above empty benches, a bailiff's coffee cup still ringing the oak rail.
* 3 A The jury box is a row of pressed-flat cushions.
4 A ¶ RHEA KOSTOPOULOS, 40s, defense attorney, sits alone at the long table with her shoes off and her jacket over the chair.
* 5 A The verdict form lies in front of her.
6 A She has read it twelve times.
* 7 A ¶ The side door opens.
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
* 30 A ¶ Silence.
* 31 A The fan ticks.
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
* 50 A Half the room goes dark.
51 A He sits a moment longer in the remaining light, then rises and begins, one by one, to straighten them.

### SCENE s01381 | INT. FERRY SNACK BAR - NIGHT
Detected names (may be incomplete or contain aliases): LEON PARRISH, STRANGER, WAITRESS, DOLORES KEANE, GIDEON
* 1 A ¶ A late crossing.
* 2 A Fluorescent lights buzz.
* 3 A Vinyl booths, a chrome coffee urn, rain streaking the windows.
* 4 A The deck rolls gently.
5 A ¶ LEON PARRISH, 50s, windbreaker, wedding ring worn thin, sits in a booth with a cold sandwich and a newspaper.
6 A He has the look of a man avoiding something at home.
7 A ¶ A STRANGER, 50s, gray raincoat, hat dripping, slides into the opposite seat without asking.
8 A He sets down two cups of tea.
9 A Pushes one across.
10 D STRANGER: You looked like you needed it.
11 D LEON: I didn't ask for tea.
12 D STRANGER: No. But you're the type who'd never ask.
13 A ¶ Leon eyes the cup.
14 A Eyes the man.
* 15 A The ferry horn sounds, long and low.
16 D LEON: Do I know you?
17 D STRANGER: Not yet.
18 A ¶ A WAITRESS drifts past with a pot of coffee.
19 A The Stranger nods.
20 A She refills nothing.
21 A Moves on.
22 D LEON: What do you want?
23 D STRANGER: Company. It's a long crossing.
24 D LEON: Twenty minutes.
25 D STRANGER: Long enough.
26 A ¶ Leon takes the tea.
27 A Sips.
28 A It's good.
29 A He seems surprised by that.
30 D STRANGER [CONT'D]: Where are you headed?
31 D LEON: Home.
32 D STRANGER: And where's that?
33 D LEON: Across the water.
34 D STRANGER (smiling): That's where everyone's going.
35 A ¶ DOLORES KEANE, 60s, in a yellow slicker, appears at the end of the booth with a lunch tray.
36 A She sets it down, hard.
37 D DOLORES: Leon, I've been looking all over the boat.
38 D LEON: Dolores. I told you I'd be back.
39 D DOLORES: You said ten minutes. That was an hour ago.
40 A ¶ Leon looks at the Stranger, then at her.
41 A The Stranger lifts his cup in a small toast.
42 D DOLORES [CONT'D]: Who's this?
43 D LEON: No one. A man who bought me tea.
44 D STRANGER: Gideon Marsh.
45 A ¶ He holds out a hand.
46 A Dolores doesn't take it.
47 A She stares at his face.
48 D DOLORES: Gideon Marsh drowned in 1991.
49 A ¶ Leon's cup stops halfway to his mouth.
50 D GIDEON: Did I?
51 D DOLORES: At Pelican Point. Off the ferry slip. I was there.
52 D GIDEON: Then you'll remember I wasn't alone.
* 53 A ¶ The fluorescent light flickers once.
* 54 A Twice.
55 A Leon puts down his cup and slides to the edge of the booth, his eyes on Dolores.
56 D LEON: Dolores. What does he mean?
57 A ¶ She doesn't answer.
58 A Gideon turns his tea in slow circles.
59 D GIDEON: It's all right, Mrs. Parrish. I forgave you a long time ago.
60 A ¶ Dolores sits down, very slowly, across from him.
61 D LEON: Mrs. Parrish?
* 62 A ¶ The ferry horn sounds again.
* 63 A Land comes closer behind the rain.

### SCENE s01382 | INT. NIGHT-SHIFT PLANETARIUM - CONTROL BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): ADA, LINDQVIST, RADIO ANNOUNCER, NOAH
* 1 A ¶ A cramped booth above the dome.
* 2 A Dials, slide trays, a dusty reel-to-reel, and a view through a narrow window onto rows of empty reclining seats.
* 3 A Overhead, painted stars crawl across the curved ceiling in slow rotation.
4 A ¶ ADAEZE "ADA" LINDQVIST, 30s, planetarium technician, headphones around her neck and a thermos at her elbow, sits hunched at the console.
5 A She types a note.
6 A Deletes it.
7 A Types again.
* 8 A ¶ A phone sits beside the keyboard.
* 9 A Its screen is lit, a call connected, the speaker on.
10 D RADIO ANNOUNCER [V.O.] (over speaker): ...and that was Chet Baker, here on KLUN, three in the morning, and still nobody's asleep.
11 A ¶ Ada reaches over and kills the radio.
* 12 A Silence settles on the booth.
13 A ¶ She exhales.
14 A Picks up the phone.
15 A Looks at the call screen.
* 16 A It reads: NOAH, 02:51.
17 A ¶ She doesn't speak.
18 A Neither does he.
19 D NOAH [V.O.] (over phone): Ada?
20 D ADA: Hi.
21 D NOAH [V.O.] (over phone): You're awake.
22 D ADA: I work nights.
23 D NOAH [V.O.] (over phone): I know. I just thought...
24 D ADA: You thought what?
25 D NOAH [V.O.] (over phone): I didn't know you'd pick up.
26 D ADA: Neither did I.
27 A ¶ She laughs, small and wet, and wipes her eye with a knuckle.
* 28 A On the dome behind her, Orion rises and slides toward the horizon.
29 D NOAH [V.O.] (over phone): Are you somewhere quiet?
30 D ADA: I'm in a room with eleven thousand stars.
31 D NOAH [V.O.] (over phone): That sounds nice.
32 D ADA: They're painted. It's a lie, really. I come in every night and turn the lie on.
33 D NOAH [V.O.] (over phone): It's a beautiful lie.
34 D ADA: Noah.
35 D NOAH [V.O.] (over phone): Yes.
36 D ADA: Why are you calling me?
* 37 A ¶ A long silence.
* 38 A The reel-to-reel ticks.
* 39 A Somewhere in the building, a pipe knocks twice.
40 D NOAH [V.O.] (over phone): Because I looked up tonight. First time in a year. And I thought of you.
41 A ¶ She presses her knuckles to her mouth.
42 A Reaches for the dimmer, brings the dome lights down until the booth is nearly black and only the stars remain.
43 D ADA: Where are you?
44 D NOAH [V.O.] (over phone): On a roof. In Lisbon.
45 D ADA: Why Lisbon?
46 D NOAH [V.O.] (over phone): I got a job. I didn't tell you.
47 D ADA (quiet): You didn't.
48 D NOAH [V.O.] (over phone): I didn't know how to.
49 D ADA: You could have called.
50 D NOAH [V.O.] (over phone): I did. Just now.
51 A ¶ She laughs again, and this time it breaks into something else.
52 A She turns her face to the window, away from the receiver.
53 D ADA: You can see the stars from there?
54 D NOAH [V.O.] (over phone): Barely. Too many lights.
55 D ADA: Then you're missing them.
56 D NOAH [V.O.] (over phone): I'm missing something.
57 A ¶ Ada reaches out and flips a switch on the console.
* 58 A The dome shifts.
* 59 A The painted sky races backward through the hours, winding through the night like a film in reverse.
* 60 A Constellations spin and tumble.
61 D NOAH [V.O.] (over phone): What are you doing?
62 D ADA: Turning the sky.
63 D NOAH [V.O.] (over phone): To where?
64 D ADA: To where you are. Look up.
* 65 A ¶ On the dome, a handful of stars pause.
* 66 A Hold.
* 67 A The booth is silent but for breath on the line.
68 D NOAH [V.O.] (over phone): I'm looking.
69 D ADA: Third from the left. Over the chimney.
70 D NOAH [V.O.] (over phone): That one?
71 D ADA: That one's me.
* 72 A ¶ A long pause.
73 A His breath catches.
74 D NOAH [V.O.] (over phone): I see you.
75 A ¶ She closes her eyes.
* 76 A The dome's light pools across her face.
77 A For a moment she is utterly still.
78 D ADA (whispering): Stay on the line.
79 D NOAH [V.O.] (over phone): All night.
80 A ¶ She leans back in the chair, phone against her ear.
* 81 A Above her, the lie keeps turning, softly, toward morning.

### SCENE s01383 | INT. ABANDONED DRIVE-IN - PROJECTION TOWER - DUSK
Detected names (may be incomplete or contain aliases): CASS, MWANGI, FLO, RUIZ-ABERNATHY, HENRIK SOLBERG, PILAR TRAN
* 1 A ¶ A concrete tower at the back of a cracked lot, its screen peeling to bare plywood.
* 2 A Weeds climb through the speaker posts.
* 3 A Dusk throws long orange bars through the broken shutters, and the air smells of old popcorn oil and rust.
4 A ¶ Four kids crowd the single room.
* 5 A A battered projector squats on a table, its lens clouded.
* 6 A Reels of film stand stacked like cheese wheels.
* 7 A A folding chair, a cooler, a radio playing low.
8 A ¶ CASSIUS "CASS" MWANGI, 17, lanky, a hand-me-down varsity jacket two sizes too small, sits cross-legged on the cooler, picking at a loose thread.
9 A He is the one who found the place and he knows it.
10 A ¶ FLORENCIA "FLO" RUIZ-ABERNATHY, 16, braids tied up in a bandanna, perches on the table's edge swinging her boots.
11 A She watches Cass the way one watches a campfire that might spread.
12 A ¶ HENRIK SOLBERG, 17, glasses taped at the hinge, kneels over the projector with a screwdriver, fully absorbed.
13 A He hasn't spoken in ten minutes.
14 A ¶ And in the corner, half in shadow, PILAR TRAN, 15, hugs her knees and says nothing, a camera hanging from her neck.
15 D FLO: You said it'd work.
16 D CASS: I said it might.
17 D FLO: You said it would.
18 D CASS: It might work. It's a hundred years old.
19 D HENRIK: It's from 1974.
20 D CASS: Same thing.
21 D HENRIK (without looking up): It is emphatically not the same thing.
22 A ¶ Pilar lifts her camera.
* 23 A Clicks.
* 24 A The shutter is loud in the small room.
25 A Cass flinches.
26 D CASS: Don't.
27 D PILAR: It's good light.
28 D CASS: I look stupid.
29 D PILAR: You look like yourself.
30 D CASS: That's what I mean.
31 A ¶ Flo snorts.
32 A Henrik snaps a panel shut and rises, wiping his hands.
33 D HENRIK: Try it.
34 A ¶ Cass slides off the cooler.
35 A Crosses to the projector.
36 A His hand hovers over the switch.
37 D CASS: What if it's just a blank screen?
38 D FLO: Then we've wasted a Friday.
39 D CASS: We've wasted a lot of Fridays.
40 D FLO: So one more won't matter.
* 41 A ¶ A beat.
42 A He throws the switch.
* 43 A The projector shudders, coughs, and a rectangle of white fire leaps from the lens across the lot, striking the peeling screen.
* 44 A ¶ Nothing.
* 45 A Just white.
* 46 A Then a flicker.
* 47 A A number counts down: 5, 4, 3.
48 A ¶ They hold their breath.
49 A Henrik, Flo, Pilar, all drawn to the beam.
50 D HENRIK: It's working.
* 51 A ¶ The reel catches.
* 52 A The screen shows a black-and-white shot of a woman on a porch, lit from behind, smiling at someone off camera.
* 53 A She holds the smile a long time.
* 54 A Then she turns and looks directly into the lens.
55 D PILAR (barely audible): Who is that?
56 D CASS: It was on the shelf. It had your name on it.
57 D PILAR: It did not.
58 D CASS: It said TRAN.
59 D PILAR: There are a lot of Trans.
60 D CASS: In Barlow? There's one.
61 A ¶ Pilar stands.
* 62 A Her camera swings from its strap.
* 63 A On the screen the woman mouths something, long and slow.
64 A Pilar steps closer to the beam, enormous shadows flung across the lot.
65 D FLO: Pilar?
66 D PILAR: She's my grandmother.
67 D HENRIK: You said your grandmother lived in Hanoi.
68 D PILAR: She did.
69 D HENRIK: So how did she end up on a porch in Ohio in 1974?
70 D PILAR: I don't know.
71 D CASS: I thought it'd be nice. A surprise.
72 D PILAR: You thought.
73 D CASS: I thought--
74 D PILAR: You didn't ask me.
75 D CASS: It was supposed to be a gift.
76 D PILAR: It's my family, Cass! It's mine!
77 A ¶ Her voice cracks off the concrete.
* 78 A The film keeps rolling: the woman on the porch, laughing now, silent and radiant.
79 A ¶ Flo moves to Pilar's side but doesn't touch her.
80 A Henrik switches off the radio.
* 81 A In the stillness the projector chatters.
82 D FLO (softly): Let her watch.
83 A ¶ Cass backs away until his shoulders hit the wall.
84 A He stares at the floor.
85 A Pilar stands in the light, shadow thrown huge across the screen, the grandmother's face drifting across her own.
86 A ¶ She raises the camera.
87 A Takes a single photograph of the screen.
88 A ¶ Then she lowers it and sits down on the floor, and the others, without a word, settle around her.

### SCENE s01384 | INT. SCRAPYARD OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): ROLAND FAYE, NINA SZABO, DUKE HARTWELL
* 1 A ¶ A trailer on cinder blocks.
* 2 A A single bulb.
* 3 A A safe with its door hanging open and empty.
4 A ¶ ROLAND FAYE, 50s, scrapyard owner, sits behind the desk with his hands flat on the blotter.
5 A Across from him, NINA SZABO, 30s, leather jacket, a revolver on her knee, sits very straight.
6 D ROLAND: You were my best driver.
7 D NINA: That's why you sent a stranger to my house?
8 D ROLAND: I didn't send anyone.
9 D NINA: He knew my dog's name.
10 D ROLAND: Everybody knows your dog's name.
11 D NINA: You sold me out for sixty thousand.
12 D ROLAND: I sold you out for a roof.
13 D NINA: Same thing, Roland.
14 D ROLAND: You never had to build a business from a hole in the ground.
15 D NINA: I've been in the hole. I know what it costs.
* 16 A ¶ The trailer door opens behind her.
17 A ¶ DUKE HARTWELL, 40s, fedora, wet shoulders, one hand in his coat, leans in the frame.
18 A He does not smile.
19 D DUKE: Evening.
20 A ¶ Nina doesn't turn.
21 A Her thumb finds the hammer.
22 D NINA: You're late.
23 D DUKE: Traffic.
24 D ROLAND: Duke, don't.
25 D DUKE: Sorry, Roland. The bill's come due.

### SCENE s01385 | EXT. RIVERBANK - ABANDONED MILL - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT MIREILLE DUVAL, PRIVATE OSKAR LINDGREN, WOUNDED SOLDIER, MORTAR
* 1 A ¶ Mist.
* 2 A A rusted waterwheel stands half-sunk in the current.
* 3 A Birdsong where there should be none.
4 A ¶ Three soldiers crouch behind a broken wall.
5 A Mud to the knees.
6 A Eyes red.
7 A ¶ SERGEANT MIREILLE DUVAL, 30s, holds a rifle across her knees and watches the far bank.
8 A ¶ PRIVATE OSKAR LINDGREN, 19, wrings out a sock.
9 A Ruined boots beside him.
10 A ¶ A third figure lies on his back under a tarp, only a hand showing.
* 11 A Breath fogs.
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
* 35 A Hollow.
36 A Oskar nods grimly.
37 D OSKAR (to himself): Three days. Three days since a hot meal.
38 D MIREILLE: Four.
39 D OSKAR: Thank you, Sergeant.
40 A ¶ She almost laughs.
41 A Watches the far bank again.
* 42 A A heron lifts from the reeds and flaps downriver, low over the water.
* 43 A Nothing follows it.
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
* 60 A It's wet.
61 A His face changes.
62 D OSKAR: Sergeant.
63 D MIREILLE: What?
64 D OSKAR: He's bleeding out.
65 A ¶ She looks.
66 A Her jaw sets.
67 A She turns away.
68 A Fingers dig into the stock of the rifle.
* 69 A ¶ The far bank erupts.
* 70 A A MORTAR round shrieks over the water and lands in the mill yard behind them.
* 71 A Brick, mud, black smoke.
72 A ¶ Mireille and Oskar throw themselves flat.
73 A The wounded man gasps.
74 A His hand goes limp.
* 75 A ¶ Another round.
* 76 A Closer.
* 77 A The wall they hide behind splits down the middle.
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

### SCENE s01386 | INT. GLOBEX PACKAGING - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): REGIONAL VP BARRETT HOLLOWAY, PRIYA NANDAKUMAR, TOBY ABERNATHY-LIU, CAROL ENGSTROM
* 1 A ¶ Beige cubicles.
* 2 A A ficus dying with dignity.
* 3 A A banner reading SYNERGY STARTS WITH YOU.
4 A ¶ REGIONAL VP BARRETT HOLLOWAY, 50s, stands at a whiteboard with a marker he is holding wrong.
5 A Around him: PRIYA NANDAKUMAR, 30s, analyst, spiral notebook; TOBY ABERNATHY-LIU, 20s, intern, tie knotted like a shoelace; and CAROL ENGSTROM, 60s, receptionist, knitting at her desk without looking up.
6 D BARRETT: Team. Quick huddle. Big news.
7 D PRIYA: Is it layoffs?
8 D BARRETT: It is not layoffs.
9 D TOBY: Is it a reorg?
10 D BARRETT: It's a realignment.
11 D PRIYA: That's a reorg.
12 D BARRETT: It's a reorg with vision.
13 D TOBY: Does vision come with a raise?
14 D BARRETT: Toby, we've talked about the word "raise."
15 D TOBY: You said I could ask.
16 D BARRETT: I said you could think it. Quietly.
17 D CAROL (not looking up): Barrett, line two.
18 D BARRETT: Not now, Carol.
19 D CAROL: It's corporate.
20 D BARRETT: Tell them I'm in a huddle.
21 D PRIYA: He's not in a huddle.
22 D TOBY: ^ Please don't say I'm in a huddle.
23 A ¶ Barrett glares at both of them.
* 24 A The phone rings again.
25 A Carol finally puts down the knitting, answers with a sweet smile, listens, nods, and hangs up.
26 D CAROL: They said the realignment has been realigned.
27 D BARRETT: Meaning?
28 D CAROL: You're the one being laid off.
* 29 A ¶ The ficus drops a leaf.
30 D BARRETT (very calm): Well. That's fantastic news for the team.

### SCENE s01387 | EXT. FLOATING MARKET OF BELLS - DUSK
Detected names (may be incomplete or contain aliases): ILSEBETH CROWE, TALLIS ARVEN
* 1 A ¶ A market built on rafts lashed together across a slow green river, each stall hung with a thousand tiny bells that ring in the evening wind.
* 2 A Lanterns drift on the water.
* 3 A The air tastes of cinnamon and wet rope.
* 4 A ¶ At the center of the flotilla, a single raft has gone quiet.
* 5 A Its awning sags.
* 6 A Its bells hang unmoving, as though holding their breath.
7 A ¶ ILSEBETH CROWE, 40s, in a coat stitched from sailcloth, stands at its edge with a long pole.
8 A Across the water-gap, a smaller raft drifts nearer, poled by TALLIS ARVEN, 20s, barefoot, his hair full of salt.
9 D ILSEBETH (to herself): Steady. Steady.
10 A ¶ She braces.
* 11 A The raft thumps against hers.
12 A Tallis catches a rope and ties it off with the careless speed of one who has done it ten thousand times.
13 D TALLIS: Evening, Captain.
14 D ILSEBETH: Not Captain anymore.
15 D TALLIS: That's not what the river says.
16 D ILSEBETH: The river doesn't say anything.
17 D TALLIS: It says plenty. You just don't listen.
18 A ¶ She turns to the crowd gathered on the neighboring decks.
19 A Fishwives, tinkers, a juggler stilled mid-toss, a child on a father's shoulders.
20 A All watching.
21 D ILSEBETH (to all): Good people of the Bells. A word.
22 A ¶ The crowd murmurs.
* 23 A A bell somewhere rings once, and falls silent.
24 D ILSEBETH [CONT'D]: The river is dropping. Six inches since dawn. The old channel closes in three days.
25 A ¶ Gasps.
26 A Someone drops a basket.
27 D ILSEBETH [CONT'D]: We can wait for rain. Or we can leave tonight.
28 A ¶ A woman near the front calls out.
29 A Ilsebeth lifts a hand.
30 D ILSEBETH [CONT'D]: No. I won't ask you to follow me. I'll ask you to choose.
31 A ¶ She turns, back to Tallis, and lowers her voice.
32 D ILSEBETH [CONT'D] (quiet): Did the ferrymen come?
33 D TALLIS: Yes.
34 D ILSEBETH: How many?
35 D TALLIS: Nine. They'll tow us as far as the weir.
36 D ILSEBETH: And past it?
37 D TALLIS: Past it, we're on our own.
38 A ¶ She nods.
39 A Looks at the water for a long time.
40 A Then she looks up at the awning where the bells hang motionless.
41 D ILSEBETH (muttering): Strange. They always ring when I lie.
42 D TALLIS: Maybe you're not lying.
43 D ILSEBETH: Maybe I'm not.
44 A ¶ She lifts the pole.
45 A Sets it against the planks.
46 A Pushes.
47 A ¶ Across the market, one by one, the ropes are cast off.
* 48 A The bells begin to ring, a slow wave that runs along the whole flotilla, lantern to lantern, raft to raft, until the entire river sings.
49 D TALLIS (grinning): There it is.
50 A ¶ Ilsebeth does not smile.
51 A But she stands straighter, and her hands, on the pole, are steady.

### SCENE s01388 | INT. TELEGRAPH OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): YOUNG OPERATOR, SOUNDER, COLONEL
* 1 A ¶ 1862.
* 2 A A lamp burns low.
* 3 A Wires hum along the ceiling.
* 4 A A key clatters on the desk.
5 A ¶ A YOUNG OPERATOR, 20s, in sleeve garters and a green eyeshade, hunches over the key.
6 A He is the only one in the room.
7 A He taps back an answer, grinning at whatever comes in.
* 8 A ¶ A SOUNDER chatters.
9 A He copies fast.
10 A Reads aloud.
11 D OPERATOR: "Mother recovering. Come home Sunday." Well, that's a relief.
12 A ¶ He taps a reply.
* 13 A Paper curls beneath his fingers.
* 14 A Then the sounder changes tempo.
* 15 A Slow.
* 16 A Cold.
17 A He freezes and copies each letter as it comes.
18 D OPERATOR [CONT'D]: "Enemy cavalry crossing at Harper's Ford. Hold for orders."
19 A ¶ He pulls the paper loose.
20 A Stands.
21 A Sits again.
22 A He reads it over, mouthing the words.
* 23 A ¶ The line crackles.
* 24 A A new voice, ghostly, through the speaker of an experimental telephone beside the key.
25 D COLONEL [V.O.] (over line): Operator! Report!
26 A ¶ He lunges for the receiver, nearly knocking the lamp.
27 D OPERATOR: Sir! Message from Harper's Ford! They've crossed!
28 D COLONEL [V.O.] (over line): How many?
29 D OPERATOR: It doesn't say, sir!
30 D COLONEL [V.O.] (over line): Then find out, son!
31 A ¶ Shaking, he taps.
32 A Waits.
* 33 A The sounder is silent.
34 A He taps again.
* 35 A Silent.
* 36 A ¶ The lamp gutters.
37 A ¶ He sets down the receiver, very gently, and sits with his hands flat on the desk.
38 A After a long moment he speaks without turning.
39 D OPERATOR: Whoever you are on the other end... I hope you ran.
* 40 A ¶ The wire hums on, empty.

### SCENE s01389 | EXT. LAKESIDE DOCK - LATE SUMMER DUSK
Detected names (may be incomplete or contain aliases): JUNE, BAPTISTE, MALCOLM OKONKWO-REYES, NADIA FARHAT, SPUD, KOWALSKI, ROSALIND, ROMILLY PETERS
* 1 A ¶ A weathered dock stretches into a still lake.
* 2 A Mosquitoes hang in gold light.
3 A At the shore end, a bonfire has burned down to red embers, and six teenagers sit in a ragged arc around it, the last evening of the last summer before everything changes.
4 A ¶ JUNIPER "JUNE" BAPTISTE, 17, sits at the dock's far end with her feet in the water, a paperback face-down beside her.
5 A She watches the horizon as though waiting for it to say something.
6 A ¶ At the fire, MALCOLM OKONKWO-REYES, 18, strums a guitar missing a string.
7 A NADIA FARHAT, 17, sprawls on a cooler, eating marshmallows straight from the bag.
8 A BEN "SPUD" KOWALSKI, 16, builds a precarious tower of empty cans.
9 A The twins, ROSALIND and ROMILLY PETERS, 16, share a blanket, whispering, identical down to the chipped nail polish.
* 10 A ¶ No one has said what they are all thinking.
* 11 A Every few minutes, someone almost does, and the moment passes.
12 D NADIA (through marshmallow): We should do something.
13 D MALCOLM: We are doing something.
14 D NADIA: Sitting is not doing.
15 D SPUD: I'm doing architecture.
16 D ROSALIND: It's a can tower.
17 D SPUD: It's a monument.
18 D ROMILLY: To what?
19 D SPUD: To us.
* 20 A ¶ Quiet.
* 21 A The guitar strums a flat chord.
22 A Somebody laughs, a short and exhausted laugh, and then the embers pop.
23 A ¶ June stands.
24 A She pads along the dock toward them, wet footprints darkening the boards.
25 A She stops at the edge of the firelight.
26 D JUNE: I leave Thursday.
* 27 A ¶ Nobody speaks.
* 28 A The tower of cans collapses with a clatter.
29 A Spud doesn't flinch.
30 D MALCOLM: Thursday?
31 D JUNE: My mom moved it up.
32 D NADIA: You said Saturday.
33 D JUNE: I know what I said.
34 A ¶ She sits on the cooler's edge.
35 A Takes a marshmallow from Nadia's bag, rolls it in her fingers, doesn't eat it.
36 D ROMILLY: Where is it again?
37 D JUNE: Portland.
38 D ROSALIND: That's not so far.
39 D JUNE: It's three states.
40 D ROSALIND: That's not so far.
41 A ¶ Malcolm sets the guitar aside.
42 A He looks at the ground.
43 A His hands are trembling a little, and he buries them between his knees.
44 D MALCOLM: We could drive up. Visit.
45 D JUNE: You don't have a car.
46 D MALCOLM: Spud has a car.
47 D SPUD: I have a bicycle.
48 D NADIA: You have a lawn mower you ride.
49 D SPUD: It's a very good lawn mower.
50 A ¶ They laugh.
* 51 A It dies quickly.
52 A June squeezes the marshmallow into a pale pellet and lets it fall.
53 D JUNE: I'm not good at this.
54 D ROMILLY: Nobody is.
55 D JUNE: I thought I'd have something to say.
56 D NADIA (gently): You don't have to.
57 A ¶ June nods.
58 A She wipes her face with the heel of her hand.
59 A Rosalind and Romilly lift the blanket and open it.
60 A June crawls in between them and they close it again, a single bundle of knees and tangled hair.
61 A ¶ Malcolm picks up the guitar.
62 A Finds the one chord he knows.
63 A Plays it, over and over, not well.
* 64 A ¶ The fire sinks lower.
* 65 A Across the lake, the last light bleeds out of the sky and a single loon calls once.
* 66 A Nobody answers it.

### SCENE s01390 | INT. ARBITRATION HALL - ANTEROOM - MORNING
Detected names (may be incomplete or contain aliases): PATRICIA OYELARAN-WEISS, DESHAWN MCALLISTER, ARTHUR KESSLER-BOYD, LOUISE FAIRCHILD, BAILIFF, MARGUERITE DELACROIX
* 1 A ¶ A cramped waiting room.
* 2 A Five plastic chairs.
* 3 A A water cooler gurgling.
4 A ¶ PATRICIA OYELARAN-WEISS, 40s, litigator, rehearses an opening to the wall.
5 A Beside her, her junior, DESHAWN MCALLISTER, 20s, sorts exhibits with shaking hands.
6 D PATRICIA (to Deshawn): Breathe.
7 D DESHAWN: I am.
8 D PATRICIA: Out. Not in.
9 A ¶ Across the room, ARTHUR KESSLER-BOYD, 60s, opposing counsel, doesn't look up from his phone.
10 A His client, LOUISE FAIRCHILD, 50s, grips her purse.
11 D LOUISE (muttering): It'll be fine, it'll be fine.
* 12 A ¶ The door swings open.
13 A A BAILIFF enters.
14 A ¶ MARGUERITE DELACROIX, 70s, silver bob, black robe, strides in behind him, and everybody stands.
15 D MARGUERITE (to the room): Sit. All of you.
16 A ¶ They sit.
17 A She remains standing.
18 A Opens a file.
19 D MARGUERITE [CONT'D]: Counsel. Before we begin, someone has been shredding documents.
20 A ¶ Arthur's phone slips.
21 A Louise stops breathing.

### SCENE s01391 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): MAMA ROSALIE, TUCKER, BEN, KNOCK, MAN, AMOS
* 1 A ¶ Pancakes burn.
* 2 A Smoke curls from the pan.
3 A ¶ MAMA ROSALIE, 40s, dishtowel on her shoulder, flips the pan.
* 4 A Too late.
* 5 A Black.
6 D MAMA ROSALIE: Boys! Breakfast!
* 7 A ¶ Thundering feet.
8 A TUCKER, 10, and BEN, 8, skid in, socks sliding.
9 D TUCKER: It's on fire!
10 D BEN: It's not on fire. It's crispy.
11 D MAMA ROSALIE: Sit.
12 A ¶ They sit.
13 A Tucker pokes a pancake with a fork.
* 14 A It crunches.
* 15 A ¶ A KNOCK at the screen door.
16 A Everyone stops.
17 A ¶ A MAN in a rumpled suit stands on the porch, hat in hand, a battered suitcase at his feet.
18 A Forty-ish, kind eyes, sunburned nose.
19 D MAN: Morning, folks.
20 A ¶ Mama Rosalie's face goes slack.
21 D MAMA ROSALIE: Amos?
22 D TUCKER: Who's that?
23 A ¶ The man steps inside.
24 A Sets down the suitcase.
25 D AMOS: Hello, Tuck.
26 A ¶ Tucker slides off his chair.
27 A Edges behind his mother.
28 D BEN: Is that Daddy?
29 A ¶ Amos kneels, arms open.
30 A Ben looks at his mother.
31 A She nods, barely.
32 A He runs.

### SCENE s01392 | INT. PROBATE COURT - CHAMBERS - DAY
Detected names (may be incomplete or contain aliases): JUDGE ELEANOR VANDERHOOF, BRAXTON WHITCOMBE, CLEMENTINE WHITCOMBE-ADAMS, HORACE PINKNEY, ODETTE LAURENT, FINN HARGROVE
* 1 A ¶ A paneled room that smells of lemon polish and old paper.
* 2 A Bookshelves climb to the ceiling, heavy with leather volumes no one has opened in decades.
* 3 A A radiator knocks in the corner.
* 4 A Through a tall window, bare maples shiver against a gray sky.
5 A ¶ JUDGE ELEANOR VANDERHOOF, 70s, sits behind a walnut desk with her glasses pushed to the top of her head.
6 A Before her, the five heirs of the Whitcombe estate perch on mismatched chairs: the eldest, BRAXTON WHITCOMBE, 50s, in a tailored suit; his sister, CLEMENTINE WHITCOMBE-ADAMS, 40s, twisting a rope of pearls; the lawyer, HORACE PINKNEY, 60s, sweating in tweed; a cousin, ODETTE LAURENT, 30s, silent; and a young man, FINN HARGROVE, 20s, who has just been revealed as the old man's secret son.
7 D ELEANOR: The will is clear.
8 D BRAXTON: Which one?
9 D ELEANOR: The last one.
10 D CLEMENTINE: There was no last one.
11 D HORACE: There was.
12 D BRAXTON: ^ There was not!
13 D CLEMENTINE: ^ Horace, you assured us!
14 A ¶ The judge raises one finger.
15 A The room obeys.
16 D ELEANOR: Mr. Pinkney. Produce it.
17 A ¶ He opens his briefcase with trembling hands and draws out a single cream envelope.
18 A ¶ Odette, in the corner, finally looks up.
19 A Her eyes meet Finn's.
20 A She gives the faintest nod.

### SCENE s01393 | INT. SAFE HOUSE - BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): AGENT NADEZHDA KOVACS, LUCIEN BRASSARD, TAVITA SEFO, MARGOT FENWICK, UNKNOWN MALE, HANDLER
* 1 A ¶ A bare concrete room.
* 2 A A table, six folding chairs, a bank of dead monitors.
* 3 A A phone sits in the center on speaker.
4 A ¶ AGENT NADEZHDA KOVACS, 40s, at the head.
5 A LUCIEN BRASSARD, 50s, beside her.
6 A Across, three more: TAVITA SEFO, 30s; MARGOT FENWICK, 60s; and a nervous young man in a stolen hoodie, UNKNOWN MALE, 20s, who has not given a name.
7 D HANDLER [V.O.] (over speaker): Status.
8 D NADEZHDA: All present. The package is secure.
9 D HANDLER [V.O.] (over speaker): Is he talking?
10 D NADEZHDA: Not yet.
11 D HANDLER [V.O.] (over speaker): Make him.
12 A ¶ She mutes the line.
13 A Turns to the young man.
14 D NADEZHDA [CONT'D]: They won't wait much longer. You understand that.
15 D UNKNOWN MALE: I understand I didn't do anything.
16 D LUCIEN: Everyone in this room did something.
17 D UNKNOWN MALE: I drove a car.
18 D MARGOT: To where?
19 D UNKNOWN MALE: A warehouse. Pier nine. I didn't ask what was inside.
20 D TAVITA: Who told you to drive?
21 D UNKNOWN MALE: A guy. Short. Gold tooth.
22 D NADEZHDA: His name?
23 D UNKNOWN MALE: Dmitri. Everybody called him Dmitri.
24 D LUCIEN: Dmitri Volkov.
25 D UNKNOWN MALE: That's him.
26 A ¶ Lucien and Nadezhda exchange a look.
27 A Margot rises and pours water into a paper cup, sets it in front of the boy.
28 D MARGOT: Drink.
29 D TAVITA: Tell us about the pier.
30 D UNKNOWN MALE: There were crates. Eight. Stenciled with a bird.
31 D NADEZHDA: What kind of bird?
32 D UNKNOWN MALE: A heron. No. A crane.
33 D LUCIEN: Crane.
34 D UNKNOWN MALE: And there was a woman.
35 D NADEZHDA: Describe her.
36 D UNKNOWN MALE: Red coat. She never spoke. Dmitri was scared of her.
* 37 A ¶ The phone crackles.
38 A Nadezhda unmutes.
39 D HANDLER [V.O.] (over speaker): Kovacs. We have a name.
40 D NADEZHDA: Go ahead.
41 D HANDLER [V.O.] (over speaker): The woman in the red coat. Margot Fenwick.
* 42 A ¶ Silence.
43 A Everyone turns.
44 A ¶ Margot sets down the pitcher.
45 A Folds her hands.
46 A Smiles, almost tenderly.
47 D MARGOT: Oh, dear.

### SCENE s01394 | INT. HOSPITAL - NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): AMARA ESEOGHENE, CHARGE NURSE LEOPOLDO FIGUEROA
* 1 A ¶ Dim amber light.
* 2 A Incubators in a long row, each one a small glowing aquarium.
* 3 A Monitors beep in soft, uneven rhythm.
4 A ¶ DR. AMARA ESEOGHENE, 30s, in scrubs and clogs, charts at the central station.
5 A She has been awake for twenty hours and carries it well.
6 A ¶ CHARGE NURSE LEOPOLDO FIGUEROA, 50s, silver at the temples, wheels a cart down the aisle.
7 D LEOPOLDO: Bed six is fussing.
8 D AMARA: Her sats?
9 D LEOPOLDO: Ninety-one. Dropping a little.
10 D AMARA: Bring me the suction.
11 A ¶ He wheels it over.
12 A She leans into the incubator, gentle hands, and clears the tiny airway.
* 13 A The monitor steadies.
14 D AMARA [CONT'D]: There. Good girl.
15 D LEOPOLDO: Dr. Eseoghene.
16 D AMARA: Mm.
17 D LEOPOLDO: Bed three.
18 A ¶ She glances across.
* 19 A Bed three's alarm has started a quiet chirp.
* 20 A The numbers there are climbing.
* 21 A Not the right way.
22 D AMARA: Heart rate?
23 D LEOPOLDO: One-eighty.
24 D AMARA: Temperature?
25 D LEOPOLDO: Thirty-eight point four.
26 A ¶ She is already moving.
27 A Pulls the stethoscope from her neck, bends over the incubator.
28 D AMARA: He's septic. Cultures now, and start the antibiotics.
29 D LEOPOLDO: Which?
30 D AMARA: Ampicillin and gentamicin. Standard.
31 D LEOPOLDO: Dosing?
32 D AMARA: Weight-based. Check the chart.
33 A ¶ Leopoldo hesitates.
34 A His voice is very quiet.
35 D LEOPOLDO: Doctor. The mother is on the phone.
36 D AMARA (not turning): Tell her we're doing everything.
37 D LEOPOLDO: She's asking for a priest.
38 A ¶ Amara stops.
39 A Slowly straightens.
* 40 A The monitor beeps.
41 D AMARA: Call chaplaincy.
42 D LEOPOLDO: Already did.
43 A ¶ They both speak at once.
44 D AMARA: Get the dose.
45 D LEOPOLDO: ^ Prepare the line.
46 A ¶ They look at one another.
47 A Amara nods, and together they bend over the tiny crib.

### SCENE s01395 | INT. CLOCKTOWER - MECHANISM ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOMASZ REDDING, DISPATCHER, LEONIDAS PARK, MIRA VASQUEZ-TANAKA
* 1 A ¶ Brass gears the size of cartwheels grind overhead.
* 2 A Pendulum weights swing in the dark.
* 3 A A single caged lamp throws shadows across oak beams.
4 A ¶ TOMASZ REDDING, 40s, ex-cop, rain-soaked, hunches over a battered radio on a workbench.
5 A He twists the dial.
* 6 A Static.
* 7 A A woman's voice breaks through, thin and urgent.
8 D DISPATCHER [V.O.] (over radio): Redding, are you in position?
9 D TOMASZ: Three flights up. It's colder than a morgue.
10 D DISPATCHER [V.O.] (over radio): Is the package there?
11 A ¶ He scans the room.
* 12 A A steel case sits in the shadow beneath the great gear.
13 A He crosses and lifts it.
* 14 A Heavier than it looks.
15 D TOMASZ: Got it.
16 D DISPATCHER [V.O.] (over radio): Don't open it.
17 D TOMASZ: Wasn't going to.
18 D DISPATCHER [V.O.] (over radio): Redding. Someone knows you're there.
19 A ¶ Tomasz freezes.
20 A Slowly sets the case down.
21 A Draws a pistol from his coat, thumbs the safety.
* 22 A ¶ The trapdoor in the floor creaks.
23 A A hand appears on the rim, then a head.
24 A He aims.
25 A Does not fire.
26 A ¶ LEONIDAS PARK, 30s, climbs up out of the stairwell in a delivery uniform, breathing hard, both hands raised.
27 A He is soaked to the skin.
28 D LEONIDAS: Don't shoot. I work here.
29 D TOMASZ: At midnight?
30 D LEONIDAS: Maintenance. Somebody has to oil the gears.
* 31 A ¶ From the dark beyond the pendulum, a woman's laugh.
32 A ¶ MIRA VASQUEZ-TANAKA, 30s, in a black raincoat, steps from behind a beam.
33 A She holds a small silver gun, steady as a surgeon.
34 A She is smiling.
35 D MIRA: That's very good, Leo.
36 A ¶ Leonidas lowers his hands.
37 A Smiles back.
38 A He turns to Tomasz.
39 D LEONIDAS: Sorry, friend.
40 D TOMASZ (to the radio): Dispatcher. You hearing this?
* 41 A ¶ Static.
* 42 A Nothing.
43 A The radio has been switched off, and somewhere in the shadows, Mira's thumb rests on a small black remote.
* 44 A ¶ The great gear above them shifts and drops one tooth.
* 45 A The whole tower shudders.

### SCENE s01396 | INT. FAMILY MINIVAN - PARKED OUTSIDE AN AMUSEMENT PARK - DAY
Detected names (may be incomplete or contain aliases): LORENZO CASTELLANOS, ABIGAIL, PEPPER
* 1 A ¶ Hot sun on the windshield.
* 2 A A cooler on the back seat.
* 3 A A crumpled map with a coffee ring.
* 4 A The air conditioner wheezes.
5 A ¶ LORENZO CASTELLANOS, 40s, in the driver's seat, grips the wheel and stares ahead.
6 A His wife, ABIGAIL, 40s, sits beside him with a crossword she is not doing.
7 A In the back, their daughter, PEPPER, 11, kicks the seat in front of her in steady, bored rhythm.
8 D PEPPER: Are we going in?
9 D LORENZO: In a minute.
10 D PEPPER: You said that ten minutes ago.
11 D LORENZO: And I meant it ten minutes ago.
12 A ¶ Abigail glances at him.
13 A Says nothing.
14 A She taps her pencil on the page.
15 D PEPPER: Mom, are we going in?
16 D ABIGAIL: Your father is thinking.
17 D PEPPER: About what?
18 D ABIGAIL: About whether we can afford it.
19 D LORENZO: That's not what I said.
20 D ABIGAIL: It's what you meant.
21 D LORENZO: I meant I'd like a minute.
22 D ABIGAIL: You've had eleven.
23 A ¶ He releases the wheel.
24 A She sets down the crossword.
25 A Pepper stops kicking.
26 D PEPPER: Is something wrong?
27 D LORENZO: No.
28 D ABIGAIL: Yes.
29 A ¶ Lorenzo shoots her a look.
30 A She holds it.
31 D ABIGAIL [CONT'D]: She's old enough.
32 D LORENZO: She's eleven.
33 D ABIGAIL: She's eleven and she has eyes.
34 D PEPPER: What's going on?
35 D LORENZO: Nothing's going on. Daddy just lost his job on Tuesday.
* 36 A ¶ Silence.
* 37 A The air conditioner wheezes.
38 A Pepper's face goes very still.
39 D PEPPER: Oh.
40 D LORENZO: It's going to be fine.
41 D PEPPER: Did you do something?
42 D LORENZO: No. They closed the whole plant.
43 D PEPPER: Everyone?
44 D LORENZO: Everyone.
45 D PEPPER: So it wasn't you.
46 D LORENZO: It wasn't me.
47 A ¶ Pepper nods.
48 A Studies her hands.
49 A After a beat she unbuckles, climbs between the front seats, and wedges herself into the gap, pressing her head against his shoulder.
50 D PEPPER: Can we still go in?
51 D LORENZO: We have the tickets.
52 D ABIGAIL: We paid for them in March.
53 D PEPPER: Then it's free.
54 D LORENZO: That's not how that works.
55 D PEPPER: It's how it works for me.
56 A ¶ He starts to laugh.
57 A It's cracked, half a sob, and Abigail puts a hand on his arm.
58 A Pepper looks between them.
59 D PEPPER [CONT'D]: Dad, are you crying?
60 D LORENZO: No. I'm sweating. It's hot.
61 D PEPPER: You're crying.
62 D LORENZO: A little.
63 A ¶ She wipes his cheek with her sleeve.
64 A He lets her.
65 A Abigail drops her head back against the seat and laughs, wet and helpless.
66 D ABIGAIL: All right. Everyone out.
67 D LORENZO: What about the cooler?
68 D ABIGAIL: Leave it.
69 D PEPPER: Can I ride the big one?
70 D LORENZO: The big one?
71 D PEPPER: The one with the loop.
72 D LORENZO: You're not tall enough.
73 D PEPPER: I'll stand on my toes.
74 D LORENZO: They measure at the ankle.
75 D PEPPER (grinning): Then I'll cheat.
76 A ¶ The three of them clamber out.
* 77 A The doors slam.
78 A Pepper takes off across the lot at a dead run.
79 A Lorenzo and Abigail follow, side by side, his hand reaching for hers.
80 A ¶ Halfway there, Abigail stops dead.
81 A Turns.
82 D ABIGAIL: Did you lock the van?
83 A ¶ Lorenzo looks at the keys.
84 A At the van.
85 A Back at her.
86 D LORENZO: Does it matter?
87 A ¶ She thinks about it.
88 A Starts to laugh again, and they run after their daughter, leaving the minivan wide open under the sun.

### SCENE s01397 | INT. GRANDMOTHER'S ATTIC - EVENING
Detected names (may be incomplete or contain aliases): HAZEL, GUS, RAFAELA, GRANDMA
* 1 A ¶ Dust motes in slanted light.
* 2 A Steamer trunks, a dress form, a rocking horse missing one ear.
3 A ¶ HAZEL, 12, rummages through a trunk with fierce concentration.
4 A Behind her, her little brother GUS, 6, hides under a sheet draped over a chair.
5 A A third figure, their cousin RAFAELA, 14, leans in the doorway with her arms folded.
6 D HAZEL (to herself): It has to be here.
7 A ¶ She pulls out a lace shawl.
8 A Tosses it.
* 9 A A feather boa.
* 10 A A sock.
11 D RAFAELA: Grandma said not to touch anything.
12 D HAZEL: She said not to break anything.
13 D RAFAELA: Same thing.
14 D HAZEL: It really isn't.
* 15 A ¶ The sheet rustles.
16 A Gus peeks out.
17 D GUS (to all of them): I'm a ghost.
18 D HAZEL: You're a pest.
19 D GUS: Boo.
20 D RAFAELA: Gus, come out of there.
21 A ¶ He doesn't.
22 A She steps over.
23 A Lifts a corner of the sheet.
24 A He squeals and swats her hand away.
25 A ¶ Hazel finds it.
* 26 A A small tin box, rusted at the hinge.
27 A She holds it up to the light, breathing hard.
28 D HAZEL: Got it.
29 D RAFAELA: Don't open it.
30 D HAZEL: Why not?
31 D RAFAELA: Because she'll know.
32 D HAZEL (muttering): She already knows everything.
33 A ¶ Hazel pries it open.
* 34 A Inside, folded neatly, a stack of old letters tied with a faded ribbon.
35 A She lifts the top one.
36 A Reads the first line.
37 A Her eyes widen.
38 A ¶ She looks up.
39 A Gus is silent under his sheet.
40 A Rafaela has stopped moving.
* 41 A ¶ From downstairs, a voice calls up, warm and unhurried.
42 D GRANDMA [O.S.]: Children? Dinner!
43 A ¶ All three freeze.
44 A Hazel snaps the tin shut.

### SCENE s01398 | EXT. RAILWAY CUTTING - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN HALVARD STRAND, CORPORAL IBRAHIM DAOUD, PRIVATE LENKA VESELY, FRITZ, ACKERMANN, PRISONER, SERGEANT MAEVE O'DONNELL, ANSELM
* 1 A ¶ Frost on the ballast.
* 2 A A burned-out locomotive lies on its side across the tracks, still ticking as the metal cools.
* 3 A Moonlight on the rails.
4 A ¶ A squad of six crouches in the lee of the wreck.
5 A CAPTAIN HALVARD STRAND, 40s, kneels with a map held under a red-filtered torch.
6 A CORPORAL IBRAHIM DAOUD, 30s, scans the embankment through a rifle scope.
7 A PRIVATE LENKA VESELY, 20s, holds a radio handset to her ear and mouths silent words.
8 A FRIEDRICH "FRITZ" ACKERMANN, 20s, a stretcher-bearer, wraps a bandage around the thigh of a gaunt figure who has not spoken since they found him in the mud: a PRISONER in a torn gray coat.
9 A SERGEANT MAEVE O'DONNELL, 50s, the oldest of them, rolls a cigarette she will not light and watches the prisoner's hands.
10 D HALVARD: Three kilometers to the bridge.
11 D IBRAHIM: They'll have it covered.
12 D HALVARD: They'll have everything covered.
13 A ¶ Lenka lowers the handset.
14 A Shakes her head.
* 15 A No signal.
16 D MAEVE (to herself): Of course there isn't.
17 A ¶ The prisoner lifts his head.
18 A Looks at Maeve for the first time.
19 A His eyes are pale and amused.
20 D PRISONER: You will not make the bridge.
21 D FRITZ: He talks.
22 D HALVARD: Quiet.
23 D PRISONER: I can lead you. A shorter way.
24 D HALVARD: Why would you?
25 D PRISONER: My name is Anselm. I was a railwayman. This line was mine.
26 A ¶ Halvard folds the map.
27 A Studies the man.
28 A Looks to Maeve, who gives the smallest shrug.
29 D ANSELM: There is a service tunnel. Under the cutting. It comes out two hundred meters from the bridge.
30 D IBRAHIM: It's a trap.
31 D ANSELM: It is a tunnel.
32 D LENKA: Captain, I'd rather trust him than the road.
33 D HALVARD: You'd rather trust a man in a German coat.
34 D ANSELM: It is not a German coat.
35 D HALVARD: Then whose is it?
36 D ANSELM: Mine.
37 A ¶ Maeve lights the cigarette after all.
38 A Draws on it once, hands cupped around the ember.
39 A Exhales slowly.
40 D MAEVE: Let him lead.
41 D HALVARD: Sergeant.
42 D MAEVE: If he walks us into a gun, I shoot him first.
43 D ANSELM: That is fair.
44 A ¶ Halvard folds the torch away.
45 A Rises.
46 A The squad rises with him, silent, shouldering packs and weapons.
47 A Fritz hauls Anselm to his feet, and the prisoner, limping, leads the line down the embankment toward a small round hole in the rock.
48 A ¶ At its mouth, he turns back to the group and, for the first time, smiles.

### SCENE s01399 | INT. SNOW CAVE - NIGHT
Detected names (may be incomplete or contain aliases): CALLUM TREMBLAY, INGRID VOSSBERG, SEUN, ADEYEMI
* 1 A ¶ A hollow dug into a drift, barely large enough for three.
* 2 A The roof glows faintly blue from a single stub of candle.
* 3 A Condensation drips from an icicle fringe.
* 4 A ¶ Packs, ropes, a dented stove.
* 5 A The wind sounds like a distant crowd.
6 A ¶ CALLUM TREMBLAY, 40s, expedition leader, frost in his beard, lies propped against the wall with his leg stretched awkwardly before him, wrapped in a sleeping bag.
7 A He has the calm of a man who has already made peace with something.
8 A ¶ INGRID VOSSBERG, 30s, climber, her jacket half open and her face raw from wind, sits cross-legged, melting snow in a tin cup over the flame.
9 A ¶ OLUWASEUN "SEUN" ADEYEMI, 20s, the youngest, hugs his knees in the corner, eyes huge, a ski mask pulled up over his forehead.
10 D CALLUM: How long was I out?
11 D INGRID: Four hours.
12 D CALLUM: Feels like four minutes.
13 D INGRID: That's the cold. It lies.
14 D CALLUM: Seun. You all right?
15 D SEUN: I'm fine.
16 D CALLUM: You're a terrible liar.
17 D SEUN: I'm cold.
18 D CALLUM: Everybody's cold.
19 D INGRID: Drink this.
20 A ¶ She hands Callum the tin cup.
21 A He sips.
22 A Passes it to Seun, who drinks and coughs.
23 D CALLUM: We had a good summit.
24 D INGRID: We did.
25 D CALLUM: The light at the top.
26 D INGRID: I saw it.
27 D SEUN: I didn't. I had my eyes closed.
28 D CALLUM: For the whole thing?
29 D SEUN: For most of it.
30 A ¶ Callum laughs, and it turns into a cough.
31 A Ingrid waits it out.
* 32 A The candle flickers.
33 D CALLUM: Listen. If the weather holds, you two go down at first light.
34 D INGRID: We all go down.
35 D CALLUM: I'm slowing you.
36 D INGRID: You're our leader.
37 D CALLUM: Which is why I'm telling you.
38 D SEUN: No.
39 D CALLUM: Seun--
40 D SEUN: I'm not leaving you.
41 D CALLUM: That's not a decision you get to make.
42 D SEUN: Watch me.
* 43 A ¶ A beat.
44 A Callum studies him with something like pride.
45 D CALLUM: Where did you find this one, Ingrid?
46 D INGRID: A bus station in Nairobi.
47 D CALLUM: Good bus station.
48 D SEUN: It was a good bus.
* 49 A ¶ The candle gutters.
50 A Ingrid shields it with her palm.
51 A The three of them watch the little flame in silence, and outside the wind drops, for the first time in hours, to almost nothing.

### SCENE s01400 | INT. FUNERAL HOME - VIEWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): THEODORA ACHTERBERG, GABRIEL ACHTERBERG, SEBASTIAN ACHTERBERG, MAEVE KIRWAN-SOTO, ARCHIBALD PELLEGRINI
* 1 A ¶ Pale carpet, folding chairs in rows, a coffin at the front under a spray of white lilies.
* 2 A Muffled organ music from a hidden speaker.
* 3 A A table of finger sandwiches no one has touched.
4 A ¶ THEODORA ACHTERBERG, 60s, black dress, stands at the casket with one hand on its edge, her face composed in the way of someone who has practiced.
5 A Her sons stand apart: the elder, GABRIEL ACHTERBERG, 40s, rigid in a dark suit, jaw clenched, by the guest book; the younger, SEBASTIAN ACHTERBERG, 30s, unshaven, tie askew, near the exit with his phone in his hand.
6 A In the second row, a stranger in a rain-soaked coat, MAEVE KIRWAN-SOTO, 30s, sits very straight with a toddler asleep against her shoulder.
7 A And at the back, leaning on a cane, the old family friend ARCHIBALD PELLEGRINI, 80s, watches them all with milky, intelligent eyes.
8 A ¶ Sebastian glances at the stranger, and at the toddler.
9 A Gabriel follows his gaze and the muscle in his cheek jumps.
10 A Theodora does not turn her head.
11 A She smooths a ribbon on the casket with her thumb, and her other hand drifts to the edge of the lilies, crushing a petal between two fingers.
12 D GABRIEL: Who invited her?
13 D SEBASTIAN: Nobody.
14 D GABRIEL: She can't be here.
15 D SEBASTIAN: She's already here, Gabe.
16 A ¶ Gabriel crosses the aisle in three long strides.
17 A Maeve looks up, calm.
18 A The child stirs and settles.
19 D GABRIEL: I'm going to have to ask you to leave.
20 D MAEVE: I came to pay respects.
21 D GABRIEL: You didn't know him.
22 D MAEVE: I did.
23 D GABRIEL (low): Not like that.
24 D MAEVE: Exactly like that.
25 A ¶ Theodora crosses the room, heels silent on the carpet.
26 A She stops between them.
27 A Looks at Maeve, then at the toddler, a long and unreadable look, and then she touches the child's hair with the back of one finger.
28 D THEODORA: What is her name?
29 D MAEVE: Dorothea.
30 A ¶ Theodora closes her eyes.
31 A When she opens them, they are wet and furious and kind all at once.
32 D THEODORA: After his mother.
33 D GABRIEL: ^ Mother, don't.
34 D SEBASTIAN: ^ Mom, let it go.
35 D THEODORA (to the room): Sit down. All of you.
36 A ¶ They sit, one by one.
37 A Archibald, by the door, lowers himself slowly into a chair and sets his cane across his knees.
* 38 A The organ music swells and then fades.
39 A Theodora takes the empty seat beside Maeve, and puts her arm around the sleeping child's back.

### SCENE s01401 | EXT. MOUNTAIN PASS - GUN POSITION - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN YEVGENY ROSTOV, LIEUTENANT BEATRIZ SALAZAR, SERGEANT KOFI MENSAH, CORPORAL DALTON PIKE, PRIVATE ANNELIESE VOGT, TOMAS, SHELL
* 1 A ¶ Snow.
* 2 A Rock.
* 3 A A barricade of sandbags.
4 A ¶ CAPTAIN YEVGENY ROSTOV, 40s, fur collar, studies the valley through binoculars.
5 A Beside him, LIEUTENANT BEATRIZ SALAZAR, 30s, cleans a sidearm.
6 A SERGEANT KOFI MENSAH, 40s, shoulders a crate.
7 A CORPORAL DALTON PIKE, 20s, shivers.
8 A PRIVATE ANNELIESE VOGT, 19, chews her lip.
9 A And a boy soldier, TOMAS, 16, grips a radio.
10 D YEVGENY: Quiet.
* 11 A ¶ Wind.
* 12 A A distant engine.
13 D BEATRIZ: They're early.
14 D YEVGENY: They always are.
15 A ¶ Kofi sets down the crate.
16 A Pries it open.
* 17 A Grenades.
18 D KOFI: Dawn special.
19 D DALTON: Can't feel my fingers.
20 D KOFI: Then you'll feel nothing when they hit.
21 D ANNELIESE: That's not funny.
22 D KOFI: It's not meant to be.
23 A ¶ Tomas holds up the radio.
24 A His voice cracks.
25 D TOMAS: Captain! Sir! They say two columns!
26 D YEVGENY: Which flank?
27 D TOMAS: Both!
28 A ¶ Yevgeny lowers the binoculars.
* 29 A The engine grows.
30 D BEATRIZ: We hold.
31 D KOFI: ^ We hold.
32 A ¶ Both look at each other.
33 A A grim, small smile.
* 34 A ¶ A SHELL screams in.
* 35 A White geyser.
* 36 A The barricade rattles.
* 37 A Snow rains down on all of them.
38 A ¶ Dalton throws himself flat.
39 A Anneliese screams.
40 A Tomas drops the radio.
41 A Yevgeny stands, completely still, watching the ridge.
42 D YEVGENY: Positions!
43 A ¶ They scramble.
