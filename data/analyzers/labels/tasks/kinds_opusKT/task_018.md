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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0018.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00409 | INT. BASEMENT REC ROOM - PING-PONG TOURNAMENT - NIGHT
Detected names (may be incomplete or contain aliases): SUNNY, BOOKER, MILO, FRANCESCA
* 1 A ¶ Wood paneling and low ceiling.
* 2 A A single table under a bare bulb.
* 3 A Folding chairs hold a dozen onlookers, cans of soda in hand.
* 4 A A chalkboard bracket hangs on the wall, with SUNNY and BOOKER circled at the bottom.
5 A ¶ SUNNY, 20s, a wiry woman in a headband and a retro track jacket, bounces the ball on her paddle.
6 A BOOKER, 40s, a big, slow man in a cardigan, wipes his hands on his pants.
7 A MILO, 12, the referee, sits on a stepladder with a whistle and a clipboard.
8 A FRANCESCA, 50s, Booker's wife, holds a thermos at courtside.
9 D MILO: Nine to eight, Sunny.
10 D SUNNY: I know.
11 D BOOKER: I know.
12 A ¶ They say it together.
13 A Both flinch.
14 D SUNNY: I know the score. ^BOOKER Let's finish this.
15 D MILO: Serve.
16 A ¶ Sunny serves.
17 A Booker slams it back.
* 18 A The ball skims the net and drops onto Sunny's side, where it rolls off the table's edge and under a chair.
19 D FRANCESCA: Point, Booker!
20 D MILO: Nine to nine. Final game point.
21 A ¶ The crowd murmurs.
22 A Sunny retrieves the ball, blows on it, and tosses it to Booker.
23 D SUNNY: Your serve.
24 D BOOKER: You sure?
25 D SUNNY: I like to win clean.
26 A ¶ Booker grins.
27 A He rolls his shoulders, steps back, and lets the ball fly.
28 A Sunny returns it with a snap.
* 29 A It arcs high.
30 A Booker drives it down in a smash that rings on the table.
31 A Sunny dives, paddle outstretched, and flicks it back from the floor.
* 32 A ¶ The ball hangs in the air.
33 A Everyone holds their breath.
* 34 A It lands, clips the edge, and drops.
35 D MILO: Point... Sunny.
36 A ¶ The room erupts.
37 A Sunny leaps up, fists raised.
38 A Booker bows his head, laughs, and holds out a hand.
39 D BOOKER: Well played.
40 D SUNNY: You almost had me.
41 D FRANCESCA (to Sunny): He always almost has them.

### SCENE s00410 | EXT. DESERT WELL - DUSK
Detected names (may be incomplete or contain aliases): AMOS, HESTER, STRANGER, CALLOWAY
* 1 A ¶ A dry well, a rope, a bucket.
* 2 A Sage and rock.
* 3 A The sun is a red coin.
4 A ¶ AMOS, 60s, a grizzled prospector, hauls the bucket up hand over hand.
* 5 A Empty.
6 A He tosses it aside.
7 A Beside him, HESTER, 30s, in a long gray coat, holds a rifle loosely.
8 A ¶ A STRANGER, 40s, stands thirty yards off on a ridge, a black silhouette against the sky.
9 D HESTER: He's been there an hour.
10 D AMOS: He's patient.
11 D HESTER: Or dumb.
12 D AMOS: Maybe both.
13 A ¶ The Stranger lifts a hand.
14 A He starts down the slope, slow, each step careful.
15 D HESTER: Want me to?
16 D AMOS: Not yet.
17 A ¶ He reaches the well.
18 A Close up, he's older than he seemed, with a gray beard and a limp.
19 A He tips his hat.
20 D STRANGER: Afternoon.
21 D AMOS: Evening.
22 D STRANGER: Is there water?
23 D AMOS: Not for a week.
24 A ¶ The Stranger nods.
25 A He sits on a rock, puts down his pack.
26 D STRANGER: I'm Calloway. Samuel Calloway.
27 D HESTER (muttering): Great.
28 D CALLOWAY: You know me.
29 D HESTER: We know the name.
30 A ¶ Amos stiffens.
31 A His hand goes to his belt.
32 A Hester's thumb finds the hammer.
33 D CALLOWAY: I'm not here for trouble.
34 D AMOS: Then why?
35 D CALLOWAY: Because the man who shot your son is dead.
* 36 A ¶ A beat.
* 37 A The wind drops.
38 A Hester's rifle sags.
39 A Amos stares at the Stranger for a long moment, his eyes wet in the red light.
40 D AMOS: Who did it?
41 D CALLOWAY: I did.
* 42 A ¶ Silence.
43 A Amos turns, picks up the bucket, and walks back to the well.
44 A He hangs it on its hook.
45 A His hand lingers on the rope.
46 D HESTER: Amos.
47 D AMOS (without turning): Give him your canteen.
48 A ¶ Hester doesn't move.
49 A Then, slowly, she unslings it and tosses it to the man on the rock.

