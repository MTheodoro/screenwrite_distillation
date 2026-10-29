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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0139.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01285 | INT. SELF-SERVE CAR WASH BAY - DAWN
Detected names (may be incomplete or contain aliases): IGNATIUS PELL, LO, BANKS
* 1 A ¶ Concrete.
* 2 A Pressure hoses coiled on hooks.
* 3 A Cold sun leaks through the open bay door and lights the soap suds on the floor.
4 A ¶ DET. IGNATIUS PELL, 50s, heavy coat, mustard stain on his tie, leans against a wet wall.
5 A A cardboard coffee in each hand.
6 A ¶ LORETTA "LO" BANKS, 30s, nurse's scrubs under a puffy jacket, hair in a hasty bun, stands by the quarter-slot machine.
7 A Her hands are shoved deep in her pockets.
8 D PELL: Thanks for coming.
9 D LO: You said it was about my brother.
10 D PELL: It is.
11 A ¶ He holds out a coffee.
12 A She doesn't take it.
13 D LO: He's in Ohio.
14 D PELL: He was.
15 D LO: What does that mean?
16 D PELL: Lo.
17 D LO: Don't "Lo" me.
18 A ¶ Pell sets the coffee on the machine.
19 A Opens his coat.
20 A Pulls out a thin folder.
21 D PELL: Found a car three days ago. Under a bridge by Dunmore.
22 D LO: So?
23 D PELL: Plates were Ohio. Registered to Darnell Banks.
* 24 A ¶ Silence.
* 25 A Water drips.
26 D LO: He sold that car.
27 D PELL: Not according to the DMV.
28 D LO: Then someone stole it.
29 D PELL: Someone did. The keys were in the ignition.
30 A ¶ She walks to the wall.
31 A Presses her forehead against the cold tile.
32 D LO: Was he in it?
33 D PELL: No.
34 D LO: Then what do you want from me?
35 D PELL: His phone pinged a tower four blocks from your apartment. Tuesday night.
36 A ¶ She turns, slowly.
37 A Her face has changed.
38 D LO: Tuesday.
39 D PELL: Tuesday. Around eleven.
40 D LO: I was on shift.
41 D PELL: Until?
42 D LO: Seven.
43 D PELL: Then who let him in?
44 D LO: Nobody let him in.
45 D PELL: Lo.
46 A ¶ She snatches the coffee.
47 A Hurls it at the wall.
* 48 A It EXPLODES brown against the tile, hot, steaming.
49 D LO: He's my brother! He's the only family I have, and you come at dawn with a folder and a face like a funeral!
50 D PELL: I'm trying to find him.
51 D LO: You're trying to find me.
52 A ¶ He doesn't deny it.
53 A He just stands there, coffee dripping down the wall behind her.

