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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0063.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02124 | INT. HOLLOWAY & SONS FUNERAL HOME - BACK ROOM - DAY
Detected names (may be incomplete or contain aliases): PRIYA SHENOY, POLLY
* 1 A ¶ Beige carpet.
* 2 A A box of tissues on every surface.
* 3 A A brass urn on a folding table between three siblings.
4 A ¶ PRIYA SHENOY, 40, sensible blazer, stirs coffee.
5 A LEOPOLD "POLLY" SHENOY, 35, rumpled suit, reads the ceiling.
6 A DEV SHENOY, 28, sunglasses indoors, bounces a knee.
7 D PRIYA: Dad would've wanted the lake.
8 D POLLY: Dad hated the lake.
9 D DEV: Dad hated everything with wet feet.
10 D PRIYA: So we scatter at the lake anyway.
11 A ¶ Polly nods.
12 A Dev nods.
13 A Priya sips.
14 A Nobody looks at the urn.
15 D POLLY: Who's holding it in the car?
16 D DEV: Not me.
17 D PRIYA: Not me.
18 D POLLY: Fine. Me.
19 A ¶ He picks up the urn.
20 A Weighs it in both hands.
21 A Frowns slightly.
22 A Sets it down again.
23 A Picks it up again.
24 D PRIYA: Polly.
25 D POLLY: It's fine.
26 D DEV: What's fine?
27 D POLLY: It's fine. Probably fine.
28 D PRIYA: Open it.
29 D DEV: Don't open it.
30 D POLLY: I'm opening it.
31 D PRIYA: Polly, we are not opening our dead father in a funeral home.
32 D POLLY: Dev, shut the door.
33 D DEV: It's shut.
34 A ¶ Polly twists the lid.
* 35 A A pale powder puffs.
36 A He sniffs.
37 A Dips a finger.
38 A Tastes.
39 A ¶ All three freeze.
40 A Priya sets her coffee down very carefully.
41 D POLLY (quiet): Buttermilk.
42 D DEV: What?
43 D POLLY: Pancake mix.
44 D PRIYA: Dad's pancake mix is at the lake house.
45 D DEV: Then where's Dad?
46 A ¶ They look at a second brass urn on the shelf behind them.
* 47 A Same size.
* 48 A Same dent.
49 A ¶ The three scatter toward the shelf, bumping shoulders, nobody speaking.

### SCENE s02125 | EXT. PLATTE RIVER FERRY - FLOOD STAGE - DAWN
Detected names (may be incomplete or contain aliases): SHERIFF AMOS DRUMMOND, CALEB DUNMORE, SILAS PRUITT
* 1 A ¶ A flat barge on a rope.
* 2 A Brown water, fast and wide.
* 3 A Mist hangs on the cottonwoods.
* 4 A The rope sings under the strain.
5 A ¶ SHERIFF AMOS DRUMMOND, 50s, iron-grey moustache, badge dull with rust, stands at the rail with a shotgun.
6 A CALEB DUNMORE, 30s, wrists chained, hat gone, a cut over one eye, sits on a crate.
7 A SILAS PRUITT, 70, one milky eye, ferryman, leans on the long pole and hums.
* 8 A ¶ The barge lurches.
9 A Drummond steadies.
10 A Dunmore grins.
11 D DUNMORE: Rope's fraying, Sheriff.
12 D DRUMMOND: Shut your mouth.
13 D PRUITT: He's right.
14 D DRUMMOND: Whose side are you on, Silas?
15 D PRUITT: The side that stays dry.
16 A ¶ Drummond swings the shotgun toward Pruitt.
17 A Pruitt does not blink.
18 D DRUMMOND: Cut the rope and I cut you.
19 D PRUITT: Then who poles?
20 D DUNMORE: Let me pole. I grew up on this river.
21 D DRUMMOND: You grew up in a jail.
22 D DUNMORE: After the river.
23 A ¶ Drummond steps close.
24 A Dunmore stares up at him.
25 D DRUMMOND: Talk.
26 D DUNMORE: My brother's buried in Kearney. Left me a map. Gold under the old ferry landing, before the flood took it. I tell you, you let me go.
27 D DRUMMOND: No.
28 D DUNMORE: Half. You and me. Silas gets the barge.
29 D PRUITT: I got a barge.
30 D DUNMORE: A better one.
31 D DRUMMOND: You're lying.
32 D DUNMORE: Maybe. But what's a lie when the rope's about to snap?
33 D PRUITT: Sheriff.
34 D DRUMMOND: Not now, Silas.
35 D PRUITT: Sheriff, look downriver.
* 36 A ¶ A tree trunk the size of a church bell tower tumbles out of the mist, root-wad first, straight for the barge.
37 D DRUMMOND: Pole! Pole!
38 A ¶ Pruitt jams the pole.
39 A Dunmore lunges for the key on Drummond's belt.
40 A Drummond clubs him with the shotgun stock.
41 A Dunmore drops.
* 42 A The trunk clips the barge.
* 43 A Planks scream.
44 A ¶ Drummond is on his knees.
45 A Dunmore is on his back.
46 A Pruitt hangs from the pole, laughing, wild.
47 D PRUITT: That's the river!
* 48 A ¶ The rope snaps.
* 49 A The barge spins free into the brown.

### SCENE s02126 | INT. STRIKE ZONE LANES - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR NELL AKINTOLA
* 1 A ¶ A defunct bowling alley.
* 2 A Dead pinsetters hulk in the dark beyond the glass.
* 3 A A steel desk.
* 4 A A cassette recorder on the blotter.
* 5 A A rotary phone, unplugged.
* 6 A ¶ Nothing moves.
* 7 A ¶ A key turns.
* 8 A The door sticks, then gives.
9 A INSPECTOR NELL AKINTOLA, 50s, raincoat, flat shoes, a paper evidence bag under her arm, steps in and shakes water from her hair.
10 A ¶ She sets the bag on the desk.
11 A Presses PLAY on the recorder.
12 D NELL [V.O.] (tape, tinny): Tuesday. Strike Zone. Owner says he never left the shift.
13 D NELL: He did.
14 D NELL [V.O.] (tape): Receipts say otherwise. Parking stub at the Harbour Hotel, ten fifteen.
15 D NELL: Ten fourteen, actually.
16 D NELL [V.O.] (tape): Lane eleven. The foul line. Something under the tape.
17 D NELL: Three keys on a ring. Tagged. Not his.
18 D NELL [V.O.] (tape): Ask about the night man.
19 D NELL: Night man doesn't exist.
20 D NELL [V.O.] (tape): So who signed the sheet?
21 D NELL: That's what I'm asking, Nell.
22 A ¶ She stops the tape.
23 A Rewinds a few seconds.
24 A Presses PLAY.
25 D NELL [V.O.] (tape): Ask about the night man.
26 A ¶ She nods.
27 A Takes out a pen.
28 A Writes on her palm.
29 A Switches off the recorder.
30 D NELL: Night man.
31 A ¶ She turns off the light and leaves.
* 32 A The door clicks shut.

### SCENE s02127 | EXT. FROZEN SEA - STRANDED WHALING SHIP - DAY
Detected names (may be incomplete or contain aliases): ANNIKA LUND, OLEG VARGA, PELL, STRANGER, HOLLIS
* 1 A ¶ The hull of a three-masted whaler locked in pack ice.
* 2 A Rigging furred with rime.
* 3 A A gale is dying.
* 4 A The light is low and silver.
5 A ¶ On the listing deck, ANNIKA LUND, 30s, wrapped in oilskins, tends a tin stove.
6 A OLEG VARGA, 50s, harpooner's shoulders, gaunt, feeds splinters into the flame.
7 A DR. PELL, 60s, round spectacles, shivers under a sealskin blanket and counts tins of beans.
8 A ¶ A figure appears on the ice, dragging a sled.
9 A He stops at the rail.
10 A Tall, bearded, hollow-cheeked, frost in his beard.
11 D STRANGER: Is there room by the fire?
12 D ANNIKA (rifle half-lifted): Who are you?
13 D STRANGER: A man who walked a long way.
14 D OLEG: No one walks on this ice.
15 D STRANGER: I did.
16 D DR. PELL: Annika, let him up. He's half dead.
17 A ¶ Annika lowers the rifle.
18 A Oleg throws down a rope.
19 A The stranger climbs, crumples on the deck.
20 A Annika drapes a coat over him.
21 D ANNIKA: Do you have a name?
22 D STRANGER: Hollis. Matthew Hollis. Third mate of the Albatross.
23 D DR. PELL: The Albatross went down in March.
24 D HOLLIS: Four of us got to the ice. I'm what's left.
25 D OLEG: Four? Where are the others?
26 A ¶ Hollis stares into the stove.
27 A Does not answer.
28 D DR. PELL: Beans, Mr. Hollis?
29 D HOLLIS: Please.
30 A ¶ Pell hands him a tin and a spoon.
31 A Hollis eats slowly, like a man learning how.
32 D ANNIKA: Oleg. Make room.
33 A ¶ Oleg shifts over without a word.
34 A Hollis settles against the mast, eyes half shut, the fire on his face.
35 D OLEG: How far is the coast?
36 D HOLLIS: Two weeks. If the ice holds.
37 D DR. PELL: And if it doesn't?
38 D HOLLIS: Then you've already had your supper.
39 A ¶ Annika almost laughs.
40 A Oleg looks away.
* 41 A The stove ticks.

