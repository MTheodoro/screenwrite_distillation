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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0164.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02252 | EXT. GENERAL STORE PORCH - MORNING
Detected names (may be incomplete or contain aliases): SILAS CROWE, BESSIE MARSH, LITTLE JOE TALLCHIEF, ABERNATHY
* 1 A ¶ A dusty main street, a hitching rail, a water trough.
* 2 A Quiet.
* 3 A A wind chime of old spoons clinks.
4 A ¶ SILAS CROWE, fifties, black hat, graying mustache, a stranger who sits on a barrel with a tin cup of coffee, looks up as BESSIE MARSH, forties, the store owner, sweeps the boards by the door, and LITTLE JOE TALLCHIEF, twelve, rolls a hoop down the street with a stick, and REV. ABERNATHY, sixty, a preacher in a rusty black coat, steps out of the church across the way and shades his eyes, all four of them noticing at the same instant the cloud of dust rising far out on the plains.
5 D BESSIE: Riders.
6 D SILAS: Four of them.
7 D LITTLE JOE (dropping the hoop): How can you tell?
8 D SILAS: Four plumes. Hush.
9 D REV. ABERNATHY (calling across the street): Mrs. Marsh, is that the Dalton boys?
10 D BESSIE: God help us if it is.
11 A ¶ Silas stands, sets down his cup, and unbuttons his coat.
12 A Bessie leans the broom against the wall.
13 A Little Joe edges toward the porch steps.
14 A Rev. Abernathy crosses the road with surprising speed, his Bible clutched to his chest.
15 D REV. ABERNATHY (arriving): Silas Crowe. I know you from somewhere.
16 D SILAS: Never been here, Reverend.
17 D REV. ABERNATHY: Springfield, 'seventy-eight. The tent revival.
18 D SILAS: You must be thinking of another man.
19 D BESSIE: He's thinking of the man on the wanted poster in my window.
20 D SILAS (a thin smile): Mrs. Marsh, you're sharper than your broom.
21 D LITTLE JOE: Mr. Crowe, are you an outlaw?
22 D SILAS: I'm a retired one.
* 23 A ¶ The dust cloud grows.
* 24 A The riders become shapes, then men.
* 25 A Their hats are low.
26 A Bessie and the Reverend both step back, and Little Joe slips behind the barrel, and Silas Crowe, still smiling, takes off his hat and sets it on the rail.
27 D SILAS [CONT'D]: Ma'am, a cup of that coffee wouldn't hurt.
28 D BESSIE: You expecting company?
29 D SILAS: I expect they'll want to talk.
30 A ¶ She pours.
31 A He drinks.
32 A The riders pull up at the hitching rail.
33 A The lead one tips his hat, sees Silas, and lets out a long breath.
34 D SILAS [CONT'D] (softly): Morning, boys.

### SCENE s02253 | EXT. CATTLE PEN AT DUSK - SUNDAY
Detected names (may be incomplete or contain aliases): HANK YAZZIE, MILLIE, LAZARUS, PETE
* 1 A ¶ Dust.
* 2 A Lowing steers.
* 3 A A split-rail fence, a bucket, a lantern on a post.
4 A ¶ HANK YAZZIE, forties, leans on the fence.
5 A MILLIE, thirties, a cook in a flour-dusted apron, ladles beans from a pot.
6 A LAZARUS, sixty, a one-eyed drover, sits on an upturned bucket whittling.
7 A PETE, nineteen, new on the crew, brushes a horse.
8 D MILLIE (to everyone): Supper's up.
9 D HANK: Smells good.
10 D LAZARUS: Smells like boots.
11 D MILLIE: Then don't eat it, Laz.
12 D LAZARUS: I'll eat it.
13 D PETE: Mrs. Millie, can I have seconds?
14 D MILLIE: You haven't had firsts.
15 D PETE: I'm planning ahead.
16 D HANK: Pete, how's the bay mare?
17 D PETE: Limping, Mr. Yazzie.
18 D HANK: Which leg?
19 D PETE: Left front.
20 D LAZARUS: It's the right.
21 D PETE: It's the left.
22 D LAZARUS (muttering): Boy can't tell his left from his own elbow.
23 D MILLIE: Lazarus.
24 D LAZARUS: I'm just saying.
25 D HANK: Look at the hoof, Pete. Look, not guess.
26 D PETE: Yes, sir.
27 A ¶ He crouches.
28 A Lifts the mare's foot.
29 A Squints.
30 D PETE [CONT'D]: Stone.
31 D HANK: Pick it out.
32 D LAZARUS: Right front. Told you.
33 D PETE: Left.
34 D LAZARUS: Right!
35 D HANK: Everyone eat.
36 A ¶ They quiet.
37 A Millie passes bowls.
* 38 A The steers settle.
39 A Lazarus slowly resumes whittling.

### SCENE s02254 | EXT. PUBLIC POOL - DIVING PLATFORM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): NOOR, FELIX
* 1 A ¶ An empty municipal pool at closing time.
* 2 A The water is green-blue and still.
* 3 A A ten-meter platform rises above it, rust at the joints, a faded sign reading DIVE AT OWN RISK.
4 A ¶ NOOR, fifteen, in a black one-piece and a wet towel around her shoulders, stands at the base of the ladder with her toes curled around the bottom rung, and FELIX, sixteen, her older cousin, in cutoffs and a tank top, sits in a plastic lifeguard chair eating sunflower seeds and spitting the shells into the pool, and neither of them says anything for a while, and the filter hums, and the drain gurgles, and a plane crosses the pink sky.
5 D FELIX: You don't have to.
6 D NOOR: I know.
7 D FELIX: It's just a platform.
8 D NOOR: It's ten meters.
9 D FELIX: It's ten meters of nothing, then water.
10 D NOOR: That's what I'm afraid of.
11 A ¶ She puts a foot on the second rung.
12 A Takes it off.
13 A Felix watches without comment, rolling a seed between his teeth.
14 D FELIX: Dad did it when he was fourteen.
15 D NOOR: Uncle Rob never did anything he said he did.
16 D FELIX: Okay, that's fair.
17 A ¶ She climbs three rungs, then four, then stops, her knuckles pale on the rail.
18 A Felix stands up, tosses the empty seed bag into a trash can, and walks to the edge of the pool.
19 A He kneels there, looking up.
20 D FELIX [CONT'D]: I'll be right here.
21 D NOOR: You can't catch me from ten meters.
22 D FELIX: I'll catch you after.
23 A ¶ She exhales.
24 A Climbs.
* 25 A The rungs ring under her feet.
26 A At the top, she stands at the edge of the board with her arms wrapped around herself, her wet hair dripping.
* 27 A Far below, Felix is very small.
28 D NOOR [CONT'D] (calling down): Don't watch.
29 D FELIX: I'm watching.
30 D NOOR: Felix!
31 D FELIX: Okay, I'm not watching.
32 A ¶ He covers his eyes with both hands.
33 A She laughs, a breath of a sound, and steps off.

### SCENE s02255 | INT. FERRY CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): AGENT TORVALD, MERCEDES, JIN, HADIZA, COLM, BEATRIX
* 1 A ¶ A vast steel cavern, trucks and cars chained to the floor.
* 2 A Engines idle.
* 3 A A low, constant drone.
* 4 A Overhead lamps in cages cast slatted shadows.
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
* 28 A The van's rear doors swing open.
* 29 A Rows of wooden crates, stenciled in a foreign alphabet.
30 A He lifts a lid.
* 31 A Straw.
* 32 A Beneath it, bundles of cash wrapped in plastic.
* 33 A ¶ Silence.
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
* 60 A The pistol clatters across the deck.
61 A Jin dives on it.
62 A Mercedes sits on Beatrix before she can reach it.
63 A Torvald exhales for the first time in a minute.
64 D TORVALD (to Colm): Thank you.
65 D COLM: Mind the straw. It's flammable.

### SCENE s02256 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): ALDER, POSY, GARRICK, TILDA, RUDO, PENHALLOW
* 1 A ¶ A circular room with a cast-iron stove, six cots, shuttered windows.
* 2 A A storm throws rain against the glass.
* 3 A Candle stubs gutter on the sill.
4 A ¶ ALDER, forties, a coast guard captain, stands near the stove.
5 A POSY, twenty, a young lighthouse apprentice, huddles on a cot.
6 A GARRICK, fifties, a retired seaman, sits cleaning a rifle.
7 A TILDA, thirties, a nurse, bandages a cut on RUDO's arm.
8 A RUDO, thirties, a fisherman, grimaces.
* 9 A ¶ Something thumps on the roof.
10 D ALDER (to the room): Nobody panic.
11 D POSY: It's the wind.
12 D GARRICK: That wasn't the wind.
13 D TILDA (whispering): Hold still, Rudo.
14 D RUDO: I'm holding still.
* 15 A ¶ Another thump.
* 16 A Dust sifts from the ceiling.
17 D ALDER (muttering): Come on, come on.
18 D POSY (to Alder): Captain, what is it?
19 D ALDER: I don't know.
* 20 A ¶ The stove door rattles.
* 21 A The windows shudder.
* 22 A Then silence.
* 23 A ¶ A knock at the door.
* 24 A Three slow knocks.
25 A ¶ They all look at Alder.
26 A He steps forward, hand on his holster, and slides back the bolt.
27 A ¶ On the threshold stands MR. PENHALLOW, sixties, drenched, in a sou'wester too small for his frame.
28 A He smiles with all his teeth.
29 D MR. PENHALLOW: Good evening. I'm so sorry to disturb you. My boat has been lost.
30 D ALDER: Come in out of the rain.
31 D MR. PENHALLOW: You are kind.
32 A ¶ He steps in.
* 33 A The candle flames bend toward him.
34 A Garrick lifts the rifle.
35 D GARRICK (low): Captain.
36 D ALDER: I see it.
37 D POSY (whispering): His feet.
38 A ¶ No one looks down.
39 A Nobody dares to.
* 40 A The puddle spreading from Penhallow's boots is dark, thick, and not rainwater.

### SCENE s02257 | INT. ROADSIDE INN - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS, CORAZON, TUCK
* 1 A ¶ A cramped room, a table, a candle.
* 2 A Three chairs.
* 3 A A bottle of rye between them.
4 A ¶ ELIAS, fifties, a bounty hunter, mud on his boots.
5 A CORAZON, thirties, the innkeeper, sleeves rolled up.
6 A TUCK, twenty, a boy with a bandaged hand.
7 D ELIAS: You know who I'm after.
8 D CORAZON: I know a lot of people.
9 D ELIAS: A man with a red scarf and a limp.
10 D CORAZON: Plenty of limps in this valley.
11 D ELIAS: Not plenty with a scarf.
12 D TUCK (quiet): He was here Tuesday.
13 D CORAZON: Tuck.
14 D TUCK: He was, Mama. He paid for the room with a gold coin.
15 D ELIAS: A gold coin. Where's the coin now?
16 D CORAZON: In the church box.
17 D ELIAS: Then I'll want to see the church box.
18 D CORAZON: It's Sunday. The padre is asleep.
19 D ELIAS: Then wake him.
20 D TUCK: Mister, he said he was going to Albuquerque.
21 D ELIAS: Did he say why?
22 D TUCK: To see a doctor.
23 D ELIAS: For the limp.
24 D TUCK: For his heart. He said it was broken.
25 A ¶ Elias pours a drink.
26 A Doesn't touch it.
27 D ELIAS: He killed a family in Santa Rosa. Three children.
28 D CORAZON: God forgive him.
29 D ELIAS: I don't want God to. That's my job.
30 D TUCK: Mama, tell him.
31 D CORAZON: Tell him what?
32 D TUCK: About the letter.
33 A ¶ Corazon closes her eyes.
34 A Elias leans forward.
35 D ELIAS: What letter?
36 D CORAZON: He left a letter. Addressed to a priest in Albuquerque. I didn't mail it.
37 D ELIAS: Why not?
38 D CORAZON: Because I read it.
39 D TUCK: She cried all night.
40 D ELIAS: Ma'am. What did it say?
41 D CORAZON: That he wanted to be found.
* 42 A ¶ A long silence.
* 43 A The candle gutters.
44 A Elias sets his glass down.
45 D ELIAS: Give me the letter.
46 D CORAZON: It's mine now.
47 D ELIAS: Ma'am.
48 D CORAZON: Let him find his own way to the rope. Take the letter, you'll be the one who took him there.
49 A ¶ Elias studies her.
50 A Then Tuck.
51 A Then the bottle.
52 D ELIAS: Keep the letter. Mail it tomorrow.
53 D CORAZON: And you?
54 D ELIAS: I'll ride to Albuquerque ahead of it.

### SCENE s02258 | INT. HIGH SCHOOL GYM - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): WHITLOCK, DRE, KENZIE, SAL, MOOKIE, ILYA, ALL
* 1 A ¶ Cinderblock walls painted maroon.
* 2 A Benches bolted to the floor.
* 3 A A whiteboard with X's and O's smeared into gray.
4 A ¶ COACH BARNABY "BARN" WHITLOCK, fifties, a whistle around his neck and a clipboard under his arm, paces.
5 A DRE, seventeen, the point guard.
6 A KENZIE, sixteen, a power forward, ties her sneakers.
7 A SAL, eighteen, a center, towel over his head.
8 A MOOKIE, fifteen, the smallest, bounces a ball.
9 A ILYA, seventeen, a transfer, stares at his hands.
10 D COACH WHITLOCK (to the room): Listen up. Fourth quarter, eight points down. This is the league final. Eight points, four minutes.
11 D DRE: We can do eight.
12 D KENZIE: We've done more.
13 D SAL (muffled under the towel): We have not.
14 D COACH WHITLOCK: Sal, towel off your head.
15 D SAL: Yes, Coach.
16 D COACH WHITLOCK: Mookie, put the ball down.
17 D MOOKIE: Sorry, Coach.
18 A ¶ He doesn't put it down.
19 A Whitlock glares.
20 A Mookie tucks it under his arm.
21 D COACH WHITLOCK: Dre, you bring it up fast. Kenzie, set the screen. Sal, roll to the rim. Ilya.
22 D ILYA: Yes, Coach?
23 D COACH WHITLOCK: You're the corner shooter.
24 D ILYA: I missed my last four.
25 D COACH WHITLOCK: You'll hit the next one.
26 D ILYA (to himself): I don't know.
27 D KENZIE (to Ilya): You will. Don't think.
28 D COACH WHITLOCK: That's right. Don't think. Shoot.
* 29 A ¶ A pounding at the door.
* 30 A A buzzer blares in the gym beyond.
31 D COACH WHITLOCK: That's two minutes! Up!
32 A ¶ The team rises as one.
33 A Dre slaps Sal's shoulder.
34 A Kenzie punches Ilya's arm, gently.
35 A Mookie scrambles onto a bench and, for a moment, stands taller than anyone.
36 D MOOKIE: We got this!
37 D COACH WHITLOCK (drily): Get off the bench, Mookie.
38 A ¶ Mookie hops down.
39 A They form a circle, hands in the middle.
40 D DRE: One, two, three.
41 D ALL: Go!
42 A ¶ They file out.
43 A Whitlock watches them go, then glances at the whiteboard and wipes it clean with his sleeve.
44 D COACH WHITLOCK [CONT'D] (muttering): Eight points. Four minutes. Please.

### SCENE s02259 | INT. MORTUARY BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): EDIE, WINNIFRED
* 1 A ¶ White tile.
* 2 A A drain in the floor.
* 3 A Steel drawers set into the wall, each with a numbered tag.
* 4 A A single bulb hums over a stainless table.
5 A ¶ EDIE, thirties, a night attendant in a gray smock, stands with a clipboard at the foot of the table, and WINNIFRED, seventies, the visiting widow in a black veil and sensible shoes, hovers beside drawer fourteen with her hand on the handle, and neither of them speaks until the bulb flickers and every drawer in the wall slides open an inch at once and Edie drops the clipboard and Winnifred, without moving, begins to hum.
6 D EDIE: Ma'am, step away from the wall.
7 D WINNIFRED: I'm not touching anything.
8 D EDIE: The drawers are opening.
9 D WINNIFRED: They always do for me.

### SCENE s02260 | EXT. TRACK, MUNICIPAL STADIUM - PRE-DAWN
Detected names (may be incomplete or contain aliases): KALINDA
* 1 A ¶ Empty bleachers.
* 2 A Floodlights at half power.
* 3 A Frost on the infield.
* 4 A Lane lines glow white.
5 A ¶ KALINDA, thirty-two, a distance runner in a thin jacket and tights, stretches against the starting block, one earbud in, her phone strapped to her upper arm.
* 6 A A bruise-colored sky pushes against the east wall.
7 A ¶ She checks her watch.
8 A Taps her phone.
9 D KALINDA [V.O.] (her own recorded voice, wry): Day one-oh-seven. Hamstring's tight. Don't be a hero.
10 A ¶ Kalinda grimaces, a small laugh.
11 D KALINDA: Noted.
12 A ¶ She jogs a slow lap.
* 13 A Her breath puffs in the cold.
14 A At the far curve, she stops, retightens a lace.
15 D KALINDA [V.O.]: Day ninety. Hit the wall at three miles. Cried a little. Kept going.
16 A ¶ She straightens.
17 A Shakes out her arms.
18 A Breaks into a steady pace, long strides, breath in quarter time.
19 D KALINDA [V.O.]: Day sixty. Told Mom I might retire. She said retire from what? I said running. She said, you never started.
20 A ¶ Kalinda snorts.
21 A Rounds the curve.
22 D KALINDA [V.O.]: Day one. Four hundred meters. Walked half. Felt like an idiot.
23 A ¶ She lengthens her stride.
* 24 A The sky pinks.
25 D KALINDA [V.O.]: Whoever you are today, run like you did on day one. Like you had nothing to prove.
26 A ¶ She nods once to the empty stands.
* 27 A Runs on, and the floodlights, one by one, click off as dawn takes over.

### SCENE s02261 | INT. GRANDMOTHER'S ATTIC - EVENING
Detected names (may be incomplete or contain aliases): GRANDMA ODILE, DAD MWANGI, BOY, THEO
* 1 A ¶ Slanted beams.
* 2 A Trunks, a dressmaker's dummy, a rocking horse with one eye.
* 3 A A single round window.
4 A ¶ GRANDMA ODILE, seventies, in a flowered housecoat, sits on a trunk with a shoebox on her knees.
5 A DAD MWANGI, forties, crouches by a stack of framed photos, wiping dust.
6 A ¶ A BOY, eight, in a too-big pajama top, climbs the attic ladder and peeks over the edge.
7 D BOY: Are you guys up here?
8 D GRANDMA ODILE: Come, sweet pea.
9 A ¶ He climbs the rest of the way.
10 A Pads across the floor.
11 D BOY: What's in the box?
12 D GRANDMA ODILE: Letters.
13 D BOY: From who?
14 D GRANDMA ODILE: From your grandfather. Before he was your grandfather.
15 D DAD MWANGI: Theo, you should be in bed.
16 D THEO: Grandma's telling a story.
17 D GRANDMA ODILE (to Mwangi): Let him stay.
18 A ¶ Mwangi sighs.
19 A Sits.
20 D THEO: Grandma, are the letters sad?
21 D GRANDMA ODILE: Some are. Some are silly. This one is about a goat.
22 D THEO: A goat!
23 A ¶ She unfolds the page.
24 A Mwangi smiles despite himself.

### SCENE s02262 | INT. HOSPITAL ROOM 412 - EARLY MORNING
Detected names (may be incomplete or contain aliases): HYE-WON PARK, LINDGREN, NURSE ABIOLA
* 1 A ¶ Blinds half-open.
* 2 A A low monitor beeps.
* 3 A A tray with an untouched breakfast.
* 4 A A vase of wilting carnations on the sill.
5 A ¶ DR. HYE-WON PARK, forties, a gray cardigan over her scrubs, enters with a chart.
6 A MR. LINDGREN, seventy, lies propped in bed in a thin hospital gown, white stubble, an IV in his hand.
7 A NURSE ABIOLA, thirties, adjusting a pillow, glances up.
8 D HYE-WON: Good morning, Mr. Lindgren.
9 D LINDGREN: Is it?
10 D HYE-WON: I hope so.
11 A ¶ She sets the chart down.
12 A Pulls a stool to the bedside.
13 A Abiola steps back, letting her take the space.
14 D HYE-WON [CONT'D]: How did you sleep?
15 D LINDGREN: Fine.
16 D ABIOLA: He was up twice.
17 D LINDGREN: I was not.
18 D ABIOLA: You asked me for the radio.
19 D LINDGREN: That's not sleeping badly. That's listening.
20 A ¶ Hye-won almost smiles.
21 A She reaches for his wrist, checks his pulse.
22 D HYE-WON: Your tests came back.
23 D LINDGREN: And?
24 D HYE-WON: I'd like to go through them with you.
25 D LINDGREN: Just say it.
26 A ¶ Hye-won exchanges a glance with Abiola.
27 A Abiola looks at the floor.
28 D HYE-WON: It's in the pancreas. It has spread to the liver.
29 A ¶ He turns his head to the window.
30 A His jaw works.
* 31 A The monitor keeps its steady beep.
32 D LINDGREN: How long?
33 D HYE-WON: Months. Perhaps less.
34 A ¶ He nods.
35 A Reaches for the glass of water on the tray.
36 A His hand shakes.
37 A Abiola moves to help but he waves her off.
38 A He drinks.
39 A Sets the glass down with great care.
40 D LINDGREN: My wife used to say I'd outlive the doctors.
41 D HYE-WON: She might have been right.
42 D LINDGREN: She was usually right. It was annoying.
43 A ¶ Abiola laughs, a short sound, then covers her mouth.
44 A Hye-won puts a hand on his arm.
45 D HYE-WON: We'll keep you comfortable.
46 D LINDGREN: I know.
47 A ¶ He picks at the corner of the blanket.
48 A Abiola straightens the carnations, plucks off a brown petal.
49 D LINDGREN [CONT'D]: Can I have the radio?
50 D ABIOLA: Of course.
51 A ¶ She fetches it from the drawer, plugs it in, and finds a station.
* 52 A A soft piano.
53 A He closes his eyes.

### SCENE s02263 | INT. CUBICLE FARM - MONDAY MORNING
Detected names (may be incomplete or contain aliases): SHANICE, COLETTE, BARRY, HR
* 1 A ¶ Gray partitions.
* 2 A Motivational posters.
* 3 A A potted plant dying on a filing cabinet.
4 A ¶ SHANICE, thirties, a headset on, taps a keyboard.
5 A COLETTE, forties, her supervisor, stands at the cubicle entrance with a coffee.
6 A BARRY, fifties, from HR, hovers behind with a binder.
7 D COLETTE (to the whole floor): Team meeting, five minutes, conference B.
8 A ¶ Heads pop up above partitions.
* 9 A A groan.
10 D SHANICE (muttering): Another meeting.
11 D COLETTE: She heard that.
12 D BARRY: She definitely heard that.
13 A ¶ Shanice pulls off her headset.
14 A Colette leans against the partition.
15 D COLETTE: Shanice, a word.
16 D SHANICE: Sure.
17 D COLETTE: You've been here seven years.
18 D SHANICE: Eight.
19 D COLETTE: Eight. And we've decided to restructure.
20 A ¶ Barry opens his binder.
21 A Shanice stares at it.
22 D SHANICE: Restructure.
23 D BARRY: Position eliminated, effective today.
24 D SHANICE (to the floor, loudly): They just fired me!
* 25 A ¶ Silence.
26 A Every head disappears behind the partitions.

### SCENE s02264 | INT. COUNTRY HOUSE DINING ROOM - 1840S - EVENING
Detected names (may be incomplete or contain aliases): AGNES, FOTHERGILL, EDMUND
* 1 A ¶ A long mahogany table laid for three.
* 2 A Silver, crystal, candles.
* 3 A A fire crackles.
* 4 A A portrait of a stern ancestor presides over the sideboard.
5 A ¶ AGNES, forties, in dove-gray silk, sits at the head.
6 A MR. FOTHERGILL, fifties, a visiting solicitor, to her right, with a napkin tucked in his collar.
7 A EDMUND, twenty, her son, sits opposite him, turning a wine glass by its stem.
8 A ¶ She lifts the soup tureen herself.
9 A Ladles three portions.
10 A Her hand is quite steady.
11 D FOTHERGILL: This is excellent.
12 D AGNES: Cook will be pleased.
13 A ¶ He samples it.
14 A She watches him.
15 A Edmund watches the glass.
16 D FOTHERGILL: Mrs. Whitcombe, I regret I have news.
17 D AGNES: Mr. Fothergill, you always have news. Eat first.
18 A ¶ He eats.
* 19 A A pause.
* 20 A The fire pops.
21 D EDMUND: Mother, I think perhaps we should hear it.
22 D AGNES: After soup.
23 D EDMUND: But if it concerns--
24 D AGNES: After soup, Edmund.
25 A ¶ He subsides.
26 A Sets down his glass.
* 27 A The candle flames shiver as a servant's footsteps pass in the hall and fade.
28 D FOTHERGILL: The estate. The creditors have called in the note.
29 A ¶ Agnes sets down her spoon.
30 A Aligns it with the edge of her bowl.
31 D AGNES: How much?
32 D FOTHERGILL: Four thousand pounds.
33 D EDMUND: We don't have four thousand.
34 D FOTHERGILL: I know.
35 D EDMUND: Then we'll sell the east pasture.
36 D AGNES: The east pasture was your father's.
37 D EDMUND: Father is dead.
38 A ¶ She looks at him.
39 A He drops his eyes.
40 A Fothergill coughs into his napkin.
41 D FOTHERGILL: There is another way.
42 D AGNES: There always is.
43 D FOTHERGILL: A marriage. A gentleman in Bath, a widower of good family, has inquired--
44 D AGNES (to Edmund): Pass the bread.
45 D EDMUND: Mother.
46 D AGNES: The bread, Edmund.
47 A ¶ He passes it.
48 A She tears off a piece, takes her time buttering it.
49 A Fothergill waits, napkin twisted in his fist.
50 D FOTHERGILL: It would settle the debt.
51 D AGNES: And whom does the gentleman wish to marry?
52 A ¶ Fothergill looks, slowly, at Edmund.
53 A Edmund stares back, color draining from his face.
54 A Agnes, not looking at either of them, takes a bite of bread.
55 D AGNES [CONT'D] (mildly): I see. More soup, Mr. Fothergill?
56 A ¶ He holds out his bowl.
57 A She fills it.
58 A He takes it with a trembling hand and does not meet her eyes.
59 A Edmund rises.
60 D EDMUND: Excuse me.
61 D AGNES: Sit down.
62 A ¶ He doesn't.
63 A He walks to the fire and stands with his back to the table, his shoulders very straight.
64 D FOTHERGILL (clearing his throat): The offer remains open until Friday.
65 D AGNES: Then we shall eat our dinner, and sleep, and tomorrow I shall write to Bath.
66 D FOTHERGILL: Madam?
67 D AGNES: Whatever I write, Mr. Fothergill, is my own business.
68 A ¶ She resumes her soup.
69 A At the fire, Edmund lifts a hand and wipes his eyes, quickly, with the back of his wrist.

### SCENE s02265 | INT. HOCKEY RINK - PLAYERS' BENCH - NIGHT
Detected names (may be incomplete or contain aliases): TARIQ, DEV, COACH EDDIE, HAL
* 1 A ¶ Cold breath.
* 2 A Steel blades on ice.
* 3 A The crowd's roar leaks from the stands.
4 A ¶ TARIQ, twenty-two, a winger, grips his stick, eyes on the ice.
5 A DEV, twenty-four, a center, shifts beside him, tapping his skate.
6 A COACH EDDIE, sixty, leans over the boards.
7 A HAL, fifties, the referee, skates up to the bench.
8 D EDDIE: Tariq, you're up.
9 D TARIQ: Coach, he's been on all night.
10 D EDDIE: Then he's tired. Go.
11 A ¶ Dev elbows Tariq.
12 D DEV: Cut left. He always goes right.
13 D TARIQ: You sure?
14 D DEV: He told me once.
15 D HAL: Two minutes, gentlemen.
16 A ¶ Tariq vaults the boards.
17 A Dev follows.
18 A Eddie claps once, hard, and the puck drops.

### SCENE s02266 | INT. COURTHOUSE STAIRWELL - DAY
Detected names (may be incomplete or contain aliases): CONSTANCE ADEYEMI, RONAN BLAKE
* 1 A ¶ Concrete steps, a steel railing, a window of wired glass.
* 2 A Muffled footsteps echo from other floors.
3 A ¶ CONSTANCE ADEYEMI, forties, a defense lawyer in a navy suit, hair pulled back so tight it pulls her eyes, leans against the railing with a coffee she hasn't touched.
4 A RONAN BLAKE, thirties, her client, in a borrowed tie two inches too short, holds a rolled-up folder like a club.
5 D RONAN: You said it would be quick.
6 D CONSTANCE: It is quick.
7 D RONAN: It's been four hours.
8 D CONSTANCE: Four hours is quick for murder.
9 D RONAN (small laugh): Manslaughter.
10 D CONSTANCE: Don't say the word out loud.
11 A ¶ He nods.
12 A Goes quiet.
13 A Down the stairwell a door bangs; both of them turn their heads, wait, then relax.
14 D CONSTANCE [CONT'D]: The jury is back at three.
15 D RONAN: How do I look?
16 A ¶ She studies him: the tie, the folder, the way his shoulders curl inward.
17 A She reaches out and unrolls the folder, flattens it, hands it back.
18 D CONSTANCE: Carry it like a book. Not like a weapon.
19 A ¶ He does.
20 A Straightens his tie.
* 21 A It doesn't help.
22 D RONAN: Will they believe me?
23 D CONSTANCE: They'll believe what you show them.
24 D RONAN: I'm not good at showing.
25 D CONSTANCE: I know.
26 A ¶ She sets her cup on the rail.
27 A Takes out a handkerchief and pushes it into his hand.
28 D CONSTANCE [CONT'D]: When they read the verdict, look at the jury. Not at me. Not at the floor.
29 D RONAN: Why?
30 D CONSTANCE: Because they remember who looked.
31 A ¶ He folds the handkerchief into a neat square and slips it into his breast pocket, where it sits crooked and white.
32 D RONAN: You've done this before.
33 D CONSTANCE: Yes.
34 D RONAN: How many times?
35 D CONSTANCE: Enough.
36 A ¶ She picks up the cup again, and this time she drinks.

### SCENE s02267 | EXT. FOXHOLE ABOVE A SUNKEN ROAD - DAWN
Detected names (may be incomplete or contain aliases): LIEUTENANT PIOTR WOZNIAK, CAPTAIN HAVERFORD
* 1 A ¶ Frost on the parapet.
* 2 A The cold earth smells of wet iron.
* 3 A A field telephone sits on an ammunition crate, wires snaking away into the dark.
4 A ¶ LIEUTENANT PIOTR WOZNIAK, thirties, hollow-cheeked, sits against the dirt wall with his knees drawn up and a tin of cold stew in his lap.
5 A He hasn't eaten any.
6 A His helmet is pushed back and his eyes are on the gray horizon.
* 7 A ¶ The field telephone rings.
* 8 A Once, sharp, then silence, then again.
9 A ¶ He picks up the receiver slowly, as though it might burn him.
10 D WOZNIAK: Wozniak.
11 D CAPTAIN HAVERFORD [V.O.] (over the phone, crackling): Piotr. It's Haverford. I've got your orders.
12 D WOZNIAK: Go ahead, sir.
13 D CAPTAIN HAVERFORD [V.O.]: Hold the road until noon. Then fall back to the ridge.
14 D WOZNIAK: We have twelve men, sir.
15 D CAPTAIN HAVERFORD [V.O.]: I know what you have.
16 A ¶ Wozniak is silent.
* 17 A A distant mortar thuds.
* 18 A Soil trickles from the parapet.
19 D WOZNIAK: Twelve men, and ammunition for an hour.
20 D CAPTAIN HAVERFORD [V.O.]: Piotr. I'm sorry.
21 D WOZNIAK: Sir, I'm not complaining.
22 D CAPTAIN HAVERFORD [V.O.]: No. You never do.
23 A ¶ He looks at the stew.
24 A Sets it aside.
25 D WOZNIAK: Is there word from the north?
26 D CAPTAIN HAVERFORD [V.O.]: Nothing. The line's been dead since midnight. You're my only link on this side.
27 D WOZNIAK: Then I'll hold, sir.
* 28 A ¶ A pause.
* 29 A The line hisses.
30 D CAPTAIN HAVERFORD [V.O.]: Do you have a family, Lieutenant?
31 D WOZNIAK: A sister. In Gdansk.
32 D CAPTAIN HAVERFORD [V.O.]: Write to her. Today.
33 D WOZNIAK: Yes, sir.
34 D CAPTAIN HAVERFORD [V.O.]: Good man.
* 35 A ¶ The line goes dead.
36 A Wozniak holds the receiver a long moment, then sets it gently back on its cradle.
37 A ¶ He stands, brushes the frost from his sleeves, and looks across the sunken road at the first thin light.

### SCENE s02268 | INT. FAMILY LIVING ROOM - CHRISTMAS EVE
Detected names (may be incomplete or contain aliases): PAPA LUKAS, UNCLE SANDOR, COUSIN BEA, COUSIN TEDDY
* 1 A ¶ A small tree, tilted.
* 2 A Wrapping paper in drifts.
* 3 A A space heater ticks.
4 A ¶ PAPA LUKAS, sixties, in a Santa hat, stands with a plate of cookies.
5 A UNCLE SANDOR, fifties, wedged in an armchair, nurses a beer.
6 A COUSIN BEA, twelve, cross-legged on the floor, sorts presents.
7 A COUSIN TEDDY, nine, hides behind the couch with a water gun.
8 D PAPA LUKAS (to the room): Everybody, cookies.
9 D UNCLE SANDOR: He's making them again, Lukas. Stop him.
10 D PAPA LUKAS: Who is "he"?
11 D UNCLE SANDOR: Teddy! Behind the couch!
12 D TEDDY (popping up): I'm not!
13 A ¶ He fires.
14 A A jet of water hits Sandor in the face.
15 A Sandor roars, lunges, tangles in the lamp cord, topples the lamp.
16 A Bea and Lukas dive for it together; both catch it at the same moment and freeze.
17 D BEA: Papa, we're the best team.
18 D PAPA LUKAS (muttering): We're a disaster.
19 A ¶ He sets the lamp upright.
20 A Sandor, dripping, glares at Teddy.
21 D UNCLE SANDOR: You're in trouble, nephew.
22 D TEDDY: It's Christmas!
23 D UNCLE SANDOR: Then Santa's bringing you coal.
24 A ¶ Teddy bursts into laughter.
25 A Bea joins.
26 A Papa Lukas holds out the plate, and Sandor, dripping, takes a cookie.

### SCENE s02269 | EXT. RUINED CATHEDRAL SQUARE - DUSK
Detected names (may be incomplete or contain aliases): LIEUTENANT CORDELIA BRANDT, SERGEANT OSEI, PRIVATE MIKHAIL
* 1 A ¶ The nave's roof is gone.
* 2 A The columns stand like charred teeth against a violet sky.
* 3 A Rubble lies in drifts, and in the middle of it, fallen from its niche, an enormous stone angel lies on her back with her wings broken, her face turned to the clouds.
4 A ¶ LIEUTENANT CORDELIA BRANDT, thirties, hatless, her fair hair gone dark with dust, sits on the angel's chest with a map across her knees and a cigarette burned down to the filter.
5 A SERGEANT OSEI, forties, tall, broad, a rifle slung across his back, crouches to refill a canteen from a cracked fountain, and PRIVATE MIKHAIL, nineteen, thin as a rake, leans against a pillar with his eyes closed and his arms wrapped around a bundle of blankets and every so often his lips move, as though in prayer or in sleep.
6 A ¶ For a long time, none of them speaks.
* 7 A The wind lifts ash off the stones.
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
* 46 A ¶ For a time they watch the sky darken, the first star appearing between two broken columns.
47 D OSEI: My grandmother said every church has an angel left standing.
48 D BRANDT: Yours fell.
49 D OSEI: Then she's resting.
50 A ¶ Brandt rests her head against the cold stone of the wing.
51 A Her cigarette, long out, drops from her fingers.
52 A Nobody picks it up.

### SCENE s02270 | INT. HYPERBARIC CHAMBER, HARBOR CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OKONKWO, KAIMANA PELE, TOBY LINDQVIST, IOANA BALAN
* 1 A ¶ A steel cylinder the colour of old pewter, bolted to the floor of a converted fish-cannery.
* 2 A Portholes sweat.
* 3 A Somewhere behind the walls a compressor breathes in long, patient sighs.
4 A ¶ DR. ADAEZE OKONKWO, fifties, silver braids pinned under a surgical cap, kneels beside a gurney bolted to the chamber floor.
5 A Her reading glasses hang on a beaded cord.
6 A ¶ KAIMANA PELE, twenty-six, a commercial diver with shoulders like a harbour wall, lies strapped to it, skin the grey of wet slate.
7 A His fingers claw at the air.
8 A ¶ TOBY LINDQVIST, a gangly night nurse in oversized scrubs, hovers at the porthole outside, a radio handset pinched in his fist.
9 D KAIMANA: Doc. Doc, my hands. They're gone.
10 D ADAEZE: Stay with me, Kai. Look at my face.
11 D TOBY [O.S.] (through the speaker, thin and crackling): Pressure's dropping on the gauge. Adaeze, we're losing the seal.
12 D ADAEZE: Then close it, Toby!
13 A ¶ Kaimana convulses.
* 14 A The straps groan.
* 15 A A bubble of foam gathers at the corner of his mouth.
16 D ADAEZE [CONT'D]: Kai! Kaimana!
17 A ¶ IOANA BALAN, sixty, in a wool coat over a nightdress, pounds on the outer hatch with the flat of both hands.
18 A She is the diver's mother, and she has driven forty miles in slippers.
19 D IOANA (muffled): Let me in! He is my son!
20 D TOBY [O.S.]: Mrs. Balan, step back from the hatch!
21 D ADAEZE: Nobody opens that door!
22 D KAIMANA: Ma?
23 D ADAEZE: Oxygen up to one hundred. Now, Toby.
24 D ADAEZE: Breathe, Kai, slow, in through the nose!
25 D KAIMANA: I can't, I can't, Doc, it's too tight!
* 26 A ¶ A valve shrieks.
* 27 A The needle shivers, climbs, steadies.
* 28 A The compressor finds its rhythm again and the whole cylinder seems to exhale.
29 A ¶ Kaimana's back arches once, then settles against the gurney.
30 A His fingers uncurl.
31 A Colour seeps back into his face like tea into water.
32 D KAIMANA [CONT'D] (a whisper): I felt that. My hands. I felt that.
33 D ADAEZE: Good. Keep feeling.
34 A ¶ Adaeze sits back on her heels.
35 A She lets her glasses fall against her chest and presses both palms to her eyes.
36 D TOBY [O.S.]: Gauge is holding, Adaeze. We're okay.
37 A ¶ Outside the porthole, Ioana stops pounding.
38 A She lays her forehead against the cold glass and says something in Romanian to no one.
39 D IOANA (softly): Slava Domnului.

### SCENE s02271 | EXT. MISSOURI RIVER FERRY LANDING - DUSK
Detected names (may be incomplete or contain aliases): HOLLIS CRANE, PERPETUA VANCE, ELIAS TWOCROWS
* 1 A ¶ A flat-bottomed ferry is chained to a cottonwood stump, rocking on brown water the width of a county.
* 2 A The sky has gone the colour of a bruise.
3 A ¶ HOLLIS CRANE, lean and sun-cured, leans on the ferry rail.
4 A He wears a gun he has not touched in nine years.
5 A He watches the far bank without blinking.
6 A ¶ A woman stands at the ramp with a carpetbag in each hand.
7 A PERPETUA VANCE, forty, black mourning dress, hat pinned hard.
8 A She sets down one bag.
9 A She keeps the other.
10 D PERPETUA: You're the ferryman.
11 D HOLLIS: Was.
12 A ¶ He spits over the rail.
* 13 A The brown water takes it without comment.
14 D PERPETUA: Then who is.
15 D HOLLIS: Nobody. River's closed since the Tuesday flood. Company let us all go.
16 A ¶ She looks at the chain.
17 A She looks at him.
18 A She says nothing, which is its own kind of answer.
19 A ¶ She lifts the second bag and sets it on the plank between them.
* 20 A The latch is open a finger's width.
* 21 A Inside, the blued steel of a revolver catches the last light.
22 D HOLLIS [CONT'D] (quiet): Ma'am.
23 D PERPETUA: My husband crossed here a week ago. The man who took his fare. I'd like a word.
* 24 A ¶ A shout rolls over the water from the far bank, flattened by distance.
25 D ELIAS TWOCROWS [O.S.] (hailing): Hollis! Is that her? Is that the widow?
26 A ¶ He does not turn.
27 A His jaw works.
28 A The hand that rests on the rail begins, very slowly, to slide toward his hip.
29 D PERPETUA: Who is that?
30 D HOLLIS: My brother.
31 D ELIAS TWOCROWS [O.S.] (nearer, a rifle bolt clacking): Don't let her on the boat, Hollis!
32 A ¶ She steps onto the ferry.
* 33 A The planks complain.
34 A She puts her hand on the bag.
35 D PERPETUA: Then it was you who took the fare.
36 D HOLLIS: I took it for him.
37 A ¶ He draws.
38 A She draws.
* 39 A A crack splits the dusk, then another, and the cottonwood stump fountains bark.
40 A The chain snaps and the ferry lurches free, spinning into the current with the two of them still standing, still firing, on its drifting deck.

### SCENE s02272 | INT. RING STATION GREENHOUSE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER IRENKA VOSS, ENGINEER DESMOND ACHEAMPONG, BOTANIST LIN MEIHUA, PILOT RAFAEL ORTEGA, RAFI, NOOR AL-FARSI
* 1 A ¶ Rows of tomato vines under purple grow-lights.
* 2 A A curved window shows the dark and a slow turning arc of stars.
* 3 A A red warning strip pulses along the ceiling.
4 A ¶ COMMANDER IRENKA VOSS, fifties, grey crop, stands at the control panel.
5 A ENGINEER DESMOND ACHEAMPONG, thirties, grease on his sleeves, crouches by a coolant pipe.
6 A BOTANIST LIN MEIHUA, twenties, cradles a seedling tray.
7 A PILOT RAFAEL ORTEGA, called RAFI, leans in the doorway.
8 A Tech NOOR AL-FARSI, nineteen, sits cross-legged on a bench with a tablet.
9 D VOSS: Status.
10 D DESMOND: Coolant line's cracked. It's venting into the soil bed.
11 D LIN: That's our whole crop.
* 12 A ¶ The pipe bursts.
* 13 A A white jet of freezing mist fills the aisle.
14 A Desmond and Lin dive in opposite directions and slam into the shelving.
15 A Voss and Rafi drop to the floor.
16 A Noor yanks her knees up to her chest.
17 D RAFI: Cut the pump!
18 D NOOR: I can't, the panel's locked!
19 A ¶ Rafi and Desmond rush the pipe together, shoulders down, and clamp it between them with a jacket.
* 20 A The mist thins to a hiss.
21 A Voss and Lin crawl to the valve and haul it shut with both hands.
* 22 A ¶ Silence.
* 23 A The red strip stops pulsing.
24 D VOSS: Is anyone hurt?
25 D LIN: Just frozen.
26 A ¶ Desmond holds up a soaked tomato.
27 A He bites it.
28 A Everyone stares at him.
29 D DESMOND: Still good.
30 A ¶ Noor laughs first.
31 A Then all of them.

### SCENE s02273 | EXT. BOCCE COURT, FERRY DECK - AFTERNOON
Detected names (may be incomplete or contain aliases): TONINO FERRARI, MARCELLO DELUCA, SIGNORA PAOLA, LUCA
* 1 A ¶ A strip of crushed oyster shell has been raked flat on the stern of a car ferry.
* 2 A Gulls wheel.
* 3 A The deck hums with the engine, and every bowl rolls a little to starboard.
4 A ¶ TONINO FERRARI, seventy, in a cardigan the colour of tobacco, crouches over the pallino.
5 A MARCELLO DELUCA, sixty-eight, his brother-in-law of forty years, stands with a bowl cradled against his belly like a sleeping cat.
6 A SIGNORA PAOLA, the self-appointed umpire, perches on a cooler with a tape measure.
7 A Beside her LUCA, nine, holds the scorecard.
8 D TONINO: You nudged it.
9 D MARCELLO: I breathed on it.
10 A ¶ Tonino rises.
11 A He does not look at Marcello.
12 A He looks at the bowl, at the pallino, at the tape.
13 A He hands the tape to Luca without a word.
14 D PAOLA: Measure.
15 A ¶ Luca stretches the tape.
* 16 A Marcello's bowl is closer by the width of a thumbnail.
17 A Tonino takes his own bowl and, with a slow, deliberate underarm, sends it at Marcello's.
* 18 A The shells crack.
19 A He knocks it sideways, over the rail and into the wake.
20 A ¶ He stands there with his arm still extended.
21 A Marcello turns slowly, his mouth open, and the whole deck goes quiet but for the engine.

### SCENE s02274 | INT. STAGE STATION KITCHEN, DRY CREEK - LATE MORNING
Detected names (may be incomplete or contain aliases): ODELL PRUITT, MAUDE TEAGUE, ZEBEDIAH HOLLOWAY, ZEB, BARNABY
* 1 A ¶ A one-room adobe with a cuckoo clock that has run seven minutes slow since the Grant administration.
* 2 A Flies drift in the heat.
* 3 A A cast-iron stove ticks as it cools.
4 A ¶ ODELL PRUITT, fifties, stationmaster, wipes a tin cup with a rag that is dirtier than the cup.
5 A At the table MAUDE TEAGUE, thirties, a seed-and-feed saleswoman in a dust-grey travelling dress, peels a boiled egg.
6 A ZEBEDIAH HOLLOWAY, called ZEB, eighty, hat on indoors, whittles a stick down to nothing.
7 D ODELL: Coach is late.
8 D MAUDE: Coach is always late.
9 D ZEB: Wheel, probably.
10 D MAUDE: Or the Piute crossing.
11 D ODELL: It's never the Piute crossing.
12 D ZEB: Might be the Piute crossing.
* 13 A ¶ A horn sounds, faint and flat, out on the road.
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
* 27 A ¶ The cuckoo clock coughs, produces one grey wooden bird, and retires without a sound.

### SCENE s02275 | INT. CRYO-VAULT, DEEP STORAGE - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT KESTREL, PRIYA NAIR, OLUWASEUN, SEUN, GUNNAR, TESS HALVORSEN, OLD MAN BRIGHT
* 1 A ¶ Frost.
* 2 A Rows of sleeper pods under blue light.
3 A Six figures in thermals move between them.
4 A ¶ SERGEANT KESTREL, scarred, ex-security.
5 A DR. PRIYA NAIR, wire-rimmed, hands shaking.
6 A OLUWASEUN, nicknamed SEUN, a maintenance rat.
7 A GUNNAR, silent, huge.
8 A TESS HALVORSEN, a trainee with a clipboard.
9 A OLD MAN BRIGHT, hundred and four, upright in a wheelchair.
10 D KESTREL: Everyone, check your pods. Count aloud.
11 D TESS: Four. Five. Six.
12 D PRIYA (muttering): All green. All green. Why is it all green.
13 D GUNNAR: Quiet.
14 D SEUN: Priya, you want me on the cooling loop?
15 D PRIYA: No. Stay here.
16 D BRIGHT (to the room): Count again.
17 A ¶ They freeze.
* 18 A Every pod lid is open.
* 19 A Every pod is empty.
20 A Kestrel and Gunnar swing their lights at each other, back to back, and the beams cross on the same blank white wall.
21 D KESTREL (low): Then who's been counting us?

### SCENE s02276 | INT. CORPORATE BALL PIT, SYNERGY FLOOR - DAY
Detected names (may be incomplete or contain aliases): DEBORAH PLUMMER, KHALID RASHAD, BRAD WEXLER
* 1 A ¶ A glass-walled "ideation lounge" holding forty thousand primary-coloured plastic balls.
* 2 A A motivational neon sign reads FAIL FORWARD.
3 A ¶ DEBORAH PLUMMER, forties, VP of People, stands on a bench with a clicker, announcing the fun.
4 A KHALID RASHAD, thirty, sits waist-deep in the balls with a laptop balanced on his knees, typing, while BRAD WEXLER, intern, wades past with a tray of lukewarm kombucha, drops two cups, apologises, drops a third, and sinks quietly out of sight.
5 D DEBORAH: Okay, team! Quarterly Wins!
6 D KHALID: Deb, I have a deadline.
7 D DEBORAH: This is the deadline.
8 D KHALID: This is a pit.
9 A ¶ Brad's head resurfaces.
10 A A red ball sits on it like a hat.
11 D BRAD: I think I've lost a shoe.

### SCENE s02277 | EXT. VILLAGE PIER, TUG-OF-WAR - SUNSET
Detected names (may be incomplete or contain aliases): SAOIRSE KEANE, FINBARR MCGRATH, DONAL, NUALA
* 1 A ¶ A rope as thick as a man's wrist lies across the weathered planks of a fishing pier, its centre marked with a red rag.
* 2 A Below, the tide slaps the pilings.
3 A A crowd of villagers presses along the railings, quiet.
4 A ¶ SAOIRSE KEANE, forty, anchor of the harbour team, wraps the rope twice round her forearm and plants her boots against a plank she has used for twenty years.
5 A Opposite her, FINBARR MCGRATH, her cousin and rival, spits on his palms and rubs them together, grinning like a man who has already won.
6 A Behind him the rest of his team braces.
7 A At the rail, old DONAL, the referee, lifts a handkerchief, and beside him NUALA, thirteen, Saoirse's daughter, grips the rail so hard her knuckles whiten.
8 D DONAL: Take the strain!
9 A ¶ Saoirse leans back.
10 A Finbarr leans back.
* 11 A The red rag does not move.
* 12 A A gull settles on a piling to watch.
13 D FINBARR: Still got your mother's hands, Saoirse.
14 D SAOIRSE: And you've still got her mouth.
* 15 A ¶ The rope groans.
16 A A plank cracks under Finbarr's heel and the rag slides a foot toward the harbour side.
17 A Nuala shrieks.
18 A Saoirse digs in, the cords of her neck standing out, her boots skating on salt-slick wood.
19 D NUALA: Mam, don't let go!
20 D FINBARR: Let go, Saoirse! Let go before you're hurt!
21 D SAOIRSE (through her teeth): Not this year, Fin.
* 22 A ¶ The rag crosses the line.
23 A Finbarr's team stumbles.
24 A Then the old rope, frayed through twenty summers, parts with a gunshot crack, and both teams go down in a tangle of limbs and oilskin, Saoirse across her cousin's chest, and the pier erupts.
25 D DONAL: No contest!
26 D NUALA (laughing, crying): Mam!

### SCENE s02278 | INT. MATTRESS SHOWROOM, BACK OFFICE - DAY
Detected names (may be incomplete or contain aliases): MORTON GRIGGS, DELPHINE ABERNATHY, WALLY, TSUJI
* 1 A ¶ A windowless room behind rows of beds.
* 2 A A desk, three chairs, a poster of a smiling sheep.
* 3 A The air smells of fresh foam and old coffee.
4 A ¶ MORTON GRIGGS, fifties, in a short-sleeved shirt and a tie that has lost an argument with a stapler, sits behind the desk.
5 A He is the store manager.
6 A Facing him, in matching chairs, are DELPHINE ABERNATHY, thirties, an assistant manager with a binder, and WALLACE "WALLY" TSUJI, twenties, a salesman with a neck brace.
7 A ¶ Morton folds his hands.
8 A He looks at both of them, and he sighs.
9 D MORTON: We are here to resolve a grievance.
10 D DELPHINE: I filed the grievance.
11 D WALLY: I filed the counter-grievance.
12 D MORTON: There's a form for that?
13 D DELPHINE: There is now.
14 A ¶ Wally shifts.
15 A His neck brace creaks.
16 A He glares at Delphine, then at the sheep poster, as though looking for an ally.
17 D WALLY: Is it fair to say that a man has a right to nap on a display bed?
18 D MORTON: No.
19 D WALLY: Even during a lull?
20 D MORTON: Especially during a lull.
21 D DELPHINE: He was snoring, Morton. Customers thought it was the Sleep Number demo.
22 D WALLY: The Sleep Number demo was broken.
23 D DELPHINE: Because you broke it.
24 D WALLY: I fell asleep on it. That's different.
25 D MORTON: How is that different?
26 D WALLY: I wasn't being malicious.
27 D DELPHINE: You were being unconscious.
28 D MORTON: Okay. Okay. Let me read the incident report.
29 A ¶ Morton picks up a sheet of paper.
30 A Delphine slides her binder forward an inch.
31 A Wally leans back and the neck brace creaks again.
32 D MORTON [CONT'D]: "At 2:14 PM, Mr. Tsuji was observed in Display Bed Nine, horizontal, with a pillow over his face."
33 D WALLY: It was a decorative pillow.
34 D MORTON: "Customers were advised that the model was a sample of our new Eternal Rest line."
35 D DELPHINE: Several customers wished to purchase it.
36 D MORTON: Wait. They did?
37 D DELPHINE: Four units. A man from the funeral home on Fifth asked about wholesale.
38 D MORTON: Well.
39 D WALLY: That's a win.
40 D DELPHINE: It is not a win. It's a liability.
41 D MORTON: It's a win and a liability. Both can be true.
42 D WALLY: That's what I've been saying.
43 D DELPHINE: You have not been saying that. You have been saying "zzz."
44 D MORTON: Let's focus. Delphine, what do you want?
45 D DELPHINE: A written apology. And I want him to stop sleeping in the store.
46 D MORTON: Wally?
47 D WALLY: I want my sick days restored. And a new neck brace. This one pinches.
48 D MORTON: Why do you need a neck brace?
49 D WALLY: I fell off the bed.
50 D DELPHINE: He rolled off Bed Nine during a nap and tried to file a worker's comp claim.
51 D MORTON: It's a claim, Delphine. We have to hear it.
52 D DELPHINE: Hear it? He was asleep.
53 D WALLY: It was a work-related sleep. I was dreaming about quotas.
54 D MORTON: Wally, that's not a thing.
55 D WALLY: It is if you're committed.
56 A ¶ Morton rubs his temples.
57 A He picks up a pen and writes something.
58 A He tears the page from the pad and hands it to Delphine, then writes another and hands it to Wally.
59 D DELPHINE: What's this?
60 D MORTON: Your apology.
61 D WALLY: What's this?
62 D MORTON: Yours.
63 D DELPHINE: I don't owe him an apology.
64 D MORTON: You gave him a Sleep Number quote he couldn't afford.
65 D DELPHINE: That was a clerical error.
66 D MORTON: So is this. Sign.
67 A ¶ They sign.
68 A Morton collects the papers.
69 A He stands, and the chair rolls back into the filing cabinet with a bang.
* 70 A The sheep on the poster goes on smiling.
71 D MORTON [CONT'D]: Meeting adjourned. Everyone back to the floor.
72 D WALLY: Can I sit down on a bed first?
73 D MORTON: No.

### SCENE s02279 | INT. FUNICULAR CAR, MIDWAY UP - NIGHT
Detected names (may be incomplete or contain aliases): BRIEFCASE MAN, WOMAN IN RED, TEENAGER, PRIEST, MECHANIC, CONDUCTOR, PREWITT
* 1 A ¶ A glass cabin on a steel cable, hanging over a sleeping city.
* 2 A Lights below like spilled salt.
* 3 A The cable hums.
4 A ¶ Six people.
5 A A BRIEFCASE MAN, fifties, tie loosened.
6 A A WOMAN IN RED, thirties, perched on the bench.
7 A A TEENAGER, hood up, earbuds in.
8 A A PRIEST, seventies.
9 A A MECHANIC, big hands.
10 A A CONDUCTOR, grey cap, bored.
* 11 A ¶ The car shudders.
* 12 A Stops.
* 13 A Lights flicker.
14 D CONDUCTOR: Folks, a brief delay. Remain seated.
15 D BRIEFCASE MAN: How brief?
16 D CONDUCTOR: A few minutes.
17 D WOMAN IN RED: Then why is he sweating?
18 A ¶ All eyes turn to the briefcase man.
19 A He grips the case to his chest.
20 D BRIEFCASE MAN: I'm not.
21 D TEENAGER (pulling out an earbud): He is.
22 D PRIEST: My son, are you unwell?
23 D BRIEFCASE MAN: I'm fine!
24 D MECHANIC: That case is ticking.
* 25 A ¶ Silence.
* 26 A The ticking is audible now, quick and mean.
27 D BRIEFCASE MAN: It's a watch. A prototype.
28 D WOMAN IN RED: Open it.
29 D CONDUCTOR: Sir, I'll have to ask you to open it.
30 A ¶ He does not.
31 A The Woman in Red lunges.
32 A The Mechanic grabs her arm.
33 A The Teenager is shouting.
34 A The Priest has his hand on the briefcase man's shoulder, murmuring.
35 D MECHANIC: Hold him!
36 D BRIEFCASE MAN (breaking): My name is Aldous Prewitt, I'm a courier, I was told it was documents!
37 D PREWITT [CONT'D]: I swear it, I swear it on my mother!
* 38 A ¶ The case clicks.
* 39 A The lid lifts.
* 40 A Inside, an old brass alarm clock rings, sits on a stack of unmarked bills, and a note reads: GOT YOU ALL TO TALK.
* 41 A ¶ The funicular lurches.
* 42 A Lights return.
* 43 A The car climbs on.

### SCENE s02280 | INT. BARBERSHOP, SILVER GULCH - DAY
Detected names (may be incomplete or contain aliases): JUDGE AMBROSE LITTLEFIELD, SHERIFF NATHANIEL WREN, DOC SILAS FAIRWEATHER, ROSALIND MARCHAND, ROSIE, DEPUTY CALEB, DOC
* 1 A ¶ Striped pole.
* 2 A Brass spittoon.
* 3 A Through the window, a gallows is being quietly dismantled across the street.
4 A ¶ JUDGE AMBROSE LITTLEFIELD, sixty, sits in the barber's chair under a white cloth.
5 A SHERIFF NATHANIEL WREN, forties, stands at the door with his hat in his hands.
6 A DOC SILAS FAIRWEATHER, a tall consumptive, sits by the stove.
7 A ROSALIND MARCHAND, called ROSIE, thirty, the barber, strops a razor.
8 A DEPUTY CALEB, nineteen, holds the broom.
9 D LITTLEFIELD: Cut it short, Rosie.
10 D ROSIE: Not too short, Judge. You'll feel the draught.
11 D WREN: He won't be out of doors much.
12 D LITTLEFIELD: Nathaniel, I'll be out of doors a good deal. Don't you worry.
13 D DOC: You look better than you did in March.
14 D LITTLEFIELD: I look like a man who sentenced the wrong brother.
15 D WREN: You sentenced the one the jury found.
16 D LITTLEFIELD: Juries find what you set in front of them.
17 D ROSIE: Hold still.
18 D LITTLEFIELD: Is the rope down yet?
19 D CALEB: Yes, sir. Half an hour ago.
20 D LITTLEFIELD: Good boy. Sweep the sawdust before the wind takes it.
21 D WREN: The mare's saddled at the livery. Provisions are in the left bag.
22 D LITTLEFIELD: You've been thoughtful.
23 D WREN: Rosie packed the bread.
24 D ROSIE: It's a day old.
25 D LITTLEFIELD: Everything's a day old in this town.
26 D DOC: Where will you go?
27 D LITTLEFIELD: South. There's a Judge in Albuquerque who owes me a sherry.
28 D ROSIE: You don't drink sherry.
29 D LITTLEFIELD: No. But it's owed.
30 D WREN: Ambrose.
31 D LITTLEFIELD: Yes, Nathaniel.
32 D WREN: I'll keep the bench warm.
33 D LITTLEFIELD: You'll keep it clean. That's the harder thing.
34 A ¶ Rosie wipes the razor on her apron and sets it on the shelf.
35 D ROSIE: That's the last of it.
36 D LITTLEFIELD: Thank you, Rosalind. What do I owe you?
37 D ROSIE: Two bits.
38 D LITTLEFIELD: Two bits for the cut of a lifetime.
39 D ROSIE: Three, if you stay for the shave.
40 D LITTLEFIELD: No. No, I believe I'll go as I am.

### SCENE s02281 | INT. STALLED ELEVATOR, TWENTY-SECOND FLOOR - DAY
Detected names (may be incomplete or contain aliases): HORACE PRIDE, GLORIA MENDELSOHN, TERRY, BOOTH, CONGRATULATIONS YOUR RETIREMENT, COLLEAGUES
* 1 A ¶ A mahogany-panelled elevator with a brass nameplate: CALLOWAY & PRIDE, ASSET MANAGEMENT.
* 2 A The numbers above the door read 22 and flicker.
* 3 A On the floor sits a large sheet cake in a cardboard box.
4 A ¶ HORACE PRIDE, sixty, the firm's senior partner, in a three-piece suit, grips the handrail.
5 A GLORIA MENDELSOHN, forty, an executive assistant with an orange lanyard, holds a clipboard to her chest.
6 A TERRENCE "TERRY" BOOTH, twenty-five, a mailroom clerk, clutches a bundle of envelopes and a balloon on a string.
* 7 A ¶ The elevator lurches.
8 A Horace and Gloria both grab for the cake box.
9 A Terry throws himself across it.
10 A The three of them end up in a heap on the carpet, the balloon bobbing above them, the cake intact.
11 D HORACE: Get off the cake!
12 D TERRY: I'm saving the cake!
13 D GLORIA: You're sitting on the cake!
14 A ¶ Terry rolls away.
15 A Gloria lifts the lid.
* 16 A Across the top, in blue icing: CONGRATULATIONS ON YOUR RETIREMENT, HORACE.
17 D HORACE: I'm not retiring.
18 D GLORIA: That's what the memo said.
19 D HORACE: What memo?
20 D GLORIA: The one signed by you.
21 D HORACE: I sign forty memos a day.
22 D TERRY: Sir, the party's at three.
23 D HORACE: What party?
24 D GLORIA: Yours.
25 D HORACE: I never agreed to a party.
26 D GLORIA: You agreed to the memo.
27 D HORACE: I agreed to a memo about a party. Not a party about my retirement.
28 D TERRY: Is there a difference?
29 D HORACE: There is a difference, Terrence. The difference is that I'm not ready.
30 D GLORIA: You're sixty-three, Horace. Everybody else on the floor has been ready for you since 2014.
31 D HORACE: That is a cruel thing to say to a man in an elevator.
32 D GLORIA: It is a true thing. The cruelty is incidental.
33 D TERRY: Should I, uh. Should I press the button again?
34 D HORACE: Press whichever one gets me out of this conversation.
35 A ¶ Terry presses every button on the panel at once.
* 36 A The elevator groans, lurches, and drops a floor.
37 A Horace and Gloria clutch the rail.
38 A Terry hugs the cake.
* 39 A The balloon floats up and pops against the ceiling.
* 40 A ¶ The doors slide open on the sixteenth floor.
41 A A crowd of colleagues in party hats stares in, holding streamers.
42 D COLLEAGUES [O.S.]: Surprise!
43 A ¶ Horace and Gloria look at each other.
44 A Terry, still on the floor, lifts the cake, a little squashed, a lot proud.
45 D HORACE: I am going to need a very large drink.

### SCENE s02282 | INT. PRINTING SHOP, MANCHESTER - EVENING (1838)
Detected names (may be incomplete or contain aliases): EZEKIEL FARTHING, PRUDENCE ASHWORTH
* 1 A ¶ Ink-black presses.
* 2 A Racks of lead type.
* 3 A A single tallow candle gutters beside a chalkboard of tomorrow's handbills.
4 A ¶ EZEKIEL FARTHING, thirties, compositor, in a leather apron, sets type with quick, practised fingers.
5 A Ink stains him to the elbow.
* 6 A ¶ A knock.
* 7 A The door opens, letting in cold and the smell of coal smoke.
8 A ¶ PRUDENCE ASHWORTH, twenties, a mill-girl in a patched shawl, steps in clutching a folded paper.
9 D PRUDENCE: Mr. Farthing? They said you'd print for a penny.
10 D EZEKIEL: Depends what it says.
11 D PRUDENCE: It says we want ten hours. No more.
12 D EZEKIEL: Who is "we"?
13 D PRUDENCE: The women at Greaves Mill. All three hundred.
14 D EZEKIEL: And who signs it?
15 D PRUDENCE: Nobody. That's the point. If nobody signs it, nobody's turned out.
16 A ¶ Ezekiel wipes his hands on his apron.
17 A He takes the paper and reads it by the candle.
18 A His lips move.
19 D EZEKIEL: It's a good bill.
20 D PRUDENCE: Will you print it?
21 D EZEKIEL: I'll print it. Come back Thursday.
22 D PRUDENCE: Thursday's too late. The vote is tomorrow.
23 D EZEKIEL: Then I'd best set it tonight.

### SCENE s02283 | INT. LAKE CABIN, KITCHEN - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE LAVOIE, ODILE LAVOIE, DESMOND OYELARAN, ALBRECHT
* 1 A ¶ A pine-panelled kitchen that smells of woodsmoke and dust.
* 2 A Cardboard boxes stack on a table where somebody's father once ate breakfast.
* 3 A Through the window a grey lake lies flat as a plate.
4 A ¶ MARGUERITE LAVOIE, fifty-two, in a cardigan, wraps a chipped teacup in newspaper.
5 A Her sister ODILE LAVOIE, forty-eight, in a denim jacket, stands at the open refrigerator with a bin bag, holding a jar of pickles at arm's length.
6 A At the counter DESMOND OYELARAN, Marguerite's husband, taps at a calculator.
7 A By the screen door a neighbour, MR. ALBRECHT, seventy, in rubber boots, holds a fishing rod he has not been asked to hold.
8 D MARGUERITE: That was Maman's cup.
9 D ODILE: It's chipped.
10 D MARGUERITE: It was chipped when she bought it.
11 A ¶ She sets the cup in the box.
12 A She does not look at her sister.
13 A She picks up the next cup.
14 D ODILE: He kept pickles from 2009.
15 D MARGUERITE: He kept everything.
16 D ODILE: That's not a virtue.
17 A ¶ She drops the jar in the bin bag.
* 18 A The glass thuds, muffled, and does not break.
19 A Both of them listen for it to break.
20 A Neither says so.
21 D DESMOND: The realtor wants to list by the fifteenth.
22 D MARGUERITE: The fifteenth is a Sunday.
23 D DESMOND: Then the sixteenth.
24 D ODILE (to the bin bag): She'll list when she's ready.
25 D MARGUERITE: Who's she?
26 D ODILE: You. She. I don't know.
27 A ¶ She ties the bag.
28 A She carries it past Mr. Albrecht, who steps aside, then follows with the rod.
29 D MR. ALBRECHT: Your father lent me this in '94.
30 D MARGUERITE: Keep it.
31 D MR. ALBRECHT: It isn't mine to keep.
32 D ODILE (from the porch, not turning): He'd want you to have it.
33 A ¶ She sets the bag at the curb.
* 34 A The screen door bangs behind her.
35 A Marguerite stands very still at the table, her hand flat on a cardboard lid.
36 D DESMOND: Marguerite.
37 D MARGUERITE: I'm fine.
38 D DESMOND: I know.
39 A ¶ He crosses the kitchen and unfolds her fingers from the lid.
40 A He takes the cup out of the box, unwraps it, fills it from the kettle, and puts it in her hands.
41 D MR. ALBRECHT (clearing his throat): I'll leave the rod on the porch, then.
42 A ¶ He goes.
* 43 A The kitchen is quiet.
44 A ¶ Through the window Odile has sat down on the dock, her back to the cabin, her boots dangling above the water.
45 A Marguerite watches her through the glass.
46 A She lifts the cup, drinks, and does not set it down.
47 A ¶ After a moment she carries the cup out the screen door and across the grass.
48 A She lowers herself onto the planks beside her sister.
49 A She holds the cup out without a word.
50 A ¶ Odile takes it.
51 A She drinks.
52 A She hands it back.
* 53 A ¶ The lake does not move.

### SCENE s02284 | INT. SHARK TANK TUNNEL, MARINE AQUARIUM - NIGHT
Detected names (may be incomplete or contain aliases): MAN IN OVERALLS, WOMAN, DIVE SUIT, TAMSIN VOLK, LOOKOUT, DESHAWN, TEODORO
* 1 A ¶ Blue gloom.
* 2 A Sharks glide overhead.
* 3 A The tunnel's acrylic arch glows.
4 A ¶ A MAN IN OVERALLS crouches at a maintenance panel, drill whining.
5 A A WOMAN IN A DIVE SUIT, TAMSIN VOLK, swims past outside the glass, signalling.
6 A The third, a LOOKOUT in a guard uniform, DESHAWN, leans on the rail, watching the corridor.
7 D MAN IN OVERALLS: Panel's open.
8 D TAMSIN [O.S.] (through earpiece): Clock's running. Two minutes.
9 D DESHAWN: Quiet. Footsteps.
* 10 A ¶ A torch beam sweeps the far wall.
11 A All three freeze.
* 12 A A hammerhead drifts across the glass.
13 D MAN IN OVERALLS: Seal's cut. Pearl case is behind it.
14 D TAMSIN [O.S.]: Don't touch the alarm bar.
15 D TEODORO (whispering): I never touch the bar.
16 D DESHAWN: Teodoro, hurry.
17 D TEODORO: Got it.

### SCENE s02285 | INT. WHALE-BONE LIBRARY, LANTERN ISLE - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST MIRELLE, WREN, GRIMOLD, THE SEXTON
* 1 A ¶ A cathedral built inside the ribcage of a leviathan.
* 2 A Ribs arch overhead like the vault of some drowned church.
* 3 A Shelves climb the bone.
* 4 A Fireflies in glass jars hang on chains for light.
5 A ¶ ARCHIVIST MIRELLE, ancient, hunched, wrapped in a moth-eaten cloak, polishes a brass astrolabe.
6 A Her left eye is a milk-white marble.
7 A ¶ A boy, WREN, eleven, barefoot, slips between shelves, a book under his coat.
8 A A giant, GRIMOLD, ten feet tall, shaggy as a pine, ducks beneath the ribs with a candle in his fist.
9 A A stranger in the doorway, THE SEXTON, tall and thin, a hooded figure with no face, raps his staff on the floor.
10 D THE SEXTON: Return what you took.
11 D WREN: I took nothing.
12 A ¶ Mirelle's head turns slowly.
13 A The milk-white eye finds the book beneath his coat.
14 A Grimold sets down the candle and takes one step toward the boy, and the floor shivers.
15 A The Sexton lifts his staff.
* 16 A The jars swing on their chains, the fireflies swarming up like sparks.
17 D MIRELLE: Child. The book.
18 A ¶ Wren bolts.
19 A Grimold lunges, Mirelle's cloak snags on a shelf, the Sexton's staff cracks against a rib, and a hundred volumes thunder down in a cloud of dust.
20 A The boy skids through the avalanche and slams into the Sexton's legs.
* 21 A The book falls open.
* 22 A ¶ It is blank.
23 D GRIMOLD (rumbling): There is nothing in it.
24 D THE SEXTON (lowering the staff): Then why did you steal it?
25 D WREN: I wanted something to write in.
* 26 A ¶ Silence.
* 27 A The dust settles.
28 A Mirelle laughs, a dry whisper like pages turning, and the fireflies drift back down to their jars.

### SCENE s02286 | INT. LAUNDROMAT, 24-HOUR - 3 A.M.
Detected names (may be incomplete or contain aliases): TALL MAN, VERONICA CASTELLANOS, NIKOLAI BRODSKY, DOLORES, MARCUS
* 1 A ¶ Fluorescent hum.
* 2 A Rows of dryers tumbling.
* 3 A A vending machine glows.
* 4 A The windows are black.
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
* 31 A A canvas satchel tumbles out, hits the floor, and spills bundled cash.
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

### SCENE s02287 | INT. ELEVATOR HOISTWAY, OFFICE TOWER - NIGHT
Detected names (may be incomplete or contain aliases): ISAAC MBEKI, CELESTE ARNAUD, RADIO
* 1 A ¶ A concrete shaft lit by a single work lamp.
* 2 A Greasy cables hang in the dark.
* 3 A Far below, a pit.
* 4 A Far above, a rectangle of light.
5 A ¶ ISAAC MBEKI, thirties, an elevator mechanic, clings to a ladder bolted to the wall.
6 A He wears a headlamp and a harness that does not look new.
* 7 A A radio crackles at his hip.
8 A ¶ He glances up.
* 9 A A set of boots has appeared in the light above him.
10 A ¶ CELESTE ARNAUD, forties, in a good coat, stands on the landing with a pistol held low.
11 A She has the posture of a woman who has done this before.
12 A She does not speak.
13 A ¶ His breath catches.
14 A He takes a step down the ladder.
15 A She takes one down after him.
* 16 A The cable between them hums.
17 D RADIO [V.O.] (tinny): Isaac, you there? Control room. We've lost the car on four.
18 A ¶ He keeps his eyes on her and unclips the radio.
19 D ISAAC: Say again.
20 D RADIO [V.O.]: Car's stuck between four and five. Don't move the cab.
21 A ¶ She raises the pistol a few inches.
22 A He hears the safety click.
23 D ISAAC (into the radio, calm): Copy. Hold the car. I'm coming up.
24 D RADIO [V.O.]: Who are you talking to?
25 A ¶ He does not answer.
26 A He drops the radio.
* 27 A It falls forty feet, bouncing off the guide rails, then shatters on the pit floor.
28 A ¶ She fires.
* 29 A The round whines off a rail.
30 A He kicks away from the ladder, swings on the cable, and lets go.
31 A A moving counterweight rises out of the dark and he lands on it hard, flat, wind knocked from him.
32 A ¶ She leans over the edge, searching the black.
* 33 A The counterweight sinks.
34 A Her face shrinks in the rectangle of light.
35 A ¶ He lies there, shaking, laughing silently, and does not move for a very long time.

### SCENE s02288 | INT. ABANDONED SCHOOLROOM, YORKSHIRE - DUSK (1851)
Detected names (may be incomplete or contain aliases): MISS EDITH WHITLOCK
* 1 A ¶ A single desk.
* 2 A A cracked slate.
* 3 A Snow drifts through a broken window and settles on a pile of primers.
* 4 A ¶ The door creaks.
5 A MISS EDITH WHITLOCK, thirty, in a wool coat and bonnet, a trunk dragging behind her, steps in and stops.
6 A ¶ She sets down the trunk.
7 A She crosses to the desk.
8 A She wipes frost from it with her glove and takes a folded letter from her sleeve.
9 D EDITH [V.O.] (reading, her own voice): "Dear Miss Whitlock. We regret the schoolhouse at Thornby Moor has been closed these four years."
10 A ¶ She turns to the slate.
* 11 A A single word is chalked there in a child's hand: STAY.
12 D EDITH [V.O., CONT'D]: "The parish cannot afford a mistress. We trust you will find other employment."
13 A ¶ She sets the letter down.
14 A She takes off her bonnet.
15 A She picks up a stub of chalk, and under STAY she writes, very slowly, MONDAY.

### SCENE s02289 | INT. PALLIATIVE WARD, ROOM 7 - NIGHT
Detected names (may be incomplete or contain aliases): OLD SOLOMON KAPLAN, NURSE, DANIELLE
* 1 A ¶ Dim lamp.
* 2 A Machine hum.
* 3 A A window fogged with breath.
4 A ¶ OLD SOLOMON KAPLAN, eighty-three, in the bed, blanket to his chin.
5 A A NURSE, forties, in lilac scrubs, checks a drip.
6 D NURSE: Can't sleep?
7 D SOLOMON: I sleep fine.
8 D NURSE: Then why are your eyes open?
9 D SOLOMON: Habit.
10 A ¶ She adjusts the pillow.
11 A He watches.
12 D SOLOMON [CONT'D]: You new?
13 D NURSE: Six months.
14 D SOLOMON: You'll learn.
15 D NURSE: Learn what?
16 D SOLOMON: Not to look at the clock.
17 A ¶ She smiles.
18 A She smooths the blanket.
19 A She stays.
20 D SOLOMON [CONT'D]: My wife used to hum.
21 D NURSE: What did she hum?
22 D SOLOMON: Whatever was on.
23 D NURSE: Radio?
24 D SOLOMON: Kettle.
* 25 A ¶ A pause.
26 D NURSE: Would you like tea?
27 D SOLOMON: There's no tea at three.
28 D NURSE: There's tea if I say there is.
29 D SOLOMON: What's your name?
30 D NURSE: Danielle.
31 D SOLOMON: Danielle. That's a good name for a nurse.
32 D DANIELLE: Mr. Kaplan, drink some water.
33 D SOLOMON: Solomon.
34 D DANIELLE: Solomon.
35 A ¶ He drinks.
36 A She holds the cup.
37 A His hand shakes on hers.
38 D SOLOMON: My son isn't coming, is he?
39 D DANIELLE: The roads are bad.
40 D SOLOMON: That's a kind lie.
41 D DANIELLE: It's the one I have.
42 D SOLOMON: Keep it.
43 A ¶ She sits on the edge of the bed.
44 A She doesn't say anything.
45 A He closes his eyes.
* 46 A The machine hums on.
47 D SOLOMON [CONT'D]: Hum something.
48 D DANIELLE: I can't carry a tune.
49 D SOLOMON: Neither could she.
50 A ¶ Danielle hums.
* 51 A It is not a tune.
* 52 A It is a kettle.
53 A His hand slackens on hers, and she keeps humming.

### SCENE s02290 | INT. PLANETARIUM DOME, CITY MUSEUM - NIGHT
Detected names (may be incomplete or contain aliases): LUCIEN DAGGETT, MAEVE OSHIRO, FELIX BRANDT
* 1 A ¶ A hush of velvet seats under a black ceiling stippled with fake stars.
* 2 A A projector as big as a refrigerator squats in the centre like a sleeping insect.
3 A ¶ LUCIEN DAGGETT, fifties, tuxedoed, courteous, once a stage magician, kneels at the projector with a screwdriver.
4 A MAEVE OSHIRO, thirties, in a night-guard uniform two sizes too large, holds a flashlight and a walkie-talkie.
5 A FELIX BRANDT, twenty, wiry, in black, dangles from a rope through a hatch in the dome.
6 D LUCIEN: Is the corridor clear?
7 D MAEVE: Clear for four minutes.
8 D LUCIEN: Felix. Descend.
9 D FELIX: I'm descending!
* 10 A ¶ The rope pays out.
11 A Felix swings across the dome, sneakers squeaking, and plants one foot on a seat back and the other on the projector, and the whole machine tilts.
12 A Lucien and Maeve both lunge to steady it.
13 A The three of them end up in a knot, Felix's rope wrapped round Maeve's arm, Lucien's screwdriver pinned under Felix's chin.
* 14 A A hidden lens flares, and a thousand stars wheel across the ceiling.
15 D MAEVE: Get off me.
16 D FELIX: I can't, you're on the rope.
17 D LUCIEN: Both of you, be still.
18 A ¶ They hold still.
* 19 A A tiny brass drawer slides out of the projector's base.
* 20 A Inside lies a velvet pouch.
21 D LUCIEN [CONT'D]: There you are.
22 D MAEVE: That's it? That's the Orion Diamond?
23 D LUCIEN: That's it.
* 24 A ¶ A door slams somewhere in the museum.
* 25 A Footsteps.
26 A All three freeze.
* 27 A The stars keep turning overhead.
28 A Then Lucien smiles, and tucks the pouch into his cummerbund.

### SCENE s02291 | INT. CONSERVATORY, FINCH-HATTON HOUSE - EARLY MORNING
Detected names (may be incomplete or contain aliases): INSPECTOR OSWIN PELLEGRINI, LADY CORDELIA FINCH-HATTON, AMOS TREVELYAN, BERNADETTE QUILL, JASPER
* 1 A ¶ Glass walls beaded with dew.
* 2 A Orchids hang from iron hooks.
* 3 A Rain taps the roof like fingernails on a table.
* 4 A A white sheet covers something long on the tiled floor.
5 A ¶ INSPECTOR OSWIN PELLEGRINI, fifties, rumpled tweed, a pipe he does not light, stands over the sheet.
6 A Around him wait the household: LADY CORDELIA FINCH-HATTON, seventy, upright in a wheelchair; AMOS TREVELYAN, the butler, pale as candle wax; MRS. BERNADETTE QUILL, the cook, wringing a dishcloth; and JASPER, the nephew, twenty-two, slouched against a palm.
7 D PELLEGRINI: Nobody leaves.
8 D JASPER: We were having breakfast.
9 D PELLEGRINI: Then you may have it later.
10 A ¶ He crouches.
11 A He lifts the corner of the sheet and lets it fall.
12 A Lady Cordelia grips the arms of her chair.
13 A The cook turns her face to the glass.
14 D PELLEGRINI [CONT'D] (to himself): No sign of a struggle.
15 D AMOS: Inspector, if I might say.
16 D PELLEGRINI: You might.
17 D AMOS: The doors were locked at eleven.
18 D MRS. QUILL: They were. I locked the kitchen.
19 D JASPER: I locked nothing, I never lock anything.
20 D CORDELIA: Be quiet, Jasper.
21 D PELLEGRINI: Lady Finch-Hatton, who was the last to see him?
22 D CORDELIA: I was. At half past ten.
23 D PELLEGRINI: And?
24 D CORDELIA: He was watering the orchids.
25 A ¶ Pellegrini rises, slowly, and goes to the nearest hanging basket.
26 A He touches the soil with two fingers.
27 D PELLEGRINI (a murmur): Dry.
28 A ¶ Jasper and Amos exchange a look.
29 A Mrs. Quill drops the dishcloth.
30 A Cordelia's wheels creak as she rolls backward half a foot, and then stops.
31 D PELLEGRINI [CONT'D] (to the room): Whoever killed him watered the plants after.
* 32 A ¶ Silence.
* 33 A Rain.
34 A Then, softly, Lady Cordelia begins to laugh.

### SCENE s02292 | EXT. ABANDONED DRIVE-IN CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): ILSE VANTERPOOL, RODRIGO ACOSTA
* 1 A ¶ A flat tar roof ringed by rusted floodlights.
* 2 A The screen beyond it stands bare, a white rectangle against a sky full of cricket noise.
* 3 A Weeds crack the asphalt below.
4 A ¶ ILSE VANTERPOOL, seventeen, sits on the parapet, boots dangling over a drop she does not look at.
5 A She wears her brother's varsity jacket, sleeves rolled twice.
6 A A cigarette burns down in her fingers, unsmoked.
7 A ¶ RODRIGO ACOSTA, eighteen, lanky, a trombone case at his feet, climbs the last rung of the ladder and stops three steps away.
8 A He holds a paper bag.
9 D RODRIGO: You said you'd be at the recital.
10 D ILSE: I said I'd think about it.
11 A ¶ He sets the bag down.
12 A He sits, not close, not far.
* 13 A A moth batters the nearest dead lamp.
14 D RODRIGO: It went okay.
15 D ILSE: Did you play the part?
16 D RODRIGO: Which part?
17 D ILSE: You know which part.
18 A ¶ He opens the case.
19 A He doesn't take the instrument out.
20 A He just lifts the lid, as though to let the night look in.
21 D RODRIGO: I skipped it.
22 D ILSE: Why?
23 D RODRIGO: Wasn't mine to play.
24 A ¶ She stubs the cigarette against the parapet, a long slow press.
25 A Then she laughs, one dry breath, and her shoulders drop.
26 A He passes her the bag.
27 A She takes out a warm paper-wrapped churro, bites it, and holds the rest out to him without turning her head.
* 28 A ¶ The screen glows, faintly, with starlight.

### SCENE s02293 | INT. DENTIST WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): CLOWN, PATRICIA VOSS, DEEDEE, MILO, JUANITA, GUS
* 1 A ¶ Beige chairs.
* 2 A A fish tank.
* 3 A A bowl of lollipops marked FOR GOOD PATIENTS ONLY.
4 A ¶ A CLOWN in full costume sits stiffly with a balloon animal.
5 A DR. PATRICIA VOSS, the dentist, in a mask, hovers by the door.
6 A DEEDEE, her receptionist, types.
7 A A little boy, MILO, six, wails in his mother's lap.
8 A His mother, JUANITA, bounces him.
9 D DEEDEE: Mr. Clown? You're next.
10 D CLOWN: I'm not a patient. I'm the entertainment.
11 D DR. VOSS: We didn't book entertainment.
12 D CLOWN: Somebody did. Under "Gus."
13 D DEEDEE: Gus?
14 D CLOWN: That's me. Gus the Clown.
15 D GUS (tapping his nose): Honk.
16 A ¶ MILO shrieks.
17 A Juanita clamps her hand over his mouth.
18 A Dr. Voss and Deedee both lunge for the lollipops.
19 A The three adults collide at the bowl, sending lollipops flying; Gus slips, his balloon dog squeaks, and the fish tank sloshes.
20 A ¶ Milo stops crying.
21 A He stares at Gus.
22 D MILO: Do the dog again.
23 A ¶ Gus, flat on the floor, honks.

### SCENE s02294 | INT. TRUCK STOP DINER, ARM-WRESTLING TABLE - NIGHT
Detected names (may be incomplete or contain aliases): BIG WENDELL TUCKER, ADA PRZYBYLSKI, REFEREE
* 1 A ¶ Steel table.
* 2 A Two stools.
* 3 A A crowd of truckers three-deep.
* 4 A Neon beer signs buzz.
5 A ¶ BIG WENDELL TUCKER, forty, three hundred pounds, hands like shovels, grips the pegs.
6 A Across from him sits ADA PRZYBYLSKI, twenty-three, a barista in a hairnet, five-foot-two, sleeves rolled.
7 D REFEREE: Ready.
8 A ¶ Wendell grins.
9 A Ada doesn't.
10 A Their hands lock.
11 D REFEREE [CONT'D]: Go.
12 A ¶ Wendell surges.
13 A Ada's arm folds back to forty-five degrees and the crowd roars.
14 A Her face goes red, her knuckles white, and she exhales through clenched teeth.
15 A Wendell relaxes into the win.
16 D ADA: Not yet.
17 A ¶ She drives.
18 A The forearm rises, inch by inch, a hinge opening against a rusty spring, and Wendell's grin falters.
19 A The crowd quiets.
20 A His wrist cracks.
21 A She slams it back to vertical, then past, pressing it toward the steel, and he shouts, but she holds.
22 A He wrenches free, regrips, and with a bellow of rage reverses the angle, the table rocking.
23 A Ada's stool skids, her hairnet slips, a strand of hair falls into her mouth, and she bites it.
24 D WENDELL: You can't!
25 D ADA: I can.
26 A ¶ The back of his hand touches steel.
27 A The room erupts.
28 A Wendell stares at his fist as though it belonged to a stranger.

### SCENE s02295 | INT. ROOFTOP GREENHOUSE APARTMENT, LISBON - EVENING
Detected names (may be incomplete or contain aliases): CATARINA VIEIRA, MACHINE
* 1 A ¶ A small glass room on a tiled roof.
* 2 A Geraniums in chipped pots.
* 3 A Behind the glass the city falls away in terraces of orange light and the river beyond is the colour of tin.
4 A ¶ CATARINA VIEIRA, thirty-five, in a linen shirt, stands at a wooden table with her sleeves rolled.
5 A She waters a row of seedlings from a copper can.
6 A She hums as she works, tunelessly, content.
* 7 A ¶ On the table, a battered answering machine blinks red.
8 A She does not look at it.
9 A She waters.
10 A She hums.
11 A She leans to pinch a dead leaf from a geranium.
12 A ¶ She straightens.
13 A Her eyes finally go to the machine.
14 A She presses a finger to the button.
15 D MACHINE [V.O.] (her own voice, younger, laughing): You've reached Catarina. If you're Tomás, I'm still angry. If you're not Tomás, leave a message.
* 16 A ¶ A beep.
17 A Her hand goes still on the can.
18 D CATARINA [V.O.] (the same voice, older, brittle): It's me. I'm at the airport. I just wanted to say I'm sorry, and I'm coming back, and, and I changed the message so you'd have it.
19 A ¶ She sets the can down.
20 A She presses the button again.
21 A She listens again.
22 A Her lips move along with the words.
23 A ¶ Then she lowers herself into the chair beside the table.
24 A She turns the machine until its small red eye faces the window, toward the river, and she smiles.
25 A ¶ She picks up the can.
26 A She waters the seedlings.
27 A She hums.

### SCENE s02296 | INT. LIGHTHOUSE KEEPER'S ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MALCOLM REYNOLDS, DICTAPHONE
* 1 A ¶ A round stone room.
* 2 A An iron stove glows.
* 3 A A kettle ticks.
* 4 A Outside, a gale tears at the shutters.
5 A ¶ INSPECTOR MALCOLM REYNOLDS, fifties, in an oilskin coat, sits at a rough table.
6 A He winds the spool of a portable dictaphone and presses PLAY.
7 D DICTAPHONE [V.O.] (his own voice, calm): Entry one. The keeper is dead.
8 A ¶ He pours tea.
9 A He is not troubled.
10 D DICTAPHONE [V.O., CONT'D]: Entry two. The boat was sabotaged, the radio smashed, and the logbook burned.
11 A ¶ He sips.
12 A He turns a page of the logbook, very much unburned.
13 D DICTAPHONE [V.O., CONT'D]: Entry three. No one else is on the island.
* 14 A ¶ The shutters bang.
15 A He stops the machine.
16 A He looks up at the winding iron stairs, listening.
* 17 A A single drop falls from the ceiling and hits the table.
18 A ¶ Slowly, he rewinds the spool.
19 D REYNOLDS (quietly): Entry four.

### SCENE s02297 | EXT. SALT FLATS, ABANDONED SURVEY CAMP - DAWN
Detected names (may be incomplete or contain aliases): TOBIAS GRAYSON, LENORE BASQUIAT, SLATER BROTHERS, JUDE, ABEL
* 1 A ¶ White to every horizon.
* 2 A A crooked tent.
* 3 A A dead mule on its side.
* 4 A Heat already shimmers.
5 A ¶ TOBIAS GRAYSON, forties, leathered, sits against the tent pole, a bullet in his gut, his hat over his eyes.
6 A LENORE BASQUIAT, thirty, in a duster, kneels with a canteen.
7 A Two outlaws, the SLATER BROTHERS, JUDE and ABEL, stand over them, rifles lowered.
8 D JUDE: He's done.
9 D LENORE: He's breathing.
10 D ABEL: Not for long.
11 D TOBIAS (thin): Leave her out of it.
12 D JUDE: She dug your claim.
13 D LENORE: It was never his claim.
14 D ABEL: Then whose?
15 D LENORE: Mine.
* 16 A ¶ Silence.
17 A Jude lifts his rifle again, slowly.
18 A Abel holds out a hand.
19 D ABEL [CONT'D]: Let her talk.
20 D TOBIAS: Lenore. Don't.
21 D LENORE: It's under the mule.
22 A ¶ The brothers look at the dead animal.
23 A Tobias's hand slips from his gut.
* 24 A The canteen falls and the water drains into the salt.

### SCENE s02298 | INT. ER TRAUMA BAY 2 - NIGHT
Detected names (may be incomplete or contain aliases): TRAUMA SURGEON, NURSE ABIOLA ADEYEMI, RESIDENT DAVIT HOVSEPIAN, SUNITA RAO, SECURITY GUARD LEROY, ELLINGTON, MENDEZ
* 1 A ¶ Fluorescent glare.
* 2 A Monitors scream.
* 3 A Blood on the floor tile.
4 A ¶ A TRAUMA SURGEON, forties, gloved to the elbow, bends over a gurney.
5 A NURSE ABIOLA ADEYEMI, thirties, squeezes a bag-valve mask.
6 A RESIDENT DAVIT HOVSEPIAN, twenty-six, pumps the patient's chest.
7 A Anaesthetist DR. SUNITA RAO, fifties, calls out numbers.
8 A SECURITY GUARD LEROY, thirty, stands at the door.
9 A A bystander's mother, MRS. ELLINGTON, sobs behind him.
10 D DR. RAO: Pressure's sixty over thirty!
11 D DAVIT: Compressions continuing!
12 D ABIOLA: Airway clear!
13 D TRAUMA SURGEON: Clamp. I need a clamp.
14 D DAVIT: Which clamp?
15 D ABIOLA: The big one, Doctor Mendez!
16 D MENDEZ: Thank you, Abiola.
17 A ¶ Mendez takes the clamp.
18 A His hands move fast.
19 A Davit sweats through his scrubs, Abiola bags, Rao reads the monitor.
20 A Leroy blocks the door.
21 A Mrs. Ellington cries out and he lowers his head.
22 D DR. RAO: Sixty-five over forty!
23 D MENDEZ: Stay with me.
24 D LEROY: Ma'am, you can't come in.
25 D MRS. ELLINGTON: He's my boy!
26 D DAVIT: Pulse!
27 D ABIOLA: I've got a pulse!
* 28 A ¶ The monitor settles into a steady beep.
29 A Mendez straightens.
30 A Everyone breathes.

### SCENE s02299 | INT. COURTHOUSE STAIRWELL - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NADIA FAROUQ, DARRELL OKAFOR
* 1 A ¶ Concrete steps.
* 2 A A buzzing light.
* 3 A Muffled voices from above.
4 A ¶ ATTORNEY NADIA FAROUQ, forties, stands against the wall with a briefcase.
5 A Her client, DARRELL OKAFOR, thirty, stands one step below, suit too big at the shoulders.
6 D NADIA: Say the date again.
7 D DARRELL: March fourth.
8 D NADIA: And the time.
9 D DARRELL: Nine-fifteen.
10 A ¶ She nods.
11 A She straightens his tie.
12 A He lets her.
13 A His hand is steady.
14 A Hers is not.
15 A She puts it in her pocket.
16 D NADIA: If they ask about the knife.
17 D DARRELL: I never saw a knife.
18 D NADIA: Good.
* 19 A ¶ Above them a door opens and closes.
20 A She picks up her briefcase and goes up one step.
21 A He doesn't move.
22 D DARRELL: You believe me?
23 D NADIA: I believe the record.
24 A ¶ She goes up another step.
25 A He follows.

### SCENE s02300 | EXT. SCHOOL BUS, LAST DAY OF SUMMER CAMP - AFTERNOON
Detected names (may be incomplete or contain aliases): MAYA, TOMASZ, JOLENE, ROSALIE, SPENCER, HIROSHI
* 1 A ¶ A yellow bus idles on a gravel lot, windows down, smelling of sunscreen and lake water.
2 A Six kids pile in, damp-haired, loud.
3 A ¶ MAYA, thirteen, drags her duffel up the steps and drops into the front seat, then immediately stands, looking down the aisle.
4 A TOMASZ, fourteen, slouches behind her with headphones round his neck.
5 A JOLENE and her twin ROSALIE, twelve, argue over a seat.
6 A SPENCER, eleven, carries a jar with a frog in it.
7 A And at the back, alone, HIROSHI, fourteen, sits with his knees up and a letter in his fist.
8 D MAYA: Everybody, quiet, I have to say something!
9 D TOMASZ: Nobody wants you to say something.
10 D JOLENE: Shut up, Tomasz.
11 D ROSALIE (muttering): Always saying something.
12 D SPENCER: The frog's coming with me!
13 D MAYA: Spencer, no.
14 A ¶ He cradles the jar, plants himself in the aisle.
15 A She sighs, turns to the whole bus, and takes a breath.
16 A Hiroshi folds the letter into smaller and smaller squares, until he can't fold any more.
17 A Tomasz notices.
18 A He pulls his headphones up.
19 A Jolene and Rosalie fall silent in the same instant.
* 20 A The frog croaks.
21 D MAYA [CONT'D] (softly): I'm going to miss you all.
22 A ¶ Nobody laughs.
* 23 A The bus lurches forward.
24 A Hiroshi presses his forehead against the window and does not look back.

### SCENE s02301 | EXT. TREEHOUSE IN A DEAD ELM - NIGHT
Detected names (may be incomplete or contain aliases): ANNELIESE KROLL, BO TRAN, KWAME BOATENG, SOLEDAD IBARRA
* 1 A ¶ A plywood box wedged in the crotch of a bare elm.
* 2 A A string of Christmas lights, half burned out.
* 3 A Four sleeping bags laid in a square.
* 4 A Frost on the railings.
5 A ¶ ANNELIESE KROLL, sixteen, sits cross-legged with a thermos.
6 A BO TRAN, sixteen, tunes a ukulele nobody asked for.
7 A KWAME BOATENG, seventeen, stretches on his back and stares up at a hole in the roof.
8 A SOLEDAD IBARRA, sixteen, perches at the edge with her feet in the air, rolling an unlit cigarette between her fingers.
9 D BO: Okay, okay, this one's for the graduating class.
10 D KWAME: We haven't graduated.
11 D BO: It's for the future.
12 D ANNELIESE: You can't even play it.
13 D BO: I can play three chords.
14 D SOLEDAD: Four if you count the one you broke.
15 A ¶ Bo strums.
* 16 A It is awful.
17 A Kwame laughs into his sleeve.
18 A Anneliese passes the thermos to Soledad, and Soledad drinks and passes it on to Kwame, and it goes round without anyone speaking.
* 19 A The lights flicker.
* 20 A The ukulele fades.
21 D BO: It's nice up here.
22 D KWAME: Yeah.
23 D ANNELIESE: Yeah.
24 A ¶ Soledad says nothing.
25 A She rolls the cigarette once more, then sets it on the plank beside her and folds her hands.
26 D SOLEDAD: Hey. Can I say something?
27 D KWAME: Always.
28 D SOLEDAD: I'm leaving in the morning.
29 A ¶ Bo stops strumming.
30 A Anneliese puts down the thermos.
31 A Kwame sits up.
32 A The three of them turn to her at once, and the ukulele rolls off the platform and clatters through the branches.
33 D ANNELIESE: What do you mean, leaving?
34 D SOLEDAD: My dad got the job. In Tucson.
35 D BO: Tucson?
36 D KWAME: When?
37 D SOLEDAD: Seven a.m.
38 A ¶ Nobody speaks.
* 39 A Frost ticks on the rail.
40 A Kwame reaches across the square of sleeping bags and takes her sleeve between two fingers, and holds on.
41 A Anneliese climbs over Bo and puts her head on Soledad's shoulder.
42 A Bo just sits there, looking down at the dark where the ukulele went.
