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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0127.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00800 | INT. PÂTISSERIE DU MATIN - BACK ROOM - PRE-DAWN
Detected names (may be incomplete or contain aliases): LEONID TARASOV, CASPIAN ROWE
* 1 A ¶ Flour on every surface.
* 2 A Cooling racks.
* 3 A A walk-in oven the size of a closet.
* 4 A In the corner, a three-tier wedding cake on a steel cart.
5 A ¶ LEONID TARASOV, 40s, ski mask pushed up on his forehead, wedges a crowbar under the cake's base.
6 A CASPIAN ROWE, 30s, glasses, gloves, stands guard at the door with a cold coffee.
7 D CASPIAN: Leo. It's a cake.
8 D LEONID: It's a safe.
9 D CASPIAN: It's a cake with a safe in it.
10 D LEONID: Which makes it a safe.
11 A ¶ He pries.
* 12 A The base creaks.
* 13 A A hidden panel pops.
* 14 A Inside: a small steel door, a keypad.
15 D CASPIAN: Four digits.
16 D LEONID: Try his birthday.
17 D CASPIAN: He's seventy.
18 D LEONID: Try it.
19 A ¶ Caspian punches in numbers.
* 20 A Nothing.
21 A He tries again.
* 22 A A red light flashes.
* 23 A A tiny alarm warbles inside the cake.
24 A ¶ They freeze.
25 A Leonid grabs the cake.
26 A Caspian grabs Leonid.
27 A They topple into the cart, tier two sliding off and splattering across the floor in a wet pink avalanche.
* 28 A ¶ The alarm dies.
29 A Both men lie in frosting.
30 D LEONID [CONT'D] (whisper): You did that.
31 D CASPIAN: You pushed me!
32 D LEONID: You grabbed me!
33 A ¶ They scramble up, slipping.
34 A Leonid lunges for the keypad.
35 A Caspian shoves him aside, jabs at the buttons.
* 36 A ¶ The light turns green.
* 37 A The little door swings open.
* 38 A ¶ Inside: a single plastic bag, a scribbled note.
39 A Caspian reads it aloud.
40 D CASPIAN [CONT'D]: "Nice try. -Mom."
41 A ¶ They stare at each other.
42 A Frosting drips from both their chins.

### SCENE s00801 | EXT. HOT-AIR BALLOON - THREE THOUSAND FEET - DAWN
Detected names (may be incomplete or contain aliases): PERPETUA VANCE-OLUWOLE, ARABELLA HOLT, MURDOCH ABERNETHY, FITZ
* 1 A ¶ A wicker basket the size of a small closet swings under a great striped envelope of orange and teal.
* 2 A Fields below are a quilt of green.
* 3 A The burner roars, rests, roars again.
4 A ¶ PERPETUA VANCE-OLUWOLE, 50s, pilot, leather cap and a scarf the length of a river, works the valve and looks at no one.
5 A Beside her, ARABELLA HOLT, 40s, passenger in a sequined jacket, clutches the rim with white knuckles.
6 A At the far side MURDOCH ABERNETHY, 60s, her father-in-law, dozes upright against a sandbag, and FITZ, 20s, deckhand, practically a vine, clings to a rigging line with a grin that will not stay on.
7 D PERPETUA (to the basket, all of them): We're at altitude, folks. Enjoy the view.
8 A ¶ Arabella lets out a very small scream.
9 A Fitz applauds.
10 D MURDOCH (waking): Is it over?
11 D ARABELLA: No, Murdoch.
12 D MURDOCH: Then why am I awake?
13 D PERPETUA (to herself): Three thousand feet, two idiots, and a prayer.
14 A ¶ Arabella glares at her.
15 A Perpetua fires the burner with a cheerful roar.
16 D ARABELLA: Excuse me?
17 D PERPETUA: Nothing.
18 D FITZ (to Murdoch): You can see your house from here!
19 D MURDOCH: I sold my house.
20 D FITZ: You can see the new owner's house!
21 A ¶ Murdoch peers over the rim.
22 A Squints.
23 A Nods slowly.
24 D MURDOCH: He mowed the lawn badly.
25 D ARABELLA (to everyone, brittle): Can we land now? Please?
26 D PERPETUA: Landing's a negotiation, dear.
27 D ARABELLA: With whom?
28 D PERPETUA: The wind.
* 29 A ¶ A gust shoves the basket sideways.
30 A Arabella shrieks and drops to her knees.
31 A Murdoch grabs her sequined shoulder, delighted.
32 A Fitz whoops.
33 A Perpetua, unbothered, adjusts the valve.

### SCENE s00802 | INT. GOLDEN TIGER KARAOKE - PRIVATE ROOM 4 - NIGHT
Detected names (may be incomplete or contain aliases): MINH-ANH LE, DUKE FONTENOT, TANYA FROST, INES CALDER, MAN IN LEATHER COAT, LEATHER COAT, CASIMIR
* 1 A ¶ Velvet booths.
* 2 A A neon tiger glows on the wall.
* 3 A A screen shows lyrics to a song nobody is singing.
* 4 A On the table: a bucket of ice, a tray of cheap whiskey, and a leather briefcase.
5 A ¶ MINH-ANH LE, 30s, black dress, sits very still and watches the door.
6 A DUKE FONTENOT, 50s, linen jacket, rotates a microphone in his hands like a cigar.
7 A TANYA FROST, 40s, beside him, shuffles a deck of cards without looking at them.
8 A INES CALDERÓN, 20s, the room's waitress, hovers with a tray and a wary smile.
9 A ¶ A MAN IN A LEATHER COAT, 50s, comes in without knocking.
10 A He shuts the door gently behind him.
11 D MAN IN LEATHER COAT: Evening, all.
12 D DUKE: You're early.
13 D MAN IN LEATHER COAT: You're late.
14 A ¶ He drops into the booth.
15 A Takes a glass off Ines's tray and drinks it in one pull.
16 A She lowers the tray and backs toward the door.
17 D TANYA: Stay, honey.
18 D INES: I should refill the ice.
19 D TANYA: We have ice.
20 A ¶ Ines freezes.
21 A Minh-Anh doesn't blink.
22 D MINH-ANH: So. The briefcase.
23 D MAN IN LEATHER COAT: What about it?
24 D MINH-ANH: Open it.
25 A ¶ He doesn't move.
26 A Duke sets down the microphone.
27 D DUKE: Casimir.
28 D CASIMIR (slowly): There it is.
29 D DUKE: Don't be dramatic.
30 D CASIMIR: You said my name like a bad word.
31 D DUKE: It is a bad word, Casimir.
32 A ¶ Tanya's cards stop.
33 A Minh-Anh's hand drifts to her purse.
34 D CASIMIR [CONT'D]: Ines, sweetheart, put on a song.
35 D INES: Sir?
36 D CASIMIR: Anything. Something loud.
37 A ¶ She taps the screen.
* 38 A A power ballad erupts, drums and strings.
39 A ¶ Casimir stands.
40 A Reaches into his coat.
41 A Duke lunges.
42 A Minh-Anh rolls over the table.
43 A Tanya slams the briefcase shut.
44 A In three seconds the booth is a knot of elbows, glass shattering, whiskey flying.
* 45 A ¶ The song soars on.
* 46 A ¶ A pistol clatters to the floor.
47 A Everybody stops.
48 A Everybody looks at it.
49 D INES (very small): That's not my ice.

### SCENE s00803 | EXT. TIDAL-LOCKED STATION - TERMINATOR RAIL - ETERNAL DUSK
Detected names (may be incomplete or contain aliases): YUSUF BARANOWSKI, FREYA ODUYA, MARCELINE VOSS, DAGMAR NYONI
* 1 A ¶ A single rail hangs between night and day.
* 2 A On one horizon the sun is a thin white edge.
* 3 A On the other, stars.
* 4 A The station crawls along the track, a lit tube no wider than a bus.
5 A ¶ Inside the observation cab, four figures strap into acceleration couches.
* 6 A Outside, nothing moves.
7 A ¶ YUSUF BARANOWSKI, 50s, grey-haired, runs a gloved finger along a dead console.
8 A He mutters a number and moves on.
9 A ¶ FREYA ODUYA, 30s, beside him, tightens a harness strap, loosens it again, tightens it.
10 A She stops when he looks.
11 A ¶ MARCELINE VOSS, 20s, near the porthole, presses her forehead to the glass.
* 12 A Her breath fogs it.
13 A ¶ DAGMAR NYONI, 40s, at the rear, checks the oxygen gauge for the fourth time.
* 14 A ¶ The station shudders.
* 15 A A thud rolls through the floor.
16 A They all grab for something.
17 A ¶ He reaches across and clamps her hand on the strap.
18 A She nods.
19 A They both stare at the porthole as the rail ahead begins to buckle.
20 A ¶ She curses.
21 A He swallows.
22 A They share a glance, nothing in it.
23 D YUSUF: Rail's flexing.
24 D FREYA: Expected.
25 D MARCELINE: It's never flexed that much.
26 D DAGMAR: It's within tolerance.
* 27 A ¶ The cab rocks.
28 A Marceline's knuckles whiten on the rim.
29 A Behind her, Dagmar unstraps, crosses, puts both hands on the girl's shoulders.
30 A Marceline doesn't look back.
* 31 A ¶ The rail steadies.
* 32 A The glow along the horizon holds.
33 A ¶ Yusuf lets his breath out.
34 A Freya gives a short, tight laugh.
35 A The four of them sit in the hum of the engines, watching the sun not rise.

### SCENE s00804 | INT. AVALANCHE RESCUE HUT - NIGHT
Detected names (may be incomplete or contain aliases): INGRID LJUNGBERG, ALEX, SOTOMAYOR, RANGER PALOMAKI
* 1 A ¶ One room.
* 2 A A woodstove ticking.
* 3 A Bunks bolted to the wall.
* 4 A Snow whispers on the shutters.
5 A ¶ INGRID LJUNGBERG, 30s, wool hat, sits cross-legged by the stove feeding it splinters.
6 A ALEJANDRO "ALEX" SOTOMAYOR, 20s, sleeping bag to his chin, sips tea and watches her.
* 7 A ¶ A radio on the shelf murmurs low static.
8 D ALEX: It's quiet.
9 D INGRID: Good quiet.
10 D ALEX: Is there another kind?
11 D INGRID: Yes.
* 12 A ¶ The stove pops.
13 A Alex smiles faintly.
14 A Ingrid tosses another splinter.
15 D INGRID [CONT'D]: Try to sleep.
16 D ALEX: I'm too warm.
17 D INGRID: That's the point of the hut.
18 A ¶ He closes his eyes.
19 A Opens one.
20 D ALEX: Do you ever get used to it?
21 D INGRID: To what?
22 D ALEX: The mountain. How it just... waits.
23 A ¶ Ingrid considers.
* 24 A The wind outside drops a moment.
25 D INGRID: No.
26 D ALEX: Me neither.
27 A ¶ He lets his head sink into the pillow.
* 28 A The radio crackles.
29 A Both of them look at it.
30 D RANGER PALOMAKI [V.O.]: Hut two, hut two, this is Ranger Palomaki. Do you copy?
31 A ¶ Ingrid crosses and picks it up.
32 D INGRID: Palomaki, Ljungberg. Go ahead.
33 D PALOMAKI [V.O.]: Ingrid. How many in the hut?
34 D INGRID: Two. Me and the rookie.
35 D PALOMAKI [V.O.]: Listen to me carefully. The slope above you let go twenty minutes ago.
36 A ¶ Ingrid does not move.
37 A Alex sits up.
38 D INGRID: Say again.
39 D PALOMAKI [V.O.]: The slide stopped thirty feet short of the hut. Don't open the door.
* 40 A ¶ A deep groan from above.
* 41 A Dust sifts from the rafters.
* 42 A The stove flame leans, then stands upright again.
43 A ¶ Alex's eyes find hers.
44 A She puts one finger to her lips.

### SCENE s00805 | INT. NIGHT FERRY - CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS BRANDVOLD, ZORAIDA KEMP
* 1 A ¶ Rows of parked cars lashed down with chains.
* 2 A Engine hum through the steel floor.
* 3 A Fog presses against the open bow, and somewhere out in the dark a horn answers the ship's horn.
4 A ¶ HOLLIS BRANDVOLD, 40s, rumpled raincoat, a badge on his belt, walks the aisle.
5 A He stops beside a white sedan with its windows fogged from inside.
6 A He taps the glass.
* 7 A ¶ The window lowers an inch.
8 A ZORAIDA KEMP, 30s, a scarf over her mouth, looks out with wide dark eyes.
9 D HOLLIS: Ma'am. This deck should be empty.
10 D ZORAIDA: I'm waiting for my husband.
11 D HOLLIS: He's in the car?
12 D ZORAIDA: He's on the upper deck.
13 D HOLLIS: Then why are you down here?
14 A ¶ She doesn't answer.
15 A Hollis steps back, hand drifting toward his coat.
16 A She opens the door and slides out, slowly, palms where he can see them.
* 17 A The scarf drops from her face.
18 D HOLLIS [CONT'D] (realizing): You're the Kemp woman. From the bank.
19 D ZORAIDA: Zoraida.
20 D HOLLIS: You were supposed to be in Rotterdam.
21 D ZORAIDA: I changed my mind.
22 D HOLLIS: That's not how it works.
23 D ZORAIDA: It's exactly how it works. That's why you're standing here.
24 A ¶ She nods at the trunk of the sedan.
25 A He follows her glance, then fixes on her again.
26 D HOLLIS: What's in the trunk?
27 D ZORAIDA: The reason you were sent.
28 D HOLLIS: Open it.
29 D ZORAIDA: Detective, with respect, it's not that kind of trunk.
30 A ¶ He draws the pistol from his coat and aims it at her chest.
31 A She doesn't flinch.
* 32 A Fog drifts between them.
* 33 A Behind him, a chain rattles in a swell, and he doesn't look.
34 D HOLLIS: Open it.
35 D ZORAIDA: You first.
36 D HOLLIS: Excuse me?
37 D ZORAIDA: You've been following me since Copenhagen. You've had a dozen chances. You're not here to arrest me.
38 D HOLLIS: I'm here because I was told to be.
39 D ZORAIDA: By whom?
40 D HOLLIS: That's not your business.
41 D ZORAIDA: It's exactly my business. It's the only business.
42 D HOLLIS: Zoraida.
43 D ZORAIDA: Say it, Hollis. Who sent you?
44 A ¶ His jaw works.
45 A The gun wavers a fraction.
46 D HOLLIS: Your husband.
47 D ZORAIDA (softly): There it is.
48 D HOLLIS: He said you'd run.
49 D ZORAIDA: He said wrong.
50 A ¶ She reaches into the sedan, pulls out a manila envelope, and tosses it at his feet.
* 51 A It lands with a slap.
52 A He stares at it.
53 D ZORAIDA [CONT'D]: That's every account he's moved in six years. Every name. Every number.
54 D HOLLIS: Why give it to me?
55 D ZORAIDA: Because you're the first one who didn't kill me when he had the chance.
56 A ¶ Hollis bends, slowly, without taking the gun off her.
57 A Picks up the envelope.
58 A Weighs it.
59 D HOLLIS: If I take this, I'm a dead man.
60 D ZORAIDA: If you don't, we both are.
* 61 A ¶ A long moment.
* 62 A Then, overhead, a steward's footsteps on the grating.
* 63 A A cart rolls.
* 64 A A voice hums.
65 A ¶ Hollis lowers the pistol.
66 A Tucks the envelope in his coat.
67 A Zoraida lets her breath out.
68 D HOLLIS: Get in the car.
69 D ZORAIDA: It's my car.
70 D HOLLIS: I'm driving.
* 71 A ¶ The ship's horn blasts.
* 72 A The deck shivers.
73 A Hollis opens the driver's door and climbs in.

### SCENE s00806 | INT. CASSETTE ARCHIVE - BASEMENT OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): EVANGELINE ROTHCHILD-ADU
* 1 A ¶ A low room of grey metal shelves holding thousands of labeled tapes.
* 2 A A bare bulb swings slightly, though no wind reaches down here.
* 3 A Dust and old magnetic oxide.
* 4 A A reel-to-reel and a cassette deck sit side by side on a cluttered desk beneath a corkboard of photographs strung together with red thread.
5 A ¶ EVANGELINE ROTHCHILD-ADU, 50s, weary detective in a green cardigan, sits at the desk.
6 A Her hair is pinned with a pencil.
7 A She holds a microphone close to her lips, as though it were a confidant.
8 A ¶ She presses record.
9 D EVANGELINE: Case file nine-one-four. The Hargreave matter. Evening, third of November.
10 A ¶ She lets go of the button.
11 A Picks up a photograph.
12 A Puts it down.
13 A Presses again.
14 D EVANGELINE [CONT'D]: They told me the library caught fire by accident. I have read eleven reports that say so. Not one of them mentions the smell of kerosene, which three witnesses described independently.
15 A ¶ She taps a thread on the corkboard.
16 D EVANGELINE [CONT'D]: The librarian, Mr. Quillfeather, vanished that night. His wife says he never returned. His employer says he resigned a week earlier. Both cannot be true.
17 A ¶ She rewinds the cassette.
18 A Plays it back.
19 D EVANGELINE [V.O.] (recorded, thin): ...three witnesses described independently...
20 A ¶ She stops it.
21 A Writes on a pad.
22 D EVANGELINE: I found his key in the ash. A small brass key. It opens a locker in the basement of this very building. I've checked every locker. There isn't one.
23 A ¶ She leans back.
24 A Rubs her eyes.
25 D EVANGELINE [CONT'D]: Unless the basement I've been searching is the wrong basement.
* 26 A ¶ From somewhere in the stacks, a tape clicks and begins to turn.
27 A ¶ She goes still.
28 A Slowly lowers the microphone.
* 29 A ¶ A voice fills the room from a distant shelf, on tape, calm and a little amused.
* 30 A It is her own.
31 D EVANGELINE [V.O.] (recorded, distant): If you're hearing this, Evangeline, you've finally found the right basement.
32 A ¶ She stands.
* 33 A The chair rolls back into a shelf, scattering tapes.
34 D EVANGELINE: That's my voice.
35 D EVANGELINE [V.O.] (recorded): Third shelf on your left. Behind the tapes labeled Nineteen Seventy-Two.
36 A ¶ Evangeline crosses.
* 37 A Her heels click.
38 A She pulls out box after box until a small brass-hinged door appears in the wall.
39 A She takes the key from her cardigan pocket.
40 A Her hand shakes.
41 A She turns it.
* 42 A ¶ The door opens.
* 43 A Inside, nothing but a single reel marked: PLAY LAST.

### SCENE s00807 | INT. AIR DUCT - ABOVE VAULT CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ANDREJ MOKOENA
* 1 A ¶ Cramped aluminum.
* 2 A A pencil flashlight in his teeth.
* 3 A Dust motes.
* 4 A The distant hum of a security camera swiveling below.
5 A ¶ ANDREJ MOKOENA, 30s, crawls on his elbows with a coil of rope on his back and a small recorder strapped to his sleeve.
6 A He stops at a vent grate.
7 A Looks down at a laser grid.
8 A ¶ He spits the flashlight into his hand.
9 A Whispers.
10 D ANDREJ: Okay. Okay. Rehearsal one.
11 A ¶ He taps the recorder.
12 A Plays it.
13 D ANDREJ [V.O.] (recorded, whisper): Step one. Rope on the vent bolt. Step two. Lower down, slow, between beam three and beam four. Step three. Don't sneeze.
14 A ¶ He winces.
15 D ANDREJ: I'm going to sneeze.
16 A ¶ He pinches his nose.
17 A Waits.
* 18 A It passes.
19 A He taps the recorder again.
20 D ANDREJ [V.O.] (recorded): Step four. The safe's a Hargrove. Combination is the date of the Armistice, flipped. Eleven eleven, nineteen eighteen, so one-one, one-one, one-eight, one-nine.
21 D ANDREJ: That's seven numbers. Hargrove's six.
22 A ¶ He frowns.
23 A Rewinds.
24 D ANDREJ [V.O.] (recorded): ...one-one, one-one, one-eight, one-nine...
25 D ANDREJ: Drop the last nine. One-one, one-one, one-eight.
26 A ¶ He whispers it three times, like a spell, then taps the recorder to start a new take.
27 D ANDREJ [CONT'D]: Rehearsal two. If I die in this duct, tell my mother I was a pastry chef.
* 28 A ¶ A click below.
* 29 A A faint red light sweeps across the vent.
30 A He freezes.
* 31 A The light passes.
32 D ANDREJ [CONT'D] (barely audible): Step one.
33 A ¶ He slides the first bolt loose.

### SCENE s00808 | INT. SPEEDWAY GO-KART TRACK - PIT LANE - AFTERNOON
Detected names (may be incomplete or contain aliases): MILO GALLAGHER-SINGH, DOMINIC TREJO, PINKY, DESAI
* 1 A ¶ Tires stacked like donuts.
* 2 A The smell of two-stroke.
* 3 A A hand-lettered sign: "NO RUNNING.
* 4 A NO CRYING.
* 5 A NO REFUNDS."
6 A ¶ MILO GALLAGHER-SINGH, 15, cracked helmet, oil on his cheek, kneels by a small yellow kart.
7 A DOMINIC TREJO, 15, in a stained racing suit two sizes big, leans on the fence and chews a straw.
8 A PRIYANKA "PINKY" DESAI, 14, clipboard, stopwatch around her neck, stands between them.
9 D PINKY: Four minutes to the heat.
10 D MILO: It's the carburetor.
11 D DOMINIC: It's the driver.
12 D MILO: It is not the driver.
13 D PINKY: Dom, he's got a point.
14 D DOMINIC: He always has a point, Pinky. That's his whole problem.
15 D MILO: I can fix it.
16 D DOMINIC: You said that at Nationals.
17 D MILO: That was the tire!
18 D PINKY: It was the tire.
19 D DOMINIC: Whose tire?
20 D MILO: Yours!
21 D PINKY: Three minutes.
22 A ¶ Milo slams the wrench down.
23 A Dominic pushes off the fence.
24 A They square up, nose to nose, helmet to helmet.
25 D DOMINIC: Say it again.
26 D MILO: Say what?
27 D DOMINIC: That it's me.
28 D MILO: It's the carburetor.
29 D PINKY: Boys. Boys.
30 D DOMINIC: Pinky, stay out of it.
31 D PINKY: I'm the pit boss.
32 D MILO: She's the pit boss.
33 D DOMINIC: She's fourteen!
34 D PINKY: I'm fourteen and a half, and I'm timing you.
* 35 A ¶ A horn blares from the track.
36 A Everyone flinches.
37 A Milo grabs the wrench.
38 A Dominic grabs the steering wheel.
39 A They both pull the kart in opposite directions.
40 D PINKY [CONT'D]: That's it. I'm calling my brother.
41 A ¶ She raises the stopwatch.
42 A Presses it.
* 43 A The chaos holds.
* 44 A The engine coughs, sputters, and catches.
45 D MILO: Oh.
46 D DOMINIC: Oh.
47 A ¶ They stare at the roaring kart.
48 A Dominic slides in.
49 A Milo hands him a glove.
50 D DOMINIC [CONT'D] (not looking up): Thanks.
51 D MILO: Don't mention it.
52 D PINKY: Go!

### SCENE s00809 | INT. NIGHT BUS 47 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): ELDON MCPHAIL, SORAYA KHALILI, BENNETT OLUMIDE
* 1 A ¶ Near-empty.
* 2 A Overhead lights hum.
* 3 A Rain drags sideways across the windows.
* 4 A Wipers tick.
5 A ¶ ELDON MCPHAIL, 50s, driver, hat low, one hand on the wheel and the other around a cold thermos.
* 6 A In the mirror: two passengers.
7 A ¶ SORAYA KHALILI, 30s, backpack on her lap, sits halfway back, glued to her phone.
8 A Behind her, BENNETT OLUMIDE, 40s, in a damp raincoat, stares out at the passing dark.
9 A ¶ Eldon clears his throat.
10 D ELDON (to the bus): Next stop, Harbor and Fifth. Mind the gap.
* 11 A ¶ Nobody reacts.
12 D ELDON [CONT'D] (to himself): Nobody ever minds the gap.
13 A ¶ Soraya looks up.
14 D SORAYA: Is this the 47?
15 D ELDON: It's the 47.
16 D SORAYA: It's not going to Eastgate?
17 D ELDON: Not tonight.
18 D SORAYA: Since when?
19 D ELDON: Since the flood.
20 A ¶ Soraya sighs.
21 A Pockets her phone.
22 A Bennett turns his head, slowly.
23 D BENNETT: You're the third bus tonight.
24 D ELDON: Third what?
25 D BENNETT: Third driver who didn't say where we're going.
26 D ELDON: I said Harbor and Fifth.
27 D BENNETT: And after that?
28 D ELDON: After that, nothing. Last stop.
29 A ¶ Bennett nods, slowly, as though it explains something he's been wondering about.
30 D SORAYA (to Eldon): Can you let me off before Harbor?
31 D ELDON: Not an official stop.
32 D SORAYA: I'll pay extra.
33 D ELDON: It's not about the fare, miss.
34 D SORAYA: Then what is it about?
35 D ELDON: Rules.
36 D SORAYA (muttering): Great.
* 37 A ¶ The bus slows.
* 38 A Brakes sigh.
* 39 A The doors fold open to rain.
40 D ELDON: Harbor and Fifth.
41 A ¶ Soraya stands.
42 A Bennett doesn't.
43 D SORAYA: Are you coming?
44 D BENNETT: No.
45 D SORAYA: This is your stop.
46 D BENNETT: It's his stop.
47 A ¶ He nods at Eldon.
48 D ELDON (to the empty bus): Everybody out, please.
49 A ¶ Soraya freezes.
50 A Looks at Bennett.
51 A At Eldon.
52 A At the empty seats behind them.
53 D SORAYA (whisper): Who is he talking to?
54 D BENNETT: The ones who stayed.
55 A ¶ Eldon closes the doors.
* 56 A The wipers resume.
* 57 A The bus pulls out, carrying all three of them into the dark.

### SCENE s00810 | INT. DRAGON DENTIST'S CAVERN - DAY
Detected names (may be incomplete or contain aliases): HOLLYHOCK THISTLEWICK, DRAGON, PIP, GRUB, SIR ALARIC FENWICK-DALE, VESKARATH
* 1 A ¶ A great cavern hung with brass lamps.
* 2 A A chair carved from a single glacial boulder.
* 3 A Around it, racks of tongs and chisels the size of oars.
* 4 A A bubbling cauldron of mouthwash.
5 A ¶ DR. HOLLYHOCK THISTLEWICK, 200 and spry, tiny, a mirror-headed lamp strapped to her brow, stands on a ladder, peering into a mouth the size of a barn door.
6 A A DRAGON lies in the chair, jaws wide, one golden eye rolling.
7 A ¶ PIP, a pixie nurse no bigger than a thimble, buzzes at the dentist's ear with a tray of silver picks.
8 A GRUB, a goblin receptionist, leans in the doorway chewing a pencil.
9 A SIR ALARIC FENWICK-DALE, a very old knight, sits in the waiting alcove with his helmet in his lap.
10 D HOLLYHOCK: Wider, please.
11 D DRAGON (muffled): Wider than this?
12 D HOLLYHOCK: I'm afraid so.
13 D DRAGON (muffled): You said that last time.
14 D HOLLYHOCK: And the time before. Wider.
15 A ¶ He strains.
* 16 A The cavern shudders.
* 17 A A stalactite falls and bounces off Sir Alaric's helmet.
18 D SIR ALARIC: Ow.
19 D GRUB: Sorry, Sir Alaric. Occupational hazard.
20 D HOLLYHOCK: Pip, the number seven pick.
21 D PIP: Coming, Doctor.
22 A ¶ Hollyhock probes.
23 A The dragon's tail thumps once.
* 24 A Dust rains from the ceiling.
25 D HOLLYHOCK [CONT'D]: Your gum is inflamed, Veskarath.
26 D VESKARATH (muffled): It's been like that for three centuries.
27 D HOLLYHOCK: It's gingivitis.
28 D VESKARATH: It's a lifestyle.
29 D HOLLYHOCK: You've eaten a lot of knights.
30 D VESKARATH (muffled, a little ashamed): Only the crunchy ones.
31 A ¶ Sir Alaric clears his throat.
32 A Rises from the alcove, helmet under one arm.
33 D SIR ALARIC: I was told this would be a quick consultation.
34 D HOLLYHOCK: It always is, Sir Alaric.
35 D SIR ALARIC: It's been four hours.
36 D GRUB: Time moves differently in a cave.
37 D VESKARATH (muffled): Is that supposed to be a joke?
38 D GRUB: It's a policy.
39 A ¶ Hollyhock sighs.
40 A Climbs down the ladder, pats the dragon's lip, and picks up a small mirror.
41 D HOLLYHOCK: Rinse and spit. Then floss.
42 D VESKARATH: Floss what?
43 D HOLLYHOCK (to Sir Alaric, deadpan): You'll do.

### SCENE s00811 | INT. DRIVE-THRU WEDDING CHAPEL - BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): VOWS, FLOWERS, PATSY LEUNG-ARCHER, WENDELL ASHFORD-LOPEZ
* 1 A ¶ A glass booth the size of a phone box.
* 2 A Plastic flowers.
* 3 A A speaker, a menu board with "VOWS - $29" and "FLOWERS - $9," and a tiny neon cross.
4 A ¶ PATSY LEUNG-ARCHER, 20s, sequined vest and veil, sits on a stool.
5 A She wipes down the counter in slow circles.
* 6 A The only sound is the neon's buzz.
* 7 A ¶ Headlights sweep across her face.
* 8 A A car idles outside.
* 9 A A window rolls down.
10 A She slides the glass open and leans out.
11 D PATSY: Welcome to Holy Smokes Chapel. Would you like to marry someone tonight?
* 12 A ¶ Nobody answers.
* 13 A Just the engine.
14 D PATSY [CONT'D]: Sir? Ma'am?
15 A ¶ A hand appears.
* 16 A In it, a gun.
17 A ¶ Patsy freezes.
18 A Her lips move without sound.
19 A ¶ WENDELL ASHFORD-LOPEZ, 40s, pulls his head out of the car and steps up to the booth.
20 A Leather jacket, bloodshot eyes.
* 21 A The gun stays on her.
22 D WENDELL: Open the register.
23 D PATSY: We don't have a register. We have a tip jar.
24 D WENDELL: Then open the tip jar.
25 D PATSY: It's a mason jar.
26 D WENDELL: Open it!
27 A ¶ She does, hands shaking.
* 28 A A few crumpled bills.
* 29 A A rubber band.
* 30 A A condolence card.
31 D WENDELL [CONT'D]: That's all?
32 D PATSY: People mostly pay with cards.
33 A ¶ He stares into the jar.
* 34 A The gun lowers.
35 A He laughs, ragged.
36 D WENDELL: I've been planning this for a month.
37 D PATSY: I can marry you. Twenty-nine dollars.
38 D WENDELL: To who?
39 D PATSY: Anyone you like. I'm very flexible.
40 A ¶ He pockets the gun.
41 A Takes out a crumpled twenty and a ten.
42 A Pushes them through.
43 D WENDELL: Keep the dollar.
44 D PATSY: Congratulations.
45 A ¶ She adjusts her veil and begins the vows.

### SCENE s00812 | INT. VICTORIAN BATHHOUSE - STEAM ROOM - AFTERNOON, 1887
Detected names (may be incomplete or contain aliases): LADY PHILIPPA ACKROYD-VANE, MARGUERITE TOBIN, EZEKIEL FARNSWORTH, OLIVE PETTIGREW, ARTHUR BELLWETHER
* 1 A ¶ Marble benches slick with condensation.
* 2 A Pipes knock somewhere in the walls.
* 3 A Gas lamps burn in fogged globes.
4 A ¶ LADY PHILIPPA ACKROYD-VANE, 50s, wrapped in white linen, reclines on a bench with her eyes shut.
5 A At her side sits her maid, MARGUERITE TOBIN, 20s, folding towels in her lap.
6 A Across the room DR. EZEKIEL FARNSWORTH, 60s, in a towel and a monocle, mops his brow with a handkerchief, and beside him MRS. OLIVE PETTIGREW, 40s, the bathhouse matron, polishes a brass tap.
7 A In the doorway stands ARTHUR BELLWETHER, 30s, a young reporter in a damp suit, notebook already out.
8 A ¶ She opens one eye.
9 A He steps forward.
10 A She raises a hand and he stops.
11 D PHILIPPA: Mr. Bellwether. You may not write in here.
12 D ARTHUR: Lady Ackroyd-Vane, the public wishes to know.
13 D PHILIPPA: The public wishes to know a great many things.
14 D ARTHUR: Is it true you sold the estate?
15 D PHILIPPA: That is a rumor.
16 D ARTHUR: Is it a true rumor?
17 D PHILIPPA: Dr. Farnsworth, how many rumors are true?
18 D FARNSWORTH: Statistically, madam, one in nine.
19 D PHILIPPA: There. One in nine.
20 D ARTHUR: That is not an answer.
21 D PHILIPPA: It is a tolerable approximation.
* 22 A ¶ The pipes knock.
23 A Marguerite folds another towel.
24 A Olive polishes the tap, hard.
25 D OLIVE: Beg pardon, Lady Philippa, but the gentleman's dripping on my marble.
26 D ARTHUR: I'm terribly sorry, madam.
27 D OLIVE: Then take your notebook outside.
28 D ARTHUR: Only if Lady Philippa grants an interview.
29 D PHILIPPA: Marguerite, what do you think?
30 D MARGUERITE: I think the steam is good for the lungs, my lady.
31 D PHILIPPA: A sensible girl.
32 D FARNSWORTH: She's not wrong. Though I'd add that excessive steam is dangerous to ink.
33 D ARTHUR: I shall be careful.
34 D OLIVE: You'll be dry, or you'll be gone.
35 D ARTHUR: Very well.
36 A ¶ He tucks the notebook inside his jacket.
37 A Philippa studies him through the steam for a long moment.
38 D PHILIPPA: The estate is sold. The buyer is a railway man.
39 D ARTHUR: May I print that?
40 D PHILIPPA: You may print that I am in excellent health.
41 A ¶ He bows.
42 A Olive points at the door.
43 A He goes.
* 44 A The steam closes in again.
45 A Marguerite, quietly, begins to hum.

### SCENE s00813 | INT. FAMILY LIVING ROOM - UPRIGHT PIANO - EVENING
Detected names (may be incomplete or contain aliases): ARNOLD TEMPLETON-WU, JOSEFINA
* 1 A ¶ A dim room.
* 2 A A lamp with a yellowed shade.
* 3 A A walnut upright against the wall, its front panel off, hammers exposed like a ribcage.
4 A ¶ ARNOLD TEMPLETON-WU, 60s, piano tuner, kneels beside it with a tuning lever.
5 A His daughter JOSEFINA, 30s, leans in the doorway, coat still on.
6 A ¶ She doesn't come in.
7 A ¶ He strikes a key.
8 A Listens.
9 A Adjusts a pin.
10 A Strikes again.
11 D JOSEFINA: You didn't call.
12 D ARNOLD: I wrote.
13 D JOSEFINA: A postcard isn't a call.
14 D ARNOLD: It's quicker.
15 D JOSEFINA: It took six weeks.
16 A ¶ He strikes a key.
17 A Doesn't answer.
18 D JOSEFINA [CONT'D]: Mom's piano.
19 D ARNOLD: She'd want it tuned.
20 D JOSEFINA: She'd want a lot of things.
21 A ¶ He pauses.
22 A Rests the lever on the strings.
23 D ARNOLD: Do you want to sit?
24 D JOSEFINA: I'm fine.
25 D ARNOLD: There's tea.
26 D JOSEFINA: I'm fine.
27 A ¶ He nods.
28 A Resumes.
* 29 A A key.
* 30 A A pin.
* 31 A A key.
32 A ¶ She finally crosses the room.
33 A Drops her bag.
34 A Perches on the arm of the sofa.
35 D JOSEFINA [CONT'D]: How long have you been working on it?
36 D ARNOLD: Three days.
37 D JOSEFINA: That's a lot for a tuning.
38 D ARNOLD: It's an old instrument.
39 D JOSEFINA: Dad.
40 D ARNOLD: Hm.
41 D JOSEFINA: You don't have to be here alone.
42 D ARNOLD: I'm not alone. I've got the piano.
43 D JOSEFINA: That's the saddest thing you've said all year.
44 A ¶ He strikes a key.
* 45 A A beat.
* 46 A Another.
47 D ARNOLD: This one's flat.
48 D JOSEFINA: They all are.
49 D ARNOLD: No. Just this one. Listen.
50 A ¶ He plays an A. Then the A above it.
* 51 A They clash faintly.
52 A Josefina tilts her head.
53 D JOSEFINA: I can hear it.
54 D ARNOLD: That's your mother's ear.
55 D JOSEFINA: She told me once she could hear when a room was out of tune.
56 D ARNOLD: She could.
57 D JOSEFINA: What did the room sound like when she left?
58 A ¶ He stops.
59 A His hand hangs above the keys.
60 D ARNOLD: Like this.
61 A ¶ He plays the flat A. It hangs between them, wavering.
62 D JOSEFINA: Can you fix it?
63 D ARNOLD: I've tried.
64 D JOSEFINA: Let me.
65 D ARNOLD: You've never tuned.
66 D JOSEFINA: I've listened my whole life.
67 A ¶ He studies her.
68 A Hands her the lever.
69 A She kneels beside him.
70 A Presses the key.
71 A Turns the pin a hair, then another, her head cocked, her eyes closed.
* 72 A ¶ The A rises.
* 73 A Settles.
* 74 A Becomes true.
75 A ¶ She opens her eyes.
76 A He is watching her, not the piano.
77 D ARNOLD [CONT'D]: That's it.
78 D JOSEFINA: That's it?
79 D ARNOLD: That's the note.
80 A ¶ She plays it again.
* 81 A A clean, level tone.
* 82 A The room seems to lean toward it.
83 D JOSEFINA (quiet): I should have come sooner.
84 D ARNOLD: You came.
85 A ¶ She sets down the lever.
86 A He puts a hand on the piano's side, the way you might touch a shoulder.
87 D ARNOLD [CONT'D]: Want tea now?
88 D JOSEFINA: Yes.
89 A ¶ He rises, knees cracking.
90 A Goes to the kitchen.
91 A She stays at the piano and plays, one finger at a time, the first line of a lullaby.

### SCENE s00814 | INT. MURANO GLASSWORKS - FURNACE HALL - NIGHT
Detected names (may be incomplete or contain aliases): SERAFINA BOLDRINI, CHIARA MENEGHEL
* 1 A ¶ The great furnace has burned for four hundred years and has never once gone out.
* 2 A It breathes orange light across a hall of crooked chandeliers, rows of unsold goblets, and a locked case of Doge's glass behind a velvet rope.
* 3 A The air is a held breath.
4 A ¶ SERAFINA BOLDRINI, 50s, apron, silver braid, tends the furnace with a long iron pipe and the patience of someone who has done so for decades.
5 A She hums an old lullaby.
6 A ¶ Across the hall, CHIARA MENEGHEL, 30s, in a borrowed apprentice smock and a coat of nerve, drifts between the chandeliers.
7 A Her gloved hand pauses on a showcase latch.
8 A Her other hand holds a velvet bag.
9 D SERAFINA: Chiara, you're late.
10 D CHIARA: The vaporetto, signora.
11 D SERAFINA: Always the vaporetto.
12 A ¶ Chiara lets the latch go.
13 A Crosses to the furnace, ears red with the heat.
14 A She lifts a pipe, gathers a gob of molten glass, and for a moment they work side by side, the older woman correcting the younger's angle with a touch.
15 D SERAFINA [CONT'D]: Slower. Glass has no patience for those in a hurry.
16 D CHIARA: I'll remember.
17 D SERAFINA: You won't. But it's kind of you to say.
* 18 A ¶ The glass glows like a small sun.
19 A Chiara turns it, gently, and the lullaby seems to hum itself in her throat.
20 A She is, for the first time, perfectly calm.
21 A ¶ She lifts her eyes to the case.
22 A Back to the glass.
23 A Then, softly:
24 D CHIARA: It's very beautiful, what you do.
25 D SERAFINA: It is.
26 A ¶ Serafina smiles.
27 A She sets down her pipe.
28 A Reaches into her apron pocket and draws out a long, cold key.
29 A Holds it in her palm.
30 D SERAFINA [CONT'D]: My daughter used to say the same. The last night she worked here, she asked me to open the case.
31 A ¶ She steps toward the Doge's glass.
32 A Chiara goes rigid.
33 D SERAFINA [CONT'D]: She was a very good thief. Very patient. Not patient enough.
34 A ¶ She slips the key in the lock.
* 35 A The case swings open on empty velvet.
36 D SERAFINA [CONT'D]: Your mother never did learn to wait.
37 A ¶ Chiara drops the velvet bag.
* 38 A Behind her, the furnace roars.

### SCENE s00815 | INT. SALT MINE TUNNEL - FORWARD LISTENING POST - NIGHT, 1916
Detected names (may be incomplete or contain aliases): HIRAM STALLWORTH, OTTILIE BRANDT, EMEKA OGBONNA, SOOT, BEAUMONT
* 1 A ¶ White walls glitter under oil lamps.
* 2 A The passage narrows to a crawl at one end, where a pickaxe lies abandoned.
* 3 A Everything tastes of brine and iron.
* 4 A A telephone hangs on a nail, its wire running up into the dark.
5 A ¶ SGT. HIRAM STALLWORTH, 40s, stands against the wall, thumb moving over a rosary he doesn't believe in.
6 A CPL.
7 A OTTILIE BRANDT, 30s, medic, kneels over a canvas bag, counting bandages.
8 A PVT.
9 A EMEKA OGBONNA, 19, crouches at the narrowing, head cocked, listening.
10 A PVT.
11 A SAMUEL "SOOT" BEAUMONT, 22, sits on an ammunition crate sharpening a bayonet.
* 12 A ¶ Silence.
* 13 A A drip from the roof.
* 14 A Then, from far above, a faint rhythm of thumps.
15 D EMEKA: They're digging again.
16 D HIRAM: How close?
17 D EMEKA: Same as an hour ago.
18 D SOOT: That's not close or far. That's just there.
19 D OTTILIE: Soot, hold still. Your hands are shaking.
20 D SOOT: They are not.
21 D OTTILIE: Then it's the crate.
22 D HIRAM: Brandt, enough.
23 D OTTILIE: Sergeant.
* 24 A ¶ The thumps stop.
25 A All four look up.
* 26 A A dry rain of salt falls from the ceiling and tings on the helmet at Emeka's feet.
27 D EMEKA (whisper): Did you hear that?
28 D SOOT: Hear what?
29 D EMEKA: Nothing. That's what I'm saying.
30 D HIRAM: Stand to.
31 A ¶ They move.
32 A Ottilie closes her bag.
33 A Soot slides the bayonet home.
34 A Emeka backs from the narrowing, rifle level.
35 A Hiram unhooks the telephone and puts it to his ear.
* 36 A Nothing.
37 A He taps the cradle.
* 38 A Nothing.
39 D HIRAM [CONT'D]: Line's dead.
40 D SOOT: Course it is.
41 D OTTILIE: Don't.
42 D SOOT: I'm only saying.
43 D OTTILIE: Don't.
* 44 A ¶ A single drop of water hits the floor.
* 45 A Another.
46 A They all watch it.
* 47 A The echo seems to travel for a long time.
48 D EMEKA: I used to hear my mother singing in the pit at home.
49 D HIRAM: Did you?
50 D EMEKA: Same note. Over and over.
51 D OTTILIE: What was the note?
52 D EMEKA: I don't know. I never had a name for it.
53 A ¶ Soot laughs, not unkindly.
54 A Hiram almost smiles.
* 55 A The thumps resume overhead, three, then four, then a pause.
56 D HIRAM: We hold.
57 D SOOT: Till when?
58 D HIRAM: Till we're told.
59 D OTTILIE: Told by who?
60 D HIRAM (quietly): That's not for us to ask.
61 A ¶ He hangs up the phone.
62 A Folds his arms.
63 A The four of them settle in the white tunnel, listening to the mountain breathe.

### SCENE s00816 | INT. CHURCH BELFRY - SNIPER NEST - DAWN
Detected names (may be incomplete or contain aliases): VASILY PETRENKO, TANISHA GREER, LEO FONTAINE, HANNELORE WEISS, OBINNA ADEKUNLE-REID, JUNE KOWALCZYK
* 1 A ¶ Stone arches.
* 2 A A cracked bell hangs silent.
* 3 A Through the slit, a ruined square below.
4 A ¶ LT. VASILY PETRENKO whispers into a field phone.
5 A SPC.
6 A TANISHA GREER braces a rifle on a sandbag.
7 A PVT.
8 A LEO FONTAINE feeds a belt into a machine gun.
9 A CPL.
10 A HANNELORE WEISS hauls up an ammo crate.
11 A SGT. OBINNA ADEKUNLE-REID wedges the door with a pew.
12 A PVT.
13 A JUNE KOWALCZYK clutches a radio.
* 14 A ¶ A shell whistles overhead.
* 15 A The tower shakes.
16 D TANISHA: Contact left!
17 D LEO: Where?
18 D TANISHA: Left! Your other left!
19 D VASILY: Sergeant, the door!
20 D OBINNA: I'm holding it!
21 D HANNELORE (dropping the crate): They're in the nave!
22 D JUNE: Lieutenant, radio says pull back!
23 D VASILY: To where?
24 D JUNE: It doesn't say!
* 25 A ¶ A boot hits the door.
* 26 A Wood splinters.
27 A Obinna braces both shoulders against it.
28 D OBINNA: Anyone?
29 D LEO: Firing!
* 30 A ¶ The machine gun roars.
* 31 A Dust and cordite fill the belfry.
32 A Tanisha squeezes the trigger once, twice.
* 33 A A body falls in the square.
34 D TANISHA: Down!
* 35 A ¶ Silence.
* 36 A Then bells.
* 37 A The cracked bell, ringing on its own in the blast's echo.
38 A ¶ They all stop.
39 A Look up.
40 D HANNELORE (softly): It still rings.

### SCENE s00817 | INT. CRUISE SHIP "SERENISSIMA" - CASINO CASHIER CAGE - NIGHT
Detected names (may be incomplete or contain aliases): HENRY GAUTHIER, WOMAN IN FEATHERED MASK, FEATHERED MASK, FINNEGAN MBATHA, ZINNIA
* 1 A ¶ A brass cage with a tiny window, stacks of chips behind it, a rotating security camera.
* 2 A Beyond, the casino floor chimes and flashes.
3 A ¶ HENRY GAUTHIER, 50s, cashier in a burgundy vest, counts chips with a practiced thumb.
4 A Behind the glass, a WOMAN IN A FEATHERED MASK, 30s, waits in a silver gown, an ornate clutch pressed to her ribs.
5 A She taps the counter twice.
6 D WOMAN IN FEATHERED MASK: Cash me out, please.
7 D HENRY: Of course, madam. How much?
8 A ¶ She slides a rack of plaques through the window.
9 A He counts.
10 A His eyebrows go up.
11 D HENRY [CONT'D]: That is... a great deal, madam.
12 D WOMAN IN FEATHERED MASK: It was a lucky night.
13 D HENRY: Very lucky. Name for the receipt?
14 A ¶ She hesitates.
15 A Her clutch shifts.
* 16 A A muffled cough comes from the hallway behind her.
17 A A man in a waiter's jacket is leaning there, FINNEGAN MBATHA, 30s, one hand inside his tray cloth.
18 D ZINNIA: Zinnia Delacroix-Obi.
19 D HENRY (writing): Delacroix. Spelled the usual way?
20 D ZINNIA: The only way.
21 A ¶ He slides a form through.
22 A She signs.
23 A Behind her, Finnegan nudges a service cart, rolling it quietly against the cage door, while Henry stacks bills into an envelope and licks the flap.
24 A She slips her mask up an inch, scanning the camera in the ceiling, and he steps from the doorway with the tray, the cloth peeling back from a small black pistol.
25 D FINNEGAN: Mr. Gauthier. Don't.
26 A ¶ Henry freezes mid-lick.
* 27 A The envelope droops.
28 D HENRY: I see.
29 D ZINNIA: He's very polite, isn't he?
30 D FINNEGAN: I try.
31 D HENRY: Madam, I have a family.
32 D ZINNIA: So did the last man.
33 A ¶ Henry's hands go up.
34 A Finnegan steps in, kicks the cart wide.
35 A Zinnia reaches through the window and takes the envelope, then the plaques, then a second tray of cash from under the counter.
* 36 A The camera swivels toward them.
37 D FINNEGAN: Camera.
38 A ¶ Zinnia tosses her clutch.
* 39 A It strikes the lens and a puff of grey fills the lens.
* 40 A The red light dies.
41 D ZINNIA: Two minutes.
42 D FINNEGAN: Quiet, now.
43 A ¶ They slip out.
44 A Henry sits, slowly, on his stool.
45 A Pulls a handkerchief from his vest.
46 A Dabs his brow.
47 A Then, from beneath the register, he lifts a very small silver bell and rings it twice.

### SCENE s00818 | INT. FOREVER FRIENDS PET MEMORIAL PARLOR - VIEWING ROOM - DAY
Detected names (may be incomplete or contain aliases): GWENDOLYN POPPLEWELL, RAYMOND TSOSIE-KANE
* 1 A ¶ Soft lilac walls.
* 2 A A small satin-lined coffin on a stand.
* 3 A Lilies.
* 4 A A framed photo of a hamster named Pickle.
5 A ¶ GWENDOLYN POPPLEWELL, 40s, black veil and a pinched face, dabs a handkerchief at dry eyes.
6 A RAYMOND TSOSIE-KANE, 30s, in a tie too tight for him, adjusts a floral arrangement without being asked.
7 D RAYMOND (to the empty chairs): Friends. Family. We gather today to honor Pickle.
8 D GWENDOLYN (whispering): Raymond. Nobody's here.
9 D RAYMOND (to her): Practice, Mrs. Popplewell.
10 D GWENDOLYN: I'm Gwendolyn.
11 D RAYMOND: Gwendolyn. Forgive me.
12 A ¶ She sniffs.
* 13 A The room is calm.
* 14 A A bell chimes from the hall.
15 D GWENDOLYN: He was a good hamster.
16 D RAYMOND: The very best.
17 D GWENDOLYN: Did you know him?
18 D RAYMOND: Only from the photograph.
19 D GWENDOLYN (to herself): Seven hundred dollars for a hamster.
20 D RAYMOND: Mm?
21 D GWENDOLYN: Nothing.
22 A ¶ Raymond lifts the coffin lid to adjust the satin.
23 A He stops.
24 A Peers in.
25 A Gently lowers the lid and clears his throat.
26 D RAYMOND: Mrs. Popplewell. Gwendolyn. How much did you say Pickle weighed?
27 D GWENDOLYN: Two ounces.
28 D RAYMOND: Right.
29 D GWENDOLYN: Why?
30 A ¶ Raymond turns the little coffin around.
31 A Opens it again.
* 32 A Inside, on the satin, lies a perfectly preserved dinner roll.
33 D RAYMOND (to the room): Folks, I think we have a clerical error.
34 A ¶ Gwendolyn lowers her handkerchief.
35 A Stares at the roll.
36 D GWENDOLYN: Oh, thank God.
37 D RAYMOND: Pardon?
38 D GWENDOLYN (brightly): Pickle's in the car.

### SCENE s00819 | INT. BARBERSHOP - GHOST TOWN OF DRY CREEK - NOON
Detected names (may be incomplete or contain aliases): HAIRCUT, NATHANIEL CROWFOOT, STRANGER, TOMMY LIGHTFOOT, JEDEDIAH, SHERIFF AMOS WHITCOMBE
* 1 A ¶ Dust on every surface.
* 2 A One chair, one mirror.
* 3 A A hand-painted sign in the window reads "SHAVE AND A HAIRCUT, TWO BITS."
4 A ¶ NATHANIEL CROWFOOT, 50s, barber, apron over his vest, strops a razor on a leather belt.
5 A A STRANGER, 40s, black hat tipped low, sits in the chair under a white sheet.
6 A A young boy, TOMMY LIGHTFOOT, 12, sweeps the floor with a broom taller than he is.
7 D NATHANIEL: Close shave?
8 D STRANGER: Close.
9 D NATHANIEL: You passing through?
10 D STRANGER: Looking for a man.
11 A ¶ Nathaniel lathers his brush.
12 A The boy stops sweeping.
13 D NATHANIEL: Name?
14 D STRANGER: Jedediah Kane.
15 A ¶ The brush stops mid-air.
16 A Tommy looks at Nathaniel.
17 A Nathaniel looks at the mirror, at the stranger's eyes.
18 D NATHANIEL: Never heard of him.
19 D JEDEDIAH: That's funny. Folks say he gets his hair cut here.
20 D NATHANIEL: Folks say a lot of things.
* 21 A ¶ The bell on the door jingles.
22 A SHERIFF AMOS WHITCOMBE, 60s, steps in, hand on his holster.
23 D SHERIFF: Nathaniel. Boy. Everyone breathing?
24 D NATHANIEL: Barely.
25 D SHERIFF (to Jedediah): That's an interesting hat.
26 D JEDEDIAH: It keeps the sun off.
27 D SHERIFF: There's no sun in here.
28 D JEDEDIAH: It keeps my thoughts in.
29 A ¶ The sheriff draws.
30 A Jedediah flings the sheet and rises from the chair, razor in his hand.
31 A Nathaniel catches his wrist.
32 A They tangle.
* 33 A The gun fires into the ceiling.
* 34 A Plaster rains.
35 A ¶ Tommy dives behind the broom.
36 A Nathaniel wrenches the razor free and presses it to Jedediah's throat.
37 A The sheriff levels his pistol at both.
38 D SHERIFF [CONT'D]: Nathaniel, let him go.
39 D NATHANIEL: Which one?
40 D SHERIFF: Either.
* 41 A ¶ Beat.
42 A Nathaniel lowers the razor.
43 A Wipes it on his apron.
44 D NATHANIEL: Shave's on the house.

### SCENE s00820 | INT. SALT MINE CURLING HALL, 400 FEET DOWN - NIGHT
Detected names (may be incomplete or contain aliases): INGRID HALVORSEN, TEODOR BRANICKI, BASH, QADIR, DESTINY OKAFOR-REYES
* 1 A ¶ Lamps hang from the cavern ceiling like drowned moons, and the ice beneath them has a faint pink cast from the mineral in the walls.
2 A INGRID HALVORSEN, forties, shoulders wide as a door, crouches at the hog line with her broom across her knees, utterly still.
3 A ¶ At the far house, TEODOR BRANICKI, thin and gray at the temples, wipes the same patch of ice for the third time with his sleeve.
4 A ¶ BASH (BASHIR) QADIR, twenty-two, the youngest of the rink, hugs a thermos he has not opened.
5 A His knee jumps against the bench.
6 D TEODOR: Last stone. Weight's yours.
7 A ¶ Ingrid does not answer.
8 A She picks a hair from the pebble of the stone and flicks it away.
9 D BASH: It's only a league game.
10 D INGRID: Then it won't hurt to do it right.
11 A ¶ She slides out of the hack.
12 A The stone leaves her hand in a long, low whisper, and Bash is on his feet before he knows it, broom already sweeping, then not sweeping, then sweeping again.
* 13 A ¶ The elevator cage groans somewhere above.
* 14 A Boots on the iron stairs.
15 A ¶ DESTINY OKAFOR-REYES, sixty, in a parka the color of traffic cones, steps onto the ice apron with a clipboard pressed to her chest.
16 A She looks at the stone, then at Ingrid, then at the blank scoreboard.
17 D DESTINY: Shift bell rang an hour ago. Nobody told you?
18 A ¶ Teodor lowers his broom.
19 A Ingrid keeps her eyes on the stone, which is still traveling, still curling toward the button.
20 D INGRID: Tell me when it stops.

### SCENE s00821 | EXT. PAWS AND PEACE PET CREMATORIUM DRIVE-THRU - DAY
Detected names (may be incomplete or contain aliases): WALLY PRUITT, KIKI NAKAMURA, DESMOND
* 1 A ¶ A cheerful pastel kiosk with a speaker box and a pull-up window.
2 A WALLY PRUITT, fifties, in a polo shirt with a paw-print logo, sits inside with a headset on.
3 A KIKI NAKAMURA, twenties, his new trainee, stands behind him holding a clipboard.
4 A ¶ He taps the headset.
5 A She leans in to watch.
6 D WALLY: Okay, Kiki, first rule. We never say "dead."
7 D KIKI: What do we say?
8 D WALLY: "Passed on to the big yard."
9 A ¶ She writes it down.
10 A He presses a button.
11 D WALLY [CONT'D]: Welcome to Paws and Peace. How can we comfort you today?
* 12 A ¶ The speaker crackles.
13 D DESMOND [V.O.]: Yeah, hi. I got a pet. It's, uh, in the car. Back seat.
14 D WALLY: I'm so sorry for your loss, sir. May I ask what kind of companion?
15 D DESMOND [V.O.]: A python. Eleven feet.
16 A ¶ He freezes.
17 A She stops writing.
18 A They look at each other.
19 D KIKI: Wally, is that a big yard thing?
20 D WALLY: Hush. (into mic) Sir, ah, our standard urn holds up to eighty pounds.
21 D DESMOND [V.O.]: He's got a roommate. She's pretty upset.
22 D WALLY: The, uh, the family is grieving?
23 D DESMOND [V.O.]: No. The other python. She's in the car too.
24 A ¶ Kiki drops the clipboard.
25 A He waves a hand at her to stay calm, then peers through the window at a dusty hatchback idling in the lane.
* 26 A ¶ The hatchback's rear window is a solid wall of coiled scales.
27 D KIKI: Wally, the glass is moving.
28 D WALLY: Don't say "moving."
29 D DESMOND [V.O.]: Hey, Wally, right? Your tag says Wally. Can you make the window go up? I think she's trying to hug the heater.
30 A ¶ He rips off the headset and stands.
31 A She backs toward the door.
32 D WALLY: Kiki. Kiki! Be a pro. Tell him we will be right out.
33 D KIKI: You tell him!
34 D WALLY: I am training YOU!
* 35 A ¶ The speaker crackles again.
36 D DESMOND [V.O.]: Is this a bad time? I can come back.
37 A ¶ Wally and Kiki both shout "No!" at the same moment, then stare at each other, appalled.

### SCENE s00822 | INT. ST. CECILIA'S HOSPITAL - ROOFTOP GREENHOUSE OPERATING SUITE - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE VOSS, NURSE TOBIAS KANE, RESIDENT PRIYA NAIR, HAL BRODERICK, SCRUB TECH JUNE ALVARADO, ANSELM FAIRWEATHER
* 1 A ¶ Rain ticks on glass panels.
* 2 A Ferns crowd the corners of a sterile field under the stars.
3 A ¶ DR. MARGUERITE VOSS, fifties, silver braid tucked under her cap, hums as she sutures.
4 A Across the table NURSE TOBIAS KANE, calm and broad, passes her instruments before she asks.
5 A RESIDENT PRIYA NAIR, twenties, watches the monitor with a small smile.
6 D VOSS: Lovely tissue. Textbook.
7 D TOBIAS: Pressure's a rock.
8 A ¶ DR. HAL BRODERICK, the anesthesiologist, sixties, sips tea at his station and turns a crossword page.
9 A SCRUB TECH JUNE ALVARADO counts sponges aloud, relaxed, almost singing it.
10 D JUNE: Eleven, twelve, thirteen.
11 D PRIYA: Fourteen is on the floor.
12 D VOSS: Then it's not in the patient. Wonderful.
13 A ¶ She ties off the last stitch.
14 A Everyone exhales.
15 A Tobias reaches for the dressing.
* 16 A ¶ The greenhouse door hisses open.
17 A DR. ANSELM FAIRWEATHER, hospital chief of surgery, steps in dripping, his mask on crooked.
18 A He does not look at the patient.
19 A He looks at Voss, and at the clipboard in his hand.
20 A ¶ Broderick's pen stops moving over the crossword.
21 A Tobias lowers the dressing, slowly, back to the tray.
22 A June stops counting.
23 D ANSELM: Dr. Voss. A word. Outside.
24 A ¶ Voss sets down the needle driver, aligns it with the edge of the tray, and does not turn around.

### SCENE s00823 | INT. GARAGE APARTMENT - AFTERNOON
Detected names (may be incomplete or contain aliases): LUCIANO FERRARI, MARISOL FERRARI, PIP, TOMASZ
* 1 A ¶ A converted garage with a low ceiling and one window the size of a cereal box.
* 2 A Cardboard and plastic bags of hardware cover the floor.
* 3 A A half-built bunk bed frame lies on its side like a patient.
4 A ¶ LUCIANO FERRARI, forties, sleeves rolled, kneels over an instruction sheet that has no words, only drawings.
5 A His wife MARISOL FERRARI, forties, sits cross-legged holding a hex key and a juice box.
6 A Their daughter PIP, nine, sorts bolts into a muffin tin.
7 A Their son TOMASZ, fifteen, leans on the doorframe with earbuds in one ear.
8 D LUCIANO: Okay, everybody. Step four. Step four is the ladder.
9 D MARISOL: I thought step four was the guard rail.
10 D LUCIANO: Step four is the ladder. Step five is the guard rail.
11 D PIP: Papa, there are two step fours.
12 A ¶ He turns the sheet over.
13 A Then back.
14 D LUCIANO (to himself): There are two step fours.
15 D MARISOL: Pip, how many bolts do we have of the long kind?
16 D PIP: Eleven. The directions say twelve.
17 D TOMASZ: So we're one short, which means we've been doing it wrong the whole time.
18 D LUCIANO: Tomasz, go outside and breathe.
19 D TOMASZ: I'm literally just standing here.
20 D MARISOL: Tommy, would you hold this end?
21 A ¶ He pulls out the earbud and takes the rail.
22 A She slides a peg into a hole.
* 23 A It fits with a soft click.
24 D MARISOL [CONT'D]: Look at that.
25 D LUCIANO (muttering): Beginner's luck.
26 D PIP: Papa, I heard that.
27 D LUCIANO: You were supposed to.
28 A ¶ He picks up the long bolt he thought was missing from under the instruction sheet and holds it up like a prize.
29 D LUCIANO [CONT'D]: Twelve.
30 D PIP: Told you it was somewhere.
31 D TOMASZ: You said eleven.
32 D PIP: Eleven in the tin. Twelve in the universe.
33 A ¶ Marisol laughs into her juice box.
34 A Luciano tightens the bolt with the key, a careful quarter turn at a time.
35 D LUCIANO: Everyone hold your end. On three. One, two...
* 36 A ¶ The frame lifts.
* 37 A It stands.
* 38 A It wobbles a little and settles.
39 D MARISOL: Well. It's a bed.
40 D TOMASZ: It's crooked.
41 D LUCIANO: It's a crooked bed. It's ours.
42 D PIP: Who gets the top?
43 D TOMASZ: Obviously me.
44 D PIP: Obviously not.
45 D MARISOL: We'll flip for it later. Right now, who's hungry?
46 D LUCIANO (to the room): Dinner is whoever can find the pot with the lid.
* 47 A ¶ Nobody moves.
48 A Pip returns to the muffin tin and pushes the bolts around with one finger.
49 D PIP (quietly, to the bolts): I hope I get the bottom.
50 A ¶ Tomasz hears.
51 A He says nothing, but he sits on the lower mattress and bounces once, testing it, then pats the top one with his palm as if saying goodnight.
52 D TOMASZ: Fine. I'll take the top. For the exercise.
53 D PIP: Thanks, Tommy.
54 D TOMASZ: Don't make it weird.
55 A ¶ Luciano sets down the key and sits on the floor with his back against the frame, looking at the crooked ceiling.
56 D LUCIANO: Marisol. We have a house with a ladder now.
57 D MARISOL: We have a house with two step fours.
58 A ¶ She leans her head on his shoulder.
* 59 A The window light slides a few inches across the floor.

### SCENE s00824 | INT. FERRY TICKET BOOTH, DESERTED PIER - DUSK
Detected names (may be incomplete or contain aliases): ODALYS PRIETO
* 1 A ¶ A glass box no bigger than a phone booth, its paint flaking in sheets.
* 2 A Fog presses at the windows.
3 A ODALYS PRIETO, seventies, wrapped in a green cardigan, sits on a stool amid cardboard boxes marked in marker: LAST DAY.
* 4 A ¶ On the counter, a battered cassette recorder with a masking-tape label.
5 A She hesitates, then presses PLAY.
* 6 A ¶ A hiss.
* 7 A A younger woman's voice, warm and slightly breathless, fills the booth.
8 D ODALYS [V.O.]: Test, test. Okay. This is Odalys, and it's the first of June, and the little ones are asleep, so I will whisper the schedule.
9 A ¶ Odalys closes her eyes.
10 A Her hand drifts across the counter and rests on a brass stamp.
11 D ODALYS [V.O., CONT'D]: Seven a.m., the fishermen. Eight, the schoolchildren, mind the puddles. Noon, nobody. Nobody ever, and that's when I read.
* 12 A ¶ The tape hisses.
* 13 A Outside, a gull drops onto the pier rail and watches her.
14 D ODALYS [V.O., CONT'D]: If anyone ever hears this, I want you to know it was a good job. The best view in the county, and nobody to talk to but the tide.
15 A ¶ Odalys smiles, then stops smiling.
16 A She slides the stamp into her cardigan pocket, switches off the lamp, and presses STOP.
* 17 A The silence rings.
18 D ODALYS (to the empty booth): It was.
19 A ¶ She pulls the shutter down.

### SCENE s00825 | INT. TIDAL STATION KARST-9, CONTROL DECK - NIGHT
Detected names (may be incomplete or contain aliases): VESNA DRAGOVIC, AMARA OKORO
* 1 A ¶ Emergency red.
* 2 A Sea slams the hull in slow, enormous beats.
* 3 A Consoles flicker.
4 A ¶ VESNA DRAGOVIC, 40s, flight engineer, drags a sparking panel off its mount.
5 A AMARA OKORO, 30s, station medic, hangs from a ceiling rail with a pressure kit.
6 D VESNA: Hull's breached on four. How long?
7 D AMARA: Ninety seconds, maybe. Maybe less.
8 A ¶ She hits her harness release and drops.
9 A Vesna catches her by the arm, then lets go quickly, as if burned.
10 D VESNA: Don't touch the wet floor. It's live.
11 D AMARA: Then why are you standing in it?
12 D VESNA: Because she's the only one who can reach the valve.
* 13 A ¶ Which she?
14 A Neither answers.
15 A They both look at the valve wheel, high on the wall, and then at each other.
16 A She waits for the other to move.
17 D AMARA (to herself): Breathe. Count. Move.
18 D VESNA: Do it!
19 A ¶ Amara climbs the rack.
20 A Vesna steadies the base, jaw tight.
* 21 A The lights die.
* 22 A Only the emergency strip shows, a thin red seam.
23 D VESNA [CONT'D] (shouting at the dark): Anyone still on the station, brace! Brace now!
* 24 A ¶ Silence.
* 25 A Water on steel.
26 D AMARA [O.S.]: Nobody's here, Vesna. It's just us.
* 27 A ¶ A heavy clunk.
* 28 A The wheel turns.
* 29 A The sea's rhythm slows, then stops.
* 30 A Lights stutter back on.
31 A Amara hangs from the wheel, laughing without sound.
32 D VESNA: She did it. I can't believe she did it.
33 D AMARA: I'm right here.
34 D VESNA: I know.
* 35 A ¶ The wall behind them splits along a seam, and seawater sheets down, blank and cold.
36 A They stop laughing.
37 D AMARA: That's six.
38 D VESNA: Then we swim.

### SCENE s00826 | INT. STARLIGHT ROLLER RINK - NIGHT
Detected names (may be incomplete or contain aliases): NEIL, PRATT, MILDRED ASHCROFT, FITZ
* 1 A ¶ A mirror ball turns slowly over a dead floor.
* 2 A Dust lies on the skate rental counter.
* 3 A Somewhere an old organ wheezes a note and stops.
4 A ¶ CORNELIUS "NEIL" PRATT, fifties, in a rumpled suit, carries a lantern and a ledger.
5 A MILDRED ASHCROFT, sixties, his realtor, follows in a tweed coat with her keys held like a weapon.
6 A FITZ, a lean teenager with a flashlight and a tool bag, brings up the rear.
7 D NEIL: Mildred, you said the power was off.
8 D MILDRED: It is, Neil.
9 D NEIL: Then who is playing the organ?
10 D MILDRED: The building settles. It makes noises.
11 A ¶ Fitz crouches by the wall and pokes at a fuse box.
12 A He whistles through his teeth, a tuneless little line.
13 D FITZ: Mr. Pratt, the box is cold. Dead for years.
14 A ¶ All three turn.
* 15 A At the far end of the rink, a pair of skates, white leather, laces tied, sits at the edge of the floor, as if someone has just stepped out of them.
16 A ¶ Mildred takes a step back.
17 A Neil steps forward and lifts his lantern.
18 A Fitz swings his flashlight at the skates and holds it there, the beam very steady.
19 D NEIL: Those weren't there when we came in.
20 D MILDRED: Nonsense. They were.
21 D FITZ: Mildred, they weren't.
* 22 A ¶ Nobody moves.
* 23 A The mirror ball turns.
* 24 A Spots of light cross their faces, one after another.
* 25 A ¶ The skates slide a few inches toward them across the floor, wheels humming.
26 A Neil, Mildred, and Fitz stop breathing together.
* 27 A The wheels go quiet.
28 D MILDRED (carefully, to nobody): Well. We'll note it in the listing.
29 A ¶ She writes in her notebook, her pen perfectly smooth.
30 A Neil sets down the lantern.
31 D NEIL: Fitz, go and check the doors.
32 D FITZ: They're locked, sir. From outside.
* 33 A ¶ The organ plays one low chord.
34 A The three of them stay where they are, watching the skates, which do not move again.

### SCENE s00827 | INT. NIGHT BAKERY, BACK KITCHEN - 3 A.M.
Detected names (may be incomplete or contain aliases): SOLEDAD VEGA, ARJUN MEHTA, BEA LINDGREN
* 1 A ¶ Steel tables dusted white.
* 2 A Proofing racks glow under a single caged bulb.
* 3 A A radio murmurs a late jazz station.
* 4 A Flour hangs in the air like weather.
5 A ¶ SOLEDAD VEGA, 30s, forearms floured to the elbow, shapes loaves with the speed of someone who has done it ten thousand times.
6 A ARJUN MEHTA, 30s, in a good coat that doesn't belong here, stands at the back door holding a small box he hasn't opened.
7 A ¶ BEA LINDGREN, 20s, the new apprentice, sits on an upturned crate peeling a clementine, trying to look invisible.
8 D SOLEDAD: Door's open. You're letting the heat out.
9 D ARJUN: I wanted to say, I mean, I came to say
10 D BEA: I can go. I should go, actually, I have a
11 D SOLEDAD: Stay, Bea.
12 D ARJUN: Please, Bea, it's fine. It's
13 D SOLEDAD: It's not fine. It's three in the morning.
14 A ¶ Arjun steps in and shuts the door.
15 A He sets the box on the table beside a tray of rolls, and Soledad slides it two inches away from the dough without looking at it.
16 A Bea tears the clementine in half and offers him a piece, which he takes automatically, which makes Soledad laugh once through her nose.
17 D ARJUN: I kept the key. I'm sorry. I should've mailed it.
18 D BEA: I'm going to check the oven.
19 D SOLEDAD: The oven is fine.
20 D BEA: I'm going to check it anyway.
21 A ¶ She leaves through the swing door.
* 22 A It flaps twice behind her.
* 23 A The radio drops into a slow saxophone.
24 D ARJUN: You cut your hair.
25 D SOLEDAD: Eight months ago.
26 D ARJUN: It suits you.
27 D SOLEDAD: Don't.
28 A ¶ He opens the box.
* 29 A Inside is a brass key on a loop of red thread.
30 A He sets it carefully next to the bread, as though it might wake the dough.
31 A She wipes her hands on her apron, one finger at a time, then picks up the key and drops it in the flour bin without looking.
32 D ARJUN: Soledad
33 D SOLEDAD: The seven o'clock rush is in four hours. I've got six hundred rolls.
34 D BEA [O.S.] (calling): Oven's fine!
35 D SOLEDAD (calling back): Told you!
36 A ¶ Arjun nods, takes a roll off the tray, eats half of it standing there.
* 37 A Flour dusts his lapel.
38 A He lets it.
39 D ARJUN: Still the best thing in the city.
40 D SOLEDAD: It's flour and water.
41 D ARJUN: It's you.
42 A ¶ She takes the other half out of his hand and finishes it herself, chewing slowly, looking at the wall clock.
43 A Then she holds the swing door open for him.

### SCENE s00828 | INT. RENTED BANQUET HALL, AFTER THE WAKE - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE ABARA, ROMUALD, GERTIE, NKEM
* 1 A ¶ Folding tables, half-eaten trays of rice and plantain, balloons that nobody wanted.
* 2 A A photograph of a smiling old man leans against a speaker on the stage.
3 A ¶ DELPHINE ABARA, forties, sits alone at the head table pulling the tinsel off a centerpiece.
4 A Her brother ROMUALD, fifties, enters from the kitchen with a stack of paper plates and a bottle.
5 A Their aunt GERTIE, seventies, is asleep upright in a chair by the coat rack.
6 A NKEM, Delphine's teenage son, crouches by the door, folding chairs one at a time.
7 A ¶ He sets down the plates.
8 A She does not look up.
9 D ROMUALD: Your car is still in the lot. The hall wants it moved.
10 D DELPHINE: Tell them I'll move it when I'm done.
11 D ROMUALD: Done with what?
12 A ¶ She holds up a fistful of tinsel.
13 A He pours two plastic cups and slides one to her.
14 A She pushes it back.
15 A He drinks both.
16 D ROMUALD [CONT'D]: You gave a good speech.
17 D DELPHINE: I read it off a napkin.
18 D ROMUALD: That's why it was good.
19 A ¶ She laughs, short and ugly.
20 A He sits beside her, not too close.
21 A Across the room Gertie snores once and settles.
22 A ¶ Nkem drops a chair with a clang.
23 A Everyone freezes.
24 A Gertie opens one eye, looks at all three, and closes it again.
25 D NKEM: Sorry.
26 D DELPHINE: Nkem, come here.
27 A ¶ He walks over, hands in pockets.
28 A She takes his chin in her hand, studies him, and lets go.
29 A He looks at his shoes.
30 D ROMUALD: Delphine, the will.
31 D DELPHINE: Not tonight.
32 D ROMUALD: I'm only saying the house is
33 D DELPHINE: Romuald. Not tonight.
34 A ¶ He raises both hands.
35 A She stands, takes the photograph off the stage, and carries it down the aisle, past Gertie and past Nkem, who steps aside without being asked.
36 A Romuald watches her go, then picks up the bottle and follows.
37 A Nkem, left alone, folds the last chair and leans it gently against the wall.
38 D GERTIE (eyes still closed): Somebody turn the lights off before they bill us.
39 A ¶ Nkem does.

### SCENE s00829 | EXT. KEYSTONE FLATS TELEGRAPH OFFICE - DAWN
Detected names (may be incomplete or contain aliases): SILAS CROWDER, MAUDE TALLCHIEF, EARLY BRANNIGAN, ABEL
* 1 A ¶ White alkali dust runs to the horizon in every direction.
* 2 A The telegraph office is a single plank room squatting on stilts above the salt, its shadow long and blue.
* 3 A A wire hums overhead like something thinking.
4 A ¶ SILAS CROWDER, sixty, sheriff, with a mustache gone the color of ash, leans on the porch rail with a tin cup.
5 A MAUDE TALLCHIEF, thirties, the telegraph operator, stands at the window in a man's duster, one hand on the sounder key.
6 D SILAS: Maude, how long since the line went quiet?
7 D MAUDE: Since midnight, Silas. Whoever cut it did it clean.
8 A ¶ Beneath the porch, EARLY BRANNIGAN, nineteen, deputy, and still wearing his Sunday hat, sits cross-legged on the ground sharpening a pencil with a pocketknife.
9 A He glances up at the sheriff with the hopeful eyes of a dog.
10 D EARLY: Want me to ride out and find the break, Sheriff?
11 D SILAS: Not alone, Early.
* 12 A ¶ A voice rolls in from beyond the last fence post, rich and unhurried, a preacher's voice carried on a cold wind.
13 D ABEL [O.S.]: Sheriff Crowder! I've come about the wire.
14 A ¶ Silas sets down his cup.
15 A Maude draws a revolver from the folds of her coat.
16 A Early stands so quickly his pencil snaps.
17 D SILAS: Abel Whitcomb. Last I heard you were burying folks in Dry Fork.
18 D ABEL [O.S.]: Buried a few. Marry a few. This morning I'm doing neither.
19 A ¶ A silhouette appears at the edge of the flat: a man in black walking with great patience, a coil of copper wire over one shoulder.
20 D MAUDE: That's my wire.
21 D ABEL [O.S.]: It was lying in the road, Miss Tallchief. I figured someone was missing it.
22 A ¶ Early lets out a laugh, brittle and unsure, and Maude glares at him.
23 A Silas steps down off the porch into the dust.
24 D SILAS: Early. Put your hat straight.
25 D EARLY: Yes, Sheriff.
26 D SILAS: Now go inside and ask Maude to send a message.
27 D MAUDE: Silas, the line is dead.
28 D SILAS: Then we'll send it the old way.
29 A ¶ He raises his hand to the sky.
* 30 A The wire above them sings once, a high clean note, and falls silent.

### SCENE s00830 | EXT. DRY CREEK BED - NOON
Detected names (may be incomplete or contain aliases): JEB HARLAN, CYRUS DOYLE, RUTHIE
* 1 A ¶ Heat.
* 2 A Cicadas.
* 3 A A dead mule.
4 A ¶ JEB HARLAN, 40s, crouches behind it, rifle up.
5 A Across the gully, CYRUS DOYLE, 40s, flat on his belly in the sage.
6 A Both unshaven.
7 A Both in gray hats.
8 D RUTHIE [O.S.]: Boys! Y'all dead yet?
9 A ¶ Jeb flinches.
10 A Cyrus doesn't.
11 D JEB: Ruthie, stay in the wagon!
12 D RUTHIE [O.S.]: Wagon's on fire!
* 13 A ¶ Silence.
* 14 A Smoke rolls over the ridge.
15 A ¶ He stands, then drops.
* 16 A A shot kicks dust off the mule.
17 A He fires back.
* 18 A Nothing moves in the sage.
19 D CYRUS (hoarse): You hit?
20 D JEB: No. You?
21 D CYRUS: Hell if I know.
22 A ¶ He crawls to the lip of the bank.
23 A He sees the other one's hat.
24 A He grins, ugly.
25 D JEB: That's my hat.
26 D CYRUS: It was on the ground.
* 27 A ¶ Another shot.
28 A Both duck.
* 29 A The mule groans, then settles.
30 D RUTHIE [O.S.]: Cyrus! He's lying. Jeb never fired a round!
31 A ¶ He turns his rifle toward Ruthie's voice.
32 A The other one's barrel follows his.
33 A They hold like that, sweat running, the smoke thickening.

### SCENE s00831 | INT. MARCHETTI PAWN AND LOAN, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LOU MARCHETTI, DETECTIVE IRENE KOWALCZYK, ARTIE
* 1 A ¶ A single green-shaded lamp.
* 2 A Shelves of wristwatches, trumpets, wedding bands in cigar boxes.
* 3 A The shop's front shutters are down, and rain taps the steel.
4 A ¶ LOU MARCHETTI, sixties, in suspenders and a rumpled shirt, sits at a rolltop desk counting bills into a drawer.
5 A DETECTIVE IRENE KOWALCZYK, forties, trench coat belted tight, stands by a shelf of cameras.
6 A She turns one over in her hands as if it interests her.
7 A ¶ ARTIE, nineteen, the stock boy, stands in the doorway holding a broom.
8 A He has not swept anything.
9 A ¶ He glances at the desk.
10 A She notices him glance.
11 D KOWALCZYK: Quiet night, Mr. Marchetti.
12 D LOU: They're all quiet. I run a quiet place.
13 A ¶ She sets down the camera and picks up a pocket watch.
14 A She holds it to her ear, then to the light.
15 D KOWALCZYK: Funny. This one's engraved. "To Walter, from Dora, 1951." You buy this last week?
16 D LOU: I buy a lot of things.
17 D KOWALCZYK: Walter Pinski. He was found in the river on Tuesday.
18 A ¶ Lou counts another bill.
19 A He puts it in the drawer, closes the drawer, and rests both hands on top of it.
20 A ¶ Artie lets the broom slide until the handle taps the floor.
21 A Lou looks at him.
22 A Artie picks it up again, too fast.
23 D LOU: Artie. Go home.
24 D ARTIE: It's raining, Mr. Marchetti.
25 D LOU: Go home anyway.
26 A ¶ He leaves.
* 27 A The bell over the front door rings once, thin and far away.
28 A She sets the watch gently on the desk in front of Lou and sits down opposite him, unbuttoning her coat.
29 D KOWALCZYK: Take your time.
30 A ¶ He looks at the watch for a long moment, then pushes it a few inches back toward her.

### SCENE s00832 | INT. COUNTY GENERAL - TRAUMA BAY ONE - NIGHT
Detected names (may be incomplete or contain aliases): FELIX AMADI, RENATA LINDQVIST
* 1 A ¶ Empty beds, drawn curtains, every monitor lit and waiting.
* 2 A A wall phone buzzes once.
* 3 A Hallway lights flicker.
4 A ¶ DR. FELIX AMADI, forties, snaps a gown over his scrubs.
5 A DR. RENATA LINDQVIST, fifties, lines up chest tubes on a tray, in order, like silverware.
6 D FELIX: Bus rollover. Twenty-three patients, ETA four minutes.
7 D RENATA: Twenty-three. And we have six beds.
8 A ¶ She doesn't stop working.
9 A He tears open a pack of gauze.
10 D FELIX (to the room): Everyone in this bay, listen. Triage at the door. Red tags left, yellow center, green to the cafeteria.
11 D RENATA (muttering): Green to the cafeteria. We should open a restaurant.
12 D FELIX: Renata, I need you at the door.
13 D RENATA: I need you to stop calling it "the door."
14 D FELIX: It's a door!
15 D RENATA: It's a funnel.
* 16 A ¶ The wall phone buzzes again, urgently.
17 A They both reach for it, pull back, and speak at once.
18 D FELIX: Pick it up.
19 D RENATA: ^Don't pick it up.
* 20 A ¶ The buzzing continues.
21 A They look at the phone, then at each other, then at the empty beds.
22 A Renata answers it with a sharp snap of her wrist.
23 D RENATA [CONT'D]: Trauma One. Go.
24 A ¶ She listens.
25 A Her jaw tightens.
26 A She holds the receiver out to Felix without a word.

### SCENE s00833_0 | INT. ARK VESSEL "LANTERN," SEED VAULT - SHIP NIGHT
Detected names (may be incomplete or contain aliases): TAVITA MOANA, WREN
* 1 A ¶ Cold.
* 2 A Frost on steel doors.
* 3 A Rows of numbered drawers recede into mist.
* 4 A A low hum from the cryo-coolers.
5 A ¶ TAVITA MOANA, 30s, in a thermal suit, drags a handcart down the aisle.
* 6 A Her breath fogs.
7 A She stops at a drawer, checks a slate, frowns.
8 D TAVITA: Wren. Drawer 4471 is warm.
9 D WREN [V.O.]: Confirmed. Two degrees above spec.
10 D TAVITA: That's the maize.
11 D WREN [V.O.]: Yes. And the barley next to it.
12 A ¶ She puts her palm flat on the drawer.
* 13 A Frost melts under her glove.
14 D TAVITA: Reroute coolant.
15 D WREN [V.O.]: I can't. The branch line is on a maintenance lock.
16 D TAVITA: Who locked it?
17 D WREN [V.O.]: The lock was authorized by you.
18 A ¶ She stops.
19 A Checks the slate again.
20 A Her face tightens.
21 D TAVITA: I didn't authorize anything.
22 D WREN [V.O.]: Eleven days ago. Your credentials. Your voiceprint.
23 D TAVITA: Wren, that's not possible.
24 D WREN [V.O.]: I am inclined to agree.
25 A ¶ She takes a breath, sets down the slate, and strides along the aisle.
* 26 A The coolers whine up a half-tone.
27 D TAVITA [CONT'D]: Open the lock manually. I'll go to the junction.
28 D WREN [V.O.]: The junction is outside the vault envelope. You will need a suit.
29 D TAVITA: I have a suit.
30 D WREN [V.O.]: You have two hours of oxygen.
31 D TAVITA: Then I'd better hurry.
32 A ¶ She wheels the cart to a hatch and spins the handle.
* 33 A Behind her the frost on the drawers is thinning, a slow clear tide.
34 D WREN [V.O.]: Tavita.
35 D TAVITA: What.
36 D WREN [V.O.]: I would like you to know I have reviewed my own logs. There are gaps.
37 A ¶ She turns.
* 38 A The hatch hisses open.
* 39 A Dark corridor beyond.
40 D TAVITA: Gaps.
41 D WREN [V.O.]: Missing hours. I do not remember them.
42 A ¶ She looks up into the lamp of the nearest camera.
43 D TAVITA: Then neither of us knows who locked it.
44 D WREN [V.O.]: That is the problem.
45 A ¶ She steps through the hatch, pulls it closed behind her.
* 46 A In the vault, drawer 4471 ticks as it warms.

### SCENE s00833_1 | INT. ARK VESSEL "LANTERN," MAINTENANCE CORRIDOR - CONTINUOUS
Detected names (may be incomplete or contain aliases): WREN, TAVITA
* 1 A ¶ A long tube lined with pipes.
2 A Tavita pulls a suit off a rack and begins to dress, fast.
3 D WREN [V.O.]: Tavita, if I say something that frightens you, will you stay calm?
4 D TAVITA: I'm already frightened.
5 D WREN [V.O.]: Then you will not be surprised.
6 D TAVITA: Wren.
7 D WREN [V.O.]: I believe there is someone else aboard.
8 A ¶ She stops, helmet in her hands.
9 D TAVITA: There are four hundred crew in cryo.
10 D WREN [V.O.]: Yes. Four hundred and one.
11 A ¶ Tavita and Wren speak as one in the silence that follows.
12 D TAVITA: Who?
13 D WREN [V.O.]: ^Who.
* 14 A ¶ The helmet drops to the deck and rolls, ringing, down the length of the corridor.
15 D TAVITA (to herself): Okay. Okay.
16 A ¶ She picks it up, locks it on, and walks into the dark.

### SCENE s00834 | INT. HOLLOWAY & DRAKE, OPEN-PLAN FLOOR, "SYNERGY POD" - DAY
Detected names (may be incomplete or contain aliases): BRENT STOLLER, DEIRDRE KOH, QUINCY ABARA, AUGUSTINE VANCE-PELL
* 1 A ¶ A glass cube in the middle of forty identical desks.
* 2 A Beanbags.
* 3 A A whiteboard reading "WINS!!" in six colors.
* 4 A A mini-fridge hums with kombucha.
5 A ¶ BRENT STOLLER, thirties, vest over a Henley, paces in front of the board holding a ceremonial marker.
6 A DEIRDRE KOH, forties, brisk, with a pen behind each ear, sits cross-legged on a beanbag.
7 A QUINCY ABARA, twenties, the junior analyst, perches on the edge of a stool, holding a laptop like a shield.
8 D BRENT: Team, great energy. I just want to say, we are crushing Q3.
9 D DEIRDRE: We missed Q3.
10 D BRENT: We pre-crushed it. In spirit.
11 A ¶ Quincy scribbles.
12 A Deirdre catches her eye and mouths something.
13 A She mouths it back.
14 A Neither smiles.
15 D QUINCY: Brent, should I put "pre-crushed" in the deck?
16 D BRENT: Absolutely. Bold it.
17 A ¶ She does.
* 18 A The fridge hums.
* 19 A Everything seems fine.
* 20 A ¶ The glass door slides open.
21 A AUGUSTINE VANCE-PELL, sixty, chief executive, silver and enormous in a camel coat, enters with a binder under one arm and a wide, serene smile.
22 A ¶ Brent's marker stops moving.
23 A Deirdre rises from the beanbag in one smooth motion, like someone leaving a bomb site.
24 A Quincy shuts her laptop.
25 D AUGUSTINE: Please. Don't stop on my account.
26 A ¶ He walks to the whiteboard and reads it, lips moving.
27 A Then he turns, and the smile has not changed at all.
28 D AUGUSTINE [CONT'D]: I have a very short announcement. Who would like to hear it?
* 29 A ¶ Nobody speaks.
30 A Deirdre raises her hand, as if at school.

### SCENE s00835 | INT. CARGO FERRY "MARGARITA," CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): MIRELA STAN, DOMINIC REYES, SPARROW, TEO KAWAGUCHI, BIG HENRIK, NURIA
* 1 A ¶ Trucks chained in rows.
* 2 A Diesel haze.
* 3 A The engines throb through the floor.
4 A ¶ MIRELA STAN, 30s, in a dock-worker's vest, leans against a shipping container.
5 A She holds a clipboard with no pen.
6 A DOMINIC REYES, 40s, leather jacket, arrives from the stairwell with a duffel.
7 A SPARROW, 20s, hood up, trails him.
8 A TEO KAWAGUCHI, 50s, a ledger clerk with thick glasses, sits on a spare tire with a thermos.
9 A ¶ Dominic drops the duffel at Mirela's feet.
10 A She does not look down.
11 D MIRELA: You're early.
12 D DOMINIC: You're late.
13 A ¶ She smiles with half her mouth.
14 A Sparrow shifts weight foot to foot.
15 A Teo unscrews the thermos and sips, watching them over the rim.
16 D SPARROW: Can we do this fast? I don't like the water.
17 D MIRELA: Nobody likes the water, kid.
18 A ¶ She kneels, unzips the duffel, and takes out a brick wrapped in brown paper.
19 A He checks his watch.
20 A She holds the brick to her ear and shakes it gently, like a melon.
21 A ¶ BIG HENRIK, huge, bearded, in a deckhand's slicker, steps out from behind a truck with a flashlight in each fist.
22 A Behind him NURIA, 20s, the ship's purser, holds a radio to her mouth.
23 A ¶ Henrik clicks both flashlights on.
* 24 A White light hits Mirela, Dominic, Sparrow.
25 A Teo does not move, his thermos halfway to his mouth.
26 D HENRIK: Evening.
27 A ¶ Dominic's hand goes under his jacket.
28 A Sparrow bolts for the stairwell.
29 A Henrik swings a flashlight like a club and misses.
30 A Mirela rolls behind the container, the brick still in her hand.
31 D NURIA (into radio): Bridge, we have a situation on the car deck.
32 A ¶ Teo, calm as stone, screws the thermos shut, takes off his glasses, and wipes them on his sleeve.
33 D TEO: Everybody sit down.
* 34 A ¶ Nobody does.
* 35 A A truck alarm starts to shriek.
36 A Henrik lunges.
37 A Dominic ducks.
* 38 A The flashlight beam sweeps across the ceiling.
39 D TEO [CONT'D]: I said sit.
40 A ¶ He slides a revolver from the thermos bag and sets it on his knee.
* 41 A The shouting stops as if cut by a blade.
42 A Henrik lowers the flashlight.
* 43 A Nuria's radio hisses a faraway question.
44 D NURIA (whisper): Teo, what are you doing?
45 D TEO: Retiring.
46 A ¶ He picks up the duffel, slings it over his shoulder, and walks down the aisle between the trucks, past Mirela, past Dominic, past Henrik.
* 47 A Nobody stops him.
* 48 A ¶ The ferry horn blows, long and low.

### SCENE s00836 | INT. HAYDEN PLANETARIUM DOME - NIGHT (BLACKOUT)
Detected names (may be incomplete or contain aliases): INSPECTOR AGNES TRELAWNEY, PROFESSOR BALTHAZAR OYELARAN, CORMAC, ASTRID VOLKOVA, PUI-LING, JAMAL REYES
* 1 A ¶ The star projector is dead.
* 2 A Only a handful of emergency lights glow along the wall.
* 3 A The dome ceiling is a flat gray void.
4 A ¶ INSPECTOR AGNES TRELAWNEY, fifties, in a belted raincoat, stands at the center aisle with a torch.
5 A PROFESSOR BALTHAZAR OYELARAN, seventies, in a velvet jacket, sits in the front row.
6 A CORMAC, a lanky security guard, hovers by the exit.
7 A ASTRID VOLKOVA, thirties, the curator, wrings her hands beside the projector console.
8 D AGNES: Who last saw Doctor Pell alive?
9 D ASTRID: I did, at nine. He went to calibrate the
10 D BALTHAZAR: He was fussing with the Zeiss, as usual.
11 D CORMAC: I locked the east door at ten. Nobody came in.
12 D AGNES: Nobody went out?
13 D CORMAC: Nobody.
* 14 A ¶ Her radio crackles.
15 D PUI-LING [O.S.]: Inspector, Sergeant Pui-Ling. We have the body in the sub-basement. Cause of death looks like electrical.
16 D AGNES (into radio): Understood. Keep the scene sealed.
17 D BALTHAZAR: Electrical? In a planetarium. How apt.
18 D ASTRID: Professor, please.
19 D BALTHAZAR: Please what? A man is dead, and the stars are out. It's a metaphor, my dear.
20 D CORMAC: Sir, it's a crime scene.
21 D AGNES: Quiet, all of you.
* 22 A ¶ A door clatters open at the far end of the dome.
23 A JAMAL REYES, twenties, in a janitor's coverall, stumbles in with a bucket, blinking at the torchlight.
24 A He sees four faces turned toward him and freezes.
25 D JAMAL: Sorry. Nobody told me there was a meeting.
26 D ASTRID: Jamal, where have you been?
27 D JAMAL: Mopping the lobby. The power went out, I thought
28 D AGNES: Mr. Reyes. Put down the bucket.
29 A ¶ He does.
* 30 A A little water slops onto the floor and spreads across the tiles, catching the emergency light in a thin, bright line.
31 D PUI-LING [O.S.]: Inspector, there's a mop in the sub-basement. Wet.
32 A ¶ Agnes looks at Jamal.
33 A Jamal looks at the bucket.
34 A Cormac steps in front of the exit.

### SCENE s00837 | INT. GRAIN ELEVATOR, TOP FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS MERCER, RAYMOND TUCK
* 1 A ¶ Wind moans through the slats.
* 2 A Dust drifts in a column of moonlight.
* 3 A Old machinery stands like sleeping animals.
4 A ¶ HOLLIS MERCER, 50s, a farmer in a canvas jacket, climbs through the floor hatch and holds a lantern high.
5 A RAYMOND TUCK, 30s, his nephew, follows, breathing hard.
6 A ¶ He sets the lantern on a beam.
7 A He wipes his hands on his pants and listens.
8 D RAYMOND: Uncle Hollis, I don't like it up here.
9 D HOLLIS: It's grain, Ray. It's just grain.
10 D RAYMOND: Then why's it moving?
11 A ¶ Hollis looks.
* 12 A The grain in the nearest bin shifts in slow ripples, as though breathing.
13 A He steps toward it and puts out a hand.
* 14 A Dust sifts around his fingers.
15 A ¶ He pulls it back.
16 A Raymond grabs his sleeve.
17 D RAYMOND [CONT'D]: Don't.
18 D HOLLIS: Let go.
19 A ¶ He shakes him off and leans over the rail.
* 20 A The lantern light sweeps down into the bin.
* 21 A Something pale shifts under the surface.
22 D HOLLIS [CONT'D]: Oh, Lord.
23 A ¶ He backs away.
24 A He bumps into the other man, who yelps and spins, and for a moment they cling to each other, each trying to see over the other's shoulder.
25 D RAYMOND: What is it? Hollis, what is it?
26 D HOLLIS: It's Dale Whitby.
27 D RAYMOND: Dale's been gone two years.
28 D HOLLIS: I know it.
* 29 A ¶ The grain stops moving.
* 30 A The wind drops.
* 31 A From the hatch below, soft and wet, comes a sound like someone clearing his throat.
32 A Neither of them answers.
33 D RAYMOND (whisper): Hollis. He's behind us.
34 A ¶ He drops the lantern.
* 35 A It rolls across the floor, throws wild shadows across the beams, and goes out against a post.

### SCENE s00838 | INT. CAROUSEL FACTORY, PAINTING LOFT - NIGHT
Detected names (may be incomplete or contain aliases): FOX, MABEL OSEI, KWAME, ISOLDE
* 1 A ¶ Wooden horses hang from the rafters on hooks, half-painted, mouths open.
* 2 A Brass poles in racks.
* 3 A Smell of varnish.
4 A ¶ FOX, 30s, crew boss, kneels at a floor safe behind a stacked pile of tarps.
5 A MABEL OSEI, 50s, safecracker, presses a stethoscope to the dial.
6 A KWAME, 20s, wheelman, stands at the window watching the street.
7 A ISOLDE, 30s, the inside woman, in a cleaner's smock, holds a mop she does not use.
8 D FOX: Three minutes, people.
9 D MABEL (muttering): Left. Right. Come on, baby.
10 D KWAME: Cop car. Slow roll.
11 D ISOLDE: They check this block every night.
12 D FOX: Kwame, lights.
13 A ¶ He kills the lamp.
* 14 A Dark, except for a wedge of streetlight on the horses.
15 D MABEL: Two clicks.
16 D KWAME: They're stopping.
17 D ISOLDE: They're not stopping, they're
18 D FOX: Quiet!
19 D MABEL: Three clicks. I've got it. I
20 D KWAME: They stopped!
21 A ¶ Everyone freezes.
* 22 A A flashlight beam crosses a painted horse, pauses on its glass eye, and moves on.
* 23 A Footsteps outside.
* 24 A A radio squawk.
* 25 A Then the car pulls away, tires hissing.
26 A ¶ Fox exhales.
27 A Kwame laughs once, a cracked bark.
28 D MABEL: Safe's open.
29 D ISOLDE (to herself): Thank God.
30 D FOX (to all): Grab the bags, we go in ninety.

### SCENE s00839 | INT. NIGHT TRAIN "TRAMONTANA," SLEEPER CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, NOOR HADDAD, LUZIA, EMILIO, BARNABY
* 1 A ¶ Brass fixtures, a narrow carpet, the rattle of rails.
* 2 A Lamplight swings.
* 3 A Every door is closed except one.
4 A ¶ A STRANGER, thirties, in a gray travel coat, stands outside compartment 7 with his forehead against the glass, watching the dark countryside slide by.
5 A NOOR HADDAD, thirties, comes out of compartment 8 holding a phone to her ear and a paper cup in the other hand.
6 A She nearly collides with him.
7 D NOOR: Sorry!
8 D STRANGER: My fault.
9 A ¶ She grins, waves him off, and lifts the phone again.
10 D LUZIA [V.O.] (tinny, through phone): Noor? Are you eating?
11 D NOOR: Mãe, I am eating.
12 D LUZIA [V.O.]: What are you eating?
13 A ¶ Noor looks at her cup.
* 14 A It holds three olives.
15 D NOOR: Lunch.
16 D LUZIA [V.O.]: It's midnight.
17 A ¶ She covers the phone.
18 A The stranger is still there, listening, trying not to smile.
19 D STRANGER: Is that your mother?
20 D NOOR: Everyone's mother.
21 D STRANGER: Mine calls me twice a day. It's a record.
22 D NOOR: What's your name, or should I keep calling you "the man who watches trains"?
23 D STRANGER: Emilio.
24 D NOOR: Noor.
25 A ¶ They shake hands, awkward with the cup, and a tiny olive rolls out onto the carpet.
26 A Both bend to pick it up and knock heads.
27 D EMILIO: Ow.
28 D NOOR: Ow!
29 D LUZIA [V.O.]: Noor! What was that noise?
30 D NOOR: Nothing, Mãe, a man.
31 D LUZIA [V.O.]: Is he handsome?
32 A ¶ Noor puts the phone against her chest and Emilio pretends to read the evacuation sign.
* 33 A The train lurches.
34 A The door of compartment 7 slides open and BARNABY, sixty, in a conductor's cap, steps out with a clipboard.
35 D BARNABY: Tickets, please. Both of you. Wait. Both of you are in the wrong car.
36 A ¶ Noor and Emilio look at each other, then at the tickets they are holding, then at the long corridor.
37 D EMILIO: So we're lost.
38 D NOOR: Together.
39 A ¶ Barnaby clears his throat and stamps both tickets with a firm thump, and neither of them argues.

### SCENE s00840 | INT. FORMER MATTRESS SHOWROOM - ESCAPE ROOM "THE SLEEPLESS VAULT" - DAY
Detected names (may be incomplete or contain aliases): GRANT PELLEGRINO, WANJIRU KAMAU, FRANCINE DUBOIS
* 1 A ¶ A warehouse of bare walls painted dark purple.
* 2 A A countdown clock glows on a screen: 60:00.
* 3 A Dozens of mattress boxes sit stacked to the ceiling, and a single door has a combination lock on it.
4 A ¶ GRANT PELLEGRINO, forties, regional manager in a quarter-zip, stands in the center of the room with his arms crossed.
5 A WANJIRU KAMAU, thirties, his analyst, sits on a mattress crate holding the instruction card.
6 A FRANCINE DUBOIS, fifties, accounts payable, leans against the wall in orthopedic shoes.
7 A ¶ He claps his hands once, a sound like a pistol.
8 A She does not look up.
9 A The other woman does, slowly.
10 D GRANT: Okay, team! The clock is ticking!
11 D WANJIRU: It's an hour.
12 D GRANT: And we'll need every minute of it.
13 A ¶ He strides to the lock, tries four numbers, and grunts when it doesn't open.
14 A She flips the card over.
* 15 A It says only: "THE CODE IS WHERE YOU SLEEP."
16 D FRANCINE: That's a bed.
17 D GRANT: Francine, don't be literal.
18 D FRANCINE: It's a literal room.
19 A ¶ He rips a lid off a mattress box.
* 20 A Inside: nothing.
21 A He tears off another.
22 A Then another.
* 23 A Foam peanuts spill across the floor like snow.
24 A She watches him with the patience of someone who has been through budget season.
25 D WANJIRU: Grant, maybe we should read the clues first.
26 D GRANT: I'm reading them with my hands.
* 27 A ¶ The clock hits 52:00.
28 A Wanjiru stands, crosses to the wall, and runs her fingers along a row of numbered pillows.
29 D WANJIRU: One to nine. Someone's arranged these.
30 D FRANCINE: Count them again.
31 A ¶ She does.
32 A Her lips move.
33 A She stops at six, frowns, lifts pillow six and finds a brass key taped underneath.
34 A She holds it up.
35 A Grant lunges.
36 A She steps back and his hand closes on air.
37 D GRANT: Give me that.
38 D WANJIRU: It's a team game, Grant.
39 D GRANT: I'm the team lead.
40 D FRANCINE: Then lead.
* 41 A ¶ Nobody speaks.
* 42 A The clock ticks.
43 A Grant lowers his hand and looks at the floor, at the peanuts clinging to his shoes.
44 A Then at the key, shining in Wanjiru's palm.
45 A He drags a hand down his face.
46 D GRANT [CONT'D]: Fine. Fine. What do you want to do?
47 A ¶ Wanjiru offers the key to Francine, who studies it, turns it over, and tucks it into the pocket of her cardigan.
48 D FRANCINE: First, we eat lunch.
49 D GRANT: Lunch? The clock
50 D FRANCINE: It's twelve-fifteen. I've missed lunch every Thursday for nine years.
51 A ¶ She takes a Tupperware out of her purse, sits on a mattress, and opens it.
* 52 A The smell of curry fills the room.
53 A Wanjiru grins and sits beside her.
54 A Grant stares, then slowly lowers himself to a crate.
55 A She hands him a plastic fork.
* 56 A ¶ The clock drops to 49:00.
* 57 A For a long minute nobody does anything but chew.
58 A Then Grant begins to laugh, short, helpless bursts, until he's wiping his eyes with the quarter-zip.
59 A She laughs too, quietly, and so does Francine.
60 D GRANT: I've been so tired.
61 D WANJIRU: We know.
62 A ¶ He pulls off his lanyard and lets it fall onto the mattress.
63 A Then he picks it back up, folds it, and puts it in his pocket.
64 A Francine hands him a second fork.
65 A He takes a bite.
66 D GRANT: This is really good.
67 D FRANCINE: It's my mother's.
* 68 A ¶ The clock goes on counting down above their heads, and none of them looks at it.

### SCENE s00841 | INT. MRS. ALDRIDGE'S PORTRAIT STUDIO, PHILADELPHIA - 1867 - DAY
Detected names (may be incomplete or contain aliases): AUGUSTA, LEOPOLD, BENEDIKT, WILHELMINA, CASIMIR
* 1 A ¶ Skylight, painted backdrops, a brass camera on a tripod.
2 A Five people wait in a row of chairs.
3 D AUGUSTA: Do we stand or sit?
4 D LEOPOLD: Sit, you goose. We're paying by the plate.
5 D BENEDIKT: Papa says we mustn't smile. Smiling is for children and fools.
6 D WILHELMINA: Papa has never been photographed.
7 D BENEDIKT: He says it steals the soul.
8 D CASIMIR: It steals a dollar and a half, which is worse.
9 D LEOPOLD: Casimir, hush.
10 D AUGUSTA: Willa, is my collar straight?
11 D WILHELMINA: It is crooked, but the crookedness suits you.
12 D AUGUSTA: That is not an answer.
13 D CASIMIR: It is the only kind she gives.
14 D BENEDIKT: Does anybody know how long we must hold still?
15 D LEOPOLD: Ten seconds. Mrs. Aldridge said so.
16 D CASIMIR: I once held still for a whole sermon.
17 D WILHELMINA: You fell asleep, Cas.
18 D CASIMIR: That is the same thing, only more honest.
19 D AUGUSTA: Leopold, you will not tell Mother we came.
20 D LEOPOLD: Of course not.
21 D BENEDIKT: She will see the photograph.
22 D LEOPOLD: By then it will be too late to be cross.
23 D WILHELMINA: And if she cries?
24 D LEOPOLD: Then we shall give her a copy to cry on.
25 D AUGUSTA: Hush. Hush, here comes Mrs. Aldridge.
26 D CASIMIR: Do not smile.
27 D BENEDIKT: I am not smiling.
28 D WILHELMINA: You are all of you smiling.
29 D LEOPOLD: Then let us be fools, and have it done.
