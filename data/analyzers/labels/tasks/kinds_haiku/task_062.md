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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0162.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02166 | INT. MERCY GENERAL - HOSPICE WING WAITING AREA - NIGHT
Detected names (may be incomplete or contain aliases): CHIDI OKONJO, NGOZI OKONJO, EMEKA OKONJO, ADAEZE OKONJO, TUNDE, ETIM, NURSE
* 1 A ¶ Two vinyl sofas.
* 2 A A fish tank with one fish.
* 3 A A TV on mute, a weather map.
* 4 A A vending machine with a taped sign: "NO REFUNDS."
* 5 A A door to the room beyond, shut.
6 A ¶ The Okonjo family, six of them, arranged like pieces on a board.
7 A ¶ CHIDI OKONJO, 60s, the eldest son, sits upright with his coat on.
8 A NGOZI OKONJO, 50s, his sister, fidgets with her rings.
9 A EMEKA OKONJO, 40s, the middle brother, leans on the wall with his arms crossed.
10 A ADAEZE OKONJO, 30s, the youngest, holds a Styrofoam cup of coffee she isn't drinking.
11 A TUNDE, 30s, her husband, studies his phone.
12 A And GRANDMOTHER ADA's old friend MRS. ETIM, 70s, in her church hat, folds a paper napkin into smaller and smaller squares.
13 A ¶ Nobody speaks.
14 A ¶ Chidi checks his watch.
15 A Ngozi checks hers.
16 A Emeka looks at the door.
17 A Adaeze looks at Tunde.
18 A Tunde looks at his phone.
19 A Mrs. Etim looks at the fish.
* 20 A The fish looks at nothing.
21 D CHIDI: It has been an hour.
22 D NGOZI: It has been fifty-two minutes.
23 D CHIDI: Fifty-two is an hour.
24 D NGOZI: Fifty-two is fifty-two.
25 D EMEKA: Please.
26 A ¶ Adaeze offers the coffee to no one in particular.
27 A Tunde takes it.
28 A Sips.
29 A Makes a face.
30 A Hands it back.
31 D TUNDE: It's cold.
32 D ADAEZE: I know.
33 A ¶ Mrs. Etim unfolds the napkin, smooths it flat on her knee, folds it again.
34 D MRS. ETIM: She asked for jollof last Sunday.
35 D NGOZI: She asked for jollof every Sunday.
36 D MRS. ETIM: This one she ate.
37 D EMEKA: She ate it.
38 D ADAEZE: All of it.
* 39 A ¶ Silence.
* 40 A The weather map changes colors.
* 41 A Nobody looks at the TV.
42 A The door opens and a NURSE's hand rests on the frame, then the door closes again.
43 A ¶ Everyone stands at once.
44 A Chidi, then Ngozi, then Emeka, then Adaeze and Tunde, then Mrs. Etim leaning on her cane.
45 A They stand in a half-circle facing the door.
* 46 A It does not open again.
47 A No one sits.
48 D CHIDI (quietly): We wait.

### SCENE s02167 | INT. ORBITAL ELEVATOR CAR - ASCENDING - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN LEILA NOURI, ENGINEER BODHI RAMASWAMY, WANJIRU KARIUKI, SECURITY OFFICER DMITRI VOLKOV-STERN, CHILD, SILENT MONK
* 1 A ¶ A glass cylinder rising through the dark.
* 2 A The Earth is a shrinking blue plate below.
* 3 A Warning lights pulse amber.
* 4 A The car shudders.
5 A ¶ Six passengers: CAPTAIN LEILA NOURI, pilot suit, grips the rail.
6 A ENGINEER BODHI RAMASWAMY, welding goggles on his forehead, kneels at an open panel.
7 A DR. WANJIRU KARIUKI, in a lab coat, hugs a sealed sample case.
8 A SECURITY OFFICER DMITRI VOLKOV-STERN, riot vest, gun holstered, scans the others.
9 A A CHILD, 8, in a pink vest.
10 A And a SILENT MONK, bald, saffron robes, eyes closed.
11 D LEILA: Bodhi, talk to me.
12 D BODHI: Cable's fraying. We have twenty minutes.
13 D DR. KARIUKI: Twenty minutes to what?
14 D BODHI: To snap.
15 D DMITRI: Then we go down?
16 D LEILA: No. Too fast.
17 D BODHI: We can't go up either.
18 D DR. KARIUKI: Why not?
19 D BODHI: Because up is thirty-five thousand kilometers, Doctor.
* 20 A ¶ The car jolts.
21 A The child cries out.
22 A The monk's eyes open.
23 A He rises, steps to the child, and puts a hand on her shoulder.
24 A Dmitri draws his weapon, thinks better of it, holsters it.
25 A Dr. Kariuki sets down the sample case and unzips her lab coat.
26 A Leila slams a fist on the panel; the lights go out; the car drops half a meter; Bodhi swears and jams his wrench into the gap.
27 D LEILA: Bodhi!
28 D BODHI: I know!
29 D DMITRI: Captain, I can climb the cable.
30 D LEILA: Dmitri, nobody climbs a cable.
31 D DMITRI: Then what?
32 A ¶ The monk raises one finger.
33 A Everyone stops.
34 A He points up.
* 35 A Above them, in the black, a second car is descending, lights blazing.

