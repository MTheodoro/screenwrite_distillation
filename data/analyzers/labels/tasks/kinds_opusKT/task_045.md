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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0045.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01460 | EXT. HARBOR REGATTA COURSE - DAY
Detected names (may be incomplete or contain aliases): WESLEY KOVALENKO, AMINATA DRUMMOND
* 1 A ¶ Grey chop under a grey sky.
* 2 A White sails tilt in the distance like paper cutouts.
* 3 A A committee boat bobs near the starting line, a red flag snapping on its stern.
4 A ¶ On the committee boat's deck stands WESLEY KOVALENKO (50s, windbreaker, binoculars, a clipboard sheathed in plastic), a radio in his fist.
5 A A hundred yards off, in a battered single-handed dinghy, AMINATA DRUMMOND (20s, wetsuit, spray-stung face) trims a mainsheet.
6 A Her knuckles are raw.
7 D WESLEY (radio): Aminata, you're early to the line.
8 D AMINATA [V.O.] (radio, crackling): I know.
9 D WESLEY (radio): Fall off. Tack. You've got ninety seconds.
10 D AMINATA [V.O.] (radio): I'm fine.
11 A ¶ She isn't.
* 12 A The boat heels.
13 A She leans out, boots hooked under the strap, and hauls the sail in.
* 14 A The dinghy skims, a hull slapping the crest of each wave.
15 A ¶ Wesley lifts the binoculars.
16 A Clenches his jaw.
17 D WESLEY (radio): Forty seconds. Come about.
18 A ¶ She throws the tiller.
19 A The boom swings across, clips her shoulder, and sends her stumbling into the cockpit while the sail luffs.
20 A Wesley mutters to himself, dropping the binoculars to his chest, climbing up onto the rail with one hand on the rigging.
21 D WESLEY [CONT'D]: Come on, come on.
22 D AMINATA [V.O.] (radio): I'm up. I'm up.
23 A ¶ She scrambles upright, regains the tiller, swings the boat in a tight arc, and the sail fills with a crack like a rifle shot.
* 24 A ¶ A horn blasts across the harbor.
* 25 A The fleet surges.
26 D WESLEY (radio): And you're off. Four seconds late.
27 D AMINATA [V.O.] (radio): Is that a penalty?
28 D WESLEY (radio): It's a lesson.
29 A ¶ She laughs, a harsh gasp, and leans out.
* 30 A The dinghy gains speed, cutting through the pack.
31 A Wesley watches her go, lowers the radio, and for a moment lets his face show everything.
32 A ¶ Then he lifts it again.
33 D WESLEY [CONT'D] (radio): Mark one in half a mile. Keep it low.
34 D AMINATA [V.O.] (radio): Copy.
* 35 A ¶ The first mark swings into view, a yellow buoy riding the swell.
* 36 A Half the fleet crowds toward it.
37 A She lines up wide, takes the outside lane, and Wesley mutters again.
38 D WESLEY [CONT'D]: Don't do it.
39 A ¶ She does it.
40 A She cuts inside at the last second, clipping the buoy's rope with her stern.
* 41 A Boats scatter.
* 42 A A whistle shrieks.
43 A Wesley sits down on the rail, head in his hands.
44 D WESLEY [CONT'D] (radio, flat): Aminata.
45 D AMINATA [V.O.] (radio): I know. I touched the mark.
46 D WESLEY (radio): Do your turns.
47 D AMINATA [V.O.] (radio): I'm doing them.
48 A ¶ The dinghy spins two full circles on the grey water, clean as a compass drawing.
* 49 A The pack, now far ahead, shrinks toward the horizon.
50 D WESLEY (radio): You'll finish last.
51 D AMINATA [V.O.] (radio): I'll finish.
52 A ¶ He smiles, finally.
53 A Not at the radio, at the sea.
54 D WESLEY (radio): That's the whole sport.

### SCENE s01461 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): NANA PHILOMENA, TEODOR
* 1 A ¶ A low-beamed room that smells of woodsmoke and yeast.
* 2 A A cast-iron stove ticks.
* 3 A Copper pans hang from a rack above a scrubbed pine table.
* 4 A Through the window, frost coats a vegetable garden and a rooster stands on the fence post like a weathervane.
5 A ¶ NANA PHILOMENA (80s, shawl over a flannel nightgown, hands knotted as old rope) kneads dough at the table, her movements slow and exact.
6 A Across from her, her grandson TEODOR (7, pajamas with rocket ships, hair in a cowlick) kneels on a chair, a ball of dough in each fist.
7 D TEODOR: Mine's a rabbit.
8 D NANA PHILOMENA: It looks like a potato.
9 D TEODOR: It's a rabbit potato.
10 A ¶ She smiles, dusts flour from her thumb, and takes his dough.
11 A Pinches two ears from the top.
12 A Hands it back.
13 D NANA PHILOMENA: Now it's a rabbit.
14 A ¶ He sets it on the tray beside the others.
* 15 A A row of small misshapen animals.
* 16 A Outside, the rooster crows once, late.
17 D TEODOR: Nana?
18 D NANA PHILOMENA: Mm.
19 D TEODOR: Will you teach me the bread song?
20 D NANA PHILOMENA: There's no song.
21 D TEODOR: Mum says there is.
22 D NANA PHILOMENA: Your mother talks too much.
23 A ¶ She begins to hum, a low, wavering tune, kneading in time.
24 A He hums with her, a half-step off, and neither corrects the other.

### SCENE s01462 | EXT. CANYON FLOOR - WRECKED HOT AIR BALLOON - DAY
Detected names (may be incomplete or contain aliases): WOMAN, MARGOT BRANDT-KIM, SOLEDAD
* 1 A ¶ Red rock walls rise a thousand feet.
* 2 A The balloon's envelope lies draped across boulders like a collapsed circus tent, stripes of orange and white fluttering.
* 3 A The basket is on its side, wicker split.
4 A ¶ A WOMAN (40s, flight suit, blood on her temple, one boot missing) crawls from the wreckage, dragging a first-aid kit.
5 A MARGOT BRANDT-KIM (30s, pilot's vest, sun-hat torn, ropeburn on both palms) sits on a boulder, drinking from a canteen.
6 D MARGOT: Don't stand.
7 D WOMAN: I'm fine.
8 D MARGOT: You're not fine. You're bleeding.
9 D WOMAN: So are you.
10 A ¶ Margot looks at her hands.
11 A Shrugs.
12 A Passes the canteen across.
13 D MARGOT: I'm Margot.
14 D WOMAN: Soledad.
15 D MARGOT: Soledad. Nice to meet you. Sorry about the crash.
16 D SOLEDAD: It wasn't your fault.
17 D MARGOT: I'm the pilot. It's always my fault.
18 A ¶ Soledad drinks.
19 A Wipes her mouth.
20 A Gives the canteen back.
* 21 A They sit, shoulder to shoulder, small figures at the bottom of a very large place.
22 D SOLEDAD: How far to the road?
23 D MARGOT: Twelve miles. Maybe fifteen.
24 D SOLEDAD: We have two liters.
25 D MARGOT: We have one and a half.
26 A ¶ She gestures at the canteen.
* 27 A A thin trickle leaks from the base.
28 A Soledad closes her eyes.
29 D SOLEDAD: So we leave now.
30 D MARGOT: We leave at dusk. She's too hot.
31 D SOLEDAD: Who?
32 D MARGOT: The sun.
33 A ¶ Soledad laughs, briefly, then winces.
34 A Her hand goes to her ribs.
35 D SOLEDAD: Margot, you should know something.
36 D MARGOT: Okay.
37 D SOLEDAD: I didn't buy a ticket. I stowed away.
38 A ¶ Margot looks at her.
39 A Slowly puts down the canteen.
40 D MARGOT: Why?
41 D SOLEDAD: Because she told me you'd stop if I asked.
42 D MARGOT: Who told you?
43 D SOLEDAD: Your sister.
44 A ¶ Margot doesn't move.
* 45 A A hawk circles overhead, a dark scribble on the pale sky.
46 D MARGOT: My sister is dead.
47 D SOLEDAD: Yes. She was very clear about that.
48 A ¶ Margot stands.
49 A Soledad lifts a hand, palm out.
50 D SOLEDAD [CONT'D]: Sit. Please. We have twelve miles to talk.
51 D MARGOT: I'm going to kill you.
52 D SOLEDAD: Not before dusk.

### SCENE s01463 | INT. GREYHOUND DEPOT - WAITING ROOM - 2 A.M.
Detected names (may be incomplete or contain aliases): CORMAC BEAUFORT, ODALIE MWANGI-REID, VINCENZO PALLADINO, TALLULAH BRIGHT
* 1 A ¶ Molded plastic seats.
* 2 A A flickering departures board.
* 3 A A janitor's cart abandoned beside a drinking fountain.
4 A Four people share one row, each at a careful distance.
5 A ¶ CORMAC BEAUFORT (40s, trench coat, newspaper folded to the crossword) taps a pen against his knee.
6 A ODALIE MWANGI-REID (30s, parka, a duffel between her feet) watches the doors.
7 A VINCENZO PALLADINO (50s, windbreaker, fingers laced over a paunch) stares at the ceiling.
8 A TALLULAH BRIGHT (20s, headphones, backpack on her lap) bites her thumbnail.
9 D CORMAC: Nine letters. "Careless about the future."
10 D ODALIE: Improvident.
11 D CORMAC: That's ten.
12 D ODALIE: Then I don't know.
13 D VINCENZO: Reckless.
14 D CORMAC: Eight.
15 D VINCENZO: Then it's something else.
16 D TALLULAH (muttering): Everything's something else.
17 D CORMAC: Pardon?
18 D TALLULAH: Nothing. Talking to myself.
19 D ODALIE: Who's your bus?
20 D TALLULAH: Three-forty to Toledo.
21 D ODALIE: Same.
22 D TALLULAH: Really?
23 D ODALIE: Don't sound so thrilled.
24 D CORMAC: That makes three of us.
25 D VINCENZO: Four.
26 D CORMAC: Of course.
27 D ODALIE: Funny. Four strangers, same bus, same hour, none of us sleeping.
28 D VINCENZO: People don't sleep before a journey.
29 D ODALIE: Or after a crime.
* 30 A ¶ Silence.
* 31 A The board flickers.
* 32 A A vending machine hums.
33 D TALLULAH: That's dark.
34 D ODALIE: That's the news.
35 D CORMAC: I read that a jewelry store on Fifth was hit last night. Eleven grand in diamonds.
36 D VINCENZO: Eleven? I read forty.
37 D CORMAC: Papers exaggerate.
38 D VINCENZO: Or they underplay.
39 D ODALIE: Which paper?
40 D CORMAC: The Courier.
41 D ODALIE: The Courier says seventeen.
42 D CORMAC: You read it?
43 D ODALIE: I read everything. It's a habit.
44 D TALLULAH: Can I ask something?
45 D ODALIE: Go on.
46 D TALLULAH: Why does everyone here have a bag bigger than they need?
* 47 A ¶ Nobody answers.
48 A Cormac refolds his paper.
49 A Odalie nudges her duffel with her toe.
50 A Vincenzo unlaces his fingers and rests his hands, palms up, on his knees.
51 D VINCENZO: Because travel is unpredictable.
52 D TALLULAH: And your bag is clanking.
53 D VINCENZO: Cutlery.
54 D TALLULAH: Sure.
55 D CORMAC (to the room, quietly): Five minutes to boarding. Let's all be sensible.
56 D ODALIE: Sensible is my middle name.
57 D TALLULAH: Mine's Marguerite.
58 D VINCENZO: Mine's Giuseppe.
59 D CORMAC: Mine's classified.
60 A ¶ They look at one another and, one by one, begin to laugh, an exhausted, hollow, shared laugh that rolls down the row.

### SCENE s01464 | INT. SUNKEN CATHEDRAL OF THE DRAGON-KINGS - NIGHT
Detected names (may be incomplete or contain aliases): TAMSIN BRIGHTWELL, UDO HARTSHORN, WARDEN
* 1 A ¶ A vaulted nave drowned to the knees in black water.
* 2 A Columns of fossil bone rise into shadow.
* 3 A Crystal lanterns drift in the air, spilling cold green light on scales as large as shields, set into the floor like tiles of an immense mosaic.
4 A ¶ TAMSIN BRIGHTWELL (30s, mercenary, chainmail and a ragged scarlet cloak, a notched longsword on her back) wades along the central aisle, torch sputtering.
5 A Behind her, UDO HARTSHORN (60s, a priest's grey robe hitched to his thighs, a holy book wrapped in oilcloth) clutches the hem of his habit above the waterline.
6 D TAMSIN: Stay close.
7 D UDO: I could hardly stray.
8 D TAMSIN: The last priest strayed.
9 D UDO: And?
10 D TAMSIN: We didn't find him.
11 A ¶ Udo stops.
12 A Looks down.
* 13 A A scale shifts under the water, patient as a sleeping thing turning over.
14 D UDO (to himself): Lord, steady these old knees.
15 A ¶ Tamsin lifts the torch.
* 16 A At the aisle's end stands an altar, black basalt, its top a shallow bowl.
* 17 A In the bowl floats a single burning flame, small as a candle, steady in the still, cold air.
18 D TAMSIN: That's the Ember.
19 D UDO: It's smaller than the legends.
20 D TAMSIN: Everything is.
21 A ¶ She advances.
22 A Udo follows.
* 23 A The water ripples.
* 24 A Not from them.
25 D WARDEN [V.O.] (a voice like gravel in a bell): Who comes to the Hall of Ash?
26 A ¶ Tamsin stops.
27 A Draws her sword in one smooth rasp.
28 A Udo clutches his book.
29 D TAMSIN (to the nave): We seek the Ember.
30 D WARDEN [V.O.]: Many have sought it.
31 D UDO (low, to Tamsin): Do not provoke it.
32 D TAMSIN (low): I'm not provoking.
33 D WARDEN [V.O.]: You carry iron. You carry prayer. Which will you offer?
34 D TAMSIN: Neither.
35 D UDO: Tamsin.
36 D TAMSIN: I offer a trade.
* 37 A ¶ Silence.
* 38 A The lanterns stop drifting.
39 D WARDEN [V.O.]: Speak.
40 D TAMSIN: My name for your fire. A true one. The first thing I was ever called.
41 A ¶ Udo gasps.
42 A She doesn't look at him.
43 D UDO: Child, no. A name is a life.
44 D TAMSIN: It's a word.
45 D WARDEN [V.O.]: Words are life.
* 46 A ¶ The water stills completely.
* 47 A A great shape moves under the floor of scales, a ripple traveling the length of the nave, until the whole cathedral seems to breathe in.
48 D WARDEN [V.O., CONT'D]: Accepted.
49 A ¶ Tamsin lets her sword drop to her side.
50 A Opens her mouth.
51 A Whispers a single syllable that neither the audience nor Udo can hear.
* 52 A ¶ The flame leaps from the bowl, a tongue of white fire twisting through the air, and settles in her open palm.
* 53 A It does not burn.
* 54 A It purrs.
55 A ¶ Udo falls to his knees in the water, tears in his eyes.
56 A Tamsin stares at the flame, then at him.
57 D TAMSIN [CONT'D]: Say it back to me.
58 D UDO: I cannot.
59 D TAMSIN: Say what you heard.
60 D UDO: I heard nothing.
61 D TAMSIN (softly): Good.
62 A ¶ The Warden's laughter rolls across the vault, and the water rises.
63 D UDO: Run!
64 A ¶ They run.
* 65 A Behind them the scales rise from the floor one by one, glittering, and the nave ceiling cracks.
66 D TAMSIN (shouting over the thunder, to no one): I'll miss it!
67 D WARDEN [V.O.]: You will not even remember.
* 68 A ¶ The doors slam shut behind them.
* 69 A Silence.
70 A The torch hisses out, and in the new dark, a very faint voice, half sob, half laugh, whispers from the stairwell, "What was my name?"

### SCENE s01465 | INT. MUNICIPAL ARCHIVE - SUBBASEMENT VAULT - NIGHT
Detected names (may be incomplete or contain aliases): CLEO ARMSTRONG-NG, SILAS PRAGER
* 1 A ¶ A steel door the thickness of a man's chest stands open on a room of gray filing cabinets.
* 2 A Dust.
* 3 A A ceiling lamp swings slightly, though the air is still.
4 A ¶ CLEO ARMSTRONG-NG (30s, black turtleneck, hair under a cap, gloves) walks the aisle, running a flashlight beam over drawer labels.
5 A SILAS PRAGER (50s, security guard's uniform, key ring heavy on his belt) follows, humming, his shoes squeaking on the linoleum.
6 D SILAS: Quiet night.
7 D CLEO: Always is.
8 D SILAS: That's why I like it. Nobody wants old paper.
9 D CLEO: Nobody but us.
10 D SILAS: Us?
11 D CLEO: Archive staff.
12 A ¶ She smiles.
13 A He returns it, unsuspecting, and unlocks a cabinet marked 1974-1981.
* 14 A The drawer slides out with a whine.
15 D SILAS: Whose file?
16 D CLEO: Municipal land transfers.
17 D SILAS: Boring.
18 D CLEO: Valuable.
19 A ¶ She flips through folders, flat thumbs quick.
20 A Silas leans on the cabinet, humming something tuneless.
* 21 A A minute passes.
* 22 A Two.
23 A She finds a manila envelope, thick, tied with twine, sets it in her bag.
24 D SILAS: That's not the one you came for.
25 D CLEO: No?
26 D SILAS: The one you came for is in the next drawer. Third folder from the back. Tied in red.
27 A ¶ Cleo freezes.
28 A Slowly lifts her head.
29 A He straightens, no longer humming, the squeak gone from his shoe.
30 A His hand slides to his belt, not to a gun, but to the ring of keys, which he lifts and unclips, and drops into her palm.
31 D SILAS [CONT'D]: Take it. Take them all.
32 D CLEO: Who are you?
33 D SILAS: I was in the room in seventy-nine when they signed it. I've been waiting forty years for somebody to come take it back.
34 A ¶ Cleo stares at him.
35 A At the keys.
36 A She opens the next drawer, finds the third folder from the back, tied in red, and presses it against her chest, a breath leaving her like a long-held secret.
37 D CLEO: Why didn't you do it yourself?
38 D SILAS: Because I'm the guard. Guards don't steal. They get robbed.
39 A ¶ He holds out his wrists, grinning.
40 A She laughs, helpless, and for a moment they stand together in the swaying lamplight, two conspirators in a room full of ghosts, and then she kisses his cheek and runs.

### SCENE s01466 | INT. OFFICE TOWER ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): JOCELYN MARBURY, NADINE FOSSE, TEODORO LAVIGNE, VICTOR SANTAMARIA
* 1 A ¶ Brushed steel.
* 2 A A cracked mirror.
* 3 A Floor numbers glow red.
4 A Four people ride in uneasy silence.
5 A ¶ JOCELYN MARBURY (40s, trench coat, briefcase) stands near the panel.
6 A NADINE FOSSE (30s, scrubs under a puffer jacket) leans on the back rail.
7 A TEODORO LAVIGNE (50s, suit rumpled, tie pulled loose) stares at his shoes.
8 A VICTOR SANTAMARIA (20s, delivery uniform, a pizza box on his palm) taps the wall in time to a song only he hears.
* 9 A ¶ The elevator stops between floors 22 and 23.
* 10 A Lights flicker.
11 D VICTOR: Uh.
12 D JOCELYN: Don't.
13 D VICTOR: I didn't press anything.
14 D NADINE: Nobody did.
15 A ¶ Teodoro looks up.
16 A Sweat beads at his temple.
17 A He loosens his tie further.
18 D TEODORO: Somebody call security.
19 D JOCELYN: No signal.
20 D NADINE: I have bars.
21 D JOCELYN: Then she's lying.
22 D NADINE: Excuse me?
23 D TEODORO: Easy.
24 A ¶ Nadine holds up her phone.
* 25 A Three bars.
26 A She dials.
27 A Jocelyn lunges and swats it out of her hand; it skitters across the floor.
28 A Victor steps on it.
* 29 A Nobody breathes.
30 D NADINE: What is wrong with you?
31 D JOCELYN: The fewer calls, the better.
32 D VICTOR: For who?
33 A ¶ Jocelyn doesn't answer.
34 A Teodoro slumps against the wall, a hand to his chest.
* 35 A The lights die.
* 36 A In the dark, the sound of a zipper.
* 37 A A click.
* 38 A ¶ The lights return.
39 A Jocelyn holds a small black pistol.
40 A It points at Teodoro.
41 D JOCELYN: Twenty-second floor, Mr. Lavigne. You were supposed to get off.
42 D TEODORO: I was --
* 43 A ¶ The elevator lurches, drops six inches, and catches.
44 A Victor yelps, the pizza box flipping into the air.
45 A Nadine grabs his sleeve.
46 A Jocelyn staggers, and Teodoro lunges, wrestling her wrist as the gun fires into the ceiling.
* 47 A Plaster rains down.
* 48 A The doors judder, grind, and slide open on a blank concrete wall, the shaft's inner face.
49 A ¶ Everyone freezes.
* 50 A A pigeon feather drifts through the gap.

### SCENE s01467 | INT. ORBITAL STATION HELIOS-9 - HYDROPONIC GARDEN - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA QUELLE, ENGINEER BORIS NAKASHIMA-WEBB, PILAR ONDIEKI, ZEPHYR ADEBAYO-LANG, OTIENO RIVERA, INTRUDER, KORA
* 1 A ¶ Terraced racks of green, glowing under violet lamps.
* 2 A Water mists from ceiling nozzles.
* 3 A A pale artificial dawn climbs the curved bulkhead.
4 A ¶ CAPTAIN ISADORA QUELLE (50s, silver crop, grey uniform) inspects a tomato vine.
5 A ENGINEER BORIS NAKASHIMA-WEBB (40s, grease-stained overalls) crouches at a pump.
6 A DR. PILAR ONDIEKI (30s, white coat) logs soil samples.
7 A ZEPHYR ADEBAYO-LANG (20s, cadet, tablet in hand) trails the captain.
8 A OTIENO RIVERA (30s, botanist, gloves, pruning shears) prunes basil.
* 9 A ¶ A hatch in the far wall hisses open.
10 A An INTRUDER (unknown, tall, hooded in a gray ship-issue jacket, face in shadow) steps through and stands at the threshold.
11 D ISADORA: Cadet, who is that?
12 D ZEPHYR: I... don't have a log of anyone in this sector.
13 D ISADORA: Sir. Identify yourself.
14 A ¶ The INTRUDER lowers the hood.
15 A A woman, 30s, hollow-eyed, her hair shorn, her skin faintly translucent.
16 D INTRUDER: Kora. Third crew rotation.
17 D PILAR: There was no third rotation.
18 D KORA: There was. You deleted it.
19 A ¶ Boris rises slowly, a wrench in his hand.
20 A Otieno steps back, shears raised like a tiny sword.
21 D KORA [CONT'D]: I only came for the seeds.
22 D ISADORA: What seeds?
23 D KORA: The ones you brought from the surface. The ones that remember.
* 24 A ¶ The lamps overhead stutter.
25 A Zephyr drops the tablet.
* 26 A It clatters.
27 A Everyone freezes, and then, together, the group bolts toward the main hatch, Boris dragging Pilar, Otieno shoving Zephyr ahead, Isadora at the rear with her hand on the door lever, while Kora stands among the rows, watching them go, smiling.
28 D KORA [CONT'D] (softly): They always run to the same door.

### SCENE s01468 | INT. MERIDIAN LOGISTICS - BREAK ROOM - DAY
Detected names (may be incomplete or contain aliases): BARTHOLOMEW GRIGG, FARHAD ELYASI, LEOPOLDO VANTERPOOL, ADEWALE BROOKMAN, IT
* 1 A ¶ A kitchenette with a laminate table and a crooked sign: "YOUR MOTHER DOESN'T WORK HERE."
* 2 A A sheet cake sits on the table, half-eaten, the words "CONGRATULATIONS" down to "CONGRATU."
3 A ¶ BARTHOLOMEW GRIGG (50s, middle manager, tie knotted too tight) hovers near the cake.
4 A FARHAD ELYASI (30s, sales, phone in hand) scrolls.
5 A LEOPOLDO VANTERPOOL (40s, accounts, cardigan) refills his mug.
6 A ADEWALE BROOKMAN (30s, IT, lanyard heavy with badges) leans on the fridge.
7 D BARTHOLOMEW: So the cake is for Farhad.
8 D FARHAD: It's for the quarter.
9 D LEOPOLDO: It's for the department.
10 D ADEWALE: It's for whoever's still here.
11 D BARTHOLOMEW: He gets the first slice.
12 D LEOPOLDO: Who?
13 D BARTHOLOMEW: He does.
14 D FARHAD: I already had one.
15 D LEOPOLDO: Who's "he"?
16 D ADEWALE: He is Farhad. Obviously.
17 D BARTHOLOMEW: Not "he," Farhad. I meant Leopoldo.
18 D LEOPOLDO: I don't want cake.
19 D FARHAD: Then why is he holding a fork?
20 D LEOPOLDO: Who?
21 D ADEWALE: Please stop saying "he."
22 D BARTHOLOMEW: I'll cut it myself.
23 A ¶ He grabs the knife.
* 24 A It slips.
* 25 A The cake splits down the middle.
* 26 A "CONGRATU" becomes "CON" and "GRATU."
27 D FARHAD: Perfect.

### SCENE s01469 | EXT. SKI GONDOLA CABIN - DUSK
Detected names (may be incomplete or contain aliases): CALLUM DRAKE, BRIGID HENNESSY-ABE, SANTIAGO OYELOWO, MAGDALENA VOSS, EMERSON LAROCHE
* 1 A ¶ A steel and glass cabin hangs motionless over a snowy chasm, tilting slightly in the wind.
* 2 A Pines far below.
* 3 A A cable creaks.
4 A Five people crowd the benches, breath fogging the windows.
5 A ¶ CALLUM DRAKE (50s, patrol jacket) stands by the door.
6 A BRIGID HENNESSY-ABE (30s, snowboarder, goggles on forehead) kneels on the floor.
7 A SANTIAGO OYELOWO (40s, hotelier, fur-lined coat) sits, hands folded.
8 A MAGDALENA VOSS (60s, hiker, thermos on her knee) sips tea.
9 A EMERSON LAROCHE (20s, student, backpack on his lap) stares at the dark.
10 D CALLUM: Rescue knows we're here. They said three hours.
11 D BRIGID: It's been four.
12 D CALLUM: They said three to start.
13 D SANTIAGO: And when do they finish?
14 D CALLUM: When they finish.
15 D MAGDALENA: Tea?
16 D EMERSON: Please.
17 D MAGDALENA: One cup. We share.
18 D BRIGID: I'm not drinking from a stranger's thermos.
19 D MAGDALENA: I'm Magdalena. Now I'm not a stranger.
20 D BRIGID: Brigid.
21 D MAGDALENA: Brigid. Drink.
22 D SANTIAGO: The wind is picking up.
23 D CALLUM: It does that.
24 D SANTIAGO: It rocks the cabin.
25 D CALLUM: It's rated for ninety miles an hour.
26 D EMERSON: What's the wind now?
27 D CALLUM: Thirty.
28 D BRIGID: And the temperature?
29 D CALLUM: Minus eight.
30 D MAGDALENA: Minus eight with wind chill is minus fifteen, dear.
31 D CALLUM: Fine.
32 D SANTIAGO: How long before cold becomes dangerous?
33 D CALLUM: For five people in a closed cabin? Hours.
34 D EMERSON: How many hours?
35 D CALLUM: More than we need.
36 D BRIGID: You're lying.
37 D CALLUM: I'm managing expectations.
38 D MAGDALENA: He's doing what he can.
39 D BRIGID: Who?
40 D MAGDALENA: The patrolman.
41 D BRIGID: She meant Callum. Say Callum.
42 D MAGDALENA: I said "he."
43 D BRIGID: I know. It's unclear. He, he, he.
44 D EMERSON: Can we not?
45 D SANTIAGO: She's right though. We have two men, two women, and a kid.
46 D EMERSON: I'm twenty-two.
47 D SANTIAGO: And a very tall kid.
48 D CALLUM: Everyone, listen. We stay calm, we stay warm, we stay together.
49 D BRIGID: And if the cable snaps?
50 D CALLUM: It won't.
51 D BRIGID: If it does?
52 D CALLUM: Then we hold hands.
* 53 A ¶ Nobody laughs.
* 54 A Nobody speaks.
* 55 A The cabin sways, creaks, settles.
* 56 A A snowflake lands on the glass and melts into a perfect bead.

### SCENE s01470 | INT. MONASTERY BAKERY - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT OKAFOR, CORPORAL LINDQVIST, PRIVATE BRANDT, FRATE ANSELMO, PRIVATE TAKAHASHI, ^OKAFOR
* 1 A ¶ Flour hangs in the air like smoke.
2 A SERGEANT OKAFOR (40s, broad, mud to the knees) leans on a brick oven, eating warm bread.
3 A CORPORAL LINDQVIST (20s, freckled, rifle slung) sniffs a loaf as if it might be a trick.
4 A PRIVATE BRANDT (19, all elbows) kneads dough badly beside FRATE ANSELMO (70s, floury monk with a patient face).
5 A PRIVATE TAKAHASHI (30s, wire glasses, radio on his back) sits on a flour sack, eyes closed.
6 D OKAFOR: Best thing I've eaten since Naples.
7 D LINDQVIST: Don't get used to it, Sarge.
8 D BRANDT (to Anselmo): Like this? Is this right?
9 D ANSELMO: Gently. Bread is not a enemy.
10 A ¶ Anselmo lifts his head.
* 11 A The bells in the tower above have stopped swinging, yet something still hums in the beams.
12 A Okafor stops chewing, Lindqvist drops the loaf, and Brandt's hands freeze in the dough while Takahashi's eyes snap open and he tears the headset to his ear.
* 13 A Dust sifts from the ceiling onto the oven and the bread and all five of them.
14 D TAKAHASHI: Tanks.
15 D ANSELMO: Tanks.
16 D ^OKAFOR: Down!
* 17 A ¶ The wall bursts inward.
18 A Okafor tackles Brandt behind the oven, Lindqvist hurls herself over the kneading table and drags Anselmo under it, and Takahashi rolls off the sack clutching the radio as loaves scatter across the stone floor like startled birds.

### SCENE s01471 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): PEPPER, ADEYEMI-HALL, DEZ, CARVALHO, CAPTAIN OLUWASEUN BRANNIGAN
* 1 A ¶ A round room wrapped around a spiral stair.
* 2 A A kettle sits on a coal stove.
* 3 A A wall phone with a cord like a pigtail hangs by the door.
* 4 A Rain hammers the little windows.
5 A ¶ PERPETUA "PEPPER" ADEYEMI-HALL (50s, oilskin coat, tired humor) is wrestling a very large frozen turkey into a very small oven.
6 D PEPPER: In you go. Nobody's judging.
* 7 A ¶ The turkey does not go in.
8 A She tries it sideways.
9 D PEPPER [CONT'D]: Wide-body. Fine. Everybody's built different.
10 A ¶ DESMOND "DEZ" CARVALHO (30s, a nervous inspector in a suit that has never seen weather) stands dripping on the mat, holding a clipboard like a shield.
11 D DEZ: Ms. Adeyemi-Hall, I'm required to note that the lamp is, technically, off.
12 D PEPPER: The lamp is resting.
13 D DEZ: Ships rely on that lamp.
14 D PEPPER: Ships rely on a lot of things. They also rely on a roast.
15 D DEZ: There is a ship out there right now.
16 D PEPPER: There's always a ship out there. Sit. Sit! You're making the room look nervous.
17 A ¶ Dez sits on a stool.
* 18 A It wobbles.
19 A He grips the table.
20 D DEZ: I was told the Board of Maritime Safety had been in touch.
21 D PEPPER: The Board of Maritime Safety sent me a calendar. January's a puffin.
22 A ¶ She finally jams the turkey in and slams the oven door.
* 23 A Victory.
24 A She dusts her hands.
25 A Dez writes something down.
26 D PEPPER [CONT'D]: What did you just write?
27 D DEZ: "Turkey."
28 D PEPPER: Good. Underline it.
* 29 A ¶ The wall phone RINGS.
30 A Both of them look at it.
* 31 A It RINGS again.
32 A Pepper does not move.
33 D DEZ: Aren't you going to...?
34 D PEPPER: It's the same man every Thursday. He wants to know about the weather.
35 D DEZ: It's Thursday?
36 D PEPPER: It's always Thursday somewhere. Answer it, if you're so keen.
37 A ¶ Dez picks up the receiver.
38 A Holds it at arm's length.
* 39 A ¶ X
40 A ¶ Dez goes white.
41 A He holds the receiver out to Pepper.
42 A She doesn't take it.
43 D DEZ (whisper): A ferry. There's a ferry.
44 D PEPPER: Tell him the lamp is resting.
45 D DEZ: I will not tell him the lamp is resting!
46 D BRANNIGAN [V.O.] (over phone): Hello? Is someone there? Is that the keeper?
47 A ¶ Dez clamps the phone to his chest, panting.
48 A Pepper sighs, as if he's asked her to move a sofa.
49 A She heaves herself up, sets the kettle aside, and takes the receiver.
50 D PEPPER (into phone): Marguerite. Pepper. I'll have her lit in four minutes. Stand off to starboard and sing something.
51 D BRANNIGAN [V.O.] (over phone): Four minutes? It's a thirty-minute climb.
52 D PEPPER (into phone): Not if you know the stairs.
53 A ¶ She hangs up.
54 A Walks to the spiral stair.
55 A Dez follows, clipboard abandoned.
56 D DEZ: You can't climb it in four minutes.
57 D PEPPER: No.
58 A ¶ She opens a panel beside the stair.
* 59 A Inside: a small brass lever and a rope.
60 A She hauls the lever.
* 61 A Far above, something grinds, then flares.
* 62 A A white sweep of light crosses the window and the kitchen goes bright, then dark, then bright.
63 A ¶ Dez stares.
64 D DEZ: It was always automatic?
65 D PEPPER: Since nineteen-eighty. I just like to see who turns up.
66 D DEZ: Then why was it off?
67 D PEPPER: I switched it off at six. To see who'd notice.
68 A ¶ She picks up the kettle again.
69 A Dez opens his mouth, closes it, and picks up his clipboard.
* 70 A ¶ The kitchen door BANGS open.
71 A A wet, enormous man in a ferry captain's cap fills the frame: CAPTAIN OLUWASEUN BRANNIGAN (60s, a tide-beaten face, furious), a handheld radio still crackling at his belt.
* 72 A Behind him, the storm.
73 D BRANNIGAN: Which of you turned my lighthouse off?
74 A ¶ Pepper points at Dez without looking.
75 D DEZ: Me?!
76 D BRANNIGAN (to Dez, advancing): You? You're the one?
77 D DEZ: No! I'm the inspector!
78 D BRANNIGAN: Inspector of what?
79 D PEPPER: Turkey.
80 A ¶ Brannigan stops.
81 A Smells the air.
82 A Sniffs again.
83 A His face softens by degrees.
84 D BRANNIGAN: Is that sage?
85 D PEPPER: Take your coat off, Seun. The phone can have your voice. There's enough for everyone.
86 D BRANNIGAN (still suspicious): How much enough?
87 D PEPPER: Wide-body enough.
88 A ¶ Brannigan peels off his dripping coat.
89 A Dez, bewildered, makes room on the stool.
* 90 A It wobbles.
91 A All three men and the turkey settle in as the lighthouse beam wheels slowly past the window, over and over.
92 D DEZ (quietly, to himself): Underline "turkey."
93 A ¶ He does.

### SCENE s01472_0 | INT. SALT MINE - ELEVATOR CAGE - NIGHT
Detected names (may be incomplete or contain aliases): KITE, TOBIAS, RAFF, MOUSE
* 1 A ¶ Two hundred meters down.
* 2 A White walls.
* 3 A Dripping brine.
4 A ¶ Four figures in grey coveralls crowd the cage.
* 5 A Hard hats.
* 6 A Headlamps.
7 A ¶ RAFFERTY "RAFF" OYELARAN-STEIN.
8 A Late 40s.
9 A Planner.
10 A Calm hands.
11 A ¶ MIRELA "MOUSE" DRAGOMIR.
12 A 20s.
13 A Safecracker.
14 A Chews her lip.
15 A ¶ TOBIAS VANTERPOOL.
16 A 60s.
17 A Retired mine foreman.
18 A Knows every shaft.
19 A ¶ KENJI "KITE" NAKAGAWA-REYES.
20 A 30s.
21 A Driver.
22 A Jittery.
* 23 A ¶ The cage shudders.
* 24 A Stops.
25 D KITE: We stopped.
26 D TOBIAS: We're there.
27 D RAFF: Lamps off. On my count.
28 A ¶ They click off.
* 29 A Black.
* 30 A A drip.
* 31 A A breath.
32 D RAFF [CONT'D]: Mouse. Where's the vault?
33 D MOUSE: Four hundred meters east. Behind a wall of rock salt.
34 D RAFF: Tobias?
35 D TOBIAS: Old drift. Sealed in sixty-four. I know the way, Raff.
36 D RAFF: Kite, you stay with the cage.
37 D KITE: Why do I always stay with the cage?
38 D RAFF: Because the cage is how we leave.
* 39 A ¶ Lamps on.
40 A They step out.
* 41 A Salt crunches underfoot.

### SCENE s01472_1 | INT. SALT MINE - MAIN DRIFT - CONTINUOUS
Detected names (may be incomplete or contain aliases): MOUSE, TOBIAS, RAFF
* 1 A ¶ A tunnel.
* 2 A Rails.
* 3 A An abandoned ore cart.
4 A ¶ Tobias leads.
5 A Mouse behind.
6 A Raff last.
* 7 A Their lamps carve white cones in the dark.
8 D MOUSE: Tobias, how deep is the vault wall?
9 D TOBIAS: Two meters. Salt. Soft, but it carries sound.
10 D MOUSE: Then no drill.
11 D TOBIAS: No drill.
12 A ¶ Raff stops.
13 A Holds up a fist.
14 A The other two freeze.
* 15 A ¶ A distant HUM.
* 16 A A headlight sweeps across the far end of the tunnel.
* 17 A An automatic ore train, no driver.
18 D RAFF (whisper): Ore train. Down.
19 A ¶ All three drop behind the ore cart.
* 20 A Lamps off.
21 A Tobias presses a hand over Mouse's shoulder.
22 A She flinches, then steadies.
* 23 A ¶ The train grinds past.
* 24 A Its headlight slides over the cart.
* 25 A Stops.
26 D TOBIAS (barely audible): Don't breathe.
* 27 A ¶ The beam holds, searching.
28 A Mouse's eyes are huge.
29 A Raff's hand eases toward a rubber mallet at his belt.
* 30 A ¶ A relay CLACKS.
* 31 A The track switches.
* 32 A ¶ The beam swings away.
* 33 A The train recedes.
34 A The three exhale together.
35 D MOUSE: That was...
36 D RAFF: Still on schedule. Move.
37 A ¶ They rise.
38 A They move faster.

### SCENE s01472_2 | INT. SALT MINE - SEALED DRIFT - LATER
Detected names (may be incomplete or contain aliases): TOBIAS, MOUSE, RAFF, KITE
* 1 A ¶ A wall of grey-white salt.
* 2 A A rusted door half buried in it.
3 A ¶ Tobias taps the wall.
4 A Listens.
5 D TOBIAS: Here.
6 D MOUSE: Raff, I need ten minutes.
7 D RAFF: You have six.
8 D MOUSE: Raff.
9 D RAFF: Mouse. Six.
10 A ¶ She kneels.
11 A Unrolls a canvas kit.
* 12 A Brushes, a stethoscope, a tiny hammer.
13 A ¶ Tobias takes a position at the corner.
14 A Raff paces.
15 D RAFF [CONT'D] (into radio, low): Kite. Status.
16 D KITE [V.O.] (radio): Cage is fine. I'm fine. Everyone's fine. Why do you ask?
17 D RAFF: Stay on the line.
18 D KITE [V.O.] (radio): Raff, there's a light coming down the main shaft.
19 A ¶ Raff stops pacing.
20 A Tobias turns.
21 D RAFF: How far?
22 D KITE [V.O.] (radio): Forty meters, maybe. The second cage is dropping.
23 D TOBIAS: Haul run. It's early.
24 D RAFF: Mouse!
25 D MOUSE: Four minutes!
26 D RAFF: You have two!
27 A ¶ Mouse bites down on the stethoscope.
28 A Turns a dial by feel.
* 29 A Click.
* 30 A Click.
* 31 A Click-CLUNK.
* 32 A ¶ The door sags inward.
* 33 A Behind it: a steel cabinet, a stack of velvet cases.
34 D MOUSE: Open!
35 A ¶ Tobias and Raff haul the door wide.
36 A Mouse scoops cases into a duffel.
37 A Tobias checks the corridor.
38 D TOBIAS: Raff! Alarm!
* 39 A ¶ An alarm BLARES down the drift.
* 40 A Strobes pulse white on the salt.
41 D RAFF (grabbing the duffel): Run!
42 A ¶ They scatter down the drift, lamps swinging wildly, salt dust boiling up behind them.

### SCENE s01472_3 | INT. SALT MINE - ELEVATOR CAGE - CONTINUOUS
Detected names (may be incomplete or contain aliases): KITE, MOUSE, RAFF, TOBIAS
1 A ¶ Kite hears the pounding feet before he sees them.
2 A Raff, Mouse, Tobias burst out of the dark.
3 D KITE: Go go go go!
4 A ¶ They pile in.
5 A Kite slams the lever.
* 6 A The cage lurches upward.
* 7 A ¶ Below, the strobes flicker between the bars.
* 8 A Then the dark swallows them.
* 9 A ¶ The cage rattles up through the rock.
* 10 A Four chests heaving.
* 11 A No one speaks.
12 A ¶ Finally Mouse laughs.
13 A A short, breathless bark.
14 D MOUSE: Six minutes.
15 D RAFF (grinning despite himself): Five.
16 D KITE: I stayed with the cage.
17 D TOBIAS: You did.
* 18 A ¶ The cage keeps climbing toward a thin line of stars.

### SCENE s01473 | INT. CORNER LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): TEDDY, MAKINDE-LOWE, MINA, ASHWORTH-REYES, ATTENDANT
* 1 A ¶ A long fluorescent room that hums on a note slightly flat of pleasant.
* 2 A Forty-year-old dryers turn their round windows to the room like patient, soapy eyes.
* 3 A Linoleum the color of weak tea.
* 4 A A vending machine sells one kind of detergent and one kind of regret.
* 5 A ¶ At the far end, a wall intercom, brown with age, crackles every so often like a throat clearing itself.
6 A ¶ THEODORA "TEDDY" MAKINDE-LOWE (60s, silver hair pinned under a scarf, the posture of a retired headmistress) folds towels with military corners.
7 A She does it slowly.
8 A She does it as an argument.
9 A ¶ At the next folding table, GUILLERMINA "MINA" ASHWORTH-REYES (60s, jewelry that clinks, a laugh kept in reserve) is unloading a basket of what appear to be fifty identical white shirts.
10 A ¶ Neither woman looks at the other.
* 11 A The dryers turn.
12 D MINA: They've changed the soap.
13 D TEDDY: They have not.
14 D MINA: It smells different.
15 D TEDDY: You smell different. You've changed your perfume.
16 D MINA: I have not.
17 D TEDDY: It has a note of disappointment in it.
18 A ¶ Mina sets down a shirt, very gently, as one sets down a grenade.
19 A She smooths it.
20 A She picks up another.
21 D MINA: Is that a towel or a tribute?
22 D TEDDY: It is a towel folded the way a towel is meant to be folded.
23 D MINA: It's a bit sharp for a towel. She'd never fold them like that, you know.
24 D TEDDY: She would not. She didn't have the discipline. She had charm, which is the next best thing to a fully ironed shirt.
25 A ¶ Mina's hands go still on the shirt in front of her.
26 D MINA: Don't.
27 D TEDDY: I merely said...
28 D MINA: Don't do the voice. Don't do the voice you do.
29 D TEDDY: What voice? This is my voice. It has been my voice since nineteen-sixty-one.
* 30 A ¶ The wall intercom CRACKLES.
31 A Both women look up.
32 D ATTENDANT [V.O.] (over intercom, bored): Attention customers. Dryer six is finished. Dryer six is finished. Please remove your items from dryer six.
33 A ¶ Neither moves.
* 34 A Dryer six, at the end of the row, gives a long, low buzz.
35 D TEDDY: That's yours.
36 D MINA: Yours.
37 D TEDDY: You were by it.
38 D MINA: You were nearer.
39 D ATTENDANT [V.O.] (over intercom): Dryer six. Also, someone has left a casserole dish in dryer three.
40 A ¶ Teddy goes pink at the ears.
41 A Mina notices.
42 A She smiles, slowly, like a woman who has just found the pearl in the oyster.
43 D MINA: A casserole dish.
44 D TEDDY: It's nothing.
45 D MINA: In a dryer.
46 D TEDDY: It had gone cold, and I thought...
47 D MINA: You thought you'd warm it up in a dryer. At a laundromat. At midnight.
48 D TEDDY (with dignity): I was having an evening.
49 A ¶ Mina starts to laugh.
50 A It's a small laugh at first, a hiccup behind her teeth.
51 A She presses a hand over her mouth.
* 52 A The bracelets clink.
53 D TEDDY [CONT'D]: Stop that.
54 D MINA: I'm not doing anything.
55 D TEDDY: You're laughing at me.
56 D MINA: I'm laughing at a casserole.
57 D TEDDY: It was her recipe.
58 A ¶ The laughter stops as if a switch had been thrown.
* 59 A ¶ The dryers keep turning.
* 60 A The room hums its flat note.
61 A Mina picks a shirt up, puts it down.
62 A Teddy folds a towel, unfolds it, folds it again.
63 D MINA (quietly): It was her recipe.
64 D TEDDY: It's the only one I have.
65 D MINA: I have the chicken.
66 D TEDDY: You have the chicken.
67 D MINA: I've had it for six years and I've never once made it.
68 D TEDDY: Nor I the casserole. Until tonight. I put it in the dryer and I stood there and I watched it go round and I thought, this is the stupidest thing I have ever done.
69 D MINA: It is the stupidest thing.
70 D TEDDY: It is.
71 D MINA: It's wonderful.
72 D TEDDY (cracking): Mina, I cannot do this to a perfectly good evening.
73 A ¶ She bangs a folded towel down on the table.
* 74 A A second.
* 75 A A third.
76 A She grabs the stack and hurls the whole thing across the room.
* 77 A It hits the vending machine with a soft, ridiculous FLUMP.
78 A ¶ Mina stares.
79 A Then she picks up a shirt and throws it, too.
* 80 A It lands on Teddy's head.
81 A For a moment Teddy sits there under it, motionless, like a ghost in a bad school play.
82 D TEDDY [CONT'D] (from under the shirt): That was hers.
83 D MINA: Was it?
84 D TEDDY: It was a very nice shirt.
85 A ¶ She pulls it off.
86 A Both women are laughing now, helplessly, hanging onto the folding table.
87 D ATTENDANT [V.O.] (over intercom, deadpan): Customers. Please keep your grief to the back of the store.
88 A ¶ That makes it worse.
89 A They have to sit down on the floor.

### SCENE s01474 | INT. NIGHT-SHIFT CAR WASH - 3 A.M.
Detected names (may be incomplete or contain aliases): NADIA SZABO, DOM, ACHEBE, OLD HARLAN PRICE, LUIS FERRO, VANCE
* 1 A ¶ Fluorescent lights.
* 2 A Wet concrete.
* 3 A A conveyor hums, empty.
4 A ¶ Four people around a break-room table inside a glass booth.
* 5 A Vending coffee.
* 6 A Donuts.
7 A ¶ NADIA SZABO (30s, manager) counts the till.
8 A DOMINIC "DOM" ACHEBE (20s) eats.
9 A OLD HARLAN PRICE (70s) does a crossword.
10 A LUIS FERRO (50s) stirs his coffee for too long.
11 D DOM: Seven letters, "cheerful and quiet."
12 D HARLAN: Serene.
13 D NADIA: That's six.
14 D LUIS (not looking up): Nobody's cheerful at three in the morning.
15 D DOM: I'm cheerful.
16 D NADIA: You're asleep.
17 D HARLAN: Placid. Seven.
18 D DOM: He's eating.
19 D NADIA: Both.
* 20 A ¶ Quiet.
* 21 A The conveyor hums.
* 22 A Headlights sweep the glass.
* 23 A ¶ A black sedan rolls to the entrance and stops.
* 24 A Nobody gets out.
25 D NADIA [CONT'D]: Closed sign's on.
26 D HARLAN: Sign's always on.
27 D LUIS (low): Nobody go out.
28 D DOM: Why not?
29 D LUIS: That's the third night. Same car. Same plate. Look at the plate.
30 A ¶ They look.
31 A Dom stops chewing.
32 D HARLAN: Who parks and waits at a car wash?
33 D LUIS: A man who's already clean.
34 D NADIA: Luis...
* 35 A ¶ The sedan's door opens.
36 A A polished shoe touches wet concrete.
37 A MR. VANCE (50s, camel coat, pleasant face) steps out and walks toward the booth, hands visible, smiling.
38 D LUIS (whispering): He asked me last night where the cameras are.
39 D NADIA: And you said?
40 D LUIS: Nothing.
41 D HARLAN: Good.
42 D DOM: Then why's he coming to ask again?
43 A ¶ Nadia's hand slides under the counter and closes on something cold.

### SCENE s01475_0 | EXT. FLOODED SUGAR MILL - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN RUTH OYELOWO-KAUFMANN, SERGEANT BASHIR AL-HAMDANI, MEDIC, CAPTAIN, SERGEANT
* 1 A ¶ A war-wrecked sugar mill on a river plain.
* 2 A The ground floor stands in knee-deep brown water.
* 3 A Chimney broken.
* 4 A Rain has thinned to drizzle.
5 A ¶ Three soldiers wade between iron vats, rifles above their heads.
6 A All three are exhausted and trying not to show it.
7 A ¶ CAPTAIN RUTH OYELOWO-KAUFMANN (40s, steady, carries a map case) goes first, testing each step with a pole.
8 A SERGEANT BASHIR AL-HAMDANI (30s, broad shoulders, a limp he hides) follows, watching the ridge line.
9 A A young MEDIC (20s, red cross armband, boots gone) brings up the rear, carrying a pack too big for him.
10 D CAPTAIN: Stairs on the left. We take the second floor and dry out.
11 D SERGEANT: Dry out, Captain? With what?
12 D CAPTAIN: With hope, Sergeant.
13 A ¶ The Medic stumbles on a submerged rail.
14 A The Sergeant catches him by the strap and sets him upright without a word, and the Captain stops, turns, and watches the boy catch his breath before she moves on.

### SCENE s01475_1 | INT. SUGAR MILL - SECOND FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT, CAPTAIN, MEDIC, IBRAHIM
* 1 A ¶ A long room of rotted grain sacks and a cold boiler.
* 2 A A hole in the roof lets in the rain.
3 A The three of them drop their packs.
4 A ¶ The Captain spreads her map on a barrel and studies it with a pencil stub.
5 A The Sergeant props his rifle at the window, rubs his knee, then looks out at the dark plain.
6 A The Medic sits against the wall, unlaces his sodden boots, and winces as he peels them off.
7 D SERGEANT: How far to the bridge?
8 D CAPTAIN: Fourteen kilometers.
9 D SERGEANT: In the morning?
10 D CAPTAIN: At dawn. If the river lets us.
11 D MEDIC (small voice): The river's already let us. It came up to meet us.
12 A ¶ The Sergeant almost smiles.
13 A The Captain doesn't look up from her map.
14 D CAPTAIN: You'll want those feet dry, Medic.
15 D MEDIC: Yes, ma'am.
16 D CAPTAIN: Then dry them. That's an order.
17 A ¶ The Medic wrings out a sock.
18 A The Sergeant sits beside him and hands over a rag from his own kit.
19 D SERGEANT: Use this. It's clean. Mostly.
20 D MEDIC: Thank you.
21 D SERGEANT: What's your name, son? I've been calling you Medic for six days.
22 D MEDIC: Ibrahim, Sergeant. Ibrahim Osei.
23 D SERGEANT: Ibrahim. Good. A man needs a name in the dark.
24 A ¶ The Captain finally looks up.
* 25 A A beat.
26 A Something eases in her face.
27 D CAPTAIN: Ibrahim, how old are you?
28 D IBRAHIM: Nineteen, ma'am.
29 D CAPTAIN: Nineteen.
30 A ¶ She says it softly, as if turning the word over to find out what it weighs.
31 A Then she folds the map, takes a tin from her pocket, and pries it open.
32 D CAPTAIN [CONT'D]: Rations. One tin of peaches. We split it three ways.
33 D SERGEANT: Peaches? Where did you get peaches?
34 D CAPTAIN: I've carried them since the coast. I was saving them.
35 D SERGEANT: For what?
36 D CAPTAIN: For a night like this one. When nothing else was left to save them for.
37 A ¶ She passes the tin.
38 A The Sergeant takes a slice and passes it on.
39 A Ibrahim takes a slice and holds it up to the dim light like a jewel before he eats it.
40 D IBRAHIM: It's sweet.
41 D SERGEANT: It is.
42 D CAPTAIN: Eat the syrup too. We'll want the sugar tomorrow.
43 A ¶ They drink the syrup in turns, silently.
* 44 A Rain ticks on the sacks.
* 45 A Below them the water slaps against the vats.
46 A ¶ The Sergeant takes the first watch at the window.
47 A The Captain lies down with her pack for a pillow, her eyes open.
48 A Ibrahim curls on his side, hands tucked between his knees.
49 D IBRAHIM (half-asleep): Sergeant? Do you think we'll make the bridge?
50 D SERGEANT (not turning): Sleep, Ibrahim.
51 D IBRAHIM: But do you think...
52 D SERGEANT: I think the bridge has waited this long. It can wait for you.
53 A ¶ Ibrahim's breath slows.
54 A The Captain closes her eyes.
55 A The Sergeant stays at the window, a shape against the gray, listening to the rain and the river and, beyond them, nothing at all.

### SCENE s01476 | INT. ORBITAL GREENHOUSE RING - "SOLARIUM 3" - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): IMOGEN FAIRWEATHER-OKORO
* 1 A ¶ A curved corridor of glass and ribbed steel, wrapped around a slow-turning station.
* 2 A Rows of tomato vines climb silver trellises under violet grow-lamps.
* 3 A Beyond the glass, Saturn's rings burn thin and gold against black.
4 A ¶ DR. IMOGEN FAIRWEATHER-OKORO (50s, close-cropped gray hair, a patched blue jumpsuit, hands stained green to the wrist) walks the rows with a tablet.
5 A She is humming.
6 A She stops at a vine and presses a ripe tomato between thumb and finger.
7 D IMOGEN: Good girl.
8 A ¶ She plucks it, bites in, closes her eyes.
* 9 A The station is quiet.
* 10 A The lamps hum on a calm note.
* 11 A Everything is exactly as it should be.
12 A ¶ She taps the tablet and speaks into it.
13 D IMOGEN [CONT'D]: Greenhouse log, day four hundred and twelve. Yield nominal. Humidity nominal. Crew morale...
14 A ¶ She smiles at the empty corridor.
15 D IMOGEN [CONT'D]: Nominal. Seeing as I'm the crew.
* 16 A ¶ A soft chime.
* 17 A The tablet screen flickers.
* 18 A A recorded voice, her own, younger, bright, comes through the speaker.
19 D IMOGEN [V.O.] (recording): Log, day one. If you're hearing this, Imogen, then the relief ship is overdue and I've been right about the schedule all along.
20 A ¶ Imogen's smile fades.
21 A She lifts the tablet and scrolls.
* 22 A A file she does not remember is open.
23 D IMOGEN [V.O., CONT'D] (recording): Don't go to the east vines. The ones in the corner. Don't water them. Don't touch them. They aren't ours.
24 A ¶ Imogen turns her head slowly.
* 25 A At the end of the ring, past the last trellis, a single vine she has never planted is climbing the glass, pulsing, in time with her breath.

### SCENE s01477 | EXT. SALT FLAT - HIGH NOON
Detected names (may be incomplete or contain aliases): LUCKY, TREVINO-ASH, BARNABY CROW
* 1 A ¶ White.
* 2 A Flat.
* 3 A Shimmering to the horizon.
* 4 A A dead windmill.
* 5 A A single iron water trough, bone dry.
6 A ¶ LUCINDA "LUCKY" TREVINO-ASH (30s, sun-cracked lips, black duster, a rifle across her saddle) sits a paint mare in the glare.
7 A ¶ Across the flat, a man on foot.
8 A BARNABY CROW (60s, one blind eye, a gold tooth, no horse).
9 A He drags a coffin lid behind him on a rope.
10 A ¶ Lucky waits.
11 A He keeps coming.
12 D LUCKY: That's far enough.
13 D BARNABY: Is it?
14 A ¶ He keeps coming.
15 D LUCKY: Barnaby.
16 D BARNABY: Lucky.
17 D LUCKY: Where's your horse?
18 D BARNABY: Ate it.
19 D LUCKY: You didn't.
20 D BARNABY: Wanted to.
21 A ¶ He stops ten paces off.
22 A Sits on the coffin lid.
23 A Wipes his face.
24 D BARNABY [CONT'D]: Got any water?
25 A ¶ She tosses him a canteen.
26 A He drinks.
27 A Pours some on his head.
28 A Hands it back, empty.
29 D LUCKY: That was my last.
30 D BARNABY: I know.
31 A ¶ Her rifle comes up.
32 A He doesn't flinch.
33 D BARNABY [CONT'D]: Before you shoot me. Look in the lid.
34 D LUCKY: Why?
35 D BARNABY: Humor an old man.
36 A ¶ She keeps the rifle on him.
37 A Leans out of the saddle and flips the lid with her boot.
* 38 A Underneath: a bundle of bank notes, wet and rotting, tied with twine.
39 D LUCKY: That the Dunmore money?
40 D BARNABY: What's left. The salt got in.
41 A ¶ Lucky laughs.
42 A A short, cracked bark.
43 A Barnaby laughs, too.
44 A They are both still laughing when the rifle goes off.
* 45 A ¶ The shot echoes.
46 A Barnaby looks down.
* 47 A Nothing.
* 48 A The bullet has kicked up salt a foot from his boot.
49 D LUCKY: That's for the horse.
50 D BARNABY (wheezing): Fair.

### SCENE s01478 | INT. DEEP-SEA SURVEY HABITAT "KELP-9" - COMMON ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN HENRIETTA VOSS-LIANG, TAMSIN ODUYA, ENGINEER PIOTR NAKAMURA-BELL, TOPSIDE, GROAN
* 1 A ¶ A cramped steel room with a single round viewport.
* 2 A Beyond it, blackness and drifting silt.
* 3 A Bunks along one wall.
* 4 A A galley table bolted to the floor.
* 5 A A wall speaker with a dented grille.
6 A ¶ Three crew members sit at the table playing cards.
7 A A fourth voice lives in the speaker.
8 A ¶ CAPTAIN HENRIETTA VOSS-LIANG (50s, gray braid, reading glasses on a cord) deals.
9 A DR. TAMSIN ODUYA (30s, tall, a bandaged hand) arranges her cards slowly.
10 A ENGINEER PIOTR NAKAMURA-BELL (40s, heavy, oil under his nails) eats from a foil pouch with a plastic spoon.
11 D VOSS-LIANG: Your bid, Doctor.
12 D TAMSIN: Pass.
13 D PIOTR: She always passes.
14 D TAMSIN: I always win.
15 D PIOTR: When?
16 D TAMSIN: Eventually.
* 17 A ¶ A low, slow GROAN passes through the hull.
* 18 A Nobody looks up.
19 D VOSS-LIANG: That's the third time today.
20 D PIOTR: It's the sediment settling. Pressure shifts. It's nothing.
21 D TAMSIN: Nothing makes a very specific sound.
* 22 A ¶ The speaker crackles.
23 D TOPSIDE [V.O.] (over speaker): Kelp-9, Topside. Weather's picking up. We'll hold the surface buoy another twelve hours, then we're sending the lift. Over.
24 D VOSS-LIANG (toward speaker): Copy, Topside. All quiet down here. Out.
25 A ¶ She sets her cards face-down.
26 D VOSS-LIANG [CONT'D]: That's the longest any of us has gone without an alarm.
27 D PIOTR: Don't say that.
28 D VOSS-LIANG: Why not?
29 D PIOTR: Because the habitat listens.
30 D TAMSIN: It does not listen. It's a tin can with a sandwich in it.
* 31 A ¶ The GROAN comes again, closer.
* 32 A A pipe overhead ticks.
* 33 A The silt outside the viewport swirls, as if something huge has moved behind it.
34 A ¶ Tamsin stands slowly.
35 A Walks to the viewport.
36 A Presses her bandaged hand to the glass.
37 D TAMSIN [CONT'D]: Captain.
38 D VOSS-LIANG: Doctor?
39 D TAMSIN: The silt isn't settling.
40 A ¶ Piotr drops his spoon.
41 A He goes to the viewport.
42 A Voss-Liang is already there.
43 A All three stare out at a patch of black that is slightly blacker than the rest, and that is rising.
44 D TOPSIDE [V.O.] (over speaker, distorted): Kelp-9, Topside, we're showing a seismic spike. Repeat, seismic spike. Get out of there. Get out of there now.
* 45 A ¶ The lights flicker.
* 46 A The hull begins to SHRIEK.

### SCENE s01479 | INT. ROLLER DERBY RINK - BASEMENT OF A BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): PRISS, MONTEIRO, COACH ARLETTE BEAUMONT-WEI, RESERVE SKATER, ODALYS
* 1 A ¶ Cracked maple floor.
* 2 A Bleachers made of old pews.
* 3 A A hand-painted banner reads: THE DOCKSIDE DAMES.
4 A ¶ Two skaters sit on a bench, lacing up.
5 A The younger, PRISCILLA "PRISS" MONTEIRO (20s, shaved head, neon wrist guards), bounces a knee.
6 A The older, COACH ARLETTE BEAUMONT-WEI (50s, clipboard, whistle, a voice like gravel), stands over her.
7 D ARLETTE: Eyes up. Head up. Heart up.
8 D PRISS: Which one first?
9 D ARLETTE: All of them.
10 A ¶ She blows the whistle.
* 11 A It echoes off the pews.
12 D PRISS (muttering): Okay. Okay. Okay.
13 D ARLETTE (to the empty room): Anybody else? Anybody?
* 14 A ¶ Silence.
* 15 A A single pew creaks.
16 D ARLETTE [CONT'D] (louder, to Priss): Where's the rest of the team?
17 D PRISS: Flu. Four of them. And Dana's cousin's wedding.
18 D ARLETTE: We have a bout in twenty minutes.
19 D PRISS: I know.
20 D ARLETTE: With three skaters.
21 D PRISS: Two. You don't skate.
22 A ¶ Arlette glares.
23 A Priss shrinks.
* 24 A ¶ The basement door bangs.
25 A A stranger descends the steps: a woman in a long coat and rental skates, rolling unsteadily down the aisle.
26 A RESERVE SKATER (30s, athletic, bleached ponytail, a duffel on her shoulder).
27 A She stops at the rail.
28 D RESERVE SKATER: Is this the Dockside Dames?
29 D ARLETTE: Who's asking?
30 D RESERVE SKATER: Somebody who played four years for the Harbor Hellcats.
31 D PRISS (whisper): She's a Hellcat.
32 D ARLETTE (to Priss): I can hear.
33 D RESERVE SKATER: I got cut. Long story. I need a team.
34 D ARLETTE: We need a body.
35 D RESERVE SKATER: I'm more than a body.
36 D ARLETTE: What's your name?
37 D RESERVE SKATER: Odalys. Odalys Ferreira.
38 D ARLETTE: Welcome, Odalys.
39 A ¶ Odalys drops her duffel and sits.
40 A Priss scoots over.
41 D PRISS (to Odalys): You're really a Hellcat?
42 D ODALYS: Was.
43 D ARLETTE (to the room): Three skaters. Nobody's tired. Nobody's hurt. Nobody's quitting.
44 D PRISS: Nobody's even stretched.
45 D ARLETTE: Stretch on the track.
46 A ¶ She blows the whistle.
47 A The three of them stand, wobble, roll toward the rink.
48 A Odalys glances back at the empty pews and mutters.
49 D ODALYS (to herself): Please let somebody come.

### SCENE s01480 | INT. HOT-AIR BALLOON BASKET - DAWN
Detected names (may be incomplete or contain aliases): SOLOMON ABARA-KITT, ROZ, PETROV, PILOT, GUNNAR ECKHARDT
* 1 A ¶ A wicker basket rising slowly over a patchwork of fog and green hills.
* 2 A A propane burner roars, then hushes.
3 A ¶ SOLOMON ABARA-KITT (30s, sunburned, nervous hands) holds a small velvet box behind his back.
4 A ROSALIND "ROZ" PETROV (30s, wind-whipped hair, an easy grin) leans over the edge, taking photos with her phone.
5 D ROZ: Look at that. You can see the whole valley.
6 D SOLOMON: I can see it.
7 D ROZ: You're not looking.
8 D SOLOMON: I'm looking at you.
9 A ¶ She turns.
10 A Sees his face.
11 A Sees the way his hand is behind him.
12 D ROZ: Sol. What's in your hand?
13 D SOLOMON: Nothing.
14 D ROZ: Sol.
15 D SOLOMON: It's a, um. It's a sandwich.
16 D ROZ: It is not a sandwich.
17 A ¶ He brings out the box.
18 A Opens it.
* 19 A A ring catches the first sun.
20 D SOLOMON: Roz. Will you...
21 A ¶ A voice from above them, cheerful, heavily accented.
22 D PILOT [O.S.]: Good morning, lovebirds!
23 A ¶ Solomon freezes.
24 A Roz looks up.
25 A At the top of the basket's rigging, clinging to a rope with one hand and holding a thermos with the other, hangs the PILOT, GUNNAR ECKHARDT (60s, wild white beard, goggles pushed up on a leather cap).
26 D GUNNAR: Do not mind me. I am only checking the knots.
27 D SOLOMON (through his teeth): Gunnar. Please.
28 D GUNNAR: Yes, yes, I am very quiet.
29 A ¶ He climbs down out of sight.
30 A Roz laughs until she cries.
31 A Solomon, mortified, looks at the ring.
32 D ROZ: Ask me again.
33 D SOLOMON: Roz Petrov. Will you marry me?
34 D ROZ: Yes.
* 35 A ¶ From somewhere above, faintly:
36 D GUNNAR [O.S.]: Congratulations!

### SCENE s01481 | INT. FIELD POST OFFICE - A REQUISITIONED SCHOOLROOM - DAY
Detected names (may be incomplete or contain aliases): PRIVATE ELIAS WEATHERBY-NDLOVU
* 1 A ¶ A schoolroom stripped for the war.
* 2 A Desks pushed to the walls and stacked with canvas mail sacks.
* 3 A A blackboard still carries a half-erased multiplication table.
* 4 A Dust slants through high windows.
* 5 A Somewhere beyond the walls, distant guns thump at the slow pace of a heart at rest.
6 A ¶ PRIVATE ELIAS WEATHERBY-NDLOVU (40s, spectacles mended with wire, gray at the temples) sits at the teacher's desk with a pile of letters.
7 A He sorts them into pigeonholes made from egg crates.
8 A His hands are careful.
9 A He does not hurry.
10 A ¶ He picks up a letter.
11 A Reads the name.
12 A Pauses.
13 A Puts it face-down at the edge of the desk.
14 A ¶ He picks up the next.
15 A Sorts it.
16 A The next.
17 A Sorts it.
18 A Then he returns to the face-down letter.
19 A Turns it over.
20 A Turns it back.
21 A ¶ Elias does not read it aloud.
22 A Someone else's handwriting does, in his head.
23 D ELIAS [V.O.] (reading, flat): "...and the pear tree has finally put out fruit. Tell Papa. Tell him I kept my word."
24 A ¶ He sets the letter down.
25 A Squares its edge against the desk.
26 A ¶ He takes a pencil from behind his ear.
27 A Flips the face-down letter once more.
28 A On the back, in neat capitals, he writes a single word: RETURNED.
29 A Then, after a moment, he erases it.
30 A ¶ He gets up.
31 A Walks to the blackboard.
32 A Takes a rag.
33 A Wipes the multiplication table away, row by row, until only the nines remain.
34 A He stands there a moment, looking at them.
35 A ¶ He sits again.
36 A Takes the letter.
37 A Places it, gently, in the highest pigeonhole, the one nobody can reach without a chair.
38 A ¶ Elias looks at the highest pigeonhole.
39 A Then at the egg crates.
40 A Then at the door.
41 D ELIAS (to the empty room): Not today.

### SCENE s01482_0 | EXT. SNOWFIELD BELOW A CRASHED CARGO PLANE - DAY
Detected names (may be incomplete or contain aliases): MARISOL ARROYO-LINDGREN, ANTON BELLWEATHER-ODUYA
* 1 A ¶ A white slope.
* 2 A A twisted tail section jutting from the drift.
* 3 A Wind drags snow in long ropes.
4 A ¶ MARISOL ARROYO-LINDGREN (40s, parka, bleeding scalp under a knit cap) kneels beside the wreck, digging with a tin plate.
5 A ANTON BELLWEATHER-ODUYA (50s, lanky, one arm tucked inside his jacket) stands over her, stamping his feet.
6 A ¶ She digs.
7 A He watches.
8 D ANTON: Anything?
9 D MARISOL: Not yet.
10 A ¶ He paces.
11 A She keeps digging.
* 12 A The plate scrapes on metal.
13 A She stops.
14 D MARISOL [CONT'D]: There's a hatch.
15 D ANTON: Open it.
16 A ¶ She grips the edge.
17 A Pulls.
* 18 A It doesn't give.
19 A He kneels beside her with his good hand.
20 A They pull together.
* 21 A It gives a quarter inch and stops.
22 D MARISOL: It's frozen.
23 D ANTON: Of course it's frozen. Everything's frozen.
24 A ¶ She sits back on her heels.
25 A He stares at the hatch.
* 26 A Wind howls.
27 D MARISOL (muttering): Don't panic. Don't panic. Don't panic.
28 D ANTON: I'm not panicking.
29 D MARISOL: I wasn't talking to you.
30 A ¶ He looks at her.
31 A She keeps her eyes on the hatch.
32 A ¶ He takes off his glove with his teeth.
33 A Puts a bare palm on the metal.
34 A Holds it there.
35 A Winces.
36 A Pulls away.
37 D ANTON: It's warm underneath.
38 D MARISOL: What?
39 D ANTON: Something's warm. Something's running in there.
40 A ¶ She puts her hand on it.
41 A Holds it.
42 A Her eyes widen.
43 D MARISOL: A generator.
44 D ANTON: Or an engine.
45 A ¶ She slams the plate against the hatch handle.
46 A Once.
47 A Twice.
* 48 A A crack of ice.
* 49 A On the third blow the handle snaps loose and the hatch swings up on a gust of warm, oily air.
50 A ¶ They both recoil.
51 A Then they lean in together and stare down a ladder into a hold lit by a single red emergency lamp.
52 D ANTON [CONT'D] (to himself): Thank God.
53 D MARISOL (to Anton): Don't thank anyone yet.
54 A ¶ She swings her legs over the edge.
55 A He grabs her sleeve.
56 D ANTON: Wait. We should tie off.
57 D MARISOL: With what?
58 A ¶ He looks around at the white.
* 59 A Nothing.
60 A She pulls free.
61 D MARISOL [CONT'D] (to the whole slope, as if calling the wind to witness): We're going down!
62 A ¶ She goes.
63 A He hesitates.
64 A Then follows, sliding the hatch shut over his head.
* 65 A The snow closes in behind them.

### SCENE s01482_1 | INT. CARGO HOLD - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANTON, MARISOL
* 1 A ¶ Crates strapped to the floor.
* 2 A A red lamp swinging gently.
* 3 A The hold smells of diesel and spilled coffee.
4 A ¶ She reaches the bottom first.
5 A He lands heavily, groans, and clutches his arm.
6 A ¶ She hands him a flashlight from her belt.
7 A He plays the beam across the crates.
* 8 A Stenciled words: MEDICAL SUPPLIES.
9 D ANTON: Medical.
10 D MARISOL: That's useful.
11 D ANTON: Is it?
12 D MARISOL: Bandages. Antibiotics. Whatever's in there for your arm.
13 A ¶ He looks at his arm.
14 A He's been avoiding it.
15 A He pulls out the sleeve and sees the dark soak in the fabric.
16 D ANTON (quietly): It's worse than I said.
17 D MARISOL: I know.
18 D ANTON: You knew?
19 D MARISOL: You've been holding it like a baby bird for three hours.
20 A ¶ He laughs, once, and sits down on a crate.
21 A She pries the lid off the next one with the tin plate.
* 22 A It's full of foil blankets.
23 A ¶ She wraps one around his shoulders.
24 A Sits beside him with another.
25 A ¶ They don't speak.
* 26 A The red lamp swings.
27 D ANTON (finally): Marisol.
28 D MARISOL: Mm.
29 D ANTON: If it comes to it. If one of us has to walk out.
30 D MARISOL: Don't.
31 D ANTON: If it comes to it, it should be you.
32 A ¶ She doesn't answer.
33 A He turns his head, looking for her face in the red light.
34 A She is staring at the hatch, jaw set, hands wrapped tight in the blanket.
35 D MARISOL (low, to the hatch): It won't come to it.
* 36 A ¶ The wind outside rises, a long hollow note against the hull.
37 A She does not look away from the ladder.
38 A He tucks the blanket tighter and does the same.

### SCENE s01483 | EXT. MANGROVE SWAMP - HIDDEN OXBOW LAGOON - DAWN
Detected names (may be incomplete or contain aliases): DESTA ALEMAYEHU-VOSS, KIPP LOUGHRAN
* 1 A ¶ Mist on black water.
* 2 A Tangled roots like the knuckles of drowned giants.
* 3 A A kingfisher stitches blue over the surface.
* 4 A ¶ A dugout canoe drifts to the bank.
5 A DESTA ALEMAYEHU-VOSS (40s, cracked sunglasses, rope-burned palms, a satchel of dried fish) steps ashore.
6 A Behind her, curled in the bow, KIPP LOUGHRAN (teen, thin, a bandaged ankle) hugs his knees.
7 D DESTA: Camp's through here.
8 D KIPP: You said that yesterday.
9 D DESTA: Yesterday I was lying.
10 A ¶ She hauls the canoe up the bank.
11 A Kipp limps after, peering around.
* 12 A ¶ An ironwood tree.
* 13 A A hammock.
* 14 A A fire pit with warm ash.
* 15 A A stack of dry kindling.
* 16 A A rusted pot, upturned, drying in the sun.
17 D KIPP: Somebody lives here.
18 D DESTA: Somebody did.
19 D KIPP: Who?
20 A ¶ She sets down the satchel.
21 A Takes out the fish and starts to lay them on a flat stone.
22 D DESTA: Let's eat.
23 A ¶ Kipp stays by the tree.
24 A He runs a finger along the bark.
* 25 A Fresh cuts.
* 26 A A tally: dozens of notches, in columns of five.
27 D KIPP: These are new.
28 D DESTA (not looking up): Don't touch things.
29 D KIPP: How long since the last notch?
30 D DESTA: Eat.
31 A ¶ He turns.
32 A Looks at her.
33 A She keeps her eyes on the fish.
* 34 A The kingfisher flies off.
35 D KIPP: You've been here before.
36 D DESTA: Once.
37 D KIPP: When?
38 A ¶ She lifts her head.
39 A Her eyes go past him to the upturned pot, where a small boot, child-sized and rotted, sticks out from under the rim.
40 D DESTA [CONT'D] (very softly): Kipp. Don't turn around.
41 A ¶ He turns around.
42 A He sees the boot.
43 A He sees the tally.
44 A He counts the columns, lips moving, and stops at the last notch, which is shallow and fresh.
45 D KIPP: There's one for me.
46 A ¶ Desta says nothing.
* 47 A The mist closes over the water.

### SCENE s01484 | INT. ABANDONED LANGUAGE LABORATORY - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE VERONICA OSEI-LAMBERT, DETECTIVE MARGUERITE ILLYICH, LEONARD ASHBY
* 1 A ¶ Forty carrels in rows, each with a dead headset hung on its hook like a tiny hanged man.
* 2 A Cassette decks, dusty.
* 3 A A reel-to-reel machine at the front of the room, its tape spooled out across the floor and into the dark.
4 A ¶ DETECTIVE VERONICA OSEI-LAMBERT (40s, trench coat, a flashlight clamped in her teeth) steps between the carrels.
5 A Behind her, DETECTIVE MARGUERITE ILLYICH (40s, long coat, notebook out) keeps one hand on the grip of her sidearm.
6 A Neither speaks.
7 A ¶ At the rear wall, a man sits slumped in a carrel, headset clamped on.
8 A LEONARD ASHBY (50s, a gray cardigan), dead or sleeping.
9 A His chest does not rise.
10 A ¶ Veronica takes the flashlight from her mouth.
11 D VERONICA: She said to look at the tape.
12 D MARGUERITE: Who said?
13 D VERONICA: She did.
14 A ¶ Marguerite follows the loose tape with her eyes, from the reel-to-reel along the floor to Leonard's carrel, where it is fed through the deck beneath his hands.
15 A Veronica leans over him.
16 A She lifts the headset, holds it to her own ear.
* 17 A ¶ A hiss.
* 18 A A voice, thin and warm, from the earpiece.
19 D LEONARD [V.O.] (recorded): If you are hearing this, then she has already left the building. She is on the third floor. She has the key. She is not alone.
20 A ¶ Veronica pulls the headset off.
21 A Marguerite has already turned to the door.
* 22 A On the landing outside, slow footsteps climb, and a keyring chimes at every step.
23 D MARGUERITE (whispering): She's early.
24 D VERONICA: Who is?
25 D MARGUERITE: Both of us, I think.

### SCENE s01485 | INT. DEFUNCT CLOCK TOWER - GEAR ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOBIAS FENWICK-ADEYEMI, MATT, ROSALES-HEIDT
* 1 A ¶ A cathedral of brass wheels and iron pendulums, stilled for thirty years.
* 2 A Moonlight comes through the huge translucent dial and paints the room the color of old ivory.
3 A ¶ Two men in dark clothes work their way along a catwalk above the great gear train.
4 A TOBIAS FENWICK-ADEYEMI (50s, gray stubble, a coil of rope on his shoulder) goes first.
5 A MATTHEW "MATT" ROSALES-HEIDT (30s, gloves, a backpack heavy with tools) follows.
6 A ¶ They stop at a small iron door set into the wall behind the largest wheel.
7 D TOBIAS: That's the vault.
8 D MATT: It's a clock.
9 D TOBIAS: The clockmaker's safe. Eighteen-ninety-two. Built into the movement itself.
10 D MATT: How do you know?
11 D TOBIAS: Because I read the blueprints, Matt. All eleven hundred pages.
12 A ¶ Matt swings his pack off.
13 A Kneels in front of the door.
14 A Tobias holds a flashlight over his shoulder.
15 D MATT: Hold it steady.
16 D TOBIAS: I am holding it steady.
17 D MATT: You're breathing on it.
18 D TOBIAS: You're bending the beam.
19 A ¶ Matt looks up.
20 A Tobias lowers the light.
* 21 A A small, wary silence.
22 A Then Matt starts work, the picks clicking softly in the lock.
23 D MATT: Tobias, if he sees him standing in the light like that...
24 D TOBIAS: Who?
25 D MATT: Him. The one you hired to watch the street.
26 D TOBIAS: I hired nobody.
27 D MATT: Then who's in the street?
28 A ¶ Tobias goes still.
29 A Matt goes still.
30 A Each waits for the other to say it.
* 31 A ¶ The lock gives.
* 32 A The door swings open on a velvet-lined compartment.
* 33 A Inside, a single pocket watch on a gold chain, ticking.
34 D MATT [CONT'D]: It's running.
35 D TOBIAS: It shouldn't be.
* 36 A ¶ Far below, with a groan like a waking giant, the great gear train begins to turn.
37 A He grabs the rail.
38 A He grabs the rope.
39 A Neither of them can tell which of them is shouting.

### SCENE s01486 | INT. TAXIDERMY WORKSHOP - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR AUGUSTINE BELLAMY-OKAFOR, MISS CLEMENTINE VASQUEZ-HOLT, ODALYS PRENDERGAST, WILFRED TANAKA, BELLAMY, MISS VASQUEZ
* 1 A ¶ Glass eyes on every shelf.
* 2 A A stuffed heron guards the doorway.
* 3 A Under a green-shaded lamp, a long worktable holds a half-mounted fox and a ledger.
4 A ¶ INSPECTOR AUGUSTINE BELLAMY-OKAFOR (50s, bowler hat, wet umbrella) stands at the table.
5 A Opposite him, MISS CLEMENTINE VASQUEZ-HOLT (40s, leather apron, a scalpel in her fist) hovers over the fox.
6 A Seated on a stool by the stove are two others: the widow MRS. ODALYS PRENDERGAST (60s, black gloves, a handbag clutched in her lap) and the young apprentice WILFRED TANAKA (19, soot on his cuffs, eyes on the floor).
7 D BELLAMY: Mrs. Prendergast, your husband died on the fourteenth.
8 D MRS. PRENDERGAST: He did.
9 D BELLAMY: And on the fifteenth you commissioned a mounting.
10 D MRS. PRENDERGAST: A cat.
11 D BELLAMY: A cat. Which weighs, according to this ledger, eleven stone.
12 D MISS VASQUEZ: We had to reinforce the frame.
13 D BELLAMY (to Vasquez): Did you.
14 D MISS VASQUEZ: It's a very large cat.
15 D BELLAMY: Mr. Tanaka. You did the packing.
16 D WILFRED: I did, sir.
17 D BELLAMY: What was inside the cat?
18 D WILFRED: Sawdust, sir.
19 D BELLAMY: Only sawdust?
20 D WILFRED: And a few cotton wads. Sir.
21 D BELLAMY: And the eleven stone?
22 D WILFRED (quietly): I only lifted the end, sir.
23 D MRS. PRENDERGAST: Wilfred is a good boy.
24 D BELLAMY: I'm sure he is. Miss Vasquez. You are an artist.
25 D MISS VASQUEZ: I am a craftswoman.
26 D BELLAMY: You can tell, I think, the difference between a cat and a man.
27 D MISS VASQUEZ: I can tell the difference between a cat and a lie.
28 D BELLAMY: Which was this?
29 D MISS VASQUEZ: A cat.
30 D BELLAMY: Then open it.
* 31 A ¶ Silence.
* 32 A The stove ticks.
33 A Mrs. Prendergast tightens her grip on her handbag.
34 A Wilfred stares at the floorboards.
35 D MISS VASQUEZ: It's been sewn shut.
36 D BELLAMY: Cut the stitches.
37 D MRS. PRENDERGAST: Inspector, please. He was a very private man.
38 D BELLAMY: He is a very dead one, madam.
* 39 A ¶ The scalpel catches the lamplight.
40 A Bellamy steps forward, and the others half-rise as one.
41 A Miss Vasquez raises the blade, Wilfred bolts for the door, and Mrs. Prendergast lunges for the handbag as it slides from her lap.
* 42 A ¶ The stuffed heron topples across the doorway.
43 A Wilfred trips over it and falls flat.

### SCENE s01487 | INT. CHURCH-TURNED-SALOON, DRY CREEK - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, SHERIFF DELPHINE ACHEBE-MARSH, BIG JASPER TUCKERMAN, DOC PRUDENCE OYELARAN, OZZIE, BRIGHT-RAMIREZ, TOMASZ KOWALCZYK-LEE, DOC, ORCUTT
* 1 A ¶ A former chapel with its pews dragged into a poker circle.
* 2 A A cracked stained-glass saint looks down on the cards with a beatific squint.
* 3 A Lantern light.
* 4 A Cigar haze.
* 5 A Wind scouring the shutters.
6 A ¶ At the long communion table, five players sit hunched over a pot of coins, watches, and one wedding band.
7 A ¶ A STRANGER in a gray duster slouches in the darkest corner, hat low, a glass of milk untouched in front of him.
* 8 A Nobody has looked directly at him in an hour.
9 A ¶ At the table: SHERIFF DELPHINE ACHEBE-MARSH (40s, weary, star pinned crooked), BIG JASPER TUCKERMAN (50s, a belly like a barrel, a laugh like a rockslide), DOC PRUDENCE OYELARAN (60s, spectacles, neat fingers), and the barkeep OSWALDO "OZZIE" BRIGHT-RAMIREZ (30s, apron, a shotgun under the bar), who deals.
10 A Last, young TOMASZ KOWALCZYK-LEE (19, new boots, trembling hat), sweating over his hand.
11 D JASPER: Call.
12 D DELPHINE: Raise.
13 D DOC: Fold.
14 D OZZIE: Fold.
15 D TOMASZ (whisper): All in.
* 16 A ¶ The room goes quiet.
17 A Jasper looks at the boy.
18 A Delphine looks at the boy.
19 A Doc, with great delicacy, lifts her spectacles.
20 A ¶ The Stranger stirs in his corner.
21 A Rises.
22 A Crosses the room.
* 23 A The planks complain under his boots.
24 D STRANGER: Might I see his cards?
25 D DELPHINE: It's not a game for spectators.
26 D STRANGER: It isn't a game at all.
27 A ¶ He stops beside Tomasz.
28 A Lays a gloved hand on the boy's shoulder.
29 A The boy flinches.
30 A The Stranger tilts his head and studies the saint in the window.
31 D STRANGER [CONT'D]: Son, what's your name?
32 D TOMASZ: Tomasz.
33 D STRANGER: Not Tom.
34 D TOMASZ: Not Tom.
35 D STRANGER: Then Tomasz, I'll tell you mine. They call me Reverend Silas Orcutt.
* 36 A ¶ A slow ripple passes over the table.
37 A Jasper's laugh dies.
38 A Doc's hand finds the edge of her bag.
39 A Ozzie reaches under the bar.
40 A Delphine, without lifting her eyes, thumbs the hammer of her pistol.
41 D ORCUTT (smiling): This was my church.
42 D DELPHINE: It was a ruin.
43 D ORCUTT: It was a ruin because of men at this table.
44 A ¶ Tomasz slides his chair back.
45 A Orcutt's grip tightens.
46 D ORCUTT [CONT'D]: Stay seated, son. I'm only here for the ones who burned it.
47 D JASPER: Now, Reverend...
48 D ORCUTT: Jasper Tuckerman. You carried the lamp oil.
49 A ¶ Jasper surges from his chair.
50 A Delphine fires.
51 A Ozzie brings the shotgun up.
52 A Doc dives behind a pew.
53 A Tomasz, white as chalk, flattens himself under the table, the cards scattering around him like snow.
* 54 A ¶ The saint in the window, struck by a bullet, loses its head in a shower of colored glass.

### SCENE s01488 | INT. FUNERAL HOME KITCHEN - AFTERNOON
Detected names (may be incomplete or contain aliases): THEO, AUNT BERNADETTE, REUBEN, HECTOR, GRACIE, LILIANA, ^REUBEN
* 1 A ¶ Linoleum.
* 2 A A casserole dish in every available space.
* 3 A A wall clock stopped at ten past four.
4 A ¶ Six people share a room built for three.
5 A ¶ GRACELAND "GRACIE" OSEI-LINDQVIST.
6 A 40s.
7 A Eldest daughter.
8 A Hands in the sink.
9 A ¶ REUBEN OSEI-LINDQVIST.
10 A 40s.
11 A Her brother.
12 A Leaning on the fridge.
13 A ¶ AUNT BERNADETTE VASQUEZ.
14 A 70s.
15 A Carries a tin of shortbread like a weapon.
16 A ¶ HECTOR PRZYBYLSKI.
17 A 30s.
18 A Gracie's husband.
19 A Holds a dish towel he never uses.
20 A ¶ LILIANA OSEI.
21 A 16.
22 A Gracie's daughter.
23 A Hood up.
24 A ¶ THEO FINCH.
25 A 50s.
26 A Funeral director.
27 A Waiting.
28 A ¶ Gracie scrubs a dish that is already clean.
29 D THEO: Everything's arranged for three o'clock tomorrow.
* 30 A ¶ Nobody answers.
31 D THEO [CONT'D]: If the family would like a few more minutes...
32 D AUNT BERNADETTE: We've had four days.
33 A ¶ She sets the tin on the table.
34 A Opens it.
35 A Offers it to no one.
36 D REUBEN: Is there coffee?
37 D HECTOR: I'll make coffee.
38 A ¶ He puts down the towel.
39 A Picks it up again.
40 A Opens a cupboard.
41 A Closes it.
42 D GRACIE: Third shelf.
43 D HECTOR: Right.
44 A ¶ He finds the can.
45 A Fills the pot.
46 A Liliana watches him.
47 D LILIANA (to herself): He's doing it wrong.
48 D HECTOR: What?
49 D LILIANA: Nothing.
50 D REUBEN (to the room): Does anyone know where Dad kept the good suit?
* 51 A ¶ Silence.
52 A Bernadette studies the shortbread.
53 A Hector studies the coffee can.
54 A Gracie turns off the tap.
55 D GRACIE: Reuben.
56 D REUBEN: It's a simple question.
57 D GRACIE: It's in the hall closet.
58 D REUBEN: Thank you.
59 D GRACIE: Navy. Pressed. I did it Tuesday.
60 D REUBEN: You didn't have to.
61 D GRACIE: Someone did.
62 D REUBEN: I would've.
63 D GRACIE (quiet): Would you?
* 64 A ¶ The kettle ticks on the stove.
65 A Theo clears his throat, but does not speak.
66 D AUNT BERNADETTE: Children.
67 D GRACIE: I'm not fighting.
68 D ^REUBEN: I'm not fighting.
69 A ¶ Hector pours coffee into six mugs.
70 A Passes them around.
71 A Everyone takes one.
72 A No one drinks.
73 D LILIANA: Mom. Can I go?
74 D GRACIE: Where?
75 D LILIANA: Out.
76 D GRACIE: It's dark.
77 D LILIANA: It's four-ten.
78 D GRACIE: The clock is wrong.
79 D LILIANA: Everything in here is wrong.
80 A ¶ She stands.
81 A Hector reaches for her sleeve.
82 A She shrugs him off.
83 D HECTOR: Lil.
84 D LILIANA: Don't.
85 A ¶ She goes.
* 86 A The back door bangs.
87 A Gracie wipes her hands on her apron very slowly, one finger at a time.
88 D THEO (gently): Mrs. Przybylski...
89 D GRACIE: It's Osei-Lindqvist. Still.
90 D THEO: Of course. Forgive me.
91 D GRACIE (to the room): Does anyone want to see him?
* 92 A ¶ The question lands like a dropped plate.
93 A Reuben stares into his coffee.
94 A Bernadette lowers the tin lid.
95 A Hector sets his mug down.
96 D AUNT BERNADETTE: I do.
97 D GRACIE: Auntie.
98 D AUNT BERNADETTE: I've seen him in every state a man can be in. I'll see this one, too.
99 A ¶ She stands.
100 A Straightens her cardigan.
101 D AUNT BERNADETTE [CONT'D]: Who is coming with me?
* 102 A ¶ Nobody moves.
103 A Then Reuben puts down his mug.
104 A Then Gracie.
105 A Then, last, Hector.
106 A Theo opens the kitchen door and stands aside.
107 A ¶ They file out into the hall.
* 108 A The coffee cools.
* 109 A The clock stays where it is, ten past four.

### SCENE s01489 | INT. FIELD HOSPITAL TENT - FLOOD RELIEF CAMP - NIGHT
Detected names (may be incomplete or contain aliases): PATIENT, ADAEZE OKONKWO-REYES, NURSE PETRA LINDBERG-AZIZ, MEDIC SAMUEL TORRES-WU, HENRI DUBOIS-KAMARA, DAUGHTER, JOY BANERJEE-HALL
* 1 A ¶ Canvas walls breathing in the wind.
* 2 A Cots in rows.
* 3 A Hanging bulbs on extension cords.
* 4 A The smell of bleach and wet earth.
5 A ¶ Five people around a single cot.
6 A On it, the PATIENT, a man in his 60s, gray-faced, breathing shallowly.
* 7 A Nobody says his name.
8 A ¶ DR. ADAEZE OKONKWO-REYES (40s, scrubs, sleeves rolled, sweat at her temples) checks a monitor that blinks erratically.
9 A NURSE PETRA LINDBERG-AZIZ (30s, steady, a pen behind each ear) squeezes a bag valve.
10 A MEDIC SAMUEL TORRES-WU (20s, wet boots) holds a flashlight.
11 A DR. HENRI DUBOIS-KAMARA (50s, retired surgeon, borrowed lab coat) stands at the foot with his arms folded.
12 A The man's DAUGHTER, JOY BANERJEE-HALL (30s, a muddy raincoat), grips the cot rail.
13 D ADAEZE (to the room): Okay. Everyone. Pressure's dropping. Petra, push the fluids. Samuel, hold the light steady. Henri...
14 D HENRI: I'm observing.
15 D ADAEZE: I know. Observe harder.
16 A ¶ Petra changes the bag.
17 A Samuel moves the light.
18 A The man's chest rises and falls.
19 D JOY (to Adaeze): Is he going to be all right?
20 D ADAEZE: We're doing everything we can.
21 D JOY: That's not what I asked.
22 D ADAEZE: I know.
23 A ¶ She turns back to the monitor.
* 24 A A beep.
* 25 A Another.
* 26 A A flat trailing note.
27 D PETRA: Doctor.
28 D ADAEZE: I see it.
29 D SAMUEL (muttering): Come on, come on, come on.
30 A ¶ Samuel angles the light, then glances at Joy and looks away.
31 D HENRI: Adaeze. The line is infiltrated.
32 D ADAEZE: What?
33 D HENRI: The IV. It's swelling at the wrist.
34 A ¶ She looks.
* 35 A He's right.
36 A Her jaw tightens.
37 A She pulls the line herself, fast, and the man gasps.
38 D JOY: What are you doing?
39 D ADAEZE: Resetting it.
40 D JOY: You're hurting him.
41 D ADAEZE (sharp): Then let me work.
42 A ¶ Joy flinches.
43 A Adaeze catches herself.
44 A She closes her eyes for a half second, then opens them.
45 D ADAEZE [CONT'D] (softer): Petra. Another line. The other arm.
46 D PETRA: Already done.
47 A ¶ Petra holds out the needle, a bead of blood on her thumb.
48 A Adaeze takes it.
49 A Her hands, steady a moment ago, tremble now.
50 A She sets the needle.
51 A Draws breath.
52 A Pushes.
* 53 A ¶ The monitor catches.
* 54 A Beeps.
* 55 A A ragged line climbs.
56 D SAMUEL: We've got him.
57 D HENRI: We have a rhythm. Not a pulse.
58 D ADAEZE (to Henri): Come here.
59 A ¶ He comes.
60 A She hands him the bag valve without a word.
61 A He takes it, stunned.
62 A Then he squeezes, once, twice, and glances across the cot at her.
63 D HENRI (quiet): I forgot how this feels.
64 D ADAEZE: Don't remember now. Squeeze.
65 A ¶ Joy's knuckles are white on the rail.
66 A Samuel puts a hand on her shoulder.
67 A Joy does not shake it off.
68 A ¶ The man's eyelids flutter.
69 A His mouth moves.
70 A Joy leans in, hair dripping onto his cheek.
71 D JOY: Dad? Dad, it's me.
* 72 A ¶ Nothing.
73 A Then a breath, deeper than the others, a long ragged pull.
74 A Everyone stops moving.
* 75 A ¶ Outside, the wind drops.
* 76 A For the first time in hours, the tent hangs still.

### SCENE s01490 | INT. ROOFTOP GREENHOUSE, APARTMENT BLOCK - DAWN
Detected names (may be incomplete or contain aliases): PHILOMENA ADEBAYO-STRAND, NIKOLAI, ^PHILOMENA
* 1 A ¶ Tomato cages, herb pots, a rusted bistro table.
* 2 A The city wakes in haze below.
3 A ¶ PHILOMENA ADEBAYO-STRAND (60s, cardigan, trowel) waters basil.
4 A Across from her, her son NIKOLAI (30s, borrowed suit, unslept) cradles a mug.
5 A ¶ She waters.
6 A He sips.
7 A Neither looks.
8 D PHILOMENA: You came early.
9 D NIKOLAI: Train was on time.
10 D PHILOMENA: First time in years.
11 A ¶ He nods.
12 A She moves to the tomatoes.
13 A He follows with his eyes.
14 D NIKOLAI: It looks good up here.
15 D PHILOMENA: Your father built the cages.
16 D NIKOLAI: I remember.
17 D PHILOMENA: He'd have hated the basil.
18 D NIKOLAI: He hated everything green.
19 A ¶ They share a quiet smile.
20 A It lingers.
21 D PHILOMENA: Nik.
22 D NIKOLAI: Mm.
23 A ¶ He sets down the mug.
24 A She sets down the can.
25 A They look at each other for the first time.
26 D NIKOLAI: I'm sorry I wasn't here.
27 D ^PHILOMENA: I sold the house.
* 28 A ¶ A pause.
29 A Neither moves.
* 30 A The basil drips.
31 D NIKOLAI: You what?
32 D PHILOMENA: It's done. Papers signed Friday.
33 A ¶ Nikolai picks up the mug.
34 A Sets it down.
35 A Picks it up again.
36 A She watches his hands.
* 37 A Behind them, the sun clears the rooftops.

### SCENE s01491 | EXT. FROZEN QUARRY LAKE - DUSK
Detected names (may be incomplete or contain aliases): WYN, ASANTE-KOWALSKI, ROSALIE PEARSON-NGUYEN, BARNABAS OYELARAN, TEODORA VRANCEA-BELL, PETRUS HOLLAND-ABARA
* 1 A ¶ A flat gray disc ringed by black cliffs.
* 2 A Dirty snow.
* 3 A A thin skin of ice that talks in the cold.
4 A ¶ Five hikers stand at the shore, packs heavy.
5 A ¶ GWENDOLYN "WYN" ASANTE-KOWALSKI (40s, ruddy, a rope over her shoulder) tests the ice with a pole.
6 A ROSALIE PEARSON-NGUYEN (30s, a swollen ankle bound in a scarf) leans on a ski pole.
7 A Behind them: BARNABAS OYELARAN (50s, bald, a thermos), TEODORA VRANCEA-BELL (20s, braids, camera strap), and old PETRUS HOLLAND-ABARA (70s, a hat with ear flaps).
8 D WYN: It'll hold.
9 D ROSALIE: It'll talk, but it'll hold.
10 D BARNABAS: How far across?
11 D WYN: Four hundred meters. Camp's on the far bank.
12 D TEODORA: And around?
13 D WYN: Eight kilometers. Through the cliffs.
14 D PETRUS: In the dark.
15 D WYN: In the dark.
16 A ¶ Rosalie shifts her weight.
17 A Winces.
18 A Wyn sees it and says nothing.
19 D ROSALIE: She'll want to go across.
20 D WYN: She'll want to? Or you?
21 D ROSALIE: Her. She's never liked the cliffs.
22 A ¶ Teodora glances between them.
* 23 A The ice groans.
24 D TEODORA: Whose "she"?
25 A ¶ Rosalie and Wyn both look at her.
* 26 A Nobody answers.
27 A Barnabas clears his throat and steps forward.
28 D BARNABAS: We go across. Single file. Fifteen meters apart. Wyn first.
29 D WYN: Rosalie second.
30 D ROSALIE: I can walk.
31 D WYN: You can limp.
32 A ¶ She lowers the rope off her shoulder, ties it around Rosalie's waist, and then around her own.
33 A They step out.
* 34 A The ice cracks softly under them, a long fine sound like a hair being drawn from silk.

### SCENE s01492 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): MAGGIE, DAMIAN KELLERMAN-ASANTE, YOLANDE BEAUMONT-DAS, ELI, ROSENBLATT-ADEBAYO
* 1 A ¶ The dome is cracked, the stars on it long gone to water stains.
* 2 A A circle of folding chairs sits beneath the central projector, a bulbous metal insect.
* 3 A Candle stubs flicker on the floor.
4 A ¶ Four people sit in the circle, coats on, breath fogging.
5 A ¶ MAGDALENA "MAGGIE" OYELOWO-SZABO is in her fifties, wrapped in a quilt, a retired astronomer's patience in her eyes.
6 A Across from her, her adult son DAMIAN KELLERMAN-ASANTE slouches, jaw tight.
7 A Beside him sits his wife YOLANDE BEAUMONT-DAS, tall, steady, hand on his knee.
8 A The fourth chair holds ELIJAH "ELI" ROSENBLATT-ADEBAYO, a teenager in a hooded jacket, cradling a battered telescope case.
9 D MAGGIE: Thank you for coming, all of you.
10 D DAMIAN: Mom, why are we here?
11 D MAGGIE: Because the city is closing this building on Friday.
12 D DAMIAN: And?
13 D MAGGIE: And I wanted to show you the sky one more time.
14 D YOLANDE: Maggie, the projector's dead.
15 D MAGGIE: Is it?
16 A ¶ She stands.
17 A Crosses to the great machine.
18 A Lays her palm on its flank, the way you'd greet an old horse.
19 A She reaches into a panel, draws out a bulb the size of a fist, and screws it home.
20 A ¶ Eli slides forward in his seat.
21 D ELI: You fixed it?
22 D MAGGIE: I did, Eli. Last Tuesday.
23 D DAMIAN: You came here every night this week.
24 D MAGGIE: Every night.
25 D DAMIAN: Without telling anyone.
26 D MAGGIE: Without telling anyone, Damian.
* 27 A ¶ Silence.
28 A Yolande squeezes her husband's knee.
29 A He looks at the floor.
30 D YOLANDE: Damian. Let her.
31 A ¶ Maggie throws a switch.
* 32 A The machine whirs, coughs dust, and then blooms.
* 33 A On the dome, thousands of pinpoints appear, slow, shuddering, then steady.
* 34 A The Milky Way rolls out across the ceiling like a shaken scarf.
35 A ¶ Eli gasps.
36 A Yolande puts her hand to her mouth.
37 A Damian lifts his head, and the light spills across his face.
38 D DAMIAN (hoarse): That's the one from the lake house.
39 D MAGGIE: That's the one.
40 D DAMIAN: You said you couldn't make it that clear again.
41 D MAGGIE: I said a lot of things after your father died.
42 A ¶ Damian rises.
43 A Walks across the circle.
44 A Stands in front of her.
45 A He doesn't speak.
46 A She waits.
47 A Then, awkwardly, like a man unused to it, he wraps his arms around her.
48 D MAGGIE [CONT'D] (into his shoulder): There now.
49 D ELI: Can I look through the scope?
50 D MAGGIE: Oh, Eli. There's no sky left to look through. But sit. Sit. There's plenty of dome.

### SCENE s01493 | INT. COMMUNITY-GARDEN TOOL SHED - NIGHT
Detected names (may be incomplete or contain aliases): NELLIE, OKOYE-PRESCOTT, MARCUS TRAN-ABERNATHY, BRIDGET KILLIAN-ADEYEMI, OLD FELIX BRANDT-NJOKU, AISHA MORENO-VANCE
* 1 A ¶ A cramped plank shed that smells of manure and linseed oil.
* 2 A A single bulb on a string.
* 3 A Rakes in racks.
* 4 A A calendar from 1998.
5 A ¶ Five neighbors sit on buckets and overturned crates, an emergency meeting in a space not built for five.
6 A ¶ CORNELIA "NELLIE" OKOYE-PRESCOTT (60s, gardening gloves, a loud cardigan) presides on a stool.
7 A Next to her: MARCUS TRAN-ABERNATHY (30s, a clipboard), BRIDGET KILLIAN-ADEYEMI (40s, bags under her eyes), OLD FELIX BRANDT-NJOKU (70s, a pipe unlit in his teeth), and young AISHA MORENO-VANCE (20s, still in her work apron).
8 D NELLIE: The developers close the lot Friday.
9 D MARCUS: They can't. We have the lease.
10 D NELLIE: We had the lease.
11 D MARCUS: Until when?
12 D NELLIE: Until the thirtieth. Yesterday.
13 D BRIDGET: Nobody told us.
14 D NELLIE: The letter was in the mailbox of the man who died in March.
15 D FELIX (around his pipe): That's Hendricks.
16 D BRIDGET: Hendricks is dead, Felix.
17 D FELIX: That's why the letter's late.
* 18 A ¶ Silence.
* 19 A The bulb swings a quarter inch.
20 D MARCUS: We can petition.
21 D NELLIE: We have forty-two signatures.
22 D MARCUS: Forty-two is a lot.
23 D NELLIE: It's not enough.
24 D AISHA: How many do we need?
25 D NELLIE: Two hundred.
26 D AISHA: By Friday?
27 D NELLIE: By Friday.
28 D BRIDGET: Then we pick up the pace. Door to door tomorrow.
29 D MARCUS: I have a meeting.
30 D BRIDGET: Cancel it.
31 D MARCUS: I can't.
32 D BRIDGET: Then you're out.
33 D MARCUS: Out of what?
34 D BRIDGET: The garden.
* 35 A ¶ A pause so cold the bulb seems to dim.
36 A Marcus half rises.
37 A Felix sets his pipe on his knee.
38 A Aisha puts a hand on Marcus's sleeve.
39 A Bridget crosses her arms.
40 A Nellie lifts a rake from the rack and sets it on her lap.
41 D NELLIE: Sit, Marcus.
42 A ¶ He sits.
43 D NELLIE [CONT'D]: Bridget, apologize.
44 D BRIDGET: I will not.
45 D NELLIE: Then explain.
46 D BRIDGET: Hendricks's tomatoes are still in the south bed. He planted them. I water them.
47 D FELIX (gentle): Every day.
48 D BRIDGET: Every day. Because somebody has to. And if they bulldoze it Friday...
49 A ¶ She doesn't finish.
50 A Marcus lowers his clipboard.
51 A Aisha stares at her hands.
52 A Felix lights his pipe, finally, with a slow match, and the shed fills with sweet smoke.
53 D MARCUS: I'll cancel the meeting.
54 D BRIDGET: Thank you.
55 D MARCUS: Don't thank me. I'm taking the south side.
56 D FELIX: Of course you are.
