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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0163.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02213 | INT. DEPARTMENT STORE - SERVICE ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): TEDDY, ROYCE, BASTIEN NOVAK, MOTH
* 1 A ¶ A cargo lift, steel-lined, scarred by trolleys.
* 2 A One bare bulb.
* 3 A The floor indicator is stuck between 3 and 4.
4 A ¶ THEODORA "TEDDY" ROYCE (50s, night cleaner, bucket at her feet) sits on an overturned crate, holding a rosary.
5 A Opposite her, BASTIEN NOVAK (20s, security guard, uniform askew) leans against the wall, torch dead in his hand.
6 A In the corner, a girl in a nightgown, MOTH (9, bare feet, huge eyes), hugs a stuffed rabbit.
7 D TEDDY: How long have we been in here?
8 D BASTIEN: Forty minutes.
9 D TEDDY: It feels like four hours.
10 D BASTIEN: It feels like forty minutes, Teddy.
11 D TEDDY: You counted?
12 D BASTIEN: I looked at my watch.
13 D TEDDY: Your watch stopped.
14 D BASTIEN: It didn't stop.
15 D TEDDY: Show me.
16 A ¶ He turns his wrist.
* 17 A The second hand is frozen at 11:47.
18 A He stares at it.
19 A Looks up.
20 A Then his face gives away nothing at all.
21 D BASTIEN: It's the battery.
22 D TEDDY: It's the elevator.
23 D BASTIEN: Elevators don't stop watches.
24 D TEDDY: This one does.
25 D MOTH: Teddy, I'm cold.
26 D TEDDY: I know, sweetheart.
27 D MOTH: Can we go home?
28 D BASTIEN: Where's home, kid?
29 D MOTH: Down.
30 D BASTIEN: Down where?
31 D MOTH: Down below the basement.
* 32 A ¶ Silence.
33 A Teddy lowers her rosary.
34 A Bastien's mouth opens, then closes.
35 D BASTIEN: There's no below the basement.
36 D MOTH: There is.
37 D TEDDY: Moth, stop.
38 D MOTH: You said I could tell.
39 D TEDDY: I said you could tell me. Not him.
40 D BASTIEN: Tell me what?
41 D MOTH: That's where they keep the ones who stay.
42 D BASTIEN: Stay where?
43 D MOTH: Stay in the store.
44 D BASTIEN: This is a department store, kid.
45 D MOTH: After closing.
46 A ¶ Teddy puts a hand on Bastien's arm.
47 A He shakes it off.
48 D BASTIEN: Teddy. Who is she?
49 D TEDDY: She's. A friend.
50 D BASTIEN: Whose friend?
51 D TEDDY: She was here before the store was.
52 D BASTIEN: Before the store?
53 D TEDDY: This was a farm. Her family's. Her father sold it. Her mother wouldn't leave.
54 D BASTIEN: That was a hundred years ago.
55 D TEDDY: One hundred and eleven.
56 D MOTH: I'm nine.
57 D BASTIEN: You're nine.
58 D MOTH: Always nine.
* 59 A ¶ The bulb dims.
60 A Bastien backs into the corner, torch up like a club.
61 A Teddy doesn't move.
62 A Moth looks at him, tilts her head, and takes a step.
* 63 A ¶ The bulb pops.
* 64 A Dark.
* 65 A In the black, the elevator groans and begins to descend.
* 66 A The only sound is the rabbit being squeezed, a thin squeak, and a girl's voice humming a lullaby that is somehow older than anything in the building.
* 67 A ¶ Bastien's torch clicks on, flickers, shows the lift empty but for the bucket and the crate.
* 68 A Teddy's rosary lies on the floor.
* 69 A A small wet footprint beside it, bare and tiny.
* 70 A Another, leading to the doors.
* 71 A ¶ The lift stops.
72 A The doors open on a long dark corridor, floor tiled in black and white, and at the end of it, a little girl waving.

