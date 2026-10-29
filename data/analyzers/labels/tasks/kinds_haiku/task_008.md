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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0108.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00024 | EXT. GLACIER CREVASSE LEDGE - DAWN
Detected names (may be incomplete or contain aliases): TOBIAS ANSELM, MARGUERITE DELACROIX-ODUYA, RANGER
* 1 A ¶ A blue throat of ice drops away into dark.
2 A Forty feet down, on a shelf barely wider than a door, a man and a woman cling together in the frozen quiet.
3 A His left leg is bent wrong.
4 A She has one crampon and a rope that ends in frayed threads.
5 A ¶ TOBIAS ANSELM (40s, beard crusted white) tries to sit upright.
6 A He gasps and slides back against the wall.
7 A MARGUERITE DELACROIX-ODUYA (30s, climbing helmet cracked at the brow) crouches beside him, working a splint from a tent pole and webbing.
8 A ¶ She does not look at his face.
9 A She looks at the knot.
10 D TOBIAS: Leave it. Go up.
11 D MARGUERITE (without looking up): Shut up and hold the pole.
12 A ¶ He holds it.
13 A His hands shake.
14 A She pulls the strap tight and he screams, a sound that echoes down and never comes back.
* 15 A ¶ A hiss from her chest pocket.
16 A She freezes, then fumbles out a handheld radio.
17 D RANGER [O.S.] (over radio, thin with static): Team Four, Base. We have you on the thermal. Hold position. Helicopter wheels up in forty.
18 A ¶ Relief breaks across her face.
19 A She laughs, a cracked sound, and kisses the radio.
20 D MARGUERITE (into radio): Copy, Base. Two alive. One leg. Please hurry.
21 D RANGER [O.S.] (over radio): Copy two alive. Wind is picking up on the ridge. Stay low.
22 A ¶ She turns to him, grinning for the first time.
23 D MARGUERITE (to Tobias): Forty minutes. You hear that?
24 D TOBIAS (a whisper): I heard.
25 A ¶ He says it too calmly.
26 A She notices his lips, which are turning grey.
27 A She tears off her glove and presses two fingers to his neck.
28 D MARGUERITE (to herself): No. No no no. Stay with me, you stubborn old goat.
29 A ¶ He opens his eyes.
30 A Faintly, he smiles.
* 31 A ¶ Above them, the ice groans.
* 32 A A fine rain of snow sifts down.
33 A She pulls him against her chest and tucks her jacket around them both.
34 D RANGER [O.S.] (over radio): Team Four, Base. Weather window closing. Say again your status.
35 A ¶ She stares at the radio, then at the dark beyond the ledge.
36 A She keys it.
37 D MARGUERITE (into radio): Base, we are not going anywhere. Tell them to hurry.
38 A ¶ She sets the radio on his chest, where he can hear it.
* 39 A The ice groans again, and this time something far below answers.

### SCENE s00025 | INT. MOBILE SURGICAL TRUCK, FAIRGROUND - NIGHT
Detected names (may be incomplete or contain aliases): IMELDA CASTELLANOS-BRIGHT, TOOTS, VASSILIEV, WENDELL, DISPATCH
* 1 A ¶ Steel walls.
* 2 A Fluorescent hum.
* 3 A Outside, a carousel plays a warped waltz.
4 A ¶ DR. IMELDA CASTELLANOS-BRIGHT (50s, silver braid, precise) scrubs at a stainless sink.
5 A Across the narrow room, ANTON "TOOTS" VASSILIEV (30s, medic, tattooed forearms) wheels in a gurney.
* 6 A A sheet covers the shape on it.
7 D IMELDA: Toots. Slower.
8 D TOOTS: Sorry, Doc. Floor's uneven.
9 D IMELDA: It's a truck in a field. Everything's uneven.
10 A ¶ Toots locks the gurney.
* 11 A The carousel music thins, then swells.
12 D TOOTS: Vitals are stable. Pressure's low, but he's talking.
13 D IMELDA: Who is he?
14 D TOOTS: Calls himself Wendell. Fell off the Ferris wheel.
15 D IMELDA: Fell.
16 D TOOTS: That's his word.
17 A ¶ Imelda dries her hands.
18 A She folds the sheet back.
19 A WENDELL (60s, pale, cheerful, fairground jacket) squints up at the lights.
20 D WENDELL: Hello, hello. Don't go to any trouble.
21 D IMELDA: Mr. Wendell, I'm Dr. Castellanos-Bright. Where does it hurt?
22 D WENDELL: Nowhere, really. Funny that.
23 D IMELDA (to Toots): Pain meds?
24 D TOOTS: None. He refused.
25 D IMELDA: Refused?
26 D WENDELL: I like to feel where I am.
27 A ¶ She checks his pupils.
28 A He follows her light with unnerving ease.
29 A Toots shifts on his feet.
30 D TOOTS: Doc, a word?
31 D IMELDA: Say it here.
32 D TOOTS: It's not a thing for here.
33 A ¶ She holds his gaze.
34 A Then she walks him to the corner, out of Wendell's earshot.
35 D IMELDA (low): What.
36 D TOOTS: Fall was sixty feet. He landed on concrete.
37 D IMELDA: And?
38 D TOOTS: Nothing's broken. Not a rib. Not a bruise.
39 A ¶ Imelda looks back at Wendell.
40 A He waves.
41 D IMELDA: Then he's lucky.
42 D TOOTS: Doc, I felt for a pulse four times. I couldn't find one.
* 43 A ¶ The radio on the wall CRACKLES.
44 D DISPATCH [V.O.] (over radio): Mobile Two, dispatch. Ambulance en route, ETA fifteen. Say your patient's condition.
45 A ¶ Imelda keys the radio, eyes on Wendell.
46 D IMELDA (into radio): Dispatch, patient is stable. Repeat, stable.
47 D DISPATCH [V.O.] (over radio): Copy. Be advised, caller says the Ferris wheel victim was pronounced at the scene. Please confirm identity.
* 48 A ¶ Silence.
* 49 A The carousel waltz winds down to a single note.
50 D TOOTS: Doc.
51 D IMELDA: I heard.
52 A ¶ She turns.
53 A Wendell is sitting up, the sheet pooled at his waist.
54 A He's still smiling.
55 A His chest does not rise or fall.
56 D WENDELL: Dr. Castellanos-Bright. I think I'd like some of that pain medicine after all.
57 D IMELDA (slowly): Why's that, Mr. Wendell?
58 D WENDELL: Because it's starting.
59 A ¶ He looks down at his hands.
60 A They are going translucent, like wax over a flame.
61 D TOOTS (whispering): Doc, back away.
62 A ¶ Imelda doesn't.
63 A She reaches out and takes Wendell's hand, which is already cooling.
64 D IMELDA: Toots, tell dispatch to cancel the ambulance.
65 D TOOTS: Doc--
66 D IMELDA (not looking away): Tell them he's been pronounced.
67 A ¶ Toots stares at her.
68 A Then he lifts the radio, and his voice breaks.
69 D TOOTS (into radio): Dispatch, Mobile Two. Cancel the ambulance.
70 D WENDELL: Thank you for staying.
* 71 A ¶ The sheet settles over an empty gurney.
* 72 A Outside, the carousel starts again from the beginning.

### SCENE s00026 | INT. PIGEON LOFT, ROOFTOP - DAWN
Detected names (may be incomplete or contain aliases): STASYS BIRKAVS, DONNIE FUSCO, FAT LEO ARMBRUSTER
* 1 A ¶ Cooing.
* 2 A Feathers.
* 3 A Three men in a cage of chicken wire.
4 A ¶ STASYS BIRKAVS (50s, flat cap, careful) feeds grain from a tin.
5 A DONNIE FUSCO (30s, tracksuit) and FAT LEO ARMBRUSTER (40s, enormous, quiet) sit on upturned buckets.
6 D STASYS: Nobody here is angry. Understand?
7 D DONNIE: Nobody's angry.
8 D STASYS: The money is a number on paper. I like birds more than numbers.
9 D LEO (muttering): Birds don't lend.
10 D STASYS: No. They return. That is the difference.
11 D DONNIE (to the room): So we're square? Everyone square?
12 D STASYS (smiling): Of course. Leo, the bucket.
13 A ¶ Leo lifts his bucket.
* 14 A Underneath, a revolver, and beneath that, an envelope fat with cash.
15 A Donnie's smile slides off his face.

### SCENE s00027 | EXT. FROZEN ORCHARD OF GLASS APPLES - DUSK
Detected names (may be incomplete or contain aliases): WILHELMINA THRALE, FINN CARRAWAY
* 1 A ¶ A hillside of trees that grew crystal fruit and never stopped.
* 2 A Every apple holds a small captured flame.
* 3 A The snow around them glows amber.
4 A ¶ WILHELMINA THRALE (70s, thick gray cloak, a ladder strapped to her back) climbs to the highest branch.
5 A She plucks one apple, careful as a surgeon, and drops it into her satchel.
* 6 A It does not clink.
* 7 A It purrs.
8 A ¶ Below her, a boy waits.
9 A FINN CARRAWAY (11, bare ears, no gloves) holds the base of the ladder.
10 D WILHELMINA: You've not eaten.
11 D FINN: I'm fine.
12 D WILHELMINA: There's bread in my left pocket.
13 A ¶ Finn doesn't reach for it.
14 A Instead, he stares at the apples, his breath fogging.
15 D FINN: They're getting dimmer.
16 D WILHELMINA: They do, in winter.
17 D FINN: Mam says they were bright all year, when Da was alive.
18 A ¶ Wilhelmina lowers herself rung by rung.
19 A At the bottom she stands quietly beside him, close enough that her cloak brushes his shoulder.
20 D WILHELMINA: Your Da climbed this ladder every night.
21 A ¶ Finn picks at a thread on his sleeve.
22 D FINN: Did he ever fall?
23 D WILHELMINA: Twice. Never told your mother.
24 A ¶ Finn almost smiles.
25 A He takes the bread from her pocket without asking and breaks it in two, offering her the bigger half.
26 A ¶ She takes the smaller.
27 A He pretends not to notice.
* 28 A ¶ An apple above them flares, bright as noon, then settles into a soft glow.
29 A They both look up.
30 D FINN: Was that him?
31 A ¶ Wilhelmina folds the cloak tighter around the boy's shoulders.
32 A She says nothing.
33 A She keeps her hand there.

