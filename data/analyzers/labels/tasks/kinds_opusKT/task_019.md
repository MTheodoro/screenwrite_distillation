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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0019.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00459 | INT. COURTHOUSE HOLDING CELL - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY BERNADETTE FALCONER-ADU, MARCELINO TORRIJOS, LIAM OYELARAN-STACK, CLERK
* 1 A ¶ Cinderblock.
* 2 A A bench.
* 3 A A caged lightbulb.
4 A ATTORNEY BERNADETTE FALCONER-ADU (40s, navy suit) leans on the bars.
5 A Her client, MARCELINO TORRIJOS (30s, orange jumpsuit), sits with his head in his hands.
6 A A deputy, LIAM OYELARAN-STACK (20s), stands guard.
* 7 A ¶ The intercom crackles.
8 D CLERK [V.O.]: Case 4417, State versus Torrijos, five minutes.
9 A ¶ She checks her watch.
10 A He lifts his head.
11 A She nods once.
12 A ¶ He stands and offers her a sealed envelope.
13 A She hesitates, then takes it.
14 A ¶ The deputy steps forward.
15 A She shows him the envelope.
16 A He glances inside, nods, and unlocks the door.
17 A She slips it into her briefcase.
18 A He returns to his post.
19 D CLERK [V.O.]: Counsel, please approach.
20 A ¶ She squeezes Marcelino's shoulder.
21 A He stares at the floor.
* 22 A ¶ The door buzzes open.
23 A She walks out.
24 A He watches her go.
25 A The deputy locks the door.
* 26 A ¶ The intercom clicks off.
* 27 A The bulb flickers.
28 A Marcelino sits down, slowly, and waits.

