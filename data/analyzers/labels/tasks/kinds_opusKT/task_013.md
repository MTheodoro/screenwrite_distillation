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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0013.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00217 | INT. DEPARTMENT OF PAPERWORK - FILE ROOM - DAY
Detected names (may be incomplete or contain aliases): NUMBER, BARNABY OKAFOR-STILLWELL, ODALYS PEREIRA-HOLM, DIRECTOR PRUDENCE KWAKU-LINDHOLM, DIRECTOR KWAKU
* 1 A ¶ Towering stacks of manila folders.
* 2 A A hum of fluorescents.
* 3 A A sign: "PLEASE TAKE A NUMBER."
* 4 A No one has ever taken a number.
5 A ¶ BARNABY OKAFOR-STILLWELL, 40s, junior filing clerk, sits behind a desk stamping forms.
6 A His coworker, ODALYS PEREIRA-HOLM, 30s, shuffles a stack.
* 7 A Their cart squeaks.
8 D BARNABY: Form 27B.
9 D ODALYS: Stamped?
10 D BARNABY: Stamped.
11 D ODALYS: Triplicate?
12 D BARNABY: Quadruplicate.
13 D ODALYS: Since when?
14 D BARNABY: Since the memo.
15 D ODALYS: What memo?
16 D BARNABY: The memo that supersedes the memo.
17 A ¶ Odalys sighs.
* 18 A The cart rolls away on its own and bumps a shelf.
* 19 A A folder falls.
20 A Both stare at it.
21 D BARNABY [CONT'D]: That one's supposed to stay up.
22 D ODALYS: Why?
23 D BARNABY: It's the only copy.
24 D ODALYS: Of what?
25 D BARNABY: Of us.
* 26 A ¶ The door at the end of the aisle swings open.
27 A A figure strides in with a clipboard: DIRECTOR PRUDENCE KWAKU-LINDHOLM, 50s, stern, wearing a gray suit and a visitor badge.
28 D DIRECTOR KWAKU: Which of you is Barnaby?
29 D BARNABY: That's me.
30 D DIRECTOR KWAKU: You've been stamping form 27B in triplicate.
31 D BARNABY: Quadruplicate, ma'am.
32 D DIRECTOR KWAKU: It's supposed to be quintuplicate.
33 D ODALYS: Since when?
34 D DIRECTOR KWAKU: Since yesterday.
35 D BARNABY: But the memo said...
36 D DIRECTOR KWAKU: The memo was superseded.
37 D ODALYS: By what?
38 D DIRECTOR KWAKU: By me.
39 A ¶ Barnaby looks at Odalys.
40 A Odalys looks at the stamp.
41 A Director Kwaku makes a small note.
42 D DIRECTOR KWAKU [CONT'D]: Rectify by Friday.
43 D BARNABY: All of them?
44 D DIRECTOR KWAKU: All of them.
45 D ODALYS: That's forty thousand.
46 D DIRECTOR KWAKU: Then you had better start.
47 A ¶ She leaves.
* 48 A The door sighs shut.
49 A Barnaby slowly lowers the stamp.
* 50 A It makes a small, lonely thud.

### SCENE s00218 | INT. SAFEHOUSE - BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RENATA OYEKAN-VOSS, AGENT BASTIAN HALVORSEN, TEDDIE, KAPLAN
* 1 A ¶ Concrete walls.
* 2 A Bare bulb.
* 3 A A card table with a laptop and a stack of cash.
4 A ¶ AGENT RENATA OYEKAN-VOSS, 40s, slumps in a chair.
5 A AGENT BASTIAN HALVORSEN, 30s, paces.
6 A The informant, THEODORA "TEDDIE" KAPLAN, 50s, rocks nervously on a stool.
7 D RENATA: You said they'd be here by midnight.
8 D BASTIAN: They will be.
9 D TEDDIE: They won't. They're never late, and they're never early. They're just there.
10 D RENATA: Teddie.
11 D TEDDIE: It's a fact.
12 D BASTIAN: You've been saying that for two hours.
13 D TEDDIE: It's been true for two hours.
14 A ¶ Renata rubs her eyes.
15 A Bastian stops pacing, then resumes.
16 A Teddie hums something tuneless.
17 D RENATA: Stop humming.
18 D TEDDIE: I'm not humming.
19 D BASTIAN: You are.
20 D TEDDIE: It's the pipes.
* 21 A ¶ The pipes knock.
22 A All three look up.
* 23 A The knocking repeats, in a pattern.
24 D RENATA: That's not pipes.
25 D BASTIAN: That's Morse.
26 D TEDDIE: It's the wind.
27 D RENATA: In a basement?
28 D TEDDIE: It's a drafty basement.
29 A ¶ Bastian crosses to the wall.
30 A Presses an ear against it.
31 A Renata draws her weapon.
* 32 A The knocking stops.
33 D BASTIAN (whispering): Someone's behind this wall.
34 D RENATA: That's the neighbor's.
35 D BASTIAN: We don't have a neighbor.
36 A ¶ Teddie stands.
37 A Her stool tips over.
38 A She backs toward the stairs.
39 D TEDDIE: I told you. I told both of you.
40 D RENATA: Teddie, sit down.
41 D TEDDIE: I'm leaving.
42 D BASTIAN: You're not.
43 D TEDDIE: Watch me.
* 44 A ¶ The wall cracks.
* 45 A Plaster dust sprinkles the table.
46 A A fist punches through.
47 A Renata fires.
48 A Bastian ducks.
49 A Teddie screams and bolts up the stairs, and the bulb swings wildly, throwing shadows across the concrete.

### SCENE s00219 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ROZ, VANTERPOOL, VINNIE, OKAFOR
* 1 A ¶ Shelves of guitars, clocks, and cameras.
* 2 A A caged bulb.
* 3 A A safe, door ajar.
4 A ¶ ROSALIND "ROZ" VANTERPOOL, 40s, in a trench coat, holds a gun on VINCENT "VINNIE" OKAFOR, 50s, behind a desk.
5 A He raises both hands, a cigar still smoldering between his fingers.
6 D ROZ: Open it.
7 D VINNIE: It's open.
8 D ROZ: All the way.
9 D VINNIE: It's a good safe. It doesn't go all the way.
10 D ROZ: Vinnie.
11 D VINNIE: Roz.
12 A ¶ They speak together, then both stop.
13 A Roz tightens her grip.
14 A Vinnie ashes the cigar on the desk.
15 D VINNIE [CONT'D]: You hired me, remember?
16 D ROZ: I remember.
17 A ¶ She steps forward and slams the safe door wide.
* 18 A Inside: a single sheet of paper.
19 A She grabs it.
20 A He grabs her wrist.
21 A They struggle, knocking a lamp off the desk.
* 22 A The bulb swings.
* 23 A The gun goes off, shattering a clock.
24 A ¶ They freeze.
25 D ROZ [CONT'D] (reading): This is a receipt.
26 D VINNIE: For what you paid me.
27 D ROZ: That's all there is?
28 D VINNIE: That's all there ever was.
29 A ¶ She lowers the gun.
* 30 A The clock keeps ticking, in pieces.

### SCENE s00220 | INT. DRYDOCK CANTEEN - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, BRANIMIR KOSTA, KIRIN ASHWORTH, BIG HOLLIS
* 1 A ¶ Steel table.
* 2 A Cold tea.
* 3 A A hull looms through the window, half-painted.
4 A ¶ ODALYS VANTERPOOL (50s, foreman, grease-stained clipboard) stands.
5 A Doesn't sit.
6 A ¶ BRANIMIR KOSTA (60s, welder, one good eye) stares at his hands.
7 A ¶ KIRIN ASHWORTH (19, apprentice, new boots) hovers by the door.
8 A ¶ BIG HOLLIS (40s, union steward, arms folded) leans on the vending machine.
9 D ODALYS (to the room): Listen up. Inspection failed. Weld seam forty-two.
* 10 A ¶ Silence.
11 D BRANIMIR (muttering): Forty-two. Forty-two.
12 D ODALYS: Branimir.
13 D BRANIMIR: I heard.
14 D ODALYS: Who signed off on it?
15 D HOLLIS: Does it matter?
16 D ODALYS: It matters.
17 D KIRIN: It was me.
18 A ¶ Everyone turns.
19 D KIRIN [CONT'D]: Branimir was on break. I did the pass. I thought it was good.
20 D BRANIMIR: It wasn't him.
21 D KIRIN: It was.
22 D BRANIMIR: Boy, sit down.
23 D ODALYS: Kirin, did you X-ray the seam?
24 D KIRIN: No ma'am. There was no film left.
25 D HOLLIS: No film. On a Tuesday.
26 D ODALYS: Who's in charge of ordering film?
27 D HOLLIS: You are.
28 D ODALYS (beat): Right. Right.
29 D BRANIMIR: So it's your film. Your seam. Your hull.
30 D ODALYS: Don't.
31 D BRANIMIR: Forty years I never missed a seam.
32 D ODALYS: I know.
33 D BRANIMIR: Forty years.
34 D ODALYS: I know, Branimir.
35 D HOLLIS: Nobody gets fired tonight.
36 D ODALYS: Not your call.
37 D HOLLIS: It's the contract.
38 D ODALYS: The contract says a lot of things.
39 D BRANIMIR: The ship sails Friday.
40 D ODALYS: The ship does not sail Friday.
41 D KIRIN: Is it really that bad?
42 D ODALYS: It's a hairline crack, Kirin. At sea it opens like a zipper.
43 A ¶ Her hand slams the table.
* 44 A Tea jumps.
45 A Kirin flinches.
46 A ¶ Branimir laughs.
47 A Short.
48 A Dry.
49 D BRANIMIR: Then we cut it out. Tonight. Four of us.
50 D ODALYS (quietly): Four of us.
51 D HOLLIS: Overtime's on the union.
52 D ODALYS (to herself): Film. I forgot the film.
53 A ¶ She picks up the clipboard.
54 A Puts it down.
55 A Picks up four mugs instead.
56 D ODALYS [CONT'D]: Tea's cold. I'll make fresh.

### SCENE s00221 | INT. CLOSED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, STRANGER, DESMOND
* 1 A ¶ A domed room.
* 2 A Rows of empty reclining seats.
* 3 A A projector hums in the center, casting a slow field of stars across the ceiling.
4 A ¶ A man in a damp raincoat stands at the control console.
5 A He wipes his hands on a handkerchief, one finger at a time.
6 A ¶ A WOMAN enters from the lobby door, keys in her hand.
7 A She stops.
8 A She does not turn on the lights.
9 D STRANGER: Evening.
10 A ¶ She sets her keys on the nearest seat, carefully, so they make no sound.
11 D WOMAN: We're closed.
12 D STRANGER: So I see.
13 A ¶ He nudges a dial.
* 14 A The stars drift.
* 15 A A comet crosses the dome.
16 D WOMAN: Door was locked.
17 D STRANGER: It was.
18 A ¶ He smiles at the ceiling.
19 A She watches his hands.
20 D WOMAN: You want something to drink? There's a kettle in the office.
21 D STRANGER: Kind of you.
22 A ¶ She does not move toward the office.
23 A Neither does he.
24 D WOMAN: Your coat's wet.
25 D STRANGER: It's been a long walk.
26 D WOMAN: From where?
27 A ¶ He lets the question hang.
* 28 A The comet fades.
29 D STRANGER: You kept the Orion show. They told me you'd cut it.
30 D WOMAN: Who told you?
31 D STRANGER: Man at the ticket window. Years ago.
32 A ¶ She takes one step down the aisle.
33 A He takes one up.
34 A They stop level with the fourth row.
35 D WOMAN: I don't think I know you.
36 D STRANGER: No. But your husband did.
37 A ¶ Her jaw sets.
38 A She glances at the exit sign, then back.
39 D WOMAN: My husband's dead.
40 D STRANGER: That's what I said. Did.
41 A ¶ She reaches slowly into her coat pocket.
42 A He watches it.
43 A She pulls out a small brass key and holds it up between two fingers.
44 D WOMAN: Basement. Where he kept the film reels.
45 D STRANGER (softly): I thought so.
46 D WOMAN: He wrote a name on every can. Yours is on the third shelf.
47 A ¶ He doesn't answer.
* 48 A The stars wheel overhead.
49 D WOMAN [CONT'D]: Tell me your name and I'll hand you the key.
* 50 A ¶ A long beat.
51 A He folds the handkerchief into a square.
52 D STRANGER: Desmond Pryce.
53 D WOMAN: Thank you, Mr. Pryce.
54 A ¶ She places the key on the armrest between them.
55 A He doesn't reach for it.
56 D DESMOND: Aren't you going to ask what's on the reel?
57 D WOMAN: No.
58 A ¶ She picks up her own keys again.
59 A Turns toward the lobby.
60 A Stops with her back to him.
61 D WOMAN [CONT'D]: The lights come on at eleven. You have twenty minutes.
62 A ¶ She leaves.
* 63 A The door sighs shut.
64 A ¶ He stands alone beneath Orion.
65 A Then he takes the key.

### SCENE s00222 | INT. SALT WAREHOUSE, CANAL DISTRICT - DAWN
Detected names (may be incomplete or contain aliases): INSPECTOR NNAMDI OKONKWO-REYES, SERGEANT IMOGEN BRAITHWAITE, PETRU LAZAR, DOLORES HALLORAN
* 1 A ¶ Mountains of grey salt.
* 2 A Rafters.
* 3 A A single skylight.
* 4 A ¶ Footsteps.
* 5 A Crunch.
6 A ¶ INSPECTOR NNAMDI OKONKWO-REYES (40s, rumpled suit, tired eyes) walks the center aisle with a flashlight he doesn't need.
7 A ¶ Behind him: SERGEANT IMOGEN BRAITHWAITE (30s, crisp, notebook) and old watchman PETRU LAZAR (70s, cap, cough).
* 8 A ¶ Quiet.
* 9 A Almost peaceful.
10 D INSPECTOR: Pretty, isn't it.
11 D IMOGEN: It's a crime scene, sir.
12 D OKONKWO-REYES: Can't it be both?
13 D PETRU: Nobody touched nothing. I swear on my mother.
14 D OKONKWO-REYES: Mr. Lazar, relax. Nobody's accusing.
15 A ¶ Petru coughs.
16 A Wipes his mouth.
17 D IMOGEN: Body's in the east bay. Under three feet of salt. Found by the forklift driver.
18 D OKONKWO-REYES: Where's the driver?
19 D PETRU: Home. Sick.
20 D IMOGEN: Sick how?
21 D PETRU: Sick sick. He threw up.
22 D OKONKWO-REYES: Reasonable.
23 A ¶ They reach the east bay.
* 24 A A yellow tape.
* 25 A A shallow trench.
* 26 A ¶ The trench is empty.
27 D IMOGEN: That's not right.
28 D OKONKWO-REYES: No.
29 D IMOGEN: Forensics bagged her at four a.m. I signed the form.
30 D PETRU: I seen them take her. Two men. White van.
31 D OKONKWO-REYES: What men?
32 D PETRU: Men in coats.
33 D IMOGEN: Our men?
34 D PETRU: How would I know your men?
35 D OKONKWO-REYES: Mr. Lazar. Tonight. Did anyone come in after the van?
36 D PETRU: Nobody.
37 D IMOGEN: Nobody?
38 D PETRU: The lady from the office. She forgot her umbrella.
39 D OKONKWO-REYES: What lady?
40 D PETRU: Miss Halloran. Dolores.
41 D IMOGEN: Dolores Halloran? She's been on leave a month.
42 D PETRU: Then I seen a ghost.
* 43 A ¶ Silence.
* 44 A Salt trickles from a heap.
* 45 A Somewhere a pigeon.
46 D OKONKWO-REYES: Sergeant. Phone the office.
47 D IMOGEN: It's six a.m.
48 D OKONKWO-REYES: Phone.
49 A ¶ She does.
50 A Holds it to her ear.
51 A Her face changes.
52 D IMOGEN: Straight to voicemail. Her own voice.
53 D OKONKWO-REYES: Whose voice?
54 D IMOGEN: Halloran's. She says: "Leave a message after the salt."
55 D PETRU: What does that mean?
56 D OKONKWO-REYES: It means someone's been here longer than we have.
57 A ¶ He turns.
58 A Beams the flashlight into the rafters.
59 A ¶ A shape up there.
60 A A woman crouched on a beam.
61 A Umbrella in hand.
62 A ¶ DOLORES HALLORAN (50s, grey coat, composed) peers down.
63 D DOLORES: Inspector. I wondered when you'd look up.
64 D IMOGEN: Ma'am, come down. Slowly.
65 D DOLORES: I'd rather you came up.
66 D PETRU: Holy mother.
67 D OKONKWO-REYES: Miss Halloran. Where's the body?
68 D DOLORES: Under you.
69 A ¶ Everyone looks down.
* 70 A The salt floor shifts.
71 D IMOGEN: Sir.
72 D OKONKWO-REYES: I see it.
73 D PETRU: I told you nothing was touched!
74 D DOLORES: You told them nothing. That's different.
75 A ¶ She raises the umbrella.
76 A Opens it.
* 77 A Salt rains from the folds.
78 D OKONKWO-REYES: Sergeant. Cuff Mr. Lazar.
79 D PETRU: Me?
80 D IMOGEN: Mr. Lazar, you have the right to--
81 D PETRU: I was told to say nothing! They said the lady would pay!
82 D DOLORES: And I did.
83 A ¶ She drops.
84 A The umbrella floats her down like a slow bell.
85 A She lands in the salt without a sound.
86 D OKONKWO-REYES: Dolores Halloran, you are under arrest.
87 D DOLORES: For which one?
88 A ¶ Okonkwo-Reyes smiles, tired.
89 D OKONKWO-REYES: Start with the umbrella.

### SCENE s00223 | INT. DAIRY-CASE AISLE, 24-HOUR GROCERY - 3 A.M.
Detected names (may be incomplete or contain aliases): TOBIAS WREN-ALDRIDGE, PRISCILLA OYELARAN, DIMA, ROSENFELD, HYACINTH PELL, MARGUERITE
* 1 A ¶ Fluorescent hum.
* 2 A Forty brands of yogurt, all the same.
3 A ¶ TOBIAS WREN-ALDRIDGE (30s, Regional Synergy Lead, lanyard, no pulse) holds a laser pointer at a shelf.
4 D TOBIAS: Team. Our learning: yogurt is a journey.
5 A ¶ Four night-shift stockers stare back.
6 A ¶ PRISCILLA OYELARAN (40s, forklift certified, unimpressed) holds a pallet jack like a shield.
7 A ¶ DMITRI "DIMA" ROSENFELD (20s, hoodie, headphones around his neck) eats a yogurt, deliberately.
8 A ¶ HYACINTH PELL (50s, reading glasses on a chain, ex-accountant) checks her watch.
9 A ¶ MARGUERITE (60s, no last name anyone remembers) is asleep standing up.
10 D TOBIAS [CONT'D]: Going forward, we are removing the word "expired."
11 D PRISCILLA: We're what?
12 D TOBIAS: We're reframing it as "mature."
13 A ¶ Dima's spoon stops.
14 A He puts it down.
15 D DIMA: That's illegal.
16 D TOBIAS: That's agile.
17 D HYACINTH (to no one): I left a pension for this.
18 A ¶ Tobias fires the laser pointer at Marguerite's forehead.
19 D MARGUERITE (eyes closed): Is it the fire?
20 D PRISCILLA: No, Marguerite. It's the Synergy Lead.
21 A ¶ Marguerite nods, drifts off again.
22 A Tobias lowers the pointer.
23 D TOBIAS: Okay. Okay. Is there anything anyone wants to say before we align?
* 24 A ¶ Silence.
25 A Dima raises his yogurt like a toast.
26 D DIMA: Mature.

### SCENE s00224 | INT. ROLLER RINK, AFTER CLOSING - NIGHT
Detected names (may be incomplete or contain aliases): TEDDY, AUGUSTIN MWANGI, FAYE SOLOMON-DRAKE
* 1 A ¶ Mirror ball stopped.
* 2 A House lights half up.
* 3 A Rental skates in cubbies.
* 4 A A snack bar with its grill off.
5 A ¶ THEODORA "TEDDY" MWANGI (11) sits on the rail, one skate on, one off.
* 6 A Rink floor gleams.
7 A ¶ Her father, AUGUSTIN MWANGI (40s, rink manager, keys on a belt loop), mops the far lane.
8 A ¶ Her aunt FAYE SOLOMON-DRAKE (30s, coat still on, car keys in fist) walks in from the lobby.
9 D FAYE: Door was open.
10 D AUGUSTIN: I'm still here.
11 A ¶ He keeps mopping.
12 A Faye watches the bucket.
13 D FAYE: Teddy. Shoes.
14 A ¶ Teddy doesn't move.
15 D FAYE [CONT'D]: Your dad and I need a minute.
16 D TEDDY: You can say it in front of me.
17 D AUGUSTIN: Teddy.
18 D TEDDY: I'm eleven, not stupid.
19 A ¶ Faye crosses to the rail.
20 A Sits one spot down.
21 A Close, not close enough.
22 D FAYE: The offer's still open. The spare room. The school's good.
23 D AUGUSTIN: Her school's good here.
24 D FAYE: It's two hours away.
25 D AUGUSTIN: It's my kid.
26 A ¶ He stops mopping.
27 A Leans the handle on the wall.
28 A ¶ Teddy pulls her second skate off.
29 A Sets it beside the first.
30 A Lines them up, toes touching.
31 D TEDDY: Do I get a vote?
32 D FAYE: Of course you do.
33 D AUGUSTIN: Of course.
34 A ¶ Neither of them looks at her.
35 D TEDDY: Mom's skates are still in the office.
36 A ¶ Augustin and Faye both freeze.
37 A Faye stares at the floor.
38 A Augustin studies the ceiling.
39 D AUGUSTIN: They don't fit anyone.
40 D TEDDY: They fit me.
41 A ¶ Faye lets out a breath.
42 A Almost a laugh.
43 D FAYE: Size five. She had tiny feet.
44 A ¶ Augustin walks to the snack bar.
45 A Pours three cups of water from the tap.
46 A Brings them over.
47 A Hands one to each.
48 A ¶ They drink.
* 49 A The ice machine clunks.
50 D TEDDY: Can I skate once? Alone? Then we decide.
51 A ¶ Augustin looks at Faye.
52 A Faye looks at Augustin.
53 A Slowly, both nod.
54 A ¶ Teddy slides off the rail in her socks.
55 A Walks to the center of the empty rink.
56 A ¶ She doesn't skate.
57 A She just stands there.
58 A Arms out.
59 A Eyes closed.
60 A ¶ Faye puts her cup down.
61 A Augustin sits.
62 A ¶ They wait.

### SCENE s00225 | EXT. ROOFTOP PIGEON LOFT - EVENING
Detected names (may be incomplete or contain aliases): OLD ANSELMO CRUZ-BELLAMY, NIMA
* 1 A ¶ Above the chimney pots, a plywood loft leans against the wind.
* 2 A Copper light spills over tar paper and laundry lines.
3 A ¶ OLD ANSELMO CRUZ-BELLAMY (70s) kneels at the loft door, palms open.
4 A Beside him, his granddaughter NIMA (9) holds a single grey bird against her chest.
5 A ¶ She has been quiet all day.
6 A Now she squeezes, and the bird beats its wings once, hard, against her ribs.
7 D NIMA: Grandpa, it's scared.
8 D ANSELMO: It is.
9 A ¶ He does not take it from her.
10 A His hands hover, trembling, close enough to catch, far enough to let her choose.
11 A ¶ She opens her fingers a little.
12 A Then a little more.
* 13 A The bird sits in the cradle of her palm, small heart drumming.
14 D NIMA: If I let go, it won't come back.
15 D ANSELMO: Maybe.
16 D NIMA: You said they always come back.
17 D ANSELMO: I said they come home. It's not the same as coming back to us.
18 A ¶ She considers this with the gravity of the very young.
19 A The wind lifts her hair across her eyes.
20 A ¶ Her arms shoot up.
* 21 A The bird explodes out of her hands, a clap of feathers, and is a speck, then a rumor, then gone over the river.
22 A ¶ She stares at her empty palms.
23 A He stares at her.
24 A ¶ Slowly, she leans into his shoulder, and he lets out the breath he has held since April.

### SCENE s00226 | INT. GRAIN ELEVATOR CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LEONIDAS PAPADAKIS, CORA BEAUMONT-TEAGUE
* 1 A ¶ A cramped booth above a concrete silo.
* 2 A Dials, a swivel chair, a space heater.
* 3 A Through the window, conveyor belts hang motionless in the dark.
4 A ¶ LEONIDAS PAPADAKIS (50s, county auditor, windbreaker) sits at the desk with a ledger open.
5 A He checks numbers with a pencil.
6 A He is calm.
* 7 A ¶ Boots on the iron stairs.
* 8 A The door opens.
9 A ¶ CORA BEAUMONT-TEAGUE (40s, elevator manager, rolled sleeves) enters with two chipped mugs of coffee.
10 D CORA: Cream?
11 D LEONIDAS: Black's fine.
12 A ¶ She hands him a mug.
13 A He sips.
14 A She doesn't.
15 D CORA: Long drive from the county seat.
16 D LEONIDAS: Two hours. I like the quiet.
17 D CORA: Nothing quieter than a silo at midnight.
18 A ¶ He nods and turns a page.
19 A She studies the back of his head.
20 D LEONIDAS: The weigh tickets for September match the bank deposits.
21 D CORA: Good.
22 D LEONIDAS: October's a little thin.
23 D CORA: Rain. Hauling slowed.
24 D LEONIDAS: Mm.
25 A ¶ He turns another page.
* 26 A Behind him, a shadow crosses the window.
27 A Cora sees it.
28 A She doesn't blink.
29 D LEONIDAS [CONT'D]: It's the volume I can't square. Four thousand bushels, gone on paper.
30 D CORA: Spillage.
31 D LEONIDAS: That's a lot of spillage.
32 D CORA: It's a big elevator.
33 A ¶ He closes the ledger.
34 A Looks at her for the first time.
35 D LEONIDAS: I'd like to use your phone.
36 D CORA: Line's down.
37 D LEONIDAS: It was working an hour ago.
38 D CORA: Storms.
* 39 A ¶ There are no storms.
40 A Both of them know it.
41 A ¶ He reaches for the receiver on the wall.
42 A She reaches for it too.
43 A Their hands land on it together.
44 A They freeze, her fingers over his, the heater ticking.
45 D CORA [CONT'D]: Don't.
46 D LEONIDAS: Let go.
47 A ¶ She grips harder.
48 A He twists.
* 49 A The mugs rattle off the desk and shatter, coffee across the ledger.
50 A They stumble apart, both breathing hard.
51 D LEONIDAS [CONT'D] (softly): I've already sent copies to the state office.
52 A ¶ Cora lets go of the phone.
53 A She sinks into the swivel chair.
54 D CORA: When?
55 D LEONIDAS: Tuesday.
56 A ¶ She begins, quietly, to laugh.
57 D CORA: Then why did you drive out?
58 D LEONIDAS: To give you a chance to explain.
* 59 A ¶ Outside, the conveyor belts begin to turn on their own.

### SCENE s00227 | EXT. SALT FLAT, ABANDONED STAGE STOP - NOON
Detected names (may be incomplete or contain aliases): JED, ARROWOOD, MARISOL QUINTANILLA
* 1 A ¶ White ground.
* 2 A White sky.
* 3 A A dead well.
* 4 A Two hitching posts.
5 A ¶ JEDEDIAH "JED" ARROWOOD (50s, long duster, one glove) sits on a crate.
6 A Whittles.
7 A Doesn't look up.
* 8 A ¶ Hooves.
* 9 A Slow.
10 A ¶ MARISOL QUINTANILLA (30s, black hat, rifle across the saddle) rides in.
11 A Stops thirty feet off.
12 A ¶ He keeps whittling.
13 A She keeps still.
14 D JED: Water's bad.
15 D MARISOL: I brought my own.
16 D JED: Figured.
17 A ¶ She swings down.
* 18 A Boots crunch.
19 A She leaves the rifle on the horse.
20 A ¶ He folds his knife.
21 A Slides it into his boot.
22 D MARISOL: You're a long way from Dodge.
23 D JED: So are you.
* 24 A ¶ A hawk.
* 25 A A wind.
* 26 A Nothing else.
27 A ¶ She walks toward him.
28 A Ten feet.
29 A Five.
30 D MARISOL: Eleven years.
31 D JED: Twelve.
32 A ¶ She stops.
33 A Her hand drifts to the holster.
34 A ¶ He raises his glove hand.
35 A Slow.
36 A Palm out.
37 D JED [CONT'D]: I don't have a gun.
38 D MARISOL: Liar.
39 D JED: Left it in the well.
40 A ¶ She stares.
41 A Then at the well.
42 A Back at him.
43 D MARISOL: Why?
44 D JED: So you'd have to ask.
45 A ¶ She draws.
46 A ¶ He doesn't move.
47 A The barrel shakes.
* 48 A The hawk screams.
49 A ¶ Then she holsters it, and slaps him once across the face with the flat of her hand.
50 A He takes it.
51 D MARISOL: Now we're even.
52 A ¶ She turns for her horse.
53 A He lets out a breath that's been twelve years in the making.

### SCENE s00228 | INT. TREEHOLLOW ARCHIVE OF THE MOSS-KEEPERS - TWILIGHT
Detected names (may be incomplete or contain aliases): HESPERIA THORNQUILL, OSWIN FERNLEIGH, BRAMBLE-JACK, ILUNA WAVEREAD
* 1 A ¶ Inside the trunk of a tree so old its heartwood has hollowed into a cathedral.
* 2 A Shelves of bark scrolls spiral up the walls.
* 3 A Fireflies drift among them like patient candles.
4 A ¶ At a root-table in the center sit four figures, each with a small lamp.
5 A ¶ HESPERIA THORNQUILL (60s, keeper-in-chief, silver braid to her knees) turns the pages of a mossbound book.
6 A She is calm in the way of those who have never been hurried.
7 A ¶ Beside her, the young scribe OSWIN FERNLEIGH (17, ink to the elbows) copies a line, tongue between his teeth.
8 A ¶ Across from them a travelling tinker, BRAMBLE-JACK (40s, patched coat, pockets that clink), polishes a brass key with his sleeve.
9 A ¶ At the end of the table, a stranger from the river-folk, ILUNA WAVEREAD (30s, damp hair, a shell necklace), sits with her chin in her palm.
10 D HESPERIA (to the table): We begin the evening readings.
11 A ¶ Nobody moves.
* 12 A The fireflies drift.
13 D OSWIN: Keeper Thornquill, should I record the weather?
14 D HESPERIA: Yes, child. Rain in the east, none in the west.
15 D OSWIN: Rain in the east.
16 A ¶ He writes.
17 A She smiles at the book.
18 D BRAMBLE-JACK (low, to himself): Same rain as yesterday. Same rain as a hundred years.
19 D HESPERIA: Bramble-Jack, if you have a thought, share it with us all.
20 D BRAMBLE-JACK: Nothing, Keeper. Just brass.
21 A ¶ He holds the key up.
* 22 A It catches a firefly's light.
23 D ILUNA: It's a lovely key.
24 D BRAMBLE-JACK: Isn't it? Found it in a trout.
25 D ILUNA: In a trout?
26 D BRAMBLE-JACK: Don't ask.
27 A ¶ She laughs, soft, and he looks pleased.
28 A ¶ Hesperia closes the book.
29 A Opens another.
30 D HESPERIA: Iluna Wavereads. You came with a question.
31 D ILUNA: I did. Though it's been so peaceful, I almost forgot.
32 D HESPERIA: Ask it anyway.
33 D ILUNA (to the room): The river-folk say a door lies under this tree. They say it opens once a generation.
34 D OSWIN (whispering): The cellar door.
35 D HESPERIA: Oswin.
36 D OSWIN: Sorry, Keeper.
37 A ¶ Hesperia turns a page.
* 38 A The parchment rustles.
39 D HESPERIA: There is a door. It does not open for questions.
40 D ILUNA: What does it open for?
41 D HESPERIA: Patience.
42 D BRAMBLE-JACK: She's been waiting six years, Keeper. I counted.
43 D HESPERIA: Then six years is not yet enough.
44 A ¶ Iluna sighs, amused rather than defeated.
45 D ILUNA: Oswin, would you like to hear what the river says about the archive?
46 D OSWIN: Please.
47 D ILUNA: It says you keep the quietest place in the whole forest.
48 D OSWIN: It does?
49 D ILUNA: It does. And it says the quiet is the door.
50 A ¶ Hesperia looks up from the book for the first time.
51 A Studies the river-woman a long moment.
52 D HESPERIA: Who taught you that?
53 D ILUNA: Nobody. I listened.
54 D HESPERIA (to herself): Well. Well, well.
55 A ¶ She closes the book on her finger.
56 D HESPERIA [CONT'D]: Bramble-Jack, bring the key.
57 A ¶ He rises, key in his palm, and crosses the root floor.
58 A At the base of the spiral stair, he kneels.
* 59 A The key fits nothing visible.
60 D BRAMBLE-JACK: Where do I--
61 D HESPERIA: Wherever it is quietest.
62 A ¶ He closes his eyes.
63 A Listens.
64 A Then touches the key to the grain of the wood, and the grain opens, gently, like an eyelid.
* 65 A ¶ Warm gold light spills across the floor.
66 D OSWIN (to Iluna): You did that.
67 D ILUNA: We all did.
* 68 A ¶ The fireflies drift toward the light, in no hurry at all.

### SCENE s00229 | INT. LAUNDROMAT, LATE NIGHT
Detected names (may be incomplete or contain aliases): NADIRA FAROUK, CASIMIR ODUYA, LINNEA HARTWELL-SATO, INTERCOM
* 1 A ¶ Twelve dryers, three working.
* 2 A A TV on the wall plays a muted weather channel.
3 A ¶ NADIRA FAROUK (30s, scrubs, hair in a clip) folds towels at a long table, sorts socks into pairs, pulls a stray sock from her pocket and drops it into a lost-and-found bucket, all without looking up.
4 A Across the room, her brother-in-law CASIMIR ODUYA (40s, security jacket) feeds quarters into a dryer, kicks the door shut, and slumps onto a plastic chair.
5 A In the corner, a young woman, LINNEA HARTWELL-SATO (20s, headphones, textbook), highlights a page and glances at the clock every half minute.
* 6 A ¶ An intercom crackles on the wall.
7 D INTERCOM [V.O.] (tinny, bored): Attention customers. The attendant is on break. Please do not feed the machines your feelings.
8 D CASIMIR: That's new.
9 D NADIRA: It's the owner. He thinks he's funny.
10 D CASIMIR: He is not.
* 11 A ¶ A small pause.
* 12 A A dryer thumps.
13 D LINNEA: Excuse me. Do you know what time the last bus is?
14 D NADIRA: One-ten.
15 D LINNEA: Thanks.
16 D CASIMIR: Ninety-nine percent of the time it's late.
17 D LINNEA: Great.
18 A ¶ Nadira pairs two socks, tucks them, sets them on the pile.
19 A Casimir rubs his eyes.
20 A Linnea turns a page of her textbook.
* 21 A The weather channel shows a swirl of green over the coast.
* 22 A ¶ A phone buzzes on the table.
23 A Nadira checks it.
24 A Reads.
25 A Sets it face down.
26 D CASIMIR: Hospital?
27 D NADIRA: My shift's covered. They just wanted to tell me.
28 D CASIMIR: That's nice of them.
29 D NADIRA: It's the first time.
* 30 A ¶ The intercom crackles again.
31 D INTERCOM [V.O.]: Dryer six is finished. Dryer six has been finished for forty minutes. Dryer six would like you to take your clothes.
32 A ¶ Linnea looks up, guilty.
33 A Hurries to dryer six.
34 A Pulls out a hot tangle of jeans.
35 D LINNEA: Sorry.
36 D CASIMIR: He's watching us.
37 D NADIRA: He's always watching us.
38 A ¶ She laughs, quiet.
39 A Casimir smiles at his shoes.
40 A Linnea folds her jeans into a small, neat square.
* 41 A ¶ Outside, a bus idles at the curb.
42 A Nobody gets up.

### SCENE s00230 | INT. BACK ROOM, FISH MARKET - PRE-DAWN
Detected names (may be incomplete or contain aliases): SAL KNIFE, BIANCHINI, RENZO, DETECTIVE MARISELA OYELOWO-KANE, GRETCHEN VOLKOV, DOMINGO, TAVARES
* 1 A ¶ Crushed ice.
* 2 A Crates of mackerel.
* 3 A A bare bulb swings overhead.
4 A ¶ SALVATORE "SAL THE KNIFE" BIANCHINI (50s, rubber apron, scarred knuckles) counts cash into a fish crate.
5 A His nephew, LORENZO "RENZO" BIANCHINI (20s, nervous, wet cuffs), holds the lid.
6 A ¶ At a steel table, DETECTIVE MARISELA OYELOWO-KANE (40s, trench coat, notebook) sits perfectly still.
7 A Across from her, the bookkeeper, GRETCHEN VOLKOV (50s, cardigan, reading glasses on a cord), sorts receipts.
8 A ¶ By the freezer door, a hulking enforcer called DOMINGO "THE HAMMER" TAVARES (30s, tailored suit under a slicker) watches the others.
9 D SAL: Renzo, keep your hands where I see them.
10 D RENZO: They're on the lid, Uncle Sal.
11 D SAL: Then keep them there.
12 D GRETCHEN (not looking up): Your numbers don't add, Salvatore.
13 D SAL: Gretchen, my numbers always add.
14 D GRETCHEN: Not this month.
15 A ¶ She holds up a receipt.
16 A Sal squints at it.
* 17 A The bulb swings.
* 18 A Shadows slide across everyone.
19 D MARISELA: Mr. Bianchini, I'd like to know where your nephew was Tuesday night.
20 D SAL: Detective, he was here. Gutting cod. Ask the cod.
21 D MARISELA: I'm asking you.
22 D DOMINGO (from the freezer): Boss, she's wearing a wire.
23 A ¶ Marisela and Sal both look at Gretchen.
24 A Gretchen blinks, then at Marisela.
25 A Domingo reaches for his pocket.
26 A Renzo lets go of the lid and it slams.
27 A ¶ She goes for the door.
28 A He goes for her.
29 A Gretchen throws the receipts, a blizzard of paper.
30 A Marisela dives behind the crates.
31 A Sal pulls a gutting knife and Domingo draws a pistol.
32 D RENZO (shouting): Nobody shoot! Nobody shoot!
* 33 A ¶ A long frozen beat.
* 34 A Paper settles like snow.
35 D DOMINGO: She's not wired. It's the bookkeeper.
36 D GRETCHEN (composed): I don't wear wires, Mr. Tavares. I wear cardigans.
37 A ¶ She peels the cardigan open.
38 A Nothing underneath but a blouse.
39 A Sal lowers the knife.
40 A Domingo lowers the gun.
41 D SAL: Then who's talking to the police?
42 A ¶ Everyone turns slowly to Renzo.
43 D RENZO: Uncle Sal. I can explain.
44 D SAL (gently): Of course you can, Renzo.
45 A ¶ He puts the knife down.
46 A Picks up a mackerel instead.
47 A Weighs it.
48 D SAL [CONT'D]: But first, you gut the fish.

### SCENE s00231 | INT. TAXIDERMY SHOP BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): CONSTANCE BELLWETHER-OKAFOR, INSPECTOR ARTHUR LINDQVIST, ELLIOTT FAIRWEATHER-NGUYEN
* 1 A ¶ Glass eyes in drawers.
* 2 A A stuffed heron on the filing cabinet.
* 3 A A desk lamp.
4 A ¶ CONSTANCE BELLWETHER-OKAFOR (50s, shop owner, tweed) sits behind the desk.
5 A Across from her, INSPECTOR ARTHUR LINDQVIST (60s, bowler hat on his knee) leans forward.
6 D INSPECTOR LINDQVIST: Miss Bellwether-Okafor, the dead man was your partner.
7 D CONSTANCE: He was, Inspector.
8 D INSPECTOR LINDQVIST: And you were the last to see him.
9 D CONSTANCE: I locked up at six. He was alive then.
10 D INSPECTOR LINDQVIST: Alive and in a temper, the clerk says.
11 D CONSTANCE: He was always in a temper.
12 D INSPECTOR LINDQVIST: About what?
13 D CONSTANCE: The heron.
14 D INSPECTOR LINDQVIST: The heron.
15 D CONSTANCE: He wanted to sell it. I did not.
16 D INSPECTOR LINDQVIST: To whom?
17 D CONSTANCE: A collector. A man who pays in cash.
18 D INSPECTOR LINDQVIST: Name?
19 D CONSTANCE: He never gave one.
20 D INSPECTOR LINDQVIST: Convenient.
21 D CONSTANCE: For him, perhaps. Not for me.
22 D INSPECTOR LINDQVIST: Do you own a revolver, madam?
23 D CONSTANCE: I own a skinning knife and a very good sense of humor.
24 D INSPECTOR LINDQVIST: The first I've seen. The second I'm waiting for.
25 D CONSTANCE: Then you will wait a long time.
26 A ¶ He taps his hat.
27 A She straightens a pen.
* 28 A The heron stares at both.
29 D INSPECTOR LINDQVIST: Tell me about the safe.
30 D CONSTANCE: There is no safe.
31 D INSPECTOR LINDQVIST: There is a safe-shaped hole in your wall.
32 D CONSTANCE: Is there?
33 D INSPECTOR LINDQVIST: Behind the heron.
34 D CONSTANCE: I never look behind the heron.
35 D INSPECTOR LINDQVIST: Perhaps you should.
* 36 A ¶ The door opens.
37 A A tall young man steps in, soaked, a package under his arm.
38 A ¶ ELLIOTT FAIRWEATHER-NGUYEN (20s, delivery boy, cap dripping) stops.
39 A He looks from one to the other.
40 D ELLIOTT: Sorry. Parcel for Mr. Pennington.
41 D CONSTANCE: Mr. Pennington is dead.
42 D ELLIOTT: Oh. Then who signs?
43 D INSPECTOR LINDQVIST: I will. What is it?
44 D ELLIOTT: Don't know. It's ticking.
45 A ¶ Inspector Lindqvist and Constance look at each other.
46 A Then at the parcel.
47 A Then at the heron.
48 D CONSTANCE: Put it down gently, young man.
49 D ELLIOTT: Is it going to--
50 D INSPECTOR LINDQVIST: It's going to be fine. Probably.
51 A ¶ Elliott lowers the parcel onto the desk.
* 52 A The ticking stops.
* 53 A Silence.
54 A ¶ Constance lifts the lid.
* 55 A Inside, a brass pocket watch and a note.
56 D CONSTANCE (reading): "Look behind the heron. Signed, Pennington."
57 D INSPECTOR LINDQVIST: He's been dead since six.
58 D CONSTANCE: He mailed it at five.
59 A ¶ Elliott takes off his dripping cap.
60 D ELLIOTT: Should I go?
61 D INSPECTOR LINDQVIST: No. Stand by the heron. Both of you.
62 A ¶ They turn toward the bird.
* 63 A It stares back, patient.

### SCENE s00232 | EXT. FROZEN RIVER GORGE - DUSK
Detected names (may be incomplete or contain aliases): WILHELMINA OSEI-STRAND, TOMAS BRENNAN-ADEYEMI
* 1 A ¶ A slot of black rock, ice-glazed.
* 2 A Wind scours the canyon floor.
* 3 A Snow hisses along the ridge like sand.
* 4 A ¶ At the bottom, half under an overhang, a collapsed tent: orange nylon sagging under a week of drift.
* 5 A Beside it, a dead stove and a rope tied to nothing.
6 A ¶ DR. WILHELMINA OSEI-STRAND (40s, glaciologist, frostbitten cheeks, a parka two sizes too big) crouches beside her younger colleague, TOMAS BRENNAN-ADEYEMI (20s, field assistant, one boot missing), who sits propped against the rock with his eyes half open.
7 D WILHELMINA (to Tomas): Talk to me. Count backward from ten.
8 D TOMAS (slurring): Ten. Nine.
9 D WILHELMINA: Keep going.
10 D TOMAS: Eight. Tired.
11 A ¶ She tucks her scarf around his throat.
12 A Stands.
13 A Cups her mouth toward the ridge.
14 D WILHELMINA [CONT'D] (shouting, to the wind): Anyone! Anyone up there!
* 15 A ¶ Only the wind answers.
16 A ¶ She lowers her hands.
17 A Mutters, barely audible.
18 D WILHELMINA [CONT'D] (to herself): Okay. Okay. Think. Fire. Heat. Water.
19 A ¶ She digs through the wreck of the tent and finds a single flare, cracked at the base.
20 A She weighs it in her glove.
21 D WILHELMINA [CONT'D] (to Tomas): We've got one shot. When I say, close your eyes.
22 D TOMAS: Why?
23 D WILHELMINA: Because I'm going to try to be a lighthouse.
24 A ¶ She strikes.
* 25 A The flare sputters, catches.
* 26 A Red light floods the walls of the gorge, and the falling snow turns to rubies.
* 27 A ¶ Far above, a faint, answering glow.

### SCENE s00233 | INT. LAUNDRY ROOM OF A GRAND HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): EULALIE FONTENOT-RAMASWAMY, JULIAN FONTENOT
* 1 A ¶ Steam pipes and canvas carts.
* 2 A A long ironing table with a single white shirt stretched over it.
3 A ¶ MRS. EULALIE FONTENOT-RAMASWAMY (60s, head housekeeper, starched apron, silver hair pinned flat) presses the shirt with a heavy iron.
4 A Her motions are slow and exact.
5 A ¶ Her son, JULIAN FONTENOT (30s, tuxedo, bow tie undone) stands across the table.
6 A He holds a champagne flute like it's something he's been told to carry.
7 D JULIAN: Mother.
8 D EULALIE: Julian.
9 D JULIAN: The reception started an hour ago.
10 D EULALIE: I know. I heard the music.
11 A ¶ She turns the shirt.
12 A Irons the cuff.
13 A He watches the iron, not her.
14 D JULIAN: You promised you'd come.
15 D EULALIE: I'm here. In the building.
16 D JULIAN: That's not the same.
17 D EULALIE: It's close.
* 18 A ¶ The iron hisses.
* 19 A Steam rolls between them.
20 D JULIAN: Mr. Whitcombe asked about you.
21 D EULALIE: Did he.
22 D JULIAN: He wants to thank you.
23 D EULALIE: I've been thanked.
24 D JULIAN: By whom?
25 D EULALIE: By the shirts.
26 A ¶ He sets the flute down.
27 A Takes a cloth from the cart and begins to fold it into a square.
* 28 A It's the wrong size.
29 A He folds it again.
30 D JULIAN: They're announcing the engagement.
31 D EULALIE: Yes.
32 D JULIAN: Sophie's parents are here.
33 D EULALIE: I've seen their luggage. Very nice leather.
34 D JULIAN: Mother.
35 D EULALIE: Julian.
36 A ¶ She sets the iron upright.
37 A Looks at the shirt.
38 A Finally at him.
39 D EULALIE [CONT'D]: Your collar is crooked.
40 A ¶ He lifts his hands to fix it.
* 41 A They shake.
42 A She walks around the table, takes the two ends of the bow tie from him, and ties it without a word.
43 A Her fingers are quick and steady.
44 A His are not.
45 D JULIAN: I thought you'd be angry.
46 D EULALIE: I am ironing, Julian. Don't mistake it.
47 A ¶ She tugs the knot straight.
48 A Smooths his lapels with both palms.
49 D EULALIE [CONT'D]: Go. They'll want you for the toast.
50 D JULIAN: Come with me.
51 D EULALIE: In this apron?
52 D JULIAN: Yes.
53 A ¶ She looks at the apron.
54 A At her hands.
55 A At the white shirt, still warm on the board.
56 D EULALIE: Give me ten minutes.
57 D JULIAN: You'll come?
58 D EULALIE: Ten minutes.
59 A ¶ He nods.
60 A Picks up his flute.
61 A Leaves it.
62 A Picks up the folded cloth instead and puts it in her hand.
63 A ¶ He goes.
64 A She stands holding the cloth.
65 A ¶ Then she takes off the apron, and folds it, and lays it on the board where the shirt had been.

### SCENE s00234 | EXT. SHELLED FARMHOUSE COURTYARD, NORMANDY - DAWN
Detected names (may be incomplete or contain aliases): ZEKE, MATTHIAS-ODUYA, PRIVATE COLM BRANNIGAN-VOSS, RAFA, DELGADO-HOLM
* 1 A ¶ Mist.
* 2 A Broken tile.
* 3 A A dead cow on its side, bloated.
4 A ¶ Three soldiers crouch behind a collapsed wall.
5 A ¶ SERGEANT EZEKIEL "ZEKE" MATTHIAS-ODUYA (30s, helmet netted, chewing nothing) peers over the stones.
6 A ¶ Beside him, PRIVATE COLM BRANNIGAN-VOSS (19, rifle too big, freckles) breathes through his mouth.
7 A ¶ Behind them, CORPORAL RAFAELA "RAFA" DELGADO-HOLM (20s, radio on her back, steady hands) checks her sidearm.
8 D ZEKE: Quiet. Too quiet.
9 D COLM: You say that every time, Sarge.
10 D ZEKE: It's true every time.
11 D RAFA: Barn's clear. House is clear. Nothing on the ridge.
12 D ZEKE: Then why's the cow dead?
13 D RAFA: Shell.
14 D ZEKE: Which shell?
15 D COLM: Ours?
16 D ZEKE: Maybe.
* 17 A ¶ A bird lands on the cow.
* 18 A Pecks.
* 19 A Leaves.
20 D COLM: Corporal Delgado-Holm. Can I ask something?
21 D RAFA: Rafa. Just Rafa.
22 D COLM: Rafa. Why's the radio quiet?
23 D RAFA: Because nobody's talking.
24 D COLM: That's what I mean.
25 D ZEKE: Brannigan. Eyes front.
26 D COLM: Yes, Sarge.
27 A ¶ They wait.
* 28 A A droplet of mist rolls from Zeke's helmet and hits the mud.
29 D RAFA: Sarge. Door.
* 30 A ¶ The farmhouse door, which was shut, is now ajar.
* 31 A A hand-width.
32 D ZEKE (whispering): Colm. Left. Rafa. Right. On three.
33 D COLM: One.
34 D RAFA: Two.
35 A ¶ They rise together, rifles up.
* 36 A ¶ The door swings wide.
* 37 A Out steps a goat.
* 38 A Then a second goat.
* 39 A A third.
40 A ¶ The squad stares.
* 41 A The goats stare back.
42 D COLM: Sarge. Was that the thing?
43 D ZEKE (deadpan): That was the thing.
44 D RAFA: I'm going to be sick.
45 A ¶ She laughs, covering her mouth.
46 A Colm sinks down, giggling.
47 A Zeke slumps against the wall, shoulders shaking.
* 48 A ¶ A whistle in the sky.
* 49 A Rising.
50 A ¶ They all stop laughing at once.
51 D ZEKE: Down!
52 A ¶ They scatter.
* 53 A The first shell lands in the barn.
* 54 A The wall behind them heaves.
* 55 A The goats bolt in three directions.
* 56 A Dust and straw rain over three helmets.
57 A ¶ Rafa pulls Colm flat.
58 A Zeke crawls over both of them.
59 D ZEKE [CONT'D] (shouting): Rafa! Radio!
60 D RAFA: It's dead!
61 D ZEKE: Then pray!
62 D COLM: To who?
63 D ZEKE: The goats!

### SCENE s00235 | INT. RADIO DUGOUT, WESTERN FRONT - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT PHILIPPE ARMAND-DOGBE, RADIO, STRANGER, ALOIS
* 1 A ¶ A timber box dug into clay.
* 2 A A single candle.
* 3 A A field set with a cracked dial.
4 A ¶ LIEUTENANT PHILIPPE ARMAND-DOGBE (20s, mud to the eyebrows, a hole in his left sleeve) crouches over the headset, writing coordinates with a stub of pencil.
* 5 A ¶ Static.
* 6 A Then a faint, courteous voice.
7 D RADIO [V.O.] (distant, crackling): Dugout Seven, this is Battalion. Report.
8 D PHILIPPE (into the mic): Battalion, Dugout Seven. Quiet night. Nothing to report.
9 D RADIO [V.O.]: Copy. Stay warm, Seven.
10 D PHILIPPE: Will do.
11 A ¶ He releases the key.
12 A Stares at the candle.
* 13 A The flame is steady.
* 14 A Too steady.
* 15 A For a long moment the whole dugout seems to hold still.
* 16 A ¶ A scrape at the entrance.
* 17 A The blanket curtain moves.
18 A ¶ A figure ducks in.
19 A A boy in a muddy overcoat with no insignia, holding a tin cup of tea.
20 A He is perhaps sixteen.
21 A He wears no helmet, only a thin smile.
22 D PHILIPPE [CONT'D]: Who are you?
23 A ¶ The boy sets the cup down in front of him.
24 D STRANGER: Tea, sir. Compliments of the other side.
25 A ¶ Philippe doesn't breathe.
* 26 A The pencil rolls off the table.
27 D STRANGER [CONT'D]: They've been listening since Tuesday.
28 D PHILIPPE (very quietly): And you came to tell me?
29 D STRANGER: I came to say they've changed the plan.
30 A ¶ He crosses to the radio, turns the dial one click, and Battalion's voice fades to nothing.
* 31 A Another voice takes its place, in another language, bright and brisk.
32 A ¶ The boy meets Philippe's eyes.
33 A Now he has a name.
34 D ALOIS: My name is Alois, sir. I'd drink the tea.
35 A ¶ Philippe picks up the cup.
36 A His hand does not shake.
37 A He drinks.

### SCENE s00236 | INT. SMALL-TOWN PET FUNERAL PARLOR - DAY
Detected names (may be incomplete or contain aliases): BEA, LANGSTROM-OYELEYE, GERRY, POTTS, HECTOR MWENDA-ABERNATHY, DENNIS
* 1 A ¶ Pastel walls.
* 2 A Little urns on velvet shelves.
* 3 A A framed poster: "Every Goodbye Deserves Dignity."
4 A ¶ BEATRIX "BEA" LANGSTROM-OYELEYE (40s, funeral director, black pencil skirt, too-bright lipstick) stands at a small oak lectern with a sleeping ferret in a tiny casket beside her.
5 A ¶ Seated in the front row, in folding chairs: GERALDINE "GERRY" POTTS (60s, widowed, tissue in fist) and her brother-in-law HECTOR MWENDA-ABERNATHY (60s, loud tie, sunglasses on indoors).
6 D BEA: Friends. We are gathered to honor Nibbles.
7 D GERRY (weeping): Oh, Nibbles.
8 D HECTOR: He was a good ferret.
9 D BEA: He was.
10 D HECTOR: Smelled like a gym bag.
11 D GERRY: Hector!
12 D HECTOR: I'm saying it with love.
13 D BEA: Perhaps we could hold the anecdotes until the reception.
14 D HECTOR: I'm just saying he bit the mailman.
15 D GERRY: He bit the mailman once.
16 D HECTOR: Four times.
17 D GERRY: Twice.
18 D HECTOR: Four. I counted.
19 D BEA (over them): Let us bow our heads.
20 A ¶ They do.
* 21 A A pause.
* 22 A A phone rings, tinny, from Hector's pocket.
23 D HECTOR (answering): Not now, Dennis.
24 D DENNIS [O.S.] (through the phone, blaring): Hector, did you tell her about the hamster?
25 D GERRY: What hamster?
26 D HECTOR: Dennis, I'm at a funeral!
27 D DENNIS [O.S.]: Whose?
28 D BEA: Nibbles's.
29 D DENNIS [O.S.]: Oh no. He was a good ferret!
30 D HECTOR: That's what I said!
31 D GERRY: Hector, what hamster?
32 D HECTOR: Nothing! A rumor!
33 D BEA: Ladies, gentlemen, caller, please--
* 34 A ¶ The casket lid pops open.
35 A Nibbles sits up, yawns, stretches.
* 36 A ¶ Silence in every key.
37 D GERRY: He's alive.
38 D HECTOR: He was asleep.
39 D BEA (holding the lectern): It happens.
40 D DENNIS [O.S.]: What happens? Did he come back?
41 A ¶ Hector hangs up.
42 A Gerry scoops the ferret into her arms and sobs with joy.
43 D GERRY: My boy! My Nibbles!
44 D BEA (recovering): I'll prepare a refund.
45 D HECTOR: Keep the flowers.
46 A ¶ Nibbles bites Bea.
47 A She yelps.
48 A Hector nods, satisfied.
49 D HECTOR [CONT'D]: Four times.

### SCENE s00237 | INT. SINKING FISHING TRAWLER, WHEELHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN RUTH ABERNATHY-KOMA, BASTIEN LEFEBVRE-ADEOLA, MAEVE ONWUACHI-DRUMM, COAST GUARD
* 1 A ¶ Water ankle-deep and rising.
* 2 A A lantern swings from the ceiling.
* 3 A Waves slam the hull.
4 A ¶ CAPTAIN RUTH ABERNATHY-KOMA (50s, oilskins, grey braid) grips the wheel.
5 A Her knuckles are white.
6 A ¶ Beside her, deckhand BASTIEN LEFEBVRE-ADEOLA (20s, hood, cut lip) bails with a plastic bucket.
7 A ¶ At the radio, first mate MAEVE ONWUACHI-DRUMM (30s, hands taped, glasses fogged) clutches the handset.
8 D MAEVE (into radio): Mayday, mayday, this is trawler Gallant Heron, taking water, request assistance.
9 D COAST GUARD [V.O.] (garbled): Gallant Heron, say again your position.
10 D MAEVE: Forty-one north, sixty-eight west! Forty-one north!
11 D BASTIEN: How much time?
12 D RUTH: Twenty minutes.
13 D BASTIEN: That's not time. That's a prayer.
14 D COAST GUARD [V.O.]: ...ant Heron... one hour... response...
15 D MAEVE: One hour! We don't have one hour!
16 D RUTH: Maeve. Give me the mic.
17 D MAEVE: They can't hear--
18 D RUTH: Give it to me!
19 A ¶ Maeve hands it over.
* 20 A A wave rocks the boat.
* 21 A The lantern swings.
22 D RUTH [CONT'D] (into radio): Coast Guard, this is Ruth Abernathy. Last transmission. We are abandoning ship in ten minutes. Three souls. Please mark our position.
23 D BASTIEN: Abandoning to what?
24 D RUTH: The raft.
25 D BASTIEN: The raft's been in the shed since March.
26 D RUTH: Then it's had a long rest.
27 D MAEVE: Captain, the pump's dead!
28 D BASTIEN: I'm bailing!
29 D RUTH: Bail faster!
30 D COAST GUARD [V.O.]: ...Heron... flare... fire flare...
31 D MAEVE: Flare! Where's the flare?
32 D BASTIEN: Port locker!
33 D MAEVE: It's underwater!
34 D RUTH: Then swim!
35 A ¶ Maeve dives into the dark water pooled in the corner.
36 A Surfaces gasping.
37 A A bright orange flare in her fist.
38 D MAEVE: Got it!
39 D RUTH: Up top! Go!
40 A ¶ They push through the hatch.
* 41 A The sea comes at them in sheets.
* 42 A Wind grabs the flare, strikes it.
* 43 A Red fire stabs the sky.
* 44 A ¶ Far off, a searchlight swings.
45 A Bastien whoops.
46 D BASTIEN: They see us! They see us!
47 D RUTH (to herself): Slow down, Ruth. Don't thank anyone yet.
* 48 A ¶ The hull groans.
* 49 A A wave lifts them.
* 50 A The searchlight finds their faces.

### SCENE s00238 | EXT. COMMUNITY POOL, DIVING PLATFORM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): PETE, ADEYEMI-LANDRY, BEANPOLE, OKONJO, SUNITA MARCHETTI-DAS, CASPIAN FROST-NKEMELU, ROSALIND, GWENDOLYN TARASOVA
* 1 A ¶ Chlorine light, gold on blue.
* 2 A The ten-meter platform stands over the water like a lighthouse in swim trunks.
3 A ¶ Six teenagers cluster at the top, bare feet on warm concrete.
4 A ¶ PERPETUA "PETE" ADEYEMI-LANDRY, 16, tall and laconic, stretches her calves against the rail.
5 A She does not look down.
6 A ¶ BRIAN "BEANPOLE" OKONJO, 15, adjusts his goggles for the fifth time, lips moving as he rehearses a joke he will never tell.
7 A ¶ SUNITA MARCHETTI-DAS, 16, ponytail wet, picks at a nail.
8 A ¶ CASPIAN FROST-NKEMELU, 17, shirtless, tries very hard to look relaxed.
9 A ¶ The twins ROSALIND and GWENDOLYN TARASOVA, 15, share a towel and a single earbud each.
* 10 A ¶ Wind moves the surface of the pool like a hand smoothing a bedsheet.
11 D PETE: Who's first?
12 D BEANPOLE: Not me.
13 D SUNITA: Not me.
14 D CASPIAN: I'll go.
15 D PETE: You said that last week.
16 D CASPIAN: And last week I almost did.
17 A ¶ The twins exchange a look.
18 A Take the earbuds out in unison.
19 D ROSALIND: We'll go together.
20 D GWENDOLYN (overlapping): We'll go together.
* 21 A ¶ ^
22 A ¶ They step to the edge, hands linked.
23 A Neither speaks.
* 24 A Below, a lifeguard whistles a lazy tune.
25 D SUNITA: Wait. Wait. Don't.
26 D ROSALIND: Why?
27 D GWENDOLYN: Why?
28 D SUNITA: Because after this, it's September.
* 29 A ¶ Silence.
* 30 A Even the wind seems to pause.
31 A ¶ She says it quietly.
32 A They hear it anyway.
33 A ¶ Pete finally looks down.
34 A Her face softens.
35 A She sits on the edge of the platform, legs swinging into the sky.
36 D PETE: Then let's make it a good one.
37 A ¶ Caspian sits beside her.
38 A Beanpole joins them, goggles fogged.
39 A Sunita comes last, close enough that their shoulders touch.
40 A ¶ The twins look at each other once more.
41 A Then, together, they jump.
* 42 A ¶ The splash is distant and silver.
43 A The others lean over to watch the ripples spread outward, ring after ring, until they reach the walls.
44 D BEANPOLE (softly): Okay. Now me.

### SCENE s00239 | EXT. BRIDGE OF BONES OVER THE GREY GORGE - DAWN
Detected names (may be incomplete or contain aliases): AELFWYN THORNBURY, GRIM, OKORO-SHALE, THISTLE-WREN, BROTHER CASSIAN VELLACOTT
* 1 A ¶ A bridge strung between two cliffs, built from the ribs of some long-dead leviathan.
* 2 A Fog fills the gorge below.
* 3 A Mountain wind pulls at cloaks.
4 A ¶ A party of four stands at the near end.
5 A ¶ AELFWYN THORNBURY (30s, ranger, bow across her back, scar through one eyebrow) tests the first rib with her boot.
6 A ¶ GRIMBALD "GRIM" OKORO-SHALE (50s, dwarf-born, braided beard, iron-shod staff) leans on the staff and glares at the fog.
7 A ¶ THISTLE-WREN (late teens, half-fey, hair like dandelion down) hops from foot to foot, humming.
8 A ¶ BROTHER CASSIAN VELLACOTT (40s, wandering monk, wooden prayer beads, travel-worn robe) kneels briefly, touches the stone, rises.
9 D AELFWYN (to the group): We cross single file. Spacing of three paces. Anyone who stumbles, the others hold.
10 D GRIM (muttering): Three paces. As if the fog will respect it.
11 D THISTLE-WREN: It will! I asked it nicely!
12 D AELFWYN: Thistle, you don't ask fog.
13 D THISTLE-WREN: That's why it listens.
14 D CASSIAN (quietly, to Aelfwyn): The ribs are old. Older than the oldest prayer I know.
15 D AELFWYN: Will they hold?
16 D CASSIAN: They have so far.
17 A ¶ Aelfwyn nods.
18 A Steps out onto the bridge.
* 19 A The bone creaks, then settles.
20 A She takes three paces and stops.
21 A Grim follows.
22 A Thistle-Wren follows Grim, humming louder.
23 A Cassian takes the rear, counting his beads.
* 24 A ¶ Halfway across, a gust slams the bridge sideways.
25 A The party freezes.
26 A Thistle-Wren grabs Grim's belt.
27 A Grim drops his staff to the rib to steady himself.
28 A Aelfwyn kneels, one hand on the bone, the other signaling Cassian to hold.
* 29 A The fog thickens until none of them can see more than an arm's length ahead.
30 D GRIM (to himself): Idiot dwarf. Never trust a bridge made of something that died.
31 D CASSIAN (calling): Everyone, breathe. Let the wind pass through you.
32 D THISTLE-WREN: I'm trying! My lungs are very small!
33 D AELFWYN: Quiet, all of you. Listen.
34 A ¶ They listen.
* 35 A Far below, in the white, something large exhales.
36 D THISTLE-WREN (whispering): It's the leviathan.
37 D GRIM: It's dead.
38 D THISTLE-WREN: Its ghost isn't.
39 D CASSIAN (softly): Then we cross as guests.
* 40 A ¶ The wind drops.
* 41 A The fog parts for a moment, revealing the far side: a cairn, a green slope, a thin road winding into pines.
42 D AELFWYN: Move. Now. Quick and quiet.
43 A ¶ They run, three paces apart, bone ringing under their boots like a xylophone of the dead.
44 A Thistle-Wren giggles.
45 A Grim wheezes.
46 A Cassian's beads clack.
47 A Aelfwyn counts, lips tight.
48 A ¶ They reach the far cliff and tumble onto grass.
49 A Grim lies flat, staring at the sky.
50 D GRIM (to the sky): Never again.
51 D THISTLE-WREN: We have to cross back.
52 D GRIM (to himself): I'll sleep here.
* 53 A ¶ Behind them, the bridge sighs and sways.
* 54 A The fog closes over it like a lid.
55 D CASSIAN (to the group): We should keep moving. The road is long.
56 D AELFWYN (offering her hand to Grim): Up, old friend.
57 A ¶ He takes it.
58 A She hauls him upright.
59 A The four stand in a row, looking down the road.
60 D THISTLE-WREN: Where does it go?
61 D AELFWYN: Wherever we go.
62 A ¶ They start walking.
* 63 A The wind follows at their heels, gentle now, almost apologetic.

### SCENE s00240 | INT. OFFICE PARK CONFERENCE ROOM "SERENITY" - MORNING
Detected names (may be incomplete or contain aliases): GARETH PLUMLEY-ADEBAYO, IFE, KALUZA-BRENNER, DEZ, MACALLISTER-TRAN, PRUDENCE LOCKHART-OSEI, WALLY, ZIELINSKI-MAHMOUD, HETTY, VASQUEZ-LINDGREN
* 1 A ¶ Glass walls.
* 2 A A whiteboard reading "Q3 SYNERGY LEVERAGE."
* 3 A A bowl of fruit nobody touches.
4 A ¶ Six employees sit around a long table.
5 A ¶ GARETH PLUMLEY-ADEBAYO (40s, regional vice president, loud socks) stands at the head, marker raised.
6 A ¶ IFEOMA "IFE" KALUZA-BRENNER (30s, product lead) types without looking at the keyboard.
7 A ¶ DESMOND "DEZ" MACALLISTER-TRAN (20s, intern, over-ironed shirt) holds a notebook like a hymnal.
8 A ¶ PRUDENCE LOCKHART-OSEI (50s, compliance, red glasses) keeps her palms flat on the table.
9 A ¶ WALTER "WALLY" ZIELINSKI-MAHMOUD (60s, facilities, tool belt) sits slightly apart, eating an apple.
10 A ¶ HENRIETTA "HETTY" VASQUEZ-LINDGREN (30s, accountant) stares at the clock.
11 D GARETH: Okay, team. Quick check-in. Ife, how are we feeling?
12 D IFE: Aligned.
13 D GARETH: Love that. Dez?
14 D DEZ: Also aligned, sir.
15 D GARETH: Call me Gareth.
16 D DEZ: Yes, Mr. Plumley-Adebayo.
17 D GARETH: Gareth.
18 D DEZ: Gareth, sir.
19 D PRUDENCE: Gareth, before we go further, I have to note that the budget memo is unsigned.
20 D GARETH: Prudence, Prudence, Prudence.
21 D PRUDENCE: That's my name.
22 D GARETH: It will be signed.
23 D HETTY: By whom?
24 D GARETH: By... us.
25 D WALLY (chewing): Nobody signs anything in this building. I've been here thirty years.
26 D GARETH: Wally, great energy.
27 D WALLY: It's an apple.
28 D IFE: Gareth, the numbers--
29 D GARETH: The numbers are flexible, Ife.
30 D HETTY: Gareth, the numbers are literally negative three million.
31 D GARETH: Hetty, what a strong, powerful negative.
* 32 A ¶ A beat.
* 33 A The room hums.
34 A Dez writes "powerful negative" in his notebook and underlines it.
35 D PRUDENCE: Gareth, this is a legal exposure.
36 D GARETH (brightly): Team, let's pivot to appreciation.
37 A ¶ He claps.
38 A Nobody joins.
39 A Walter finishes his apple.
40 A Places the core on the table, precisely in the center of the whiteboard's reflection.
41 D WALLY: I'll tell you what I appreciate. The sprinklers work.
42 A ¶ He takes a lighter from his tool belt and holds it under the smoke detector.
* 43 A ¶ The sprinklers burst.
* 44 A Water pours over six faces.
45 A Gareth stands at the head, marker raised, dripping.
46 D GARETH (calmly): Great. This is great.

### SCENE s00241 | INT. PRIVATE LIBRARY OF A COUNTRY HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): SIR AUGUSTUS FERRIDAY-OKONKWO, LADY PHILOMENA FERRIDAY, BARNABY CHATTERJEE-WHITLOCK, SAMUEL OKAFOR-LYNCH
* 1 A ¶ Firelight.
* 2 A Leather spines.
* 3 A A storm throwing rain at the leaded windows.
4 A ¶ Four people sit in wing chairs around a low table: a decanter, a deck of cards, a bowl of walnuts.
5 A ¶ SIR AUGUSTUS FERRIDAY-OKONKWO (70s, silver mustache, velvet jacket) holds a glass of port and a closed fan of cards.
6 A ¶ His niece LADY PHILOMENA FERRIDAY (30s, emerald gown, pearl choker) taps a walnut against the table.
7 A ¶ Their guest DR. BARNABY CHATTERJEE-WHITLOCK (50s, rumpled tweed, wire glasses) studies his hand.
8 A ¶ The butler, MR. SAMUEL OKAFOR-LYNCH (60s, impeccable, immaculately still), stands behind the fireplace.
* 9 A ¶ Thunder rolls.
10 A The cards are placed one by one.
11 D SIR AUGUSTUS: Your play, Doctor.
12 D DR. CHATTERJEE-WHITLOCK: Patience, Sir Augustus.
13 A ¶ He lays a card.
14 A Smiles faintly.
15 D PHILOMENA: You're stalling.
16 D DR. CHATTERJEE-WHITLOCK: I'm thinking.
17 D PHILOMENA: Same thing.
18 D SIR AUGUSTUS: Samuel, more port.
19 D MR. OKAFOR-LYNCH: Of course, Sir Augustus.
20 A ¶ He glides forward, fills the glass, glides back.
* 21 A The fire pops.
22 D PHILOMENA: Uncle, the will.
23 D SIR AUGUSTUS: Not tonight.
24 D PHILOMENA: You said tonight.
25 D SIR AUGUSTUS: I said some night.
26 D DR. CHATTERJEE-WHITLOCK: It's a sensitive subject, my dear.
27 D PHILOMENA: It's my inheritance.
28 D SIR AUGUSTUS: It's mine until I'm dead.
* 29 A ¶ Another thunderclap.
* 30 A The lights flicker.
* 31 A The room dips to gold, then to near-black.
* 32 A A glass shatters.
33 A Someone gasps.
* 34 A ¶ The lights return.
35 A ¶ Sir Augustus is slumped in his chair, one hand clutching the arm, the other still gripping the port.
36 A His mustache is wet.
37 A His eyes are open.
38 A He does not breathe.
39 A ¶ Philomenna rises first, knocking the walnut bowl over.
40 A Chatterjee-Whitlock is already at the old man's side with two fingers on the throat.
41 A Okafor-Lynch has not moved from the fireplace.
42 D PHILOMENA: Uncle?
43 D DR. CHATTERJEE-WHITLOCK (quietly): He's gone.
44 D PHILOMENA: That's not possible. He was just talking.
45 D DR. CHATTERJEE-WHITLOCK: It happens quickly.
46 A ¶ She looks at the decanter.
47 A At the butler.
48 A At the doctor.
49 A She picks up the port, sniffs it.
50 D PHILOMENA: Bitter almond.
51 D DR. CHATTERJEE-WHITLOCK: Philomena, don't touch--
52 D PHILOMENA: Samuel poured it.
53 D MR. OKAFOR-LYNCH: Madam, I poured what Sir Augustus requested.
54 D PHILOMENA: You poured it twice.
55 D MR. OKAFOR-LYNCH: Once for the glass. Once for his health.
56 A ¶ She lunges at him.
57 A He doesn't flinch.
58 A The doctor catches her arm.
59 A Chatterjee-Whitlock holds her back as she strains, trembling, at the butler.
60 D PHILOMENA: You killed him!
61 D MR. OKAFOR-LYNCH (softly): Madam, I loved him for forty years.
* 62 A ¶ The storm breaks.
* 63 A Rain hammers the glass.
64 A For the first time, Okafor-Lynch's composure cracks.
65 A He reaches into his waistcoat and withdraws a folded paper.
66 D MR. OKAFOR-LYNCH [CONT'D]: He wrote this himself, this afternoon. It names the poison. And the man who put it in the decanter.
67 A ¶ He hands it to the doctor.
68 A The doctor reads.
69 A His face drains of color.
70 D DR. CHATTERJEE-WHITLOCK (whispering): I didn't--
71 A ¶ He steps back.
72 A Philomena stares at him.
* 73 A The fire collapses into embers.

### SCENE s00242 | EXT. LIFEBOAT ADRIFT, SOUTHERN OCEAN - NOON
Detected names (may be incomplete or contain aliases): CAPTAIN ISOLDE VANDERHOEK-MWAMBA, ENSIGN REMY LAFAYETTE-OSUNDE, MAGS, ODELL-PRZYBYLSKI
* 1 A ¶ A grey swell.
* 2 A A hull the colour of old teeth.
* 3 A The sun a dull coin behind cloud.
4 A ¶ Three figures crowd the boat.
5 A CAPTAIN ISOLDE VANDERHOEK-MWAMBA (50s, cracked lips, officer's cap tied under her chin) sits at the tiller, jaw tight.
6 A ¶ Across from her, ENSIGN REMY LAFAYETTE-OSUNDE (20s, one arm in a makeshift sling, blistered nose) holds a half-empty water tin in his good hand.
7 A ¶ In the bow, the ship's cook, MARGUERITE "MAGS" ODELL-PRZYBYLSKI (60s, apron still on, salt in her eyebrows), stares at the horizon with her chin on her knees.
8 D REMY: Captain, the ration.
9 D ISOLDE: Two sips. Each.
10 D REMY: Last night it was three.
11 D ISOLDE: Last night I thought we'd be rescued by today.
12 D MAGS (not turning): That's what I thought yesterday.
13 D REMY: Mags, don't.
14 D MAGS: I'm only saying.
15 D ISOLDE: Pass the tin.
16 A ¶ Remy hands it over.
17 A She takes a sip, wipes her mouth, passes it on.
18 A Mags takes hers without looking.
19 D MAGS: Captain, how long do you give us?
20 D ISOLDE: I don't give things.
21 D MAGS: How long do you think?
22 D ISOLDE: Three days. Four if the rain comes.
23 D REMY: And if it doesn't?
24 D ISOLDE: Then we'll know.
* 25 A ¶ Silence.
* 26 A The swell lifts them, lowers them.
27 D MAGS: There.
28 D REMY: Where?
29 D MAGS: There! A light!
30 A ¶ Remy scrambles up, rocking the boat.
31 A Isolde grabs the gunwale.
* 32 A A speck of white glints on the horizon.
33 D REMY: Ship. It's a ship.
34 D ISOLDE: It's a glare.
35 D REMY: It's moving!
36 D MAGS: It's moving!
37 D ISOLDE (quietly): It's a gull.
* 38 A ¶ The speck rises, banks, and becomes a seabird, wheeling above the waves.
* 39 A It cries once and flies away from them.
40 A ¶ Remy sinks back.
41 A Mags laughs, a cracked little sound.
42 A Then she cries, then she laughs again.
43 D ISOLDE: Mags.
44 D MAGS: I know.
45 D ISOLDE: Pass the tin.
46 D MAGS: It's empty.
47 D ISOLDE: Pass it anyway.

### SCENE s00243 | INT. FAMILY KITCHEN, SUBURBAN HOUSE - EVENING
Detected names (may be incomplete or contain aliases): GRANDMOTHER ODETTE ABERNATHY-KWAME, DERRICK ABERNATHY, PRIYA RAGHAVAN-ABERNATHY, JUNE
* 1 A ¶ Steam on the windows.
* 2 A A turkey, half-carved.
* 3 A Mismatched chairs around a table crammed with side dishes.
4 A ¶ GRANDMOTHER ODETTE ABERNATHY-KWAME (70s, cardigan, unshakable) sits at the head, fork poised.
5 A ¶ Her son DERRICK ABERNATHY (40s, rolled sleeves, carving knife) stands over the bird.
6 A ¶ His wife PRIYA RAGHAVAN-ABERNATHY (40s, apron, flour on her cheek) refills the gravy boat.
7 A ¶ Their teenager JUNIPER "JUNE" ABERNATHY (16, black nail polish, phone face down) slouches in her chair.
8 A ¶ Their youngest, MILO ABERNATHY (7, napkin tucked in his collar), kicks the table leg.
9 D ODETTE: Derrick, the breast is for guests.
10 D DERRICK: Mother, we are the guests.
11 D PRIYA: Derrick, the potatoes.
12 D DERRICK: Which potatoes?
13 D PRIYA (overlapping): The mashed ones.
14 D JUNE (overlapping, to Priya): The ones I made.
* 15 A ¶ ^
16 D ODETTE: June, put your phone away.
17 D JUNE: It's face down.
18 D ODETTE: It's still there.
19 D MILO: Can I have a roll?
20 D PRIYA: Say please.
21 D MILO: Please roll.
22 D DERRICK (to the room): Okay, everyone, a toast.
* 23 A ¶ Silence.
24 A Glasses are raised.
25 A Odette's is not.
26 D DERRICK [CONT'D]: To family. To love. To the people at this table.
27 D PRIYA: To the person who bought the wine.
28 D DERRICK: That was me.
29 D PRIYA: It was me.
30 D DERRICK: It was a joint purchase.
31 D JUNE (muttering): It was a Costco purchase.
32 D MILO: I like Costco.
33 D ODETTE: Milo, eat.
34 D MILO: I'm waiting for the toast to be over.
35 D DERRICK: It's over.
36 D MILO: Then why is Grandma not drinking?
37 A ¶ All heads turn to Odette.
38 A She holds her glass, then sets it down carefully.
39 D ODETTE: Because I have news.
40 D DERRICK: Mother?
41 D PRIYA: Odette?
42 D ODETTE (to all of them): I sold the house.
* 43 A ¶ Silence.
* 44 A A gravy boat drips.
45 A Milo drops his roll.
46 D JUNE (whispering): Wow.
47 D DERRICK: Mother, you can't--
48 D ODETTE: I already did.
49 D PRIYA (to Derrick): Let her finish.
50 D ODETTE: I'm moving to Lisbon. In March.
51 D MILO: Is that far?
52 D ODETTE: Very.
53 D MILO: Can I come?
54 D ODETTE: Eat your roll first.
55 A ¶ Derrick sits slowly.
56 A Priya hands him the potatoes.
57 A He takes a spoonful, stares at it, and laughs once.

### SCENE s00244 | INT. ST. CLEMENT'S HOSPITAL, TRAUMA BAY THREE - NIGHT
Detected names (may be incomplete or contain aliases): ANWEN OKOYE-FITZGERALD, NURSE TADEUSZ MBEKI-LORENZ, PRIYANKA HALVORSEN-NWOSU, DISPATCH
* 1 A ¶ Overhead lights.
* 2 A Monitors beep.
* 3 A A body on a gurney under blue drapes.
4 A ¶ DR. ANWEN OKOYE-FITZGERALD (40s, surgeon, scrubs, mask pulled down) works at the bedside.
5 A Beside her, NURSE TADEUSZ MBEKI-LORENZ (30s, calm, gloved) hands her a clamp.
6 A At the foot of the gurney, RESIDENT DR. PRIYANKA HALVORSEN-NWOSU (20s, new, eyes huge) watches, clipboard clutched.
* 7 A ¶ On the wall, a speaker crackles.
8 D DISPATCH [V.O.]: Trauma Three, ETA on the second unit, four minutes.
9 D ANWEN: Copy. We're stable.
10 D TADEUSZ: Pressure's dropping.
11 D ANWEN: Fluids?
12 D TADEUSZ: Wide open.
13 D ANWEN: Priyanka, what's your call?
14 D PRIYANKA: Um. Blood?
15 D ANWEN: Correct. Type?
16 D PRIYANKA: O negative. Universal.
17 D ANWEN: Go get four units.
18 D PRIYANKA: Right now?
19 D ANWEN: Yesterday.
20 A ¶ Priyanka bolts through the door.
21 A Tadeusz watches her go.
22 D TADEUSZ: She'll be fine.
23 D ANWEN: They all say that.
24 D TADEUSZ: She will be.
25 D ANWEN: Pressure.
26 D TADEUSZ: Eighty over fifty.
27 D ANWEN: Pulse?
28 D TADEUSZ: One-thirty.
29 D ANWEN: Pack it. Pack it, pack it.
30 A ¶ He packs.
31 A She presses.
* 32 A The monitor rises, falters, steadies.
33 D DISPATCH [V.O.]: Trauma Three, update. Second unit is reporting a child on board. Pediatric trauma, eight years old.
34 A ¶ Anwen and Tadeusz exchange a look.
35 D ANWEN: Open Bay Four.
36 D TADEUSZ: Dr. Okoye-Fitzgerald, we're short.
37 D ANWEN: Then call Reyes in from the cafeteria.
38 D TADEUSZ: She's off.
39 D ANWEN: Call her anyway.
40 A ¶ He is already dialing.
* 41 A The door bursts open.
42 A Priyanka, breathless, carries a cooler of blood bags.
43 D PRIYANKA: Four units, O negative.
44 D ANWEN: Good. Hang two. Then you're with me in Four.
45 D PRIYANKA: The child?
46 D ANWEN: The child.
47 A ¶ Priyanka stares.
48 A Then she sets down the cooler, rolls up her sleeves, and nods once.
49 D ANWEN [CONT'D] (softly): You'll be fine.
50 D PRIYANKA: They all say that.
51 A ¶ Anwen almost smiles.
52 A Pulls up her mask.
53 A Out the door.

### SCENE s00245 | INT. GLASSBLOWER'S FURNACE ROOM, VENICE - NIGHT, 1743
Detected names (may be incomplete or contain aliases): MASTER ZORZI CAMPOSAMPIERO, ISABELLA MOLIN-OKAFOR
* 1 A ¶ Orange glow.
* 2 A Pipes and pontils on racks.
* 3 A Heat that bends the air.
4 A ¶ MASTER ZORZI CAMPOSAMPIERO (60s, leather apron, burn-scarred forearms) shapes a molten bulb at the furnace mouth.
5 A Slow turn.
6 A Slow breath.
* 7 A ¶ The door opens.
* 8 A Rain.
9 A ¶ ISABELLA DA MOLIN-OKAFOR (30s, travelling cloak, a velvet bag pulled tight against her chest) stands dripping.
10 D ZORZI: Closed.
11 D ISABELLA: I know.
12 D ZORZI: Then why are you here?
13 D ISABELLA: The Council sends their regards.
14 A ¶ He stops turning.
* 15 A The glass sags.
16 A He rights it.
17 D ZORZI: Tell the Council I have nothing to say.
18 D ISABELLA: They'd like the formula.
19 D ZORZI: They'd like the moon.
20 A ¶ She crosses to the bench.
21 A Sets the velvet bag down.
* 22 A It clinks.
23 D ISABELLA: This is yours.
24 D ZORZI: What is it?
25 D ISABELLA: A sample. Of what you made last winter.
26 A ¶ He glances at the bag.
27 A Then at her.
28 D ZORZI: You stole it.
29 D ISABELLA: I borrowed it.
30 D ZORZI: From my own workshop.
31 D ISABELLA: From your apprentice.
32 A ¶ His jaw works.
* 33 A The furnace roars.
* 34 A Her cloak steams.
35 D ZORZI: Giacomo.
36 D ISABELLA: He's very young.
37 D ZORZI: He's a fool.
38 D ISABELLA: He's frightened.
39 A ¶ Zorzi sets down the pipe.
40 A Turns.
41 A Picks up the long iron tongs.
42 D ISABELLA [CONT'D]: Master Zorzi.
43 D ZORZI: Open the bag.
44 A ¶ She does.
* 45 A Inside: a glass bird, translucent blue, wings spread.
46 A She lifts it into the glow.
* 47 A It flickers like a pulse.
48 D ISABELLA: The Council thinks it's witchcraft.
49 D ZORZI: It's chemistry.
50 D ISABELLA: They'll burn the shop.
51 D ZORZI: They'll burn me first.
52 A ¶ She sets the bird on the bench.
53 D ISABELLA: I could leave it here. Tell them you destroyed it.
54 D ZORZI: And Giacomo?
55 D ISABELLA: Gone to Padua.
56 A ¶ Zorzi laughs, short, ugly.
57 A He lifts the tongs, steps toward her.
58 A She doesn't move.
59 A He raises the iron, and the bird glitters between them.
60 A ¶ With one stroke, he smashes it.
* 61 A Blue shards fly.
62 A Isabella flinches.
63 A Zorzi and Isabella both stand in the sudden silence, glass sparks drifting like fireflies.
64 D ZORZI: Tell the Council it's ash.
65 D ISABELLA: They'll want proof.
66 D ZORZI: Then bring them the furnace.
67 A ¶ He turns back to the fire.
68 A After a long moment she picks up a single shard, slips it into her cloak, and goes out into the rain.

### SCENE s00246 | INT. CLOCKMAKER'S SHOP, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MARGOT, ILLINGWORTH-BASSEY, VICTOR OKONKWO-REYES, DEL, ARMSTRONG-KATZ, SOL, QUILLFEATHER, ALISTAIR PEMBERTON-SHAW
* 1 A ¶ Dozens of clocks ticking out of step.
* 2 A A vault door, ajar.
3 A ¶ Four thieves crowd the doorway in dark clothes.
4 A ¶ MARGOT "THE MOUSE" ILLINGWORTH-BASSEY (40s, crew leader) holds a stopwatch.
5 A ¶ VICTOR OKONKWO-REYES (30s, safecracker) presses a stethoscope to the vault.
6 A ¶ DELPHINE "DEL" ARMSTRONG-KATZ (20s, driver) shifts on her feet.
7 A ¶ SOLOMON "SOL" QUILLFEATHER (50s, lookout, bowler hat) peers through the shutters.
8 D MARGOT (to the crew): Ninety seconds. Everyone know their job?
9 D SOL: I watch.
10 D DEL: I drive.
11 D VICTOR: I listen.
12 D MARGOT: Good. Victor, tumblers.
13 D VICTOR (muttering): Come on, you old beauty.
* 14 A ¶ A click.
* 15 A Another.
* 16 A The door swings wide.
* 17 A Inside: velvet cases, empty.
18 D MARGOT: Empty.
19 D VICTOR: Empty?
20 D DEL: Margot--
21 D MARGOT: Quiet.
* 22 A ¶ Every clock in the shop strikes midnight at once.
* 23 A A cacophony of chimes.
24 A ¶ A figure steps out from between the grandfather clocks: ALISTAIR PEMBERTON-SHAW (60s, nightshirt, shotgun, mildly annoyed).
25 D ALISTAIR: Evening. I moved it Tuesday.
26 A ¶ The crew freezes.
27 A Sol removes his bowler hat.
28 D SOL: Tuesday?
29 D ALISTAIR: Tuesday.
30 D MARGOT (to herself): Of course it was Tuesday.
31 A ¶ Alistair lowers the shotgun, sighs.
32 D ALISTAIR: There's tea. Stay for tea.

### SCENE s00247 | INT. VILLAGE SCHOOLHOUSE KITCHEN, KARAKORAM FOOTHILLS - EARLY MORNING
Detected names (may be incomplete or contain aliases): GRANDMOTHER ZAINAB QURESHI-ABBASOV, FARIDA QURESHI, SAMINA QURESHI, TIMUR QURESHI, LAILA, ELIAS HARTMANN-DOGAN
* 1 A ¶ Mud-brick walls.
* 2 A A copper kettle.
* 3 A Pale light through a slit window, catching flour in the air like small stars.
4 A ¶ Five members of one family move around a low table.
* 5 A Bread is being made.
6 A ¶ GRANDMOTHER ZAINAB QURESHI-ABBASOV (80s, headscarf the color of dried apricots) kneads dough with enormous patience.
7 A ¶ Her daughter-in-law FARIDA QURESHI (50s, sleeves rolled) shapes loaves, one hand quick on the dough, one hand on the baby wrapped at her back.
8 A ¶ Her granddaughter SAMINA QURESHI (17, exam papers poking from her satchel) lays out clay plates.
9 A ¶ Her grandson TIMUR QURESHI (12, ink on his fingers) feeds the clay oven with dry twigs.
10 A ¶ Her youngest, a girl of six called LAILA, lingers at the door, watching her feet.
11 D ZAINAB: Samina, the salt.
12 A ¶ Samina brings it.
13 A Zainab pinches some, crushes it between her fingers, adds it to the dough.
14 D TIMUR: The oven's ready, Dadi.
15 D ZAINAB: Is it? Show me.
16 A ¶ He holds out his palm to the oven mouth.
17 A Holds it there.
18 A Yanks it back.
19 D ZAINAB [CONT'D]: Ready.
20 A ¶ Farida slides the first loaf onto the paddle.
* 21 A The smell rises, warm and sweet.
22 A Laila steps in.
23 D LAILA: Can I help?
24 D FARIDA: Of course.
25 A ¶ She hands Laila a small ball of dough.
26 A Laila kneads it clumsily.
* 27 A ¶ A knock at the door.
28 A Everyone looks up.
29 A ¶ A stranger steps in, shaking snow from his shoulders: MR. ELIAS HARTMANN-DOGAN (40s, regional inspector, leather satchel, wet boots), blinking in the warm light.
30 D ELIAS: Forgive me. I'm looking for the headmistress.
31 D SAMINA: That's my mother.
32 D FARIDA (wiping her hands): Mr. Hartmann-Dogan. We did not expect you until Thursday.
33 D ELIAS: The road was clear.
34 D ZAINAB: The road is never clear.
35 D ELIAS: It was today.
36 A ¶ Zainab studies him a long moment.
37 A Then cuts a heel of bread, hands it to him.
38 D ZAINAB: Eat first. Papers later.
39 A ¶ He bites.
40 A His shoulders drop.
41 D ELIAS: This is extraordinary.
42 D SAMINA: It's Dadi's.
43 D ZAINAB: It is everyone's.
* 44 A ¶ The baby coos.
45 A Laila giggles.
46 A Timur feeds the oven another twig.
* 47 A The kettle begins, finally, to sing.

### SCENE s00248 | INT. ABANDONED CARNIVAL FUNHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): MARI, ENGELBRECHT-OJO, TREVOR KAPOOR-LINDSTROM, WINNIE, BAPTISTE-HOLLOWAY, CHILD
* 1 A ¶ Cracked mirrors.
* 2 A Painted clown faces peeling off plywood.
* 3 A A rusted carousel horse hangs from a wire.
* 4 A Wind whistles through broken boards.
5 A ¶ Three friends pick through the dark with flashlights.
6 A ¶ MARISOL "MARI" ENGELBRECHT-OJO (20s, hoodie, nervous laugh) leads.
7 A She points her beam down a narrow corridor lined with warped glass.
8 A ¶ TREVOR KAPOOR-LINDSTROM (20s, camera on a strap, bravado) follows, filming.
9 A ¶ WINIFRED "WINNIE" BAPTISTE-HOLLOWAY (20s, backpack, serious) brings up the rear, checking a paper map.
10 D TREVOR: Okay, so, this is the Hall of Mirrors. Day one of the haunted-places series. Say hi, Mari.
11 D MARI: Hi.
12 D TREVOR: Say hi, Winnie.
13 D WINNIE: I'm reading.
14 D TREVOR: Reading what?
15 D WINNIE: The map. It says there's an exit through the carousel.
16 D MARI: Then why are we in the funhouse?
17 D TREVOR: Content.
18 D WINNIE: Idiot.
19 D TREVOR: Be nice. I'm broadcasting.
20 D MARI (over his shoulder): Hold on. Trevor.
21 D TREVOR: What?
22 D MARI: There's three of us.
23 D TREVOR: Yes.
24 D MARI: In the mirror there's four.
25 A ¶ They stop.
26 A Mari points.
* 27 A In a cracked panel, three flashlight beams.
* 28 A And a fourth, steady, a pale light that doesn't match any of them.
29 D WINNIE: It's a reflection.
30 D MARI: Of what?
31 D TREVOR: Whoa, whoa. Everyone breathe.
32 A ¶ They turn in a slow circle.
* 33 A The fourth light is gone.
* 34 A The mirror shows only themselves.
35 D TREVOR [CONT'D] (quiet): Cool. That was cool.
36 D WINNIE: We leave. Now.
37 D MARI: Yes. Yes. Let's go.
38 A ¶ They back down the corridor, shoulder to shoulder.
* 39 A A laugh echoes.
* 40 A Not theirs.
* 41 A Light and high, a child's.
42 A ¶ They sprint.
* 43 A Boots clatter.
* 44 A A mirror shatters, then another, one after another, as if a hand were sweeping through.
45 A ¶ Trevor drops the camera.
* 46 A It spins on the floor, filming the ceiling.
47 A Winnie grabs Mari's wrist.
48 A Mari grabs Trevor's collar.
49 A They crash through a painted door into the carousel hall.
* 50 A ¶ The carousel horses are all turned to face them.
51 D TREVOR: No.
52 D MARI: Don't move.
53 D WINNIE: Don't look.
* 54 A ¶ The music box starts.
* 55 A Slow, wheezing.
56 D MARI (whispering): Winnie, the map. The exit.
57 D WINNIE: Behind the red horse.
58 D MARI: Which is the red horse?
59 A ¶ They all look.
* 60 A Twenty horses.
* 61 A Eighteen are white.
* 62 A One is black.
* 63 A One is red.
* 64 A ¶ The red horse blinks.
65 A ¶ They scream.
66 A In unison.
67 A A single voice that rattles the roof.
* 68 A ¶ Then the music stops, as though a hand had pressed it silent.
* 69 A ¶ A voice, close, warm, from just behind the three of them.
70 D CHILD [O.S.]: You came back.
71 A ¶ Mari whips around.
* 72 A Nobody there.
73 D MARI (under her breath): We've never been here.
74 D CHILD [O.S.]: You came back.
75 A ¶ Trevor drops to his knees, scooping the camera.
* 76 A Its red light blinks.
77 D TREVOR: Please. Please. We'll leave. We'll never--
78 A ¶ The voice laughs.
79 D CHILD [O.S.]: Say it again.
80 D TREVOR: We'll leave.
81 D CHILD [O.S.]: Say it with love.
82 D WINNIE (sudden, firm): No.
83 A ¶ She stands.
84 A She faces the dark where the voice is.
85 A Raises her flashlight, and aims it at the red horse.
86 D WINNIE [CONT'D]: We're not saying anything. We're leaving. You can have the funhouse.
* 87 A ¶ Silence.
* 88 A The wind stops.
* 89 A ¶ Then the red horse, slowly, turns its head away.
90 D WINNIE [CONT'D] (to the others): Walk. Don't run.
91 A ¶ They walk.
* 92 A Past the horses.
* 93 A Past the dead ticket booth.
* 94 A Past the gate.
* 95 A ¶ Behind them, the music box begins again.
* 96 A Soft.
* 97 A Almost happy.

### SCENE s00249 | EXT. HIGH PLATEAU, BURNED FOREST - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, TALL MAN, WOMAN, ELIO
* 1 A ¶ Black trunks.
* 2 A Ash like grey snow.
* 3 A A crippled pickup with its hood up.
4 A ¶ A man sits on its bumper, bandaging his hand.
5 A Another stands at the tree line, binoculars up.
6 A A third crouches by the tailgate, counting cans.
7 D STRANGER: We can't stay.
8 D TALL MAN: We can't leave.
9 D STRANGER: We don't have fuel.
10 D TALL MAN: We have legs.
11 D WOMAN (from the tailgate): We have four cans of beans and no opener.
12 D STRANGER: Then we use the knife.
13 D WOMAN: It's your knife.
14 D STRANGER: I know whose knife it is.
15 A ¶ The tall man lowers the binoculars.
16 D TALL MAN: Smoke. East ridge.
17 D WOMAN: How far?
18 D TALL MAN: Six miles.
19 D STRANGER: It could be anyone.
20 D TALL MAN: It could be the fire again.
21 D WOMAN: It could be help.
22 D STRANGER: It could be them.
* 23 A ¶ A silence.
24 A They look at each other.
25 D WOMAN: You never told us your name.
26 D STRANGER: Elio.
27 D WOMAN: Elio what?
28 D ELIO: Just Elio.
29 D TALL MAN: Okay, Just Elio. Here's what we do.
30 D ELIO (overlapping): We split.
31 D WOMAN (overlapping): We stay together.
* 32 A ¶ ^
33 D TALL MAN (overlapping both): We go together, east, now!
* 34 A ¶ A hiss in the trees.
35 A All three freeze.
* 36 A Branches crack.
* 37 A A shape moves in the ash, low and fast.
38 D ELIO: Run!
* 39 A ¶ The truck door slams.
40 A The woman dives.
41 A The tall man fires.
* 42 A A burst of gunshot echoes across the burned plateau, and the pale smoke rises, higher, higher.

### SCENE s00250 | INT. ORBITAL SALVAGE TUG "LONG PATIENCE," CARGO BAY - SHIP NIGHT
Detected names (may be incomplete or contain aliases): OKSANA REYNOLDS-ADEBOYE, COMMS, SIMEON AKINTOLA-VEGA
* 1 A ¶ Strip lighting.
* 2 A Mag-boots clank.
* 3 A Crates stacked in nets.
* 4 A A viewport shows a wreck turning slowly against the stars.
5 A ¶ OKSANA REYNOLDS-ADEBOYE (40s, engineer, grease up to the elbows) crouches over an open hatch, a wrench in one hand.
6 A She does not look up when the intercom hisses.
7 D COMMS [V.O.]: Engineer. Bridge. Report.
8 A ¶ She keeps working.
9 A Turns a bolt.
10 A Another.
11 D OKSANA: Still on it.
12 D COMMS [V.O.]: Captain wants a status on the coupling.
13 D OKSANA: Tell the Captain it's a coupling.
14 D COMMS [V.O.]: Copy.
15 A ¶ She sets the wrench down.
16 A Wipes her hands on her thighs.
* 17 A From a vent behind her, a soft click.
18 A ¶ She turns slowly.
* 19 A Nothing.
20 A But she picks the wrench back up.
21 A ¶ A second figure floats in from the airlock: SIMEON AKINTOLA-VEGA (30s, flight tech, jumpsuit unzipped to the chest).
22 A He anchors himself with one boot to a crate and stares at her.
23 D SIMEON: You okay?
24 D OKSANA: Fine.
25 D SIMEON: You've been down here nine hours.
26 D OKSANA: It's a big coupling.
27 D SIMEON: Captain says come up.
28 D OKSANA: Captain says what?
29 D COMMS [V.O.]: Engineer, Captain says come up. Immediately.
30 D OKSANA (to the intercom): Why?
31 D COMMS [V.O.]: Something on the scanner. Something near the wreck.
32 A ¶ Oksana and Simeon look at each other.
33 A She tightens her grip on the wrench.
34 A He zips his jumpsuit to the collar.
35 D SIMEON: What is it?
36 D COMMS [V.O.]: Unknown. Moving. Matching our heading.
37 D OKSANA: How close?
38 D COMMS [V.O.]: Twelve kilometers. And closing.
39 A ¶ She lets the wrench drift.
* 40 A It spins slowly in front of her, catching the light.
41 D SIMEON: I'm going up.
42 D OKSANA: Wait.
43 A ¶ He waits.
44 A Her eyes go to the viewport.
* 45 A The wreck rotates; behind it, a shape too regular to be debris.
46 A ¶ She says nothing.
47 A Neither does he.
48 A They float side by side.
49 D COMMS [V.O.]: Engineer? Tech? Respond.
50 A ¶ Simeon opens his mouth.
51 A Closes it.
52 A Oksana presses the intercom.
53 D OKSANA (evenly): We're coming up.
54 A ¶ She lets go.
55 A Drifts across the bay.
56 A At the door she stops, lays one palm flat on a crate as if for luck.
57 A ¶ Then she follows Simeon into the corridor.

### SCENE s00251 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAN, GREY HOODIE, SHOPKEEPER MARCUS OYELARAN-BRIGHT, DETECTIVE IRENE KOWALCZYK-DIOP, DANNY
* 1 A ¶ Glass cases.
* 2 A Guitars on hooks.
* 3 A A TV with the sound off.
4 A ¶ A MAN IN A GREY HOODIE (30s) tears open a drawer, dumps it.
* 5 A Jewelry rattles onto the floor.
* 6 A ¶ Behind him, the door creaks.
7 A ¶ SHOPKEEPER MARCUS OYELARAN-BRIGHT (50s, cardigan, baseball bat) steps in.
8 A The man turns.
9 D MAN: Whoa. Whoa.
10 D MARCUS: Put it down.
11 D MAN: It's not what it looks like.
12 D MARCUS: It looks like robbery.
13 D MAN: Okay, it's what it looks like.
14 A ¶ He bolts.
15 A Marcus swings.
* 16 A The bat clips a guitar; strings twang.
17 A They crash together against the counter, hands on each other's collars.
* 18 A A glass case shatters under them.
19 D MAN [CONT'D] (grunting): Let go!
20 D MARCUS: You let go!
21 A ¶ They stagger, breathing hard.
22 A A second figure appears in the doorway.
23 A ¶ DETECTIVE IRENE KOWALCZYK-DIOP (40s, badge on her belt, gun drawn) stands with her feet planted.
24 D DETECTIVE KOWALCZYK-DIOP: Police. Hands.
25 A ¶ Both men freeze.
26 A Both raise their hands.
27 A Marcus drops the bat.
28 A The man drops the loot.
29 D MARCUS: Detective. He's the thief.
30 D MAN: He's the owner!
31 D DETECTIVE KOWALCZYK-DIOP: Sir. Mr. Oyelaran-Bright. I'm familiar.
32 A ¶ She holsters, steps forward, and cuffs the man.
33 D KOWALCZYK-DIOP: You've been busy, Danny.
34 D DANNY (sighing): Hi, Irene.
35 D MARCUS: You know him?
36 D KOWALCZYK-DIOP: He's my brother.
* 37 A ¶ A beat.
38 A Marcus picks up the bat, sets it on the counter, and quietly pours himself a drink.

### SCENE s00252 | EXT. WINDMILL RANCH, DRY PLAINS - DAY
Detected names (may be incomplete or contain aliases): ABEL MONTGOMERY-OSEI, RADIO
* 1 A ¶ A tall steel windmill creaks against a bleached sky.
* 2 A A sagging fence runs off into dust.
* 3 A Beneath the tower, a water trough, half-empty.
4 A ¶ ABEL MONTGOMERY-OSEI (50s, long coat, sun-cracked hat, a face like riverbed) rides in, dismounts, and loosens the cinch.
5 A His horse drinks.
6 A He doesn't.
7 A ¶ He walks to the windmill.
8 A Reaches into the shadow of the tower and pulls out a tin box.
9 A Opens it.
* 10 A Inside: a folded letter, a photograph, a wedding ring.
11 A ¶ He reads the letter.
12 A Folds it.
13 A Pockets the ring.
14 A Holds the photograph a long time.
15 A ¶ Then he sits against the windmill leg and stares across the plain.
* 16 A ¶ A faint crackle from his saddlebag.
* 17 A A small battered radio, strapped there for emergencies.
18 D ABEL (to the radio): Not now.
* 19 A ¶ The crackle repeats.
* 20 A A voice, thin and far:
21 D RADIO [V.O.]: Abel. You there?
22 D ABEL (sighing): I'm here.
23 D RADIO [V.O.]: They found the bodies at Cutter's Rise.
24 D ABEL: I know.
25 D RADIO [V.O.]: It was the Calloway gang.
26 D ABEL: I know who it was.
27 D RADIO [V.O.]: What are you going to do?
28 A ¶ Abel looks at the windmill blades turning.
29 A Looks at the dust.
30 D ABEL: I'm going to stay here a while.
31 D RADIO [V.O.]: Abel--
32 D ABEL: A while.
33 A ¶ He clicks the radio off.
34 A Puts it back in the bag.
* 35 A The wind picks up.
* 36 A The windmill groans.
37 A ¶ Far on the horizon, three riders appear as dark specks.
38 A Abel doesn't turn.
39 D ABEL [CONT'D] (to himself): Took you long enough.
40 A ¶ He stands.
41 A Draws his revolver.
42 A Checks it.
43 A Holsters it.
44 A Then, deliberately, he sits down again and takes off his hat, resting it on his knee.
45 A ¶ The riders grow.
46 A Abel waits.
47 A ¶ At two hundred yards, one of them raises a rifle.
48 A Abel doesn't flinch.
49 D ABEL [CONT'D] (softly, to the photograph): Not yet.
* 50 A ¶ The shot cracks.
51 A The photograph leaps from his hand, a hole through the corner.
52 A He stares at it.
53 A Then he is on his feet, gun up, firing three times at the riders.
54 A One falls.
55 A The others scatter into the dust.
* 56 A ¶ Silence returns.
* 57 A The windmill creaks.
58 A Abel crosses to the photograph, bends, and picks it up with great care.
* 59 A A hole where a shoulder used to be.
60 A ¶ He lowers himself to the ground.
61 A Breathes.
62 D ABEL [CONT'D] (to the sky): There. Now we're done.
* 63 A ¶ The wind carries the smoke away.
* 64 A The blades keep turning.

### SCENE s00253 | INT. COURTHOUSE BASEMENT, EXHIBIT STORAGE - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY SABINE OKONKWO-HARTLEY, OPPOSING COUNSEL DOMINIC TRAVERSO-ADEBAYO, PRU, LINDGREN-ASANTE
* 1 A ¶ Fluorescent tubes.
* 2 A Metal shelving.
* 3 A Cardboard boxes labeled in marker.
4 A ¶ Three people stand at a steel table, a single evidence bag between them.
5 A ¶ ATTORNEY SABINE OKONKWO-HARTLEY (40s, gray suit, tired) holds a tablet.
6 A ¶ OPPOSING COUNSEL DOMINIC TRAVERSO-ADEBAYO (50s, expensive tie, patient smile) flips through an inventory.
7 A ¶ CLERK PRUDENCE "PRU" LINDGREN-ASANTE (20s, lanyard, headphones around her neck) logs entries on a clipboard.
8 D SABINE (to the room): For the record, we are inspecting Exhibit Fourteen.
9 D DOMINIC: For the record, it's a screwdriver.
10 D PRU: It's a Phillips-head.
11 D SABINE: Thank you, Pru.
12 D DOMINIC: Sabine, we've been through this.
13 D SABINE: Dominic, we've been through everything.
14 D DOMINIC: The chain of custody is solid.
15 D SABINE: The chain of custody has a gap of nineteen hours.
16 D DOMINIC: That was a weekend.
17 D SABINE: Murder trials don't have weekends.
18 D DOMINIC: This one did.
19 D PRU (muttering): I'm just the clerk.
20 D SABINE: Pru, which officer logged the tool?
21 D PRU: Officer Haverford. Badge four-two-one.
22 D DOMINIC: He's on leave.
23 D SABINE: Convenient.
24 D DOMINIC: Medical.
25 D SABINE: Of course.
26 D PRU (to herself): Of course.
27 A ¶ Sabine leans over the bag.
28 A Squints at a smudge on the handle.
29 D SABINE: That's a thumbprint.
30 D DOMINIC: Probably the officer's.
31 D SABINE: Probably.
32 D DOMINIC: Is there a point?
33 D SABINE: There's a name in the margin of the log. Not Haverford.
34 A ¶ Pru checks her clipboard.
35 A Her eyes widen.
36 D PRU: Oh.
37 D DOMINIC: Pru?
38 D PRU: It says... Traverso.
39 A ¶ Dominic's smile doesn't move.
40 D SABINE: Your father's name.
41 D DOMINIC (evenly): It's a common name.
42 D SABINE: It's a very uncommon screwdriver.
43 A ¶ Pru backs a step toward the stairs.
44 A Sabine, calm, unfolds her tablet.
45 D SABINE [CONT'D] (to the ceiling): Let the record show opposing counsel declined to comment.
46 D DOMINIC (to himself): Neither confirmed nor denied.
47 D SABINE (overlapping): That's the same thing.
48 D DOMINIC (overlapping): It is not.
49 A ¶ ^
50 A ¶ Pru, very softly, closes the log.
