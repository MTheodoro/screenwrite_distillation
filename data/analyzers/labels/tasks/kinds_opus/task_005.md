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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0005.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01022 | INT. MILLBROOK TELEPHONE EXCHANGE - NIGHT (1924)
Detected names (may be incomplete or contain aliases): MABEL PRZYBYLSKI, STRANGER, CROWE, ABERNATHY, TOBY, SHERIFF DUNMORE
* 1 A ¶ A small room above the feed store.
* 2 A A cord switchboard with a hundred brass jacks.
* 3 A A kerosene lamp backs up a weak electric bulb.
4 A ¶ MABEL PRZYBYLSKI, 20s, headset over pinned-up hair, plugs and unplugs cords with practiced speed.
5 A She is alone and likes it that way.
* 6 A ¶ A buzz.
* 7 A A light on the board.
8 A She plugs in.
* 9 D MABEL: Number, please.
10 A ¶ She listens.
11 A Pulls the cord.
12 A Connects another.
* 13 A The room breathes.
14 A ¶ Boots on the stairs.
15 A The door opens without a knock.
16 A ¶ A STRANGER in a long coat, hat low, rain on his shoulders.
17 A He carries a leather satchel.
* 18 D MABEL [CONT'D]: We're closed to the public, sir.
* 19 D STRANGER: I need the line to Harrisburg.
* 20 D MABEL: That's the long-distance trunk. Company use only.
* 21 D STRANGER: It's urgent.
* 22 D MABEL: Everything is, at this hour.
* 23 A ¶ A new buzz.
* 24 A Another light.
25 A She ignores it.
* 26 D STRANGER: My name is Elias Crowe. I'm with the state railway board.
* 27 D MABEL: You have a paper that says so?
28 A ¶ He opens the satchel.
29 A Pulls out an envelope.
30 A She takes it, reads it by the lamp.
31 A Her face tightens.
* 32 D CROWE: It is in order.
* 33 D MABEL: It's a telegram form. Anyone can fill one out.
* 34 D CROWE: Then call the manager.
35 A ¶ She hesitates.
36 A Pulls a cord.
37 A Cranks a handle.
* 38 D MABEL (into headset): Mr. Abernathy? Sorry to wake you. There's a gentleman here.
* 39 A ¶ The earpiece crackles.
40 A A thin, irritable voice leaks into the room.
* 41 D ABERNATHY [V.O.]: At this hour? Is the building on fire?
* 42 D MABEL: No, sir. A man from the railway board.
* 43 D ABERNATHY [V.O.]: Tell him to come in the morning.
* 44 D CROWE (leaning toward her): Tell him it concerns the six-ten freight.
45 A ¶ Mabel's eyes flick up.
46 A She repeats it.
* 47 A ¶ A long silence on the line.
48 A Then Abernathy, quieter.
* 49 D ABERNATHY [V.O.]: Put him through. And Mabel. Plug in the sheriff's line too.
* 50 D MABEL: Sir?
* 51 D ABERNATHY [V.O.]: Do it.
52 A ¶ She obeys.
53 A Her hands are not quite steady now.
* 54 A ¶ The door opens again.
55 A TOBY, 12, the messenger boy, cap too big, bursts in dripping and out of breath.
* 56 D TOBY: Miss Mabel! Somebody cut the wire at the Calder bridge. Pa says the whole east line's dead.
57 A ¶ Crowe straightens.
58 A Mabel looks from the boy to the stranger.
* 59 D MABEL: Mr. Crowe. How did you know about the freight?
* 60 D CROWE: I don't know anything about wires.
* 61 D TOBY: Then why's your satchel got a coil of copper in it?
* 62 A ¶ Everyone looks.
* 63 A A bright loop of wire pokes out of the satchel.
* 64 A ¶ The board buzzes.
* 65 A Light after light.
* 66 A The sheriff's line clicks live.
* 67 D SHERIFF DUNMORE [V.O.]: Millbrook exchange. Dunmore. Who's there with you, Miss Przybylski?
68 A ¶ Mabel's hand rests on the key.
69 A She looks at Crowe.
70 A Crowe looks at the door.
* 71 D MABEL: Stay where you are, Mr. Crowe. Toby, lock that door.
* 72 D TOBY: Yes, ma'am.
* 73 A ¶ The bolt slides home.
* 74 A The lamp flickers.
* 75 A The board keeps buzzing.

### SCENE s01023 | INT. CRAB CANNERY - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): PAULINA RUSSO, DESMOND WALCOTT, GUS, HAND
* 1 A ¶ Steel tables.
* 2 A Hoses.
* 3 A Steam rising from vats.
* 4 A Fluorescents buzz.
* 5 A Everything smells of brine and bleach.
6 A ¶ PAULINA RUSSO, 40s, shift lead, hairnet, white rubber boots, sprays down a conveyor belt.
7 A DESMOND WALCOTT, 20s, headphones around his neck, stacks crates.
8 A GUS, 60s, Paulina's oldest hand, wheels a pallet jack.
* 9 A ¶ The line is stopped.
* 10 A A quiet kind of peace.
* 11 D PAULINA (to all): Ten minutes, everybody. Breaker's being cranky.
* 12 D DESMOND: It's always cranky.
* 13 D PAULINA: Then it's consistent.
14 A ¶ Gus parks the jack.
15 A Eases onto an upturned bucket.
16 A Pulls a sandwich from his apron.
* 17 D GUS (to himself): Thirty-one years. Never once got used to the cold.
18 A ¶ Desmond laughs.
19 A Pulls a phone from his pocket.
* 20 D DESMOND: Gus, you want to see my niece? She just learned to whistle.
* 21 D GUS: Sure.
22 A ¶ Desmond shows him the screen.
23 A Gus squints.
24 A Smiles.
25 A The first real smile of the night.
26 A ¶ Paulina checks her clipboard.
27 A Hums.
* 28 A The steam curls around her.
* 29 D PAULINA (under her breath): Two cases short. Where did you go, little guys.
* 30 A ¶ From the live tank behind the line, a soft tap.
* 31 A Glass on glass.
32 A ¶ Nobody notices.
33 A The humming continues.
* 34 D DESMOND: She's three. She calls everything "doggy."
* 35 D GUS: Smart kid.
* 36 A ¶ Tap.
* 37 A Tap.
* 38 A Tap.
* 39 A Slower.
40 A ¶ Paulina looks up.
* 41 A The tank, a long glass rectangle of dark water, hides in the shadow beyond the last light.
* 42 D PAULINA (to Desmond): Did you top up the tank?
* 43 D DESMOND: Friday.
* 44 D PAULINA: Then who's tapping?
* 45 D DESMOND: Pipes. They knock.
46 A ¶ Gus has stopped chewing.
47 A He stares at the tank.
* 48 D GUS (quietly): Paulina.
* 49 D PAULINA: What?
* 50 D GUS: There's no water moving.
51 A ¶ She follows his gaze.
* 52 A The surface is perfectly flat.
* 53 A Black.
* 54 A Nothing disturbs it.
* 55 A ¶ Tap.
* 56 A ¶ The sound comes from inside.
* 57 D PAULINA (to herself): Okay. Okay.
58 A ¶ She walks toward the tank.
59 A Boots squelching.
60 A Desmond rises.
61 A Gus doesn't.
* 62 D PAULINA [CONT'D] (over her shoulder): Both of you, stay there.
63 A ¶ She reaches the glass.
64 A Wipes the condensation with her sleeve.
* 65 A ¶ Pressed against the inside of the glass is a HAND.
* 66 A A human hand.
* 67 A Pale, wrinkled, fingers splayed.
68 A ¶ Paulina stumbles back.
* 69 A Her clipboard clatters.
* 70 A ¶ Under the surface, a face drifts up.
* 71 A Eyes open.
* 72 A Wearing a hairnet.
* 73 A ¶ It's Gus's face.
74 A ¶ Paulina turns.
75 A Gus is still on his bucket.
76 A He lifts his sandwich.
77 A Smiles.
78 A Too wide.
* 79 D GUS: Ten minutes, you said.
80 A ¶ Desmond's phone slips from his hand.
* 81 A The screen lights the floor.
* 82 A The breaker clunks.
* 83 A ¶ All the fluorescents go out.

### SCENE s01024 | INT. SMALL CLAIMS COURTROOM - FORMER SKATING RINK - DAY
Detected names (may be incomplete or contain aliases): JUDGE MARGUERITE VANCE, FELIX OYELARAN, SOLVEIG HARTMANN
* 1 A ¶ Bleachers for gallery.
* 2 A Judge's bench on a rink-side Zamboni platform.
* 3 A Painted lines still on the floor.
4 A ¶ JUDGE MARGUERITE VANCE, 60s, reading glasses, gavel in a fist.
5 A FELIX OYELARAN, 30s, sharp suit, stands at the plaintiff's mark.
6 A SOLVEIG HARTMANN, 40s, hands folded, at the defendant's.
* 7 D VANCE: Counselor, the exhibit.
* 8 D OYELARAN: Your Honor, my client's contract clearly states--
* 9 D HARTMANN: Objection. Contract was never signed.
* 10 D VANCE: Ms. Hartmann, let him finish.
* 11 D HARTMANN: He's misstating the--
* 12 D OYELARAN: I have it right here, page four--
* 13 D VANCE: Both of you.
14 A ¶ Oyelaran waves the paper.
15 A Hartmann steps toward him.
16 A Vance raises the gavel.
* 17 D HARTMANN: It's a forgery, Judge. He knows it.
* 18 D OYELARAN: That is a slander, and you know it.
* 19 D VANCE: Order!
* 20 D HARTMANN: Ask him who typed it!
* 21 D OYELARAN: Ask her why she hid the original!
22 A ¶ The gavel cracks.
23 A Once.
24 A Twice.
25 A A third time, splintering the handle.
* 26 D VANCE: Sit. Down.
27 A ¶ They sit.
* 28 A Silence.
29 A A skate guard coughs in the bleachers.

### SCENE s01025 | INT. STEAMSHIP "MARIGOLD" - LOST AND FOUND OFFICE - DAY
Detected names (may be incomplete or contain aliases): FITCH, BARNABY PLUMLEY, ALOYSIUS FENN, HORTENSE VANDERWELL, NELL
* 1 A ¶ A narrow room below decks, shelves of forgotten hats, umbrellas, a single ukulele.
* 2 A A porthole shows slow gray swells.
3 A ¶ MR. FITCH, 50s, round spectacles, ledger in hand, presides behind a brass-railed counter.
4 A He is pleased with the order of the universe.
* 5 A ¶ The door opens.
6 A BARNABY PLUMLEY, 40s, tweed, mustache like a pushbroom, enters with the confidence of a man who has never been refused.
7 A Behind him, ALOYSIUS FENN, 40s, also in tweed, also mustached, but nervous.
* 8 D FITCH: Gentlemen. Something lost?
* 9 D BARNABY: A trunk. Brown, brass corners, initialed B.P.
* 10 D ALOYSIUS: Or A.F. It's our trunk.
* 11 D FITCH: Two sets of initials?
* 12 D BARNABY: We travel together.
* 13 D ALOYSIUS: Not that way.
* 14 D FITCH: I did not suggest a way.
15 A ¶ Fitch opens the ledger.
16 A Runs a finger down the page.
* 17 D FITCH [CONT'D]: Brown trunk, brass corners. Found on Deck C, yesterday.
* 18 D BARNABY: That's the one.
* 19 D FITCH: Did it contain anything unusual?
* 20 D BARNABY: Shirts.
* 21 D ALOYSIUS: And the Mortimer papers.
* 22 D BARNABY (sharp): Shirts.
* 23 D FITCH: Papers, you said?
* 24 D ALOYSIUS: Shirts and papers. Mostly shirts.
25 A ¶ Fitch produces a trunk from beneath the counter.
26 A Sets it down with ceremony.
27 A Unlatches it.
* 28 A ¶ Inside: shirts.
* 29 A Neatly folded.
* 30 A One small leather folio.
* 31 D FITCH [CONT'D]: Shirts. And a folio marked "Mortimer."
* 32 D BARNABY: Yes. Splendid. We'll take it.
* 33 D FITCH: I'll need a signature.
* 34 D ALOYSIUS: Of course.
35 A ¶ Fitch slides a form across.
36 A Barnaby reaches.
37 A Aloysius reaches.
38 A Their hands collide on the pen.
* 39 D BARNABY: After you.
* 40 D ALOYSIUS: No, you.
* 41 D BARNABY: I insist.
* 42 D ALOYSIUS: Then I insist more.
* 43 A ¶ The door swings open again.
44 A HORTENSE VANDERWELL, 60s, fur stole in the tropics, enters with NELL, 9, in a sailor dress, clutching a stuffed walrus.
* 45 D HORTENSE: Mr. Fitch! My daughter lost Sir Reginald!
* 46 D NELL: He's right here, Grandmother.
* 47 D HORTENSE: Then what are we doing here?
* 48 D NELL: You said we'd get ice cream.
* 49 D HORTENSE: Ah. So I did.
50 A ¶ Fitch clears his throat.
* 51 D FITCH: Madam, as you can see, I am engaged with two gentlemen.
* 52 D HORTENSE: Two? I see one and a half.
* 53 D BARNABY: I beg your pardon.
54 D HORTENSE: Is the other one a ghost?
* 55 D ALOYSIUS: I am quite solid, madam.
* 56 D HORTENSE: So was my late husband. Look where it got him.
* 57 A ¶ Silence.
58 A Fitch polishes his spectacles.
* 59 D FITCH: Nell, was it? What lost thing do you seek?
* 60 D NELL: Nothing. Grandmother told me to say we were looking for something so she could meet the two men with the matching mustaches.
* 61 D HORTENSE: Nell!
* 62 D NELL: You did.
* 63 D HORTENSE (to Barnaby): Children invent the most extraordinary things.
* 64 D BARNABY: Madam, we are not available for introductions.
* 65 D ALOYSIUS: We are engaged.
* 66 D BARNABY: To other people!
* 67 D ALOYSIUS: Women!
* 68 D HORTENSE: How very modern.
* 69 D FITCH: Might I suggest we resolve the trunk?
* 70 D BARNABY: Yes. The trunk.
* 71 D ALOYSIUS: Please.
72 A ¶ Fitch taps the folio.
* 73 D FITCH: There is a problem, gentlemen.
* 74 D BARNABY: Which is?
* 75 D FITCH: This folio does not contain papers. It contains a deed.
* 76 D ALOYSIUS: Barnaby.
* 77 D BARNABY: Don't.
* 78 D FITCH: To the Marigold.
* 79 D HORTENSE: The ship?
* 80 D FITCH: The ship. It appears that one of you, or perhaps both, has been selling it for some weeks, to various purchasers, on the open sea.
* 81 D NELL: Can you sell a boat while you're on it?
* 82 D HORTENSE: Apparently, dear. Apparently you can.
83 A ¶ Barnaby and Aloysius look at each other.
84 A Then at the door.
* 85 D BARNABY: After you.
* 86 D ALOYSIUS: No, you.
87 A ¶ They bolt together, wedged in the doorway.
88 A Fitch rings a brass bell.
* 89 A Somewhere above, a whistle blows.
* 90 D NELL: Grandmother, can we still get ice cream?
* 91 D HORTENSE: Child, we are going to buy the ship.

### SCENE s01026 | INT. GENERATION SHIP "TERRAPIN" - HYDROPONIC LAUNDRY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA VOSS, KOJI TANABE, AMARA OKELLO, TERRAPIN, PELL
* 1 A ¶ A warm, humid hold.
* 2 A Rows of lettuce racks climb the walls under violet grow-lamps.
* 3 A In the center, three washing drums turn, slow and patient.
4 A ¶ CAPTAIN ISADORA VOSS, 50s, silver braid, sleeves rolled, folds a coverall with military precision.
5 A Across from her, KOJI TANABE, 30s, engineer, grease on his cuffs, sits on a drum and stares at a handheld.
6 A ¶ DR. AMARA OKELLO, 40s, ship's physician, enters with a cart of sheets.
* 7 D AMARA: Captain. The night cycle is half over. You should rest.
* 8 D VOSS: I rest when the laundry is done.
* 9 D AMARA: It never is.
* 10 D VOSS: That's the beauty of it.
11 A ¶ Koji glances up.
12 A Back down.
* 13 D KOJI: Captain, I'm getting a drift on the aft coolant. Point two percent.
* 14 D VOSS: Over what?
* 15 D KOJI: Forty days.
* 16 D VOSS: Fix it.
* 17 D KOJI: I have. Three times.
18 A ¶ Voss sets the coverall down.
19 A Looks at him properly.
* 20 D VOSS: Then it's not drift.
* 21 D KOJI: No, ma'am.
* 22 A ¶ A soft chime.
* 23 A From the ceiling grille:
* 24 D TERRAPIN [V.O.]: Attention. Compartment seven pressure variance detected. Corrective action in progress.
* 25 D VOSS: Terrapin, which compartment is seven?
* 26 D TERRAPIN [V.O.]: The nursery.
* 27 A ¶ A beat.
28 A Amara's hand tightens on the cart.
* 29 D AMARA: How much variance?
* 30 D TERRAPIN [V.O.]: Point four kilopascals. Within tolerance.
* 31 D KOJI: Tolerance is point five.
* 32 D VOSS: Meaning we're one bad hour from not being within it.
33 A ¶ PELL, 19, galley apprentice, barefoot, slides in clutching a mop like a rifle.
* 34 D PELL: Captain! Somebody's in the cold lock. Banging on the inside.
* 35 D VOSS: Nobody's in the cold lock.
* 36 D PELL: I heard it.
* 37 D TERRAPIN [V.O.]: Cold lock occupancy: zero.
* 38 D PELL: Then why's it hitting back?
39 A ¶ The room goes still.
* 40 A Even the drums seem to slow.
* 41 A ¶ Then, faintly, from the far end of the hold: knock.
* 42 A Knock.
* 43 A Knock.
* 44 A A pause.
* 45 A Knock.
* 46 D AMARA: That's the code.
* 47 D VOSS: What code?
* 48 D AMARA: The medical one. Three, pause, one. Emergency.
* 49 D KOJI: Nobody's logged to the lock.
* 50 D VOSS: Terrapin, open the cold lock.
* 51 D TERRAPIN [V.O.]: Unable. Door sealed by order of Captain Voss.
* 52 D VOSS: I gave no such order.
* 53 D TERRAPIN [V.O.]: Issued four hundred days ago.
54 A ¶ Voss and Koji turn to look at each other.
55 A They speak at once.
* 56 D VOSS: Cancel the seal.
* 57 D KOJI: Cancel the seal!
* 58 D AMARA: Cancel the seal now!
* 59 D PELL (to nobody): I'm gonna throw up.
* 60 D TERRAPIN [V.O.]: Cancel denied. Reason: crew safety.
61 A ¶ The knocking quickens.
* 62 A Frantic.
* 63 A The cold lock door begins to frost over from the outside.
64 A ¶ Voss grabs a wrench off Koji's belt.
65 A Runs.
66 A The others follow.
* 67 A The drums turn on, spinning white sheets in empty light.

### SCENE s01027 | INT. STARLITE ROLLER RINK - SIX A.M.
Detected names (may be incomplete or contain aliases): DEZI ALVARADO, BOY, JUNIOR, FAIRWEATHER
* 1 A ¶ Carpet-walled, smelling of floor wax and old nacho cheese.
* 2 A A disco ball turns without light, a silent planet.
* 3 A The maple floor is empty and gleaming like a frozen lake.
4 A ¶ DEZI ALVARADO, 15, sits on the bench in secondhand skates, laces undone.
5 A Hoodie sleeves swallow her hands.
6 A She has been crying and has recently stopped.
7 A ¶ A figure leans against the snack counter.
8 A A BOY in a faded letterman jacket, tall, thin as a coat rack, a toothpick rolling in his mouth.
9 A He watches her without moving.
* 10 D BOY: You've got two left feet.
* 11 D DEZI: I've got one left foot and one broken heart.
* 12 D BOY: Which is worse?
* 13 D DEZI: Depends who you ask.
14 A ¶ She stands, wobbles, grabs the rail.
15 A He doesn't help.
16 A A kindness, of a kind.
* 17 D BOY [CONT'D]: They're saying you took your mother's car.
* 18 D DEZI: Borrowed.
* 19 D BOY: Without asking.
* 20 D DEZI: She was asleep.
* 21 D BOY: Dezi.
22 A ¶ She looks at him sharply.
23 A He shrugs, almost apologetic.
* 24 D BOY [CONT'D]: My name's Junior, by the way. Since you're not going to ask.
* 25 D JUNIOR [CONT'D]: Everyone calls me Junior. My dad's Junior too. Nobody knows who the first one was.
* 26 D DEZI: That's the saddest thing I've heard all week.
* 27 D JUNIOR: It's been a long week?
* 28 D DEZI: Rough.
29 A ¶ She pushes off the rail.
30 A Rolls two feet.
31 A Wavers.
32 A Falls.
33 A Hard.
34 A Sits on the floor with her palms flat.
35 A ¶ For a moment, she isn't sure if she's going to scream or laugh.
36 A ¶ She does both.
* 37 A ¶ The sound ricochets off the carpeted walls.
38 A Junior flinches, then, slowly, grins.
39 A He steps onto the floor in his sneakers and slides to her.
* 40 D JUNIOR [CONT'D]: That's it. Get it out.
* 41 D DEZI: I hate everyone.
* 42 D JUNIOR: Me too.
* 43 D DEZI: I hate my mother.
* 44 D JUNIOR: Mine's all right. But I hate my dad.
* 45 D DEZI: I don't hate her. I just wanted to drive somewhere nobody knew.
* 46 D JUNIOR: And you ended up at a roller rink.
* 47 D DEZI: It was the only thing open.
* 48 A ¶ The lights come on.
* 49 A All at once, bright as an operating room.
* 50 A The disco ball catches a beam and sprays confetti across the walls.
51 A ¶ MS. FAIRWEATHER, 60s, rink manager, a cardigan embroidered with tiny skates, comes through the swinging doors with a ring of keys and a coffee thermos.
52 A She stops dead.
* 53 D MS. FAIRWEATHER: We don't open for four hours.
* 54 D JUNIOR: Morning, Ms. Fairweather.
* 55 D MS. FAIRWEATHER: Junior. You are not supposed to be here. Neither is she. Whoever she is.
* 56 D DEZI: Dezi.
* 57 D MS. FAIRWEATHER: Dezi. Well. Are you hurt?
* 58 D DEZI: No.
* 59 D MS. FAIRWEATHER: Good. Skates off. Both of you. There's a pot of coffee in the back and a patched-up phone. Call your mother.
60 A ¶ Dezi looks at Junior.
61 A He lifts one shoulder.
62 A Almost a smile.
63 A ¶ She begins to unlace.

### SCENE s01028 | INT. DERELICT ORBITAL STATION - OBSERVATION RING - CONTINUOUS
Detected names (may be incomplete or contain aliases): ORSOLYA, TAVI
* 1 A ¶ Frost on the viewport.
* 2 A Beyond it, a gas giant fills the sky, banded and indifferent.
* 3 A Emergency lights pulse amber.
4 A ¶ ORSOLYA, 40s, scavenger's patched suit, helmet clipped to her hip, drifts along a handrail.
5 A TAVI, 20s, tool belt too big for him, follows with a lantern.
6 A ¶ She stops.
7 A Taps the wall.
8 A Listens.
* 9 D ORSOLYA (to the empty ring): Anyone aboard. We're salvage. We mean no harm.
* 10 A ¶ Silence.
* 11 A Frost ticks on the glass.
* 12 D TAVI: Maybe just--
13 A ¶ She raises a hand.
14 A He stops.
* 15 D ORSOLYA (again, louder): Anyone aboard.
* 16 A ¶ A pause.
* 17 A Nothing.
18 A She nods once, as if she expected nothing.
19 A ¶ She opens a wall panel.
* 20 A Wiring shredded.
* 21 A Burned.
* 22 D ORSOLYA [CONT'D] (muttering): Not an accident.
* 23 D TAVI: What?
* 24 D ORSOLYA: Nothing. Hold the light.
25 A ¶ He holds it.
26 A His hand trembles.
* 27 A The beam shakes across the wires.
28 A ¶ She notices.
29 A Says nothing.
30 A Takes the lantern from him.
31 A Hands him a screwdriver instead.
* 32 D ORSOLYA [CONT'D]: Twelve screws. Take the plate off.
33 A ¶ He works.
34 A Slowly.
35 A His eyes keep sliding to the viewport.
* 36 A ¶ A thud rolls through the ring.
* 37 A Metal on metal, somewhere aft.
38 A ¶ Both freeze.
* 39 D TAVI: That was close.
* 40 D ORSOLYA: That was far.
* 41 D TAVI: It sounded close.
* 42 D ORSOLYA: Far things sound close in a hull.
43 A ¶ She doesn't sound sure.
44 A Her thumb strokes the edge of the lantern.
* 45 A ¶ The thud again.
* 46 A Louder.
* 47 A Then a long scrape.
48 A ¶ Tavi drops the screwdriver.
* 49 A It floats, tumbling.
* 50 D ORSOLYA [CONT'D] (to the ring, calm): Everyone stay where you are. This is a recovery crew. We're leaving in five minutes.
* 51 D TAVI: There's no one here.
* 52 D ORSOLYA: I know.
53 A ¶ She grabs his sleeve.
54 A Tows him toward the airlock.
55 A Her grip is gentle.
56 A Too gentle.
57 A ¶ They reach the hatch.
58 A She spins the wheel.
* 59 A It opens onto the cold, bright tunnel of their own ship.
60 A ¶ She pushes him through first.
* 61 D TAVI (over his shoulder): You okay?
* 62 D ORSOLYA: Fine.
63 A ¶ She follows.
64 A Looks back once.
* 65 A The ring is quiet, amber, still.
* 66 A ¶ Then, from the dark, one more knock.
* 67 A Small.
* 68 A Almost polite.
69 A ¶ She seals the hatch.
* 70 D ORSOLYA [CONT'D] (to herself): Five minutes.
71 A ¶ She doesn't move for a long time.
72 A Tavi picks up the lantern and sets it between them, lighting both their faces.
