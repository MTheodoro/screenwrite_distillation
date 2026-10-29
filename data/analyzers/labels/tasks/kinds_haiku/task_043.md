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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0143.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01440 | INT. HOSPITAL - CARDIAC CATH LAB - DAY
Detected names (may be incomplete or contain aliases): IMOGEN ACHEBE-LARSEN, NURSE FELIX OYAMA, HARLAN VOSKUIJLEN, NADIA KARIMOVA
* 1 A ¶ Bright, cold, sterile.
* 2 A Monitors blink green and amber.
* 3 A A fluoroscope arm hangs over a table like a heron.
4 A ¶ DR. IMOGEN ACHEBE-LARSEN (40s, surgical cap, calm like a held breath) scrubs at the sink, eyes on a screen.
5 A NURSE FELIX OYAMA (30s, steady hands, mask pushed up on his forehead) lays out instruments in perfect rows.
6 A ¶ On the table lies HARLAN VOSKUIJLEN (60s, gown, wrist bands, a farmer's tan line at the collar), awake, sedated, hands folded.
7 A ¶ In the viewing window, behind glass: NADIA KARIMOVA (50s, his wife, handbag on her lap, knitting needles motionless).
8 D IMOGEN: Mr. Voskuijlen, how are we doing?
9 D HARLAN: Tell me it's a plumbing job.
10 D IMOGEN: It's a plumbing job.
11 D HARLAN: Good. I fixed a tractor once.
12 D FELIX: Little pinch, sir.
13 A ¶ Felix slides in the needle.
14 A Harlan doesn't wince.
15 A He looks at the ceiling, at the light, at a smear of dried tape on a tile.
16 D HARLAN: You ever notice that tile has a stain?
17 D FELIX: Every day.
18 D HARLAN: Shaped like Ohio.
19 D FELIX: Nobody's ever said Ohio.
20 D HARLAN: Nobody asks.
21 A ¶ Imogen watches the screen.
* 22 A The catheter threads upward, a gray worm through a black river.
23 A She tilts her head, bites her lip behind the mask.
24 D IMOGEN: Left anterior descending. Ninety percent.
25 D FELIX: Stent?
26 D IMOGEN: Stent.
27 A ¶ She takes a gleaming device from the tray.
28 A Felix hands over the next one without being asked.
29 A They work in silence.
30 A ¶ In the window, Nadia's needles begin to click.
31 A Quick.
32 A Quicker.
* 33 A The knitting is a scarf.
* 34 A It has no shape.
35 D HARLAN: Is she knitting?
36 D IMOGEN: She is.
37 D HARLAN: She always knits when it's bad.
38 D IMOGEN: It's not bad.
39 D HARLAN: Then why's she on row four hundred?
* 40 A ¶ A monitor chirps.
* 41 A Not loud.
* 42 A A shift in rhythm, a stutter.
43 A Felix steps closer.
44 D FELIX: Pressure's dropping.
45 D IMOGEN: I see it.
46 D FELIX: Dr. Achebe.
47 D IMOGEN: I see it.
* 48 A ¶ The beeping quickens.
* 49 A The green line jitters into a spike.
50 A Felix grabs the paddles and rolls the cart forward; Imogen presses a hand flat on Harlan's chest.
51 D IMOGEN [CONT'D]: Mr. Voskuijlen. Harlan. Stay with me.
52 D HARLAN (eyes closing): Tell her to finish the scarf.
53 D FELIX: Clear!
54 A ¶ The body jerks.
* 55 A The line flatlines for one second, two, and then, jagged, a heartbeat resumes.
* 56 A Then another.
* 57 A Then a rhythm.
58 A ¶ Imogen exhales, long.
59 A Her shoulders drop an inch.
60 A Felix lowers the paddles, blinking.
61 D FELIX [CONT'D]: He's back.
62 D IMOGEN: He never left.
63 D FELIX: You said that very calmly.
64 D IMOGEN: I'm calm when I'm terrified. It's a flaw.
65 A ¶ Behind the glass, Nadia has stopped knitting.
66 A Her hand is flat on the window, fingers spread.
67 A ¶ Imogen looks up.
68 A Meets her eyes.
69 A Nods once.
70 A ¶ Nadia sits back down.
71 A Picks up the needles.
72 A Starts a new row.
73 D HARLAN (groggy): Ohio.
74 D FELIX: Rest, sir.
75 D HARLAN: It's Ohio. Tell them.
76 D FELIX: I'll tell them.

### SCENE s01441 | INT. CONVERTED SHIPPING CONTAINER - ARBITRATION CHAMBER - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR BEATRIX ONWUDIWE, STENOGRAPHER, PAOLO DEVEREAUX, THADDEUS MWANGI, SOLVEIG ERIKSEN-BOSE, CASPIAN LOMBARDI, KALINDA
* 1 A ¶ A steel box fitted out with pine paneling and ceiling spots.
* 2 A The corrugated walls ring faintly when anyone walks.
* 3 A One long table, a flag of the International Chamber, a speaker phone with a blinking red light.
4 A ¶ ARBITRATOR BEATRIX ONWUDIWE (60s, white braids pinned up, reading glasses on a chain) sits at the head.
5 A To her left, a STENOGRAPHER, PAOLO DEVEREAUX (30s, headphones, fingers hovering over the machine).
6 A ¶ Across the table, claimant's counsel THADDEUS MWANGI (50s, three-piece suit, voice like gravel in velvet) and respondent's counsel SOLVEIG ERIKSEN-BOSE (40s, severe bun, tablet in hand).
7 A ¶ At the foot of the table, in the witness chair: CASPIAN LOMBARDI (50s, shipping magnate, signet ring, sweat at the temple).
8 D ONWUDIWE: We are on the record. Mr. Mwangi, proceed.
9 D MWANGI: Mr. Lombardi, you owned the vessel Calliope?
10 D CASPIAN: My company did.
11 D MWANGI: And on the fourteenth of October the Calliope departed Port Said carrying four hundred tonnes of grain?
12 D CASPIAN: That is correct.
13 D MWANGI: Who authorized the departure?
14 D CASPIAN: The master. Captain Oyelaran.
15 D MWANGI: Not you?
16 D CASPIAN: I do not authorize individual departures.
17 A ¶ Eriksen-Bose lifts her eyes from her tablet.
18 D ERIKSEN-BOSE: Objection. Relevance.
19 D ONWUDIWE: Overruled. Continue.
20 D MWANGI: Were you aware the hull had failed inspection?
21 D CASPIAN: I was informed of minor deficiencies.
22 D MWANGI: Minor. Mr. Lombardi, I have a report here that uses the word "catastrophic" nine times.
23 D CASPIAN: Reports exaggerate.
* 24 A ¶ The speaker phone crackles.
* 25 A A woman's voice, slightly delayed, slightly electronic.
26 D KALINDA [V.O.] (phone): Apologies, Madam Arbitrator, this is the interpreter from Alexandria. Is the witness's last answer on the record in English?
27 D ONWUDIWE: It is, Ms. Kalinda. He spoke English.
28 D KALINDA [V.O.] (phone): Understood. Please proceed.
29 A ¶ Mwangi paces the length of the container, boots ringing on the steel floor.
30 D MWANGI: Did you or did you not instruct the master to leave regardless of the inspection?
31 D CASPIAN: I did not.
32 D MWANGI: Then why does this email, dated the thirteenth, say, quote, "Sail or we lose the contract"?
33 A ¶ Eriksen-Bose rises.
34 D ERIKSEN-BOSE: Madam Arbitrator, that email has not been authenticated.
35 D ONWUDIWE: Mr. Mwangi?
36 D MWANGI: I will authenticate it through the next witness.
37 D ONWUDIWE: Then I will not admit it now.
38 A ¶ Caspian relaxes by half an inch.
39 A Mwangi turns, unhurried, back to the table.
40 D MWANGI: Mr. Lombardi, let us talk about the insurance.
41 A ¶ Caspian's hand goes to his tie.
42 A Loosens it.
43 D CASPIAN: What about it?
44 D MWANGI: It was raised on the twelfth. By forty percent.
45 D CASPIAN: Standard practice.
46 D MWANGI: On a vessel you believed to be sound?
47 D CASPIAN: Prudence.
48 D MWANGI: Or foresight.
49 D ERIKSEN-BOSE: Objection. Argumentative.
50 D ONWUDIWE: Sustained.
51 A ¶ Paolo's keys clack on.
52 A Caspian takes a handkerchief from his pocket and dabs his forehead, folds it, folds it again.
53 D KALINDA [V.O.] (phone): Madam, forgive me, there is a power flicker on our end. We may drop.
54 D ONWUDIWE: Noted. Mr. Lombardi, please answer the question.
55 D CASPIAN: What question?
56 D MWANGI: Did you foresee the loss of the ship?
* 57 A ¶ The container is silent.
* 58 A A fan turns above.
* 59 A The speaker phone hisses.
60 A Eriksen-Bose's pen taps once on the table, a signal.
61 D CASPIAN: I would like to consult with counsel.
62 D ONWUDIWE: Granted. Ten minutes.
63 A ¶ He stands.
* 64 A His chair scrapes.
65 A As he crosses, his shoulder knocks the speaker phone, and the red light goes dark.
66 D KALINDA [V.O.] (phone, fading): ...hello? Madam? Hello?
* 67 A ¶ The line dies.

### SCENE s01442 | INT. RUINED CHURCH BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT REYNALDO CASTELLANOS-DUBE, PRIVATE OSKAR LINDGREN-PARK, CORPORAL ABIOLA FAGBENLE, PRIVATE TEMUJIN BATBAYAR, LIEUTENANT HONORIA WEXCOMBE, STERNBERG
* 1 A ¶ Stone stairs wind up into broken light.
* 2 A The bell lies cracked on its side, green with age.
* 3 A Through a hole in the wall, smoke rises from a distant town.
4 A ¶ SERGEANT REYNALDO CASTELLANOS-DUBE (40s, scarf over his mouth, rifle across his shoulders) crouches at the arched window.
5 A PRIVATE OSKAR LINDGREN-PARK (19, glasses taped at the bridge) hugs the radio set.
6 A CORPORAL ABIOLA FAGBENLE (30s, sniper's cheekrest slung on her back) scans the tree line with binoculars.
7 A PRIVATE TEMUJIN BATBAYAR (20s, silent, chewing on a stalk of grass) stacks sandbags.
8 A LIEUTENANT HONORIA WEXCOMBE (30s, mud to her thighs, helmet cocked back) looks over a map weighted with a rock.
9 D WEXCOMBE: Report.
10 D FAGBENLE: Two vehicles, north road. Neither moving.
11 D CASTELLANOS-DUBE: Waiting for us to blink.
12 D WEXCOMBE: Then we don't blink. Lindgren-Park, raise HQ.
13 D LINDGREN-PARK: Yes, ma'am.
14 A ¶ He turns the dial.
* 15 A Static washes.
* 16 A A voice rises out of it, distorted.
17 D STERNBERG [V.O.] (radio): Echo Three, this is Command. Say your status.
18 D WEXCOMBE: Command, Echo Three. Tower held. Two hostile vehicles on the north road.
19 D STERNBERG [V.O.] (radio): Copy. Armor is thirty minutes out. Hold position.
20 D WEXCOMBE: Thirty minutes is a long time.
21 D STERNBERG [V.O.] (radio): It's what we have.
22 A ¶ Batbayar stops stacking.
23 A Cocks his head.
24 D BATBAYAR: Engines.
25 A ¶ Everyone listens.
* 26 A Faint, then louder.
* 27 A A low mechanical growl rolls up the valley.
28 D FAGBENLE: They're moving. Both.
29 D CASTELLANOS-DUBE: Positions.
30 A ¶ The team scatters.
31 A Fagbenle drops prone behind the window, rifle out.
32 A Batbayar drags sandbags to the stairwell mouth.
33 A Castellanos-Dube takes the opposite window.
34 A Lindgren-Park curls around the radio, mouth against the handset.
35 D LINDGREN-PARK: Command, Command, contact imminent.
36 D STERNBERG [V.O.] (radio, breaking up): ...say again...
37 D WEXCOMBE: Make it brief.
38 D LINDGREN-PARK: Contact.
* 39 A ¶ The first shell whistles.
* 40 A The tower shudders.
* 41 A Dust pours from the ceiling.
* 42 A The cracked bell rings once, a bruised, enormous note.

### SCENE s01443 | EXT. MOSSY STONE BRIDGE OVER A FOGGY GORGE - DAY
Detected names (may be incomplete or contain aliases): GRUMBLEWICK, ELOWEN THISTLEDOWN, BRAMBLEKIN
* 1 A ¶ A humpbacked bridge, green with moss, sits across a ravine of mist.
* 2 A At its center, a stool carved from a single mushroom cap.
3 A ¶ On the stool sits GRUMBLEWICK (ancient troll, belly like a boulder, a tiny abacus in his lap).
4 A Before him stand two travelers: ELOWEN THISTLEDOWN (young, herbalist's satchel) and a hooded PEDDLER named BRAMBLEKIN (stooped, bells on his cloak).
5 D GRUMBLEWICK: Toll's three coppers.
6 D ELOWEN: Three?
7 D BRAMBLEKIN: Three?
8 D ELOWEN: ^It was two last spring.
9 D BRAMBLEKIN: ^It was two last spring.
10 A ¶ Grumblewick flicks a bead on his abacus.
11 D GRUMBLEWICK: Inflation.
12 D ELOWEN: We can pay.
13 D GRUMBLEWICK: Then do.
14 A ¶ Elowen counts out coins.
15 A Bramblekin watches the fog.
16 D BRAMBLEKIN: Ever think about crossing yourself?
17 D GRUMBLEWICK: Every day.
18 A ¶ He pockets the coppers, hums a flat tune, and waves them on.

### SCENE s01444 | INT. MARCHETTI PAWN & LOAN - AFTER CLOSING - NIGHT
Detected names (may be incomplete or contain aliases): DEACON, MARCHETTI, SPARROW, TANAKA-BELL
* 1 A ¶ Glass cases stuffed with watches, guitars, wedding rings.
* 2 A Neon OPEN sign buzzing in reverse through the window.
* 3 A A steel gate half-lowered over the door.
4 A ¶ ENZO "DEACON" MARCHETTI (60s, shopkeeper, cardigan, thick glasses) sits behind the counter counting a bank envelope's worth of twenties.
5 A The counting is slow, careful, and he whispers numbers under his breath.
* 6 A ¶ The door chimes.
7 A Through the gap beneath the gate slides a woman, IRIS "SPARROW" TANAKA-BELL (30s, black raincoat, hair damp, a duffel bag slung over one shoulder).
8 D DEACON: We're closed.
9 D SPARROW: I know, Deacon.
10 A ¶ He looks up.
11 A Recognition takes a long beat.
12 D DEACON: Sparrow.
13 D SPARROW: Been a while.
14 D DEACON: Nine years.
15 D SPARROW: Ten in March.
16 A ¶ She sets the duffel on the glass.
* 17 A It clinks.
18 A Deacon doesn't touch it.
19 D DEACON: What's in the bag?
20 D SPARROW: What you asked for.
21 D DEACON: I asked for nothing.
22 D SPARROW: Your brother did.
23 A ¶ Deacon puts down the money.
24 A His face doesn't change, but his hand slides under the counter.
25 D SPARROW [CONT'D]: Don't.
26 D DEACON: Don't what?
27 D SPARROW: Don't reach for what I think you're reaching for.
28 A ¶ He stops.
29 A Brings the hand up empty, palm out, slow.
30 D DEACON: Habit.
31 D SPARROW: Mine too.
32 A ¶ She lifts the duffel's zipper two inches.
* 33 A Gold glints.
34 A Deacon exhales.
35 D DEACON: That's Sal's work.
36 D SPARROW: That's what's left of it.
37 D DEACON: Where's Sal?
38 D SPARROW: Where do you think?
* 39 A ¶ A pause.
* 40 A The neon buzzes.
* 41 A A car passes outside, headlights sweeping the ceiling.
42 D DEACON: He was supposed to be careful.
43 D SPARROW: He was.
44 D DEACON: Then what happened?
45 D SPARROW: The thing that always happens, Deacon. Somebody got greedy.
46 D DEACON: Who?
47 A ¶ Sparrow doesn't answer.
48 A She zips the bag shut, pushes it across the counter.
49 A He does not take it.
50 D DEACON [CONT'D]: You want a cut.
51 D SPARROW: I want an apology.
52 D DEACON: From me?
53 D SPARROW: From whoever's left.
54 A ¶ He considers.
55 A Takes off his glasses.
56 A Rubs the bridge of his nose.
57 A Puts them back on.
58 D DEACON: I'm sorry, Sparrow.
59 D SPARROW: For what?
60 D DEACON: Everything. Sal. The nine years. The ten in March.
61 A ¶ She nods.
62 A Looks at the ring cases.
63 D SPARROW: You still keep the cheap ones in front?
64 D DEACON: Habit.
65 A ¶ She laughs, a short exhale.
66 A He laughs back, wearier.
67 A They both stop at the same moment, and both look at the door.
* 68 A ¶ Outside, tires on wet street.
* 69 A A shadow crosses the gate.
70 A Deacon ducks behind the counter; Sparrow drops, rolling toward the guitar rack, dragging the duffel with her.
* 71 A The doorbell chimes once, uselessly, as someone shakes the gate.
* 72 A Then silence.
* 73 A Then footsteps, retreating.
74 D DEACON [CONT'D] (whisper): Sparrow?
75 D SPARROW (whisper): Still here.
76 D DEACON: Always was.
77 A ¶ She peeks over the top of the guitar rack.
78 A He rises over the counter.
79 A They look at each other like two animals at the edge of a field, wondering who will cross first.
80 D SPARROW: I'm leaving the bag.
81 D DEACON: Take half.
82 D SPARROW: Keep it. Put it in a safe and forget my name.
83 D DEACON: Never.
84 A ¶ She slips through the gate without a sound.
* 85 A The OPEN sign flickers, once, and goes out.

### SCENE s01445 | INT. THE UNSHELVED ARCHIVE - NIGHT
Detected names (may be incomplete or contain aliases): YSOLDE VANTH, KIT HOLLOWAY, THE INDEX
* 1 A ¶ A hall without a floor.
* 2 A Books drift through the dark like slow fish, spines shimmering, pages fluttering as if in a current.
* 3 A Ladders lean on nothing.
4 A ¶ YSOLDE VANTH (50s, archivist, robes of ink-stained wool, a candle in a jar on a pole) walks a path of stepping stones through the air.
5 A Behind her trails KIT HOLLOWAY (16, apprentice, bare feet, nervous), carrying an armful of loose pages.
6 D YSOLDE: Keep your eyes on the stone, not the drop.
7 D KIT: There is no drop.
8 D YSOLDE: Then you have nothing to fear.
9 A ¶ Kit steps.
* 10 A The stone sinks a hair under his weight and holds.
11 A He doesn't breathe.
* 12 A ¶ A book glides past, the size of a door.
* 13 A Its cover opens a crack, like an eye.
14 D THE INDEX [V.O.] (resonant, everywhere): Query logged. Subject: Kit Holloway. Status: unregistered.
15 A ¶ Kit stops dead.
16 A Ysolde doesn't.
17 D YSOLDE: Ignore it.
18 D KIT: It said my name.
19 D YSOLDE: It says everyone's name. Keep walking.
20 D THE INDEX [V.O.] (resonant): Reason for presence?
21 A ¶ Ysolde turns, one slow pivot of the heel.
22 A She raises the candle until it lights her chin.
23 D YSOLDE: Apprentice. Provisional. Filed under mine.
24 D THE INDEX [V.O.] (resonant): Provisional entries must be stamped by the thirteenth bell.
25 D YSOLDE: I know the rule.
26 D THE INDEX [V.O.] (resonant): It is the twelfth bell.
27 A ¶ Kit swallows.
28 A Ysolde's grip on the pole tightens, white at the knuckles, but her voice remains flat as a table.
29 D YSOLDE: Then we shall be prompt.
30 A ¶ She continues.
31 A Kit follows, steps quicker now, pages clutched to his chest.
32 A A feather of paper breaks loose; he doesn't chase it.
* 33 A ¶ At the end of the path stands a lectern shaped like a tree stump.
* 34 A A stamp rests on it, brass, heavy.
* 35 A A tiny bell begins to toll, softly, from nowhere.
36 D YSOLDE [CONT'D]: Hand.
37 A ¶ Kit presents his palm.
38 A She lifts the stamp.
39 A Holds it above his skin.
40 D KIT: Will it hurt?
41 D YSOLDE: Only afterwards.
* 42 A ¶ The bell tolls again.
* 43 A The books around them slow, tilt, turn their covers toward the lectern like a crowd.
44 D THE INDEX [V.O.] (resonant): The thirteenth bell approaches.
45 A ¶ Ysolde brings the stamp down.

### SCENE s01446 | INT. CENTRAL TELEPHONE EXCHANGE - SWITCHBOARD ROOM - NIGHT, 1924
Detected names (may be incomplete or contain aliases): EUNICE PRUITT, MISS LAVINIA CROFT, HARCOURT
* 1 A ¶ Rows of operators in shirtwaists sit at a wall of brass jacks.
* 2 A Cords hang like ivy.
* 3 A A wall clock ticks.
4 A ¶ EUNICE PRUITT (20s, headset, pencil in her hair) works her board with quick wrists.
5 A Behind her, MISS LAVINIA CROFT (50s, supervisor, high collar, spectacles on a ribbon) watches over her shoulder.
6 D EUNICE: Number, please.
7 D HARCOURT [V.O.] (phone, crackling): Operator, I want Elmwood two-two-one.
8 D EUNICE: One moment, sir.
9 D MISS CROFT: Plug it in.
10 D EUNICE: I am.
11 D HARCOURT [V.O.] (phone): Hello? Hello?
12 D MISS CROFT: Pinch it, Miss Pruitt, don't push.
13 D EUNICE: I am pinching it.
14 D HARCOURT [V.O.] (phone): I have been waiting two minutes!
15 D EUNICE: Sir, I assure you, it's two seconds.
16 D MISS CROFT: Do not argue with a customer.
17 D EUNICE: He is not a customer, Miss Croft, he is a bellow.
18 D HARCOURT [V.O.] (phone): What did you say?
19 D EUNICE: Elmwood two-two-one, sir. Connecting now.
20 A ¶ She jabs the cord home.
* 21 A A lamp flickers green.
22 A Miss Croft nods, a barely perceptible quiver of approval.
23 D MISS CROFT: Better.

### SCENE s01447 | INT. DIALYSIS UNIT - EVENING
Detected names (may be incomplete or contain aliases): ABEL STONEHOUSE, GWEN, TRAN, SAMIR HADDAD-VOLKOV
* 1 A ¶ Rows of recliners, each with a machine beside it, each machine with its slow red heartbeat of tubing.
* 2 A Late sun through blinds.
3 A ¶ ABEL STONEHOUSE (70s, retired carpenter, flat cap in his lap) sits tethered to a machine, a crossword in his free hand.
4 A Beside him, NURSE GWENDOLYN "GWEN" TRAN (40s, scrubs patterned with cartoon owls) adjusts a line.
5 A Across the room, DR. SAMIR HADDAD-VOLKOV (50s, tie loosened, tablet clutched to his chest) reads a chart, then reads it again.
6 D GWEN: Five letters, "to compress."
7 D ABEL: Squeeze.
8 D GWEN: That's six.
9 D ABEL: Press.
10 D GWEN: There it is.
11 D ABEL: I have been doing this since before you were born, Gwen.
12 D GWEN: I was born in 1983.
13 D ABEL: Then since you were in diapers.
14 A ¶ She laughs.
15 A He fills in the squares.
16 A Down the room, Samir hasn't moved.
17 A His thumb slides up and down the edge of the tablet.
18 D GWEN: You're ahead of schedule today.
19 D ABEL: I'm always ahead of schedule.
20 D GWEN: You've been here three hours and not once complained about the chair.
21 D ABEL: The chair's fine.
22 D GWEN: That's what concerns me.
23 A ¶ Samir crosses to them.
24 A His smile is the kind worn for photographs.
25 D SAMIR: Abel. How are the numbers feeling?
26 D ABEL: I don't feel numbers, Doctor. I feel Tuesdays.
27 D SAMIR: Fair. Gwen, a word?
28 D GWEN: Of course.
29 A ¶ She follows him to the hallway.
30 A Abel pretends to resume his crossword but his eyes track them.
31 A Samir speaks low.
32 A Gwen's hand goes to her mouth.
33 A She says something; Samir shakes his head.
34 A She says it again.
35 A ¶ Abel puts down his pen.
36 A ¶ Gwen returns first, composed, face a mask of cheer.
37 D ABEL: That was a long word.
38 D GWEN: It was a short word. The doctor just says it slowly.
39 D ABEL: Gwen.
40 D GWEN: Yes, Abel?
41 D ABEL: Seven letters. "To spare someone the truth."
42 D GWEN (after a beat): I'm not good at crosswords.
43 A ¶ Samir comes up behind her, sets the tablet in Abel's lap, turns the screen.
* 44 A A graph, a line, a downward slope.
45 A Abel looks at it as he might at a bad joist.
46 D ABEL: That's not a Tuesday.
47 D SAMIR: No.
48 D ABEL: How long?
49 D SAMIR: Abel --
50 D ABEL: I'm a carpenter, Samir. Measure twice.
51 D SAMIR: Months. Perhaps less.
52 A ¶ Abel nods once.
53 A Picks up the pen.
54 A Fills one more square, slowly, in capital letters.
55 D GWEN: What did you write?
56 D ABEL: Seven letters. Protect.
57 A ¶ He folds the crossword, tucks it into his cap, and lowers the cap onto his head.

### SCENE s01448 | EXT. FLOODED RICE TERRACE - DAWN
Detected names (may be incomplete or contain aliases): MIRO KOVACEVIC, ELIAS NORDQUIST
* 1 A ¶ Mist hangs over stepped paddies like breath on glass.
* 2 A Water mirrors a pink sky.
* 3 A Dragonflies skim the surface.
4 A ¶ Two soldiers wade along a bund, rifles held high, boots sucking in mud.
5 A MIRO KOVACEVIC (30s, stubble, helmet strapped crooked) leads.
6 A ELIAS NORDQUIST (20s, round-faced, a rosary wound around his wrist) follows two steps behind.
* 7 A ¶ Silence.
* 8 A Frogs.
* 9 A A distant temple bell.
10 A ¶ He gestures.
11 A They stop.
12 A He listens.
* 13 A The frogs go quiet at once, all together, in a sudden, hollow hush.
14 D ELIAS (whisper): Did you hear that?
15 D MIRO: Hear what?
16 D ELIAS: Nothing. That's what I mean.
17 A ¶ Miro nods, lowers himself to one knee, sets his rifle across it.
18 A Elias does the same, a beat late, splashing.
19 A They both flinch.
20 A ¶ He scans the far terrace.
* 21 A Smoke from a thatched hut, thin and lazy.
* 22 A A water buffalo standing in the mud with its head down.
* 23 A Nothing wrong.
* 24 A Nothing in the world wrong.
25 D MIRO: Wait here.
26 D ELIAS: Where are you going?
27 D MIRO: To look at the buffalo.
28 D ELIAS: It's just a buffalo.
29 D MIRO: Then it won't mind.
30 A ¶ He wades forward.
31 A Elias's eyes dart left, right, back to the hut.
* 32 A A wooden door creaks open on its own, and a tin bucket tips off the step; water flows across the planks.
33 A ¶ Both soldiers freeze.
* 34 A Then the buffalo lifts its head, and behind it, in the mud, rise rifle barrels, one after another, like stalks of rice in the dawn.
35 A ¶ Miro lunges back and grabs Elias by the collar, dragging him down behind the bund as the first shot cracks.
* 36 A Mud sprays.
37 A Elias fires blindly; Miro slaps the muzzle skyward, shouting, and they roll together along the slope, each pulling the other, each pushing, until they slam against a stone marker half-buried in the dyke and lie there panting, rifles tangled between them.
38 D ELIAS: You said it was clear!
39 D MIRO: I said it looked clear.
40 D ELIAS: That's not the same!
41 D MIRO: That's what I'm saying.
* 42 A ¶ Another volley whines overhead.
43 A Elias presses his face into the mud.
44 A Miro, breathing hard, reaches over and squeezes his shoulder.
45 D MIRO [CONT'D]: Count with me.
46 D ELIAS: To what?
47 D MIRO: To three.
48 A ¶ They count, silently, lips moving, then rise as one.

### SCENE s01449 | EXT. DRAINED BACKYARD POOL - SKATE SPOT - DUSK
Detected names (may be incomplete or contain aliases): JUNIPER OKAFOR-LEE, DEVONTE PRYCE, MIREILLE SANTOS, KASPER LUND, ANSELMA TREVINO
* 1 A ¶ A kidney-shaped pool, empty, graffitied in swirling teal and orange.
* 2 A Weeds in the cracks.
* 3 A A string of fairy lights sags between two fence posts.
4 A ¶ JUNIPER OKAFOR-LEE (16, hoodie, bleached tips) stands on the lip with her board tucked under her arm.
5 A DEVONTE PRYCE (17, long limbs, headphones around his neck) sits on the coping, pumping a flat tire.
6 A MIREILLE SANTOS (15, jean jacket covered in patches) films with a phone.
7 A KASPER LUND (16, bruised elbows, grin) balances on the diving board of an old above-ground slide.
8 A ANSELMA TREVINO (17, quiet, helmet always buckled) sits cross-legged at the shallow end, taping her knuckles.
9 D JUNIPER: Who's going first?
10 D DEVONTE: Who's going first?
11 D JUNIPER: ^I asked.
12 D DEVONTE: ^I asked.
13 D KASPER: Not it.
14 D MIREILLE: You can't say not it. You're already on the board.
15 D KASPER: I am a free spirit.
16 D ANSELMA: You are a hospital waiting to happen.
17 A ¶ Kasper leaps off the slide, lands in the pool in a clatter, skids on his hip, springs up, arms raised.
18 D KASPER: Landed it!
19 D MIREILLE: That wasn't a trick. That was a fall.
20 D KASPER: A fall with style.
21 A ¶ Juniper drops her board, drags a foot, rolls the first few feet and then drops in, carving high up one wall, down, across the floor and up the opposite wall, trailing a hiss of wheels on concrete while Devonte whoops from the coping, Mireille tracks her with the phone, Anselma pulls her tape tight with her teeth, and Kasper dodges aside, hands on his head, laughing, until Juniper kicks the board up, catches it, and stands at the deep end with her chest heaving.
22 D DEVONTE: That's the line.
23 D JUNIPER: It's my line.
24 D DEVONTE: It's the line we all do.
25 D ANSELMA (quietly): It's the line.
26 A ¶ Everyone looks at her.
27 A She shrugs, stands, slides her board off the lip.
28 D ANSELMA [CONT'D]: Wait for me.
29 A ¶ She rolls in.
* 30 A The wheels sing.
* 31 A The fairy lights flicker on, one bulb at a time, and the sky above goes from orange to violet to a deep, perfect blue.

### SCENE s01450 | EXT. GLASS ORCHARD - TWILIGHT
Detected names (may be incomplete or contain aliases): ORSOLYA THANE, KAEDMON ASH
* 1 A ¶ An orchard of fruit trees blown from glass.
* 2 A Trunks of smoky quartz, leaves of green crystal chiming faintly in a wind that smells of cold iron.
* 3 A Each tree bears hundreds of apples, translucent, glowing from within like lanterns.
* 4 A A winding path of white gravel leads to a stone well at the center.
5 A ¶ ORSOLYA THANE (60s, gardener, tall, a gown the color of dry moss, silver hair braided to her waist) moves between the trunks with a pair of shears.
6 A She trims nothing; she only touches the leaves, one by one, and listens as each rings a slightly different note.
7 A ¶ At the well, she stops.
8 A Rests a palm on its rim.
* 9 A From within rises a pale breath of mist.
10 D ORSOLYA (to the orchard): Another year. Another thousand apples. And not one of you has learned to fall.
* 11 A ¶ The leaves chime, as if in reply.
12 A She takes an apple from a low branch, turns it in her fingers.
* 13 A Inside, a small flame flickers, steady.
14 D ORSOLYA [CONT'D]: Patience. They said I was good at it.
15 A ¶ She sets the apple on the well's edge.
* 16 A Another chime, this one deeper, from the roots.
17 A She frowns.
18 A Kneels.
19 A Presses her ear to the quartz trunk.
* 20 A ¶ A footstep on the gravel.
* 21 A Not hers.
22 A ¶ KAEDMON ASH (30s, a courier's cloak patched with ravens' feathers, boots soaked to the knee, face gaunt, eyes too bright) steps out between the trees.
23 A He carries a leather satchel against his chest like an infant.
24 D KAEDMON: Gardener.
25 D ORSOLYA: You are not expected.
26 D KAEDMON: Nor am I welcome. I know the ritual.
27 D ORSOLYA: Then you know what the orchard does to those who bring iron.
28 A ¶ He opens his cloak.
* 29 A A dagger, bare, at his belt.
30 D KAEDMON: I am not the one who needs the iron.
31 A ¶ He reaches into the satchel and withdraws a seed the size of a child's fist, black and rough, ringed in thin gold wire.
* 32 A The orchard's chimes fall silent.
* 33 A Every leaf stills.
34 A ¶ Orsolya rises slowly, gripping the shears.
35 D ORSOLYA: Where did you get that?
36 D KAEDMON: Where do you think?
37 D ORSOLYA: From the one who swore never to plant it.
38 D KAEDMON: Promises rot faster than apples.
39 A ¶ He kneels and presses the seed into the white gravel.
* 40 A The ground shivers.
* 41 A A hairline crack spreads across the path, and within it a green thread rises, fast, thickening.
42 A Orsolya lunges.
43 A Kaedmon blocks her with his arm; they struggle, her shears tearing his cloak, his dagger skimming her sleeve, until she shoves him against a trunk and the glass sings out in a long, frantic scream.
44 D ORSOLYA: You will kill us all!
45 D KAEDMON: I will wake us.
* 46 A ¶ The root bursts from the earth, black, glittering, enormous, tearing the well in two.
* 47 A Apples fall.
* 48 A Hundreds, thousands, a rain of light, shattering on the gravel, each one releasing its tiny flame, and the orchard ignites, tree after tree, glowing gold and white, until the whole sky is fire and glass.

### SCENE s01451 | INT. TRANSCONTINENTAL EXPRESS - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): HELENA MARCHBANKS, CONRAD ELLIS-WHYTE, OLUWASEUN
* 1 A ¶ White tablecloths.
* 2 A Silver on linen.
* 3 A Brass lamps with fringed shades sway to the rhythm of the rails.
* 4 A Outside, black prairie slips by.
5 A ¶ HELENA MARCHBANKS (40s, evening gown, diamonds at the throat, gloves she has not removed) sits alone at a table set for two.
* 6 A A glass of champagne sweats before her.
7 A ¶ CONRAD ELLIS-WHYTE (50s, tuxedo, white carnation, a face of polished walnut) enters from the vestibule.
8 A He pauses.
9 A Tugs his cuffs.
10 A Crosses.
11 A ¶ FITZGERALD "FITZ" OLUWASEUN (20s, porter's uniform, tray balanced on one palm) sets down a plate of oysters, glances at both of them, and withdraws toward the pantry door, listening.
12 D CONRAD: You're early.
13 D HELENA: You're late.
14 D CONRAD: I was detained.
15 D HELENA: By whom?
16 A ¶ He takes the chair across from her.
17 A Smooths the napkin over his knee.
18 D CONRAD: By nobody. By the bar. By myself.
19 D HELENA: That's three.
20 D CONRAD: That's honest.
21 A ¶ She lifts her glass.
22 A Does not drink.
23 A Sets it down.
24 D HELENA: I got your telegram.
25 D CONRAD: Ah.
26 D HELENA: It said "Meet me in the dining car, we need to talk."
27 D CONRAD: It did.
28 D HELENA: It did not say about what.
29 D CONRAD: I thought you'd know.
30 D HELENA: I suspected.
31 A ¶ Fitz shifts by the pantry door.
* 32 A A tray rattles.
33 A Both look at him.
34 A He smiles brightly, bows, vanishes.
35 D CONRAD: Is that boy listening?
36 D HELENA: Everyone listens on a train. It's a very small town.
37 A ¶ Conrad leans in.
38 A Lowers his voice.
39 D CONRAD: The Havilland papers. You gave them to the Senator.
40 D HELENA: I did.
41 D CONRAD: Without telling me.
42 D HELENA: I told you in the telegram I sent first. You never answered.
43 D CONRAD: I assumed it was a joke.
44 D HELENA: I assumed you read your mail.
45 A ¶ He slaps the table.
* 46 A Silverware leaps.
* 47 A The oysters shiver in their ice.
48 A Helena doesn't blink.
49 D CONRAD: Do you realize what you have done?
50 D HELENA: I have kept a promise, Conrad. It's unfamiliar to you.
51 D CONRAD: Forty years. Forty years of this firm, and you hand it to a politician over a cup of coffee.
52 D HELENA: Over a lunch.
53 D CONRAD: Oh, a lunch! That makes it civil.
54 D HELENA: It was a good lunch.
55 A ¶ He rises.
56 A She does not.
* 57 A The car lurches around a curve; a glass slides, drops, shatters.
58 A Fitz appears with a brush and a dustpan, sweeps without a word, and retreats.
59 A ¶ Conrad sits down again, heavily.
60 A Reaches for her hand.
61 A She lets him.
62 D CONRAD [CONT'D]: You were always the smarter one.
63 D HELENA: I know.
64 D CONRAD: I resent it.
65 D HELENA: I know that too.
66 D CONRAD: What now?
67 D HELENA: Eat your oysters. They're getting warm.
68 A ¶ He laughs, once, a surprised bark.
69 A Picks up a fork.
* 70 A The train howls into the dark.

### SCENE s01452 | INT. GRANDFATHER'S GARAGE - AFTERNOON
Detected names (may be incomplete or contain aliases): LEOPOLD VASQUEZ-MBEKI, SUNNIVA, MURRAY
* 1 A ¶ Pegboard walls, every wrench outlined in marker.
* 2 A A 1971 pickup under a canvas sheet.
* 3 A A radio on a shelf plays low static.
4 A ¶ LEOPOLD VASQUEZ-MBEKI (70s, coveralls, a pencil behind each ear) sits on an upturned bucket, sanding a chair leg.
5 A His granddaughter SUNNIVA (9, pigtails, oversized work gloves) holds the leg steady, tongue between her teeth.
* 6 A ¶ On a workbench, a cell phone vibrates against a coffee can.
7 A ¶ He glances at it.
8 A She glances at him.
9 A Neither moves.
10 D SUNNIVA: Is that Dad?
11 D LEOPOLD: Probably.
12 D SUNNIVA: Shouldn't you answer?
13 D LEOPOLD: Probably.
14 A ¶ He finishes the stroke.
15 A Blows dust off the wood.
16 A Hands her the leg.
17 A She runs her thumb along the grain, nods, and sets it on the bench.
* 18 A ¶ The phone goes still.
* 19 A A moment later, it buzzes again.
20 D LEOPOLD [CONT'D]: He's persistent.
21 D SUNNIVA: Like you.
22 D LEOPOLD: Like your grandmother.
23 A ¶ He wipes his hands on a rag.
24 A Reaches for the phone.
25 A Taps the screen.
26 A Sets it on the bench, on speaker.
27 D MURRAY [V.O.] (phone): Pop? You there?
28 D LEOPOLD: I'm here.
29 D MURRAY [V.O.] (phone): Is Sunni with you?
30 D LEOPOLD: She is. She's sanding.
31 D SUNNIVA (to the phone): I'm not sanding. He's sanding. I'm holding.
32 D MURRAY [V.O.] (phone): Okay. Holding. Can you hold till six? I'm stuck at the office.
33 D LEOPOLD: She can hold till Christmas.
34 D SUNNIVA: I can.
35 D MURRAY [V.O.] (phone): Thanks, Pop. Love you both.
36 A ¶ He hangs up before Leopold can reply.
37 A Leopold stares at the dead phone.
38 A Sunniva picks up the chair leg again and holds it out to him.
39 D SUNNIVA: He didn't say bye.
40 D LEOPOLD: He never does.
41 A ¶ He takes the leg.
42 A Resumes sanding.
43 A She sits on the floor, cross-legged, watching his hands.

### SCENE s01453 | INT. ARLO'S APARTMENT - ENTRY HALL - NIGHT
Detected names (may be incomplete or contain aliases): ARLO PENDERGAST
* 1 A ¶ Dark.
* 2 A A key rattles in the lock.
* 3 A The door swings inward, bumping a stack of unopened mail.
4 A ¶ ARLO PENDERGAST (40s, rain-soaked suit, a cake box under one arm, a party hat still on his head from a party that ended badly) steps inside.
5 A He closes the door with his heel.
6 A Flips the switch.
* 7 A ¶ Nothing.
8 D ARLO: Of course.
9 A ¶ He fumbles in the dark.
10 A Finds the wall.
11 A Finds a plant.
12 A Apologizes to the plant.
13 D ARLO [CONT'D]: Sorry.
* 14 A ¶ The red light of an answering machine blinks on a side table.
15 A He stares at it.
16 A He presses PLAY.
17 D ARLO [V.O.] (answering machine, cheerful): Hi! You've reached Arlo. I'm either out having an amazing time or I'm in the bath. Leave a message!
* 18 A ¶ A long beep.
* 19 A Silence.
20 A Arlo (the real one) exhales through his nose.
21 A ¶ He sets the cake box on the table.
22 A Opens it.
* 23 A Inside, a small cake, the frosting smeared, a single candle bent sideways.
* 24 A The words "HAPPY 40TH" have slid into "HAPPY 4 TH."
25 D ARLO: Happy 4th.
26 A ¶ He picks up the candle.
27 A Lights it with a match from his pocket.
28 A The flame illuminates his face from below, hollow-eyed, absurd under the paper hat.
29 A ¶ He sits on the floor.
* 30 A Tilts the cake toward himself.
* 31 A Takes a breath to blow it out.
* 32 A ¶ The answering machine clicks.
* 33 A Another message.
34 D ARLO [V.O.] (answering machine, slightly drunk): Hey, it's me. Future me. Just wanted to say, whatever you wished for, you're welcome.
35 A ¶ Arlo sits perfectly still.
* 36 A The candle burns down.
37 A ¶ He laughs.
38 A First small, then helpless, then in great wheezing gasps, tears running into the party hat's elastic.
39 A He blows out the candle, sits in the smoke, and eats the cake with his fingers.

### SCENE s01454 | INT. WEDDING CAKE BAKERY - DAY
Detected names (may be incomplete or contain aliases): GERTRUDE POSLUNS, BARNEY ODUYA
* 1 A ¶ A tiny shop, glass cases, tiers of fondant in a pastel parade.
* 2 A The air smells of butter and bad decisions.
3 A ¶ GERTRUDE POSLUNS (50s, flour to the elbows, apron stained rainbow) frosts a three-tier cake with a palette knife as if defusing a bomb.
* 4 A The door's bell jangles.
5 D GERTRUDE: We're closed.
6 A ¶ BARNEY ODUYA (30s, groom, tuxedo jacket, one shoe untied) bursts in, breathless.
7 D BARNEY: Please. Please. I need a cake.
8 D GERTRUDE: You have a cake. You ordered it in March.
9 D BARNEY: I ordered a cake in March. My fiancée ordered another cake in April.
10 D GERTRUDE: I know. I made both.
11 D BARNEY: They're in the same venue. At the same hour.
12 D GERTRUDE: Then you'll have double the dessert.
13 D BARNEY: I'll have double the divorce.
14 A ¶ He puts both hands on her glass case.
15 A She doesn't look up from the frosting.
16 D GERTRUDE: Which one is yours?
17 D BARNEY: The coconut.
18 D GERTRUDE: Hers?
19 D BARNEY: Also coconut.
20 D GERTRUDE: ^Then they're the same.
21 D BARNEY: ^Then they're the same.
22 A ¶ He stops.
23 A They look at each other.
* 24 A The bell above the door settles.
25 D GERTRUDE: So it's not a crisis.
26 D BARNEY: It's a crisis of principle.
27 D GERTRUDE: I deal in crises of sugar.
28 A ¶ She hands him a bag.
* 29 A Inside, two sprigs of mint.
30 D GERTRUDE [CONT'D]: Put one on each. They won't notice a difference.
31 D BARNEY: Thank you.
32 D GERTRUDE: Go get married.
33 A ¶ He bolts.
* 34 A The bell jangles.
35 A She resumes frosting.
* 36 A Outside, a car horn.

### SCENE s01455 | INT. VELODROME - TRACKSIDE INFIELD - EVENING
Detected names (may be incomplete or contain aliases): MARISOL VENTURA-KHAN, AUGUSTO NKEMELU, ANNOUNCER
* 1 A ¶ Steep banking of blond wood.
* 2 A Overhead lights hum.
* 3 A An empty stand rises in tiers.
* 4 A The track gleams like a polished spine.
5 A ¶ MARISOL VENTURA-KHAN (20s, skinsuit, helmet strapped under her chin) sits on a folding stool, bare feet in cleated shoes, staring at nothing.
6 A AUGUSTO NKEMELU (50s, coach, tracksuit, stopwatch on a lanyard) crouches in front of her, adjusting her cleat.
7 A ¶ She breathes.
8 A In.
9 A Out.
* 10 A A slow metronome.
11 A ¶ He clicks the watch.
12 A Doesn't look at it.
* 13 A ¶ A speaker crackles overhead.
14 D ANNOUNCER [V.O.] (PA, echoing): Riders to the line for the individual pursuit, final.
15 A ¶ She stands.
16 A He stands with her.
17 A She rolls her neck.
18 A He rubs her shoulder once, hard, the way you'd warm up an engine.
19 D AUGUSTO: Four minutes. Four-oh-seven. Same as practice.
20 D MARISOL: I know.
21 D AUGUSTO: You've done it a hundred times.
22 D MARISOL: I know.
23 D AUGUSTO: Then why is your hand shaking?
24 A ¶ She looks at it.
25 A It is.
26 A She flexes it.
27 A Stops.
28 D MARISOL: It's the cold.
29 D AUGUSTO: It's seventy degrees.
30 D MARISOL: Then it's the lights.
31 A ¶ He lets it go.
32 A Leads her to the bike.
33 A She mounts, clips in, and rolls up the banking to the starting gate, where a mechanic holds her saddle.
34 A Augusto stands at the rail, arms crossed.
35 D ANNOUNCER [V.O.] (PA): Five seconds.
36 A ¶ Her face is still.
37 A Her breath doesn't change.
38 A He stares at her, and for one second she looks up, directly at him, with an expression he cannot read.
39 D ANNOUNCER [V.O.] (PA): Go.
40 A ¶ She explodes off the line.
* 41 A The bike hums on the boards.
42 A She comes round the first bend, the second, her cadence steady, her back flat.
43 A He clicks the watch.
44 D AUGUSTO (under his breath): Good. Good.
* 45 A ¶ Lap three.
* 46 A Lap four.
47 A She holds the line.
48 A He relaxes, a small exhale.
* 49 A ¶ Lap seven.
50 A Her cadence stutters.
51 A He leans over the rail.
52 D AUGUSTO [CONT'D]: Marisol!
53 A ¶ She doesn't hear.
54 A Or she does, and ignores it.
55 A Her wheel drifts a hand's width up the banking.
56 D AUGUSTO [CONT'D]: Marisol, down! Hold your line!
57 A ¶ She comes off the banking too early, wobbles, corrects.
58 A The stands are empty but he shouts as if they were full.
59 D ANNOUNCER [V.O.] (PA): Lap eleven.
60 A ¶ She is a half-second off pace.
61 A He sees it.
62 A He sees it again at the next split.
63 A The stopwatch trembles in his hand.
64 A ¶ Then she does something unexpected.
65 A She sits up.
66 A Coasts.
67 A Rolls to a stop on the apron, unclips, and stands with her bike against her hip.
68 A ¶ He vaults the rail, runs.
69 D AUGUSTO [CONT'D]: What are you doing?
70 D MARISOL (calm): I'm done.
71 D AUGUSTO: You were on pace.
72 D MARISOL: I was on your pace.
73 A ¶ He stares.
74 A She takes off her helmet.
75 A Her hair is plastered to her forehead.
76 A She hands him the helmet like a gift.
77 D MARISOL [CONT'D]: Tell them I withdrew.
78 D AUGUSTO: Why?
79 D MARISOL: Because I wanted to see if you'd run.
80 A ¶ He looks down at his own feet.
81 A Then up, at her, and somewhere between rage and relief, his face crumples.
82 D AUGUSTO: That's a terrible reason.
83 D MARISOL: It's the only one I had.

### SCENE s01456 | EXT. OPEN OCEAN - LIFEBOAT - DAY
Detected names (may be incomplete or contain aliases): PETRA ISAKSSON, WILFRED OKONJO-HART, NOOR SAFFARINI, SWIMMER, RAMON
* 1 A ¶ A cracked orange lifeboat drifts on a flat grey sea.
* 2 A No land.
3 A PETRA ISAKSSON (30s, sunburned, hair matted) bails with a cut-off bottle.
4 A WILFRED OKONJO-HART (50s, one arm in a sling) watches the horizon.
5 A NOOR SAFFARINI (20s, lips split) lies across the thwart, eyes shut.
6 D PETRA: Water's rising.
7 D WILFRED: Keep bailing.
8 D NOOR (without opening her eyes): Someone's out there.
9 D WILFRED: You're dreaming.
10 D NOOR: I'm not.
* 11 A ¶ A splash.
12 A Petra freezes.
13 A Wilfred squints.
14 A ¶ A man's head breaks the surface twenty feet off.
15 A A SWIMMER (30s, shaved head, black wetsuit, mouth ringed in salt) stroking toward them with long, tired, unhurried pulls.
16 D PETRA: Oh my God.
17 D WILFRED: Pull him in.
18 A ¶ They grab his wrists.
19 A He thumps over the gunwale and lies there gasping.
20 A Petra offers the bottle.
21 A He drinks, coughs, drinks again.
22 D SWIMMER: Thank you.
23 D WILFRED: Where did you come from?
24 D SWIMMER: The cargo ship. It sank four days ago.
25 D NOOR: Four days?
26 D SWIMMER: Four days. I'm Ramon.
27 D PETRA: Ramon. Petra. This is Wilfred. That's Noor.
28 D RAMON: How many are you?
29 D WILFRED: Three.
30 D RAMON: Four, now.
31 A ¶ He smiles.
32 A Noor opens one eye, and does not smile back.

### SCENE s01457 | INT. SUDS & SHINE CAR WASH - TUNNEL - DAY
Detected names (may be incomplete or contain aliases): DETECTIVE WALTER BRZEZINSKI, LULU, FAIRWEATHER
* 1 A ¶ A tunnel of whirring brushes, foam, and blue neon.
* 2 A Water thrums on the roof.
* 3 A Rollers drag a battered Buick through a bath of pink soap.
4 A ¶ DETECTIVE WALTER BRZEZINSKI (50s, trench coat, fedora brim dripping) leans against the tunnel wall, arms folded, ignoring the spray.
5 A Across from him, in a plastic chair beside the dryer vents, sits LUCIANA "LULU" FAIRWEATHER (30s, red leather jacket, acrylic nails, a trembling cigarette).
6 D WALTER: You said you'd tell me.
7 D LULU: I said I'd think about it.
8 D WALTER: You've thought for two weeks.
9 D LULU: It's a big thought.
* 10 A ¶ The Buick passes.
* 11 A A brush slaps its windshield with a heavy, rhythmic thud.
* 12 A Foam smears the glass.
13 D WALTER: Who ordered the hit?
14 D LULU: Walter.
15 D WALTER: Lulu.
16 D LULU: If I say it, I'm dead.
17 D WALTER: If you don't, so is the next kid.
18 A ¶ She looks at the cigarette.
19 A Looks at the dryers.
20 A Stubs the cigarette against the chair.
21 D LULU: It was the guy who runs this place.
22 A ¶ Walter doesn't move.
* 23 A The tunnel roars.
24 A Slowly, he turns his head toward the glass booth by the exit, its light on, its door ajar.
25 D WALTER: Don't look.
26 D LULU: I'm not.
27 D WALTER: Stay seated.
28 D LULU: I'm seated.
29 A ¶ He walks.
30 A Not quickly.
31 A Not slowly.
32 A Past the dryers, past the wax station.
33 A His hand slips inside his coat.
* 34 A ¶ A rubber flap swings.
* 35 A A roar of water.
36 A The Buick, wet, shining, rolls between him and the booth like a curtain, and by the time it clears, he is at the door with his gun lowered.
* 37 A The booth is empty.
* 38 A A coffee cup steams on the counter beside a phone off its hook.
39 D WALTER [CONT'D] (calm): Gus is gone.
40 D LULU (from the chair, almost a whisper): Is it over?
41 D WALTER: It's over.
42 A ¶ She picks up another cigarette.
43 A Her hand is perfectly steady now.
44 A She lights it, and the foam settles in the tunnel's blue glow.

### SCENE s01458 | INT. ICE-FISHING SHACK - NIGHT
Detected names (may be incomplete or contain aliases): GIDEON PARR, HUGO LEDBETTER, WOMAN, AUDREY
* 1 A ¶ A plywood box on a frozen lake.
* 2 A A propane heater glows orange in the corner.
* 3 A Two holes cut in the floor, black water showing through, lines dangling.
* 4 A A thermometer reads minus nineteen.
* 5 A Windows frosted white.
6 A ¶ GIDEON PARR (50s, parka, wool cap, a face weathered by wind) sits on an overturned bucket, jigging a line with two fingers.
7 A HUGO LEDBETTER (50s, same parka but green, a thermos in his lap, mustache stiff with frost) sits across from him, doing nothing.
8 D GIDEON: Nothing.
9 D HUGO: Nothing.
10 D GIDEON: Nothing for three hours.
11 D HUGO: That's why they call it fishing.
12 D GIDEON: They call it that because of the fish.
13 A ¶ Hugo pours coffee.
* 14 A It steams.
15 A He passes the cup.
16 A Gideon takes it, warms his hands, and sips.
17 D GIDEON [CONT'D]: Heard something.
18 D HUGO: Wind.
19 D GIDEON: Wasn't wind.
20 D HUGO: Ice shifting. It does that.
21 A ¶ They listen.
* 22 A Faint, a soft scratch, rhythmic, like fingernails dragging over the lake's underside.
23 D GIDEON: That's not ice.
24 D HUGO: Gideon.
25 D GIDEON: Hugo.
* 26 A ¶ The scratch circles the shack.
* 27 A Passes the window.
* 28 A The frost on the glass takes the shape of a palm, then gently fades.
29 A ¶ Both men stand.
30 A Hugo reaches for the door latch.
31 A Gideon grips his arm.
32 D GIDEON [CONT'D]: Don't.
33 D HUGO: If it's a person, they'll freeze.
34 D GIDEON: It's minus nineteen. No person is out there.
* 35 A ¶ Knock.
* 36 A Three, soft.
37 A A voice outside, thin, pleading.
38 D WOMAN [O.S.]: Please. I'm cold.
39 A ¶ They stare at each other.
40 A Hugo lifts the latch an inch.
* 41 A The wind pours in, and with it a smell of lake mud and violets.
42 A Gideon hauls him back and slams the latch shut, and the knocking resumes, faster, three, three, three, as the heater gutters and Hugo, whose hands are shaking, shoves Gideon aside, flings the door open, and stands blinking at a figure on the ice.
43 A ¶ A WOMAN (30s, nightgown, barefoot, hair frozen in rope-like strands) looks up at them.
* 44 A Her lips are blue.
* 45 A Her eyes are perfectly dry.
46 D WOMAN: I'm Audrey. I fell through in March.
47 A ¶ Hugo takes a step back.
48 A Gideon grabs the rifle from the corner and aims, hands shaking.
49 D GIDEON: Stay back.
50 D AUDREY: I just want to come in.
51 D HUGO: Nobody invited you.
52 D AUDREY: You did. You cut the hole.
53 A ¶ She points to the floor.
* 54 A Through the black water in the fishing hole, a pale hand is rising, fingers spread, reaching up toward the lamp.
55 A ¶ Gideon fires.
* 56 A The shot booms.
* 57 A Ice cracks in a long white line across the lake, and the wind dies.
* 58 A ¶ When the echo fades, Audrey is gone.
* 59 A The hole in the floor is just a hole, black and still.
60 A Hugo lowers himself onto the bucket.
61 A Gideon sets down the rifle.
62 D HUGO: Pour me a coffee.
63 D GIDEON: Thermos is empty.
64 D HUGO: Then we wait.
65 A ¶ They sit in the dim orange glow, listening to the lake settle.
66 A Neither touches his line.

### SCENE s01459 | INT. MUSEUM OF MINIATURE HOUSES - NIGHT
Detected names (may be incomplete or contain aliases): PRUDENCE KELLAWAY, ZINNIA BELLWETHER
* 1 A ¶ A hush of glass cases.
* 2 A Dollhouses on pedestals: Victorian mansions, adobe cottages, a tiny lighthouse.
* 3 A Each lit from within by pin-sized lamps.
4 A ¶ PRUDENCE KELLAWAY (40s, curator's blazer, flashlight clipped to her belt) makes her rounds, brushing dust from a case with a feather duster.
5 A Behind her, trailing a step too close, comes ZINNIA BELLWETHER (20s, intern, overlarge cardigan, tote bag of cleaning supplies).
6 D PRUDENCE: Mind the north wing. The Whitcombe house is on a loose pedestal.
7 D ZINNIA: Which one is Whitcombe?
8 D PRUDENCE: The one with the attic.
9 A ¶ Zinnia peers at a case.
* 10 A A Georgian townhouse, its windows aglow.
* 11 A In the tiny attic window, a doll sits in a rocking chair, facing the glass.
12 D ZINNIA: She's looking at me.
13 D PRUDENCE: They're all looking at someone.
14 A ¶ She keeps walking.
15 A Zinnia lingers.
16 A She bends close.
17 A Her breath fogs the glass.
18 D ZINNIA: Was she facing the wall earlier?
19 D PRUDENCE: Who?
20 D ZINNIA: The doll. This afternoon. She was facing the wall.
21 D PRUDENCE: Dolls don't move.
22 D ZINNIA: I know.
23 A ¶ Prudence turns, annoyed, to check.
24 A She stops.
25 A Her face goes still.
26 A She crouches beside Zinnia, both women at the level of the miniature window.
* 27 A ¶ In the attic, the little rocking chair is rocking.
* 28 A Slowly.
* 29 A Back, forth.
* 30 A The doll's head has turned toward them.
31 A ¶ Prudence grips Zinnia's arm.
32 A Zinnia grips back.
33 A Neither speaks.
* 34 A ¶ The tiny lamps in the Georgian house flicker out, one floor at a time, until only the attic glows.
35 D PRUDENCE (barely a whisper): Back away.
36 D ZINNIA: I can't.
37 D PRUDENCE: Why not?
38 D ZINNIA: She's holding my hand.
39 A ¶ Prudence looks down.
* 40 A Zinnia's fingers, still wrapped around her sleeve, are pale.
* 41 A A thread of white yarn runs from Zinnia's cuff, taut, across the floor, and into a hairline gap beneath the case.
42 A ¶ Prudence snaps the thread with a tug.
* 43 A The doll in the attic tips from her chair and tumbles out of sight.
* 44 A The lamp dies.
* 45 A The whole museum goes dark except for the flashlight at Prudence's belt, trembling with her breath.
46 D PRUDENCE [CONT'D]: We're leaving.
47 D ZINNIA: Yes.
48 A ¶ They run.
* 49 A Behind them, in a hundred miniature houses, a hundred tiny lights wink on.

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
