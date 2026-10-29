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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0014.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

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
* 9 D WINNIE: Deal me in.
* 10 D KIERAN: You don't know how to play.
* 11 D WINNIE: I know enough.
* 12 D AUGUSTINE (strumming): She cheats.
* 13 D WINNIE: I do not!
* 14 D AUGUSTINE: ^She cheats.
* 15 D KIERAN (laughing): You both said it at the same time.
16 A ¶ Winnie throws a card at Augustine.
* 17 A It flutters off the platform and spins to the ground.
18 A Lotte leans down to follow its path, then straightens and offers the bag.
* 19 D LOTTE: Licorice?
* 20 D WINNIE (brightening): Yes. Black or red?
* 21 D LOTTE: Both.
22 A ¶ Kieran sits up.
23 A Winnie plucks a red strand.
24 A Augustine, still strumming, leans across to take a black one.
25 A Lotte smiles, relieved.
* 26 D KIERAN: You're the new one.
* 27 D LOTTE: Lotte.
* 28 D AUGUSTINE: Where'd you move from?
* 29 D LOTTE: Rotterdam.
* 30 D WINNIE: Where's that?
* 31 D LOTTE: Far.
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
* 12 D TEDDY: It's good.
* 13 D IZABELLA: It's better than good.
* 14 D TEDDY: It's... complex.
* 15 D CAMILA: He means it's sour.
* 16 D TEDDY: I do not.
* 17 D CAMILA: You do. Your nose wrinkles.
18 A ¶ Teddy touches his nose.
19 A Izabella suppresses a smile.
20 A Henrik takes a slow sip and sets down his glass.
* 21 D HENRIK: It's perfect.
22 A ¶ All three turn.
23 A He shrugs, unbothered.
* 24 D HENRIK [CONT'D]: I'm the one who sold her the grapes.
* 25 D IZABELLA (to Teddy): That's Henrik.
* 26 D TEDDY: I gathered.
* 27 D IZABELLA: And that's my fiance.
28 A ¶ Teddy's glass stops halfway to his mouth.
29 A Camila lowers her eyes.
30 A Henrik, calmly, takes Izabella's hand.
* 31 D TEDDY: ...Congratulations.
* 32 D IZABELLA: Thank you, Teddy.
33 A ¶ He drains the glass.
34 A Sets it down.
35 A Smooths his jacket.
36 A Camila slides the bottle toward him, tender.
* 37 D CAMILA: Another?
* 38 D TEDDY (a breath): Please.

### SCENE s01117 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): BABCIA, KOWALCZYK-EZE, FELIX DELACROIX-ADEYEMI
* 1 A ¶ A big scarred table.
* 2 A Copper pots on hooks.
* 3 A A wood stove ticking.
* 4 A Through the window, mist lies low over a field of frosted stubble.
5 A ¶ GRANDMOTHER AGNIESZKA "BABCIA" KOWALCZYK-EZE, 70s, in a faded housedress, stands at the stove stirring a pot of porridge.
6 A Her grandson FELIX DELACROIX-ADEYEMI, 11, sits at the table in pajamas, chin on his folded arms.
7 A He watches her back with the stubborn patience of a boy who has a question.
* 8 D FELIX: Babcia.
* 9 D BABCIA: Hm.
* 10 D FELIX: Why did Mama leave?
11 A ¶ Babcia's spoon stops.
12 A Resumes.
13 A She doesn't turn.
* 14 A Steam curls around her shoulders.
15 A She adds a pinch of salt, tastes, adds another.
* 16 D BABCIA: Eat first.
* 17 D FELIX: I'm not hungry.
* 18 D BABCIA: You will be.
19 A ¶ She ladles porridge into a chipped bowl.
20 A Brings it to the table.
21 A Sets it before him with a spoon.
22 A Smooths his hair with one flour-dusted hand.
23 A He leans into it, then catches himself and pulls away.
24 A She sits across from him with a groan, folds her hands.
* 25 D BABCIA [CONT'D]: Your mother wanted a different life.
* 26 D FELIX: Different from what?
* 27 D BABCIA: From this.
28 A ¶ She gestures at the kitchen, the stove, the window.
29 A Felix looks at each in turn.
30 A He picks up the spoon and stirs the porridge without eating.
* 31 D FELIX: Is it that bad?
* 32 D BABCIA: Not to me.
* 33 D FELIX: Is it bad to you?
* 34 D BABCIA (a long pause): No, Felix. It is not bad.
35 A ¶ He eats a bite.
36 A Then another.
37 A She watches.
* 38 A The stove ticks.
* 39 A A rooster crows somewhere in the mist.
* 40 D FELIX: Babcia?
* 41 D BABCIA: Yes, my little bird?
* 42 D FELIX: Will she come back?
43 A ¶ Babcia reaches across the table and covers his hand with her own.
44 A Her knuckles are swollen, her skin like old paper.
45 A He turns his palm up and holds on.
* 46 D BABCIA: Every spring the swallows go away, and every spring they return. Nobody tells them to. They only remember where the barn is.
* 47 D FELIX: That's not an answer.
* 48 D BABCIA: No. It isn't.
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
* 10 D GWENDOLYN (to the room): October ninth. "Light functioning. Visibility poor." October tenth. "Light functioning. Visibility poor." October eleventh.
11 A ¶ She stops.
12 A Runs a finger over the ink.
* 13 D GWENDOLYN [CONT'D]: "Light functioning. Visibility poor. Mr. Pellew did not return."
14 A ¶ She flips back.
15 A Forward.
16 A Back again.
* 17 D GWENDOLYN [CONT'D]: Three entries, same handwriting. Same ink. Same hour. But the first two were written by a man who is alive, and the third by a man who isn't.
18 A ¶ She lifts the lamp and holds the page to the flame.
* 19 A Behind the ink, faint, a second line shows through, written in a different hand and scratched out.
* 20 D GWENDOLYN [CONT'D] (reading, softly): "He did not fall."
* 21 A ¶ Her radio crackles on the desk.
22 A She snatches it up.
* 23 D HARBORMASTER [V.O.] (over the radio): Inspector? You got anything yet?
* 24 D GWENDOLYN: I have a log that lies, Harbormaster. And a keeper who's missing.
* 25 D HARBORMASTER [V.O.]: Pellew's boat washed up on the rocks. Empty.
* 26 D GWENDOLYN: Was the lamp lit?
* 27 D HARBORMASTER [V.O.]: Aye. All night.
* 28 D GWENDOLYN: Who lit it?
* 29 D HARBORMASTER [V.O.]: You tell me, Inspector. You're the one in the tower.
30 A ¶ She sets the radio down.
* 31 A The foghorn sounds.
* 32 A A floorboard above her creaks.
33 A She looks at the ceiling, at the spiral stair, and then at the pen in her hand.
34 A ¶ She rises, slips the log into her coat, and climbs.
