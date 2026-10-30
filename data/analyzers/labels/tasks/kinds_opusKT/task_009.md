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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0009.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00051 | INT. AMATEUR THEATER GREEN ROOM - NIGHT
Detected names (may be incomplete or contain aliases): THEODORA, ALCOTT-WELLS, BILLIE, FAIRCHILD, ALOYSIUS PENDERGAST-MWANGI, GWENDOLINE POPE, ARCHIE, TREMAINE, RODERICK SPARROW-LUND
* 1 A ¶ Costumes hang in clouds.
* 2 A Powder, hairspray, a half-eaten sandwich.
* 3 A A speaker on the wall hisses with the thin sound of an audience settling.
4 A ¶ THEODORA "TEDDY" ALCOTT-WELLS (50s, tragedy mask on her forehead) stands at the mirror adjusting a Roman toga.
5 A Behind her, her understudy WILHELMINA "BILLIE" FAIRCHILD (20s, script clutched like a rosary) mouths lines to herself.
6 A Across the room, the director ALOYSIUS PENDERGAST-MWANGI (60s, cravat, velvet jacket) wrings his hands.
7 A At the costume rack, wardrobe mistress GWENDOLINE POPE (40s, pins in her mouth) hems a cape.
8 A Beside her sit the leading men: ARCHIBALD "ARCHIE" TREMAINE (30s, a laurel wreath), and RODERICK SPARROW-LUND (40s, a plastic sword).
9 D THEODORA: She's late. Where is she?
10 D ALOYSIUS: Who?
11 D THEODORA: Calpurnia. The lead.
12 D ALOYSIUS: She's in the lavatory.
13 D THEODORA: She's been in the lavatory for forty minutes.
14 D ARCHIE: Maybe she fell in.
15 D RODERICK: That's not funny, Archie.
16 D ARCHIE: It's a little funny.
17 D GWENDOLINE (through pins): Hold still, Teddy.
18 D THEODORA: I am still.
19 D BILLIE: Mr. Pendergast-Mwangi, I know her lines.
20 D ALOYSIUS: Darling, you are an understudy.
21 D BILLIE: I'm a good understudy.
22 D RODERICK: She really is, Aloysius.
23 D ARCHIE: She did the balcony scene in her sleep last week.
24 D ALOYSIUS: Because that is an excellent use of sleep.
* 25 A ¶ The speaker hisses louder: the house lights dim, applause rises.
26 D THEODORA: Aloysius, she's not coming.
27 D ALOYSIUS: She will.
28 D THEODORA: She will not.
29 D GWENDOLINE: She will if I go and get her.
30 A ¶ She spits the pins into her palm and marches out.
31 D ARCHIE: Billie, you're up.
32 D BILLIE: Me?
33 D RODERICK: Take the wreath.
34 A ¶ Archie lifts the wreath off his own head and lowers it onto hers.
35 A She stares into the mirror.
36 A Her hands stop shaking.
37 A Gwendoline sails back in, towing a tearful woman in a bathrobe.
38 D GWENDOLINE: Here she is.
39 A ¶ Billie and the woman in the bathrobe look at each other, and Billie hands back the wreath without a word.