### SCENE s02214 | INT. LOCKED PENTHOUSE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): KENNETH ADLER-MOSS, NADINE CRUZ, VOICE
* 1 A ¶ Glass walls over a rain-slick city.
* 2 A A desk the size of a pool table.
* 3 A A bank of five monitors, three dark.
* 4 A On the carpet, a spilled glass of scotch and a pair of reading glasses, one lens cracked.
5 A ¶ KENNETH ADLER-MOSS (60s, tycoon, silk shirt open at the throat) sits behind the desk with a phone gripped in both hands.
6 A Sweat beads at his hairline.
* 7 A A pistol lies on the blotter, six inches from his right hand.
8 A He has not touched it.
9 A ¶ Across the desk, in the visitor's chair, a woman.
10 A NADINE CRUZ (30s, black coat, patient eyes) rests her chin on folded hands.
11 A She hasn't spoken in minutes.
* 12 A ¶ A speakerphone on the desk crackles.
13 D VOICE [V.O.]: Mr. Adler-Moss? Mr. Adler-Moss, it's the front desk. We have police in the lobby.
14 D ADLER-MOSS: Tell them. Tell them to come up.
15 D VOICE [V.O.]: Sir, the elevator is out. They'll take the stairs.
16 D ADLER-MOSS: How many floors?
17 D VOICE [V.O.]: Forty-one, sir.
18 D ADLER-MOSS: Forty-one. Christ.
19 A ¶ Nadine unfolds her hands.
20 A Adler-Moss flinches.
21 A She reaches into her coat, slowly, and pulls out a folded sheet of paper.
22 A She slides it across the desk.
23 A He doesn't take it.
24 D NADINE: Read it.
25 D ADLER-MOSS: What is it?
26 D NADINE: Your signature.
27 D ADLER-MOSS: I don't sign things I haven't read.
28 D NADINE: You signed this one.
29 A ¶ He picks it up with two fingers.
30 A Reads.
31 A His colour drains.
32 A He reads it again.
33 D ADLER-MOSS: This is forged.
34 D NADINE: It's notarised.
35 D ADLER-MOSS: By whom?
36 D NADINE: By a man who's very sorry.
* 37 A ¶ The speakerphone crackles.
38 A The lobby voice is shaking now.
39 D VOICE [V.O.]: Sir? Sir, are you there?
40 D NADINE (to the phone, calm): He's here.
41 D VOICE [V.O.]: Who is that?
42 D NADINE: The reason you won't need the police.
43 A ¶ She lifts her hand, finger hovering over the disconnect key.
44 A Adler-Moss lunges for the pistol.
45 A Nadine slams the button.
* 46 A Static.
* 47 A The line goes dead.
48 A ¶ The pistol is in his hand, shaking.
49 A She doesn't move.
50 D ADLER-MOSS: I'll shoot.
51 D NADINE: You won't.
52 D ADLER-MOSS: I will.
53 D NADINE: You can't. It isn't loaded.
54 A ¶ He stares at the gun.
55 A Checks the chamber.
* 56 A Empty.
57 A Checks the magazine.
* 58 A Empty.
59 D NADINE [CONT'D]: I took them out at seven.
60 D ADLER-MOSS: You were here at seven?
61 D NADINE: I've been here since lunch.
* 62 A ¶ Below them, very faintly, boots on concrete.
* 63 A A distant door slamming.
* 64 A Voices.
* 65 A Coming up.
66 A ¶ Nadine stands, buttons her coat, and for the first time smiles.

### SCENE s02215 | INT. UNDERGROUND SQUASH COURT - NIGHT
Detected names (may be incomplete or contain aliases): CITY SQUASH LEAGUE FINALS, COACH WINIFRED BAPTISTE, TOMMIE, VAUGHN, LENORE ASHCROFT
* 1 A ¶ A glass-backed court under a bare basement vault.
* 2 A Brick pillars, pipes, one hanging fluorescent.
* 3 A A banner on the back wall: CITY SQUASH LEAGUE FINALS - TIED 2-2.
4 A ¶ COACH WINIFRED BAPTISTE (50s, weathered, towel around her neck) kneels at the sidewall, tying a young player's shoe.
5 A TOMASINA "TOMMIE" VAUGHN (20s, wiry, headband) bounces a ball against the front wall, thwack, thwack, thwack.
6 D COACH BAPTISTE (to the court): Fifteen minutes. Hydrate.
7 D TOMMIE: Coach, I'm fine.
8 D COACH BAPTISTE: I wasn't talking to you.
9 D TOMMIE: Then who?
10 D COACH BAPTISTE: The universe.
11 A ¶ Tommie laughs.
* 12 A The ball rebounds.
13 A She catches it one-handed.
14 D COACH BAPTISTE [CONT'D]: Tommie. Listen.
15 D TOMMIE: I'm listening.
16 D COACH BAPTISTE: She hits down the wall on every second serve. You know it.
17 D TOMMIE: I know it.
18 D COACH BAPTISTE: Cut it off at the T.
19 D TOMMIE: At the T.
20 D COACH BAPTISTE: And don't go chasing winners. Wait for her to give you one.
21 A ¶ The glass door at the back of the court swings open.
22 A A tall woman in a navy tracksuit enters, bag over one shoulder, the quiet confidence of someone who has never lost in this building.
23 A This is LENORE ASHCROFT (40s, former national champion, silver in her hair).
24 D LENORE: Winnie.
25 D COACH BAPTISTE (without turning): Lenore.
26 D LENORE: Heard you had a final.
27 D COACH BAPTISTE: Heard you were retired.
28 D LENORE: I am. I'm here to watch.
29 D COACH BAPTISTE: Sit anywhere. Not in my line of sight.
30 A ¶ Lenore smiles and takes a seat in the gallery, high up in the dark.
31 A Tommie looks from one to the other.
* 32 A The ball stops.
33 D TOMMIE: Who's that?
34 D COACH BAPTISTE: My old partner.
35 D TOMMIE: She looks like she's judging me.
36 D COACH BAPTISTE: She is.
37 D TOMMIE (muttering): Great. Great.
38 D COACH BAPTISTE (to the court): Fifteen minutes. Hydrate.
39 D LENORE (calling from the gallery): Hit the wall, Tommie. Not the ball.
40 A ¶ Tommie looks up.
* 41 A A long pause.
42 A Then she turns to the front wall and lets the ball go.

### SCENE s02216 | EXT. SALT-LICK CORRAL - DAWN
Detected names (may be incomplete or contain aliases): OLD BASIL TREADWELL, JUNIPER TREADWELL, SEVERIN KOZLOWSKI
* 1 A ¶ A split-rail corral at the edge of the badlands.
* 2 A A single bare cottonwood.
* 3 A Pink light climbing a ridge.
* 4 A Frost on the rails.
* 5 A In the middle, a rangy bay horse tosses its head, tethered to a post.
6 A ¶ Three people.
7 A ¶ OLD BASIL TREADWELL (70s, rancher, leather vest, white whiskers) stands at the rail, rolling a cigarette.
8 A His grown daughter JUNIPER TREADWELL (30s, braid under a battered hat, rifle on her back) crouches at the horse's hoof, pretending to inspect it.
9 A And a hired hand, SEVERIN KOZLOWSKI (30s, quiet, one blue eye and one brown) leans on the post, coiling a lariat.
10 A ¶ Nobody speaks.
11 A Basil licks the paper.
12 A Juniper runs a thumb over the horse's fetlock.
13 D BASIL: Got a stone in there?
14 D JUNIPER: Not yet.
15 D BASIL: Then why're you looking?
16 D JUNIPER: Habit.
17 A ¶ Severin lets the rope fall.
* 18 A The horse stamps.
* 19 A Frost smokes off the ground.
20 D BASIL: Your mother loved this animal.
21 D JUNIPER: I remember.
22 D BASIL: She'd have fed it sugar every morning.
23 D JUNIPER: I remember that too.
24 A ¶ Severin shifts his weight.
25 A Basil does not look at him.
26 A Juniper does.
27 D BASIL: Severin, fetch my saddle.
28 D SEVERIN: It's in the barn, sir.
29 D BASIL: I know where it is.
30 A ¶ Severin doesn't move.
* 31 A The horse tugs at the tether.
32 D JUNIPER: Pa.
33 D BASIL: Don't Pa me.
34 D JUNIPER: He doesn't have to go.
35 D BASIL: He's a hired hand.
36 D JUNIPER: He's staying.
37 A ¶ Basil finally looks at Severin.
* 38 A A long moment.
39 A The old man's eyes are wet but it could be the cold.
40 D BASIL: Fine.
41 A ¶ He finishes rolling the cigarette.
42 A Strikes a match on the rail.
* 43 A The flame trembles in the dawn light.
44 A He lights it.
* 45 A Smoke curls up past the cottonwood.
46 D JUNIPER: You never answered me.
47 D BASIL: About what?
48 D JUNIPER: About the letter.
49 D BASIL: What letter?
50 D JUNIPER: The one you wrote and didn't send.
51 A ¶ Basil takes a long drag.
52 A Severin takes a step toward the horse.
53 A Juniper rises.
54 D BASIL (very quietly): Burn it.
55 D JUNIPER: I read it.
56 D BASIL: Then you know.
57 D JUNIPER: I know you sold the north pasture.
* 58 A ¶ Silence.
* 59 A The horse breathes steam.
60 A Severin takes the lariat and slings it over his shoulder.
61 A Basil hurls the cigarette to the dirt and grinds it under his heel.
62 D BASIL: To him.
63 A ¶ He doesn't point.
64 A He doesn't need to.
65 A Severin looks at the ground.
66 A Juniper looks at Severin.
67 A Then at her father.
* 68 A A thin wind rattles the frost off the cottonwood leaves.
69 D JUNIPER: You sold it to the hired man.
70 D BASIL: It was fair.
71 D JUNIPER: It was my mother's land.
72 D BASIL: It was my land.
73 D JUNIPER: She gave it to you.
74 D BASIL: And I gave it to him. Because he asked.
75 A ¶ Severin lifts his head.
76 A Juniper lunges.
77 A He sidesteps; she slams into the post, hand on his shirt, knuckles white.
* 78 A The horse shies, ropes snapping taut.
79 A Basil steps between them, one arm up, the old man suddenly very strong.
80 D BASIL [CONT'D]: Enough!
81 A ¶ They freeze: Juniper with her fist in Severin's shirt, Severin with both hands raised, Basil with his arm between.
* 82 A The horse screams and settles.
83 A Nobody breathes.
84 D JUNIPER (low, to Severin): You didn't tell me.
85 D SEVERIN: He asked me not to.
86 D JUNIPER (to her father): Why?
87 D BASIL: Because you'd have fought. Like you're fighting now.
88 A ¶ She lets go of the shirt slowly, one finger at a time.
89 A Steps back.
90 A Wipes her mouth.
91 A Looks at the pink light cresting the ridge.
92 D JUNIPER (muttering): Four generations.
93 D BASIL: Five, if you stay.
94 A ¶ She doesn't answer.
95 A She unslings the rifle, props it against the post, and goes to the horse.
96 A She puts her cheek against its neck.
97 A Basil and Severin stand there, apart, while the sun lifts over the ridge and floods the frozen yard.

### SCENE s02217 | INT. VETERINARY HOSPITAL - SURGERY SUITE - 2 A.M.
Detected names (may be incomplete or contain aliases): ISADORA KEMP, TECH PRESTON LI, ARTHUR BELL
* 1 A ¶ Stainless steel, a hush of oxygen.
* 2 A On the table, a golden retriever under anaesthesia, chest rising slow.
* 3 A A heart monitor chirps in a calm rhythm.
4 A ¶ DR. ISADORA KEMP (40s, surgeon, mask down) scrubs at the sink.
5 A TECH PRESTON LI (20s, scrubs with cartoon dogs) prepares instruments.
6 A OWNER MR. ARTHUR BELL (70s, cardigan, trembling) watches from the window of the observation room, his palm flat against the glass.
7 D ISADORA: Preston, ready?
8 D PRESTON: Ready.
9 D ISADORA: Blade.
10 A ¶ He hands it over.
11 A She works without ceremony, a quick incision.
* 12 A The retriever's belly opens clean.
13 A She examines the field, brow furrowing.
14 D PRESTON: How's it look?
15 D ISADORA: Better than the X-ray.
16 D PRESTON: Good.
17 D ISADORA (to herself): Much better.
18 A ¶ She reaches in.
19 A Withdraws a twisted length of blue cloth, glistening.
20 A Holds it to the light.
21 D ISADORA [CONT'D] (to the room): Everyone, we found it.
* 22 A ¶ The intercom crackles.
23 A Mr. Bell's voice, thin and anxious, from the observation room.
24 D MR. BELL [O.S.]: Is that.
25 D ISADORA: A sock, Mr. Bell.
26 D MR. BELL [O.S.]: It's blue.
27 D ISADORA: It is.
28 D MR. BELL [O.S.]: It's Margaret's.
29 D ISADORA: Margaret's sock?
30 D MR. BELL [O.S.]: She left them. When she died. I couldn't throw them away.
31 A ¶ Isadora stops.
32 A Preston looks at her.
33 A She lowers the sock into the tray, quietly, as if it were glass.
34 D ISADORA: Mr. Bell, we'll clean it.
35 D MR. BELL [O.S.]: Please.
36 D ISADORA: Preston, put it in a bag.
37 D PRESTON: Yes, Doctor.
38 D ISADORA: A clean bag.
39 D PRESTON: A very clean bag.
* 40 A ¶ The monitor chirps.
* 41 A The retriever sighs in her sleep.
42 D ISADORA (to herself, almost): Who eats a sock.
43 D PRESTON: A dog in grief.
44 D ISADORA: I think so, yes.
45 A ¶ She resumes.
* 46 A The incision closes under her hands, stitch after stitch.
47 A Preston wipes his eyes with the back of his glove.

### SCENE s02218 | INT. COUNTY JAIL - ATTORNEY VISITING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): CORA WINSLOW-ABBOTT, LILY, MARSTON
* 1 A ¶ A grey cinderblock cell, steel table bolted to the floor, two plastic chairs.
* 2 A A one-way window in the far wall.
* 3 A A fluorescent light buzzes.
4 A ¶ CORA WINSLOW-ABBOTT (30s, defence attorney, rolled sleeves, legal pad) sits with a pen clicking.
5 A Across from her, in an orange jumpsuit, sits LILLIAN "LILY" MARSTON (30s, accountant, cuffed hands, composed face).
6 A Neither has blinked in a while.
7 D CORA: Lily. Start at the beginning.
8 D LILY: I'd rather start in the middle.
9 D CORA: That's not how it works.
10 D LILY: It's how I work.
11 A ¶ Cora sets her pen down.
12 A Folds her hands.
13 D CORA: Where were you at nine on the night of the fourteenth?
14 D LILY: At the office.
15 D CORA: Alone?
16 D LILY: With Brenda. She was in the next room.
17 D CORA: Brenda says she wasn't.
18 D LILY: Brenda says a lot of things.
19 D CORA (to the window): For the record, the client is being difficult.
20 D LILY: I'm not difficult. I'm precise.
21 D CORA: You were precise when you moved four million dollars.
22 D LILY: I was precise when I moved it back.
23 D CORA: Back?
24 D LILY: She took it first.
25 D CORA: Who did?
26 D LILY: Brenda.
27 D CORA: She says you did.
28 D LILY: She lies.
29 D CORA (muttering): They both do.
30 D LILY: What was that?
31 D CORA: Nothing. Notes to myself.
32 A ¶ She scrawls on the legal pad.
33 A Lily watches the pen.
34 D LILY: You think I'm guilty.
35 D CORA: I think you're interesting.
36 D LILY: That's not an answer.
37 D CORA: It's the only honest one I have.
38 D LILY: Fine.
39 A ¶ She leans back.
* 40 A The chain between her wrists clinks against the table.
41 A Cora meets her eyes.
42 D CORA: Here's what I know. She says you stole it. You say she stole it. One of you is right.
43 D LILY: One of us is.
44 D CORA: Or neither.
45 D LILY: Then who?
46 D CORA: That's what I intend to find out.
47 A ¶ She stands, gathers the pad.
48 A Lily looks at her hands.
49 D LILY: Cora.
50 D CORA: Yes?
51 D LILY: She took the accounts at eight-fifteen. I have the logs.
52 D CORA: Where?
53 D LILY: In my head.
54 A ¶ Cora stops with her hand on the door.
55 D CORA (to herself): Of course.

### SCENE s02219 | INT. LAUNDROMAT - DAWN
Detected names (may be incomplete or contain aliases): MARTHA OYELARAN-COLE, KAYLA, ARTURO VEGA, DESIREE BLANCHARD, OKONKWO-PRICE, SOLANGE DELACROIX
* 1 A ¶ Humming machines, a bank of dryers.
* 2 A A flickering neon sign reads OPEN 24 HRS.
* 3 A Rain-streaked windows.
* 4 A A vending machine glows in the corner.
5 A ¶ MARTHA OYELARAN-COLE (60s, thick glasses, cardigan) folds sheets with practised precision.
6 A At the next table, her granddaughter KAYLA (16, headphones, school hoodie) sorts socks without looking up.
7 A Beside them, ARTURO VEGA (40s, delivery driver, wet jacket) feeds quarters into a washer.
8 A DESIREE BLANCHARD (30s, nurse in scrubs) dozes in a plastic chair.
9 A And the attendant, MR. OKONKWO-PRICE (70s, bowtie, name tag), mops by the door.
* 10 A ¶ Quiet.
* 11 A Only machines.
12 D MARTHA: You'll want the warm cycle for those.
13 D KAYLA: They're socks, Gran.
14 D MARTHA: Warm.
15 A ¶ Kayla pulls out an earbud and drops a bundle into the machine.
16 A Arturo glances at her, then at Martha.
17 D ARTURO (to Martha): I'm sorry, is this machine free?
18 D MARTHA: That one's broken.
19 D ARTURO: It took my quarters.
20 D MARTHA: It does that.
21 D MR. OKONKWO-PRICE (from the door): I'll refund you, sir.
22 D ARTURO: Thank you.
* 23 A ¶ The bell above the door jingles.
24 A A woman in a black dress and mud-streaked heels enters, a garbage bag of clothing in her arms, mascara tracks on her cheeks.
25 A This is SOLANGE DELACROIX (30s, composed but wrecked).
26 A Everyone looks at her and then pretends they didn't.
27 D SOLANGE: Is there a free machine?
28 D MARTHA: Number six.
29 D SOLANGE: Thank you.
30 A ¶ She crosses to number six.
31 A Loads the bag.
32 A Pours detergent from a bottle she takes out of her purse.
33 A Starts it with a shaking hand.
34 A Stands there, watching it fill.
35 A ¶ Desiree stirs.
36 A Her eyes open on the dress, on the heels.
37 D DESIREE: Rough night?
38 D SOLANGE: Rough morning.
39 D DESIREE: I'm sorry.
40 D SOLANGE: Don't be.
41 A ¶ Kayla puts the earbuds in her pocket.
42 A Martha folds a pillowcase, then another.
43 A She places one on top of Solange's bag, quietly.
44 D MARTHA: For your head.
45 A ¶ Solange stares at it.
46 A Then at Martha.
47 A She sits on the bench beside her, folds her hands, and for the first time looks up, directly at the old woman.
48 D SOLANGE: Thank you.
49 D MARTHA: Everyone ends up in a laundromat eventually.
* 50 A ¶ The machines hum.
* 51 A Somewhere a dryer buzzes, and no one moves to open it.

### SCENE s02220 | EXT. WHALEBONE TOLL BRIDGE - DUSK
Detected names (may be incomplete or contain aliases): BRANNOCH, STRANGER, TAVI, ILSEWYN
* 1 A ¶ A bridge made from the ribs of a dead sea-beast arches over a grey gorge.
* 2 A A tin lantern hangs at the midpoint.
3 A ¶ BRANNOCH, fifties, broad, in a patched toll-keeper's coat, sits on a stool beside a rope barrier.
4 A He counts copper coins into a bowl.
5 A ¶ A STRANGER in a travel-stained cloak walks up from the east road.
6 A Hood up.
7 A A staff in one hand.
8 D BRANNOCH: Toll is two coppers. Four if you've a cart.
9 D STRANGER: No cart.
10 A ¶ Brannoch holds out a hand.
11 A The Stranger drops two coins in it.
12 A Brannoch bites one.
13 D BRANNOCH: Good. Name for the ledger?
14 D STRANGER: Do I need one?
15 D BRANNOCH: Ledger likes a name. Keeps the dead from being counted twice.
16 A ¶ The Stranger thinks.
17 A Pushes the hood back.
18 A A young woman, weathered, a scar through one eyebrow.
19 D STRANGER: Tavi.
20 A ¶ Brannoch writes it in a thick book.
21 D BRANNOCH: Tavi. Where to?
22 D TAVI: Over. Then the salt towns.
23 D ILSEWYN [O.S.] (from below the bridge): Brannoch! The rope's slipped again!
24 A ¶ Brannoch sighs and leans over the rail.
25 D BRANNOCH: Hold it, then! I'm busy!
26 D ILSEWYN [O.S.]: I am holding it! It's holding me!
27 D BRANNOCH (to Tavi): My sister. She keeps the ferry cables.
28 D TAVI: She sounds tired.
29 D ILSEWYN [O.S.]: I am! And I can hear you!
30 D BRANNOCH: She's been tired since our mother died.
31 A ¶ Brannoch lifts the rope barrier.
32 A Tavi steps toward the span, then stops.
33 D TAVI: Is it true the ribs sing at night?
34 D BRANNOCH: When the wind comes from the north.
35 D ILSEWYN [O.S.]: It does not sing, Brannoch, it whistles.
36 D BRANNOCH: It sings, and always has.
37 D ILSEWYN [O.S.]: It whistles, and always has.
38 A ¶ Tavi looks from one to the other, almost smiling.
39 D TAVI: Then I'll listen on the way across.
40 A ¶ She walks onto the bridge.
41 A Brannoch watches her go, then sits and takes up the coins again.
42 D BRANNOCH: Mind the third rib. It's loose.

### SCENE s02221 | INT. ABANDONED BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): DOT, FITZ, OGUNLEYE, GUNNY, INTERCOM, PRU
* 1 A ¶ Dead neon.
* 2 A Lane 6 still has pins.
* 3 A A birthday banner droops: HAPPY 40TH, KEVIN.
4 A ¶ DOT, forties, event planner, clipboard clamped to her chest, shoves a cake onto the ball return while FITZ, thirties, in a rented shark costume, trips over his own fin and takes down a rack of house shoes and OGUNLEYE, "GUNNY" to all, sixties, a retired lane mechanic with a toolbox, drops to one knee to catch the cake before it slides off, and the ball return rumbles, and the cake shoots down Lane 6 like a torpedo.
* 5 A ¶ Silence.
* 6 A A single pin wobbles.
7 D DOT: Nobody saw that.
8 D FITZ (muffled, in the shark head): I saw it. I'm a shark. We see everything.
9 D GUNNY: That cake had eighty dollars of fondant on it.
10 D DOT: Kevin arrives in ten minutes. Ten.
11 A ¶ Fitz yanks the shark head off, sweaty, hair plastered.
12 D FITZ: I can't breathe in this thing. Why am I a shark?
13 D DOT: Kevin loves sharks.
14 D FITZ: Kevin loves SHARKS. Not men inside sharks.
15 A ¶ Gunny walks down the lane, picks up the ruined cake with both hands like an infant, and carries it back, frosting to the elbows.
16 D GUNNY: I can fix it. Give me a spatula and a prayer.
17 D DOT: I have neither. I have a clipboard.
* 18 A ¶ An INTERCOM crackles overhead.
19 D PRU [V.O.] (over intercom, bored): Attention, party in Lane 6. Your guest of honor is in the parking lot and he's on the phone with his mother.
20 D DOT: How long?
21 D PRU [V.O.]: His mother is Greek. I'd say forty minutes.
22 A ¶ Dot exhales for the first time in an hour.
23 A She sits on the ball return.
24 D FITZ: So we have time.
25 D DOT: We have time.
26 D GUNNY (scraping frosting): Then somebody hand me a spatula.
27 A ¶ Fitz offers a bowling shoe.
28 A Gunny takes it, considers it, and uses it.
29 D PRU [V.O.] (over intercom): For the record, the shark is good.
30 A ¶ Fitz bows.
31 A His fin knocks over the last pin.

### SCENE s02222 | INT. RESTAURANT WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): VIC SALERNO, DOLORES KWAN
* 1 A ¶ Racks of frozen fish and crates of lemons.
* 2 A Breath fogs.
* 3 A A single bulb swings.
4 A ¶ VIC SALERNO, fifties, camel-hair coat, sits on an upturned crate.
5 A DOLORES KWAN, forties, apron over a black dress, stands at the door with a revolver held loosely at her side.
6 D VIC: You'd have done better with the knife.
7 D DOLORES: The knife is for fish.
8 D VIC (a thin smile): I taught you that.
9 A ¶ She lowers the gun an inch.
10 D DOLORES: You taught me the books too. Both sets.
11 D VIC: Then you know why I came.
12 D DOLORES: I know why you think you did.
13 A ¶ They speak at the same moment.
14 D VIC: It was never personal.
15 D DOLORES: It was always personal.
* 16 A ¶ A long beat.
17 A Vic stands, slow, rubbing his hands against the cold.
18 D VIC: Open the door, Dolores. I'm freezing.
19 D DOLORES: It locks from the outside, Vic.
20 A ¶ She sets the revolver on a shelf of frozen lemons, steps out, and the heavy door thuds shut behind her.

### SCENE s02223 | EXT. FLOODED RICE PADDY DYKE - DAWN
Detected names (may be incomplete or contain aliases): CORPORAL HARUTO MIZUNO, PRIVATE EMEKA OBI
* 1 A ¶ Mist hangs over the water.
* 2 A A broken dyke, a line of mud, a burned-out ox cart half sunk.
3 A ¶ CORPORAL HARUTO MIZUNO, twenties, helmet strap loose, sits on the cart's axle cleaning a rifle bolt with a rag.
4 A Beside him, PRIVATE EMEKA OBI, nineteen, thin, holds a tin cup of tea with both hands.
5 D OBI: It's quiet.
6 D MIZUNO: It's been quiet since yesterday.
7 D OBI: Is that good?
8 D MIZUNO: It's quiet.
9 A ¶ Obi sips.
10 A Grimaces.
11 D OBI: This tastes like smoke.
12 D MIZUNO: Everything tastes like smoke.
13 A ¶ Mizuno reassembles the bolt, slides it home, works the action once.
14 D OBI: My mother says the fog is the spirits of the rice.
15 D MIZUNO: My mother says it's the river breathing.
16 D OBI: They would get along.
17 D MIZUNO: They would argue.
18 D OBI (smiling): Yes. About the rice.
* 19 A ¶ Distant, a cock crows.
20 A Both men look up toward the sound.
21 D MIZUNO: That's a good sign.
22 D OBI: Or the farm still has someone in it.
23 A ¶ They answer the same moment, quiet.
24 D MIZUNO: We should check.
25 D OBI: We should check.
26 A ¶ They stand.
27 A Mizuno shoulders the rifle.
28 A Obi pours the last of the tea into the water and follows him along the dyke into the mist.

### SCENE s02224 | INT. COUNTY COURTHOUSE - COURTROOM 3B - DAY
Detected names (may be incomplete or contain aliases): JUDGE IMELDA CARDENAS, WENDELL PRATT, SOO-JIN HAN, BARTY, QUILL
* 1 A ¶ A cramped room under a failing skylight.
* 2 A Radiators clank.
3 A ¶ JUDGE IMELDA CARDENAS, sixties, silver braid, presides.
4 A WENDELL PRATT, fifties, rumpled prosecutor.
5 A SOO-JIN HAN, thirties, sharp defense counsel in a navy suit.
6 A In the box, BARTHOLOMEW "BARTY" QUILL, seventies, a retired beekeeper in a borrowed tie.
7 D SOO-JIN: Mr. Quill, you've kept bees how long?
8 D BARTY: Fifty-one years, Ms. Han.
9 D WENDELL: Objection. Relevance.
10 D JUDGE CARDENAS: Mr. Pratt, you've been relevant to nothing since lunch. Overruled.
11 D WENDELL: Your Honor, with respect--
12 D JUDGE CARDENAS: I said overruled, Wendell.
13 D SOO-JIN: Mr. Quill, on the night of the fourteenth, you saw a van near the apiary.
14 D BARTY: Gray van. No plates. Engine running.
15 D WENDELL: Leading!
16 D SOO-JIN: He's describing, Your Honor.
17 D JUDGE CARDENAS: He is describing. Sit, Mr. Pratt.
18 D WENDELL: I am sitting, Judge.
19 D JUDGE CARDENAS: You are hovering. Sit lower.
20 D BARTY: Can I say something about the bees?
21 D SOO-JIN: Please, Barty.
22 D WENDELL: Mr. Quill, you don't have to--
23 D BARTY: I want to. They go quiet when strangers come. That night, they went quiet at ten, not nine. Somebody was at the hive an hour before the van.
24 D SOO-JIN: An hour before.
25 D BARTY: Right, Ms. Han. Which means the van wasn't the first.
26 D WENDELL: That's speculation.
27 D JUDGE CARDENAS: It's beekeeping, Wendell, and it's more than you've given me all week.
28 D SOO-JIN: Mr. Quill, who else keeps hives within a mile?
29 D BARTY: Just the Pellegrino boy and me.
30 D WENDELL: Your Honor, this is a fishing expedition.
31 D JUDGE CARDENAS: It is a honey expedition, and I'll allow it.
32 D SOO-JIN: And the Pellegrino boy, Barty, does he drive a gray van?
33 D BARTY: He drives a bicycle.
34 D WENDELL: Thank you!
35 D BARTY: But his uncle drives a gray van.
36 D WENDELL: Objection!
37 D JUDGE CARDENAS: Overruled. Go on, Mr. Quill.
38 D BARTY: Uncle Dario. Owes me forty dollars since March.
39 D SOO-JIN: Nothing further, Your Honor.
40 D JUDGE CARDENAS: Mr. Pratt, cross?
41 D WENDELL (a long pause): Mr. Quill, about that forty dollars.
42 D BARTY: Yes, Mr. Pratt?
43 D WENDELL: You hold a grudge, don't you?
44 D BARTY: I hold bees, Mr. Pratt. Grudges just sting.
45 D JUDGE CARDENAS: Court is in recess until two. Ms. Han, bring me honey.
46 D SOO-JIN: Your Honor?
47 D JUDGE CARDENAS: Jar of it. My cold's back.

### SCENE s02225 | INT. FUNICULAR CAR MIDWAY UP A MOUNTAIN - NIGHT
Detected names (may be incomplete or contain aliases): REUBEN FAIRCHILD, KASIMIR VOSS, ODALYS
* 1 A ¶ A wooden cable car, stopped dead on a steep track.
* 2 A Wind rattles the windows.
* 3 A Below, a hotel's lights glitter in the valley.
4 A ¶ REUBEN FAIRCHILD, forties, gray tuxedo, kneels by a floor panel with a pry bar.
5 A KASIMIR VOSS, thirties, black tuxedo, holds a flashlight and watches the track behind them.
6 A Each wears a small earpiece.
7 D KASIMIR: Cable's steady. We have maybe six minutes.
8 D REUBEN: Four, if she's right.
9 A ¶ He pries the panel.
* 10 A It lifts.
* 11 A Beneath it, a steel lockbox bolted to the frame.
12 D ODALYS [V.O.] (in their earpieces, calm): Gentlemen, the hotel's night manager just left his office. He's walking to the lift station.
13 D KASIMIR: How long to get here?
14 D ODALYS [V.O.]: Walking? Ten minutes. If he notices the car's stopped, he'll run.
15 D REUBEN: Then let's not make him notice.
16 A ¶ Reuben takes a thin case from his jacket and opens it.
* 17 A Lockpicks, a stethoscope.
18 A He hangs the stethoscope around his neck and presses the diaphragm to the box.
19 D KASIMIR: You said it was a four-digit lock.
20 D REUBEN: It's a six-digit lock.
21 D KASIMIR: You said four.
22 D REUBEN: I said four minutes.
23 A ¶ Kasimir lets that go.
24 A He turns the flashlight off.
* 25 A Darkness, then the pale blue of mountain night.
26 D ODALYS [V.O.]: I'm watching the manager. He's stopped. He's looking up at the track.
27 D KASIMIR: Stopped?
28 D ODALYS [V.O.]: Stopped. Pulling out a phone.
29 A ¶ Reuben's hands freeze on the dial.
30 A Kasimir leans toward the window, one hand on his gun.
31 D REUBEN: Odalys. Is he calling the lift station?
32 D ODALYS [V.O.]: Hold on.
* 33 A ¶ A long silence.
* 34 A Wind.
* 35 A The car creaks.
* 36 A Reuben's breath fogs the glass.
37 D KASIMIR (whispering): He's seen the car. He knows.
38 D REUBEN: He doesn't know.
39 D KASIMIR: He has a phone in his hand.
40 D REUBEN: He has a phone. That's all he has.
41 A ¶ Reuben turns the dial again.
* 42 A A click.
* 43 A Another.
44 D ODALYS [V.O.]: He's dialing. Oh, he's dialing the front desk, not the lift. The front desk.
45 D KASIMIR: That's a different thing?
46 D ODALYS [V.O.]: It's a sleepy clerk with a cold. That's a very different thing.
* 47 A ¶ Click.
* 48 A Click.
49 A Reuben's face.
* 50 A The lock drops.
51 A He lifts the lid.
* 52 A ¶ Inside, a velvet pouch.
53 A He opens it.
* 54 A A stone the size of a plum catches the blue light.
55 D KASIMIR: That is the ugliest diamond I have ever seen.
56 D REUBEN: It's a spinel. Worth three diamonds.
57 D ODALYS [V.O.]: Boys, the manager's put the phone away. He's shrugging. He's walking back to the hotel.
58 A ¶ Kasimir lets out a laugh he's been holding.
59 A Reuben closes the lid, slides the pouch inside his coat, drops the panel back into place.
60 D KASIMIR: And that's it?
61 D REUBEN: That's it.
* 62 A ¶ The car lurches.
* 63 A Starts to move again, upward, humming.
64 D ODALYS [V.O.]: Somebody just turned the power back on. You've got ninety seconds to the top station.
65 D KASIMIR: Ninety seconds to look like we belong at a gala.
66 A ¶ Reuben straightens his bow tie.
67 A Kasimir slicks his hair.
* 68 A The car glides on up the mountain toward the lights.
69 D REUBEN: Nobody ever looks at the men in the funicular.
70 D ODALYS [V.O.]: I'm looking at you.
71 D REUBEN: Nobody but you.

### SCENE s02226 | EXT. SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): NGAIO, TOMASZ, LUPE
* 1 A ¶ White to the horizon.
* 2 A Heat shimmers.
* 3 A The wreck of a Land Cruiser sits on its roof, tires blown, one door off.
4 A ¶ Under a tarp rigged from the open hatch sit three survivors.
5 A ¶ NGAIO, fifties, a Maori geologist, cracked lips, a wide-brimmed hat held on with a scarf.
6 A TOMASZ, thirties, the driver, sunburned face, an arm in a makeshift sling.
7 A LUPE, nineteen, a student, barefoot, her boots set neatly beside her.
8 A ¶ Ngaio unscrews a canteen.
* 9 A A mouthful of water for each of them.
* 10 A No more.
11 D NGAIO: One sip. Hold it. Count to ten.
12 D TOMASZ: Give me two sips. I'm bigger than the girl.
13 D LUPE: I'm right here, Tomasz.
14 D TOMASZ: I know you're here.
15 D NGAIO: You get the same as the rest of us. That's the rule.
16 D TOMASZ: Whose rule?
17 D NGAIO: Mine. I've got the canteen.
18 A ¶ Tomasz grunts.
19 A Takes his sip.
20 A Holds it.
21 A His eyes close.
22 D LUPE (whispering): Do you think they know we're missing?
23 D NGAIO: The lodge expects us at six tonight.
24 D TOMASZ: They'll look tomorrow.
25 D LUPE: That's too late, isn't it?
26 D NGAIO: Not if we're careful with the water.
27 D TOMASZ: And the heat.
28 D NGAIO: And the heat. We walk at dusk. East, toward the ridge. The salt is hard there, you won't sink.
29 D LUPE: How far?
30 D TOMASZ: Twenty kilometers.
31 D NGAIO: Twenty-two.
32 D TOMASZ: Twenty-two.
33 D LUPE (low): Okay. Okay.
* 34 A ¶ A wind rises, spinning a small white devil of salt.
* 35 A It passes.
* 36 A The tarp snaps.
37 D NGAIO: There. See that? Wind means weather turning. By dark, it'll cool.
38 D TOMASZ: You say that like you've done this.
39 D NGAIO: Thirty years of fieldwork. I've been lost on flats before.
40 D LUPE: Were you scared?
41 D NGAIO: Every time.
42 A ¶ Lupe laughs, a small cracked sound.
43 A Tomasz almost smiles.
44 D TOMASZ: Then what's the trick?
45 D NGAIO: You stop looking at the horizon. It lies. You look at your feet and the next step.
46 D TOMASZ: That's a lousy trick.
47 D NGAIO: It's the only one.
48 D LUPE: Can I try the canteen again?
49 D NGAIO: No.
50 D LUPE: Tomasz?
51 D TOMASZ: She said no, Lupe.
52 D LUPE: I'm just asking!
53 D NGAIO: Both of you. Sit. Rest. We have eight hours.
54 A ¶ They settle.
55 A Lupe lays her head on her knees.
56 A Tomasz studies his sling.
57 A Ngaio watches the white horizon, unmoving.
58 D NGAIO [CONT'D]: Eight hours. Then we walk.

### SCENE s02227 | INT. CANDLELIT SALON - 1790S PARIS - NIGHT
Detected names (may be incomplete or contain aliases): JOSEPHINE LAURENT, CALLOWAY
* 1 A ¶ A narrow room of mirrors.
* 2 A One candelabrum.
* 3 A Shutters closed against the street.
4 A ¶ JOSEPHINE LAURENT, thirties, dressed in mourning black, stands at a writing desk.
5 A MR. CALLOWAY, fifties, an English banker in a travel coat, waits by the door, hat in hand.
6 A ¶ He clears his throat.
7 A She doesn't turn.
8 D CALLOWAY: Madame.
9 A ¶ She finishes sealing a letter.
10 A Presses the wax.
11 A Sets the signet down.
12 D JOSEPHINE: You are late.
13 D CALLOWAY: The barricades, Madame.
14 D JOSEPHINE: You are English. You could have walked through them.
15 A ¶ He permits himself a small smile.
16 A She turns at last, studies him.
17 D CALLOWAY: You have it?
18 A ¶ She slides open a drawer.
19 A Takes out a leather folio.
20 A Holds it against her chest.
21 D JOSEPHINE: First, my passage.
22 A ¶ He pulls a folded paper from his coat.
23 A She takes it, reads.
24 A Her shoulders loosen a fraction.
25 A Then she tightens again.
26 D JOSEPHINE [CONT'D]: This is for one.
27 D CALLOWAY: It is.
28 D JOSEPHINE: I have a daughter.
29 A ¶ He says nothing.
30 A His jaw works.
31 A She lifts the folio, as if to put it back in the drawer.
32 D CALLOWAY: Madame.
33 D JOSEPHINE: You said two.
34 D CALLOWAY: I said I would try.
35 A ¶ She closes the drawer on the folio.
36 A Turns her back.
37 A He crosses the room in three strides, grips her elbow, then thinks better of it and lets go.
38 D CALLOWAY [CONT'D]: Forgive me.
39 D JOSEPHINE (without turning): Get out.
40 A ¶ He doesn't move.
* 41 A Shouts rise in the street.
* 42 A A bell.
* 43 A Candles gutter.
44 A She flinches.
45 A He steps toward her and, this time, stops short, hat crushed in his hands.
46 D CALLOWAY: I will find a second passage.
47 D JOSEPHINE: When?
48 D CALLOWAY: Three days.
49 D JOSEPHINE: We do not have three days.
50 A ¶ He takes out his pocketbook.
51 A Counts notes onto the desk.
* 52 A A lot of them.
53 A She watches them stack.
54 D CALLOWAY: For the second ticket. Buy it from whoever you must.
55 A ¶ She looks at the money.
56 A At him.
57 A Slowly, she opens the drawer again and hands him the folio.
58 A ¶ He tucks it inside his coat.
59 A She pockets the notes.
60 A For a moment neither moves.
61 D CALLOWAY [CONT'D]: Thank you.
62 D JOSEPHINE: Do not thank me. Be quick.
63 A ¶ He bows, stiff.
64 A Goes to the door.
65 A Hesitates with a hand on the latch.
66 D CALLOWAY: She will be safe.
67 D JOSEPHINE: She will be if you are honest.
68 A ¶ He nods once and slips out.
69 A She blows out the candles, one by one, until only the glow of the street shows through the shutters.

### SCENE s02228 | INT. FLOODED PARISH CRYPT - NIGHT
Detected names (may be incomplete or contain aliases): DESSA OYELARAN, BARN, HOLLIS
* 1 A ¶ Knee-deep black water.
* 2 A Stone coffins break the surface like islands.
* 3 A A lantern bobs on a plank.
4 A ¶ DESSA OYELARAN, thirties, soaked, clutches a crowbar.
5 A Beside her, BARNABY "BARN" HOLLIS, forties, a church sexton, grips the lantern with a shaking hand.
6 D BARN: Dessa, don't move.
7 D DESSA: I'm not moving.
8 D BARN: Something touched my leg.
9 D DESSA: That's the plank.
10 D BARN: The plank is under my other leg.
* 11 A ¶ The water ripples.
12 A Both freeze.
13 A A pale hand rises from the nearest coffin lid, fingers spread, and lowers again.
14 D DESSA: Barn, run.
15 A ¶ They bolt.
* 16 A The lantern swings.
* 17 A The water erupts behind them.
18 A A tall, pale shape surges after, its mouth open.
19 A Dessa swings the crowbar and catches it across the jaw.
20 A Barn grabs her sleeve, drags her up the steps.
21 A They tumble through the iron door together and slam it.
* 22 A ¶ Silence.
* 23 A Water laps behind the door.
24 D BARN [CONT'D]: Dessa. That was the vicar.
25 D DESSA: Yes, Barn. I know.

### SCENE s02229 | INT. GLASSHOUSE CAFE - ORCHID CONSERVATORY - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): WREN ACHTERBERG, ANSELM DUPREE, OKAFOR, BAO, ROSALIND
* 1 A ¶ Mist pools under the glass roof.
* 2 A Hanging orchids drip.
* 3 A A small iron table sits between a fig tree and a fogged window, laid for tea that has long gone cold.
4 A ¶ WREN ACHTERBERG, thirties, a botanist with ink on her fingers, sits with her coat still buttoned, as though she means to leave.
5 A Across from her, ANSELM DUPREE, late thirties, his tie loosened, turns a teaspoon over and over, as if it might yield an answer.
6 A ¶ Behind them, the staff: MRS. OKAFOR, sixties, upright, in a green apron, polishes the same cup she has been polishing for a minute.
7 A BAO, twenty, a waiter with an unsure grip on a tray, hovers near the fig tree and pretends to adjust a label.
8 D ANSELM: I brought the seeds back.
9 D WREN: I know. You said in your letter.
10 D ANSELM: Four hundred of them. From the Andes.
11 D WREN: That's a lot of seeds.
12 D ANSELM: It's a lot of months.
13 A ¶ She looks at the spoon in his fingers.
14 A He sets it down.
15 D ANSELM [CONT'D]: I should have written more.
16 D WREN: You wrote enough.
17 D ANSELM: Wren.
18 D WREN: I'm tired, Anselm. I've spent two years learning to be fine.
19 A ¶ Mrs. Okafor sets down the cup.
20 A Bao shifts the tray from one hand to the other.
21 D MRS. OKAFOR (softly, to Bao): More hot water.
22 D BAO: They haven't touched the first.
23 D MRS. OKAFOR: Then more hot water, Bao.
24 A ¶ Bao nods and flees toward the kitchen.
* 25 A A door swings open on the far side of the conservatory.
26 A ¶ A girl of nine steps in, ROSALIND, her coat buttoned wrong, a muddy satchel against her hip.
27 A She stands under the dripping orchids and looks only at Anselm.
28 D ROSALIND: Papa?
29 A ¶ Wren's hand goes still on the table.
30 A Anselm rises, the chair scraping the tile.
31 D ANSELM: Rosalind. You were meant to wait with Aunt Hester.
32 D ROSALIND: She fell asleep. I came by myself. I know the way.
33 A ¶ Wren looks at the child.
34 A At the buttons.
35 A At Anselm.
36 A Something in her face eases and breaks at once.
37 D WREN (quietly): You didn't say you had a daughter.
38 D ANSELM: I was afraid to.
39 A ¶ Rosalind crosses to the table and studies Wren with grave attention.
40 D ROSALIND: Are you the lady with the plants?
41 D WREN: I suppose I am.
42 D ROSALIND: Papa said you know all their names.
43 A ¶ Wren reaches out and, slowly, fixes the girl's top button.
44 A Her fingers are not quite steady.
45 D WREN: Not all. But I could teach you some.
46 A ¶ Mrs. Okafor, from across the room, sets the cup down at last and folds her cloth.
47 A Bao returns with a copper pot, sees the table, and stops where he is, and does not speak.

### SCENE s02230 | INT. WINE CELLAR BENEATH A CASINO - NIGHT
Detected names (may be incomplete or contain aliases): TEO, FERRIS, LEV, NADIA, WOMAN IN GREEN, IMANI, KESSLER
* 1 A ¶ Brick arches.
* 2 A Oak racks.
* 3 A A security camera in a corner, its red light dead.
4 A ¶ TEO crouches at a steel vault door with a thermal lance.
5 A FERRIS stands lookout at the stairs.
6 A LEV unrolls a canvas bag.
7 A NADIA reads a tablet.
8 A ¶ A WOMAN IN GREEN, thirties, silk dress, heels in her hand, comes down the stairs.
9 A She is not part of the crew.
10 A Everyone sees it.
11 A ¶ He draws a pistol.
12 A She raises her free hand.
13 D WOMAN IN GREEN: Don't. I'm the one who killed the camera.
14 A ¶ Nadia shrugs at Teo.
15 A He keeps working.
16 D FERRIS: Who sent you?
17 D WOMAN IN GREEN: Nobody. I work upstairs.
18 D NADIA: Upstairs as in--
19 D WOMAN IN GREEN: Cage cashier. Eleven years.
20 A ¶ He stops unrolling the bag and studies her.
21 D LEV: Why help us?
22 D WOMAN IN GREEN: Because the owner is walking down these stairs in four minutes.
23 A ¶ Ferris's jaw tightens.
24 A He lowers the pistol.
25 D NADIA: Name.
26 D WOMAN IN GREEN: Does it matter?
27 D NADIA: It does to me.
28 A ¶ She sets her shoes on a barrel.
29 D IMANI: Imani.
30 A ¶ Nadia nods once.
* 31 A Teo's lance sputters and dies.
32 A He sits back.
33 D TEO: Door's open.
* 34 A ¶ The vault swings out.
* 35 A Inside, stacked bills.
36 A Lev starts loading.
37 A Ferris backs toward the stairs, listening.
38 D IMANI: You have three minutes.
39 D FERRIS (quiet): Faster.
40 A ¶ Lev doubles his pace.
41 A She drops the tablet and helps.
42 A Teo takes the door.
* 43 A Footsteps above.
* 44 A A cough.
* 45 A A chair scrapes.
46 D KESSLER [O.S.] (from the stairwell, old and wheezing): Imani? Is that you down there?
47 A ¶ She freezes.
48 A So does everyone.
49 D IMANI: Yes, Mr. Kessler. Counting the reserve.
50 D KESSLER [O.S.]: At this hour?
51 D IMANI: Audit.
52 A ¶ Ferris raises the pistol toward the stairs.
53 A She puts a hand on his wrist.
54 D IMANI [CONT'D] (whispering): No guns. He's old. He'll have a heart attack and then we all hang.
55 D FERRIS: What do you suggest?
56 D IMANI: I'll talk to him.
57 A ¶ She picks up her shoes, straightens her dress, and climbs.
58 A Behind her, the crew holds still.
59 A He listens as she greets the old man in a voice honey-smooth.
60 A ¶ Lev zips the bag.
61 A They trade a look.
62 A Ferris does not lower the gun.
63 D LEV (whispering): She'd better be good.
64 D TEO: She's very good.
* 65 A ¶ Above, a door closes.
* 66 A Muffled laughter, an old man's.
* 67 A Then nothing.
68 A ¶ Ferris exhales and waves the others toward the service tunnel.
69 A They go, the bag swinging, as footsteps fade overhead.

### SCENE s02231 | INT. HALVORSEN-BRAND INC. - OPEN-PLAN OFFICE, "SYNERGY POD" - DAY
Detected names (may be incomplete or contain aliases): WE ARE FAMILY, HALVORSEN, BRENDA, CHIP, DUTCH, GWEN, NEW HIRE, PRIYA
* 1 A ¶ Rows of beige desks.
* 2 A A foosball table nobody uses.
* 3 A A banner reads "WE ARE FAMILY (TERMS APPLY)."
4 A ¶ MR. HALVORSEN, fifties, in a vest and a tie with tiny fish, stands at a whiteboard.
5 A BRENDA, forties, his office manager, stands beside him with a laser pointer.
6 A CHIP, thirties, loud, and DUTCH, forties, soft-spoken, share a desk.
7 A GWEN, twenties, scribbles in a notebook.
8 A ¶ A NEW HIRE, twenties, a laptop bag on one shoulder, hovers by the door with a lanyard around her neck.
9 D MR. HALVORSEN: Team! Team! Please welcome our latest synergist.
* 10 A ¶ Scattered applause.
11 A Chip whoops.
12 D CHIP: Welcome to the family!
13 D BRENDA (under her breath): Terms apply.
14 D MR. HALVORSEN: And you are?
15 D NEW HIRE: Priya.
16 D MR. HALVORSEN: Priya! A name like a poem. Where do you want to sit?
17 D PRIYA: Wherever there's an outlet.
18 D CHIP: The outlets are communal, Priya.
19 D DUTCH: We're sharing three between thirty.
20 D PRIYA: How do you charge anything?
21 D DUTCH: We rotate. It builds trust.
22 D GWEN (without looking up): It builds bruises. Steve's still limping from Tuesday.
23 D MR. HALVORSEN: Gwen, we agreed on positivity.
24 D GWEN: I'm positive he's limping.
25 D BRENDA: Mr. Halvorsen, the onboarding packet?
26 D MR. HALVORSEN: Right. Priya, you'll receive a binder, a mug, and a mission statement.
27 D PRIYA: I'd rather have a desk.
28 D MR. HALVORSEN: The desk is earned.
29 D PRIYA: How?
30 D CHIP: Three quarters of exceeding metrics.
31 D PRIYA: What are the metrics?
32 D DUTCH: Nobody knows.
33 D BRENDA (sharp): Dutch.
34 D DUTCH: Sorry. They're confidential.
35 D PRIYA: To whom?
36 D MR. HALVORSEN: To me, mostly.
37 A ¶ Priya looks around.
38 A The team looks at the floor.
* 39 A The foosball table creaks as no one touches it.
40 D PRIYA: So I show up for two years, to a job I can't define, for a desk I can't have.
41 D MR. HALVORSEN: It's a journey.
42 D CHIP: A beautiful journey.
43 D BRENDA: She doesn't have to say yes, Chip.
44 D GWEN (still writing): She does. They all do.
45 A ¶ Priya laughs, short, appalled.
46 A She slides the laptop bag off her shoulder and sets it on the foosball table.
47 D PRIYA: Fine. I'll stand.
48 D MR. HALVORSEN: Wonderful!
49 D DUTCH: You can use my outlet, Priya. Mondays.
50 D PRIYA: Thank you, Dutch.
51 D CHIP: Look at that! Already a family.
52 D BRENDA: Terms apply, Chip.
53 A ¶ Mr. Halvorsen beams at the whiteboard, where somebody has drawn a lopsided tree.
54 D MR. HALVORSEN: Now, who wants to hear about our Q3 vision?
55 A ¶ Nobody does.
56 A Everyone nods anyway.

### SCENE s02232 | INT. ROLLER RINK, ABANDONED - AFTERNOON
Detected names (may be incomplete or contain aliases): DESMOND, MIRELA, UNCLE FERENC
* 1 A ¶ A cavernous room.
* 2 A Wood floor warped into waves.
* 3 A Mirror ball cracked and dull.
* 4 A Light slants through boarded windows.
5 A ¶ DESMOND, sixteen, lanky, wearing his late father's denim jacket two sizes too big, sits on a bench lacing up scuffed skates.
6 A MIRELA, seventeen, shaved head, a silver ring in her eyebrow, leans against the rail holding a boombox.
7 A UNCLE FERENC, sixties, wiry, a flat cap, a cigarette unlit between his lips, stands at the far end by the dead organ.
* 8 A ¶ Dust motes drift.
9 D MIRELA: You said you could skate.
10 D DESMOND: I said I used to.
11 A ¶ He stands.
12 A Wobbles.
13 A She watches, arms crossed.
14 D MIRELA: Used to when?
15 D DESMOND: Six. With my dad.
16 A ¶ She doesn't answer.
17 A He pushes off.
18 A His legs go sideways.
19 A He catches the rail, laughs, ashamed.
20 D UNCLE FERENC (calling out): Knees, boy! Bend your knees!
21 D DESMOND: I'm bending them!
22 D UNCLE FERENC: You're bending your back!
23 A ¶ Mirela sets the boombox down.
24 A Presses play.
* 25 A A scratchy waltz fills the rink.
26 A Desmond stops mid-wobble.
27 D DESMOND: What is this?
28 D MIRELA: Ferenc's. He ran this rink in the eighties.
29 D UNCLE FERENC: Nineteen eighty-one to ninety-four. Best waltz night in Budapest-on-the-Hudson.
30 D DESMOND: That's not a place.
31 D UNCLE FERENC: It was a state of mind.
32 A ¶ Ferenc takes off his cap.
33 A Straightens.
34 A For a second, he looks twenty years younger.
35 A He steps onto the floor in his street shoes and glides, light, impossible, a hand tucked behind his back.
36 A ¶ Desmond stares.
37 A Mirela's mouth twitches toward a smile.
38 D MIRELA: Told you.
39 D DESMOND: Your uncle can dance.
40 D MIRELA: He can do a lot of things.
41 D UNCLE FERENC (passing them): Watch my feet, boy. Not my face.
42 A ¶ Desmond watches.
43 A Tries.
44 A Pushes, glides, a foot slips, but he doesn't fall.
45 A He grins.
46 A Mirela whoops, the first honest sound she's made.
47 D MIRELA: Again!
48 A ¶ He pushes off a second time.
* 49 A Better.
50 A Ferenc spins back around, arms out, steadying him without touching.
51 D UNCLE FERENC: That's it. Don't think. Your father didn't think.
52 D DESMOND: You knew my dad?
53 D UNCLE FERENC: Every Friday for six years. Worst skater I ever saw.
54 D DESMOND (small smile): He'd have said the same about me.
55 D UNCLE FERENC: He'd have lied. He loved watching you.
56 A ¶ Desmond looks down.
57 A Mirela cranks the volume.
* 58 A The waltz swells in the empty hall.
59 D MIRELA: Okay, Des. Stop crying and skate.
60 D DESMOND: I'm not crying.
61 D MIRELA: You're a little bit crying.
62 A ¶ He wipes his face with a sleeve.
63 A Pushes forward.
64 A Ferenc takes his left, Mirela comes onto the floor and takes his right.
65 A The three of them make a slow, crooked circle under the dead mirror ball.

### SCENE s02233 | EXT. SCHOOL BUS STOP - BACK OF A DRIVE-IN THEATER - NIGHT
Detected names (may be incomplete or contain aliases): ZUZU, HOBART, LINDIWE, PABLO, MARGUERITE
* 1 A ¶ A cracked screen looms behind them.
* 2 A Moths circle a lone streetlight.
3 A ¶ ZUZU, fifteen, grips a stolen bottle of cider.
4 A HOBART, fifteen, holds a flashlight.
5 A LINDIWE, sixteen, perches on a car hood.
6 A PABLO, fourteen, hugs his knees.
7 A MARGUERITE, sixteen, in a prom dress, shivers.
8 D ZUZU: Hobart, put the light out.
9 D HOBART: Marguerite's cold.
10 D MARGUERITE: I'm fine. Lindiwe, give me your jacket.
11 D LINDIWE: Pablo, share yours.
12 D PABLO: It's a hoodie. It's too small.
13 D ZUZU: Everybody shut up. Headlights.
* 14 A ¶ A car passes on the road.
* 15 A Slows.
* 16 A Speeds up.
17 A They breathe.
18 D PABLO (whispering): Was it my dad?
19 D LINDIWE: No, Pablo. Your dad drives a Buick.
20 A ¶ Marguerite starts laughing.
21 A Then Zuzu.
22 A Then all of them, helplessly, until Hobart drops the flashlight and it rolls under the car.

### SCENE s02234 | EXT. SALOON ROOF - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF AMOS TEAGUE, EZEKIEL, TWO-FINGER MAGGIE, CHEN WEI, RAFAEL, HOLLIS
* 1 A ¶ Heat.
* 2 A Dust.
* 3 A A rain barrel on a flat tin roof.
4 A ¶ SHERIFF AMOS TEAGUE crouches behind a chimney, rifle ready.
5 A EZEKIEL, teenager, deputy, hugs the roofline.
6 A TWO-FINGER MAGGIE, fifties, a bartender, pulls a shotgun from her apron.
7 A CHEN WEI, thirties, a railway cook, grips a cleaver.
8 A RAFAEL, forties, a horse trader, holds a pistol.
9 A HOLLIS, sixty, the town drunk, flops on his back, a bottle on his chest.
* 10 A ¶ Hooves below.
11 A A gang enters Main Street.
12 D TEAGUE: Hold fire.
13 D EZEKIEL: They're coming.
14 D TEAGUE: I said hold.
15 D MAGGIE: They'll see us, Amos!
16 D CHEN WEI: They won't look up.
17 D RAFAEL: They always look up!
* 18 A ¶ Guns crack.
* 19 A Dust jumps.
20 A Hollis lifts the bottle, toasts the sky, and drinks.

### SCENE s02235 | INT. BOXING GYM, BASEMENT OF A BAKERY - NIGHT
Detected names (may be incomplete or contain aliases): YELENA, COACH THANDIWE, KIONA, SVEN
* 1 A ¶ Low ceiling.
* 2 A Flour dust drifts through the light of a single bulb.
* 3 A The ring is eight feet square, ropes tied with bakery twine.
* 4 A Heat from the ovens above rattles the pipes.
5 A ¶ YELENA, twenty-six, a welterweight with a taped nose, sits on her corner stool, chest heaving.
6 A COACH THANDIWE, fifty, built like a door, kneels in front of her with a water bottle.
7 A Across the ring, KIONA, twenty-four, the challenger, shakes out her gloves.
8 A SVEN, sixty, the referee, in a flour-white shirt, checks his watch.
9 D THANDIWE: Look at me. She's dropping her right hand.
10 D YELENA: I see it.
11 D THANDIWE: Do you? She's tired and she thinks you are too.
12 D YELENA: She's right.
13 D THANDIWE: She's wrong. Breathe.
14 A ¶ Yelena breathes.
15 A Thandiwe squeezes water onto her mouthpiece.
16 D SVEN: Ladies. Time.
17 A ¶ Thandiwe stands.
18 A Yelena rises.
19 A Across the ring, Kiona waits, bouncing on her toes.
20 D THANDIWE: Last round. She comes in, you cut left. She backs up, you let her.
* 21 A ¶ The bell, a dented cake pan struck with a spoon, rings.

### SCENE s02236 | INT. OBSERVATORY DOME - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MORTIMER GALE, AURELIO BANERJEE, CONSTABLE PIKE
* 1 A ¶ A great brass telescope points at a slit of stars.
* 2 A A circular stair winds to a gallery.
* 3 A On the floor, chalk outlines a body that has been moved.
4 A ¶ INSPECTOR MORTIMER GALE, fifties, a heavy coat, a notebook, circles the chalk slowly.
5 A DR. AURELIO BANERJEE, forties, the observatory's director, in shirtsleeves, stands by the telescope with his hands clasped.
6 D GALE: The night assistant, Mr. Pell. Found here at six.
7 D BANERJEE: I arrived at six-fifteen.
8 D GALE: Did he work alone?
9 D BANERJEE: Mostly. He liked the quiet.
10 D GALE: He also liked your office. The lock was forced.
11 A ¶ Banerjee doesn't flinch.
12 D BANERJEE: He had a habit of borrowing my star charts.
13 D GALE (writing): Borrowing. He took them home?
14 D BANERJEE: He took them to his sister's.
15 D GALE: In another city.
16 D BANERJEE: He was a collector.
17 A ¶ Gale stops circling.
18 A He taps the notebook.
19 D GALE: Dr. Banerjee, a man doesn't lock himself in a dome with a telescope and fall down a staircase.
20 D BANERJEE: He was clumsy.
21 D GALE: He was a retired gymnast.
* 22 A ¶ A beat.
23 A Banerjee turns to the telescope.
24 A Adjusts a brass dial that doesn't need adjusting.
25 D BANERJEE: Then he was careless.
26 D GALE: Or pushed.
27 D BANERJEE: By whom? There is no one here but me.
* 28 A ¶ The dome door at the bottom of the stair swings open.
* 29 A Footsteps.
* 30 A A flashlight sweeps the floor.
31 A ¶ CONSTABLE PIKE, twenties, rain on his helmet, hurries up.
32 A He holds a sealed envelope.
33 D PIKE: Inspector. This came from the lab.
34 A ¶ Gale takes it.
35 A Opens it.
36 A Reads.
37 A Banerjee watches him read.
38 D GALE: Fingerprints on the brass rail. Two sets.
39 D BANERJEE: Naturally. Mine, and Pell's.
40 D GALE: One is Pell's.
41 D BANERJEE: And the other?
42 A ¶ Gale looks up, his face unreadable.
43 D GALE: It's not yours.
44 A ¶ Banerjee blinks.
45 A He grips the telescope.
46 D BANERJEE: That's impossible.
47 D PIKE: Inspector, there's more. The second set matches a man missing from Lisbon.
48 D GALE (to Banerjee): Who else has a key to this dome?
49 D BANERJEE: Only the board. And Pell.
50 D GALE: Then he let someone in.
51 D BANERJEE: Why would he do that at midnight?
52 D GALE (sharp): That's what I'd like to know.
53 A ¶ Banerjee crosses to the stair.
54 A Pike steps aside.
55 A Banerjee slows at the first step, looks at the chalk, looks back at Gale.
56 D BANERJEE: He was afraid of someone.
57 D GALE: You knew?
58 D BANERJEE: Last week, he asked me for a new lock.
59 D GALE: And you refused.
60 D BANERJEE: The budget--
61 D GALE (exploding): The budget! A man is dead, Doctor! A man you let sit alone in the dark with a stranger's key!
* 62 A ¶ The telescope creaks.
63 A Pike backs a step.
64 A Banerjee, white, grips the rail.
65 D BANERJEE: I did not know.
66 D GALE: Next time, Doctor, ask.
67 A ¶ He closes the notebook with a snap.
68 A Pike holds the door.
69 A Gale walks out, his boots echoing on the iron stair.

### SCENE s02237 | INT. SAFE HOUSE KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): ODETTE MARSH
* 1 A ¶ A narrow room.
* 2 A Blinds drawn.
* 3 A A table, a laptop, a half-eaten sandwich going stale.
* 4 A The refrigerator hums loud.
5 A ¶ ODETTE MARSH, forties, grey at the temples, wears a hooded sweatshirt over a good blouse.
6 A A cut on her cheek, dried.
7 A She checks the window slats, then the door deadbolt, then the window slats again.
8 A ¶ She sits.
9 A Types.
10 A Stops.
* 11 A ¶ On the laptop, a voice memo icon.
12 A She clicks it.
13 D ODETTE [V.O.] (her own voice, recorded, steady): If you're hearing this, I didn't make it to Lisbon. The files are in the drive under my mother's maiden name.
14 A ¶ Odette winces at the sound of herself.
15 A Scrubs her face with both hands.
16 D ODETTE [V.O., CONT'D]: Don't trust anyone from the ministry. Not even Paulo.
17 A ¶ She mutes it.
18 A Stares at the screen.
19 D ODETTE (to herself): Paulo.
* 20 A ¶ A car passes outside.
21 A She goes still.
* 22 A Headlights sweep the blinds, slats of light across her face.
* 23 A The car continues.
24 A She exhales.
25 D ODETTE [CONT'D]: Okay. Okay.
26 A ¶ She unmutes the memo.
27 D ODETTE [V.O.]: There is a second drive. Under the sink. Behind the pipe.
28 A ¶ She looks at the sink.
29 A At the cabinet below it.
30 A Rises.
31 A Opens it.
32 A Reaches behind the pipe.
33 A ¶ Her hand closes on something.
34 A She pulls out a small black drive wrapped in plastic.
* 35 A ¶ Outside, a second car door closes.
* 36 A Not passing.
* 37 A Parked.
38 A ¶ She doesn't move.
* 39 A The refrigerator cuts off.
* 40 A The room is silent.
* 41 A ¶ Footsteps on gravel.
* 42 A Slow.
* 43 A Two sets.
44 D ODETTE [V.O.] (from the laptop, urgent): If you hear footsteps, don't run. Don't turn on any light.
45 A ¶ Odette kills the laptop screen.
* 46 A Darkness.
47 A She backs against the wall, drive clutched against her chest.
* 48 A ¶ The doorknob turns.
* 49 A Locked.
* 50 A A pause.
* 51 A The knob turns again.
52 A ¶ She holds her breath.

### SCENE s02238 | EXT. LIFEBOAT ON OPEN SEA - DAY
Detected names (may be incomplete or contain aliases): RUTH, GUSTAVO, ANNELIESE, DWAYNE
* 1 A ¶ A steel-grey sea under a flat white sky.
* 2 A The boat is a sealed orange cabin with a hatch left open.
3 A Four survivors sit shoulder to shoulder on the benches.
4 A ¶ RUTH, sixties, a retired purser, wears a stained uniform jacket and holds the emergency kit in her lap.
5 A GUSTAVO, thirties, a deckhand, has a gash across one palm wrapped in a sock.
6 A ANNELIESE, fifties, a passenger in a torn evening dress, rocks a little, eyes closed.
7 A DWAYNE, twenties, the youngest, stares at the hatch, jaw clenched.
8 A ¶ Nobody has spoken for a long time.
9 D RUTH: All right. Listen up, everybody. Rations. One cracker each at noon, one at dusk. Water twice a day. I'll mark the bottle.
10 D GUSTAVO: Who made you captain?
11 D RUTH: I'm the one holding the kit.
12 D DWAYNE (muttering): Doesn't make it fair.
13 D RUTH: Say it louder, young man.
14 D DWAYNE: I said nothing.
15 D ANNELIESE (eyes still closed): Please don't fight. It makes the boat feel smaller.
16 D GUSTAVO: The boat is small.
17 D ANNELIESE: I know it is.
18 D RUTH (to Gustavo): Show me the hand.
19 A ¶ He holds it out.
20 A She unwraps the sock, inspects the cut, wrinkles her nose.
21 D RUTH [CONT'D]: Clean it with salt water. Then wrap it again.
22 D GUSTAVO: Salt will sting.
23 D RUTH: It will.
24 A ¶ She hands him the bandage roll.
25 A He takes it and does as told, hissing.
26 D DWAYNE (to himself): Three days. They said three days.
27 D GUSTAVO: Who said?
28 D DWAYNE: The radio, before it went dead. Three days till a ship.
29 D RUTH: Then we have two more.
30 D DWAYNE: If they're coming.
31 D ANNELIESE: They are coming. I dreamed it.
32 D DWAYNE: Oh, great. A dream.
33 D RUTH: Dwayne.
34 D DWAYNE: Sorry. Sorry.
35 A ¶ Ruth opens the kit and counts crackers into four small piles.
36 A She hands them out.
37 A Gustavo eats his in one bite.
38 A Anneliese holds hers in her palm without tasting.
39 A Dwayne breaks his in half, saves one half in his pocket.
40 D GUSTAVO: Smart.
41 D DWAYNE: Not smart. Scared.
42 D RUTH: Same thing, out here.
* 43 A ¶ The sea slaps the hull.
* 44 A The boat lifts and settles.
45 D ANNELIESE (opening her eyes): Does anyone know a song?
46 A ¶ Nobody answers.
47 A Then Gustavo, quietly, hums three notes.
48 A Dwayne picks it up.
49 A Ruth, to her own surprise, joins in.
50 A They hum it, thin and cracked, over the empty water.

### SCENE s02239 | INT. MIRROR VAULT OF THE DROWNED KING - NIGHT
Detected names (may be incomplete or contain aliases): SORREL, BRIGID
* 1 A ¶ A cavern of black glass.
* 2 A Ten thousand mirrors cover walls, floor, ceiling.
* 3 A Torchlight multiplies into a bonfire of stars.
* 4 A Every reflection moves a half-second late.
5 A ¶ SORREL, thirties, a thief in a hooded cloak, creeps along a narrow ledge of obsidian.
6 A She clutches a leather satchel.
7 A She stops.
8 A Her reflection stops, then.
9 D SORREL (muttering): Don't look. Don't look.
10 A ¶ She looks.
11 A The reflections grin.
12 D SORREL [CONT'D] (to the vault): I'm only here for the crown! You can keep the rest!
* 13 A ¶ Silence.
* 14 A A single mirror cracks, a thin white line.
15 D SORREL [CONT'D] (to herself): Brilliant. Wake the whole place.
16 A ¶ She steps off the ledge onto a dais.
* 17 A A crown of black pearl rests on a pillow of bone.
18 A She reaches for it.
19 D BRIGID [O.S.]: Don't.
20 A ¶ Sorrel spins.
21 A A figure steps out of a mirror, not around it, out of it, as a swimmer climbs from a pool.
22 A ¶ BRIGID, forties, tall, in a silver surcoat, a long sword in one hand.
23 A Her face is the same as Sorrel's, older, scarred across the brow.
24 D SORREL: Who are you?
25 D BRIGID: You. After you take it.
26 A ¶ They stare at each other.
* 27 A Torches gutter.
28 D SORREL (to the vault): Is she real?
29 D BRIGID: Don't bother. The vault doesn't answer.
30 D SORREL (muttering): That's the first honest thing I've heard in a week.
31 A ¶ Brigid raises the sword.
32 A Sorrel pulls a short knife.
33 A They circle the dais, each step mirrored a thousand times.
34 D BRIGID: Put the knife down.
35 D SORREL: Put the sword down.
36 D BRIGID: I won't.
37 D SORREL: Then neither will I.
38 A ¶ They lunge together.
* 39 A Steel rings.
40 A Sorrel ducks, rolls under Brigid's blade.
41 A Brigid whirls and kicks the knife from her grip.
* 42 A It skitters across the glass.
43 A Both lunge for it.
44 A Both reach it.
45 A Both freeze, hands on the hilt.
46 D BRIGID: Let go.
47 D SORREL: You let go.
48 D BRIGID (quiet): I wore this knife the night I took the crown. It cost me a sister.
49 D SORREL: I don't have a sister.
50 D BRIGID: You will.
51 A ¶ Sorrel's grip loosens.
52 A Brigid's too.
* 53 A The knife lies between them.
54 D SORREL (to the whole vault): Someone tell me what's happening!
* 55 A ¶ The mirrors all go dark, one after another, like candles.
* 56 A Only two torches remain.
57 A In their light the women stand on the dais, panting.
58 D BRIGID: It's the king's last trick. It shows you what you'll become.
59 D SORREL (muttering): Wonderful. A warning with a sword.
60 D BRIGID: Leave the crown. Walk out.
61 D SORREL: And you?
62 D BRIGID: I'll vanish. Like I always do.
63 A ¶ Sorrel looks at the crown.
64 A At Brigid.
65 A At the dark glass.
66 D SORREL (to herself): Fine.
67 A ¶ She steps back from the dais.
68 A Slings her satchel over her shoulder.
69 A Brigid lowers the sword.
70 D BRIGID: Thank you.
71 D SORREL: Don't thank me. I want a better offer next time.
72 A ¶ Brigid smiles, sad, and steps backward into a mirror.
73 A It swallows her.
* 74 A The crown stays on its bone pillow.
75 A ¶ Sorrel exits along the ledge.
76 A At the cavern's mouth she stops, glances back once.
77 A Her reflection nods.

### SCENE s02240 | INT. FAMILY KITCHEN - FLOOR ABOVE A LAUNDROMAT - EVENING
Detected names (may be incomplete or contain aliases): INES, BOYD, LITTLE TUAN, SERAPHINA, GIDEON
* 1 A ¶ A small table.
* 2 A A pot of boiled dumplings.
* 3 A A cracked ceiling fan.
* 4 A Rain on the window.
5 A ¶ INES, forties, stands at the stove.
6 A Her son BOYD, twelve, slumps at the table with his phone.
7 A LITTLE TUAN, six, kneels on a chair, drawing a dog.
8 D BOYD: Why does Aunt Seraphina always call during dinner?
9 D INES: Because she knows I'll answer.
* 10 A ¶ The phone on the counter rings.
11 A Ines wipes her hands, answers, sets it on speaker.
12 D SERAPHINA [V.O.] (tinny): Ines? Is that you? Are the children eating?
13 D INES: We're all here, Seraphina.
14 D SERAPHINA [V.O.]: Good. Boyd, are you wearing the scarf I knitted?
15 D BOYD: It's June, Aunt Sera.
16 D SERAPHINA [V.O.]: Scarves are for every month.
17 D TUAN: Aunt Sera, I drew a dog.
18 D SERAPHINA [V.O.]: Does the dog have a scarf?
19 D TUAN: He does now.
20 A ¶ He scribbles one in red crayon.
* 21 A The front door downstairs bangs.
22 A ¶ GIDEON, fifties, wet to the skin, an umbrella turned inside out, trudges into the kitchen.
23 A Ines stiffens.
24 A Boyd lowers his phone.
25 D GIDEON: Sorry I'm late. The bus broke down.
26 D INES: You said you'd be home Friday.
27 D GIDEON: It's Friday.
28 D INES: It's Sunday, Gideon.
* 29 A ¶ A silence.
* 30 A Seraphina's voice trickles from the phone.
31 D SERAPHINA [V.O.]: Gideon? Is that Gideon? Put him on!
32 A ¶ Nobody moves.
33 A Tuan holds up the dog.
34 D TUAN: Papa, look.

### SCENE s02241 | INT. FUNERAL PARLOR - BACK ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): LEOPOLD VANCE, HESTER, WOMAN, ADAEZE
* 1 A ¶ A narrow room behind the chapel, lined with folding chairs and a coffee urn.
* 2 A Sun through frosted glass makes the floor look wet.
* 3 A Chrysanthemums crowd a card table.
* 4 A Through the wall comes the muffled sound of a hymn.
5 A ¶ LEOPOLD VANCE, sixties, in a black suit that fits him like borrowed armor, pours coffee into two paper cups with great care.
6 A His sister HESTER, early sixties, in a navy dress, sits very straight, hands folded over her purse.
7 A ¶ Neither of them looks at the woman standing in the doorway.
8 A ¶ A WOMAN, forties, in a plain gray coat, damp at the shoulders.
9 A She holds a small wrapped box with both hands, as if it might spill.
10 D WOMAN: Excuse me. I'm sorry. I didn't know where to go.
11 D LEOPOLD: The service is in the chapel.
12 D WOMAN: I know. I stood at the back. Then I left.
13 D HESTER: You should have stayed.
14 D WOMAN: I didn't think I was welcome.
15 A ¶ Leopold sets a cup in front of Hester and holds the other out toward the woman.
16 D LEOPOLD: Coffee.
17 A ¶ She takes it.
18 A Drinks.
19 A Her hands tremble just slightly.
20 D WOMAN: Thank you.
21 D HESTER: You were his friend?
22 D WOMAN: For nineteen years.
23 D LEOPOLD: Nineteen. He never mentioned you.
24 D WOMAN: No. He wouldn't have.
25 D HESTER: Why not?
26 A ¶ The woman looks at the box.
27 A At the two of them.
28 A At the hymn leaking through the wall.
29 D WOMAN: My name is Adaeze. Adaeze Nwosu. He used to bring me flowers on Thursdays. Chrysanthemums.
30 A ¶ Leopold glances at the card table.
31 A At the flowers.
32 A His hand tightens around the urn spout.
33 D LEOPOLD: Those are his favorites.
34 D ADAEZE: I know. He told me.
35 D HESTER: Leo.
36 D LEOPOLD: It's all right, Hester.
37 D HESTER: It is not all right. Who is this woman?
38 D ADAEZE: I'm not here to take anything. I brought him something.
39 A ¶ She places the box on the table.
40 A Hester doesn't touch it.
41 A Leopold does, slowly, and peels back the paper.
* 42 A Inside, a small clay bowl, hand-glazed, a crack mended in gold.
43 D LEOPOLD: You made this.
44 D ADAEZE: I'm a potter. He came to my studio the day his wife died. He sat for hours. I didn't know his name until the second week.
45 D HESTER: Our brother was married to Lena for forty years.
46 D ADAEZE: Yes. And she died in March. And he came to me in April.
47 A ¶ Leopold lowers himself into a folding chair, the bowl in both hands.
48 D LEOPOLD: He was lonely.
49 D HESTER: He had us.
50 D ADAEZE: He said that too. He said you were kind and you never asked him anything.
51 A ¶ Hester opens her mouth to answer and doesn't.
* 52 A Outside, the hymn ends.
* 53 A A pause, then the rustle of a congregation rising.
54 D LEOPOLD (softly): Will you sit with us for the burial, Adaeze?
55 D ADAEZE: If you'll have me.
56 D LEOPOLD: We will.
57 A ¶ Hester stares at the bowl.
58 A At the gold line through the clay.
59 A Then she pulls out a handkerchief from her purse and, without a word, offers it to Adaeze.

### SCENE s02242 | INT. DERELICT TERRAFORMING STATION - AIRLOCK CORRIDOR - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ORRIN VASK, HALCYON, UNKNOWN CREW MEMBER, PAVLINA
* 1 A ¶ Pale emergency lights.
* 2 A Condensation beads on the walls.
* 3 A A bulkhead door at one end stamped SECTOR 9 in peeling yellow.
4 A ¶ CAPTAIN ORRIN VASK, forties, steady, in a rust-colored flight suit, leads.
5 A Behind him, a hooded figure in an environment suit, face hidden behind a dark visor, walks with a slight limp.
* 6 A ¶ A speaker in the ceiling crackles.
7 D HALCYON [V.O.]: Captain Vask. Atmospheric integrity at sixty percent. Two crew members aboard.
8 D ORRIN: Two?
9 D HALCYON [V.O.]: Yourself, and one unregistered.
10 D ORRIN (turning): Who are you?
11 A ¶ The figure stops.
12 A Reaches up.
13 A Unlocks the helmet.
14 A Lifts it away.
15 A A woman, thirties, ash-blond, pale.
16 D UNKNOWN CREW MEMBER: My name doesn't matter. You needed an engineer.
17 D ORRIN: I needed Chief Dahl.
18 D UNKNOWN CREW MEMBER: Dahl is in cryo, three decks down. She sent me.
19 D HALCYON [V.O.]: Verification pending.
20 D ORRIN: Halcyon, scan her.
21 D HALCYON [V.O.]: Scan complete. Pavlina Rusk. Engineer, second class. Dismissed from the colony in the year eighty-one.
22 D PAVLINA: Dismissed for telling the truth.
23 D ORRIN: About what?
24 D PAVLINA: About the reactor. It was never safe.
25 A ¶ They stand in the humming corridor.
* 26 A The lights flicker.
27 D ORRIN: Then why come back?
28 D PAVLINA: Because it's going to blow in four hours, and I'm the only one who knows how to stop it.
29 D HALCYON [V.O.]: Calculating. Probability of that claim being true: seventy-three percent.
30 D PAVLINA: Rounded up, that's enough.
31 D ORRIN: Can we trust her?
32 D HALCYON [V.O.]: Trust is not a computable quantity, Captain.
33 D ORRIN: Thanks for nothing.
34 A ¶ Pavlina almost smiles.
35 A She walks to the bulkhead, thumbs the keypad.
* 36 A It beeps red.
37 D PAVLINA: Override code?
38 D ORRIN: Nine-two-seven.
39 D PAVLINA: Nine-two-seven.
40 D ORRIN: You knew it already.
41 D PAVLINA: Everyone in Sector 9 knew it. That's why it's a bad code.
* 42 A ¶ The door slides open.
* 43 A Beyond: a vast chamber with a pulsing blue core.
* 44 A Heat on their faces.
45 D HALCYON [V.O.]: Four hours, thirty-eight minutes.
46 D ORRIN: Four hours is plenty.
47 D PAVLINA: For a good engineer.
48 A ¶ She steps through.
49 A Orrin follows.

### SCENE s02243 | INT. ROOFTOP AVIARY, HOTEL - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE RAVI SANDHU, LORNA FITCH, ASHWORTH, BETTINA
* 1 A ¶ Wire cages.
* 2 A Cooing.
* 3 A A dead parrot on the floor in a puddle of seed.
* 4 A Gray light.
5 A ¶ DETECTIVE RAVI SANDHU, forties, rumpled trench, kneels by the body.
6 A LORNA FITCH, fifties, the hotel's head of security, stands with a clipboard.
7 A MR. ASHWORTH, sixties, the owner, wrings his hands in the corner.
8 A BETTINA, twenty, a chambermaid, clutches a mop.
9 D SANDHU: Who found it?
10 D BETTINA: I did, sir. At five.
11 D SANDHU: Door locked?
12 D LORNA: Always. Keys: me, Mr. Ashworth, the bird handler.
13 D ASHWORTH: He's on holiday.
14 D SANDHU: Convenient.
15 A ¶ Sandhu turns the parrot over.
* 16 A A tiny tag around its leg reads Percival.
17 A He freezes.
18 D SANDHU [CONT'D]: Everyone out.
19 A ¶ They scatter, Bettina first, Ashworth tripping on his own cane, Lorna last, throwing a look back as the door swings shut.

### SCENE s02244 | INT. COUNTY HOSPITAL - TRAUMA BAY 2 - NIGHT
Detected names (may be incomplete or contain aliases): XIMENA FERREIRA, NURSE GLORIA, ORDERLY, TOBIAS
* 1 A ¶ White light, steel trays, the smell of antiseptic over blood.
* 2 A A monitor chirps.
* 3 A A man lies on the table under a sheet, chest open, a ventilator breathing for him.
4 A ¶ DR. XIMENA FERREIRA, forties, scrubs soaked at the collar, hands buried in the incision, her gray eyes fixed on a point nobody else can see.
5 A Across the table, NURSE GLORIA, fifties, steady, passes instruments with the unhurried economy of someone who has done it ten thousand times.
6 A ¶ An ORDERLY, twenties, tall, pressed against the wall near the door, holds a clipboard he has no reason to hold.
7 D XIMENA: Suction.
8 A ¶ Gloria obliges.
* 9 A The sound is wet and fast.
10 D XIMENA [CONT'D]: Pressure?
11 D GLORIA: Eighty over forty. Dropping.
12 D XIMENA (muttering): Come on. Come on.
13 A ¶ She reaches deeper.
* 14 A The monitor skips.
15 A The ORDERLY shifts, the clipboard rustles.
16 A Ximena doesn't look up.
17 D XIMENA [CONT'D]: Whoever is breathing back there, stop.
18 D ORDERLY: Sorry, Doctor.
19 D XIMENA: Who are you?
20 D ORDERLY: Transport. They said you needed hands.
21 D XIMENA: I need hands that know what to do.
22 D ORDERLY: I'm a med student. Third year. Tobias.
23 A ¶ Gloria doesn't turn.
24 A Ximena exhales through her nose.
25 D XIMENA: Tobias, scrub in. Now. Basin by the door.
26 D TOBIAS: Yes, Doctor.
27 A ¶ He moves.
28 A Scrubs, hands shaking.
* 29 A The water runs.
30 D GLORIA (to the room): Everybody, quiet. She's going in for the clamp.
* 31 A ¶ Silence.
32 A Ximena closes her fingers around something.
33 D XIMENA: Got it.
* 34 A ¶ The monitor chirps once, then twice, then a steadier rhythm.
35 D GLORIA: Pressure's coming up. Ninety.
36 D XIMENA: Hundred, Gloria. Say it with me.
37 D GLORIA: Hundred.
38 A ¶ Tobias, gloved now, edges to the table.
39 A Ximena nods at the retractor.
40 D XIMENA: Hold that. Don't let go no matter what I say.
41 D TOBIAS: What if I faint?
42 D XIMENA (without humor): Then faint standing up.
* 43 A ¶ The monitor holds a quiet, even tone.
44 A Tobias grips the retractor, white-knuckled, and does not let go.
45 D XIMENA [CONT'D] (muttering, almost a prayer): Hold, hold, hold.

### SCENE s02245 | INT. FAMILY DINING ROOM - SUNDAY
Detected names (may be incomplete or contain aliases): GRANDPA WILF, KATARZYNA, SIONE, PEACHES, BO
* 1 A ¶ A long table.
* 2 A Plates of roast.
* 3 A A cuckoo clock.
* 4 A Gravy steams.
5 A ¶ GRANDPA WILF, eighty, at the head.
6 A KATARZYNA, forties, carves.
7 A SIONE, forties, pours wine.
8 A The twins, PEACHES and BO, seven, kick each other under the table.
9 D PEACHES: Bo took my potato!
10 D BO: You took mine first!
11 D SIONE: Both of you, hands where I can see them.
12 D KATARZYNA (to the room): Eat, everybody. It's getting cold.
13 D WILF (muttering): Everything's cold in this house.
14 D KATARZYNA: I heard that, Wilf.
15 D WILF: Good.
16 D SIONE: Peaches, give Bo the potato.
17 D PEACHES: No!
18 D BO: Mom!
19 D KATARZYNA: Stop. Both of you.
20 A ¶ They stop.
* 21 A Silence.
* 22 A The clock cuckoos twice.
23 D WILF: Well. Anybody going to tell the children?
24 A ¶ KATARZYNA and SIONE look at each other.
25 D SIONE: Wilf.
26 D WILF: It's Sunday. They should know.
27 D BO: Know what?
28 D KATARZYNA (gently): Grandpa's moving in next month.
29 D PEACHES: Forever?
30 D WILF: Till they carry me out.
31 A ¶ Peaches considers this with great gravity, then slides her potato across the table to Bo.

### SCENE s02246 | INT. JURY DELIBERATION ROOM - DAY
Detected names (may be incomplete or contain aliases): COUNSEL OYELARAN, CLERK MAVIS, JUROR 7, DELACROIX
* 1 A ¶ A bare room, a long table, a window onto a brick wall.
* 2 A Water pitcher, paper cups, a stack of exhibit binders.
3 A ¶ COUNSEL OYELARAN, forties, a defense attorney in a charcoal suit, waits with a briefcase beside the table.
4 A CLERK MAVIS, sixty, a stout woman with reading glasses on a chain, sets down a tray of sandwiches.
5 D CLERK MAVIS: Counselor, the court says twenty minutes. No more.
6 D OYELARAN: Thank you, Mavis.
7 D CLERK MAVIS: Judge's orders. The juror wants to ask a question and the judge wants counsel present.
8 D OYELARAN: Which juror?
9 D CLERK MAVIS: Number seven. He's been quiet all week.
10 D OYELARAN: Quiet ones worry me.
* 11 A ¶ A knock.
12 A Mavis crosses, opens it.
13 A A JUROR enters, sixties, in a corduroy blazer, hat in hand.
14 A He hesitates at the head of the table.
15 D JUROR 7: May I sit?
16 D OYELARAN: Please.
17 A ¶ He sits.
18 A Sets his hat on the table.
19 A Smooths the brim.
20 D JUROR 7: I don't want to cause trouble.
21 D OYELARAN: Then ask your question.
22 D JUROR 7: The man on trial. Did he really have no alibi?
23 D OYELARAN: That's a matter for the jury, sir.
24 D JUROR 7: I know. But I think I saw him that night.
25 A ¶ Mavis's pen stops.
26 A Oyelaran sets his briefcase down very slowly.
27 D OYELARAN: Saw him where?
28 D JUROR 7: At the diner on Fifth. Ten-fifteen. Eating pie.
29 D OYELARAN: You're certain?
30 D JUROR 7: Blueberry. He argued with the waitress about the whipped cream.
31 A ¶ Oyelaran and Mavis exchange a look.
* 32 A The room is very quiet.
33 D CLERK MAVIS: Sir, you can't share outside evidence with the jury.
34 D JUROR 7: I haven't. I haven't told a soul.
35 D OYELARAN: I need to bring the judge. Please don't speak to anyone.
36 D JUROR 7: My name is Delacroix. Henri Delacroix. If it matters.
37 D OYELARAN: It matters, Mr. Delacroix.
38 A ¶ Delacroix nods, picks up his hat, turns it in his hands.
39 D DELACROIX: I thought the truth would be simpler.
40 D OYELARAN: It never is.
41 A ¶ Mavis opens the door and steps into the corridor.
42 A Oyelaran follows.
43 D OYELARAN [CONT'D] (low, to Mavis): Get Judge Hartnell. Now.
44 D CLERK MAVIS: Yes, Counselor.
45 A ¶ She leaves at a trot.
46 A Oyelaran shuts the door.
47 A Delacroix sits alone at the long table, his hat in his lap.

### SCENE s02247 | INT. FARMHOUSE KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): OTTILIE, RASMUS
* 1 A ¶ A wood stove, a kerosene lamp, a table scarred by decades of use.
* 2 A Snow ticks at the window.
3 A ¶ OTTILIE, sixty, in a wool cardigan, stirs a pot.
4 A Her son RASMUS, thirty-five, a duffel bag still on his shoulder, stands in the doorway with snow on his boots.
5 D RASMUS: Mama.
6 D OTTILIE: You didn't write.
7 D RASMUS: I wrote, Mama. Three times.
8 D OTTILIE: Not one letter came.
9 D RASMUS: Then the post is broken.
10 A ¶ She keeps stirring.
11 A He steps in, sets the bag down.
12 D OTTILIE: Wash your hands. There's soup.
13 D RASMUS: I'm not hungry.
14 D OTTILIE: You're thin.
15 D RASMUS: I'm the same as I was.
16 D OTTILIE: You were never this thin, Rasmus.
17 A ¶ He sits.
18 A She ladles soup into a bowl, sets it before him, and sits across the table.
19 A Neither touches a spoon.
20 D RASMUS: I sold the boat.
21 D OTTILIE: I know.
22 D RASMUS: Who told you?
23 D OTTILIE: Hennie at the church. Her husband bought the nets.
24 D RASMUS: Mama, I had to.
25 D OTTILIE: Your father built that boat.
26 D RASMUS: And it was sinking us, Mama. Debts. Three years of debts.
27 D OTTILIE: You could have asked.
28 D RASMUS: Asked who? You? With what?
29 D OTTILIE (rising): With a little respect, Rasmus!
30 D RASMUS: I'm trying, Mama!
31 D OTTILIE: You sold your father's boat and you come home thin and you don't write!
32 D RASMUS: I wrote!
33 A ¶ She strikes the table with the flat of her hand.
* 34 A The lamp jumps.
* 35 A Silence, heavy and total.
36 D RASMUS [CONT'D] (quietly): I wrote, Mama. I wrote every week. I think someone has been keeping them from you.
37 D OTTILIE: Who?
38 D RASMUS: Who collects the post?
39 A ¶ Ottilie goes pale.
40 A She turns to the dresser and opens a drawer.
* 41 A In it, a bundle of envelopes tied with twine.
42 A ¶ She holds them a long moment.
43 A Then she places them on the table between them.
44 D OTTILIE: I could not read them. My eyes. I was ashamed.
45 D RASMUS: Oh, Mama.
46 A ¶ He reaches across and covers her hand with his.
* 47 A The soup steams between them, ignored.

### SCENE s02248 | INT. COURTHOUSE CONFERENCE ROOM - DAY
Detected names (may be incomplete or contain aliases): PHOEBE LINDQVIST, KARIM HADDAD, WALT OSTROWSKI
* 1 A ¶ A windowless room, laminate table, fluorescent hum.
* 2 A A pitcher of water sweats beside two paper cups.
* 3 A On the wall, a faded print of a ship in a storm.
4 A ¶ PHOEBE LINDQVIST, thirties, a public defender with a blunt haircut and a rumpled blazer, arranges folders in neat rows.
5 A Her eyes are tired but sharp.
6 A ¶ Across from her sits KARIM HADDAD, twenty-eight, in a county-issue orange jumpsuit, wrists cuffed to a ring in the table.
7 A He's thin, bearded, with a scar through his left eyebrow and hands that don't stop moving.
8 A ¶ Standing by the door, WALT OSTROWSKI, fifties, a bailiff with a broad belly and a kind, tired face, watches the clock.
9 D PHOEBE: The offer expires at noon.
10 D KARIM: What is it?
11 D PHOEBE: Eight years. You serve five.
12 D KARIM: For what I didn't do.
13 D PHOEBE: For what they can prove you did.
14 D KARIM (quiet): I was at my mother's.
15 D PHOEBE: Who can say that besides you?
16 D KARIM: She can.
17 D PHOEBE: She's in a coma, Karim.
18 A ¶ Karim looks at his hands.
19 A Phoebe waits.
20 D WALT (gently, from the door): Mr. Haddad, she's right about the clock.
21 D KARIM: I know, Walt.
22 D WALT: Take the deal. You'll be out for your mother's birthday.
23 D KARIM: She won't have one if she's--
24 A ¶ He doesn't finish.
25 A Phoebe slides a legal pad toward him.
26 D PHOEBE: Write down everything you remember about the night of the ninth. Every detail.
27 D KARIM: I've told it ten times.
28 D PHOEBE: Tell it to the paper.
29 A ¶ He takes the pen.
30 A Writes.
31 A Stops.
32 A Writes.
33 A Phoebe watches the lines grow, her face unreadable.
34 A Walt checks the clock again.
35 A ¶ Karim pushes the pad back.
36 A Phoebe reads.
37 A Her brow lifts at one line.
38 D PHOEBE [CONT'D]: The neighbor's dog.
39 D KARIM: It barked at eleven. I remember because I was changing her IV.
40 D PHOEBE: That's not in the police report.
41 D KARIM: Nobody asked about the dog.
42 D PHOEBE (rising): Walt, I need the judge.
43 D WALT: She's at lunch.
44 D PHOEBE: Then I need a sandwich and the judge.
45 A ¶ Walt laughs, short, and heads for the door.

### SCENE s02249 | INT. NEWSROOM - OVERNIGHT - EMPTY
Detected names (may be incomplete or contain aliases): LUCINDA VALE
* 1 A ¶ Desks in rows.
* 2 A Dead monitors.
* 3 A A cleaning cart abandoned mid-aisle.
* 4 A An answering machine blinks on a corner desk, red.
* 5 A ¶ A stairwell door opens.
6 A ¶ LUCINDA VALE, forties, a long raincoat, a messenger bag, a flash drive between her fingers, slips in.
7 A She locks the door behind her.
8 A Crosses the room on tiptoe.
9 A ¶ She stops at the corner desk.
10 A Presses the machine's button.
11 D LUCINDA [V.O.] (her recorded voice, tired): Message one. Lucy, it's you. If you're hearing this, you're back at the paper. Don't go home. They'll be at the apartment.
12 A ¶ Lucinda sits.
13 A Her hand covers her mouth.
14 D LUCINDA [V.O., CONT'D]: The story's real. Every document. But they know about the drive.
15 A ¶ She looks at the flash drive in her palm.
16 D LUCINDA (to herself): Of course they do.
17 D LUCINDA [V.O.]: Message two. Send it from the old terminal. The one with no network log.
18 D LUCINDA: Clever girl.
* 19 A ¶ The machine clicks off.
20 A ¶ She rises.
21 A Crosses to a dusty terminal beneath a stack of old directories, blows off the dust, turns it on.
* 22 A It groans awake.
23 A ¶ She plugs in the drive.
* 24 A A folder opens.
* 25 A Hundreds of files.
26 A She scrolls fast, eyes flicking.
27 D LUCINDA [CONT'D] (whispering): There you are.
28 A ¶ She selects a document and attaches it to an email.
29 A Her cursor hovers over SEND.
* 30 A Somewhere in the building, an elevator dings.
31 A She flinches, then steadies herself, and clicks.
* 32 A ¶ A progress bar crawls.
33 D LUCINDA [CONT'D]: Come on. Come on.
* 34 A ¶ The bar hits ninety.
* 35 A Ninety-five.
36 A She pulls the drive free as it completes.
* 37 A The terminal chimes, softly: SENT.
38 A ¶ Lucinda shuts her eyes, then pockets the drive, buttons her raincoat, and leaves the way she came.

### SCENE s02250 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): MORRIS, DELPHINE, IKE
* 1 A ¶ Rows of humming dryers.
* 2 A A flickering sign reads OPEN 24 HRS.
* 3 A A change machine with a hand-lettered OUT OF ORDER taped across its face.
4 A ¶ MORRIS, sixty, folds a stack of faded towels on a table with the slow thoroughness of a man with nowhere else to be, while DELPHINE, thirty, a nurse in scrubs, yanks a wet tangle of sheets from a washer and stuffs them into a dryer, and IKE, eighteen, headphones around his neck, sits cross-legged on a countertop watching his sneakers tumble inside the next machine over, thump, thump, thump, and every few seconds Morris glances at Delphine and Delphine glances at Ike and Ike glances at nothing.
5 D MORRIS: Busy night.
6 D DELPHINE: I just got off a double.
7 D MORRIS: Rough?
8 D DELPHINE: Quiet. Which is rough.
9 A ¶ Morris smooths a towel.
10 A Delphine feeds quarters into the dryer, one at a time, counting under her breath.
11 D IKE: Do you guys know if the machine eats dollar bills?
12 D MORRIS: It eats everything.
13 D IKE: It ate five bucks last week.
14 D DELPHINE: It has eaten my whole paycheck.
15 A ¶ Ike laughs, a short surprised bark.
16 A Morris chuckles.
17 A Delphine lets herself grin.
18 A They sit with the warm roar of the dryers between them.
19 D MORRIS: I come here because my apartment's quiet.
20 D DELPHINE: Mine too.
21 D IKE: Mine's loud.
22 D MORRIS: Then you're the lucky one.
23 D IKE: Doesn't feel lucky.
24 A ¶ Delphine slides the last quarter in.
* 25 A The dryer starts.
26 A She leans against it, closes her eyes.
27 D DELPHINE: Wake me when it's done.
28 D MORRIS: I'll fold your sheets.
29 D DELPHINE: You don't have to.
30 D MORRIS: I'm already here.

### SCENE s02251 | INT. COLONY SHIP "MARGINALIA" - BRIDGE - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN YUSRA, ENGINEER BOLT, SAKURA, PILOT MATEO, CADET NILS
* 1 A ¶ A dim, circular room.
* 2 A Banks of screens.
* 3 A One wall is a viewport onto a vast gas giant, its bands glowing amber.
4 A ¶ CAPTAIN YUSRA, fifties, a gray crop, in a worn command jacket, stands at the center console.
5 A ENGINEER BOLT, forties, grease up to her elbows, leans over a panel of exposed wiring.
6 A DR. SAKURA, thirties, the ship's physician, sits cross-legged on the deck with a medkit.
7 A PILOT MATEO, thirties, in the helm chair, scowls at a blinking display.
8 A CADET NILS, nineteen, at the comms station, still wearing a training badge.
* 9 A ¶ Alarm klaxons, soft and rhythmic.
10 D YUSRA: Report. All stations.
11 D BOLT: Fuel line's leaking. I can patch it, Captain, but not for long.
12 D MATEO: We're drifting toward the giant's gravity well. Eight hours.
13 D NILS: Captain, I'm getting a signal. It's not ours.
14 D YUSRA: Nils, put it through.
15 D NILS: It's encrypted.
16 D BOLT: Then decrypt it.
17 D NILS: I'm a cadet!
18 D SAKURA (quietly): Nils, breathe.
19 D MATEO: Yusra, if we burn the reserve we can slingshot. Maybe.
20 D YUSRA: Maybe is not a plan.
21 D BOLT: Maybe is all I've got.
22 D SAKURA: Captain, the passengers are asking for updates.
23 D YUSRA: Tell them we have a minor delay.
24 D SAKURA: They won't believe that.
25 D YUSRA: Then tell them a major one, with confidence.
26 D NILS: The signal is a voice. A woman's voice. She's saying coordinates.
27 D MATEO: Where?
28 D NILS: Sector twelve. Near the ring debris.
29 D BOLT: There's a station in sector twelve. Old. Abandoned.
30 D YUSRA: Is it abandoned?
31 D NILS: It's broadcasting.
32 D MATEO: Captain, it could be a trap.
33 D YUSRA: Everything's a trap. Plot a course.
34 D MATEO: Yes, ma'am.
35 D BOLT: That'll cost eighty percent of the reserve.
36 D YUSRA: Then we'd better get there the first time.
* 37 A ¶ The ship shudders.
* 38 A Lights flicker.
* 39 A The viewport shows the gas giant swelling, a wall of amber fire.
40 D SAKURA (rising): I'll tell the passengers the truth.
41 D YUSRA: Doctor.
42 D SAKURA: Captain.
43 D YUSRA: Tell them gently.
44 A ¶ Sakura nods and leaves.
* 45 A The bridge hums on.
46 A Mateo's hands move across the controls, steady now.
47 D MATEO: Course plotted.
48 D BOLT: Fuel line is holding. For now.
49 D NILS: Captain, the message changed. It's in plain text now.
50 D YUSRA: Read it.
51 D NILS: "Marginalia, welcome. We've been waiting."
* 52 A ¶ The bridge falls silent.