### SCENE s02168 | INT. LEVINE & SON PAWN - DAY
Detected names (may be incomplete or contain aliases): ABRAHAM LEVINE, JOSHUA, WOMAN, ROSALIE
* 1 A ¶ A narrow shop crammed with guitars, wristwatches, stuffed marlin, a rack of wedding rings behind glass.
* 2 A A bell over the door.
* 3 A Dusty sun through barred windows.
4 A ¶ ABRAHAM LEVINE, 70, pawnbroker, green visor, rolled sleeves, polishes a trumpet.
5 A His son JOSHUA, 40s, in a suit that doesn't fit, tallies receipts at the end of the counter.
* 6 A ¶ The bell rings.
7 A A WOMAN, 30s, enters.
8 A Raincoat, wet hair, a small velvet pouch gripped in both hands.
9 A She stands just inside the door as though the floor might give way.
10 D ABRAHAM: Good afternoon.
11 D WOMAN: Is it?
12 D ABRAHAM: For some of us.
13 A ¶ She crosses to the counter.
14 A Sets the pouch down.
15 A Pulls the drawstring.
* 16 A A gold locket slides out.
17 A Joshua stops tallying.
18 D JOSHUA: Dad.
19 D ABRAHAM: I see it.
20 D WOMAN: It was my mother's.
21 D ABRAHAM: It's beautiful.
22 D JOSHUA: It's worth four hundred, easy.
23 D WOMAN: Eight.
24 D JOSHUA: Four.
25 D WOMAN: It has a picture inside.
26 D ABRAHAM: May I?
27 A ¶ She nods.
28 A Abraham opens it with a thumbnail.
29 A Stares.
30 A Closes it.
31 D ABRAHAM [CONT'D]: Joshua. Look at this.
32 D JOSHUA: What?
33 D ABRAHAM: Just look.
34 A ¶ Joshua takes the locket, opens it.
35 A His face changes.
36 D JOSHUA: Dad. That's...
37 D ABRAHAM: Rosalie Pinsky.
38 D WOMAN: I'm Rosalie.
39 D ABRAHAM: No. The locket belonged to...
40 D ROSALIE: My mother. Hannah Pinsky. She pawned it here in 1991.
41 D ABRAHAM: She did. And she never came back.
42 D ROSALIE: She died.
43 D JOSHUA: We're sorry.
44 D ROSALIE: Don't be. I'm here to buy it back.
45 D ABRAHAM: It's yours.
46 D JOSHUA: Dad, it's inventory.
47 D ABRAHAM: Joshua, a locket this old isn't inventory. It's a promise.
48 D JOSHUA: We have a business.
49 D ABRAHAM: We have a mother.
50 A ¶ Joshua looks at the locket.
51 A At Rosalie.
52 A At his father.
53 A He closes the drawer.
54 D JOSHUA: Take it.
55 D ROSALIE: I'll pay for it.
56 D ABRAHAM: You already did.
57 A ¶ Rosalie closes her fingers around the locket.
* 58 A The bell above the door rings softly as a draft touches it.

### SCENE s02169 | INT. FIELD HOSPITAL - SHIPPING CONTAINER OPERATING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HANNELORE BRIGG, CASIMIR ODUYA
* 1 A ¶ Steel walls, painted white.
* 2 A Two surgical lamps on a generator hum.
* 3 A A battered table.
* 4 A A rack of salvaged instruments.
* 5 A A tarpaulin flaps outside.
* 6 A Gunfire, far off.
7 A ¶ DR. HANNELORE BRIGG, 50s, mask, gown, hair under a cap, works over a patient's abdomen, hands deep, eyes steady.
8 A CASIMIR ODUYA, 30s, nurse, sweat on his forehead, holds a retractor and a flashlight in one hand and a suction line in the other.
9 D HANNELORE: Suction.
10 D CASIMIR: Suction.
11 D HANNELORE: Clamp.
12 D CASIMIR: Clamp.
13 A ¶ He passes it.
14 A She takes it without looking.
15 D HANNELORE: Light left.
16 A ¶ He tilts the flashlight.
* 17 A The beam finds the wound.
18 D HANNELORE [CONT'D]: Good.
* 19 A ¶ The generator coughs.
* 20 A The lamps dim and recover.
21 A They both freeze, eyes on the bulbs.
* 22 A The hum steadies.
23 A They exhale at the same time.
24 D CASIMIR: Fuel is low.
25 D HANNELORE: How long?
26 D CASIMIR: Twenty minutes.
27 D HANNELORE: Enough.
28 D CASIMIR: Doctor, I have a pulse of one-twenty.
29 D HANNELORE: I know.
30 D CASIMIR: Pressure's dropping.
31 D HANNELORE: I know, Casimir.
32 A ¶ She reaches, clamps, cauterizes.
* 33 A Smoke.
34 A He wipes her forehead with the back of his glove.
35 A She doesn't flinch.
36 D HANNELORE [CONT'D]: Suture.
37 D CASIMIR: Suture.
38 A ¶ She sews.
39 A His thumb steadies the tissue.
40 A Her needle dips, rises, dips.
* 41 A A tide of small, precise movements.
42 D CASIMIR [CONT'D]: Pulse ninety.
43 D HANNELORE: Better.
44 D CASIMIR: Pressure rising.
45 D HANNELORE: Good.
46 A ¶ She ties the last knot.
47 A Cuts it.
48 A Sets down the scissors.
49 A They stand a moment, both looking at the sleeping chest rise and fall.
50 D CASIMIR: Doctor.
51 D HANNELORE: Mm.
52 D CASIMIR: Next.
53 D HANNELORE: Next.
54 A ¶ They pull off gloves, together, and drop them in the bucket.

### SCENE s02170 | INT. ICE HARVESTER GALLEY - SATURN RING ORBIT - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE, TOBIAH, MIRA, KOZLOV, SENNA
* 1 A ¶ Frost on every surface.
* 2 A Red strobe.
* 3 A The hull groans.
4 A ¶ ADAEZE (40s, flight engineer, burn-scarred hands) jams a pry bar into a sealed hatch.
5 A TOBIAH (20s, rookie, suit two sizes too big) holds a failing lamp.
6 A MIRA (30s, medic) counts breaths off a wrist display.
7 A ¶ KOZLOV (50s, captain, grey stubble) slaps a dead console.
* 8 A Nothing.
* 9 A ¶ A small shape in the vent grate.
10 A SENNA (14, stowaway, hollow-eyed) watching.
11 D TOBIAH: Pressure's dropping. Forty percent.
12 D ADAEZE: Hold the light still!
13 D MIRA: Who is that? In the vent?
14 D KOZLOV: Not now, Mira.
15 D TOBIAH: Thirty-five!
16 D ADAEZE: Then stop talking and pull!
17 D MIRA: Kid. Kid, come out.
18 D SENNA: It's behind the wall.
19 D KOZLOV: Both of you, quiet.
* 20 A ¶ Silence.
* 21 A Scratching inside the bulkhead.
* 22 A Moving.
* 23 A Fast.
24 D KOZLOV: We leave. Now.
25 D ADAEZE: Hatch isn't open!
26 D SENNA: It heard you.
* 27 A ¶ The bulkhead BUCKLES.
28 A Everyone freezes.
29 D TOBIAH: I'm not going first!
30 D MIRA: I'm taking the kid!

### SCENE s02171 | INT. ABANDONED BOWLING ALLEY - LANE NINE - NIGHT
Detected names (may be incomplete or contain aliases): COACH ODALYS BRANCH, HIRO TANABE, DEZ, OYELARAN, BIG PAT, LUCIA FERRARI
* 1 A ¶ Neon pins flicker over a taped-off lane.
* 2 A Underground curling, bowling stones on waxed lanes.
* 3 A Cash piles on the ball return.
4 A ¶ COACH ODALYS BRANCH (50s, ex-champion, cane) leans on the scorer's table.
5 A HIRO TANABE (20s, wiry, wrapped wrists) chalks his hands.
6 A His rival, DESMOND "DEZ" OYELARAN (20s, broad, grinning) stretches at the foul line.
7 A BIG PAT (60s, bookie, cardigan) counts money.
8 A LUCIA FERRARI (30s, referee, whistle on a bootlace) holds the stopwatch.
9 D LUCIA: Final frame. Hiro needs a strike. Dez needs a spare.
10 D HIRO: I know what I need.
11 D COACH BRANCH: Eyes on the headpin, not on him.
12 D DEZ: He can look at me all he wants. He gave his uncle the same look before he lost.
13 D HIRO: Say that again.
14 D DEZ: Your uncle. Lost his house on this lane.
15 D COACH BRANCH: Hiro, he is feeding you. Don't eat.
16 D BIG PAT: Nobody is eating. Everybody is betting. Eat on your own time.
17 D LUCIA: Sixty seconds, Hiro.
18 D HIRO: Coach, he stood there when my uncle signed the paper. He smiled at him.
19 D COACH BRANCH: Then he's smiling now because he's scared. He's scared, so he talks. You hear me?
20 D DEZ: I'm scared of nothing in this building.
21 D BIG PAT: Then you won't mind me doubling your side.
22 D DEZ: Double it.
23 D LUCIA: Pat, you can't change the stake mid-frame.
24 D BIG PAT: I can change anything I like. It's my money, my lane, my building.
25 D COACH BRANCH: It's the bank's building.
26 D BIG PAT: The bank's cousin's building. Close enough.
27 D HIRO: Lucia, start the clock.
28 D LUCIA: You sure?
29 D HIRO: He told me to wait for him last time. I waited. Start it.
30 D COACH BRANCH: Then he walks the approach slow. Four steps. No fifth.
31 D HIRO: Four. No fifth.
32 D DEZ: He always takes a fifth.
33 D COACH BRANCH: Not tonight.
34 D LUCIA: Clock's running. Fifty.
35 D BIG PAT: Everyone breathe.
36 D HIRO: Dez.
37 D DEZ: What.
38 D HIRO: When I hit this, give my uncle the deed back.
39 D DEZ: When you hit it.
40 D LUCIA: Forty.
41 D COACH BRANCH: Go.

### SCENE s02172 | INT. FLOODED PARKING GARAGE - LEVEL B3 - NIGHT
Detected names (may be incomplete or contain aliases): RENATA VOSS, JUNIOR MBEKI, OLD TOMASZ, WREN, CALLOWAY
* 1 A ¶ Ankle-deep water.
* 2 A A Buick idles with its trunk open, stuffed with cash bags.
3 A ¶ RENATA VOSS (40s, crew boss, rain slicker) faces four others.
4 A JUNIOR MBEKI (20s, driver) fiddles with a flashlight.
5 A OLD TOMASZ (60s, safecracker, trembling hands).
6 A WREN (20s, lookout, hoodie).
7 A CALLOWAY (30s, inside man, bank lanyard).
8 D RENATA: Everybody listen. Count is short by two bags.
9 A ¶ Nobody moves.
10 D CALLOWAY (to Renata): You counted wrong.
11 D RENATA: I counted twice.
12 D OLD TOMASZ (muttering): Three bags I carried. Three. I carried three.
13 D JUNIOR: Somebody took them. That's what short means.
14 A ¶ Calloway lunges at Junior.
15 A They crash into the Buick, water spraying.
16 A Wren pulls them apart.
17 D WREN: Enough! Headlights, up the ramp!
18 A ¶ Everyone freezes.
* 19 A Light washes the wall.
* 20 A Then it passes.
21 D RENATA (to herself): Breathe, Renata.
22 D WREN: It's gone. Okay. It's gone.
* 23 A ¶ A bag splashes in the water by Tomasz's feet.
24 A He stares at it.
25 A They all stare at him.
26 A ¶ The group scatters.
* 27 A Tires skid.
28 A The Buick lurches away, leaving Tomasz alone, whispering to himself.

### SCENE s02173 | EXT. MOUNTAIN MONASTERY COURTYARD - ITALY - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT WALTER PIKE, ZEKE, ROSS, PRIVATE ANTONIO DELUCA, FATHER BENEDIKT, CAPTAIN HELEN MARSH, BELL
* 1 A ¶ Autumn, 1944.
* 2 A Mist clings to the cloister stones.
* 3 A A well in the centre.
* 4 A A bell with no rope.
5 A ¶ SERGEANT WALTER PIKE (30s, weathered, steady) sits on the well's rim, cleaning a rifle with a rag.
6 A CORPORAL EZEKIEL "ZEKE" ROSS (20s, lanky, bandaged hand) stares at the hills.
7 A PRIVATE ANTONIO DELUCA (19, round-faced, local boy) peels a potato into a helmet.
8 A FATHER BENEDIKT (70s, white beard, patched habit) sweeps the stones.
9 A CAPTAIN HELEN MARSH (30s, army nurse, sleeves rolled) writes in a notebook on an upturned crate.
10 D PIKE: Padre, there's no need for that.
11 D FATHER BENEDIKT: There is always need. The leaves do not respect armies.
12 A ¶ Pike smiles faintly and goes on cleaning.
13 A Zeke drifts over to the well.
14 A Deluca keeps peeling.
15 D ZEKE: Quiet one this morning.
16 D PIKE: The quiet's a favour. Take it.
17 D ZEKE: You think they're coming back?
18 D PIKE: I think the lieutenant said wait. So we wait.
19 D MARSH (not looking up): Walter, tell Ross to stop pacing. It tires the patients.
20 D PIKE: You heard the captain.
21 D ZEKE: I'm not pacing. I'm walking.
22 D MARSH: Then walk where I can't see you.
23 A ¶ Zeke grins, holds up his bandaged hand in surrender, and sits beside Pike.
24 D DELUCA: Sergeant, my mother makes this with garlic. Will the Padre have garlic?
25 D FATHER BENEDIKT: The Padre has one head of garlic. It is for Sundays.
26 D DELUCA: It is Sunday.
27 D FATHER BENEDIKT (a beat): Is it?
28 A ¶ Pike checks his watch.
29 A Shakes it.
30 A Winds it.
31 D PIKE: Might be.
32 A ¶ Father Benedikt sets down the broom and walks toward the kitchen.
33 A Deluca follows with the helmet.
34 D ZEKE: Don't give him all of it, Tony.
35 D DELUCA: I will give him what he asks.
36 D ZEKE (low, to Pike): He thinks we're on holiday.
37 D PIKE: Let him.
38 D MARSH: Walter. Come here a moment.
39 A ¶ Pike sets the rifle on the rim and crosses to her.
40 A She hands him the notebook.
41 D MARSH [CONT'D]: Count them.
42 D PIKE (reading): Eleven. Seven walking.
43 D MARSH: Four can't. I need a truck by tomorrow.
44 D PIKE: There's no truck.
45 D MARSH: Then a mule. A cart. A door and four men.
46 D PIKE: I'll ask the Padre. He knows every shed on this hill.
47 D MARSH: Ask him gently.
48 D PIKE: I'm always gentle.
49 D MARSH: You are always tired. It sounds the same.
50 A ¶ Pike nearly laughs.
51 A He hands back the notebook.
52 A Behind them Zeke has picked up the rifle and is turning it over.
53 D PIKE: Ross.
54 D ZEKE: Just looking.
55 D PIKE: Looking costs nothing. Put it down.
56 A ¶ Zeke sets it down.
57 A Pike and Zeke look at each other, then at the hills, then at nothing.
* 58 A ¶ A BELL rings once from somewhere far below.
59 A They all stop.
60 A Marsh, Pike, Zeke.
61 A Even Deluca, in the kitchen doorway.
62 D ZEKE [CONT'D]: That's the village.
63 D PIKE: That's a goat with a bell.
64 D DELUCA (from the doorway): It is not a goat. It is Signora Fiore. She rings it when the bread is ready.
* 65 A ¶ Beat.
66 A Pike exhales.
67 D PIKE: Bread's ready.
68 D MARSH (to everyone): Then let us eat before somebody changes their mind.
69 A ¶ They file toward the kitchen.
70 A Pike last.
71 A He picks up the broom, finishes the corner Father Benedikt left, and follows.

### SCENE s02174 | INT. DEFUNCT PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): RUTH ALMEIDA, STRANGER, DOOR, DANIEL OKAFOR, MARCUS, TESSA QUINN, SERGEANT BRANDT
* 1 A ¶ Domed ceiling, cracked and starless.
* 2 A Rows of reclined seats like a ribcage.
* 3 A A projector the size of a car squats in the centre, wrapped in cables.
4 A ¶ RUTH ALMEIDA (30s, black parka, cropped hair, a face that gives nothing) stands on the dais with a duffel.
5 A Her eyes go to every exit.
* 6 A Four doors.
* 7 A Two chained.
8 A ¶ A man in the dark.
9 A Tall.
10 A Brown overcoat.
11 A Holds a phone out in front of him like a torch.
12 A This is the STRANGER (50s).
13 D STRANGER: You're early.
14 D RUTH: You're late.
15 D STRANGER: I'm exactly on time. I've been here since noon.
16 D RUTH: Then you know the doors.
17 D STRANGER: I know the doors.
18 A ¶ He crosses the aisle.
* 19 A His shoes tick on dead tile.
20 A Ruth sets the duffel on the projector base and unzips it two inches.
* 21 A Cash.
* 22 A Rubber-banded.
* 23 A A glint of a second thing underneath.
24 D STRANGER [CONT'D]: That's not what we agreed.
25 D RUTH: It's what I brought.
* 26 A ¶ A DOOR slams somewhere above.
27 A Both look up.
* 28 A Footsteps on the catwalk.
* 29 A Then a high, bright voice from the dark.
30 D DANIEL [O.S.]: Ruth? Ruth, it's me!
31 D RUTH (to the Stranger, flat): You brought someone.
32 D STRANGER: I didn't.
33 D RUTH: Someone followed you.
34 D DANIEL [O.S.]: Don't shoot. I'm coming down.
35 A ¶ DANIEL OKAFOR (20s, soaked jacket, hands high, a courier's badge on a lanyard) clatters down the aisle steps, eyes wide, breath ragged.
36 A He stops five feet from the dais.
37 A He's looking at the Stranger.
38 D DANIEL: You told me he'd be alone.
39 D RUTH: He is.
40 D DANIEL: He has a gun.
41 D STRANGER: Everyone here has a gun, son.
42 A ¶ Ruth steps between them with her hand inside her parka, her gaze on the Stranger, her shoulder angled toward Daniel.
43 A The Stranger lowers the phone, lets its light sweep the floor, and lets his own hand rest at his belt.
44 A Daniel edges backward until his heel catches a seat arm, and the seat clunks, and all three of them flinch at the sound.
* 45 A The projector hums as if listening.
46 D RUTH: Who are you?
47 D STRANGER: You don't need that.
48 D RUTH: Names are what I need.
49 D STRANGER: Then call me what you like.
50 D RUTH: I'll call you what the file called you.
51 D STRANGER (a pause): Marcus Hale. Retired.
52 D RUTH: Nobody's retired.
53 D MARCUS: Fair.
54 A ¶ He says it like a man putting down a coin.
* 55 A ¶ On the catwalk, another DOOR.
* 56 A A flashlight beam sweeps the dome.
* 57 A Rows of seats leap out of the dark one by one.
58 A Daniel drops behind the nearest row.
59 A Ruth doesn't move.
60 A Marcus smiles very slightly.
61 D MARCUS [CONT'D]: That one is mine.
62 D RUTH: You said you came alone.
63 D MARCUS: I said I was alone. It's not the same.
* 64 A ¶ The beam finds Ruth's face.
* 65 A Holds.
66 A Behind the light a figure steps out: TESSA QUINN (40s, long coat, flashlight in one hand, a pistol held low in the other), her expression as neutral as a closed door.
67 D TESSA: Evening, Ruth.
68 D RUTH: Detective.
69 D TESSA: It's Tessa tonight.
70 D RUTH: It's never Tessa.
71 A ¶ Tessa descends two steps.
72 A Marcus slides sideways along the dais, hand away from his belt now.
73 A Daniel peeks over the seat back like a child watching a fight.
74 D DANIEL (whisper): Ruth, I didn't call her.
75 D RUTH: I know.
76 D TESSA: Daniel didn't call me. Marcus did.
77 D DANIEL: What?
78 A ¶ Ruth looks at Marcus.
79 A Marcus looks at the ceiling, at the cracked painted stars, as if the answer might be written there.
80 D MARCUS: I've got a pension, Ruth.
81 D RUTH: You said retired.
82 D MARCUS: I said a lot of things.
* 83 A ¶ The projector hums louder.
* 84 A A dull bulb in its belly blinks on, throws a wavering white ellipse onto the dome, and suddenly the whole ceiling is a pale moon with four small shadows moving under it.
85 D TESSA: Everybody put your hands where I can see them.
86 A ¶ Nobody does.
87 A Ruth's hand comes out of her parka.
* 88 A Empty.
89 A She lifts the duffel and holds it out over the edge of the dais as if offering it to a guest.
90 D RUTH: Take it, Detective.
91 D TESSA: Put it down.
92 D RUTH: You wanted the bag. Here's the bag.
93 A ¶ She lets it go.
* 94 A It hits the floor.
* 95 A The zip splits.
* 96 A Bundles spill, and with them a flat black device the size of a deck of cards, its red light blinking.
97 A ¶ Tessa looks at it.
98 A Marcus looks at it.
99 A Daniel looks at all of them.
100 D DANIEL: What is that?
* 101 A ¶ A voice crackles from the catwalk, thin and metallic.
102 D SERGEANT BRANDT [O.S.]: Quinn, bomb squad says do not touch it!
103 A ¶ Nobody answers.
* 104 A The red light blinks faster.

### SCENE s02175 | INT. GREENHOUSE ABOVE A CLOSED TRAIN STATION - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): IMELDA CORREIA, NOOR HASSAN, CORREIA-HASSAN, FATHER ANSELMO, GRETA VOLKOV
* 1 A ¶ The glass roof has been mended in panes of different greens.
* 2 A Tomato vines climb strings tied to old signal wires.
* 3 A Down below, a freight train sighs through where no passenger train has stopped in years.
* 4 A The floor trembles gently.
5 A ¶ IMELDA CORREIA (70s, small, hands like roots) kneels in the dirt, tying a vine.
6 A Her daughter-in-law, NOOR HASSAN (40s, good coat, car keys held too long) stands at the doorway and does not step in.
7 D IMELDA: Shoes.
8 A ¶ Noor looks at her shoes, clean leather, and takes them off.
9 A Sets them side by side on the threshold.
10 A Walks in on stocking feet.
11 D NOOR: It's warm in here.
12 D IMELDA: It is a greenhouse.
13 A ¶ Noor touches a leaf.
14 A Rubs it between finger and thumb.
15 A Smells it.
16 A Imelda watches her without turning her head.
17 D NOOR: Teo says you haven't been answering.
18 D IMELDA: The telephone is in the kitchen. I am not in the kitchen.
19 D NOOR: He's worried.
20 D IMELDA: He is busy.
21 A ¶ Noor smiles at that, thin and brief.
22 A At the far end of the greenhouse, a boy of about twelve, TEODORO "TEO" CORREIA-HASSAN (12, serious, glasses taped at the hinge), sits cross-legged between two rows of lettuce, sorting seed packets by colour and not looking up.
23 D NOOR: He came with me.
24 D IMELDA: I saw him.
25 D NOOR: He wouldn't come over.
26 D IMELDA: He is where he is supposed to be.
* 27 A ¶ A long silence.
* 28 A The freight train hushes the room, then passes.
29 A Noor lowers herself onto an overturned bucket.
30 D NOOR: Marcos called.
31 A ¶ Imelda ties a knot.
32 A Pulls it tight.
33 A Snips the string with her teeth.
34 D IMELDA: How is the weather in Lisbon?
35 D NOOR: He didn't say.
36 D IMELDA: Then he did not call for long.
37 D NOOR: He called for four minutes. He asked about the house.
38 D IMELDA: The house is standing.
39 D NOOR: He asked whether you were thinking of selling.
40 A ¶ Imelda reaches for a tomato, turns it in her palm, and lets it go.
41 A She picks another.
42 A Presses it.
* 43 A Hard.
* 44 A Green.
45 A She leaves it.
46 D IMELDA: It is a little early for these.
47 D NOOR: Imelda.
48 D IMELDA: Three more weeks. I will make the sauce for the church supper. Father Anselmo likes it with basil. I told him I would bring basil.
49 D NOOR: You don't have to answer me.
50 D IMELDA: No.
51 A ¶ She gets up slowly, one hand on her knee.
52 A Crosses the greenhouse.
53 A Takes a clay pot from a shelf and carries it back to Noor, who takes it without being asked.
* 54 A A basil plant, small and fierce.
55 D IMELDA [CONT'D]: Put that in your window. It does not like the dark.
56 A ¶ Noor holds the pot in both hands like something warm.
57 D NOOR: There isn't much window in the apartment.
58 D IMELDA: Then it will grow toward what there is.
59 A ¶ Across the glass, Teo has lined up all the packets in a spectrum.
60 A He pushes his glasses up with one knuckle and looks at the two women for the first time.
61 A Then back to his seeds.
* 62 A ¶ The door rattles.
63 A FATHER ANSELMO (60s, round, cassock under a windbreaker) leans in with a bag of potting soil on his shoulder, and behind him GRETA VOLKOV (50s, neighbour, gardening gloves, loud scarf).
64 D FATHER ANSELMO: Imelda, the basil?
65 D IMELDA: On the shelf. Shoes.
66 D GRETA: We already took them off. Hello, Noor.
67 A ¶ Noor nods.
68 A Father Anselmo sets down the soil and goes straight to the shelf, humming.
69 D NOOR: I should go. He has school tomorrow.
70 D IMELDA: He has school tomorrow.
71 A ¶ Neither moves.
72 D IMELDA [CONT'D]: Wait.
73 A ¶ She goes to the end of a row and snaps off a tomato vine with two small green fruits on it.
74 A Wraps the stem in a wet paper towel.
75 A Holds it out.
76 D IMELDA [CONT'D]: For his windowsill. Not for eating.
77 A ¶ Noor takes it.
78 A Their fingers touch.
79 A Neither pulls back at once.
80 D NOOR: Thank you.
81 D IMELDA: Take your shoes.
82 A ¶ Noor goes to the threshold, steps into her shoes, and turns once to look at the rows of green.
83 A Then she crosses to Teo and crouches beside him.
84 A He holds out one packet, wordless.
85 A She reads the label, nods, tucks it in her coat.
86 A ¶ Imelda has already turned back to the vines.
87 A She hums something under her breath, badly, and ties another knot.
* 88 A ¶ The next freight train begins to build, far off, in the rails.

### SCENE s02176 | EXT. FROZEN MOUNTAIN LAKE - ICE SHELF - DAY
Detected names (may be incomplete or contain aliases): HARLAN COOPER, BEA, LINDQVIST, KOJI NAKAGAWA, PRIYA RAMASWAMY, OSCAR BELL
* 1 A ¶ Pale sun.
* 2 A No wind.
* 3 A A wide white plain, scored with old snowmobile tracks.
* 4 A At its edge, a crude fishing hut of plywood and tarp, a stovepipe giving off a lazy ribbon of smoke.
* 5 A ¶ Five snowmobiles lie crossways in the snow.
6 A Five people crouch around a hole in the ice, lines dropped into black water.
7 A ¶ HARLAN COOPER (50s, guide, patched down jacket) hums, jigging his rod.
8 A BEATRICE "BEA" LINDQVIST (30s, photographer, bright red hat) frames a shot with her thumbs.
9 A KOJI NAKAGAWA (40s, geologist, notebook strapped to his chest) taps the ice with a steel probe.
10 A PRIYA RAMASWAMY (20s, student, oversized mittens) holds a thermos with both hands.
11 A And OSCAR BELL (60s, retired pilot, silent, cigar unlit in his teeth) leans against his snowmobile, watching the sky.
12 D HARLAN: That's a good day, folks. Look at this. No wind, no crowd, no rush.
13 D BEA: It's too quiet.
14 D HARLAN: Quiet is why you pay me.
15 D PRIYA: I like it.
16 D KOJI: Ice here's thirty inches. Good.
17 A ¶ He taps again.
18 A Frowns.
19 A Taps a third place and listens, head tilted.
* 20 A No one else notices.
21 D HARLAN: Priya, pour me one.
22 D PRIYA: It's still hot.
23 A ¶ She pours.
24 A Harlan takes it, sips, nods in approval.
25 A Oscar lifts one hand to shade his eyes.
26 D OSCAR: Harlan.
27 D HARLAN: Yeah?
28 D OSCAR: How long's the lake been this still?
29 D HARLAN: Since December.
30 D OSCAR: That's not what I asked.
31 A ¶ Harlan glances at him.
* 32 A A flicker.
33 A Then he looks away and takes another sip.
34 D HARLAN: You worry too much, Oscar.
35 A ¶ Bea lowers her camera and walks a few steps away across the ice, her red hat bobbing.
36 A Koji stays crouched, his probe sunk to the hilt in the snow.
37 A Priya follows Bea, thermos steaming.
38 A Harlan sets down his cup.
39 A Oscar takes the cigar from his teeth.
* 40 A ¶ A soft sound.
* 41 A A long, low note, felt more than heard, like someone drawing a bow across the planet.
42 A ¶ Everyone stops.
43 A Priya's thermos slips from her hand and bounces.
44 A Bea turns slowly.
45 A Koji lifts his head.
46 A Harlan stands.
47 A Oscar does not move, only watches Harlan.
48 D KOJI (quiet): That's the shelf.
49 D HARLAN: It's the lake settling. It does that.
50 D KOJI: Not in March. Not at thirty inches.
51 D HARLAN: Everybody stay calm and walk to the snowmobiles. One at a time. Do not run.
52 A ¶ Nobody runs.
53 A The five of them move across the white at a measured pace, like people leaving a church.
* 54 A Bea's boots squeak.
* 55 A Priya's mittens hang from their strings.
56 A Koji walks backwards, eyes on the ice.
* 57 A ¶ A CRACK, then another, racing from the fishing hole in a black spiderweb.
* 58 A Water wells up between the lines.
59 D HARLAN [CONT'D]: Go!
60 A ¶ Now they run.
61 A Harlan grabs Priya under the arms and swings her toward the nearest machine.
62 A Bea scrambles on behind Koji, camera banging against his back.
63 A Oscar is already on his snowmobile, engine roaring, and he does not wait; he guns it across the white, sled slewing, then wheels in a wide arc and comes back for the others.
* 64 A ¶ The hut TILTS and slides sideways into the lake, stovepipe still smoking, plywood groaning, and goes down with a gulp.
65 A ¶ Harlan, white-faced, kicks his engine to life.
66 A Koji hauls Priya aboard behind him.
67 A Bea clings to Koji.
68 A They roar toward the shore in a ragged line, snow spraying, Oscar leading, with the whole sheet of ice behind them breaking into slow plates.
69 A ¶ On the bank, they skid to a halt and turn.
* 70 A The place where they stood is open water, steaming in the cold.
* 71 A A single red mitten floats in it.
72 A ¶ Priya looks at her bare hand.
73 A Then at Harlan.
74 A Then at the mitten.
75 D PRIYA (very small): You said it was thirty inches.
76 A ¶ Harlan opens his mouth.
77 A Closes it.
78 A Oscar puts the cigar back between his teeth and lights it at last, his hands steady, his eyes on nobody.

### SCENE s02177 | INT. DRAINED MUNICIPAL SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, LEO, ABERNATHY
* 1 A ¶ A 1950s public pool, empty.
* 2 A Cracked blue tile, leaf litter, a ladder going down into nothing.
* 3 A One work light on a tripod throws long shadows across the deep end.
4 A ¶ JUNE (30s, night janitor, headphones around her neck) drags a mop bucket along the pool deck.
5 A Her coworker LEO (20s, hoodie, vape) trails behind her with a broom.
6 A MRS. ABERNATHY (70s, caretaker, key ring at her hip) watches from the office door.
7 D JUNE: Deep end first. Then the showers.
8 D LEO: Why are we doing the deep end? Nobody's swimming.
9 D MRS. ABERNATHY (to both): Because I said so. Humour an old woman.
10 A ¶ She retreats into the office.
* 11 A The door clicks shut.
12 A Leo shrugs, takes a drag, and follows June to the ladder.
13 A ¶ They climb down.
* 14 A Their footsteps echo.
15 A Leo sweeps.
16 A June mops.
* 17 A For a while that's all there is: the scrape, the slosh.
18 D LEO: Did you hear that?
19 D JUNE: Hear what?
20 D LEO (muttering): Nothing. Probably nothing.
21 A ¶ She goes back to the mop.
22 A He leans his broom against the wall and stares at the drain at the bottom of the deep end, a round black grate the size of a manhole.
* 23 A ¶ A low gurgle.
* 24 A Slow.
* 25 A Wet.
26 A ¶ June stops mopping.
27 A She turns toward the drain.
28 A Her breath fogs.
29 D JUNE: Leo?
30 D LEO: It's the pipes.
31 D JUNE: The pool is empty.
32 D LEO: Then it's the pipes behind the pool.
33 A ¶ She sets down the mop and edges a step closer to the grate.
34 A Leo catches her sleeve.
35 A She shakes him off.
36 A She crouches.
37 A Tilts her head.
* 38 A ¶ A whisper rises from the drain, wordless, soft, almost like a child humming.
39 D LEO [CONT'D] (to himself): Okay. Okay okay okay.
40 D JUNE: Go and get Mrs. Abernathy.
41 D LEO: You come with me.
42 D JUNE: Just go!
43 A ¶ He doesn't move.
* 44 A The humming stops.
* 45 A The silence is worse.
46 A June backs away from the grate, step by step, and bumps into Leo.
47 A They both flinch.
* 48 A ¶ Then the grate RATTLES.
* 49 A Dark water seeps up through the slats and spreads across the dry tile.
* 50 A Small wet handprints appear on the floor, one after another, walking toward them.
51 A ¶ June screams.
52 A Leo bolts for the ladder, slips on wet tile, scrambles up on all fours.
53 A June runs after him.
* 54 A Behind them the prints keep coming, wet and slow.
55 A ¶ They burst out onto the deck and stumble into the office.
56 A Mrs. Abernathy sits calmly at her desk, hands folded.
57 D LEO (gasping): There's something in the drain!
58 D MRS. ABERNATHY: Is there?
59 D JUNE: Call the police! Call someone!
60 D MRS. ABERNATHY (not unkind): Sit down, dear. You're out of breath.
61 A ¶ She pours water from a pitcher into two paper cups and holds them out.
62 A June takes hers.
63 A Leo doesn't.
64 D JUNE: You knew.
65 D MRS. ABERNATHY: Everyone knows. It's why we only clean the deep end at night.
66 D LEO: Then why did you send us down?
67 D MRS. ABERNATHY: Because it's hungry when it's lonely. And it likes company.
68 A ¶ She nods toward the window.
* 69 A In the pool below, in the glare of the work light, the wet prints end at the edge of the drain, side by side, as if someone sat there kicking their legs.
70 A ¶ June, trembling, raises a hand toward the glass.
71 A She doesn't seem to know she's doing it.
72 D LEO (to himself): I'm quitting. I'm quitting tomorrow.
73 D MRS. ABERNATHY (softly): Of course you are, dear.
* 74 A ¶ The prints fade from the tile.
* 75 A The work light buzzes.
* 76 A Then goes out.
* 77 A ¶ Dark.
* 78 A A long, even silence.
* 79 A Then, from the drain, very faintly, laughter.
80 D MRS. ABERNATHY [CONT'D] (to all of them): Well. That's the deep end done.

### SCENE s02178 | INT. TELEGRAPH OFFICE - DUST CREEK - DAY
Detected names (may be incomplete or contain aliases): CALEB MARROW, OPAL TREVINO, WILLIS PRUITT
* 1 A ¶ A cramped frontier room.
* 2 A Wanted posters, a potbellied stove gone cold, a telegraph key on a scarred desk.
* 3 A Dust in the slanting light.
4 A ¶ CALEB MARROW (40s, sheriff, tin star dented, sun-creased eyes) stands at the window with his rifle.
5 A At the desk, OPAL TREVINO (20s, telegraph operator, ink on her cuffs) taps the key.
6 A In the corner, tied to a chair, sits WILLIS PRUITT (30s, outlaw, grin, split lip).
7 D PRUITT: You can wire all the way to Denver, Sheriff. They won't send help.
8 D CALEB: Opal, keep tapping.
9 D OPAL: I am. Nobody answers.
10 D PRUITT: Told you.
11 D CALEB: You told me nothing, Willis. You talked.
* 12 A ¶ Boots crunch on gravel outside.
* 13 A Many.
14 A Pruitt turns his head toward the window and raises his voice.
15 D PRUITT (calling out): Alive and patient, boys!
16 D CALEB: Quiet.
17 A ¶ Caleb racks the lever on his rifle.
18 A Opal's hand flutters at her throat and she turns back to the key.
19 D OPAL: It's not going through. Wire's cut.
20 D CALEB: Then we do it slow.
21 D PRUITT: You could just let me go. Save the trouble.
22 D CALEB: Trouble's already here.
23 A ¶ Opal looks up.
24 A Caleb meets her eye.
25 A A beat of understanding.
26 D CALEB [CONT'D]: Opal. Back door. Take the mule.
27 D OPAL: I'm not leaving you.
28 D CALEB: Ride to Fort Hale. Tell the major.
29 D PRUITT: That's forty miles.
30 D OPAL: Thirty-eight.
31 D PRUITT: It's a poor plan, darlin'.
32 D OPAL: You mind your mouth.
33 D CALEB: You mind your mouth.
* 34 A ¶ Silence.
35 A Even Pruitt grins.
36 D OPAL (softly): We say it together now?
37 D CALEB: Seems we do.
38 A ¶ Opal pulls her shawl tight, tucks a pencil behind her ear, and slips through the back door.
* 39 A Hinges squeak.
* 40 A A mule snorts in the yard.
41 D OPAL [O.S.]: Don't you die before I'm back, Caleb Marrow!
* 42 A ¶ Hoofbeats fade.
43 D PRUITT: She'll be dead by supper.
44 D CALEB: Not that one.
45 A ¶ He settles the rifle on the sill.
* 46 A Outside, the boots stop.
47 D CALEB [CONT'D]: Willis, you still talking?
48 D PRUITT: Only when it helps.
49 D CALEB: Then tell your friends to come in one at a time.

### SCENE s02179 | INT. MUSEUM CLOCKROOM - NIGHT
Detected names (may be incomplete or contain aliases): NADIA FARRUKH, THEO BAPTISTE, KENJI IWATA, DOT MCALLISTER, THUNK
* 1 A ¶ Brass gears the size of cartwheels turn behind glass.
* 2 A A vault door gleams in the corner, unlit.
* 3 A The crew has been here three hours.
4 A ¶ NADIA FARRUKH (30s, mastermind) sits cross-legged on a bench, a tablet balanced on her knee.
5 A THEO BAPTISTE (40s, safe man, headphones) listens to the vault.
6 A KENJI IWATA (20s, climber) hangs upside down from a beam, sandwich in hand.
7 A DOT MCALLISTER (60s, forger) knits on a stool, needles clicking.
8 D THEO (not looking up): Four more clicks.
9 D NADIA: Take your time.
10 D KENJI: You said that an hour ago.
11 D NADIA: An hour ago you were still on the roof.
12 D DOT: Nobody's bored if they're knitting.
13 D KENJI: I'm not knitting.
14 D DOT: That's your problem.
15 A ¶ Theo holds up one finger.
* 16 A The room stills.
* 17 A A gear grinds.
* 18 A Another.
19 A Nadia glances at her tablet; a timer reads 02:14.
20 D NADIA: Guard changes in two minutes.
21 D KENJI: Two minutes is nothing.
22 D NADIA: Two minutes is the whole job.
23 D THEO: Shh!
* 24 A ¶ A THUNK from inside the vault.
25 A Theo smiles, exhales, and takes off the headphones.
26 A He reaches for the handle.
27 A Kenji swings down from the beam, drops the sandwich, grabs Nadia's shoulder.
28 A Dot sets her needles down.
29 A Nadia stands, tablet clutched to her chest, as Theo turns the handle and the door hisses open on a velvet-lined case holding a small silver clockwork bird.
30 D KENJI: That's it?
31 D NADIA: That's it.
32 D DOT: It's smaller than I thought.
33 D THEO: They always are.
34 D KENJI: Can we go?
35 D NADIA: Not yet. Dot, the swap.
36 D DOT: I'm doing it.
37 D KENJI: Hurry up, hurry up.
38 D DOT: You're rushing me, boy.
39 D THEO: He's not rushing you, he's scared.
40 D KENJI: I'm not scared!
41 D NADIA: Everyone breathe.
42 A ¶ Dot lifts the bird with tissue and sets a duplicate in its place.
43 A Her hands, so slow on the needles, are fast now.
44 A Kenji stuffs the real bird into a padded satchel.
45 A Theo pushes the vault shut.
* 46 A The timer on Nadia's tablet reads 00:31.
47 D NADIA [CONT'D]: Go. Go.
48 D KENJI: Which door?
49 D NADIA: Roof!
50 D THEO: Roof is blocked!
51 D DOT: Then stairs!
* 52 A ¶ Boots hit the corridor.
* 53 A A roving flashlight beam swings across the clockroom glass.
54 A Kenji drops flat.
55 A Theo pulls Dot behind a gear housing.
56 A Nadia kills the tablet and the room is black.
* 57 A ¶ The beam lingers on the dropped sandwich.
* 58 A Footsteps pause outside.
59 A Nobody breathes.
* 60 A ¶ Nadia's voice, very quiet, from nowhere.
61 D NADIA [CONT'D]: Now.
* 62 A ¶ The beam moves on.
63 A Kenji springs for the service stairs.
64 A Theo and Dot bolt after him.
65 A Nadia follows, the bird bouncing in the satchel.
* 66 A The gears keep turning.

### SCENE s02180 | INT. NIGHT FERRY - CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): PETRA SOKOLOV, COURIER, DEE, KARIMI, SILAS
* 1 A ¶ Rows of idling vans and trucks.
* 2 A Rain drumming on the steel hull.
* 3 A A panel truck marked "ST. EMERIC FLORIST" sits near the stern.
* 4 A Its back doors are open.
5 A ¶ PETRA SOKOLOV (40s, crew boss, fisherman's sweater) sits on the bumper counting a cashier's envelope.
6 A A man in a delivery uniform leans on the truck beside her: THE COURIER (30s, calm, wet hair).
7 A DESHAWN "DEE" KARIMI (20s, hacker, laptop on a milk crate) crouches beside them.
8 D PETRA: We got half.
9 D COURIER: That's all there was.
10 D PETRA: You told us twice that.
11 D COURIER: Because I was told twice that.
12 D DEE: The vault logs show a full transfer.
13 D COURIER: The vault logs show what the vault wanted you to see.
14 D PETRA: Who told you that?
15 D COURIER: A man named Hendricks.
16 D DEE: Hendricks is dead.
17 D COURIER: Then he lied last.
18 D PETRA: We didn't kill Hendricks.
19 D DEE: Nobody said we did.
20 D COURIER: Somebody did.
21 D PETRA: Dee, close the laptop.
22 D DEE: I'm trying to trace the other half.
23 D PETRA: Close it.
24 A ¶ Dee shuts it slowly.
* 25 A The ferry horn sounds, low and long.
26 D PETRA [CONT'D]: So let me say this plainly. You knew the take was half before we boarded.
27 D COURIER: I suspected.
28 D PETRA: You suspected, and you let us board.
29 D COURIER: You'd have boarded anyway.
30 D DEE: We would have.
31 D PETRA: Don't help him.
32 D DEE: I'm just being honest.
33 D PETRA: Be honest quieter.
34 D PETRA: What do we call you, anyway?
35 D COURIER: Silas.
36 D SILAS: I'll give you what I have. Fifty thousand. In the glove box.
37 D PETRA: That's a tip.
38 D SILAS: It's what's left.
39 D DEE: Petra, take it. We get off at Lindqvist Pier in ten minutes.
40 D PETRA: We're not taking it.
41 D DEE: Why not?
42 D PETRA: Because I'm done being the one who takes less.
43 D SILAS: Then you take nothing.
44 D PETRA: Then I take nothing. But you walk off first.
45 D SILAS: I walk off alone.
46 D PETRA: You walk off alone.
* 47 A ¶ The ferry horn again.
* 48 A Rain on steel.
49 A The Courier nods, pulls his collar up, and steps out into the dark of the car deck.
50 A Dee stares after him.
51 A Petra stuffs the envelope into her sweater.
52 D DEE: Was that smart?
53 D PETRA: No.
54 D DEE: Okay.
55 D PETRA: It was right.

### SCENE s02181 | INT. CORAL-FARM SUBMERSIBLE - MAINTENANCE BAY - NIGHT
Detected names (may be incomplete or contain aliases): ILSA VANTERPOOL, KESTREL
* 1 A ¶ A cramped steel room lit by blue emergency strips.
* 2 A Pipes sweat.
* 3 A Through a thick porthole, a school of luminous fish drifts past.
4 A ¶ ILSA VANTERPOOL (40s, chief technician, grease on her forearms) kneels at an open floor panel, welding a coolant line.
* 5 A A radio hisses at her hip.
6 A She works with the patience of someone who has done this a thousand times.
* 7 A ¶ Behind her, the hatch wheel TURNS.
* 8 A Slowly.
9 A Ilsa freezes, torch still lit.
* 10 A ¶ The hatch swings open.
11 A A figure ducks through, dripping.
12 A This is KESTREL (30s, drifter, ragged survival suit, a shock baton at his belt).
13 A He closes the hatch behind him and looks at her.
14 D ILSA: You're not on the manifest.
15 D KESTREL: Neither is half this boat.
16 D ILSA: How did you get through the lock?
17 D KESTREL: Same way you'd leave. Carefully.
18 A ¶ Ilsa shuts off the torch.
19 A Sets it down.
20 A Stands, slowly, wiping her hands on her thighs.
21 A He watches the movement.
22 A She watches his baton.
23 D ILSA: Captain doesn't allow guests.
24 D KESTREL: Captain's asleep.
25 D ILSA: Captain doesn't sleep.
26 D KESTREL: Then he's dead. Take your pick.
27 A ¶ She lunges for the radio.
28 A He crosses the bay in two steps and grabs her wrist.
29 A They struggle, knocking a toolbox off the wall, spanners clattering.
30 A She drives an elbow into his ribs.
31 A He grunts, twists, slams her against the pipe.
32 A Both of them freeze, breathing hard, faces inches apart.
33 D ILSA: Let go.
34 D KESTREL: Only if you stay quiet.
35 D ILSA: I won't.
36 D KESTREL: Then I won't let go.
* 37 A ¶ The pipe behind her starts to HISS.
* 38 A A thin jet of steam.
39 A Both of them stare at it.
40 A Then at each other.
* 41 A The coolant line she was welding is failing.
42 D ILSA: That's the main feed.
43 D KESTREL: Fix it.
44 D ILSA: Let me go and I will.
45 A ¶ He hesitates.
* 46 A The steam thickens.
* 47 A The fish outside scatter.
48 A He lets go.
49 A She drops to her knees and grabs the torch, and he crouches beside her, holding the pipe steady with his bare gloves, wincing at the heat.
50 D ILSA [CONT'D]: Hold it. Tighter.
51 D KESTREL: It's burning.
52 D ILSA: Then burn.
* 53 A ¶ The torch flares.
* 54 A The weld glows.
* 55 A The hiss dies.
56 A They look at each other, soaked, shaking, and neither moves away.

### SCENE s02182 | INT. COURTROOM 4B - SPLIT-LEVEL ANNEX - DAY
Detected names (may be incomplete or contain aliases): JUDGE EDITH WHITLOCK, ATTORNEY MARCUS DELANEY, ROSALIND PEARCE, ATTORNEY FELIX OYELOWO, NATHANIEL STROUD, BAILIFF HUGO
* 1 A ¶ Wood panelling, fluorescent hum.
* 2 A A cracked window shows a parking structure.
* 3 A The room is packed and silent.
4 A ¶ JUDGE EDITH WHITLOCK (60s, silver bob, half-moon glasses) presides.
5 A At the plaintiff's table, ATTORNEY MARCUS DELANEY (40s, three-piece suit) shuffles notes beside his client, ROSALIND PEARCE (50s, nurse's cardigan, wedding ring she keeps turning).
6 A At the defence table, ATTORNEY FELIX OYELOWO (30s, immaculate) sits beside his client, DR. NATHANIEL STROUD (60s, surgeon, bow tie).
7 A In the box, a nervous BAILIFF HUGO (30s, uniform too big) stands at attention.
8 D JUDGE WHITLOCK: Counsel, approach.
9 A ¶ Delaney and Oyelowo rise together, stride to the bench.
10 A She leans down, eyes narrowing.
11 D JUDGE WHITLOCK [CONT'D]: I will not have another outburst. Is that clear?
12 D DELANEY: Perfectly, Your Honour.
13 D OYELOWO: Perfectly, Your Honour.
14 A ¶ She sits back.
15 A They return to their tables.
16 A Delaney drops a folder in front of Rosalind, who squares it with both hands.
17 A Stroud leans toward Oyelowo and whispers; Oyelowo shakes his head and stares straight ahead.
18 D DELANEY: Mrs. Pearce, tell the court what you saw in the operating room.
19 D ROSALIND: I saw the anaesthesia log. It was blank.
20 D OYELOWO: Objection. Foundation.
21 D JUDGE WHITLOCK: Overruled. Continue.
22 D ROSALIND: It was blank for forty minutes.
23 D DELANEY: And who was responsible for completing that log?
24 D ROSALIND: Dr. Stroud.
* 25 A ¶ A murmur from the gallery.
26 A Stroud's jaw tightens.
27 A He lifts a pen, sets it down, lifts it again.
28 A Hugo shifts his weight and clears his throat.
29 D OYELOWO: Mrs. Pearce, you were the circulating nurse that day?
30 D ROSALIND: I was.
31 D OYELOWO: And the log was your responsibility as well.
32 D ROSALIND: It was not.
33 D OYELOWO: You're sure.
34 D ROSALIND: I've worked in that theatre for twenty-two years. I'm sure.
35 A ¶ Oyelowo studies her.
36 A She holds his gaze.
37 A Delaney leans back, folding his hands, a small smile at the corner of his mouth.
38 D JUDGE WHITLOCK: Mr. Oyelowo, do you have a question?
39 D OYELOWO: Several, Your Honour. But I'll start with one.
40 A ¶ He turns, crosses to the box, stands very close.
41 D OYELOWO [CONT'D]: Why did you wait eleven months to report it?
42 D ROSALIND: Because no one asked.
* 43 A ¶ Silence.
44 A Stroud finally looks up.
45 A For the first time, he looks at her.

### SCENE s02183 | INT. NEONATAL ICU - NURSES' STATION - 3 A.M.
Detected names (may be incomplete or contain aliases): ELOISE FAURE, NURSE DESMOND ACHEBE, NURSE LUPE TALAKAI, ANIKA VERMA, RESPIRATORY THERAPIST BO LINDGREN, CHAPLAIN MIRIAM GOLD
* 1 A ¶ Soft monitors.
* 2 A A mug of cold tea.
* 3 A Six people around a whiteboard.
4 A ¶ DR. ELOISE FAURE (50s, attending) caps a marker.
5 A NURSE DESMOND ACHEBE (30s) sips his coffee.
6 A NURSE LUPE TALAKAI (40s) scrolls a chart.
7 A DR. ANIKA VERMA (30s, resident) hugs a clipboard.
8 A RESPIRATORY THERAPIST BO LINDGREN (20s) leans on the counter.
9 A CHAPLAIN MIRIAM GOLD (60s) sits quietly in the corner.
10 D FAURE: Okay. Bed six stabilised, bed nine's weaning, bed eleven is the one I'm watching.
11 D ACHEBE: Eleven's sats have been drifting.
12 D TALAKAI: Ninety-one, ninety, ninety-one.
13 D VERMA: That's within range.
14 D FAURE: It's within range for a healthy infant. Not for this one.
15 D LINDGREN: I can bump the flow.
16 D FAURE: Do it. Slowly.
17 D GOLD: The parents asked if they could come in.
18 D FAURE: At four. If nothing changes.
19 D GOLD: They're afraid it will.
20 D FAURE: So am I.
* 21 A ¶ A pause.
* 22 A The monitors keep their quiet rhythm.
23 D ACHEBE: Everything looks calm.
24 D TALAKAI: That's what scares me.
* 25 A ¶ Behind them, a single alarm begins to sound.
* 26 A Soft, then not.
* 27 A Bed eleven.

### SCENE s02184 | INT. REMOTE ISLAND CLINIC - EXAM ROOM - DUSK
Detected names (may be incomplete or contain aliases): IFEOMA OKONKWO-REYES, SALVADOR MENDES, NURSE PAOLO FERRARI, MARISOL MENDES, LOLO, COAST GUARD
* 1 A ¶ A whitewashed room with a single shuttered window.
* 2 A Salt has crusted the sill.
* 3 A The generator stutters somewhere beneath the floor, and the lights breathe in time with it.
4 A ¶ DR. IFEOMA OKONKWO-REYES (40s, tired, hair tied with a bandage strip) bends over the examination bed.
5 A On it lies SALVADOR MENDES (60s, fisherman, grey in the face), his shirt cut open, a clumsy tourniquet around one thigh.
6 A He grips the rail with a knuckle-white hand.
7 A At the foot of the bed, NURSE PAOLO FERRARI (30s) holds a bag of saline above his head with both arms trembling.
8 A ¶ At the window, MARISOL MENDES (30s, the patient's daughter) holds the shutters closed as though they might fly open.
9 A Beside her, LOLO the interpreter, short for Eleuterio (50s, wide-brimmed hat), turns a phone over in his hands.
* 10 A ¶ A radio on the shelf gives a crackle of static, then a voice.
11 D COAST GUARD [V.O.]: Island Clinic, this is Coast Guard Helo Two. Be advised we are forty minutes out. Over.
12 D OKONKWO-REYES: Forty minutes. He doesn't have forty minutes.
13 D FERRARI: Doctor, the pressure.
14 A ¶ She watches the monitor.
15 A She doesn't answer him.
16 A She checks the tourniquet and tightens it a half-turn.
17 A Salvador groans.
18 D OKONKWO-REYES: Mr. Mendes. Salvador. Stay with me.
19 D MARISOL: Papa, listen to the doctor.
20 D SALVADOR (thick, barely audible): Mari.
21 A ¶ Marisol leaves the window and kneels at the bed.
22 A She takes his hand.
23 A Lolo says something low in Portuguese, and she nods without looking at him.
24 D OKONKWO-REYES: Paolo, take over compressions if I call it.
25 D FERRARI: Yes, Doctor.
26 D OKONKWO-REYES: Lolo, tell her he needs to stay awake.
27 D LOLO: She hears you.
* 28 A ¶ The radio crackles again.
29 D COAST GUARD [V.O.]: Island Clinic, do you copy? Over.
30 A ¶ Okonkwo-Reyes lifts the handset without turning from the bed.
31 D OKONKWO-REYES: Copy, Helo Two. Patient is hypovolemic, femoral bleed controlled for now. I need a hoist, a surgeon, and four units of O-negative. Over.
32 D COAST GUARD [V.O.]: Roger. We will relay. Hold tight, Doctor.
33 A ¶ She drops the handset and goes back to the bed.
34 A Ferrari has not moved.
35 A His arms shake but the bag stays high.
36 D FERRARI: Doctor, I can switch with Lolo.
37 D OKONKWO-REYES: No. You're fine.
38 D FERRARI: I'm not.
39 D OKONKWO-REYES: You are. Hold it.
40 A ¶ Marisol presses her father's palm to her cheek.
* 41 A The generator coughs.
* 42 A The lights flicker once, twice, and hold.
* 43 A Outside, far off, the first thud of rotor blades.

### SCENE s02185 | INT. FENCING SALLE - BASEMENT OF AN OLD OPERA HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): ASTRID NORDQUIST, OLIVER BANGURA
* 1 A ¶ Chandelier dust, mirrored walls, a piste of grey tape on parquet.
* 2 A One bare bulb.
3 A ¶ ASTRID NORDQUIST (30s, veteran, scarred forearm) fences a padded dummy with grim precision.
4 A Lunge, recover, lunge.
* 5 A Her reflection lunges with her.
6 A Sweat darkens her whites.
* 7 A A cracked wall clock reads midnight.
8 A ¶ She stops.
9 A Lowers the blade.
10 A Studies her wrist, which trembles, and presses it flat against her thigh until it quiets.
* 11 A ¶ On the stair, a door opens.
* 12 A Footsteps.
13 A A young man in a hooded coat descends, glove bag over one shoulder.
14 A This is OLIVER BANGURA (20s, upstart, shoulders too square).
15 A He stops at the foot of the stairs.
16 D OLIVER: They said you'd be here.
17 D ASTRID: They said wrong.
18 D OLIVER: You're holding a sword.
19 A ¶ She flicks the blade at the spare rack.
20 A He unzips his bag, pulls out a mask, and takes a foil.
21 A They salute.
* 22 A The blades touch.
23 A ¶ She wins the first touch cleanly.
24 A He loses the second to a feint he should have read.
25 A The third is his: a low riposte she cannot answer.
26 A She laughs once, short, and shakes out her wrist.
27 D ASTRID: Who taught you that?
28 D OLIVER: You did.
29 D ASTRID: I taught you nothing.
30 D OLIVER: You taught me by losing to me.
31 A ¶ She stares at him.
32 A Then she takes off her mask, throws it across the room, and the mirrors shiver.
33 A He doesn't flinch.
34 A She steps in close.
35 D ASTRID: Again.

### SCENE s02186 | INT. ROOFTOP PIGEON COOP - BROOKLYN - EVENING
Detected names (may be incomplete or contain aliases): SQUAB SOCIAL CLUB, GUS PIZZUTI, PAULETTE, BARNABY, BOSS
* 1 A ¶ A lopsided wooden coop on a tar roof.
* 2 A Wire mesh, birdseed, a hand-lettered sign reading "SQUAB SOCIAL CLUB - KEEP OFF."
* 3 A The skyline glows behind.
4 A ¶ GUS PIZZUTI (60s, club president, bathrobe over trousers) holds a clipboard.
5 A His wife PAULETTE (60s, quilted vest) pours coffee from a thermos.
6 A Their nephew BARNABY (30s, sales rep, headset around his neck) stands stiffly in a suit that does not belong on a roof.
7 D GUS: Tonight's race. Eight birds, three hundred yards, winner takes the pot.
8 D BARNABY: Uncle Gus, I really need to take this call.
9 D GUS: Everyone needs to take a call. Sit.
10 D BARNABY: Is there a chair?
11 D PAULETTE: There is an overturned bucket.
12 A ¶ Barnaby sits on the bucket with the dignity of a man being sentenced.
* 13 A His headset buzzes.
14 A He holds up a finger and answers.
15 D BARNABY (into headset): Barnaby Sinclair, how can I help you.
16 D BOSS [V.O.]: Sinclair, where are you? The Henderson meeting started ten minutes ago.
17 D BARNABY: I'm, uh, on a site visit.
18 D BOSS [V.O.]: What site?
19 D BARNABY: It's a, it's a coop.
20 D BOSS [V.O.]: A what?
* 21 A ¶ A pigeon lands on Barnaby's head.
22 A He freezes.
23 D GUS: Don't move.
24 D PAULETTE: Don't move.
25 D BARNABY (whispering, headset still live): Please somebody take it.
26 D BOSS [V.O.]: Sinclair! Is that a bird?
27 D BARNABY: It's a client.

### SCENE s02187 | INT. COUNTRY MANOR - SMALL LIBRARY - EVENING
Detected names (may be incomplete or contain aliases): LORD EDMUND HALLORAN, LADY CATHERINE, CAPTAIN JULIAN ASHBY
* 1 A ¶ 1815.
* 2 A Candlelight.
* 3 A Walnut shelves.
* 4 A A fire in a marble grate.
* 5 A A chessboard stands mid-game on a table between two armchairs.
6 A ¶ LORD EDMUND HALLORAN (50s, immaculate, gout-stiffened) sits with a glass of port, one leg propped on a stool.
7 A Opposite him, his daughter LADY CATHERINE (20s, plain gown, unreadable) studies the board.
* 8 A Neither has spoken in some time.
9 A ¶ She moves a bishop.
10 A He looks at it.
11 A He moves a pawn.
12 A She smiles, almost, and shakes her head.
13 D LORD EDMUND: You have taken a long time to learn this game.
14 D LADY CATHERINE: I had a patient teacher.
15 D LORD EDMUND: I was not patient.
16 D LADY CATHERINE: No. But you were thorough.
17 A ¶ He sips.
18 A She reaches for a knight and holds it, not placing it.
19 D LORD EDMUND: Your mother would not have approved of the match.
20 D LADY CATHERINE: Mother would not have approved of me playing at all.
21 D LORD EDMUND: True.
22 A ¶ She sets the knight down.
23 A He studies it for a long time.
* 24 A The fire pops.
* 25 A A clock ticks somewhere in the dark.
* 26 A ¶ The door opens quietly.
27 A A tall young man in a mud-spattered riding coat steps in, hat in his hand.
28 A This is CAPTAIN JULIAN ASHBY (20s, officer, tired eyes, a faint limp).
29 A He waits at the threshold.
30 D LORD EDMUND [CONT'D] (without turning): Captain.
31 D ASHBY: My lord. Lady Catherine.
32 A ¶ She does not look up.
33 A Her hand tightens on a pawn until her knuckles pale.
34 D LORD EDMUND: You were expected a week ago.
35 D ASHBY: The roads were washed out, my lord. And there was a delay.
36 D LORD EDMUND: A delay.
37 D ASHBY: At Waterloo.
38 A ¶ The old man sets down his glass.
* 39 A It clinks on the board, and a rook topples.
40 A Catherine catches it before it rolls off the table.
41 D LORD EDMUND: Sit.
42 A ¶ Ashby crosses the room, wincing, and lowers himself onto a stool.
43 A Catherine places the rook back on its square.
44 A Her hand is perfectly steady.
45 A Her eyes are not.
46 D LADY CATHERINE: Check, I think.
47 D LORD EDMUND (quietly): So it is.

### SCENE s02188 | INT. HOSPITAL LAUNDRY ROOM - 4 A.M.
Detected names (may be incomplete or contain aliases): NURSE AGNES BRIGHTWATER, SAMIR HADDAD, ORDERLY CHEN WEI, VISITOR, DOLORES
* 1 A ¶ Steam.
* 2 A Rolling carts of folded scrubs.
* 3 A A row of industrial dryers thumping like slow hearts.
4 A ¶ NURSE AGNES BRIGHTWATER (40s, braids pinned under a cap) leans on a cart, eyes closed, fanning herself with a chart.
5 A DR. SAMIR HADDAD (30s, resident, rumpled) sits on the floor with his back to a dryer, a granola bar in each hand.
6 A ORDERLY CHEN WEI (50s, thick glasses) folds towels with machine speed.
7 A ¶ A figure stands in the doorway, uncertain.
8 A A slight woman in a visitor's lanyard, clutching a plastic bag of knitting.
9 A This is the VISITOR (60s).
10 D VISITOR: Excuse me. I'm looking for the cafeteria.
11 D AGNES: Wrong floor, hon.
12 D VISITOR: They sent me down.
13 D SAMIR: They send everyone down. It's the only warm room.
14 A ¶ The Visitor steps in.
15 A Agnes gestures to a stool.
16 A The Visitor sits, rummages in her bag, pulls out a half-finished scarf, and begins knitting.
17 A Chen Wei folds a towel, glances at her, folds another.
18 A Samir unwraps a granola bar and chews.
19 A Agnes closes her eyes again.
20 D VISITOR: I'm Dolores, by the way.
21 D AGNES: Agnes.
22 D SAMIR: Samir.
23 D CHEN WEI: Chen.
24 D DOLORES: Pleased to meet you all. I'm visiting my husband. Third floor. He had a stroke.
25 D AGNES: I'm sorry.
26 D DOLORES: Oh, he's stubborn. He'll be fine. He'll be furious about the hospital food.
27 D SAMIR: Everyone is.
28 D DOLORES: Do you have a husband, Agnes?
29 D AGNES: Eighteen years.
30 D DOLORES: That's a long time.
31 D AGNES: It's about right.
32 A ¶ Chen Wei sets down a stack of towels, sits on a cart, and watches Dolores's needles click.
* 33 A The dryers thump.
34 A Samir takes a second bite.
35 D DOLORES: Would any of you like a scarf? I make them for the ward.
36 D SAMIR: I'll take one.
37 D CHEN WEI: Green.
38 D DOLORES: Green it is.
39 D AGNES (eyes still closed): I'll take whichever one he doesn't.

### SCENE s02189 | EXT. MOONLIT CLEARING - THE WHISPERING WOOD - NIGHT
Detected names (may be incomplete or contain aliases): BRIAR THORNWICK, LYSANDRA, FINN OSRIC, SISTER MERIWEN, GRIMBLE, WARDEN WOOD
* 1 A ¶ A ring of white birches.
* 2 A Pale mushrooms glow along the roots.
* 3 A A stream runs backwards through the grass, climbing a low hill and disappearing into the trees.
* 4 A The air hums like a plucked string.
5 A ¶ Six travellers stand within the ring.
6 A ¶ BRIAR THORNWICK (40s, dwarf cartographer, spectacles, a coat of many pockets) unrolls a map and weighs its corners with pebbles.
7 A LYSANDRA (20s, elven archer, silver braid, a quiver slung low) stands on one foot, listening.
8 A FINN OSRIC (teen, farm boy, borrowed sword too large for him) hugs his elbows.
9 A SISTER MERIWEN (50s, wandering priestess, grey robe, knotted staff) kneels and touches the backwards stream.
10 A GRIMBLE (age unknown, gnome tinkerer, goggles pushed up on his forehead) pokes at a mushroom with a spoon.
11 D BRIAR: We are here.
12 A ¶ He puts a finger on the map.
13 A Lysandra glances over his shoulder.
14 D LYSANDRA: That is not here. That is a lake.
15 D BRIAR: The map says lake.
16 D LYSANDRA: The map is old.
17 D SISTER MERIWEN: The stream runs uphill. Which is odd, even for this wood.
18 D FINN: Is it magic?
19 D SISTER MERIWEN: It's something.
20 D GRIMBLE: It's glowing. Look! The mushrooms are humming!
21 A ¶ Grimble holds the spoon up.
22 A A fat orange mushroom hums a low C. Finn laughs, nervous.
23 A ¶ Between two birches, a pale shape detaches itself from the dark.
24 A A woman in a gown of cobweb and moonlight, hair long as a river, feet not quite touching the ground.
25 A This is the WARDEN OF THE WOOD (ageless, solemn).
26 A She regards them.
27 D WARDEN: You are far from the road.
28 D BRIAR: We have a map.
29 D WARDEN: Your map is a lie the trees agreed to tell.
30 A ¶ Briar closes the map.
31 A Lysandra draws an arrow and lets it hang, unnocked.
32 A Finn's sword droops.
33 A Meriwen rises, bowing her head.
34 D SISTER MERIWEN: We seek passage to the Southern Keep.
35 D WARDEN: Passage costs a song.
36 D GRIMBLE: I know one! Do you want the one about the frog?
37 D WARDEN: I want the truest song you know.
38 A ¶ All of them are quiet.
39 A Finn hesitates, steps forward, and begins to sing, small and out of tune, a farm song his mother taught him.

### SCENE s02190 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): GRANDMOTHER ILONA, TOBY, NELL, NELL'S BROTHER RAFE, PATTERSON
* 1 A ¶ A round room, whitewashed.
* 2 A A kettle ticks on an iron stove.
* 3 A Rain slides down the glass in slow threads.
* 4 A Five places are set at a table built for four.
5 A ¶ GRANDMOTHER ILONA (80s, shawl, hands folded) watches the empty fifth chair.
6 A Her grandson TOBY (20s, damp jacket) stirs his soup and does not drink it.
7 A His wife NELL (20s, pregnant, cardigan buttoned wrong) counts the spoons.
8 A NELL'S BROTHER RAFE (30s, unshaven) pours whisky into his tea.
9 A And the housekeeper, MRS. PATTERSON (60s, apron), sets down bread with exaggerated care.
* 10 A ¶ The lamp above the table dims.
* 11 A Brightens.
12 D GRANDMOTHER ILONA: Toby, the bread.
13 D TOBY: Thank you, Gran.
14 A ¶ He doesn't take any.
15 A Nell slides the board toward him with one finger.
16 D NELL: Rafe, you were out at the rocks today.
17 D RAFE: Checking the lines.
18 D NELL: Find anything?
19 D RAFE: Nothing worth mentioning, Nell.
20 A ¶ Mrs. Patterson sets a sixth bowl at the fifth place.
* 21 A Nobody comments.
* 22 A The kettle goes quiet.
* 23 A The soup steams across the empty chair.
24 D GRANDMOTHER ILONA: Mrs. Patterson, thank you.
25 D MRS. PATTERSON: He always liked the leeks.
26 A ¶ Toby puts down his spoon.
27 A Rafe turns his cup in a slow circle.
* 28 A Far above them, the great lamp grinds round, and its beam crosses the window once, white, then gone.

### SCENE s02204 | INT. AMBULANCE BAY - RURAL HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): AMARA NWOSU, BEN, HOLLOWAY, PARAMEDIC FIONA GALLAGHER, MARCEL DUPRE, DISPATCH
* 1 A ¶ Sodium lights, wet pavement.
* 2 A The bay doors yawn open to a rainy road.
* 3 A Gurneys and oxygen tanks line the wall.
* 4 A A radio on a shelf murmurs static.
5 A ¶ DR. AMARA NWOSU (40s, ER attending, damp scrubs) paces.
6 A NURSE BENEDICT "BEN" HOLLOWAY (30s, steady hands) checks a crash cart.
7 A PARAMEDIC FIONA GALLAGHER (30s, reflective jacket) stands by the doors, watching the road.
8 A ¶ Ben spots lights on the wet road.
9 A He nods at Fiona.
10 D BEN: They're here.
* 11 A ¶ An ambulance backs in, rear doors swinging.
* 12 A A gurney comes out fast.
13 A On it lies MARCEL DUPRE (50s, farmer, soaked flannel), pale and sweating.
* 14 A ¶ A radio on Fiona's shoulder crackles.
15 D DISPATCH [V.O.]: Unit Four, status on your patient? Over.
16 D FIONA (into radio): Unit Four. Arrived. Transferring now.
17 D DISPATCH [V.O.]: Copy, Four.
18 D AMARA: Fiona, what do you have?
19 D FIONA: Fifty-one-year-old male, chest pain, diaphoretic. BP eighty over fifty. Nitro given. No relief.
20 D AMARA: Ben, get a twelve-lead.
21 D BEN: On it, Doctor.
22 A ¶ He attaches the leads in four fast movements.
* 23 A The monitor shows a ragged line.
24 D BEN [CONT'D]: He's in V-fib.
25 D AMARA: Charge to two hundred.
26 D BEN: Charging.
27 D AMARA: Everybody clear.
28 D FIONA: Everybody clear.
29 A ¶ The shock lifts Marcel's back off the gurney.
* 30 A The monitor squeals.
* 31 A Flat.
32 D AMARA: Again.
33 D BEN: Charging. Three hundred.
34 D AMARA: Clear!
* 35 A ¶ Another shock.
36 A Marcel convulses.
* 37 A The monitor shows nothing.
* 38 A Then a blip.
* 39 A Another.
* 40 A The line settles into a ragged rhythm.
41 D BEN: We have a pulse.
42 D AMARA: Ben, breathe.
43 D BEN: I am breathing.
44 D AMARA: Then stop saying it out loud.
45 A ¶ Fiona, hands on her knees, lets out a short laugh.
46 A Ben wipes his forehead.
* 47 A The radio crackles again.
48 D DISPATCH [V.O.]: Unit Four, we have another call, motor vehicle collision, route nine. Can you respond? Over.
49 A ¶ Fiona looks at Amara.
50 A Amara looks at Fiona.
51 A Neither says anything.
* 52 A Rain drums on the bay roof.
53 D FIONA (into radio): Dispatch, Unit Four. Responding.
54 D AMARA: Fiona, you've been up thirty hours.
55 D FIONA: Thirty-one. Who's counting?
56 D AMARA: Ben is. Aren't you, Ben?
57 D BEN: Thirty-two, actually.
58 A ¶ Fiona grins, tired.
59 A She grabs her kit and jogs for the ambulance.
* 60 A The doors slam.
* 61 A The siren wails.
* 62 A The headlights swing across the bay and are gone.
63 A ¶ Amara turns to the gurney.
64 A Marcel's eyes flutter open.
65 A He grips her sleeve.
66 D MARCEL (faint): I'm sorry for the trouble.
67 D AMARA: No trouble, Mr. Dupre.
68 A ¶ She nods to Ben.
69 A Together they wheel him inside.

### SCENE s02205 | INT. WEDDING CAKE BAKERY - BACK KITCHEN - DAY
Detected names (may be incomplete or contain aliases): CORKY, BANKS, PRIYANKA SHAH-WILLIAMS, DEMI, OKORO, VALENTINA CRESPO
* 1 A ¶ Flour in the air.
* 2 A Sheet pans, piping bags, a six-tier cake in the middle of the floor leaning ever so slightly to the left.
* 3 A A clock says 2:14.
* 4 A The wedding is at 3:00.
5 A ¶ CORNELIUS "CORKY" BANKS (50s, head baker, flour-dusted apron) holds his head in his hands.
6 A His sous-chef PRIYANKA SHAH-WILLIAMS (30s, hairnet, eyes of steel) circles the cake with a ruler.
7 A Their apprentice DESMOND "DEMI" OKORO (teen, oversized chef whites) holds a piping bag like a weapon.
8 A And the bride's mother, MRS. VALENTINA CRESPO (60s, hat the size of a hubcap), stands in the doorway with her arms crossed.
9 D CORKY: It's fine. It's totally fine.
10 D PRIYANKA: It's leaning, Corky.
11 D CORKY: Everything leans. The Tower of Pisa leans.
12 D PRIYANKA: The Tower of Pisa isn't going to be eaten by two hundred guests.
13 D MRS. CRESPO: Is something wrong with my daughter's cake?
14 D CORKY: No, Mrs. Crespo.
15 D PRIYANKA: Yes.
16 D CORKY (to Priyanka): Stop helping.
17 D DEMI: Chef, I can fix it.
18 D CORKY: No, Demi.
19 D DEMI: With dowels.
20 D PRIYANKA: He's actually right.
21 D CORKY: Demi has never used a dowel in his life.
22 D DEMI: I've used toothpicks.
23 D CORKY: Toothpicks are not dowels.
24 A ¶ Mrs. Crespo marches in.
25 A She stops at the cake, takes off her hat, puts it on the counter, and rolls her sleeves.
26 D MRS. CRESPO: Show me where the dowels are.
27 D CORKY: Mrs. Crespo, please.
28 D MRS. CRESPO: Cornelius. I raised four children and buried two husbands. I can handle a dowel.
29 A ¶ Priyanka hands her a bundle.
30 A Corky sits down on a flour sack and puts his head back in his hands.
31 A Demi steps in, holds the cake steady with both palms, and braces his feet.
32 D DEMI: Is this how they do it in movies?
33 D PRIYANKA: No.
34 D DEMI: What do they do?
35 D PRIYANKA: They hire a better apprentice.
36 A ¶ He grins.
37 A She grins back, almost.
38 A Mrs. Crespo drives the first dowel through the top three tiers with a surgeon's precision.
* 39 A The cake groans.
* 40 A Settles.
* 41 A Straightens.
42 A All four of them hold their breath.
43 D MRS. CRESPO: There.
44 D CORKY (not looking up): Is it straight?
45 D PRIYANKA: It's straight.
46 D CORKY: Tell me honestly.
47 D DEMI: It's very straight, Chef.
48 A ¶ Corky lifts his head.
* 49 A The cake stands tall and perfect.
50 A He lowers his hands, stunned.
51 D CORKY: Mrs. Crespo, I owe you my career.
52 D MRS. CRESPO: You owe me a slice.
53 D PRIYANKA: That's actually the bride's slice.
54 D MRS. CRESPO: Then you owe me two.
* 55 A ¶ The clock ticks to 2:20.
56 A Priyanka claps once, sharply.
57 D PRIYANKA: Frosting touch-ups. Demi, the roses. Corky, the transport van.
58 D CORKY: The van is in the shop.
59 D PRIYANKA: You told me it was fixed.
60 D CORKY: I told you it was fixed in my heart.
* 61 A ¶ Silence.
62 A Mrs. Crespo lifts her hat from the counter, puts it back on her head, and picks up her car keys.
63 D MRS. CRESPO: I have a station wagon.
64 D CORKY: Mrs. Crespo, it's a six-tier cake.
65 D MRS. CRESPO: Cornelius, I have a very large station wagon.
66 A ¶ He looks at her.
67 A At the cake.
68 A At Priyanka, who shrugs, and at Demi, who is already carrying a tray of roses toward the back door.
69 D CORKY: Fine. We're doing this.
70 D PRIYANKA: We're doing this.
71 D DEMI: We're doing this!
72 D MRS. CRESPO: Somebody open the door.

### SCENE s02206 | EXT. ABANDONED SKATE PARK - SUNSET
Detected names (may be incomplete or contain aliases): WILLA PRZYBYLSKI, MATEO ARROYO-BELL
* 1 A ¶ Cracked concrete bowls.
* 2 A Graffiti.
* 3 A A single streetlamp flickers on.
* 4 A The sky is the colour of a bruise going yellow.
5 A ¶ WILLA PRZYBYLSKI (16, buzzcut, borrowed jacket) sits on the lip of a bowl, a board across her knees.
6 A Below, MATEO ARROYO-BELL (17, tall, band-aids on his elbows) rolls a loose wheel with one finger.
7 D WILLA: You're leaving tomorrow.
8 D MATEO: Bus is at seven.
9 D WILLA: Don't say goodbye.
10 D MATEO: I wasn't going to.
11 D WILLA: Good.
12 A ¶ He kicks up the board and drops into the bowl.
13 A Rolls up the far wall and hangs, weightless, for one second.
14 A Comes down.
15 A She watches, lips pressed.
16 D MATEO: Ride with me.
17 D WILLA: I'm not wearing pads.
18 D MATEO: Nobody's watching.
19 A ¶ She stands and drops in.
20 A Wobbles.
21 A Recovers.
22 A They carve opposite walls, passing in the middle, never colliding.
23 D WILLA: Don't forget me.
24 D MATEO: Don't forget me.
25 A ¶ They stop at the bottom, boards ticking, and neither speaks.

### SCENE s02207 | INT. DEEP-SPACE HABITAT - COMMON ROOM - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): MAYA THORNQUIST, AMBROSE BEAUMONT, TARIQ SALEH, LINNEA SORENSEN, KOFI MENSAH, GRIGORI PETROV
* 1 A ¶ Dim amber lighting.
* 2 A A long table bolted to the floor, six mugs, a hydroponic wall of drooping lettuce.
* 3 A A viewport shows a black field of stars.
* 4 A Outside, nothing.
5 A ¶ MAYA THORNQUIST (40s, station chief, ponytail) pours coffee substitute.
6 A DR. AMBROSE BEAUMONT (60s, botanist, cardigan) pokes at a lettuce leaf.
7 A TARIQ SALEH (30s, engineer, wrench in his belt) stares at his tablet.
8 A LINNEA SORENSEN (20s, comms officer) eats a protein bar.
9 A KOFI MENSAH (30s, medic, stethoscope) sketches in a notebook.
10 A And GRIGORI PETROV (50s, security, arms folded) leans on the wall.
11 D MAYA: Morning, everyone.
12 D LINNEA: It's night cycle.
13 D MAYA: Morning for me.
* 14 A ¶ Light chuckles.
15 A Tariq doesn't look up from his tablet.
16 A Kofi turns a page.
17 A Grigori's jaw works.
18 D TARIQ: Maya, the coolant readings are off again.
19 D MAYA: How off?
20 D TARIQ: Point three. Same as yesterday.
21 D MAYA: Same as yesterday is fine.
22 D TARIQ: Same as yesterday is a trend.
23 D MAYA (to the room): Tariq thinks we're going to explode.
24 D AMBROSE: We might.
25 D LINNEA: Ambrose, don't.
26 D AMBROSE: It's a statistical possibility.
27 D KOFI: Everything is.
28 A ¶ Grigori pushes off the wall and crosses to the table.
29 A He sits.
30 A He doesn't speak.
31 D MAYA: Grigori, you're quiet.
32 D GRIGORI: Am I?
33 D MAYA: You're always quiet.
34 D GRIGORI: Then I'm normal.
35 A ¶ Linnea snorts.
36 A Ambrose smiles, pleased.
37 A Tariq finally sets down his tablet.
38 D TARIQ: Maya. I need to say something.
39 D MAYA: Go ahead.
40 D TARIQ: I think someone's been tampering with the cooling loop.
* 41 A ¶ The room stills.
42 A Kofi's pencil stops.
43 A Ambrose lowers his leaf.
44 D MAYA: Someone.
45 D TARIQ: Someone on board.
46 D GRIGORI: That's a serious accusation.
47 D TARIQ: It's a serious loop.
48 D MAYA (to the room): Does anyone know anything about this?
49 A ¶ Nobody answers.
* 50 A The lights pulse, dim, brighten.
51 A Linnea's bar crumbles in her fist.
* 52 A Grigori's chair creaks.
53 D MAYA [CONT'D] (to herself): Of course.
54 D KOFI: Maya?
55 D MAYA: Nothing.
* 56 A ¶ A low tone rings through the hull.
* 57 A Not an alarm.
* 58 A Deeper.
* 59 A The amber lights flicker to red.
60 D LINNEA: That's the pressure alert.
61 D TARIQ: That's not the pressure alert. That's the coolant.
62 D AMBROSE: Is it the end?
63 D MAYA: It's not the end.
64 D GRIGORI (softly): It might be.
65 A ¶ Everyone turns to look at him.
66 A His hand has found something in his pocket.

### SCENE s02208 | INT. OFFICE PARKING LOT - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): AUDREY KOLLMAN, NATHANIEL PARK, BO, LAFAYETTE, PRUDENCE TRAN, HR
* 1 A ¶ Rows of cars.
* 2 A A cloud of exhaust.
* 3 A An orange sunset hits the glass tower above.
* 4 A A corporate banner reads SYNERGY AWAITS.
5 A ¶ AUDREY KOLLMAN (50s, VP of Operations, severe bun) sits in her sedan with the window down, a cardboard box in the passenger seat.
6 A Next to the car, her former assistant NATHANIEL PARK (20s, lanyard, nervous) holds a sad potted fern.
7 A In the next row, security guard BEAUREGARD "BO" LAFAYETTE (60s, reflective vest) leans on his golf cart.
8 A And PRUDENCE TRAN (40s, HR, cardigan) walks up, clipboard in hand.
9 D PRUDENCE: Audrey. I'm sorry.
10 D AUDREY: Don't be sorry. Be efficient.
11 D NATHANIEL: I brought your fern.
12 D AUDREY: Thank you, Nathaniel.
13 D BO: Ma'am, is there anything I can carry?
14 D AUDREY: No. Thank you, Beauregard.
15 D BO: It's Bo.
16 D AUDREY: Bo. Of course.
17 A ¶ Nathaniel sets the fern on the roof of her car.
18 A Prudence flips a page on her clipboard.
19 D PRUDENCE: There are a few forms.
20 D AUDREY: There are always forms.
21 D NATHANIEL: I can fill them out for you.
22 D PRUDENCE: Nathaniel, no.
23 D NATHANIEL: Sorry.
24 D BO (low): It's a shame.
25 D PRUDENCE: It's company policy.
26 D BO: I know. It's still a shame.
27 A ¶ Audrey starts the engine.
* 28 A It idles.
29 A She doesn't put the car in gear.
30 A The four of them stand in the long amber light, none of them moving.
31 D AUDREY: Well. This has been a long twelve years.
32 D NATHANIEL: It was an honour.
33 D AUDREY: Was it?
34 D NATHANIEL: It was a lot of things.
35 A ¶ She laughs, a quick, surprised sound.
36 A Prudence smiles.
37 A Bo tips his cap.
38 A Audrey puts the car in gear, takes the fern from the roof, and sets it on the passenger seat on top of the box.
39 D AUDREY [CONT'D]: Water it on Thursdays.
40 D NATHANIEL: It's yours.
41 D AUDREY: It was always yours.
42 A ¶ She drives away.
43 A They watch her go, three small figures in the light.

### SCENE s02209 | EXT. DRY-DOCK SHIPYARD - ROWING TANK - DAWN
Detected names (may be incomplete or contain aliases): NAOMI BERENSON, COACH ILSE VORHEES
* 1 A ¶ A vast concrete basin, drained and refilled with grey-green water, used by the old shipyard for hull testing and now, secretly, as a rowing course.
* 2 A Rusted cranes loom like skeletal herons.
* 3 A Mist lies on the surface.
* 4 A ¶ A racing shell sits at the dock, a single scull, polished cedar.
5 A Beside it stands NAOMI BERENSON (30s, Olympic hopeful, lean, hair cropped) in a rain jacket, hands on hips, studying the water.
6 A Her breath fogs.
7 A Her calf muscles twitch.
8 A She is alone, and she has been alone for a long time.
9 A ¶ She crouches, tests the water with two fingers, wipes them on her thigh.
10 A She sets the scull in the water and lowers herself into it with one fluid movement.
* 11 A The oars dip.
12 A ¶ She begins to row.
* 13 A ¶ The scull glides across the basin.
14 A Her stroke is long and exact.
* 15 A The mist parts, closes behind her.
* 16 A A gull cries.
* 17 A Somewhere beyond the cranes a siren is heard and fades.
18 A ¶ She reaches the far end, turns the shell with two pulls, and comes back.
19 A Faster now.
* 20 A The oars bite deeper.
21 A Her shoulders flare, her breath hitches, and the water boils behind the blades.
22 A ¶ At the dock, a figure has appeared.
23 A A woman in a heavy wool coat, thermos in hand, standing absolutely still.
24 A This is COACH ILSE VORHEES (60s, grey crop, stern as a gravestone).
25 A She watches the scull approach.
26 A ¶ Naomi sees her.
27 A Her stroke falters.
28 A The right oar catches the water at a bad angle and the boat veers.
29 A She corrects it.
30 A Her breath is ragged.
31 D COACH VORHEES (calling): Don't stop.
32 D NAOMI (between breaths): I'm not stopping.
33 D COACH VORHEES: Then why are you slowing?
34 D NAOMI: I'm not.
35 D COACH VORHEES: Look at the clock.
36 A ¶ Naomi glances at the waterproof watch strapped to the bow.
37 A Her face falls.
* 38 A Six minutes fifty.
* 39 A Not good enough.
40 D NAOMI: I'm having an off day.
41 D COACH VORHEES: You've been having an off day for a year.
* 42 A ¶ The scull glides the last twenty metres.
43 A Naomi ships the oars, lets the boat drift to the dock, and sits there gasping.
44 A Vorhees crouches, extends a hand.
45 A Naomi takes it and is hauled out onto the concrete.
46 A She sits against a bollard, chest heaving.
47 D NAOMI: Why are you here?
48 D COACH VORHEES: To tell you that Beijing is eleven weeks away.
49 D NAOMI: I know when Beijing is.
50 D COACH VORHEES: Do you? Because you row like someone who has forgotten.
51 A ¶ Naomi stares at the water.
* 52 A The scull rocks gently at its mooring.
53 A Vorhees unscrews the thermos and pours tea into the cap.
54 A She hands it over.
55 D COACH VORHEES [CONT'D]: Drink.
56 A ¶ Naomi drinks.
* 57 A The steam rises between them.
58 D NAOMI: I think I'm done.
59 D COACH VORHEES: You think.
60 D NAOMI: I know.
61 D COACH VORHEES: Then say it properly.
62 A ¶ Naomi looks at her.
63 A Looks away.
* 64 A The cranes, the mist, the grey water.
65 D NAOMI: I can't do it anymore.
* 66 A ¶ Silence.
67 A The thermos cap trembles in her hands.
68 A Vorhees does not speak for a long time.
69 A Then she sits down on the concrete beside her, heavily, like a woman putting down a load she has carried too long.
70 D COACH VORHEES: Do you know why I came this morning?
71 D NAOMI: To tell me I'm slow.
72 D COACH VORHEES: To tell you that I stopped timing you in March.
73 A ¶ Naomi turns, slowly.
74 D COACH VORHEES [CONT'D]: Every split since March was a lie. I wrote down numbers I knew you'd hit. You've been faster than you think for months.
75 D NAOMI: That's not funny.
76 D COACH VORHEES: I'm not laughing.
77 D NAOMI: Why?
78 D COACH VORHEES: Because you needed someone to lie to you.
* 79 A ¶ The sun breaks over the cranes.
* 80 A Light floods the basin.
* 81 A The mist burns off in a single rolling wave, and the water flashes gold.
82 A Naomi starts to laugh.
83 A It turns into something between laughing and weeping.
84 A Vorhees puts an arm around her.
85 A Neither of them looks at the other.
86 D NAOMI: You're awful.
87 D COACH VORHEES: I'm your coach.
88 A ¶ Naomi wipes her face with her sleeve.
89 A She looks at the scull, already steaming in the sun.
90 D NAOMI: Again?
91 D COACH VORHEES: Again.

### SCENE s02210 | INT. FUNERAL PARLOUR - SIDE ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): MAEVE FINNEGAN, DECLAN, BRENDAN, AOIFE, THADDEUS KRANE
* 1 A ¶ A narrow room of dusty velvet.
* 2 A A tea urn steams in the corner.
* 3 A The funeral next door has just ended; muffled organ music drifts through the wall.
* 4 A On a cloth-draped table, a photograph of an elderly man in a fishing hat.
5 A ¶ Five mourners remain.
6 A ¶ MAEVE FINNEGAN (70s, widow, black dress, chin high) stands at the photograph, straightening it for the third time.
7 A Her sons: DECLAN (40s, suit too tight, tie pulled loose) leans on the urn and drinks from a styrofoam cup, and BRENDAN (40s, rumpled, red-eyed) sits on a folding chair staring at his shoes.
8 A Their cousin AOIFE (30s, bright scarf) pours milk into her tea with great concentration.
9 A And a stranger, a man in a rain-darkened trench coat, lingers by the door: MR. THADDEUS KRANE (60s, thin, polite).
10 A ¶ Nobody speaks.
11 D DECLAN: Ma. Sit down.
12 D MAEVE: I'm fine standing.
13 D DECLAN: You've been on your feet since seven.
14 D MAEVE: So has he.
15 A ¶ She nods at the photograph.
16 A Declan lowers the cup.
17 A Brendan lets out a small, wet laugh and wipes his nose with his wrist.
18 D AOIFE: Would anyone like a biscuit?
19 D BRENDAN: I would.
20 D DECLAN: They're stale.
21 D BRENDAN: I don't care.
22 A ¶ She brings him the plate.
23 A He takes one, holds it, doesn't eat.
24 A Maeve turns from the photograph and looks at the stranger by the door.
25 D MAEVE: You're not family.
26 D KRANE: No, madam.
27 D MAEVE: Then who are you?
28 D KRANE: I worked with your husband. Years ago. At the shipyard.
29 D MAEVE: Frank never said.
30 D KRANE: He wouldn't have. We weren't friends.
31 D DECLAN: Then why are you here?
32 D KRANE: Because he did me a kindness once. And I never repaid it.
33 A ¶ Maeve crosses the room, slowly, shoes clicking.
34 A She stops in front of him, studies his face, and takes his hands in both of hers.
35 D MAEVE: Take your coat off. You'll catch your death.
36 D KRANE: Madam, I really should go.
37 D MAEVE: You'll have tea.
* 38 A ¶ It isn't a question.
39 A Krane lets her pull the coat off his shoulders.
40 A She hands it to Aoife, who hangs it carefully.
41 A Declan and Brendan exchange a glance.
42 A Then Brendan, abruptly, pushes the plate of biscuits across the table toward the stranger.
43 D BRENDAN: They're stale.
44 D KRANE (a small smile): So I understand.
45 A ¶ He takes one.
46 A Maeve pours a cup, hands it to him, and for a moment the only sound is the muffled organ from next door, carrying one slow chord after another, and the clink of five spoons in five cups.
* 47 A ¶ Then the music stops.
* 48 A A door opens somewhere in the building.
* 49 A Footsteps, voices, laughter.
* 50 A The funeral is over.
51 A They stand in the quiet and do not go out.

### SCENE s02211 | EXT. DESERT CANYON FLOOR - DAY
Detected names (may be incomplete or contain aliases): RIGO, SALAZAR, WOMAN, BLUE BLAZER, HEAVYSET MAN, GIRL, TESS, IMANI
* 1 A ¶ Orange rock, white sky.
* 2 A A dry wash cuts the canyon floor.
* 3 A A crashed single-engine plane lies nose-down in the sand, one wing bent.
4 A ¶ Four survivors sit in the narrow shade of the other wing.
5 A ¶ RIGOBERTO "RIGO" SALAZAR (40s, pilot, blood-crusted shirt) tears a seat cushion for padding.
6 A A WOMAN IN A BLUE BLAZER (30s, torn sleeve) rations water into a tin cap.
7 A A HEAVYSET MAN (50s, glasses cracked) stares at the horizon.
8 A A teenage GIRL (15, headphones around her neck) draws in the dust with a stick.
9 A ¶ The woman hands the cap to the man.
10 A He sips and passes it to the girl.
11 A She drinks, hesitates, and offers it to Rigo, who shakes his head.
12 D RIGO: Keep it.
13 D WOMAN: You haven't had any.
14 D RIGO: I'm fine.
15 D WOMAN: You're bleeding.
16 D RIGO: It's old blood.
17 A ¶ She takes the cap back.
18 A He looks at the others and clears his throat.
19 D RIGO [CONT'D]: We stay with the plane. They look for planes.
20 D HEAVYSET MAN: Who's they?
21 D RIGO: Search and rescue.
22 D HEAVYSET MAN: They know we're down?
23 D RIGO: They will.
24 A ¶ The girl scratches a circle in the sand.
25 A The woman watches it.
26 A The man in glasses looks at the girl, and then at the sky, and then at his hands.
27 D WOMAN: He's lying.
28 D HEAVYSET MAN: Who?
29 D WOMAN: The pilot.
30 D RIGO: I'm Rigo.
31 D WOMAN: You're lying, Rigo.
32 D RIGO: I'm telling the truth as I know it.
33 A ¶ The Heavyset Man lowers his head.
* 34 A A single dust devil rises from the wash, spins across the canyon floor, and dies against the wreck.
35 A Nobody moves.
36 D GIRL (very quiet): My name's Tess.
37 A ¶ Everyone looks at her.
38 D TESS: In case it matters.
39 D WOMAN: It matters, Tess.
40 D TESS: It's just. Nobody asked.
41 A ¶ The Heavyset Man lifts his head.
42 D HEAVYSET MAN: I'm Gideon.
43 A ¶ The Woman in the Blue Blazer closes her eyes.
44 D WOMAN (after a moment): Imani.
45 A ¶ The four of them sit in the narrow shade, strangers with names.
46 D IMANI: Rigo. How far to the road?
47 D RIGO: Far enough.

### SCENE s02212 | INT. FERRY TERMINAL - IMPROVISED TRIAGE BAY - NIGHT
Detected names (may be incomplete or contain aliases): YUSUF ADEYEMI, NURSE PILAR GUZMAN, CORMAC DOYLE
* 1 A ¶ A waiting hall turned field hospital.
* 2 A Plastic chairs shoved to the walls, a departures board stuck on CANCELLED.
* 3 A Camp cots in rows.
* 4 A Generator hum, the slap of waves against the pier beyond the glass.
5 A ¶ DR. YUSUF ADEYEMI (50s, trauma surgeon, bloody gloves) bends over a cot.
6 A Opposite him, NURSE PILAR GUZMAN (30s, ponytail, steady as granite) holds a surgical lamp.
7 A Between them lies CORMAC DOYLE (40s, ferry deckhand, soaked, grey-lipped), his shirt cut open, a deep gash across his abdomen packed with gauze.
8 D YUSUF: Pressure?
9 D PILAR: Ninety over sixty. Holding.
10 D YUSUF: It won't hold.
11 D PILAR: It's holding now.
12 D YUSUF: Now is not a plan.
13 A ¶ He peels back the gauze.
* 14 A A seep of dark blood.
15 A Cormac groans, eyes rolling.
16 A Pilar steadies the lamp.
17 D YUSUF [CONT'D] (to the room): I need a clamp, a suction, and someone who isn't afraid of blood.
* 18 A ¶ Nobody answers.
* 19 A The hall is empty but for the three of them and rows of vacant cots.
20 A Pilar looks at him.
21 D PILAR: There's no one else, Doctor.
22 D YUSUF: Then you.
23 D PILAR: I'm holding the lamp.
24 D YUSUF: Put the lamp on the cot.
25 A ¶ She sets it down.
* 26 A The beam angles up across their faces.
27 A Yusuf takes a clamp from the tray and pushes it into the wound.
28 A Pilar takes the suction, slides it in beside his hand.
29 A Both lean in.
30 A Both are still.
* 31 A A heartbeat passes.
* 32 A Another.
33 D CORMAC (weak, muttered): Mam?
34 D PILAR: He's talking.
35 D YUSUF: That's good. That's very good.
36 D PILAR: Is it?
37 D YUSUF (to himself): It better be.
38 A ¶ Cormac's eyes open, unfocused, searching the ceiling.
39 D CORMAC: Is the boat sinking?
40 D YUSUF: No. The boat's fine.
41 D CORMAC: I can hear the water.
42 D YUSUF: That's the pier. Lie still.
43 D CORMAC: My mam's waiting at the dock.
44 D PILAR (gently): Cormac. Look at me.
45 A ¶ He turns his head.
46 A His gaze finds her.
47 D PILAR [CONT'D]: You're in good hands.
48 D CORMAC: Are you the doctor?
49 D PILAR: I'm the one who keeps him honest.
50 A ¶ Cormac smiles, a weak twitch.
51 A Yusuf glances at Pilar over the clamp, and something almost like humour crosses his face.
* 52 A ¶ The generator coughs.
* 53 A The lights flicker once, twice, and then go out.
* 54 A Total dark.
* 55 A Waves slam the pier.
* 56 A Somewhere in the black, a monitor begins to alarm.
57 D YUSUF [O.S.]: Pilar. The lamp.
58 D PILAR [O.S.]: I have it.
* 59 A ¶ The battery lamp flares up, small and harsh.
60 A Cormac's face is white.
61 A His chest is not moving.
62 D YUSUF (to himself): No, no, no.
63 A ¶ He drops the clamp and begins compressions, hard and fast, his whole body pumping.
64 A Pilar takes over the lamp and the bag, squeezing air into Cormac's lungs.
65 A They work in a silent rhythm, shoulder to shoulder.
66 D PILAR: Come on, Cormac.
67 D YUSUF: Come on.
68 D PILAR: Come on.
69 D YUSUF: How long?
70 D PILAR: Two minutes.
71 D YUSUF: Keep going.
72 D PILAR: I am.
73 A ¶ Sweat drips from Yusuf's chin onto Cormac's chest.
74 A His arms tremble.
75 A Pilar glances at him.
76 D PILAR [CONT'D]: Switch with me.
77 D YUSUF: No.
78 D PILAR: You're done.
79 D YUSUF: I'm not.
80 D PILAR: Yusuf.
81 A ¶ He stops.
82 A His hands hover.
83 A She bends over Cormac and listens.
* 84 A A long beat.
85 A Then she lifts her head and her face changes.
86 D PILAR [CONT'D]: There.
* 87 A ¶ Faint on the monitor, a single beep.
* 88 A Another.
* 89 A A rhythm.
90 D YUSUF (whispering): Thank God.
91 D PILAR: Don't thank him yet. Keep that clamp in.
92 A ¶ He picks it up.
93 A His hand shakes.
94 A She steadies it with her own.
95 A Both of them stay like that, hands clasped around cold steel, while the water slaps outside.
96 D CORMAC (barely audible): Mam?
97 D YUSUF: She's coming.
98 D PILAR (softly): Hold on, Cormac.
