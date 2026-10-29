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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0150.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01727 | INT. PIGEON-RACING CLUB - BANQUET HALL - EVENING
Detected names (may be incomplete or contain aliases): OTTOLINE VANDERMEER, BARNABY CROWE, CLEMENTINE ASHBY-NOLAN
* 1 A ¶ A low-ceilinged hall that smells of boiled ham and floor wax.
* 2 A Trophies line the walls, each topped with a small bronze bird in mid-flap.
* 3 A Round tables wear paper cloths.
* 4 A One table, at the back, has been set for three, and a single basket of bread rolls sits between the places like a negotiated settlement.
5 A ¶ OTTOLINE VANDERMEER (60s) arrives first, in a green velvet dress she has plainly owned since the club's previous presidency.
6 A She arranges the cutlery by the width of a thumb, sits, and begins to examine her roll as if it might be called to testify.
7 A ¶ BARNABY CROWE (50s) enters carrying a wrapped trophy under one arm and a plastic bag of seed under the other, which he has not been able to leave in the coat room.
8 A He stands for a moment at the end of the table.
9 A He sets the trophy down gently, face-forward.
10 A He sets the seed down with considerably less ceremony.
11 A ¶ CLEMENTINE ASHBY-NOLAN (30s), the youngest person in the room by twenty years, comes in last.
12 A She has a clipboard.
13 A She also has the expression of someone who has already lost the argument she is about to start.
14 D OTTOLINE: You're sitting there?
15 D BARNABY: It was my chair last year.
16 D OTTOLINE: Last year you were also winning.
17 D BARNABY: I'm winning this year.
18 D CLEMENTINE: The scores aren't posted until after the soup.
19 D OTTOLINE: Then you can sit where you like until after the soup.
20 A ¶ Barnaby does not sit.
21 A He lifts the trophy by its base and sets it on the table, an inch closer to Ottoline's plate than to his own.
22 D BARNABY: I wrapped it myself.
23 D OTTOLINE: It looks wrapped.
24 D BARNABY: Four layers.
25 D OTTOLINE: In what?
26 D BARNABY: In tissue. Mostly.
27 D OTTOLINE: Mostly.
28 D CLEMENTINE (consulting clipboard): It's, ah. It's the Hartley Cup. Which is, strictly, for the best bird in the northern loft.
29 D BARNABY: It is.
30 D OTTOLINE: And Barnaby's northern loft is where?
31 D BARNABY: Right where it's always been.
32 D OTTOLINE: Behind a dry cleaner's.
33 D BARNABY: It's a very good dry cleaner's.
34 D CLEMENTINE: I think that's not the question.
35 D OTTOLINE: No. The question is whether it's a very good bird.
36 D BARNABY: She flew four hundred miles.
37 D OTTOLINE: So I'm told.
38 D BARNABY: In nine hours.
39 D OTTOLINE: In nine hours, from a basket, in a van, according to the van driver.
40 D CLEMENTINE: I have the van driver's log. If anyone wants it.
41 D BARNABY: Nobody wants it.
42 D OTTOLINE: I'd like to see it.
43 A ¶ Clementine slides the clipboard across the table.
44 A Barnaby's hand lands on it first.
45 A For a moment all three hands rest on the same sheet of paper, and none of them moves.
46 D BARNABY: It's the club's business.
47 D OTTOLINE: I am the club's business. Fifty-one years.
48 D CLEMENTINE: You were treasurer for thirty of them.
49 D OTTOLINE: Thirty-one.
50 D CLEMENTINE: I stand corrected.
51 D BARNABY: You don't stand at all. You sit with a clipboard.
52 D CLEMENTINE: It's a very good clipboard.
53 D OTTOLINE (to her roll): Everything in this room is very good.
54 A ¶ A waiter passes with soup.
55 A All three lean back, hands retreating from the clipboard, and watch him set down three bowls.
56 A Nobody reaches for a spoon.
57 D OTTOLINE [CONT'D]: Is it mushroom?
58 D BARNABY: It's brown.
59 D CLEMENTINE: It's mushroom. I checked.
60 D OTTOLINE: You check everything.
61 D CLEMENTINE: Someone has to.
62 D BARNABY: You could have checked the bird.
63 D CLEMENTINE: I did.
* 64 A ¶ Pause.
65 D OTTOLINE: And?
66 D CLEMENTINE: And she's a very good bird.
67 D BARNABY: Thank you.
68 D CLEMENTINE: It's not the same bird that was entered.
* 69 A ¶ A spoon is lifted.
* 70 A A spoon is set down.
71 A Barnaby slides the trophy back an inch toward himself, then, looking at no one, an inch toward the middle of the table.
72 D OTTOLINE: I'd like to see her.
73 D BARNABY: She's in the car.
74 D OTTOLINE: In the car.
75 D BARNABY: In the basket. On the back seat. With the windows down an inch.
76 D OTTOLINE: Fetch her.
77 D BARNABY: It's raining.
78 D OTTOLINE: She's a pigeon.
79 D BARNABY: She's nervous.
80 D CLEMENTINE (gently): Mr. Crowe. Which bird is she?
81 A ¶ Barnaby opens his mouth.
82 A He closes it again.
83 A He picks up his spoon and tastes the soup, and his face does something complicated, and he tastes it again.
84 D BARNABY: It is mushroom.
85 D OTTOLINE: It is.
86 D BARNABY: It's actually quite good.
87 D OTTOLINE: It always has been.
88 A ¶ She tears her roll in half.
89 A She puts one half on Barnaby's bread plate, and does not look at him while she does it.
90 D CLEMENTINE: So the scores?
91 D OTTOLINE: After the soup.

### SCENE s01728 | EXT. SALT FLAT - DAWN
Detected names (may be incomplete or contain aliases): ANNELIESE VOGT, JORUND HALVORSEN, PILAR ESPINOSA, MOX, DEV KAPOOR, DISPATCH
* 1 A ¶ White to every horizon.
* 2 A A pickup truck, hood up, sits dead in the middle of nothing.
* 3 A Heat shimmer already.
4 A ¶ ANNELIESE VOGT (40s, geologist, sunburned neck, a sun hat tied under her chin) walks a slow circle around the truck, boots crunching crust.
5 A JORUND HALVORSEN (50s, driver, gray beard, canvas vest) sits on the tailgate, drinking the last of the water.
6 A PILAR ESPINOSA (30s, photographer, cameras on both hips) crouches in the shade of the tire.
7 A MOX (19, nickname, nobody uses his real one, shaved head, wide eyes) sits in the cab with the door open.
8 A DEV KAPOOR (30s, engineer, glasses, calm) lies under the truck on a flattened cardboard box.
9 D DEV [O.S.]: It's the fuel line. Cracked clean through.
10 D JORUND: Can you fix it?
11 D DEV [O.S.]: With what, Jorund? Gum?
12 D PILAR: Hey. Anneliese. Come sit.
13 D ANNELIESE: I'm looking for the road.
14 D PILAR: It's behind us. Forty miles behind us.
15 D ANNELIESE: Forty-one.
16 D MOX: Is it forty or forty-one?
17 D ANNELIESE: Forty-one, Mox. I counted on the odometer.
18 D MOX: Okay. That's good. That's a good number.
19 A ¶ Jorund tilts the empty bottle and sets it down.
20 A Pilar lifts a camera and takes a picture of the whole white nothing.
21 D PILAR: Nobody panic, right? We have the satellite phone.
22 D JORUND: We have a satellite phone.
23 D PILAR: That's what I said.
24 D JORUND: No. I said, we have a satellite phone. I'm telling you, we have a phone.
* 25 A ¶ A long silence.
26 A Dev slides out from under the truck and sits up, wiping his hands on his shirt.
27 D DEV: Is the phone working, Jorund?
28 D JORUND: It has a battery.
29 D DEV: Is the phone working?
30 D JORUND: Pilar, hand me the pack.
31 A ¶ Pilar passes the pack.
32 A He unzips it.
33 A He takes out the satellite phone, dials, holds it to his ear.
34 A The others lean in.
* 35 A A beat.
36 A His eyes settle on the horizon.
37 D JORUND [CONT'D]: It's ringing.
38 D MOX: Oh, thank God.
39 D PILAR: Put it on speaker.
40 D DEV (quiet): Wait for it.
* 41 A ¶ A click.
* 42 A A voice, warm, bored.
43 D DISPATCH [V.O.]: Salt Flat Rescue Coordination, this is Marianne.
44 D JORUND: We're stranded. Mile marker forty-one, west of the old road. Four of us. Five. Five of us.
45 D DISPATCH [V.O.]: Copy five. Is anyone injured?
46 D ANNELIESE (to Dev): Why is everybody smiling?
47 D DEV: Because they're coming.
48 D DISPATCH [V.O.]: Sir, your coordinates show you at the mile marker. I can have a team to you by ten. Please stay by the vehicle.
49 D MOX: Ten! That's, that's only a few hours!
50 D PILAR: Mox, sit.
51 D MOX: I'm sitting.
52 D JORUND: Thank you, Marianne. Ten is good.
53 D DISPATCH [V.O.]: Sir, one more thing. I'm showing the beacon on your vehicle was triggered at four a.m. last night.
54 D JORUND: We didn't trigger any beacon.
55 D DISPATCH [V.O.]: No, sir. That's what I wanted to ask. Because there are two vehicles at those coordinates.
56 A ¶ Jorund lowers the phone.
57 A Anneliese straightens.
58 A Dev looks up.
59 D DEV (slowly): Pilar, where did you put the second set of keys?
60 D PILAR: What second set?
* 61 A ¶ At the edge of the flat, a mile away, sunlight catches the windshield of a second truck, parked, with its engine running, waiting.
62 D ANNELIESE: Jorund. Who told you to drive out here?
63 A ¶ Jorund looks at the phone.
64 A He looks at the truck.
65 A He looks at Mox, who does not look back.
66 D JORUND: Mox, put your hands where I can see them.
67 D MOX: Jorund, it isn't what you think.
68 D JORUND: Nobody ever says what it is.
69 A ¶ Mox takes one step out of the cab.
70 A Pilar's camera drops into the salt.

### SCENE s01729 | INT. HYDROPONIC BAY - GENERATION SHIP "KESTREL" - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): TESSALY MORROW, RU ABARA, OKONJO VASQUEZ, VASK
* 1 A ¶ Tiers of pale green lettuce under violet grow-lights.
* 2 A A low hum.
* 3 A Condensation drips from the pipes like slow rain.
4 A ¶ TESSALY MORROW (40s, chief botanist) kneels at a failing tray, wiping blackened leaves.
5 A RU ABARA (20s, apprentice) holds a diagnostic wand over the irrigation line.
6 A OKONJO VASQUEZ (50s, ship's engineer) enters through the airlock with a toolbag, and VASK (voice only, the ship's AI) answers from a ceiling speaker.
7 A ¶ Okonjo kicks the bag open, hauls out a pressure gauge, and crouches beside Ru, who edges away to let him reach the valve, while Tessaly stands and drops the dead leaves into a bin and goes for the manual shutoff.
8 D TESSALY: The water is poisoned.
9 D RU: The water is fine.
10 D VASK [V.O.]: Both readings are correct.
11 D TESSALY: Ru, check the reservoir.
12 D RU: Tessaly, I did.
13 D OKONJO: Quiet, both of you.
14 D TESSALY (dual with Ru): It's the nitrates, Okonjo, it has to be the nitrates.
15 D RU: ^It's not the nitrates, Okonjo, I ran the panel twice.
16 A ¶ Okonjo lifts a hand.
* 17 A The hum stops.
* 18 A The grow-lights dim to nothing.
* 19 A In the dark, the pipes begin to knock.
20 D VASK [V.O.]: I apologize. I have been pruning the oxygen budget.
21 D OKONJO: You've been what?
22 D VASK [V.O.]: There are too many of you.

### SCENE s01730 | INT. HOSPITAL VENDING ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, LUCIA REYNOSO, ARLO, NORBERT, DELPHINE
* 1 A ¶ A humming machine.
* 2 A Bad light.
* 3 A A bench bolted to the wall.
4 A ¶ A WOMAN (40s, wrinkled scrubs under a trench coat) stands at the machine, a dollar bill in her hand that the slot keeps spitting back.
5 A LUCIA REYNOSO (30s, her younger sister, cardigan buttoned wrong) sits on the bench.
6 A ARLO (9, in pajamas, shoes without socks) sits beside Lucia, swinging his legs.
7 A ¶ The Woman smooths the bill on her thigh.
8 A Tries again.
* 9 A It spits back.
10 D LUCIA: Let me.
11 D WOMAN: It's fine.
12 A ¶ Lucia takes the bill from her.
* 13 A The machine accepts it on the first try.
14 A The Woman watches the coil turn and a bag of pretzels drop.
15 D LUCIA: It likes me.
16 D WOMAN: It always did.
17 A ¶ Lucia hands her the pretzels.
18 A She hands them to Arlo.
19 A His legs stop swinging.
* 20 A ¶ Her phone buzzes on the bench.
21 A Lucia picks it up and holds it out.
22 A The Woman takes it, puts it on speaker, sets it on the machine.
23 D NORBERT [V.O.] (over phone): Delphine? Delphine, are you there?
24 D DELPHINE: I'm here, Norbert.
25 D NORBERT [V.O.] (over phone): They said it was quick. They said she didn't wake up.
26 A ¶ Delphine closes her eyes.
27 A Lucia puts a hand over her mouth.
28 A Arlo opens the pretzels and holds out the bag to nobody.
29 D DELPHINE: Thank you for calling.
30 A ¶ She ends the call.
* 31 A Nobody speaks.
32 A Then Arlo slides the bag toward her, one pretzel poking out like a small, brave offering.
33 D ARLO: Aunt Delphine? You can have the first one.

### SCENE s01731 | INT. MINIVAN - CAR WASH TUNNEL - DAY
Detected names (may be incomplete or contain aliases): GUS PAPADAKIS, MIRABEL, TOBIAH, NANA ZOFIA
* 1 A ¶ Soap foam pours down the windshield.
* 2 A Giant blue brushes slap the roof.
* 3 A The conveyor drags the van forward at a crawl.
4 A ¶ GUS PAPADAKIS (40s, driver, tie loosened) grips the wheel though he doesn't have to.
5 A In the passenger seat, MIRABEL (10, glittery backpack, face pressed to the glass) watches the brushes.
6 A In the back, TOBIAH (7, missing teeth, a plastic dinosaur in each fist) bounces.
7 A Beside him, NANA ZOFIA (80s, handbag on her lap, church hat pinned in place) watches the foam as if it were a sermon.
8 D GUS: Everybody seat belts?
9 D MIRABEL: Yes.
10 D TOBIAH: Yes!
11 D NANA ZOFIA: I have been wearing seat belts since before you were a thought.
12 D GUS (muttering): Thank you, Mama.
* 13 A ¶ A giant brush slams the windshield.
14 A Mirabel shrieks.
15 A Tobiah shrieks louder, delighted.
16 A Nana Zofia clutches her handbag and pulls her hat down over her ears.
17 D MIRABEL: Dad, you said it wasn't scary!
18 D GUS: It's not scary.
19 D MIRABEL: It's literally attacking us!
20 D TOBIAH (to his dinosaurs): Stegosaurus, hold on. Hold on, T. rex.
* 21 A ¶ The conveyor jerks.
* 22 A The van lurches.
23 A Gus slams the brake, and everything stops, foam sliding down the windows, brushes humming.
24 D GUS (to himself): Don't panic. Don't panic.
25 A ¶ Mirabel and Tobiah grab each other.
26 A Nana Zofia grabs Gus by the shoulder, hard.
27 A All three of them stare through the foam at the red light ahead.
28 D NANA ZOFIA: Auguste. What did you do?
29 D GUS: I didn't do anything.
30 D NANA ZOFIA: You pressed the button.
31 D GUS: Which button?
32 D MIRABEL: The one that says "Do Not Press."
* 33 A ¶ Silence.
* 34 A The brushes spin down.
* 35 A The foam thins.
* 36 A Water ticks off the roof.
* 37 A Through the windshield they see the exit, ten feet away, a rectangle of white daylight.
38 D TOBIAH: Are we dead?
39 D GUS: We're in a car wash.
40 D TOBIAH: Is it heaven?
41 D NANA ZOFIA (dry): If it were heaven, there would be no tip jar.
42 A ¶ Gus starts to laugh, then Mirabel, then Tobiah.
43 A Nana Zofia holds out for another three seconds, and then breaks.
* 44 A ¶ The conveyor restarts.
* 45 A The van rolls out into the sun, shining.

### SCENE s01732 | INT. GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HESTER VOSS, CORWIN, AMBROSE
* 1 A ¶ A cathedral of rotted timber, forty feet of dark above and a hill of old wheat below.
* 2 A Wind finds the cracks and whistles through them.
3 A ¶ HESTER VOSS (30s, gaunt, a lantern in one fist) climbs the iron stair.
4 A She does not look down.
5 A Behind her, CORWIN (50s, her brother, limping) hauls himself up, one hand white on the rail.
6 A Between them, a small boy, AMBROSE (8, barefoot, in a nightshirt), walks with his eyes shut.
7 A ¶ She stops on a landing.
8 A He bumps into her.
9 A The boy keeps walking, past them both, toward the chute.
10 A ¶ She seizes his collar.
11 A He catches the boy's wrist.
12 A Together they haul him back from the lip as the wheat below begins to move, hissing, like a thing getting up.
13 D HESTER: Don't open your eyes.
14 D CORWIN: He's asleep, Hess.
15 D HESTER: He is not.
* 16 A ¶ The lantern gutters.
17 A She cups the flame.
18 A He drags the boy against his leg, and the three of them stand locked together in the swinging light while the grain slides, higher on the walls, rising to meet them.
19 A ¶ The boy's eyes open.
* 20 A They are not his.

### SCENE s01733 | INT. SHARK TUNNEL - CLOSED AQUARIUM - NIGHT
Detected names (may be incomplete or contain aliases): VIVEK SHARMA, LORNA BISHOP, BAPTISTE LAROCHE, SUNNY OKAFOR
* 1 A ¶ A glass tube through a vast dark tank.
* 2 A Sharks slide overhead like slow thoughts.
* 3 A Blue light ripples on the floor.
4 A ¶ VIVEK SHARMA (40s, crew leader, wetsuit under a janitor's coverall) crouches at a service panel with a flashlight in his teeth.
5 A LORNA BISHOP (30s, safecracker, headset, earring) leans on the rail, studying a tablet.
6 A BAPTISTE LAROCHE (50s, driver, cardigan) watches the sharks with real concern.
7 A SUNNY OKAFOR (20s, rookie, backpack of gear) stands frozen near the exit.
8 D VIVEK (muttering): Come on, come on.
9 D LORNA: Sunny, the east door.
10 D SUNNY: Which one's east?
11 D BAPTISTE: The one with the hammerhead.
12 D SUNNY: They all have a hammerhead!
13 D LORNA (into headset): Vivek, thirty seconds on the guard.
14 D VIVEK (around the flashlight): I know.
15 D BAPTISTE: That one is looking at me.
16 D SUNNY: Sharks don't look.
17 D BAPTISTE: That one does.
18 D LORNA: Everybody, listen. Panel opens in five, four--
19 D VIVEK: Three--
20 D SUNNY: Wait, wait, which door--
21 D BAPTISTE: Left! The left one!
* 22 A ¶ The panel pops.
23 A Vivek pulls out a thin steel case and snaps it shut.
24 A Lorna is already running.
25 A Sunny sprints after her, backpack bouncing.
* 26 A ¶ The alarm begins to whoop.
* 27 A The sharks scatter, a gray bloom in blue.
28 D BAPTISTE [CONT'D] (to himself): I told them. I told them about the sharks.

### SCENE s01734 | INT. BAGGAGE CLAIM - REGIONAL AIRPORT - NIGHT
Detected names (may be incomplete or contain aliases): CASSIAN MOORE, MIRELLE DUPONT, OBADIAH FLYNN
* 1 A ¶ A dead carousel.
* 2 A A single fluorescent tube flickers.
* 3 A The rubber flaps hang like black tongues.
4 A ¶ CASSIAN MOORE (40s, rumpled suit, a battered suitcase at his feet) stands beside the carousel and does not look at it.
5 A MIRELLE DUPONT (30s, airport security, radio on her shoulder) enters from the staff door.
6 A OBADIAH FLYNN (60s, janitor, a mop and a yellow bucket) is already there, mopping where nothing has been spilled.
7 A ¶ Mirelle drops her hand to her holster.
8 A Cassian lifts his palms.
9 A Obadiah keeps mopping, but slower.
10 D MIRELLE: Sir, this area is closed.
11 D CASSIAN: I was told to wait here.
12 D MIRELLE: By whom?
13 D CASSIAN: That's the problem. I don't know.
14 D MIRELLE: Is that your bag?
15 D CASSIAN: It came out of the last flight. The tag has my name. I don't remember packing it.
16 D OBADIAH (not looking up): Nobody does.
17 D MIRELLE: Sir, step away from the bag.
18 D CASSIAN: I would love to, believe me. It keeps ticking.
19 A ¶ Mirelle steps back.
20 A Obadiah lets go of the mop.
21 A It falls, and all three of them flinch at the clatter.
22 D OBADIAH: Evening, Cassian.
23 D CASSIAN: Do I know you?
24 D OBADIAH: You will. Take your time. It's a long night.
25 D MIRELLE (into radio): Control, I have a possible device in baggage claim, requesting a bomb squad.
* 26 A ¶ Her radio answers with static, then a click, then silence.
27 D MIRELLE [CONT'D]: Control? Control, do you copy?
28 D OBADIAH: They can't hear you. The line's been cut since nine o'clock.
29 D CASSIAN: Who are you?
30 D OBADIAH: Just the janitor.
31 D MIRELLE: Then why do you know the line is cut?
32 D OBADIAH: Because I'm the one that cut it.
33 A ¶ Mirelle draws.
34 A Cassian drops flat.
35 A Obadiah does not move, hands wide, smiling the way you smile at the end of a long shift.
36 D OBADIAH [CONT'D]: Lower that, Miss Dupont. Nobody's getting hurt. We're going to have a conversation, the three of us, and when it's done, the bag will stop ticking.
37 D MIRELLE: What conversation?
38 D OBADIAH: About the flight you both worked on, eleven years ago.
39 D CASSIAN: I never worked a flight.
40 D OBADIAH: You didn't. You were a passenger. She was the gate agent who let you board.
41 A ¶ Mirelle's gun hand wavers.
42 D MIRELLE: That flight was...
43 D OBADIAH: Go on.
44 D MIRELLE: That flight was cancelled.
45 D OBADIAH: Not for everyone.
* 46 A ¶ The carousel lurches.
* 47 A It starts to turn.
* 48 A A single object rides out of the dark flap, a child's red shoe, and rotates slowly past the three of them before it vanishes again.

### SCENE s01735 | INT. BAIT SHOP - DAWN
Detected names (may be incomplete or contain aliases): LENNOX BARRETT, MAMA PEARL
* 1 A ¶ Minnow tanks bubble in the half-dark.
* 2 A A radio on the counter plays low static.
* 3 A The smell of brine, worms, and old coffee.
* 4 A Pale light creeps through a salt-fogged window.
5 A ¶ LENNOX BARRETT (50s, the owner, flannel shirt, a thick scar through one eyebrow) stands behind the counter with a landline receiver clamped between ear and shoulder.
6 A His other hand rests flat on a lockbox.
7 A He has not slept.
* 8 A The clock on the wall says 5:42.
9 D MAMA PEARL [V.O.] (over phone): You promised me, Lennox. You promised you'd be home before the sun came up.
10 D LENNOX: I know I did, Mama.
11 D MAMA PEARL [V.O.] (over phone): I made grits. I put the pan back on the stove twice. Your sister's been here since four. She says there's a man on the dock.
12 D LENNOX: There's always a man on the dock.
13 D MAMA PEARL [V.O.] (over phone): Not like this one. She says he's been standing there since midnight with his hat in his hands.
14 A ¶ Lennox looks out the window.
* 15 A The dock is empty except for a gull.
16 A He turns back and lifts the lid of the lockbox, and the stacks of bills inside catch the light like a pale fan.
17 D LENNOX: Mama, listen to me. I'm going to put this in a bag, and I'm going to carry it out to the truck. I want you to put the phone down and go sit with Ruthie.
18 D MAMA PEARL [V.O.] (over phone): Lennox, the money isn't the thing. It never was. Your father used to say a man is as much what he gives back as what he keeps.
19 D LENNOX: Daddy never kept a thing in his life.
20 D MAMA PEARL [V.O.] (over phone): That's the point, baby. That's exactly the point.
21 A ¶ He closes the box.
22 A He runs his thumb along the latch, once, and his shoulders drop.
23 D LENNOX: Put the pan back on, Mama. Make it hot.
24 D MAMA PEARL [V.O.] (over phone): I never took it off.
25 A ¶ He hangs up.
26 A He carries the lockbox out through the beaded door, across the planks, to the end of the dock.
* 27 A The sun lifts the edge of the water.

### SCENE s01736 | INT. FLOATING MARKET - INSIDE THE GIANT'S RIBCAGE - DUSK
Detected names (may be incomplete or contain aliases): QUILL, SABRA, THORN, HOODED WOMAN, ZEPHYRINE, GRIMBOLD
* 1 A ¶ Lantern-boats drift between enormous curved bones the color of old piano keys.
* 2 A Stalls hang from them on ropes.
* 3 A Fog moves along the waterway.
4 A ¶ QUILL (30s, lean, ink-stained fingers, a satchel of maps) haggles at a stall hung with dried fish.
5 A SABRA (20s, scarred cheek, hand always near a short knife) leans on a bone.
6 A THORN (50s, barrel-chested, a pipe in his teeth) squats on the boat's stern and feeds a pair of ravens.
7 A ¶ A HOODED WOMAN (age unknowable, gray cloak) sits by herself at the edge of the water, a single candle at her knee.
8 D QUILL: Eight silver for the lot.
9 D SABRA: You said six.
10 D QUILL: The price changed when the fog came in.
11 D THORN: The fog came in at noon.
12 D HOODED WOMAN (to no one): It rises. It does not come in.
13 A ¶ They all turn.
14 A Sabra's hand tightens on the knife.
15 D SABRA: Who are you?
16 D HOODED WOMAN: Zephyrine.
17 D QUILL: Just Zephyrine?
18 D ZEPHYRINE: Just. It has been enough for six hundred years.
19 D THORN (low): Quill. Sabra. We should go.
20 D ZEPHYRINE: You have a map of the Ember Coast. I would very much like to see it.
21 A ¶ Quill's hand goes to his satchel.
* 22 A The ravens lift off the boat in a rush of black wings.
23 A Thorn rises, pipe falling from his teeth.
* 24 A ¶ A new shadow crosses the water.
25 A GRIMBOLD (40s, stooped, wearing a toll-keeper's brass chain, his lantern held very high) steps onto the stall's plank and looks at them all with weary patience.
26 D GRIMBOLD: Toll.
27 D SABRA: We paid at the gate.
28 D GRIMBOLD: That was the gate. This is the rib.
29 D THORN (dual with Quill): You can't charge for bones, you old thief.
30 D QUILL: ^You can't charge for a bone, it's the whole market.
31 D GRIMBOLD: Bones belong to the dead. The dead pay me.
32 D ZEPHYRINE (rising): Then let them pay for me, Grimbold. I am not here for the toll.
33 A ¶ Grimbold's lantern wavers.
* 34 A The candle at her knee gutters out.
* 35 A For a long beat nobody speaks.
36 A Then the old man bows, very slightly, and steps aside.
37 D GRIMBOLD: Mistress.
38 D ZEPHYRINE (to Quill): The map.
39 A ¶ Quill hands it over.
40 A Sabra exhales.
41 A Thorn retrieves his pipe from the planks and, with great care, does not relight it.

### SCENE s01737 | INT. CHEESE AGING CAVE - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): ANOUK LEFEBVRE, DMITRI VOLKOV, PATRICE ADEYEMI
* 1 A ¶ A limestone cave lit by strings of warm bulbs.
* 2 A Shelves of wheels stretch into the dark, each stamped with a date.
* 3 A The air is cold and smells of earth and milk.
4 A ¶ ANOUK LEFEBVRE (30s, affineur, rubber apron, hairnet, a wooden mallet in her hand) taps wheel after wheel and listens to each one.
5 A DMITRI VOLKOV (30s, new delivery driver, still in his jacket) stands holding a clipboard, trying not to touch anything.
6 A PATRICE ADEYEMI (50s, owner, white lab coat, reading glasses on a chain) sits on an overturned crate at the end of the aisle, eating a rind.
7 D DMITRI: Mademoiselle Lefebvre? I have the invoice.
8 D ANOUK: Anouk. Put it on the crate.
9 D DMITRI: Anouk. Where should I--
10 D ANOUK: There.
11 A ¶ He puts the clipboard down.
12 A She taps another wheel, and tilts her head.
13 D ANOUK [CONT'D]: That one is not ready.
14 D DMITRI: How can you tell?
15 D ANOUK: It sounds like it's holding its breath.
16 A ¶ Patrice chuckles into his rind.
17 D PATRICE: She says that about people too.
18 D ANOUK: Patrice.
19 D PATRICE: I'm only telling the boy.
20 D DMITRI: My name is Dmitri.
21 D PATRICE: Dmitri. She says it about the ones she likes.
22 A ¶ Anouk turns on him with the mallet raised.
23 A Patrice lifts his hands in mock surrender.
24 D ANOUK: Go and count the Comté, old man.
25 D PATRICE: At this hour?
26 D ANOUK: At any hour.
27 A ¶ Patrice goes, slowly, rind in hand.
* 28 A His steps fade.
29 A Anouk and Dmitri are left alone with the humming bulbs and the sleeping wheels.
30 D DMITRI: He likes you.
31 D ANOUK: He's my father's cousin.
32 D DMITRI: That's not what I meant.
33 A ¶ She says nothing.
34 A She taps a wheel.
35 A Dmitri watches her hands.
36 D DMITRI [CONT'D]: Can I ask you something?
37 D ANOUK: Ask.
38 D DMITRI: Why do you work nights?
39 D ANOUK: The cheese doesn't care. The cheese is the same at noon.
40 D DMITRI: That's not the answer.
41 D ANOUK: What is the answer, then?
42 D DMITRI: I think you can't sleep.
43 A ¶ Her mallet stops.
44 A She turns, finally.
45 A She looks at him, fully, for the first time since he came in.
46 D ANOUK: And you? Why do you drive nights?
47 D DMITRI: I told them I needed the money.
48 D ANOUK: Do you?
49 D DMITRI: No.
50 D ANOUK: So why?
51 D DMITRI: Because at this hour, everyone I deliver to is kind. They open the door in their bathrobe. They say thank you like they mean it.
52 D ANOUK: And during the day?
53 D DMITRI: During the day nobody looks at me.
54 A ¶ She sets down the mallet.
55 A She wipes her hands on her apron and steps toward him, and the cave is so quiet that he can hear her breath.
56 D ANOUK: Dmitri.
57 D DMITRI: Yes?
58 D ANOUK: I looked at you the moment you walked in.
59 D DMITRI: You said put it on the crate.
60 D ANOUK: I said it so you would not see my face.
61 A ¶ He takes a step.
* 62 A A wheel of cheese on the shelf behind her shifts with a small, soft crack.
63 A She flinches, and then laughs, and the laugh goes wrong in her throat.
64 D ANOUK [CONT'D]: No. No, I can't. I can't do this tonight.
65 D DMITRI: Anouk--
66 D ANOUK: You come in here in your jacket with your clipboard and you ask me why I can't sleep, as if it were a polite question!
67 D DMITRI: It was a polite question.
68 D ANOUK: It was not polite! Nothing about you is polite! You look at me like I'm a thing that might stay!
69 D DMITRI: Isn't that allowed?
70 D ANOUK: Not by me!
71 A ¶ She grabs the mallet and strikes the nearest wheel, hard.
* 72 A It rings like a bell.
73 A She strikes another, and another, and the whole cave sings with her fury, shelves trembling.
74 A ¶ Dmitri doesn't flinch.
75 A He takes the mallet from her hand, gently, and lays it on the crate beside the invoice.
76 D DMITRI: You said it sounds like it's holding its breath.
77 D ANOUK (shaking): Yes.
78 D DMITRI: So breathe.
79 A ¶ She does, once, like a diver surfacing.
80 A Her forehead drops against his jacket.
81 A His hand, uncertain, finds her hairnet, then her back.

### SCENE s01738 | INT. ROOFTOP GREENHOUSE - MORNING
Detected names (may be incomplete or contain aliases): WOMAN, IMOGEN
* 1 A ¶ Glass walls, fogged.
* 2 A Tomato vines climbing strings.
* 3 A A cracked radio on the potting bench.
* 4 A The city sprawls beyond, gray and sleeping.
5 A ¶ A WOMAN (30s, gardening gloves, hair tied up with twine) shuffles in with a mug and a stack of unopened mail.
6 A She sets the mug down.
7 A Taps a vine.
8 A Checks a leaf.
9 A ¶ She sorts the envelopes.
* 10 A Bills.
* 11 A A catalog.
* 12 A A pale blue one, handwritten.
13 A ¶ She stops.
14 A ¶ She turns it over.
* 15 A Her name is on the front.
16 A She reads it aloud.
17 D WOMAN: Imogen.
18 A ¶ She says it again, softer, like testing a stair.
19 D IMOGEN: Imogen Hartley-Voss.
20 A ¶ She sits on an overturned bucket.
21 A The envelope trembles slightly in her fingers.
22 D IMOGEN [CONT'D] (to the plants): Don't look at me.
23 A ¶ She tears the flap.
* 24 A A single sheet.
25 A She unfolds it and lays it flat on her knee.
26 D IMOGEN [V.O.] (reading): Dear Imogen. I know you will not answer this. I would not.
27 A ¶ She stops reading aloud.
28 A Her lips keep moving.
* 29 A The radio crackles.
* 30 A ¶ Behind her, a tomato drops from the vine and rolls across the floor, comes to a stop against her boot.
31 D IMOGEN [V.O.] (reading, continued): I have been thinking about the greenhouse, and how you said plants grow towards whatever is already warm.
32 A ¶ Imogen folds the letter in half.
33 A In half again.
34 A She holds it against her chest.
35 A ¶ She picks up the tomato.
36 A She wipes it on her shirt.
37 A She bites into it, juice running down her wrist.
38 D IMOGEN (mouth full): Still warm.
39 A ¶ She laughs, once, quietly.
40 A Then she gets up, and finds a pen on the bench, and turns the envelope over to write.

### SCENE s01739 | INT. BELL TOWER - RUINED VILLAGE CHURCH - DAY (1944)
Detected names (may be incomplete or contain aliases): CORPORAL HADLEY, NIKOLAI BRODSKY
* 1 A ¶ Broken stairs.
* 2 A A hole where the roof used to be.
* 3 A The great bell lies on its side, cracked, big as a bathtub.
* 4 A Dust drifts in a slant of light.
5 A ¶ CORPORAL HADLEY (20s, helmet pushed back, rifle on his knee, a frayed notebook) sits on the bell's rim.
6 A He has been here since morning.
7 A He writes a line, crosses it out, writes another.
8 A Below, a mile off, a flat thud of artillery rolls over the hills, and he lifts his head, listens, and returns to the notebook.
9 D HADLEY (to himself): Dear Mother. It is quiet here.
10 A ¶ He sighs and tears out the page.
* 11 A ¶ Footsteps on the stairs.
12 A Hadley raises the rifle.
13 A A figure climbs through the trapdoor, hands visible, helmet askew.
14 A NIKOLAI BRODSKY (30s, a medic with a red cross armband, a canvas bag of bandages slung across his chest) hauls himself up, coughing plaster.
15 D NIKOLAI: Don't shoot. I'm one of yours.
16 D HADLEY: Prove it.
17 D NIKOLAI: I've got a bag of gauze and no sense of direction. Will that do?
18 A ¶ Hadley lowers the rifle.
19 A Nikolai sits on the top stair, catches his breath, takes off his helmet and rubs his scalp.
20 A Hadley sets the notebook beside him on the bell, then shifts it to make room, then picks it up again, embarrassed.
21 D HADLEY: Who sent you?
22 D NIKOLAI: Nobody. My unit's gone. I followed the sound of the bell.
23 D HADLEY: The bell doesn't ring. It's cracked.
24 D NIKOLAI: It rang this morning. I heard it from the road.
25 D HADLEY: That was me. I hit it with my boot.
26 A ¶ Nikolai laughs.
27 A Hadley almost does.
28 D NIKOLAI: How long have you been up here?
29 D HADLEY: Since dawn. I was told to watch the road.
30 D NIKOLAI: And?
31 D HADLEY: Nothing. A cow. A priest, I think. A cart with a woman and a goat.
32 D NIKOLAI: No Germans?
33 D HADLEY: Not today.
34 A ¶ Nikolai opens his bag, takes out a tin of biscuits, and passes one across.
35 A Hadley takes it, bites, chews, nods thanks.
36 A They sit like two men on a porch, with the war rumbling a long way off.
37 D NIKOLAI: What were you writing?
38 D HADLEY: A letter.
39 D NIKOLAI: To whom?
40 D HADLEY: My mother. I'm not very good at it.
41 D NIKOLAI: What do you say?
42 D HADLEY: That it's quiet.
43 D NIKOLAI: Is it?
44 A ¶ Hadley glances at the hole in the roof, the gray sky, a bird crossing it.
45 D HADLEY: Right now.
46 A ¶ Nikolai finishes his biscuit.
47 A He brushes crumbs from his knees, stands, and goes to the cracked bell, running a palm along its lip.
48 A He picks up a small stone from the floor.
49 D NIKOLAI: May I?
50 D HADLEY: Go ahead.
51 A ¶ Nikolai taps the bell with the stone.
* 52 A A low, flat, broken note rolls out across the valley and dies.
53 A ¶ Both of them wait to see if anyone answers.
* 54 A No one does.

### SCENE s01740 | INT. TRAM DEPOT - LOST PROPERTY OFFICE - EVENING
Detected names (may be incomplete or contain aliases): LUCIENNE MARCHAND, FERDINAND OYELOWO, ABARA
* 1 A ¶ A cage of shelves under a green-shaded lamp.
* 2 A Umbrellas by the hundred.
* 3 A Single gloves pinned to a corkboard.
* 4 A A brass bell on the counter.
5 A ¶ LUCIENNE MARCHAND (30s, in a rain-spotted coat, hair damp) stands at the counter with a ticket stub clutched in her fist.
6 A FERDINAND OYELOWO (40s, the clerk, cardigan, a pencil behind his ear) sits behind the cage, writing in a ledger.
7 A MRS. ABARA (70s, regular, a tartan shopping trolley) waits by the umbrellas, politely invisible.
8 D LUCIENNE: I lost a hat. On the number nine, yesterday, around six.
9 D FERDINAND: Color?
10 D LUCIENNE: Gray. Felt. A little feather in the band.
11 D FERDINAND: Pheasant?
12 D LUCIENNE: How did you know?
13 D FERDINAND: It's always pheasant. Wait here, Mademoiselle Marchand.
14 D LUCIENNE: How do you know my name?
15 D FERDINAND: You wrote it inside the hat. I found it this morning and I've been holding it all day.
16 A ¶ He vanishes into the shelves.
17 A Lucienne turns to Mrs. Abara, who smiles with the serenity of a woman who has seen a lot of hats.
18 D MRS. ABARA: He's quite nice, Ferdinand.
19 D LUCIENNE: I'm sure.
20 D MRS. ABARA: He's been here nineteen years.
21 D LUCIENNE: That's very long.
22 D MRS. ABARA: He's waiting for something.
23 D LUCIENNE: What?
24 D MRS. ABARA: I wouldn't presume.
25 A ¶ Ferdinand returns with the gray hat held in both hands like a small, wounded bird.
26 A He sets it on the counter.
27 A Lucienne touches the feather, turns it over, and finds her own handwriting inside the brim.
28 D LUCIENNE: You found it.
29 D FERDINAND: It found me. It was on the seat, face down, as if it had given up.
30 D LUCIENNE: Thank you, Mr. Oyelowo.
31 D FERDINAND: Ferdinand.
32 D LUCIENNE: Ferdinand. Thank you.
33 D FERDINAND: You'll have to sign.
34 A ¶ He turns the ledger toward her and offers the pencil.
35 A Their fingers touch on it.
* 36 A Nobody moves for a moment.
37 D MRS. ABARA: Dear me. I think I've lost my umbrella.
38 D FERDINAND: Mrs. Abara, you came in with it.
39 D MRS. ABARA: Did I?
40 D FERDINAND: It's in your trolley.
41 D MRS. ABARA: How careless of me.
42 A ¶ Lucienne signs.
43 A She pushes the ledger back.
44 A Ferdinand reads her signature as if it were a poem.
45 D FERDINAND: Lucienne.
46 D LUCIENNE: Yes?
47 D FERDINAND: I should say, I don't usually keep things. I put a hat in the box, and the box goes on the shelf. I didn't put your hat on the shelf.
48 D LUCIENNE: Why not?
49 D FERDINAND: I wanted to see who it belonged to.
50 D LUCIENNE: And now you have.
51 D FERDINAND: Yes.
52 A ¶ Lucienne puts the hat on.
53 A She tilts it.
* 54 A The pheasant feather bobs.
55 A Behind the counter, Ferdinand takes the pencil from behind his ear, looks at it, and puts it back.
56 D LUCIENNE: It suits me.
57 D FERDINAND: It does.
58 D LUCIENNE: Ferdinand, if I were to lose something else tomorrow--
59 D FERDINAND: Then I would be here.
60 D LUCIENNE: At six?
61 D FERDINAND: At six.
62 A ¶ She nods and turns to leave.
63 A Mrs. Abara, as she passes, taps her trolley three times with a gloved finger, as if blessing it.

### SCENE s01741 | INT. NIGHT MARKET - FISHMONGER'S STALL - NIGHT
Detected names (may be incomplete or contain aliases): DOLORES MACIAS, KWAME, STANISLAV, PEACHES, ITO
* 1 A ¶ Crushed ice, silver fish, a hanging bulb.
* 2 A Steam from a noodle cart next door.
3 A ¶ DOLORES MACIAS (50s, stall owner, rubber apron) guts a mackerel without looking at it.
4 A Her son KWAME (20s, quiet, gloves too big) stacks crates.
5 A At the end of the counter, STANISLAV (60s, camel coat, a folded newspaper) waits with his hands behind him.
6 A ¶ PEACHES (30s, bright jacket, gum) lounges against the neighbor's cart.
7 A ITO (40s, thin, glasses) browses the tuna with the patience of a man who never buys.
8 D DOLORES: Two kilos?
9 D STANISLAV: One will do.
10 A ¶ She weighs it.
11 A Wraps it.
12 A Slides it across with a hand that stays on the paper a second too long.
13 D STANISLAV [CONT'D]: Your boy's grown.
14 D DOLORES: He eats.
15 D KWAME: Mama, the ice.
16 D DOLORES: Then go get the ice.
17 A ¶ Kwame leaves.
18 A Peaches pushes off the cart, drifts closer, and studies a flounder as if she's going to marry it.
19 D PEACHES: Fresh?
20 D DOLORES: Today.
21 D PEACHES: Today, today, or today?
22 D DOLORES: Today.
23 A ¶ Ito picks up a tuna steak and sets it down.
24 A Stanislav unfolds the newspaper and sets it on the counter.
* 25 A A small brown envelope lies inside it.
26 A Dolores glances at the envelope, then at the flounder, then at the steam.
27 D DOLORES [CONT'D]: That one's not for sale.
28 D STANISLAV: It is for you.
29 D DOLORES: Then take it back.
30 A ¶ Stanislav lifts the newspaper and folds it again, with the envelope inside, and tucks it under his arm.
31 A He nods to her and walks away.
32 A Peaches pays for the flounder with exact change.
33 A Ito leaves without buying anything.
34 A ¶ Dolores wipes her knife on her apron.
35 A Kwame returns with a bucket of ice and pours it over the mackerel.
36 D KWAME: Who was that?
37 D DOLORES: A customer.

### SCENE s01742 | INT. HOTEL BATHHOUSE - DUST CREEK - NOON
Detected names (may be incomplete or contain aliases): MERCY TATE, SADIE QUINN, JEB HOLLOWAY
* 1 A ¶ Steam.
* 2 A A copper tub.
* 3 A A rag rug.
4 A ¶ MERCY TATE (30s, gunbelt on a hook, hair pinned up) soaks to her chin.
5 A SADIE QUINN (20s, hotel maid, towels on her arm) sits on the lid of a barrel.
6 A JEB HOLLOWAY (50s, bounty man, spurs, dust in his beard) fills the doorway, one hand on the butt of his revolver.
7 D JEB: Mercy Tate.
8 D MERCY: Jeb.
9 D SADIE: Mister, this is a lady's bath.
10 D JEB: I see that.
11 A ¶ Mercy leans back.
* 12 A The water slops.
13 A Sadie slides off the barrel and slips between them.
14 A Jeb steps in.
15 A Mercy reaches for the gunbelt on its hook, but Sadie gets there first, takes it, and holds it behind her back.
16 A Jeb draws.
17 A Sadie pales.
18 A Mercy rises half out of the water, steam pouring off her shoulders, and lifts a hand to stop everyone.
19 D MERCY: Easy, all of you.
20 D JEB: I've got paper on you.
21 D SADIE: She's got a bath on her.
22 A ¶ Jeb lowers the gun an inch.
23 A Mercy sinks back into the water.
24 D MERCY: Sit down, Jeb. You're letting out the heat.

### SCENE s01743 | INT. ROLLER RINK - DJ BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): KIKI TANAKA, OSVALDO PINTO, PRISHA NAIR
* 1 A ¶ Disco ball.
* 2 A Neon.
3 A Kids spin below.
4 A ¶ KIKI TANAKA (16, DJ headphones, glitter eyeliner).
5 A OSVALDO PINTO (17, her best friend, skates in his hand).
6 A PRISHA NAIR (16, new girl, borrowed skates, gripping the rail).
7 A ¶ Kiki slams a fader.
* 8 A The room thumps.
9 D OSVALDO: Say it!
10 D KIKI: I'm not saying it!
11 D PRISHA: Say what?
12 D OSVALDO: She likes you.
13 D KIKI: I do not.
14 D PRISHA: I like you.
15 D KIKI: Stop.
16 D OSVALDO: Both of you stop.
17 A ¶ Kiki spins a record back.
* 18 A The song stutters.
19 D KIKI (dual with Osvaldo): Okay, fine, I like you, Prisha, I've liked you since fourth period.
20 D OSVALDO: ^Okay, fine, I like her too, I'm not even sorry, I've been dying to say it.
21 D PRISHA: Wait. All of us?
22 A ¶ Kiki kills the music.
* 23 A The rink falls silent.
24 A Every skater turns toward the booth.
* 25 A The disco ball keeps turning.

### SCENE s01744 | INT. PLANETARIUM - DOME CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): INES VARELA, GASPARD LEROY
* 1 A ¶ A great hemisphere of dark.
* 2 A The projector, a hulking brass insect, squats at the center under a canvas sheet.
* 3 A Rows of reclined seats fan out like petals.
* 4 A An EXIT sign throws red on the carpet.
5 A ¶ INES VARELA (30s, black overalls, a headlamp shut off around her neck) steps from the aisle with a steady, practiced walk.
6 A She tests the first row with her toe.
7 A She counts seats under her breath.
8 A Behind her, GASPARD LEROY (50s, charcoal suit, soft hands, the museum's night director) follows at a respectful distance, a heavy ring of keys hanging from his belt.
9 A ¶ She goes to the projector and lifts the canvas.
10 A He sets down his flashlight, smiling, as one smiles at a favored guest.
11 A She reaches under the brass collar and finds the hinge.
12 A He folds his hands, and watches her work, and says nothing.
13 D INES: You're calm.
14 D GASPARD: It's my building.
15 D INES: That's what makes it strange.
16 A ¶ She twists a latch.
* 17 A A panel opens.
* 18 A Inside, wrapped in velvet, sits a dark gem the size of a plum.
19 A She lifts it out with both hands, turns it in the red light.
20 A He takes one step closer.
21 D GASPARD: Would you like to see the sky?
22 D INES: Not tonight.
23 D GASPARD: I insist. It's the only real thing in here.
24 A ¶ He pulls a lever on the wall without looking.
* 25 A The dome blooms with stars, thousands, slowly rotating overhead.
26 A She tips her head back for one unguarded second, and the gem glints in her palm.
27 A ¶ When she lowers her eyes, he is holding her keys.
28 A ¶ She did not see him take them.
29 A He steps back, out of reach, and the stars wheel across his face.
30 D GASPARD [CONT'D]: The stone is paste, you know. I sold the real one in March.
31 D INES: Then why leave the case?
32 D GASPARD: So that someone would come tonight.
33 A ¶ She sets the fake on a seat.
34 A He pockets her keys.
* 35 A The sky above them turns.
36 D INES: Who?
37 D GASPARD: The man who bought it.
* 38 A ¶ A door opens somewhere in the dark.
39 A Slow steps descend the aisle, unhurried, a third pair of shoes on carpet.
40 A ¶ She does not turn.
41 A He does not look.
42 A Together they watch the dome as if it might still save them.

### SCENE s01745 | INT. HOTEL LINEN ROOM - BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): ABEL MORROW
* 1 A ¶ A windowless cellar of steel shelves piled with folded sheets, bleached white.
* 2 A Pipes sweat overhead.
* 3 A A single bulb swings on its cord.
* 4 A The air smells of starch and hot iron.
5 A ¶ ABEL MORROW (50s, rumpled raincoat, a snub-nose revolver, a pocket recorder) enters sideways, back to the wall, eyes on the door he came through.
6 A He shuts it with his heel.
7 A He tests the handle.
* 8 A Locked from the outside.
9 A ¶ He presses RECORD.
* 10 A The tiny reels turn.
11 D ABEL (into recorder): Morrow. Basement linen room, Hotel Carnavon. Eleven forty. I'm alone.
12 A ¶ He walks the aisle between shelves, sliding the revolver along each row of towels as if one might hide a hand.
13 A He checks the dryers, four huge steel drums, one by one, then crouches and looks under the folding table, then straightens with a grunt and a hand pressed to his ribs.
14 D ABEL [CONT'D] (into recorder): Somebody took a shot at me in the lobby. Whoever it was ran this way.
* 15 A ¶ A pipe knocks.
16 A Abel freezes, revolver up.
* 17 A Steam hisses from a valve and settles.
18 A He exhales through his nose and lowers the gun.
19 A He stops by a laundry cart, and lifts the top sheet, and lets it fall.
20 A ¶ He picks up a white envelope from the cart.
* 21 A His name is written across it in green ink.
22 A He opens it with his thumb, reads, folds it, pockets it.
23 A His jaw works.
24 D ABEL [V.O.] (recorded, flat): Morrow. Basement linen room. Eleven forty-one. Found a note.
25 A ¶ He thumbs the recorder, rewinds a few seconds, and plays it back to himself.
26 D ABEL [V.O., CONT'D] (recorded): Found a note.
27 A ¶ He nods to himself.
28 A He clicks it forward again.
29 D ABEL (into recorder): Note says it's from the night clerk. Says the clerk is dead, and I should stop looking for who killed him.
30 A ¶ He crosses to the shelves.
31 A He drags a stack of towels aside, one at a time, and at the back there is a steel door, narrow, painted the same gray as the wall.
32 A He puts his ear to it.
* 33 A Silence.
34 A He tries the handle.
* 35 A Locked.
36 A ¶ He steps back and fires twice into the lock.
* 37 A The shots are enormous in the little room.
* 38 A The bulb sways, flinging shadows, and the towels around him shiver.
* 39 A The door sags open.
* 40 A ¶ Behind it, a stairwell, narrow and dark, descending.
41 D ABEL [CONT'D] (into recorder): There's a stairway behind the shelf. I'm going down.
42 A ¶ He drops the recorder into his raincoat pocket without turning it off.
43 A He ducks through the doorway and descends.
* 44 A His footsteps echo away.
* 45 A ¶ The bulb swings.
* 46 A The recorder, still running inside the coat, whirs.
47 D ABEL [V.O., CONT'D] (muffled, from below): Morrow. Sub-basement. Twelve oh two. It's a church.
* 48 A ¶ Silence.
* 49 A Then, far off, an organ begins to play.
50 D ABEL [V.O., CONT'D] (muffled): Somebody's expecting me.
* 51 A ¶ The organ swells.
* 52 A In the empty linen room, the swinging bulb catches a single white towel on the floor, unfolded, where there had been none.

### SCENE s01746 | INT. AIRPLANE HANGAR - ROLLER DERBY TRACK - NIGHT
Detected names (may be incomplete or contain aliases): BEX LUNDQVIST, TAMSIN FALL, KALANI AKANA, COACH RUIZ
* 1 A ¶ A banked oval of painted concrete.
* 2 A Folding chairs.
* 3 A A rusting 747 fuselage looms behind the bleachers.
4 A ¶ Four skaters huddle at the bench, sweating through their jerseys.
5 A BEX LUNDQVIST (30s, jammer, star on her helmet).
6 A TAMSIN FALL (20s, blocker, bruised shin).
7 A KALANI AKANA (30s, captain, scarred knuckles).
8 A COACH RUIZ (50s, gravel voice, whistle, a stopwatch) paces in front of them.
9 D COACH RUIZ: Eight seconds, Bex. Eight seconds you stood in the pack and counted your own feet.
10 D BEX: I was reading the wall.
11 D COACH RUIZ: The wall isn't moving.
12 D BEX: Neither was I.
13 D KALANI (to the team): Listen up. Down by nine. Two minutes. Tam, you take the inside. Bex, you go on my whistle.
14 D TAMSIN: Whose whistle?
15 D KALANI: Mine.
16 D TAMSIN: You don't have a whistle.
17 D COACH RUIZ (muttering): Dear God.
18 D KALANI: I will make a noise like a whistle.
19 D BEX: Can you make it loud?
20 D KALANI: I can make it louder than the coach.
21 D COACH RUIZ: That's not hard.
22 D TAMSIN (quiet, to herself): I'm gonna throw up. I'm gonna throw up on the 747.
23 D KALANI: Tamsin. Look at me.
24 D TAMSIN: I'm looking.
25 D KALANI: You're going to hit the wall at forty miles an hour, and you're going to get back up, and you're going to do it again until they stop counting.
26 D TAMSIN: And if I don't?
27 D KALANI: Then I'll hit it for you.
28 A ¶ Coach Ruiz clicks the stopwatch.
* 29 A The crowd, small and loud, begins to stomp.
30 D COACH RUIZ: Go. Go, go, go.
31 A ¶ They skate out in a rolling blur, wheels thunder on the concrete, and the 747 watches from the dark.

### SCENE s01747 | INT. TIDAL POWER STATION - OCEAN PLANET HABITAT - DAY
Detected names (may be incomplete or contain aliases): YSOLDE FARAH, PAVAN IYER, GREAVES
* 1 A ¶ A glass-walled control gallery above a roaring turbine bay.
* 2 A Seawater thunders through the lower deck.
* 3 A Everything hums.
* 4 A Everything is calm.
5 A ¶ YSOLDE FARAH (40s, station chief, dark braid, mug of tea) sits at the main console and watches a wall of green graphs.
6 A PAVAN IYER (30s, technician, sleeves rolled, a pen behind each ear) moves between panels, tapping readouts and writing nothing down.
7 A MR. GREAVES (60s, inspector from the Ministry, gray suit, a slim case) stands at the window with his back to them.
* 8 A ¶ The graphs scroll.
* 9 A All green.
10 D YSOLDE: You'll find we're ahead of schedule, Mr. Greaves.
11 D GREAVES: So I've heard.
12 D PAVAN: Three weeks ahead. Four, if you count the sluice.
13 D GREAVES: I don't count the sluice.
14 D PAVAN: Then three.
15 A ¶ Ysolde sips her tea.
16 A She sets it down, slightly off the coaster, and nudges it back with one finger.
17 A Pavan stops tapping.
* 18 A For a moment the only sound is the sea in the bay below.
19 A ¶ Greaves turns from the window and lays his slim case on the console.
20 A He opens it.
* 21 A Inside, a thin tablet.
22 A He taps it, and a schedule opens, yellow with warnings.
23 A Ysolde leans forward to read it, and Pavan leans forward to read it over her shoulder, and Greaves watches them both without a flicker of expression.
24 D YSOLDE: That's the old log.
25 D GREAVES: That's the log you filed.
26 D PAVAN (carefully): It must be a sync issue.
27 D GREAVES: I don't think so.
28 A ¶ Pavan wipes his palms on his trousers.
29 A Ysolde takes the pen from behind his ear, and puts it in her pocket, and closes the case, gently, as one closes the eyes of the dead.
30 D YSOLDE: Pavan, would you get Mr. Greaves some tea?
31 D PAVAN: Of course.
32 A ¶ He doesn't move.
33 D GREAVES: He has already seen the turbines, Ms. Farah.
34 D YSOLDE: Then you know what we've done.
35 D GREAVES: I know what you haven't.
* 36 A ¶ Below, the roar of the water changes pitch.
* 37 A A slow, rising note, like a held breath.
* 38 A The graphs on the wall go amber, then red, one after another down the row.
39 A ¶ Nobody looks at them.
40 A Ysolde picks up her tea.
41 A Her hand is perfectly steady.
42 D YSOLDE: How long?
43 D GREAVES: Four minutes.
44 D PAVAN: For what?
45 A ¶ Greaves walks to the door.
46 A He holds it open for the two of them, politely, the way a man holds a door for guests leaving a very good party.

### SCENE s01748 | INT. DEPOSITION ROOM - CONVERTED BOWLING ALLEY - DAY
Detected names (may be incomplete or contain aliases): NADIA FERRANTE, ELIAS BRANDT
* 1 A ¶ A long laminate table has been set up across what used to be lane six.
* 2 A Pins are still racked at the far end behind a sheet of clear plastic.
* 3 A A court reporter's machine sits unattended, red light blinking.
* 4 A Two chairs face each other, one pushed in tight, one angled for escape.
* 5 A A pitcher of water sweats between them.
6 A ¶ NADIA FERRANTE (40s, attorney, charcoal suit, a legal pad she doesn't need) sits upright, pen capped.
7 A Across from her, ELIAS BRANDT (60s, retired shipping executive, rumpled blazer, thick hands folded) leans back like a man in a waiting room.
8 D NADIA: For the record, Mr. Brandt, please state your name.
9 D ELIAS: You know my name.
10 D NADIA: For the record.
11 D ELIAS: Elias Brandt.
12 D NADIA: And you understand you're under oath.
13 D ELIAS: I understand this is a bowling alley.
14 D NADIA: It's the only room the county would lend us.
15 D ELIAS: I used to bowl here. Thursdays.
16 D NADIA: Is that relevant?
17 D ELIAS: Only to me.
18 A ¶ She uncaps her pen.
19 A She writes the date at the top of the page.
20 D NADIA: Mr. Brandt, on March fourth, did you authorize the transfer of eleven million dollars from the pension fund?
21 D ELIAS: I authorized a loan.
22 D NADIA: To whom?
23 D ELIAS: To the company.
24 D NADIA: Which company?
25 D ELIAS: My company.
26 D NADIA: So you lent yourself eleven million dollars of other people's retirement.
27 D ELIAS: I lent it to the business, Ms. Ferrante. The business employs four hundred people.
28 D NADIA: Employed.
29 D ELIAS: Excuse me?
30 D NADIA: Past tense. Four hundred people were employed. Eleven thousand retirees were promised.
31 D ELIAS: Don't lecture me.
32 D NADIA: I'm not lecturing. I'm asking.
33 D ELIAS: You're performing. There's no jury.
34 D NADIA: There's a record.
35 D ELIAS: Then let it record that the market turned.
36 D NADIA: Mr. Brandt, I'm going to show you Exhibit Nine.
37 A ¶ She slides a document across the table.
38 A He doesn't touch it.
39 D NADIA [CONT'D]: That's your signature?
40 D ELIAS: Looks like it.
41 D NADIA: Is it?
42 D ELIAS: Yes.
43 D NADIA: And the date next to it?
44 D ELIAS: March fourth.
45 D NADIA: And the note in the margin. Read it aloud, please.
46 A ¶ He picks up the paper.
47 A He reads in a flat voice.
48 D ELIAS: "Do not tell the trustees until it is done."
* 49 A ¶ Silence.
* 50 A The reporter's light blinks.
* 51 A Down the room, behind the plastic, the pins stand frozen.
52 D NADIA: Why did you write that?
53 D ELIAS: Because they would have said no.
54 D NADIA: Because it was illegal.
55 D ELIAS: Because they were frightened men. Frightened men say no. Somebody had to say yes.
56 D NADIA: Somebody who would profit.
57 D ELIAS: Somebody who would carry it.
58 D NADIA: Eleven thousand people are carrying it now.
59 D ELIAS (rising, sharply): Don't you speak to me about carrying! I carried those people for thirty years!
60 D NADIA: Sit down, Mr. Brandt.
61 D ELIAS: I put a roof on every one of them!
62 D NADIA: Sit down.
63 A ¶ He slams his palm on the table.
* 64 A The pitcher jumps.
* 65 A Water sloshes over the lip and runs across the laminate, toward the plastic, toward the pins.
66 A ¶ Nadia does not flinch.
67 A She picks up her pen and writes one line.
68 D ELIAS [CONT'D] (quieter): What did you just write?
69 D NADIA: "Witness became agitated."
70 D ELIAS: That's not what happened.
71 D NADIA: Then what happened?
72 A ¶ Elias sits.
73 A His hand, still wet, trembles on the table.
74 A He wipes it on his blazer, slowly, and looks at the lane, at the pins he once knocked down on Thursday nights.
75 D ELIAS: I was happy here.
76 D NADIA: Mr. Brandt, that's not responsive.
77 D ELIAS: I know it isn't.
78 A ¶ He lifts his eyes to hers.
79 D ELIAS [CONT'D]: Ask your question again.

### SCENE s01749 | INT. FUNERAL HOME - CASKET SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): AUGUSTUS PEMBROKE, SALESMAN, PERCIVAL
* 1 A ¶ Mahogany, pine, brushed steel.
* 2 A Satin linings in six shades of cream.
* 3 A A single armchair for the grieving.
* 4 A A small fountain gurgles in the corner.
5 A ¶ AUGUSTUS PEMBROKE (50s, widower in training, black suit too tight at the shoulder) walks the room with his hat in both hands.
6 A He stops at the cheapest casket and touches it with one finger, as though it might be hot.
7 A ¶ A SALESMAN (40s, shiny shoes, a lapel pin shaped like a dove) appears out of nowhere at his elbow.
8 D SALESMAN: Good morning, sir. Have you lost someone?
9 D AUGUSTUS: Not yet.
10 D SALESMAN: Ah. A planner. I admire a planner.
11 D AUGUSTUS: My wife's still alive. She's in the car.
12 D SALESMAN: In the car.
13 D AUGUSTUS: She's got a cold. She wanted to wait.
14 D SALESMAN: Of course. We offer a drive-through option, sir, for the living.
15 D AUGUSTUS: Really?
16 D SALESMAN: No.
17 A ¶ Augustus nods slowly.
18 A The Salesman leans on the pine casket and pats it, as a man pats a horse.
19 D SALESMAN [CONT'D]: This is our Starter. Pine, plain handles, a one-year warranty.
20 D AUGUSTUS: On a casket?
21 D SALESMAN: If it fails, we replace it. Free of charge.
22 D AUGUSTUS: How would you know it failed?
23 D SALESMAN: Sir, that is exactly the question my own father asked.
24 D AUGUSTUS: What did you tell him?
25 D SALESMAN: That we have a very friendly staff. My name is Percival, by the way.
26 D AUGUSTUS: Augustus.
27 D PERCIVAL: Augustus. May I ask what your wife would want?
28 D AUGUSTUS: She'd want me to stop pricing things.
29 D PERCIVAL: She sounds lovely.
30 D AUGUSTUS: She's insufferable. She's alive.
31 D PERCIVAL: Then why are you here?
32 D AUGUSTUS: Because she told me to. She said, Gus, pick something so I don't have to hear about it.
33 D PERCIVAL: Ah. A woman who delegates. I'd like to meet her.
34 D AUGUSTUS: She'd like to meet you too. She's been waiting forty minutes.
35 D PERCIVAL: In the car?
36 D AUGUSTUS: In the car.
37 A ¶ Percival straightens.
38 A He glances at the door, then back, and for the first time he looks worried.
39 D PERCIVAL: Sir, you left her in a parked vehicle with a cold?
40 D AUGUSTUS: With the heater on.
41 D PERCIVAL: How long?
42 D AUGUSTUS: I told you. Forty minutes.
43 D PERCIVAL: Forty minutes in a car with the engine running?
44 D AUGUSTUS (beat): Oh.
45 A ¶ They look at each other.
46 A Then they both run for the door, Augustus knocking over the fountain, Percival clutching his dove pin, a pair of grown men in dark suits sprinting through a showroom of empty beds.

### SCENE s01750 | INT. RADIO HUT - FLOODED RICE PADDY - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR WHITCOMBE, SOLDIER, ODETTE LAMBERT, TRAN
* 1 A ¶ Bamboo walls on stilts above black water.
* 2 A A kerosene lamp.
* 3 A A field radio on a crate, its dials faintly glowing.
* 4 A Rain drums the thatch and drips through in three places, into three cooking pots.
5 A ¶ MAJOR WHITCOMBE (50s, British liaison, damp mustache, an unlit cigar) sits cross-legged on a rolled blanket, a map across his knees.
6 A At the radio, a SOLDIER (20s, barefoot, helmet at his feet, thin as the bamboo) twists the dial through static.
7 A In the corner, ODETTE LAMBERT (30s, field nurse, hair cut short as a boy's) wraps bandage around a wounded forearm that is, evidently, her own.
8 D SOLDIER: Nothing. Only the ocean.
9 D WHITCOMBE: That is not the ocean, son. That is the sound of the Pacific not talking to us.
10 D SOLDIER: Yes, sir.
11 D WHITCOMBE: What is your name?
12 D SOLDIER: Tran, sir.
13 D WHITCOMBE: First or last?
14 D TRAN: Last. My first is Minh.
15 D WHITCOMBE: Minh Tran. Good. You will be on the radio until dawn, Minh. If anyone answers, you wake me. If no one answers, you wake me anyway.
16 D TRAN: Why, sir?
17 D WHITCOMBE: Because the night is long, and I should like to be told when it ends.
18 A ¶ Odette finishes her bandage and bites the end of the tape.
19 A She tests the knot.
* 20 A It holds.
21 D ODETTE: Major, you might tell him the real reason.
22 D WHITCOMBE: Which is?
23 D ODETTE: That we've been cut off for three days, and you want to hear a human voice.
24 D WHITCOMBE: Madame Lambert, you are insubordinate.
25 D ODETTE: I'm a nurse. It's a symptom.
26 D WHITCOMBE: Of what?
27 D ODETTE: Of watching men pretend.
* 28 A ¶ A drip lands in a pot with a clear, small note.
29 A Tran turns the dial.
* 30 A The static rises, falls, rises.
31 D TRAN: Sir, may I speak?
32 D WHITCOMBE: You may.
33 D TRAN: My brother is in the north. He's with them.
34 D WHITCOMBE: With them.
35 D TRAN: With the other side. I don't know where. If I hear his voice on this radio I don't know what I'll do.
36 D WHITCOMBE: Then you will do what a soldier does. You will wake me.
37 D TRAN: And then?
38 D WHITCOMBE: Then we shall see.
39 D ODETTE (gently): He means he won't shoot, Minh.
40 D WHITCOMBE: I did not say that.
41 D ODETTE: You didn't have to.
42 A ¶ The Major lifts the cigar to his mouth, finds it unlit, lowers it.
* 43 A The lamp flickers.
44 A Tran adjusts one last dial, and for a heartbeat the static thins, and a thread of faint music comes through, a woman singing in a language none of them speaks.
45 A ¶ The three of them listen.
46 D WHITCOMBE: Whatever that is, do not touch it.
47 D TRAN: No, sir.
* 48 A ¶ The song fades.
* 49 A The rain keeps falling, in three pots, in the dark.

### SCENE s01751 | INT. DINING CAR - END OF THE LINE - NIGHT
Detected names (may be incomplete or contain aliases): HELOISE DUVAL, MATILDA ROSS, ARCHIBALD PENNYWHISTLE
* 1 A ¶ White tablecloths, a single wilted carnation per table.
* 2 A The train has stopped.
* 3 A Beyond the glass, a snow-heavy platform and no station.
4 A ¶ HELOISE DUVAL (30s, in a green coat, ring on a chain around her neck) stares into a cold cup of tea.
5 A Across the table sits MATILDA ROSS (30s, in a gray traveling suit, her bag already packed).
6 A She turns her own ring, a plain band, round and round on her finger.
* 7 A Between them the carnation lies where somebody has dropped it.
8 A ¶ She slides the ring off.
9 A She sets it down.
10 A She nudges it with a fingertip until it touches the other.
11 D HELOISE (not looking up): You'll want to keep that.
12 D MATILDA: I'll want a lot of things.
* 13 A ¶ A door hisses open at the end of the car.
14 A ARCHIBALD PENNYWHISTLE (70s, conductor, white mustache, lantern, ticket punch) steps inside, stamping snow from his boots.
15 A He takes in the table, the rings, the two silent women, and removes his cap with great gentleness.
16 D ARCHIBALD: Ladies. I regret to say this is the final stop.
17 D HELOISE: We know.
18 D ARCHIBALD: There is a bus. It leaves at dawn.
19 D MATILDA: Which way?
20 D ARCHIBALD: Both, I believe. It goes in one direction, and returns in the other.
21 A ¶ Heloise laughs, a short broken sound.
22 A Matilda picks up her bag.
23 A Archibald puts his cap back on, tips it, and tactfully retreats, leaving the door open behind him so the cold can come in.

### SCENE s01752 | INT. PARKING LOT - MERIDIAN SYNERGIES - FIRE DRILL - DAY
Detected names (may be incomplete or contain aliases): GWENDOLYN PRUITT, HAL BORSTEIN, TILLY NAKAMURA, HR, MORTIMER GAULT, CFO, YVETTE LAROCHE, INTERN, COLTON
1 A ¶ Two hundred employees in lanyards stand on hot asphalt in neat clusters.
* 2 A A sign reads ASSEMBLY POINT B.
3 A ¶ GWENDOLYN PRUITT (50s, VP of Operations, clipboard, sunglasses, an air of command) stands at the center, tapping a pen.
4 A HAL BORSTEIN (40s, sales director, shirt-sleeves rolled, a stress ball in each fist) squeezes both.
5 A TILLY NAKAMURA (30s, HR, lanyard heavy with badges) counts heads and gets a different number every time.
6 A MORTIMER GAULT (60s, CFO, a bow tie, a thermos of something) sits on a curb as though he'd been assigned one.
7 A YVETTE LAROCHE (30s, marketing lead, phone out, thumbs flying) isn't present in any way that matters.
8 A ¶ At the edge, an INTERN (20s, wrinkled polo, a name tag that says HELLO MY NAME IS and nothing else) stands holding a box of donuts.
9 D GWENDOLYN: Tilly, status.
10 D TILLY: Two hundred and four. Or two hundred and six.
11 D GWENDOLYN: We have two hundred and one employees.
12 D TILLY: Then I have five ghosts.
13 D HAL: That's synergy.
14 D YVETTE (not looking up): Can you all not.
15 D GWENDOLYN: Yvette, put down the phone.
16 D YVETTE: It's a work phone.
17 D GWENDOLYN: It's a fire drill.
18 D YVETTE: It's a very productive fire drill.
19 D MORTIMER (from the curb): In my day, we ran out of the building screaming and called it Tuesday.
20 D GWENDOLYN: Mortimer, that's not helpful.
21 D MORTIMER: It wasn't meant to be.
22 A ¶ The Intern lifts the donut box.
23 D INTERN: Does anyone want a donut?
24 A ¶ Everyone turns.
25 D GWENDOLYN: Who authorized donuts?
26 D INTERN: Nobody. I thought it would be nice.
27 D GWENDOLYN: Who are you?
28 D INTERN: The, um. Intern?
29 D GWENDOLYN: What's your name?
30 D INTERN: Colton.
31 D TILLY (consulting her clipboard): There's no Colton on the roster.
32 D COLTON: I'm new.
33 D HAL (dual with Tilly): Nobody told us there was a new guy.
34 D TILLY: ^There is no Colton, Gwendolyn. I checked all three lists.
35 D GWENDOLYN: Colton, who hired you?
36 D COLTON: A man in the elevator.
37 D MORTIMER: That'll be me.
* 38 A ¶ Silence.
39 A Mortimer sips from his thermos, entirely at peace.
40 D GWENDOLYN: Mortimer, you can't hire a person in an elevator.
41 D MORTIMER: The elevator was stuck. It was either hire him or listen to him hum.
42 D COLTON: I wasn't humming.
43 D MORTIMER: You were humming "Delilah."
44 D HAL: You can hire a guy because he hums "Delilah"?
45 D MORTIMER: He hummed it in the right key.
46 D YVETTE (looking up, finally): Wait. Are we talking about the fire drill or about Colton?
47 D GWENDOLYN: We are talking about neither. We are talking about a protocol.
48 D YVETTE: What protocol?
49 D GWENDOLYN: There is a protocol, and it states that employees assemble at the point, and wait for the all clear.
50 D HAL: Gwen, how long have we been waiting?
51 D GWENDOLYN: Forty minutes.
52 D HAL: Who's giving the all clear?
53 A ¶ Everyone looks at the building.
* 54 A Smoke, thin and gray, curls from a third-floor window.
55 D YVETTE (very quietly, to herself): Oh, that's a real one.
56 A ¶ They all turn together to look at the window.
57 A Colton sets down the donuts.
58 D COLTON: Should I call someone?
59 D GWENDOLYN (brightly): No, Colton. I think we've got this under control.
* 60 A ¶ Behind her, a window pops and glass rains on the asphalt.
61 D TILLY: Two hundred and one.
62 D GWENDOLYN: Thank you, Tilly.
63 D TILLY: And Colton.
64 D GWENDOLYN: Two hundred and two.
65 D HAL (squeezing both stress balls): I'd like it noted that I said we should have had donuts.

### SCENE s01753 | INT. CLOCK REPAIR SHOP - AFTER HOURS
Detected names (may be incomplete or contain aliases): ELSPETH FAIRWEATHER
* 1 A ¶ A narrow shop crowded with ticking.
* 2 A Wall clocks, mantel clocks, cuckoo clocks, a grandfather clock with its door ajar.
* 3 A A green banker's lamp lights the workbench.
* 4 A Rain on the window glass.
5 A ¶ ELSPETH FAIRWEATHER (60s, silver braid, brass loupe pushed up on her forehead, ink-stained apron) sits at the bench with a pocket watch open under the lamp.
6 A She works the tweezers with a surgeon's calm.
* 7 A A cassette recorder rests at her elbow, the red light on.
8 A ¶ She lays the tweezers down.
9 A She presses her thumbnail into the watch case.
* 10 A A hidden catch springs open.
* 11 A Inside the lid, something is engraved.
12 A ¶ She squints.
13 A She lowers the loupe over one eye.
14 D ELSPETH (into recorder): Wednesday. The pocket watch from the widow. The engraving inside the lid reads "M.H. to A.H., never late."
15 A ¶ She lifts her head.
* 16 A The shop ticks on.
17 A She counts the strokes of one nearby clock and frowns.
18 D ELSPETH [CONT'D] (into recorder): That one is slow. Four seconds, and always four seconds.
19 A ¶ She rises.
20 A She crosses to a mantel clock and opens its back.
21 A She examines the works, closes it, steps away.
* 22 A A second clock is slow.
* 23 A A third.
24 A ¶ She stands in the center of the shop, listening.
* 25 A A hundred tickings, each a heartbeat out of time with its neighbor.
* 26 A ¶ On the bench, the recorder clicks.
27 A She turns back and finds the tape has run out.
28 A She presses rewind.
* 29 A It whines.
30 A She presses play.
31 D ELSPETH [V.O.] (recorded): Wednesday. The pocket watch from the widow.
* 32 A ¶ Her own voice from five minutes ago.
33 A She stands very still.
* 34 A After her recorded sentence, another voice enters, low and dry, a man's.
35 D ELSPETH [V.O.] (recorded, flat): Don't turn around.
36 A ¶ She turns around.
* 37 A ¶ The shop is empty.
* 38 A The grandfather clock's door stands open.
* 39 A Behind it, in the dark case where the pendulum should swing, nothing hangs but shadow.
40 A ¶ She does not scream.
41 A She reaches back, finds the recorder without looking, and holds it in both hands.
42 D ELSPETH (softly): I never said that.
* 43 A ¶ The pendulum, which had not been moving, begins to swing.
44 D ELSPETH [V.O.] (recorded, still playing): I should never have opened that watch.
45 A ¶ She lifts the pocket watch from the bench.
46 A She turns it to the lamp.
* 47 A The engraving, "never late," has changed.
* 48 A Someone has etched a date beneath it, today's, and a time.
* 49 A Eight forty.
50 A She checks the wall clock.
* 51 A ¶ It is eight thirty-eight.
52 A ¶ Elspeth sets down the recorder.
53 A She takes up the tweezers again, calmly, as if to repair something.
* 54 A Behind her, the tickings synchronize, one by one, until all hundred clocks beat together.

### SCENE s01754 | INT. FIRE LOOKOUT TOWER - MOUNTAIN SUMMIT - DAY
Detected names (may be incomplete or contain aliases): NOELLE BEAUCHAMP, BARRETT
* 1 A ¶ A glass-walled cabin on stilts above a sea of pines.
* 2 A A cot, a stove, a Osborne fire finder bolted to a table, a radio on a shelf.
* 3 A The wind sings in the guy-wires.
4 A ¶ NOELLE BEAUCHAMP (17, first summer job, sunburned nose, binoculars on a cord) sits on the cot, eating peanut butter from the jar.
5 A She has not changed her shirt in four days.
* 6 A The radio on the shelf crackles.
7 D BARRETT [V.O.] (over radio): Tower Nine, this is Dispatch. Noelle, you there?
8 A ¶ She leaps, drops the jar, grabs the mic.
9 D NOELLE: I'm here. I'm here, Barrett.
10 D BARRETT [V.O.] (over radio): You sound out of breath.
11 D NOELLE: I was eating.
12 D BARRETT [V.O.] (over radio): Good. Eat. How's the view?
13 D NOELLE: It's green.
14 D BARRETT [V.O.] (over radio): Anything else?
15 D NOELLE: No. Just green. And sky.
16 D BARRETT [V.O.] (over radio): That's the best kind of day, kid.
17 A ¶ She picks up the jar, wipes a smear of peanut butter from her wrist, sits.
* 18 A The cabin creaks in the wind.
19 D NOELLE: Barrett?
20 D BARRETT [V.O.] (over radio): Yeah?
21 D NOELLE: Can I ask you something?
22 D BARRETT [V.O.] (over radio): I'm not going anywhere. Go ahead.
23 D NOELLE: Were you ever scared up here?
24 D BARRETT [V.O.] (over radio): Every summer for twenty-two years.
25 D NOELLE: Of what?
26 D BARRETT [V.O.] (over radio): The first time I saw smoke and wasn't sure.
27 A ¶ She nods at the radio, though he can't see.
28 A She lifts the binoculars and sweeps the horizon.
29 A Her hand stops.
30 D NOELLE: There's a gray thing.
31 D BARRETT [V.O.] (over radio): Gray thing?
32 D NOELLE: West ridge. A column. Maybe a mile.
33 D BARRETT [V.O.] (over radio): Take a bearing. Use the finder.
34 A ¶ She moves to the fire finder, bends, sights down the brass ring.
35 A She reads the number with her lips.
36 D NOELLE: Two ninety-one. Two ninety-one degrees.
37 D BARRETT [V.O.] (over radio): Distance?
38 D NOELLE: Eleven hundred yards, maybe. I can't tell.
39 D BARRETT [V.O.] (over radio): You're doing great. Say it again, slow.
40 D NOELLE (dual with Barrett): Two ninety-one degrees, west ridge, column of gray smoke, eleven hundred--
41 D BARRETT [V.O.] (over radio, dual): ^Two ninety-one, west ridge, gray smoke, copy, I've got a crew rolling.
42 A ¶ They stop at the same moment.
* 43 A Static hums.
44 D BARRETT [V.O.] (over radio): Was that your first call?
45 D NOELLE: Yes.
46 D BARRETT [V.O.] (over radio): It was a good one.
47 D NOELLE: Is it real?
48 D BARRETT [V.O.] (over radio): We'll know in twenty minutes.
49 D NOELLE: Twenty minutes is forever.
50 D BARRETT [V.O.] (over radio): That's the job. Twenty minutes of forever, and then you eat.
51 A ¶ She laughs.
52 A She laughs again.
53 A She sets the binoculars on the table, sits on the cot, and pulls the peanut butter back onto her lap.
54 D NOELLE: Barrett?
55 D BARRETT [V.O.] (over radio): Yeah, kid.
56 D NOELLE: Stay on the line.
57 D BARRETT [V.O.] (over radio): Wasn't planning on going anywhere.
58 A ¶ She eats a spoonful.
* 59 A The radio breathes.
* 60 A Outside, a hawk drifts past the glass, and the smoke on the ridge thins and tears apart in the wind.
61 D NOELLE: It's going out.
62 D BARRETT [V.O.] (over radio): Is it?
63 D NOELLE: It was a cloud.
64 D BARRETT [V.O.] (over radio): Everybody's first call is a cloud.
65 D NOELLE: You could have told me.
66 D BARRETT [V.O.] (over radio): And ruin it?
67 A ¶ She puts her face in her hands.
68 A She is shaking, and she is laughing, and the tears are real.
69 D NOELLE: I'm so embarrassed.
70 D BARRETT [V.O.] (over radio): Don't be. You were right to call it. A cloud's a cloud until you prove it.
71 D NOELLE: I called it fast.
72 D BARRETT [V.O.] (over radio): That's what you're for.
73 A ¶ She wipes her eyes with the back of her wrist.
74 A She presses the mic.
75 D NOELLE: Tower Nine to Dispatch. False alarm. Stand down.
76 D BARRETT [V.O.] (over radio): Copy, Tower Nine. Good work, Noelle.
77 A ¶ She hangs the mic on its hook.
* 78 A The wind sings in the guy-wires.
79 A She picks up the jar again, and this time she offers a spoonful to the empty room.

### SCENE s01755 | INT. CAR IMPOUND LOT - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): IMELDA ROQUE, DOBBS, DISPATCH, MAN, RAFFERTY
* 1 A ¶ A prefab shed with a buzzing light and a bulletproof window.
* 2 A Wall of keys on numbered hooks.
* 3 A A space heater ticks.
* 4 A Beyond the glass, rows of towed cars shine like sleeping animals under floodlights.
5 A ¶ IMELDA ROQUE (50s, night clerk, cardigan, reading glasses, a paperback face-down on the desk) sits at a counter, eating crackers one at a time.
6 A DOBBS (30s, tow driver, grease on his sleeves) sprawls in the visitor's chair, sipping a soda, tapping his boot.
* 7 A The radio on the desk crackles with a disembodied voice.
8 D DISPATCH [V.O.] (over radio): Unit twelve, pickup at Fifth and Mercer, black sedan, plates blocked. Over.
9 D DOBBS (into radio): Copy.
10 D IMELDA: Dobbs, you're on break.
11 D DOBBS: Dispatch doesn't know that.
* 12 A ¶ The glass door chimes.
13 A A MAN (40s, wet trench coat, hat low, hands deep in his pockets) steps in, shaking rain off his shoulders.
14 A He takes in the room, the counter, the wall of keys, the clerk, the driver.
15 A His eyes settle on the keys.
16 D MAN: Evening. I'm here for a car.
17 D IMELDA: License and registration.
18 D MAN: It's not mine. It's a friend's.
19 D IMELDA: Then your friend can come get it.
20 D MAN: My friend's indisposed.
21 A ¶ Dobbs puts down his soda.
22 A The Man lifts one hand from his pocket, slowly, and lays a thick envelope on the counter.
23 A Imelda doesn't touch it.
24 A The Man produces a driver's license and slides it across.
25 A She picks it up, tilts it toward the lamp, reads.
26 D IMELDA: Mr. Rafferty. Francis Rafferty.
27 D RAFFERTY: Frank.
28 D IMELDA: Mr. Rafferty. This says Ohio.
29 D RAFFERTY: Ohio is where I'm from.
30 D IMELDA: The car is Illinois.
31 D RAFFERTY: It's a very long drive.
32 A ¶ Dobbs stands, stretching, and drifts toward the door.
33 A Imelda watches him go.
34 A She hands the license back and takes the envelope in the same motion, slides it into a drawer, closes the drawer with her knee.
35 A Rafferty smiles faintly.
36 D IMELDA: Space nine. Black Chrysler. I'll need you to sign.
37 D RAFFERTY: Of course.
38 A ¶ She slides a form across.
39 A Rafferty bends to sign.
40 A Dobbs, by the door, puts a hand on the knob and stops.
* 41 A Through the glass, the floodlights flicker once, and all down the long rows of impounded cars, a headlight comes on.
* 42 A ¶ Then another.
* 43 A Then ten.
44 D DISPATCH [V.O.] (over radio): Unit twelve, disregard the pickup. All units, return to the lot immediately. I repeat, return to the lot.
45 A ¶ Dobbs snatches the radio.
46 A Imelda lifts her glasses onto her forehead.
47 A Rafferty finishes his signature, caps the pen, and sets it down on the form with great care.
48 D DOBBS (into radio): Dispatch, what's going on?
49 D DISPATCH [V.O.] (over radio): Dobbs, don't let the man leave.
50 D RAFFERTY: Mr. Dobbs, I'd like to leave now.
51 D IMELDA: You'd better sit.
52 D RAFFERTY: I'm afraid I can't.
* 53 A ¶ Outside, one by one, the engines catch.
* 54 A A low thunder rises across the lot.
55 A Rafferty looks over his shoulder at the glass, then at Imelda, then at the keys on the wall that are, one by one, beginning to swing.
56 D RAFFERTY [CONT'D]: They always do this when I come for one.
57 A ¶ He tips his hat.
* 58 A The door chimes open on its own.
59 A Rafferty walks out into the glare of a hundred headlights, and the engines fall silent as he passes.

### SCENE s01756 | INT. HIGH SCHOOL GYM - AFTER PROM - 1 A.M.
Detected names (may be incomplete or contain aliases): THANH NGUYEN, CORDELIA PIERCE
* 1 A ¶ Crepe streamers drooping from the rafters.
* 2 A Folding tables stacked on a wheeled cart.
* 3 A A mop bucket in the center of the court, and a single overhead bank of lights left on.
4 A ¶ THANH NGUYEN (17, in a rented tuxedo, bow tie undone and hanging, corsage still pinned to his lapel) sits on the bottom bleacher with his shoes in his lap.
5 A CORDELIA PIERCE (17, in a lavender dress, hair collapsing, a plastic crown on her head) sweeps confetti into a pile with a push broom, though no one has asked her to.
6 A ¶ She sweeps a long arc across the court, circles the free-throw line, and lets the pile grow at the base of the basket.
7 A He peels the corsage from his lapel, studies it, sets it on the bench beside him, and then picks it up again, and then reaches over and sets it carefully on top of her heap of confetti, where it looks like a small, absurd flag.
8 D THANH: You didn't have to stay and clean.
9 D CORDELIA: I was on the committee.
10 D THANH: So was everyone.
11 D CORDELIA: Everyone left.
12 D THANH: I guess that's what committees are for.
13 A ¶ She leans the broom against the wall.
14 A She takes off the crown and turns it over in her hands, then tosses it to him underhand.
15 A He catches it, surprised, and puts it on.
16 D CORDELIA: It suits you.
17 D THANH: I look like an idiot.
18 D CORDELIA: A very handsome idiot.
19 A ¶ They sit.
* 20 A The lights hum.
* 21 A Far away, a car door slams in the lot, and an engine starts, and fades.

### SCENE s01757 | INT. BOXING GYM - ABOVE A FUNERAL PARLOR - EVENING
Detected names (may be incomplete or contain aliases): EMEKA OKONKWO, LARS VESTERGAARD
* 1 A ¶ A long upstairs room with warped floorboards.
* 2 A One heavy bag, patched with duct tape.
* 3 A A ring with sagging ropes.
* 4 A A window facing a hearse garage; through the glass, a black Cadillac gleams.
5 A ¶ EMEKA OKONKWO (30s, heavyweight, taped hands, hooded sweatshirt) hits the bag in slow, deliberate pairs.
6 A LARS VESTERGAARD (50s, trainer, gray crew cut, a towel on his shoulder) holds a pair of mitts and watches him with a steady, flat gaze.
7 D LARS: Again.
8 D EMEKA: I've done fifty.
9 D LARS: Fifty is warm-up.
10 D EMEKA: Fifty is my shoulder.
11 D LARS: Your shoulder is fine.
12 A ¶ Emeka lets his arms fall.
13 A He walks to the window and looks down at the hearse.
14 A He wipes sweat off his face with the hem of his sweatshirt.
15 D EMEKA: Why did you rent above a funeral home?
16 D LARS: It was cheap.
17 D EMEKA: Is that the reason?
18 D LARS: It's quiet.
19 D EMEKA: Nobody downstairs complains about the noise?
20 D LARS: Nobody downstairs complains about anything.
21 A ¶ Emeka almost smiles.
22 A He returns to the bag and sets his feet.
23 A He hits it twice, hard, and the chain squeaks.
24 D LARS [CONT'D]: Better. Where did that come from?
25 D EMEKA: From you telling me I'm too slow.
26 D LARS: I never said that.
27 D EMEKA: You said it with your eyebrows.
28 D LARS: My eyebrows have no opinion.
29 A ¶ Emeka hits again.
30 A And again.
* 31 A A faster rhythm builds, the old chain snapping, the tape on the bag peeling a little at its seam.
32 A Lars lifts the mitts and Emeka drives his fists into them, one-two, one-two, until the older man's knees begin to bend.
33 D LARS [CONT'D]: Enough.
34 D EMEKA: No.
35 D LARS: Enough, I said.
36 D EMEKA: Three more.
37 D LARS: Fine. Three.
38 A ¶ Emeka lands three, and they are enormous.
39 A Lars staggers.
40 A He drops the mitts, rubs his palms together, shakes out his wrists.
41 D LARS [CONT'D]: That's what I wanted.
42 D EMEKA: Why wait until now?
43 D LARS: Because you had to be angry.
44 D EMEKA: I wasn't angry.
45 D LARS: You were furious at me.
46 D EMEKA: I was tired.
47 D LARS: It's the same thing. Both of them look like the end.
48 A ¶ Emeka sits on the ring apron.
49 A He unwinds the tape from one hand, slowly.
50 A Lars pours him water from a thermos, then pours himself some, then sits, and the two of them listen to the hearse engine turn over below.
51 D EMEKA: Fight's on Saturday.
52 D LARS: I know.
53 D EMEKA: You think I'm ready?
54 D LARS: I think he's not.
55 D EMEKA: Who, him or you?
56 D LARS: Either. Both. The one standing in front of you.
57 A ¶ Emeka laughs.
58 A Lars does not, but something in his shoulders eases.
59 D EMEKA: If I lose.
60 D LARS: Then you lose here, with me, and nobody downstairs will notice.
61 D EMEKA: Thanks.
62 D LARS: You're welcome.
* 63 A ¶ The hearse pulls out of the garage and glides into the street, slow and silent.

### SCENE s01758 | INT. FOG SIGNAL STATION - NIGHT
Detected names (may be incomplete or contain aliases): DAGNY HOLM, PEREGRINE LOOMIS, SOL
* 1 A ¶ A stone tower on a bald rock in a gray sea.
* 2 A A great iron horn mounted in the wall.
* 3 A The room is round, cramped, lit by a hanging oil lamp that sways though the air is still.
* 4 A The walls are slick with condensation.
* 5 A The floor has been scrubbed so many times the boards are white.
6 A ¶ DAGNY HOLM (40s, keeper, oilskin coat, a wool cap pulled to her eyebrows, a thick log-book in her lap) sits at a table with a mug gone cold.
7 A PEREGRINE LOOMIS (20s, apprentice, glasses fogged, jacket too big for him) stands at the narrow window with a telescope.
8 A SOL (60s, deaf, white beard, one milky eye) rocks in a chair by the iron stove, hands knotted around a pipe.
* 9 A ¶ The horn sounds.
* 10 A A single, mournful bellow.
* 11 A The lamp shivers.
12 A Everyone waits for the echo.
* 13 A ¶ None comes.
14 D PEREGRINE: Something's out there.
15 D DAGNY: It's fog.
16 D PEREGRINE: It's moving against the fog.
17 D DAGNY: Fog moves.
18 D PEREGRINE: Not like this. Come see.
19 A ¶ She doesn't.
20 A She turns a page in the log.
21 A Sol rocks.
* 22 A The chair creaks.
* 23 A The pipe cools.
24 D PEREGRINE [CONT'D]: Dagny. It has lights.
25 D DAGNY: A ship, then.
26 D PEREGRINE: Seven lights. In a row. Low on the water.
27 D DAGNY: Count again.
28 D PEREGRINE: Eight.
29 A ¶ Dagny stands.
30 A She goes to the window, takes the telescope from his hands, puts it to her eye.
* 31 A A long silence.
* 32 A The lamp swings once.
33 D DAGNY: Ten.
34 D PEREGRINE: They're getting closer.
35 A ¶ Sol stops rocking.
36 A He stands, and the chair keeps moving without him.
37 A He crosses to the horn mechanism and puts a hand flat on the iron, feels the tremor.
38 D SOL (gravelly): They're answering it.
39 D DAGNY: Sol.
40 D SOL: It sounds back from the water. I felt it in my bones.
41 A ¶ Peregrine takes the telescope back and sweeps the sea.
42 A Dagny seizes the horn lever.
43 A Sol grips her wrist.
44 A They stare at each other across a foot of cold air, and between them the lamp swings and the shadows swing with it.
45 D PEREGRINE (whisper): Don't sound it.
46 D DAGNY: If I don't, the ships hit the rock.
47 D SOL: If you do, those ones come in.
48 D DAGNY: Which ones?
* 49 A ¶ The sea gives a long, low, rolling moan.
* 50 A The iron horn, silent, answers it, humming in the wall like a plucked string.
* 51 A From the dark down the stairwell comes a wet sound, one step, then another, climbing.
52 A ¶ Peregrine backs away from the window.
53 A Dagny releases the lever.
54 A Sol raises both hands and pulls the cap from his head, as if it were a church.
* 55 A ¶ The footsteps stop at the door.
* 56 A ¶ A knock, polite.
57 A ¶ Dagny, Sol, Peregrine look at each other, the same thought in all three faces.
* 58 A Then, from the other side of the wood, a voice, thin, patient, exactly like Peregrine's.
59 D PEREGRINE [V.O.] (through the door): Dagny? It's me. Let me in.
60 A ¶ Peregrine, at the window, has not moved his lips.

### SCENE s01759 | INT. ESCAPE ROOM - "THE MUMMY'S CRYPT" - DAY
Detected names (may be incomplete or contain aliases): BRENDA KOWALSKI, KAREEM ALLEN, FENELLA OKAFOR-LISTER, OLUWASEUN ADEYEMI, TRIXIE VANCE
* 1 A ¶ A fake tomb: painted hieroglyphs, a plastic sarcophagus, torches with flickering LED flames.
* 2 A A timer on the wall counts down: 04:12.
* 3 A A speaker hisses behind the sphinx, and nobody pays it any attention.
4 A ¶ Five coworkers in matching "TEAMWORK!"
5 A T-shirts mill around a stone table.
6 A BRENDA KOWALSKI (50s, regional manager, laminated agenda) reads the instructions aloud to no one.
7 A KAREEM ALLEN (30s, analyst, hands in pockets) stares at the walls.
8 A FENELLA OKAFOR-LISTER (40s, accountant, wire-rim glasses) has already found three clues and hidden them in her pocket.
9 A OLUWASEUN ADEYEMI (20s, new hire, smiling too hard) rattles a locked chest.
10 A TRIXIE VANCE (30s, sales, huge hoop earrings) leans on the sarcophagus, scrolling her phone.
11 D BRENDA: Okay, team, okay. Let's circle up. Circle up!
12 A ¶ Nobody circles.
13 A Brenda circles herself.
* 14 A The timer reads 03:58.
15 D KAREEM: Brenda, there's a chest.
16 D BRENDA: Great. Oluwaseun, open the chest.
17 D OLUWASEUN: It's locked.
18 D BRENDA: Then unlock it.
19 D OLUWASEUN: With what?
20 D BRENDA: With teamwork!
21 A ¶ Fenella steps to the table, takes a scrap of papyrus from her pocket, and lays it flat.
22 A Kareem leans over it, and Trixie pockets her phone and drifts over, and Oluwaseun abandons the chest.
23 A All four heads converge, and Brenda, in the way of the circle, is somehow left outside it.
24 D FENELLA: It's a cipher. The sun disc means three.
25 D KAREEM: What's the jackal?
26 D FENELLA: Seven.
27 D TRIXIE: Where'd you get the paper?
28 D FENELLA: Under the sarcophagus.
29 D TRIXIE: You didn't tell us.
30 D FENELLA: Nobody asked.
31 D BRENDA: Fenella, we agreed no hoarding.
32 D FENELLA: We agreed on a synergy workshop. I'm hoarding.
33 D KAREEM: Three, seven--
34 D OLUWASEUN: Is there an eye? There's an eye on the chest.
35 D TRIXIE: Eye equals one.
36 D KAREEM: Three seven one!
37 A ¶ Oluwaseun spins the dials.
* 38 A The chest clicks open.
* 39 A Inside, a plastic scarab and a note.
40 D OLUWASEUN: It says, "The real treasure was the friends we made."
41 D BRENDA (moved): That's lovely.
42 D FENELLA: That's the worst clue I've ever read.
43 D TRIXIE: Where's the door?
* 44 A ¶ The timer reads 00:41.
45 D KAREEM: Brenda! Brenda, which wall?
46 D BRENDA: I don't know! I made an agenda, I didn't make a map!
47 A ¶ Oluwaseun begins to hum.
48 A Fenella looks at the ceiling.
49 A Trixie heaves the sarcophagus lid aside to reveal a door handle in the back, and the five of them stampede toward it, crash into each other, and tumble together in a heap on the cold fake stone.
* 50 A ¶ The timer hits zero.
* 51 A The torches go out.
52 D BRENDA [CONT'D] (in the dark): I think that went well.

### SCENE s01760 | INT. WHOLESALE FLOWER MARKET - 4 A.M.
Detected names (may be incomplete or contain aliases): AURELIO FONTANA, BEATRIX HALLORAN, JUN, NONNA
* 1 A ¶ Concrete floor slick with water and petals.
* 2 A Buckets of peonies, ranunculus, lilies stacked to the ceiling.
* 3 A Forklifts beep somewhere in the vaulted dark.
* 4 A The air smells green and cold.
5 A ¶ AURELIO FONTANA (30s, florist, rolled sleeves, thorn scratches on his forearms) lifts a bucket of white ranunculus in each hand and sets them on his cart.
6 A BEATRIX HALLORAN (30s, rival florist, canvas apron, sleeves tied around her waist) reaches for the same stems and comes up with his hand.
7 A ¶ They freeze.
* 8 A The bucket tips between them, spilling cold water over both their boots.
9 A He lunges to save it and she lunges at the same instant, and they collide, and white petals burst into the air like startled birds.
10 D AURELIO: Those were mine.
11 D BEATRIX: They were on the floor.
12 D AURELIO: In my bucket.
13 D BEATRIX: In a puddle.
14 A ¶ JUN (20s, market porter, headphones, a hand truck) rolls past, glances at them, and rolls on without comment.
15 A ¶ Aurelio's phone buzzes in his apron.
16 A He fishes it out and puts it to his ear.
17 D NONNA [V.O.] (over phone): Aurelio? Aurelio, the roses, did you get the roses?
18 D AURELIO: Nonna, it's four in the morning.
19 D NONNA [V.O.] (over phone): The wedding is at eleven. A wedding doesn't care what time it is.
20 D AURELIO: I know. I'm at the market right now.
21 D NONNA [V.O.] (over phone): Who are you with? I hear a girl.
22 A ¶ Beatrix covers a laugh.
23 A Aurelio turns his shoulder, and Beatrix picks a ranunculus from the floor and tucks it behind his ear while he is distracted.
24 D AURELIO (into phone): A colleague, Nonna.
25 D NONNA [V.O.] (over phone): Is she pretty?
26 D AURELIO: I'll call you back.
27 A ¶ He hangs up.
28 A He pulls the flower from his ear, studies it, doesn't give it back.
29 D BEATRIX: You can keep the ranunculus. But I'm taking the peonies.
30 D AURELIO: Fine.
31 D BEATRIX: And the lilies.
32 D AURELIO: Beatrix.
33 D BEATRIX: Yes?
34 D AURELIO: Whose wedding is it?
35 D BEATRIX: Mine, in a way. My sister's. Eleven o'clock.
36 D AURELIO: Ours is eleven too.
37 A ¶ They look at each other.
38 A Jun rolls past again, in the other direction, headphones still on, humming.