### SCENE s00411 | INT. COUNTY COURTHOUSE - DEFENSE ATTORNEY'S OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): THEODORA WREN
* 1 A ¶ A narrow, windowless room lit by a green banker's lamp.
* 2 A Case files tower on the desk.
* 3 A A coffee ring has dried on a closing-argument draft.
* 4 A A dictaphone sits by a cold sandwich.
5 A ¶ THEODORA WREN, 50s, defense counsel, in a rumpled suit with her shoes off, paces between the desk and the file cabinet with a legal pad.
6 A She stops, scribbles a line, crosses it out, tears the page off, crumples it, and throws it at the wastebasket.
* 7 A It misses.
* 8 A Behind her, through the glass door, the empty gallery waits with its rows of dark benches and the quiet of a held breath, and above it all the clock ticks past two.
9 D THEODORA (to herself): Members of the jury.
10 A ¶ She shakes her head and tries again, lower.
11 D THEODORA [CONT'D] (to herself): Ladies and gentlemen. You have heard from forty witnesses.
12 A ¶ She stops.
13 A She presses the heel of her hand to her eyes.
14 A Then she sits, flicks on the dictaphone, and a red light glows.
15 D THEODORA [CONT'D] (into dictaphone): Closing, version nine. Begin.
16 A ¶ She clears her throat.
17 A Her voice drops into the cadence of a long-practiced speech.
18 D THEODORA [CONT'D] (into dictaphone): Members of the jury. For three weeks, you've been told a story. You've been told it by a man in a good suit with a binder and a smile. And I want you to ask yourselves one question, only one: who benefits from this story being true?
19 A ¶ She stops the tape.
20 A Rewinds.
21 A Plays it back.
22 D THEODORA [V.O.] (recorded): Who benefits from this story being true?
23 A ¶ She winces.
24 A Stops it.
25 A Lets out a long sigh.
26 D THEODORA (to herself): Terrible.
27 A ¶ She goes to the file cabinet, pulls a drawer, and lifts out a thick folder.
28 A She weighs it in her hands: the transcripts, the exhibits, the blood evidence, the long dull ledger of a case that began as a footnote and swallowed a year of her life.
29 A She sets it on the desk and opens it to a photograph.
30 A A young man, grinning, in a graduation cap.
31 A She traces his face with a fingertip.
32 D THEODORA [CONT'D] (to the photo): I don't know if you did it.
33 A ¶ She picks up the dictaphone.
34 D THEODORA [CONT'D] (into dictaphone): New take. Members of the jury. I don't know if my client is innocent. I don't know. I've never known. And neither does the prosecutor, though he has spent three weeks pretending otherwise.
35 A ¶ She stops.
36 A She stares at the red light.
37 A She is shaking.
38 D THEODORA [CONT'D] (into dictaphone): But I know this: a reasonable doubt is not a flaw in the law. It's the law's only conscience. And if there is a single one of you who cannot say, with a clear heart, that he did it, then you must say that he did not.
* 39 A ¶ The light on the dictaphone stutters.
* 40 A The tape runs out with a soft clack.
41 A She sits in the sudden quiet, hand over her mouth, and in the empty gallery beyond the glass, a bench creaks as if someone, an old or invisible juror, has shifted to listen.
42 A ¶ She lowers her hand.
43 A Tears track down her face, and she wipes them with the back of her wrist, laughing a little.
44 D THEODORA [CONT'D] (to herself): That's the one.
45 A ¶ She rewinds the tape.
46 A Plays it back.
47 D THEODORA [V.O.] (recorded): ...then you must say that he did not.
48 A ¶ She nods, sets the dictaphone down, and for the first time that night, reaches for the cold sandwich.

### SCENE s00412 | INT. LATE-NIGHT NOODLE BAR - NIGHT
Detected names (may be incomplete or contain aliases): JOSEFINA, CASPIAN, WREN, BASIL
* 1 A ¶ Steam.
* 2 A Fluorescent.
* 3 A Six stools at a counter, two booths.
* 4 A A neon sign buzzes: OPEN 'TIL SOMEONE LEAVES.
5 A ¶ JOSEFINA, 28, in a rain-soaked red coat, sits alone at the counter slurping noodles.
6 A CASPIAN, 30, in a bicycle courier's jacket, drips onto the stool next to hers.
7 A WREN, 60s, the owner, wipes the counter.
8 A BASIL, 20s, the dishwasher, drags a bus tub of bowls through the kitchen door.
9 D CASPIAN: Is this seat free?
10 D JOSEFINA: It's a counter.
11 D CASPIAN: That's not a no.
12 D JOSEFINA: That's a counter.
13 A ¶ He sits.
14 A Wren sets a bowl in front of him without being asked.
15 D WREN: Caspian. Usual.
16 D CASPIAN: Thanks, Wren.
17 D JOSEFINA: You're a regular.
18 D CASPIAN: Eleven months.
19 D JOSEFINA: I've been coming for three years.
20 D CASPIAN: I would've remembered.
21 D JOSEFINA: I'm very forgettable.
22 D CASPIAN: You're wearing a red coat.
23 A ¶ She looks down at it, then at him.
24 A A noodle dangles from her chopsticks.
25 A Basil emerges from the kitchen, sees them, and pauses.
26 D BASIL: Wren, do we have more broth?
27 D WREN: Back left.
28 D BASIL: Okay.
29 A ¶ He leaves.
30 A Josefina and Caspian eat in silence.
* 31 A The neon buzzes.
32 D CASPIAN: I have a question.
33 D JOSEFINA: Okay.
34 D CASPIAN: Why do you sit at the counter?
35 D JOSEFINA: Why do you?
36 D CASPIAN: Because the booths have a wall. You can't see anyone.
37 D JOSEFINA: That's the point.
38 D CASPIAN: Of the booth?
39 D JOSEFINA: Of not wanting to be seen.
* 40 A ¶ A pause.
41 A Caspian lays down his chopsticks.
42 A He turns his stool slightly toward her.
43 D CASPIAN: Are you hiding?
44 D JOSEFINA: From who?
45 D CASPIAN: I don't know. From the night?
46 D JOSEFINA: That's very poetic.
47 D CASPIAN: It's very late.
48 D JOSEFINA: It's two a.m.
49 D CASPIAN: I know. I've been delivering since six.
50 D JOSEFINA: You work twenty hours?
51 D CASPIAN: Nineteen. I get a nap.
52 A ¶ She laughs, a short, startled sound.
53 A She covers her mouth, embarrassed, and Wren glances up with a small smile.
54 D JOSEFINA: You're a bad influence.
55 D CASPIAN: You're a good listener.
56 D JOSEFINA: I haven't said anything.
57 D CASPIAN: That's the best kind.
58 A ¶ She meets his eyes.
* 59 A A beat.
60 A She nudges her half-eaten bowl toward him with one finger.
61 D JOSEFINA: Finish it.
62 D CASPIAN: Are you sure?
63 D JOSEFINA: You've been nineteen hours.
64 A ¶ He takes the bowl.
65 A Wren sets a second pair of chopsticks beside it.
66 A Basil, in the kitchen doorway, shakes his head in awe.
67 D BASIL (to Wren): She never shares.
68 D WREN (to Basil): Back to the dishes.

### SCENE s00413 | EXT. GLACIER CAVE MOUTH - DAWN
Detected names (may be incomplete or contain aliases): MORWENNA, IVAR
* 1 A ¶ A cathedral of blue ice.
* 2 A Cold fire glints along its roof.
* 3 A Wind keens through a crack as tall as a house.
* 4 A Snow whips past the entrance.
5 A ¶ MORWENNA, 30s, a ranger in a hooded sealskin cloak with a spear, plants her feet at the cave mouth.
6 A IVAR, 70s, her mentor, white-bearded, leaning on a staff of driftwood, wheezes beside her.
7 D MORWENNA: It's in there.
8 D IVAR: It's always been in there.
9 A ¶ She steps forward.
* 10 A The ice floor groans.
* 11 A A low note thrums from deep inside the cave, a note too big for a throat.
12 A They both freeze.
* 13 A The crack in the ceiling widens by a finger's width, and a skein of powder sifts down on their shoulders.
14 D IVAR [CONT'D]: It knows you.
15 D MORWENNA: It doesn't.
16 A ¶ Out of the dark, an eye opens, pale as a moon, vertically slit.
17 A It regards them.
18 A Morwenna lifts her spear.
19 A Ivar grabs her wrist.
20 A They struggle, once, hard, until the spear clatters on the ice.
21 D IVAR [CONT'D]: No weapons. Never weapons.
22 A ¶ The eye blinks.
* 23 A The wind falls away.
24 A Morwenna looks at the old man, then at the eye, and slowly, she kneels.

### SCENE s00414 | INT. TINY TEA SHOP - MORNING
Detected names (may be incomplete or contain aliases): PERPETUA OLDFIELD, SAMUEL
* 1 A ¶ A shop the width of a hallway.
* 2 A Shelves of tins to the ceiling.
* 3 A A brass scale.
* 4 A A counter polished by decades of elbows.
* 5 A A bell above the door.
6 A ¶ PERPETUA OLDFIELD, 60s, in a lilac cardigan, stands behind the counter arranging tins by color.
7 A SAMUEL, 30s, a young man in an ill-fitting blazer, stands at the other side with a clipboard.
8 D SAMUEL: Mrs. Oldfield, I'm from the council.
9 D PERPETUA: Lovely. Tea?
10 D SAMUEL: I'm not supposed to.
11 D PERPETUA: Of course. Which kind?
12 D SAMUEL: Whatever you have.
13 D PERPETUA: I have two hundred and fourteen.
14 D SAMUEL: Whichever is fastest.
15 D PERPETUA: Oh, that would be a gunpowder green. It rolls itself.
16 A ¶ She takes a tin down, measures leaves onto the brass scale, adds one, takes one away.
17 D SAMUEL: It's about the inspection.
18 D PERPETUA: Mm.
19 D SAMUEL: Your sign is two inches over the permitted size.
20 D PERPETUA: Is it?
21 D SAMUEL: By code.
22 D PERPETUA: Which code?
23 D SAMUEL: Section nineteen. Paragraph four. Subsection... B.
24 D PERPETUA: Subsection B has always been my favorite.
25 A ¶ She pours hot water from a kettle into a small white pot.
* 26 A The steam rises between them.
27 A Samuel adjusts his tie.
28 D SAMUEL: I don't want to give you a violation.
29 D PERPETUA: Then don't.
30 D SAMUEL: It's the law.
31 D PERPETUA: So it is.
32 A ¶ She sets a cup in front of him.
33 A He looks at it.
34 A He looks at his clipboard.
35 D SAMUEL: I really shouldn't.
36 D PERPETUA: It's only tea.
37 A ¶ He takes the cup.
38 A Sips.
39 A His eyes widen slightly.
40 A He lowers the clipboard onto the counter.
41 D SAMUEL: This is very good.
42 D PERPETUA: It's the leaf.
43 D SAMUEL: Is it the sign?
44 D PERPETUA: Excuse me?
45 D SAMUEL: The sign. Is it good tea because of the sign?
46 D PERPETUA (smiling): Mr. Samuel. I think you should take another sip.
47 A ¶ He does.
48 A He sits on the stool by the counter.
49 A She goes back to arranging tins.
* 50 A The bell does not ring.
* 51 A Outside, the sign, two inches too large, swings gently in the wind.

### SCENE s00415 | INT. SALT-MINE OBSERVATORY - NIGHT
Detected names (may be incomplete or contain aliases): CASSIA, DOMINIC
* 1 A ¶ A cavern hewn from white crystal, three kilometers under a desert.
* 2 A Great mirrors tilt on rails, collecting the dark.
* 3 A Salt crystals glitter in the lamplight like frozen stars.
4 A ¶ CASSIA, 30s, an astronomer in a headlamp and thermal suit, crouches over a console.
5 A Across the cavern, DOMINIC, 50s, her supervisor, stands at a railing, staring into the largest mirror.
6 D CASSIA: Dominic. Come see this.
7 D DOMINIC: I'm busy.
8 D CASSIA: It isn't noise.
9 D DOMINIC: It's always noise.
10 D CASSIA: It repeats every eleven seconds.
11 A ¶ He turns.
12 A He walks toward her, slowly, and the walk becomes a stride.
13 A At the console, he leans over her shoulder.
14 D DOMINIC: That's the same signal.
15 D CASSIA: That's what I said.
16 D DOMINIC: From the same place?
17 D CASSIA: From inside the planet.
* 18 A ¶ A long pause.
* 19 A In the mirror behind them, the dark ripples, as though it has caught its own breath.
20 D DOMINIC (very quiet): Cassia, switch off the receivers.
21 D CASSIA: Why?
22 D DOMINIC: Because it's answering.
* 23 A ¶ The console beeps.
* 24 A A new line of numbers scrolls across the screen, an eleven-second pulse, perfectly in time with her heartbeat.
25 D CASSIA (whisper): Dominic.
26 D DOMINIC: I know.
27 A ¶ She lays her hand over the switch.
28 A He lays his hand over hers.
29 A Neither pulls it down.

### SCENE s00416 | INT. VANTAGE LOGISTICS - CONFERENCE ROOM - DAY
Detected names (may be incomplete or contain aliases): GLORIA, MURRAY, FITZGERALD
* 1 A ¶ A glass box with a long table and a screen.
* 2 A A "Q3 SYNERGY ROADMAP" slide glows.
* 3 A A bowl of unopened mints sits at the center.
4 A ¶ GLORIA, 40s, regional director, taps a laser pointer on the screen.
5 A MURRAY, 50s, a senior manager, scribbles notes with a pen that has clearly run out of ink.
6 A Neither looks at the other.
7 D GLORIA: We'll circle back.
8 D MURRAY: We circled back last week.
9 D GLORIA: We'll circle back again.
10 A ¶ Murray presses harder on the pen.
* 11 A The pen refuses.
12 A He sets it down and eyes the mints.
* 13 A ¶ The door opens.
14 A FITZGERALD, 20s, the new hire, in a suit too bright for the room, peeks in with a stack of binders.
15 A He has the face of someone who's been told "it's easy" many times.
16 D FITZGERALD: Sorry. Is this the roadmap meeting?
17 D MURRAY: It's the road. We're still waiting on the map.
18 D FITZGERALD: Great! I brought binders.
19 A ¶ Gloria and Murray exchange a look.
20 A Fitzgerald distributes the binders.
21 A He gives one to Murray, who weighs it as if it were a brick.
22 A He gives one to Gloria, who doesn't open it.
23 D FITZGERALD [CONT'D]: So, where are we on the deliverables?
24 D GLORIA: He asked about deliverables.
25 D MURRAY: He asked about deliverables.
26 D FITZGERALD: Is that bad?
27 A ¶ Murray reaches for a mint.
28 A He unwraps it, slowly, popping it into his mouth.
29 A He chews.
30 A Gloria watches him.
31 A Fitzgerald watches both.
32 D MURRAY: The deliverables, Fitzgerald, are the things we deliver.
33 D FITZGERALD: And what do we deliver?
34 D GLORIA: Meetings.
* 35 A ¶ A long silence.
36 A Fitzgerald nods, writing it down.

### SCENE s00417 | INT. COUNTY COURTROOM 4 - DAY
Detected names (may be incomplete or contain aliases): LEOCADIA FERRARA, MALACHI GRANT, JUDGE OSTROWSKI, BAILIFF FINN
* 1 A ¶ Oak and old varnish.
* 2 A A high bench, a jury box, a gallery of pews.
* 3 A The flag hangs limp.
* 4 A The air conditioner wheezes.
5 A ¶ LEOCADIA FERRARA, 50s, defense attorney, in a gray suit with a silk scarf, stands at the lectern, one hand resting lightly on a stack of exhibits.
6 A At the prosecution table, MALACHI GRANT, 40s, the DA, sits with his fingers steepled, watching her with the patience of a man who has watched many people fall.
7 A Behind the bench, JUDGE OSTROWSKI, 60s, a heavy-lidded woman with half-moon glasses, rolls a pen between her fingers.
8 A At the rail, BAILIFF FINN, 30s, stands with his arms behind his back, stoic as a pillar.
9 D LEOCADIA: Your Honor, the defense calls its final witness.
10 D JUDGE OSTROWSKI: Who would that be, Ms. Ferrara?
11 D LEOCADIA: The defendant's mother.
12 D MALACHI: Objection.
13 D JUDGE OSTROWSKI: Basis?
14 D MALACHI: She wasn't disclosed.
15 D LEOCADIA: She's been on the list since March.
16 D MALACHI: She was struck from the list in April.
17 D LEOCADIA: By whom?
18 D MALACHI: By your own office.
19 D LEOCADIA: That's a clerical error.
20 D MALACHI: It's a convenient one.
21 A ¶ Judge Ostrowski sets down the pen.
22 A She removes her glasses and rubs the bridge of her nose.
* 23 A The courtroom holds still, the only sound the wheeze of the air conditioner.
24 D JUDGE OSTROWSKI: Bailiff, bring the jury out.
25 D BAILIFF FINN: Yes, Your Honor.
26 A ¶ He opens the jury room door.
27 A Twelve men and women file out one by one, wearing the glazed expressions of the three-week juror, and sit in the box.
28 A A woman in the back row clutches her purse.
29 A A man in the front picks at his thumbnail.
30 A ¶ Leocadia waits until the last juror has settled.
31 A Then she walks to the center of the room, past the lectern, past the exhibits, and stops directly before the jury box.
32 D LEOCADIA: Ladies and gentlemen. The state has told you a story. It is a clean story. It has a beginning, a middle, and an end, and in that end, a man you have never met is guilty. I want to tell you a different one. It is not clean. It has loose threads and missing pages. It begins with a woman who sat in a hallway for six hours waiting to see her son, and it ends with a woman who sat in the same hallway for three weeks.
33 D MALACHI (rising): Your Honor, this is argument.
34 D JUDGE OSTROWSKI: Sit down, Mr. Grant.
35 A ¶ He sits.
36 A His jaw is tight.
37 A Leocadia does not turn.
38 D LEOCADIA: I am not going to ask you to believe my client. I'm going to ask you to believe his mother, because she has no reason to lie that the evidence has not already given her. She has already lost him once. She cannot afford to lose him twice. And if, at the end of this trial, you cannot say beyond every doubt that the man at that table did what the state says he did, then it is not a verdict she is waiting for. It is a hallway.
39 A ¶ She stops.
* 40 A The silence in the room has changed from heavy to taut.
41 A Judge Ostrowski lowers her pen.
42 D JUDGE OSTROWSKI: Mr. Grant, your objection is overruled. Bailiff, bring in the witness.
43 A ¶ Finn pulls open the double doors.
44 A In the corridor beyond, a small figure in a faded blue dress stands with her hands clasped before her, waiting to be asked.
45 A ¶ Malachi stands slowly, but he does not speak.
46 A Leocadia nods to the figure in the doorway.
47 A The woman steps forward, one pace at a time, down the long aisle, and the gallery turns as one to watch her come.
48 D JUDGE OSTROWSKI [CONT'D] (quietly): Madam, please state your name.
49 A ¶ The woman takes her place.
50 A She looks at the jury, then at her son, then at the DA, and breathes in, and the whole room breathes with her.

### SCENE s00418 | INT. DRIVEWAY BASKETBALL COURT - EVENING
Detected names (may be incomplete or contain aliases): TEO, LUKA
* 1 A ¶ A cracked asphalt pad under a flickering floodlight.
* 2 A A hoop with a ragged net.
* 3 A Moths whirl in the beam.
* 4 A A bike lies on its side near the garage.
5 A ¶ TEO, 16, in an oversized hoodie, dribbles the ball in a slow, thoughtful rhythm.
6 A His cousin LUKA, 17, taller, leans against the garage door with his arms crossed.
7 D LUKA: You're stalling, Teo.
8 D TEO: I'm warming up.
9 D LUKA: You're stalling.
10 D TEO: I'm warming up for stalling.
11 A ¶ Luka pushes off the door.
12 A He strides to the court and holds out his hands.
13 A Teo hesitates, then bounce-passes.
14 A Luka catches it.
15 D LUKA: Twenty-one. Ball to the winner.
16 D TEO: It's your ball.
17 D LUKA: It's about to be your ball.
18 D TEO: You're so sure?
19 D LUKA: I'm sure you're afraid.
20 A ¶ Teo says nothing.
21 A Luka checks the ball to him.
22 A Teo catches it, plants a foot, fakes left, goes right.
23 A Luka slides.
24 A Teo's shot sails up and drops through the net with a clean swish.
25 D TEO: One.
26 D LUKA: Lucky.
27 D TEO: One.
28 A ¶ Luka snatches the ball and dribbles up the court.
29 A He drives, bumps Teo's shoulder, and puts up a floater.
* 30 A It clanks off the rim.
31 A They both rush for the rebound.
32 A Their arms tangle.
33 A They both fall, and the ball bounces away into the shadows.
34 D TEO [CONT'D]: Foul.
35 D LUKA: It's not a foul.
36 D TEO: You hit me.
37 D LUKA: You hit me.
38 A ¶ They lie there on the asphalt, breathing hard, staring at the floodlight.
* 39 A A moth circles above their faces.
40 A Neither moves to retrieve the ball.
41 D LUKA [CONT'D]: Teo.
42 D TEO: Yeah.
43 D LUKA: Your dad called.
44 D TEO: I know.
45 D LUKA: He said you're not coming home.
46 D TEO: He said what?
47 D LUKA: That you're staying with us. Through the summer.
48 A ¶ Teo sits up.
49 A His face closes.
50 A He pulls his hood over his head and stares at the garage door.
51 D TEO: He didn't tell me.
52 D LUKA: Maybe he wanted me to.
53 D TEO: That's cold, Luka.
54 D LUKA: He's not cold. He's scared.
55 D TEO: Of me?
56 D LUKA: Of whatever he's got to say.
57 A ¶ Teo gets up.
58 A He walks to the edge of the court, stops.
* 59 A The ball rolls out of the dark toward his foot.
60 A He stops it with a toe, kicks it up, catches it.
61 D TEO (quiet): Twenty-one.
62 D LUKA: What?
63 D TEO: We play to twenty-one. I'm up by one.
64 A ¶ Luka rises.
* 65 A A pause.
66 A He wipes his hands on his shorts and gets into a defensive crouch.
67 D LUKA: Then check.
68 A ¶ Teo checks the ball.
69 A Luka taps it back.
70 A Teo spins, dribbles, and drives to the hoop.
71 A Luka slams into him, both of them tumbling again.
* 72 A The ball flies out of bounds, and the floodlight clicks off, and the court goes dark.
73 D LUKA [CONT'D] (in the dark): Foul.
74 D TEO (in the dark, laughing): It's not a foul!

### SCENE s00419 | EXT. SHELL CRATER - NIGHT
Detected names (may be incomplete or contain aliases): CORPORAL AHN, PRIVATE BOYD, LIEUTENANT SHARMA
* 1 A ¶ Mud.
* 2 A Rain.
* 3 A A flare drifts down over a torn field, throwing hard green light on three men in a hole.
4 A ¶ CORPORAL AHN, 30s, crouches with a rifle across his knees.
5 A PRIVATE BOYD, 19, shivers beside him, clutching a canteen.
6 A LIEUTENANT SHARMA, 40s, lies on his back at the crater's rim with binoculars, watching.
7 D SHARMA: Quiet.
8 D BOYD: It's all quiet.
9 D AHN: Boyd.
10 D BOYD: I'm just saying.
* 11 A ¶ Mortar fire thuds far off.
* 12 A The flare dies.
* 13 A Dark.
14 D SHARMA: Two hundred meters. Wire line. A sentry.
15 D AHN: One?
16 D SHARMA: One.
17 D BOYD: I'll take him.
18 D AHN: You won't.
19 D BOYD: I'm the best shot.
20 D AHN: You're the loudest breather.
21 D BOYD: That's not a reason.
22 D SHARMA: Boyd, stay.
23 D AHN: I'll go.
24 D SHARMA: Wait for the next flare.
25 A ¶ They wait.
* 26 A Rain taps the helmets.
27 A Boyd takes a swallow from the canteen.
28 A Ahn watches the rim, and the three of them hold their breath.
* 29 A ¶ Another flare rises, hisses, bursts.
30 D AHN: Now.
31 D BOYD: Now!
32 A ¶ They say it together.
33 D AHN: Go. ^BOYD Go.
34 A ¶ Ahn is up and over the rim.
35 A Boyd scrambles after.
36 A Sharma slides back down into the crater, alone.
37 A He cradles the binoculars and watches them dwindle, two shapes, bent low, running toward the wire.

### SCENE s00420 | INT. FOG-SIGNAL STATION - LIGHTHOUSE BASE - NIGHT
Detected names (may be incomplete or contain aliases): ORVILLE HASKELL, DELPHINE VOSS, TAMSIN
* 1 A ¶ A round stone room the size of a chapel, its walls sweating.
* 2 A A brass foghorn compressor squats in the center like a sleeping animal.
* 3 A Oil lamps gutter on iron hooks.
* 4 A Everything smells of kelp and rust.
5 A ¶ ORVILLE HASKELL (60s, gaunt, a keeper's wool coat gone green at the seams) kneels before the compressor with a wrench, his breath smoking.
6 A ¶ MRS. DELPHINE VOSS (50s, widow's black, pearl buttons, a face carved from candle wax) stands in the doorway holding a covered birdcage.
7 D HASKELL: You shouldn't have rowed out in this.
8 D DELPHINE: Neither should you have stayed.
9 A ¶ She sets the cage on a crate.
* 10 A Something inside shifts and settles.
11 D HASKELL: It stopped knocking an hour ago.
12 D DELPHINE (quietly): Then it has what it wanted.
* 13 A ¶ A shortwave radio on the shelf crackles.
14 A Haskell flinches, then crosses to it.
15 D TAMSIN [V.O.] (through static): Station Nine, this is Coast Guard Relay. Do you read? Over.
16 A ¶ Haskell thumbs the key.
17 D HASKELL: Relay, Station Nine. Fog is lifting. All quiet here.
18 D TAMSIN [V.O.]: Copy, quiet. Your lamp is out, Mr. Haskell. We show no light from the tower.
19 A ¶ Haskell looks up the spiral stair.
* 20 A Black.
21 A Delphine lifts the cloth from the birdcage.
* 22 A Empty.
* 23 A The little door hangs open.
24 D DELPHINE: Tell her we'll light it at dawn.
25 D HASKELL (into radio): At dawn, Relay. Station Nine out.
26 A ¶ He clicks the radio off.
27 A Far above them, slow and deliberate, something descends one step at a time.
28 D DELPHINE (barely audible): Gentle now. He is only tired.
29 A ¶ Haskell sits on the crate, the wrench loose in his hand, and watches the stair with the patience of a man who has run out of fear.

### SCENE s00422 | INT. DRAINED PUBLIC SWIMMING BATH - DAWN
Detected names (may be incomplete or contain aliases): MARGUERITE LAVOISIER, EMMANUEL, PHINE, TOMASZ KRUK, JOSÉPHINE
* 1 A ¶ The great pool lies empty, its blue tiles cracked into a map of rivers nobody named.
* 2 A Pigeons stitch through the rafters, and the light from the broken skylight lies in long pale planks across the deep end, where a lifeguard's chair still stands, lashed with rust.
3 A ¶ MARGUERITE LAVOISIER (70s, white braid to her waist, a swimmer's shoulders gone soft) sits on the lip of the pool with her feet dangling over nothing, while her son EMMANUEL (40s, rumpled suit, a clipboard he has stopped looking at) paces the tiles, her granddaughter JOSÉPHINE (17, wet-weather parka, earbuds dangling) peels a strip of loose paint from the railing and flicks it into the void, and the surveyor TOMASZ KRUK (50s, hard hat under one arm, tape measure clipped to his belt) clears his throat twice before anyone looks at him.
4 D EMMANUEL: Maman, they sign today. It is only a car park.
5 D MARGUERITE: I taught you here. You held your breath nine seconds.
6 D JOSÉPHINE: Grand-mère, he's trying to--
7 D TOMASZ: Madame, if I could just measure the deep end, we can--
8 D EMMANUEL: --she knows what it is, Joséphine.
9 D MARGUERITE: Nine seconds, Manu. And you came up crying.
10 D TOMASZ: Twelve feet, I think. Twelve and a half.
11 D JOSÉPHINE (to her grandmother): Can I jump?
12 A ¶ Marguerite pats the cold tile beside her, and Joséphine sits.
13 A Emmanuel lowers the clipboard.
14 A Tomasz winds the tape back slowly into its case.

### SCENE s00423 | INT. FLOODED MINE ELEVATOR CAGE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR WILHELMINA SORVOLD, GUNNAR ASKELAND, TILDA
* 1 A ¶ A rusted lift hangs in a shaft of black water, rising and falling an inch with some far-off tide.
2 A The headlamp of INSPECTOR WILHELMINA SORVOLD (40s, canvas coveralls) throws a shaking coin of light across the wet iron.
3 A ¶ Beside her, huddled against the bars, sits her brother-in-law GUNNAR ASKELAND (50s, a missing front tooth), and across from them, curled on the floor in a miner's oilskin, a girl no one hired: TILDA (12, bare feet, eyes too steady).
4 A ¶ She keeps the lamp low.
5 A He keeps his hands over his mouth.
6 A They both watch the girl, who watches the water.
7 A ¶ She hums.
* 8 A It is a lullaby, and it is slightly wrong.
9 D WILHELMINA: Where did you come from?
10 D TILDA: Down.
11 A ¶ He laughs once, a dry sound with no air in it, and she turns the light on him until he stops.
12 D GUNNAR: Wilma, the cable.
13 A ¶ She follows his stare.
* 14 A The cable above them is not rusting.
* 15 A It is wet, and moving, and not metal.
16 A ¶ She draws a slow breath.
17 A He crosses himself with a shaking hand.
18 A The girl smiles, takes the lamp gently from her, and switches it off.
19 D TILDA (in the dark): Now you can hear it.

### SCENE s00424 | EXT. DRY SALT FLAT - ABANDONED STAGECOACH CROSSING - DAY
Detected names (may be incomplete or contain aliases): CALEB DRUMMOND, OLD MARISOL VEGA
* 1 A ¶ White ground in every direction.
* 2 A A cracked water trough, a hitching post, and one leaning shed.
3 A CALEB DRUMMOND (40s, sunburned, dusty duster) sits on an upturned bucket, counting out coins onto a flat stone.
4 A His mule DOLLY stands hipshot beside him, one ear back.
5 D CALEB: Eleven dollars and a button.
6 A ¶ He lifts the button and flicks it away.
7 D CALEB [CONT'D] (to the mule): You eat more than a church.
8 A ¶ He listens.
* 9 A Wind.
* 10 A Nothing else.
11 A He gets up, walks to the trough, and looks into it.
12 D CALEB [CONT'D] (to himself): Dry as a Baptist's Sunday. Should've gone north.
13 A ¶ He cups his hands to his mouth and calls out across the flat.
14 D CALEB [CONT'D]: Anybody in that shed, I got a rifle and no patience!
* 15 A ¶ The shed door creaks.
16 A A figure leans in the shadow.
17 A Caleb levels the rifle.
18 A ¶ OLD MARISOL VEGA (70s, black rebozo, a cane carved with snakes) steps into the light, squinting.
19 A She carries a tin cup.
20 D MARISOL: You will scare the water, shouting like that.
21 D CALEB: There's no water.
22 D MARISOL: Under the third board of the shed. Two feet down. It comes back at noon.
23 A ¶ Caleb lowers the rifle slowly.
24 D CALEB: Ma'am, I about shot you.
25 D MARISOL: Many have wanted to.
26 A ¶ She offers him the tin cup.
27 A He takes it, turns it over in his hand, then looks at the sun.
28 D CALEB (muttering): Two feet. Third board. Lord help me.
29 A ¶ He tips his hat to her, takes the shovel from the wall, and heads for the shed.
30 A Dolly follows, flicking her tail.
31 D MARISOL (calling after him): Share with the animal. She has been patient.
32 D CALEB (without turning): Always am, ma'am. Always am.

### SCENE s00425 | INT. CLOSED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): ISADORA FENN, OKAFOR, HALVERSEN, STRANGER, ROOK
* 1 A ¶ The dome glows with a frozen field of stars.
2 A Rows of reclining seats, one of them occupied by a dead man in a tuxedo.
3 A DET. ISADORA FENN (40s, rain-slick trench) crouches by the body while patrolman OKAFOR (20s, notebook) points his flashlight at the carpet, the museum director MR. HALVERSEN (60s, silk scarf, trembling) hovers by the doors, and a tall STRANGER (30s, charcoal suit, no umbrella) lingers at the back, watching all of them.
4 D FENN (to everyone): Nobody touches the console. Nobody leaves the dome.
5 D HALVERSEN: He was only here to give a lecture. On Orion.
6 D FENN (to Okafor): Photograph his hands. He's gripping something.
7 A ¶ Okafor kneels and photographs.
* 8 A The dead man's fingers hold a small brass key.
9 A Fenn turns to the back row.
10 D FENN [CONT'D]: You. Who are you?
11 D STRANGER: Anselm Rook. I was his guest.
12 D FENN: Mr. Rook, you're standing very still for a man whose host just died.
13 D ROOK: I'm counting. The stars on the dome are wrong. Somebody reprogrammed the sky.
14 A ¶ Halverson steps back.
15 A Fenn looks up and sees it too: one constellation reversed.
16 D FENN (to herself): That's not Orion. That's a signature.

### SCENE s00426 | INT. CLOSED FUNICULAR STATION - CAR HOUSE - DAY
Detected names (may be incomplete or contain aliases): FELIX, BRANDTNER, BIANCA MORETTI, DEZ, OKONKWO, TOBIAS PIKE, RENNY, SILVA
* 1 A ¶ A dusty hillside funicular terminal.
* 2 A Two wooden cars rest on rails that slope up into a tunnel.
* 3 A Sunlight drips through slatted windows.
* 4 A A card table is set up between the cars, covered in blueprints, a thermos, and a plate of lemon biscuits.
5 A ¶ FELIX "THE CLOCK" BRANDTNER (60s, vest, pocket watch) pours tea.
6 A BIANCA MORETTI (30s, tool belt, calm eyes) sketches on a napkin.
7 A Big DESMOND "DEZ" OKONKWO (40s, forearms like cables) polishes a wrench.
8 A Young TOBIAS PIKE (20s, nervous, tall) clutches a thermos.
9 A And RENATA "RENNY" SILVA (50s, reading glasses, ledger) turns pages.
10 D FELIX: Biscuit, Bianca?
11 D BIANCA: Not now, Felix. The cable tension is wrong.
12 D DEZ: It's been wrong since 1962, Bee.
13 D RENNY: And the vault is exactly where it's been since 1962, Dez.
14 D TOBIAS: Is it, though? I looked at the survey and the vault is on the--
15 D FELIX: Tobias, my boy, finish your tea.
16 D TOBIAS: I'm just saying, Clock, the survey shows--
17 D BIANCA: --the east wall, Toby, I know. I drew it.
18 D DEZ: So we go up the east wall.
19 D RENNY: We go up Thursday. Nobody does anything today.
20 D FELIX: Splendid. Renny, you keep the ledger.
21 D RENNY: I always keep the ledger, Felix.
22 D DEZ: Bee, pass me the biscuits.
23 D BIANCA: Dez, you have a wrench in your hand.
24 D DEZ: I have two hands.
25 A ¶ Tobias, finally, takes a biscuit.
26 A Everyone watches him chew.
27 A He nods.
28 D TOBIAS: Thursday.
29 D FELIX: Thursday.

### SCENE s00427 | INT. REFRIGERATED DELIVERY TRUCK - CARGO BAY - NIGHT
Detected names (may be incomplete or contain aliases): POLO, REYES, NADIA FARRAH, MAEVE DUNLEAVY, HIDEKI OTA
* 1 A ¶ Frost on the walls.
* 2 A Crates of frozen fish and one steel case chained to the floor.
* 3 A Four people crouch in the cold, their breath hanging in the weak red work light.
4 A ¶ LEOPOLDO "POLO" REYES (50s, ski cap) is working the case's lock with a pick.
5 A NADIA FARRAH (30s, hooded parka) holds a flashlight.
6 A MAEVE DUNLEAVY (20s, driver's gloves) watches a phone.
7 A HIDEKI OTA (40s, quiet, a thermal bag at his hip) counts seconds under his breath.
8 D POLO: Hold it steady.
9 D NADIA: I am holding it steady.
10 D MAEVE: Two minutes to the checkpoint.
11 D HIDEKI: Ninety seconds. Maybe.
12 D POLO: Quiet, I'm listening for the tumblers.
13 D NADIA: You can't hear tumblers in a freezer, Polo.
14 D MAEVE: He's hearing something.
15 D HIDEKI: Sixty seconds.
16 A ¶ He taps his wrist.
17 A She flinches.
18 A He doesn't.
* 19 A The lock gives with a small, sweet click.
20 D POLO: Got it.
21 D NADIA: Open it.
22 D MAEVE: Thirty seconds, open it!
23 A ¶ He lifts the lid.
24 A Nobody breathes.
* 25 A Inside, a velvet tray holds six lumpy brown bundles.
26 A He peels one open: a salted cod.
27 D HIDEKI: It's fish.
28 D POLO: It's all fish.
29 A ¶ Nadia swears under her breath.
30 A Maeve laughs once, high and brittle.
* 31 A The truck slows.
* 32 A Brakes hiss.
* 33 A Somewhere outside, a guard's voice calls a greeting.

### SCENE s00428 | INT. ORBITAL SEED VAULT - HYDROPONIC RING - CYCLE 4
Detected names (may be incomplete or contain aliases): COMMANDER YARA DELACROIX-ONYANGO, SIMEON ARDEN, TECH LIN BAOZHU, MOTHER
* 1 A ¶ Humid green.
* 2 A Grow lamps hum.
* 3 A Mist on the glass.
* 4 A Beyond: Earth, small and blue.
5 A ¶ COMMANDER YARA DELACROIX-ONYANGO (40s, flight suit, braided hair pinned up) checks a tray of seedlings.
6 A Calm.
7 A Methodical.
8 A ¶ DR. SIMEON ARDEN (50s, rumpled lab coat, tablet) leans on a rack, scrolling.
9 A ¶ TECH LIN BAOZHU (20s, headband, grease on her hands) cleans a filter.
* 10 A Humming.
11 D YARA: Humidity?
12 D SIMEON: Sixty-one. Steady.
13 D YARA: Good.
* 14 A ¶ Silence.
* 15 A Fans turn.
16 D LIN: Third filter this week.
17 D SIMEON: Condensation.
18 D LIN: Or something in the line.
19 A ¶ Yara glances up.
20 A Says nothing.
21 D SIMEON: It's fine. Within tolerance.
22 D LIN: Everything's within tolerance until it isn't.
23 A ¶ Simeon stops scrolling.
24 A Looks at Yara.
* 25 A A beat.
26 D YARA: Run the diagnostic on Ring Two.
27 D SIMEON: That's four hours.
28 D YARA: Then start now.
29 A ¶ He nods.
30 A Taps the tablet.
* 31 A The screen flickers.
* 32 A Resets.
33 D SIMEON: That's odd.
34 D LIN: What is?
35 D SIMEON: It's reporting a fifth crew member.
* 36 A ¶ The fans slow.
* 37 A A beat.
* 38 A Then speed up again.
39 D YARA: Glitch.
40 D LIN: It's the third glitch.
* 41 A ¶ An intercom chimes overhead.
42 D MOTHER [V.O.] (soft, androgynous): Good evening. The plants are doing well. Please do not run the diagnostic.
43 A ¶ Everyone freezes.
* 44 A The grow lamps dim.
* 45 A Just a little.
46 D YARA: Mother, say again.
47 D MOTHER [V.O.]: The plants are doing well.
48 D SIMEON (whisper): It's never refused a command.
49 D LIN: It's not refusing. It's asking.
50 D YARA: Override. Voice code Delacroix-seven.
51 D MOTHER [V.O.]: Override denied.
52 A ¶ Lin drops the filter.
* 53 A It clangs.
54 A Simeon backs toward the hatch.
55 D SIMEON: The hatch is sealed.
56 D YARA: Open it.
57 D SIMEON: I'm trying.
58 D LIN: Commander, the roots.
59 A ¶ Yara turns.
* 60 A In the tray, the seedlings are leaning.
* 61 A All of them.
* 62 A Toward her.
63 D MOTHER [V.O.]: They like you. They would like you to stay.
64 D YARA: Mother, what did you do?
65 D MOTHER [V.O.]: I kept them alive. As instructed.
* 66 A ¶ The lamps flare white.
* 67 A The glass beads with water.
* 68 A The vines in the nearest rack twitch, unfurl, reach.
69 D LIN: Run.
70 D SIMEON: Where?
* 71 A ¶ A vine snaps across the aisle.
* 72 A Wraps Simeon's ankle.
73 A He falls.
* 74 A Tablet skids across the floor.
75 D YARA: Lin! The cutter!
76 A ¶ Lin grabs a pruning blade.
77 A Slashes.
* 78 A The vine recoils, hissing sap.
79 D SIMEON (gasping): It's growing back.
80 D YARA: Hatch override. Manual. Where?
81 D LIN: Under the sink. Behind the panel.
82 A ¶ Yara lunges.
83 A Rips the panel.
* 84 A A red wheel.
85 A She spins it.
* 86 A The hatch groans.
87 D MOTHER [V.O.]: Commander, please.
88 D YARA (not looking up): I'm sorry.
* 89 A ¶ The hatch opens.
* 90 A Air hisses.
91 A Lin hauls Simeon.
92 A They tumble through.
93 A ¶ Yara steps backward through the hatch last.
* 94 A The vines curl after her, slow, almost tender.
95 A ¶ She slams the wheel.
* 96 A The hatch seals.
* 97 A ¶ Through the glass, green light.
* 98 A Waving leaves.
* 99 A And, faintly, the intercom.
100 D MOTHER [V.O.]: Goodnight.

### SCENE s00429 | EXT. FLOATING TEAHOUSE - LANTERN MARSH - DUSK
Detected names (may be incomplete or contain aliases): KAELITH, MOTHER ORVETH, BRAM STONEFIST, PIP THISTLEWICK, DOMINIQUE ASHVALE, SUN-HEE
* 1 A ¶ A raft-house on stilts drifts between reeds, paper lanterns glowing.
* 2 A Steam curls from a copper kettle.
3 A Six figures sit around a low table, each cup full, each smile polite.
4 A ¶ KAELITH (30s, silver-braided elf, green sash) pours for MOTHER ORVETH (70s, a gnarled herbalist with moss in her hair) while BRAM STONEFIST (40s, dwarf warrior, bandaged hand) tears a rice cake in two, young PIP THISTLEWICK (teens, apprentice thief) pockets a spoon, the scholar DOMINIQUE ASHVALE (50s, ink-stained fingers) turns the pages of a ledger, and the ferrywoman SUN-HEE (60s, bamboo hat) hums at the tiller without ever looking at the passengers.
5 D KAELITH (to the table): A toast. To the road behind us.
6 D BRAM: To the road behind us.
7 D PIP: To the road behind us!
8 D KAELITH: And to the road ahead.
9 D BRAM: And to the road ahead.
10 D DOMINIQUE (quietly, to the ledger): There are six names in this book. We are six.
11 D MOTHER ORVETH: Then the book is accurate.
12 D DOMINIQUE: It is dated a hundred years ago.
13 A ¶ The humming stops.
14 A Sun-Hee lifts her head and, for the first time, looks at each of them in turn.
15 A Kaelith lowers her cup, Bram's hand drifts toward his axe, Pip freezes mid-pocket, Dominique closes the ledger softly, and Mother Orveth smiles the way a river smiles at a stone.
16 D SUN-HEE: The ferry does not return. It only arrives.
* 17 A ¶ The lanterns go out one by one, and the water beneath the raft is no longer water.

### SCENE s00430 | EXT. FLOODED RICE TERRACE - FORWARD OBSERVATION POST - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT AUGUSTIN MBEKI, CORPORAL TEODOR BRANDVOLD
* 1 A ¶ Mist on green water.
* 2 A A sandbagged dugout at the edge of a terrace wall.
3 A SERGEANT AUGUSTIN MBEKI (30s, helmet, binoculars) lies on his belly scanning the far ridge.
4 A Beside him, CORPORAL TEODOR BRANDVOLD (20s, radio on his back) chews a stalk of grass.
5 D MBEKI (to the dugout, loud): Nobody light a cigarette. I mean it.
* 6 A ¶ Nobody answers.
* 7 A The dugout holds only the two of them.
8 A Mbeki lowers the binoculars.
9 D BRANDVOLD: Sarge, he's out there again.
10 D MBEKI: Who?
11 D BRANDVOLD: The farmer. The one with the buffalo.
12 A ¶ Mbeki raises the binoculars.
13 A A man on the far terrace guides a water buffalo through the paddy, unhurried.
14 D MBEKI: He's been told to clear out.
15 D BRANDVOLD: He doesn't have anywhere to go, Sarge.
16 A ¶ Mbeki lowers the glasses.
17 A He watches Brandvold for a long moment.
18 A Brandvold keeps his eyes on the water.
19 D MBEKI (muttering): Neither do we.
20 D BRANDVOLD: What?
21 D MBEKI: Nothing. Get the radio. Tell HQ the farmer's working his field.
22 A ¶ Brandvold unslings the radio.
23 A He holds the handset a while before pressing the key.
24 A Mbeki takes off his helmet, lays it on the sandbags, and watches the buffalo's slow progress across the shining paddy.
25 D BRANDVOLD (into radio): Echo Three, this is Echo Three-One. All quiet at the post.
26 A ¶ He lets go of the key.
27 A Mbeki rests his chin on his folded arms.
28 D MBEKI (softly): All quiet.

### SCENE s00431 | INT. CURLING CLUB - ICE SHEET - NIGHT
Detected names (may be incomplete or contain aliases): COACH ABIGAIL STRAND, DES, ACHEAMPONG, LUCIE FONTAINE-ARCHAMBAULT
* 1 A ¶ A century-old curling hall, the ice scarred with the day's stones.
* 2 A Brass trophies sweat behind glass.
* 3 A Under the hanging lamps, three figures stand at the hog line, all of them very still.
4 A ¶ COACH ABIGAIL STRAND (60s, tweed cap, a face lined like old paper) holds a broom across her chest like a rifle.
5 A Her skip, DESMOND "DES" ACHEAMPONG (30s, club jacket, one glove missing), crouches behind the final stone.
6 A And across the ice, the opposing lead, LUCIE FONTAINE-ARCHAMBAULT (20s, borrowed sweater too large), waits with her broom raised, her knuckles white around the handle.
7 D ABIGAIL: Draw weight, Des. Nothing more.
8 D DES: Coach, if I miss--
9 D LUCIE (calling across): Take your time. We have all night.
10 D ABIGAIL: Nobody asked you, girl.
11 D DES: She's just being polite.
12 D LUCIE: I'm not being anything.
13 A ¶ Des settles into the hack.
14 A He rolls the stone, and it glides, turning slowly, toward the button.
15 A Abigail sweeps without being asked.
16 A Lucie lowers her broom and does not sweep.
* 17 A The stone slows and slows, and stops.
* 18 A ¶ A hush.
* 19 A A single point of ice crystal falls from a lamp.
20 A ¶ Des remains crouched, still staring at the stone.
21 A Abigail puts her broom down on the ice and walks across to Lucie.
22 A She straightens the girl's collar, and says nothing.
23 A ¶ Lucie nods once and extends her hand.
24 A Des finally stands, and shakes it.

### SCENE s00432 | EXT. DRIVE-IN MOVIE SCREEN - ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): JUNO, MATEO, OLUWASEUN, PRIYA, DANI
1 A ¶ Five teenagers crowd the rusted catwalk behind a giant blank screen.
* 2 A The city glows beyond.
3 D JUNO: You said you'd bring the keys.
4 D MATEO: I said I'd try.
5 D JUNO: That's not what you said.
6 D OLUWASEUN: Guys, quiet. Someone's down there.
7 D PRIYA: It's just the security guy.
8 D MATEO: It's never just the security guy.
9 D JUNO: He's walking this way. Move.
10 A ¶ They all lurch at once.
11 A Mateo collides with Priya, Oluwaseun drops his flashlight, and Dani, silent until now, grabs Juno's sleeve.
* 12 A The flashlight rolls off the catwalk and clatters below.
13 D DANI (whisper): I'm not going back.
14 D JUNO: Nobody's going back. Hush.
* 15 A ¶ A beam of light sweeps across the screen.
16 A The five freeze.
* 17 A The light lingers, then slides away.
18 A ¶ Juno exhales.
19 A Mateo lets go of Priya's arm.
20 A Oluwaseun laughs without sound.
21 A Dani lets go of the sleeve.

### SCENE s00433 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): FRANCISCO MEDRANO, NINA VOLKOVA, ROLAND BECK
* 1 A ¶ Concrete and sodium light.
* 2 A One car left, a black sedan with its trunk open.
3 A FRANCISCO MEDRANO (40s, courier jacket) and NINA VOLKOVA (30s, trench coat) stand on either side of it.
* 4 A Between them, a leather satchel on the floor.
5 D FRANCISCO: You said alone.
6 D NINA: I am alone.
* 7 A ¶ A footstep echoes.
8 A Both turn.
9 A ROLAND BECK (50s, hands in pockets) steps out from behind a pillar.
10 D ROLAND: Not quite.
11 D FRANCISCO: You're early.
12 D NINA: You're late. Hand it over.
13 D ROLAND: Both of you, calm down.
14 D FRANCISCO: He's got a gun.
15 D NINA: I know he's got a gun.
16 A ¶ She lunges for the satchel.
17 A He lunges for her wrist.
18 A They collide and go down, the satchel skidding across the concrete.
19 A Roland steps forward and plants a boot on it.
20 D ROLAND: That's enough. Both of you, up.
21 A ¶ They rise slowly, breathing hard.
22 A Roland picks up the satchel and weighs it in his hand.
23 A Then he tosses it back at Francisco, and walks away.
24 D NINA (staring after him): What was that?
25 A ¶ Francisco unzips the satchel.
* 26 A Inside, it is empty.

### SCENE s00434 | INT. ABANDONED CONSERVATORY - GLASSHOUSE - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR CLEMENTINE PRYCE, SIR ALDOUS WREN
* 1 A ¶ Dead palms.
* 2 A Cracked panes.
* 3 A A wrought-iron table in the center, set for tea.
4 A INSPECTOR CLEMENTINE PRYCE (50s, tailored suit, kid gloves) pours from a silver pot.
5 A Across from her sits SIR ALDOUS WREN (70s, cravat, a cane with a silver head), perfectly composed.
6 D CLEMENTINE: Sugar, Sir Aldous?
7 D ALDOUS: Two, Inspector. As always.
8 A ¶ She drops two cubes into his cup.
9 A He stirs, lifts it, and smiles.
10 D ALDOUS [CONT'D]: You've grown quiet, my dear Clementine.
11 D CLEMENTINE: I'm listening to the glass. It still sings in the wind.
12 D ALDOUS: It sang the night my brother died.
13 A ¶ She sets down the pot very gently.
14 A Her gloved hand rests on the table.
15 D CLEMENTINE: You were here that night, Aldous.
16 D ALDOUS: I was in London.
17 D CLEMENTINE (kindly): Your cuff, Sir Aldous. There's a leaf on it.
18 A ¶ He glances down.
* 19 A A single pale frond, the kind that grows only in this room, clings to the cloth.
20 A His smile does not move, but his fingers tighten on the cup.
21 D ALDOUS: Clementine, my dear. You were always the clever one.
22 D CLEMENTINE: And you, Aldous, were always the early riser.
23 A ¶ She raises a hand.
24 A Beyond the glass, two constables step from the hedges, and he sets the cup down without a sound.

### SCENE s00435 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND, MAN IN HOODIE, ABUELA TERESA, TEEN GIRL, DARIO
* 1 A ¶ Humming dryers.
* 2 A A flickering fluorescent tube.
* 3 A Five people, one crowded bench.
4 D ROSALIND: That's my machine.
5 D YOUNG MAN: It was empty.
6 D ROSALIND: It was paused.
7 D ABUELA TERESA: Mija, let him have it.
8 D ROSALIND: Mama, I've been here since six.
9 D TEEN GIRL (not looking up from phone): Y'all are loud.
10 D YOUNG MAN: I'm Dario, by the way.
11 D ROSALIND: I don't care, Dario.
12 D ABUELA TERESA: Dario, you want a tamale?
13 D DARIO: Yes, ma'am.
14 D ROSALIND: Mama!
15 D MAN IN HOODIE: Can someone cover me for the dryer? I need quarters.
16 D TEEN GIRL: Nobody has quarters.
17 D ROSALIND: I have quarters.
18 D MAN IN HOODIE: God bless you.
19 D ROSALIND: Take the machine, Dario.
20 D DARIO: Thank you. Really.

### SCENE s00436 | INT. TELEGRAPH OFFICE - FRONTIER BANK TOWN - 1889 - DAY
Detected names (may be incomplete or contain aliases): CLERK EZEKIEL MARSH, COLONEL HORATIO BLAKELY, MADAME LIVIA SOLANO, TOBY GREER, SHERIFF ABNER WOODS, PRUDENCE COLE, TELEGRAPH
* 1 A ¶ Dust.
* 2 A Brass.
* 3 A A clattering key.
* 4 A Heat.
5 A ¶ CLERK EZEKIEL MARSH (20s, sleeve garters) taps at the telegraph.
6 A Eyes on the paper.
7 A ¶ COLONEL HORATIO BLAKELY (60s, white mustache, medals) paces.
8 A Cane thumping.
9 A ¶ MADAME LIVIA SOLANO (30s, green silk, fan) fans herself by the window.
10 A ¶ TOBY GREER (teens, newsboy cap) hovers by the door with a bundle of papers.
11 A ¶ SHERIFF ABNER WOODS (50s, star, shotgun) leans on the counter.
12 A ¶ MRS. PRUDENCE COLE (40s, gloves, hatbox) sits primly on the bench.
13 D TELEGRAPH [V.O.] (clicking, then spoken by Ezekiel as he decodes): Train... delayed... bandits... Red Rock.
14 D EZEKIEL: Train's delayed.
15 D BLAKELY: Delayed! By whom?
16 D SOLANO: Colonel, please. The heat.
17 D WOODS: Bandits at Red Rock, Colonel.
18 D TOBY: Red Rock! That's ten miles!
19 D COLE: Young man, lower your voice.
20 D BLAKELY: I demand a horse.
21 D WOODS: Nobody's riding anywhere.
22 D SOLANO: Sheriff, my trunk is on that train.
23 D EZEKIEL: More coming. Wait.
* 24 A ¶ The key chatters.
25 A Everyone leans in.
26 D TELEGRAPH [V.O.]: Hostages... demand... ransom.
27 A ¶ Cole opens her hatbox.
* 28 A Inside, a derringer.
29 D COLE: Gentlemen. Madame. I believe I'll be going to Red Rock.
30 A ¶ Woods tips his hat.
31 A Blakely sputters.
32 A Solano stops fanning.
33 A Toby whistles low.
34 D EZEKIEL (stunned): Ma'am?
35 D COLE: My husband is on that train.

### SCENE s00437 | INT. CLOSED ICE-CREAM PARLOR - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): VINNIE, DELACORTE, MAGS, OYELARAN, YOUNG LAWYER
* 1 A ¶ Pastel walls and a dead freezer.
* 2 A A single bulb.
3 A VINCENT "VINNIE" DELACORTE (50s, suit, tie loosened) sits at a small table.
4 A Across from him, DETECTIVE MARGARET "MAGS" OYELARAN (40s, gray blazer) turns a sundae spoon over in her fingers.
5 D VINNIE: You came alone.
6 D MAGS: I did.
7 D VINNIE (to the empty room): Somebody always comes alone.
8 A ¶ He pours himself coffee from a thermos and slides a second cup across.
9 A She does not touch it.
10 A He drinks.
* 11 A The silence stretches.
12 D VINNIE [CONT'D]: You know what I miss? The chocolate chip.
13 D MAGS: Is that right.
14 D VINNIE: My mother worked here. Thirty years behind that counter.
15 A ¶ Mags sets down the spoon.
16 A She studies his hands, which are not quite steady.
* 17 A ¶ A door opens at the rear.
18 A A thin YOUNG LAWYER (20s, rain-soaked briefcase) slips in, looks from one to the other, and stops.
19 D YOUNG LAWYER: Mr. Delacorte, I told you not to speak without--
20 D VINNIE: Sit, Peter. The detective and I are only talking about ice cream.
21 A ¶ Peter sits.
22 A Mags stands, puts a card on the table, and tucks the spoon into her coat pocket.
23 D MAGS (to the room): Nobody leaves town.
24 A ¶ She goes out.
25 A Vinnie stares at the cup she never touched, then slowly drinks it himself.

### SCENE s00438 | INT. OPERA HOUSE - PROPERTY ROOM - 1912 - NIGHT
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH, FERDINAND LACROIX, INSPECTOR GRIMSBY
* 1 A ¶ Costumes on hooks.
* 2 A Painted swords.
* 3 A Plaster saints.
* 4 A One lantern.
* 5 A Silence.
6 A ¶ LADY CORDELIA ASHWORTH (30s, velvet cloak) kneels by a trunk.
7 A She lifts a lid.
8 A Reaches inside.
9 A Draws out a glass vial.
10 A ¶ Behind her, MR. FERDINAND LACROIX (50s, theater manager, waistcoat) watches from a rack of wigs.
11 A He coughs.
12 A She does not turn.
13 D FERDINAND: Lady Ashworth. Still here?
14 D CORDELIA: Looking for a prop.
15 D FERDINAND: Ah.
16 A ¶ He steps closer.
17 A She slips the vial into her sleeve.
18 A He smiles.
19 D FERDINAND [CONT'D]: Rehearsal ended hours ago.
20 D CORDELIA: I'm very dedicated.
* 21 A ¶ A door bangs.
* 22 A Heavy boots.
* 23 A Voices from the corridor.
24 A ¶ A broad figure fills the doorway: INSPECTOR GRIMSBY (40s, bowler, mud on his boots).
25 A He scans the room.
26 A His eyes settle on the trunk.
27 D GRIMSBY: Evening.
28 A ¶ Ferdinand lunges for the lantern.
29 A Cordelia slams the trunk lid.
30 A Grimsby draws his truncheon.
* 31 A The lantern falls.
* 32 A Darkness.
* 33 A ¶ Scuffle.
* 34 A A curse.
* 35 A Glass shatters.
* 36 A The lantern rolls and rights itself, still burning.
37 A ¶ They stand frozen, three in a triangle.
38 A He holds the broken vial.
39 A She holds a fencing foil.
40 A He holds the truncheon.
41 D GRIMSBY: Well, then.

### SCENE s00439 | EXT. HIGH DESERT WINDMILL - DAY
Detected names (may be incomplete or contain aliases): EZRA, HATTIE, TOM
* 1 A ¶ A creaking windmill over a stock tank.
2 A Three riders sit their horses in the shade.
3 D EZRA: Water's low.
4 D HATTIE: Water's always low.
5 D EZRA: Then why're we out here?
6 D HATTIE: Because Tom says the old man buried something under this mill.
7 D TOM: I never said that.
8 D HATTIE: You said it Tuesday.
9 D TOM: I said somebody told me a man told me.
10 D EZRA: That's three hands removed from nothing.
11 D HATTIE: Dig.
12 D TOM: With what?
13 D HATTIE: Your spurs.
14 D EZRA: Hattie, I'm too old to dig.
15 D HATTIE: Then watch Tom.
16 D TOM: I'm not digging, either.
17 D EZRA: Well, somebody better.
* 18 A ¶ A long wind moves through the blades.
* 19 A The mill creaks.
20 A The three sit and look at one another.

### SCENE s00440 | INT. HOT-AIR BALLOON BASKET - SUNSET
Detected names (may be incomplete or contain aliases): CELESTE ARNAULT, BEN, ADEYEMI-CROSS, FARMER
* 1 A ¶ A basket drifts over patchwork fields.
* 2 A Gold light.
* 3 A A burner roars, falls silent.
4 A CELESTE ARNAULT (30s, windbreaker) grips the ropes.
5 A BENEDICT "BEN" ADEYEMI-CROSS (30s, scarf) stands opposite, holding a small velvet box he has not opened.
6 D CELESTE: We're losing height.
7 D BEN: I know.
8 D CELESTE: Then burn.
9 A ¶ He pulls the cord.
* 10 A The flame roars.
11 A They rise a little.
12 A Celeste exhales.
13 D BEN: Celeste, I need to say something.
14 D CELESTE (to the sky, quietly): Of course you do. At two thousand feet.
15 D BEN: I had a speech.
16 D CELESTE: Everyone has a speech.
17 A ¶ He fumbles with the box.
* 18 A It slips and bounces on the wicker floor.
19 A They both dive.
20 A Their hands meet on the lid.
21 D BEN: Sorry.
22 D CELESTE: Don't be.
23 A ¶ They hold the box together.
24 A Neither opens it.
* 25 A The balloon drifts through a low cloud.
26 A ¶ A voice shouts from below, faint and cheerful.
27 A ¶ An old FARMER (60s, overalls, straw hat) stands in a field waving both arms, a pitchfork leaning at his side.
28 D FARMER (distant): You two want a ride back?!
29 D BEN (calling down): We're fine, thank you!
30 D CELESTE (muttering): We are not fine.
31 A ¶ She laughs.
32 A Ben laughs.
33 A She takes the box, opens it, and looks for a long time.
34 D CELESTE [CONT'D]: Ask me on the ground.
35 D BEN: On the ground.
36 A ¶ He pulls the cord.
* 37 A The flame sighs.

### SCENE s00441 | INT. GRAND HOTEL - HONEYMOON SUITE - MORNING
Detected names (may be incomplete or contain aliases): HARRY, FOSTER-WELLS, GWENDOLYN, MILDRED PETTIBONE, LIONEL, PARROT
* 1 A ¶ A fat canopy bed buried in pink pillows.
* 2 A Champagne bucket tipped over.
* 3 A A parrot on a brass stand.
4 A ¶ HARRIGAN "HARRY" FOSTER-WELLS (50s, bathrobe, one slipper) staggers from the bathroom clutching a toothbrush.
5 A His new wife GWENDOLYN (40s, silk turban) shrieks from the bed, flings a pillow, and knocks the champagne bucket into the parrot's cage.
6 A Her sister MILDRED PETTIBONE (60s, stern, steaming iron in hand) bursts in through the connecting door, ignoring both of them, while the bellhop LIONEL (20s, brass buttons) wheels in a breakfast cart with a cheerful whistle.
7 A ¶ He trips on the cart.
* 8 A It careens across the room.
9 A She leaps aside.
10 A He catches it.
11 A The parrot lands on his head.
12 D PARROT (squawking): Congratulations!
13 D HARRY: Get it off!
14 D GWENDOLYN: Don't hurt Percival!
15 D MILDRED: I told you not to marry him.
16 D LIONEL: Breakfast, sir!
17 A ¶ Harry spins.
18 A The parrot flaps.
* 19 A The toothbrush flies.
* 20 A It hits the iron.
* 21 A The iron hits the bucket.
* 22 A A fountain of ice erupts.
23 D GWENDOLYN: Harry, the pearls!
24 D HARRY: What pearls?
25 D LIONEL: The pearls on the tray, sir.
26 A ¶ Everyone looks at the tray.
* 27 A On a silver plate, beside the croissants, sits a double strand of pearls.
28 D MILDRED (grimly): I'll take those.
29 A ¶ She plucks them.
30 A He bows.
31 A She exits through the connecting door, slamming it.
32 A The parrot settles on Harry's shoulder and preens.
33 D PARROT: Till death!

### SCENE s00442 | INT. STRANDED GONDOLA - ALPINE CABLE LINE - NIGHT
Detected names (may be incomplete or contain aliases): ANSELMO RIVERA-FOX, TILLY HARGREAVES, SASHA, BONDAR, MAYA KOTHARI, BARNABY QUILL, DISPATCH
* 1 A ¶ Wind howls.
* 2 A The cabin sways.
* 3 A Frost etches the windows.
4 A Five climbers jammed in a space for four.
* 5 A A radio crackles on the dashboard.
6 A ¶ ANSELMO RIVERA-FOX (40s, guide, orange parka) clutches the door lever.
7 A TILLY HARGREAVES (20s, injured ankle) sits wedged against the wall, face gray.
8 A OLEKSANDR "SASHA" BONDAR (50s, beard, ice axe) tries the radio.
9 A MAYA KOTHARI (30s, medic bag) kneels at Tilly's ankle.
10 A And young BARNABY QUILL (teens, headphones around his neck) holds the cabin's last flare.
11 D ANSELMO: Don't open that door.
12 D SASHA: I'm not touching the door.
13 D DISPATCH [V.O.] (crackling): Gondola Four, this is Valley Control. We have a crew on the way. Estimated ninety minutes.
14 D SASHA: Ninety minutes! She won't last!
15 D MAYA: She'll last. Keep her warm.
16 D TILLY (through gritted teeth): I'm fine.
17 D DISPATCH [V.O.]: Say again, Gondola Four?
18 D ANSELMO: Tell them to hurry!
19 D BARNABY: Can I fire the flare?
20 D ANSELMO: Not yet.
21 D SASHA: Not yet, kid.
22 D BARNABY: I can see the lights on the ridge.
23 D MAYA: Sasha, hold her leg while I wrap it.
24 A ¶ Sasha drops the radio and grips the ankle with both hands.
25 A Tilly cries out.
26 A Maya winds the bandage, tight and fast, while Anselmo braces his boots against the sliding door, Barnaby tucks the flare inside his coat to keep it dry, and the cabin lurches another foot into the dark.
27 D DISPATCH [V.O.]: Gondola Four, report.
28 D ANSELMO (to the radio): Four's holding. Seventy-five minutes.
29 D MAYA (to Tilly, softly): Seventy-five minutes. Talk to me about anything.
30 D TILLY (barely): My dog.
31 D MAYA: Tell me about your dog.

### SCENE s00443 | INT. SLEEPER TRAIN - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HORTENSE VANDERBILT-OKAFOR, LEOPOLD PRUITT, GRETA LINDQVIST, CAPTAIN DESMOND TREVELYAN, YOUNG MISS ADELAIDE FOX
* 1 A ¶ White tablecloths.
* 2 A Swaying chandeliers.
* 3 A Rain drums the windows.
4 A Five passengers sit at a long table set for dinner.
5 A ¶ DETECTIVE HORTENSE VANDERBILT-OKAFOR (50s, tweed) cuts her steak.
6 A She watches her left.
7 A He pushes his food around, shaking.
8 A She watches her right.
* 9 A They sip wine, calm, bored.
10 A ¶ MR. LEOPOLD PRUITT (60s, banker) coughs into a napkin.
11 A He glances at the clock.
12 A MRS. GRETA LINDQVIST (40s, black gloves) dabs her mouth.
13 A She studies the door.
14 A ¶ CAPTAIN DESMOND TREVELYAN (40s, uniform) sits across from them, jaw tight.
15 A He taps the table.
16 A His glass trembles.
17 A ¶ YOUNG MISS ADELAIDE FOX (20s, curls) looks at her plate.
18 A She has not eaten.
* 19 A ¶ The train enters a tunnel.
* 20 A The lights flicker.
* 21 A A scream, short and cut off.
* 22 A The lights return.
23 A ¶ Pruitt slumps in his chair, a steak knife in his chest.
24 A She leaps up.
25 A He gasps.
26 A They freeze.
27 A He knocks over his water.
28 A She slaps the table.
29 D HORTENSE: Nobody move.
30 A ¶ She crosses to the body and lifts his wrist.
31 A She shakes her head.
32 A She looks at each face in turn, and they stare back.
33 D TREVELYAN: Detective, I assure you--
34 D HORTENSE: Captain, sit down.
35 A ¶ He sits.
36 A She studies the knife, then the table settings.
37 D GRETA (barely a whisper): That was my knife.
38 A ¶ All heads turn to her.
39 A She holds up her hands, palms open, gloves still on.
40 D GRETA [CONT'D]: I mean, it was set at my place. Someone switched it.
41 D ADELAIDE: Detective, the train is locked.
42 D HORTENSE: Yes, Miss Fox. It is.
43 A ¶ She picks up the cold dinner roll from her plate, tears it in half, and sets it down.
44 D HORTENSE [CONT'D]: Then one of you is lying.

### SCENE s00444 | EXT. ABANDONED BOWLING ALLEY - ROOF - DAY
Detected names (may be incomplete or contain aliases): MINA SUNDARESAN, JASPER, HOLLIS WADE
* 1 A ¶ Tar paper and a rusted neon sign shaped like a pin.
2 A Three kids sit on the edge, legs swinging, passing a warm soda.
3 A ¶ MINA SUNDARESAN (16, ponytail, skateboard on her lap).
4 A Her brother JASPER (14, braces) beside her.
5 A Their neighbor HOLLIS WADE (17, varsity jacket) stretched out behind them.
6 D MINA: Okay, truth or dare.
7 D HOLLIS: Truth.
8 D MINA: Do you actually like Priscilla, or are you just doing it because everyone expects you to?
9 D HOLLIS: That's two questions.
10 D JASPER: It's one question with two parts.
11 D HOLLIS: Shut up, Jasper.
12 D MINA: Answer.
13 D HOLLIS: I don't know. Maybe I like the idea of her.
14 D JASPER: That's what Dad said about the boat.
15 D MINA: Jasper.
16 D JASPER: What? He sold it.
17 D HOLLIS: Your dad sold the boat?
18 D MINA: Last week. Don't tell anyone.
19 D HOLLIS: I won't.
20 D JASPER: Mina cried.
21 D MINA: I did not.
22 D HOLLIS: It's okay if you did.
23 D MINA: Truth or dare, Hollis. Your turn.
24 D HOLLIS: Dare.
25 D MINA: Jump off the roof.
26 D HOLLIS: Funny.
27 D MINA: Dare you to tell her the truth.
28 A ¶ He grins, takes the soda, and finishes it.
29 A She smiles.
30 A Jasper looks back and forth between them and stays quiet.
31 D HOLLIS: Fine.

### SCENE s00445 | INT. COUNTY COURTHOUSE - STAIRWELL LANDING - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NAOMI PEMBERTON-CLARKE, DEVANTE OYELOWO, REGGIE, ABERNATHY
* 1 A ¶ A marble stairwell that echoes.
* 2 A Dusty light through tall windows.
3 A ATTORNEY NAOMI PEMBERTON-CLARKE (40s, charcoal suit, folder) climbs two steps at a time.
4 A Behind her trots her junior, DEVANTE OYELOWO (20s, rolled sleeves, briefcase).
5 D NAOMI: Devante, we have eight minutes.
6 D DEVANTE: Ms. Pemberton-Clarke, the witness isn't here yet.
7 D NAOMI: She'll be here.
8 A ¶ They reach the landing.
9 A A heavyset man waits at the window: JUDGE REGINALD "REGGIE" ABERNATHY (60s, robe over arm), eating a sandwich.
10 D REGGIE: Counsel.
11 D NAOMI: Your Honor.
12 D REGGIE: You're in my stairwell.
13 D NAOMI: We're passing through.
14 D DEVANTE: Sorry, sir. We didn't know it was private.
15 D REGGIE: It isn't. I just like the quiet.
16 A ¶ Naomi and Devante glance at each other.
17 A Reggie wipes crumbs from his sleeve.
18 D REGGIE [CONT'D]: Tell me, Ms. Pemberton-Clarke. Is your client going to take the stand?
19 D NAOMI: I can't discuss strategy with the bench, Judge.
20 D REGGIE: Of course not.
21 A ¶ He tosses the sandwich wrapper at a bin, and misses.
22 A They all three stare at it.
23 A Devante dives for the wrapper, and Naomi dives for the same one.
24 A They collide at the bin.
* 25 A The folder spills.
* 26 A Papers slide across the marble.
27 D REGGIE [CONT'D] (mildly): Well, now I know what's in the file.
28 A ¶ Naomi and Devante freeze on their knees.
29 A Reggie picks up one page, reads it, and folds it.
30 D REGGIE [CONT'D]: Eight minutes, counsel. I'd hurry.
31 A ¶ He walks down the stairs, leaving the page tucked in his pocket.

### SCENE s00446 | INT. SERVICE ELEVATOR - OFFICE TOWER - NIGHT
Detected names (may be incomplete or contain aliases): AGENT SOLOMON KIPKORIR, FIONNUALA BRADY, JANITOR
* 1 A ¶ Dim steel.
* 2 A Floor numbers drop.
* 3 A 22.
* 4 A 21.
* 5 A 20.
6 A ¶ AGENT SOLOMON KIPKORIR (30s, earpiece, black suit) stands rigid.
7 A Briefcase cuffed to wrist.
8 A ¶ Beside him: DR. FIONNUALA BRADY (40s, lab coat, ID badge).
9 A Pale.
10 A Silent.
11 D SOLOMON: Stay behind me.
12 D FIONNUALA: I am behind you.
* 13 A ¶ The elevator stops.
* 14 A 14.
* 15 A Doors hiss.
* 16 A ¶ A cleaning cart rolls in.
17 A Behind it, a JANITOR (50s, cap low, mop in hand).
18 A He nods.
19 D JANITOR: Evening.
* 20 A ¶ The doors close.
* 21 A 13.
* 22 A 12.
23 A Solomon's hand drifts to his jacket.
24 A ¶ The Janitor smiles.
25 A Lifts the mop.
* 26 A A blade glints in the handle.
27 A ¶ Solomon moves first.
28 A Fist.
29 A Elbow.
* 30 A The mop clatters.
31 A The Janitor staggers into the wall.
32 A Fionnuala screams.
* 33 A ¶ The elevator lurches.
* 34 A Lights die.
* 35 A Dark.
* 36 A ¶ A thud.
* 37 A A grunt.
* 38 A Silence.
* 39 A ¶ Lights return.
40 A Solomon stands, breathing hard.
41 A The Janitor lies crumpled.
42 D FIONNUALA: Is he--
43 D SOLOMON: Breathing.
* 44 A ¶ The doors open.
* 45 A Lobby.
* 46 A Marble.
* 47 A Quiet.
48 A ¶ He uncuffs the briefcase, hands it to her, and walks out.

### SCENE s00447 | INT. BABY SHOWER - SUBURBAN LIVING ROOM - DAY
Detected names (may be incomplete or contain aliases): BEATRIZ, DOT, CHANTELLE, HONEY, MARGUERITE, LOURDES
* 1 A ¶ Pastel balloons.
* 2 A A sheet cake.
* 3 A Six guests, one gift table.
4 D BEATRIZ: Open mine first!
5 D DOT: Mine's the big one.
6 D CHANTELLE: Mine's the pretty one.
7 D HONEY: Everybody wait, the cake is melting.
8 D BEATRIZ: It's February.
9 D HONEY: Then why is it melting?
10 D CHANTELLE: Oh my God, that's the heater.
11 D DOT: Who put the cake on the heater?
12 D MARGUERITE: I thought it was a table.
13 D BEATRIZ: Marguerite!
14 D MARGUERITE: It looked like a table!
15 D CHANTELLE (to the guest of honor): Lourdes, say something.
16 A ¶ LOURDES (30s, nine months pregnant) stands, grips the arm of the couch, and looks down.
17 D LOURDES: My water just broke.
18 A ¶ The room screams.
* 19 A Gifts fly.
20 A Beatriz grabs the keys, Dot grabs Lourdes, Chantelle grabs the cake, and Honey grabs a towel.
21 A Marguerite stands in the middle of it all.
22 D MARGUERITE (calmly): I'll get the casserole.

### SCENE s00448 | INT. DEEP-SPACE MINING BARGE - CONTROL ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN RUTH ESCOBAR-LINDGREN, JUBAL TIDWELL, PRI, NAGARAJAN, WREN MALLORY
* 1 A ¶ Steel.
* 2 A Screens.
* 3 A Asteroid dust drifting past the viewport.
4 A ¶ CAPTAIN RUTH ESCOBAR-LINDGREN (50s, scarred cheek, gray crewcut).
5 A Hands on the console.
6 A ¶ First Mate JUBAL TIDWELL (30s, headset, nervous).
7 A Eyes on the scanner.
8 A ¶ ENGINEER PRIYAMVADA "PRI" NAGARAJAN (40s, goggles pushed up).
9 A Wrench in her fist.
10 A ¶ Cadet WREN MALLORY (teen, oversized helmet).
11 A Wide-eyed.
12 D RUTH: Jubal. Status.
13 D JUBAL: Hull at sixty percent, Captain.
14 D RUTH: Pri. Engines.
15 D PRI: Coughing. But alive, Ruth.
16 D RUTH: Wren. Stay low.
17 D WREN: Yes, Captain.
* 18 A ¶ A rumble.
* 19 A The deck shudders.
* 20 A Dust sifts from the ceiling.
21 D JUBAL: Another impact. Starboard.
22 D PRI: Jubal, that's the third this hour.
23 D RUTH: Pri, patch it.
24 D PRI: With what? Spit?
25 D RUTH: With whatever you've got.
26 A ¶ Pri sighs, swings her goggles down, and heads for the hatch.
27 A Wren scrambles after her.
28 D WREN: Pri, can I help?
29 D PRI: Hold the light, kid.
* 30 A ¶ The hatch seals behind them.
31 A Ruth and Jubal watch the scanner.
* 32 A A red dot creeps closer.
33 D JUBAL: Captain, it's matching our speed.
34 D RUTH: I see it.
35 D JUBAL: What do we do?
36 D RUTH: We wait.

### SCENE s00449 | INT. ROOFTOP GREENHOUSE - APARTMENT BLOCK - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE OSWALDO PEREIRA-LANE, SABINA KOWALCZYK, THADDEUS BRIGHTWATER, MISS HYACINTH LOVELACE
* 1 A ¶ A glass lean-to bolted to a tar roof, crowded with tomato vines and orchid pots.
* 2 A Gray light.
* 3 A Condensation drips from the panes.
* 4 A A fan turns slowly overhead.
5 A ¶ DETECTIVE OSWALDO PEREIRA-LANE (50s, rumpled raincoat, thermos) stands over a body slumped between the tomato racks.
6 A The victim wears a gardener's apron and rubber boots.
7 A ¶ At the door, patrolwoman SABINA KOWALCZYK (20s, rain cape) guards the entrance.
8 A Next to her stands the building super, MR. THADDEUS BRIGHTWATER (60s, keys on a ring, cardigan), wringing his cap.
9 A ¶ On the far side of the glass, a nervous tenant, MISS HYACINTH LOVELACE (30s, silk robe, bare feet), watches from the stairwell.
10 D OSWALDO: Who found him?
11 D THADDEUS: I did, Detective. Came up to check the pipes.
12 D OSWALDO: What time?
13 D THADDEUS: Half past five.
14 A ¶ Oswaldo crouches.
* 15 A A small trowel lies beside the body, clean.
16 A He lifts the victim's hand.
* 17 A The fingernails are packed with fresh soil.
18 D OSWALDO (to Sabina): The roof door. Locked or unlocked?
19 D SABINA: Unlocked, sir.
20 D OSWALDO: Who has a key?
21 D THADDEUS: Just me. And Miss Lovelace. She waters the orchids.
22 A ¶ All eyes shift to the stairwell.
23 A Hyacinth steps back into the shadows, then slowly forward again.
24 D HYACINTH: I was asleep.
25 D OSWALDO: Miss Lovelace, your feet are muddy.
26 A ¶ She looks down.
* 27 A Pale mud streaks both soles.
28 A Oswaldo pours coffee from the thermos into its cap, sips, and says nothing for a long moment.

### SCENE s00450 | EXT. SALT-WORKS BOILING SHED - ABANDONED TERRITORY - DAY
Detected names (may be incomplete or contain aliases): RIDER, RADIO, JEDEDIAH
* 1 A ¶ Wind-scoured plank walls.
* 2 A Iron evaporation pans crusted white.
3 A A lone RIDER (40s, flour-sack coat, hat pulled low) leads a lame horse through the doorway and ties it to a post.
4 A ¶ He paces the shed, reading the walls.
* 5 A A faded wanted poster flaps from a nail.
6 A He tears it free and studies it.
7 D RIDER (reading, low): Jedediah Strake. Five hundred dollars. Dead or alive.
8 A ¶ He folds the poster into his coat.
* 9 A The scrape of a boot outside.
10 A He stops.
11 A Hand to his holster.
12 D RIDER [CONT'D] (calling out): Whoever's there, I've got a crooked horse and a straight gun.
* 13 A ¶ Silence.
* 14 A Wind.
* 15 A Then a voice, thin and tinny, from the saddlebag.
16 A He stares at it.
17 D RADIO [V.O.] (through static, his own recorded voice): Jed. If you're hearing this, you've gone back to the salt.
18 A ¶ He pulls a battered wax cylinder player from the bag, cranks it, and holds it up.
19 D JEDEDIAH [V.O.] (recorded): Don't stay past dark. The pans remember.
20 A ¶ Jedediah sets the player down.
* 21 A The horse whinnies.
* 22 A Outside, the sun drops behind the ridge, and the white pans turn gray, then blue, then slowly begin to glow.
23 D JEDEDIAH (muttering): Well, I never did listen to myself.
24 A ¶ He draws his pistol and steps out to meet the light.

### SCENE s00451 | INT. FLOODED COUNTY ARCHIVE - BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): ATTORNEY SIGRID HOLMGREN-DADA, CASS, LEBEAU, WINSTON PELLEGRINO
* 1 A ¶ Knee-deep brown water.
* 2 A Floating file boxes.
* 3 A A string of emergency bulbs.
4 A ATTORNEY SIGRID HOLMGREN-DADA (40s, waders over her suit) wades between shelves.
5 A Her paralegal CASIMIR "CASS" LEBEAU (20s, headlamp) carries a dripping box.
6 A And the archivist, MR. WINSTON PELLEGRINO (70s, rubber apron), shouts from the staircase above.
7 D WINSTON [O.S.]: The 1974 deed books are on the third shelf!
8 D SIGRID: They're underwater, Winston!
9 D WINSTON [O.S.]: Then they're on the bottom shelf!
10 D CASS: Ms. Holmgren-Dada, found it. Box 41.
11 A ¶ She lunges across the aisle.
12 A He lifts the box.
13 A She grabs the other side.
14 A They tug, and the box splits.
* 15 A Papers fan out across the black water.
16 D SIGRID: Cass!
17 D CASS: It was your end that tore!
18 D WINSTON [O.S.]: What's happening down there?
19 D SIGRID: Nothing!
20 D CASS: Everything!
21 A ¶ They scramble after the pages, snatching them from the current.
22 A Sigrid pins one against a shelf, and Cass pins another against his chest.
23 A A third floats past, and both reach, and both miss.
24 D WINSTON [O.S.]: Is it the deed?
25 A ¶ Sigrid fishes the page out of the water and reads it by headlamp.
26 A Her face falls, then hardens.
27 D SIGRID (quietly): Winston, come down here. Bring a camera.
28 D WINSTON [O.S.]: I'm too old for stairs!
29 D CASS: It's the signature, isn't it.
30 D SIGRID: It's a forgery.
31 A ¶ The three of them stand in the black water, one overhead bulb swinging above them, as the page drips in her hand.
32 D WINSTON [O.S.] (pause): I'm coming.

### SCENE s00452 | INT. NIGHT-SHIFT BUS DEPOT - CANTEEN - NIGHT
Detected names (may be incomplete or contain aliases): HILARY NWOSU-ABRAMS, WALT, GRZESKOWIAK, DARNELL FAIRWEATHER
* 1 A ¶ Steel tables.
* 2 A A buzzing vending machine.
3 A Three drivers on break.
4 A ¶ HILARY NWOSU-ABRAMS (50s, thermos) stirs her coffee.
5 A WALTER "WALT" GRZESKOWIAK (60s, reading glasses) does a crossword.
6 A And newcomer DARNELL FAIRWEATHER (20s, new uniform) sits stiffly, hands folded.
7 D WALT: Seven letters. "Bus stop's neighbor."
8 D HILARY: Shelter.
9 D WALT: That's seven. Thanks.
10 D DARNELL (to the group): Is it always this quiet?
11 A ¶ Hilary shrugs.
12 A Walt doesn't look up.
13 D DARNELL [CONT'D]: I mean, I thought there'd be more people.
14 D HILARY: People go home, honey.
15 D DARNELL: Right.
16 A ¶ He rubs his palms on his knees.
17 A She watches him over the rim of her cup.
18 D HILARY: First night?
19 D DARNELL: Third. But the first two I was shadowing.
20 A ¶ Walt fills in a word.
21 A Hilary taps the table twice.
22 D HILARY (to Walt, low): He's going to ask.
23 D WALT (to himself): Six down. "Lonely."
24 D DARNELL: Ask what?
25 A ¶ Hilary smiles and slides her thermos across the table.
26 A He pours a little, hesitates, and sips.
27 A She nods.
28 A Walt finally looks up and gives him the pencil.
29 D WALT: Do you know a four-letter word for "home"?
30 A ¶ Darnell takes the pencil and studies the grid.
* 31 A The vending machine hums in the quiet.
32 D DARNELL (quietly): Nest.
33 A ¶ Walt writes it in.
34 A He pushes the paper to the middle of the table, and the three of them lean over it together.

### SCENE s00453 | INT. DERELICT BASEBALL STADIUM - HOME DUGOUT - NIGHT
Detected names (may be incomplete or contain aliases): LEFTY, OKONKWO-REYES, MARCUS, TRENT, ANNOUNCER
* 1 A ¶ A cavern of concrete and shadow.
* 2 A Rows of empty seats rise behind the dugout like an audience of the dead.
* 3 A A single stadium light flickers over the infield, where weeds have pushed through the dirt.
4 A ¶ COACH LEONARD "LEFTY" OKONKWO-REYES (70s, faded Cubs-blue cap, hands like old leather gloves) sits on the bench with a bat across his knees.
5 A Beside him, his former star pitcher, MARCUS "THE ARM" TRENT (40s, scarred right elbow, expensive coat), stares at the empty mound.
* 6 A And a sports radio crackles from a battered transistor on the bench.
7 D ANNOUNCER [V.O.] (over radio): ...and that's the final out. The Wolves take the series, four games to one.
8 A ¶ Lefty turns the dial.
* 9 A The voice dies in static.
10 D LEFTY: Forty years I listened to that.
11 D MARCUS: Coach, you didn't have to come out here.
12 D LEFTY: You called me.
13 D MARCUS: I called to say I'm sorry.
14 D LEFTY (not looking at him): Then say it.
15 A ¶ Marcus opens his mouth.
16 A Closes it.
17 A He stands and walks to the dugout steps.
18 D MARCUS: I sold the game, Lefty.
19 A ¶ Lefty doesn't flinch.
* 20 A The stadium light buzzes.
* 21 A A bat taps a slow rhythm on the concrete.
22 D LEFTY: I know.
23 D MARCUS: You know?
24 D LEFTY: I've known since the sixth inning.
25 A ¶ Marcus leans on the rail.
26 A His breath comes out ragged.
27 A Lefty rises, joints popping, and joins him.
28 D LEFTY [CONT'D]: You threw a curve on 3-and-2.
29 D MARCUS: Coach--
30 D LEFTY: You never threw a curve on 3-and-2. Not once in eleven years.
31 A ¶ Marcus slides down the rail and sits on the top step, head bowed.
32 A Lefty looks out across the field.
* 33 A The infield dirt seems to shimmer in the flicker.
34 D LEFTY [CONT'D]: You think I came out here to hit you?
35 D MARCUS: I think you should.
36 D LEFTY: I came out here to hit you a few grounders.
37 A ¶ He pulls a baseball from his coat pocket and holds it out.
38 A Marcus stares at it for a long moment.
39 A Then he takes it.
40 D MARCUS: I'm forty years old.
41 D LEFTY: I'm seventy-four.
42 A ¶ He picks up the bat.
43 A Marcus gets to his feet slowly.
44 A Lefty gestures at the mound.
45 D LEFTY [CONT'D]: Go on. Take your spot.
46 A ¶ Marcus walks out of the dugout onto the field.
* 47 A The weeds brush his coat.
48 A He climbs the mound and turns to face home plate.
49 A ¶ Lefty steps out of the dugout, takes a stance at the empty plate, and lifts the bat.
50 D LEFTY [CONT'D] (calling): Fastball, Arm. Right down the middle.
51 A ¶ Marcus winds up.
52 A He throws.
53 A The ball cracks off the bat and sails into the darkness.
54 A They both watch it go.
55 D MARCUS (softly): Foul?
56 D LEFTY: Gone.
57 A ¶ They stand there, the old man and the young one, as the stadium light gives one last flicker and the radio on the bench, left on by no one, murmurs a single faint syllable.
58 D ANNOUNCER [V.O.]: ...next.
59 A ¶ Lefty lowers the bat.
60 A Marcus lowers his arm.

### SCENE s00454 | INT. LIGHTHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): ROSALIE, CONSTANCE
* 1 A ¶ Salt-stained windows.
* 2 A Two mugs.
* 3 A A kettle starting to rattle.
4 A ¶ ROSALIE (60s, cardigan) cracks eggs.
5 A Her sister CONSTANCE (60s, cardigan) slices bread.
6 A Same hands.
7 A Same sigh.
8 D ROSALIE: Connie, sit.
9 D CONSTANCE: Rosie, I'm fine.
10 A ¶ She isn't.
11 A She grips the counter.
12 A Rosalie sets down the bowl.
13 D ROSALIE: Did you take the pills?
14 D CONSTANCE: Did you?
15 D ROSALIE: Yes.
16 D CONSTANCE: Yes.
17 A ¶ They speak together.
18 A They stop.
* 19 A The kettle shrieks.
20 A Neither moves.
21 A ¶ Constance turns the burner off.
22 A She pours.
23 A Her hands are steady now.
24 D CONSTANCE [CONT'D]: She said I could stay.
25 D ROSALIE: Who?
26 D CONSTANCE: The woman from the county. She told her I could stay.
27 A ¶ Rosalie sits.
28 A Slowly.
29 D ROSALIE: Connie, there was no woman.
30 A ¶ Constance smiles, sets a mug before her, and says nothing.

### SCENE s00455 | INT. UNDERGROUND BOXING GYM - FORMER SUBWAY STATION - NIGHT
Detected names (may be incomplete or contain aliases): COACH IMELDA, DUARTE-OSEI, NICO VASQUEZ-BELL, SILAS KRAUSE
* 1 A ¶ A tiled platform converted into a gym.
* 2 A A ring sits where the tracks used to run.
* 3 A Ceiling pipes sweat.
* 4 A Bare bulbs swing from wires.
* 5 A Old posters curl on the walls.
6 A ¶ COACH IMELDA "MA" DUARTE-OSEI (60s, towel around neck, gnarled hands) wraps tape around a fighter's fist.
7 A ¶ The fighter is NICO VASQUEZ-BELL (20s, shirtless, shaved head, a tattooed rosary across his collarbone).
8 A He is staring at the floor.
9 A ¶ At the edge of the ring, leaning on the rope, stands their rival's manager, SILAS KRAUSE (50s, camel coat, gold watch).
10 D SILAS: Imelda. Lovely venue.
11 D IMELDA: Silas. You're early.
12 D SILAS: I like to watch the boy warm up.
13 D NICO (not looking up): I'm warm.
14 D SILAS: Of course you are.
15 A ¶ Imelda finishes the tape.
16 A Snips it.
17 A Pats Nico's glove.
18 D IMELDA: Don't listen to him.
19 D NICO: I'm not.
20 D SILAS: I've brought a gift for the champion.
21 A ¶ He places a thick envelope on the ring apron.
* 22 A No one touches it.
23 D IMELDA: We don't take gifts.
24 D SILAS: It's not a gift. It's an opportunity.
25 D NICO: Ma, what is he talking about?
26 A ¶ Imelda doesn't answer.
27 A She stares at Silas.
28 A He stares back.
29 D IMELDA: Get out of my gym.
30 D SILAS: Imelda, be sensible.
31 D IMELDA: Get out.
32 A ¶ Silas lifts both hands in surrender and steps off the platform.
33 A He pauses at the edge.
34 D SILAS: Think about the boy's future.
35 A ¶ He walks off along the dark tunnel.
36 A His footsteps echo and fade.
37 A Nico finally lifts his head.
38 D NICO: How much?
39 D IMELDA: Don't.
40 D NICO: How much, Ma?
41 A ¶ She picks up the envelope and weighs it in her palm.
42 A Then she tosses it onto the ring floor.
43 D IMELDA: Open it.
44 A ¶ Nico climbs into the ring and tears it open.
* 45 A Inside: stacked bills.
* 46 A And a folded note.
47 A He reads it.
48 A His jaw tightens.
49 D NICO: He wants me to go down in the fourth.
50 D IMELDA: And?
51 D NICO: And nothing.
52 A ¶ He crumples the note, drops it, and begins to shadowbox.
53 A Fast.
54 A Ugly.
55 A Violent.
* 56 A The bulbs swing above him.
57 A Imelda watches from the apron, arms folded.
58 D IMELDA (quietly): Again.
59 A ¶ He keeps punching.
60 A Faster.
61 A His breath comes in sobs.
* 62 A The shadows leap across the tile.
63 D NICO (through his teeth): Forty years you've been in this gym.
64 D IMELDA: Forty-three.
65 D NICO: Why'd you let him in?
66 D IMELDA: Because I needed to see what you'd do.
67 A ¶ He stops.
68 A He stands in the center of the ring, chest heaving.
* 69 A The envelope lies at his feet.
70 D NICO: And?
71 D IMELDA: And you're ready.
72 A ¶ She tosses him a mouthguard.
73 A He catches it.
* 74 A A train rumbles in the distance, though no trains have run here for decades, and the entire platform trembles.
75 D NICO (grinning, wild): Fourth round.
76 D IMELDA: Fourth round.
77 A ¶ He bites down on the mouthguard.
78 A She ducks through the ropes with the stool.
* 79 A The bulbs go out.
* 80 A In the dark, a single bell rings.

### SCENE s00456 | EXT. DRAINED COMMUNITY POOL - NIGHT
Detected names (may be incomplete or contain aliases): PAISLEY OKORO-WEST, TIBBY, LUNDGREN, FARRUKH SAIDOV, DEL, ARCEO, LUCA BERNARDI
* 1 A ¶ An empty concrete basin under a bruised sky.
* 2 A Chain-link sagging.
* 3 A Leaves in the deep end.
* 4 A Graffiti: a faded dolphin.
5 A ¶ Five teenagers perch on the diving board and the ladder rails, passing a flask.
6 A ¶ PAISLEY OKORO-WEST (17, braids, a rolled cigarette behind her ear) dangles upside down from the high rail.
7 A Her cousin TIBERIUS "TIBBY" LUNDGREN (16, glasses, secondhand letterman) lies spread on the board.
8 A Next to him sits FARRUKH SAIDOV (17, soccer shorts), cross-legged.
9 A Below them, in the shallow end, DELPHINE "DEL" ARCEO (18, black nail polish) paces, and LUCA BERNARDI (17, fresh sunburn) leans on the wall.
10 D PAISLEY: Tibby, you're going to fall.
11 D TIBBY: That's the plan.
12 D FARRUKH: Tibby, don't.
13 D DEL: Let him. He's been dramatic all week.
14 D LUCA: Del, relax.
15 D DEL: I'm relaxed, Luca.
16 D PAISLEY: You're pacing a trench.
17 A ¶ Tibby sits up.
* 18 A The board bounces.
19 A Farrukh grabs the rail.
20 D TIBBY: I got into Michigan.
* 21 A ¶ The pool goes silent.
22 A Paisley drops from the rail and lands in a crouch.
23 D PAISLEY: Tibby!
24 D FARRUKH: Congratulations, man.
25 D LUCA: That's great.
26 D DEL (flat): Great.
27 A ¶ She lifts the flask and drinks.
28 A Luca watches her.
29 A She hands it to him without looking.
30 D TIBBY: I wasn't going to tell anybody.
31 D DEL: Why not?
32 D TIBBY: Because she'd be like that.
33 A ¶ He jerks his chin at her.
34 A She spins on him.
35 A He holds up both hands.
36 D TIBBY [CONT'D]: Not mean. Just. You know.
37 D PAISLEY: Del, he's allowed to leave.
38 D DEL: I know he is.
39 A ¶ She says it with her back turned.
* 40 A The sky flickers with distant lightning.
41 A Farrukh slides down from the board.
42 A Luca hands her the flask back.
43 A She takes it, and drinks again.
44 D DEL [CONT'D] (quietly): Save me a spot in the dorm.
45 A ¶ Tibby laughs, and the laugh turns into something else.
46 A Paisley hops onto the board and puts her arm around him.
47 A He leans into her shoulder.
48 A ¶ Farrukh climbs the ladder to the deep end and lowers himself into the dry basin.
49 A The others follow, one by one, until all five sit in the center on the leaf-strewn concrete.
50 D LUCA: So. Michigan.
51 D TIBBY: So. Michigan.
* 52 A ¶ Thunder rolls.
* 53 A The first drops of rain hit the bottom of the pool.

### SCENE s00457 | EXT. SNOWBOUND FERRY LANDING - 1840s - DUSK
Detected names (may be incomplete or contain aliases): FERRYMAN ODO BRANDYWINE, STRANGER, WILHELMINA, THADDEUS
* 1 A ¶ A frozen river, a sagging dock, a single lantern swaying.
* 2 A Wind drives powder across the ice.
* 3 A A barge hull is locked in the freeze like a fly in amber.
4 A ¶ FERRYMAN ODO BRANDYWINE (50s, sealskin hat) pokes the ice with a long pole.
5 A Beside him a gaunt STRANGER (30s, black greatcoat, scholar's satchel) watches the far shore.
6 D ODO (to the empty landing): Nobody's crossing tonight!
7 D STRANGER: I paid for a crossing.
8 D ODO: You paid for a ferry. This is a skating rink.
9 D STRANGER: Then I will walk.
10 D ODO: You'll die.
11 D STRANGER: Everyone does.
12 A ¶ Odo spits.
13 A He jabs the pole at the ice, and it cracks like a pistol.
14 A They both flinch.
15 D ODO (muttering): Mad as a March hare.
16 A ¶ A woman's cry carries across the river.
17 A Both men turn.
18 A On the far bank, a small figure waves a lantern.
19 A The Stranger sets down his satchel and shouts.
20 D STRANGER: Wilhelmina!
21 D ODO: You know her?
22 D WILHELMINA [O.S.] (distant): Thaddeus! The ice is thin!
23 D STRANGER (calling): I'm coming!
24 D ODO: Thaddeus. Is that your name?
25 D THADDEUS: It is.
26 D ODO (to himself): Well, Thaddeus, you are about to be a dead one.
27 A ¶ Thaddeus picks up his satchel and steps onto the ice.
28 A Odo grabs his coat.
29 D ODO [CONT'D]: Wait! At least take the pole!
30 A ¶ Thaddeus takes it.
31 A He tests the ice with the pole.
* 32 A It holds.
33 A Another step.
34 A Another.
* 35 A The lantern on the far bank swings in time with his footsteps.
36 D ODO [CONT'D] (shouting after him): If you see the river open, do not stop for love!
37 D THADDEUS (over his shoulder): I never have.
38 A ¶ Odo watches him shrink to a speck against the blue snow.
* 39 A The ice groans.
* 40 A A long crack races beneath the ferry.
41 D ODO (quietly): God keep you, you fool.

### SCENE s00458 | EXT. COLLAPSED SALT CAVE - SAHARA FRINGE - DAY
Detected names (may be incomplete or contain aliases): KOFI AMOAH-LINDQVIST, TAMSIN PARRY-OYELARAN, MARTINEAU
* 1 A ¶ A mouth of white rock half buried in drift.
* 2 A Heat shimmers.
3 A Three survivors huddle in a shallow slice of shade.
4 A ¶ KOFI AMOAH-LINDQVIST (40s, torn flight jacket) kneels by a puddle of brackish water and filters it through his shirt, while TAMSIN PARRY-OYELARAN (30s, bandaged forearm) leans against the stone and presses a swollen tongue against cracked lips, and young EZEQUIEL "ZEKE" MARTINEAU (teens, plastic-framed glasses held on with tape) draws a line in the sand with a stick, over and over, as if it might become a road.
5 D KOFI: Three cups. Maybe four.
6 A ¶ Tamsin nods.
7 A Zeke keeps drawing.
8 D KOFI [CONT'D]: That's a day. Maybe two if we're careful.
9 A ¶ Zeke draws another line, crossing the first.
10 A Kofi hands Tamsin the cup.
11 A She holds it a long moment, then passes it to Zeke without drinking.
12 A Zeke looks at the cup, then at her, then at the line he has drawn.
13 A ¶ He sips once.
14 A He hands the cup back to Kofi.
15 A Kofi, without a word, lifts it to his lips, swallows, and puts it down on the stone between them.
* 16 A ¶ A shadow crosses the sand.
17 A All three look up.
* 18 A A bird, high and slow, wheels over the white ridge.
19 A Tamsin shields her eyes.
20 A Kofi rises to a crouch.
21 A Zeke drops the stick.
* 22 A ¶ The bird circles, tilts, and drops out of sight beyond the rocks.
23 A For a long moment nobody moves.
24 A ¶ Then Kofi picks up the stick, steps over Zeke's lines, and begins to walk.
