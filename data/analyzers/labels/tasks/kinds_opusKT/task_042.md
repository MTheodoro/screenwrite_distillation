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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0042.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01348 | EXT. THE GLASSMAKERS' STAIRCASE - DAWN
Detected names (may be incomplete or contain aliases): ILSE MARROW, WYNNE ASHCROFT
* 1 A ¶ A staircase cut into a cliff of black obsidian, spiraling up toward a cloud-wrapped citadel.
* 2 A Each step is a slab of blown glass, translucent green, filled with drifting bubbles.
* 3 A Below, a mist-choked valley.
* 4 A Above, nothing.
5 A ¶ ILSE MARROW, 30s, climbs with a glass lantern slung from her pack, the glow shifting violet in the cold.
6 A Her cloak is the color of dried lavender; her boots are taped at the heel; a long scar runs along her jaw.
7 A Three steps behind her follows WYNNE ASHCROFT, 30s, pale and spare, with a crooked staff of white ash and the patient eyes of someone who has outlasted several wars.
8 D ILSE: They said it would take a day.
9 D WYNNE: They said a lot of things about the stair.
10 D ILSE: It sings.
11 D WYNNE: It does that when it wants to be crossed.
* 12 A ¶ Under Ilse's boot, a step chimes like a crystal glass.
13 A She pauses.
14 A Wynne pauses.
* 15 A A bubble drifts through the glass and bursts.
16 D ILSE: Did she come this way?
17 D WYNNE: She came this way.
18 D ILSE: Did she come back?
19 D WYNNE: She didn't say.
20 A ¶ Ilse climbs again.
* 21 A The stair rings with each step, a soft cascade of notes.
* 22 A The sky above lightens.
* 23 A Clouds tear.
* 24 A A flock of silver birds pours across the gap.
25 D ILSE: Wynne. You do not have to follow.
26 D WYNNE: I know.
27 D ILSE: She is your sister.
28 D WYNNE: She is your mother.
29 A ¶ Ilse stops.
* 30 A The next stair is cracked down the middle.
* 31 A Beneath it, the valley yawns.
32 A She places her foot on it.
* 33 A It holds.
34 D ILSE: Then we are both followers.
35 A ¶ Wynne smiles.
36 A She taps the staff against the glass, and the whole stair hums like a harp, once, twice, a third time.

### SCENE s01349 | INT. ABANDONED ARCADE, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAGDA KOWALCZYK, TWYLA BANKS, PINCH, ARRIAGA, DEVANTE ROOK
* 1 A ¶ Dead pinball machines draped in sheets.
* 2 A A card table.
* 3 A Four chairs, one empty.
4 A ¶ MAGDA KOWALCZYK, 50s, plans on a napkin.
5 A TWYLA BANKS, 30s, drums the table with a lighter.
6 A And JOSÉ "PINCH" ARRIAGA, 40s, folds the map in precise squares.
7 D MAGDA: Three minutes in, four out.
8 D TWYLA: Three in, three out.
9 D MAGDA: She wants a margin.
10 D TWYLA: She wants a lot of things.
11 D PINCH: Who's the she?
12 D TWYLA: The she who gets us paid.
* 13 A ¶ The back door scrapes.
14 A A fourth figure ducks in, pulling a hood down from a bruised face.
15 A DEVANTE ROOK, 20s, the driver.
16 A He drops into the empty chair and doesn't speak.
17 D MAGDA: You're late.
18 D DEVANTE: The truck was followed.
19 D PINCH: By who?
20 D DEVANTE: A woman. Maybe two.
21 D MAGDA: Where did you lose her?
22 D DEVANTE: I didn't.
* 23 A ¶ Silence.
* 24 A The pinball machines hum faintly under their sheets.
25 A Twyla's lighter stops clicking.
26 D TWYLA: Then she's outside.
27 D DEVANTE: She's outside.
28 D MAGDA: Then we're finished.
29 D PINCH (folding the map): No. We are retired.

### SCENE s01350 | EXT. ROOFTOP FIVES COURT, COPENHAGEN - DUSK
Detected names (may be incomplete or contain aliases): ASTRID LUNDGAARD, MATEUSZ KR, THANDI MOKOENA, RADIO
* 1 A ¶ A tarred roof above a canal.
* 2 A A white-painted court on the asphalt, four walls of corrugated steel.
* 3 A Chimney pots and TV aerials ring the horizon.
* 4 A Down in the water, a barge horn moans.
5 A ¶ ASTRID LUNDGAARD, 40s, silver braid, plays barefoot, gloved hand hitting a hard rubber ball.
6 A Across from her, MATEUSZ KRÓL, 30s, shirtless, a tattoo of a swallow across his ribs.
7 A In the corner, with a stopwatch and a radio headset, THANDI MOKOENA, 20s, referee, jots numbers on her palm.
8 A ¶ Astrid slams a backhand.
9 A The ball cracks off the steel and Mateusz dives, scrapes his knee, returns it high, and Astrid follows it back with a lunge and a swing, and he counters with a lob that lands in the corner, while Thandi shouts the score into her headset.
10 D THANDI (to the whole roof): Eleven all! Next point takes the set!
11 D RADIO [V.O.] (tinny, from the headset): Copy, referee. Broadcast is live. Keep it moving.
12 D MATEUSZ (muttering): Live. Everything's live. Nothing's alive.
13 D ASTRID (to Mateusz): You're drifting left.
14 D MATEUSZ: You always say that.
15 D ASTRID: Because you always drift.
16 A ¶ They set.
17 A Astrid serves, a vicious spinning shot.
18 A Mateusz reads it, steps in, volleys.
19 A They rally, long, ferocious.
20 A Thandi counts.
21 D THANDI (to herself): Please don't go to twelve.
22 D ASTRID (to Thandi): Girl, hush. Let us breathe.
* 23 A ¶ The ball skims the tape and drops.
* 24 A A held breath.
25 A Astrid and Mateusz stare at where it died.
26 D THANDI (to the whole roof): Point, Lundgaard! Set to Lundgaard!
27 A ¶ Mateusz drops to a knee, panting.
28 A Astrid walks to him, extends a gloved hand.
29 A He takes it.
* 30 A Down on the canal, the barge horn sounds again, longer this time.

