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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00908.json
### SCENE s00908 | INT. WAX MUSEUM - BACK STOREROOM - NIGHT
Detected names (may be incomplete or contain aliases): GREGORY PUFFIN, MAXINE TAN, ULYSSES CRANE, BABS DELANEY, KOFI BOATENG
1 A ¶ Shelves of disembodied heads.
2 A A half-melted Napoleon lies on a cart.
3 A A bucket labelled "SPARE ELVIS."
4 A ¶ GREGORY PUFFIN, 50s, the curator, in a velvet jacket two sizes too small, wrings his hands.
5 A MAXINE TAN, 30s, a night guard with a flashlight and a dead-eyed stare.
6 A ULYSSES CRANE, 40s, a restorer in a paint-stained smock, kneels by a headless Churchill.
7 A BABS DELANEY, 60s, the cleaning lady, mops in slow circles.
8 A KOFI BOATENG, 20s, a tour guide in a tricorn hat, holds a tray of sandwiches.
9 D GREGORY: This is a disaster.
10 D MAXINE: It's a Tuesday.
11 D GREGORY: The Queen is missing.
12 D ULYSSES: The Queen is always missing. We keep losing her wig.
13 D GREGORY: Not the wig. The QUEEN.
14 A ¶ Everyone turns.
15 A A single empty pedestal stands in the corner, a velvet rope still looped around it.
16 D BABS: I thought she was in the shop.
17 D KOFI: I thought she was in the Hall of Kings.
18 D MAXINE: Nobody checked the Hall of Kings.
19 D GREGORY: Nobody check ANYTHING. Everyone stay calm.
20 A ¶ A loud clunk from the ceiling.
21 A A pale shape swings past on a rope.
22 A They scatter, Babs shrieking, Kofi dropping the tray, Ulysses diving behind the cart, Maxine drawing her flashlight like a pistol.
23 A ¶ The shape stops dead in the middle of the room, swaying: a wax Queen Elizabeth, hung by her own sash from a rafter.
24 A ¶ Silence.
25 A Kofi peers from behind the cart.
26 D KOFI: Is she... meant to be there?
27 D BABS (sniffing): It's the best she's looked in years.
28 D GREGORY (faintly): Who did this?
29 A ¶ A muffled giggle from a tall wardrobe.
30 A The door creaks open.
31 A A tiny figure steps out in a toddler's tricorn hat, holding an enormous pair of scissors.
32 A ¶ Everyone freezes.
33 D GREGORY [CONT'D]: Kofi. Is that your niece?
34 D KOFI (grimly): Take-Your-Child-To-Work Day.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00653.json
### SCENE s00653 | EXT. FUNERAL HOME PARKING LOT - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): ABUELA FLORENTINA, ARTURO, KATHLEEN, IMANI, DAHLIA, BASIL
1 A ¶ A tamale truck parked between hearses.
2 A Mourners in black stand in line holding paper plates.
3 A ¶ Six Castellanos-Whitfields.
4 A One truck.
5 A ¶ ABUELA FLORENTINA, eighties, in a black lace mantilla, orders for everyone.
6 A ¶ Her son, ARTURO, fifties, pays.
7 A Her daughter-in-law, KATHLEEN, fifties, wipes her eyes with a napkin.
8 A ¶ Their daughters, IMANI, twenties, and DAHLIA, teens, argue over hot sauce.
9 A Their cousin, BASIL, thirties, eats from two plates.
10 D FLORENTINA: Arturo, she wants pork. Give the girl pork.
11 D ARTURO: Mama, she's vegetarian.
12 D IMANI: I'm not vegetarian!
13 D DAHLIA: Imani, you've been a vegetarian since June.
14 D IMANI: Dahlia, mind your own plate!
15 D KATHLEEN: Girls. Please. It's your grandfather's day.
16 D BASIL (mouth full): He'd have loved this.
17 D FLORENTINA: He hated tamales.
18 D BASIL: He'd have loved the fight.
19 A ¶ A silence.
20 A Then, one by one, they start to laugh.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00216.json
### SCENE s00216 | INT. FAMILY MINIVAN - PARKED AT A DRIVE-IN - NIGHT
Detected names (may be incomplete or contain aliases): NADINE OKORO-LANCASTER, RUFUS, GRETCHEN LANCASTER-PRICE, COACH TANAKA
1 A ¶ Back seat.
2 A The movie flickers through the windshield.
3 A Popcorn spills.
4 A ¶ NADINE OKORO-LANCASTER, 16, sits in the back with her little brother, RUFUS, 9, who holds a box of candy.
5 A In the front, their mother, GRETCHEN LANCASTER-PRICE, 40s, glances at the rear-view mirror.
6 A A phone buzzes in the cupholder.
7 D NADINE: Rufus, quit kicking the seat.
8 D RUFUS: I'm not.
9 D GRETCHEN: You are, honey.
10 D RUFUS: It's the movie.
11 D NADINE: The movie doesn't kick.
12 A ¶ Gretchen picks up the phone.
13 A Reads the screen.
14 A Her face stiffens.
15 A She answers on speaker.
16 D COACH TANAKA [V.O.] (over phone): Mrs. Lancaster-Price? It's about Nadine. She missed practice again.
17 A ¶ Nadine freezes.
18 A Rufus stops chewing.
19 D GRETCHEN (evenly): Thank you, Coach. We'll talk.
20 D COACH TANAKA [V.O.] (over phone): I just want her to know there's a spot.
21 D GRETCHEN: Thank you.
22 A ¶ She hangs up.
23 A A long silence.
24 A On the screen, an actress screams.
25 A Nadine stares at her knees.
26 D GRETCHEN [CONT'D]: Nadine.
27 D NADINE: I can explain.
28 D GRETCHEN: Please do.
29 D NADINE: I don't want to play.
30 D RUFUS: She's been going to the library instead.
31 D NADINE: Rufus!
32 D RUFUS: Sorry!
33 A ¶ Gretchen watches them in the mirror.
34 A Then she reaches back and puts a hand on Nadine's knee.
35 A It stays there.
36 A On screen, the credits roll.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01474.json
### SCENE s01474 | INT. NIGHT-SHIFT CAR WASH - 3 A.M.
Detected names (may be incomplete or contain aliases): NADIA SZABO, DOM, ACHEBE, OLD HARLAN PRICE, LUIS FERRO, VANCE
1 A ¶ Fluorescent lights.
2 A Wet concrete.
3 A A conveyor hums, empty.
4 A ¶ Four people around a break-room table inside a glass booth.
5 A Vending coffee.
6 A Donuts.
7 A ¶ NADIA SZABO (30s, manager) counts the till.
8 A DOMINIC "DOM" ACHEBE (20s) eats.
9 A OLD HARLAN PRICE (70s) does a crossword.
10 A LUIS FERRO (50s) stirs his coffee for too long.
11 D DOM: Seven letters, "cheerful and quiet."
12 D HARLAN: Serene.
13 D NADIA: That's six.
14 D LUIS (not looking up): Nobody's cheerful at three in the morning.
15 D DOM: I'm cheerful.
16 D NADIA: You're asleep.
17 D HARLAN: Placid. Seven.
18 D DOM: He's eating.
19 D NADIA: Both.
20 A ¶ Quiet.
21 A The conveyor hums.
22 A Headlights sweep the glass.
23 A ¶ A black sedan rolls to the entrance and stops.
24 A Nobody gets out.
25 D NADIA [CONT'D]: Closed sign's on.
26 D HARLAN: Sign's always on.
27 D LUIS (low): Nobody go out.
28 D DOM: Why not?
29 D LUIS: That's the third night. Same car. Same plate. Look at the plate.
30 A ¶ They look.
31 A Dom stops chewing.
32 D HARLAN: Who parks and waits at a car wash?
33 D LUIS: A man who's already clean.
34 D NADIA: Luis...
35 A ¶ The sedan's door opens.
36 A A polished shoe touches wet concrete.
37 A MR. VANCE (50s, camel coat, pleasant face) steps out and walks toward the booth, hands visible, smiling.
38 D LUIS (whispering): He asked me last night where the cameras are.
39 D NADIA: And you said?
40 D LUIS: Nothing.
41 D HARLAN: Good.
42 D DOM: Then why's he coming to ask again?
43 A ¶ Nadia's hand slides under the counter and closes on something cold.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00855.json
### SCENE s00855 | INT. BOTANICAL GARDEN, ORCHID HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): FENN, CALLIOPE
1 A ¶ Mist hangs in humid air.
2 A Violet and white blooms spill from hanging baskets.
3 A A path of wet gravel winds between benches.
4 A ¶ FENN, 40s, in a damp raincoat, crouches beside a bench and runs a gloved thumb along a stem.
5 A CALLIOPE, 30s, the greenhouse curator, stands over him, arms folded, with a keyring that jingles at her hip.
6 A ¶ He lifts a petal with tweezers.
7 A She watches his hands.
8 D FENN: This one's been cut.
9 D CALLIOPE: Orchids are cut all the time.
10 D FENN: Not at the root. Not with a scalpel.
11 A ¶ She says nothing.
12 A He bags the stem and places it carefully in a case.
13 D CALLIOPE: You won't find anything here.
14 D FENN: You're sure?
15 D CALLIOPE: I'm certain.
16 A ¶ He stands.
17 A The mist parts around him.
18 A He looks up at the glass ceiling, then back at her, and his eyes stop on her gloved hand.
19 D FENN: Who taught you to hold a scalpel like that?
20 D CALLIOPE: ^Who taught you to ask?
21 A ¶ They speak in perfect unison.
22 A A drop of water falls from a leaf onto the gravel.
23 A Neither moves.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01613.json
### SCENE s01613 | INT. CIVIL COURTHOUSE - JURY DELIBERATION ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): FOREWOMAN BEATRICE KOWALSKI-DAVIES, JUROR THADDEUS OKAFOR, JUROR PRUDENCE LINDSTROM, JUROR MARCELINO ALVARADO, OFFICER
1 A ¶ A windowless room.
2 A A long laminate table, twelve chairs, a water pitcher.
3 A A wall clock ticking too loudly.
4 A ¶ Four jurors remain after a long lunch.
5 A The rest have filed out for a break.
6 A ¶ FOREWOMAN BEATRICE KOWALSKI-DAVIES (50s, practical blazer, reading glasses) leafs through her notes.
7 A JUROR THADDEUS OKAFOR (30s, hoodie, bitten nails) taps his pen on the table.
8 A JUROR PRUDENCE LINDSTROM (60s, floral blouse, quiet) arranges a row of peppermints in front of her.
9 A And JUROR MARCELINO ALVARADO (40s, work boots, a thermos of coffee) leans back in his chair, staring at the ceiling.
10 D BEATRICE: Let's recap where we are.
11 D THADDEUS: We're nowhere.
12 D PRUDENCE (gently): We're somewhere, dear.
13 D MARCELINO: We're exactly where we started.
14 A ¶ Beatrice sets down her notes, removes her glasses, rubs the bridge of her nose.
15 A Thaddeus stops tapping.
16 A Prudence unwraps a peppermint and offers it across the table.
17 A Marcelino takes it, pops it into his mouth, and Thaddeus declines.
18 A Beatrice puts her glasses back on and looks at each of them in turn.
19 D BEATRICE: The plaintiff says the contract was breached on March third.
20 D THADDEUS: The defendant says it was never signed.
21 D PRUDENCE: The signature looked genuine.
22 D MARCELINO: It looked traced.
23 D BEATRICE: Mr. Alvarado, you keep saying that.
24 D MARCELINO: I keep seeing it.
25 D THADDEUS: I think she's lying. The plaintiff.
26 D PRUDENCE: She didn't seem like a liar.
27 D THADDEUS: The good ones never do.
28 D BEATRICE: We can't convict on a feeling.
29 D THADDEUS: It's not a criminal case.
30 D BEATRICE: We can't find liability on one either.
31 A ¶ Silence.
32 A The clock ticks.
33 A Prudence folds the peppermint wrapper into a small square.
34 A Marcelino drains his thermos.
35 A Thaddeus resumes tapping.
36 A ¶ The door opens.
37 A A court officer leans in.
38 D OFFICER: Madam Foreman, the judge wants to know if you've reached a verdict.
39 D BEATRICE: Not yet.
40 D OFFICER: How much longer?
41 D BEATRICE: Another hour.
42 D OFFICER: I'll tell her.
43 A ¶ The door closes.
44 A Beatrice sighs, takes a fresh sheet, and writes a single word at the top.
45 D THADDEUS: What did you write?
46 D BEATRICE: "Evidence."
47 A ¶ She underlines it twice.
48 A Prudence nods.
49 A Marcelino leans forward.
50 A Thaddeus, last, sets down his pen and slides his chair closer to the table.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01011.json
### SCENE s01011 | INT. ROADSIDE MOTEL LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CLERK, RHONDA, TRUDY, LAMAR, DALE
1 A ¶ A cinderblock room with six humming dryers and a vending machine that sells nothing.
2 A A single bulb, bare, buzzes.
3 A A mop bucket stands in a pool of gray water.
4 A The door to the lot is propped open with a brick.
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
22 A The water inside has turned pink.
23 D LAMAR: Is that normal?
24 D CLERK: It happens.
25 D LAMAR: What happens?
26 D CLERK: Colors bleed.
27 A ¶ Rhonda holds the baby monitor to her ear.
28 A A faint hiss of static.
29 A She turns the knob.
30 A The hiss grows, and under it, a slow wet breathing.
31 D RHONDA: Trudy, did you bring a baby?
32 D TRUDY: Of course not.
33 A ¶ The Clerk sets down the towel.
34 A His eyes drift to the open door, the dark lot, the single car with its engine ticking.
35 D CLERK (quietly): Dale. My name is Dale.
36 D LAMAR: What?
37 D DALE: You asked me my name, earlier. I wasn't ready to say.
38 A ¶ The overhead bulb flickers.
39 A Rhonda lowers the monitor slowly.
40 A The breathing now comes from the dryer, the one still turning, the one with the small round window.
41 D DALE [CONT'D]: Nobody open that.
42 A ¶ Trudy opens it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01260.json
### SCENE s01260 | INT. INTERROGATION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT ISIDORE MCALLISTER-KANE, BENEDEK VARGA
1 D LIEUTENANT ISIDORE MCALLISTER-KANE: Your alibi has a hole in it, Mr. Varga.
2 D BENEDEK VARGA: Everyone's alibi has a hole in it, Lieutenant.
3 D LIEUTENANT ISIDORE MCALLISTER-KANE: Mine doesn't.
4 D BENEDEK VARGA: You haven't been asked.
5 D LIEUTENANT ISIDORE MCALLISTER-KANE: You say you were at the cinema.
6 D BENEDEK VARGA: I was at the cinema.
7 D LIEUTENANT ISIDORE MCALLISTER-KANE: The ticket stub is dated Tuesday.
8 D BENEDEK VARGA: Then I went on Tuesday.
9 D LIEUTENANT ISIDORE MCALLISTER-KANE: The robbery was on Wednesday.
10 D BENEDEK VARGA: Then I was somewhere else on Wednesday.
11 D LIEUTENANT ISIDORE MCALLISTER-KANE: Where?
12 D BENEDEK VARGA: I'd have to think.
13 D LIEUTENANT ISIDORE MCALLISTER-KANE: Think out loud.
14 D BENEDEK VARGA: My mother's. She makes goulash on Wednesdays.
15 D LIEUTENANT ISIDORE MCALLISTER-KANE: Your mother died in March.
16 D BENEDEK VARGA: So she did.
17 D LIEUTENANT ISIDORE MCALLISTER-KANE: Mr. Varga.
18 D BENEDEK VARGA: Lieutenant.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01915.json
### SCENE s01915 | INT. FUNERAL PARLOR, SIDE ROOM - DAY
Detected names (may be incomplete or contain aliases): VIVIENNE ACHTERBERG-NOLAN, ALISTAIR ACHTERBERG-NOLAN, ROZ, FENTON-ADEKUNLE
1 A ¶ Mahogany.
2 A A low table of untouched cookies.
3 A Through the half-open door: murmurs, organ music, the shuffle of black shoes.
4 A ¶ VIVIENNE ACHTERBERG-NOLAN (40s, black dress, hair coiled) pours tea with surgical care.
5 A Her brother ALISTAIR ACHTERBERG-NOLAN (40s, suit a size too small) paces.
6 A Their aunt, ROSALIND "ROZ" FENTON-ADEKUNLE (70s, cane, pearl choker), sits straight-backed on the sofa.
7 D VIVIENNE: Everyone's here. Even the cousins from Perth.
8 D ALISTAIR: That's a miracle.
9 D ROZ: It's an inheritance.
10 D VIVIENNE: Aunt Roz.
11 D ROZ: I'm only saying what the room is thinking.
12 D ALISTAIR (muttering): The room is thinking about sandwiches.
13 D VIVIENNE: Nobody's thinking about sandwiches.
14 D ALISTAIR: I am.
15 A ¶ He takes a cookie.
16 A Bites.
17 A Chews with his back to them.
18 A Vivienne sets the teapot down.
19 A Her hands are steady, too steady.
20 D VIVIENNE: Alistair.
21 D ALISTAIR: Mm.
22 D VIVIENNE: ^Did you read the will?
23 D ROZ: ^Did you read the will?
24 A ¶ They both stop.
25 A Look at each other.
26 A Roz sips her tea.
27 D ALISTAIR: Not yet.
28 D VIVIENNE: Alistair.
29 D ALISTAIR: I haven't had the heart.
30 D ROZ: Then I'll give you the heart of it, dear. There isn't any money.
31 A ¶ Silence.
32 A The organ rises through the wall.
33 D VIVIENNE: What?
34 D ROZ: Your father spent it years ago. On the house, on your schooling, on the lawyers. On me.
35 D ALISTAIR: On you?
36 D ROZ: I had a hip.
37 D VIVIENNE (very quietly): He told us it was fine.
38 D ROZ: He told everyone it was fine. It was his only vice.
39 A ¶ Alistair sets down the cookie.
40 A Looks at his sister.
41 A Something passes between them, old and wordless.
42 D ALISTAIR (to himself): Of course. Of course he did.
43 D VIVIENNE: Alistair?
44 D ALISTAIR: I'm going to go and thank everyone for coming.
45 D VIVIENNE: Alone?
46 D ALISTAIR: No. Come with me.
47 A ¶ She nods.
48 A He offers his arm.
49 A She takes it.
50 D ROZ (calling after them): Take a sandwich!
51 A ¶ The door closes.
52 A Roz, alone, sets down her cup, and lets her shoulders drop for the first time.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02253.json
### SCENE s02253 | EXT. CATTLE PEN AT DUSK - SUNDAY
Detected names (may be incomplete or contain aliases): HANK YAZZIE, MILLIE, LAZARUS, PETE
1 A ¶ Dust.
2 A Lowing steers.
3 A A split-rail fence, a bucket, a lantern on a post.
4 A ¶ HANK YAZZIE, forties, leans on the fence.
5 A MILLIE, thirties, a cook in a flour-dusted apron, ladles beans from a pot.
6 A LAZARUS, sixty, a one-eyed drover, sits on an upturned bucket whittling.
7 A PETE, nineteen, new on the crew, brushes a horse.
8 D MILLIE (to everyone): Supper's up.
9 D HANK: Smells good.
10 D LAZARUS: Smells like boots.
11 D MILLIE: Then don't eat it, Laz.
12 D LAZARUS: I'll eat it.
13 D PETE: Mrs. Millie, can I have seconds?
14 D MILLIE: You haven't had firsts.
15 D PETE: I'm planning ahead.
16 D HANK: Pete, how's the bay mare?
17 D PETE: Limping, Mr. Yazzie.
18 D HANK: Which leg?
19 D PETE: Left front.
20 D LAZARUS: It's the right.
21 D PETE: It's the left.
22 D LAZARUS (muttering): Boy can't tell his left from his own elbow.
23 D MILLIE: Lazarus.
24 D LAZARUS: I'm just saying.
25 D HANK: Look at the hoof, Pete. Look, not guess.
26 D PETE: Yes, sir.
27 A ¶ He crouches.
28 A Lifts the mare's foot.
29 A Squints.
30 D PETE [CONT'D]: Stone.
31 D HANK: Pick it out.
32 D LAZARUS: Right front. Told you.
33 D PETE: Left.
34 D LAZARUS: Right!
35 D HANK: Everyone eat.
36 A ¶ They quiet.
37 A Millie passes bowls.
38 A The steers settle.
39 A Lazarus slowly resumes whittling.
