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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0066.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s02252 | EXT. GENERAL STORE PORCH - MORNING
Detected names (may be incomplete or contain aliases): SILAS CROWE, BESSIE MARSH, LITTLE JOE TALLCHIEF, ABERNATHY
* 1 A ¶ A dusty main street, a hitching rail, a water trough.
* 2 A Quiet.
* 3 A A wind chime of old spoons clinks.
4 A ¶ SILAS CROWE, fifties, black hat, graying mustache, a stranger who sits on a barrel with a tin cup of coffee, looks up as BESSIE MARSH, forties, the store owner, sweeps the boards by the door, and LITTLE JOE TALLCHIEF, twelve, rolls a hoop down the street with a stick, and REV. ABERNATHY, sixty, a preacher in a rusty black coat, steps out of the church across the way and shades his eyes, all four of them noticing at the same instant the cloud of dust rising far out on the plains.
5 D BESSIE: Riders.
6 D SILAS: Four of them.
7 D LITTLE JOE (dropping the hoop): How can you tell?
8 D SILAS: Four plumes. Hush.
9 D REV. ABERNATHY (calling across the street): Mrs. Marsh, is that the Dalton boys?
10 D BESSIE: God help us if it is.
11 A ¶ Silas stands, sets down his cup, and unbuttons his coat.
12 A Bessie leans the broom against the wall.
13 A Little Joe edges toward the porch steps.
14 A Rev. Abernathy crosses the road with surprising speed, his Bible clutched to his chest.
15 D REV. ABERNATHY (arriving): Silas Crowe. I know you from somewhere.
16 D SILAS: Never been here, Reverend.
17 D REV. ABERNATHY: Springfield, 'seventy-eight. The tent revival.
18 D SILAS: You must be thinking of another man.
19 D BESSIE: He's thinking of the man on the wanted poster in my window.
20 D SILAS (a thin smile): Mrs. Marsh, you're sharper than your broom.
21 D LITTLE JOE: Mr. Crowe, are you an outlaw?
22 D SILAS: I'm a retired one.
* 23 A ¶ The dust cloud grows.
* 24 A The riders become shapes, then men.
* 25 A Their hats are low.
26 A Bessie and the Reverend both step back, and Little Joe slips behind the barrel, and Silas Crowe, still smiling, takes off his hat and sets it on the rail.
27 D SILAS [CONT'D]: Ma'am, a cup of that coffee wouldn't hurt.
28 D BESSIE: You expecting company?
29 D SILAS: I expect they'll want to talk.
30 A ¶ She pours.
31 A He drinks.
32 A The riders pull up at the hitching rail.
33 A The lead one tips his hat, sees Silas, and lets out a long breath.
34 D SILAS [CONT'D] (softly): Morning, boys.

### SCENE s02253 | EXT. CATTLE PEN AT DUSK - SUNDAY
Detected names (may be incomplete or contain aliases): HANK YAZZIE, MILLIE, LAZARUS, PETE
* 1 A ¶ Dust.
* 2 A Lowing steers.
* 3 A A split-rail fence, a bucket, a lantern on a post.
4 A ¶ HANK YAZZIE, forties, leans on the fence.
5 A MILLIE, thirties, a cook in a flour-dusted apron, ladles beans from a pot.
6 A LAZARUS, sixty, a one-eyed drover, sits on an upturned bucket whittling.
7 A PETE, nineteen, new on the crew, brushes a horse.
8 D MILLIE (to everyone): Supper's up.
9 D HANK: Smells good.
10 D LAZARUS: Smells like boots.
11 D MILLIE: Then don't eat it, Laz.
12 D LAZARUS: I'll eat it.
13 D PETE: Mrs. Millie, can I have seconds?
14 D MILLIE: You haven't had firsts.
15 D PETE: I'm planning ahead.
16 D HANK: Pete, how's the bay mare?
17 D PETE: Limping, Mr. Yazzie.
18 D HANK: Which leg?
19 D PETE: Left front.
20 D LAZARUS: It's the right.
21 D PETE: It's the left.
22 D LAZARUS (muttering): Boy can't tell his left from his own elbow.
23 D MILLIE: Lazarus.
24 D LAZARUS: I'm just saying.
25 D HANK: Look at the hoof, Pete. Look, not guess.
26 D PETE: Yes, sir.
27 A ¶ He crouches.
28 A Lifts the mare's foot.
29 A Squints.
30 D PETE [CONT'D]: Stone.
31 D HANK: Pick it out.
32 D LAZARUS: Right front. Told you.
33 D PETE: Left.
34 D LAZARUS: Right!
35 D HANK: Everyone eat.
36 A ¶ They quiet.
37 A Millie passes bowls.
* 38 A The steers settle.
39 A Lazarus slowly resumes whittling.

### SCENE s02254 | EXT. PUBLIC POOL - DIVING PLATFORM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): NOOR, FELIX
* 1 A ¶ An empty municipal pool at closing time.
* 2 A The water is green-blue and still.
* 3 A A ten-meter platform rises above it, rust at the joints, a faded sign reading DIVE AT OWN RISK.
4 A ¶ NOOR, fifteen, in a black one-piece and a wet towel around her shoulders, stands at the base of the ladder with her toes curled around the bottom rung, and FELIX, sixteen, her older cousin, in cutoffs and a tank top, sits in a plastic lifeguard chair eating sunflower seeds and spitting the shells into the pool, and neither of them says anything for a while, and the filter hums, and the drain gurgles, and a plane crosses the pink sky.
5 D FELIX: You don't have to.
6 D NOOR: I know.
7 D FELIX: It's just a platform.
8 D NOOR: It's ten meters.
9 D FELIX: It's ten meters of nothing, then water.
10 D NOOR: That's what I'm afraid of.
11 A ¶ She puts a foot on the second rung.
12 A Takes it off.
13 A Felix watches without comment, rolling a seed between his teeth.
14 D FELIX: Dad did it when he was fourteen.
15 D NOOR: Uncle Rob never did anything he said he did.
16 D FELIX: Okay, that's fair.
17 A ¶ She climbs three rungs, then four, then stops, her knuckles pale on the rail.
18 A Felix stands up, tosses the empty seed bag into a trash can, and walks to the edge of the pool.
19 A He kneels there, looking up.
20 D FELIX [CONT'D]: I'll be right here.
21 D NOOR: You can't catch me from ten meters.
22 D FELIX: I'll catch you after.
23 A ¶ She exhales.
24 A Climbs.
* 25 A The rungs ring under her feet.
26 A At the top, she stands at the edge of the board with her arms wrapped around herself, her wet hair dripping.
* 27 A Far below, Felix is very small.
28 D NOOR [CONT'D] (calling down): Don't watch.
29 D FELIX: I'm watching.
30 D NOOR: Felix!
31 D FELIX: Okay, I'm not watching.
32 A ¶ He covers his eyes with both hands.
33 A She laughs, a breath of a sound, and steps off.

### SCENE s02255 | INT. FERRY CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): AGENT TORVALD, MERCEDES, JIN, HADIZA, COLM, BEATRIX
* 1 A ¶ A vast steel cavern, trucks and cars chained to the floor.
* 2 A Engines idle.
* 3 A A low, constant drone.
* 4 A Overhead lamps in cages cast slatted shadows.
5 A ¶ AGENT TORVALD, fifties, trench coat, stands beside a white delivery van.
6 A MERCEDES, forties, a ferry officer in a navy jacket, leads two others toward him: JIN, thirties, a mechanic in grease-black overalls, and HADIZA, twenties, a deckhand with a heavy flashlight.
7 A Behind them COLM, sixty, the ship's cook, drags a trolley of crates.
8 A BEATRIX, thirties, a passenger in a cashmere coat, trails at a distance, hugging a briefcase.
9 D TORVALD: Open it.
10 D MERCEDES: Agent Torvald, we have a protocol.
11 D TORVALD: I'm the protocol tonight.
12 D JIN: He's got a warrant, Mercedes.
13 D MERCEDES: He has a piece of paper.
14 D HADIZA: It's got a stamp.
15 D COLM: Stamps are cheap.
16 D TORVALD: Mr. Colm, step back.
17 D COLM: I'm only pushing a trolley, mister.
18 D TORVALD: Then push it elsewhere.
19 A ¶ Colm shrugs and parks the trolley against a pillar.
20 A Beatrix inches nearer.
21 D BEATRIX: Excuse me. Is there a problem?
22 D TORVALD: Ma'am, this doesn't concern you.
23 D BEATRIX: I'm in cabin twelve. It's concerning me.
24 D MERCEDES (to Beatrix): Please return to your cabin, ma'am.
25 D BEATRIX: I'd like to see what's in that van.
26 D JIN: Don't we all.
27 A ¶ Torvald yanks a latch.
* 28 A The van's rear doors swing open.
* 29 A Rows of wooden crates, stenciled in a foreign alphabet.
30 A He lifts a lid.
* 31 A Straw.
* 32 A Beneath it, bundles of cash wrapped in plastic.
* 33 A ¶ Silence.
34 D HADIZA: That's... a lot.
35 D JIN: That's a very lot.
36 D MERCEDES: Agent Torvald, whose is this?
37 D TORVALD: Mine, if I'm lucky. Evidence, if I'm not.
38 D BEATRIX (quiet): It's mine.
39 A ¶ They all turn.
40 A Beatrix sets down her briefcase, opens it, takes out a tiny pistol.
41 D BEATRIX [CONT'D]: No heroes, please. I'm tired.
42 D TORVALD: Ma'am, put it down.
43 D BEATRIX: I paid for this ride, Agent. Nobody's taking my cargo.
44 D COLM (sighing): Miss, I've been cooking on this boat for thirty years. I've never seen anything so stupid.
45 D BEATRIX: You haven't seen much, then.
46 D JIN: Mercedes, do something.
47 D MERCEDES: I'm the first officer, not a gunslinger.
48 D HADIZA: I'll hit her with the flashlight.
49 D TORVALD: No, Hadiza.
50 A ¶ Hadiza lowers the flashlight.
51 A Beatrix levels the pistol at Torvald.
52 D BEATRIX: Step away from the van.
53 A ¶ Torvald raises both hands.
54 A Steps back.
55 A Colm slowly takes a pan from the trolley, hand behind his back.
56 D COLM: Miss Beatrix, would you like a coffee?
57 D BEATRIX (blinking): What?
58 A ¶ Colm swings the pan.
59 A It clangs on her wrist.
* 60 A The pistol clatters across the deck.
61 A Jin dives on it.
62 A Mercedes sits on Beatrix before she can reach it.
63 A Torvald exhales for the first time in a minute.
64 D TORVALD (to Colm): Thank you.
65 D COLM: Mind the straw. It's flammable.

### SCENE s02256 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): ALDER, POSY, GARRICK, TILDA, RUDO, PENHALLOW
* 1 A ¶ A circular room with a cast-iron stove, six cots, shuttered windows.
* 2 A A storm throws rain against the glass.
* 3 A Candle stubs gutter on the sill.
4 A ¶ ALDER, forties, a coast guard captain, stands near the stove.
5 A POSY, twenty, a young lighthouse apprentice, huddles on a cot.
6 A GARRICK, fifties, a retired seaman, sits cleaning a rifle.
7 A TILDA, thirties, a nurse, bandages a cut on RUDO's arm.
8 A RUDO, thirties, a fisherman, grimaces.
* 9 A ¶ Something thumps on the roof.
10 D ALDER (to the room): Nobody panic.
11 D POSY: It's the wind.
12 D GARRICK: That wasn't the wind.
13 D TILDA (whispering): Hold still, Rudo.
14 D RUDO: I'm holding still.
* 15 A ¶ Another thump.
* 16 A Dust sifts from the ceiling.
17 D ALDER (muttering): Come on, come on.
18 D POSY (to Alder): Captain, what is it?
19 D ALDER: I don't know.
* 20 A ¶ The stove door rattles.
* 21 A The windows shudder.
* 22 A Then silence.
* 23 A ¶ A knock at the door.
* 24 A Three slow knocks.
25 A ¶ They all look at Alder.
26 A He steps forward, hand on his holster, and slides back the bolt.
27 A ¶ On the threshold stands MR. PENHALLOW, sixties, drenched, in a sou'wester too small for his frame.
28 A He smiles with all his teeth.
29 D MR. PENHALLOW: Good evening. I'm so sorry to disturb you. My boat has been lost.
30 D ALDER: Come in out of the rain.
31 D MR. PENHALLOW: You are kind.
32 A ¶ He steps in.
* 33 A The candle flames bend toward him.
34 A Garrick lifts the rifle.
35 D GARRICK (low): Captain.
36 D ALDER: I see it.
37 D POSY (whispering): His feet.
38 A ¶ No one looks down.
39 A Nobody dares to.
* 40 A The puddle spreading from Penhallow's boots is dark, thick, and not rainwater.

### SCENE s02257 | INT. ROADSIDE INN - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS, CORAZON, TUCK
* 1 A ¶ A cramped room, a table, a candle.
* 2 A Three chairs.
* 3 A A bottle of rye between them.
4 A ¶ ELIAS, fifties, a bounty hunter, mud on his boots.
5 A CORAZON, thirties, the innkeeper, sleeves rolled up.
6 A TUCK, twenty, a boy with a bandaged hand.
7 D ELIAS: You know who I'm after.
8 D CORAZON: I know a lot of people.
9 D ELIAS: A man with a red scarf and a limp.
10 D CORAZON: Plenty of limps in this valley.
11 D ELIAS: Not plenty with a scarf.
12 D TUCK (quiet): He was here Tuesday.
13 D CORAZON: Tuck.
14 D TUCK: He was, Mama. He paid for the room with a gold coin.
15 D ELIAS: A gold coin. Where's the coin now?
16 D CORAZON: In the church box.
17 D ELIAS: Then I'll want to see the church box.
18 D CORAZON: It's Sunday. The padre is asleep.
19 D ELIAS: Then wake him.
20 D TUCK: Mister, he said he was going to Albuquerque.
21 D ELIAS: Did he say why?
22 D TUCK: To see a doctor.
23 D ELIAS: For the limp.
24 D TUCK: For his heart. He said it was broken.
25 A ¶ Elias pours a drink.
26 A Doesn't touch it.
27 D ELIAS: He killed a family in Santa Rosa. Three children.
28 D CORAZON: God forgive him.
29 D ELIAS: I don't want God to. That's my job.
30 D TUCK: Mama, tell him.
31 D CORAZON: Tell him what?
32 D TUCK: About the letter.
33 A ¶ Corazon closes her eyes.
34 A Elias leans forward.
35 D ELIAS: What letter?
36 D CORAZON: He left a letter. Addressed to a priest in Albuquerque. I didn't mail it.
37 D ELIAS: Why not?
38 D CORAZON: Because I read it.
39 D TUCK: She cried all night.
40 D ELIAS: Ma'am. What did it say?
41 D CORAZON: That he wanted to be found.
* 42 A ¶ A long silence.
* 43 A The candle gutters.
44 A Elias sets his glass down.
45 D ELIAS: Give me the letter.
46 D CORAZON: It's mine now.
47 D ELIAS: Ma'am.
48 D CORAZON: Let him find his own way to the rope. Take the letter, you'll be the one who took him there.
49 A ¶ Elias studies her.
50 A Then Tuck.
51 A Then the bottle.
52 D ELIAS: Keep the letter. Mail it tomorrow.
53 D CORAZON: And you?
54 D ELIAS: I'll ride to Albuquerque ahead of it.

### SCENE s02258 | INT. HIGH SCHOOL GYM - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): WHITLOCK, DRE, KENZIE, SAL, MOOKIE, ILYA, ALL
* 1 A ¶ Cinderblock walls painted maroon.
* 2 A Benches bolted to the floor.
* 3 A A whiteboard with X's and O's smeared into gray.
4 A ¶ COACH BARNABY "BARN" WHITLOCK, fifties, a whistle around his neck and a clipboard under his arm, paces.
5 A DRE, seventeen, the point guard.
6 A KENZIE, sixteen, a power forward, ties her sneakers.
7 A SAL, eighteen, a center, towel over his head.
8 A MOOKIE, fifteen, the smallest, bounces a ball.
9 A ILYA, seventeen, a transfer, stares at his hands.
10 D COACH WHITLOCK (to the room): Listen up. Fourth quarter, eight points down. This is the league final. Eight points, four minutes.
11 D DRE: We can do eight.
12 D KENZIE: We've done more.
13 D SAL (muffled under the towel): We have not.
14 D COACH WHITLOCK: Sal, towel off your head.
15 D SAL: Yes, Coach.
16 D COACH WHITLOCK: Mookie, put the ball down.
17 D MOOKIE: Sorry, Coach.
18 A ¶ He doesn't put it down.
19 A Whitlock glares.
20 A Mookie tucks it under his arm.
21 D COACH WHITLOCK: Dre, you bring it up fast. Kenzie, set the screen. Sal, roll to the rim. Ilya.
22 D ILYA: Yes, Coach?
23 D COACH WHITLOCK: You're the corner shooter.
24 D ILYA: I missed my last four.
25 D COACH WHITLOCK: You'll hit the next one.
26 D ILYA (to himself): I don't know.
27 D KENZIE (to Ilya): You will. Don't think.
28 D COACH WHITLOCK: That's right. Don't think. Shoot.
* 29 A ¶ A pounding at the door.
* 30 A A buzzer blares in the gym beyond.
31 D COACH WHITLOCK: That's two minutes! Up!
32 A ¶ The team rises as one.
33 A Dre slaps Sal's shoulder.
34 A Kenzie punches Ilya's arm, gently.
35 A Mookie scrambles onto a bench and, for a moment, stands taller than anyone.
36 D MOOKIE: We got this!
37 D COACH WHITLOCK (drily): Get off the bench, Mookie.
38 A ¶ Mookie hops down.
39 A They form a circle, hands in the middle.
40 D DRE: One, two, three.
41 D ALL: Go!
42 A ¶ They file out.
43 A Whitlock watches them go, then glances at the whiteboard and wipes it clean with his sleeve.
44 D COACH WHITLOCK [CONT'D] (muttering): Eight points. Four minutes. Please.

### SCENE s02259 | INT. MORTUARY BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): EDIE, WINNIFRED
* 1 A ¶ White tile.
* 2 A A drain in the floor.
* 3 A Steel drawers set into the wall, each with a numbered tag.
* 4 A A single bulb hums over a stainless table.
5 A ¶ EDIE, thirties, a night attendant in a gray smock, stands with a clipboard at the foot of the table, and WINNIFRED, seventies, the visiting widow in a black veil and sensible shoes, hovers beside drawer fourteen with her hand on the handle, and neither of them speaks until the bulb flickers and every drawer in the wall slides open an inch at once and Edie drops the clipboard and Winnifred, without moving, begins to hum.
6 D EDIE: Ma'am, step away from the wall.
7 D WINNIFRED: I'm not touching anything.
8 D EDIE: The drawers are opening.
9 D WINNIFRED: They always do for me.

### SCENE s02260 | EXT. TRACK, MUNICIPAL STADIUM - PRE-DAWN
Detected names (may be incomplete or contain aliases): KALINDA
* 1 A ¶ Empty bleachers.
* 2 A Floodlights at half power.
* 3 A Frost on the infield.
* 4 A Lane lines glow white.
5 A ¶ KALINDA, thirty-two, a distance runner in a thin jacket and tights, stretches against the starting block, one earbud in, her phone strapped to her upper arm.
* 6 A A bruise-colored sky pushes against the east wall.
7 A ¶ She checks her watch.
8 A Taps her phone.
9 D KALINDA [V.O.] (her own recorded voice, wry): Day one-oh-seven. Hamstring's tight. Don't be a hero.
10 A ¶ Kalinda grimaces, a small laugh.
11 D KALINDA: Noted.
12 A ¶ She jogs a slow lap.
* 13 A Her breath puffs in the cold.
14 A At the far curve, she stops, retightens a lace.
15 D KALINDA [V.O.]: Day ninety. Hit the wall at three miles. Cried a little. Kept going.
16 A ¶ She straightens.
17 A Shakes out her arms.
18 A Breaks into a steady pace, long strides, breath in quarter time.
19 D KALINDA [V.O.]: Day sixty. Told Mom I might retire. She said retire from what? I said running. She said, you never started.
20 A ¶ Kalinda snorts.
21 A Rounds the curve.
22 D KALINDA [V.O.]: Day one. Four hundred meters. Walked half. Felt like an idiot.
23 A ¶ She lengthens her stride.
* 24 A The sky pinks.
25 D KALINDA [V.O.]: Whoever you are today, run like you did on day one. Like you had nothing to prove.
26 A ¶ She nods once to the empty stands.
* 27 A Runs on, and the floodlights, one by one, click off as dawn takes over.

### SCENE s02261 | INT. GRANDMOTHER'S ATTIC - EVENING
Detected names (may be incomplete or contain aliases): GRANDMA ODILE, DAD MWANGI, BOY, THEO
* 1 A ¶ Slanted beams.
* 2 A Trunks, a dressmaker's dummy, a rocking horse with one eye.
* 3 A A single round window.
4 A ¶ GRANDMA ODILE, seventies, in a flowered housecoat, sits on a trunk with a shoebox on her knees.
5 A DAD MWANGI, forties, crouches by a stack of framed photos, wiping dust.
6 A ¶ A BOY, eight, in a too-big pajama top, climbs the attic ladder and peeks over the edge.
7 D BOY: Are you guys up here?
8 D GRANDMA ODILE: Come, sweet pea.
9 A ¶ He climbs the rest of the way.
10 A Pads across the floor.
11 D BOY: What's in the box?
12 D GRANDMA ODILE: Letters.
13 D BOY: From who?
14 D GRANDMA ODILE: From your grandfather. Before he was your grandfather.
15 D DAD MWANGI: Theo, you should be in bed.
16 D THEO: Grandma's telling a story.
17 D GRANDMA ODILE (to Mwangi): Let him stay.
18 A ¶ Mwangi sighs.
19 A Sits.
20 D THEO: Grandma, are the letters sad?
21 D GRANDMA ODILE: Some are. Some are silly. This one is about a goat.
22 D THEO: A goat!
23 A ¶ She unfolds the page.
24 A Mwangi smiles despite himself.

### SCENE s02262 | INT. HOSPITAL ROOM 412 - EARLY MORNING
Detected names (may be incomplete or contain aliases): HYE-WON PARK, LINDGREN, NURSE ABIOLA
* 1 A ¶ Blinds half-open.
* 2 A A low monitor beeps.
* 3 A A tray with an untouched breakfast.
* 4 A A vase of wilting carnations on the sill.
5 A ¶ DR. HYE-WON PARK, forties, a gray cardigan over her scrubs, enters with a chart.
6 A MR. LINDGREN, seventy, lies propped in bed in a thin hospital gown, white stubble, an IV in his hand.
7 A NURSE ABIOLA, thirties, adjusting a pillow, glances up.
8 D HYE-WON: Good morning, Mr. Lindgren.
9 D LINDGREN: Is it?
10 D HYE-WON: I hope so.
11 A ¶ She sets the chart down.
12 A Pulls a stool to the bedside.
13 A Abiola steps back, letting her take the space.
14 D HYE-WON [CONT'D]: How did you sleep?
15 D LINDGREN: Fine.
16 D ABIOLA: He was up twice.
17 D LINDGREN: I was not.
18 D ABIOLA: You asked me for the radio.
19 D LINDGREN: That's not sleeping badly. That's listening.
20 A ¶ Hye-won almost smiles.
21 A She reaches for his wrist, checks his pulse.
22 D HYE-WON: Your tests came back.
23 D LINDGREN: And?
24 D HYE-WON: I'd like to go through them with you.
25 D LINDGREN: Just say it.
26 A ¶ Hye-won exchanges a glance with Abiola.
27 A Abiola looks at the floor.
28 D HYE-WON: It's in the pancreas. It has spread to the liver.
29 A ¶ He turns his head to the window.
30 A His jaw works.
* 31 A The monitor keeps its steady beep.
32 D LINDGREN: How long?
33 D HYE-WON: Months. Perhaps less.
34 A ¶ He nods.
35 A Reaches for the glass of water on the tray.
36 A His hand shakes.
37 A Abiola moves to help but he waves her off.
38 A He drinks.
39 A Sets the glass down with great care.
40 D LINDGREN: My wife used to say I'd outlive the doctors.
41 D HYE-WON: She might have been right.
42 D LINDGREN: She was usually right. It was annoying.
43 A ¶ Abiola laughs, a short sound, then covers her mouth.
44 A Hye-won puts a hand on his arm.
45 D HYE-WON: We'll keep you comfortable.
46 D LINDGREN: I know.
47 A ¶ He picks at the corner of the blanket.
48 A Abiola straightens the carnations, plucks off a brown petal.
49 D LINDGREN [CONT'D]: Can I have the radio?
50 D ABIOLA: Of course.
51 A ¶ She fetches it from the drawer, plugs it in, and finds a station.
* 52 A A soft piano.
53 A He closes his eyes.

### SCENE s02263 | INT. CUBICLE FARM - MONDAY MORNING
Detected names (may be incomplete or contain aliases): SHANICE, COLETTE, BARRY, HR
* 1 A ¶ Gray partitions.
* 2 A Motivational posters.
* 3 A A potted plant dying on a filing cabinet.
4 A ¶ SHANICE, thirties, a headset on, taps a keyboard.
5 A COLETTE, forties, her supervisor, stands at the cubicle entrance with a coffee.
6 A BARRY, fifties, from HR, hovers behind with a binder.
7 D COLETTE (to the whole floor): Team meeting, five minutes, conference B.
8 A ¶ Heads pop up above partitions.
* 9 A A groan.
10 D SHANICE (muttering): Another meeting.
11 D COLETTE: She heard that.
12 D BARRY: She definitely heard that.
13 A ¶ Shanice pulls off her headset.
14 A Colette leans against the partition.
15 D COLETTE: Shanice, a word.
16 D SHANICE: Sure.
17 D COLETTE: You've been here seven years.
18 D SHANICE: Eight.
19 D COLETTE: Eight. And we've decided to restructure.
20 A ¶ Barry opens his binder.
21 A Shanice stares at it.
22 D SHANICE: Restructure.
23 D BARRY: Position eliminated, effective today.
24 D SHANICE (to the floor, loudly): They just fired me!
* 25 A ¶ Silence.
26 A Every head disappears behind the partitions.

### SCENE s02264 | INT. COUNTRY HOUSE DINING ROOM - 1840S - EVENING
Detected names (may be incomplete or contain aliases): AGNES, FOTHERGILL, EDMUND
* 1 A ¶ A long mahogany table laid for three.
* 2 A Silver, crystal, candles.
* 3 A A fire crackles.
* 4 A A portrait of a stern ancestor presides over the sideboard.
5 A ¶ AGNES, forties, in dove-gray silk, sits at the head.
6 A MR. FOTHERGILL, fifties, a visiting solicitor, to her right, with a napkin tucked in his collar.
7 A EDMUND, twenty, her son, sits opposite him, turning a wine glass by its stem.
8 A ¶ She lifts the soup tureen herself.
9 A Ladles three portions.
10 A Her hand is quite steady.
11 D FOTHERGILL: This is excellent.
12 D AGNES: Cook will be pleased.
13 A ¶ He samples it.
14 A She watches him.
15 A Edmund watches the glass.
16 D FOTHERGILL: Mrs. Whitcombe, I regret I have news.
17 D AGNES: Mr. Fothergill, you always have news. Eat first.
18 A ¶ He eats.
* 19 A A pause.
* 20 A The fire pops.
21 D EDMUND: Mother, I think perhaps we should hear it.
22 D AGNES: After soup.
23 D EDMUND: But if it concerns--
24 D AGNES: After soup, Edmund.
25 A ¶ He subsides.
26 A Sets down his glass.
* 27 A The candle flames shiver as a servant's footsteps pass in the hall and fade.
28 D FOTHERGILL: The estate. The creditors have called in the note.
29 A ¶ Agnes sets down her spoon.
30 A Aligns it with the edge of her bowl.
31 D AGNES: How much?
32 D FOTHERGILL: Four thousand pounds.
33 D EDMUND: We don't have four thousand.
34 D FOTHERGILL: I know.
35 D EDMUND: Then we'll sell the east pasture.
36 D AGNES: The east pasture was your father's.
37 D EDMUND: Father is dead.
38 A ¶ She looks at him.
39 A He drops his eyes.
40 A Fothergill coughs into his napkin.
41 D FOTHERGILL: There is another way.
42 D AGNES: There always is.
43 D FOTHERGILL: A marriage. A gentleman in Bath, a widower of good family, has inquired--
44 D AGNES (to Edmund): Pass the bread.
45 D EDMUND: Mother.
46 D AGNES: The bread, Edmund.
47 A ¶ He passes it.
48 A She tears off a piece, takes her time buttering it.
49 A Fothergill waits, napkin twisted in his fist.
50 D FOTHERGILL: It would settle the debt.
51 D AGNES: And whom does the gentleman wish to marry?
52 A ¶ Fothergill looks, slowly, at Edmund.
53 A Edmund stares back, color draining from his face.
54 A Agnes, not looking at either of them, takes a bite of bread.
55 D AGNES [CONT'D] (mildly): I see. More soup, Mr. Fothergill?
56 A ¶ He holds out his bowl.
57 A She fills it.
58 A He takes it with a trembling hand and does not meet her eyes.
59 A Edmund rises.
60 D EDMUND: Excuse me.
61 D AGNES: Sit down.
62 A ¶ He doesn't.
63 A He walks to the fire and stands with his back to the table, his shoulders very straight.
64 D FOTHERGILL (clearing his throat): The offer remains open until Friday.
65 D AGNES: Then we shall eat our dinner, and sleep, and tomorrow I shall write to Bath.
66 D FOTHERGILL: Madam?
67 D AGNES: Whatever I write, Mr. Fothergill, is my own business.
68 A ¶ She resumes her soup.
69 A At the fire, Edmund lifts a hand and wipes his eyes, quickly, with the back of his wrist.

### SCENE s02265 | INT. HOCKEY RINK - PLAYERS' BENCH - NIGHT
Detected names (may be incomplete or contain aliases): TARIQ, DEV, COACH EDDIE, HAL
* 1 A ¶ Cold breath.
* 2 A Steel blades on ice.
* 3 A The crowd's roar leaks from the stands.
4 A ¶ TARIQ, twenty-two, a winger, grips his stick, eyes on the ice.
5 A DEV, twenty-four, a center, shifts beside him, tapping his skate.
6 A COACH EDDIE, sixty, leans over the boards.
7 A HAL, fifties, the referee, skates up to the bench.
8 D EDDIE: Tariq, you're up.
9 D TARIQ: Coach, he's been on all night.
10 D EDDIE: Then he's tired. Go.
11 A ¶ Dev elbows Tariq.
12 D DEV: Cut left. He always goes right.
13 D TARIQ: You sure?
14 D DEV: He told me once.
15 D HAL: Two minutes, gentlemen.
16 A ¶ Tariq vaults the boards.
17 A Dev follows.
18 A Eddie claps once, hard, and the puck drops.

### SCENE s02266 | INT. COURTHOUSE STAIRWELL - DAY
Detected names (may be incomplete or contain aliases): CONSTANCE ADEYEMI, RONAN BLAKE
* 1 A ¶ Concrete steps, a steel railing, a window of wired glass.
* 2 A Muffled footsteps echo from other floors.
3 A ¶ CONSTANCE ADEYEMI, forties, a defense lawyer in a navy suit, hair pulled back so tight it pulls her eyes, leans against the railing with a coffee she hasn't touched.
4 A RONAN BLAKE, thirties, her client, in a borrowed tie two inches too short, holds a rolled-up folder like a club.
5 D RONAN: You said it would be quick.
6 D CONSTANCE: It is quick.
7 D RONAN: It's been four hours.
8 D CONSTANCE: Four hours is quick for murder.
9 D RONAN (small laugh): Manslaughter.
10 D CONSTANCE: Don't say the word out loud.
11 A ¶ He nods.
12 A Goes quiet.
13 A Down the stairwell a door bangs; both of them turn their heads, wait, then relax.
14 D CONSTANCE [CONT'D]: The jury is back at three.
15 D RONAN: How do I look?
16 A ¶ She studies him: the tie, the folder, the way his shoulders curl inward.
17 A She reaches out and unrolls the folder, flattens it, hands it back.
18 D CONSTANCE: Carry it like a book. Not like a weapon.
19 A ¶ He does.
20 A Straightens his tie.
* 21 A It doesn't help.
22 D RONAN: Will they believe me?
23 D CONSTANCE: They'll believe what you show them.
24 D RONAN: I'm not good at showing.
25 D CONSTANCE: I know.
26 A ¶ She sets her cup on the rail.
27 A Takes out a handkerchief and pushes it into his hand.
28 D CONSTANCE [CONT'D]: When they read the verdict, look at the jury. Not at me. Not at the floor.
29 D RONAN: Why?
30 D CONSTANCE: Because they remember who looked.
31 A ¶ He folds the handkerchief into a neat square and slips it into his breast pocket, where it sits crooked and white.
32 D RONAN: You've done this before.
33 D CONSTANCE: Yes.
34 D RONAN: How many times?
35 D CONSTANCE: Enough.
36 A ¶ She picks up the cup again, and this time she drinks.

### SCENE s02267 | EXT. FOXHOLE ABOVE A SUNKEN ROAD - DAWN
Detected names (may be incomplete or contain aliases): LIEUTENANT PIOTR WOZNIAK, CAPTAIN HAVERFORD
* 1 A ¶ Frost on the parapet.
* 2 A The cold earth smells of wet iron.
* 3 A A field telephone sits on an ammunition crate, wires snaking away into the dark.
4 A ¶ LIEUTENANT PIOTR WOZNIAK, thirties, hollow-cheeked, sits against the dirt wall with his knees drawn up and a tin of cold stew in his lap.
5 A He hasn't eaten any.
6 A His helmet is pushed back and his eyes are on the gray horizon.
* 7 A ¶ The field telephone rings.
* 8 A Once, sharp, then silence, then again.
9 A ¶ He picks up the receiver slowly, as though it might burn him.
10 D WOZNIAK: Wozniak.
11 D CAPTAIN HAVERFORD [V.O.] (over the phone, crackling): Piotr. It's Haverford. I've got your orders.
12 D WOZNIAK: Go ahead, sir.
13 D CAPTAIN HAVERFORD [V.O.]: Hold the road until noon. Then fall back to the ridge.
14 D WOZNIAK: We have twelve men, sir.
15 D CAPTAIN HAVERFORD [V.O.]: I know what you have.
16 A ¶ Wozniak is silent.
* 17 A A distant mortar thuds.
* 18 A Soil trickles from the parapet.
19 D WOZNIAK: Twelve men, and ammunition for an hour.
20 D CAPTAIN HAVERFORD [V.O.]: Piotr. I'm sorry.
21 D WOZNIAK: Sir, I'm not complaining.
22 D CAPTAIN HAVERFORD [V.O.]: No. You never do.
23 A ¶ He looks at the stew.
24 A Sets it aside.
25 D WOZNIAK: Is there word from the north?
26 D CAPTAIN HAVERFORD [V.O.]: Nothing. The line's been dead since midnight. You're my only link on this side.
27 D WOZNIAK: Then I'll hold, sir.
* 28 A ¶ A pause.
* 29 A The line hisses.
30 D CAPTAIN HAVERFORD [V.O.]: Do you have a family, Lieutenant?
31 D WOZNIAK: A sister. In Gdansk.
32 D CAPTAIN HAVERFORD [V.O.]: Write to her. Today.
33 D WOZNIAK: Yes, sir.
34 D CAPTAIN HAVERFORD [V.O.]: Good man.
* 35 A ¶ The line goes dead.
36 A Wozniak holds the receiver a long moment, then sets it gently back on its cradle.
37 A ¶ He stands, brushes the frost from his sleeves, and looks across the sunken road at the first thin light.

### SCENE s02268 | INT. FAMILY LIVING ROOM - CHRISTMAS EVE
Detected names (may be incomplete or contain aliases): PAPA LUKAS, UNCLE SANDOR, COUSIN BEA, COUSIN TEDDY
* 1 A ¶ A small tree, tilted.
* 2 A Wrapping paper in drifts.
* 3 A A space heater ticks.
4 A ¶ PAPA LUKAS, sixties, in a Santa hat, stands with a plate of cookies.
5 A UNCLE SANDOR, fifties, wedged in an armchair, nurses a beer.
6 A COUSIN BEA, twelve, cross-legged on the floor, sorts presents.
7 A COUSIN TEDDY, nine, hides behind the couch with a water gun.
8 D PAPA LUKAS (to the room): Everybody, cookies.
9 D UNCLE SANDOR: He's making them again, Lukas. Stop him.
10 D PAPA LUKAS: Who is "he"?
11 D UNCLE SANDOR: Teddy! Behind the couch!
12 D TEDDY (popping up): I'm not!
13 A ¶ He fires.
14 A A jet of water hits Sandor in the face.
15 A Sandor roars, lunges, tangles in the lamp cord, topples the lamp.
16 A Bea and Lukas dive for it together; both catch it at the same moment and freeze.
17 D BEA: Papa, we're the best team.
18 D PAPA LUKAS (muttering): We're a disaster.
19 A ¶ He sets the lamp upright.
20 A Sandor, dripping, glares at Teddy.
21 D UNCLE SANDOR: You're in trouble, nephew.
22 D TEDDY: It's Christmas!
23 D UNCLE SANDOR: Then Santa's bringing you coal.
24 A ¶ Teddy bursts into laughter.
25 A Bea joins.
26 A Papa Lukas holds out the plate, and Sandor, dripping, takes a cookie.

### SCENE s02269 | EXT. RUINED CATHEDRAL SQUARE - DUSK
Detected names (may be incomplete or contain aliases): LIEUTENANT CORDELIA BRANDT, SERGEANT OSEI, PRIVATE MIKHAIL
* 1 A ¶ The nave's roof is gone.
* 2 A The columns stand like charred teeth against a violet sky.
* 3 A Rubble lies in drifts, and in the middle of it, fallen from its niche, an enormous stone angel lies on her back with her wings broken, her face turned to the clouds.
4 A ¶ LIEUTENANT CORDELIA BRANDT, thirties, hatless, her fair hair gone dark with dust, sits on the angel's chest with a map across her knees and a cigarette burned down to the filter.
5 A SERGEANT OSEI, forties, tall, broad, a rifle slung across his back, crouches to refill a canteen from a cracked fountain, and PRIVATE MIKHAIL, nineteen, thin as a rake, leans against a pillar with his eyes closed and his arms wrapped around a bundle of blankets and every so often his lips move, as though in prayer or in sleep.
6 A ¶ For a long time, none of them speaks.
* 7 A The wind lifts ash off the stones.
8 D OSEI: Lieutenant, it's almost dark.
9 D BRANDT: I know.
10 D OSEI: Do we stay?
11 D BRANDT: For tonight.
12 A ¶ She folds the map.
13 A Puts it in her jacket.
14 A Her fingers linger on the edge of the angel's stone wing, and then she takes them away.
15 D OSEI: It's a good place.
16 D BRANDT: It's a church.
17 D OSEI: It's a roof with no roof.
18 A ¶ She huffs a breath that might be a laugh.
19 A Mikhail opens his eyes.
20 D MIKHAIL: Sorry. I wasn't sleeping.
21 D OSEI: You were sleeping standing up.
22 D MIKHAIL: I was resting my eyes.
23 D OSEI: Resting. Mm.
24 A ¶ Mikhail slides down the pillar to sit.
25 A He unwraps the blankets, handing one to Osei without being asked.
26 A Osei nods thanks and shakes it out.
27 A They spread it on the stones beside the angel's head.
28 D BRANDT: Where's the radio?
29 D MIKHAIL: Dead. I tried again an hour ago.
30 D BRANDT: Batteries?
31 D MIKHAIL: Gone.
32 D BRANDT: Then we're on our own.
33 D OSEI: We have been.
34 A ¶ She looks at him.
35 A He keeps his eyes on the canteen.
36 D BRANDT: Sergeant, if I told you we'd be home by Christmas, would you believe me?
37 D OSEI: No, Lieutenant.
38 D BRANDT: Good.
39 A ¶ She smiles, small and tired.
40 A Mikhail, half-asleep, mumbles something and curls against the blanket.
41 D OSEI: What did he say?
42 D BRANDT: His mother's name, I think.
43 A ¶ Osei lays his own blanket over the boy's shoulders.
44 A He sits, back against the angel's stone hip, the canteen between his knees.
45 A Brandt slides down to sit beside him.
* 46 A ¶ For a time they watch the sky darken, the first star appearing between two broken columns.
47 D OSEI: My grandmother said every church has an angel left standing.
48 D BRANDT: Yours fell.
49 D OSEI: Then she's resting.
50 A ¶ Brandt rests her head against the cold stone of the wing.
51 A Her cigarette, long out, drops from her fingers.
52 A Nobody picks it up.

### SCENE s02270 | INT. HYPERBARIC CHAMBER, HARBOR CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OKONKWO, KAIMANA PELE, TOBY LINDQVIST, IOANA BALAN
* 1 A ¶ A steel cylinder the colour of old pewter, bolted to the floor of a converted fish-cannery.
* 2 A Portholes sweat.
* 3 A Somewhere behind the walls a compressor breathes in long, patient sighs.
4 A ¶ DR. ADAEZE OKONKWO, fifties, silver braids pinned under a surgical cap, kneels beside a gurney bolted to the chamber floor.
5 A Her reading glasses hang on a beaded cord.
6 A ¶ KAIMANA PELE, twenty-six, a commercial diver with shoulders like a harbour wall, lies strapped to it, skin the grey of wet slate.
7 A His fingers claw at the air.
8 A ¶ TOBY LINDQVIST, a gangly night nurse in oversized scrubs, hovers at the porthole outside, a radio handset pinched in his fist.
9 D KAIMANA: Doc. Doc, my hands. They're gone.
10 D ADAEZE: Stay with me, Kai. Look at my face.
11 D TOBY [O.S.] (through the speaker, thin and crackling): Pressure's dropping on the gauge. Adaeze, we're losing the seal.
12 D ADAEZE: Then close it, Toby!
13 A ¶ Kaimana convulses.
* 14 A The straps groan.
* 15 A A bubble of foam gathers at the corner of his mouth.
16 D ADAEZE [CONT'D]: Kai! Kaimana!
17 A ¶ IOANA BALAN, sixty, in a wool coat over a nightdress, pounds on the outer hatch with the flat of both hands.
18 A She is the diver's mother, and she has driven forty miles in slippers.
19 D IOANA (muffled): Let me in! He is my son!
20 D TOBY [O.S.]: Mrs. Balan, step back from the hatch!
21 D ADAEZE: Nobody opens that door!
22 D KAIMANA: Ma?
23 D ADAEZE: Oxygen up to one hundred. Now, Toby.
24 D ADAEZE: Breathe, Kai, slow, in through the nose!
25 D KAIMANA: I can't, I can't, Doc, it's too tight!
* 26 A ¶ A valve shrieks.
* 27 A The needle shivers, climbs, steadies.
* 28 A The compressor finds its rhythm again and the whole cylinder seems to exhale.
29 A ¶ Kaimana's back arches once, then settles against the gurney.
30 A His fingers uncurl.
31 A Colour seeps back into his face like tea into water.
32 D KAIMANA [CONT'D] (a whisper): I felt that. My hands. I felt that.
33 D ADAEZE: Good. Keep feeling.
34 A ¶ Adaeze sits back on her heels.
35 A She lets her glasses fall against her chest and presses both palms to her eyes.
36 D TOBY [O.S.]: Gauge is holding, Adaeze. We're okay.
37 A ¶ Outside the porthole, Ioana stops pounding.
38 A She lays her forehead against the cold glass and says something in Romanian to no one.
39 D IOANA (softly): Slava Domnului.

### SCENE s02271 | EXT. MISSOURI RIVER FERRY LANDING - DUSK
Detected names (may be incomplete or contain aliases): HOLLIS CRANE, PERPETUA VANCE, ELIAS TWOCROWS
* 1 A ¶ A flat-bottomed ferry is chained to a cottonwood stump, rocking on brown water the width of a county.
* 2 A The sky has gone the colour of a bruise.
3 A ¶ HOLLIS CRANE, lean and sun-cured, leans on the ferry rail.
4 A He wears a gun he has not touched in nine years.
5 A He watches the far bank without blinking.
6 A ¶ A woman stands at the ramp with a carpetbag in each hand.
7 A PERPETUA VANCE, forty, black mourning dress, hat pinned hard.
8 A She sets down one bag.
9 A She keeps the other.
10 D PERPETUA: You're the ferryman.
11 D HOLLIS: Was.
12 A ¶ He spits over the rail.
* 13 A The brown water takes it without comment.
14 D PERPETUA: Then who is.
15 D HOLLIS: Nobody. River's closed since the Tuesday flood. Company let us all go.
16 A ¶ She looks at the chain.
17 A She looks at him.
18 A She says nothing, which is its own kind of answer.
19 A ¶ She lifts the second bag and sets it on the plank between them.
* 20 A The latch is open a finger's width.
* 21 A Inside, the blued steel of a revolver catches the last light.
22 D HOLLIS [CONT'D] (quiet): Ma'am.
23 D PERPETUA: My husband crossed here a week ago. The man who took his fare. I'd like a word.
* 24 A ¶ A shout rolls over the water from the far bank, flattened by distance.
25 D ELIAS TWOCROWS [O.S.] (hailing): Hollis! Is that her? Is that the widow?
26 A ¶ He does not turn.
27 A His jaw works.
28 A The hand that rests on the rail begins, very slowly, to slide toward his hip.
29 D PERPETUA: Who is that?
30 D HOLLIS: My brother.
31 D ELIAS TWOCROWS [O.S.] (nearer, a rifle bolt clacking): Don't let her on the boat, Hollis!
32 A ¶ She steps onto the ferry.
* 33 A The planks complain.
34 A She puts her hand on the bag.
35 D PERPETUA: Then it was you who took the fare.
36 D HOLLIS: I took it for him.
37 A ¶ He draws.
38 A She draws.
* 39 A A crack splits the dusk, then another, and the cottonwood stump fountains bark.
40 A The chain snaps and the ferry lurches free, spinning into the current with the two of them still standing, still firing, on its drifting deck.

### SCENE s02272 | INT. RING STATION GREENHOUSE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER IRENKA VOSS, ENGINEER DESMOND ACHEAMPONG, BOTANIST LIN MEIHUA, PILOT RAFAEL ORTEGA, RAFI, NOOR AL-FARSI
* 1 A ¶ Rows of tomato vines under purple grow-lights.
* 2 A A curved window shows the dark and a slow turning arc of stars.
* 3 A A red warning strip pulses along the ceiling.
4 A ¶ COMMANDER IRENKA VOSS, fifties, grey crop, stands at the control panel.
5 A ENGINEER DESMOND ACHEAMPONG, thirties, grease on his sleeves, crouches by a coolant pipe.
6 A BOTANIST LIN MEIHUA, twenties, cradles a seedling tray.
7 A PILOT RAFAEL ORTEGA, called RAFI, leans in the doorway.
8 A Tech NOOR AL-FARSI, nineteen, sits cross-legged on a bench with a tablet.
9 D VOSS: Status.
10 D DESMOND: Coolant line's cracked. It's venting into the soil bed.
11 D LIN: That's our whole crop.
* 12 A ¶ The pipe bursts.
* 13 A A white jet of freezing mist fills the aisle.
14 A Desmond and Lin dive in opposite directions and slam into the shelving.
15 A Voss and Rafi drop to the floor.
16 A Noor yanks her knees up to her chest.
17 D RAFI: Cut the pump!
18 D NOOR: I can't, the panel's locked!
19 A ¶ Rafi and Desmond rush the pipe together, shoulders down, and clamp it between them with a jacket.
* 20 A The mist thins to a hiss.
21 A Voss and Lin crawl to the valve and haul it shut with both hands.
* 22 A ¶ Silence.
* 23 A The red strip stops pulsing.
24 D VOSS: Is anyone hurt?
25 D LIN: Just frozen.
26 A ¶ Desmond holds up a soaked tomato.
27 A He bites it.
28 A Everyone stares at him.
29 D DESMOND: Still good.
30 A ¶ Noor laughs first.
31 A Then all of them.

### SCENE s02273 | EXT. BOCCE COURT, FERRY DECK - AFTERNOON
Detected names (may be incomplete or contain aliases): TONINO FERRARI, MARCELLO DELUCA, SIGNORA PAOLA, LUCA
* 1 A ¶ A strip of crushed oyster shell has been raked flat on the stern of a car ferry.
* 2 A Gulls wheel.
* 3 A The deck hums with the engine, and every bowl rolls a little to starboard.
4 A ¶ TONINO FERRARI, seventy, in a cardigan the colour of tobacco, crouches over the pallino.
5 A MARCELLO DELUCA, sixty-eight, his brother-in-law of forty years, stands with a bowl cradled against his belly like a sleeping cat.
6 A SIGNORA PAOLA, the self-appointed umpire, perches on a cooler with a tape measure.
7 A Beside her LUCA, nine, holds the scorecard.
8 D TONINO: You nudged it.
9 D MARCELLO: I breathed on it.
10 A ¶ Tonino rises.
11 A He does not look at Marcello.
12 A He looks at the bowl, at the pallino, at the tape.
13 A He hands the tape to Luca without a word.
14 D PAOLA: Measure.
15 A ¶ Luca stretches the tape.
* 16 A Marcello's bowl is closer by the width of a thumbnail.
17 A Tonino takes his own bowl and, with a slow, deliberate underarm, sends it at Marcello's.
* 18 A The shells crack.
19 A He knocks it sideways, over the rail and into the wake.
20 A ¶ He stands there with his arm still extended.
21 A Marcello turns slowly, his mouth open, and the whole deck goes quiet but for the engine.

### SCENE s02274 | INT. STAGE STATION KITCHEN, DRY CREEK - LATE MORNING
Detected names (may be incomplete or contain aliases): ODELL PRUITT, MAUDE TEAGUE, ZEBEDIAH HOLLOWAY, ZEB, BARNABY
* 1 A ¶ A one-room adobe with a cuckoo clock that has run seven minutes slow since the Grant administration.
* 2 A Flies drift in the heat.
* 3 A A cast-iron stove ticks as it cools.
4 A ¶ ODELL PRUITT, fifties, stationmaster, wipes a tin cup with a rag that is dirtier than the cup.
5 A At the table MAUDE TEAGUE, thirties, a seed-and-feed saleswoman in a dust-grey travelling dress, peels a boiled egg.
6 A ZEBEDIAH HOLLOWAY, called ZEB, eighty, hat on indoors, whittles a stick down to nothing.
7 D ODELL: Coach is late.
8 D MAUDE: Coach is always late.
9 D ZEB: Wheel, probably.
10 D MAUDE: Or the Piute crossing.
11 D ODELL: It's never the Piute crossing.
12 D ZEB: Might be the Piute crossing.
* 13 A ¶ A horn sounds, faint and flat, out on the road.
14 D BARNABY [O.S.] (far off): Hey the station! Hey, Odell!
15 D ODELL: There. Wheel.
16 D BARNABY [O.S.] (nearer): Axle! Lost the axle at Mesquite Wash!
17 D MAUDE: I told you it was a wheel.
18 D ZEB: Axle's near enough.
19 A ¶ Odell sets down the cup and takes the egg shell Maude offers without thinking.
20 A She sets the egg on the table.
21 A Zeb finishes whittling and examines the empty air where the stick was.
22 D ODELL (to himself): Another night, then.
23 D MAUDE: Is there stew?
24 D BARNABY [O.S.]: Is there stew?
25 D ODELL: There's stew.
26 D ZEB: There's always stew.
* 27 A ¶ The cuckoo clock coughs, produces one grey wooden bird, and retires without a sound.

### SCENE s02275 | INT. CRYO-VAULT, DEEP STORAGE - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT KESTREL, PRIYA NAIR, OLUWASEUN, SEUN, GUNNAR, TESS HALVORSEN, OLD MAN BRIGHT
* 1 A ¶ Frost.
* 2 A Rows of sleeper pods under blue light.
3 A Six figures in thermals move between them.
4 A ¶ SERGEANT KESTREL, scarred, ex-security.
5 A DR. PRIYA NAIR, wire-rimmed, hands shaking.
6 A OLUWASEUN, nicknamed SEUN, a maintenance rat.
7 A GUNNAR, silent, huge.
8 A TESS HALVORSEN, a trainee with a clipboard.
9 A OLD MAN BRIGHT, hundred and four, upright in a wheelchair.
10 D KESTREL: Everyone, check your pods. Count aloud.
11 D TESS: Four. Five. Six.
12 D PRIYA (muttering): All green. All green. Why is it all green.
13 D GUNNAR: Quiet.
14 D SEUN: Priya, you want me on the cooling loop?
15 D PRIYA: No. Stay here.
16 D BRIGHT (to the room): Count again.
17 A ¶ They freeze.
* 18 A Every pod lid is open.
* 19 A Every pod is empty.
20 A Kestrel and Gunnar swing their lights at each other, back to back, and the beams cross on the same blank white wall.
21 D KESTREL (low): Then who's been counting us?

### SCENE s02276 | INT. CORPORATE BALL PIT, SYNERGY FLOOR - DAY
Detected names (may be incomplete or contain aliases): DEBORAH PLUMMER, KHALID RASHAD, BRAD WEXLER
* 1 A ¶ A glass-walled "ideation lounge" holding forty thousand primary-coloured plastic balls.
* 2 A A motivational neon sign reads FAIL FORWARD.
3 A ¶ DEBORAH PLUMMER, forties, VP of People, stands on a bench with a clicker, announcing the fun.
4 A KHALID RASHAD, thirty, sits waist-deep in the balls with a laptop balanced on his knees, typing, while BRAD WEXLER, intern, wades past with a tray of lukewarm kombucha, drops two cups, apologises, drops a third, and sinks quietly out of sight.
5 D DEBORAH: Okay, team! Quarterly Wins!
6 D KHALID: Deb, I have a deadline.
7 D DEBORAH: This is the deadline.
8 D KHALID: This is a pit.
9 A ¶ Brad's head resurfaces.
10 A A red ball sits on it like a hat.
11 D BRAD: I think I've lost a shoe.

### SCENE s02277 | EXT. VILLAGE PIER, TUG-OF-WAR - SUNSET
Detected names (may be incomplete or contain aliases): SAOIRSE KEANE, FINBARR MCGRATH, DONAL, NUALA
* 1 A ¶ A rope as thick as a man's wrist lies across the weathered planks of a fishing pier, its centre marked with a red rag.
* 2 A Below, the tide slaps the pilings.
3 A A crowd of villagers presses along the railings, quiet.
4 A ¶ SAOIRSE KEANE, forty, anchor of the harbour team, wraps the rope twice round her forearm and plants her boots against a plank she has used for twenty years.
5 A Opposite her, FINBARR MCGRATH, her cousin and rival, spits on his palms and rubs them together, grinning like a man who has already won.
6 A Behind him the rest of his team braces.
7 A At the rail, old DONAL, the referee, lifts a handkerchief, and beside him NUALA, thirteen, Saoirse's daughter, grips the rail so hard her knuckles whiten.
8 D DONAL: Take the strain!
9 A ¶ Saoirse leans back.
10 A Finbarr leans back.
* 11 A The red rag does not move.
* 12 A A gull settles on a piling to watch.
13 D FINBARR: Still got your mother's hands, Saoirse.
14 D SAOIRSE: And you've still got her mouth.
* 15 A ¶ The rope groans.
16 A A plank cracks under Finbarr's heel and the rag slides a foot toward the harbour side.
17 A Nuala shrieks.
18 A Saoirse digs in, the cords of her neck standing out, her boots skating on salt-slick wood.
19 D NUALA: Mam, don't let go!
20 D FINBARR: Let go, Saoirse! Let go before you're hurt!
21 D SAOIRSE (through her teeth): Not this year, Fin.
* 22 A ¶ The rag crosses the line.
23 A Finbarr's team stumbles.
24 A Then the old rope, frayed through twenty summers, parts with a gunshot crack, and both teams go down in a tangle of limbs and oilskin, Saoirse across her cousin's chest, and the pier erupts.
25 D DONAL: No contest!
26 D NUALA (laughing, crying): Mam!

### SCENE s02278 | INT. MATTRESS SHOWROOM, BACK OFFICE - DAY
Detected names (may be incomplete or contain aliases): MORTON GRIGGS, DELPHINE ABERNATHY, WALLY, TSUJI
* 1 A ¶ A windowless room behind rows of beds.
* 2 A A desk, three chairs, a poster of a smiling sheep.
* 3 A The air smells of fresh foam and old coffee.
4 A ¶ MORTON GRIGGS, fifties, in a short-sleeved shirt and a tie that has lost an argument with a stapler, sits behind the desk.
5 A He is the store manager.
6 A Facing him, in matching chairs, are DELPHINE ABERNATHY, thirties, an assistant manager with a binder, and WALLACE "WALLY" TSUJI, twenties, a salesman with a neck brace.
7 A ¶ Morton folds his hands.
8 A He looks at both of them, and he sighs.
9 D MORTON: We are here to resolve a grievance.
10 D DELPHINE: I filed the grievance.
11 D WALLY: I filed the counter-grievance.
12 D MORTON: There's a form for that?
13 D DELPHINE: There is now.
14 A ¶ Wally shifts.
15 A His neck brace creaks.
16 A He glares at Delphine, then at the sheep poster, as though looking for an ally.
17 D WALLY: Is it fair to say that a man has a right to nap on a display bed?
18 D MORTON: No.
19 D WALLY: Even during a lull?
20 D MORTON: Especially during a lull.
21 D DELPHINE: He was snoring, Morton. Customers thought it was the Sleep Number demo.
22 D WALLY: The Sleep Number demo was broken.
23 D DELPHINE: Because you broke it.
24 D WALLY: I fell asleep on it. That's different.
25 D MORTON: How is that different?
26 D WALLY: I wasn't being malicious.
27 D DELPHINE: You were being unconscious.
28 D MORTON: Okay. Okay. Let me read the incident report.
29 A ¶ Morton picks up a sheet of paper.
30 A Delphine slides her binder forward an inch.
31 A Wally leans back and the neck brace creaks again.
32 D MORTON [CONT'D]: "At 2:14 PM, Mr. Tsuji was observed in Display Bed Nine, horizontal, with a pillow over his face."
33 D WALLY: It was a decorative pillow.
34 D MORTON: "Customers were advised that the model was a sample of our new Eternal Rest line."
35 D DELPHINE: Several customers wished to purchase it.
36 D MORTON: Wait. They did?
37 D DELPHINE: Four units. A man from the funeral home on Fifth asked about wholesale.
38 D MORTON: Well.
39 D WALLY: That's a win.
40 D DELPHINE: It is not a win. It's a liability.
41 D MORTON: It's a win and a liability. Both can be true.
42 D WALLY: That's what I've been saying.
43 D DELPHINE: You have not been saying that. You have been saying "zzz."
44 D MORTON: Let's focus. Delphine, what do you want?
45 D DELPHINE: A written apology. And I want him to stop sleeping in the store.
46 D MORTON: Wally?
47 D WALLY: I want my sick days restored. And a new neck brace. This one pinches.
48 D MORTON: Why do you need a neck brace?
49 D WALLY: I fell off the bed.
50 D DELPHINE: He rolled off Bed Nine during a nap and tried to file a worker's comp claim.
51 D MORTON: It's a claim, Delphine. We have to hear it.
52 D DELPHINE: Hear it? He was asleep.
53 D WALLY: It was a work-related sleep. I was dreaming about quotas.
54 D MORTON: Wally, that's not a thing.
55 D WALLY: It is if you're committed.
56 A ¶ Morton rubs his temples.
57 A He picks up a pen and writes something.
58 A He tears the page from the pad and hands it to Delphine, then writes another and hands it to Wally.
59 D DELPHINE: What's this?
60 D MORTON: Your apology.
61 D WALLY: What's this?
62 D MORTON: Yours.
63 D DELPHINE: I don't owe him an apology.
64 D MORTON: You gave him a Sleep Number quote he couldn't afford.
65 D DELPHINE: That was a clerical error.
66 D MORTON: So is this. Sign.
67 A ¶ They sign.
68 A Morton collects the papers.
69 A He stands, and the chair rolls back into the filing cabinet with a bang.
* 70 A The sheep on the poster goes on smiling.
71 D MORTON [CONT'D]: Meeting adjourned. Everyone back to the floor.
72 D WALLY: Can I sit down on a bed first?
73 D MORTON: No.
