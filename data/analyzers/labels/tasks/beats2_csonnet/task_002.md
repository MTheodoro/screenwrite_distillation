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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_csonnet/group_00002.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05065 | INT. SAFEKEEP SELF-STORAGE - UNIT 114 - DAY
Detected names (may be incomplete or contain aliases): LORNA PRESCOTT, WALT PRESCOTT, INES
1 A ¶ ON CAMERA.
2 A A handheld camcorder, the red light blinking.
3 A Orange roll-up door half raised, daylight in a bar across a concrete floor.
4 A Dust in the air.
5 A Boxes.
6 A A dressmaker's mannequin in a 1960s wedding gown yellowed to the colour of tea.
7 A A Singer sewing machine under a quilt.
8 A A record player.
9 A Stacks of Life magazines.
10 A ¶ LORNA PRESCOTT, 60s, cardigan, reading glasses on a chain, stands beside WALT PRESCOTT, 70, her brother, in a windbreaker and a cap that says Korea Veteran, and behind them, filming, INES, 20s, their niece, her sleeves rolled, the camera at her chest.
11 A ¶ Silence.
12 A ¶ Dust.
13 D LORNA (running a finger along the mannequin's sleeve): She'd have hated this lighting.
14 D WALT (not looking up from a box): Everybody hates that lighting. Doesn't mean it's wrong.
15 D INES (from behind the camera, gently): Aunt Lorna, can you say what this is for the tape?
16 D LORNA (sighing, turning to face the lens): This is Mother's wedding dress. Nineteen sixty-two. She made it herself on that machine.
17 A ¶ Nothing.
18 A ¶ A truck outside.
19 A Reversing.
20 D WALT (lifting out a record, reading the sleeve): Patsy Cline. I told you she kept the records.
21 D LORNA (not unkindly): You told me she kept nothing.
22 D WALT (setting it down very carefully): I was wrong about a lot of things in 1985.
23 A ¶ Silence.
24 A ¶ Ines pans, slowly.
25 A A shelf of mason jars.
26 A Buttons.
27 A A tin of thread.
28 A A child's shoe.
29 D INES (softly): Whose is the shoe?
30 D LORNA (after a long moment, picking it up): Mine. I think. Or Walter's. It's too small for either of us now.
31 D WALT (taking it from her hands, turning it over): Mine. See the heel. I wore it down running from Dad.
32 D LORNA (laughing despite herself): You never ran from Dad.
33 D WALT (smiling, not looking at her): Oh, I ran.
34 A ¶ Dust.
35 A Light.
36 D INES (lowering the camera slightly, then raising it again): Should we keep any of it?
37 D LORNA (placing the shoe in her handbag, closing the clasp): That. And the dress.
38 D WALT (nodding, tapping the Singer): And this.
39 D LORNA (wryly): You don't sew.
40 D WALT (grinning): I might start.
41 A ¶ Quiet.
42 A The three of them stand in the bar of daylight, looking at the unit, the long life of one woman in a ten-by-ten room.
43 D INES (whispering): Okay. That's the whole unit. I'm turning it off.
44 D LORNA (reaching toward the lens): Leave it on a minute more.
45 A ¶ The red light blinks.
46 A Nothing happens.
47 A Nothing happens for a very long time.

### SCENE s05067 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): HAL, SORCHA, DEV, NELL, IVO, ROOK
1 A ¶ The minivan idles under a streetlight that has begun, very faintly, to hum a tune nobody in the world has ever written.
2 A It is 2:03 in the morning and HAL is driving six passengers he did not expect, in a car built for five, and the windows are fogged so thickly that the street outside might be anything, a forest, a harbour, the underside of a sleeping animal.
3 A ¶ Hal, 50s, retired bus driver, rubs his eyes.
4 A He took the fare because the app said four passengers and the pickup was a hospital, and hospitals, he has learned, are fine, hospitals do not lie.
5 A Now he sits with his hands at ten and two while the back seats overflow with a fugitive's worth of velvet and moth wings.
6 A ¶ In the back row, SORCHA, 20s, in a long green coat embroidered with tiny silver stars, holds a staff across her lap like a violin case.
7 A Beside her DEV, 30s, in a plain Tshirt, thumbs furiously at his phone.
8 A NELL, a girl of nine or ten with a backpack shaped like a fox, sits between them with her feet not touching the floor.
9 A And in the front passenger seat IVO, a tall man with a face like a closed door, stares out through the fogged glass, and in the cargo space, folded into it with the elegance of a thing that has never needed a seat, ROOK waits, a black-feathered shape with a human face.
10 A ¶ ON PHONE: Dev's screen glows.
11 A "RIDE: Your driver Hal is 4 min away."
12 A Then, below it, "RIDE: Your driver Hal is here."
13 A Then, "RIDE: Rate your trip!"
14 D DEV: Hal, mate, the app says we've arrived. At the. Um. Which kingdom is this?
15 D HAL: Falling Creek Road, I think. Or Falling Creek. It's not like the app is wrong.
16 D SORCHA: The app is never wrong. That is why we trust it.
17 A ¶ A SLAM from the rear of the van.
18 A Everyone jumps.
19 A The cargo door has bounced open on its latch and a gust of cold air full of snowflakes and ash blows through, and Rook snaps it shut with a talon, annoyed.
20 D ROOK: Draft.
21 D NELL (whispering): Is he mad?
22 D DEV: He's always mad. It's his whole thing.
23 A ¶ IVO turns his head at last and the whole van quietens.
24 D IVO: We are late. The gate closes at sunrise. If we're not through it the girl stays here and the girl is the key.
25 D HAL: I'm sorry, the girl is the what?
26 D NELL: Key.
27 D HAL (to himself): I should've gone home at midnight.
28 A ¶ The phone BUZZES in Dev's hand.
29 A He looks at it and goes pale.
30 A "MUM: where are u??
31 A Mrs K said u left the shop at 6".
32 A He shows it to Sorcha, who shakes her head.
33 D SORCHA: Don't answer. Not until we're over the border.
34 D DEV: It's my mum. She'll worry.
35 D SORCHA: She'll worry more if you do.
36 A ¶ Dev lowers the phone.
37 A The streetlight stops humming.
38 A Everything is quiet for a moment, and then the van fills with a soft white light, coming up through the floor, through the seats, and Hal's mouth opens, and Sorcha and Dev and Nell and Ivo and Rook all hold perfectly still, like children caught in a flashlight.
39 D HAL: That's not the engine.
40 D IVO: No.
41 A ¶ They look at the road ahead.
42 A Where the asphalt should be there is a long staircase of pale stone, spiralling down into a valley of lanterns.
43 A The van's tires crunch on the first step.
44 A Hal puts the car in park, and sighs the sigh of a man who has seen everything and is about to see something else.
45 D HAL: Five stars. If I'm going to hell I want it on my record that I was polite.
46 A ¶ Nell leans forward between the seats and pats his shoulder, and the lanterns far below begin, one by one, to open their eyes.

### SCENE s05069 | INT. NIGHTBIRD STUDIOS - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): REGGIE, SHAY, OMAR, KAT
1 A ¶ Rain on the skylight.
2 A Amber light from the console.
3 A A dozen VU meters twitch in the dark.
4 A ¶ Through the glass, the live room: a vocal booth, a lone mic on a stand, a grand piano under a sheet.
5 A ¶ REGGIE, 50s, owner, silver ponytail, a cardigan with a hole in the elbow, sits at the board.
6 A Beside him, SHAY, 20s, the artist, hoodie up, headphones around her neck.
7 A By the door, leaning on the wall with a paper cup of coffee gone cold, OMAR, 40s, in a wool coat that is too good for the room.
8 A And on the leather couch, KAT, 30s, her laptop open on her knees, typing.
9 A ¶ A clock above the door.
10 A 1:12.
11 A ¶ Thunder, distant.
12 A ¶ ON SCREEN: Kat's laptop.
13 A An email, subject line "Master Delivery - FINAL", sent 11:58 PM, from an address the label has never used.
14 D REGGIE: Run it back.
15 A ¶ He hits a key.
16 A The speakers fill with a vocal take, ghostly, a voice of ice.
17 A It ends.
18 A Silence.
19 D SHAY: That's the one.
20 D OMAR: That's not the one.
21 D SHAY: Omar.
22 D OMAR: That's a take. That's a very nice take. It's not the one that goes on the record.
23 D SHAY: It's the one I meant.
24 D OMAR: You meant it in July. You meant it in July with a different man in the room.
25 A ¶ Reggie shifts in his chair.
26 A The meters twitch.
27 D SHAY: Don't.
28 D OMAR: I'm just saying where the money is.
29 A ¶ The thunder again, closer.
30 D KAT (without looking up): The wire cleared at eleven fifty-eight. Both accounts. Just so everybody knows.
31 A ¶ Reggie stops.
32 A Turns slowly.
33 D REGGIE: What wire?
34 D KAT: Oh. Nothing. Forget I said it.
35 D SHAY: Kat.
36 D OMAR: Kat.
37 D REGGIE (standing): What wire, Kat?
38 A ¶ She closes the laptop.
39 A Everything in the room seems to lean toward her.
40 A Rain drums harder on the skylight.
41 D KAT: Reggie, you've been mixing other people's lies for thirty years. You really want to hear this one in your own studio?
42 D REGGIE: In my studio, yes.
43 D KAT: The album isn't hers. Never was. The masters belong to a company in Nevada that belongs to a company in Delaware that belongs to Omar. Shay signed it in July. She didn't read it. Reggie, you didn't read it. I read it. I'm the only one who ever read it.
44 D REGGIE: You work for me.
45 D KAT: I work for whoever pays the rent on the building you're about to lose.
46 D SHAY (very quietly): Omar. Is that true?
47 D OMAR: Shay, it's a standard deal.
48 D SHAY: Is it true?
49 D OMAR: It's business. It was always going to be business. You wanted to be heard by two million people, somebody has to own the room.
50 D SHAY: You sat with me for six months. You told me my father's songs mattered.
51 D OMAR: They do. They're worth a lot.
52 A ¶ A long stillness.
53 A Shay takes the headphones from around her neck and sets them very gently on the console.
54 A Reggie sits back down heavily.
55 A He looks suddenly old.
56 D REGGIE: Thirty years. Never once did I let anyone take the tape out of this building.
57 D KAT: The tape is the least of it.
58 A ¶ Rain.
59 A Thunder breaks directly overhead.
60 A In the live room, the piano sheet slides slowly off its shoulders and falls to the floor.
61 A The lights flicker.
62 A When they come back, Omar is standing in front of the door, one hand on the knob, and he is no longer smiling.
63 D OMAR: Nobody's walking out of here with a copy.
64 A ¶ Shay reaches for the red button on the console marked RECORD, and presses it.

### SCENE s05070 | INT. HARLOW & SONS DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): MAYA, JOSS, BEE
1 A ¶ Rain on the tin roof.
2 A Steady.
3 A Endless.
4 A ¶ Rows of parcels stacked to the rafters.
5 A A forklift, parked.
6 A Sodium lights buzzing orange.
7 A ¶ MAYA (17, hoodie, lanyard that says TEMP) scans boxes with a handheld gun.
8 A BEEP.
9 A BEEP.
10 A BEEP.
11 A ¶ Her phone buzzes on a pallet.
12 A She grabs it.
13 A ¶ ON PHONE: omg r u still at work ON PHONE: u said u'd be done by 10
14 D MAYA (typing, muttering): It's literally ten-fifteen, Bee. Chill.
15 A ¶ She thumbs a reply.
16 A Sends.
17 A ¶ Quiet.
18 A ¶ Cold concrete.
19 A Wet footprints leading in from the loading door.
20 A ¶ JOSS (18, delivery vest, headphones around his neck) wheels a cage trolley around the corner.
21 D JOSS: You're still here, Maya?
22 D MAYA: Last row. Then I'm out.
23 D JOSS: Cool, cool. Me too.
24 A ¶ He parks the trolley.
25 A Sits on a crate.
26 A Scrolls his phone.
27 A ¶ Silence.
28 A ¶ Rain.
29 D MAYA: You been on shift since six, right? Don't you wanna go home?
30 D JOSS: Home's boring. Dad's watching the match.
31 D MAYA: Fair.
32 A ¶ She laughs.
33 A He doesn't look up.
34 A ¶ A drip lands in a bucket.
35 A Plink.
36 A ¶ Nothing.
37 D MAYA [CONT'D]: Joss. Why are you holding your phone like that?
38 D JOSS: Like what?
39 D MAYA: Like it's a grenade.
40 A ¶ He turns the screen toward her.
41 A A group chat.
42 A Her name at the top.
43 A A photo of her, at the till, from this afternoon.
44 D JOSS: Bee sent me this. Asked me to keep you here.
45 A ¶ Her phone.
46 A Buzzing.
47 A Buzzing.
48 A Buzzing.
49 D BEE [O.S.] (through the loading door, soft): Maya? Surprise.
50 A ¶ Maya turns.
51 A A silhouette in the rain.
52 A A birthday cake, candles lit, flickering.
53 D BEE [CONT'D]: Happy seventeenth, idiot.
54 D MAYA: You absolute --
55 A ¶ She is laughing.
56 A Crying.
57 A Both.
58 A ¶ Candlelight.
59 A Rain.
60 A Home.

### SCENE s05071 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): SAM, MO, THE BAND, BUS DRIVER, OLD WOMAN, TEENAGERS
1 A ¶ the 3am route out of the city. mostly empty. heater ticking. snow in the headlights, getting thicker.
2 A ¶ SAM, 30s, sits sideways across two seats with a backpack on his lap. across the aisle, MO, 20s, eats crisps out of a tiny bag.
3 A ¶ at the back, THE BAND (four teenagers, guitar cases, one amp) slumps against each other, half asleep.
4 D SAM: is it me or are we going slower
5 D MO: we're going slower
6 D SAM: cool. cool cool cool.
7 A ¶ the BUS DRIVER, unseen but for his cap in the mirror, hums along to the radio.
8 D MO: you want one
9 D SAM: what are they
10 D MO: salt and vinegar. i think. the bag's gone soft.
11 D SAM: yeah ok
12 A ¶ mo tosses the bag. sam catches it, drops half.
13 D SAM [CONT'D]: sorry
14 D MO: it's fine, sam. it's like, a crisp.
15 A ¶ an OLD WOMAN at the front, asleep, a small DOG in her coat. the dog looks at sam. sam looks at the dog.
16 D SAM: that dog hates me
17 D MO: that dog's seen things
18 D THE BAND (mumbling, in unison, not awake): ten more minutes.
19 D SAM: they're asleep, right
20 D MO: they're so asleep
21 A ¶ the bus slows. slows. the engine note drops.
22 D SAM: mo
23 D MO: yeah
24 D SAM: that's not a stop
25 A ¶ the bus rolls to a halt in the middle of a white nothing. the driver cuts the engine. the heater stops ticking.
26 A ¶ quiet. the radio hums on batteries.
27 D THE BAND (waking, in unison): are we there
28 D MO: not really, no
29 A ¶ two TEENAGERS in school hoodies, a row ahead, look up from a shared pair of earbuds. look out the window. look back down.
30 D SAM: should we be worried
31 D MO: i think we should be a little worried
32 D SAM: how much is a little
33 D MO: like. a sixth.
34 D SAM: a sixth. ok. i can do a sixth.
35 A ¶ the driver stands, pulls on a coat.
36 D DRIVER [O.S.]: folks, bit of snow on the road. stay put. i'll radio in.
37 A ¶ he steps off. the doors sigh. cold rolls down the aisle.
38 D MO: he's going to radio in
39 D SAM: from where
40 D MO: from outside, i guess
41 D SAM: this is not a radio situation
42 D MO: sam
43 D SAM: what
44 D MO: you're being weird. it's fine. people get stuck. buses get unstuck.
45 D SAM: yeah
46 A ¶ this is the last quiet moment before the night gets long.
47 D THE BAND (whispered, in unison): can we have the heater back
48 D SAM: i'm so sorry. the heater is gone.
49 D MO: we'll take turns
50 D SAM: turns doing what
51 D MO: being warm. it's a thing. you pass it.
52 A ¶ sam laughs, a little, then stops.
53 A ¶ the old woman wakes up. looks around. says nothing. shuts her eyes again. the dog sighs.
54 D SAM: mo
55 D MO: yeah
56 D SAM: if this goes bad, i just want you to know i like your coat
57 D MO: it's my brother's coat
58 D SAM: i like him too
59 A ¶ mo throws a crisp at him. it hits his forehead. he leaves it there.
60 A ¶ outside, the snow keeps falling. the road is gone. the windows fog.
61 D MO: big dave's gonna be so mad i'm late
62 D SAM: who's big dave
63 D MO: my boss. he's not even big. we just have two daves.
64 D SAM: that's the worst reason
65 D MO: it's the only reason
66 A ¶ the driver climbs back on, shoulders white.
67 D DRIVER: okay. we wait.
68 A ¶ he sits. takes off the cap. wipes his face.
69 A ¶ nobody speaks. the dog snores. somewhere in the dark, a plough, maybe, or just wind.
70 D SAM: mo
71 D MO: yeah
72 D SAM: thanks for the crisps
73 D MO: you didn't eat them
74 D SAM: i held them very respectfully
75 A ¶ the bus creaks. the snow settles. they wait.

### SCENE s05072 | EXT. THE SALTY BISCUIT - FISHING BOAT - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN PIP, MARLO, BERNIE, OLLIE, NINA
1 A ¶ Calm sea.
2 A Pink sky.
3 A A little wooden boat bobbing like a bath toy.
4 D CAPTAIN PIP (polishing the brass compass with their sleeve, not looking up): Nobody touch the net. Nobody even think about the net.
5 D MARLO (a crab, hiding behind a bucket, tapping the net with one claw): I'm not thinking about it. I'm just... standing near it.
6 D CAPTAIN PIP (without turning): Thinking loudly.
7 A ¶ Silence.
8 A ¶ Gulls.
9 A Far away.
10 D BERNIE (a seagull, landing on the rail with a flap, a fish in their beak that is clearly not theirs): Morning, Captain! Lovely morning for a completely innocent morning.
11 D CAPTAIN PIP (raising one eyebrow at the fish): Bernie.
12 D BERNIE (swallowing it whole): What fish?
13 A ¶ Nothing.
14 D OLLIE (a brass lantern hanging from the mast, swinging, lighting up and dimming as they speak): Captain. The sea is humming again.
15 D CAPTAIN PIP (finally setting down the compass, listening): Hm.
16 A ¶ Waves.
17 A Slap, slap.
18 D OLLIE (whispering): It only hums when something's coming.
19 D NINA (a girl of nine, in a yellow raincoat, climbing up from below deck with a mug): Cocoa's ready. Who wants cocoa?
20 D MARLO (from behind the bucket, hopeful): Me.
21 D BERNIE (at the same time, wings out): Me!
22 D NINA (handing the mug to Captain Pip first, steady, careful not to spill): Captain gets the first sip. That's the rule.
23 D CAPTAIN PIP (taking it, holding it with both hands, a very small smile): That's the rule.
24 A ¶ A bubble rises beside the boat.
25 A Pop.
26 A Another.
27 A Pop.
28 D OLLIE (flickering low): It's here.
29 A ¶ Everyone freezes.
30 A Even the gull.
31 D NINA (very quietly, tucking her hand into the Captain's coat pocket): Is it a big one?
32 D CAPTAIN PIP (sipping, eyes on the water): Biggest I've ever seen.
33 A ¶ Rain.
34 A ¶ No. Just spray.
35 D MARLO (creeping out from behind the bucket, claws up): Should we run?
36 D CAPTAIN PIP (setting the mug on the rail): We should say hello.
37 A ¶ The water rises, slow and glassy, a long blue curve.
38 A ¶ Silence.

### SCENE s05073 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, ASH, RADIO, DELPHINE
1 A ¶ Dark.
2 A A power cut.
3 A One camping lantern on the island.
4 A A handheld radio crackles beside it.
5 A ¶ THE WOMAN (40s, wet coat) stands in the doorway.
6 A ASH (30s) holds a kitchen knife, shaking.
7 D ASH: You came through the back door. The back door has been locked since Tuesday. Tell me how that happens. Tell me, and use small words, because I have been awake since the sky went green, and they are tired.
8 D THE WOMAN (beat): I didn't open it. It was already open.
9 D RADIO [V.O.] (static): Ash? Ash, do you copy? The grid's not coming back. Repeat, not coming back.
10 D ASH (not taking their eyes off her): Copy, Mum. Stay in the cellar.
11 D THE WOMAN (beat): I'm not here to hurt anyone. My name is Delphine. I was in the lab when it started. I know what's in the sky, and I know why the lights went. I have forty minutes of explanation and you have, what, a bread knife?
12 D ASH (lowering it an inch): It's a good bread knife.
13 D DELPHINE (a short laugh, then not): I believe you.
14 A ¶ The lantern flickers.
15 A Out.
16 A On.
17 D RADIO [V.O.]: Ash. There's someone at the window.
18 A ¶ Ash looks.
19 A Delphine looks.
20 A Nothing but black glass.
21 D ASH (whispering): Tell me everything. Start with what you did.

### SCENE s05074 | INT. THE ROYAL OAK FUNCTION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TIM HARGREAVES, TOM HARGRAVE, WAITER, WEDDING GUEST'S DOG, HATTIE
1 A ¶ Bunting, half-fallen.
2 A A disco ball turning slowly over an empty dance floor.
3 A Somewhere, a speaker plays something by Take That, very quietly, as if embarrassed.
4 A ¶ Outside, rain on the car park.
5 A The sort that can't be bothered to stop.
6 A ¶ TIM HARGREAVES (40s, tie round his head like a headband, pint in each hand) sits on a stack of chairs.
7 A Opposite him, TOM HARGRAVE (40s, immaculate, one button undone, a medal in a velvet box on his knee).
8 A ¶ A WAITER wheels a trolley of cold sausage rolls between them.
9 A Neither takes one.
10 A ¶ A WEDDING GUEST'S DOG, a spaniel in a bow tie, sleeps under a table.
11 D TIM: Lovely do.
12 D TOM: Mm.
13 D TIM: Lovely speech, as well. The bit about the cricket.
14 D TOM: I wasn't talking about cricket.
15 D TIM: Weren't you? I thought you were.
16 A ¶ Quiet.
17 A The disco ball turns.
18 A ¶ HATTIE (30s, bridesmaid, shoes in hand) drifts over, a plate of trifle balanced on her wrist.
19 D HATTIE: Right, you two. Dad says you're to stop sulking by the buffet.
20 D TOM: We're not sulking, Hattie.
21 D TIM: We're discussing.
22 D HATTIE: You're discussing a medal in a box, Tim. In the corner. At my sister's wedding.
23 D TIM: It's Tom's medal.
24 D TOM: It's our medal, strictly speaking.
25 D HATTIE: Of course it is.
26 A ¶ She eats a spoonful of trifle.
27 A Looks from one to the other.
28 D HATTIE [CONT'D]: Tom. Tim. You were twenty-two. It was a relay. It was nineteen years ago.
29 D TIM: Nineteen and a half.
30 D TOM: And I'd have won if someone had passed the baton.
31 D TIM: I passed the baton.
32 D TOM: You threw the baton.
33 A ¶ A pause.
34 A The waiter reverses his trolley, very slowly, out of range.
35 D TIM (quietly): I tripped, Tom.
36 D TOM: You tripped on purpose.
37 D TIM: Don't be absurd.
38 D TOM: You told Gillian I'd cheated at the trials. She told the committee.
39 D TIM: That was a joke!
40 D TOM: Nineteen years, Tim. Nineteen years, and every Christmas, it's a joke.
41 A ¶ The spaniel wakes.
42 A Lifts its head.
43 D HATTIE: Boys, please. My sister is cutting the cake in an hour.
44 D TIM (standing): I am not having this, Tom. Not here.
45 D TOM (standing): Then where?
46 A ¶ Beat.
47 A Tim sets down both pints.
48 A Tom puts the medal on the chair.
49 A ¶ The disco ball catches the light.
50 D TIM: Outside.
51 D TOM: Outside.
52 A ¶ They go.
53 A The doors swing shut behind them.
54 A A single sausage roll rolls off the trolley and lands on the floor.
55 D HATTIE (to the spaniel): Right. Well. That's the evening.
56 A ¶ Rain.
57 A A shout, muffled.
58 A A crash of metal bins.
59 A ¶ The spaniel puts its head back down.

### SCENE s05075 | INT. RIDESHARE CAR - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DRIVER, THE TWINS, NARRATOR, PRIYA
1 A ¶ HANDHELD.
2 A A dashboard camera and a small phone-cam on the headrest.
3 A Grainy.
4 A Streetlights smear past.
5 A ¶ ON CAMERA: a DRIVER, 40s, hands at ten and two, eyes in the mirror.
6 A In the back seat, THE TWINS (nine, matching pyjama tops, one asleep on the other's shoulder).
7 D DRIVER: You're sure you want me on camera? It's mostly just driving.
8 D THE TWINS (together, sleepy): Yes.
9 D DRIVER: Okay then. Hello, internet.
10 A ¶ She laughs.
11 A The road hums.
12 D NARRATOR [V.O.]: At two in the morning, every city looks like a memory of itself.
13 A ¶ Red light.
14 A The car stops.
15 A Nobody speaks.
16 D DRIVER: So. Where's your mum tonight?
17 D THE TWINS: Hospital.
18 D DRIVER: Oh. Sorry, love. Is she -- is she going to be all right?
19 D THE TWINS (together): The baby's coming.
20 D DRIVER: Oh! Well, that's different. That's good.
21 A ¶ She turns round.
22 A Smiles.
23 A They don't, quite.
24 D THE TWINS (together, small): We're meant to be asleep at Nan's.
25 D DRIVER: And instead you're in a stranger's car at two a.m. with a camera pointed at you.
26 D THE TWINS: Dad's meeting us. He said ring a cab.
27 D DRIVER: I'm not a cab. I'm a rideshare.
28 D THE TWINS (together): Is it different?
29 D DRIVER: It's about four pounds different.
30 A ¶ Green light.
31 A They move.
32 D DRIVER [CONT'D]: My name's Priya, by the way. Priya. In case your dad asks.
33 D PRIYA (into the mirror): You can say it back to me. So I know you know it.
34 D THE TWINS (together): Priya.
35 D PRIYA: Good. That's one safety rule down.
36 A ¶ She taps the wheel.
37 A The hospital sign, glowing, rises out of the dark.
38 A ¶ This is the last ride before the family changes shape.
39 D PRIYA [CONT'D]: Nearly there. She'll have the baby by the time we find a parking space.
40 D THE TWINS (together): She said that last time too.
41 D PRIYA: And was she right?
42 D THE TWINS (together): Yes.
43 A ¶ The car slows.
44 A A man in a coat waves under the hospital canopy.
45 A The twins sit up, instantly awake.
46 D PRIYA: There he is.
47 A ¶ The door opens.
48 A Cold air.
49 A They climb out, hand in hand, and run.
50 A ¶ Priya watches them go, then turns the phone-cam toward herself.
51 D PRIYA [CONT'D]: Five stars, please. And if you're reading this, congratulations.
52 T CUT TO BLACK.

### SCENE s05076 | INT. BORDER CHECKPOINT - BOOTH - DAY
Detected names (may be incomplete or contain aliases): GUARD, THE BAND, WALT
1 A ¶ A cramped booth.
2 A A fan that's seen better decades.
3 A A gate arm.
4 A A vending machine that only sells one flavour.
5 A ¶ A GUARD (50s, belly, clipboard, tired eyes) sits and eats a sandwich.
6 A A sign behind him reads: NEXT WINDOW PLEASE.
7 A ¶ A beat-up van pulls up outside.
8 A Its side reads: THE GENTLE BASTARDS - TOUR 2025.
9 A ¶ THE BAND (four people, leather jackets, instruments) climbs out in a line and walks up to the window.
10 D GUARD: Passports.
11 D THE BAND (in unison, ragged): Hi!
12 A ¶ APPLAUSE.
13 D GUARD (not looking up): That's cute. Passports.
14 D THE BAND (handing them over in a stack): Here.
15 A ¶ He flips through.
16 A Stops.
17 D GUARD: You're all Gary.
18 D THE BAND (shrugging): It's a stage name.
19 D GUARD: It's the same name on four passports.
20 D THE BAND (proudly): We're consistent.
21 A ¶ LAUGHS.
22 A ¶ The Guard sighs, puts down his sandwich and picks up his phone.
23 A A text lights up the screen.
24 A ¶ ON PHONE: dad where r u ON PHONE: ur shift ends in 10
25 D GUARD (typing): Busy, Mel. Border stuff.
26 A ¶ He puts it down.
27 A Looks at the band again.
28 A A pause.
29 A Too long.
30 D GUARD [CONT'D]: Where's the drummer?
31 D THE BAND (looking at each other): What drummer?
32 D GUARD: The one in the van.
33 A ¶ Beat.
34 A The band turns slowly.
35 A In the van window, a tiny dog in sunglasses stares back at them.
36 A WOOF.
37 A ¶ APPLAUSE.
38 D GUARD [CONT'D] (standing, finally): That's not a drummer. That's a dog.
39 D THE BAND (quietly, to each other): He's a very good dog.
40 A ¶ The Guard reads the name on his badge, taps it.
41 A WALT.
42 D WALT: Call me Walt. And your dog goes in the quarantine bay.
43 D THE BAND (in unison): We've never been so insulted.
44 A ¶ Walt hits a button.
45 A The gate arm drops.
46 A The fan whirs.
47 D WALT [CONT'D] (softly): That's two hours, folks. Enjoy the vending machine.
48 A ¶ A beat.
49 A Then the vending machine, from nowhere, drops a can of soup.
50 A THUNK.
51 T LAUGHS. APPLAUSE. CUT TO:

### SCENE s05077 | INT. NOVALOOP STARTUP OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): TEAM, KIM, KIP
1 A ¶ An open-plan office, lit only by monitors.
2 A Beanbags.
3 A A whiteboard covered in arrows.
4 A Takeaway boxes on every desk.
5 A ¶ THE TEAM (six developers) sits in a row of desks, headphones on, typing in perfect sync.
6 A ¶ KIM sits at a corner desk, laptop open, hood up.
7 A KIP, in a cardigan, approaches slowly with two mugs.
8 A ¶ Kip sets one mug down.
9 A Kim doesn't look up.
10 D KIP: I made you tea.
11 D KIM: Thanks.
12 A ¶ Kip waits.
13 A Kim keeps typing.
14 A THE TEAM keeps typing.
15 D KIP: You've been on that file for an hour.
16 D KIM: Just tidying up.
17 A ¶ Kip glances at the screen.
18 A Looks away.
19 A Looks back.
20 A ¶ ON SCREEN: a file labelled CLIENTS_Q3.xlsx, uploading to an external server.
21 A 67%.
22 A ¶ ON PHONE: (Kim's phone, face-up) you have 10 min. don't be late.
23 D KIP: That isn't tidying.
24 D KIM: It's a backup.
25 D KIP: To who?
26 A ¶ Kim stops typing.
27 A Slowly closes the laptop halfway.
28 A Looks up.
29 D KIM: Kip.
30 D KIP: Kim. I'm not stupid. I wrote half that database.
31 D KIM: I know.
32 A ¶ THE TEAM stops typing.
33 A All six heads turn at once.
34 D KIP: They've got us on a deadline, and now you're sending the clients off the books.
35 D KIM: It's a lot of money. More than I'll ever make here.
36 D KIP: It's stealing.
37 D KIM: It's leverage.
38 A ¶ The upload bar pings.
39 A 100%.
40 A ¶ Kip steps back.
41 A THE TEAM stands as one.
42 A Nobody speaks.
43 A A printer somewhere clicks.
44 D KIM [CONT'D] (softly): Please sit down. Please.
45 D KIP: No.
46 A ¶ They turn and walk toward the exit.
47 A Kim stands.
48 D KIM: Kip!
49 A ¶ Kip keeps walking.
50 A The door opens.
51 A Kip stops in the frame.
52 A ¶ ON PHONE: (Kip's, buzzing) call me when ur out. we need to talk about kim.
53 A ¶ Kip turns back, phone in hand, and holds it up.
54 A Kim reads it.
55 A Goes pale.
56 D KIM [CONT'D]: That wasn't meant for you.
57 D KIP: I know. That's why it's so good.

### SCENE s05078_0 | EXT. DRY PLAINS - HIGH NOON - SERIES OF SHOTS
Detected names (may be incomplete or contain aliases): 
1 A ¶ SERIES OF SHOTS:
2 A ¶ A) Dust.
3 A A long line of people in wide hats and hand-painted signs marching down a dirt road.
4 A A banner: THE RIVER IS NOT FOR SALE.
5 A ¶ B) Dana, 30s, in a duster coat, leads the march with a megaphone.
6 A The sun slams down on her like a hammer.
7 A ¶ C) Eli, 20s, thin, carries a drum.
8 A Every step, BOOM.
9 A ¶ D) Rosa, 50s, wipes her brow with a faded flag.
10 A She's done this before.
11 A ¶ E) Hank, 60s, in a sheriff's badge, arms crossed beside a rusted oil derrick.
12 A His horse noses a tumbleweed.
13 A ¶ F) Two teenagers on a fence post film everything on their phones.
14 A A coyote watches from the ridge.
15 A ¶ G) Tess, 20s, kneels on the road and locks her arm into a barrel of concrete.
16 A CLINK.
17 A ¶ H) Cole, 40s, in a company suit and cowboy boots, steps out of a black truck.
18 A The door SLAMS.
19 A ¶ END SERIES OF SHOTS.

### SCENE s05078_1 | EXT. THE OLD PUMP STATION - CONTINUOUS
Detected names (may be incomplete or contain aliases): DANA, COLE, HANK, ROSA, ELI, TESS
1 A ¶ Cole stops ten feet from Tess.
2 A Hank stops beside him.
3 A Dana lowers the megaphone.
4 A The drum goes quiet.
5 D DANA: You're on public land, Cole.
6 D COLE: Dana. The lease says otherwise.
7 D DANA: Leases can be wrong.
8 D COLE: Not this one.
9 D HANK (wearily): Folks. It's a hundred and four degrees.
10 D ROSA: Then you'll want to move that truck.
11 D COLE: I've got a signed order.
12 D ELI: We've got a river.
13 D COLE: You've got a barrel of concrete and a drum.
14 D TESS: And a lot of water bottles.
15 D HANK: Tess, honey, this isn't what I signed up for.
16 D TESS: Sheriff, none of us signed up for the end of the world.
17 D COLE: That's a bit dramatic.
18 D DANA: It's a drought, Cole. Seven years. You want dramatic, go look at Miller's well.
19 D COLE: I've seen Miller's well.
20 D ROSA: Then you know.
21 D COLE: I know there's a hundred jobs on that derrick.
22 D ELI: And a thousand people downriver.
23 D HANK: Cole, they've got a point.
24 D COLE: Hank, whose side are you on?
25 D HANK: I'm on the side with the shade.
26 A ¶ A beat.
27 A Dana almost laughs.
28 D DANA: Cole. Walk away. Take the order back to the office and tell them the town said no.
29 D COLE: They won't hear it.
30 D DANA: Then make them.
31 D COLE: You don't know what you're asking.
32 D ROSA: We know exactly.
33 D TESS: We're not moving.
34 D ELI (quietly): Neither is the river.
35 A ¶ A long silence.
36 A The wind lifts the banner.
37 A The drum, one soft BOOM.
38 A ¶ Cole takes off his hat.
39 A Looks at the derrick.
40 A At the line of faces.
41 A At Hank.
42 D COLE: Sheriff. Arrest the barrel.
43 D HANK: Excuse me?
44 D COLE: You heard me. It's a hazard. Roll it off the road.
45 A ¶ Dana and Eli lunge in front of Tess.
46 A Rosa grabs Hank's sleeve.
47 A The two teenagers scream.
48 A The coyote bolts.
49 A The whole crowd surges forward and then freezes as a siren WAILS in the distance.
50 A ¶ Everyone looks at the horizon.
51 A A cloud of dust, rolling toward them.

### SCENE s05079 | INT. MAPLE STREET VET CLINIC - RECEPTION - DAY
Detected names (may be incomplete or contain aliases): JUNE, LENA OKAFOR, THE CHEN KIDS, RIVER, HALVERSEN, PARROT
1 A ¶ Waiting room.
2 A Linoleum.
3 A A fish tank.
4 A A beagle howls from behind a door.
5 A ¶ JUNE (17, scrubs two sizes too big, first week) stacks leaflets at the desk.
6 A She keeps checking the clock.
7 A ¶ LENA OKAFOR (40s, vet, white coat) strides through with a clipboard.
8 D LENA: June. Room two. Now.
9 D JUNE: Yes, Dr. Okafor.
10 A ¶ THE CHEN KIDS (three siblings, matching backpacks) sit in a row on the bench, a cat carrier on their laps.
11 A It yowls.
12 A They flinch together.
13 A ¶ RIVER (20s, they/them, nose ring, rescue-shelter hoodie) leans on the counter.
14 D RIVER: Hey. I'm here for my appointment. Biscuit has the thing.
15 D JUNE: What thing?
16 D RIVER (shrugging): The thing. Biscuit's a dog. Biscuit has the thing.
17 A ¶ A black lab sits at their feet, head cocked.
18 D JUNE (writing): Okay. Uh. Name?
19 D RIVER: Biscuit. Last name Rivera-Hall. They go by Biscuit.
20 D JUNE: Who goes by Biscuit?
21 D RIVER: The dog. Me too, honestly.
22 A ¶ June blinks.
23 A Writes.
24 A Her pen skids across the page.
25 D LENA [O.S.]: June! Room two!
26 D JUNE (under her breath): Coming, coming, oh my God.
27 A ¶ The cat carrier SCREECHES.
28 A The Chen Kids scream in unison.
29 D THE CHEN KIDS: It's biting!
30 D RIVER (calmly): It's not biting. It's just upset.
31 D JUNE (to herself, flipping a chart): Don't panic. Don't panic.
32 A ¶ She turns.
33 A Grabs the carrier.
34 A The cat bolts out the front, a streak of grey fur, knocking over the fish tank stand.
35 D JUNE [CONT'D] (to the room): Everybody stay calm!
36 A ¶ Nobody is calm.
37 A ¶ The front door swings open.
38 A MR. HALVERSEN (60s, tweed coat, a parrot on his shoulder) steps in, drenched.
39 D MR. HALVERSEN: Which one of you is in charge?
40 D LENA (emerging, hands up): That would be me.
41 D MR. HALVERSEN: My bird says your sign is wrong.
42 D PARROT (from his shoulder): Wrong! Wrong!
43 A ¶ June puts her head on the desk.
44 A ¶ Biscuit the dog barks once, the cat yowls from the street, and the fish tank gently drips onto the floor.

### SCENE s05080 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): TESS HALLORAN, DOOR BANGS, THE WOMAN, GRETA
1 A ¶ Fluorescent tubes.
2 A HUMMING.
3 A A coffee urn GURGLES.
4 A ¶ Folding chairs in a circle.
5 A Eight empty.
6 A One taken.
7 A ¶ TESS HALLORAN, 17, slumps in it.
8 A Backpack on her knees.
9 A Court-ordered slip crushed in her fist.
10 A ¶ Rain.
11 A Hammering the high windows.
12 A ¶ The DOOR BANGS open.
13 A ¶ A WOMAN storms in.
14 A Fifties.
15 A Soaked.
16 A Leather jacket.
17 A Keys in a white-knuckle grip.
18 A ¶ She stops.
19 A Stares at Tess.
20 D THE WOMAN: You're in my chair.
21 D TESS: There's no name on it.
22 A ¶ Silence.
23 A ¶ The Woman drops into the next seat.
24 A The chair SCREECHES.
25 D THE WOMAN [CONT'D]: You're a kid.
26 D TESS: Seventeen.
27 D THE WOMAN: Seventeen. Great.
28 A ¶ Tess pulls out her phone.
29 A Taps.
30 A Taps again.
31 A ¶ Her phone.
32 A Dead.
33 D TESS: Nobody else is coming?
34 D THE WOMAN: Flooded out on Delancey. It's us.
35 A ¶ The urn CLICKS off.
36 A Quiet.
37 A ¶ Tess stands.
38 A Grabs her bag.
39 D TESS: Then I'm out. She said I only needed a signature.
40 D THE WOMAN: She who?
41 D TESS: The judge.
42 D THE WOMAN: She signs nothing unless you sit.
43 A ¶ Tess freezes.
44 A Thunder.
45 A A long ROLL.
46 A ¶ Nothing.
47 A ¶ The Woman leans forward.
48 A Elbows on knees.
49 A She meets Tess's eyes.
50 D THE WOMAN [CONT'D]: Eleven years sober. Tuesday. Her birthday. My daughter's.
51 D TESS: Why are you telling me that?
52 D THE WOMAN: Because she wouldn't open the door either.
53 A ¶ Tess's jaw tightens.
54 D TESS: That's not fair.
55 A ¶ The Woman holds out a hand.
56 D THE WOMAN: Greta.
57 A ¶ Tess stares at it.
58 A A beat.
59 A ¶ Lightning.
60 A The lights FLICKER.
61 A ¶ Tess shakes it.
62 D TESS: Tess.
63 D GRETA: Sit, Tess.
64 A ¶ Tess sits.
65 A ¶ Rain.
66 D GRETA [CONT'D]: You go first.
67 D TESS (barely audible): Hi. I'm Tess.
68 D GRETA: Hi, Tess.
69 A ¶ The lights HOLD.

### SCENE s05083 | INT. NORTHSIDE REC CENTER - GYM - DAY
Detected names (may be incomplete or contain aliases): PRIYA, JAYLEN, ADEYEMI
1 A ¶ Squeaking sneakers.
2 A A basketball THUMPS.
3 A Nobody's playing.
4 A ¶ Jaylen, 17, sits on the bottom bleacher, thumbs flying.
5 A Group chat blowing up.
6 A Forty-one unread.
7 A ¶ Her phone.
8 A Buzzing.
9 A Buzzing.
10 A Buzzing.
11 A ¶ Priya, 17, tall, hoodie up, drops next to him.
12 D PRIYA: So are you gonna answer or just let it ghost you?
13 D JAYLEN: It's the whole team. They all saw the screenshot.
14 D PRIYA: Delete the app.
15 D JAYLEN: Priya, my lawyer said don't delete anything. Literal evidence.
16 D PRIYA: Your lawyer's like twenty-six and she says "no cap."
17 D JAYLEN: She's good, though.
18 A ¶ Silence.
19 A The ball rolls across the floor and stops.
20 A ¶ Nothing.
21 A ¶ Jaylen locks the phone.
22 A Face down on his knee.
23 A ¶ This is the part where it stops being funny.
24 A ¶ Priya nudges him.
25 D PRIYA [CONT'D]: For real, tho. You didn't do it.
26 D JAYLEN: Everyone thinks I did.
27 A ¶ The double doors BANG open.
28 A MS. ADEYEMI, 40s, blazer, folder under her arm, strides in.
29 A The lawyer.
30 D MS. ADEYEMI: Jaylen. Deposition's moved to Thursday. Good news.
31 D JAYLEN (small): Okay.
32 D MS. ADEYEMI: Put the phone away, Priya.
33 D PRIYA: I'm literally not on it.
34 A ¶ Ms. Adeyemi sits on the bleacher above them.
35 A Pulls out a pen.
36 D MS. ADEYEMI: Start from the beginning.

### SCENE s05084 | INT. ROSIE'S DINER - BOOTH BY THE WINDOW - NIGHT
Detected names (may be incomplete or contain aliases): MAYA, DESMOND, THEO
1 A ¶ A half-empty diner.
2 A A neon sign BUZZES in the window.
3 A Three strangers sit at one booth, three phones face-up on the table, none of them quite looking at each other, a plate of cold fries in the middle that nobody has touched, a waitress refilling coffee two booths over.
4 A ¶ CLOSE ON the middle phone.
5 A A group chat. "nightowls_3am" glowing at the top.
6 A ¶ WE SEE the last message, from "moth": "ok so who's actually here."
7 D MAYA (turns her phone over, then back): so. um. i'm maya.
8 D DESMOND (leaning back, arms crossed): desmond. i'm "moth."
9 D MAYA (small laugh): you're moth? you type like a forty year old.
10 D DESMOND (a shrug): i am a forty year old.
11 A ¶ The waitress sets down a coffee.
12 A Leaves.
13 A A beat.
14 D THEO (pushing the fries a half inch toward them): i didn't think anyone would actually show up.
15 D MAYA: you set the time, theo.
16 D THEO (eyes on the table): yeah. i know.
17 D DESMOND: so you're "lantern."
18 D THEO: yeah.
19 D MAYA: the one who said he found something in the old church.
20 D THEO (a pause): it was a long time ago.
21 D DESMOND: it was last tuesday.
22 A ¶ A phone BUZZES on the table.
23 A Everyone looks.
24 A It's Maya's.
25 A She doesn't pick it up.
26 D MAYA (flips it face down): it's my mom.
27 D DESMOND: you can get it.
28 D MAYA (a thin smile): no, it's fine.
29 A ¶ ANGLE ON Theo's hand, tapping the table.
30 A Tap.
31 A Tap.
32 A Tap.
33 D THEO (too quiet): i didn't find anything. i wrote it. the whole thing. i made it up.
34 D MAYA (a beat, then, steady): okay.
35 D DESMOND (sits forward): why?
36 D THEO (shrugs, can't look up): i wanted someone to message back.
37 A ¶ Silence.
38 A The neon BUZZES.
39 A A truck HISSES past outside.
40 D MAYA (slides the fries closer): eat something, lantern.
41 D THEO (a breath): it's theo.
42 D MAYA: i know.
43 D DESMOND (picks up one fry, studies it): these are terrible.
44 D THEO (a short laugh, surprised at itself): yeah.
45 A ¶ The three of them sit.
46 A Desmond eats the fry.
47 A Maya reaches over and takes one.
48 A Theo, after a moment, takes the last.
49 A ¶ A door SLAMS somewhere in the back.
50 A All three flinch.
51 A Nobody says anything.
52 A ¶ BACK TO SCENE
53 A ¶ The waitress comes by.
54 A Tops off the coffees.
55 A Looks at the three of them, then at the fries.
56 D DESMOND (to the waitress): can we get another plate of those?
57 A ¶ The waitress nods.
58 A Goes.
59 A The phones on the table light up at once, three at a time, the group chat filling with messages from people who aren't here.
60 D MAYA (reading): "is everyone ok"
61 D DESMOND (typing, slowly, two fingers): "we're good."
62 D THEO (watching him): you're still typing like a forty year old.
63 D DESMOND (without looking up): it's a gift.

### SCENE s05085_0 | INT. WILLOWBROOK FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): BRIDGET FENWICK, GARRETT, DR. PLUM
1 A ¶ A pastel room.
2 A Gently glowing crystals on every table.
3 A A fountain BURBLES in the corner.
4 A A sign reads: "PLEASE SILENCE YOUR WANDS."
5 A ¶ BRIDGET FENWICK, 30s, sits stiffly.
6 A Next to her, her husband, GARRETT, 30s, flips through a magazine upside down.
7 D BRIDGET (whispering, mortified): Garrett, the magazine.
8 D GARRETT (turns it over, deadpan): Oh, thank goodness. I was getting nothing out of the article.
9 A ¶ The inner door swings open.
10 A Applause-ready.
11 D DR. PLUM (entering in a sparkly lab coat, arms wide): The Fenwicks! Come in, come in, mind the dragon.
12 A ¶ ANGLE ON a small green dragon asleep on the carpet, wearing a "Staff" lanyard.
13 D GARRETT (stepping over it): Is that safe?
14 D DR. PLUM (cheerfully): Mostly vegetarian.

### SCENE s05085_1 | INT. WILLOWBROOK FERTILITY CLINIC - EXAM ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): DR. PLUM, BRIDGET, GARRETT, INTERCOM, WINNIE
1 A ¶ Dr. Plum shuts the door.
2 A Bridget perches on the table.
3 A Garrett stays standing.
4 D DR. PLUM (clapping once): Now, the good news is, your tests came back magical.
5 D BRIDGET (hopeful): Magical how?
6 D DR. PLUM (checking a scroll): Wonderfully magical. The bad news is, there's a small curse.
7 D GARRETT (flat): There's always a small curse.
8 D INTERCOM [V.O.]: Dr. Plum, your two o'clock is here. And the stork is asking for a raise again.
9 D DR. PLUM (to the ceiling): Tell him we'll discuss it in the spring, Winnie.
10 D WINNIE [V.O.] (from the intercom): He says that's what you said last spring.
11 D DR. PLUM (muttering): Storks.
12 A ¶ CLOSE ON the scroll.
13 A Written in glittery cursive: "Hex of Perpetual Maybe."
14 D BRIDGET (reading it, aghast): Perpetual Maybe?
15 D DR. PLUM (brightly): Very common. Your great-aunt must've really wanted you to take your time.
16 D GARRETT (sighs, to Bridget): This is your aunt Millicent.
17 D BRIDGET (tight smile): She hated my first boyfriend, too.
18 D DR. PLUM (snaps fingers; a puff of glitter): Good news! It's reversible. We'll start with a gentle exorcism.
19 D GARRETT (alarmed): Gentle?
20 D DR. PLUM (already writing): Light. Like a dentist.
21 A ¶ BACK TO SCENE
22 A ¶ The dragon pokes its head through the door.
23 D DR. PLUM [CONT'D] (not looking up): Not now, Kevin.
24 A ¶ The dragon sighs.
25 A A small puff of smoke.
26 A It leaves.

### SCENE s05086 | EXT. HARBOR PARKING LOT - FOOD TRUCK "THE GOLDEN GOBLIN" - DAY
Detected names (may be incomplete or contain aliases): BIG DAVE, MO, JEN, SAM, MRS. K
1 A ¶ A rusty purple truck with a huge cartoon goblin painted on the side.
2 A Its painted eyes blink when nobody's looking.
3 A A line of hungry customers stretches around the block.
4 A ¶ Inside the truck, a tiny kitchen.
5 A Steam, sizzle, clatter.
6 A ¶ BIG DAVE, 50s, an enormous man with an apron that reads "Kiss the Cook (Please)," flips a patty.
7 A Beside him, MO, 20s, wiry, chops onions with a nervous speed.
8 A At the window, JEN, 30s, sharp ponytail, takes orders with a grin that could cut glass.
9 A ¶ Perched on the shelf above the fryer sits SAM, a one-foot-tall goblin in a chef's hat, grumpy, covered in flour.
10 A Only the crew can see him.
11 D JEN (to the line): Next! What'll it be?
12 D BIG DAVE (to the whole kitchen): Orders up, people! Let's move!
13 D MO (to himself, muttering): Don't cut your finger. Don't cut your finger.
14 D SAM (dry): Mo, you've said that eleven times. I'm counting.
15 D MO (not looking up): You're not helping, Sam.
16 D JEN (over her shoulder): Two Goblin Specials and a side of fries!
17 D BIG DAVE (flipping): Fries are in the basket, Mo!
18 D MO (to himself): I know. I know where the fries are.
19 A ¶ Jen's phone RINGS on the counter.
20 A She answers on speaker.
21 D MRS. K [V.O.] (over the phone, crackling): Jennifer? It is Mrs. K. I am watching the line on the news. It is too long.
22 D JEN (through gritted teeth): Mrs. K, we're doing great. Lots of customers.
23 D MRS. K [V.O.]: Too many customers is no profit if you give them free pickles.
24 D BIG DAVE (quietly): Who told her about the pickles?
25 D SAM (shrugging): She has her ways.
26 D MRS. K [V.O.]: I hear everything. Mo is cutting too slow.
27 D MO (freezing): I'm not cutting too slow!
28 D MRS. K [V.O.]: Mo, speak to me when your onions are finished.
29 A ¶ Mo glances at Big Dave.
30 A Big Dave shakes his head slowly.
31 D JEN (to the group): Okay, everyone calm down.
32 A ¶ NOBODY CALMS DOWN.
33 A The fryer HISSES.
34 A Smoke curls toward the ceiling.
35 D SAM (standing on the shelf, alarmed): Dave, the oil's too hot.
36 D BIG DAVE (waving it off): It's fine.
37 D SAM: Dave.
38 D BIG DAVE: It's fine!
39 A ¶ The fryer POPS.
40 A A tiny fireball rolls up the wall.
41 D MO (shrieking): FIRE!
42 D JEN (to the phone): Mrs. K, I'll call you back!
43 D MRS. K [V.O.]: Jennifer, do not hang up on--
44 A ¶ Jen hangs up.
45 A Big Dave grabs a fire extinguisher.
46 A SPLOOSH.
47 A A cloud of white foam engulfs the kitchen.
48 A ¶ Silence.
49 A Everyone is covered in foam.
50 A Sam wipes his face with one tiny hand.
51 D SAM (deadpan): I told you.
52 A ¶ From outside, the line of customers CHEERS.

### SCENE s05089 | EXT. MAPLE HILL PARK - NEAR THE OLD FOUNTAIN - DUSK
Detected names (may be incomplete or contain aliases): JOGGER, OLD MEN, LIN, KOFI
1 A ¶ The sun is low.
2 A The park is almost empty.
3 A A JOGGER runs past with a small dog.
4 A Two OLD MEN play chess on a bench, not talking.
5 A ¶ LIN, 19, sets a phone on a tripod.
6 A She wears a bright yellow jacket.
7 A She checks the screen and fixes her hair.
8 A ¶ Beside her stands KOFI, 20, her friend.
9 A He holds a ring light.
10 A He is nervous but he does not say it.
11 D LIN: Okay. We start. Hello, my friends. Today we go to the haunted fountain.
12 D KOFI: Why are we saying haunted?
13 D LIN: Because people like it. More views.
14 D KOFI: But nobody say this fountain is haunted.
15 D LIN: Now they say.
16 A ¶ She laughs.
17 A He does not.
18 A He looks at the dry stone fountain.
19 A He turns the ring light a little.
20 A ¶ The Jogger is gone.
21 A The old men are gone too.
22 A The chessboard is still on the bench, pieces standing.
23 D LIN [CONT'D] (to the camera): Is very quiet here. Very, very quiet.
24 D KOFI: Lin. The men. They left the game.
25 D LIN: So? They are tired.
26 D KOFI: Maybe.
27 A ¶ She taps the screen.
28 A She frowns.
29 A She taps again.
30 D LIN: The video, it stops. Always the same place.
31 D KOFI: Maybe the phone is cold.
32 D LIN: Phones are not cold.
33 A ¶ A cold wind moves over the grass.
34 A The fountain makes a small sound, like a drop of water falling.
35 A But the fountain is dry.
36 A ¶ He steps back.
37 A She does not notice.
38 A She is still looking at the screen.
39 D LIN [CONT'D] (whispering): Kofi. Look.
40 A ¶ He comes closer.
41 A On the screen, behind her, there is someone in the water of the fountain.
42 A Only in the video.
43 A Not in the park.
44 D KOFI: I do not see anything.
45 D LIN (her voice thin): Yes you do.
46 A ¶ He is silent.
47 A His hands shake on the ring light.
48 A ¶ It is the last video they will make together.
49 A ¶ She turns off the phone.
50 A Fast.
51 A She takes the tripod and walks to the path.
52 A He follows her.
53 A Neither of them looks back at the fountain.
54 A ¶ The wind stops.
55 A The water drips once more.

### SCENE s05090 | INT. BRIGHTSTART FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): TESS, GORDON, ROSALIND, THE WOMAN, DR. HALLORAN, BEV
1 A ¶ SUPER: "TUESDAY.
2 A 9:47 AM."
3 A ¶ Gordon, 40s, rumpled and sweating through a pastel polo, grips a paper cup and a clipboard.
4 A Tess, 20s, behind the front desk, smiles a smile that has seen things.
5 A ¶ INSERT - CLIPBOARD
6 A ¶ Line 14: "Sample collected at home?
7 A Y / N".
8 A Gordon's pen hovers.
9 A He circles Y. Then N. Then Y.
10 A ¶ BACK TO SCENE
11 D TESS: Mr. Pruitt, Dr. Halloran will see you shortly.
12 D GORDON: Great. Fantastic. Shortly. Love shortly.
13 A ¶ His phone BUZZES.
14 A He answers, too loud.
15 D GORDON [CONT'D]: Ros? I'm here, I'm in the, I'm at the place.
16 D ROSALIND [V.O.] (tinny, speakerphone): Did you bring it. Gordon. Did you bring it.
17 D GORDON: Define "it".
18 D ROSALIND [V.O.]: The jar, Gordon. The jar in the cooler bag, in the car, in the August heat.
19 A ¶ Gordon looks at the empty cup in his hand.
20 A Looks at the door.
21 A ¶ POV - THROUGH THE WINDOW
22 A ¶ The parking lot.
23 A His Subaru.
24 A Its trunk wide open.
25 A A Seagull the size of a toddler perches on the bumper.
26 A ¶ BACK TO SCENE
27 A ¶ A woman in sunglasses and a long coat sits two chairs down, reading a pamphlet upside down.
28 A She has been there since the top of the scene.
29 A She has not blinked.
30 D GORDON (to himself): Okay. Okay okay okay.
31 A ¶ Dr. Halloran, 50s, bow tie, enters from the hallway with a tablet.
32 A He and Gordon lock eyes.
33 A He raises a hand to wave.
34 A He sees the open trunk through the window.
35 A He lowers it.
36 A ¶ ANGLE ON THE WOMAN
37 A ¶ She stands.
38 A Slowly.
39 A She opens the coat.
40 A Inside, a cooler bag, sweating, strapped to her like a bomb vest.
41 D THE WOMAN: Is this what you're looking for.
42 A ¶ Gordon and Halloran both freeze.
43 A Tess drops her stapler.
44 D GORDON: You STOLE my
45 D THE WOMAN: I RESCUED your
46 D DR. HALLORAN: Everybody stay calm, that is a biohazard and also a federal, I think, a federal something.
47 D ROSALIND [V.O.]: What's happening. Why is everyone yelling. Gordon!
48 A ¶ Gordon lunges for the bag.
49 A The woman spins away.
50 A Halloran grabs him, he grabs the coat, and all three of them crash into the pamphlet rack.
51 A Pamphlets rain down like confetti.
52 A Tess ducks under the desk.
53 A ¶ INTERCUT - PARKING LOT / WAITING ROOM
54 A ¶ The seagull hops into the trunk.
55 A It emerges with a sandwich.
56 A Nobody sees.
57 D THE WOMAN (pinned, furious): Bev! My name is Bev! I'm Rosalind's sister, you absolute walnut, she sent me to make sure you'd show up!
58 A ¶ Silence.
59 A Gordon, face down in pamphlets, slowly raises one finger.
60 D GORDON: ...Did she also send you to steal it?
61 D BEV: No. That was freelance.
62 D ROSALIND [V.O.]: Oh my god. Bev. I said WATCH him. Not ambush him.
63 A ¶ Tess pops up from behind the desk, holding the cooler bag by one strap.
64 D TESS: So, uh. Who's paying the co-pay.

### SCENE s05091 | INT. VANTAGE ARENA - BACKSTAGE GAMING PIT - NIGHT
Detected names (may be incomplete or contain aliases): JUNO KESSLER, HOODIE GUY, DEV, THE TWINS, ^JUNO
1 A ¶ Humming.
2 A A hundred fans cooling a hundred machines.
3 A Somewhere beyond the curtain the crowd roars at nothing, at a screen, at a score.
4 A ¶ JUNO KESSLER, 20s, headset around her neck, sits alone at Station 9 while the finals lobby loads, and behind her, in the half dark by the cable trunks, a figure in a gray hoodie stands very still with his face turned away, and she has not noticed him, and the monitors all glow the same dead blue.
5 A ¶ The loading bar crawls.
6 A 98%.
7 A 98%.
8 A 98%.
9 D JUNO: Nobody's supposed to be back here.
10 D HOODIE GUY (low): I know.
11 A ¶ The bar does not move.
12 A Her headset crackles at her collar, a whisper under the static, a voice that is not a teammate's.
13 D JUNO (to her mic): Coach? Dev? You hear that?
14 A ¶ Nothing.
15 A Then, very faintly, from somewhere behind the curtain, the crowd goes silent.
16 A All at once.
17 A Like a hand over a mouth.
18 A ¶ Dev Aranda, 30s, the team coach, pushes through the curtain with a lanyard and a clipboard and stops.
19 A He looks at the hoodie.
20 A He looks at Juno.
21 A The lights above the pit flicker one row at a time, front to back, toward them.
22 D DEV: Juno. Walk to me. Don't look at the screen.
23 D JUNO: It's, it's on my screen, Dev.
24 A ¶ On every monitor in the pit, in the lobby chat, one line types itself out letter by letter, slow as breathing.
25 D THE TWINS [O.S.] (whispering, in unison): We found you.
26 A ¶ Juno turns.
27 A At the far end of the pit, two identical kids in tournament jerseys stand shoulder to shoulder, too still, mouths barely moving, and neither of them is breathing.
28 D HOODIE GUY (turning at last): That's not who you think they are.
29 D DEV (over him): Get out get out get out
30 D ^JUNO: They're not on the roster
31 A ¶ Every monitor cuts to black.
32 A The fans die.
33 A In the silence the only sound is something wet and slow dragging across the concrete behind the curtain, and then the curtain moves, and the lights come back all at once, white, blinding, and the pit is empty but for three headsets still warm on the desks, and a lobby chat that reads:
34 A ¶ SUPER: "PLAYER 4 HAS JOINED."

### SCENE s05092 | INT. ST. AGNES LYING-IN HOSPITAL - CONSULTING ROOM - DAY
Detected names (may be incomplete or contain aliases): DR. WHITCOMBE, MARGARET, EDMUND, SISTER BRIGID
1 A ¶ London, 1923.
2 A Rain falls on the high windows without stopping.
3 A The gas lamp on the wall makes a small yellow light.
4 A The room smells of carbolic soap and old wood.
5 A ¶ Margaret sits on a hard chair.
6 A Her husband Edmund stands near the window and does not look at her.
7 A The doctor sits behind a big desk with many papers.
8 D DR. WHITCOMBE (he opens a file and reads slowly): Mrs. Ashworth, you have been married six years. There is no child. This is the third time you come to me.
9 D MARGARET (her hands are tight in her lap): Yes, doctor. We hope you have some new idea.
10 A ¶ The rain becomes stronger.
11 A A cart passes in the street below and its wheels make a loud noise on the stones.
12 A In the corridor a clock strikes the half hour.
13 D EDMUND (he turns from the window, his voice is cold): It is not an idea we need. It is an answer. My family asks me every Sunday. Every Sunday.
14 D DR. WHITCOMBE (he closes the file): Mr. Ashworth, I must say it plainly. The examination shows no fault in your wife.
15 A ¶ A long quiet.
16 A The lamp makes a small sound.
17 A Outside, a bell rings far away, and the grey light on the wall becomes darker.
18 D MARGARET (she looks up at him for the first time): Then the fault is not mine.
19 D EDMUND (he steps forward, his hand on the desk): You say this to me? In front of her?
20 D DR. WHITCOMBE (he stands, calm but not soft): I say what is true. Please sit down.
21 A ¶ Edmund does not sit.
22 A He walks to the door, he stops, he comes back.
23 A His face is red, and the rain is loud now, and the room feels very small.
24 A ¶ The door opens without a knock.
25 A SISTER BRIGID, a tall nurse in a starched white veil, comes in with a metal tray.
26 A She puts it down and she stands very straight beside the desk.
27 D SISTER BRIGID (her voice is quiet but it carries): Doctor, forgive me. The results you asked for from the laboratory. Both sets.
28 D DR. WHITCOMBE (he takes the paper and reads it, and his face changes): Thank you, Sister. Stay, please.
29 D EDMUND (he reaches for the paper): Give me that.
30 D SISTER BRIGID (she puts her hand flat on the tray): Sir, it is not yours to take.
31 D MARGARET (very softly): Edmund. Please. Sit.
32 D EDMUND (he turns on her, loud): Do not tell me what to do! Six years I wait. Six years my mother looks at you like you are a broken clock!
33 A ¶ Thunder, low and long, across the roofs of the city.
34 A The lamp shakes.
35 A The window glass hums.
36 D DR. WHITCOMBE (he holds up the paper): The laboratory is certain, Mr. Ashworth. The difficulty is with you. Not with her. It was never with her.
37 D EDMUND (he stops, he cannot speak, then he laughs one time): That is a lie. That is a doctor's lie to make a woman feel better.
38 D MARGARET (she stands, her chair scrapes the floor): You never once asked if it was you. Not once. You looked at me. Always at me.
39 D EDMUND (he knocks the tray from the desk, the instruments fall and ring on the floor): Enough!
40 D SISTER BRIGID (she does not move back, her chin lifts): You will leave this room now, sir. Or I will call the porters.
41 A ¶ The rain falls on.
42 A A long moment.
43 A Edmund looks at the three of them, at the paper, at the wet window, and he takes his hat from the chair and he goes out.
44 A The door shakes in its frame.
45 D MARGARET (she sits down slowly, and begins to breathe again): He will not come home tonight.
46 D DR. WHITCOMBE (gently): Then you will stay here, Mrs. Ashworth. Sister Brigid will make you tea.
47 D SISTER BRIGID (she bends and picks up the instruments one by one): Strong tea. With sugar.
48 A ¶ The clock in the corridor strikes the hour.
49 A The rain is soft again.
50 A The lamp is steady.

### SCENE s05095 | INT. CORNER DINER - BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): TOBIAS, SAGE
1 A ¶ Tobias, 30s, hunched over a milkshake, scrolls his phone.
2 A He looks up.
3 A A figure in a trench coat slides into the booth opposite.
4 A ¶ Sage, 20s, they/them, buzz cut, an enamel pin that says "SUSPECT".
5 A They set a phone face-up on the table.
6 D TOBIAS: You're "DetectiveDuck99"?
7 D SAGE: And you're "NotTheKiller".
8 D TOBIAS: That was a joke!
9 D SAGE (deadpan): It's a very bad joke, Tobias.
10 A ¶ He laughs nervously.
11 A They don't.
12 A He stops.
13 D TOBIAS: So who actualy stole Linda's casserole dish?
14 D SAGE: Someone in this group chat. Eleven suspects. Two of them are in this diner right now.
15 A ¶ Tobias looks left.
16 A Looks right.
17 A Looks at the waitress.
18 D TOBIAS: Is it her?
19 D SAGE: It's a milkshake, Tobias. Nobody commited a crime with a milkshake.
20 A ¶ They slide the phone across.
21 A The screen reads "LINDA: found it lol was in my oven".
22 A ¶ Tobias stares.
23 A Sage shrugs.
24 D SAGE [CONT'D]: Case closed. You're buying.

### SCENE s05096_0 | INT. HOLLOWAY FUNERAL HOME - RECEPTION ROOM - DAY
Detected names (may be incomplete or contain aliases): VIC, NORA, TEENAGERS, MAN
1 A ¶ Folding tables.
2 A Casserole dishes.
3 A Black dresses.
4 A A waiter circles with a tray of deviled eggs.
5 A ¶ Nora Vance, 50s, widow, stiff smile, stands by the coffee urn.
6 A Her late husband's brother, Vic, 60s, hovers too close.
7 D VIC: Nora. We need to talk about the will.
8 D NORA: Not today, Vic.
9 D VIC: It's today or it's a lawyer.
10 A ¶ Two TEENAGERS by the buffet snicker at their phones.
11 A A beagle noses under a table, steals an egg.
12 A ¶ Nora's phone RINGS.
13 A She checks it.
14 A UNKNOWN NUMBER.
15 A She answers.
16 D MAN [V.O.] (distorted, over phone): Don't let Vic near the study.
17 A ¶ Nora's eyes snap to Vic.
18 A He is already walking toward the hallway.
19 D NORA (low): Vic!
20 A ¶ THE MOURNERS turn as one.
21 A The beagle barks.
22 A Vic breaks into a run.
23 T SMASH CUT TO:

### SCENE s05096_1 | INT. HOLLOWAY FUNERAL HOME - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ A door slams.
