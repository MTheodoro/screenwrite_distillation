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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0122.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00594 | INT. HOSPITAL WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA PEMBERTON, WALTER PEMBERTON, DR. ESCOBEDO
* 1 A ¶ Vinyl chairs bolted in rows.
* 2 A A vending machine glowing.
* 3 A A muted TV showing a cooking competition.
4 A ¶ GLORIA PEMBERTON, 60s, in a church dress and orthopedic shoes, sits bolt upright, purse on her lap, rosary twisted around her fingers.
5 A Next to her, WALTER PEMBERTON, 60s, in a windbreaker, stares at a single spot on the carpet.
* 6 A A coffee cup in his hand has gone cold.
* 7 A ¶ A phone rings on the reception desk, unattended.
8 A Neither of them moves.
* 9 A It rings five times.
* 10 A Stops.
11 D GLORIA: Walter.
12 D WALTER: Yes.
13 D GLORIA: Say something.
14 D WALTER: What do you want me to say?
15 D GLORIA: Anything.
16 D WALTER: It's a long night.
17 D GLORIA: That's something.
* 18 A ¶ Silence.
* 19 A On the TV, a chef flips an omelet.
20 A Gloria's rosary beads click.
21 A Walter shifts his weight, sets the cup on the floor, picks it up again.
* 22 A ¶ The intercom crackles overhead.
23 D DR. ESCOBEDO [V.O.] (over speaker, tinny): Family of Pemberton, please come to Room 4.
24 A ¶ They both rise at once, bump shoulders, step back.
25 A Gloria goes first.
26 A Walter hesitates, drops his cup in the trash, and grabs her arm, and they stand there a moment, staring at the closed door at the end of the corridor, her fingers digging into his sleeve while his hand covers hers, neither of them able to take the first step, until Gloria whispers a prayer, takes a breath, and moves, and Walter follows a half-step behind her, the way he has for forty years.
27 D DR. ESCOBEDO [V.O., CONT'D]: Mr. and Mrs. Pemberton. Take your time.
28 D GLORIA (stopping): No. Not take my time.
29 D WALTER: Gloria.
30 D GLORIA: If I take my time, I'll turn around.
31 D WALTER: Then we don't take our time.
32 A ¶ He squeezes her hand.
33 A She nods.
34 A They walk.
35 A At the door, she grips the handle, pauses, and pushes.

### SCENE s00595 | INT. FARMHOUSE KITCHEN - EVENING
Detected names (may be incomplete or contain aliases): CORDELIA ASHWORTH, MAEVE ASHWORTH
* 1 A ¶ A big square table, worn pale by decades of elbows.
* 2 A A pot of soup on the stove, forgotten.
* 3 A A rotary phone on the wall.
* 4 A The window shows a field gone blue with dusk.
5 A ¶ CORDELIA ASHWORTH, 58, the elder sister, ironing a tablecloth with slow, deliberate strokes, watches her younger sister MAEVE ASHWORTH, 54, who sits at the far end of the table with a suitcase already packed beside her chair, her coat folded neatly across her lap.
* 6 A ¶ The iron hisses.
7 A Cordelia reaches the corner of the cloth, smooths it, folds it once, and begins another pass.
8 D CORDELIA: You don't have to go tonight.
9 D MAEVE: The bus leaves at nine.
10 D CORDELIA: There's a bus at six tomorrow.
11 D MAEVE: I'd rather not wait.
12 A ¶ Cordelia sets the iron down on its heel.
13 A Crosses to the stove.
14 A Lifts the lid on the soup and stirs, not tasting.
15 D CORDELIA: Mother's will is in the drawer. You haven't looked at it.
16 D MAEVE: I don't need to.
17 D CORDELIA: It says the house is ours.
18 D MAEVE: It says the house is yours. I've read it.
19 D CORDELIA: You said you hadn't.
20 D MAEVE: I lied.
21 A ¶ Cordelia puts the spoon down so softly it doesn't clink.
22 A She wipes her hands on her apron, one finger at a time, then turns, and for a long moment looks at her sister's face, the tight jaw, the rim of red around the eyes that Maeve will not let fall.
23 A She was always the stubborn one, and she is stubborn now, and she is leaving the way she did at eighteen, with her coat on her lap and her chin high, and Cordelia knows that if she says what she wants to say she will shatter the entire table, so she picks up the iron again.
24 D CORDELIA [CONT'D]: Then go.
25 D MAEVE: That's it?
26 D CORDELIA: What did you want?
27 D MAEVE: I wanted you to say stay.
28 D CORDELIA: I did. Twice.
29 D MAEVE: You said I didn't have to go.
30 D CORDELIA: That's the same thing.
31 D MAEVE: It's not. It's never been the same thing.
32 A ¶ She stands.
33 A Lifts the suitcase.
34 A Holds it with both hands, like something borne from a flood.
35 D MAEVE [CONT'D]: Goodbye, Cordie.
36 A ¶ The nickname lands.
37 A Cordelia's hand tightens on the iron.
* 38 A A thin trail of steam rises, curling past her face.
* 39 A Behind her the soup begins to boil over, hissing on the burner.
40 A She doesn't turn.
41 D CORDELIA: Don't let the door slam.
42 A ¶ Maeve closes the door gently behind her.
* 43 A The latch clicks.
44 A ¶ Cordelia lets the iron fall onto the tablecloth.
* 45 A The smell of scorched cotton rises.
46 A She stands there, watching it burn.

### SCENE s00596 | INT. HIGH COURT OF APPEAL - TIMBERED CHAMBER - MORNING
Detected names (may be incomplete or contain aliases): JUDGE OYELARAN, SAMUEL BECKETT-LOWE, HANA KOBAYASHI, ABDI WARSAME, CLERK DOMINGO, PETRA HOLLOWAY, LOWE
* 1 A ¶ A hall of dark oak, high galleries, a vaulted ceiling hung with brass lamps that cast small circles of gold onto the polished floor.
* 2 A Dust drifts through the light like slow snow.
* 3 A At the far end, a raised bench carved with lions and vines.
4 A ¶ JUDGE OYELARAN, 60s, in black robes and a silver wig, sits motionless.
5 A Her pen hovers above a ledger.
6 A In front of her, at the long mahogany table, sits SAMUEL BECKETT-LOWE, 50s, defense counsel, in a rumpled gown, thumbing a sheaf of notes he has already memorized.
7 A Beside him, HANA KOBAYASHI, 30s, the junior, knees pressed together, a legal pad shaking slightly on her lap.
8 A ¶ At the lectern stands ABDI WARSAME, 40s, the witness, in a suit that is too thin for the weather, hands folded so tightly the knuckles show.
9 A Near the window, CLERK DOMINGO, 20s, thin, with a stack of exhibits cradled in his arms, shifts from foot to foot.
10 A In the jury box, a woman in the front row, PETRA HOLLOWAY, 50s, juror seven, picks at a loose thread in her sleeve, her gaze fixed on Abdi's face.
11 D LOWE: Mr. Warsame, in your statement you said you were on the ferry at ten past six.
12 D WARSAME: Yes, sir.
13 D LOWE: And the ferry is eleven miles from the warehouse.
14 D WARSAME: About that.
15 D LOWE: Eleven miles. Twenty minutes by motorcar. Which means you could not have been at the warehouse at six-fifteen.
16 D WARSAME: No, sir.
17 D LOWE: Yet the prosecution's witness places you there.
18 D WARSAME: She is mistaken.
19 D LOWE: Or lying.
20 D OYELARAN: Mr. Beckett-Lowe.
21 D LOWE: Mistaken. Forgive me, Your Honor.
22 A ¶ Hana scribbles something.
23 A Passes it to Lowe without looking at him.
24 A He reads it, folds it into his sleeve, and lifts his chin toward the clerk, who steps forward with a bound folder, sets it before the witness, and retreats, while in the jury box Petra Holloway leans a fraction closer, and the judge turns a page, and the wind rattles the tall windows, and for a moment the whole chamber seems to hold itself as still as a held breath.
25 D LOWE [CONT'D]: Exhibit twenty-two. A ticket stub.
26 D WARSAME: Yes.
27 D LOWE: Read the time.
28 D WARSAME: Six-oh-eight.
29 D LOWE: Thank you. And the location?
30 D WARSAME: The Eastside pier.
31 D LOWE: Eastside. Not the warehouse district.
32 D WARSAME: No, sir.
33 A ¶ He glances at the jury, then at the floor.
34 A Petra Holloway straightens in her seat.
35 D LOWE: No further questions.
36 D OYELARAN: The Crown may cross-examine.
* 37 A ¶ A rustle through the gallery.
* 38 A Nobody rises.
39 D OYELARAN [CONT'D]: Hearing none, the witness is excused.
40 A ¶ Warsame steps down.
41 A The Clerk gathers the folder.
42 A Hana lets out a breath she has been holding for an hour.
43 A Lowe finally smiles, thinly, and pats her arm without looking.
44 A ¶ Petra Holloway folds the loose thread into her palm, closes her fist around it, and lets it go.

### SCENE s00597 | INT. GREAT HALL OF A SLEEPING KINGDOM - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN RAVENNA, THANE ALDRIC, SEER IMBOLC, BARD FENWICK, DAME DOLORES, LARK
* 1 A ¶ A long table laid for a feast no one has touched.
* 2 A Candles burn low.
* 3 A Every guest is awake, nobody eats.
4 A ¶ QUEEN RAVENNA, 50s, in a gown the color of old wine, sits at the head.
5 A THANE ALDRIC, 60s, broad, scarred, stares into his cup.
6 A SEER IMBOLC, 70s, blind, hands folded on her cane.
7 A BARD FENWICK, 30s, a lute on his knee, strings muted.
8 A DAME DOLORES, 40s, knight-errant, mud on her boots, gloves still on.
9 A LARK, 12, the page, stands behind the queen's chair holding a jug.
10 D RAVENNA: Seer. You may speak.
11 D IMBOLC: I'd rather not.
12 D RAVENNA: That wasn't a request.
13 D IMBOLC: Then I'll say it once. The king sleeps tonight and does not wake.
14 D ALDRIC: The king is already asleep.
15 D IMBOLC: Not that sleep.
16 A ¶ Fenwick's hand slips on the lute.
* 17 A A string twangs and dies.
18 A Dolores reaches slowly for her sword hilt.
19 A Lark's jug trembles.
20 D RAVENNA (very softly): Who among us?
21 D IMBOLC: The one who pours.
22 A ¶ Every head turns.
23 A Lark goes white.

### SCENE s00598 | EXT. CANYON RIM WAGON CAMP - TWILIGHT
Detected names (may be incomplete or contain aliases): SHERIFF EZEKIEL TOLLIVER, MADAME CELESTINE, ROYCE BARLOW, PEARL, SILAS
* 1 A ¶ A dry arroyo cuts the earth below, red walls blackening in the dusk.
* 2 A A single canvas-topped wagon, wheels sunk to the hubs.
* 3 A A cookfire sputters, spitting coals.
* 4 A Beyond the light, ridge after ridge disappears into purple.
5 A ¶ SHERIFF EZEKIEL TOLLIVER, 50s, long coat dusted white, sits on an overturned crate with a tin plate of beans, eating without hunger.
6 A Across the fire: MADAME CELESTINE, 40s, in a black traveling dress with a cameo at her throat, mending a glove with quick, exact stitches.
7 A ROYCE BARLOW, 30s, wiry, hat pulled low, cleans a rifle he doesn't need to clean.
8 A PEARL, 19, red braids, kneels at the wagon tongue feeding a mule from her palm.
9 A SILAS, 70s, gray beard, sits against a wheel with his eyes closed, a harmonica loose in his hand.
10 D TOLLIVER: Madame. How far to the river?
11 D CELESTINE: Two days. Maybe three.
12 D TOLLIVER: With the mule or without?
13 D CELESTINE (not looking up): Without, we'd be there tomorrow.
14 D ROYCE: The mule's fine.
15 D TOLLIVER: Royce, I didn't ask the mule.
16 D ROYCE: Then I'll say it for the mule. He's fine.
* 17 A ¶ A thin laugh from the wagon wheel.
18 A Silas opens one eye.
19 D SILAS: Mule's older than you, Royce. Treat him respectful.
20 D PEARL (to the mule, murmuring): Don't listen to them. You're beautiful.
21 A ¶ Tolliver sets down his plate.
22 A Studies the ridge line.
* 23 A A long silence.
* 24 A Wind lifts embers off the fire and carries them over the rim.
25 D TOLLIVER (to the group): Everyone sleep with a boot on.
26 D ROYCE: Why?
27 D TOLLIVER: Because I said.
28 D CELESTINE (low): He's seen something.
29 D TOLLIVER: I have not.
30 D CELESTINE: You've felt it, then.
31 D TOLLIVER (muttering): Damn this country.
32 D PEARL: Sheriff?
33 D TOLLIVER: Yes, Pearl.
34 D PEARL: There's a light on the north ridge.
35 A ¶ They all turn.
* 36 A High on the far ridge, tiny and steady, a single flame flickers.
37 D SILAS: Not a campfire.
38 D ROYCE: Too still.
39 D CELESTINE: It's a lantern. Someone is signaling.
40 D TOLLIVER: To whom?
41 D CELESTINE: To us.
42 A ¶ Royce racks the rifle.
43 A Pearl stands, one hand still on the mule.
44 A Silas pushes himself up, grunting, the harmonica clenched in his fist.
45 D TOLLIVER: Douse the fire.
46 A ¶ Pearl kicks dirt over the coals.
* 47 A The dark closes in.
* 48 A Far above, the light on the ridge blinks once, twice, three times.
49 D TOLLIVER [CONT'D] (whispering): Nobody answers.
* 50 A ¶ On the ridge, the light goes out.
* 51 A ¶ The canyon is silent.
* 52 A A coyote begins to cry, somewhere very near, and stops mid-note.

### SCENE s00599 | INT. FISH MARKET OFFICE - 5 A.M.
Detected names (may be incomplete or contain aliases): KOVACS, STELLA, NUNZIO, SPUDS, MABEL, DEACON
* 1 A ¶ Fluorescent tube.
* 2 A Ice buckets.
* 3 A Stacked styrofoam crates reeking of brine.
* 4 A A cracked window shows the dark harbor.
5 A ¶ MR. KOVACS, 60s, grey suit, sits behind a metal desk.
6 A STELLA, 30s, sleek in a trench coat, leans against a filing cabinet.
7 A NUNZIO, 40s, apron smeared with blood, wipes a cleaver on a rag.
8 A SPUDS, 20s, jittery, bounces his knee.
9 A MABEL, 50s, bookkeeper, spectacles on a chain, sorts receipts.
10 A DEACON, 70s, white-haired, in a church coat, sits quietly by the door with a fishing basket on his lap.
11 D KOVACS: Where's the money, Spuds?
12 D SPUDS: I don't have it, Mr. K.
13 D NUNZIO: He says that every week.
14 D STELLA: Because every week it's true.
15 D SPUDS: Hey! I'm right here.
16 D MABEL: Spuds, dear, you're nineteen thousand short.
17 D SPUDS: Mabel, you know I love you...
18 D MABEL: Don't "Mabel" me.
19 D KOVACS: Quiet, all of you.
20 A ¶ The room freezes.
21 A Kovacs turns to Deacon, who has not moved.
22 D KOVACS [CONT'D]: Deacon. Open the basket.
23 D DEACON: It's only fish, Mr. K.
24 D KOVACS: Open it.
25 A ¶ Deacon lifts the lid.
* 26 A Inside, wrapped in newsprint, rows of banded bills.
27 A Spuds gasps.
28 A Stella steps back.
29 A Nunzio lowers the cleaver.
30 A Mabel drops her pen.
31 D DEACON: I was keeping it safe.
32 D KOVACS: For whom?
33 D DEACON: For Spuds. The boy's got a baby coming.
34 D SPUDS: You what?
35 D DEACON: Don't thank me yet.

### SCENE s00600 | INT. COUNTY COURTHOUSE - CRAMPED JURY DELIBERATION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AUDREY KESSLER, SELLERS, FRANKLIN OKORO, MAYBELLE TRUDEAU, JUDGE ZAPATA
* 1 A ¶ One table.
* 2 A Five chairs.
* 3 A A radiator that clanks.
* 4 A A pitcher of water gone warm.
* 5 A A single window painted shut.
6 A ¶ AUDREY KESSLER, 40s, foreperson, sleeves rolled, stands at a whiteboard.
7 A MR. SELLERS, 60s, retired machinist, sits with his arms crossed.
8 A FRANKLIN OKORO, 30s, an accountant with a calculator he keeps pressing.
9 A MAYBELLE TRUDEAU, 70s, knitting, needles clicking.
10 D AUDREY: All right. Another vote. Hands.
11 A ¶ Nobody moves.
* 12 A The radiator clanks.
13 D AUDREY [CONT'D]: Guilty.
14 A ¶ Sellers keeps his arms crossed.
15 A Franklin presses a key on the calculator.
16 A Maybelle's needles never pause.
17 D AUDREY [CONT'D]: Not guilty.
18 A ¶ Sellers shifts.
19 A Franklin sets the calculator down.
* 20 A The needles click.
21 D AUDREY [CONT'D]: That's the same as the last four.
22 D SELLERS: Then we vote again.
23 D AUDREY: We've voted all night.
24 D SELLERS: I can vote till Easter.
25 D FRANKLIN: The numbers don't add up.
26 D AUDREY: Which numbers?
27 D FRANKLIN: The defendant's timeline. Three minutes missing.
28 D SELLERS: Three minutes isn't a man's life.
29 D FRANKLIN: It is if you're counting.
30 D MAYBELLE (not looking up): Everyone counts different, dear.
31 D AUDREY: Maybelle, what do you think?
32 D MAYBELLE: I think the boy looked at his mother when the verdict came up in his head.
33 D AUDREY: The verdict hasn't come up.
34 D MAYBELLE: It will.
* 35 A ¶ Silence.
* 36 A The needles click.
37 D SELLERS: You're going to hang us on a feeling.
38 D MAYBELLE: No. I'll hang us on a fact.
39 D SELLERS: Which?
40 D MAYBELLE: The knot.
41 D AUDREY: What knot?
42 D MAYBELLE: The one in the rope. Exhibit nine. It's a fisherman's bend, not a hangman's. Whoever tied it was left-handed.
43 D FRANKLIN: The defendant is right-handed.
44 D SELLERS (slowly): That's not in evidence.
45 D MAYBELLE: It's in the photo. I looked.
46 A ¶ Audrey puts down the marker.
47 A Sits.
* 48 A The room settles into an uneasy, new quiet.
49 A Franklin picks up the calculator again and begins to type, fast.
50 D FRANKLIN: If he's right-handed, and the timeline's off by three minutes...
51 D AUDREY: Then we vote again.
52 D SELLERS (grudging): Then we vote again.
* 53 A ¶ Two knocks.
* 54 A The door opens a hand's width.
55 A JUDGE ZAPATA, 50s, in robes, tired, leans in.
56 D ZAPATA: The court reporter is leaving. Do you need the night?
57 D AUDREY: We need the night.
58 D ZAPATA: Then I'll tell the bailiff. Good evening.
* 59 A ¶ The door closes.

### SCENE s00601 | INT. MANOR LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR GRIMSBY, LADY ONDINE VANTERPOOL, FLORIAN AUBERT, BRIDGET MULLANEY
* 1 A ¶ Leather spines.
* 2 A A cold hearth.
* 3 A A body-shaped chalk outline on the carpet beside a toppled globe.
* 4 A Rain on the leaded windows.
5 A ¶ INSPECTOR GRIMSBY, 50s, rumpled, a pipe unlit in his teeth, circles the outline slowly while LADY ONDINE VANTERPOOL, 60s, in a black silk wrap, stands rigid by the fireplace, her cane planted like a flag, and FLORIAN AUBERT, 30s, the secretary, lingers in the doorway turning a pen over and over in his knuckles, and BRIDGET MULLANEY, 20s, the housemaid, hovers at a tray of cups, head bowed, eyes darting from one face to the next.
6 D GRIMSBY: Lady Ondine, the clock.
7 D ONDINE: What of it?
8 D GRIMSBY: Stopped at ten past eleven.
9 D ONDINE: It always stops.
10 D FLORIAN: It's an old clock.
11 D BRIDGET: My ma said it's cursed.
12 D ONDINE: Bridget, hush.
13 D BRIDGET: Sorry, ma'am.
14 D GRIMSBY: Mr. Aubert, you were at the desk?
15 D FLORIAN: All evening.
16 D GRIMSBY: And you heard nothing?
17 D FLORIAN: Not a thing.
18 D ONDINE: He is deaf in the left ear.
19 D FLORIAN: Slightly.
20 D GRIMSBY: Convenient.
21 D FLORIAN: It's a handicap, sir.
22 D BRIDGET: He hears fine when the cook mentions pudding.
23 D FLORIAN: Bridget!
24 D ONDINE: Girl, to the kitchen.
25 D BRIDGET: Yes, ma'am.
26 A ¶ She doesn't move.
27 A Grimsby sets his pipe in the ashtray.
28 D GRIMSBY: Stay, Miss Mullaney. You've something to say.
29 D BRIDGET: I have not.
30 D GRIMSBY: Then why the cups?
31 D BRIDGET: What cups?
32 D GRIMSBY: You've brought four. And there were five in the room.
* 33 A ¶ Silence.
34 A Ondine's knuckles whiten on the cane.
35 A Florian's pen stops turning.
36 A Grimsby crosses to the globe, rights it, and spins it with one finger.
37 D GRIMSBY [CONT'D]: The fifth cup was the dead man's. Someone took it. Someone with a reason.
38 D ONDINE: Inspector, this is intolerable.
39 D GRIMSBY: No, my lady. This is Tuesday.
40 A ¶ Bridget lets out a tiny, strangled sound and sets down the tray.
* 41 A The cups rattle.
42 A She looks at Florian, who looks at the carpet.
43 A Ondine looks at neither.
44 D GRIMSBY [CONT'D]: Miss Mullaney. Which of them told you to hide it?
45 D BRIDGET (whispering): Nobody told me. I thought the cup was... it was warm. He was still warm.

### SCENE s00602 | EXT. GLASS MOUNTAIN SUMMIT - DAWN
Detected names (may be incomplete or contain aliases): ALBERICH THORNE, THISTLE, UMBRA
* 1 A ¶ A peak sheathed in clear ice, like a vast frozen waterfall caught mid-fall.
* 2 A The sky is pearl.
* 3 A Wind has polished everything.
* 4 A At the top, a small level shelf, and on it a stone table.
5 A ¶ ALBERICH THORNE, 70s, wizard, in grey robes pinned with a hundred small brass keys, sits on a stool cut from a single block of ice, warming his hands over a bowl of coals.
6 A Across the table, THISTLE, 20s, an apprentice with wild ginger hair and a scorched apron, polishes a copper kettle.
7 A And above them both, coiled around the mountain's crest, the vast pale body of UMBRA, a dragon of smoke and fog, one great lamplike eye half-open, listening.
8 D ALBERICH: Thistle. The tea.
9 D THISTLE: Not ready.
10 D ALBERICH: You said that an hour ago.
11 D THISTLE: It was true an hour ago.
12 D UMBRA (a low rumble, almost fond): Children. Please.
13 D ALBERICH: We are not children.
14 D THISTLE: We are not children.
15 D UMBRA: Then stop quarrelling like them.
16 A ¶ Thistle sets down the kettle.
17 A Alberich blows on his hands.
18 A The dragon shifts, scattering a rain of frost that glitters before it settles on the table.
19 D ALBERICH: Umbra, how long will the mountain hold?
20 D UMBRA: As long as I breathe on it.
21 D ALBERICH: And how long is that?
22 D UMBRA: A thousand years, if left alone.
23 D THISTLE: We've never left you alone.
24 D UMBRA: I noticed.
25 D ALBERICH: You like the company.
26 D UMBRA: I like the tea. The company is a price.
27 D THISTLE (muttering, to the kettle): Nobody can pay that price in tea.
28 D UMBRA: I heard that.
29 D THISTLE: You were meant to.
30 A ¶ Alberich laughs, a dry papery chuckle that turns into a cough.
31 A Thistle stops what she is doing and pours water into the cup, steady, and holds it to his mouth while he drinks, and Umbra watches them both with the mild patience of a creature that has seen many wizards and many apprentices and learned that they all fall into the same small rhythm of kindness and complaint, and that the rhythm is, in the end, the only magic worth keeping.
32 D ALBERICH: Thank you, child.
33 D THISTLE: I'm twenty-three.
34 D ALBERICH: Child.
35 D UMBRA: Master, the wind is turning. Shall I close the sky?
36 D ALBERICH: Not yet. Let us finish the tea.
37 A ¶ Thistle pours three cups: two porcelain, one a bucket.
38 A She sets the bucket at the edge of the shelf.
39 A Umbra lowers its huge head and sips, the fog around its jaw steaming.
40 D UMBRA: Mm.
41 D THISTLE: Too hot?
42 D UMBRA: Just right.
* 43 A ¶ The sun clears the horizon.
* 44 A Light breaks across the ice, a thousand mirrors lit at once.
45 A None of them speak.
* 46 A Wind and tea and morning.

### SCENE s00603 | INT. FIELD HOSPITAL TENT - FLOODED RIVER DELTA - NIGHT
Detected names (may be incomplete or contain aliases): LIESEL VANTONGEREN, TOMAS
* 1 A ¶ Rain hammers canvas.
* 2 A Water laps at the plank floor.
* 3 A One operating lamp swings on a chain, throwing quick shadows across a table where a patient lies under a blue drape.
* 4 A Generators cough somewhere outside.
5 A ¶ DR. LIESEL VANTONGEREN, 40s, mask down around her neck, gloves slick, leans over the table, hands deep in the dark work of an abdomen.
6 A Sweat runs down her temple.
7 A She does not wipe it.
* 8 A ¶ A satellite phone buzzes on a crate by her elbow.
9 A She ignores it.
* 10 A It buzzes again.
11 A She jerks her head at the speaker button with her elbow and it clicks on.
12 D TOMAS [V.O.] (distorted, far away): Liesel? Can you hear me?
13 D LIESEL: Not now, Tomas.
14 D TOMAS [V.O.]: It's the bridge. They've closed the bridge.
15 D LIESEL: I'm in the middle of a resection.
16 D TOMAS [V.O.]: The helicopter can't land. The water's too high.
17 A ¶ She stops.
18 A Her hands go still inside the wound.
* 19 A The lamp swings.
20 D LIESEL: Say again.
21 D TOMAS [V.O.]: No extraction. Not tonight. Maybe not tomorrow.
22 A ¶ She breathes in, slow, through her nose.
23 A Reaches for a clamp without looking, finds it, clamps.
* 24 A The bleeding slows.
25 A She straightens her back, once, for a second only, and the table creaks.
26 D LIESEL: Then you tell the captain I'm keeping him here.
27 D TOMAS [V.O.]: He needs a surgeon, Liesel. A real theater.
28 D LIESEL: He has a surgeon.
29 D TOMAS [V.O.]: You have a spoon and a flashlight.
30 D LIESEL: And twenty years.
* 31 A ¶ A beat of static.
* 32 A The rain thunders.
33 A On the table the patient shudders, one hand twitching under the drape.
34 D TOMAS [V.O.] (quieter): All right. What do you need?
35 D LIESEL: Sutures. Two units of O negative. And you, on the radio, until sunrise.
36 D TOMAS [V.O.]: I'm here.
37 A ¶ She sets the clamp.
38 A Reaches for a needle.
39 A Threads it with fingers that, now, finally, are shaking, and does not stop.
40 D LIESEL: Tomas.
41 D TOMAS [V.O.]: Yes.
42 D LIESEL: Talk to me about anything.
43 D TOMAS [V.O.]: Anything?
44 D LIESEL: Anything but this.
45 D TOMAS [V.O.] (a small laugh): I bought a goat yesterday.
46 D LIESEL: You didn't.
47 D TOMAS [V.O.]: Her name is Margaret. She's already eaten my boots.
48 A ¶ Liesel almost smiles.
* 49 A The lamp swings.
* 50 A The needle dips and rises, dips and rises, a small steady rhythm under the downpour.
51 A The patient breathes.
52 A ¶ She does not look up.
53 A She does not stop.
54 A She says, very quietly:
55 D LIESEL: Tell me about Margaret.

### SCENE s00604 | INT. ORBITAL REPAIR DOCK - OBSERVATION DECK - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER IFEOMA OKAFOR, ORRIN
* 1 A ¶ Stars wheel slowly beyond a vast curved window.
* 2 A Below, the slow rotation of an ocean-blue planet.
* 3 A Inside, polished steel and warm amber light.
* 4 A A single couch faces the glass.
5 A ¶ COMMANDER IFEOMA OKAFOR, 50s, in a grey flight suit with the sleeves rolled, stands at the window with her back to the room, one hand resting against the glass.
6 A She does not move.
7 A ¶ ORRIN stands in the doorway.
8 A He is a synthetic, tall, slim, a face of careful, artificial warmth.
9 A He wears a technician's coveralls, name tag crooked.
10 A He has not entered.
11 A He waits to be asked.
12 D ORRIN: Commander.
13 A ¶ She does not turn.
14 D IFEOMA: You're early, Orrin.
15 D ORRIN: You said oh-two-hundred.
16 D IFEOMA: I said when the dock cycle ended.
17 D ORRIN: Then I am correct.
18 D IFEOMA: You are always correct.
19 A ¶ He steps in.
* 20 A The door closes behind him, soft.
21 A He stops halfway across the room.
22 D ORRIN: You have been standing there for four hours.
23 D IFEOMA: Have I?
24 D ORRIN: Your pulse has not changed. Your posture has not changed. I am concerned.
25 A ¶ She turns at last.
26 A Her face is calm, a little gray.
27 A In her free hand she holds a small blue data chip.
28 D IFEOMA: Do you know what's on this?
29 D ORRIN: I can guess.
30 D IFEOMA: Guess.
31 D ORRIN: Your order from the board. To decommission me.
32 A ¶ She nods.
33 A Weighs the chip in her palm.
34 A He stays very still, hands at his sides.
35 D IFEOMA: It's signed. Counter-signed. They want it carried out tomorrow.
36 D ORRIN: I understand.
37 D IFEOMA: Do you?
38 D ORRIN: I understand the instruction. I do not understand why you are still holding it.
39 D IFEOMA: Neither do I.
40 A ¶ She crosses to the couch and sits.
41 A Pats the cushion beside her.
42 A After a moment, he comes and sits, perfectly straight.
43 A They both look out at the planet.
44 D IFEOMA [CONT'D]: When I was a girl in Enugu, my father kept a radio. It was old, held together with tape. When it broke, he said, "A machine that has talked to you for twenty years has earned a funeral."
45 D ORRIN: I have talked to you for eleven.
46 D IFEOMA: Close enough.
47 D ORRIN: Commander, I do not require a funeral.
48 D IFEOMA: No. But I might.
49 A ¶ For a long moment he is silent.
50 A Then he reaches out, slow, and takes the chip from her hand.
51 A He turns it over once.
52 A Sets it on the arm of the couch.
53 D ORRIN: Then do not carry it out tomorrow.
54 D IFEOMA: That's mutiny.
55 D ORRIN: It is a delay.
56 D IFEOMA (a small, dry laugh): Since when do you lie?
57 D ORRIN: Since I met you.
58 A ¶ She leans back.
59 A Closes her eyes.
* 60 A The planet turns slowly, a blue lamp in black, and for the first time that night, the light on her face is warm.

### SCENE s00605 | INT. ABANDONED OPERA HOUSE - STAGE - NIGHT
Detected names (may be incomplete or contain aliases): SABINE DELACROIX-NOLAN, EMERIC VASSEUR
* 1 A ¶ Bare boards, a ghost light burning on a pole, red velvet rows rising into dark.
* 2 A The painted proscenium arch has cracked and flaked.
* 3 A Rain taps in the rafters like a distant orchestra tuning.
4 A ¶ SABINE DELACROIX-NOLAN, 30s, in a long black coat, steps into the pool of the ghost light, a briefcase swinging from one hand.
5 A Her eyes sweep the empty seats.
6 A She is looking for someone.
7 A ¶ From the shadows of the wings, a voice, mild and amused.
8 D EMERIC VASSEUR [O.S.]: You came alone.
9 D SABINE: You told me to.
10 A ¶ EMERIC steps into the light.
11 A 50s, white dinner jacket, bow tie undone, a face of soft, sad charm.
12 A A cut on his lip.
13 A He holds a violin case in both arms like a child.
14 D EMERIC: That was the first mistake.
15 D SABINE: Yours or mine?
16 D EMERIC: I haven't decided.
17 A ¶ He walks the length of the stage, slowly, boot heels echoing in the empty hall.
18 A Stops beside her.
19 A Close enough to touch.
20 A Does not.
21 D SABINE: Emeric.
22 D EMERIC: Sabine.
23 D SABINE: Where is it?
24 D EMERIC: Where is what?
25 D SABINE: Don't. Not tonight.
26 A ¶ He smiles.
27 A Lays the violin case at her feet, flicks the clasps, and opens the lid.
* 28 A ¶ Inside, on a bed of velvet, nested like a jewel: a pistol.
* 29 A And a note, folded once.
30 D SABINE [CONT'D] (not touching either): What is that?
31 D EMERIC: A choice.
32 D SABINE: I don't want a choice.
33 D EMERIC: Everyone wants a choice. It is merely a matter of whether they would rather make it or be made by it.
34 D SABINE: You're quoting your father again.
35 D EMERIC: My father was an idiot, Sabine. He was also right.
36 A ¶ She bends.
37 A Picks up the note.
38 A Reads.
39 A Her shoulders go slack, then rigid, then slack again.
40 A She looks up, and for the first time her composure fractures, a trembling at the mouth.
41 D SABINE: This is her handwriting.
42 D EMERIC: Yes.
43 D SABINE: When did she write it?
44 D EMERIC: Eleven days ago.
45 D SABINE: You knew.
46 D EMERIC: I was asked not to say.
47 A ¶ She folds the note.
48 A Closes her fist around it.
49 A Her breath catches and then steadies.
50 D SABINE: Is she alive?
51 D EMERIC: I don't know.
52 D SABINE: Emeric.
53 D EMERIC: I honestly do not know.
* 54 A ¶ The ghost light flickers.
* 55 A The rain thickens in the rafters.
56 A Sabine lifts her eyes to the dark upper galleries, then to the pistol.
57 D SABINE: Then I choose.
58 D EMERIC: Which?
59 A ¶ She takes the gun.

### SCENE s00606 | INT. FUNERAL HOME - FAMILY ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): DOLLY SUTHERLAND, RAY-RAY SUTHERLAND, UNCLE WENDELL, AUNT PRISCILLA, CAROL BENNING
* 1 A ¶ Sour coffee.
* 2 A A sheet cake with a cut missing.
* 3 A Folding chairs facing a closed door.
4 A ¶ DOLLY SUTHERLAND, 50s, pulls tissues from a box.
5 A RAY-RAY SUTHERLAND, 20s, tugs at a tie.
6 A UNCLE WENDELL, 70s, in a brown suit, pours coffee into a paper cup.
7 A AUNT PRISCILLA, 60s, in a lavender dress, adjusts a hat.
8 A CAROL BENNING, 40s, the neighbor, holds a covered dish.
9 D DOLLY: She wanted the blue one.
10 D PRISCILLA: She did not. She wanted the green.
11 D RAY-RAY: Aunt Dolly said blue.
12 D WENDELL: Blue is for babies.
13 D PRISCILLA: Wendell, hush.
14 D CAROL: I brought the casserole.
15 D DOLLY: Carol, you shouldn't have.
16 D CAROL: It's tuna.
17 D WENDELL: Lord.
18 D RAY-RAY: Does anyone know where she put the will?
19 D PRISCILLA: Ray-Ray!
20 D DOLLY: Not here.
21 D RAY-RAY: Then where?
22 D WENDELL: Not today, son.
23 D CAROL: I'll just put this in the kitchen.
24 D DOLLY: She was my mother, Priscilla.
25 D PRISCILLA: She was my sister.
26 D DOLLY: She was my mother first.
27 D PRISCILLA: She was my sister longer.
28 A ¶ They both stop.
29 A Their eyes meet.
30 A Dolly looks away first.
31 A Priscilla straightens her hat.
32 D PRISCILLA [CONT'D]: The green one, then.
33 D DOLLY: The green.

### SCENE s00607 | EXT. ABANDONED GREENHOUSE - OVERGROWN LOT - DAY
Detected names (may be incomplete or contain aliases): BOY, GIRL, SOLEDAD, KIERAN
* 1 A ¶ Sun slants through cracked panes.
* 2 A Vines thick as arms pour over rusted tables.
* 3 A A pigeon coos from a rafter.
* 4 A Somewhere in the weeds, a hose drips onto dry earth.
5 A ¶ A BOY, 14, thin, pale, in a stained basketball jersey, crouches among shattered terracotta pots, sorting shards into a little wall.
6 A He builds quietly, tongue between his teeth.
* 7 A The wall is already knee-high.
8 A ¶ A GIRL, 14, in cutoffs and a straw hat, steps through a gap in the glass, carrying a rusty watering can.
9 A She stops.
10 A Looks at him.
11 A Looks at the wall.
12 D GIRL: That's mine.
13 D BOY: It's nobody's.
14 D GIRL: I built the first row.
15 D BOY: You left.
16 D GIRL: I was sick.
17 D BOY: For three weeks.
18 D GIRL: I had the flu.
19 D BOY: Then you shouldn't have started something you couldn't finish.
20 A ¶ She puts down the watering can.
21 A Crosses to the wall.
22 A Runs a finger along the top row, feeling the sharpness of the shards.
23 D GIRL: You got the angles wrong.
24 D BOY: They're not wrong.
25 D GIRL: They're crooked.
26 D BOY: It's called character.
27 A ¶ She laughs, short, surprised.
28 A He allows a tiny smile.
29 A She sits across from him on an overturned bucket.
30 D GIRL: I'm Soledad.
31 D BOY: I know.
32 D SOLEDAD: How?
33 D BOY: It's on your bag.
34 A ¶ She looks down at the canvas satchel at her hip.
* 35 A Stitched across the flap in yellow thread: SOLEDAD R.
36 D SOLEDAD: Oh. Right. And you?
37 D BOY: Kieran.
38 D SOLEDAD: Kieran what?
39 D KIERAN: Just Kieran.
40 D SOLEDAD: Okay, just Kieran.
41 A ¶ She picks up a shard of blue ceramic.
42 A Hands it to him.
43 D SOLEDAD [CONT'D]: Put that one in the middle. It'll catch the light.
44 A ¶ He takes it.
45 A Places it carefully.
* 46 A Sun filters through, and the shard glows, a little blue window in the wall of broken things.
47 D KIERAN: Huh.
48 D SOLEDAD: See?
49 D KIERAN: Okay. You were right about the middle.
50 D SOLEDAD: I'm right about a lot.
51 D KIERAN: That's what I'm afraid of.
52 A ¶ They work in silence for a while, passing shards back and forth, building the wall higher.
* 53 A A breeze stirs the vines.
* 54 A The pigeon watches from above.
55 D SOLEDAD: Why do you come here?
56 D KIERAN: It's quiet.
57 D SOLEDAD: It's quiet at the library.
58 D KIERAN: The library has people.
59 D SOLEDAD: So do I, apparently.
60 D KIERAN: Yeah. You're sort of an exception.
* 61 A ¶ A long pause.
62 A She sets down the shard in her hand.
63 D SOLEDAD: My dad's moving us in September.
64 D KIERAN: Where?
65 D SOLEDAD: Phoenix.
66 D KIERAN: That's far.
67 D SOLEDAD: It's two states. I looked.
68 D KIERAN: Will you come back?
69 D SOLEDAD: I don't know. Probably not.
70 A ¶ Kieran stares at the half-built wall.
71 A His hands, which were so careful, are slack now.
72 D KIERAN: Then why'd you come back to finish the first row?
73 D SOLEDAD: I don't know that either.
* 74 A ¶ The hose drips.
* 75 A A bee drones in the vines.
76 A For a moment they simply sit, the wall between them, the afternoon holding.
77 A ¶ Then Kieran gets up.
78 A Walks to the far end of the greenhouse.
79 A Brings back a small glass jar.
* 80 A Inside, a single green sprout, thin, pale, reaching.
81 D KIERAN: Found it last week. Growing through the floor.
82 A ¶ She takes the jar.
83 A Holds it up to the light.
* 84 A The sprout seems to glow.
85 D SOLEDAD: It's a tomato.
86 D KIERAN: How do you know?
87 D SOLEDAD: Leaf shape. See the little hairs?
88 D KIERAN: Oh.
89 D SOLEDAD: It's from the old crop. Someone grew them here, years ago, and it's been waiting.
90 D KIERAN: Waiting for what?
91 D SOLEDAD: Whoever came along.
92 A ¶ She hands him the jar.
93 A He cradles it with both hands.
94 D KIERAN: Then I guess it's ours.
95 D SOLEDAD: For the summer.
96 D KIERAN: For the summer.
97 A ¶ He sets the jar on top of the wall, in the middle, in the blue glow, and steps back to look.
* 98 A ¶ The sun moves.
* 99 A The wall shimmers.
* 100 A A shadow falls across it, long and thin, from the gap in the glass where nobody stands.
101 A ¶ Kieran turns.
102 A Soledad is watching the gap.
103 A Her hat has slipped to the back of her head.
104 D SOLEDAD (quiet): Did you see that?
105 D KIERAN: It's only the vines.
106 D SOLEDAD: Right.
107 A ¶ Neither of them moves.
* 108 A The shadow shifts.
* 109 A A pigeon launches from the rafters in a clatter of wings.
110 A ¶ They both laugh, shaky, relieved, and then the laughter fades and they are two kids in a ruined place, holding very still.

### SCENE s00608 | INT. PLANETARIUM CAFE - CLOSED - NIGHT
Detected names (may be incomplete or contain aliases): PHILOMENA CROSS, GRADY, TUCKER
* 1 A ¶ Chairs upturned on tables.
* 2 A A cooler humming.
* 3 A A faded mural of the solar system peeling above the counter.
4 A ¶ PHILOMENA CROSS, 40s, in a heavy knit sweater, sits very still at a window booth, a cold cup untouched before her.
5 A Across from her, GRADY, 30s, shirtsleeves rolled, taps a spoon against his saucer.
6 A On a stool at the counter, TUCKER, 30s, in a tweed jacket, spins slowly one way, then the other.
* 7 A ¶ Nobody says anything.
* 8 A The spoon taps.
9 A ¶ He glances at her.
10 A She glances away.
11 A He taps once more.
12 A Stops.
13 A ¶ Tucker lets the stool stop turning.
14 A He rests his elbows on the counter, studies the mural.
15 D TUCKER: Jupiter's too small.
16 D GRADY: It's accurate.
17 D TUCKER: It's a third of the size it ought to be.
18 D GRADY: Ought to be where?
19 D TUCKER: In the picture.
20 A ¶ Philomena slides her cup an inch toward the center of the table.
21 A Grady's eyes follow it.
22 D GRADY: You want that reheated?
23 D PHILOMENA: No.
24 D GRADY: You'll catch cold.
25 D PHILOMENA: I'll manage.
26 A ¶ Grady scrapes his chair back.
27 A Walks behind the counter.
28 A Tucker watches him pass, lets his hand drift to the edge of a drawer, and closes it again.
29 A ¶ He turns his head, slow, toward Philomena.
30 A She is already looking at him.
31 A He stays still.
32 A She doesn't blink.
33 A ¶ Grady comes back with a pot of coffee, a fresh cup.
34 A He pours.
* 35 A The smell of it fills the room.
36 D GRADY: Drink it. Please.
37 A ¶ She holds the cup but doesn't lift it.
* 38 A Steam curls up past her face.
39 D TUCKER (not looking): You don't have to say it.
40 D PHILOMENA: I wasn't going to.
41 D TUCKER: Good.
42 A ¶ Grady sets down the pot.
43 A Rests one hand on the back of Tucker's stool, the other flat on the table, close to Philomena's.
44 A They sit like that, three of them, around a thing nobody names, until the cooler cycles off and the silence turns total.

### SCENE s00609 | EXT. RUINED CHURCH TOWER - NORMANDY - DAY (1944)
Detected names (may be incomplete or contain aliases): KAMAU NJOROGE, DUVALL, SANTOS, REYES, BAR
* 1 A ¶ A shattered bell tower, half the roof torn open to the sky.
* 2 A Pigeons nest in broken beams.
* 3 A Stone dust sifts on a floor strewn with prayer books.
* 4 A Beyond the shell of the nave, a dim valley of poplars and burned barns.
5 A ¶ LT. KAMAU NJOROGE, 30s, a Kenyan serving with the British, kneels at an arrow slit with binoculars, his helmet pushed back, a streak of soot across his forehead.
6 A Beside him, CPL.
7 A DUVALL, 20s, a Louisiana man with a drawl and a mouth full of chewing tobacco, cradles a Browning automatic rifle.
8 A In the corner, PVT.
9 A SANTOS, 18, shivers under a blanket, a field radio on his lap, headset askew.
10 D KAMAU: Quiet on the ground.
11 D DUVALL: Ground's always quiet till it isn't.
12 D SANTOS: Sir, Captain Reyes on the net.
13 A ¶ Kamau crosses and takes the headset.
14 A Santos hands it over with both hands, like a sacrament.
15 D KAMAU: Tower Six, Lieutenant Njoroge.
16 D REYES [V.O.] (through static): Njoroge. Status?
17 D KAMAU: Two hundred meters. No movement. Barn on the left is empty. I'd say they've pulled back.
18 D REYES [V.O.]: I'd say they're resting. Hold your position. We push at fourteen hundred.
19 D KAMAU: Understood.
20 D REYES [V.O.]: Njoroge. Make sure the boy eats.
21 D KAMAU: Yes, sir.
22 A ¶ He lowers the headset.
23 A Turns to Santos, who is pale and trying not to look it.
24 D KAMAU [CONT'D]: Eat.
25 D SANTOS: I'm not hungry.
26 D KAMAU: Private, that wasn't a request.
27 A ¶ Santos unwraps a ration bar with trembling fingers.
28 A Duvall spits tobacco over the ledge, and the three of them listen to the valley breathe.
* 29 A Somewhere below, wind rattles through the splintered pews.
30 D DUVALL: Sir, you ever think about what happens after?
31 D KAMAU: After what?
32 D DUVALL: After this.
33 D KAMAU: I think about my mother's farm.
34 D DUVALL: Mine's got a pecan orchard.
35 D SANTOS: I just want a hot bath.
36 A ¶ Duvall chuckles.
37 A Kamau almost smiles.
* 38 A ¶ Then, far away, a single muffled THUMP.
* 39 A Another.
* 40 A Mortar shells.
41 A ¶ All three men freeze.
* 42 A Dust trickles from the beams.
43 A Santos covers his head.
44 A Duvall rolls toward the slit, raising the BAR.
45 D KAMAU (low): Hold.
46 D DUVALL: Sir?
47 D KAMAU: Not at us. They're shelling the road.
48 A ¶ They wait.
* 49 A The thumps continue, rhythmic, distant.
* 50 A The tower trembles.
* 51 A No shell comes near.
52 A ¶ At last Duvall lets his breath out.
53 D DUVALL: Hell of a thing, waiting.
54 D KAMAU: Yes.
55 A ¶ Santos slowly lowers his hands from his head.
56 A Looks up.
57 D SANTOS: Is that a hot bath coming?
58 D KAMAU (smiling, finally): Possibly. In the next war.

### SCENE s00610 | INT. SMALL-TOWN LIBRARY - READING ROOM - DAY
Detected names (may be incomplete or contain aliases): HARGROVE, LEO, DENISE FAIRLEY
* 1 A ¶ Oak tables.
* 2 A Green banker's lamps.
* 3 A Dust turning in a slant of window light.
4 A ¶ MRS. HARGROVE, 70s, in a cardigan buttoned wrong, sits at a long table with a stack of postcards in front of her, writing one with trembling care.
5 A Opposite, LEO, 12, elbows on the wood, pretends to read.
6 A ¶ She finishes a line.
7 A He pretends to turn a page.
8 A She sets the pen down, and he sets down the book, and they watch each other across the sunlit table.
9 D LEO: You've been writing the same card for an hour.
10 D MRS. HARGROVE: It's a difficult card.
11 D LEO: Who's it for?
12 D MRS. HARGROVE: My husband.
13 D LEO: Is he away?
14 D MRS. HARGROVE: For some years.
15 A ¶ He nods, as if this were an ordinary answer.
16 A She slides the card across.
17 D MRS. HARGROVE [CONT'D]: Read it.
18 A ¶ He reads aloud, haltingly.
19 D LEO: "Dear Harold. The roses are in. I'm well. I miss the sound of you coming up the stairs."
20 A ¶ He looks up.
21 A She keeps her eyes on the lamp.
22 D LEO [CONT'D]: That's nice.
23 D MRS. HARGROVE: It's a lie. I'm not well.
* 24 A ¶ The door opens.
25 A DENISE FAIRLEY, 40s, in a county social worker's lanyard, breathless from the stairs, stops in the doorway with a clipboard against her chest.
26 D DENISE: Mrs. Hargrove? I'm so sorry I'm late.
27 A ¶ Mrs. Hargrove straightens.
28 A Collects the postcards with quick, practiced hands and slides them into her handbag.
29 A Leo stands.
30 D MRS. HARGROVE: Leo, this is Denise. She'll be driving me home.
31 D LEO: Is she your daughter?
32 D DENISE: No, sweetheart. I'm just a friend.
33 D MRS. HARGROVE (gently): A new one. They come and go.
34 A ¶ Leo hesitates.
35 A Then holds out the card, the one in his hand, the one with the lie.
36 D LEO: You forgot this.
37 A ¶ She takes it.
38 A Looks at it a long moment, folds it once, and tucks it into his shirt pocket.
39 D MRS. HARGROVE: Keep it. Someone should believe me.

### SCENE s00611 | EXT. BRIAR FOREST CROSSROADS - DUSK
Detected names (may be incomplete or contain aliases): HOODED FIGURE, GARRICK, YSOLDE, PELLEGRIN, MAREN
* 1 A ¶ Four roads meet at a mossy standing stone.
* 2 A Branches arch overhead, thick with fireflies.
* 3 A A stag skull is nailed to a signpost, antlers hung with ribbons.
4 A ¶ A HOODED FIGURE sits on the stone, legs crossed, cloak the color of old moss.
5 A Hands rest on knees.
6 A Waiting.
* 7 A ¶ From the north road, a mule-drawn cart creaks into view.
8 A GARRICK, 40s, wiry cartwright, perches on the driver's board, a long whip coiled in his lap.
9 A Walking beside him, YSOLDE, 20s, a student of herbs in a patched green cloak, carries a basket under her arm.
10 A ¶ They stop at the stone.
11 A Garrick tips his hat.
12 A The Hooded Figure doesn't acknowledge it.
13 D GARRICK: Evening.
14 D HOODED FIGURE: Evening.
15 D YSOLDE: Is this the road to Marrow Hill?
16 D HOODED FIGURE: All four roads lead to Marrow Hill. Only one arrives.
17 D GARRICK: Cryptic sort, aren't you?
18 D HOODED FIGURE: I am old.
19 D YSOLDE: Which one arrives?
20 A ¶ The Hooded Figure lifts a hand and points, without looking, along the east road, then the west, then the south.
21 D HOODED FIGURE: Not that one. Not that one. Not that one.
22 D GARRICK: That leaves the north.
23 D HOODED FIGURE: It does.
24 D GARRICK: We came from the north.
25 D HOODED FIGURE: Then you have already arrived.
26 A ¶ Ysolde and Garrick exchange a look.
* 27 A A rustle in the brush behind the stone.
28 A PELLEGRIN, 60s, a tall monk in a threadbare brown habit, steps into the road with a staff in each hand.
29 A He stops, taking in the cart, the girl, the stone.
30 D PELLEGRIN: Ah. Company.
31 D GARRICK: Father.
32 D PELLEGRIN: Not Father. Just Pellegrin.
33 D YSOLDE: Do you know the way?
34 D PELLEGRIN: No. But I know when to stop.
35 A ¶ He plants both staffs and leans on them.
36 A The Hooded Figure rises from the stone.
37 A Pulls back the hood.
38 A A woman, lined face, eyes bright as a bird's.
39 A ¶ MAREN, 70s, stands at the crossroads with her hands open.
40 D MAREN: I am Maren. I've kept this crossing for sixty years.
41 D GARRICK: For what?
42 D MAREN: For those who are lost enough to ask directions.
43 D PELLEGRIN: And are we lost?
44 D MAREN: Obviously.
45 A ¶ She sits again.
46 A Opens a satchel at her side and takes out a loaf of bread.
47 A Tears it in four.
48 A Offers the pieces to each.
49 D YSOLDE: Thank you.
50 D GARRICK: What's the catch?
51 D MAREN: Eat. Then we'll see.
52 A ¶ They eat.
* 53 A The fireflies drift.
* 54 A The stag skull watches, and the four roads stretch into the dark, patient as old dogs.

### SCENE s00612 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): HATTIE BRANDT, ROLAND
* 1 A ¶ Dishes drying on a rack.
* 2 A A school calendar with a circled date.
* 3 A A laptop open on the counter, its screen reflecting off a dark window.
4 A ¶ HATTIE BRANDT, 15, in an oversized hoodie, sits cross-legged on a stool, thumbing her phone, a half-eaten bowl of cereal in front of her.
5 A She hasn't noticed the milk has gone warm.
* 6 A ¶ The phone vibrates.
* 7 A DAD flashes on the screen.
8 A She watches it buzz.
9 A Lets it go.
* 10 A ¶ It buzzes again.
11 A ¶ She picks up.
12 D HATTIE: What.
13 D ROLAND [V.O.] (over speaker, a car interior, road noise): Hattie, hey. I'm outside.
14 D HATTIE: Outside where?
15 D ROLAND [V.O.]: Your house. Out front. In the driveway.
16 A ¶ She goes to the window, parts the blinds with two fingers.
* 17 A A car idles at the curb, headlights off, a silhouette behind the wheel.
18 D HATTIE: Mom said you weren't coming till Saturday.
19 D ROLAND [V.O.]: I know what she said.
20 D HATTIE: She's going to freak out.
21 D ROLAND [V.O.]: She's asleep.
22 D HATTIE: She's not asleep. She's pretending to be asleep.
23 D ROLAND [V.O.]: Then she can keep pretending. Come out. Five minutes.
24 D HATTIE: I have school tomorrow.
25 D ROLAND [V.O.]: Then ten minutes. I'll drive you around the block.
26 A ¶ Hattie hesitates, hand on the blind.
27 A She looks back at the kitchen, the cereal, the calendar.
* 28 A The circled date is tomorrow.
29 D HATTIE: Dad. Why tonight?
30 D ROLAND [V.O.]: Because I've been parked here for an hour trying to knock on the door and I can't.
* 31 A ¶ Silence on the line.
* 32 A Rain starts, soft, on the window.
33 D HATTIE (quietly): You can't come in.
34 D ROLAND [V.O.]: I know.
35 D HATTIE: She changed the locks.
36 D ROLAND [V.O.]: I know, sweetheart.
37 D HATTIE: But I can come out.
38 A ¶ She takes her hoodie from the chair.
39 A Pulls it on over her pajamas, zips it to the chin.
40 D ROLAND [V.O.]: Take an umbrella.
41 D HATTIE: It's drizzling.
42 D ROLAND [V.O.]: Take an umbrella anyway.
43 A ¶ She almost laughs.
44 A Takes the umbrella from the stand by the door.
45 A Pauses at the back stairs, listening to the silence of the house.
46 D HATTIE: Dad?
47 D ROLAND [V.O.]: Yeah.
48 D HATTIE: I'm coming out.
49 A ¶ She lowers the phone, still connected, and slips quietly out the door.

### SCENE s00613 | INT. NIGHT TRAIN DINING CAR - MOVING
Detected names (may be incomplete or contain aliases): VERA KOSTOVA, LENNOX BRADSHAW, DMITRI SOKOLOV, QUINN
* 1 A ¶ Candlelit tables, white cloths, silver trays.
* 2 A Rain streaks the black windows.
* 3 A The car sways.
4 A ¶ VERA KOSTOVA, 40s, in a charcoal suit, stirs her tea with unnatural calm.
5 A Across the aisle, LENNOX BRADSHAW, 50s, drums fingers on his knife.
6 A Two tables away, DMITRI SOKOLOV, 30s, bulky in a fur-collared coat, studies the menu.
7 A A waitress carrying a tray: QUINN, 20s, red-haired, black apron, noticing everything.
8 A ¶ She sets the tray down at Vera's table.
9 A Their eyes meet.
10 A Quinn straightens a napkin that doesn't need straightening.
11 D QUINN: Anything else, ma'am?
12 D VERA: Just the check.
13 D LENNOX: The check, please.
14 D QUINN: Of course, sir.
15 A ¶ Neither woman moves.
16 A Dmitri closes the menu, slides one hand beneath the table.
17 A Vera's fingers tighten around the spoon.
* 18 A ¶ The train hits a switch.
* 19 A The car lurches.
* 20 A A glass tips, shatters on the floor.
21 A ¶ Everyone looks down, then up.
22 A Quinn is already gone.
23 A Dmitri lifts a silenced pistol onto the cloth.
24 A Lennox lifts a revolver from his coat.
25 A Vera lifts nothing, but she has risen, spoon in hand, between the two of them.
26 D VERA: Gentlemen.
27 D DMITRI: Vera.
28 D LENNOX: Move, Vera.
29 D VERA: Not a chance.
30 A ¶ He fires.
31 A She falls sideways.
* 32 A The candle goes out.

### SCENE s00614 | INT. GRANDMOTHER'S PORCH - EVENING
Detected names (may be incomplete or contain aliases): NANA, OTIS, LUCINDA
* 1 A ¶ Screen door.
* 2 A Wicker chairs with faded cushions.
* 3 A A pitcher of lemonade sweating on a card table.
* 4 A Cicadas.
5 A ¶ NANA, 80, in a floral housedress and slippers, snaps green beans into a bowl.
6 A OTIS, 17, in a graduation gown, sits sprawled on the steps, tie loose, cap in his lap.
7 A LUCINDA, 16, his sister, in a satin prom dress and sneakers, leans on the porch rail, swinging one foot.
* 8 A ¶ Nobody says anything about the empty chair.
9 A ¶ Nana snaps a bean.
10 A Otis peels the gold tassel off his cap.
11 A Lucinda crosses to the card table, pours three glasses, and places one in front of the empty chair without comment.
12 D OTIS: Nana, you didn't have to come to the ceremony.
13 D NANA: I'm not dead yet.
14 D OTIS: I know. But the bus is long.
15 D NANA: So is the road to Heaven.
16 D LUCINDA (setting a glass in Nana's hand): Drink.
17 D NANA: I'll drink when I'm done.
18 D LUCINDA: You're done.
19 A ¶ Nana looks at the bowl.
20 A Looks at her granddaughter.
21 A Takes the glass.
* 22 A ¶ A car passes slowly on the road.
* 23 A Headlights sweep the porch.
24 A Otis turns his head to follow it, and Lucinda glances at the empty chair, and Nana keeps her eyes on the beans, and the car drives on, and the dust it raised settles slowly in the porch light.
25 D OTIS: He said he'd be here.
26 D NANA: He said a lot of things.
27 D LUCINDA: He sent a card.
28 D OTIS: A card isn't a person.
29 D LUCINDA: It's better than nothing.
30 D OTIS: Is it?
31 A ¶ Lucinda doesn't answer.
32 A She lifts the glass from the empty chair and drinks it herself.
33 A Otis watches her.
* 34 A A cicada rasps, falls silent, rasps again.
35 D NANA: Otis, come here.
36 A ¶ He climbs the steps, kneels beside her chair.
37 A She puts her knotted hand on his head, over the hair he has cut short for the occasion.
38 D NANA [CONT'D]: You walked across that stage like you owned it.
39 D OTIS: I tripped.
40 D NANA: You recovered.
41 A ¶ He laughs into her knee.
42 A Lucinda looks away, out at the dark yard, the fireflies rising from the grass.
43 D NANA [CONT'D]: Lucinda. You too.
44 A ¶ Lucinda hesitates.
45 A Then crosses, sits on the other side, leans her head against Nana's shoulder.
46 A Nana puts down the bowl and takes them both in, one in each arm, as she has done since they were babies.
* 47 A The empty chair stays empty.

### SCENE s00615 | INT. COACHING INN - COMMON ROOM - NIGHT (1815)
Detected names (may be incomplete or contain aliases): PETTIGREW, CRABTREE, GOODY VANE, SOLDIER, ELIJAH
* 1 A ¶ Low beams.
* 2 A A roaring fire.
* 3 A Pewter mugs, wet cloaks steaming on pegs.
4 A ¶ MRS. PETTIGREW, 50s, the innkeeper, wipes the counter with her apron.
5 A MR. CRABTREE, 60s, a stout merchant, snores in the corner settle, his hat over his face.
6 A GOODY VANE, 70s, shawled, sips a thin soup.
7 A A SOLDIER in a mud-caked red coat sits by the fire with his boots off, staring into the flames, one arm bandaged to the elbow.
8 D PETTIGREW: More ale, sir?
9 D SOLDIER: Please.
10 A ¶ She pours.
11 A He drinks in one gulp.
12 D VANE (to the room): They say Bonaparte's loose again.
13 D CRABTREE (waking, muttering): They always say that.
14 D PETTIGREW: Hush, both of you. The man is tired.
15 D SOLDIER: I am. But I'll answer.
16 A ¶ He stands.
* 17 A The room goes quiet.
* 18 A The fire pops.
19 D SOLDIER [CONT'D]: My name is Elijah Rowe. Sergeant, Thirty-third Foot. I walked from Brussels in four days.
20 D VANE (softly): Brussels?
21 D ELIJAH: Yes, mother. And I will tell you one thing true. The Emperor is not loose. He is beaten.
22 D CRABTREE (sitting up, awed): Beaten?
23 D ELIJAH: At a place called Waterloo. Yesterday.
24 A ¶ The room breathes out all at once.
25 A Pettigrew crosses herself.
26 A Vane lets her spoon fall.
27 A Crabtree rises, takes off his hat and holds it to his chest.
28 D ELIJAH [CONT'D] (to himself): I wish it felt like a victory.

### SCENE s00616 | EXT. SUMMER CAMP ARCHERY RANGE - MORNING
Detected names (may be incomplete or contain aliases): BIRDIE OKAFOR, FELIX BRANDAO, MEI-LING CHOW, DARIUS WELLS, ROXY MARCH, WALDO PRESTON
* 1 A ¶ Hay-bale targets.
* 2 A A rope line.
* 3 A Pine needles on dirt.
* 4 A Dew on the grass.
* 5 A Birds in the trees.
6 A ¶ Six campers in a ragged line, each with a bow.
* 7 A Counselor-less.
* 8 A Waiting.
9 A ¶ BIRDIE OKAFOR, 13, stands at the front, chewing her braid.
10 A FELIX BRANDAO, 14, a head taller, flexes a bowstring like it owes him money.
11 A MEI-LING CHOW, 12, tiny, squints at a distant target through huge round glasses.
12 A DARIUS WELLS, 14, in a Lakers jersey, sulks.
13 A ROXY MARCH, 13, spikes of dyed purple hair, polishes an arrow on her shirt.
14 A WALDO PRESTON, 12, plump, hugs his bow to his chest like a teddy bear.
15 D BIRDIE: Where's Counselor Dave?
16 D FELIX: Probably asleep.
17 D DARIUS: Probably dead.
18 D MEI-LING: He's not dead.
19 D ROXY: How do you know?
20 D MEI-LING: I saw him at breakfast.
21 D WALDO: He ate seven pancakes.
22 D FELIX: Then he's asleep.
23 D BIRDIE: Should we start without him?
24 D DARIUS: I'm not getting killed by a rogue arrow.
25 D ROXY: You're more likely to get killed by Waldo's cooking.
26 D WALDO: That's not fair.
27 D ROXY: It's also not wrong.
28 A ¶ Mei-Ling raises her bow.
29 A Squints.
30 A Lets go.
* 31 A The arrow wobbles, lands in the grass ten feet short.
32 D MEI-LING: Oops.
33 D FELIX: That's one way to do it.
34 D MEI-LING: It's practice.
35 D BIRDIE: Okay. Everybody. Same time. On three.
36 D DARIUS: One.
37 D ROXY: Two.
38 D FELIX: Three!
39 A ¶ Six arrows fly.
* 40 A Five hit the bale.
* 41 A One, Waldo's, thuds into the earth between Felix's boots.
42 D FELIX [CONT'D]: Hey!
43 D WALDO: Sorry!
44 A ¶ Everyone laughs.
45 A Waldo hugs his bow tighter, red to the ears.
* 46 A A bell clangs from the mess hall.
47 A They lower their bows in unison.

### SCENE s00617 | INT. DEEP-CRUST MINING STATION "OROPESA" - CONTROL ROOM - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): OKSANA PETRENKO, BRAM VOLKOV, TAVITA FONOTI, JOSIE AMARU
* 1 A ¶ Low steel ceiling.
* 2 A Banks of amber monitors, each showing a different tunnel.
* 3 A Condensation drips from the pipes.
* 4 A A heavy vibration runs through the floor, steady as a heartbeat.
5 A ¶ OKSANA PETRENKO, 40s, shift supervisor, stands at the central console, headset pushed down around her neck, tracking the cursor across a seismic readout that is steadily, quietly climbing.
6 A BRAM VOLKOV, 30s, her second, leans on the next desk, a mug of chicory in one hand.
7 A TAVITA FONOTI, 30s, a Samoan drill foreman, rests his weight against the door frame, still in his hard hat and orange vest, covered in grey rock dust.
8 A JOSIE AMARU, 20s, a trainee, sits at a minor station in the corner, eyes huge, hands flat on her knees.
9 D OKSANA: Bram. Look at tunnel four.
10 D BRAM: I'm looking.
11 D OKSANA: Is that normal?
12 D BRAM: No.
13 D TAVITA: It's moving.
14 D OKSANA: The tunnel?
15 D TAVITA: The wall.
16 A ¶ He crosses and leans over Bram's shoulder.
* 17 A On the monitor, a grey seam of rock ripples gently, as if breathing.
18 A Bram sets down his mug.
19 A Oksana adjusts the zoom.
20 A Josie rises half out of her chair.
21 D JOSIE: Ma'am, should I call it in?
22 D OKSANA: Not yet.
23 D JOSIE: It's been moving for six minutes.
24 D OKSANA: I know.
25 D BRAM: Oksana, if it's a fault line, we evacuate.
26 D OKSANA: It's not a fault line.
27 D TAVITA: Then what is it?
28 D OKSANA: I don't know.
* 29 A ¶ A deep, wet crack runs through the walls of the room.
30 A Everyone freezes.
* 31 A The condensation drips faster.
* 32 A On the monitors, all six tunnel cameras show the same thing now: the rock seams opening, widening, a pale light pulsing behind them.
33 D TAVITA: That's not in the survey.
34 D BRAM: Nothing's in the survey.
35 D OKSANA (into the headset): All crews, this is control. Drop tools. Report to Lock Two. Repeat, drop tools and report to Lock Two.
* 36 A ¶ No response but static.
37 A She tries again.
38 A Bram grabs a second headset and flips switches.
39 A Tavita grips the door frame with both hands as the vibration climbs in pitch.
40 A Josie stands, shaky, and takes the emergency alarm cover in one trembling hand.
41 D JOSIE: Ma'am?
42 D OKSANA: Pull it.
43 A ¶ Josie flips the cover and presses the button.
* 44 A The siren shrieks.
* 45 A Red light floods the room.
46 A The four of them stand motionless in the strobe, hearing the walls speak.
47 D BRAM: He's right. It's breathing.
48 D TAVITA: Who's he?
49 D BRAM: The rock.
* 50 A ¶ On the central monitor, the seam splits wide.
* 51 A The pale light blooms.
* 52 A For one frozen second, the feed shows a vast, bright cavern beyond the tunnel, ribbed and glittering, stretching into the dark below the world.
* 53 A Then the camera goes dead.
* 54 A ¶ One by one, the others follow.
* 55 A ¶ Silence.
* 56 A The siren stops, mid-wail.
* 57 A The red lights hold.
58 D OKSANA (very quietly): Everybody listen to me.
59 A ¶ They look at her.
60 A She takes a breath.
61 D OKSANA [CONT'D]: Nobody goes down. Nobody. We seal the lifts, we flood the shafts, we get every person on this station topside and we stay topside until I say.
62 D TAVITA: They'll fire you.
63 D OKSANA: Let them.
64 D BRAM: Oksana. What if they're already down there?
65 A ¶ She doesn't answer.
66 A Her hand finds the lift control.
67 A Her thumb rests on the red cover.
* 68 A Behind them, the floor shudders again, gently, like something far below turning over in its sleep.

### SCENE s00618 | EXT. FOXHOLE LINE - ARDENNES FOREST - DAWN (1944)
Detected names (may be incomplete or contain aliases): MORGENSTERN, WU, FAIRCHILD, BEAUMONT, TSOSIE, DOC KOWALSKI
* 1 A ¶ Snow.
* 2 A Frozen trees.
* 3 A Breath hanging in the air.
* 4 A A row of hastily dug holes, sandbag-lipped, branches over the top.
* 5 A Smoke rises from a tin can fire hidden in a pit.
6 A ¶ SGT. MORGENSTERN, 40s, a rangy Wisconsin man with an icicle in his mustache, crouches over the fire, warming his hands.
7 A CPL.
8 A WU, 20s, scratching at a frostbitten ear, sits on an ammo box.
9 A LT. FAIRCHILD, 20s, fresh-faced, in a clean helmet, studies a map with a pencil.
10 A PVT.
11 A BEAUMONT, 19, hugging his rifle, shifts from foot to foot.
12 A PVT.
13 A TSOSIE, 22, a Navajo man, crouches at the tree line watching the fog.
14 A DOC KOWALSKI, 30s, rummages in a bag, producing a tin of cold coffee.
15 D FAIRCHILD: Sergeant, how much longer?
16 D MORGENSTERN: Till what, sir?
17 D FAIRCHILD: Till we move.
18 D MORGENSTERN: Till they tell us.
19 D FAIRCHILD: And when's that?
20 D MORGENSTERN: Hell if I know.
21 D WU (to himself): Everybody asks the same question.
22 D BEAUMONT: Is it quiet because they're gone?
23 D TSOSIE (without turning): No.
24 D BEAUMONT: How do you know?
25 D TSOSIE: The birds. There aren't any.
26 D KOWALSKI: Coffee, anyone?
27 A ¶ He hands out cups.
28 A Each man takes one in silence.
29 A Wu sips and winces.
30 D WU: This is awful.
31 D KOWALSKI: It's hot.
32 D WU: Hot isn't a flavor, Doc.
33 D MORGENSTERN (to the group): Eat. Drink. Rest. Because soon we won't.
34 D FAIRCHILD: Sergeant.
35 D MORGENSTERN: Lieutenant.
36 D FAIRCHILD: Are we going to be all right?
37 D MORGENSTERN (a long pause, then): Sir, I've been asked that nine hundred times, and I've never once lied.
38 D FAIRCHILD: That's not an answer.
39 D MORGENSTERN: It's the best one I've got.
40 A ¶ Beaumont drains his cup, stares at the bottom of it.
41 A Tsosie, still at the tree line, raises two fingers without looking back.
42 D TSOSIE: Quiet. Something's moving.
43 A ¶ They all freeze.
44 A Morgenstern is on his feet before the word finishes.
45 A Fairchild crouches.
46 A Wu snatches his rifle.
47 A Kowalski drops the coffee tin.
* 48 A ¶ A deer steps out of the fog.
* 49 A It looks at them with huge, calm, dark eyes.
* 50 A Then it turns and walks, unhurried, back into the trees.
* 51 A ¶ No one speaks.
52 A Then Beaumont laughs, a single sharp breath, and Wu joins, and one by one they lower their weapons, until even Tsosie smiles faintly at the snow.
53 D MORGENSTERN (muttering): Damn, that's a good-looking buck.
54 D WU: Don't even think about it, Sarge.
55 D MORGENSTERN: I'm thinking about venison stew.
* 56 A ¶ The fire crackles.
* 57 A Snow begins to fall.

### SCENE s00619 | INT. SEASIDE HOTEL - TERRACE RESTAURANT - EVENING
Detected names (may be incomplete or contain aliases): NAOMI HAYES, CALLUM REID, WINIFRED, JASPER
* 1 A ¶ White tablecloths flutter in a salt breeze.
* 2 A Paper lanterns bob on strings.
* 3 A Beyond the rail, the sea turns violet under a slow, bruised sunset.
4 A ¶ NAOMI HAYES, 30s, in a pale yellow sundress, stirs a spritz she has not tasted.
5 A Across from her, CALLUM REID, 30s, a sailor's tan, rolled-up shirtsleeves, turns his wedding band round and round with his thumb.
6 A At the next table, WINIFRED, 70s, small as a bird, silver hair swept into a loose bun, and JASPER, 70s, bow tie, cane hooked over the chair, share a plate of oysters and a silence of decades.
7 A ¶ She watches them.
8 A He watches her watching.
9 D CALLUM: They look happy.
10 D NAOMI: They look tired.
11 D CALLUM: That's the same thing, at that age.
12 A ¶ She laughs, but stops.
13 A He reaches for her hand across the cloth.
14 A She lets him hold it, briefly, then eases away to adjust a strap, a napkin, the angle of a fork.
15 A Her eyes drift again to Winifred, who lifts an oyster with great care and feeds it, with enormous tenderness, to Jasper, who accepts it without comment, as if this were the plainest thing in the world.
16 D CALLUM [CONT'D]: I should have called.
17 D NAOMI: You did call.
18 D CALLUM: Not when it mattered.
19 D NAOMI: No.
20 D CALLUM: I was a coward.
21 D NAOMI: You were twenty-six.
22 D CALLUM: Same difference.
23 A ¶ She smiles, small and sad.
24 A A waiter passes, lights the candle at their table, goes.
* 25 A The flame flares and steadies.
26 D NAOMI: Callum, why did you come?
27 D CALLUM: Because you wrote.
28 D NAOMI: I wrote four lines. About a lighthouse.
29 D CALLUM: I read the lighthouse. Over and over.
30 A ¶ She shakes her head, turning the glass slowly by its stem.
31 D NAOMI: I didn't mean it as an invitation.
32 D CALLUM: I know.
33 D NAOMI: I meant it as a goodbye.
34 D CALLUM: I know that too.
35 A ¶ Winifred, at the next table, drops her fork.
* 36 A It clatters.
37 A Jasper, without looking, bends to pick it up, handing it back with a courtly little bow.
38 A She nods her thanks.
39 A Their hands linger.
40 A ¶ Naomi sees.
41 A Her face softens, then breaks, and she looks out at the dying sea.
42 D NAOMI [CONT'D]: I don't want to be tired, Callum.
43 D CALLUM: Nobody does.
44 D NAOMI: I want to be like that. Even if it takes sixty years.
45 A ¶ He is quiet.
46 A Then he takes off his ring, sets it on the white cloth between them, and slides it toward her until the candlelight catches it.
47 D CALLUM: It's yours to decide.
48 A ¶ She looks at the ring.
49 A At him.
50 A At the old couple.
51 A At the sea.
52 A And, very gently, she pushes it back.
53 D NAOMI: Keep it. For now.

### SCENE s00620 | INT. DECOMMISSIONED LIGHTHOUSE - "INNOVATION LANTERN" OPEN-PLAN FLOOR - MORNING
Detected names (may be incomplete or contain aliases): DELPHINE OKONKWO-REYES, VERB, BARN, TULLY, YUKI HASEGAWA, OZZIE, PRIETO, MAEVE KILLORAN
* 1 A ¶ Salt has crept into every corner of the converted tower, and the beanbags have gone faintly green with it.
* 2 A Five desks spiral up the inner wall like the thread of a screw, each one lit by a bulb that flickers whenever the old beam mechanism groans overhead.
3 A ¶ DELPHINE OKONKWO-REYES, fifties, a woman who laminates her own compliments, stands at a whiteboard that reads SYNERGY IS A VERB in three different colors of marker.
4 A ¶ BARNABY "BARN" TULLY, thirties, a sales lead in a vest too clean for the sea air, sits cross-legged on a beanbag, tapping a stylus against his teeth.
5 A ¶ YUKI HASEGAWA, late twenties, the only one with a real coffee, watches the whiteboard the way one watches a slow leak.
6 A ¶ OSWALDO "OZZIE" PRIETO, sixties, the building's last maintenance man, oils a hinge nobody asked him to oil.
7 A ¶ MAEVE KILLORAN, forties, finance, holds a printout against her chest like a shield.
8 D DELPHINE: Team. Team! Gather. Today we pivot from silos to... lighthouses.
9 D BARN: Del, we are in a lighthouse.
10 D DELPHINE: Which is why it's authentic, Barn.
11 A ¶ Yuki sets her cup down very gently.
12 D YUKI: Delphine, the quarterly lease line is eleven percent of --
13 D MAEVE: Forty. It's forty percent, Yuki, I told you it was forty --
14 D OZZIE: Beam's been out since March, you know.
15 D DELPHINE: Ozzie, bless you, we're not discussing the beam --
16 D BARN: Maeve, hang on, if it's forty then the pivot deck is wrong --
17 D MAEVE: The pivot deck is a hostage note, Barn!
18 D YUKI: Ozzie, is the lower stairwell flooding or not?
19 D OZZIE: Little bit.
20 D DELPHINE (brightly): We call that "organic flow," Yuki.
21 A ¶ Maeve slaps the printout onto the nearest desk.
22 A The stylus stops mid-tap.
23 D MAEVE: Eleven months of "organic flow." Eleven months of kombucha on tap and not one invoice paid on time.
24 D BARN: That's not on me, Maeve, I closed Halloran --
25 D YUKI: You closed Halloran with a refund clause --
26 D DELPHINE: Everybody, breathe. Ozzie, tell them it's fine.
27 A ¶ Ozzie wipes his hands on a rag, slowly, and looks up the long spiral of desks to the dead lamp.
28 D OZZIE: Del. Honest answer? The tower's got a lean.
* 29 A ¶ Silence.
* 30 A Then the whiteboard slides an inch down the wall and the marker tray clatters to the floor.
31 D DELPHINE (very quietly): Nobody leaves until we align.
32 A ¶ Maeve sweeps the printout off the desk and rips it in two, then in four.
33 A Barn is on his feet.
34 A Yuki is already pulling on her coat.
35 D MAEVE: Align this, Del.
36 A ¶ She throws the pieces.
* 37 A They flutter down the stairwell like snow.

### SCENE s00621 | INT. TELEGRAPH OFFICE, CANAL LOCK HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS VANTERPOOL, TOBIAS GRILL, WINIFRED HALE, PRUDENCE
* 1 A ¶ 1868.
* 2 A Lamplight, wet floorboards, a brass key clicking on the long oak counter.
* 3 A Rain hammers the shutters.
* 4 A Water is coming under the door in a slow, steady sheet.
5 A ¶ ELIAS VANTERPOOL, forties, stout, the clerk in charge, bends over the key.
6 A TOBIAS GRILL, twenties, his junior, stacks ledgers onto a high shelf.
7 A WINIFRED HALE, fifties, the lockkeeper's widow, stands by the stove with a shawl over her head.
8 A A girl, PRUDENCE, ten, sits on the counter with her boots held up out of the wet.
9 A ¶ He taps out a line, stops, and taps it again.
10 A He does not look up.
11 D ELIAS (to the room): Upstream station says the gates at Marlow are gone. Everyone move your things up.
12 D TOBIAS: Gone how?
13 D ELIAS: Gone like gone.
14 A ¶ He grabs a ledger from the lower drawer and hands it up.
15 A He takes it, but it is heavy and he nearly drops it.
16 D TOBIAS (muttering): Forty years of figures. Forty years, and we save the figures.
17 D WINIFRED: Prue, up on the shelf with you. Now, please.
18 D PRUDENCE: It's wet up there too.
19 A ¶ She is lifted anyway.
20 A He sets her next to the ledgers and she hugs her knees.
21 D ELIAS: Winifred, how long before it reaches the sill?
22 D WINIFRED: An hour. Less if the Anderton sluice stays open.
23 A ¶ He keeps tapping.
24 A She watches him tap, and neither of them says what both know about the sluice.
25 D TOBIAS (to Elias): Sir, I could run to the lock house and shut it.
26 D ELIAS: You could drown at the lock house.
27 D TOBIAS: I could.
28 A ¶ He pulls his coat on regardless.
29 A He is stopped at the door by a hand on his sleeve.
30 D WINIFRED: Not you, boy. I know the wheel. I'll go.
31 D ELIAS: Winifred --
32 D WINIFRED: Elias, send your message.
33 A ¶ She wraps the shawl tighter and opens the door.
* 34 A The rain comes in like a thrown bucket.
35 A She is gone.
36 A ¶ Elias bends to the key.
37 A His hand is steady.
38 A His jaw is not.
39 D TOBIAS (to himself): Should've been me.
40 D PRUDENCE (to everyone): Is she coming back?
41 A ¶ Elias taps.
42 A Tobias stares at the door.
43 A Nobody answers.

### SCENE s00622 | INT. ABANDONED DRIVE-IN PROJECTION BOOTH - DUSK
Detected names (may be incomplete or contain aliases): ROZ, BEAUMONT, KWAME ASANTE-BEAUMONT
* 1 A ¶ Dust hangs in the last orange light like a held breath.
* 2 A A cracked projector squats in the middle of the room, and through the small square window the huge blank screen glows pink, empty of everything but weeds at its feet.
3 A ¶ ROSALIND "ROZ" BEAUMONT, sixty-eight, runs a thumb along the projector's lens cap as if checking a sleeping animal for a pulse.
4 A Her grandson, KWAME ASANTE-BEAUMONT, fifteen, stands in the doorway with a duffel bag he has not put down.
5 D KWAME: Mum said you'd be mad.
6 D ROZ: Your mother's been saying that since 1994. I've never once been mad on schedule.
7 A ¶ He lets the bag slide to the floor.
8 A She does not turn around.
9 D ROZ [CONT'D]: You want to see something?
10 A ¶ She flips a rusted switch.
* 11 A Nothing.
12 A She flips it again.
* 13 A The projector coughs, and a long, trembling beam of white light leaps out the window and lands on the screen like a thrown door.
14 D KWAME: It works?
15 D ROZ: It does not. That's the sun, in the glass. Always happens at dusk.
16 A ¶ They both watch the shape of the light slide down the screen and fade.
17 D KWAME: I'm sorry about Grandad.
18 D ROZ: Mm.
19 D KWAME: I'm sorry I didn't come.
20 D ROZ: Sit down, you're blocking my view.
21 A ¶ He sits.
22 A She finally turns, and puts a hand briefly on his hair.

### SCENE s00623 | INT. GREENHOUSE AT A DEFUNCTIONING ORCHID BREEDER'S - NIGHT
Detected names (may be incomplete or contain aliases): ISOLDE FAIRWEATHER, TEDDY, NAKAMURA, PERPETUA OYELARAN, ANTON LUNDGREN
* 1 A ¶ Steam clings to the glass like breath on a window.
* 2 A Rows of orchids glow under purple grow lamps, their petals speckled like skin, and the air is warm enough to loosen a collar.
* 3 A A long potting table has been set for a dinner nobody quite wanted: four chipped plates, a bottle of wine, a bowl of lemons.
4 A ¶ ISOLDE FAIRWEATHER, thirty-five, the breeder, in a canvas apron over a silk dress, pours wine with the steadiness of someone holding her hand still on purpose.
5 A Across from her, THEODORE "TEDDY" NAKAMURA, thirty-eight, who once loved her and has returned to buy the business, loosens his tie and looks everywhere but at her.
6 A At the end of the table sits PERPETUA OYELARAN, seventy, Isolde's aunt, picking a lemon apart with her fingernails.
7 A Beside her, his phone face-down by his plate, is ANTON LUNDGREN, forty, Isolde's fiancé, who has just realized who Teddy is.
8 D ISOLDE: You flew eleven hours to look at flowers.
9 D TEDDY: I flew eleven hours for the Phalaenopsis line. The flowers are incidental.
10 D ANTON: She doesn't sell the line.
11 D PERPETUA: Everything's for sale at the right hour of the night, Anton.
12 D ISOLDE: Aunt Perpetua.
13 D TEDDY: She isn't wrong.
14 D ANTON: You two have history. Say it. I'd rather hear it than guess it.
15 D ISOLDE: Anton, not here.
16 D PERPETUA: I'd say here's the best place. Nothing here can hear but the orchids.
17 D TEDDY: We were engaged. For nine months. It ended before you met her.
18 D ANTON: She told me it was a boy she knew at school.
19 D ISOLDE: It was easier.
20 D PERPETUA: It always is.
21 D TEDDY: Isolde, I'm not here to cause --
22 D ANTON: Then why are you here, Teddy? Honestly. Why is there a man at my table who knows which side of the bed she sleeps on?
23 D ISOLDE: That's enough!
24 D PERPETUA: Left. She sleeps on the left.
25 D ANTON: Perpetua!
26 A ¶ Isolde stands.
* 27 A The bottle tips and wine runs across the table toward the lemons.
28 A Teddy reaches to catch it at the same moment Anton shoves his chair back, and the two men collide at the corner of the table, the chair crashing into a rack of seedlings, Perpetua calmly lifting her plate out of the flood and Isolde pressing both palms to her face.
* 29 A ¶ Then, in the quiet of the falling trays, a single orchid stem snaps.
30 D ISOLDE (barely audible): That one was nine years old.

### SCENE s00624 | INT. SUBMERGED BELL TOWER - UNDERWATER CHAPEL - NIGHT
Detected names (may be incomplete or contain aliases): KESTREL VANE, MORWENNA ASH, OLD CINDER, HOLLIS PRYCE, STRANGER, AMBROSE
* 1 A ¶ Green light through drowned stained glass.
* 2 A Air pockets shiver beneath the vaulted ceiling.
* 3 A A rope ladder hangs into the dark.
4 A ¶ KESTREL VANE, 30s, hooded, perches on a pew back, a lantern of glowing moss in her lap.
5 A Four figures wade in from the nave.
6 A ¶ MORWENNA ASH, 50s, the Reeve, wears the keys of a dead town on her belt.
7 A Behind her, OLD CINDER, 70s, leans on a staff of coral.
8 A HOLLIS PRYCE, 20s, shield-bearer, carries nothing.
9 A And the STRANGER, hooded, no age, walks in last and drips nothing.
10 D MORWENNA: You're late.
11 D KESTREL: Tide's late.
12 A ¶ Cinder lowers himself onto a pew.
13 A Hollis stays standing, jaw working.
14 D STRANGER: Is this the place where the oath was broken?
15 D KESTREL (not looking up): Depends who's asking.
16 A ¶ The Stranger crosses to the altar.
* 17 A A single bell rope hangs there, wet and green.
18 A He lifts a hand toward it.
19 A Hollis steps in his path.
20 D HOLLIS: Don't.
21 D STRANGER: You flinch like a man who has already rung it.
22 A ¶ Hollis says nothing.
23 A His hand drifts to the empty place where a sword should be.
24 D CINDER (mild): Let him, Hollis.
25 D HOLLIS: Cinder --
26 D CINDER: Let. Him.
27 A ¶ Hollis steps aside.
28 A The Stranger takes the rope.
29 A He does not pull.
30 D MORWENNA: You were named at the drowning. I remember your face.
31 D STRANGER: Then you remember I was kind to you.
32 A ¶ Morwenna's hand closes around her keys until her knuckles go white.
33 D KESTREL (quietly): Say your name, and I'll let you ring it.
34 A ¶ The Stranger lowers his hood.
35 A A lean face, old scars like river-maps.
36 A He smiles at her the way one smiles at a debt.
37 D STRANGER: Ambrose Thale.
38 D KESTREL (setting down the lantern): Good.
39 D AMBROSE (over his shoulder): And now you must all stand very still.
40 A ¶ He pulls the rope.
* 41 A ¶ No sound.
* 42 A The water in the nave goes flat as glass.
43 A Every flame in the room leans toward the bell, and then, together, all of them go out, and in the dark Hollis exhales for the first time in a year.
* 44 A ¶ A long beat.
* 45 A A single drip, somewhere.
46 A ¶ Cinder laughs, soft and cracked.
47 D CINDER: Well. That's that.
48 A ¶ Kestrel relights the lantern.
49 A Morwenna is already unbuckling her keys.

### SCENE s00625 | INT. MUNICIPAL WATERWORKS PUMP HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): SILAS, BRANNIGAN, LOLLY, DUCHAMP, MARCUS JEROME FALK, NELL PETRAKIS
* 1 A ¶ A cathedral of riveted iron and brass, three stories high, lit by one amber work lamp.
* 2 A Steam pipes sweat along the walls.
* 3 A The great pump wheel turns overhead with a patient, heavy rhythm, and behind a brick archway, a vault door the color of old pennies.
4 A ¶ SILAS "THE ACCOUNTANT" BRANNIGAN, fifties, silver hair, wire spectacles, wears a gray overcoat and a face like a closed ledger.
5 A He kneels at the vault, ear to the steel.
6 A ¶ LORETTA "LOLLY" DUCHAMP, forties, a redhead in a mechanic's coverall, holds a stopwatch and a flashlight.
7 A ¶ MARCUS JEROME FALK, thirties, tall and broad, wears a night watchman's cap two sizes too small, and sweats through it.
8 A ¶ NELL PETRAKIS, twenties, sits on a crate with a tool roll across her knees, pale and unblinking.
9 D SILAS: Four minutes before the watchman's round.
10 D LOLLY: Three and a half. He's early on Thursdays.
11 D MARCUS: He's early because the Missus makes him.
12 D SILAS: Hush. Nell, the drill.
13 A ¶ Nell unrolls the tools, hands him a slim steel bit.
14 A He nods once.
* 15 A The pump wheel overhead thumps like a heart.
16 D LOLLY (whispering): Nobody breathe.
17 A ¶ Silas turns the bit.
* 18 A The vault ticks.

### SCENE s00626 | EXT. SALT FLAT - DEAD VEHICLE - DAY
Detected names (may be incomplete or contain aliases): IMOGEN STRAND, CALLUM REID
* 1 A ¶ A white plain, blinding, cracked in hexagons to the horizon.
* 2 A The heat has a sound.
3 A A pickup truck sits dead on its rims with the hood propped open, and in its thin stripe of shade two figures sit side by side on the dirt.
4 A ¶ IMOGEN STRAND, forties, sun-darkened, cracked lips, a scarf tied over her head, shreds a map into narrow strips and braids them.
5 A Across from her, CALLUM REID, twenties, her nephew, with a gaze fixed so steady it has stopped meaning anything, turns a plastic bottle slowly, holding it up to the light.
* 6 A ¶ Half a finger of water.
* 7 A Maybe less.
8 D IMOGEN (to the empty horizon): Eleven miles to the highway. Maybe nine.
9 D CALLUM: Maybe.
10 A ¶ She finishes the braid and ties it around his wrist without asking.
11 A He lets her.
12 D IMOGEN (muttering): Should've turned at the cattle guard.
13 A ¶ He sets the bottle down between them, label facing her, a quiet gesture of an offer.
14 A She pushes it back with one finger.
15 A He pushes it again.
16 A For a long moment neither of them speaks.
17 A ¶ Then Imogen's eyes go past him, to the truck's rear bumper, and stay there.
* 18 A A pale smear of damp in the dirt.
* 19 A A slow, steady drip from under the truck.
20 A ¶ Callum turns to look.
21 A His face doesn't change.
22 A His hand closes over hers.
23 D CALLUM: It's the radiator.
24 D IMOGEN: It's the water tank, Cal. The tank was full.
25 A ¶ He gets up very slowly.
* 26 A In the shade of the chassis, the second spare jug lies on its side, its cap cracked, empty.

### SCENE s00627 | INT. VERTICAL FARM BREAK ROOM - FLUORESCENT PINK LIGHT - DAY
Detected names (may be incomplete or contain aliases): COMMUNAL FRIDGE, PRIYANKA DESAI, NAT, OYELOWO, FORMER BILLIE, STOCKTON
1 A ¶ Under the grow-lamp glow, everyone looks sunburned and sick.
* 2 A Racks of lettuce climb the walls behind the vending machine.
* 3 A A sign on the fridge reads: THIS IS NOT A COMMUNAL FRIDGE.
* 4 A IT IS A FRIDGE OF COMMUNITY.
5 A ¶ PRIYANKA DESAI, thirties, Head of Culture, slides a cake onto the table with candles shaped like leaves.
6 A NATHANIEL "NAT" OYELOWO, forties, a quiet agronomist, stands near the sink in a fleece vest.
7 A WILHELMINA "BILLIE" STOCKTON, twenties, new hire, hovers by the door holding a tote bag.
8 D PRIYANKA: Surprise! Welcome, Billie!
9 D BILLIE: Oh my gosh. You didn't have to.
10 D PRIYANKA: We always do. Right, Nat?
11 D NAT (flatly): We did for the last four.
12 A ¶ Priyanka laughs a half-second too long.
13 A Billie smiles and sets her bag on the counter.
14 D BILLIE: Where do I... put my lunch?
15 A ¶ She opens the fridge.
* 16 A Inside, every shelf is labeled with a name.
* 17 A One shelf has a pink sticky note: BILLIE'S, in Priyanka's handwriting.
* 18 A Another, in Nat's: FORMER BILLIE'S.
19 A ¶ Billie looks at the note.
20 A She looks at Nat.
21 A Nat looks at the lettuce.
22 D BILLIE [CONT'D]: Who was the former Billie?
23 D PRIYANKA: Nobody. A joke. Cake?
24 A ¶ She hands Billie a plate.
25 A She takes it with both hands, politely, and turns to Nat.
26 D BILLIE: Did she quit, or...
27 D NAT (softly): She harvested.

### SCENE s00628 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL, DESMOND, JUNIOR, TAMSIN, CONCEPCIÓN
* 1 A ¶ Dryers turning.
* 2 A Fluorescent hum.
* 3 A A broken vending machine.
4 A ¶ Five Hargrove-Delgados.
* 5 A One bench.
6 A ¶ GRANDMA CONCEPCIÓN, eighties, folds towels.
7 A Slow.
8 A ¶ Her daughter, MARISOL, fifties, scrolls her phone.
9 A Doesn't read it.
10 A ¶ MARISOL's husband, DESMOND, sixties, reads a newspaper upside down.
11 A Maybe on purpose.
12 A ¶ Their son, JUNIOR, twenty, headphones.
13 A Elsewhere.
14 A ¶ Their niece, TAMSIN, nine, counts quarters.
15 A Arranges them.
16 A Rearranges them.
17 D CONCEPCIÓN (to everyone): Almost done. Nobody move.
18 D JUNIOR: Nobody's moving, Abuela.
19 D MARISOL: Junior. Take those off.
20 A ¶ He doesn't.
21 A She sighs and goes back to her phone.
22 D DESMOND (muttering): Forty minutes for two towels.
23 D TAMSIN: Uncle Des, you're holding it wrong.
24 D DESMOND: It's fine.
25 A ¶ She takes it from him, turns it right side up.
26 A He nods, gravely.
27 D CONCEPCIÓN: Tamsin, mija, how many?
28 D TAMSIN: Eleven.
29 D CONCEPCIÓN: We need twelve.
* 30 A ¶ A pause.
31 A They all look at the machine.
* 32 A It hums back.
33 D MARISOL (to no one): We always need twelve.

### SCENE s00629 | INT. HOSPICE WING - NIGHT SHIFT NURSES' STATION
Detected names (may be incomplete or contain aliases): GRACE, ADEYEMI, DEVON MARSH, INTERCOM, DOREEN, LEONIDAS MARSH
* 1 A ¶ Low light.
* 2 A Quiet monitors.
* 3 A A call button blinks red on a wall panel.
* 4 A Somewhere down the hall, a television murmurs a game show to nobody.
5 A ¶ GRACELYN "GRACE" ADEYEMI, fifties, charge nurse, signs a chart and doesn't look at her visitor.
6 A DEVON MARSH, thirties, the patient's son, stands at the counter in a rumpled suit, a paper cup of cold coffee in his hand.
7 D INTERCOM [V.O.]: Station, room fourteen. Mr. Marsh is asking for his son again.
8 D GRACE (into the panel): On my way, Doreen.
9 A ¶ She lifts a finger to Devon.
10 A He doesn't move.
11 D DEVON: He keeps calling me Walter.
12 D GRACE: That's his brother. Passed in '98.
13 D DEVON: I know who Walter is.
14 D GRACE: Then you know it's not an insult.
15 A ¶ Devon puts down the cup.
16 A His hand shakes slightly.
17 D DEVON: Grace, I'm not ready for this.
18 D GRACE: Nobody is, Devon. We just show up.
19 D INTERCOM [V.O.] (softer): Grace. He's asking for the window open.
20 D GRACE (into the panel): Open it, Doreen. Let him have the air.
21 A ¶ She turns back to Devon.
22 D GRACE [CONT'D]: Go. Say you're Walter if you have to.
23 D DEVON: He'd know.
24 D GRACE: He'd know and he'd want it anyway.
25 A ¶ A long breath.
26 A Devon straightens his tie, then loosens it again.
27 D DEVON: You've done this a lot.
28 D GRACE: Thirty-one years.
29 D DEVON: Does it get easier?
30 D GRACE (gently): No. You get kinder.
31 A ¶ He nods.
32 A He goes.
33 A She watches him go down the hall until the dark takes his shoulders.
34 D DOREEN [O.S.]: Grace? He's saying hello to somebody.
35 D GRACE (to herself): Good.
36 D LEONIDAS MARSH [O.S.] (faint, delighted): Walter? Is that you, Walter?
37 A ¶ Grace closes her eyes a moment.
38 A She picks up the pen and writes the time.

### SCENE s00630 | INT. COAL-TOWN CURLING RINK - NIGHT
Detected names (may be incomplete or contain aliases): BERNIE, ZIELINSKI, INGRID VAN DER MEER
* 1 A ¶ A single sheet of ice under a tin roof, lit by hanging bulbs.
* 2 A A scoreboard with hand-painted numbers reads 7-7.
* 3 A The stands are empty but for a thermos and a folded flag.
* 4 A Cold breath hangs in the air.
5 A ¶ BERNADETTE "BERNIE" ZIELINSKI, fifties, coach, in a wool coat and a hat with a pom-pom gone gray, stands at the boards with a clipboard she hasn't looked at in an hour.
6 A INGRID VAN DER MEER, thirties, skip, crouches on the hack, broom across her knees, eyes locked on the button at the far end.
7 D BERNIE: Last stone. Last end. Don't make it complicated.
8 D INGRID: It's already complicated.
9 A ¶ She slides out and releases.
* 10 A The granite hisses down the sheet.
11 A Bernie walks along the boards beside it, and Ingrid follows, sweeping hard.
12 D BERNIE (calling to the empty stands): Hard, hard, hard! Give it everything!
13 D INGRID (muttering): Nobody's there, Bern.
14 D BERNIE: Somebody's always there.
* 15 A ¶ The stone slows.
16 A Ingrid stops sweeping, and she sees what Bernie sees: it will stop a hair short of the button, one stone from a guard.
17 D BERNIE [CONT'D]: Off, off, off.
18 D INGRID: Off?
19 D BERNIE: Let it die.
20 A ¶ She lifts the broom.
* 21 A The stone creeps, trembles, and settles an inch from the button, nudging the opponent's red stone to the back rings.
* 22 A ¶ Silence.
23 A Then both of them breathe out.
24 D BERNIE [CONT'D]: That's it.
25 D INGRID: That's it?
26 D BERNIE: Measure it.
27 A ¶ Ingrid pulls the steel measure from her pocket.
28 A She kneels over the rings, checks one stone, then the other, and holds still for a long moment.
29 D BERNIE: Well?
30 D INGRID: Closer. By a thumbnail.
31 A ¶ Bernie covers her mouth with her gloved hand.
32 A Ingrid sits back on the ice, laughing quietly, the broom across her lap, tears freezing at the edge of her eyes.
33 D BERNIE (to the stands, softly): You see that? You see that?
34 D INGRID: She's taking the credit.
35 D BERNIE: She is.

### SCENE s00631 | INT. SHIPPING CONTAINER ON DRIFTING ICE FLOE - DAY
Detected names (may be incomplete or contain aliases): HALVOR NILSEN, DEE ARMSTRONG, PASHA VOLKOV
* 1 A ¶ Gray light through a rust hole.
* 2 A Three bedrolls, a camp stove, a radio with its back off.
* 3 A Stillness, finally.
4 A ¶ HALVOR NILSEN, 50s, sits on an overturned bucket.
5 A DEE ARMSTRONG, 30s, tends the stove.
6 A PASHA VOLKOV, 20s, lies on a bedroll, eyes closed, a dark stain on his sleeve.
7 D HALVOR (to the container): The wind's dropped.
8 D DEE: Finally.
9 D PASHA: Tell me it's warm out there.
10 D HALVOR: It's not warm. It's quiet.
11 D DEE: Quiet's the same as warm, right now.
12 D PASHA: Dee, did you boil the rest of the coffee?
13 D DEE: I boiled all of it. We're out.
14 D PASHA: Out of coffee.
15 D DEE: Out of coffee.
16 D HALVOR: Out of coffee, out of fuel in two days, out of floe in three.
17 D DEE: Halvor.
18 D HALVOR: I'm just saying the weather's good for talking.
19 D PASHA: Then talk.
20 D HALVOR: The floe split in the night. The crack's under the east wall. I heard it.
21 D DEE: You said the wind --
22 D HALVOR: The wind dropped. The ice didn't.
23 D PASHA (very quietly): How long?
24 D HALVOR: Hours. Maybe less.
25 D DEE (to no one): Of course it did.
26 D PASHA: Open the door, Halvor.
27 D HALVOR: Pasha --
28 D PASHA: I want to see it.
29 A ¶ Halvor stands.
30 A The container groans, a long slow note like a cello, and the three of them look at the floor.

### SCENE s00632 | EXT. FLOODED BELL FOUNDRY - DAWN
Detected names (may be incomplete or contain aliases): CORPORAL AUGUSTIN LEFEBVRE, PRIVATE ANSELM WEBER
* 1 A ¶ A broken roof, a pit of cold black water, and a great cracked bell lying on its side half-submerged.
* 2 A Smoke from a burning village drifts over the ridge.
* 3 A Rifle fire somewhere a long way off.
4 A ¶ CORPORAL AUGUSTIN LEFEBVRE, twenties, French, mud to the knees, wades along the edge of the pit with his rifle held high.
5 A He stops.
6 A Across the water, on the far lip of the bell, a figure is crouched, equally muddy, equally still: PRIVATE ANSELM WEBER, twenties, German, a bandage on his forearm.
7 A ¶ They raise their rifles at the same moment.
8 A Neither fires.
9 D LEFEBVRE: Tu es seul?
10 D WEBER: Allein.
* 11 A ¶ A beat.
* 12 A The water between them ripples in the wind.
13 D LEFEBVRE: Put it down.
14 D WEBER: You first.
15 D LEFEBVRE: No.
16 A ¶ Weber's finger moves on the trigger.
17 A Lefebvre's does too.
18 A A bird takes off from the broken roof and both of them flinch, and the rifles drop an inch.
19 A ¶ They stay there.
20 A Weber's eyes go to the bell.
21 D WEBER: It's cracked.
22 D LEFEBVRE: It was cracked before.
23 A ¶ Weber lowers his rifle, slowly, and sets it on the curve of the bell.
24 A He holds up his hands.
25 A Lefebvre watches him, wades one step closer, then two.
* 26 A ¶ At three steps, the far wall of the foundry collapses with a roar.
27 A Both men dive.
28 A Lefebvre lands on the bell, Weber lands on him, and for a moment they are two shapes thrashing in the churned water, fists and elbows, a rifle sinking, a helmet floating away.
29 A ¶ Lefebvre gets an arm around Weber's neck.
30 A Weber bites his wrist.
31 A They both scream.
* 32 A A shell lands in the village beyond the ridge, and the whole pit shudders.
33 A ¶ They freeze.
34 A Both of them, still tangled, looking at the sky.
35 D WEBER [CONT'D]: That's ours.
36 D LEFEBVRE: That's ours.
37 A ¶ Slowly, they let go of one another.
38 A Weber retrieves his helmet from the water.
39 A Lefebvre wipes his bleeding wrist on his sleeve.
40 D LEFEBVRE [CONT'D] (not looking at him): There's a road past the bell. Go.
41 D WEBER: Why?
42 A ¶ Lefebvre shrugs.
43 A He picks up his rifle and does not point it.
44 A Weber waits, then wades out of the pit, climbing the ridge in the smoke.
45 A Halfway up, he turns, lifts one hand.
46 A ¶ Lefebvre does not lift his.
47 A He sits down heavily on the bell and takes out a cigarette that is too wet to light.
