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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0009.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01059 | INT. LOGGING CAMP MESS HALL - ARBITRATION HEARING - DAY
Detected names (may be incomplete or contain aliases): PETRA ILLES, REGINALD TOLLIVER, OTTOLINE FRYE, CLERK, ABIODUN SHOLA
* 1 A ¶ Long pine tables pushed into a U. Axes on hooks.
* 2 A Snow outside the windows.
* 3 A A coffee urn steams in the corner.
4 A ¶ PETRA ILLES, 40s, plaid jacket over blazer, stands at the head of the U. REGINALD TOLLIVER, 50s, three-piece suit, sits opposite her with his hands steepled.
5 A OTTOLINE FRYE, 60s, the foreman, sits in the witness chair, a rifle-green parka zipped to her chin.
* 6 D PETRA: Ms. Frye. Who signed off on the timber survey?
* 7 D OTTOLINE: I did.
* 8 D PETRA: Did you walk the ridge?
* 9 D OTTOLINE: Not myself.
* 10 D PETRA: Then how?
* 11 D REGINALD: Objection. Foundation.
* 12 D PETRA: She's the foreman.
* 13 D REGINALD: She's not a surveyor.
* 14 D OTTOLINE: I know a tree when I see one.
* 15 D PETRA: Did you see this one?
* 16 D OTTOLINE: I saw the stump.
* 17 D PETRA: And the stump said?
* 18 D REGINALD: Objection!
* 19 A ¶ The door bangs.
20 A A CLERK, 20s, snow on his hat, hurries in with a folder, ducking as though the rafters were low.
21 A ABIODUN SHOLA, per the badge on his coat.
22 A Everyone looks.
* 23 D ABIODUN: Sorry. Sorry. Urgent filing.
* 24 D PETRA: Mr. Shola, we're in session.
* 25 D ABIODUN: It's about the ridge.
* 26 D REGINALD: Whose side is this?
* 27 D ABIODUN: Yours, I think. Or hers.
28 A ¶ He slaps the folder on the table between them.
29 A Petra and Reginald reach for it.
* 30 D PETRA: Give me that.
* 31 D REGINALD: Give me that.
32 A ¶ They stop.
33 A Both draw back.
34 A Ottoline takes the folder, opens it.
35 A Reads.
* 36 D OTTOLINE (slowly): That ridge was never ours.
* 37 A ¶ The mess hall goes quiet.
* 38 A Even the coffee urn seems to stop bubbling.