### SCENE s01351 | INT. OBSERVATORY ROOF DOME - NIGHT
Detected names (may be incomplete or contain aliases): CASSIAN LOWE, LYDIA ABERNATHY-OKAFOR, MABEL
* 1 A ¶ A hemisphere of dark wood and brass, the great shutter slid open on a spill of stars.
* 2 A In the center, a telescope the size of a cannon points at the sky.
* 3 A The floor is a compass rose of inlaid ebony.
* 4 A It is cold.
* 5 A Everyone's breath is visible.
6 A ¶ CASSIAN LOWE, 40s, wrapped in a moth-eaten scarf, adjusts the telescope eyepiece with long inky fingers.
7 A He is an astronomer who has been alone with his work for fifteen years, and it shows in the way he does not quite look at people.
8 A ¶ LYDIA ABERNATHY-OKAFOR, 30s, in a velvet coat, hair swept up and pinned with a single silver comb, stands at the foot of the iron stair, staring up at him.
9 A She has the stillness of someone who rehearsed a speech and forgot it on the climb.
10 A ¶ And between them, curled on a worn leather chair, is MABEL, 70s, Cassian's mother, a tiny woman in knitted mittens, dozing, a cup of cold tea on her knee.
11 D LYDIA (to Cassian): You didn't answer my letters.
12 D CASSIAN (not turning): Comets keep their own hours.
13 D LYDIA: I'm not a comet.
14 D CASSIAN: No. A comet comes back.
15 A ¶ Lydia flinches.
16 A She climbs one step.
17 D LYDIA (to the dome): Seven years, and this is what it comes to. A man with his eye pressed to a hole.
18 D MABEL (half asleep): That's a fine hole, dear.
19 D CASSIAN: Mother.
20 D MABEL: Just saying.
21 A ¶ Lydia takes another step.
22 A Cassian's hand tightens on the brass.
* 23 A A star slides through the glass.
24 D LYDIA (to Cassian): I'm marrying Edgar in June.
25 D CASSIAN: Congratulations.
26 D LYDIA: That's all?
27 D CASSIAN: What would you like me to say?
28 D LYDIA: Something. Anything that isn't polite.
29 D CASSIAN (muttering): Edgar is a fool.
30 D LYDIA: There it is.
31 D CASSIAN: He wears spats to the beach.
32 D LYDIA: He is kind.
33 D CASSIAN: He is kind, and wears spats, and has never once looked up.
34 A ¶ Lydia reaches the platform.
35 A She faces him.
36 A He finally turns.
37 A Their faces are a foot apart.
38 D LYDIA: Cassian, look at me.
39 D CASSIAN: I am looking.
40 D LYDIA: Look at me, not past me.
41 A ¶ He does.
42 A The eyes are wet.
* 43 A Behind them, a meteor streaks across the open shutter.
44 A Neither notices.
45 D MABEL (waking, to the room): Did I miss something?
46 D LYDIA (not moving): Everything, Mabel.
47 D MABEL (to the room): I knew it. I always do.

### SCENE s01352 | EXT. GOBLIN MARKET UNDER THE BRIDGE - NIGHT
Detected names (may be incomplete or contain aliases): THIMBLE, SABLE OOLONG, GRIMBALD, NETTLE, PERPETUA, SIR HOLLOWAY
* 1 A ¶ Lantern-lit stalls strung beneath a river bridge.
* 2 A Jars of bottled thunder.
* 3 A Barrels of live shadows.
* 4 A Everywhere, bargaining.
5 A ¶ THIMBLE, a spindly goblin in a tin hat, hawks pocket-sized moons.
6 A SABLE OOLONG, a heron-tall witch, weighs a nightingale on a brass scale.
7 A GRIMBALD, a wide troll in an apron, stirs something orange.
8 A NETTLE, a girl of twelve in patched trousers, slips between legs with a stolen apple.
9 A PERPETUA, a thin moth-winged woman, folds her wings behind a stall of lace.
* 10 A ¶ A bell clangs.
11 A Every head turns.
12 A ¶ Down the steps comes a knight in black lacquer armor, visor down, sword drawn: SIR HOLLOWAY, helm tilted, one boot leaving silver prints on the stones.
13 A Thimble drops a moon.
14 A Sable lifts the nightingale to her shoulder.
15 A Grimbald whips the spoon like a mace.
16 D SIR HOLLOWAY (booming): By order of the Queen Under Glass, this market is closed!
17 D THIMBLE (shouting): You can't close a market!
18 D GRIMBALD: You'll close your own mouth first!
19 A ¶ Nettle darts under Holloway's arm and bites the apple.
20 A He swats.
21 A Thimble hurls a moon, which bursts in his visor in a cloud of silver dust, and Sable swings a barrel of shadows, which smacks his shoulder, and Perpetua spreads her wings and sweeps a table of lace into his face, and the knight staggers, sword flailing, as Nettle ducks and the whole market rushes in, goblins, trolls and witches piling onto the armor.
22 D NETTLE (giggling): Get his legs!
23 A ¶ The knight topples.
* 24 A A pile of stalls collapses.
* 25 A Lace, moons, shadows, apples, all in a heap.
* 26 A The bell clangs again, once, softly, and stops.
27 D SIR HOLLOWAY (muffled): You have made a grave mistake.
28 D SABLE: Sir, we make them daily.