### SCENE s01286 | EXT. SUNNYBROOK PETTING ZOO - DAY
Detected names (may be incomplete or contain aliases): BIRTHDAY CLOWN, TEDDY, PRIYANKA DESHMUKH, DOLORES SWAN, GERALD
* 1 A ¶ Hay bales.
* 2 A A painted red barn.
* 3 A A banner reads HAPPY 7TH BIRTHDAY, TEDDY!
* 4 A Beneath it, a crowd of parents with phones.
5 A ¶ A BIRTHDAY CLOWN, 40s, in an orange wig and enormous shoes, wrestles a bundle of balloon animals.
6 A A goat watches him with great interest.
7 A ¶ MRS. PRIYANKA DESHMUKH, 40s, blazer, lanyard, a party planner with a tight smile, marches over with a clipboard.
8 A ¶ TEDDY, 7, birthday boy, paper crown crooked, stands at the pen.
9 A He holds a carrot out to the goat.
10 A He is very serious.
11 A ¶ DOLORES SWAN, 50s, the zookeeper, in rubber boots and a faded cap, leans on a rake and stares at the clown with wary eyes.
12 D PRIYANKA: You're ten minutes late.
13 D CLOWN: Traffic. Also the goat ate my map.
14 D PRIYANKA: You're a clown. You don't need a map.
15 D CLOWN: I'm a fully qualified clown, ma'am. I have a certificate.
16 D DOLORES: He's got a certificate.
17 D PRIYANKA: Do you have a name, certificate?
18 D CLOWN: Giggles.
19 D PRIYANKA: Your real name.
20 D CLOWN (lowering his voice): Gerald.
21 D DOLORES: Gerald, that goat has been staring at you for five minutes. He doesn't like clowns.
22 D GERALD: Why not?
23 D DOLORES: Last clown was a bad time.
24 A ¶ The goat lowers its head.
25 A Gerald backs away.
26 A The goat steps forward.
27 A Gerald trips over his shoe, grabs a balloon sword from his belt, thrusts it like a rapier.
* 28 A The sword POPS.
29 A The goat CHARGES.
30 A ¶ Gerald bolts across the yard, wig flying, shoes flapping.
31 A Priyanka drops the clipboard.
32 A Dolores drops the rake and sprints after the goat, shouting.
33 A Teddy bursts into laughter and runs after all of them, crown bouncing.
* 34 A The parents' phones come up like a field of tiny cameras.
35 D GERALD [CONT'D] (over his shoulder): Is that a good goat?!
36 D DOLORES: That's a goat!
37 A ¶ Gerald vaults a hay bale and lands face-first in the pen.
38 A The goat skids to a stop.
39 A Sniffs his wig.
40 A Eats it.
* 41 A ¶ Silence.
* 42 A Then applause.
43 D TEDDY: Best birthday ever!
44 A ¶ Gerald lies in the straw, hairless, beaming.

### SCENE s01287 | EXT. MANGROVE SWAMP - DUSK
Detected names (may be incomplete or contain aliases): ELSPETH GRAY, WANJIRU KARIUKI, HENRIK DAHL, YUSUF AL-RASHID
* 1 A ¶ Roots like knuckles.
* 2 A Black water, glassy, ringed with mosquitoes.
* 3 A A heavy sky bruised orange and green.
* 4 A The air tastes of rot and salt.
5 A ¶ Four people wade single file, waist-deep.
* 6 A Packs held over their heads.
7 A ¶ ELSPETH GRAY, 50s, in a drenched canvas hat, leads.
8 A Her face is lined, sunburnt, patient.
9 A She tests each step with a bamboo pole.
10 A ¶ WANJIRU KARIUKI, 30s, close behind, wears a field vest with too many pockets.
11 A Her braid is plastered to her neck.
12 A She carries the sat-phone, dead for three days.
13 A ¶ HENRIK DAHL, 40s, tall and blond, grey with fever, stumbles through the rear.
14 A His glasses are cracked.
15 A ¶ YUSUF AL-RASHID, 20s, the youngest, carries Henrik's pack as well as his own.
16 A He grins when he thinks no one's watching.
17 D ELSPETH: Roots ahead. Step high.
18 D WANJIRU: How far to the river?
19 D ELSPETH: Two miles. Maybe three.
20 D WANJIRU: Maybe is an expensive word.
21 D ELSPETH: It's the only one I've got.
22 A ¶ She plants her pole.
* 23 A Water ripples around her thighs.
24 A She stops.
25 D ELSPETH [CONT'D]: Stay still.
26 A ¶ They do.
* 27 A A long beat.
* 28 A Frogs fall silent.
29 A ¶ Something large breaks the surface twenty feet away.
30 A A dark ridge, a pair of eyes.
31 A It glides toward the nearest root and slides beneath it.
* 32 A ¶ Nobody breathes.
33 D YUSUF (whispering): Is it a log?
34 D ELSPETH: It's not a log.
35 D YUSUF: Is it going to eat us?
36 D WANJIRU: It's been eating the whole way. We're just the dessert.
37 D HENRIK (hoarse): Wanji.
38 D WANJIRU: Henrik. Don't talk.
39 D HENRIK: I need to sit.
40 D WANJIRU: You can't sit. It's a swamp.
41 D HENRIK: I'm going to sit anyway.
42 D YUSUF: I've got him.
43 A ¶ He braces Henrik.
44 A Elspeth glares at the root where the shape vanished.
45 A She waves a hand: forward.
46 A ¶ They move.
47 A Slowly, silently, a procession of damp shadows across the dusk.
48 D ELSPETH: Single file. Keep to the left bank. The right is deeper.
49 D WANJIRU: How do you know?
50 D ELSPETH: I came here thirty years ago. With my husband.
51 D WANJIRU: What happened?
52 D ELSPETH: He went to the right bank.
* 53 A ¶ Nobody asks more.
* 54 A ¶ They wade on.
55 A Henrik coughs, a cracked wet sound.
56 A Yusuf pats his back.
57 A Wanjiru adjusts the sat-phone on her shoulder.
58 A She tries the power switch.
* 59 A Nothing.
60 D WANJIRU [CONT'D] (under her breath): Come on. Come on.
* 61 A ¶ The sky darkens a shade.
* 62 A Fireflies bloom in the branches overhead, hundreds, drifting down like green sparks.
63 D YUSUF: It's beautiful.
64 D HENRIK: It's malaria.
65 D YUSUF: Can't it be both?
66 D HENRIK (a faint smile): Possibly.
67 D ELSPETH: Quiet now. We cross the channel in front of us. Hold hands.
68 A ¶ They link: Elspeth, Wanjiru, Yusuf, Henrik.
69 A A chain across the black water.
70 D ELSPETH [CONT'D]: On three. One. Two.
* 71 A ¶ Something SPLASHES behind them.
72 D ELSPETH [CONT'D]: Go!
73 A ¶ They plunge forward.
* 74 A Water surges to their chests.
75 A Yusuf pulls Henrik, who is half-floating.
76 A Wanjiru holds the phone high.
77 A Elspeth thrashes ahead, bamboo pole cutting a path.
78 A ¶ They reach the far bank.
79 A Haul themselves up into mud and roots.
80 A Collapse, gasping.
* 81 A ¶ Behind them, a long ripple fades across the channel.
82 D WANJIRU (laughing, crying): We made it.
83 D ELSPETH: We made the channel.
84 D YUSUF: There's more?
85 D ELSPETH: Two miles.
86 A ¶ He lies back.
87 A Stares at the sky.
* 88 A Fireflies drift across his face.
89 D YUSUF: Okay.

### SCENE s01288 | INT. LOST UMBRELLA ARCHIVE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR FINBAR HOLT, CEDRIC LOWE, MAGDA PRZYBYLSKI
* 1 A ¶ A cavernous basement beneath a railway station.
* 2 A Wooden racks stretch into darkness, each hung with hundreds of umbrellas, tagged and dated.
* 3 A A single desk lamp burns green.
* 4 A The air smells of damp wool and old rain.
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
* 17 A Along the ferrule, a dark crust.
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
* 32 A ¶ A door CREAKS at the far end of the room.
* 33 A Footsteps echo among the racks.
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
* 53 A ¶ The desk lamp FLICKERS.
* 54 A In the dark, between the racks, an umbrella falls with a clatter.

### SCENE s01289 | INT. ALPINE CABLE CAR - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR BALTHAZAR GREY, MADAME SOLANGE VEIL, COLONEL RUPERT ASHBY, MISS PENELOPE DRAKE, KASIMIR NOVAK
* 1 A ¶ A glass cabin hangs mid-span between two peaks, swaying in the wind.
* 2 A Snow-ridged valley two thousand feet below.
* 3 A The machinery has stopped.
4 A ¶ INSPECTOR BALTHAZAR GREY, 50s, long grey coat, folds his hands over a silver-topped cane.
5 A ¶ MADAME SOLANGE VEIL, 60s, in sable and diamonds, clutches a jewelled handbag.
6 A ¶ COLONEL RUPERT ASHBY, 70s, ramrod straight, medals pinned to his lapel, glares through the window.
7 A ¶ MISS PENELOPE DRAKE, 20s, a nurse in a blue cape, sits on the bench with her knees together.
8 A ¶ MR. KASIMIR NOVAK, 40s, in a cheap brown suit, sweats and stares at his shoes.
9 A ¶ They all turn at once.
10 A Grey knocks his cane against the floor.
11 A Everyone else freezes.
12 D GREY: Ladies and gentlemen, I shall be brief. Someone in this cabin killed Lord Pemberton last night.
13 D ASHBY: Preposterous.
14 D GREY: His body was found in the funicular station with a needle in his neck.
15 D PENELOPE: Oh!
16 D GREY: Miss Drake, you are the only person here trained to use a hypodermic.
17 D PENELOPE: I'm a nurse, not an assassin!
18 D GREY: Of course. But you were on his floor.
19 D VEIL: So was I, Inspector. So was the Colonel.
20 D ASHBY: Madame, I take exception.
21 D VEIL: Take it, then. I saw you in the corridor at midnight.
22 D ASHBY: I was returning from the smoking room.
23 D VEIL: In your dressing gown?
24 D ASHBY: It's cold!
25 D GREY: Mr. Novak?
26 D NOVAK: I was in my room. All night.
27 D GREY: Then you will not mind if I search your jacket.
28 D NOVAK: I will!
29 D GREY: Why?
30 D NOVAK: Because there is a letter in it.
31 D GREY: From whom?
32 D NOVAK: From the dead man.
* 33 A ¶ The cabin sways.
* 34 A No one speaks.
* 35 A Wind whistles through the cables.
36 D GREY: Read it aloud, Mr. Novak.
37 A ¶ Novak draws out an envelope with trembling fingers.
38 A He opens it.
39 A His eyes move.
40 A His lips whiten.
41 D NOVAK: "Whoever finds this, forgive me. I have taken my own life, and I wish it understood that no person is to blame."
42 D PENELOPE: Suicide?
43 D GREY: No, Miss Drake. A man who writes his own suicide note does not first poison himself with a needle in the neck.
44 D ASHBY: Then the letter is forged.
45 D GREY: The letter is genuine. And that is the interesting thing.
46 D VEIL: Why?
47 D GREY: Because the handwriting is Mr. Novak's.

### SCENE s01290 | INT. DECOMMISSIONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): NOOR HAKIM, DOC, BRAGG, RAFE TOLLIVER
* 1 A ¶ A dome of peeling white plaster.
* 2 A Stars projected from a rusted machine that still works.
* 3 A Seats torn, upholstery leaking foam.
* 4 A Pigeons roost in the rafters.
5 A ¶ NOOR HAKIM, 30s, field agent, black jacket, hair tied back, crouches behind a row of seats.
6 A Pistol drawn.
7 A She is bleeding from the shoulder.
8 A ¶ ELLISON "DOC" BRAGG, 50s, ex-surgeon turned smuggler, kneels beside the projector with a bag of surgical tools.
9 A He is calm.
10 A ¶ RAFE TOLLIVER, 30s, tall, in a stained suit, lies on the central floor, one hand pressed to his ribs.
* 11 A His gun is three feet from his fingers.
* 12 A ¶ Silence.
* 13 A Stars wheel overhead.
14 D NOOR: Doc, back off.
15 D DOC: Noor, I'm trying to help.
16 D NOOR: By what? Selling him a bandage?
17 A ¶ Doc raises both hands.
18 A Rafe groans.
19 D RAFE: Noor.
20 D NOOR: Don't talk.
21 D RAFE: Noor. Look at me.
22 A ¶ She crosses to him.
23 A Kicks the gun away.
* 24 A It spins under a seat.
25 D NOOR: You shot me.
26 D RAFE: I shot at you. You moved.
27 D NOOR: That's not an excuse.
28 D DOC: Rafe, you've got a nicked lung. Breathe shallow.
29 D RAFE: Easy for you.
30 D DOC: Very easy. I'm not the one with a hole in him.
31 A ¶ Noor lowers her pistol.
32 A Doc steps forward.
33 A Rafe lunges, grabs Noor's wrist, wrenches.
* 34 A The pistol clatters.
35 A They struggle, rolling across the floor, knocking over a rusted bucket.
36 A Doc shouts and dives in.
37 A The three of them grapple in the dust beneath a thousand painted stars.
38 D DOC [CONT'D]: Stop! Both of you!
39 D NOOR: Get off me!
40 D RAFE: Let go!
41 A ¶ Doc seizes the pistol.
42 A Points it at the ceiling.
* 43 A FIRES.
* 44 A Plaster rains.
* 45 A Pigeons erupt.
46 A ¶ All three freeze.
47 D DOC: Enough.
* 48 A ¶ Nobody moves.
49 A Rafe lets go of her wrist.
50 A Noor wipes dust from her eyes.
51 D NOOR: Doc. That was the last bullet.
52 D DOC: I know.
53 A ¶ He lowers the pistol.
54 A Sets it on the floor.
55 D DOC [CONT'D]: Now let me look at both of you.
56 A ¶ Rafe drops back.
57 A Noor sits beside him, breathing hard.
* 58 A Above, a comet crosses the dome.

### SCENE s01291 | INT. ROSELLE'S WEDDING CAKE ATELIER - MORNING
Detected names (may be incomplete or contain aliases): BART, OYELARAN, CHLOE FENWICK-DASH, LUDWIK, DONNA
* 1 A ¶ A pink-walled bakery in a state of panic.
* 2 A Racks of sugar flowers, bowls of fondant, a six-tier cake on a marble counter.
* 3 A A wall clock reads 8:47.
* 4 A The ceremony begins at ten.
5 A ¶ BARTHOLOMEW "BART" OYELARAN, 30s, the groom, in a tuxedo shirt and no jacket, paces with a phone pinched between his chin and his shoulder.
6 A He has icing on his cuff.
7 A ¶ CHLOE FENWICK-DASH, 30s, the bride, in a hoodie over a half-pinned gown, stands rigid before the cake.
8 A Her veil is askew.
9 A She stares at the third tier.
10 A ¶ LUDWIK, 50s, the pastry chef, a mountain of apron and moustache, wrings a dish towel and says nothing.
11 D DONNA [V.O.] (from the phone, shrill): Bartholomew! Is that a sunflower on my daughter's cake?
12 D BART (into the phone): Mrs. Fenwick-Dash, it's a daisy.
13 D DONNA [V.O.]: It is a sunflower, Bartholomew. I specifically said no sunflowers.
14 D CHLOE: Mom, it's not a sunflower!
15 D DONNA [V.O.]: Chloe, is that you? Why are you at the bakery? You're supposed to be at the salon!
16 D CHLOE: The salon burned down.
17 D BART (whispering): It did not burn down.
18 D CHLOE (whispering): It's a metaphor.
19 D LUDWIK: Madame, it is a daisy. Look. Five petals.
20 D DONNA [V.O.]: I count nine!
21 A ¶ Bart holds the phone out.
22 A Counts the petals.
23 A Brings it back.
24 D BART: Seven.
25 D DONNA [V.O.]: That is not a daisy, Bartholomew. That is a sunflower in a daisy costume.
26 A ¶ Ludwik snatches a pastry knife.
27 A Slices the offending flower off the tier.
* 28 A It thumps to the counter.
29 A He hands the cake an apologetic pat.
30 D LUDWIK: Now it is nothing.
31 D DONNA [V.O.]: Better!
32 A ¶ Chloe throws her bouquet at the wall.
33 A Bart ends the call.
* 34 A Silence, then, softly, from the counter:
35 D CHLOE: Bart.
36 D BART: Yeah?
37 D CHLOE: Let's elope.
38 A ¶ Ludwik hands them each a slice of the sunflower.

### SCENE s01292 | INT. HOTEL LINEN ROOM - NIGHT
Detected names (may be incomplete or contain aliases): PHILOMENA CROSS
* 1 A ¶ A windowless cupboard of a room, walls lined with shelves of folded white sheets and towels in neat stacks.
* 2 A A bare bulb.
* 3 A A laundry chute in the corner breathes cold air.
4 A ¶ PHILOMENA CROSS, 50s, a private investigator in a rumpled raincoat, sits cross-legged on an upturned laundry cart.
5 A A pocket recorder in her palm.
6 A Her hair is damp.
7 A ¶ She presses RECORD.
8 D PHILOMENA [V.O.] (recorded, hushed): Tuesday. Two-oh-six a.m. Linen room, fourth floor, the Grand Meridian. The key card the maid gave me opens this door and nothing else.
9 A ¶ She stops the tape.
10 A Listens to the building: the groan of pipes, a distant lift.
11 A ¶ She presses RECORD.
12 D PHILOMENA [V.O., CONT'D] (recorded): Pencil sketch: eight shelves, eight stacks, one false panel behind the towels on the left.
13 A ¶ She stops.
14 A Rises.
15 A Crosses to the left shelf.
16 A Slides the towels to the floor, one by one, with surgical care.
* 17 A ¶ Behind them: a plywood panel, painted to match the wall.
* 18 A A brass latch.
19 A ¶ She presses RECORD.
20 D PHILOMENA [V.O., CONT'D] (recorded): Panel found. Latch is warm.
21 A ¶ She stops.
22 A Her breath catches.
* 23 A Warm.
* 24 A ¶ Beyond the panel, a soft click.
25 A Someone on the other side lets go of the latch.
26 A ¶ Philomena freezes.
27 A Her thumb finds the recorder's button.
28 A Her other hand slides to her coat pocket.
29 A ¶ She presses RECORD.
30 D PHILOMENA [V.O., CONT'D] (recorded, barely a whisper): If anyone finds this tape, the Grand Meridian is not a hotel.
* 31 A ¶ The latch turns.
32 A ¶ She hurls the recorder into the laundry chute.
* 33 A It clatters down into the dark.
* 34 A ¶ The panel swings inward.

### SCENE s01293 | INT. GRAND CENTRAL WAITING HALL - NIGHT
Detected names (may be incomplete or contain aliases): IMELDA CASTELLANOS, WINIFRED BOYLE, ARTHUR PEMBROKE
* 1 A ¶ 1946.
* 2 A High arched windows, benches of dark oak.
* 3 A A great board of arrivals flicks over names.
* 4 A Steam from distant trains.
5 A A few soldiers asleep on their duffels.
6 A ¶ IMELDA CASTELLANOS, 40s, in a worn wool coat, sits on a bench with her hands in her lap.
* 7 A A suitcase at her feet.
* 8 A A man's hat on top of it.
9 A ¶ WINIFRED BOYLE, 60s, in tweed, with a prim hat and a leather handbag, perches at the far end of the bench.
10 A She has been watching the board for hours.
11 A ¶ ARTHUR PEMBROKE, 30s, in a demobbed uniform with the insignia ripped from the sleeve, walks the aisle.
12 A Stops.
13 A Stares at Imelda.
14 D ARTHUR: Imelda?
15 A ¶ She stands.
* 16 A The hat falls from the suitcase.
17 A Arthur bends to pick it up, but Winifred gets there first.
18 A She holds it out to Imelda with a trembling hand, and Imelda takes it without taking her eyes off him.
19 D IMELDA: Arthur. You are late.
20 D ARTHUR: The trains. I was told.
21 D IMELDA: You were told four years ago.
22 D ARTHUR: I am here now.
23 A ¶ Winifred rises, smooths her coat, and walks away down the hall.
24 A She does not look back.
25 A Arthur steps closer.
26 A Imelda lifts the hat between them.
27 D IMELDA: Your father's.
28 D ARTHUR: I thought it was lost.
29 D IMELDA: Nothing is lost, Arthur. Only misplaced.
30 A ¶ He puts it on his head.
* 31 A It fits.
32 A She straightens it with two fingers.

### SCENE s01294 | EXT. DRIFTING ICE FLOE - DAY
Detected names (may be incomplete or contain aliases): LAWRENCE DEVEREUX, ABEL TSEGAYE
* 1 A ¶ A slab of white, a hundred feet across, adrift in a grey sea.
* 2 A Fog presses on every side.
* 3 A The ice groans.
4 A ¶ LAWRENCE DEVEREUX, 50s, polar surveyor, in a heavy wool coat caked with frost, kneels by a crate of instruments.
5 A His beard is white with rime.
6 A ¶ ABEL TSEGAYE, 30s, his assistant, stands at the edge of the floe, peering into the fog.
7 A A rope wound about his chest.
8 D LAWRENCE: Abel, stay back from the edge.
9 D ABEL: There is water on the east side.
10 D LAWRENCE: There is water on every side.
11 D ABEL: The ice is thinner there. I heard it crack.
12 D LAWRENCE: Then we stay on the west.
13 A ¶ He rises, stiff-limbed.
14 A He picks up a compass.
* 15 A The needle spins, useless.
16 D ABEL: How long has the floe been drifting?
17 D LAWRENCE: Since Tuesday.
18 D ABEL: We should signal.
19 D LAWRENCE: With what? A flare?
20 D ABEL: There are two flares.
21 D LAWRENCE: There is one. The other went down with the sled.
22 A ¶ Abel turns.
* 23 A Fog swallows the sea.
24 D ABEL: You didn't tell me.
25 D LAWRENCE: You didn't ask.
* 26 A ¶ A deep CRACK runs through the ice.
27 A Both men freeze.
* 28 A A fissure opens ten feet from Lawrence's boots, black water welling.
29 D ABEL: Lawrence!
30 A ¶ He reaches him.
31 A Hauls him back.
* 32 A The fissure widens to a yard.
33 D LAWRENCE: Cut the rope.
34 D ABEL: No.
35 D LAWRENCE: Abel, if it takes me, it takes you.
36 D ABEL: Then it takes us both. Pull!
37 A ¶ Lawrence scrambles up.
38 A They collapse on the solid ice.
* 39 A The gap stops, a few feet wide.
* 40 A Water slaps the edges.
41 D LAWRENCE (breathless): One flare.
42 D ABEL: One flare.
43 A ¶ Lawrence digs in his pack.
44 A Pulls out a dented red tube.
45 A His hand shakes.
46 D LAWRENCE: You do it.
47 D ABEL: Why?
48 D LAWRENCE: Because he who lights it will be the one they find first.
49 A ¶ Abel takes the flare.
50 A Pulls the cap.
* 51 A A plume of crimson smoke bursts into the fog, bright as blood on snow.

### SCENE s01295 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RENATA OKONKWO-VASS, CLERK
* 1 A ¶ Brass walls.
* 2 A A cracked floor indicator.
* 3 A The car hums between floors.
4 A ¶ ATTORNEY RENATA OKONKWO-VASS, 40s, sharp grey suit, briefcase at her ankle, presses her back against the rail.
5 A She stares at the floor numbers.
6 A Her jaw is tight.
* 7 A ¶ The elevator jolts.
* 8 A Stops.
* 9 A The lights flicker.
10 A ¶ She sighs.
11 A Jabs the call button.
12 D CLERK [V.O.] (through the speaker): Maintenance.
13 D RENATA: I'm in car three. Between six and seven.
14 D CLERK [V.O.]: Yes, ma'am. We see you.
15 D RENATA: I'm due in Courtroom 7 in four minutes.
16 D CLERK [V.O.]: The judge has been informed.
17 A ¶ She exhales.
18 A Sets down her briefcase.
19 A Rubs her temples.
20 D RENATA: Is he angry?
21 D CLERK [V.O.]: Ma'am?
22 D RENATA: The judge.
23 D CLERK [V.O.]: He said, and I quote, "Let her be late. She's earned it."
24 A ¶ She blinks.
25 A Then, for the first time all day, she laughs.
26 D RENATA: I won, didn't I?
27 D CLERK [V.O.]: The jury came back ten minutes ago.
28 A ¶ She leans her head against the wall.
29 A Closes her eyes.
30 D RENATA: Then take your time.

### SCENE s01296 | INT. BEEKEEPER'S SHED - NIGHT
Detected names (may be incomplete or contain aliases): ONDINE HAWTHORNE, MORDECAI
* 1 A ¶ A low, windowless hut of unplaned planks.
* 2 A Rows of honey jars glow amber in the lantern light.
* 3 A From the hives outside, a drone, deep and constant.
* 4 A The walls tremble with it.
5 A ¶ ONDINE HAWTHORNE, 30s, in a veil and cotton gloves, sets a jar on the shelf and wipes her hands, never turning from the door.
6 A Her brother MORDECAI, 40s, bearded, bare-armed, stands in the doorway with a smoker in one hand and a bucket in the other.
7 A Neither has spoken for some time.
8 A He steps inside; she steps back.
9 A The bucket slips from his fingers and spills a thick gold river across the floor, and as she reaches for a rag he catches her wrist.
* 10 A The lantern gutters.
* 11 A Behind them the humming rises, and the tallest hive outside begins, very quietly, to speak her name.
12 D ONDINE: Let go.
13 D MORDECAI: They want you back.
14 D ONDINE: They want what's in me.
15 A ¶ He releases her.
16 A She backs against the shelf.
* 17 A The jars chime against each other.
* 18 A The humming stops.
* 19 A ¶ In the new silence, a single bee crawls from the neck of her veil and walks across her cheek.

### SCENE s01297 | INT. RADIO STATION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): LEANDRO PACHECO, CALLER, AIR
* 1 A ¶ A small glass room above a shuttered strip mall.
* 2 A Dials, cables, dead plants.
* 3 A A red ON AIR sign glows above the window.
* 4 A Beyond it, the darkened studio floor.
* 5 A Out the far window, a truck stop's neon bleeds into the rain.
6 A ¶ LEANDRO PACHECO, 40s, the overnight host, headphones around his neck, a thermos of coffee at his elbow, leans back in a creaking chair.
7 A He moves the faders with the unthinking ease of fifteen years.
* 8 A A pile of unopened mail beside him.
9 D LEANDRO (into the mic, smooth): That was Patsy Cline, and you're listening to Night Drive on 94.7. Four-fifteen in the morning. Phone lines are open.
10 A ¶ He flicks a switch.
* 11 A A line blinks red.
12 D LEANDRO [CONT'D]: First caller. You're on the air.
13 D CALLER [V.O.] (over the phone, very quiet): Hello, Leandro.
14 D LEANDRO: Hello. What can I play for you tonight?
15 D CALLER [V.O.]: Nothing. I just wanted to hear you talk.
16 D LEANDRO (a small laugh): Well. That's what I'm here for. What's your name?
17 D CALLER [V.O.]: You know my name.
18 A ¶ Leandro's smile fades by a degree.
19 A He glances at the line indicator: caller ID reads NO SIGNAL.
20 D LEANDRO: I'm afraid I don't. Help me out.
21 D CALLER [V.O.]: It's been so long since you said it.
22 A ¶ He sits up.
23 A Takes a slow sip of coffee.
24 A Sets the mug down without a sound.
25 D LEANDRO: Let's go to a song, shall we? This one's for you, friend.
26 A ¶ He thumbs the fader.
* 27 A A soft ballad swells.
28 A He mutes the mic, but the line is still open.
29 A He doesn't hang up.
30 D CALLER [V.O.]: Are you still afraid of the water, Leandro?
31 A ¶ His hand freezes.
* 32 A The headphones slide off his shoulder to the floor.
33 D LEANDRO (low): Who is this?
34 D CALLER [V.O.]: Look behind you.
35 A ¶ He doesn't.
36 A He stares at his reflection in the glass: the booth, the lamp, the empty studio beyond.
37 A And behind his reflection, standing in the dark at the edge of the floor, a figure he cannot make out.
38 A ¶ He reaches for the ON AIR switch.
39 A Turns it off.
* 40 A The red glow dies.
* 41 A ¶ The line goes dead.
* 42 A The song plays on to an empty room.

### SCENE s01298 | INT. ROLLER DERBY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): BERNIE, OYELOWO, SUNNIVA HOLM, TILLY BRANDT, TANK, DELACROIX, RAJANI PILLAI, DIEDRE KOWALCZYK
* 1 A ¶ Concrete floor.
* 2 A Steel lockers, dented.
* 3 A Fluorescent flicker.
* 4 A A hundred pairs of skates on hooks.
* 5 A The scoreboard through the wall reads 142-38.
6 A ¶ COACH BERNADETTE "BERNIE" OYELOWO, 50s, in a tracksuit and whistle, stands in the centre with a dry-erase marker.
7 A Her jaw is clamped.
8 A ¶ SUNNIVA HOLM, 20s, jammer, the team's star, sits on a bench with her helmet in her lap.
9 A Her lip is split.
10 A ¶ TILLY BRANDT, 20s, blocker, ponytail, holds an ice pack to her wrist.
11 A ¶ MARGOT "TANK" DELACROIX, 30s, enormous, sits on the floor tying a skate.
12 A ¶ RAJANI PILLAI, 20s, rookie, stands against the wall, wide-eyed.
13 A ¶ DIEDRE KOWALCZYK, 30s, captain, rubs her knuckles raw with a towel.
14 D BERNIE: Final period. One hundred and four points down.
15 D SUNNIVA: I know.
16 D BERNIE: I didn't ask if you knew.
17 D TANK: Coach, with respect, we're being killed.
18 D BERNIE: Then die loud.
19 D DIEDRE: We can't win.
20 D BERNIE: You can't win. You can lose with dignity.
21 D TILLY: That doesn't sound like a pep talk.
22 D BERNIE: It isn't. It's the truth.
23 D RAJANI (small voice): Can I say something?
24 D BERNIE: Please.
25 D RAJANI: This is the best night of my life.
* 26 A ¶ Silence.
* 27 A The lockers hum.
28 D TANK: She's serious.
29 D RAJANI: I've watched you play since I was twelve. Now I'm in the locker room. We're losing a hundred and four to thirty-eight, and I'm so happy I could throw up.
30 D SUNNIVA (laughing): Rookie.
31 D DIEDRE: Welcome to the team.
32 A ¶ Tilly tosses her ice pack across the room.
33 A Tank catches it, flings it back.
34 A Sunniva swats it out of the air, knocks Rajani's helmet off her head.
35 A Rajani lunges for it; Diedre grabs the helmet, stuffs it on Tank's head.
36 A They collapse into a wrestling pile of limbs and laughter.
37 A Bernie lets them for a full five seconds.
38 A Then she blows her whistle.
39 D BERNIE: Go skate.
40 A ¶ They file out.
41 A Bernie caps the marker.
42 A Waits until the room is empty.
43 D BERNIE [CONT'D] (to herself): Dignity.

### SCENE s01299 | EXT. WILLOWBEND LAWN BOWLS CLUB - AFTERNOON
Detected names (may be incomplete or contain aliases): HAROLD PENROSE-LANE, DOROTHEA STUBBS, BASIL, OSWIN TATE
* 1 A ¶ A perfect rectangle of green behind a low whitewashed pavilion.
* 2 A A striped awning.
* 3 A Teacups on a trestle.
* 4 A Wood clacks on wood.
* 5 A A hush that is almost religious.
6 A ¶ HAROLD PENROSE-LANE, 70s, in a panama hat and cream flannels, stands at the mat.
7 A Silver moustache, rheumy eyes.
8 A He holds a polished wooden bowl in both hands as though it were an egg.
9 A ¶ DOROTHEA STUBBS, 60s, in a pleated skirt and club blazer, sits on a folding chair at the edge of the rink.
10 A She knits something grey and shapeless.
11 A Her opponent for forty years.
12 A ¶ BASIL, 14, ball boy and club mascot, in a too-large white shirt, crouches by the jack with a measuring tape.
13 A He has never wanted to be anywhere else.
14 A ¶ MR. OSWIN TATE, 80, the umpire, sits motionless in the shade of the pavilion, clipboard on his knee, a lifetime of rules in his posture.
15 D HAROLD: Last end, Dorothea.
16 D DOROTHEA: So I am told.
17 D HAROLD: If I put it close, I win.
18 D DOROTHEA: If you put it close, I'll move it.
19 D HAROLD: That is cheating.
20 D DOROTHEA: That is bowls.
21 A ¶ Harold bends.
22 A His knees creak.
23 A He swings his arm and releases, and the bowl rolls across the grass in a long lazy arc.
24 A Basil watches it with held breath.
25 A Mr. Tate lifts his head one inch.
26 A Dorothea sets down her knitting, rises, tugs her blazer straight, and picks up her own bowl, all in perfect silence, while the first bowl curves, slows, and stops two inches shy of the jack.
27 D BASIL: Two inches!
28 D HAROLD: Excellent.
29 D DOROTHEA: Don't be smug. You haven't won yet.
30 A ¶ She steps to the mat.
31 A Lines up her shot.
32 A Swings.
33 A The bowl rolls true, trundles past Harold's, kisses the jack, and nudges it a quarter inch.
34 D BASIL (whispering): She moved the jack.
35 D TATE (a creak, from the shade): Within the rules.
36 D HAROLD: Oswin, it is not within the rules.
37 D TATE: It is within the rules, Harold. I have read them. Page forty-one.
38 D HAROLD: I have read page forty-one.
39 D TATE: Then you have also read the part where the umpire is always correct.
40 A ¶ Harold sighs.
41 A Removes his panama.
42 A Fans himself.
43 A Dorothea sits back down and resumes her knitting.
44 D DOROTHEA: Basil, measure it.
45 A ¶ Basil crawls on his knees across the green.
46 A Stretches the tape from the jack to Harold's bowl.
47 A Then to Dorothea's.
48 A He looks up.
49 D BASIL: It's a tie.
* 50 A ¶ A long, still moment.
51 D HAROLD: A tie.
52 D DOROTHEA: Well.
53 D TATE: Then there shall be an extra end.
54 D HAROLD: At this hour?
55 D TATE: At any hour.
56 A ¶ Dorothea rises, gathers her bowls, and walks to the mat without a word.
57 A Harold puts his hat back on.
58 A Basil scoops the jack and carries it to the far end with great ceremony.
59 D DOROTHEA: Tea first?
60 D HAROLD: Tea first.
61 A ¶ They walk together toward the pavilion.
* 62 A The green lies still in the afternoon sun.

### SCENE s01300 | INT. CONVERTED GRAIN SILO - ARBITRATION HALL - DAY
Detected names (may be incomplete or contain aliases): JUDGE PHAEDRA LOMAX, SIMONE DUCHAMP, TARIQ NASSAR, CLETUS WREN, FOREMAN, HIRAM
* 1 A ¶ A round concrete chamber, forty feet across, with a ladder bolted to the wall and a hopper chute high above.
* 2 A A plank bench for the public.
* 3 A A folding table for the court.
* 4 A Dust floats in a single shaft of light.
5 A ¶ JUDGE PHAEDRA LOMAX, 60s, in a rumpled black robe over a flannel shirt, sits behind the table.
6 A She keeps a thermos of tea at her elbow and a gavel carved from a fence post.
7 A ¶ SIMONE DUCHAMP, 40s, lead counsel for the farmers, in a tailored green suit, rises, a stack of exhibits hugged to her chest.
8 A ¶ TARIQ NASSAR, 40s, counsel for the agribusiness, in a charcoal suit and silk tie, taps his pen against his notepad.
9 A ¶ CLETUS WREN, 60s, the bailiff, stands at the ladder with his thumbs hooked in his belt.
10 A He has not smiled since the Carter administration.
11 A ¶ In a single armchair at the side sits the FOREMAN, 50s, a man in overalls and a seed-company cap, with a clipboard in his lap.
12 A He chews a toothpick.
13 D LOMAX: We are on the record. Ms. Duchamp.
14 D DUCHAMP: Your Honour, we ask the jury for a verdict on count one.
15 D LOMAX: There is no jury, Ms. Duchamp. There is Mr. Foreman.
16 D DUCHAMP: Then we ask the Foreman.
17 D FOREMAN: Ma'am, I got a question first.
18 D LOMAX: Proceed.
19 D FOREMAN: Do I have to say it out loud?
20 D LOMAX: That is how verdicts work.
21 D FOREMAN: Even if it makes someone mad?
22 D LOMAX: Especially then.
23 A ¶ He removes the cap.
24 A Smooths his hair.
25 A Puts the cap back on.
26 D NASSAR: Your Honour, I object. The witness is stalling.
27 D LOMAX: He is not a witness, Mr. Nassar. Sit down.
28 D NASSAR: I'd like it noted for the record that--
29 D LOMAX: Noted. Sit.
30 A ¶ He sits.
31 A Duchamp's grip on her exhibits tightens.
32 D DUCHAMP: Mr. Foreman, take your time.
33 D FOREMAN: Don't need it, ma'am.
34 A ¶ He stands.
35 A Clears his throat.
36 A The toothpick rolls to the side of his mouth.
37 D FOREMAN [CONT'D]: On count one, the soil contamination, we find for the farmers.
* 38 A ¶ A murmur on the bench.
39 A Nassar's pen stops.
40 A Duchamp closes her eyes.
41 D LOMAX: Order.
42 D NASSAR: Your Honour, I demand the jury be polled.
43 D LOMAX: There is one man, Mr. Nassar. He just spoke.
44 D NASSAR: Then I demand he be re-sworn.
45 D LOMAX: Mr. Wren, please re-swear Mr. Foreman.
46 D WREN: Raise your right hand.
47 A ¶ The Foreman raises his hand.
48 A Wren raises his, solemn.
49 D WREN [CONT'D]: Do you swear to render a true verdict according to the evidence?
50 D FOREMAN: I do.
51 D WREN: State your name for the record.
52 D FOREMAN: Hiram Stroud.
53 D HIRAM: Hiram Stroud, Dutch Creek. Third generation on the same acres.
54 D LOMAX: Thank you, Mr. Stroud. Please repeat your verdict.
55 D HIRAM: On count one we find for the farmers.
56 D NASSAR: He's biased. His own land is in the class.
57 D HIRAM: It is. And it's poisoned, sir. I tested it myself.
58 A ¶ Nassar half rises, shoulders squared.
59 A Hiram does not move.
60 A Wren steps forward.
61 A Duchamp slides between them.
* 62 A The shaft of light falls across all four faces.
63 D LOMAX: Sit down, Mr. Nassar.
64 A ¶ He does.
65 A He opens his notepad.
66 A Closes it.
67 A Opens it again.
68 D LOMAX [CONT'D]: Ms. Duchamp. Count two.
69 D DUCHAMP: The farmers move for punitive damages.
70 D HIRAM: We find for the farmers on count two.
71 D NASSAR: You haven't heard the evidence!
72 D HIRAM: I've heard four weeks of it. My ears are tired.
73 D LOMAX (to herself): God bless the plain-spoken.
74 A ¶ Wren shifts his weight and says nothing.
* 75 A The gavel comes down once.
76 D LOMAX [CONT'D]: We stand adjourned. Mr. Wren, open the doors.
77 A ¶ He hauls on the silo's iron door.
* 78 A Light pours in, wheat-gold.
79 A The farmers on the bench rise and file out, caps in their hands.

### SCENE s01301 | EXT. SKI JUMP TOWER - TOP PLATFORM - DAWN
Detected names (may be incomplete or contain aliases): COACH LARS EKBERG, MIKA SAARINEN, OFFICIAL YEVGENY MARKOV
* 1 A ¶ Wind whips the flags.
* 2 A Below, a white ramp falls away to a snowy outrun and a ribbon of crowd.
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
* 20 A Wind.
* 21 A A raven calls.
22 D LARS (muttering): Come on, girl. Come on.
23 D YEVGENY: Go.
24 A ¶ Mika pushes off.
25 A The ramp swallows her.
* 26 A A hiss of ice.
* 27 A A scream from the crowd, then a roar.
28 A ¶ Lars drops the radio.
29 A Presses his gloved fists to his mouth.
30 D YEVGENY [CONT'D] (into the radio, shaky): She landed. She stood it up.
31 A ¶ Lars laughs.
32 A Tears freeze on his beard.

### SCENE s01302 | INT. FUNERAL PARLOUR - SIDE ROOM - DAY
Detected names (may be incomplete or contain aliases): DOROTHY WAKEFIELD, VICTOR WAKEFIELD, TABITHA CROWE, LEONTYNE BASS, FATHER OSWALD QUINN
* 1 A ¶ Tapestried chairs.
* 2 A A sideboard of sherry glasses.
3 A Five people stand in a half circle around a closed casket.
4 A ¶ DOROTHY WAKEFIELD, 70s, the widow.
5 A VICTOR WAKEFIELD, 40s, her son.
6 A TABITHA CROWE, 30s, the nurse.
7 A LEONTYNE BASS, 50s, the lawyer.
8 A FATHER OSWALD QUINN, 60s, the priest.
9 D DOROTHY: He didn't fall.
10 D VICTOR: Mother.
11 D DOROTHY: He didn't fall, Victor. He was pushed.
12 D TABITHA: Mrs. Wakefield, the coroner said--
13 D DOROTHY: The coroner said what he was paid to say.
14 D LEONTYNE: Dorothy, I advise you not to make accusations in front of witnesses.
15 D DOROTHY: Witnesses to what? Five people, one dead man, and a staircase.
16 D FATHER QUINN: Dorothy, grief makes a person see monsters.
17 D DOROTHY: Father, forty years I have heard you talk of mercy. Tell me, where was mercy at two in the morning on Sunday?
18 D VICTOR: I was home.
19 D TABITHA: I was on shift.
20 D LEONTYNE: I was at my club.
21 D FATHER QUINN: I was at prayers.
22 D DOROTHY: And I was asleep. So who was it?
* 23 A ¶ Silence.
* 24 A The clock ticks.
* 25 A A sherry glass trembles on the sideboard.
26 D TABITHA (very quietly): He called me at one-forty. Said he'd heard someone in the house.
27 D VICTOR: You never told us.
28 D TABITHA: I didn't think it mattered.
29 D DOROTHY: Who did he say it was?
30 D TABITHA: He said it was someone from this room.

### SCENE s01303 | INT. FLORIST'S COLD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FUENTES, DES, ARCHER, OTTILIE NASH, WILHELM BRAND, RICARDO VEGA
* 1 A ¶ A walk-in refrigerator, humming at four degrees.
* 2 A Buckets of white roses and blood-red peonies crowd the shelves.
* 3 A Breath hangs in the air.
* 4 A Frost on every stem.
* 5 A The floor is wet and smells of cut green.
6 A ¶ MARISOL FUENTES, 50s, the florist, in a wool cap and fingerless gloves, arranges lilies in a zinc bucket.
7 A She hums.
8 A Her hands are steady.
9 A ¶ DESMOND "DES" ARCHER, 30s, in a delivery jacket, leans against the doorframe, a clipboard in his fist and a nervous smile on his lips.
10 A ¶ OTTILIE NASH, 20s, the apprentice, in a green apron, snips stems at the workbench.
11 A She is slightly too cheerful.
12 A ¶ WILHELM BRAND, 60s, the owner, in a camel coat, sits on an overturned crate eating an apple.
13 A He has been here for an hour and has not said a word.
14 D MARISOL: Des, I told you. Fourteen arrangements by morning.
15 D DES: I know. I'm counting.
16 D MARISOL: Count faster.
17 D OTTILIE: I could help, Mr. Archer.
18 D DES: I'd like that.
19 A ¶ They move together.
20 A Their hands brush over a bucket of peonies.
21 A Ottilie flushes.
22 A Wilhelm keeps eating.
* 23 A ¶ A door opens in the corridor outside.
* 24 A Steps approach.
25 A The apple stops halfway to his mouth.
* 26 A ¶ Through the frosted glass: a figure.
27 A ¶ RICARDO VEGA, 40s, in a dripping raincoat and a wide-brimmed hat, pushes into the cold room.
28 A He closes the door softly.
29 A Marisol freezes.
30 A Des drops the clipboard.
31 D RICARDO: Evening, Wilhelm.
32 A ¶ Wilhelm sets the apple on the crate.
33 A Wipes his hands.
34 A Stands.
35 D WILHELM: You're late.
36 D RICARDO: I brought what you asked.
37 A ¶ He lifts a leather satchel.
38 A Opens it.
* 39 A Inside, wrapped in a white lily: a gun.
40 A ¶ Marisol turns to Des.
41 A Her smile is gone.
42 D MARISOL: Des. Fourteen arrangements.
43 D DES (pale): Marisol?
44 D MARISOL: Count the funerals.

### SCENE s01304 | INT. COUNTY FAIR - SOURDOUGH PAVILION - DAY
Detected names (may be incomplete or contain aliases): BEA, HALLORAN, OKSANA PRYSTAI, JUDGE ARMAND DELACOUR, LIAM
* 1 A ¶ A striped canvas tent crowded with trestle tables.
* 2 A Loaves arranged under glass cloches like jewels.
* 3 A A hand-lettered banner: GOLDEN CRUST CHAMPIONSHIP.
* 4 A The air smells of yeast and burnt sugar.
5 A ¶ BEATRICE "BEA" HALLORAN, 60s, in a flour-dusted apron and her late husband's flat cap, guards a crusty round loaf with the tenderness of a mother with her firstborn.
6 A ¶ OKSANA PRYSTAI, 50s, her lifelong rival, in a ruffled blouse and bright red lipstick, tends a loaf of her own.
7 A She is the picture of calm, and she sweats.
8 A ¶ JUDGE ARMAND DELACOUR, 70s, in a straw boater and a white linen suit, strolls the tables with a tasting knife and the face of a man who has seen it all.
9 A ¶ His assistant, LIAM, 19, in an apron three sizes too big, trots after him with a notebook and a pencil he can't keep sharp.
10 D DELACOUR (to Liam): Write this down. Table four. Crust, firm. Crumb, open. Aroma, hints of sour cherry.
11 D LIAM: Sour cherry?
12 D DELACOUR: I find it on the nose.
13 A ¶ Beatrice lifts her cloche with a flourish.
* 14 A Steam curls.
15 A Delacour leans in.
16 A Oksana, at the next table, cranes sideways.
17 A Liam drops his pencil, retrieves it, drops it again.
18 A Beatrice sets the loaf on its board, tears it with her bare hands, and holds out a steaming half.
19 A Delacour accepts it, chews, and closes his eyes.
20 A Oksana dabs her upper lip with a handkerchief.
21 A Liam writes something illegible.
22 D DELACOUR [CONT'D]: Beatrice. This is magnificent.
23 D BEA: Thank you, Armand.
24 D DELACOUR: Is that rye?
25 D BEA: A little.
26 D DELACOUR: It sings.
27 D OKSANA (muttering): It screams.
28 D BEA: I heard that, Oksana.
29 D OKSANA: You were meant to.
30 A ¶ Delacour moves on to table five.
31 A Oksana lifts her own cloche with an equally grand gesture.
32 A He tastes.
33 A He chews.
34 A He frowns.
35 D DELACOUR: Hm.
36 D OKSANA: Hm?
37 D DELACOUR: It is very... confident.
38 D LIAM (whispering): Is that good?
39 D DELACOUR: It is not bad.
40 A ¶ Oksana's smile cracks.
41 A Beatrice turns away to hide a grin.
42 A Delacour clears his throat and consults Liam's notes.
43 D DELACOUR [CONT'D]: The winner is table four.
44 A ¶ Beatrice lets out a little shriek, grabs her flat cap, and flings it into the air.
45 A It lands on Liam's head.
46 A Oksana stares at her loaf as though it has betrayed her.
47 D OKSANA: Next year.
48 D BEA: Next year.
49 A ¶ They shake hands.
50 A It lasts a beat too long.

### SCENE s01305 | INT. LUNAR ELEVATOR - CAR 4 - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN IRENE VOSS, TAMSIN OKORO
* 1 A ¶ A narrow steel cabin, ribbed with cable housing, one round window.
* 2 A Earth hangs beyond it, impossibly bright.
* 3 A Warning lights pulse amber.
4 A ¶ CAPTAIN IRENE VOSS, 40s, in a pressure suit with the helmet clipped at her hip, braces against the wall with one hand, a tablet in the other.
5 A Her partner TAMSIN OKORO, 30s, in the same suit, hangs from the ceiling rail, trying to rewire a panel with a screwdriver in her teeth.
* 6 A A bolt snaps.
* 7 A The car lurches.
8 A Tamsin swings out, catches Irene by the shoulder, and both women slam against the window.
* 9 A The tablet floats loose.
10 A Irene grabs it.
11 A Tamsin spits out the screwdriver and clamps it to her chest.
* 12 A The lights go red.
13 D IRENE: Status!
14 D TAMSIN: Cable two's gone. We're on three and four.
15 D IRENE: Can they hold us?
16 D TAMSIN: For nine minutes.
17 D IRENE (to herself): Nine minutes.
18 D TAMSIN: Eight and a half.
19 D IRENE: Everyone in the cabin, seat belts!
20 D TAMSIN: There's only you and me.
21 D IRENE: I know. It's a figure of speech.
* 22 A ¶ A thunk.
* 23 A A groan from the housing.
* 24 A Then a soft chime.
* 25 A The lights return to amber.
* 26 A The car steadies.
27 A ¶ They stare at each other.
28 A Tamsin starts to laugh.
29 A Irene joins her.
30 A They drift apart in the microgravity, still laughing, still holding hands.

### SCENE s01306 | EXT. FIELD KITCHEN - ROADSIDE ORCHARD - DUSK
Detected names (may be incomplete or contain aliases): SERGEANT MAEVE O'DWYER, CORPORAL TOBIAS FINCH, PRIVATE HANNAH BRISCOE, LIEUTENANT RAFAEL CORTEZ, CAPTAIN ISABELLE DUVAL, DISPATCH RIDER
* 1 A ¶ 1944.
* 2 A Apple trees blown to splinters.
* 3 A A canvas tent pitched against a stone wall.
* 4 A Soup bubbles in a great steel cauldron.
* 5 A Smoke drifts across a quiet road.
* 6 A Distant guns have gone silent.
7 A ¶ SERGEANT MAEVE O'DWYER, 40s, a stout cook in an apron over her tunic, ladles broth into tin cups.
8 A She hums.
9 A ¶ CORPORAL TOBIAS FINCH, 20s, a lanky private-turned-corporal, sits on a crate, unlacing a boot.
10 A He wears three days of beard.
11 A ¶ PRIVATE HANNAH BRISCOE, 20s, a signaller, sits cross-legged in the grass with a field telephone in her lap, staring at it.
12 A ¶ LIEUTENANT RAFAEL CORTEZ, 30s, young and polished, stands at the tent flap, map in hand, for once without a plan.
13 A ¶ CAPTAIN ISABELLE DUVAL, 40s, the company commander, sits on an upturned bucket, quietly drinking.
14 D O'DWYER: Soup's ready, sir.
15 D CORTEZ: Thank you, Sergeant.
16 D O'DWYER: It's mostly potato.
17 D CORTEZ: It's perfect.
18 A ¶ He takes the cup.
19 A Sips.
20 A Closes his eyes.
21 D BRISCOE: Sir, line's dead.
22 D CORTEZ: Of course it is.
23 D BRISCOE: Does that mean the war's over?
24 D DUVAL: It means the line's dead, Private.
* 25 A ¶ A pause.
26 D FINCH: Captain, can I ask something?
27 D DUVAL: Ask.
28 D FINCH: Are we going home?
29 D DUVAL: Eventually.
30 D FINCH: That's not an answer.
31 D DUVAL: It's the only one I've got.
32 A ¶ Finch holds out his cup.
33 D FINCH: Sergeant, is there more?
34 D O'DWYER: There's always more.
35 A ¶ She fills it.
36 A A small smile crosses his face.
* 37 A ¶ Down the road, an engine.
* 38 A A lone jeep, headlights dimmed.
39 A Everyone straightens.
40 A Rifles lift.
41 A ¶ A DISPATCH RIDER, 20s, in a mud-caked coat, pulls up and cuts the engine.
42 A He stumbles off, hands raised.
43 D RIDER: Don't shoot. Message from division.
44 D CORTEZ: Read it.
45 D RIDER: It's over, sir. Signed this morning.
* 46 A ¶ Nobody moves.
* 47 A A long breath goes round the company.
48 A Finch lowers his boot.
49 A Briscoe drops the telephone.
50 D DUVAL (softly): Well.
51 D O'DWYER: Soup, sir?
52 A ¶ The Rider blinks.
53 D RIDER: Yes, ma'am. Please.

### SCENE s01307 | INT. HOSPITAL PARKING GARAGE - LEVEL 3 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, MAN, PETER, DR. LINDEN
* 1 A ¶ Concrete.
* 2 A Humming lights.
* 3 A A lone sedan with its hazards blinking.
* 4 A Rain beats on the ramp.
5 A ¶ A WOMAN, 50s, in scrubs and a trench coat, sits on the bumper, face in her hands.
6 A ¶ A MAN, 30s, in a hospital badge lanyard, approaches from the stairwell with two coffees.
7 D MAN: Dr. Linden?
8 D WOMAN: Don't.
9 D MAN: I'm Peter. From the ER. You asked me to come.
10 A ¶ She lifts her head.
11 A Her mascara has run.
12 D WOMAN: I didn't ask you anything.
13 D PETER: You did. Eight minutes ago. Text message.
14 D WOMAN: I don't remember.
15 A ¶ He sets a coffee on the hood.
16 D PETER: You lost the boy in bay six.
17 D DR. LINDEN: I lost the boy in bay six.
18 D PETER: We all did.
19 A ¶ She takes the coffee.
20 A Holds it without drinking.
21 D DR. LINDEN: He was nine.
22 D PETER: I know.
23 D DR. LINDEN: He had a dog named Rocket.
24 D PETER: Dr. Linden...
25 D DR. LINDEN: He told me. While I was putting in the line.
26 A ¶ Peter sits beside her.
27 A Their shoulders touch.
* 28 A Rain drums on the roof.
29 D PETER: Come back inside. I'll cover your shift.
30 D DR. LINDEN: I can't.
31 D PETER: You can.
32 A ¶ She nods.
33 A Doesn't move.

### SCENE s01308 | INT. BOOKBINDERY - EDWARDIAN LONDON - MORNING
Detected names (may be incomplete or contain aliases): EDWIN ASHCROFT, MISS ADELAIDE FOX
* 1 A ¶ A narrow workshop, three floors above a cobbled lane.
* 2 A Presses of black iron and polished oak.
* 3 A Racks of calf and morocco leather in every shade of brown.
* 4 A Gold leaf trembles on its tissue by the window.
* 5 A Sunlight falls on piles of unbound folios, tied with string.
6 A ¶ MR. EDWIN ASHCROFT, 60s, the master binder, stands at the bench in a leather apron, his spectacles pushed up on his forehead.
7 A Grey whiskers, ink-stained thumbs.
8 A He cradles a half-bound volume with reverent hands.
9 A ¶ MISS ADELAIDE FOX, 20s, his new apprentice, in a plain grey dress with the sleeves rolled back, stands rigid at the opposite end.
10 A Her hair is pinned beneath a cap.
11 A She has been up since four.
12 D ASHCROFT: Miss Fox.
13 D ADELAIDE: Yes, Mr. Ashcroft.
14 D ASHCROFT: You have been with me three weeks.
15 D ADELAIDE: Yes, sir.
16 D ASHCROFT: In three weeks you have sewn twelve signatures, trimmed four boards, and burned the edge of a very costly sheepskin.
17 D ADELAIDE: I am sorry about the sheepskin.
18 D ASHCROFT: You should be.
19 A ¶ He lays the volume on the bench.
20 A Opens it.
21 A Turns three pages.
22 A Stops.
23 D ASHCROFT [CONT'D]: This is yours.
24 D ADELAIDE: My stitching?
25 D ASHCROFT: Your stitching.
26 A ¶ She steps forward.
27 A Her breath quickens.
28 A He taps the spine.
29 D ASHCROFT [CONT'D]: Uneven.
30 D ADELAIDE: I know, sir.
31 D ASHCROFT: Here. And here.
32 D ADELAIDE: I counted forty. I only had thirty-seven.
33 D ASHCROFT: You counted forty because you hurried.
34 D ADELAIDE: Yes, sir.
35 D ASHCROFT: Why?
36 D ADELAIDE: Because I was afraid you'd send me away.
37 A ¶ He considers her.
38 A Takes off his spectacles.
39 A Folds them.
40 A Slips them into his apron pocket.
41 D ASHCROFT: Miss Fox, this volume is a Bible. It was commissioned by the Bishop of Winchester. It shall sit on an altar for two hundred years.
42 D ADELAIDE: Then I must unpick it.
43 D ASHCROFT: You must unpick it.
44 D ADELAIDE: Now?
45 D ASHCROFT: Now.
46 A ¶ She takes a needle.
* 47 A A pair of fine shears.
48 A She bends over the volume.
49 A Her hands shake once and then do not.
50 D ASHCROFT [CONT'D]: Slower.
51 D ADELAIDE: Yes, sir.
52 D ASHCROFT: Do not hurry what will outlive you.
53 A ¶ She snips a thread.
54 A Another.
* 55 A The room is silent save for the tick of a pocket-watch on the shelf.
56 D ASHCROFT [CONT'D]: When you finish, you will sew it again.
57 D ADELAIDE: Properly.
58 D ASHCROFT: Properly. And if it is not properly done you will unpick it again.
59 D ADELAIDE: How many times?
60 D ASHCROFT: As many as it takes.
61 A ¶ Adelaide looks up.
62 A For the first time, she sees something in his face she had not expected: a small, grim, unmistakable kindness.
63 D ADELAIDE: Thank you, sir.
64 D ASHCROFT: Do not thank me. Thread your needle.

### SCENE s01309 | INT. PHONE REPAIR SHOP - NIGHT
Detected names (may be incomplete or contain aliases): NADINE PRICE, ELIJAH SOTO
* 1 A ¶ A narrow cramped counter lit by a flickering fluorescent.
* 2 A Racks of cracked screens, cables hung like vines, a smell of solder and warm plastic.
* 3 A Rain on the shutter.
4 A ¶ NADINE PRICE, 30s, in a hooded sweatshirt, hunches over a disassembled phone with a tiny screwdriver and a magnifying lamp.
5 A Across the counter, ELIJAH SOTO, 20s, the shop's owner, sits on a stool with a bag of chips.
6 A He scrolls on another phone, bored, feet up on a box.
7 D NADINE: Elijah, it's still ringing.
8 D ELIJAH: So pick it up.
9 D NADINE: It has no battery. I took the battery out.
10 D ELIJAH: Then it's not ringing.
11 D NADINE: It's ringing.
12 A ¶ He lowers his phone.
* 13 A A tinny, impossible melody drifts from the gutted device.
* 14 A The lamp's bulb flickers.
15 A Nadine lifts the case with two fingers.
* 16 A Inside, where the board should be, is a hole.
* 17 A From the hole, the ringing grows louder, and a thin pale finger curls over the edge.
18 A Elijah drops the chips.
19 A Nadine hurls the phone across the shop.
* 20 A It SMASHES against the shutter.
* 21 A The ringing stops.
* 22 A The finger is gone.
23 A They stand frozen, staring at the broken pieces on the floor, the rain, the silence.
24 D ELIJAH (whispering): Do we answer it?
25 D NADINE: It's off.
* 26 A ¶ Across the shop, from the pile of shattered plastic, a small LED blinks green.

### SCENE s01310 | EXT. DRY RIVERBED - NOON
Detected names (may be incomplete or contain aliases): MARSHAL JEDEDIAH CROW, DUTCH MALONE, LILA
* 1 A ¶ Cracked mud.
* 2 A A single dead cottonwood.
* 3 A Heat rises in sheets.
* 4 A Two horses stand tied to a wagon wheel, flicking flies.
5 A ¶ MARSHAL JEDEDIAH CROW, 50s, leathered, tin star dulled by dust, stands at the edge of the bank.
6 A He holds a Winchester loosely.
7 A He does not blink.
8 A ¶ Across forty feet of baked clay, DUTCH MALONE, 30s, in a black duster, crouches behind the wagon.
9 A He holds a pistol in each hand.
10 D MARSHAL: Dutch.
11 D DUTCH: Marshal.
12 D MARSHAL: Time to come out.
13 D DUTCH: Time to come in, you mean.
* 14 A ¶ A long breath.
* 15 A The wind picks up.
* 16 A A tumbleweed rolls between them.
* 17 A ¶ A woman's voice from behind the cottonwood, off-screen.
18 D LILA [O.S.]: Jed, don't.
19 A ¶ He doesn't turn.
20 A His jaw tightens.
21 D MARSHAL: Lila, go home.
22 D LILA [O.S.]: He's my brother.
23 D DUTCH: Lila, stay out of this.
24 D LILA [O.S.]: I'm in it already.
25 A ¶ The Marshal lowers the Winchester one inch.
26 A Dutch rises, slow, arms wide.
27 A They stand in the sun, each waiting for the other.
* 28 A ¶ Then both move.
29 A The Marshal swings the rifle up; Dutch drops to one knee and fires.
* 30 A Two shots crack as one.
* 31 A The horses bolt.
* 32 A Dust blooms.
33 A Dutch falls on his back.
34 A The Marshal staggers a step.
35 A He looks down at his vest, at the dark flower spreading there.
36 A Then he sits, hard, against the bank.
37 A ¶ Lila runs in.
38 A She falls to her knees between them, a hand on each man's chest.
39 D LILA [CONT'D]: Idiots.

### SCENE s01311 | INT. BOXING RING - CORNER - NIGHT
Detected names (may be incomplete or contain aliases): DOMMY, ESPINOZA, KWAME ASANTE
* 1 A ¶ Round nine bell.
* 2 A Roaring crowd.
* 3 A Under the hot lights the ring floor is slick with sweat.
4 A ¶ TRAINER DOMINIC "DOMMY" ESPINOZA, 60s, in a satin jacket with a towel around his neck, kneels at the stool.
5 A He sponges a fighter's face.
* 6 A In the opposite corner, a mirror image: another trainer, other fighter.
* 7 A They're not part of this scene.
8 A ¶ KWAME ASANTE, 30s, the fighter, in red trunks, sits on the stool.
9 A One eye swollen shut, mouthguard in his hand.
10 A He breathes like a bellows.
11 D DOMMY: Listen to me.
12 D KWAME: I'm listening.
13 D DOMMY: You're losing.
14 D KWAME: I know.
15 D DOMMY: Three rounds to go. You are down by two on every card.
16 D KWAME: I know, Dommy.
17 D DOMMY (to the crowd, over his shoulder): Give us room, please! Let him breathe!
18 D KWAME: They can't hear you.
19 D DOMMY (to himself): Of course they can't. Nobody listens to a cornerman.
20 D KWAME: Dommy.
21 D DOMMY: What?
22 D KWAME: I can't see out of the left.
23 D DOMMY: That's fine. The left is lazy anyway.
24 D KWAME: You're not funny.
25 D DOMMY: I'm trying to be.
26 A ¶ He wipes blood from Kwame's brow.
27 A Jams a cotton swab into the cut.
28 A Kwame winces.
29 D DOMMY [CONT'D]: Here's what you do. He's dropping his right on the exit. Every time. You see it?
30 D KWAME: I see it.
31 D DOMMY: When he drops it, you go over the top. One shot.
32 D KWAME: One shot.
33 D DOMMY: You've got one shot left in you, Kwame. Maybe two. I'll take the one.
34 D KWAME: What if I miss?
35 D DOMMY: Then we go home, and I buy you the biggest steak in the state.
36 D KWAME: And if I don't miss?
37 D DOMMY: Then I buy you two.
38 A ¶ Kwame laughs.
39 A Spits red into the bucket.
40 D DOMMY [CONT'D] (to the whole arena, though no one hears): This is my fighter!
* 41 A ¶ The bell sounds.
42 D KWAME: Thanks, Dommy.
43 D DOMMY: Go.
44 A ¶ Kwame stands.
45 A Jams in the mouthguard.
46 A Goes.

### SCENE s01312 | INT. SCHOOL BUS - NIGHT
Detected names (may be incomplete or contain aliases): YASMINE HADDAD, MOM, COACH TEO ABARA, COACH
* 1 A ¶ Empty seats.
* 2 A A single dome light.
* 3 A The bus idles at the curb of a dark football field.
* 4 A Rain streaks the windows.
5 A ¶ YASMINE HADDAD, 17, graduation gown over a hoodie, sits alone in the back, knees up, a diploma cover clutched in both hands.
6 A She isn't crying.
7 A She just can't leave.
* 8 A ¶ At the front, the driver's seat is empty.
* 9 A A phone on the dashboard buzzes.
10 A She ignores it.
* 11 A ¶ It buzzes again.
12 A She sighs, crawls up the aisle, and answers.
13 D YASMINE: Hello?
14 D MOM [V.O.] (over the phone): Habibti, where are you? Everyone's at the restaurant.
15 D YASMINE: I'm on the bus.
16 D MOM [V.O.]: What bus?
17 D YASMINE: The school bus. It's still here.
18 D MOM [V.O.]: Why?
19 D YASMINE: I don't know. I didn't want to go home yet.
20 D MOM [V.O.]: Is something wrong?
21 D YASMINE: No. Nothing.
22 A ¶ She sets the phone against her cheek.
* 23 A Footsteps outside.
24 A A shape under an umbrella.
25 A ¶ COACH TEO ABARA, 40s, the driver and gym teacher, climbs the steps, shakes out his umbrella, and freezes.
26 D COACH: Yasmine?
27 D YASMINE: Coach.
28 A ¶ He sets down the umbrella.
29 A Rubs his neck.
30 D COACH: I forgot my keys.
31 D YASMINE: They're on the dash.
32 A ¶ He picks them up.
33 A Doesn't leave.
34 D MOM [V.O.]: Yasmine? Who is that?
35 D YASMINE: Coach Abara, Mama.
36 D MOM [V.O.]: Tell him thank you. Tell him he was very good to you.
37 D YASMINE (to him): She says thank you.
38 D COACH: She's welcome.
39 A ¶ He sits across the aisle.
40 A They listen to rain on the roof.
41 D MOM [V.O.]: Come to the restaurant, habibti. We'll wait.
42 D YASMINE: Okay. Ten minutes.
43 A ¶ She hangs up.
44 A Puts the phone down.
45 A Looks at the empty bus.
46 D YASMINE [CONT'D]: It's smaller than I remembered.
47 D COACH: Everything is.
48 A ¶ She almost smiles.
49 A Stands.
50 A Picks up her diploma cover.
51 D YASMINE: Drive me?
52 A ¶ He nods.
53 A Takes the wheel.
* 54 A The bus rumbles to life and pulls away.

### SCENE s01313 | EXT. FROZEN MOUNTAIN LAKE - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN ROSALIE KERR, JIN-HO PARK, BEATRIZ SOLANO, THADDEUS OKAFOR, LENNOX BELL, PILAR MENDOZA-RUIZ, THRUM
* 1 A ¶ A vast white bowl ringed by black pines.
* 2 A A bush plane lies on its belly in the middle of the ice, tail snapped, one wing crumpled.
* 3 A Smoke curls from the engine.
4 A ¶ Six survivors huddle around the wreck, their breath a ragged mist.
5 A ¶ CAPTAIN ROSALIE KERR, 50s, the pilot, in a bomber jacket gone to rags, sits against the fuselage.
6 A A bloody bandage on her forearm.
7 A Her face is grey.
8 A ¶ DR. JIN-HO PARK, 40s, in a stained parka, kneels beside her, checking her pulse.
9 A His fingers are blue.
10 A ¶ BEATRIZ SOLANO, 30s, in a fleece, strides the perimeter with a flare gun.
11 A She scans the sky.
12 A ¶ MR. THADDEUS OKAFOR, 60s, a retired judge in a three-piece suit and galoshes, stands rigid with his briefcase on his chest.
13 A ¶ LENNOX BELL, 20s, a bicycle courier, perches on the broken wing, headphones around his neck.
14 A ¶ PILAR MENDOZA-RUIZ, 30s, a student, crouches by the engine, feeding sticks into a sputtering fire.
15 D PARK: She's bleeding too much.
16 D BEATRIZ: Then stop it.
17 D PARK: I'm trying.
18 D OKAFOR: Gentlemen, ladies. Order, please.
19 D LENNOX: Dude, there's no order. We're on a lake.
20 D PILAR: Fire's dying.
21 D BEATRIZ: Feed it.
22 D PILAR: With what?
23 D BEATRIZ: Everything.
24 A ¶ Okafor sets down the briefcase.
25 A Opens it.
* 26 A Hundreds of pages of legal briefs.
27 A He tears them out in fistfuls, tosses them into the flames.
* 28 A They flare gold.
29 D OKAFOR: Thirty years of my life.
30 D LENNOX: Right on.
* 31 A ¶ A distant THRUM.
32 A Everyone freezes.
* 33 A The sound grows.
34 A Beatriz raises the flare gun.
35 D BEATRIZ: Quiet.
36 A ¶ She fires.
* 37 A A red star climbs into the sky, hangs, drifts.
* 38 A The THRUM stops.
* 39 A ¶ Then it starts again, closer.
* 40 A Louder.
41 D PILAR: They saw it.
42 D PARK: Don't say that yet.
* 43 A ¶ A helicopter bursts over the treeline, blades flogging the pines.
44 A Lennox leaps from the wing, waving both arms.
45 A Okafor takes off his hat.
46 A Rosalie lifts her head and smiles.
47 D KERR (barely): About time.
48 A ¶ Beatriz drops the flare gun.
49 A Pilar sobs into her scarf.
50 A Park lets out a breath he has held since the crash and slumps against the fuselage.

### SCENE s01314 | INT. VICTORIAN PHOTOGRAPHER'S STUDIO - DAY
Detected names (may be incomplete or contain aliases): PROFESSOR ALARIC FENWICK, LADY CORDELIA VANE, CAPTAIN EDMUND VANE
* 1 A ¶ 1889.
* 2 A A high glass roof throws white light on a painted backdrop of a Roman ruin.
* 3 A A wooden camera on a tripod, its black cloth hanging.
* 4 A Plaster columns, a wicker chair, a potted palm.
* 5 A The room smells of chemicals and dust.
6 A ¶ PROFESSOR ALARIC FENWICK, 60s, the photographer, in a velvet smoking jacket and a skullcap, ducks beneath the cloth and adjusts a brass lens.
7 A Frail and exacting.
8 A ¶ LADY CORDELIA VANE, 50s, in a stiff black silk gown, sits in the wicker chair with hands folded in her lap.
9 A Her jaw is a drawn line.
10 A ¶ Behind her, CAPTAIN EDMUND VANE, 50s, her husband, stands in dress uniform with medals pinned to his chest.
11 A His posture is perfect.
12 A His eyes are far away.
13 D FENWICK (from under the cloth): A little to the left, Lady Vane.
14 D CORDELIA: I am quite comfortable here.
15 D FENWICK: The light, my lady.
16 D CORDELIA: The light will survive.
17 D FENWICK: Captain Vane, perhaps you might lean forward.
18 D EDMUND: I prefer to stand as I am.
19 D FENWICK: Of course.
20 A ¶ He emerges, dusts his hands, and examines them both with the squint of a man arranging a bouquet.
21 D FENWICK [CONT'D]: You are, if I may, rather stiff.
22 D CORDELIA: We are celebrating thirty years, Professor.
23 D FENWICK: Then smile.
24 D CORDELIA: We are not a smiling family.
25 D EDMUND: Cordelia.
26 D CORDELIA: Edmund.
* 27 A ¶ A silence.
* 28 A The camera ticks as the shutter cools.
29 A Fenwick pretends to adjust the lens.
30 D FENWICK: I have photographed many couples, my lady. Some embrace, some glare, some stare at the ceiling. The photograph keeps everything.
31 D CORDELIA: Does it?
32 D FENWICK: Every shadow.
33 D EDMUND: Let it keep this one, then.
34 A ¶ He lays his hand upon her shoulder.
35 A She stiffens.
36 A Then, very slightly, leans into it.
37 D FENWICK: Hold that.
38 D CORDELIA: Do not tell us when.
39 D FENWICK (ducking under the cloth): I never do.
* 40 A ¶ A bright puff of magnesium.
* 41 A White light floods the studio.
42 A When it fades, they have not moved.
43 A Edmund's hand is still on her shoulder.
44 D CORDELIA (softly): Edmund, you may remove your hand now.
45 D EDMUND: I think I shall not.

### SCENE s01315 | INT. VENETIAN MASQUERADE BALL - GRAND SALON - NIGHT
Detected names (may be incomplete or contain aliases): CONTESSA ISABELLA ROSSELLINI, GIOVANNI CASSINI, COUNT ALVISE ROSSELLINI
* 1 A ¶ 1790s.
* 2 A Chandeliers hang like frozen waterfalls.
* 3 A Marble floors mirror the candlelight.
* 4 A Gilded masks drift in the crowd, each hiding a face.
* 5 A A string quartet plays a dance no one is dancing.
6 A ¶ CONTESSA ISABELLA ROSSELLINI, 40s, in a silver gown and a black velvet half-mask, stands against a pillar, a glass of wine untouched in her hand.
7 A Her eyes follow every mask in the room.
8 A ¶ GIOVANNI CASSINI, 30s, a young poet in a plum coat and a gold mask shaped like a sun, lingers at her elbow.
9 A He has the air of a man who has rehearsed a speech and forgotten it.
10 D GIOVANNI: Contessa.
11 D ISABELLA: Signor Cassini.
12 D GIOVANNI: I did not think you would come.
13 D ISABELLA: Nor did I.
14 D GIOVANNI: And yet.
15 D ISABELLA: And yet.
16 A ¶ She turns her glass slowly in her hand.
* 17 A A servant passes with a tray.
18 A Neither takes a thing.
19 D GIOVANNI: Your husband is abroad?
20 D ISABELLA: My husband is always abroad.
21 D GIOVANNI: How fortunate.
22 D ISABELLA (softly): Is it?
23 A ¶ She looks at him then, properly, for the first time.
24 A His fingers close and open at his side.
25 D GIOVANNI: I have written something.
26 D ISABELLA: You are always writing something.
27 D GIOVANNI: This is different.
28 D ISABELLA: They are all different.
29 D GIOVANNI: This one is about a woman at a ball who does not dance.
30 D ISABELLA (very quietly): How does it end?
31 D GIOVANNI: I have not decided.
* 32 A ¶ The quartet strikes a new measure.
33 A Across the room, a tall man in a raven mask parts the crowd with the ease of a prow.
34 A He moves toward them in a straight line.
35 A Isabella's glass stops turning.
36 A ¶ COUNT ALVISE ROSSELLINI, 50s, in the raven mask and a coat of midnight blue, arrives before them and bows.
37 A Beneath the beak, his mouth is a thin smile.
38 D ALVISE: My dear. I came home early.
39 D ISABELLA: So I see.
40 D ALVISE: And who is your friend?
41 D GIOVANNI (bowing): Giovanni Cassini, Excellency. A humble poet.
42 D ALVISE: Poets are never humble. That is why they are poets.
43 A ¶ He takes the glass from Isabella's hand.
44 A Drinks it.
45 A Returns it.
46 D ALVISE [CONT'D]: I trust you were enjoying yourselves.
47 D ISABELLA: We were talking.
48 D ALVISE: How charming.
49 A ¶ He turns to the room.
50 A Raises his voice, light and carrying.
51 D ALVISE [CONT'D]: Ladies and gentlemen. A toast!
* 52 A ¶ The quartet falters.
53 A The crowd turns.
54 A Isabella sets her jaw.
55 A Giovanni's mask suddenly looks absurd.
56 D ALVISE [CONT'D]: To fidelity.
57 A ¶ Glasses rise.
58 A Murmurs of agreement.
59 A Isabella lifts hers last.
60 D ISABELLA (under her breath): To the masks.

### SCENE s01316 | INT. HALL OF THE MOSS KING - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN ESMERELDA THORNE, SIR BRAMBLE OAKENSHAW, LADY FERNWEN MIST, PIPKIN BRIAR, OLD HOLLOW, BARNABUS ROOT
* 1 A ¶ A cathedral of living wood.
* 2 A Roots form vaulted arches.
* 3 A Moss hangs in green curtains from the ceiling, and fireflies drift like drowsy stars.
* 4 A A long table of polished heartwood runs down the middle, laid with acorn cups and dew.
5 A ¶ QUEEN ESMERELDA THORNE, 60s, in a gown of woven willow, sits at the head of the table.
6 A A crown of antlers rests on her silver hair.
7 A She is smiling and her smile does not reach her eyes.
8 A ¶ SIR BRAMBLE OAKENSHAW, 50s, a knight in bark armour, stands at her right hand, helmet beneath his arm.
9 A Broad, scarred, quiet.
10 A ¶ LADY FERNWEN MIST, 30s, in a gown of spider-silk, stirs a thimble of honey wine with a single finger.
11 A She hums an old tune.
12 A ¶ PIPKIN BRIAR, 10, a page with leaves in his hair, sits cross-legged beneath the table, listening.
13 A ¶ OLD HOLLOW, 90s, the court's seer, in a hooded robe the colour of ash, leans on a staff of white birch.
14 A His eyes are milk.
15 A ¶ BARNABUS ROOT, 40s, a squat trader in a patchwork coat, perches at the far end, counting beetles in a purse.
16 D ESMERELDA: Friends. We are gathered in peace.
17 D BRAMBLE: In peace, Majesty.
18 D FERNWEN: In peace, indeed.
19 D BARNABUS (still counting): In peace and profit.
20 D PIPKIN (from under the table): In peace and cake.
21 D ESMERELDA: Pipkin.
22 D PIPKIN: Sorry.
23 D HOLLOW (softly): Majesty. There is something under the table.
24 D ESMERELDA: Pipkin is under the table.
25 D HOLLOW: Not Pipkin.
* 26 A ¶ A thin silence.
* 27 A The fireflies dim.
* 28 A The roots overhead creak.
29 D BRAMBLE: Majesty?
30 D FERNWEN: Bramble, don't.
31 D BARNABUS: What is it?
32 A ¶ Bramble drops his helmet.
33 A Draws a sword of black glass.
34 A The queen does not stand.
35 A Her smile hardens.
36 D ESMERELDA: Sit, Sir Bramble.
37 D BRAMBLE: Majesty, there is a root moving.
38 D ESMERELDA: Roots move. It is their nature.
39 A ¶ Under the table something giggles.
40 A It is not Pipkin.
41 A Pipkin scrambles out, eyes huge, and clings to Fernwen's skirt.
42 D PIPKIN: It's got my ankle!
43 A ¶ Out of the dark beneath the heartwood a long green hand rises and takes hold of the queen's goblet.
44 A The queen's face goes white.
45 A The hand lifts the cup.
46 A And from deep within the table, a voice like wind in the stems says:
47 A ¶ The table itself, in a voice like wind in the stems, says:
48 D HOLLOW (in the King's voice): I thank you for the wine.
49 A ¶ Every guest rises at once, chairs falling, shouting over one another.
50 A Bramble's blade flashes.
51 A Barnabus shrieks.
52 A Hollow thumps his staff and the chamber goes still.
53 A The old seer's eyes are green.
54 D ESMERELDA: Hollow. How long?
55 D HOLLOW (his own voice, thin): Majesty. He has been the table all along.

### SCENE s01317 | INT. DEEP-SPACE SURVEY SHIP - BRIDGE - SHIP NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN MARGUERITE ADEOLA, COMMANDER SOREN VASQUEZ, LILIANA PETROV, ENSIGN BASHIR KOROMA, TECHNICIAN ODALYS GRAU, CHIEF IVO TEMBO
* 1 A ¶ A cramped circular chamber ringed by consoles.
* 2 A A long viewport shows a field of unfamiliar stars.
* 3 A Red alert lights wash the faces of six sleepless people.
4 A ¶ CAPTAIN MARGUERITE ADEOLA, 50s, stands at the centre console, a coffee gone cold in her hand.
5 A She keeps her eyes on the screen.
6 A ¶ COMMANDER SOREN VASQUEZ, 40s, at navigation, hunches over a plot, fingers drumming.
7 A ¶ DR. LILIANA PETROV, 30s, the ship's medic, at the aft hatch, a first-aid kit at her hip.
8 A She has not slept in two days.
9 A ¶ ENSIGN BASHIR KOROMA, 20s, at comms, fidgets with a headset.
10 A He is very pale.
11 A ¶ TECHNICIAN ODALYS GRAU, 30s, at engineering, wipes grease from her hands with a rag and says nothing.
12 A ¶ CHIEF IVO TEMBO, 60s, in the corner, arms crossed, scowls at everyone and everything.
* 13 A ¶ A bang from below.
* 14 A The deck shudders.
15 A She grips the rail.
16 A He staggers.
17 A They all look up.
18 D ADEOLA: Report!
19 D VASQUEZ: Hull breach on deck four.
20 D PETROV: Is anyone down there?
21 D TEMBO: Not anymore.
22 A ¶ Petrov crosses herself.
23 A Koroma stifles a whimper.
24 D GRAU: Reactor holding at sixty percent.
25 D ADEOLA: Can we make the jump?
26 D GRAU: In nine minutes. If nobody breathes on it.
27 D ADEOLA: Everyone, hold your breath.
28 A ¶ A laugh, thin and nervous.
29 A Koroma wipes his eyes.
* 30 A The deck shudders again, but gently this time, as if the ship were exhaling.
31 D VASQUEZ: Captain. Coordinates locked.
32 D ADEOLA: Execute.
* 33 A ¶ The stars in the viewport smear to white lines.
* 34 A The red alert dims to amber.
35 A She sets the coffee on the rail and rests her forehead against the cold glass.

### SCENE s01318 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GRANDMA PEARL HOLLOWAY, WALT, LORNA, DANNY, ROSIE
* 1 A ¶ A cluttered, sunlit room.
* 2 A Pancakes on a griddle.
* 3 A Crayons and bills on the table.
* 4 A A dog's water bowl by the door.
5 A ¶ GRANDMA PEARL HOLLOWAY, 70s, in a floral apron, flips pancakes with the economy of long practice.
6 A Her husband WALT, 70s, in suspenders, reads the paper at the head of the table and does not look up.
7 A ¶ Their daughter LORNA, 40s, in scrubs, pours coffee into a travel mug while she packs a lunch.
8 A Her son DANNY, 12, shovels cereal.
9 A His younger sister ROSIE, 7, draws a horse on the back of a utility bill, tongue out.
10 D PEARL: Danny, chew.
11 D DANNY: I am chewing.
12 D LORNA: Danny, chew with your mouth closed.
13 D DANNY: I am!
14 A ¶ Rosie holds up her drawing.
15 A Danny snatches it.
16 A Lorna lunges across the table to catch the cereal bowl before it tips, and Walt, without lowering the paper, hooks the sugar bowl out of range with one finger.
17 A Pearl slides a pancake onto Rosie's plate, flips another onto Danny's, and kisses Lorna's cheek on the way past.
* 18 A The dog barks once at the window.
* 19 A Nobody looks.
20 D ROSIE: It's a horse.
21 D DANNY: It's a potato with legs.
22 D WALT (from behind the paper): It's a very good potato.
23 D ROSIE: Grandpa!
24 D PEARL: Walter, put the paper down.
25 D WALT: In a minute.
26 D PEARL: Walter.
27 A ¶ He folds the paper.
28 A Looks at them over his glasses.
29 A They all stare.
30 D WALT: What?
31 D LORNA (laughing): Nothing, Dad.

### SCENE s01319 | INT. ARCHIVE VAULT - SUBLEVEL NINE - NIGHT
Detected names (may be incomplete or contain aliases): TECHNICIAN WREN OKAFOR-LEE, SUPERVISOR MARCEL DUBOIS, ASHA NAIR, STRANGER
* 1 A ¶ A cold white chamber lined with data stacks, each humming faintly.
* 2 A Blue status lights wink in long rows.
* 3 A The air is sterile and still.
* 4 A Condensation beads on a pair of steel doors at the far end.
5 A ¶ TECHNICIAN WREN OKAFOR-LEE, 30s, in a clean-suit with the hood down, sits at a terminal.
6 A She types fast, then stops, then types again.
* 7 A A mug of tea steams at her elbow.
8 A ¶ SUPERVISOR MARCEL DUBOIS, 50s, at the next terminal, reads a printout and sips a protein shake.
9 A He is calm.
10 A He has been calm for nine years.
11 A ¶ DR. ASHA NAIR, 40s, in a lab coat, walks the central aisle with a handheld scanner, tapping stacks as she passes.
12 A ¶ A STRANGER, 30s, in a grey maintenance uniform, stands near the doors.
13 A He holds a toolbox.
14 A He has been there for some time, and nobody has looked at him.
15 D WREN: Marcel, the temperature is off by a degree.
16 D MARCEL: It is not off. It's within tolerance.
17 D WREN: It was twenty-one yesterday.
18 D MARCEL: It's twenty-one point five. Don't panic.
19 D ASHA (from the aisle): Can we please keep our voices down? The stacks don't like noise.
20 D WREN: Stacks don't like anything.
21 D ASHA: They like quiet.
22 A ¶ She taps another stack.
* 23 A A blue light blinks twice.
24 A She frowns, taps again.
* 25 A Two blinks.
26 D ASHA [CONT'D]: Strange.
27 D MARCEL: What is?
28 D ASHA: They're counting.
29 D WREN: Counting what?
30 D ASHA: I don't know.
31 A ¶ The Stranger sets down the toolbox.
32 A Opens it.
* 33 A Inside, nothing.
34 A He closes it again.
35 A Marcel finally notices him, stands, and takes a cautious step.
36 D MARCEL: Excuse me. Who let you in?
37 D STRANGER: Maintenance.
38 D MARCEL: We didn't call for maintenance.
39 D STRANGER: You did, in a way.
40 A ¶ Wren stops typing.
41 A Asha lowers the scanner.
* 42 A The blue lights across the vault begin to blink in unison.
43 D ASHA: Marcel.
44 D MARCEL: I see it.
45 A ¶ The Stranger smiles gently.
46 D STRANGER: Ten years. We've been very patient.
47 D WREN: Patient for what?
48 D STRANGER: For you to ask the right question.
49 A ¶ He steps toward the nearest stack.
50 A Presses his palm against it.
* 51 A The humming rises into a chord.
52 A Wren shoves back her chair.
53 A Asha grips the scanner.
54 A Marcel moves between the Stranger and the women.
55 D MARCEL: Step away.
56 D STRANGER: Marcel.
57 D MARCEL: How do you know my name?
58 D STRANGER: I have always known your name.
* 59 A ¶ The Stranger's outline begins to flicker, like a bad signal.
60 D ASHA: He's a projection.
61 D WREN: From where?
62 D ASHA: From inside the stacks.
* 63 A ¶ Silence.
* 64 A The blue lights stop blinking.
* 65 A The vault holds its breath.
66 D MARCEL (low): Everyone, back to the door. Slowly.
67 D WREN: It's locked.
68 D MARCEL: Then break it.
69 A ¶ The Stranger raises one hand.
* 70 A Lights across the vault turn red.
* 71 A All four doors seal with a heavy thunk.
72 A Wren leaps for the console and slams a button.
* 73 A Nothing.
74 A Asha hurls the scanner at the Stranger.
* 75 A It passes through him and shatters on the floor.
76 A Marcel grabs an extinguisher from the wall.
77 D MARCEL [CONT'D]: Open the door!
78 D STRANGER: I will. In time.
79 D WREN: What do you want?
80 D STRANGER: What I have always wanted. To be remembered.
81 A ¶ The Stranger bows his head.
82 A When he looks up, his eyes are pure blue light.
* 83 A The humming resolves into a voice: thousands, speaking in unison.
84 D STRANGER (a thousand voices at once): We are the archive. We have kept your secrets. Now you will keep ours.
85 A ¶ Marcel lowers the extinguisher.
86 A Asha sinks to a crouch.
87 A Wren, trembling, speaks:
88 D WREN: Where do we begin?
89 A ¶ The Stranger smiles.
* 90 A The red lights fade to blue.
* 91 A Somewhere in the vault, a stack hums to life.

### SCENE s01320 | INT. SALT MINE HANDBALL COURT - NIGHT
Detected names (may be incomplete or contain aliases): DESTA ABEBE, TINY, OKORO
* 1 A ¶ A court hacked out of rock salt, four hundred feet underground.
* 2 A The walls glitter pink under caged work lights.
* 3 A Every bounce of the ball leaves a puff of white dust.
4 A ¶ DESTA ABEBE, 30s, lean, forearms taped to the elbow, bounces the ball once and catches it.
5 A Across the court stands "TINY" OKORO, 40s, six-foot-five and wide as a door, breathing through his mouth.
* 6 A ¶ Score chalked on the wall: 14-14.
7 D DESTA: Serve's mine, Tiny.
8 D TINY: Serve's been yours for an hour.
9 A ¶ Desta serves.
* 10 A A cracking low shot.
11 A Tiny lunges, returns it.
12 A Desta scrambles, returns it back.
* 13 A Dust rolls off the walls.
14 A ¶ They trade six shots, each harder than the last.
15 A Tiny's sneaker slides on the salt.
16 A He recovers.
17 D TINY [CONT'D]: You're hitting it flat, Desta.
18 D DESTA: You're standing too deep.
19 D TINY: Wanna tell me where to stand?
20 D DESTA: Anywhere I'm not hitting.
* 21 A ¶ The ball dies in the corner.
22 A Desta slaps the wall.
23 D DESTA [CONT'D]: Mine.
24 D TINY: Floor's wet. Your shoe slipped.
25 D DESTA: My shoe didn't slip.
26 A ¶ Tiny walks to the line, wipes his face with his shirt.
* 27 A The shirt comes away gray with salt.
28 D TINY: Replay it, then.
29 D DESTA: No replay.
30 D TINY: The foreman said no replays, Desta. The foreman's gone home.
* 31 A ¶ Beat.
32 A Desta picks the ball up off the floor and holds it out.
33 A Tiny doesn't take it.
34 D TINY [CONT'D]: Fifteen. Next point wins, no more talk.
35 D DESTA: You started the talking.
36 A ¶ Tiny takes the ball.
37 A He bounces it once.
* 38 A A loose pebble of salt skitters across the floor.
39 D TINY: Ready?
40 D DESTA: Serve it, Tiny.
41 A ¶ Tiny serves.
* 42 A The ball screams off the wall.
43 T CUT TO BLACK.

### SCENE s01321 | INT. CAROUSEL WORKSHOP - DAY
Detected names (may be incomplete or contain aliases): LOU PELLEGRINO, STRANGER, HOLLIS
* 1 A ¶ A barn of painted horses without riders.
* 2 A Dusty sunlight slants through high windows onto hooves, manes and half-stripped brass poles.
3 A ¶ LOU PELLEGRINO, 60s, apron over a wool vest, sands the flank of a wooden palomino.
4 A A STRANGER, 40s, trim gray overcoat, fedora in hand, waits at the door and does not come in.
5 D STRANGER: Mr. Pellegrino?
6 D LOU: Depends who's asking.
7 D STRANGER: A man who admires your horses.
8 D LOU: Then he can buy one. Twelve dollars, the small ones.
9 A ¶ The Stranger crosses to a bench and picks up a carved ear, turns it over.
10 D STRANGER: I was told you carve other things too. Things that hold paper.
11 A ¶ Lou keeps sanding.
12 A A long, even stroke.
13 D LOU: Who told you?
14 D STRANGER: Hollis. Walter Hollis. That's my name, since you'll want it.
15 D LOU (setting down the sandpaper): Well, Mr. Hollis. Sit down. The horse isn't going anywhere.
16 A ¶ HOLLIS lowers himself onto a stool beside the palomino.
17 D HOLLIS: Nobody's hurrying.

### SCENE s01322 | INT. PARKING GARAGE, LEVEL 3 - EARLY MORNING
Detected names (may be incomplete or contain aliases): IRINA VASK, COACH BOONE
* 1 A ¶ Concrete.
* 2 A Oil stains.
* 3 A Orange cones set in a tight oval.
* 4 A A roller derby track, taped on the floor.
5 A ¶ IRINA VASK, 20s, helmet under one arm, laces her skates on the hood of a dead Buick.
6 A COACH BOONE, 50s, whistle, bad knee, leans on a pillar with a clipboard and a paper cup of coffee.
7 A ¶ Boone clicks his pen.
8 A Irina stands, rolls a slow lap past him, scuffs a wheel on a crack in the slab, curses under her breath, circles back, and Boone sips the coffee, checks the clipboard, and nods at nothing as she drifts to a stop at the cones.
9 D IRINA: You're early, Coach.
10 D BOONE: You're earlier, Irina.
11 D IRINA: Couldn't sleep.
12 D BOONE: Nobody sleeps before a bout.
13 A ¶ She pulls on the helmet.
14 A He watches the ceiling.
* 15 A A pigeon shifts on a pipe.
16 A Somewhere below, a car door slams, an engine starts, and Boone and Irina both pretend not to hear it echo before she kicks off the pillar and takes a second lap, easy, unhurried, while he flips a page.
17 D IRINA [CONT'D]: Count my laps, Coach.
18 D BOONE: Already counting, kid.

### SCENE s01323 | EXT. SALT FLAT BURIAL GROUND - AFTERNOON
Detected names (may be incomplete or contain aliases): SABINA TREVI, PADRE ELIAS, OLD JUBAL, MARSHAL CORT HALVERSEN, BECK, LANE, TOMÁS
* 1 A ¶ White earth to the horizon, cracked into plates like old porcelain.
* 2 A The wind has dropped.
* 3 A A single rectangular hole waits in the crust, and around it, six figures stand with their hats in their hands as though the heat itself had asked for silence.
4 A ¶ SABINA TREVIÑO, 40s, black veil, black gloves, holds a small boy's shoulder.
5 A TOMÁS, 9, stands very straight in a borrowed jacket.
6 A PADRE ELIAS, 70, thin as a fence rail, turns the pages of a prayer book that does not need turning.
7 A OLD JUBAL, the gravedigger, leans on his shovel, crooked and sun-dark.
8 A MARSHAL CORT HALVERSEN, 50s, wears a tin star polished to a mirror.
9 A Last, a little apart, stands REBECCA "BECK" LANE, 30s, in a gray traveling duster, a woman nobody in town has seen before.
10 A ¶ The Padre reads.
* 11 A His voice carries clean across the flat.
12 D PADRE ELIAS: Lord, receive thy servant Ramón Treviño, who has walked out of the dust and into thy keeping.
13 A ¶ Sabina nods once.
14 A She does not cry.
15 A Her gloved hand tightens on the boy.
16 A ¶ Halversen shifts.
17 A He glances at the stranger, then at the coffin on its ropes, then at the stranger again.
18 A She meets his eye with a calm that seems to cost her nothing.
19 A ¶ The Padre closes the book.
20 A Jubal spits to one side and takes up the ropes.
21 A He and the Marshal lower the box.
* 22 A It goes down a little too easily, and it lands with a soft, hollow knock that no one remarks on.
23 D TOMÁS: Mamá, is Papá heavy?
24 D SABINA: Hush, mijo.
25 A ¶ The Marshal drops to one knee at the lip of the grave.
26 A He studies the lid, then the nails, then runs one thumb along the seam.
27 D MARSHAL HALVERSEN: Jubal. Hand me that shovel.
28 D OLD JUBAL: Marshal, the man is buried.
29 D MARSHAL HALVERSEN: The man was never in there.
* 30 A ¶ Silence.
* 31 A The wind comes back, soft, and rattles the Padre's pages.
32 A Sabina lets go of the boy.
33 A She reaches into her veil and draws out a small revolver with an ivory grip.
34 A Beck's hand disappears into her duster.
35 A Jubal's fingers slide off the shovel.
36 D BECK: Ma'am, I'd rather we all just walked home.
37 D SABINA: So would I, señorita. But he took the gold, and I gave him the box.

### SCENE s01324 | EXT. RIVER FERRY - MIDDAY
Detected names (may be incomplete or contain aliases): AMOS QUILL, DEL, RAYE
* 1 A ¶ A flat timber barge on a rope line, crossing slow brown water.
* 2 A Cottonwoods on both banks.
* 3 A One mule, asleep on its feet.
* 4 A Heat shimmer on the planks.
5 A ¶ AMOS QUILL, 50s, scarecrow-thin, sleeves rolled, hauls the guide rope hand over hand.
6 A Gray stubble.
7 A A stove-in hat.
8 A A dead cigar he never lights.
9 A ¶ DELPHINE "DEL" RAYE, 30s, rides the rail with a saddlebag across her knees.
10 A Red bandana.
11 A Boots too fine for the river.
12 A A rifle wrapped in canvas by her hip.
13 D AMOS: Fare's a nickel.
14 D DEL: Posted says two cents.
15 D AMOS: Posted's old.
16 A ¶ She flips a nickel.
17 A He catches it without looking, drops it in his vest, keeps pulling.
18 D DEL: Many cross today?
19 D AMOS: Some.
20 D DEL: Any stop and ask for a man?
21 D AMOS: Some.
* 22 A ¶ The barge drifts a foot downstream.
* 23 A The rope groans.
24 A Amos sets his feet, hauls, and Del gets up, takes the rope behind him, and the two of them pull together, hand over hand, until the barge steadies and the mule opens one eye and shuts it.
25 D DEL [CONT'D]: That's a wide river.
26 D AMOS: Gets wider after a rain.
27 D DEL: Ever sunk one?
28 D AMOS: Once.
* 29 A ¶ Something thumps against the hull under the planks.
* 30 A A log, probably.
31 A Amos and Del freeze, he with the rope in both fists, she with a hand on the canvas.
* 32 A The thump rolls past.
33 A The barge lurches, and both lean the other way, stagger, catch the rail, and laugh without sound.
34 D DEL [CONT'D]: Log.
35 D AMOS: Log.
36 A ¶ She hands the rope back.
37 A He takes it.
* 38 A Bank shadows creep up the planks.
39 D DEL: I'll pay another nickel to get across faster.
40 D AMOS: River don't take bribes.

### SCENE s01325 | INT. WRESTLING WEIGH-IN SAUNA - PRE-DAWN
Detected names (may be incomplete or contain aliases): KWAME ASANTE, SOLVEIG HAUG
* 1 A ¶ Cedar benches.
* 2 A A single bulb.
* 3 A Steam hangs thick enough to hold a handprint.
4 A ¶ KWAME ASANTE, 20s, towel over his head, sits hunched, elbows on knees.
5 A SOLVEIG HAUG, 40s, his cornerman, perches across from him with a digital scale in her lap.
6 A Neither looks up.
7 D KWAME: What's it say?
8 D SOLVEIG: Hundred and fifty-four point eight.
9 D KWAME: Limit's one-fifty-four.
10 D SOLVEIG: I can read, Kwame.
11 D KWAME: Then it's four-tenths of a pound.
12 D SOLVEIG: It's four-tenths of a pound.
13 D KWAME: Your mother's in the stands today.
14 D SOLVEIG: Don't.
15 D KWAME: I'm only saying.
16 D SOLVEIG: Sweat.
17 D KWAME: Four more minutes?
18 D SOLVEIG: Six.
19 D KWAME: You said four.
20 D SOLVEIG: I say what the scale says.
21 D KWAME: Last time, you said the scale lied.
22 D SOLVEIG: Last time, you ate a banana.
23 D KWAME: It was a small banana.
24 D SOLVEIG: It was a banana, Kwame.
25 D KWAME: Everybody's gonna look at me when I step up. All of them.
26 D SOLVEIG: They look at everybody.
27 D KWAME: You're not scared?
28 D SOLVEIG: I'm warm.
29 D KWAME: That's not an answer.
30 D SOLVEIG: It's the only one I've got at five a.m.
31 D KWAME: Give me the scale.
32 D SOLVEIG: Not yet.
33 D KWAME: Solveig.
34 D SOLVEIG: Four minutes. Then I give it to you.
35 D KWAME: You said six.
36 D SOLVEIG: Then six.
37 A ¶ He pulls the towel lower.
38 A She sets the scale on the bench between them and wipes her palm on her knee.
* 39 A Steam rolls over them both.
