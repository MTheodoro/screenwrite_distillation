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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0036.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01118 | INT. LIGHTHOUSE KEEPER'S LOG ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR GWENDOLYN ADEBAYO-HARTWELL, HARBORMASTER
* 1 A ¶ Cramped.
* 2 A A circular desk.
* 3 A Ship's barometer, brass lamp, rows of leather-bound logbooks.
* 4 A Fog presses on the window.
* 5 A The foghorn sounds every ninety seconds.
6 A ¶ INSPECTOR GWENDOLYN ADEBAYO-HARTWELL, 50s, oilskin coat dripping on the planks, sits at the desk with a lamp and a stack of logbooks.
7 A She flips pages with a gloved hand, jots notes in a pocket pad, taps a pen against her teeth.
* 8 A The foghorn sounds.
9 A She does not flinch.
10 D GWENDOLYN (to the room): October ninth. "Light functioning. Visibility poor." October tenth. "Light functioning. Visibility poor." October eleventh.
11 A ¶ She stops.
12 A Runs a finger over the ink.
13 D GWENDOLYN [CONT'D]: "Light functioning. Visibility poor. Mr. Pellew did not return."
14 A ¶ She flips back.
15 A Forward.
16 A Back again.
17 D GWENDOLYN [CONT'D]: Three entries, same handwriting. Same ink. Same hour. But the first two were written by a man who is alive, and the third by a man who isn't.
18 A ¶ She lifts the lamp and holds the page to the flame.
* 19 A Behind the ink, faint, a second line shows through, written in a different hand and scratched out.
20 D GWENDOLYN [CONT'D] (reading, softly): "He did not fall."
* 21 A ¶ Her radio crackles on the desk.
22 A She snatches it up.
23 D HARBORMASTER [V.O.] (over the radio): Inspector? You got anything yet?
24 D GWENDOLYN: I have a log that lies, Harbormaster. And a keeper who's missing.
25 D HARBORMASTER [V.O.]: Pellew's boat washed up on the rocks. Empty.
26 D GWENDOLYN: Was the lamp lit?
27 D HARBORMASTER [V.O.]: Aye. All night.
28 D GWENDOLYN: Who lit it?
29 D HARBORMASTER [V.O.]: You tell me, Inspector. You're the one in the tower.
30 A ¶ She sets the radio down.
* 31 A The foghorn sounds.
* 32 A A floorboard above her creaks.
33 A She looks at the ceiling, at the spiral stair, and then at the pen in her hand.
34 A ¶ She rises, slips the log into her coat, and climbs.

### SCENE s01119_0 | INT. CORSET MAKER'S SHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MADAME CLEMENTINE ROUSSEAU-ADEYEMI
* 1 A ¶ 1893.
* 2 A A single gas lamp.
* 3 A Bolts of silk.
* 4 A Whalebone stays arranged by length.
* 5 A A mannequin in half-finished brocade.
6 A ¶ MADAME CLEMENTINE ROUSSEAU-ADEYEMI, 50s, pins fabric to the mannequin by lamplight.
* 7 A The shop bell rings in the front.
8 A She sighs, sets down her pins, and goes through the curtain.

### SCENE s01119_1 | INT. CORSET MAKER'S SHOP - FRONT ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): CLEMENTINE, AMBROSE
1 A ¶ A FIGURE stands inside the door, hat low, collar up, rain pooling on the boards.
2 A They hold a parcel wrapped in oilcloth.
3 D FIGURE: Madame Rousseau?
4 D CLEMENTINE: We are closed.
5 D FIGURE: I know. I knocked at the back.
6 D CLEMENTINE: Nobody knocks at the back.
7 D FIGURE: I did.
8 A ¶ She studies the Figure.
9 A The stance is wary.
10 A The voice is low, uncertain of its register.
11 D CLEMENTINE: What do you want?
12 D FIGURE: A fitting.
13 D CLEMENTINE: At this hour?
14 D FIGURE: I could not come in daylight.
15 A ¶ Clementine's brow furrows.
16 A She looks at the parcel.
17 A The Figure steps forward, unwraps it, lifts out a gentleman's frock coat, torn at the seam.
18 D FIGURE [CONT'D]: My brother's. He died on the fourteenth. I'd like it altered.
19 D CLEMENTINE: For whom?
20 D FIGURE: For me.
* 21 A ¶ A long silence.
* 22 A The gas lamp hisses.
23 A Clementine takes a step closer.
24 A Her expression softens.
25 D CLEMENTINE: You will not need a corset, then.
26 D FIGURE (a small, relieved breath): No. Only a good tailor.
27 D CLEMENTINE: Then you came to the wrong shop.
28 D FIGURE: Forgive me.
29 D CLEMENTINE: No, no. You came to the right one. I am not a tailor. But I know three.
30 A ¶ She takes the coat gently.
31 A Runs her thumb over the torn seam.
32 D CLEMENTINE [CONT'D]: What is your name?
33 D FIGURE (after a beat): Ambrose.
34 D CLEMENTINE: Ambrose what?
35 D AMBROSE: Ambrose Whitlock. For now.
36 D CLEMENTINE: For now is enough. Sit, Monsieur Whitlock. I will make some tea.

### SCENE s01120 | INT. TAXIDERMY SHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS REYES, BRAM, PIP, OLD HOSEA
* 1 A ¶ A cramped workroom lit by one hanging bulb.
* 2 A Glass eyes in trays, a half-skinned fox on the table, a dead radiator ticking.
3 A ¶ ODALYS REYES (50s, heavy apron, reading glasses on a cord) sews the fox's belly.
4 A Her son BRAM (20s, thin, jittery, car keys in his fist) stands in the doorway.
5 A PIP (15, braids, school hoodie) sits on a stool sorting glass eyes.
6 A OLD HOSEA (80s, wool cap, cane) waits with a shoebox on his knees.
7 D BRAM: Ma, the bank called again.
8 D ODALYS: Not in front of customers.
9 D BRAM: He's not a customer, he's Hosea. He's been sitting there an hour.
10 D HOSEA: Forty minutes. I'm timing it.
11 D ODALYS: Bram, put the keys down.
12 D BRAM: Where's the money, Ma? Where's the deposit from the Hendry job?
13 A ¶ Odalys stops sewing.
14 A Pip stops sorting.
15 D PIP: Uncle Bram, don't.
16 D BRAM: Stay out of it, Pipsqueak.
17 D ODALYS: I paid the freezer man. I paid your tuition. You want to see the receipts, you ask me nicely.
18 D BRAM: I'm asking!
19 A ¶ He slams the keys on the table.
* 20 A The fox jumps.
* 21 A Glass eyes scatter across the floor.
22 A Pip dives after them.
23 A Hosea lifts his cane in front of his shoebox like a shield.
24 D ODALYS: Look what you did.
25 A ¶ Odalys and Bram both go for the same falling tray.
26 A Their hands collide.
27 A Both freeze, nose to nose.
28 D BRAM (quietly): I lost the Hendry money, Ma. At the track. All of it.
* 29 A ¶ Silence.
* 30 A The radiator ticks.
31 A Pip, on her knees, holds up a single blue glass eye.
32 D PIP: Found one.
33 A ¶ Odalys lets out a long breath.
34 A She takes the eye from Pip and sets it in the fox's socket.
35 D ODALYS: Pick up the rest, Bram. Every one.
36 A ¶ Bram kneels.
37 A Hosea sets his shoebox on the table and lifts the lid.
* 38 A Inside, a small stiff canary.
39 D HOSEA: Whenever you two are done. Her name was Dolores.
40 D ODALYS (gently): Bring her here, Hosea.

### SCENE s01121 | INT. LIGHTHOUSE LAMP ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HARLAN VOSS, NELL STRAND, DOYLE
* 1 A ¶ A glass cage at the top of a hundred iron steps.
* 2 A The great lens turns, throwing slow white blades across a storm-black sea.
* 3 A Rain hammers the panes.
4 A ¶ HARLAN VOSS (50s, rumpled trench coat, a gambler's patient eyes) lowers himself through the floor hatch, breathing hard.
5 A Across the lens stands NELL STRAND (30s, sharp, soaked, a revolver steady in both hands).
6 D NELL: That's far enough, Mr. Voss.
7 D VOSS: You've been a long climb, Miss Strand.
* 8 A ¶ The beam sweeps over them.
9 A In the flash, a third figure: DOYLE (40s, keeper's oilskins, face cut and bloody) crouched behind the lamp mechanism, a flare gun in his fist.
10 D DOYLE: Both of you, drop it. I swear I'll burn this tower down.
11 A ¶ Nell swings her gun toward Doyle.
12 A Voss lunges for Nell.
13 A The three of them freeze as the beam passes, then the light goes out.
* 14 A ¶ DARKNESS.
* 15 A A scuffle, a gunshot, glass shattering.
* 16 A ¶ The lamp grinds back to life.
17 A Nell has Doyle's arm twisted behind him.
18 A Voss holds the revolver, aimed at neither of them.
19 D VOSS: Now. Who wants to tell me where the ledger is?
20 A ¶ Doyle laughs, breathless, and nods at the sea.
21 D DOYLE: Eighty feet down. Good luck.

### SCENE s01122 | INT. DRAINED SWIMMING POOL - TABLE TENNIS HALL - DAY
Detected names (may be incomplete or contain aliases): DEZ OKAFOR, LIN HUA, GRANDPA TSUBASA, REFEREE BARNABY, ^LIN
* 1 A ¶ A municipal pool, long since emptied, its blue tiles chipped to the colour of old teeth.
* 2 A Two green tables stand in the deep end where the water once was.
* 3 A Dust turns in a shaft of light from a skylight.
4 A ¶ DEZ OKAFOR (late 20s, loose-limbed, a towel around his neck) bounces the little white ball on his paddle, humming.
5 A Across the table, LIN HUA (teens, tight ponytail, fierce eyes) waits, perfectly still.
6 A In the shallow end bleachers, GRANDPA TSUBASA (80s, folded in a cardigan) eats tangerine segments.
7 A At the net post, REFEREE BARNABY (60s, clipboard, whistle) checks his watch with a priest's solemnity.
8 D BARNABY: Match point, Lin. Take your time.
9 D DEZ: Lin, nobody's rushing you. We could be at a picnic.
10 D LIN: Don't talk to me like I'm eight, Dez.
11 D DEZ: Wouldn't dream of it.
12 A ¶ He serves, soft and lazy.
13 A Lin returns it just as soft.
14 A The rally floats back and forth, almost tender, ball ticking in the quiet like a slow clock.
15 D TSUBASA: Easy, Lin-chan. Easy.
16 D DEZ (over the ball): Your grandfather's a good coach.
17 D LIN (at the same time): Why are you letting me win?
18 D DEZ (at the same time, softer): I'm not letting you.
19 D ^LIN: You are. You've dropped four easy balls in a row.
20 A ¶ Dez mishits on purpose.
* 21 A The ball skitters into the deep corner.
* 22 A The hall holds its breath.
23 A ¶ Barnaby lowers his clipboard and looks, very slowly, at Tsubasa.
24 A The old man stops chewing.
25 D TSUBASA: Barnaby. Tell her about the envelope.

### SCENE s01123 | INT. ROLLER RINK - DJ BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, TEO, PHONE, RAQUEL, LINDQVIST, ^JUNE, ^TEO
* 1 A ¶ Disco ball turning, colored lights sliding across empty hardwood.
* 2 A The rink is closed; the booth is a cluttered box of turntables and cables.
3 A ¶ JUNE (16, braids, rink-staff polo shirt) sits at the mixer wearing headphones around her neck.
4 A TEO (17, skinny, backpack on both shoulders) leans in the doorway, holding a paper bag.
5 D TEO: You said ten o'clock.
6 D JUNE: It's ten-oh-four.
7 D TEO: I ran here.
8 D JUNE: You walked. I watched you from the window.
9 A ¶ Teo grins and hands her the bag.
10 A June pulls out a cassette tape in a cracked case.
11 D JUNE [CONT'D]: Is this it?
12 D TEO: My dad's mix. Nineteen eighty-four. He made it for my mom.
13 D JUNE: And you want me to play it on the rink system.
14 D TEO: Just once. Before they tear the place down.
15 A ¶ June looks out at the empty floor, then back at the tape.
* 16 A A PHONE on the desk buzzes.
17 A She answers it, thumbing the speaker.
18 D RAQUEL [V.O.] (through the phone): Junebug, where are you? Mom's been calling the house for an hour.
19 D JUNE: Work, Raquel. I told you.
20 D RAQUEL [V.O.]: It's a school night. Come home.
21 D JUNE: Five more minutes.
22 D RAQUEL [V.O.]: Who's there with you?
23 A ¶ June clamps her hand over the phone.
24 A Teo shakes his head, mouthing, no. June hangs up.
25 D JUNE [CONT'D]: She'll tell Mom.
26 D TEO: Then play it fast.
27 A ¶ June slides the tape into the deck.
* 28 A A fat bassline wobbles out, warped by age.
29 A They stand there, listening to a dead man's song fill the hall.
30 D TEO [CONT'D]: That's him humming.
31 D JUNE: That's the best part.
* 32 A ¶ The booth light snaps on.
33 A MR. LINDQVIST (60s, bathrobe over his work clothes, a flashlight) fills the doorway.
34 D LINDQVIST: Who authorized this?
35 D JUNE: I did!
36 D TEO: I did!
37 D ^JUNE (talking over him): It was my idea, sir!
38 D ^TEO (talking over her): She had nothing to do with it!
39 D LINDQVIST: Turn it off.
40 A ¶ June reaches for the stop button.
41 A Lindqvist's hand clamps on hers.
42 D LINDQVIST [CONT'D]: No. Not off. Turn it up.
43 A ¶ He sets his flashlight down and sits heavily on a stool.
* 44 A The bassline swells.
* 45 A Outside the booth, the disco ball keeps turning.

### SCENE s01124 | INT. CHURCH BASEMENT - BINGO NIGHT - EVENING
Detected names (may be incomplete or contain aliases): WILHELMINA OKAFOR-DUNN, DOV KESSLER, ANSELM PRICE, CANDACE LOWE, RUTENDO MOYO
* 1 A ¶ A low room of folding tables and fluorescent tubes.
* 2 A Cards, daubers, a coffee urn.
* 3 A A raffle drum sits on a stage made of risers.
* 4 A Above it hangs a banner: ST. ANSELM'S ROOF FUND.
5 A ¶ WILHELMINA OKAFOR-DUNN (70s, church-lady hat, a ring of keys) holds the microphone.
6 A DOV KESSLER (60s, cardigan, the treasurer, anxious hands) counts bills at the cash table.
7 A ANSELM PRICE (40s, big man, usher's lanyard) stacks chairs by the wall.
8 A CANDACE LOWE (30s, nurse's scrubs under a coat, new in the parish) sits alone with a single card.
9 A RUTENDO MOYO (20s, sharp, laptop bag, a visitor from the diocese) stands at the stairs, watching them all.
10 D WILHELMINA: Good evening, everyone. Welcome. We'll begin in two minutes.
11 A ¶ Dov glances up at Rutendo, then down at his cash again.
12 D DOV (to himself): Four hundred. Four hundred and ten.
13 D RUTENDO: Mr. Kessler, I'd like to see the ledger before the draw.
14 D DOV: It's bingo night. The books are in the office.
15 D RUTENDO: Then let's go to the office.
16 D DOV: After the game.
17 A ¶ Wilhelmina lowers the mic.
18 D WILHELMINA: Dov, is there a problem?
19 D DOV: No problem, Willie.
20 D ANSELM (to the room): Folks, take your seats, please. We're starting soon.
21 A ¶ Candace moves to a different table, nearer the stairs.
22 A Rutendo notices.
23 D RUTENDO: You're new, aren't you?
24 D CANDACE: Three months.
25 D RUTENDO: Why bingo?
26 D CANDACE: It's quiet. I work nights. Sometimes I need quiet.
27 A ¶ Dov stuffs the cash into a metal box and locks it.
28 A His hands are shaking.
29 D RUTENDO: Mr. Kessler. The ledger.
30 D DOV (louder): I said after the game!
31 A ¶ Heads turn.
* 32 A The urn hisses.
33 A Wilhelmina steps off the riser, keys jingling.
34 D WILHELMINA: Dov Kessler. Look at me.
35 D DOV: Willie, don't.
36 D WILHELMINA: I have known you thirty-one years. Look at me.
37 A ¶ Dov looks.
38 A His face crumples.
39 D DOV (barely audible): The roof isn't getting fixed.
40 D ANSELM: What did he say?
41 D WILHELMINA (to Anselm, flat): Sit down.
42 D ANSELM: Wilhelmina, what did he say?
43 D WILHELMINA: He said the roof isn't getting fixed.
* 44 A ¶ A long silence.
45 A Candace puts down her dauber.
46 D CANDACE (to the room): How much?
47 D DOV: Eleven thousand. Over two years.
48 D ANSELM (to himself, muttering): Eleven thousand. Eleven thousand dollars.
49 D RUTENDO: Where did it go, Mr. Kessler?
50 D DOV: My wife's treatments. The insurance wouldn't...
51 A ¶ He can't finish.
52 A Wilhelmina takes the metal box from the table and holds it against her chest.
53 D WILHELMINA (to everyone): Nobody leaves. Nobody calls anyone. We are going to have this out like a family.
54 D ANSELM (rising, loud): Family? He stole from us!
55 D CANDACE: Anselm, sit.
56 D ANSELM: Don't tell me what to do. You've been here ninety days.
57 D CANDACE: I've been here long enough to know a man in trouble when I see one.
58 D ANSELM: He lied to every person in this room!
59 D DOV (weeping): I know. I know I did.
60 D RUTENDO (to Wilhelmina): Mrs. Okafor-Dunn, I have a report due to the bishop.
61 D WILHELMINA: Then write that the church of St. Anselm found its own answer.
62 D RUTENDO: What answer?
63 A ¶ Wilhelmina walks to the riser, sets the cash box on the raffle drum and opens it.
64 A She takes out the whole stack of bills and holds it up.
65 D WILHELMINA (to the crowd): Tonight's pot goes to Dov's wife. All of it.
66 D ANSELM: That's the roof money!
67 D WILHELMINA: The roof can leak another winter. Dov can't.
68 A ¶ Anselm opens his mouth.
69 A Closes it.
70 A He drags his hand down his face.
71 D ANSELM (to himself): Lord, give me patience.
72 A ¶ He walks to the cash table, pulls out his wallet, and drops two twenties on the pile.
73 D ANSELM [CONT'D]: That's mine.
74 D CANDACE (softly): Mine too.
75 A ¶ She adds a ten.
76 A Rutendo stares at them.
77 A Then, with a long breath, she closes her laptop bag.
78 D RUTENDO: My report will say the ledger was in order.
79 A ¶ Dov covers his face.
80 A Wilhelmina lifts the microphone.
81 D WILHELMINA: B-seven. B, seven.
* 82 A ¶ The room breathes.
83 A Daubers lift.
84 A Dov sits, shoulders shaking, as the first ball rattles in the drum.

### SCENE s01125 | INT. SLEEPER TRAIN - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): LOUISE ARDEN, ARTHUR, PELL, MINNIE, WAITER, PASSENGER, SEXTON
* 1 A ¶ White tablecloths, brass lamps swaying.
* 2 A The train rocks through a moonless forest.
* 3 A A single table is laid for six, but only five place settings are occupied.
4 A ¶ LOUISE ARDEN (40s, pearls, composed) stirs her tea without drinking it.
5 A Her husband ARTHUR (50s, crisp suit) cuts a steak into perfect squares.
6 A DR. PELL (60s, round glasses, doctor's bag at his feet) reads the same page of a newspaper again and again.
7 A Their daughter MINNIE (7, ribbon in hair) draws on a napkin.
8 A A WAITER (20s, white jacket, stiff) hovers by the pantry door.
* 9 A ¶ The sixth chair is empty.
* 10 A The sixth place setting is untouched.
11 D ARTHUR: Another pot of tea, I think.
12 D WAITER: Yes, sir.
13 A ¶ The Waiter doesn't move.
14 A His eyes are on the empty chair.
15 D LOUISE: The tea, please.
16 A ¶ The Waiter jerks into motion.
17 A He vanishes through the pantry door.
18 A Dr. Pell turns a page that he hasn't read.
19 D MINNIE: Mama, who is that man?
20 A ¶ Louise sets down her spoon very gently.
21 D LOUISE: What man, darling?
22 D MINNIE: The one at the end. He's got no shoes.
23 A ¶ Arthur's knife stops.
24 A Dr. Pell folds his newspaper into precise quarters.
25 D ARTHUR: Minnie, eat your potatoes.
* 26 A ¶ At the far end of the car, the lamp over the sixth chair dims.
27 A A PASSENGER (age impossible to tell, grey coat, wet hair, bare feet) is sitting there.
28 A No one saw him arrive.
29 D DR. PELL (not looking up): Good evening.
30 D PASSENGER: Evening, Doctor.
31 A ¶ His voice is a dry rasp, like paper on stone.
32 A He rests both hands on the tablecloth.
* 33 A They leave damp prints.
34 D ARTHUR: I don't believe we've been introduced.
35 D PASSENGER: I don't believe you'd want to be.
36 A ¶ Louise rises, smoothing her skirt, and walks to the sideboard.
37 A She lifts a heavy silver coffee pot and keeps her back to the table.
38 D LOUISE: You're traveling a long way?
39 D PASSENGER: Not as far as you.
40 A ¶ Minnie slides off her chair and walks toward him with her napkin drawing.
41 A Arthur catches her wrist.
42 D ARTHUR: Minnie.
43 D MINNIE: He asked me to.
44 A ¶ The Passenger takes the napkin.
* 45 A On it, in crayon, a stick figure lies under a stick train.
46 D DR. PELL (low): Sexton. Enough.
47 A ¶ The Passenger smiles.
* 48 A The dim lamp over him steadies, flaring warm.
49 D SEXTON: So you do remember me, Doctor.
50 A ¶ Dr. Pell stands, knocking his chair back.
51 A Louise sets down the coffee pot with a hard click.
52 A The Waiter comes through the pantry door with the tea tray and stops dead.
53 D SEXTON [CONT'D]: Sit down, everyone. The night is long, and the train does not stop until we've settled the account.
54 A ¶ Nobody sits.
55 A Nobody leaves.
* 56 A The train rocks on.

### SCENE s01126 | INT. HOSPITAL LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ISOLDE NWOSU, NURSE BEAUMONT, KEOLA, MARCHETTI, ZHANG
* 1 A ¶ Industrial washers thump in the dark.
* 2 A Steam.
* 3 A A folding table piled with scrub tops.
4 A ¶ DR. ISOLDE NWOSU (40s, surgical cap, tired eyes) sits on an upturned basket with a paper cup of coffee.
5 A NURSE BEAUMONT (50s, reading glasses) folds towels.
6 A KEOLA (20s, orderly, earbuds around his neck) feeds a load into a dryer.
7 A Across the table, DR. MARCHETTI (60s, bow tie, chief of surgery) peels an orange.
8 D BEAUMONT: You could go home, Doctor.
9 D ISOLDE: I could. The couch there is cold.
10 D MARCHETTI: Cold is a good thing in a couch. Keeps one from sleeping through the pager.
11 D KEOLA: Wait. Dr. Marchetti, you actually sleep on a couch?
12 D MARCHETTI: Twenty-six years. I've got a recliner at the hospital and a bed at home I haven't seen since March.
13 D ISOLDE: That's grim.
14 D MARCHETTI: It's tidy. A bed gets mussed. A recliner just waits.
15 D BEAUMONT: He's lying. His wife bought him a very nice bed.
16 D MARCHETTI: My wife is a tyrant who loves me. Keola, is the dryer on four done?
17 D KEOLA: Eleven more minutes.
18 D ISOLDE: Wonderful. Eleven more minutes of this.
* 19 A ¶ The door swings in.
20 A ZHANG (30s, pharmacist's coat, a clipboard with a tied-on pen) enters, scanning the room.
21 D ZHANG: Sorry. I'm looking for Dr. Nwosu. Bed twelve needs a sign-off on the morphine.
22 D ISOLDE: That's me.
23 A ¶ She drains her coffee, takes the clipboard, signs.
24 A Zhang nods and leaves.
* 25 A The door sighs shut.
26 D MARCHETTI: Quiet night.
27 D BEAUMONT: Don't say that.

### SCENE s01127 | INT. PLANETARIUM - DOME - NIGHT
Detected names (may be incomplete or contain aliases): CHIEF SALMA RAHIMI, DEPUTY TOBIAS FINCH, BRANDT, OYELARAN, SUNNY
* 1 A ¶ A star field wheels overhead.
* 2 A Under it, rows of reclining seats.
* 3 A In the center aisle, a body lies sprawled beneath a projector.
4 A ¶ CHIEF SALMA RAHIMI (50s, rain jacket) crouches by the dead man.
5 A DEPUTY TOBIAS FINCH (20s, notebook) stands at her shoulder.
6 A DR. BRANDT (60s, the planetarium director, trembling) hugs a laser pointer.
7 A OYELARAN (40s, night janitor, mop bucket) hovers.
8 A SUNNY (30s, ticket clerk, headset around her neck) bites her thumbnail.
9 D RAHIMI: Nobody leaves the dome.
10 D FINCH: Chief, the exits are sealed.
11 D RAHIMI: Then nobody breathes loudly.
12 A ¶ Brandt lets out a nervous laugh.
13 A Oyelaran shifts his mop.
14 D OYELARAN (muttering): I mopped this floor at ten. There were no footprints.
15 D RAHIMI: Say that again.
16 D OYELARAN: No footprints, ma'am. Ten o'clock.
17 A ¶ Rahimi looks at the carpet.
* 18 A Muddy prints, wet and fresh, lead from the body to Sunny's seat.
19 A Sunny sees them.
20 A Freezes.
21 D SUNNY: Those aren't mine.
22 D FINCH: Miss, your boots.
23 D SUNNY: They're not mine!
24 D RAHIMI (to the room): Everyone. Show me your shoes.
25 A ¶ Nobody moves.
* 26 A Above them, a comet slides across the dome.
27 D BRANDT (to himself): Oh god. Oh god. Not the telescope.

### SCENE s01128 | EXT. HOLLOW BANYAN TREE - OBSERVATION POST - DAWN
Detected names (may be incomplete or contain aliases): PRIVATE ABEBE, SERGEANT HOLLIS
* 1 A ¶ A giant tree, its heart rotted out, with a crude firing slit chopped through the bark.
* 2 A Inside, a cramped hollow barely wide enough for two men and a field radio.
* 3 A Mist drifts in the jungle outside.
4 A ¶ PRIVATE ABEBE (20s, spectacles taped at the hinge) kneels at the slit with a pair of binoculars.
5 A SERGEANT HOLLIS (40s, grey stubble, sleeves rolled) sits against the wall, shaving with a tin mirror and a cold razor.
6 D ABEBE: Nothing.
7 D HOLLIS: Nothing is good.
8 D ABEBE: Nothing's been good for six hours, Sarge. I keep waiting for it to turn bad.
9 D HOLLIS: It will. Hand me that rag.
10 A ¶ Abebe passes a rag.
11 A Hollis wipes his chin and examines the result in the mirror.
12 D HOLLIS [CONT'D]: You want some coffee?
13 D ABEBE: There's coffee?
14 D HOLLIS: There's instant. And a canteen of water that tastes like a boot.
15 A ¶ He pours powder into a tin cup, adds water, and hands it to Abebe, who sips, winces, sips again.
16 D ABEBE: It's terrible.
17 D HOLLIS: Wait until you've been here a year. It'll taste like home.
18 D ABEBE: You've been here four years.
19 D HOLLIS: That's a long time to drink bad coffee.
20 A ¶ Abebe laughs.
* 21 A It's the first laugh in the tree in days.
22 A He sits next to Hollis, lowers the binoculars.
* 23 A The mist thins.
* 24 A Far off, a bird starts up.
25 D ABEBE: Sarge, do you think they're out there?
26 D HOLLIS: I think they were. Yesterday.
27 D ABEBE: What changed?
28 A ¶ Hollis looks at him.
29 A Then, slowly, reaches for the field radio, turns the dial.
* 30 A Static.
* 31 A Then a thin, clear VOICE in English, reading a message in a loop.
32 A ¶ Abebe goes still.
33 A Hollis lets it play.
34 D ABEBE [CONT'D]: That's the ceasefire. That's the actual...
35 D HOLLIS: Came through at midnight.
36 D ABEBE: You've known for six hours?
37 A ¶ Hollis switches off the radio.
* 38 A The silence is loud.
39 D HOLLIS: I wanted him to finish his coffee before I told you.
40 A ¶ Abebe stares at the cup in his hand, then at Hollis.
41 A He puts the cup down very carefully, as if it might break.
42 D ABEBE: Sarge.
43 D HOLLIS: Go on, kid. Say it.
44 D ABEBE (quiet): Thank you.
45 A ¶ Hollis looks away, rubbing his freshly shaved jaw.
* 46 A Outside the slit, the sun clears the trees.

### SCENE s01129 | INT. CAR WASH - TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): SAL MORETTI, DANNY KAPLAN, LEO PASQUALE
* 1 A ¶ Twenty-four hour.
* 2 A Neon blue.
* 3 A Brushes idle.
* 4 A Water drips.
5 A ¶ SAL MORETTI (60s, bomber jacket, thick fingers) leans on a vacuum stand.
6 A Easy.
7 A Humming.
8 A ¶ DANNY KAPLAN (30s, track jacket, nervous knee) sits on an upturned bucket.
9 A Eating sunflower seeds.
10 A ¶ LEO PASQUALE (20s, hoodie, wire-thin) wipes a towel over a Cadillac.
* 11 A Slow.
* 12 A Careful.
13 D SAL: Leo. You missed a spot.
14 D LEO: Where?
15 D SAL: Rear quarter. Left.
16 A ¶ Leo wipes.
17 A Danny spits a shell.
18 D DANNY: Sal, we doing this or what?
19 D SAL: We're waiting.
20 D DANNY: For what?
21 D SAL: For the car to be clean, Danny. He's particular.
22 A ¶ Danny laughs.
23 A Too loud.
24 A He stops.
25 D DANNY: Who's particular?
26 D SAL: The client. Come on. Eat your seeds.
27 A ¶ Leo sets down the towel.
28 A Wipes his hands on his jeans.
29 A Glances at the Cadillac's trunk.
30 D LEO (softly): How long's he been in there, Sal?
31 D SAL: Who?
32 D LEO: Don't. Please.
33 A ¶ Sal's smile stays.
34 A His eyes don't.
35 D SAL: Leo. I like you. You know that.
36 D LEO: I know.
37 D SAL: Your cousin Marcus told me about you. Said you were solid.
38 D LEO: I am solid.
39 A ¶ Danny stands.
40 A Slowly.
* 41 A The bucket rolls.
42 D DANNY: Sal, what's he talking about?
43 D SAL: Danny, sit down.
44 D DANNY: Sal.
45 A ¶ Sal pulls a revolver from his jacket.
46 A Not pointing it.
47 A Just holding.
48 D SAL: Somebody in this tunnel's wearing a wire. He's been wearing it for three weeks.
49 A ¶ Leo's hand drifts to his hoodie pocket.
50 A Stops.
51 D DANNY (to Leo): Tell him it's not you.
52 D LEO: It's not.
53 D SAL: Danny. Open your jacket.
54 D DANNY: What?
55 D SAL: Open it. Slow.
56 A ¶ Danny opens his track jacket.
* 57 A Under it, a small black box taped to his ribs.
* 58 A Thin red light blinking.
* 59 A ¶ Silence.
* 60 A The brushes begin to turn.
61 D DANNY: Sal. I can explain.
62 D SAL (gently): I know you can.
63 A ¶ He raises the gun.

### SCENE s01130 | INT. BREWERY - COPPER VAT ROOM - NIGHT
Detected names (may be incomplete or contain aliases): WREN, KOJO, MAEVE, HOLT
* 1 A ¶ Gleaming copper.
* 2 A Pipes.
* 3 A Steam.
* 4 A A catwalk overhead.
5 A ¶ WREN (30s, black coveralls, hair under a cap) drops from a ceiling hatch.
6 A Soft landing.
7 A Duffel on her shoulder.
8 A ¶ KOJO (40s, heavy, brewery uniform stolen from a locker) holds the vault dolly.
9 A Sweat down his neck.
10 D WREN: Status.
11 D KOJO: Vault's open. Bag's full. Too easy.
12 D WREN: Easy is the plan.
* 13 A ¶ An earpiece crackles.
* 14 A A radio on Kojo's belt hisses.
15 D MAEVE [V.O.] (radio): Wren, Kojo. Guard's on his round. Four minutes to the east door.
16 D WREN: Copy, Maeve. Where's the van?
17 D MAEVE [V.O.] (radio): Loading dock. Engine warm. Nobody within a block.
18 D KOJO: Told you. Easy.
19 D WREN: Stop saying that.
20 A ¶ They wheel the dolly toward the exit.
* 21 A Cash bags stacked like grain sacks.
* 22 A Behind them, a vat gurgles, lazy.
23 D KOJO: We're done. Home by one.
24 D WREN: Quiet.
* 25 A ¶ The east door rattles.
* 26 A A key in the lock.
27 A ¶ Wren and Kojo freeze.
* 28 A The dolly stops mid-roll.
29 D MAEVE [V.O.] (radio): He's early. Two minutes early. Wren, move.
30 D KOJO (whispering): Where?
31 D WREN: Behind the vat.
32 A ¶ They duck behind the copper belly.
* 33 A The door swings open.
34 A HOLT (50s, security guard, flashlight, thermos) shuffles in, whistling.
35 A ¶ He sweeps the beam across the floor.
36 A Stops on the dolly tracks in the dust.
37 A Follows them.
38 A Stops at the vat.
39 D HOLT: Evening, folks.
40 A ¶ Wren steps out, hands raised, slow.
41 D WREN: Evening.
42 D HOLT: I've been working this shift eleven years. You're the first people to bother with the copper.
43 A ¶ Kojo steps out too.
44 A Hands high.
45 D KOJO: We can explain.
46 D HOLT: I'd hope not.
47 A ¶ He sets the thermos down.
48 A Sits on a crate.
49 A Pours himself a cup.
50 D HOLT [CONT'D]: My pension got cut last spring. Did you know that?
51 D WREN: No.
52 D HOLT: They never tell a man until he's already counted on it.
53 D MAEVE [V.O.] (radio): Wren? What's happening in there?
54 A ¶ Wren looks at Holt.
55 A Holt sips his coffee.
56 A Looks at the bags.
57 A Looks at the open east door.
58 D HOLT: I'm going to finish this cup. Slowly. Then I'm going to walk the north corridor. It takes twelve minutes.
59 A ¶ Wren lowers her hands.
60 D WREN: Thank you.
61 D HOLT: Go.
62 A ¶ They grab the dolly and run.
* 63 A The east door clicks shut behind them.
64 A Holt drinks.
65 D MAEVE [V.O.] (radio, faint): Wren? Anyone?
66 A ¶ Holt picks up the dropped radio from the floor, thumbs the switch.
67 D HOLT (into radio): They're on their way, miss. Drive carefully.

### SCENE s01131 | INT. ICE RINK - RESURFACER GARAGE - NIGHT
Detected names (may be incomplete or contain aliases): ROXANNE, GUS, TAMSIN, FIGURE
* 1 A ¶ A concrete bay with a hulking resurfacing machine, drips from the ceiling, a flickering overhead tube.
* 2 A The big door is shut.
* 3 A The cold bites.
4 A ¶ ROXANNE (30s, parka) crouches by the machine's wheel with a flashlight.
5 A GUS (50s, rink manager, keys on a lanyard) holds the clipboard.
6 A TAMSIN (teen, hockey jersey, skates over her shoulder) stays near the door.
7 D GUS: Roxanne, the water tank's been leaking since Tuesday.
8 D ROXANNE: It's not water, Gus.
9 A ¶ She points the flashlight.
* 10 A A dark red trail runs from the machine's blade toward the drain.
11 D TAMSIN: I'm going to get my dad.
12 D GUS: Tamsin, stay here.
13 D TAMSIN: It smells like pennies, Mr. Gus.
* 14 A ¶ The machine's engine coughs once.
* 15 A Nobody touched it.
16 A Gus drops his clipboard.
17 A Roxanne stands.
18 A ¶ Under the machine's belly, a FIGURE uncurls, grey and frost-furred, long fingers dragging the concrete.
19 D ROXANNE: Don't move.
20 A ¶ The Figure rises.
21 A Its blue lips shape words that make no sound.
22 A It takes a step toward Tamsin.
23 A ¶ Gus swings his keys like a flail.
24 A The Figure catches his wrist.
25 A They struggle.
26 A Roxanne grabs a pry bar and slams it into the thing's ribs.
27 A It shrieks, soundless, and throws them both against the wall.
28 D TAMSIN: Run!
29 A ¶ All three scatter.
30 A The Figure watches them go, then folds back under the machine, patient.

### SCENE s01132 | INT. VILLAGE SCHOOLHOUSE - COMMAND POST - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN WALTER BRIGGS, LIEUTENANT FENN, SERGEANT KOWALCZYK, PRIVATE MBEKI, NEDDY, PRISONER
* 1 A ¶ Desks pushed to the walls.
* 2 A A blackboard still bearing a child's arithmetic.
* 3 A A lantern on the teacher's desk.
* 4 A Thunder far off, steady as a drum.
5 A ¶ CAPTAIN WALTER BRIGGS (40s, mud to the knee, a map pinned under his palm) studies the table.
6 A LIEUTENANT FENN (20s, youthful, shaking pencil) stands behind him.
7 A SERGEANT KOWALCZYK (50s, bull neck) leans in the doorway.
8 A PRIVATE MBEKI (20s, runner's frame, rifle slung) keeps his eyes on the floor.
9 A NEDDY (60s, cook, apron under his greatcoat) ladles stew from a bucket.
10 A In the corner, bound to a child's chair, a PRISONER (20s, enemy uniform, bare head) sits with his chin down.
11 A ¶ Briggs doesn't look up.
12 A He taps the map once.
13 D BRIGGS: Lieutenant. The bridge.
14 D FENN: Still standing, sir.
15 D BRIGGS: Then it's the only thing standing.
16 A ¶ He straightens and finally looks at the room.
17 A Neddy offers him a tin cup.
18 A He takes it.
19 A He doesn't drink it.
20 D KOWALCZYK: Captain, the men want to know about the order.
21 D BRIGGS: What order?
22 D KOWALCZYK: The one from Brigade. The one nobody's read aloud.
23 A ¶ Mbeki's eyes go to Fenn.
24 A Fenn's pencil snaps.
25 D FENN: I read it, Sergeant.
26 D KOWALCZYK: And?
27 A ¶ Fenn doesn't answer.
28 A He pulls a folded paper from his pocket, smooths it flat on the desk, then slides it toward Briggs.
29 A Briggs does not touch it.
30 D BRIGGS: Read it.
31 D FENN: Sir, I...
32 D BRIGGS: Read it, Lieutenant.
33 A ¶ Fenn clears his throat.
34 A He reads, flat, as if reciting a recipe.
35 D FENN: "Hold the village until relieved. No withdrawal. Prisoners to be processed at discretion."
* 36 A ¶ A long silence.
* 37 A The thunder rolls closer.
38 A Neddy sets down his ladle.
39 D NEDDY: Discretion.
40 D KOWALCZYK: It's a word they use when they don't want their names on it.
41 A ¶ Briggs finally drinks.
42 A He sets the cup down with great care.
43 A He crosses to the Prisoner and crouches in front of him.
44 A The Prisoner lifts his head.
45 A They look at each other for a long moment.
46 D BRIGGS: Does he speak English?
47 D MBEKI: A little, sir.
48 D PRISONER (thick accent): I speak. A little.
49 D BRIGGS: How old are you?
50 D PRISONER: Nineteen.
51 A ¶ Briggs nods.
52 A He stands.
53 A His hand finds the holster at his hip, rests on the leather.
54 D FENN: Sir.
55 D BRIGGS: Yes?
56 D FENN: There's the bridge, sir. If we blow it...
57 D BRIGGS: Then we've left the village.
58 D FENN: Yes, sir.
59 D BRIGGS: Against orders.
60 D FENN (barely): Yes, sir.
61 A ¶ Kowalczyk steps out of the doorway.
62 A He crosses to the blackboard and, with his thumb, wipes a child's sum from the slate.
63 D KOWALCZYK: I've been waiting thirty years for an officer to say that out loud.
64 A ¶ Briggs lifts his hand off the holster.
65 A He unbuckles the Prisoner's wrists.
66 D BRIGGS: Private Mbeki. Take him to the cellar. Give him my blanket.
67 D MBEKI: Yes, sir.
68 A ¶ He moves the Prisoner out.
69 A At the door, the Prisoner turns, mouths something.
70 A Briggs doesn't see.
* 71 A ¶ The first shell lands.
* 72 A The lantern leaps.
* 73 A The blackboard cracks across the middle.
* 74 A Dust sifts from the ceiling.
75 A ¶ Neddy covers the stew with his body.
76 A Fenn drops under the desk.
77 A Kowalczyk draws his pistol and faces the door.
78 A Briggs doesn't move.
79 A He stands at the table with one hand flat on the map, and he starts to laugh, softly, because it is the only thing left.

### SCENE s01133 | INT. SEWING FACTORY - BREAK ROOM - DAY
Detected names (may be incomplete or contain aliases): MAUDE, ROSALIND, BUNNY
* 1 A ¶ A cinder-block room with a Formica table and a vending machine that hums.
* 2 A Fabric dust hangs in the window light.
3 A ¶ MAUDE (60s, grey bun, thimble on her finger) sits stirring tea.
4 A ROSALIND (40s, supervisor's badge, fraying composure) stands at the door with a manila folder.
5 A BUNNY (20s, new hire, bright scarf) perches on the vending machine's edge, swinging her feet.
6 D ROSALIND: Maude, I need to talk to you about Friday.
7 D MAUDE: Then talk, Rosalind. I'm sitting.
8 D ROSALIND: The line was short two hundred pieces. The lot was yours.
9 D MAUDE: Two hundred is nothing. We lost twice that in March.
10 D BUNNY: Maude says the machines were running slow.
11 D ROSALIND: Bunny, I didn't ask you.
12 D BUNNY: I'm only saying what she told me.
13 D MAUDE: She's a good girl, Rosalind. Leave her out of it.
14 D ROSALIND: Maude, they're cutting the shift. Seventeen people. If I can't show a reason, it's all of us.
15 D MAUDE: You want to blame me.
16 D ROSALIND: I want to know the truth.
17 D MAUDE: The truth is I've been on that floor since you were in diapers. The truth is you've forgotten who taught you the seam.
18 D ROSALIND: That isn't fair.
19 D MAUDE: No. It isn't.
20 D BUNNY: Maybe I should go.
21 D ROSALIND: Stay.
22 D MAUDE: Stay, Bunny. Hear how it's done.
23 D ROSALIND: Maude, if you quit, it's the end of the matter. I'll put it in writing. No review.
24 D MAUDE: You'd like that.
25 D ROSALIND: I'd hate it. I'm asking anyway.
26 A ¶ Maude sets down her tea.
27 A She slides the thimble off her finger and places it on the folder.
28 D MAUDE: There. Now you owe me one.

### SCENE s01134 | INT. BOMBED CATHEDRAL - ORGAN LOFT - DUSK
Detected names (may be incomplete or contain aliases): SERGEANT TAVARES, STRANGER, LUKAS
* 1 A ¶ Half the nave is open to the sky.
* 2 A The great organ pipes hang bent and blackened like the ribs of a burned animal.
* 3 A Plaster dust drifts through the last light, and somewhere below, water drips from a broken font.
* 4 A Behind a carved screen on the loft, the stairs to the nave have collapsed into rubble.
5 A ¶ SERGEANT TAVARES (30s, sapper's gloves, a rifle he has stopped trusting) crawls onto the loft on his stomach, dragging a pack that clinks with wire and blasting cord.
6 A He freezes.
7 A A boy in a grey uniform, a STRANGER (teens, hollow cheeks, a cracked helmet twice his size), sits against the base of the organ console with a service pistol in both hands, aimed at Tavares's forehead, trembling.
8 A ¶ They stare at each other across ten feet of splintered oak.
9 D TAVARES (quiet): Easy. Easy now.
10 D STRANGER (in halting English): You stop. I shoot.
11 D TAVARES: I've stopped. See?
12 A ¶ He flattens his palms on the floor.
13 A The Stranger doesn't lower the pistol.
* 14 A A bell somewhere in the tower sounds once, thin and cracked, answering the wind.
15 D TAVARES [CONT'D]: You're hurt.
16 A ¶ The Stranger glances at his left leg.
17 A Blood has soaked through the trouser and dried black to the knee.
18 A He looks back up and shrugs with the exaggerated carelessness of someone who is very afraid.
19 D STRANGER: It is nothing.
20 D TAVARES: It's something. It's a lot of something.
21 A ¶ The Stranger swallows.
22 A The pistol wavers, steadies.
23 A Tavares breathes out slowly through his nose and lets his shoulders drop an inch, an invitation, a language older than either of their armies.
24 D TAVARES [CONT'D]: My name is Tavares. Mateus Tavares.
25 D STRANGER: I do not want your name.
26 D TAVARES: Then you can give me yours later.
* 27 A ¶ Silence.
* 28 A The wind finds a pipe and moans through it, a single hollow note.
29 A The Stranger flinches.
30 A The pistol dips toward the floor and snaps up again.
31 D TAVARES [CONT'D]: That's the wind. Just the wind.
32 A ¶ The Stranger nods, wet-eyed.
33 A Tavares slides one hand to his pack and loosens the strap with two fingers.
34 A Very slowly he pulls out a flat tin, thumbs it open, and sets it on the floor halfway between them.
* 35 A Hard biscuit.
* 36 A A cube of chocolate wrapped in wax paper.
37 D TAVARES [CONT'D]: Eat.
38 A ¶ The Stranger doesn't move.
39 A His stomach growls loud in the hush of the loft.
40 A He winces.
41 A Tavares smiles faintly and slides the tin an inch closer with his boot.
42 D TAVARES [CONT'D]: No trick. If I wanted you dead, I'd have let the stairs do it.
43 D STRANGER (a whisper): Lukas.
44 D TAVARES: Sorry?
45 D LUKAS: My name. Lukas.
46 A ¶ Tavares nods as though a contract has been signed.
47 A He lowers himself to sit, back against a pillar, a calm arm's length away from the tin.
48 A Lukas reaches for the biscuit with his left hand, never lowering the pistol in his right.
49 A He bites.
50 A Chews.
51 A His eyes close for one second, an animal relief.
52 D TAVARES: Good?
53 D LUKAS: It is stale.
54 D TAVARES: It's army.
55 A ¶ Lukas almost laughs.
56 A The pistol sinks to his lap at last.
57 A For a while neither of them speaks.
* 58 A The light goes amber, then rust.
* 59 A The wind rises, and the broken pipes take up a long sigh.
60 D LUKAS: You are here to blow up the church.
61 D TAVARES: I'm here to blow up the tower. The church is already blown up.
62 D LUKAS: My brother is in the tower.
63 A ¶ Tavares goes still.
64 A He studies the boy.
65 D TAVARES: Your brother?
66 D LUKAS: He is the observer. He spots for the guns. I come to bring him water and the bell wire is cut and the stairs are... (gestures at the rubble) ...and then you.
67 D TAVARES: How old is he?
68 D LUKAS: Twenty-two.
69 A ¶ Tavares pulls a canteen from his belt.
70 A He unscrews it and holds it out across the gap.
71 A Lukas hesitates, then takes it, and drinks like a man who has forgotten how.
72 D TAVARES: Does he have a radio up there?
73 D LUKAS: Yes.
74 D TAVARES: Could he hear you if you shouted?
75 D LUKAS: If I shouted loud.
76 A ¶ Tavares lifts his charges from the pack, one by one, and lays them on the floor in a row.
77 A Then, with a deliberate slowness, he cuts the fuse on each, a clean snip, and drops the lengths of cord into the dark under the console.
78 D TAVARES: Tell him the sergeant says come down. Tell him nobody's firing. Tell him the sun's going.
79 A ¶ Lukas stares at the cut fuses.
80 D LUKAS: You will be punished.
81 D TAVARES: Probably.
82 D LUKAS: Why?
83 A ¶ Tavares looks up at the shattered clerestory, at the first star pricking through.
84 D TAVARES: Because I've got a brother too.
85 A ¶ Lukas stands, gripping the console for balance.
86 A He cups his hands around his mouth and shouts something in his own language up the long throat of the tower, a name, and then a word that means come.
* 87 A The echo comes back down, thin, unanswered.
88 A ¶ They wait.
* 89 A The first star becomes two.
* 90 A Finally, from far above, a faint voice calls back.
91 A ¶ Lukas turns to Tavares, and for the first time the boy is a boy, grinning, tears on his dirty face.
92 A Tavares leans his head against the stone pillar and closes his eyes.

### SCENE s01135 | INT. APARTMENT BUILDING - STAIRWELL - NIGHT
Detected names (may be incomplete or contain aliases): NADIA, ISAAC, OKORO
* 1 A ¶ Concrete steps.
* 2 A A buzzing bulb on a timer.
* 3 A Graffiti on the rail.
4 A ¶ NADIA (30s, grocery bags, headphones) climbs, humming.
5 A She pauses on the fourth-floor landing.
* 6 A The bulb clicks off.
* 7 A Dark.
8 A ¶ She fumbles for the switch.
9 A Finds it.
* 10 A Click.
* 11 A Light.
12 A ¶ Standing three steps above her: ISAAC (40s, her neighbor, bathrobe, bare feet).
13 A He is perfectly still.
14 A He stares straight ahead.
15 D NADIA: Isaac? You scared me.
16 A ¶ He says nothing.
17 A She lowers her bags.
18 D NADIA [CONT'D]: Isaac, are you okay?
19 A ¶ He turns his head.
20 A Slowly.
21 A His eyes are blank, rolled back.
22 A ¶ She steps down.
23 A He steps down.
24 A She backs against the rail.
25 A He keeps coming, his lips moving.
26 D ISAAC (a whisper): Don't turn the light off.
27 D NADIA: What?
* 28 A ¶ The bulb buzzes.
* 29 A Clicks.
* 30 A Dark.
31 A A wet breath in her ear.
* 32 A ¶ The light snaps on.
33 A MR. OKORO (70s, building super, toolbelt, flashlight) stands on the landing below, thumb on the switch.
34 D MR. OKORO: Nadia! Why are you two standing in the dark?
35 A ¶ Isaac blinks.
36 A Sways.
37 A Looks around, bewildered, as if waking.
38 D ISAAC: Sleepwalking again. I'm sorry.
39 A ¶ He climbs back up the stairs, slow and sheepish.
40 A Nadia exhales, shaking.
41 D MR. OKORO: You okay?
42 D NADIA: Fine.
43 A ¶ She grabs her bags and, without turning around, takes the stairs two at a time.

### SCENE s01136 | INT. GRAND HOTEL - BALLROOM KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): VERA LINDQUIST, ISADORA FENWICK, COLONEL HADDAD, CATERER KIP
* 1 A ¶ Stainless steel, white tile, a long pass-through window to the ballroom.
* 2 A Music and applause leak in.
* 3 A Rows of champagne flutes wait on silver trays.
4 A ¶ VERA LINDQUIST (40s, black evening gown, a hairpin in her chignon) leans on a counter, calm, arranging canapés on a tray.
5 A ISADORA FENWICK (30s, catering uniform, name tag) wipes down the other side of the counter, humming.
6 A COLONEL HADDAD (60s, dress uniform, medals, a flushed face) stands in the doorway with a glass.
7 A CATERER KIP (20s, apron, clipboard) hovers by the walk-in cooler.
8 D HADDAD: Ladies. I was told there'd be champagne.
9 D VERA: The champagne is in the ballroom, Colonel.
10 D HADDAD: Yes, but this is where the interesting people are.
11 D ISADORA (smiling): That's very kind.
12 D HADDAD: Is it?
13 A ¶ He drifts closer.
14 A Kip glances at his clipboard, then at the door.
15 A Vera continues arranging canapés, unhurried.
16 D VERA: Isadora, would you hand me the tongs?
17 D ISADORA: Of course, Vera.
18 A ¶ She slides the tongs across.
19 A Their fingers brush.
20 A A beat too long.
21 D HADDAD: You two know each other?
22 D VERA: We're colleagues.
23 D HADDAD: In catering?
24 D ISADORA: In logistics.
25 A ¶ Haddad laughs, tips back his glass.
26 A Kip stiffens at the word.
27 D KIP: Ms. Fenwick, the delivery is waiting at the dock.
28 D ISADORA: Thank you, Kip. Tell them five minutes.
29 A ¶ Kip nods and slips out.
* 30 A The swinging door sighs shut.
31 A Haddad watches it close.
32 D HADDAD: Strange boy.
33 D VERA: He's new.
34 D HADDAD (low): Is the car ready?
35 D VERA: Yes.
36 D HADDAD: Then I believe I'll take my champagne.
37 A ¶ He holds out his empty glass.
38 A Isadora fills it from a bottle on the counter.
39 A Haddad drinks, and smiles, and sways a little.
40 D HADDAD [CONT'D]: That's... that's a strange taste.
41 D VERA: It's a very old vintage.
42 D HADDAD: Vera, I don't...
43 A ¶ His knees buckle.
44 A Isadora catches his arm and guides him smoothly onto a flour sack.
45 A Vera pulls the hairpin from her chignon, glances at the ballroom window, and slides it back in.
46 D ISADORA: Four minutes before it takes him.
47 D VERA: Then we have three to be gone.
* 48 A ¶ The door swings open.
49 A Kip reappears, white as paper.
50 D KIP: Ms. Lindquist. The Colonel's driver is at the dock.
51 D VERA: Of course he is.
52 A ¶ She smooths her gown, takes Isadora's hand, and the two women walk out through the cold-room door as the applause swells.

### SCENE s01137 | INT. BOTANICAL GARDEN - GREENHOUSE - DAY
Detected names (may be incomplete or contain aliases): SUKI, MOSES, GARDENER, ULRICH
* 1 A ¶ Humid glass.
* 2 A Orchids and palms.
* 3 A Gravel paths.
* 4 A Mist nozzles hiss.
5 A ¶ SUKI (30s, tourist cardigan, a camera around her neck) pretends to photograph a fern.
6 A MOSES (50s, bucket hat, binoculars) pretends to read a plaque.
7 A A GARDENER (60s, canvas apron, pruners) clips a hedge nearby, whistling.
8 D SUKI: He hasn't looked at us.
9 D MOSES: He's looked at us three times.
10 D SUKI: Then he's bored.
11 D MOSES: He's a gardener. He's trained to be bored.
12 D SUKI: Do you have the schedule?
13 D MOSES: Guards change at two. They leave the east door unlocked for the delivery.
14 D SUKI: And the orchid?
15 D MOSES: Third bench. Behind the staghorn. Blue pot.
16 D SUKI: How much?
17 D MOSES: Four hundred thousand to the right collector.
18 D SUKI: For a flower.
19 D MOSES: For the last one.
20 A ¶ The Gardener's whistle stops.
21 A He sets down his pruners.
22 D GARDENER: It's not the last one.
23 A ¶ Suki and Moses turn, slowly.
24 D SUKI: Excuse me?
25 D GARDENER: The blue Vanda coerulea. There are eleven in the cold house. You're welcome to look.
26 D MOSES: We were just admiring...
27 D GARDENER: Admire all you like. My name is Ulrich. I've been the keeper here for thirty-six years, and I know what you're after.
28 D SUKI (to Moses): Told you.
29 D MOSES: Don't.
30 D ULRICH: I'll make you a deal. You leave the blue pot. I'll let you take a cutting. A real one. Ready to root.
31 D SUKI: Why?
32 D ULRICH: Because the right collector is a man named Prosser who kills his plants, and I'd rather see one live.
33 D MOSES (slowly): Show us the cold house.
34 D ULRICH: Follow me. And put the camera away. It frightens the ferns.

### SCENE s01138 | INT. PUPPET THEATRE - STAGE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE PRUDENCE ACHEBE, VASILI, CELESTE, JUDD, OLD BEATRIX
* 1 A ¶ Velvet curtains drawn back.
* 2 A Painted backdrops of a village.
* 3 A A hundred marionettes hang on rails above the stage like a gallows crowd.
* 4 A Dust motes in the work lights.
5 A ¶ DETECTIVE PRUDENCE ACHEBE (40s, long coat, wry mouth) walks the boards, boots echoing.
6 A VASILI (70s, the puppeteer, hands knotted by arthritis) sits in a high chair at the lip of the stage.
7 A CELESTE (30s, costume designer, thread around her wrist) waits in the front row.
8 A JUDD (50s, theatre manager, blazer, sweat on his lip) hovers near the exit.
9 A OLD BEATRIX (80s, ticket-taker, cardigan, pearl necklace) knits in the aisle seat.
* 10 A ¶ A marionette with a painted gentleman's face hangs center stage, its strings tied in a noose around a hook.
* 11 A Beneath it, on the boards, a chalk outline of a body.
12 D ACHEBE: Everyone comfortable? Good. I'll be brief.
13 D VASILI: That's not usual for the police.
14 D ACHEBE: I'm told it's not usual for a puppeteer to be found dead beneath his own puppet either.
15 A ¶ Celeste flinches.
16 A Beatrix's needles never stop.
17 D ACHEBE [CONT'D]: Ms. Celeste, you sewed the costume.
18 D CELESTE: Yes.
19 D ACHEBE: Whose idea was the red thread in the collar?
20 D CELESTE: It was in the sketches.
21 D ACHEBE: Whose sketches?
22 D CELESTE: Judd's.
23 A ¶ Judd's jaw tightens.
24 A He shifts toward the exit.
25 A Achebe doesn't look at him.
26 D ACHEBE: Mr. Judd. Sit down, please.
27 D JUDD: I'm fine here.
28 D ACHEBE: You're not. Beatrix, would you tell him where to sit?
29 D BEATRIX (not looking up): Judd, dear. Do as the lady says.
30 A ¶ Judd sits.
31 A Slowly.
32 A Vasili's fingers drum the arm of his chair.
33 D ACHEBE: Mr. Vasili, you've been quiet.
34 D VASILI: I'm old. Quiet is my right.
35 D ACHEBE: You've been here forty years. The dead man was your partner.
36 D VASILI: Thirty-eight. And he was not my partner. He was my rival.
37 D ACHEBE: Rival for what?
38 D VASILI: For the audience. For the last good company in this city.
39 D ACHEBE: And now he's dead, and the company is yours.
40 D VASILI (softly): Yes.
41 A ¶ Achebe nods.
42 A She walks to the marionette, lifts its limp wooden hand, turns it over.
* 43 A A tiny brass key is wedged between the fingers.
44 D ACHEBE: The key to the box office safe.
45 A ¶ Judd's breath hitches.
46 D ACHEBE [CONT'D]: Mr. Judd, you told my sergeant the safe was untouched.
47 D JUDD: It was.
48 D ACHEBE: Then why does the puppet have the key?
49 D JUDD (too quickly): Because Vasili put it there.
50 D VASILI: I would never.
51 D JUDD: He's lying!
52 D ACHEBE: Beatrix. Who handed the dead man his last cup of tea?
53 A ¶ The needles stop.
54 A For the first time Beatrix looks up.
55 A Her eyes, clouded, rest on Achebe.
56 D BEATRIX: I did, dear.
57 D CELESTE: Oh, Beatrix.
58 D BEATRIX: Don't fuss. He'd been stealing from the till for years. Poor Judd took the blame, and he's such a nervous boy. I just wanted it to stop.
59 A ¶ Judd stares at her, mouth open.
60 A Achebe sets the marionette's hand down.
61 D ACHEBE: Judd.
62 D JUDD: Yes?
63 D ACHEBE: You're free to go.
64 A ¶ Judd bolts.
* 65 A The door slams.
66 A Celeste pulls the thread from her wrist and stares at it.
67 A Vasili lowers his head.
68 D ACHEBE [CONT'D]: Mrs. Beatrix. I'll need you to come with me.
69 D BEATRIX: Of course, dear. Let me finish the row.
70 A ¶ She knits three more stitches.
71 A Then she folds the work into her lap, stands, and offers Achebe her arm.
72 D ACHEBE: Thank you.
73 D BEATRIX: Don't thank me. Take care of the little ones.
74 A ¶ She nods at the hanging marionettes.
75 A As the two women walk up the aisle, the work lights dim one by one.
* 76 A The puppets sway on their strings.

### SCENE s01139 | INT. WEDDING TENT - GENERATOR TRAILER - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI, HENRIK, GRAN IMELDA, BEST MAN DEWEY
* 1 A ¶ A cramped steel trailer behind the marquee.
* 2 A Cables, fuel cans, a dim bulb.
* 3 A The generator thrums.
* 4 A Through the thin wall, a band plays a slow song.
5 A ¶ NAOMI (late 20s, bridesmaid dress, boots) sits on a crate with a flask.
6 A She's been crying, a little, and has wiped it off.
7 A ¶ HENRIK (30s, rolled shirtsleeves, tie loosened) slips in, shutting the door.
8 A He doesn't see her.
9 A He leans his forehead against the wall.
10 A ¶ She coughs.
11 A ¶ He spins.
12 D HENRIK: Jesus.
13 D NAOMI: Sorry. I was here first.
14 D HENRIK: You're a bridesmaid.
15 D NAOMI: You're the groom's brother.
16 A ¶ He nods.
17 A She holds out the flask.
18 A He takes it.
19 A Drinks.
20 A Hands it back.
21 D HENRIK: Why are you in the generator trailer?
22 D NAOMI: It's the only quiet place. You?
23 D HENRIK: Same.
24 A ¶ They sit in silence.
* 25 A The band shifts to a waltz.
26 D NAOMI: You gave a nice toast.
27 D HENRIK: It was a lie.
28 D NAOMI: All toasts are lies.
29 A ¶ He laughs.
30 A She laughs.
* 31 A Then it fades.
32 D HENRIK: Do you know the bride well?
33 D NAOMI: Twelve years. Since college.
34 D HENRIK: Then you know why she's marrying him.
35 D NAOMI (carefully): I know why she thinks she is.
36 A ¶ He studies her.
37 A She holds the look.
* 38 A Outside, a spotlight sweeps the tent wall.
39 D HENRIK (to himself): I should go back.
40 D NAOMI: You should.
41 A ¶ Neither moves.
42 A He sits on a fuel can across from her.
43 A Closer than before.
44 A She offers the flask again.
45 A Their fingers touch.
46 A She doesn't pull away.
47 D HENRIK: Naomi.
48 D NAOMI: You remember my name.
49 D HENRIK: It's on the place cards.
50 D NAOMI: Is that all it is?
51 A ¶ He leans in.
52 A She leans in.
* 53 A A heartbeat from a kiss.
* 54 A ¶ The trailer door bangs open.
55 A GRAN IMELDA (80s, silk shawl, cane) fills the frame, with BEST MAN DEWEY (30s, drunk, tux jacket on backwards) on her arm.
56 D GRAN IMELDA (to the whole tent): Found them!
57 D DEWEY (slurring): The bride's been looking for you, Henrik. She says you're late for the photograph.
58 A ¶ Naomi and Henrik spring apart.
59 D GRAN IMELDA (to Naomi, pointed): And you, dear. She's looking for you, too.
60 A ¶ Naomi stands, smooths her dress.
61 A Henrik takes his tie in both hands.
62 D NAOMI (low, to Henrik): Don't let this be the end of it.
63 D HENRIK (low): It isn't.
64 A ¶ They walk past Gran Imelda together into the lights.
65 A Imelda watches them go, then turns to Dewey.
66 D GRAN IMELDA: Young man. Never tell the groom's mother what you saw.
67 D DEWEY (muttering): I didn't see anything.

### SCENE s01140 | EXT. SALT FLAT - STAGE STATION - NOON
Detected names (may be incomplete or contain aliases): AMOS CALLOWAY, LORENA VEGA
* 1 A ¶ A single adobe hut on an endless white plain.
* 2 A A water trough, a hitching rail, a tin sign: LAST WATER 40 MILES.
* 3 A Heat shimmers off the ground.
4 A ¶ AMOS CALLOWAY (60s, weathered, a deputy's star pinned to a faded vest) sits on the porch whittling a stick.
5 A LORENA VEGA (30s, dusty traveling dress, a carpetbag) stands at the trough, pumping water into a tin cup.
6 A Neither has spoken for some time.
7 D AMOS: That water's brackish.
8 D LORENA: I've had worse.
9 D AMOS: Not out here, you haven't.
10 A ¶ She drinks anyway.
11 A Makes a face.
12 A Drinks again.
13 D LORENA: Is the stage late?
14 D AMOS: It's always late.
15 D LORENA: How late?
16 D AMOS: Ask me tomorrow.
17 A ¶ She sets the cup on the rail and sits on the other end of the porch.
* 18 A A fly buzzes between them.
19 A Amos blows shavings off his stick.
20 D AMOS [CONT'D]: You're a long way from anywhere, ma'am.
21 D LORENA: So are you.
22 D AMOS: I'm paid to be.
23 D LORENA: By whom?
24 D AMOS: County of Pecos. Thirty dollars a month.
25 D LORENA: That's not much for sitting in a salt pan.
26 D AMOS: It's not much for anything.
27 A ¶ She almost smiles.
28 A He notices, looks away, and keeps whittling.
29 D LORENA: Mr. Calloway.
30 D AMOS: You know my name.
31 D LORENA: It's on the sign.
32 A ¶ He glances at the tin plate nailed beside the door: A. CALLOWAY, STATION AGENT.
33 A He chuckles.
34 D AMOS: So it is.
35 D LORENA: I'm looking for a man named Eduardo Vega.
36 A ¶ Amos's whittling slows.
37 D AMOS: Is that so.
38 D LORENA: My husband. He came through this station two years back.
39 D AMOS: Many men come through.
40 D LORENA: He had a limp. A silver tooth. He sang when he was nervous.
41 A ¶ Amos puts down the knife.
42 A He and Lorena look at each other across the porch.
43 A Neither of them blinks.
* 44 A The wind lifts a veil of white dust off the flats and lets it fall.
45 D AMOS: He sang "La Golondrina."
46 D LORENA: Yes.
47 D AMOS: Badly.
48 D LORENA: Yes.
49 D AMOS: He left here on the nineteenth of May, going west on a bay horse. I never saw him after.
50 D LORENA: Thank you.
51 D AMOS: You don't want to know more?
52 D LORENA: Not today.
53 A ¶ She stands, brushes her skirt, picks up the carpetbag.
54 A Amos rises, too, and offers his hand.
55 A She takes it.
56 A They both hold on a little longer than they need to.
57 D AMOS: The stage will come. Tomorrow, or the day after.
58 D LORENA: Then I'll wait.
59 A ¶ She sits again on the porch step.
60 A Amos picks up his stick.
* 61 A The shimmer on the flats goes on and on.

### SCENE s01141 | INT. ORBITAL ALGAE FARM - MAIN BAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN YARA OKONJO, TECH BOONE, SELVAM, ARI, PILOT KESTREL, OLU
* 1 A ¶ A cylindrical chamber forty meters long, lined with transparent tubes of glowing green algae that pulse with the station's slow rotation.
* 2 A The air smells of wet leaves and ozone.
* 3 A Catwalks cross overhead.
4 A ¶ CAPTAIN YARA OKONJO (40s, grey flight suit, braided hair, a data slate strapped to her forearm) walks the central catwalk with TECH BOONE (30s, grease-stained coveralls, wild beard).
5 A DR. SELVAM (60s, white lab coat, thick spectacles) is on his knees at the base of a tube, scraping a sample from a cracked seal.
6 A ARI (teen, apprentice, oversized hood, bare feet) crouches next to him, holding a petri dish.
7 A In the control booth at the far end, PILOT KESTREL (30s, flight jacket, mirror shades pushed up on her head) leans on a console, feet on the desk.
8 A OLU (50s, station cook, apron, a ladle in his hand) stands under the first tube and peers up.
9 D YARA: Boone, give me the pressure.
10 D BOONE: Eleven-oh. Holding.
11 D YARA: The seals?
12 D BOONE: Doc says the third one's cracked.
13 D SELVAM (from the floor): It's not cracked, it's weeping. There is a difference.
14 D OLU (from below): There is no difference when it's my kitchen being flooded with green soup.
15 D ARI: Doctor, the sample's turning yellow.
16 A ¶ Selvam snatches the dish, holds it to the light, and nods.
17 D SELVAM: Contamination. Not severe.
18 D YARA: Define not severe.
19 D SELVAM: We lose perhaps ten percent of the bay.
20 D KESTREL (over the intercom): Captain, supply drone is two minutes out. Do I hold it?
21 D YARA: Hold it. Boone, shut the third line.
22 A ¶ Boone climbs down a rungs ladder, wrench in hand, moves to a manifold and cranks a valve.
* 23 A The glowing green in the third tube dims to dark.
24 A Ari scrambles to hold a bucket under the dripping seal.
25 A Olu walks up with his ladle and stirs the bucket thoughtfully.
26 D OLU: This is going to be an awful dinner.
27 D SELVAM (dryly): It will be a nutritious dinner.
28 D YARA: Doctor, can the rest of the bay survive?
29 D SELVAM: Without the third line, yes. For six days.
30 D YARA: Then we have six days.
31 A ¶ She taps her slate.
* 32 A The station hums.
* 33 A Overhead, the tubes pulse green in unison, and every one of them keeps living.

### SCENE s01142 | EXT. CREVASSE LEDGE - GLACIER - DAY
Detected names (may be incomplete or contain aliases): MARTA VOLK
* 1 A ¶ Blue-white walls.
* 2 A A thin shelf of ice a hundred feet below the surface.
* 3 A Wind howls overhead like a train that never arrives.
4 A ¶ MARTA VOLK (30s, orange jacket torn at the shoulder, goggles cracked) lies on the ledge, one leg twisted under her.
* 5 A Her pack is split open beside her.
* 6 A A handheld voice recorder dangles from a strap on her wrist, its red light on.
7 A ¶ She tries to sit.
8 A Gasps.
9 A Falls back.
10 D MARTA: Okay. Okay okay okay.
11 A ¶ She breathes into her glove.
* 12 A Steam curls.
13 A She reaches for the pack, grabs a thermos, shakes it.
* 14 A Empty.
15 A Tosses it down.
* 16 A It spins into the dark, clinks, falls silent for a very long time.
17 A ¶ She stares after it.
18 D MARTA [CONT'D] (whispering): Don't look down.
19 A ¶ She fumbles at the recorder, presses a button.
* 20 A A click, then her own voice, bright and young, plays back from earlier in the day.
21 D MARTA [V.O.] (recording): Day four, summit approach. Weather's perfect. I'm going to make it to the col by noon and be back at base before the storm. Marta Volk, signing off.
* 22 A ¶ The recording clicks off.
23 A Marta laughs, a ragged crack of a laugh.
24 D MARTA: You liar.
25 A ¶ She turns the recorder over.
26 A Presses record.
27 D MARTA [CONT'D] (into recorder): Day four. Fell about ninety feet into a crevasse. Left leg broken. Maybe two ribs. Phone's dead. Rope's gone. It's three o'clock. I'm going to try to climb.
28 A ¶ She stops the recording, studies the ice wall.
29 A Finds a handhold.
30 A Pulls herself up an inch, two, three inches.
31 A Screams.
32 A Slips back down.
33 A Lies there panting.
* 34 A ¶ Silence.
* 35 A Wind.
* 36 A A crack echoes through the ice.
37 D MARTA [CONT'D]: No no no.
* 38 A ¶ A line of fracture races across the wall above her.
* 39 A Ice dust sifts.
40 A She rolls, covers her head.
* 41 A A slab of ice the size of a door crashes onto the ledge just beyond her feet and shatters, flinging shards across her jacket.
42 A ¶ She lies still.
43 A Waits.
* 44 A Nothing else falls.
45 D MARTA [CONT'D] (a breath): Okay.
46 A ¶ Her hand gropes at her jacket and finds a small black pouch zipped into the lining.
47 A She pulls it out.
* 48 A Inside, a whistle and an emergency flare.
49 A She stares at them, laughing and crying.
50 D MARTA [CONT'D]: You absolute idiot. It was in your pocket the whole time.
51 A ¶ She jams the whistle in her teeth and blows.
* 52 A A long, shrill note spears up through the crevasse.
53 A She pulls the cap off the flare and strikes it.
* 54 A It hisses.
* 55 A Red light floods the blue walls, turns the ice to fire.
56 A ¶ She raises the flare overhead and blows the whistle again, again.
* 57 A ¶ Far above, faint, very faint, the drone of a helicopter rotor answers.
58 A ¶ Marta drops her head to the ice.
* 59 A The flare sputters in her fist.
60 A She keeps blowing.

### SCENE s01143 | INT. CITY LIBRARY - CARD CATALOG ROOM - DAY
Detected names (may be incomplete or contain aliases): CLERK PHINEAS, SOLANGE, YUSUF
* 1 A ¶ Oak cabinets floor to ceiling, brass pulls, a ladder on rails.
* 2 A Dust and quiet.
3 A ¶ CLERK PHINEAS (60s, sleeve garters, wire spectacles) slides a drawer shut and opens another without looking, while DR. SOLANGE (40s, tweed, a notebook open on her forearm) climbs the ladder, taps a drawer, and mutters a number, and YUSUF (20s, backpack, earbuds hanging) crouches by a low cabinet, flipping cards with one finger and reading each aloud under his breath.
4 D PHINEAS: It would be under P, Doctor. P for Pemberton.
5 D SOLANGE (from the ladder): It was under W the last time.
6 D YUSUF: Wait, which one are we looking for?
7 D PHINEAS: Pemberton's Almanac of Local Murders.
8 D SOLANGE: Whitcombe's Almanac, Phineas.
9 D PHINEAS: Whitcombe wrote nothing of the sort.
10 D YUSUF: There's a Whitcombe here. Whitcombe, Edmund. "Almanac of Unsolved Disappearances."
11 D SOLANGE: That's the one.
12 D PHINEAS: That is not Pemberton.
13 D SOLANGE: I never said Pemberton.
14 D YUSUF: You did. Twice.
15 D SOLANGE: Yusuf, don't.
16 D YUSUF: I'm just saying.
17 A ¶ Phineas closes his drawer, folds his hands, and studies the two of them.
18 A Yusuf grins at the card.
19 D YUSUF [CONT'D]: Call number nine-four-one. Basement stacks.
20 D PHINEAS: Of course it is.
21 D SOLANGE: Lead on.

### SCENE s01144 | INT. PHOTOGRAPHER'S STUDIO - DARKROOM - NIGHT - 1893
Detected names (may be incomplete or contain aliases): ELIZA PRYCE, JASPER, WHITLOCK
* 1 A ¶ Red lamp.
* 2 A Trays of chemicals.
* 3 A Glass plates drying on a rack.
* 4 A The air smells of vinegar.
5 A ¶ ELIZA PRYCE (30s, long sleeves rolled, stained gloves) lifts a plate from the developing bath with tongs.
6 A JASPER (12, apprentice, oversized apron) stands on a stool holding a lantern shaded in red tissue.
7 A MRS. WHITLOCK (50s, widow's black, a hat pinned too firmly) waits at the door, clutching a reticule.
8 D ELIZA: Jasper, hold the light steadier.
9 D JASPER: Yes, Miss Pryce.
10 D ELIZA: Mrs. Whitlock, you may come closer. But not past the line.
11 D MRS. WHITLOCK: What line?
12 D JASPER: The chalk, ma'am.
13 A ¶ Mrs. Whitlock steps up to the chalk mark.
* 14 A The plate drips.
* 15 A In the red light, a ghostly negative: a woman at a window, and over her shoulder a faint pale shape.
16 D MRS. WHITLOCK: Is that...
17 D ELIZA: Your husband, I believe.
18 D MRS. WHITLOCK: He's been dead eleven years.
19 D ELIZA: Then he's very patient.
20 D JASPER: Miss Pryce, do you want it fixed?
21 D ELIZA: Yes, Jasper. Fix it before the lady changes her mind.
22 A ¶ Mrs. Whitlock watches the plate slide into the fixing bath.
* 23 A The shape stays.

### SCENE s01145 | INT. COURTHOUSE BASEMENT - EVIDENCE CAGE - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY COLETTE BAPTISTE, CLERK ARNOLD, GUARD TREVOR, INVESTIGATOR SAHAR QURESHI, ^SAHAR
* 1 A ¶ A wire-mesh room under flickering fluorescents.
* 2 A Shelves of banker's boxes, tagged in marker.
* 3 A A steel table in the middle.
* 4 A The ceiling pipes drip.
5 A ¶ ATTORNEY COLETTE BAPTISTE (40s, pinstripe suit, rolling briefcase) sets a box on the table.
6 A CLERK ARNOLD (60s, cardigan, coin purse of keys) stands at the cage door, a sign-in book open on a stand.
7 A GUARD TREVOR (30s, county uniform, a thermos) leans on the wall, unhurried.
8 D COLETTE: Mr. Arnold, I'd like to inspect Exhibit Fourteen.
9 D ARNOLD: You'll need to sign the book.
10 D COLETTE: I've signed it.
11 D ARNOLD: Not the second page.
12 D COLETTE: There's a second page?
13 D ARNOLD: Since March.
14 A ¶ She signs.
15 A Arnold inspects the signature, sniffs, and nods.
16 A Colette opens the box.
17 A She lifts out a plastic bag with a worn leather wallet.
18 D COLETTE [CONT'D] (to herself): Come on, come on.
19 A ¶ She slides the wallet out, checks its contents, frowns.
20 D TREVOR: Anything wrong, counselor?
21 D COLETTE (to Trevor): No. Just a count.
22 D TREVOR: We count everything twice down here.
23 D COLETTE: That's reassuring.
24 A ¶ She peers at the bag's seal.
* 25 A The tape is peeled at one corner and re-pressed.
26 D COLETTE [CONT'D]: Mr. Arnold. When was this box last opened?
27 D ARNOLD: It's in the log.
28 D COLETTE: I'd like you to read the log aloud.
29 D ARNOLD: That's not standard.
30 D COLETTE: It's a request.
31 A ¶ Arnold sighs, flips pages, finds a line, runs his finger along it.
32 D ARNOLD: October third. Detective Sahar Qureshi, from Major Crimes.
33 D COLETTE: Not mine.
34 D ARNOLD: She said it was for a review.
35 D TREVOR: She wasn't on the list.
36 D ARNOLD (to Trevor): She had a badge.
37 D TREVOR: Badges aren't lists, Arnold.
* 38 A ¶ The door at the end of the corridor buzzes.
* 39 A A heavy tread.
40 A INVESTIGATOR SAHAR QURESHI (40s, trench coat, short hair, a folder under her arm) enters the cage, nods to the room.
41 D SAHAR: Morning, all. I hear someone's asking about me.
42 D COLETTE: Detective Qureshi.
43 D SAHAR: Counselor. How's the Delacroix case?
44 D COLETTE: Not the topic. You opened my exhibit.
45 D SAHAR: I opened a lot of exhibits.
46 D COLETTE: You re-taped the seal.
47 D SAHAR: Did I? I'd have to check.
48 A ¶ Colette crosses her arms.
49 A Trevor takes a long, noisy sip from his thermos.
50 A Arnold scribbles in his log.
51 D ARNOLD (muttering, to himself): Second page, second page.
52 D SAHAR: I'd be careful what you write, Arnold.
53 D ARNOLD: I write what's true.
54 D COLETTE (to Sahar): I'll need an affidavit explaining why you accessed Exhibit Fourteen on October third.
55 D SAHAR: I'd be glad to.
56 D COLETTE: Today.
57 D SAHAR: It's Tuesday. Courts close at four.
58 D COLETTE: Then you'll have to be fast.
59 A ¶ Sahar smiles faintly.
60 A She sets her folder on the table and flips it open.
* 61 A Inside, a thick packet of photographs.
62 D SAHAR: Or I could show you what I found.
63 A ¶ Colette stares at the photographs.
64 A Her face doesn't change, but her hand drifts to the table edge.
65 D COLETTE: Where did you get those?
66 D SAHAR: Inside the wallet's lining.
67 D TREVOR (to himself): Told you we count twice.
68 D ARNOLD (to the room): Everyone please remember to initial the second page on your way out.
69 D COLETTE: Detective.
70 D SAHAR: Counselor.
71 D COLETTE (flat): Let's go upstairs.
72 D ^SAHAR (flat): Let's go upstairs.
73 A ¶ Colette takes the box.
74 A Sahar takes the folder.
75 A They walk out side by side.
76 A Trevor and Arnold exchange a look.
77 D TREVOR: That's going to be a long Tuesday.
78 D ARNOLD: They're always long. That's why we sign.

### SCENE s01146 | INT. CONVEYOR SORTING FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): POPPY, RHETT, ZEKE, TILDA, MANNY, OSWALD
* 1 A ¶ Parcels clatter down steel chutes.
* 2 A Yellow strobes spin.
3 A ¶ POPPY (20s, high-vis vest, hair clip) slides a crate of sealed boxes onto the belt, eyes on the clock, while RHETT (30s, forklift jacket, toothpick) lifts a pallet with practiced ease, ZEKE (40s, supervisor, clipboard, comb-over) paces the mezzanine, TILDA (50s, scanner gun, glasses on a chain) calls out numbers, and MANNY (20s, headphones, tattoo of a swallow) hauls a cart toward the loading dock, each of them moving in a pattern they've rehearsed for weeks.
4 D POPPY: Rhett, the third pallet.
5 D RHETT: I see it, Poppy.
6 D TILDA (scanning): Four-four-one-seven. Four-four-one-eight.
7 D ZEKE (from above): Everybody smile! The auditor's coming at midnight!
8 D MANNY: Tilda, is it the blue box?
9 D TILDA: Wait for the nod.
10 A ¶ Poppy bends over the blue box, lifts a corner.
* 11 A Inside, bricks of cash in plastic.
12 A Her pulse jumps.
13 A She closes the lid.
14 D POPPY (low): Now.
* 15 A ¶ The belt jolts and stops.
* 16 A Strobes die.
* 17 A Total dark.
* 18 A ¶ A new voice, calm, from the stairs.
19 A OSWALD (60s, charcoal coat, a clip-on tie, a company badge) switches on a flashlight and sweeps it across them.
20 D OSWALD: The auditor is early, I'm afraid.
* 21 A ¶ Rhett's pallet crashes.
22 A Poppy runs.
23 A Manny runs.
24 A Tilda drops her scanner.
25 A Zeke whips around.
26 D ZEKE: Oswald? Oswald, we can explain!
27 D OSWALD: I'm sure you can, Zeke.

### SCENE s01147 | INT. ORBITAL HOSTEL - GALLEY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): WOMAN, CASS, HOWARD, DEVI
* 1 A ¶ A narrow galley under dim amber light.
* 2 A A foldable table.
* 3 A Pouches of food clipped to a rail.
* 4 A Through a porthole, the slow curve of a blue planet.
5 A ¶ A WOMAN (30s, grey coverall, wrist tattoo) sits alone at the table, peeling the foil off a ration tray.
6 A She eats a small bite, looks at the porthole, eats another.
7 A ¶ CASS (30s, medic jacket, bleary) floats in and anchors himself to a rail with his foot.
8 D CASS: You're up.
9 D WOMAN: You're up.
10 D CASS: I couldn't sleep.
11 D WOMAN: Me neither.
12 A ¶ He fills a squeeze bulb at the dispenser, drinks, wipes his mouth.
13 A Looks at her tray.
14 D CASS: Is that the chicken?
15 D WOMAN: Allegedly.
16 A ¶ HOWARD (60s, station steward, clipboard, a bad hip) enters, slow.
17 A He sees the Woman, stops.
18 D HOWARD: Dr. Devi. I didn't know you'd come down.
19 D DEVI: Neither did I, Howard.
20 A ¶ He nods, studies her, glances at Cass.
21 A Cass takes another sip.
22 A Howard consults his clipboard.
23 D HOWARD: The log says you're in quarantine.
24 D DEVI: The log is early.
25 D HOWARD: I'll note it.
26 D DEVI: Note whatever you like.
27 A ¶ Howard hesitates, then marks a line and shuffles out.
28 A Cass and Devi sit in the quiet.
* 29 A The planet turns outside.
30 D CASS: You told them you were fine?
31 D DEVI: I told them I was awake.

### SCENE s01148 | INT. SCHOOL BUS DEPOT - DISPATCH OFFICE - MORNING
Detected names (may be incomplete or contain aliases): GLORIA PEPPER, MURRAY, PRESTON, YASMIN, MRS. FEATHERSTONE
* 1 A ¶ A cluttered cinderblock office.
* 2 A A cracked wall clock, a coffee machine, a wall of key hooks.
* 3 A A grimy window overlooks a lot of yellow buses lined up like loaves.
* 4 A On the desk, an old intercom box with a blinking red light.
5 A ¶ GLORIA PEPPER (50s, dispatcher, cat-eye glasses, a headset slung around her neck) sorts keys.
6 A MURRAY (60s, veteran driver, thermos the size of a fire extinguisher) reads the paper at the desk.
7 A PRESTON (20s, new driver, clip-on tie, too-clean uniform) hovers at the doorway, gripping a clipboard.
8 A YASMIN (30s, route supervisor, blazer, an energy drink) scrolls her tablet.
9 A All of them are slightly too loud.
10 D GLORIA: Preston, route twelve. Don't hit anything.
11 D PRESTON: I haven't hit anything yet.
12 D MURRAY: Give it time.
13 D YASMIN: Murray, be nice.
14 D MURRAY: I am being nice. If I weren't nice, I'd tell him about the hill.
15 D PRESTON: What hill?
16 D YASMIN: There's no hill.
17 D MURRAY: There's a hill.
* 18 A ¶ The intercom crackles.
19 D MRS. FEATHERSTONE [V.O.] (intercom, crackling): Gloria? Gloria, honey? It's Mrs. Featherstone from Pinecrest Elementary.
20 D GLORIA (pressing the button): Good morning, Mrs. Featherstone.
21 D MRS. FEATHERSTONE [V.O.] (intercom): The bus is here. But the children aren't on it.
* 22 A ¶ A beat.
23 D PRESTON: Wait, what?
24 D GLORIA: Mrs. Featherstone, what do you mean the children aren't on it?
25 D MRS. FEATHERSTONE [V.O.] (intercom): The bus is full of goats.
* 26 A ¶ Silence.
27 A Murray lowers the paper.
28 D MURRAY (to himself): The hill.
29 D YASMIN: Who was driving bus nine?
30 A ¶ All heads turn to Preston.
31 D PRESTON: I swear I didn't do it.
32 D GLORIA: Preston, get your keys.

### SCENE s01149 | INT. COUNTY COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE HARGROVE, ADEYEMI, LINDGREN, BAILIFF CROWE, JUROR 7, DELACROIX
* 1 A ¶ Wood-paneled, high ceilings, a flag in the corner.
* 2 A A jury box to one side, a witness stand, a gavel mark scarred on the bench.
* 3 A The gallery behind the rail is empty but for a few reporters.
4 A ¶ JUDGE HARGROVE (60s, black robe, half-moon glasses, a tired sort of kindness) presides.
5 A ADEYEMI (40s, defense counsel, charcoal suit, calm voice) stands at the defense table beside an empty chair.
6 A LINDGREN (30s, prosecutor, sharp blazer, a stack of exhibits) sits across the aisle.
7 A BAILIFF CROWE (50s, tan uniform, mustache) guards the jury door.
8 A In the jury box, JUROR 7 (50s, plum cardigan, a clutch bag on her knee) sits very still.
9 D HARGROVE: We'll be back on the record. Ms. Lindgren, your next witness.
10 D LINDGREN: The State rests, Your Honor.
11 D ADEYEMI: Your Honor, the defense moves for a directed verdict.
12 D HARGROVE: Denied. Call your first witness, Mr. Adeyemi.
13 D ADEYEMI: The defense calls the defendant.
14 A ¶ A murmur in the gallery.
15 A Hargrove frowns.
16 D HARGROVE: Counsel, your client isn't present.
17 D ADEYEMI: He is, Your Honor. He's in the empty chair.
18 A ¶ Lindgren half-rises.
19 D LINDGREN: Objection. Theatrics.
20 D ADEYEMI: The defendant is mute by medical order, Your Honor. I'm asking the court's indulgence.
21 D HARGROVE: Approach.
22 A ¶ Both lawyers step to the bench.
23 A Hargrove lowers her voice, but it carries.
24 D HARGROVE [CONT'D]: Mr. Adeyemi, you will not use an empty chair as a witness.
25 D ADEYEMI: Your Honor, my client is dead.
* 26 A ¶ A beat.
27 A Lindgren stares at him.
28 D LINDGREN: What?
29 D ADEYEMI: He died in his cell on Sunday. I received the notice this morning.
30 D HARGROVE (slowly): And you chose not to inform the court.
31 D ADEYEMI: I'm informing the court now.
32 A ¶ Hargrove takes off her glasses.
33 A Pinches the bridge of her nose.
34 D HARGROVE: Bailiff Crowe. Clear the jury.
35 D CROWE: Yes, Your Honor.
36 A ¶ The jurors rise.
37 A Juror 7 doesn't.
38 A Crowe stops beside her.
39 D CROWE [CONT'D]: Ma'am. Time to go.
40 D JUROR 7: I'd like to speak.
41 D HARGROVE: Juror, you will not.
42 D JUROR 7: Your Honor, I think you want to hear this.
43 A ¶ She stands.
44 A She opens her clutch bag.
45 A From inside she draws a folded sheet of paper and a small silver badge.
46 D JUROR 7 [CONT'D]: I'm Special Agent Delacroix, Your Honor. I've been in that box for nine days.
* 47 A ¶ The room goes dead quiet.
48 A Lindgren drops her pen.
49 A Adeyemi closes his eyes.
50 D DELACROIX: The defendant didn't die of natural causes. The man he's accused of killing is alive. And somebody in this courtroom has been feeding him information since Monday.
51 D HARGROVE: Agent Delacroix, you are in contempt.
52 D DELACROIX: I know.
53 D HARGROVE: Do you have proof?
54 D DELACROIX: Yes, Your Honor.
55 A ¶ She hands the paper to Crowe, who carries it to the bench.
56 A Hargrove reads it.
57 A Her face changes.
58 D HARGROVE: Ms. Lindgren.
59 D LINDGREN: Your Honor?
60 D HARGROVE: Your signature is on this.
61 D LINDGREN (very quietly): I want a lawyer.
62 D ADEYEMI: Funny. So did my client.
63 A ¶ Crowe moves toward Lindgren.
64 A Lindgren grabs her exhibits, shoves them at Adeyemi, and bolts for the side door.
65 A Delacroix is faster.
66 A She crosses the well in three strides and catches Lindgren's wrist at the door.
67 D DELACROIX: Counselor, don't make this harder.
68 D LINDGREN: Let me go!
69 A ¶ Hargrove brings down the gavel.
70 A Once.
71 A Twice.
72 A Three times.
73 D HARGROVE: This court is adjourned.
74 A ¶ She sets the gavel down.
75 A Her hand shakes.
* 76 A In the sudden silence, a reporter's pencil snaps.
77 D ADEYEMI (sotto, to himself): Finally.

### SCENE s01150 | INT. PAWNSHOP - BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MALLORY, VITO, CHLOE
* 1 A ¶ A windowless room behind the counter.
* 2 A A steel desk.
* 3 A A wall of guitars.
* 4 A A space heater ticks under the table.
5 A ¶ DETECTIVE MALLORY (50s, rumpled sport coat, tired eyes) sits in the visitor's chair with a paper cup of coffee.
6 A VITO (60s, pawnbroker, leather vest, rings on every finger) leans back behind the desk, hands folded on his stomach.
7 A CHLOE (20s, Vito's niece, apron over a band T-shirt) stands by the guitar wall, rearranging the necks of two acoustics, her back to the room.
8 D MALLORY: Vito, I'm not here about the Fender.
9 D VITO: Good. Because the Fender's clean.
10 D MALLORY: I'm not here about the watches either.
11 D VITO: The watches are also clean.
12 D MALLORY: I'm here about Eddie Cruz.
13 D VITO: Never heard of him.
14 D MALLORY: He came in on the eleventh. Pawned a ring. Never came back.
15 D VITO: People forget their rings.
16 D MALLORY: Not Eddie. Eddie loved that ring. It was his late wife's.
17 A ¶ Vito shrugs.
18 A Chloe turns a guitar peg, plinking a note.
19 D MALLORY [CONT'D]: Chloe. Was it you on the counter that night?
20 D CHLOE: I work most nights.
21 D MALLORY: Then you saw him.
22 D CHLOE: I see a lot of people.
23 D VITO: Detective, the girl is nervous around police.
24 D MALLORY: I've noticed.
25 A ¶ He drinks his coffee.
26 A Sets it on the desk.
27 A Stretches his legs, comfortable, in no rush.
28 D MALLORY [CONT'D]: You know, Vito, my mother had a pawnshop. Little place in Queens. Sold my father's trombone to pay for my First Communion.
29 D VITO: Sad story.
30 D MALLORY: It wasn't sad. He hated that trombone.
31 D VITO (smiling): I like your mother.
32 D MALLORY: She'd like you. She'd also count the change.
33 A ¶ Vito laughs.
34 A Chloe even smiles.
* 35 A The tension in the room loosens.
36 A Mallory leans forward and picks up a pawn ticket from the desk, turns it over.
37 D MALLORY [CONT'D]: Here's what I think. I think Eddie came in, you gave him two hundred dollars, and he went home. I think a week later, a man came in and bought that ring for four times what you paid.
38 D VITO: That's business.
39 D MALLORY: I think the man who bought it was the one Eddie owed money to. I think that man followed Eddie home. And I think when Eddie's body turns up in the canal, the ring will be on the other man's finger, and the other man will say he bought it at a pawnshop on Delancey.
40 D VITO (still smiling): That's a story.
41 D MALLORY: It's a good story. It needs a witness. It needs somebody who saw the man at the counter.
42 A ¶ Chloe stops plinking.
43 A She turns, slowly, and Mallory finally looks at her.
44 D CHLOE: Uncle Vito...
45 D VITO: Chloe.
46 D CHLOE: He's going to find out.
47 D VITO (sharp): Chloe, go to the front.
48 D CHLOE: I don't want to.
49 A ¶ Vito stands.
* 50 A The ring on his finger glints.
51 A He reaches into his desk drawer, and from it draws a small, plain revolver.
52 A Mallory doesn't flinch.
53 D MALLORY: Vito, put it down.
54 D VITO: Not until the girl keeps quiet.
55 D MALLORY: She's not the one you're afraid of.
56 D VITO: Then who?
57 D MALLORY: The man at the counter that night. The one who bought the ring. His name is Sergeant Dobbs. He's my partner. He's standing outside the back door, and he's very, very patient.
* 58 A ¶ The back door opens.
* 59 A A cold draft.
60 A Vito's hand drops.
61 A Chloe lets out a sob.
62 A Mallory finishes his coffee in one swallow and rises.
63 D MALLORY [CONT'D]: I told you I wasn't here about the Fender.

### SCENE s01151 | INT. OFFICE - OPEN-PLAN FLOOR - MORNING
Detected names (may be incomplete or contain aliases): VERB, KENDRA, BARRY, LEILANI, SCOTT, PRAKASH, ^SCOTT, HENDERSON
* 1 A ¶ Cubicles.
* 2 A Motivational posters ("SYNERGY IS A VERB").
* 3 A A glass conference room in the corner with a big screen blinking: ALL-HANDS 9:00.
4 A ¶ KENDRA (30s, sleek blazer, lanyard) leans on a cubicle wall sipping oat-milk coffee.
5 A BARRY (40s, cargo shorts, laminated badge, thermos) sits at his desk, typing like it's a chore.
6 A LEILANI (20s, intern, bright tote bag) hugs a stack of binders.
7 A SCOTT (40s, manager, quarter-zip, headset) paces with his hands behind his back.
8 A DR. PRAKASH (50s, consultant, tweed jacket, tablet) stands quietly by the conference room.
9 D SCOTT: Good morning, team! Beautiful day to be productive!
10 D KENDRA: Morning, Scott.
11 D BARRY (muttering): Morning.
12 D LEILANI: Good morning, Mr. Scott!
13 D SCOTT: Leilani, it's just Scott.
14 D LEILANI: Sorry, Mr. Just Scott.
15 A ¶ Kendra snorts coffee.
16 A Barry stifles a laugh.
17 D SCOTT: Alright, alright. Dr. Prakash is here to help us transition into the exciting new Q3 optimization.
18 D PRAKASH: Good morning.
19 D KENDRA: Is it an audit?
20 D SCOTT: It's a transition.
21 D BARRY: Is it layoffs?
22 D SCOTT: It's an opportunity!
23 D LEILANI: Oh, I love opportunities.
24 D PRAKASH: Perhaps we begin in the conference room.
25 D SCOTT: Great idea, Dr. P.
26 D BARRY: Hey, Kendra.
27 D KENDRA: Yeah?
28 D BARRY: Do you have the Henderson file?
29 D KENDRA: You asked me yesterday.
30 D BARRY: Right. But do you have it?
31 D KENDRA: It's in the shared drive.
32 D LEILANI: I have a binder on Henderson!
33 D ^SCOTT: We don't need the Henderson file today.
34 D PRAKASH: Henderson is already resolved.
35 D KENDRA: Wait, what?
36 A ¶ They all stop.
37 A Prakash taps his tablet.
* 38 A The conference screen flickers, flashing a list of names.
* 39 A Under HENDERSON, a line: TERMINATED.
40 D BARRY: Terminated? He's on vacation.
41 D PRAKASH: He was. Henderson, Pruitt, Salazar, and Okoye.
42 D SCOTT: Dr. Prakash, we agreed to sequence the announcement.
43 D PRAKASH: I'm sequencing it now.
44 D KENDRA (low): Barry, check your email.
45 A ¶ Barry opens a window.
46 A His eyes go wide.
47 A Kendra grabs her phone.
48 A Leilani drops two binders.
49 D LEILANI: Is it bad?
50 D SCOTT (brightly): It's an opportunity!
51 A ¶ Everyone looks at him.
52 A He laughs, weakly, and tugs the zipper of his quarter-zip all the way up.
53 D KENDRA: Scott. Your name is on the list.
54 D SCOTT (a long beat): Is it?
55 D BARRY: Number one.
56 A ¶ Scott looks at the screen.
57 A He doesn't breathe.
58 A Then, very slowly, he reaches for Barry's thermos and takes a long drink.
59 D SCOTT: This coffee is terrible.
60 D BARRY: It's tea.

### SCENE s01152 | INT. FARMHOUSE KITCHEN - HARVEST NIGHT
Detected names (may be incomplete or contain aliases): OLEKSANDR, MIREILLE, TEDDY, ROSA, AUGUSTINE, KIERAN, ^ROSA
* 1 A ¶ A long pine table crowded with cornbread, pickled beets, and a pot of paprika stew.
* 2 A Oil lamps burn though the electricity works.
* 3 A Through the open window, the throb of a combine in the field, working late.
4 A ¶ OLEKSANDR (70s, white moustache, suspenders) sits at the head of the table, carving bread with a knife older than his children.
5 A His wife MIREILLE (60s, floured apron, silver braid) ladles stew into mismatched bowls.
6 A Their son TEDDY (40s, city jacket, gold watch) sits restlessly to the right, thumbing his phone under the table.
7 A His sister ROSA (30s, work gloves tucked into her belt, sunburned neck) leans against the stove with her arms folded.
8 A At the far end, AUGUSTINE (20s, neighbor boy, cap in his hands) waits to be told where to sit.
9 A And in the corner, perched on a milking stool, KIERAN (10, the grandson, scabbed knees, a jar of fireflies) holds the jar in both hands and watches everyone.
10 A ¶ Mireille sets a bowl in front of Teddy.
11 A He looks at it as if it were an invoice.
12 D OLEKSANDR: Eat.
13 D TEDDY: I'm not hungry.
14 D ROSA: You haven't been hungry in this house in fifteen years.
15 D TEDDY (quietly, to her): Don't start.
16 D OLEKSANDR (at the same time): Teddy, we have guests.
17 D ^ROSA (at the same time): Somebody has to start.
18 A ¶ Mireille puts the ladle down with a clink.
19 A Augustine edges toward a chair and pretends to be fascinated by the wallpaper.
20 A Kieran lifts his jar of fireflies to the lamp.
21 D ROSA [CONT'D]: The bank called about the loan again.
22 D TEDDY: I know.
23 D ROSA: You know?
24 D TEDDY: I'm the one who signed it.
25 A ¶ Oleksandr's knife stops in the bread.
26 A Mireille touches the edge of her apron.
* 27 A Nobody speaks.
* 28 A The combine in the field coughs and goes quiet.
* 29 A Kieran's fireflies blink.
30 D OLEKSANDR: You signed?
31 D TEDDY: For the combine. Papa, I did it for the harvest.
32 D OLEKSANDR: You put the land on that paper.
33 D TEDDY: It's a bridge loan. We pay it off in March.
34 D ROSA (low): If the wheat sells.
35 D TEDDY: It will sell.
36 D ROSA: Hail came through Tuesday. Forty acres flattened.
37 D TEDDY: Why am I only hearing about this now?
38 D ROSA: Because you only come when there's something to sign.
39 A ¶ Teddy shoves his chair back.
40 A Oleksandr raises one hand.
41 A The room freezes: Rosa with her arms locked, Teddy half-risen, Mireille clutching the ladle, Augustine wide-eyed in the lamplight, Kieran cradling his glowing jar.
42 D OLEKSANDR: Sit down.
43 A ¶ Teddy sits.
44 A Oleksandr lays the knife across the loaf, wipes his hands on his trousers, and rises, slow, using the table's edge.
45 A He crosses to the window and stands looking out into the dark.
46 D OLEKSANDR [CONT'D]: My father lost this land in forty-six. My brother and I won it back with our hands. It was never ours. It was a loan from the weather.
47 D MIREILLE: Oleksandr.
48 D OLEKSANDR: Let me say it. If the bank takes it, the bank takes it. I'm not afraid of a letter.
49 D ROSA: Papa...
50 D OLEKSANDR: What I am afraid of is this. A table where nobody tells the truth until the harvest is in.
51 A ¶ He turns.
52 A His eyes find Kieran's.
53 D OLEKSANDR [CONT'D]: Boy. What is in your jar?
54 D KIERAN: Fireflies, Dedo.
55 D OLEKSANDR: How many?
56 D KIERAN: Eleven.
57 D OLEKSANDR: Are they happy?
58 D KIERAN (considering): They glow when they're scared.
* 59 A ¶ A silence.
60 A Then Mireille begins to laugh, hand over her mouth, and then Rosa, and then, unwillingly, Teddy.
61 A Augustine, relieved, sits at last.
62 A Oleksandr crosses back to the table, takes Teddy by the shoulder, and sits beside him.
63 D OLEKSANDR: Eat, my son. Tomorrow we count the wheat that's left.
64 A ¶ Teddy lifts his spoon.
65 A Kieran sets his jar on the table.
66 A In the glow of eleven small lights, the family eats.