### SCENE s00052 | INT. COURTROOM, MARITIME LAW DIVISION - DAY
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABELARD-OKONKWO, PERCIVAL GRIMSDYKE, BEATRIX NAKAMURA-FLYNN
* 1 A ¶ Dark oak.
* 2 A Brass fittings.
* 3 A A model of a container ship sits on the evidence table, its cranes frozen mid-lift.
* 4 A Salt-water stains the carpet near the jury box, a leak the clerk has long stopped noticing.
5 A ¶ JUDGE HORTENSE ABELARD-OKONKWO (60s, half-moon glasses, voice like creaking rope) presides.
6 A At the plaintiff's table stands attorney PERCIVAL GRIMSDYKE (50s, pinstripe, cane) with a thick binder.
7 A Across the aisle, defense counsel BEATRIX NAKAMURA-FLYNN (40s, severe bun, red pen) leans casually on her chair.
8 D JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, you may proceed with your closing.
9 D GRIMSDYKE: Thank you, Your Honor.
10 A ¶ He rises slowly, leaning on the cane.
11 A He addresses the empty jury box as though it were full.
12 D GRIMSDYKE [CONT'D] (to the gallery): Ladies and gentlemen, this case is about a ship. It is also about a promise.
13 D NAKAMURA-FLYNN (muttering): It's about a bill of lading.
14 D GRIMSDYKE: The Meridian Star sailed from Rotterdam with four thousand containers. Four thousand promises. Not one was delivered intact.
15 D JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, I hope you're going somewhere with this.
16 D GRIMSDYKE (to the Judge): Yes, Your Honor.
17 A ¶ He lifts the model ship from the table and turns it in his hands.
18 D GRIMSDYKE [CONT'D]: My client alleges that Ms. Nakamura-Flynn's client knowingly loaded cargo in violation of Article Nine.
19 D NAKAMURA-FLYNN: Objection. Speculation.
20 D JUDGE ABELARD-OKONKWO: Sustained. Rephrase.
21 D GRIMSDYKE: My client alleges that the knowledge was there.
22 D NAKAMURA-FLYNN (standing): Objection. Still speculation.
23 D JUDGE ABELARD-OKONKWO: Overruled. I'm curious.
24 A ¶ Nakamura-Flynn sits, tapping her pen.
25 D GRIMSDYKE (to himself): Finally.
26 A ¶ He sets the model down gently.
* 27 A It tips on its stand, a crane snaps off, and the sound ricochets around the silent room.
28 D GRIMSDYKE [CONT'D] (to the gallery): Four thousand promises, ladies and gentlemen. And a clerk who never fixed the leak.
29 D JUDGE ABELARD-OKONKWO: Mr. Grimsdyke.
30 D GRIMSDYKE: Your Honor?
31 D JUDGE ABELARD-OKONKWO: That's enough.
32 A ¶ He bows, retrieves his cane, and sits.
33 A Nakamura-Flynn rises, buttons her jacket, and walks calmly to the evidence table.
34 A She picks up the broken crane and weighs it in her palm.
35 D NAKAMURA-FLYNN (to the Judge): Your Honor, my learned friend has just proven my case.
36 D JUDGE ABELARD-OKONKWO: Do enlighten us.
37 D NAKAMURA-FLYNN (to the room): A crane cannot be loaded wrong. It can only be broken. And broken things get insured.
38 A ¶ Grimsdyke closes his eyes.
39 A The judge exhales through her nose, and removes her glasses.
40 D JUDGE ABELARD-OKONKWO: We will recess for lunch.

### SCENE s00053 | INT. OPEN-PLAN OFFICE, SYNERGY HOLDINGS - DAY
Detected names (may be incomplete or contain aliases): RAY, FENNIMORE-SALAZAR, DELPHINE OKAFOR-LUND, INTERN QUENTIN BOSCH
* 1 A ¶ Cubicles.
* 2 A Motivational posters.
* 3 A A broken ficus.
* 4 A A whiteboard reads: PIVOT TO JOY.
5 A ¶ RAYMOND "RAY" FENNIMORE-SALAZAR (40s, vice president of Vibes, a lanyard of lanyards) claps his hands.
6 A DELPHINE OKAFOR-LUND (30s, tired, double-fisted coffee) watches from her desk.
7 A Next to her sits INTERN QUENTIN BOSCH (20s, tie from a high school dance).
8 D RAY: Team! Quick sync.
9 D DELPHINE: It's four-fifty-nine.
10 D RAY: Perfect time for a sync!
11 D QUENTIN (whispering): He means a meeting.
12 D RAY: A circle-back! A deep dive! A moment of alignment!
13 D DELPHINE: It's a Friday.
14 D RAY: Friday is the new Monday.
15 A ¶ He draws a giant circle on the whiteboard, then another, then a third.
16 A Delphine and Quentin stare, appalled.
17 D RAY [CONT'D]: Who can tell me what this means?
18 D QUENTIN: ^Three circles.
19 D DELPHINE: ^Three circles.
20 A ¶ They say it together.
21 A Ray points at them both, delighted.
22 D RAY: Exactly! The Triple Loop!
23 D DELPHINE: Ray.
24 D RAY: Yes?
25 D DELPHINE: I'm going home.
26 D RAY (crestfallen): Is that a no on the loop?
27 A ¶ She gathers her bag.
28 A Quentin, loyal, stays seated.
29 D QUENTIN: I like the loop, Ray.
30 A ¶ Ray beams.
31 A Delphine pauses in the doorway.
32 D DELPHINE: Quentin. Run.

### SCENE s00054 | EXT. DUST-CHOKED TRADING POST, HIGH PLAINS - AFTERNOON
Detected names (may be incomplete or contain aliases): SALT, NAILS, SPARROW, CROWFOOT, POSTMISTRESS CLEMENTINE VANDERMEER, SHERIFF AUGUSTINE BELL, WILLET FAIRBANKS
* 1 A ¶ A sagging porch.
* 2 A A horse trough green with scum.
* 3 A Wind pushes tumbleweeds past hitching posts that have not held a horse in weeks.
* 4 A A hand-painted sign reads: SALT - NAILS - SOULS.
5 A ¶ ELIJAH "SPARROW" CROWFOOT (30s, braided hair, buckskin vest) leans on a porch rail, whittling.
6 A Inside the doorway sits POSTMISTRESS CLEMENTINE VANDERMEER (60s, gingham, shotgun across her lap) with a ledger.
7 A A rider approaches: SHERIFF AUGUSTINE BELL (40s, moustache, sweat-stained hat), trailed by a young deputy, WILLET FAIRBANKS (18, gun belt too big for his hips).
8 A ¶ Bell dismounts and strides to the porch.
9 A Willet slides off his horse, trips over a stirrup, rights himself, and follows, one hand on his holster.
10 D BELL: Sparrow.
11 D SPARROW: Sheriff.
12 D BELL: You were seen near the Henderson place.
13 D SPARROW: Lot of people were near the Henderson place.
14 D CLEMENTINE (from the doorway): Gus, that boy was at my counter all morning.
15 D BELL: Was he?
16 D CLEMENTINE: Bought nails.
17 D BELL: How many?
18 D CLEMENTINE: Enough for a coffin.
* 19 A ¶ A cold quiet.
20 A Sparrow continues to whittle.
21 A Willet licks his lips.
22 D WILLET: Sheriff, should I--
23 D BELL: No.
24 A ¶ Sparrow finishes the carving and holds it up: a tiny wooden bird.
25 A He sets it on the rail between them.
26 D SPARROW: I didn't kill him.
27 D BELL: No one said you did.
28 D SPARROW: Then why's the boy sweating?
29 A ¶ Everyone looks at Willet.
30 A He blanches.
31 D WILLET: It's hot.
32 D CLEMENTINE: ^It's ninety degrees.
33 D BELL: ^It's ninety degrees.
34 A ¶ They speak together, and Bell shoots her a look.
35 A She shrugs, rocks the shotgun on her lap, and says nothing more.
36 A ¶ Sparrow slides the bird toward Willet.
37 A The boy stares at it, shaking, and as Bell turns to him, the wind drops.
* 38 A Even the tumbleweeds stop rolling.

### SCENE s00055 | INT. UNDERGROUND PARKING STRUCTURE, LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IGNACIO PALAZZO-MENSAH, COLLETTE ARMSTRONG-DUBOIS, INFORMANT, BRIDGET QUILLFEATHER, DETECTIVE MARCUS OYELARAN-STROUD, SOPHRONIA HALLIWELL
* 1 A ¶ Concrete columns.
* 2 A Dripping pipes.
* 3 A Fluorescent tubes that buzz and flicker.
* 4 A Oil stains like ink blots.
* 5 A At the far end, a stairwell door hangs ajar.
6 A ¶ DETECTIVE IGNACIO PALAZZO-MENSAH (40s, trench coat, a limp, a gun held low) slips between two parked sedans.
7 A Behind him, FBI analyst COLLETTE ARMSTRONG-DUBOIS (30s, ballistic vest over a cardigan) clutches a laptop.
8 A In the shadows, a figure in a gray hoodie crouches: the INFORMANT, BRIDGET QUILLFEATHER (20s, nervous eyes, pale as paper).
9 A A ways off, DETECTIVE MARCUS OYELARAN-STROUD (50s, radio at his collar) circles the perimeter, and in a car at the exit ramp, driver SOPHRONIA HALLIWELL (30s, headset, steady) watches the mirror.
10 D IGNACIO (whispering): Bridget, where's the package?
11 D BRIDGET: Level three. In the van.
12 D COLLETTE: Level three isn't on the schematic.
13 D BRIDGET: It's not on anything.
14 D MARCUS (into radio): All units, hold positions.
* 15 A ¶ A steel door clangs somewhere.
16 A Everyone freezes.
* 17 A A distant engine idles.
* 18 A Headlights sweep across the pillars and swing away.
19 D IGNACIO (quietly, to himself): Easy.
20 A ¶ Collette types something silent.
21 A Bridget wipes her sweaty palms on her knees.
22 D SOPHRONIA (into headset): Exit ramp clear. For now.
23 D BRIDGET: They'll see the lights.
24 D IGNACIO: They already know we're here.
25 D BRIDGET: Then why--
* 26 A ¶ A gunshot cracks across the garage.
* 27 A A windshield bursts.
28 A Ignacio shoves Bridget flat.
29 A Collette dives behind a column, laptop sliding across the concrete.
30 A Marcus sprints toward the sound.
31 A Sophronia guns the engine and the car leaps forward.
* 32 A ¶ Another shot.
* 33 A Another.
* 34 A The echoes pile on each other until the whole structure rings like a struck bell.
35 D MARCUS (shouting): Contact! North ramp!
36 D IGNACIO (to Collette): Get her out!
37 D COLLETTE: What about you?
38 D IGNACIO: Go!
39 A ¶ Collette grabs Bridget's hand and they run for the stairwell, ducking low between sedans.
40 A Ignacio rises, fires twice, and ducks.
41 D SOPHRONIA (over radio): Marcus, Ignacio, I'm coming around.
42 A ¶ Her car shrieks around a column and slams to a stop in front of Collette and Bridget.
* 43 A The back door flies open.
44 D SOPHRONIA [CONT'D] (through the window): Get in!
45 A ¶ They pile into the back seat.
46 A Ignacio sprints, vaults the hood, and drops into the front.
47 A Marcus dives in last.
* 48 A The car lurches forward as bullets rake the trunk.
49 D MARCUS: Drive!
50 D SOPHRONIA: I am driving!
* 51 A ¶ The car roars up the ramp and out into the rain.

### SCENE s00056 | INT. FUNERAL PARLOR BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): LARRY, PIETRZAK, VERONICA CHEN-ADEYEMI, MILO, TOBIAS WREN, CALLER
* 1 A ¶ Wood paneling.
* 2 A Lilies in a vase.
* 3 A A desk lamp turned low.
* 4 A A phone sits on the blotter like a sleeping animal.
5 A ¶ LAWRENCE "LARRY" PIETRZAK (50s, undertaker's black suit, tie loosened) counts bills at the desk.
6 A In the armchair sits his partner, VERONICA CHEN-ADEYEMI (40s, perfect posture, gloves on).
7 A On the sofa, a boy, MILO (teen, school blazer), turns an unlit candle over in his hands.
8 A At the window stands a figure, silent, looking out at the parking lot: TOBIAS WREN (30s, long coat).
* 9 A ¶ The phone rings.
10 A Veronica lifts her eyes.
11 A Larry stops counting.
12 D LARRY: Leave it.
13 D VERONICA: It's the fourth time.
14 A ¶ Larry's thumb works the edge of the bills.
15 A Milo sets the candle down.
16 D MILO: Should I--
17 D LARRY: No.
* 18 A ¶ The phone rings.
* 19 A Rings.
* 20 A Rings.
21 A Wren turns from the window, watches the receiver, and picks it up without speaking.
22 A He listens.
* 23 A A thin voice crackles through.
24 D CALLER [V.O.] (over phone): Is the arrangement still on for tomorrow?
25 A ¶ Wren looks at Larry.
26 A Larry nods once.
27 D WREN (into phone): It is.
28 A ¶ He hangs up.
29 A Veronica unfolds her gloved hands, and, for the first time, Larry meets Milo's eyes.

### SCENE s00057 | EXT. ICE-LOCKED RIVER BARGE, ARCTIC - DAWN
Detected names (may be incomplete or contain aliases): ASTRID BJORNSDOTTIR-NKEMELU, DMITRI KOWALCZYK-ROSS, TOMAS, ISABELLA VERRIDGE-LIM, OKSANA PETRENKO-ABARA
* 1 A ¶ A flat iron barge, locked in white.
* 2 A Its hull creaks.
* 3 A Wind blows ice-dust sideways.
* 4 A A tarp stretched between two crates makes a miserable shelter.
5 A ¶ Five figures huddle inside it.
6 A ASTRID BJORNSDOTTIR-NKEMELU (40s, fur hood, frost-rimmed eyebrows) pours the last of the tea into a tin cup.
7 A Next to her, her brother-in-law DMITRI KOWALCZYK-ROSS (50s, giant gloves) feeds a dying camp stove.
8 A On the far side, a young couple, TOMAS and ISABELLA VERRIDGE-LIM (20s each, tangled together under one blanket), whisper.
9 A At the tarp's mouth, their guide, OKSANA PETRENKO-ABARA (30s, rifle slung, compass in hand), squints at the horizon.
10 D ASTRID: How long?
11 D OKSANA: The ice should break by noon.
12 D DMITRI: It's been noon for three days.
13 D TOMAS (to Isabella): You okay?
14 D ISABELLA: I'm fine.
15 D TOMAS: You're shivering.
16 D ISABELLA: So are you.
17 D ASTRID: Dmitri, give her your gloves.
18 D DMITRI: She has gloves.
19 D ASTRID: Not good ones.
20 A ¶ Dmitri strips off the enormous gloves and tosses them to Isabella, who catches them against her chest.
21 D ISABELLA: Thank you.
22 D DMITRI: Don't mention it.
23 D OKSANA (from the tarp mouth): Quiet. All of you.
* 24 A ¶ A deep crack booms from under the barge.
* 25 A The whole deck shudders.
26 A Dmitri curses.
27 A Astrid grabs the tin cup before it spills, but Tomas and Isabella, tangled in the blanket, roll toward the gap and Oksana lunges to haul them back from the edge.
28 D OKSANA [CONT'D]: Back! Away from the rail!
29 D TOMAS: What is it?
30 D OKSANA: The river's moving.
31 D DMITRI: Moving? The river's frozen.
32 D OKSANA: Not anymore.
* 33 A ¶ The barge tilts, a slow, enormous lean.
34 A They scramble over crates.
* 35 A Ice groans like a living thing.
* 36 A Water, black and glassy, opens in a long line beside the hull.
37 D ASTRID (shouting): Everyone to the stern!
38 A ¶ They stumble across the tilting deck, Dmitri carrying the stove, Tomas pulling Isabella, Oksana covering the rear.
39 A Astrid reaches the stern first and throws a rope to the ice beyond.
* 40 A ¶ Then the barge rights itself with a thunderous slap, and the lean is gone.
* 41 A Ice-dust swirls.
* 42 A The river, free now, carries them forward.
43 D DMITRI (laughing, breathless): Noon.
44 D OKSANA: Told you.

### SCENE s00058 | INT. COMPANY BREAK ROOM, INNOVATEX CORP - DAY
Detected names (may be incomplete or contain aliases): GLORIA BANKOLE-VANCE, COLIN DRUMMOND-PARK, SHANTELLE OKONJO-REID
* 1 A ¶ Beige walls.
* 2 A A coffee machine with a handwritten sign: DO NOT USE.
* 3 A A bulletin board layered with expired memos.
* 4 A The microwave hums.
* 5 A A mini fridge stickered with passive-aggressive notes.
6 A ¶ GLORIA BANKOLE-VANCE (50s, shoulder pads, mug reading WORLD'S OKAYEST BOSS) refills her mug from a thermos she brought herself.
7 A Across the table sits COLIN DRUMMOND-PARK (20s, new hire, ironed shirt).
8 A At the sink, SHANTELLE OKONJO-REID (30s, hoodie, headphones) scrubs a mug that isn't hers.
9 D GLORIA: Colin, welcome to the family.
10 D COLIN: Thank you, Gloria.
11 D GLORIA: We do synergy here.
12 D COLIN: Great.
13 D GLORIA: We also do Fridays.
14 D COLIN: Fridays?
15 D SHANTELLE (over her shoulder): She means cake.
16 D GLORIA: I mean team-building.
17 D SHANTELLE: It's cake.
18 A ¶ Gloria beams.
19 A Colin tries to look as though he understands.

### SCENE s00059 | INT. PET STORE, REPTILE SECTION - DAY
Detected names (may be incomplete or contain aliases): BARN, OKAFOR-LINDGREN, JUNIPER VASQUEZ-ABARA, EZEKIEL PRUITT-HALE, DESDEMONA KILLINGSWORTH, TIBBY, MOREAU-WELLS
* 1 A ¶ Heat lamps.
* 2 A Terrariums.
* 3 A A sign: PLEASE DO NOT KNOCK ON GLASS.
* 4 A The air smells of mealworms.
5 A ¶ BARNABY "BARN" OKAFOR-LINDGREN (30s, apron, name tag crooked) restocks crickets.
6 A His coworker JUNIPER VASQUEZ-ABARA (20s, pink hair, bandaged thumb) leans on the counter.
7 A A customer, MR. EZEKIEL PRUITT-HALE (70s, tweed cap, binocular case), peers into a tank.
8 A At the back door, the manager, DESDEMONA KILLINGSWORTH (40s, clipboard, cheerful menace), rattles keys.
9 A And behind the register, a nervous newcomer, TIBERIUS "TIBBY" MOREAU-WELLS (teen, first shift, sweating through his shirt), tries to look busy.
10 D BARN: Juniper, where's the iguana?
11 D JUNIPER: In his tank.
12 D BARN: Which tank?
13 D JUNIPER: The big one.
14 D BARN: That one's empty.
15 D JUNIPER (slowly): Oh.
16 A ¶ They look at each other.
17 A Both turn toward Mr. Pruitt-Hale, who is still peering into the empty tank.
18 D EZEKIEL: Fascinating. Where's the lizard?
19 D TIBBY (very high): He's resting!
20 D DESDEMONA: Tibby, don't lie to the customer.
21 D TIBBY: I'm not lying! I'm hopeful!
22 D EZEKIEL: Young man, I've bought four geckos from this store. I know when a tank is vacant.
23 D BARN: Sir, it's a rare species.
24 D EZEKIEL: Camouflaged?
25 D JUNIPER: Extremely.
* 26 A ¶ A thump from the ceiling.
27 A All five look up.
* 28 A A long green tail hangs from a ceiling tile, swaying gently.
29 A Tibby faints into the cricket display.
30 A Desdemona sighs and heads for a ladder.

### SCENE s00060 | INT. SLEEPING CAR, NIGHT TRAIN - NIGHT
Detected names (may be incomplete or contain aliases): BARNABAS HOLT, LEOPOLD VANCE, ISADORA FEYERABEND
* 1 A ¶ Brass lamps swing with the rails.
* 2 A Rain beads the window.
* 3 A On the table between the seats, a chess set mid-game and an untouched bottle of wine.
4 A ¶ BARNABAS HOLT (50s, silver beard) leans back with his hands folded.
5 A Opposite him sits LEOPOLD VANCE (50s, silver moustache), staring at the board.
6 A At the door, the conductor, ISADORA FEYERABEND (30s, brass buttons), has just finished punching tickets.
7 D BARNABAS: Your move.
8 D LEOPOLD: I know.
9 D ISADORA: Gentlemen, we reach Vienna at dawn.
10 D LEOPOLD: Plenty of time to lose.
11 D BARNABAS: Time for you to lose.
12 D ISADORA: You've both been playing since Prague.
13 D LEOPOLD: He cheats.
14 D BARNABAS: He sulks.
15 D ISADORA: One of you left this on the floor.
16 A ¶ She holds up a small brass key.
17 A Barnabas reaches for it.
18 A Leopold reaches too.
19 A They both stop, hands in the air.
20 A He looks at the key.
21 A He looks at the other man.
22 A He knows.
23 D LEOPOLD: That opens the trunk in the baggage car.
24 D BARNABAS: Does it?
25 D ISADORA: It does. And the trunk is empty.
26 A ¶ She closes the door behind her.
* 27 A The train rattles on through the dark.

### SCENE s00061 | EXT. TRENCH LINE, RAIN-SOAKED FIELD - NIGHT
Detected names (may be incomplete or contain aliases): PENROSE, SERGEANT BAPTISTE ONWUACHI, PRIVATE ELIAS FJELDSTAD-MORENO
* 1 A ¶ A sheet of rain.
* 2 A Barbed wire sags in the flare light.
* 3 A Mud sucks at every boot.
4 A ¶ LIEUTENANT ARCHIBALD "ARCHIE" PENROSE (30s, helmet strap loose, flashlight taped) crouches with a map.
5 A SERGEANT BAPTISTE ONWUACHI (40s, thick forearms, helmet dented) checks his rifle.
6 A PRIVATE ELIAS FJELDSTAD-MORENO (19, trembling, bayonet fixed) hugs the trench wall.
7 D PENROSE: Sergeant, status?
8 D ONWUACHI: Half the men are asleep.
9 D FJELDSTAD-MORENO: I'm not asleep.
10 D ONWUACHI: Nobody said you were.
11 D PENROSE: Elias, keep your head down.
12 D FJELDSTAD-MORENO: Yes sir.
13 D ONWUACHI (to the trench): Fix bayonets! On my word!
* 14 A ¶ A whistle shrieks.
15 A Penrose and Onwuachi look up as one.
16 A Elias presses his forehead to the mud.
17 D PENROSE (muttering): Dear God.
18 D ONWUACHI: Now!
19 A ¶ The whole trench erupts.
20 A Men climb out of the earth.
21 A Elias stays frozen until Onwuachi hauls him up by the collar and drags him into the dark.

### SCENE s00062 | INT. ROLLER DERBY RINK, LOCKER ROOM - EVENING
Detected names (may be incomplete or contain aliases): BRUISER, OKONKWO-LARSSON, JOSEFINA ABERNATHY-SILVA, HORTY, BELLAMY-OKORO
* 1 A ¶ Rows of dented lockers.
* 2 A Skates on benches like sleeping animals.
* 3 A A banner on the wall: THE IRON MAIDENS OF MERIDIAN.
* 4 A The air smells of liniment and nerves.
5 A ¶ BRYNHILDE "BRUISER" OKONKWO-LARSSON (30s, shoulders like a door, face paint half-applied) laces her skates with ferocious focus.
6 A Beside her, rookie JOSEFINA ABERNATHY-SILVA (19, stiff new helmet, wide eyes) copies every move.
7 A Across the room, coach HORTENSIA "HORTY" BELLAMY-OKORO (50s, whistle, tracksuit) leans against a locker with a clipboard.
8 D HORTY: Ladies. Last bout of the season.
9 D BRUISER: We know.
10 D HORTY: Josefina, this is your first jam.
11 D JOSEFINA: I know.
12 D HORTY: You'll be nervous.
13 D JOSEFINA: I'm not nervous.
14 D BRUISER: She's nervous.
15 D HORTY: Good. Nerves keep you alive.
16 A ¶ She blows the whistle once, softly, as a kind of benediction.
17 A Bruiser stands, rolling her neck.
18 D BRUISER: Come on, kid. Stay on my hip.
19 D JOSEFINA: Where's your hip?
20 D BRUISER: Wherever it is when you need it.
21 A ¶ They stack fists.
* 22 A The crowd roars outside.
* 23 A A door bangs.
24 A The three women walk out together into a tunnel of light.

### SCENE s00063 | EXT. FLOATING MARKET ON THE SKY-LAKE OF AELDRATH - DAWN
Detected names (may be incomplete or contain aliases): THESSALONIKE VANTERPOOL-ORUNMILA, CORNELIUS ABRAHAM-WYNNE, MORWENNA
* 1 A ¶ Boats hang in the air on ropes of braided cloud.
2 A Merchants shout over a sea of drifting lanterns.
* 3 A Gulls the color of silver coins wheel overhead.
* 4 A Far below, a moonlit ocean.
* 5 A ¶ A skiff drifts toward the market's edge.
6 A At its tiller sits THESSALONIKE VANTERPOOL-ORUNMILA (30s, battered leather coat, a cutlass at her belt).
7 A Behind her, the apprentice-mage CORNELIUS ABRAHAM-WYNNE (19, ink-stained fingers, spellbook hugged).
8 A Between them, hooded and silent, a cloaked woman waits: this is MORWENNA (age unknown, eyes like twin moons).
9 D THESSALONIKE: Hold on.
10 D CORNELIUS: To what?
11 D THESSALONIKE: Anything.
* 12 A ¶ The skiff slams into the dock.
13 A Cornelius pitches forward and Morwenna catches him by the collar without opening her eyes.
14 D MORWENNA: Careful, child.
15 D CORNELIUS: I'm trying.
16 D MORWENNA: Try harder.
17 D THESSALONIKE (tying off the boat): We have until noon. Cornelius, you find the spice merchant. Morwenna, the cloud-weaver. I'll find the passage.
18 D CORNELIUS: What passage?
19 D THESSALONIKE: The one that isn't on the map.
20 D MORWENNA: It never is.
21 A ¶ They split.
22 A Thessalonike weaves through the crowd, hand on her cutlass.
23 A Cornelius ducks under a banner of dried starfish.
24 A Morwenna drifts like smoke, unhurried, and stalls fall quiet as she passes.
25 A ¶ At the spice stall, Cornelius meets a vendor with ten arms.
26 A Everything he says comes out in a nervous rush.
27 D CORNELIUS [CONT'D] (to the vendor): Er, hello, I need saffron. The sky kind. Not the ground kind.
28 A ¶ At the weavers' stall, Morwenna lifts a veil of mist, and the old woman behind it kneels.
29 D MORWENNA (quietly): Don't. I am not what I was.
30 A ¶ Thessalonike, meanwhile, finds an iron door half-sunk in a wall of cloud.
31 A She puts her palm on it.
* 32 A It hums.
33 A She grins.
34 D THESSALONIKE (to herself): There you are.
35 A ¶ Behind her, Cornelius and Morwenna arrive, panting, arms full of paper-wrapped parcels.
36 D CORNELIUS: Got the saffron!
37 D MORWENNA: Got the weaving.
38 D THESSALONIKE: Got the door.
39 A ¶ They stare at it.
* 40 A The hum swells to a chord, and the iron door swings open on a stair of falling stars.
41 D CORNELIUS: Is that safe?
42 D MORWENNA: Nothing is.
43 A ¶ Thessalonike steps through first.
44 A Cornelius follows.
45 A Morwenna pauses, glances back over the market, and whispers to the bright, indifferent sky.
46 D MORWENNA [CONT'D]: Forgive us.

### SCENE s00064 | INT. SAFE-DEPOSIT VAULT, PRIVATE BANK - NIGHT
Detected names (may be incomplete or contain aliases): GIDEON ASHWORTH-DEMBELE, LUCRETIA FONTAINE-OKAFOR
* 1 A ¶ Rows of brass boxes under a vaulted ceiling.
* 2 A A single green banker's lamp.
* 3 A The air is cold and smells of old metal.
4 A ¶ GIDEON ASHWORTH-DEMBELE (50s, impeccable suit, silver cufflinks) stands before an open drawer, fingers curled around a velvet pouch.
5 A Facing him, in the narrow aisle, LUCRETIA FONTAINE-OKAFOR (40s, black gloves, revolver steady) blocks his exit.
6 A ¶ Gideon turns.
7 A Lucretia does not lower the gun.
8 D GIDEON: You're early.
9 D LUCRETIA: You're late.
10 A ¶ Gideon smiles and lifts the pouch.
11 A Lucretia's eyes drop to it.
12 D GIDEON: ^It's not what you think.
13 D LUCRETIA: ^It's exactly what I think.
14 A ¶ They speak together, flat, certain.
* 15 A A drip falls somewhere in the dark.
16 D GIDEON: Lucretia. Put it down.
17 D LUCRETIA: You first.
18 A ¶ He opens his fingers.
* 19 A The pouch lands on the marble with a soft chink.
20 A Lucretia exhales, almost relieved, and kicks it toward the wall.
21 A ¶ The gun doesn't waver.

### SCENE s00065 | INT. GRAND HOTEL LOBBY - DAY
Detected names (may be incomplete or contain aliases): CORNY, BELLWEATHER, PRUDENCE, LEOPOLDINA ARCHAMBAULT-DIOP, CALLER
* 1 A ¶ Marble pillars.
* 2 A A revolving door that sighs with each turn.
* 3 A A brass bell on the concierge desk.
4 A A poodle in a rhinestone collar naps under a velvet bench.
5 A ¶ CORNELIUS "CORNY" BELLWEATHER (50s, three-piece suit, monocle) sits in a chair and pretends to read a newspaper.
6 A Across from him on a sofa, his wife PRUDENCE (40s, enormous hat, fan) watches him with mounting suspicion.
7 A At the desk, the concierge LEOPOLDINA ARCHAMBAULT-DIOP (30s, immaculate, bored) files her nails.
8 A ¶ She shifts.
9 A He shifts.
10 A The poodle yawns.
11 D PRUDENCE: Corny, you're holding the paper upside down.
12 D CORNY: Am I?
13 D PRUDENCE: The pictures are standing on their heads.
14 D CORNY: Modern art.
15 A ¶ She snaps her fan.
16 A A telephone on the desk rings, and Leopoldina answers in a voice like warm butter.
17 D LEOPOLDINA: Front desk. Yes, Mr. Bellweather is in the lobby. No, he is not expecting a call.
18 A ¶ Corny rises so quickly the newspaper flies.
19 A He crosses the lobby in three long strides and tries to take the phone from her hand.
20 D LEOPOLDINA [CONT'D] (covering the receiver): Sir, it's for the hotel.
21 D CORNY (whispering): It's for me.
22 D PRUDENCE (from the sofa): Corny, who is it?
23 D CORNY: Nobody! Wrong number!
24 D CALLER [V.O.] (over phone, faint): Corny? It's Fifi. Are you coming up?
* 25 A ¶ Silence.
26 A Leopoldina's eyebrow rises half an inch.
27 A Prudence stands.
28 A The poodle wakes.
29 D PRUDENCE: Corny.
30 D CORNY: She's the dog groomer.
31 D PRUDENCE: At the Grand Hotel.
32 D CORNY: They have a salon.
33 D PRUDENCE: They do not.
34 D LEOPOLDINA: We do not.
35 A ¶ Corny, defeated, takes the receiver.
36 A He puts it to his ear and listens a long moment, then speaks.
37 D CORNY (into phone): I'll be right up. Tell her to bring the poodle.
38 A ¶ Prudence follows his gaze to the dog under the bench.
39 A It wags its tail.
40 A Leopoldina hangs up and, with perfect composure, lifts the brass bell and rings it once.

### SCENE s00066 | INT. HOSPITAL ROOFTOP HELIPAD - DAWN
Detected names (may be incomplete or contain aliases): NATHANIEL OYELOWO-STRAND, NURSE PHILOMENA BRANDT-ADEYEMI, GASPAR LINDQVIST-MBEKI, DISPATCH
* 1 A ¶ Concrete, windsock, a single orange cone.
* 2 A The city spreads below in blue haze.
* 3 A A rusted door clatters open.
4 A ¶ DR. NATHANIEL OYELOWO-STRAND (40s, scrubs, blood on one cuff) steps out, breathing.
5 A Behind him comes NURSE PHILOMENA BRANDT-ADEYEMI (30s, braids, hospital badge swinging).
6 A Nearby, an orderly, GASPAR LINDQVIST-MBEKI (20s, lanky, mop bucket), smokes against the rail.
7 D NATHANIEL: Third night in a row.
8 D PHILOMENA: You keep coming up here.
9 D NATHANIEL: Nobody follows me.
10 D PHILOMENA: I followed you.
11 D GASPAR: So did I. I was here first.
* 12 A ¶ The radio on Philomena's belt crackles.
13 D DISPATCH [V.O.] (over radio): Trauma Two, inbound helicopter, ETA four minutes. Pediatric, severe burns.
14 A ¶ Nathaniel straightens.
15 A Philomena grabs the radio.
16 D PHILOMENA (into radio): Copy. Pad is clear.
17 A ¶ She and Nathaniel look at Gaspar, who drops his cigarette and stamps it out.
* 18 A The windsock snaps taut.
19 D NATHANIEL: Gaspar, the cone.
20 D GASPAR: On it.
21 A ¶ He drags the orange cone aside.
* 22 A In the distance, a speck grows into the rising hammer of rotors.

### SCENE s00067 | INT. REVOLVING RESTAURANT ATOP A SKYSCRAPER - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE KORMANN-DELACROIX, SALOME BRANDT-OYELARAN, WENDELIN ASHFORD-PETROV
* 1 A ¶ The city turns slowly beyond a wall of glass.
* 2 A White tablecloths, low candles.
* 3 A A string quartet plays something sorrowful.
* 4 A Every table is full, except one.
5 A ¶ At that table, three people sit in a tight triangle: AUGUSTINE KORMANN-DELACROIX (50s, charcoal suit, hands always moving), SALOME BRANDT-OYELARAN (40s, emerald dress, cool eyes), and WENDELIN ASHFORD-PETROV (30s, black turtleneck, a briefcase handcuffed to his wrist).
6 D AUGUSTINE: Salome, you look radiant.
7 D SALOME: I look hungry.
8 D WENDELIN: The soup is good.
9 D SALOME: Wendelin, it's soup.
10 D WENDELIN: It's very good soup.
11 D AUGUSTINE (with a laugh): Shall we order?
12 D SALOME: We shall not.
13 A ¶ She sets down her fork.
14 A He lays his napkin across his knee.
* 15 A The restaurant turns.
* 16 A A new skyline slides into view.
17 D AUGUSTINE: You know why I asked you here.
18 D SALOME: I have a theory.
19 D WENDELIN (clearing his throat): She has several.
20 D SALOME: I have one.
21 D AUGUSTINE: Then say it.
22 D SALOME: You want what's in the case.
23 A ¶ Wendelin's hand tightens on the handle.
24 A Augustine lets the quartet play four more bars.
25 D AUGUSTINE: I want you to open it.
26 D SALOME: I don't have the key.
27 D AUGUSTINE: You do.
28 D SALOME: I don't.
29 D WENDELIN (quietly, to Augustine): She doesn't.
30 D AUGUSTINE: Then who does?
* 31 A ¶ A beat.
32 A The restaurant turns again, and the three of them watch the city pass beneath them, glittering and indifferent.
33 A Salome lifts her water glass.
34 D SALOME: Order the soup, Augustine.

### SCENE s00068 | EXT. DRIFTING LIFE RAFT, OPEN OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN MAGDALENA OYELARAN-STROUD, DESMOND PRIESTLEY-ADEKUNLE, ROSALIND FAIRBANKS-NAKAMURA, TIBBY, OKONJO
* 1 A ¶ Flat grey sea.
* 2 A A pale sun.
* 3 A The raft rocks gently on swells too slow to feel.
4 A ¶ Four survivors sit in the orange hull.
5 A CAPTAIN MAGDALENA OYELARAN-STROUD (50s, sunburnt scalp, torn epaulettes) holds a tin cup of rainwater with both hands.
6 A Beside her, first officer DESMOND PRIESTLEY-ADEKUNLE (40s, a bandaged forearm) scans the horizon with a cracked sextant.
7 A In the middle, a passenger, ROSALIND FAIRBANKS-NAKAMURA (30s, gold watch, salt-white hair), whispers to a drowned photograph.
8 A At the stern, deckhand TIBERIUS "TIBBY" OKONJO (20s, shirtless, ribs showing) trails a fishing line in the water.
9 D MAGDALENA: Divide it.
10 D DESMOND: It's a thimble each.
11 D MAGDALENA: Then divide a thimble.
12 A ¶ She hands him the cup.
13 A He drinks his share and passes it to Rosalind, who stares at it without lifting it.
14 A Tibby doesn't look up from the line.
15 D TIBBY: Got something.
16 D DESMOND: Don't pull.
17 D TIBBY: It's pulling me.
* 18 A ¶ The line goes taut.
19 A Tibby braces, boots on the rubber hull, then leans back with a roar.
20 A Magdalena grabs his belt, Desmond hooks an arm around her waist, and Rosalind, still clutching the photograph, tumbles into a heap with all three as a flash of silver hurls itself over the side.
21 A ¶ They tangle.
* 22 A A gleaming fish thrashes on the floor of the raft, spraying water on every face.
23 A Magdalena pins it, Tibby clubs it with the cup, and silence returns.
24 D TIBBY [CONT'D] (whispering): Dinner.
25 D MAGDALENA: Dinner.
26 A ¶ Rosalind lifts her head and, for the first time, smiles.

### SCENE s00069 | EXT. WILLOW GROVE AT THE EDGE OF THE WORLD - TWILIGHT
Detected names (may be incomplete or contain aliases): STRANGER, VOICE, WREN
* 1 A ¶ Weeping willows, silver in the dusk.
* 2 A Fireflies drift between branches like slow sparks.
* 3 A A pond mirrors a sky with two moons.
* 4 A A stone well stands among the roots, its lip furred with moss.
5 A ¶ A STRANGER walks into the grove: a woman, ageless, barefoot, wrapped in a patchwork cloak that shifts color as she moves.
6 A She carries a lantern with no flame, only a glow like captured dawn.
7 A She stops at the well and sets the lantern on its lip.
8 D STRANGER (to the grove): I hear you.
* 9 A ¶ The willows rustle.
10 A A firefly lands on her sleeve, and she watches it breathe.
11 D STRANGER [CONT'D] (softly): I know. I know. It's been a long road.
12 A ¶ A voice rises from the well, deep and wet and patient, as though spoken through a thousand years of stone.
13 D VOICE [O.S.] (from the well): Who comes to the Mouth of Names?
14 D STRANGER: A traveler.
15 D VOICE [O.S.] (from the well): Travelers bear names.
16 D STRANGER: Mine fell off the road a long way back.
17 A ¶ She kneels.
18 A She dips her hand into the cold dark water.
* 19 A Ripples spread, and the fireflies pause in the air, holding their light.
20 D VOICE [O.S.] (from the well): Then I shall give you one.
21 D STRANGER: Give me a good one.
* 22 A ¶ The water brightens, silver then gold.
* 23 A When it clears, the surface shows a face: not hers, but a girl's, laughing.
24 D VOICE [O.S.] (from the well): Wren.
25 A ¶ The woman closes her eyes.
* 26 A The cloak settles to a single color: the deep green of willow leaves.
27 D WREN (whispering): Wren.
28 A ¶ She rises, shoulders loose, as though a weight has slid off.
29 A She picks up the lantern.
* 30 A Its glow steadies and warms.
31 D WREN [CONT'D] (to the well): Thank you.
32 D VOICE [O.S.] (from the well): Walk well, Wren.
33 A ¶ She leaves the grove.
* 34 A Behind her, the willows close their branches like curtains.
* 35 A The fireflies resume their drift, and the two moons climb.

### SCENE s00070 | INT. ICE-TUG COOLANT GALLERY - DRIFT SHIFT
Detected names (may be incomplete or contain aliases): TESS OKONKWO, BRANDR HALVORSEN
* 1 A ¶ Frost on every rivet.
* 2 A Amber work lights flicker down a corridor choked with pipe.
3 A ¶ TESS OKONKWO (30s, burn scar across one palm, tool belt hanging low) drags a sled of frozen valve housings past a hatch while BRANDR HALVORSEN (50s, enormous, a thermos strapped to his chest like a medal) kneels at a leaking manifold, wrench in one fist, the other hand flat against the pipe as if feeling for a pulse.
4 A Tess kicks the sled brake, taps the gauge, and taps it again.
5 A Brandr doesn't look up.
6 D TESS (into her collar): All hands on nine, gallery four is weeping coolant. Stay out of the aft ring.
* 7 A ¶ No answer.
* 8 A Static, then nothing.
9 D TESS [CONT'D] (to herself): Of course. Of course you're all asleep.
10 D BRANDR: Hand me the forty.
11 A ¶ She slides a wrench across the deck.
12 A He ignores it and keeps his palm on the pipe.
13 D BRANDR [CONT'D]: It's not leaking. It's breathing.
14 D TESS: Pipes don't breathe.
15 D BRANDR: This one's learned.
* 16 A ¶ The manifold gives a long, wet exhale.
* 17 A A white plume rolls across the ceiling.
18 A Tess backs into the sled, Brandr rocks onto his heels, and the work lights die one by one down the corridor, leaving only the glow of the gauge.
19 D TESS (to the dark, loud): Everyone brace. Pressure drop, thirty seconds.
20 D BRANDR (low, to himself): Easy, girl. Easy.
* 21 A ¶ The gauge needle sags, hovers, and slowly climbs.
* 22 A The lights stutter back.
23 A Tess laughs once, short, and sits on the sled.
24 A Brandr unscrews his thermos and pours steaming coffee into the cap, which he holds out to her without looking.
25 D TESS: You knew it would settle.
26 D BRANDR: No.
27 A ¶ She takes the cap anyway.
* 28 A Behind them, the pipe begins to knock, slow and rhythmic, like someone asking to be let in.
29 D TESS: Brandr.
30 D BRANDR: I heard it.
* 31 A ¶ The knocking speeds up.
32 A They both stand.

### SCENE s00071 | INT. CLOSED FUNICULAR STATION - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AGNES PRUITT, DELROY CAMPBELL, WEI-LING CHOU, FATHER TOBIAS
* 1 A ¶ Wooden benches, a dead ticket window, a brass clock stopped at ten past four.
* 2 A Rain ticks on a skylight.
3 A ¶ AGNES PRUITT (60s, retired schoolteacher, buttoned to the chin) pours tea from a flask into four paper cups.
4 A DELROY CAMPBELL (40s, line mechanic in a grease-stained parka) sits on the bench by the door.
5 A WEI-LING CHOU (30s, insurance investigator, wet umbrella across her knees) studies the clock.
6 A FATHER TOBIAS (70s, rumpled cardigan under a black coat) leans on the ticket window, humming.
7 D AGNES: Sugar, anyone?
8 D DELROY: Just the tea.
9 D WEI-LING: Who owns this station now, Mr. Campbell?
10 D DELROY: The company. Nobody comes up here but me.
11 D FATHER TOBIAS: And us. A fine thing, the four of us in a snowglobe.
12 D AGNES: It's rain, Father.
13 D FATHER TOBIAS: Then a rain globe.
14 A ¶ Wei-Ling accepts a cup, sips, and smiles for the first time.
15 D WEI-LING: It's good tea.
16 D AGNES: I know.
17 A ¶ Wei-Ling lowers the cup.
18 A Her eyes go to the ticket window.
* 19 A A faint metal glint sits behind the grille.
20 D WEI-LING: Mr. Campbell. Is that the cash box?
21 A ¶ Delroy and Father Tobias both look at the window.
* 22 A Nobody speaks.
23 A Delroy stands.
24 D DELROY: It was empty when I locked it.
25 D AGNES: Was it?
26 A ¶ Delroy lunges for the window.
27 A Father Tobias steps in front of him, and the two grapple against the counter, the old priest surprisingly strong.
28 A Wei-Ling drops the umbrella and tries to pull them apart.
29 A Agnes sets down the flask, calmly, and the three of them freeze as she opens her coat to show a revolver tucked in her belt.
30 D AGNES [CONT'D]: The tea was only for waiting.
31 A ¶ Wei-Ling's cup slips from her hand.
32 A Delroy slumps onto the bench.
* 33 A The clock, for no reason at all, ticks forward one minute.

### SCENE s00072_0 | EXT. ANDEAN CABLE GONDOLA - DUSK
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A two-seat steel gondola hangs motionless over a ravine.
* 2 A Wind rocks it.
* 3 A Below, a river thunders through black rock.

### SCENE s00072_1 | INT. CABLE GONDOLA - CONTINUOUS
Detected names (may be incomplete or contain aliases): RAMONA QUISPE, ED, BAYLISS, RESCUE COORDINATOR
* 1 A ¶ Cramped.
* 2 A Fogged glass.
3 A RAMONA QUISPE (40s, mountain guide, cracked lip, orange windbreaker) wedges herself in a corner with a radio.
4 A EDMUND "ED" BAYLISS (60s, retired surveyor, tweed jacket, knee brace) grips the seat with both hands.
5 D RAMONA: Base, Base, this is Quispe in cabin six. Over.
* 6 A ¶ Static.
7 A Ed stares at the floor.
8 D ED: Do not tell me we've lost the line.
9 D RAMONA: Quiet, please.
10 D RESCUE COORDINATOR [V.O.] (radio, crackling): Cabin six, we read you. Say your count.
11 D RAMONA: Two. One guide, one passenger. No injuries.
12 D RESCUE COORDINATOR [V.O.]: Copy. Cable crew is ninety minutes out. Snow on the access road.
13 A ¶ Ed exhales, long and shaky.
14 D ED: Ninety minutes.
15 D RAMONA: It's good news, Ed. It means they're coming.
16 D ED: I know what it means. I've been wrong about distances my whole life.
* 17 A ¶ The gondola lurches.
18 A Both of them stiffen.
* 19 A It settles.
20 A Ed pries open a thermos with trembling fingers.
21 D RESCUE COORDINATOR [V.O.]: Quispe, confirm you have warm layers.
22 D RAMONA: Confirm. Emergency blanket, two.
23 A ¶ She tears open a foil packet and drapes one over Ed's shoulders.
24 A He tries to refuse.
25 A She tucks it tight.
26 D ED: You'd make a decent nurse.
27 D RAMONA: I'd make a terrible nurse. I make a good guide.
* 28 A ¶ Silence.
* 29 A Wind.
* 30 A The glass rattles faintly.
31 D ED: Do you ever get used to it? The height?
32 D RAMONA: No. You learn which fear is worth listening to.
33 D ED: And this one?
34 D RAMONA: This one is just cold.
35 A ¶ Ed laughs, surprised.
36 A Ramona half smiles.
* 37 A The radio crackles again.
38 D RESCUE COORDINATOR [V.O.]: Cabin six, new estimate, seventy-five minutes. Road crew cleared the slide.
39 D RAMONA: Copy, seventy-five.
40 D ED: That's a fifteen-minute improvement.
41 D RAMONA: It's a fifteen-minute improvement.
42 A ¶ She lowers the radio.
* 43 A The dark outside deepens.
44 A Ed pulls the blanket around himself, and Ramona settles her back against the cold glass.
45 D ED: Tell me about the mountain.
46 D RAMONA: Which one?
47 D ED: Any of them.
48 D RAMONA: My grandfather said they listen. If you say their name wrong, they send weather.
49 D ED: What did you call this one?
50 D RAMONA: Apu Kuntur.
51 D ED (trying it): Apu Kuntur.
* 52 A ¶ A gust shakes the cabin.
* 53 A Then the wind drops, and the whole gondola goes still.
54 D ED [CONT'D]: Well. Perhaps I said it right.
55 D RAMONA: Perhaps.
56 D RESCUE COORDINATOR [V.O.]: Cabin six, I'm hearing you laughing. That's what I like to hear.
57 D RAMONA (to the radio): Just keep coming.

### SCENE s00073 | INT. RIVERBOAT CASINO COURTROOM - DAY
Detected names (may be incomplete or contain aliases): CLEMENTINE ASHWORTH, MAXWELL DRUMM, JUDGE ISADORA FENWICK, BAILIFF NORBERT KWASNIEWSKI
* 1 A ¶ A gambling hall converted into a temporary courtroom after the flood.
* 2 A Slot machines are draped in canvas, and brown water stains climb the walls.
* 3 A A judge's bench has been built from a roulette table.
4 A ¶ CLEMENTINE ASHWORTH, the defense attorney, stands at a card table with her hands folded.
5 A She is sharp, silver-haired, and never hurried.
6 A Across from her, MAXWELL DRUMM, the prosecutor, flips through a damp stack of papers.
7 A He is young and eager, and his collar is two sizes too big.
8 A At the roulette bench, JUDGE ISADORA FENWICK adjusts her glasses and glares down at both of them.
9 A Near the door, BAILIFF NORBERT KWASNIEWSKI shifts his weight, his hand resting on a holstered flashlight.
10 D JUDGE FENWICK: Mr. Drumm. You were saying.
11 A ¶ He clears his throat and rises, dropping a page.
12 A He stoops, recovers it, and comes up red.
13 D MAXWELL: Your Honor, the State maintains the defendant knowingly opened the sluice gates.
14 D CLEMENTINE: Objection. He has not yet shown a single witness who saw her touch them.
15 D JUDGE FENWICK: Sustained. Move along.
16 A ¶ Maxwell glances at his notes, then at the bailiff, who gives him nothing.
17 A He swallows.
18 D MAXWELL: Then I call the night watchman.
19 A ¶ Norbert opens the door.
* 20 A No one is there.
21 A He steps out, comes back, and shrugs.
22 D NORBERT: He ain't come, ma'am.
23 D JUDGE FENWICK: Of course he hasn't.
24 A ¶ Clementine rises slowly, smoothing her skirt.
25 A She walks to the center of the room and lets the silence stand.
26 D CLEMENTINE: Your Honor, the State's case is built on a man who is not here, a gate no one saw opened, and a river that has a long habit of rising.
27 A ¶ Maxwell opens his mouth, and she raises a hand.
28 A He closes it.
29 D CLEMENTINE [CONT'D]: I move to dismiss.
30 A ¶ The judge studies her over her glasses, then looks at the stained ceiling, the draped slots, the roulette wheel under her palm.
31 A She spins it.
* 32 A It clatters and settles.
33 D JUDGE FENWICK: Red seventeen.
34 A ¶ She lifts the gavel.
35 D JUDGE FENWICK [CONT'D]: Dismissed.

### SCENE s00074 | INT. CONVERTED BOWLING ALLEY - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): GRETCHEN VOSS, BIG DAVE MUNOZ, PRIYA NAIR, LEOPOLD ASHFORD, HANNELORE BRANDT, TOBY OYELARAN
* 1 A ¶ Lanes carpeted over.
* 2 A Desks sit where pins used to stand.
* 3 A The ball return hums.
4 A ¶ GRETCHEN VOSS (50s, headset, power blazer) paces the gutter.
5 A BIG DAVE MUNOZ (40s, linebacker build, lanyard) hunches over a keyboard.
6 A PRIYA NAIR (late 20s, three monitors) types without blinking.
7 A LEOPOLD ASHFORD (60s, bowtie) polishes a trophy no one has won.
8 A HANNELORE BRANDT (30s, cardigan, furious calm) stares at a spreadsheet.
9 A TOBY OYELARAN (20s, intern, backward cap) holds a clipboard like a shield.
10 A ¶ She stops.
* 11 A Nobody looks up.
12 D GRETCHEN: Quarterly synergy.
13 A ¶ Dave stands.
14 A Sits.
15 A Priya's typing slows, then quickens.
16 A Leopold sets down the trophy.
17 D LEOPOLD: We are on track.
18 D GRETCHEN: Are we.
19 A ¶ Hannelore turns her monitor ninety degrees.
* 20 A A red cell glows.
21 A Toby takes a half step toward the exit.
22 A Gretchen catches it.
23 D GRETCHEN [CONT'D]: Toby.
24 D TOBY: Yes, Ms. Voss.
25 D GRETCHEN: Coffee.
26 A ¶ He bolts.
27 A Dave watches him go, envious.
28 D DAVE: I could use one too.
29 D GRETCHEN: You could use a lot of things.
30 A ¶ Priya's keyboard stops.
* 31 A Silence.
* 32 A The ball return clunks.
33 D PRIYA: The numbers are final.
34 D HANNELORE: They are not final.
35 D PRIYA: They are final.
36 A ¶ Leopold lifts the trophy again and begins to polish with great concentration.
37 A Gretchen crosses to Hannelore, leans over, and reads the red cell.
38 A She exhales through her nose.
39 D GRETCHEN: Fix it.
40 D HANNELORE: It's not broken.
41 D GRETCHEN: Then make it less true.
42 A ¶ Hannelore picks up a pen.
43 A Clicks it.
44 A Clicks it again.
45 A Dave rolls his chair six inches away from her.
46 A Toby returns with six coffees balanced in a cardboard tray, and nobody takes one.

### SCENE s00075 | INT. CHEESE-AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FUENTES, CASPIAN DUBOIS, IGGY BRANNIGAN, SUNITA RAO, MADAME ELOISE THIBAULT
* 1 A ¶ Limestone walls, wooden racks of wheels, a fog of ammonia and mold.
* 2 A A single bulb swings on a cord.
3 A ¶ MARISOL FUENTES (30s, climbing harness, headlamp) lowers herself off a ladder while CASPIAN DUBOIS (40s, careful hands, white coat stolen from a cheesemonger) checks a humidity gauge and IGGY BRANNIGAN (20s, nervous, duffel bag) props open the freight door with a wheel of Gruyere.
4 A SUNITA RAO (50s, retired locksmith, reading glasses on a chain) kneels at a steel cabinet at the back, picks in hand.
5 D MARISOL: Eleven minutes. That's the guard's loop.
6 D CASPIAN: Nine. I counted.
7 D IGGY: It smells like feet in here.
8 D SUNITA: It smells like money. Hush.
* 9 A ¶ The cabinet clicks.
10 A Sunita pulls the door.
* 11 A Inside, velvet-lined shelves cradle a row of small glass jars.
12 A Marisol reaches in.
13 D MARISOL: Starter cultures.
14 D CASPIAN: Four hundred years old. Worth more than gold.
15 D IGGY: It's cheese mold.
16 D SUNITA: It's the cheese mold.
17 A ¶ Iggy lifts a jar.
18 A Caspian takes the next one.
19 A Marisol begins loading the duffel.
* 20 A Everything is calm, almost gentle, like four people in a pantry.
* 21 A ¶ A flashlight beam sweeps across the entrance.
22 A ¶ MADAME ELOISE THIBAULT (70s, nightgown, wellington boots, a shotgun held like an umbrella) steps through the freight door.
23 A She does not look surprised.
24 D MADAME THIBAULT: Put them back.
25 D IGGY: We were just--
26 D MARISOL: Madame, we can explain.
27 D CASPIAN: Don't explain.
28 D SUNITA: She's holding a shotgun, Caspian, explain something.
29 D MADAME THIBAULT: Put them back. Every one. Then you may leave.
30 A ¶ The four of them glance at each other.
31 A Marisol sets the duffel down.
32 A Caspian nudges a jar back with one finger.
33 A Iggy sobs quietly.
34 A Sunita sighs and replaces the cabinet door.
35 D MADAME THIBAULT [CONT'D]: The key is in the left pocket of my robe. It always was.
36 A ¶ Sunita peers at her.
37 D SUNITA: You left it unlocked.
38 D MADAME THIBAULT: I left it for the mice. You, I did not expect.

### SCENE s00076 | INT. CONVERTED LIGHTHOUSE - COWORKING SPACE - DAY
Detected names (may be incomplete or contain aliases): BARNABY STOKES, ORLA FITZGIBBON, JUNG-HO PARK, ADAEZE NWOSU, CEDRIC LAMONT
* 1 A ¶ A spiral staircase of standing desks.
* 2 A Fresnel lens turned into a conference light.
3 A Everyone wears matching grey fleece.
4 A ¶ BARNABY STOKES (40s, community manager, smiling too hard) claps once at the top of the stairs.
5 A ORLA FITZGIBBON (30s, product lead, cold brew) leans on the rail.
6 A JUNG-HO PARK (20s, engineer, noise-cancelling headphones) types.
7 A ADAEZE NWOSU (30s, designer, sketchbook) draws the lens.
8 A CEDRIC LAMONT (50s, investor, borrowed lanyard) examines the view like a purchase.
9 D BARNABY (to everyone): Hi, team! Quick announcement: we are pivoting.
* 10 A ¶ Nobody moves.
11 A Jung-Ho slides one headphone off an ear.
12 D JUNG-HO: To what?
13 D BARNABY: To the next thing.
14 D ORLA: We pivoted Tuesday.
15 D ADAEZE (muttering): We pivoted into a wall.
16 D CEDRIC (to Barnaby): Walk me through the vision.
17 D BARNABY: It's a platform for platforms.
18 A ¶ Orla and Jung-Ho speak at the same moment.
19 D ORLA: That's not a product.
20 D JUNG-HO: That's a typo.
21 D BARNABY (to Orla): I need you aligned.
22 D ORLA: I'm aligned. I'm so aligned I'm sideways.
23 A ¶ Cedric descends two steps and peers at Adaeze's sketchbook.
24 D CEDRIC: Is that the logo?
25 D ADAEZE: It's a lighthouse.
26 D CEDRIC: We should keep that.
27 A ¶ She closes the book very slowly.
28 D ADAEZE (to herself): It was always the lighthouse.
29 D BARNABY (to everyone): So! Who's excited?
* 30 A ¶ A long pause.
* 31 A The lens rotates.
* 32 A A single pigeon lands on the rail.
33 A Jung-Ho raises one hand.
34 D JUNG-HO: Can I be excused?
35 D BARNABY: It's a flat org.
36 D JUNG-HO: Then I flatly would like to leave.

### SCENE s00077 | INT. SILVER STAR ROLLER RINK - AFTER CLOSING
Detected names (may be incomplete or contain aliases): NELL ABERNATHY, SOLEDAD IBARRA, HASHIMOTO
* 1 A ¶ The rink is a long amber oval of varnished maple, scuffed grey where a thousand wheels have turned.
* 2 A Disco light dribbles over the empty benches.
* 3 A The carpeted walls smell of popcorn and old rubber.
* 4 A A single overhead fan ticks.
5 A ¶ NELL ABERNATHY (16, long-limbed, a cast on one wrist) sits on the bench lacing a skate with her good hand.
6 A SOLEDAD IBARRA (16, braids tied up, a jersey two sizes big) circles the floor in slow, practiced loops, trailing one hand along the rail.
7 A At the snack counter, MR. HASHIMOTO (70s, cardigan, reading glasses on his forehead) counts the till, never looking up.
8 A ¶ She crosses the rink and stops in front of the bench.
9 A She looks down at her.
10 A She doesn't smile.
11 D SOLEDAD: You said you'd tell me.
12 D NELL: I know.
13 D SOLEDAD: That was Tuesday.
14 D NELL: It's complicated.
15 A ¶ She pushes off again, harder this time, a loop, then another.
16 A Nell watches her go.
* 17 A The fan ticks.
18 A At the counter, Mr. Hashimoto slides a stack of bills into a bag and does not look up.
19 D MR. HASHIMOTO (to the till): Eleven dollars short.
20 D SOLEDAD (skating, not stopping): It's Nell's thing, it's always Nell's thing.
21 D NELL: My thing?
22 D SOLEDAD: You and your cast and your secret.
23 A ¶ She skates past the bench, close enough that the wind of it lifts the hair on Nell's neck.
24 A Nell stands.
25 A Her laces hang loose.
26 D NELL: You don't know what happened.
27 D SOLEDAD: Then tell me.
28 D NELL: I'm leaving.
* 29 A ¶ The word hangs in the air.
30 A Soledad stops.
* 31 A The skates scrape, and the sound seems very loud.
* 32 A Across the rink, the till slams shut.
33 D MR. HASHIMOTO: Girls. Lights in five.
34 A ¶ Soledad pulls off a skate and throws it.
* 35 A It skids across the maple and clatters against the wall.
36 A Nell flinches, then crosses the floor in her socks, stoops, and picks the skate up.
37 A She holds it out.
38 A Soledad does not take it.

### SCENE s00078 | INT. ALL-NIGHT LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): VINNIE CALDERONE, SHAUNTAE BRIGGS, OLEK WISNIEWSKI, ASANTE
* 1 A ¶ Fluorescent hum.
* 2 A Dryers turning.
* 3 A A rack of lost socks.
4 A ¶ VINNIE CALDERONE (50s, slick hair, silk shirt under a trench coat) sits on a folding table.
* 5 A A gym bag at his feet.
6 A He watches a dryer spin.
7 A ¶ SHAUNTAE BRIGGS (30s, braids, work boots) folds towels at the counter.
8 A Slow.
9 A Steady.
10 A Eyes on him.
11 A ¶ OLEK WISNIEWSKI (20s, hood up, bruise under one eye) feeds quarters into a washer.
12 A Misses one.
13 A Retrieves it.
* 14 A ¶ A wall phone rings.
15 A Everyone stops.
16 A ¶ Vinnie crosses.
17 A Picks up.
18 D VINNIE: Yeah.
19 D ASANTE [V.O.] (over phone, flat): Is it clean?
20 D VINNIE: Clean.
21 D ASANTE [V.O.]: Count it again.
22 A ¶ Vinnie covers the receiver.
23 A Looks at Shauntae.
24 D VINNIE (low): Count it.
25 D SHAUNTAE: Not mine to count.
26 A ¶ She folds another towel.
27 A ¶ Olek unzips the gym bag.
* 28 A Cash, bundled.
29 A He thumbs a stack.
30 A Counts under his breath.
31 D OLEK: Forty. Fifty.
32 D ASANTE [V.O.]: Is that Olek I hear?
33 D VINNIE: He's counting.
34 D ASANTE [V.O.]: Tell him it's short by two.
35 A ¶ Vinnie stares at the phone.
36 A Slowly turns.
37 D VINNIE (to Olek): It's short by two.
38 D OLEK: I counted twice.
39 D SHAUNTAE: He's lying.
40 D OLEK: I am not lying.
41 A ¶ Vinnie hangs up.
42 A Walks toward Olek.
* 43 A Soft shoes on linoleum.
44 D VINNIE: Where's the two?
45 D OLEK: In my pocket. For rent.
46 D SHAUNTAE: Mm-hm.
47 A ¶ Vinnie grabs Olek's collar.
48 A Slams him into the washer.
* 49 A The drum rattles.
* 50 A Quarters spill.
51 A ¶ Shauntae sets down her towel.
52 D SHAUNTAE [CONT'D]: Not here.
53 D VINNIE: Stay out of it.
54 D SHAUNTAE: My sister's laundromat.
* 55 A ¶ The phone rings again.
* 56 A Nobody moves.

### SCENE s00079 | INT. DIALYSIS UNIT - NIGHT
Detected names (may be incomplete or contain aliases): HELENE MARCHETTI, ROSALIND AKINS
* 1 A ¶ A long, low room of reclining chairs and blinking machines.
* 2 A Most of the beds are empty.
* 3 A A rain-streaked window frames the parking lot.
* 4 A The machines hum a single note, patient as insects.
5 A ¶ DR. HELENE MARCHETTI (50s, grey at the temples, scrubs worn soft with washing) pulls a stool beside the last occupied chair.
6 A ROSALIND AKINS (70s, shawl, a library paperback open on her lap) does not look up from her page.
* 7 A Blood moves slow and dark through the tubing between her arm and the machine.
8 A ¶ She turns a page.
9 A She is not reading it.
10 D HELENE: How's the pressure?
11 D ROSALIND: You tell me.
12 A ¶ Helene checks the monitor.
13 A Taps the screen.
14 A Writes nothing.
15 D HELENE: Good enough.
16 D ROSALIND: Mm.
* 17 A ¶ The machine ticks.
18 A Helene folds her hands in her lap, unfolds them.
19 A She looks at the paperback.
20 D HELENE: Is it any good?
21 D ROSALIND: Third time through.
22 D HELENE: That's a yes, then.
23 A ¶ Rosalind closes the book on her finger.
24 A She looks, at last, at the doctor.
25 D ROSALIND: You've got your father's habit.
26 D HELENE: Which one?
27 D ROSALIND: Asking the thing next to the thing.
28 A ¶ Helene does not answer.
* 29 A A nurse's cart rattles somewhere beyond the glass.
30 A In the pause, both of them reach for the call button at the same moment, hands touching on the plastic.
31 A They pull back.
32 D HELENE: I'll get it. ROSALIND ^I'll get it.
33 A ¶ Neither moves.
* 34 A The machine counts down another minute.
35 A Rosalind opens the book again, and Helene, after a moment, takes it gently from her hands, finds the place, and begins to read aloud, badly, in a low voice, to no one in particular.

### SCENE s00080_0 | EXT. SALT FLAT TELEGRAPH OFFICE - MIDDAY
Detected names (may be incomplete or contain aliases): ISAIAH CROW
* 1 A ¶ White ground.
* 2 A White sky.
* 3 A One shack.
* 4 A A wire running east into nothing.
5 A ¶ ISAIAH CROW (40s, duster, hat low) steps off a dust-caked horse.
6 A Ties it.
7 A Slow.
8 A Looks at the door.
* 9 A ¶ Shut.
10 A ¶ He knocks.

### SCENE s00080_1 | INT. TELEGRAPH OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): MAUDE PELLETIER, ISAIAH
* 1 A ¶ Dim.
* 2 A A key chattering on a desk.
3 A ¶ MAUDE PELLETIER (50s, sleeves rolled, ink on her fingers) taps without looking up.
* 4 A ¶ The door opens.
* 5 A Light cuts across the floor.
6 D ISAIAH: Afternoon.
7 D MAUDE: Afternoon.
8 A ¶ She keeps tapping.
9 D ISAIAH: Got a wire to send.
10 D MAUDE: Paper's on the left.
11 A ¶ He takes a sheet.
12 A Writes.
13 A Folds it.
14 A Sets it down.
15 A ¶ She reads without picking it up.
16 D MAUDE [CONT'D]: Two words.
17 D ISAIAH: It's all I need.
18 D MAUDE: Ninety cents.
19 A ¶ He counts coins onto the desk.
20 A She doesn't count them.
21 D MAUDE [CONT'D]: Coffee?
22 D ISAIAH: If it's made.
23 A ¶ She pours from a pot on a cold stove.
24 A Sets a tin cup near his hand.
25 A Her other hand stays under the desk.
26 D ISAIAH [CONT'D]: Your husband about?
27 D MAUDE: Out at the well.
28 D ISAIAH: Long walk.
29 D MAUDE: He likes it.
30 A ¶ He lifts the cup.
31 A Doesn't drink.
32 A Sets it down.
33 D ISAIAH: Funny. Well's dry since August.
* 34 A ¶ The key stops chattering.
35 A ¶ Maude's shoulders drop an inch.
36 D MAUDE: Then I suppose he won't be back.
* 37 A ¶ A pause.
* 38 A The wire hums.
39 A ¶ Isaiah turns the paper toward her.
* 40 A Two words in pencil: SHE KNOWS.
41 D ISAIAH: I'd say that's still true.
42 A ¶ Maude draws a revolver from beneath the desk.
43 A Lays it flat on the coins.
44 D MAUDE: Ninety cents. Sheriff.

### SCENE s00081_0 | INT. PIEROGI FACTORY - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): RAFAL KOWALCZYK, TAMSIN OKORO, LINDGREN
* 1 A ¶ Steam.
* 2 A Conveyor belts of dough.
* 3 A Hairnets and hum.
4 A ¶ RAFAL KOWALCZYK (40s, detective, rumpled suit under a hairnet) squints at a freezer door.
5 A TAMSIN OKORO (30s, factory floor manager, clipboard, no patience) walks beside him.
6 D TAMSIN: Four minutes.
7 D RAFAL: You said that at the gate.
8 D TAMSIN: Four minutes at the gate. Four minutes now.
9 A ¶ They pass a bin of spinach filling.
10 A Rafal sniffs it.
11 A Winces.
12 D RAFAL: Who found the body?
13 D TAMSIN: Night packer. Quit on the spot.
14 D RAFAL: Name?
15 D TAMSIN: Gus. Everybody calls him the Ferret.
16 A ¶ Rafal nods.
17 A Writes.
* 18 A ¶ A belt jams.
* 19 A Alarm bleats.
20 A Tamsin pivots and kills it with one slap.
21 D TAMSIN [CONT'D] (to the floor): Back to your stations. Nothing to see.
22 A ¶ Workers drift.
23 A Rafal watches them go.
24 D RAFAL: Nothing.
25 D TAMSIN: I run a clean line.
26 D RAFAL: Somebody stuffed a man into your freezer.
27 D TAMSIN: Not on my line.
* 28 A ¶ At the end of the corridor, a hairnet bobs.
29 A GUS "THE FERRET" LINDGREN (50s, wiry, sleeves pulled over fists) hurries toward the exit.
30 D RAFAL: Hey.
31 A ¶ Gus quickens.
32 D RAFAL [CONT'D]: Mr. Lindgren.
33 A ¶ Gus sprints.
34 A Rafal vaults a bin of dough.
35 A Tamsin swears and follows.

### SCENE s00081_1 | INT. LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BIANCA DELACROIX-OYELARAN, GUS, RAFAL, TAMSIN
1 A ¶ Gus slams through the door and runs headlong into BIANCA DELACROIX-OYELARAN (30s, health inspector, white coat, clipboard of her own).
2 A Both go down.
3 D BIANCA: Watch it!
4 D GUS: Sorry, sorry, sorry.
5 A ¶ Rafal arrives, breathing hard.
6 A Tamsin right behind.
7 D RAFAL: Stay on the floor, both of you.
8 D TAMSIN (to Bianca): You are early.
9 D BIANCA (to Tamsin): You are in violation.
10 D RAFAL (to Gus): Where were you going?
11 D GUS: Home. I didn't see nothing.
12 D RAFAL: You saw the body.
13 D GUS: I saw a coat.
14 D BIANCA: What body?
15 D TAMSIN: There is no body.
16 D RAFAL: There is a body.
17 D TAMSIN: ^There is no body, and you have no warrant.
18 A ¶ They talk over each other.
19 A Gus scrambles up.
20 A Bianca writes.
21 A Rafal grabs Gus by the sleeve.
22 D RAFAL: Whose coat?
23 D GUS (wet-eyed): Hers.
24 A ¶ He points.
25 A At Tamsin.
* 26 A ¶ The loading dock goes quiet.
* 27 A A forklift beeps somewhere.
28 A Tamsin looks at her own coat.
* 29 A Zipped to the chin.
* 30 A Dry-cleaned.
* 31 A Perfect.
32 D TAMSIN: That is a lie.
33 D BIANCA (pen hovering): Is it?
34 A ¶ Tamsin steps backward.
35 A Rafal steps with her.
36 D RAFAL: Open the coat.
37 D TAMSIN: I will not.
38 D RAFAL: Open it.
39 A ¶ She doesn't.
40 A Gus whimpers.
41 A Bianca flips a page.
42 A Rafal reaches for the zipper.
43 A ¶ Tamsin's hand snaps out and clamps his wrist.
44 A Her knuckles whiten.
45 A For a heartbeat they stand locked like dancers.
46 A ¶ Then she lets go.
47 A Slides the zipper down.
* 48 A Underneath, the lining is torn, dark, and wet.
49 D TAMSIN: He wasn't supposed to be on shift.

### SCENE s00082 | INT. HAUNTED HOUSE CALL CENTER - DAY
Detected names (may be incomplete or contain aliases): HOLLIS PEMBERTON, YASMIN TARHAN, KENJI MORIMOTO, BEATRIX OYELOWO, REGIONAL VP DARIUS ACHTERBERG
* 1 A ¶ Cubicles painted black.
* 2 A Plastic cobwebs on the monitors.
* 3 A Headsets everywhere.
4 A ¶ HOLLIS PEMBERTON (50s, supervisor, cardigan) stirs coffee with a pen.
5 A YASMIN TARHAN (20s, headset) types fast.
6 A KENJI MORIMOTO (30s, headset) stares at a ceiling skeleton.
7 A BEATRIX OYELOWO (40s, headset, rosary around her wrist) murmurs into a script.
8 A ¶ Yasmin slams a key.
* 9 A The phones fall silent.
10 A Everyone turns.
11 D HOLLIS: Anyone.
* 12 A ¶ Nobody answers.
13 D KENJI: The line's gone dead.
14 D YASMIN: All of them.
* 15 A ¶ A door at the back swings open.
16 A REGIONAL VP DARIUS ACHTERBERG (60s, tailored suit, ghost-white skin) glides in and stops under the skeleton.
17 A He looks at each of them.
18 A His mouth is thin.
19 D DARIUS: Who scared the callers away?
20 A ¶ Hollis lowers his pen.
21 A Beatrix crosses herself.
22 A Kenji, very slowly, raises a finger at the skeleton.
23 D KENJI: It was already like that.
24 A ¶ Darius studies the skeleton.
25 A Then the pen in Hollis's hand.
26 A Then the pen's bite marks.
27 D DARIUS: Well done.
28 A ¶ He leaves.
* 29 A The phones ring all at once.

### SCENE s00083 | INT. OPERA HOUSE INFIRMARY - EVENING
Detected names (may be incomplete or contain aliases): SERGEANT BRONISLAW KRAJEWSKI, LIEUTENANT SIPHO MBEKI, NURSE FIONNUALA DOYLE, THE BOY, ILARIO
* 1 A ¶ The stalls have been torn out and replaced with rows of iron cots.
* 2 A Gilt cherubs look down over bandaged men.
* 3 A Through a blown-out window, a wintry sky the color of ash.
4 A ¶ SERGEANT BRONISLAW KRAJEWSKI (40s, thick moustache, arm in a sling) sits on the edge of a cot, mending a boot by lantern light.
5 A LIEUTENANT SIPHO MBEKI (30s, upright, clean spectacles) writes a letter on a drum case.
6 A NURSE FIONNUALA DOYLE (30s, red hair under a veil, sleeves rolled) kneels to change a dressing.
7 A ¶ A small figure sits cross-legged on the stage, back to them, a boy in a coat too big, watching the dust fall through the light.
* 8 A Nobody has asked him a thing.
9 D KRAJEWSKI: That one has not spoken since the bridge.
10 D MBEKI: Perhaps he has nothing to say.
11 D DOYLE: He ate. That is something.
12 D THE BOY (without turning): It was mine.
13 A ¶ They all stop.
14 A The boy does not move.
15 A Doyle stands.
16 D DOYLE: What was yours, love?
17 D THE BOY: The bread. You gave it to the other man. I only wanted to know why.
18 A ¶ Krajewski lowers the boot.
19 A Mbeki sets down his pen.
20 D MBEKI: What is your name, young man?
21 D THE BOY: Ilario.
22 D MBEKI: Ilario. A good name. Mine is Sipho.
23 D ILARIO (turning, finally): What does it mean?
24 D MBEKI: Gift.
25 A ¶ Ilario studies him.
26 A His eyes are very old.
27 D ILARIO: Then why does everyone here look as if they've lost one?
28 A ¶ Doyle sits on the stage beside him.
29 A Krajewski clears his throat, puts down the boot, and stands, one hand on his sling.
30 D KRAJEWSKI: Ilario. Come, eat with us.
31 A ¶ Ilario hesitates.
32 A Then he rises and walks to the cot, small and dignified.
33 A Krajewski tears the last of his own bread and hands him half.
34 A Mbeki sets aside the letter and pours three cups of water.

### SCENE s00084 | INT. DECOMMISSIONED PLANETARIUM - CORPORATE RETREAT - DAY
Detected names (may be incomplete or contain aliases): LORRAINE FAIRWEATHER, GIDEON OKPARA, MIKA TANAKA-BELL, SEBASTIAN VOGT, CFO, PERPETUA ALVAREZ, HR
* 1 A ¶ A great hollow dome, peeling and blue, its star projector slumped like a dead insect in the center of the floor.
* 2 A Folding chairs form a circle beneath a painted Milky Way.
* 3 A A banner reads TEAM ASCENT.
4 A ¶ LORRAINE FAIRWEATHER (50s, facilitator, silk scarf, voice made of honey) stands beside an easel.
5 A GIDEON OKPARA (40s, sales director, ironed jeans) slouches on a chair, ankle on knee.
6 A MIKA TANAKA-BELL (late 20s, analyst, sweating through a blazer) clutches a coffee.
7 A SEBASTIAN VOGT (60s, CFO, wire spectacles) sits as if posing for a portrait.
8 A PERPETUA ALVAREZ (30s, HR, lanyard, tight smile) guards the exit.
9 A ¶ She uncaps a marker and draws a star on the easel.
10 D LORRAINE: Gideon. What is the one word that describes your role?
11 D GIDEON: Closer.
12 D LORRAINE: Mika?
13 D MIKA: Um. Fine?
14 D LORRAINE: Be bolder, Mika.
15 D MIKA: Fine... ly bolder?
16 A ¶ Sebastian removes his spectacles and polishes them.
17 D SEBASTIAN: Lorraine, when does the feedback session begin?
18 D LORRAINE: That is the session, Sebastian.
19 D SEBASTIAN: Ah.
20 A ¶ Perpetua taps her watch.
* 21 A Nobody notices.
22 D LORRAINE: Now. Each of you will name the person on your left and say one true thing.
23 A ¶ Mika turns toward Gideon.
24 A Gideon turns toward Sebastian.
25 A Sebastian turns toward Perpetua.
26 A Perpetua turns toward Lorraine, who, in turn, faces Mika.
* 27 A The circle closes.
28 D GIDEON: Sebastian. You sign my expenses without reading them.
29 D SEBASTIAN: Perpetua. You have been planning your resignation for eleven weeks.
30 D PERPETUA: Lorraine. This planetarium has no heat.
31 D LORRAINE: Mika. You are the best of us.
32 A ¶ Mika bursts into tears, then into laughter.
33 A Gideon cracks first.
34 A Then Sebastian, a dry wheeze.
35 A Perpetua covers her mouth.
36 A Even Lorraine drops her marker.
37 A The dome picks up their noise and throws it back, a hundred times larger, until they are laughing at the stars.
38 D MIKA (wiping her eyes): Gideon, I think I love you all.
39 D GIDEON: Careful, Mika. That's how they get you.

### SCENE s00085 | INT. CAROUSEL WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): KALINDA RUSSO, OSCAR TREMBLAY, MOSES BELLAMY
* 1 A ¶ Painted horses hang from chains.
* 2 A Gilded poles.
* 3 A A calliope under a tarp.
* 4 A Dust in lamplight.
5 A ¶ KALINDA RUSSO (30s, black jumpsuit, tool roll) crouches at a floor panel.
6 A OSCAR TREMBLAY (50s, ex-clockmaker, magnifier on one eye) holds a flashlight steady.
7 A MOSES BELLAMY (20s, lookout, earbud) hovers by the door.
8 D KALINDA: Pry bar.
9 A ¶ Oscar hands it over.
10 A She slides the bar under the panel.
* 11 A Wood groans.
* 12 A A compartment opens.
* 13 A Inside, a velvet satchel.
14 D OSCAR: There she is.
15 D MOSES (whispering): Guys. Headlights.
16 A ¶ Both freeze.
* 17 A A white beam sweeps the window, slides across the horses, and passes on.
18 D KALINDA (exhaling): Keep breathing.
19 D MOSES: I am breathing!
20 D OSCAR: Quietly.
21 A ¶ Kalinda lifts the satchel.
22 A Weighs it in her palm.
23 A Frowns.
24 D KALINDA: Light.
25 D OSCAR: What?
26 D KALINDA: It's too light.
27 A ¶ She opens it.
* 28 A Inside lies a single brass key and a note.
29 A Oscar reads over her shoulder.
30 D OSCAR: "Try the horse."
31 D KALINDA: ^"Try the third horse."
32 A ¶ They speak the same line at the same instant.
33 A Moses stares from one to the other.
34 D MOSES: What third horse?
35 A ¶ All three turn.
* 36 A Above them, a carousel horse with a chipped blue mane.
37 A Kalinda climbs onto the platform.
38 A Oscar follows.
39 A Moses bolts after.
40 A They gather around the animal, and she turns the key in a hidden lock at the saddle.
* 41 A The belly pops open.
* 42 A Gold coins pour into her arms.
* 43 A ¶ A siren starts up outside.
44 D MOSES: Oh no.
45 D OSCAR: Oh yes.
46 A ¶ They scatter.
47 A Moses dives under the calliope tarp.
48 A Oscar slides behind a stack of poles.
49 A Kalinda leaps from the platform, hugging the coins, and vanishes between two rows of horses as the doors burst open.

### SCENE s00086 | INT. FERRY GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): ESTELLE MARCHAND, ARTHUR PENHALLOW, TILDA VANCE
* 1 A ¶ A cramped galley below decks, steel counters and swinging pots.
* 2 A The boat creaks.
* 3 A A single porthole shows black water.
4 A ¶ ESTELLE MARCHAND (50s, elegant, wearing her good coat in a kitchen) sits at the narrow table, stirring a cup of cold tea.
5 A ARTHUR PENHALLOW (60s, ship's cook, apron, forearms like rope) stands at the stove with his back to her, ladling soup.
6 D ESTELLE: You might have told me.
7 D ARTHUR: I would have.
8 D ESTELLE: When?
9 D ARTHUR: When it was true.
10 A ¶ She sets the spoon down.
11 A He stirs the pot.
* 12 A The ferry rocks.
13 D ESTELLE: It has been true for a year.
14 D ARTHUR: It has been possible for a year.
15 D ESTELLE: Arthur.
16 D ARTHUR: Estelle.
* 17 A ¶ The galley door swings open.
18 A TILDA VANCE (20s, deckhand, oilskin, red hands) comes in with a bucket and stops short.
19 D TILDA: Sorry. I can come back.
20 D ARTHUR: Stay. You'll want soup.
21 D ESTELLE: Do stay, dear. We were only discussing the weather.
22 D TILDA: It's bad out.
23 D ARTHUR: It is.
24 D ESTELLE: It's worse in here.
25 A ¶ Tilda looks from one to the other.
26 A She sets down the bucket.
27 D TILDA: Should I--
28 D ARTHUR: Take a bowl.
29 D ESTELLE: Take two.
30 D TILDA: Okay.
31 D ARTHUR (to Estelle): You could have written.
32 D ESTELLE (to Arthur): You could have answered.
33 D TILDA (halfway through a mouthful): This is really good soup.
34 A ¶ Arthur and Estelle turn together and look at her.
35 A Tilda sets down the spoon.
36 D TILDA [CONT'D]: I'll just--
37 D ARTHUR: Eat.
38 D ESTELLE: Eat, child.
39 A ¶ She does.
* 40 A The ferry groans in the swell, and somewhere above them a horn sounds, long and low, for a harbor they cannot see.

### SCENE s00087 | INT. HYPERBARIC CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI ESCOBEDO, PAUL ZIELINSKI, TECH ARDEN FLETCHER, CHARGE NURSE BIRGITTA
* 1 A ¶ Steel hull.
* 2 A Porthole glass.
* 3 A Pipes that shudder as pressure climbs.
4 A ¶ DR. NAOMI ESCOBEDO (40s, scrubs, calm eyes) adjusts a valve while PAUL ZIELINSKI (60s, diver, wrapped in a thin blanket) stares at the gauge and TECH ARDEN FLETCHER (20s, headset, ponytail) logs numbers on a clipboard beyond the porthole, tapping the glass whenever the needle moves.
5 D CHARGE NURSE BIRGITTA [V.O.] (intercom): Chamber, status?
6 D NAOMI: Two atmospheres. Holding.
7 D PAUL: Twice the weight on my chest. Same as the day I surfaced too fast.
8 D NAOMI: You came up in eleven minutes. Nobody does that and walks.
9 D PAUL: I walked.
10 D NAOMI: You crawled. I read the report.
11 D PAUL: I don't remember crawling.
12 D NAOMI: You will tomorrow.
13 D PAUL: Will I.
14 D NAOMI: That's what we do here.
15 D BIRGITTA [V.O.] (intercom): Doctor, ten minutes remaining.
16 D NAOMI: Copy.

### SCENE s00088 | EXT. WHALE-RIB BRIDGE TOLLHOUSE - DUSK
Detected names (may be incomplete or contain aliases): BRYNMOR ASHDOWN, TALLIS WREN
* 1 A ¶ A bridge arches across a canyon of drifting violet fog.
* 2 A Its span is made of the ribs of some ancient leviathan, bleached bone-white and lashed together with silver rope.
* 3 A At its near end stands a crooked tollhouse of driftwood and green glass, a single lantern burning in its window.
4 A ¶ BRYNMOR ASHDOWN (60s, weathered, long grey coat, a ring of keys at his belt) sits on the tollhouse step, whittling.
* 5 A A kettle hisses on a tiny stove at his feet.
* 6 A The fog below breathes in and out like a sleeping animal.
7 A ¶ Far down the bridge, a figure appears, a shape resolving from the mist, leaning on a staff.
8 A ¶ TALLIS WREN (30s, pilgrim's cloak, boots patched with cloth) walks slowly, the bone ringing softly under each step.
9 A He reaches the step and stops.
10 A He does not look at Brynmor's face.
11 D TALLIS: Is this the toll?
12 D BRYNMOR: It is a toll.
13 D TALLIS: What does he ask?
14 D BRYNMOR: A true thing. Not a large one.
15 A ¶ Tallis lowers his hood.
16 A His beard is young, his eyes tired.
17 A He considers.
18 D TALLIS: I am afraid I will not finish.
19 D BRYNMOR: Finish what?
20 D TALLIS: Anything.
21 A ¶ Brynmor puts down the knife.
22 A He pours tea into two tin cups, his hands slow and steady, and hands one up.
23 D BRYNMOR: That will do.
24 D TALLIS: It was not much.
25 D BRYNMOR: It was true. He is not greedy.
26 A ¶ Tallis takes the cup.
* 27 A The steam drifts between them.
* 28 A Behind them the fog sighs, and one of the ribs hums a long, low note in the rising wind.
29 D TALLIS: How many cross?
30 D BRYNMOR: Fewer than cross back.
31 A ¶ Tallis drinks.
32 A His eyes close.
33 A When he opens them, the lantern has brightened, and the far end of the bridge, which was dark, shows one small light.
34 D BRYNMOR [CONT'D]: Go on. He is waiting. He is not so fierce.
35 D TALLIS (setting down the cup): Thank you.
36 D BRYNMOR: Mind the fourth rib. It sings when it is lonely.

### SCENE s00089_0 | EXT. SUDS CITY CAR WASH - NIGHT
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ Neon blue.
* 2 A Wet concrete.
* 3 A A tunnel of spinning brushes humming in the dark.
* 4 A An empty lot beyond.

### SCENE s00089_1 | INT. CAR WASH OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): DESHAWN MCALLISTER, LUCIA FERREIRA-KANG, OBUYA
* 1 A ¶ A closet with a space heater, a cracked radio, a wall of keys.
2 A DESHAWN MCALLISTER (18, graduation gown unzipped over a polo, name tag reading "DESHAWN") counts out a till.
3 A LUCIA FERREIRA-KANG (18, same gown, mascara smudged) perches on a stool, shoes in her lap.
4 D LUCIA: You work here every Friday?
5 D DESHAWN: Every night.
6 D LUCIA: Even tonight?
7 D DESHAWN: Especially.
8 A ¶ Lucia turns the radio dial.
* 9 A Static, then a slow song.
10 A She leaves it.
11 D LUCIA: They called your name.
12 D DESHAWN: I know. I was there.
13 D LUCIA: I mean it was loud. Your section.
14 D DESHAWN: My mom brought the airhorn.
15 D LUCIA: Of course she did.
16 A ¶ He nearly smiles.
17 A Folds the till into a canvas bag.
18 D LUCIA [CONT'D]: My dad didn't come.
19 D DESHAWN: I'm sorry.
20 D LUCIA: It's fine.
21 D DESHAWN: It's not.
22 D LUCIA: No. It's not.
23 A ¶ She looks at the shoes in her lap.
24 A He busies himself with the keys.
25 D DESHAWN: You hungry?
26 D LUCIA: I could eat.
27 D DESHAWN: There's a place by the freeway. Pancakes.
28 D LUCIA: It's eleven p.m.
29 D DESHAWN: That's when they're best.
* 30 A ¶ A knock.
31 A They both turn.
32 A ¶ MR. OBUYA (60s, owner, windbreaker, flashlight) leans in the doorway.
33 D MR. OBUYA: Deshawn. Why is the tunnel still running?
34 D DESHAWN: I thought you wanted it warm.
35 D MR. OBUYA: I wanted it empty. Shut it down.
36 D DESHAWN: Yes, sir.
37 A ¶ Mr. Obuya looks at Lucia.
38 A At the gown.
39 A At the shoes.
40 D MR. OBUYA: Congratulations.
41 D LUCIA: Thank you.
42 D MR. OBUYA: Both of you.
43 A ¶ He goes.
44 A Deshawn exhales.
45 A Lucia unfolds from the stool.
46 D LUCIA: Would you get fired?
47 D DESHAWN: Probably not.
48 D LUCIA: But you'd tell me if you would.
49 D DESHAWN: No.
50 A ¶ She laughs, shaky.
51 A He holds the door.
52 A They step into the neon and the tunnel hums, spinning for nobody.

### SCENE s00089_2 | EXT. CAR WASH LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): LUCIA, DESHAWN
1 A ¶ Deshawn hits a breaker.
* 2 A The brushes slow.
* 3 A Stop.
* 4 A The silence is enormous.
5 D LUCIA: That was loud.
6 D DESHAWN: That was nothing.
7 A ¶ She shrugs off her gown and drapes it on the hood of a stranger's car.
* 8 A Hers, her father's idea of a car, a long dead sedan.
9 A After a moment, he does the same.
10 D LUCIA: Pancakes.
11 D DESHAWN: Pancakes.
12 A ¶ They walk toward the road.
* 13 A Behind them, the neon buzzes and goes out.

### SCENE s00090 | INT. COUNTY HOSPITAL - POLIO WARD - NIGHT
Detected names (may be incomplete or contain aliases): ALISTAIR VANCE-HOLLOWAY, NURSE BERNADETTE OKONJO, THEODORA LINDQUIST, CASPER WU, CHAPLAIN AUGUSTUS DELACROIX-BENNETT
* 1 A ¶ Iron lungs line the room like a row of steel whales.
* 2 A Green light.
* 3 A A ceiling fan turns slowly.
* 4 A A radio murmurs a dance tune from a distant city.
5 A ¶ DR. ALISTAIR VANCE-HOLLOWAY (50s, tall, courteous, bow tie loosened) pauses at the foot of a bed with a chart.
6 A NURSE BERNADETTE OKONJO (40s, starched cap, quick hands) adjusts a dial on the nearest machine.
7 A MRS. THEODORA LINDQUIST (60s, wool coat, handbag in both hands) sits very straight on a visitor's chair.
8 A CASPER WU (20s, medical student, borrowed white coat) stands by the door, taking notes.
9 A CHAPLAIN AUGUSTUS DELACROIX-BENNETT (70s, soft voice, stole around his neck) kneels in prayer at a bedside.
10 A ¶ He reads the chart a long time.
11 A Mrs. Lindquist watches him.
12 A Nurse Okonjo does not.
13 D MRS. LINDQUIST: He seems comfortable.
14 D DR. VANCE-HOLLOWAY: He is resting.
15 D MRS. LINDQUIST: That is not the same thing.
16 D DR. VANCE-HOLLOWAY: No. It is not.
17 A ¶ She nods, grateful for the honesty.
18 A He closes the chart.
19 D CASPER (low): Doctor, the pressure reading on bed six--
20 D DR. VANCE-HOLLOWAY: Later, Mr. Wu.
21 D CASPER: Yes, sir.
22 A ¶ Okonjo crosses to the window.
* 23 A The blinds are drawn.
24 A She tugs a cord and the slats rise.
25 A Moonlight spills onto the machine, silvering the boy inside, who sleeps with his mouth a little open.
26 D NURSE OKONJO: His color is better.
27 D MRS. LINDQUIST: Is it?
28 D NURSE OKONJO: Pink in the cheeks.
29 A ¶ Dr. Vance-Holloway steps closer.
30 A He lifts the boy's wrist.
* 31 A A long moment.
32 D DR. VANCE-HOLLOWAY: Nurse. The oxygen.
33 D NURSE OKONJO: Already, Doctor.
34 A ¶ She is turning a valve.
35 A He does not say what she did, and she does not say what she saw.
36 A Casper looks from one to the other, understanding nothing, then too much.
37 D CASPER: Doctor?
38 D DR. VANCE-HOLLOWAY: Fetch the Chaplain.
39 D CASPER: He's here.
40 D DR. VANCE-HOLLOWAY: Then bring him.
41 A ¶ Casper crosses the room.
42 A The Chaplain looks up from his prayer before he arrives.
43 D CHAPLAIN DELACROIX-BENNETT: I know.
44 A ¶ He rises, creaking, and takes Mrs. Lindquist's hand.
45 A She stares at it without understanding.
46 A Then the radio gives a bright trumpet note, and Mrs. Lindquist rises, breath catching, and lets the handbag fall.
47 D MRS. LINDQUIST: No.
48 D DR. VANCE-HOLLOWAY: Mrs. Lindquist.
49 D MRS. LINDQUIST: He was pink. She said he was pink.
50 D NURSE OKONJO (quietly): He was, ma'am.
51 A ¶ Mrs. Lindquist crosses to the bed.
52 A Puts a hand on the cold steel.
* 53 A The machine wheezes its steady wheeze, pushing air into a chest that no longer asks.
54 D DR. VANCE-HOLLOWAY: I am so sorry.
55 A ¶ She does not turn.
* 56 A Nobody speaks.
* 57 A In the corner, the radio plays on, a waltz, cheerful and absurd.
58 A Nurse Okonjo crosses and switches it off, and the silence that follows is the loudest thing in the ward.

### SCENE s00092 | INT. LUNAR GREENHOUSE - ARTIFICIAL NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN VASQUEZ-LEE, ANTON BERGSTROM
* 1 A ¶ A vast pressurized dome of hydroponic trays under violet grow-lamps.
* 2 A Rows of tomato vines climb strings toward the glass.
* 3 A Beyond the dome, the grey regolith and a hard, bright Earth.
4 A ¶ IMOGEN VASQUEZ-LEE (40s, station botanist, rolled sleeves, soil under her nails) kneels between two trays with a pair of pruning shears.
5 A She is slight and quick, her hair held by a pencil.
6 A ANTON BERGSTROM (50s, systems engineer, thick glasses, a tablet always in hand) stands at the far end checking the irrigation readouts, wearing a sweater with a hole in one elbow.
7 A ¶ Both are very tired.
8 A Neither says so.
9 D ANTON: Pump three is running hot.
10 D IMOGEN: Tell it to calm down.
11 D ANTON: It doesn't take advice.
12 D IMOGEN: Neither do the tomatoes.
13 A ¶ She snips a withered leaf.
14 A Drops it in a bucket.
15 A Anton taps the tablet.
* 16 A The lamps pulse a half-second slower.
17 D ANTON: That's the fourth flicker today.
18 D IMOGEN: I counted six.
19 D ANTON: You counted the ones I didn't.
20 A ¶ She stands, stretches her back, and wanders down the row toward him, trailing a hand through the leaves.
21 D IMOGEN: Do you ever hear them?
22 D ANTON: The plants?
23 D IMOGEN: The stems. When the lamps come on. A kind of ticking.
24 D ANTON: That's the heat.
25 D IMOGEN: I know it's the heat.
26 A ¶ They stand a moment in the violet light.
27 D ANTON: Imogen.
28 D IMOGEN: Yes.
29 D ANTON: You've been in here eighteen hours.
30 D IMOGEN: They don't water themselves.
31 D ANTON: Actually, they do. That's my entire job.
32 A ¶ She laughs, a short cough of a sound.
33 A He nearly smiles.
* 34 A ¶ The lights shudder.
35 A Both look up.
* 36 A A distant thud rolls through the dome, a bolt shaken loose in the airlock.
* 37 A The vines sway, then settle.
* 38 A The tablet in Anton's hand goes dark, and so does the row of lamps.
* 39 A For three heartbeats there is only the white wash of Earthlight on the leaves.
40 D IMOGEN [CONT'D] (whispering): Don't move.
41 D ANTON: I wasn't going to.
* 42 A ¶ The lamps flare back to life one by one.
43 A Imogen exhales.
44 A Anton wipes his glasses on the hole in his sweater.
45 A They look at each other, then at the trays, and then both go back to work without another word, side by side, snipping and tapping in the purple dark.
46 D ANTON [CONT'D]: Pump three.
47 D IMOGEN: Go.
48 A ¶ He crosses to a panel and thumps it with the heel of his hand.
* 49 A A pump coughs.
* 50 A Water begins to run.
51 A Imogen reaches out and touches a ripening tomato.
* 52 A It is perfectly, impossibly red.
53 D IMOGEN [CONT'D]: Anton.
54 D ANTON (from the panel): Mm.
55 D IMOGEN: Come and see.
56 A ¶ He walks over.
57 A She plucks the fruit, wipes it on her sleeve, and hands it to him.
58 A He looks at it for a long time.
59 A Then he takes a bite, and the juice runs down his chin, and neither of them says a word.

### SCENE s00093 | INT. BIRTHDAY PARTY BACKYARD - DAY
Detected names (may be incomplete or contain aliases): WALDO PIMM, BERNICE PLUMMER-ASANTE
* 1 A ¶ Balloons.
* 2 A Folding tables.
* 3 A A bouncy castle deflating in the corner.
4 A Forty children, screaming.
5 A ¶ WALDO PIMM (40s, sequined vest, top hat, rabbit in a cage) stands on a milk crate, juggling three oranges.
* 6 A One slips.
7 A He catches it with his chin.
8 D WALDO (to the kids): Ladies and gentlemen! The Great Waldo!
9 A ¶ A child screams.
10 A Another cries.
11 A A third throws cake.
12 D WALDO [CONT'D] (muttering): Sixty dollars. Sixty dollars. Sixty dollars.
13 A ¶ He pulls a scarf from his sleeve.
* 14 A It keeps coming.
* 15 A Yards of it.
16 A He tugs.
17 A Tugs.
18 A Out comes a second scarf, then a third, tied together, and finally a live parakeet that flies straight over the fence.
19 D WALDO [CONT'D] (to the sky): That was Gerald.
20 A ¶ A woman's voice calls from the gate.
21 A ¶ BERNICE PLUMMER-ASANTE (70s, sunhat, enormous handbag) pushes through, waving a rolled newspaper at Waldo, who ducks.
22 A The rabbit escapes its cage, hops across the lawn, and disappears under the cake table.
23 A Bernice swings and misses.
24 A Waldo vaults the crate, a child grabs his cape, and the three of them end up in a heap beside the bouncy castle, the castle sighing down on top of them.
25 D BERNICE: You owe me for the parakeet!
26 D WALDO (muffled): He's a free spirit!

### SCENE s00094 | EXT. ROOFTOP APIARY - GOLDEN HOUR
Detected names (may be incomplete or contain aliases): AMARA OKEKE, THEO BALASUBRAMANIAN, GRANDMOTHER NNEKA
* 1 A ¶ Hives like pastel filing cabinets.
* 2 A Bees drift over the city skyline.
* 3 A A string of bulbs sways overhead.
4 A ¶ AMARA OKEKE (30s, veil pushed back, honey on her wrist) lifts a frame heavy with comb.
5 A THEO BALASUBRAMANIAN (30s, borrowed veil, delighted) stands too close, holding a smoker he has not lit.
6 D AMARA: Step back.
7 D THEO: I'm fine.
8 D AMARA: You're stepping on the queen's door.
9 D THEO: I'm sorry, Your Majesty.
10 A ¶ She laughs.
11 A He lights the smoker.
* 12 A A white plume.
13 D AMARA: Gently.
14 D THEO: Always.
* 15 A ¶ The stairwell door bangs.
16 A GRANDMOTHER NNEKA (80s, floral housecoat, cane, a shopping bag) hobbles onto the roof.
17 D NNEKA: Amara!
18 D AMARA: Mama?
19 D THEO: Hello, ma'am.
20 D NNEKA: Who is the boy?
21 D AMARA: It's Theo, Mama. I told you.
22 D NNEKA: You told me Thursday.
23 D THEO: Today is Thursday.
24 D NNEKA: Then I am on time.
25 A ¶ She sets the bag on a hive.
26 A Amara lunges to catch it.
27 D AMARA: Mama! Not there.
28 D NNEKA: It's only plantains.
29 D THEO: They'll love the plantains.
30 D NNEKA: They better. Come, boy. Eat.

### SCENE s00095 | INT. DEAD MAN'S TACKLE SHOP - BACK ROOM - DAY
Detected names (may be incomplete or contain aliases): GLORIA ESPINOSA-WRAY, RAUL
* 1 A ¶ Rods in racks.
* 2 A Tins of lures.
* 3 A A calendar from 2009.
* 4 A Dust motes in a shaft of window light.
5 A ¶ GLORIA ESPINOSA-WRAY (60s, widow's black, silver bun) sits on an upturned bucket, a shoebox in her lap.
6 A Her son RAUL (30s, work shirt, wedding ring turned the wrong way) stands at the workbench, sorting reels into a crate.
7 A ¶ Neither speaks.
8 A ¶ He lifts a reel.
9 A Examines it.
10 A Sets it down.
11 D RAUL: This one's good.
12 D GLORIA: Your father cursed that one.
13 D RAUL: He cursed all of them.
14 D GLORIA: He cursed them gently.
15 A ¶ Raul almost laughs.
16 A He doesn't.
17 D RAUL: I can have the shop listed by Friday.
18 D GLORIA: Do what you want.
19 D RAUL: It's your shop.
20 D GLORIA: It was his shop.
21 D RAUL: Ma.
22 D GLORIA (opening the shoebox): You didn't come.
23 D RAUL: I came to the funeral.
24 D GLORIA: You didn't come in March.
25 D RAUL: I was working.
26 D GLORIA: He asked.
27 D RAUL: I know he asked.
28 D GLORIA: He asked every day.
29 D RAUL: And I said I'd come.
30 D GLORIA: And you said you'd come.
* 31 A ¶ A drip from the ceiling.
* 32 A A bucket catches it.
33 A Gloria lifts a photograph from the box.
* 34 A A boy on a pier, grinning with a fish too big for him.
35 D GLORIA [CONT'D]: Look.
36 A ¶ He doesn't.
37 D RAUL: I don't want to.
38 D GLORIA: You were eight.
39 D RAUL: I remember.
40 D GLORIA: He kept it in the register. Under the tray.
41 D RAUL: That's stupid.
42 D GLORIA: It's what he did.
43 D RAUL: He'd have let me know. If it mattered.
44 D GLORIA: He did let you know. Every day. By asking.
45 A ¶ Raul grips the bench.
46 A The knuckles go white.
* 47 A A reel falls from the crate and rolls across the floor.
48 D RAUL: You think I don't know that? GLORIA ^You think I don't know what you think?
49 A ¶ Their voices overlap and collide.
50 A They stop.
51 A Gloria sets down the photograph.
52 D GLORIA [CONT'D]: Sit.
53 D RAUL: I'm fine.
54 D GLORIA: Sit.
55 A ¶ He sits on a crate.
56 A Hands between his knees.
57 D RAUL: I was scared.
58 D GLORIA: Of what?
59 D RAUL: Of seeing him small.
60 D GLORIA: He wasn't small.
61 D RAUL: He was. Ma. In the photos you sent, he was.
62 D GLORIA: He was still your father.
63 D RAUL: That's the thing.
64 D GLORIA: What?
65 D RAUL: I wanted him to stay the one with the fish.
66 D GLORIA (very quietly): Oh, Raul.
67 A ¶ He bends forward, forehead on his fists.
68 A Gloria sets the box aside, crosses the room in her slow black shoes, and rests a hand on the back of his neck, the way you steady a young horse.
* 69 A The drip falls into the bucket, steady as a clock.
70 D RAUL: I should've come.
71 D GLORIA: Yes.
72 D RAUL: That's it? Yes?
73 D GLORIA: You want me to say it was fine?
74 D RAUL: I want you to say something.
75 D GLORIA: Help me pack the rods.
76 A ¶ He wipes his face on his sleeve.
77 A Stands.
78 A Takes one end of the long rod rack.
79 A She takes the other.
80 A They carry it out into the light, not looking at each other, the way people do who have finally said enough.
