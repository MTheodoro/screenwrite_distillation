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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0012.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01088 | EXT. MANGROVE SWAMP - TIDAL FLAT - DAWN
Detected names (may be incomplete or contain aliases): BEE, CALLOWAY, BRAM OKONJO, CAPTAIN HALVARD SKOGLUND
* 1 A ¶ Roots like fingers.
* 2 A Grey mud.
* 3 A A capsized skiff on its side.
* 4 A Mosquitos in clouds.
5 A ¶ BIANCA "BEE" CALLOWAY, 30s, torn shirt, drags a water jug through the mud.
6 A BRAM OKONJO, 40s, one boot missing, limps behind her.
7 A Between them, a bundled shape on a stretcher of branches: CAPTAIN HALVARD SKOGLUND, 60s, eyes closed.
* 8 D BEE: Bram. Pull.
* 9 D BRAM: I'm pulling.
* 10 D BEE: You're limping.
* 11 D BRAM: I'm limping and pulling.
12 A ¶ She stops.
13 A Wipes her face.
14 A Squats by the captain.
15 A Puts two fingers at his neck.
* 16 D BEE: Cap. Cap, you in there?
17 A ¶ He stirs.
18 A Mumbles.
19 A Doesn't wake.
* 20 D BRAM: Tide's turning.
* 21 D BEE: I can see.
* 22 D BRAM: We have maybe ten minutes before the flat goes under.
23 A ¶ She stands.
24 A Looks at the skiff.
25 A Looks at the horizon where a thin line of silver crawls toward them.
* 26 D BEE: Leave the jug.
* 27 D BRAM: That's our water.
* 28 D BEE: And that's his life. Choose.
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
* 39 D BEE [CONT'D]: Bram!
* 40 D BRAM: Go on without me.
* 41 D BEE: Not a chance.
42 A ¶ She sets the stretcher down.
43 A Hauls him up by the belt.
44 A He leans on her.
45 A Their breath rasps.
* 46 D BRAM: Bee. If I --
* 47 D BEE: You're not going to.
* 48 D BRAM: If I do.
* 49 D BEE: Don't.
* 50 A ¶ The silver line is closer.
* 51 A The mud begins to glisten.
* 52 A A bird shrieks from the roots.
* 53 D CAPTAIN HALVARD (eyes still shut): Boys. Girls. Hold your horses.
* 54 D BEE: Cap!
* 55 D CAPTAIN HALVARD: I can walk.
* 56 D BRAM: You can't.
57 D CAPTAIN HALVARD: I can crawl. Let me.
58 A ¶ He pushes himself off the stretcher.
59 A Falls to hands and knees.
60 A Starts to crawl.
61 A Bee and Bram watch him go, mud to the elbows.
* 62 D BEE (quiet): Stubborn old man.
* 63 D BRAM: He taught us.
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
* 11 D SIOBHAN: Corporal. Anything?
* 12 D TEDDY: Static, Major.
* 13 D SIOBHAN: Try the other band.
14 A ¶ He turns the dial.
* 15 A A voice comes through, clipped and tired.
* 16 D RADIO [V.O.]: ...say again, Dagger Six, this is Hammer. Enemy withdrawing along the river road. All units hold.
17 A ¶ Siobhan looks up.
18 A So does Mikhail.
19 A Rosalind stills with the IV bag in her hand.
* 20 D MIKHAIL: They're withdrawing?
* 21 D TEDDY: That's what it says.
* 22 D ROSALIND: Then it's over?
* 23 D SIOBHAN: It's over tonight. Not tomorrow.
24 A ¶ She closes the ledger.
25 A Stands.
26 A Wipes her palms on her apron.
27 A Crosses to Oswin's cot, checks his pulse.
28 A Nods.
29 A Draws the blanket up.
* 30 D ROSALIND: He'll make it?
* 31 D SIOBHAN: If he sleeps.
32 A ¶ Mikhail rolls his shoulder, winces, tests the bandage.
33 A Rosalind sets down the IV and crosses to him, unwraps the dressing, checks the wound.
34 A He grimaces.
35 A Teddy turns the volume up, trying for another voice.
* 36 D MIKHAIL: How is it?
* 37 D ROSALIND: Clean. You'll keep the arm.
* 38 D MIKHAIL: That is good. I like the arm.
* 39 D ROSALIND (dry): So does your wife, I imagine.
* 40 D MIKHAIL: She likes the other one more.
41 A ¶ They laugh, quietly, careful of the sleepers.
* 42 A The laugh dies.
* 43 A The church holds its breath.
44 A Siobhan walks down the aisle between the cots, letting her hand trail along the pews.
* 45 D RADIO [V.O.]: Dagger Six, copy that. Ceasefire at oh-six-hundred. Repeat, ceasefire at oh-six-hundred.
* 46 D TEDDY (whispering): Ma'am. Ceasefire. Six a.m.
* 47 D SIOBHAN (not turning): Thank you, Corporal.
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
* 60 D SIOBHAN [CONT'D] (to the room): Everyone rest. I'll take first watch.
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
7 A Dust on her shoes.
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
* 19 D THEO: You're on the Dunnings' side.
* 20 D NELL: Is there a side?
21 A ¶ He shrugs.
22 A Scuffs a pear into the grass with his toe.
23 A She watches the movement and then the dirt.
* 24 D THEO: They said you left.
* 25 D NELL: They said a lot.
26 A ¶ He nods slowly.
27 A She offers him a pear without looking up.
28 A He crosses, takes it, sits a careful distance away.
29 A They eat in silence.
* 30 A A wasp circles his hand.
31 A He lets it.
* 32 D THEO: My brother's gone. Since June.
33 A ¶ She says nothing.
34 A Turns the dial on the radio.
* 35 A Static swells, then a thin fragment of a song.
36 A She holds still, listening.
37 A He leans in a little.
* 38 A The song fades.
* 39 D THEO [CONT'D]: That was a good one.
* 40 D NELL: It always is. Then it goes.
41 A ¶ He half-smiles.
42 A She turns the dial again.
* 43 A Nothing.
44 A She sets the radio on the grass between them.
* 45 A ¶ A screen door bangs somewhere beyond the trees.
* 46 A A woman's voice calls a name that is not hers.
47 A Nell's shoulders rise.
48 A Theo watches them rise.
* 49 D THEO [CONT'D]: That's for you?
* 50 D NELL: That's for a girl I was.
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
* 9 D IRINA (whispering): Eyes on the target?
* 10 D KOFI: Northeast pillar. He's moving.
* 11 D COURIER (calling out): That's far enough!
12 A ¶ Irina and Kofi freeze.
13 A Hayes squeezes his eyes shut.
* 14 D COURIER [CONT'D]: Drop the weapons. Both of you.
* 15 D KOFI (raising his voice): We can talk about this.
* 16 D COURIER: We're talking now.
* 17 D IRINA (whispering to Kofi): Left. On three.
* 18 D KOFI (barely moving his lips): He's too close to Hayes.
* 19 D IRINA: Then we make him move.
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
* 31 D COURIER [CONT'D] (snarling): You don't understand!
* 32 D IRINA (pinning his arm): Then explain it.
33 A ¶ He heaves.
34 A She holds.
35 A Kofi seizes the loose gun, trains it on the Courier.
* 36 D KOFI: Down. Now.
37 A ¶ The Courier stills.
38 A His chest rises and falls.
39 A He lets his hand go slack.
40 A Irina kneels on his back and cuffs him.
41 A ¶ Hayes crawls out from under the bumper, tape half-peeled.
42 A Kofi cuts his zip ties.
43 A Hayes gasps.
* 44 D HAYES (coughing): He said they were coming for me.
* 45 D KOFI: Who?
* 46 D HAYES: The Directorate. He wasn't one of them. He was warning me.
47 A ¶ Irina looks at the Courier.
48 A His face is turned against the concrete, eyes wet.
* 49 D IRINA (quietly): Is that true?
* 50 D COURIER (muffled): They'll be here in four minutes.
51 A ¶ Kofi checks his watch.
52 A Irina hauls the Courier up.
* 53 D KOFI: Move.
54 A ¶ They run for the stairwell, the Courier between them, Hayes limping behind.
* 55 A Footsteps echo.
* 56 A Somewhere above, tires screech down a ramp.
* 57 D IRINA (over her shoulder): Level two exit! Go!
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
* 9 D HESTER (to the room): Tide's slack at six-fifteen.
* 10 D PASCAL (to his hand): I know.
* 11 D HESTER (to no one): Wind from the west. Light.
* 12 D PASCAL: I read the board.
13 A ¶ She sips from the thermos.
14 A He bites the end of the tape.
* 15 A The kettle begins to whistle.
16 A Neither moves.
17 A Hester sighs and rises, pulls the kettle off the hotplate, pours two mugs.
18 A ¶ She sets one on the bench beside him.
19 A He doesn't take it.
20 A She sits again.
* 21 D HESTER: Sixteen minutes on the water. Then back. Then breakfast.
* 22 D PASCAL: Fine.
* 23 D HESTER: Don't "fine" me.
* 24 D PASCAL: Okay, then.
* 25 D HESTER: Okay is worse.
26 A ¶ He smiles faintly.
27 A Takes the mug.
28 A Warms his hands on it.
* 29 A Mist drifts in through a crack in the doorframe.
* 30 D HESTER [CONT'D] (to the room again): Anyone else coming?
* 31 D PASCAL: You know no one's coming.
* 32 D HESTER (muttering): I know.
33 A ¶ Pascal sips.
34 A Looks at the shells overhead.
35 A His eyes trace the hull of an eight, then of a single.
* 36 D PASCAL: Remember when we filled this place?
* 37 D HESTER: We had fourteen on the squad. And a cox who ate her megaphone.
* 38 D PASCAL (smiling): Camille.
* 39 D HESTER: Camille. Yes.
* 40 A ¶ Quiet.
* 41 A The water slaps.
* 42 A A gull cries.
* 43 D PASCAL: Coach.
* 44 D HESTER: Hm?
* 45 D PASCAL: If I miss the cut --
* 46 D HESTER: You won't.
* 47 D PASCAL: But if.
48 A ¶ She turns the stopwatch over in her hand.
49 A Reads the back, where someone long ago scratched initials.
* 50 D HESTER: Then we row anyway.
51 A ¶ He nods.
52 A Finishes his tea.
53 A Sets the mug on the bench and stands.
54 A Pulls on his gloves.
55 A She stands too.
56 A Together they lift a single shell from its cradle.
* 57 A It swings, light as a leaf.
* 58 D HESTER [CONT'D] (to the room): Mind the door.
* 59 D PASCAL (to the boat): Easy.
60 A ¶ They carry it out toward the dock, the mist closing behind.

### SCENE s01093 | INT. DRIVE-IN PROJECTION BOOTH - TWILIGHT
Detected names (may be incomplete or contain aliases): PEGGY LOUISE WALDROP, TUCKER WALDROP, ABERNATHY
* 1 A ¶ A cramped booth over an empty lot.
* 2 A Film canisters.
* 3 A A coffee can of cigarette butts.
* 4 A Through the small window, rows of silent cars waiting in the dusk.
5 A ¶ PEGGY LOUISE WALDROP, 17, in a pressed uniform, threads a reel with practiced fingers while her younger brother TUCKER WALDROP, 12, sits on a stool kicking his heels, a comic book on his knee.
6 A Between them, MR. ABERNATHY, 60s, the theater owner, in a short-sleeved shirt and bow tie, checks his pocket watch, taps the projector's housing, and sets a thermos by the door.
* 7 D MR. ABERNATHY: Seven forty. Start her at eight sharp.
* 8 D PEGGY: Yes, sir.
* 9 D MR. ABERNATHY: And Peggy, no repeats of last week.
* 10 D PEGGY: It wasn't my fault, sir. The reel was upside down.
* 11 D MR. ABERNATHY: Mm.
12 A ¶ He nods, pats Tucker on the head, and leaves.
13 A His footsteps fade down the iron stairs.
14 A Tucker turns a page.
15 A Peggy finishes lacing the film and flips a switch.
* 16 A The lamp hums warm.
* 17 D TUCKER: Is he gone?
* 18 D PEGGY: He's gone.
* 19 D TUCKER: Good.
20 A ¶ He slides the comic book aside and pulls a rumpled envelope from his shirt.
21 A Hands it up without looking at her.
22 A Peggy takes it.
23 A Turns it over.
* 24 A Her name in his careful block capitals.
* 25 D PEGGY: What's this?
* 26 D TUCKER: Open it.
27 A ¶ She does.
* 28 A Inside, a ticket stub and a folded strip of paper.
29 A She unfolds it.
30 A Her breath catches.
* 31 D TUCKER [CONT'D]: They called the house. About the scholarship.
* 32 D PEGGY: Tucker.
* 33 D TUCKER: You got in.
34 A ¶ She sits down hard on the other stool.
35 A Reads the strip again.
36 A Her thumb pauses over the signature at the bottom.
* 37 A ¶ Down in the lot, the cars dim their lights.
* 38 A A horn toots, impatient.
39 A Tucker watches her face.
* 40 D PEGGY (quietly): Don't tell Dad.
* 41 D TUCKER: He already knows.
* 42 D PEGGY: What?
* 43 D TUCKER: He read it first. Then he put it back.
44 A ¶ She stares at him.
45 A Then at the window, where the first car's headlights flick on and off in a signal.
46 A She wipes her eyes with the back of her wrist.
47 A Stands.
48 A Presses the switch.
* 49 A ¶ The projector clatters to life.
* 50 A A beam cuts across the lot and lands on the screen: a bright gold title card.
* 51 D PEGGY [CONT'D] (not looking at him): Hand me the next reel.
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
* 9 D HELENA (muffled by the flashlight): There you are.
10 A ¶ She takes the flashlight from her mouth.
11 A Unwraps the journal.
12 A Opens it to the first page.
13 A Reads in a whisper.
* 14 D HELENA [CONT'D]: "If you are reading this, I have already gone to see what the telescope shows after midnight."
15 A ¶ She turns a page.
* 16 A A hand-drawn sketch of the sky.
* 17 A Beside one star, a small red circle and the word NO.
* 18 D HELENA [CONT'D]: No what?
* 19 A ¶ Her phone buzzes in her pocket.
20 A She answers.
* 21 D DETECTIVE GRANT [V.O.] (over the phone): Helena, where are you?
* 22 D HELENA: Following the lead.
* 23 D DETECTIVE GRANT [V.O.]: At the observatory? I told you to wait for backup.
* 24 D HELENA: Backup is slow. The journal is here.
* 25 D DETECTIVE GRANT [V.O.]: Don't touch anything. We think Warrick didn't die alone.
* 26 D HELENA (shining the light across the floor): I'm not alone either.
* 27 A ¶ Footprints in the dust.
* 28 A Not hers.
* 29 A Wide, deliberate.
* 30 A They lead to the stairwell.
* 31 D DETECTIVE GRANT [V.O.]: Helena, did you hear me?
* 32 D HELENA: Stay on the line.
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
* 44 D TALL MAN: You found it before I did.
* 45 D HELENA (steady): You're Warrick's partner.
* 46 D TALL MAN: I was his student.
* 47 D HELENA: Did you kill him?
* 48 D TALL MAN (a pause): I closed the shutter. He opened it.
49 A ¶ Helena raises the journal.
50 A The Tall Man's eyes follow it.
* 51 D HELENA: Then tell me what the star is.
* 52 D TALL MAN: You already know.
* 53 D HELENA: Say it.
* 54 D DETECTIVE GRANT [V.O.] (tinny, from the telescope): Helena! Who are you talking to?
55 A ¶ The Tall Man glances at the phone.
56 A Then back at her.
57 A He lifts the key.
* 58 A Behind him, the dome's great shutter groans and begins to close, cutting the stars off one slice at a time.
* 59 D HELENA (shouting): Grant! Now!
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
11 A Nobody watches it go.
* 12 D AUGUSTINE: Ma'am.
13 A ¶ Abigail doesn't turn.
14 A She sets the shovel against the fence.
15 A Dusts her palms on her skirt.
16 A One at a time.
* 17 D AUGUSTINE [CONT'D]: He'd have wanted a preacher.
* 18 D ABIGAIL: He'd have wanted his horse.
19 A ¶ Augustine nods.
20 A Looks at the cross.
21 A Looks at the boy.
22 A Jeremiah lifts a handful of dry grass for the goat.
* 23 D AUGUSTINE: I'll see to the horse.
* 24 D ABIGAIL: Don't trouble yourself.
* 25 D AUGUSTINE: No trouble.
26 A ¶ She takes the hat from his hands and sets it on the cross.
* 27 A The brim catches the wind.
28 A She weights it with a stone.
* 29 D ABIGAIL: That's his now.
30 A ¶ Augustine opens his mouth.
31 A Closes it.
32 A Pulls a folded paper from his vest and holds it out.
33 A She doesn't take it.
* 34 D ABIGAIL [CONT'D]: Read it to him.
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
* 7 D INEZ (whispering): Everybody quiet.
8 A ¶ She raises a fist.
9 A They halt.
10 A Dorothea clamps a hand over her headset mic.
11 A Tomasz and Augusto set the toolbox down so slowly it makes no sound.
12 A Barnabas draws his sidearm and holds it at his chest.
* 13 D DOROTHEA (to Inez): Overture starts in four minutes.
* 14 D INEZ: Then we have four.
15 A ¶ She steps forward.
* 16 A The planks creak.
17 A The figure at the end stiffens.
* 18 A A hush falls over the orchestra pit below.
* 19 D FIGURE (without turning): I wouldn't come closer.
* 20 D INEZ: Put the case down.
* 21 D FIGURE: It's not a case. It's a promise.
22 A ¶ Barnabas swallows.
23 A Augusto crosses himself.
24 A Tomasz mutters something in Polish.
* 25 D TOMASZ (muttering): Boze, nie teraz.
* 26 D DOROTHEA (to the group): Does anyone know where the cut-off is for the chandelier cable?
* 27 D AUGUSTO: Stage left. Behind the fly rail.
* 28 D DOROTHEA: Go. Quietly.
29 A ¶ Augusto slips away.
30 A Inez keeps her eyes on the Figure.
* 31 D INEZ: You don't have to do this.
* 32 D FIGURE: Everyone says that.
* 33 D INEZ: Because it's true.
34 A ¶ The Figure turns.
35 A A woman, 50s, in evening dress and tennis shoes.
36 A VIOLETTA SANTORO-REYES, ex-soprano.
37 A Her face is wet.
* 38 A In her lap, the briefcase hums.
* 39 D VIOLETTA: They fired me in this house. I sang four hundred nights.
* 40 D INEZ: I know.
* 41 D VIOLETTA: Do you? Do you know what silence sounds like when you were the music?
* 42 D INEZ: No.
43 A ¶ Violetta nods.
44 A Her fingers drift to the clasp.
45 A Barnabas lifts his gun.
* 46 D OFFICER BARNABAS: Ma'am, stay still.
* 47 D INEZ (to Barnabas): Lower it.
* 48 D OFFICER BARNABAS: Detective --
* 49 D INEZ: Lower it, Barnabas.
50 A ¶ He lowers it.
51 A Violetta lets out a laugh, brittle and soft.
* 52 D VIOLETTA: Four minutes, you said.
* 53 D INEZ: Three.
* 54 D VIOLETTA: Then let me sing it one last time.
* 55 D DOROTHEA (into the headset, low): Hold the curtain. Hold it. Give me a spot on the catwalk.
* 56 A ¶ A spotlight swings up from below and finds Violetta.
57 A She blinks.
58 A Rises.
* 59 A The briefcase slides from her lap.
* 60 A It clatters empty to the planks, a few pieces of sheet music spilling out.
61 A ¶ Inez steps to it.
62 A Picks one up.
* 63 A It is an aria.
* 64 A Blank staves.
* 65 D INEZ (softly): There's no bomb.
* 66 D VIOLETTA: There never was.
67 A ¶ Below, the orchestra falls silent.
68 A Waiting.
69 A Violetta takes a breath, lifts her chin, and sings one clear note into the dark.
* 70 A It carries up into the rafters.
71 A Nobody on the catwalk moves.
* 72 D TOMASZ (whispering, awed): Matko Boska.
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
* 8 D RAGS: Lolo, put the phone down.
* 9 D LOLO: It's the final scores.
* 10 D RAGS: We lost.
* 11 D LOLO: By one stone.
* 12 D TOBY: By one stone, Rags. One.
* 13 D RAGS: Don't you start, Toby.
* 14 D TOBY: I'm just saying, if you'd called the hammer on the ninth end --
* 15 D RAGS: I called the hammer.
* 16 D TOBY: You called it late.
17 A ¶ Rags slams her glass on the bar.
18 A Lolo drops the phone.
19 A Toby freezes mid-peanut.
* 20 D RAGS: I called it when the ice told me to.
* 21 D LOLO: Rags, the ice doesn't talk.
* 22 D RAGS: It does if you listen.
* 23 A ¶ A silence.
24 A Toby slowly crunches a peanut.
25 A Lolo picks up her phone, slides it into her pocket.
26 A Rags unclenches her fist.
* 27 D RAGS [CONT'D] (quieter): We did well, Lolo.
* 28 D LOLO: We did.
* 29 D TOBY: We did great, Rags.
* 30 D RAGS: Don't suck up, Toby.
* 31 D TOBY: I'm sucking up with respect.
32 A ¶ Rags almost smiles.
33 A Lifts her glass.
* 34 D RAGS: To the ninth end.
* 35 D LOLO: To the ninth end.
* 36 D TOBY: To the hammer.
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
* 9 D BENEDICT: Mother, I can handle it.
* 10 D ROSEMARY: You can't handle a toaster.
* 11 D BENEDICT: That was one time.
* 12 D DELPHINE (from the back): It was three times, Ben.
* 13 D BENEDICT: Stay out of it, Delphine.
* 14 D DELPHINE: Don't tell me to stay out. I'm the one who found the will.
* 15 D ROSEMARY: The will is none of your business.
* 16 D DELPHINE: It's my business. I'm named in it.
* 17 D BENEDICT: You are not.
* 18 D DELPHINE: Page four. Paragraph two.
* 19 D ROSEMARY (rising): That paragraph was struck.
* 20 D DELPHINE: By who?
* 21 D ROSEMARY: By me.
* 22 D BENEDICT: Mother!
* 23 D ROSEMARY: Be quiet, Benedict.
* 24 D BENEDICT: You can't just --
* 25 D ROSEMARY: I can do what I please. I'm his widow.
* 26 D DELPHINE: And I'm his sister's daughter. Which makes me blood.
* 27 D ROSEMARY: Blood is overrated.
* 28 D DELPHINE: Says the woman who married into it.
* 29 A ¶ Silence.
30 A Rosemary stares at the casket.
31 A Her shoulders sag.
32 A Benedict puts a hand on her arm.
33 A She lets it stay.
* 34 D ROSEMARY (quiet): He would have hated this.
* 35 D BENEDICT: He would have loved it. The shouting.
* 36 D DELPHINE (wiping her eyes behind the sunglasses): He started half of it.
* 37 A ¶ A beat.
38 A Rosemary lets out a short, surprised laugh.
39 A Benedict follows.
40 A Delphine, last, a sob that turns into a snort.
41 A They sit in the gentle ruin.
* 42 A ¶ The door opens.
43 A FUNERAL DIRECTOR OSWALD PRICE, 50s, black suit, clears his throat.
* 44 D OSWALD: Ready, whenever you are.
* 45 D ROSEMARY: Give us a moment, Mr. Price.
* 46 D OSWALD: Of course.
47 A ¶ He retreats.
48 A Delphine crosses the room and sits on Rosemary's other side.
49 A Three of them in a row, looking at the casket.