### SCENE s01060 | INT. LUNAR AGRICULTURAL DOME - CAFETERIA - DAY CYCLE
Detected names (may be incomplete or contain aliases): HALCYON PRYCE, TEODORO FALCONE, CHIOMA UDOH, NADEEM ROUSSEAU, COMMANDER BENEDIKT STONE
* 1 A ¶ A circular canteen under a clear shell.
* 2 A Earth hangs in the sky like a blue marble.
* 3 A Long tables of recycled plastic, trays of steaming something.
* 4 A A hum of pumps from beneath the floor.
5 A ¶ DR. HALCYON PRYCE, 50s, lead agronomist, white coat over coveralls, sits at a central table stirring something green with a spork.
6 A Across from her, TEODORO FALCONE, 40s, mechanic, grease under his nails, eats a protein bar with no pleasure.
7 A CHIOMA UDOH, 30s, hydroponics tech, tablet propped against a water pouch, scrolls a spreadsheet.
* 8 D HALCYON: Do you taste that?
* 9 D TEODORO: It's lunch.
* 10 D HALCYON: It's kale. Mostly.
* 11 D TEODORO: It's mostly lunch.
* 12 D CHIOMA: Cycle three yield is down four percent.
* 13 D HALCYON: Down from what?
* 14 D CHIOMA: From the last harvest.
* 15 D HALCYON: That's not a number. That's a mood.
* 16 D CHIOMA: Four percent is a number.
* 17 D HALCYON: It depends on who's counting.
* 18 D TEODORO: I'm counting calories. Mine are low.
* 19 D HALCYON: Teodoro, you've been quiet this week.
* 20 D TEODORO: I'm always quiet.
* 21 D HALCYON: Quiet-quiet or worried-quiet?
* 22 D TEODORO: Pump seven is making a sound.
* 23 D HALCYON: What kind of sound?
* 24 D TEODORO: A mean one.
* 25 D CHIOMA: Mean how?
* 26 D TEODORO: Like a dog that hasn't decided yet.
* 27 D HALCYON: Have you filed a ticket?
* 28 D TEODORO: I filed three. Maintenance said "scheduled."
* 29 D HALCYON: When?
* 30 D TEODORO: Spring.
* 31 D HALCYON: It's October.
* 32 D TEODORO: I'm aware.
33 A ¶ A figure appears at the cafeteria entrance.
34 A NADEEM ROUSSEAU, 20s, intern, lanky, glasses sliding down his nose, balances a tray with the posture of someone who has never carried a tray.
35 A He scans the room and heads toward them.
* 36 D NADEEM: Is this seat taken?
* 37 D HALCYON: Sit.
* 38 D NADEEM: Thank you, Doctor.
* 39 D HALCYON: Halcyon. Dr. is for formal complaints.
* 40 D NADEEM: Halcyon. Okay.
41 A ¶ He sits.
42 A Opens his mouth.
43 A Closes it.
44 A Opens it again.
* 45 D NADEEM [CONT'D]: Sorry. I'm new. Today's my second day.
* 46 D TEODORO: You'll get used to the food.
47 D NADEEM: Is it always this beige?
* 48 D CHIOMA: Only on days that end in Y.
* 49 D NADEEM: What do you do here?
* 50 D CHIOMA: I keep the plants alive. Teodoro keeps the plants' water alive. Halcyon keeps all of us alive.
* 51 D HALCYON: Aspirationally.
* 52 D NADEEM: That's a lot of alive.
* 53 D HALCYON: On a rock with no air, it's the only job.
* 54 D NADEEM: I read about the bio-loop in school. Water, nutrients, light. Every molecule counted.
* 55 D HALCYON: And?
* 56 D NADEEM: It's more beautiful in a textbook.
* 57 D HALCYON: It's less beautiful in a textbook. The textbook doesn't smell.
* 58 D TEODORO (muttering): Pump seven.
* 59 D NADEEM: Sorry?
* 60 D CHIOMA: Don't. He'll tell you for an hour.
* 61 D TEODORO: It's a good story.
* 62 D CHIOMA: It's a pump.
* 63 D TEODORO: It's a pump with a personality.
* 64 D NADEEM: I like pumps.
* 65 D TEODORO (looking up): Kid, you're hired.
* 66 D HALCYON: He's already hired.
* 67 D TEODORO: Then you're promoted.
* 68 D NADEEM: To what?
* 69 D TEODORO: To the person who gets to listen.
* 70 D CHIOMA: Good luck.
71 A ¶ COMMANDER BENEDIKT STONE, 60s, dome administrator, cane tapping, pauses at the end of their table with a tray of nothing but coffee.
* 72 D BENEDIKT: Dr. Pryce. Mr. Falcone. Is this the new hire?
* 73 D NADEEM: Yes, sir.
* 74 D BENEDIKT: Welcome to the Moon. Try not to break it.
75 A ¶ He moves on.
76 A Nadeem laughs, uncertain.
77 A He picks up his spork and tastes the green stuff.
78 A His face does something complicated.
79 D NADEEM: That's really kale.
* 80 D HALCYON: Told you.
81 A ¶ They eat.
* 82 A Pumps hum below.
* 83 A Overhead, Earth turns slowly, blue and white and very far away.

### SCENE s01061 | INT. NORTHWIND LOGISTICS - ESCAPE ROOM "THE VAULT OF SYNERGY" - DAY
Detected names (may be incomplete or contain aliases): DIRECTOR GREGOR HALVORSEN, PRIYA NAIR, TODD BEXLEY, BEATRICE KOWALSKI, HR, MARCUS ELLIOT, DELILAH OKONJO
* 1 A ¶ A windowless basement fitted as a movie-set bank.
* 2 A Brass safe doors, laser-beam strips of red tape, a ticking digital clock above the mantel: 59:12.
* 3 A ¶ Six employees in matching fleece vests stand in a ring around a locked chest.
* 4 A Lanyards.
* 5 A Name tags.
* 6 A Forced smiles.
7 A ¶ DIRECTOR GREGOR HALVORSEN, 50s, bald, a vest zipped to the chin, claps once.
* 8 D GREGOR: Team! Remember. There's no "I" in--
9 A ¶ PRIYA NAIR, 30s, accountant, glances at her watch.
* 10 D PRIYA: We've got fifty-eight minutes.
* 11 D GREGOR: Alignment is a journey.
12 A ¶ TODD BEXLEY, 40s, sales, taps the chest.
* 13 D TODD: It's a padlock. Four digits.
* 14 D GREGOR: Who has the clue?
* 15 A ¶ BEATRICE KOWALSKI, 60s, HR, lifts a laminated card with a trembling hand.
* 16 D BEATRICE: "The date of our greatest quarter."
* 17 D TODD: That's every quarter.
* 18 D GREGOR: Todd.
* 19 D TODD: I'm saying, it's every quarter.
20 A ¶ MARCUS ELLIOT, 20s, junior analyst, stares at the clock.
* 21 D MARCUS: Fifty-six minutes.
* 22 D GREGOR: Marcus, please. We don't count down. We count up.
23 A ¶ Marcus nods.
24 A Counts nothing.
25 A His left eye twitches.
26 A ¶ DELILAH OKONJO, 40s, procurement, stands with her arms crossed, in the corner.
* 27 D DELILAH: It's seventeen forty-two.
* 28 D GREGOR: Is that a guess?
* 29 D DELILAH: It's on the whiteboard behind you.
* 30 A ¶ They all turn.
* 31 A A whiteboard reads: FOUNDED 1742.
32 A Gregor's smile fixes in place.
* 33 D GREGOR: Great catch, Delilah.
34 A ¶ Priya enters the code.
* 35 A The padlock clicks.
* 36 A The chest opens.
* 37 A Inside, a single laminated card: CONGRATULATIONS.
* 38 A PLEASE COMPLETE THE SURVEY.
* 39 A ¶ Nobody speaks.
40 A Todd picks up the card, turns it over.
* 41 D TODD: There's a QR code.
* 42 D BEATRICE: Of course there is.
* 43 A ¶ They stand there, six fleece vests in a basement, while the clock beeps.
* 44 A 54:03.
* 45 A 54:02.

### SCENE s01062 | INT. STRANDED COACH BUS - 3 A.M.
Detected names (may be incomplete or contain aliases): NAOMI PRESCOTT, EMERY LUND
* 1 A ¶ A long-distance bus at the roadside, hazard lights ticking amber against a field of black.
* 2 A Rows of reclining seats, empty.
* 3 A A fine layer of frost on the inner windows.
* 4 A The driver's seat is vacant, door gaping open to the night.
5 A ¶ NAOMI PRESCOTT, 30s, parka and wool cap, sits in the third row from the back with a paperback she isn't reading.
6 A Across the aisle, EMERY LUND, 20s, headphones, hoodie, bounces one knee.
7 A ¶ Neither has spoken for twenty minutes.
* 8 D EMERY (to the bus, loud): Hello? Anyone else on here?
* 9 A ¶ Silence.
* 10 A Hazards tick.
* 11 D NAOMI: There's nobody else.
* 12 D EMERY: Right.
* 13 D NAOMI: The driver stepped out for the radio.
* 14 D EMERY: That was an hour ago.
* 15 D NAOMI: Forty minutes.
* 16 D EMERY (muttering): Felt like an hour.
17 A ¶ She pulls the headphones down around her neck.
18 A Naomi turns a page.
19 A Doesn't read it.
* 20 A The bus creaks, settling on its springs.
* 21 D EMERY [CONT'D]: Did you hear that?
* 22 D NAOMI: Hear what?
* 23 D EMERY: Like tapping.
* 24 D NAOMI: It's the cold.
* 25 D EMERY: It's not the cold.
* 26 D NAOMI: It's the cold.
* 27 A ¶ Tap.
* 28 A Tap.
* 29 A Tap-tap.
30 A ¶ Both sit very still.
* 31 A The sound comes from somewhere in the back of the bus.
* 32 A Not the engine.
* 33 A Not the heater.
* 34 A Something closer, patient.
* 35 D EMERY: It's in the luggage rack.
* 36 D NAOMI: Don't.
* 37 D EMERY: Someone left a bag.
* 38 D NAOMI: Emery.
* 39 D EMERY: I'm going to look.
40 A ¶ She stands.
41 A Naomi stands too, in the same moment, then sits back down, and then stands again.
42 A They both end up in the aisle, and the bus sways, and neither wants to take the first step.
* 43 D EMERY [CONT'D] (to Naomi, whispering): You first.
* 44 D NAOMI (to the bus): Whoever's there, we know you're in there.
* 45 D EMERY: Whoever's there, we know you're in there.
46 A ¶ They say it at the same time.
47 A They look at each other.
* 48 D NAOMI: Stop that.
* 49 D EMERY: You stop.
* 50 A ¶ The tapping stops.
* 51 A Instead, a soft, wet noise, like a hand pulled slowly out of mud.
* 52 A ¶ The overhead luggage rack shudders.
* 53 A A zipper rasps.
* 54 A A black duffel bag unzips by itself, one slow tooth at a time.
55 A ¶ Naomi clutches the seat.
56 A Emery clutches Naomi's arm.
57 A They back up the aisle together, step for step, until they hit the rear emergency door.
* 58 D NAOMI [CONT'D] (whispering): Open it.
* 59 D EMERY: It's locked.
* 60 D NAOMI: Open it!
* 61 D EMERY: It's a lever! It's on the floor!
62 A ¶ She drops.
63 A Gropes under the seat.
64 A Naomi keeps her eyes on the duffel.
* 65 A The zipper rasps another inch.
* 66 D EMERY [CONT'D] (to herself): Come on. Come on.
* 67 A ¶ Something pale slides out of the bag.
* 68 A Fingers, knuckled and long.
* 69 A They curl around the edge of the rack.
* 70 D NAOMI (very low): Emery. Pull it. Now.
71 A ¶ Emery pulls.
* 72 A The emergency door swings out with a clatter, and cold air slams into the bus.
* 73 A The hazards tick.
* 74 A The fingers withdraw.
* 75 D EMERY: Go! Go!
76 A ¶ Naomi shoves her out the door, tumbles after.
77 A They land in the gravel on their hands and knees, gasping.
* 78 A ¶ Behind them, the bus sits glowing amber, silent.
* 79 A The duffel, lying on the aisle floor, is zipped shut again.
* 80 D NAOMI (panting): Don't look back.
* 81 D EMERY: I'm not.
* 82 D NAOMI: Good.
83 A ¶ They crawl away from the road.
84 A Neither looks.
85 A Both hear it: the soft tap of a hand on the glass.

### SCENE s01063 | INT. MUSEUM OF CLOCKS - GREAT HALL - NIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA VOSS, BARTHOLOMEW QUILL, KENJI AOKI, DESPINA ARVANITIS, LOOKOUT
* 1 A ¶ A hundred timepieces, each telling a different hour.
* 2 A Grandfather cases line the walls like sentries.
* 3 A Pendulums swing out of rhythm, ticks overlapping in a thin, endless rain.
* 4 A At the center, under a glass dome, a gilded astronomical clock the size of a carriage glitters, its planets frozen mid-orbit.
* 5 A ¶ Five minutes to midnight.
* 6 A The building is dark, sleeping.
7 A ¶ In the shadow of a long-case clock, four figures crouch like cats.
8 A ¶ SERAPHINA VOSS, 40s, in black from throat to ankle, headlamp dimmed to a red coin, leads.
9 A At her shoulder, BARTHOLOMEW QUILL, 60s, silk scarf, gloved fingers unscrewing the cover plate of a wall panel.
10 A KENJI AOKI, 20s, in a catering uniform with a pocketed screwdriver, carries a coil of fiber cable.
11 A DESPINA ARVANITIS, 30s, enormous eyes, a stethoscope hanging from her neck, taps a glass case with the delicacy of a safecracker.
* 12 A ¶ A small radio crackles from Seraphina's belt.
* 13 D LOOKOUT [V.O.] (whispering): Guard's on the east stairs. Two minutes.
* 14 D SERAPHINA (low): Understood.
* 15 D BARTHOLOMEW: Panel's open.
* 16 D KENJI: Wires are color-coded.
* 17 D BARTHOLOMEW: Ignore the colors. Follow the dust.
* 18 D KENJI: Why?
* 19 D BARTHOLOMEW: The ones that move are the ones they trust.
20 A ¶ Kenji nods.
21 A Pinches a wire.
22 A Clips it.
* 23 D DESPINA: Seraphina. The dome has a second lock.
* 24 D SERAPHINA: Meaning?
* 25 D DESPINA: Meaning it listens.
26 A ¶ She presses the stethoscope to the glass.
27 A Closes her eyes.
28 A Her whole body bends toward the sound.
* 29 A ¶ Tick, tick, tick, tick.
* 30 D DESPINA [CONT'D] (whispering): It's counting. Three seconds to a click.
* 31 D BARTHOLOMEW: Can you match it?
* 32 D DESPINA: I can try.
33 A ¶ She slides a slim tool beneath the dome's rim.
34 A Waits.
* 35 A A pendulum on the east wall swings out.
* 36 A Another answers.
* 37 A ¶ Tick.
* 38 A Click.
* 39 A A pin falls.
* 40 D LOOKOUT [V.O.]: One minute. He's at the landing.
* 41 D SERAPHINA: Go.
42 A ¶ Despina lifts the dome.
43 A Slow, trembling.
* 44 A It rises on invisible springs, a hush of glass.
* 45 A The planets of the clock gleam, close enough to touch.
46 A ¶ Kenji slides a velvet bag under the gilded sun and eases it free.
* 47 A The gears whisper once.
* 48 A Then still.
* 49 D BARTHOLOMEW (hushed): It's heavier than it looks.
* 50 D KENJI: They always are.
* 51 D LOOKOUT [V.O.]: Thirty seconds!
* 52 D SERAPHINA: Seal it. Back to the wall.
* 53 A ¶ They snap the dome back down.
* 54 A The pin settles.
* 55 A The clock gleams behind its glass, minus one small golden sun.
* 56 A ¶ Somewhere in the hall, a bell tolls.
* 57 A Midnight.
* 58 A Every clock in the museum begins to strike, a hundred chimes, a hundred hours, clamor and swell.
59 A ¶ The four crouch, hands over ears, as the hall rings around them like a cathedral.
* 60 A The guard's footsteps, if any, are drowned entirely.
* 61 D KENJI (laughing, shouting): That's the best alarm I ever heard!
* 62 D SERAPHINA: Quiet!
* 63 A ¶ The last chime fades.
* 64 A Silence, then a single tick, then a hundred.
65 D LOOKOUT [V.O.]: He's gone to the west wing. You're clear.
66 A ¶ Bartholomew exhales.
67 A Despina leans on the long-case clock, trembling and grinning.
68 A Kenji laughs without sound.
69 A Seraphina lets go of the radio.
* 70 D SERAPHINA: Walk. Don't run. Let's go home.

### SCENE s01064 | EXT. THE GLASS BRIDGE OF AETHERMERE - DAWN
Detected names (may be incomplete or contain aliases): QUEEN IDRISSA, SIR BALTHAZAR, FINNEGAN, MORGANA
* 1 A ¶ A span of living crystal between two floating islands, fog beneath it, bells ringing somewhere unseen.
2 A ¶ QUEEN IDRISSA, tall and crowned in silver thorns, stands at the middle of the bridge.
3 A Behind her, SIR BALTHAZAR, white-bearded, in bronze plate, grips a staff that hums with blue light.
4 A Before her, a ragged young WANDERER named FINNEGAN carries nothing but a cracked lute.
* 5 D IDRISSA: You trespass, minstrel.
* 6 D FINNEGAN: I'm only crossing.
* 7 D BALTHAZAR: Cross to what?
* 8 D FINNEGAN: To the far island. My brother's there.
* 9 D IDRISSA: There is no brother.
* 10 D BALTHAZAR: There is no brother.
11 A ¶ A third figure strides out of the fog: MORGANA, a woman in green, hair full of leaves, a bow slung across her back.
12 A She holds up a hand.
* 13 D MORGANA: Lower your staff, Balthazar. He speaks true.
* 14 D BALTHAZAR: How would you know?
* 15 D MORGANA: Because the brother is me.
16 A ¶ Finnegan drops the lute.
* 17 A It rings on the crystal.
* 18 A The bridge begins to hum.

### SCENE s01065 | INT. HOUSING COURT - COURTROOM 3 - MORNING
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABBOTT-LUND, LANDLORD DEXTER OLUYEMI, TENANT MARISELA QUINTANILLA, CORNELIUS PRATT
* 1 A ¶ A cramped courtroom with a leaking ceiling tile and a plastic bucket underneath.
* 2 A A worn carpet, three rows of benches, a flag on a crooked pole.
3 A ¶ JUDGE HORTENSE ABBOTT-LUND, 60s, reading glasses perched on a long nose, peers over the bench.
4 A LANDLORD DEXTER OLUYEMI, 40s, cufflinks, signet ring, stands at one table.
5 A TENANT MARISELA QUINTANILLA, 30s, in her work uniform from a bakery, flour still on one sleeve, stands at the other.
6 A Beside her, ATTY.
7 A CORNELIUS PRATT, 50s, a threadbare suit, a briefcase with a broken clasp.
* 8 D ABBOTT-LUND: Mr. Oluyemi, you've served notice?
* 9 D DEXTER: Yes, Your Honor.
* 10 D ABBOTT-LUND: Mr. Pratt, you dispute it?
* 11 D PRATT: We do, Your Honor. My client wasn't informed of the rent increase.
* 12 D DEXTER: It was posted in the lobby.
* 13 D MARISELA: There's no lobby. There's a hallway.
* 14 D DEXTER: Same thing.
* 15 D MARISELA: There's a hallway with a broken light. I can't read in the dark.
* 16 D ABBOTT-LUND: Ms. Quintanilla, please address me.
* 17 D MARISELA: Sorry, Judge.
* 18 D ABBOTT-LUND: Mr. Pratt, any further objection?
* 19 D PRATT: Only that Mr. Oluyemi has been collecting rent for a unit that doesn't have a working stove for six months.
* 20 D DEXTER: I replaced the stove.
* 21 D MARISELA: With a hot plate.
* 22 D ABBOTT-LUND: That's enough.
* 23 A ¶ The bucket under the ceiling tile pings with a single drop.

### SCENE s01066 | EXT. ARCTIC ICE SHELF - LIFE RAFT CAMP - DAY
Detected names (may be incomplete or contain aliases): JOSEPHINE TALLCHIEF, DARIUS OKAFOR, BERNADETTE LACROIX, RESCUE ONE
* 1 A ¶ A bright white world.
* 2 A A yellow raft hauled up on a floe, a tarp strung from poles, a single seal-oil stove.
* 3 A Wind sighs.
4 A ¶ JOSEPHINE TALLCHIEF, 30s, parka hood trimmed with fur, kneels at the stove and stirs a pot.
5 A DARIUS OKAFOR, 40s, frostbitten cheeks, sits against the raft with a rifle.
6 A BERNADETTE LACROIX, 20s, in a red survival suit, stands at the edge of the floe with a radio.
* 7 D BERNADETTE (into radio): Rescue One, this is the Meridian. Do you copy?
* 8 A ¶ The radio hisses.
* 9 D RESCUE ONE [V.O.] (garbled): ...Meridian... position... say again...
* 10 D BERNADETTE: We're at seventy-eight north.
* 11 D RESCUE ONE [V.O.]: ...hold... coming...
12 A ¶ She grins.
13 A Turns to the others.
* 14 D BERNADETTE [CONT'D]: They're coming!
* 15 D JOSEPHINE: How long?
* 16 D BERNADETTE: Two hours!
* 17 D DARIUS (rising): Two hours. We can make two hours.
* 18 A ¶ The floe groans.
* 19 A A crack zigzags across the ice between them.
20 A Josephine and Darius lunge for the raft as the floe splits, and Bernadette leaps across the gap, landing hard in Josephine's arms.
21 A All three tumble into the raft as the ice shelf shifts and a second crack opens right where the stove had been.
* 22 D JOSEPHINE: Cut the line!
* 23 D DARIUS: Cut the line!
24 A ¶ Bernadette hacks the rope.
* 25 A The raft slides free.
26 A The three huddle.
* 27 A The stove sinks into black water.
* 28 D RESCUE ONE [V.O.] (clear now): Meridian, we have you. Stay put.

### SCENE s01067 | INT. VICTORIAN ICE HOUSE - ESTATE GROUNDS - EVENING (1887)
Detected names (may be incomplete or contain aliases): ABIGAIL FENWICK-HALE, TOBIAS RUSK, STRANGER, RUPERT
* 1 A ¶ A brick dome half-sunk in the earth.
* 2 A Blocks of ice stacked in straw, sawdust floor, a sharp cold that smells of wet stone.
* 3 A A lantern hangs from a hook.
* 4 A Breath clouds in the light.
5 A ¶ ABIGAIL FENWICK-HALE, 30s, housekeeper, shawl over her shoulders, counts blocks with a slate.
6 A TOBIAS RUSK, 50s, groundskeeper, canvas coat, sits on a crate, whittling.
7 A A STRANGER, 40s, in a good coat and muddy boots, stands near the entrance holding a bowler hat.
* 8 D ABIGAIL (to both): Forty-two blocks. Enough for the garden party.
* 9 D TOBIAS: Forty-two's plenty.
* 10 D ABIGAIL: You'll want to turn the straw before the guests arrive.
* 11 D TOBIAS: I'll do it, Miss Abigail.
12 A ¶ The Stranger clears his throat.
* 13 D STRANGER: Forgive me. I'm looking for the master of the house.
* 14 D TOBIAS: He's up at the manor, sir.
* 15 D STRANGER: I tried the door. Nobody answered.
* 16 D ABIGAIL: The door is closed after four.
* 17 D STRANGER: So I discovered.
* 18 D ABIGAIL: And you are?
* 19 D STRANGER: A friend of the family.
* 20 D TOBIAS (under his breath): Never seen him.
* 21 D ABIGAIL: Which family?
* 22 D STRANGER: The Ashworths.
23 A ¶ Tobias stops whittling.
* 24 A The shavings fall.
* 25 D ABIGAIL: The Ashworths left in March.
* 26 D STRANGER: Did they? I hadn't heard. I'm afraid I've been abroad.
* 27 D ABIGAIL: Where abroad?
* 28 D STRANGER: Calcutta.
* 29 D ABIGAIL: That's a long way to come for an empty house.
* 30 D STRANGER: I came for the cold.
* 31 D ABIGAIL: Pardon?
* 32 D STRANGER: The ice house. They kept something here, once. A sealed tin.
* 33 D TOBIAS: Nothing's here but ice, sir.
* 34 D STRANGER: Of course. I only wished to be certain.
35 A ¶ He turns his hat in his hands.
36 A Raises his eyes.
* 37 D STRANGER [CONT'D]: My name is Rupert Ashworth. I was supposed to have inherited.
38 A ¶ Abigail's slate slips from her fingers and clatters on the floor.
39 A Tobias rises, knife in hand.
* 40 D ABIGAIL: Mr. Rupert died in the Punjab. We had the letter.
* 41 D RUPERT: Reports of my death were premature.
* 42 D TOBIAS (to Abigail): Miss, I'd stand behind me.
43 A ¶ She doesn't move.
* 44 A The lantern flickers.
* 45 D RUPERT: I only want the tin.
* 46 D ABIGAIL (to the cold air): God help us.
* 47 D RUPERT: I'd settle for that, too.
48 A ¶ He smiles.
49 A A thin, apologetic, tired smile.
50 A Behind him, the ice house door creaks in the wind, and all three turn to look at it.
