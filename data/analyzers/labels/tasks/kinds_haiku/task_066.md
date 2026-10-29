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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0166.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02357 | EXT. GHOST TOWN - DEAD FERRY LANDING - DUSK
Detected names (may be incomplete or contain aliases): SHERIFF MORDECAI WELLS, CALISTA REYNOSO, PRESTON GRIGGS, DISPATCH
* 1 A ¶ A dry riverbed.
* 2 A A rotting dock with no water beneath it.
* 3 A Wind in a broken pilot-house.
* 4 A A weathered sign: LAST CROSSING.
5 A ¶ SHERIFF MORDECAI WELLS, 50s, bone-thin, gray coat.
6 A A tin star gone dull.
7 A He stands at the end of the pier, hat tipped back.
8 A ¶ CALISTA REYNOSO, 20s, a bounty hunter in dusty leathers.
9 A Scarred cheek.
10 A Dual pistols.
11 A She sits on a barrel, legs swinging.
12 A ¶ PRESTON GRIGGS, 40s, in irons, wrists chained, face swollen.
13 A He kneels on the planks.
* 14 A ¶ A radio set crackles from a saddlebag.
15 D WELLS: You said the river was here.
16 D CALISTA: It was here.
17 D WELLS: Where is it now?
18 D CALISTA: Went to Mexico, I guess.
19 A ¶ Griggs laughs, a raw cough.
20 D GRIGGS: Told you. Told you both.
21 D WELLS: Shut him up.
22 D CALISTA: He's tired.
23 D GRIGGS: Tired. That's the word.
* 24 A ¶ The radio spits static.
* 25 A A woman's voice, faint.
26 D DISPATCH [V.O.] (over radio): Sheriff Wells, come in. Sheriff Wells.
27 A ¶ Wells crosses the dock.
28 A Lifts the receiver.
29 D WELLS: This is Wells.
30 D DISPATCH [V.O.] (over radio): Mordecai. The judge says to bring him in alive.
31 D WELLS: Understood.
32 D DISPATCH [V.O.] (over radio): Alive. You hear?
33 D WELLS: I heard.
34 A ¶ He sets the receiver down.
35 A Turns.
36 D CALISTA: Well?
37 D WELLS: Judge wants him breathing.
38 D CALISTA: Judge isn't here.
39 D GRIGGS (smiling): There it is.
40 A ¶ Wells pulls his revolver.
41 A Calista lays a hand on one of hers.
* 42 A The wind kicks up dust.
* 43 A A loose plank bangs somewhere.
44 A Nobody moves.
45 D WELLS: We take him in at dawn.
46 D CALISTA: And tonight?
47 D WELLS: We sit.
48 A ¶ He holsters the gun.
49 A Sits on the dock edge, legs over the dry bed.
50 A After a moment, Calista joins him.
51 A Griggs, between them, lowers his head.

### SCENE s02358 | INT. ARCHIVE VAULT - DEEP-SPACE LIBRARY SHIP - CYCLE UNKNOWN
Detected names (may be incomplete or contain aliases): ARCHIVIST LENKA ORLOVA, ASSISTANT KEZIAH BRANDT, TECHNICIAN OBADIAH MWANGI, UNIT SEVEN, CAPTAIN ISOLDE VANTERPOOL
* 1 A ¶ A cathedral of data.
* 2 A Tall cylinders of blue light line the walls, each humming faintly.
* 3 A The floor is polished obsidian, reflecting everything twice.
* 4 A A single thread of cold air moves through the nave.
5 A ¶ ARCHIVIST LENKA ORLOVA, 60s, in a gray tabard, walks the central aisle with a slate.
6 A She touches each cylinder as she passes, the way a priest touches pews.
7 A ¶ ASSISTANT KEZIAH BRANDT, 20s, follows two steps behind with an armload of sleeves.
8 A Her eyes keep drifting upward to the vaulted ceiling.
9 A ¶ At the far end, a stool, a lamp, and a figure bent over a console: TECHNICIAN OBADIAH MWANGI, 40s, unshaven, his cuffs stained.
10 A ¶ Beside him, a patched service robot, UNIT SEVEN, stands at ease, one optic lens cracked.
11 A It tilts toward the women when they approach.
12 A ¶ CAPTAIN ISOLDE VANTERPOOL, 50s, enters from a side door in full dress uniform, boots clicking on the obsidian.
13 A She does not look at anyone.
14 D LENKA (without turning): Captain. You are late for the reading.
15 D ISOLDE: I was delayed by the bridge.
16 D LENKA: The bridge is always delayed.
17 D OBADIAH (not looking up): Shall I start it?
18 D LENKA: Yes.
19 A ¶ He presses a key.
* 20 A The cylinders brighten, one by one, until the whole vault glows.
* 21 A A low chord rises from the floor, like an organ in another room.
22 D UNIT SEVEN: Playing record eleven. Origin: Earth. Date: unknown.
23 A ¶ Everyone turns to the wall.
* 24 A Light pools and spills into the shape of a tree, its roots stretching, its branches full of leaves.
25 A Nobody speaks.
26 A Keziah's lips part.
27 D ISOLDE (quietly): It is much larger than I remembered.
28 D LENKA: You have never seen it.
29 D ISOLDE: I remembered it anyway.
30 A ¶ Obadiah rises from his stool.
31 A He crosses the vault slowly, hands in his pockets.
32 A He stops beside Isolde and looks up at the tree, then at her profile.
33 A She feels it.
34 A She does not turn.
35 A ¶ Lenka clears her throat.
36 A Keziah drops one of the sleeves.
* 37 A It clatters on the obsidian.
* 38 A The sound echoes, long, long.
39 D UNIT SEVEN: Record eleven is incomplete. Would you like to hear the missing portion?
40 D ISOLDE: No.
41 D LENKA: Yes.
42 A ¶ They look at each other.
* 43 A A beat.
* 44 A The tree flickers.
45 A Isolde unclasps her jacket collar with a short, tight motion.
46 D ISOLDE: Play it.
47 A ¶ The robot raises its cracked lens.
* 48 A The chord darkens.
* 49 A The tree burns, quietly, to ash.

### SCENE s02359 | EXT. SHELLED VINEYARD - DAWN
Detected names (may be incomplete or contain aliases): CORPORAL ELIAS VOSS, SERGEANT MARISKA DOBOS, CHILD
* 1 A ¶ Rows of broken vines in gray mist.
* 2 A A stone wall half collapsed.
* 3 A A crater at its foot, still smoking.
4 A ¶ CORPORAL ELIAS VOSS, 20s, lies in the crater with his rifle across his chest.
5 A He listens to his own breath.
6 A He has not spoken in hours.
7 A ¶ SERGEANT MARISKA DOBOS, 30s, crawls up beside him on elbows, helmet scraped silver.
8 A She lowers herself into the crater without a sound.
9 D DOBOS (whispering): They're gone.
10 D VOSS: Gone where?
11 D DOBOS: Over the ridge.
12 A ¶ He lets out a breath he has held since midnight.
13 A His hand, still locked on the rifle, begins to shake.
14 A She watches it and says nothing, then lays hers over his until the shaking slows.
* 15 A ¶ A scrape of stone.
16 A They both freeze.
17 A ¶ A boy rises from behind the wall.
18 A A CHILD, 8, in a man's coat, his cheeks smeared with dirt, holding a single bunch of grapes.
19 A He looks at the rifles.
20 A At them.
21 A ¶ He holds out the grapes.
22 A ¶ Voss lowers the rifle.
23 A Dobos takes a grape.
24 A Eats it.
25 A Nods once.
26 A The child nods back and vanishes behind the wall.

### SCENE s02360 | INT. PUBLIC POOL - SWIM MEET - EVENING
Detected names (may be incomplete or contain aliases): COACH TREVOR PIKE, DANI KOWALCZYK, ANNELIESE VEGA, STARTER, TEENAGE TIMEKEEPER
* 1 A ¶ Chlorine haze.
* 2 A Echoing whistles.
* 3 A Lane ropes in red and white.
4 A Parents crowd the bleachers with foam fingers.
5 A ¶ COACH TREVOR PIKE, 40s, in a wind jacket and a stopwatch lanyard, kneels at the edge of lane four, speaking low.
6 A At his feet, DANI KOWALCZYK, 17, in a cap and goggles, rocks on her heels.
7 D PIKE: She'll be on your left. Don't watch her.
8 D DANI: I won't.
9 D PIKE: You will.
10 D DANI: I will.
11 A ¶ He grins and squeezes her shoulder.
12 A ¶ Across the deck, in lane five, ANNELIESE VEGA, 17, shakes out her arms.
13 A Her coach says something.
14 A She answers without looking.
15 A Her eyes are on Dani.
16 A ¶ Dani looks back.
17 A Neither blinks.
18 D PIKE (quietly): She beat your time last week.
19 D DANI: I know.
20 D PIKE: She's going to start fast.
21 D DANI: So will I.
22 A ¶ The starter walks to the end of the deck.
23 A A hush spreads over the bleachers.
24 D STARTER [O.S.]: Swimmers, take your marks.
25 A ¶ Dani steps onto the block.
26 A Anneliese steps onto hers.
27 A They bend.
* 28 A A gun cracks.
29 A ¶ Both dive.
* 30 A The water closes over them like glass.
31 A ¶ Pike jogs along the side, timer in fist.
32 A Dani and Anneliese surface together and churn, white water, arms rising in perfect rhythm.
33 A ¶ At the halfway turn, they flip within a breath of each other.
34 A A girl in the stands screams.
35 A ¶ A TEENAGE TIMEKEEPER, 15, in a borrowed volunteer shirt, appears beside Pike with a clipboard, wide-eyed.
36 D TIMEKEEPER: Coach, which one is yours?
37 D PIKE: The one on the left.
38 D TIMEKEEPER: They're both on the left.
39 D PIKE: Then the one who's winning.
40 A ¶ She grins.
41 A The swimmers surge toward the wall.
42 A Anneliese reaches first by half a hand.
43 A Dani slaps the tile a hair behind.
* 44 A ¶ The scoreboard blinks.
45 A Both girls hang from the lane rope, gasping, staring at the numbers.
46 A Anneliese raises one fist.
47 A Dani turns her face to the water, and the goggles hide her eyes.

### SCENE s02361 | INT. TROLL BRIDGE TOLLHOUSE - DUSK
Detected names (may be incomplete or contain aliases): BRUNHILDE GRUMBLEDOWN, ULFRIC, ERLANDEL, SPRIGGET
* 1 A ¶ A stone hut under a mossy arch.
* 2 A A kettle on a hook.
* 3 A Coins in neat stacks.
* 4 A Rain taps the slate roof.
5 A ¶ BRUNHILDE GRUMBLEDOWN, 100s, a troll in a patched apron, stirs the kettle.
6 A Her knuckles are mossy, her hands slow.
7 A Her son, ULFRIC, 40s, sits in a corner with his huge back to her, whittling a bone flute that will never be finished.
8 A A lean elf, ERLANDEL, 20s, slips in from the rain and shakes out his cloak; he slides three silver coins onto the counter without a word.
9 A A small goblin girl, SPRIGGET, 8, perches on the windowsill and swings her feet.
10 D ERLANDEL: Evening, Mother Brunhilde.
11 D BRUNHILDE: Erlandel. You're thinner.
12 D ERLANDEL: The road is long.
13 D BRUNHILDE: So is the winter.
14 A ¶ Ulfric does not turn.
* 15 A The flute scrapes.
16 A Sprigget leans toward Erlandel and whispers, loudly.
17 D SPRIGGET: He hasn't spoken since the flood.
18 D ULFRIC (low, to the wall): I speak.
19 D BRUNHILDE: Ulfric.
20 D ULFRIC: I speak when there's something worth saying.
21 A ¶ Brunhilde ladles tea into four cups and sets them on the counter, one at a time, nudging the last toward her son.
22 A He reaches back without looking and takes it.
23 A Erlandel drinks.
24 A Sprigget hops down, steals a coin, and slips it into her sleeve while everyone pretends to watch the kettle.
* 25 A Rain pours.

