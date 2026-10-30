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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0041.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s01326 | INT. TIDE-CLOCK TOWER - INSIDE A WHALE SKELETON - DUSK
Detected names (may be incomplete or contain aliases): BRAMWELL TOLLIVER, LADY SERAPHINE VANE, PIP
* 1 A ¶ A cathedral of bone.
* 2 A Ribs arch overhead like the hull of an overturned ship, strung with lanterns and rope ladders.
* 3 A At the center, a vast brass clock whose pendulum is a swinging glass bell filled with seawater.
* 4 A Each tick sloshes a silver tide across the floor.
5 A ¶ BRAMWELL TOLLIVER, 70s, tiny and bent, in a coat patched with sailcloth, oils a gear with a feather.
6 A A brass monocle sits on his nose, one lens fogged.
* 7 A ¶ The great doors boom open.
8 A LADY SERAPHINE VANE, 40s, strides in, sea-green cloak dragging a wake of damp, silver rings on every finger.
9 A Behind her trots PIP, a clockwork heron, tall as a child, copper beak clicking.
10 D BRAMWELL: You're late, Lady Vane. The tide has turned twice.
11 D SERAPHINE: The tide turns when I command it, Bramwell.
12 D BRAMWELL: Not in my tower.
13 A ¶ Pip tips her head and clicks.
14 A Seraphine sets a gloved hand on the heron's neck, and the clicking softens.
15 D SERAPHINE: Pip, quiet. He is an old man and he is frightened.
16 D BRAMWELL: I am not frightened. I am furious.
17 D PIP (a thin, whistling voice): Furious is frightened wearing boots.
18 A ¶ Bramwell laughs despite himself, a dry bark.
* 19 A The pendulum swings.
* 20 A A silver tide washes over their feet and recedes.
21 D SERAPHINE: I have come to take the Moonweight, Bramwell.
22 D BRAMWELL: The Moonweight holds the tide in its place.
23 D SERAPHINE: The tide has held long enough. The sea is tired of being told when to rise.
24 D BRAMWELL: And when it rises with no hand upon it? What then, Lady?
25 D SERAPHINE: Then it rises. And we float.
26 A ¶ Bramwell lays the feather down on the gear.
27 A He crosses to a small iron door in a rib, thumbs a latch, and takes out a lead-grey disc the size of a dinner plate.
* 28 A It hums.
29 D BRAMWELL: Forty years I tended this. My wife is buried under that floor.
30 D SERAPHINE: I know.
31 D BRAMWELL: You know. And still you ask.
32 D SERAPHINE: I do not ask, Bramwell. I came out of courtesy.
33 D PIP: Courtesy is a polite word for a knife.
34 D SERAPHINE: Pip.
35 D PIP: I only quote.
36 A ¶ Bramwell weighs the disc in both hands.
* 37 A The pendulum bell slows.
* 38 A A lantern gutters.
* 39 A Somewhere high in the ribs, a gull cries.
40 D BRAMWELL: You were a girl when you first came up those stairs. Do you remember what you asked me?
41 D SERAPHINE: I asked if the whale was still alive.
42 D BRAMWELL: And I said?
43 D SERAPHINE: That it was only sleeping.
44 D BRAMWELL: Was I lying?
45 D SERAPHINE (softly): No.
46 A ¶ She holds out both hands.
47 A Bramwell looks at the Moonweight, then at her, and his shoulders drop.
48 D BRAMWELL: Take it. Let the sea wake what it must.
49 A ¶ Seraphine receives the disc.
* 50 A Its hum deepens.
* 51 A The silver tide climbs slowly up the ribs, quieter now, and the great bell comes to rest.
52 D PIP: Is that the last tick?
53 D BRAMWELL: For tonight, small one. For tonight.
54 A ¶ Seraphine bows her head.
* 55 A The lanterns dim one by one.

