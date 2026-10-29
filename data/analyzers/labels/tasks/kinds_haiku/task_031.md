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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0131.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00981 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): RAFAELA, JUNE, KOWALCZYK
* 1 A ¶ A cramped brick box.
* 2 A An old carbon-arc projector clatters.
* 3 A Film cans stacked like pizza boxes.
* 4 A Through the slit window, a giant screen glows over an empty lot.
5 A ¶ RAFAELA (17, denim jacket, a lighter in her fist) sits on the stool.
6 A JUNE (17, cardigan, hair pinned back) stands at the door.
7 A Both are tense.
8 D JUNE: You told me it was just a smoke.
9 D RAFAELA: It is just a smoke.
10 A ¶ She flicks the lighter.
* 11 A A small flame.
12 A She stares at it, then at the stacked cans.
13 D JUNE: That's nitrate film, Rafaela.
14 D RAFAELA: I know.
15 D JUNE: It burns like gasoline.
16 A ¶ She clicks the lighter shut.
* 17 A Too late.
* 18 A A can on the shelf flares with a quiet whump.
19 D JUNE [CONT'D]: Oh my God.
* 20 A ¶ Smoke blooms.
21 A She grabs a blanket and smothers it.
22 A Rafaela stamps.
23 A They cough, eyes wide, bodies bent.
* 24 A ¶ The door swings open.
25 A MR. KOWALCZYK (60s, suspenders, a flashlight) stands there.
* 26 A Smoke curls around his head.
27 D MR. KOWALCZYK: Which one of you is on fire?
28 D RAFAELA: Nobody. It's the projector.
29 D MR. KOWALCZYK: The projector is not made of smoke.
30 D JUNE: It was an accident, sir.
31 A ¶ He sniffs.
32 A Looks at the blackened can.
33 A Then at the two of them.
34 A For a long moment, he says nothing.
35 D MR. KOWALCZYK: That was the last reel of "The Birds."
36 D RAFAELA: We're so sorry.
37 D MR. KOWALCZYK: It was a bad print anyway.
38 A ¶ He tosses the flashlight to June.
39 A She catches it.
40 D MR. KOWALCZYK [CONT'D]: Open a window. And never bring fire in here again.
41 A ¶ He leaves.
42 A They stare at each other.
43 A Then they laugh, shaky and helpless, as the screen outside goes dark.

### SCENE s00982_0 | EXT. CABLE CAR OVER SPLINTER GORGE - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A red gondola dangles beneath a single steel cable.
* 2 A Below, white rapids.
* 3 A Above, a bruised sky.
* 4 A The car has been still for hours.

### SCENE s00982_1 | INT. CABLE CAR - CONTINUOUS
Detected names (may be incomplete or contain aliases): ABEBE, SOLVEIG, BIG MO, TERESA, BILLIE
* 1 A ¶ Cramped.
* 2 A Fogged glass.
* 3 A Cold.
4 A Four people in parkas.
5 A ¶ ABEBE (50s, guide's badge, steady) sits with a radio on his knee.
6 A SOLVEIG (30s, mountaineering gear) checks the roof hatch.
7 A BIG MO (40s, shaved head, shaking hands) clutches the safety bar.
8 A TERESA (20s, camera round her neck) films the glass.
9 D SOLVEIG: Two hours since the stall.
10 D ABEBE: Rescue knows we're here.
11 D BIG MO: Then why isn't anyone coming?
12 D ABEBE: Because the wind is bad.
13 D TERESA (to the camera): Day one. We are still alive.
14 D SOLVEIG: Turn that off.
15 D TERESA: It's evidence.
16 D SOLVEIG: Of what?
17 D TERESA: Of how scared we are.
18 D BIG MO: I'm not scared.
19 A ¶ He grips the bar tighter.
* 20 A The car sways.
21 A He swallows.
22 D ABEBE: Everyone sit down. Slowly. Weight low.
23 A ¶ They obey.
* 24 A The car steadies.
25 D BIG MO (muttering): Don't look at the river. Don't look at the river.
26 D SOLVEIG: Mo, you're doing fine.
27 D BIG MO: I'm not.
28 D ABEBE: Radio's picking up something.
29 A ¶ He turns the dial.
* 30 A Static.
* 31 A A voice, thin and far away.
32 D BILLIE [V.O.]: ...hold on... coming up the line...
33 D TERESA: Did you hear that?
34 D SOLVEIG: Quiet.
* 35 A ¶ The car shudders.
* 36 A A thump on the roof.
* 37 A Another.
* 38 A Dust sifts from the hatch.
39 D ABEBE: Stay away from the door.
* 40 A ¶ The hatch opens.
* 41 A A rope drops.
* 42 A Then boots.
43 A BILLIE (30s, orange rescue suit, harness clanking) swings in feet first, grinning.
44 D BILLIE: Evening, folks. Everybody breathing?
45 D BIG MO: You're real.
46 D BILLIE: Last time I checked.
47 D TERESA: How many of us can you take?
48 D BILLIE (brightly): Well, that's the thing.
49 A ¶ She unclips.
50 A Looks at the four of them.
51 A Her smile fades.
52 D BILLIE [CONT'D]: The line's frayed, and it's holding my weight just fine. It won't hold yours.
53 D SOLVEIG: What does that mean?
54 D BILLIE: It means I came to tell you the other cars are gone. This one's next.
* 55 A ¶ Silence.
* 56 A The cable groans.
57 D ABEBE: How long?
58 D BILLIE: Until the wind turns? Maybe an hour.
59 D BIG MO: Then why come?
60 D BILLIE: Because someone should be here.
61 D TERESA (to the camera, very quietly): Day one.
62 A ¶ Solveig takes the camera.
63 A Turns it off.
64 A She puts an arm around Teresa.
65 D SOLVEIG: Okay. Then we use the hour.
66 D ABEBE: Everyone give me your coats. We make a sling.
67 D BIG MO: For who?
68 D ABEBE: For whoever goes first.
69 A ¶ Billie hands her radio to Abebe.
70 A He takes it and nods.
71 D BIG MO: I'll go last.
72 D SOLVEIG: Mo...
73 D BIG MO: I'm done being scared of the river.
* 74 A ¶ The car sways.
75 A They hold on.

### SCENE s00983 | INT. LOCK-KEEPER'S COTTAGE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE BELLWEATHER, PRU, HALVORSEN
* 1 A ¶ A low stone room above a canal lock.
* 2 A Wet rope on hooks.
* 3 A A brass wall telephone.
* 4 A A kettle on a coal stove.
* 5 A Water thuds against the lock gate outside.
6 A ¶ AUGUSTINE BELLWEATHER (60s, tall, rain-soaked inspector's coat, magnifier on a cord) stands over a desk covered with tide charts.
7 A ¶ PRU (20s, lock-keeper's apprentice, mud on her boots) sits on the stool, hugging a lantern.
8 D AUGUSTINE: Say it again, from the top.
9 D PRU: I heard a splash around midnight. I went down. The gate was open and the barge was gone.
10 D AUGUSTINE: And the body?
11 D PRU: There was no body.
12 D AUGUSTINE: Then why does the captain say there was one?
* 13 A ¶ The phone rings.
14 A Both startle.
15 A Augustine lifts the receiver.
16 D AUGUSTINE [CONT'D]: Bellweather.
17 D HALVORSEN [V.O.] (filtered, tense): Inspector. It's Halvorsen at the harbor. We've found the barge.
18 D AUGUSTINE: Where?
19 D HALVORSEN [V.O.]: Two locks downstream. Empty. Except for a woman's boot.
20 A ¶ Pru goes pale.
21 A She drops the lantern.
* 22 A It rolls, flickers, and stays alight.
23 D AUGUSTINE: Whose boot?
24 D HALVORSEN [V.O.]: Size six. Leather. Mud on the heel.
25 A ¶ Augustine lowers the phone.
26 A Looks at the girl.
* 27 A At her feet.
28 D AUGUSTINE: Miss Pru. Please take off your boots.
29 D PRU: Sir, I can explain.
30 D AUGUSTINE: I don't doubt it.
31 A ¶ She bends.
32 A Unlaces one boot.
33 A Her hands tremble.
34 A Then she laughs, suddenly, and pulls out a second pair from under the stool.
35 D PRU: I swapped them. They're my mother's. I wanted to see how it felt to wear them.
36 A ¶ Augustine stares.
* 37 A The kettle whistles.
38 D HALVORSEN [V.O.]: Inspector? Are you there?
39 D AUGUSTINE (into phone): Yes. I think we've been chasing a cobbler's mistake.
40 A ¶ He hangs up.
41 A Pours the tea.

### SCENE s00984 | INT. MATTRESS SHOWROOM - MIDNIGHT
Detected names (may be incomplete or contain aliases): WANDA, GUS, KIT
* 1 A ¶ Rows of beds under spotlights.
* 2 A A banner: "24-HOUR SLEEP-OFF!"
* 3 A A single clock ticks.
4 A ¶ WANDA (50s, silk robe, sleep mask pushed up) lies stiffly on a king-size, hands folded like a corpse.
5 A GUS (60s, store manager, tie loosened) hovers with a clipboard.
6 A KIT (20s, intern, pajama pants) kneels at the bedside holding a tiny stopwatch.
7 D GUS: Wanda, you've been lying there for nineteen hours.
8 D WANDA: Eighteen hours, forty minutes, Gus.
9 D KIT: She's right. I've been counting.
10 D GUS: Kit, you shouldn't be encouraging her.
11 D KIT: She's very peaceful, Mr. Gus.
12 D WANDA: The prize is a lifetime supply of pillows.
13 D GUS: It's one pillow. You'd get one pillow.
14 D WANDA: A good pillow.
15 A ¶ Gus sighs.
16 A Sits on the next mattress.
17 A Yawns.
18 A Kit yawns.
19 A Wanda smiles, eyes closed.
20 D WANDA [CONT'D]: Gus, dear. Don't lie down.
21 D GUS: I'm just resting my back.
22 D KIT: Mr. Gus, you're horizontal.
23 D GUS: I'm... diagonal.
24 A ¶ Wanda sits up with a crisp snap.
25 A Pulls a gleaming trophy from under the sheets.
26 D WANDA: Three days ago I faked that bed rule. The contest only requires you to stay in the store.
27 D GUS: You were never asleep?
28 D WANDA: Not for a second.
29 A ¶ Kit slumps to the floor, snoring.

### SCENE s00985 | INT. PICKLE CELLAR - GRANDMOTHER'S FARMHOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): NONNA FLORENTINA, EMEKA, TAMSIN, STRANGER, BARTOSZ
* 1 A ¶ A low, cool stone room lined with shelves of jars.
* 2 A Dill, vinegar, garlic.
* 3 A A single bulb on a cord.
* 4 A Dust turns in the light.
5 A ¶ NONNA FLORENTINA (80s, small, apron, forearms like rope) sorts jars by hand.
6 A Her grandson EMEKA (10, school uniform, backpack) sits on an upturned crate, swinging his legs.
7 A His mother TAMSIN (40s, scrubs, car keys in hand) stands on the bottom step.
8 A ¶ She watches the old woman.
9 A She doesn't speak.
10 D EMEKA: Nonna, why do you turn the jars?
11 D NONNA FLORENTINA: So the brine moves. Stale brine makes soft pickles.
12 D EMEKA: How do you know which ones are soft?
13 D NONNA FLORENTINA: You listen. A good jar clicks.
14 A ¶ She taps one with a fingernail.
15 A Holds it to his ear.
16 A He listens, frowns, nods.
17 D TAMSIN: Mama, I have to get back to the hospital.
18 D NONNA FLORENTINA: Then go.
19 D TAMSIN: I told the school I'd pick him up at four.
20 D NONNA FLORENTINA: And you did.
21 A ¶ She doesn't turn around.
22 A Tamsin shifts on the step.
23 A Checks her watch.
24 A Puts it away.
25 D EMEKA: Mum, can I stay for dinner?
26 D TAMSIN: You have homework.
27 D EMEKA: I can do it down here.
28 D NONNA FLORENTINA: There is no light down here.
29 D EMEKA: There's the bulb.
30 A ¶ She smiles at that.
31 A She wipes her hands on her apron.
* 32 A ¶ Upstairs, the screen door bangs.
* 33 A Footsteps cross the floor above.
* 34 A Dust drifts down from the beams.
35 A All three look up.
36 D TAMSIN: Who's that?
37 D NONNA FLORENTINA: Probably the man about the gutters.
* 38 A ¶ Heavy boots on the cellar stairs.
* 39 A A shadow fills the doorway.
40 A A STRANGER (50s, work jacket, cap in hands, polite) ducks under the frame.
41 D STRANGER: Sorry to bother you. Door was open.
42 D TAMSIN: Can we help you?
43 D STRANGER: I'm looking for Florentina Marchetti.
44 D NONNA FLORENTINA: You found her.
45 A ¶ He steps into the light.
46 A He looks at the jars.
47 A At the boy.
48 A At her.
49 D STRANGER: My name's Bartosz. You knew my father. Janek.
50 A ¶ She sets down the jar slowly.
51 A Her face does not change.
52 A Her hands do.
53 D NONNA FLORENTINA: Janek the tinsmith.
54 D BARTOSZ: That's the one.
55 D TAMSIN: Mama?
56 D NONNA FLORENTINA: It's all right, Tamsin.
57 A ¶ She wipes her hands again.
58 A Longer this time.
59 D NONNA FLORENTINA [CONT'D]: He used to come down here in August. Said my brine was the only thing in the county worth a hungry man's trouble.
60 D BARTOSZ: He said that about you, too.
61 D EMEKA: Who is he?
62 D NONNA FLORENTINA: Someone's son.
63 A ¶ She lifts a jar from the shelf, wipes the lid, and holds it out to Bartosz.
64 D NONNA FLORENTINA [CONT'D]: Listen.
65 A ¶ He takes it.
66 A Holds it to his ear.
* 67 A The cellar is very quiet.
68 D BARTOSZ: It clicks.
69 D NONNA FLORENTINA: Good. It's yours.
70 A ¶ Tamsin steps down at last.
71 A Sits beside her son on the crate.
72 A Neither of them says anything.
* 73 A The bulb sways a little, then settles.

### SCENE s00986 | EXT. MANGROVE RIVER - RAFT - DUSK
Detected names (may be incomplete or contain aliases): KOFI, NAOMI, HAKON, RUSLAN
* 1 A ¶ The river is brown glass between walls of knotted roots.
* 2 A Mosquitoes hang in the amber light.
* 3 A A flat raft of lashed bamboo drifts without a pole, carried by a current too slow to feel.
4 A ¶ KOFI (30s, bare-chested, sunburnt) lies on his back with a torn shirt over his face.
5 A NAOMI (30s, cropped hair, cracked lips) kneels at the edge, trailing a hand in the water.
6 A HAKON (70s, white beard, wool cap, still in a ruined parka) sits cross-legged, tying and untying the same knot.
7 A RUSLAN (8, too-big life vest) watches a heron on a root.
8 A ¶ Nobody speaks.
* 9 A Somewhere a frog begins and stops.
10 A ¶ Kofi lifts the shirt.
11 A Squints at the sky.
12 A Lets it fall.
13 A ¶ Naomi draws her hand from the water and looks at her fingers, wrinkled and white.
14 A She wipes them on her thigh.
15 A ¶ Hakon pulls the knot tight.
16 A Studies it.
17 A Loosens it.
18 A ¶ Ruslan holds out a cupped palm toward the heron.
* 19 A The bird lifts, unhurried, and flaps over the trees.
20 A He and Naomi both follow it with their eyes.
21 A Kofi and Hakon do not.
* 22 A ¶ The raft turns a bend.
* 23 A Ahead, the mangroves part on a long gray mud flat.
* 24 A Far off, a roofline.
* 25 A Maybe a boat shed.
* 26 A Maybe a mirage.
27 A ¶ All four see it.
28 A All four go still.
29 A Nobody says a word, in case the word makes it vanish.

### SCENE s00987 | INT. DIVING BELL - CHANNEL FLOOR, 1861
Detected names (may be incomplete or contain aliases): ARCHIBALD PENHALLOW, TOBIAS FENWICK, CORNELIUS VANE
* 1 A ¶ A riveted iron bell, six feet across.
* 2 A Two brass portholes.
* 3 A A hissing air hose.
* 4 A Green water presses against the glass.
* 5 A A candle burns in a sealed lantern.
6 A ¶ ARCHIBALD PENHALLOW (50s, engineer, mutton-chop whiskers) crouches at the air valve.
7 A DR. TOBIAS FENWICK (40s, naturalist, spectacles fogged) clutches a specimen jar.
8 A CORNELIUS VANE (30s, company agent, pinstripe suit ruined by damp) sits rigid on the bench.
9 D ARCHIBALD: Forty feet. Pressure steady.
10 D TOBIAS: Marvelous. Marvelous. Look at the light.
11 D CORNELIUS: I am looking at the water, Doctor. It is looking back.
12 D ARCHIBALD: Keep your voice down. Sound travels.
13 D CORNELIUS: Where would it travel to?
14 D ARCHIBALD: The surface. Where the men on the pump are listening for trouble.
* 15 A ¶ A tap on the glass.
16 A All three look.
* 17 A A pale fish, huge and slow, drifts past.
18 D TOBIAS: Lophius. Oh, Cornelius, you must see this.
19 D CORNELIUS: I have no wish to see it.
20 D TOBIAS: It's a monkfish. A giant.
21 A ¶ He holds up the jar.
22 A Fogs the porthole with his breath.
23 A Wipes it.
24 A He leans so close his nose touches the glass.
25 D ARCHIBALD: Get back from the window.
26 D TOBIAS: It's only a fish.
27 D ARCHIBALD: It's the pressure on the glass I'm worried about.
28 D CORNELIUS: You said it was safe.
29 D ARCHIBALD: I said it was safe if we keep still.
* 30 A ¶ The bell shudders.
* 31 A A low groan from the iron seams.
* 32 A The candle gutters.
33 D CORNELIUS: What was that?
34 D ARCHIBALD: The sea settling.
35 D TOBIAS: Is it settling, or moving?
36 D ARCHIBALD: Be quiet. Both of you.
37 A ¶ He unhooks a speaking tube and listens.
* 38 A Nothing.
39 A He taps it.
* 40 A Nothing.
41 D ARCHIBALD [CONT'D]: The line's dead.
42 D CORNELIUS: Then we're lost.
43 D ARCHIBALD: We are not lost. The pump men have a signal. Three tugs on the cord.
44 A ¶ He seizes the cord.
45 A Pulls three times.
* 46 A Waits.
47 A Pulls again.
* 48 A ¶ Silence.
49 A Tobias lowers the jar.
50 A His hand trembles.
51 A He sets it on the floor.
52 D TOBIAS: I have always wanted to die in the name of science. I merely hadn't pictured it so damp.
53 D CORNELIUS: Doctor, please.
54 D ARCHIBALD: Nobody is dying. Cornelius, hand me that wrench.
55 D CORNELIUS: This one?
56 D ARCHIBALD: The long one.
57 A ¶ Cornelius passes it.
58 A Archibald hammers the iron wall.
* 59 A Once.
* 60 A Twice.
* 61 A Three times.
* 62 A A pause.
* 63 A ¶ Three muffled knocks answer from above.
64 A All three exhale at once.
65 D TOBIAS: They heard.
66 D ARCHIBALD: They always hear.
* 67 A ¶ The bell lurches.
* 68 A Rises.
* 69 A Slowly.
* 70 A The water in the porthole begins to lighten from green to gray.
71 D CORNELIUS: Archibald?
72 D ARCHIBALD: Yes?
73 D CORNELIUS: When we are up, I intend to be sick.
74 D ARCHIBALD: Hold on to the bench.

### SCENE s00988 | INT. PICKLE FACTORY ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): HARVEY, STRANGER, ALBERTO
* 1 A ¶ A steel freight lift.
* 2 A Slimy floor.
* 3 A A single flickering bulb.
* 4 A The smell of brine is overwhelming.
5 A ¶ HARVEY (40s, hairnet, clipboard) leans on one wall, scowling at the buttons.
6 A A STRANGER (40s, windbreaker, visitor badge, big grin) stands on the other, holding a jar.
7 D STRANGER: Great plant you've got here.
8 D HARVEY: It's a factory.
9 D STRANGER: Great factory.
* 10 A ¶ The elevator groans.
* 11 A Stops.
* 12 A Lights dim.
13 D HARVEY: Oh, no.
14 D STRANGER: Is that normal?
15 D HARVEY: It's never happened. Ever.
16 D STRANGER: Ever?
17 D HARVEY: Except Tuesday.
18 A ¶ He jabs a button.
* 19 A Nothing.
20 A He tries again.
* 21 A Nothing.
22 A The man unscrews the jar and sniffs.
23 D STRANGER: You mind if I eat one?
24 D HARVEY: Those are the quality-control samples.
25 D STRANGER: I'm quality control.
26 D HARVEY: I'm quality control.
27 D STRANGER: I mean, I'm also quality control. We're all quality.
28 A ¶ He pops a pickle in his mouth.
29 A Crunches loudly.
30 A Harvey stares.
31 D HARVEY: Who are you?
32 D STRANGER: Alberto Mendes. Your new regional auditor.
33 D HARVEY: Oh, no.
34 D ALBERTO: Don't worry, Harvey. Your pickles are fine.
35 D HARVEY: How do you know my name?
36 D ALBERTO: It's on your hairnet.
* 37 A ¶ The elevator lurches, then plunges a foot.
38 A Both yelp.
39 A Both grab the same railing.
40 A Both look at the jar.
41 A Alberto offers it.
42 A Harvey takes one.

### SCENE s00989 | INT. CUCKOO CLOCK REPAIR SHOP - EVENING
Detected names (may be incomplete or contain aliases): HORATIO PIMM, MISS LAVINIA GRAY, EUSTACE KROLL
* 1 A ¶ A narrow shop in a Bavarian alley.
* 2 A Hundreds of carved clocks ticking out of sync.
* 3 A Pendulums swing like drunken metronomes.
* 4 A A brass lamp hangs over a workbench strewn with tiny gears.
5 A ¶ HORATIO PIMM (60s, a retired detective in a moth-eaten waistcoat, magnifier on his forehead) bends over a gutted clock, humming.
6 A MISS LAVINIA GRAY (50s, gray bun, gloves buttoned to the wrist) sits primly in the customer's chair.
7 A DR. EUSTACE KROLL (40s, doctor's bag, thick glasses, nervous smile) paces behind her.
8 D HORATIO: It's a charming movement, Miss Gray. Eighteen-forty, I'd say.
9 D LAVINIA: It was my husband's.
10 D HORATIO: Ah. Then it has seen some history.
11 D EUSTACE: Miss Gray, we really should be getting on.
12 D LAVINIA: Doctor, I'm in no hurry.
13 A ¶ He stops.
14 A Checks his watch.
15 A Puts it away.
16 D HORATIO: Tell me, Miss Gray. Your husband. When did he die?
17 D LAVINIA: Last Thursday.
18 D HORATIO: And you've come to repair his clock so soon.
19 D LAVINIA: He asked me to.
20 D HORATIO: Did he?
21 A ¶ Horatio lifts a tiny brass cog from the clock.
22 A Turns it in the lamplight.
23 D HORATIO [CONT'D]: This isn't a clock part. It's a lock. A pharmacy lock.
24 A ¶ Eustace goes pale.
25 A Lavinia does not move.
* 26 A The ticking seems to grow louder.
27 D EUSTACE: Inspector, I can explain.
28 D HORATIO: I'm retired. But go on.
29 A ¶ Eustace lunges for the door.
30 A Lavinia whips a hatpin from her sleeve.
31 A Horatio ducks under the workbench.
32 A The doctor trips on the rug and slams into a grandfather clock.
* 33 A ¶ All the clocks begin to chime at once.
* 34 A Cuckoos burst out of every window.
35 A ¶ In the din, Horatio rises, hatpin quivering in the wood a hand's width from his ear.
36 A Lavinia and Eustace face each other, panting.
37 A Both look at the clocks.
38 A Both look at him.
39 D HORATIO [CONT'D]: Eight o'clock. Right on time.
40 D LAVINIA: You fool. He was dying anyway.
41 D HORATIO: Yes. But not on Thursday.

### SCENE s00990 | INT. SNOW-BOUND ONSEN BATHHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): KENJI, LUCIA, TANABE, DESMOND
* 1 A ¶ Steam rolls off a cedar-lined pool.
* 2 A Paper lanterns.
* 3 A Snow falls past open shutters.
* 4 A The air smells of sulfur and pine.
5 A ¶ KENJI (30s, lean, towel around his neck, glasses fogged) perches on the pool's edge.
6 A LUCIA (30s, copper hair pinned up, wrapped in a thin yukata) wades toward him, waist-deep.
7 A ¶ MRS. TANABE (70s, bent, white apron) shuffles past with a tray of sake.
8 A DESMOND (40s, loud tourist, Hawaiian shirt under a parka) hovers at the door with a camera.
9 D KENJI: You came all the way from Lisbon for a bath?
10 D LUCIA: For you.
11 D KENJI: That's the worst line I've ever heard.
12 D LUCIA: It's the truest.
13 A ¶ She reaches him.
14 A He wipes his glasses.
15 A She takes them.
16 A Holds them up to the lantern.
17 A He squints at her.
18 D MRS. TANABE: Sake?
19 D KENJI: Yes, please.
20 D LUCIA: Obrigada.
21 D MRS. TANABE (sets the tray down): He talks about you in his sleep.
22 D KENJI: Mrs. Tanabe!
23 D LUCIA: In which language?
24 D MRS. TANABE: Bad Portuguese.
25 A ¶ Lucia and Kenji laugh together.
26 A Their shoulders touch.
27 A Neither moves away.
28 D DESMOND: Say cheese!
29 A ¶ He lifts the camera.
* 30 A The flash pops.
31 A Lucia yelps.
32 A Kenji flinches.
33 A Both slip and splash into the pool.
34 A Mrs. Tanabe sighs and takes the camera from Desmond.
35 D DESMOND [CONT'D]: Sorry! Sorry!
36 D MRS. TANABE: Out. Now.
37 A ¶ He leaves, bowing.
* 38 A Steam closes behind him.
39 A ¶ Kenji surfaces, spluttering.
40 A Lucia surfaces beside him, hair loose, laughing.
41 A They look at each other for a long moment.
42 A Mrs. Tanabe turns and shuffles out, tray in hand, smiling at the floor.

### SCENE s00991 | INT. PAWNSHOP - CLOSING TIME
Detected names (may be incomplete or contain aliases): VIVIAN, LEONARD, JUDE
* 1 A ¶ Glass cases of watches and wedding rings.
* 2 A A neon "WE BUY GOLD" buzzes in the window.
* 3 A A wall phone hangs near the register.
4 A ¶ VIVIAN (60s, cardigan, reading glasses on her head) counts bills at the counter.
* 5 A The phone rings.
6 A She snatches it.
7 D VIVIAN: Hello?
8 D LEONARD [V.O.] (over phone): Viv. It's me.
9 D VIVIAN: Leonard. Where are you?
10 D LEONARD [V.O.]: Out front. Come to the door.
11 D VIVIAN: I'm closing.
12 D LEONARD [V.O.]: Please.
13 A ¶ She slams the phone down.
* 14 A The bell over the door jingles.
15 A JUDE (20s, gaunt, duffel bag, hoodie) steps in, shivering.
16 D JUDE: Mom.
17 D VIVIAN: Jude.
18 A ¶ She doesn't move.
19 A He drops the bag.
20 D JUDE: I need a place to stay.
21 D VIVIAN: You told me you didn't.
22 D JUDE: I know what I said.
* 23 A ¶ The phone rings again.
24 A Both of them look at it.
25 D LEONARD [V.O.] (muffled, from the receiver on the hook): Viv? Are you there?
26 D VIVIAN: Not now, Leonard.
27 D JUDE: Is that Dad?
28 D VIVIAN: He's been calling for a week.
29 D JUDE: Mom, I didn't come here to fight.
30 D VIVIAN: I didn't ask you to.
31 D JUDE: I'm just...
32 D VIVIAN: You're just what?
33 D JUDE: Cold.
34 A ¶ She stares at him.
35 A Then she lifts the counter flap.
36 A Holds it open.
37 A He crosses to her.
38 A She wipes his face with her sleeve.
* 39 A ¶ The phone keeps ringing.
40 A She lets it.

### SCENE s00992 | EXT. ROOFTOP PIGEON COOP - TENEMENT - EARLY EVENING
Detected names (may be incomplete or contain aliases): TEODORO, ALMA, DARIUS, PIA
* 1 A ¶ A tar-paper roof above a ribbon of city streets.
* 2 A A wire-and-plywood coop leans against a chimney.
* 3 A The light is slow and orange.
* 4 A Birds mutter inside.
5 A ¶ TEODORO (70s, flat cap, cardigan, cane) feeds seed through the wire.
6 A His daughter ALMA (40s, hospital lanyard) leans on the parapet, scrolling her phone.
7 A His son DARIUS (40s, expensive coat, shoes too clean) stands near the stairwell door, keys in hand.
8 A His granddaughter PIA (12, puffer jacket) kneels by the coop, tapping the wire.
9 A ¶ No one speaks for a while.
10 D PIA: Grandpa, this one is limping.
11 D TEODORO: She'll be fine.
12 D PIA: Her foot is bent.
13 D TEODORO: It's a bad winter for feet.
14 A ¶ Darius clears his throat.
15 D DARIUS: Dad, the realtor is coming at six.
16 D TEODORO: It's still five-thirty.
17 D DARIUS: I'm just saying.
18 D ALMA: You're always just saying.
19 D DARIUS: Alma.
20 D ALMA: Don't.
21 D TEODORO (to the birds): Hush, hush. Both of you.
22 A ¶ He lets the seed fall.
23 A Pia scoops a pigeon into her hands and offers it to him.
24 D PIA: Can I take this one home?
25 D DARIUS: No.
26 D ALMA: Yes.
27 A ¶ They look at each other.
28 D TEODORO: Let her.
29 D DARIUS: Dad, it's a rooftop pigeon. It has diseases.
30 D TEODORO: It has a name. Her name is Rosario.
31 D ALMA: Mama named her.
32 A ¶ Teodoro turns away.
33 A Fusses with the latch.
34 A His shoulders shake once.
35 A ¶ Darius takes off his coat.
36 A Drapes it on the old man.
37 A Teodoro does not thank him.
38 A He pulls the collar tight and keeps his back turned.
39 D DARIUS: I'll tell the realtor tomorrow.
40 D ALMA: Thank you.
41 D DARIUS: Don't thank me. I haven't decided.
42 A ¶ Pia opens the coop door.
* 43 A A dozen birds burst out and wheel into the sunset.
44 A Teodoro watches them go, mouth working silently.
45 A Alma moves to his side.
46 A Darius steps in on the other.
47 A The three of them watch the sky.
48 D PIA: Grandpa, which one is Rosario?
49 D TEODORO: The one coming back.
* 50 A ¶ A gray bird banks, folds her wings, and lands on his shoulder.

### SCENE s00993 | INT. MAIL SORTING DEPOT - 3 A.M.
Detected names (may be incomplete or contain aliases): KARLOS, JIN, MAREN, DUBOIS, OLD TIBBS
* 1 A ¶ Conveyor belts hum.
* 2 A Parcels tumble down chutes.
* 3 A Fluorescent light.
* 4 A No windows.
5 A ¶ KARLOS (40s, supervisor, name tag) stands at a console.
6 A JIN (20s, forklift jacket) waits by a crate.
7 A MAREN (30s, uniform, ID lanyard) scans labels.
8 A DUBOIS (50s, suit, no tie) paces along the belt.
9 A OLD TIBBS (70s, janitor, mop bucket) wrings a rag.
10 D KARLOS: Parcel 0447. It's due out at dawn.
11 D DUBOIS: Open it.
12 D JIN: Boss, that's federal.
13 D DUBOIS: So am I.
14 A ¶ Maren stops scanning.
15 A Tibbs goes still.
* 16 A The belt hums.
17 D KARLOS: Nobody opens it until we know what's inside.
18 D DUBOIS: I already know what's inside.
19 A ¶ He pulls a pistol.
20 A Maren backs away.
21 A Jin raises both hands.
22 A Karlos steps forward.
23 D KARLOS: Put that down.
24 D DUBOIS: Open the crate.
25 A ¶ Tibbs lunges with the mop.
26 A Dubois swings.
27 A The pistol fires into the ceiling.
* 28 A Sparks rain.
29 A Maren and Jin dive behind the belt.
30 A Karlos tackles Dubois.
31 A They crash onto the conveyor, rolling together toward a chute.
32 A Tibbs hits the emergency stop.
* 33 A ¶ Everything goes silent.
* 34 A The gun skids across the floor.
35 A All five look at it.

### SCENE s00994 | INT. PARIS CATACOMBS - OSSUARY CHAMBER, 1793
Detected names (may be incomplete or contain aliases): CITIZEN AUGUSTIN, CELESTINE
* 1 A ¶ Walls of stacked skulls.
* 2 A A single torch.
* 3 A Water drips from the vaulted ceiling.
4 A ¶ CITIZEN AUGUSTIN (40s, revolutionary sash, unpowdered hair, stiff with fear) stands alone at a stone table, copying names into a ledger.
5 A He mutters as he writes.
6 D AUGUSTIN: Lefèvre. Marchand. Girard.
* 7 A ¶ A footstep echoes.
8 A He freezes.
9 A Slowly closes the ledger.
10 D AUGUSTIN [CONT'D]: Who goes there?
11 A ¶ CELESTINE (30s, cloaked, hood up, a lantern shielded under her arm) steps out from behind a pillar of bones.
12 D CELESTINE: A friend of the dead.
13 D AUGUSTIN: There are no friends in the Republic.
14 D CELESTINE: Then I am no friend. Only a sister.
15 D AUGUSTIN: Whose sister?
16 D CELESTINE: The one you have on that list.
17 A ¶ He glances at the ledger.
18 A She comes closer.
* 19 A The light catches her face.
20 D AUGUSTIN: You should not be down here.
21 D CELESTINE: Neither should you.
22 D AUGUSTIN: I am an officer of the Committee.
23 D CELESTINE: You are a clerk with a candle.
24 D AUGUSTIN: Madame...
25 D CELESTINE: Citizen. Celestine Duval.
26 D AUGUSTIN: Citizen Duval, I could have you arrested.
27 D CELESTINE: Then do it. Call the guards. They are above, drinking wine from your cellar.
28 A ¶ He says nothing.
29 A Wipes his palms on his coat.
30 D CELESTINE [CONT'D]: My brother's name is on that page. Pierre Duval.
31 D AUGUSTIN: I do not control the lists.
32 D CELESTINE: You hold the pen.
33 D AUGUSTIN: The pen obeys.
34 D CELESTINE: So does the guillotine. Until someone stops it.
* 35 A ¶ Water drips.
36 A He opens the ledger.
37 A Finds the page.
38 A Looks at her.
39 A Looks at the page.
40 D AUGUSTIN: Pierre Duval. Printer.
41 D CELESTINE: Yes.
42 D AUGUSTIN: Condemned for a pamphlet.
43 D CELESTINE: For an opinion.
44 A ¶ He tears the page out.
45 A Folds it.
46 A Hands it to her.
47 D AUGUSTIN: There is a carriage at the Barrière d'Enfer at midnight.
48 D CELESTINE: Why?
49 D AUGUSTIN: Because I am tired of counting skulls.

### SCENE s00995 | INT. STRIKE-N-SPARE BOWLING ALLEY - THANKSGIVING EVE
Detected names (may be incomplete or contain aliases): GRANDPA WALTER, DOROTHEA, HAL, LINUS, SUNNY, IMOGEN
* 1 A ¶ Lane 7 has been turned into a dinner table.
* 2 A Paper turkeys.
* 3 A Folding chairs.
* 4 A Ball returns hold gravy boats.
* 5 A A neon pin flashes overhead.
6 A ¶ GRANDPA WALTER (80s, bowling shirt, thick glasses) sits at the head, carving.
7 A DOROTHEA (50s, pearls, tight smile) sets plates.
8 A HAL (50s, gravy-stained tie) fiddles with a ball polisher.
9 A LINUS (teen, headphones) slouches.
10 A SUNNY (8, pigtails, tiny bowling shoes) crawls under the table.
11 A IMOGEN (30s, tote bag, tired eyes) arrives late, pulling off a scarf.
12 D DOROTHEA: Imogen, you said six.
13 D IMOGEN: It's six-oh-four.
14 D DOROTHEA: Grandpa has been carving for forty minutes.
15 D GRANDPA WALTER: I like carving.
16 D HAL: That's not what you said about the turkey last year.
17 D GRANDPA WALTER: Last year the turkey was dry.
18 D DOROTHEA: It was not dry.
19 D HAL: It was a little dry, Dot.
20 D DOROTHEA: Hal!
21 D LINUS: Can I eat in the car?
22 D DOROTHEA: No.
23 D LINUS: Can I eat on the lane?
24 D HAL: It's literally on the lane, Linus.
25 D SUNNY (from under the table): Aunt Imogen, you have a hole in your sock.
26 D IMOGEN: Thank you, Sunny.
27 D DOROTHEA: Can we all sit, please?
28 D GRANDPA WALTER: Sit. Eat. Say grace.
29 D HAL: Who's saying grace?
30 D DOROTHEA: Imogen, you say it.
31 D IMOGEN: Me?
32 D DOROTHEA: You're the one who left.
* 33 A ¶ Silence.
* 34 A The pin on the ceiling flashes.
35 A Linus pulls off his headphones.
36 D IMOGEN: That was unkind, Dorothea.
37 D DOROTHEA: It was accurate.
38 D HAL: Dot, let's not.
39 D DOROTHEA: Nobody asked you, Harold.
40 D GRANDPA WALTER: Girls, girls.
41 D IMOGEN: We're not girls, Grandpa.
42 D DOROTHEA: Speak for yourself.
43 D SUNNY: Can I have pie?
44 D LINUS: Nobody has pie, Sunny. We're in a war.
45 A ¶ Dorothea slams the gravy boat on the table.
* 46 A Gravy leaps.
* 47 A It lands on Hal's tie.
48 A He stares at it.
49 D HAL: Well, that's the last straw.
50 A ¶ He stands.
51 A Flings a ball from the return.
* 52 A It rolls down Lane 7, scattering the cranberry and three chairs.
* 53 A Strike.
54 A ¶ Everyone stares at the pins.
55 A Then at Grandpa Walter.
56 A He sets down the knife.
57 D GRANDPA WALTER: Nice.
58 A ¶ Linus snickers.
59 A Sunny giggles.
60 A Imogen covers her mouth.
61 A Dorothea tries to stay stern and fails.
62 A Hal bows.

### SCENE s00996 | INT. BONE-WHITE SALOON - WHALE RIB BUILDING - NOON
Detected names (may be incomplete or contain aliases): MARSHAL TEAGUE, OTTILIE, LEFTY, DEPUTY NASH
* 1 A ¶ A saloon framed by the ribs of an enormous skeleton.
* 2 A Sunlight through bone.
* 3 A Sawdust.
* 4 A A faded mural of a harpooner.
5 A ¶ MARSHAL TEAGUE (50s, tin star, sun-cracked skin) stands at the bar.
6 A OTTILIE (40s, apron, flour on her sleeves) pours coffee.
7 A LEFTY (30s, left hand missing, grin) sits at a corner table.
8 A DEPUTY NASH (20s, pressed shirt, jittery) watches the door.
9 D TEAGUE: Ottilie, who's the stranger who came in at dawn?
10 D OTTILIE: Said his name was Smith.
11 D TEAGUE: Everybody's name is Smith.
12 D LEFTY: Not mine.
13 D TEAGUE: Yours is trouble, Lefty.
14 D LEFTY: That's my middle name.
15 D NASH: Marshal, he's across the street.
16 D TEAGUE: Then let him stay there.
17 D NASH: He's got a rifle.
18 D OTTILIE: They all have rifles.
19 D LEFTY: Don't look so scared, Deputy. He's more scared than you.
20 D NASH: How do you know?
21 D LEFTY: He's still sitting.
22 A ¶ Teague sets his cup down.
23 A He draws his pistol, checks the chamber, holsters it.
24 A Nash swallows.
25 A Ottilie wipes her hands.
26 D TEAGUE: Everyone down.
27 A ¶ They duck behind the bar.
28 A A shot cracks through the window and kills the mirror.
* 29 A Glass rains.
30 A Lefty whoops.
31 A ¶ Teague rises, fires once out the window.
32 A A body drops outside.
33 D NASH: Did you...
34 D TEAGUE: Wasn't him. That was his horse.
35 D OTTILIE: Oh, Lord.
36 D LEFTY: That's gonna be a long walk home.

### SCENE s00997 | INT. CRYSTAL GLASSHOUSE - REGENCY MASQUERADE, 1815
Detected names (may be incomplete or contain aliases): LORD ASHBY, PHILIPPA, RENWICK, SIOBHAN, QUENTIN, MADAME DUPRE
* 1 A ¶ A cathedral of iron and glass, lush with orchids and palm.
* 2 A Lanterns swing among the leaves.
* 3 A Masked guests drift through the greenery.
* 4 A A string quartet saws in a bower.
5 A ¶ LORD ASHBY (50s, silver domino mask, jeweled cane) leans on a pillar and watches the dance floor without blinking.
6 A PHILIPPA (30s, green gown, peacock-feather mask) waits by a fern, gloved hands clasped.
7 A RENWICK (40s, black mask, scarred knuckles) tops up his glass and wanders toward the quartet.
8 A SIOBHAN (20s, servant's apron beneath a borrowed shawl) carries a tray of champagne.
9 A QUENTIN (20s, harlequin mask, nervous laugh) pretends to admire an orchid.
10 A MADAME DUPRE (60s, fan, gold wig) moves between the guests, whispering, never looking at any of them.
11 A ¶ Ashby taps his cane twice.
12 A Renwick sets down his glass and drifts toward the doors, Philippa slides behind a palm and takes a folded note from her glove, Siobhan lowers the tray, and Quentin, laughing a half-second too loud, bumps into Madame Dupre, who drops her fan and does not stoop to pick it up.
13 A The quartet falters.
14 D ASHBY: Madame Dupre. You are unsteady.
15 D MADAME DUPRE: It is the heat, Lord Ashby.
16 D ASHBY: Is it?
17 D PHILIPPA (low, to Siobhan): Take it to the gardener's door.
18 D SIOBHAN: Yes, miss.
19 A ¶ She pockets the note and slips between two guests.
20 A Renwick turns at the doorway, sees her, and steps into her path.
21 A Quentin snatches an orchid, snaps its stem, and tucks it behind his ear.
22 A Ashby crosses the floor with the cane tapping once for every step.
23 D RENWICK: Where are you going, girl?
24 D SIOBHAN: To fetch more wine, sir.
25 D RENWICK: The wine is that way.
26 A ¶ She lifts the tray like a shield.
27 A He plucks a glass, drains it, sets it back on the tray.
28 A She does not blink.
29 A Philippa emerges from behind the palm.
30 A Madame Dupre has stopped whispering.
31 A Ashby arrives.
32 D ASHBY: Philippa, my dear. You've been missed.
33 D PHILIPPA: I was admiring the orchids.
34 D ASHBY: You are always admiring something.
35 A ¶ Quentin takes three quick steps back.
36 A Renwick takes one forward.
37 A The quartet stops altogether.
* 38 A In the hush, a glass shatters.
39 A Siobhan's tray is on the floor.
40 A She and Renwick stare at the shards.
41 A Ashby offers Philippa his arm.
42 A She takes it.
43 A Madame Dupre retrieves her fan and fans herself slowly.
44 A Quentin laughs once, then thinks better of it.
45 D ASHBY [CONT'D]: Shall we dance?
46 D PHILIPPA: Of course.
47 A ¶ The quartet resumes.
48 A Couples reform.
49 A Siobhan kneels among the broken glass and, under the cover of the music, closes her fist around a small gold key.

### SCENE s00998 | INT. ICE-FISHING HUT - NIGHT
Detected names (may be incomplete or contain aliases): GRETA
* 1 A ¶ Plywood walls.
* 2 A A hole in the floor, black water, the surface skinned with ice.
* 3 A A propane lantern hisses.
* 4 A A tape recorder sits on a stool.
* 5 A The wind outside sounds like a throat.
* 6 A ¶ The door shudders, bangs, opens.
* 7 A Snow swirls in.
8 A ¶ GRETA (30s, parka caked white, ski mask pushed up, red-rimmed eyes) staggers inside, drags the door shut, and slides the bolt.
9 A She drops her pack.
10 A Rips off her gloves.
* 11 A The lantern flickers as if breathing in her fear.
12 A ¶ She flips the tape recorder.
* 13 A The reel turns.
* 14 A A voice crackles.
15 D GRETA [V.O.] (recorded, bright): Day three. Hut one. Everything is fine. I'm fine.
16 A ¶ She slams the stop button.
17 A Presses her back against the wall.
18 A Listens.
* 19 A Wind rattles the tin chimney.
* 20 A Something scrapes across the roof, slow as a fingernail.
21 A Greta slides her knife from her boot and holds it level.
* 22 A The scraping moves down the wall, around the corner, to the door.
* 23 A The bolt trembles in its bracket.
* 24 A The lantern gutters low.
25 A She lifts the knife.
* 26 A The hole in the floor bubbles, a single fat bubble, and bursts.
27 D GRETA (whispering): I'm fine.
28 A ¶ The door handle turns.
* 29 A Slowly.
* 30 A Once.
* 31 A Twice.
* 32 A Then the whole hut lurches as if shouldered, and the lantern swings, throwing a long shadow across the ceiling.
33 A The knife trembles in her fist.
34 A She cuts the lantern's gas with her other hand, and darkness takes the room.
* 35 A ¶ In the dark, the tape recorder clicks on by itself.
36 D GRETA [V.O., CONT'D] (recorded, calm): Don't open the door.
37 D GRETA: I didn't!
* 38 A ¶ The bolt slides back on its own.

### SCENE s00999 | INT. TRAIN CAR FIELD HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): IYER, LUDMILLA
* 1 A ¶ A converted freight car rolling through mountains.
* 2 A Cots bolted to the walls.
* 3 A Lanterns on hooks.
* 4 A A surgical table at the center, bolted to the floor.
* 5 A Rain hammers the roof.
* 6 A Every few seconds the wheels shriek over a joint.
7 A ¶ DR. IYER (40s, surgeon, cap, apron already stained) stands at the table, sleeves rolled.
8 A LUDMILLA (30s, a patient strapped to the table, face gray with pain, a bloody dressing across her abdomen) stares at the ceiling.
9 D IYER: Ludmilla, I need you to stay with me.
10 D LUDMILLA: I am here.
11 D IYER: Count backwards from ten.
12 D LUDMILLA: Ten. Nine.
13 D IYER: Good.
14 A ¶ He lays out instruments on a tray.
* 15 A A forceps clatters to the floor.
16 A He picks it up, wipes it with a rag, and sets it back.
17 A His hands shake only slightly.
18 D LUDMILLA: Doctor. Your hands.
19 D IYER: They always do before.
20 D LUDMILLA: Do they stop?
21 D IYER: When the knife starts.
22 A ¶ She smiles weakly.
* 23 A The train lurches.
* 24 A The tray slides.
25 A Iyer catches it with one hand and steadies her shoulder with the other.
26 D IYER [CONT'D]: Eight?
27 D LUDMILLA: Eight.
28 A ¶ He pours antiseptic over the wound.
29 A She hisses through her teeth, her fingers digging into the table's edge.
30 A He talks fast and low, never looking up, laying gauze, clamping a bleeder, pressing a pad flat with the heel of his palm while she shudders and clenches her jaw and the lantern swings over both of them.
31 D IYER: Seven.
32 D LUDMILLA: Seven. Seven.
33 D IYER: Stay with me.
34 D LUDMILLA: Doctor, there is something you must know.
35 D IYER: Later.
36 D LUDMILLA: I am not what I told you.
37 D IYER: Ludmilla.
38 D LUDMILLA: The papers in my coat. They are false.
39 A ¶ He doesn't answer.
40 A Cuts.
41 A She gasps.
* 42 A Blood pools.
43 A He suctions it with a rubber bulb, swabs, clamps again.
44 D IYER: Six.
45 D LUDMILLA: I am a courier. For the partisans.
46 D IYER: Five. Keep counting.
47 D LUDMILLA: There is a name in the lining. Memorize it.
48 D IYER: I am busy.
49 D LUDMILLA: Please.
50 A ¶ He glances at her coat, hanging on the wall hook.
51 A Then back at her.
52 A She is crying now, silently, tears running into her ears.
53 D IYER: What is the name?
54 D LUDMILLA: Commander Alder. Station nine.
55 D IYER: Alder. Station nine.
56 D LUDMILLA: Say it again.
57 D IYER: Alder. Station nine. Four.
58 D LUDMILLA: Four.
* 59 A ¶ The wheels shriek.
* 60 A A flash of lightning lights the car white.
61 A For a moment the lantern, the table, the two of them are frozen like a photograph.
62 D IYER: Three.
63 D LUDMILLA: Three... two...
64 A ¶ Her voice fades.
65 A Her eyes flutter.
66 A He pushes a final suture through, ties it, and cuts the thread.
67 D IYER: One.
68 A ¶ She doesn't answer.
69 A He presses two fingers to her neck.
70 A Waits.
71 A Her chest rises.
72 A Falls.
73 A Rises.
74 A ¶ He sags against the table.
75 A Tears off his gloves.
76 A Looks at her coat on the hook.
77 A Then, with the care of a man who has decided something, he crosses the car, lifts the hem, and finds the lining.
78 A ¶ Behind him, Ludmilla opens one eye.
79 D LUDMILLA: You were supposed to forget.
80 D IYER: I never forget a name.

### SCENE s01000 | INT. COVERED SWIMMING POOL GYM - DAWN
Detected names (may be incomplete or contain aliases): TOMAS, IBARRA
* 1 A ¶ An old municipal pool drained and boarded over.
* 2 A A boxing ring stands where the deep end once was.
* 3 A Tile walls, high windows, a faint chlorine ghost.
* 4 A A cassette player sits on a folding chair.
5 A ¶ TOMAS "THE HAMMER" IBARRA (40s, gray at the temples, hand wraps already on) shadowboxes in the ring, light as a man half his age.
6 A He moves slowly, almost lazily, rolling his shoulders, humming along to nothing.
7 A He taps the heavy bag as he passes it, as if saying good morning.
8 A ¶ He stops at the ropes.
9 A Peels the wrap from his left hand, flexes the knuckles, winces at nothing.
10 A He sits on the stool.
11 A Looks at the empty seats that were once pool bleachers.
12 A ¶ He thumbs the cassette player.
* 13 A It clicks.
* 14 A A crowd roars on tape, then an interviewer's voice, then his own, younger and cocksure.
15 D TOMAS [V.O.] (recorded, 1998): I'll never quit. They'll have to carry me out.
16 A ¶ He listens.
17 A His smile fades by degrees.
18 A He rewinds.
19 A Plays it again.
20 D TOMAS [V.O., CONT'D] (recorded): I'll never quit. They'll have to carry me out.
21 A ¶ He rises, steps through the ropes, takes the old trophy off the shelf, and weighs it in his hand.
22 A Then he carries it to the corner of the room where a cardboard box waits.
23 A He sets it inside, next to a folded robe and a pair of worn gloves, and closes the flaps.
* 24 A ¶ The lights above flicker on.
* 25 A A side door creaks.
26 A Footsteps click toward him across the tile, and he does not turn around.
27 A He picks up the box, hugs it to his chest, and for the first time all morning his hands are shaking.
28 D TOMAS (low): I'm not ready.
* 29 A ¶ The cassette reaches its end and clicks off.
* 30 A In the silence, a distant bell, the fire station down the road, rings six times.

### SCENE s01001 | INT. ORBITAL LAUNDERETTE - ZERO-G - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): PAXTON, REN, ULLA, VASHTI
* 1 A ¶ A drum-shaped room on a space station.
* 2 A Washing machines turn in the walls like portholes.
* 3 A Loose socks drift like jellyfish.
* 4 A Magnetic benches hold a few late-shift residents.
5 A ¶ PAXTON (40s, patched coverall, braided beard) floats near the dryer bank with a sack of laundry.
6 A REN (20s, hoodie, cheap vac-boots) types on a handheld.
7 A ULLA (60s, silver hair in a net, folded newspaper) reads upside down.
8 A VASHTI (30s, clean uniform, security patch) stands by the door, hand on a holster.
9 D PAXTON: Ren, that's the third load you've started.
10 D REN: It's a long week.
11 D ULLA: You're running a hot cycle. It's against regs.
12 D REN: It's one sock.
13 D VASHTI: Everyone remain calm.
* 14 A ¶ A siren whoops.
* 15 A Red light pulses.
* 16 A The machines shudder.
* 17 A Socks scatter.
18 A Paxton and Ren grab the same handhold.
19 A Ulla folds her newspaper and tucks it under her arm.
20 D VASHTI [CONT'D]: That's a hull breach klaxon.
21 D PAXTON: Where?
22 D VASHTI: Dryer six.
23 A ¶ All four look at dryer six.
* 24 A Its door bulges outward like a bubble.
* 25 A Something is knocking from inside.
26 D REN: It's just the sock.
27 D ULLA: That is not a sock.
* 28 A ¶ The door bursts.
* 29 A A flood of foam and lost clothing gushes out, followed by a gasping, soapy cat.
30 A It twists in midair, lands on Vashti's chest, and clings.
31 D VASHTI (deadpan): I'm going to need a bigger form.
* 32 A ¶ The siren stops.
* 33 A The lights return to white.
34 A The four of them hover in the foam, staring at the cat.

### SCENE s01002 | INT. FREIGHT ELEVATOR - SHUTTERED DEPARTMENT STORE - NIGHT
Detected names (may be incomplete or contain aliases): MALACHI, SOLEDAD, BIG RAY, TWITCH, FIONNUALA
* 1 A ¶ The cage of an old service elevator, slatted with steel.
* 2 A Bare bulbs bleed yellow across scaffolds of dust-sheeted mannequins.
* 3 A Somewhere below, a generator coughs.
4 A ¶ MALACHI (50s, a heavy man in a camel overcoat, rings on every finger) occupies the center of the car like a man who owns the floor.
5 A SOLEDAD (30s, tailored suit, hair scraped back, eyes like flint) stands beside him with a briefcase.
6 A BIG RAY (40s, bouncer's shoulders, scar through one eyebrow) holds the gate.
7 A TWITCH (20s, skinny, jittery, earbuds dangling) fidgets with a lighter.
8 A FIONNUALA (30s, rain-slicked trench, a plain gray folder) stands at the back, composed, the one person in the car who has not looked at anyone else.
* 9 A ¶ The elevator creaks, sinks.
* 10 A Each floor flickers by in the gaps of the gate: Housewares, Menswear, Toys, a ghostly Bridal with rows of veils like cobwebs.
11 D MALACHI: Nobody speaks until the basement.
12 A ¶ Twitch clicks the lighter.
13 A Big Ray's hand tightens on the gate.
14 A Soledad glances at the briefcase, then at Fionnuala, then at the ceiling.
15 A Fionnuala adjusts her glasses and does not blink.
* 16 A ¶ The elevator shudders to a halt between floors.
* 17 A The bulb swings.
18 A Malachi's ring clicks against the rail.
19 A For a moment, the five of them stand motionless in the swaying light, and the generator's cough is the only sound in the building.
20 A ¶ Then Twitch lunges for the briefcase.
21 A Soledad slams him against the cage.
22 A Big Ray yanks him off by the collar and pins him to the wall.
23 A Malachi, unmoving, raises one finger.
* 24 A Everything stops.
* 25 A The lighter drops.
26 A It rolls across the floor, spinning, until Fionnuala pins it under her heel.
27 A ¶ She opens her folder.
28 A Takes out a single photograph.
29 A Holds it up for all of them.
30 A Soledad's face drains.
31 A ¶ Malachi lowers his finger.
* 32 A ¶ The elevator starts to descend again.

### SCENE s01003 | INT. FLOODED CHAPEL CRYPT - NIGHT
Detected names (may be incomplete or contain aliases): HARLAN, PENNY, NOLA
* 1 A ¶ Ankle-deep black water.
* 2 A Stone arches.
* 3 A Lanterns on ropes.
* 4 A Names of the dead carved on every column.
* 5 A Something drips, then something larger drips.
6 A ¶ HARLAN (50s, woolen coat, reading glasses) steadies a lantern.
7 A PENNY (30s, hiking boots, camera bag) wades behind him.
8 A NOLA (20s, white nightgown under a borrowed jacket, bare feet) clings to the pillar.
9 D HARLAN: Everyone stay together.
10 D PENNY: Harlan, we are together. There are three of us.
11 D NOLA: Four.
12 D HARLAN: What?
13 D NOLA: There were four when we came down.
14 D PENNY: Nola, honey, count again.
15 D NOLA: One, two, three...
16 D HARLAN: Don't.
17 D PENNY: Let her.
18 D NOLA: Four.
19 A ¶ Harlan raises the lantern.
* 20 A The crypt stretches out, silent.
* 21 A Shadows lengthen between the columns.
22 D HARLAN (muttering): Just the damp. Just the damp.
23 D PENNY: Who are you talking to?
24 D HARLAN: Myself.
25 D NOLA: He's talking to it.
26 D PENNY: Nola!
27 D NOLA: It's listening.
* 28 A ¶ The water ripples.
* 29 A Not from their legs.
* 30 A From the far end of the crypt, a slow wake spreads toward them.
31 D HARLAN: Everyone back to the stairs. Now.
32 D PENNY: Which way is that?
33 D NOLA: Behind you.
34 A ¶ Penny turns.
* 35 A The stairs are gone.
* 36 A Only wall, and in the wall a carved name that was not there a minute ago.
37 D PENNY: Oh my God. That's my name.
38 D HARLAN: That's impossible.
39 D NOLA: It's the fourth.
40 D HARLAN (to himself): Count the lanterns. Count the lanterns.
* 41 A ¶ The lanterns, one by one, go out.

### SCENE s01004 | INT. PUBLIC LIBRARY - BOOK RETURNS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LEOPOLD, WINIFRED, STRANGER, CASPIAN, AGNES, MURIEL
* 1 A ¶ A back room behind the circulation desk.
* 2 A Steel carts piled with returned books.
* 3 A A conveyor belt chugs.
* 4 A A radiator ticks.
* 5 A The overhead light has a moth in it.
6 A ¶ LEOPOLD (60s, cardigan, lanyard) shelves a cart, humming a waltz.
7 A WINIFRED (60s, volunteer vest, library-card earrings) peels stickers from paperbacks at a table.
8 A Neither looks up when the book-drop chute rattles and a thick novel thumps into the bin.
9 D WINIFRED: That's the Dostoevsky again.
10 D LEOPOLD: Fourth time this month.
11 D WINIFRED: Somebody's reading it very slowly.
12 D LEOPOLD: Somebody's very patient.
13 D WINIFRED: Or in love.
14 D LEOPOLD: With a Russian?
15 D WINIFRED: Leopold, it happens.
16 A ¶ He laughs, shakes his head.
* 17 A The chute rattles again.
* 18 A A paperback with a cracked spine tumbles out.
19 A Winifred flips it open.
* 20 A Something slides from the pages: a folded note.
21 D WINIFRED [CONT'D]: Oh.
22 D LEOPOLD: What?
23 D WINIFRED: "Same time next Tuesday?"
24 D LEOPOLD: Is it signed?
25 D WINIFRED: It says "C."
26 D LEOPOLD: Well, C will have to wait.
* 27 A ¶ The back door squeaks.
28 A A STRANGER (30s, long coat, scarf wound to his chin, rain on his hair) leans in, hesitating.
29 D STRANGER: Pardon me. I'm sorry. Is this where you leave things?
30 D WINIFRED: The main desk closed at nine.
31 D STRANGER: I wasn't looking for the desk.
32 D LEOPOLD: Are you looking for a book, young man?
33 D STRANGER: I'm looking for a note.
34 A ¶ Winifred clutches the paper to her chest.
35 A Leopold tucks his hands behind his back.
36 A The stranger smiles, and it changes his whole face.
37 D STRANGER [CONT'D]: My name is Caspian. I leave one in this one every Tuesday.
38 D WINIFRED: For whom?
39 D CASPIAN: For whoever finds it.
40 D LEOPOLD: That seems unwise.
41 D CASPIAN: It's led to some very good conversations.
42 D WINIFRED: Leopold, he's the C.
43 D LEOPOLD: I gathered.
* 44 A ¶ The chute rattles one more time.
45 A A woman's voice floats down the shaft, laughing: "Caspian?
46 A Are you down there?"
47 A A pair of shoes appears at the lip of the opening, then a pair of legs, and AGNES (30s, red umbrella, wet laughing eyes) squeezes through and drops to the floor with a grunt.
48 D AGNES: I told you the chute was big enough.
49 D CASPIAN: It's a book drop, Agnes.
50 D AGNES: It was a very comfortable book drop.
51 A ¶ She notices the two older people.
52 A Straightens her coat.
53 A Holds out a hand.
54 D AGNES [CONT'D]: Good evening. I'm so sorry about the intrusion.
55 D LEOPOLD: Not at all.
56 D WINIFRED: It's been a slow night.
57 D AGNES: We'll just collect his note and be going.
58 D WINIFRED: Of course.
59 A ¶ She hands over the paper.
60 A Caspian takes it, unfolds it, reads it, and offers it to Agnes.
61 A She laughs, kisses his cheek, and tucks it into her pocket.
62 A ¶ A third figure appears at the door, MURIEL (70s, librarian's brooch, stern as a verdict).
63 A The two lovers freeze.
64 A Leopold and Winifred straighten up.
65 D MURIEL: It is eleven o'clock. This room is closed.
66 D CASPIAN: We were just leaving.
67 D MURIEL: By the door. Not the chute.
68 D AGNES: Yes, ma'am.
69 A ¶ They file out.
70 A Muriel watches them go.
71 A When they are gone, she looks at the note-less table, at Winifred's guilty face, at Leopold's studied innocence.
72 D MURIEL: Which of you encouraged them?
73 D LEOPOLD: I shelve. I don't encourage.
74 D WINIFRED: Neither do I.
75 A ¶ Muriel nods.
76 A Picks up the Dostoevsky.
77 A Opens it.
78 A Takes out a second note.
79 A Reads it.
80 A Her lips twitch.
81 D MURIEL: Next Tuesday, then.

### SCENE s01005 | INT. VICTORIAN CONSERVATORY - NIGHT
Detected names (may be incomplete or contain aliases): CRABTREE, THADDEUS, PHOEBE, CAPTAIN LOWRY
* 1 A ¶ A glass hothouse thick with tropical ferns, weeping under a gaslit chandelier.
* 2 A In its center, a round table draped in black velvet and ringed with four chairs.
* 3 A The air tastes of orchids and old rain.
4 A ¶ MRS. CRABTREE (60s, widow's weeds, a face like a locked door) presides at the head of the table.
5 A THADDEUS (30s, frock coat, spectacles, a pamphlet on spiritualism rolled in his fist) sits at her right.
6 A PHOEBE (20s, white lace, pale as milk, hands folded) sits at her left.
7 A CAPTAIN LOWRY (50s, red-faced, medals on his tunic, arms folded in contempt) sits opposite.
8 D MRS. CRABTREE: Join hands. And do try to behave, Captain.
9 D CAPTAIN LOWRY: I am the soul of decorum, madam.
10 D PHOEBE: Is it true they come when called?
11 D THADDEUS: Only if they have unfinished business.
12 D CAPTAIN LOWRY: Then they'll be here by the dozen. The dead always have unfinished business.
13 D MRS. CRABTREE: Silence.
14 A ¶ They clasp hands.
* 15 A The chandelier dims.
* 16 A The ferns sway though no wind moves.
* 17 A Somewhere in the glass, a pane creaks.
18 D MRS. CRABTREE [CONT'D]: Spirits of this house, we call upon you. If you are present, give us a sign.
* 19 A ¶ A silence.
* 20 A A drip.
* 21 A Another.
22 D THADDEUS (whispering): Nothing.
23 D CAPTAIN LOWRY: Of course nothing.
24 D PHOEBE: Hush. Listen.
25 D MRS. CRABTREE: We call upon Edmund Crabtree, my beloved husband.
26 D CAPTAIN LOWRY: Your late husband was a bore, madam, and I say that as one who attended his funeral.
27 D MRS. CRABTREE: Captain, I will have you removed.
28 D CAPTAIN LOWRY: By whom?
* 29 A ¶ A tap on the table.
* 30 A A second.
* 31 A A third.
32 A The four of them freeze.
* 33 A The candle flames bend flat.
* 34 A The temperature drops; their breath fogs.
35 D PHOEBE (barely audible): Who is it?
* 36 A ¶ The table lifts an inch.
* 37 A Settles.
* 38 A Lifts again.
39 A Thaddeus lets go of the hands to steady it, and Mrs. Crabtree slaps him across the knuckles.
40 D MRS. CRABTREE: Do not break the circle!
41 D THADDEUS: It's moving!
42 D CAPTAIN LOWRY: It's a trick, madam. It's always a trick.
43 A ¶ A voice, wheezing, not any of theirs, slithers from beneath the velvet.
44 D CAPTAIN LOWRY [O.S.]: Hortensia...
45 D MRS. CRABTREE: Edmund?
46 A ¶ Phoebe screams.
47 A Thaddeus leaps back.
48 A Mrs. Crabtree sits perfectly rigid, her face as pale as the lace on Phoebe's collar.
49 A Then the velvet lifts, and the Captain, still seated, lets the cloth fall from his lap.
50 A His boot withdraws from the table's leg.
51 A He coughs into his fist, and the wheeze is plainly his own.
52 D PHOEBE: That was you!
53 D CAPTAIN LOWRY: A bit of fun, miss.
54 A ¶ Mrs. Crabtree rises to her full height.
55 D MRS. CRABTREE: Captain Lowry. You are no longer welcome in my home.
56 D CAPTAIN LOWRY: It was only a joke.
57 D MRS. CRABTREE: So was Edmund.

### SCENE s01006 | INT. COURTROOM - CONVERTED RIVER FERRY - DAY
Detected names (may be incomplete or contain aliases): JUDGE FAIRWEATHER, ROSAMUND, TIMOTHY, BAILIFF DOYLE
* 1 A ¶ A courtroom bolted into the old car deck of a retired ferry.
* 2 A Porthole windows.
* 3 A Brass railings.
* 4 A The floor rolls faintly with the current.
* 5 A The gallery is empty save for gulls on the sills.
6 A ¶ JUDGE FAIRWEATHER (70s, red robe, half-moon glasses) presides from a raised platform.
7 A ROSAMUND (40s, prosecutor, charcoal suit) stands at the lectern with a stack of exhibits.
8 A TIMOTHY (30s, defense counsel, rumpled tie) sits next to an empty chair.
9 A BAILIFF DOYLE (50s, wide shoulders, mustache) leans by the door, bored.
10 D JUDGE FAIRWEATHER: The court will resume.
11 D ROSAMUND: Your Honor, the state calls its final witness.
12 D TIMOTHY: Objection.
13 D JUDGE FAIRWEATHER: Overruled, Mr. Timothy.
14 D TIMOTHY: It's Mr. Beasley, Your Honor. Timothy is my first name.
15 D JUDGE FAIRWEATHER: Sit down, Timothy.
16 A ¶ He sits.
17 A Rosamund shuffles her papers, then sets them down.
18 D ROSAMUND: The state calls the defendant's mother.
19 D TIMOTHY: She is not here.
20 D ROSAMUND: She was subpoenaed.
21 D BAILIFF DOYLE: She went to the galley.
22 D JUDGE FAIRWEATHER: Bailiff, fetch her.
23 A ¶ He lumbers off.
* 24 A The ferry lurches.
* 25 A Papers slide across the table.
26 A Timothy catches his water glass.
27 A Rosamund catches the Judge's gavel.
28 A They exchange a long look, and for a moment both of them smile, then they remember where they are.
29 D JUDGE FAIRWEATHER [CONT'D]: Counsel, would you care to settle?
30 D ROSAMUND: We're beyond that, Your Honor.
31 D TIMOTHY: We were beyond that at the first harbor.
32 D JUDGE FAIRWEATHER: Then the court is adjourned until we dock.
* 33 A ¶ The gavel falls.
* 34 A A gull flaps off the sill.
35 A In the galley, a faint cheer rises, and everyone in the courtroom pretends not to hear.

### SCENE s01007 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): ALOYSIUS, BRYONY, CASSIUS, DELPHINE, EZRA
* 1 A ¶ A domed theater gone to ruin.
* 2 A Rows of broken chairs fan toward a hulking star projector.
* 3 A Moonlight slips through a crack in the dome.
* 4 A Dust drifts like constellations.
5 A ¶ ALOYSIUS (60s, caretaker's coat, keys on his belt) leads the way with a flashlight.
6 A BRYONY (30s, journalist, notebook) follows.
7 A CASSIUS (20s, her photographer, three cameras round his neck) hangs back.
8 A DELPHINE (40s, astronomer, a thick scarf) runs a hand along the projector.
9 A EZRA (teen, hoodie, headphones, the caretaker's grandson) sits in the front row with his feet on the seat in front.
10 D ALOYSIUS: The last show was in eighty-nine. They forgot to turn the stars off.
11 D BRYONY: Forgot?
12 D ALOYSIUS: Or didn't want to.
13 D CASSIUS: I can't see anything.
14 D DELPHINE: That's the point.
15 A ¶ She flips a switch on the projector.
* 16 A Nothing.
* 17 A Another.
* 18 A A hum builds.
* 19 A The dome shudders.
* 20 A A smear of light climbs the plaster.
21 D EZRA (without looking up): It's just the old bulb.
22 D ALOYSIUS: It's the stars.
* 23 A ¶ The light resolves into a tangle of pinpoints, swirling in the wrong places.
24 A Delphine tilts her head, frowning.
* 25 A The constellations are wrong.
* 26 A Orion is facing the wrong way, and a seventh star burns where there should be six.
27 D BRYONY: Is that supposed to happen?
28 D DELPHINE: No.
* 29 A ¶ The seventh star pulses.
30 A Cassius lifts a camera and the flash blinds them.
31 A When their eyes recover, Ezra is standing in the aisle, staring up, headphones around his neck, mouth slightly open.
32 D ALOYSIUS: Ezra.
33 D EZRA: It knows my name.
34 D ALOYSIUS: What did you say?
35 D EZRA: It's whispering.
36 A ¶ Delphine rushes to the projector and kills the power.
* 37 A The dome goes black.
* 38 A A single hiss ripples through the room, and then nothing.
* 39 A In the dark, Cassius's camera clicks once on its own.

### SCENE s01008 | INT. CHEESE CAVE - DAWN
Detected names (may be incomplete or contain aliases): GASTON, HELOISE, IGNATIUS, JOSEPHINE
* 1 A ¶ A cool limestone vault lined with shelves of wheels, rinds blooming blue.
* 2 A A single dripping spigot.
* 3 A The air is thick with ammonia and earth.
4 A ¶ GASTON (60s, rubber apron) crouches over an overturned wheel.
5 A HELOISE (30s, health inspector, clipboard) holds a penlight.
6 A IGNATIUS (50s, owner's cousin, silk scarf) hovers.
7 A JOSEPHINE (20s, apprentice, smock) fills a pail.
8 A ¶ Gaston turns the wheel over.
* 9 A A man's wristwatch is baked into the rind.
10 D HELOISE: Is that normal?
11 D GASTON: Not for this cheese.
12 D IGNATIUS: Heloise, we should call the owner.
13 D HELOISE: The owner is missing.
14 A ¶ Ignatius flinches.
15 A Josephine sets the pail down very, very carefully.
16 D JOSEPHINE: I ought to wash my hands.
17 D HELOISE: Stay where you are.
18 A ¶ Josephine laughs, too high, too quick.
19 A Gaston stands.
20 A Sniffs the air.
21 A His eyes go to the far wall, to the oldest shelf, the one nobody touches.
22 D GASTON: Ignatius. When did your cousin last visit?
23 D IGNATIUS: Tuesday.
24 D GASTON: And you were here.
25 D IGNATIUS: No. I mean yes. I mean I was only passing.
26 A ¶ Heloise shines her light on the old shelf.
* 27 A A boot protrudes from the rind of the largest wheel.

### SCENE s01009 | INT. HIGH SCHOOL ROOFTOP GREENHOUSE - DAWN
Detected names (may be incomplete or contain aliases): TESSA
* 1 A ¶ A glass lean-to bolted to the school's flat roof.
* 2 A Trays of tomato seedlings under grow-lights.
* 3 A Condensation beads the panes.
* 4 A A broken radio sits unplugged on a workbench.
* 5 A Nobody is here yet.
* 6 A ¶ A key rattles in the lock.
* 7 A The door swings open.
8 A TESSA (17, thrift-store coat, messy braid, a backpack heavy with textbooks) steps in, shoulders hunched, and shuts out the wind.
9 A ¶ She drops her bag.
10 A Cups her hands and breathes into them.
11 A Crosses to the seedlings and touches one leaf, gently, like a held breath.
12 A ¶ She pulls out her phone.
13 A Dials.
14 A Puts it to her ear.
* 15 A It rings once, twice, three times.
* 16 A Click.
17 D TESSA [V.O.] (recorded, cheerful, younger): Hi, you've reached Tessa. I'm probably playing outside. Leave a message and I'll call you back!
18 A ¶ She closes her eyes.
19 A Holds the phone away.
20 A Listens to her own voice, tinny and small.
21 A She smiles, then stops smiling.
22 D TESSA (to the plants): Four years ago. I was eleven. I thought I'd be famous.
23 A ¶ She hangs up.
24 A Dials again.
* 25 A The recording plays again.
26 A She doesn't smile this time.
27 A When it ends, she listens to the beep, mouth open, as if there might be something to say, and says nothing.
* 28 A ¶ A sparrow lands on the glass above her.
29 A She looks up.
* 30 A It sits there, puffed against the cold, watching.
31 A ¶ She sets the phone on the bench.
32 A Picks up a watering can.
33 A Fills it at the spigot.
34 A Tilts it over the seedlings.
* 35 A Water patters in the quiet.
* 36 A Outside, the first bus shudders into the lot below, and the world beyond the glass begins its ordinary morning.
37 D TESSA [CONT'D]: Okay. Okay. Let's go.

### SCENE s01010 | INT. GLASSBLOWING STUDIO - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ANSELM, MIRABEL, JOSUE
* 1 A ¶ A long brick workshop.
* 2 A Three furnaces glow like open mouths.
* 3 A Rods and pipes hang from racks.
* 4 A Molten orange light plays over the walls and the faces of the three people inside.
5 A ¶ ANSELM (50s, leather apron, forearms scarred by a thousand tiny burns) turns a gather of glass at the end of a pipe, patient as a priest.
6 A MIRABEL (30s, linen shirt rolled to the elbows, hair tied in a green scarf) watches him from the workbench, a sketchbook open on her knee.
7 A JOSUE (30s, tall, a delivery clipboard, the faint dust of the road on his boots) lingers by the door, hat in hand.
8 D ANSELM: The trick is not to hurry it.
9 D MIRABEL: Everything is a trick with you, Anselm.
10 D ANSELM: Everything is.
11 D JOSUE: Excuse me. I have a delivery for Miss Mirabel Quint.
12 D MIRABEL: That's me.
13 A ¶ She takes the clipboard.
14 A Signs.
15 A Their fingers touch.
16 A Neither pulls away.
17 D MIRABEL [CONT'D]: Thank you.
18 D JOSUE: It's from a client in Lisbon. Fragile.
19 D ANSELM: They're all fragile.
20 D JOSUE: This one is a vase.
21 D MIRABEL: I make vases.
22 D JOSUE: Not like this one, I'm told.
23 A ¶ She opens the crate.
24 A Lifts out a tall green vase swirled with silver, and holds it to the furnace light.
* 25 A A hush falls.
26 D ANSELM: Where did you get that?
27 D JOSUE: I didn't. A woman in Lisbon sent it.
28 D ANSELM (low): That's my mother's work.
29 D MIRABEL: Your mother?
30 D ANSELM: She taught me. Before she left.
31 D MIRABEL: You never said she left.
32 D ANSELM: You never asked.
33 A ¶ Josue shifts, uncomfortable.
34 A He reaches for the door.
35 D JOSUE: I should go.
36 D MIRABEL: Don't.
37 D ANSELM: Stay. Please. You've brought us a ghost.
38 A ¶ He sets the pipe down.
39 A Mirabel sets the vase on the bench.
40 A For a long moment the three of them stand in the furnace glow, nobody speaking, and the air itself seems to wait.
41 D JOSUE: Is it a bad ghost?
42 D ANSELM: It's a very old one.
43 A ¶ Mirabel puts her hand on his arm.
* 44 A The vase catches the light, and for an instant it looks like water.

### SCENE s01011 | INT. ROADSIDE MOTEL LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CLERK, RHONDA, TRUDY, LAMAR, DALE
* 1 A ¶ A cinderblock room with six humming dryers and a vending machine that sells nothing.
* 2 A A single bulb, bare, buzzes.
* 3 A A mop bucket stands in a pool of gray water.
* 4 A The door to the lot is propped open with a brick.
5 A ¶ A CLERK (30s, name tag crooked, plastic key ring on his wrist) folds towels at a steel table.
6 A RHONDA (40s, bathrobe over street clothes, a baby monitor in her hand) sits on a plastic chair watching a dryer spin.
7 A TRUDY (60s, hair curlers, cardigan buttoned wrong) stares into a washer as it fills.
8 A LAMAR (20s, hoodie, headphones, a garbage bag of clothes at his feet) leans against the wall.
9 A ¶ The clerk looks up when a dryer buzzes.
10 A Looks at the others.
11 A Looks back at the towels.
12 D RHONDA: You're not going to fold mine, are you?
13 D CLERK: No, ma'am.
14 D RHONDA: Good.
15 D TRUDY: There's a stain on my sleeve that won't come out.
16 D CLERK: Which one?
17 D TRUDY: The red one.
18 D CLERK: I don't think that's coming out.
19 D TRUDY: That's what everyone says.
20 A ¶ Lamar pulls off his headphones.
21 A Everyone is looking at the washer.
* 22 A The water inside has turned pink.
23 D LAMAR: Is that normal?
24 D CLERK: It happens.
25 D LAMAR: What happens?
26 D CLERK: Colors bleed.
27 A ¶ Rhonda holds the baby monitor to her ear.
* 28 A A faint hiss of static.
29 A She turns the knob.
* 30 A The hiss grows, and under it, a slow wet breathing.
31 D RHONDA: Trudy, did you bring a baby?
32 D TRUDY: Of course not.
33 A ¶ The Clerk sets down the towel.
34 A His eyes drift to the open door, the dark lot, the single car with its engine ticking.
35 D CLERK (quietly): Dale. My name is Dale.
36 D LAMAR: What?
37 D DALE: You asked me my name, earlier. I wasn't ready to say.
* 38 A ¶ The overhead bulb flickers.
39 A Rhonda lowers the monitor slowly.
* 40 A The breathing now comes from the dryer, the one still turning, the one with the small round window.
41 D DALE [CONT'D]: Nobody open that.
42 A ¶ Trudy opens it.

### SCENE s01012 | INT. CRUISE SHIP ENGINE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ROMAN, BRONWEN, CAPTAIN MBEKI, KESTREL, HARBOR
* 1 A ¶ A cathedral of pipes and gauges.
* 2 A Diesel hammer, steam hiss.
* 3 A Walkways of grated steel overhang a pit where a titanic crankshaft thunders.
* 4 A Heat shimmers the air.
* 5 A Red emergency light.
6 A ¶ ROMAN (40s, chief engineer, greasy coverall, wrench in his belt) stands at a panel.
7 A BRONWEN (30s, security officer, stiff collar, radio at her hip) paces the catwalk.
8 A CAPTAIN MBEKI (50s, white uniform, polished buttons) leans on the rail, hat low.
9 A KESTREL (30s, stowaway, hood up, a black duffel bag) crouches by a bulkhead hatch.
10 D ROMAN: Nobody's supposed to be down here.
11 D BRONWEN: That's what I told her.
12 D KESTREL: I told you. I'm lost.
13 D CAPTAIN MBEKI: You are not lost.
* 14 A ¶ The radio at Bronwen's hip crackles.
15 D HARBOR [V.O.]: Ship's engine room, this is Harbor Control. Do you copy?
16 D BRONWEN (into radio): Harbor, we copy. Standby.
17 D HARBOR [V.O.]: Be advised, authorities are boarding at dawn.
18 A ¶ Mbeki straightens.
19 A Kestrel's hand tightens on the duffel.
20 A Roman looks from one to the other.
21 D CAPTAIN MBEKI: Who requested the boarding?
22 D HARBOR [V.O.]: Negative. Orders from the flag state.
23 A ¶ Kestrel bolts for the ladder.
24 A Bronwen vaults the rail and tackles her.
25 A They crash on the grating.
* 26 A The duffel bursts open and a stack of sealed documents slides across the floor.
27 A Roman scoops up a page and reads the header.
28 A Mbeki draws a revolver.
29 D CAPTAIN MBEKI [CONT'D]: Nobody move.
30 A ¶ Everyone freezes.
* 31 A Only the engine moves.

### SCENE s01013 | INT. WINE CELLAR BUNKER - FRENCH CHATEAU - NIGHT
Detected names (may be incomplete or contain aliases): BARAKA, HOLLOWAY, CPL. FINNEGAN, PVT. ORLANDO, PVT. DAGNY, DAGNY, MAJOR TREVELYAN
* 1 A ¶ Barrel vaults.
* 2 A Cobwebbed racks of dusty bottles.
* 3 A A single carbide lamp.
* 4 A The ground trembles faintly; every so often a spill of dust sifts from the stones overhead.
* 5 A Shells are falling somewhere above.
6 A ¶ SGT. BARAKA (40s, broad, helmet on his knee, cigarette cupped in his fist) sits on a barrel.
7 A LT. HOLLOWAY (20s, pistol, pressed tunic, a cut over one eye) studies a hand-drawn map.
8 A CPL.
9 A FINNEGAN (30s, freckled, rifle across his thighs) cleans his boots.
10 A PVT.
11 A ORLANDO (teen, helmet too big) shares a canteen with PVT.
12 A DAGNY (20s, red-cross armband, bandage roll in her teeth).
13 A ¶ Nobody talks.
* 14 A Another tremor.
* 15 A Dust sifts.
* 16 A A bottle clinks in the rack.
17 A Dagny glances up, lips tight around the bandage.
18 D SGT. BARAKA: They're walking it down the hill.
19 D LT. HOLLOWAY: Sergeant, we'll hold until dawn.
20 D SGT. BARAKA: Sir, we'll hold until the roof does.
21 D CPL. FINNEGAN: How many bottles you reckon are down here?
22 D PVT. ORLANDO: Hundreds.
23 D CPL. FINNEGAN: Could drink the war away.
24 D PVT. DAGNY: Could drown in it, more like.
25 D LT. HOLLOWAY: I want the radio checked.
26 D SGT. BARAKA: I've checked it twice.
27 D CPL. FINNEGAN: The radio's fine, sir.
* 28 A ¶ The field radio on the barrel beside Holloway hisses.
29 D MAJOR TREVELYAN [V.O.] (distorted): Holloway. Report.
30 D LT. HOLLOWAY (into the handset): Wine Cellar here, sir. All present. All quiet.
31 D MAJOR TREVELYAN [V.O.]: That is correct. The shelling will cease at oh-four-hundred. Stay under.
32 D LT. HOLLOWAY: Understood, sir.
33 A ¶ He sets the handset down.
34 A Nobody breathes.
35 D PVT. ORLANDO: Why would they stop?
36 D PVT. DAGNY: They don't stop.
37 D SGT. BARAKA: That's the point.
* 38 A ¶ Silence.
39 A Orlando tilts his head.
40 A Frowns.
* 41 A The tremors have stopped.
* 42 A The dust no longer sifts.
* 43 A Nothing in the whole vault moves.
44 D CPL. FINNEGAN: Four o'clock?
45 D LT. HOLLOWAY: Not yet.
46 D PVT. DAGNY: Then why is it quiet?
47 A ¶ Baraka crushes his cigarette.
48 A Holloway folds the map.
* 49 A From above, faint but clear, comes the clank of a tank tread on gravel, slow, deliberate, unhurried.
50 D SGT. BARAKA: Because they're finished shelling.

### SCENE s01014 | EXT. SKATEPARK POOL - DAWN
Detected names (may be incomplete or contain aliases): MIKA, DOM
* 1 A ¶ A drained kidney-shaped pool, cracked at the lip.
* 2 A Spray paint flares across the walls.
* 3 A Grey light, wet concrete.
* 4 A A beat-up board lies on its side.
5 A ¶ MIKA (16, bruised elbow, helmet strap hanging) sits on the deck above the deep end, phone pressed to her ear, a tangle of nerves.
6 D MIKA: Dom? You there?
7 D DOM [V.O.] (over phone, groggy): It's five in the morning.
8 D MIKA: I know.
9 D DOM [V.O.]: What's wrong?
10 D MIKA: Nothing. I'm at the pool.
11 D DOM [V.O.]: Mika. You said you wouldn't.
12 D MIKA: I said I wouldn't drop in without you.
13 D DOM [V.O.]: That's the same thing.
14 D MIKA: It's not.
15 A ¶ She peers over the lip.
* 16 A The bowl yawns below her, thirteen feet at the deepest.
17 A She sets the phone on speaker and lays it beside her.
18 D DOM [V.O.] (faint): Wait for me. I'm getting my shoes.
19 D MIKA: I'm just looking.
20 D DOM [V.O.]: Liar.
21 A ¶ She laughs, short.
22 A Pulls on the helmet.
23 A Buckles it.
24 A Picks up the board and places it on the lip, tail on the coping.
25 D MIKA: Okay. Okay. Okay.
26 D DOM [V.O.]: Mika! Don't!
27 A ¶ She steps on.
* 28 A The board tips.
29 A She shrieks, drops in, rockets down the wall, shoots across the flat bottom, climbs the far wall.
30 A She flies.
31 A She whoops.
32 A She slams down on her hip and skids on her back to the middle, laughing and swearing.
* 33 A ¶ The phone crackles on the deck.
34 D DOM [V.O., CONT'D]: Mika? Mika! Are you alive?
35 A ¶ She stares at the sky.
36 A Raises her phone arm, a thumb up toward no one.
37 D MIKA (shouting): Alive!
38 D DOM [V.O.]: Don't ever do that again.
39 D MIKA: Again.

### SCENE s01015 | INT. HAUNTED HOUSE HOTLINE CALL CENTER - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): VERNON, PRIYA, CHAD, LINDQVIST
* 1 A ¶ Cubicles under wire-hung plastic bats.
* 2 A A cardboard skeleton waves from the reception desk.
* 3 A Motivational posters read "ENGAGE YOUR SPIRIT."
* 4 A A whiteboard counts dead calls.
5 A ¶ VERNON (50s, regional manager, a lanyard bigger than his head) wanders the aisle with a clipboard.
6 A PRIYA (30s, headset, fluorescent highlighter) types fast.
7 A CHAD (20s, sweatpants, energy-drink can) slumps.
8 A MS. LINDQVIST (60s, perfectly pressed blouse, glasses on a chain) sits at the corner desk, immaculate.
9 D VERNON: Team! Quick huddle.
10 D PRIYA: We're on calls, Vernon.
11 D VERNON: It'll just take a minute.
12 D CHAD: That's what you said about the pizza party.
13 D VERNON: Which was a success.
14 D MS. LINDQVIST: It was a Tuesday, Vernon. Nobody came.
15 D VERNON: Because they were busy, Ms. Lindqvist.
16 D MS. LINDQVIST: With what?
17 D VERNON: Hauntings.
18 D PRIYA: We got four calls yesterday. Three were wrong numbers.
19 D VERNON: And the fourth?
20 D PRIYA: A man wanted to know if we do exorcisms.
21 D VERNON: Do we?
22 D CHAD: We do a free consultation.
23 D VERNON: Excellent. That's growth.
24 D MS. LINDQVIST: It's one consultation.
25 D VERNON: It's the beginning of a pipeline.
26 D CHAD: Is the pipeline cursed?
27 D VERNON: Chad.
28 D CHAD: I'm just asking.
29 D PRIYA: Vernon, with respect, why does the quarterly deck have a slide titled "Ghost Equity"?
30 D VERNON: It's a value proposition.
31 D MS. LINDQVIST: It's a pun.
32 D VERNON: It's both.
* 33 A ¶ The phones ring, all four at once.
34 A They stare.
35 A Nobody picks up.
36 A Vernon clears his throat.
37 A Straightens his tie.
38 A Smiles with all his teeth.
39 D VERNON [CONT'D]: Okay! Let's get those calls.
40 D PRIYA: They're ringing, Vernon.
41 D VERNON: I can hear that.
42 D CHAD: Who's answering?
43 D MS. LINDQVIST: Not me.
* 44 A ¶ They keep ringing.
* 45 A The lights flicker.
* 46 A The cardboard skeleton at reception topples over.
47 D PRIYA (very quietly): Okay. That one's us.
48 D VERNON: Let's hold on.
49 D CHAD (whispering): Hold on to what?
50 D VERNON: The scripts.
51 A ¶ He picks up a laminated page.
52 A Reads.
53 A His voice cracks.
54 D VERNON [CONT'D]: "Thank you for calling Spirit Assist. Your call is important to us."
55 D MS. LINDQVIST: Don't say that to them.
56 D VERNON: It's the script!
57 D PRIYA: They're not callers, Vernon.
* 58 A ¶ The phones stop.
* 59 A Silence.
* 60 A Then, from every headset on every desk, a whisper, in unison.
61 D CHAD: Nope.
62 A ¶ He stands.
63 A Takes his coat.
64 A Walks out.
65 A Priya looks at Ms. Lindqvist.
66 A Ms. Lindqvist takes off her glasses, folds them, and sets them on the desk.
67 D MS. LINDQVIST: I'll start with the ones in the supply closet.

### SCENE s01016 | EXT. CORN MAZE - NIGHT
Detected names (may be incomplete or contain aliases): WYATT, JOLENE, BUBBA, TINA
* 1 A ¶ Walls of dry stalks twice head-height.
* 2 A Moon behind thin cloud.
* 3 A The paths twist like intestines.
* 4 A Wind rustles the husks.
5 A ¶ WYATT (20s, letterman jacket, flashlight) leads, sweeping the beam.
6 A JOLENE (20s, hoodie, nervous giggle) clutches his sleeve.
7 A BUBBA (30s, big man, camo cap, a bag of beef jerky) bumps behind them.
8 A TINA (teen, braces, a phone held up like a candle) trails at the rear.
9 A ¶ They stop at a fork.
10 A Wyatt aims the beam left, then right.
* 11 A Corn stalks lean in on both sides like crowding spectators.
12 D WYATT: Which way?
13 D TINA: I'm out of battery.
14 D JOLENE: We came in from the left.
15 D BUBBA: We came in from the right.
16 A ¶ They freeze.
* 17 A The wind stops.
* 18 A Somewhere in the rows, a stalk snaps.
* 19 A Another.
* 20 A A third, closer.
21 A Wyatt kills the light.
22 A ¶ A shape rises from the left path.
* 23 A Tall.
* 24 A Thin.
* 25 A Wearing a feed-sack head.
26 A It tilts.
27 A Stares.
28 A ¶ Jolene screams.
29 A Bubba drops the jerky.
30 A Wyatt grabs both girls and wheels right.
31 A They sprint, crashing through stalks, but the shape follows without hurrying, gliding between the rows like a fish.
32 A Tina trips.
33 A Bubba hauls her up by the hood, and the four of them burst into a small clearing at the center of the maze.
* 34 A ¶ A wooden scarecrow, upright on a pole, waits there.
35 A Its sack head turns to face them.
36 A ¶ They scatter.

### SCENE s01017 | EXT. SLED-DOG CHECKPOINT - ARCTIC DUSK
Detected names (may be incomplete or contain aliases): INGRID, BAPTISTE, MARSHAL VOGEL
* 1 A ¶ A canvas tent in a field of blue snow.
* 2 A A propane heater.
* 3 A A rack of frozen dogs' booties.
* 4 A Wind flaps the tent walls.
* 5 A Overhead, the aurora begins to spill green.
6 A ¶ INGRID (30s, parka, frost in her eyelashes) kneels beside a team of eight huskies, rubbing a dog's paw.
7 A BAPTISTE (40s, race vet, orange snowsuit, stethoscope) checks another dog's heartbeat.
* 8 A A handheld radio crackles on a crate between them.
9 D MARSHAL VOGEL [V.O.] (radio): Checkpoint Four, this is Race Control. Status on team nineteen.
10 D INGRID: Race Control, team nineteen is at Checkpoint Four. Two hours rest. Then out.
11 D MARSHAL VOGEL [V.O.]: Negative. Storm front closing. You have twenty minutes.
12 D INGRID (to Baptiste): Twenty minutes?
13 D BAPTISTE: She can't run eight dogs in twenty.
14 D INGRID: They can.
15 D BAPTISTE: Not that one.
16 A ¶ He points.
17 A A big gray husky named Ash lies on his side, tongue lolling, ribs fluttering.
18 A Ingrid's face drops.
19 A She crawls to him.
20 D INGRID: Ash. Hey. Hey, big man.
21 D BAPTISTE: He's dehydrated. I'm pulling him from the team.
22 D INGRID: No.
23 D BAPTISTE: Ingrid.
24 D INGRID: He's my lead.
25 D BAPTISTE: He's a dog.
26 D INGRID: He's my lead dog.
* 27 A ¶ The radio crackles again.
28 D MARSHAL VOGEL [V.O.]: Team nineteen, you have fifteen.
29 A ¶ Ingrid grabs the radio.
30 D INGRID: Race Control, scratch team nineteen.
31 D MARSHAL VOGEL [V.O.]: Say again?
32 D INGRID: I'm scratching. I'm staying with my dog.
* 33 A ¶ A beat of static.
34 A Baptiste smiles, and brings her a cup of water for Ash.
* 35 A Above them the aurora breaks wide and green across the dark.

### SCENE s01018 | INT. DEEP-SEA MINING SUBMERSIBLE - COCKPIT - SIX KILOMETERS DOWN
Detected names (may be incomplete or contain aliases): CAPTAIN ZHAO, ALVARO, LENA
* 1 A ¶ A pressurized sphere barely wider than a bathtub.
* 2 A Banks of dials and gauges.
* 3 A Three seats facing a viewport thick as a dinner plate.
* 4 A Beyond it, nothing.
* 5 A Black water, falling snow of dead plankton.
6 A ¶ CAPTAIN ZHAO (50s, headset, steady voice) grips the yoke.
7 A ALVARO (30s, sweat-soaked polo, geologist) pores over a sonar screen.
8 A LENA (20s, rookie, braids tucked under a company cap) monitors the oxygen scrubbers.
9 D ZHAO: Depth six-oh-two-one. Holding.
10 D ALVARO: Sonar's picking up something big.
11 D LENA: How big?
12 D ALVARO: Bigger than the sub. Bigger than the seabed shelf.
13 D ZHAO: Is it moving?
14 D ALVARO: It's breathing.
15 D LENA: Captain, oxygen is dipping.
16 D ZHAO: Dipping how?
17 D LENA: Four percent in two minutes.
18 D ALVARO: Cap, the contact is closing.
19 D ZHAO: Lena, shut down the non-essentials.
20 D LENA: Shutting down.
21 D ALVARO: It's right under us.
22 D ZHAO: Alvaro, give me a heading.
23 D ALVARO: Up. Any direction up.
* 24 A ¶ The sub shudders.
* 25 A A groan rolls through the hull.
26 A Lena grips her seat.
* 27 A The viewport floods with a slow pale glow, climbing from below.
28 D LENA: Oh my God.
29 D ZHAO: Blow ballast.
30 D ALVARO: Blowing.
31 D LENA: It's not working.
32 D ZHAO: Blow it again!
33 D ALVARO: The valves are frozen.
* 34 A ¶ The glow swells.
35 A Something vast turns beneath them, an eye as wide as a cathedral, and the viewport fills with its slow, gold, curious gaze.