### SCENE s02362 | INT. LIGHTHOUSE LAMP ROOM - STORM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HOLLOWAY BRAITHWAITE, KEEPER MARIGOLD FINCH, ANSELM OYEDELE, SISTER CORDELIA, DESDEMONA QUILL, COASTGUARD
* 1 A ¶ A circular room of glass and brass.
* 2 A The great lens turns slowly, throwing beams across black water.
* 3 A Rain slaps the windows.
4 A Five people crowd the narrow gallery, wet coats steaming.
5 A ¶ INSPECTOR HOLLOWAY BRAITHWAITE, 50s, trench coat, notebook, studies the room.
6 A KEEPER MARIGOLD FINCH, 60s, grips a lantern.
7 A DR. ANSELM OYEDELE, 40s, holds a medical bag.
8 A SISTER CORDELIA, 30s, fingers a rosary.
9 A And the boat captain, DESDEMONA QUILL, 50s, arms folded by the stairs.
* 10 A ¶ A body lies under a tarp at the center of the floor.
11 D BRAITHWAITE (to the room): Nobody leaves until I say.
12 D QUILL: The tide says otherwise.
13 D BRAITHWAITE: Then the tide can wait.
14 D FINCH (muttering): Fourteen years and not one drowned. Now this.
15 D OYEDELE (to Braithwaite): He wasn't drowned.
16 D BRAITHWAITE: How do you know?
17 D OYEDELE: Because there's no water in his lungs.
* 18 A ¶ A beat.
* 19 A The lens beam sweeps across the faces, one by one.
20 D CORDELIA (to herself): I saw nothing.
* 21 A ¶ A radio on the wall crackles.
22 D COASTGUARD [V.O.] (over radio, thin): Lighthouse, this is Coastguard. Storm has closed the channel. Repeat, no boats until dawn.
23 D BRAITHWAITE (to the radio): Understood. Hold position.
24 D COASTGUARD [V.O.] (over radio): Is anyone injured?
25 D BRAITHWAITE (glancing at the tarp): Not anymore.
26 A ¶ He switches off the radio.
* 27 A The beam sweeps again.
28 A This time he is watching Finch.
29 D BRAITHWAITE [CONT'D] (to the whole room): I'll ask once. Who was at the lamp when it went dark?
30 A ¶ Nobody answers.
* 31 A Then, far above, the lens stops turning.

### SCENE s02363 | INT. HOSPITAL ROOFTOP GARDEN - MORNING
Detected names (may be incomplete or contain aliases): IMELDA FAIRWEATHER-NKEMELU, ARTHUR PENHALIGON, JULIETTE PENHALIGON, NURSE BEATRIX OYELAKIN, DR. FAIRWEATHER
* 1 A ¶ A walled terrace above the oncology wing.
* 2 A Raised beds of lavender and rosemary.
* 3 A Wrought-iron benches, a trellis of late roses.
* 4 A Pigeons strut.
* 5 A The city hums far below.
6 A ¶ DR. IMELDA FAIRWEATHER-NKEMELU, 50s, in a white coat gone limp, sits on a bench with a paper cup.
7 A She has not slept.
8 A A gray streak runs through her hair.
9 A ¶ MR. ARTHUR PENHALIGON, 70s, in a hospital gown and a corduroy cardigan, sits beside her, IV pole parked at his knee.
10 A His cheeks are hollow.
11 A His eyes are very clear.
12 A ¶ His daughter, JULIETTE PENHALIGON, 40s, in a trench coat, perches on the bench's arm, hands clasped.
13 A ¶ A nurse, NURSE BEATRIX OYELAKIN, 30s, in blue scrubs, hovers at the door with a clipboard.
14 D PENHALIGON: You'll tell it plainly, Doctor.
15 D DR. FAIRWEATHER: Yes.
16 D PENHALIGON: Good. Everyone else has been very gentle.
17 D DR. FAIRWEATHER: The scan shows the tumor has spread to the liver.
18 D PENHALIGON: How long?
19 D DR. FAIRWEATHER: Weeks. Perhaps a few months.
20 D JULIETTE (quietly): Dad.
21 D PENHALIGON: It's all right, Juliette.
22 D DR. FAIRWEATHER: We can keep you comfortable. We can plan the time.
23 D PENHALIGON: Plan.
24 D DR. FAIRWEATHER: Yes.
25 D PENHALIGON: I have been planning since I was a young man. I planned to write a novel. I planned to see Lisbon.
26 D DR. FAIRWEATHER: Have you seen Lisbon?
27 D PENHALIGON: Never.
28 D DR. FAIRWEATHER: Then there is something to plan.
29 D PENHALIGON (a thin smile): You are a surprising doctor.
30 D DR. FAIRWEATHER: I have been told.
31 D JULIETTE (to the doctor): Can he travel?
32 D DR. FAIRWEATHER: With supervision. In two weeks. Not more.
33 D BEATRIX (from the door): Doctor, the families are waiting in Bay Three.
34 D DR. FAIRWEATHER (rising, to Beatrix): Two minutes.
35 D PENHALIGON: Doctor.
36 D DR. FAIRWEATHER: Yes, Mr. Penhaligon.
37 D PENHALIGON: Thank you for sitting.
38 A ¶ She nods.
39 A Touches his shoulder for a moment, light as a petal, and goes.
* 40 A The door closes.
* 41 A A pigeon lands on the trellis.
42 A Juliette takes her father's hand.
43 A He looks at the lavender.

### SCENE s02364 | INT. ARENA - ROLLER DERBY CHAMPIONSHIP - LAST JAM - NIGHT
Detected names (may be incomplete or contain aliases): DJ, BLANCHE, OKONKWO, LINDQVIST, FERREIRA-WONG, SZYMANSKI, DELACROIX-NAKAMURA, ANNOUNCER
* 1 A ¶ A packed hall.
* 2 A A banked track painted in clashing neon, chain-link fence, a scoreboard flickering.
3 A The crowd roars in waves, a hundred foam fingers pumping.
4 A A DJ on a scaffolding spins a bass line that shakes the railings.
* 5 A ¶ At the pack: the Bay City Banshees against the Harbor Hellions.
6 A Six skaters pivot and shove on the inside curve.
* 7 A Wheels scream on the sealed concrete.
8 A ¶ BLANCHE "BLITZKRIEG" OKONKWO, 30s, jammer for the Banshees, crouches at the line with her star-covered helmet strapped tight.
9 A Behind her, her blocker, PRUDENCE "PRU" LINDQVIST, 40s, thick-armed, rolls on her toes.
10 A Across the line, the Hellions' jammer, ODALYS "THE ORACLE" FERREIRA-WONG, 20s, flexes her fingers.
11 A Her blocker, GRETA "GRAVEYARD" SZYMANSKI, 30s, spits into her mouth guard.
12 A And the head referee, MARGUERITA "MARG" DELACROIX-NAKAMURA, 50s, in black and white stripes, raises her whistle.
13 D ANNOUNCER [V.O.] (over speakers, booming): Ladies and gentlemen, the final jam! Two minutes, one title!
* 14 A ¶ The whistle shrieks.
15 A The pack erupts.
16 A Blanche drives into the first wall, ducks Greta's hip, spins around Pru's elbow, and slips through a gap no wider than a tire.
17 A Odalys is a half-step behind, then even, then briefly ahead.
18 A They crash shoulder to shoulder at the first turn, and the crowd howls.
19 A ¶ Greta slams into Pru and both skid sideways in a spray of sparks.
20 A Marg tracks them, whistle between her teeth, arm out like a conductor.
21 A Blanche's hip checks a Hellion, who hits the rail and slides down it.
22 D ANNOUNCER [V.O., CONT'D] (over speakers): Banshees up by two! Thirty seconds!
23 A ¶ Blanche glances back.
24 A Odalys is gaining.
25 A Her face is a mask of concentration.
26 D BLANCHE (through her teeth): Not tonight.
27 A ¶ She jumps the apex, crosses her skates in a tight loop, and rockets down the straightaway as Odalys, a breath behind, throws a hip.
* 28 A Contact.
29 A Blanche stumbles.
30 A The crowd gasps.
31 A Pru spins and catches her sleeve, throws her forward, a human slingshot.
32 A Blanche glides across the line a full stride ahead.
* 33 A ¶ The buzzer sounds.
34 A The Banshees' side explodes.
* 35 A Foam fingers tumble through the air.
36 A Pru tackles Blanche from behind and they roll across the track, screaming.
37 A Odalys coasts to the boards, helmet off, hair stuck to her forehead, and offers Blanche a hand without a word.
38 A Blanche takes it.
39 A They hold each other's wrists for a moment, breathing like swimmers.
40 A ¶ Marg skates up, blows a final low whistle, and raises Blanche's arm in the air.

### SCENE s02365 | INT. DERELICT MARS SURFACE HABITAT - COMMON ROOM - SOL 412
Detected names (may be incomplete or contain aliases): HATTIE, OKONJO-BELL, LEOPOLD ASHWORTH, COMMS OFFICER RENATA KWIATKOWSKI, BILLIE, TSANG
* 1 A ¶ Red dust coats every surface.
* 2 A A cracked dome overhead lets in amber light.
* 3 A Cots, a folding table, shelves of dehydrated meals, a dead plant in a coffee tin.
* 4 A A generator whirs weakly in the next compartment.
5 A ¶ MISSION SPECIALIST HARRIET "HATTIE" OKONJO-BELL, 40s, in a faded jumpsuit, sits at the table cleaning a helmet visor with a rag.
6 A Her hair is chopped short.
7 A Her eyes are tired but sharp.
8 A ¶ DR. LEOPOLD ASHWORTH, 60s, leans against a shelf, wrapped in a thermal blanket, coughing into a fist.
9 A A gray beard has grown unevenly on his cheeks.
10 A ¶ COMMS OFFICER RENATA KWIATKOWSKI, 30s, kneels beside a dead radio set with a screwdriver, muttering in Polish.
11 D HATTIE: Any luck?
12 D RENATA: It's the transmitter. The coil's burned through.
13 D HATTIE: Can you fix it?
14 D RENATA: With what? A paper clip and a prayer?
15 D LEOPOLD (rasping): I have a prayer.
16 D RENATA: Save it for the oxygen.
17 A ¶ Hattie sets the visor down.
* 18 A A faint rumble builds in the walls.
19 A The three of them look up.
* 20 A Dust trickles from the dome.
21 D HATTIE: Another quake?
22 D LEOPOLD: No. That's an engine.
23 A ¶ Renata drops the screwdriver.
24 A They all stare at the ceiling.
* 25 A The rumble grows, a roar, then a shriek of thrusters.
* 26 A A shadow slides across the dome, long and dark.
* 27 A ¶ A final shudder.
* 28 A Silence.
* 29 A ¶ Then a hatch clanks at the far end of the room.
* 30 A It swings open.
31 A A figure in a white suit steps through, visor up, face lit by the amber glow: CAPTAIN WILHELMINA "BILLIE" TSANG, 50s, with a rescue beacon in one gloved hand.
32 D BILLIE: Hello, Hattie.
33 A ¶ Hattie rises very slowly.
* 34 A Her rag slides from the table.
35 D HATTIE: You came back.
36 D BILLIE: I said I would.
37 D LEOPOLD (a tired laugh): You said it forty times.
38 D BILLIE: And I meant it forty times.
39 A ¶ Renata crosses the room in three strides and throws her arms around Billie's suit.
40 A The visor clacks against her forehead.
41 A She laughs and sobs and swears in Polish.
42 A Hattie stays where she is, one hand on the back of a chair.
43 D HATTIE (quietly): How long do we have?
44 D BILLIE: Eleven minutes before the dust storm.
45 D HATTIE: Then we go.
46 D BILLIE: We go.
47 A ¶ She hands the beacon to Leopold, helps him up, drapes the blanket across his shoulders.
48 A He leans on her.
* 49 A The generator sputters and stops.
* 50 A In the sudden quiet the dead plant in its coffee tin catches the light from the open hatch, and for one moment, it looks green.

### SCENE s02366 | INT. NIGHT BUS DEPOT - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LORENZA ABDULLAHI, STATION ANNOUNCER
* 1 A ¶ Fluorescent tubes buzz.
* 2 A Plastic seats bolted in rows.
* 3 A A vending machine hums, its glass fogged.
* 4 A A schedule board shows every departure as DELAYED.
* 5 A ¶ The door opens.
* 6 A A gust of cold.
7 A LORENZA ABDULLAHI, 50s, in a long wool coat and a knit cap, drags a small wheeled suitcase over the threshold.
8 A She stops.
9 A Looks around.
10 A No one else.
11 A She chooses a seat near the machine and sits, the suitcase upright beside her like a patient child.
12 A ¶ She takes out a thermos.
13 A Pours.
14 A Her hands shake slightly.
15 A She drinks.
* 16 A ¶ A public address speaker clicks.
17 D STATION ANNOUNCER [V.O.] (over speaker, tinny): Attention passengers. The ten-fifteen to Redding has been delayed. We apologize for the inconvenience.
18 A ¶ Lorenza checks her watch.
* 19 A It is ten-forty.
20 D STATION ANNOUNCER [V.O., CONT'D] (over speaker): New departure time: unknown.
21 A ¶ She screws the cap on the thermos.
22 A Sets it in her lap.
23 A She looks at the empty seats, one by one, as if counting.
24 A ¶ She opens her handbag.
25 A Takes out a folded letter.
26 A Reads the first line.
27 A Reads it again.
28 A Refolds it and slides it back.
* 29 A ¶ The vending machine rattles and drops something into its tray, unprompted.
30 A Lorenza looks at it for a long moment.
31 A She stands, crosses to it, bends, and lifts out a packet of peanuts.
32 A She turns it over.
33 A Opens it.
34 A Eats one.
35 D STATION ANNOUNCER [V.O., CONT'D] (over speaker): Passengers are advised to remain in the waiting area.
36 A ¶ Lorenza returns to her seat.
37 A Smooths her coat over her knees.
38 A Sits very straight, and waits.

### SCENE s02367 | INT. FLOODED PARISH CHURCH - BELFRY STAIRCASE - NIGHT
Detected names (may be incomplete or contain aliases): FATHER AUGUSTINE BELLWEATHER, BARTY, GRAVES
* 1 A ¶ A narrow stone stair spiraling up inside the bell tower.
* 2 A Black water laps the lower steps, thick with floating hymnals.
* 3 A A single candle burns in a niche.
* 4 A Wind moans through the louvers above.
5 A ¶ FATHER AUGUSTINE BELLWEATHER, 60s, in a soaked cassock, climbs backward up the stairs, a crucifix held out like a shield.
6 A His breath comes in small, terrified gasps.
7 A ¶ Below him, in the water, something rises: BARTHOLOMEW "BARTY" GRAVES, 40s, the sexton, drowned-pale, eyes open, his coat streaming.
8 A He climbs the stairs hand over hand, unhurried, smiling.
9 D FATHER BELLWEATHER: Barty. Stay where you are.
10 D BARTY: Father. It's cold down here.
11 D FATHER BELLWEATHER: I know. I know it is.
12 D BARTY: You left me.
13 D FATHER BELLWEATHER: I went for help.
14 D BARTY: You went for the key.
15 A ¶ The priest stops.
16 A His heel finds the next stair.
17 A He grips the rail.
18 D FATHER BELLWEATHER: The bell is not for you, Barty.
19 D BARTY: Then who is it for?
20 D FATHER BELLWEATHER: It is for all of us.
21 D BARTY (softly): Ring it.
* 22 A ¶ A telephone rings.
* 23 A Somewhere high in the belfry, an old black rotary set, impossible, plugged into nothing.
* 24 A It rings and rings.
25 D BARTY [V.O.] (from the phone, distant): Father Bellweather, please pick up.
26 D FATHER BELLWEATHER (whispering): God have mercy.
27 D BARTY: That is not me.
28 D BARTY [V.O.] (from the phone): Father, please. I'm waiting.
29 A ¶ The priest turns his face toward the sound.
30 A Barty reaches a pale hand to his ankle.
* 31 A The candle gutters.
* 32 A Water rises another step.
33 D FATHER BELLWEATHER (very quietly): Then let me answer.
34 A ¶ He tears free, lunges up the last turn of the stairs, and the dark closes behind him like a door.

### SCENE s02368 | INT. MUSEUM OF CLOCKS - GALLERY OF AUTOMATA - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODETTE FONTAINE-ABARA, TICK, WILLOUGHBY, LOTTIE PAXTON, OLD BERTRAM MULDOON, JOJO, ARRIAGA
* 1 A ¶ A hushed gallery lined with glass cases.
* 2 A Hundreds of clocks tick out of rhythm: cuckoos, carriage clocks, a grandfather the height of a wardrobe.
* 3 A A mechanical bird in a gilt cage sings once an hour.
* 4 A Moonlight pools on parquet.
5 A ¶ At the center, five people in museum staff blazers pretend to inspect a display.
6 A They are not staff.
7 A ¶ MADAME ODETTE FONTAINE-ABARA, 60s, silver chignon, holds a tiny silver wand like a baton and speaks as if lecturing an audience.
8 A THADDEUS "TICK" WILLOUGHBY, 30s, with a tool roll under his blazer, crouches at the grandfather clock.
9 A LOTTIE PAXTON, 20s, in sneakers, unspools a coil of fishing line.
10 A OLD BERTRAM MULDOON, 70s, with a cane and a hearing aid, taps a case with one knuckle.
11 A And JOSEFINA "JOJO" ARRIAGA, 30s, the lookout, stands in the arched doorway pretending to read a pamphlet.
12 D ODETTE (brightly, to the empty gallery): And here we have the Marquis automaton, circa 1782, a marvel of pre-Revolutionary engineering.
13 D TICK (whispering): She does the voice every time.
14 D LOTTIE (whispering): It's the voice that makes it work.
15 A ¶ Bertram knocks on the glass of the automaton's case and cups a hand behind his ear.
* 16 A A tiny gear inside shifts.
17 A He nods, satisfied.
18 A Lottie drops the fishing line through a crack in the display, feeds it down to the latch, and ties a knot in one smooth motion, while Tick unscrews the clock's back panel, reaches in, and removes a small velvet pouch.
19 A Jojo, without looking up from her pamphlet, taps twice on the doorframe.
20 A ¶ Everyone freezes.
* 21 A Footsteps echo from the far corridor, then fade.
22 D JOJO: Clear.
23 D ODETTE (back to the lecture voice): Note the delicate wrist articulation.
* 24 A ¶ The mechanical bird begins to sing.
25 A All five heads turn.
26 A They stand, perfectly still, until it finishes its song.

### SCENE s02369 | INT. CASINO BASEMENT - COUNTING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NOVA, FELIX
* 1 A ¶ A windowless vault of stainless steel counters and humming money counters.
* 2 A Stacks of bills in rubber bands.
* 3 A A camera dome on the ceiling blinks green.
4 A ¶ NOVA, 30s, in a black security uniform with a mismatched badge, pushes a cart of laundry through the door.
5 A Her gait is bored and easy.
6 A She parks the cart, picks up a clipboard, and begins to count towels.
7 A ¶ At the far counter, FELIX, 50s, the night supervisor, sits in a swivel chair eating a sandwich.
8 A He glances at her once, then returns to his sandwich.
9 A ¶ She does not look at him.
10 A She walks the length of the room, adjusts a stack of towels, nudges a bill-counter's cover straight, checks the clipboard.
11 A She is just a woman doing a dull job.
12 D FELIX: You're new.
13 D NOVA: Third week.
14 D FELIX: They don't send laundry down this late.
15 D NOVA: They do when the fountain overflows.
16 A ¶ He considers this.
17 A Swivels, chews.
18 A She keeps counting.
19 D FELIX: Which one of the fountains?
20 D NOVA: Lobby. The big one.
21 D FELIX: The big one doesn't overflow.
22 D NOVA: Tell that to the lobby.
23 A ¶ Felix puts down the sandwich.
24 A He wipes his fingers on a napkin, one at a time.
25 A His hand drifts toward a desk phone and stops.
26 A She notices, and for an instant her bored mask slips and slides back.
27 A ¶ She walks to the cart, reaches under the towels, and withdraws not a towel but a short black cylinder.
28 A She turns, thumb on a pin, smiling at him as one smiles at a toddler.
29 D NOVA [CONT'D]: Felix. Don't.
30 D FELIX (very still): How do you know my name?
31 D NOVA: It's on your lanyard.
32 A ¶ His eyes drop to the lanyard.
33 A They come up again.
34 A He lifts both hands slowly from the desk, and Nova steps closer, the cylinder held low, almost gently, as the camera dome on the ceiling blinks from green to red.
35 D FELIX [CONT'D]: That camera...
36 D NOVA: I know. I've been waiting for it.
37 A ¶ She tosses the cylinder underhand onto his desk.
38 A It rolls to a stop against the sandwich, and Felix flinches.
* 39 A Nothing happens.
* 40 A It is only a flashlight.
41 A ¶ Nova laughs, quietly, and wheels the cart toward the vault door, which clicks open from the other side.

### SCENE s02370 | INT. FLOODED PUMP HOUSE - RICE TERRACES - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT HADIZA BELLO, CORPORAL TOMEK WRONA, PRIVATE LI WEI, VOICE, CAPTAIN DUARTE
* 1 A ¶ Grey light leaks through a tin roof pocked with shrapnel holes.
* 2 A Knee-deep brown water slops against concrete walls.
3 A SERGEANT HADIZA BELLO, forties, mud to the elbows, crouches on a pump housing with a radio handset wedged against her shoulder, while CORPORAL TOMEK WRONA, a lanky twenty-two-year-old with a bandaged ear, wades in from the doorway and sets a dented ammo can on the ledge beside her.
4 A She doesn't look at him.
5 A He opens the can, counts what's left, and shuts it again, and behind them PRIVATE LI WEI, nineteen, thin as a rake, sits against the far wall with his rifle across his knees, staring at the water as if it might hand him an answer.
6 D BELLO (into handset): Say again, Control. Say again.
* 7 A ¶ Static.
8 A She lowers the handset and lets it hang by its cord.
9 D WRONA: Anything?
10 D BELLO: They're calling it off.
11 D WRONA: Off.
12 D BELLO: The push. Guns have stopped. Whatever they were going to do up the hill, they're not doing it.
13 A ¶ Li Wei looks up.
14 A He tries to speak, coughs, and tries again.
15 D LI WEI: So we go home?
16 D BELLO: We go back to the road. That's not the same thing.
17 A ¶ She slides off the housing into the water and he grimaces at the cold of it, then steadies himself on the wall while Wrona reaches for the can and hauls it onto his shoulder.
18 A They're all slow now, all of them moving like men who have been told to stop running and haven't yet believed it.
19 D WRONA: Captain's still up there.
20 D BELLO: I know where the Captain is.
* 21 A ¶ A VOICE crackles from the handset, small and tinny.
22 D CAPTAIN DUARTE [V.O.] (over radio): Bello. Bello, it's Duarte. I'm coming down. Hold the pump house.
23 A ¶ Bello lifts the handset.
24 A She stares at it a moment before answering, and Wrona watches her face for the thing she won't say.
25 D BELLO (into handset): Holding, sir.
26 A ¶ She hangs it back on its hook.
27 A Li Wei lets out a breath that turns into a laugh and then into something quieter.
28 A Nobody tells him to stop.
29 D LI WEI: I thought we were done.
30 D BELLO: We are done. Get some water in you.
31 A ¶ She wades to the door and leans on the frame, looking out at the terraces going silver in the light.
32 A Wrona joins her, and for a while neither of them says anything at all.
33 D WRONA: It's quiet.
34 D BELLO: Don't say that out loud.

### SCENE s02371 | INT. 24-HOUR LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): WREN, TEO, STRANGER, ABARA, BAZ
* 1 A ¶ Fluorescent hum.
* 2 A Dryers turning, nobody watching.
3 A ¶ WREN, thirties, sits on a folding table with a paperback open.
4 A She hasn't turned a page in ten minutes.
5 A Across the room, TEO, nineteen, feeds quarters into a machine that doesn't need them.
6 A ¶ A STRANGER in a wet raincoat enters.
7 A Sets a duffel on the counter.
8 A Looks at neither of them.
9 D STRANGER: Machine four broken?
10 D WREN: Eats quarters.
11 A ¶ He nods.
12 A Doesn't move.
13 A She turns a page.
14 A Teo drops a coin.
* 15 A It rolls.
16 A Nobody picks it up.
17 A ¶ MRS. ABARA, seventies, folds towels behind the counter, slow and exact.
18 D MRS. ABARA: Eleven-forty. Dryers lock at midnight.
19 D STRANGER: Plenty of time.
20 A ¶ He unzips the duffel one inch.
21 A Zips it again.
22 A Wren watches the zipper, then the book.
23 D WREN: You're Baz.
24 D BAZ: Who's asking.
25 D WREN: Nobody. Machine four's yours.
26 A ¶ He takes the duffel to machine four.
27 A Opens the door.
28 A Climbs the stool.
29 A Reaches behind the drum.
30 A ¶ Teo, still not looking, feeds in another quarter.

### SCENE s02372 | EXT. SALT FLAT - AFTERNOON
Detected names (may be incomplete or contain aliases): IMOGEN REYES-HALL, ABEL NKEMELU
* 1 A ¶ The ground is a white plate to every horizon, cracked into hexagons, and the sun sits on it like a coin on a table.
* 2 A A sedan lies tipped in a drainage cut a quarter mile back, one wheel still turning in the heat.
3 A ¶ IMOGEN REYES-HALL, fifties, sunburnt, a silk scarf knotted over her hair, drags a plastic jug by its handle across the crust.
4 A Behind her, ABEL NKEMELU, twenty-six, limps with one shoe on and one shoe in his hand, his lips split and pale.
5 A ¶ She stops.
6 A He stops.
7 A They look at the jug between them, the water in it barely above the lowest mark, and then at the horizon, which has not moved.
8 D ABEL: How far d'you think?
9 D IMOGEN: To the highway? Eleven miles. Maybe nine.
10 D ABEL: You said six this morning.
11 D IMOGEN: This morning I was optimistic.
12 D ABEL: And now?
13 D IMOGEN: Now I can count. We have a pint each. We can walk at night, when it's cold, and sleep through the worst of the day under the car. That's what the book says. That's what I'd tell my students to do.
14 D ABEL: You teach survival?
15 D IMOGEN: I teach art history. I read a book once.
16 D ABEL (laughing, then wincing): God. Okay. Okay. Then why are we walking now?
17 D IMOGEN: Because the car is a mile behind us and I could not make myself sit in it another hour. Because every minute I sat there I was listening for an engine.
18 D ABEL: And?
19 D IMOGEN: And there wasn't one. There was your breathing, and mine, and the metal ticking as it cooled. And I thought, if I stop moving I'll start counting, and if I start counting I'll know exactly how this ends.
20 D ABEL: How does it end?
21 D IMOGEN: You tell me. You're the one who wanted a shortcut.
22 D ABEL: That's not fair.
23 D IMOGEN: No. It isn't. I'm sorry.
24 D ABEL: I saw the sign. I thought it said a gas station. It said a salt works. Closed. Since 1974.
25 D IMOGEN: Abel. Stop.
26 D ABEL: I'm just saying I read it wrong. Out loud. For the record. In case.
27 D IMOGEN: In case what?
28 D ABEL: In case one of us doesn't make it to the road, and the other one has to tell somebody.
29 A ¶ She lifts the jug and shoves it into his hands.
30 A He holds it like something alive.
31 D IMOGEN: Drink. Two mouthfuls. Then I drink two. Then we walk until the sun touches the ground, and then we walk some more, and when we reach the road you can tell them any story you like.
32 D ABEL (small, steady): Two mouthfuls.
33 A ¶ He drinks.
34 A Passes it.
35 A She drinks.
36 A Wipes her mouth with the back of her wrist and takes the jug, and they turn together toward the line where the white meets the sky.

### SCENE s02373 | INT. MINIATURE GOLF CLUBHOUSE - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN HOOK'S INVITATIONAL, BARNABY PLOTT, DEE, OKAFOR-LINDQVIST, MARCUS VANCE, TALL STRANGER
* 1 A ¶ A snack-bar-and-trophy-case combo built to look like a pirate ship, with a fibreglass parrot bolted over the register.
* 2 A The carpet is the green of a sick lawn.
* 3 A Rain taps the porthole windows.
* 4 A A hand-lettered banner reads: CAPTAIN HOOK'S INVITATIONAL - FINAL ROUND.
5 A ¶ BARNABY PLOTT, sixties, beard dyed an unnatural black, in a captain's hat and a tracksuit, polishes a plastic trophy with a napkin.
6 A At the counter, DOLORES "DEE" OKAFOR-LINDQVIST, forties, a brisk accountant in a rain slicker, studies a clipboard.
7 A In a booth, young MARCUS VANCE, twenty, wears a bowling shirt and sips a slushie with great solemnity.
8 D DEE: So the prize pool is four hundred dollars.
9 D BARNABY: Four hundred and twelve. Counting the raffle.
10 D DEE: And the entry fees were forty each, eleven entrants.
11 D BARNABY: Correct.
12 D DEE: Then the prize pool is four forty.
13 D BARNABY: Ah. Well. There's the hat.
14 D DEE: Barnaby.
15 D BARNABY: The hat was twenty-eight dollars.
16 D MARCUS (through straw): It's a good hat.
17 D DEE: Nobody asked you.
18 D MARCUS: Sorry.
* 19 A ¶ A beat of calm.
20 A Barnaby sets the trophy on the shelf.
21 A Dee clicks her pen shut.
* 22 A The rain eases.
* 23 A For a moment the whole place feels cosy.
24 D BARNABY: You know, I think this is the best year we've had.
25 D DEE: It might be.
26 D MARCUS: The windmill was running smooth this morning.
27 D BARNABY: That windmill has not run smooth since the Reagan administration.
28 D MARCUS: Well. It did today.
29 D DEE (still writing): Who's the other finalist?
30 D BARNABY: Some fellow. Showed up at nine, paid cash. Name on the sheet is... Smith.
31 D DEE: Just Smith.
32 D BARNABY: I assumed he was shy.
* 33 A ¶ The door opens.
34 A A TALL STRANGER in a trench coat enters, shaking out an umbrella.
35 A Sixty, silver hair, eyes like cold coins.
36 A He walks to the counter and sets a putter on it.
37 D STRANGER: I'm here for the final.
38 D BARNABY: Mister Smith! Wonderful. Dee, this is the competition.
39 D STRANGER: It's not Smith.
40 D DEE: Pardon?
41 D STRANGER: It's Vance.
42 A ¶ Marcus chokes on his slushie.
43 A Barnaby looks from the stranger to Marcus and back.
44 A Dee puts down her pen.
45 D MARCUS: Dad?
46 D VANCE: Hello, Marcus.
47 D BARNABY: You two know each other?
48 D MARCUS: He told me he was dead.
49 D VANCE: I told you I was in Arizona.
50 D MARCUS: For nine years.
51 D DEE: Mr. Vance, we don't actually have a rule about estranged fathers, but I think I should say the raffle money is already spent.
52 D BARNABY: Spent on the hat.
53 D DEE: Barnaby.
54 D VANCE: I read about the tournament in the paper. Your name was on the entry list. I thought, he's still playing.
55 D MARCUS: I never stopped.
56 D VANCE: I know. I used to watch you through the fence.
57 A ¶ Barnaby takes off the hat and holds it to his chest.
58 A Dee's eyes go wide.
59 A Nobody speaks.
* 60 A The parrot above the register creaks on its bolt.
61 D MARCUS (quiet): Fine. Eighteen holes. Winner buys lunch.
62 D VANCE: And the loser?
63 D MARCUS: Asks the other one a question.
64 A ¶ Vance nods once.
65 A He picks up his putter.
66 A Marcus slides out of the booth with his own, an old one with tape on the grip.
67 D BARNABY (whispering to Dee): I think that's the best tournament we've ever had.
68 D DEE (whispering back): I'm still short twelve dollars.

### SCENE s02374 | INT. COUNTY COURTHOUSE - CLOCK TOWER JURY ROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE AUGUSTINE FAIRWEATHER, ATTORNEY ROSALIND MACALLISTER, ATTORNEY THADDEUS PRUITT, CLERK PRISCILLA NAKASHIMA
* 1 A ¶ A circular chamber at the top of a stone tower, walls hung with portraits of long-dead judges.
* 2 A A great brass clock mechanism ticks behind a glass panel.
* 3 A Rain beads on the narrow windows.
* 4 A A long oak table, six empty water glasses.
5 A ¶ JUDGE AUGUSTINE FAIRWEATHER, sixties, silver-haired and courtly in his robes, pours tea from a thermos.
6 A Across from him sits ATTORNEY ROSALIND MACALLISTER, forties, sharp-suited, with a folder held flat in front of her like a shield.
7 A Beside her, ATTORNEY THADDEUS PRUITT, fifties, rumpled, taps a pencil in rhythm with the clock.
8 D FAIRWEATHER: Sugar, Miss Macallister?
9 D MACALLISTER: No, thank you, Your Honor.
10 D FAIRWEATHER: Mr. Pruitt?
11 D PRUITT: Two. Please.
12 D FAIRWEATHER: I like these hours before the jury comes up. A man gets to remember he's old.
13 D PRUITT: You're not old, Judge.
14 D FAIRWEATHER: That's what a defence attorney says.
15 D MACALLISTER: We're not here to discuss your age, Judge. We're here about the motion.
16 D FAIRWEATHER: Ah, yes. The motion.
17 A ¶ He sips.
18 A Sets down the cup.
19 A Smiles at them both with enormous warmth.
20 D PRUITT: Your Honor, my client has been very patient.
21 D MACALLISTER: Your client has been very patient for eleven months. Mine has been waiting for six years.
22 D PRUITT: Rosalind, with respect-
23 D MACALLISTER: Thaddeus, with none.
24 D FAIRWEATHER: Children. Children.
25 A ¶ He holds up a hand.
* 26 A The clock behind the glass chimes the half hour and everything in the room trembles with it.
27 D FAIRWEATHER [CONT'D]: I have read both briefs. Twice. Once in the afternoon and once at three in the morning, because that's when a man reads honestly.
28 D MACALLISTER: And?
29 D FAIRWEATHER: And I find they're not so different as they pretend to be.
30 D PRUITT: That's... encouraging.
31 D FAIRWEATHER: Isn't it.
* 32 A ¶ Footsteps on the stair.
33 A The door swings open and a young woman enters, breathless, a stack of documents hugged to her chest.
34 A CLERK PRISCILLA NAKASHIMA, twenty-six, wears a plain grey suit and an expression of dread.
35 D PRISCILLA: Your Honor. Forgive me. This just came from the records office.
36 D FAIRWEATHER: Thank you, Miss Nakashima. Put it here.
37 A ¶ She sets the stack in front of him.
38 A He opens the top envelope.
39 A Reads.
40 A His smile does not move, but something behind it does.
41 D MACALLISTER: Judge?
42 D FAIRWEATHER: It seems the original deed was never recorded.
43 D PRUITT: What?
44 D MACALLISTER: That's impossible. I filed it myself.
45 D FAIRWEATHER: You filed a copy, Miss Macallister. The original was delivered to this office in 1987 and signed for by a clerk who is now deceased.
46 D PRISCILLA: It was misfiled. Under the wrong township.
47 D PRUITT (rising): Which means the transfer-
48 D MACALLISTER: Never legally occurred.
49 D FAIRWEATHER: Which means, if I'm reading this right, that neither of your clients owns the property in question.
* 50 A ¶ Silence.
* 51 A The clock ticks.
52 A Pruitt sits back down, slowly, as if the chair might break.
53 A Macallister stares at the judge.
54 D MACALLISTER: Then who does?
55 D FAIRWEATHER: The county.
56 A ¶ He picks up his tea.
57 A Sips it.
58 A Looks at the portraits on the wall, the long line of dead men in black.
59 D FAIRWEATHER [CONT'D]: I suggest we all have a very long think, and then a very short settlement.
60 D PRISCILLA: Shall I fetch the jury, Your Honor?
61 D FAIRWEATHER: No, my dear. I think the jury can go home.

### SCENE s02375 | EXT. RIVER FERRY LANDING - NOON
Detected names (may be incomplete or contain aliases): OSCAR PIKE, STRANGER
* 1 A ¶ A flat raft on a rope.
* 2 A Mud bank.
* 3 A Two mules asleep standing.
4 A ¶ OSCAR PIKE, sixty, ferryman, sits on a barrel, whittling.
5 A Doesn't look up.
6 A ¶ A STRANGER rides down the bank.
* 7 A Dusty hat.
* 8 A Rifle across the saddle.
9 A Stops at the water's edge.
10 D OSCAR: Two bits a horse.
11 D STRANGER: One horse.
12 D OSCAR: Then two bits.
13 A ¶ The stranger pays.
14 A Dismounts.
15 A Leads the horse onto the raft.
16 A Oscar sets down the knife, stands, takes the rope.
17 D OSCAR [CONT'D] (to the mules): Easy now, you lot.
18 A ¶ They push off.
* 19 A Water slaps the planks.
20 A Halfway across the stranger speaks.
21 D STRANGER: You ever hear of a man called Hollis Dane?
22 D OSCAR (muttering, to himself): Lord help me.
23 D STRANGER: That's a no?
24 D OSCAR: Name's familiar. Nothing more.
25 A ¶ The stranger nods.
26 A Takes off his hat.
27 A Wipes the band with a thumb.
28 D STRANGER: Dane. That's my name now.
29 A ¶ Oscar keeps hauling the rope.
30 A Doesn't miss a pull.

### SCENE s02376 | INT. MINIVAN - AUTOMATIC CAR WASH - DAY
Detected names (may be incomplete or contain aliases): ADAEZE OBI, GREG OBI, TEENAGER, SAMIR
* 1 A ¶ Dark.
* 2 A Brushes thump the roof.
* 3 A Soap slides down the glass.
4 A ¶ ADAEZE OBI, forties, grips the wheel.
5 A Eyes ahead.
6 A Her husband GREG OBI, forties, in the passenger seat, scrolls his phone.
7 A In the back, a TEENAGER in a hoodie stares at the ceiling.
8 D GREG: Two days. That's all I'm saying.
9 D ADAEZE: You've said it four times.
10 D GREG: Because nobody answers.
* 11 A ¶ The brush hits the windshield.
* 12 A Foam.
* 13 A Roar.
14 D ADAEZE: He's right here. Ask him.
15 D GREG: I'm asking you.
16 A ¶ The teenager pulls out an earbud.
17 D TEENAGER: I'm not going.
18 D GREG: Nobody asked you.
19 D TEENAGER: You literally just did.
20 D ADAEZE: Don't talk to your father like that.
21 D TEENAGER: Like what? Like I have an opinion?
22 A ¶ Greg turns in his seat.
23 A Adaeze's knuckles whiten.
24 D GREG: Samir. Look at me.
25 D SAMIR: No.
26 D GREG: Samir.
27 D SAMIR: You're not even driving!
* 28 A ¶ The rollers shriek.
* 29 A The van lurches.
30 A Adaeze slams the brake and the car wash stalls with a groan.
* 31 A Water drips.
32 A No one speaks.
33 D ADAEZE (low): Both of you. Out. Now.
34 A ¶ She unbuckles.
35 A Opens her door.
36 A Steps into the foam.

### SCENE s02377 | INT. WIRELESS ROOM - S.S. CALYPSO - NIGHT, 1923
Detected names (may be incomplete or contain aliases): LADY PHILIPPA ASHGROVE, AMBROSE TILLERY, CORNELIUS BLY, MADAME ZORKA DRAGOMIR, INSPECTOR HALVARD STROM
* 1 A ¶ A cramped brass-and-mahogany cabin lit by a green-shaded lamp.
* 2 A The telegraph key chatters.
* 3 A Beyond the porthole, a black sea.
4 A ¶ LADY PHILIPPA ASHGROVE, fifties, in a fur-collared evening gown, waits with gloved hands folded.
5 A At the desk, young AMBROSE TILLERY, the wireless operator, copies a message with a pencil.
6 A Behind her, MR. CORNELIUS BLY, sixty, a banker with a white moustache, stands very still.
7 A In the corner sits MADAME ZORKA DRAGOMIR, a fortune-teller with a velvet shawl, humming softly.
8 D AMBROSE: That's the last of it, my lady. "Meet at Southampton. Say nothing."
9 D PHILIPPA: Thank you, Ambrose. Cornelius, you may relax.
10 D BLY: I am perfectly relaxed.
11 D PHILIPPA: Of course you are.
12 D ZORKA (smiling): The sea is very calm tonight.
* 13 A ¶ The door opens.
14 A INSPECTOR HALVARD STROM, forties, in a damp greatcoat and bowler, steps inside, a pair of handcuffs dangling from one hand.
15 D STROM: Mr. Cornelius Bly. I have a warrant from Scotland Yard.
16 A ¶ Bly turns.
17 A Philippa's gloved hands do not move.
18 A Madame Zorka stops humming.
19 D PHILIPPA: I did say nothing.
20 D BLY: You said nothing was the plan.
21 D AMBROSE (whispering): Oh, dear.

### SCENE s02378 | INT. CONVERTED BOWLING ALLEY COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE KOWALCZYK, ATTORNEY SEUN ADEBAYO, ATTORNEY GRACE PELLETIER, UNKNOWN WITNESS, BAILIFF GUS, VARGA
* 1 A ¶ Lane six has been boarded over to serve as the well of the court.
* 2 A The bench is a ball return with a raised platform.
* 3 A Pins are painted on the wall behind the jury box.
4 A ¶ JUDGE KOWALCZYK, sixties, stocky, in robes over a polo shirt, taps a gavel made from a bowling pin.
5 A At the plaintiff's table, ATTORNEY SEUN ADEBAYO, thirties, stands with a legal pad.
6 A At the defence table, ATTORNEY GRACE PELLETIER, forties, fidgets with a pen.
7 A In the witness chair, an UNKNOWN WITNESS in a lab coat waits.
8 A By the door, BAILIFF GUS, twenties, eats sunflower seeds.
9 D ADEBAYO: Please state your name for the record.
10 D WITNESS: I am a forensic engineer.
11 D ADEBAYO: Your name.
12 D PELLETIER: Objection. Asked and not answered.
13 D KOWALCZYK: Overruled. Let her finish.
14 D WITNESS: Dr. Isolde Varga.
15 D ADEBAYO: Dr. Varga, did you inspect the lane that night?
16 D VARGA: I did. The oil pattern was uneven by almost four feet.
17 D PELLETIER: Objection, speculation.
18 D KOWALCZYK: It's her job, counsel. Sit down.
19 D PELLETIER: Your Honor-
20 D ADEBAYO: She measured it, Your Honor, she didn't guess.
21 D KOWALCZYK: I said sit down.
22 D GUS (muttering): Strike.
23 D KOWALCZYK: Bailiff!
24 D GUS: Sorry, sir. Habit.
25 D VARGA: May I continue?
26 D ADEBAYO: Please.
27 D PELLETIER: Objection!
28 D KOWALCZYK: Overruled. Overruled. All of it. Go.
29 D VARGA: The pattern was consistent with deliberate tampering.
* 30 A ¶ A silence.
31 A Pelletier drops her pen.
* 32 A It rolls across the floor and into the gutter.
33 D KOWALCZYK: Well. That's a spare.

### SCENE s02379 | INT. TASKBRIDGE SYNERGIES - FORTY-FIRST FLOOR BREAK ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): PRI, SUNDARAM, CLIVE HARTWELL-BANKS
* 1 A ¶ A windowless room where the fluorescent light has the colour and mercy of boiled milk.
* 2 A A single plant, plastic, in a pot nobody waters.
* 3 A The coffee machine sighs.
4 A PRIYANKA "PRI" SUNDARAM, thirties, in a cardigan pilled by meetings, stands at the sink.
5 A CLIVE HARTWELL-BANKS, fifties, regional vice president, pours the last of the decaf into a mug that reads WORLD'S OKAYEST BOSS.
6 D CLIVE: Pri. Priyanka. Pri-pri. Do you have a minute?
7 D PRI: I have a thirty-two-minute minute, Clive. It's on the calendar. You invited me to it.
8 D CLIVE: Did I? Brilliant. Then it's synergy.
9 D PRI: It's a meeting about a meeting.
10 D CLIVE: And the meeting about the meeting is about the meeting about the restructure, which, between you and me, is not really a restructure. It's a re-envisioning.
11 D PRI: Clive, I've been re-envisioned three times this year. I have a different desk, a different title and a different manager. Last Tuesday I was sent a lanyard that said INTERIM.
12 D CLIVE: And you wear it well.
13 D PRI: I wear it because the badge reader doesn't recognise the old one.
14 D CLIVE: Okay, Pri, I'm going to be honest with you. I'm hearing frustration.
15 D PRI: You're hearing me say I'm frustrated.
16 D CLIVE: Which is valid.
17 D PRI: Which is also not a solution.
18 D CLIVE: Pri, I'm going to say something and I want you to hear it as a gift. The company values you.
19 D PRI: The company eliminated my team on Friday.
20 D CLIVE: Valued! Past tense is still a tense.
21 D PRI (after a moment): Goodbye, Clive.
22 D CLIVE: Same time Thursday?

### SCENE s02380 | INT. WINTER FORGE - UNDER THE MOUNTAIN - NIGHT
Detected names (may be incomplete or contain aliases): SER ALDRIC VANE, BRODA STONEHEART, TIBB
* 1 A ¶ A cavern lit by one banked fire.
* 2 A Hammers hang on iron pegs.
* 3 A Frost grows in the corners, even here.
* 4 A Anvils stand in a half-circle like old gravestones.
5 A ¶ SER ALDRIC VANE, fifties, grey in the beard, in a cloak stiff with ice, stands very straight in the doorway.
6 A He has not removed his gloves.
7 A At the anvil, BRODA STONEHEART, a stout smith with soot on her cheeks, hammers a blade she does not look at.
8 A Beside the fire, a boy of ten, TIBB, feeds scraps of kindling into the embers with the care of a priest.
9 A Against the far wall, in a chair too large for her, LADY MERROWEN sits with her hands in her lap, her eyes closed, her breath making small clouds.
10 D BRODA: The sword's not ready.
11 D ALDRIC: I did not ask for the sword.
12 D BRODA: Everyone asks for the sword.
13 A ¶ He takes one step into the room.
* 14 A The fire flares, then settles.
15 A Tibb looks up at him and then, quickly, at the floor.
16 D ALDRIC: How long has she slept?
17 D BRODA: Since the snow came.
18 D ALDRIC: And the boy?
19 D BRODA: He sits with her. Feeds the fire. Doesn't speak.
20 A ¶ Aldric crosses to the chair.
21 A He kneels.
22 A He unclasps one glove and lays the bare hand against the Lady's cheek, and she does not stir.
23 A He holds it there far longer than courtesy allows.
24 A ¶ Broda sets down her hammer.
* 25 A The sound rings off the stone.
26 D BRODA [CONT'D]: You came a long way for a woman who won't wake.
27 D ALDRIC: I came to keep a promise.
28 D BRODA: To her?
29 A ¶ He draws the glove back on, finger by finger.
30 D ALDRIC: To the man who gave me the sword.
31 A ¶ Tibb reaches into the fire with his bare hand and lifts out a coal.
32 A It does not burn him.
33 A He holds it up in the palm of his hand, glowing, a small red sun.
34 A ¶ Broda looks at the coal.
35 A Looks at Aldric.
36 A Slowly, she lifts the blade from the anvil and points it at the door.
37 D BRODA [CONT'D]: Then you had better ask for the sword.

### SCENE s02381 | INT. RELAY STATION KESTREL - ORBITAL CORRIDOR - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): MIREILLE OSEI-TANAKA
* 1 A ¶ A narrow tube lined with cable trays and amber emergency strips.
* 2 A Frost on the viewport.
* 3 A Beyond it, the planet turns, enormous, blue-grey, indifferent.
4 A ¶ MIREILLE OSEI-TANAKA, thirties, in a thermal coverall, floats in the corridor with a handheld recorder clamped in her teeth.
5 A She pulls herself along a rail, one-handed, a tablet strapped to her forearm.
* 6 A ¶ The tablet blinks red: LIFE SUPPORT RESERVE 14 PERCENT.
7 A ¶ She stops.
8 A Takes the recorder from her mouth.
9 D MIREILLE: Log. Day sixty-one. Oxygen is the problem now. Not the comms, not the hull. Oxygen.
10 A ¶ She presses a key on the tablet.
11 A A recorded voice plays through the speaker, her own, crisp and unhurried.
12 D MIREILLE [V.O.] (recording): Day nine. Everything nominal. I've started a plant. I'm calling it Gerald.
13 A ¶ Mireille almost smiles.
14 A She pushes off toward the end of the corridor, drifting past a row of sealed hatches.
15 D MIREILLE [V.O., CONT'D] (recording): Day twenty-two. Still nominal. Gerald is dying. I think I overwatered him.
* 16 A ¶ A hatch light flickers.
17 A She grabs the frame, braces, and keys a code.
* 18 A The hatch opens on a dark hydroponics bay, lit only by one withered stalk in a clear tube.
19 D MIREILLE (to the plant): Hello, old friend.
* 20 A ¶ The tablet chirps.
* 21 A Another recording plays, closer, rougher.
22 D MIREILLE [V.O., CONT'D] (recording): Day fifty. If anyone is hearing this, I have sixteen days of air and a very sick shrub. Please send a ship. Please send a ship that knows how to fix a shrub.
23 A ¶ She floats to the tube.
24 A Touches the glass.
25 D MIREILLE: Sixty-one.
26 A ¶ She twists a valve.
* 27 A A pale mist hisses into the tube.
* 28 A The stalk shivers, and a single bud, no bigger than a grain of rice, opens.
29 A ¶ Mireille stares at it.
30 A Then at the tablet.
31 A Then back at the bud, and without a word she begins pulling cables free from the wall panel, humming under her breath, working faster.
32 D MIREILLE [V.O., CONT'D] (recording): Day sixty-one. Gerald lives.

### SCENE s02382 | INT. WIRELESS HUT - ATLANTIC COAST - NIGHT, 1941
Detected names (may be incomplete or contain aliases): CORPORAL EMMELINE ROSKILLY
* 1 A ¶ A low shed of sandbags and corrugated iron.
* 2 A A single oil lamp swings from a hook.
* 3 A The sea batters the rocks outside.
* 4 A On a deal table, a wire recorder spins slowly beside a heavy radio set with a brass key.
5 A ¶ CORPORAL EMMELINE ROSKILLY, twenties, in a greatcoat and a woollen cap, sits upright on a crate.
6 A A headset is clamped over one ear.
7 A Her pencil moves steadily over a message pad.
8 A She has not blinked in some time.
* 9 A ¶ The radio crackles.
* 10 A Over it, a steady drone: enemy bombers, far off, growing nearer.
11 D EMMELINE (to herself): Steady, girl.
12 A ¶ She taps the key.
13 A Pauses.
14 A Taps again.
* 15 A The recorder spins, catching her.
16 D EMMELINE [V.O.] (recording): Station Albatross to all vessels. Enemy aircraft sighted bearing two-seven-zero. Repeat, two-seven-zero. Take cover.
* 17 A ¶ The lamp swings.
* 18 A A distant thump shakes dust from the rafters.
19 A She does not look up.
20 A She taps the key again.
21 D EMMELINE [CONT'D] (into mouthpiece): Albatross to convoy. Confirm receipt.
* 22 A ¶ Nothing.
* 23 A Static.
* 24 A The drone rises to a roar.
25 A ¶ She reaches for the recorder and rewinds it a few inches.
26 A Plays it back.
* 27 A Her own voice again, steady.
28 D EMMELINE [V.O., CONT'D] (recording): Take cover.
* 29 A ¶ Another thump, closer.
* 30 A The lamp goes out.
31 A In the dark, her hands keep working the key, tap, tap, tap, as the walls shake around her.
32 D EMMELINE [CONT'D] (whispering): Confirm receipt. Confirm receipt. Confirm...
* 33 A ¶ A ragged voice breaks through the static, faint, hers alone in the room, played from the spinning spool.
34 D EMMELINE [V.O., CONT'D] (recording): Take cover.
35 A ¶ She keeps tapping.

### SCENE s02383 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): NOOR FARHAT, LUCAS BRENNER, MARSHAL DELACROIX-ITO, MAN IN GREY SUIT, GREY SUIT, VOSS
* 1 A ¶ Brushed steel.
* 2 A A brass plate reads MAX 8.
* 3 A The display above the door shows 4, then goes dark.
* 4 A The car jolts and stops.
5 A ¶ NOOR FARHAT, thirties, plaintiff's counsel, grips a rolling briefcase.
6 A LUCAS BRENNER, forties, defence counsel, checks his watch.
7 A U.S. MARSHAL DELACROIX-ITO, fifties, heavyset, stands against the back wall with arms crossed, and beside him a MAN IN A GREY SUIT, sixty, holds a banker's box against his chest like a shield.
* 8 A ¶ Emergency light.
* 9 A Hum.
* 10 A Silence.
11 D NOOR: Nobody panic.
12 D LUCAS: Nobody's panicking.
13 D DELACROIX-ITO: I'm calling it in.
14 A ¶ He thumbs the call button.
* 15 A Static from the speaker.
16 D LUCAS: We have a nine-thirty.
17 D NOOR: We have a nine-thirty. You have a motion to suppress.
18 D LUCAS: Which you'll lose.
19 D NOOR: Which I won't.
20 A ¶ The grey-suited man shifts the box.
21 A Noor notices.
22 A Lucas notices.
23 A Delacroix-Ito does not, because he is listening to the speaker.
24 D NOOR [CONT'D] (to the man): Who are you?
25 D MAN IN GREY SUIT: Records clerk. Sub-basement.
26 D LUCAS: At a nine-thirty hearing?
27 D MAN IN GREY SUIT: I was told to bring this up.
28 A ¶ Lucas steps toward him.
29 A Noor steps with him.
30 A Delacroix-Ito peels off the wall, one hand drifting to his belt, and the three of them close in around the box as the light flickers and the man backs into a corner with nowhere left to go.
31 D LUCAS: Open it.
32 D MAN IN GREY SUIT: I can't.
33 D NOOR: Open it.
34 D MAN IN GREY SUIT: Marshal-
35 D DELACROIX-ITO: Mister Voss, isn't it? Ernest Voss?
36 D VOSS (quietly): Yes.
37 D DELACROIX-ITO: Open the box, Ernest.
38 A ¶ Voss lifts the lid.
* 39 A Inside, a stack of yellowed folders and a small revolver, wrapped in a handkerchief.
* 40 A ¶ The speaker crackles with something about maintenance.
41 A Nobody listens.
42 D NOOR: That's the evidence from the Hendricks file.
43 D LUCAS: That was destroyed.
44 D VOSS: So was I.
* 45 A ¶ The elevator lurches.
* 46 A The display flickers to 4.
47 A The door begins to open on a hallway full of lawyers, and Voss, holding the box, looks at the faces waiting there and does not step out.

### SCENE s02384 | INT. ROLLER RINK - 2 A.M.
Detected names (may be incomplete or contain aliases): DANI, KOFI, MEI, RAFA, LAZLO, DJ
* 1 A ¶ Disco ball dead.
* 2 A Floor lights low.
* 3 A Speakers hiss.
4 A ¶ DANI, seventeen, laces her skates on the carpeted bench.
5 A Beside her, KOFI sits with his helmet in his lap.
6 A MEI leans on the rail, chewing a straw.
7 A RAFA, the baby of the group, sits cross-legged on the floor.
8 A ¶ She stands.
9 A Wobbles.
10 A He catches her elbow.
11 D DANI: Don't.
12 D KOFI: I'm not.
13 A ¶ He lets go.
14 A She rolls out onto the maple.
15 A Slow.
16 A Steady.
17 A Then faster.
18 D MEI (to the others): We're not supposed to be here.
19 D RAFA: The door was open.
20 D MEI: Doors open when you break them.
21 A ¶ Dani circles the rink and spins.
22 A Her arms go wide.
* 23 A For a moment she's lit by the red EXIT sign alone.
* 24 A ¶ A light snaps on in the booth.
25 A A hand slams a switch.
* 26 A The music blares: a polka.
27 A ¶ MR. LAZLO, seventies, in a bathrobe and a rink-guard jacket, lumbers out of the DJ booth.
28 A He holds a bat.
29 D LAZLO: Who's closing this place?
30 D DANI: Nobody, sir.
31 D LAZLO: Then who's skating?
32 A ¶ Kofi raises a hand.
33 A Mei raises a hand.
34 A Rafa, after a beat, raises both.
35 D LAZLO [CONT'D] (lowering the bat): Eight dollars a head. Cash.

### SCENE s02385 | INT. PRAIRIE CURLING CLUB - SHEET THREE - EVENING
Detected names (may be incomplete or contain aliases): COACH BERNADETTE FONTAINE, SKIP YOSHI HARADA, RUKMINI DEVADASAN
* 1 A ¶ A long strip of pebbled ice under hard white light.
* 2 A Brooms stacked against the boards like rifles.
* 3 A The air smells of cold coffee and wet wool.
* 4 A Red numbers on the scoreboard: 6-6, final end.
5 A ¶ COACH BERNADETTE FONTAINE, sixties, in a quilted vest and a toque with a pom-pom, stands behind the hog line with a clipboard she does not look at.
6 A SKIP YOSHI HARADA, forties, crouches in the house, holding his broom like a staff and watching the stone's path.
7 A RUKMINI DEVADASAN, nineteen, the rookie, kneels in the hack with the last stone and breathes through her nose.
8 D FONTAINE: Ice is keen.
9 D HARADA (from the house): Keen and straight. Give it a touch of burn.
10 D FONTAINE: She knows.
11 A ¶ Rukmini does not answer.
12 A She tightens her grip on the handle, adjusts her slider, and glances once at the brass rim of the house.
* 13 A Her breath fogs.
14 A Her hands do not shake.
15 D HARADA: Weight is ten.
16 D FONTAINE: Weight is ten and not a hair more.
17 A ¶ Rukmini pushes off.
* 18 A The stone slides, a granite hum on pebble.
19 A Harada steps aside.
20 A Fontaine takes one slow step toward the boards, then stops, because she has promised herself not to move.
* 21 A ¶ The stone curls.
22 A The sweepers, two grey figures in the distance, drop to their knees and scrub.
23 D HARADA: Hurry. Hurry hard.
24 A ¶ Fontaine closes her clipboard.
25 A Rukmini rises out of her slide, silent, and watches the rock inch toward the button.
* 26 A ¶ It stops.
* 27 A Dead centre.
28 A ¶ Nobody cheers.
29 A Harada puts a hand on his hat.
30 A Fontaine nods once, then looks at Rukmini, and holds up two fingers.
31 D FONTAINE: Two.

### SCENE s02386 | EXT. PETTING ZOO - BIRTHDAY PARTY - DAY
Detected names (may be incomplete or contain aliases): HETTIE LOCKWOOD, BOYD LOCKWOOD, STRANGER, FELIX
* 1 A ¶ Hay bales, a plywood barn, a paddock of goats in party hats.
* 2 A Balloons bob from the fence.
3 A HETTIE LOCKWOOD, eight, stands on a stool at the picnic table, chin on her fist, watching a goat eat a paper plate, while her father BOYD LOCKWOOD, forties, hurries from the cake table with a plastic knife and a stack of napkins, calling out to nobody that the candles need relighting, and trips over a feed bucket, and recovers, and laughs at himself a little too loudly.
4 D HETTIE: Dad, he ate the plate.
5 D BOYD: He's a goat, honey. It's what they do.
6 D HETTIE: Mom said no one could come who we didn't invite.
7 D BOYD: Mom isn't here.
8 A ¶ He scrapes the cake into a pile and starts sticking candles in it.
9 A Hettie looks past him, toward the gate, and goes very still.
10 A ¶ A STRANGER in a rumpled linen suit and sunglasses stands at the entrance with a gift bag, scanning the crowd.
11 A He lifts the glasses.
12 A Waves at Hettie like he's known her all her life.
13 D STRANGER: Hey, kiddo!
14 D BOYD (turning): Can I help you?
15 D STRANGER: It's Felix. Uncle Felix. Your brother, Boyd. Hello?
16 A ¶ Boyd stops with a candle in his fist.
* 17 A The goat bleats.
18 A Hettie hops off the stool and runs toward the gate, and Boyd, watching her go, drops the candle into the cake.
19 D BOYD: Felix.
20 D FELIX: I brought a present.
21 A ¶ Hettie hugs his leg.
22 A Boyd stares at his brother's face for a long time, the whole party going quiet behind him, and then Boyd laughs again, but this time it cracks halfway.
23 D BOYD: You son of a-
24 D HETTIE: Dad! Language!

### SCENE s02387 | INT. MEAT-PACKING COLD STORAGE - NIGHT
Detected names (may be incomplete or contain aliases): ROCCO DELAVEGA, IMANI BROOKSHIRE-ADE, DUTCH PELLEGRINO
* 1 A ¶ Steel racks.
* 2 A Hanging sides of beef in plastic.
* 3 A Breath clouds.
* 4 A A single caged bulb.
5 A ¶ ROCCO DELAVEGA, fifties, in a wool overcoat, stands with his back to a swinging carcass.
6 A IMANI BROOKSHIRE-ADE, thirties, in a puffy parka, holds a duffel bag.
7 A DUTCH PELLEGRINO, forties, scarf over his mouth, keeps one hand in his pocket.
8 D ROCCO: Count it.
9 D IMANI: I counted it.
10 D ROCCO: Count it again.
11 A ¶ She unzips the bag.
* 12 A Stacks of bills, rubber-banded.
13 A She thumbs one.
14 A Dutch watches her hands.
15 D DUTCH: Light.
16 D IMANI: It's not light.
17 D DUTCH: It's light.
18 D ROCCO (quiet): Is it?
19 A ¶ Imani shoves the bag across the floor.
20 A Dutch pulls his hand from his pocket.
* 21 A A pistol.
22 A Imani's own gun clears the parka at the same instant.
23 A Rocco steps between them, palms up, and all three freeze.
24 D ROCCO [CONT'D]: Put them down.
25 D IMANI: You first.
26 D DUTCH: You first.
27 D IMANI: He's lying.
28 D DUTCH: She's lying.
29 A ¶ Rocco lowers his hands and, with a sigh, takes a step back into the swinging beef.
30 A He hits it with his shoulder.
* 31 A The carcass swings out, across the frame, between Imani and Dutch.
32 A ¶ They lunge.
* 33 A The pistols go off together, twice.
* 34 A Meat jerks on its hook.
35 A Rocco drops flat.
36 A Imani rolls behind a rack.
37 A Dutch scrambles for the bag, clawing at the zipper.
38 D DUTCH [CONT'D] (muttering): Come on, come on...
* 39 A ¶ Silence.
* 40 A A drip from the ceiling.
* 41 A Three people breathing hard in the cold.
42 D ROCCO (from the floor): Anyone hit?
43 D IMANI (from behind the rack): No.
44 D DUTCH: No.
45 D ROCCO: Then count it again.

### SCENE s02388 | INT. HOUSEBOAT GALLEY - THANKSGIVING - DUSK
Detected names (may be incomplete or contain aliases): GRAN ODALYS BEAUCHAMP, KEZIAH, PAVEL, EZRA
* 1 A ¶ A narrow kitchen the length of a railway carriage, every surface gleaming with small domestic order.
* 2 A Condensation clouds the porthole.
* 3 A Outside, lake water slaps the hull in the failing light.
* 4 A A turkey rests under foil on the counter, steaming faintly.
5 A ¶ GRAN ODALYS BEAUCHAMP, seventy, sits at the end of the fold-down table with a crocheted shawl across her knees.
6 A Her daughter KEZIAH, forties, moves between stove and sink with the quick, precise gestures of someone who has done this a hundred times.
7 A Her husband PAVEL, forties, stands in the doorway with a bottle of wine, unsure where to put it, and at the table's other end EZRA, twelve, folds a paper napkin into a series of increasingly elaborate boats.
8 A ¶ She says nothing.
9 A He says nothing.
* 10 A The kettle begins to whistle.
11 D KEZIAH (to the room): Everyone sit. It's almost ready.
12 D PAVEL: I'll pour.
13 D KEZIAH: You'll pour after grace.
14 D PAVEL: I can pour before grace.
15 A ¶ She shoots him a look.
16 A He sets the bottle down and sits.
* 17 A Ezra's boat tips on its side.
18 A He rights it.
19 D GRAN ODALYS: Ezra, darling. Come sit by me.
20 D EZRA: I'm fine here.
21 D GRAN ODALYS: Come sit by me.
22 A ¶ He slides along the bench.
23 A She pats his knee.
24 A For a moment, nobody breathes, and the water laps and the kettle shrieks and Keziah moves it off the flame without looking.
25 D KEZIAH (muttering to herself): Don't. Don't. Don't.
26 A ¶ She carries the turkey to the table, slides it into place, and unwraps the foil.
* 27 A Steam rises over their faces.
28 A Pavel clears his throat.
29 D PAVEL: It looks wonderful.
30 D GRAN ODALYS: It looks like the one from nineteen eighty-eight.
31 D KEZIAH: Mother.
32 D GRAN ODALYS: I'm saying it's lovely.
33 A ¶ She lifts her glass of water.
34 A Looks at each of them in turn.
35 A Her gaze stops on Keziah.
36 D GRAN ODALYS [CONT'D] (to everyone): I have something to tell you all.
37 A ¶ Ezra stops folding.
38 A Pavel sits very still.
39 A Keziah grips the carving knife.
40 D GRAN ODALYS [CONT'D] (to Keziah): I sold the house.
41 D KEZIAH (a whisper): Mother.
42 D GRAN ODALYS: And I'm moving onto this boat.
* 43 A ¶ Silence.
* 44 A The water slaps.
* 45 A The turkey steams.
46 A Ezra lets go of the napkin and it unfolds on the table.

### SCENE s02389 | INT. DECOMMISSIONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): VERA KOSTOPOULOS, MAN, ARJUN, SOUND, HALE
* 1 A ¶ A round chamber of tiered seats under a cracked dome.
* 2 A A projector in the centre, shrouded in a tarp.
* 3 A Rain falls through a hole in the ceiling onto the floor and runs toward a drain.
4 A ¶ VERA KOSTOPOULOS, forties, in a black raincoat, stands at the foot of the aisle with a flashlight.
5 A She sweeps it across the seats.
6 D VERA: Anyone here?
* 7 A ¶ Nothing.
8 A She takes a step.
* 9 A Her heel clicks on tile.
10 A ¶ A MAN steps out from behind the projector, hands visible.
11 A Thirties, drenched, a satchel across his chest.
12 D MAN: You're late.
13 D VERA: You didn't say a time.
14 D MAN: I said midnight.
15 D VERA: It's midnight.
16 D MAN: It's twelve-oh-four.
17 A ¶ She lowers the flashlight.
18 A He doesn't relax.
19 D VERA: You have it?
20 D MAN: You have the money?
21 D VERA: I have a favour.
22 D MAN: I don't take favours.
23 D VERA (sighing): What's your name?
24 D MAN: You don't need my name.
25 D VERA: I need something to call you.
26 A ¶ He glances at the dome, at the rain, at the dark gaps between seats.
27 D MAN: Arjun.
28 D VERA: Arjun.
29 D ARJUN: Don't say it twice. It makes it real.
30 A ¶ She nods.
31 A He opens the satchel, pulls out a thick manila envelope, and holds it up like a flag.
32 A She reaches.
33 A He pulls it back.
34 D ARJUN [CONT'D]: First tell me who sent you.
35 D VERA: You know who.
36 D ARJUN: Say it.
37 D VERA: Hale.
38 D ARJUN (muttering): Hale. God.
* 39 A ¶ A SOUND from the upper tier: a scrape.
40 A Both of them go still.
41 A Vera lifts the flashlight.
* 42 A The beam finds a seat, empty.
* 43 A Another.
* 44 A Empty.
45 A Then a figure on the highest row, sitting calmly with a pistol on his lap.
46 A ¶ HALE, fifties, in a camel coat, soft-spoken, says nothing.
47 D ARJUN [CONT'D] (to Vera): You brought him.
48 D VERA: I didn't.
49 D HALE (calling down): She didn't.
50 A ¶ He stands.
51 A Descends one step at a time, the gun held loosely, the way a man holds a cup of tea.
52 D HALE [CONT'D] (to the room): I do apologise for the theatre. I always did love a planetarium.
53 D ARJUN: Vera, run.
54 D VERA: There's nowhere to run.
55 D HALE: Quite right.
56 A ¶ He reaches the aisle.
57 A Arjun clutches the satchel.
58 A Vera sets down the flashlight, slowly, and the beam rolls across the floor and lights the three of them from below.
59 D HALE [CONT'D] (gently): The envelope, Arjun.
60 A ¶ Arjun hesitates.
61 A Then tosses it.
* 62 A It slaps on the tiles at Hale's feet.
63 A He picks it up.
64 A Opens it.
65 A Looks inside.
* 66 A ¶ It is empty.
67 D HALE [CONT'D] (still gentle): Oh, dear.
68 D ARJUN (small): I burned it.
69 D HALE: When?
70 D ARJUN: Tonight. Before I came.
71 A ¶ Hale laughs, softly, and aims the gun at Arjun's chest.
72 A Vera moves, fast, and slams the flashlight into his wrist.
* 73 A The shot cracks off the dome.
* 74 A Rain hisses on the floor.
75 A ¶ Vera and Hale grapple.
* 76 A The gun skitters under a seat.
77 A Arjun scrambles after it.
78 D VERA: Arjun! Leave it!
79 D ARJUN: I've got it!
80 D HALE: Don't.
81 A ¶ Arjun rises, gun in both hands, shaking.
82 A He aims at Hale.
83 A Hale raises his palms.
* 84 A The rain falls between them.
85 D ARJUN (to himself): Breathe. Just breathe.
86 D VERA: Arjun. Look at me. Put it down.
87 A ¶ He lowers it an inch.
88 A Another.
* 89 A The dome groans.
90 A A chunk of plaster falls and shatters beside the projector, and when they all look up, Hale is gone.
91 D VERA [CONT'D] (to the empty room): Hale!
* 92 A ¶ Only the rain answers.

### SCENE s02390 | INT. NATURAL HISTORY TAXIDERMY ANNEX - AFTER HOURS
Detected names (may be incomplete or contain aliases): LOUISA TRAN-WOLCOTT, DELIVERY MAN, PIKE
* 1 A ¶ A long shelved room of glass eyes and stuffed things.
* 2 A A moose head presides over a card table.
* 3 A Dust floats in the beam of a desk lamp.
4 A ¶ LOUISA TRAN-WOLCOTT, fifties, in cardigan and reading glasses, sorts pencils at a desk.
5 A She is the night curator, and she is very bored.
6 A ¶ A figure in a delivery uniform enters through the loading door with a hand truck and a crate.
7 A It is a MAN, thirties, with a clipboard.
8 D DELIVERY MAN: Package for Mr. Abernathy.
9 D LOUISA: Abernathy retired in March.
10 D DELIVERY MAN: Then I'm in the wrong place.
11 D LOUISA: Looks like it.
12 A ¶ He doesn't leave.
13 A He pulls the crate toward the moose.
14 A Louisa watches him over her glasses.
15 D LOUISA [CONT'D]: Is that a bird?
16 D DELIVERY MAN: It's an owl.
17 D LOUISA: Oh. Which?
18 D DELIVERY MAN: Barn. Dead.
19 D LOUISA: They're all dead in here, dear.
20 A ¶ He smiles, finally.
21 A Sets the clipboard down.
22 A A SECOND MAN, bulky, steps through the loading door, unnoticed by Louisa, and begins loosening the screws on a display case.
23 D LOUISA [CONT'D] (to the Delivery Man): You'll have to sign in. There's a ledger.
24 D DELIVERY MAN: Sure. Name?
25 D LOUISA: Mine?
26 D DELIVERY MAN: Yours.
27 D LOUISA: Louisa.
28 D DELIVERY MAN: Louisa. I'm Pike.
29 D PIKE (to the Second Man): She's Louisa.
30 D SECOND MAN: Thanks, Pike.
31 A ¶ Louisa turns.
32 A The Second Man holds up a stuffed fox in one hand and a velvet bag in the other.
33 D LOUISA: That's the Kensington fox.
34 D SECOND MAN: Is it?
35 D LOUISA: It's worth nothing.
36 D SECOND MAN: Then you won't mind.
37 D LOUISA: Please don't.
38 D PIKE: Please don't.
39 A ¶ The Second Man pauses.
* 40 A The fox's glass eye catches the lamp.
41 D SECOND MAN (to Pike): You said she'd be asleep.
42 D PIKE: She was supposed to be.
43 D LOUISA: I never sleep. I'm a curator.
44 A ¶ She picks up her pencils, one by one, and sets them in a mug.
45 D LOUISA [CONT'D]: Take the fox. Leave the moose. He's been here longer than I have.
46 A ¶ The Second Man nods.
47 A Pike nods.
48 A They leave with the fox and the owl crate, and the moose watches them go.

### SCENE s02391 | INT. BAKERY TASTING ROOM - DAY
Detected names (may be incomplete or contain aliases): GABRIEL ROSSETTI-OKEKE, THEO ANDRZEJEWSKI, PASTRY CHEF MARGUERITE DUVALIER
* 1 A ¶ White tablecloths, little forks, six slices of cake on six small plates.
* 2 A A chandelier made of whisks.
3 A ¶ GABRIEL ROSSETTI-OKEKE, thirties, sits very straight beside his fiance THEO ANDRZEJEWSKI, thirties, who is already eating.
4 A Across from them, PASTRY CHEF MARGUERITE DUVALIER, fifties, stands with her hands folded, wearing the placid smile of someone who has seen every possible argument over frosting.
5 A He lifts his fork, takes a bite of the lemon, closes his eyes, and sets the fork down with great care, and he turns to the other man, and he whispers something that makes him laugh with his mouth full, and he waves a hand, spraying crumbs, and then he points the fork at the chef.
6 D THEO: This is the one.
7 D GABRIEL: We haven't tried the others.
8 D THEO: We don't need to.
9 D MARGUERITE: Take your time. Some couples spend hours.
10 D GABRIEL: We're not some couples.
11 D THEO: We have a flight at four.
12 D MARGUERITE: Of course.
13 A ¶ He pushes the plate aside, reaches for the vanilla, tastes it, and nods, and the other one nods back, and they look at each other, and each of them lifts a fork and feeds the other a bite of the third slice, solemn as a communion.
14 D GABRIEL: Oh.
15 D THEO: Oh.
16 D MARGUERITE (beaming): That's the almond.
17 D GABRIEL: We'll take the almond.
18 D THEO: And the lemon on the top tier.
19 D MARGUERITE: Lovely. I'll draw up the order.
20 A ¶ She disappears into the kitchen.
* 21 A The room is quiet.
* 22 A A clock ticks.
23 A Theo slides his hand across the tablecloth and takes Gabriel's.
24 D THEO [CONT'D]: Can I tell you something?
25 D GABRIEL: Always.
26 D THEO: I didn't want the cake.
27 D GABRIEL: What?
28 D THEO: I wanted the excuse to sit here and watch you pick.
29 A ¶ Gabriel stares at him.
30 A Then, with enormous dignity, he picks up the lemon slice and presses it into his own face.
* 31 A ¶ The kitchen door swings open.
32 A Marguerite stands there with a clipboard and takes it in without blinking.
33 D MARGUERITE: Shall I note "fruit-forward"?
34 D GABRIEL (through lemon): Please.

### SCENE s02392 | INT. FATHER'S TACKLE SHOP - EVENING
Detected names (may be incomplete or contain aliases): CALLIE FENWICK-NAKAMURA
* 1 A ¶ Rows of rods in wall racks, tins of hooks, a stuffed pike on a plaque.
* 2 A A bell above the door has gone still.
* 3 A The shop smells of old rope and kerosene.
4 A ¶ CALLIE FENWICK-NAKAMURA, forties, in a canvas jacket, stands at the counter with a cardboard box.
5 A She is packing a life's work into it.
* 6 A A pair of reading glasses.
* 7 A A thermos.
* 8 A A ledger.
9 A She works slowly, as if the objects might break if she hurried.
* 10 A ¶ On the wall, a landline phone with a long curled cord.
* 11 A Beside it, an answering machine blinks 1.
12 A ¶ She stops.
13 A Looks at the machine.
14 A Looks away.
15 A Picks up the thermos.
16 A Sets it down.
17 A Her hand drifts to the button and then retreats.
18 A ¶ She goes to the window, flips the sign from OPEN to CLOSED, and rests her forehead on the cold glass.
* 19 A ¶ The machine clicks.
* 20 A A tape whirs.
21 D CALLIE [V.O.] (recorded greeting): Hi, you've reached Fenwick's Tackle. We're out on the water. Leave a message and we'll call you back when the fish quit biting.
* 22 A ¶ A BEEP.
23 A ¶ She turns around.
24 A Slowly.
25 A Crosses to the counter.
26 A Presses the button again.
27 D CALLIE [V.O., CONT'D] (recorded greeting): Hi, you've reached Fenwick's Tackle...
28 A ¶ She presses stop.
* 29 A The tape clicks.
30 A She stands with her palm flat on the machine, the way one touches a sleeping animal.
31 A ¶ Then, briskly, she wraps the cord around her wrist and pulls the phone off the wall.
* 32 A A cloud of plaster dust drifts down.
33 A She sets the phone in the box.
34 A Folds the flaps.
35 A Tapes them shut.
* 36 A ¶ The bell above the door rings.
37 A She does not look up.
38 A She reaches for the stuffed pike on its plaque and takes it down, runs a finger along its glass eye, and, to the empty shop, in a voice almost too quiet to hear:
39 D CALLIE (recorded greeting): We'll call you back.
40 A ¶ She tucks the pike under her arm.
41 A Picks up the box.
42 A Turns off the light.

### SCENE s02393 | INT. FERRY TERMINAL WAITING ROOM - IMPROVISED CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): SOLVEIG ABIODUN, OLD MAN, NURSE PRAKASH IYENGAR, PARAMEDIC LUCIA FERREIRA-HOLT
* 1 A ¶ A blizzard rattles the windows.
* 2 A Rows of molded plastic chairs have been pushed aside to make room for six camp cots.
* 3 A A vending machine glows in the corner.
* 4 A Blankets, IV poles borrowed from a stalled ambulance, a whiteboard on which someone has written TRIAGE in red marker.
5 A ¶ DR. SOLVEIG ABIODUN, forties, in a parka over green scrubs, kneels beside a cot where an OLD MAN lies grey-faced under three blankets.
6 A Behind her, NURSE PRAKASH IYENGAR, thirties, tapes a gauze pad to a young woman's arm.
7 A At the doorway, PARAMEDIC LUCIA FERREIRA-HOLT, twenties, stamps snow from her boots and drops an equipment bag.
8 D SOLVEIG (to the room): I need quiet. All of you. Quiet.
* 9 A ¶ The room hushes.
* 10 A Wind howls.
* 11 A A vending machine hums.
12 D LUCIA: Road's closed. Plow can't get through before dawn.
13 D SOLVEIG: How long is that?
14 D LUCIA: Nine hours. Maybe ten.
15 D SOLVEIG (to herself): Ten.
16 D PRAKASH: Doctor, I'm out of saline.
17 D SOLVEIG: How many bags?
18 D PRAKASH: Two.
19 D SOLVEIG: Use one on him. Save the last.
20 D PRAKASH: For?
21 D SOLVEIG: For whoever's worse.
22 A ¶ She stands.
* 23 A Her knees crack.
24 A She crosses the room to the whiteboard and writes a number beside the first name.
25 D SOLVEIG [CONT'D] (to Lucia): Pressure?
26 D LUCIA: Ninety over fifty.
27 D SOLVEIG: Pulse?
28 D LUCIA: One-thirty.
29 D SOLVEIG: That's not a stable man.
30 D LUCIA: He was fine an hour ago.
31 D SOLVEIG: They always are.
32 D PRAKASH (low, to Solveig): Doctor, there's something you should see.
33 A ¶ She follows him to the corner cot.
34 A The young woman Prakash was tending lifts her sleeve.
* 35 A Under the gauze, the skin is bruised black from elbow to wrist.
36 D SOLVEIG: How long has she been like this?
37 D PRAKASH: She says since the bus.
38 D SOLVEIG: What bus?
39 D LUCIA (from across the room): The one that skidded on the bridge. She walked here.
40 D SOLVEIG: She walked here on that arm?
41 D LUCIA: Four miles.
42 D SOLVEIG (shaking her head): Everyone in this room is lying about how bad it is.
43 D PRAKASH: Including you.
44 D SOLVEIG: Including me.
* 45 A ¶ The lights flicker.
46 A Everyone looks up.
* 47 A The vending machine goes dark.
48 A A groan from the old man's cot.
49 A Lucia runs to him.
50 A Solveig stays where she is, watching the ceiling lights hum back to life.
51 D SOLVEIG [CONT'D] (to the whole room): Nobody panic. We have generators. We have blankets. We have each other, and I know that sounds like a poster.
* 52 A ¶ A weak laugh from one of the cots.
53 D SOLVEIG [CONT'D] (quiet, to Prakash): Get me the last bag.
54 D PRAKASH: For her?
55 D SOLVEIG: For him.
56 D LUCIA (calling): Doctor! His pressure's dropping!
57 A ¶ Solveig is already moving.

### SCENE s02394 | INT. SUPREME COURT ANTEROOM - NIGHT
Detected names (may be incomplete or contain aliases): ATTORNEY JULIAN ASHWORTH-BELLAMY, JUDGE PRENTISS
* 1 A ¶ A tall mahogany room lined with law reports.
* 2 A A green banker's lamp.
* 3 A A black rotary telephone on a long cord.
4 A ¶ ATTORNEY JULIAN ASHWORTH-BELLAMY, fifties, in shirtsleeves, paces with the receiver at his ear.
5 A His tie is loosened, his collar open.
6 D JULIAN: Judge, with respect, the petition was filed before the deadline.
7 D JUDGE PRENTISS [V.O.] (over phone): It was filed at 12:01, Mr. Ashworth-Bellamy.
8 D JULIAN: By a clock that was running two minutes slow.
9 D JUDGE PRENTISS [V.O.]: Then I'm afraid your clock is the court's problem no longer.
10 A ¶ Julian stops pacing.
11 A He sets the lamp straight with one finger.
12 A Breathes.
13 D JULIAN: Your Honor. A man's life is at stake.
14 D JUDGE PRENTISS [V.O.]: And I've read every page of it.
15 D JULIAN: Then you know.
16 D JUDGE PRENTISS [V.O.]: I know the rules.
17 D JULIAN (rising): To hell with the rules. He's going to die in six hours for a crime he did not commit!
* 18 A ¶ A pause on the line.
19 A Julian slams his palm on the desk.
* 20 A The lamp rattles.
21 D JUDGE PRENTISS [V.O.] (quietly): Then I suggest you spend the next six hours more wisely than shouting at me.
* 22 A ¶ Click.
* 23 A Dial tone.
24 A Julian stands in the lamplight, the receiver still against his ear, as the hum fills the room.

### SCENE s02395 | INT. LIGHTHOUSE KEEPER'S COTTAGE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR WILHELMINA CROSS, YOUNG MAN, TOBIAS
* 1 A ¶ A pot of tea between them on a scarred table.
* 2 A Oil lamp.
* 3 A Rain on the glass.
4 A ¶ INSPECTOR WILHELMINA CROSS, fifties, sits with her coat still on.
5 A Across from her, a YOUNG MAN in a fisherman's jersey, hands round his cup.
6 D CROSS: You said you were alone that night.
7 D YOUNG MAN: I was.
8 D CROSS: The log says three lamps were lit.
9 D YOUNG MAN: I lit one.
10 D CROSS: Then who lit the other two?
11 D YOUNG MAN: The wind, maybe.
12 D CROSS: Lamps don't catch on wind.
13 D YOUNG MAN: Then I don't know.
14 D CROSS: Mr. Penhallow. I've been doing this a long time. In my experience, a man who says "I don't know" three times in a row knows exactly.
15 D YOUNG MAN: I'm not Penhallow.
16 D CROSS: No?
17 D YOUNG MAN: Penhallow's my uncle. He's the keeper. I'm Tobias. I came up on the supply boat on Tuesday.
18 D CROSS (after a long pause): Tobias.
19 D TOBIAS: Yes.
20 D CROSS: Then where is your uncle, Tobias?
21 D TOBIAS: Out on the rocks. He goes every night. To watch for ships.
22 D CROSS: There are no ships tonight.
23 D TOBIAS: He doesn't believe that.
24 D CROSS: And the third lamp?
25 D TOBIAS: That's for the ones who don't come back.
* 26 A ¶ A beat.
* 27 A Rain.
* 28 A The kettle ticks.
29 D CROSS: Tobias. I think you should tell me everything.

### SCENE s02396 | INT. COVERED BRIDGE - STALLED STAGECOACH - DAY
Detected names (may be incomplete or contain aliases): SHERIFF AMOS TULL, CORDELIA RUSK, DEPUTY WENDELL AUBREY, REVEREND IGNATIUS MBEKI
* 1 A ¶ Timbers creak overhead.
* 2 A A river roars beneath.
* 3 A The coach sits dead centre, one wheel jammed in a gap in the planking, horses stamping and blowing at the near end.
4 A ¶ SHERIFF AMOS TULL, fifties, a deep-lined face under a flat hat, stands at the coach door with a shotgun cradled in the crook of his arm.
5 A Across the bridge from him, CORDELIA RUSK, thirties, in a black duster, waits on a grey mare with a rifle across her pommel.
6 A Between them, in the coach window, DEPUTY WENDELL AUBREY, twenty, sweats through his collar.
7 A Beside the wheel, REVEREND IGNATIUS MBEKI, sixty, kneels in the dust with an open Bible, whispering.
8 D TULL (to everyone): Nobody move.
9 D CORDELIA: Nobody's moving, Sheriff.
10 D TULL: Then why's your hand on that stock?
11 D CORDELIA: Habit.
12 D TULL (to Wendell): Get that wheel loose.
13 D WENDELL: I'm trying, sir.
14 D TULL: Try harder.
15 A ¶ Wendell climbs down.
16 A He crouches by the wheel and shoves at it with both hands.
* 17 A The coach does not budge.
* 18 A The river roars.
19 A Cordelia nudges the mare one step forward.
20 D MBEKI (murmuring): Lord, if it be Thy will.
21 D CORDELIA: Preacher, I'd say it's the Lord's will you stay put.
22 D MBEKI: Madam, I am praying for your soul.
23 D CORDELIA: Then pray for the wheel.
24 D TULL: Enough.
* 25 A ¶ Silence.
26 A Wendell strains.
* 27 A The coach shifts an inch, and everyone freezes.
28 A He looks up at Tull, eyes wide.
29 D WENDELL (whispering): It's moving.
30 D TULL: Keep going.
31 D CORDELIA (to herself): Easy, easy.
* 32 A ¶ The wheel pops free with a crack.
* 33 A The coach lurches forward.
34 A Wendell leaps aside.
35 A Cordelia lifts the rifle halfway.
36 A Tull cocks the shotgun, and for a long second the two of them regard each other down the length of the bridge.
37 D TULL [CONT'D]: Let it pass.
38 D CORDELIA: Why?
39 D TULL: Because there's a preacher in the road.
40 A ¶ She looks at Mbeki, still on his knees, and lowers the rifle.

### SCENE s02397 | INT. ABANDONED HOTEL POOL - DAWN
Detected names (may be incomplete or contain aliases): HENRIK SOLBERG, ASHA NDLOVU-REYES
* 1 A ¶ A drained lap pool under a skylight patched with plywood.
* 2 A Peeling blue tiles.
* 3 A A diving board with one rusted bolt.
* 4 A Pale light falls in stripes across the floor of the deep end.
5 A ¶ HENRIK SOLBERG, sixties, in a long wool coat, sits on a plastic chair at the shallow end with a stopwatch hanging from his neck.
6 A He is a retired coach with a patient, ruined face.
7 A At the edge of the deep end, ASHA NDLOVU-REYES, twenty, in a tracksuit, stretches her shoulders and rolls her neck.
8 A She has not looked at him since she arrived.
9 A ¶ He clears his throat.
10 A She does not turn.
11 A ¶ She steps onto the diving board.
* 12 A It flexes and groans beneath her bare feet.
13 A She bounces once, testing, and the whole structure sings, and he half rises from the chair.
14 D HENRIK: Asha.
15 D ASHA: It's fine.
16 D HENRIK: The board is not fine.
17 D ASHA: It has held before.
18 A ¶ He sits back down, slowly.
* 19 A The stopwatch swings against his chest.
20 A She bounces again, higher, and the bolt shrieks in its socket, and still she does not stop.
21 D HENRIK: The pool is empty.
22 D ASHA: I know.
23 D HENRIK: I only mention it.
24 A ¶ She laughs, a short surprised sound that echoes off the tiles.
25 A She lowers herself to the end of the board and sits there, legs dangling above eleven feet of nothing.
26 D ASHA: Do you remember the last time you timed me?
27 D HENRIK: Sydney.
28 D ASHA: You said I was a second slow.
29 D HENRIK: You were a second slow.
30 D ASHA: I was a tenth slow. I looked it up.
31 A ¶ He lifts the stopwatch.
32 A Studies it.
33 A Thumbs the button.
* 34 A It clicks.
35 D HENRIK: Then it was a tenth.
36 A ¶ She stands again.
37 A Walks to the very edge.
38 A Spreads her arms and looks up at the skylight, where the plywood has split to let in one thin blade of gold.
39 D ASHA: Start the watch.
40 D HENRIK: For what?
41 D ASHA: Just start it.
42 A ¶ He starts it.
43 A She bends her knees.
44 A Holds.
45 A And then, softly, to nobody, she dives, a clean arc, arms together, into the long empty blue, and at the last instant her fingertips brush the floor and she rolls and comes up laughing, breathless, filthy, alive.
46 A ¶ He stops the watch.
47 A Looks at it.
48 A Does not say the number.

### SCENE s02398 | INT. ESCAPE ROOM - "THE MUMMY'S REVENGE" - NIGHT
Detected names (may be incomplete or contain aliases): CHAD BROADHURST, BERNICE ADEYEMI-STONE, MOOSA QURESHI
* 1 A ¶ A fake tomb of papier-mache and gaffer tape.
* 2 A Hieroglyphs painted in marker.
* 3 A A sarcophagus lid leans against one wall.
* 4 A A digital timer on the wall reads 03:12 and counts down.
5 A ¶ CHAD BROADHURST, thirties, in a polo and cargo shorts, paces with a plastic torch.
6 A BERNICE ADEYEMI-STONE, sixties, sits cross-legged on the floor sorting scraps of papyrus into piles.
7 A MOOSA QURESHI, twenties, headset on, stares at a wall of buttons.
8 D CHAD: Okay, team. Focus. Focus!
9 D BERNICE: We're focused, Chad.
10 D CHAD: Moosa, buddy, what's the clue?
11 D MOOSA: It says, "Where the sun meets the river."
12 D CHAD: Meaning?
13 D MOOSA: No idea.
14 D CHAD: Bernice?
15 D BERNICE: Hush, I'm sorting.
16 A ¶ Chad flings the torch at the sarcophagus.
* 17 A It bounces off the lid and clatters across the floor.
18 A All three freeze, then lunge for it at once.
19 A Bernice gets there first and, with surprising speed, snatches it up.
20 A Chad stumbles into Moosa.
21 A Moosa trips over the papyrus piles.
22 A The three of them land in a heap beside the sarcophagus.
23 D BERNICE: Now look what you've done!
24 D CHAD: Me?
25 D MOOSA: It's the third piece. It's in the lid.
26 D CHAD: What?
27 D MOOSA: The lid. It's a door.
28 A ¶ They scramble up.
29 A Heave together.
* 30 A The lid swings open.
* 31 A Inside, a brass key on a satin pillow.
32 D CHAD: Moosa, you genius!
33 D BERNICE: I'm the one who sorted.
34 D MOOSA: I just read the clue.
35 D CHAD: Same difference.
36 A ¶ Chad snatches the key.
37 A Runs to the door.
38 A Jams it in.
* 39 A It does not turn.
* 40 A The timer blinks 00:30.
41 D BERNICE: Try it the other way, you oaf!
42 D CHAD: It's a key. There's only one way!
43 D MOOSA: It's a left-handed lock.
44 D CHAD: That's not a thing!
45 D BERNICE: Give me that.
46 A ¶ They struggle over the key, all three pulling, and the door finally swings open on a dim corridor and a flashing EXIT sign.
47 D MOOSA: We did it!
48 A ¶ Chad collapses to the floor.
49 A Bernice tidies her hair.
50 A Moosa pumps a fist.
* 51 A The timer reads 00:04.
