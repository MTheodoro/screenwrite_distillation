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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0134.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01087 | EXT. CANAL LOCK - LOWER BASIN - DUSK
Detected names (may be incomplete or contain aliases): LOCKKEEPER HOSEA DRUMMOND, CLEMENTINE DRUMMOND, CAPTAIN EZEKIEL ARDEN, MADAME PERPETUA ARDEN, OFFICER
* 1 A ¶ 1824.
* 2 A A narrow barge squeezed in a stone lock.
* 3 A Water churns.
* 4 A Lanterns swing on posts.
* 5 A Ropes creak.
6 A ¶ LOCKKEEPER HOSEA DRUMMOND, 50s, broad, in a tarred coat, cranks the sluice.
7 A His daughter CLEMENTINE DRUMMOND, 12, perches on the gate beam with a coil of rope.
8 A At the stern of the barge, CAPTAIN EZEKIEL ARDEN, 40s, tall hat, cane, looks displeased.
9 A His wife, MADAME PERPETUA ARDEN, 40s, silk veil, grips the rail, glaring at the churning water and murmuring to the horses on the towpath.
10 D HOSEA: Steady now. She'll rise.
11 D EZEKIEL: You said twenty minutes.
12 D HOSEA: I said it'd be about twenty.
13 D CLEMENTINE: It's been twenty-two, sir.
14 D EZEKIEL: Impertinent child.
15 D CLEMENTINE: Accurate child.
16 A ¶ Perpetua lifts her veil.
17 A Stares at Clementine.
18 A A flicker of amusement she smothers at once.
19 D PERPETUA: Ezekiel. Let the man work.
20 D EZEKIEL: I have a train to meet.
21 D HOSEA: No train this side of Wickham.
22 D EZEKIEL: There is a train.
23 D HOSEA: There's a promise of one.
* 24 A ¶ The water surges.
* 25 A The barge shudders and lifts.
* 26 A A rope snaps.
* 27 A The barge yaws toward the wall.
28 A Clementine scrambles along the beam, grabs the loose end, hauls with both hands.
29 A Hosea spins the crank backward.
30 A Ezekiel stumbles, cane clattering.
31 A Perpetua clutches the rail and shouts at the horses.
* 32 A They back and the barge straightens.
33 D OFFICER [V.O.] (from the towpath, distant): You there! In the lock! Halt in the Crown's name!
34 A ¶ Everyone freezes.
* 35 A Water keeps rising.
36 A Hosea looks at the bank.
37 A Four men in coats at the far lamp.
* 38 A A constable's whistle.
39 D EZEKIEL (quietly, not at all arrogant now): Hosea. Open the upper gate.
40 D HOSEA: Sir?
41 D EZEKIEL: Open it. Now.
42 D CLEMENTINE: Papa?
43 A ¶ Hosea looks at Ezekiel.
44 A At Perpetua, pale.
45 A At Clementine.
46 A He sets his jaw.
47 A Cranks the upper sluice.
* 48 A The gate groans open.
49 D HOSEA: Hold on to something.
* 50 A ¶ The water roars.
* 51 A The barge shoots forward into the dark channel, taking the lantern light with it, and the officers' shouts vanish behind.

