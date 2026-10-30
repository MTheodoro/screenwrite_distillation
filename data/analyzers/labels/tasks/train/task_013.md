You are an annotator labeling screenplay scenes for a dataset.

## What to label

Each scene is given as numbered units. `A` = one sentence of action/description text (¶ marks the
first sentence of a paragraph). `D` = one dialogue block, shown as `NAME [extensions] (parenthetical): text`.

Produce one JSON object per scene:

{
  "scene_id": "<id>",
  "cast": {"<every character name variant used in the scene>": "<canonical name>", ...},
  "beats": [<unit numbers that START a beat, ascending; the first non-heading unit always starts one>],
  "lines": {
    "<n>": {"t": "A"|"D"|"S", "who": ["<canonical>", ...], "emo": {"<canonical>": ["<emotion>", <0-1>]}, "c": <0-1>},   // for A units
    "<n>": {"to": ["<canonical>"|"ALL"|"SELF"|"NONE", ...], "emo": ["<emotion>", <0-1>], "c": <0-1>}                     // for D units
  },
  "tension": [<one score 0-100 per beat, same order as "beats">]
}

Rules:
- cast: map EVERY name variant (cue names, CAPS introductions, aliases like STRANGER -> INGRID once named,
  DET. RUIZ / RUIZ) to one canonical name per real person. Unnamed extras get a short canonical (e.g. "GUARD").
- Every A and D unit must appear in "lines" (skip the heading and transitions).
- A units, field t: "A" = a character does something (acts, moves, speaks-without-cue, reacts);
  "D" = a character is described (appearance, introduction, state) ; "S" = no character: setting, objects, sound,
  atmosphere. who = the character(s) performing the action or being described, as canonical names; empty for "S".
  Use several names only when they genuinely act jointly ("They fight", "Both freeze"). Resolve every pronoun.
  If the actor is a crowd or someone not in the cast, use "OTHER".
- D units: to = who the line is addressed to. "ALL" = the group, "SELF" = muttered/thinking aloud,
  "NONE" = no listener (e.g. pure voice-over narration). A phone/radio listener counts as a character.
- emo: emotion actually conveyed by the line's text, subtext, parenthetical or behaviour - not guessed from the
  plot. One of: neutral, joy, sadness, anger, fear, surprise, disgust, affection, with intensity 0-1
  (neutral -> 0-0.2). For A units give emo only for characters whose emotion the sentence shows; otherwise {}.
- c = your confidence that who/to is right (0-1). Be honest: ambiguous pronouns deserve low confidence.
- beats: a beat is the smallest unit in which something dramatically changes - an action, a reaction, a shift
  in tactic, a reveal, an entrance. A beat may be dialogue only, action only, or mixed, and may split an action
  paragraph. Typical beats are 1-8 units long.
