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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0165.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02302 | INT. MASCOT DRESSING ROOM, MINOR-LEAGUE BALLPARK - DAY
Detected names (may be incomplete or contain aliases): ZEPHYR OKONJO, MORGANA TREVINO, DUNCAN, ANNOUNCER
* 1 A ¶ A cramped cinderblock closet crowded with giant heads: a hot dog, a gopher, a foam eagle with a bent beak.
* 2 A It smells of old sweat and glue.
3 A ¶ ZEPHYR OKONJO, twenties, half-dressed as the gopher, struggles with a zipper.
4 A MORGANA TREVINO, fifties, the mascot coordinator, clutches a clipboard.
5 A DUNCAN, nineteen, the hot dog, stands frozen with one arm in a sleeve.
6 D MORGANA: Showtime in four minutes!
7 D ZEPHYR: My zipper's stuck!
8 D DUNCAN: I can't see out of this thing!
9 D MORGANA: You don't need to see, Duncan, you need to wave.
10 A ¶ Zephyr yanks.
11 A Duncan staggers.
12 A Both of them knock into Morgana, who drops the clipboard.
13 A All three go down in a heap of foam and fur, the gopher head rolling away, the hot dog bun flapping.
14 D ZEPHYR: Get off my tail!
15 D DUNCAN: That's my mustard!
16 D MORGANA: Both of you, stand up!
17 A ¶ They stand, tangled.
* 18 A A voice booms through the wall.
19 D ANNOUNCER [O.S.]: Ladies and gentlemen, please welcome your Oakwood Gophers!
20 A ¶ The three look at each other.
21 A Zephyr picks up the gopher head, jams it on backwards, and runs for the door.

### SCENE s02303 | INT. FISHING BOAT, MOORED AT DOCK - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RENATA OKAFOR-LINDGREN, GWEN, HARTIGAN
* 1 A ¶ A deposition held in a wheelhouse.
* 2 A A stenographer's machine on a tackle crate.
* 3 A Gulls outside.
* 4 A The boat creaks.
5 A ¶ ATTORNEY RENATA OKAFOR-LINDGREN, forties, sharp suit, sea-legs unsteady, leans against a bulkhead.
6 A Opposite, in a folding chair, sits CAPTAIN GWENDOLYN "GWEN" HARTIGAN, sixty, weathered, arms crossed.
7 D RENATA: State your name for the record.
8 D GWEN: Gwendolyn Hartigan.
9 D RENATA: And you were the captain on the night of the sixth.
10 D GWEN: I'm captain every night.
11 A ¶ Renata slides a photograph across the crate.
12 A Gwen doesn't look at it.
13 D RENATA: She was found in your hold.
14 D GWEN: She was my deckhand.
15 D RENATA: And she was alive when she boarded?
16 D GWEN: She was alive when she came on. She was alive when she went below.
17 A ¶ Renata taps the photo.
18 A Gwen's jaw tightens.
19 D RENATA: And when she came up?
20 D GWEN: She didn't.

### SCENE s02304 | INT. BAKERY WALK-IN COOLER - BEFORE DAWN
Detected names (may be incomplete or contain aliases): CASIMIR LEWANDOWSKI, ROXANE DELACROIX-HUNT
* 1 A ¶ Steel shelves of dough trays.
* 2 A Breath fogs.
* 3 A A bare bulb swings slightly from its cord.
4 A ¶ CASIMIR LEWANDOWSKI, sixty, the head baker, in a white coat, stands at the back wall.
5 A His hands shake.
6 A Across from him ROXANE DELACROIX-HUNT, forty, in a black wool coat and leather gloves, holds a ledger.
7 A ¶ He looks at the door.
8 A She looks at him.
9 A She sets the ledger on a tray of dough, and the dough sighs under it.
10 D CASIMIR: You said Tuesday.
11 D ROXANE: It is Tuesday.
12 D CASIMIR: It's four in the morning.
13 D ROXANE: Then it's early Tuesday.
14 A ¶ She opens the ledger.
15 A He shuts his eyes.
16 A She turns a page and runs a gloved finger down a column.
17 D CASIMIR: Forty years, I never cooked the books.
18 D ROXANE: You cooked them for thirty-nine.
19 A ¶ He opens his eyes.
20 A He reaches into his coat and she watches him do it, patient as a cat.
21 A He draws out a small brass key.
22 D CASIMIR: It's in the flour bin.
23 D ROXANE: All of it?
24 D CASIMIR: All of it.
25 A ¶ She takes the key.
26 A She does not move toward the door.
27 A Instead she closes the ledger and sets it back in his hands.
28 D ROXANE: Keep this. It's the only copy.
29 A ¶ He stares.
30 A She straightens her gloves.
31 A She walks out, and the heavy door swings shut behind her, and the bulb sways, and he stands among the dough with the book clutched to his chest like a hymnal.

