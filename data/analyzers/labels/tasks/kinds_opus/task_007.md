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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0007.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01040 | INT. TERMINATOR GREENHOUSE - TIDALLY LOCKED WORLD - TWILIGHT
Detected names (may be incomplete or contain aliases): ILSA VANTONGEREN, BRAM, QUILLON, SEPHORA
* 1 A ¶ A long glass nave on the border between day and night.
* 2 A To the east, a white-hot sun hangs unmoving.
* 3 A To the west, black sky and frozen plains.
* 4 A Inside, tomato vines climb silver wires, heavy with fruit.
5 A ¶ ILSA VANTONGEREN, 50s, botanist, hair wrapped in a faded scarf, kneels among the roots.
6 A She hums as she works, one hand cupping a green fruit like a held breath.
7 A ¶ BRAM, 20s, her apprentice, stands behind her.
8 A He holds a tablet and stares at it as if it had insulted him.
* 9 D BRAM: Ilsa. The heat sink is at ninety-four.
* 10 D ILSA: Ninety-four of what?
* 11 D BRAM: Percent.
12 A ¶ She rises slowly.
13 A Her knees crack.
14 A She doesn't look at the tablet.
15 A She looks at the glass.
* 16 D ILSA: It was ninety-one an hour ago.
* 17 D BRAM: I know.
* 18 D ILSA: Then why are you telling me like it's news?
19 A ¶ He swallows.
20 A He pockets the tablet.
21 A ¶ QUILLON, 30s, the colony's engineer, jogs down the nave, boots clanging on the grating.
22 A He is out of breath, face slick, goggles pushed up on his forehead.
* 23 D QUILLON: Ilsa! Bram! The shade array's jammed.
* 24 D ILSA: Jammed how?
* 25 D QUILLON: It won't rotate. The motor's seized.
* 26 D BRAM: Because of the heat?
27 D QUILLON: Because of a bolt. Someone put a bolt in the gear.
* 28 D ILSA: Someone?
* 29 D QUILLON: Or something.
30 A ¶ Dr. Sephora Oyama's voice crackles from a speaker in the roof.
* 31 D SEPHORA [V.O.]: Greenhouse, this is Medical. We have a patient with heat stroke in the corridor. Is anyone free to--
* 32 D ILSA (cutting in): We're busy.
* 33 D BRAM (over her): Send Quillon!
34 D QUILLON (over Bram): I can't, I'm needed here!
* 35 D SEPHORA [V.O.]: Please. She's asking for you, Ilsa.
36 A ¶ Ilsa stops.
37 A Her hand falls from the tomato.
* 38 A The vines rustle, as if the plants were leaning to listen.
* 39 D ILSA: Who is?
* 40 D SEPHORA [V.O.]: Your daughter.
41 A ¶ She turns to the glass.
42 A Stares at the white sun.
43 A Her shoulders fall, then straighten.
* 44 D ILSA: Bram. Take the tomatoes. All of them. Into the cold room.
* 45 D BRAM: All of them?
* 46 D ILSA: All. Quillon, fix the array. I don't care if you have to swing from it.
* 47 D QUILLON: And you?
* 48 D ILSA: I'm going to my daughter.
49 A ¶ She is already running.
* 50 A Her scarf comes loose and trails behind her like a flag.
51 A ¶ Bram watches her go.
52 A Quillon grabs his arm.
* 53 D QUILLON [CONT'D]: Come on. We've got maybe ten minutes.
* 54 D BRAM: Before what?
* 55 D QUILLON: Before the glass starts cracking.
56 A ¶ He is already moving.
57 A Bram scrambles after, arms full of fruit, tomatoes bouncing and rolling across the floor.

### SCENE s01041 | INT. ICE-FISHING SHANTY - LAKE SUPERIOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS MCINTYRE, MARGOT LEBLANC, TEDDY ORLOV, BRIGID FALLON, ANSEL
* 1 A ¶ A plywood box on a frozen lake, six by eight, glowing orange from a propane heater.
* 2 A Four holes drilled in the floor, four lines dropped into black water.
* 3 A Thermoses, a deck of cards, a battered radio playing country music.
4 A ¶ HOLLIS MCINTYRE, 50s, flannel, beard iced at the tips, sits on an overturned bucket.
5 A MARGOT LEBLANC, 40s, wool cap, jigs her rod in slow circles.
6 A TEDDY ORLOV, 12, her nephew, in an oversized snowmobile suit, stares into his hole.
7 A BRIGID FALLON, 30s, newcomer, borrowed boots, holds a cup of cocoa with both hands.
8 A ANSEL, 70s, Hollis's father, dozes by the door.
* 9 D HOLLIS: Coldest night of the year, they said.
* 10 D MARGOT: Warmest, if you're lucky.
* 11 D BRIGID: Do they bite when it's like this?
* 12 D HOLLIS: They bite when they feel like it.
* 13 D TEDDY: I got one!
14 A ¶ All four turn.
* 15 A Teddy's line goes taut.
16 A He heaves.
* 17 D MARGOT: Easy, kiddo!
* 18 D HOLLIS: Let him fight!
* 19 A ¶ The rod bends nearly double.
* 20 A Ice creaks.
* 21 A Then the line goes slack.
22 A Teddy tumbles back, laughing.
* 23 D TEDDY: It got away!
* 24 D BRIGID: That's the best part.
25 A ¶ She sips.
26 A Settles.
* 27 A The heater hisses.
28 A Ansel snores.
* 29 D MARGOT: I love this. The quiet.
* 30 D HOLLIS: It's not that quiet.
* 31 D MARGOT: It's quiet enough.
* 32 A ¶ For a minute, no one speaks.
* 33 A The radio plays a slow song.
* 34 A Snow ticks on the roof.
* 35 D BRIGID: Does the lake ever talk?
* 36 D HOLLIS: Talk?
* 37 D BRIGID: The ice. It was making a noise earlier. Like a groan.
* 38 D MARGOT: It does that. Expansion.
* 39 D HOLLIS: It's the cold working through it.
* 40 A ¶ The groan comes again.
* 41 A Longer, lower.
42 A Teddy leans closer to the hole.
* 43 D TEDDY: It sounds like a person.
* 44 D MARGOT: Teddy.
* 45 D TEDDY: Like someone humming.
* 46 D HOLLIS: Don't be silly.
* 47 D MARGOT: Don't be silly.
48 A ¶ They've said it at the same time, same flat tone.
49 A They look at each other and neither smiles.
* 50 A ¶ The humming continues.
* 51 A Not the radio.
* 52 A From under the floor.
53 A ¶ Ansel's eyes open.
* 54 D ANSEL (whispering): Nobody put your hand in the hole.
* 55 D BRIGID: What?
* 56 D ANSEL: Don't. Please.
57 A ¶ Teddy's fingers are already at the edge of the water.
58 A ¶ From the black circle, a pale hand rises, slow, almost tender.
59 A It takes Teddy's mitten between two fingers, holds it, as if checking the size.
* 60 A ¶ The heater goes out.

### SCENE s01042 | INT. COMMUNITY CENTER LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH RUTHANNE PIKE, ZEKE, DOM, MEI-LING, COACH
* 1 A ¶ Dented lockers, wet benches, a whiteboard with a half-erased play.
* 2 A The fluorescent tubes buzz.
3 A ¶ COACH RUTHANNE PIKE, 50s, whistle around her neck, paces the length of the room.
4 A ZEKE, 20s, taped wrists, sits head down.
5 A DOM, 30s, pulls on a jersey.
6 A MEI-LING, 20s, goalie, rocks on her toes.
* 7 D COACH (to all): Third period. We're down two.
* 8 D ZEKE: We're down three.
* 9 D COACH: Down two. The ref owes us one.
* 10 D DOM: He owes us two.
* 11 D MEI-LING (muttering): Ref owes us a kidney.
* 12 D COACH: Zeke, look at me. Look up.
13 A ¶ He lifts his head.
* 14 D COACH [CONT'D]: You're the fastest man on this ice.
* 15 D ZEKE: My knee.
* 16 D COACH: Your knee's fine.
* 17 D DOM: Coach, the knee isn't fine.
* 18 D COACH: Dom, tie your skates.
* 19 D DOM: They're tied.
* 20 D COACH: Tie them again.
21 A ¶ Mei-Ling punches her pads, twice.
* 22 A The sound is a heartbeat.
* 23 D MEI-LING: Nobody gets past me. Not one.
* 24 D COACH: That's what I like to hear.
* 25 A ¶ The horn sounds down the hall.
26 A They rise as one.
27 A Zeke limps, then doesn't.

### SCENE s01043 | INT. ASSAY OFFICE - GOLD RUSH TOWN - DAY (1851)
Detected names (may be incomplete or contain aliases): THADDEUS WHIT, CORNELIA BASS
* 1 A ¶ A plank room, one window grimed with dust, a counter scarred by a thousand scales.
* 2 A Weighing pans, crucibles, a brass balance under glass.
3 A ¶ THADDEUS WHIT, 50s, spectacles, black sleeve garters, presides behind the counter.
4 A His fingers are stained yellow from nitric acid.
* 5 A ¶ The door bangs.
6 A CORNELIA BASS, 30s, trousers and a man's hat, strides in.
7 A Dust to her knees.
8 A A leather pouch swings from her belt.
* 9 D THADDEUS: We close in ten minutes, madam.
* 10 D CORNELIA: Then I'll be quick.
11 A ¶ She drops the pouch on the counter.
* 12 A It thuds.
* 13 D THADDEUS: What have you got?
* 14 D CORNELIA: Color.
15 A ¶ He unties the cord.
16 A Pours.
* 17 A Dull yellow dust pools on a sheet of paper.
18 A ¶ He pinches some.
19 A Rolls it between his fingers.
20 A Holds it to the light.
* 21 D THADDEUS: Where was this panned?
* 22 D CORNELIA: Dry Creek.
* 23 D THADDEUS: Dry Creek has been dry for a year.
* 24 D CORNELIA: That's why it's called Dry Creek.
25 A ¶ He gives her a thin smile.
26 A Reaches for a vial.
* 27 D THADDEUS: A drop of acid. For the test.
* 28 D CORNELIA: Go on.
29 A ¶ He doses the metal.
* 30 A It stays bright.
31 A He nods.
* 32 D THADDEUS: It's good.
* 33 D CORNELIA: I know.
* 34 D THADDEUS: Twelve dollars an ounce.
* 35 D CORNELIA: Twenty.
* 36 D THADDEUS: Fourteen.
* 37 D CORNELIA: Seventeen and the sack.
* 38 D THADDEUS: Done.
39 A ¶ He weighs it.
40 A Writes a slip.
41 A Counts bills from a strongbox.
42 A Slides them over.
43 A She doesn't count them.
* 44 D CORNELIA: You'll be here tomorrow?
* 45 D THADDEUS: Every day but Sunday.
* 46 D CORNELIA: Good. I'll bring more.
* 47 D THADDEUS: Madam, if I may. A woman alone in these hills--
* 48 D CORNELIA: I'm not alone.
* 49 D THADDEUS: Your husband?
* 50 D CORNELIA: My claim. A hundred yards of dirt. And a rifle.
* 51 D THADDEUS: Ah.
52 A ¶ She tips her hat.
53 A Heads for the door.
54 A Stops with her hand on the latch.
* 55 D CORNELIA [CONT'D]: Mr. Whit.
* 56 D THADDEUS: Yes?
* 57 D CORNELIA: You tested my gold with acid.
* 58 D THADDEUS: Standard practice.
* 59 D CORNELIA: And you held it to the light.
* 60 D THADDEUS: Also standard.
* 61 D CORNELIA: But you never looked at the weight.
62 A ¶ Thaddeus freezes.
63 A The pen drops from his fingers.
* 64 D CORNELIA [CONT'D]: That scale tilts two grains left. I've been watching it for three weeks.
* 65 D THADDEUS: It's properly calibrated.
* 66 D CORNELIA: It's not.
* 67 D THADDEUS: I'll ask you to leave.
* 68 D CORNELIA: You'll ask me nothing.
69 A ¶ She turns back.
70 A Her hand slips beneath her coat.
* 71 D THADDEUS: Madam.
* 72 D CORNELIA: Open the strongbox.
* 73 D THADDEUS: This is robbery.
* 74 D CORNELIA: It's restitution.
75 A ¶ He doesn't move.
* 76 A The clock ticks.
* 77 A Dust drifts through the light.
* 78 D THADDEUS: There's four hundred dollars.
* 79 D CORNELIA: There's four thousand. Under the false bottom.
80 A ¶ Thaddeus goes white.
81 A He kneels, trembling, lifts the strongbox's lining.
* 82 D THADDEUS: How?
* 83 D CORNELIA: I used to keep books in Sacramento.
84 A ¶ He lays a bundle on the counter.
85 A Then another.
86 A She slides them into her pouch.
* 87 D CORNELIA [CONT'D] (over his words): We never met.
* 88 D THADDEUS: We never met.
89 A ¶ They say it together.
90 A She smiles.
91 A He doesn't.
92 A ¶ She leaves.
* 93 A The door clacks shut.
* 94 A The bell above it jingles for a long time.

### SCENE s01044 | INT. LIBRARY OF MOTHS - THE HOLLOW TOWER - NIGHT
Detected names (may be incomplete or contain aliases): ORRIN, SABLE, TAMSIN, VESPER
* 1 A ¶ Shelves rise into darkness, thick with bound ledgers.
* 2 A Pale moths cover every spine, their wings turning the pages by themselves.
3 A ¶ ORRIN, a young knight in dented mail, steps through the arch, sword half-drawn.
4 A At his side, SABLE, a thief with a hooded cloak and a crooked smile, carries a lantern whose flame burns blue.
* 5 D ORRIN: Quiet. They sleep.
* 6 D SABLE: They're moths, Orrin. They don't sleep.
7 A ¶ TAMSIN, a girl of twelve in an apprentice's smock, scurries from behind a shelf, arms full of scrolls, and nearly collides with them.
8 A All three freeze.
* 9 D TAMSIN: You are not supposed to be here.
* 10 D SABLE: No one is.
* 11 A ¶ The moths lift in a silent cloud.
12 A Orrin's sword rings free.
13 A Sable ducks, Tamsin shrieks, scrolls scatter, and the three tumble together into the center aisle, tangled in cloak and chain.
* 14 A ¶ A hush falls.
15 A ¶ VESPER, tall and thin, robed in gray, steps from between the shelves.
16 A Her face is a smooth mask of bone-white silk.
17 A She raises one hand.
* 18 A The moths settle.
* 19 D VESPER: The Archivist welcomes you. Now put down the lantern.

### SCENE s01045 | INT. GOAT YOGA STUDIO - MORNING
Detected names (may be incomplete or contain aliases): CLAUDETTE FONTENOT, LEONARD PRICE, MAMA ROSE
* 1 A ¶ A converted barn.
* 2 A Bamboo mats in neat rows, string lights, a chalkboard reading "Namaste Baa-ck."
* 3 A Six goats wander the floor, bored, chewing yoga straps.
4 A ¶ CLAUDETTE FONTENOT, 40s, instructor, flowing linen, sits cross-legged on a mat with a phone propped against her water bottle.
5 A LEONARD PRICE, 50s, her only student, a stockbroker in too-tight spandex, attempts a downward dog.
* 6 D LEONARD: Claudette, one of them is eating my sock.
* 7 D CLAUDETTE: That's Beyonce. She loves attention.
* 8 D LEONARD: It's attention with teeth.
* 9 D CLAUDETTE: Breathe, Leonard. In through the nose.
10 A ¶ He breathes.
11 A Beyonce chews.
12 A He breathes again.
* 13 A ¶ The phone rings.
* 14 A A photo of an elderly woman in a floppy hat.
* 15 A MAMA ROSE.
* 16 D CLAUDETTE [CONT'D]: Sorry. I have to take this.
17 A ¶ She answers on speaker.
* 18 D MAMA ROSE [V.O.]: Claudette! Are you on the goat farm again?
* 19 D CLAUDETTE: It's a studio, Mama.
* 20 D MAMA ROSE [V.O.]: Is it the goat that eats the shoes?
* 21 D LEONARD (under his breath): That's the one.
* 22 D MAMA ROSE [V.O.]: Who's that? A man? Are you seeing a man?
* 23 D CLAUDETTE: It's a client, Mama.
* 24 D MAMA ROSE [V.O.]: He sounds fat.
* 25 D LEONARD: I'm in a very difficult pose.
* 26 D MAMA ROSE [V.O.]: Claudette, I need you to come home. The faucet is leaking again.
* 27 D CLAUDETTE: I'll call a plumber.
* 28 D MAMA ROSE [V.O.]: Plumbers are thieves.
* 29 D CLAUDETTE: Mama, I love you. I have to teach.
* 30 D MAMA ROSE [V.O.]: Is the goat singing? I hear a goat singing.
31 A ¶ On cue, Beyonce bleats, triumphant.
* 32 D CLAUDETTE (to Leonard): She's proud of you.
* 33 D LEONARD: I'll be sure to thank her.
* 34 D CLAUDETTE: Goodbye, Mama.
35 A ¶ She hangs up.
36 A Smooths her linen.
37 A Resettles.
* 38 D CLAUDETTE [CONT'D]: Where were we?
* 39 D LEONARD: Paying for this.
* 40 D CLAUDETTE: Right. Warrior One.

### SCENE s01046 | INT. VOSSBERG & CRANE - EXECUTIVE NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE ADEYEMI, MALCOLM VOSSBERG
* 1 A ¶ Six sleek pods, each shaped like a lacquered egg.
* 2 A Soft ambient chimes.
* 3 A A sign on the wall: REST IS RESULTS.
4 A ¶ PRUDENCE ADEYEMI, 40s, in a pressed navy suit, stands outside pod three.
5 A She has been standing there a long time.
6 A Her phone is in her hand, screen dark.
7 A ¶ MALCOLM VOSSBERG, 50s, in shirtsleeves, tie loosened to a politician's disarray, emerges from pod four rubbing his eyes.
8 A He sees her.
9 A He smiles.
10 A He is not surprised.
* 11 D MALCOLM: Prudence. I thought you'd gone home.
* 12 D PRUDENCE: I did.
* 13 D MALCOLM: Then you came back.
* 14 D PRUDENCE: For my coat.
15 A ¶ She doesn't move toward the coat rack.
16 A He does.
17 A He lifts her coat off a hook, holds it out.
18 A She takes it.
19 A Doesn't put it on.
* 20 D MALCOLM: Rough week.
* 21 D PRUDENCE: It's Thursday.
* 22 D MALCOLM: Rough Thursday.
23 A ¶ He adjusts a pod's dial.
* 24 A The chimes change key.
* 25 D MALCOLM [CONT'D]: The numbers will be fine. They always are.
* 26 D PRUDENCE: Are they?
* 27 D MALCOLM: You doubt me?
* 28 D PRUDENCE: I doubt the spreadsheet.
* 29 D MALCOLM: It's your spreadsheet.
* 30 D PRUDENCE: It's the one you rewrote.
* 31 A ¶ Silence.
* 32 A The chimes continue.
* 33 A A faint hiss of oxygen from the pods.
* 34 D MALCOLM: I thought you'd appreciate the efficiency.
* 35 D PRUDENCE: Efficiency.
* 36 D MALCOLM: Streamlining.
37 A ¶ Prudence folds her coat over her arm.
38 A Folds it a second time.
39 A Smooths it flat with both hands, too carefully.
* 40 D PRUDENCE: I'll be in my office.
* 41 D MALCOLM: You were just leaving.
* 42 D PRUDENCE: I changed my mind.
43 A ¶ He nods.
44 A Looks at the pod.
45 A Looks at her.
* 46 D MALCOLM: Sleep on it. That's what these are for.
47 A ¶ She turns, walks to the door.
48 A Pauses with one hand on the frame.
* 49 D PRUDENCE: Do you sleep in there?
* 50 D MALCOLM: Every day.
* 51 D PRUDENCE: And dream?
* 52 D MALCOLM: Never.
* 53 D PRUDENCE: That's what I thought.
54 A ¶ She leaves.
55 A He watches the door close, then climbs back into pod four and seals the lid.

### SCENE s01047 | EXT. SALT FLAT - ABANDONED STAGECOACH - HIGH NOON
Detected names (may be incomplete or contain aliases): MARSHAL CULLEN BRODERICK, DUTCH, LUPE VARGAS
* 1 A ¶ White to the horizon.
* 2 A Heat shimmer bends the sky.
* 3 A A stagecoach tilts on a broken axle, one wheel cocked in the crust.
4 A ¶ MARSHAL CULLEN BRODERICK, 50s, tin star, dust-gray duster, steps down from the coach, rifle across his arm, while behind him DUTCH, a lean outlaw in manacles, shuffles toward the shade, and LUPE VARGAS, 30s, the driver, slaps her hat against her knee, checks the horses, and mutters at the broken wheel, all three of them squinting at a dark speck on the horizon that keeps growing.
* 5 D CULLEN (to the others): Nobody run. There's nowhere to run to.
* 6 D DUTCH (low, to Cullen): Marshal, take these off me. If that's riders, I can shoot.
* 7 D CULLEN: No.
* 8 D LUPE (to herself): Three days. Three goddamn days of salt.
* 9 D CULLEN: Lupe. Water.
10 A ¶ She tosses him a canteen.
11 A He drinks, passes it to Dutch.
12 A Dutch drinks, passes it back.
* 13 A The speck becomes a rider.
* 14 D DUTCH: That's a lone horse.
* 15 D CULLEN: Could be a lone man.
* 16 D LUPE: Could be a mirage.
17 A ¶ The rider slows.
18 A Stops a hundred yards out.
19 A Raises a white cloth.
20 A Waves it.
21 A ¶ Cullen lowers the rifle.
22 A Dutch exhales.
23 A Lupe pulls her hat down.

### SCENE s01048 | INT. KRVX 91.3 FM - RURAL RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): DEE-DEE HARGROVE, ROLAND TIBBETTS, CAL PINKERTON, CALLER
* 1 A ¶ A cinderblock studio in a cornfield.
* 2 A Foam-padded walls, a mixing board with taped-over knobs, a window onto the black field.
* 3 A A red ON AIR light burns.
4 A ¶ DEE-DEE HARGROVE, 40s, headphones, cardigan, a thermos of tea, sits at the console.
5 A She speaks into the mic in the voice of a lifelong friend.
* 6 D DEE-DEE: That was Patsy Cline, and you're listening to Night Owls on KRVX. Four a.m. in Calloway County. Roads are clear and the corn is quiet.
7 A ¶ She flicks a switch.
* 8 A Music slides in.
9 A She leans back.
10 A ¶ ROLAND TIBBETTS, 60s, station engineer, in coveralls, enters with a toolbox and a flashlight.
11 A He sets the box down next to a cabinet of cables.
* 12 D ROLAND: Transmitter's running hot again.
* 13 D DEE-DEE: Is it going to melt?
* 14 D ROLAND: Not tonight.
* 15 D DEE-DEE: Then let it be.
16 A ¶ He snorts.
17 A Sits on a stool.
18 A Unwraps a sandwich.
19 A ¶ CAL PINKERTON, 20s, intern, lanky, sleepy, shuffles in with an armful of CDs and drops them on the console.
20 A He yawns.
* 21 D CAL: Request line's been quiet. Except one.
* 22 D DEE-DEE: Who?
* 23 D CAL: Doesn't give a name.
* 24 A ¶ The studio phone blinks.
25 A Dee-Dee pushes a button.
* 26 A Her mic opens to the caller, softly.
* 27 D DEE-DEE: KRVX, you're on the air.
* 28 A ¶ A pause.
29 A Static, then a thin voice, dry as paper.
* 30 D CALLER [V.O.]: Hello. I'd like to hear "Wild Horses."
* 31 D DEE-DEE: Of course. Is it for someone?
* 32 D CALLER [V.O.]: For the three of you.
33 A ¶ Dee-Dee looks up.
34 A Roland stops chewing.
35 A Cal looks at the window.
* 36 D DEE-DEE: That's very kind. May I ask your name?
* 37 D CALLER [V.O.]: You can see me.
38 A ¶ Out in the black field, a single flashlight clicks on.
* 39 A It points toward the studio.
* 40 A It does not move.
41 A ¶ Cal steps to the glass.
42 A Roland stands, sandwich forgotten.
43 A Dee-Dee keeps her voice steady.
* 44 D DEE-DEE [CONT'D] (into mic): Here's that request, folks.
45 A ¶ She slides the fader.
* 46 A The song begins.
* 47 A In the field, the flashlight goes out.

### SCENE s01049 | INT. JURY ROOM - FLOODLIT TENT - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA ACHTERBERG, DEEZ, PRUITT, MIN-JUN HAN
* 1 A ¶ A federal courthouse flattened by a hurricane, so the court sits in a canvas tent on the parking lot.
* 2 A Folding table, plastic chairs, a single fan.
* 3 A Generator thrum outside.
* 4 A Rain on the roof.
5 A ¶ GLORIA ACHTERBERG, 60s, foreperson, cardigan, a stack of index cards in front of her.
6 A DWAYNE "DEEZ" PRUITT, 30s, ball cap, sits arms crossed.
7 A MIN-JUN HAN, 40s, nurse, kneads her temples.
* 8 D GLORIA (to the room): Let's take another vote. All in favor of conviction.
9 A ¶ Deez doesn't raise his hand.
10 A Min-Jun hesitates.
11 A Gloria raises hers.
* 12 D GLORIA [CONT'D]: One.
* 13 D MIN-JUN: Gloria, I'm not sure--
* 14 D GLORIA: You said yesterday you were.
* 15 D MIN-JUN: I said I leaned.
* 16 D DEEZ: I never leaned.
* 17 D GLORIA: Deez, with respect, you haven't opened your mouth in two days.
* 18 D DEEZ: I'm saving it.
* 19 D GLORIA: For what?
* 20 D DEEZ: For when it matters.
21 A ¶ He stands.
* 22 A The chair scrapes.
23 A He crosses to a pitcher, pours water, drinks.
24 A Then, without warning, he slams the cup down.
* 25 D DEEZ [CONT'D] (to himself): Twelve men on a bench and none of them looked at the kid.
* 26 D MIN-JUN: Deez?
* 27 D DEEZ: You heard me.
* 28 D GLORIA: We are not here to rehash the trial.
* 29 D DEEZ: Gloria, he's nineteen. He had a record of one parking ticket.
* 30 D GLORIA: He had a gun.
* 31 D DEEZ: He had a toy.
* 32 D GLORIA: The witness said it was real.
* 33 D DEEZ: The witness was a hundred yards away in the dark.
34 A ¶ Min-Jun rises, steps between them, hands out.
* 35 D MIN-JUN: Stop. Both of you.
* 36 D DEEZ: She keeps calling it a verdict. It's a guess.
* 37 D GLORIA: You think I haven't been losing sleep?
* 38 D DEEZ: I think you made up your mind on day one.
39 A ¶ Gloria slaps her cards down.
* 40 A They fan across the table.
41 A Deez knocks them to the floor with the back of his hand.
42 A Min-Jun snatches one before it's lost.
* 43 D MIN-JUN: Enough! We have to be unanimous!
* 44 D DEEZ: Then we're not leaving this tent.
* 45 D GLORIA (very quiet): Then we're not leaving.
* 46 A ¶ The generator coughs.
* 47 A The lights flicker.
48 A All three look up.
* 49 A The fan slows to a stop.
50 A ¶ In the dark, no one moves.

### SCENE s01050 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERRERA
* 1 A ¶ Dark.
* 2 A Foam sluices over the windshield.
* 3 A Spinning brushes.
* 4 A Sodium light bleeds through soap in slow orange waves.
5 A ¶ ODALYS FERRERA, 40s, sits behind the wheel of a dented sedan, both hands on ten and two.
6 A Funeral dress.
7 A Hair still pinned.
* 8 D ODALYS [V.O.]: Forty-one years. He never once washed the car.
* 9 A ¶ The brushes slap the roof.
10 A She doesn't flinch.
* 11 D ODALYS [V.O., CONT'D]: Said it would just get dirty again.
12 A ¶ She switches off the radio.
* 13 A The tunnel roars.
* 14 D ODALYS [V.O., CONT'D]: So I let it.
* 15 A ¶ Rinse arches fire.
* 16 A Water drums the glass.
17 A She leans her forehead on the wheel.
* 18 D ODALYS [V.O., CONT'D]: Now I'm paying six dollars to sit in here.
* 19 A ¶ The dryer blasts.
* 20 A The car shudders.
21 A She starts laughing.
22 A Then she stops.
23 A ¶ She puts the car in drive.
24 A Rolls into the light.