### SCENE s00028 | INT. BACKSTAGE, SUBMARINE-THEMED MUSEUM GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): ELOISE VANTERPOOL, ROMAN ASTOR-LIN, HESTER PENHALLOW, COLM BRADSHAW
* 1 A ¶ A cramped storeroom of plush squid, periscope keychains, and cardboard boxes marked FRAGILE.
* 2 A A string of party lights hangs over a folding table of wilting cupcakes.
3 A ¶ ELOISE VANTERPOOL (30s, rolled-up sleeves, name tag reading "Ask Me About Barnacles") counts stock with a clicker.
4 A At the doorway, ROMAN ASTOR-LIN (30s, rumpled blazer, wet from the rain) lingers with a bouquet of grocery-store carnations.
5 D ROMAN: Hi.
6 D ELOISE: You're late.
7 D ROMAN: I know.
8 D ELOISE: By three years, in fact.
9 D ROMAN (quietly): I know.
10 A ¶ She keeps clicking.
11 A He sets the carnations on the table, beside a cupcake that has "CONGRATS" piped across it in blue.
12 D ROMAN [CONT'D]: Whose party?
13 D ELOISE: Retirement. Dr. Penhallow. Thirty-one years of squid.
14 D ROMAN: I came to see you.
15 D ELOISE: Ro, don't.
16 D ROMAN: Eloise, listen. I didn't leave because I wanted to. My mother got sick, I flew to Singapore, and every time I tried to write the letter it came out like a lie. So I stopped trying. And then it was a year. And then it was too long.
17 D ELOISE: You could have called.
18 D ROMAN: I could have done a lot of things. I'm not asking you to forgive me. I'm only asking you to let me stand here for a minute.
19 A ¶ She stops clicking.
20 A She sets the clicker down and finally turns.
21 D ELOISE: Your mother?
22 D ROMAN: She passed in March.
23 D ELOISE (softer): I'm sorry.
24 D ROMAN: Thank you.
25 D ELOISE: Ro...
26 D ROMAN: Yeah?
27 D ELOISE: You still have that stupid scarf?
28 D ROMAN (laughing, relieved): It's in the car.
* 29 A ¶ Laughter from the corridor.
30 A A door bangs open and a crowd of coworkers fills the storeroom with noise.
31 A At the front, a new arrival: DR. HESTER PENHALLOW (60s, tweed, bow tie shaped like a seahorse), glowing with champagne.
32 D PENHALLOW: Eloise! There you are! Is this the famous Roman?
33 D ELOISE (blushing): Dr. Penhallow, he's not--
34 D PENHALLOW: You've been talking about him for three years. Have a cupcake, dear boy.
35 A ¶ Roman looks at Eloise.
36 A She does not meet his eyes, but she does not deny it.
37 D ROMAN: Thank you. I will.
38 A ¶ Behind them, a grinning intern, COLM BRADSHAW (20s, lanyard, hopeful), holds up a phone.
39 D COLM: Group photo! Everyone squeeze in!
40 A ¶ Eloise steps beside Roman.
41 A Their shoulders touch.
42 A Neither moves away.
43 D ELOISE (low): You're buying dinner.
44 D ROMAN (low): Anything.
45 D ELOISE (low): Anywhere?
46 D ROMAN (low): Anywhere.
* 47 A ¶ Colm's flash goes off.
48 A For one frame, they are both laughing.
49 D PENHALLOW: Lovely. Now, who wants to hear about the giant squid?
50 A ¶ Groans from everyone.
51 A Eloise leans against Roman and whispers.
52 D ELOISE: Run.
53 A ¶ They slip out through the storeroom's back door.
* 54 A The party lights keep swaying behind them.

### SCENE s00029 | INT. AIR TRAFFIC CONTROL TOWER, SMALL REGIONAL AIRPORT - NIGHT
Detected names (may be incomplete or contain aliases): OZZIE, FAIRWEATHER, PRU, MARTIN ESPERANZA, JUNE TAKAHASHI, PILOT
* 1 A ¶ A glass-walled octagon above a dark runway.
* 2 A Radar scope glows green.
* 3 A A cold cup of coffee sits beside a ham sandwich with one bite out of it.
4 A ¶ OSWALD "OZZIE" FAIRWEATHER (60s, headset, cardigan) sits at the console, steady and unhurried.
5 A Next to him stands his granddaughter, PRUDENCE "PRU" FAIRWEATHER (17, school uniform, backpack), holding a notebook.
6 A She is supposed to be doing homework.
7 A She is not.
* 8 A ¶ Two others fill the cramped room.
9 A One is MARTIN ESPERANZA (30s, shift supervisor, tie loosened), who hovers over the radar.
10 A The other is a trainee, JUNE TAKAHASHI (19, apron over uniform, nervous), who clutches a clipboard.
11 D OZZIE: Pru, if you're going to watch, watch properly. Come around here.
12 D PRU: Grandpa, I'm fine.
13 D OZZIE: Come on.
14 A ¶ She steps beside him.
15 A He nods to the scope.
16 D OZZIE [CONT'D]: That blip is a Cessna. November-Four-Two-Seven. See how she drifts?
17 D PRU: Why?
18 D OZZIE: Crosswind. He's fighting it.
19 A ¶ Pru leans closer.
20 A Her breath fogs the glass.
21 D PILOT [V.O.] (over radio, crackling): Tower, Cessna Four-Two-Seven, ten miles out, requesting landing.
22 A ¶ Ozzie squeezes the mic.
23 D OZZIE (into radio): Four-Two-Seven, Tower, runway two-seven, wind two-six-zero at eighteen gusting twenty-five. Say your fuel state.
24 D PILOT [V.O.] (over radio): Tower, Four-Two-Seven, thirty minutes of fuel. We're good.
25 D MARTIN (muttering): Thirty minutes. In that wind.
26 D JUNE: Should I call the fire crew?
27 D MARTIN: Not yet.
28 A ¶ Ozzie hands the headset to Pru.
29 D PRU: Grandpa, no.
30 D OZZIE: Just say what I say. "Four-Two-Seven, cleared to land."
31 A ¶ She hesitates, then pulls the headset on.
32 A Her voice shakes.
33 D PRU (into radio): Four-Two-Seven, cleared to land.
34 D PILOT [V.O.] (over radio): Cleared to land, Four-Two-Seven. Who's this? You sound young.
35 D PRU: Um. I'm... training.
36 D PILOT [V.O.] (over radio): Good job, trainee. See you on the ground.
37 A ¶ Pru stares at her grandfather, wide-eyed.
38 A He chuckles and pats her shoulder.
39 D OZZIE: Eyes on the scope, Pru. That's the whole job.
* 40 A ¶ Below them, tiny landing lights wobble through the dark, steadying, lowering.
41 A They all watch it touch down.

### SCENE s00030 | INT. BEEKEEPER'S KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): FLORIAN ACHTERBERG, MAREN, EZRA, ODALYS
* 1 A ¶ Honey-gold light slants through a window crusted with propolis.
* 2 A On the table, a cracked jar leaks slow amber across oilcloth.
3 A FLORIAN ACHTERBERG (70s, veil pushed back, hands like roots) stands rigid at the stove.
4 A His daughter MAREN (40s, city coat, car keys still in her fist) has not sat down.
5 A At the table, her son EZRA (9, scabbed elbows) hides behind a comic book, while his aunt ODALYS (50s, flour on her apron) pretends to knead dough.
6 D MAREN: You sold the north hives without telling me.
7 D FLORIAN: They were mine to sell.
8 D ODALYS: Maren, sit. There's tea.
9 D MAREN: I don't want tea. Dad, those were Mom's.
10 D FLORIAN: Your mother is dead eleven years. The bees don't know it.
11 D EZRA (from behind the comic): Are we fighting?
12 D ODALYS: No, sweetheart. We're discussing.
13 D MAREN: I drove six hours. I thought you were sick.
14 D FLORIAN: I am old. It's the same thing.
15 D MAREN (breaking): You could have asked me.
16 D FLORIAN: And you would have said keep them. And I would have kept them. And they would have died, because I can't lift the supers anymore.
* 17 A ¶ Silence.
* 18 A A single bee drifts across the room and lands on the leaking jar.
19 D ODALYS: Ezra, bring me the dish towel.
20 A ¶ He does.
21 A Maren sits at last.
22 A Florian turns from the stove, picks up the jar, and sets it in front of her.
23 D FLORIAN: Taste.
24 D MAREN: Dad.
25 D FLORIAN: Taste it.
26 A ¶ She dips a finger.
27 A Her face softens as she tastes, and she covers her mouth with her wrist.
28 D MAREN: It's hers.
29 D FLORIAN: The last of the north. I saved it for you.

### SCENE s00031 | INT. CLOCKMAKER'S GUILD VAULT ANTECHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): SECOND MAN, JANITOR, GUARD, DWYER, STRANGER
* 1 A ¶ Marble floor.
* 2 A Brass pendulums under glass domes, swinging out of sync.
* 3 A A time lock gleams on a steel door.
4 A ¶ A MAN in a janitor's coverall mops, eyes down.
5 A He is tall, mid-40s, with a limp.
6 A Behind him, a second MAN in a security blazer, younger, wide-shouldered, scrolls a tablet.
7 A ¶ The janitor stops mopping and glances at the guard.
8 A The guard doesn't look up.
9 D JANITOR: Quiet shift.
10 D GUARD: Don't talk to me while I'm working.
11 D JANITOR: Right.
12 A ¶ He mops closer to the door.
13 A His mop handle taps the lock panel, twice, a soft tick.
14 D GUARD: Hey. What was that?
15 D JANITOR: Nothing. Sorry.
16 A ¶ The guard approaches, tablet lowered.
17 A The janitor straightens.
18 A Their eyes meet.
19 D GUARD: I don't think I know you.
20 D JANITOR: Third week. Night crew.
21 D GUARD: Name?
* 22 A ¶ A beat.
* 23 A Somewhere, a pendulum clicks.
24 A The janitor's hand slips into his bucket.
25 D JANITOR: Cormac Dwyer.
26 D GUARD (reading from tablet): There's no Dwyer on the roster.
27 D DWYER (calmly): No. There isn't.
28 A ¶ He pulls a taser from the bucket and fires.
29 A The guard drops.
30 A Dwyer kneels, takes his keycard, and turns to the pendulums.
31 A ¶ At the far end of the room, a SECOND MAN has stood watching from the shadows the entire time: a thin figure in a clockmaker's apron, silver hair, spectacles.
32 A He steps forward.
33 D STRANGER: You're early.
34 D DWYER (not surprised): You said midnight.
35 D STRANGER: I said twelve-oh-three. He walks the floor at twelve-oh-two.
36 D DWYER: Then he's dead on schedule.
37 A ¶ The stranger smiles, tucks a loupe into his pocket, and removes a key from around his neck.
38 D STRANGER: Call me Aurelio.
39 A ¶ AURELIO inserts the key.
* 40 A The vault door sighs open on a room of ticking gold.

### SCENE s00032 | EXT. SALT FLATS WAGON STOP - NOON
Detected names (may be incomplete or contain aliases): HANNAH DELACROIX, ZEKE, MARSHAL TOBIAS GRAINGER
* 1 A ¶ White ground.
* 2 A White sky.
* 3 A A single wagon with a cracked wheel.
* 4 A A water barrel under a tarp.
* 5 A The heat shimmers like paper held over a flame.
6 A ¶ HANNAH DELACROIX (30s, dust-caked bonnet, rifle across her knees) sits on the wagon tongue.
7 A Her husband EZEKIEL "ZEKE" DELACROIX (30s, bandaged hand) paces the barrel.
8 A Across the flats, a lone rider approaches slowly, leading a second horse: MARSHAL TOBIAS GRAINGER (50s, gray duster, tin star scratched with age).
9 A ¶ Grainger reins up, tips his hat.
10 D GRAINGER: Afternoon.
11 D HANNAH: Marshal.
12 D ZEKE: Afternoon.
13 D GRAINGER: Looks like a wheel gave out.
14 D HANNAH: It did.
15 D GRAINGER: I could help.
16 D ZEKE: We're fine.
17 A ¶ Grainger swings down.
18 A He pats his horse.
19 A He looks at the barrel, the rifle, Zeke's bandaged hand.
20 D GRAINGER (to Zeke): Cut yourself?
21 D ZEKE: Rope.
22 D GRAINGER: Funny. Rope burns look different from teeth.
23 A ¶ Hannah's finger moves toward the trigger.
24 A Zeke's jaw works.
25 D HANNAH: Marshal, you're welcome to water.
26 D GRAINGER: That's kind. I'm not thirsty.
27 A ¶ He walks to the back of the wagon and lifts the tarp.
* 28 A Underneath: a canvas sack, dark with dried stains.
29 D GRAINGER [CONT'D] (to himself): Well, now.
30 D ZEKE: Let it be, Marshal.
31 D HANNAH: Let it be.
32 A ¶ They say it together, flat and fast.
33 D ZEKE [CONT'D]: ^We didn't kill him for the money.
34 D HANNAH: ^He came for the children.
35 A ¶ Grainger lets the tarp fall.
* 36 A The wind lifts a thin curtain of salt.
37 D GRAINGER (to the flats): Hell of a place to find out you were right.
38 A ¶ He unbuckles his gun belt and drops it in the dust.
39 D GRAINGER [CONT'D] (to Hannah): Put that rifle down, ma'am. I'm only going to sit.
40 A ¶ She doesn't.
41 A He sits anyway.

### SCENE s00033 | INT. LAUNDROMAT - DAY
Detected names (may be incomplete or contain aliases): PERPETUA DUNMORE, BART, CASSIDY, IMOGEN FAIRBANKS, MANAGER
* 1 A ¶ Rows of humming dryers.
* 2 A Fluorescent lights.
* 3 A A television bolted high on the wall plays a cooking show with the sound off.
4 A ¶ PERPETUA DUNMORE (50s, bright cardigan, folding towels with military precision) works at a table.
5 A Nearby, her nephew BARTHOLOMEW "BART" CASSIDY (20s, wrinkled hoodie, guitar case) sits on a dryer, scrolling his phone.
6 A At the vending machine, a stranger, IMOGEN FAIRBANKS (30s, crisp suit, rolling suitcase), feeds coins into the slot.
7 D PERPETUA: Bart, get off the dryer.
8 D BART: It's off.
9 D PERPETUA: The principle is on.
10 D IMOGEN (to the machine): Come on, come on.
* 11 A ¶ The machine rattles.
* 12 A A bag of pretzels hangs from the spiral, refusing to drop.
13 D BART: You have to shake it.
14 D IMOGEN: I'm not shaking a vending machine.
15 D PERPETUA: Everyone shakes the vending machine.
16 D IMOGEN: I have a flight in two hours.
17 D BART: Then shake it faster.
18 A ¶ Imogen glares, then grips the machine and rocks it.
* 19 A The pretzels fall.
20 A She straightens her blazer with great dignity.
21 D PERPETUA: ^Nicely done.
22 D BART: ^Nicely done.
23 A ¶ They say it at the same time and look at each other, startled.
24 A Imogen fights a smile.
* 25 A ¶ A voice crackles from the ceiling speaker.
26 D MANAGER [V.O.] (over intercom): Attention customers. Machine seven is on fire. Machine seven is on fire. This is not a drill.
27 A ¶ Everyone turns.
* 28 A Machine seven is, in fact, on fire.
* 29 A A thin orange flame licks the lint trap.
30 D PERPETUA: Of course it is.
31 D BART: Water?
32 D IMOGEN (heading for the door): I'm not paid for this.
33 D BART: Nobody is!
34 A ¶ Perpetua drags a bucket across the floor and dumps it in.
* 35 A The fire dies with a sad hiss.
* 36 A A single towel drifts out, charred and smoking.
37 D IMOGEN (from the doorway): Is this a regular occurrence?
38 D PERPETUA: Tuesdays.
39 A ¶ Imogen laughs despite herself, tears open her pretzels, and offers one to Bart.

### SCENE s00034 | INT. SALT-PORK STORAGE LOFT, SHIPYARD - EVENING, 1840s
Detected names (may be incomplete or contain aliases): CAPTAIN EZEKIAL HOLLOWAY, SILAS PETHERBRIDGE, OLUWASEUN ADEBAYO, ABIGAIL FINCH, JEREMIAH TUCKER, THEODORE VANE
* 1 A ¶ A low-beamed room smelling of tar and brine.
* 2 A Barrels line the walls.
* 3 A A single oil lamp casts a shaky circle on the planks.
* 4 A Rain drums the roof.
5 A ¶ Six figures sit on barrel tops around a makeshift table of planks.
6 A ¶ CAPTAIN EZEKIAL HOLLOWAY (50s, weathered, grey queue) presides.
7 A Beside him is his first mate, SILAS PETHERBRIDGE (30s, red whiskers, cheerful).
8 A Across from them sits the shipwright, OLUWASEUN ADEBAYO (40s, broad-shouldered, leather apron).
9 A Next to him, the ship's cook, MRS. ABIGAIL FINCH (60s, spectacles, sleeves rolled).
10 A At the end, young cabin boy JEREMIAH TUCKER (13, freckled, wide-eyed).
11 A Lastly, the agent, MR. THEODORE VANE (40s, black coat, ink-stained fingers) sits stiffly apart.
12 D HOLLOWAY: Gentlemen. Madam. We sail Thursday if the weather holds.
13 D PETHERBRIDGE: It won't, Captain.
14 D HOLLOWAY: It will if I will it so.
15 D ADEBAYO: The hull will hold. The cargo is another question.
16 D VANE: The cargo is insured.
17 D FINCH: Insured against what, Mr. Vane? A woman cannot pickle a drowned ship.
18 D VANE: Against everything, Mrs. Finch.
19 D PETHERBRIDGE: Except honesty.
20 D JEREMIAH: Sir, what is the cargo?
* 21 A ¶ Silence.
22 A Vane looks to Holloway.
23 A Holloway looks at his hands.
24 D HOLLOWAY: Tea, boy.
25 D JEREMIAH: Only tea?
26 D ADEBAYO (gently): Tea and what comes with it.
27 D VANE: Mr. Adebayo, I would remind you of your contract.
28 D ADEBAYO: I made the contract in good faith. I did not know the ship was meant for Lisbon.
29 D FINCH: Lisbon.
30 D VANE: A port like any other.
31 D PETHERBRIDGE: Not for what we carry.
32 D HOLLOWAY: Enough.
* 33 A ¶ A long pause.
* 34 A Rain on the roof.
35 D JEREMIAH: I don't mind, sir. I can keep quiet.
36 D FINCH (softly): That, child, is exactly what worries me.

### SCENE s00035 | INT. FROZEN FOOD WAREHOUSE, WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): ROZ, PETKOVIC, DENNIS ABERNATHY-VOSS, LAZARUS BELL
* 1 A ¶ Steel racks of frosted boxes.
* 2 A A vapor cloud rolls off every breath.
* 3 A The door is frozen shut.
4 A ¶ ROSALIND "ROZ" PETKOVIC (30s, thermal jacket, night inventory clipboard) crouches beside the door, pounding the latch.
5 A Behind her, her coworker DENNIS ABERNATHY-VOSS (40s, beard stiff with frost) paces the aisle.
6 A Between them, hunched on a pallet of peas, sits a stranger in a soaked tuxedo: LAZARUS BELL (50s, slow-blinking, shivering).
7 D ROZ: It's jammed!
8 D DENNIS: Hit it harder!
9 D ROZ: I am hitting it!
10 A ¶ Dennis shoves her aside and throws his shoulder into the door.
* 11 A It doesn't budge.
12 A They both slump against it, panting.
13 A ¶ Lazarus lifts his head.
14 D LAZARUS: It will not open.
15 D DENNIS: Who the hell are you?
16 D LAZARUS: A man in the wrong place.
17 D ROZ: How did you get in here?
18 D LAZARUS: I walked in. Hours ago. Perhaps days.
19 D DENNIS: Days? We've been here forty minutes.
20 D LAZARUS: You have been here forty minutes. I have been here longer.
21 A ¶ He stands.
22 A His breath doesn't fog.
23 A Roz sees it first and backs away, clipboard hugged to her chest.
24 D ROZ: Dennis.
25 D DENNIS: What?
26 D ROZ: Look at his breath.
27 A ¶ Dennis looks.
28 A Lazarus smiles, apologetic, and spreads his hands.
29 D LAZARUS: I have found it is easier not to tell people.
30 D DENNIS: Tell people what?
31 D LAZARUS: Only that it does not get warmer. That is all.
32 A ¶ Roz grabs Dennis by the sleeve and they both charge the door again, slamming into it together, again and again, until it cracks and bursts open on a blast of loading-dock air.
33 A ¶ They tumble out onto asphalt.
34 A Roz scrambles to look back.
* 35 A ¶ The freezer door swings gently shut.
36 A Through the shrinking gap, Lazarus raises a hand in farewell.

### SCENE s00036 | INT. FAMILY STATION WAGON, PARKED OUTSIDE A PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, GIRL, JOSEPHINE, MAEVE, DESMOND
* 1 A ¶ Rain beads the windshield.
* 2 A The dashboard clock reads 7:52.
* 3 A Across the street, the planetarium dome glows a soft blue, waiting for a show that has already begun.
4 A ¶ In the driver's seat, a man in a thin wool coat grips the wheel, his eyes fixed on the building.
5 A This is the STRANGER: late forties, heavy-lidded, thoughtful.
6 A In the back seat, a girl of ten sits cross-legged, her ticket pinched between two fingers.
7 A She watches him in the rearview mirror and says nothing.
8 A ¶ The man draws a breath to speak.
9 A Doesn't.
10 A ¶ The girl unbuckles, leans forward between the seats.
11 D GIRL: We're late.
12 D STRANGER: I know.
13 D GIRL: Mom says you're always late.
14 D STRANGER (a small laugh): Your mother is usually right.
15 D GIRL: Is that why she left?
16 A ¶ He doesn't answer.
* 17 A A raindrop slides down the glass.
* 18 A The windshield wipers sweep once, twice.
19 D STRANGER: What do you want me to say, Josephine?
20 D JOSEPHINE (shrugging): Just say a true thing.
21 A ¶ The man looks at her, startled.
22 A Something in his shoulders loosens.
23 D STRANGER: All right. I don't know how to do this. I've never known. I walk into rooms and everyone's already decided who I am.
24 D JOSEPHINE: You're my dad.
25 D STRANGER: Yes.
26 D JOSEPHINE: That's all you have to be.
* 27 A ¶ His phone buzzes on the dashboard.
* 28 A A name lights the screen: MAEVE.
29 A He lets it ring.
30 D JOSEPHINE [CONT'D]: Aren't you going to get it?
31 D STRANGER: Later.
* 32 A ¶ The phone goes silent, then buzzes again.
33 A Josephine reaches over and answers it for him, putting it on speaker.
34 D MAEVE [V.O.] (over phone, tense): Desmond? Is she with you? The planetarium said you never checked in.
35 D DESMOND (clearing his throat): She's here, Maeve. We're in the car.
36 D MAEVE [V.O.] (over phone): In the car? It started at seven.
37 D DESMOND: I know. I got us lost. And then I just... sat here.
* 38 A ¶ A pause on the line.
* 39 A Rain on the roof.
40 D MAEVE [V.O.] (over phone, softer): Is she okay?
41 D JOSEPHINE: ^I'm okay.
42 D DESMOND: ^She's okay.
43 A ¶ They say it at the same time.
44 A Desmond glances at his daughter.
45 A She smiles.
46 D MAEVE [V.O.] (over phone): Then go in. They'll let you in late. Tell them it's my fault.
47 D DESMOND: It isn't.
48 D MAEVE [V.O.] (over phone): Just go, Des.
* 49 A ¶ The call ends.
50 A Desmond sets the phone down very gently, as if it might break.
51 D JOSEPHINE: So?
52 D DESMOND: So.
53 A ¶ He opens his door.
* 54 A The rain is barely more than mist.
55 A He walks around, opens hers, and offers his hand.
56 A She takes it.
57 D DESMOND [CONT'D]: Let's go look at the sky.
58 A ¶ They cross the street together, small under the glowing dome.

### SCENE s00037 | INT. NATURAL HISTORY MUSEUM, DINOSAUR HALL - NIGHT
Detected names (may be incomplete or contain aliases): CASSIUS OBAYOMI, RENATA VOSKUIJLEN, FONZ, MARBURY, PALOMA TREVINO-HALE, GUSTAV LINDQVIST, QUINCY ABERNATHY, GUARD, ROLAND PIKE
* 1 A ¶ A cathedral of bones.
* 2 A A Diplodocus skeleton arches over the central floor.
* 3 A Moonlight pours through high windows.
* 4 A Somewhere a pipe drips.
* 5 A ¶ A service door clicks open.
6 A Six figures in black filter in, silent as cats: CASSIUS OBAYOMI (40s, crew boss, headset), RENATA VOSKUIJLEN (30s, safecracker, tool roll), ILDEFONSO "FONZ" MARBURY (20s, climber, harness), PALOMA TREVINO-HALE (30s, hacker, laptop bag), GUSTAV LINDQVIST (60s, forger, silk gloves), and QUINCY ABERNATHY (20s, driver, nervy).
7 D CASSIUS (whispering): Clock's running. Eleven minutes.
8 A ¶ Renata crosses to a glass case under the skeleton's ribs, where a fossilized egg sits on velvet.
9 A Fonz clips a line to the beam above and begins to ascend.
10 A Paloma kneels beside a wall panel, jacks in, and her screen scrolls green code.
11 A Gustav circles the display, comparing the egg to a photograph in his palm, while Quincy hovers at the doorway, watching the corridor with his heart in his throat.
12 D PALOMA: Cameras are looped.
13 D CASSIUS: Fonz?
14 D FONZ (from above): Almost. Bone's slick.
15 A ¶ Renata pries the lock.
16 A It pops.
17 A She lifts the lid and Gustav, with trembling gloved hands, swaps the real egg for a copy, but a sharp CLICK echoes from the corridor and Quincy swallows, Fonz freezes in mid-swing, Paloma shuts her laptop, and Renata drops flat behind the case.
18 D QUINCY (hissing): Guard. Coming this way.
19 D CASSIUS: Positions.
20 A ¶ Fonz hauls himself up onto the Diplodocus ribs.
21 A Gustav tucks the real egg inside his coat and melts behind a pillar.
22 A Paloma and Renata slide under a bench, and Cassius presses against the wall beside the door as a flashlight beam swings across the floor.
23 A ¶ A GUARD, a heavyset man in his fifties named ROLAND PIKE, strolls in humming.
24 A He pauses at the case.
25 A He sweeps his light along the glass.
* 26 A A beat.
* 27 A Another.
28 A Cassius raises a fist, ready.
29 D ROLAND (muttering): Dang pigeons.
30 A ¶ He wanders off.
* 31 A His footsteps fade.
32 A The crew exhales as one.
33 A Fonz drops silently to the floor and the six of them regroup near the door.
34 A Cassius counts heads with a finger.
35 D CASSIUS: Out. Now.
36 A ¶ They file through the service door, one by one, Gustav last, cradling the egg like a newborn.
* 37 A ¶ The Diplodocus watches them go.

### SCENE s00038 | INT. FLOODED COMMAND DUGOUT, WESTERN FRONT - DAWN, 1917
Detected names (may be incomplete or contain aliases): MAJOR ALISTAIR PEMBROKE-HUNT, LIEUTENANT SAMUEL ODUYA, SERGEANT DESMOND ARCHIBALD
* 1 A ¶ Timber props.
* 2 A Water to the ankles.
* 3 A A field telephone dangles from a nail.
* 4 A Shells rumble, miles off.
5 A ¶ MAJOR ALISTAIR PEMBROKE-HUNT (40s, immaculate despite the mud, pipe unlit) sits at a map table.
6 A Across from him, LIEUTENANT SAMUEL ODUYA (20s, shaking hands, cracked spectacles) stands at attention.
7 A In the corner, SERGEANT DESMOND ARCHIBALD (50s, scarred jaw, rifle across his lap) polishes a bayonet.
8 D PEMBROKE-HUNT: Sit, Lieutenant.
9 D ODUYA: I'll stand, sir.
10 D PEMBROKE-HUNT: Sit.
11 A ¶ Oduya sits.
* 12 A The water around his boots ripples.
13 D PEMBROKE-HUNT [CONT'D]: At six o'clock, you'll take your platoon over the top.
14 D ODUYA: Sir, the wire isn't cut.
15 D PEMBROKE-HUNT: It will be.
16 D ODUYA: Sir, with respect, the artillery has been wrong three days running.
17 D PEMBROKE-HUNT: Lieutenant, I did not ask for a critique.
18 D ODUYA: No, sir. But my men will ask me why. And I won't have an answer.
19 D ARCHIBALD (quietly, not looking up): Tell them it's an order, lad. It's the only answer anyone's got.
20 D PEMBROKE-HUNT: Thank you, Sergeant.
21 D ARCHIBALD: Don't thank me, sir. I'm only telling the boy what I told the last one.
22 A ¶ Pembroke-Hunt sets down his pencil.
* 23 A For a long moment, the only sound is dripping.
24 D PEMBROKE-HUNT: Lieutenant Oduya. Do you have family?
25 D ODUYA: A mother, sir. In Lagos. And a fiancee in Kent.
26 D PEMBROKE-HUNT: Write to them now. I'll see the letters go out whatever happens.
27 D ODUYA: Thank you, sir.
28 D PEMBROKE-HUNT: That's all.
29 A ¶ Oduya rises, salutes, and wades toward the ladder.
30 A Archibald watches him go, then turns to the Major.
31 D ARCHIBALD: You'll be writing his, sir?
32 D PEMBROKE-HUNT (after a pause): I always do.

### SCENE s00039 | INT. PRIVATE LIBRARY OF A VICTORIAN MANOR - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR PHILOMENA CRABTREE, CONSTABLE REGINALD OKAFOR-WELLS, GWENDOLEN SLOANE
* 1 A ¶ Candles gutter.
* 2 A A thunderclap rattles the leaded glass.
* 3 A In the center of the room, a body lies under a red velvet curtain, only a pair of polished shoes showing.
4 A ¶ INSPECTOR PHILOMENA CRABTREE (50s, damp mackintosh, sharp eyes) enters, followed by CONSTABLE REGINALD OKAFOR-WELLS (20s, helmet under his arm).
5 A A third figure waits by the fireplace: the manor's housekeeper, MRS. GWENDOLEN SLOANE (60s, black dress, key ring at her waist).
6 D CRABTREE: Who found him?
7 D SLOANE: I did, Inspector. At half past nine.
8 D CRABTREE: And the door?
9 D SLOANE: Locked from within.
10 D OKAFOR-WELLS: Then how did you get in?
11 D SLOANE: I have a key.
12 D CRABTREE (to Okafor-Wells): Constable, the windows.
13 A ¶ He checks each in turn.
* 14 A Every latch is down.
15 D OKAFOR-WELLS: Sealed, ma'am.
16 A ¶ Crabtree kneels, lifts the curtain, and studies the dead man's face.
17 A A tiny smile crosses hers.
18 D CRABTREE: Mrs. Sloane. Did Lord Ashworth take his evening port?
19 D SLOANE: He did.
20 D CRABTREE: From this decanter?
21 A ¶ She taps a crystal vessel on the mantel.
* 22 A It is empty.
23 D SLOANE: It was full when I left him.
24 D CRABTREE: Constable, the glass.
25 A ¶ Okafor-Wells lifts it with a handkerchief and sniffs.
26 A He recoils.
27 D OKAFOR-WELLS: Almonds.
28 A ¶ Mrs. Sloane's hand tightens on her keys.
29 A Crabtree rises slowly.
30 D CRABTREE: Mrs. Sloane, I don't believe this man was alone when he died.
31 D SLOANE: Inspector, I assure you--
* 32 A ¶ A thump from the bookcase.
33 A All three freeze.
* 34 A The shelf swings inward on a hidden hinge and a gust of cold air blows out every candle but one.
35 A ¶ Crabtree and Okafor-Wells spin toward the opening.
36 A Mrs. Sloane bolts for the door, but Okafor-Wells catches her sleeve and the two of them struggle, keys clattering across the floor.
37 D CRABTREE (calmly): Constable, hold her.
38 D OKAFOR-WELLS: I've got her, ma'am.
39 A ¶ Crabtree raises the last candle toward the dark passage.
40 D CRABTREE (to the dark): You may come out now.

### SCENE s00040 | INT. BOWLING ALLEY SNACK COUNTER - AFTERNOON
Detected names (may be incomplete or contain aliases): PIP, NAKASHIMA, WALTER GRUNDY-BELL, OTIS, CARMELA, CORRADO PELLEGRINO
* 1 A ¶ A sleepy league day.
* 2 A The pins clatter in the distance like a slow applause.
3 A Five people share a booth built for four.
4 A ¶ PRISCILLA "PIP" NAKASHIMA (30s, team captain, sunburnt nose) stirs a milkshake with great concentration.
5 A Next to her, her husband WALTER GRUNDY-BELL (30s, wearing a shirt that says BOWL OR DIE) eats nachos one chip at a time.
6 A Across the table, her brother OTIS (20s, hoodie, headphones) stares into his phone.
7 A Squeezed at the end are the Pellegrinos: elderly twins CARMELA and CORRADO PELLEGRINO (70s, matching cardigans), who have been bowling together since the Truman administration.
8 D PIP: Walter, you promised you'd bowl a hundred.
9 D WALTER: I bowled ninety-eight, Pip.
10 D PIP: That's two short.
11 D WALTER: It was a very good ninety-eight.
12 D OTIS (not looking up): It was a gutter and a prayer.
13 D CARMELA: Corrado, pass the salt.
14 D CORRADO: Carmela, you don't need salt.
15 D CARMELA: I need what I need.
16 A ¶ Corrado slides the shaker across the table.
17 A Carmela and Walter both reach for it at the same time and knock the nachos into Pip's lap.
18 A All five freeze.
19 D PIP (with great calm): Walter.
20 D WALTER: I'll get napkins.
21 D CORRADO: Carmela, you did that.
22 D CARMELA: I did not.
23 A ¶ Otis finally lifts his eyes from the phone, examines the carnage, and returns to the screen without a word.
24 A Pip dabs cheese from her knee and takes a slow, controlled sip of milkshake.
25 D PIP: Next frame, Walter. Hundred or nothing.

### SCENE s00041 | INT. COMPETITIVE PIE-BAKING TENT, COUNTY FAIR - DAY
Detected names (may be incomplete or contain aliases): AGGIE, LINDQUIST-REYES, LONNIE BIGGS, MEI-LING ARROYO, SIGMUND PRATT, DOROTHEA, DELPHINE VASQUEZ-MOORE, JUDGE
* 1 A ¶ Rows of folding tables.
* 2 A Flour hangs in sunbeams like pollen.
* 3 A A banner reads: 87TH ANNUAL PIE CHAMPIONSHIP.
* 4 A A judge's gavel sits next to a bell.
5 A ¶ Six contestants stand behind their pies in tight, silent ranks.
6 A ¶ AGATHA "AGGIE" LINDQUIST-REYES (60s, blue ribbon pinned to apron, jaw set) polishes a lattice crust with a pastry brush.
7 A Beside her, LONNIE BIGGS (40s, sweating through a chef's coat, flour on his eyebrows) arranges cherries with tweezers.
8 A At the next station, the young prodigy MEI-LING ARROYO (16, braids, calm as a monk) lets her pie rest.
9 A Behind them, SIGMUND PRATT (70s, bolo tie, hands tremble) hums a hymn.
10 A At the end of the row, twin sisters DOROTHEA and DELPHINE VASQUEZ-MOORE (50s, identical aprons, identical glares) tap the same rhythm on their tables.
11 A ¶ A JUDGE in a straw boater strolls the line, clipboard in hand.
12 A He stops at Aggie.
13 D JUDGE: Mrs. Lindquist-Reyes. Third time in the final. Nervous?
14 D AGGIE: Never.
15 A ¶ Her brush twitches.
16 A Lonnie watches it twitch.
17 D JUDGE (to Lonnie): And you, young man?
18 D LONNIE: Oh, I'm great. Great! Totally relaxed!
19 A ¶ A cherry rolls off his tweezers and across the table.
20 A He does not move.
* 21 A Everyone watches it roll.
* 22 A It stops against Mei-Ling's pie.
23 A She regards it, then flicks it back to him with one finger.
24 A ¶ The judge raises his bell.
25 D DOROTHEA: ^Don't you dare.
26 D DELPHINE: ^Don't you dare.
27 A ¶ The twins speak as one, to each other.
* 28 A Neither blinks.
29 A The judge rings the bell.
30 A ¶ All six lift their forks like swords.
* 31 A The tent goes still.
32 A Sigmund's hymn gets louder, then stops mid-note.
33 A ¶ The judge cuts into Aggie's pie.
* 34 A Steam rises.
35 A He takes a bite.
36 A Chews.
37 A His face reveals nothing.
38 D JUDGE: Hm.
39 A ¶ Aggie's brush finally falls from her hand.

### SCENE s00042 | INT. FARMHOUSE DINING ROOM, WHEAT HARVEST SUPPER - NIGHT
Detected names (may be incomplete or contain aliases): GRANDFATHER IVAR HALVORSEN, ARNE HALVORSEN, GUNHILD, ASTRID, LEIF, RAMON BEAUMONT-CRUZ
* 1 A ¶ A long pine table sags under platters of ham, corn, and pickled beets.
* 2 A Kerosene lamps.
* 3 A Outside, combines idle in the dark, still warm.
4 A Six people sit shoulder to shoulder, and nobody has touched the food.
5 A ¶ At the head of the table sits GRANDFATHER IVAR HALVORSEN (80s, overalls pressed for the occasion, a hearing aid whistling softly).
6 A His son ARNE HALVORSEN (50s, sunburnt neck, silent) cuts bread with great deliberation.
7 A Arne's wife GUNHILD (50s, hair pinned too tight) refills a water glass that is already full.
8 A Across from them their daughter ASTRID (20s, city shoes, suitcase by the door) stares at her plate.
9 A Beside her sits her younger brother LEIF (15, braces, a bruise under one eye), and at the foot of the table, farmhand RAMON BEAUMONT-CRUZ (30s, borrowed shirt, hat in lap) looks anywhere but at the family.
10 A ¶ Arne finishes slicing.
11 A The knife stays in his hand.
12 D ARNE: Pass the beets.
13 A ¶ Astrid passes the beets.
14 A Her fingers shake.
15 A Gunhild reaches, touches her daughter's wrist, and pulls back as if burned.
16 D IVAR (too loudly): What's that?
17 D ARNE: Nothing, Pa.
18 D IVAR: What's she doing here?
19 D ARNE: Eating supper.
20 A ¶ Leif knocks over the salt.
* 21 A Nobody moves to clean it.
22 A Ramon sets his hat on the table, then takes it back, then folds it in his lap again.
23 D ASTRID: I'm only here for the night.
24 D ARNE: The night is long.
25 A ¶ He lays the knife on the cloth.
* 26 A It points directly at her.
27 A She looks at it.
28 A Then at him.
29 A Then she picks up her fork and, very carefully, begins to eat.

### SCENE s00043 | INT. CURLING CLUB LOUNGE, SECOND-FLOOR VIEWING GLASS - EVENING
Detected names (may be incomplete or contain aliases): HADLEY BRANTFORD, ABDULLAH FARRUKH, WINNIE, SOLBERG, ARCHIE, TWOMBLY, DISPATCH
* 1 A ¶ The rink below glows blue-white.
* 2 A Granite stones glide silently across ice.
* 3 A A scoreboard reads END 9 / TIED 4-4.
* 4 A The lounge is a warm cave of wood paneling, trophies, and a single fan whirring pointlessly.
5 A ¶ HADLEY BRANTFORD (40s, team skip, wool sweater, thermos of something stronger than tea) leans on the railing.
6 A Behind her, on a leather couch, her teammates ABDULLAH FARRUKH (30s, sweeper, ice-burned cheeks) and WINIFRED "WINNIE" SOLBERG (20s, rookie, ponytail, quivering) sit with their brooms across their laps.
7 A At the bar, a retired champion, ARCHIBALD "ARCHIE" TWOMBLY (70s, cardigan, commentator headset around his neck), polishes a glass.
8 D HADLEY: Winnie, your delivery.
9 D WINNIE: I know.
10 D HADLEY: You pulled it left in the eighth.
11 D WINNIE: I know.
12 D HADLEY: It's all right to know. I'd just like you to fix it.
13 D ABDULLAH: She's got it, Hadley.
14 D HADLEY: Does she?
15 D WINNIE: I've got it.
16 D HADLEY: Then say it with your whole face.
17 D WINNIE (breathing in): I have got it.
18 D HADLEY: Better.
19 D ARCHIE (from the bar): Back in '71, I threw the last stone with a broken wrist.
20 D ABDULLAH: We know, Archie.
21 D ARCHIE: Won, too.
22 D HADLEY (to the room): Everyone's very proud of Archie.
* 23 A ¶ A bell rings below.
* 24 A The teams are called to the ice.
25 A Winnie rises first.
26 A Abdullah follows, and Hadley screws the cap onto her thermos.
27 D ARCHIE (into his headset): This is Archie Twombly, live from the Glenmore Club. The last end is about to begin.
28 A ¶ Hadley, muttering to herself, does not turn around.
29 D HADLEY (muttering): Don't blow it, Brantford.
* 30 A ¶ A phone buzzes on the bar.
31 A Archie answers.
32 D DISPATCH [V.O.] (over phone): Archie? It's the broadcast truck. We've lost your feed. Is the skip ready?
33 D ARCHIE (into phone): She's ready. They're all ready.
34 A ¶ Hadley stops at the stairs.
35 A She looks down at the ice, pale and shining.
36 D HADLEY (quietly): Winnie. Whatever happens, you throw the last one.
37 D WINNIE: Me? Hadley, no.
38 D HADLEY: You. It's what you were born for.
39 D ABDULLAH (low, to Winnie): She's right.
40 D WINNIE: Okay. Okay.
41 A ¶ They file down the stairs.
42 A Archie watches through the glass as three small figures step onto the ice.
43 D DISPATCH [V.O.] (over phone): Archie, we're back. Go ahead.
44 D ARCHIE (into headset): And here they come.
45 A ¶ He lifts a glass to the window and sets it down untouched.

### SCENE s00044 | INT. FAMILY MINIVAN, DRIVE-THRU CAR WASH - DAY
Detected names (may be incomplete or contain aliases): LORETTA PEMBERTON-SHAH, HAROLD PEMBERTON, ZINNIA
* 1 A ¶ Soap foam crawls across the windshield.
* 2 A Brushes thump and swish.
* 3 A Inside, the world is a muffled aquarium.
4 A ¶ LORETTA PEMBERTON-SHAH (40s, driver, rings clacking against the wheel) keeps both hands at ten and two.
5 A In the passenger seat sits her father, HAROLD PEMBERTON (70s, flat cap, silent for forty miles).
6 A In the back, her daughter ZINNIA (14, earbuds in, knees up) watches the brushes beat the glass.
* 7 A ¶ The conveyor tugs the van forward.
* 8 A A giant mitt of foam slaps the roof.
9 D LORETTA: You didn't have to come.
10 D HAROLD: I wanted to.
11 D LORETTA: You hate car washes.
12 D HAROLD: I hate being left behind more.
13 A ¶ Zinnia pulls out one earbud.
14 D ZINNIA: Who left who?
15 A ¶ Loretta and Harold look at each other.
16 A Neither speaks.
* 17 A The brushes whump against the doors.
18 D LORETTA: ^Nobody left anybody.
19 D HAROLD: ^Nobody left anybody.
20 A ¶ Zinnia raises both eyebrows and puts the earbud back.
* 21 A ¶ The conveyor slows.
* 22 A A rinse arch sprays them white.
23 A In the sudden silence, Loretta lets go of the wheel for the first time all day and presses her fingers into her eyes.
24 A ¶ Harold reaches over and, with enormous awkwardness, pats her knee twice.
25 D HAROLD [CONT'D]: Your mother liked this part.
26 D LORETTA (muffled): The foam.
27 D HAROLD: The foam.
* 28 A ¶ The dryers blast.
29 A Zinnia leans forward between the seats and rests her chin on the headrest, close to both of them.
* 30 A Sunlight breaks through the last of the water.
31 A Loretta turns on the wipers.

### SCENE s00045 | INT. ORBITAL HYDROPONICS BAY, STATION KESTREL - CONTINUOUS
Detected names (may be incomplete or contain aliases): COMMANDER INGRID SORENSEN-AKINTOLA, FELIX OYELARAN-DUBOIS, MARISOL TRAN, UNIT FOUR, CASIMIR OKONKWO-BLYTHE, ORION
* 1 A ¶ Racks of lettuce under violet light.
* 2 A Pipes sweat.
* 3 A A hum like a slow pulse.
* 4 A The floor is a grid, the ceiling a curve.
5 A ¶ COMMANDER INGRID SORENSEN-AKINTOLA (50s, gray crop, crisp jumpsuit) walks the aisle with a tablet.
6 A Behind her trails botanist FELIX OYELARAN-DUBOIS (30s, goggles pushed up, hands green to the wrist).
7 A At a bench, engineer MARISOL TRAN (30s, ponytail, wrench in hand) tightens a valve.
8 A In the far corner, a robot technician, UNIT FOUR (a squat maintenance drone with a cheerful chirp), polishes a lens.
9 A The newest arrival is medic CASIMIR OKONKWO-BLYTHE (40s, trim beard), who leans in the hatchway.
10 D INGRID (to the bay): Status report, everyone. Now.
11 D FELIX: Lettuce is thriving.
12 D MARISOL: Valve's holding.
13 D UNIT FOUR: Beep. All systems nominal.
14 D CASIMIR: Medically, I'm bored.
15 D INGRID: That's what I like to hear.
* 16 A ¶ A low metallic thud echoes from the water tank behind the racks.
17 A All five turn.
18 D FELIX: That's not supposed to happen.
19 D MARISOL (muttering): Of course it is.
20 A ¶ Ingrid raises a hand.
* 21 A Silence.
* 22 A Another thud, closer.
* 23 A The lights dim a fraction.
24 A Unit Four chirps and rolls backward.
25 D INGRID: Felix, Marisol, check the tank. Casimir, with me.
26 D FELIX: ^Yes, Commander.
27 D MARISOL: ^Yes, Commander.
28 A ¶ They reply in unison and split.
29 A Felix and Marisol creep toward the tank.
30 A Ingrid and Casimir circle the racks opposite, tablet and medkit held like weapons.
31 A ¶ Behind the tank, a fat grey cat, ORION, sits atop a coil of hose, licking one paw.
32 A It meows.
* 33 A ¶ Everyone stops.
34 A Felix laughs first, a startled bark.
35 A Marisol sags against the rack.
36 A Ingrid pinches the bridge of her nose.
37 D INGRID [CONT'D] (to herself): Who smuggled a cat onto my station?
38 A ¶ Unit Four rolls up and nuzzles the cat's head with a mechanical arm.
39 D UNIT FOUR: Beep. New crew member detected.

### SCENE s00046 | EXT. SHELLED FARMHOUSE ROOF, ARDENNES - DAWN
Detected names (may be incomplete or contain aliases): GENE, BRODSKY, PRIVATE LOUIS TRUDEAU-PARK, SERGEANT MARGUERITE OYELOWO
* 1 A ¶ Snow dusts the broken tiles.
* 2 A Beyond the ridge, the thud of far guns.
3 A ¶ CORPORAL EUGENE "GENE" BRODSKY (20s, frozen mustache) crouches behind a chimney with binoculars.
4 A Beside him, PRIVATE LOUIS TRUDEAU-PARK (19, baby-faced, rifle hugged) shivers.
5 A A few yards away, SERGEANT MARGUERITE OYELOWO (30s, tough, her helmet dented) sits against a beam, tying a rag around her wrist.
6 A ¶ She tightens it with her teeth.
7 A He lowers the binoculars.
8 D GENE: Sarge, I count six.
9 D OYELOWO: Count again.
10 D GENE: Eight.
11 D OYELOWO: Better.
12 D TRUDEAU-PARK: Is it true what they say? About the Tigers?
13 D OYELOWO: Louis, eat your biscuit.
14 D TRUDEAU-PARK: I'm not hungry.
15 D OYELOWO: I didn't ask.
16 A ¶ He opens the biscuit tin.
17 A His fingers are blue.
18 A She reaches over and, without a word, tucks his scarf tighter.
19 D GENE: They're moving.
20 A ¶ She rises on one knee and takes the binoculars.
21 A Her jaw hardens.
22 D OYELOWO: Gene, wire the others. Louis, with me.
23 A ¶ They slide down the roof toward the ladder.

### SCENE s00047 | INT. OPERA HOUSE COAT CHECK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA DUMONT, STRANGER, LADY CORDELIA ASHBY-FORSYTHE, DELACROIX-WEST
* 1 A ¶ Racks of furs and top hats in the dim glow of a single bulb.
* 2 A A velvet curtain divides the room from the lobby, where an aria swells, muffled.
3 A ¶ SERAPHINA DUMONT (30s, ruby evening gown, a claim ticket pinched between gloved fingers) presses a hat check into the hand of the attendant, a skinny youth with oversized cufflinks.
4 A Behind her, a tall figure in a doorman's coat keeps watch at the curtain: this is the STRANGER, handsome, impassive, a scar through one brow.
5 A In the corner, an older woman in a fur stole examines the rack, LADY CORDELIA ASHBY-FORSYTHE (60s, diamonds heavy at her throat).
6 A ¶ The attendant fetches a coat.
7 A The stranger glances at Lady Cordelia, who has turned her back.
8 A Seraphina slips a small silver key into the coat's lining while the attendant shakes out the sleeve, and the stranger, noticing her motion, slides smoothly between them and the curtain.
9 D STRANGER: Madame, your coat.
10 D SERAPHINA: Thank you.
11 D LADY CORDELIA (without turning): Is that the Dumont girl?
12 D SERAPHINA: Lady Cordelia. How lovely.
13 A ¶ The attendant, flustered, drops a scarf.
14 A Seraphina and the stranger both bend to catch it and their hands collide.
15 A They look at each other, and in that look, a plan changes.
16 D LADY CORDELIA: I do hope you're not leaving before the second act.
17 D SERAPHINA: Never.
* 18 A ¶ The aria hits its high note.
19 A As the room shakes, the stranger lifts the stole from Lady Cordelia's shoulders and, in the same breath, passes it to Seraphina, who drapes it over her arm like a waiter's towel.
20 D LADY CORDELIA (turning): My stole!
21 D STRANGER (bowing): I believe it was mislaid, Madame.
22 A ¶ Seraphina hands it back with an apologetic smile, but one diamond is gone from the hem.
* 23 A The stranger's coat pocket rattles softly as he steps aside to let her pass.
24 A ¶ Seraphina swans through the curtain.
25 A The stranger, whom the attendant addresses as MR. DELACROIX-WEST, follows without a backward glance.

### SCENE s00048 | INT. ROOFTOP GREENHOUSE, LAUNDROMAT BUILDING - DUSK
Detected names (may be incomplete or contain aliases): MIRIAM STOLZ-AGYEMAN, WENDELL, TOVA, CASPIAN DRUMMOND
* 1 A ¶ Cracked glass panes.
* 2 A Tomato vines grown wild.
* 3 A A rusted fan turns without wind.
* 4 A Laundry lines sag with sheets, still dripping.
5 A ¶ MIRIAM STOLZ-AGYEMAN (60s, silver bun, gardening gloves) trims a vine.
6 A Her son WENDELL (30s, work boots, tie loosened) sits on an upturned bucket.
7 A His wife TOVA (30s, pregnant, hand on her belly) leans in the doorway.
8 A Their neighbor, old CASPIAN DRUMMOND (80s, oxygen tank, tiny sunhat), dozes in a lawn chair.
9 D MIRIAM: Landlord says we have until Friday.
10 D WENDELL: Mom.
11 D MIRIAM: Friday. That's four days.
12 D TOVA: We'll find another roof.
13 D MIRIAM: Another roof won't have these.
14 A ¶ She holds up a tomato, ripe and enormous.
15 A Wendell looks at it, then at his wife.
16 D CASPIAN (eyes closed): Beefsteak.
17 D MIRIAM: Cranberry heirloom.
18 D CASPIAN: Beefsteak.
19 A ¶ Miriam sighs and places the tomato in Tova's hand.
20 A Tova weighs it, smiling.
21 D TOVA: It's heavy.
22 D WENDELL: Mom, you can't carry this up the stairs forever.
23 D MIRIAM: Watch me.

### SCENE s00049 | EXT. CLIFFSIDE STAIRCASE OF THE WIND TEMPLE - DAWN
Detected names (may be incomplete or contain aliases): ALDRIC VANTERPOOL, THESSALY, SORREL IRONBARK, BARNABUS GLIMMERWICK
* 1 A ¶ Ten thousand steps, hewn into rock.
* 2 A Prayer flags snap.
* 3 A Clouds boil below.
4 A ¶ ALDRIC VANTERPOOL (30s, battered armor, scabbard empty) climbs, panting.
5 A Behind him, a hooded girl, THESSALY (teen, silver eyes, bare feet) hops step to step like a goat.
6 A Further down, burly SORREL IRONBARK (40s, axe on back, braided beard) hauls himself up, wheezing.
7 A Last comes the old wizard BARNABUS GLIMMERWICK (80s, crooked staff, patched robes), who rests on every third step.
8 D ALDRIC: Barnabus, hurry!
9 D BARNABUS: I am a wizard, not a mountain goat!
10 D THESSALY (skipping): I'm a mountain goat.
11 D SORREL (muttering): Gods, the stairs.
12 A ¶ Thessaly stops at a landing.
* 13 A Above, a stone gate, and between its pillars, a shimmering curtain of wind.
14 A She puts out her hand.
* 15 A It ripples.
16 D THESSALY: It's open.
17 D ALDRIC: Is it safe?
18 D THESSALY: No.
19 D SORREL: Good. I dislike safe.
20 A ¶ Barnabus catches up, bent double.
21 D BARNABUS: Aldric, listen. When we cross, the Wind Warden will ask each of us one question.
22 D ALDRIC: What question?
23 D BARNABUS: What we fear most.
24 D SORREL: ^That's easy.
25 D THESSALY: ^That's easy.
26 A ¶ They answer together, then glare at each other.
27 D ALDRIC: Sorrel?
28 D SORREL: Being forgotten.
29 D ALDRIC: Thessaly?
30 D THESSALY (small): Being found.
31 A ¶ Aldric draws a breath.
* 32 A Wind howls through the gate.
33 A He steps toward it, hand on the empty scabbard.
34 D ALDRIC: Then we go together.

### SCENE s00050 | INT. NIGHT BUS, MIDWEST HIGHWAY - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE ARMITAGE-NOLAN, DOM, ACHEBE, DRIVER
* 1 A ¶ Half-lit aisle.
* 2 A Rows of sleeping strangers.
* 3 A The engine drones like a long exhale.
* 4 A Rain streaks the windows.
5 A ¶ CELESTE ARMITAGE-NOLAN (30s, red scarf, paperback open on her knee) sits halfway back.
6 A Across the aisle, DOMINIC "DOM" ACHEBE (30s, rumpled suit, cold coffee) has been staring at her book for twenty minutes.
7 A He finally leans over.
8 D DOM: Is it any good?
9 D CELESTE: It's a murder mystery.
10 D DOM: Does everyone die?
11 D CELESTE: Mostly.
12 D DOM: Sounds restful.
13 A ¶ She laughs, quietly, despite herself.
* 14 A The bus hits a pothole and the whole cabin lurches.
* 15 A Her book slides to the floor.
16 A Dom retrieves it and hands it back.
17 A Their fingers touch.
18 D DRIVER [V.O.] (over intercom, crackling): Folks, we're pulling into Dubuque for a ten-minute break. Stretch your legs. Don't wander.
19 D CELESTE (to the cabin, dry): Don't wander, he says.
20 D DOM (to himself): Where would I go?
21 A ¶ He stands.
* 22 A The bus brakes hiss.
23 A Celeste rises too, and they collide in the narrow aisle.
24 D CELESTE: Sorry.
25 D DOM: No, I'm sorry.
26 D CELESTE: I'm Celeste.
27 D DOM: Dom.
28 A ¶ They shake hands, lingering.
29 D DRIVER [V.O.] (over intercom): Anybody traveling to Chicago, I'll be holding the bus for exactly ten minutes. Not eleven.
30 D DOM: Chicago.
31 D CELESTE: Me too.
32 A ¶ He looks at her, hope in his face.
33 D DOM: Then I guess we have eleven hours.
34 A ¶ She picks up her book.
35 D CELESTE: Then you'd better tell me who did it.

### SCENE s00051 | INT. AMATEUR THEATER GREEN ROOM - NIGHT
Detected names (may be incomplete or contain aliases): THEODORA, ALCOTT-WELLS, BILLIE, FAIRCHILD, ALOYSIUS PENDERGAST-MWANGI, GWENDOLINE POPE, ARCHIE, TREMAINE, RODERICK SPARROW-LUND
* 1 A ¶ Costumes hang in clouds.
* 2 A Powder, hairspray, a half-eaten sandwich.
* 3 A A speaker on the wall hisses with the thin sound of an audience settling.
4 A ¶ THEODORA "TEDDY" ALCOTT-WELLS (50s, tragedy mask on her forehead) stands at the mirror adjusting a Roman toga.
5 A Behind her, her understudy WILHELMINA "BILLIE" FAIRCHILD (20s, script clutched like a rosary) mouths lines to herself.
6 A Across the room, the director ALOYSIUS PENDERGAST-MWANGI (60s, cravat, velvet jacket) wrings his hands.
7 A At the costume rack, wardrobe mistress GWENDOLINE POPE (40s, pins in her mouth) hems a cape.
8 A Beside her sit the leading men: ARCHIBALD "ARCHIE" TREMAINE (30s, a laurel wreath), and RODERICK SPARROW-LUND (40s, a plastic sword).
9 D THEODORA: She's late. Where is she?
10 D ALOYSIUS: Who?
11 D THEODORA: Calpurnia. The lead.
12 D ALOYSIUS: She's in the lavatory.
13 D THEODORA: She's been in the lavatory for forty minutes.
14 D ARCHIE: Maybe she fell in.
15 D RODERICK: That's not funny, Archie.
16 D ARCHIE: It's a little funny.
17 D GWENDOLINE (through pins): Hold still, Teddy.
18 D THEODORA: I am still.
19 D BILLIE: Mr. Pendergast-Mwangi, I know her lines.
20 D ALOYSIUS: Darling, you are an understudy.
21 D BILLIE: I'm a good understudy.
22 D RODERICK: She really is, Aloysius.
23 D ARCHIE: She did the balcony scene in her sleep last week.
24 D ALOYSIUS: Because that is an excellent use of sleep.
* 25 A ¶ The speaker hisses louder: the house lights dim, applause rises.
26 D THEODORA: Aloysius, she's not coming.
27 D ALOYSIUS: She will.
28 D THEODORA: She will not.
29 D GWENDOLINE: She will if I go and get her.
30 A ¶ She spits the pins into her palm and marches out.
31 D ARCHIE: Billie, you're up.
32 D BILLIE: Me?
33 D RODERICK: Take the wreath.
34 A ¶ Archie lifts the wreath off his own head and lowers it onto hers.
35 A She stares into the mirror.
36 A Her hands stop shaking.
37 A Gwendoline sails back in, towing a tearful woman in a bathrobe.
38 D GWENDOLINE: Here she is.
39 A ¶ Billie and the woman in the bathrobe look at each other, and Billie hands back the wreath without a word.

### SCENE s00052 | INT. COURTROOM, MARITIME LAW DIVISION - DAY
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABELARD-OKONKWO, PERCIVAL GRIMSDYKE, BEATRIX NAKAMURA-FLYNN
* 1 A ¶ Dark oak.
* 2 A Brass fittings.
* 3 A A model of a container ship sits on the evidence table, its cranes frozen mid-lift.
* 4 A Salt-water stains the carpet near the jury box, a leak the clerk has long stopped noticing.
5 A ¶ JUDGE HORTENSE ABELARD-OKONKWO (60s, half-moon glasses, voice like creaking rope) presides.
6 A At the plaintiff's table stands attorney PERCIVAL GRIMSDYKE (50s, pinstripe, cane) with a thick binder.
7 A Across the aisle, defense counsel BEATRIX NAKAMURA-FLYNN (40s, severe bun, red pen) leans casually on her chair.
8 D JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, you may proceed with your closing.
9 D GRIMSDYKE: Thank you, Your Honor.
10 A ¶ He rises slowly, leaning on the cane.
11 A He addresses the empty jury box as though it were full.
12 D GRIMSDYKE [CONT'D] (to the gallery): Ladies and gentlemen, this case is about a ship. It is also about a promise.
13 D NAKAMURA-FLYNN (muttering): It's about a bill of lading.
14 D GRIMSDYKE: The Meridian Star sailed from Rotterdam with four thousand containers. Four thousand promises. Not one was delivered intact.
15 D JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, I hope you're going somewhere with this.
16 D GRIMSDYKE (to the Judge): Yes, Your Honor.
17 A ¶ He lifts the model ship from the table and turns it in his hands.
18 D GRIMSDYKE [CONT'D]: My client alleges that Ms. Nakamura-Flynn's client knowingly loaded cargo in violation of Article Nine.
19 D NAKAMURA-FLYNN: Objection. Speculation.
20 D JUDGE ABELARD-OKONKWO: Sustained. Rephrase.
21 D GRIMSDYKE: My client alleges that the knowledge was there.
22 D NAKAMURA-FLYNN (standing): Objection. Still speculation.
23 D JUDGE ABELARD-OKONKWO: Overruled. I'm curious.
24 A ¶ Nakamura-Flynn sits, tapping her pen.
25 D GRIMSDYKE (to himself): Finally.
26 A ¶ He sets the model down gently.
* 27 A It tips on its stand, a crane snaps off, and the sound ricochets around the silent room.
28 D GRIMSDYKE [CONT'D] (to the gallery): Four thousand promises, ladies and gentlemen. And a clerk who never fixed the leak.
29 D JUDGE ABELARD-OKONKWO: Mr. Grimsdyke.
30 D GRIMSDYKE: Your Honor?
31 D JUDGE ABELARD-OKONKWO: That's enough.
32 A ¶ He bows, retrieves his cane, and sits.
33 A Nakamura-Flynn rises, buttons her jacket, and walks calmly to the evidence table.
34 A She picks up the broken crane and weighs it in her palm.
35 D NAKAMURA-FLYNN (to the Judge): Your Honor, my learned friend has just proven my case.
36 D JUDGE ABELARD-OKONKWO: Do enlighten us.
37 D NAKAMURA-FLYNN (to the room): A crane cannot be loaded wrong. It can only be broken. And broken things get insured.
38 A ¶ Grimsdyke closes his eyes.
39 A The judge exhales through her nose, and removes her glasses.
40 D JUDGE ABELARD-OKONKWO: We will recess for lunch.

### SCENE s00053 | INT. OPEN-PLAN OFFICE, SYNERGY HOLDINGS - DAY
Detected names (may be incomplete or contain aliases): RAY, FENNIMORE-SALAZAR, DELPHINE OKAFOR-LUND, INTERN QUENTIN BOSCH
* 1 A ¶ Cubicles.
* 2 A Motivational posters.
* 3 A A broken ficus.
* 4 A A whiteboard reads: PIVOT TO JOY.
5 A ¶ RAYMOND "RAY" FENNIMORE-SALAZAR (40s, vice president of Vibes, a lanyard of lanyards) claps his hands.
6 A DELPHINE OKAFOR-LUND (30s, tired, double-fisted coffee) watches from her desk.
7 A Next to her sits INTERN QUENTIN BOSCH (20s, tie from a high school dance).
8 D RAY: Team! Quick sync.
9 D DELPHINE: It's four-fifty-nine.
10 D RAY: Perfect time for a sync!
11 D QUENTIN (whispering): He means a meeting.
12 D RAY: A circle-back! A deep dive! A moment of alignment!
13 D DELPHINE: It's a Friday.
14 D RAY: Friday is the new Monday.
15 A ¶ He draws a giant circle on the whiteboard, then another, then a third.
16 A Delphine and Quentin stare, appalled.
17 D RAY [CONT'D]: Who can tell me what this means?
18 D QUENTIN: ^Three circles.
19 D DELPHINE: ^Three circles.
20 A ¶ They say it together.
21 A Ray points at them both, delighted.
22 D RAY: Exactly! The Triple Loop!
23 D DELPHINE: Ray.
24 D RAY: Yes?
25 D DELPHINE: I'm going home.
26 D RAY (crestfallen): Is that a no on the loop?
27 A ¶ She gathers her bag.
28 A Quentin, loyal, stays seated.
29 D QUENTIN: I like the loop, Ray.
30 A ¶ Ray beams.
31 A Delphine pauses in the doorway.
32 D DELPHINE: Quentin. Run.

### SCENE s00054 | EXT. DUST-CHOKED TRADING POST, HIGH PLAINS - AFTERNOON
Detected names (may be incomplete or contain aliases): SALT, NAILS, SPARROW, CROWFOOT, POSTMISTRESS CLEMENTINE VANDERMEER, SHERIFF AUGUSTINE BELL, WILLET FAIRBANKS
* 1 A ¶ A sagging porch.
* 2 A A horse trough green with scum.
* 3 A Wind pushes tumbleweeds past hitching posts that have not held a horse in weeks.
* 4 A A hand-painted sign reads: SALT - NAILS - SOULS.
5 A ¶ ELIJAH "SPARROW" CROWFOOT (30s, braided hair, buckskin vest) leans on a porch rail, whittling.
6 A Inside the doorway sits POSTMISTRESS CLEMENTINE VANDERMEER (60s, gingham, shotgun across her lap) with a ledger.
7 A A rider approaches: SHERIFF AUGUSTINE BELL (40s, moustache, sweat-stained hat), trailed by a young deputy, WILLET FAIRBANKS (18, gun belt too big for his hips).
8 A ¶ Bell dismounts and strides to the porch.
9 A Willet slides off his horse, trips over a stirrup, rights himself, and follows, one hand on his holster.
10 D BELL: Sparrow.
11 D SPARROW: Sheriff.
12 D BELL: You were seen near the Henderson place.
13 D SPARROW: Lot of people were near the Henderson place.
14 D CLEMENTINE (from the doorway): Gus, that boy was at my counter all morning.
15 D BELL: Was he?
16 D CLEMENTINE: Bought nails.
17 D BELL: How many?
18 D CLEMENTINE: Enough for a coffin.
* 19 A ¶ A cold quiet.
20 A Sparrow continues to whittle.
21 A Willet licks his lips.
22 D WILLET: Sheriff, should I--
23 D BELL: No.
24 A ¶ Sparrow finishes the carving and holds it up: a tiny wooden bird.
25 A He sets it on the rail between them.
26 D SPARROW: I didn't kill him.
27 D BELL: No one said you did.
28 D SPARROW: Then why's the boy sweating?
29 A ¶ Everyone looks at Willet.
30 A He blanches.
31 D WILLET: It's hot.
32 D CLEMENTINE: ^It's ninety degrees.
33 D BELL: ^It's ninety degrees.
34 A ¶ They speak together, and Bell shoots her a look.
35 A She shrugs, rocks the shotgun on her lap, and says nothing more.
36 A ¶ Sparrow slides the bird toward Willet.
37 A The boy stares at it, shaking, and as Bell turns to him, the wind drops.
* 38 A Even the tumbleweeds stop rolling.

### SCENE s00055 | INT. UNDERGROUND PARKING STRUCTURE, LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IGNACIO PALAZZO-MENSAH, COLLETTE ARMSTRONG-DUBOIS, INFORMANT, BRIDGET QUILLFEATHER, DETECTIVE MARCUS OYELARAN-STROUD, SOPHRONIA HALLIWELL
* 1 A ¶ Concrete columns.
* 2 A Dripping pipes.
* 3 A Fluorescent tubes that buzz and flicker.
* 4 A Oil stains like ink blots.
* 5 A At the far end, a stairwell door hangs ajar.
6 A ¶ DETECTIVE IGNACIO PALAZZO-MENSAH (40s, trench coat, a limp, a gun held low) slips between two parked sedans.
7 A Behind him, FBI analyst COLLETTE ARMSTRONG-DUBOIS (30s, ballistic vest over a cardigan) clutches a laptop.
8 A In the shadows, a figure in a gray hoodie crouches: the INFORMANT, BRIDGET QUILLFEATHER (20s, nervous eyes, pale as paper).
9 A A ways off, DETECTIVE MARCUS OYELARAN-STROUD (50s, radio at his collar) circles the perimeter, and in a car at the exit ramp, driver SOPHRONIA HALLIWELL (30s, headset, steady) watches the mirror.
10 D IGNACIO (whispering): Bridget, where's the package?
11 D BRIDGET: Level three. In the van.
12 D COLLETTE: Level three isn't on the schematic.
13 D BRIDGET: It's not on anything.
14 D MARCUS (into radio): All units, hold positions.
* 15 A ¶ A steel door clangs somewhere.
16 A Everyone freezes.
* 17 A A distant engine idles.
* 18 A Headlights sweep across the pillars and swing away.
19 D IGNACIO (quietly, to himself): Easy.
20 A ¶ Collette types something silent.
21 A Bridget wipes her sweaty palms on her knees.
22 D SOPHRONIA (into headset): Exit ramp clear. For now.
23 D BRIDGET: They'll see the lights.
24 D IGNACIO: They already know we're here.
25 D BRIDGET: Then why--
* 26 A ¶ A gunshot cracks across the garage.
* 27 A A windshield bursts.
28 A Ignacio shoves Bridget flat.
29 A Collette dives behind a column, laptop sliding across the concrete.
30 A Marcus sprints toward the sound.
31 A Sophronia guns the engine and the car leaps forward.
* 32 A ¶ Another shot.
* 33 A Another.
* 34 A The echoes pile on each other until the whole structure rings like a struck bell.
35 D MARCUS (shouting): Contact! North ramp!
36 D IGNACIO (to Collette): Get her out!
37 D COLLETTE: What about you?
38 D IGNACIO: Go!
39 A ¶ Collette grabs Bridget's hand and they run for the stairwell, ducking low between sedans.
40 A Ignacio rises, fires twice, and ducks.
41 D SOPHRONIA (over radio): Marcus, Ignacio, I'm coming around.
42 A ¶ Her car shrieks around a column and slams to a stop in front of Collette and Bridget.
* 43 A The back door flies open.
44 D SOPHRONIA [CONT'D] (through the window): Get in!
45 A ¶ They pile into the back seat.
46 A Ignacio sprints, vaults the hood, and drops into the front.
47 A Marcus dives in last.
* 48 A The car lurches forward as bullets rake the trunk.
49 D MARCUS: Drive!
50 D SOPHRONIA: I am driving!
* 51 A ¶ The car roars up the ramp and out into the rain.

### SCENE s00056 | INT. FUNERAL PARLOR BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): LARRY, PIETRZAK, VERONICA CHEN-ADEYEMI, MILO, TOBIAS WREN, CALLER
* 1 A ¶ Wood paneling.
* 2 A Lilies in a vase.
* 3 A A desk lamp turned low.
* 4 A A phone sits on the blotter like a sleeping animal.
5 A ¶ LAWRENCE "LARRY" PIETRZAK (50s, undertaker's black suit, tie loosened) counts bills at the desk.
6 A In the armchair sits his partner, VERONICA CHEN-ADEYEMI (40s, perfect posture, gloves on).
7 A On the sofa, a boy, MILO (teen, school blazer), turns an unlit candle over in his hands.
8 A At the window stands a figure, silent, looking out at the parking lot: TOBIAS WREN (30s, long coat).
* 9 A ¶ The phone rings.
10 A Veronica lifts her eyes.
11 A Larry stops counting.
12 D LARRY: Leave it.
13 D VERONICA: It's the fourth time.
14 A ¶ Larry's thumb works the edge of the bills.
15 A Milo sets the candle down.
16 D MILO: Should I--
17 D LARRY: No.
* 18 A ¶ The phone rings.
* 19 A Rings.
* 20 A Rings.
21 A Wren turns from the window, watches the receiver, and picks it up without speaking.
22 A He listens.
* 23 A A thin voice crackles through.
24 D CALLER [V.O.] (over phone): Is the arrangement still on for tomorrow?
25 A ¶ Wren looks at Larry.
26 A Larry nods once.
27 D WREN (into phone): It is.
28 A ¶ He hangs up.
29 A Veronica unfolds her gloved hands, and, for the first time, Larry meets Milo's eyes.

### SCENE s00057 | EXT. ICE-LOCKED RIVER BARGE, ARCTIC - DAWN
Detected names (may be incomplete or contain aliases): ASTRID BJORNSDOTTIR-NKEMELU, DMITRI KOWALCZYK-ROSS, TOMAS, ISABELLA VERRIDGE-LIM, OKSANA PETRENKO-ABARA
* 1 A ¶ A flat iron barge, locked in white.
* 2 A Its hull creaks.
* 3 A Wind blows ice-dust sideways.
* 4 A A tarp stretched between two crates makes a miserable shelter.
5 A ¶ Five figures huddle inside it.
6 A ASTRID BJORNSDOTTIR-NKEMELU (40s, fur hood, frost-rimmed eyebrows) pours the last of the tea into a tin cup.
7 A Next to her, her brother-in-law DMITRI KOWALCZYK-ROSS (50s, giant gloves) feeds a dying camp stove.
8 A On the far side, a young couple, TOMAS and ISABELLA VERRIDGE-LIM (20s each, tangled together under one blanket), whisper.
9 A At the tarp's mouth, their guide, OKSANA PETRENKO-ABARA (30s, rifle slung, compass in hand), squints at the horizon.
10 D ASTRID: How long?
11 D OKSANA: The ice should break by noon.
12 D DMITRI: It's been noon for three days.
13 D TOMAS (to Isabella): You okay?
14 D ISABELLA: I'm fine.
15 D TOMAS: You're shivering.
16 D ISABELLA: So are you.
17 D ASTRID: Dmitri, give her your gloves.
18 D DMITRI: She has gloves.
19 D ASTRID: Not good ones.
20 A ¶ Dmitri strips off the enormous gloves and tosses them to Isabella, who catches them against her chest.
21 D ISABELLA: Thank you.
22 D DMITRI: Don't mention it.
23 D OKSANA (from the tarp mouth): Quiet. All of you.
* 24 A ¶ A deep crack booms from under the barge.
* 25 A The whole deck shudders.
26 A Dmitri curses.
27 A Astrid grabs the tin cup before it spills, but Tomas and Isabella, tangled in the blanket, roll toward the gap and Oksana lunges to haul them back from the edge.
28 D OKSANA [CONT'D]: Back! Away from the rail!
29 D TOMAS: What is it?
30 D OKSANA: The river's moving.
31 D DMITRI: Moving? The river's frozen.
32 D OKSANA: Not anymore.
* 33 A ¶ The barge tilts, a slow, enormous lean.
34 A They scramble over crates.
* 35 A Ice groans like a living thing.
* 36 A Water, black and glassy, opens in a long line beside the hull.
37 D ASTRID (shouting): Everyone to the stern!
38 A ¶ They stumble across the tilting deck, Dmitri carrying the stove, Tomas pulling Isabella, Oksana covering the rear.
39 A Astrid reaches the stern first and throws a rope to the ice beyond.
* 40 A ¶ Then the barge rights itself with a thunderous slap, and the lean is gone.
* 41 A Ice-dust swirls.
* 42 A The river, free now, carries them forward.
43 D DMITRI (laughing, breathless): Noon.
44 D OKSANA: Told you.

### SCENE s00058 | INT. COMPANY BREAK ROOM, INNOVATEX CORP - DAY
Detected names (may be incomplete or contain aliases): GLORIA BANKOLE-VANCE, COLIN DRUMMOND-PARK, SHANTELLE OKONJO-REID
* 1 A ¶ Beige walls.
* 2 A A coffee machine with a handwritten sign: DO NOT USE.
* 3 A A bulletin board layered with expired memos.
* 4 A The microwave hums.
* 5 A A mini fridge stickered with passive-aggressive notes.
6 A ¶ GLORIA BANKOLE-VANCE (50s, shoulder pads, mug reading WORLD'S OKAYEST BOSS) refills her mug from a thermos she brought herself.
7 A Across the table sits COLIN DRUMMOND-PARK (20s, new hire, ironed shirt).
8 A At the sink, SHANTELLE OKONJO-REID (30s, hoodie, headphones) scrubs a mug that isn't hers.
9 D GLORIA: Colin, welcome to the family.
10 D COLIN: Thank you, Gloria.
11 D GLORIA: We do synergy here.
12 D COLIN: Great.
13 D GLORIA: We also do Fridays.
14 D COLIN: Fridays?
15 D SHANTELLE (over her shoulder): She means cake.
16 D GLORIA: I mean team-building.
17 D SHANTELLE: It's cake.
18 A ¶ Gloria beams.
19 A Colin tries to look as though he understands.

### SCENE s00059 | INT. PET STORE, REPTILE SECTION - DAY
Detected names (may be incomplete or contain aliases): BARN, OKAFOR-LINDGREN, JUNIPER VASQUEZ-ABARA, EZEKIEL PRUITT-HALE, DESDEMONA KILLINGSWORTH, TIBBY, MOREAU-WELLS
* 1 A ¶ Heat lamps.
* 2 A Terrariums.
* 3 A A sign: PLEASE DO NOT KNOCK ON GLASS.
* 4 A The air smells of mealworms.
5 A ¶ BARNABY "BARN" OKAFOR-LINDGREN (30s, apron, name tag crooked) restocks crickets.
6 A His coworker JUNIPER VASQUEZ-ABARA (20s, pink hair, bandaged thumb) leans on the counter.
7 A A customer, MR. EZEKIEL PRUITT-HALE (70s, tweed cap, binocular case), peers into a tank.
8 A At the back door, the manager, DESDEMONA KILLINGSWORTH (40s, clipboard, cheerful menace), rattles keys.
9 A And behind the register, a nervous newcomer, TIBERIUS "TIBBY" MOREAU-WELLS (teen, first shift, sweating through his shirt), tries to look busy.
10 D BARN: Juniper, where's the iguana?
11 D JUNIPER: In his tank.
12 D BARN: Which tank?
13 D JUNIPER: The big one.
14 D BARN: That one's empty.
15 D JUNIPER (slowly): Oh.
16 A ¶ They look at each other.
17 A Both turn toward Mr. Pruitt-Hale, who is still peering into the empty tank.
18 D EZEKIEL: Fascinating. Where's the lizard?
19 D TIBBY (very high): He's resting!
20 D DESDEMONA: Tibby, don't lie to the customer.
21 D TIBBY: I'm not lying! I'm hopeful!
22 D EZEKIEL: Young man, I've bought four geckos from this store. I know when a tank is vacant.
23 D BARN: Sir, it's a rare species.
24 D EZEKIEL: Camouflaged?
25 D JUNIPER: Extremely.
* 26 A ¶ A thump from the ceiling.
27 A All five look up.
* 28 A A long green tail hangs from a ceiling tile, swaying gently.
29 A Tibby faints into the cricket display.
30 A Desdemona sighs and heads for a ladder.

### SCENE s00060 | INT. SLEEPING CAR, NIGHT TRAIN - NIGHT
Detected names (may be incomplete or contain aliases): BARNABAS HOLT, LEOPOLD VANCE, ISADORA FEYERABEND
* 1 A ¶ Brass lamps swing with the rails.
* 2 A Rain beads the window.
* 3 A On the table between the seats, a chess set mid-game and an untouched bottle of wine.
4 A ¶ BARNABAS HOLT (50s, silver beard) leans back with his hands folded.
5 A Opposite him sits LEOPOLD VANCE (50s, silver moustache), staring at the board.
6 A At the door, the conductor, ISADORA FEYERABEND (30s, brass buttons), has just finished punching tickets.
7 D BARNABAS: Your move.
8 D LEOPOLD: I know.
9 D ISADORA: Gentlemen, we reach Vienna at dawn.
10 D LEOPOLD: Plenty of time to lose.
11 D BARNABAS: Time for you to lose.
12 D ISADORA: You've both been playing since Prague.
13 D LEOPOLD: He cheats.
14 D BARNABAS: He sulks.
15 D ISADORA: One of you left this on the floor.
16 A ¶ She holds up a small brass key.
17 A Barnabas reaches for it.
18 A Leopold reaches too.
19 A They both stop, hands in the air.
20 A He looks at the key.
21 A He looks at the other man.
22 A He knows.
23 D LEOPOLD: That opens the trunk in the baggage car.
24 D BARNABAS: Does it?
25 D ISADORA: It does. And the trunk is empty.
26 A ¶ She closes the door behind her.
* 27 A The train rattles on through the dark.

### SCENE s00061 | EXT. TRENCH LINE, RAIN-SOAKED FIELD - NIGHT
Detected names (may be incomplete or contain aliases): PENROSE, SERGEANT BAPTISTE ONWUACHI, PRIVATE ELIAS FJELDSTAD-MORENO
* 1 A ¶ A sheet of rain.
* 2 A Barbed wire sags in the flare light.
* 3 A Mud sucks at every boot.
4 A ¶ LIEUTENANT ARCHIBALD "ARCHIE" PENROSE (30s, helmet strap loose, flashlight taped) crouches with a map.
5 A SERGEANT BAPTISTE ONWUACHI (40s, thick forearms, helmet dented) checks his rifle.
6 A PRIVATE ELIAS FJELDSTAD-MORENO (19, trembling, bayonet fixed) hugs the trench wall.
7 D PENROSE: Sergeant, status?
8 D ONWUACHI: Half the men are asleep.
9 D FJELDSTAD-MORENO: I'm not asleep.
10 D ONWUACHI: Nobody said you were.
11 D PENROSE: Elias, keep your head down.
12 D FJELDSTAD-MORENO: Yes sir.
13 D ONWUACHI (to the trench): Fix bayonets! On my word!
* 14 A ¶ A whistle shrieks.
15 A Penrose and Onwuachi look up as one.
16 A Elias presses his forehead to the mud.
17 D PENROSE (muttering): Dear God.
18 D ONWUACHI: Now!
19 A ¶ The whole trench erupts.
20 A Men climb out of the earth.
21 A Elias stays frozen until Onwuachi hauls him up by the collar and drags him into the dark.

### SCENE s00062 | INT. ROLLER DERBY RINK, LOCKER ROOM - EVENING
Detected names (may be incomplete or contain aliases): BRUISER, OKONKWO-LARSSON, JOSEFINA ABERNATHY-SILVA, HORTY, BELLAMY-OKORO
* 1 A ¶ Rows of dented lockers.
* 2 A Skates on benches like sleeping animals.
* 3 A A banner on the wall: THE IRON MAIDENS OF MERIDIAN.
* 4 A The air smells of liniment and nerves.
5 A ¶ BRYNHILDE "BRUISER" OKONKWO-LARSSON (30s, shoulders like a door, face paint half-applied) laces her skates with ferocious focus.
6 A Beside her, rookie JOSEFINA ABERNATHY-SILVA (19, stiff new helmet, wide eyes) copies every move.
7 A Across the room, coach HORTENSIA "HORTY" BELLAMY-OKORO (50s, whistle, tracksuit) leans against a locker with a clipboard.
8 D HORTY: Ladies. Last bout of the season.
9 D BRUISER: We know.
10 D HORTY: Josefina, this is your first jam.
11 D JOSEFINA: I know.
12 D HORTY: You'll be nervous.
13 D JOSEFINA: I'm not nervous.
14 D BRUISER: She's nervous.
15 D HORTY: Good. Nerves keep you alive.
16 A ¶ She blows the whistle once, softly, as a kind of benediction.
17 A Bruiser stands, rolling her neck.
18 D BRUISER: Come on, kid. Stay on my hip.
19 D JOSEFINA: Where's your hip?
20 D BRUISER: Wherever it is when you need it.
21 A ¶ They stack fists.
* 22 A The crowd roars outside.
* 23 A A door bangs.
24 A The three women walk out together into a tunnel of light.

### SCENE s00063 | EXT. FLOATING MARKET ON THE SKY-LAKE OF AELDRATH - DAWN
Detected names (may be incomplete or contain aliases): THESSALONIKE VANTERPOOL-ORUNMILA, CORNELIUS ABRAHAM-WYNNE, MORWENNA
* 1 A ¶ Boats hang in the air on ropes of braided cloud.
2 A Merchants shout over a sea of drifting lanterns.
* 3 A Gulls the color of silver coins wheel overhead.
* 4 A Far below, a moonlit ocean.
* 5 A ¶ A skiff drifts toward the market's edge.
6 A At its tiller sits THESSALONIKE VANTERPOOL-ORUNMILA (30s, battered leather coat, a cutlass at her belt).
7 A Behind her, the apprentice-mage CORNELIUS ABRAHAM-WYNNE (19, ink-stained fingers, spellbook hugged).
8 A Between them, hooded and silent, a cloaked woman waits: this is MORWENNA (age unknown, eyes like twin moons).
9 D THESSALONIKE: Hold on.
10 D CORNELIUS: To what?
11 D THESSALONIKE: Anything.
* 12 A ¶ The skiff slams into the dock.
13 A Cornelius pitches forward and Morwenna catches him by the collar without opening her eyes.
14 D MORWENNA: Careful, child.
15 D CORNELIUS: I'm trying.
16 D MORWENNA: Try harder.
17 D THESSALONIKE (tying off the boat): We have until noon. Cornelius, you find the spice merchant. Morwenna, the cloud-weaver. I'll find the passage.
18 D CORNELIUS: What passage?
19 D THESSALONIKE: The one that isn't on the map.
20 D MORWENNA: It never is.
21 A ¶ They split.
22 A Thessalonike weaves through the crowd, hand on her cutlass.
23 A Cornelius ducks under a banner of dried starfish.
24 A Morwenna drifts like smoke, unhurried, and stalls fall quiet as she passes.
25 A ¶ At the spice stall, Cornelius meets a vendor with ten arms.
26 A Everything he says comes out in a nervous rush.
27 D CORNELIUS [CONT'D] (to the vendor): Er, hello, I need saffron. The sky kind. Not the ground kind.
28 A ¶ At the weavers' stall, Morwenna lifts a veil of mist, and the old woman behind it kneels.
29 D MORWENNA (quietly): Don't. I am not what I was.
30 A ¶ Thessalonike, meanwhile, finds an iron door half-sunk in a wall of cloud.
31 A She puts her palm on it.
* 32 A It hums.
33 A She grins.
34 D THESSALONIKE (to herself): There you are.
35 A ¶ Behind her, Cornelius and Morwenna arrive, panting, arms full of paper-wrapped parcels.
36 D CORNELIUS: Got the saffron!
37 D MORWENNA: Got the weaving.
38 D THESSALONIKE: Got the door.
39 A ¶ They stare at it.
* 40 A The hum swells to a chord, and the iron door swings open on a stair of falling stars.
41 D CORNELIUS: Is that safe?
42 D MORWENNA: Nothing is.
43 A ¶ Thessalonike steps through first.
44 A Cornelius follows.
45 A Morwenna pauses, glances back over the market, and whispers to the bright, indifferent sky.
46 D MORWENNA [CONT'D]: Forgive us.

### SCENE s00064 | INT. SAFE-DEPOSIT VAULT, PRIVATE BANK - NIGHT
Detected names (may be incomplete or contain aliases): GIDEON ASHWORTH-DEMBELE, LUCRETIA FONTAINE-OKAFOR
* 1 A ¶ Rows of brass boxes under a vaulted ceiling.
* 2 A A single green banker's lamp.
* 3 A The air is cold and smells of old metal.
4 A ¶ GIDEON ASHWORTH-DEMBELE (50s, impeccable suit, silver cufflinks) stands before an open drawer, fingers curled around a velvet pouch.
5 A Facing him, in the narrow aisle, LUCRETIA FONTAINE-OKAFOR (40s, black gloves, revolver steady) blocks his exit.
6 A ¶ Gideon turns.
7 A Lucretia does not lower the gun.
8 D GIDEON: You're early.
9 D LUCRETIA: You're late.
10 A ¶ Gideon smiles and lifts the pouch.
11 A Lucretia's eyes drop to it.
12 D GIDEON: ^It's not what you think.
13 D LUCRETIA: ^It's exactly what I think.
14 A ¶ They speak together, flat, certain.
* 15 A A drip falls somewhere in the dark.
16 D GIDEON: Lucretia. Put it down.
17 D LUCRETIA: You first.
18 A ¶ He opens his fingers.
* 19 A The pouch lands on the marble with a soft chink.
20 A Lucretia exhales, almost relieved, and kicks it toward the wall.
21 A ¶ The gun doesn't waver.

### SCENE s00065 | INT. GRAND HOTEL LOBBY - DAY
Detected names (may be incomplete or contain aliases): CORNY, BELLWEATHER, PRUDENCE, LEOPOLDINA ARCHAMBAULT-DIOP, CALLER
* 1 A ¶ Marble pillars.
* 2 A A revolving door that sighs with each turn.
* 3 A A brass bell on the concierge desk.
4 A A poodle in a rhinestone collar naps under a velvet bench.
5 A ¶ CORNELIUS "CORNY" BELLWEATHER (50s, three-piece suit, monocle) sits in a chair and pretends to read a newspaper.
6 A Across from him on a sofa, his wife PRUDENCE (40s, enormous hat, fan) watches him with mounting suspicion.
7 A At the desk, the concierge LEOPOLDINA ARCHAMBAULT-DIOP (30s, immaculate, bored) files her nails.
8 A ¶ She shifts.
9 A He shifts.
10 A The poodle yawns.
11 D PRUDENCE: Corny, you're holding the paper upside down.
12 D CORNY: Am I?
13 D PRUDENCE: The pictures are standing on their heads.
14 D CORNY: Modern art.
15 A ¶ She snaps her fan.
16 A A telephone on the desk rings, and Leopoldina answers in a voice like warm butter.
17 D LEOPOLDINA: Front desk. Yes, Mr. Bellweather is in the lobby. No, he is not expecting a call.
18 A ¶ Corny rises so quickly the newspaper flies.
19 A He crosses the lobby in three long strides and tries to take the phone from her hand.
20 D LEOPOLDINA [CONT'D] (covering the receiver): Sir, it's for the hotel.
21 D CORNY (whispering): It's for me.
22 D PRUDENCE (from the sofa): Corny, who is it?
23 D CORNY: Nobody! Wrong number!
24 D CALLER [V.O.] (over phone, faint): Corny? It's Fifi. Are you coming up?
* 25 A ¶ Silence.
26 A Leopoldina's eyebrow rises half an inch.
27 A Prudence stands.
28 A The poodle wakes.
29 D PRUDENCE: Corny.
30 D CORNY: She's the dog groomer.
31 D PRUDENCE: At the Grand Hotel.
32 D CORNY: They have a salon.
33 D PRUDENCE: They do not.
34 D LEOPOLDINA: We do not.
35 A ¶ Corny, defeated, takes the receiver.
36 A He puts it to his ear and listens a long moment, then speaks.
37 D CORNY (into phone): I'll be right up. Tell her to bring the poodle.
38 A ¶ Prudence follows his gaze to the dog under the bench.
39 A It wags its tail.
40 A Leopoldina hangs up and, with perfect composure, lifts the brass bell and rings it once.

### SCENE s00066 | INT. HOSPITAL ROOFTOP HELIPAD - DAWN
Detected names (may be incomplete or contain aliases): NATHANIEL OYELOWO-STRAND, NURSE PHILOMENA BRANDT-ADEYEMI, GASPAR LINDQVIST-MBEKI, DISPATCH
* 1 A ¶ Concrete, windsock, a single orange cone.
* 2 A The city spreads below in blue haze.
* 3 A A rusted door clatters open.
4 A ¶ DR. NATHANIEL OYELOWO-STRAND (40s, scrubs, blood on one cuff) steps out, breathing.
5 A Behind him comes NURSE PHILOMENA BRANDT-ADEYEMI (30s, braids, hospital badge swinging).
6 A Nearby, an orderly, GASPAR LINDQVIST-MBEKI (20s, lanky, mop bucket), smokes against the rail.
7 D NATHANIEL: Third night in a row.
8 D PHILOMENA: You keep coming up here.
9 D NATHANIEL: Nobody follows me.
10 D PHILOMENA: I followed you.
11 D GASPAR: So did I. I was here first.
* 12 A ¶ The radio on Philomena's belt crackles.
13 D DISPATCH [V.O.] (over radio): Trauma Two, inbound helicopter, ETA four minutes. Pediatric, severe burns.
14 A ¶ Nathaniel straightens.
15 A Philomena grabs the radio.
16 D PHILOMENA (into radio): Copy. Pad is clear.
17 A ¶ She and Nathaniel look at Gaspar, who drops his cigarette and stamps it out.
* 18 A The windsock snaps taut.
19 D NATHANIEL: Gaspar, the cone.
20 D GASPAR: On it.
21 A ¶ He drags the orange cone aside.
* 22 A In the distance, a speck grows into the rising hammer of rotors.

### SCENE s00067 | INT. REVOLVING RESTAURANT ATOP A SKYSCRAPER - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE KORMANN-DELACROIX, SALOME BRANDT-OYELARAN, WENDELIN ASHFORD-PETROV
* 1 A ¶ The city turns slowly beyond a wall of glass.
* 2 A White tablecloths, low candles.
* 3 A A string quartet plays something sorrowful.
* 4 A Every table is full, except one.
5 A ¶ At that table, three people sit in a tight triangle: AUGUSTINE KORMANN-DELACROIX (50s, charcoal suit, hands always moving), SALOME BRANDT-OYELARAN (40s, emerald dress, cool eyes), and WENDELIN ASHFORD-PETROV (30s, black turtleneck, a briefcase handcuffed to his wrist).
6 D AUGUSTINE: Salome, you look radiant.
7 D SALOME: I look hungry.
8 D WENDELIN: The soup is good.
9 D SALOME: Wendelin, it's soup.
10 D WENDELIN: It's very good soup.
11 D AUGUSTINE (with a laugh): Shall we order?
12 D SALOME: We shall not.
13 A ¶ She sets down her fork.
14 A He lays his napkin across his knee.
* 15 A The restaurant turns.
* 16 A A new skyline slides into view.
17 D AUGUSTINE: You know why I asked you here.
18 D SALOME: I have a theory.
19 D WENDELIN (clearing his throat): She has several.
20 D SALOME: I have one.
21 D AUGUSTINE: Then say it.
22 D SALOME: You want what's in the case.
23 A ¶ Wendelin's hand tightens on the handle.
24 A Augustine lets the quartet play four more bars.
25 D AUGUSTINE: I want you to open it.
26 D SALOME: I don't have the key.
27 D AUGUSTINE: You do.
28 D SALOME: I don't.
29 D WENDELIN (quietly, to Augustine): She doesn't.
30 D AUGUSTINE: Then who does?
* 31 A ¶ A beat.
32 A The restaurant turns again, and the three of them watch the city pass beneath them, glittering and indifferent.
33 A Salome lifts her water glass.
34 D SALOME: Order the soup, Augustine.

### SCENE s00068 | EXT. DRIFTING LIFE RAFT, OPEN OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN MAGDALENA OYELARAN-STROUD, DESMOND PRIESTLEY-ADEKUNLE, ROSALIND FAIRBANKS-NAKAMURA, TIBBY, OKONJO
* 1 A ¶ Flat grey sea.
* 2 A A pale sun.
* 3 A The raft rocks gently on swells too slow to feel.
4 A ¶ Four survivors sit in the orange hull.
5 A CAPTAIN MAGDALENA OYELARAN-STROUD (50s, sunburnt scalp, torn epaulettes) holds a tin cup of rainwater with both hands.
6 A Beside her, first officer DESMOND PRIESTLEY-ADEKUNLE (40s, a bandaged forearm) scans the horizon with a cracked sextant.
7 A In the middle, a passenger, ROSALIND FAIRBANKS-NAKAMURA (30s, gold watch, salt-white hair), whispers to a drowned photograph.
8 A At the stern, deckhand TIBERIUS "TIBBY" OKONJO (20s, shirtless, ribs showing) trails a fishing line in the water.
9 D MAGDALENA: Divide it.
10 D DESMOND: It's a thimble each.
11 D MAGDALENA: Then divide a thimble.
12 A ¶ She hands him the cup.
13 A He drinks his share and passes it to Rosalind, who stares at it without lifting it.
14 A Tibby doesn't look up from the line.
15 D TIBBY: Got something.
16 D DESMOND: Don't pull.
17 D TIBBY: It's pulling me.
* 18 A ¶ The line goes taut.
19 A Tibby braces, boots on the rubber hull, then leans back with a roar.
20 A Magdalena grabs his belt, Desmond hooks an arm around her waist, and Rosalind, still clutching the photograph, tumbles into a heap with all three as a flash of silver hurls itself over the side.
21 A ¶ They tangle.
* 22 A A gleaming fish thrashes on the floor of the raft, spraying water on every face.
23 A Magdalena pins it, Tibby clubs it with the cup, and silence returns.
24 D TIBBY [CONT'D] (whispering): Dinner.
25 D MAGDALENA: Dinner.
26 A ¶ Rosalind lifts her head and, for the first time, smiles.
