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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0054.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01804 | INT. BOTANICAL CONSERVATORY - ORCHID HOUSE - MORNING
Detected names (may be incomplete or contain aliases): PERPETUA ODUYA, CASPIAN LOVELL-HERRERA
* 1 A ¶ A glass vault dense with steam and green.
* 2 A Orchids hang from the beams like lanterns.
* 3 A Droplets fall from the ceiling in a slow, steady rain.
* 4 A A brick path winds between beds.
5 A ¶ PERPETUA ODUYA, thirties, crouches at the edge of a bed with a small brass trowel and a notebook, sketching a pale-lipped orchid.
6 A Her sleeves are rolled, her braid pinned up, and a smear of soil runs across her forehead.
7 A She sketches the same petal over and over, erasing, as if the paper were stubborn.
* 8 A ¶ A door at the far end opens.
* 9 A Cool air rolls in.
10 A A man steps inside, shaking out an umbrella, and stops, fogged by the heat.
11 A This is CASPIAN LOVELL-HERRERA, thirties, in a tweed coat and wire spectacles that are instantly opaque with steam.
12 A He takes them off, wipes them, and puts them on again.
13 D CASPIAN: Forgive me. I was told the botanist was in.
14 D PERPETUA: You were told correctly.
15 D CASPIAN: You are the botanist?
16 D PERPETUA: I'm the person who waters the botanist's plants.
17 D CASPIAN: That sounds like a botanist to me.
18 D PERPETUA: It sounds like a gardener.
19 D CASPIAN: My apologies.
20 D PERPETUA: Don't apologize. I'd rather be called a gardener.
21 A ¶ She returns to her sketch.
22 A He walks along the path, craning at the orchids, his hand hovering over a bloom without touching it.
23 D CASPIAN: This one is extraordinary.
24 D PERPETUA: Don't touch it.
25 D CASPIAN: I wasn't going to.
26 D PERPETUA: You were thinking about it.
27 D CASPIAN: I was thinking about it, yes.
28 D PERPETUA: Everybody does.
* 29 A ¶ A bead of water falls from a beam and lands on his shoulder.
30 A He glances up.
31 A Another lands on his glasses, and he wipes them, laughing softly.
32 D CASPIAN: Do you mind if I ask what you're drawing?
33 D PERPETUA: A Paphiopedilum. Slipper orchid. It's dying.
34 D CASPIAN: Dying?
35 D PERPETUA: Not the plant. The species. There are eleven left in the wild.
36 D CASPIAN: Eleven?
37 D PERPETUA: That we know of.
38 A ¶ Caspian takes a step closer.
39 A He lowers himself to one knee beside her, at a respectful distance.
40 D CASPIAN: And you're drawing them?
41 D PERPETUA: Somebody should remember what they looked like.
42 D CASPIAN: That's the most beautiful thing I've heard all week.
43 D PERPETUA: It's a Tuesday.
44 D CASPIAN: Then it's the most beautiful thing I've heard this Tuesday.
45 A ¶ She smiles, in spite of herself, and shows him the page.
46 A He studies it with great seriousness.
47 D CASPIAN [CONT'D]: You've given it a face.
48 D PERPETUA: They have faces. You just have to look.
49 D CASPIAN: I'm Caspian, by the way. Caspian Lovell-Herrera. I'm with the funding committee.
50 D PERPETUA: Oh.
51 D CASPIAN: Is that bad?
52 D PERPETUA: That depends on what you've come to tell me.
53 D CASPIAN: I came to tell you we're keeping the house open.
54 D PERPETUA (a long breath): Really?
55 D CASPIAN: Really.
56 A ¶ She lowers her notebook to the brick and looks up into the green, where the water keeps falling, and for a moment says nothing at all.
57 A He waits, hat in his hand, steam fogging his glasses again.
58 D PERPETUA: Then you may touch it. Once.
59 D CASPIAN: Once?
60 D PERPETUA: Gently.
61 A ¶ He reaches out one finger and rests it on the petal's edge.
* 62 A It trembles and holds.

### SCENE s01805 | INT. ORCHARD HOUSE - KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): BEN, OYELARAN-STAHL, ADELAIDE, MARCELLUS, PHILIPPA
* 1 A ¶ A farm kitchen before sun-up.
* 2 A A pot of oatmeal rests on the stove.
* 3 A A thermos, a lunch pail, and a pair of small rubber boots stand by the door.
* 4 A The window is a blue square.
5 A ¶ BENEDICT "BEN" OYELARAN-STAHL, fifties, sits at the table with his hat on, turning a coffee cup a quarter turn at a time.
6 A His wife ADELAIDE sits across from him and does not touch her bowl.
7 A Their son MARCELLUS, seventeen, stands at the sink with a duffel bag over his shoulder, running the tap.
8 A Their daughter PHILIPPA, eleven, sits on the stairs in her nightgown, chin on knees.
* 9 A ¶ The tap runs.
10 A Nobody turns it off.
11 D BEN: Your mother packed you the good bread.
12 D MARCELLUS: Thanks, Mom.
13 D ADELAIDE: Mind the crust. It's still warm.
14 D PHILIPPA: Marcy, are you taking the tractor?
15 D MARCELLUS: No, Pip. The bus.
16 D PHILIPPA: Then who's going to drive the tractor?
17 D BEN: I will.
18 D PHILIPPA: You don't like the tractor.
19 D BEN: I like it well enough.
20 A ¶ Ben stands, crosses to the window, looks out at the dark orchard.
21 A His shoulders do not move.
22 A Marcellus finally shuts the tap off.
* 23 A The kitchen goes very still.
24 D ADELAIDE: You've got your ticket?
25 D MARCELLUS: In my coat.
26 D ADELAIDE: Show me.
27 A ¶ He pulls it out.
28 A She reads it as though it were a letter, then folds it carefully along its crease and hands it back.
29 A Her fingers linger on his sleeve.
30 D PHILIPPA: Can I come to the bus stop?
31 D BEN: No.
32 D PHILIPPA: Why not?
33 D BEN: Because there's school.
34 D PHILIPPA: It's Saturday.
35 D BEN (a beat): So it is.
36 A ¶ Marcellus puts down the duffel.
37 A Philippa runs down the stairs and hugs his leg.
38 A He ruffles her hair.
39 A Ben takes his hat off and holds it by the brim.
40 D BEN [CONT'D]: Marcellus.
41 D MARCELLUS: Yes, Dad.
42 D BEN: The trees will still be here.
43 D MARCELLUS: I know.
44 D BEN: When you come back.
45 D MARCELLUS: I know.
46 A ¶ Adelaide stands, takes the lunch pail from the shelf, and fills it, slowly, with bread, a wedge of cheese, an apple.
47 A She snaps the lid shut and holds it out.
48 A He takes it.
49 A For a moment both of them keep a hold of it.
50 D ADELAIDE: Go on, then. You'll miss it.
51 A ¶ He nods.
52 A At the door he sits on the bench and pulls on his boots, taking much longer than boots require.
53 A Ben puts his hat on, takes it off, and puts it on again.
54 D PHILIPPA: Marcy?
55 D MARCELLUS: Yeah, Pip?
56 D PHILIPPA: You forgot your thermos.
57 A ¶ She holds it up.
58 A He takes it and kisses the top of her head, and then, with his free hand, reaches for Ben's.
59 A Ben shakes it once, briskly, as he would with a neighbor, and then pulls him in and holds him a second too long.
60 A ¶ Marcellus slings the duffel and goes out into the blue.
* 61 A The screen door bangs.
62 A Nobody moves.
63 A Then Adelaide ladles oatmeal into Ben's bowl and puts it in front of him.
64 D ADELAIDE: Eat.
65 D BEN: I'm not hungry.
66 D ADELAIDE: Eat anyway.
67 A ¶ He sits.
68 A He eats.

### SCENE s01806 | EXT. HOLLOW OF THE SINGING STONES - TWILIGHT
Detected names (may be incomplete or contain aliases): QUILLON ASHDOWN, MAEVE OKONKWO-FAIR, SIR GERVASE THORNWICK, DOBBIN
* 1 A ¶ A bowl in the mountains ringed with standing stones as tall as barns.
* 2 A The stones hum, each on its own faint note, and the notes braid together into something almost like speech.
* 3 A Mist pools in the hollow.
* 4 A Violet light bleeds from the west.
5 A ¶ Four travelers have come down the goat path into the circle.
6 A QUILLON ASHDOWN, thirties, a lean scout with a bow across his back, kneels to touch the turf.
7 A MAEVE OKONKWO-FAIR, twenties, a healer in a moss-green cloak, stands with one hand on the nearest stone and her eyes shut.
8 A Behind them, the old knight SIR GERVASE THORNWICK, sixties, leans on his greatsword, wheezing from the climb, and his squire, little DOBBIN, twelve, hugs the sword's scabbard and stares up at the stones with a mouth like a small round O.
* 9 A ¶ The stones sing a little louder.
10 A Quillon draws an arrow, thinks better of it, and slides it back into the quiver.
11 A Maeve opens her eyes and takes her hand from the rock as if it had burned her.
12 A Sir Gervase straightens, and Dobbin drops the scabbard, picks it up again, and drops it again as the hum climbs a half-step.
13 D QUILLON (low): Maeve. What are they saying?
14 D MAEVE: They aren't saying. They're remembering.
15 D QUILLON: Remembering what?
16 D MAEVE: Everyone who has ever stood here.
17 D SIR GERVASE (wheezing): That would be a long list.
18 D MAEVE: It is.
19 A ¶ Dobbin steps to the center of the circle, where a flat, dark stone lies embedded in the grass like a coin.
20 A He crouches and traces a groove in it with one finger.
21 D DOBBIN: Sir Gervase, there's writing.
22 D SIR GERVASE: Can you read it, lad?
23 D DOBBIN: Not all of it. It says something about a door.
24 D QUILLON: A door?
25 D DOBBIN: "Speak the name of the one you have lost, and the door will open."
* 26 A ¶ Silence.
* 27 A The stones fall quiet all at once.
* 28 A The mist stops moving.
29 A Maeve looks at Quillon.
30 A Quillon looks at the grass.
31 A Sir Gervase studies his sword.
32 A Dobbin glances from face to face.
33 D DOBBIN [CONT'D]: Who goes first?
34 A ¶ Nobody answers.
* 35 A A wind lifts the edge of Maeve's cloak and lets it fall.
36 A Quillon wipes his palms down his thighs.
37 A At last Sir Gervase clears his throat, sets the sword point-down in the turf, and bows his head.
38 D SIR GERVASE: Ysolde.
* 39 A ¶ The stones sing once, a single bright note, and the dark stone in the center brightens to the color of an ember.
40 A Quillon swallows.
41 A Maeve shuts her eyes again.
42 A Dobbin takes Sir Gervase's free hand, and the old knight lets him.
43 D MAEVE (softly): Quillon.
44 D QUILLON: I know.
45 D MAEVE: Say it.
46 D QUILLON: I can't.
47 D MAEVE: You can.
48 D QUILLON (barely): Tamsyn.
* 49 A ¶ The ember brightens.
* 50 A A seam of light opens in the air above the stone, thin as a thread, and the whole hollow leans toward it.
51 A Maeve steps forward, then Dobbin, then Sir Gervase with his sword on his shoulder, and Quillon last, and the door in the air widens until it is the size of a man.

### SCENE s01807 | INT. ABANDONED RADIO STATION - STUDIO B - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, AIR, NELL
* 1 A ¶ A dead studio.
* 2 A Foam panels hanging in strips.
* 3 A A broadcast desk dusted with plaster.
* 4 A A single red ON AIR bulb, unlit.
* 5 A Cold breath hangs in the beam of a flashlight.
6 A ¶ A WOMAN in a drenched raincoat limps through the door, flashlight gripped in both hands, the beam shaking over the room.
7 A Mud to the knees.
8 A A cut at her hairline.
9 A She shuts the door behind her, drags the desk's heavy chair in front of it, and wedges the back under the knob.
* 10 A Her breathing is loud in the dead air.
11 A ¶ She sweeps the beam across the booth.
* 12 A Dials.
* 13 A Faders.
* 14 A A coffee mug with the mold of years.
* 15 A A corkboard of staff photos and a laminated badge hanging from a nail on a lanyard.
16 D WOMAN (muttering): Okay. Okay. Okay.
17 A ¶ She crosses to the desk, plants the flashlight on its end so the beam strikes the ceiling, and shrugs off her coat.
18 A She flips the toggle on the console.
* 19 A Nothing.
20 A She flips it again.
* 21 A A hum, then a tick, and the ON AIR bulb glows red, flooding the booth in a color like a wound.
22 A ¶ She jumps back, knocking the mug onto the floor.
* 23 A It shatters.
24 A She waits.
* 25 A Nothing answers.
26 A She crouches, picks up the lanyard, and reads the badge in the red light, turning it toward the beam.
27 D WOMAN [CONT'D] (reading): Nell Okonjo-Reyes. Overnight host.
28 A ¶ She looks at the photograph on the badge.
29 A It looks like her.
30 A She lifts a hand to her own face, pressing the cut, then drops it.
31 D NELL (whispering): That's me.
* 32 A ¶ A hiss from the speaker above the desk.
* 33 A Then a voice, her own, thin and recorded, slowed by the failing tape.
34 D NELL [V.O.] (recorded, faint): ...if you're hearing this, Nell, don't go to the lobby. Don't open the second door. Whatever it says in your voice, it isn't you.
35 A ¶ Nell stares at the speaker.
* 36 A The tape runs on in hiss.
* 37 A Behind her, in the corridor, something slides along the wall, patient, in no hurry.
* 38 A The chair against the door creaks as its back leg shifts a quarter-inch.
39 A She does not turn.
40 A She takes the badge, wraps the lanyard once around her wrist, grabs the flashlight, and with a trembling hand switches off the red light.
* 41 A ¶ The booth goes black.
42 D NELL [V.O., CONT'D] (recorded): Stay in the dark. It can't read what it can't see.
* 43 A ¶ In the dark, a soft knock comes at the door.
* 44 A Once.
* 45 A Twice.
* 46 A Then a voice, calm and warm, her own.
47 D NELL [O.S.]: Nell? It's me. Let me in.
48 A ¶ Nell stands rigid in the black.
49 A Her lips move.
50 A She says nothing.
* 51 A The knocking stops.
* 52 A The chair creaks again, steadily, as though a patient hand is pressing from the other side.
53 D NELL (barely audible): No.

### SCENE s01808 | INT. GENERATION SHIP "HALCYON REACH" - HYDROPONICS RING - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER ISOLDE VARGAS-ABIOLA, TOMASZ BRZEZINSKI, NADIA OKONKWO-REID, KAI SOLOMON, FEODOR LINDGREN, PRIYANKA ADEYEMI
* 1 A ¶ A curved corridor of green.
* 2 A Racks of lettuce and soy climb the walls under violet grow-lamps.
* 3 A Condensation beads on every pipe.
* 4 A Far below the deck plates, the ship's engines pulse like a slow heart.
5 A ¶ COMMANDER ISOLDE VARGAS-ABIOLA, fifties, stands at a junction with her arms folded, still in her night robe.
6 A Her first officer, TOMASZ BRZEZINSKI, forties, has a hand tablet and a scowl.
7 A The agronomist, DR. NADIA OKONKWO-REID, thirties, kneels at a rack with a soil probe.
8 A The boy, KAI SOLOMON, twelve, lingers behind a tank with a bucket.
9 A A maintenance tech, FEODOR LINDGREN, sixty, sits cross-legged on the deck with a panel open.
10 A And the ship's counselor, PRIYANKA ADEYEMI, forties, hangs back at the corridor mouth.
* 11 A ¶ The grow-lamps flicker.
* 12 A Every leaf in the corridor turns, slowly, toward the same direction.
13 D ISOLDE: Tell me that isn't what I think it is.
14 D NADIA: It's phototropism. Plants turn toward light.
15 D ISOLDE: There is no light there.
16 D NADIA: No. There isn't.
17 A ¶ Tomasz looks up from his tablet.
18 A Feodor taps his panel, and a weak amber glow pulses from the wiring.
19 A He snatches his hand away.
20 A Kai edges closer to the tank.
21 D TOMASZ: Commander, the sensors show the hull is clear. No breach. No micrometeorites.
22 D ISOLDE: Then why are my lettuces looking at the aft bulkhead?
23 D FEODOR: Something's behind it.
24 D TOMASZ: There's nothing behind it. It's a bulkhead.
25 D FEODOR: Then something's inside it.
26 D PRIYANKA (softly): Perhaps we should all take a breath.
27 D ISOLDE: I'm breathing, Priyanka. It isn't helping.
28 A ¶ Kai steps out from behind the tank, bucket swinging.
29 D KAI: Mother says the walls have been singing since the last jump.
30 D ISOLDE: Kai, go to your quarters.
31 D KAI: I'm not afraid.
32 D ISOLDE: I didn't say you were.
33 D NADIA: Commander. The plants aren't only turning. Look at the stems. They're growing toward it. Measurably, in real time.
34 A ¶ She holds up the probe.
* 35 A A readout glows.
36 A Tomasz crosses to her side, looks at it, and goes pale.
37 D TOMASZ: That's twenty centimeters in five minutes.
38 D NADIA: It's accelerating.
* 39 A ¶ The corridor hums.
* 40 A A low tone rises in the deck plates.
* 41 A The violet lamps dim.
* 42 A And from the aft bulkhead, through the steel, a pale seam of light begins to spread, slow as water, ruffling every leaf.
43 D TOMASZ: Is that...
44 D NADIA: It's alive.
45 A ¶ Tomasz and Nadia speak at the same time, their words overlapping, and then stop, each turning toward the other.
46 A Isolde steps forward, one hand lifted as if to touch the light.
47 D ISOLDE: Nobody move.
48 A ¶ Priyanka crosses herself in the old way.
49 A Feodor scrambles to his feet.
50 A Kai drops the bucket, and it clangs, and the sound echoes down the corridor and returns altered, almost a word.
51 D KAI (whispering): It said "hello."
52 D ISOLDE: Kai.
53 D KAI: It did. It said hello.
54 A ¶ Isolde kneels beside the boy and takes him by the shoulders.
55 D ISOLDE: Kai, look at me. Did you hear anything else?
56 D KAI: It said it was lonely.
* 57 A ¶ Silence.
* 58 A The light stops spreading.
* 59 A A single tendril of green curls out from the nearest rack and brushes the boy's sleeve, gentle as a child's hand.
60 D ISOLDE: Tomasz. Seal the corridor. Priyanka, get the captain. Nadia.
61 D NADIA: Yes, Commander?
62 D ISOLDE: Find out what it wants.
63 D NADIA: And if it wants nothing?
64 D ISOLDE: Then we will be very polite to it.
65 A ¶ Isolde rises, and the seam of light flickers once in answer, and every leaf in the corridor turns to face her.

### SCENE s01809 | INT. FEDERAL COURTHOUSE - HOLDING CORRIDOR - DAY
Detected names (may be incomplete or contain aliases): JUDGE PRUDENCE ADEKUNLE-WALSH, DEFENSE COUNSEL THEODORE MBATHA, PROSECUTOR LUCINDA FAIRCLOUGH, SEBASTIAN OKORO-LANE, DEPUTY MARCUS HOLLINGBERRY, JUROR FOREPERSON
* 1 A ¶ A narrow, windowless corridor behind the courtroom.
* 2 A Cinder block painted the color of old teeth.
* 3 A A bench bolted to the wall.
* 4 A At one end a steel door with a buzzer.
* 5 A At the other, a wall phone in a wire cage.
6 A ¶ JUDGE PRUDENCE ADEKUNLE-WALSH, sixties, in her robe, stands in the doorway from chambers, tapping a gavel against her palm.
7 A DEFENSE COUNSEL THEODORE MBATHA, forties, paces.
8 A PROSECUTOR LUCINDA FAIRCLOUGH, thirties, sits on the bench with her briefcase on her knees.
9 A The defendant, MR. SEBASTIAN OKORO-LANE, fifties, sits cuffed on the opposite end, rocking.
10 A The court officer, DEPUTY MARCUS HOLLINGBERRY, forties, has a hand on his radio.
* 11 A The wall phone rings.
12 A Everyone freezes.
* 13 A It rings again.
14 A Lucinda lifts her head.
15 A Theodore stops pacing.
16 A Sebastian stops rocking.
17 A Deputy Hollingberry unclips his radio and steps toward the phone.
18 D HOLLINGBERRY: Hold on.
19 A ¶ He lifts the receiver.
* 20 A A tinny voice crackles.
21 D JUROR FOREPERSON [V.O.] (over phone): Your Honor? We've reached a verdict. But we have a problem.
22 D HOLLINGBERRY (to the group): It's the jury. They've got a verdict.
23 D JUDGE ADEKUNLE-WALSH (to the deputy): What problem?
24 D HOLLINGBERRY (into phone): What problem?
25 D JUROR FOREPERSON [V.O.] (over phone): One of us is missing. Number nine. He went to the restroom forty minutes ago.
26 A ¶ The group erupts at once.
27 A Theodore swears.
28 A Lucinda stands, her briefcase sliding off her knees.
29 A The judge, unmoving, closes her eyes.
30 A Sebastian slumps to the floor and mutters at the tile.
31 D SEBASTIAN (to himself): They lost a juror. They lost a juror.
32 D THEODORE (to the judge): Your Honor, I move for a mistrial.
33 D LUCINDA (to the judge): Your Honor, the state opposes. An alternate can be seated.
34 D JUDGE ADEKUNLE-WALSH (to everyone): Quiet. All of you. Quiet.
* 35 A ¶ The corridor falls silent.
36 A The judge walks the length of it, robe swishing, and takes the phone out of the deputy's hand.
37 A She listens for a moment.
38 D JUDGE ADEKUNLE-WALSH [CONT'D] (into phone): Madam Foreperson, did anyone knock on the restroom door?
39 D JUROR FOREPERSON [V.O.] (over phone): Yes, Your Honor.
40 D JUDGE ADEKUNLE-WALSH (into phone): And?
41 D JUROR FOREPERSON [V.O.] (over phone): He knocked back.
42 A ¶ The judge hangs up.
43 A She hands the receiver to Hollingberry, turns to the corridor, and raises her gavel.
44 A Then she lowers it and, quietly, to nobody, says:
45 D JUDGE ADEKUNLE-WALSH [CONT'D] (muttering): Thirty years on the bench.

### SCENE s01810 | INT. COMMUNITY POOL - SHALLOW END - DAY
Detected names (may be incomplete or contain aliases): RUNNING, DIVING, TOBIAS ABERNATHY, CORDELIA, MARISOL DUARTE, PEMBERTON-LEE
* 1 A ¶ Chlorine glare.
* 2 A A lifeguard chair.
* 3 A A ring of damp kickboards.
* 4 A A sign: NO RUNNING, NO DIVING, NO FUN.
5 A ¶ SEVEN-YEAR-OLD PENELOPE ABERNATHY floats in a swan-shaped tube, arms folded, as stern as a dowager.
6 A Her father TOBIAS ABERNATHY, forties, wades beside her in cargo shorts and sunglasses.
7 A Her aunt CORDELIA, fifties, sits on the pool edge with her feet in the water, reading a paperback.
8 A Two teenage lifeguards, DYLAN KOWALSKI and MARISOL DUARTE, share the chair, both pretending not to watch.
9 A And a gray-haired swimmer, MR. PEMBERTON-LEE, seventy, does a slow, magisterial breaststroke past them.
* 10 A ¶ The swan tube drifts.
11 A Tobias catches it with a finger, steering it back.
12 A Penelope looks at him with great disdain.
13 A Cordelia turns a page.
14 A Dylan stands up, peers over the pool, sits back down.
15 A Marisol nudges his knee with her elbow.
16 A Mr. Pemberton-Lee reaches the wall, touches it, and pivots, unhurried.
* 17 A ¶ The swan tube squeaks.
18 A Penelope presses her lips together and does not cry.
19 A Tobias lifts his sunglasses and then lowers them.
20 A Cordelia folds the corner of her page and sets the paperback beside her on the tiles.
21 A Without a word, she slides into the water and wades over.
22 A She takes the other side of the tube, and together she and Tobias walk it toward the steps while Penelope, captain of the swan, sails between them, chin high.

### SCENE s01811 | INT. BUS STATION WAITING ROOM - 2 A.M.
Detected names (may be incomplete or contain aliases): GWENDOLYN ASARE-BLACK, LAZARUS PRENTISS, JUNIPER WOLCOTT-BAI
* 1 A ¶ Rows of molded seats.
* 2 A A flickering departures board.
* 3 A A vending machine hums beside a rack of dead pamphlets.
* 4 A A mop and bucket stand abandoned by the door.
5 A ¶ GWENDOLYN ASARE-BLACK, forties, sits alone with a paper cup and a cardboard box on her lap.
6 A Across the room, an old man, LAZARUS PRENTISS, seventies, sleeps sitting up, chin on his chest, a harmonica in his hand.
7 A By the board, a girl of fifteen, JUNIPER WOLCOTT-BAI, kicks a pebble against the wall with her sneaker, over and over, and sometimes glances at the box.
8 A ¶ Gwendolyn tilts the lid up an inch, looks inside, and closes it.
9 A Juniper kicks the pebble.
* 10 A It skips across the tile and stops at Gwendolyn's shoe.
11 A Gwendolyn picks it up, turns it over, and rolls it back across the floor.
12 A Juniper traps it with her toe.
13 A Lazarus stirs, plays two soft notes on the harmonica, and falls back asleep with his mouth open.
* 14 A The departures board clicks.
* 15 A A new line appears: DELAYED.
16 A Gwendolyn sets the box on the seat beside her and puts her hand flat on the lid.
17 D JUNIPER: What's in it?
18 D GWENDOLYN: My mother.
19 D JUNIPER: Oh.
20 A ¶ Juniper picks up the pebble and crosses the room.
21 A She sits one seat from the box, then holds out the pebble.
22 A Gwendolyn takes it and tucks it into her pocket without a word.
23 A They sit.
* 24 A The vending machine hums.

### SCENE s01812 | INT. ESCAPE ROOM - "THE PHARAOH'S LAST BRUNCH" - NIGHT
Detected names (may be incomplete or contain aliases): BARRETT NWANKWO-HILL, DOLORES FITZSIMMONS, YASMIN KARIMI-ODOM, GRIFFIN PELLERIN, THEO, ABARA, LEONARD VASQUEZ-TREMBLAY
* 1 A ¶ A chamber made of cardboard and fabric: painted hieroglyphs, plastic jackals, a sarcophagus with a pizza box inside.
* 2 A A countdown clock on the wall reads 14:22.
3 A ¶ Six coworkers are locked inside.
4 A BARRETT NWANKWO-HILL, thirties, wears a lanyard and an expression of dread.
5 A DOLORES FITZSIMMONS, fifties, has taken over the sarcophagus.
6 A YASMIN KARIMI-ODOM, twenties, holds a flashlight she doesn't need.
7 A GRIFFIN PELLERIN, forties, runs a finger down a wall of symbols.
8 A THEODOSIA "THEO" ABARA, thirties, checks her phone.
9 A And the intern, LEONARD VASQUEZ-TREMBLAY, nineteen, stands very still by the exit.
10 D DOLORES: Okay. Everyone stop touching things.
11 D BARRETT: I'm not touching anything.
12 D GRIFFIN: You're touching the jackal.
13 D BARRETT: The jackal touched me first.
14 D YASMIN: Guys, there's a symbol that looks like a sandwich.
15 D THEO: That's a hieroglyph for bread.
16 D YASMIN: It looks like a sandwich.
17 D DOLORES: Everyone, shut up, I'm thinking.
18 D LEONARD: Mrs. Fitzsimmons, I think the pizza box is a clue.
19 D DOLORES: Leonard, you're nineteen.
20 D LEONARD: I'm aware.
21 D GRIFFIN: Dolores, listen to the kid.
22 D DOLORES: It's a pizza box. It's Pharaoh's brunch. It's a theme, Griffin.
23 D THEO: Maybe it's both.
24 D BARRETT: Both what?
25 D THEO: A theme and a clue.
26 D YASMIN: Can I open it?
27 D DOLORES: No.
28 D GRIFFIN: Yes.
29 D BARRETT: Maybe.
30 D LEONARD (quietly): I'm opening it.
31 A ¶ He flips the lid.
* 32 A Inside the box lies a single slice of pepperoni and a folded note.
33 A They all gape.
34 D LEONARD [CONT'D]: It says, "The first letter of every item you've touched."
35 D BARRETT: Jackal.
36 D GRIFFIN: Jar.
37 D THEO: Jewel.
38 D YASMIN: Scarab.
39 D DOLORES: Sarcophagus.
40 D LEONARD: Pizza.
41 D BARRETT: J, J, J, S, S, P.
42 D THEO: That doesn't spell anything.
43 D GRIFFIN: Jjjsssp.
44 D YASMIN: Maybe it's Egyptian.
45 D DOLORES: It's not Egyptian, Yasmin, it's an acronym.
46 D BARRETT: For what?
47 D DOLORES: For "Jackals Should Stay Properly Put."
48 D GRIFFIN: That's not a thing.
49 D THEO: It could be a thing.
50 D LEONARD (whispering): I think the clock is at four minutes.
51 A ¶ They all turn.
* 52 A The clock reads 4:00.
* 53 A A silence follows, broken only by Yasmin's flashlight clicking on and off.
54 A Barrett sits on the floor and puts his head in his hands.
55 D BARRETT: I told my wife I'd be home by nine.
56 D GRIFFIN: You told her that?
57 D BARRETT: I was optimistic.
58 D DOLORES: Everyone, hands in. We're doing this together.
59 D THEO: Doing what?
60 D DOLORES: I have no idea. But we're doing it together.
61 A ¶ They put their hands in a circle.
62 A Barrett lifts his head, wipes his eyes, and adds his own.
63 A Leonard, who has been watching the door the whole time, reaches out and presses a small button on the frame that reads, in tiny letters, EXIT.
* 64 A ¶ The door clicks and swings open.
65 D LEONARD: It was just a door.
66 A ¶ Dolores glares.
67 A Griffin laughs.
68 A Theo lowers her phone.
* 69 A The clock keeps counting.
70 D BARRETT: I'm going to need a minute.

### SCENE s01813 | INT. NIGHT COURT - ARRAIGNMENT ROOM - 1 A.M.
Detected names (may be incomplete or contain aliases): JUDGE OCTAVIA ROSENBLATT-ODUYA, PUBLIC DEFENDER LEON FAIRWEATHER, ASSISTANT MERCEDES IBARRA-NOLAN, MAN, CORWIN
* 1 A ¶ A drab room under buzzing fluorescents.
* 2 A A raised bench, a witness stand with a chipped rail, a row of empty gallery seats.
* 3 A A clock stuck at ten past three.
4 A ¶ JUDGE OCTAVIA ROSENBLATT-ODUYA, sixties, sits at the bench with a thermos.
5 A At the defense table, PUBLIC DEFENDER LEON FAIRWEATHER, thirties, shuffles papers that do not need shuffling.
6 A At the prosecution table, ASSISTANT DA MERCEDES IBARRA-NOLAN, forties, taps a pen.
7 A In the dock stands a MAN in a green hospital gown, barefoot, tall, hair sticking up.
8 D JUDGE ROSENBLATT-ODUYA (to the room): We're on the record. Docket 4471. State versus...
9 A ¶ She squints at her papers.
10 D JUDGE ROSENBLATT-ODUYA [CONT'D] (to herself): John Doe? Again?
11 D LEON: Your Honor, my client has declined to give his name.
12 D MAN: It's not that I decline. I'm not certain.
13 D JUDGE ROSENBLATT-ODUYA: Mr. Doe, do you understand the charge?
14 D MAN: Trespassing at the aquarium.
15 D MERCEDES: After hours. In the shark tank.
16 D MAN: It was a very peaceful tank.
17 D LEON (to the Man, low): Please don't talk.
18 D MERCEDES (to the judge): The State will note he also had a crowbar and a wetsuit.
19 D LEON: It was a diving lesson.
20 D MERCEDES: At two in the morning.
21 D MAN (muttering): I was looking for someone.
22 D JUDGE ROSENBLATT-ODUYA: Looking for whom?
23 D MAN: A woman. Long hair. She said her name was Marisol and that she lived in the tank.
24 A ¶ Leon closes his eyes.
25 A Mercedes sets down her pen.
26 A The judge puts a hand over her mouth to cover a smile.
27 D JUDGE ROSENBLATT-ODUYA: Mr. Doe...
28 D MAN: It's not Doe. I remember now. It's Corwin.
29 D LEON (whispering): Corwin?
30 D CORWIN: Corwin Albright-Santos. I'm a marine biologist.
31 D MERCEDES (to the judge): Your Honor, he's been in the system four times this year.
32 D CORWIN: Five.
33 D LEON: Corwin, please.
34 D JUDGE ROSENBLATT-ODUYA: Mr. Albright-Santos, I'm going to release you on your own recognizance. On one condition.
35 D CORWIN: Anything.
36 D JUDGE ROSENBLATT-ODUYA: Stay out of the tank.
37 D CORWIN (after a long pause): I'll try.
38 A ¶ She bangs the gavel.
* 39 A The clock still reads ten past three.

### SCENE s01814 | EXT. SHRINKING SANDBAR - TIDAL FLAT - DAWN
Detected names (may be incomplete or contain aliases): TALITHA OKORAFOR-BENNET
* 1 A ¶ A strip of gray sand a hundred yards long, ringed by a pale, rising sea.
* 2 A Gulls wheel overhead.
* 3 A In the distance, the mainland is a blue smear.
4 A ¶ TALITHA OKORAFOR-BENNET, twenties, sits on an upturned crate with a battered voice recorder in her lap.
5 A Her boots are soaked.
* 6 A A blue tarp is staked beside her, whipping in the wind.
7 A She has not slept.
8 A ¶ She presses RECORD.
* 9 A A red light blinks.
10 D TALITHA: Day two. Survey boat Dunlin is gone. I'm on the sandbar south of Gannet Point. Tide's rising. I have maybe forty minutes.
11 A ¶ She stops.
12 A Rewinds a few seconds.
13 A Plays it back.
14 D TALITHA [V.O.] (recorded, thin): ...Tide's rising. I have maybe forty minutes.
15 A ¶ She nods.
* 16 A The water, closer than a minute ago, licks at the crate.
17 A She stands, planting her boots in the sand, and ties the recorder inside her vest.
18 D TALITHA [CONT'D] (to the sea): Not going anywhere.
19 A ¶ She unclips her flare gun and loads it, slow and deliberate.
20 A Lifts it overhead.
* 21 A The flare shoots up and bursts red against the dawn.
22 A She watches it fall.
23 A ¶ She sits again on the crate as the tide reaches her ankles.
24 A She takes the recorder out and presses RECORD.
25 D TALITHA [CONT'D] (steady): If anyone finds this, I stayed with the boat's last known position. I did everything right.
* 26 A ¶ The water climbs her shins.
27 A She keeps her eyes on the blue smear of the mainland and does not look down.

### SCENE s01815 | EXT. MANGROVE SWAMP - WRECKED FERRY - DUSK
Detected names (may be incomplete or contain aliases): MIRIAM OSEI-STEELE, DEZ, LACROIX, FREYA NIEMI
* 1 A ¶ A half-sunk river ferry heeled over in brown water, its upper deck tilting among the roots.
* 2 A Mosquitoes hang in the air like smoke.
* 3 A Egrets lift from the branches as the light dims.
4 A ¶ On the high side of the deck, three survivors huddle around a cooler.
5 A MIRIAM OSEI-STEELE, forties, a nurse, kneels with a gash on her forearm bound in a torn shirt.
6 A DESMOND "DEZ" LACROIX, fifties, a ferry mate, grips a boat hook.
7 A And a young backpacker, FREYA NIEMI, twenties, sits with her knees up, a camera strap around her wrist.
8 A ¶ Miriam lifts the cooler lid and counts the remaining water bottles, and Dez watches the tree line while Freya bites the skin around her thumb.
9 A In the near channel, something large slides beneath the surface and the three of them go still as one, then look at each other, then at the water.
10 D MIRIAM (to the group): Nobody goes near the rail tonight.
11 D DEZ (low, to Miriam): She's bleeding through.
12 D FREYA (to herself): It's fine. It's fine.
13 D MIRIAM: Freya, I need you to look at me. Not the water.
14 A ¶ Freya lifts her eyes.
15 A Miriam peels back the shirt on her own arm, probes the cut, and winces.
16 D MIRIAM [CONT'D] (muttering): Infected by morning if we don't clean it.
17 D DEZ: We have the vodka.
18 D MIRIAM: You are not wasting the vodka.
19 D DEZ: It's for antiseptic.
20 D MIRIAM: It's for emergencies.
21 D DEZ: This is an emergency.
22 D MIRIAM: This is a Tuesday.
23 A ¶ Dez laughs, startling himself.
24 A Freya laughs, and then stops, because she is crying.
25 A Miriam shifts to sit beside her, and Dez, awkward with the boat hook, drops it and puts a rough arm around Freya's shoulders from the other side.
26 A The three of them rock in the dying light.
27 D FREYA (whispering): I wanted to see the herons.
28 D DEZ: You saw the herons.
29 D FREYA: I saw them leave.
* 30 A ¶ Above them, the first star appears over the canopy.
* 31 A The cooler lid clatters shut in a breeze.
32 A Miriam holds out the vodka bottle to Dez without looking at him, and he takes it.
33 A He pours a little over her arm, and she hisses through her teeth, and he pours a little for himself.

### SCENE s01816 | INT. SLEEP CLINIC - OBSERVATION ROOM - 4 A.M.
Detected names (may be incomplete or contain aliases): ISADORA CHUKWUMA-LEE, ROLAND PAPADOPOULOS, PATIENT
* 1 A ¶ A dark control room with a wall of monitors showing a sleeping man in a bed on the other side of a window.
* 2 A Waveforms scroll.
* 3 A A thermos, a half-eaten sandwich.
* 4 A A clock reads 4:02.
5 A ¶ DR. ISADORA CHUKWUMA-LEE, forties, sits at the central console with a cardigan over her shoulders.
6 A Her technician, ROLAND PAPADOPOULOS, thirties, slouches in a rolling chair with headphones around his neck.
7 A On the other side of the glass, the PATIENT, forties, sleeps on his back under a thin blanket, wired to a dozen electrodes.
8 D ISADORA: Roland, how long has he been in REM?
9 D ROLAND: Eleven minutes.
10 D ISADORA: Anything unusual?
11 D ROLAND: Heart rate sixty-two. Respiration steady.
12 D PATIENT [V.O.] (from speaker, mumbled): ...forty-one... forty... thirty-nine...
13 A ¶ Roland pulls off his headphones.
14 A Isadora leans forward.
15 D ROLAND: He's counting.
16 D ISADORA: Backward.
17 D ROLAND: Lots of people talk in their sleep.
18 D ISADORA: Not in sequence.
19 D PATIENT [V.O.] (from speaker): ...thirty-four... thirty-three...
20 D ROLAND (to himself): He's slowing down.
21 D ISADORA: Roland, what's his baseline?
22 D ROLAND: Normal. Textbook.
23 D ISADORA: Then why is the EEG doing that?
* 24 A ¶ A long spike of activity slides across the screen, regular and sharp, like a metronome.
25 D ROLAND: That's not REM.
26 D ISADORA: That's a seizure pattern.
27 D ROLAND: He's not seizing.
28 D ISADORA: No. Which is what concerns me.
29 D PATIENT [V.O.] (from speaker): ...twelve... eleven... ten...
30 D ROLAND (over the voice): Should we wake him?
31 D ISADORA (over Roland): Not yet.
32 D PATIENT [V.O.] (from speaker, overlapping): ...nine... eight...
33 D ROLAND: Dr. Chukwuma-Lee.
34 D ISADORA: Not yet. I want to see what happens at zero.
35 A ¶ Both of them watch.
* 36 A The numbers fall.
* 37 A The metronome spike steadies.
* 38 A The room is silent but for the voice.
39 D PATIENT [V.O.] (from speaker): ...three... two... one...
* 40 A ¶ The voice stops.
* 41 A The spike flatlines, a single clean line.
42 A Roland lunges for the intercom.
43 A Isadora doesn't move.
44 A ¶ On the monitors, the man opens his eyes.
45 A He sits up in bed, looks straight at the glass, and smiles as though he has been awake all along.
46 D PATIENT [V.O., CONT'D] (from speaker, clear): Good morning, Doctor.
47 D ISADORA (whispering): Good morning.
48 D ROLAND (to the room): He wasn't asleep.
49 D ISADORA: No.
50 A ¶ The man stretches, unhurried, swings his feet to the floor, and waves.

### SCENE s01817 | EXT. FERRY LANDING - MISSOURI RIVER - NOON
Detected names (may be incomplete or contain aliases): ISAAC DELAROSA, TOBY, WEATHERBY, ETHELINDA PRIEST, HOLLOWAY STROUD
* 1 A ¶ A flat-bottomed ferry tied to a splintered dock.
* 2 A Mud, cottonwoods, a warped sign: CROSSING 5 CENTS.
* 3 A Heat shimmers off the water.
4 A ¶ ISAAC DELAROSA, fifties, ferryman, sits on a barrel whittling a peg.
5 A TOBIAS "TOBY" WEATHERBY, twenties, a cattle driver, leans on a hitching post and fans himself with his hat.
6 A Behind them, MRS. ETHELINDA PRIEST, sixty, in black bombazine, waits with a hatbox on her knee.
7 A A silent drifter, HOLLOWAY STROUD, forties, sits on the edge of the dock with his boots hanging over the water.
8 D TOBY (to the group): Anyone else think this river's been getting wider?
9 D ISAAC: It's the same river.
10 D TOBY: I swear it's wider.
11 D MRS. PRIEST (to Isaac): Sir, when does the ferry depart?
12 D ISAAC: When it's loaded.
13 D MRS. PRIEST: It is loaded.
14 D ISAAC: It has one passenger and a hatbox.
15 D MRS. PRIEST: Then I shall speak with the other passengers.
16 A ¶ She turns to Toby and Holloway.
17 A Toby grins, puts on his hat.
18 A Holloway doesn't look up.
19 D HOLLOWAY (muttering): Won't be long now.
20 A ¶ Isaac sets down his knife.
21 A Toby's grin fades.
22 A Mrs. Priest tilts her head.
23 D MRS. PRIEST: Did you say something, sir?
24 D HOLLOWAY: Talking to the river, ma'am.
* 25 A ¶ The sound of hooves comes from the bluff.
26 A Three riders appear on the ridge, silhouetted against the sun.
27 A Toby straightens.
28 A Isaac stands.
29 A Holloway rises slowly, brushing off his knees.
30 D TOBY (to the group): Folks, I believe we have company.
31 D ISAAC: Mrs. Priest, get behind the barrel.
32 D MRS. PRIEST: I will do nothing of the sort.
33 D HOLLOWAY: Ma'am.
34 A ¶ She looks at him.
35 A He opens his coat.
* 36 A Under it, a deputy's badge.
37 D HOLLOWAY [CONT'D]: That'll be Ned Cutler and his boys. I've been waiting on them since Tuesday.
38 A ¶ Isaac and Toby stare at him.
39 A Mrs. Priest sets the hatbox on the dock, opens it, and lifts out a short-barreled revolver.
40 D MRS. PRIEST (coolly): I, too, have been waiting.
41 A ¶ The riders start down the bluff.
42 A Toby dives behind the post, Isaac drops behind the barrel, Holloway draws his pistol, and Mrs. Priest, with perfect composure, cocks the hammer and steps onto the open dock.

### SCENE s01818 | EXT. ABANDONED MISSION CHURCH - COURTYARD - SUNSET
Detected names (may be incomplete or contain aliases): CALEB MONTOYA-HART, ROSALIE, FATHER EMILIO DUARTE
* 1 A ¶ A crumbling adobe courtyard where a dry fountain stands at the center, cracked and filled with tumbleweed.
* 2 A A bell tower leans, its bell long gone.
* 3 A Long violet shadows crawl across the flagstones.
* 4 A Beyond the broken wall, the desert runs to a copper horizon.
5 A ¶ CALEB MONTOYA-HART, sixties, a widowed rancher with a weathered hat and a silver mustache, sits on the rim of the fountain with a canteen across his knees.
6 A Beside him, his granddaughter ROSALIE, ten, in a faded blue dress and a straw hat too big for her, draws in the dust with a stick.
7 A A little way off, an old gray mule named SAINT CHRISTOPHER stands with his head low, and a stranger, a wandering priest called FATHER EMILIO DUARTE, fifties, in a patched cassock and sandals, kneels by a small fire, boiling coffee in a tin cup.
* 8 A ¶ The desert is quiet.
* 9 A The coffee smells of smoke.
10 D CALEB: Father, I didn't think there was anyone left out here.
11 D FATHER EMILIO: There never is. And then there is.
12 D ROSALIE: Grandpa, why is the fountain empty?
13 D CALEB: Because there's no water.
14 D ROSALIE: But why did they build it?
15 D FATHER EMILIO: Because once there was.
16 D ROSALIE: Where did it go?
17 D FATHER EMILIO (smiling): That is a very good question, little one. The old ones said it went underground to rest.
18 D ROSALIE: Water doesn't rest.
19 D FATHER EMILIO: No? Everything rests, eventually.
20 A ¶ Rosalie considers this.
21 A She draws a long wavy line in the dust, then a second beneath it.
22 D CALEB: You've been here long?
23 D FATHER EMILIO: Some years.
24 D CALEB: Alone?
25 D FATHER EMILIO: Never alone.
26 A ¶ He lifts the cup from the fire, blows on it, and offers it to Caleb.
27 A Caleb studies it, takes it, and drinks.
28 A His shoulders ease.
29 A He passes it to Rosalie, who sips, makes a face, and hands it back.
30 D ROSALIE: That's terrible.
31 D CALEB: Rosalie.
32 D FATHER EMILIO: She is right. It is terrible coffee. But it is warm.
* 33 A ¶ The sun touches the horizon.
* 34 A The shadows of the walls stretch over the three of them.
* 35 A The mule shifts its weight and sighs.
36 D CALEB: Father, I came out to scatter my wife's ashes. I thought this was the place.
37 D FATHER EMILIO: Why here?
38 D CALEB: She was married here. Fifty years ago in June.
39 D FATHER EMILIO: Then it is the place.
40 A ¶ Caleb takes a small tin from inside his coat.
41 A He turns it over in his hands.
42 A Rosalie puts down her stick and takes his free hand.
43 A The priest crosses himself and stands.
44 D FATHER EMILIO [CONT'D]: Shall I say something?
45 D CALEB: Please.
46 D FATHER EMILIO (gently): Lord, here is a woman who loved this land. Let her rest in it.
47 A ¶ Caleb opens the tin.
* 48 A A breeze rises across the courtyard, and with it the first of the ashes lifts, a pale ribbon curling over the dry fountain, and then drifting out through the gap in the wall toward the last light.
49 D ROSALIE (whispering): Bye, Grandma.
* 50 A ¶ The wind lifts her hat.
* 51 A The mule lifts his head.
52 A The three of them watch the ribbon of dust until it is gone.

### SCENE s01819 | EXT. LIFE RAFT - OPEN OCEAN - DAY
Detected names (may be incomplete or contain aliases): ANSELMO TRUJILLO-REYES, ODALIE BRANDVOLD
* 1 A ¶ A yellow inflatable raft rides a long gray swell.
* 2 A The horizon is a razor line.
* 3 A Sun beats down on a torn canopy.
* 4 A A water jug, a flare tin, a coil of rope.
5 A ¶ ANSELMO TRUJILLO-REYES, forties, a cargo ship engineer, lies on his back on the floor of the raft, cracked lips, shirt over his head.
6 A Across from him sits ODALIE BRANDVOLD, thirties, a deckhand, her hair salted into rope, clutching the water jug to her chest.
7 D ODALIE (to herself): Don't look. Don't look at the horizon. Don't count the days.
8 D ANSELMO: You're talking.
9 D ODALIE: I'm not talking.
10 D ANSELMO: You're muttering.
11 D ODALIE: Then I'm muttering.
12 A ¶ She tilts the jug.
13 A Anselmo's eyes follow it.
14 A She lowers it without drinking.
15 D ANSELMO: How much left?
16 D ODALIE: Two inches.
17 D ANSELMO: Two inches of what? Two inches in the jug or two inches in the bottle?
18 D ODALIE: Two inches in the jug. The bottle's empty.
19 D ANSELMO: When did that happen?
20 D ODALIE: Yesterday. While you were asleep.
21 D ANSELMO: You drank it?
22 D ODALIE: I split it. Four sips each.
23 D ANSELMO: I don't remember mine.
24 D ODALIE: You were out.
25 A ¶ Anselmo pulls the shirt off his face and stares at the sky.
* 26 A Gulls wheel above.
27 D ANSELMO: Birds.
28 D ODALIE: Yes.
29 D ANSELMO: Birds mean land.
30 D ODALIE: Birds mean fish.
31 D ANSELMO: Land's close.
32 D ODALIE: Don't.
33 A ¶ She stands, rocking the raft, and shades her eyes.
34 A She cups her hands around her mouth and shouts at the empty sea.
35 D ODALIE [CONT'D] (to the horizon): HEY! HEY! OVER HERE!
* 36 A ¶ Nothing.
* 37 A Waves slap the rubber.
38 A She sits.
39 A Anselmo closes his eyes.
40 D ANSELMO: Who are you calling?
41 D ODALIE: Whoever's listening.
42 D ANSELMO: Nobody's listening.
43 D ODALIE: Somebody's always listening.
44 D ANSELMO: That's God.
45 D ODALIE: That's a plane.
46 A ¶ Anselmo opens his eyes.
* 47 A Far above, a tiny silver glint crosses the blue.
48 A Odalie lunges for the flare tin, tears it open, and fires.
* 49 A A red streak shoots up, trailing smoke.
50 A They both stare after it.
51 D ANSELMO (whispering): Did they see?
52 D ODALIE (whispering): I don't know.
* 53 A ¶ The plane glints, banks, and begins a slow, wide circle.
54 A Odalie drops the flare gun.
55 A Anselmo, laughing and sobbing, props himself on one elbow and raises his hand.
56 A She grips the jug, takes one long drink, then passes it to him.
57 D ODALIE [CONT'D]: Finish it.

### SCENE s01820 | INT. ROOFTOP PIGEON LOFT - DAY
Detected names (may be incomplete or contain aliases): TEODORO ABARCA, MILAGROS
* 1 A ¶ A plywood shed bolted to a tar roof, six floors above a bus depot.
* 2 A Wire cages line the walls.
* 3 A Feathers drift in the light from a cracked skylight.
4 A ¶ TEODORO ABARCA, 70s, thick forearms, a flat cap gone gray at the brim, kneels on an overturned bucket.
5 A He holds a speckled pigeon against his chest, checks its leg band, sets it in a crate, picks up the next bird, checks that band, and sets it in the same crate.
* 6 A A clipboard hangs from a nail beside him.
7 A He does not look at it.
* 8 A ¶ The door bangs open.
9 A ¶ His granddaughter MILAGROS, 10, braids, a school backpack bigger than her torso, stands in the doorway breathing hard from the stairs.
10 D MILAGROS: You said Thursday.
11 D TEODORO: It is Thursday.
12 D MILAGROS: You said after school Thursday.
13 D TEODORO: School is over.
14 D MILAGROS: Not for me. I ran from the bus.
15 A ¶ She drops the backpack, crosses to the crate, and puts both hands on the lid.
16 A Teodoro lifts another bird and she snatches the bird from his hands, tucks it under her arm, and backs away toward the cages while he stays on the bucket with his empty fingers still curled.
17 D TEODORO: Give him here.
18 D MILAGROS: His name is Pavarotti.
19 D TEODORO: His name is four-one-seven. The man is coming at five.
20 D MILAGROS: Then he can come and I'll be sitting on the crate.
21 D TEODORO: Milagros.
22 D MILAGROS: Mamá said you were going to ask me.
23 D TEODORO: I am asking you to put the bird in the box.
24 D MILAGROS: That's not asking.
25 A ¶ Teodoro stands, knees cracking.
26 A He takes off the flat cap, wipes his forehead with the back of his wrist, puts the cap on again.
27 A Milagros steps up onto the bucket he left so she is nearly his height, the bird still pinned under her arm, and stares at him while the other pigeons shuffle and coo behind the wire.
28 D TEODORO: Your grandmother kept forty birds up here.
29 D MILAGROS: I know.
30 D TEODORO: Forty. I have eleven.
31 D MILAGROS: Twelve. Pavarotti is the twelfth.
32 D TEODORO: Eleven that fly. Pavarotti has a wing that does not close.
33 D MILAGROS: Because nobody lets him practice.
34 D TEODORO (quietly): He practiced for two years.
35 D MILAGROS: Then the man can take the other eleven.
36 D TEODORO: The man wants twelve. It is a lot, twelve. He is paying for twelve.
37 A ¶ She steps down.
38 A She walks the length of the loft with the bird, past the water trays and the sack of feed with its mouth rolled shut, and stops at the skylight.
39 A She holds the bird up into the light.
* 40 A It opens one wing and the other hangs crooked, as Teodoro said.
41 A She lowers it.
42 A Teodoro has followed her down the aisle and stands a pace behind with one hand on a cage frame.
43 D MILAGROS: If you sell them you'll have nothing to do on the roof.
44 D TEODORO: I will come up and look at the sky.
45 D MILAGROS: You'll hate it.
46 D TEODORO: Probably.
47 D MILAGROS: Then why?
48 D TEODORO: The landlord says birds on the roof are a fee. The fee is more than the pension.
49 D MILAGROS: You never said that.
50 D TEODORO: I am saying it.
51 D MILAGROS: How much more?
52 D TEODORO: Enough.
53 D MILAGROS: How much, Abuelo?
54 A ¶ Teodoro opens his mouth, closes it, then takes the clipboard off its nail and holds it out.
55 A She reads it with her lips moving, bird tucked under one arm, and her free hand comes up and wipes her nose with her sleeve.
56 D MILAGROS [CONT'D]: That's not that much.
57 D TEODORO: It is every month.
58 D MILAGROS: I have forty dollars.
59 D TEODORO: Keep your forty dollars.
60 D MILAGROS: And Mamá has some.
61 D TEODORO: No.
62 D MILAGROS: And Tío Rafa.
63 D TEODORO: No.
64 A ¶ She hangs the clipboard back on its nail and turns to the crate.
65 A She lifts the lid, looks at the eleven birds inside shifting against one another, lowers the lid, and sits on it, bird in her lap, backpack kicked against her ankle.
66 A Teodoro lets out a breath through his nose and sits on the bucket across from her, knees almost touching hers.
67 D MILAGROS [CONT'D]: I'm not moving.
68 D TEODORO: I see that.
69 D MILAGROS: You can tell the man I got sick.
70 D TEODORO: He will wait.
71 D MILAGROS: He can wait till Christmas.
72 D TEODORO (almost smiling): You are your grandmother.
73 D MILAGROS: Good.
* 74 A ¶ Below them the bus depot's air brakes hiss, and every pigeon in the loft turns its head toward the sound at once.
75 A Teodoro unrolls the feed sack, scoops a handful, and holds it out flat.
76 A Milagros opens her hand with the bird in it and Pavarotti, left alone in her palm, pecks at the grain on her grandfather's hand.
77 D TEODORO [CONT'D]: Twelve.
78 D MILAGROS: Twelve.
79 D TEODORO: At five o'clock we will tell him eleven.
80 D MILAGROS: We'll tell him ten and a half.
81 D TEODORO: There is no half.
82 D MILAGROS: There is if he doesn't know which one.
83 A ¶ Teodoro looks at her a long moment, then at the clock on the wall that stopped years ago, then at the stairwell door still standing open.
84 D TEODORO: Close the door. You will let them out.
85 A ¶ She closes it with her heel.

### SCENE s01821 | INT. DISUSED CURLING RINK - NIGHT
Detected names (may be incomplete or contain aliases): COACH HALVORSEN, DEE, OKORO, NADIA PETROVIC, REYES, WINNIE CHO, LUCAS BRANDT, BIG TOMÁS
* 1 A ¶ Half the lights are dead.
* 2 A A sheet of ice gone gray, scarred by years of rental hockey.
* 3 A Folding chairs along the boards.
* 4 A A cooler.
* 5 A A speaker on a bucket playing nothing.
6 A ¶ Six people wait for a seventh who is late.
7 A ¶ COACH HALVORSEN, 50s, whistle on a shoelace, sits on the penalty box bench and pares an apple with a pocketknife.
8 A DESHAWN "DEE" OKORO, 30s, goalie pads already strapped, stares at his own skates.
9 A NADIA PETROVIC, late 20s, captain's C stitched crooked on her jersey, tapes a stick that is already taped.
10 A BIG TOMÁS REYES, 40s, enormous, eats sunflower seeds one at a time.
11 A WINNIE CHO, 19, new, sits straighter than the others.
12 A And LUCAS BRANDT, 30s, sponsor's nephew, wears a pressed team jacket and nothing else that says he plays.
13 A ¶ Nobody speaks.
14 A Tomás spits a shell into a cup.
15 D COACH HALVORSEN: Ice time ends at ten.
16 D NADIA: It's nine-forty.
17 D COACH HALVORSEN: So.
18 A ¶ Nadia stands, skates onto the ice, and does one lap alone.
19 A Winnie watches her.
20 A Lucas watches Winnie.
21 D LUCAS: Is she always like this?
22 A ¶ Tomás turns his head slowly.
23 D BIG TOMÁS: Like what.
24 D LUCAS: Intense.
25 A ¶ Tomás goes back to his seeds.
26 D DEE (not looking up): You're in Winnie's spot.
27 D LUCAS: It's a bench.
28 D DEE: She sits there.
29 A ¶ Lucas does not move.
30 A Winnie does not ask him to.
31 A She takes her helmet off the floor and puts it on, chin strap clicked slowly.
32 D COACH HALVORSEN: Dee. You're starting.
33 D DEE: I'm starting every game.
34 D COACH HALVORSEN: I know.
35 A ¶ He folds the knife.
36 A Eats the apple core and all.
37 A ¶ Nadia finishes her lap and stops at the boards in front of Lucas, close enough that her breath fogs his jacket.
38 D NADIA: Who gave you a roster spot?
39 D LUCAS: My uncle owns the sponsor.
40 D NADIA: Right. And who gave him a tax break?
41 D LUCAS: I didn't come here to fight.
42 D NADIA: You didn't come here to play either.
43 D WINNIE: Leave it.
44 D NADIA: He took your minutes.
45 D WINNIE: I said leave it.
* 46 A ¶ Silence.
* 47 A The speaker crackles and cuts out again.
48 A ¶ Tomás stands.
49 A He is very tall standing.
50 A He picks up Lucas's stick from the rack, studies it, and hands it back blade first.
51 D BIG TOMÁS: Tape's wrong.
52 D LUCAS: I taped it this morning.
53 D BIG TOMÁS: That's what I said.
54 A ¶ Lucas takes the stick.
55 A His hand shakes a little on the shaft and he hides it by gripping tighter.
56 A ¶ Coach Halvorsen blows his whistle once.
57 A Everyone stops.
58 D COACH HALVORSEN: Lucas. Line one.
59 D NADIA: Coach.
60 D COACH HALVORSEN: Line one, with Winnie and Tomás.
61 D NADIA: That's my line.
62 D COACH HALVORSEN: Then you'll be on the bench.
63 A ¶ Nadia looks at him.
64 A At Lucas.
65 A At Winnie.
66 A She takes the C off her chest in one hard tear and drops it on the ice, where it sits, a small crooked patch.
67 A ¶ Nobody moves to pick it up.
68 D DEE (low): Nadia.
69 D NADIA: Don't.
70 A ¶ She skates off to the far end.
71 A Slams the boards with her stick.
* 72 A The sound goes up into the dead lights and comes back.
73 A ¶ Winnie steps onto the ice.
74 A Lucas follows, wobbles, catches himself on her sleeve.
75 A She lets him hold it for a second, then removes his hand.
76 D WINNIE: Skate wide. Don't touch anyone.
77 D LUCAS: Why not?
78 D WINNIE: Because she's waiting for you to.
79 A ¶ At the far end Nadia has stopped.
80 A She turns.
81 A Her stick comes up.
82 D TOMÁS (under his breath): Here we go.
83 A ¶ Dee pulls his mask down.
84 A The puck drops by itself, dropped from Coach's fist onto the ice with a click, and then there is only the sound of blades.
85 A ¶ Nadia is already moving.
86 A Lucas tries to turn and cannot.
87 A She hits him hip-first into the boards and the whole rink shakes.
88 A He goes down.
89 A She stands over him, breathing, her stick lifted to the height of her shoulder.
90 A ¶ Tomás is on her in two strides, wrapping her arms.
91 A Winnie is between them.
92 A Dee has left the net and is standing at the blue line, mask pushed up, pads dripping frost.
93 D NADIA (through teeth): Let go of me.
94 D BIG TOMÁS: When you drop it.
95 A ¶ She doesn't.
96 A He doesn't.
* 97 A The stick shakes between them.
98 D COACH HALVORSEN (from the bench, calm): Ten o'clock.
* 99 A ¶ The lights above the far end click off, one bank after another, until the only light left is over the six of them, and then that one goes too.

### SCENE s01822 | INT. SALT MINE ELEVATOR CAGE - NIGHT
Detected names (may be incomplete or contain aliases): CASIMIR DRAGOMIR, INSPECTOR LEILA FARHAT, DOMINIK VESEL
* 1 A ¶ A steel cage the size of a confessional hangs in a shaft, two hundred meters of dark below its floor.
* 2 A The walls sweat brine.
* 3 A A single caged bulb swings, though the cage itself is still.
4 A ¶ CASIMIR DRAGOMIR, 40s, mining engineer, hard hat cocked over one eye, grips the control lever with a white fist.
5 A Across from him, wedged against the mesh, stands INSPECTOR LEILA FARHAT, 30s, in a borrowed orange jumpsuit two sizes too large, a laminated badge swinging at her sternum.
6 A She keeps her eyes on the ceiling.
* 7 A ¶ The cage shudders.
* 8 A A shower of salt grit rains down on both of them.
9 D LEILA: You said it was a routine descent.
10 D CASIMIR: It was routine until it stopped.
11 D LEILA: Then start it.
12 D CASIMIR: I have pulled it eleven times.
13 D LEILA: Pull it twelve.
14 A ¶ He pulls.
* 15 A The lever clacks.
* 16 A Nothing.
17 D CASIMIR: There is a stone in the guide rail, or the cable has slipped a tooth, or the dispatcher has gone to his supper. I do not know which. I know only that I am forty-six years old and the sign at the top says six persons maximum and we are two and still we are not moving.
18 D LEILA: Do you want to hear what I wrote in my report on this shaft?
19 D CASIMIR: No.
20 D LEILA: That the guide rails were due for replacement in March.
21 D CASIMIR: It is October.
22 D LEILA: Yes.
23 D CASIMIR: Then you are a woman who knew.
24 D LEILA: I am a woman who filed.
* 25 A ¶ A sound rolls up out of the dark below, a long metallic yawn, like a ship settling.
26 A Both of them look down through the grated floor.
* 27 A The bulb swings.
28 A Neither speaks until it stops.
29 D CASIMIR (whispering): That is not the rail.
30 D LEILA: Then what?
31 D CASIMIR: Somebody is in the shaft.
* 32 A ¶ A beam of white light cuts up through the grating from below.
* 33 A It sweeps their boots, then their faces, then settles on Casimir's chest.
34 A He raises a hand against it.
35 A ¶ From the dark, a third person climbs into view along the guide rails, a dripping figure hand over hand: DOMINIK VESEL, 60s, a night-shift rigger in a rusted harness, a headlamp strapped to his forehead, a coil of rope slung across his shoulder.
36 A He grips the cage floor and hangs there, grinning through salt-white stubble.
37 D DOMINIK: Forty minutes I have been under you, shouting.
38 D CASIMIR: Dominik.
39 D DOMINIK: You didn't hear.
40 D CASIMIR: I did not.
41 D DOMINIK: Of course not. You never listen when the lever is in your hand.
42 A ¶ He hauls one leg onto the floor grate.
43 A Leila steps back to give him room, though there is none.
44 D LEILA: Who is this?
45 D CASIMIR: My rigger.
46 D DOMINIK (to Leila): Madam, with respect, if you knew what I know about this cable you would not be standing so calmly.
47 D LEILA: I am not calm.
48 D DOMINIK: Then you are the first sensible one today.
49 A ¶ He swings the rope off his shoulder and clips it to a ring in the cage wall, then to his harness, then, without asking, to Leila's belt.
50 A She looks down at the carabiner clicking shut against her hip.
51 D LEILA: What are you doing?
52 D DOMINIK: Insurance.
53 D CASIMIR: Dominik. Tell us.
54 A ¶ Dominik wipes his face.
55 A His grin goes.
56 D DOMINIK: The cable is fraying at the third splice. Not the first, the third. It will hold a minute, maybe two. Not more.
57 D CASIMIR: You are certain?
58 D DOMINIK: I held it in my hand.
* 59 A ¶ The cage jerks.
* 60 A A hard small drop, an inch, then it catches.
61 A All three go rigid.
62 D LEILA: Move the lever.
63 D CASIMIR: If I move it the splice may part.
64 D LEILA: And if you don't?
65 D CASIMIR: Then the splice may part anyway.
66 A ¶ Dominik laughs, one short bark that echoes in the shaft.
67 A He claps Casimir on the shoulder.
68 D DOMINIK: There. A man who understands the odds.
69 A ¶ Casimir takes a long breath.
70 A He sets his hand on the lever, and with the other hand he reaches out and grips Leila's wrist.
71 D CASIMIR: Hold the mesh. Both hands.
72 A ¶ She does.
73 A He pulls the lever down.
* 74 A The cage lurches, climbs a meter, a second meter, screaming against the rail, then stops again so hard that her hard hat clatters off and falls away into the dark.
75 A They all listen to it fall.
* 76 A It does not hit anything for a very long time.
77 D DOMINIK (softly): That was a good hat.
* 78 A ¶ Above them, far up the shaft, a pinprick of daylight-colored lamp appears and begins to grow.

### SCENE s01823 | INT. ORBITAL FERRY AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): TECHNICIAN YUSUF BELLAMY, CONTROL, COMMANDER ISOLDE RAINES
* 1 A ¶ A cramped airlock.
* 2 A Red warning strip lights pulse on the walls.
3 A ¶ TECHNICIAN YUSUF BELLAMY, 30s, pressure suit, helmet off, bangs on the inner hatch with a gloved fist.
4 D YUSUF: Control, I've got seal failure on lock two. Repeat, seal failure.
5 D CONTROL [V.O.] (over radio): Copy lock two. Do not cycle the outer door.
6 D YUSUF: I'm not cycling anything. Something's cycling it for me.
* 7 A ¶ The outer door groans a hand's width open.
* 8 A Air shrieks out.
9 A Yusuf clips his tether to a rail and grabs the manual lever with both hands.
* 10 A ¶ Behind him, the inner hatch pops.
11 A COMMANDER ISOLDE RAINES, 50s, bare-headed and furious, shoulders in and slaps a patch over the leak in one move.
* 12 A The shriek stops.
* 13 A The outer door shudders closed.
* 14 A ¶ Silence.
15 A Both breathe.
16 D ISOLDE: Stop shouting at the radio.
17 D YUSUF: It was loud.
18 D CONTROL [V.O.]: Lock two, status?
19 D ISOLDE (into her collar): Sealed. Tell maintenance their gasket is a joke.
20 A ¶ She hauls Yusuf upright by the harness.
21 A He laughs, shaky.
22 A She does not.

### SCENE s01824 | INT. HOTEL LAUNDRY ROOM - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR WALTER PRYCE, ADELAIDE VOSS, FINN, DOYLE
* 1 A ¶ Steam, sheets, rolling carts.
* 2 A A brass bell on the counter.
3 A ¶ INSPECTOR WALTER PRYCE, 50s, rumpled trench coat, hat in hand, leans on the counter.
4 A Behind it, MRS. ADELAIDE VOSS, 60s, laundress, folds pillowcases in perfect squares without looking down.
5 D PRYCE: Room two-fourteen sent down a bundle Tuesday.
6 D MRS. VOSS: Many rooms send bundles.
7 D PRYCE: This one had a monogram. "H.L."
8 D MRS. VOSS: There are two Hs in the hotel. One is a duchess.
9 D PRYCE: And the other?
10 D MRS. VOSS: Left Wednesday.
11 A ¶ The door swings and a young bellhop, FINNEGAN "FINN" DOYLE, 17, buttons crooked, hurries in with a cart.
12 D FINN: Mrs. Voss, the Hargrove suite wants--
13 A ¶ He sees Pryce and stops.
14 D PRYCE: Hargrove, you say?
15 D FINN: I didn't say anything.
16 D ^MRS. VOSS: Finn, the cart.
17 A ¶ Pryce smiles slowly and taps his hat against his palm.
18 D PRYCE: Mrs. Voss, I'd like to see that bundle.
19 D MRS. VOSS: It's been laundered.
20 D PRYCE: I thought it might have been.

### SCENE s01825 | EXT. FLOODED RICE TERRACE - DUSK
Detected names (may be incomplete or contain aliases): BAPAK SURYA, RATIH, ARJUNA PERKASA, GILANG
* 1 A ¶ Water the color of tin stands knee-deep across a stepped hillside, the stalks long since drowned.
* 2 A Five people have been walking its dikes since the bridge went.
* 3 A The sky is the same gray as the water, and the line between them has stopped meaning anything.
4 A ¶ The oldest, a farmer named BAPAK SURYA, sixty-odd, leads along the narrow dike with a staff in one hand.
5 A He tests each step before trusting it, and when the mud takes his foot to the ankle he does not curse, only pulls it free with a sound like a kiss and goes on.
6 A ¶ Behind him comes his daughter-in-law, RATIH, thirty, a baby strapped to her chest in a sling made from a patterned cloth.
7 A She walks with her chin tucked, shielding the child from the rain that has not yet started.
8 A She does not speak.
9 A Her lips move, counting something.
10 A ¶ Third in line is the schoolteacher, MR. ARJUNA PERKASA, forty, still wearing his tie, soaked through.
11 A He carries a transistor radio he cannot get to work and hasn't thrown away.
12 A Every few steps he lifts it to his ear, shakes it, and lowers it again.
13 A ¶ Fourth, a boy of twelve called GILANG, who is Ratih's brother.
14 A He keeps to the edge, where the dike is thinnest, as if daring it.
15 A He stops to pick up a drowned frog, studies it, and drops it back.
16 A Then he runs three steps to catch up and nearly goes in.
17 A ¶ Last, limping, is the stranger they picked up at the washed-out road, a woman in a field-medic's vest who has said only that her name is DEWI.
18 A She walks with a hand pressed to her ribs.
19 A Her eyes keep to the horizon in the way of someone who has decided to see the end of something.
* 20 A ¶ At the next bend the dike widens into a little island with a lone coconut palm leaning on it.
21 A Bapak Surya reaches it first, sets down his staff, and lowers himself onto a root.
22 A He gestures with two fingers, and without a word the others gather.
23 A ¶ Ratih unwraps the sling and sits, rocking the baby until it settles.
24 A The teacher crouches beside her and sets the radio on his knee; he thumbs the dial slowly, and from it comes only a slow hiss.
25 A The boy squats at the water's edge and cups his hands, drinks, and spits.
26 A ¶ Dewi lowers herself last.
27 A She takes her hand off her ribs, looks at it, and wipes it clean on the leg of her trousers.
28 A The old man watches her do this.
29 A He does not ask.
30 A He takes a small packet of salted rice from his shirt and breaks it into five unequal portions, and the biggest, after a moment's thought, he gives to her.
31 A ¶ She takes it.
32 A She nods once.
33 A Then she eats, slowly, while the first drops of rain begin to dimple the water around them.

### SCENE s01826 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): VINNIE, CARUSO, DARIUS CALLOWAY, MARISOL DEVEREAUX, LORNE TREMBLAY, ^MARISOL
* 1 A ¶ A windowless room behind a pawnshop.
* 2 A Shelves of unclaimed guitars, a safe the size of a refrigerator, a card table under a hanging bulb.
* 3 A A space heater ticks in the corner.
4 A ¶ Four people.
5 A VINCENT "VINNIE" CARUSO, 50s, the owner, sits at the card table counting cash into stacks with a wet thumb.
6 A His nephew DARIUS CALLOWAY, 20s, leans on the safe with arms folded, a duffel bag at his feet.
7 A At the door stands MARISOL DEVEREAUX, 30s, in a long coat, one hand in her pocket.
8 A And across from Vinnie, on a folding chair, sits LORNE TREMBLAY, 40s, a courier who has not taken off his gloves.
9 D VINNIE: Eleven. Twelve.
10 A ¶ He slides a stack to Lorne and starts a new one.
11 D LORNE: It was fifteen.
12 D VINNIE: It was fifteen before the thing with the plates.
13 D LORNE: Nobody told me about plates.
14 D VINNIE: Nobody told me you'd double-park.
15 A ¶ Darius uncrosses his arms, bends to unzip the duffel an inch, looks inside, and zips it again.
16 A Marisol shifts against the door frame and the floor creaks.
17 A Lorne watches her.
18 A She watches Vinnie.
19 A Vinnie keeps counting, and no one in the room touches anything they haven't already touched.
20 D LORNE: Who is she?
21 D VINNIE: A friend of the family.
22 D LORNE: She doesn't look like family.
23 D MARISOL: That's because I'm not.
24 A ¶ She takes her hand out of her pocket.
* 25 A It is empty.
26 A She sets it on the doorknob, and Lorne breathes out.
27 D LORNE: You're making me nervous, lady.
28 D MARISOL: Good.
29 D VINNIE: Marisol, sit.
30 D MARISOL: I'm fine.
31 D VINNIE: Sit down. You're scaring the courier.
32 A ¶ She sits on an amp case near the door.
33 A Darius crouches by the duffel again.
34 D DARIUS: Uncle V. It's not all there.
35 D VINNIE: Of course it's not all there.
36 D DARIUS: Then what's the point of--
37 D VINNIE (cutting in): What's the point is we count it twice, once for him and once for us.
38 A ¶ Lorne leans forward.
* 39 A The chair squeaks.
40 D LORNE: I want to know what's in the duffel.
41 D DARIUS: Paperwork.
42 D LORNE: Paperwork doesn't make a sound like that.
43 D VINNIE: It's a lot of paper.
44 A ¶ Lorne stands.
45 A Darius stands.
46 A Vinnie sets his stack down.
47 A Marisol rises off the amp case with one slow movement and stands between the door and the table.
48 A Nobody speaks.
* 49 A The space heater ticks louder than it did.
50 D LORNE: Open it.
51 D DARIUS: No.
52 D LORNE: Open it, or I walk and take the eleven.
53 D VINNIE: Take the eleven.
54 D LORNE: Twelve.
55 D VINNIE: Twelve.
56 A ¶ Lorne reaches down for the money, but Darius steps forward and blocks the table.
57 A They stand almost chest to chest.
58 A Lorne is shorter.
59 A He does not step back.
60 D MARISOL: Darius.
61 D DARIUS (over his shoulder): He's not leaving with it.
62 D VINNIE (simultaneously): Let him take the twelve.
63 D ^MARISOL: Let him go, Darius.
64 A ¶ Darius does not move.
65 A Marisol puts her hand into her coat pocket again, and this time the shape in it is not empty.
66 D MARISOL [CONT'D]: Step away from the table.
67 A ¶ Everyone freezes.
* 68 A The bulb sways.
* 69 A It lights Lorne's face, then Darius's, then Marisol's, then Vinnie's, one after another, as it swings.
70 A ¶ Darius steps back.
71 A His hands come up.
72 A Lorne takes the twelve stacks, folds them into his jacket, and walks to the door.
73 A Marisol opens it for him and he goes through.
* 74 A ¶ The door closes.
* 75 A The latch clicks.
76 A Vinnie lets out a breath he has been holding for a long time, and sits.
77 D VINNIE (to Marisol): You had nothing in the pocket.
78 D MARISOL: I had a stapler.
79 A ¶ Darius, still with his hands up, starts to laugh.
80 A It cracks halfway into a cough.
81 A Vinnie rubs his eyes with one hand, then reaches across and unzips the duffel himself.
* 82 A ¶ Inside, under a folded newspaper, are bricks of cash, rubber-banded.
83 D VINNIE: Count it again.
84 D DARIUS: Now?
85 D VINNIE: Now.
86 A ¶ Darius kneels.
87 A Marisol takes off her coat and hangs it on a guitar neck.
88 A Somewhere out front the shop bell rings once, and all three go quiet and look at the door.

### SCENE s01827 | INT. DRIVE-THROUGH WEDDING CHAPEL - NIGHT
Detected names (may be incomplete or contain aliases): REVEREND AMOS PLUMB, BETTINA, DUANE, MARGO TALLEY
* 1 A ¶ A neon window.
* 2 A A speaker box.
* 3 A A cardboard heart.
4 A ¶ REVEREND AMOS PLUMB, 60s, rhinestone collar, leans out the window, microphone on a stand.
5 A In the car below: BETTINA, 26, veil taped to her head, and DUANE, 28, tux jacket over a hoodie.
6 D AMOS: Do you, Duane, take this woman?
7 D DUANE: Yes.
8 D AMOS: You didn't let me finish.
9 D DUANE: Sorry. Yes.
* 10 A ¶ Behind them, the car's back door opens.
11 A A third person climbs out.
* 12 A Wrong car.
* 13 A Wrong chapel.
14 A MARGO TALLEY, 40s, fast food uniform, a tray of milkshakes.
15 D MARGO: Which one of you ordered the vanilla?
16 A ¶ Everyone freezes.
17 A Bettina points at Duane.
18 A Duane points at Amos.
19 A Amos points at the menu.
20 D BETTINA: We didn't order food.
21 D MARGO: It says wedding combo.
22 D AMOS: That's the second package.
23 A ¶ Margo hands a shake through the window.
24 A Amos takes it.
25 A Duane grabs for it.
26 A They fight over the cup; it pops its lid and sprays all three.
* 27 A ¶ Silence.
* 28 A Whipped cream drips from the veil.
* 29 A ¶ Then headlights sweep the lot.
30 A Amos grabs the microphone, and his voice booms from the speaker box.
31 D AMOS [O.S.]: Next couple, please pull forward.
32 A ¶ Everyone scatters.

### SCENE s01828 | INT. DESALINATION HABITAT - CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ENGINEER PRIYA NAIR, HELMUT KASSEL, UNIT SEVEN
* 1 A ¶ Seabed pressure hum.
* 2 A Condensation on every pipe.
* 3 A Emergency strips at ankle height.
4 A ¶ ENGINEER PRIYA NAIR, 40s, sits on the floor against a bulkhead, a toolkit open beside her.
5 A She is rewiring a panel by feel.
6 A Her hands are steady.
7 A ¶ DR. HELMUT KASSEL, 60s, stands over her in a gray sweater.
8 A He holds a clipboard he has stopped writing on.
9 A ¶ A drone, UNIT SEVEN, a squat gray cylinder on treads, idles at the end of the corridor, blue eye dimming and brightening.
10 D HELMUT: Pressure's down four percent.
11 D PRIYA: I know.
12 D HELMUT: Since the shift change.
13 D PRIYA: I said I know.
14 A ¶ She strips a wire with her teeth, spits the insulation.
15 A Helmut watches her do it.
16 D HELMUT: You're not asking me to hold the light.
17 D PRIYA: You'd drop it.
18 A ¶ He sets the clipboard on the floor, clicks on the penlight, and aims it at the panel.
19 A She does not thank him.
20 A ¶ The drone rolls forward a meter and stops.
21 A Its eye turns amber.
22 D UNIT SEVEN [V.O.] (flat synthetic voice): Reminder. Evacuation capsule capacity is two. Habitat population is three.
23 A ¶ Priya's hands stop.
24 A Helmut's penlight wavers.
25 D PRIYA: Unit Seven. Mute.
26 D UNIT SEVEN [V.O.]: Muting is not permitted during a pressure advisory.
27 D PRIYA: Then roll back.
28 A ¶ The drone rolls back.
* 29 A A meter.
* 30 A Two.
* 31 A The amber stays on.
32 A ¶ Helmut crouches.
33 A He puts a hand on Priya's wrist.
34 A She looks at it, then at him.
35 A She does not pull away.
36 D HELMUT: How long until it holds?
37 D PRIYA: An hour. Maybe three.
38 D HELMUT: And if it doesn't?
39 A ¶ She shrugs.
40 A He nods slowly.
41 A He takes his hand back, picks up the clipboard, and writes something.
42 A Tears off the page.
43 A Folds it.
44 A Sets it beside her toolkit.
45 D PRIYA: What is that?
46 D HELMUT: Names, for the capsule. In order.
47 A ¶ She doesn't open it.
48 A She goes back to the panel, and the wire slides home with a small click.
* 49 A ¶ The pipes overhead shudder once.
* 50 A A bead of water forms on the ceiling, hangs, and falls onto the folded paper.
51 A ¶ Priya covers it with her palm.
52 A She looks up the corridor at the drone's amber eye.
53 D PRIYA [CONT'D]: Unit Seven. Tell the surface we are fine.
54 D UNIT SEVEN [V.O.]: Transmitting. Confirm: you are fine?
55 A ¶ She says nothing.
56 A The eye returns to blue.
57 A ¶ Helmut slides down the wall until he is sitting beside her.
58 A They watch the panel.
* 59 A The pressure gauge ticks up one notch, then holds.
60 D HELMUT (quietly): Three percent.
61 D PRIYA: Two.
62 A ¶ He laughs, softly, and closes his eyes.

### SCENE s01829 | INT. CIRCUIT COURT HALLWAY - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSALIND HARTE, ELIAS HARTE, ATTORNEY NOEL BASHIR
* 1 A ¶ A long terrazzo corridor lined with scarred oak benches, each with a brass nameplate for a donor nobody remembers.
* 2 A Fluorescent tubes hum overhead.
* 3 A A radiator under a tall window knocks twice and goes silent.
* 4 A Through the glass, a parking structure and a gray sky.
5 A ¶ On the bench nearest the courtroom doors, ROSALIND HARTE, 58, sits upright in a navy suit that fit better ten years ago.
6 A Her hands hold a plastic folder closed on her lap.
7 A Her reading glasses hang from a chain, untouched.
8 A ¶ Next to her but not touching, her son ELIAS HARTE, 31, hunches forward, elbows on his knees, a county-issue lanyard around his neck, his hair cut short by someone else.
9 A He picks at a thread on his cuff.
10 A ¶ At the water fountain, leaning with arms crossed, is ATTORNEY NOEL BASHIR, 40s, in a charcoal suit and a tie loosened half an inch.
11 A He has been standing there for some time.
12 D ROSALIND: You haven't eaten.
13 D ELIAS: I'm fine.
14 D ROSALIND: There's a machine at the end. I have quarters.
15 D ELIAS: I'm not hungry.
16 D ROSALIND: You said that in the car.
17 D ELIAS: Because I wasn't.
18 D NOEL (crossing to them): We have twenty minutes. The judge wants the statement before the lunch recess.
19 D ROSALIND: Does it have to be him who reads it?
20 D NOEL: It's his statement, Mrs. Harte.
21 D ROSALIND: I wrote half of it.
22 D ELIAS: You wrote all of it.
23 D ROSALIND: I wrote what you told me.
24 D ELIAS: You wrote what I should have told you.
25 D NOEL: Either way, it needs to be said out loud. The judge wants to hear a voice, not a page.
26 D ELIAS: And if my voice doesn't work?
27 D NOEL: Then you wait and try again.
28 D ELIAS: She doesn't give people a second try.
29 D NOEL: She gives them more than you think.
30 D ROSALIND: Noel, do you have children?
31 D NOEL: Two.
32 D ROSALIND: Then you know it's not about what the judge gives.
33 D NOEL (gently): I know.
34 A ¶ Elias stands abruptly, walks to the window, and lays his palm flat against the glass.
* 35 A The radiator knocks again.
36 A Rosalind opens the folder, takes out three typed pages, and smooths them against her knee.
37 D ROSALIND: I'll read the first paragraph with you.
38 D ELIAS: Mom.
39 D ROSALIND: Not for the judge. For the hallway.
40 D ELIAS: Nobody's in the hallway.
41 D ROSALIND: Then it won't matter if I stumble.
42 A ¶ She begins, almost inaudibly, to read.
43 A Elias turns from the window.
44 A Noel steps back toward the fountain, giving them the bench.

### SCENE s01830 | INT. VICTORIAN PARLOR - EVENING
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH, SIR REGINALD ASHWORTH, PHILIPPA MARLOWE, EZEKIEL FROST, HARGREAVES, CAPTAIN JULIAN VANE
* 1 A ¶ 1893.
* 2 A Gaslight, heavy drapes, a piano no one has touched in years.
* 3 A A dinner is being given and nothing has been eaten.
4 A ¶ LADY CORDELIA ASHWORTH, 50s, black silk, sits very straight at the head of a small table.
5 A Beside her, her husband SIR REGINALD ASHWORTH, 60s, whiskers waxed, studies a fork.
6 A Opposite, their niece PHILIPPA MARLOWE, 20s, pale blue gown, turns her water glass a quarter turn and back.
7 A Next to her, the family solicitor MR. EZEKIEL FROST, 50s, spectacles, holds a folded paper he has not yet unfolded.
8 A By the sideboard stands the butler HARGREAVES, 60s, white gloves, expressionless.
9 A And at the foot of the table, hat still on, sits CAPTAIN JULIAN VANE, 30s, in a regimental coat with one button missing.
* 10 A ¶ A clock ticks.
11 A Nobody lifts a spoon.
12 D LADY CORDELIA: Hargreaves. The soup is cold.
13 D HARGREAVES: It was cold when it was served, madam.
14 D LADY CORDELIA: Then take it away.
15 A ¶ Hargreaves does not move.
16 A Sir Reginald sets the fork down.
17 A Philippa stares at the captain's missing button.
18 D SIR REGINALD: Frost. You had something to read.
19 D MR. FROST: I had, Sir Reginald. After dinner.
20 D SIR REGINALD: There is no dinner.
21 D MR. FROST: Quite.
22 A ¶ Mr. Frost unfolds the paper.
23 A He smooths it twice.
24 A Captain Vane takes off his hat and sets it, crown down, beside his plate.
25 A Philippa lifts her eyes to the ceiling.
* 26 A ¶ A bell rings in the hall.
* 27 A The house telephone, a new brass horn on the wall, rattles.
28 A ¶ Hargreaves slips out to the hall.
29 A The receiver is lifted.
* 30 A His voice carries back through the open door.
31 D HARGREAVES [O.S.]: Yes. Yes. I will convey it.
* 32 A ¶ The receiver is set down with great care.
33 A He returns.
34 D LADY CORDELIA: Well?
35 D HARGREAVES: The constable, madam. He is at the gate.
36 A ¶ Captain Vane stands.
37 A His chair scrapes.
38 A Sir Reginald does not look at him.
39 D PHILIPPA (low): Julian.
40 D CAPTAIN VANE: Sit down, Pippa.
41 A ¶ She does not sit down, because she has not stood.
42 A She holds the glass.
43 A Lady Cordelia dabs her mouth with a napkin that has touched nothing.
44 D LADY CORDELIA: Reginald, the paper.
45 D SIR REGINALD: Frost.
46 D MR. FROST (reading): "I, Hartley Ashworth, being of sound mind--"
47 D CAPTAIN VANE: Stop.
48 D MR. FROST: Captain, I must.
49 D CAPTAIN VANE: Not that one. The other.
50 A ¶ Mr. Frost turns the page over.
* 51 A There is a second sheet beneath it.
52 A He reads it silently.
53 A His face loses color.
54 A He passes it to Sir Reginald, who reads and passes it to his wife.
55 A ¶ Lady Cordelia folds it into a square, then a smaller square, then places it in the candle flame.
* 56 A ¶ The paper curls and blackens.
57 A Nobody breathes.
58 D HARGREAVES (at the door, quietly): Shall I admit the constable, madam?
59 D LADY CORDELIA: Not yet.
60 A ¶ She takes up her spoon.
61 A She tastes the cold soup.
62 A She sets the spoon down.
63 D LADY CORDELIA [CONT'D]: Now.

### SCENE s01831 | INT. MUSEUM VENTILATION DUCT - NIGHT
Detected names (may be incomplete or contain aliases): NELL PARISH
* 1 A ¶ A square steel tunnel, barely wider than shoulders.
* 2 A A penlight clenched in teeth throws a thin beam ahead.
3 A ¶ NELL PARISH, 30s, black bodysuit, crawls on her elbows toward a grate.
4 A She stops.
5 A Listens.
* 6 A Under her, far below, a floor polisher whines and fades.
7 A She starts again, slower, dragging a duffel behind her by a strap.
* 8 A ¶ A tiny recorder clipped to her collar clicks and plays her own voice, recorded days ago, flat and rehearsed.
9 D NELL [V.O.] (recorded): Guard's on the east wing at the top of the hour. Four minutes, no more.
10 A ¶ She does not react.
11 A She reaches the grate and peers through.
* 12 A Below is a gallery, pale, a single painting lit on the far wall.
13 A She takes the penlight out of her mouth and clicks it off.
14 A ¶ She works a screwdriver into the first bolt.
* 15 A It turns.
* 16 A The second.
* 17 A The third sticks.
18 A She breathes out, wipes her palm on her thigh, tries again, and it gives with a squeal that echoes along the duct.
19 A ¶ She freezes.
* 20 A Below, the polisher stops.
* 21 A Footsteps, slow, heavy, approaching.
* 22 A A flashlight beam crosses the gallery floor and slides up the wall.
* 23 A It passes the grate.
* 24 A It passes again.
25 A She holds her breath until the beam moves on.
26 D NELL [V.O.] (recorded): Three minutes. Do not rush the rope.
27 A ¶ She lifts the grate out, lays it in the duct, and rolls onto her back.
28 A She unclips a coil of rope from her belt, ties it to a bracket, tests the knot with her full weight.
29 A Then she feeds the rope through the opening, lowers herself over the edge, and hangs there, boots swinging three meters above the parquet.
30 A ¶ She drops the last meter.
31 A Lands in a crouch.
* 32 A Silent.
33 A ¶ She crosses to the painting, a small landscape in a heavy frame.
34 A She runs two fingers around the wire.
35 A Pulls a thin cutter.
36 A Snips.
* 37 A The frame sags.
* 38 A ¶ Behind her, a door handle turns.
39 D NELL [V.O.] (recorded): If you hear the handle, you're already late.
40 A ¶ She doesn't stop.
41 A She slips the canvas free of the frame, rolls it into a tube, shoves it into her duffel, and runs.
* 42 A The door opens as she reaches the rope.
43 A She climbs, hand over hand, as a flashlight beam swings up through the gap.
44 A ¶ She makes the grate.
45 A Pulls the rope up after her.
46 A Drags the grate back across the opening, and lies flat in the dark, her heart loud in her ears.
* 47 A ¶ Below, the guard's boots stop under the vent.
* 48 A A long moment.
* 49 A Then they turn and walk away.
50 A ¶ She reaches up and switches off the recorder.
51 A She smiles in the dark.

### SCENE s01832 | INT. ROADSIDE WAY STATION - DAY
Detected names (may be incomplete or contain aliases): MA TULLIVER, SPARROW, ORVILLE PENN, SABINA ROJAS, OSCAR HALE, JUDE CALLAHAN, ^OSCAR
* 1 A ¶ Adobe walls, a stove gone cold, six mismatched chairs pulled to a long table.
* 2 A Dust hangs in the shaft of light from the door.
* 3 A Outside, a horse stamps.
4 A ¶ Six people sit down to a meal none of them wants.
5 A The proprietor, MA TULLIVER, sixty, sleeves rolled, ladles beans into tin bowls and says nothing.
6 A Her hired boy, SPARROW, fifteen, sets them down one by one.
7 A A drummer in a checked vest, ORVILLE PENN, forty, sits with his sample case under his boots.
8 A A woman in gray travel wool, SABINA ROJAS, thirty, holds her bowl and does not lift the spoon.
9 A A tall rancher, OSCAR HALE, fifty, takes his hat off for grace though no one says one.
10 A And in the corner chair, back to the wall, a stranger in a dusty duster, JUDE CALLAHAN, thirty-five, watches the door.
* 11 A ¶ The beans steam.
* 12 A For a long moment there is only the sound of spoons.
13 D ORVILLE: Lovely weather for the road.
14 D OSCAR: It's rained twice in a year.
15 D ORVILLE: That's what I said.
16 D SABINA: Is there a stage tonight?
17 D MA TULLIVER: Stage came and went.
18 D SABINA: I was told it comes at four.
19 D SPARROW: It did come at four. You were upstairs.
20 D SABINA: Nobody woke me.
21 D MA TULLIVER (over her): Sparrow, fetch the bread.
22 A ¶ He goes.
23 A Oscar glances at Jude, who has not touched his bowl.
24 A Orville clears his throat and opens his mouth, but Sabina speaks first.
25 D SABINA: Mister, are you not hungry?
26 D JUDE: Not particularly.
27 D OSCAR: He's waiting on somebody.
28 D JUDE: I'm waiting on supper to finish.
29 D OSCAR: Then it's finished.
30 A ¶ He shoves his bowl away.
31 A Ma Tulliver sets down her ladle.
* 32 A The room tightens like a drawn cord.
33 A ¶ She comes around the table, slow, wiping her hands on her apron.
34 A She stops behind Jude's chair and rests one palm on its back.
35 A He does not turn his head.
36 A ¶ Sparrow returns with the bread, sees them, and stops in the doorway with the loaf held against his chest.
37 D SPARROW: Ma?
38 D MA TULLIVER: Put it down, son.
39 A ¶ He sets it on the sideboard.
40 A Orville slides his sample case farther under his chair.
41 A Sabina rises halfway, then sits again as Oscar lays a hand over hers.
42 D JUDE (quietly): Ma'am. You know who I am.
43 D MA TULLIVER (simultaneously): I know whose boy you are.
44 D ^OSCAR (simultaneously): We all know whose boy.
45 A ¶ Jude smiles, tired.
46 A He reaches into his duster.
47 A Everyone in the room draws a breath, and what he takes out is a folded letter, creased soft with handling.
48 D JUDE [CONT'D]: He asked me to bring this.
49 A ¶ He sets it on the table, in the middle of the beans.
50 A Nobody reaches for it.
* 51 A Outside the horse stamps, and stamps again, and a long shadow crosses the doorway.

### SCENE s01833 | INT. DEPARTMENT STORE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): MISS GWENDOLYN FAIRWEATHER, HERBERT PUMPHREY
* 1 A ¶ An old brass-and-mahogany elevator with a folding gate.
* 2 A A mirror on every wall.
* 3 A Soft music from a hidden speaker.
4 A ¶ MISS GWENDOLYN FAIRWEATHER, 30s, in a bright hat and white gloves, is the lift operator.
5 A HERBERT PUMPHREY, 50s, a floorwalker with a carnation in his lapel, stands in the corner clutching a hatbox.
6 D GWENDOLYN: Third floor. Ladies' gloves, hosiery, and sundries.
7 D HERBERT: I am not going to the third floor.
8 D GWENDOLYN: Then why did you press three?
9 D HERBERT: I did not press three. I pressed the nine.
10 D GWENDOLYN: There is no nine.
11 D HERBERT: There is a nine. The nine is the executive offices.
12 D GWENDOLYN: The executive offices are the eighth.
13 D HERBERT: Miss Fairweather, I have worked in this store for twenty-two years.
14 D GWENDOLYN: And in twenty-two years you've never learned the numbers?
15 D HERBERT: I know the numbers perfectly. It is you who has moved them.
16 D GWENDOLYN: I operate the lift, Mr. Pumphrey. The floors are the floors.
17 D HERBERT: Then explain the hatbox.
18 D GWENDOLYN: What hatbox?
19 D HERBERT: The one I am holding.
20 D GWENDOLYN: You are holding that?
21 D HERBERT: It was given to me by a woman on the second floor. She said, "Take this to the manager." She did not say which manager.
22 D GWENDOLYN: Then it is likely for Mr. Trout.
23 D HERBERT: Mr. Trout retired.
24 D GWENDOLYN: Then it is for his son.
25 D HERBERT: His son is on the ninth.
26 D GWENDOLYN: Which does not exist.
27 D HERBERT: You see my difficulty.
28 D GWENDOLYN: I see two difficulties, Mr. Pumphrey, and neither is mine.
29 D HERBERT: What are they?
30 D GWENDOLYN: You are carrying a box you cannot deliver, and you have been riding up and down for an hour.
31 D HERBERT: It has been forty minutes.
32 D GWENDOLYN: It has been an hour. I have a log.
33 D HERBERT: Then you are keeping a log of me?
34 D GWENDOLYN: Of the lift. You happened to be in it.
35 D HERBERT: Miss Fairweather, I am not accustomed to being a happenstance.
36 D GWENDOLYN: Mr. Pumphrey, I am not accustomed to being accused of misplacing a floor.
37 D HERBERT: Then what shall we do?
38 D GWENDOLYN: Open the box.
39 D HERBERT: It is not mine to open.
40 D GWENDOLYN: Whose is it?
41 D HERBERT: The manager's.
42 D GWENDOLYN: Which manager?
43 D HERBERT: That is the very question.
44 D GWENDOLYN: Then it belongs to whoever opens it first.
45 D HERBERT: That is not the law.
46 D GWENDOLYN: It is the law of the elevator.
47 D HERBERT: Since when?
48 D GWENDOLYN: Since now.
49 D HERBERT (after a pause): Hold the box.
50 D GWENDOLYN: I'm operating the lift.
51 D HERBERT: Hold it with one hand.
52 D GWENDOLYN: I only have two, Mr. Pumphrey, and both are in use.
53 D HERBERT: Then I shall open it myself.
54 A ¶ He lifts the lid.
* 55 A The music swells, a harp glissando, unaccountably.
56 A Gwendolyn leans in.
57 A They both look.
58 D GWENDOLYN: Well?
59 D HERBERT: It is a hat.
60 D GWENDOLYN: What sort of hat?
61 D HERBERT: A very ugly hat.
62 D GWENDOLYN: Whose?
63 D HERBERT (reading the label): Yours.
64 A ¶ Gwendolyn takes off her bright hat, looks at it, looks at the hatbox, and begins to laugh.
65 A After a moment Herbert, appalled, joins her.
* 66 A ¶ The elevator stops.
* 67 A The gate rattles.
68 A Neither moves.

### SCENE s01834 | INT. CLINIC WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ANGELIQUE MBEKI, PETRUS, ZANELE, ABERNATHY GRIGGS, NURSE
* 1 A ¶ Vinyl chairs bolted in rows.
* 2 A A television mounted high plays a muted game show.
3 A ¶ ANGELIQUE MBEKI, 40s, scrubs under a parka, sits with a clipboard.
4 A Her husband PETRUS, 40s, jiggles one knee.
5 A Their daughter ZANELE, 16, earbuds in, stares at the floor.
6 A An old man, MR. ABERNATHY GRIGGS, 80s, dozes.
7 A A NURSE, 30s, stands behind the glass.
* 8 A ¶ The intercom crackles.
9 D NURSE [O.S.]: Mbeki family?
10 A ¶ Angelique stands.
11 D ANGELIQUE: Yes.
12 D NURSE [O.S.]: Dr. Okafor will see you now.
13 D PETRUS: Finally.
14 D ANGELIQUE: Petrus.
15 D PETRUS: Four hours.
16 D ANGELIQUE: Petrus.
17 A ¶ He stops.
18 A Zanele takes out one earbud.
19 D ZANELE: Is it Gran?
20 A ¶ Nobody answers.
* 21 A The buzzer sounds on the inner door.
22 A ¶ Mr. Griggs wakes, looks at them, and closes his eyes again.
23 A ¶ Petrus shoves the nearest chair.
* 24 A It scrapes six inches across the tile, and the whole room hears it.
25 D ANGELIQUE (low): Not here.
26 D PETRUS: Then where?

### SCENE s01835 | EXT. DRY CREEK BED - SUNSET
Detected names (may be incomplete or contain aliases): MARSHAL JEB TRASK, ALMA SOTELO, TOMASO, DEPUTY HOLLIS FINCH, ^TOMASO
* 1 A ¶ Cracked clay.
* 2 A A dead cottonwood.
* 3 A Four riders have dismounted.
4 A ¶ MARSHAL JEB TRASK, 50s.
5 A Gray mustache.
6 A Badge pinned crooked.
7 A ¶ He watches.
8 A ¶ Across the dry bed, ALMA SOTELO, 30s.
9 A Rifle across her saddle.
10 A Black hat.
11 A ¶ Beside her, her brother TOMASO, 20s.
12 A Hand on his holster.
13 A Sweat.
14 A ¶ Behind them, DEPUTY HOLLIS FINCH, 19.
15 A Shotgun.
16 A Too big for him.
* 17 A ¶ Nobody speaks.
* 18 A ¶ Wind.
* 19 A A tumbleweed rolls through, stops against Trask's boot.
20 D TRASK: Alma.
21 D ALMA: Marshal.
22 D TRASK: Long ride.
23 D ALMA: Longer back.
24 A ¶ Tomaso laughs, high and nervous.
25 D TOMASO: Don't talk to him, Alma.
26 D ALMA: Be quiet, Tomaso.
27 D TRASK: You've got the mule.
28 D ALMA: It's my mule.
29 D TRASK: It was Dalton's.
30 A ¶ Alma shrugs.
31 A Hollis licks his lips.
32 D HOLLIS: Marshal, I got a bad feeling.
33 D TRASK: Everybody has.
34 D ALMA (simultaneously): Everybody has.
35 D ^TOMASO: Everybody has.
* 36 A ¶ Silence.
37 A Trask almost smiles.
38 D TRASK: Alma. Put the rifle down.
39 D ALMA: You first.
40 D TRASK: Hollis.
41 D HOLLIS: Sir?
42 D TRASK: Put yours down.
43 D HOLLIS: Sir?
44 D TRASK: Do it.
45 A ¶ Hollis lowers the shotgun.
46 A Trask unbuckles his gun belt, drops it.
47 A Alma watches.
48 A Slowly she slides the rifle from the saddle and lays it flat in the dust.
49 A ¶ Tomaso does not move.
50 D ALMA: Tomaso.
51 D TOMASO: They'll hang us.
52 D ALMA: They'll hang you. Not me.
53 A ¶ She turns her back on the marshal.
54 A Walks to Tomaso.
55 A Takes his gun hand in both of hers.
56 A Opens the fingers one at a time.
* 57 A The pistol falls.
58 A ¶ Trask exhales.
59 A Hollis sits down on the clay.
* 60 A The tumbleweed rolls on.