### SCENE s01327 | INT. FUNICULAR CAR, MID-SLOPE - NIGHT
Detected names (may be incomplete or contain aliases): NADIA VOSKUIJLEN, SPOON, TEMBO
* 1 A ¶ A wooden cabin the size of a tram, suspended on a steel cable over a pine-black ravine.
* 2 A At the summit, the lights of an alpine observatory glow like a lit match.
* 3 A At the bottom, a sleeping village.
* 4 A In the middle, the car has stopped.
5 A ¶ NADIA VOSKUIJLEN, 30s, sits upright on the slatted bench in a stolen maintenance coverall two sizes too large.
6 A Dark hair scraped into a bun.
7 A Eyes that do not blink often.
* 8 A A hard case rests between her boots.
9 A ¶ Across from her, "SPOON" TEMBO, 50s, round-faced, soft-spoken, a retired watchmaker with a splitting grin and a spoon-handle toothpick he rolls between his teeth.
10 A He wears the same coverall, neatly pressed.
* 11 A ¶ The car sways.
* 12 A The cable creaks.
* 13 A Outside, a lonely crow lifts off the rail.
14 D SPOON: Nadia. It stopped.
15 D NADIA: I felt it.
16 D SPOON: It is not supposed to stop.
17 D NADIA: Nothing is supposed to stop, Spoon. Everything does.
18 A ¶ He leans to the window.
* 19 A Far above, a floodlight sweeps along the cable and draws near, a white bar crossing the snow.
20 D NADIA [CONT'D]: Get down.
21 A ¶ Spoon drops to the floor.
22 A She slides off the bench beside him and pulls the case in against her ribs.
* 23 A The light washes the cabin white, holds for three terrible seconds, and moves on.
24 A ¶ Neither breathes.
* 25 A The cable creaks again.
* 26 A Then a hollow clank somewhere above, and the car lurches one foot downhill and stops.
27 D SPOON (whisper): They have cut the power.
28 D NADIA: They haven't. They don't know we're here.
29 D SPOON: Then why did it stop?
30 D NADIA: Because Eddie was supposed to hold the relay and Eddie is a coward.
31 D SPOON: Eddie is a nice young man.
32 D NADIA: Eddie is a nice young man who has probably gone home.
* 33 A ¶ A relay clunks in the machinery overhead, and a distant motor begins to cycle, a slow metal countdown.
34 A Nadia's lips part.
35 A She mouths a number at Spoon: two minutes.
36 A Spoon nods slowly, his toothpick stilled.
37 A They crouch in the dark, listening to the wind comb the pines.
38 D SPOON (barely audible): Nadia. What if the vault is empty?
39 D NADIA: Then we've climbed a mountain for nothing.
40 D SPOON: I like nothing. I have a great deal of it at home.
41 A ¶ She almost laughs.
42 A She presses the back of her hand to her mouth.
* 43 A ¶ The brake releases with a long sigh.
* 44 A The cable tightens.
* 45 A The car begins to glide uphill again, smooth as milk, and the tension in the cabin goes out of both of them like air from a bellows.
46 A Spoon sits back up on the bench.
47 A Nadia slumps against the wall.
48 D SPOON [CONT'D]: My heart, I think it left in the last minute.
49 D NADIA: Mine's in the case.
50 A ¶ She taps the lid.
51 A He chuckles, a warm sound in a cold box.
* 52 A ¶ The observatory grows larger in the window.
* 53 A Its dome opens like an eye.
54 D NADIA [CONT'D]: When we step out, you're not Spoon anymore.
55 D SPOON: No?
56 D NADIA: You're Doctor Aurelio Stahl, from the Geneva office.
57 D SPOON (a deep, pompous voice): Doctor Stahl, at your service.
58 D NADIA: Lower.
59 D SPOON (lower still): Doctor Stahl, at your very humble service.
60 A ¶ She shakes her head.
* 61 A The car glides into the station.
* 62 A Doors hiss open on yellow light and the smell of machine oil.
63 D NADIA: Shoulders back, Doctor.
64 D SPOON: Spoons are always bent, my dear. But I will try.
65 A ¶ They step out together into the light.

### SCENE s01328 | INT. VELODROME INFIELD - EVENING
Detected names (may be incomplete or contain aliases): MO, DALY, TAMSIN ROYCE, YUKI MORIMOTO
* 1 A ¶ The wooden bowl rises steeply on every side.
* 2 A A string of fluorescent tubes buzzes overhead.
* 3 A In the infield, three women huddle by a rack of carbon bikes.
4 A ¶ MAUREEN "MO" DALY, 50s, stopwatch lanyard, windbreaker faded to pink, stands with a whistle between her teeth.
5 A TAMSIN ROYCE, 20s, long braid, helmet buckled tight, grips a bike by the saddle.
6 A YUKI MORIMOTO, 20s, shorter, quicker, shakes out her legs one at a time.
7 D MO (to everyone): Listen up. Relay swap is at the red line. Not before it, not after. At the line.
8 A ¶ Tamsin nods.
9 A Yuki doesn't.
10 D MO [CONT'D] (to Yuki): You hear me, Morimoto?
11 D YUKI: I hear you.
12 D MO: Then say it.
13 D YUKI: Red line.
14 A ¶ Mo pulls the whistle out.
15 A She turns to the stopwatch and mutters at it.
16 D MO (to herself): Please, please just once, don't lie to me.
* 17 A ¶ The whistle blows.
18 A Tamsin swings a leg over and pushes off, wheels humming on the boards.
19 A Yuki clips in and rolls to the start of the swap zone.
20 D TAMSIN (shouting as she passes): Ready!
21 D YUKI: Go!
22 A ¶ Tamsin sprints a full lap, the bowl a blur behind her.
23 A Yuki pedals up the banking, eyes on her partner's back wheel.
24 A Mo clicks the watch, murmuring.
25 D MO (to herself): Come on, come on.
* 26 A ¶ The swap.
27 A Tamsin's hand lands on Yuki's hip and shoves.
28 A Yuki surges.
* 29 A For three pedal strokes everything is perfect.
30 A ¶ Then Tamsin's rear wheel clips Yuki's front.
* 31 A A shriek of carbon.
32 A The bikes tangle and both riders go down, sliding along the boards in a spray of splinters.
33 D MO [CONT'D] (to everyone, a roar): Stop! Everybody stop!
* 34 A ¶ Silence except for a wheel spinning.
35 A Tamsin sits up first, rubbing her hip.
36 A Yuki lifts her head, helmet scuffed.
37 D YUKI (laughing): I swapped on the line.
38 D TAMSIN: You swapped on my foot.
39 D MO (to Yuki): You okay?
40 D YUKI: She hit me.
41 D MO (to Tamsin): You?
42 D TAMSIN: Fine. Mostly.
43 A ¶ Mo lets out a breath and sits on the boards.
44 A She stares at the stopwatch.
45 D MO (to herself): Best time of the season. Unbelievable.

### SCENE s01329 | INT. ABANDONED PLANETARIUM, LOBBY - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR NKECHI ADEYEMI
* 1 A ¶ A dead ticket booth.
* 2 A A mural of the solar system, flaking.
* 3 A On the counter, an old answering machine with its red light blinking.
* 4 A ¶ The machine clicks.
* 5 A A tape whirs.
6 D NKECHI [V.O.] (recorded, level): If you are hearing this, the dome is unlocked. Come alone. Do not touch the projector.
* 7 A ¶ The tape ends.
* 8 A Silence.
* 9 A A fluorescent tube ticks.
* 10 A Then the heavy front door scrapes open.
11 A ¶ INSPECTOR NKECHI ADEYEMI, 40s, crosses the threshold in a dark raincoat, flashlight held low, badge clipped to her belt.
12 A Short hair.
13 A A face that wastes no expression.
14 A ¶ She stops at the counter.
15 A Looks at the machine.
16 A Presses play.
17 D NKECHI [V.O.] (recorded, level): If you are hearing this, the dome is unlocked. Come alone. Do not touch the projector.
18 A ¶ She presses stop, pockets the tape, and trains her flashlight on the doors of the dome.
19 D NKECHI (to herself): I never left this message.
20 A ¶ She pushes open the dome door.
* 21 A The beam falls across rows of empty seats.

### SCENE s01330 | INT. STALLED ICE CREAM TRUCK, BACK COMPARTMENT - AFTERNOON
Detected names (may be incomplete or contain aliases): GRAN ODALYS, RUPERT, BEANS
* 1 A ¶ A hot steel box lined with freezer lids.
* 2 A A melting puddle on the floor.
* 3 A Two stools bolted to the wall.
4 A ¶ GRAN ODALYS, 70s, big sunglasses and a flowered housedress, sits with her purse on her lap.
5 A RUPERT, 8, called BEANS, swings his legs and licks a cone gone soft.
6 D GRAN ODALYS: Beans, I told you not to touch the dials.
7 D BEANS: I only touched one.
8 D GRAN ODALYS: That's how trucks stop, baby.
9 D BEANS: Gran, the truck stopped before I touched it.
10 D GRAN ODALYS: Don't be smart with me. Your mother is smart with me enough for the whole family.
11 D BEANS: Are we gonna melt?
12 D GRAN ODALYS: We are going to wait. Mr. Delacroix is fetching a wrench.
13 D BEANS: Mr. Delacroix drives the truck and he doesn't have a wrench?
14 D GRAN ODALYS: Mr. Delacroix has many wrenches. He has lost them.
15 D BEANS: That's dumb.
16 D GRAN ODALYS: Say that to him and you walk home.
17 D BEANS: It's eleven miles.
18 D GRAN ODALYS: Then be nice.
19 D BEANS: Gran, can I tell you something?
20 D GRAN ODALYS: Always.
21 D BEANS: I didn't get the part in the play.
22 D GRAN ODALYS: Oh, Beans. Come here.
23 D BEANS: I'm not crying.
24 D GRAN ODALYS: I know you're not. I only want to hold something sticky.
25 D BEANS: I got to be the tree.
26 D GRAN ODALYS: A tree is an important part.
27 D BEANS: Trees don't talk.
28 D GRAN ODALYS: That's their secret. Everyone else is too busy talking to notice who's holding the stage up.
29 D BEANS: You're making that up.
30 D GRAN ODALYS: I'm seventy-six, baby. I'm allowed.
31 D BEANS: Okay. I'll be the best tree.
32 D GRAN ODALYS: That's my Beans.
33 D BEANS: Gran?
34 D GRAN ODALYS: Mm?
35 D BEANS: Your purse is dripping.
36 D GRAN ODALYS: Lord have mercy. Who put the pistachio in my purse?
37 D BEANS (giggling): You did, Gran!

### SCENE s01331 | INT. HOUSEBOAT GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): ISADORA, CALLUM, PRUDENCE, WENDELL
* 1 A ¶ Cramped.
* 2 A Warm.
* 3 A A table set for four, lamp swaying on its chain.
* 4 A Rain ticks on the portholes.
5 A ¶ ISADORA, 30s, serves a stew.
6 A Her brother CALLUM, 30s, lopes in sock feet, loose and smiling.
7 A Their mother PRUDENCE, 60s, sits ramrod straight at the head.
8 A Her husband-in-law WENDELL, 60s, quiet, folds a napkin into thirds.
9 A ¶ They eat.
* 10 A Spoons clink.
11 A Prudence compliments the stew.
12 A Callum compliments Prudence.
13 A Wendell compliments the weather.
14 D CALLUM: Good rain.
15 D PRUDENCE: It keeps the river honest.
16 D WENDELL: Pass the bread, Callum.
17 A ¶ Callum passes it.
18 A Isadora refills a glass.
19 A Her hand is steady.
20 A She pours slow.
21 D ISADORA: Mama, I've been meaning to ask.
22 D PRUDENCE: Mm.
23 D CALLUM: How's the boat's engine, Wendell?
24 D WENDELL: Runs.
25 D ISADORA: Mama, about the deed.
26 D PRUDENCE: Not at supper.
27 D CALLUM: Dora, leave it.
28 D ISADORA: She sold it, didn't she.
29 D WENDELL: Isadora, sit down.
30 D ISADORA: I am sitting.
31 D PRUDENCE: I sold the lot. Not the boat.
32 D CALLUM: You what?
33 D PRUDENCE: It was mine to sell.
34 D ISADORA (over her): It was Daddy's.
35 D WENDELL (over Isadora): It was never Leland's.
36 D CALLUM: Wait. Wait. Who bought it?
37 D PRUDENCE: Wendell did.
* 38 A ¶ Silence.
* 39 A The lamp sways.
40 A He sets the napkin by his plate.
41 A He does not look at either of them.
42 A She picks up her glass and drinks the whole thing.
43 A He stands, goes to the porthole, and watches the rain.
44 D ISADORA: Say something, Callum.
45 D CALLUM: I'm having more stew.

### SCENE s01332 | INT. FIELD KITCHEN IN A RUINED OPERA HOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CAPTAIN ANNELIES DE VRIES, BEL, CORPORAL EZRA PRYCE, PRIVATE LUCIEN BEAUMONT, SUNDARAM, WRÓBEL
* 1 A ¶ Plaster cherubs on the ceiling, dust on the velvet seats.
* 2 A In the orchestra pit, a canvas-covered stove ticks and hisses.
* 3 A A gaping hole in the roof lets a shaft of watery sunlight fall onto the stage, where a dozen mess tins steam in a row.
4 A ¶ CAPTAIN ANNELIES DE VRIES, 40s, reading glasses pushed up into gray-blond hair, leans on a conductor's stand with a ledger.
5 A SERGEANT IGNACY WRÓBEL, 50s, thick mustache, stirs a vat of barley soup with an oar-length spoon.
6 A CORPORAL EZRA PRYCE, 20s, peels potatoes on the lip of the stage with excruciating care.
7 A PRIVATE LUCIEN BEAUMONT, 19, sits in the first row with a rifle across his knees and a tin of cigarettes he is not allowed to open.
8 A PRIVATE "DOC" SUNDARAM, 30s, a medic with a faded red cross on his sleeve, picks his way down the aisle holding a crate of tinned peaches.
* 9 A ¶ The distant guns thud, soft as a bass drum in another building.
* 10 A Nobody reacts.
11 D DE VRIES (to the room): Mess in ten minutes. Tins out, men. Boots off the seats.
12 A ¶ Beaumont lowers his boots.
13 A Pryce nods without looking up.
14 A Wróbel taps the spoon on the rim of the vat, the rhythm of a conductor calling an overture.
15 D WRÓBEL (to Pryce): Thinner, Corporal. That peel is thick enough to roof a barn.
16 D PRYCE: Sergeant, the potatoes are rotten.
17 D WRÓBEL: Then peel the rotten out of them.
18 A ¶ Doc Sundaram sets the crate on the stage, pries off a lid with his thumbnail, lifts a peach out, and sniffs it.
19 A He glances at the captain, shrugs, and eats a piece with his fingers while Beaumont watches with open longing and Pryce holds out a hand until Doc drops a slice into it, and the sergeant pretends not to see any of it, stirring a little harder.
20 D SUNDARAM (muttering): Best thing I've eaten since Naples.
21 D DE VRIES: Doc, you'll share that with the ward.
22 D SUNDARAM: Always, Captain.
23 A ¶ She makes a mark in her ledger.
* 24 A A flake of plaster drifts down from the ceiling and lands on the page.
25 A She blows it away.
26 D BEAUMONT: Captain, is it true there's a piano under the stage?
27 D DE VRIES: There is.
28 D BEAUMONT: Does anyone play?
29 D DE VRIES: Not since the third.
30 D WRÓBEL (to the soup): I played in Kraków once. Badly.
31 D PRYCE: You, Sergeant?
32 D WRÓBEL: Everyone plays badly in Kraków. It is the national style.
33 A ¶ Pryce grins into his peel.
34 A Beaumont laughs, then covers his mouth as if it were illegal.
* 35 A Somewhere far away a shell lands, long and low.
* 36 A The chandelier overhead shivers, then stills.
37 D DE VRIES (to the room): Steady. That was ours.
38 D SUNDARAM (muttering): Always theirs when it's close.
39 D WRÓBEL: Tins! Line up. If you can't hold a tin, hold a spoon.
40 A ¶ They shuffle onto the stage, one after another, and form a ragged line in the weak sun.
41 A Wróbel ladles.
* 42 A Steam rises from each tin into the beam of light, and for a moment the whole ruined theater looks like a painting of a feast.
43 D PRYCE (quietly): Captain, what do we do when it's over?
44 D DE VRIES: Eat.
45 D PRYCE: And after that?
46 D DE VRIES: After that, Corporal, we peel more potatoes.

### SCENE s01333 | EXT. LIFEBOAT, OPEN SEA - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN HESS, YOUNG PETER, ADEBAYO, COOK, DMITRI, LENKA, TOBIAS
1 A ¶ Six figures crowd a seven-man boat.
* 2 A Grey swell.
* 3 A No land.
* 4 A A water jug sits empty at the center thwart.
5 A ¶ CAPTAIN HESS, 50s, scorched face, holds the tiller.
6 A YOUNG PETER, 15, bails with a tin cup.
7 A MRS. ADEBAYO, 60s, clutches a sodden prayer shawl.
8 A THE COOK, DMITRI, 40s, rows alone on the left oar.
9 A LENKA, 20s, lies curled in the bow with a bandaged leg.
10 A And TOBIAS, 30s, sits with his hands over his face.
11 A ¶ Dmitri pulls, the oar bows and cracks, and Hess grabs the tiller as Peter lunges for the cup, Mrs. Adebayo shifts to steady Lenka, and Tobias lifts his head.
12 D HESS: Easy, Dmitri. We lose that oar, we lose the day.
13 D DMITRI: We lost the day last night, Captain.
14 D MRS. ADEBAYO: Peter, give me the cup. You'll wear your arm off.
15 D PETER: I'm fine, Mrs. Adebayo.
16 D TOBIAS: Is that smoke, Lenka? Do you see it?
17 D LENKA: It's cloud.
18 D TOBIAS: It looks like smoke.
19 D LENKA: Then I'm sorry, Tobias.
20 D HESS: Nobody drinks seawater. Nobody.
21 D DMITRI: Captain, nobody did.
22 D HESS: Then we're alive, aren't we?
* 23 A ¶ Silence.
* 24 A The swell lifts the boat and sets it down.

### SCENE s01334 | INT. TELEGRAPH RELAY STATION, RICE-PADDY DIKE - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT KOJI NAKAGAWA, MWANGI, LOCAL WOMAN, MAI LIEN
* 1 A ¶ A mud-brick hut on stilts.
* 2 A Lantern.
* 3 A Wires leading out the window into the dark.
* 4 A Frogs outside.
5 A ¶ LIEUTENANT KOJI NAKAGAWA, 30s, sits at the key with a headset and a pencil behind his ear.
6 A Corporal Obuya MWANGI, 20s, squats by the door with a carbine.
7 A An old LOCAL WOMAN, MAI LIEN, 60s, sets down a pot of tea at the table and steps back into the shadows.
8 A ¶ He taps a message.
* 9 A The sounder clatters back.
10 A He writes it down.
11 A ¶ Mwangi watches the woman.
12 A She watches the floor.
13 A The lieutenant tears the page off the pad and folds it into his breast pocket.
14 D KOJI: Corporal. Tea.
15 D MWANGI: Sir.
16 A ¶ He pours two cups.
17 A He sets one in front of the lieutenant and keeps the other, cold, in his hand.
18 A He does not drink.
19 A The woman looks at the cup, then at the door, then away.
20 D KOJI (without turning): Ask her how far the next village is.
21 D MWANGI: She doesn't speak English, sir.
22 D KOJI: Ask anyway.
23 A ¶ Mwangi turns, mouths a few halting words in her language.
24 A She answers with two fingers, then three, then folds her hands.
25 A He looks back at the lieutenant.
26 D MWANGI: Two hours. Maybe three.
27 D KOJI: Thank you.
28 A ¶ He taps again.
* 29 A The sounder answers.
30 A He writes.
* 31 A Outside, the frogs stop all at once.
32 A Mwangi's thumb finds the safety on the carbine.
33 A The woman's fingers find the rim of the teapot and rest there, perfectly still.
34 D KOJI [CONT'D] (very quietly): Corporal.
35 D MWANGI: I hear it, sir.
36 D KOJI: Finish your tea.
37 A ¶ Mwangi lifts the cup and drinks it to the bottom.
38 A Koji lays down the pencil.
* 39 A The lantern flame leans, leans, and steadies.

### SCENE s01335 | EXT. ULTRAMARATHON AID STATION, MOUNTAIN PASS - NIGHT
Detected names (may be incomplete or contain aliases): BERNARD OYELARAN, SIPHO DLAMINI, DISPATCH
* 1 A ¶ A folding table under a tarp.
* 2 A Headlamps bob in the dark.
* 3 A A thermos steams.
* 4 A A radio sits on a camp chair, its antenna taped to a tent pole.
5 A ¶ BERNARD OYELARAN, 60s, volunteer, parka zipped to the chin, fills paper cups with broth.
6 A He hums.
7 A ¶ SIPHO DLAMINI, 30s, jogs into the circle of light in a reflective vest, number 112 pinned to his shirt.
8 A He is breathing easily.
9 A He stops at the table and takes a cup.
10 D BERNARD: Evening, runner. How are the legs?
11 D SIPHO: Honestly? Perfect.
12 D BERNARD: That's the broth. The broth cures everything.
13 D SIPHO: It's a good broth.
14 D BERNARD: Name and bib?
15 D SIPHO: Sipho Dlamini, one-twelve.
16 A ¶ Bernard checks his clipboard.
17 A He frowns.
18 A Then smiles, and ticks a box.
19 D BERNARD: Got you. You're fourth.
20 D SIPHO: Fourth.
21 D BERNARD: Eight minutes behind the leader.
22 D SIPHO: I'll catch her.
* 23 A ¶ The radio crackles.
24 A Both men glance at it.
25 D DISPATCH [O.S.] (a woman's voice, crisp): Station Nine, this is Control. Come in, please.
26 A ¶ Bernard picks up the handset.
27 D BERNARD: Control, Station Nine. Go ahead.
28 D DISPATCH [O.S.]: Bernard, I'm showing runner one-twelve on the shuttle manifest at mile thirty-one. Do you have him?
29 A ¶ Bernard looks at Sipho.
30 A Sipho finishes his broth.
31 A He sets the cup down, gently, as if putting down a gift.
32 D BERNARD (into radio): Control, say again?
33 D DISPATCH [O.S.]: One-twelve took the shuttle from thirty-one to thirty-eight. He's flagged for disqualification. Do you copy?
34 A ¶ Bernard lowers the handset.
* 35 A The wind pulls at the tarp.
36 D SIPHO: It was cold.
37 D BERNARD: Son.
38 D SIPHO: My knee went.
39 D BERNARD: Your knee went in the car?
40 A ¶ Sipho laughs without humor.
41 A He unpins the number from his shirt and puts it on the table.
42 A Then he reaches for a second cup of broth.
43 D SIPHO: May I?
44 D BERNARD: Take it.

### SCENE s01336 | EXT. FROZEN WATERFALL BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): SIR ALARIC VENN, BRYNJOLF
* 1 A ¶ A bridge of ice spans a gorge where a waterfall hung and froze mid-fall.
* 2 A Blue light from within the ice.
* 3 A A thousand-foot drop on either side.
4 A ¶ SIR ALARIC VENN, 40s, silver cuirass, cloak crusted with frost, edges out from the south bank.
5 A At the north end stands BRYNJOLF, 40s, bear-furred, axe on his shoulder, beard threaded with icicles.
6 A ¶ They meet in the middle.
7 A Both stop.
8 D ALARIC: Brynjolf.
9 D BRYNJOLF: Alaric.
10 D ALARIC: Cold morning for a duel.
11 D BRYNJOLF: Cold men fight best.
12 D ALARIC: You came alone.
13 D BRYNJOLF: So did you.
* 14 A ¶ A silence.
* 15 A Beneath them, the ice groans, a long deep song.
16 A Neither flinches.
17 D ALARIC: I'd like to cross.
18 D BRYNJOLF: I'd like the same.
19 D ALARIC: Then you step back.
20 D BRYNJOLF (at the same time): Then you step aside.
21 A ¶ They both stop.
22 A Both smile, thinly.
23 A Alaric tilts his head.
24 A Brynjolf mirrors it.
25 D BRYNJOLF [CONT'D] (at the same time): We might freeze here.
26 D ALARIC (at the same time): We might both freeze.
27 A ¶ Brynjolf laughs, short and sharp.
28 A He lowers the axe.
29 A Alaric lowers his hand from the sword hilt.
* 30 A A crack travels beneath their feet.
31 A ¶ They freeze.
* 32 A The crack runs between them, glittering, and stops.
33 A They look down, then at each other.
34 D ALARIC [CONT'D]: That was not me.
35 D BRYNJOLF: It was not me.
36 D ALARIC: Then who?
* 37 A ¶ Above Alaric, a pillar of ice breaks loose from the cliff.
38 A Brynjolf sees it first.
39 A He lunges.
40 A He pulls Alaric down.
* 41 A The pillar shatters on the bridge where Alaric stood.
42 A The two men roll across the planks, and when they stop, each has a hand on the other's throat.
43 D ALARIC [CONT'D] (strangled): You pulled me down.
44 D BRYNJOLF (strangled): You were standing there.
45 A ¶ They let go.
46 A Both gasp in the thin air.
* 47 A Wind whistles.
48 D BRYNJOLF [CONT'D]: The bridge is breaking.
49 D ALARIC: Then we cross together.
50 A ¶ They help each other up.
* 51 A The bridge sings.

### SCENE s01337 | INT. LIGHTHOUSE KEEPER'S PARLOR - NIGHT (1888)
Detected names (may be incomplete or contain aliases): MADAME CORDELIA OSTERHOUT, COMMODORE ARCHIBALD FENN, LADY MIRIAM FENN, KEEPER ISAIAH TULL, MISS THEODORA CRANE, BARNABY
* 1 A ¶ Oil lamps.
* 2 A Wind shaking the shutters.
* 3 A A round table draped in black velvet with a candle at its heart.
* 4 A Six chairs.
5 A ¶ MADAME CORDELIA OSTERHOUT, 50s, medium, in a high-collared gown.
6 A COMMODORE ARCHIBALD FENN, 60s, whiskers, pocket watch.
7 A LADY MIRIAM FENN, 40s, his wife, gloved hands folded.
8 A KEEPER ISAIAH TULL, 50s, oilskin coat, scowling.
9 A A young MISS THEODORA CRANE, 20s, notebook in her lap.
10 A And BARNABY, 12, the keeper's boy, crouched on the stair.
11 A ¶ Madame Osterhout closes her eyes.
* 12 A The candle gutters.
* 13 A The table gives a small knock.
14 A The Commodore checks his watch.
* 15 A The knock repeats.
16 D MADAME OSTERHOUT: Is there a spirit in this room?
* 17 A ¶ Knock.
18 D COMMODORE FENN: Is that you, Edmund?
* 19 A ¶ Knock.
20 D LADY MIRIAM: Archibald, stop.
21 D COMMODORE FENN: Edmund, if it is you, rap three times.
22 D LADY MIRIAM: He is dead, Archibald. Let him be.
* 23 A ¶ Three knocks, steady.
24 A Miriam's gloves tighten.
25 A Theodora writes.
26 A Tull stares at the floorboards.
27 A Barnaby's face withdraws from the stair.
28 D KEEPER TULL: That's the tide, sir. The tide moves the rock.
29 D MADAME OSTERHOUT (eyes closed): The tide is not what moves tonight.
* 30 A ¶ The candle flame lies flat.
* 31 A A gust blows through the room.
* 32 A The lamps dim.
33 A Miriam stands, lifts her chin, and walks out onto the gallery.
* 34 A The door bangs after her.
35 A ¶ The Commodore starts to rise.
36 A Tull's hand lands on his arm.
37 A Madame opens her eyes.
38 A She looks at Theodora, who is not writing now.
39 D MADAME OSTERHOUT [CONT'D] (to Theodora, flat): You did not tell me she was your mother.
40 A ¶ Theodora lowers her pen.

### SCENE s01338 | EXT. SELF-SERVE CAR WASH - DUSK
Detected names (may be incomplete or contain aliases): PILAR MOSQUERA, ANTON
* 1 A ¶ A concrete bay, wet and humming.
* 2 A Neon over the coin box.
* 3 A Foam slides down a windshield.
4 A ¶ PILAR MOSQUERA, 30s, in a rain jacket, holds a pressure wand in one hand and her phone in the other.
5 A She is rinsing a green hatchback with great care.
6 D PILAR (into phone, light): No, it's fine. I'm rinsing. It's very dramatic.
7 D ANTON [V.O.] (warm, over the phone): Pilar, you sound happy.
8 D PILAR: I am happy. Is that suspicious?
9 D ANTON [V.O.]: It's a little suspicious.
10 A ¶ She laughs.
11 A She sprays the back bumper, then the tires.
12 D PILAR: Did you get the table?
13 D ANTON [V.O.]: Seven-thirty. The one by the window.
14 D PILAR: You remembered I like the window.
15 D ANTON [V.O.]: I remember everything.
16 A ¶ Her smile holds a half beat too long.
17 A She turns off the wand.
* 18 A Water drips.
19 D PILAR: Anton. The window table. That's where you proposed to Rosa.
* 20 A ¶ A long silence on the line.
* 21 A A distant horn.
22 D ANTON [V.O.]: I thought it'd be nice.
23 D PILAR: It would be nice. For her.
24 A ¶ She opens the car door, slides into the driver's seat, and sets the phone on the dashboard.
* 25 A Foam slides off the windshield and the world goes bright white.
26 D PILAR [CONT'D] (into phone): I'll see you at seven-thirty.

### SCENE s01339 | INT. FLORIST'S COLD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HARLOW QUINN, CAPTAIN WREN
* 1 A ¶ A walk-in refrigerator, ranks of white buckets, a hundred roses breathing out their sweetness.
* 2 A Frost on the shelves.
* 3 A A single bulb in a wire cage, humming.
4 A ¶ DETECTIVE HARLOW QUINN, 40s, kneels on the tile in a camel coat, breath fogging.
* 5 A A black glove is wrapped around one finger of a dead man's hand, which has been laid on a bucket of lilies like an offering.
6 A She sets a small pen torch between her teeth and parts the lilies.
* 7 A ¶ Her cell phone rings, shrill in the cold.
8 A She flinches, spits the torch into her palm, and answers.
9 D QUINN (low): Quinn.
10 D CAPTAIN WREN [V.O.] (over the phone, brisk): Where are you?
11 D QUINN: Cold room, Marlow's Flowers.
12 D CAPTAIN WREN [V.O.]: Alone?
13 D QUINN: Yes.
14 D CAPTAIN WREN [V.O.]: Get out. Now. She's on her way.
15 D QUINN: Who's on her way?
16 D CAPTAIN WREN [V.O.]: The florist. She's got a key. She's been on the phone with me for a minute, she's furious, she wants you off her property.
17 D QUINN: Captain, the body's in her fridge.
18 D CAPTAIN WREN [V.O.]: Then you've got two minutes, Harlow.
19 A ¶ Quinn snaps the torch back into her teeth.
* 20 A A latch clicks somewhere beyond the door.
21 A She goes still.
* 22 A The bulb hums.
* 23 A A shadow slides across the frosted glass.
24 D QUINN (muttering around the torch): She's already here.
* 25 A ¶ The handle turns.
* 26 A The door opens a crack.
27 A ¶ Quinn doesn't move.
* 28 A A rose petal drifts down onto the dead man's hand.
29 D CAPTAIN WREN [V.O.]: Harlow? Talk to me.
* 30 A ¶ The door swings wide.
* 31 A Light spills in.
32 A Quinn lifts the phone to her ear and does not look up.
33 D QUINN: She's here.

### SCENE s01340 | INT. GRAIN ELEVATOR, NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): ODELIA FINCH, BIG ROY MALLORY, DEZ, PARRISH
* 1 A ¶ A cathedral of concrete silos.
* 2 A Dust hangs in the lamplight like pollen.
* 3 A Belts clank.
* 4 A Somewhere deep in the dark, grain pours with a sound like breathing.
5 A ¶ ODELIA FINCH, 30s, hard hat, headlamp, clipboard, stands on a steel catwalk twenty feet up.
6 A Below her, BIG ROY MALLORY, 50s, bearded, sleeves rolled, rakes a heap of wheat from a hopper.
7 A And in the doorway of the control shed, DESMOND "DEZ" PARRISH, 20s, a new hire, grips a thermos like a rosary.
8 D ODELIA: Roy, bin four is reading empty.
9 D BIG ROY: Bin four's full. I filled it myself at six.
10 D ODELIA: The gauge says empty.
11 D BIG ROY: Gauge is lying.
12 D DEZ: Miss Finch, I heard something in four.
13 D ODELIA: What kind of something, Dez?
14 D DEZ: A knocking.
15 D BIG ROY: It's the wheat settling, kid.
16 D DEZ: It was knocking back.
* 17 A ¶ Silence.
* 18 A The grain pours in the dark.
19 A Odelia's headlamp swings across the silo hatch.
20 A Big Roy leans on the rake and does not smile.
21 D BIG ROY: Odelia. Don't open the hatch.
22 D ODELIA: Roy, why not?
23 D BIG ROY: Because I didn't fill it at six.
24 A ¶ He sets the rake against the hopper.
25 A His hands are shaking.
26 A Odelia climbs down the ladder, rung by rung, and crosses to the hatch.
27 D DEZ: Miss Finch. Please.
28 D ODELIA: Dez, go home.
29 D DEZ: The truck's at the other end of the lot.
30 D ODELIA: Then run.
31 A ¶ He doesn't.
32 A Odelia grips the wheel on the hatch.
* 33 A From inside the silo comes three slow knocks.
34 A She drops her hand.
35 A Big Roy lets out a breath that is half a sob.
36 D BIG ROY: It's been knocking since June.
37 D ODELIA: Why didn't you say?
38 D BIG ROY: Because nobody asked it what it wanted.
* 39 A ¶ The hatch wheel turns on its own.
* 40 A Slowly.
* 41 A One quarter turn.
* 42 A The headlamp flickers and goes out.

### SCENE s01341 | INT. MONASTERY WINE CELLAR - EVENING
Detected names (may be incomplete or contain aliases): STRANGER, BROTHER AMBROSE, LUKAS, SERGEANT VOGEL, CAPTAIN ISOLDE KESSLER
* 1 A ¶ Barrel vaults of ancient brick, sweating with damp.
* 2 A Rows of oaken casks stretch away into shadow like sleeping animals.
* 3 A One candle, stuck on a keg, throws a trembling gold circle onto the flagstones.
4 A ¶ A wounded soldier in a torn gray greatcoat sits slumped against a cask with his boots off and a filthy bandage around his thigh.
5 A He is a STRANGER to this place, forty, unshaven, eyes sharp even in pain.
6 A His rifle lies across his lap, its muzzle pointed at the stairs.
7 A ¶ On the stairs, a pair of old sandals descends.
8 A BROTHER AMBROSE, 70s, white-haired, in a brown habit patched at the knee, carries a bowl of broth and a loaf of black bread.
9 A He stops three steps from the bottom.
10 D BROTHER AMBROSE: I have brought supper.
11 A ¶ The Stranger does not answer.
12 A The rifle does not move.
13 D BROTHER AMBROSE [CONT'D]: You may shoot me after you eat. It would be a waste to shoot me before.
14 D STRANGER: Put it on the floor.
15 A ¶ Ambrose sets down the bowl and bread on the bottom step.
16 A He retreats.
17 A The Stranger drags himself forward, takes the bowl, drinks, hands shaking.
18 A He tears the bread with his teeth.
19 D BROTHER AMBROSE: There is a doctor in the village. He is not one of yours, but he is a good doctor.
20 D STRANGER: My own doctors are dead.
21 D BROTHER AMBROSE: All of the doctors are dead, my son. The ones left are only men.
22 A ¶ The Stranger studies him.
23 A His shoulders sag a fraction.
24 A He sets the bowl down.
25 D STRANGER: Lukas. My name is Lukas.
26 D BROTHER AMBROSE: Lukas. I am Ambrose.
27 D LUKAS: The monks, are there others?
28 D BROTHER AMBROSE: Eleven. Upstairs. Praying for rain.
29 D LUKAS: It will rain.
30 D BROTHER AMBROSE: It always does. Then the walls weep.
31 A ¶ Footsteps overhead.
32 A Boots, many pairs, ringing on flagstone.
33 A A voice barks a command in another tongue.
* 34 A Dust sifts from the ceiling into the candle.
35 A ¶ Lukas lifts the rifle.
36 A Ambrose raises both palms.
37 D BROTHER AMBROSE [CONT'D]: They are not yours.
38 D LUKAS: They are not yours either.
39 A ¶ Lukas turns to the cask beside him and puts a hand on the bung.
40 A Ambrose watches, grave.
41 A The boots stop above the cellar door.
* 42 A A latch clanks.
43 D BROTHER AMBROSE: Lukas, in the name of God, put it down.
44 D LUKAS: Ambrose, in the name of God, hide.
45 A ¶ Ambrose does not move.
46 D SERGEANT VOGEL [O.S.] (from above, gruff): Captain! The cellar door is unbarred!
* 47 A ¶ The door cracks open at the top of the stairs.
* 48 A A thin white line of lamplight falls down the steps.
49 A ¶ CAPTAIN ISOLDE KESSLER, 30s, black coat, officer's cap, steps through.
50 A A pistol in her gloved hand, held low.
51 A She descends, slowly, boots ringing, into the candlelight.
52 D KESSLER (calm, accented): Good evening, Brother. Good evening, soldier.
53 D LUKAS: Good evening, Captain.
54 D KESSLER: You are bleeding on the church's floor.
55 D LUKAS: Forgive me.
56 A ¶ She stops on the bottom step.
57 A Looks at the bowl, the bread, the rifle.
* 58 A A very long silence.
59 D KESSLER: Brother Ambrose, I came to count the casks. I find only eleven.
60 D BROTHER AMBROSE: There were twelve, Captain.
61 D KESSLER: And the twelfth?
62 D BROTHER AMBROSE: The twelfth is a man.
63 A ¶ Kessler lowers the pistol an inch.
64 A Lukas does not lower the rifle.
* 65 A The candle gutters.
* 66 A Overhead, thunder rolls.
67 D KESSLER: Soldier, it is raining.
68 D LUKAS: It always does.
69 A ¶ She turns her head to the stairs and listens.
70 A Beyond the door, her men shuffle.
71 D KESSLER (to the cellar, quietly): There is no one here. Resume the search upstairs.
72 A ¶ The boots retreat.
* 73 A The latch closes.
74 A Kessler holsters the pistol.
75 A She sits on the step, takes off her cap, and runs her hand through her hair.
76 D KESSLER [CONT'D]: Eat. All of you.

### SCENE s01342 | INT. HYDROPONIC BAY, GENERATION SHIP HALCYON - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): OKONKWO, LIRA PETROVA, HAMASAKI, TEODORO, GIRL, MBEKI, NEWT
* 1 A ¶ Green racks, pink grow-lights, mist.
* 2 A A long table of lettuces.
* 3 A Four crew in coveralls prune and murmur.
4 A ¶ OKONKWO, 40s, ties off a vine.
5 A LIRA PETROVA, 20s, weighs a tomato.
6 A DR. HAMASAKI, 60s, taps a tablet.
7 A TEODORO, 30s, wipes a lens.
* 8 A Nobody hurries.
9 D OKONKWO: Third rack's leaning.
10 D LIRA: The blue lamp's out.
11 D TEODORO: I'll fix it.
12 D DR. HAMASAKI: Don't fix it. Replace it.
* 13 A ¶ A hatch hisses.
14 A A small GIRL, 12, ship-born, hair in two buns, steps in hugging a bucket.
15 A She sets the bucket down and every head turns.
16 D OKONKWO: You're off-shift, little one.
17 D GIRL: I brought worms.
18 D TEODORO: What's your name again?
19 D GIRL: Newt.
20 A ¶ MBEKI, 50s, the bay chief, steps out from behind a rack with a pruning knife.
21 D MBEKI: Newt. Mind the mist.
22 D LIRA (over Okonkwo): Good worms.
23 D TEODORO (over Lira): How many, Newt?
24 D DR. HAMASAKI: Don't count them, Teodoro. Plant them.
25 D NEWT: They don't mind.
26 D DR. HAMASAKI: I'm sure they don't, Newt.
27 A ¶ Okonkwo smiles, ties another vine.

### SCENE s01343 | EXT. GLACIER CREVASSE - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE VOSS, TOBY KANE, IZZY, BRANDT
* 1 A ¶ A blue slot in the ice, forty feet down, sheer walls glowing like glass.
* 2 A A rope runs up into white sky.
3 A ¶ MARGUERITE VOSS, 40s, dangles at the bottom, crampons biting.
4 A TOBY KANE, 30s, hangs three feet above her, rope bunched in his gloves.
5 A At the lip, IZABELLA "IZZY" BRANDT, 30s, belays, braced against an ice axe.
6 D IZZY (shouting down): Talk to me!
7 D TOBY: Her leg's pinned!
8 D MARGUERITE: I'm fine!
9 D IZZY: Which of you is talking?
10 D TOBY: Me! She means me!
* 11 A ¶ The ice groans.
* 12 A A shelf cracks above them.
* 13 A Snow hisses down.
14 A Toby swings, grabs at the wall, kicks a foothold.
15 A Marguerite hugs the ice.
16 D TOBY [CONT'D]: Cut her loose!
17 D MARGUERITE: Don't cut me loose!
18 D IZZY: Stop moving! Both of you!
* 19 A ¶ The groan fades.
* 20 A Quiet.
* 21 A Snow dribbles.
* 22 A Marguerite's breath fogs.
23 A Toby peers down at her, then up at Izzy.
24 D TOBY (whispering): She's stuck. I can reach her.
25 D IZZY (whispering): How stuck?
26 D MARGUERITE: Stuck like a stuck thing.
27 A ¶ Toby laughs once, shakily.
28 A He lowers himself another foot.
29 A His hand finds her harness.
* 30 A The ice gives a final crack and holds.
31 D IZZY: Pull!
32 A ¶ Toby pulls.
33 A Marguerite's leg comes free with a spray of ice.
34 A She cries out, grabs his wrist, and they rise together, jerked up the wall in short grunting yanks.
35 A ¶ At the lip, she hauls herself over first, then him.
36 A They collapse on the glacier, flat on their backs, staring at the sky.
37 D IZZY [CONT'D] (panting): Never again.
38 D MARGUERITE (panting): You say that every time.

### SCENE s01344 | INT. MINIVAN AT A TOLL PLAZA - DAY
Detected names (may be incomplete or contain aliases): DOLORES, MAN, WILLIE, MARISOL, FRANK
* 1 A ¶ Crumbs, juice boxes, a cracked sun visor.
* 2 A The windshield framed by a long line of brake lights.
3 A ¶ DOLORES, 40s, drives with both hands.
4 A Beside her, a MAN in a ball cap fiddles with the map, face turned away.
5 A Behind them, a boy, WILLIE, 8, kicks the seat.
6 A A girl, MARISOL, 12, plugs one earbud in.
7 A ¶ A stranger.
8 A She had never seen him before the gas station.
9 A ¶ She grips the wheel tighter.
10 A He keeps studying the map.
11 A In the mirror, Willie sticks out his tongue.
12 A Marisol rolls her eyes and shushes him.
13 A They inch forward, one car length.
* 14 A The toll booth waits, a glass cage.
15 A ¶ The stranger refolds the map.
16 A She watches his hands.
17 A He stuffs it in the glove box.
18 D WILLIE: Mom, who is he?
19 D DOLORES: Don't talk, Willie.
20 D MARISOL: Mom, he's Uncle Frank.
21 D DOLORES: Uncle Frank has a mustache.
22 D MARISOL: He shaved.
23 A ¶ The man in the ball cap turns at last.
24 A A broad smile, mustache missing, a pale stripe on his lip.
25 A He tips the cap.
26 D FRANK: Surprise, kids.
27 D WILLIE: Uncle Frank!
28 D DOLORES: Frank, you scared me half to death.
29 D FRANK: I had a plan.
30 D DOLORES: It was a bad plan.
31 A ¶ She laughs, tapping the wheel.
32 A He laughs.
33 A Marisol groans.
* 34 A The toll booth's arm lifts.
35 A Dolores hands the attendant exact change, rolls through, and merges onto the highway with a long exhale, while the boy throws his arms around Frank's seat.

### SCENE s01345 | INT. FLOODED CLINIC, SECOND-FLOOR WARD - NIGHT
Detected names (may be incomplete or contain aliases): CATALINA OROZCO, NURSE EZEKIEL BWALYA, RAJ
* 1 A ¶ Brown water laps at the stairwell below.
* 2 A Generators mutter.
* 3 A Camp beds line the corridor, each lit by a headlamp or a candle in a jar.
* 4 A The air smells of bleach and river.
5 A ¶ DR. CATALINA OROZCO, 50s, surgical cap, sleeves rolled, kneels at a bedside with a stethoscope.
6 A NURSE EZEKIEL BWALYA, 30s, long hands, steady, hangs a bag of saline from a coat hook.
7 A And RAJ, 20s, an orderly with a flashlight, stands at the head of the stairs, watching the water.
8 D DR. OROZCO (to the ward): Everyone who can sit up, please sit up. We are moving to the roof at midnight.
9 A ¶ A murmur.
* 10 A Blankets rustle.
11 D DR. OROZCO [CONT'D] (to Ezekiel): Pulse is one-twenty. Pressure?
12 D EZEKIEL: Eighty over fifty. Dropping.
13 D DR. OROZCO (to herself): Come on, little heart.
14 D RAJ (from the stairs): Doctor, it's at the fourth step.
15 D DR. OROZCO: Thank you, Raj. Keep counting.
16 D EZEKIEL (to the patient): Sir, I'm going to give you something for the pain. Squeeze my hand.
17 D DR. OROZCO (to Ezekiel): Double the dose.
18 D EZEKIEL (over her): Double the dose?
19 D DR. OROZCO: Yes. And his wife's too.
20 A ¶ Ezekiel draws up a syringe.
21 A His hands never tremble.
22 A Orozco lays the stethoscope against the patient's chest and listens, eyes closed.
23 D RAJ (calling): Fifth step!
24 D DR. OROZCO (to the ward): No one panics. Stay in your beds. We will carry you.
25 A ¶ She opens her eyes.
26 A The patient has stopped breathing.
27 A Ezekiel is already in motion.
* 28 A The headlamps shiver.

### SCENE s01346 | INT. COMMUNITY HOSPITAL, TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): SAMUEL ACHTERBERG, NURSE LINH DAO, TEAGUE
* 1 A ¶ White light, steel.
* 2 A A gurney.
* 3 A Monitors beeping.
* 4 A A fan of gauze packets on a tray.
5 A ¶ DR. SAMUEL ACHTERBERG, 40s, scrubs, surgical mask pulled under his chin, wipes his hands.
6 A NURSE LINH DAO, 30s, adjusts a monitor.
7 A A bleeding man, MR. TEAGUE, 50s, in a mechanic's coveralls, sits on the gurney, one hand clamped on his forearm.
8 A ¶ Teague tries to stand.
9 A Achterberg and Dao push him back down together.
10 A Teague shoves free, swings an elbow.
11 A Dao ducks.
12 A Achterberg grabs the arm.
13 A The three of them scuffle against the gurney, a monitor lead pops loose, and the machine screams.
14 A ¶ They freeze, panting.
* 15 A Teague's arm drips onto the floor.
* 16 A A long beat.
17 D DR. ACHTERBERG: Mr. Teague, you are bleeding.
18 D TEAGUE: I know I'm bleeding.
19 D DR. ACHTERBERG: You have a lacerated radial artery. If you stand up, you will pass out.
20 D TEAGUE: I don't have time to pass out.
21 D NURSE DAO: Mr. Teague, please sit down.
22 D TEAGUE: My daughter's waiting in the parking lot. She's eleven. She doesn't have a coat. She thinks I'm getting a sandwich.
23 D DR. ACHTERBERG: We can send someone to get her.
24 D TEAGUE: She won't go with a stranger.
25 D NURSE DAO: She'll go with me. Tell me what she looks like.
26 D TEAGUE: Blue backpack. Braids. Her name is Corinne.
27 D NURSE DAO: Corinne. Blue backpack. Braids.
28 D TEAGUE: She hates broccoli.
29 D NURSE DAO: Noted.
30 D DR. ACHTERBERG: Mr. Teague, I need your arm.
31 D TEAGUE: You'll fix it?
32 D DR. ACHTERBERG: I'll fix it.
33 A ¶ Teague lies back.
34 A Dao reconnects the monitor lead.
35 A Achterberg unwraps a suture kit.
* 36 A The beep slows to a steady rhythm.

### SCENE s01347 | INT. MESS TENT, FORWARD CAMP - DAY
Detected names (may be incomplete or contain aliases): SERGEANT MORRIS HALE, PRIVATE ELLIOT QUAYLE
* 1 A ¶ A canvas tent flapping in dry wind.
* 2 A Trestle tables, tin plates, a single coffee urn.
* 3 A The distant rumble of artillery has stopped.
* 4 A Everything has stopped.
5 A ¶ SERGEANT MORRIS HALE, 50s, grizzled, sits alone at the end of a bench, writing a letter in pencil.
* 6 A A tin mug steams at his elbow.
7 A ¶ He writes.
8 A He stops.
9 A He crosses a line out.
10 A He writes again.
* 11 A ¶ The tent flap parts.
12 A PRIVATE ELLIOT QUAYLE, 19, enters, helmet off, cropped hair, a young face wrapped around old eyes.
13 A He carries a rifle by the sling and a folded paper in his teeth.
14 A He takes the paper out and stands at attention.
15 D QUAYLE: Sergeant Hale.
16 D HALE: At ease, Private.
17 D QUAYLE: Sir, I've been told to give you this.
18 A ¶ He holds out the paper.
19 A Hale does not take it.
20 A He sets down the pencil.
21 D HALE: Sit.
22 D QUAYLE: Sergeant, I'm supposed to deliver it and come straight back.
23 D HALE: Then sit and come straight back after.
24 A ¶ Quayle sits.
25 A Hale slides the mug across the table.
26 A Quayle takes it.
27 A They both watch the tent flap moving.
28 D HALE [CONT'D]: Quiet out there.
29 D QUAYLE: Yes, Sergeant.
30 D HALE: How long?
31 D QUAYLE: Since noon.
32 D HALE: Is that long?
33 D QUAYLE: Longest it's been since I got here.
34 D HALE: How long have you been here?
35 D QUAYLE: Six weeks.
36 D HALE: That's not long.
37 D QUAYLE: No, Sergeant.
38 A ¶ Hale picks up the paper, unfolds it, reads, folds it again.
39 A He sets it on the table beside his letter.
40 D HALE: Do you know what this says?
41 D QUAYLE: No, Sergeant.
42 D HALE: It says the war is over.
43 D QUAYLE: Sir?
44 D HALE: Armistice at noon. That's why it's quiet.
45 A ¶ Quayle sits very still.
46 A He sets the mug down.
47 A His hands lie flat on the table.
48 D QUAYLE: Sergeant, nobody told us.
49 D HALE: They're telling us now.
50 D QUAYLE: Is it true?
51 D HALE: It's signed.
52 D QUAYLE: Then why do we still have to stand watch?
53 D HALE: Because nobody told the other side.
54 D QUAYLE (softly): Oh.
55 D HALE: Don't take your helmet off yet.
56 D QUAYLE: No, Sergeant.
57 D HALE: You can take your boots off.
58 D QUAYLE: Sir?
59 D HALE: I've never seen a man win a war with his boots on.
60 A ¶ Quayle laughs, helpless, and puts his hands over his face.
61 A Hale lifts the pencil and finishes his sentence.
* 62 A The tent flap moves.
* 63 A The wind carries a distant bugle, very thin, very far.
64 D QUAYLE: Sergeant. Is that ours?
65 D HALE: It's somebody's.
66 D QUAYLE: What do we do now?
67 D HALE: We eat, Private.
68 D QUAYLE: And after?
69 D HALE: After, you write to your mother.
70 D QUAYLE: What do I tell her?
71 D HALE (not looking up): Tell her you were in the mess tent when it happened.