### SCENE s02128 | INT. CLOCKMAKER'S SHOP - CANAL STREET - AFTERNOON
Detected names (may be incomplete or contain aliases): MIREILLE DUVAL, ABERNATHY SOLOMON, KASPAR DUVAL, TEDDY, ILIC, CONSTABLE ROSSITER
* 1 A ¶ A narrow shop wedged between a bakery and a bridge.
* 2 A Every wall ticks.
* 3 A Hundreds of clocks, none of them agreeing.
* 4 A Light through the bow window falls in long yellow bars across the workbench, where a velvet cloth lies flat and empty.
5 A ¶ MIREILLE DUVAL, 60s, black wool, gloves still on, sits very straight in the only good chair.
6 A She does not look at the clocks.
7 A She looks at the cloth.
8 A ¶ MR. ABERNATHY SOLOMON, 70, solicitor, bow tie and a folder of papers, clears his throat and gets no answer from the room.
9 A ¶ KASPAR DUVAL, 30s, her nephew, leans in the doorway to the back, arms folded, a gold watch on his wrist that is a little too new.
10 A ¶ TEODORA "TEDDY" ILIC, 19, apprentice, ink on her thumbs, stands by the workbench and keeps wiping the same spot with a rag.
11 A ¶ CONSTABLE ROSSITER, 40s, damp from the canal towpath, stands inside the door and holds his helmet in both hands like a collection plate.
12 D SOLOMON: If everyone is seated.
13 D KASPAR: No one is seated.
14 D SOLOMON: If everyone is present, then.
* 15 A ¶ A cuckoo clock, somewhere, strikes the wrong hour.
16 A Nobody reacts.
* 17 A The cuckoo goes in.
18 D SOLOMON [CONT'D]: Mr. Duval left the shop and its contents to his wife.
19 D MIREILLE: Yes.
20 D SOLOMON: With the exception of one item.
21 A ¶ Teddy's rag stops.
22 A Kaspar's jaw moves, as if chewing something small.
23 D MIREILLE: The Brandt.
24 D SOLOMON: The Brandt regulator. Walnut case. 1791. Described in the will as "bequeathed to the one who has kept it running."
25 D KASPAR: That's me.
26 D TEDDY: It isn't.
27 D KASPAR: Excuse me?
28 D TEDDY: It stopped on Friday.
* 29 A ¶ Silence.
* 30 A A hundred clocks tick on.
31 D ROSSITER: Stopped how, miss?
32 D TEDDY: Someone opened the case. Took out the weights.
33 D MIREILLE: Kaspar. Your hands.
34 D KASPAR: What about them?
35 D MIREILLE: They are very clean for a man who works at a bank.
36 A ¶ Kaspar looks at his hands.
37 A He turns them over.
38 A He pushes them into his pockets.
39 D SOLOMON: I must remind everyone that the bequest is conditional.
40 D ROSSITER: Conditional on what?
41 D SOLOMON: On the clock being found in working order.
42 D MIREILLE: Then it is nobody's.
43 D SOLOMON: Madam, that would be the simplest reading.
44 A ¶ Mireille stands.
45 A Smooths her coat.
46 A She crosses to the workbench and lifts the edge of the velvet cloth with one gloved finger.
* 47 A Underneath is a small brass key.
48 A ¶ She studies it.
49 A Slides it into her handbag.
50 D TEDDY: That's the winding key.
51 D MIREILLE: Yes. It was hanging round his neck when they found him.
52 D ROSSITER: Madam, that is evidence.
53 D MIREILLE: Then you may have it, Constable. After tea.
54 A ¶ She walks to the door.
55 A Rossiter steps aside without being asked.
56 D KASPAR: Aunt Mireille.
57 D MIREILLE (not turning): Wind your own watch, Kaspar.
58 A ¶ She leaves.
* 59 A The bell above the door rings once.
60 A Kaspar looks down at the gold watch.
* 61 A It has stopped.
62 A ¶ Teddy puts the rag down.
63 A Takes her coat from the hook.
64 D TEDDY: I'll bring the weights back tomorrow.
65 D SOLOMON: You have them?
66 D TEDDY: I did not say that.
67 A ¶ She leaves too.
* 68 A The bell rings.
69 A Rossiter puts on his helmet.
70 D ROSSITER: Mr. Solomon, I think I shall need to read that will myself.
71 D SOLOMON: It is rather long.
72 D ROSSITER: I have time.
73 A ¶ Solomon opens his folder.
74 A Kaspar watches the cloth.

### SCENE s02129 | INT. COUNTY COURTHOUSE - COURTROOM 4 - NIGHT
Detected names (may be incomplete or contain aliases): LUCIA FERRANTE, BENEDICT HAYES, JONAH KEPLER, INTERCOM
* 1 A ¶ Power's out.
* 2 A Emergency lights buzz amber.
* 3 A The gallery is empty.
* 4 A Four people, one table.
5 A ¶ LUCIA FERRANTE, 40s, defense counsel, sleeves rolled.
6 A BENEDICT HAYES, 50s, prosecutor, tie loosened.
7 A JONAH KEPLER, 22, defendant, hoodie, handcuffed to the chair.
* 8 A Rain on the windows.
9 D HAYES (to the room): Anyone have a flashlight?
10 D FERRANTE: Phone. Dying.
11 D JONAH: I could've told you the wiring in this place is garbage.
12 D FERRANTE: Jonah. Quiet.
13 D INTERCOM [O.S.] (crackling): Courtroom Four, this is Security. Generator's down. Stay seated. Repeat. Stay seated.
14 D HAYES: Copy.
15 D FERRANTE (muttering): Of course it dies on closing argument.
16 A ¶ Hayes stands.
17 A Paces.
18 A Stops at the exhibit table.
19 D HAYES: Ms. Ferrante, the knife.
20 D FERRANTE: What about it?
21 D HAYES: It's gone.
22 A ¶ Ferrante's head snaps up.
23 A Jonah's chair scrapes.
24 D FERRANTE: Gone how?
25 D HAYES: Evidence bag's open. Tag's still there.
26 D JONAH: I didn't touch anything.
27 D FERRANTE: Jonah, shut up.
28 D HAYES (muttering): Chain of custody. Dear God.
29 A ¶ Hayes lunges for the bag.
30 A Ferrante gets there first.
31 A They both freeze.
* 32 A Under the tag, taped to the plastic, is a note.
33 A She reads it.
34 D FERRANTE (low): "Found in my locker. Sorry. -- Deputy Marsh."
35 A ¶ Hayes takes the note.
36 A Reads it.
37 A Sits down hard.
38 D JONAH: So, what, I'm free?
39 D HAYES: No.
40 D FERRANTE: Not yet.
41 D JONAH: But that's good, right?
42 D FERRANTE: Jonah.
43 D JONAH: Okay. Quiet.
* 44 A ¶ The lights stutter back on.
* 45 A The room is bright and ordinary.
46 A Hayes sets the note on the table between them, and leaves his hand flat on top of it.
47 D INTERCOM [O.S.] (crackling): Power's restored. Carry on.
48 A ¶ Nobody moves.

### SCENE s02130 | INT. VAULT 9 - SALT CAVERN SERVER ARCHIVE - CONTINUOUS
Detected names (may be incomplete or contain aliases): VESNA ROOK, HALF-TIDE
* 1 A ¶ Cathedral-high cavern carved from rock salt.
* 2 A Rows of black racks glitter with frost.
* 3 A Blue status lights blink in lines to the horizon.
* 4 A The air hums.
5 A ¶ VESNA ROOK, 40s, thermal suit, headlamp, kneels at an open rack and pulls cable.
6 A At her hip, a squat maintenance bot, HALF-TIDE, trundles on treads, tools folded under its chassis.
7 D HALF-TIDE: Rack forty-one. Temperature nominal.
8 D VESNA: Nominal is a lie. Frost on the casing.
9 D HALF-TIDE: Frost is within tolerance.
10 D VESNA: Tolerance doesn't breathe.
11 A ¶ She wipes the casing with a glove.
* 12 A Beneath the frost, a fingerprint.
13 D VESNA [CONT'D] (to herself): Someone's been here.
14 D HALF-TIDE: Visitor logs show no entries for nine years.
15 D VESNA: Logs lie, too.
16 A ¶ She pulls a handheld scanner, sweeps the aisle.
* 17 A A line of red dots blinks where the frost is thinnest.
18 D VESNA [CONT'D] (into her collar mic, to the surface): Control, Vault Nine. I have footprints in the dust. Fresh.
19 D HALF-TIDE: Control does not respond.
20 D VESNA: Control hasn't responded in four hours.
21 D HALF-TIDE: Correct.
22 D VESNA: You don't find that strange?
23 D HALF-TIDE: I find it consistent.
24 A ¶ Vesna stands.
* 25 A The cavern ticks as salt cools.
26 D VESNA: Follow the prints.
27 D HALF-TIDE: Recommend against.
28 D VESNA: Recommend noted.
29 A ¶ They walk.
* 30 A The headlamp throws her shadow forty feet up the wall.
* 31 A Rack after rack.
* 32 A At the end of the aisle, a steel door stands open, warm light spilling out.
33 D HALF-TIDE: That door is not on the schematic.
34 D VESNA: I noticed.
35 A ¶ She stops at the threshold.
* 36 A Inside: a cot, a stove, a wall of handwritten pages, a coffee mug still steaming.
37 D VESNA [CONT'D]: Somebody lives here.
38 D HALF-TIDE: Nobody lives here.
39 D VESNA: Then who made the coffee?
40 A ¶ Half-Tide extends a sensor stalk toward the mug.
41 D HALF-TIDE: Temperature seventy-one degrees Celsius.
42 D VESNA: Recent.
43 D HALF-TIDE: Very recent.
44 A ¶ They look at each other.
* 45 A Machine.
* 46 A Woman.
* 47 A The same breath held.
48 D HALF-TIDE [CONT'D]: Vesna.
49 D VESNA: Don't say it.
50 D HALF-TIDE: Exit route is behind us.
51 D VESNA: I know.
52 A ¶ She steps in anyway.
53 A Picks up one handwritten page.
54 A Reads it.
55 A Her face does not change.
56 D HALF-TIDE: What does it say?
57 D VESNA: My name.
58 A ¶ She lets the page fall.
* 59 A Every light in the vault goes out at once.
60 D VESNA [CONT'D] (in the dark): Half-Tide.
61 D HALF-TIDE [O.S.]: I am here.
62 D VESNA: Stay close.
63 D HALF-TIDE [O.S.]: Always.
* 64 A ¶ A single blue light blinks on at the far end of the cavern.
* 65 A Then another.
* 66 A Then every rack, in order, coming toward them.
67 D VESNA (to the dark, firm): All right. I'm listening.
* 68 A ¶ The lights stop a few feet away.
* 69 A The hum drops to a held note.

### SCENE s02131 | INT. FROSTLINE ARENA - ICE RESURFACER GARAGE - NIGHT
Detected names (may be incomplete or contain aliases): COACH BRONAGH QUILL, SLICK ADEYEMI, NEW GUY, ANNOUNCER, COACH, FINN
* 1 A ¶ A concrete garage under the stands.
* 2 A Steam from the melt pit.
* 3 A The ice resurfacer idles, humming.
* 4 A A radio on a shelf crackles with the third period.
5 A ¶ COACH BRONAGH QUILL, 50s, windbreaker, unlit cigar.
6 A SLICK ADEYEMI, 60, resurfacer driver, thermos, headphones around his neck.
7 A NEW GUY, 19, goalie pads half on, sits on an upturned bucket and stares at the floor.
8 D ANNOUNCER [V.O.] (radio): And the Wolves trail by one with six minutes left.
9 D COACH: Starter's got a broken wrist. You're in.
10 D NEW GUY: I know.
11 D COACH: Say something.
12 D NEW GUY: I don't feel anything.
13 D SLICK: That's the cold.
14 D COACH: That's nerves.
15 D COACH: Slick, wipe the blue line when the horn goes.
16 D SLICK: Slick wipes whatever Slick pleases.
17 A ¶ Slick offers the thermos.
18 A The kid takes it, sips, gags.
19 D NEW GUY: What is that?
20 D SLICK: Coffee and my wife's brandy.
21 D COACH: What's your name, kid? Really. Not "New Guy."
22 D NEW GUY: Finn. Finn Oduya.
23 D COACH: Finn. You ever play in front of eight thousand?
24 D FINN: Four. At a funeral.
25 D SLICK: That's a tougher crowd.
26 D ANNOUNCER [V.O.] (radio): And the horn sounds. Two minutes break.
* 27 A ¶ The garage door rumbles.
* 28 A Cold light spills in.
29 D COACH: Go.
30 A ¶ Finn stands.
31 A Buckles the last strap.
32 A Slick fires up the resurfacer.
33 A Coach sets the cigar in Finn's glove, like a sacrament.
34 D FINN: I'll bring it back.
35 D COACH: You'll bring a win back.
36 A ¶ Finn skates out into the light.

### SCENE s02132 | INT. HARBOR FERRY TERMINAL - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): RUTH KOWALCZYK, ARJUN BOSE, LINNEA STRAND
* 1 A ¶ Plastic chairs bolted in rows.
* 2 A A vending machine hums.
* 3 A Through the window, the ferry rocks at the dock.
* 4 A At a folding table in the corner, a deposition.
5 A ¶ RUTH KOWALCZYK, 50s, attorney, reading glasses on a chain.
6 A ARJUN BOSE, 40s, deponent, anxious, tie too tight.
7 A LINNEA STRAND, 30s, court reporter, fingers poised over the stenotype.
8 D RUTH (to the room): Let the record show we are in the Harbor terminal because the courthouse flooded.
9 D LINNEA: Noted.
10 D RUTH: Mr. Bose, state your name.
11 D ARJUN: Arjun Bose.
12 D RUTH: And your occupation?
13 D ARJUN: Dock inspector.
14 D RUTH: Were you on duty on the fourteenth of March?
15 D ARJUN: I was.
16 D RUTH: Did you sign the crane certificate that morning?
17 D ARJUN: I... may have.
18 D RUTH: May have?
19 D ARJUN: Did.
* 20 A ¶ The vending machine clunks.
* 21 A A bag of chips falls.
22 D RUTH (muttering): Even the snacks have a better memory than my witness.
23 D ARJUN: I'm sorry?
24 D RUTH: Nothing. Next question. Mr. Bose, did you inspect the crane before signing?
25 D ARJUN: I inspected a crane.
26 D RUTH: Was it the crane in question?
27 D ARJUN: It was a crane.
28 D LINNEA (quietly): Counsel, I need a clear answer for the record.
29 D RUTH: Mr. Bose, it's either yes or no.
30 D ARJUN: No.
31 D RUTH: No, you did not inspect the correct crane?
32 D ARJUN: No, I did not.
33 D LINNEA: Could you both speak one at a time?
34 D RUTH: Mr. Bose, who told you to sign?
35 D ARJUN: My supervisor.
36 D ARJUN: My supervisor said it was routine.
37 D RUTH: Your supervisor is a Mr. Dillard.
38 D ARJUN: Yes.
39 D RUTH (to the room): Let the record show the witness has just changed his testimony.
* 40 A ¶ The ferry horn sounds.
41 A All three look up.
42 A Linnea types.
43 A Arjun loosens his tie.

### SCENE s02133 | INT. SAN BERNARDO ABBEY - WINE CELLAR - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT CORNELIUS HOLLOWAY, PRIVATE BAPTISTE FONTAINE, CORPORAL YUKI TAKADA, BROTHER ANSELMO, OBERLEUTNANT KRAUSS
* 1 A ¶ Barrel-vaulted stone.
* 2 A Rows of dusty casks.
* 3 A A single oil lamp.
* 4 A Somewhere above, the dull thud of artillery, steady as a clock.
5 A ¶ SERGEANT CORNELIUS HOLLOWAY, 35, helmet off, Tommy gun across his knees, sits on a cask.
6 A PRIVATE BAPTISTE FONTAINE, 20, French-Canadian, shivering, wraps a bandage round his own forearm.
7 A CORPORAL YUKI TAKADA, 25, Nisei interpreter, sits on the stairs with an Italian phrasebook.
8 A ¶ BROTHER ANSELMO, 70, Benedictine, stout, wine-stained robe, pours three tin cups from a cask.
9 A His hands are steady.
10 D HOLLOWAY: Brother, how long have you been in this cellar?
11 D ANSELMO: Since the bombs came. Eleven days.
12 D TAKADA (translating): Undici giorni.
13 D ANSELMO (in English): Eleven. Yes. Thank you, my son.
14 A ¶ Fontaine takes a cup.
15 A Holloway takes a cup.
16 A He sniffs and drinks.
17 D FONTAINE: Sergeant, he's good.
18 D HOLLOWAY: The wine?
19 D FONTAINE: The wine. And the Brother.
20 D TAKADA: Sergeant, the church above us is clear. No enemy.
21 D HOLLOWAY: Good.
* 22 A ¶ Silence.
* 23 A The artillery thuds.
* 24 A Dust sifts from the vault.
25 D ANSELMO: You are hungry. I have bread.
26 D HOLLOWAY: We're fine.
27 D ANSELMO: I insist.
28 A ¶ He disappears behind a rack of casks.
29 A Holloway looks at Takada.
30 A Takada shakes his head.
31 A Fontaine leans toward Holloway.
32 D FONTAINE: Sergeant, he said "eleven days." But the shelling started on the ninth.
33 D HOLLOWAY: Say that again.
34 D FONTAINE: Day nine. The shelling.
35 A ¶ Holloway stands.
36 A Slowly.
37 A His hand finds the Tommy gun.
38 D HOLLOWAY: Corporal. Ask him who the bread is for.
39 D TAKADA (calling): Padre, per chi è il pane?
* 40 A ¶ No answer.
41 A Takada stands too.
42 A Fontaine raises his rifle.
* 43 A The lamp flickers.
44 D TAKADA [CONT'D] (whisper): He's not answering.
45 A ¶ Holloway edges past the first cask.
46 A Fontaine follows him, boots silent on the flagstones.
* 47 A The second rack.
* 48 A The third.
* 49 A A narrow door, ajar, set in the stone.
50 D HOLLOWAY: Brother Anselmo. Come out.
* 51 A ¶ The door swings open.
52 A Anselmo stands in the opening, a loaf of bread in each hand.
53 A Behind him, a pale OFFICER in a grey-green greatcoat sits on a pallet, leg splinted, a Luger in his fist, pointed at Holloway.
54 A ¶ OBERLEUTNANT KRAUSS, 30, blond, sweat-slick, eyes steady.
55 D KRAUSS (accented): Gentlemen. Please do not make the Brother choose.
56 A ¶ Fontaine's rifle swings to Krauss.
57 A Takada's pistol clears the holster.
58 A Holloway's Tommy gun rises.
59 A Everyone holds.
60 D ANSELMO (softly): No more dying in my cellar.
61 A ¶ Nobody moves.
* 62 A The artillery thuds.
* 63 A A barrel creaks.
64 A Anselmo lowers the bread to the stone floor, one loaf and then the other, and raises both open hands between the guns.
65 D HOLLOWAY: Brother, step aside.
66 D ANSELMO: No.
67 D KRAUSS: He's a stubborn man.
68 D FONTAINE: Sergeant, I can't see a shot.
69 D HOLLOWAY: Then don't take it.
70 D TAKADA (to Krauss, in German): Wie lange hier?
71 D KRAUSS: Eleven days.
72 A ¶ Takada closes his eyes for a long moment.
73 D TAKADA: Sergeant. He was telling the truth.
74 D HOLLOWAY: He was telling us something.
75 A ¶ He lowers the Tommy gun an inch.
76 A Fontaine does not.
77 A Krauss does not.
* 78 A The oil lamp gutters.

### SCENE s02134 | EXT. MUSHROOM RING - OLD FOREST - DUSK
Detected names (may be incomplete or contain aliases): BRAMBLE HOLLINGS, RUSKIN
* 1 A ¶ A circle of pale toadstools in black moss.
* 2 A Fireflies the color of tea.
3 A ¶ BRAMBLE HOLLINGS, 30s, stands at the edge in a patched coat, a lantern at her feet.
4 A She does not step in.
5 A Across the ring a thin man in a rust-colored coat leans on a birch.
6 A RUSKIN, ageless, sharp-faced.
7 A He watches her.
8 D BRAMBLE: You said you'd be gone by now.
9 D RUSKIN: I said I'd try.
10 A ¶ She picks up the lantern.
11 A Puts it down again.
12 A He tilts his head, the way a fox does.
13 D BRAMBLE: My mother left a debt.
14 D RUSKIN: She left a bargain.
15 A ¶ She takes a step.
* 16 A The toadstools sway.
17 A He flinches, then masks it.
18 D BRAMBLE: Say it plainly. What do you want?
19 D RUSKIN: The lantern.
20 A ¶ She looks at it.
21 A Her thumb finds the handle.
22 A For a moment she doesn't breathe.
23 A Then she kicks it across the ring.
* 24 A The glass cracks.
* 25 A The flame jumps and dies.
26 A ¶ He stares at the dark lantern.
27 A His shoulders drop.
28 A He bows, a little too low.
29 D RUSKIN [CONT'D]: That's all.
30 A ¶ She turns away and does not look back.
* 31 A Behind her, a fox barks once, softly, and the fireflies go out.

### SCENE s02135 | INT. HALLORAN PLANETARIUM - DOME - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR ARISTIDE BOUCHARD, JUNE ASANTE, ROBBO DUNN, DETECTIVE MAXWELL CROFT, WOMAN IN VIOLET, CORDELIA VANE
* 1 A ¶ The dome overhead is black and bare, the projector asleep in the center of the room like a great iron insect.
* 2 A Rows of tilted seats.
* 3 A A single work lamp on a stand.
4 A ¶ Five people, arranged by accident into a rough circle.
5 A No one has taken a seat.
6 A ¶ PROFESSOR ARISTIDE BOUCHARD, 70, tweed, bow tie, pale from a long illness, cradles a tin of lens cloths.
7 A JUNE ASANTE, 20s, his research assistant, a clipboard against her chest.
8 A ROBBO DUNN, 50s, caretaker, boiler suit, holds a ring of keys the size of a fist.
9 A DETECTIVE MAXWELL CROFT, 40s, trench coat, notebook, unhurried.
10 A ¶ And in the center aisle, a WOMAN IN VIOLET, 50s, gloves, veil pushed back, who has not moved since the lights went down.
11 D CROFT: Professor, you reported the break-in at nine.
12 D BOUCHARD: At nine twenty.
13 D CROFT: And the thing that was stolen.
14 D BOUCHARD: A glass plate. A photograph of the sky. Nothing the world would miss.
15 A ¶ Robbo looks at his keys.
16 A June adjusts her clipboard.
17 A The Woman in Violet watches the empty dome.
18 D CROFT: Then why did the alarm trip on all four doors at once?
19 D ROBBO: Old wiring.
20 D CROFT: Is that so.
21 D ROBBO: Old wiring. Aye.
22 A ¶ June clears her throat.
23 A Everyone looks.
24 A She looks away.
25 D CROFT: Miss Asante?
26 D JUNE: The plate was from 1919. It showed the eclipse that proved Einstein.
27 D BOUCHARD: June.
28 D JUNE: It's worth something, Professor.
29 D BOUCHARD: Not to us.
30 D CROFT: To someone.
31 A ¶ The Woman in Violet takes one step toward the projector.
32 A Robbo takes one step back.
33 D WOMAN IN VIOLET: You've left the lamp on.
34 D ROBBO: Aye, ma'am.
35 D WOMAN IN VIOLET: It spoils the dark.
36 A ¶ Robbo reaches for the switch.
37 A Hesitates.
38 D CROFT: Leave it.
39 A ¶ The Woman in Violet turns.
40 A Slowly.
41 A Regards the detective with the same calm she brought to the dome.
42 D CROFT [CONT'D]: And you are?
43 D WOMAN IN VIOLET: A friend of the late Mr. Halloran.
44 D BOUCHARD: Cordelia.
* 45 A ¶ The name falls into the room like a coin.
46 A June looks at the professor.
47 A Robbo looks at the floor.
48 A ¶ CORDELIA VANE, as the Woman in Violet is now, smiles faintly.
49 D CORDELIA: Aristide. You look well.
50 D BOUCHARD: I look dying.
51 D CORDELIA: Yes. That too.
52 A ¶ She opens her handbag.
53 A Takes out a flat object wrapped in black silk.
54 A Sets it gently on the arm of a seat.
* 55 A Nobody speaks.
56 D CROFT: Is that what I think it is?
57 D CORDELIA: It is what it always was.
58 A ¶ She walks past all of them, out through the dark doorway of the dome.
* 59 A Her heels tick on the marble.
* 60 A Fade.
61 A The professor does not look at the plate.
62 A He looks at his hands.
63 D JUNE: Professor?
64 D BOUCHARD: Turn the lamp off, Robbo.
65 A ¶ Robbo does.
* 66 A The dome goes black.
* 67 A Somewhere overhead, a switch clicks, and a thousand false stars bloom.

### SCENE s02136 | INT. BELL TELEPHONE EXCHANGE - SWITCHBOARD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ETHEL PARKER, MAUDE ABERNATHY-LOWE, HATTIE JOHNSON, MISS CALLOWAY, CALLER
* 1 A ¶ 1924.
* 2 A Three rows of operators in headsets, a wall of brass jacks and cords.
* 3 A After the crisis, the room is loud with quiet.
* 4 A Rain on the window.
* 5 A Someone is crying softly.
6 A ¶ ETHEL PARKER, 22, redhead, sits at position four.
7 A MAUDE ABERNATHY-LOWE, 30s, steady hands, position five.
8 A HATTIE JOHNSON, 19, new, position six, red-eyed, rubbing her wrist.
9 A Behind them, MISS CALLOWAY, 50s, supervisor, high collar, paces the line with a clipboard.
10 D ETHEL: Hattie, you did right.
11 D HATTIE: I put through the wrong call, Ethel.
12 D MAUDE: You put through a call at the right time, Hattie. The wrong number got the right warning.
13 D MISS CALLOWAY: Ladies, voices.
14 D ETHEL: Yes, Miss Calloway.
* 15 A ¶ A light blinks on Hattie's board.
16 A Everyone looks.
17 D MAUDE: Hattie. Plug in.
18 D HATTIE: I can't.
19 D MAUDE: You can.
20 D HATTIE: Maude, I can't.
21 D MISS CALLOWAY: Miss Johnson. Take the call.
22 A ¶ Hattie plugs in.
23 A Her hand trembles.
24 D HATTIE: Number, please.
25 D CALLER [O.S.] (over the line): Hello? Is this the exchange? This is Mrs. Whitmore on Elm Street. The river is up to our porch.
26 D HATTIE: We know, ma'am.
27 D CALLER [O.S.]: The man said to call and tell you the sirens did not sound.
28 D ETHEL (leaning in): They're ringing now, ma'am.
29 D MAUDE: Tell her to take the children upstairs.
30 D HATTIE: Mrs. Whitmore, take the children upstairs.
31 D CALLER [O.S.]: Yes. Yes, we will. Thank you, dear.
* 32 A ¶ The line goes dead.
33 A Hattie holds her cord a moment.
34 D MISS CALLOWAY (softly, to Hattie): That was well done.
35 D HATTIE: Thank you, Miss Calloway.
36 D ETHEL: Maude, do you think they'll be all right?
37 D MAUDE: Most of them.
* 38 A ¶ Another light blinks.
* 39 A Another.
40 A Hattie, Ethel, and Maude plug in together, calm, practiced.
41 A Miss Calloway watches, then lowers her clipboard and, for the first time all night, sits.

### SCENE s02137 | INT. STARLITE DRIVE-IN - PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): LENNY SZABO, DOLORES CRUZ, BIG RAFA, ORTEGA, TIM FAIRWEATHER, OLD KOSTAS
* 1 A ¶ A cramped concrete room above the snack bar.
* 2 A Two ancient projectors, cold.
* 3 A Film cans stacked like pizza boxes.
* 4 A A card table lit by a bare bulb.
* 5 A Through the little window: an empty lot of speaker posts, rusting under a half moon.
6 A ¶ Five men and women, one deck of cards.
7 A ¶ LENNY SZABO, 50s, hawk-nosed, camel-hair coat, deals.
8 A DOLORES CRUZ, 40s, silver hoops, poker face, sits with her back to the wall.
9 A RAFAEL "BIG RAFA" ORTEGA, 30s, enormous, patient, sits by the door.
10 A TIM FAIRWEATHER, 20s, sweaty, borrowed suit, a stack of chips he does not own.
11 A OLD KOSTAS, 70, knit cap, silent, sipping a paper cup of ouzo.
* 12 A ¶ The pot in the middle is mostly cash.
* 13 A A little too much.
14 D LENNY: Tim. Your bet.
15 D TIM: Give me a second.
16 D DOLORES: You've had a second.
17 D TIM: I'm thinking.
18 D KOSTAS: He is sweating.
19 D TIM: It's hot in here.
20 D RAFA: It's forty degrees.
21 D TIM: Hot for me.
22 D LENNY: Tim, bet or fold.
23 D TIM: Raise. Five hundred.
24 D DOLORES: With whose money?
25 D TIM: Mine.
26 D LENNY: Your money was in your uncle's safe, which is now a hole in a wall.
27 D TIM: I don't know what you mean.
28 D RAFA: Tim.
29 D TIM: I don't know.
30 D KOSTAS: Dolores. Count the chips.
31 A ¶ Dolores stacks his chips with long fingers.
32 A Counts under her breath.
33 A Looks up.
34 D DOLORES: Two thousand, one hundred.
35 D LENNY: Exactly what was in the safe.
* 36 A ¶ Silence.
* 37 A The projector fans tick as they cool.
38 A Rafa shifts his weight against the door.
39 A Tim looks at the window.
40 D TIM: Okay, listen.
41 D LENNY: Sit.
42 D TIM: It was a loan. I was going to put it back.
43 D DOLORES: With what?
44 D TIM: With this pot.
45 D KOSTAS (laughing, dry): He was going to win it back from the man he stole it from.
46 D TIM: Mr. Szabo, I'm sorry. Honestly.
47 D LENNY: Sorry is a word. Does it have a face?
48 D TIM: No.
49 D LENNY: Then it can't pay.
50 A ¶ Rafa clicks the lock on the door.
51 A Dolores slides her hand into her bag.
52 A Kostas lifts his cup, drinks, and sets it down very carefully.
53 D TIM: Wait. Wait. I can fix it.
54 D RAFA: Sit down, Tim.
55 D TIM: No, no, no.
56 A ¶ He lunges for the window.
57 A Rafa's arm catches him by the collar.
* 58 A The card table goes over.
* 59 A Chips and cash scatter across the concrete.
60 D DOLORES: Rafa!
61 D LENNY: Let him go.
62 D RAFA: Boss?
63 D LENNY: Let him go. He has nowhere to run.
64 A ¶ Rafa lets go.
65 A Tim crumples against the film cans.
66 A Lenny crouches beside him, collects a hundred-dollar bill from the floor, folds it neatly.
67 D LENNY [CONT'D] (gently): Tim. What's in the cans?
68 D TIM: Movies.
69 D LENNY: Real movies?
70 D TIM (small): Some.
71 A ¶ Lenny opens a can.
* 72 A Inside, instead of film: bricks of cash, banded.
73 A Dolores whistles.
74 A Kostas lights a cigarette.
75 D LENNY: Oh, Tim.
76 A ¶ The booth door shudders under a kick from outside.
77 A Rafa draws.
78 A Dolores kills the bulb.
* 79 A Darkness.
80 A ¶ Gunfire stitches the room from end to end.

### SCENE s02138 | EXT. BARNSTORMING FIELD - CORNFIELD DIAMOND - DAY
Detected names (may be incomplete or contain aliases): SKIPPER GUS LARUE, DIZZY PETROV, TOBIN
* 1 A ¶ 1931.
* 2 A A baseball diamond mown into a Nebraska cornfield.
* 3 A A wooden dugout built from a hay wagon.
* 4 A Dust.
* 5 A A crowd of two hundred cheers from the stalks.
6 A ¶ SKIPPER GUS LARUE, 60, cap crushed, tobacco in his cheek, leans on the wagon rail.
7 A DIZZY PETROV, 25, big-armed pitcher, sits on a bale, an ice pack on his elbow.
8 A Little TOBIN, 11, the batboy, hugs a stack of bats three times too large.
9 D SKIPPER (to the whole dugout): Gentlemen, we are up by one, and I do not wish to hear anything more about the elbow.
10 D DIZZY: Skipper, it's gone.
11 D SKIPPER: Which elbow?
12 D DIZZY: Mine.
13 D SKIPPER: Dizzy, you pitched a no-hitter in the fourth.
14 D DIZZY: I pitched a no-hitter with a ghost elbow.
15 D TOBIN: Is a ghost elbow bad?
16 D SKIPPER: Tobin, hush.
17 D DIZZY: It's cold, Tobin. And it hurts.
* 18 A ¶ The crowd roars.
* 19 A A ball cracks off a bat.
20 A Everyone in the dugout turns to see it sail over the corn.
21 D SKIPPER (muttering): Foul. Please, Lord, foul.
22 D TOBIN: It's fair! It's fair!
23 D DIZZY: Tobin, it's a long fly.
24 D SKIPPER: Hush, the two of you. Dizzy, get your glove.
25 D DIZZY: Skipper, I can't.
26 D SKIPPER: Then who?
27 D TOBIN: Me!
28 D SKIPPER: Tobin, you're eleven.
29 D TOBIN: I can throw!
30 D SKIPPER: Tobin, put down the bats.
31 A ¶ Tobin drops the bats with a clatter.
32 A Dizzy picks up the glove, groaning.
33 A The Skipper waves him toward the field.
34 D SKIPPER [CONT'D]: Go. Throw like it's the last one you've got.
35 D DIZZY: It might be.
36 D SKIPPER: Then throw it like you mean it.
37 A ¶ Dizzy trudges out.
* 38 A The crowd stands.
39 A Tobin climbs the wagon and watches him go, hands in his hair.
40 D TOBIN: He'll do it, right, Skipper?
41 D SKIPPER: He'll do something.

### SCENE s02139 | INT. STARVE CREEK SALT WORKS - STAGE STOP - NIGHT
Detected names (may be incomplete or contain aliases): PERPETUA OAKES, JUBAL CREED, DEPUTY HENRY TASKER, BELLE, VANCE
* 1 A ¶ A low adobe room crusted with white.
* 2 A Salt in the walls, salt on the table, salt on the beams like frost.
* 3 A A cookstove ticks.
* 4 A A single lamp swings from a nail.
* 5 A Outside, wind drags the dust against the shutters.
6 A ¶ PERPETUA OAKES, 50s, innkeeper, broad hands, apron grey with age, ladles stew into a tin bowl and sets it, without ceremony, in front of JUBAL CREED, 40s, a drifter in a sun-bleached duster, who has not taken his hat off or his eyes from the door.
7 A At the end of the table sits DEPUTY HENRY TASKER, 22, a badge pinned to a shirt too clean for this country.
8 A He pushes beans around a plate and tries not to look at the stranger's holster.
9 D PERPETUA: Eat, Mr. Creed. The stew will not improve with watching.
10 D JUBAL: Ma'am, I am watching the door, not the stew.
11 D TASKER: Expecting someone?
12 D JUBAL: Always.
13 D TASKER: There's no one out there. Nearest town's forty miles.
14 D JUBAL: Forty miles is a Tuesday.
15 A ¶ Perpetua snorts, wipes her hands on her apron, pours coffee.
16 A Tasker clears his throat.
17 D TASKER: Mr. Creed, I have to ask your business at Starve Creek.
18 D JUBAL: Sleeping.
19 D TASKER: In a salt works.
20 D JUBAL: It's quiet.
21 D PERPETUA: It's quiet because the last man who made noise is buried behind the privy.
22 D TASKER: Mrs. Oakes!
23 D PERPETUA: Well, he is.
* 24 A ¶ The door bangs open.
* 25 A Wind and dust sweep through the room.
* 26 A The lamp lurches on its nail.
27 A In the doorway stands ISABELLE "BELLE" VANCE, 30s, a black leather coat dripping dust, a rifle in the crook of one arm and a folded paper in her free hand.
28 A She shuts the door with her boot.
29 A Perpetua stiffens.
30 A Tasker's chair scrapes back.
31 A Jubal doesn't move at all, but his hand has found the edge of the table.
32 D BELLE: Evening, all.
33 D PERPETUA: We're full.
34 D BELLE: You're four. I counted the horses.
35 D TASKER: Ma'am, this is a private table.
36 D BELLE: Then I'll stand.
37 A ¶ She unfolds the paper and lays it on the salt-crusted wood, face up, under the lamp.
* 38 A A wanted poster.
* 39 A A sketched face, hat low, jaw square.
40 D BELLE [CONT'D]: Jubal Creed. Five hundred dollars. Mexican border, Santa Rita, the payroll coach.
41 D JUBAL: You've mistaken me for a better-looking man.
42 D BELLE: Mr. Creed, I tracked you through three counties. I don't need your face.
43 D TASKER: Ma'am, I'm the law here.
44 D BELLE: Deputy, you're twenty-two. Sit.
45 A ¶ Tasker sits.
46 A Perpetua sets the ladle down very slowly.
47 A Belle regards Jubal across the table.
48 D JUBAL: Miss Vance, I'll make you an offer.
49 D BELLE: I don't take offers.
50 D JUBAL: You'll take this one. There was no payroll coach. There was a man in the coach who needed to disappear, and I helped him. For three hundred dollars. He's in Sonora, teaching school.
51 D BELLE: Whose man?
52 D JUBAL: A judge's.
53 D BELLE: Which judge?
54 D JUBAL: The one who signed this poster.
* 55 A ¶ Silence.
* 56 A The wind drops.
* 57 A The stove ticks.
58 A Belle looks at the poster as if for the first time.
59 A She turns it over.
60 A Reads the back.
61 D BELLE: There's a seal.
62 D JUBAL: There always is.
63 D TASKER: That's the county seal.
64 D PERPETUA: Henry, whose side are you on?
65 D TASKER: I don't know, Mrs. Oakes.
66 D BELLE: Deputy. Whose signature is on this?
67 D TASKER (small): Judge Garrity's.
68 A ¶ Belle folds the paper.
69 A Looks at Tasker, then Jubal, then the door.
70 D BELLE: Mrs. Oakes, I believe I'll take that stew after all.
71 A ¶ Perpetua ladles.
72 A Belle sits.
73 A Rifle on her knees.
74 A The four of them eat in a silence full of arithmetic.

### SCENE s02140 | INT. ROLLERAMA SKATE CENTER - MAIN FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): DANI MORALES, INTERCOM, KALLIS
* 1 A ¶ 1986.
* 2 A After closing.
* 3 A The disco ball turns slowly, scattering coins of light on an empty maple floor.
* 4 A Speakers hiss.
* 5 A Carpeted benches.
* 6 A Hundreds of rental skates racked on the wall like a choir.
7 A ¶ DANI MORALES, 16, Walkman, jean jacket with a band patch, sits on the rail lacing a pair of beat-up quads.
8 A She breathes carefully, like someone who has rehearsed this.
9 D INTERCOM [O.S.] (crackling): Dani? Is that you out there?
10 D DANI (startled): It's me, Mr. Kallis.
11 D INTERCOM [O.S.]: I told you the rink closes at eleven.
12 D DANI: I know. I'm just... finishing.
13 D INTERCOM [O.S.]: Finishing what?
14 D DANI: My last lap.
* 15 A ¶ A long pause on the intercom.
* 16 A A click.
* 17 A A heavy door opens somewhere.
* 18 A Footsteps cross the carpet.
19 A ¶ MR. KALLIS, 60s, the owner, cardigan, keys on a retractor, thick glasses, stands at the edge of the floor.
20 A He holds a mop like a staff and a Styrofoam cup of cold coffee.
21 D KALLIS: Your last lap.
22 D DANI: Yes, sir.
23 D KALLIS: Your mother called.
24 D DANI: Of course she did.
25 D KALLIS: She thought you might be here.
26 D DANI: I'm always here.
27 D KALLIS: Yes. That's what worries her.
28 A ¶ Dani stands on her skates, wobbles, finds the balance.
29 A She pushes off the rail, glides ten feet, and stops.
30 D DANI: Mr. Kallis, can I ask you something?
31 D KALLIS: It's your last lap. Ask.
32 D DANI: Do you think it matters? That I'm leaving?
33 D KALLIS: Leaving the rink?
34 D DANI: Leaving town.
35 A ¶ Kallis leans the mop on the rail.
36 A Takes off his glasses.
37 A Cleans them on his cardigan.
38 D KALLIS: Dani, I opened this rink in 1971. Forty kids skated here that first night. Do you know how many of them still live in this town?
39 D DANI: How many?
40 D KALLIS: Two. One of them is the mailman.
41 D DANI: That's sad.
42 D KALLIS: No. It's what a rink is. A place you leave from.
43 A ¶ Dani considers that.
44 A She rolls closer to him, slow and uncertain.
45 D DANI: My dad skated here.
46 D KALLIS: He did. He was terrible.
47 D DANI: He told me he was great.
48 D KALLIS: He told everyone he was great. That was the whole trouble.
49 A ¶ Dani laughs, a short sharp surprise.
50 A Then her face crumples.
51 A She wipes her nose on her sleeve.
52 D DANI: I don't want to go.
53 D KALLIS: Yes you do.
54 D DANI: How do you know?
55 D KALLIS: Because you came to say goodbye to the floor, not to me.
56 A ¶ Dani glances at the floor.
* 57 A At the lights spinning across the maple.
58 D DANI: It's a really good floor.
59 D KALLIS: I refinish it every June.
60 D DANI: I know. I helped you.
61 D KALLIS: So you did.
62 A ¶ He crosses to the sound booth, flips a switch.
* 63 A A slow song starts.
* 64 A Something with synthesizers and a long, aching bridge.
65 A Dani looks up.
66 D DANI: Mr. Kallis. Is this the couples skate?
67 D KALLIS: It's your last lap. I don't make the rules.
68 A ¶ Dani lets out a small, wet laugh and starts to skate.
69 A Slowly at first, then with a long glide that carries her all the way around the rink.
70 A Kallis, by the booth, turns off the overhead lights.
* 71 A Only the disco ball remains.
72 D DANI (calling, passing): Mr. Kallis, am I good?
73 D KALLIS: You are terrible.
74 D DANI (still skating, grinning): Just like my dad.
75 D KALLIS: Better.
76 A ¶ She comes around again.
77 A This time he steps onto the floor in his loafers, arms out, as if to catch her.
78 A She skates past, close enough to touch.
79 A Their fingertips brush.
* 80 A ¶ The song swells.
* 81 A The ball spins.
82 A The old man stays at center floor as the girl circles him, once, twice, a third time, and then drifts toward the exit, where the door is propped open on the cold bright night.
83 D DANI [CONT'D]: Bye, Mr. Kallis.
84 D KALLIS: Bye, Dani.
85 A ¶ She doesn't look back.
* 86 A The song fades.
* 87 A The disco ball keeps turning.

### SCENE s02141 | EXT. HOT-AIR BALLOON - OVER THE TANEZROUFT DESERT - DAY
Detected names (may be incomplete or contain aliases): PILOT MAREN COLE, BOY, AMADI
* 1 A ¶ The envelope is half-collapsed, patched with a dozen mismatched swatches of canvas.
* 2 A The wicker basket drags a shadow across a sea of red dunes that goes on to every horizon.
* 3 A No road.
* 4 A No river.
* 5 A A wind that tastes of iron.
6 A ¶ PILOT MAREN COLE, 50s, leather helmet pushed back, sun-cracked lips, sits against the burner and rations water with a bottle cap.
7 A Opposite her, a BOY, 12, thin as a pole in a man's flight jacket, stares at the horizon without blinking.
8 D MAREN: Drink.
9 D BOY: You first.
10 D MAREN: I had mine.
11 D BOY: You didn't.
12 D MAREN: Then drink half and give me the rest.
13 A ¶ The Boy sips.
14 A Hands her the bottle.
15 A She does not drink, just holds it.
16 D BOY: What's your name?
17 D MAREN: Maren.
18 D BOY: I'm not going to call you that.
19 D MAREN: You can call me whatever you like. What do I call you?
20 D BOY: Nothing yet.
21 D MAREN: That's a bad name.
* 22 A ¶ The balloon dips, then lifts again.
* 23 A The burner coughs.
24 A Maren jams a boot against the gas line and it steadies.
25 D MAREN [CONT'D]: Propane's low. Forty minutes of flame, maybe less.
26 D BOY: Then what?
27 D MAREN: Then we go where the wind sends us.
28 D BOY: Is that far?
29 D MAREN: No farther than we've come.
30 A ¶ The Boy shifts.
31 A A silver chain slides from his collar.
* 32 A A small tin medal on the end.
* 33 A Engraved: AMADI.
34 D MAREN [CONT'D]: That's your name.
35 D BOY: It's my brother's name.
36 D MAREN: Where's your brother?
37 D BOY: In the plane.
38 A ¶ Maren looks at the dunes.
* 39 A A long way off, a thin black thread of smoke rises, flattens, wavers in the heat.
40 D MAREN: Amadi.
41 A ¶ The Boy looks at her.
42 D MAREN [CONT'D]: That's a good name. Two syllables. Easy to shout.
43 D AMADI: Don't.
44 D MAREN: Why not?
45 D AMADI: When you shout, somebody doesn't come.
46 A ¶ Maren says nothing.
47 A She puts the bottle in his hands.
48 D MAREN: Drink the rest, Amadi.
49 A ¶ He drinks.
50 A She watches the smoke.
* 51 A The burner flames sputter, and for the first time a thin wind catches the envelope and turns the basket, very slowly, toward the thread of black.
52 D AMADI: Maren.
53 D MAREN: Yes.
54 D AMADI: Is that where we are going?
55 D MAREN: That is where the wind is going.
* 56 A ¶ The flame dies.
* 57 A Silence.
* 58 A The basket swings.
* 59 A The desert slides under them like a tide.

### SCENE s02142 | INT. HOTEL BELMONT-CRANE - PNEUMATIC TUBE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE ISIDORE QUAYLE, CONCIERGE THEO LAMBERT, GLADYS BRANDYWINE, OPERATOR
* 1 A ¶ A windowless room behind the front desk.
* 2 A Brass tubes snake up the walls to every floor, thumping quietly with canisters in transit.
* 3 A A sorting table.
* 4 A A single green-shaded lamp.
* 5 A A black candlestick telephone on a stool.
6 A ¶ DETECTIVE ISIDORE QUAYLE, 50s, rumpled overcoat, hat in hand, studies a brass canister.
7 A CONCIERGE THEO LAMBERT, 30s, tailcoat, silver hair too early, stands very straight at the table.
8 A MRS. GLADYS BRANDYWINE, 60s, hotel owner, pearls, black dress, sits on a wooden chair with her handbag in her lap.
9 D QUAYLE: Mr. Lambert, how long have you operated the tubes?
10 D LAMBERT: Eleven years, sir.
11 D QUAYLE: And this evening you sent a canister to room 614.
12 D LAMBERT: At eleven oh two. A message from the front desk.
13 D QUAYLE: What was the message?
14 D LAMBERT: I didn't read it.
15 D MRS. BRANDYWINE: He never reads them, Detective.
16 D QUAYLE: Madam, I'm asking Mr. Lambert.
17 D MRS. BRANDYWINE: And I am telling you that he is a professional.
18 D LAMBERT: Thank you, Mrs. Brandywine.
19 D QUAYLE: Who gave you the message?
20 D LAMBERT: A guest. A lady in grey.
21 D MRS. BRANDYWINE: Gladys.
22 D QUAYLE: I beg your pardon?
23 D MRS. BRANDYWINE: My name is Gladys. I wore grey tonight.
24 D QUAYLE (slowly): Madam. Are you telling me you wrote the message?
25 D MRS. BRANDYWINE: I am telling you nothing, Detective. I am correcting Mr. Lambert's description.
26 D LAMBERT: Mrs. Brandywine, I never said it was you.
27 D MRS. BRANDYWINE: No, Theo. You didn't.
* 28 A ¶ The telephone rings.
29 A Everyone stops.
30 A Quayle lifts the receiver.
31 D QUAYLE: Quayle.
32 D OPERATOR [O.S.] (over the line): Detective, I have a call from Room 614.
33 D QUAYLE: Put it through.
34 D OPERATOR [O.S.]: Sir, it's already connected. Sir, I think the line is open.
35 D QUAYLE: Is anyone speaking?
36 D OPERATOR [O.S.]: No sir. I hear a clock.
37 D QUAYLE: A clock?
38 D OPERATOR [O.S.]: Ticking. Very loud.
39 A ¶ Quayle holds the receiver away from his ear.
40 A All four hear it faintly, a metronome in the dark: tick, tick, tick.
41 D LAMBERT: The grandfather clock in the penthouse hall.
42 D MRS. BRANDYWINE: That clock stopped in 1929.
43 D QUAYLE: Then who wound it?
44 A ¶ Neither answers.
* 45 A A canister thumps in the tube.
* 46 A A second, a third.
* 47 A They roll into the sorting tray, one after another.
48 D LAMBERT: These aren't mine.
49 D MRS. BRANDYWINE: Open them.
50 D QUAYLE: Madam!
51 D MRS. BRANDYWINE: Open them, Detective, or I will.
52 A ¶ Quayle snaps the first one open.
53 A Pulls out a slip of cream paper.
54 A Reads it.
55 A His face goes blank.
56 D LAMBERT: What does it say?
57 D QUAYLE: "He's behind the wall."
* 58 A ¶ Silence.
* 59 A The tubes thump.
* 60 A The clock ticks on the telephone.
61 A Mrs. Brandywine stands, smooths her dress.
62 D MRS. BRANDYWINE: I told you not to open them.
63 D OPERATOR [O.S.] (over the line, faint): Sir? Sir? The ticking has stopped.
* 64 A ¶ The lamp flickers, then goes out.
* 65 A In the dark, the tubes all begin to thump together.

### SCENE s02143 | INT. GOAT YOGA BARN - MORNING
Detected names (may be incomplete or contain aliases): NAMASTE, HORTENSE PLUMB, CLEMENT
* 1 A ¶ A sun-struck barn with rubber mats on the floor and bleating goats everywhere.
* 2 A Hand-lettered sign: "NAMASTE, KIDS."
* 3 A A speakerphone propped on a hay bale.
4 A ¶ HORTENSE PLUMB, 70, purple leggings, silver braid, folded into a perfect downward dog, a goat standing serenely on her lower back.
5 A She has the stillness of a tax auditor and the patience of a glacier.
6 D CLEMENT [V.O.] (speakerphone, tinny): Mother, are you doing yoga with farm animals again?
7 D HORTENSE: It is goat yoga, Clement. The goat is the instructor.
8 D CLEMENT [V.O.] (speakerphone): The goat is standing on you.
9 D HORTENSE: Correct.
10 D CLEMENT [V.O.]: Mother, we have discussed this.
11 D HORTENSE: Clement, we have discussed nothing. You talk and I wait.
12 D CLEMENT [V.O.]: I'm worried about the knees.
13 D HORTENSE: The knees are at peace.
14 A ¶ The goat shifts.
15 A Hortense does not.
16 D CLEMENT [V.O.] (speakerphone): Mother, I'm coming over.
17 D HORTENSE: Clement, no.
18 D CLEMENT [V.O.]: Mother, yes.
19 A ¶ The goat hops off her back.
20 A Hortense unfolds one vertebra at a time, stands, turns to the phone with magnificent calm, and, as she answers, the goat chews the hem of her leggings.
21 D HORTENSE: Then bring a carrot.

### SCENE s02144 | EXT. COUNTRY ROAD - STOPPED SCHOOL BUS - NIGHT
Detected names (may be incomplete or contain aliases): CORMAC, TEO, ISLA, NKECHI
* 1 A ¶ Thick white fog.
* 2 A The bus idles, hazards ticking orange.
* 3 A Four teenagers inside, no driver.
4 A ¶ CORMAC, 16, stands in the aisle with a flashlight.
5 A TEO, 17, crouches behind a seat with a cracked phone.
6 A ISLA, 16, grips the emergency window latch.
7 A NKECHI, 15, sits rigid at the front, hands in her lap.
8 A ¶ He sweeps the beam down the aisle.
* 9 A Nothing but empty seats.
10 A She stares at the dashboard, which glows green.
11 A He thumbs his phone and curses.
12 A She presses the window glass with her palm.
13 A He catches her eye.
14 A She shakes her head.
15 D CORMAC: Where did Mr. Delroy go?
16 D TEO: He said he'd check the engine.
17 D ISLA: That was an hour ago.
18 D NKECHI (not turning): Stop talking.
19 D TEO: What?
20 D NKECHI: Something is on the roof.
21 A ¶ They all look up.
22 A A slow drag of fingers across metal, from the back of the bus to the front.
23 A He raises the flashlight.
24 A She pulls the latch.
25 A He stops her wrist.
* 26 A The drag stops above the door.
27 D CORMAC (whisper): Nobody breathe.
* 28 A ¶ The door lever, with no one near it, turns by itself.
* 29 A The folding door hisses open.
* 30 A Fog pours in like milk.
* 31 A Footsteps climb one step.
* 32 A Then two.
* 33 A Then a voice, warm and wet and familiar, speaks from the dark between the seats.
34 D NKECHI (in a flat, wrong voice, Mr. Delroy's): Everybody have their seatbelts on?
* 35 A ¶ Nobody has.
36 A They all scream.

### SCENE s02145 | INT. SKERRIGAN POINT LIGHTHOUSE - KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR ODILE FARR, BART, GRIGG, SISTER AGATHA, PIPPIN, COMMISSIONER
* 1 A ¶ Whitewashed stone.
* 2 A A coal stove.
* 3 A A table with five chairs and a dead man's teacup still half full.
* 4 A The lamp above turns slowly, sweeping the window with light.
5 A ¶ INSPECTOR ODILE FARR, 40s, rain-wet coat, stands at the head of the table with a notebook.
6 A BARTHOLOMEW "BART" GRIGG, 60, the assistant keeper, grey beard, wrings his cap.
7 A SISTER AGATHA, 70, a nun in a black habit, folds her hands.
8 A PIPPIN, 10, a boy, sits cross-legged under the table with a toy lighthouse.
9 D ODILE: Who last saw Keeper Thorne alive?
10 D BART: Me. Supper, nine o'clock.
11 D AGATHA: And I brought him tea at ten.
12 D PIPPIN (under the table): I saw him at eleven.
13 A ¶ All heads turn.
14 A Pippin looks up, wide-eyed.
15 D ODILE: Where?
16 D PIPPIN: On the stairs. Going up.
17 D BART: Boy, that's not possible. The door was locked.
* 18 A ¶ The telephone on the wall rings.
19 A Everyone freezes.
20 A Odile lifts it.
21 D ODILE: Farr.
22 D COMMISSIONER [V.O.] (phone): Inspector, we have the autopsy. Thorne died at nine thirty.
23 D ODILE: Then who went up the stairs at eleven?
* 24 A ¶ The lamp overhead stops turning.
* 25 A Light holds on the window, still and white.

### SCENE s02146 | EXT. FLOODED RIVER - DEBRIS RAFT - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN RENATA SOUZA, ABEL OKUMU, TRUDY HALVORSEN, LENA, RADIO
* 1 A ¶ A raft of roof planks and oil drums turns in brown current.
* 2 A A drowned town drifts by: a steeple, a bus stop, a pink bicycle.
3 A ¶ CAPTAIN RENATA SOUZA, 40s, scarred forearms, braces a pole.
4 A ABEL OKUMU, 17, bails water with a bucket.
5 A TRUDY HALVORSEN, 60s, holds a small radio in a freezer bag.
6 A A little girl, LENA, 6, hugs a plastic dinosaur and doesn't speak.
7 D RADIO [V.O.] (static): ...repeat, any survivors on the river, hold position, we're coming...
8 D TRUDY: They're coming!
9 D RENATA: Don't wave the radio, Trudy, keep it dry.
* 10 A ¶ A tree rolls out of the current and strikes the raft.
11 A Everyone stumbles.
12 A Abel drops the bucket.
13 A Trudy loses her grip on the radio bag.
14 A Lena falls and the dinosaur skates into the river.
15 D LENA: Rex!
16 A ¶ Abel dives for it.
17 A Renata grabs his collar.
18 A The dinosaur bobs once, twice, and Abel reaches out his whole length, grabs it, and slaps it back into Lena's arms.
19 D ABEL: Got him.
20 A ¶ Lena says nothing.
21 A She just holds him tight.
22 D RADIO [V.O.] (static): ...we can see you...
* 23 A ¶ A helicopter thunders over the trees.
24 A All four of them look up.
* 25 A Nobody speaks.

### SCENE s02147 | EXT. HIGHWAY 9 UNDERPASS - DAY
Detected names (may be incomplete or contain aliases): BARTEK LISOWSKI, JULES, PENELOPE
* 1 A ¶ A white delivery van reading "SWEET NOTHINGS BAKERY" sits wedged under a concrete overpass, its roof crushed against the girders.
* 2 A Traffic backs up for a mile.
* 3 A Horns.
4 A ¶ BARTEK LISOWSKI, 50s, driver, round and sweating, stands on the bumper inspecting the roof with the dignity of a surgeon.
5 A His assistant JULES, 22, nose ring, apron over a hoodie, holds a phone to her ear and a clipboard to her chest.
* 6 A The back doors are open.
* 7 A Inside, a seven-tier wedding cake, miraculously upright, trembles with every honk.
8 D JULES (into the phone): Pen, we're fine. We're almost there.
9 D PENELOPE [V.O.] (phone): The ceremony is in twenty minutes.
10 D JULES: Yes. Yes. I know.
11 D BARTEK (to himself): Twelve feet two. The sign said twelve feet six.
12 D JULES (covering the phone): Bartek, the sign was for the other bridge.
13 D BARTEK: There is only one bridge.
14 D JULES: There are two. We took the wrong one.
15 D PENELOPE [V.O.] (phone): Jules, what was that?
16 D JULES: Nothing! A bird!
17 D BARTEK (to the traffic): Please! Please! A little patience!
18 A ¶ A horn answers him.
19 A Then another.
20 A He mops his forehead.
21 D BARTEK [CONT'D] (to Jules): Let the air out of the tires.
22 D JULES: The tires?
23 D BARTEK: It lowers the van. An inch. Maybe two.
24 D PENELOPE [V.O.] (phone): Jules, I can hear honking. Where are you?
25 D JULES: It's a parade.
26 D PENELOPE [V.O.]: On a Saturday morning?
27 D JULES: It's a very Saturday parade.
28 A ¶ Bartek kneels.
29 A Unscrews a valve.
* 30 A Hiss.
* 31 A The van sinks half an inch, then stops.
* 32 A The cake sways.
33 A Jules gasps.
34 A Bartek holds up one palm like a conductor.
35 D BARTEK: Steady. Steady.
* 36 A ¶ The cake settles.
37 A A man in the next car leans on his horn.
38 D BARTEK [CONT'D] (whisper): I will end him.
39 D JULES: Bartek!
40 D BARTEK: Pardon. A joke.
41 D PENELOPE [V.O.] (phone, sharp): Jules. Are you at the church, or are you not at the church?
42 D JULES: Pen, we will be at the church. I swear.
43 A ¶ Bartek unscrews the second valve.
* 44 A The van sinks another inch.
* 45 A The roof shrieks off the girder.
* 46 A The van rolls free.
* 47 A The cake lurches.
48 A Jules shrieks.
49 A Bartek, arms wide, stands in the road in front of the van as if he could catch the cake with his body.
* 50 A ¶ It stays.
* 51 A All three seconds of silence are enormous.
52 D BARTEK [CONT'D] (to the traffic, hoarse): You may go now.
* 53 A ¶ Horns erupt, joyfully.

### SCENE s02148 | INT. SUNDERLY'S HOARD - INSIDE A DRAGON'S TOOTH - NIGHT
Detected names (may be incomplete or contain aliases): GRETEL VOSS, SUNDERLY
* 1 A ¶ A hollow in an ancient fang, wide as a cottage.
* 2 A Gold coins pile up like dunes in the dark.
* 3 A Dragon breath stirs the air, warm, sulfurous.
4 A ¶ GRETEL VOSS, 20s, soot-streaked, sword drawn, edges toward a chalice on a gilt pillar.
5 A Behind her, in the dark beyond the tooth, SUNDERLY, a dragon, enormous, ancient, amused.
6 A Only its voice and an amber eye show.
7 D SUNDERLY [O.S.]: Little thief. You are in my tooth.
8 D GRETEL: I noticed.
9 D SUNDERLY [O.S.]: It is the one that hurts.
10 D GRETEL: I'm sorry.
11 D SUNDERLY [O.S.]: You are not sorry. You are armed.
12 D GRETEL: Both can be true.
13 D SUNDERLY [O.S.]: Show me the sword.
14 A ¶ Gretel lifts the blade.
15 A It trembles.
16 A She lowers it.
17 D SUNDERLY [O.S.]: Show me the other thing in your pocket.
18 D GRETEL: There is no other thing.
19 D SUNDERLY [O.S.]: There is always another thing.
20 A ¶ She pulls a small iron pick from her coat.
21 D GRETEL: For the tooth.
22 D SUNDERLY [O.S.]: You came to pull my tooth?
23 D GRETEL: I came for the chalice. The pick was for the lock. But the tooth is rotten. I can fix it.
24 D SUNDERLY [O.S.]: If I let you.
25 D GRETEL: If you let me.
* 26 A ¶ Silence.
* 27 A The amber eye blinks, slow as a sunrise.
28 D SUNDERLY [O.S.]: Then do it quickly.
29 D GRETEL: Then hold still.
30 A ¶ She wedges the pick into the black cavity.
* 31 A The tooth cracks.
* 32 A A scream of dragon, a quake in the gold, and a coin avalanche that buries her to the knees.
33 A She laughs, spitting coins.

### SCENE s02149 | INT. ORIENT NIGHT TRAIN - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): CLARA WINTERBOURNE, ANTON VASS, PEPE
* 1 A ¶ 1938.
* 2 A White tablecloths.
* 3 A Silver coffee pots.
* 4 A Lamplight swaying with the rails.
* 5 A Beyond the windows, black hills and distant farm lights.
6 A ¶ CLARA WINTERBOURNE, 28, emerald gown, gloves, sips tea at a corner table.
7 A Across from her, ANTON VASS, 32, dinner jacket, a pianist's long fingers and a sad smile.
8 A PEPE, 50s, waiter, white jacket, hovers with a pot.
9 D ANTON: You're quiet tonight.
10 D CLARA: The train does that to me.
11 D ANTON: It's the rhythm. It makes you think of everything you've left.
12 D CLARA: Or everything you're going to.
13 D ANTON: You sound like a woman with a plan.
14 D CLARA: I sound like a woman with a ticket.
15 D ANTON: To where?
16 D CLARA: Vienna.
17 D ANTON: Ah. Concert season.
18 D CLARA: Not for the concerts.
19 D ANTON: Then what?
20 D CLARA: A wedding.
21 A ¶ Anton laughs lightly.
22 A It stops.
23 D ANTON: Whose?
24 D CLARA: Mine.
25 D ANTON: Congratulations. To whom?
26 D CLARA: A man named Julian Vass.
27 A ¶ Anton goes very still.
28 A Pepe backs away from the table with the coffee pot, silent as a cat.
29 D ANTON: Julian Vass is my brother.
30 D CLARA: I know.
31 D ANTON: You've never mentioned him.
32 D CLARA: You've never asked what I was running toward.
33 D ANTON: And tonight, on this train, on this particular train, you decided to sit at my table.
34 D CLARA: I decided to see what kind of man hasn't spoken to his brother in six years.
35 D ANTON: And what kind is that?
36 D CLARA: The kind who plays at midnight so no one hears him.
37 A ¶ Anton lifts his teacup.
38 A Sets it down without drinking.
39 D ANTON: Do you love him?
40 D CLARA: I haven't met him.
41 D ANTON: Then why?
42 D CLARA: He writes beautifully. And he talks about you.
43 D ANTON: What does he say?
44 D CLARA: That you were the better pianist.
45 A ¶ Anton closes his eyes.
* 46 A The train sways.
47 A Pepe, from across the room, drops a spoon.
48 D ANTON: Clara.
49 D CLARA: Yes.
50 D ANTON: Would you like to hear what I play at midnight?
51 D CLARA (softly): Very much.

### SCENE s02150 | INT. PELLETIER FAMILY CABIN - NURSERY - NIGHT
Detected names (may be incomplete or contain aliases): ROXANNE PELLETIER, GAVIN PELLETIER, MIMI, MONITOR VOICE
* 1 A ¶ A tiny room under the eaves.
* 2 A A white crib.
* 3 A A baby monitor on the dresser, its green light pulsing.
* 4 A Snow tapping the window.
5 A ¶ ROXANNE PELLETIER, 30s, stands over the crib in a bathrobe.
6 A She holds the rail.
7 A GAVIN PELLETIER, 30s, hovers in the doorway, flashlight in hand.
8 A Their daughter MIMI, 4, clutches a stuffed rabbit and peers out from behind his leg.
9 A ¶ She looks into the crib.
* 10 A It is empty.
11 A He looks at her.
12 A She looks at him.
13 A Mimi tugs his pajama sleeve.
14 D GAVIN: Rox. Where's the baby?
15 D ROXANNE: I don't know.
16 D MIMI: Mommy, who's in the crib?
17 D ROXANNE: Nobody, baby.
18 D MIMI: The lady.
19 A ¶ Roxanne turns.
20 A Mimi points at the crib.
* 21 A The mattress has a dent in it, the size of a small body.
* 22 A The monitor crackles.
23 D MONITOR VOICE [V.O.] (from the monitor, slow, lullaby cadence): Hush now. Hush now. She's sleeping.
24 A ¶ Gavin raises the flashlight.
25 A The beam shakes.
26 A He moves in front of Mimi.
27 A She grabs Roxanne's hand.
28 D ROXANNE: Who is this?
29 D MONITOR VOICE [V.O.]: Hush, hush. Don't wake her.
30 D GAVIN: Where is she?
31 D MONITOR VOICE [V.O.]: Under the bed. Under the bed. Under the bed.
32 A ¶ Gavin stops.
33 A He looks at Roxanne.
34 A Roxanne looks down.
35 A A pale hand slides out across the floor, small and curled, holding the rabbit's ear.
36 A Mimi screams.
* 37 A The rabbit in her arms is gone.
38 A ¶ Gavin drops to his knees.
39 A Pulls back the bedskirt.
* 40 A Nothing.
* 41 A Under the bed is a flat, white, empty dark.
42 A She grabs him by the collar and pulls him away from it.
43 D ROXANNE: Gavin, don't.
44 D GAVIN: It's our baby.
45 D ROXANNE: It's not.
* 46 A ¶ The monitor goes quiet.
* 47 A The green light stops pulsing.
* 48 A Then, from the hallway, quite near, a tiny, perfectly ordinary cry.

### SCENE s02151 | INT. ABANDONED CAROUSEL - FAIRGROUND - NIGHT
Detected names (may be incomplete or contain aliases): AGENT TAMSIN REEVES, ODALYS KANE
* 1 A ¶ A circus-striped dome, peeling.
* 2 A Painted horses frozen mid-gallop, manes cracked.
* 3 A Mirrors fogged.
* 4 A Moonlight in knife blades through torn canvas.
* 5 A Pigeons.
* 6 A Cold.
7 A ¶ AGENT TAMSIN REEVES, 30s, tactical vest, hair tied back, stands at the center pole with a pistol low and a phone in her other hand.
* 8 A Her breath smokes.
9 A Her eyes never stop moving.
10 D ODALYS KANE [V.O.] (phone, calm): Take one more step toward the horses.
11 D TAMSIN: I'm at the pole.
12 D ODALYS KANE [V.O.]: Take it anyway.
13 A ¶ She steps.
* 14 A The floor creaks like a ship.
15 D TAMSIN: Where are you?
16 D ODALYS KANE [V.O.]: Where I always am. Behind you.
17 A ¶ Tamsin spins.
* 18 A Nothing but mirrors.
19 A Her own face, multiplied.
20 D TAMSIN: I don't see you.
21 D ODALYS KANE [V.O.]: No. You see you.
* 22 A ¶ The carousel groans.
* 23 A Slowly, the platform begins to turn.
* 24 A Painted horses rise and fall.
* 25 A Calliope notes wheeze out of dead pipes.
26 D TAMSIN (into the phone): Odalys, let her go.
27 D ODALYS KANE [V.O.]: She isn't mine to let go. She's yours.
28 A ¶ Tamsin freezes.
29 A Between two horses ahead, a small girl in a yellow raincoat, hands bound, watches her.
30 A A white dress under the coat.
31 A She's very still.
32 D TAMSIN (whisper): Mara.
33 D ODALYS KANE [V.O.]: Count the horses, Agent.
34 D TAMSIN: What?
35 D ODALYS KANE [V.O.]: Count them.
36 A ¶ Tamsin counts under her breath.
* 37 A Twelve, thirteen, fourteen.
38 A She stops.
39 D TAMSIN: There are fifteen horses on the platform.
40 D ODALYS KANE [V.O.]: And one of them is breathing.
41 A ¶ Tamsin lifts the pistol.
42 A Turns slowly toward the horse nearest the girl, the white one, its painted eyes wide.
43 A It shudders.
44 A It inhales.
* 45 A ¶ The platform spins faster.
* 46 A The music climbs.
47 A She raises the pistol to her shoulder, finger tightening.

### SCENE s02152 | INT. ST. ANSELM HOSPITAL - LEAD-LINED X-RAY VAULT - NIGHT
Detected names (may be incomplete or contain aliases): BILLIE FROST, OSWIN PARR
* 1 A ¶ Concrete.
* 2 A A heavy door.
* 3 A A humming machine.
* 4 A One red lamp.
5 A ¶ BILLIE FROST, 20s, nurse, lead apron, holds a clipboard against her chest.
6 A OSWIN PARR, 80s, patient on the table, in a gown, hands folded.
7 A He hasn't blinked in a minute.
8 A ¶ Billie checks the film.
9 A Oswin watches her check.
10 D BILLIE: Almost done, Mr. Parr.
11 A ¶ He nods.
* 12 A The machine hums.
13 A She steps behind the glass.
14 A Presses the button.
* 15 A A flash.
* 16 A ¶ On the monitor: his ribcage, his spine.
* 17 A And behind the ribs, something curled.
* 18 A Dark.
* 19 A Furred.
20 A ¶ Billie freezes.
21 A Oswin turns his head toward the glass.
22 A He smiles with all his teeth.
* 23 A ¶ The lamp flickers.
24 A She backs toward the door.
25 A He sits up.
26 A They both lunge for the handle.
27 A Her hand lands first.
* 28 A The door will not turn.
29 A ¶ Oswin slides off the table.
30 A Calm.
31 A Unhurried.
32 A She throws her shoulder against the steel.
33 A He puts a hand on her arm, gently.
34 D OSWIN: Don't be frightened, dear.
35 A ¶ She stops.
36 A His thumb strokes her wrist.
* 37 A The red lamp goes out.

### SCENE s02153 | INT. GALLERIA MALL - SMALL CLAIMS COURT - DAY
Detected names (may be incomplete or contain aliases): JUDGE FELICITY ADEBAYO-STONE, DOMINIC TREMBLAY, PETRA LINDGREN, JUDGE
* 1 A ¶ A converted shoe store.
* 2 A Rows of benches.
* 3 A A judge's bench where the cash register used to be.
* 4 A The shoe-sizing stool is the witness stand.
5 A ¶ JUDGE FELICITY ADEBAYO-STONE, 60s, robe over a cardigan, glasses on a beaded chain.
6 A DOMINIC TREMBLAY, 40s, plaintiff, folder of receipts.
7 A PETRA LINDGREN, 30s, defendant, flour on her jacket.
8 D JUDGE (to the room): Order, order. For the record, this is case 41-C. Mr. Tremblay v. Ms. Lindgren. Mr. Tremblay.
9 D DOMINIC: Your Honor, Ms. Lindgren sold me a wedding cake. It collapsed in the middle of the reception.
10 D JUDGE: Ms. Lindgren?
11 D PETRA: Your Honor, the cake did not collapse. It was pushed.
12 D DOMINIC: By whom?
13 D PETRA: By your uncle.
14 D DOMINIC: My uncle was nowhere near the cake.
15 D PETRA: He was on top of the cake.
16 D JUDGE: Counsel, please.
17 D DOMINIC: I'm not counsel, Your Honor. I'm the groom.
18 D JUDGE: And I'm sorry for your loss, Mr. Tremblay.
19 D DOMINIC: Thank you, Your Honor.
20 D JUDGE: Ms. Lindgren, did the cake have internal supports?
21 D PETRA: Four dowels and a central column.
22 D JUDGE: And your professional opinion on the collapse?
23 D PETRA: Your Honor, nothing in the dowel schedule accounts for a man in a rented tuxedo using the top tier as a diving board.
24 D DOMINIC: That is slander.
25 D PETRA: It is video.
26 D JUDGE: There is video?
27 D PETRA: Eleven phones, Your Honor. I have a flash drive.
28 D JUDGE (muttering): Dear God, a flash drive.
29 D DOMINIC: Your Honor, my uncle has a bad knee.
30 D JUDGE: Then he should not have been diving.
31 D PETRA: I rest my case.
32 D DOMINIC: Your Honor, I request a refund of four hundred dollars.
33 D JUDGE: Mr. Tremblay, I request that you never again describe your uncle as "nowhere near" anything.
34 D DOMINIC: Understood.
35 D JUDGE: Judgment for the defendant. Ms. Lindgren, you may keep the cake.
36 D PETRA: There is no cake, Your Honor.
37 D JUDGE: Then I recommend you keep the flash drive.
* 38 A ¶ The gavel, a shoehorn, cracks on the register.
39 A Dominic gathers his receipts.
40 A Petra gathers her jacket.
41 A The Judge rubs her temples.

### SCENE s02154 | INT. SUDS & BUBBLES LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): MARISOL VEGA
* 1 A ¶ Fluorescent hum.
* 2 A Twelve dryers, one running.
* 3 A A bulletin board of faded flyers.
* 4 A Rain on the window.
* 5 A A broken vending machine glows.
6 A ¶ MARISOL VEGA, 40s, scrubs, tired eyes, sits on a plastic chair with a phone in one hand, a crumpled envelope in the other.
* 7 A A laundry basket at her feet.
8 A She stares at the tumbling dryer as though it owes her money.
9 A ¶ She sets the phone on her knee.
10 A Taps the screen.
* 11 A A voice memo plays.
12 D MARISOL [V.O.] (recording, shaky): Hi, Mami. It's me. I know it's late.
13 A ¶ Marisol closes her eyes.
14 D MARISOL [V.O.] (recording): I got the results today. I wanted to tell you in person but I couldn't. I'm sorry.
15 A ¶ She stops the playback.
16 A Opens her eyes.
17 A Looks at the envelope in her hand.
18 A Turns it over.
19 A Turns it back.
20 A She does not open it.
21 D MARISOL (to herself): Open it.
22 A ¶ She doesn't.
* 23 A ¶ The dryer buzzes.
24 A She stands.
25 A Opens the door.
26 A Pulls out a bundle of warm towels.
27 A Buries her face in them.
28 A Breathes.
* 29 A ¶ Behind her, the vending machine flickers.
30 A She folds a towel.
31 A Another.
32 A Her hands move fast, as if folding were a prayer she knows by heart.
33 D MARISOL [CONT'D] (to the empty room): Okay.
34 A ¶ She puts the envelope on top of the stack.
35 A Presses the stack flat with both hands.
36 A Stands there, shoulders high, not breathing, until the dryer clicks off.
37 A ¶ She picks up the phone.
38 A Taps the screen.
39 A Holds it to her ear.
40 D MARISOL [V.O.] (recording, shaky): I love you, Mami.
41 A ¶ Marisol presses a button.
* 42 A The recording starts over.

### SCENE s02155 | EXT. RAINBOW BRIDGE - TOLLBOOTH - DAY
Detected names (may be incomplete or contain aliases): ELDRIC FENN, NUALA BRAE
* 1 A ¶ A shimmering arc of color across a cloud-sea.
* 2 A At its midpoint, a little wooden booth with a thatched roof and a bell on a string.
* 3 A A hand-painted sign: "TOLL: ONE TRUE STORY."
4 A ¶ ELDRIC FENN, 70, tollkeeper, patchwork coat, spectacles pushed up on his forehead, whittles a stick.
5 A He hums, content.
* 6 A Gulls wheel.
* 7 A A mild wind.
8 A ¶ He pauses.
9 A Listens.
10 A Hums again.
11 D ELDRIC: Quiet day.
12 A ¶ He whittles on.
* 13 A Somewhere below, a faint bell tolls.
14 A He blows shavings off the stick.
15 D ELDRIC [CONT'D]: Quiet week, really.
* 16 A ¶ Footsteps on the bridge.
17 A A figure rises over the curve of the arch.
18 A NUALA BRAE, 30s, wanderer, patched cloak, walking staff, a satchel across her back.
19 A She stops at the booth and sets down her staff.
20 D NUALA: Good morning.
21 D ELDRIC: Morning, traveler. Toll's one true story.
22 D NUALA: Any story?
23 D ELDRIC: True ones only. I can tell.
24 D NUALA: How?
25 D ELDRIC: The bell. It rings when you lie.
26 D NUALA: Ah.
27 A ¶ She thinks.
* 28 A The wind lifts the edge of her cloak.
29 D NUALA [CONT'D]: When I was nine, I fell into a well and stayed there three days. I told the village a fox pulled me out. It was a fox.
30 A ¶ Eldric holds the bell string.
* 31 A Nothing rings.
32 D ELDRIC: Hm.
33 D NUALA: Is that enough?
34 D ELDRIC: It's a decent story.
35 D NUALA: But?
36 D ELDRIC: The fox was a lie, wasn't it?
37 A ¶ Nuala says nothing.
* 38 A The bell does not ring.
39 D ELDRIC [CONT'D]: No. The fox was true. It's the nine that was a lie. You were twelve.
40 D NUALA: Fifteen.
* 41 A ¶ The bell rings, softly, one clear note.
42 D ELDRIC: There it is.
43 D NUALA: I'll pay in cheese instead.
44 D ELDRIC: That'll do.
45 A ¶ She hands over a wedge wrapped in cloth.
46 A He lifts the gate.
47 A She takes her staff and crosses.
48 A Halfway past him she stops.
49 D NUALA: Do you get many visitors?
50 D ELDRIC: Fewer every year.
51 D NUALA: Why?
52 D ELDRIC: They've run out of true stories.
53 D NUALA: Perhaps they've run out of nerve.
54 A ¶ She walks on.
55 A Eldric watches her go until she is a small bright thing on the far end of the bridge.
56 A Then he picks up his stick and starts whittling again.

### SCENE s02156 | INT. IRON LUNG BOXING GYM - RING - NIGHT
Detected names (may be incomplete or contain aliases): BIRDIE SOLOMON, KAI DRAKE, MASKED FIGHTER, MC ROLAND PRYCE, LUCIAN DRAKE
* 1 A ¶ Ropes sagged to the ankle.
* 2 A A bell with a cracked rim.
* 3 A A crowd of forty on folding chairs.
* 4 A The overhead bulb sways.
5 A ¶ BIRDIE SOLOMON, 60s, trainer, towel on his neck, kneels in the corner.
6 A Opposite, KAI DRAKE, 25, champion, in a gold robe, jabs at air.
7 A In the other corner, a MASKED FIGHTER, 30s, lean, silver wrestling mask, shakes out his arms.
8 A ¶ MC ROLAND PRYCE, 50s, in a ruffled shirt, taps a microphone.
9 D MC: Ladies and gentlemen, in the red corner, a mystery!
* 10 A ¶ The crowd murmurs.
* 11 A Bell.
12 A The Masked Fighter and Kai circle.
* 13 A Jab, jab, a feint, a hook.
14 A Kai tags him on the chin.
15 A The Masked Fighter staggers.
16 A Birdie winces.
17 D BIRDIE: Elbows up, son!
18 A ¶ Kai swings again.
19 A The Masked Fighter ducks.
20 A Their gloves tangle.
21 A They clinch.
22 A Both freeze, panting.
23 A Kai grabs the silver mask and rips it off.
* 24 A ¶ Beneath is a face the whole room knows.
25 A LUCIAN DRAKE, 30s, Kai's older brother, missing seven years.
26 D KAI: Lucian?
27 D LUCIAN: Little brother.
28 D KAI: You're dead.
29 D LUCIAN: Not tonight.
30 A ¶ Birdie drops his towel.
31 A The MC drops the microphone.
* 32 A The crowd goes silent.
33 A ¶ Lucian raises his gloves.
34 A Kai, after a long moment, lowers his.
35 A They stand there, two men with the same jaw, in a ring too small for either.

### SCENE s02157 | EXT. ROOFTOP CRICKET PITCH - MUMBAI - DAWN
Detected names (may be incomplete or contain aliases): FARRUKH SHAIKH, CASPIAN MOURA, NEW COACH, IBARRA
* 1 A ¶ A concrete rooftop between apartment towers.
* 2 A Wire fencing.
* 3 A Laundry flapping.
* 4 A Chai steam.
* 5 A A mat taped to the cement.
* 6 A Wickets spray-painted on a water tank.
7 A ¶ FARRUKH SHAIKH, 28, captain, clutches a battered bat.
8 A CASPIAN MOURA, 17, rookie bowler, scuffs a tennis ball on his shirt.
9 A A tall woman in a sari, NEW COACH, 40s, stands at the edge of the mat with a clipboard and no expression.
10 D FARRUKH: Rookie. Let's see it.
11 D CASPIAN: Now?
12 D FARRUKH: Now.
13 A ¶ Caspian jogs in, delivers.
* 14 A The ball smacks the mat, rises off a crack, and clips the water tank with a bang.
15 A Farrukh doesn't flinch.
16 D FARRUKH [CONT'D]: Again.
17 A ¶ Caspian bowls.
18 A Farrukh swings, misses.
* 19 A The ball slams the tank again.
20 D NEW COACH (flat): Your grip is open.
21 D CASPIAN: Sorry, Ma'am?
22 D NEW COACH: Close your hand. Where I can't see daylight between your fingers.
23 A ¶ Caspian closes his fingers around the ball.
24 A Bowls.
25 A Farrukh swings.
26 A Connects.
* 27 A The ball sails off the roof, over the wire, into the morning haze.
28 D FARRUKH (whispering): Who's she?
29 D CASPIAN: She says she's our coach.
30 D FARRUKH: Whose coach?
31 D NEW COACH: Ibarra. Rosa Ibarra.
32 D FARRUKH: Ibarra? As in the Ibarra? From the 2011 final?
33 D IBARRA: I do not discuss 2011.
34 D CASPIAN: You played in 2011?
35 D IBARRA: Another.
36 A ¶ She sets the clipboard on the water tank.
37 A Takes the ball from Caspian.
38 A Rolls it across the mat to Farrukh.
39 D IBARRA [CONT'D]: Captain. Show me what you do with the next one.
40 A ¶ Farrukh looks at the ball.
41 A At Caspian.
42 A At the horizon where the first one landed.
43 D FARRUKH (low): That's the last ball we have.
44 D IBARRA: Then play it well.

### SCENE s02158 | INT. KESTREL RIDGE RADIO OBSERVATORY - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): EMERY ASHWORTH, LYDIA THORNQUIST
* 1 A ¶ A circular room of pale concrete.
* 2 A Monitors in a horseshoe; a dozen cold, two lit.
* 3 A A coffee machine murmuring in the corner.
* 4 A The great dish outside is a black silhouette against the stars, motionless.
* 5 A Wind needles the shutters.
6 A ¶ DR. EMERY ASHWORTH, 50s, cardigan, thick glasses on a lanyard, sits at the central console with one hand on a mouse and the other cradling a heavy black telephone to his ear.
7 A He listens with an expression of such perfect courtesy that it has stopped being an expression.
8 D LYDIA THORNQUIST [V.O.] (phone): Emery, the board met this morning.
9 D EMERY: Yes.
10 D LYDIA THORNQUIST [V.O.]: They want the dish decommissioned by spring.
11 D EMERY: I see.
12 D LYDIA THORNQUIST [V.O.]: You see.
13 D EMERY: I see, Lydia.
* 14 A ¶ A long pause on the line.
15 A He turns his chair a few degrees.
* 16 A A green line crawls along one monitor and stops.
17 D LYDIA THORNQUIST [V.O.]: Emery, you've been listening to that patch of sky for thirty-one years.
18 D EMERY: Thirty-two in November.
19 D LYDIA THORNQUIST [V.O.]: And in that time, how many signals?
20 D EMERY: One.
21 D LYDIA THORNQUIST [V.O.]: One.
22 D EMERY: In 1998.
23 D LYDIA THORNQUIST [V.O.]: And it was a satellite.
24 D EMERY: It was a satellite that behaved strangely.
25 D LYDIA THORNQUIST [V.O.]: Emery.
26 D EMERY: Lydia.
27 A ¶ He reaches over, with his free hand, and presses a button on the console.
* 28 A A second monitor wakes: a spectrogram, bright in the center, trailing off at the edges.
29 D LYDIA THORNQUIST [V.O.]: What is that?
30 D EMERY: Tonight's data.
31 D LYDIA THORNQUIST [V.O.]: It looks like noise.
32 D EMERY: It looks like noise at first.
33 A ¶ He lifts a pencil.
34 A Taps the glass at three points in the display.
* 35 A Each tap lands on a bright line.
36 D EMERY [CONT'D]: Three narrow peaks. Spaced exactly one hydrogen line apart.
37 D LYDIA THORNQUIST [V.O.]: Meaning?
38 D EMERY: Meaning nothing natural spaces itself that way.
* 39 A ¶ Silence on the line.
40 A For the first time Emery lowers his voice.
41 D EMERY [CONT'D]: Lydia, I would like to request that you tell the board the dish stays.
42 D LYDIA THORNQUIST [V.O.]: How long has it been repeating?
43 D EMERY: Eleven minutes.
44 D LYDIA THORNQUIST [V.O.]: Have you told anyone?
45 D EMERY: I'm telling you.
46 D LYDIA THORNQUIST [V.O.]: Emery, if this is a joke...
47 D EMERY: It's not a joke.
48 D LYDIA THORNQUIST [V.O.]: If this is a glitch...
49 D EMERY: It is not a glitch.
* 50 A ¶ Wind needles the shutters.
* 51 A The monitor pulses, once, twice, in a rhythm so regular it hurts.
52 D LYDIA THORNQUIST [V.O.]: I'm coming up.
53 D EMERY: Lydia, the road is washed out.
54 D LYDIA THORNQUIST [V.O.]: Then I'll walk.
55 D EMERY: It's sixty miles.
56 D LYDIA THORNQUIST [V.O.]: Then keep listening.
* 57 A ¶ The line clicks.
58 A Emery sets the phone in its cradle, slowly, as if it might break.
59 A He turns to the monitor.
60 A Rolls his chair in until his glasses nearly touch the glass.
61 D EMERY (softly, to the screen): Hello.
* 62 A ¶ The pulse repeats.
* 63 A Exactly the same.
* 64 A Exactly as long.
65 D EMERY [CONT'D]: Hello. I'm here.

### SCENE s02159 | INT. NORTHSTAR WEATHER STATION - COMMON ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GUNNAR BERG, PALOMA REYES, REGGIE OYELOWO, BASE
* 1 A ¶ Steel walls, wool blankets, a single heater ticking.
* 2 A Frost on the window.
* 3 A Instruments blink on a long table.
* 4 A Wind howls round the corners of the building.
5 A ¶ GUNNAR BERG, 50s, beard, captain's cap, sits at the radio.
6 A PALOMA REYES, 30s, climatologist, parka zipped to the chin, turns pages in a logbook.
7 A REGGIE OYELOWO, 25, mechanic, sits on the floor and wraps his hands in a tea towel.
8 D GUNNAR (to the room): Right. Rations. We have six days of food.
9 D PALOMA: Gunnar, it's seven.
10 D GUNNAR: Six, if Reggie eats.
11 D REGGIE: Reggie is standing right here.
12 D GUNNAR: Reggie is sitting right there.
13 D PALOMA: Reggie, how are your hands?
14 D REGGIE: Cold.
15 D PALOMA: Frostbite?
16 D REGGIE: Just cold. I think.
17 D PALOMA: Let me see.
18 D REGGIE: Leave it, Paloma.
19 D PALOMA: Reggie.
20 A ¶ He unwraps the towel and shows her.
21 A Pink, swollen, but sound.
22 A She nods.
23 D PALOMA [CONT'D] (to herself): Okay. Okay. Not yet.
24 D GUNNAR (into the radio): Base, Northstar. Do you read?
25 D BASE [V.O.] (radio, static): ...Northstar... storm... hold position...
26 D GUNNAR: We're holding. How long?
27 D BASE [V.O.] (radio): ...seventy-two hours...
28 D GUNNAR: Seventy-two. Understood.
29 A ¶ He switches off the set.
* 30 A Silence.
* 31 A Even the wind seems to listen.
32 D GUNNAR [CONT'D]: Three days.
33 D REGGIE: Is that bad?
34 D GUNNAR: It's three days.
35 D PALOMA: Gunnar, you said six days of food.
36 D GUNNAR: Then it's three days of waiting and three days of margin.
37 D PALOMA: That's thin.
38 D GUNNAR: It's what we have.
39 A ¶ Reggie hugs his knees.
40 D REGGIE: Does anybody want to play cards?
41 A ¶ Paloma looks at Gunnar.
42 A Gunnar looks at Reggie.
43 A He takes off his cap.
44 D GUNNAR: Deal.

### SCENE s02160 | INT. TREASURE OF THE LOST PHARAOH - ESCAPE ROOM - DAY
Detected names (may be incomplete or contain aliases): BECCA ANDERSEN, TARIQ HASAN, GRANDMA LOLA, UNCLE FESTUS, MORTIMER
* 1 A ¶ A fake tomb, all plaster and foam.
* 2 A Hieroglyphs in glow paint.
* 3 A A sarcophagus with a fake mummy.
* 4 A A digital countdown above the door: 02:14.
* 5 A ¶ Five people stuffed into a space for four.
6 A ¶ BECCA ANDERSEN, 30s, bachelorette sash, runs her fingers over a hieroglyph wall.
7 A TARIQ HASAN, 30s, polo shirt, crouches over a stone tablet.
8 A GRANDMA LOLA, 80, bedazzled tracksuit, sits on the sarcophagus lid eating a granola bar.
9 A UNCLE FESTUS, 60s, safari hat, clutches a flashlight like a sword.
10 A MORTIMER (V.O.), the game master, speaks from a speaker above the door.
11 D MORTIMER [V.O.] (speaker): Two minutes remain.
12 D BECCA: Tariq, what does the tablet say?
13 D TARIQ: It says "pull the lever."
14 D BECCA: What lever?
15 D FESTUS: This lever!
16 A ¶ He yanks a wall lever.
17 A A foam block drops from the ceiling and bonks him on the head.
18 A He staggers.
19 A Tariq catches him.
20 A They both topple over the coffin lid.
21 A Lola doesn't move.
22 D LOLA: Festus, you broke the clue.
23 D FESTUS: I did not break it. It broke me.
24 D TARIQ: Festus, he's right. That wasn't the lever.
25 D BECCA: Which he?
26 D TARIQ: Festus.
27 D BECCA: Which Festus?
28 D TARIQ: Becca, there's only one Festus.
29 D BECCA: Then say "Festus is right."
30 D TARIQ: Festus is right.
31 D FESTUS: Thank you.
32 D MORTIMER [V.O.] (speaker): One minute remains.
33 A ¶ Becca spins.
34 A Tariq scrambles.
35 A Festus staggers to his feet.
36 A They all bump into each other and scatter in different directions, hands patting walls.
37 D BECCA: There's a hole!
38 D TARIQ: Where?
39 D BECCA: Right here!
40 D FESTUS: That's my ear.
41 D LOLA: That's the hole.
42 A ¶ She points calmly with a granola bar to a plastic scarab in the sarcophagus's eye socket.
43 A Becca freezes.
44 A Tariq stops.
45 A Festus stops.
46 A All three look at Lola.
47 D BECCA: How did you...
48 D LOLA: I read the manual.
49 D TARIQ: There is a manual?
50 D LOLA: Next to the sarcophagus.
51 A ¶ They look.
* 52 A A laminated card, taped to the lid: "Press the scarab."
53 D FESTUS: Oh.
54 D BECCA: Oh.
55 D TARIQ: Oh.
56 A ¶ Becca presses the scarab.
* 57 A A click.
* 58 A The countdown stops at 00:07.
* 59 A A door pops open.
* 60 A Bright light.
* 61 A A tiny trumpet fanfare plays.
62 D MORTIMER [V.O.] (speaker, flat): Congratulations. You have escaped.
63 A ¶ The four of them blink in the light.
64 A Lola finishes her granola bar.
65 D LOLA: I want to do the Pirate one next.

### SCENE s02161 | INT. ALL-NIGHT PHARMACY - COUNTER - 2 A.M.
Detected names (may be incomplete or contain aliases): ELIAS VOLKOV, GRETA HOLT
* 1 A ¶ Flickering fluorescents.
* 2 A Rows of cough syrup.
* 3 A A sleepy rotating display of sunglasses.
* 4 A Rain streaks the front window.
* 5 A A bell above the door.
6 A ¶ ELIAS VOLKOV, 50s, pharmacist, white coat, half-moon glasses, finishes counting pills into a vial.
7 A GRETA HOLT, 30s, a damp coat, a leather satchel, walks in, shakes off her umbrella, and sets a prescription slip on the counter.
8 D ELIAS: Evening.
9 D GRETA: Morning, technically.
10 D ELIAS: Technically.
11 A ¶ He reads the slip.
12 A Pauses.
13 A Looks at her over the glasses.
14 D ELIAS [CONT'D]: This is for ten milligrams.
15 D GRETA: Yes.
16 D ELIAS: Of a rather strong sedative.
17 D GRETA: My doctor says I sleep poorly.
18 D ELIAS: Who is your doctor?
19 D GRETA: Dr. Peary.
20 D ELIAS: Dr. Peary retired in March.
21 D GRETA: Did he?
22 D ELIAS: He sent me a card.
23 D GRETA: Lovely. Is the medication ready?
24 D ELIAS: Give me a moment.
25 A ¶ He disappears into the back.
* 26 A The bell above the door tinkles gently in the draft.
27 A Greta takes out a phone and sets it on the counter, screen down.
28 A She flips it over.
29 A Flips it back.
* 30 A Behind the shelves, drawers open and close.
31 D ELIAS [O.S.] (calling): How long have you had trouble sleeping?
32 D GRETA: Years.
33 D ELIAS [O.S.]: Years.
34 D GRETA: Yes.
35 A ¶ Elias reappears with a paper bag.
36 A He sets it on the counter between them.
37 A Neither touches it.
38 D ELIAS: Ms. Holt. May I be frank?
39 D GRETA: Please.
40 D ELIAS: You do not look like a woman who sleeps poorly.
41 D GRETA: What do I look like?
42 D ELIAS: A woman who has not slept at all.
43 A ¶ Greta says nothing.
* 44 A A car swishes by outside.
45 D ELIAS [CONT'D]: The man who was in here last night. The one with the cough.
46 D GRETA: I don't know him.
47 D ELIAS: He said the same of you.
48 A ¶ Greta's hand moves to the satchel.
49 A Elias's hand moves under the counter.
50 A Both freeze.
51 A Neither breathes.
* 52 A Rain drums on the glass.
53 D GRETA: Mr. Volkov.
54 D ELIAS: Ms. Holt.
55 D GRETA: I'd like my medication.
56 D ELIAS: And I'd like to see what's in the satchel.
57 A ¶ She unlatches it slowly.
58 A Elias slides his hand a little further.
59 A She tips the satchel toward him.
* 60 A Inside: bundles of cash.
61 A He gazes at them.
62 A At her.
63 D ELIAS [CONT'D]: That is a great deal of money for a sedative.
64 D GRETA: It's for the man with the cough.
65 D ELIAS: He's dead, Ms. Holt.
66 D GRETA: I know.
67 A ¶ She pulls the satchel shut.
68 A Elias pulls a small revolver from under the counter.
69 A Sets it down on the pills.
70 D ELIAS: Then who is the money for?
71 D GRETA: You.

### SCENE s02162 | INT. OPERA HOUSE COURTHOUSE - JUDGE'S CHAMBERS (FORMER GREEN ROOM) - DAY
Detected names (may be incomplete or contain aliases): JUDGE AUGUSTINE PEREIRA, HELEN OSEI, RUFUS KLEIN
* 1 A ¶ A faded theatrical dressing room turned into judicial chambers.
* 2 A Mirrors ringed with dead bulbs.
* 3 A A costume rack stuffed with law books.
* 4 A A velvet couch.
* 5 A A desk made from an old stage trunk.
* 6 A Light slants through dust.
7 A ¶ JUDGE AUGUSTINE PEREIRA, 60s, silver beard, half-robed, stands at the window looking at the empty orchestra pit below.
8 A HELEN OSEI, 40s, state prosecutor, sensible suit, notes in hand, sits on the edge of the couch.
9 A RUFUS KLEIN, 50s, defense counsel, bow tie askew, stands by the door, slowly turning his briefcase by its handle.
10 D PEREIRA: Counselors. Thank you for coming on short notice.
11 D OSEI: Your Honor.
12 D KLEIN: Your Honor, I assumed it was urgent.
13 D PEREIRA: It is. A juror was found at six this morning in the third box. Asleep. Under a blanket. With a lunch pail.
14 D KLEIN: Asleep?
15 D PEREIRA: Asleep and unwilling to give an account of how he got there.
16 D OSEI: The jury was sequestered at a hotel.
17 D PEREIRA: It was.
18 D OSEI: Then how did he...
19 D PEREIRA: Ms. Osei, I too would like to know how a juror escaped a hotel and arrived at an opera house at midnight.
20 D KLEIN: Your Honor, I'd like to know whether he's in any condition to serve.
21 D PEREIRA: He appears sound.
22 D KLEIN: Appears.
23 D PEREIRA: Mr. Klein, a man who sleeps in an opera box is not necessarily mad.
24 D KLEIN: Your Honor, with respect, he is a man who sleeps in an opera box.
25 D OSEI: Your Honor, the state does not consent to a mistrial.
26 D KLEIN: The defense does.
27 D OSEI: Of course it does.
28 D KLEIN: Ms. Osei, the state's case is in trouble and you know it.
29 D OSEI: My case is fine.
30 D KLEIN: Your witness identified my client as Tuesday's man. The crime was on a Wednesday.
31 D OSEI: A clerical error.
32 D KLEIN: A fatal error.
33 D PEREIRA: Counselors.
34 A ¶ They both stop.
35 A The Judge turns from the window.
36 D PEREIRA [CONT'D]: I have a proposal. Ms. Osei, amend your complaint to the Wednesday. Mr. Klein, stipulate the juror's competence. We proceed. Tomorrow. Eleven o'clock.
37 D OSEI: And if I decline?
38 D PEREIRA: Then I declare a mistrial myself, and the state starts over in eighteen months.
39 D KLEIN: Eighteen months. In this economy.
40 D PEREIRA: Mr. Klein.
41 D KLEIN: Sorry, Judge.
42 D OSEI: Your Honor, you've left the state very little room.
43 D PEREIRA: Ms. Osei, I've left you precisely as much room as the theater left me.
44 A ¶ She almost smiles.
45 A Klein opens his mouth, closes it.
46 D OSEI: Wednesday.
47 D KLEIN: Stipulated.
48 D PEREIRA: Then we are adjourned.
49 A ¶ They file out.
50 A Pereira picks up a dusty costume crown from the rack, regards it for a long moment, and sets it gently on the trunk beside the gavel.