### SCENE s00460 | INT. FOURTH-FLOOR LAUNDRY ROOM - APARTMENT BUILDING - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OBI-LINDGREN, GRETCHEN VOSKUIJLEN, TEO
* 1 A ¶ Two washers, one broken.
* 2 A A folding table with a wobbly leg.
* 3 A Fluorescent hum.
4 A ¶ ADAEZE OBI-LINDGREN (30s, scrubs, tired) folds towels.
5 A Her neighbor GRETCHEN VOSKUIJLEN (60s, curlers, quilted robe) watches the dryer spin.
6 D GRETCHEN: You work too much, dear.
7 D ADAEZE: Somebody has to.
8 D GRETCHEN: Mm.
9 A ¶ She nods at the dryer.
10 A Adaeze keeps folding.
* 11 A A towel.
* 12 A Another towel.
* 13 A A baby's sleeper, tiny.
14 D GRETCHEN [CONT'D]: Is that new?
15 D ADAEZE: Hand-me-down.
16 D GRETCHEN: From your sister?
17 D ADAEZE: From a friend.
* 18 A ¶ The dryer buzzes.
19 A Gretchen opens the door and fishes out warm sheets.
20 A Adaeze takes one end.
21 A They fold together, corner to corner, without a word.
* 22 A ¶ The door opens.
23 A A tall boy of thirteen, TEO (13, hoodie, earbuds), pads in with a hamper.
24 D TEO: Mom, you said eleven.
25 D ADAEZE: I know. One more load.
26 D TEO: Hi, Mrs. Voskuijlen.
27 D GRETCHEN: Hello, Teo.
28 A ¶ He sets the hamper down and sits cross-legged on the floor.
29 A Adaeze hands him the baby's sleeper.
30 D ADAEZE: Fold that for me.
31 A ¶ He folds it.
32 A Neat.
33 A Careful.
34 A She watches.
35 A Gretchen smiles at the dryer.

### SCENE s00461 | INT. ABANDONED RADIO OBSERVATORY - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ILSA, BAYO, KESTER, PETRA
* 1 A ¶ A cathedral of dead dials.
* 2 A Moonlight through a cracked dish window.
3 A Four people stand around a console that has begun, impossibly, to hum.
4 D ILSA: I told you the power was cut.
5 D BAYO: It was cut. I cut it myself.
6 D KESTER: Then what's that?
7 D ILSA: A signal.
8 D BAYO: From where?
9 D KESTER: Does it matter?
10 D PETRA: It matters to me.
11 D ILSA: Petra, step back from the console.
12 D PETRA: It's saying my name.
13 D BAYO: It's static.
14 D PETRA: It's saying my name, Bayo.
15 D KESTER: Everybody, shut up and listen.
* 16 A ¶ Silence.
* 17 A The hum deepens.
* 18 A Beneath it, a thin, pulsing voice rises and falls like breathing.
19 D BAYO (whispering): Turn it off.
20 D ILSA: There's no switch.
21 D KESTER: Pull the plug.
22 D BAYO: There is no plug. We cut the line!
23 D PETRA (calmly): It's been waiting forty years for someone to answer.
24 D ILSA: Petra, don't.
25 D PETRA: Hello?
* 26 A ¶ The hum stops.
* 27 A Every light in the room flares white.

### SCENE s00462 | INT. GRAND BALLROOM - STEAMSHIP "MERIDIAN QUEEN" - NIGHT
Detected names (may be incomplete or contain aliases): NELL, VASCONCELOS-HART, CAPTAIN JULIAN ABERCROMBIE-SATO, AUNT BEATRICE, LORD PERCIVAL HOLLOWAY
* 1 A ¶ A glittering room of mirrors and chandeliers.
2 A A string quartet plays a waltz.
3 A Couples whirl across a parquet floor, gowns blooming like opened flowers.
4 A Waiters weave among them with trays of champagne.
5 A ¶ At the edge of the floor, ELEANOR "NELL" VASCONCELOS-HART (20s, emerald gown, gloved hands clasped) stands beside a potted palm and watches the dancers.
6 A She holds an untouched glass.
7 A ¶ Across the room, CAPTAIN JULIAN ABERCROMBIE-SATO (30s, white dress uniform, polished buttons) stands alone beside the bandstand.
8 A He is looking at her.
9 A When she glances up, he glances away.
10 A ¶ Her chaperone, AUNT BEATRICE (60s, lorgnette, plum silk), taps her fan against Nell's arm.
11 D BEATRICE: Stand up straight, child.
12 A ¶ Nell straightens.
13 A Her eyes slide back to the captain.
14 D BEATRICE [CONT'D]: That man has been staring for twenty minutes.
15 D NELL: I hadn't noticed.
16 D BEATRICE: Then you are the only one.
17 A ¶ A waiter offers a tray.
18 A Nell takes a fresh glass and trades it for the old.
19 A Her fingers tremble.
* 20 A ¶ The quartet shifts into a new waltz.
21 A Julian crosses the floor.
22 A Couples part for him.
23 A He stops before Nell and bows.
24 D JULIAN: Miss Vasconcelos-Hart.
25 D NELL: Captain.
26 D JULIAN: Would you honor me with this dance?
27 A ¶ Beatrice's fan snaps open.
28 A Nell glances at her.
29 A The fan lowers by an inch.
30 A Nell sets her glass on the waiter's tray and takes his hand.
31 A ¶ They step onto the floor.
32 A He places a hand at her waist.
33 A She rests hers on his shoulder.
34 A They begin to turn, stiff at first, then easier.
35 D JULIAN [CONT'D]: You do not dance often.
36 D NELL: I do not dance at all.
37 D JULIAN: Then I am honored.
* 38 A ¶ The music swells.
39 A Her gloved fingers tighten on his sleeve.
40 A He leads her through the crowd, and the room blurs gold around them.
* 41 A ¶ A loud crash cuts through the music.
* 42 A A tray of glasses has hit the floor.
43 A Dancers stumble and stop.
44 A ¶ At the entrance stands LORD PERCIVAL HOLLOWAY (40s, tailcoat, red carnation), flushed and unsteady, one hand clutching a champagne bottle by the neck.
45 A He stares across the ballroom at Nell.
46 D PERCIVAL (shouting): Eleanor!
47 A ¶ The quartet falters.
48 A Beatrice gasps.
49 A Nell and Julian freeze mid-turn.
50 A ¶ Julian steps in front of her.
51 A Percival strides forward, shoving through the crowd.
52 A A waiter dodges.
53 A A matron shrieks.
54 A Two stewards rush to intercept, and Percival swings the bottle, and the stewards jump back.
55 D JULIAN: Lord Holloway, you are drunk.
56 D PERCIVAL: And you are in my way.
57 A ¶ Julian does not move.
58 A Nell steps beside him, then past him.
59 A She faces Percival directly, her chin raised.
60 D NELL: Percival. Put that down.
61 A ¶ He stares at her.
62 A The bottle trembles in his grasp.
63 A Slowly, he lowers it.
64 D PERCIVAL (hoarse): You promised.
65 D NELL: I promised nothing.
66 A ¶ His face crumples.
67 A The bottle slips from his fingers and shatters on the parquet.
* 68 A Champagne foams across the floor.
69 A The quartet has stopped.
70 A The entire ballroom holds its breath.
71 A ¶ Beatrice sweeps forward and takes Percival firmly by the elbow.
72 A He allows himself to be led.
73 A The crowd parts for them.
* 74 A ¶ A moment of silence.
75 A Then the first violin lifts his bow, and the waltz resumes, hesitant, uncertain.
76 A ¶ Julian turns to Nell.
77 A She is trembling.
78 A He holds out his hand.
79 D JULIAN: Shall we finish?
80 A ¶ She looks at his hand.
81 A She looks at the shattered glass.
82 A She looks at the doors where Beatrice and Percival have vanished.
83 A ¶ Then she places her hand in his, and the two of them step back into the dance.

### SCENE s00463 | INT. OPEN-PLAN OFFICE - "SYNERGY POD" - DAY
Detected names (may be incomplete or contain aliases): BARNABY CHOWDHURY-PELL, ODALYS FERREIRA
* 1 A ¶ A grey carpet-tiled field of identical desks under a ceiling of recessed fluorescent squares.
* 2 A A motivational poster of a rowing team hangs crooked on a pillar.
* 3 A Nothing in the room is on fire, which seems to be the best that can be said for it.
4 A ¶ BARNABY CHOWDHURY-PELL (40s, lanyard, forced cheer) stands at a whiteboard, marker raised.
5 A His direct report, ODALYS FERREIRA (30s, headphones around her neck), sits very still at the front of the room.
6 A ¶ He caps the marker.
7 A He uncaps it.
8 A He smiles at her.
9 D BARNABY: Great news. Nobody's getting fired.
10 D ODALYS (flat): Okay.
11 A ¶ He nods.
12 A She nods.
13 A He draws a circle on the whiteboard and does not explain it.
14 D BARNABY: Instead, we're pivoting to a flat org chart.
15 D ODALYS: Meaning?
16 D BARNABY: Meaning nobody has a manager.
17 A ¶ He caps the marker once more and sets it down with great care.
18 A She watches him do it.
19 D ODALYS: Including you.
20 D BARNABY: Especially me.
21 A ¶ He beams.
22 A She slowly removes her headphones, lays them on the desk, and stands.
23 A He does not stop smiling as she gathers her bag and walks out.
* 24 A The circle on the whiteboard stays unexplained.

### SCENE s00464 | INT. RAILWAY SIGNAL TOWER - NIGHT
Detected names (may be incomplete or contain aliases): SIGNALMAN ARCHIBALD NWANKWO-BELL, TRAINEE FLORENCIA ZAVALA, CONDUCTOR PERCY DALRYMPLE
* 1 A ¶ Levers.
* 2 A Brass gauges.
* 3 A A single desk lamp.
* 4 A Rain on the windows.
5 A ¶ SIGNALMAN ARCHIBALD NWANKWO-BELL (50s, cardigan, thermos) hunches over a logbook.
6 A Across the room, TRAINEE FLORENCIA ZAVALA (20s, oilskin) tends the lever frame.
* 7 A ¶ Behind them both, an old iron stove ticks.
8 A Neither looks at it.
9 D ARCHIBALD: Flo, number nine.
10 D FLORENCIA: Pulled.
11 D ARCHIBALD: Number twelve.
12 D FLORENCIA: Pulled.
* 13 A ¶ The phone rings.
14 A Both startle.
15 A Archibald lifts the receiver.
16 D ARCHIBALD: Tower. Yes. Yes. All clear on the up line.
17 A ¶ He hangs up.
18 A She steps back from the levers.
19 A He stares at the receiver as if it might ring again.
20 D FLORENCIA: What did they want?
21 D ARCHIBALD: Confirmation.
* 22 A ¶ The stove ticks.
* 23 A A boot scrapes on the stairs outside.
24 A Archibald stands.
25 A Florencia grips a lever.
* 26 A ¶ The door swings open.
27 A A drenched man in a conductor's coat staggers in: CONDUCTOR PERCY DALRYMPLE (60s, grey beard, cap in hand).
28 D PERCY: For God's sake, stop the eleven-fifteen.
29 D ARCHIBALD: The eleven-fifteen isn't due until midnight.
30 D PERCY: It left at nine.
31 A ¶ Archibald turns toward the board.
32 A Florencia lunges for a lever.
33 A He grabs her wrist.
34 A They freeze.
* 35 A Far away, a whistle shrieks.

### SCENE s00465 | EXT. PACK-ICE FLOE - ARCTIC OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN ISOLDE MARCHETTI-OKORO, WILFRED ACHTERBERG, TEMI, BOLDBAATAR, GWENLLIAN PRYCE-ADEYEMI, CAS, WOLFE
* 1 A ¶ A vast white plain, riven with blue cracks.
* 2 A A sled lies overturned, its runners splintered.
* 3 A Gray light bleeds into a pale horizon.
* 4 A The wind has dropped, leaving an unnatural hush.
5 A ¶ Four dogs lie curled in the lee of the wreck.
6 A Beside them, five survivors huddle around a small spirit stove, its flame hardly bigger than a thumbnail.
7 A ¶ CAPTAIN ISOLDE MARCHETTI-OKORO (50s, frost-crusted beard of scarf, steady eyes) crouches closest to the flame.
8 A DR. WILFRED ACHTERBERG (60s, bruised cheek, wire spectacles) rubs a bandaged hand.
9 A The navigator, TEMUJIN "TEMI" BOLDBAATAR (30s, parka hood rimmed with fur), studies a brass compass.
10 A The cook, GWENLLIAN PRYCE-ADEYEMI (40s, wool cap pulled to her eyebrows), stirs a pot of gray broth.
11 A And the youngest, CASPIAN "CAS" WOLFE (teens, voice cracked, eyelashes iced), sits wrapped in two blankets and shivers.
12 D ISOLDE: Rations.
13 D GWENLLIAN: Three days if we stretch it, Captain.
14 D ISOLDE: Stretch it.
15 D WILFRED: Isolde, the ice is moving.
16 D ISOLDE: I know, Wilfred.
17 D TEMI: Captain, the compass is spinning.
18 A ¶ Isolde crosses to him and takes the compass.
* 19 A The needle swings in slow circles, never settling.
20 D ISOLDE: Close to the pole?
21 D TEMI: Too close. Or too far.
22 D CAS: Does that mean we're lost?
23 D GWENLLIAN: Hush, Cas. Drink your broth.
24 A ¶ She hands him a tin cup.
25 A He takes it in both mittens.
26 D ISOLDE: Wilfred, the hand.
27 D WILFRED: It will mend.
28 D ISOLDE: It will blacken.
29 D WILFRED: Then it will blacken.
30 A ¶ He tucks it inside his coat.
31 A Isolde regards him for a long moment, then turns away.
32 D ISOLDE: Temi, pick a heading. Any heading. We cannot stay.
33 D TEMI: East.
34 D ISOLDE: Why east?
35 D TEMI: Because the sun comes from there.
36 D ISOLDE (almost smiling): That's as good a reason as any.
37 A ¶ Cas lifts his head.
38 A His voice is small.
39 D CAS: Captain, will the dogs come?
40 D ISOLDE: The dogs always come.
41 D GWENLLIAN: Not Bramble. Bramble's leg.
42 D ISOLDE: Then we carry Bramble.
43 A ¶ They all look at the old gray husky in the snow.
44 A Bramble thumps her tail once.
45 D WILFRED: Isolde, we can barely carry ourselves.
46 D ISOLDE: We will carry her anyway.
* 47 A ¶ A silence settles.
* 48 A The stove flickers.
49 A Temi folds the compass shut and tucks it into his sleeve.
50 D TEMI: East, then.
51 D GWENLLIAN: East.
52 D CAS: East.
53 A ¶ They begin to rise, one by one, creaking, stiff.
54 A Isolde kicks snow over the stove, and the flame dies.
55 A Wilfred lifts Bramble gently into his arms.
56 A Gwenllian shoulders the pack.
57 A Cas pulls his blankets tight.
58 A Temi checks the sky.
59 A ¶ Isolde stands last, looking back at the broken sled.
60 A She lays a gloved hand on the splintered runner, as if on the flank of an animal.
61 D ISOLDE (softly): Good work, old girl.
62 A ¶ She turns and walks east, and the others fall in behind her, five dark figures dwindling on the endless white.

### SCENE s00466 | INT. VICTORIAN CHEMIST SHOP - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL FAIRBROTHER, NELLIE QUINTANILLA-GRAY, AUGUSTUS HELLEBORE
* 1 A ¶ Rows of blue glass bottles gleam like sleeping eyes.
* 2 A Mahogany drawers labeled in copperplate.
* 3 A A brass scale, a mortar and pestle.
* 4 A A single gas lamp hisses above the counter.
5 A ¶ MR. EZEKIEL FAIRBROTHER (60s, black apron, half-moon spectacles) stands behind the counter, wiping a pipette with a cloth.
6 A His apprentice, NELLIE QUINTANILLA-GRAY (teens, ink-stained cuffs, a braid pinned up), sweeps the floor too slowly.
7 A And by the door, shaking rain from his umbrella, stands DR. AUGUSTUS HELLEBORE (50s, silk hat, black bag).
8 D AUGUSTUS: Fairbrother. A word.
9 D EZEKIEL: Doctor. We are closed.
10 D AUGUSTUS: I am aware.
11 D EZEKIEL: Then you will understand if I say good night.
12 D AUGUSTUS: I want to know about the foxglove.
13 A ¶ Nellie stops sweeping.
14 A Ezekiel folds the cloth in thirds and lays it on the counter.
15 D EZEKIEL: Foxglove is a common remedy.
16 D AUGUSTUS: In the quantity you dispensed to Mrs. Pennywhistle?
17 D EZEKIEL: I dispensed what was prescribed.
18 D AUGUSTUS: By whom?
19 D EZEKIEL: By you.
20 D AUGUSTUS: I prescribed a pinch.
21 D EZEKIEL: You prescribed a teaspoon, Doctor. In your own hand.
22 D AUGUSTUS: I did no such thing.
23 D NELLIE (quietly): I have the slip, sir.
24 A ¶ Both men turn.
25 A Nellie reaches under the counter and draws out a folded paper.
26 A Her hand is steady.
27 A She lays it flat.
28 D AUGUSTUS: That is a forgery.
29 D NELLIE: It is your signature.
30 D AUGUSTUS: Child, you do not know what you are saying.
31 D NELLIE: I know my letters, sir. I learned them from Mr. Fairbrother.
32 A ¶ Ezekiel nods, slowly.
33 A Augustus's face changes, the polite mask slipping, and beneath it something older and colder looks out.
34 A His fingers close around the handle of his black bag.
35 D AUGUSTUS: Fairbrother, you will regret this.
36 D EZEKIEL: Doctor, I have regretted many things. This is not one of them.
37 A ¶ Augustus stares at the paper.
38 A Then he snaps up his umbrella, turns, and strides out into the rain.
* 39 A The door slams.
* 40 A The bell above it jangles for a long time.
41 A ¶ Nellie lets out a breath.
42 A Ezekiel takes up his cloth again and resumes wiping the pipette.
43 D EZEKIEL [CONT'D]: You were right to keep it.
44 D NELLIE: You taught me that, too.

### SCENE s00467 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GRANDMOTHER AGATHA TSVETKOVA-BELL, DAMIEN OKAFOR-LINDSAY, NOELLE, BOY
* 1 A ¶ A long scrubbed-pine table.
* 2 A Sunlight through gingham curtains.
* 3 A A cast-iron stove ticks as it warms.
4 A Four people, four chairs, one pot of oatmeal between them.
5 A ¶ GRANDMOTHER AGATHA TSVETKOVA-BELL (70s, apron, silver bun) ladles porridge.
6 A At her left sits her son-in-law DAMIEN OKAFOR-LINDSAY (40s, work shirt, reading the paper).
7 A Across from him, his wife NOELLE (40s, hair still wet from the shower) butters toast.
8 A And at the end, in a chair too big for him, sits a quiet BOY (8, striped pajamas) who has not touched his bowl.
9 D AGATHA: Eat, child.
10 D BOY: Not hungry.
11 D NOELLE: Just a little.
12 D BOY: Not hungry.
13 A ¶ The two voices overlap, hers soft and his small.
14 A Damien lowers the paper.
15 D DAMIEN: Let him be.
16 D AGATHA: He was up all night. I heard him on the stairs.
17 D NOELLE: Was he sleepwalking?
18 D AGATHA: He was talking.
19 A ¶ Damien turns a page.
20 A Noelle sets the knife down.
21 A The Boy stirs his oatmeal with one finger.
22 D NOELLE: Who were you talking to, sweetheart?
23 D BOY: The man.
24 D DAMIEN: What man?
25 D BOY: The one at the end of the hall. He said you'd be angry.
26 A ¶ Agatha's ladle stops in the air.
27 A Damien sets the paper on the table.
28 A Noelle looks at the stove, and then at her mother.
29 D AGATHA (to the table): Eat your breakfast.
30 A ¶ She resumes ladling, and nobody speaks again.

### SCENE s00468 | INT. COUNTRY HOUSE - GREAT HALL - 1923 - EVENING
Detected names (may be incomplete or contain aliases): LADY WINIFRED PEMBROKE-ADEYEMI, REGGIE, ASHFORD-LU, MISS CORDELIA SANTANGELO, HORACE BLACKWOOD-ESSIEN, CONSTABLE HADDOCK
* 1 A ¶ A cold stone hall hung with antlers.
* 2 A A fire gutters in the vast hearth.
3 A At a long oak table sit four guests over the remains of a late supper.
4 A ¶ LADY WINIFRED PEMBROKE-ADEYEMI (60s, pearls, ebony cane) presides at the head.
5 A At her right sits her nephew, REGINALD "REGGIE" ASHFORD-LU (30s, rumpled dinner jacket, flushed).
6 A Opposite him, MISS CORDELIA SANTANGELO (30s, severe black dress, a secretary's notebook), keeps her eyes on the fire.
7 A And the family physician, DR. HORACE BLACKWOOD-ESSIEN (50s, silver whiskers), swirls his brandy.
8 D WINIFRED: More claret, Horace?
9 D HORACE: Thank you, Winifred.
10 D REGGIE: Auntie, the telephone is ringing again.
11 D WINIFRED: Let it.
12 D REGGIE: It has rung six times.
13 D WINIFRED: Then it will ring a seventh.
14 D CORDELIA (without looking up): I shall answer it, Lady Winifred.
15 A ¶ She rises, crosses the flagstones, and lifts the heavy receiver from its cradle on the wall.
16 D CORDELIA [CONT'D]: Pembroke Hall.
17 D CONSTABLE [V.O.] (tinny, through the earpiece): Miss Santangelo? Constable Haddock, calling from the village. I'm afraid there's been a death.
18 A ¶ Cordelia glances at the table.
19 A The others have stopped talking.
20 A Reggie sets down his glass.
21 D CORDELIA: Whose?
22 D CONSTABLE [V.O.]: The gamekeeper, miss. Found in the lower meadow an hour ago. I thought her ladyship ought to know.
23 D CORDELIA: Thank you, Constable.
24 A ¶ She replaces the receiver and turns back to the table.
25 D WINIFRED: Well?
26 D CORDELIA: It was Mr. Tolliver, my lady. He is dead.
27 A ¶ Winifred lowers her cane.
28 A Horace puts down his brandy.
29 A Reggie stares at the fire.
* 30 A The wind howls once in the chimney.
* 31 A ¶ At the far end of the hall, the great oak door creaks open.
32 A A drenched figure stands on the threshold: CONSTABLE HADDOCK (40s, rain cape, helmet in hand).
33 D HADDOCK: Beg pardon, my lady. I rode over directly. There are matters I need to ask.
34 D WINIFRED: Then come in out of the rain, Constable, and sit.
35 A ¶ He hangs his cape on an antler and takes the empty chair at the foot of the table.
36 A The fire cracks, and no one meets anyone's eyes.

### SCENE s00469 | INT. LUNAR ICE-MINING HABITAT - AIRLOCK BAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): TECHNICIAN ADEBAYO KOWALSKI-NAKAMURA, WARRANT OFFICER INGRID SOLBERG-MWANGI
* 1 A ¶ Dim sodium lamps.
* 2 A Racked suits hanging like hanged men.
* 3 A Frost creeping up the inner hatch.
4 A Two figures prepare for a walk.
5 A ¶ TECHNICIAN ADEBAYO KOWALSKI-NAKAMURA (40s, undersuit, cooling garment tubing coiled at his neck) checks the seal on his glove while his partner, WARRANT OFFICER INGRID SOLBERG-MWANGI (30s, shaved head, flight patch on her sleeve) tests a tether clip, tugs it twice, and clips it to his belt, then runs a gloved thumb along the seam of his helmet ring.
6 D INGRID: Pressure.
7 D ADEBAYO: Four-seven. Holding.
8 D INGRID: O2.
9 D ADEBAYO: Ninety-eight percent.
10 A ¶ She nods.
11 A He nods.
12 A Neither speaks for a moment, and he picks up a sample case, hefts it, and sets it back down.
13 A She turns the dial on the wall panel, and the inner hatch slides shut with a hiss.
14 D INGRID [CONT'D]: Last time, you said you saw a light in the crater.
15 D ADEBAYO: I saw a reflection.
16 D INGRID: You said light.
17 D ADEBAYO: Ingrid, it was nothing.
18 A ¶ She regards him through her visor.
19 A He looks at the floor.
* 20 A The pumps hum, drawing the air out of the bay, and the frost on the hatch deepens.
21 D INGRID: Then we go look at nothing.
* 22 A ¶ The outer door shudders open onto the black.
23 A He steps through first.
24 A She follows, paying out the tether behind her.

### SCENE s00470 | INT. GONDOLA CABLE CAR - ALPINE PASS - NIGHT
Detected names (may be incomplete or contain aliases): OKSANA VOLK, TEODOR, ARJUN, MIREILLE, BRAM, PIP
* 1 A ¶ A steel box the size of a closet, swaying one degree at a time.
* 2 A Frost climbs the windows.
* 3 A Far below, the resort lights blink on a timer nobody can reach.
4 A ¶ OKSANA VOLK (60s, retired nurse, wool hat pulled to her eyebrows) breaks a chocolate bar into six squares with her thumbnail.
5 A She hands them out in order of age, oldest to youngest.
6 A ¶ TEODOR (30s, lift mechanic, grease in the creases of his knuckles) turns the dial on a radio.
* 7 A Static.
8 A He turns it back.
* 9 A Static.
10 A ¶ ARJUN (17, rental skis between his knees) checks his phone.
* 11 A No bars.
12 A He checks it again.
13 A ¶ MIREILLE (40s, immaculate parka, one glove missing) tucks her bare hand into her armpit and says nothing about it.
14 A ¶ BRAM (50s, broad, red-faced) holds his square of chocolate without eating it.
15 A ¶ PIP (8) licks hers slowly, making it last.
16 D TEODOR: Wind drops by morning. They send the snowcat.
17 D OKSANA: Good.
18 A ¶ BRAM passes his chocolate to Pip.
19 A Pip looks at Oksana.
20 A Oksana nods once.
21 A Pip takes it.
22 A ¶ MIREILLE slides her glove off the other hand and gives it to Arjun without looking at him.
23 A He puts it on.
* 24 A ¶ The car sways.
* 25 A Nobody mentions it.

### SCENE s00471 | INT. MUNICIPAL SWIMMING POOL - DRAINED - DAY
Detected names (may be incomplete or contain aliases): HOLLIS BRANDVOLD, NADIA BRANDVOLD
* 1 A ¶ An Olympic-length basin, empty to the tiles.
* 2 A Lane lines still hang from their reels, slack as old rope.
* 3 A A faded blue fish is painted at the deep end.
* 4 A Pigeons walk the gutter.
5 A ¶ HOLLIS BRANDVOLD (60s, lanky, a lifeguard whistle still on a cord around his neck) stands on the pool floor with a push broom.
6 A He sweeps nothing in particular.
7 A ¶ NADIA BRANDVOLD (30s, his daughter, city-council lanyard, work shoes ill-suited to wet tile) climbs down the steel ladder one rung at a time.
8 A At the bottom she stops and looks up at the ceiling lights.
9 A ¶ He keeps sweeping.
10 A She walks toward him.
11 D HOLLIS: Careful by the drain. It's slick.
12 D NADIA: It's been closed since March.
13 D HOLLIS: Still slick.
14 A ¶ She reaches him.
15 A He doesn't stop.
16 A She takes hold of the broom handle.
17 A He lets her.
18 A For a moment they both hold it, neither moving.
19 D NADIA: They vote Thursday.
20 D HOLLIS: I heard.
21 D NADIA: I'm going to vote yes.
22 A ¶ He nods at the painted fish.
23 A His thumb rubs the whistle.
24 D HOLLIS: Your mother used to swim here at six a.m. Every day. Forty laps.
25 D NADIA: I know.
26 D HOLLIS: She hated the cold water. She did it anyway.
27 D NADIA: Dad.
28 A ¶ He takes the broom back.
29 A She lets go.
30 A He sets it against the wall and they both look at the deep end, where the tile is cracked in a long, clean line.
31 D HOLLIS: Fill it with dirt. Plant something.
32 D NADIA: That's the plan.
33 A ¶ He nods.
34 A She stands beside him.
35 A Neither leaves.
36 A A pigeon lifts out of the gutter and crosses the empty basin, and both of them follow it with their eyes until it clears the rim.

### SCENE s00472 | INT. NATURAL HISTORY MUSEUM - TAXIDERMY HALL - NIGHT
Detected names (may be incomplete or contain aliases): SUNNIVA HALVORSEN, MERIEM AIT-OUDIA, BASEMENT
* 1 A ¶ A long gallery with a ceiling lost in dark.
* 2 A Glass cases run down both walls like the windows of a train that stopped decades ago.
* 3 A Inside them: foxes mid-stride, owls with wings half-raised, a heron balanced on one leg in painted reeds.
* 4 A Dust lies over everything in a soft grey fur.
* 5 A ¶ Two flashlight beams cross the threshold and wander.
6 A ¶ SUNNIVA HALVORSEN (30s, cropped hair, a surveyor's vest with too many pockets) steps in first.
7 A She runs her light across the cases the way a person reads a menu in a language she half knows.
8 A ¶ MERIEM AIT-OUDIA (40s, heavy coat, an old camera strapped across her chest) follows two paces behind, breathing through her mouth.
9 D SUNNIVA: Council wants an inventory by Friday.
10 D MERIEM: Of what?
11 D SUNNIVA: Everything with a tag.
12 D MERIEM: Everything here has a tag.
13 A ¶ Sunniva crouches before a case of badgers.
* 14 A Their glass eyes catch the light and hold it a half-second too long.
15 A She tilts her beam and the shine slides away.
16 A ¶ Meriem lifts the camera.
17 A She frames the heron.
18 A She does not press the shutter.
19 A She lowers it, wipes the lens with her sleeve, and lifts it again.
20 D SUNNIVA: You can take the picture.
21 D MERIEM: I'm waiting for the light.
22 D SUNNIVA: It's a flashlight. It's not going to change.
23 A ¶ Meriem lowers the camera.
24 A She looks at the heron, then at the floor in front of its case.
* 25 A A line of small, clean prints crosses the dust there, pale and even, as if something had walked the length of the hall on bare feet.
26 A ¶ Sunniva sees them a moment after.
27 A She stands.
28 A She sets her light on the floor, pointing along the trail.
* 29 A It runs to the end of the gallery and into the dark between two cases.
30 D SUNNIVA [CONT'D]: Night guard.
31 D MERIEM: There is no night guard.
32 D SUNNIVA: Then somebody from the cleaning contract.
33 D MERIEM: No one has cleaned this hall in eleven years.
34 A ¶ The beam trembles.
35 A Neither of them says whose hand is holding it.
36 A ¶ Sunniva follows the prints a few steps.
37 A Meriem follows her.
* 38 A Between the cases there is a narrow service door, painted the same green as the wall.
* 39 A It is open an inch.
* 40 A Cold air breathes out of it, smelling of camphor and rain.
41 A ¶ Meriem reaches past her and pushes the door wider.
42 A She leans her light into the gap.
* 43 A Stairs, going down.
* 44 A On the third stair, a single wet footprint, still shining.
45 D SUNNIVA (quietly): That one's new.
46 D MERIEM: Yes.
47 A ¶ They stand together at the lip of the stairwell.
* 48 A Behind them, in the hall, something small and dry settles in one of the cases: a click, like a claw on glass.
49 A Neither turns around.
50 A ¶ Sunniva takes out her clipboard.
51 A She writes a line.
52 A She shows it to Meriem.
* 53 A ¶ The page says: BASEMENT - NOT ON INVENTORY.
54 A ¶ Meriem nods.
55 A She lifts the camera and, for the first time, presses the shutter.
* 56 A The flash fills the stairwell white.
* 57 A In the afterimage, the stairs are exactly as they were.
* 58 A The wet print is gone.
59 D MERIEM [CONT'D]: Friday.
60 D SUNNIVA: Friday.
61 A ¶ She pulls the green door shut.
* 62 A It latches with a sound like a held breath let go.
63 A Both of them go back down the long gallery, past the badgers, past the owls.
64 A They do not hurry.
* 65 A Behind them, every glass eye in the hall has turned a few degrees toward the door.
66 A ¶ Sunniva stops at the exit and puts her hand flat against the wall.
67 A She switches off her light.
68 A Meriem switches off hers.
* 69 A ¶ In the dark, the prints continue to cross the dust, one after another, toward the place where the two women had been standing.
70 D SUNNIVA [CONT'D] (whispering): Don't look back.
71 D MERIEM: I wasn't going to.
72 A ¶ She opens the door to the street.
* 73 A Rain falls through the streetlight, ordinary and loud.
74 A They step out into it side by side, and the door swings shut on its own, slow, with the patience of a thing that has all night.

### SCENE s00473 | INT. TOLL PLAZA - BOOTH 4 - NIGHT
Detected names (may be incomplete or contain aliases): WEN DAI, PRAKASH NAIR, MRS. OKAFOR
* 1 A ¶ A glass cubicle on an empty highway.
* 2 A A space heater ticks.
* 3 A A thermos, a paperback, a laminated sign reading EXACT CHANGE.
4 A ¶ WEN DAI (50s, reading glasses on a beaded chain) marks her page and slides the window open as headlights arrive.
5 A ¶ PRAKASH NAIR (30s, rumpled suit, a sleeping toddler visible in the car seat behind him) hands her a twenty.
6 A She makes change slowly, counting it out coin by coin.
7 D WEN: Long drive?
8 D PRAKASH: Not too bad.
9 A ¶ His hands stay on the wheel at ten and two.
10 A She hands him the coins.
11 A He puts them in the cup holder one at a time.
* 12 A ¶ A phone rings in the booth.
13 A Wen picks it up.
14 D MRS. OKAFOR [V.O.] (through the receiver, tinny): Wen, it's Ngozi at the state barracks. Is a grey Corolla at your gate?
15 A ¶ Wen looks at the grey Corolla.
16 A She looks at the toddler.
17 A She looks at Prakash's hands.
18 D WEN (into phone): No. Quiet night. I'll call you back.
19 A ¶ She hangs up.
20 A Prakash has not moved.
21 D WEN [CONT'D]: Your tail light is out. Take the service road. The patrol doesn't run it.
22 A ¶ He stares at her.
23 A She slides the window shut and opens her paperback.

### SCENE s00474 | INT. BOWLING ALLEY - PARTY ROOM - DAY
Detected names (may be incomplete or contain aliases): GUS PRICE, YOLANDA PRICE, KENJI PRICE, DOROTHEA PRICE
* 1 A ¶ Streamers, a sheet cake, paper plates.
* 2 A Lane 9 thunders next door.
* 3 A A banner reads HAPPY 80TH, GUS.
4 A ¶ YOLANDA PRICE (50s) cuts the cake into squares too small for anyone.
5 A GUS PRICE (80, her father, party hat crooked) watches the knife.
6 A ¶ KENJI PRICE (20s, her son) sits at the end of the table scrolling through his phone.
7 A DOROTHEA PRICE (50s, Yolanda's sister, fresh off a flight) drops her coat across a chair and stays standing.
8 D DOROTHEA: Nobody told me it was today.
9 D YOLANDA: I texted you.
10 D DOROTHEA: You texted me Tuesday.
11 A ¶ Yolanda sets a plate in front of Gus.
12 A Dorothea moves it six inches to the left.
13 A Yolanda moves it back.
14 A They both let go at the same time.
15 D GUS: I like the corner piece.
16 A ¶ Kenji looks up.
17 A Yolanda and Dorothea lunge for the cake knife at once.
18 A They stop, hands on the handle, faces close.
19 D YOLANDA: I'll do it.
20 D DOROTHEA: You've done everything. Clearly.
21 A ¶ She yanks the knife.
* 22 A Frosting smears across the tablecloth.
23 A Kenji stands.
24 A Gus lifts his hat off his head and sets it on the table, very gently, like a man laying down a hand of cards.
* 25 A ¶ Through the wall, Lane 9 roars.
26 A Nobody at the table flinches.

### SCENE s00475 | INT. GRAIN ELEVATOR - BASE LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): CASS, DUDA, FENWICK OKORO, MARGUERITE LAU
* 1 A ¶ Dust hangs in the work light.
* 2 A Conveyor belts, silent.
* 3 A A hopper the size of a church.
4 A ¶ CASIMIR "CASS" DUDA (40s, night foreman, canvas coat) walks the catwalk with a clipboard.
5 A Counting bins.
* 6 A Boots ring on steel.
* 7 A ¶ Something shifts in the grain below.
8 D CASS: Fenwick?
* 9 A ¶ No answer.
10 A He taps his flashlight against his palm.
11 A ¶ FENWICK OKORO (20s, new hire, hard hat too big) climbs up from a ladder at the far end.
12 A Wipes his hands on his overalls.
13 A Looks pale.
14 D FENWICK: Bin six is warm.
15 D CASS: Grain heats. Settles.
16 D FENWICK: It's breathing, Cass.
17 A ¶ Cass hears it now.
* 18 A A slow rattle, like a sleeper in the next room.
19 A Cass swings his beam over the side.
20 A Fenwick leans out beside him, and the grain below rises in a smooth dome, as if something is turning over under a blanket, and Cass grabs Fenwick by the collar while the light jumps across the rafters and a third person steps out from behind a support column, silent, in a yellow slicker.
21 A ¶ The newcomer is MARGUERITE LAU (60s, inspector's badge, white braid).
22 A She raises a hand for quiet.
23 D MARGUERITE: Both of you. Back to the stairs. Walk.
24 D CASS: Who are you?
25 D MARGUERITE: The reason this elevator was condemned in 1987.
* 26 A ¶ The dome in the grain sinks.
* 27 A Slowly the rattle stops.
28 D FENWICK: Is it gone?
29 D MARGUERITE: It is listening.
30 A ¶ They walk to the stairs together, step for step, not looking back.
* 31 A Behind them a single kernel rolls down the slope of the hopper and clicks against the steel.

### SCENE s00476 | INT. RUINED OPERA HOUSE - STALLS - DAY
Detected names (may be incomplete or contain aliases): SERGEANT OKONKWO, CORPORAL LINDQVIST, PRIVATE BAPTISTE, MEDIC TRAN, WOUNDED SOLDIER, PETRESCU, ACHTERBERG
* 1 A ¶ Roof gone.
* 2 A Rain falls on velvet seats.
* 3 A A chandelier lies shattered across the orchestra pit.
* 4 A Distant artillery thumps.
5 A ¶ SERGEANT OKONKWO (40s, broad, helmet strap chewed) crouches at the edge of the stage with his rifle.
6 A Hand signals.
7 A Behind him in the stalls, four soldiers go low between the seat rows.
8 A ¶ CORPORAL LINDQVIST (20s, pale, glasses taped at the hinge) scans the balcony.
9 A PRIVATE BAPTISTE (19, carrying the radio) hunches under the pit rail.
10 A MEDIC TRAN (30s, red cross on a torn sleeve) drags a bag across the aisle.
11 A ¶ Okonkwo signals: two fingers, left.
12 A They move.
13 A He moves with them.
* 14 A ¶ A cough from the stage-right curtain.
15 A ¶ All five freeze.
16 A Rifles swing as one.
17 A ¶ A figure staggers out.
18 A Wounded.
19 A Uniform from the wrong side, no helmet, hands raised, one hand red to the wrist.
20 D WOUNDED SOLDIER (accented, rasping): Please. Please.
21 D OKONKWO: Down! On your knees!
22 A ¶ He drops.
23 A Tran crosses the gap in three strides and tears his sleeve open.
24 A He grips her wrist; she shoves it away.
25 D TRAN: Hold still.
26 D WOUNDED SOLDIER: Petrescu. Mihai Petrescu.
27 D OKONKWO: Where's your unit?
28 D PETRESCU: Gone. Gone. Under the stairs. They are coming for the radio.
29 A ¶ Baptiste hugs the radio set to his chest.
30 A Lindqvist spins toward the exits.
* 31 A A shell lands somewhere close and plaster rains from the proscenium.
32 A ¶ ACHTERBERG (20s, sniper, scope cap between his teeth) is up in the dress circle, rifle braced on a brass rail.
33 D ACHTERBERG: Movement in the lobby! Boots on marble!
34 D LINDQVIST: How many?
35 D PETRESCU: Twelve. Fifteen. They have a mortar.
36 D OKONKWO: Baptiste, call it in. Tran, he walks or he stays. Lindqvist, left aisle.
37 A ¶ They break in four directions.
38 A Petrescu pulls himself up by the stage rail and Tran props him by the belt.
39 A Together they go, stumbling, toward the pit door.
* 40 A ¶ A second shell.
* 41 A The chandelier trembles in the rubble and a single crystal drops, ringing, across the stone.

### SCENE s00477 | INT. MATTRESS SHOWROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAN, GUARD DESHAWN, GILBERT
* 1 A ¶ Ninety beds in perfect rows.
* 2 A A neon sign: SLEEP KINGDOM.
* 3 A Rain on the roll-up door.
* 4 A One security light, buzzing.
5 A ¶ A MAN in a bathrobe (50s, slippers, a thermos of soup) sits on the edge of a king-size display, staring at the ceiling.
6 A ¶ GUARD DESHAWN (30s, polyester uniform, flashlight) enters from the back office.
7 A Stops.
8 A Raises the flashlight.
9 D GUARD DESHAWN: Sir.
10 A ¶ The man waves without looking.
11 D MAN: Evening.
12 D GUARD DESHAWN: Sir. We are closed.
13 D MAN: I know.
14 D GUARD DESHAWN: How did you get in?
15 D MAN: Ordered a delivery. Left the door ajar. Your driver was very nice.
16 D GUARD DESHAWN: You can't be here.
17 D MAN: I haven't slept in six weeks. Do you know what that does to a person?
18 D GUARD DESHAWN: No.
19 D MAN: It does something. Not good. I keep seeing a man in the corner of the room. Turns out it's a coat rack. But the point stands.
20 D GUARD DESHAWN: Sir. I will have to call someone.
21 D MAN: Call whoever you like. Let me just try this one for ten minutes.
22 D GUARD DESHAWN: It's a three-thousand-dollar mattress.
23 D MAN: Hence the ten minutes.
24 D GUARD DESHAWN: I'm going to need your name.
25 D MAN: Gilbert.
26 D GUARD DESHAWN: Gilbert what?
27 D GILBERT: Gilbert Ferreira-Whitlock. Hyphenated, a long story, involves a cousin.
28 D GUARD DESHAWN: Mr. Whitlock.
29 D GILBERT: Ferreira-Whitlock. The hyphen is the whole point.
30 D GUARD DESHAWN: Gilbert. My shift ends at six.
31 D GILBERT: Then we have six hours.
32 D GUARD DESHAWN: You don't have six hours. You have until I call my manager.
33 D GILBERT: Your manager is Brenda. Brenda told me, and I quote, "he's a sweetheart, let him sleep."
34 D GUARD DESHAWN: When?
35 D GILBERT: Tuesday. At the open house. I do not remember it clearly but I trust Brenda.
36 D GUARD DESHAWN: There is no open house on Tuesday.
37 D GILBERT: Then it was a dream. A very restful dream.
38 D GUARD DESHAWN: Gilbert, please.
39 D GILBERT: Deshawn. May I call you Deshawn? It says Deshawn on the tag.
40 D GUARD DESHAWN: It says GUARD DESHAWN on the tag.
41 D GILBERT: That's what I said.
42 D GUARD DESHAWN: You said Deshawn.
43 D GILBERT: It's a lovely name.
44 A ¶ Deshawn sits on the next bed over.
* 45 A Springs sigh.
46 A He puts the flashlight on his knee.
47 D GUARD DESHAWN: My mother had a bed like this.
48 D GILBERT: Did she sleep well?
49 D GUARD DESHAWN: She did.
50 D GILBERT: There. You see.
51 A ¶ Gilbert lies down in his robe, hands folded on his chest.
52 A He closes his eyes.
53 D GILBERT [CONT'D]: Don't leave. I might wake up.
54 D GUARD DESHAWN: Ten minutes.
55 D GILBERT: Ten minutes.
56 A ¶ Deshawn lies back.
* 57 A The neon buzzes.
* 58 A The rain keeps on.
59 A ¶ Two snores, nearly in unison.

### SCENE s00478 | INT. FIELD HOSPITAL - CONVERTED TRAIN CARRIAGE - NIGHT
Detected names (may be incomplete or contain aliases): ISADORA FONTAINE, NURSE KWABENA ASANTE, ORDERLY SZYMON, SOLDIER, ADEYEMI
* 1 A ¶ A passenger coach gutted for surgery.
* 2 A Cots where seats were.
* 3 A Hand-pumped lamps swing with the rails.
* 4 A A plywood table bolted to the floor.
5 A ¶ DR. ISADORA FONTAINE (40s, surgical cap, sleeves rolled) leans over a patient on the table.
6 A NURSE KWABENA ASANTE (30s, steady hands) holds retractors.
7 A ORDERLY SZYMON (19, sleeves too long) feeds a hand-crank fan.
8 A A fourth figure, a SOLDIER in his twenties, lies still under the sheet with his boot half off.
9 D FONTAINE: Everyone, suction. Now.
10 A ¶ Kwabena and Szymon both lunge for the pump.
11 A They collide, hands tangled on the handle.
12 D KWABENA: Mine.
13 D SZYMON: Sorry. Sorry.
14 D FONTAINE (to herself): Come on. Come on, you stubborn thing.
* 15 A ¶ The train lurches on a curve.
* 16 A Instruments slide.
17 A Fontaine pins the tray with her forearm.
18 A Kwabena catches a clamp mid-air.
19 D KWABENA: Doctor, pressure is dropping.
20 D FONTAINE: I see it. Szymon, more light, left side.
21 D SZYMON: Which left?
22 D FONTAINE: Yours.
23 A ¶ He swings the lamp over.
24 A The soldier on the table gasps and arches.
25 A Everyone stills.
26 D SOLDIER (hoarse): Don't cut my leg.
27 D FONTAINE: We're not cutting your leg.
28 D SOLDIER: Promise.
29 D FONTAINE: I promise. What's your name?
30 D SOLDIER: Corporal. Corporal Adeyemi.
31 D FONTAINE (to the room): Okay, Adeyemi. We're going to keep you.
32 D ADEYEMI (whispering, to no one): Mama, please.
33 A ¶ Kwabena and Szymon exchange a look.
34 A Szymon wipes his eyes on his sleeve.
* 35 A The fan hums.
36 D FONTAINE: Last stitch. Hold the line. Everybody breathe out.
* 37 A ¶ The carriage exhales.
38 A The train rattles over a bridge, and for one second all four of them are still, as if the whole world is balanced on a thread.

### SCENE s00479 | INT. ICE-FISHING HUT - NIGHT
Detected names (may be incomplete or contain aliases): ELSPETH CRANE, LENNART BOYD
* 1 A ¶ A plywood box on a frozen lake.
* 2 A One lantern.
* 3 A Two stools around a hole cut in the ice, black water glinting.
* 4 A Lines run down into it, motionless.
5 A ¶ ELSPETH CRANE (60s, wool cap, thermos) sits with her rod across her knees.
6 A She hasn't touched her tea.
7 A ¶ LENNART BOYD (30s, her nephew, borrowed parka) holds his rod with both hands, jaw tight.
* 8 A ¶ The ice groans somewhere out in the dark.
* 9 A A long, falling note.
10 D LENNART: That's normal.
11 D ELSPETH: Mm.
* 12 A ¶ Silence.
13 A Lennart reels in an inch.
14 D LENNART: You said nothing bites after midnight.
15 D ELSPETH: I said nothing should.
16 A ¶ She pours tea into the lid and sets it by his boot.
17 A He doesn't pick it up.
* 18 A ¶ Down in the hole, the black water is perfectly still.
* 19 A Then a ring spreads outward from its center.
* 20 A Small, round, deliberate.
21 A ¶ Neither of them looks at it.
22 D LENNART: Aunt Elspeth.
23 D ELSPETH: Hush.
* 24 A ¶ Lennart's line begins to run.
* 25 A The reel clicks.
* 26 A Faster.
27 A He grips it harder; his knuckles whiten.
28 A Elspeth rests one hand on his wrist.
29 D ELSPETH [CONT'D]: Let it go.
30 D LENNART: It's a good one.
31 D ELSPETH: Let it go.
32 A ¶ He lets go.
* 33 A The rod slides across the ice and down the hole without a splash.
* 34 A The line sings out, then stops.
* 35 A The water goes still again.
36 A ¶ Elspeth screws the cap on her thermos.
37 A She stands and gathers the stools.
38 A Lennart stays seated, looking at the hole, his hands open in his lap.
39 D ELSPETH [CONT'D]: Come on.
40 A ¶ He rises, slowly.
41 A She turns the lantern down.
* 42 A In the last light, the water in the hole is already skinning over with fresh ice.

### SCENE s00480 | INT. HIGH SCHOOL GYMNASIUM - WRESTLING WEIGH-IN - MORNING
Detected names (may be incomplete or contain aliases): COACH ANTONIA BELLWETHER, DEX, MAHLER, ZAVALA, ASSISTANT, PRIYA MENON, RAMÓN
* 1 A ¶ Folding tables, a digital scale on a plywood riser, a banner for the Regional Qualifier.
* 2 A Bleachers half pulled out.
* 3 A The smell of floor wax and cut-up oranges.
4 A ¶ COACH ANTONIA BELLWETHER (50s, track jacket, stopwatch on a lanyard) stands beside the scale with a clipboard.
5 A Calm.
6 A Her whistle hangs unused.
7 A ¶ DEXTER "DEX" MAHLER (17, 132 pounds on a good day, hoodie soaked through) waits in line in his socks.
8 A He's been running in trash bags since five a.m.
9 A ¶ OFFICIAL RAMÓN ZAVALA (60s, striped shirt, reading glasses low) hunches over the scale display.
10 A Behind him, a young ASSISTANT, PRIYA MENON (20s, volunteer lanyard), writes weights in a ledger.
11 D RAMÓN: Next.
12 A ¶ Dex steps up.
* 13 A The scale hums.
* 14 A The digital readout flickers.
15 D RAMÓN [CONT'D]: One thirty-one point six.
16 D PRIYA: Pass.
17 A ¶ Coach Bellwether nods.
18 A She doesn't smile.
19 A She writes a tick mark.
20 D DEX: Thanks.
21 A ¶ He steps down.
22 A His legs are slightly wobbly.
23 A Bellwether hands him a banana without looking.
24 D BELLWETHER: Eat that slow. Drink the water slow. You wrestle at two.
25 D DEX: Yes, Coach.
26 D BELLWETHER: Sit.
27 A ¶ He sits on the bottom bleacher.
28 A Peels the banana.
29 A Eats a quarter of it.
30 A Closes his eyes.
31 A ¶ Priya turns a page.
32 A Ramón wipes the scale platform with a towel.
33 A Bellwether crosses to the table and pours coffee into a paper cup.
34 D PRIYA (low): He looks good.
35 D BELLWETHER: He looks like a kid who hasn't had a meal in four days.
36 D PRIYA: He made weight.
37 D BELLWETHER: He did.
38 A ¶ She sips.
39 A She watches Dex across the gym, and for a long moment she is very still.
40 D BELLWETHER [CONT'D]: Ramón. Can I see the scale certification?
41 D RAMÓN: It's on the wall.
42 D BELLWETHER: I'd like to see it. Please.
43 A ¶ Ramón looks at her over his glasses.
44 A He takes a laminated card from a clip on the table and hands it over.
45 A Bellwether reads it.
46 A Reads the date.
47 A Her thumb pauses on the line.
48 D BELLWETHER [CONT'D]: Expired in August.
49 D RAMÓN: That's a typo.
50 D BELLWETHER: Is it.
51 D PRIYA: Coach, I think the district renewed it. I can check.
52 D BELLWETHER: Do.
53 A ¶ Priya hurries out.
* 54 A The gym is very quiet.
55 A In the bleachers, Dex has opened his eyes.
56 A He watches the coach.
57 D DEX: Coach?
58 D BELLWETHER: Eat your banana.
59 D DEX: What's wrong?
60 D BELLWETHER: Eat.
61 A ¶ She walks to the scale and steps onto the platform in her shoes.
* 62 A The readout flashes: 148.
63 A She steps off.
64 A Takes a gym bag from beneath the table.
65 A Sets it on the platform.
* 66 A Zero.
67 A She sets a ten-pound weight from her pocket on top.
* 68 A The scale reads 3.
69 A ¶ Ramón's face does not change.
70 D BELLWETHER [CONT'D]: Three.
71 D RAMÓN: It drifts.
72 D BELLWETHER: It drifts by seven pounds. In whose favor, Ramón?
73 D RAMÓN: Coach, I'm just the official.
74 D BELLWETHER: You are the official who has been rejecting my kids since September.
75 A ¶ Dex stands, the banana forgotten in his fist.
76 D DEX: So I didn't make weight?
77 D BELLWETHER: You made weight. You made it four times over. Your actual weight is a hundred and thirty-eight.
78 D DEX: That's...
79 D BELLWETHER: Over. Over by six. You've been under-reported all season on this scale and over-reported on that one.
80 A ¶ She takes the clipboard and tucks it under her arm.
81 D BELLWETHER [CONT'D]: Priya is going to come back with a form. And you will not sign anything, Ramón, until a state official arrives.
82 A ¶ Priya re-enters at the door.
83 A She stops.
84 A She sees the three of them frozen in the long light from the high windows.
85 D PRIYA: It was renewed.
86 D BELLWETHER: I know.
87 D PRIYA (quietly): Coach, the district never renewed it. I called. The man said you'd been asking since August.
88 A ¶ Ramón sits down on the riser.
* 89 A The scale behind him gives a soft electronic chime, as if politely clearing its throat.

### SCENE s00481 | INT. AMBULANCE - PARADE ROUTE - DAY
Detected names (may be incomplete or contain aliases): PARAMEDIC LUCIANA ORTEGA, MAN, FITZ, BOYLE, INTERN SUNITA RAO, DRIVER MOSES BELL, DELACROIX-NGUYEN, SON, JOON-HO KANG
* 1 A ¶ Siren off.
* 2 A Confetti on the windshield.
* 3 A A marching band thumps outside.
* 4 A The rig is parked in a crowd.
5 A ¶ PARAMEDIC LUCIANA ORTEGA (30s, ponytail) kneels over a MAN on the gurney.
6 A He is gray, gasping.
7 A PARAMEDIC FITZGERALD "FITZ" BOYLE (50s, mustache) shoves an oxygen mask over his face.
8 A INTERN SUNITA RAO (20s, first week) clutches the monitor.
9 A DRIVER MOSES BELL (40s, hi-vis vest) leans in from the front seat.
10 A A bystander, MRS. DELACROIX-NGUYEN (70s, parade sash), clambers in uninvited.
11 A A SON, JOON-HO KANG (20s, shaking), hovers at the rear doors.
12 D LUCIANA: Fitz, line, now.
13 D FITZ: Doing it, Lu.
14 D SUNITA: Pressure's ninety over fifty!
15 D MOSES: Do I roll?
16 D MRS. DELACROIX-NGUYEN: He's my neighbor! He sings in the choir!
17 D LUCIANA: Ma'am, out.
18 D JOON-HO: Dad! Dad, look at me!
19 D FITZ: Joon-ho, back up, give her room.
20 D SUNITA: Eighty over forty!
21 D LUCIANA: Push epi. Sunita, you push it.
22 D SUNITA: Me?
23 D LUCIANA: You.
24 A ¶ Sunita takes the syringe.
25 A Her hand trembles.
26 A Fitz steadies her wrist.
27 D FITZ: Easy, kid. Slow.
28 A ¶ She pushes.
29 A Everyone holds still.
* 30 A The band outside blares a brass chord.
* 31 A ¶ The monitor beeps.
* 32 A Beeps again.
* 33 A Settles into a rhythm.
34 D SUNITA: Ninety-five over sixty.
35 D MOSES: Moses is rolling.
36 A ¶ Luciana sits back on her heels and exhales.
37 A Mrs. Delacroix-Nguyen crosses herself.
38 A Joon-ho grips the rail.
39 D JOON-HO: Is he okay?
40 D LUCIANA: He's coming back, Joon-ho. You did good.
41 D FITZ: Sunita did good.
42 D SUNITA (shaking, grinning): I did good?
43 D LUCIANA: You did good, rookie.
44 A ¶ Moses pulls out.
* 45 A The crowd parts.
46 A A tuba player salutes.

### SCENE s00482 | INT. HAND CAR WASH - BAY 2 - NIGHT
Detected names (may be incomplete or contain aliases): VIC, ALMEIDA, LORETTA SPENCE, PAULIE OKAFOR-REYES, MAN
* 1 A ¶ A concrete tunnel hosed down for the night.
* 2 A Squeegees on hooks, foam drying on the walls, a radio playing low cumbia.
* 3 A A black sedan is parked in the middle, suds still sliding off its hood.
4 A ¶ VICTOR "VIC" ALMEIDA (40s, rubber apron, tattoo of a swallow on his neck) wrings out a chamois.
5 A LORETTA SPENCE (50s, owner, reading glasses, bank bag on her hip) counts bills on an upturned bucket.
6 A PAULIE OKAFOR-REYES (20s, new kid, headphones around his neck) dries the rims one at a time.
7 D VIC: Loretta, you want me to lock the front?
8 D LORETTA: In a minute.
9 D PAULIE: Boss, is this guy coming back for his car?
10 D VIC: Mind your rims.
11 D PAULIE: He left it two hours ago. He said ten minutes.
12 D LORETTA: Paulie, count the tip jar for me.
13 D PAULIE: There's only eleven bucks.
14 D VIC: That's eleven more than the last time.
15 A ¶ Loretta looks up, smiling, folds the bills into the bag, snaps it shut.
16 A Paulie opens the trunk to wipe the seals.
17 A Vic hangs a squeegee on its hook and crosses to the door and drops the latch; Loretta watches him do it and laughs lightly at a joke only she remembers; Paulie freezes with a rag in one hand and stares into the trunk.
18 D PAULIE: Vic.
19 D VIC: What?
20 D PAULIE: Vic, there's a guy in here.
21 A ¶ Loretta stops laughing.
22 A Vic walks back, slow.
23 A The three of them look down into the dark trunk.
24 A Inside, a MAN in a suit lies on his side, eyes open, a neat hole in his collar.
25 D LORETTA: Close it.
26 D PAULIE: He's dead. Boss, he's dead.
27 D VIC: Paulie. Close it.
28 D LORETTA: Vic, you said Dominguez would pick it up in the morning.
29 D VIC: That's what he told me.
30 D LORETTA: Then why is it in my bay?
31 D PAULIE: Whose guy is that?
32 D LORETTA: Nobody's.
* 33 A ¶ Headlights sweep the front window.
* 34 A A car idles outside.
* 35 A The radio plays on.
36 A Loretta lays the bank bag on the bucket, wipes her hands on her slacks, and turns to face the door.

### SCENE s00483 | INT. PLANETARIUM - DOME CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): FIGURE ONE, TEO
* 1 A ¶ Concrete ring under a hemispherical ceiling.
* 2 A Tilted seats.
* 3 A A star projector crouches in the center like a black insect.
4 A ¶ A FIGURE in coveralls, faceless behind a balaclava, clips a harness to the projector's rail.
5 A Quick, practiced.
* 6 A A radio crackles at his hip.
7 A ¶ A second FIGURE (a woman, short, headlamp off) climbs the access ladder with a canvas bag.
8 D FIGURE ONE: Eleven minutes.
9 D FIGURE TWO: Ten.
10 A ¶ She unzips the bag.
* 11 A Inside, a glass cylinder wrapped in foam: the meteorite on loan from Geneva.
* 12 A ¶ Footsteps in the corridor outside.
* 13 A A key ring jingles.
14 A Both freeze.
15 A Her hand lands on his sleeve.
16 A ¶ Neither moves.
17 A His breathing slows.
18 A Her thumb presses his wrist, once, twice.
* 19 A ¶ The footsteps recede.
20 A They exhale together.
21 D FIGURE ONE (pulling off the balaclava): Name's Teo. Since we're doing this.
22 D FIGURE TWO (pulling off hers): Marisol.
23 D TEO: Don't tell me the rest.
24 A ¶ She wraps the cylinder.
25 A He doesn't look at it.
26 A He looks at the dome, where a single painted star glows, forgotten by the maintenance crew.

### SCENE s00484 | INT. CORPORATE OFFICE - SEVENTH-FLOOR CONFERENCE ROOM - DAY
Detected names (may be incomplete or contain aliases): DEBORAH QUILL, RAJ PATWARDHAN, CHLOE BEAUMONT
* 1 A ¶ A glass box overlooking a parking structure.
* 2 A A whiteboard reads SYNERGY SPRINT in three colors of marker.
* 3 A A bowl of untouched fruit.
4 A ¶ DEBORAH QUILL (40s, VP of Culture, lanyard, smile fixed) stands at the head of the table.
5 A RAJ PATWARDHAN (30s, analyst, laptop open, tie loosened) sits halfway down.
6 A CHLOE BEAUMONT (20s, intern, notebook on her knee) sits at the far end, as if hoping to be forgotten.
7 D DEBORAH: So. We're all aligned that the new initiative is a game-changer.
8 D RAJ: Which initiative?
9 D DEBORAH: The one in the email.
10 D RAJ: There were four emails.
11 D DEBORAH: The one with the rocket emoji.
12 D RAJ: That was a typo. It was supposed to be a calendar.
13 D DEBORAH: The rocket stays. The rocket is the brand.
14 D RAJ: Deborah, with respect, the rocket is a tool that reassigns three departments to a platform we have not purchased.
15 D DEBORAH: Which is why we're being proactive.
16 D RAJ: We are being fictional.
17 D DEBORAH: We are being agile.
18 D RAJ: We are being laid off. In five weeks. By the rocket.
19 D DEBORAH: Raj, I'd love for you to hear yourself.
20 D RAJ: I hear myself. I've heard myself since Q2. Nobody else seems to.
21 D DEBORAH: Chloe, what do you think?
22 D CHLOE (barely audible): Is the bowl of fruit for us?
23 D DEBORAH: It's for morale.
24 D CHLOE: It has been there since Monday.
25 D DEBORAH: Fruit takes time to work.
26 D RAJ: Deborah.
27 D DEBORAH: Yes, Raj.
28 D RAJ: I'm resigning.
29 D DEBORAH: You can't, we have a retrospective.
30 D RAJ: That's the best argument for it.
31 D DEBORAH: Then let's do the retrospective first, and you can resign after as a, quote, learning.
32 D RAJ: I'll take the fruit.
33 D DEBORAH: Take two.
34 A ¶ Raj picks up the bowl and walks out.
35 A Deborah stares at the door.
36 A Chloe slowly raises her hand.
37 D CHLOE: Can I go with him?
38 D DEBORAH: Please. Take notes.

### SCENE s00485 | INT. ROLLER DERBY ARENA - HOME LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ROSIE RIOT, DUARTE, JUNE, ABARA, ZEKE, WARDELL, BIX, HOLLANDER-SINGH
* 1 A ¶ Cinderblock walls painted purple.
* 2 A Metal lockers, dented.
* 3 A Skates in a heap, laces knotted.
* 4 A A boombox plays muffled brass from the rink upstairs.
5 A ¶ CAPTAIN ROSALIE "ROSIE RIOT" DUARTE (30s, shoulders like a door, fishnet sleeves) paces the room with her helmet under one arm.
6 A JUNE "JUNEBUG" ABARA (20s, jammer, a half-eaten banana in her fist) sits cross-legged on a bench.
7 A COACH EZEKIEL "ZEKE" WARDELL (60s, cardigan, bad knee) props himself against a locker and consults a clipboard.
8 A BEATRIX "BIX" HOLLANDER-SINGH (40s, the team's blocker, mouthguard hung on her neck) kneels to lace a skate, while Rosie stops, looks at Junebug, looks at Zeke, and starts pacing again, and June takes a bite of banana and offers Bix the other half, which Bix waves off without lifting her eyes from her laces.
9 D ZEKE: They're quick but they're not smart. First jam, don't engage.
10 D ROSIE: We don't engage?
11 D ZEKE: You hold the line. June skates.
12 D JUNE: I skate.
13 D ROSIE: Hold the line.
14 D BIX: Hold the line.
15 D ROSIE: Hold the line.
16 D BIX: Hold the line.
17 A ¶ They laugh.
18 A Zeke does not.
19 D ZEKE: Rosie. A word.
20 A ¶ She crosses to him.
21 A They step into the corridor.
* 22 A A pipe drips.
23 A He does not look at her for a while, then he takes his glasses off and rubs the bridge of his nose.
24 D ZEKE [CONT'D]: My knee's done after tonight.
25 D ROSIE: I know.
26 D ZEKE: You're getting the whistle next season.
27 A ¶ She stands very straight.
28 A Her gloved hand finds the doorframe.
29 D ROSIE: Win first.
30 D ZEKE: Win first.
* 31 A ¶ Down the hall, the brass band reaches its finale.
32 A Bix calls from inside.
33 D BIX [O.S.]: Captain! They're announcing us!
34 A ¶ Rosie squares her shoulders.
35 A Zeke tucks the clipboard under his arm.
36 A Together they go in.

### SCENE s00486 | INT. ROOFTOP RADIO SHACK - NIGHT
Detected names (may be incomplete or contain aliases): TEDDY, LINDGREN, VOICE, GUNNAR
* 1 A ¶ A tarpaper hut on a flat roof above a laundromat.
* 2 A Antenna wire runs out the window like a clothesline.
* 3 A A ham-radio rig glows green.
* 4 A A desk lamp, a scatter of QSL cards, a cracked globe.
5 A ¶ THEODORA "TEDDY" LINDGREN (16, braids, headphones around her neck) leans over the microphone, one foot tucked under her.
6 A She's been here for hours.
7 A ¶ She presses the key.
8 D TEDDY: CQ, CQ. This is Whiskey Two Tango Lima. Anyone out there?
* 9 A ¶ Static rolls.
10 A She turns the dial.
* 11 A A faint voice surfaces.
12 D VOICE [V.O.] (over radio, crackly): Whiskey Two Tango Lima, this is Kilo Nine Echo. I read you, three by three.
13 A ¶ Teddy grins.
14 A She grabs the mic.
15 D TEDDY: Kilo Nine Echo! Where are you?
16 D VOICE [V.O.]: Outside Reykjavik. Fishing boat. You're my first contact this month.
17 D TEDDY: Seriously? I'm on a roof in Newark.
18 D VOICE [V.O.]: Newark. Lovely. What's your name, Newark?
19 D TEDDY: Teddy.
20 D VOICE [V.O.]: Teddy. I'm Gunnar.
21 A ¶ Her smile grows.
* 22 A Then, from below, a door slams.
* 23 A Footsteps on the stairwell.
* 24 A A heavy knock on the roof hatch, twice.
25 A ¶ She freezes, mic in hand.
* 26 A The green light flickers on her face.
27 D TEDDY (whispering into the mic): Gunnar, I gotta go. My dad's home.
28 D GUNNAR [V.O.]: Come back tomorrow?
29 D TEDDY: Maybe.
* 30 A ¶ Another knock, louder.
31 A She switches the rig off.
* 32 A The glow dies.
33 A She sits in the dark, hand on the dial, listening to the quiet.
34 A ¶ Then, softly, she clicks the lamp back on and taps out three beeps on the key.
* 35 A Dit dit dit.
* 36 A Dah dah dah.
* 37 A Dit dit dit.
38 D TEDDY [CONT'D] (to herself): See you tomorrow, Gunnar.
39 A ¶ She grabs her headphones and heads for the door.

### SCENE s00487 | INT. BOOKMOBILE - PARKED AT LAKE OVERLOOK - DUSK
Detected names (may be incomplete or contain aliases): MAEVE O'DONNELL-KAUR, SULLY, ADEBAYO
* 1 A ¶ A converted school bus lined floor to ceiling with paperbacks.
* 2 A Fairy lights strung along the roof.
* 3 A A foldout desk by the driver's seat.
* 4 A Through the windshield: a lake the color of brass.
5 A ¶ MAEVE O'DONNELL-KAUR (30s, librarian, cardigan with a pen in the pocket) stamps a stack of returns.
6 A Fast.
7 A Tidy.
* 8 A ¶ A knock on the door glass.
9 D SULLY [O.S.] (muffled, outside): You still open?
* 10 A ¶ The door hisses open.
11 A SULLIVAN "SULLY" ADEBAYO (30s, rain-wet jacket, a duffel on one shoulder) steps up.
12 A He holds a paperback against his chest.
13 D MAEVE: You're eleven years late.
14 D SULLY: That's fair.
15 A ¶ He sets the paperback on the desk.
* 16 A A dog-eared Neruda.
17 A She looks at the cover and then at him.
18 D MAEVE: That's mine.
19 D SULLY: It is.
* 20 A ¶ Her phone buzzes on the desk.
21 A She lifts it, stares at the screen, declines the call.
* 22 A It buzzes again.
23 A ¶ She silences it.
24 A Sully watches the phone go dark.
25 D SULLY: You married.
26 D MAEVE: Seven years in June.
27 D SULLY: Good. That's good.
28 D MAEVE: Don't say good like that.
29 D SULLY: Like what?
30 D MAEVE: Like you're being brave about it.
31 A ¶ He laughs, then stops.
* 32 A The lake light turns his face gold.
33 D SULLY: I wrote in the margins. Page forty. I never knew how to send it.
34 A ¶ She opens the book.
* 35 A Page forty.
* 36 A A line in his handwriting, faded, underlined twice.
37 A She reads.
38 A Her mouth moves slightly, silent.
* 39 A ¶ The phone buzzes a third time.
40 A She lets it.
41 D MAEVE: It's overdue.
42 D SULLY: How much do I owe?
43 D MAEVE: Eleven years. Fifty cents a day.
44 D SULLY: That's, what, two thousand dollars?
45 D MAEVE: Two thousand and change.
46 D SULLY: I'll pay in installments.
47 A ¶ She closes the book against her chest, the same way he held it.
* 48 A The fairy lights flicker.
49 A ¶ She picks up the phone.
50 A Holds the power button until the screen goes black.
51 A Then she sits on the edge of the desk, the book in both hands, and does not tell him to leave.

### SCENE s00488 | EXT. HEDGE MAZE - WEDDING VENUE - AFTERNOON
Detected names (may be incomplete or contain aliases): PRU, SHETTY, SANTANA-REYES, JOAQUÍN, ODALYS FONTENOT, OFFICIANT DESMOND VANTERPOOL, FLOWER GIRL, TILLY BRANDT
* 1 A ¶ Eight-foot yew walls.
* 2 A Gravel paths.
* 3 A A white tent glimpsed over the green.
* 4 A A string quartet drifts in from somewhere unseen.
5 A ¶ PRUDENCE "PRU" SHETTY (30s, bridesmaid in sage satin, flats in her hand) strides down a corridor of hedge, scanning left and right.
6 D PRU: Joaquín? Joaquín!
7 A ¶ She reaches a fork.
8 A A pair of legs in tuxedo trousers sticks out from under a bench at the end of a dead-end.
9 A ¶ JOAQUÍN SANTANA-REYES (30s, groom, tie undone, a flask in his fist) is lying there, staring at the underside of the bench.
10 D PRU [CONT'D]: You are forty minutes late to your own wedding.
11 D JOAQUÍN: I'm not late. I'm lost.
12 D PRU: It's the same thing with a bow tie.
13 A ¶ She drops to her knees beside him.
14 A He offers the flask.
15 A She takes a swig and grimaces.
16 D PRU [CONT'D]: That's cough syrup.
17 D JOAQUÍN: It was all I could find.
* 18 A ¶ Gravel crunches.
19 A ODALYS FONTENOT (20s, bride, veil pinned to her wrist like a bracelet, running shoes under the gown) rounds the corner and halts.
20 D ODALYS: There you are.
21 D JOAQUÍN: Odalys.
22 D ODALYS: I've been through this maze eleven times.
23 D PRU: Eleven?
24 D ODALYS: Well, nine. Two were the same dead end.
25 D JOAQUÍN: I can't remember the vows.
26 D ODALYS: I wrote them down.
27 D JOAQUÍN: I lost the card.
28 D ODALYS: I have a copy.
29 D PRU (over her): Jo, breathe.
30 D JOAQUÍN (over Pru): I'm breathing.
31 D ODALYS (over both): You are not breathing, you're panicking, which is different, and it's adorable.
32 A ¶ A new voice, deep and calm, cuts in from behind the hedge.
33 A ¶ OFFICIANT DESMOND VANTERPOOL (60s, black robe, rain boots) strides around the corner with a clipboard, a walkie-talkie squawking at his belt.
34 D DESMOND: Found them. Both of them. And the maid of honor.
35 D PRU: Bridesmaid.
36 D DESMOND: Bridesmaid. Of course.
37 A ¶ A FLOWER GIRL, TILLY BRANDT (7, petals in her fist, grass-stained knees), skids in behind him and points at everyone in turn.
38 D TILLY: Is this the wedding?
39 D DESMOND: It's the pre-wedding.
40 A ¶ He looks at the four of them in the gravel.
41 A He checks his watch.
42 D DESMOND [CONT'D]: The guests are on their third appetizer. I can do this right here, if you'd like.
43 D JOAQUÍN: Here?
44 D DESMOND: There's a bench.
45 D ODALYS: Pru, hold the veil.
46 D PRU: I'm the witness?
47 D ODALYS: You're the witness.
48 A ¶ Joaquín scrambles out from under the bench.
49 A Odalys takes his hands.
50 A Desmond opens a small book.
51 A Pru, still holding her shoes, raises one in the air like a toast.
52 D DESMOND: Dearly beloved, and also hedge.

### SCENE s00489 | EXT. PIGEON LOFT - ROOFTOP - EVENING
Detected names (may be incomplete or contain aliases): AUGIE, MBEKI, TOMMY, NOWAK, ZUZU, NADEEM ABBASI
* 1 A ¶ A rickety wooden coop on a tenement roof.
* 2 A Wire mesh.
* 3 A Birds shifting and cooing.
* 4 A Laundry lines snap in the wind.
* 5 A Behind it, a skyline washed orange.
6 A ¶ AUGUSTINE "AUGIE" MBEKI (70s, flat cap, hands gnarled as roots) kneels at the coop door feeding corn from a coffee can.
7 A ¶ TOMASZ "TOMMY" NOWAK (40s, his son-in-law, hospital badge still clipped on) stands behind him, jacket slung over a shoulder.
8 A ¶ Beside the water trough, ZUZANNA "ZUZU" NOWAK (12, Tommy's daughter, school uniform, backpack at her feet) holds a gray pigeon against her chest.
9 A ¶ NADEEM ABBASI (30s, neighbor, tool belt) leans on the stairwell door frame with a beer.
10 D TOMMY: Augie, we have to talk about Friday.
11 D AUGIE: Nothing to talk about.
12 D TOMMY: The building's being sold.
13 D AUGIE: I know what the building is.
14 D NADEEM: Council gave the tenants sixty days.
15 D AUGIE: Nadeem. Drink your beer.
16 D NADEEM: I'm only saying.
17 D ZUZU: Grandpa, what happens to the birds?
18 A ¶ Augie tips the last corn from the can.
19 A He closes the coop door with a soft click.
20 D AUGIE: They fly home.
21 D ZUZU: But home is here.
22 D AUGIE: Then they'll come back and find the roof empty.
* 23 A ¶ Silence.
24 A Tommy puts a hand on Augie's shoulder.
25 A Augie does not shrug it off.
26 D TOMMY: We'll find another roof.
27 D AUGIE: Where? In Queens? They'd never find their way.
28 D NADEEM: Augie, they've done it before. You said so.
29 D AUGIE: Mm.
30 A ¶ Zuzu lifts the pigeon high.
* 31 A It flaps once, twice, and lifts out of her hands into the orange sky.
32 A They all watch.
* 33 A It circles the roof.
* 34 A Settles on the antenna.
35 D ZUZU: Grandpa. Look.
36 A ¶ Augie nods slowly.
37 A He tilts his cap back.
38 D AUGIE: That one's called Hope. Your grandmother named her.

### SCENE s00490 | INT. FLOODED TELEGRAPH OFFICE - RIVER TOWN - DAY
Detected names (may be incomplete or contain aliases): TOBIAS FINCH, BILLIE, STRAND, KITTREDGE, OPERATOR
* 1 A ¶ Brown water stands six inches deep across the plank floor.
* 2 A The counter has been propped on crates.
* 3 A A potbelly stove sits cold.
* 4 A Outside the single window, the main street is a slow brown river with a drowned wagon in the middle of it.
5 A ¶ TOBIAS FINCH (60s, sleeve garters, spectacles on a string) perches on the counter with his boots tucked under him, working the telegraph key with two fingers.
6 A He hums a hymn without a tune.
* 7 A ¶ The door bangs open.
8 A SHERIFF WILHELMINA "BILLIE" STRAND (40s, dripping slicker, silver star pinned crooked) wades in, dragging a man by the chain between his wrists.
9 A The man, KITTREDGE (30s, split lip, hat gone), stumbles in her wake and falls to his knees in the water.
10 D BILLIE: Up.
11 D KITTREDGE: It's cold.
12 D BILLIE: So is the grave. Up.
13 A ¶ He climbs onto a crate by the wall.
14 A She hooks the chain on a ring bolted to the plank.
15 A She sits across from him on an overturned bucket, rifle across her lap.
16 D TOBIAS: Sheriff. I wasn't told you were coming.
17 D BILLIE: The bridge went out at noon. We didn't have a choice.
18 D TOBIAS: Is that Kittredge?
19 D KITTREDGE: In the flesh.
20 D BILLIE: Quiet.
21 A ¶ Tobias looks from one to the other, then back at the key.
22 A He taps out a few dots and dashes.
* 23 A A fainter tapping answers from the line, and then a voice, thin and metallic, speaks from a brass horn on the wall.
24 D OPERATOR [O.S.] (through the horn): Dry Fork office. Dry Fork. Do you copy, Finch?
25 D TOBIAS: I copy.
26 D OPERATOR [O.S.]: Judge Maddox says hold the prisoner. He rides in the morning.
27 D BILLIE: Tell him there's no morning if this river keeps rising.
28 D TOBIAS (into the horn): Sheriff says the river is up.
29 D OPERATOR [O.S.]: Judge says the river is the Lord's business. Hold the prisoner.
30 A ¶ Billie stands.
31 A She crosses the flooded floor and takes the horn from its hook.
32 A She speaks into it low and flat.
33 D BILLIE: This is Strand. I have a man in irons and a foot of water in the room. If the judge wants him in the morning, he can come get him.
34 D OPERATOR [O.S.]: I'll relay that.
35 D BILLIE: Relay it exactly.
36 A ¶ She hangs the horn on its hook.
37 A Kittredge laughs, a wet, cracked sound.
38 A She turns to him.
39 D KITTREDGE: You'd have made a fine judge.
40 D BILLIE: I'd have made a fine hangman, but they wouldn't give me the job.
41 A ¶ Tobias stops tapping.
* 42 A The river laps the stove legs.
* 43 A A wagon wheel knocks against the building from outside, slow and steady, like someone asking to be let in.
44 D KITTREDGE: How long before the water gets to the chain?
45 D BILLIE: Long enough.
46 D KITTREDGE: And if it doesn't?
47 A ¶ She steps close.
48 A She crouches.
49 A She looks him full in the face and he looks back, and neither blinks.
* 50 A Between them, the water ripples with the rhythm of the wheel.
51 D BILLIE [CONT'D]: Then you and I and Tobias have one night to find out what each of us believes in.
52 A ¶ Tobias takes off his spectacles and polishes them on his sleeve.
53 A His hands shake slightly.
54 D TOBIAS: I believe in coffee, Sheriff.
55 D BILLIE: You've got a stove?
56 D TOBIAS: Cold.
57 D BILLIE: You've got matches?
58 A ¶ He opens a drawer under the counter, rummages, and holds up a damp box.
59 A She takes it, shakes it, listens.
* 60 A A faint rattle.
61 A She nods once.
62 A ¶ She wades to the stove, opens its door, pulls a handful of kindling from the crate beside it, and piles it inside.
63 A She strikes a match.
* 64 A It sputters.
65 A Strikes another.
* 66 A It catches.
* 67 A ¶ For the first time in the room, there is warmth.
68 A Kittredge leans toward it as far as the chain allows.
69 A Tobias slides down off the counter into the water with a gasp, gathers his coat, and carries a pot to the stove.
* 70 A ¶ The horn on the wall crackles once more.
71 D OPERATOR [O.S.]: Strand. Message from the judge.
72 D BILLIE: Go on.
73 D OPERATOR [O.S.]: He says: "Understood."
74 A ¶ Billie almost smiles.
75 A She sits back down on the bucket and lays the rifle across her knees.
76 D KITTREDGE: That's all?
77 D BILLIE: That's plenty.
* 78 A ¶ Outside, the drowned wagon shifts and begins, slowly, to turn downstream.

### SCENE s00491 | EXT. JUNKYARD - ABANDONED SCHOOL BUS - NIGHT
Detected names (may be incomplete or contain aliases): NOMI, ESKANDARI, INEZ BRAND, DAISY, OMONDI, WADE KOWALCZYK
* 1 A ¶ A yellow bus nosed into a heap of tires, its windows long gone, its seats stuffed with sleeping bags and fairy lights run off a car battery.
* 2 A Beyond the fence, a refinery burns orange against the sky.
3 A ¶ NAOMI "NOMI" ESKANDARI (17, hoodie, cigarette she doesn't smoke) sits on the bus steps flicking a lighter.
4 A INEZ BRANDÃO (16, her cousin, buzz cut, arms crossed) paces the gravel.
5 A DESHI "DAISY" OMONDI (17, the youngest-looking, glasses, a tote bag stuffed with chips) sits on an upturned bucket.
6 A And inside the bus, hidden in the dark, a fourth shape stirs under a blanket.
7 D INEZ: Where's Wade?
8 D NOMI: He said nine.
9 D DAISY: It's nine-forty.
10 D INEZ: He's not coming.
11 D NOMI: He is. He said he'd bring the speaker.
12 D DAISY: He said a lot of things.
13 D INEZ (over Daisy): He said a lot of things last time, too.
14 D NOMI (over both): Can we not?
15 A ¶ The shape under the blanket sits up.
16 A WADE KOWALCZYK (18, bleary, a speaker the size of a brick in his lap) pulls the blanket off his head.
17 D WADE: I've been here since seven.
18 D NOMI: Wade.
19 D WADE: I fell asleep.
20 D INEZ: You fell asleep in the bus we told you not to sleep in.
21 D WADE: It's comfortable.
22 D DAISY: Wade, you smell like gasoline.
23 D WADE: The tank leaks. I patched it.
24 D NOMI: With what?
25 D WADE: Gum.
26 A ¶ Daisy hands him a bag of chips.
27 A He takes it without a word.
28 A Inez kicks a hubcap across the gravel.
* 29 A It rings.
30 D INEZ: Next week I'm not here.
31 D NOMI: What?
32 D INEZ: Mom says we're moving. Tulsa.
* 33 A ¶ Silence.
* 34 A The refinery flare hisses.
35 D DAISY: Inez.
36 D WADE (overlapping): Wait, seriously?
37 D NOMI (overlapping): When did she tell you?
38 D INEZ: Tuesday.
39 D NOMI: It's Saturday.
40 D INEZ: I know what day it is.
41 A ¶ Nomi stands.
42 A She puts the lighter in her pocket.
43 A She walks to Inez and stops.
44 D NOMI: Say it again.
45 D INEZ: I said Tulsa.
46 D NOMI: Not that part. The part where you didn't tell us for four days.
47 D INEZ: Because I didn't want it to be real.
48 A ¶ Wade turns on the speaker.
* 49 A A thin, tinny song starts, something old and dumb that they all know.
* 50 A Nobody tells him to stop.
51 A Daisy sings the first line under her breath.
52 A ¶ Nomi lets go.
53 A She sits on the step.
54 A Inez sits beside her.
55 A Wade sets the speaker on the dashboard.
56 D DAISY: Is there a bus in Tulsa?
57 D INEZ: I'll find one.
58 D WADE: I can fix it up.
59 D INEZ: You can't even fix your tank.
60 D WADE: It's gum. It holds.
61 A ¶ They laugh a little.
* 62 A The song plays out.
* 63 A Over the junkyard fence, the flare finally goes dark.

### SCENE s00492 | EXT. BAKER'S YARD - PUDDING LANE, LONDON - NIGHT - 1666
Detected names (may be incomplete or contain aliases): THOMAS FARRINER, ALICE FARRINER, MARGERY, JEREMIAH PICKLE, WIDOW CATHERINE MOLINEUX, SIR HUGH WAINWRIGHT
* 1 A ¶ A narrow courtyard hemmed by timber houses leaning toward each other like drunken gossips.
* 2 A The oven door glows red.
* 3 A Upwind, over the rooftops, the sky has begun to bloom a dull and sullen orange.
4 A ¶ THOMAS FARRINER (50s, baker, flour to the elbow) stands at the oven mouth with a wooden peel, sliding out the last loaf of the night.
5 A His wife ALICE FARRINER (40s, shawl over a nightdress) bangs the shutters closed one by one.
6 A Their daughter MARGERY (12, barefoot, hair undone) clutches a cat to her chest by the well.
7 A The apprentice JEREMIAH PICKLE (16, soot-faced) hauls buckets across the cobbles, slopping water.
8 A Beside the gate, a neighbor, WIDOW CATHERINE MOLINEUX (60s, nightcap, rosary), stands with her mouth moving in silent prayer.
9 A And out of the shadows, a stranger on a gray horse, the King's messenger, SIR HUGH WAINWRIGHT (40s, mud to the thighs, a sealed letter in his gauntlet), reins in at the gate.
10 D WAINWRIGHT: Master Farriner! By the King's order, put out your oven.
11 D THOMAS: It's out, sir. Near enough.
12 D WAINWRIGHT: Near enough has burned a parish.
13 A ¶ Thomas turns to Jeremiah, who has frozen with a bucket in each hand.
14 A Alice drops the last shutter-bar.
15 A Margery tightens her grip on the cat, which squirms and yowls.
16 D ALICE: Thomas.
17 D THOMAS: I hear.
18 D ALICE: Look at the sky.
19 A ¶ He does not look.
20 A He keeps his eyes on the horseman.
21 A The widow's rosary clicks.
* 22 A The orange in the sky deepens; a distant bell begins to toll, then another, then three at once.
23 D WAINWRIGHT: The fire is at Fish Street. It will be at the Bridge by dawn.
24 D MARGERY: Papa, are we to leave?
25 D THOMAS: We are not.
26 D ALICE: Thomas.
27 D THOMAS: We are not leaving my oven.
28 D WAINWRIGHT: Master Farriner, I have orders.
29 D THOMAS: Then read them.
30 A ¶ Wainwright breaks the seal and reads silently.
31 A Thomas wipes his hands on his apron, and Alice, seeing it, steps forward and takes the loaf from the peel and presses it into Margery's arms beside the cat.
32 A Jeremiah sets down the buckets and begins, without being told, to untie the oven's iron door.
33 D WAINWRIGHT (folding the paper): The order is plain. Quit the lane. All of you.
34 D THOMAS (quietly): Where do we go, sir?
35 D WAINWRIGHT: North. Moorfields.
* 36 A ¶ Silence.
* 37 A The bells swell.
* 38 A A glowing ember lands on the stones at Catherine's feet.
39 A She crosses herself and steps on it.
40 D CATHERINE: God keep this house.
41 D ALICE: He will, Catherine. Come with us.
42 D CATHERINE: I'll bring my chair.
43 A ¶ Thomas takes one last look at the oven.
* 44 A Its mouth glows like an eye closing.
45 A He lays the peel across the sill, and lifts the latch of the gate.
46 D THOMAS: Jeremiah. Take the handcart.
47 D JEREMIAH: Yes, Master.
48 A ¶ Thomas offers Alice his arm.
49 A She takes it.
50 A They file out into the lane, the cat wailing, the loaf warm in Margery's arms, and the orange glow licking down the rooftops behind them.

### SCENE s00493 | INT. APIARY CONVENTION - HONEY TASTING TENT - DAY
Detected names (may be incomplete or contain aliases): DETECTIVE INSPECTOR INGRID LARK, HORTENSE ABERNATHY, MAN IN VEIL, BEEKEEPER'S VEIL, KONSTANTIN GRIGORIEV, CLERK, PACO, LEMUS, ISOLDE VANCE
* 1 A ¶ White canvas.
* 2 A Folding tables laid with jars of every color from straw to tar.
3 A Hundreds of beekeepers murmur.
* 4 A A glass observation hive hums beside the podium.
5 A ¶ DETECTIVE INSPECTOR INGRID LARK (40s, plain suit, notebook) walks the aisle.
6 A She stops at a stall where HORTENSE ABERNATHY (60s, honey sommelier, white gloves) arranges jars.
7 D LARK: Mrs. Abernathy. About Alistair Penhallow.
8 D HORTENSE: Terrible business.
9 D LARK: He died at this table.
10 D HORTENSE: He tasted the buckwheat and went blue.
11 D LARK: You handed him the spoon.
12 D HORTENSE: I handed everyone a spoon.
13 A ¶ A MAN IN A BEEKEEPER'S VEIL (50s, tall, gloves) drifts behind Hortense, studying the observation hive.
14 A Lark glances at him.
15 D LARK: Sir. Your name?
16 D MAN IN VEIL: Ask the queen.
17 D LARK: I'll ask you.
18 A ¶ The man lifts his veil.
19 A He is KONSTANTIN GRIGORIEV (50s, weathered, one blue eye, one brown).
20 D KONSTANTIN: Grigoriev. I sold Alistair his bees.
21 D LARK: Then you know what killed him.
22 D KONSTANTIN: Oleander nectar. A swarm that fed on it by the river.
23 D HORTENSE (sharp): That's impossible. Those hives were mine.
24 D KONSTANTIN: Were they?
25 A ¶ A CLERK, FRANCISCO "PACO" LEMUS (20s, convention lanyard), hurries in carrying a ledger.
26 D PACO: Inspector! The registry. Hive twelve was transferred last Thursday.
27 D LARK: To whom?
28 D PACO (quietly): Mrs. Abernathy.
29 A ¶ Hortense sets down a jar.
30 A The room does not go silent, but the nearest ring of beekeepers does.
31 A She peels off her glove, finger by finger.
32 D HORTENSE: Alistair planned to expose me. The adulterated honey. The syrup.
33 D LARK: So you poisoned him.
34 D HORTENSE: So I fed him his own greed.
35 A ¶ DR. ISOLDE VANCE (30s, lab coat under a rain jacket, evidence bag in hand) pushes through the crowd and holds up the bag.
* 36 A A single dead bee lies inside.
37 D ISOLDE: Oleander residue. Confirmed. In the spoon.
38 A ¶ Lark closes her notebook.
* 39 A Behind them, the observation hive hums louder, and something in the glass catches the light: the queen, laying, indifferent.

### SCENE s00494 | INT. MASCOT DRESSING ROOM - MINOR LEAGUE BASEBALL STADIUM - DAY
Detected names (may be incomplete or contain aliases): BEAR MAN, BEAR SUIT, ARCHIE, PELL, WALLY
* 1 A ¶ Cinderblock closet.
* 2 A A rack of foam heads: a bear, a hot dog, a giant baseball bat.
* 3 A Two benches, a mini-fridge, a fan that rotates uselessly.
4 A ¶ A MAN IN A BEAR SUIT (30s, head under his arm, drenched in sweat) sits on a bench staring at his hands.
5 A ¶ ARCHIBALD "ARCHIE" PELL (50s, team's mascot coordinator, polo shirt, clip-on tie) enters with a clipboard.
6 D ARCHIE: Walter.
7 D BEAR MAN: It's Wally.
8 D ARCHIE: It's on your contract as Walter.
9 D WALLY: Then it's Walter on paper and Wally in my heart.
10 A ¶ Archie sits.
* 11 A The bench creaks.
12 D ARCHIE: Sixth inning. The children's race.
13 D WALLY: I know.
14 D ARCHIE: The hot dog was supposed to win.
15 D WALLY: I know.
16 D ARCHIE: The hot dog is a nine-year-old with a sprained wrist now.
17 D WALLY: He cut me off.
18 D ARCHIE: He's nine.
19 D WALLY: He cut me off and he looked at me.
20 D ARCHIE: Walter.
21 D WALLY: Wally.
22 D ARCHIE: He was wearing the suit. He couldn't see anything.
23 D WALLY: He saw me.
24 D ARCHIE: Listen to me. I need you to apologize.
25 D WALLY: To a boy dressed as a hot dog.
26 D ARCHIE: To his mother. In person. By the concessions.
27 D WALLY: She's terrifying.
28 D ARCHIE: She's a dental hygienist.
29 D WALLY: Same thing.
30 A ¶ They both stand at the same time.
31 A Archie holds the clipboard to his chest; Wally holds the bear head to his.
32 A They say the next line together, in unison.
33 D WALLY: We don't have to do this.
34 D ARCHIE: We have to do this.
35 A ¶ They stop.
36 A They look at each other.
37 D ARCHIE [CONT'D]: That was strange.
38 D WALLY: You first.
39 D ARCHIE: No, you.
40 A ¶ They both reach for the door at the same moment.
41 A Their hands collide on the knob.
42 A Neither lets go.
43 D WALLY: Archie, I'm sorry about the hot dog.
44 D ARCHIE: Walter, it's fine.
45 D WALLY: Wally.
46 D ARCHIE: Wally. It's fine.
47 A ¶ He opens the door.
* 48 A A burst of crowd noise floods the room.
49 A Wally pulls the bear head back on, and with it, becomes a different man: huge, cheerful, waving.
50 A ¶ Archie shakes his head and follows him out.

### SCENE s00495 | INT. CAPSIZED SAILBOAT - UPSIDE-DOWN CABIN - NIGHT
Detected names (may be incomplete or contain aliases): LAKSHMI VENKAT, OTIS BRANNIGAN, HENRIK SOLBERG
* 1 A ¶ Hull turned to ceiling.
* 2 A Black water at knee height, sloshing.
* 3 A A galley stove hangs overhead like a bat.
* 4 A One headlamp.
5 A ¶ LAKSHMI VENKAT (30s, navigator, orange float coat) clings to a bunk rail.
6 A Water to her ribs.
7 A Breath fogging.
8 A ¶ OTIS BRANNIGAN (50s, skipper, split eyebrow) wedges himself against the companionway, shoulder to the hatch.
9 A ¶ Third: HENRIK SOLBERG (20s, deckhand, teeth chattering) pulls himself up on a pipe cot.
10 D OTIS: Count off.
11 D LAKSHMI: One.
12 D HENRIK: Two.
13 D OTIS: Three. Good. Air?
14 D LAKSHMI: We've got maybe an hour.
15 D HENRIK: Less. I can taste it.
16 A ¶ Otis slams the hatch with his shoulder.
* 17 A Water spits through the seams.
18 A Lakshmi swings the headlamp to the porthole, where something white and heavy bobs against the glass, and Henrik grabs a boat hook off the wall and jabs at the hatch latch while Otis hauls himself up the ladder, and the whole hull rolls another few degrees, tipping a gush of black over all three of them.
19 D LAKSHMI: It's moving!
20 D OTIS: Hold on!
21 D HENRIK (overlapping): We're going down!
22 D LAKSHMI (overlapping): We're not going down, we're settling!
23 D OTIS: Both of you, quiet!
24 A ¶ They go quiet.
* 25 A The hull ticks.
* 26 A Somewhere far above, faint through steel: an engine.
27 D HENRIK: Is that...
28 D OTIS: Shh.
29 D LAKSHMI: It's a ship.
30 D OTIS: Bang the hull. Everyone.
31 A ¶ They bang the hull with fists, with the boat hook, with a skillet from the galley.
32 A Three rhythms, three desperate voices.
* 33 A The engine slows.
* 34 A Stops.
* 35 A ¶ Silence.
* 36 A Then, from above: three knocks.

### SCENE s00496 | INT. COUNTY HOSPITAL - NIGHT WARD - NIGHT
Detected names (may be incomplete or contain aliases): WINIFRED OSEI, NURSE CARMELA BRUNO
* 1 A ¶ A long ward at lights-low.
* 2 A A dozen iron beds, white curtains drawn on half.
* 3 A A ceiling fan turns slowly.
* 4 A A clock above the door reads 3:10.
5 A ¶ DR. WINIFRED OSEI (40s, white coat, stethoscope slung like a scarf) sits on the edge of an empty bed, shoes off, rubbing her arch.
6 A NURSE CARMELA BRUNO (50s, starched cap, cardigan over her uniform) crosses the aisle with a tray of paper cups, sets one down beside the doctor, pours her own, and sits on the next bed over; she lifts her feet onto the rail, Winifred leans back on her elbows, and the two women sit in the pool of lamplight like old friends on a porch.
7 D WINIFRED: Bed nine?
8 D CARMELA: Asleep. Finally.
9 D WINIFRED: Good.
10 D CARMELA: She asked for you.
11 D WINIFRED: She asks for everyone.
12 D CARMELA: She asked for you twice.
13 A ¶ Winifred sips the tea.
14 A She makes a face.
15 D WINIFRED: What is this?
16 D CARMELA: Chamomile.
17 D WINIFRED: It tastes like a hay bale.
18 D CARMELA: It's good for you.
19 A ¶ They both look down the ward.
20 A A patient coughs behind a curtain and settles.
* 21 A The fan ticks.
22 A Carmela raises her paper cup an inch.
23 A Winifred taps it with hers.

### SCENE s00497 | INT. PARKING GARAGE - LEVEL 3 - NIGHT
Detected names (may be incomplete or contain aliases): FRANKIE DELACORTE, MALIK OYELARAN, BLYTHE ARMSTRONG-LEE
* 1 A ¶ Concrete pillars.
* 2 A Fluorescent tubes buzzing.
* 3 A A rented limousine idling with its doors open, bass pulsing faintly from a dance hall a block away.
4 A ¶ FRANKIE DELACORTE (17, rented tuxedo two sizes large, corsage crushed in his fist) sits on the limo bumper.
5 A MALIK OYELARAN (17, his best friend, bow tie hanging) leans against a pillar, spinning a set of car keys on one finger.
6 A BLYTHE ARMSTRONG-LEE (17, Frankie's date, silver dress, heels in one hand) stands at the edge of the headlights, arms folded.
7 A ¶ Nobody speaks for a long while.
8 D MALIK: Well. That was a dance.
9 D FRANKIE: Don't.
10 D MALIK: I'm only saying.
11 D BLYTHE: He's only saying.
12 D FRANKIE: Blythe.
13 D BLYTHE: You said you'd tell him.
14 D FRANKIE: I was going to.
15 D BLYTHE: You said, quote, "Tonight."
16 A ¶ Malik stops spinning the keys.
17 A He looks from one to the other, then at the floor.
18 A Frankie stands, brushes his knees, and takes a step toward Blythe; she steps back; Malik takes a step forward as if to separate them; and all three of them stop at once, caught in the light like three deer on a road.
19 D MALIK: Tell me what?
20 D FRANKIE: Nothing.
21 D BLYTHE: That he's moving to Denver.
22 D MALIK (to Frankie): You told her first.
23 D FRANKIE: Mal.
24 D MALIK: You told her before me.
25 D FRANKIE: It was an accident.
26 D MALIK: How do you accidentally tell someone you're leaving?
27 D BLYTHE: He doesn't leave till August.
28 D MALIK: August is three months.
29 D BLYTHE: Three months is a long time.
30 D MALIK: It's the length of a summer, Blythe.
31 D FRANKIE: Hey. I'm standing right here.
32 D MALIK: Then say something.
33 A ¶ Frankie opens his mouth.
34 A Closes it.
35 A His corsage drops to the concrete.
36 A Malik shoves him, once, in the chest, not hard.
37 A Frankie stumbles back against the limo.
38 A Neither moves.
39 A ¶ Blythe sets her heels on the hood and wraps her arms around herself.
* 40 A A car alarm chirps somewhere on the level below.
41 D FRANKIE: I didn't want it to end like this.
42 D MALIK: It's not ending. It's Denver.
43 D FRANKIE: It's the same thing.
44 D MALIK: It is not.
45 A ¶ He picks up the corsage.
46 A He hands it back.
47 A Frankie turns it over in his hand, then holds it out to Blythe, who looks at it, takes it, and pins it to Malik's lapel.
48 D BLYTHE: There. Now we all have a flower.
49 D MALIK: I'm not wearing this.
50 D BLYTHE: You are.
51 A ¶ He lets it stay.

### SCENE s00498 | EXT. PETTING ZOO - BIRTHDAY PARTY - DAY
Detected names (may be incomplete or contain aliases): DARIUS FENWICK-ODOM, SOLEDAD, PAULINE, ZOO KEEPER, RIBEIRO
* 1 A ¶ A fenced paddock, hay bales, a goat in a party hat.
2 A Kids shriek in the distance.
3 A ¶ DARIUS FENWICK-ODOM (40s, host dad, apron over a polo) carries a tray of juice boxes to the pen, whistling.
4 A His wife SOLEDAD (40s, sunglasses, a phone in each hand) trails him, texting.
5 A Her mother PAULINE (70s, lawn chair, thermos) watches from the gate.
6 A The ZOO KEEPER, MR. RIBEIRO (50s, overalls, bucket), leans on a fence post.
7 A ¶ He sets down the tray.
8 A She sets down a phone.
9 A Pauline lifts her thermos in salute.
10 D DARIUS: Seven kids. One goat. What could go wrong?
11 D MR. RIBEIRO: Don't say that.
12 D SOLEDAD (not looking up): Darius, don't.
13 D PAULINE (over her): Let the man speak.
14 A ¶ The goat lowers its head.
15 A It eyes the tray.
16 A It eyes Darius.
17 D DARIUS: Nice goat.
18 D MR. RIBEIRO: That's Gerald.
19 D SOLEDAD: Gerald is wearing a party hat.
20 D PAULINE: So is the cake.
21 A ¶ They all turn.
* 22 A Behind them, the cake sits on a hay bale, fully intact, a three-tier unicorn.
23 A Gerald trots toward it.
24 D DARIUS: Gerald, no.
25 D MR. RIBEIRO: Gerald, heel!
26 D SOLEDAD: Mother, move your chair!
27 A ¶ Gerald hits the hay bale at a full run.
28 A Frosting rains over all four of them.
29 A Pauline, sprayed pink from head to toe, lowers her thermos and says, perfectly calm:
30 D PAULINE: Well. That's a fun party.

### SCENE s00499 | INT. DINNER THEATER - BACKSTAGE - NIGHT
Detected names (may be incomplete or contain aliases): BARNABY CROWE, DIANTHA FOSTER, GWEN, TAKAHASHI
* 1 A ¶ A cramped corridor behind a painted flat.
* 2 A Costume racks, a mirror ringed with bulbs, a prop table covered in plastic daggers and one real turkey leg.
* 3 A Muffled laughter from the audience.
4 A ¶ BARNABY CROWE (50s, leading man, powdered wig, gout slipper) strides in and flings his hat on the table.
5 A Behind him, DIANTHA FOSTER (30s, ingénue, corset half-laced) hurries, hem in her fist.
6 A Last in is STAGE MANAGER GWENDOLYN "GWEN" TAKAHASHI (40s, black clothes, headset, clipboard) who reads from her list as she walks.
7 D BARNABY (to everyone): Who moved my snuffbox?
8 D GWEN: It's on the mantle, Mr. Crowe.
9 D BARNABY: There is no mantle!
10 D GWEN: It's painted.
11 D BARNABY (muttering): I will not play Hamlet opposite a painted mantle.
12 D DIANTHA: Barnaby, it's "Much Ado."
13 D BARNABY: Is it? I thought we'd done that.
14 D GWEN (to the room): Five minutes, people.
15 D DIANTHA (low, to herself): Breathe. Breathe. It's only two hundred people and a soup course.
16 D BARNABY: Darling, you were magnificent in act one.
17 D DIANTHA: I forgot my line.
18 D BARNABY: Nobody noticed.
19 D DIANTHA: You said "well-played" and then walked offstage.
20 D BARNABY: It was a very good pause.
21 D GWEN: Diantha, your cue is the bell. Mr. Crowe, yours is when she starts to cry.
22 D BARNABY: She's crying?
23 D DIANTHA: Not yet.
24 D GWEN: Then enter on the bell.
* 25 A ¶ A bell tolls, loud, from the stage.
26 A All three freeze, then bolt through the curtain in a flurry of lace and a clatter of turkey bones.