- tension: dramatic tension a reader feels in that beat - stakes, conflict, threat, urgency, suspense. Loud or
  violent is not automatically tense; a quiet threat can be very tense. Use absolute anchors so scores compare
  across scenes: 0-15 calm/mundane, 15-35 mild friction or unease, 35-60 clear conflict or suspense,
  60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death / climactic moment.


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01884.json
### SCENE s01884 | INT. COMMUNITY CENTER BASEMENT, BINGO NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): MAGS, DELACOURT-PIKE, DARNELL FONTAINE, LORRAINE FONTAINE, STRANGER, CALVIN
1 A ¶ Folding tables, fluorescent flicker, a coffee urn the size of a toddler.
2 A Forty chairs, eleven players.
3 A A cage of numbered balls spins slowly.
4 A ¶ Behind the microphone, MARGUERITE "MAGS" DELACOURT-PIKE (60s, cardigan, rhinestone glasses) holds a ball.
5 A At table three, DARNELL FONTAINE (30s, delivery uniform) hunches over four cards.
6 A Beside him, his mother LORRAINE FONTAINE (60s, church hat) marks each number with a stub of crayon.
7 D MAGS: B-nine.
8 D LORRAINE: That's yours.
9 D DARNELL: I know it's mine.
10 D MAGS: I-twenty-two.
11 D DARNELL: Mama, I told you I'd come on Thursday.
12 D LORRAINE: You said Thursday, and then you said Friday, and then you said next week.
13 D MAGS: N-forty-one.
14 D DARNELL: I've been working doubles.
15 D LORRAINE: Doing what?
16 D DARNELL: Deliveries. The same as last time you asked.
17 D MAGS: G-fifty-six.
18 D LORRAINE (marking): Funny. I called the depot. They said you quit in May.
19 A ¶ Darnell's crayon stops.
20 A He puts it down.
21 D DARNELL: You called my work.
22 D LORRAINE: I called a number on your jacket.
23 D MAGS: O-seventy-one.
24 A ¶ A STRANGER (40s, windbreaker, clipboard) sits at the edge of table three.
25 A Nobody saw him arrive.
26 D STRANGER: Mr. Fontaine. I'm sorry to interrupt.
27 D DARNELL: Who are you?
28 D STRANGER: Calvin Ortega, county clerk's office. You missed three hearings.
29 D LORRAINE: What hearings?
30 D DARNELL: Mama, don't.
31 D CALVIN: I only need a signature, sir. Right here.
32 D MAGS: Table three, keep it down, please. B-four.
33 A ¶ Darnell takes the pen.
34 A Signs.
35 A His hand shakes.
36 A Lorraine reads the form over his shoulder, then looks at the cards, then at him.
37 D LORRAINE: You lost the apartment.
38 D DARNELL: In June.
39 D LORRAINE: Where have you been sleeping?
40 D DARNELL: In the van. Until they took the van.
41 D MAGS: B-nine. Again. Somebody's got a B-nine.
42 A ¶ Lorraine stands.
43 A The chair scrapes.
44 A Heads turn.
45 A She takes off her church hat and puts it down on the table, very gently, like laying a flag.
46 D LORRAINE: You come home. Tonight.
47 D DARNELL: Mama--
48 D LORRAINE: I am not asking.
49 D DARNELL (rising, voice cracking): Why are you doing this here? In front of everyone?
50 D LORRAINE: Because everywhere else you stop picking up the phone.
51 A ¶ He flings the cards.
52 A They scatter.
53 A Marked or not, they rain across the floor.
54 D DARNELL: I didn't want you to see me like this!
55 D MAGS: Table three!
56 D DARNELL: Like what? Like a man who failed?
57 A ¶ Calvin retreats three steps, clipboard raised like a shield.
58 A Mags has gone silent, one ball in her fist.
59 A Eleven players watch.
60 A The cage creaks once more and stops.
61 D LORRAINE: Like my son.
62 A ¶ He stands there.
63 A She does not move.
64 A Mags, very softly, into the microphone.
65 D MAGS: Bingo, I think. If anyone's asking.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00743.json
### SCENE s00743 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): NKIRU EZEIGBO, WYATT MERRIWEATHER, TOMASZ KOWAL, JUDGE REYNOSO
1 A ¶ Stainless steel.
2 A Mirrored door.
3 A Four floors of descent.
4 A ¶ NKIRU EZEIGBO, thirties, defence attorney, bangs her briefcase against her knee.
5 A WYATT MERRIWEATHER, forties, prosecutor, studies the floor numbers.
6 A TOMASZ KOWAL, fifties, bailiff, keeps both hands on his belt.
7 A ¶ The car shudders.
8 A Lights flicker.
9 A The elevator stops between floors.
10 D NKIRU: Of course.
11 D WYATT: It does this.
12 D TOMASZ: Fourth time this month.
13 A ¶ Nkiru's cell phone buzzes.
14 A She answers on speaker.
15 D JUDGE REYNOSO [V.O.] (over phone): Counsel. Where are you?
16 D NKIRU: Stuck, Your Honour.
17 D JUDGE REYNOSO [V.O.]: Both of you?
18 D WYATT: Mr. Kowal is with us.
19 D JUDGE REYNOSO [V.O.]: I'm calling the jury. You have ten minutes.
20 D NKIRU: Wyatt, we need to settle.
21 D WYATT: I know.
22 D NKIRU: Then why did you reject my offer?
23 D WYATT: Because you didn't make one.
24 D NKIRU: I'm making one now.
25 D WYATT: I'm making one now.
26 A ¶ Silence.
27 A They glare at each other in the mirror.
28 D TOMASZ: For what it's worth, I'd take it.
29 A ¶ Lights return.
30 A The elevator drops with a lurch.
31 A All three grab the rail.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02229.json
### SCENE s02229 | INT. GLASSHOUSE CAFE - ORCHID CONSERVATORY - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): WREN ACHTERBERG, ANSELM DUPREE, OKAFOR, BAO, ROSALIND
1 A ¶ Mist pools under the glass roof.
2 A Hanging orchids drip.
3 A A small iron table sits between a fig tree and a fogged window, laid for tea that has long gone cold.
4 A ¶ WREN ACHTERBERG, thirties, a botanist with ink on her fingers, sits with her coat still buttoned, as though she means to leave.
5 A Across from her, ANSELM DUPREE, late thirties, his tie loosened, turns a teaspoon over and over, as if it might yield an answer.
6 A ¶ Behind them, the staff: MRS. OKAFOR, sixties, upright, in a green apron, polishes the same cup she has been polishing for a minute.
7 A BAO, twenty, a waiter with an unsure grip on a tray, hovers near the fig tree and pretends to adjust a label.
8 D ANSELM: I brought the seeds back.
9 D WREN: I know. You said in your letter.
10 D ANSELM: Four hundred of them. From the Andes.
11 D WREN: That's a lot of seeds.
12 D ANSELM: It's a lot of months.
13 A ¶ She looks at the spoon in his fingers.
14 A He sets it down.
15 D ANSELM [CONT'D]: I should have written more.
16 D WREN: You wrote enough.
17 D ANSELM: Wren.
18 D WREN: I'm tired, Anselm. I've spent two years learning to be fine.
19 A ¶ Mrs. Okafor sets down the cup.
20 A Bao shifts the tray from one hand to the other.
21 D MRS. OKAFOR (softly, to Bao): More hot water.
22 D BAO: They haven't touched the first.
23 D MRS. OKAFOR: Then more hot water, Bao.
24 A ¶ Bao nods and flees toward the kitchen.
25 A A door swings open on the far side of the conservatory.
26 A ¶ A girl of nine steps in, ROSALIND, her coat buttoned wrong, a muddy satchel against her hip.
27 A She stands under the dripping orchids and looks only at Anselm.
28 D ROSALIND: Papa?
29 A ¶ Wren's hand goes still on the table.
30 A Anselm rises, the chair scraping the tile.
31 D ANSELM: Rosalind. You were meant to wait with Aunt Hester.
32 D ROSALIND: She fell asleep. I came by myself. I know the way.
33 A ¶ Wren looks at the child.
34 A At the buttons.
35 A At Anselm.
36 A Something in her face eases and breaks at once.
37 D WREN (quietly): You didn't say you had a daughter.
38 D ANSELM: I was afraid to.
39 A ¶ Rosalind crosses to the table and studies Wren with grave attention.
40 D ROSALIND: Are you the lady with the plants?
41 D WREN: I suppose I am.
42 D ROSALIND: Papa said you know all their names.
43 A ¶ Wren reaches out and, slowly, fixes the girl's top button.
44 A Her fingers are not quite steady.
45 D WREN: Not all. But I could teach you some.
46 A ¶ Mrs. Okafor, from across the room, sets the cup down at last and folds her cloth.
47 A Bao returns with a copper pot, sees the table, and stops where he is, and does not speak.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00669.json
### SCENE s00669 | INT. VETERINARY CLINIC WAITING ROOM - MEDIATION - DAY
Detected names (may be incomplete or contain aliases): SEBASTIAN OYELARAN-PRICE, ANTONIA REYES-HOLLOWAY
1 A ¶ Plastic chairs.
2 A A scale for large dogs.
3 A A poster: ARE YOUR PET'S TEETH TELLING YOU SOMETHING?
4 A A rack of leashes.
5 A A mediator's empty chair sits between two others, its owner stepped out to find a pen.
6 A ¶ SEBASTIAN OYELARAN-PRICE, forties, in a camel coat, sits rigidly with a folder on his knees.
7 A ANTONIA REYES-HOLLOWAY, forties, in a tracksuit, clutches a cat carrier on her lap.
8 D SEBASTIAN: Biscuit is a Maine Coon.
9 D ANTONIA: Biscuit is a cat.
10 D SEBASTIAN: I paid for the vaccinations.
11 D ANTONIA: I clean the box.
12 A ¶ The carrier shifts.
13 A A paw pokes through the grille.
14 A Antonia looks down, and her face softens.
15 D ANTONIA [CONT'D]: Hello, my love.
16 D SEBASTIAN: Don't baby him. He's eleven.
17 D ANTONIA: He's a baby.
18 D SEBASTIAN: Six months each. Alternating. That's what she's going to propose.
19 D ANTONIA: He gets carsick because you drive like a lunatic.
20 D SEBASTIAN: I drive like a person!
21 D ANTONIA: You drive like a person who's late for his own cat.
22 A ¶ The carrier jolts.
23 A Both lunge for it.
24 A Antonia pulls it to her chest, Sebastian grabs the handle, and for a moment the two of them are bent over it like surgeons, each with a hand on it.
25 A The latch pops.
26 A Biscuit, enormous and orange, steps out.
27 A ¶ Both freeze.
28 A The cat looks at one, then the other.
29 A It walks to the scale, hops on, and settles.
30 A The readout flickers: 19.4.
31 D SEBASTIAN: Nineteen pounds.
32 D ANTONIA: Because you feed him cheese.
33 D SEBASTIAN: Because you feed him tuna.
34 A ¶ Neither moves toward the cat.
35 A Then, slowly, Sebastian crouches and holds out a finger.
36 A Antonia kneels beside him.
37 A Biscuit sniffs, and begins to purr.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00333.json
### SCENE s00333 | INT. CAROUSEL WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): MINA, TEDDY, OSRIC, LOLA
1 A ¶ A cavernous barn of splintered painted horses, hanging by chains from the rafters, their glass eyes catching a single lantern.
2 A Sawdust drifts like snow.
3 A ¶ MINA, twenties, a documentary photographer, raises a camera.
4 A TEDDY, thirties, her guide, grips a crowbar.
5 A OSRIC, sixties, the caretaker, stands rigid in the doorway with a ring of keys.
6 A LOLA, ten, Osric's granddaughter, clutches a plush rabbit.
7 D MINA: Teddy, did you hear that?
8 D TEDDY: It's the wind.
9 D OSRIC: No wind in here.
10 D LOLA: Grandpa, the horses are looking at me.
11 D TEDDY: Lola, honey, they're wood.
12 D MINA: Teddy, look up.
13 D OSRIC: Lola, come here.
14 A ¶ A chain clinks.
15 A One painted horse swings, slow.
16 A Another turns its head.
17 D TEDDY: Mina, back up.
18 D MINA: I'm trying.
19 D LOLA: Grandpa!
20 A ¶ The lantern gutters.
21 A All the horses begin to descend at once on their chains, slamming into the floor, shrieking, wheels turning, the whole carousel lurching into motion in the dark.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00283.json
### SCENE s00283 | INT. FAMILY MINIVAN - DRIVE-THROUGH BREAKFAST LANE - MORNING
Detected names (may be incomplete or contain aliases): ROLAND ESPINOZA-HART, NEELAM ESPINOZA-HART, TAMSIN, FELIX
1 A ¶ Rain on the windshield.
2 A Four people.
3 A One bag of hash browns that has already been opened.
4 A ¶ He is at the wheel, shouting into the speaker box while checking the mirror, the clock, and his phone all at once.
5 A His name is ROLAND ESPINOZA-HART (40s, tie half-knotted).
6 A ¶ She is in the passenger seat, shouting over him to the speaker box, with a coffee in one hand and a sleeping bag stuffed under her arm.
7 A This is NEELAM ESPINOZA-HART (40s, hospital scrubs).
8 A ¶ In the back, a girl of twelve, TAMSIN, kicks the seat.
9 A A boy of seven, FELIX, is standing on the seat, pressing his nose to the glass.
10 A A sibling war has broken out over the hash browns.
11 A They each have one hand in the bag and one hand on the other's face.
12 A Roland reaches back without looking and swats at both.
13 A Neelam reaches back, too, and her coffee spills down Roland's sleeve.
14 A He yelps.
15 A Tamsin shrieks.
16 A Felix falls off the seat onto the floor, still holding the bag.
17 D ROLAND: Two number threes!
18 D NEELAM: Three!
19 D TAMSIN: He's eating mine!
20 D FELIX: It's MY bag!
21 D ROLAND: Everybody stop!
22 A ¶ Nobody stops.
23 A The speaker box crackles.
24 A The car behind them honks.
25 D NEELAM: Roland, move up.
26 D ROLAND: I'm moving!
27 A ¶ He is not moving.
28 A He is reaching for a napkin.
29 A Felix's foot is on the horn.
30 A The honk goes long.
31 A Neelam lunges for the foot.
32 A Tamsin grabs the napkin.
33 A Roland swerves a half inch and hits the speaker post.
34 A ¶ The speaker box goes silent.
35 A All four freeze, mid-motion, a family in tableau.
36 A Then everyone starts again.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00585.json
### SCENE s00585 | INT. AGING CELLAR - CHEESE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): GRETA SOLBERG, PASCAL ANTOINE
1 A ¶ A limestone tunnel hung with wheels of cheese on pine shelves, rows of pale moons receding into the dark.
2 A Cold, wet air.
3 A The smell of ammonia and old milk.
4 A A red headlamp sweeps the walls.
5 A ¶ She works alone.
6 A GRETA SOLBERG, 40s, compact, grey braid tucked into her collar, a stethoscope looped around her neck and a canvas roll of tools at her hip.
7 A She runs her palm along the wall, ear tilted to a hidden hum.
8 A ¶ She stops at a barrel marked in chalk.
9 A Taps it three times.
10 A Taps again, lower.
11 A ¶ Behind the barrel: a steel door.
12 A Wall-sunk.
13 A Painted the same grey as the limestone, but no stone ever gleamed like that.
14 A ¶ She sets the stethoscope against the lock.
15 A Closes her eyes.
16 A Turns the dial a hair.
17 A Another.
18 A Her mouth moves, counting.
19 A ¶ The headlamp flickers.
20 A She freezes.
21 A ¶ Footsteps.
22 A Slow.
23 A From the entrance of the cave.
24 A ¶ She kills the lamp.
25 A Dark.
26 A She presses herself behind the barrel, a hand sliding to the pry bar at her belt.
27 A ¶ A flashlight beam wanders down the tunnel.
28 A Along the shelves.
29 A The beam bounces off the cheese rinds, ghost-white.
30 A ¶ PASCAL ANTOINE, 30s, climbs into frame.
31 A Long coat.
32 A Soft hat.
33 A A paper bag in one hand, a thermos in the other.
34 A He hums, off-key.
35 A He's not here for her.
36 A He's here for the night shift.
37 A ¶ He stops.
38 A Sniffs the air.
39 D PASCAL (muttering): Smells like feet again.
40 A ¶ He sets his thermos on a shelf.
41 A Eats something from the bag.
42 A The hum resumes.
43 A ¶ She waits, perfectly still.
44 A He turns his back and starts to inspect a wheel, tilting it to the light.
45 A ¶ She slides out from behind the barrel.
46 A One step.
47 A Two.
48 A Her boots make no sound on the damp stone.
49 A ¶ He stops humming.
50 A Doesn't turn.
51 D PASCAL [CONT'D] (softly): You're good.
52 D GRETA: You're early.
53 D PASCAL: You're late.
54 A ¶ He turns, smiling.
55 A She lowers the bar.
56 A They regard each other for a long moment across the cheese.
57 D PASCAL [CONT'D]: Did you get it open?
58 D GRETA: Two numbers left.
59 D PASCAL: Then let me hold the light.
60 A ¶ He flicks on his flashlight, angles it just so.
61 A She kneels at the dial.
62 A Her hands steady.
63 A The lock turns, a soft double click.
64 A ¶ The door swings open on darkness and a faint chill of something better than cheese.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00413.json
### SCENE s00413 | EXT. GLACIER CAVE MOUTH - DAWN
Detected names (may be incomplete or contain aliases): MORWENNA, IVAR
1 A ¶ A cathedral of blue ice.
2 A Cold fire glints along its roof.
3 A Wind keens through a crack as tall as a house.
4 A Snow whips past the entrance.
5 A ¶ MORWENNA, 30s, a ranger in a hooded sealskin cloak with a spear, plants her feet at the cave mouth.
6 A IVAR, 70s, her mentor, white-bearded, leaning on a staff of driftwood, wheezes beside her.
7 D MORWENNA: It's in there.
8 D IVAR: It's always been in there.
9 A ¶ She steps forward.
10 A The ice floor groans.
11 A A low note thrums from deep inside the cave, a note too big for a throat.
12 A They both freeze.
13 A The crack in the ceiling widens by a finger's width, and a skein of powder sifts down on their shoulders.
14 D IVAR [CONT'D]: It knows you.
15 D MORWENNA: It doesn't.
16 A ¶ Out of the dark, an eye opens, pale as a moon, vertically slit.
17 A It regards them.
18 A Morwenna lifts her spear.
19 A Ivar grabs her wrist.
20 A They struggle, once, hard, until the spear clatters on the ice.
21 D IVAR [CONT'D]: No weapons. Never weapons.
22 A ¶ The eye blinks.
23 A The wind falls away.
24 A Morwenna looks at the old man, then at the eye, and slowly, she kneels.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00626.json
### SCENE s00626 | EXT. SALT FLAT - DEAD VEHICLE - DAY
Detected names (may be incomplete or contain aliases): IMOGEN STRAND, CALLUM REID
1 A ¶ A white plain, blinding, cracked in hexagons to the horizon.
2 A The heat has a sound.
3 A A pickup truck sits dead on its rims with the hood propped open, and in its thin stripe of shade two figures sit side by side on the dirt.
4 A ¶ IMOGEN STRAND, forties, sun-darkened, cracked lips, a scarf tied over her head, shreds a map into narrow strips and braids them.
5 A Across from her, CALLUM REID, twenties, her nephew, with a gaze fixed so steady it has stopped meaning anything, turns a plastic bottle slowly, holding it up to the light.
6 A ¶ Half a finger of water.
7 A Maybe less.
8 D IMOGEN (to the empty horizon): Eleven miles to the highway. Maybe nine.
9 D CALLUM: Maybe.
10 A ¶ She finishes the braid and ties it around his wrist without asking.
11 A He lets her.
12 D IMOGEN (muttering): Should've turned at the cattle guard.
13 A ¶ He sets the bottle down between them, label facing her, a quiet gesture of an offer.
14 A She pushes it back with one finger.
15 A He pushes it again.
16 A For a long moment neither of them speaks.
17 A ¶ Then Imogen's eyes go past him, to the truck's rear bumper, and stay there.
18 A A pale smear of damp in the dirt.
19 A A slow, steady drip from under the truck.
20 A ¶ Callum turns to look.
21 A His face doesn't change.
22 A His hand closes over hers.
23 D CALLUM: It's the radiator.
24 D IMOGEN: It's the water tank, Cal. The tank was full.
25 A ¶ He gets up very slowly.
26 A In the shade of the chassis, the second spare jug lies on its side, its cap cracked, empty.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00367.json
### SCENE s00367 | INT. WAX MUSEUM - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HOLLIS DRAKE, WILHELMINA VOSS, CONSTABLE REUBEN OKAFOR-LEE, MADAME ODILE FERRIER, LORD ASHTON PEMBERTON, NURSE JOSEPHINE BELL, PHONE
1 A ¶ A wax museum at midnight.
2 A Rows of lifelike figures in period costume, glass eyes catching the exit light.
3 A A velvet rope sags.
4 A A faint scent of melting paraffin hangs in the dark.
5 A ¶ INSPECTOR HOLLIS DRAKE, fifties, trench-coated, a pocket flashlight in his teeth, crouches by a figure of Napoleon.
6 A DR. WILHELMINA VOSS, forties, the museum curator, stands over him with a clipboard.
7 A CONSTABLE REUBEN OKAFOR-LEE, twenties, shifts his weight at the door, hand on his truncheon.
8 A MADAME ODILE FERRIER, seventies, the sculptor, sits on a folding stool gripping a cane.
9 A LORD ASHTON PEMBERTON, sixties, the patron, leans against a plinth, his cravat undone.
10 A NURSE JOSEPHINE BELL, thirties, hovers at his shoulder with a medical bag.
11 D DRAKE (to Wilhelmina): When was this figure last moved?
12 D WILHELMINA: Never. It's been bolted since 1962.
13 D DRAKE: Then who changed his hat?
14 D WILHELMINA: I'm sorry?
15 A ¶ He stands.
16 A He lifts the bicorne from Napoleon's head.
17 A Beneath it, the wax has been scored with a fine hairline crack, and in the crack, something glints.
18 D DRAKE: Constable, gloves.
19 D REUBEN: Here, sir.
20 A ¶ He hands them over.
21 A Drake slides a gloved finger into the crack, hooks the glint, and draws it out: a small brass key.
22 D PEMBERTON: Well, there you are. A key. How delightful.
23 D ODILE (sharply): Ashton.
24 D PEMBERTON: What, Odile?
25 D ODILE: You promised.
26 A ¶ Pemberton straightens.
27 A Josephine's hand drifts to his sleeve.
28 A He shakes it off.
29 D DRAKE: Lord Pemberton, you've seen this key before.
30 D PEMBERTON: I haven't.
31 D DRAKE: You have a matching one in your waistcoat.
32 A ¶ Pemberton's hand goes to his chest.
33 A Odile bows her head.
34 A Wilhelmina lowers her clipboard.
35 D WILHELMINA: Inspector, what does the key open?
36 D DRAKE: Dr. Voss, I believe you can tell me.
37 D WILHELMINA (a long pause): The cellar. Under the Chamber of Horrors.
38 D DRAKE: And what's in the cellar?
39 D WILHELMINA: The first sculpture. The one Madame Ferrier never exhibited.
40 A ¶ All eyes turn to Odile.
41 A She sets down her cane.
42 A She lifts her chin.
43 D ODILE: I made her so well, Inspector. So very well. Nobody could tell she wasn't alive.
44 D DRAKE: Who was she?
45 D ODILE: My sister.
46 D REUBEN: Ma'am?
47 D ODILE: She sat for me on the last night of her life. I could not bear to let her go.
48 D JOSEPHINE (whispering to Pemberton): You knew?
49 D PEMBERTON (low): I paid to keep it quiet.
50 D DRAKE: Constable, escort Madame Ferrier and Lord Pemberton to the carriage. Nurse Bell, you will assist Dr. Voss with the cellar.
51 D REUBEN: Yes, sir.
52 D PHONE [V.O.] (from the hallway): Inspector, this is the Commissioner. Have you concluded?
53 D DRAKE (calling toward the hall): Nearly, sir.
54 A ¶ Drake pockets the key.
55 A Odile rises with surprising grace and takes Reuben's arm.
56 A At the door she stops, turns, and looks at the figures one last time.
57 D ODILE: They keep better than we do, you know.
58 A ¶ She exits.
59 A The wax faces stare after her.
60 A Drake switches off his flashlight and the museum goes dim.