### SCENE s02305 | INT. DRAGON'S HOARD, MOUNTAIN CAVERN - TWILIGHT
Detected names (may be incomplete or contain aliases): SER ALARIC THORNWELL, BRAN, ASHDOWN, VESPERINE
* 1 A ¶ A cavern as wide as a cathedral.
* 2 A Gold rises in slow dunes to the ceiling, spilling goblets, helms, a toppled throne.
* 3 A Far above, a fissure lets in a shaft of rose light.
* 4 A Warm air smells of sulphur and old coins.
5 A ¶ SER ALARIC THORNWELL, forty, battered mail under a cloak of faded blue, kneels on a gold dune with a lantern.
6 A Beside him, young BRANDOLF "BRAN" ASHDOWN, eighteen, his squire, hauls a sack, panting.
7 A Both are filthy with soot.
8 A And on a shelf of rock above them, curled around a brazier of coals, lies an elderly dragon, VESPERINE, scales gone the colour of dusk.
9 A ¶ The dragon opens one yellow eye.
10 D VESPERINE: You are very late.
11 A ¶ Alaric lowers the lantern.
12 A Bran drops the sack.
13 D ALARIC: Forgive us, Vesperine. The pass was snowed in.
14 D VESPERINE: The pass has been snowed in for three hundred years. I would not have thought it a surprise.
15 D BRAN: Ser Alaric, she's talking.
16 D ALARIC: Yes, Bran.
17 D BRAN: Dragons talk?
18 D VESPERINE: Dragons do everything. We merely prefer not to.
19 A ¶ Bran stares at her.
20 A He stares at Alaric.
21 A Alaric folds his arms.
22 D ALARIC: We came for the sword.
23 D VESPERINE: Everyone comes for the sword.
24 D ALARIC: My lord is dying. The kingdom needs it.
25 D VESPERINE: Your lord is a fool.
26 D ALARIC: Perhaps. But he is mine.
27 A ¶ The dragon rolls her head toward Bran.
28 D VESPERINE: And you, little one. What do you come for?
29 D BRAN (whispering): Me? I came to carry the sack.
30 D VESPERINE: Honest, at least.
31 A ¶ She shifts.
* 32 A The gold slides.
* 33 A A tarnished hilt appears among the coins.
34 A Alaric starts toward it.
35 A Vesperine's tail curls across his path, not violently, just a gate closing.
36 D ALARIC: You'll not let us take it?
37 D VESPERINE: I did not say that.
38 D ALARIC: Then what?
39 D VESPERINE: You carry a sack, a lantern, and the weight of a dying lord. Put them down. Sit.
40 A ¶ Alaric looks at Bran.
41 A Bran shrugs.
42 A They sit on the gold, knees drawn up like boys.
43 A Vesperine settles her chin on her claws.
44 D VESPERINE [CONT'D]: Tell me about the king.
45 D ALARIC: He was a good man once.
46 D VESPERINE: And now?
47 D ALARIC: Now he is a tired one.
48 D VESPERINE: Tired men make poor kings. But they make excellent grandfathers.
49 D BRAN (softly): She's smiling.
50 D ALARIC: Dragons do not smile.
51 D VESPERINE: You see? You know nothing about us.
52 A ¶ She lifts her tail.
* 53 A The sword gleams.
54 D VESPERINE [CONT'D]: Take it. And tell your king the mountain remembers him kindly.
55 A ¶ Alaric rises.
56 A He crosses the dunes, lifts the hilt with both hands, and bows over it.
57 A Bran trots after him, dragging the sack.
58 A ¶ At the cavern mouth Bran glances back.
59 A The dragon's eye is closing.
* 60 A The shaft of rose light fades to grey.
61 D BRAN: She let us go.
62 D ALARIC: She did.
63 D BRAN: Why?
64 D ALARIC (after a moment): I think she was lonely, Bran.

### SCENE s02306 | EXT. WINDMILL FARM, EVENING
Detected names (may be incomplete or contain aliases): EUGENE HAUSER, CORA, PATRICK, WIDOW IMOGENE SPARROW, ISAIAH MOBLEY, TELEGRAPH CLERK
* 1 A ¶ A single wooden windmill creaks above a dry stock tank.
* 2 A Beyond it, a wire fence and a field of stubble.
* 3 A Wind lifts the dust in slow brown ropes.
4 A ¶ On the porch of a low house five people sit in mismatched chairs.
5 A EUGENE HAUSER, seventy, bent, holds a tin cup between his knees.
6 A His daughter-in-law CORA, forty, sits with her sleeves rolled and a bowl of shelled peas in her lap.
7 A Her son PATRICK, fifteen, whittles a clothespin.
8 A A neighbour, WIDOW IMOGENE SPARROW, sixty-five, fans herself with a hat.
9 A And a hired man, ISAIAH MOBLEY, thirty, leans on the rail with his boots crossed.
10 A ¶ He watches the road.
11 A Nobody else does.
* 12 A The windmill creaks.
13 D CORA: Wind's up.
14 D EUGENE: Been up all day.
15 D IMOGENE: It'll turn.
16 D PATRICK: It always turns.
17 D ISAIAH: Not always.
18 A ¶ They fall quiet.
* 19 A A far-off hammering echoes from somewhere beyond the hill.
20 D TELEGRAPH CLERK [O.S.] (shouting from the road): Telegram! Telegram for Hauser!
21 A ¶ Cora lifts her head.
22 A Eugene sets down the cup.
23 A Imogene's fan stops.
24 A Patrick looks at the knife in his hand, then at his mother.
25 A Isaiah straightens from the rail, but says nothing, and crosses the yard to the gate.
26 A ¶ He takes the envelope.
27 A He turns it over once.
28 A He carries it back and hands it to Eugene, who holds it without opening it.
29 D EUGENE: Read it, Cora.
30 D CORA: It isn't mine.
31 D EUGENE: Read it anyway.
32 A ¶ She wipes her hands on her skirt, takes the envelope, tears it open.
33 A Her eyes travel down the page and then back up, slowly.
* 34 A The peas stay in her lap.
35 D CORA [CONT'D]: They want us to sign for the water rights.
36 D EUGENE: That all?
37 D CORA: That's all.
38 D IMOGENE: Thank God.
39 D PATRICK: Is that good?
40 D EUGENE: It's something.
41 A ¶ He takes up the cup again.
* 42 A The wind drops.
* 43 A The windmill turns once, slowly, as though remembering how.

### SCENE s02307 | INT. CAROUSEL PAVILION, SEASIDE AMUSEMENT PARK - NIGHT
Detected names (may be incomplete or contain aliases): SIM, ARCHAMBAULT, BEATRIX VON LOEWEN
* 1 A ¶ Dust sheets.
* 2 A Painted horses frozen mid-gallop, brass poles gleaming.
* 3 A A mirrored hub reflects a dozen flashlight beams.
4 A ¶ SIMEON "SIM" ARCHAMBAULT, forties, wiry, kneels at the base of a lacquered unicorn with a pry bar.
5 A BEATRIX VON LOEWEN, thirties, mask pushed up, scans the pavilion with a handheld scanner.
6 D SIM (to himself): Come on, come on, come on.
7 D BEATRIX: Everyone's gone. Camera loops for six minutes.
8 D SIM (to her): Then hold the light.
9 A ¶ She obeys.
10 A He levers the unicorn's belly open.
* 11 A A hollow glints with gold coins, ancient, stamped with a stag, stacked like poker chips.
12 A Sim lifts one and bites it, and Beatrix lets out a long breath.
13 D BEATRIX (to the room): Anyone want to say it?
14 D SIM (grinning): It's real.

### SCENE s02308 | INT. ABANDONED NURSERY SCHOOL, CLASSROOM - NIGHT
Detected names (may be incomplete or contain aliases): OFFICER DWIGHT MALLORY, OFFICER SANDRA PELL, TAYLOR REEVES, MISS MARIGOLD
* 1 A ¶ Tiny chairs.
* 2 A A rocking horse with no eyes.
* 3 A Peeling alphabet posters in the moonlight.
* 4 A A music box plays three notes and stops.
5 A ¶ OFFICER DWIGHT MALLORY, forties, flashlight in hand, nudges open the door with his boot.
6 A His partner OFFICER SANDRA PELL, thirties, follows, gun low.
7 A A teenage urban explorer, TAYLOR REEVES, seventeen, trails behind with a camera, whispering.
8 A And at the back wall, so still she could be a coat on a hook, stands a girl in a yellow dress, MISS MARIGOLD, her face turned to the corner.
9 D MALLORY: Police. Anyone in here?
10 D PELL: Quiet. Listen.
11 D TAYLOR: It's just the wind, right?
* 12 A ¶ The music box plays again.
13 A Pell sweeps her light.
14 A Mallory crouches by the rocking horse and puts a hand on its empty socket.
15 A Taylor lifts the camera, the red light blinks, and the flashlight beam crosses the yellow dress.
16 D PELL: Dwight.
17 D MALLORY: I see her.
18 D TAYLOR: Is that, is she a kid?
19 A ¶ The girl turns.
20 A Her face is smooth and pale as a plate.
21 A She lifts one hand to her mouth, and the music box plays its three notes again.
22 D MARIGOLD (sweetly): Nap time.

### SCENE s02309 | INT. DEEP-SPACE HAULER, CARGO BAY 3 - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIAN ASANTE-BROOKS, FIRST MATE YUKI TANABE-REYES, CARGO MASTER BORIS ZIELINSKI, MEDIC ANJALI VERMA, STOWAWAY, PILOT
* 1 A ¶ Stacked containers.
* 2 A Amber work lights.
* 3 A A thin layer of frost on the deck plates.
* 4 A The air recyclers wheeze.
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
* 28 A ¶ The seam splits.
29 A A hiss of white vapour floods the deck, Boris staggers back, Yuki fires a flare, Anjali drags the boy behind a crate, and Lucian draws his sidearm.
* 30 A The door swings open.
31 A ¶ Inside, curled on a bed of packing foam, a figure raises its head.
32 A It has the boy's face.

### SCENE s02310 | INT. CASINO COUNTING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS VANDERKOOI, MARISOL FONTANA, DETECTIVE HARLAN BECKMANN
* 1 A ¶ Stacked cash.
* 2 A Camera domes.
* 3 A A hum of machines.
4 A ¶ ELIAS VANDERKOOI, fifty, in a grey suit, sits at a desk and sorts bills with a licked thumb.
5 A He does not look up when the vault door clicks.
6 A ¶ His partner MARISOL FONTANA, forty, closes it behind her and leans against it.
7 A She holds a duffel bag by one strap.
8 A She does not look at the money.
9 A She looks at him.
10 D ELIAS: Late.
11 D MARISOL: Traffic.
12 A ¶ He sets down the bills.
13 A She lets the duffel slide to the floor and kicks it across the carpet.
* 14 A It stops against his shoe.
15 D ELIAS: That's the whole amount?
16 D MARISOL: It's all of it.
17 A ¶ Elias sighs.
18 A He stands, slowly, and he unbuttons his jacket.
19 A ¶ A third figure steps out from behind the shelving.
20 A DETECTIVE HARLAN BECKMANN, sixty, in a trench coat, holds a badge in one hand and handcuffs in the other.
21 D BECKMANN: Evening.
22 A ¶ Marisol closes her eyes.
23 A Elias lifts his hands, calm, almost relieved, and says nothing at all.

### SCENE s02311 | INT. PHOTO BOOTH, WEDDING RECEPTION - NIGHT
Detected names (may be incomplete or contain aliases): INGRID SOLBERG, THEO MARCHETTI, PASCAL
* 1 A ¶ A curtained booth, red velvet, a strip of lightbulbs.
* 2 A Muffled dance music thumps through the walls.
3 A ¶ INGRID SOLBERG, thirty, in a bridesmaid's green dress, sits on the stool with her shoes in her lap.
4 A THEO MARCHETTI, thirty-two, a groomsman, slides in beside her, tie loosened.
5 A PASCAL, the photographer's assistant, nineteen, sticks his head through the curtain with a coin tray.
6 D PASCAL: Four frames. Strike a pose.
7 D INGRID: We're not together.
8 D THEO: We're not together.
9 D INGRID: Do not make this weird.
* 10 A ¶ The flash goes.
11 A Ingrid and Theo both flinch and nearly fall off the stool.
12 A Pascal ducks out.
13 D THEO: We haven't spoken in three years.
14 D INGRID: We spoke in March.
15 D THEO: You said "excuse me."
16 D INGRID: You were in the way of the cheese.
* 17 A ¶ The flash goes again.
18 A Neither smiles.
19 D THEO: You look good.
20 D INGRID: Don't.
21 D THEO: I'm just saying.
22 D INGRID: I know what you're saying. You're saying it with that face.
* 23 A ¶ Flash.
24 A She is looking at him.
25 A He is looking at her.
* 26 A Flash.
27 A She leans in and kisses him, hard, and the booth shakes.
* 28 A The curtain parts.
29 D PASCAL (whispering): Do you want me to keep the strip?

### SCENE s02312 | INT. HOUSEBOAT, DINING TABLE - NIGHT
Detected names (may be incomplete or contain aliases): ROSALEEN FITZPATRICK, THADDEUS FITZPATRICK, CILLIAN, YASMIN FITZPATRICK
* 1 A ¶ A narrow cabin lit by a hurricane lamp.
* 2 A A pot of stew steams.
* 3 A The hull knocks gently against a pier.
4 A ¶ ROSALEEN FITZPATRICK, sixty, her hair pinned up, ladles stew.
5 A Her husband THADDEUS FITZPATRICK, sixty-two, bearded, tears bread in silence.
6 A Their son CILLIAN, thirty-four, in a city jacket, stares at his bowl.
7 A And his wife YASMIN FITZPATRICK, thirty, folds her napkin into smaller and smaller squares.
8 D ROSALEEN: Eat.
9 D CILLIAN: I'm not hungry.
10 D ROSALEEN: You drove four hours.
11 D CILLIAN: I had a sandwich.
12 D THADDEUS: Where?
13 D CILLIAN: A service station.
14 D THADDEUS: They'll charge you three pounds for a sandwich.
15 D CILLIAN: It was four.
16 D THADDEUS: Robbery.
17 D ROSALEEN: Yasmin, more stew?
18 D YASMIN: I'm fine, thank you.
19 D ROSALEEN: You didn't finish.
20 D YASMIN: I'm full.
21 D ROSALEEN: You're thin.
22 D YASMIN: I'm what I always am.
* 23 A ¶ A pause.
24 A Thaddeus sets down the bread.
25 D THADDEUS: Your mother made this stew.
26 D CILLIAN: It's good.
27 D THADDEUS: It's the same as last year.
28 D CILLIAN: That's what makes it good.
29 D THADDEUS: Then why do you look like that?
30 D CILLIAN: Like what?
31 D THADDEUS: Like a man who's sold the boat.
* 32 A ¶ Silence.
33 A Rosaleen sets down the ladle.
* 34 A Yasmin's napkin is a tiny white square.
35 D CILLIAN: Dad.
36 D THADDEUS: Did you sell the boat?
37 D CILLIAN: I haven't sold anything.
38 D THADDEUS: You've had a man to look at her.
39 D CILLIAN: That was a surveyor. For the bank.
40 D THADDEUS: The bank.
41 D ROSALEEN: Thaddeus.
42 D THADDEUS: The bank, Rosaleen.
43 D CILLIAN: The mortgage is three months behind. I didn't know how to say it.
44 D THADDEUS: So you brought a surveyor.
45 D CILLIAN: I brought help.
46 D THADDEUS: I don't need help.
47 A ¶ He rises.
* 48 A The chair scrapes, the lamp swings, shadows slide across the walls.
49 A He goes up the stairs and out onto the deck, and the hull rocks under his boots.
50 A Nobody moves.

### SCENE s02313 | EXT. FRONT-LINE TRENCH, FLANDERS - DAWN (1916)
Detected names (may be incomplete or contain aliases): CORPORAL ALISTAIR BRODIE, PRIVATE EMMANUEL DUBOIS
* 1 A ¶ Mud to the knee.
* 2 A A duckboard path vanishes into fog.
* 3 A Somewhere, rifle fire pops like distant twigs.
4 A ¶ CORPORAL ALISTAIR BRODIE, thirty, sits on an ammunition crate with a chessboard balanced on a sandbag.
5 A Across from him PRIVATE EMMANUEL DUBOIS, twenty, a French-Canadian volunteer, rubs a pawn between finger and thumb.
6 D BRODIE: Your move.
7 D DUBOIS: I know.
8 A ¶ Neither moves.
* 9 A A shell whistles overhead and bursts a hundred yards away.
10 A They flinch together, hunch, and glance up, then back at the board.
* 11 A Dust sifts from the revetment onto the pieces.
12 A Brodie blows it off.
13 A Dubois nudges his bishop forward with a trembling hand.
14 D BRODIE: Good.
15 D DUBOIS: Is it?
16 A ¶ Brodie takes the bishop with a knight.
17 A Dubois stares at the empty square.
18 A Neither speaks.
19 A Then Dubois reaches into his tunic, draws out a creased photograph, and sets it on the board beside the captured piece.
20 D BRODIE: Who's that?
21 D DUBOIS: My sister.
22 A ¶ Brodie looks at it for a long moment.
23 A He lifts his own king, tips it on its side, and lays it next to the photograph.

### SCENE s02314 | INT. JURY ROOM, OLD GRAIN EXCHANGE - DAY
Detected names (may be incomplete or contain aliases): FOREWOMAN GERTRUDE OYELOWO, QUIET MAN, HOODIE, CORNELIUS BELLWETHER, WOMAN KNITTING, BUS DRIVER, ANSELM
* 1 A ¶ A long table of scarred oak.
* 2 A Tall windows with blinds half drawn.
* 3 A A pitcher of water sweats.
* 4 A Dust motes spin.
5 A ¶ Six jurors sit in a row.
6 A FOREWOMAN GERTRUDE OYELOWO, sixty, taps a pen.
7 A A YOUNG MAN IN A HOODIE slouches.
8 A MR. CORNELIUS BELLWETHER, seventy, in a bow tie, polishes his glasses.
9 A A WOMAN WITH KNITTING, plump, needles clicking.
10 A A BUS DRIVER in uniform, arms crossed.
11 A And a QUIET MAN at the end, thin, bald, who has said nothing.
12 D GERTRUDE: We'll go around. Verdict?
13 D BELLWETHER: Guilty.
14 D THE YOUNG MAN: Not guilty.
15 D KNITTING WOMAN: Guilty.
16 D BUS DRIVER: Guilty. Obviously.
17 D GERTRUDE: Juror six?
18 A ¶ The quiet man looks up.
19 A He sets a hand flat on the table.
20 D QUIET MAN: Not guilty.
21 D BELLWETHER: On what grounds?
22 D QUIET MAN: Reasonable doubt.
23 D BUS DRIVER: There's no doubt.
24 D QUIET MAN: There's some.
25 D KNITTING WOMAN (counting stitches): Where?
26 D QUIET MAN: The light switch.
27 D GERTRUDE: What about it?
28 D QUIET MAN: The defendant said he flipped it on. But the switch was installed upside down. Up means off.
* 29 A ¶ Silence.
30 A The needles stop clicking.
31 A Bellwether puts his glasses back on.
32 D BELLWETHER: Remarkable.
33 D THE YOUNG MAN: Told you.
34 D GERTRUDE: What's your name, Juror six?
35 D ANSELM: Anselm Rudd. Electrician.
36 D BUS DRIVER (muttering): Of course.
37 D ANSELM: I'll explain it again, if anyone wants.
38 D GERTRUDE: We have all day.

### SCENE s02315 | INT. ROOFTOP BAR, HOTEL TERRACE - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, VIVIENNE ASHFORD-LANE, BARTENDER, DOMINIC, QUENTIN
* 1 A ¶ Candles in glass chimneys.
* 2 A A city of lights twenty floors down.
* 3 A Jazz from a speaker.
* 4 A The bar is nearly empty.
* 5 A A velvet rope hangs from brass posts near the stairwell door.
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
* 22 A The glass rings against the bar top.
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
* 38 A A single photograph.
* 39 A Her husband, unmoving, at the foot of a staircase.
40 A She exhales.
41 A For a long moment she says nothing.
42 D VIVIENNE: Thank you.
43 D QUENTIN: That's it?
44 D VIVIENNE: That's it.
45 A ¶ She finishes her whisky.
46 A She leaves a very large tip.

### SCENE s02316 | INT. PAWNSHOP, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SILK, MERCADO, TWO-TON TOMMY, PEARL, BIG ARTHUR, SWEETS
* 1 A ¶ Shelves of guitars, cameras, wedding rings under glass.
* 2 A A single dusty lamp.
* 3 A Tension thick as the smell.
4 A ¶ SILAS "SILK" MERCADO, forties, in a silk shirt, leans on a safe.
5 A Four men face him in a loose arc: TWO-TON TOMMY, enormous; PEARL, thin and quick; BIG ARTHUR, grey-bearded; and young SWEETS, jittery, with a revolver tucked in his waistband.
6 D SILK: Gentlemen.
7 D TWO-TON TOMMY: Silk.
8 D PEARL: You're late.
9 D SILK: I'm exactly on time.
10 D SWEETS: He's lying.
11 D BIG ARTHUR: Quiet, boy.
12 A ¶ Silk reaches for the safe dial.
13 A Sweets' hand twitches toward his waistband.
14 A Pearl and Tommy move together to block him, and Arthur steps between, and for a moment all four stand shoulder to shoulder, nobody breathing.
* 15 A The lamp flickers.
16 D SILK: Easy. It's just the combination.
17 A ¶ He spins the dial.
* 18 A A click.
* 19 A The door swings open on rows of bundled cash.
20 A Nobody moves.
21 D PEARL: Count it.
22 D SILK: Already did.

### SCENE s02317 | INT. FAMILY MINIVAN, PARKED OUTSIDE GRANDMA'S HOUSE - DAY
Detected names (may be incomplete or contain aliases): DAD, ROBERT OYELARAN, MOM, WENDY OYELARAN, TEEN, MAYA, LITTLE BROTHER BENNY
* 1 A ¶ Rain taps the windshield.
* 2 A The seats are littered with crayons and fast-food bags.
* 3 A A tiny air freshener swings from the mirror.
4 A ¶ DAD, ROBERT OYELARAN, forty-five, grips the wheel and stares at the house.
5 A MOM, WENDY OYELARAN, forty-three, in the passenger seat, adjusts her hair in the visor mirror.
6 A In the back, TEEN, MAYA, fifteen, scrolls her phone, earbuds in, and LITTLE BROTHER BENNY, seven, hugs a stuffed rabbit.
7 D WENDY (to the car): Okay. Everyone. Smile, be polite, no complaining.
8 D BENNY: Do I have to hug her?
9 D ROBERT: Yes.
10 D BENNY: She smells like cabbage.
11 D WENDY: Benny.
12 D MAYA (pulling an earbud): Can we skip it this year?
13 D ROBERT: No, Maya.
14 D MAYA (muttering): Great.
15 D WENDY: Robert, you remember what we agreed.
16 D ROBERT: No politics.
17 D WENDY: No politics, no complaints about the casserole.
18 D ROBERT: She makes it on purpose.
19 D WENDY: Robert.
20 D ROBERT: Fine.
* 21 A ¶ The front door of the house opens.
22 A GRANDMA waves from the porch in a pink cardigan.
23 A Everyone in the van freezes, then waves back at once, teeth bared in unison.
24 D BENNY: She's got the casserole.
25 D ROBERT (under his breath): I know.
* 26 A ¶ The doors open.
27 A They file out into the rain, Maya last, dragging her feet.
28 A She pauses to pocket her earbuds.
29 D MAYA (whispering): Love you guys.
30 D WENDY: What?
31 D MAYA: Nothing. Let's go.

### SCENE s02318 | INT. FARMHOUSE BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): DEZ, CALLUM KOWALCZYK, RHONDA
* 1 A ¶ Dirt floor.
* 2 A A single bare bulb on a cord.
* 3 A Shelves of mason jars.
* 4 A A furnace thumps like a heartbeat.
5 A ¶ DESMOND "DEZ" KOWALCZYK, thirty, and his brother CALLUM KOWALCZYK, twenty-eight, crouch by a low iron door in the far wall.
6 A Dez holds a crowbar, Callum a flashlight.
7 A Their cousin RHONDA, thirty-five, stands on the steps, arms wrapped round herself.
8 D RHONDA: Dez, don't.
9 D DEZ: We have to know.
10 D CALLUM: Dez is right.
11 D RHONDA: Callum, you're not helping.
12 D CALLUM: Rhonda, I'm trying.
13 A ¶ He aims the light at the iron door.
* 14 A It is covered in scratches, long and deep.
15 A Dez sets the crowbar in the seam and heaves.
* 16 A Nothing.
17 D DEZ: It's rusted shut.
18 D CALLUM: Together.
19 A ¶ They push.
* 20 A The door groans.
21 A Rhonda gasps.
* 22 A Something inside gives a long low hiss, and the bulb flickers, then dies.
* 23 A The furnace stops thumping.
24 D RHONDA (in the dark): Dez? Callum?
25 D DEZ: I'm here.
26 D CALLUM: I'm here.
27 D RHONDA: Something's breathing.
28 D DEZ: That's us.
29 D RHONDA: No. It isn't.
* 30 A ¶ The bulb flares back.
31 A Dez and Callum are alone on the dirt floor.
* 32 A The door is wide open.
* 33 A The steps are empty.
34 A Rhonda's voice calls from the dark behind the iron, small and cheerful.
35 D RHONDA [O.S.]: Come on in, boys!

### SCENE s02319 | INT. INTERROGATION ROOM, PRECINCT 9 - NIGHT
Detected names (may be incomplete or contain aliases): JO, PRUITT, CARMINE LUCIANO
* 1 A ¶ A steel table, two chairs, a one-way mirror that has seen better decades.
* 2 A A single fluorescent tube buzzes.
* 3 A A tape recorder sits between them, its reels still.
4 A ¶ DETECTIVE JOSEPHINE "JO" PRUITT, forty-five, shirtsleeves rolled, leans back in her chair with a coffee.
5 A Across from her sits CARMINE LUCIANO, fifty, in a camel overcoat, his hands folded, a gold ring on every finger.
6 D JO: Mr. Luciano. Thanks for coming in.
7 D CARMINE: I came in because you asked nicely.
8 D JO: I always ask nicely.
9 D CARMINE: That's what worries me.
10 A ¶ She sets her coffee down.
11 A She switches on the tape recorder.
* 12 A The reels begin to turn.
13 D JO: For the record, state your whereabouts on Saturday night.
14 D CARMINE: Home. With my wife.
15 D JO: Your wife is in Palm Beach.
16 D CARMINE: Then I was home alone.
17 D JO: Doing what?
18 D CARMINE: Reading.
19 D JO: What were you reading?
20 D CARMINE: A cookbook.
21 A ¶ She smiles.
22 A He doesn't.
23 A She slides a photograph across the table.
24 A He glances at it, then back at her face.
25 D JO: Do you know this man?
26 D CARMINE (a pause): No.
27 D JO: His name was Anthony Bellavance. He was found in the river.
28 D CARMINE: A tragedy.
29 D JO: He was your accountant.
30 D CARMINE: I have many accountants.
31 D JO: This one kept two sets of books.
32 A ¶ Carmine's jaw tightens.
33 A He unfolds his hands, places them flat on the table, and examines the rings.
34 D CARMINE: Detective, are you charging me?
35 D JO: Not yet.
36 D CARMINE: Then I'd like my lawyer.
37 D JO: He's on his way.
38 D CARMINE: Good.
39 D JO: Good.
40 D CARMINE: You're making a mistake.
41 D JO: You're making one too.
* 42 A ¶ A long silence.
* 43 A The fluorescent tube buzzes.
44 A Carmine takes a cigar from his coat.
45 A She watches him.
46 A He sniffs it, lets it hang in his fingers.
47 D CARMINE: May I?
48 D JO: No smoking.
49 D CARMINE: Even for old friends?
50 D JO: We're not friends.
51 D CARMINE: You wound me.
52 D JO: I'd rather arrest you.
53 A ¶ He laughs, genuinely, and puts the cigar away.
54 D CARMINE: You remind me of someone.
55 D JO: Who?
56 D CARMINE: Your father.
57 A ¶ Her coffee cup stops halfway to her mouth.
58 A She sets it down slowly, deliberately, without a sound.
59 D JO: Say that again.
60 D CARMINE: I knew Mickey Pruitt. A good cop. A hard man. We had an understanding.
61 D JO: He never took a dime.
62 D CARMINE: No. He took something better.
63 D JO: What?
64 D CARMINE: My word.
65 A ¶ Jo rises.
* 66 A The chair legs scrape.
67 A She walks to the mirror and stands with her back to him, her palms against the glass.
68 A In the reflection her face is steady and her hands are not.
69 D JO (not turning): What did he ask for?
70 D CARMINE: He asked me to leave his daughter out of it.
71 D JO: Out of what?
72 D CARMINE: Out of everything.
73 A ¶ She turns.
74 A For the first time, Carmine looks tired.
75 A He folds his hands again and waits.
* 76 A The tape recorder turns.
77 D JO: I need a minute.
78 D CARMINE: Take two.
79 A ¶ She crosses to the door.
80 A She opens it, pauses, and glances back.
81 D JO: Don't go anywhere.
82 D CARMINE: Where would I go?
83 A ¶ She leaves.
* 84 A The door closes.
85 A He leans back and studies the mirror, and then, very slightly, he nods at it, as though at an old friend on the other side.

### SCENE s02320 | INT. ROLLER RINK - TEMPORARY COURTROOM - DAY
Detected names (may be incomplete or contain aliases): NADIA BRZEZINSKI, YOUNG MAN, TOBIAS, JUDGE FAUSTINA OYELOWO-MARSH
* 1 A ¶ The county courthouse flooded in March.
* 2 A Now a folding table stands on the maple skating floor, and a disco ball hangs dead above it.
* 3 A Rental skates hang on a wall rack behind the bench.
4 A ¶ NADIA BRZEZINSKI, 40s, public defender, sorts papers into two stacks.
5 A Her suit is good but the shoes are sneakers.
6 A She looks at the door twice.
7 A ¶ A YOUNG MAN in a borrowed suit sits across from her.
8 A The sleeves cover his knuckles.
9 A He is picking at the cuff.
10 D YOUNG MAN: They said it'd be at the courthouse.
11 D NADIA: It's under four feet of water.
12 D YOUNG MAN: Right.
13 A ¶ He nods.
14 A He keeps nodding a moment too long.
15 D NADIA: You didn't wear the tie I told you to.
16 D YOUNG MAN: It's in the car.
17 D NADIA: Is the car here?
18 A ¶ He looks at the exit sign.
19 A She watches him look.
20 D NADIA [CONT'D]: What's your name? Say it for me. The way you'll say it to her.
21 D YOUNG MAN: Tobias Wren.
22 D NADIA: Again. Slower.
23 D TOBIAS: Tobias Wren.
24 A ¶ She slides a pen across the table.
25 A He doesn't take it.
26 A She leaves it there.
27 D NADIA: The state's offer expires at ten. It's nine fifty.
28 D TOBIAS: My mom said I shouldn't sign anything.
29 D NADIA: Your mom isn't here.
30 D TOBIAS: She's in the lot.
31 A ¶ Nadia stops sorting.
32 A She puts both hands flat on the table.
33 D NADIA: Go get her.
34 A ¶ Tobias stands.
35 A Sits back down.
36 A Stands again.
37 A Walks halfway to the door and turns around.
38 D TOBIAS: I'll sign it.
39 D NADIA: Don't do it because I said "go get her."
40 A ¶ He picks up the pen.
41 A His hand is steady now, steadier than hers.
* 42 A ¶ The side door bangs open.
43 A JUDGE FAUSTINA OYELOWO-MARSH, 60s, robe over a cardigan, enters on rental skates and rolls to a stop at the bench.
* 44 A Nobody laughs.
45 D JUDGE OYELOWO-MARSH: Counsel. Mr. Wren. We are on the record.
46 A ¶ Tobias holds the pen above the page.
47 A Nadia takes it out of his fingers, gently, and caps it.
48 D NADIA: Your Honor, we need ten more minutes.
49 D JUDGE OYELOWO-MARSH: You have two.
50 A ¶ Nadia nods.
51 A Tobias, very quietly, starts to untie his shoes.

### SCENE s02321 | EXT. CANAL LOCK - ABANDONED BARGE - DUSK
Detected names (may be incomplete or contain aliases): SERGEANT KOWALCZYK, PRIVATE TEMBO, CORPORAL ISHIDA, CIVILIAN WOMAN, MIREILLE
* 1 A ¶ Mud.
* 2 A Reeds.
* 3 A A gutted barge half sunk in the lock chamber.
* 4 A Rain thinning to nothing.
5 A ¶ SERGEANT KOWALCZYK, 30s, ash-faced, crouches on the deck.
6 A Rifle across his knees.
7 A He counts rounds by touch.
8 A ¶ PRIVATE TEMBO, 19, scrawny, huddles behind a coil of rope.
9 A Helmet too big.
10 A Shaking.
11 A ¶ CORPORAL ISHIDA, 20s, steady, sweeps the far bank through a cracked scope.
* 12 A ¶ Silence.
* 13 A Distant guns, getting farther.
14 D TEMBO: Is that it? Are they gone?
15 D KOWALCZYK: Shut up and breathe.
16 D ISHIDA: Nothing moving. Tree line's clear.
17 A ¶ Kowalczyk looks at the hatch.
* 18 A A knock from below.
* 19 A Three slow raps.
20 A ¶ All three men freeze.
21 A Rifles up.
22 D KOWALCZYK: Hands. Now.
* 23 A ¶ The hatch lifts a few inches.
* 24 A A woman's hand.
25 A Then a face.
26 A A CIVILIAN WOMAN, 30s, soaked, coat buttoned wrong, clutches a canvas bag to her chest.
27 D CIVILIAN WOMAN: Don't shoot. Please.
28 D ISHIDA: Who are you?
29 D CIVILIAN WOMAN: I live here. I live on the barge.
30 D TEMBO: Nobody lives here.
31 D CIVILIAN WOMAN: I do.
32 A ¶ Kowalczyk lowers the rifle an inch.
33 A Doesn't lower it more.
34 D KOWALCZYK: Name.
35 D CIVILIAN WOMAN: Mireille.
36 D KOWALCZYK: Anyone else down there, Mireille?
37 D MIREILLE: A cat.
38 A ¶ Tembo laughs.
39 A Short.
40 A Cracked.
41 A Then it turns into something else and he presses his sleeve to his mouth.
42 A ¶ Ishida hands him a canteen.
43 A Doesn't say anything.
44 D KOWALCZYK: You hungry?
45 D MIREILLE: Yes.
46 A ¶ Kowalczyk digs in his pack.
47 A Tosses a tin.
48 A She catches it with one hand, bag still clamped under the other arm.
49 D MIREILLE [CONT'D]: They'll come back at dawn.
50 D ISHIDA: We know.
51 D MIREILLE: There's a way out. Under the sluice gate.
52 A ¶ Kowalczyk studies her.
* 53 A Rain starts again, light.
54 D KOWALCZYK: Show us.

### SCENE s02322 | INT. COURTHOUSE FREIGHT ELEVATOR - STUCK BETWEEN FLOORS - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND PETTIGREW, DEMETRIUS OKONKWO-HALE
* 1 A ¶ A steel box with a scarred wooden floor.
* 2 A A work light flickers.
* 3 A A stenciled sign: MAX LOAD 4000 LBS.
4 A ¶ ROSALIND PETTIGREW, 50s, prosecutor, grips a banker's box.
5 A DEMETRIUS OKONKWO-HALE, 40s, defense counsel, leans on the back wall with a coffee cup.
* 6 A ¶ The elevator hangs still.
* 7 A A cable creaks overhead.
8 D ROSALIND: Twelve minutes.
9 D DEMETRIUS: It's been eleven.
10 D ROSALIND: Then you can count. Good. Count how long my offer stands.
11 D DEMETRIUS: Your offer is manslaughter and eight years.
12 D ROSALIND: It's a gift.
13 D DEMETRIUS: It's a coin flip with the coin removed.
14 A ¶ She presses the alarm button.
* 15 A Nothing.
16 A She presses it again.
17 D ROSALIND: Your client lied to the detective.
18 D DEMETRIUS: Your detective led him.
19 D ROSALIND: Your client said he was at the depot.
20 D DEMETRIUS: He was at the depot.
21 D ROSALIND: Until nine.
22 D DEMETRIUS: Until nine fifteen.
23 D ROSALIND: The body was found at nine twenty.
24 D DEMETRIUS: The depot is eleven minutes from the creek.
25 D ROSALIND: Then he ran.
26 D DEMETRIUS: In dress shoes. Carrying a toolbox.
27 A ¶ Rosalind sets the banker's box down.
28 A Opens it.
29 A Pulls a photograph.
30 A Holds it out without looking at him.
31 D ROSALIND: Look at it.
32 D DEMETRIUS: I've seen it.
33 D ROSALIND: Look at it again.
34 A ¶ He takes the photograph.
35 A He studies it.
36 A His jaw works.
37 D DEMETRIUS: The shoe prints don't match.
38 D ROSALIND: The prints are smudged.
39 D DEMETRIUS: They're smudged because your tech walked through them.
40 D ROSALIND: That is a very convenient theory.
41 D DEMETRIUS: It's a photograph.
* 42 A ¶ The elevator lurches.
43 A Both of them grab the rail.
* 44 A The coffee spills across the floor.
45 A Both stare at the puddle as it spreads toward the box.
46 A ¶ Rosalind snatches the box up.
47 A Demetrius shoves his foot against the puddle, blocking it.
48 D DEMETRIUS [CONT'D]: That box is evidence.
49 D ROSALIND: That box is mine.
50 D DEMETRIUS: Then keep it dry.
51 A ¶ They both stop moving.
* 52 A The cable stops creaking.
* 53 A Silence.
54 D ROSALIND: Was that the brake?
55 D DEMETRIUS: I don't know.
56 D ROSALIND: Don't say "I don't know" to me.
57 D DEMETRIUS: I'm not your witness.
58 D ROSALIND: You're the one who wanted to take the freight elevator.
59 D DEMETRIUS: You pushed the button.
60 D ROSALIND: I was pointing at it.
61 D DEMETRIUS: You pushed it.
62 A ¶ Rosalind sits down on the box.
63 A Straightens her skirt.
64 A Looks up at the ceiling vent, then at him.
65 D ROSALIND: Six years.
66 D DEMETRIUS: Four.
67 D ROSALIND: Five, and he pleads to the lesser count.
68 D DEMETRIUS: No.
69 D ROSALIND: No?
70 D DEMETRIUS: He didn't do it.
71 D ROSALIND: Mr. Okonkwo-Hale, I have a thirty-year record that says everyone says that.
72 D DEMETRIUS: And your record never once says someone was right?
73 A ¶ Rosalind stands.
74 A They are close in the small space.
75 A Neither backs away.
76 D ROSALIND: You think I want to be right?
77 D DEMETRIUS: I think you want to be done.
78 D ROSALIND: That's the same thing.
79 D DEMETRIUS: It isn't.
* 80 A ¶ The light flickers off.
* 81 A Total dark.
* 82 A A beat.
* 83 A Two beats.
* 84 A It flickers on.
85 A ¶ They are exactly where they were.
86 A Neither has moved.
87 D ROSALIND: Four years. Plea to the lesser. I'll sign it in this box.
88 D DEMETRIUS: I'll need to hear it from you after we're out.
89 D ROSALIND: You'll hear it.
90 D DEMETRIUS: I'll need it in writing.
91 D ROSALIND: Do you have a pen?
92 A ¶ He pats his pockets.
93 A She pats hers.
94 A They both check their jackets, then each other's eyes.
95 D DEMETRIUS: No.
96 D ROSALIND: Of course not.
* 97 A ¶ The elevator groans.
* 98 A Begins, slowly, to rise.
99 A They both look up.
100 A Neither speaks.
* 101 A The floor numbers light, one by one, over the door.

### SCENE s02323 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): ILSE
* 1 A ¶ Closed.
* 2 A Fluorescent hum.
* 3 A Dryers dark.
* 4 A One machine on the end, still ticking as it cools.
* 5 A ¶ An answering machine on the counter.
* 6 A Red light blinking.
* 7 A ¶ Keys in the lock.
* 8 A The door swings.
9 A ¶ ILSE, 60, enters in a rain slicker.
10 A Hair flat.
11 A Laundry basket on her hip.
12 A Empty.
13 A ¶ She sets it down.
14 A Presses play.
15 D ILSE [V.O.] (recorded, cheerful): You've reached Sunshine Wash and Fold. We can't come to the phone.
16 A ¶ Ilse stares at the machine.
17 D ILSE [V.O., CONT'D] (recorded): Leave a message. Or just bring your socks!
* 18 A ¶ A man's laugh, behind the recording.
* 19 A Cut off.
20 A ¶ She presses stop.
21 A Presses play.
* 22 A The laugh again.
23 A ¶ Stop.
24 A Play.
25 A Stop.
26 A ¶ She lifts the machine.
27 A Holds it overhead.
28 A Her arms shake.
29 A ¶ She sets it down.
30 A Softly.
31 A Presses play.
32 D ILSE [V.O., CONT'D] (recorded): Or just bring your socks!
33 A ¶ Ilse sits on the folding table.
34 A Folds her hands.
35 A Listens to it all the way through, twice.

### SCENE s02324 | INT. FISH-DRYING SHED - ICELANDIC COAST - DAWN
Detected names (may be incomplete or contain aliases): SKAR, ELINBORG, KARI, BJARNI, ÓSKAR, SIGRÚN
* 1 A ¶ A long timber shed.
* 2 A Slatted walls leak gray sea light.
* 3 A Thousands of cod hang from the rafters in rows, stiff as boards.
* 4 A The air smells of salt and iron.
* 5 A A woodstove ticks in the corner.
6 A ¶ GRANDPA ÓSKAR, 80s, wears a wool cap pulled low and a face like a cliff.
7 A He sits on an overturned crate, mending a net with fingers that don't need to look.
8 A ¶ ELINBORG, 40s, his daughter, stands rigid by the door in a city coat.
9 A Wrong boots.
10 A She holds a folder against her chest.
11 A ¶ KARI, 16, her son, lounges against the wall in headphones, hood up.
12 A Earbuds leaking tinny bass.
13 A ¶ SIGRÚN, 12, Kari's sister, sits cross-legged on the floor, counting fish with her lips.
14 A ¶ BJARNI, 50s, Óskar's other son, comes in last.
15 A Shoulders wide.
16 A A thermos in one fist.
17 A Mud to the knee.
18 D ELINBORG: You told me it was shut down.
19 D ÓSKAR: It was shut down. Now it's open.
20 D BJARNI: Dad wanted to dry one more season.
21 D ELINBORG: Dad is eighty-four.
22 D ÓSKAR: Dad can hear you.
23 D KARI (not looking up): Can we go?
24 D ELINBORG: Kari, take those out.
25 D KARI: Why?
26 D ELINBORG: Because your grandfather is talking.
27 A ¶ Kari removes one earbud.
28 A Slowly.
29 A Like a concession.
30 D ÓSKAR: Your mother wants to sell this place.
31 D ELINBORG: I want to talk about it.
32 D BJARNI: That's what selling is.
33 D SIGRÚN: Seven hundred and twelve.
34 D BJARNI: What is?
35 D SIGRÚN: The fish.
36 A ¶ Nobody answers her.
37 D ELINBORG: The offer is real. A developer from Reykjavík. They want the shoreline.
38 D ÓSKAR: They want a hotel.
39 D ELINBORG: They want a lot of things.
40 D BJARNI: Dad built the racks.
41 D ÓSKAR: I built the racks. My father built the shed.
42 D ELINBORG: And what did his father build?
43 D ÓSKAR: Nothing. He died on a boat.
44 D ELINBORG: Pabbi.
45 D ÓSKAR: Don't Pabbi me.
* 46 A ¶ Silence.
* 47 A The stove ticks.
* 48 A A cod sways on its string, knocking another.
49 D ELINBORG: Dad, please.
50 D BJARNI: Dad, enough.
51 D KARI (quietly): Can I say something?
52 D ÓSKAR: You can say something.
53 D KARI: I don't care about the hotel. I don't care about any of it. But I think... I think the smell here is the best thing I've ever smelled.
54 D ELINBORG: Kari.
55 D KARI: I'm serious. It smells like him. Like Afi. Like everything he's ever worn.
56 D ÓSKAR: That is a fair description.
57 D SIGRÚN: Seven hundred and twelve.
58 D BJARNI: Okay, we heard you.
59 D SIGRÚN: Seven hundred and twelve is the number Mom said the developer wants.
60 D ELINBORG: Sigrún.
61 D SIGRÚN: Seven hundred and twelve thousand. That's what they offered. I read it.
62 D ELINBORG: You read my folder.
63 D SIGRÚN: It was open.
64 D ÓSKAR (a thin smile): She counts well, this one.
65 D ELINBORG (softer): Pabbi. I'm not trying to take it from you.
66 D ÓSKAR: You are a little bit.
67 D ELINBORG: A little bit.
68 D ÓSKAR: It's all right. Everyone takes a little.
69 A ¶ He sets the net down.
70 A Stands.
71 A Walks to the nearest rack.
72 A Reaches up and lifts a fish from its string.
73 A Holds it out to Kari.
74 D ÓSKAR [CONT'D]: Smell it.
75 A ¶ Kari does.
76 A Closes his eyes.
77 D KARI: Yeah.
78 D ÓSKAR: Now tell me what it's worth.
79 D KARI: I don't know.
80 D ÓSKAR: Neither do I. That's the problem.
81 A ¶ Elinborg laughs.
82 A Wipes her eyes with the back of her glove.
83 A Bjarni pours coffee into the thermos lid and hands it to his sister without a word.
84 A ¶ She takes it.
85 A ¶ Sigrún goes back to counting.

### SCENE s02325 | INT. MATTRESS SHOWROOM - 3 A.M.
Detected names (may be incomplete or contain aliases): WOMAN, DWAYNE, PRIYA, LOCKHART
* 1 A ¶ Fluorescent lights.
* 2 A Forty beds, no customers.
* 3 A Soft jazz.
4 A ¶ A WOMAN in a nightgown and parka lies on a king-size display model, hands folded on her chest.
5 A She stares at the ceiling.
6 A ¶ DWAYNE, 30s, the night salesman, stands at the foot of the bed with a clipboard.
7 D DWAYNE: Ma'am, we're a mattress store.
8 D WOMAN: I know what you are.
9 D DWAYNE: You can't sleep here.
10 D WOMAN: I'm testing.
11 D DWAYNE: For six hours?
12 D WOMAN: It's a firm medium. It takes time.
13 A ¶ He writes something.
14 A Crosses it out.
15 D DWAYNE: What's your name?
16 D WOMAN: Priya.
17 D DWAYNE: Priya, my manager is going to be here at four.
18 D PRIYA: Then I have an hour.
19 A ¶ She rolls over.
20 A Pulls a pillow to her face.
* 21 A ¶ The front door chimes.
22 A MS. LOCKHART, 50s, regional manager in a camel coat, enters with a travel mug.
23 A She sees the bed.
24 A Sees Priya.
25 A Sees Dwayne.
26 D MS. LOCKHART: Dwayne.
27 D DWAYNE: It's not what it looks like.
28 D MS. LOCKHART: It looks like a customer is asleep.
29 D DWAYNE: Then it's exactly what it looks like.
30 A ¶ Lockhart sips her coffee.
31 A Sits on the next bed over.
32 A Kicks off her heels.
33 D MS. LOCKHART: Scoot.

### SCENE s02326 | INT. TELEGRAPH OFFICE - LOCUST SEASON - DAY
Detected names (may be incomplete or contain aliases): MARSHAL TOBIAS GREER, ODALYS, COAL BRANNIGAN, SILAS PRUETT, DESMOND YEBOAH
* 1 A ¶ Shuttered windows.
* 2 A A hum like a saw mill outside.
* 3 A Dust sifts through cracks.
* 4 A A single lamp.
5 A ¶ MARSHAL TOBIAS GREER, 40s, sweat-stained duster, wedges a rolled blanket under the door.
6 A ¶ ODALYS, 30s, telegraph operator, taps a key.
* 7 A Nothing comes back.
8 A ¶ Three drovers sit on crates.
9 A COAL BRANNIGAN, big, bearded.
10 A SILAS PRUETT, old, hat in his lap.
11 A DESMOND YEBOAH, 20s, jittery, boots too clean.
* 12 A ¶ Something skitters across the roof.
13 D GREER (to the room): Nobody opens that door.
14 D COAL: Wasn't planning to.
15 D GREER: Keep the lamp low.
16 D ODALYS (to Greer): Line's dead. Cut somewhere east.
17 D GREER: Try Kearney.
18 D ODALYS: I did.
19 D GREER: Try again.
20 A ¶ She does.
* 21 A The key clicks, hollow.
22 D SILAS (muttering): Forty years. Never seen it this thick.
23 D DESMOND: What'd he say?
24 D COAL: He's talking to himself.
25 D DESMOND: Is that a thing he does?
26 D COAL: Since his wife passed.
27 A ¶ Greer turns on them.
28 D GREER: Quiet. All of you.
* 29 A ¶ A thud on the door.
* 30 A Then another.
* 31 A Something heavier.
* 32 A Not an insect.
* 33 A ¶ Everyone freezes.
34 A Odalys lifts her hand from the key.
35 D GREER [CONT'D] (low, to himself): Not now.
36 A ¶ He draws his revolver.
37 A Checks the cylinder.
38 D COAL: Marshal.
39 D GREER: Stay put.
40 D COAL: You think it's him?
41 D GREER (to Coal): I think it's someone who ought to be inside.
42 A ¶ Desmond stands.
43 A Sits.
44 A Stands.
45 D DESMOND (to the room): Do we open it or not?
46 D SILAS (muttering): They'll eat the leather first.
* 47 A ¶ The thud again.
* 48 A A voice, muffled, human, through the wood.
49 A ¶ Odalys lunges for the lamp.
50 A Greer grabs the blanket from the door.
51 D GREER (to Coal, Silas, Desmond): Back wall. Now.
52 A ¶ They move.
53 A Guns come out.
* 54 A The doorknob begins to turn.

### SCENE s02341 | INT. OIL RIG - MEDICAL BAY - NIGHT
Detected names (may be incomplete or contain aliases): ILSABET HALVORSEN-REYES, WALLY, OKONJO, CAPTAIN LOWE
* 1 A ¶ A steel-walled room bolted to the deck of a North Sea platform.
* 2 A A single examination cot, an oxygen tank strapped to the wall, a shelf of rattling supplies.
* 3 A The floor shudders with each wave.
* 4 A Rain hammers the window.
5 A ¶ DR. ILSABET HALVORSEN-REYES, 40s, in rain-stained scrubs, bends over the cot.
6 A A headlamp hangs around her neck.
7 A Her eyes are red but steady.
8 A ¶ On the cot lies WALLACE "WALLY" OKONJO, 50s, a roughneck, his shirt cut open.
9 A A pad of gauze soaks red above his ribs.
10 A He grits his teeth.
* 11 A ¶ A radio on the wall crackles.
* 12 A The signal is thin.
13 D CAPTAIN LOWE [V.O.] (over radio): Doctor, we're losing the chopper window. Fifteen minutes.
14 D DR. HALVORSEN-REYES (to the radio): Understood.
15 D WALLY: Doc...
16 D DR. HALVORSEN-REYES: Don't talk.
17 D WALLY: Is it bad?
18 D DR. HALVORSEN-REYES: It's a rib and a lung. I've seen worse.
19 D WALLY: Where?
20 D DR. HALVORSEN-REYES (to herself): Not here.
21 A ¶ She lifts the gauze.
22 A Looks.
23 A Presses the dressing back down with the heel of her hand.
24 A Wally hisses.
25 D CAPTAIN LOWE [V.O.] (over radio): Everyone's standing by on deck. We can wait if you need more time.
26 D DR. HALVORSEN-REYES (to the radio, then to the empty room): Nobody waits. Hear me? Nobody waits for me.
27 A ¶ She opens a drawer.
28 A Pulls out a chest tube kit and tears the sterile wrapper with her teeth.
29 D WALLY: Doc. If I don't...
30 D DR. HALVORSEN-REYES: Wally.
31 D WALLY: Tell my wife I kept the lighthouse key.
32 D DR. HALVORSEN-REYES: You tell her yourself.
33 A ¶ She slides the tube in.
34 A Wally shouts.
35 A Then gasps.
36 A Then, slowly, his chest rises, and his face loosens.
37 D DR. HALVORSEN-REYES [CONT'D] (to Wally): There it is. Breathe with me.
38 A ¶ He breathes.
39 A She breathes.
* 40 A A wave shakes the room.
* 41 A The window goes white with spray.
42 D CAPTAIN LOWE [V.O.] (over radio): Doctor?
43 D DR. HALVORSEN-REYES (to the radio, calm): Captain, you can send the chopper. He's stable.
44 D CAPTAIN LOWE [V.O.] (over radio): Copy that. Good work, Doctor.
45 A ¶ She switches off the radio.
46 A Slumps onto the stool.
47 A Wally lifts a hand.
48 A She takes it.

### SCENE s02342 | INT. MADAME ROUSSEL'S SALON - PARIS - EVENING (1791)
Detected names (may be incomplete or contain aliases): MADAME ROUSSEL, MONSIEUR ROUSSEL, LOUISE, ANTOINE, ABBÉ FOURNIER, CAPTAIN DUVALIER
* 1 A ¶ Candles in silver sconces.
* 2 A Gilt chairs.
* 3 A A harpsichord with its lid closed.
* 4 A Six guests sit around a tea table, porcelain cups trembling on saucers, as the window shows a red dusk beyond the curtains.
5 A ¶ MADAME ROUSSEL, 50s, presides in powdered hair.
6 A Her husband, MONSIEUR ROUSSEL, 60s, studies the sugar tongs.
7 A Their niece, LOUISE, 18, watches the window.
8 A A young poet, ANTOINE, 20s, fiddles with a cravat pin.
9 A A priest, ABBÉ FOURNIER, 60s, stirs his tea long past need.
10 A An officer, CAPTAIN DUVALIER, 30s, sits stiffly, hand on his sword.
11 D MADAME ROUSSEL: More sugar, Abbé?
12 D ABBÉ FOURNIER: No, Madame, I—
13 D LOUISE: Did you hear that?
14 D ANTOINE: It's only the carriage.
15 D MONSIEUR ROUSSEL: At this hour there are no carriages.
16 D CAPTAIN DUVALIER (rising): I will see.
17 D MADAME ROUSSEL: Sit down, Captain.
18 D ABBÉ FOURNIER: Child, it is nothing.
19 D LOUISE: It is a drum.
* 20 A ¶ Silence.
* 21 A The tea steams.
* 22 A Far below, a drumbeat rolls through the street.
* 23 A Then, much closer, a fist on the front door.
24 A Madame Roussel pours another cup with perfect, trembling grace.

### SCENE s02343 | EXT. DRY WELL - HOMESTEAD - DAY
Detected names (may be incomplete or contain aliases): AMOS, TREVELYAN, CASSIUS DELANEY
* 1 A ¶ Flat, cracked earth to the horizon.
* 2 A A single stone well, rope rotted and trailing in the dirt.
* 3 A A windmill turns without conviction.
4 A ¶ AMOS "OLD AMOS" TREVELYAN, 60s, sits on the well's lip, a canteen across his knees, bootless, feet in the dust.
5 A ¶ CASSIUS DELANEY, 30s, rides up on a gray mare.
6 A Hat low, duster pale with road.
7 A He swings down and ties the horse to the windmill.
8 D CASSIUS: Afternoon, Amos.
9 D AMOS: Cassius. You're a long way from town.
10 D CASSIUS: So are you.
11 D AMOS: I live here.
12 D CASSIUS: Not for long, I hear.
13 A ¶ Amos unscrews the canteen.
14 A Tilts it.
* 15 A A few drops fall on his tongue.
16 D AMOS: They send you to talk me out?
17 D CASSIUS: Nobody sends me.
18 D AMOS: That's what I thought.
19 D CASSIUS: The bank wants the land.
20 D AMOS: The bank can have the dust.
21 D CASSIUS: It's the dust they're paying for.
22 D AMOS: Then the bank's a fool.
23 A ¶ Cassius crouches.
24 A Picks up a clod and crumbles it.
25 A He looks into the well.
26 D CASSIUS: How deep was she?
27 D AMOS: Forty feet when I dug her. Now? Maybe thirty-nine.
28 D CASSIUS: You've been down there?
29 D AMOS: Every morning.
30 D CASSIUS: Why?
31 D AMOS: To see if she changed her mind.
* 32 A ¶ A long silence.
* 33 A The windmill creaks.
* 34 A A hawk crosses the sky.
35 D CASSIUS: Amos, I've known you since I was a boy.
36 D AMOS: You were a boy who stole my peaches.
37 D CASSIUS: I was a boy who was hungry.
38 D AMOS: Same thing.
39 A ¶ Cassius laughs, short.
40 A Stands.
41 A Brushes his hands on his pants.
42 D CASSIUS: I came to tell you something.
43 D AMOS: Go on.
44 D CASSIUS: There's water, Amos. East of here. A man in the hills found a spring.
45 A ¶ Amos lowers the canteen.
46 A He turns his head slowly.
47 D AMOS: How far?
48 D CASSIUS: Two days. Maybe three, with a wagon.
49 D AMOS: And who owns it?
50 D CASSIUS: Nobody yet.
51 D AMOS (softly): Nobody yet.
52 A ¶ He looks into the well.
53 A Then, deliberately, he lifts one boot from the dust and pulls it on.
54 D AMOS [CONT'D]: Cassius, what do you want for it?
55 D CASSIUS: I want my name on the deed beside yours.
56 A ¶ Amos stares at him for a long moment.
57 A Then he reaches behind the well, pulls out a shotgun, and levels it at Cassius's chest.
58 D AMOS: That's what I thought.
59 D CASSIUS: Amos.
60 D AMOS: You didn't come to tell me. You came to see if I'd say yes.
61 D CASSIUS: Put it down, old man.
62 D AMOS: Where's the spring, Cassius?
63 D CASSIUS: There is no spring.
64 A ¶ Amos's finger tightens.
65 A Cassius does not move.
66 D CASSIUS [CONT'D]: But there was a time you'd have believed me.
* 67 A ¶ The windmill creaks.
68 A Amos lowers the gun, slowly.
69 A He sits back on the well, looking older.
70 A Cassius mounts his mare and rides off, and Amos does not watch him go.

### SCENE s02344 | INT. WAY STATION - STAGE STOP - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE LAFLEUR, HUDSON CROY, OLD PETE, VOICE, DEPUTY KANE
* 1 A ¶ One lamp, one table.
* 2 A Four people circle a stew pot gone cold.
* 3 A Wind rattles the shutters.
4 A ¶ MARGUERITE LAFLEUR, 40s, in a traveling dress, grips a carpetbag.
5 A HUDSON CROY, 30s, a drummer in a checked vest, drums his fingers.
6 A OLD PETE, 70, the station keeper, whittles.
7 D MARGUERITE: I paid for a coach to Sedalia.
8 D HUDSON: We all paid.
9 D OLD PETE: Coach left this morning.
10 D MARGUERITE: Without me?
11 D OLD PETE: Without anyone. The driver took sick.
12 D HUDSON: Then who's out there?
13 D MARGUERITE: Where?
14 D HUDSON: Listen.
* 15 A ¶ Hoofbeats outside, slow.
16 A A rider dismounts.
17 A Boots on the porch.
18 D OLD PETE (under his breath): Not tonight.
19 A ¶ A VOICE (O.S.) outside, rough and unhurried.
20 D DEPUTY KANE [O.S.]: Pete! Open up! I know you've got folks in there.
21 D HUDSON (whispering): Is he the law?
22 D OLD PETE: He is the law's cousin.
23 D MARGUERITE: Then we open it.
24 D HUDSON: We do not open it.
25 D DEPUTY KANE [O.S.]: I'll count to five!
26 A ¶ Hudson stands, walks to the door, and slides the bolt back.
27 A Marguerite and Pete stare.
28 A He opens it wide.

### SCENE s02345 | INT. DUGOUT CHAPEL - WESTERN FRONT - NIGHT
Detected names (may be incomplete or contain aliases): CHAPLAIN ROSARIO VELAZQUEZ, TEDDY, LACROIX, SERGEANT NIKOLAI BORISOV
* 1 A ¶ A cellar dug under a ruined church.
* 2 A Sandbags for pews.
* 3 A A cracked crucifix propped on an ammunition crate.
* 4 A A gramophone, hand-cranked, plays one worn waltz.
* 5 A Candle stubs.
* 6 A The earth trembles with a distant shelling.
7 A ¶ CHAPLAIN ROSARIO VELAZQUEZ, 40s, kneels at the crate, adjusting the crucifix.
8 A His hands are quick and wrong.
9 A ¶ PRIVATE EDMUND "TEDDY" LACROIX, 19, sits on a sandbag with a letter on his knee and a pencil behind his ear.
10 A ¶ SERGEANT NIKOLAI BORISOV, 30s, leans on the entrance, rifle slung, helmet dented.
11 D TEDDY: Father. How do you write to someone you haven't spoken to in a year?
12 D CHAPLAIN VELAZQUEZ: You begin with the weather.
13 D TEDDY: It's raining.
14 D CHAPLAIN VELAZQUEZ: Then that's a start.
15 D TEDDY: She won't want to know about the rain.
16 D CHAPLAIN VELAZQUEZ: Nobody wants to know about the rain. That's why it is safe.
17 D BORISOV: Safe is a good word for it.
18 D CHAPLAIN VELAZQUEZ: Sergeant. You may sit.
19 D BORISOV: I'll stand.
20 D TEDDY: What if I tell her the truth?
21 D CHAPLAIN VELAZQUEZ: Which truth?
22 D TEDDY: That I'm afraid.
23 D BORISOV: She knows that.
24 D TEDDY: How?
25 D BORISOV: Everyone's afraid. The ones who say they're not are the ones lying.
26 D CHAPLAIN VELAZQUEZ: Sergeant Borisov is a wise man.
27 D BORISOV: Sergeant Borisov is a tired man.
28 D TEDDY: Are you afraid, Sergeant?
29 D BORISOV: I don't discuss it.
30 D TEDDY: That's an answer.
31 D BORISOV: Take it however you like.
32 D CHAPLAIN VELAZQUEZ: Edmund. Write what you would say if she were standing here.
33 D TEDDY: She would never be standing here.
34 D CHAPLAIN VELAZQUEZ: Then write that.
* 35 A ¶ The shelling swells.
* 36 A Dust sifts from the beams.
* 37 A The gramophone skips, and starts again.
38 D TEDDY: Dear Mathilde. It is raining.
39 D CHAPLAIN VELAZQUEZ: Good.
40 D TEDDY: There is a waltz playing. It's the only one we have.
41 D BORISOV: It's a bad waltz.
42 D TEDDY: It's the only one.
43 D CHAPLAIN VELAZQUEZ: Keep going.
44 D TEDDY: I think of you at the window. I think of you hanging the washing. I think of you not thinking of me, and I'm glad.
45 D BORISOV: Glad?
46 D TEDDY: That she's not afraid for me.
* 47 A ¶ A very long silence.
48 A Then Borisov crosses the cellar.
49 A Sits beside Teddy on the sandbag.
50 A Takes the pencil from behind the boy's ear, hands it to him, and says nothing more.

### SCENE s02346 | INT. CURLING RINK - 5 A.M.
Detected names (may be incomplete or contain aliases): GRETCHEN VANDERMEER, BERNIE, OKAFOR, LINNEA SOLBERG, XIMENA TREVINO
* 1 A ¶ A long sheet of pebbled ice under cold blue light.
* 2 A The rafters are hung with faded club banners.
* 3 A Frost on the glass.
* 4 A The Zamboni sits idle at the far end like a sleeping animal.
5 A ¶ Four women stand at the hog line in padded jackets, brooms upright.
* 6 A Breath rises from them in synchronized clouds.
7 A ¶ GRETCHEN VANDERMEER, 50s, the skip, holds the house in her gaze as if it might move if she looked away.
8 A BERNADETTE "BERNIE" OKAFOR, 40s, the lead, flexes a wrist wrapped in tape.
9 A LINNEA SOLBERG, 30s, third, adjusts a glove for the tenth time.
10 A And at the back, 19-year-old XIMENA TREVINO, the new second, holds her broom as if it might fire.
11 D GRETCHEN: We are down by one. Last end. Hammer is theirs.
12 D BERNIE: They always have the hammer.
13 D LINNEA: They always have the luck.
14 D GRETCHEN: Luck is a story we tell after.
15 D XIMENA: Should I sweep hard or light?
16 D GRETCHEN: Hard until I say light. Light until I say hard.
17 D XIMENA: That's the same thing.
18 D GRETCHEN: Then you understand perfectly.
19 D LINNEA: She will, in a year.
20 D BERNIE: In a year she will be skipping.
21 D XIMENA: I don't want to skip.
22 D GRETCHEN: No one wants to skip. We want the rock to go where we want it. The skip is the one who stands there when it doesn't.
23 D BERNIE: That's the most poetic thing she's said all season.
24 D LINNEA: It was a little bit poetic.
25 D GRETCHEN: It was a rule. Eyes on the broom.
26 D XIMENA: Okay. Eyes on the broom.
27 D GRETCHEN: Bernie, first stone. Draw to the four-foot. Light touch.
28 D BERNIE: Light as a prayer.
29 D GRETCHEN: Do not say "prayer."
30 D BERNIE: Light as an apology.
31 D GRETCHEN: Better.
32 A ¶ Bernie settles into the hack.
33 A The ice hisses under her slider as she pushes out, long and low.
34 A She releases the stone, and it glides away with a low whisper, the handle turning slowly.
35 D GRETCHEN [CONT'D] (shouting): Sweep!
36 A ¶ Linnea and Ximena drop and sweep, brooms flicking in perfect alternating rhythm.
37 A Their breath comes in hard bursts.
* 38 A The stone drifts, curls, slows.
39 D GRETCHEN [CONT'D]: Hold. Hold. Off.
40 A ¶ They lift their brooms.
* 41 A The stone slides to a stop, dead center of the house.
* 42 A A tiny sound, like a coin settling on a table.
43 A ¶ Nobody cheers.
44 A They only look at it, steaming faintly on the ice.

### SCENE s02347 | INT. ORBITAL GREENHOUSE - HELIX STATION - "DAY" CYCLE
Detected names (may be incomplete or contain aliases): HELENA VASQUEZ-OLUWO, JO, ARDEN, COMMANDER RHEE, TEENAGE CADET, CADET LISANDRA, TECHNICIAN WU
* 1 A ¶ A great curved garden turning slowly in space.
* 2 A Glass arches filled with starlight.
* 3 A Rows of tomato vines, lemon dwarfs, stalks of corn, all tied to trellises with soft cord.
* 4 A A gentle hum of pumps.
* 5 A Water droplets drift, glittering.
6 A ¶ DR. HELENA VASQUEZ-OLUWO, 50s, botanist, floats upside down among the tomatoes with a clipboard strapped to her wrist.
7 A She is pinching a leaf, frowning.
8 A ¶ Below her, hands on a rail, ENGINEER JOSEPHINE "JO" ARDEN, 30s, in a gray station jumpsuit, adjusts a valve and watches the readout.
9 D HELENA: It's yellowing.
10 D JO: The whole row?
11 D HELENA: Half.
12 D JO: Is it the light?
13 D HELENA: It isn't the light.
14 D JO: Then the water.
15 D HELENA: It isn't the water either.
16 D JO: Then what?
17 A ¶ Helena pulls herself down the trellis.
18 A She hangs beside Jo.
19 A She holds out the leaf.
* 20 A It crumbles to powder in her fingers.
21 D JO [CONT'D]: That's not blight.
22 D HELENA: No.
23 D JO: That's... static.
24 D HELENA: Yes. She thinks so too.
25 D JO: Who?
26 D HELENA: Commander Rhee. She came by this morning.
27 D JO: She didn't tell me.
28 D HELENA: She doesn't tell you things.
29 D JO: She tells you.
30 D HELENA: She asks me things. It isn't the same.
31 A ¶ Jo's jaw works.
32 A She taps the readout.
* 33 A Numbers scroll in amber.
34 A She stops on one.
35 D JO: Helena. That's radiation.
36 D HELENA: I know.
37 D JO: From where?
38 D HELENA: From outside.
39 D JO: That's impossible. The shielding's rated for...
40 D HELENA: It was rated for the old sun.
41 A ¶ Jo turns slowly.
42 A They look at each other.
* 43 A A droplet of water drifts between them and breaks against the glass.
* 44 A ¶ The station intercom chimes.
* 45 A A calm voice.
46 D COMMANDER RHEE [V.O.]: All hands. Report to the central deck. All hands.
47 D JO: That's her.
48 D HELENA: Of course it is.
49 A ¶ Jo pushes off the rail.
50 A Helena grabs a handful of leaves, stuffs them in her pocket.
51 A They float down the long arc of the garden toward the airlock, side by side.
* 52 A Behind them, the tomatoes turn from red to gray.
53 A ¶ At the bulkhead, a TEENAGE CADET, 17, in an oversized uniform, drifts into their path, wide-eyed, a tablet clutched to her chest.
54 D CADET LISANDRA: Doctor. Engineer. The Commander says it's the sun.
55 D JO: We know.
56 D CADET LISANDRA: She says there's a window. Eleven hours.
57 D HELENA: For what?
58 D CADET LISANDRA: To decide.
59 A ¶ Helena closes her eyes.
60 A Jo takes the tablet from the cadet's hands and reads it.
61 A Then, very slowly, she hands it back.
62 A She turns her gaze to Helena.
63 A Helena doesn't open her eyes.
64 D HELENA: Tell me.
65 D JO: We can evacuate half.
66 D HELENA: Which half?
67 D JO: Whichever half she says.
68 D HELENA: And the rest?
69 D JO: She says they'll have the garden.
70 D HELENA (a bitter breath): The garden's dying.
71 D JO: She knows.
72 A ¶ Cadet Lisandra stares from one woman to the other.
73 A She says nothing.
* 74 A A single drop of water drifts up and pops on her sleeve.
* 75 A ¶ Then, beyond the arches, a flare lights the stars.
76 A ¶ Jo and Helena turn together toward the glass.
* 77 A The light climbs, white and silent, across their faces.
78 D CADET LISANDRA [CONT'D] (whispering): That wasn't the sun.
79 D JO: No.
80 D HELENA (low): That was the shield failing.
* 81 A ¶ The hum of the pumps rises.
* 82 A The vines shiver on their trellises.
* 83 A The sirens begin.
84 A ¶ TECHNICIAN WU, 20s, bursts through the bulkhead, goggles up, breathless.
85 D TECHNICIAN WU: Helena! Jo! The Commander wants you on the deck now!
86 D HELENA: We're coming, Wu.

### SCENE s02348 | EXT. RAILROAD CROSSING - BROKEN-DOWN SCHOOL BUS - DUSK
Detected names (may be incomplete or contain aliases): JUNE, RAYMOND, DEVI
* 1 A ¶ A yellow bus idles dead on the tracks.
* 2 A The hood is up.
* 3 A Crossing lights blink red, and a distant horn sounds.
4 A ¶ JUNE, 16, in a letterman jacket, kneels at the engine with a flashlight in her teeth.
5 A RAYMOND, 17, hovers beside her, shirt untucked.
6 A DEVI, 15, stands on the bus steps with a phone held high, hunting for a signal.
7 D RAYMOND: It's the alternator.
8 D JUNE (around the flashlight): It's not the alternator.
9 D DEVI: I have one bar. One. Don't move.
10 D RAYMOND: How would you know?
11 D JUNE: My dad's a mechanic.
12 D DEVI: Quiet, I'm calling.
13 D RAYMOND: He fixes lawnmowers.
14 D JUNE: He fixes everything.
15 D DEVI: Hello? Hello? Is this 911?
16 D RAYMOND: Tell them the train.
17 D DEVI: There's a train coming!
18 D JUNE: How far?
19 D RAYMOND: Two miles.
20 D JUNE: Three.
21 D DEVI: They're asking where we are.
22 D RAYMOND: Say Route Nine.
23 D JUNE: Say the crossing.
24 D DEVI: Route Nine, at the crossing!
* 25 A ¶ The horn sounds again, nearer.
26 A All three look east.
27 D JUNE: Out. Everyone out.
28 D RAYMOND: I'm out.
29 D DEVI: I'm out.
30 A ¶ They run into the weeds, hand in hand in hand, as the bus sits alone in the red light.

### SCENE s02349 | INT. ICE-SCULPTURE WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): DRIVER, MAGDA KOWALSKI, ESME, MARCUS
* 1 A ¶ A walk-in freezer the size of a hangar.
* 2 A Frost smokes off the floor.
* 3 A Under blue work lights stand dozens of ice sculptures: swans, a dragon, a wedding cake, a life-size horse.
* 4 A Everything glitters.
5 A ¶ A DRIVER, 30s, ski mask pushed up onto his forehead, stands before the horse with a hand truck.
6 A He is shivering.
* 7 A Beside him, a dolly holds a rolled-up carpet.
8 A ¶ MAGDA KOWALSKI, 40s, in a parka, arrives through a side door with a tool bag.
9 A Her breath trails behind her like a ghost.
10 D MAGDA: Why's the horse still here?
11 D DRIVER: It's a horse.
12 D MAGDA: I know it's a horse. Why's it still here? The plan was the cake.
13 D DRIVER: The cake was too big.
14 D MAGDA: The cake was perfect.
15 D DRIVER: It wouldn't fit the van.
16 D MAGDA: Then you should've brought a bigger van.
17 D DRIVER: I don't pick the vans.
18 D MAGDA: Who does?
19 D DRIVER: Nobody. It's just what was left.
20 A ¶ Magda sets down her tool bag and unzips it.
21 A She takes out a cordless drill and a thermal blanket.
22 D MAGDA: Help me wrap it.
23 D DRIVER: Wrap the horse?
24 D MAGDA: It's the horse now.
25 A ¶ They drape the blanket over the sculpture.
26 A The Driver grunts, straining.
27 A Frost clings to his cuffs.
28 D DRIVER: What's inside it again?
29 D MAGDA: Don't ask.
30 D DRIVER: I'm not asking. I'm... wondering.
31 D MAGDA: Wondering is asking.
32 D DRIVER: Is it the necklace?
33 A ¶ She says nothing.
34 A Drills a small hole at the horse's flank, and the bit whines through the ice.
35 D DRIVER [CONT'D]: It's the necklace.
36 D MAGDA (not turning): Esme.
37 D DRIVER: What?
38 D MAGDA: That's my name. You've worked with me for six years and you still call me "Magda" in your head.
39 D DRIVER: Your name's Magda.
40 D MAGDA: Is it?
41 A ¶ He stops.
42 A He studies her.
* 43 A The drill bit catches something and goes silent.
44 D MAGDA [CONT'D] (softly): Hold the light.
45 A ¶ ESME's hand goes into the hole.
46 A She withdraws a slim leather pouch, glittering with frost.
47 A She weighs it in her palm.
48 D DRIVER: So it's Esme.
49 D ESME: It's Esme.
50 D DRIVER: And I'm...
51 D ESME: You're the driver.
52 D DRIVER: I'd rather be Marcus.
53 D ESME: Then you're Marcus.
54 A ¶ The Driver, now MARCUS, takes the pouch and slips it into his glove.
55 D MARCUS: Esme. Door's open. Let's roll the horse.
56 A ¶ They roll the wrapped horse toward the loading bay.
* 57 A Behind them, the swans, the dragon, the cake, slowly bead with moisture in the warm draft of the open door.

### SCENE s02350 | INT. STRANDED CABLE CAR - ALPINE RIDGE - DAWN
Detected names (may be incomplete or contain aliases): HANNELORE BR, CKNER, ISAAC MBEKI-LOWE, PAULINE ACHTERBERG
* 1 A ¶ A glass-walled gondola hanging motionless over a gorge.
* 2 A Frost on the windows.
* 3 A A white sea of cloud below.
* 4 A The cable creaks.
* 5 A A single bench seat, a steel pole.
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
* 16 A ¶ The gondola sways.
17 A Everyone stops breathing until it stills.
18 D ISAAC: Anyone have a lighter?
19 D HANNELORE: I don't smoke.
20 D ISAAC: It's not for smoking.
21 D PAULINE: I have matches.
22 D ISAAC: Why didn't you say?
23 D PAULINE: You didn't ask.
24 A ¶ She hands him a small box.
25 A He takes it, strikes one.
* 26 A It flares and dies.
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
* 39 A A thin yellow flame climbs and wavers, and the gondola glows for a few seconds.
40 A Nobody speaks.
41 A ¶ Pauline reaches out and lets her palm hover over the flame.
42 A Isaac moves the paper closer to her without a word.
43 A When it burns down to his fingers, he lets it fall and stamps it out.
* 44 A ¶ The cable jolts.
45 A Everyone grabs a rail.
* 46 A A distant mechanical groan comes from the tower.
47 A Hannelore turns her head slowly toward the sound, as though recognizing an old acquaintance.
48 D HANNELORE [CONT'D]: That is the generator.
49 D ISAAC: How do you know?
50 D HANNELORE: My husband built the first one.
51 D PAULINE: Is that good?
52 D HANNELORE: It means they are trying.
* 53 A ¶ The gondola lurches forward a foot and stops.
54 A Pauline laughs once, a dry bark.
55 A Isaac slides down the door and sits.
56 A Hannelore folds her hands again, and for the first time her shoulders drop.

### SCENE s02351 | INT. NOBLE'S PAWN & LOAN - BLACKOUT - NIGHT
Detected names (may be incomplete or contain aliases): OBINNA AKPAN, ROSALIE, WOMAN, DEVAKI, MOOSE, CHESTER
* 1 A ¶ Total dark but for the red glow of an emergency exit sign and the guttering flame of one candle.
* 2 A Glass cases glint with watches and wedding bands.
* 3 A Guitars hang from the wall like bats.
4 A ¶ A thin man, OBINNA AKPAN, 40s, stands behind the counter with a baseball bat in both hands.
5 A His knuckles whiten.
6 A Beside him, his teenage daughter, ROSALIE, 16, clutches a flashlight she has not dared switch on.
* 7 A ¶ The bell above the door jingles.
8 A Three silhouettes enter.
9 D OBINNA (to the dark): We're closed.
* 10 A ¶ A match flares.
11 A A woman's face, hard and young, lit from below.
12 A ¶ THE WOMAN, who calls herself DEVAKI, 30s, in a raincoat, holds the match up and surveys the store with an easy, patient eye.
13 A Behind her, a big man in a hoodie: MOOSE, 40s, shaved head, jiggling a ring of keys.
14 A Another shape lingers in the doorway: CHESTER, 60s, in a flat cap, one hand on the knob, as if he might leave.
15 D DEVAKI (to the room): Nobody panic. We only came for what's ours.
16 D OBINNA: There's nothing here that's yours.
17 D DEVAKI: Not yet.
18 A ¶ She walks to the glass case.
19 A Taps it with a ringed finger.
20 D DEVAKI [CONT'D]: Open it.
21 D OBINNA: The power's out. The register won't...
22 D DEVAKI: I didn't say the register.
23 A ¶ Obinna swallows.
24 A He looks at Rosalie.
25 A She shakes her head in a tiny motion.
26 A He sets the bat down on the counter.
27 D OBINNA (quietly): Rosie. Back room.
28 D ROSALIE: No.
29 D OBINNA: Now.
30 D ROSALIE: I'm not leaving you.
31 A ¶ Moose steps closer, jingling his keys.
32 A Chester murmurs, barely audible, to no one.
33 D CHESTER (muttering): This isn't what we agreed.
34 D DEVAKI (without turning): Chester.
35 D CHESTER: Yes.
36 D DEVAKI: Shut the door.
37 A ¶ He does.
* 38 A The bell jingles.
* 39 A The store seems to shrink.
40 A ¶ Obinna takes a key from his belt, fits it to the case, and turns it with a click.
41 A Devaki lifts the lid.
42 A She takes out a small velvet bag.
43 A Opens it.
44 A Pours a ring into her palm.
45 A She inspects it by the match, and her face softens for one second.
46 D DEVAKI [CONT'D] (to the group): We're done. Nobody follows.
47 D MOOSE: That's it?
48 D DEVAKI: That's it.
49 D MOOSE: It's one ring.
50 D DEVAKI: It's my mother's ring.
51 A ¶ She slips it onto her finger.
* 52 A The match burns down.
53 A She shakes it out.
54 A In the dark, the bell jingles, and the three shapes slip out.
55 A ¶ For a long moment, neither Obinna nor Rosalie moves.
56 A Then Rosalie clicks on the flashlight.
* 57 A Its beam finds the empty case, the open velvet bag, and a small stack of cash left on the glass.
58 D ROSALIE: Dad. They paid for it.
59 D OBINNA (a slow breath): They paid for it.
60 A ¶ He picks up the cash.
61 A Counts.
62 A Frowns.
63 A Counts again, and frowns harder.
64 D ROSALIE: How much?
65 D OBINNA: Three times the ring.
66 A ¶ He sets the money on the counter and looks at the door, in the dark, where the bell is still faintly swinging.

### SCENE s02352 | INT. NIGHT FERRY - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN EZEKIEL FARROW, FIRST MATE ODESSA LIN, COOK BARNABY OKORO, DECKHAND SVEN HALLGREN, NAVIGATOR PRIYANKA DESHMUKH, ENGINEER YURI KOZLOV
* 1 A ¶ A cramped steel galley below the car deck.
* 2 A Condensation drips from pipes.
* 3 A A coffee urn gurgles.
* 4 A Six crew crowd a bolted table beneath a swinging lamp.
* 5 A The engine drones through the floor.
6 A ¶ CAPTAIN EZEKIEL FARROW, 60s, at the head, stirs a mug he doesn't drink.
7 A FIRST MATE ODESSA LIN, 40s, flips through a logbook.
8 A COOK BARNABY OKORO, 50s, wipes a spotless counter.
9 A DECKHAND SVEN HALLGREN, 20s, jiggles his knee.
10 A NAVIGATOR PRIYANKA DESHMUKH, 30s, studies a chart.
11 A And at the end, ENGINEER YURI KOZLOV, 50s, an oil-stained cap in his fist.
12 D CAPTAIN FARROW (to the table): I called you here because someone has been in the cargo hold.
13 D LIN: Which hold?
14 D CAPTAIN FARROW: The sealed one.
15 D SVEN: There's no sealed hold.
16 D CAPTAIN FARROW: There is now.
17 D BARNABY (muttering): I never liked this run.
18 D PRIYANKA: Captain, the manifest lists nothing sealed.
19 D CAPTAIN FARROW: The manifest was edited.
20 D LIN: By whom?
21 D CAPTAIN FARROW: By someone with access.
22 D YURI: That's all of us.
23 D CAPTAIN FARROW: Yes. That's the point.
* 24 A ¶ A heavy silence.
* 25 A The lamp swings.
26 A Sven stops jiggling his knee.
27 D SVEN: Is it dangerous?
28 D CAPTAIN FARROW: I don't know.
29 D BARNABY: Then why tell us?
30 D CAPTAIN FARROW: Because one of you already knows.
31 A ¶ Nobody moves.
32 A Priyanka sets down her pen.
33 A Lin closes the logbook.
34 D LIN (to the Captain): You think it's one of us.
35 D CAPTAIN FARROW: I think it is two of you.
36 D YURI: Then say who.
37 D CAPTAIN FARROW: I will not. Not yet.
38 D SVEN (under his breath): This is insane.
39 D PRIYANKA (to Sven): Sit still.
40 D SVEN: I am sitting.
41 D PRIYANKA: You are vibrating.
42 D BARNABY (to himself): Thirty years at sea and I'm cooking for a hanging.
43 D CAPTAIN FARROW (to the whole table, calmly): At the next port, a team boards. Customs, perhaps police. Anyone wishing to speak before then, my door is open.
44 D LIN: And if no one does?
45 D CAPTAIN FARROW: Then I will have to guess.
* 46 A ¶ The lamp swings.
* 47 A The engine drones.
* 48 A A faint knocking begins, somewhere far below the floor, slow and patient, like a fist on a locked door.
49 A Every head turns.

### SCENE s02353 | INT. CLOSED PLANETARIUM - OVERNIGHT SLEEPOVER - NIGHT
Detected names (may be incomplete or contain aliases): MAEVE ARMSTRONG, TARIQ BELLAMY, WINONA SHORTBULL, CALLUM TREMBLAY, IMOGEN ABARA, PETROS KALOGEROS
* 1 A ¶ A great domed theater.
* 2 A Rows of reclined seats, and a projector like a monstrous insect at the center of the floor.
* 3 A The dome above is blank.
* 4 A Six sleeping bags lie in a ragged circle under the projector, and a lantern throws their shadows up the curved wall.
* 5 A ¶ Six teenagers sit on the carpet in pajamas, a paper plate of cold pizza between them, the box lid torn open.
6 A ¶ MAEVE ARMSTRONG, 16, the host, cross-legged, in a faded band shirt, plays with a thread on her sleeve.
7 A TARIQ BELLAMY, 17, beside her, glances at the exit doors.
8 A WINONA SHORTBULL, 16, hugs a pillow, eyes bright.
9 A CALLUM TREMBLAY, 17, snaps a glow stick over and over.
10 A IMOGEN ABARA, 15, whispers into her hood.
11 A And at the edge, a quiet boy, PETROS KALOGEROS, 16, watches the dome with unblinking calm.
* 12 A ¶ The projector hums.
* 13 A A small red light blinks on it, then goes dark.
14 D MAEVE (to the group): Okay. Truth or dare.
15 D CALLUM: No.
16 D MAEVE: Yes.
17 D TARIQ: It's two in the morning.
18 D MAEVE: That's when it works.
19 D WINONA (to Maeve): Don't be weird.
20 D MAEVE: I'm not weird. I'm hosting.
21 D IMOGEN (softly, to herself): It's too cold in here.
22 D PETROS: It's the dome. The air has nowhere to go.
23 D IMOGEN: That's... a thing you know?
24 D PETROS: Mm.
* 25 A ¶ The lantern flickers.
26 A Callum snaps the glow stick, and the green light ripples across their faces.
* 27 A The dome is still dark.
28 D MAEVE: Dare. Tariq. Go to the control booth and bring back the key.
29 D TARIQ: What key?
30 D MAEVE: The one in the booth.
31 D TARIQ: There's no key.
32 D MAEVE: Then bring me whatever's there.
33 A ¶ Tariq stands.
34 A Looks at the dark doors.
35 A Then at the others.
36 A Nobody encourages him.
37 D TARIQ (under his breath): Fine.
38 A ¶ He crosses the floor.
* 39 A His footsteps die quickly in the carpet.
40 A The others watch him go.
41 D WINONA (to the group, whispering): Do you hear that?
42 D CALLUM: What?
43 D WINONA: Humming.
44 D IMOGEN: It's the projector.
45 D WINONA: It's not the projector.
46 D PETROS: It's coming from above.
47 A ¶ All six faces lift to the dome.
* 48 A Stars flicker on, one by one, then dozens, then thousands, the whole sky spilling across the curve.
* 49 A No one touches a button.
* 50 A A warm voice murmurs from somewhere, soft as a lullaby, in a language none of them know.
51 D CALLUM (quietly): Tariq!
52 A ¶ Tariq stands at the booth door, still as a statue, his back to them.
53 A He does not answer.
54 D MAEVE (whispering): Tariq?
55 A ¶ Slowly, he turns.
56 A His face is calm.
57 A His eyes reflect the stars.
58 A He smiles at them.
59 D TARIQ: It's beautiful.
60 D WINONA: Tariq. Come back.
61 D TARIQ: You should see it from here.
62 D IMOGEN (barely audible): No.
63 D PETROS (to the group): Nobody go to the booth.
* 64 A ¶ The humming rises.
65 A Callum drops the glow stick.
* 66 A It rolls into the center of the circle and goes out.
* 67 A In the dark, the stars on the dome begin, ever so slowly, to turn.

### SCENE s02354 | INT. FUNERAL HOME - FAMILY ROOM - DAY
Detected names (may be incomplete or contain aliases): OLIVER STANHOPE, WINIFRED STANHOPE-DUVAL, LUCIAN STANHOPE
* 1 A ¶ Beige carpet, a box of tissues on every surface.
* 2 A A framed print of a wheat field.
* 3 A A coffee urn steams on a side table.
4 A ¶ OLIVER STANHOPE, 50s, in a black suit too big at the shoulders, stands facing the wall.
5 A His sister, WINIFRED STANHOPE-DUVAL, 50s, sits on the sofa with a binder of arrangements.
6 D WINIFRED: We should choose the casket today.
7 D OLIVER: Dad wanted pine.
8 D WINIFRED: Dad wanted a lot of things.
9 D OLIVER: He wanted pine.
10 D WINIFRED: He wanted to be left alone.
* 11 A ¶ The door opens.
12 A LUCIAN STANHOPE, 20s, their nephew, steps in, hair wet from rain, a duffel on his shoulder.
13 D LUCIAN: I got the earlier flight.
14 D OLIVER: You weren't invited.
15 D WINIFRED: Oliver.
16 D LUCIAN: It's my grandfather.
17 D OLIVER: It's my father.
18 D WINIFRED: Both of you stop.
19 D LUCIAN: I didn't come to fight.
20 D OLIVER: You came to take the watch.
21 D LUCIAN: I came to say goodbye!
22 D WINIFRED: Quiet! Both of you, quiet!
23 A ¶ Oliver swings around.
24 A His hand shakes.
* 25 A The binder slides off Winifred's lap and hits the floor with a slap.
* 26 A Nobody picks it up.

### SCENE s02355 | INT. MINIATURE GOLF COURSE - WINDMILL HOLE - DAY
Detected names (may be incomplete or contain aliases): WILLY, PHILIPPA PRATT, DOBBS
* 1 A ¶ A garish plastic windmill, a fiberglass dinosaur, a pond of dyed-blue water.
* 2 A Sprinklers tick.
* 3 A A line of tourists waits at the tee.
4 A ¶ WILLOUGHBY "WILLY" PRATT, 60s, in a golf visor and a pastel polo, grips his putter like a scepter.
5 A His wife, PHILIPPA PRATT, 60s, pats her hair and checks her scorecard.
6 A Their son, CHAD PRATT, 30s, in a collared shirt with the logo of his own startup, scrolls his phone.
7 A Their daughter, PORTIA PRATT, 20s, kicks a tee.
8 A And behind them, the hole's reluctant attendant, MR. DOBBS, 50s, sits in a plastic chair under a beach umbrella, reading a paperback with grim concentration.
9 D WILLY (declaring): The windmill hole. Where families are made or destroyed.
10 D PHILIPPA: Please don't be dramatic.
11 D WILLY: This is the hole that cost me my first marriage.
12 D PHILIPPA: I'm your first marriage.
13 D WILLY: That is why it hurt.
14 A ¶ Chad snorts without looking up.
15 A Portia sets her ball on the mat with exaggerated care, takes a stance, and swings.
* 16 A The ball rolls straight, hits the windmill's spinning blade with a hollow clack, and rebounds.
* 17 A It rolls back past her feet, past Chad, past Willy's shoes, and into the blue pond with a plop.
18 D PORTIA: That's cheating.
19 D MR. DOBBS (not looking up): It's a windmill.
20 D WILLY: Cheating how?
21 D PORTIA: The blade moves.
22 D MR. DOBBS: That's the idea.
23 A ¶ Willy hands her another ball.
24 A Philippa lines up her shot with her pinkie extended.
25 A Chad finally pockets his phone, steps up with a stiff practice swing that sends a clod of turf across the course and onto Mr. Dobbs's paperback, and then, with no trace of embarrassment, shrugs and tees up his own ball.
26 A While Willy lectures Portia about wrist angles, Philippa's ball rolls untouched past the windmill, down a slope, and settles at the lip of the hole.
27 D PHILIPPA: Oh.
28 A ¶ Everyone looks at the ball.
29 A Willy forgets the lecture.
30 A Chad drops his putter.
31 A Portia gasps.
32 A Mr. Dobbs lowers the paperback, revealing a face that has seen this before.
33 D WILLY: Hole in one?
34 D MR. DOBBS: Not yet.
* 35 A ¶ The windmill blade swings around, taps the ball, and sinks it.
* 36 A A bell dings.
* 37 A A tinny fanfare plays from a hidden speaker.
38 A The family goes silent.
39 D MR. DOBBS [CONT'D] (deadpan): Congratulations, ma'am. You win a free game.
40 D PHILIPPA (delighted): I do?
41 D WILLY (horrified): She does?
42 A ¶ Philippa throws her arms up.
43 A Chad applauds without enthusiasm.
44 A Portia stalks to the pond and begins fishing for her ball with her putter.
45 A Willy sinks onto the dinosaur's tail, defeated.
46 D WILLY [CONT'D]: In forty years, I have never won a free game.
47 D PHILIPPA: Darling, you have a free game every time you married me.
48 A ¶ Mr. Dobbs flips a page of his paperback.
* 49 A Overhead, a plastic seagull swings from a pole, creaking in the wind.
50 A Everyone, finally, laughs, even Willy, even Dobbs, though he hides it behind the book.
51 D WILLY (rising, brushing his shorts): Next hole. The one with the volcano.
52 D PHILIPPA: Oh, no.
53 D CHAD: Dad, the volcano is a lie.
54 D WILLY: It is a beautiful lie.
55 D PORTIA (from the pond, lifting a dripping ball): I got it!
56 A ¶ She holds it up like a trophy.
* 57 A Water streams down her arm.
58 A Willy salutes.
59 A The family troops toward the volcano, still bickering, while Mr. Dobbs returns to his paperback and the sprinklers tick on.

### SCENE s02356 | INT. ROOFTOP GREENHOUSE - SUNSET
Detected names (may be incomplete or contain aliases): ADAEZE NWOSU
* 1 A ¶ A glass shed on the roof of a tenement, filled with tomato plants, geraniums, and a sagging lawn chair.
* 2 A The city sprawls beyond the panes, rose-gold in the last light.
* 3 A A tape recorder sits on an upturned crate with its lid open.
* 4 A ¶ The door creaks.
5 A ADAEZE NWOSU, 30s, in a long cardigan and paint-spattered jeans, steps inside carrying a watering can.
6 A She is tired in the way of someone who has decided to be tired quietly.
7 A ¶ She sets the can down.
8 A Looks at the recorder.
9 A Kneels beside it.
10 A ¶ She presses a button.
* 11 A The tape whirs.
12 D ADAEZE (into the recorder): Okay. It's me. Again. I know you said not to.
13 A ¶ She laughs without humor and rubs her eyes.
14 D ADAEZE [CONT'D]: I'm on the roof. The tomatoes are doing better than I am. I thought you'd want to know.
15 A ¶ She waits.
* 16 A A silence stretches.
* 17 A A pigeon lands on the glass, scuttles, leaves.
18 A ¶ She presses stop.
19 A Rewinds.
20 A Presses play.
21 D ADAEZE [V.O.] (from the tape, a month old): Okay. It's me. I'm just going to talk. Don't answer. Don't ever answer. I just need to say these things aloud to somebody who isn't me.
22 A ¶ She switches the tape off.
23 A Sits on the lawn chair.
24 A Takes up the recorder in her lap.
25 D ADAEZE [CONT'D] (into the recorder): Right. Here's what I wanted to say.
26 A ¶ She presses record.
27 A A long breath.
28 D ADAEZE [CONT'D]: I think I loved you the way people love a house they've never entered. I stood outside admiring the porch. I never tried the door. And when you finally opened it, I was so busy looking at the porch that I didn't walk in.
29 A ¶ She switches the recorder off.
30 A Watches a bee drift between flowers.
31 A ¶ She rewinds again.
32 A Presses play, and listens to herself.
33 D ADAEZE [V.O.] (from the tape): That's all. I don't expect anything. I just wanted the tomatoes to know you were here once.
34 A ¶ Adaeze exhales.
35 A She stands, takes up the watering can, and pours water at the base of each plant, slowly, one by one.
* 36 A The sun slides lower.
* 37 A The glass turns copper.
38 A ¶ When she is done she sets the can down.
39 A Returns to the recorder.
40 A Presses record.
41 D ADAEZE [CONT'D] (into the recorder, steady now): It's me. I'm going to leave a message. I know you won't listen. But I'm going to say it anyway.
42 A ¶ She takes a long breath.
43 D ADAEZE [CONT'D]: I was wrong about the house. It isn't a house. It's a greenhouse. Everything in it is trying to grow toward the glass. And I stood here for years wondering why it was so bright.
* 44 A ¶ A beat.
45 A She smiles at herself.
46 D ADAEZE [CONT'D]: So here is my invitation. No porch. No door. Just the roof. Come up. Come up and see what I've done with the tomatoes.
47 A ¶ She presses stop.
48 A Ejects the cassette.
49 A Holds it in her palm, small and warm in the fading light.
50 A ¶ She slips it into an envelope on the crate.
51 A Seals it.
52 A Writes a name on the front, in careful hand, then crosses it out and writes another.
53 A Nothing in her face tells which.
54 A ¶ She sets the envelope on the lawn chair, propped against the arm, where the last orange light finds it.
55 A ¶ Then she turns off the lamp, and stands for a while in the half dark among the green.
* 56 A ¶ A siren sounds in the street below.
57 A She does not move toward it.
* 58 A The tomatoes rustle in the breeze from a cracked pane.
59 A ¶ Adaeze steps outside.
* 60 A The door closes behind her, softly, as though not to wake something.
* 61 A The envelope rests in its pool of dying gold.