### SCENE s01088 | EXT. MANGROVE SWAMP - TIDAL FLAT - DAWN
Detected names (may be incomplete or contain aliases): BEE, CALLOWAY, BRAM OKONJO, CAPTAIN HALVARD SKOGLUND
* 1 A ¶ Roots like fingers.
* 2 A Grey mud.
* 3 A A capsized skiff on its side.
* 4 A Mosquitos in clouds.
5 A ¶ BIANCA "BEE" CALLOWAY, 30s, torn shirt, drags a water jug through the mud.
6 A BRAM OKONJO, 40s, one boot missing, limps behind her.
7 A Between them, a bundled shape on a stretcher of branches: CAPTAIN HALVARD SKOGLUND, 60s, eyes closed.
8 D BEE: Bram. Pull.
9 D BRAM: I'm pulling.
10 D BEE: You're limping.
11 D BRAM: I'm limping and pulling.
12 A ¶ She stops.
13 A Wipes her face.
14 A Squats by the captain.
15 A Puts two fingers at his neck.
16 D BEE: Cap. Cap, you in there?
17 A ¶ He stirs.
18 A Mumbles.
19 A Doesn't wake.
20 D BRAM: Tide's turning.
21 D BEE: I can see.
22 D BRAM: We have maybe ten minutes before the flat goes under.
23 A ¶ She stands.
24 A Looks at the skiff.
25 A Looks at the horizon where a thin line of silver crawls toward them.
26 D BEE: Leave the jug.
27 D BRAM: That's our water.
28 D BEE: And that's his life. Choose.
29 A ¶ Bram stares at her.
30 A Drops the jug.
* 31 A It sinks into the mud with a slow burp.
32 A He grabs the stretcher.
33 A She grabs the other end.
34 A They lift.
35 A They stumble.
36 A A root catches Bram's foot; he falls.
* 37 A The stretcher tilts.
38 A The captain groans.
39 D BEE [CONT'D]: Bram!
40 D BRAM: Go on without me.
41 D BEE: Not a chance.
42 A ¶ She sets the stretcher down.
43 A Hauls him up by the belt.
44 A He leans on her.
45 A Their breath rasps.
46 D BRAM: Bee. If I --
47 D BEE: You're not going to.
48 D BRAM: If I do.
49 D BEE: Don't.
* 50 A ¶ The silver line is closer.
* 51 A The mud begins to glisten.
* 52 A A bird shrieks from the roots.
53 D CAPTAIN HALVARD (eyes still shut): Boys. Girls. Hold your horses.
54 D BEE: Cap!
55 D CAPTAIN HALVARD: I can walk.
56 D BRAM: You can't.
57 D CAPTAIN HALVARD: I can crawl. Let me.
58 A ¶ He pushes himself off the stretcher.
59 A Falls to hands and knees.
60 A Starts to crawl.
61 A Bee and Bram watch him go, mud to the elbows.
62 D BEE (quiet): Stubborn old man.
63 D BRAM: He taught us.
64 A ¶ They follow.
* 65 A The water laps their ankles.
* 66 A The roots rise ahead like a gate.

### SCENE s01089 | INT. FIELD HOSPITAL - CONVERTED CHURCH - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR SIOBHAN DELANEY-WRIGHT, SERGEANT MIKHAIL TERZIC, NURSE ROSALIND PARK-EZEIGWE, PRIVATE OSWIN FALCONER, CORPORAL TEDDY AGUILAR, RADIO
* 1 A ¶ Pews pushed against the walls.
* 2 A Cots in the nave.
* 3 A An altar draped with a bloody sheet.
* 4 A A lone candle on the pulpit.
* 5 A Distant artillery, fading.
6 A ¶ MAJOR SIOBHAN DELANEY-WRIGHT, 40s, surgeon, apron stiff with dried blood, writes in a ledger at a pew-desk.
7 A SERGEANT MIKHAIL TERZIC, 30s, bandaged arm, sits on a cot.
8 A NURSE ROSALIND PARK-EZEIGWE, 20s, hair pinned under a cap, adjusts an IV.
9 A PRIVATE OSWIN FALCONER, 18, sleeps in the next cot, face grey.
10 A Nearby, a radio operator, CORPORAL TEDDY AGUILAR, 20s, headphones around his neck, fiddles with a set.
11 D SIOBHAN: Corporal. Anything?
12 D TEDDY: Static, Major.
13 D SIOBHAN: Try the other band.
14 A ¶ He turns the dial.
* 15 A A voice comes through, clipped and tired.
16 D RADIO [V.O.]: ...say again, Dagger Six, this is Hammer. Enemy withdrawing along the river road. All units hold.
17 A ¶ Siobhan looks up.
18 A So does Mikhail.
19 A Rosalind stills with the IV bag in her hand.
20 D MIKHAIL: They're withdrawing?
21 D TEDDY: That's what it says.
22 D ROSALIND: Then it's over?
23 D SIOBHAN: It's over tonight. Not tomorrow.
24 A ¶ She closes the ledger.
25 A Stands.
26 A Wipes her palms on her apron.
27 A Crosses to Oswin's cot, checks his pulse.
28 A Nods.
29 A Draws the blanket up.
30 D ROSALIND: He'll make it?
31 D SIOBHAN: If he sleeps.
32 A ¶ Mikhail rolls his shoulder, winces, tests the bandage.
33 A Rosalind sets down the IV and crosses to him, unwraps the dressing, checks the wound.
34 A He grimaces.
35 A Teddy turns the volume up, trying for another voice.
36 D MIKHAIL: How is it?
37 D ROSALIND: Clean. You'll keep the arm.
38 D MIKHAIL: That is good. I like the arm.
39 D ROSALIND (dry): So does your wife, I imagine.
40 D MIKHAIL: She likes the other one more.
41 A ¶ They laugh, quietly, careful of the sleepers.
* 42 A The laugh dies.
* 43 A The church holds its breath.
44 A Siobhan walks down the aisle between the cots, letting her hand trail along the pews.
45 D RADIO [V.O.]: Dagger Six, copy that. Ceasefire at oh-six-hundred. Repeat, ceasefire at oh-six-hundred.
46 D TEDDY (whispering): Ma'am. Ceasefire. Six a.m.
47 D SIOBHAN (not turning): Thank you, Corporal.
48 A ¶ Teddy pulls the headphones off.
49 A Rubs his face.
50 A Rosalind sits on the end of Mikhail's cot, suddenly unable to stand.
51 A Mikhail pats her shoulder with his good hand.
52 A ¶ At the altar, Siobhan stops.
53 A Lifts the bloody sheet.
54 A Folds it, corner by corner.
55 A Lays it on the stone.
56 A Straightens it.
57 A Steps back.
58 A ¶ Behind her, Oswin stirs, murmurs, and falls still again.
* 59 A The candle gutters and holds.
60 D SIOBHAN [CONT'D] (to the room): Everyone rest. I'll take first watch.
61 A ¶ Rosalind and Mikhail nod.
62 A Teddy lies back on his cot, the radio on his chest, fading into static and sleep.
63 A Siobhan sits in the front pew, hands folded, eyes on the candle.

### SCENE s01090 | EXT. ORCHARD BEHIND A CLOSED CANNERY - LATE SUMMER AFTERNOON
Detected names (may be incomplete or contain aliases): NELL, THEO, DUNNING
* 1 A ¶ Pears hang heavy on the branches.
* 2 A Wasps drone over fallen fruit.
* 3 A Beyond the trees, a corrugated roof rusts under a pale sky.
4 A ¶ NELL, 15, sits with her back against a trunk, knees drawn up.
5 A She has a transistor radio in her lap, tuned to nothing.
* 6 A A paper sack of pears lies beside her.
* 7 A Dust on her shoes.
8 A A bruise yellowing on one shin.
9 A ¶ She bites a pear.
10 A Chews.
11 A Does not taste it.
* 12 A ¶ A twig snaps.
13 A She looks up.
14 A A boy has stepped from between the trees, hands in his pockets.
15 A THEO, 16, tall and awkward, wearing his older brother's jacket.
16 A He stops ten paces away.
17 A ¶ He studies her.
18 A She studies the pear.
19 D THEO: You're on the Dunnings' side.
20 D NELL: Is there a side?
21 A ¶ He shrugs.
22 A Scuffs a pear into the grass with his toe.
23 A She watches the movement and then the dirt.
24 D THEO: They said you left.
25 D NELL: They said a lot.
26 A ¶ He nods slowly.
27 A She offers him a pear without looking up.
28 A He crosses, takes it, sits a careful distance away.
29 A They eat in silence.
* 30 A A wasp circles his hand.
31 A He lets it.
32 D THEO: My brother's gone. Since June.
33 A ¶ She says nothing.
34 A Turns the dial on the radio.
* 35 A Static swells, then a thin fragment of a song.
36 A She holds still, listening.
37 A He leans in a little.
* 38 A The song fades.
39 D THEO [CONT'D]: That was a good one.
40 D NELL: It always is. Then it goes.
41 A ¶ He half-smiles.
42 A She turns the dial again.
* 43 A Nothing.
44 A She sets the radio on the grass between them.
* 45 A ¶ A screen door bangs somewhere beyond the trees.
* 46 A A woman's voice calls a name that is not hers.
47 A Nell's shoulders rise.
48 A Theo watches them rise.
49 D THEO [CONT'D]: That's for you?
50 D NELL: That's for a girl I was.
51 A ¶ He nods as if this makes sense.
52 A Stands.
53 A Offers his hand.
54 A She looks at it for a long moment.
55 A Then takes it.
56 A He pulls her up.
57 A They let go at the same time.
58 A ¶ At the edge of the orchard, an older figure steps out: MRS. DUNNING, 50s, apron, arms folded.
59 A She stops when she sees them both.
60 A Her face softens.
61 A Hardens.
62 A Softens again.
63 A ¶ Nell straightens.
64 A Theo steps half a pace in front of her.
65 A Mrs. Dunning looks at his jacket, at the radio on the grass, at the pear core in Nell's hand.
66 A ¶ She turns and walks back toward the house.
67 A Leaves the door open behind her.
68 A ¶ Nell picks up the radio.
69 A Theo picks up the sack of pears.
70 A They follow, ten paces apart, then five.

### SCENE s01091 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT IRINA SOLOVYOV, AGENT KOFI MENSAH-BELL, LEONARD HAYES-TAKAHASHI, COURIER, HAYES
* 1 A ¶ Concrete pillars.
* 2 A Oil stains.
* 3 A A flickering sodium light.
* 4 A One car left: a dented Volvo with its trunk open.
5 A ¶ AGENT IRINA SOLOVYOV, 30s, wet hair, tactical vest, crouches behind a pillar, gun drawn.
6 A Beside her, AGENT KOFI MENSAH-BELL, 40s, headset, scans the ramp.
7 A On the far side of the Volvo, a hostage: DR. LEONARD HAYES-TAKAHASHI, 50s, hands zip-tied, mouth taped.
8 A Behind him stands THE COURIER, 30s, black jacket, a gun pressed to Hayes's neck.
9 D IRINA (whispering): Eyes on the target?
10 D KOFI: Northeast pillar. He's moving.
11 D COURIER (calling out): That's far enough!
12 A ¶ Irina and Kofi freeze.
13 A Hayes squeezes his eyes shut.
14 D COURIER [CONT'D]: Drop the weapons. Both of you.
15 D KOFI (raising his voice): We can talk about this.
16 D COURIER: We're talking now.
17 D IRINA (whispering to Kofi): Left. On three.
18 D KOFI (barely moving his lips): He's too close to Hayes.
19 D IRINA: Then we make him move.
20 A ¶ She rolls a coin across the concrete.
* 21 A It clinks against the Volvo's tire.
22 A The Courier whips his head toward it.
23 A Kofi fires into the pillar behind him.
* 24 A Concrete bursts.
25 A Irina charges.
26 A ¶ The Courier shoves Hayes forward.
27 A The three collide beside the car in a heap of limbs.
* 28 A A gun skitters.
29 A Kofi dives for it.
30 A The Courier punches Irina, she slams him against the Volvo, Hayes scrambles under the bumper.
31 D COURIER [CONT'D] (snarling): You don't understand!
32 D IRINA (pinning his arm): Then explain it.
33 A ¶ He heaves.
34 A She holds.
35 A Kofi seizes the loose gun, trains it on the Courier.
36 D KOFI: Down. Now.
37 A ¶ The Courier stills.
38 A His chest rises and falls.
39 A He lets his hand go slack.
40 A Irina kneels on his back and cuffs him.
41 A ¶ Hayes crawls out from under the bumper, tape half-peeled.
42 A Kofi cuts his zip ties.
43 A Hayes gasps.
44 D HAYES (coughing): He said they were coming for me.
45 D KOFI: Who?
46 D HAYES: The Directorate. He wasn't one of them. He was warning me.
47 A ¶ Irina looks at the Courier.
48 A His face is turned against the concrete, eyes wet.
49 D IRINA (quietly): Is that true?
50 D COURIER (muffled): They'll be here in four minutes.
51 A ¶ Kofi checks his watch.
52 A Irina hauls the Courier up.
53 D KOFI: Move.
54 A ¶ They run for the stairwell, the Courier between them, Hayes limping behind.
* 55 A Footsteps echo.
* 56 A Somewhere above, tires screech down a ramp.
57 D IRINA (over her shoulder): Level two exit! Go!
58 A ¶ They vanish through the steel door as headlights sweep across the pillars.

### SCENE s01092 | INT. ROWING BOATHOUSE - EARLY MORNING
Detected names (may be incomplete or contain aliases): COACH HESTER LINDQVIST-AMOAH, PASCAL ODUYA-REYNAUD
* 1 A ¶ Long wooden shells hang from the rafters like the ribs of a whale.
* 2 A Water slaps the dock outside.
* 3 A Mist presses against the glass.
* 4 A The smell of varnish and river mud.
5 A ¶ COACH HESTER LINDQVIST-AMOAH, 60s, thermos in one hand and a stopwatch in the other, sits on an upturned oar rack.
6 A Across the room, her only remaining athlete, PASCAL ODUYA-REYNAUD, 20s, wraps tape around a blistered palm.
7 A They do not look at each other.
* 8 A A kettle ticks on a hotplate.
9 D HESTER (to the room): Tide's slack at six-fifteen.
10 D PASCAL (to his hand): I know.
11 D HESTER (to no one): Wind from the west. Light.
12 D PASCAL: I read the board.
13 A ¶ She sips from the thermos.
14 A He bites the end of the tape.
* 15 A The kettle begins to whistle.
16 A Neither moves.
17 A Hester sighs and rises, pulls the kettle off the hotplate, pours two mugs.
18 A ¶ She sets one on the bench beside him.
19 A He doesn't take it.
20 A She sits again.
21 D HESTER: Sixteen minutes on the water. Then back. Then breakfast.
22 D PASCAL: Fine.
23 D HESTER: Don't "fine" me.
24 D PASCAL: Okay, then.
25 D HESTER: Okay is worse.
26 A ¶ He smiles faintly.
27 A Takes the mug.
28 A Warms his hands on it.
* 29 A Mist drifts in through a crack in the doorframe.
30 D HESTER [CONT'D] (to the room again): Anyone else coming?
31 D PASCAL: You know no one's coming.
32 D HESTER (muttering): I know.
33 A ¶ Pascal sips.
34 A Looks at the shells overhead.
35 A His eyes trace the hull of an eight, then of a single.
36 D PASCAL: Remember when we filled this place?
37 D HESTER: We had fourteen on the squad. And a cox who ate her megaphone.
38 D PASCAL (smiling): Camille.
39 D HESTER: Camille. Yes.
* 40 A ¶ Quiet.
* 41 A The water slaps.
* 42 A A gull cries.
43 D PASCAL: Coach.
44 D HESTER: Hm?
45 D PASCAL: If I miss the cut --
46 D HESTER: You won't.
47 D PASCAL: But if.
48 A ¶ She turns the stopwatch over in her hand.
49 A Reads the back, where someone long ago scratched initials.
50 D HESTER: Then we row anyway.
51 A ¶ He nods.
52 A Finishes his tea.
53 A Sets the mug on the bench and stands.
54 A Pulls on his gloves.
55 A She stands too.
56 A Together they lift a single shell from its cradle.
* 57 A It swings, light as a leaf.
58 D HESTER [CONT'D] (to the room): Mind the door.
59 D PASCAL (to the boat): Easy.
60 A ¶ They carry it out toward the dock, the mist closing behind.

### SCENE s01093 | INT. DRIVE-IN PROJECTION BOOTH - TWILIGHT
Detected names (may be incomplete or contain aliases): PEGGY LOUISE WALDROP, TUCKER WALDROP, ABERNATHY
* 1 A ¶ A cramped booth over an empty lot.
* 2 A Film canisters.
* 3 A A coffee can of cigarette butts.
* 4 A Through the small window, rows of silent cars waiting in the dusk.
5 A ¶ PEGGY LOUISE WALDROP, 17, in a pressed uniform, threads a reel with practiced fingers while her younger brother TUCKER WALDROP, 12, sits on a stool kicking his heels, a comic book on his knee.
6 A Between them, MR. ABERNATHY, 60s, the theater owner, in a short-sleeved shirt and bow tie, checks his pocket watch, taps the projector's housing, and sets a thermos by the door.
7 D MR. ABERNATHY: Seven forty. Start her at eight sharp.
8 D PEGGY: Yes, sir.
9 D MR. ABERNATHY: And Peggy, no repeats of last week.
10 D PEGGY: It wasn't my fault, sir. The reel was upside down.
11 D MR. ABERNATHY: Mm.
12 A ¶ He nods, pats Tucker on the head, and leaves.
* 13 A His footsteps fade down the iron stairs.
14 A Tucker turns a page.
15 A Peggy finishes lacing the film and flips a switch.
* 16 A The lamp hums warm.
17 D TUCKER: Is he gone?
18 D PEGGY: He's gone.
19 D TUCKER: Good.
20 A ¶ He slides the comic book aside and pulls a rumpled envelope from his shirt.
21 A Hands it up without looking at her.
22 A Peggy takes it.
23 A Turns it over.
* 24 A Her name in his careful block capitals.
25 D PEGGY: What's this?
26 D TUCKER: Open it.
27 A ¶ She does.
* 28 A Inside, a ticket stub and a folded strip of paper.
29 A She unfolds it.
30 A Her breath catches.
31 D TUCKER [CONT'D]: They called the house. About the scholarship.
32 D PEGGY: Tucker.
33 D TUCKER: You got in.
34 A ¶ She sits down hard on the other stool.
35 A Reads the strip again.
36 A Her thumb pauses over the signature at the bottom.
* 37 A ¶ Down in the lot, the cars dim their lights.
* 38 A A horn toots, impatient.
39 A Tucker watches her face.
40 D PEGGY (quietly): Don't tell Dad.
41 D TUCKER: He already knows.
42 D PEGGY: What?
43 D TUCKER: He read it first. Then he put it back.
44 A ¶ She stares at him.
45 A Then at the window, where the first car's headlights flick on and off in a signal.
46 A She wipes her eyes with the back of her wrist.
47 A Stands.
48 A Presses the switch.
* 49 A ¶ The projector clatters to life.
* 50 A A beam cuts across the lot and lands on the screen: a bright gold title card.
51 D PEGGY [CONT'D] (not looking at him): Hand me the next reel.
52 A ¶ Tucker slides it across.
53 A His fingers brush hers.
54 A She takes it, careful, and sets it beside the first.

### SCENE s01094 | INT. ABANDONED OBSERVATORY - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HELENA VASQUEZ-MURRAY, DETECTIVE GRANT, TALL MAN
* 1 A ¶ A round chamber under a split copper dome.
* 2 A A huge brass telescope aimed at a hole in the roof where stars blink through.
* 3 A Dust like snow.
* 4 A Star charts curl on the walls.
5 A ¶ DR. HELENA VASQUEZ-MURRAY, 50s, trench coat over pajamas, mud on her boots, kneels by the telescope's base with a flashlight clenched in her teeth.
6 A She runs her fingers along the floor.
7 A Pulls up a loose board.
* 8 A Beneath it, a leather journal wrapped in oilcloth.
9 D HELENA (muffled by the flashlight): There you are.
10 A ¶ She takes the flashlight from her mouth.
11 A Unwraps the journal.
12 A Opens it to the first page.
13 A Reads in a whisper.
14 D HELENA [CONT'D]: "If you are reading this, I have already gone to see what the telescope shows after midnight."
* 15 A ¶ She turns a page.
* 16 A A hand-drawn sketch of the sky.
* 17 A Beside one star, a small red circle and the word NO.
18 D HELENA [CONT'D]: No what?
* 19 A ¶ Her phone buzzes in her pocket.
20 A She answers.
21 D DETECTIVE GRANT [V.O.] (over the phone): Helena, where are you?
22 D HELENA: Following the lead.
23 D DETECTIVE GRANT [V.O.]: At the observatory? I told you to wait for backup.
24 D HELENA: Backup is slow. The journal is here.
25 D DETECTIVE GRANT [V.O.]: Don't touch anything. We think Warrick didn't die alone.
26 D HELENA (shining the light across the floor): I'm not alone either.
* 27 A ¶ Footprints in the dust.
* 28 A Not hers.
* 29 A Wide, deliberate.
* 30 A They lead to the stairwell.
31 D DETECTIVE GRANT [V.O.]: Helena, did you hear me?
32 D HELENA: Stay on the line.
33 A ¶ She lays the phone on the telescope base.
34 A Rises.
35 A Follows the footprints with the light.
* 36 A They end at a door in the wall.
* 37 A Half open.
* 38 A A sliver of darkness behind it.
39 A ¶ A shape fills the gap.
40 A A TALL MAN in a gray overcoat, face hidden by a brimmed hat, steps into the dome.
41 A Slow.
42 A Unhurried.
43 A In one gloved hand he holds a brass key.
44 D TALL MAN: You found it before I did.
45 D HELENA (steady): You're Warrick's partner.
46 D TALL MAN: I was his student.
47 D HELENA: Did you kill him?
48 D TALL MAN (a pause): I closed the shutter. He opened it.
49 A ¶ Helena raises the journal.
50 A The Tall Man's eyes follow it.
51 D HELENA: Then tell me what the star is.
52 D TALL MAN: You already know.
53 D HELENA: Say it.
54 D DETECTIVE GRANT [V.O.] (tinny, from the telescope): Helena! Who are you talking to?
55 A ¶ The Tall Man glances at the phone.
56 A Then back at her.
57 A He lifts the key.
* 58 A Behind him, the dome's great shutter groans and begins to close, cutting the stars off one slice at a time.
59 D HELENA (shouting): Grant! Now!
60 A ¶ She hurls the journal across the floor.
61 A The Tall Man lunges for it.
* 62 A The dome slams shut.
* 63 A Darkness.
* 64 A A single crack of flashlight on the floor.
* 65 A ¶ Sirens, very far away.

### SCENE s01095 | EXT. DRY GOAT PEN BEHIND A FORSAKEN CHURCH - EVENING
Detected names (may be incomplete or contain aliases): SHERIFF AUGUSTINE TREVINO, ABIGAIL FROST-MWANGI, JEREMIAH FROST
* 1 A ¶ 1878.
* 2 A Dust.
* 3 A A broken fence.
* 4 A A leaning cross.
* 5 A Three goats chew at nothing.
6 A ¶ SHERIFF AUGUSTINE TREVINO, 60s, tin star pinned crooked, stands over a shallow grave.
7 A Hat in his hands.
8 A ABIGAIL FROST-MWANGI, 30s, widow's black, holds a rusted shovel.
9 A Between them, a boy, JEREMIAH FROST, 10, squats by a goat and strokes its ear.
* 10 A ¶ The wind pushes a tumbleweed through the pen.
* 11 A Nobody watches it go.
12 D AUGUSTINE: Ma'am.
13 A ¶ Abigail doesn't turn.
14 A She sets the shovel against the fence.
15 A Dusts her palms on her skirt.
16 A One at a time.
17 D AUGUSTINE [CONT'D]: He'd have wanted a preacher.
18 D ABIGAIL: He'd have wanted his horse.
19 A ¶ Augustine nods.
20 A Looks at the cross.
21 A Looks at the boy.
22 A Jeremiah lifts a handful of dry grass for the goat.
23 D AUGUSTINE: I'll see to the horse.
24 D ABIGAIL: Don't trouble yourself.
25 D AUGUSTINE: No trouble.
26 A ¶ She takes the hat from his hands and sets it on the cross.
* 27 A The brim catches the wind.
28 A She weights it with a stone.
29 D ABIGAIL: That's his now.
30 A ¶ Augustine opens his mouth.
31 A Closes it.
32 A Pulls a folded paper from his vest and holds it out.
33 A She doesn't take it.
34 D ABIGAIL [CONT'D]: Read it to him.
35 A ¶ Augustine looks at the grave.
36 A Clears his throat.
37 A Doesn't read.
38 A He folds the paper smaller, crouches, and tucks it into the dirt beside the cross.
39 A ¶ Jeremiah stands, brushes his knees.
40 A Walks to his mother.
41 A Takes her hand.
42 A Together they look at the cross until the light turns orange.
* 43 A The goats wander off.

### SCENE s01096 | INT. GRAND OPERA HOUSE - CATWALK ABOVE THE STAGE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE INEZ CASTELLANO-WU, OFFICER BARNABAS FINCH, STAGE MANAGER DOROTHEA LAMBERT, TOMASZ KRAWCZYK, AUGUSTO ELEGBE, FIGURE, VIOLETTA SANTORO-REYES
* 1 A ¶ Ropes, sandbags, pulleys in the dark.
* 2 A Below, a full orchestra tunes.
* 3 A A chandelier the size of a car hangs motionless beside the catwalk.
4 A ¶ DETECTIVE INEZ CASTELLANO-WU, 40s, black blazer, radio clipped to her belt, creeps along the planks.
5 A Behind her: OFFICER BARNABAS FINCH, 20s, sweating through his uniform; STAGE MANAGER DOROTHEA LAMBERT, 50s, headset, whispering into her collar; and a pair of maintenance men, TOMASZ KRAWCZYK, 40s, and AUGUSTO ELEGBE, 30s, hauling a toolbox between them.
6 A At the far end of the catwalk, half in shadow, crouches a figure with a briefcase.
7 D INEZ (whispering): Everybody quiet.
8 A ¶ She raises a fist.
9 A They halt.
10 A Dorothea clamps a hand over her headset mic.
11 A Tomasz and Augusto set the toolbox down so slowly it makes no sound.
12 A Barnabas draws his sidearm and holds it at his chest.
13 D DOROTHEA (to Inez): Overture starts in four minutes.
14 D INEZ: Then we have four.
15 A ¶ She steps forward.
* 16 A The planks creak.
17 A The figure at the end stiffens.
18 A A hush falls over the orchestra pit below.
19 D FIGURE (without turning): I wouldn't come closer.
20 D INEZ: Put the case down.
21 D FIGURE: It's not a case. It's a promise.
22 A ¶ Barnabas swallows.
23 A Augusto crosses himself.
24 A Tomasz mutters something in Polish.
25 D TOMASZ (muttering): Boze, nie teraz.
26 D DOROTHEA (to the group): Does anyone know where the cut-off is for the chandelier cable?
27 D AUGUSTO: Stage left. Behind the fly rail.
28 D DOROTHEA: Go. Quietly.
29 A ¶ Augusto slips away.
30 A Inez keeps her eyes on the Figure.
31 D INEZ: You don't have to do this.
32 D FIGURE: Everyone says that.
33 D INEZ: Because it's true.
34 A ¶ The Figure turns.
35 A A woman, 50s, in evening dress and tennis shoes.
36 A VIOLETTA SANTORO-REYES, ex-soprano.
37 A Her face is wet.
* 38 A In her lap, the briefcase hums.
39 D VIOLETTA: They fired me in this house. I sang four hundred nights.
40 D INEZ: I know.
41 D VIOLETTA: Do you? Do you know what silence sounds like when you were the music?
42 D INEZ: No.
43 A ¶ Violetta nods.
44 A Her fingers drift to the clasp.
45 A Barnabas lifts his gun.
46 D OFFICER BARNABAS: Ma'am, stay still.
47 D INEZ (to Barnabas): Lower it.
48 D OFFICER BARNABAS: Detective --
49 D INEZ: Lower it, Barnabas.
50 A ¶ He lowers it.
51 A Violetta lets out a laugh, brittle and soft.
52 D VIOLETTA: Four minutes, you said.
53 D INEZ: Three.
54 D VIOLETTA: Then let me sing it one last time.
55 D DOROTHEA (into the headset, low): Hold the curtain. Hold it. Give me a spot on the catwalk.
* 56 A ¶ A spotlight swings up from below and finds Violetta.
57 A She blinks.
58 A Rises.
* 59 A The briefcase slides from her lap.
* 60 A It clatters empty to the planks, a few pieces of sheet music spilling out.
61 A ¶ Inez steps to it.
62 A Picks one up.
* 63 A It is an aria.
* 64 A Blank staves.
65 D INEZ (softly): There's no bomb.
66 D VIOLETTA: There never was.
67 A ¶ Below, the orchestra falls silent.
68 A Waiting.
69 A Violetta takes a breath, lifts her chin, and sings one clear note into the dark.
* 70 A It carries up into the rafters.
71 A Nobody on the catwalk moves.
72 D TOMASZ (whispering, awed): Matko Boska.
73 A ¶ Dorothea lowers her hand.
74 A Barnabas holsters his gun.
75 A Inez closes her eyes.

### SCENE s01097 | INT. CURLING CLUB - BAR - NIGHT
Detected names (may be incomplete or contain aliases): RAGS, ENGSTROM, TOBY, ADEKUNLE, LOLO, BEAUMONT
* 1 A ¶ Wood paneling.
* 2 A A dartboard.
* 3 A Brooms hung on pegs.
* 4 A Through the frosted glass, the ice gleams under floodlights.
5 A ¶ SKIP RAGNHILD "RAGS" ENGSTROM, 40s, tweed vest, nurses a ginger ale.
6 A Her third, TOBIAS "TOBY" ADEKUNLE, 30s, still in his team sweater, picks at a bowl of peanuts.
7 A Their lead, ELOISE "LOLO" BEAUMONT, 20s, shoes off, feet on a stool, scrolls her phone.
8 D RAGS: Lolo, put the phone down.
9 D LOLO: It's the final scores.
10 D RAGS: We lost.
11 D LOLO: By one stone.
12 D TOBY: By one stone, Rags. One.
13 D RAGS: Don't you start, Toby.
14 D TOBY: I'm just saying, if you'd called the hammer on the ninth end --
15 D RAGS: I called the hammer.
16 D TOBY: You called it late.
17 A ¶ Rags slams her glass on the bar.
18 A Lolo drops the phone.
19 A Toby freezes mid-peanut.
20 D RAGS: I called it when the ice told me to.
21 D LOLO: Rags, the ice doesn't talk.
22 D RAGS: It does if you listen.
* 23 A ¶ A silence.
24 A Toby slowly crunches a peanut.
25 A Lolo picks up her phone, slides it into her pocket.
26 A Rags unclenches her fist.
27 D RAGS [CONT'D] (quieter): We did well, Lolo.
28 D LOLO: We did.
29 D TOBY: We did great, Rags.
30 D RAGS: Don't suck up, Toby.
31 D TOBY: I'm sucking up with respect.
32 A ¶ Rags almost smiles.
33 A Lifts her glass.
34 D RAGS: To the ninth end.
35 D LOLO: To the ninth end.
36 D TOBY: To the hammer.
37 A ¶ They clink.
* 38 A Beyond the glass, the Zamboni hums across the ice, erasing everything.

### SCENE s01098 | INT. FUNERAL HOME - FAMILY ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSEMARY PEMBERTON-DIALLO, BENEDICT PEMBERTON, DELPHINE ACHEBE-HART, FUNERAL DIRECTOR OSWALD PRICE
* 1 A ¶ Dim lamps.
* 2 A A mahogany casket at the front.
* 3 A Folding chairs in careful rows.
* 4 A A box of tissues on every seat.
* 5 A The smell of lilies and carpet cleaner.
6 A ¶ ROSEMARY PEMBERTON-DIALLO, 60s, in black wool, sits ramrod straight in the front row.
7 A Her son BENEDICT PEMBERTON, 40s, rumpled suit, fidgets beside her.
8 A Their cousin, DELPHINE ACHEBE-HART, 50s, large sunglasses indoors, stands against the back wall clutching her purse.
9 D BENEDICT: Mother, I can handle it.
10 D ROSEMARY: You can't handle a toaster.
11 D BENEDICT: That was one time.
12 D DELPHINE (from the back): It was three times, Ben.
13 D BENEDICT: Stay out of it, Delphine.
14 D DELPHINE: Don't tell me to stay out. I'm the one who found the will.
15 D ROSEMARY: The will is none of your business.
16 D DELPHINE: It's my business. I'm named in it.
17 D BENEDICT: You are not.
18 D DELPHINE: Page four. Paragraph two.
19 D ROSEMARY (rising): That paragraph was struck.
20 D DELPHINE: By who?
21 D ROSEMARY: By me.
22 D BENEDICT: Mother!
23 D ROSEMARY: Be quiet, Benedict.
24 D BENEDICT: You can't just --
25 D ROSEMARY: I can do what I please. I'm his widow.
26 D DELPHINE: And I'm his sister's daughter. Which makes me blood.
27 D ROSEMARY: Blood is overrated.
28 D DELPHINE: Says the woman who married into it.
* 29 A ¶ Silence.
30 A Rosemary stares at the casket.
31 A Her shoulders sag.
32 A Benedict puts a hand on her arm.
33 A She lets it stay.
34 D ROSEMARY (quiet): He would have hated this.
35 D BENEDICT: He would have loved it. The shouting.
36 D DELPHINE (wiping her eyes behind the sunglasses): He started half of it.
* 37 A ¶ A beat.
38 A Rosemary lets out a short, surprised laugh.
39 A Benedict follows.
40 A Delphine, last, a sob that turns into a snort.
41 A They sit in the gentle ruin.
* 42 A ¶ The door opens.
43 A FUNERAL DIRECTOR OSWALD PRICE, 50s, black suit, clears his throat.
44 D OSWALD: Ready, whenever you are.
45 D ROSEMARY: Give us a moment, Mr. Price.
46 D OSWALD: Of course.
47 A ¶ He retreats.
48 A Delphine crosses the room and sits on Rosemary's other side.
49 A Three of them in a row, looking at the casket.

### SCENE s01099_0 | INT. APPELLATE COURTHOUSE - JUDGES' ROBING ROOM - MORNING
Detected names (may be incomplete or contain aliases): JUDGE PHILOMENA ARCHIBALD-NWOSU, YOUNG MAN, GIDEON
* 1 A ¶ Marble sinks.
* 2 A A rack of black robes.
* 3 A A stained-glass window throws red and gold on the floor.
* 4 A The air smells of starch.
5 A ¶ JUDGE PHILOMENA ARCHIBALD-NWOSU, 60s, silver hair pinned under a cap, buttons her robe at the mirror.
6 A A YOUNG MAN in a rumpled suit slips in through the side door, clutching a leather folio.
7 A He freezes when he sees her.
8 D YOUNG MAN: Oh. Sorry. I thought this was the clerk's office.
9 D PHILOMENA: It's the robing room. Third door down.
10 D YOUNG MAN: Right. Of course.
11 A ¶ He doesn't leave.
12 A She meets his eyes in the mirror and turns slowly.
13 D PHILOMENA: Are you lost, or are you someone I should know?
14 D YOUNG MAN: I'm counsel for the appellant. In Whitlock versus the State.
15 D PHILOMENA: Name?
16 D YOUNG MAN: Gideon.
17 D PHILOMENA: Gideon what?
18 D GIDEON: Gideon Okafor-Lindgren.
19 D PHILOMENA: You'll want to hold that for the bench, Mr. Okafor-Lindgren. Not for a judge adjusting her collar.
20 D GIDEON: Yes, ma'am. Your Honor. Sorry.
21 A ¶ She turns back to the mirror.
22 A Fastens the last button.
23 A Her fingers pause.
24 D PHILOMENA: Whitlock. The arson.
25 D GIDEON: Yes.
26 D PHILOMENA: You argue today?
27 D GIDEON: Ten o'clock.
28 D PHILOMENA: Your first appellate?
29 A ¶ He hesitates.
30 A Looks at his folio.
31 D GIDEON: Is it that obvious?
32 D PHILOMENA: You walked into a judges' dressing room with your tie untucked.
33 A ¶ He glances at his tie.
34 A Flips it back under his jacket.
35 A She watches him struggle with it and her expression softens.
36 D PHILOMENA [CONT'D]: Come here.
37 D GIDEON: Your Honor?
38 D PHILOMENA: Come here.
39 A ¶ He steps forward.
40 A She tucks the tie, smooths his lapel with both hands, adjusts his collar.
41 A The way a mother would.
42 D PHILOMENA [CONT'D]: That's better. Now. Do not tell me your theory of the case.
43 D GIDEON: I wasn't going to.
44 D PHILOMENA: You were.
45 D GIDEON: ...I was.
46 A ¶ She nods.
47 A Steps back.
48 A Her eyes flicker over his face.
49 D PHILOMENA: Mr. Okafor-Lindgren. Who taught you to argue?
50 D GIDEON: Judge Waverly Bishop.
51 A ¶ Her hands go still.
52 D PHILOMENA: Waverly Bishop.
53 D GIDEON: Yes, ma'am. Before she passed.
54 D PHILOMENA: I know. I sat beside her for eleven years.
* 55 A ¶ A beat.
* 56 A The light shifts through the glass.
57 A Gideon, uncertain, shifts his feet.
58 D GIDEON: Is something wrong?
59 D PHILOMENA: She wrote me a letter. Before she died. About a young man in her clinic. She said, "He will lose his first appeal, and it will be the best thing for him."
60 D GIDEON: She wrote you about me?
61 D PHILOMENA: She wrote me about justice. You were the example.
62 A ¶ Gideon sags against the sink.
63 A Philomena gathers her gloves.
64 D PHILOMENA [CONT'D]: I won't tell you how to argue. But I will tell you this. I read your brief last night.
65 D GIDEON: And?
66 D PHILOMENA: It was good enough to be sad about.
67 D GIDEON (laughing, almost choking): Thank you?
68 D PHILOMENA: Don't. Not yet.
69 A ¶ She walks to the door.
70 A Stops with her hand on the knob.
71 D PHILOMENA [CONT'D]: Judge Philomena Archibald-Nwosu does not take shortcuts. If you come before me, you earn it.
72 A ¶ She exits.
* 73 A The door closes softly.
74 A Gideon stands alone in the red light, tie perfectly knotted.

### SCENE s01099_1 | INT. APPELLATE COURTROOM - LATER
Detected names (may be incomplete or contain aliases): JUDGE ARCHIBALD-NWOSU, GIDEON, PHILOMENA
* 1 A ¶ Packed gallery.
2 A Three judges at the bench.
3 A Gideon at the lectern, folio open, knuckles white.
4 D JUDGE ARCHIBALD-NWOSU: Counsel. You may proceed.
5 A ¶ He takes a breath.
6 D GIDEON: May it please the court.
7 D PHILOMENA: Mr. Okafor-Lindgren, please. Your Honor will do.

### SCENE s01100 | INT. ORBITAL GREENHOUSE RING - OBSERVATION DECK - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): YASMIN HOSSAIN-RYDER, TECHNICIAN WALDEMAR OKPARA, HALCYON, COMMANDER IRIS TANAKA-LUND
* 1 A ¶ A curved corridor lined with hydroponic racks.
* 2 A Violet grow-light.
* 3 A A viewport shows Earth turning slowly below.
* 4 A The air smells of basil and recycled coolant.
5 A ¶ DR. YASMIN HOSSAIN-RYDER, 40s, sits cross-legged on the floor, a tablet balanced on her knee.
6 A She stirs a pouch of reconstituted tea.
7 A Her colleague, TECHNICIAN WALDEMAR OKPARA, 30s, wipes down a nutrient valve.
8 A Their station AI, a soft voice called HALCYON, murmurs from a speaker near the ceiling.
9 A Beside the viewport, the commander, COMMANDER IRIS TANAKA-LUND, 50s, stands with her arms folded, gazing at the planet.
10 A ¶ Yasmin sips.
11 A Waldemar wipes.
12 A Iris does not move.
13 A She hums low, tuneless.
14 D HALCYON [V.O.]: Humidity at sixty-two percent. Within tolerance.
15 D YASMIN (not looking up): Thank you, Halcyon.
16 D HALCYON [V.O.]: You are welcome. Would you like the evening readings?
17 D YASMIN: Later.
18 A ¶ She taps the tablet.
19 A Waldemar glances at her, then at the commander.
20 A He lowers his voice.
21 D WALDEMAR: Is she okay?
22 D YASMIN: She's thinking.
23 D WALDEMAR: She's been thinking for an hour.
24 D YASMIN: She's the commander. She thinks in hours.
25 A ¶ He nods and returns to the valve.
* 26 A A drop of nutrient solution beads on the pipe.
27 A He catches it with his thumb.
28 A ¶ Iris turns from the viewport.
29 A Looks at them both with a mild, unreadable expression.
30 D IRIS: We got the message from Mission Control.
31 D YASMIN: The extension?
32 D IRIS: Six more months.
33 A ¶ Waldemar's rag stops.
34 A Yasmin sets down the tablet.
* 35 A For a moment the only sound is the hum of the racks.
36 D WALDEMAR (carefully): Ma'am, the crew rotation --
37 D IRIS: Is delayed. Yes.
38 D YASMIN: And the supply drop?
39 D IRIS: Sufficient. They believe.
40 A ¶ She walks to the nearest rack, brushes the leaves of a tomato plant with two fingers, and inhales.
41 D IRIS [CONT'D]: Tomatoes should be ready by the third week.
42 A ¶ Yasmin and Waldemar exchange a look.
43 A He nods to her.
44 A She shrugs, resigned.
45 A He folds the rag and sets it by the valve.
46 D HALCYON [V.O.]: Would anyone care for a cup of tea?
47 D IRIS (a small smile): Yes, Halcyon. Four.
48 D HALCYON [V.O.]: Four, Commander? There are three of you.
49 A ¶ Iris pauses.
50 A The smile fades.
51 A She turns to the speaker.
52 D IRIS: ...Three. Of course. Three.
53 A ¶ She walks away toward the corridor, one hand trailing along the rack.
54 A Waldemar watches her go, then looks at Yasmin.
55 D WALDEMAR: Who was the fourth?
56 D YASMIN (quietly): I'll tell you later.

### SCENE s01101 | INT. DECOMMISSIONED SUBMARINE BAY - SPACE STATION - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIANA MBEKI-ROSSI, ENGINEER DORIAN WESTBROOK-ANAND, MEDIC IMANI SOLBERG, SECURITY CHIEF PAVEL ORLOV-DIALLO, LINGUIST ESPERANZA BALOGUN, TEO ABERNATHY-LIU, COMMS
* 1 A ¶ A long dim hangar.
* 2 A Hull plates ticking as they cool.
* 3 A A flickering amber strip light.
* 4 A A rack of pressure suits like hanging skins.
5 A ¶ CAPTAIN LUCIANA MBEKI-ROSSI, 50s, shaved head, grease-stained flight suit, kneels beside a dark console.
6 A Next to her, ENGINEER DORIAN WESTBROOK-ANAND, 30s, arms crossed, watches a diagnostic wheel spin.
7 A Further off, MEDIC IMANI SOLBERG, 20s, hugs a first-aid case, her hands trembling.
8 A At the hatch, SECURITY CHIEF PAVEL ORLOV-DIALLO, 40s, holds a pulse rifle, eyes on the ceiling.
9 A Two more figures stand in shadow by the far bulkhead: LINGUIST ESPERANZA BALOGUN, 30s, in a pale coat, and a young cadet, TEO ABERNATHY-LIU, 19, clutching a datapad.
10 D LUCIANA: Status.
11 D DORIAN: Core's alive. Everything else is asleep.
12 D LUCIANA: Wake it.
13 D DORIAN: I'm trying.
14 D IMANI (small): Captain?
15 D LUCIANA: Not now.
16 D IMANI: The hull is making a noise.
* 17 A ¶ Silence.
* 18 A The strip light flickers.
* 19 A A distant, rhythmic tapping rolls through the metal.
20 A Pavel's rifle lifts.
21 D PAVEL: It's not the cooling.
22 D ESPERANZA: It's a pattern.
23 D LUCIANA: What kind of pattern?
24 D ESPERANZA (listening): Three. Pause. Three.
25 D TEO: Is that Morse?
26 D ESPERANZA: It's a countdown.
27 D COMMS [V.O.] (crackling, over the intercom): ...bay four... can anyone hear... bay four...
28 A ¶ Luciana grabs the handset from the console.
29 D LUCIANA: This is Mbeki-Rossi. Say again.
30 D COMMS [V.O.]: Captain? Thank god. We're locked in the sub bay. The door sealed itself.
31 D LUCIANA: Who is this?
32 D COMMS [V.O.]: Station Operations. We've been tapping on the hull for an hour.
33 A ¶ Pavel lowers the rifle slowly.
34 A Dorian stands.
35 A Imani lets out a breath.
* 36 A The tapping continues, closer now.
37 D LUCIANA (into the handset): We're in bay four.
38 D COMMS [V.O.]: No, ma'am. You're not.
39 A ¶ Luciana stares at the handset.
40 A At the others.
* 41 A At the ceiling, where something taps once, twice, thrice.
42 D DORIAN (whispering): If they're locked in the sub bay...
43 D PAVEL: Then what is that?
* 44 A ¶ The tapping stops.
* 45 A A long silence.
* 46 A The strip light dies.
* 47 A In the dark, a soft voice laughs, thin and delighted, from the vent above.
48 A ¶ Teo drops the datapad.
* 49 A It clatters.
* 50 A No one picks it up.

### SCENE s01102 | INT. WEDDING TENT IN A FLOODED MEADOW - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FERREIRA, ADEBAYO KUROSAWA, BERNADETTE, CALLUM OYELARAN, PIA
* 1 A ¶ Fairy lights sag.
* 2 A Rain drums the canvas.
* 3 A Muddy shoes in a pile by the dance floor.
* 4 A A three-tier cake leans, slightly.
5 A ¶ MARISOL FERREIRA, 30s, in a ruined white gown, stands on a chair holding a champagne bottle.
6 A Her groom, ADEBAYO KUROSAWA, 30s, soaked tux, stands below, arms raised to catch her.
7 A Aunt BERNADETTE, 60s, clutches a tray of canapés.
8 A The best man, CALLUM OYELARAN, 30s, tries to rescue the cake.
9 A The flower girl, PIA, 8, sits under a table with a kitten.
10 D MARISOL: Everyone, listen!
* 11 A ¶ Rain hammers louder.
* 12 A Nobody listens.
13 D ADEBAYO (to her): Marisol, come down.
14 D MARISOL (to herself): I will not cry. I will not cry.
15 D CALLUM (over his shoulder): Somebody help me with this cake!
16 D BERNADETTE: Not unless it floats!
* 17 A ¶ The canvas sags.
* 18 A Water pours through a seam onto the dance floor.
19 A Callum, Bernadette, and Adebayo dive for the cake as one.
20 A They collide, slide, and sit down hard in the mud.
* 21 A The cake tilts, hovers, then lands neatly on Callum's lap.
22 A ¶ Marisol stops.
23 A Stares.
24 A Starts to laugh.
25 D MARISOL (to the crowd, lifting the bottle): To the wettest wedding in the county!
26 A ¶ Pia crawls out from under the table, kitten in her arms.
27 A Adebayo reaches for Marisol's hand.
28 A She jumps down into his arms.

### SCENE s01103 | INT. FLOODED CELLAR OF A VICTORIAN ASYLUM - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA MAXWELL-ODUYA, ARTEMUS PIKE, VOICE
* 1 A ¶ Ankle-deep black water.
* 2 A Rusted bed frames stacked against slick brick walls.
* 3 A A single lantern hangs from a chain, throwing a dim yellow circle.
* 4 A Somewhere, dripping.
5 A ¶ DR. CORDELIA MAXWELL-ODUYA, 40s, in a tailored coat and rubber boots, moves slowly through the water with a lamp raised high.
6 A Behind her, her assistant, ARTEMUS PIKE, 20s, frightened and trying not to show it, clutches a camera.
7 D CORDELIA: Mind the step.
8 D ARTEMUS: There's a step?
9 D CORDELIA: There was. Somewhere.
* 10 A ¶ Water ripples around her boots.
* 11 A A bed frame creaks against the wall.
12 A Artemus lifts the camera, thumbs the shutter.
* 13 A The flash burns the room white for an instant: iron frames, wet bricks, and a figure standing against the far wall.
14 A ¶ Cordelia freezes.
15 A Artemus lowers the camera.
* 16 A Darkness again, the lantern small.
17 D ARTEMUS [CONT'D] (whispering): Did you see --
18 D CORDELIA: Yes.
19 D ARTEMUS: It looked like --
20 D CORDELIA: I said yes, Artemus.
* 21 A ¶ Another creak.
* 22 A The lantern chain sways.
* 23 A The yellow circle swings across the wall and finds nothing but brick.
24 D ARTEMUS: Doctor, I think we should go.
25 D CORDELIA: We came for a reason.
26 D ARTEMUS: I've forgotten the reason.
27 D CORDELIA: Patient forty-one. Mary Hargreave. Locked here in eighteen-ninety.
28 D ARTEMUS: For what?
29 D CORDELIA: For hearing things.
* 30 A ¶ A soft sound rolls through the water.
* 31 A A woman's voice, thin as paper, humming a lullaby.
32 A Artemus's hands tighten on the camera.
33 A Cordelia's lamp trembles.
34 D VOICE [O.S.] (humming, then singing): Hush, little one, the water's deep...
35 D ARTEMUS: Doctor.
36 D CORDELIA: Don't answer her.
37 D ARTEMUS: I wasn't going to.
38 D VOICE [O.S.]: ...hush, little one, I'll never sleep...
* 39 A ¶ The song comes closer.
* 40 A Water stirs between them.
* 41 A Something pale rises beneath the surface, a hand, then a wrist, then a face.
42 D CORDELIA (whispering at the same moment as Artemus): Do not look.
43 D ARTEMUS: ^Do not look.
44 A ¶ They both turn their faces.
* 45 A The singing stops.
* 46 A The hand breaks the surface a foot from Cordelia's boot, fingers open, trembling.
47 A It closes around her ankle.
48 A ¶ She screams.
* 49 A The lantern chain snaps.
* 50 A Darkness.
51 A ¶ Artemus's camera flashes.
52 A In the white blink: Cordelia on her knees, and a woman in a rotting nightgown holding her ankle, mouth open in a soundless song.
* 53 A ¶ Black.
* 54 A ¶ The water settles.
* 55 A The dripping resumes.

### SCENE s01104 | EXT. RAILROAD WATER TOWER - HIGH PLAINS - DAWN
Detected names (may be incomplete or contain aliases): MARSHAL EZEKIEL DUNMORE, ODESSA PRATT-ADEYEMI, LAZARUS, RADIO
* 1 A ¶ A rusted tower on spindly legs.
* 2 A Dust devils on the flats.
* 3 A A single telegraph wire hums in the wind.
4 A ¶ MARSHAL EZEKIEL DUNMORE, 50s, hat low, rides in on a gray mare and dismounts at the base.
5 A Waiting there: ODESSA PRATT-ADEYEMI, 30s, canvas duster, rifle across her lap.
6 A Beside her, a boy, LAZARUS, 14, holds a canteen and keeps his eyes on his boots.
7 A ¶ Dunmore ties his horse.
8 A Takes his time.
9 D DUNMORE: You sent the telegram.
10 D ODESSA: I did.
11 D DUNMORE: Said you had the Whitaker brothers.
12 D ODESSA: I did, until they climbed the tower.
13 A ¶ Dunmore looks up.
14 A Two silhouettes against the pale sky, cross-legged on the catwalk.
15 D DUNMORE: They armed?
16 D ODESSA: They've got a Winchester and a jug.
* 17 A ¶ The telegraph wire sings.
18 A Dunmore pulls a pair of spectacles from his pocket, polishes them, puts them on.
19 A Lazarus finally looks up at him.
20 D LAZARUS: Marshal. Are you going to shoot them?
21 D DUNMORE: Not unless they ask nicely.
22 A ¶ Lazarus almost smiles.
23 A Odessa lifts her rifle a hair.
24 D RADIO [V.O.] (crackling from the saddlebag): Dunmore, this is Fort Bell. Report.
25 A ¶ Dunmore pulls a small field radio from the saddle.
26 A Raises it to his mouth.
27 D DUNMORE: Three at the tower. Two up high. Holding.
28 D RADIO [V.O.]: Copy. Reinforcements by noon.
29 D DUNMORE: They'll be too late.
30 A ¶ He clicks it off.
31 A Takes the rifle from Odessa's lap, hands it back to her, butt first.
32 A Walks to the ladder.
33 A Puts his boot on the first rung.
34 D ODESSA: Marshal.
35 A ¶ He pauses.
36 A She meets his eyes.
37 A Neither speaks.
38 A Lazarus watches both of them.
39 A Dunmore tips his hat and climbs.

### SCENE s01105 | EXT. BOMBED-OUT CINEMA - ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT FIONNUALA BRADY-ESCOBAR, SERGEANT IKENNA ABARA, JAMSHID TAVAKOLI
* 1 A ¶ Half a marquee hangs by its cables.
* 2 A The facade is gone; the screen stands bare and cracked like a tooth.
* 3 A Smoke drifts across a starless sky.
* 4 A Below, a city of broken lamps.
5 A ¶ LIEUTENANT FIONNUALA BRADY-ESCOBAR, 30s, short dark hair, torn sleeve, crouches behind a ventilation stack with a scoped rifle across her knees.
6 A The scar on her cheek catches the glow of distant fires.
7 A Beside her, SERGEANT IKENNA ABARA, 40s, thick-armed, bleeds slowly from a bandage on his thigh.
8 A Further back, behind a toppled projector, huddles a civilian in a grease-stained coat: MR. JAMSHID TAVAKOLI, 60s, a projectionist, spectacles cracked.
9 A ¶ She lifts the scope.
10 A He presses a hand to the bandage.
11 D IKENNA: Anything?
12 D FIONNUALA: Two on the street. One on the balcony opposite.
13 D IKENNA: Ours?
14 D FIONNUALA: No.
15 A ¶ She doesn't move.
* 16 A The balcony light flickers.
17 A Mr. Tavakoli shifts and a piece of masonry falls from the projector.
18 A She flinches.
19 A Ikenna grabs her sleeve.
20 D IKENNA: Easy.
21 D FIONNUALA: He's making noise.
22 D IKENNA: He's old.
23 D FIONNUALA: He's loud.
24 A ¶ Tavakoli raises both hands, a gesture of apology.
25 A She exhales.
26 A Lowers the rifle an inch.
27 D MR. TAVAKOLI (whispering): I show films here thirty years. I know every board in this roof.
28 D FIONNUALA: Then tell me which ones creak.
29 D MR. TAVAKOLI: All of them. Except those.
30 A ¶ He points to a line of beams near the edge, bare against the sky.
31 D FIONNUALA: Can we reach them?
32 D MR. TAVAKOLI: If you crawl.
33 A ¶ She nods at Ikenna.
34 A He grimaces, rolls onto his stomach, begins to inch toward the beams.
* 35 A Blood darkens the roof where he passes.
36 A ¶ She watches him go.
37 A Then, quietly, she pulls the old man close and speaks in his ear.
38 D FIONNUALA: When he reaches the end, you follow. Do not stop.
39 D MR. TAVAKOLI: And you?
40 D FIONNUALA: I stay.
41 A ¶ He starts to protest.
42 A Her eyes silence him.
* 43 A A distant shell whistles in.
44 A They duck.
45 A The projectionist clings to the screen's iron frame.
46 A ¶ Ikenna reaches the beams.
47 A Raises one hand: the signal.
48 A Tavakoli crawls after him, gray hair dusted white with plaster.
49 A ¶ Fionnuala rises into a crouch.
50 A Raises the rifle.
* 51 A The balcony light flares.
52 A She takes aim.
* 53 A ¶ Below, in the bare screen's reflection, a thousand flickers of fire wink like frames of a lost film.

### SCENE s01106 | INT. FERRY CAFE - RAINY DAY
Detected names (may be incomplete or contain aliases): HAZEL OKONKWO-LARSEN, JONAH PELLEGRINI, WENDELL ACHTERBERG
* 1 A ¶ Steam on the windows.
* 2 A A chalkboard menu.
* 3 A Wet umbrellas in a bucket.
* 4 A The ferry's engine thrums through the floor.
5 A ¶ HAZEL OKONKWO-LARSEN, 30s, hair damp, sits at a corner table with a cup of tea.
6 A Across from her, JONAH PELLEGRINI, 30s, in a yellow raincoat, stirs sugar into coffee.
7 A Next to them, a stranger, WENDELL ACHTERBERG, 60s, reads a newspaper pretending not to listen.
8 D HAZEL: You said you'd be on the nine o'clock.
9 D JONAH: I missed it.
10 D HAZEL: You always miss it.
11 D JONAH: I got caught up.
12 D HAZEL: In what?
13 D JONAH: Life.
14 D WENDELL (from behind the paper): That's usually what it is.
15 D HAZEL (turning): Excuse me?
16 D WENDELL: Nothing. Carry on.
17 D JONAH: Sir, this is a private conversation.
18 D WENDELL: It's a ferry cafe. Nothing's private.
19 D HAZEL: He has a point.
20 D JONAH: Hazel.
21 D HAZEL: He does.
22 D JONAH: You're on his side now?
23 D WENDELL: I'm not on anyone's side. I'm reading about a cricket match.
24 D HAZEL (to Wendell): Who's winning?
25 D WENDELL: Nobody. It rained.
26 A ¶ Jonah laughs, despite himself.
27 A Hazel's mouth twitches.
* 28 A The ferry horn blasts.
29 A All three look up.
* 30 A Rain streams down the glass.
31 D JONAH (softly, to Hazel): I'm sorry.
32 D HAZEL (softly): I know.
33 D WENDELL (lowering the paper): And that's that.

### SCENE s01107 | EXT. ROOFTOP WATER TANK - SUBURBAN NIGHT
Detected names (may be incomplete or contain aliases): SADIE KOWALSKI-IBRAHIM, MILO BERGSTROM, RADIO
* 1 A ¶ A wooden tank on stilts above a flat tar roof.
* 2 A Cicadas.
* 3 A A radio plays low from an open window below.
4 A ¶ SADIE KOWALSKI-IBRAHIM, 16, sits on the ledge with her feet dangling.
5 A Her younger cousin MILO BERGSTROM, 13, climbs the last rung of the ladder, breathless.
6 A He freezes when he sees her.
7 A She doesn't turn.
8 A ¶ He climbs onto the roof.
9 A She hears him.
10 A Shifts a few inches to make room.
11 A He sits.
12 A They stare at the neighbors' lit windows.
13 D RADIO [V.O.] (muffled, from below): ...and now, the late-night countdown. Number three this week...
14 A ¶ She hums along.
15 A He taps his heel against the brick.
* 16 A A long moment passes.
17 A ¶ He offers her a cracker from his pocket.
18 A She takes it.
19 A They chew in the dark.
20 A ¶ She shoves him gently.
21 A He shoves back.
22 A She nearly slides off the ledge; he grabs her sleeve.
23 A They both go still.
24 A Then she laughs, and he lets go, and neither of them says what almost happened.
25 D RADIO [V.O.]: ...and the number one song in the country...
26 A ¶ She stands, brushes crumbs from her knees.
27 A Holds out her hand.
28 A He takes it.
29 A They climb down together, the song swelling behind them.

### SCENE s01108_0 | INT. ABANDONED BOARDING SCHOOL - DORMITORY WING - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR LORETTA ACHEBE-VANCE, THADDEUS NWOKE-BRIGGS, PRUDENCE OYELOWO
* 1 A ¶ A long room of iron cots, each with a stained mattress.
* 2 A Peeling wallpaper patterned with faded violets.
* 3 A A cracked mirror at the end of the room.
* 4 A Moonlight through ragged curtains.
* 5 A The air is thick with damp.
6 A ¶ PROFESSOR LORETTA ACHEBE-VANCE, 50s, tweed jacket, notebook, steps through the door with a lantern held high.
7 A She is a historian, and she is tired.
8 A Behind her, her graduate student THADDEUS NWOKE-BRIGGS, 20s, narrow shoulders, backpack too large.
9 A And behind him, a ghost-tour guide from the village, MRS. PRUDENCE OYELOWO, 60s, in a brown cardigan, clutching rosary beads.
10 D LORETTA: Cots numbered, but not in order.
11 D THADDEUS: Fourteen. Nine. Twenty-two.
12 D LORETTA: And this one?
13 A ¶ She stops beside a cot.
* 14 A Its pillow bears a deep hollow.
* 15 A A child's shape pressed in.
16 D MRS. PRUDENCE (whispering): Don't touch that one.
17 D LORETTA: Why not?
18 D MRS. PRUDENCE: That was Eleanor's.
19 D THADDEUS: Eleanor who?
20 D MRS. PRUDENCE: The girl who stopped sleeping.
21 A ¶ Thaddeus laughs, nervously, then stops.
22 A Loretta sets the lantern on the cot's frame and kneels.
* 23 A The flame shivers.
24 D LORETTA (low): This mattress is warm.
25 D THADDEUS: That's impossible.
26 D LORETTA: Feel it.
27 A ¶ He hesitates.
28 A Crosses.
29 A Lays two fingers on the sheet.
30 A Pulls them back.
31 D THADDEUS: It is.
32 D MRS. PRUDENCE: Out. All of you. Now.
33 D LORETTA: Mrs. Oyelowo --
34 D MRS. PRUDENCE: She doesn't like people who stay.
* 35 A ¶ At the far end of the dormitory, the cracked mirror gives a small, metallic tick.
36 A All three turn.
* 37 A In its dark glass, a faint figure stands at the end of a bed.
38 A A girl in a long nightgown, head tilted, hands folded.
39 D LORETTA (whispering): Nobody move.
40 D THADDEUS: That's not a reflection. There's nobody there.
41 D MRS. PRUDENCE (rosary clicking): Hail Mary, full of grace...
42 A ¶ The girl in the mirror lifts her head.
43 A Her face is blank, a pale oval without features.
44 A She raises a hand and points directly at Thaddeus.
45 D THADDEUS: Why me?
46 D LORETTA: Back away. Slowly.
47 A ¶ He backs.
48 A His heel catches on a cot leg.
* 49 A The iron frame scrapes the floor with a shriek.
* 50 A The mirror shatters, shards falling in a silver rain.
* 51 A ¶ The lantern gutters.
* 52 A The dormitory plunges into darkness.
* 53 A Somewhere in the black, the creak of a hundred cots shifting under unseen weight.
54 D MRS. PRUDENCE [CONT'D] (screaming): Run!
55 A ¶ They do.
* 56 A Boots clatter on the floorboards.
* 57 A The lantern rolls and goes out.

### SCENE s01108_1 | INT. DORMITORY CORRIDOR - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORETTA, THADDEUS, MRS. PRUDENCE, ELEANOR
1 A ¶ They tumble through the door and into the corridor, gasping.
2 A Loretta slams it shut.
* 3 A A heavy thud answers from the other side.
4 D LORETTA: Hold it!
5 A ¶ Thaddeus throws his shoulder against the door.
6 A Mrs. Prudence presses her back against it.
* 7 A The thuds come faster.
* 8 A Harder.
9 A Something laughs, high and child-like.
10 D THADDEUS: It's strong!
11 D LORETTA: It's a child!
12 D MRS. PRUDENCE: It's not a child anymore!
* 13 A ¶ The door bulges.
14 A Loretta digs in her satchel, pulls out a brass key.
15 D LORETTA: There's a lock!
16 D THADDEUS: Do it!
17 A ¶ She rams the key in, turns.
* 18 A The bolt clunks home.
* 19 A The thudding stops.
20 A In the silence, they sink to the floor, panting.
21 A ¶ A tiny voice speaks from beneath the door.
22 A Barely a whisper.
23 D ELEANOR [O.S.]: Don't leave me.
24 A ¶ None of them answer.

### SCENE s01109 | INT. EMPTY GYM - SCOREBOARD CONTROL CLOSET - NIGHT
Detected names (may be incomplete or contain aliases): BILLIE, ROSSITER-KAMARA, JANITOR
* 1 A ¶ A cramped closet with a hand-wired switchboard.
* 2 A Taped wires.
* 3 A A dusty window onto the dark court below.
* 4 A A folding chair.
5 A ¶ WILHELMINA "BILLIE" ROSSITER-KAMARA, 50s, former point guard, in a faded jersey and sweatpants, sits at the board with a clipboard on her lap.
6 A She taps a button.
* 7 A Below, the old scoreboard blinks: HOME 00 GUEST 00.
8 D BILLIE: Check, check.
9 A ¶ She taps another button.
* 10 A A horn blares through the empty gym.
11 A She winces, turns the volume down a notch.
12 D BILLIE [CONT'D] (to herself): Twenty-two years and I still hit the wrong one.
* 13 A ¶ A crackle on the intercom.
14 D JANITOR [V.O.] (over the PA): Coach? You still in there?
15 D BILLIE (leaning to the mic): Five more minutes, Eddie.
16 D JANITOR [V.O.]: Lights go off at ten.
17 D BILLIE: I know.
18 A ¶ She hangs up the mic.
19 A Looks down through the window.
* 20 A The court is blank hardwood, the lines worn pale.
21 A She flips a switch.
* 22 A A spotlight lands on center court.
23 A ¶ She sits for a while, watching the empty circle of light.
24 D BILLIE [CONT'D] (softly): Tip off.
25 A ¶ She presses the home-score button.
* 26 A HOME climbs: 02.
* 27 A She presses it again: 04.
* 28 A Then 06.
* 29 A Then 08.
30 A She presses it until it reads 99.
31 A A small, crooked smile.
32 A ¶ She hits the horn one last time.
* 33 A It rolls across the gym, rattling the rafters.
34 D BILLIE [CONT'D] (whispering): Good game.
35 A ¶ She clicks off the spotlight.
* 36 A The scoreboard goes dark.

### SCENE s01110 | INT. ANSWERING MACHINE - PARKED CAR OUTSIDE A HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): CORNELIUS AJAYI-WHITLOCK, MACHINE
* 1 A ¶ Dashboard glow.
* 2 A A paper coffee cup.
* 3 A Sodium lights smearing across the windshield.
* 4 A The engine ticks as it cools.
5 A ¶ CORNELIUS AJAYI-WHITLOCK, 60s, tie loosened, grips the steering wheel with both hands.
* 6 A A phone rests in the cup holder, speaker on.
7 D MACHINE [V.O.] (electronic, cheerful): You have reached the home of the Ajayi-Whitlock family. We can't come to the phone right now. Leave a message.
* 8 A ¶ BEEP.
9 D CORNELIUS: Hey, Mara. It's Dad.
10 A ¶ He clears his throat.
11 D CORNELIUS [CONT'D]: I know you're not going to pick up. You haven't picked up in three years. That's fine. I'm not calling to make you.
12 A ¶ He rubs his eyes with the heel of his hand.
13 D CORNELIUS [CONT'D]: Your mother's room is on the fourth floor. Bed six. They moved her out of intensive care this afternoon. She asked about you. She asked if the flowers on her windowsill were from you. I told her yes.
14 A ¶ A long breath.
15 D CORNELIUS [CONT'D]: They weren't. I bought them. At the corner shop. But I thought, what's one more lie after thirty years of marriage. She smiled. That was enough.
16 A ¶ His voice cracks.
17 A He lets it.
18 A A nurse passes the windshield in the lot.
19 A He doesn't look.
20 D CORNELIUS [CONT'D]: The doctor says it could be days. Could be weeks. Could be a month. They don't know. They never know.
21 A ¶ He grips the wheel harder.
22 D CORNELIUS [CONT'D]: I'm not asking you to come. I'm only telling you where we are. Fourth floor. Bed six. Visiting hours until nine. After that, tell the desk you're family. They'll let you in.
23 A ¶ He reaches for the phone.
24 A Stops.
25 D CORNELIUS [CONT'D]: I did love the way you used to leave messages on this machine. Do you remember? You'd sing. Wrong notes. Every time.
26 A ¶ A pause.
27 D CORNELIUS [CONT'D]: Sing something, Mara. If you want. Anything.
28 A ¶ He waits.
* 29 A Only static.
* 30 A Then the long tone of the machine closing the line.
31 D MACHINE [V.O.] (cheerful): Your message has been saved.

### SCENE s01111 | INT. SURPRISE PARTY - APARTMENT LIVING ROOM - DARK - EVENING
Detected names (may be incomplete or contain aliases): BEA, LINDQVIST-ADE, COLM FITZGIBBON, ROZ, PELLEGRINO-OKON, YOSHIRO BAPTISTE, TIBBY, MORROW, DELIVERY GUY, ALL
* 1 A ¶ Balloons.
* 2 A A banner.
* 3 A A cake with too many candles.
4 A Five adults crouch behind furniture, whispering, trying not to giggle.
5 A ¶ BEATRIX "BEA" LINDQVIST-ADE, 40s, behind the couch with a noisemaker.
6 A COLM FITZGIBBON, 30s, behind the armchair holding a camera.
7 A ROSALIND "ROZ" PELLEGRINO-OKON, 50s, under the dining table with the cake.
8 A YOSHIRO BAPTISTE, 20s, crouched by the door, finger on the lights.
9 A And TIBERIUS "TIBBY" MORROW, 60s, hidden inside the coat closet.
10 D BEA (whispering): She's coming up the stairs.
11 D COLM (whispering): How do you know?
12 D BEA: I hear her keys.
13 D ROZ: She's got the wrong keys.
14 D YOSHIRO: Shh!
* 15 A ¶ The doorknob rattles.
16 A All five freeze.
* 17 A A key scrapes and fails.
* 18 A Another.
* 19 A A third.
20 D TIBBY (from the closet): Is it her?
21 D BEA: Quiet!
* 22 A ¶ The door swings open.
23 A A silhouette in the hall: a stranger in a delivery uniform, holding a pizza box.
24 D DELIVERY GUY: Uh. Hello?
25 A ¶ Yoshiro flips the lights.
26 A Everyone leaps up.
27 D ALL: Surprise!
28 A ¶ Roz pitches the cake into the air.
29 A Colm's flash goes off.
30 A Bea blows the noisemaker in the Delivery Guy's face.
31 A He yelps, the pizza flies, the cake lands on Tibby as he tumbles out of the closet.
* 32 A ¶ Silence.
33 A Frosting drips from Tibby's nose.
34 A The Delivery Guy stares at them all.
35 D DELIVERY GUY [CONT'D]: ...Does anyone here order a large pepperoni?
36 D BEA (weakly): Wrong apartment?
37 D DELIVERY GUY: Apparently.
38 A ¶ Tibby licks frosting from his lip.
39 D TIBBY: Well. I'll take the pizza.

### SCENE s01112 | EXT. ICE-CAVE MOUTH - GLACIER - DAWN
Detected names (may be incomplete or contain aliases): NADIA, VOLKOV-ASANTE, NAT, BELL-TAKAHASHI, DESMOND OKONKWO-PARR
* 1 A ¶ A blue gash in a field of white.
* 2 A Wind scours the snow into long ripples.
3 A Three tiny figures stand at the lip of a frozen lake, backs to the cave.
4 A ¶ NADEZHDA "NADIA" VOLKOV-ASANTE, 40s, orange parka, iced eyelashes, drags a sled carrying a sleeping bag.
5 A Next to her, IGNATIUS "NAT" BELL-TAKAHASHI, 30s, hood drawn, gloves split at the fingertips, winds a rope around his waist.
6 A Dragging up the rear, DESMOND OKONKWO-PARR, 20s, lagging, hobbles on one swollen ankle.
7 D NADIA: Rest stop. Ten minutes.
8 D NAT: We don't have ten.
9 D NADIA: We have what we have.
10 A ¶ She drops the sled's handle.
11 A He kneels, checking the knot on the sleeping bag, while Desmond lowers himself onto his pack.
12 A Nat pulls out a thermos, takes a swallow, hands it to Desmond.
13 A Desmond drinks, hands it to Nadia, who sips and stares across the frozen lake at a ridge of dark rock.
14 D NADIA [CONT'D]: That's the pass.
15 D NAT: How far?
16 D NADIA: Six kilometers. Maybe seven.
17 D DESMOND (quietly): I can walk.
18 D NAT: You can't.
19 D DESMOND: I can crawl.
20 D NADIA: Nobody's crawling.
21 A ¶ She stands, tightens the sled's strap.
22 A Nat rises, unwinds the rope, ties one end to the sled and the other to Desmond's pack.
23 A Desmond opens his mouth to protest.
24 A Nat holds up a hand.
25 D NAT: You're the anchor. Don't argue.
26 D DESMOND: That's backwards.
27 D NAT: Humor me.
* 28 A ¶ Wind gusts, whipping powder across their faces.
29 A Nadia pulls up her hood, turns toward the pass, and leans into the haul line.
* 30 A The sled lurches.
31 A Nat falls in beside her.
32 A Desmond, tethered, drags his foot.
33 A ¶ They walk.
34 A No one speaks.
* 35 A Their shadows lengthen across the ice.

### SCENE s01113 | INT. CRYO-VAULT - ORBITAL STATION - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER ODALYS REEVES-AKINTOLA, TECH SANTIAGO OYELARAN-WOO, DOCTOR MIRIAM BELLAMY, PIXIE
* 1 A ¶ Frost on steel.
* 2 A Rows of dark capsules.
* 3 A A single red indicator blinks.
* 4 A Breath hangs in the air.
5 A ¶ COMMANDER ODALYS REEVES-AKINTOLA, 40s, parka over her flight suit, kneels by capsule 17 and wipes frost from its window.
6 A Behind her, TECH SANTIAGO OYELARAN-WOO, 30s, scans a diagnostic panel.
7 A Over by the airlock, DOCTOR MIRIAM BELLAMY, 50s, lifts a medical scanner, and next to her a scruffy teenage stowaway, PIXIE, 15, shivers in a borrowed coat.
8 D SANTIAGO: Pod 17 is cold.
9 D ODALYS: Pod 17 is empty.
10 D MIRIAM: Then where is the occupant?
11 D PIXIE: Maybe he got up and left.
12 A ¶ Nobody laughs.
13 A Miriam lowers the scanner.
14 A Odalys stands slowly.
15 A Santiago taps the panel; the indicator blinks red.
16 D ODALYS: Open it.
17 D SANTIAGO: Ma'am --
18 D ODALYS: Open it.
19 A ¶ He presses the release.
* 20 A The capsule hisses.
* 21 A The lid lifts.
* 22 A Inside: a folded blanket, a child's drawing, a shut-off pulse monitor.
23 A ¶ Odalys picks up the drawing.
24 A Studies it.
25 A Her thumb smooths the paper's edge.
26 A Miriam steps closer, then stops.
27 A ¶ Pixie reaches for the monitor.
28 A Santiago catches her wrist, gently.
29 A She pulls away, embarrassed, and sits on the floor.
30 D ODALYS [CONT'D] (quiet): Seal it.
31 A ¶ Santiago closes the lid.
* 32 A The hiss fades.
33 A Miriam puts a hand on Odalys's shoulder.
34 A Odalys folds the drawing in half, then in half again, and slides it into her pocket.

### SCENE s01114 | INT. HOSPITAL STAIRWELL - LANDING BETWEEN FLOORS - 3 A.M.
Detected names (may be incomplete or contain aliases): ANSELMO KWAKU-REYNOLDS, OPERATOR
* 1 A ¶ Concrete steps.
* 2 A A humming exit sign.
* 3 A A window onto a dark parking structure.
* 4 A A vending machine glows at the landing.
5 A ¶ DR. ANSELMO KWAKU-REYNOLDS, 40s, scrubs, paper hat crumpled in his fist, sits on the steps with his head against the wall.
* 6 A A phone rests on his knee, speaker on.
7 D OPERATOR [V.O.] (distant, tired): Cardiology to Dr. Kwaku-Reynolds. Please call extension four-four-one-two.
8 D ANSELMO (to the phone): I'm on a break.
9 D OPERATOR [V.O.]: Doctor, they said it's urgent.
10 D ANSELMO: It's always urgent.
11 A ¶ He turns the phone face down on the step.
* 12 A The voice continues in muffled bursts.
13 A He lets it.
14 D ANSELMO [CONT'D] (to himself, steady): Forty-one patients on the unit. Three discharges at eight. Two transfers at noon. One bed that nobody gets until I sign off on a chart I haven't finished. And I'm sitting on a stair.
15 A ¶ He laughs, quietly.
16 A Wipes a hand over his face.
17 D ANSELMO [CONT'D]: When I was a student, an old attending told me: "A doctor is a man who fixes what he can and carries what he can't." I thought it was poetry.
* 18 A ¶ A pause.
* 19 A The vending machine hums.
20 D ANSELMO [CONT'D]: It's a weight limit.
21 A ¶ He stands, brushes off his scrubs, flattens the paper hat, puts it on.
22 A Picks up the phone.
23 D ANSELMO [CONT'D] (into the phone): This is Kwaku-Reynolds. Coming up.
24 D OPERATOR [V.O.]: Thank you, Doctor.
25 A ¶ He pockets the phone and climbs.

### SCENE s01115 | EXT. TREEHOUSE IN A SYCAMORE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): WINNIE, AUGUSTINE OKORO-BAKER, KIERAN PRZYBYLSKI-DIOP, LOTTE ABERNATHY-SATO
* 1 A ¶ A crooked platform nailed into the branches of an old sycamore.
* 2 A A rope ladder.
* 3 A A tin sign: NO PARENTS.
* 4 A Golden light slanting through leaves.
5 A ¶ WINIFRED "WINNIE" OKORO-BAKER, 12, sits cross-legged with a deck of cards.
6 A Her best friend, KIERAN PRZYBYLSKI-DIOP, 12, lies on his back chewing a grass blade.
7 A On the opposite branch, her older brother AUGUSTINE OKORO-BAKER, 16, strums a ukulele with the lazy patience of someone who isn't practicing.
8 A And in the lower fork, with legs dangling, sits a new neighbor, LOTTE ABERNATHY-SATO, 13, clutching a paper bag of licorice and watching all three with wide, uncertain eyes.
9 D WINNIE: Deal me in.
10 D KIERAN: You don't know how to play.
11 D WINNIE: I know enough.
12 D AUGUSTINE (strumming): She cheats.
13 D WINNIE: I do not!
14 D AUGUSTINE: ^She cheats.
15 D KIERAN (laughing): You both said it at the same time.
16 A ¶ Winnie throws a card at Augustine.
* 17 A It flutters off the platform and spins to the ground.
18 A Lotte leans down to follow its path, then straightens and offers the bag.
19 D LOTTE: Licorice?
20 D WINNIE (brightening): Yes. Black or red?
21 D LOTTE: Both.
22 A ¶ Kieran sits up.
23 A Winnie plucks a red strand.
24 A Augustine, still strumming, leans across to take a black one.
25 A Lotte smiles, relieved.
26 D KIERAN: You're the new one.
27 D LOTTE: Lotte.
28 D AUGUSTINE: Where'd you move from?
29 D LOTTE: Rotterdam.
30 D WINNIE: Where's that?
31 D LOTTE: Far.
32 A ¶ Kieran shuffles the deck.
33 A Winnie takes a card, glances at it, then slides it face down.
34 A Augustine's chords slow into something sweeter.
35 A Lotte tucks her knees up.
* 36 A A breeze lifts the sycamore leaves.
37 A ¶ The four of them sit in the green quiet.
* 38 A The ukulele hums.
* 39 A A card drifts down from somewhere above and lands in Lotte's lap.
40 A She looks at it, then at the others, and grins.

### SCENE s01116 | INT. VINEYARD CELLAR - BARREL ROOM - DUSK
Detected names (may be incomplete or contain aliases): IZABELLA ROMANO-OKAFOR, TEDDY, GALLOWAY, CAMILA ROMANO, HENRIK ABASI-LUND
* 1 A ¶ Oak barrels in rows.
* 2 A Candlelight.
* 3 A A tasting table with four glasses.
4 A ¶ IZABELLA ROMANO-OKAFOR, 30s, in a linen apron, pours.
5 A Across from her, THEODORE "TEDDY" GALLOWAY, 30s, her ex, swirls and sniffs.
6 A At the end of the table, her sister CAMILA ROMANO, 30s, in a sundress, studies him.
7 A And beside Camila, a quiet man, HENRIK ABASI-LUND, 40s, who has said nothing all evening.
8 A ¶ Teddy sips.
9 A Izabella watches.
10 A Camila watches Izabella.
11 A Henrik watches the wine.
12 D TEDDY: It's good.
13 D IZABELLA: It's better than good.
14 D TEDDY: It's... complex.
15 D CAMILA: He means it's sour.
16 D TEDDY: I do not.
17 D CAMILA: You do. Your nose wrinkles.
18 A ¶ Teddy touches his nose.
19 A Izabella suppresses a smile.
20 A Henrik takes a slow sip and sets down his glass.
21 D HENRIK: It's perfect.
22 A ¶ All three turn.
23 A He shrugs, unbothered.
24 D HENRIK [CONT'D]: I'm the one who sold her the grapes.
25 D IZABELLA (to Teddy): That's Henrik.
26 D TEDDY: I gathered.
27 D IZABELLA: And that's my fiance.
28 A ¶ Teddy's glass stops halfway to his mouth.
29 A Camila lowers her eyes.
30 A Henrik, calmly, takes Izabella's hand.
31 D TEDDY: ...Congratulations.
32 D IZABELLA: Thank you, Teddy.
33 A ¶ He drains the glass.
34 A Sets it down.
35 A Smooths his jacket.
36 A Camila slides the bottle toward him, tender.
37 D CAMILA: Another?
38 D TEDDY (a breath): Please.

### SCENE s01117 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): BABCIA, KOWALCZYK-EZE, FELIX DELACROIX-ADEYEMI
* 1 A ¶ A big scarred table.
* 2 A Copper pots on hooks.
* 3 A A wood stove ticking.
* 4 A Through the window, mist lies low over a field of frosted stubble.
5 A ¶ GRANDMOTHER AGNIESZKA "BABCIA" KOWALCZYK-EZE, 70s, in a faded housedress, stands at the stove stirring a pot of porridge.
6 A Her grandson FELIX DELACROIX-ADEYEMI, 11, sits at the table in pajamas, chin on his folded arms.
7 A He watches her back with the stubborn patience of a boy who has a question.
8 D FELIX: Babcia.
9 D BABCIA: Hm.
10 D FELIX: Why did Mama leave?
11 A ¶ Babcia's spoon stops.
12 A Resumes.
13 A She doesn't turn.
* 14 A Steam curls around her shoulders.
15 A She adds a pinch of salt, tastes, adds another.
16 D BABCIA: Eat first.
17 D FELIX: I'm not hungry.
18 D BABCIA: You will be.
19 A ¶ She ladles porridge into a chipped bowl.
20 A Brings it to the table.
21 A Sets it before him with a spoon.
22 A Smooths his hair with one flour-dusted hand.
23 A He leans into it, then catches himself and pulls away.
24 A She sits across from him with a groan, folds her hands.
25 D BABCIA [CONT'D]: Your mother wanted a different life.
26 D FELIX: Different from what?
27 D BABCIA: From this.
28 A ¶ She gestures at the kitchen, the stove, the window.
29 A Felix looks at each in turn.
30 A He picks up the spoon and stirs the porridge without eating.
31 D FELIX: Is it that bad?
32 D BABCIA: Not to me.
33 D FELIX: Is it bad to you?
34 D BABCIA (a long pause): No, Felix. It is not bad.
35 A ¶ He eats a bite.
36 A Then another.
37 A She watches.
* 38 A The stove ticks.
* 39 A A rooster crows somewhere in the mist.
40 D FELIX: Babcia?
41 D BABCIA: Yes, my little bird?
42 D FELIX: Will she come back?
43 A ¶ Babcia reaches across the table and covers his hand with her own.
44 A Her knuckles are swollen, her skin like old paper.
45 A He turns his palm up and holds on.
46 D BABCIA: Every spring the swallows go away, and every spring they return. Nobody tells them to. They only remember where the barn is.
47 D FELIX: That's not an answer.
48 D BABCIA: No. It isn't.
49 A ¶ She smiles, tired and tender.
50 A He smiles back, small.
* 51 A Outside, the mist begins to lift, and the first gold light touches the frost.

### SCENE s01118 | INT. LIGHTHOUSE KEEPER'S LOG ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR GWENDOLYN ADEBAYO-HARTWELL, HARBORMASTER
* 1 A ¶ Cramped.
* 2 A A circular desk.
* 3 A Ship's barometer, brass lamp, rows of leather-bound logbooks.
* 4 A Fog presses on the window.
* 5 A The foghorn sounds every ninety seconds.
6 A ¶ INSPECTOR GWENDOLYN ADEBAYO-HARTWELL, 50s, oilskin coat dripping on the planks, sits at the desk with a lamp and a stack of logbooks.
7 A She flips pages with a gloved hand, jots notes in a pocket pad, taps a pen against her teeth.
* 8 A The foghorn sounds.
9 A She does not flinch.
10 D GWENDOLYN (to the room): October ninth. "Light functioning. Visibility poor." October tenth. "Light functioning. Visibility poor." October eleventh.
11 A ¶ She stops.
12 A Runs a finger over the ink.
13 D GWENDOLYN [CONT'D]: "Light functioning. Visibility poor. Mr. Pellew did not return."
14 A ¶ She flips back.
15 A Forward.
16 A Back again.
17 D GWENDOLYN [CONT'D]: Three entries, same handwriting. Same ink. Same hour. But the first two were written by a man who is alive, and the third by a man who isn't.
18 A ¶ She lifts the lamp and holds the page to the flame.
* 19 A Behind the ink, faint, a second line shows through, written in a different hand and scratched out.
20 D GWENDOLYN [CONT'D] (reading, softly): "He did not fall."
* 21 A ¶ Her radio crackles on the desk.
22 A She snatches it up.
23 D HARBORMASTER [V.O.] (over the radio): Inspector? You got anything yet?
24 D GWENDOLYN: I have a log that lies, Harbormaster. And a keeper who's missing.
25 D HARBORMASTER [V.O.]: Pellew's boat washed up on the rocks. Empty.
26 D GWENDOLYN: Was the lamp lit?
27 D HARBORMASTER [V.O.]: Aye. All night.
28 D GWENDOLYN: Who lit it?
29 D HARBORMASTER [V.O.]: You tell me, Inspector. You're the one in the tower.
30 A ¶ She sets the radio down.
* 31 A The foghorn sounds.
* 32 A A floorboard above her creaks.
33 A She looks at the ceiling, at the spiral stair, and then at the pen in her hand.
34 A ¶ She rises, slips the log into her coat, and climbs.

### SCENE s01119_0 | INT. CORSET MAKER'S SHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MADAME CLEMENTINE ROUSSEAU-ADEYEMI
* 1 A ¶ 1893.
* 2 A A single gas lamp.
* 3 A Bolts of silk.
* 4 A Whalebone stays arranged by length.
* 5 A A mannequin in half-finished brocade.
6 A ¶ MADAME CLEMENTINE ROUSSEAU-ADEYEMI, 50s, pins fabric to the mannequin by lamplight.
* 7 A The shop bell rings in the front.
8 A She sighs, sets down her pins, and goes through the curtain.

### SCENE s01119_1 | INT. CORSET MAKER'S SHOP - FRONT ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): FIGURE, CLEMENTINE, AMBROSE
1 A ¶ A FIGURE stands inside the door, hat low, collar up, rain pooling on the boards.
2 A They hold a parcel wrapped in oilcloth.
3 D FIGURE: Madame Rousseau?
4 D CLEMENTINE: We are closed.
5 D FIGURE: I know. I knocked at the back.
6 D CLEMENTINE: Nobody knocks at the back.
7 D FIGURE: I did.
8 A ¶ She studies the Figure.
9 A The stance is wary.
10 A The voice is low, uncertain of its register.
11 D CLEMENTINE: What do you want?
12 D FIGURE: A fitting.
13 D CLEMENTINE: At this hour?
14 D FIGURE: I could not come in daylight.
15 A ¶ Clementine's brow furrows.
16 A She looks at the parcel.
17 A The Figure steps forward, unwraps it, lifts out a gentleman's frock coat, torn at the seam.
18 D FIGURE [CONT'D]: My brother's. He died on the fourteenth. I'd like it altered.
19 D CLEMENTINE: For whom?
20 D FIGURE: For me.
* 21 A ¶ A long silence.
* 22 A The gas lamp hisses.
23 A Clementine takes a step closer.
24 A Her expression softens.
25 D CLEMENTINE: You will not need a corset, then.
26 D FIGURE (a small, relieved breath): No. Only a good tailor.
27 D CLEMENTINE: Then you came to the wrong shop.
28 D FIGURE: Forgive me.
29 D CLEMENTINE: No, no. You came to the right one. I am not a tailor. But I know three.
30 A ¶ She takes the coat gently.
31 A Runs her thumb over the torn seam.
32 D CLEMENTINE [CONT'D]: What is your name?
33 D FIGURE (after a beat): Ambrose.
34 D CLEMENTINE: Ambrose what?
35 D AMBROSE: Ambrose Whitlock. For now.
36 D CLEMENTINE: For now is enough. Sit, Monsieur Whitlock. I will make some tea.

### SCENE s01120 | INT. TAXIDERMY SHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS REYES, BRAM, PIP, OLD HOSEA
* 1 A ¶ A cramped workroom lit by one hanging bulb.
* 2 A Glass eyes in trays, a half-skinned fox on the table, a dead radiator ticking.
3 A ¶ ODALYS REYES (50s, heavy apron, reading glasses on a cord) sews the fox's belly.
4 A Her son BRAM (20s, thin, jittery, car keys in his fist) stands in the doorway.
5 A PIP (15, braids, school hoodie) sits on a stool sorting glass eyes.
6 A OLD HOSEA (80s, wool cap, cane) waits with a shoebox on his knees.
7 D BRAM: Ma, the bank called again.
8 D ODALYS: Not in front of customers.
9 D BRAM: He's not a customer, he's Hosea. He's been sitting there an hour.
10 D HOSEA: Forty minutes. I'm timing it.
11 D ODALYS: Bram, put the keys down.
12 D BRAM: Where's the money, Ma? Where's the deposit from the Hendry job?
13 A ¶ Odalys stops sewing.
14 A Pip stops sorting.
15 D PIP: Uncle Bram, don't.
16 D BRAM: Stay out of it, Pipsqueak.
17 D ODALYS: I paid the freezer man. I paid your tuition. You want to see the receipts, you ask me nicely.
18 D BRAM: I'm asking!
19 A ¶ He slams the keys on the table.
* 20 A The fox jumps.
* 21 A Glass eyes scatter across the floor.
22 A Pip dives after them.
23 A Hosea lifts his cane in front of his shoebox like a shield.
24 D ODALYS: Look what you did.
25 A ¶ Odalys and Bram both go for the same falling tray.
26 A Their hands collide.
27 A Both freeze, nose to nose.
28 D BRAM (quietly): I lost the Hendry money, Ma. At the track. All of it.
* 29 A ¶ Silence.
* 30 A The radiator ticks.
31 A Pip, on her knees, holds up a single blue glass eye.
32 D PIP: Found one.
33 A ¶ Odalys lets out a long breath.
34 A She takes the eye from Pip and sets it in the fox's socket.
35 D ODALYS: Pick up the rest, Bram. Every one.
36 A ¶ Bram kneels.
37 A Hosea sets his shoebox on the table and lifts the lid.
* 38 A Inside, a small stiff canary.
39 D HOSEA: Whenever you two are done. Her name was Dolores.
40 D ODALYS (gently): Bring her here, Hosea.

### SCENE s01121 | INT. LIGHTHOUSE LAMP ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HARLAN VOSS, NELL STRAND, DOYLE
* 1 A ¶ A glass cage at the top of a hundred iron steps.
* 2 A The great lens turns, throwing slow white blades across a storm-black sea.
* 3 A Rain hammers the panes.
4 A ¶ HARLAN VOSS (50s, rumpled trench coat, a gambler's patient eyes) lowers himself through the floor hatch, breathing hard.
5 A Across the lens stands NELL STRAND (30s, sharp, soaked, a revolver steady in both hands).
6 D NELL: That's far enough, Mr. Voss.
7 D VOSS: You've been a long climb, Miss Strand.
* 8 A ¶ The beam sweeps over them.
9 A In the flash, a third figure: DOYLE (40s, keeper's oilskins, face cut and bloody) crouched behind the lamp mechanism, a flare gun in his fist.
10 D DOYLE: Both of you, drop it. I swear I'll burn this tower down.
11 A ¶ Nell swings her gun toward Doyle.
12 A Voss lunges for Nell.
13 A The three of them freeze as the beam passes, then the light goes out.
* 14 A ¶ DARKNESS.
* 15 A A scuffle, a gunshot, glass shattering.
* 16 A ¶ The lamp grinds back to life.
17 A Nell has Doyle's arm twisted behind him.
18 A Voss holds the revolver, aimed at neither of them.
19 D VOSS: Now. Who wants to tell me where the ledger is?
20 A ¶ Doyle laughs, breathless, and nods at the sea.
21 D DOYLE: Eighty feet down. Good luck.

### SCENE s01122 | INT. DRAINED SWIMMING POOL - TABLE TENNIS HALL - DAY
Detected names (may be incomplete or contain aliases): DEZ OKAFOR, LIN HUA, GRANDPA TSUBASA, REFEREE BARNABY, ^LIN
* 1 A ¶ A municipal pool, long since emptied, its blue tiles chipped to the colour of old teeth.
* 2 A Two green tables stand in the deep end where the water once was.
* 3 A Dust turns in a shaft of light from a skylight.
4 A ¶ DEZ OKAFOR (late 20s, loose-limbed, a towel around his neck) bounces the little white ball on his paddle, humming.
5 A Across the table, LIN HUA (teens, tight ponytail, fierce eyes) waits, perfectly still.
6 A In the shallow end bleachers, GRANDPA TSUBASA (80s, folded in a cardigan) eats tangerine segments.
7 A At the net post, REFEREE BARNABY (60s, clipboard, whistle) checks his watch with a priest's solemnity.
8 D BARNABY: Match point, Lin. Take your time.
9 D DEZ: Lin, nobody's rushing you. We could be at a picnic.
10 D LIN: Don't talk to me like I'm eight, Dez.
11 D DEZ: Wouldn't dream of it.
12 A ¶ He serves, soft and lazy.
13 A Lin returns it just as soft.
14 A The rally floats back and forth, almost tender, ball ticking in the quiet like a slow clock.
15 D TSUBASA: Easy, Lin-chan. Easy.
16 D DEZ (over the ball): Your grandfather's a good coach.
17 D LIN (at the same time): Why are you letting me win?
18 D DEZ (at the same time, softer): I'm not letting you.
19 D ^LIN: You are. You've dropped four easy balls in a row.
20 A ¶ Dez mishits on purpose.
* 21 A The ball skitters into the deep corner.
* 22 A The hall holds its breath.
23 A ¶ Barnaby lowers his clipboard and looks, very slowly, at Tsubasa.
24 A The old man stops chewing.
25 D TSUBASA: Barnaby. Tell her about the envelope.

### SCENE s01123 | INT. ROLLER RINK - DJ BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, TEO, PHONE, RAQUEL, LINDQVIST, ^JUNE, ^TEO
* 1 A ¶ Disco ball turning, colored lights sliding across empty hardwood.
* 2 A The rink is closed; the booth is a cluttered box of turntables and cables.
3 A ¶ JUNE (16, braids, rink-staff polo shirt) sits at the mixer wearing headphones around her neck.
4 A TEO (17, skinny, backpack on both shoulders) leans in the doorway, holding a paper bag.
5 D TEO: You said ten o'clock.
6 D JUNE: It's ten-oh-four.
7 D TEO: I ran here.
8 D JUNE: You walked. I watched you from the window.
9 A ¶ Teo grins and hands her the bag.
10 A June pulls out a cassette tape in a cracked case.
11 D JUNE [CONT'D]: Is this it?
12 D TEO: My dad's mix. Nineteen eighty-four. He made it for my mom.
13 D JUNE: And you want me to play it on the rink system.
14 D TEO: Just once. Before they tear the place down.
15 A ¶ June looks out at the empty floor, then back at the tape.
* 16 A A PHONE on the desk buzzes.
17 A She answers it, thumbing the speaker.
18 D RAQUEL [V.O.] (through the phone): Junebug, where are you? Mom's been calling the house for an hour.
19 D JUNE: Work, Raquel. I told you.
20 D RAQUEL [V.O.]: It's a school night. Come home.
21 D JUNE: Five more minutes.
22 D RAQUEL [V.O.]: Who's there with you?
23 A ¶ June clamps her hand over the phone.
24 A Teo shakes his head, mouthing, no. June hangs up.
25 D JUNE [CONT'D]: She'll tell Mom.
26 D TEO: Then play it fast.
27 A ¶ June slides the tape into the deck.
* 28 A A fat bassline wobbles out, warped by age.
29 A They stand there, listening to a dead man's song fill the hall.
30 D TEO [CONT'D]: That's him humming.
31 D JUNE: That's the best part.
* 32 A ¶ The booth light snaps on.
33 A MR. LINDQVIST (60s, bathrobe over his work clothes, a flashlight) fills the doorway.
34 D LINDQVIST: Who authorized this?
35 D JUNE: I did!
36 D TEO: I did!
37 D ^JUNE (talking over him): It was my idea, sir!
38 D ^TEO (talking over her): She had nothing to do with it!
39 D LINDQVIST: Turn it off.
40 A ¶ June reaches for the stop button.
41 A Lindqvist's hand clamps on hers.
42 D LINDQVIST [CONT'D]: No. Not off. Turn it up.
43 A ¶ He sets his flashlight down and sits heavily on a stool.
* 44 A The bassline swells.
* 45 A Outside the booth, the disco ball keeps turning.

### SCENE s01124 | INT. CHURCH BASEMENT - BINGO NIGHT - EVENING
Detected names (may be incomplete or contain aliases): WILHELMINA OKAFOR-DUNN, DOV KESSLER, ANSELM PRICE, CANDACE LOWE, RUTENDO MOYO
* 1 A ¶ A low room of folding tables and fluorescent tubes.
* 2 A Cards, daubers, a coffee urn.
* 3 A A raffle drum sits on a stage made of risers.
* 4 A Above it hangs a banner: ST. ANSELM'S ROOF FUND.
5 A ¶ WILHELMINA OKAFOR-DUNN (70s, church-lady hat, a ring of keys) holds the microphone.
6 A DOV KESSLER (60s, cardigan, the treasurer, anxious hands) counts bills at the cash table.
7 A ANSELM PRICE (40s, big man, usher's lanyard) stacks chairs by the wall.
8 A CANDACE LOWE (30s, nurse's scrubs under a coat, new in the parish) sits alone with a single card.
9 A RUTENDO MOYO (20s, sharp, laptop bag, a visitor from the diocese) stands at the stairs, watching them all.
10 D WILHELMINA: Good evening, everyone. Welcome. We'll begin in two minutes.
11 A ¶ Dov glances up at Rutendo, then down at his cash again.
12 D DOV (to himself): Four hundred. Four hundred and ten.
13 D RUTENDO: Mr. Kessler, I'd like to see the ledger before the draw.
14 D DOV: It's bingo night. The books are in the office.
15 D RUTENDO: Then let's go to the office.
16 D DOV: After the game.
17 A ¶ Wilhelmina lowers the mic.
18 D WILHELMINA: Dov, is there a problem?
19 D DOV: No problem, Willie.
20 D ANSELM (to the room): Folks, take your seats, please. We're starting soon.
21 A ¶ Candace moves to a different table, nearer the stairs.
22 A Rutendo notices.
23 D RUTENDO: You're new, aren't you?
24 D CANDACE: Three months.
25 D RUTENDO: Why bingo?
26 D CANDACE: It's quiet. I work nights. Sometimes I need quiet.
27 A ¶ Dov stuffs the cash into a metal box and locks it.
28 A His hands are shaking.
29 D RUTENDO: Mr. Kessler. The ledger.
30 D DOV (louder): I said after the game!
31 A ¶ Heads turn.
* 32 A The urn hisses.
33 A Wilhelmina steps off the riser, keys jingling.
34 D WILHELMINA: Dov Kessler. Look at me.
35 D DOV: Willie, don't.
36 D WILHELMINA: I have known you thirty-one years. Look at me.
37 A ¶ Dov looks.
38 A His face crumples.
39 D DOV (barely audible): The roof isn't getting fixed.
40 D ANSELM: What did he say?
41 D WILHELMINA (to Anselm, flat): Sit down.
42 D ANSELM: Wilhelmina, what did he say?
43 D WILHELMINA: He said the roof isn't getting fixed.
* 44 A ¶ A long silence.
45 A Candace puts down her dauber.
46 D CANDACE (to the room): How much?
47 D DOV: Eleven thousand. Over two years.
48 D ANSELM (to himself, muttering): Eleven thousand. Eleven thousand dollars.
49 D RUTENDO: Where did it go, Mr. Kessler?
50 D DOV: My wife's treatments. The insurance wouldn't...
51 A ¶ He can't finish.
52 A Wilhelmina takes the metal box from the table and holds it against her chest.
53 D WILHELMINA (to everyone): Nobody leaves. Nobody calls anyone. We are going to have this out like a family.
54 D ANSELM (rising, loud): Family? He stole from us!
55 D CANDACE: Anselm, sit.
56 D ANSELM: Don't tell me what to do. You've been here ninety days.
57 D CANDACE: I've been here long enough to know a man in trouble when I see one.
58 D ANSELM: He lied to every person in this room!
59 D DOV (weeping): I know. I know I did.
60 D RUTENDO (to Wilhelmina): Mrs. Okafor-Dunn, I have a report due to the bishop.
61 D WILHELMINA: Then write that the church of St. Anselm found its own answer.
62 D RUTENDO: What answer?
63 A ¶ Wilhelmina walks to the riser, sets the cash box on the raffle drum and opens it.
64 A She takes out the whole stack of bills and holds it up.
65 D WILHELMINA (to the crowd): Tonight's pot goes to Dov's wife. All of it.
66 D ANSELM: That's the roof money!
67 D WILHELMINA: The roof can leak another winter. Dov can't.
68 A ¶ Anselm opens his mouth.
69 A Closes it.
70 A He drags his hand down his face.
71 D ANSELM (to himself): Lord, give me patience.
72 A ¶ He walks to the cash table, pulls out his wallet, and drops two twenties on the pile.
73 D ANSELM [CONT'D]: That's mine.
74 D CANDACE (softly): Mine too.
75 A ¶ She adds a ten.
76 A Rutendo stares at them.
77 A Then, with a long breath, she closes her laptop bag.
78 D RUTENDO: My report will say the ledger was in order.
79 A ¶ Dov covers his face.
80 A Wilhelmina lifts the microphone.
81 D WILHELMINA: B-seven. B, seven.
* 82 A ¶ The room breathes.
83 A Daubers lift.
84 A Dov sits, shoulders shaking, as the first ball rattles in the drum.