### SCENE s01353 | EXT. WATER TOWER ON THE PLAINS - DAWN
Detected names (may be incomplete or contain aliases): GASPAR REYES, ELLIE VANCE
* 1 A ¶ A rusted tank on stilts against an empty sky.
* 2 A A rope ladder swings.
3 A ¶ He climbs it, slow, rifle across his back.
4 A At the top he kneels, takes off his hat, and peers over the rim.
5 A She is already there, sitting cross-legged, sipping from a tin cup.
6 A ¶ She doesn't look at him.
7 D GASPAR REYES: Morning.
8 D ELLIE VANCE: Morning.
9 D GASPAR REYES: You waiting on me?
10 D ELLIE VANCE: Waiting on weather.
11 A ¶ He settles beside her.
12 A She offers the cup.
13 A He drinks and hands it back.
14 D GASPAR REYES: They say the bank's closed.
15 D ELLIE VANCE: They say a lot.
16 D GASPAR REYES: Is it?
17 A ¶ She shrugs.
* 18 A Far below, a dust cloud rises on the road.
19 A Both watch it come.
20 D GASPAR REYES [CONT'D]: That's a posse.
21 D ELLIE VANCE: That's a wagon.
22 D GASPAR REYES: You sure?
23 D ELLIE VANCE: No.
24 A ¶ He reaches for the rifle.
25 A She puts a hand on his wrist.
* 26 A The dust draws closer, a hundred yards, fifty.
* 27 A A mule brays.
28 D ELLIE VANCE [CONT'D]: It's a wagon.
29 A ¶ He lets go of the rifle.
30 A She drinks the last of the tea.

### SCENE s01354 | INT. CHILDREN'S PUPPET THEATER, BACKSTAGE - NIGHT
Detected names (may be incomplete or contain aliases): MARTA OSWIN, THEO MERCER, VOICE, FIGURE, INEZ, PLATE MAN
* 1 A ¶ Dust.
* 2 A Velvet.
* 3 A Strings hanging like vines.
* 4 A Papier-mâché heads on hooks.
* 5 A One working bulb.
6 A ¶ MARTA OSWIN, 30s, cleans a marionette with a rag.
7 A THEO MERCER, 20s, the stagehand, counts stage weights.
8 A A VOICE hums from the dark above the catwalk.
9 A A FIGURE in a cloak sits in the third row, outlined by the footlights, still as a coat.
10 D MARTA: Theo, who's in the house?
11 D THEO: No one. We locked up at nine.
12 D MARTA: Then who's that?
13 D THEO: That's the coat rack.
14 D MARTA: The coat rack doesn't hum.
15 A ¶ The humming stops.
16 A The cloak turns.
17 A A long white face tilts into the footlights.
18 A It has no mouth.
19 D FIGURE (a dry whisper): Whose turn is it?
20 D THEO: Marta.
21 D MARTA: Don't move.
* 22 A ¶ The marionette in her hands twitches.
* 23 A Its strings tighten by themselves.
* 24 A The head turns toward her.
25 D MARTA [CONT'D] (whispering): Theo. Call Inez.
26 D THEO: Inez is at home.
27 D MARTA: Call her.
28 A ¶ He thumbs a phone.
* 29 A It rings, tinny.
30 D INEZ [V.O.] (sleepy, over the phone): Hello?
31 D THEO: Inez, it's Theo. At the theater. Something's in the house.
32 D INEZ [V.O.]: What kind of something?
33 D THEO: A man. A thing. It's got a face like a plate.
34 D INEZ [V.O.]: Theo. Get out of the theater.
35 D THEO: I can't. It's between me and the door.
36 A ¶ The figure rises from the seat.
37 A It steps up onto the stage, boot by boot.
* 38 A The bulb dims.
39 A Marta lets go of the puppet.
* 40 A It dangles, spinning slowly.
41 D MARTA: It's the Plate Man.
42 D THEO: The what?
43 D MARTA (backing away): My grandmother told me. He takes the last one out of the house.
44 D INEZ [V.O.]: Theo? Theo, are you there?
45 D PLATE MAN (a dry whisper): Yours.
46 A ¶ The Plate Man opens its cloak.
* 47 A Behind it, rows of small white faces.
48 A Theo screams.

### SCENE s01355 | INT. SALOON DURING A THUNDERSTORM - NIGHT
Detected names (may be incomplete or contain aliases): BARN, COLE, SUNNY WELLS, REVEREND THOMAS GRIGG, MERCEDES SOTO, JED, PIKE
* 1 A ¶ Lamplight.
* 2 A Rain drumming on the tin roof.
* 3 A Poker chips.
* 4 A A cracked mirror behind the bar.
5 A ¶ BARNABY "BARN" COLE, 40s, bartender, polishes a glass.
6 A SUNNY WELLS, 20s, deals cards in the corner.
7 A REVEREND THOMAS GRIGG, 60s, nurses a whiskey.
8 A MERCEDES SOTO, 30s, in a duster, sits alone, a rifle across her knees.
9 A Two cowhands, JED and PIKE, 20s, play with Sunny.
10 D JED: Barn, another round.
11 D BARN: Jed, you're drunk.
12 D JED: I'm thirsty.
13 D PIKE: Same thing, Jed.
14 D REVEREND GRIGG: Gentlemen, the Lord watches.
15 D JED: The Lord can watch me pay.
16 A ¶ Mercedes lifts her head.
17 A She watches Jed's hand.
18 A Jed's hand moves to his gun.
19 D MERCEDES: Jed Hawkins.
20 D JED: Who's asking?
21 D MERCEDES: Mercedes Soto. You killed my brother in Tucson.
* 22 A ¶ Silence.
* 23 A Lightning.
24 A Pike pushes back from the table.
25 A Sunny drops the deck.
26 A Barn slowly sets down the glass.
27 D BARN: Ma'am. Not in my bar.
28 D MERCEDES: Barn, step aside.
29 A ¶ Jed draws.
30 A Mercedes fires first.
31 A Jed drops, clutching his arm.
32 A Pike dives behind the table.
33 A Sunny scrambles under it.
34 A The Reverend crosses himself and kneels.
35 D BARN: Everybody stay down!
36 D REVEREND GRIGG: Lord, forgive us!
37 A ¶ Mercedes stands over Jed, rifle on his chest.
* 38 A Thunder shakes the roof.
39 D JED (through his teeth): He pulled first.
40 D MERCEDES: My brother never pulled first in his life.
41 A ¶ Barn raises his hands.
42 A Pike peeks up.
43 A Sunny crawls out.
44 A The Reverend rises and walks to Jed's side, kneels.
45 D REVEREND GRIGG: Miss Soto, let me tend him.
46 D MERCEDES: Reverend, he's yours.
47 A ¶ She lowers the rifle, turns, and walks out into the rain.

### SCENE s01356 | EXT. SHELL CRATER, NO MAN'S LAND - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT BELL, CORPORAL NIKOS, PRIVATE SANDOVAL, PRISONER, HARGROVE, ANDERS
* 1 A ¶ Mud.
* 2 A Barbed wire.
* 3 A A dead tree.
4 A ¶ Five soldiers crouch in the crater.
5 A SERGEANT BELL, 40s.
6 A CORPORAL NIKOS, 20s.
7 A PRIVATE HARGROVE, 18.
8 A PRIVATE SANDOVAL, 30s.
9 A And a man in a different uniform, face down in the mud, with a bandaged shoulder: a PRISONER.
10 A ¶ Nikos shakes the Prisoner awake.
11 D BELL: Name?
12 D PRISONER: Anders.
13 D BELL: Rank?
14 D PRISONER: Nothing. I carried the bread.
15 A ¶ Hargrove laughs.
16 A Sandoval shushes him.
* 17 A Shells whistle overhead.
18 D NIKOS: Sarge, he's lying.
19 D BELL: He's hungry.
20 A ¶ Bell tosses him a hardtack.
21 A The Prisoner eats.
22 D HARGROVE: He's our enemy, Sarge.
23 D BELL: Anders is his name.
24 D ANDERS: Thank you.
* 25 A ¶ A whistle.
26 A Everyone ducks.
* 27 A The shell lands thirty yards away.
* 28 A Mud rains down.
29 A Anders crawls toward Hargrove and covers the boy's helmet with both hands.
30 D SANDOVAL (to Bell): Sarge, he saved the kid.
31 D BELL: Anders. Stay close.

### SCENE s01357 | INT. RESTAURANT KITCHEN, AFTER CLOSE - NIGHT
Detected names (may be incomplete or contain aliases): CHEF IMANI JOSEPH, SOUS-CHEF DARIUS PELL, DISHWASHER PEARL, WAITER ANSELM, STRANGER, LEOPOLD
* 1 A ¶ Steel counters.
* 2 A A hose coiled on the drain.
3 A Five people sit on overturned crates sharing a bottle.
4 A ¶ CHEF IMANI JOSEPH, 40s, still in whites.
5 A SOUS-CHEF DARIUS PELL, 30s.
6 A DISHWASHER PEARL, 50s.
7 A WAITER ANSELM, 20s.
8 A And a STRANGER in a gray coat, fifties, who wandered in through the alley door.
9 A ¶ Imani pours a round.
10 A Darius passes the bread.
11 A Pearl hums.
12 A Anselm laughs.
13 A The Stranger accepts a glass and says nothing.
14 D IMANI: So what do we call him?
15 D DARIUS: He's a health inspector.
16 D PEARL: He's not an inspector.
17 D ANSELM: He's a ghost.
18 D DARIUS (over Anselm): He ate the last of the soup.
19 D PEARL (over Darius): Hush, let the man speak.
20 D STRANGER: Leopold.
21 D IMANI: Leopold what?
22 D LEOPOLD: Just Leopold. I used to cook here.
* 23 A ¶ Silence.
24 A Imani lowers her glass.
25 A He lifts his, to her.
26 D LEOPOLD [CONT'D]: Good soup. Needs salt.
27 A ¶ Imani smiles.
28 A She stands, crosses to the stove, adds a pinch.
29 A He nods.

### SCENE s01358 | INT. AUCTION HOUSE, FREIGHT ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): ENZO, MARCHETTI, NOOR HASHEMI, OZZIE, LIN, DARCY LUND, BASE
* 1 A ¶ A cage of scuffed steel, floor stenciled with weight limits.
* 2 A The elevator hums, descending through darkness.
* 3 A A crate the size of a coffin stands on a hand truck.
4 A ¶ LORENZO "ENZO" MARCHETTI, 50s, tuxedo, bow tie crooked, holds the truck handles.
5 A NOOR HASHEMI, 30s, in a janitor's jumpsuit, mop bucket by her ankle.
6 A OSCAR "OZZIE" LIN, 20s, headphones around his neck, crouches by a panel with a screwdriver.
7 A At the back, DARCY LUND, 60s, an auction-house guard in uniform, hums a tune.
8 A He has not noticed anything.
9 D ENZO (whispering): Floor three.
10 D NOOR: Keep humming, Darcy.
11 D DARCY (cheerfully): Always do.
* 12 A ¶ The elevator shudders.
13 A Noor grips the rail.
14 D NOOR: Ozzie, the camera.
15 D OZZIE: Looped. Eight seconds.
16 D ENZO: Eight seconds is nothing.
17 D OZZIE: It's what the tape gives.
18 D NOOR (over Ozzie): Where's the other guard?
19 D DARCY (over Noor): Which one?
20 D ENZO: Darcy, the other guard.
21 D DARCY: Oh. Lunchtime.
22 A ¶ Everyone exhales.
* 23 A The elevator stops.
* 24 A The cage door slides open on a dim lobby with a marble floor and a vault door ten feet tall.
25 D ENZO (quietly): Showtime.
26 A ¶ They roll the crate out.
* 27 A The wheels squeak.
28 A Darcy hums louder.
29 D BASE [V.O.] (a voice from Darcy's radio): Base to Darcy. Base to Darcy. Status.
30 A ¶ Darcy lifts the radio.
31 D DARCY: Base, Darcy. All clear. Just a delivery.
32 D BASE [V.O.]: Delivery? At this hour?
33 D DARCY: Antique. Very heavy.
34 D BASE [V.O.]: Copy. Stay put.
* 35 A ¶ Silence.
36 A Enzo's eyes narrow at Darcy.
37 A Noor slides a hand to her pocket.
38 D OZZIE: Eight seconds. Seven. Six.
39 D DARCY (into the radio, smiling): Base, actually, there's a problem.
40 A ¶ Everyone freezes.
41 D BASE [V.O.]: What problem?
42 D DARCY: My feet hurt.
* 43 A ¶ A long beat.
44 A Then the radio laughs.
45 D BASE [V.O.]: Roger that. Sit down, Darcy.
46 A ¶ Darcy sits on the crate and unlaces a shoe.
47 A Enzo and Noor stare.
48 A Ozzie laughs once, high, into his hand.
49 D NOOR (whispering): He's good.
50 D ENZO (whispering): He's the best liar I ever hired.
51 D OZZIE: Three. Two.
* 52 A ¶ The vault door swings open on its own, lit from within by a pale green glow.
53 A Enzo steps toward it.
54 D ENZO (under his breath): Hello, beautiful.
55 D DARCY: Mind the wheels, boss.
56 D BASE [V.O.]: Darcy, say again. Who are you talking to?
57 A ¶ Darcy looks at the radio.
58 A Then at the three of them.
59 A He sets it on the crate, very gently, and switches it off.
60 D DARCY: Nobody.

### SCENE s01359 | INT. TELEGRAPH OFFICE, LONDON - NIGHT (1912)
Detected names (may be incomplete or contain aliases): PERCIVAL ASHDOWN, MISS ROSALIND TREVETHAN, LORD ALISTAIR CROYDE, HARRIET LUCAS, OPERATOR
* 1 A ¶ Brass keys.
* 2 A Glass cases.
* 3 A A gas lamp.
* 4 A A wall of pigeonholes.
* 5 A The tick of a dozen sounders.
* 6 A Rain on the glass.
7 A ¶ MR. PERCIVAL ASHDOWN, 50s, stiff collar, spectacles, sorts slips.
8 A MISS ROSALIND TREVETHAN, 20s, clerk, hair pinned up under a cap, taps the key.
9 A LORD ALISTAIR CROYDE, 50s, in a fur-collared coat, waits at the counter, drumming gloved fingers.
10 A And a woman, HARRIET LUCAS, 30s, in a plain brown coat, stands at the far end of the counter holding an unopened envelope.
11 A ¶ Ashdown clears his throat.
12 D ASHDOWN (to the room): Ladies and gentlemen. We are experiencing delay. The Atlantic cable is busy.
13 D CROYDE (to Ashdown): How busy?
14 D ASHDOWN: Very.
15 D CROYDE: Is it the Titanic?
* 16 A ¶ Silence.
17 A Rosalind's hand stills on the key.
18 D ASHDOWN: It is, my lord.
19 A ¶ Harriet puts the envelope down.
20 D HARRIET (under her breath): My brother was a stoker.
21 D ROSALIND (to Harriet): Miss, I am so sorry.
* 22 A ¶ The sounder clatters.
23 A Rosalind leans in, writes, tears the slip.
24 D ROSALIND [CONT'D] (to the room): Message. Carpathia has picked up survivors.
* 25 A ¶ A breath goes through the office.
26 A Croyde takes off his hat.
27 A Ashdown snatches the slip and reads it.
28 D ASHDOWN (to Rosalind): Is there a list?
29 D ROSALIND: Not yet.
30 D OPERATOR [V.O.] (over the sounder, faint, relayed): Names to follow. Standby, London.
31 A ¶ Harriet takes a step forward, then stops.
32 D HARRIET (to herself): Please, Tom. Please.
33 D CROYDE (to Ashdown): Mr. Ashdown, send a message to my wife. Tell her I have an interest.
34 D ASHDOWN: My lord, there are priorities.
35 D CROYDE: I am aware of that, Ashdown.
36 A ¶ Rosalind keys again.
* 37 A The sounder answers.
38 D ROSALIND (reading): Names. First batch.
39 A ¶ The whole room leans in.
40 A Rosalind begins to read aloud, each name a stone dropped into a well.

### SCENE s01360 | INT. FAMILY LAW OFFICE, WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): FIONA KESSELL, GIDEON KESSELL, HANA OKADA, IVO BRAJOVIC, JOLENE MARCH, KASPAR
* 1 A ¶ Plastic chairs.
* 2 A A dying ficus.
* 3 A A wall clock that runs four minutes slow.
4 A ¶ FIONA KESSELL, 40s, in a suit, clutches a folder.
5 A GIDEON KESSELL, 40s, her ex, ankle on his knee, scrolls his phone.
6 A HANA OKADA, 30s, Fiona's sister, perches beside her.
7 A IVO BRAJOVIC, 60s, Gideon's father, sits stiff with his coat on.
8 A JOLENE MARCH, 30s, Gideon's new girlfriend, carries two coffees.
9 A And KASPAR, 10, Fiona and Gideon's son, swings his legs on a chair too tall.
10 A ¶ Jolene offers a coffee to Fiona.
11 A Fiona doesn't take it.
12 A Hana takes it instead.
13 A Jolene smiles and sits.
14 D HANA: Thanks.
15 D JOLENE: You're welcome.
16 A ¶ Fiona stares at the ficus.
17 A Gideon taps his screen.
18 A Ivo clears his throat.
19 D IVO: Gideon.
20 D GIDEON: Dad.
21 D IVO: Put the phone away.
22 D GIDEON: It's work.
23 D FIONA: It's never work.
24 D GIDEON (not looking up): Fiona, not here.
25 D FIONA: Where, then?
26 D GIDEON: In there. With the lawyer.
27 D KASPAR: Mom, can I have a coffee?
28 D FIONA: No.
29 D JOLENE (to Kaspar): I'll get you a hot chocolate, sweetheart.
30 D FIONA: Don't call him that.
31 D JOLENE: I'm sorry?
32 D FIONA: Sweetheart.
33 A ¶ Hana stands.
34 A Fiona stands.
35 A Jolene stands.
36 A Gideon rises last.
37 A Ivo folds his arms.
38 A Kaspar slides off the chair, backs into the corner, and the five adults square off, voices rising, hands moving, until the door opens and a receptionist leans out.
39 A ¶ Everyone freezes.
40 D HANA (quietly): Sorry.
41 A ¶ She sits.
42 A They all sit.
43 A Kaspar slips back into his chair.
44 A Fiona accepts the coffee, finally.

### SCENE s01361 | INT. TAXIDERMY SHOP, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR CALEB ROURKE, OTTOLINE PRATT
* 1 A ¶ Glass eyes in drawers.
* 2 A A stuffed owl on a shelf.
* 3 A A work lamp over a half-skinned fox on a steel table.
* 4 A Sawdust drifts like slow snow.
5 A ¶ INSPECTOR CALEB ROURKE, 50s, tweed coat, notebook, turns a jar of amber eyeballs in his hands and sets it down.
6 A Across the table, MRS. OTTOLINE PRATT, 60s, gray bob, rubber apron, scrapes a pelt with a curved knife and does not look up.
7 D ROURKE (to the room): Does anyone else work late here?
8 D PRATT: Just me, Inspector.
9 D ROURKE (to himself): Of course.
10 A ¶ He walks the length of the shelves, peering into glass.
* 11 A A badger snarls.
* 12 A A heron stares.
13 A He stops at a stuffed spaniel and tilts his head.
14 D ROURKE [CONT'D]: This is a fresh one.
15 D PRATT: He belonged to the baker.
16 D ROURKE: The baker died in March.
17 D PRATT: He left instructions.
18 A ¶ She lifts the pelt and shakes it.
* 19 A Sawdust hangs in the air.
20 A Rourke touches the spaniel's flank, then draws his fingers back and sniffs them.
21 A Pratt scrapes harder, the knife rasping, the fox on the table seeming to listen, and Rourke crosses to her side, leans on the table, plucks a glass eye from the tray, and holds it to the lamp.
22 D ROURKE [CONT'D]: Mrs. Pratt, what is this?
23 D PRATT: An eye.
24 D ROURKE: It's a human eye.
25 D PRATT: So it is.
26 A ¶ She lays down the knife.
27 A The owl on the shelf shifts on its perch, just slightly, as if the floor had breathed.
28 D ROURKE (to the room): Everyone, stay where you are.
29 D PRATT: There's no everyone, Inspector.
30 D ROURKE (to himself): That's what worries me.

### SCENE s01362 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): YUSUF, GRETA, LAMAR, WANJIRU, BARTHOLOMEW
* 1 A ¶ Humming dryers.
* 2 A Yellow light.
* 3 A A row of plastic chairs bolted to the floor.
4 A ¶ YUSUF, 50s, folds shirts.
5 A GRETA, 40s, stares at a spinning drum.
6 A LAMAR, 20s, sleeps with his head against a machine.
7 A WANJIRU, 30s, carries a basket and a toddler's sock, looking for the toddler.
8 A And BARTHOLOMEW, 70s, sits at the end of the row reading a seed catalogue he has read forty times.
9 A ¶ Yusuf squares a sleeve.
10 A Greta stands, opens her dryer, pulls out a handful of warm towels, sniffs them, and stuffs them back.
11 A Wanjiru lifts the toddler's sock to the light, sets it on a machine, and moves to the next row while Lamar shifts in his sleep and Bartholomew turns a page.
12 D YUSUF (not looking up): Greta, your towels are done.
13 D GRETA: I know.
14 D YUSUF: You're not taking them out.
15 D GRETA: Not yet.
16 D WANJIRU: Has anyone seen a little boy? Blue shirt, no left shoe?
17 D YUSUF: Sorry.
18 D GRETA: No.
19 D BARTHOLOMEW (without looking up): Under the folding table.
20 A ¶ Wanjiru bends.
21 A Under the table, a small boy lies on his stomach, asleep, one shoe off.
22 A She lifts him.
23 A He doesn't wake.
24 A She sets the sock on his foot, balances him on her hip, and carries the basket with her other hand.
25 D WANJIRU: Thank you.
26 D BARTHOLOMEW: Tomatoes this year.
27 A ¶ Wanjiru nods at nothing and goes out.
* 28 A The door chimes.
* 29 A The dryers keep humming.

### SCENE s01363 | INT. BRIDGE OF THE SURVEY SHIP PERIHELION - SHIP'S DAY
Detected names (may be incomplete or contain aliases): COMMANDER AOIFE BRANNIGAN, TENZIN LHAMO, RUKMINI SETH, JOSEF HALVORSEN, XIMENA TORRES, ORACLE
* 1 A ¶ A circular room with a ceiling of living glass, its panes drifting from rose to amber as the star beyond brightens.
* 2 A Consoles ripple like water.
* 3 A Six stations, six people, one steady hum.
4 A ¶ COMMANDER AOIFE BRANNIGAN, 50s, white hair cropped close, stands at the central rail with her hands behind her back.
5 A Dr. TENZIN LHAMO, 40s, sits at the spectrometer, scarf wrapped against the cold of the vacuum shield.
6 A RUKMINI SETH, 30s, pilot, long fingers on the helm sphere.
7 A JOSEF HALVORSEN, 60s, chief engineer, in a stained jumpsuit, taps a gauge.
8 A XIMENA TORRES, 20s, navigator, headset askew, twirls a pencil.
9 A ¶ And the sixth is a voice that has no body: the ship's ORACLE.
10 D ORACLE [V.O.] (calm, genderless): Perihelion in four minutes.
11 D BRANNIGAN: Thank you, Oracle.
12 D TENZIN: Spectral lines are doubling.
13 D JOSEF: Hull plating's holding.
14 D XIMENA: Helm, I'm showing a ripple at point two.
15 D RUKMINI: I feel it.
16 D ORACLE [V.O.]: Thermal shield at ninety-one percent.
17 D BRANNIGAN: Josef?
18 D JOSEF: Ninety-one is a good number.
19 D TENZIN (over Josef): Commander, there's a signal in the corona.
20 D XIMENA (over Tenzin): Pattern repeats every eleven seconds.
21 D RUKMINI (over Ximena): It's not noise.
22 D BRANNIGAN: Slow down. One at a time. Tenzin.
23 D TENZIN: Eleven pulses, a pause, eleven pulses. Structured.
24 D JOSEF: Stars don't count.
25 D BRANNIGAN: Oracle. Source?
26 D ORACLE [V.O.]: Source is within the corona. Origin: unknown. Analysis: a message.
* 27 A ¶ Silence.
* 28 A The glass overhead turns from amber to a pale, searching gold.
29 D XIMENA: What does it say?
30 D ORACLE [V.O.]: Ximena Torres, it says your name.
31 A ¶ Ximena drops her pencil.
32 A Brannigan does not move.
33 D BRANNIGAN: Hold course. Hold shield. Everyone breathe.
34 D RUKMINI: Holding.
35 D JOSEF: Holding.
36 D TENZIN (softly): Holding.
* 37 A ¶ The signal pulses again.
* 38 A Eleven.
* 39 A A pause.
* 40 A Eleven.

### SCENE s01364 | INT. NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): GUNNAR ASPLUND, FATIMA HADDAD, SEUN, ADEBOYE, MARIBEL SOTELO
* 1 A ¶ Soft blue light.
* 2 A Incubators like glass bread boxes.
* 3 A Every monitor beats in a different key.
4 A ¶ GUNNAR ASPLUND, 50s, charge nurse, moves between the cribs checking tubes.
5 A FATIMA HADDAD, 30s, neonatologist, writes on a chart with a stub of pencil.
6 A OLUWASEUN "SEUN" ADEBOYE, 20s, resident, sips from a paper cup.
7 A MARIBEL SOTELO, 40s, a mother in a hospital gown, sits motionless beside incubator six, her hand pressed flat to the glass.
8 A ¶ Gunnar adjusts a drip.
9 A Fatima checks a number, writes it, checks it again.
10 A Seun yawns into the cup.
11 A Maribel hums, tuneless.
12 D GUNNAR: Bed six, stable.
13 D FATIMA: Bed six, thank you.
14 D SEUN: Is she asleep?
15 D GUNNAR: She's looking.
16 D SEUN: She's not allowed to look at the monitor.
17 D FATIMA (over Seun): Let her.
18 D MARIBEL (over Fatima): He moved his foot.
19 D GUNNAR: He did.
20 D FATIMA: He did, Mrs. Sotelo. That's very good.
21 D SEUN (to Gunnar): Do I say it's good?
22 D GUNNAR: It's good.
23 D SEUN (to Maribel): It's very good.
24 A ¶ Maribel presses her forehead to the glass.
* 25 A Her breath fogs it.
26 A Gunnar reaches over and wipes the fog away with his sleeve.
27 A ¶ He crosses to bed four.
28 A She studies the chart again.
29 A He yawns again.
* 30 A The monitors continue their small, stubborn song.
31 A Fatima glances up at the mother, then at the baby, then writes one more number in the corner of the chart and underlines it twice.

### SCENE s01365 | INT. FERRY TERMINAL CAFETERIA - EVENING
Detected names (may be incomplete or contain aliases): JOSEPHINE ARDEN, RAFAEL OLIVARES, LORRAINE, OSWIN PRICKETT, MINNOW
* 1 A ¶ Formica tables, a steam counter, a window with a view of a gray harbor.
* 2 A A chalkboard menu offers soup and sandwiches.
3 A ¶ JOSEPHINE ARDEN, 30s, in a camel coat, sits at a corner table with a thermos and a small suitcase.
4 A She watches the clock.
5 A RAFAEL OLIVARES, 30s, enters from the rain, shakes his umbrella, and freezes at the door.
6 A ¶ She sees him.
7 A He sees her.
8 A Neither moves.
9 A ¶ He crosses the room, hangs his coat on the chair across from hers, and sits.
10 A She pours tea into the thermos lid and slides it to him.
11 D RAFAEL: Josephine.
12 D JOSEPHINE: Rafa.
13 D RAFAEL: You look well.
14 D JOSEPHINE: You look wet.
15 D RAFAEL: It's raining.
16 D JOSEPHINE: I noticed.
17 A ¶ He drinks the tea.
18 A She watches his throat.
19 A She looks away at the harbor, where a ferry shoulders out into the chop.
20 D RAFAEL: Is that yours?
21 D JOSEPHINE: That one's not.
22 D RAFAEL: When's yours?
23 D JOSEPHINE: Nine-forty.
24 D RAFAEL: That's two hours.
25 D JOSEPHINE: It's a long ferry.
26 A ¶ A waitress, LORRAINE, 50s, calls from the pass-through window, her voice distant, sleepy.
27 D LORRAINE [O.S.]: Last orders, folks. Kitchen closes at seven.
28 D JOSEPHINE (to the window): Two soups, please.
29 D LORRAINE [O.S.]: Tomato or pea?
30 D JOSEPHINE (to Rafael): You hate pea.
31 D RAFAEL (to the window): Pea.
32 D JOSEPHINE: Rafa.
33 D RAFAEL: I've changed.
34 A ¶ Josephine's mouth twitches.
35 A She hides it behind her hand.
36 A Their soups arrive on a tray carried by an unseen hand, set on the counter.
37 A Rafael stands, collects them, sets them down.
38 A ¶ They eat.
* 39 A Spoons clink on bowls.
* 40 A The ferry horn sounds, deep, far away.
41 A ¶ OSWIN PRICKETT, 60s, a porter in a peaked cap, stops at the table and nods at her suitcase.
42 A A small girl, MINNOW, 7, hides behind his leg.
43 D OSWIN: Miss, the nine-forty's boarding early.
44 D JOSEPHINE: Thank you, Mr. Prickett.
45 A ¶ Minnow stares at Rafael, then at Josephine, then at their joined shadows on the table.
46 A Oswin steers her away.
47 D JOSEPHINE: How is she?
48 D RAFAEL: Who?
49 D JOSEPHINE: The woman who lives in your apartment.
50 D RAFAEL: She moved out.
51 D JOSEPHINE: I'm sorry.
52 D RAFAEL: Don't be. She took the couch.
53 D JOSEPHINE: She always liked that couch.
54 D RAFAEL: Everyone did.
* 55 A ¶ Silence.
56 A He stirs the soup.
57 A She pushes a crust around her plate.
* 58 A The rain intensifies on the window.
59 D RAFAEL [CONT'D]: Is it a good job?
60 D JOSEPHINE: It's a long way off.
61 D RAFAEL: I'd like to see where.
62 D JOSEPHINE: You'd hate it.
63 D RAFAEL: Probably.
64 D LORRAINE [O.S.]: Folks, we're closing.
65 D JOSEPHINE (to the window): One more minute.
66 D LORRAINE [O.S.]: One more minute.
67 A ¶ Rafael sets his spoon down and reaches across the table.
68 A His fingers rest on the edge of her thermos lid, not touching her hand.
69 A She doesn't move hers away.
70 D JOSEPHINE: Your tea's cold.
71 D RAFAEL: I like it cold now.
72 A ¶ She almost laughs.
73 A She turns her hand over.
74 A He takes it.
75 A They sit like that, hands joined across the Formica, while the ferry lights drift out of view and the rain goes on.

### SCENE s01366 | INT. HOTEL BALLROOM, EMPTY - DAWN
Detected names (may be incomplete or contain aliases): CLEMENTINE ASHFORD, HUGO BELMONT, PROSPER, VIVIAN BELMONT
* 1 A ¶ A vast chandeliered room stripped after a wedding.
* 2 A Rows of gold chairs stacked in towers.
* 3 A Streamers on the floor.
* 4 A Pale light creeping through tall windows.
5 A ¶ CLEMENTINE ASHFORD, 30s, in a rumpled bridesmaid's gown, kicks off her heels and sits on the edge of the stage with a bottle of champagne.
6 A HUGO BELMONT, 30s, in a tuxedo with the tie undone, leans on a stack of chairs.
7 D CLEMENTINE: You stayed.
8 D HUGO: I thought someone ought to.
9 D CLEMENTINE: It's six in the morning.
10 D HUGO: Is that what the light means?
11 D CLEMENTINE: It's a very honest light.
12 D HUGO: Then I'll be honest too. I wasn't staying for the wedding.
13 D CLEMENTINE: No?
14 D HUGO: No.
15 D CLEMENTINE: Who were you staying for?
16 D HUGO: The woman who danced with the groom's grandfather for three songs.
17 D CLEMENTINE: He taught me the waltz.
18 D HUGO: He taught you well.
19 D CLEMENTINE: He taught me everything but how to leave a party.
20 D HUGO: You're doing fine.
21 D CLEMENTINE: Am I?
22 D HUGO: You're sitting in a ballroom with a stranger and a bottle.
23 D CLEMENTINE: I wouldn't call you a stranger anymore.
24 D HUGO: What would you call me?
25 D CLEMENTINE: Hugo.
26 D HUGO: That's all?
27 D CLEMENTINE: That's a great deal, Hugo.
28 A ¶ A waiter, PROSPER, 20s, wheels in a bussing cart, whistling, and stops dead.
29 D PROSPER (to the room): Ma'am, sir. We close the room at six.
30 D HUGO (to Prosper): Then close it behind us.
* 31 A ¶ A door at the back opens.
32 A VIVIAN BELMONT, 60s, in a dressing gown and curlers, stands in the doorway with a mop.
33 D VIVIAN (to the room): Everyone out! The cleaners are coming!
34 D HUGO: Mother.
35 D VIVIAN (to Hugo): Hugo, put on your tie.
36 D CLEMENTINE (to herself): Of course she's his mother.
37 D VIVIAN (to Clementine): And you, my dear, are the girl who sang flat.
38 D CLEMENTINE: I was sharp.
39 D VIVIAN: Beautifully sharp. Sit. I'll bring coffee.
40 A ¶ She goes.
41 A Hugo and Clementine stare after her.
42 A Clementine puts down the bottle.
43 D CLEMENTINE: I think I'm in love with your mother.
44 D HUGO: Everyone is. It's tiresome.

### SCENE s01367 | INT. COUNTRY HOUSE LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): AGATHA PENHALLOW
* 1 A ¶ A room of leather and dust.
* 2 A A fire gone to embers.
* 3 A An oak desk, a reel-to-reel recorder, a glass of sherry with a lipstick ring.
* 4 A The French windows are shut, the curtains drawn.
5 A ¶ AGATHA PENHALLOW, 60s, silver hair, pearls, black gloves, sits upright at the desk with her hands folded.
6 A She presses a button.
* 7 A The reels turn.
8 D AGATHA [V.O.] (recorded, younger, brisk): Tape one. Tuesday the fourteenth. I begin this record of my own free will and in sound mind.
9 A ¶ She stops the tape.
10 A Rewinds a few inches.
11 A Presses play.
12 D AGATHA [V.O.] (recorded): Tuesday the fourteenth. I begin this record of my own free will and in sound mind.
13 A ¶ She smiles faintly and stops it again.
14 D AGATHA: Nobody ever believes a woman in pearls.
15 A ¶ She pours a little sherry.
16 A Does not drink it.
17 D AGATHA [CONT'D]: Quite right. Let me begin properly.
18 A ¶ She flips a switch.
* 19 A A red light glows.
20 D AGATHA [CONT'D]: My name is Agatha Penhallow. On the night of the fourteenth, my husband Lionel was found dead in this room. The coroner said his heart. The vicar said providence. The maid said nothing at all, which is why I trusted her.
21 A ¶ She leans back.
22 D AGATHA [CONT'D]: I should say first that I did not like Lionel. I should say second that I did not kill him. And I should say third, since these things are the sort that must be said third, that I know who did.
* 23 A ¶ A beat.
* 24 A The fire ticks.
25 D AGATHA [CONT'D]: It was the sherry. Lionel's sherry, from the decanter on that shelf. He never drank mine. He thought I would poison him. Quite the joke, in the end.
26 A ¶ She nods at the glass.
27 D AGATHA [CONT'D]: Someone who knew his habits, his decanter, and his hour. Someone who stood in this room while he drank and did not call for help. Someone with a key to the cellar and a reason to forget it.
28 A ¶ She lifts the glass, turns it in the firelight.
29 D AGATHA [CONT'D]: I tell you this, whoever you are, listening to this tape, because I have no one else to tell. The police have lost interest. The family has lost heart. And I have, I regret to say, lost my husband's will.
30 A ¶ She sets the glass down.
31 A Presses stop.
* 32 A ¶ For a time, nothing.
* 33 A The embers settle.
* 34 A A clock in the hall strikes twelve.
35 A ¶ She presses play again.
36 D AGATHA [V.O.] (recorded, in a different, older voice): Agatha, if you are hearing this, it is because I have already done it. Lionel did not drink the sherry. You did.
37 A ¶ Agatha stares at the machine.
38 A Her gloved hand finds the edge of the desk.
39 D AGATHA [V.O.] (recorded): I have been recording you for twenty years, my dear. Every night after supper. You never noticed the machine under the floorboard.
40 D AGATHA (whispering): Lionel.
41 D AGATHA [V.O.] (recorded): You will want to know where it is. Look under the third book on the second shelf. It is not a book.
42 A ¶ She rises.
43 A Crosses to the shelf.
44 A Counts.
45 A Pulls the third book.
* 46 A It is a hollow box.
* 47 A Inside, a second reel, labeled in Lionel's tight script: AGATHA, THE TRUTH.
48 A ¶ She holds it.
49 A Her hands shake.
50 D AGATHA (to herself): Oh, Lionel. You clever, clever man.
51 A ¶ She carries the reel back to the desk and threads it onto the spindle.
* 52 A The machine whirs.
53 D AGATHA [V.O.] (recorded, her own voice again, younger, laughing): Lionel, you have a terrible habit of listening at keyholes.
54 A ¶ Agatha's face goes white.
55 A She reaches for the switch.
56 D AGATHA [V.O.] (recorded): Tape one, take two. Let us begin again.
57 A ¶ She presses stop.
* 58 A Silence.
59 A She looks at the glass of sherry, the lipstick ring, the dying fire.
60 A Then, very slowly, she lifts the glass to her lips and drinks.
61 D AGATHA: Tuesday the fourteenth.

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
