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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0126.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00762 | INT. FORWARD BUNKER - BELGIAN FARMLAND - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN MARIANA ESCOBAR, SERGEANT FITZROY BELL, CORPORAL YASIR KARIMI, PRIVATE LENNART SKOG, MAJOR TREMAINE
* 1 A ¶ Sandbags lined with straw.
* 2 A A paraffin stove smokes in the corner.
* 3 A A radio set squats on an ammunition crate beside a tin of biscuits.
* 4 A Outside, a pale mist drifts over silent fields.
5 A ¶ CAPTAIN MARIANA ESCOBAR, forties, sits on a crate cleaning a pistol with a rag.
6 A SERGEANT FITZROY BELL, fifties, scratches at his stubble.
7 A CORPORAL YASIR KARIMI, twenties, sleeps against a wall with his boots on.
8 A PRIVATE LENNART SKOG, nineteen, stares through the firing slit at the grey horizon.
9 D MARIANA: Fitz, anything on the net?
10 D FITZROY: Static, ma'am. Nothing but.
11 D MARIANA: Quiet is good.
12 D LENNART: Quiet is strange, Captain.
13 D MARIANA: Private, it's dawn. Let the war have its tea.
14 A ¶ Fitzroy chuckles.
15 A He pries open the biscuit tin and passes it around.
16 A Yasir wakes, accepts one, and crunches it.
* 17 A The stove ticks.
18 D MAJOR TREMAINE [V.O.] (over radio, crackling): Bunker Seven, this is Command. Do you read?
19 A ¶ Everyone freezes.
20 A Mariana lunges for the handset.
21 D MARIANA: Command, this is Seven. Reading you.
22 D MAJOR TREMAINE [V.O.] (over radio): Captain, the armistice has been signed. Hostilities cease at eleven hundred.
* 23 A ¶ Silence.
24 A Yasir lowers the biscuit.
25 A Lennart turns from the slit.
26 D FITZROY (softly): Eleven.
27 D MARIANA: Say again, Command.
28 D MAJOR TREMAINE [V.O.]: It's over, Captain. It's over.
29 A ¶ Mariana sets the handset down.
30 A She looks at the others, one by one.
* 31 A Nobody speaks.
32 A Then, at the slit, Lennart begins to laugh, and cannot stop.

### SCENE s00763 | INT. BRIDAL SHOP - FITTING ROOM - DAY
Detected names (may be incomplete or contain aliases): ADELAIDE VOSSBERG, GERTRUDE, WOMAN, TILLIE
* 1 A ¶ A velvet-curtained cubicle, mirrors on three walls.
* 2 A A wedding gown on a hanger.
3 A ADELAIDE VOSSBERG, twenties, in a slip, stands on the dais, arms out.
4 A Her mother GERTRUDE, fifties, kneels with a mouthful of pins.
5 D GERTRUDE: Stand still.
6 D ADELAIDE: I am standing still.
7 A ¶ A WOMAN in a sensible coat peers through the curtain.
8 A Sixties, hair in a bun, hands wringing.
9 A Neither of them has seen her before.
10 D WOMAN: Pardon me. Is this the Vossberg fitting?
11 D GERTRUDE: It is. And you are?
12 D WOMAN: Just someone who used to know the groom's father.
13 A ¶ Gertrude's pins clatter to the floor.
14 A Adelaide turns on the dais.
15 D ADELAIDE: Mother?
16 D GERTRUDE (to the Woman, carefully): You'd better come in.
17 A ¶ The Woman steps inside, letting the curtain fall.
18 A She holds out a gloved hand.
19 D WOMAN: Tillie. Tillie Marchetti.
20 D GERTRUDE (not taking it): I know who you are.
21 D TILLIE: Then you know why I'm here.
22 D TILLIE (gently, to Adelaide): He asked me to give you something, dear.
23 A ¶ Adelaide looks from one to the other in the three mirrors, six faces, six mothers.
24 D ADELAIDE: Will someone please tell me what's going on?

