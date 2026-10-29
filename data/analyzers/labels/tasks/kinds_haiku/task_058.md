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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0158.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02024 | INT. HALLORAN FAMILY GREENHOUSE - SATURDAY MORNING
Detected names (may be incomplete or contain aliases): GRANDMA ROSALIND HALLORAN, TOBY
* 1 A ¶ A glass lean-to bolted to the back of a brick house.
* 2 A Tomato vines, hanging fern baskets, a rusted wheelbarrow.
* 3 A Condensation drips from every pane.
* 4 A A radio on a shelf plays low country music.
5 A ¶ GRANDMA ROSALIND HALLORAN (70s, tiny, sunhat, hands like gnarled roots) kneels at a seed tray.
6 A ¶ Beside her, TOBIAS "TOBY" HALLORAN (9, cowlick, one shoe untied) holds a trowel like a sword.
7 A ¶ Near the door, DESMOND HALLORAN (40s, Toby's father, rumpled) drinks coffee from a thermos lid.
8 A Next to him, JUNIPER HALLORAN (15, black nail polish, earbuds in) scrolls her phone.
9 D DESMOND: Toby, easy with that.
10 D TOBY: I am easy.
11 D ROSALIND: He is a delicate surgeon.
12 D JUNIPER: He is a menace.
13 A ¶ Toby jabs the trowel into the soil.
* 14 A It strikes something hard.
* 15 A CLINK.
16 D TOBY: Gran! There's something!
17 D ROSALIND: Stop digging.
18 D TOBY: It's metal!
19 D ROSALIND: Stop digging, Tobias.
20 A ¶ Her voice is suddenly flat, brittle.
21 A Everyone goes still.
* 22 A Even the radio seems to hush.
23 D DESMOND: Mum?
24 D ROSALIND: Step back. Everyone.
25 A ¶ She pushes herself up, wincing, takes Toby by the shoulders and moves him aside.
26 A She brushes dirt away with her thumb.
* 27 A A rusted tin lid appears, stamped with faded red roses.
28 D JUNIPER (pulling out one earbud): Is that a body?
29 D DESMOND: Juniper!
30 D ROSALIND: It is not a body.
31 D TOBY: Is it treasure?
32 D ROSALIND (quietly): It is something I buried the year your grandfather left.
* 33 A ¶ The room holds its breath.
34 A Desmond sets down the thermos lid.
35 D DESMOND: Mum, you don't have to--
36 D ROSALIND: I do. It's been forty years. I'm tired of tending around it.
37 A ¶ She kneels again, slower.
38 A Works her fingers under the lid.
* 39 A It resists, then gives with a shriek of old metal.
* 40 A ¶ Inside, wrapped in oilcloth, a bundle of letters tied with twine, a man's gold watch, and a child's baby shoe.
41 D TOBY: That's tiny.
42 D JUNIPER: That's Dad's.
43 A ¶ Desmond stares at the shoe.
44 A He crouches slowly, picks it up.
45 A His thumb rubs the faded stitching.
46 D DESMOND: You said you lost these.
47 D ROSALIND: I said a lot of things.
48 D DESMOND (louder): You told me he took everything!
49 D ROSALIND (louder): I told you what I could bear to tell you!
* 50 A ¶ The shout rings off the glass.
51 A Toby flinches.
52 A Juniper steps in front of him, protective, then looks mortified and steps back.
53 D DESMOND (to Rosalind): Forty years.
54 D ROSALIND (to Desmond): Forty years.
* 55 A ¶ Silence.
* 56 A Condensation drips from a pane onto a fern frond.
* 57 A Plink.
58 A ¶ Rosalind lifts the watch, wipes the face with her sleeve.
59 A Holds it to her ear.
60 D ROSALIND [CONT'D]: Still ticking.
61 D DESMOND: It can't be.
62 D ROSALIND: Your father always wound it twice a day. I think I kept doing it, in my head, after.
63 D TOBY (small voice): Can I hold it?
64 A ¶ Rosalind looks at Desmond.
65 A He nods, slow.
66 A She presses the watch into Toby's palm, folding his fingers around it.
67 D ROSALIND: Gently, my darling. It has been waiting a long time.
68 A ¶ Toby lifts it to his ear, eyes huge.
69 D TOBY: It's like a tiny heart.
70 D JUNIPER (softly): That is actually kind of sweet.
71 D DESMOND: Don't tell anyone.
72 D JUNIPER: I'll tell everyone.
73 A ¶ The corner of Desmond's mouth twitches.
74 A He sits down hard on the overturned wheelbarrow and laughs, short and wet.
75 A Rosalind lets out a breath and laughs too.
76 A Juniper joins, helpless.
77 A Toby looks from face to face, confused and thrilled.
78 D TOBY: What's funny?
79 D ROSALIND: Absolutely nothing.
80 D DESMOND: Absolutely nothing.
81 D ROSALIND: Absolutely nothing.
82 D JUNIPER: Everything.
* 83 A ¶ The radio, as if on cue, turns to a slow waltz.
84 A Rosalind sets the tin in the sun, lid open, and goes back to her seed tray.
85 D ROSALIND: Now. Who wants to plant some tomatoes?

### SCENE s02025 | INT. TAXIDERMY MUSEUM - BACK GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): CASSIUS BELL, WREN ODUYA, LAZARO PRIETO, MAI LINH TRAN, DOT, KESSLER, RUFUS ALDER
* 1 A ¶ Glass cases.
* 2 A A stuffed polar bear mid-roar.
3 A Six figures in dark clothes crouch behind a display of Arctic foxes.
4 A ¶ CASSIUS BELL (50s, mastermind, reading glasses on a chain) taps a tablet.
5 A WREN ODUYA (20s, climber, harness).
6 A LAZARO PRIETO (30s, safecracker, toolroll).
7 A MAI LINH TRAN (30s, hacker, headset).
8 A DOROTHEA "DOT" KESSLER (60s, retired guard, inside woman).
9 A RUFUS ALDER (40s, muscle, silent).
10 D CASSIUS: Camera eleven loops in ten seconds.
11 D MAI LINH: Eight. Eight, Cassius, I said eight.
12 D DOT: He walks the corridor at twelve forty. Always.
13 D LAZARO: It's twelve thirty-eight.
14 D WREN: Rope is set. I go on your mark.
15 D CASSIUS: Wait for--
16 D DOT: Footsteps.
17 A ¶ Everyone freezes.
18 A Rufus raises one huge hand, palm flat.
19 D MAI LINH: That's not him, that's the heating.
20 D DOT: It's him.
21 D LAZARO: It's the heating!
22 D WREN: Tell me which, I'm hanging out here!
23 D CASSIUS: Dot. Which?
24 D DOT (whispering): Twelve forty. It's him.
* 25 A ¶ A flashlight beam sweeps across the foxes.
26 A Rufus slowly, silently, pulls the bear's display curtain across them all.
* 27 A Darkness.
* 28 A ¶ The footsteps stop.
* 29 A A long beat.
* 30 A Then a cough, and they move on.
31 D MAI LINH (exhaling): Looping now.
32 D CASSIUS: Wren, go.

### SCENE s02026 | INT. CLOSED OBSERVATION TOWER - STAIRWELL LANDING - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RENATA VOSS, ELIAS MBEKI, DEPUTY HANNAH OAKES, SIREN, DOCTOR AMARA LINDQVIST
* 1 A ¶ Concrete.
* 2 A One bulb.
* 3 A Rain in the vents.
4 A ¶ AGENT RENATA VOSS (40s) crouches over a duffel bag.
* 5 A Zipper open.
* 6 A Cash, passports, a phone.
7 A Her breathing is slow, controlled.
* 8 A ¶ Footsteps below.
* 9 A Heavy.
* 10 A Climbing.
11 A ¶ She zips the bag.
12 A Stands.
13 A Back to the wall.
14 A ¶ A figure rounds the landing.
15 A ELIAS MBEKI (50s), coat soaked, pistol low.
16 A He stops.
17 A Sees her.
18 A Neither moves.
19 A ¶ Behind him, DEPUTY HANNAH OAKES (30s), radio on her shoulder, edges up the steps.
20 D ELIAS (low): Renata.
21 D RENATA: Elias.
22 D HANNAH: Hands where I can see them!
23 D ELIAS: Hannah, stand down.
24 A ¶ Renata's eyes flick to the bag.
25 A His follow.
26 A Both lunge at once.
27 A Elbows, knees, a snarl.
* 28 A The bag skids across the concrete.
29 A ¶ She hooks his leg.
30 A He drives her into the railing.
* 31 A It groans.
* 32 A ¶ The pistol clatters down the stairs.
33 A Hannah ducks aside as it passes her boots.
34 A ¶ He gets a forearm across her throat.
35 A She bites his wrist.
36 A He yanks free.
37 A ¶ Hannah raises her weapon.
38 A Shaky.
39 A Trying to find a clean line.
40 D HANNAH: Stop! Both of you!
41 A ¶ They don't.
* 42 A Then a SIREN builds outside.
* 43 A Red and blue strobe through the vent slats.
44 A ¶ They freeze, still tangled.
45 A Breathing hard.
* 46 A Rain drums on the roof.
47 A ¶ DOCTOR AMARA LINDQVIST (60s, civilian) appears at the top of the stairs, hands raised, trembling, a thermos in one.
48 D AMARA (breathless): Please. I only came up to fix the lamp.
* 49 A ¶ Nobody answers.
* 50 A The siren fades past.
51 A ¶ Renata lets go first.
52 A He follows.
53 A They step apart.
54 D ELIAS (tired): It's over.
55 D RENATA: It never is.
56 A ¶ She sits down on the stairs, defeated, and holds out her wrists.

### SCENE s02027 | INT. CANDLE-MAKER'S WORKSHOP - LONDON - NIGHT, 1666
Detected names (may be incomplete or contain aliases): MASTER EZEKIEL THORNE, MISTRESS AGNES THORNE, ALDOUS PEEL, MERCY FAIRWEATHER, CAPTAIN BARNABY LOCKE
* 1 A ¶ A low timber room that smells of tallow and smoke.
* 2 A Cauldrons of molten wax squat on iron tripods.
* 3 A Rows of tapers hang from the rafters like pale stalactites.
* 4 A Through the shuttered window comes a dull orange glow that is not sunrise.
5 A ¶ MASTER EZEKIEL THORNE (60s, apron stiff with wax, beard singed at the tips) stands at a vat, stirring with both hands as though his life depended on it.
6 A ¶ His wife, MISTRESS AGNES THORNE (50s, severe, with a ring of keys at her belt) drags a chest across the floor.
7 A ¶ Their apprentice, ALDOUS PEEL (16, thin, ink-stained fingers) crouches beside the window, peering through a crack.
8 A ¶ Near the hearth, MERCY FAIRWEATHER (20s, a lodger, shawl pulled tight, a bird in a wicker cage clutched to her chest) huddles in silence.
9 A ¶ And in the doorway, framed against the night, stands CAPTAIN BARNABY LOCKE (40s, soot-blackened coat, a constable's staff) breathing like a bellows.
10 D LOCKE: The wind has turned! It comes down Pudding Lane toward you! Out, all of you, now!
11 D EZEKIEL (without turning): Forty years I have poured wax in this room.
12 D AGNES: Ezekiel.
13 D EZEKIEL (to himself): Forty years, and never a fire.
14 D AGNES: There is a fire now, you stubborn goat.
15 D ALDOUS: Master, the glow has reached the baker's roof.
16 D EZEKIEL: Hush, boy.
17 D ALDOUS: It is not hushing, sir. It is coming.
* 18 A ¶ Mercy's bird chirps, a small frantic sound.
19 A She presses her cheek against the cage.
20 D MERCY (whispering): Hush, hush, hush.
21 D LOCKE: There is a boat at Queenhithe. I can take four.
22 D AGNES: We are five.
23 D LOCKE: Then someone must find another way.
* 24 A ¶ A silence.
25 A Agnes looks at her husband, at the wax, at the girl with the bird.
26 A Ezekiel finally sets down the paddle.
27 D EZEKIEL (to the room): Everyone take what they can carry. Leave the rest.
28 D AGNES (to Ezekiel): You will carry me, then.
29 D EZEKIEL: I will carry the chest.
30 D AGNES: We are leaving the chest!
31 D EZEKIEL (softly): It holds the deed.
32 A ¶ Aldous grabs a bundle of tapers.
33 A Mercy rises with her cage.
34 A Locke steps aside as they hurry past, one by one, into the street.
35 A ¶ Ezekiel is last.
36 A He stops at the threshold and looks back at the vats, the rafters, the pale rows of unlit candles.
37 D EZEKIEL [CONT'D] (murmuring): Burn bright, then. Burn bright.
38 A ¶ He shoulders the chest and goes out.
* 39 A The doorway fills with orange light.

### SCENE s02028 | INT. FLOWER MARKET COLD ROOM - PREDAWN
Detected names (may be incomplete or contain aliases): NOOR BAKHSH, TIM, REYES, GWENDOLYN FOSS, OSKAR LINDEN
* 1 A ¶ A walk-in refrigerator the size of a garage.
* 2 A Buckets of tulips and ranunculus line the metal shelves.
* 3 A The breath of four people hangs in the air.
* 4 A At the back, a steel door with a keypad.
5 A ¶ NOOR BAKHSH (30s, delivery-driver uniform, clipboard) holds a flashlight.
6 A TIMOTEO "TIM" REYES (40s, in a florist's apron that doesn't fit) props a bucket against the wall.
7 A GWENDOLYN FOSS (60s, elegant, white gloves) studies the keypad.
8 A Behind them all, OSKAR LINDEN (20s, sweating despite the cold) carries a long cardboard flower box.
9 D GWENDOLYN: Quiet, please. Everyone listen.
10 D NOOR: We're listening.
11 D GWENDOLYN: The vault door is on a six-digit code. We have three attempts before it locks for the hour.
12 D TIM: Do we know the code?
13 D GWENDOLYN: We know a code.
14 D OSKAR: Is that the same as knowing it?
15 D GWENDOLYN: Only if I am right.
16 A ¶ Tim lowers his voice.
17 D TIM (to Noor): How long until the shift change?
18 D NOOR: Eleven minutes.
19 D TIM: Eleven minutes. In a refrigerator. With roses.
20 D NOOR: They're ranunculus.
21 D TIM (to himself): Of course they are.
22 A ¶ Gwendolyn removes one glove, finger by finger.
23 A Enters six digits.
* 24 A The keypad blinks red.
25 D OSKAR: That's one.
26 D GWENDOLYN: I can count, young man.
27 D NOOR: What did you try?
28 D GWENDOLYN: The florist's birthday.
29 D TIM: That's me. I don't have a birthday.
30 D GWENDOLYN: Nobody believes that.
31 A ¶ She tries again.
* 32 A Red.
33 D OSKAR (whispering): Two.
34 D NOOR: Everyone stay calm. Gwendolyn, one more, and then we walk out as if nothing happened.
35 D GWENDOLYN: We are not walking out.
36 A ¶ She turns, takes the flower box from Oskar, and opens the lid.
* 37 A Inside, a small brass cylinder on a stand.
38 D TIM: Is that what I think it is?
39 D GWENDOLYN: It is a very polite drill.
40 D OSKAR: That was always the plan?
41 D GWENDOLYN: The code was a courtesy.
42 A ¶ She sets the cylinder against the lock.
* 43 A A low whir fills the cold room.
* 44 A Frost trembles on the petals.
45 D NOOR: Nine minutes.
46 D GWENDOLYN: Plenty.

### SCENE s02029 | INT. DRY-DOCKED FERRY - CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): JUNO KASPAROV, MATS, BIANCHI, PRISCILLA OKAFOR-WELLS, HENRIK SVEN
* 1 A ¶ Rusted ramps.
* 2 A Oil stink.
3 A Four shapes around a stolen hatch.
4 A ¶ JUNO KASPAROV (30s, lead).
5 A MATTEO "MATS" BIANCHI (40s, driver).
6 A PRISCILLA OKAFOR-WELLS (20s, lockpick).
7 A HENRIK SVEN (50s, lookout).
8 D JUNO: Mats, headlight cover.
9 D MATS: Done, Juno.
10 D PRISCILLA: Hatch is open. Count of three?
11 D HENRIK: Guard's early. Hear that?
* 12 A ¶ Boots clang above.
13 A Everyone drops.
14 D JUNO: Priscilla, in. Now.
15 D PRISCILLA: I'm in, I'm in!
16 D MATS: Henrik, you said clear!
17 D HENRIK: I said clear ten minutes ago!
* 18 A ¶ The boots stop.
* 19 A A radio crackles.
* 20 A Then, laughter, drifting off.
* 21 A Silence.
22 D JUNO: Okay. Nobody breathe. Nobody speak.
23 D MATS (whispering): Juno?
24 D JUNO: What?
25 D MATS: You just did.

### SCENE s02030 | INT. CHEESE AFFINAGE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): ARNAUD DELACROIX-MBALLA, SABINE QUIRK, YOSEF ABRAMOWITZ, LEILANI KEAWE, TOMAS ESPINOZA-REID
* 1 A ¶ Damp limestone.
* 2 A Shelves of waxed wheels stretch back into the dark.
* 3 A A single lantern on a hook.
* 4 A Cool, quiet, almost holy.
* 5 A ¶ A long oak table at the center.
6 A Five people sit around it with tasting knives and small plates, like it's a dinner party.
7 A ¶ At the head, ARNAUD DELACROIX-MBALLA (60s, owner, white apron).
8 A He cuts a wedge, offers it round.
9 A Steady hands.
10 A ¶ To his right, SABINE QUIRK (30s, buyer, scarf).
11 A She takes the wedge.
12 A Doesn't eat it.
13 A ¶ Across from her, YOSEF ABRAMOWITZ (50s, inspector).
14 A He chews slowly, eyes on the ceiling.
15 A ¶ Beside him, LEILANI KEAWE (20s, sommelier).
16 A She pours wine.
17 A Pours a little too much into one glass.
18 A ¶ At the foot, TOMAS ESPINOZA-REID (40s, silent partner), jacket on, buttoned.
19 D ARNAUD: Eighteen months. Raw milk.
20 D SABINE: It's lovely.
21 D ARNAUD: You haven't tasted it.
22 A ¶ She lifts it.
23 A Eats.
24 A Smiles with her mouth only.
25 D YOSEF: Earthy.
26 D LEILANI: A little mushroom. Hazelnut at the finish.
27 D TOMAS: It's fine.
28 A ¶ Arnaud nods.
29 A Cuts another wedge.
30 A Sets it before Tomas.
31 A Tomas does not touch it.
32 D ARNAUD: You're not hungry?
33 D TOMAS: I ate.
34 D ARNAUD: Before you came?
35 D TOMAS: Before.
36 A ¶ Sabine sets down her knife.
37 A Gently.
* 38 A Parallel to the plate.
39 A ¶ Leilani refills Yosef's glass.
40 A His hand covers it too late.
41 A She keeps pouring anyway.
42 D YOSEF: That's plenty.
43 D LEILANI: Is it?
44 A ¶ She holds his gaze.
45 A He lowers his hand.
46 D ARNAUD (to the room): Strange thing, an affinage cave. Everything in here changes. Slowly. If you do nothing, it turns.
47 D SABINE: Turns into what?
48 D ARNAUD: Whatever it was always going to be.
* 49 A ¶ Silence.
* 50 A Water drips somewhere in the dark.
51 A Tomas shifts.
52 A His jacket pulls open an inch.
* 53 A A holster, dull black.
54 A He buttons it again.
55 A ¶ Nobody looks at it.
* 56 A Everybody saw it.
57 A ¶ Arnaud sets down his own knife.
58 A Folds his hands.
59 A Smiles at the table like a man who has just finished a long meal.
60 D ARNAUD [CONT'D]: Now. Shall we discuss the shipment?

### SCENE s02031 | INT. SALT MINE ELEVATOR SHAFT - DEEP LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): CALLISTA REYNOLDS-OKAFOR, SPARROW, PELLEGRINI, DISPATCH
* 1 A ¶ A cage of dented iron wedged halfway between two galleries.
* 2 A Above, a ceiling of glittering rock salt, pink and white in the glow of a single miner's lamp.
* 3 A The air is dry and tastes of old tears.
* 4 A Somewhere far below, a pump shudders.
5 A ¶ CALLISTA REYNOLDS-OKAFOR (30s, hair cropped, climbing gloves, a dusty duffel slung across her chest) crouches on the floor of the cage, a small drill whining in her hands.
6 A ¶ On the opposite side, JONAH "SPARROW" PELLEGRINI (60s, wiry, a lifetime of tunnels written into his knees) sits with his back to the bars, a radio resting on his thigh.
* 7 A ¶ The radio crackles.
8 D DISPATCH [V.O.] (filtered, distant): Cage Four, Cage Four, this is surface. Do you copy?
9 A ¶ Sparrow lifts the radio and looks at Callista.
10 A She shakes her head, once.
11 D SPARROW (into radio): Surface, Cage Four. We copy. Slight delay on the cable.
12 D DISPATCH [V.O.]: Roger. We show you stopped at minus three hundred. Any injuries?
13 D SPARROW: None. Cable guide's jammed. Giving it ten.
14 D DISPATCH [V.O.]: Ten minutes, copy. Safety crew standing by.
15 A ¶ Sparrow lowers the radio.
* 16 A The drill falls silent.
17 A Callista rests her palms on the floor, listening to the pump.
18 D CALLISTA: Ten minutes.
19 D SPARROW: Twelve, if I stall right.
20 D CALLISTA: We need twenty.
21 D SPARROW: Then you shouldn't have asked for the cage.
22 D CALLISTA: I asked for the cage because you said it stopped here every night.
23 D SPARROW: It does. For nine minutes. Then the night foreman rides the other one.
24 D CALLISTA: You didn't tell me about the foreman.
25 D SPARROW: You didn't ask.
26 A ¶ She stands, shoulders the duffel.
27 A Moves to the wall of the shaft, where a seam of white salt runs like a vein of frost.
28 A She sets the drill against it.
* 29 A The whine resumes.
* 30 A ¶ A second voice, a woman's, cuts through the static.
31 D DISPATCH [V.O.] (from far above, echoing down the shaft): Cage Four! Sparrow! What are you doing down there?
32 A ¶ Callista and Sparrow both go still.
* 33 A The drill spins down.
* 34 A Salt crystals tick onto the floor.
35 D SPARROW (calling up): Cable jam, Yvonne! Nothing to see!
36 D DISPATCH [V.O.]: I'm coming down the ladder. Don't move!
37 A ¶ Sparrow looks at Callista.
38 A She looks at the duffel, then up the shaft, where a lamp has begun to swing.
39 D CALLISTA (quiet): Don't you dare call me a friend of yours.
40 D SPARROW: Wouldn't dream of it.
41 A ¶ He sets the radio down, stands, and with a grunt drags the duffel to his side of the cage.
42 A He sits on it.
43 A ¶ Callista understands.
44 A She steps out of the lamplight, into the pink shadow of the wall.
* 45 A ¶ The lamp above steadies.
46 A A boot appears on the rungs.

### SCENE s02032 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): OLIVER FENWICK, ESTHER FENWICK, TIMOTHY, KNOCK, MARGUERITE HOLLOWAY
* 1 A ¶ A round room papered in sea charts.
* 2 A A coal stove, a kettle, a narrow bed.
* 3 A The window shakes with wind.
* 4 A Every few seconds the lighthouse beam sweeps across the walls, white, then gone.
5 A ¶ OLIVER FENWICK (50s, keeper, cardigan, pipe) pours tea.
6 A ESTHER FENWICK (50s, his wife, knitting) sits by the stove.
7 A Between them, their grown son TIMOTHY (20s, home from the mainland, restless) paces to the window and back.
8 D OLIVER: Tea, Tim?
9 D TIMOTHY: No, Dad.
10 D ESTHER: He's nervous.
11 D TIMOTHY: I'm not nervous.
12 D ESTHER: You're wearing a groove in the floor.
13 D OLIVER: Sit.
14 D TIMOTHY: There's someone on the rocks.
15 D OLIVER: There's no one on the rocks.
16 D ESTHER: There's no one on the rocks.
17 D TIMOTHY: I saw a light.
18 D OLIVER: Our light.
19 D TIMOTHY: No. Lower.
* 20 A ¶ The beam sweeps.
* 21 A Passes.
* 22 A Then, from the dark below, a KNOCK.
* 23 A Three slow raps on the door.
24 A ¶ Esther's needles stop.
25 A Oliver's pipe stops halfway to his mouth.
26 D ESTHER: Who would be out in this?
27 A ¶ Timothy opens the door.
* 28 A Wind whips in.
29 A On the step stands MARGUERITE HOLLOWAY (30s, drenched oilskin, hair plastered, lantern in hand, eyes calm).
30 D MARGUERITE: Forgive the hour. My boat has run aground.
31 D OLIVER: Come in, come in! Esther, a towel!
32 D ESTHER: There's no boat on that shoal, Oliver. There hasn't been one since--
33 D OLIVER: Esther.
34 A ¶ Marguerite steps inside, drips onto the mat, offers a small smile.
35 D MARGUERITE: A cup of tea would be kind.
36 D TIMOTHY: Where did you moor?
37 D MARGUERITE: Where the water let me.
38 D ESTHER: That's not an answer.
39 D OLIVER: She's half frozen!
40 D TIMOTHY: Dad--
41 D OLIVER: Tim!
42 D ESTHER: Child, you are shaking.
43 D MARGUERITE: Am I?
44 A ¶ She looks at her hand, holding the lantern.
45 A Perfectly steady.
* 46 A The flame inside does not flicker, though the wind is howling through the open door.
* 47 A ¶ The beam sweeps across the room again.
48 A The three Fenwicks glance at one another.
49 A Oliver closes the door.
50 A Esther pours a fourth cup, and they all pretend, with great courtesy, that nothing at all is wrong.

### SCENE s02033 | INT. CORNER LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): LENKA PAVLOVIC, MOTHER
* 1 A ¶ Fluorescent hum.
* 2 A A row of dryers turns slow, tumbling a rainbow of someone else's socks.
* 3 A Rain streaks the front window.
* 4 A At the back, a payphone with a cracked receiver.
5 A ¶ LENKA PAVLOVIC (8, braids, pajama top under a parka) stands on a plastic chair, both hands wrapped round the receiver, a bag of laundry at her feet.
* 6 A ¶ A sudden CRASH from the street.
* 7 A A truck backfiring.
8 A Lenka shrieks and drops the phone.
* 9 A Socks spill from the bag.
10 A She freezes, wide-eyed, then scrambles down and snatches the swinging receiver.
* 11 A ¶ A tiny voice crackles out of it.
12 D MOTHER [V.O.] (tinny, far away): Lenka? Lenka, are you there?
13 D LENKA: Mama, there was a monster!
14 D MOTHER [V.O.]: What was that noise?
15 D MOTHER [V.O.]: Are you hurt? Say something!
16 D LENKA: It was a truck, I think! I wasn't scared, I promise!
17 D MOTHER [V.O.]: Stay put. I'm on the bus. Ten minutes.
18 D LENKA: I'll stay.
19 A ¶ She hangs up gently.
20 A Crouches.
21 A Starts to gather the socks, tucking each one into the bag as though it is a small lost animal.

### SCENE s02034 | INT. BOWLING ALLEY - LANE 12 - NIGHT
Detected names (may be incomplete or contain aliases): MARCEL, DUBOIS, GERT, NAKAMURA-HOLT, DELPHINE ARCHAMBEAU
* 1 A ¶ Neon pins.
* 2 A Disco ball dull with grease.
* 3 A A league night.
* 4 A Leather shoes squeak on wax.
* 5 A ¶ The tenth frame.
* 6 A Final game of the championship.
* 7 A Lane 12 holds three people and a hush.
8 A ¶ MARCEL "THE HAMMER" DUBOIS (50s, belly, wristband, ball already in hand) steps to the line.
9 A His rival, GERTRUDE "GERT" NAKAMURA-HOLT (60s, sleeveless, forearms like cables) leans on the ball return, arms crossed, scowling.
10 A Their referee, DELPHINE ARCHAMBEAU (30s, clipboard, whistle around her neck) stands between them, tally sheet trembling in her hands.
11 D DELPHINE: Marcel needs a spare for the win.
12 D GERT: He needs a miracle.
13 D MARCEL: Silence, please.
14 A ¶ He raises the ball to his chin.
15 A Closes his eyes.
16 A Steps.
17 A Swings.
18 A Releases.
* 19 A The ball rolls, wobbles, drifts, and curves wide of the head pin.
* 20 A Seven pins fall.
* 21 A Three stand: left, right, center.
22 D DELPHINE: Seven.
23 D GERT (smirking): Called it.
24 A ¶ Marcel stands rigid.
* 25 A The ball returns.
26 A He catches it and, without a word, wheels around, lifts it high, and hurls it.
* 27 A It crashes into the ball return, bounces, spins across the lane, skids into the gutter, and strikes a standing pin from the side.
* 28 A All three tumble.
* 29 A Pinsetter whirs.
30 A Gert throws up both arms, Delphine drops her clipboard, Marcel looks at his empty hands as if he is not sure they are his.
* 31 A ¶ A long silence.
32 A Then Delphine laughs.
33 A Gert laughs.
34 A Marcel, shaking, laughs loudest of all.
35 D DELPHINE: That is not legal. That is absolutely not legal.
36 D GERT: It counts.
37 D MARCEL: Does it?
38 D DELPHINE (exhaling): It counts.
39 A ¶ Gert extends a hand.
40 A Marcel takes it.
41 A They shake, too long, too hard, then both let go and grab their lanes' ball return, smiling stupidly.
42 D GERT: Next year, I destroy you.
43 D MARCEL: I look forward to it.

### SCENE s02035 | INT. OCEAN-FLOOR RESEARCH HABITAT - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA OYELARAN-VOSS, ENGINEER ILKA MARCHETTI, KOFI LUNDGREN
* 1 A ¶ A cylinder of brushed steel and humming pipes.
* 2 A A porthole shows only blackness and the occasional drifting flake of snow.
* 3 A Three tin cups steam on a narrow table.
4 A ¶ DR. SERAPHINA OYELARAN-VOSS (50s, marine biologist, silver braid, a mug warming her palms) sits motionless, eyes on the dark glass.
5 A Across from her, ENGINEER ILKA MARCHETTI (40s, grease under her nails, a stubborn jaw) stirs her coffee without drinking it.
6 A At the end of the table, DR. KOFI LUNDGREN (30s, hydrologist) taps a stylus against a dead tablet.
* 7 A ¶ The hull groans.
* 8 A A distant, long, patient sound, like a whale in a tunnel.
9 A No one flinches.
* 10 A They have heard it for weeks.
11 D SERAPHINA: Fourteen days of nothing.
12 D KOFI: Fourteen days of the same nothing.
13 D ILKA: The pumps are fine. The scrubbers are fine. The only thing that isn't fine is the schedule.
14 D SERAPHINA: She wants us topside by Thursday.
15 D ILKA: She wants a lot of things.
16 D KOFI: Who is "she"?
17 D ILKA: Command. Surface. The woman with the clipboard.
18 D SERAPHINA: She means well.
19 D ILKA: She means to bring us up before we have finished, and she knows it.
20 A ¶ Kofi sets down his stylus.
21 A Looks at the porthole, then at the two women, then at the cups.
22 D KOFI: Did she say why Thursday?
23 D SERAPHINA: The storm window closes.
24 D ILKA: Storm window. Funding window. Pick one.
* 25 A ¶ The hull groans again, lower.
26 A Seraphina rests her hand on the table and feels it hum through the steel.
27 D SERAPHINA: Then we use the days we have.
28 D ILKA: She will not like that.
29 D SERAPHINA: She does not have to be here.
30 A ¶ Ilka almost smiles.
31 A At last she drinks.

### SCENE s02036 | EXT. FROZEN LAKE - WHITEOUT - DAY
Detected names (may be incomplete or contain aliases): ASHER VANTERPOOL, RANGER
* 1 A ¶ Wind.
* 2 A Nothing but wind and white.
3 A A lone figure kneels on a sheet of gray ice around a hole cut with a hand auger.
4 A ¶ ASHER VANTERPOOL (30s, parka crusted with frost, one glove missing) hauls a line.
5 A He wedges his heels against the ice.
* 6 A A walkie-talkie sits by his knee, crackling.
7 D RANGER [V.O.] (broken, windy): ...lake team...do you...ice thinning...south shore...
8 A ¶ Asher grabs the walkie.
9 A Does not answer.
10 A Lets it fall back onto the ice.
11 D RANGER [V.O., CONT'D]: ...move...north...now...
* 12 A ¶ The line goes taut.
* 13 A Something enormous tugs.
14 A He hauls.
* 15 A Ice groans.
* 16 A A hairline crack races outward from the hole.
17 A ¶ He keeps pulling.
18 D ASHER (under his breath): Come on.
19 D RANGER [V.O.]: ...Asher...do you copy...
20 D ASHER: Not yet.
* 21 A ¶ The crack widens.
22 A His boots slide.
23 A He braces.
24 A Pulls.
* 25 A ¶ The fish breaks the surface: a gray, glistening length of lake trout, fat as a man's thigh.
* 26 A It flops on the ice.
27 A ¶ He stares at it.
28 A Takes his bare hand and presses it to the cold flank, once, gently.
29 A Then he cuts the line, lifts the trout against his chest like something fragile, and stands.
* 30 A ¶ The ice groans again, deeper.
31 A He picks up the walkie.
32 D ASHER [CONT'D] (into radio): Heading north.
33 A ¶ He walks.

### SCENE s02037 | INT. KINGSLEY FAMILY MINIVAN - ROAD-TRIP DETOUR - DAY
Detected names (may be incomplete or contain aliases): GLORIA KINGSLEY, ARTHUR KINGSLEY, PRU
* 1 A ¶ A battered silver minivan crawls along a gravel road through sunflower fields.
* 2 A Cracker crumbs on the seats.
* 3 A A cooler wedged between the front seats.
* 4 A Windows down.
5 A ¶ At the wheel, GLORIA KINGSLEY (40s, sunglasses on her head, squinting at a paper map).
6 A Beside her, her husband ARTHUR KINGSLEY (40s, sunburnt nose, a sandwich in one hand).
7 A In the back, their daughter PRUDENCE "PRU" KINGSLEY (11, library book, headphones around her neck, one foot on the seat in front).
8 D GLORIA: The sign said Millbrook was four miles.
9 D ARTHUR: That was six miles ago.
10 D PRU: It said four, then it said nine, then it said Millbrook closed.
11 D GLORIA: It did not say closed.
12 D PRU: It said "CLOSED FOR SEASON." I read it.
13 D ARTHUR: That's a different sign. That was the minigolf.
14 D PRU: There's minigolf in the middle of nowhere?
15 D ARTHUR: There's always minigolf.
16 A ¶ She puts down the map and shades her eyes.
* 17 A A cloud of dust rolls up behind them.
* 18 A The minivan coughs.
* 19 A The dashboard light flickers.
20 D GLORIA (to herself): Don't you dare.
21 D ARTHUR: What is that noise?
22 D GLORIA: Nothing is making a noise.
23 D PRU: It's the van.
24 D GLORIA: It's not the van.
* 25 A ¶ The engine sputters again and dies.
* 26 A The van coasts a few yards, rolls to a stop beside a rusted mailbox leaning in the weeds.
* 27 A ¶ Silence.
* 28 A Cicadas.
* 29 A A sunflower nods in the wind.
30 D ARTHUR (quietly): So.
31 D GLORIA: Don't say it.
32 D ARTHUR: I wasn't going to say it.
33 D PRU: You were.
34 D GLORIA: He was.
35 D ARTHUR: I was going to say "Great spot for a picnic."
36 A ¶ Pru snorts.
37 A Gloria turns the key.
* 38 A Click.
* 39 A Click.
* 40 A Nothing.
41 D GLORIA: We have water. We have the cooler. We have a map.
42 D PRU: We have a map that said Millbrook was four miles.
43 D GLORIA: Pru.
44 D PRU: I'm just saying.
45 A ¶ Arthur opens his door and steps out, stretching.
46 A He kicks a tire with the air of a man who knows it will do nothing.
47 D ARTHUR: I'm going to walk to that farmhouse.
48 D GLORIA: Take your hat.
49 D ARTHUR: I'm not wearing a hat.
50 D GLORIA: Take mine.
51 A ¶ He sighs, ducks back in, takes her straw hat from the dashboard, and plops it on his head.
52 A Pru laughs out loud.
53 D PRU: You look like a scarecrow.
54 D ARTHUR: That's the idea. If anyone sees me, they'll be afraid and give me a lift.
55 D PRU: Or they'll shoot you.
56 D GLORIA: Pru!
57 D ARTHUR: She has a point.
58 A ¶ He starts down the gravel road.
59 A Gloria climbs out, shades her eyes, and watches him go.
60 A Pru slides across the seat, props her chin on the window.
61 D PRU: Mom?
62 D GLORIA: Yes?
63 D PRU: This is the best trip we've ever had.
64 D GLORIA: We're stranded in a cornfield.
65 D PRU: Sunflowers.
66 D GLORIA (smiling): Sunflowers.
* 67 A ¶ A low growl rolls over the horizon.
* 68 A Thunder.
69 A They both look up.
* 70 A A line of dark clouds is climbing the sky, fast.
71 D GLORIA [CONT'D] (muttering): Of course.
72 D PRU: Should we get Dad?
73 D GLORIA: He'll find us.
74 D PRU: Mom, I'm serious.
75 D GLORIA (calling): Arthur!
76 A ¶ Far down the road, a small straw-hatted figure turns.
77 A Gloria waves her arms.
78 A He waves back, cheerful, and keeps walking.
79 D PRU: He doesn't get it.
80 D GLORIA: He never does.
* 81 A ¶ Wind picks up.
* 82 A Sunflowers bow in a long wave across the field.
* 83 A The first fat raindrop splats on the windshield.
84 A Gloria and Pru lock eyes.
85 D PRU [CONT'D]: Run?
86 D GLORIA: Run.
87 A ¶ They bolt from the minivan, laughing, shrieking, and chase after Arthur through the dust as the sky opens.
88 D ARTHUR (turning, seeing them): Oh no.
89 A ¶ He starts to run too.
90 A The three of them pelt down the road in the downpour, hat flying off, a tiny, soaked, shrieking family under the enormous sky.

### SCENE s02038 | INT. GENERATION SHIP "WILLOW" - HYDROPONICS BAY - SHIP NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE WRAY, TAMSIN ODEH-VARGA
* 1 A ¶ Terraced troughs of lettuce under violet grow-lamps.
* 2 A Condensation.
* 3 A A gentle hum.
* 4 A Through a long viewport, the stars do not move.
5 A ¶ AUGUSTINE WRAY (70s, caretaker, thin, patient) works along a trough with a pair of tweezers, removing a yellowed leaf.
6 A Behind him, a young woman, TAMSIN ODEH-VARGA (20s, apprentice, coveralls tied around her waist) tends a seedling tray.
7 D AUGUSTINE: Pinch it where it meets the stem. Not above.
8 D TAMSIN: I know.
9 D AUGUSTINE: Then why are you above?
10 D TAMSIN: I'm not above.
11 A ¶ He glances at her tray.
12 A She is above.
13 A She moves her fingers down an inch.
14 A He nods and returns to his row.
15 D TAMSIN [CONT'D] (muttering): Every day the same leaf.
16 D AUGUSTINE: Every day a different leaf.
17 D TAMSIN: It looks the same.
18 D AUGUSTINE: That's because you aren't looking.
19 A ¶ She sighs.
20 A Wipes her hands on her coveralls.
21 A Looks at the stars.
22 D TAMSIN: Two hundred and six years.
23 D AUGUSTINE: And fourteen days.
24 D TAMSIN: My great-grandmother's great-grandmother boarded this ship.
25 D AUGUSTINE: And never saw the end of it.
26 D TAMSIN: Neither will I.
27 D AUGUSTINE: No.
28 D TAMSIN: Neither will you.
29 D AUGUSTINE: Not at my age, no.
30 A ¶ They work in silence.
* 31 A A drip falls from the irrigation line.
* 32 A Plink.
33 A Tamsin counts the drips on her fingers.
34 D TAMSIN (to the room): Does anyone else feel strange down here?
35 D AUGUSTINE: Anyone else would be a crowd.
36 D TAMSIN: I mean the whole ship.
37 D AUGUSTINE: Only the ones who are paying attention.
38 A ¶ She laughs, short.
39 A He allows himself a small smile and prunes another leaf.
40 D TAMSIN: Augustine?
41 D AUGUSTINE: Yes.
42 D TAMSIN: What do you do when the lettuce is done?
43 D AUGUSTINE: We plant more lettuce.
44 D TAMSIN: No. When it is all done. When the ship arrives.
45 D AUGUSTINE: Ah.
46 A ¶ He straightens, one hand on the small of his back.
47 A He looks at her for a while.
48 D AUGUSTINE [CONT'D]: Then somebody takes a seed and puts it in real ground.
49 D TAMSIN: And the lettuce will think it's dying.
50 D AUGUSTINE: It will think it's being born.
51 A ¶ Tamsin picks up the tray.
52 A Carries it to the next trough.
* 53 A The violet light moves over her face as she passes under each lamp.
54 D TAMSIN (softly): I hope I'm in the right row, then.
55 D AUGUSTINE: You are.
56 D TAMSIN: You always say that.
57 D AUGUSTINE: You always doubt it.
58 D TAMSIN: It's my job to doubt.
59 D AUGUSTINE: It is mine to be right.
60 A ¶ She sets the seedlings in their slots, firm, careful, pressing each stem upright with a fingertip.
61 A Augustine watches.
62 A When she finishes, he picks up the watering can and hands it to her.
63 D AUGUSTINE [CONT'D]: Go on. Slowly.
64 A ¶ She pours.
* 65 A The water hisses on dark soil.
* 66 A A faint green smell rises.
67 D TAMSIN: It's quiet tonight.
68 D AUGUSTINE: It is always quiet.
69 D TAMSIN: Tonight it is different.
70 D AUGUSTINE: Then listen.
71 A ¶ They stand still, side by side, hands at their sides, and for a long moment there is only the sound of something, very small, growing.

### SCENE s02039 | INT. FUNICULAR RAILWAY - MOUNTAIN CAR - NIGHT
Detected names (may be incomplete or contain aliases): ROSAMUND ACHTERBERG, NICOLAI VELASQUEZ-BRANDT
* 1 A ¶ A wooden cabin on rails, climbing a slope so steep the benches are stepped like stairs.
* 2 A Lantern light.
* 3 A Black pines slide by the windows.
4 A ¶ ROSAMUND ACHTERBERG (30s, conductor's cap, a brass ticket punch) stands at the front.
5 A NICOLAI VELASQUEZ-BRANDT (40s, a long coat, a leather case chained to his wrist) sits at the back.
6 D ROSAMUND: Tickets, sir.
7 D NICOLAI: I've paid.
8 D ROSAMUND: Then show me.
9 A ¶ He holds up a stub.
10 A She punches it.
11 A Their eyes meet.
12 A She looks at the case.
13 D ROSAMUND [CONT'D]: That's a lot to carry up a mountain.
14 D NICOLAI: It's a lot to carry anywhere.
* 15 A ¶ The car lurches.
16 A Both grab rails.
* 17 A The lantern swings, throwing shadows.
* 18 A A second beat, then the car steadies.
19 D ROSAMUND: Cable's tired. It does that.
20 D NICOLAI: Does it?
21 D ROSAMUND: Every night.
22 A ¶ He releases the rail.
23 A She does not.
24 A She edges closer.
25 D ROSAMUND [CONT'D]: I've been told to watch for a man with a case.
26 D NICOLAI: Told by whom?
27 D ROSAMUND: By a man who says he wants it back.
28 A ¶ They both lunge.
* 29 A The punch clatters across the floor.
* 30 A The case skids.
31 A He kicks it under a bench.
32 A She seizes his sleeve.
33 A He twists free.
34 A The car pitches and both go sprawling.
35 A ¶ Rosamund scrambles to the brake lever.
36 A Nicolai grabs her ankle.
37 A She kicks him off, hauls the lever.
* 38 A The car shudders, groans, and stops dead.
* 39 A ¶ Silence.
* 40 A Pine needles tick against the glass.
41 D NICOLAI (panting): That was clever.
42 D ROSAMUND (panting): I know.
43 D NICOLAI: Now what?
44 D ROSAMUND: Now we wait for the man who wants it.
45 D NICOLAI: You'd rather I hand it over to him?
46 D ROSAMUND: I'd rather live.
* 47 A ¶ A pause.
48 A He slides the case out from under the bench.
49 A Unlocks the chain.
50 A Holds it out.
51 D NICOLAI: Then you keep it.
52 A ¶ She doesn't take it.
* 53 A A light bobs in the pines below.
* 54 A Voices.
55 D ROSAMUND: They're early.
56 D NICOLAI: They were always early.
57 A ¶ She snatches the case, yanks open the rear door, and shoves him through it into the dark.
58 A He drops two meters to the slope and rolls.
59 A She follows, case in her arms, and they run side by side up the mountain through the trees.

### SCENE s02040 | INT. WINE-SOAKED FARMHOUSE KITCHEN - 1944 - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT EUGENE PAYSON, GI, MADAME ODILE FAUCHEUX
* 1 A ¶ A cold stove.
* 2 A A table with two chairs.
* 3 A A candle in a saucer.
* 4 A Far off, the rolling thud of a front that is slowly moving away.
5 A ¶ SERGEANT EUGENE PAYSON (30s, GI, dirt on his cheek, his helmet on the table) sits across from MADAME ODILE FAUCHEUX (60s, widow, black shawl, a ladle clutched in one hand like a scepter).
6 D PAYSON: You've got a nice place, ma'am.
7 D ODILE: It is not nice. It is standing.
8 D PAYSON: Same thing, these days.
9 D ODILE: You are hungry?
10 D PAYSON: Is it that obvious?
11 D ODILE: Your stomach has been speaking to me since you entered.
12 D PAYSON: I'm sorry. I'll tell it to hush.
13 D ODILE: It does not hush. I have a husband of the same nature. He does not hush either.
14 D PAYSON: Where is he?
15 D ODILE: In the orchard.
16 D PAYSON: Working?
17 D ODILE: Buried.
18 D PAYSON: I'm sorry.
19 D ODILE: Do not be. He was a very loud man, and now I have the quiet I always wanted.
20 D PAYSON (to himself): Lord.
21 D ODILE: You pray?
22 D PAYSON: Not in a long while.
23 D ODILE (to the room): Then someone should.
24 A ¶ She sets down the ladle.
25 A Ladles stew into a chipped bowl anyway.
26 A Sets it before him.
27 A He stares at it.
28 D PAYSON: Ma'am, I can't. You've got nothing.
29 D ODILE: I have a pot of something and a young man who has not eaten. This is not nothing.
30 D PAYSON: Ma'am--
31 D ODILE: Eat.
32 A ¶ He picks up the spoon.
33 A The first bite closes his eyes.
* 34 A The thud outside drifts farther away.
35 D PAYSON (softly): That's the best thing I've had in a year.
36 D ODILE: It is turnips.
37 D PAYSON: It's the best turnips I've had in a year.

### SCENE s02041 | INT. REPTILE HOUSE AT THE CITY ZOO - AFTER HOURS
Detected names (may be incomplete or contain aliases): BARNABY OKONKWO-FITCH, PENELOPE ARAKAWA
* 1 A ¶ Warm, humid air.
* 2 A Glass terrariums glowing green and amber.
* 3 A A heat lamp ticks.
* 4 A A sign reads: "PLEASE DO NOT TAP THE GLASS."
5 A ¶ BARNABY OKONKWO-FITCH (40s, zookeeper, khaki shirt, a bucket of dead mice) whistles tunelessly while he refills water dishes.
6 A His new assistant, PENELOPE ARAKAWA (20s, ponytail, brand-new boots) stands beside him, clutching a clipboard like a shield.
7 D BARNABY: Don't be nervous. They can smell it.
8 D PENELOPE: I'm not nervous.
9 D BARNABY: Your hand is white.
10 D PENELOPE: It's the clipboard. It's heavy.
11 D BARNABY: It's cardboard.
12 A ¶ She lets go.
* 13 A The clipboard slaps to the floor.
14 A She picks it up.
15 A He pretends not to notice.
16 D BARNABY [CONT'D]: Now. This is Gladys.
17 A ¶ He taps a glass.
18 A Inside, a python the thickness of a fire hose lies coiled around a branch, perfectly still.
19 D PENELOPE: She's lovely.
20 D BARNABY: She's a bit shy.
21 D PENELOPE: I can see that.
22 D BARNABY: She likes it quiet. Soft voices. No sudden moves.
23 D PENELOPE: Understood.
24 D BARNABY: And she hates hats.
25 D PENELOPE: I'm not wearing a hat.
26 D BARNABY: Good. Keep it that way.
27 A ¶ He goes to the next case.
28 A She stays, staring at Gladys, who has not moved.
29 A Penelope tilts her head.
30 A Gladys slowly tilts hers.
31 A ¶ Barnaby returns with a mouse in tongs and the bucket under his arm.
32 A He unlocks the case.
33 A Opens the hatch.
34 A Gladys stirs.
35 D BARNABY [CONT'D] (quiet): Watch.
36 A ¶ The snake unspools.
37 A Slow, silent, hypnotic.
38 A It takes the mouse in a single smooth strike.
39 A Penelope does not flinch.
40 A Barnaby watches her face.
41 D BARNABY [CONT'D]: You're good at this.
42 D PENELOPE: I grew up with a lot of brothers.
43 D BARNABY: That explains it.
44 A ¶ He closes the hatch.
45 A Dusts his hands.
46 A Then, casually, as if it were nothing:
47 D BARNABY [CONT'D]: Penelope.
48 D PENELOPE: Yes?
49 D BARNABY: Do you know why we feed her at night?
50 D PENELOPE: So she's calm for the visitors?
51 D BARNABY: No. Because she's gone.
* 52 A ¶ A beat.
53 A Penelope looks at the case.
54 A At the coils.
55 A At the branch.
56 A Gladys is exactly where she was.
57 A Perfectly still.
58 D PENELOPE: She's right there.
59 D BARNABY: That's a decoy.
60 D PENELOPE: A what?
61 D BARNABY: We made it. Last Tuesday. I was hoping you wouldn't notice.
62 D PENELOPE (slowly): Where is she?
63 D BARNABY: That's the thing.
64 A ¶ They both look up at the ceiling grate.
* 65 A A long, heavy thump echoes through the vent.
66 D BARNABY: Don't move.
67 D PENELOPE: Don't move.
68 A ¶ Neither does.
* 69 A The vent creaks.
70 A Something coils in the dark above them.

### SCENE s02042 | INT. COUNTY COURTHOUSE - JANITOR'S CLOSET OFF THE ATRIUM - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, MORDECAI TILLMAN, ESPERANZA
* 1 A ¶ Mops, buckets, a bare bulb.
* 2 A A cracked radio plays low jazz.
* 3 A Shelving crowded with floor wax and light bulbs.
4 A ¶ A WOMAN in a good wool suit sits on an overturned bucket.
5 A She has the look of someone who has been crying and has stopped.
* 6 A A leather briefcase rests on her knees.
7 A ¶ At the door, an old man in coveralls leans on a push broom.
8 A He is the night custodian, MORDECAI TILLMAN (70s, silver stubble, a ring of keys the size of a dinner plate).
9 D MORDECAI: Counselor, I don't mean to pry.
10 D WOMAN: Then don't.
11 D MORDECAI: But it's a quarter to midnight, and you're in my closet.
12 D WOMAN: I needed a door that locked.
13 D MORDECAI: Mine does. From the outside.
14 D WOMAN: I noticed.
15 A ¶ He sets down the broom.
16 A Pulls up a second bucket, upside down, and lowers himself onto it with a grunt.
17 D MORDECAI: I've worked this building forty-one years. I know the sound a person makes when they've lost.
18 D WOMAN: I haven't lost.
19 D MORDECAI: No?
20 D WOMAN: The verdict comes tomorrow.
21 D MORDECAI: Then why's your face look like that?
22 D WOMAN: Because I know how it ends.
23 D MORDECAI: Do you now.
24 D WOMAN (quietly): My client did it, Mr. Tillman.
25 D MORDECAI: I thought so.
26 D WOMAN: You thought so?
27 D MORDECAI: I clean the defendants' table. They leave things behind.
28 A ¶ She laughs, a sharp breath through her nose.
29 D WOMAN: And what do they leave?
30 D MORDECAI: Gum. Rosaries. Once, a gun, but that's another story.
31 D WOMAN (wiping her eyes): My name is Esperanza Calloway-Reyes. Not Counselor.
32 D MORDECAI: Pleased to meet you, Ms. Calloway-Reyes.
33 D ESPERANZA: I'm supposed to believe in him. That's the job.
34 D MORDECAI: And?
35 D ESPERANZA: I did believe in him. Right up until the jury was seated.
36 D MORDECAI: Seems a late time to stop.
37 D ESPERANZA: It's the time I started noticing.
* 38 A ¶ Silence.
* 39 A The radio shifts to a slow saxophone.
40 A Mordecai reaches over, turns it down.
41 D MORDECAI: Ms. Calloway-Reyes, you want my advice?
42 D ESPERANZA: Do I have a choice?
43 D MORDECAI: No. But here it is. Go home. Sleep. Tomorrow, stand up and do the work.
44 D ESPERANZA: Even if I know he's guilty?
45 D MORDECAI: Especially then.
46 A ¶ She nods, slowly.
47 A Stands.
48 A Tucks the briefcase under her arm.
49 D ESPERANZA: Thank you.
50 D MORDECAI: Don't mention it. I don't know anything.
51 A ¶ He opens the door.
52 A She steps into the dark atrium, her heels echoing across the marble.

### SCENE s02043 | INT. ABANDONED AIRPORT CONTROL TOWER - NIGHT
Detected names (may be incomplete or contain aliases): HARLAN BEAUMONT-DIAZ, PILOT
* 1 A ¶ Dusty consoles.
* 2 A Cracked glass on all sides.
* 3 A A single dead radar screen.
* 4 A Wind whistles through broken panes.
5 A ¶ HARLAN BEAUMONT-DIAZ (30s, flashlight, pry bar) crouches at a radio console, alone.
6 A He thumbs a dial.
* 7 A Static.
8 D HARLAN (muttering): Dead. Of course it's dead.
* 9 A ¶ The radio crackles.
* 10 A A burst of static.
* 11 A Then a voice, faint, flat.
12 D PILOT [V.O.] (through static): Tower, Tower. Do you read? We are inbound. Ten miles. We have lost our lights.
13 A ¶ Harlan freezes.
14 A The flashlight trembles.
15 D HARLAN: This tower's been closed for thirty years.
16 D PILOT [V.O.]: Tower, we see the runway. We are coming in. Please light the runway.
17 D HARLAN (into the mic): Who is this?
18 D PILOT [V.O.]: Tower, please. We cannot see our hands.
* 19 A ¶ The radio dies.
* 20 A Silence.
* 21 A Then, from the airfield far below, a low drone.
* 22 A It grows.
* 23 A A pale glow sweeps across the cracked windows, as though something very large is descending.
24 A ¶ Harlan backs toward the stairs, trips over the pry bar, and falls.
* 25 A The drone swells until the glass shivers in its frames.
26 D HARLAN [CONT'D] (whispering): Not tonight. Not tonight.

### SCENE s02044 | EXT. SALT FLAT - DAWN
Detected names (may be incomplete or contain aliases): CORDELIA ADEBAYO-FROST, DEZ, MAKINDE, STRANGER, TAVITA LEOTA, MATTHIAS
* 1 A ¶ A blinding plain of cracked white earth under a pink sky.
* 2 A Heat shimmer does not yet rise.
* 3 A A single abandoned jeep, windshield spiderwebbed, sits sunk to its axles.
* 4 A Beside it, a tarp stretched on poles makes a shelter no bigger than a closet.
5 A ¶ Under the tarp, DR. CORDELIA ADEBAYO-FROST (40s, geologist, sunhat, parched lips) rations water into four tin cups with the fierce concentration of a priest.
6 A Next to her, her field assistant DESMOND "DEZ" MAKINDE (20s, bandaged ankle) leans against the jeep's tire, eyes closed.
7 A ¶ Further off, a STRANGER sits cross-legged on the salt, facing away, a battered canvas pack beside him.
8 A He has been there since midnight.
9 A He has not spoken.
10 A ¶ Standing watch at the tarp's edge, TAVITA LEOTA (50s, the driver, wide-shouldered, a rag knotted over his head) scans the horizon through binoculars.
11 D CORDELIA: Dez, drink.
12 D DEZ: Save it.
13 D CORDELIA: Drink.
14 A ¶ He opens his eyes, takes the cup, swallows.
15 A She watches the cup, not the man.
16 D TAVITA: Nothing moving.
17 D CORDELIA: There never is, until there is.
18 D TAVITA (lowering the binoculars): I do not like that one.
19 D CORDELIA: Who?
20 D TAVITA: The man.
21 A ¶ He nods toward the Stranger.
22 A Cordelia looks.
23 A The Stranger has not moved.
24 D CORDELIA: He sat down and has not asked for anything.
25 D TAVITA: That is what worries me.
26 D DEZ: Maybe he's just tired.
27 D TAVITA: Tired men ask for water.
28 A ¶ Cordelia rises, takes a fourth cup, crosses the salt.
* 29 A The crust crunches.
30 A She stops a few paces behind the Stranger.
31 D CORDELIA: You are welcome to this.
32 D STRANGER (without turning): Thank you, Doctor.
33 D CORDELIA: You know who I am.
34 D STRANGER: I know you came looking for the old brine lake. I came for the same reason.
35 A ¶ He rises, brushes salt from his knees, turns.
36 A Gaunt, sunburnt, mid-fifties, eyes the color of weak tea.
37 A He takes the cup but doesn't drink.
38 D CORDELIA: And you are?
39 D STRANGER: Matthias.
40 D CORDELIA: Matthias what?
41 D MATTHIAS: Matthias is enough.
42 D TAVITA (calling): Doctor! Step back from him.
43 A ¶ Cordelia does not move.
44 A Dez struggles upright.
45 A Matthias glances at Tavita, at Dez, and then at the sky, where a thin line of dust has begun to climb the horizon.
46 D MATTHIAS: You should drink that yourselves. A truck is coming.
47 D TAVITA: Whose truck?
48 D MATTHIAS: Mine.
* 49 A ¶ A beat.
50 A Everyone looks at the dust.
51 D DEZ (whispering): He was waiting for rescue the whole time?
52 D CORDELIA: No. He was waiting for us.
53 A ¶ Tavita raises his binoculars, then drops them, and takes a step backward.
54 A Dez grabs the jeep's hood.
55 A Cordelia, calm, sets her cup on the salt.
56 A All four stand frozen under the pink sky as the engine's drone grows.
57 D MATTHIAS: Don't be afraid. I only want what you are looking for.
58 D CORDELIA: And if we say no?
59 D MATTHIAS: Then you may walk home.

### SCENE s02045 | INT. TRAIN DINING CAR - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR AUGUSTIN BELLWETHER, COUNTESS ISOLDE VON RAMSAUER, PRISCA ABERNETHY-LUND
* 1 A ¶ A vintage dining car on a night run through the Alps.
* 2 A White linen, silver cutlery, brass lamps swaying gently.
* 3 A Pine forests slide past in the dark windows.
4 A ¶ At a corner table, three people share a quiet dinner: INSPECTOR AUGUSTIN BELLWETHER (50s, rumpled tweed, small notebook peeking from a pocket), COUNTESS ISOLDE VON RAMSAUER (60s, pearls, a lorgnette), and a young woman, PRISCA ABERNETHY-LUND (20s, secretary, gloves in her lap).
* 5 A ¶ The train sways.
6 D BELLWETHER: You were saying, Countess?
7 D ISOLDE: I was saying that I did not like the man.
8 D BELLWETHER: So you said.
9 D ISOLDE: I said it twice. I'll say it a third time.
10 D PRISCA: Countess, please.
11 D ISOLDE: Do not shush me, child. He is dead. I am entitled to my opinion.
12 A ¶ Bellwether sets down his fork.
* 13 A The lamp swings.
14 A He and Prisca both reach for the salt at once, collide, and stop.
15 A She withdraws her hand with a nervous laugh.
16 A He takes the salt and sprinkles it.
17 D BELLWETHER: Miss Abernethy-Lund, you worked for Mr. Vanterpool.
18 D PRISCA: Three years.
19 D BELLWETHER: And you saw him last at--
20 D PRISCA: Seven. In his compartment. He asked me for a pen.
21 D BELLWETHER: And you gave him one.
22 D PRISCA: Yes.
23 D BELLWETHER: A green one.
24 A ¶ Prisca stares at her gloves.
25 D PRISCA: Yes.
26 D ISOLDE: What of it?
27 D BELLWETHER: There was no pen in the compartment, Countess.
* 28 A ¶ The train enters a tunnel.
* 29 A The windows go black.
* 30 A The lamps flicker.
31 A When they return, the three are in exactly the same positions, though no one is eating.
32 D BELLWETHER [CONT'D] (mildly): It is a small thing. But small things are my profession.
33 D ISOLDE: Inspector, are you accusing my companion?
34 D BELLWETHER: I'm observing. And I would like a quiet dinner. So, if you please, we shall continue after dessert.
35 A ¶ He picks up his fork again.
36 A After a moment, Isolde does the same.
37 A Prisca, pale, follows.

### SCENE s02046 | INT. CIRCUS FORTUNE-TELLER'S TENT - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ZORINA PETROVSKAYA-LUND, DETECTIVE MALCOLM OKORO-BRIGGS, CASS, WELLES, TELEPHONE, SERGEANT
* 1 A ¶ Velvet drapes, a round table, a glass ball glowing faintly from within.
* 2 A Incense curls toward a patched canvas ceiling.
* 3 A Outside, a calliope plays something slow and off-key.
4 A ¶ MADAME ZORINA PETROVSKAYA-LUND (60s, turban, rings on every finger) lays out tarot cards.
5 A Across from her, DETECTIVE MALCOLM OKORO-BRIGGS (40s, damp trench coat, hat in hands) watches.
6 A In the corner, a boy, CASPIAN "CASS" WELLES (12, striped shirt, wide eyes) sits on a trunk, holding a cage of white mice.
7 D MALCOLM: Madame, you told the police you saw nothing.
8 D ZORINA: I told the police what they wished to hear.
9 D MALCOLM: And what did you see?
10 A ¶ She turns a card.
* 11 A The Tower.
* 12 A Lightning, falling figures.
13 D ZORINA: A man in a gray suit, running from the big top at nine.
14 D CASS (from the corner): He had a red scarf.
15 D MALCOLM: Cass, were you there?
16 D CASS: I was feeding the mice.
* 17 A ¶ A TELEPHONE rings, shrill, on a shelf behind the curtain.
18 A Everyone stiffens.
19 A Zorina rises, parts the drape, lifts the receiver.
20 D ZORINA (into phone): Yes.
21 A ¶ Malcolm crosses and takes it from her.
22 D MALCOLM (into phone): Okoro-Briggs.
23 D SERGEANT [V.O.] (over the line): Sir, we found the scarf. Red wool. It was tied to the Ferris wheel.
24 D MALCOLM: Anyone with it?
25 D SERGEANT [V.O.]: No, sir. But the wheel is turning.
26 A ¶ Malcolm lowers the receiver.
* 27 A Outside, the calliope stops.
* 28 A In the silence, a distant, iron creak.
29 A Zorina's rings click against the glass ball.
30 D ZORINA: Detective, do not go out there.
31 D MALCOLM: Madame, I have to.

### SCENE s02047 | INT. FAMILY FUNERAL HOME - VIEWING ROOM - DAY
Detected names (may be incomplete or contain aliases): DELACROIX-OWUSU, DELACROIX-KRAMER, BEATRIX FAIRCHILD-ANYANWU, OYELOWO-FAIRCHILD
* 1 A ¶ Gray carpet, a bank of white lilies, a closed walnut casket at the far wall.
* 2 A Folding chairs in three rows.
* 3 A A tissue box on every sixth chair.
* 4 A The air conditioning hums like an apology.
5 A ¶ MARGARET "MAGGIE" DELACROIX-OWUSU (50s, black dress, hair pinned tight) stands at the casket, one hand flat on the lid.
6 A She does not speak.
7 A Her sister, JOSEPHINE "JOJO" DELACROIX-KRAMER (40s, same dress, cheaper shoes) hovers three feet behind with a clutch purse she keeps opening and closing.
8 A ¶ On the front row, their elderly aunt, BEATRIX FAIRCHILD-ANYANWU (80s, hat with a small black veil) knits something shapeless.
9 A Beside her, her grandson, NATHANIEL "NATE" OYELOWO-FAIRCHILD (20s, tie too short, a phone he keeps checking and pocketing) sits stiffly.
10 A ¶ She straightens the lilies.
11 A She straightens them again.
12 A The other one stands behind her and watches her do it, purse snapping shut.
13 A ¶ Maggie turns.
14 A Looks past Jojo, at the door.
15 A ¶ Jojo follows her eyes.
* 16 A No one there.
17 A ¶ Beatrix's needles click.
18 A Nate checks his phone.
19 A Puts it away.
20 A Checks it.
21 A ¶ Maggie crosses to the front row and sits, one chair apart from Beatrix.
22 A She smooths her skirt.
23 A Jojo remains standing.
24 A After a long moment, she sits too, on the other side of her, so that she is flanked by her sister and her aunt.
25 A Maggie reaches over without looking and takes Jojo's hand.
26 A Jojo squeezes once.
27 A Neither lets go.
28 A ¶ Beatrix's needles stop.
29 A She lays them in her lap.
* 30 A ¶ At the back of the room, the door swings open on its own and settles.
31 A The four of them turn at the same time.

### SCENE s02048 | INT. CITY HOSPITAL - EMERGENCY ROOM BAY 4 - NIGHT
Detected names (may be incomplete or contain aliases): FELICITY ABARA-LINDGREN, BROTHER, ANSELMO
* 1 A ¶ Curtains, beeping monitors, a gurney.
* 2 A A bag of saline drips.
3 A A young man lies on the bed, pale, one arm limp.
4 A ¶ DR. FELICITY ABARA-LINDGREN (40s, scrubs, tired eyes) checks his pulse.
5 A A tall man in an ill-fitting suit hovers at the curtain: the patient's brother.
6 D FELICITY: He's stable. For now.
7 D BROTHER: Thank God.
8 D FELICITY: Don't thank anyone yet. Is there any history of heart trouble in your family?
9 D BROTHER: I don't know. We weren't close.
10 D FELICITY: Your name?
11 D BROTHER: Anselmo.
12 D FELICITY: Anselmo, I need the truth. What did he take?
13 D ANSELMO: Nothing.
14 D FELICITY: His blood says otherwise.
* 15 A ¶ The monitor beeps faster.
16 A Felicity glances at it, then at the brother, and her tone drops.
17 D FELICITY [CONT'D]: His pressure's falling. Nurse!
18 A ¶ The brother steps in, grabs her sleeve.
19 D ANSELMO: He took my father's pills. All of them. I watched him.
20 D FELICITY: Why didn't you stop him?
21 D ANSELMO: Because I wanted to see if he'd really do it.
22 A ¶ She stares at him.
23 A Slowly, she pulls her sleeve free.
* 24 A The monitor settles.
25 A Her voice goes steady.
26 D FELICITY: He's going to live, Mr. Anselmo. And you are going to sit down and think about what you just said.
27 A ¶ He sits.
* 28 A The curtain swings shut.

### SCENE s02049 | EXT. FLOODED PARKING STRUCTURE - TOP DECK - DAWN
Detected names (may be incomplete or contain aliases): LOUISA KARAGEORGIOU, WILLOW KARAGEORGIOU, MAN, EZRA, WOMAN, MARGUERITE
* 1 A ¶ Gray water laps at the concrete ramps below.
* 2 A The top deck is an island: a few abandoned cars, a rusted shopping cart, a blue tarp slung between two sedans.
* 3 A The sky is the color of dishwater.
* 4 A Gulls wheel over the drowned city.
5 A ¶ Under the tarp, LOUISA KARAGEORGIOU (40s, broad-shouldered, parka tied at the waist) feeds a small fire in a hubcap.
6 A Across from her, her daughter, WILLOW KARAGEORGIOU (15, hood up, a knife on her belt), sharpens a stick with careful strokes.
7 D LOUISA: Careful. You'll lose a finger.
8 D WILLOW: I won't.
9 D LOUISA: You don't know that.
10 D WILLOW: I know my fingers.
* 11 A ¶ A scrape of metal on the ramp.
12 A They both freeze.
13 A Louisa raises her hand, flat.
14 A Willow lowers the stick.
* 15 A The scrape comes again, closer, then a splash, then a ragged cough.
16 A ¶ A MAN crawls up over the ledge, soaked, shaking, one arm hooked over the concrete.
17 A He is gaunt and gray-bearded, a ring of salt crusted around his lips.
18 A He drags himself onto the deck and collapses.
19 D LOUISA (whispering): Stay behind me.
20 D WILLOW: I'm not scared.
21 D LOUISA: I didn't say you were.
22 A ¶ Louisa crosses to the man.
23 A Crouches.
24 A Turns him over with the toe of her boot.
25 A He gasps, blinks up at her.
26 D MAN (rasping): Water.
27 D LOUISA: Who are you?
28 D MAN: Please.
29 D LOUISA: Your name.
30 D MAN: Ezra. Ezra Ng-Halloran. I've been swimming since midnight.
31 D LOUISA: From where?
32 D EZRA: The harbor. The ferry sank.
33 D WILLOW (from behind her mother): There's no ferry.
34 D EZRA: There was. Yesterday.
35 A ¶ Louisa and Willow exchange a look.
36 A Louisa unscrews her canteen and holds it out.
37 A He drinks like a drowning man.
38 A She takes it away after three swallows.
39 D LOUISA: That's enough.
40 D EZRA: Thank you.
41 D LOUISA: Don't thank me yet. Are you alone?
42 D EZRA: Yes.
43 D WILLOW: He's lying.
44 D EZRA: I'm not--
45 D WILLOW: He looked at the stairwell.
46 A ¶ All three turn their heads toward the stairwell door.
* 47 A It is closed.
* 48 A The wind rattles its handle.
49 D LOUISA (very quiet): Willow. Get the tarp rope.
50 D WILLOW: Why?
51 D LOUISA: Just get it.
52 A ¶ Willow scrambles for the rope.
53 A Louisa stands, drawing a flare gun from her coat.
54 A Ezra holds up both hands, palms out, eyes wide.
55 D EZRA: Please, it's not what you think.
56 D LOUISA: What do I think?
* 57 A ¶ The stairwell door rattles harder, then bursts open.
58 A A WOMAN in a dripping yellow slicker staggers out, a gun in her fist.
59 A The four of them stand in a tight, shuddering ring, no one breathing.
60 D WOMAN (shouting): Ezra! You stupid, stupid man!
61 D EZRA (weak, relieved): Marguerite.
62 A ¶ She lowers the gun.
63 A Looks at Louisa.
64 A At Willow.
65 A Her shoulders sag.
66 D MARGUERITE: We saw smoke.
67 D LOUISA: So did everyone.
68 D MARGUERITE: We have a boat. We have room.
69 A ¶ Louisa lowers the flare gun, slowly.
70 A Willow lets out a breath.
* 71 A The gulls cry.
* 72 A Nobody smiles, but the fire burns a little higher.

### SCENE s02050 | INT. ORBITAL RECYCLING DEPOT - SORTING FLOOR - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): KIRA ASANTE-VOLKOV, DMITRI OLUWASEUN, INSPECTOR LEOPOLDINE HARGROVE-SATO
* 1 A ¶ Conveyor belts shuttle crushed satellites past a gantry.
* 2 A Sparks.
* 3 A The smell of hot solder.
4 A ¶ KIRA ASANTE-VOLKOV (30s, sorter, welding mask pushed up) pulls a gray panel off the belt, turns it over.
* 5 A A strip of tape on the back: a name, scratched through.
6 A ¶ Across the floor, DMITRI OLUWASEUN (50s, shift lead, clipboard) watches her.
7 A He does not look at the panel.
8 A He looks at her hands.
9 D KIRA: This is from Sector Nine.
10 D DMITRI: Everything's from Sector Nine.
11 D KIRA: It's still warm.
12 A ¶ He sets down the clipboard.
13 A Walks over.
14 A Slowly.
* 15 A The belt grinds.
16 D DMITRI: Put it back.
17 D KIRA: It has a serial.
18 D DMITRI: Put it back on the belt.
19 A ¶ She doesn't.
* 20 A A door hisses open at the far end.
21 A A third figure strides in: INSPECTOR LEOPOLDINE HARGROVE-SATO (40s, gray coat, a slim case).
* 22 A The belts slow, then stop.
* 23 A Silence.
24 D LEOPOLDINE: Good morning. Please step away from the panel.
25 A ¶ Kira lowers it.
26 A Dmitri straightens, pulls his clipboard to his chest.
27 D LEOPOLDINE [CONT'D]: Which of you is Asante-Volkov?
28 A ¶ Neither answers.
* 29 A The belt starts again, with a lurch.

### SCENE s02051 | INT. NIGHT FERRY - OBSERVATION LOUNGE - NIGHT
Detected names (may be incomplete or contain aliases): CLEMENTINE ABIODUN-WRIGHT, ISAAC VANDERHOEK-MWANGI
* 1 A ¶ Empty vinyl seats.
* 2 A A vending machine glowing blue.
* 3 A Black water slides past the windows.
* 4 A The engine thrums like a cat.
5 A ¶ CLEMENTINE ABIODUN-WRIGHT (30s) sits with a paperback open and unread on her knee.
6 A She has a coat draped over her shoulders.
7 A She keeps turning the same page.
8 A ¶ ISAAC VANDERHOEK-MWANGI (30s) comes in from the deck with two paper cups.
9 A He stops at the door.
10 A He lifts one cup in an offer.
11 A ¶ She looks up.
12 A She nods.
13 A ¶ He crosses the lounge.
14 A Sits one seat away.
15 A Hands her a cup.
16 A She takes it.
17 A Their fingers do not touch.
18 D CLEMENTINE: Thanks.
19 D ISAAC: It's terrible.
20 D CLEMENTINE: I figured.
21 A ¶ She sips.
22 A Grimaces.
23 A He grins at his own cup.
24 D ISAAC (to himself): Nine years.
25 D CLEMENTINE: Sorry?
26 D ISAAC: Nothing. Just counting.
27 A ¶ She sets the book on the seat between them.
28 A He glances at it.
29 A Reads the spine.
30 A She notices.
31 D CLEMENTINE: You've read it.
32 D ISAAC: You gave it to me.
33 D CLEMENTINE: Did I?
34 D ISAAC: Third floor, Lincoln Street. You said it would change my life.
35 D CLEMENTINE: Did it?
36 D ISAAC: Not really.
37 A ¶ She laughs.
38 A A real one, quick and surprised.
39 A He watches her do it.
40 D CLEMENTINE (to the empty room): All right, ferry. All right.
41 D ISAAC: Who are you talking to?
42 D CLEMENTINE: The whole boat. It's been listening all night.
43 A ¶ He looks at the empty seats.
44 A At the black windows.
45 A At her.
46 D ISAAC: Then let's give it something to hear.
47 A ¶ She reaches for the book.
48 A Opens it to the page she was stuck on.
49 A Hands it to him.
50 D CLEMENTINE: Read me this part.
51 A ¶ He takes it.
52 A Begins, quietly.
53 A She listens, head tilted, cup warm in both hands.

### SCENE s02052 | INT. ROOFTOP GREENHOUSE RESTAURANT - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI ABERFORTH-KANE, TEODOR VASILEV-OSEI, WAITER, WOMAN
* 1 A ¶ Candles in jam jars.
* 2 A Fairy lights.
* 3 A A single table set for two among rows of tomato plants.
* 4 A The city glitters beyond the glass.
5 A ¶ NAOMI ABERFORTH-KANE (30s, silk dress, nervous hands) adjusts a fork.
6 A Straightens it.
7 A Looks at the empty chair.
* 8 A ¶ Footsteps.
9 A TEODOR VASILEV-OSEI (30s, rumpled suit, a bouquet of grocery-store carnations) skids around the corner of a tomato row.
10 D TEODOR: I'm late.
11 D NAOMI: You're eleven minutes late.
12 D TEODOR: Eleven. Not twelve.
13 D NAOMI: Eleven and a half.
14 A ¶ He holds out the carnations.
15 A She stares at them.
16 A Then, helplessly, smiles.
17 A He sits.
18 A They look at each other across the candle.
19 D NAOMI [CONT'D]: You came.
20 D TEODOR: Of course I came.
21 D NAOMI: Last time you didn't.
22 D TEODOR: Last time my mother was in the hospital.
23 D NAOMI: I know. I'm sorry. I just--
24 D TEODOR: No. It's fair.
25 A ¶ She puts her napkin in her lap.
26 A He picks up the menu without opening it.
27 A They both laugh at the same moment, then stop.
28 A ¶ A WAITER in a green apron glides up, notepad ready.
29 A He is very young, very solemn.
30 D WAITER: Good evening. Is this a celebration?
31 D NAOMI: Maybe.
32 D TEODOR: Possibly.
33 D WAITER: I'll bring something special.
34 A ¶ He glides off.
35 A Naomi covers her mouth.
36 A Teodor reaches across and takes her hand.
37 A She lets him.
38 D NAOMI (whispering): He's going to bring us a cake.
39 D TEODOR: He's going to bring us a cake.
40 A ¶ Then Naomi's face changes.
41 A She looks over his shoulder, past the tomato plants, at the stairwell door.
42 D NAOMI [CONT'D]: Teodor.
43 D TEODOR: What?
44 D NAOMI: Don't turn around.
45 A ¶ He turns around.
46 A In the doorway, a WOMAN in a red coat stands very still, a suitcase at her feet.
47 D TEODOR: Marisol.
48 A ¶ The Waiter returns with a tiny cake and a single candle.
49 A He stops, takes in the scene, and quietly sets the cake in the middle of the table.
50 A Nobody touches it.

### SCENE s02053 | EXT. SANDBAGGED FIELD HOSPITAL - TUNISIA DESERT - DAY
Detected names (may be incomplete or contain aliases): SISTER MARGUERITE OLORUNFEMI-DAVIES, CAPTAIN JOSIAH TREMBLAY-ASANTE, PRIVATE HAKON BJORKLUND-RAMIREZ, SERGEANT PERPETUA ADEYEMI-STONE, COLONEL BARNABAS WHITLOCK-NKEMELU, WHITLOCK
* 1 A ¶ A tent village of bleached canvas and red-cross banners.
* 2 A Dust.
* 3 A Generators.
* 4 A A string of ambulances nosed up against the sandbags.
* 5 A Heat shimmers over everything.
* 6 A Far to the east, artillery grumbles like distant furniture being moved.
7 A ¶ SISTER MARGUERITE OLORUNFEMI-DAVIES (30s, white apron gone yellow, sleeves rolled) pushes a gurney between tents.
8 A Walking beside her, CAPTAIN JOSIAH TREMBLAY-ASANTE (40s, surgeon, eyes red from lack of sleep) carries a bag of plasma.
9 A ¶ At the edge of the tent village, PRIVATE HAKON BJORKLUND-RAMIREZ (20s, rifle, a shaving cut on his jaw) stands watch beside a water barrel.
10 A Next to him, SERGEANT PERPETUA ADEYEMI-STONE (30s, sunburnt nose, field cap) scans the horizon with binoculars.
11 A ¶ Under a canvas awning, COLONEL BARNABAS WHITLOCK-NKEMELU (60s, gray moustache, a field desk piled with paper) writes with a stub of pencil.
12 D MARGUERITE: Captain, he's bleeding through again.
13 D JOSIAH: I see it.
14 D MARGUERITE: Should I--
15 D JOSIAH: Wait.
16 A ¶ They reach a tent flap.
17 A Josiah ducks inside.
18 A Marguerite parks the gurney and steps back, hands on hips, drawing a long breath.
19 D HAKON (low): Sergeant, is that thunder?
20 D PERPETUA: It's the guns.
21 D HAKON: It sounds different.
22 D PERPETUA: It's closer.
23 D HAKON: Closer to who?
24 D PERPETUA: To us, Private.
25 A ¶ He glances at the barrel.
26 A She keeps scanning.
* 27 A Wind lifts a corner of the tent.
* 28 A A flap slaps.
29 D WHITLOCK (without looking up): Sergeant Adeyemi-Stone.
30 D PERPETUA: Sir?
31 D WHITLOCK: What does it look like?
32 D PERPETUA: Dust, sir. A lot of it. A column, maybe. Fifteen miles.
33 D WHITLOCK: Ours or theirs?
34 D PERPETUA: Can't tell yet.
35 D WHITLOCK: Tell me when you can.
36 A ¶ She nods.
37 A He returns to his paper.
38 A She and Hakon exchange a look.
39 D MARGUERITE (calling over): Sergeant, we have two ambulances unloading. Do I ready beds?
40 D PERPETUA: Ready the beds.
41 D HAKON: Ready the beds?
42 D PERPETUA: You heard.
43 A ¶ Marguerite is already moving.
44 A Josiah reappears from the tent, wiping his hands on a cloth.
45 D JOSIAH: How many?
46 D MARGUERITE: Two ambulances, six stretchers.
47 D JOSIAH: All walking?
48 D MARGUERITE: Two are not.
49 D JOSIAH (muttering): They never are.
50 D HAKON: Sergeant, the dust is turning.
51 D PERPETUA: Where?
52 D HAKON: Toward us.
53 A ¶ Whitlock lays down his pencil.
54 A Rises, slow.
55 A Shades his eyes.
56 D WHITLOCK: Everyone, listen. Pack the instruments. Load what we can carry. We move at dusk.
57 D JOSIAH: We have fourteen men who cannot move.
58 D WHITLOCK: Then they stay with a medic and a white flag.
59 D MARGUERITE: I'll stay.
60 D JOSIAH: No, I will.
61 D MARGUERITE: Captain--
62 D JOSIAH: You will lead the others, Sister. You know the road.
63 D PERPETUA: Sir, we have a truck.
64 D WHITLOCK: One truck.
65 D PERPETUA: One truck, yes, sir. And a jeep.
66 D WHITLOCK: Then we will take them both.
67 D HAKON: And if the dust is ours?
68 D WHITLOCK: Then we will have wasted an afternoon.
69 A ¶ He turns back to his desk, sits, takes up his pencil, and resumes writing.
70 A His hand is steady.
71 A Marguerite and Josiah look at each other, then at the bleeding man on the gurney.
72 D MARGUERITE (softly): We can still do this one.
73 D JOSIAH: We can.
74 A ¶ They push the gurney together into the tent.
75 A Hakon wipes his forehead.
76 A Perpetua lowers the binoculars, wipes the lenses on her sleeve, and raises them again.
77 D PERPETUA (to herself): Come on. Show me a flag.
* 78 A ¶ The dust column swells over the ridge, brown against the white sky, and keeps coming.

### SCENE s02054 | INT. FAMILY DINING ROOM - SUNDAY DINNER
Detected names (may be incomplete or contain aliases): BEATRICE MONTGOMERY-AKINYEMI, TEDDY
* 1 A ¶ A long table, a good cloth, a roast chicken half carved.
* 2 A Two places set.
* 3 A Six empty chairs.
* 4 A Steam rises from a gravy boat nobody has touched.
5 A ¶ BEATRICE MONTGOMERY-AKINYEMI (60s, pearls, apron over her Sunday dress) carves with unnecessary force.
6 A Across the table, her son THEODORE "TEDDY" MONTGOMERY-AKINYEMI (30s, tie loosened, jaw tight) stirs his peas.
7 D BEATRICE: Everyone's welcome to begin.
8 D TEDDY: Mama, there's no one else.
9 D BEATRICE (to the room): Then no one shall be offended.
10 A ¶ She serves him a slice.
11 A Sets the platter down.
12 A Sits.
13 D BEATRICE [CONT'D]: Your father always said grace.
14 D TEDDY: I'm aware.
15 D BEATRICE: Someone should.
16 D TEDDY: Fine. Bless this food.
17 D BEATRICE: Amen.
18 A ¶ They eat.
* 19 A Forks clink.
* 20 A The clock ticks.
21 D BEATRICE [CONT'D] (to herself): Too dry.
22 D TEDDY: It's fine.
23 D BEATRICE: It is not fine. I overcooked it.
24 D TEDDY: Mama.
25 D BEATRICE: I overcooked it because I was thinking about your sister.
26 A ¶ Teddy sets down his fork.
27 D TEDDY: Don't.
28 D BEATRICE: Eight years, Theodore. Eight years she has not sat in that chair.
29 D TEDDY: She has her reasons.
30 D BEATRICE: She has a grudge.
31 D TEDDY: She has a reason!
32 A ¶ His voice cracks across the table.
33 A Beatrice flinches.
* 34 A A pause.
35 A Teddy pushes back his chair.
36 D TEDDY [CONT'D]: You want to know why she doesn't come? Because every Sunday you set six empty places and call it hope.
37 D BEATRICE: It is hope.
38 D TEDDY: It's a stage set!
39 D BEATRICE: How dare you.
40 D TEDDY: How dare I?
41 A ¶ He stands.
* 42 A The cloth drags.
* 43 A Gravy slops.
44 D BEATRICE: Sit down.
45 D TEDDY: No.
46 D BEATRICE: Sit down, Theodore.
47 D TEDDY: I'm thirty-four years old.
48 A ¶ He walks out.
* 49 A The front door slams.
50 A Beatrice sits alone, staring at the empty chairs.

### SCENE s02055 | INT. SCHOOL BAND ROOM - AFTER HOURS
Detected names (may be incomplete or contain aliases): JUBILEE ADEBAYO-MORROW, HOLLY, PRZYBYLSKI, MOM
* 1 A ¶ A cramped practice room.
* 2 A Gray carpet, acoustic foam on the walls, a battered upright piano, music stands knocked askew.
* 3 A A single lamp glows.
* 4 A On the shelf, a row of dusty trophies.
* 5 A Rain on the high window.
6 A ¶ JUBILEE ADEBAYO-MORROW (16, braces, oversize cardigan, a trombone case at her feet) perches on the piano bench, picking at a loose thread.
7 A ¶ Across the room, HOLDEN "HOLLY" PRZYBYLSKI (17, drum sticks tucked behind one ear, band jacket, a skateboard under one arm) leans in the doorway.
8 D HOLLY: They said you quit.
9 D JUBILEE: I didn't quit.
10 D HOLLY: They said it at assembly. Mr. Dunphy said it.
11 D JUBILEE: Mr. Dunphy says a lot of things.
12 D HOLLY: He said you were "taking a break."
13 D JUBILEE: It's a break.
14 D HOLLY: From what?
15 D JUBILEE: From being second chair.
16 D HOLLY: You're not second chair.
17 D JUBILEE: I'm second to Ingrid.
18 D HOLLY: Ingrid has a private tutor.
19 D JUBILEE: Ingrid has a private everything.
20 D HOLLY: So what?
21 D JUBILEE: So I can't win.
22 D HOLLY: Jubilee.
23 D JUBILEE: What?
24 D HOLLY: It's a trombone, not a war.
25 D JUBILEE (sharply): You don't understand.
26 D HOLLY: Then explain.
27 D JUBILEE: It's not that I'm not good. It's that I'm good and it doesn't matter.
28 D HOLLY: It matters to me.
29 D JUBILEE: You're a drummer.
30 D HOLLY: I'm a drummer who listens.
31 D JUBILEE: To what?
32 D HOLLY: To you. Every Tuesday. Through the wall.
33 D JUBILEE: That's creepy.
34 D HOLLY: It's the practice room next door.
35 D JUBILEE: It's still creepy.
36 D HOLLY: It's the best thing I hear all week.
* 37 A ¶ A phone rings, muffled, from inside Holly's jacket.
38 A He fishes it out, glances at the screen.
39 D HOLLY [CONT'D] (into phone): Hey, Mom. No. I'm still at school. No, I'm fine.
40 D MOM [V.O.] (tinny): Holden, it's nine o'clock. Where are you?
41 D HOLLY (into phone): Band room. Helping a friend.
42 D MOM [V.O.]: Which friend?
43 D HOLLY (into phone): Jubilee.
44 D MOM [V.O.]: The trombone girl?
45 D HOLLY (into phone): Mom.
46 D MOM [V.O.]: I'm only asking.
47 D HOLLY (into phone): I'll be home soon.
48 A ¶ He hangs up.
49 A Pockets the phone.
50 A Jubilee is watching him.
51 D JUBILEE: She knows about me?
52 D HOLLY: Everyone knows about you.
53 D JUBILEE: What do they know?
54 D HOLLY: That you're really good. And that you're pretending you're not.
55 D JUBILEE: I'm not pretending.
56 D HOLLY: Okay.
57 D JUBILEE: I'm not.
58 D HOLLY: Jubilee, play something.
59 D JUBILEE: Now?
60 D HOLLY: Now.
61 D JUBILEE: There's nobody here.
62 D HOLLY: I'm here.
* 63 A ¶ A long silence.
* 64 A Rain on the window.
65 A Jubilee looks at the case, then at him.
66 D JUBILEE: What do you want to hear?
67 D HOLLY: Whatever you were going to play before you quit.
68 A ¶ She snaps the latches open.
69 A Lifts the trombone.
70 A Slides the slide out, slow, like a drawn breath.
71 D JUBILEE: It's not finished.
72 D HOLLY: Neither am I.
73 A ¶ She raises the horn.
74 A He crosses the room, sits on an upturned bucket, and pulls out his sticks.
75 A He taps the lid of the piano once, softly, counting her in.

### SCENE s02056 | INT. SYNERGY LOGISTICS - OPEN-PLAN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): TRENT OKAFOR-BUCHANAN, DELPHINE ACHEBE-MARCH, WALLY, PRZYBYLSKI-ODUYA
* 1 A ¶ Rows of identical desks under beige light.
* 2 A A motivational poster: "TEAMWORK: BECAUSE BLAME IS BETTER SHARED."
* 3 A A fern in the corner, plastic.
4 A ¶ TRENT OKAFOR-BUCHANAN (40s, regional director, a lanyard, a mug that says WORLD'S OKAYEST BOSS) stands at a whiteboard.
5 A DELPHINE ACHEBE-MARCH (30s, analyst, cardigan, hair in a clip) sits with a laptop.
6 A WALTER "WALLY" PRZYBYLSKI-ODUYA (50s, procurement, bifocals, a stress ball) lounges back with his feet up.
7 D TRENT: Okay, so the quarterly numbers.
8 D DELPHINE: They're down.
9 D WALLY: They're soft.
10 D TRENT: They're down but they're soft.
11 D DELPHINE: They're down by thirty-one percent.
12 D WALLY: Which is soft.
13 D TRENT: Delphine, what does the model say?
14 D DELPHINE: The model says we lost the Henderson account.
15 D WALLY: Which wasn't ours.
16 D DELPHINE: It was ours in March.
17 D WALLY: In March everything was ours.
18 D TRENT: Okay. So, whose fault is it?
19 D DELPHINE: It's no one's--
20 D WALLY: Procurement was clean.
21 D DELPHINE: --no one's fault, Trent, it's the market--
22 D TRENT: It has to be someone's fault.
23 D WALLY: It's Delphine's.
24 D DELPHINE: Excuse me?
25 D WALLY: She flagged it late.
26 D DELPHINE: I flagged it in February!
27 D WALLY: After the horse left the barn.
28 D DELPHINE: There was no barn!
29 D TRENT: Guys! Guys.
30 A ¶ He holds up a marker.
31 A They go still.
32 A Trent turns to the whiteboard and writes, with great seriousness, the word: LEARNINGS.
33 D TRENT [CONT'D]: Let's circle back.
34 D WALLY (muttering): I hate circling back.
35 D TRENT: What was that?
36 D WALLY: I love it.
37 A ¶ Delphine closes her laptop with a loud snap and stands.
38 D DELPHINE: I'm going to get coffee.
39 D TRENT: We're in a meeting.
40 D DELPHINE: It's a stand-up. I'm standing.
41 A ¶ She exits.
42 A Wally and Trent stare at the empty chair.
* 43 A The fern's plastic leaves tremble in her wake.
44 D WALLY: She's gonna blame me for that.
45 D TRENT: Who?
46 D WALLY: Her. Or him. Or someone.
47 D TRENT: You think she's going to blame you for her leaving?
48 D WALLY: She will. It's her fault, really.
49 D TRENT: Then who's going to take the minutes?
50 D WALLY: Not me.
51 D TRENT: Not me.
52 A ¶ They look at the whiteboard.
* 53 A LEARNINGS.
* 54 A Underneath, nothing.

### SCENE s02057 | INT. RAILWAY STATION PLATFORM - NIGHT
Detected names (may be incomplete or contain aliases): MAN, WOMAN, CORDELIA, JULIAN
* 1 A ¶ A slow rain.
* 2 A An empty platform.
* 3 A A bench, a vending machine, a clock stopped at ten past nine.
4 A ¶ A MAN in a rumpled overcoat steps off the last train, looks left, looks right, sets down his suitcase, picks it up again.
5 A He circles the bench once and sits, and a woman in a green scarf, who has been waiting at the far end with her umbrella tucked under her arm, stands, walks the length of the platform, stops six feet away, glances at the stopped clock, and tilts her head at him.
6 D WOMAN: Excuse me. Are you the man from the telegram?
7 D MAN: I might be.
8 D WOMAN: It said to look for a gray overcoat and a suitcase with a broken latch.
9 D MAN: That could be a thousand men.
10 D WOMAN: At ten past nine on a Tuesday?
11 D MAN: It's a small town.
12 A ¶ She laughs.
13 A He rises, pulling his suitcase after him like a sleeping dog, and they both turn at the same instant as the platform lamps flicker, and she steps closer, and he steps closer, and they stop.
14 D WOMAN [CONT'D]: My name is Cordelia.
15 D MAN: Julian.
16 D CORDELIA: Julian.
17 D JULIAN: Cordelia.
18 A ¶ They both say each other's names again at the same time, then fall silent.
19 A He holds out the suitcase.
20 A She takes it.
* 21 A The latch snaps open.
* 22 A A bundle of letters tumbles out.
23 D CORDELIA (softly): You kept them.
24 D JULIAN: Every one.
25 A ¶ She kneels.
26 A He kneels.
27 A Their hands meet over the pile and rest there.
* 28 A The rain thickens.
* 29 A A distant whistle.
30 A Neither moves.

### SCENE s02058 | INT. COURTHOUSE CORRIDOR - OUTSIDE ROOM 4B - DAY
Detected names (may be incomplete or contain aliases): MAN, ATTORNEY GWENDOLEN ADEYEMI-STRAND, OFFICER PRIMROSE OKONJO-HALE, EVERETT
* 1 A ¶ A long marble hallway.
* 2 A Benches.
* 3 A A water fountain that nobody uses.
* 4 A A clock ticking too loudly.
5 A ¶ A MAN sits alone on the far bench, a folder in his lap, a briefcase at his feet.
6 A Hands folded.
7 A He looks at nobody.
8 A ¶ ATTORNEY GWENDOLEN ADEYEMI-STRAND (40s, charcoal suit, a stack of exhibits under one arm) approaches, stops two benches away, and sits.
9 A She does not look at him either.
10 A ¶ After a long moment, he speaks.
11 D MAN: Do I know you?
12 D GWENDOLEN: You've seen my brief.
13 D MAN: Yes.
14 D GWENDOLEN: Then you know me.
15 A ¶ He nods.
16 A A bailiff, OFFICER PRIMROSE OKONJO-HALE (30s, uniform pressed, a ring of keys), passes with a clipboard.
17 A She glances at them both, slows, then moves on.
18 D MAN (quietly): Is it always this quiet?
19 D GWENDOLEN: Before the verdict? Yes.
20 D MAN: After?
21 D GWENDOLEN: Depends on the verdict.
22 A ¶ He shifts the folder on his knees.
23 A His thumbs press its edges.
* 24 A The clock ticks.
25 A Gwendolen sets her exhibits down and straightens them, edges aligned.
26 D MAN: I'm Everett.
27 D GWENDOLEN: Mr. Rutherford-Lowe. I know.
28 D EVERETT: I didn't think you would.
29 D GWENDOLEN: I read the file.
30 D EVERETT: All of it?
31 D GWENDOLEN: All of it.
32 D EVERETT: Then you know what I did.
33 D GWENDOLEN: I know what you're accused of.
34 A ¶ He smiles at the floor.
35 A A small, tired smile.
* 36 A The door to 4B opens.
37 A Officer Primrose Okonjo-Hale stands there, holding it.
38 D PRIMROSE: Counsel. Mr. Rutherford-Lowe. They're ready.
39 A ¶ Everett stands.
40 A So does Gwendolen.
41 A She collects her exhibits.
42 A For a moment they stand shoulder to shoulder, facing the door.
43 D GWENDOLEN: Mr. Rutherford-Lowe.
44 D EVERETT: Yes?
45 D GWENDOLEN: Whatever happens, keep your hands where they are.
46 A ¶ He looks down.
47 A His hands, folded, are trembling.
48 A He tightens them.
49 A They go still.

### SCENE s02059 | INT. HOUSEBOAT SALON - CANAL AMSTERDAM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LEOPOLD VAN DER MEULEN-OSEI, MADAME CATHERINE ABERNATHY-DUPRE, TOBY, NGUYEN-HARTMANN, CLEMENTINE ODUYA-BRANDT, BRUNO ADELEKE-FISCHER, SISTER IMOGEN FAIRBANKS-TEMBO
* 1 A ¶ A narrow wooden cabin crammed with antique clocks.
* 2 A A potbellied stove.
* 3 A A low table with a half-eaten cheese board.
* 4 A Rain drums on the roof.
* 5 A Candles.
* 6 A Six people, one body in the corner under a tablecloth.
7 A ¶ INSPECTOR LEOPOLD VAN DER MEULEN-OSEI (50s, pipe, a fold of paper in his pocket) paces the length of the room.
8 A At the stove, MADAME CATHERINE ABERNATHY-DUPRE (60s, rings, silk robe) warms her hands.
9 A On the sofa, TOBIAS "TOBY" NGUYEN-HARTMANN (30s, in his socks, a glass of whiskey).
10 A Beside him, CLEMENTINE ODUYA-BRANDT (20s, long braids, a shoebox on her knees).
11 A In the armchair, BRUNO ADELEKE-FISCHER (50s, a sleeping cap pushed back).
12 A At the window, SISTER IMOGEN FAIRBANKS-TEMBO (40s, habit, rosary).
13 D LEOPOLD: Ladies and gentlemen, I would like silence.
14 D TOBY: You've had silence for an hour.
15 D BRUNO: You've had it and you've done nothing with it.
16 D LEOPOLD: I have been thinking.
17 D CATHERINE: We could hear you thinking. You hum.
18 D LEOPOLD (to the room): Everyone, please, remain where you are.
19 D CLEMENTINE: Why would anyone move?
20 D IMOGEN: There is a body, child.
21 D CLEMENTINE: I know there's a body, Sister.
22 D TOBY: Can we talk about the body?
23 D BRUNO: No.
24 D CATHERINE: Yes.
25 D LEOPOLD: Madame Abernathy-Dupre, you found him.
26 D CATHERINE: I did.
27 D LEOPOLD: And you screamed.
28 D CATHERINE: Of course I screamed.
29 D LEOPOLD: Mr. Ngu-- Mr. Nguyen-Hartmann, you ran in first.
30 D TOBY: I was in the kitchen.
31 D BRUNO: You were in the hallway.
32 D TOBY: I was walking through the hallway to the kitchen.
33 D CLEMENTINE: He had his shoes on.
34 D TOBY: So?
35 D CLEMENTINE: Now he's in his socks.
* 36 A ¶ Silence.
* 37 A The stove ticks.
* 38 A A clock chimes, then another, a few seconds out of step.
39 D LEOPOLD: Mr. Nguyen-Hartmann, where are your shoes?
40 D TOBY (low): By the door.
41 D LEOPOLD: Then why did you take them off?
42 D TOBY: Because they were wet.
43 D IMOGEN: Wet from what?
44 D TOBY: The deck. Rain.
45 D CATHERINE (to herself): The deck. The deck. Of course.
46 D LEOPOLD: Sister Imogen, you were at the window.
47 D IMOGEN: I was praying.
48 D LEOPOLD: For how long?
49 D IMOGEN: Until I heard the scream.
50 D LEOPOLD: And what did you see?
51 D IMOGEN: The canal.
52 D BRUNO: There's nothing to see on the canal at night.
53 D IMOGEN: There was a boat.
54 D LEOPOLD: What boat?
55 D IMOGEN: A small one. With one oar.
* 56 A ¶ The clocks chime again, all together, a ragged, solemn chord.
57 A Clementine opens her shoebox, lifts out a single wet shoe.
58 A Everyone stares at it.
59 D CLEMENTINE: It was on the deck. I found it.
60 D TOBY: That's not mine.
61 D CLEMENTINE: It's a man's. Size eleven.
62 D BRUNO (sitting up): That's mine.
63 D LEOPOLD: Mr. Adeleke-Fischer.
64 D BRUNO: It's mine. I lost it last week.
65 D LEOPOLD: You said you were asleep.
66 D BRUNO: I was asleep.
67 D LEOPOLD: In one shoe.
68 D BRUNO: It's a very old habit.
* 69 A ¶ Nobody laughs.
* 70 A The rain slows.
71 D LEOPOLD: Everyone, please, stay calm.
72 D CATHERINE (quietly): I am very calm.
73 A ¶ She picks up the poker from the stove and holds it loosely, like a conductor's baton.
74 D LEOPOLD: Madame, put that down.
75 D CATHERINE: Of course.
76 A ¶ She doesn't.

### SCENE s02060 | INT. GRAND HOTEL - PENTHOUSE SUITE - NIGHT
Detected names (may be incomplete or contain aliases): GENEVIEVE MONTAGUE-OSEI, MASKED MAN, LUCIEN FAIRWEATHER-ODUYA
* 1 A ¶ Gilded mirrors.
* 2 A A white piano.
* 3 A A cocktail cabinet inlaid with mother-of-pearl.
* 4 A French windows open on a balcony, and beyond it a city of lights.
5 A ¶ A figure in a tuxedo and a domino mask kneels at a wall safe behind a painting, working a stethoscope against its steel face.
6 A He is lean, gloved, silent.
* 7 A ¶ The doorknob turns.
8 A He freezes.
* 9 A The painting drops back over the safe.
10 A He slides behind a velvet curtain.
11 A ¶ A woman enters: GENEVIEVE MONTAGUE-OSEI (50s, evening gown, a glass of champagne in one hand).
12 A She flicks on a lamp.
13 A She sets down her glass on the piano.
14 A She crosses to the painting.
15 A Adjusts it by a half inch.
16 D GENEVIEVE (without turning): You may come out. I can smell the rubber.
* 17 A ¶ The curtain stirs.
18 A The MASKED MAN steps out, hands raised, glove squeaking.
19 D MASKED MAN: Madame.
20 D GENEVIEVE: Your name.
21 D MASKED MAN: That would be unwise.
22 D GENEVIEVE: Then I shall call you Monsieur Curtain.
23 D MASKED MAN: Charming.
24 A ¶ She lifts the champagne, sips, studies him over the rim.
25 D GENEVIEVE: You are very good. The alarm is quiet.
26 D MASKED MAN: I had help.
27 D GENEVIEVE: The bellhop?
28 D MASKED MAN: The night manager.
29 D GENEVIEVE: Ah. Lucien. He has always been lazy.
30 A ¶ She walks around him in a slow circle.
31 A He turns to follow.
32 A They halt, face to face, close enough to touch.
33 D GENEVIEVE [CONT'D]: What is it you want?
34 D MASKED MAN: Nothing that belongs to you.
35 D GENEVIEVE: Everything in this room belongs to me.
36 D MASKED MAN: Not the diamonds.
37 D GENEVIEVE (smiling): Ah. You know about the diamonds.
38 D MASKED MAN: I know they're not real.
39 A ¶ The smile fades.
* 40 A A beat.
41 A Then he lunges for the painting; she smashes her glass against the piano and slashes at him with the stem.
42 A He ducks, spins, wrenches the painting down.
43 A She grabs his arm.
44 A They stagger, crash into the cocktail cabinet, and bottles shatter.
45 A ¶ He gets the painting.
46 A She gets the mask.
* 47 A It tears away.
48 A Beneath it: the face of a man in his sixties, lined, gentle.
49 A LUCIEN FAIRWEATHER-ODUYA, the night manager, panting.
50 D GENEVIEVE [CONT'D] (whispering): Lucien.
51 D LUCIEN: Genevieve.
52 D GENEVIEVE: You said you would never.
53 D LUCIEN: You said the diamonds were real.
54 A ¶ They stand, ruined, among the glass.

### SCENE s02061 | INT. LUNAR DOME GREENHOUSE - STATION NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ZARA ODUYA-LINDQVIST, BARNABY TREMAINE-OKORO, SOLOMON ADEBAYO-KRAUSE, WOMAN
* 1 A ¶ A glass cathedral of mist.
* 2 A Rows of dwarf wheat under pale blue lights.
* 3 A Beyond the dome's curve, a black sky and a blue Earth, small and unconcerned.
4 A ¶ CAPTAIN ZARA ODUYA-LINDQVIST (50s, close-cropped silver hair, a station jacket worn through at the elbows) stands at a central console, one hand flat on the glass, watching a tiny green number tick down.
5 A Her engineer, BARNABY TREMAINE-OKORO (40s, bearded, a spanner in his belt), wrestles with an access panel.
6 A ¶ At a bench, a young botanist, SOLOMON ADEBAYO-KRAUSE (20s, wire-rimmed glasses, a tablet in each hand), sorts seed trays.
7 D ZARA (to nobody): Eleven minutes.
8 D BARNABY: It's eleven minutes to what?
9 D ZARA: To the air scrubbers failing.
10 D SOLOMON: Is that what the alarm was?
11 D ZARA: That is what the alarm is.
12 A ¶ Barnaby pulls the panel loose.
* 13 A It clangs on the deck.
* 14 A Blue sparks spit from the wiring beneath.
15 D BARNABY: I can bypass it.
16 D ZARA: How long?
17 D BARNABY: Four minutes.
18 D ZARA: Do it in three.
19 D SOLOMON: Captain, I can do it faster.
20 D BARNABY: Don't touch it, kid.
21 A ¶ Zara and Solomon both turn.
22 A Barnaby's hands are already inside the panel.
23 D BARNABY [CONT'D]: I know what I'm doing.
24 D ZARA: Solomon, the seeds.
25 D SOLOMON: What about them?
26 D ZARA: They go in the airlock. If the scrubbers die, they go with us.
27 D SOLOMON: With us, where?
28 D ZARA: Anywhere.
29 A ¶ Solomon scoops the trays into his arms.
* 30 A The dome lights flicker.
* 31 A A siren whoops, then falls silent.
32 A The three of them hold perfectly still, listening to the long hush of the failing air.
* 33 A ¶ Then a door at the dome's edge clicks open.
34 A A WOMAN in a gray station suit and a respirator steps through, a canister in each hand.
35 A She is breathing hard.
36 D WOMAN (muffled through the mask): I found the leak. Where is the captain?
37 A ¶ Zara raises a hand.
38 A The Woman drops both canisters on the console with a ringing clang, and wrenches off her mask.
39 A Underneath: Zara's own face, twenty years younger.