### SCENE s00764 | INT. NATATORIUM - POOL DECK - 5:30 A.M.
Detected names (may be incomplete or contain aliases): COACH RENATA BOSCH, MARCUS TULLY, DOLORES AMADI, NEW KID, SUNNY
* 1 A ¶ Chlorine fog.
* 2 A Blue water, glass-flat.
* 3 A A scoreboard reading 00:00.00.
4 A On the bench: three swimmers wrapped in towels.
5 A COACH RENATA BOSCH, forties, with a whistle and a stopwatch, paces the deck.
6 A ¶ MARCUS TULLY, twenties, anchor leg, stares at the water.
7 A DOLORES AMADI, twenties, lead-off, blows into her hands.
8 A A NEW KID, sixteen, in a team parka too big for him, sits at the very end of the bench with his goggles in his lap.
9 D RENATA (to the group): Warm-up in five. Four hundred easy, then pace sets.
10 D MARCUS (to Dolores, low): You hear about the sponsor?
11 D DOLORES: Pulled out.
12 D NEW KID (to himself): Don't ask. Don't ask.
13 D RENATA: Kid. You are?
14 D NEW KID: Sunny.
15 D RENATA: Sunny what?
16 D SUNNY: Sunny Park.
17 D RENATA: Sunny, you swim third leg.
18 D MARCUS: Third? That's my relay split.
19 D DOLORES: That's what I said.
20 D RENATA: I'm not asking.
21 D MARCUS: Coach, he's sixteen.
22 D SUNNY: Seventeen in March.
23 D DOLORES: Marcus, he's fast.
24 D MARCUS: I didn't say he wasn't.
25 D RENATA (blowing the whistle): Everybody in!
26 A ¶ They all drop their towels and dive.
27 A Sunny hesitates.
28 A Renata stops beside him.
29 D RENATA [CONT'D]: Sunny. It's only water.
30 D SUNNY (muttering): That's what scares me.

### SCENE s00765 | INT. BOXING RING - CORNER - NIGHT
Detected names (may be incomplete or contain aliases): PRISS, VANTONGEREN, MEL BRANDVOLD
* 1 A ¶ A hot arena.
* 2 A A roaring crowd that is only noise.
* 3 A Bright ropes, spit buckets, a canvas stained the colour of old tea.
4 A ¶ PRISCILLA "PRISS" VANTONGEREN, twenties, in red trunks, sits on the stool between rounds, chest heaving, a swollen eye closing.
5 A She wears a wireless earpiece.
6 A Her coach, old MEL BRANDVOLD, sixty-eight, stands at ringside two states away on a hospital bed phone, his voice crackling through the bud.
7 D MEL [V.O.] (over earpiece): Priss. Priss, look at me. Can you see?
8 D PRISS: I can see.
9 D MEL [V.O.]: How many fingers?
10 D PRISS: I can't see you, Mel. You're in Tulsa.
11 D MEL [V.O.]: Humour me.
12 D PRISS: Three.
13 D MEL [V.O.]: Good girl. Listen. Round seven. She drops her left every time she throws the hook.
14 D PRISS: I know.
15 D MEL [V.O.]: Step in and counter.
16 D PRISS: What if I'm too tired?
17 D MEL [V.O.]: Priss, I've seen you tired. I've never seen you quit.
* 18 A ¶ The bell rings.
19 A She rises, mouthguard in, gloves up.
20 A Across the ring her opponent circles, taller, quicker.
21 A Priss bobs, weaves, takes a jab on the shoulder, slips a second, and steps in.
22 A The hook sails past her ear.
23 D PRISS (muttering): Now.
24 A ¶ She throws the right.
* 25 A It lands.
26 A The opponent staggers, drops her guard, and Priss follows with the left, a short chopping blow that snaps the head back and sends the crowd to its feet.
27 D MEL [V.O.] (over earpiece, shouting): That's it! That's my girl!
28 A ¶ The referee steps between.
29 A Priss stands over her opponent, trembling.

### SCENE s00766 | INT. NIGHT FERRY - CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE ISAAC MORROW, LIONEL FARR
* 1 A ¶ A cavernous steel hold.
* 2 A Dozens of parked cars bolted to the deck.
* 3 A The engine thrums through the floor.
* 4 A Chains rattle.
* 5 A A single bulb sways overhead.
6 A ¶ DETECTIVE ISAAC MORROW, forties, trench coat, hand on his holster, walks slowly between the cars.
7 A At the end of the row, LIONEL FARR, thirties, in a leather jacket, leans on the bonnet of a black sedan, arms crossed.
8 A He looks at Isaac.
9 A He does not move.
10 D ISAAC: Lionel.
11 D LIONEL: Isaac.
12 D ISAAC: You're a long way from home.
13 D LIONEL: So are you.
14 A ¶ Isaac stops ten feet away.
15 A Lionel uncrosses his arms, hands open, empty.
16 D ISAAC: Where's the ledger?
17 D LIONEL: Where's your warrant?
18 D ISAAC: I don't need one on a boat.
19 D LIONEL: You do if I'm in international waters.
20 D ISAAC: We're nine miles out.
21 D LIONEL: Twelve is the limit.
22 A ¶ Isaac says nothing.
* 23 A The hull groans.
* 24 A A wave slaps the steel.
* 25 A The bulb swings over their faces, light, shadow, light.
26 D LIONEL [CONT'D]: You came alone.
27 D ISAAC: So did you.
28 D LIONEL: Not exactly.
* 29 A ¶ Behind Isaac, a car door clunks.
30 A He spins, gun half drawn.
* 31 A Nobody.
32 A Lionel laughs.
33 D LIONEL [CONT'D]: Relax. It's the sea.
34 A ¶ Isaac turns back.
35 A His hand shakes slightly.
36 A He steadies it.
37 D ISAAC: Hand over the ledger and I let you walk off in Calais.
38 D LIONEL: And if I don't?
39 D ISAAC: Then I walk off. And you don't.
40 A ¶ Lionel studies him.
* 41 A A long moment.
42 A He reaches slowly into his jacket.
43 A Isaac draws.
44 A Lionel freezes, hand inside his coat.
45 D ISAAC [CONT'D]: Slow.
46 D LIONEL: I'm slow.
47 A ¶ He draws out a small black book.
48 A Holds it up between two fingers.
49 D LIONEL [CONT'D]: Here.
50 D ISAAC: Toss it.
51 A ¶ Lionel tosses it.
* 52 A It lands at Isaac's feet.
53 A Isaac kneels, picks it up, flips through.
54 A His shoulders drop an inch.
55 D ISAAC [CONT'D]: It's blank.
56 D LIONEL: Of course it's blank.
57 A ¶ Isaac looks up, furious.
58 A Lionel is already laughing, the sound ricocheting off the steel.
59 A Isaac lowers the gun, then, slowly, he begins to laugh too.
60 A Two men in a steel hold, laughing at a blank book.
61 D ISAAC: You're a bastard, Lionel.
62 D LIONEL: And you're still a detective.
63 A ¶ He pushes off the sedan and walks past Isaac toward the stairs.
64 A Isaac lets him go.

### SCENE s00767 | INT. SUBMARINE USS HALCYON - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN DOMINIC ARCHER-LYLE, NOLAN, AUGUSTO
* 1 A ¶ Red battle lamps.
* 2 A Pipes sweating.
* 3 A Dials and valves everywhere.
* 4 A The hull creaks like an old ship's timbers.
5 A ¶ CAPTAIN DOMINIC ARCHER-LYLE, fifties, hands clasped behind his back, stands before the periscope well.
6 A LIEUTENANT PATRICIA "PAT" NOLAN, thirties, executive officer, checks a depth gauge.
7 A From a speaker in the bulkhead, the voice of the sonar operator, unseen.
8 D ARCHER-LYLE (to the room): Gentlemen, we hold at two hundred feet. Silent running.
9 D NOLAN: Aye, sir.
10 D ARCHER-LYLE: Mr. Nolan, report.
11 D NOLAN: All systems nominal, Captain. Battery at seventy percent.
12 D ARCHER-LYLE (muttering): Seventy. Enough for a day.
13 D AUGUSTO [V.O.] (over intercom): Control, sonar. Surface contact, bearing one-two-zero. Single screw. Slow.
14 D ARCHER-LYLE: Merchant?
15 D AUGUSTO [V.O.]: Can't say, sir. No transponder.
16 D ARCHER-LYLE: Pat, plot it.
17 D NOLAN: Plotting.
18 A ¶ She bends over a chart table.
* 19 A A ruler, a pencil, a quiet scratch.
* 20 A The sub rocks gently.
21 D ARCHER-LYLE (low): Quiet night.
22 D NOLAN: Too quiet, sir?
23 D ARCHER-LYLE: Never say that on my boat.
24 A ¶ She smiles.
* 25 A A drip falls from a pipe onto the chart.
26 A She wipes it.
27 D AUGUSTO [V.O.] (over intercom): Control, contact is stationary. Engines idle.
28 D ARCHER-LYLE: Odd.
29 D NOLAN: Waiting for us?
30 D ARCHER-LYLE: Or for someone else.
* 31 A ¶ Silence.
* 32 A The lamps pulse.
33 A Nolan straightens.
34 D NOLAN: Captain, request permission to raise the scope.
35 D ARCHER-LYLE: Granted. Slowly.
36 A ¶ She turns the wheel.
* 37 A The periscope hums up.
38 A She folds the handles and puts her eye to it.
39 A Her face tightens.
40 D ARCHER-LYLE [CONT'D]: Well?
41 D NOLAN: It's a hospital ship, sir.
42 D ARCHER-LYLE: A hospital ship.
43 D NOLAN: White hull. Red crosses. All lit up.
44 D ARCHER-LYLE (to himself): Of course.
45 D AUGUSTO [V.O.] (over intercom): Control, sonar. New contact. Fast. Bearing zero-nine-five. Closing.
46 D NOLAN: Captain!
47 D ARCHER-LYLE: Range?
48 D AUGUSTO [V.O.]: Two thousand yards.
49 D ARCHER-LYLE: Is it hostile?
50 D AUGUSTO [V.O.]: It's ours, sir. Destroyer.
51 D NOLAN: Then why is it running dark?
52 D ARCHER-LYLE (very quietly): Because it's escorting.
53 D NOLAN: Escorting what?
54 D ARCHER-LYLE: The hospital ship, Pat. Which means--
55 D AUGUSTO [V.O.] (over intercom, sharp): Torpedo in the water! Bearing one-eight-zero! Not ours!
56 D ARCHER-LYLE (to the room): Dive! Dive! Rig for impact!
* 57 A ¶ Klaxons.
* 58 A Red lamps flash.
* 59 A The deck tilts.
60 A Nolan grabs a rail.
61 D NOLAN: Captain, they're targeting the ship!
62 D ARCHER-LYLE: Then we are the only thing in the way.
63 D NOLAN: Sir?
64 D ARCHER-LYLE: Come to heading one-eight-zero. Full ahead.
65 D NOLAN: Sir, that's suicide!
66 D ARCHER-LYLE: That is the job.
67 A ¶ She stares at him.
68 A He stares back.
69 A She breathes in once.
70 D NOLAN: Aye aye, sir.
71 A ¶ She spins the wheel.
* 72 A The engines roar.
* 73 A The sub heels hard.
* 74 A In the periscope's last frame, a white hull glides unknowing through the dark, and between it and the death streaking toward it, a long grey shape cuts across.

### SCENE s00768 | INT. FLOODED SUBWAY TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ROSARIO VEGA, TIMOTHY BANKS, BEATRIX ORLOV, DISPATCH
* 1 A ¶ Black water to the knees.
* 2 A Emergency lights flicker amber on slimed tiles.
* 3 A A stalled train lies like a dead worm along the track.
4 A ¶ Three survivors wade toward an iron ladder: ROSARIO VEGA, thirties, nurse, carrying a child's backpack; TIMOTHY BANKS, forties, accountant, limping; BEATRIX ORLOV, seventies, retired conductor, steady as a rock.
5 D BEATRIX: The ladder is at the next platform.
6 D TIMOTHY: How far?
7 D BEATRIX: Two hundred yards.
8 D ROSARIO: He's bleeding.
9 D BEATRIX: We all are.
10 A ¶ Timothy grimaces.
11 A His hand is wrapped in a torn shirt.
12 A Rosario takes his arm and slings it over her shoulder.
13 A They move.
* 14 A ¶ A radio crackles from Beatrix's belt.
15 D DISPATCH [V.O.] (over radio): Unit nine, unit nine. Do you copy?
16 A ¶ Beatrix grabs it.
17 D BEATRIX: Dispatch. We're alive. Three of us. Tunnel six.
18 D DISPATCH [V.O.] (over radio): Copy. Rescue is en route. Stay put. Ten minutes.
19 D TIMOTHY: Ten minutes?
20 D ROSARIO: We can wait ten.
21 D TIMOTHY: The water's rising.
22 D ROSARIO: It's been rising an hour.
23 D BEATRIX: She's right. It's slowed.
24 A ¶ They stop on a ledge above the tracks and sit in a line.
* 25 A For a moment there is peace.
26 A Rosario fishes a granola bar from the backpack, breaks it in three, hands out the pieces.
27 A They chew in silence.
28 D TIMOTHY: This is nice.
29 D BEATRIX: Don't.
30 D TIMOTHY: What?
31 D BEATRIX: You'll jinx it.
32 A ¶ Rosario smiles.
33 A Timothy smiles.
34 A Beatrix doesn't.
35 D DISPATCH [V.O.] (over radio, urgent): Unit nine, new report. Upstream dam is failing. Move to high ground immediately.
36 D ROSARIO: There is no high ground.
37 D BEATRIX: There is a ladder.
38 D TIMOTHY: I can't climb.
39 D ROSARIO: Yes you can.
40 D BEATRIX: Yes you can.
* 41 A ¶ A distant roar rolls down the tunnel, wind pushing ahead of water.
* 42 A The amber lights shiver.
43 A Rosario hauls Timothy upright.
44 A Beatrix is already wading.
45 D BEATRIX [CONT'D]: Run!

### SCENE s00769 | EXT. SLED-DOG CHECKPOINT - ALASKAN WILDERNESS - DAWN
Detected names (may be incomplete or contain aliases): MUSHER HALVARD OKONKWO-REID, VET IMELDA TORRES-BAIRD, GRAHAM FELLOWES, RACE CONTROL
* 1 A ¶ A log cabin half-buried in drift.
* 2 A Sled dogs asleep in curled rows.
* 3 A Smoke rises from a chimney.
* 4 A Race flags snap in a thin wind.
5 A ¶ MUSHER HALVARD OKONKWO-REID, thirties, sits on his sled, dog booties in his lap.
6 A Beside him, VET IMELDA TORRES-BAIRD, fifties, listens to a husky's chest with a stethoscope.
7 A Official GRAHAM FELLOWES, sixties, stands at the checkpoint with a clipboard.
8 D GRAHAM: You're twelve minutes ahead.
9 D HALVARD: That's good.
10 D GRAHAM: That's very good.
11 D IMELDA: He's sound. Lungs are clear.
12 D HALVARD: Thank you.
13 D IMELDA: She's your lead dog?
14 D HALVARD: Aurora. Eight years.
15 D IMELDA: She's tired.
16 D HALVARD: She's always tired. She never shows it.
* 17 A ¶ A radio on Graham's belt hisses.
18 D RACE CONTROL [V.O.] (over radio): Checkpoint Four, Race Control. Be advised: Musher Delacroix is withdrawn. Repeat, withdrawn.
19 D GRAHAM: Copy.
20 D HALVARD: Delacroix? He was my main rival.
21 D GRAHAM: Was.
22 D HALVARD: What happened?
23 D GRAHAM: His team went through the ice.
* 24 A ¶ Silence.
25 A Halvard lowers the booties.
26 A Imelda lifts her stethoscope from Aurora's chest.
27 D IMELDA: Oh, no.
28 D HALVARD: Is he--
29 D GRAHAM: Alive. Frostbite. Two dogs lost.
30 D HALVARD: I'm sorry.
31 D GRAHAM: You can go.
32 D HALVARD: I think I should stop.
33 D GRAHAM: Now?
34 D IMELDA: Now?
35 D HALVARD: If the ice is bad ahead--
36 D GRAHAM: It's not bad. He cut a corner. He was in a hurry.
37 A ¶ Halvard stares at Aurora.
38 A Aurora stares at him.
39 A She yawns.
40 A Slowly he laces the booties.
41 D HALVARD: Then I won't be in a hurry.
42 A ¶ He rises and calls the team.
43 A One by one the huskies stand and shake out their coats.
* 44 A The sled creaks.
45 A Halvard steps onto the runners.
46 D HALVARD [CONT'D] (softly): Hike.

### SCENE s00770 | INT. FUNHOUSE MIRROR MAZE - NIGHT
Detected names (may be incomplete or contain aliases): BIRDIE OKAFOR, DEZ PRYCE, FERENC VASS, INSPECTOR TAMSIN WHITLOCK
* 1 A ¶ Cracked glass.
* 2 A Dead carnival.
* 3 A Flashlight beams ricochet everywhere.
4 A ¶ BIRDIE OKAFOR, 30s, tool belt, glitter on one cheek, scrapes at a mirror frame.
5 A Up a ladder.
6 A ¶ DEZ PRYCE, 20s, sweaty intern in a clown wig, "holds" the ladder.
7 D BIRDIE: Dez. Ladder.
8 D DEZ: Holding it, Birdie.
* 9 A ¶ The ladder wobbles.
10 A Dez grips harder.
* 11 A Wobbles more.
12 D BIRDIE: You hold it like a baby bird.
13 D DEZ: You're named Birdie. That's on you.
14 D BIRDIE: Squeegee. Now.
15 A ¶ Dez hands up a rubber chicken.
16 D BIRDIE [CONT'D]: Chicken. Not squeegee.
17 D DEZ: They were next to each other!
* 18 A ¶ Reflections.
19 A Six Dezes.
20 A Six Birdies.
* 21 A Total chaos.
22 D BIRDIE: Which one's you?
23 D DEZ (to all six): Hi.
* 24 A ¶ Footsteps.
* 25 A Squeaky soles.
* 26 A A pie, held like a weapon.
27 A ¶ FERENC VASS, 70s, tuxedo jacket over pajamas, owner of everything rotting here, shuffles in.
28 D FERENC: Who is breaking my maze?
29 D BIRDIE: Fixing, Mr. Vass. Fixing your maze.
30 D FERENC: Dez, is that my wig?
31 D DEZ: Borrowed, Mr. Vass.
32 D FERENC: Birdie, I pay for repairs. Not for humming.
33 D BIRDIE: I wasn't humming.
34 D DEZ: She was. Loudly.
35 A ¶ Ferenc offers the pie.
* 36 A Nobody takes it.
37 A Everybody looks at it.
* 38 A ¶ A flashlight beam, bright and official, slices through the mirrors.
39 A ¶ INSPECTOR TAMSIN WHITLOCK, 40s, clipboard, zero humor, steps in.
40 D TAMSIN: Fire marshal. Who's in charge?
41 A ¶ All three point at each other.
42 A Six Dezes point.
43 A Six Birdies point.
44 D FERENC (re: the pie): Pie?
45 D TAMSIN: Obviously.

### SCENE s00771 | INT. NIGHT FERRY - VENDING ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, ROSALIND ACHTERBERG, ELIAS, TEO, DECKHAND, PRIYA
* 1 A ¶ Humming machines.
* 2 A Sticky floor.
* 3 A Dark windows.
4 A ¶ A STRANGER, 50s, wet coat, sits on the bench.
5 A He stares at his hands.
6 A ¶ ROSALIND ACHTERBERG, 60s, steps in with a paper cup.
7 A She stops.
8 A Her grip tightens on the cup.
9 D ROSALIND: You're on my bench.
10 D STRANGER: I don't know you.
11 A ¶ She studies him.
12 A Something in his jaw.
13 D ROSALIND: Elias.
14 A ¶ He looks up.
* 15 A Long beat.
16 D ELIAS: Rosalind. You got old.
17 D ROSALIND: Twenty years will do that.
18 A ¶ TEO, 9, in a hoodie too big for him, peeks from behind the snack machine.
19 A He clutches a bag of chips.
20 D TEO: Grandma, who's that?
21 D ROSALIND: Nobody, Teo. Go find your mother.
22 D ELIAS (softly): Teo. Good name.
23 A ¶ A DECKHAND, PRIYA, 20s, orange vest, leans in.
24 D PRIYA: Ma'am, we dock in ten. Everyone okay?
25 A ¶ Rosalind sits.
26 A Not beside him.
27 A Near.
28 D ROSALIND: We're fine, Priya.
29 A ¶ He nods once.
30 A She sips.
* 31 A The ferry rocks.

### SCENE s00772 | INT. FISH MARKET - WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): MAURA KESSLER-DIAZ, TIB, NAGY
* 1 A ¶ Frost on everything.
* 2 A Hanging tuna like pale bells.
* 3 A Breath clouds.
4 A ¶ MAURA KESSLER-DIAZ, 40s, black parka, lockpick case, crouches at a floor safe.
* 5 A ¶ The heavy door SCRATCHES open.
* 6 A Light slices in.
7 A ¶ She kills her penlight.
8 A Flattens against the shelving.
* 9 A ¶ Boots.
* 10 A Slow.
11 A ¶ TIBOR "TIB" NAGY, 50s, market night manager, rubber apron, a gaff hook in one fist, walks in.
12 A ¶ He stops.
13 A Smells the air.
14 D TIB: I know somebody's in here.
* 15 A ¶ Silence.
* 16 A Drip.
* 17 A Fans.
18 D TIB [CONT'D]: Cameras went dark an hour ago. That's not luck.
19 D MAURA (stepping out): Hello, Tib.
20 A ¶ He doesn't flinch.
21 A Raises the hook.
22 D TIB: Maura. You left your hair dye in my sink last time.
23 D MAURA: Brown. Not my color.
24 D TIB: You're stealing from the wrong man.
25 D MAURA: Everybody says that.
26 A ¶ They circle.
* 27 A Tuna swing between them.
28 D TIB: Put the picks down.
29 D MAURA: Put the hook down.
30 A ¶ Neither does.
31 D TIB: Your brother used to say you talk too much.
32 D MAURA: My brother used to say a lot of things. Then he said nothing.
33 A ¶ Tib's jaw tightens.
34 D TIB: That wasn't me.
35 D MAURA: It was your safe.
36 A ¶ He lunges.
37 A She drops the case.
38 A They collide.
* 39 A The shelving rattles.
* 40 A Fish rain.
41 A ¶ They grapple, hook against forearm, her knee into his ribs.
42 D TIB [CONT'D] (grunting): Stop it!
43 D MAURA: You stop it!
44 A ¶ Tib slams her into a shelf.
* 45 A Ice cracks loose.
46 A They both slide to the floor.
47 A ¶ Both freeze.
* 48 A A distant sound: a truck engine.
49 D TIB: That's my deliveries.
50 D MAURA: You have deliveries at two a.m.?
51 D TIB: Fish don't keep hours.
* 52 A ¶ The engine idles.
* 53 A Voices outside, muffled.
54 A ¶ They look at each other.
* 55 A At the safe.
* 56 A At the door.
57 D MAURA: Who's out there, Tib?
58 D TIB (low): Not mine.
59 D MAURA: Then whose?
60 A ¶ Tib lowers the hook.
* 61 A A fraction.
62 D TIB: The man who owns the safe.
63 D MAURA: You said it was yours.
64 D TIB: I lied. Everybody does.
* 65 A ¶ The door handle turns.
66 A They both dive behind the tuna rack.
67 A ¶ They crouch shoulder to shoulder.
* 68 A Her breath on his collar.
69 A His hand over her mouth.
70 A ¶ She bites it.
71 D TIB [CONT'D] (whisper-yelling): Ow!
72 D MAURA (whisper): Quiet!
* 73 A ¶ A shadow crosses the frosted glass.
* 74 A Stops.
75 A ¶ They go still.
* 76 A Fans hum.
* 77 A A fish drips onto Maura's hood.
78 D TIB [CONT'D] (barely audible): When he opens the door, you take the left.
79 D MAURA: Why would I take anything from you?
80 D TIB: Because he kills us both if you don't.
* 81 A ¶ The shadow leans in.
* 82 A A knuckle taps the glass.
* 83 A Twice.
84 A ¶ Tib and Maura exchange a look.
85 A Then, together, they stand.
86 D MAURA: On three.
87 D TIB: One.
88 D MAURA: Two.
* 89 A ¶ The door swings wide.
90 A ¶ They launch.

### SCENE s00773 | INT. SKI GONDOLA CABIN - DUSK
Detected names (may be incomplete or contain aliases): KAVEH ZANDI, LINNEA STRAND, OSWIN PELL, JUNO MARCHETTI
* 1 A ¶ Stopped dead mid-cable.
* 2 A Wind knocks the glass.
* 3 A Four seats, four strangers, one dying lamp.
4 A ¶ KAVEH ZANDI, 30s, parka, nervous hands, sits facing the door.
5 A ¶ LINNEA STRAND, 40s, ski patrol jacket, radio at her hip, stands braced against the wall.
6 A ¶ OSWIN PELL, 60s, tweed under his shell, a briefcase chained to his wrist.
7 A ¶ JUNO MARCHETTI, 20s, snowboard across her knees, earbuds around her neck.
* 8 A ¶ The cabin lurches.
9 A Everyone grabs something.
10 D JUNO: That's not supposed to happen.
11 D LINNEA: It's wind. Stay seated.
12 A ¶ Kaveh stares at the briefcase.
13 D KAVEH: What's in the case?
14 D OSWIN: Paperwork.
15 D KAVEH: Chained paperwork.
16 D OSWIN: Very important paperwork.
17 A ¶ Linnea thumbs her radio.
* 18 A Static.
* 19 A Nothing.
20 D LINNEA: Base, this is Strand. Base?
* 21 A ¶ Static.
22 D JUNO: Phones?
23 A ¶ Kaveh, Juno, Oswin check phones.
24 A Three heads shake.
25 D JUNO [CONT'D]: No bars. At all.
26 D KAVEH: Someone cut the tower.
27 D LINNEA: Don't be dramatic.
28 D KAVEH: Nobody jams a tower by accident, Linnea.
29 D LINNEA: You don't know my name.
30 D KAVEH: It's on your jacket.
* 31 A ¶ Beat.
32 A Linnea glances down.
* 33 A Her own name patch.
34 A She exhales.
* 35 A ¶ The cabin sways.
36 A Oswin grips the chain.
37 D OSWIN: I was told this would be a quiet trip.
38 D JUNO: Told by who?
39 A ¶ Oswin says nothing.
40 D KAVEH: Open it.
41 D OSWIN: Absolutely not.
42 D KAVEH: Open it or I do.
43 A ¶ Kaveh stands.
* 44 A The cabin tilts.
45 A Linnea steps between them.
46 D LINNEA: Sit. Down.
47 A ¶ Kaveh lunges for the case.
48 A Oswin swings it.
* 49 A It cracks Kaveh's chin.
50 A Kaveh crashes into Linnea.
51 A Juno yanks her board up as a shield.
52 A ¶ They all collide into the glass.
* 53 A It groans.
54 A ¶ Everybody freezes.
55 D JUNO (whispering): Nobody move.
* 56 A ¶ A long crack spiderwebs across the window.
* 57 A Nobody breathes.
58 D OSWIN: I have a key.
59 D LINNEA: Then use it.
60 D OSWIN: It's in my coat. Left pocket.
61 D KAVEH: Don't touch his pocket.
62 D LINNEA: Shut up, Kaveh.
63 A ¶ Juno slides a hand into Oswin's left pocket.
64 A Pulls out a small brass key.
65 D JUNO: This it?
66 D OSWIN: Yes. Please. Careful.
67 A ¶ Juno unlocks the chain.
* 68 A The briefcase pops.
* 69 A Papers spill.
70 D LINNEA: Those are maps.
71 D KAVEH: Of the mountain.
72 D JUNO: Of the cable. Of the towers. With dates.
73 A ¶ Linnea picks one up.
74 A Reads.
75 A Her face goes still.
76 D LINNEA: This is my father's handwriting.
77 D OSWIN: I'm sorry.
78 D LINNEA: Explain.
79 D OSWIN: Your father sold the design flaw to my company twenty years ago. I came to see if it had held.
80 D KAVEH: It hasn't held.
81 D OSWIN: No.
82 D LINNEA: So this is a test.
83 D OSWIN: A confirmation.
84 D JUNO: You rode a broken gondola to confirm it's broken?
85 D OSWIN: I needed to see the cable fray with my own eyes before I testify.
86 D KAVEH: Testify to what?
87 D OSWIN: That the company knew. That your fathers knew. That every one of us in this cabin is here because of a decision made at a conference table.
88 D LINNEA: My father is dead.
89 D OSWIN: I know. That's why I came.
* 90 A ¶ The cabin shudders.
* 91 A A deep grind.
92 A Everyone looks up.
93 D JUNO: That's the cable.
94 D OSWIN: Yes.
95 D LINNEA: How long?
96 D OSWIN: Minutes.
97 A ¶ Kaveh bolts for the door.
98 A Linnea grabs his collar.
99 A He swings.
100 A She ducks.
101 A Juno wedges her board between them.
102 A ¶ They scuffle in the narrow aisle.
* 103 A The cabin tips hard to the left.
104 A All four slide to one side.
* 105 A ¶ The lamp dies.
* 106 A ¶ Darkness.
* 107 A Wind.
* 108 A A single metallic SNAP.
* 109 A ¶ Then silence.
* 110 A ¶ Then, far below, a motor kicks on.
* 111 A The cabin jerks.
* 112 A Moves.
* 113 A Upward.
* 114 A ¶ Light floods in from the station.
115 A ¶ They sit in a heap, panting.
116 D JUNO: We're moving.
117 D KAVEH: Who turned it on?
118 D LINNEA: Backup generator. Somebody finally got to it.
119 A ¶ She looks at Oswin.
120 A At the maps.
121 A At the three faces.
122 D LINNEA [CONT'D] (into radio): Base, Strand. Four aboard. We're fine. Everybody's fine.
123 A ¶ She tucks a map inside her jacket.

### SCENE s00774 | INT. COMMUNITY BREAD COOPERATIVE - FORMER BUS DEPOT - MORNING
Detected names (may be incomplete or contain aliases): ANSELMA DUARTE, TOMASZ WIERZBA, HADIYA BELLO, WINSTON FAIRWEATHER-LEE
* 1 A ¶ A long concrete bay where city buses once slept.
* 2 A Now: flour-dusted steel tables, a brick oven bolted into the old inspection pit, strings of laundry-line bunting.
* 3 A Tall windows turn the light the color of weak tea.
* 4 A The air smells of yeast and diesel ghosts.
5 A ¶ ANSELMA DUARTE, 60s, forearms like rolled dough, sleeves shoved up, scores loaves with a razor blade.
6 A She works without hurry.
7 A ¶ TOMASZ WIERZBA, 30s, soft-spoken, rimless glasses, weighs flour on a brass scale and writes numbers in a battered notebook.
8 A ¶ HADIYA BELLO, 20s, apron over a nursing-school sweatshirt, shapes rolls and yawns between each one.
9 D HADIYA: Do we have enough rye for Thursday?
10 D TOMASZ: I counted four sacks.
11 D ANSELMA: Three. Mrs. Pruitt took one for her church.
12 D TOMASZ: She didn't ask.
13 D ANSELMA: She never does.
14 D HADIYA: Three is fine. Thursday's mostly sourdough.
15 D TOMASZ: Thursday is the wedding.
16 D ANSELMA: Thursday is the wedding and the school order.
17 D HADIYA: Then we need more rye.
18 D TOMASZ: Then we need to call the mill.
19 D ANSELMA: The mill doesn't answer before ten.
20 D HADIYA: It's nine-forty.
21 D ANSELMA: Then we wait twenty minutes. Bread has taught me this.
* 22 A ¶ Nobody argues.
* 23 A The oven ticks.
24 A Hadiya sets another roll on the tray.
* 25 A ¶ The big bay door rattles.
* 26 A Light floods the floor.
27 A ¶ WINSTON FAIRWEATHER-LEE, 70s, cardigan, cane, a tote bag of library books, steps through.
28 A He squints up at the rafters like a man visiting a former church.
29 D WINSTON: I drove a Number 14 out of this depot for thirty-one years.
30 D ANSELMA: We know, Winston. You tell us every Tuesday.
31 D WINSTON: It's Wednesday.
32 D TOMASZ: He's right, it's Wednesday.
33 D HADIYA: Then why does it feel like Tuesday?
34 D ANSELMA: Because Tuesday's bread was better.
35 D WINSTON (touching a table): They've kept the pit.
36 D TOMASZ: The pit's the oven now.
37 D WINSTON: Mm. Good use of a pit.
38 A ¶ He sets a library book on the table.
39 A Hadiya reads the spine, nods, hands him a warm roll.
40 A He eats it in two bites.
* 41 A ¶ The oven ticks again.
42 A Anselma slides in another tray.

### SCENE s00775 | INT. PIGEON RACING CLUB - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA HUANG, HAROLD OYELARAN, MARISOL TREVI, DEACON PRATT, CORNELIA ASHBY-REID, TEDDY NKEMELU
* 1 A ¶ Folding chairs.
* 2 A A coffee urn.
* 3 A Trophies with tiny gilded birds.
* 4 A A banner reads "ANNUAL MEMBERSHIP MEETING."
5 A ¶ GLORIA HUANG chairs the meeting from a card table.
6 A She taps a gavel.
7 D GLORIA: Item four. The clubhouse roof.
8 A ¶ HAROLD OYELARAN, seventies, raises a hand.
9 A He wears a bow tie and a tired expression.
10 D HAROLD: I move we ignore it.
11 A ¶ MARISOL TREVIÑO, a retired postal worker, shakes her head.
12 A She holds a casserole dish on her lap.
13 D MARISOL: Harold, it rains inside.
14 D HAROLD: So do the birds.
15 A ¶ DEACON PRATT, the treasurer, adjusts his hearing aid and beams at no one.
16 D DEACON: What did he say?
17 A ¶ CORNELIA ASHBY-REID sits beside him, knitting something blue.
18 A She leans over and speaks into his ear.
19 D CORNELIA: Harold wants to ignore the roof.
20 D DEACON: Bold.
21 D GLORIA: We have eleven hundred dollars.
22 D MARISOL: The roofer wants four thousand.
23 D GLORIA: We could hold a raffle.
24 D HAROLD: We held one last year.
25 D GLORIA: And?
26 D HAROLD: Somebody won the casserole.
* 27 A ¶ All eyes drop to Marisol's dish.
28 A She shrugs.
29 D MARISOL: It was a very good casserole.
30 A ¶ TEDDY NKEMELU, the youngest member by forty years, sits in the back with a bag of seed.
31 A He pipes up.
32 D TEDDY: What if we race for it?
33 D GLORIA: Race what?
34 D TEDDY: The birds. Winner takes a share. Entry fee goes to the roof.
35 A ¶ Gloria looks at Harold.
36 A He looks at Marisol.
37 A She looks at the casserole.
38 A ¶ She nods first.
39 A Then he does.
40 A Then everyone.
41 A ¶ Gloria raises the gavel.
42 D GLORIA [CONT'D]: Motion carried. Somebody write that down.
43 A ¶ Cornelia holds up her knitting.
* 44 A It is, on closer look, a tiny sweater for a pigeon.
45 D CORNELIA: Already on it.

### SCENE s00776 | INT. ORBITAL SEED VAULT - GREENHOUSE RING - DAY
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, PETRA ISHIGURO, CALLUM ROUKEMA, MIREILLE TANDON, SUNDARAM OKONKWO, KESTREL
* 1 A ¶ Curved walls of white panel.
* 2 A Rows of sealed trays glow violet under grow-lamps.
* 3 A A slow hum, the sound of a place that never sleeps.
4 A ¶ ODALYS VANTERPOOL, 50s, station botanist, checks a tray with gloved hands.
5 A Her coffee has been cold for hours.
6 A ¶ PETRA ISHIGURO, 30s, engineer, kneels at an access panel with a tablet and a mouthful of screws.
7 A ¶ CALLUM ROUKEMA, 40s, commander, stands at the viewport.
8 A He doesn't look at the Earth below.
9 A ¶ MIREILLE TANDON, 20s, intern, carries a tray of seedlings in both hands, like something that might break.
10 A ¶ DR. SUNDARAM OKONKWO, 60s, medical officer, leans in the doorway.
11 A He watches Callum's back.
12 A ¶ KESTREL, a station AI, speaks from a speaker above the door.
13 A Calm.
14 A Warm.
15 A Exact.
16 D KESTREL [V.O.]: Humidity in ring three is up four percent.
17 D ODALYS: I see it.
18 D PETRA: I'll check the condensers.
19 A ¶ Callum turns from the window.
20 A He walks the row.
21 A His fingers brush a leaf.
22 A He stops at an empty tray.
23 D CALLUM: This one was labeled.
24 D ODALYS: It failed.
25 D CALLUM: It failed a month ago.
26 D ODALYS: Yes.
27 D MIREILLE: Should I log it?
28 D CALLUM: I did.
* 29 A ¶ Silence.
* 30 A The lamps buzz.
31 A Sundaram steps in, hands in his coat pockets.
32 D SUNDARAM: You didn't mention it at breakfast.
33 D CALLUM: Nothing to mention.
34 D SUNDARAM: Callum.
35 D CALLUM: Sundaram.
36 A ¶ They both speak at once.
37 D SUNDARAM: The lab results came back.
38 D CALLUM: The cargo window opens Friday.
39 D SUNDARAM: It would help if you slept.
40 D CALLUM: I'll check the manifest.
41 A ¶ Both stop.
42 A Neither moves.
43 A ¶ Petra, from the floor, pretends to read the tablet.
44 A Mireille shifts the seedlings to her other arm.
45 D ODALYS (not looking up): Mireille, those need water.
46 D MIREILLE: Right. Yes.
47 A ¶ She leaves in a hurry.
* 48 A The door sighs shut.
49 A ¶ Sundaram unclasps his hands.
50 A Holds something out: a small flat seed packet, yellowed at the edges.
51 D SUNDARAM: Take it.
52 A ¶ Callum does not.
53 D SUNDARAM [CONT'D]: It's the last one from the old crop.
54 A ¶ Callum takes it.
55 A Turns it over.
56 A Pockets it.
57 D KESTREL [V.O.]: Commander, a transmission is waiting.
58 D CALLUM: Later.
59 A ¶ He walks out.
* 60 A The door seals behind him.
61 A ¶ Odalys finally looks up.
62 A Petra sets down her screwdriver.
63 A ¶ Sundaram sits on an upturned crate.
* 64 A Nobody says anything.
* 65 A The lamps hum on.

### SCENE s00777 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): NELL AUGUSTINE, SULLY, DOT, FEENEY, KWABENA ASARE, BRYCE
* 1 A ¶ Cramped.
* 2 A Dust in the lamp beam.
* 3 A A reel spins on its own.
* 4 A Through the slit window: an empty lot, a flickering screen.
5 A ¶ NELL AUGUSTINE, 20s, the projectionist, stands rigid.
6 A Beside her, her brother SULLY, 16, holds a flashlight with both hands.
7 A DOROTHEA "DOT" FEENEY, 60s, the owner, is wedged against the film cabinet, mouthing a prayer.
8 A At the door, MR. KWABENA ASARE, 50s, a customer with a ruined suit, keeps one shoulder to the wood while a hand slams from the other side.
9 A At the window, the booth's cat-eyed night guard BRYCE, 30s, whips the curtain shut, but a pale arm slides through the vent and clamps his ankle, dragging him down.
10 D BRYCE: Dot! Dot, pull!
11 D DOT: I'm pulling, Bryce, I'm pulling!
12 A ¶ Sully swings the flashlight onto the arm.
* 13 A Under the light, the skin peels like old film.
14 D SULLY: Nell, it's on the reel!
15 D NELL: Don't look at the screen!
16 A ¶ Kwabena braces.
* 17 A The door cracks.
18 A Nell grabs the lamp housing and tears it open.
* 19 A White light blasts into the vent.
* 20 A The arm SCREAMS and lets go.
* 21 A ¶ Silence.
* 22 A The reel keeps spinning.
23 D KWABENA (panting): Is it gone?
* 24 A ¶ On the screen, in huge flickering black and white, something turns toward the camera.

### SCENE s00778 | EXT. MUNICIPAL POOL - TEN-METER DIVING TOWER - NIGHT
Detected names (may be incomplete or contain aliases): IZZY PAREDES, WYATT BRODERICK, SOLENNE ADEYEMI-CHANG
* 1 A ¶ Chain-link fence.
* 2 A Empty bleachers.
* 3 A The water is black, lit only by one emergency lamp.
4 A Three teens climb the concrete tower.
5 A ¶ IZZY PAREDES, 16, steps onto the platform first.
6 A Hoodie, bare feet, a bag of stolen fireworks.
7 A ¶ WYATT BRODERICK, 17, follows, taller, breathing hard from the stairs.
8 A ¶ SOLENNE ADEYEMI-CHANG, 16, brings up the rear with her phone light off.
9 A She keeps one hand on the rail.
10 D IZZY: Look at that. Whole town.
11 D WYATT: It's a parking lot and a Taco Bell.
12 D IZZY: It's our parking lot.
13 D SOLENNE: Can we just go back down?
14 D IZZY: You said you wanted to see it.
15 D SOLENNE: From the bottom.
16 A ¶ Wyatt laughs.
17 A Solenne glares.
18 D WYATT: You jumped from the five last summer.
19 D SOLENNE: I fell from the five.
20 A ¶ Izzy digs in the bag.
21 A Pulls out a firework.
22 A Holds it up like a trophy.
23 D IZZY: Tonight we send Mr. Hendricks off.
24 D WYATT: He's not dead, Izzy. He retired.
25 D IZZY: Same thing. Teachers don't get better.
26 A ¶ She flicks a lighter.
* 27 A Nothing.
* 28 A Again.
* 29 A Nothing.
30 D WYATT: Give it.
31 D IZZY: No.
32 D WYATT: You'll blow your hand off.
33 D IZZY: You'll blow your hand off.
34 A ¶ They tussle.
* 35 A The firework drops.
* 36 A Rolls.
37 A Solenne dives and catches it with both hands.
38 D SOLENNE: Stop it! Both of you!
39 A ¶ They freeze.
40 A Wyatt's hand still on Izzy's sleeve.
* 41 A ¶ Quiet.
* 42 A Wind on the water.
* 43 A Far below, a car passes.
44 D WYATT (softer): Sorry.
45 D IZZY: Yeah.
46 A ¶ They let go.
47 A Izzy sits on the edge, legs over.
48 A Wyatt sits beside her.
49 A Solenne stays upright.
50 D SOLENNE: Is it weird that I'm going to miss this place?
51 D WYATT: It's a pool.
52 D SOLENNE: It's where we learned to swim.
53 D IZZY: I learned to swim in a bathtub.
54 D WYATT: That's not swimming. That's drowning slowly.
55 A ¶ Izzy shoves him.
56 A He shoves back.
57 A They both nearly tip.
58 A Solenne yanks both by the hoods.
59 D SOLENNE: Okay! No dying tonight. We have prom.
60 D IZZY: Prom is stupid.
61 D SOLENNE: Prom is the last thing before everything.
* 62 A ¶ Silence.
63 A Izzy picks at the platform's grit.
64 D IZZY: My mom's moving us to Tucson.
65 D WYATT: When?
66 D IZZY: August.
67 D WYATT: You didn't tell us.
68 D IZZY: I'm telling you now.
69 A ¶ Solenne sits.
70 A All three in a row.
* 71 A Legs dangling.
72 D SOLENNE: We could jump.
73 D WYATT: We could.
74 D IZZY: All three?
75 D SOLENNE: All three.
76 A ¶ They stand.
77 A Hold hands.
78 A Breathe.
79 D WYATT: On three.
80 D IZZY: On one. Three is a trap.
81 D SOLENNE: One!
82 A ¶ They leap together, screaming, into the black.
* 83 A ¶ SPLASH.
* 84 A Then laughter.
* 85 A Echoing.
* 86 A ¶ Overhead, a floodlight clicks on.
* 87 A A flashlight beam sweeps the water.
* 88 A ¶ A whistle shrieks from the fence line.
89 A ¶ The three scramble out, shrieking, dripping, stumbling over each other, laughing so hard they can barely climb the fence.

### SCENE s00779 | INT. TAXIDERMY CLASSROOM - NIGHT
Detected names (may be incomplete or contain aliases): PRUDENCE LOVELACE-AKINS, ISAAC TOMLINSON, JAMES TALLCHIEF
* 1 A ¶ Glass eyes in rows.
* 2 A Fox, owl, a badger mid-snarl.
* 3 A A single desk lamp.
* 4 A Moonlight on frozen fur.
5 A ¶ PRUDENCE LOVELACE-AKINS, 30s, instructor, lays a half-stuffed heron on the worktable.
6 A Across from her, ISAAC TOMLINSON, 20s, her student, wipes his hands on a towel and keeps glancing at the badger.
7 D ISAAC: Did that move?
8 D PRUDENCE: It's a badger, Isaac. It's dead.
9 D ISAAC: It was facing the door before.
10 D PRUDENCE: You're tired.
11 A ¶ She picks up a scalpel.
12 A Isaac backs toward the shelves.
13 D PRUDENCE [CONT'D]: Come here. Hold the wing.
14 A ¶ He does.
15 A His fingers tremble on the feather.
16 A ¶ Behind them, the badger turns its head.
17 A ¶ Neither sees.
* 18 A The lamp flickers.
19 A Prudence cuts a clean line along the heron's belly, and Isaac jerks the wing aside.
20 A The fox on the shelf shifts a paw.
21 A The owl's neck rotates.
22 A Prudence reaches for the thread.
23 A Isaac bumps the table.
* 24 A A jar of glass eyes rolls.
* 25 A Every eye in the room is suddenly pointed at the two of them.
26 D ISAAC: Prudence.
27 D PRUDENCE (not looking up): Hold still.
28 D ISAAC: Prudence!
29 A ¶ She looks up.
* 30 A ¶ The room is full of eyes.
* 31 A ¶ Footsteps in the hall.
* 32 A The door swings wide.
33 A ¶ JAMES TALLCHIEF, 50s, the night janitor, mop in hand, steps in.
34 A He stops.
35 A Takes it in.
36 D JAMES: Ladies, gentlemen. And whoever you are.
37 A ¶ The animals all freeze mid-turn.
* 38 A ¶ Silence.
39 A James sets the mop down.
40 A Walks to the badger.
41 A Picks it up by the scruff.
42 A Turns it around, facing the wall.
43 D JAMES [CONT'D]: They do that when they're lonely.
44 D PRUDENCE: They do WHAT?
45 D JAMES: Somebody leave a radio on for them. Classical.
46 A ¶ He leaves.
47 A Isaac exhales for the first time in a minute.
48 A ¶ Prudence puts down the scalpel.
49 A Reaches for the radio.

### SCENE s00780 | EXT. INK RIVER - FERRYMAN'S TOLL BOOTH - TWILIGHT
Detected names (may be incomplete or contain aliases): MAGDA ORLOVSKAYA-FELL, BASIL THORNQUIST, SIX-FINGERED JO
* 1 A ¶ Black water.
* 2 A Slow.
* 3 A Letters swim in it like minnows.
* 4 A A crooked booth on stilts.
5 A ¶ MAGDA ORLOVSKAYA-FELL, 60s, tollkeeper, lantern for a left hand, counts coins into a jar.
6 A ¶ BASIL THORNQUIST, 30s, pilgrim, muddy cloak, stands at the booth window.
7 A A satchel at his feet.
8 A ¶ SIX-FINGERED JO, ageless, a heron the height of a man, stalks along the dock.
9 D MAGDA: Toll's a memory.
10 D BASIL: A memory?
11 D MAGDA: Of your own. Not borrowed.
12 A ¶ Basil digs in his satchel.
13 A Pulls out a pebble.
14 A Holds it up.
15 D BASIL: My mother's garden.
16 A ¶ Magda sniffs the pebble.
17 A Shakes her head.
18 D MAGDA: Too small.
19 D BASIL: It's a good memory.
20 D MAGDA: It's a pebble.
21 A ¶ Jo ruffles.
22 A Taps the dock with a long beak.
23 D JO: Let him pass, Magda.
24 D MAGDA: Don't tell me my business, bird.
25 D JO: He's carrying something heavy.
26 D MAGDA: They all are.
27 A ¶ Basil lifts the satchel.
28 A Sets it on the sill.
* 29 A The booth creaks.
30 D BASIL: What if I told you what's inside?
31 A ¶ Magda and Jo lean in.
32 D MAGDA: Tell.
33 D JO: Tell.
34 A ¶ They share a look.
35 A Both clear their throats.
36 A Basil smiles faintly.
37 D BASIL: A name.
38 D MAGDA: Whose?
39 D JO: Whose?
40 D BASIL: Mine. I left it at home.
41 A ¶ Magda writes in her ledger.
42 A Crosses out a line.
43 D MAGDA: That'll do.
44 A ¶ She slides a coin through.
* 45 A It's blank on both sides.
46 A Basil takes it.
47 D JO: Mind the third current.
48 D BASIL: Thank you.
* 49 A ¶ The ferry is a hollow boat of reeds.
* 50 A It nudges the dock.
51 A Basil steps aboard.

### SCENE s00781 | INT. CAR WASH CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NADIA ROSTOVA-BELL
* 1 A ¶ Cinderblock.
* 2 A Buzzing fluorescents.
* 3 A Soap suds crawl down a window.
* 4 A Beyond it, a dark tunnel of brushes, still.
5 A ¶ NADIA ROSTOVA-BELL, 30s, courier jacket, sits on an overturned crate.
6 A A phone in her hand.
* 7 A A duffel at her feet.
8 A ¶ She presses play.
9 D NADIA [V.O.] (recorded, steady): Memo one. Tuesday. If you hear this, the handoff went fine.
10 A ¶ Nadia winces.
11 D NADIA [V.O., CONT'D]: Package is in the blue duffel. Do not open it.
12 A ¶ She looks at the duffel.
13 A Doesn't move.
14 D NADIA [V.O., CONT'D]: Memo two. Wednesday. Someone followed me from the depot.
15 A ¶ She pauses it.
16 A Breathes.
17 A Presses again.
18 D NADIA [V.O., CONT'D] (recorded, thinner): Memo three. They know the car wash. I don't know how.
19 A ¶ Nadia stands.
20 A Checks the door.
21 A The deadbolt.
22 A The window.
23 A The tunnel.
* 24 A ¶ A drip.
* 25 A A distant clank.
26 A ¶ She freezes.
* 27 A ¶ Nothing.
28 A ¶ She sits again.
29 D NADIA [V.O., CONT'D] (recorded): Memo four. I'm going to open the duffel. Whoever you are, I'm sorry.
30 A ¶ Nadia stares at the phone.
31 D NADIA (whisper): I never recorded this one.
32 A ¶ She scrolls.
* 33 A The memo is dated tomorrow.
* 34 A ¶ The voice continues, gentler.
35 D NADIA [V.O., CONT'D] (recorded): It's just a hard drive. It's always been just a hard drive. Walk away.
36 A ¶ Nadia lifts the duffel.
37 A Unzips it.
* 38 A A small black drive, a Post-it: "SORRY."
39 A ¶ She laughs.
40 A Short.
41 A Hollow.
42 A Then not.
43 A ¶ She pockets the drive.
44 A Shoulders the duffel.
45 A ¶ At the door she hesitates.
46 A Presses delete.
47 D NADIA [CONT'D] (to the phone): Memo five.
48 A ¶ She exits.
* 49 A The brushes begin to spin behind her.

### SCENE s00782 | INT. FIELD HOSPITAL - CONVERTED ICE RINK - NIGHT
Detected names (may be incomplete or contain aliases): LUCIA FONTANILLA, NURSE GRETA HOLMQVIST, ABEL TESFAYE, RAFI, CORDERO, KOFI
* 1 A ¶ Cots on the ice mats.
* 2 A Generators drone.
* 3 A Breath hangs in the cold.
* 4 A A Zamboni bay is now supply storage.
5 A ¶ DR. LUCIA FONTANILLA, 40s, scrubs under a parka, works over a patient on a gurney.
6 A NURSE GRETA HOLMQVIST, 50s, holds the instrument tray.
7 A The patient, ABEL TESFAYE, 30s, grips the rail, sweating.
8 D LUCIA: Pressure?
9 D GRETA: Ninety over fifty.
10 D LUCIA: Drop another liter.
11 A ¶ Greta hangs a bag.
* 12 A The line tangles.
13 A She curses and fixes it.
14 A Lucia presses on Abel's side.
15 A He groans.
16 D ABEL: Doc, it's okay. Stop.
17 D LUCIA: It's not okay, Abel.
18 A ¶ RAFAEL "RAFI" CORDERO, 20s, paramedic, bursts through the doors with a teenage boy in tow.
19 A The boy, KOFI, 15, has a bandaged hand.
20 D RAFI: Doctor! Triage says you've got a bed.
21 D LUCIA: I've got a floor.
22 D RAFI: Then I'll take the floor.
23 D KOFI: Is that my brother?
24 A ¶ Abel turns his head.
25 D ABEL: Kofi.
26 A ¶ Kofi runs.
27 A Rafi grabs for him, misses.
28 A Kofi barrels into Greta.
* 29 A The tray flies.
* 30 A Scalpels clatter across the ice.
31 A Lucia lunges to catch the tray and slips.
32 A Rafi catches her.
33 A They fall together, tangled, in a heap by the gurney.
34 A ¶ She is first up.
35 A She looks down at Abel.
* 36 A His monitor flatlines.
37 D LUCIA [CONT'D]: Greta! Paddles!
38 D GRETA: Charging!
39 A ¶ She slaps the paddles together.
40 A Lucia takes them.
41 A Kofi freezes at the foot of the cot, hands over his mouth.
42 D LUCIA: Clear!
43 A ¶ Abel arches.
44 A Falls.
* 45 A A blip.
* 46 A Another blip.
47 D GRETA: We've got him.
48 A ¶ She exhales.
49 A Lucia lets the paddles drop on his chest.
50 A Her hands shake.
51 D KOFI (whisper): Is he okay?
52 D RAFI: He's okay.
53 A ¶ Lucia turns to Kofi, steps close.
54 A She inspects the bandaged hand.
55 D LUCIA: Who did this wrap?
56 D KOFI: Me.
57 D LUCIA: It's terrible.
58 D KOFI: Sorry.
59 D LUCIA: Sit. I'll redo it. After.
60 A ¶ Kofi sits on the ice.
61 A Abel's eyes flutter open.
62 D ABEL (faint): Doc?
63 D LUCIA: Still here.

### SCENE s00783 | INT. SPEAKEASY BEHIND A FUNERAL PARLOR - NIGHT, 1923
Detected names (may be incomplete or contain aliases): MAMIE DUPREE, MAN IN GREY HAT, GREY HAT, BARNABY SCOTT, ACKERLY
* 1 A ¶ Caskets stacked as bar-backs.
* 2 A A gramophone croons.
* 3 A Candlelight.
4 A ¶ MAMIE DUPREE, 30s, bartender, silver flapper dress, polishes a glass.
* 5 A Everything is lovely and slow.
6 A ¶ A MAN IN A GREY HAT, 40s, sits at the bar.
7 A He turns his drink in circles.
8 A Doesn't drink.
9 A ¶ BARNABY SCOTT, 60s, the undertaker, dozes on a coffin lid in the corner.
10 D MAMIE: You're not from here.
11 D MAN IN GREY HAT: No.
12 D MAMIE: You like the music?
13 D MAN IN GREY HAT: It's fine.
14 D MAMIE: It's a funeral parlor. We play what the dead like.
15 A ¶ He almost smiles.
16 A Takes a sip.
17 A Sets the glass down.
18 D MAN IN GREY HAT [CONT'D]: Your license?
19 A ¶ Mamie's polishing stops.
20 A Barnaby's snore stops.
21 D MAMIE: Pardon?
22 A ¶ The man pulls back his coat.
* 23 A A badge.
24 D ACKERLY: Solomon Ackerly. Prohibition Bureau.
25 A ¶ Mamie lowers the glass.
* 26 A Slowly.
27 A Barnaby sits up in his coffin.
28 D BARNABY: Mamie. The other room.
29 D MAMIE (calm): Detective, we're only mourning.
30 D ACKERLY: In evening dress.
31 A ¶ She glances at the gramophone.
32 A Reaches.
33 A Turns the volume UP.
* 34 A ¶ The gramophone swells.
* 35 A Behind the bar, the wall begins to slide open.

### SCENE s00784 | INT. MATTRESS SHOWROOM - NIGHT
Detected names (may be incomplete or contain aliases): MARV QUIGLEY, SECURITY GUARD, DARNELL
* 1 A ¶ Rows of beds under cold light.
* 2 A A tripod.
* 3 A A ring light.
* 4 A A laptop showing a chat window scrolling.
5 A ¶ MARV QUIGLEY, 50s, polyester suit, headset mic, bounces on a king-size to show springs.
6 D MARV (to camera): Folks, welcome to the Midnight Mattress Marathon!
7 A ¶ A SECURITY GUARD, 30s, in a windbreaker, stands in the doorway with a flashlight.
8 A Marv doesn't see him.
9 D MARV [CONT'D] (to camera): Three hundred viewers! That's a record, folks!
10 A ¶ The guard coughs.
11 D MARV [CONT'D] (not turning): Not now, Brenda.
12 D SECURITY GUARD: I'm not Brenda.
13 A ¶ Marv spins.
14 A He sees the flashlight.
15 A Drops to a sit.
16 D MARV: Who the hell are you?
17 D SECURITY GUARD: Mall security.
18 D MARV: At a standalone store?
19 D SECURITY GUARD (shrugs): It's a big parking lot.
20 D MARV (to camera): Folks, ignore the man in the windbreaker.
21 A ¶ The guard steps into frame.
22 A Waves at the camera.
23 D SECURITY GUARD: Hi, Mom.
24 D MARV (muttering): Oh, no.
25 D SECURITY GUARD: I'm Darnell, by the way.
26 D MARV: Darnell, you're ruining my numbers.
27 D DARNELL: The chat says they like me.
28 D MARV (reading laptop): "Who's the guard? Marry him." Okay. Fine.
29 A ¶ Darnell sits on the next bed.
30 A He bounces.
31 A His face softens.
32 D DARNELL: Wow.
33 D MARV: Memory foam.
34 D DARNELL: I could sleep here.
35 D MARV: That's the idea, Darnell.
36 D DARNELL: No. Like, tonight.
37 A ¶ Marv looks at the camera.
38 A At Darnell.
39 A At the chat.
40 D MARV (to camera): Folks, we're extending the marathon.
41 D DARNELL (to self): Best shift ever.

### SCENE s00785 | INT. COASTAL RADAR SHACK - NIGHT, 1944
Detected names (may be incomplete or contain aliases): CORPORAL AGNES TILLMAN-REED, SERGEANT BARTHOLOMEW OYELOWO, PRIVATE LUCIEN FAIVRE, BART, COMMANDER HALLORAN
* 1 A ¶ Plywood walls.
* 2 A A glowing scope.
* 3 A A kettle on a hot plate.
* 4 A Rain on tin.
5 A ¶ CORPORAL AGNES TILLMAN-REED, 20s, headset, hunches at the scope.
6 A SERGEANT BARTHOLOMEW OYELOWO, 40s, reads a magazine upside down.
7 A PRIVATE LUCIEN FAIVRE, 19, stirs tea he isn't drinking.
8 A ¶ She taps the glass.
9 A Leans closer.
10 D AGNES: Contact. Bearing two-seven-zero.
11 A ¶ He drops the magazine.
12 A Rolls the chair beside her.
13 D BART: Range?
14 D AGNES: Thirty miles. Slow.
15 D BART: Ours?
16 D AGNES: No transponder.
17 A ¶ He swears under his breath.
18 A The other boy stops stirring.
19 D LUCIEN: Should I wake the captain?
20 D BART: Not yet. Let it come.
* 21 A ¶ The radio crackles on the shelf.
22 D COMMANDER HALLORAN [V.O.] (through static): Shack Seven, Halloran. Report.
23 A ¶ Bart grabs the handset.
24 A Agnes turns the dial.
25 D BART: Single contact. Unidentified. Approaching.
26 D HALLORAN [V.O.]: Hold position. Do not engage.
27 D BART: Understood, sir.
28 A ¶ He sets the handset down.
29 A She watches the scope.
* 30 A The blip crawls.
31 D AGNES: Closing.
32 D LUCIEN: Maybe it's a fishing boat.
33 D BART: At night, in a blackout?
34 A ¶ He doesn't answer.
35 A He pours the tea down the sink.
* 36 A ¶ The blip stops.
* 37 A Hangs.
* 38 A Starts to fade.
39 D AGNES: It's turning.
40 A ¶ She leans back.
41 A Exhales.
42 A He rubs his face with both hands.
43 D BART: Good.
* 44 A ¶ The radio crackles again.
45 D HALLORAN [V.O.]: Shack Seven, stand down. It was ours.
46 A ¶ Bart picks up the magazine.
47 A Right side up this time.

### SCENE s00786 | INT. HOTEL ROOM - GRAND PACIFIC - NIGHT, 1951
Detected names (may be incomplete or contain aliases): VIVIENNE LAROCHE-STANTON
* 1 A ¶ Art deco lamp.
* 2 A A rain-streaked window.
* 3 A A wire recorder on the writing desk, its spools motionless.
4 A ¶ VIVIENNE LAROCHE-STANTON, 30s, evening gown, unpinned hair, sits on the edge of the bed.
5 A She stares at the recorder as though it might speak first.
6 A ¶ She stands.
7 A Crosses.
8 A Presses PLAY.
9 D VIVIENNE [V.O.] (recorded, bright): Darling, it's me. If you're hearing this, I've made it to San Francisco and the hotel has the most dreadful wallpaper.
10 A ¶ Vivienne smiles at the wallpaper.
* 11 A It is dreadful.
12 D VIVIENNE [V.O., CONT'D]: I'll see you at the Cliff House at nine. Wear the blue tie.
13 A ¶ She stops it.
14 A Crosses to the window.
15 A Checks her wristwatch.
* 16 A 11:40.
17 D VIVIENNE (quiet): Nine.
18 A ¶ She returns.
19 A Rewinds.
20 A Plays again.
21 D VIVIENNE [V.O., CONT'D] (recorded, bright): Darling, it's me.
22 A ¶ She snaps it off.
23 A Paces.
24 A Picks up the telephone receiver.
25 A Puts it down.
26 A ¶ She opens the closet.
* 27 A A blue tie hangs there, tags still on.
28 A She pulls it free.
29 A Holds it.
30 D VIVIENNE [CONT'D]: You said you'd come.
31 A ¶ She wraps the tie around her fist.
32 D VIVIENNE [CONT'D]: You said you'd come, and you didn't, and I wore the dress.
33 A ¶ She flings the tie across the room.
* 34 A It slaps the wall.
35 A She picks up the recorder, lifts it above her head, and hurls it at the wardrobe mirror.
* 36 A ¶ CRASH.
* 37 A The mirror shatters.
* 38 A The spools unspool in long brown ribbons.
* 39 A ¶ Silence.
* 40 A Rain.
41 A She stands among the shards, breathing.
* 42 A ¶ Then, from the broken machine, a last crackle of voice.
43 D VIVIENNE [V.O., CONT'D] (recorded): ...and darling, whatever happens, I'll wait.
44 A ¶ Vivienne sinks to the floor.
* 45 A The lamp flickers.

### SCENE s00787 | INT. FERRY GALLEY - ARBITRATION - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR HENRIETTA OSEI-BONSU, PELAGIA STAVROU, RHYS MOLYNEUX
* 1 A ¶ A docked ferry's galley, converted for the day.
* 2 A Stainless counters.
* 3 A Sandwich trays.
* 4 A A folding table with three chairs and a pitcher of water.
5 A ¶ ARBITRATOR HENRIETTA OSEI-BONSU, 60s, sits at the head.
6 A PELAGIA STAVROU, 40s, counsel for the claimant, sits to her left.
7 A RHYS MOLYNEUX, 50s, counsel for the respondent, sits to her right.
8 A He loosens his tie.
9 A She straightens her blazer.
10 A Henrietta clicks a pen.
11 D HENRIETTA: Counsel. You've had a week. Is there a deal?
12 D PELAGIA: None, Your Honor.
13 D RHYS: Not at the number she's asking.
14 D HENRIETTA: Which is?
15 D PELAGIA: Two point four million.
16 D RHYS: Preposterous.
17 D PELAGIA: It's modest.
18 D RHYS: It's insane.
19 A ¶ Both stop.
20 A Henrietta lifts a hand.
* 21 A Silence.
22 D HENRIETTA: One at a time.
23 A ¶ She pours water.
24 A Slides the pitcher toward Rhys.
25 A He doesn't take it.
26 A Pelagia does.
27 D PELAGIA: The respondent's captain falsified the maintenance log. We have the original.
28 A ¶ She opens a folder.
29 A Slaps a photocopy on the table.
30 A He leans in.
31 A She leans back.
32 A Henrietta puts on reading glasses and studies the page, line by line, as the ferry creaks against its moorings.
33 D RHYS: That's not authenticated.
34 D PELAGIA: It's his handwriting.
35 D RHYS: Anyone can forge handwriting.
36 D PELAGIA: Anyone can try.
37 A ¶ Henrietta lifts her head.
38 D HENRIETTA: Mr. Molyneux. Is that your client's signature?
39 A ¶ Rhys glances at the page.
* 40 A A long beat.
41 A His mouth opens, closes.
42 D RHYS: I would need to confer.
43 D HENRIETTA: Then confer.
44 A ¶ He stands.
45 A Hesitates.
46 A Sits.
47 D RHYS (quietly): It's his.
48 A ¶ Pelagia exhales.
49 A Henrietta takes off her glasses.
50 D HENRIETTA: Break for lunch. Take the sandwiches.
51 A ¶ They rise.
52 A He holds the door for her.
53 A She nods once, without triumph.

### SCENE s00788 | INT. AGING CAVE - ALPINE CHEESE VAULT - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE LOUVEL, JUNIOR TWOMBLY, DEL, WRAY, OSCAR PELLEGRINI-OKAFOR, MAN IN WHITE APRON, WHITE APRON, BERTRAND
* 1 A ¶ Carved stone.
* 2 A Wheels of cheese on spruce shelves, rows upon rows, rind blooming white and grey.
* 3 A A single gas lamp.
* 4 A The air tastes of salt and earth.
5 A ¶ MARGUERITE LOUVEL, 40s, immaculate trench coat, strolls the aisle with her hands behind her back.
6 A She might be visiting an aunt.
7 A ¶ JUNIOR TWOMBLY, 30s, safecracker, sweater too warm for the cave, kneels at a steel door set into the rock.
8 A He listens, ear to the dial.
9 A ¶ DELPHINE "DEL" WRAY, 20s, getaway driver, sits cross-legged on a barrel, a thermos on her knee.
10 A She watches the entrance.
11 A ¶ OSCAR PELLEGRINI-OKAFOR, 50s, the inside man, wears a cheesemonger's smock and sweats through it.
12 A He hovers by the door and checks his watch every few seconds.
13 D MARGUERITE: How long?
14 D JUNIOR: Ten minutes.
15 D OSCAR: He said ten minutes at midnight.
16 D MARGUERITE: Oscar. Breathe.
17 D OSCAR: I am breathing. I'm breathing very hard.
18 D DEL: He said that ten minutes ago.
19 D JUNIOR: He is a patient man.
20 D MARGUERITE: Del, the road?
21 D DEL: Quiet. Too quiet.
22 A ¶ Marguerite touches a wheel of cheese.
23 A Leaves a fingerprint in the rind.
24 A She looks at it.
25 A Wipes it carefully.
26 D MARGUERITE: Gloves.
27 D JUNIOR: I'm wearing gloves.
28 D MARGUERITE: Del.
29 D DEL (holds up hands): Bare. Sorry.
30 A ¶ She pulls on gloves.
31 A Junior turns the dial.
* 32 A A click.
* 33 A Another.
34 A ¶ A shape detaches itself from the shadow between shelves.
35 A ¶ A MAN IN A WHITE APRON, 60s, holds a cheese iron like a sword.
36 D MAN IN WHITE APRON: You're in my cave.
37 A ¶ Everyone freezes.
38 A Del slides off the barrel.
39 A Marguerite doesn't flinch.
40 D MARGUERITE: We're expected.
41 D MAN IN WHITE APRON: By who?
42 D MARGUERITE: By the cheese.
43 A ¶ His eyes narrow.
44 A The cheese iron drops a few inches.
45 D JUNIOR (whisper): Marguerite.
46 D MARGUERITE (quietly, to him): Keep dialing.
47 D MAN IN WHITE APRON: What do you want?
48 D MARGUERITE: The Reserve. 1978.
49 A ¶ He studies her.
50 A She holds his eyes.
* 51 A The lamp hisses.
52 D BERTRAND: I am Bertrand Blanchet. I have been guarding that wheel for forty years.
53 D MARGUERITE: Then you know it was never meant to be sold.
54 D BERTRAND: It was not.
55 D DEL: Mr. Blanchet, with respect, it's two million dollars of dairy.
56 D BERTRAND: It is two million dollars of my wife.
* 57 A ¶ Silence.
* 58 A The lamp.
* 59 A A drip somewhere.
60 A ¶ Junior stops turning the dial.
61 D JUNIOR: Marguerite. Your call.
62 A ¶ Marguerite takes a long breath.
63 A Walks toward Bertrand.
64 A Stops an arm's length away.
65 D MARGUERITE: What if we only take half?
66 D BERTRAND: Half?
67 D MARGUERITE: You keep half. We sell half. You buy a new roof.
68 D BERTRAND: The roof is fine.
69 D DEL: It's not, though. I saw the leak by the entrance.
70 D BERTRAND: That is a decorative leak.
71 D JUNIOR: Is anybody else confused?
72 D MARGUERITE: Quiet, Junior.
73 A ¶ She holds out her gloved hand.
74 A Bertrand looks at it.
75 A Lowers the cheese iron.
76 D BERTRAND: Half.
77 A ¶ He shakes.
* 78 A The safe door clicks open behind them.
79 A ¶ Junior pulls it wide.
* 80 A Inside, nestled in straw: a single, enormous, dark wheel.
81 A ¶ Everyone stares.
82 A Del lifts her thermos.
83 D DEL: To the wife.
84 A ¶ They raise nothing, because they have nothing.
85 A Bertrand takes the thermos, drinks, hands it back.

### SCENE s00789_0 | EXT. SALT FLAT - TELEGRAPH STATION - NOON
Detected names (may be incomplete or contain aliases): ZEKE PIPKIN, SILAS CRANE, MAHALA TWOFEATHERS
* 1 A ¶ White to the horizon.
* 2 A Heat shimmers.
* 3 A A sagging shack with a copper wire strung to nowhere.
4 A ¶ ZEKE PIPKIN, 50s, telegraph operator, spectacles and sleeve garters, sits on the porch tapping a key that isn't connected to anything.
5 A He is humming.
* 6 A ¶ Hoofbeats.
7 A Two riders emerge from the glare.
8 A ¶ SILAS CRANE, 40s, long duster, silver at the temples, a rifle across his saddle.
9 A Beside him, MAHALA TWOFEATHERS, 30s, braided hair, wide-brimmed hat, a coiled rope at her hip.
10 A They slow to a walk and dismount without speaking.
11 D ZEKE: Afternoon, folks. Wire's down.
12 D SILAS: We know.
13 D ZEKE: Been down since Tuesday.
14 D MAHALA: We know that too.
15 A ¶ Zeke stops tapping.
16 A Silas ties his horse to the porch rail with one hand, the rifle still in the other.
17 A Mahala watches the shack's window, then the roof, then the horizon, her fingers on the rope.
18 D SILAS: Where's the payroll?
19 D ZEKE: Payroll?
20 D MAHALA: The Sunday coach. The strongbox. It was routed through here.
21 D ZEKE: Nothing came through.
22 D SILAS: Zeke.
23 D ZEKE: Mr. Crane, I swear on my mother.
24 D MAHALA: Your mother's dead.
25 D ZEKE: That's why I swear on her.
26 A ¶ Silas steps onto the porch.
* 27 A Boards groan.
28 A He peers through the window, then shoulders the door open.
29 D SILAS (inside): Well.
30 D MAHALA: What?
31 D SILAS (inside): Come look.
32 A ¶ She follows.
33 A Zeke trails after, wringing his hands.

### SCENE s00789_1 | INT. TELEGRAPH STATION - CONTINUOUS
Detected names (may be incomplete or contain aliases): SILAS, ZEKE, MAHALA
* 1 A ¶ Dim.
* 2 A A cot.
* 3 A A stove.
* 4 A A stack of crates labeled "PROPERTY OF THE WELLS CONSOLIDATED."
* 5 A In the middle of the floor: a heavy iron strongbox, lid open, empty.
6 D SILAS: You said nothing came through.
7 D ZEKE: Nothing came through. This came OUT.
8 D MAHALA: Out of what?
9 D ZEKE: Out of the floorboards.
10 A ¶ Silas kneels.
11 A Pries up a plank.
* 12 A Beneath: a dark hole, a rope ladder dropping into earth.
13 D SILAS: A tunnel.
14 D MAHALA: To where?
15 D ZEKE: I never looked.
16 D SILAS: You never looked.
17 D MAHALA: You live on top of it.
18 D ZEKE: I never LOOKED!
19 A ¶ Mahala drops to her knees.
20 A Lowers her head into the hole.
* 21 A A pause.
22 D MAHALA (muffled): Footprints.
23 D SILAS: Fresh?
24 D MAHALA: Warm.
25 A ¶ She pulls out, stands, and grabs the rope off her hip.
26 A Silas cocks the rifle.
27 A Zeke retreats toward the stove.
28 D ZEKE: Now wait a minute. Wait. If you go down there and they're still down there, I'm the one who has to explain.
29 D SILAS: Explain what?
30 D ZEKE: Why I didn't wire it in.
31 D MAHALA: There's no wire.
32 D ZEKE (small): No. There isn't.
33 A ¶ Silas peers into the hole again.
34 D SILAS: Mahala. You take the rope. I'll go first.
35 D MAHALA: No. I go first. You're too slow.
36 D SILAS: I'm not slow.
37 D MAHALA: You're thoughtful. It's a different kind of slow.
38 A ¶ She swings her legs into the hole.
39 A Clambers down.
40 A Silas watches her disappear, then glances at Zeke.
41 D SILAS: You stay.
42 D ZEKE: I was going to.
43 D SILAS: Don't touch the key.
44 D ZEKE: It's not connected.
45 D SILAS: Don't touch it anyway.
46 A ¶ He lowers himself into the dark.
* 47 A The rope creaks.
* 48 A The rifle barrel scrapes the wood.
49 A ¶ Zeke is alone.
50 A He drifts to the window.
51 A Looks at the white flat.
* 52 A ¶ A line of dust far out on the salt.
* 53 A Riders.
* 54 A Many.
55 D ZEKE [CONT'D] (whisper): Oh, no.
56 A ¶ He shuts the door.
57 A Sets the bar.
58 A Presses his back to it, closes his eyes, and begins, softly, to hum.

### SCENE s00790 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): CORDELIA FAIRCHILD-NWOSU, TOBIAS REINHOLT, DESHAWN KOROMA, DISPATCHER YBARRA
* 1 A ¶ Brass.
* 2 A Mirrored walls.
* 3 A A floor indicator that blinks between three and four.
4 A ¶ CORDELIA FAIRCHILD-NWOSU, 40s, defense attorney, navy suit, files hugged to her chest, rides in silence.
5 A Beside her, TOBIAS REINHOLT, 30s, her client, tie knotted wrong, sweats through his shirt.
6 A In the corner, bailiff DESHAWN KOROMA, 50s, stands like a statue, arms crossed.
* 7 A ¶ The elevator shudders.
* 8 A Stops.
* 9 A The lights dip.
10 D TOBIAS: Is it supposed to do that?
11 D CORDELIA: Yes.
12 D DESHAWN: No.
13 A ¶ Cordelia glances at him.
14 A He shrugs.
* 15 A A buzz crackles from the speaker panel.
16 D DISPATCHER YBARRA [V.O.]: Elevator two, status?
17 D DESHAWN (into panel): Stuck. Third and fourth.
18 D YBARRA [V.O.]: Technician's twenty minutes out.
19 D CORDELIA: Twenty? I've got a verdict at ten.
20 D YBARRA [V.O.]: Ma'am, I don't control the building.
21 A ¶ Cordelia faces the mirror.
22 A Tobias watches her in reflection.
23 D TOBIAS: Miss Fairchild. Before we go in.
24 D CORDELIA: Not now.
25 D TOBIAS: I lied to you.
26 A ¶ She does not turn.
27 D CORDELIA: I know.
28 D TOBIAS: You know?
29 D CORDELIA: I read the file. I read the lab report you didn't mention. I've known since Tuesday.
30 A ¶ Deshawn stares at the ceiling with great concentration.
31 D TOBIAS: Then why did you stay?
32 D CORDELIA: Because everyone deserves a defense. Even you.
* 33 A ¶ The lights flicker.
* 34 A The elevator drops six inches and catches.
35 A Tobias grabs the rail.
36 A Cordelia finally turns and puts a hand on his.
37 D CORDELIA [CONT'D]: When the doors open, you say nothing. Not one word.
38 D YBARRA [V.O.]: Elevator two, repairs arriving.
* 39 A ¶ The doors groan apart.
* 40 A Light from the hallway.
41 A Cordelia steps out first.

### SCENE s00791 | INT. HOTEL BALLROOM - AFTER THE WEDDING - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, CATALINA
* 1 A ¶ Folding chairs askew.
* 2 A A deflated balloon arch.
* 3 A Half-eaten cake under a plastic dome.
* 4 A Streamers on the floor like cut ribbon.
* 5 A The chandelier still burns, as if nobody has told it.
* 6 A ¶ Nothing moves.
* 7 A A clock ticks.
* 8 A ¶ A side door opens.
* 9 A Heels on parquet.
10 A ¶ A WOMAN in a green evening dress, 50s, steps in, shoes in hand.
11 A Mascara tracked down one cheek.
12 A She surveys the wreckage and her mouth tightens.
13 A ¶ She crosses to the head table.
14 A Finds a tape recorder among the centerpieces, the kind guests were meant to speak into.
15 A She lifts it.
16 A Examines it.
17 A Presses record.
18 D WOMAN: Testing. One, two.
19 A ¶ She stops.
20 A Rewinds.
21 A Plays back.
22 D WOMAN [V.O.] (recorded, faint): Testing. One, two.
23 A ¶ She nods.
24 A Records again.
25 D WOMAN [CONT'D]: This is Catalina Rousseau-Mbeki, mother of the groom. I would like to say something I didn't say at the toast.
26 A ¶ She stops.
27 A Her jaw works.
28 A She sits on the edge of the stage.
29 D CATALINA: I'm sorry I wore green. I was told it wasn't hers.
30 A ¶ She lowers the recorder to her lap.
31 A Looks at the cake.
32 A Rewinds.
33 A Plays the last of it.
34 D CATALINA [V.O.] (recorded): I'm sorry I wore green.
* 35 A ¶ A phone rings in her purse.
36 A She lets it ring.
* 37 A It rings again.
38 D CATALINA (to the ceiling): Not tonight.
* 39 A ¶ The phone stops.
40 A She raises the recorder.
41 D CATALINA [CONT'D] (to the tape): He looked happy. That's all. Remember that. He looked happy.
42 A ¶ She sets the recorder on the stage, still running.
43 A Picks up her shoes.
44 A Crosses to the exit.
45 A At the door, she turns off the chandelier switch.
* 46 A ¶ Darkness.
* 47 A A tiny red light glows on the stage.

### SCENE s00792 | INT. STARLITE LANES - BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): PHOEBE ADEBAYO, KENJI MORIKAWA, LOCKY, DUNMORE, BEATRIX SOKOLOWSKI, COSMO ABARA, HORACE LINDQVIST
* 1 A ¶ The neon is half dead.
* 2 A Lane nine glows pink.
* 3 A A disco ball turns slowly over the shoe counter, throwing coins of light across a carpet printed with comets.
* 4 A It smells of fryer oil and rental-shoe disinfectant.
* 5 A The last night of high school, and the party has thinned to six.
6 A ¶ PHOEBE ADEBAYO, 18, still in her cap and gown, kneels on lane six and rolls the ball down the gutter on purpose.
7 A KENJI MORIKAWA, 18, tie around his forehead, sits on the ball return and watches her.
8 A LACHLAN "LOCKY" DUNMORE, 18, hair gelled for an event that has ended, flips a keychain in one hand.
9 A BEATRIX SOKOLOWSKI, 17, writes in a notebook with her tongue between her teeth.
10 A COSMO ABARA, 18, who sold the most tickets to the dance and attended none of it, eats fries from a paper boat.
11 A ¶ HORACE LINDQVIST, 60s, the night manager, leans on the counter with a rag over his shoulder and counts a cash drawer.
12 D HORACE: Last frame, kids. I'm closing.
13 D PHOEBE: Five more minutes, Mr. Lindqvist.
14 D HORACE: That's what you said at the last five.
15 D KENJI: Mr. Lindqvist, this is history.
16 D HORACE: It's a Tuesday.
17 D BEATRIX (not looking up): It's a Tuesday in history.
18 A ¶ Locky tosses his keys.
19 A Cosmo catches them in a fry.
* 20 A A beat.
21 A Everyone looks at the fry-wrapped keys.
22 D COSMO: I regret nothing.
23 D LOCKY: Those are my dad's keys.
24 D COSMO: Then I regret one thing.
25 A ¶ Phoebe lines up the ball again.
26 A Kenji slides off the return.
27 A Beatrix closes the notebook.
28 D BEATRIX: Okay. Real talk.
29 D PHOEBE: Oh no.
30 D BEATRIX: Does anyone actually know what they're doing in September?
31 D KENJI: Michigan.
32 D LOCKY: Shop. My uncle's.
33 D COSMO: Community college. Then, like, the world.
34 D PHOEBE: Nothing.
35 A ¶ They look at her.
36 D PHOEBE [CONT'D]: I don't know. Nothing's planned. That's the plan.
* 37 A ¶ The disco ball turns.
* 38 A Light slides across their faces, one by one.
39 D HORACE (calling): Last call. Or I turn off lane six.
40 A ¶ Phoebe takes a breath.
41 A Rolls the ball.
* 42 A It wobbles, wobbles, and drifts toward the pins.
* 43 A ¶ Nobody breathes.
* 44 A ¶ It hits the head pin, perfect.
* 45 A Pins explode.
* 46 A ¶ STRIKE flashes on the screen in dying neon.
47 A ¶ They don't cheer.
48 A They stand there, grinning, like people who have just remembered how.
49 D PHOEBE [CONT'D] (quiet): Huh.

### SCENE s00793 | INT. MINIVAN - TOLL PLAZA - DAY
Detected names (may be incomplete or contain aliases): GERALD OKONJO-HART, SUNITA, GUS, PIPER, GRANDMA BERNADETTE, TOLL ATTENDANT
* 1 A ¶ Crammed.
* 2 A Juice boxes.
* 3 A A dashboard phone holder with a call in progress.
4 A ¶ GERALD OKONJO-HART, 40s, grips the wheel.
5 A SUNITA, 40s, wedges a map between her knees.
6 A In the back, GUS, 10, kicks the seat.
7 A PIPER, 14, stares at her phone.
8 D GRANDMA BERNADETTE [V.O.] (over speaker): Are you there yet? Dinner's getting cold.
9 D GERALD: We're at the toll, Mom.
10 D GUS: Mom, tell Piper to stop breathing on me.
11 D PIPER: I'm not even close.
12 D SUNITA: Both of you. Quiet.
13 A ¶ At the booth, a TOLL ATTENDANT, 20s, leans out.
14 A He eyes the van's tangle of wires and limbs.
15 D ATTENDANT: Four fifty.
16 A ¶ Gerald pats his pocket.
17 A Pats the other.
18 A Pats the dashboard.
19 D GERALD: Sunita. Wallet?
20 D SUNITA: You had it.
21 D GERALD: I gave it to you.
22 D SUNITA: You gave me nothing.
23 D GRANDMA BERNADETTE [V.O.]: Is that a toll? Gerald, I told you to take the back road!
* 24 A ¶ The van behind them honks.
* 25 A Then another.
26 A Gus presses the window button.
* 27 A Dollar bills and napkins fly out.
28 A The attendant snatches one.
29 D ATTENDANT: That's a coupon for sandwiches.
30 D GUS: Is it good?
31 D ATTENDANT: Buy one get one.
32 A ¶ He waves them through.
33 A Gerald stares at him.
* 34 A The bar lifts.
35 D GRANDMA BERNADETTE [V.O.]: Did you pay?
36 D GERALD (driving away): We did, Mom. Sort of.

### SCENE s00794 | INT. EMPTY COURTROOM - EVENING
Detected names (may be incomplete or contain aliases): ALISTAIR VAN TONGEREN, ROXANNE KIPCHOGE
* 1 A ¶ Rows of oak benches.
* 2 A The jury box sits dark.
* 3 A A single banker's lamp glows on the bench.
4 A ¶ ALISTAIR VAN TONGEREN, 50s, prosecutor, rehearses before the empty jury box, one hand on the rail.
5 A ROXANNE KIPCHOGE, 40s, defense counsel, sits in the gallery eating sunflower seeds from a paper cone.
6 A She does not interrupt.
7 D ALISTAIR: Ladies and gentlemen of the jury.
8 A ¶ He pauses to let them settle.
* 9 A No one is there.
10 A He lets them settle anyway.
11 D ALISTAIR [CONT'D]: You will hear that my opponent's client is a good man. A family man. A man who coaches Little League.
12 A ¶ Roxanne cracks a seed.
13 D ROXANNE (to herself): Twelve years.
14 D ALISTAIR (not turning): You're not allowed to heckle the dress rehearsal.
15 D ROXANNE: I'm not heckling. I'm counting.
16 A ¶ He turns.
17 A Leans against the rail.
18 D ALISTAIR: You're early.
19 D ROXANNE: So are you.
20 D ALISTAIR: I'm an early man.
21 D ROXANNE: You're a nervous man.
22 A ¶ Alistair straightens his tie.
23 A Looks at the empty seats.
24 D ALISTAIR: Ladies and gentlemen. The evidence will show...
25 D ROXANNE (over him): The evidence will show a boy with a wrench and a bad alibi.
26 D ALISTAIR: Roxanne.
27 D ROXANNE: Alistair.
* 28 A ¶ Silence.
29 A She drops the cone.
30 A Stands.
31 D ROXANNE [CONT'D]: My client didn't do it.
32 D ALISTAIR: Then prove it.
33 D ROXANNE: That's your job to disprove, remember?
34 D ALISTAIR (under his breath): God help us both.
35 A ¶ He gathers his notes.
36 A She walks to the defense table and sits.
37 A He sits at the prosecution's.
* 38 A The lamp hums between them.

### SCENE s00795 | INT. FLORIST'S WALK-IN COOLER - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IMELDA STROUD, KARINA VOLKOVA
* 1 A ¶ Buckets of lilies.
* 2 A Roses in sleeves.
* 3 A Cold fog off the compressor.
* 4 A A single caged bulb.
5 A ¶ DETECTIVE IMELDA STROUD, 40s, gloves, trench coat, closes the door and lets it click.
6 A She leans on a shelf of carnations.
7 A ¶ KARINA VOLKOVA, 30s, florist, apron stained green, stands rigid with a pair of pruning shears in both hands.
8 D IMELDA: Put those down.
9 D KARINA: No.
10 D IMELDA: Karina.
11 D KARINA: You said you were alone.
12 D IMELDA: I am alone.
13 D KARINA: You said you'd tell no one.
14 D IMELDA: I haven't.
15 A ¶ Karina's eyes flick to the door.
16 A To the shears.
17 A Back.
18 D KARINA: He's going to find out.
19 D IMELDA: Who?
20 D KARINA: You know who.
21 D IMELDA: Say his name.
22 A ¶ Karina shakes her head.
23 A Her knuckles whiten on the handles.
24 D IMELDA [CONT'D]: Then say what he did.
25 D KARINA: He bought the van. He bought the van, and the lilies, and the church.
26 D IMELDA: Which church?
27 D KARINA: St. Anselm's. He bought the whole front pew.
28 A ¶ Imelda takes a step.
29 A Karina lifts the shears.
30 A Imelda stops.
31 D IMELDA: You think I'm here to arrest you.
32 D KARINA: Aren't you?
33 D IMELDA: No.
34 D KARINA: Then why the gloves?
35 D IMELDA: It's twenty degrees in here.
* 36 A ¶ A pause.
* 37 A A drip.
* 38 A The compressor hums.
39 D KARINA (small): Oh.
40 A ¶ Karina lowers the shears an inch.
41 A Imelda holds out a hand, palm up.
42 D IMELDA: Give them to me.
43 D KARINA: No.
44 D IMELDA: I'll give them back.
45 D KARINA: You won't.
46 D IMELDA: I will. When this is over.
47 A ¶ Karina laughs, a short bitter sound.
48 D KARINA: It's never over.
49 D IMELDA: It's over when you testify.
50 D KARINA: He has a brother.
51 D IMELDA: I know about the brother.
52 D KARINA: He has a cousin on the force.
53 D IMELDA: I know about the cousin.
54 D KARINA: Do you know about the judge?
55 A ¶ Imelda goes still.
56 D IMELDA: No.
57 D KARINA: Judge Morales buys flowers every Sunday. Lilies. Always lilies.
58 A ¶ Imelda exhales a long white plume.
59 A Takes off one glove.
60 D IMELDA: Thank you.
61 A ¶ She extends her bare hand again.
62 A Karina studies it.
63 A The shears slip a little.
64 D KARINA: He'll know it was me.
65 D IMELDA: Not if you walk out of here with a bouquet and a smile.
66 D KARINA: I don't smile.
67 D IMELDA: You'll learn.
68 A ¶ Karina drops the shears into a bucket of water.
* 69 A They sink.
70 A She wipes her palms on her apron, trembling.
71 D KARINA (whisper): I'm so tired.
72 D IMELDA: I know.
73 D KARINA: Do you?
74 D IMELDA: My sister ran a shop like this.
75 D KARINA: What happened?
76 D IMELDA: She stopped being afraid.
77 D KARINA: And?
78 D IMELDA: She sleeps now.
79 A ¶ Karina lets out a ragged breath.
80 A A smile, almost.
81 A She sits on an overturned crate.
82 A ¶ Imelda sits on another.
83 A Their knees nearly touch.
84 D KARINA: Can I have a cigarette?
85 D IMELDA: No smoking near the lilies.
86 D KARINA: Right. Sorry.
87 D IMELDA: Take this instead.
88 A ¶ She pulls a peppermint from her pocket.
89 A Karina unwraps it.
90 A Puts it in her mouth.
91 A ¶ They sit like that.
* 92 A The fog drifts.
* 93 A The compressor cycles off.
* 94 A Silence settles, soft as pollen.
95 D KARINA: Tomorrow?
96 D IMELDA: Tomorrow.
97 A ¶ Karina nods once.
98 A Pulls a single white lily from a bucket.
99 A Hands it over.
100 D KARINA: For the front pew.

### SCENE s00796 | INT. GLACIER CREVASSE - ICE CHAMBER - DAY
Detected names (may be incomplete or contain aliases): THEO MARSH-ADEYEMI, ISOLDE KARLSEN, BO PETRAKIS, COORDINATOR NAKAGAWA
* 1 A ¶ Blue light filtered through forty feet of ice.
* 2 A The walls drip in slow, patient beads.
* 3 A A shelf of old snow juts out above a bottomless dark.
4 A Three climbers lie wedged where the fall stopped them, their breath rising like prayers.
5 A ¶ THEO MARSH-ADEYEMI, 40s, broad-shouldered, rope burn weeping through his glove, props himself against the wall.
6 A Beside him ISOLDE KARLSEN, 30s, wiry, a headlamp dangling from her wrist, ties a sling from a torn jacket.
7 A A few feet farther BO PETRAKIS, 19, the youngest, sits with knees to chest and stares at his boots as if they might be someone else's.
* 8 A ¶ An old handheld radio lies in Isolde's lap, wrapped in a glove for warmth.
9 D ISOLDE: Hold still, Theo.
10 D THEO: I am still.
11 D ISOLDE: You're shaking.
12 D THEO: That's the cold.
13 D ISOLDE: That's your shoulder.
14 A ¶ She ties the knot.
15 A He hisses.
* 16 A The ice around them creaks softly.
17 A ¶ Bo lifts his head.
18 D BO: Is it supposed to do that?
19 D THEO: The ice? It sings. It means it's alive.
20 D BO: I don't like it.
21 D THEO: Nobody does.
22 A ¶ Isolde unwraps the radio, thumbs the switch.
* 23 A A hiss of static, thin as a thread.
24 D ISOLDE: Rescue, Rescue, this is Karlsen. Do you copy?
* 25 A ¶ Static.
26 A She waits.
* 27 A The ice drips.
28 D ISOLDE [CONT'D]: Rescue, Rescue. Three alive. Repeat, three alive.
* 29 A ¶ A long hiss.
* 30 A Then, faint:
31 D COORDINATOR NAKAGAWA [V.O.]: Karlsen, Nakagawa. Read you weak. Say position.
32 A ¶ Isolde closes her eyes, one second, as though she has been holding her breath since morning.
33 D ISOLDE: Crevasse, east of the col. Approximately forty feet down. One injured, shoulder.
34 D NAKAGAWA [V.O.]: Copy. Helicopter is grounded. Weather. Ground team is four hours out.
35 A ¶ Theo says nothing.
36 A Bo's boots go suddenly very interesting.
37 D ISOLDE: Four hours.
38 D NAKAGAWA [V.O.]: Conserve heat. Conserve battery. Do not sleep.
39 D ISOLDE: Understood.
40 D NAKAGAWA [V.O.]: You'll be fine, Isolde. I mean that.
41 A ¶ She smiles, the kind of smile that has no use for the words.
42 D ISOLDE: We'll be here.
43 A ¶ She turns the radio off.
44 A Sets it back in the glove.
45 A Slides over to Bo, shoulder to shoulder.
46 D BO: Four hours.
47 D ISOLDE: That's nothing.
48 D BO: It feels like a year.
49 D ISOLDE: Then tell me a story.
50 D BO: I don't have one.
51 D THEO: Everyone has one.
52 D BO: Mine's boring.
53 D THEO: Good. Boring is what we want.
54 A ¶ Bo almost laughs.
55 A The sound dies in his throat and becomes a small cough.
56 D BO: When I was eight, my dog got lost in a snowstorm.
57 D ISOLDE: Did you find her?
58 D BO: He came home on his own, three days later. Covered in ice.
59 D THEO: Smart dog.
60 D BO: Stubborn.
* 61 A ¶ The ice sings again, softer.
62 A Theo leans his head back.
* 63 A ¶ Overhead, a thread of light from the crevasse mouth slides across the wall, slow as a minute hand, and begins to fade.

### SCENE s00797 | INT. UNDERWATER HOCKEY POOL - NIGHT
Detected names (may be incomplete or contain aliases): COACH BEVERLY STANISLAUS, RUSLAN VOLODIN, LOTTIE FAIRBANKS, DEWAYNE PICKETT, PHAM
* 1 A ¶ Chlorine haze.
* 2 A A tiled deck.
* 3 A Six lanes taped off with orange cones.
* 4 A Snorkels and fins in rows along the wall.
5 A ¶ COACH BEVERLY STANISLAUS, 50s, whistle between her teeth, paces the deck.
6 A RUSLAN VOLODIN, 20s, the team captain, sits on the edge with his feet in the water, taping his stick.
7 A LOTTIE FAIRBANKS, 19, adjusts her mask, while DEWAYNE PICKETT, 22, the goalie, bounces on his toes and glares at the scoreboard.
8 A On the far side, MR. PHAM, 40s, the referee, in a black-and-white striped rash guard, checks his watch and says nothing.
9 A ¶ Beverly stops pacing.
10 A She blows the whistle once.
11 A Ruslan looks up.
12 A Lottie flinches.
13 A Dewayne turns from the board and starts toward her, but she holds up a hand and he stops.
14 D BEVERLY: Four seconds on the clock. Down one. Who wants it?
15 D RUSLAN: I do.
16 D DEWAYNE: You always do.
17 D RUSLAN: Somebody has to.
18 D LOTTIE: I'll take it, Coach.
19 D BEVERLY: You'll take the pass.
20 D LOTTIE: That's what I said.
21 D DEWAYNE (under his breath): That's not what you said.
22 A ¶ Lottie's mask snaps down.
23 A Ruslan rises, water streaming off his legs.
24 D RUSLAN: Say it again, Dewayne.
25 D DEWAYNE: I said it was a bad idea. Four seconds, one shot, all on you.
26 D RUSLAN: Then block better.
27 D DEWAYNE: I'm a goalie, not a miracle.
28 A ¶ Beverly steps between them.
29 A Pham finally blows his own whistle, a thin shriek.
30 A Everyone turns.
31 D PHAM: Gentlemen. Ladies. Positions.
32 A ¶ They slip into the water in single file, silent.
33 A Beverly stands on the deck, hands on her hips, watching the surface close over their heads.
* 34 A ¶ Under the lights, the pool goes still.
* 35 A Then a ripple.
* 36 A Then a roar of bubbles.

### SCENE s00798 | INT. PLANETARIUM DOME - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIE SOLOMONS, BILLIE CROSS
* 1 A ¶ Empty rows of recliners.
* 2 A The ceiling swims with painted stars.
* 3 A A projector the size of a dumbbell hums at the center.
4 A ¶ ARCHIE SOLOMONS, 40s, black turtleneck, wire cutters, hangs upside down from a catwalk and works on a panel.
5 A BILLIE CROSS, 30s, bandana, pushes a cart of equipment between the seats.
6 D ARCHIE: Billie. Light.
7 D BILLIE: Archie, we're in a planetarium.
8 D ARCHIE: So?
9 D BILLIE: So it's a room full of light.
10 D ARCHIE: Not that kind. Flashlight.
11 A ¶ She tosses one up.
12 A He catches it with his teeth.
13 D BILLIE: Gross.
14 D ARCHIE (mumbling around it): Efficient.
15 A ¶ He yanks a wire.
* 16 A The stars flicker.
* 17 A The dome goes dark for an instant, then returns as a different sky.
18 D BILLIE: That's not our constellation.
19 D ARCHIE: It's Orion's cousin.
20 D BILLIE: Orion doesn't have cousins.
21 D ARCHIE: Everybody has cousins, Billie.
22 A ¶ She rolls the cart under the projector.
23 A Pops its lid.
* 24 A Inside, a velvet-lined case.
* 25 A Inside the case: a glittering meteorite, black as oil.
26 D BILLIE: There she is.
27 D ARCHIE: Don't breathe on it.
28 D BILLIE: I'm not breathing.
29 D ARCHIE: You're breathing loudly.
30 A ¶ She holds her breath.
31 A Slides the rock into a lead bag.
* 32 A The dome shivers.
* 33 A Music swells.
* 34 A The stars begin to wheel on a timer.
35 A ¶ They freeze.
36 A Archie drops from the catwalk.
37 A Lands in a crouch.
38 D ARCHIE: Out. Now.
39 D BILLIE: Archie.
40 D ARCHIE: What?
41 D BILLIE: That was only the nine o'clock show on a timer.
42 D ARCHIE: Oh.

### SCENE s00799 | INT. MERIDIAN DYNAMICS - "SYNERGY POD" - DAY
Detected names (may be incomplete or contain aliases): PRISCILLA NWANKWO, GARETH BLOUNT-SATO
* 1 A ¶ A windowless closet with two beanbags, a motivational poster of a rowing team, and a whiteboard that reads "BRAINSTORM!!" in a hand that gave up.
2 A ¶ PRISCILLA NWANKWO, 30s, lanyard with seven badges, sits cross-legged on a beanbag with a laptop balanced on her knees.
3 A She types, deletes, types.
4 A A sticky note on her forehead reads "SYNERGY."
* 5 A ¶ The door opens.
6 A GARETH BLOUNT-SATO, 40s, vest over a tie, enters with a clipboard and a smile that has never been challenged.
7 A He doesn't knock.
8 A He never has.
9 D GARETH: Priscilla! How's the pod?
10 D PRISCILLA: Small.
11 D GARETH: Cozy! Love it. I'm doing the quarterly culture walk. Are you feeling aligned?
12 D PRISCILLA: I'm feeling beanbagged.
13 A ¶ Gareth laughs a hair too loud.
14 A He lowers himself onto the second beanbag, which sighs under him and lowers him farther than he intended.
15 A He flails, recovers, writes something on the clipboard, then holds it up so she can see: a smiley face with a frown on its forehead.
16 D GARETH: Quick pulse check. Scale of one to ten, how much do you love Meridian?
17 D PRISCILLA: Is this for HR?
18 D GARETH: It's for me.
19 D PRISCILLA: Seven.
20 D GARETH: Seven is fantastic. Seven means we have room to grow.
21 A ¶ She slides her laptop around.
* 22 A On it, a spreadsheet: a column of resignation dates, hers the first.
23 D PRISCILLA: It's a two on Friday.
24 D GARETH (reading, still smiling): Interesting. Interesting. Interesting.
25 A ¶ He peels off the sticky note she's been wearing and sticks it to the clipboard.
26 A Stands.
* 27 A The beanbag releases him with a soft sound.
28 D GARETH [CONT'D]: Let's circle back Monday.
29 D PRISCILLA: I'll be at the lake.
