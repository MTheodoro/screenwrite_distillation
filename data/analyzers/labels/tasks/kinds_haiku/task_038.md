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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0138.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01238 | INT. SEAFOOD MARKET - BACK OFFICE - PRE-DAWN
Detected names (may be incomplete or contain aliases): VITO FERRANTINO, DANTE FERRANTINO, ODETTE LAROCHE, SUNDAR IYER, ^SUNDAR
* 1 A ¶ A tiled room that smells of ice and brine.
* 2 A A desk with a ledger and a crushed pack of cigarettes.
* 3 A Through a window, the market floor is dark, tubs of crab stacked like tombstones.
4 A ¶ VITO FERRANTINO (60s, apron over a good shirt) sits behind the desk with his hands folded.
5 A Across from him, his nephew DANTE FERRANTINO (30s, leather coat, wet hair) shifts in a metal chair.
6 A ¶ By the door stands MRS. ODETTE LAROCHE (50s, orange rubber gloves to the elbow, fishmonger's cap), eating an apple.
7 A And in the corner, on an overturned crate, sits SUNDAR IYER (20s, soft-spoken, clean, holding a clipboard).
8 D VITO (to the room): Everybody comfortable?
* 9 A ¶ Nobody answers.
10 A Odette bites the apple.
11 A Dante's knee bounces.
12 D VITO [CONT'D] (to Dante): You want some coffee?
13 D DANTE: I'm good.
14 D VITO: It's early. You look tired.
15 D DANTE: I'm not tired.
16 D VITO (to himself): He's not tired.
17 A ¶ He opens the ledger.
18 A Turns a page.
19 A Runs a finger down a column.
20 D VITO [CONT'D] (to Sundar): Accountant. How's the arithmetic?
21 D SUNDAR: It's close, Mr. Ferrantino.
22 D VITO: Close to what?
23 D SUNDAR: It's close to correct.
24 D VITO: Close. Odette?
25 D ODETTE: Close is a nice word.
26 D VITO: It's a nice word until the fish go off.
27 A ¶ Dante laughs once.
28 A Short.
29 A Dry.
* 30 A Nobody joins.
31 D VITO [CONT'D] (to Dante): You think it's funny?
32 D DANTE: You said fish.
33 D VITO: I did say fish.
34 A ¶ He closes the ledger.
35 A Slides it across the desk.
36 A Dante glances at it.
37 A Doesn't touch it.
38 D VITO [CONT'D]: Read it.
39 D DANTE: Uncle Vito.
40 D VITO: Read the third page.
41 D DANTE: I know what's on the third page.
42 D ODETTE: Then why are you sweating?
43 D SUNDAR: Dante, I told you to take it back.
44 D DANTE: You told me nothing!
45 A ¶ Both speak at once, sharp and loud.
46 D ODETTE (to Sundar): Hush.
47 D ^SUNDAR (to Odette): I didn't say--
48 D VITO (to the room, calm): Enough.
* 49 A ¶ Silence.
* 50 A The ice machine rumbles in the next room.
51 A Vito lifts the lid of the ledger one more time and takes out a single photograph.
52 A He sets it face-up on the desk.
* 53 A ¶ It's Dante, in a car, handing an envelope to a stranger in a dark coat.
* 54 A The timestamp reads last Thursday.
55 D DANTE (barely): Where did you get that?
56 D VITO: The man in the coat is mine. Has been for ten years. He told me you'd come.
57 A ¶ Dante looks at Odette.
58 A At Sundar.
59 A At the door.
60 A Odette drops the apple core into the bin and folds her gloved arms.
61 D VITO [CONT'D] (quietly, to himself): Blood.
62 A ¶ He lifts the phone on the desk and dials one digit.
* 63 A It rings once.
64 T FADE OUT.

### SCENE s01239 | INT. SUBURBAN KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): NINA ZELENKO, MAN, TOMAS
* 1 A ¶ Cereal boxes, a half-finished jigsaw on the counter, a calendar with every square filled.
2 A ¶ NINA ZELENKO (8, pyjamas, ponytail askew) kneels on a chair, building a tower out of sugar cubes.
3 A She doesn't look up when a MAN comes in through the back door.
4 A ¶ He is in his thirties, stubble, suitcase in his hand, a travel-worn grey sweater.
5 A He stops just inside the mat.
6 A He doesn't speak.
7 D NINA: Mum's at work.
8 D MAN: I know.
9 D NINA: You can't come in if she's not here.
10 D MAN: I'm already in.
11 A ¶ She considers this.
12 A Places another cube.
* 13 A The tower wobbles and holds.
14 D NINA: Are you the plumber?
15 D MAN: No.
16 D NINA: The man from the gas?
17 D MAN: No.
18 D NINA: You look like a man from the gas.
19 A ¶ The Man sets the suitcase on the floor.
20 A Slowly.
21 A Like putting down something that might go off.
22 D MAN [CONT'D]: Do you remember a photograph? On the fridge. A man with a boat.
23 D NINA: That's Daddy. He's in Australia.
24 D MAN: Do you know his name?
25 D NINA: Daddy.
26 D MAN: His other name.
27 A ¶ Nina chews her lip.
28 A She sets down a cube, lining it up with great care.
29 D NINA: Tomas.
30 D MAN (quietly): Tomas.
31 D NINA: Zelenko. Like me.
32 A ¶ The Man breathes out.
33 A He crosses to the table and pulls out the chair opposite her.
34 A Sits.
35 A He is eye level with the tower.
36 D NINA [CONT'D]: You have the same nose.
37 D TOMAS: I do.
38 D NINA: You're not in Australia.
39 D TOMAS: Not today.
40 A ¶ Nina looks at him then, for the first time, properly.
41 A Her eyes trace his jaw, his hands, his collar.
42 A She picks up a sugar cube and offers it across the table.
43 D NINA: You can add one. Carefully.
44 A ¶ He takes it.
45 A His fingers tremble.
46 A He lowers it on to the very top of the tower.
* 47 A It holds.
48 D NINA [CONT'D] (almost whispering): Daddy.
49 D TOMAS: Nina.
50 D NINA: Mum says you're not coming back.
51 D TOMAS: Mum might be right.
52 D NINA: But you're here.
53 D TOMAS: I'm here this morning.
54 A ¶ She nods.
55 A Considers.
56 A Reaches for another cube.
57 D NINA: Then let's build it taller.
58 T FADE OUT.

### SCENE s01240 | INT. FERRIS WHEEL GONDOLA - STOPPED AT THE TOP - NIGHT
Detected names (may be incomplete or contain aliases): LYSANDER POTTS, IMOGEN FAIRBANKS-DUBOIS
* 1 A ¶ A wind-rocked cabin sixty metres over a closed fairground.
* 2 A Painted bulbs flicker on the rim below.
* 3 A A duffel sits on the bench.
4 A ¶ LYSANDER POTTS (30s, tool belt over a ride-attendant's vest) kneels on the cabin floor with a drill, boring slowly through the planks.
5 A He hums under his breath.
* 6 A The drill whines, chews, drops.
* 7 A A fist-sized hole opens, framing the dark ticket booth below and a faint silver glint inside it.
8 A ¶ He lowers a line through the hole, clips a harness to the rail, and tests the knot with a bounce.
* 9 A The gondola creaks.
10 A He pauses.
* 11 A Something else is creaking.
12 A ¶ A gloved hand grips the outside of the cage.
13 A Then another.
14 A A woman hauls herself up the bars and hooks one elbow through the cabin door: IMOGEN FAIRBANKS-DUBOIS (30s, ski mask rolled up like a hat, grin like a crescent moon, breathing hard).
15 D IMOGEN: Evening, Lysander.
16 A ¶ Lysander lunges for the duffel.
17 A Imogen swings in, kicks the drill across the floor, and catches him in a bear hug.
18 A They wrestle, the cabin rocking, bulbs flaring and dying as they slam against the cage.
19 A His elbow cracks into the bench.
20 A Her boot catches the rail.
* 21 A The line goes taut and flaps across both of them.
22 A ¶ Then both freeze.
* 23 A Below, in the dark fairground, a torch beam swings across the ticket booth.
24 D LYSANDER (whispering): Is that yours?
25 D IMOGEN (whispering): I thought it was yours.
* 26 A ¶ The beam steadies on the hole in the floor.
27 A ¶ Lysander slowly lets go.
28 A Imogen unhooks her elbow.
29 A Neither lifts their hands.
30 T FADE OUT.

### SCENE s01241 | INT. CHURCH BELL TOWER - SNIPER NEST - DAY
Detected names (may be incomplete or contain aliases): SERGEANT AMADOU DIALLO, KAZ, NOWAK
* 1 A ¶ Broken stone.
* 2 A Bells long gone.
* 3 A A sandbag parapet at the slit window.
* 4 A Dust hangs in the shafts of light.
* 5 A Distant shelling.
6 A ¶ SERGEANT AMADOU DIALLO (40s, helmet, three days of beard) lies prone behind a rifle.
7 A Eyes fixed on a far street.
8 A ¶ PRIVATE KAZIMIERZ "KAZ" NOWAK (19, spotter, binoculars, cracked lips) crouches beside him with a field radio.
9 D KAZ: Movement. Window, third floor.
10 D DIALLO: Which building?
11 D KAZ: Blue shutters.
12 D DIALLO: Got it.
* 13 A ¶ A mortar thuds close.
* 14 A Grit rains from the vault.
15 A Neither flinches.
16 D KAZ (into radio): Echo Two to Base. Contact.
* 17 A ¶ Static.
* 18 A Nothing.
19 D DIALLO: They can't hear you.
20 D KAZ (muttering): Come on, come on.
21 A ¶ Diallo shifts the rifle.
22 A Exhales.
23 A Waits.
24 D KAZ [CONT'D] (down the stairwell, shouting): Hold the door! Anyone comes up, you hold the door!
* 25 A ¶ Silence.
* 26 A A boot scuffs below.
27 A Diallo glances back.
28 A Kaz nods, shrugs.
29 D DIALLO: Count.
30 D KAZ: Four. Five. Six.
31 D DIALLO: Shutters.
32 D KAZ: Opening.
33 A ¶ A shape in the window.
34 A Diallo's finger tenses on the trigger.
* 35 A A pause.
* 36 A A breath.
37 D DIALLO (to himself): Not yet.
38 D KAZ: Sarge.
39 D DIALLO: Not yet.
40 A ¶ The shape retreats.
* 41 A The shutters close.
42 A Diallo lets his shoulders drop one inch.
43 D KAZ: They're playing with us.
44 D DIALLO: We play back.
45 A ¶ He resettles.
46 A Kaz lifts the binoculars.
* 47 A The shelling picks up again.
48 T CUT TO BLACK.

### SCENE s01242 | EXT. DRY SALT LAKE - HOMESTEAD PORCH - AFTERNOON
Detected names (may be incomplete or contain aliases): JEREMIAH PIKE, STRANGER, JEDEDIAH
* 1 A ¶ A white crust of land that runs to the mountains.
* 2 A A weathered shack with a sagging porch roof.
* 3 A A rain barrel, empty.
* 4 A A windmill creaks, turning once in a while.
5 A ¶ An old rancher, JEREMIAH PIKE (70s, suspenders, a face like cracked leather), sits on a rocking chair whittling a stick.
* 6 A A shotgun leans against the rail.
7 A He doesn't pick it up.
8 A ¶ A rider appears out of the shimmer, leading a skinny horse.
9 A The rider dismounts at the edge of the yard: a lean man in a long duster, hat pulled low.
10 A A STRANGER.
11 D STRANGER: Afternoon.
12 D JEREMIAH: Afternoon.
13 D STRANGER: I'm looking for water for the horse.
14 D JEREMIAH: Barrel's dry.
15 D STRANGER: So I see.
16 D JEREMIAH: Well's behind the house. Bucket's on the nail. Mind the rope.
17 A ¶ The Stranger nods.
18 A Leads the horse around the side.
* 19 A A pump handle squeaks.
* 20 A Water splashes.
21 A Jeremiah whittles on.
22 A ¶ Presently the Stranger returns, hat in hand.
23 A He is younger than he looked: forty, if that.
24 A A scar runs down one cheek.
25 D STRANGER [CONT'D]: That's a good well.
26 D JEREMIAH: Dug it myself. Nineteen years ago.
27 D STRANGER: Nineteen.
28 D JEREMIAH: You say that like it means something.
29 D STRANGER: Might.
30 D JEREMIAH: Sit if you like.
31 A ¶ The Stranger takes the other step of the porch.
32 A Lowers himself.
33 A Their eyes are on the horizon.
34 D JEREMIAH [CONT'D]: You got a name?
35 D STRANGER: Used to.
36 D JEREMIAH: Used to is a fine name for a man.
37 A ¶ The Stranger half smiles.
* 38 A The windmill turns.
* 39 A A hawk circles far off.
40 D STRANGER: Jedediah.
41 D JEREMIAH (still whittling): Jedediah what?
42 D JEDEDIAH: Pike.
43 A ¶ The knife stops.
44 A Jeremiah stares at the stick in his hand as though it had just spoken.
45 D JEREMIAH: Pike's my name.
46 D JEDEDIAH: I know it.
47 D JEREMIAH: I had a boy named Jedediah.
48 D JEDEDIAH: I know.
49 A ¶ Neither looks at the other.
* 50 A The wind picks up a veil of white dust and lets it fall again.
51 D JEREMIAH: He ran off when he was twenty-one.
52 D JEDEDIAH: Twenty-one and two months.
53 D JEREMIAH: Took a horse.
54 D JEDEDIAH: This one's his granddaughter.
55 A ¶ Jeremiah laughs, short, dry, a sound with no air in it.
56 A He lowers the stick.
57 A Looks at it.
58 A Places it carefully on the rail.
59 D JEREMIAH: You hungry?
60 D JEDEDIAH: I could eat.
61 D JEREMIAH: I've beans.
62 D JEDEDIAH: Beans are good.
63 D JEREMIAH: Beans are what there is.
64 A ¶ He rises with a groan.
65 A Stops with a hand on the door.
66 D JEREMIAH [CONT'D]: Don't go getting any ideas about staying.
67 D JEDEDIAH: No, sir.
68 D JEREMIAH: I snore.
69 D JEDEDIAH: I remember.
70 A ¶ Jeremiah's back is turned.
71 A His shoulders tremble once.
72 A Then he goes inside.
73 A Jedediah sits there a while longer, hat on his knee, looking at the white horizon.
74 A ¶ He picks up the stick Jeremiah left on the rail and, with the little knife from his belt, begins to finish the carving.
75 T FADE OUT.

### SCENE s01243 | EXT. FROZEN LAKE - ICE FISHING HUT - DAWN
Detected names (may be incomplete or contain aliases): ASTRID BJORKLUND, KWAME ASANTE, LEILA NOURI, OLD HARTWELL, BENEDICT OYELARAN
* 1 A ¶ A tiny plywood shack on a plain of white.
* 2 A A thin plume of smoke rises from its tin chimney.
* 3 A The sun pushes up behind a dark treeline, spilling pink across the ice.
4 A ¶ Inside, four people crowd shoulder to shoulder around a hole in the floor, lines hanging in the black water.
* 5 A A portable stove glows red.
6 A ¶ ASTRID BJORKLUND (60s, wool hat, thermos) tends a line with patient fingers.
7 A ¶ KWAME ASANTE (30s, ice-auger slung across his back, laughs easily) rubs his gloves over the stove.
8 A ¶ LEILA NOURI (20s, scientist, notebook, clipboard) jots numbers beside the hole.
9 A ¶ OLD HARTWELL (70s, one-eyed, cap with earflaps) dozes upright in a folding chair, a pipe unlit in his mouth.
10 D KWAME: Astrid, you've got a bite.
11 D ASTRID: I know.
12 D KWAME: You're not reeling.
13 D ASTRID: I'm waiting.
14 D LEILA: What for?
15 D ASTRID: For him to decide.
* 16 A ¶ The line tugs.
17 A Astrid lifts it a single inch.
* 18 A The tension goes slack.
19 A She sighs.
20 D LEILA: Eleven centimetres of ice at the edge. Nineteen here. It's thickening, Astrid.
21 D ASTRID: It always thickens. Then it stops.
22 D KWAME: Hartwell, wake up. We have fish.
23 D HARTWELL (eyes closed): We have no fish.
24 D KWAME: We have a fish.
25 D HARTWELL: We have an optimist.
26 A ¶ Kwame grins.
27 A Leila writes it down without being asked, and Astrid's mouth twitches.
* 28 A ¶ Outside, a snowmobile growls.
* 29 A The engine cuts.
* 30 A Boots creak.
* 31 A The door swings open on a rush of white air.
32 A ¶ A man ducks in, stamping snow: BENEDICT OYELARAN (40s, ranger's parka, radio on his chest).
33 A He closes the door and stands there, enjoying the heat.
34 D KWAME [CONT'D]: Ranger Benedict. Come to arrest us?
35 D BENEDICT: Only if you've got more than the limit.
36 D LEILA: We have none.
37 D BENEDICT: Then you're safe.
38 D ASTRID: Coffee?
39 D BENEDICT: God, yes.
40 A ¶ She pours him a cup.
41 A He cradles it, steaming, and looks at the four of them: hats, noses, gloves, the black circle of water.
42 D BENEDICT [CONT'D]: Anybody catch anything?
43 D HARTWELL: Not yet.
44 D KWAME: But the day is young, Hartwell.
45 D HARTWELL: The day's old as the lake.
46 A ¶ Kwame laughs.
47 A Leila turns a page.
* 48 A The stove ticks.
49 A Astrid's line twitches again, and nobody says a word.
50 T FADE OUT.

### SCENE s01244 | INT. PLEA ROOM - COURTHOUSE BASEMENT - DAY
Detected names (may be incomplete or contain aliases): PUBLIC DEFENDER ROSALIND KEMP, MARGUERITE DELACROIX-OBI, THELONIOUS GRAVES
* 1 A ¶ A cinderblock cell with a steel table.
* 2 A A buzzing light.
* 3 A A small high window.
4 A ¶ PUBLIC DEFENDER ROSALIND KEMP (30s, tired blazer) sits across from her client, MARGUERITE DELACROIX-OBI (30s, orange jumpsuit, braids), and the prosecutor, ASSISTANT D.A. THELONIOUS GRAVES (50s, bow tie, folder).
5 D ROSALIND: She'll take the deal.
6 D GRAVES: Will she?
7 D MARGUERITE: I'll hear it first.
8 D GRAVES: Three years, suspended.
9 D ROSALIND: Time served.
10 D GRAVES: Three, suspended.
11 A ¶ Rosalind and Marguerite glance at each other.
12 A Marguerite lays a palm flat on the table.
13 A Graves taps his folder.
14 D MARGUERITE: And the record?
15 D GRAVES: Sealed after five.
16 D ROSALIND: Four.
17 A ¶ They all lean in at once, three palms on the table.
18 A Then all three freeze, because the light flickers and goes out.
19 A In the dark, nobody moves.
* 20 A ¶ The light buzzes back.
21 A They're in the same positions.
22 A Graves' bow tie is crooked.
23 D GRAVES (deadpan): Five.
24 D ROSALIND: Four and a half.
25 A ¶ He sighs.
26 A Marguerite almost laughs.
27 A Rosalind lifts a pen.
28 T FADE OUT.

### SCENE s01245 | INT. ER TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): FATIMA HADDAD, PIERRE LEFEBVRE-OKORO, NURSE TALIA BRODERICK, RESPIRATORY THERAPIST GUNNAR EKSTROM, EMEKA ADEYEMI-STROM
* 1 A ¶ A curtained bay under harsh fluorescent light.
* 2 A Monitors beep in a staggered chorus.
* 3 A The floor is wet where something was mopped and then spilled again.
4 A ¶ On the gurney lies a motorcyclist in a ruined leather jacket, jaw clamped around a bite block.
5 A Round him, the team works in a tight ring.
6 A ¶ DR. FATIMA HADDAD (40s, trauma lead, surgical cap with cartoon owls) calls out numbers in a flat voice.
7 A ¶ DR. PIERRE LEFEBVRE-OKORO (30s, resident, shirt soaked to the elbow) holds pressure on the chest.
8 A ¶ NURSE TALIA BRODERICK (50s, silver braid, expert hands) pushes a syringe into a line and calls the drug.
9 A ¶ RESPIRATORY THERAPIST GUNNAR EKSTROM (20s, headset, calm) squeezes a bag and watches the numbers climb.
10 D TALIA: Two of epi in.
11 D FATIMA: Pressure?
12 D GUNNAR: Seventy over forty.
13 D PIERRE: I have the bleed. I have it.
14 D FATIMA: Hold it. Hold it, Pierre.
15 D PIERRE: Holding.
* 16 A ¶ The monitor tone changes: a faster beep, a ragged line.
17 A Fatima lifts her eyes to it.
18 A Nobody speaks.
19 A Gunnar squeezes the bag.
20 A Talia's hand rests on the patient's shoulder, steady as a stone.
21 D GUNNAR: Eighty over fifty. Ninety.
22 D FATIMA: Sinus rhythm. We have a rhythm.
* 23 A ¶ The tone smooths.
* 24 A A long breath moves around the ring like a wave.
25 A Pierre's shoulders drop an inch.
26 A Talia taps the shoulder twice, lightly, the way you would pat a horse.
* 27 A ¶ The curtain flicks open.
28 A A tall man steps through: DR. EMEKA ADEYEMI-STROM (60s, chief of surgery, tie loose, tired).
29 A He takes in the monitors, the blood, the faces, and nods once.
30 D EMEKA: OR two is ready. Who's going up?
31 D FATIMA: Pierre will scrub in with you. I'll stay with the chest tube.
32 D EMEKA: Good.
33 D PIERRE: Good?
34 D EMEKA: Good work. All of you.
35 A ¶ He doesn't smile.
36 A He doesn't have to.
* 37 A The room has just slowed down to a human speed, and the owls on Fatima's cap seem to blink.
38 D TALIA (quietly): Gurney. On three.
39 A ¶ They count it together and roll him out.
40 T FADE OUT.

### SCENE s01246 | INT. FAMILY KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): ROSEMARY ALDRIDGE, BARNABY ALDRIDGE, GRANDMA
* 1 A ¶ Pancakes burn.
* 2 A Smoke curls from the pan.
* 3 A A cat watches from the refrigerator top.
4 A ¶ Mum, ROSEMARY ALDRIDGE (40s, bathrobe, phone against her shoulder), flips a pancake.
5 A It lands on the floor.
6 A She leaves it.
7 A ¶ Her son, BARNABY ALDRIDGE (10, school jumper, one shoe), sits at the table, staring at his cereal.
8 D BARNABY: It's soggy.
9 D ROSEMARY (into phone): Yes. I'm here. Hold on.
10 A ¶ She covers the receiver.
11 D ROSEMARY [CONT'D]: Barnaby, shoes.
12 D BARNABY: I'm not going.
13 D ROSEMARY: Barnaby.
14 D BARNABY: I'm not going.
15 D ROSEMARY (into phone): No, not you. Go on.
16 D GRANDMA [V.O.] (tinny, through the phone): Rosemary, put the boy on. Put him on.
17 D ROSEMARY: Mum, he's eating.
18 D GRANDMA [V.O.]: He's not eating. I can hear he's not eating.
19 A ¶ Barnaby's spoon clinks against the bowl.
20 A He pushes cereal in a circle.
21 D ROSEMARY: Barnaby. Grandma wants a word.
22 A ¶ He takes the phone.
23 A Holds it away from his ear like a dead fish.
24 D BARNABY: Hi.
25 D GRANDMA [V.O.]: Barnaby, my darling. Do you know what day it is?
26 D BARNABY: Tuesday.
27 D GRANDMA [V.O.]: It's your sports day, isn't it?
28 A ¶ His shoulders hunch.
29 A The spoon goes still.
30 D BARNABY: I'm not doing the race.
31 D GRANDMA [V.O.]: Why not?
32 D BARNABY: Because I always lose.
33 A ¶ Rosemary stops with the spatula in the air.
34 A She looks at him.
35 A He looks at the table.
36 D GRANDMA [V.O.]: Your grandfather lost every race he ever ran.
37 D BARNABY: Really?
38 D GRANDMA [V.O.]: Every one. He'd come in last and hold his arms up like he'd won. Everyone cheered. You know why?
39 D BARNABY: Why?
40 D GRANDMA [V.O.]: Because he was the only one who looked like he was enjoying it.
41 A ¶ Barnaby lifts his head.
42 A A corner of his mouth moves.
43 D BARNABY: Grandpa did that?
44 D GRANDMA [V.O.]: Put your mother back on.
45 A ¶ He hands the phone to Rosemary.
46 A She takes it, breath held.
47 D ROSEMARY: Mum?
48 D GRANDMA [V.O.]: Burn another pancake. He likes them burned.
49 A ¶ Rosemary laughs, a wet cracked sound.
50 A She wipes her eyes with the back of her wrist.
51 D ROSEMARY: I love you.
52 D GRANDMA [V.O.]: Hush. Go and flip.
* 53 A ¶ The line clicks.
54 A Rosemary puts the phone down on the counter.
55 A She picks up the burnt pancake from the pan, slides it onto a plate, and sets it in front of Barnaby.
56 D BARNABY: It's black.
57 D ROSEMARY: Eat.
58 A ¶ He takes a bite.
59 A Chews.
60 A Nods.
61 D BARNABY: It's okay.
62 A ¶ He picks up his other shoe.
63 T FADE OUT.

### SCENE s01247 | EXT. STAGECOACH STATION - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF LUCINDA HARGROVE, DEPUTY MARIGOLD TEASDALE, ABSALOM FINCH
* 1 A ¶ A single hitching post.
* 2 A Dust.
* 3 A A water trough with a drowned sparrow in it.
4 A ¶ SHERIFF LUCINDA HARGROVE (40s, star on her vest) stands with her arms folded.
5 A Beside her, DEPUTY MARIGOLD TEASDALE (20s, new hat, too-big holster) fidgets.
6 A Across the road, a rider on a grey mare: ABSALOM FINCH (30s, handlebar moustache, silver spurs).
7 D LUCINDA (to Marigold, low): Let me do the talking.
8 D MARIGOLD: I wasn't going to.
9 D LUCINDA (to the road, loud): Morning, Absalom.
10 D ABSALOM: Morning, Sheriff.
11 D LUCINDA: You're a long way from Tucson.
12 D ABSALOM: It's a long way to anywhere.
13 A ¶ He swings down.
* 14 A Spurs ring.
* 15 A The mare shakes her mane.
16 A Marigold's hand drifts toward her holster.
17 D LUCINDA (muttering): Hand off the gun.
18 D MARIGOLD (muttering): She said hand off.
19 A ¶ She lets the hand fall.
20 A Lucinda doesn't look at her.
21 D ABSALOM: Heard there was a hanging today.
22 D LUCINDA: Heard wrong.
23 D ABSALOM: Heard right, then.
24 A ¶ He tips his hat to the trough, to the sparrow, to the dust.
25 A Mounts again, turns the mare, and trots out of town.
26 A Lucinda watches him go.
27 A Marigold releases her breath.
28 D MARIGOLD: Who hangs on a Tuesday?
29 D LUCINDA (to the whole street): Nobody, thank God.
30 T FADE OUT.

### SCENE s01248 | INT. STAGE DOOR - GRAND MERIDIAN THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE BLACKWOOD, MIRABELLE TRUJILLO, THADDEUS GRANT, PRUDENCE WILKES-AMARI, CORNELIUS FAIRCHILD, BARTY, NKEMELU
* 1 A ¶ The backstage corridor of an old playhouse.
* 2 A Peeling posters, a cracked mirror, a radiator knocking like a dying heart.
* 3 A A single bulb in a wire cage swings gently.
* 4 A There is no draught.
* 5 A ¶ The final performance has ended.
6 A Six members of the company stand in their street clothes, coats half-on, none of them going home.
7 A ¶ AUGUSTINE BLACKWOOD (60s, director, silk scarf) stares at the stage door.
8 A ¶ MIRABELLE TRUJILLO (30s, lead actress, make-up still on one eye) grips her handbag.
9 A ¶ THADDEUS GRANT (40s, stage manager, headset around his neck) counts heads with his finger.
10 A ¶ PRUDENCE WILKES-AMARI (20s, understudy, bright red coat) bites her thumbnail.
11 A ¶ CORNELIUS FAIRCHILD (50s, prop master, apron) cradles a skull from the final scene.
12 A ¶ BARTHOLOMEW "BARTY" NKEMELU (teen, call-boy, cap) hovers at the back.
13 D THADDEUS: Five. I count five.
14 D AUGUSTINE: Six, Thaddeus.
15 D THADDEUS: Five and Barty.
16 D MIRABELLE: Six, then.
17 D PRUDENCE: Who's missing?
18 D CORNELIUS: Nobody's missing.
19 D BARTY: There was somebody in the wings. During the third act.
20 D AUGUSTINE: That was the ghost light.
21 D BARTY: It moved.
22 D THADDEUS: Lights don't move.
23 D PRUDENCE: It was a man.
24 D MIRABELLE: It was Cornelius, getting the skull.
25 D CORNELIUS: I was at the prop table.
* 26 A ¶ A beat.
* 27 A The bulb swings.
* 28 A The shadow of the cage drifts slowly across their faces.
29 A Nobody looks up.
* 30 A ¶ The radiator knocks twice.
* 31 A Then once.
32 D AUGUSTINE: Whose coat is that?
* 33 A ¶ On a hook by the stage door hangs a long black coat with a velvet collar.
34 A Nobody moves toward it.
35 D MIRABELLE (almost inaudible): It wasn't there at the interval.
36 D PRUDENCE: It's cold.
37 D THADDEUS: Everyone, out. Now. Barty, the keys.
38 D BARTY: I left them on the...
39 D THADDEUS: Barty.
40 D BARTY: I left them in the prompt corner.
* 41 A ¶ Silence.
42 A Thaddeus turns.
* 43 A Down the corridor, the stage door to the auditorium is open a hand's width.
44 A Inside, in the dark, the ghost light burns, and in front of it, small and still, stands a figure with its back to them, face to the empty seats.
45 D CORNELIUS (whispering): Don't look.
46 A ¶ They all look.
* 47 A ¶ The skull in Cornelius's arms clacks its jaw, softly, once.
48 A He drops it.
* 49 A It rolls under the radiator.
50 D AUGUSTINE (barely a breath): Nobody run.
51 D PRUDENCE: Nobody...
52 D MIRABELLE: Yes.
53 D THADDEUS: Run.
54 A ¶ They run.
55 T FADE OUT.

### SCENE s01249 | INT. PEDIATRIC CLINIC - EXAM ROOM - DAY
Detected names (may be incomplete or contain aliases): WOMAN, SOLVEIG AASEN-BELLO, KAMARIA JOSEPH-FERRIER, OSKAR, FATHER, THE FATHER, DAVID
* 1 A ¶ Bright walls, painted giraffes, a jungle-gym poster.
* 2 A A small examination bed with white paper and a stuffed lion.
* 3 A A scale.
* 4 A Sunlight through a striped blind.
5 A ¶ A WOMAN in a white coat, her name tag turned backward, sits on a rolling stool with a tablet: DR. SOLVEIG AASEN-BELLO (40s, kind, tired, mismatched earrings).
6 A She keeps her voice level.
7 A ¶ Her patient's mother, KAMARIA JOSEPH-FERRIER (30s, nurse's scrubs under her coat, tight shoulders), holds a toddler's hand.
8 A The toddler, OSKAR, is asleep on the bed.
9 A ¶ And in the corner, on a plastic chair, sits a man, introduced on the form only as THE FATHER (30s, hoodie, unshaven, knee bouncing).
10 D SOLVEIG: He's very warm.
11 D KAMARIA: I know.
12 D SOLVEIG: Has he been drinking?
13 D KAMARIA: Barely.
14 D THE FATHER: He had juice.
15 D KAMARIA: Half a cup.
16 D SOLVEIG: Any rash?
17 D THE FATHER: Not that I saw.
18 D KAMARIA: David, I checked. Twice.
19 D SOLVEIG (typing): Fever since?
20 D THE FATHER: Monday.
21 D KAMARIA: Sunday night.
22 A ¶ He looks at her.
23 A She looks at the child.
* 24 A The pen clicks.
25 D SOLVEIG: Okay. I'm going to listen to his chest.
26 A ¶ She lays the stethoscope on the small ribs.
27 A Her eyes drift, then fix.
28 A Her face doesn't change, but her hand does.
29 A It moves up.
30 A Back.
31 A Down.
32 D KAMARIA: What is it?
33 D SOLVEIG: I'd like a quick bloods and a chest film.
34 D THE FATHER: What is it?
35 D SOLVEIG: I'm not sure yet.
36 D KAMARIA (very quiet): Don't do that to me. I'm a nurse.
37 D SOLVEIG: I know.
38 D KAMARIA: What do you hear?
39 D SOLVEIG: A fluid sound. On the right.
40 A ¶ Kamaria closes her eyes.
41 A The father's knee stops bouncing.
42 A He half rises, sits again, and leans forward until his elbows rest on his thighs.
43 D DAVID (to himself): I told you Monday.
44 D KAMARIA: You told me nothing.
45 D DAVID: I said we should come in Monday.
46 D KAMARIA: You said wait.
47 D SOLVEIG: Please. Both of you.
48 A ¶ She wheels the stool back.
49 A Rests the stethoscope across her knees.
50 D SOLVEIG [CONT'D]: He's going to be admitted. Today. He's stable, he's breathing, and I'm going to have him upstairs in twenty minutes.
51 D KAMARIA: Oxygen?
52 D SOLVEIG: Yes.
53 D KAMARIA: Antibiotics?
54 D SOLVEIG: IV. Straight away.
55 A ¶ Kamaria nods.
56 A Opens her eyes.
57 A Squeezes the small hand and doesn't let go.
58 A David pulls a tissue from his hoodie pocket.
59 A Finds there is nothing in it.
60 D SOLVEIG [CONT'D]: He's going to be all right. It will be loud and frightening, but he's going to be all right.
61 D DAVID: You promise?
62 D SOLVEIG: I won't promise. I'll stay with him.
63 A ¶ On the bed, Oskar stirs, opens one eye, and sees the lion.
64 A He reaches for it with the whole of his fist.
65 T FADE OUT.

### SCENE s01250 | INT. UNDERTAKER'S PARLOUR - BACK ROOM - NIGHT - 1927
Detected names (may be incomplete or contain aliases): MAUDE PELLETIER, CYRIL OSGOOD, OTTOLINE VANTERPOOL, BRAM HOLLIDAY, STRANGER, NOLAN, ^NOLAN
* 1 A ¶ Behind a velvet curtain, a secret card game.
* 2 A Six coffins stand in a row against the wall, lids propped open as stools.
* 3 A A card table in the middle.
* 4 A Smoke hangs under a green-shaded lamp.
* 5 A A gramophone plays a tinny foxtrot.
6 A ¶ MAUDE PELLETIER (50s, owner, black bombazine, rings on every finger) deals cards with a flick of her wrist.
7 A ¶ CYRIL OSGOOD (30s, bookkeeper, spectacles, sweat on his lip) arranges his hand in a fan.
8 A ¶ OTTOLINE VANTERPOOL (20s, flapper, fur collar, cigarette holder) leans back in a coffin as if it were a chaise longue.
9 A ¶ BRAM HOLLIDAY (40s, bootlegger, pinstripes, a pistol bulge under his arm) drinks gin out of a tin funeral urn.
* 10 A ¶ The curtain parts.
11 A A man in a rain-soaked fedora steps through.
12 A A STRANGER (30s, slim, quiet, hands in his pockets).
13 D MAUDE: We're closed, mister.
14 D STRANGER: The door said open.
15 D MAUDE: The door says a lot of things.
16 D STRANGER: I heard there was a game.
17 D BRAM: You heard wrong.
18 D OTTOLINE: Oh, let him sit, Bram. He's pretty.
19 D CYRIL (swallowing): Is he police?
20 D STRANGER: No.
21 D BRAM: You'd say that.
22 D STRANGER: I would.
23 A ¶ He takes a seat in the empty coffin, folding his coat over his knees.
24 A Maude deals him in without waiting for permission.
25 A He turns up his cards, studies them, and sets them face-down.
26 D MAUDE: What's your name?
27 D STRANGER: Does it matter?
28 D MAUDE: Everyone who sits here has one.
29 A ¶ Ottoline blows smoke at the lamp.
30 A Cyril clears his throat, drops a chip.
31 A Bram watches the Stranger over the rim of the urn.
32 D STRANGER: Nolan.
33 D MAUDE: Just Nolan?
34 D NOLAN: It's what the boys at the dock call me.
35 A ¶ Bram's urn stops halfway to his mouth.
36 D BRAM: Which dock?
37 D NOLAN: Pier nine.
38 D BRAM: Pier nine's mine.
39 D NOLAN: I know.
* 40 A ¶ The gramophone needle hits the end of the record and ticks.
41 A Nobody gets up to change it.
42 A Cyril's hand goes to the little pearl-handled derringer in his boot.
43 A He thinks better of it.
44 D OTTOLINE: Oh, I do love a scene.
45 D BRAM: Shut it, Otty.
46 D OTTOLINE: You shut it. I'm having a lovely time.
47 D NOLAN (to the table): Nobody has to get hurt.
48 D MAUDE: Good. I've hurt enough people this week.
49 D BRAM: You think you can walk in here and--
50 D CYRIL: I think we should all calm down--
51 D OTTOLINE: I think he should deal--
52 D MAUDE: Quiet!
53 A ¶ They stop.
54 A Maude lays down the deck.
55 A Slides one coffin lid shut with a bang that makes the lamp swing.
56 D MAUDE [CONT'D] (to Nolan): Say your piece.
57 D NOLAN: Mr. Holliday's been shorting Pier nine for six months. The Chief says the count's off by forty crates.
58 D BRAM: Who's the Chief?
59 D NOLAN: The man whose pier it really is.
60 D BRAM: That's a lie.
61 D ^NOLAN: That's a receipt.
62 A ¶ He lays a folded paper on the felt.
63 A Maude picks it up, scans it, passes it to Cyril.
64 A Cyril reads and goes grey.
65 D CYRIL (whispering): Bram. It's your signature.
66 D BRAM: It's forged.
67 D CYRIL: It's got the thumb.
68 D BRAM: Give me that!
69 A ¶ He lunges.
* 70 A Chips fly.
* 71 A The urn clatters off.
72 A Ottoline shrieks with laughter and scrambles backward.
73 A Nolan doesn't move from his coffin.
74 A Bram's pistol is in his hand now, shaking, aimed at Nolan's chest.
75 D MAUDE: Bram, put it down.
76 D BRAM: He's not leaving.
77 D NOLAN: Not through the door, no.
78 A ¶ Bram blinks.
* 79 A The curtain behind him moves.
* 80 A A shadow stretches along the wall.
81 A ¶ Maude stands.
* 82 A Her chair scrapes.
83 D MAUDE: Bram. Behind you.
84 A ¶ He half turns.
85 A Maude's ringed hand takes the pistol out of his grip, neat as a waiter lifting a plate.
86 A She holds it by the barrel.
* 87 A ¶ The gramophone needle skips.
* 88 A Silence.
89 D OTTOLINE (delighted): Oh, Maude's the Chief!
90 A ¶ Nolan collects his cards.
91 A Turns them over.
* 92 A A full house.
93 D NOLAN: Maude. Your deal.
94 D MAUDE (dryly): Of course it is.
95 T FADE OUT.

### SCENE s01251 | INT. BOARDING HOUSE - KITCHEN - MORNING - 1911
Detected names (may be incomplete or contain aliases): ABIGAIL THORNBURY, ROSALIE THORNBURY-LAMB
* 1 A ¶ A long, low room with a range stove and a scrubbed deal table.
* 2 A Copper pans hang from a rack.
* 3 A Rain on the window.
* 4 A A bowl of apples.
* 5 A A kettle sings on the hob.
6 A ¶ ABIGAIL THORNBURY (50s, widow, apron over grey wool, hands red from lye) rolls pastry.
7 A She does it without thinking, as her mother did, and her mother's mother: out, turn, out, turn.
* 8 A ¶ Through the ceiling comes the sound of a bed creaking.
* 9 A A step.
* 10 A A pause.
* 11 A A drawer slides shut.
12 D ROSALIE [O.S.] (from upstairs, muffled): Abigail? Are you there?
13 D ABIGAIL (raising her voice slightly): Where else would I be?
14 D ROSALIE [O.S.]: I can't find my blue hat.
15 D ABIGAIL: It's on the hook in the hall.
16 D ROSALIE [O.S.]: I looked there.
17 D ABIGAIL: Look again.
* 18 A ¶ A pause.
* 19 A A longer creak.
* 20 A Then footsteps, light, down the back stairs.
21 A The kitchen door swings open and ROSALIE THORNBURY-LAMB (50s, younger sister, travelling coat, hat in hand) enters, pink in the cheeks.
22 D ROSALIE: It was on the hook.
23 D ABIGAIL: It's always on the hook.
24 D ROSALIE: I don't know how I missed it.
25 D ABIGAIL: You were looking for a hat. You weren't looking for a hook.
26 A ¶ Rosalie sets the hat down on the table, beside the apples.
27 A She doesn't sit.
28 A Abigail rolls and turns the pastry.
29 D ROSALIE: Is there tea?
30 D ABIGAIL: The kettle's on.
31 A ¶ Rosalie takes two cups from the dresser.
32 A Arranges them, saucers, spoons.
33 A Pours when the kettle shrieks.
34 A She sets Abigail's cup on the table at her elbow and takes her own to the window.
35 D ROSALIE: It's still raining.
36 D ABIGAIL: It's been raining since Michaelmas.
37 D ROSALIE: She'd have hated that. Mother. Always said rain made the apples sour.
38 D ABIGAIL: She said many things.
39 D ROSALIE: She said you'd stay.
40 A ¶ Abigail's hands pause on the pin.
41 A Only for a second.
42 A Then they roll.
43 D ABIGAIL: And she said you'd go. Both are true.
44 D ROSALIE: Are they?
45 D ABIGAIL: Nobody's stopping you.
46 D ROSALIE: I thought you might.
47 D ABIGAIL: I'd be a poor sister to bar a door.
48 A ¶ Rosalie sips her tea.
49 A Her face is turned to the window and the grey light; Abigail's is turned to the table.
50 A Neither sees the other's expression.
51 D ROSALIE: The train is at noon.
52 D ABIGAIL: Then you'll want an early lunch.
53 D ROSALIE: I will.
54 D ABIGAIL: I've an apple pie.
55 D ROSALIE: It's not baked.
56 D ABIGAIL: It will be.
57 A ¶ She lifts a flat circle of pastry and drapes it over a tin.
58 A Trims the edge with a knife in one smooth turn.
59 A Rosalie watches the knife.
60 D ROSALIE: You've always been so good at that.
61 D ABIGAIL: It's the only thing I'm good at.
62 D ROSALIE: That isn't true.
63 D ABIGAIL (drily): Tell me what else, then.
64 D ROSALIE: You were good at being left.
65 A ¶ Abigail's knife stops.
66 A She doesn't look up.
67 D ABIGAIL: That's unkind.
68 D ROSALIE: It's the truth. I mean it kindly.
69 D ABIGAIL: I know you do.
* 70 A ¶ A long, quiet moment.
* 71 A The kettle ticks as it cools.
72 A Rosalie crosses, sets down her cup.
73 A Takes an apple from the bowl, then a second, and hands one to Abigail.
74 A They peel in silence, side by side, the skins coming off in two unbroken spirals.
75 D ROSALIE: Yours is longer.
76 D ABIGAIL: It always is.
77 A ¶ She drops her spiral in the bin.
78 A Rosalie keeps hers, curled in her palm like a small snake, a moment longer than she needs to.
79 D ROSALIE: I'll write.
80 D ABIGAIL: You won't.
81 D ROSALIE: I will.
82 D ABIGAIL: Then I'll read it.
83 A ¶ Rosalie smiles.
84 A She sets the peel on the table.
* 85 A It uncurls slowly and lies there, pale, in the lamplight.
86 T FADE OUT.

### SCENE s01252 | INT. PARKED CAR - ABANDONED QUARRY - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE SERAPHINA OKONJO-WYATT
* 1 A ¶ Rain on the roof.
* 2 A The dashboard glows green.
* 3 A A small digital recorder sits in the cupholder, its red light steady.
4 A ¶ DETECTIVE SERAPHINA OKONJO-WYATT (40s, rain-slick trench, eyes that haven't slept in days) leans toward the recorder.
5 D SERAPHINA: This is Detective Okonjo-Wyatt. Eleventh of November, twenty-three-forty. If anyone is listening to this, I'm sorry.
6 A ¶ She presses a button.
* 7 A A click.
* 8 A A hiss.
* 9 A Then, on the tape, her own voice plays back from earlier.
10 D SERAPHINA [V.O.] (recorded, flat): Monday. The body was found at the foot of the quarry stairs. No wallet. No phone. One shoe.
11 A ¶ She stops the tape.
12 A Rewinds a little.
13 A Presses record.
14 D SERAPHINA: The shoe was wrong. Left shoe, size nine, on a right foot. I should have seen it Monday. I saw it Wednesday. Wednesday is too late.
* 15 A ¶ A long breath.
16 D SERAPHINA [CONT'D]: The man in the stairwell wasn't the man we buried. The man we buried was a second man, and the second man had been dead since Friday. The first man is alive. He is walking around in the first man's shoes.
17 A ¶ She rubs her eyes.
* 18 A The rain thickens.
19 D SERAPHINA [CONT'D]: His name is Corwin Hale. He's the one who called it in.
20 A ¶ She stops.
21 A Her face is lit green.
22 A She presses play.
* 23 A Her own voice again.
24 D SERAPHINA [V.O.] (recorded): Corwin Hale found the body at dawn. He said he was jogging. He was in loafers.
25 A ¶ She stops the tape.
26 D SERAPHINA: Loafers, Corwin. I wrote it down. You saw me write it down.
27 A ¶ She swallows.
28 A Looks through the windscreen.
* 29 A Beyond the glass, in the rain, a pair of headlights is turning in at the quarry gate, slowly, very slowly.
30 D SERAPHINA [CONT'D] (lower): If this is the last thing I record, I want it noted that I was right.
* 31 A ¶ The headlights grow.
32 A She does not look at them.
33 A She reaches out and presses the recorder once more.
34 D SERAPHINA [CONT'D] (into recorder): Case file is in the glove box. The key is under the seat. Tell Marguerite I did love her.
* 35 A ¶ The light floods the car.
* 36 A Her shadow lunges across the dashboard.
37 T CUT TO BLACK.

### SCENE s01253 | INT. HOSPICE - FAMILY LOUNGE - AFTERNOON
Detected names (may be incomplete or contain aliases): MERCEDES ARANDA-LINDGREN, RAMIRO BELLWETHER, CONSTANZA BELLWETHER-NAKAMURA, FELIX BELLWETHER
* 1 A ¶ A soft, sunny room: beige sofas, a fish tank, a jigsaw half-done on a coffee table.
* 2 A A television plays a gardening programme with the sound off.
* 3 A Somewhere down the hall, a trolley rattles.
4 A ¶ DR. MERCEDES ARANDA-LINDGREN (50s, grey cardigan, low voice) pours four cups of tea from a pot she did not need to bring.
5 A She sets the tray on the table with great care.
6 A Her hands are very still.
7 A ¶ On the sofa sit three siblings: the eldest, RAMIRO BELLWETHER (50s, rumpled suit, wedding ring he keeps turning), the middle, CONSTANZA BELLWETHER-NAKAMURA (40s, ironed blouse, handbag clutched on her knees), and the youngest, FELIX BELLWETHER (30s, scruffy, headphones around his neck).
8 D RAMIRO: She's been better this week.
9 D FELIX: She asked for the radio.
10 D CONSTANZA: She asked for soup.
11 D MERCEDES: She did.
12 A ¶ She hands out cups.
13 A Ramiro accepts his without looking.
14 A Constanza sets hers on the table, untouched.
15 A Felix cradles his between both palms as if it were a bird.
16 D MERCEDES [CONT'D]: She's been very bright these past days. It happens sometimes. A rally. We see it more than people expect.
17 D RAMIRO: A rally.
18 D MERCEDES: Yes.
19 D RAMIRO: So she's improving.
20 D MERCEDES: She's comfortable.
21 A ¶ He nods, slowly.
22 A Turns the ring.
* 23 A On the television, a woman in a straw hat bends to trim a rose, silent as a mime.
24 D CONSTANZA: When can she come home?
25 A ¶ Mercedes lifts her own cup.
26 A Sips.
27 A Sets it down, rim to saucer, with no sound at all.
28 D MERCEDES: That's a question I'd like to talk about.
29 D FELIX: Not yet.
30 D RAMIRO: Felix.
31 D FELIX: I'm not ready.
32 D CONSTANZA: Nobody's saying...
33 D MERCEDES: Felix.
34 A ¶ He looks at her.
35 A She waits.
* 36 A The fish tank bubbles.
* 37 A A clownfish noses a plastic castle.
38 D MERCEDES [CONT'D]: When someone gets bright, like your mother, it often means they're gathering themselves. It can last a day. It can last a week. But it is, very often, the last good thing.
39 A ¶ Constanza's hand finds her brother's arm.
40 A Ramiro's ring stops turning.
41 A Felix stares into the tea.
42 D FELIX (whispering): Is that what you meant by comfortable?
43 D MERCEDES: It's what I meant.
* 44 A ¶ Silence.
* 45 A The trolley rattles down the corridor and fades.
46 A Constanza opens her handbag, takes out a tissue, and folds it twice but does not use it.
47 D RAMIRO: How long?
48 D MERCEDES: Days.
49 D RAMIRO: How many?
50 D MERCEDES: I can't say exactly. I'd rather not guess in front of you.
51 A ¶ He exhales.
52 A Taps the sofa arm twice, hard, like a man hammering a nail.
53 A Then stops.
54 D CONSTANZA: She wants to see the garden.
55 D MERCEDES: She can see it. Today. We'll take the chair.
56 D CONSTANZA: And the dog.
57 D MERCEDES: Whatever she wants.
58 D FELIX (looking up): She wants the radio.
59 D MERCEDES: Then bring the radio.
60 A ¶ Felix nods.
61 A Stands, clumsy, spilling tea.
62 A He sets the cup on the tray and wipes his palms on his jeans.
63 A Constanza rises too.
64 A Ramiro follows, last, placing his tea on the table with a precision that looks like violence.
65 A ¶ At the door he stops.
66 D RAMIRO: Doctor.
67 D MERCEDES: Yes?
68 D RAMIRO: Thank you for the tea.
69 D MERCEDES (gently): You're welcome.
70 A ¶ The three siblings leave.
71 A Mercedes remains alone with the tray, the unfinished cups, the jigsaw.
72 A She picks up a puzzle piece from the table, turns it in her fingers, and sets it carefully in the sky of a sunny picture, where it fits exactly.
73 T FADE OUT.

### SCENE s01254 | EXT. CANYON RIM - CAMP - DAWN
Detected names (may be incomplete or contain aliases): ELIJAH VANCE-HOLLOWAY, PEPPER, DUNLEAVY, TOBIAS MWANGI, OLD AUGUSTUS FENWICK, ^TOBIAS
* 1 A ¶ Red stone against a lemon sky.
* 2 A A thin column of smoke.
* 3 A Four bedrolls around a dead fire, a coffee pot on a flat rock.
* 4 A Horses hobbled in a stand of juniper.
5 A ¶ A tall man sits cross-legged on a saddle, rolling a cigarette.
6 A ELIJAH VANCE-HOLLOWAY (40s, black hat, a face like a closed door).
7 A He licks the paper, tucks it behind his ear, and doesn't light it.
8 A ¶ Beside him a lean woman scrapes a skillet clean with a knife.
9 A PERPETUA "PEPPER" DUNLEAVY (30s, braided hair, two pistols).
10 A She scrapes slowly, listening.
* 11 A ¶ The third bedroll is empty.
12 A The fourth holds a boy of fifteen, sleeping with his boots on: TOBIAS MWANGI (15, freckles, too-big shirt).
13 A He snores.
14 A ¶ At the edge of camp, a stooped man in a long grey duster watches the horizon with a spyglass: OLD AUGUSTUS FENWICK (60s, spectacles pushed up on his forehead).
15 D AUGUSTUS: Smoke.
16 D ELIJAH: Whose?
17 D AUGUSTUS: South. Two miles.
18 D ELIJAH: Ours or theirs?
19 D AUGUSTUS: Don't know. Could be anybody's.
20 A ¶ Pepper stops scraping.
21 A She sets the skillet down and wipes her knife on her trouser leg.
22 A She does not look at Elijah.
23 A He does not look at her.
24 D PEPPER: We should wake the boy.
25 D ELIJAH: Let him sleep.
26 D PEPPER: He'll want to be awake for this.
27 D ELIJAH: No, he won't.
28 A ¶ Augustus lowers the spyglass.
29 A He turns it over in his hands, studies the brass, then screws it shut.
30 D AUGUSTUS: Eleven riders.
31 D ELIJAH: You said smoke.
32 D AUGUSTUS: I said smoke. Then I counted.
33 A ¶ Elijah draws the cigarette from behind his ear.
34 A Strikes a match on his boot.
* 35 A The flame trembles.
36 A He holds it a long time before lighting, as if the match were something to pray to.
37 D ELIJAH: Eleven.
38 D PEPPER: We have four.
39 D ELIJAH: Three, with a child.
40 D AUGUSTUS: Four.
41 D ELIJAH: Four.
42 D PEPPER: We could ride north.
43 D ELIJAH: They'd see the dust.
44 D PEPPER: We could ride now.
45 D ELIJAH: They'd see the dust.
46 A ¶ She nods, short, like a woman agreeing to be hanged.
47 A She stands, her two pistols clinking, and crosses to the juniper where the horses stand.
48 A She runs her hand along the nearest neck.
49 A ¶ At the bedroll, the boy turns over and opens one eye.
50 D TOBIAS: Is it morning?
51 D ELIJAH: It's morning.
52 D TOBIAS: Is there coffee?
53 D ELIJAH: There will be.
54 A ¶ Tobias sits up.
55 A Rubs his face.
56 A Sees Pepper at the horses.
57 A Sees Augustus with the spyglass.
58 A Sees the match burn down to Elijah's fingers.
59 D TOBIAS: Who's coming?
* 60 A ¶ Nobody answers.
61 A Elijah drops the match.
* 62 A It dies in the dust.
63 D ELIJAH: Pepper. Saddle the boy's horse.
64 D PEPPER: I've done it.
65 D ELIJAH: Augustus. Water.
66 D AUGUSTUS: I filled it last night.
67 D ELIJAH: You always do.
68 A ¶ He stands.
69 A Dusts his knees.
70 A Hands the unlit cigarette to Tobias, who takes it, astonished.
71 D TOBIAS: What's this for?
72 D ELIJAH: For after.
73 D PEPPER: You don't say that to a boy.
74 D ELIJAH: I'm saying it.
* 75 A ¶ A distant sound: horses, many horses, a soft thunder rolling over the rim.
76 A Augustus puts the spyglass in his pocket.
77 A Pepper draws one pistol and spins it once on her finger.
78 A Tobias gets his boots under him.
79 D TOBIAS: Can I have a gun?
80 D ELIJAH: No.
81 D PEPPER: Give him mine.
82 D ELIJAH: Pepper.
83 D PEPPER: He's got a right.
84 D ^TOBIAS: I've got a right.
85 A ¶ They speak together, her voice dry, his voice cracking.
86 A Elijah looks from one to the other, then at the dust cloud boiling on the horizon, then at the coffee pot.
87 D ELIJAH (quietly): Put on the coffee.
88 D AUGUSTUS: Elijah...
89 D ELIJAH: If we're going to die, we'll die warm.
90 A ¶ Pepper sets the pot on the dead coals.
91 A Tobias snaps twigs into a pile.
92 A Augustus brings a match.
* 93 A ¶ The thunder rolls closer.
* 94 A The twigs catch.
95 T FADE OUT.

### SCENE s01268 | INT. WEDDING RECEPTION - RIVERBOAT BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): IMANI LOCKHART-DEVEREUX, FERNANDO CASTELLANOS, DONA GLORIA CASTELLANOS, UNCLE ABEL
* 1 A ¶ Paper lanterns sway on a gilded deck.
* 2 A A band plays under strung lights.
* 3 A Champagne flutes shiver on a long white table.
4 A ¶ Four guests huddle near the cake: the bride's sister IMANI LOCKHART-DEVEREUX (30s, bridesmaid, sage-green dress), her ex-boyfriend FERNANDO CASTELLANOS (30s, best man, too-tight tie), his mother DONA GLORIA CASTELLANOS (60s, black lace, fan in hand), and an elderly cousin, UNCLE ABEL (70s, braces, cane).
5 A ¶ Imani and Fernando stand a pace apart, the way people do when they have both rehearsed a speech and forgotten it.
6 D IMANI: You look well.
7 D FERNANDO: You look... green.
8 D IMANI: It's sage.
9 A ¶ Gloria snaps her fan open.
10 A Abel leans heavily on his cane and squints at the cake.
11 A Imani and Fernando both reach for the same champagne flute, their fingers meeting on the stem.
12 A They freeze.
* 13 A The band hits a slow chord.
14 D FERNANDO: After you.
15 D IMANI: After you.
16 A ¶ Gloria and Abel exchange a glance, shuffle to opposite sides of the cake, and, as if on cue, begin to cut it, passing the knife between them with elaborate ceremony.
17 T FADE OUT.

### SCENE s01269 | INT. GLOBEX HOLDINGS - OPEN-PLAN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): HORATIO PEMBERTON-ADEYEMI, CORDELIA VANTERPOOL-OKONKWO, REGGIE FITZWILLIAM, BRIGITTE SOLANKI, DEZ, OKAMOTO, IT, INTERCOM, BARNABY CRANSTON-LEE, VP
* 1 A ¶ A sea of beige cubicles under a drop ceiling.
* 2 A A motivational poster of a rowing eight hangs crooked above the water cooler.
* 3 A A sign: SYNERGY IS OUR MIDDLE NAME.
4 A ¶ Five employees stand at their desks, holding paper cups of lukewarm coffee, waiting.
5 A ¶ HORATIO PEMBERTON-ADEYEMI (50s, manager, short-sleeve shirt, tie clip like a tiny sword) clears his throat by the whiteboard.
6 A ¶ CORDELIA VANTERPOOL-OKONKWO (30s, senior analyst, silent, immaculate) stirs her coffee without drinking it.
7 A ¶ REGGIE FITZWILLIAM (40s, sales, loud shirt, over-whitened teeth) sprawls on the corner of a desk.
8 A ¶ BRIGITTE SOLANKI (20s, HR coordinator, lanyard heavy with badges) clutches a binder.
9 A ¶ DESMOND "DEZ" OKAMOTO (30s, IT, headphones round his neck, three days' growth) leans against a filing cabinet, unimpressed.
* 10 A ¶ Overhead, a speaker crackles.
11 D INTERCOM [V.O.] (female, bright): Good morning, Globex! A reminder that today is Casual Friday, and also Mandatory Fun Day.
12 D HORATIO (to the room): Okay, team. Quick huddle.
13 D REGGIE: We are huddled.
14 D HORATIO: Properly huddled.
15 D CORDELIA: We're standing four feet apart.
16 D HORATIO: Three, please.
17 A ¶ They shuffle a foot closer.
18 A Brigitte raises her binder like a shield.
19 A Dez rolls his eyes.
20 D HORATIO [CONT'D]: As you know, Corporate has asked us to find twelve percent in efficiencies.
21 D REGGIE: Twelve?
22 D BRIGITTE: It's in the memo.
23 D REGGIE: There's a memo?
24 D DEZ: There's always a memo.
25 D HORATIO: I want to be clear: nobody is being let go.
26 D CORDELIA: Good.
27 D HORATIO: Today.
* 28 A ¶ A silence.
* 29 A The intercom clicks.
30 D INTERCOM [V.O.] (female, bright): Reminder: the Efficiency Pizza Party begins at noon in the Collaboration Zone!
31 D BRIGITTE (muttering): Efficiency Pizza.
32 D HORATIO: What was that, Brigitte?
33 D BRIGITTE: Nothing. Nothing at all.
34 D HORATIO: Because if there's something you'd like to share with the group...
35 D BRIGITTE: I'd like to share that I've been here six years and I still don't know what we do.
* 36 A ¶ Nobody laughs.
37 A Reggie's grin falters.
38 A Dez takes his headphones from around his neck and puts them on.
39 A Cordelia sets her coffee down on the desk with a click.
40 D CORDELIA: We process claims.
41 D BRIGITTE: Which claims?
42 D CORDELIA: Claims.
43 D HORATIO: Let's not go off-topic.
44 D REGGIE: I sell the claims. I think.
45 D DEZ (removing one earphone): You sell the claims? To whom?
46 D REGGIE: To people who have claims.
47 D DEZ: People with claims don't need to buy claims.
48 D REGGIE: Dez, buddy, you don't understand sales.
49 D DEZ: I understand there's no product.
50 A ¶ A new figure appears at the end of the aisle.
51 A A tall man in an immaculate grey suit, hair slicked back, folder under one arm.
52 A MR. BARNABY CRANSTON-LEE (50s, regional VP, eyes like glass).
53 A The room freezes.
54 D CRANSTON-LEE: Don't stop on my account.
55 D HORATIO: Mr. Cranston-Lee! We didn't expect you.
56 D CRANSTON-LEE: That is the point of the visit.
57 A ¶ He walks down the aisle.
* 58 A His shoes click.
59 A He stops by Cordelia's desk and picks up her coffee.
60 A Sniffs.
61 A Sets it down.
62 D CRANSTON-LEE [CONT'D]: Lukewarm.
63 D CORDELIA: It's been a long morning.
64 D CRANSTON-LEE: Of course it has.
65 A ¶ He opens the folder.
66 A Takes out a single sheet of paper.
67 A Holds it up.
68 D CRANSTON-LEE [CONT'D]: Twelve percent.
69 D REGGIE: We were just discussing...
70 D CRANSTON-LEE: I know what you were discussing. Brigitte. How many years?
71 D BRIGITTE: Six, sir.
72 D CRANSTON-LEE: Dez.
73 D DEZ: Four.
74 D CRANSTON-LEE: Cordelia.
75 D CORDELIA: Nine.
76 D CRANSTON-LEE: Reggie.
77 D REGGIE: Fifteen! Fifteen glorious years, sir!
78 D CRANSTON-LEE: Horatio.
79 D HORATIO (swallowing): Twenty-two.
80 D CRANSTON-LEE: Twenty-two years. And in that time, none of you has produced a single claim.
* 81 A ¶ The intercom crackles.
82 D INTERCOM [V.O.] (female, bright): Mandatory Fun Day will now begin!
83 A ¶ Cranston-Lee lowers the page.
84 A Looks around at five stricken faces.
85 A Then, to everyone's astonishment, he smiles.
86 D CRANSTON-LEE: Don't worry. Neither has anyone else. That's why the company's been so profitable.
87 D HORATIO: Sir?
88 D CRANSTON-LEE: Efficiencies, Horatio. I want twelve percent more nothing.
89 A ¶ He tucks the folder under his arm and strides out.
90 A Nobody breathes.
91 A Reggie, slowly, raises his paper cup.
92 D REGGIE: To nothing.
93 D DEZ: To nothing.
94 D CORDELIA: To nothing.
95 D BRIGITTE (muttering): Efficiency pizza.
96 T FADE OUT.

### SCENE s01270 | INT. DRAINED PUBLIC SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): DEZ OKAFOR, ROZ VANCE, TOBIAS KRELL
* 1 A ¶ Deep end.
* 2 A Cracked blue tile.
* 3 A Moonlight leaks through a broken skylight.
4 A ¶ DEZ OKAFOR, 40s, shaved head, sits on an upturned lifeguard chair.
* 5 A Duffel bag between his boots.
6 A ¶ ROZ VANCE, 30s, leather jacket, thumb on a revolver hammer.
7 A She stands over the drain.
8 D ROZ: You're late.
9 D DEZ: Traffic.
10 D ROZ: At two in the morning.
11 D DEZ: There was a parade.
12 D ROZ: For who?
13 D DEZ: Me. Confetti and everything. Count it.
14 D ROZ: You count it. I want to see your hands doing the counting.
15 D DEZ: My hands are fine. My hands have never been the problem.
16 D ROZ: Your mouth is the problem.
17 D DEZ: My mouth got us this pool. Free rent, no neighbours, a diving board for a lookout.
18 D ROZ: It smells like a wet dog died in a bleach factory.
19 D DEZ: That's the ambience. You pay extra for that.
20 D ROZ: I'm not paying extra for anything. I'm paying what we agreed.
21 D DEZ: Then count.
* 22 A ¶ Steel door CLANGS above.
* 23 A Boots on the ladder.
24 A ¶ TOBIAS KRELL, 50s, soaked raincoat, grey stubble, drops to the tile.
25 A Revolver out.
26 A Shaking.
27 D TOBIAS: Nobody move.
28 D ROZ: Tobias, put that down.
29 D DEZ: Who's Tobias?
30 D ROZ: My brother-in-law.
31 D TOBIAS: Ex.
32 D ROZ: Ex-brother-in-law. He drove.
33 D DEZ: You brought a driver to a deal?
34 D TOBIAS: I brought a gun to a deal!
35 D ROZ: You brought a gun that doesn't have bullets, Tobias.
36 D TOBIAS: ...How did you know that?
37 D ROZ: I took them out. Last Tuesday.
38 A ¶ Tobias lowers the gun.
39 A Laughs, thin and relieved.
40 A Sits on the tile.
41 D TOBIAS: Thank God. I thought I'd have to use it.
42 D DEZ: Count the money, Roz.

### SCENE s01271 | INT. BOMBED CATHEDRAL BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): IMRE HALASZ, TEODORO BASCO, LI WEI, AGNES FARQUHAR, RINGS
* 1 A ¶ Stone stairs spiral up into smoke.
* 2 A A great bronze bell hangs cracked.
* 3 A Slit windows.
* 4 A Dust falls like snow.
5 A ¶ SGT. IMRE HALASZ, 40s, grey in his beard, crouches at a slit window.
6 A Rifle braced.
* 7 A ¶ CPL.
8 A TEODORO BASCO, 20s, wiry, kneels beside a field radio.
9 A Headset crooked.
* 10 A ¶ PVT.
11 A LI WEI, 19, round glasses taped at the hinge, sits against the wall.
12 A Hugging his helmet.
13 A ¶ He stares at nothing.
14 A ¶ LT. AGNES FARQUHAR, 30s, mud to the knees, climbs into the room.
15 A Pistol out.
16 A Breathing hard.
17 A ¶ She drops beside the sergeant.
18 D FARQUHAR: Report.
19 D HALASZ: Two tanks at the bridge. Infantry behind them.
20 D BASCO: Command says hold.
21 D FARQUHAR: Hold what?
22 D BASCO: The tower, ma'am.
23 D FARQUHAR: We're in the tower.
24 D BASCO: That's what I told them.
25 D HALASZ: They've seen us. Light on the bell.
26 A ¶ He points.
* 27 A A glint on the bronze.
28 D FARQUHAR: Cover it.
29 D LI: With what?
30 D FARQUHAR: Your jacket.
31 A ¶ He doesn't move.
32 D HALASZ: Li.
33 D LI: Yes, Sergeant.
34 D HALASZ: Jacket.
35 A ¶ He peels it off.
36 A Climbs the bell frame.
37 A Drapes it over the metal.
38 A Hands shaking.
* 39 A ¶ A distant WHUMP.
40 D BASCO: Incoming!
41 A ¶ All four drop.
* 42 A ¶ The wall SHUDDERS.
* 43 A Plaster rains.
44 D FARQUHAR: Where?
45 D HALASZ: Short. Nave.
46 D BASCO: Sergeant, they're ranging us.
47 D LI: They're ranging us. They're ranging us.
48 D FARQUHAR: Private!
49 D LI: I'm fine.
50 D HALASZ: He's not fine.
51 D FARQUHAR: Nobody's fine. Basco, get me the battery.
52 D BASCO: Radio's dead on the artillery net.
53 D FARQUHAR: Then use the infantry net.
54 D BASCO: They don't answer.
55 D HALASZ: Because they're running.
56 A ¶ He turns back to the slit.
57 D HALASZ [CONT'D]: Infantry's on the bridge. Fifty metres.
58 D FARQUHAR: Count?
59 D HALASZ: Thirty. Forty.
60 D LI: We have nine magazines.
61 D BASCO: Eight. I gave one to the medic.
62 D LI: The medic's dead.
* 63 A ¶ Silence.
64 A Basco looks at him.
65 A Then away.
* 66 A ¶ Another WHUMP.
* 67 A Closer.
* 68 A ¶ The bell RINGS, one flat note.
* 69 A Dust pours from the vault.
70 D FARQUHAR: Down. Everyone down!
71 A ¶ She grabs Li by the collar.
72 A Hauls him flat.
73 A ¶ He grips her sleeve.
74 D LI: Lieutenant, I can't.
75 D FARQUHAR: You can.
76 D LI: I can't.
77 D HALASZ: Li. Look at me.
78 A ¶ He does.
79 D HALASZ [CONT'D]: Forty men on that bridge. Four of us up here. You know what that makes us?
80 D LI: Dead.
81 D HALASZ: Inconvenient.
* 82 A ¶ A breath.
* 83 A Something almost like a laugh.
84 A ¶ Basco slams the radio.
85 D BASCO: Got them! Got somebody!
86 D FARQUHAR: Who?
87 D BASCO: Don't know. Sounds like cavalry.
88 D HALASZ: We don't have cavalry.
89 D BASCO: Then it's somebody's cousin.
* 90 A ¶ The third shell lands.
* 91 A Direct hit on the stair below.
* 92 A The floor LURCHES.
93 A ¶ They scramble.
* 94 A Rifles up.
* 95 A Faces white with plaster.
96 D FARQUHAR: Positions.
97 A ¶ He crawls to the slit.
98 A She takes the east window.
99 A Basco kneels, radio in one fist, rifle in the other.
100 A ¶ Li lifts his rifle.
101 A Steadies it on the sill.
102 D LI: Sergeant?
103 D HALASZ: Yes?
104 D LI: When it starts, don't let me stop.
105 D HALASZ: I won't.
* 106 A ¶ The bell hums.
* 107 A Beyond it, boots on the bridge.
108 D HALASZ [CONT'D]: Wait for it.

### SCENE s01272 | EXT. SCHOOL BUS GRAVEYARD - DUSK
Detected names (may be incomplete or contain aliases): PAKS, NAIR, WYATT BOONE, LUCIA ORTEGA
* 1 A ¶ Forty yellow buses rust nose to tail in a field of dead sunflowers.
* 2 A Windows gone.
* 3 A Seats full of weeds.
4 A ¶ PRAKASH "PAKS" NAIR, 16, lanky, glasses, stands on a bus roof with a stolen six-pack.
5 A ¶ WYATT BOONE, 17, buzzcut, football jacket, climbs up after him.
6 A He grins too hard.
7 A ¶ Below, LUCIA ORTEGA, 16, braids, sketchbook under her arm, watches them both.
8 D WYATT: Thought you'd chicken out.
9 D PAKS: So did I.
10 A ¶ Wyatt snatches a can.
11 A Paks grabs it back.
12 A They shove.
* 13 A The roof BOOMS under their boots.
14 A ¶ Both freeze.
* 15 A ¶ A siren, far off.
* 16 A Coming closer.
17 D LUCIA: Cops!
18 A ¶ Wyatt and Paks scramble, tumble down the rear emergency door.
19 A Lucia is already running.
* 20 A Cans spill in the dust.
21 A ¶ They hit the sunflowers, all three, laughing like idiots.

### SCENE s01273 | INT. FUNERAL HOME EMBALMING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS PRUITT, MARGUERITE DUBOIS, KENJI SAITO, ABIGAIL TRENT, SEUN, ADEBAYO, REVEREND CALDER MOSS, BODY
* 1 A ¶ White tile.
* 2 A Steel table.
* 3 A A single fluorescent tube hums over a sheeted body.
* 4 A The wall clock reads 3:12.
5 A ¶ HOLLIS PRUITT, 50s, the funeral director, stands at the table in a rubber apron.
6 A He is calm.
7 A He has done this thousands of times.
8 A ¶ MARGUERITE DUBOIS, 30s, his apprentice, holds a clipboard.
9 A She watches the sheet.
10 A ¶ KENJI SAITO, 40s, the night janitor, mops the corner.
11 A He keeps his eyes on the floor.
12 A ¶ ABIGAIL TRENT, 60s, the widow, sits on a folding chair by the door.
13 A A black purse in her lap.
14 A ¶ OLUWASEUN "SEUN" ADEBAYO, 20s, her grandson, leans on the wall beside her.
15 A Arms crossed.
16 A ¶ REVEREND CALDER MOSS, 70s, stands in the doorway, Bible pressed to his chest.
17 D MARGUERITE: Mrs. Trent, you really shouldn't be in here.
18 D ABIGAIL: I want to see him.
19 D HOLLIS: He isn't ready, ma'am.
20 D ABIGAIL: I said I want to see him.
21 A ¶ Hollis glances at the Reverend.
22 A The Reverend nods.
23 A Hollis lifts the sheet to the chin.
24 A ¶ The face is grey.
25 A Peaceful.
26 A She leans in and touches his cheek.
27 A ¶ The finger comes away wet.
28 D ABIGAIL [CONT'D]: He's warm.
29 D HOLLIS: That's the lights, Mrs. Trent.
30 D SEUN: Grandma, come on.
31 A ¶ She doesn't move.
32 A Kenji's mop stops.
33 A ¶ The body's chest rises.
34 A ¶ Marguerite drops the clipboard.
* 35 A It CLATTERS across the tile.
36 D MARGUERITE: Did you see that?
37 D HOLLIS: Nobody breathe.
38 A ¶ They don't.
* 39 A The fluorescent tube FLICKERS.
40 A ¶ The chest rises again.
41 A Slowly.
* 42 A The sheet slides off the shoulder.
43 A ¶ The Reverend begins to pray, fast, under his breath.
44 A Seun backs into the wall.
45 A Kenji drops the mop and edges toward the door.
46 A ¶ Hollis presses two fingers to the neck.
47 A His face goes blank.
48 A He pulls back.
49 D HOLLIS [CONT'D]: No pulse.
50 D MARGUERITE: Then what's moving?
51 A ¶ The mouth opens.
52 A A long, wet exhale.
53 A Then a whisper, dry as paper.
54 D BODY [O.S.]: Abigail.
55 A ¶ She stands.
* 56 A The purse falls.
57 A She is smiling.
58 D ABIGAIL: Walter.
59 D SEUN: Grandma, don't.
* 60 A ¶ The lights die.
* 61 A Total dark.
* 62 A Footsteps.
* 63 A A scrape of metal.
* 64 A ¶ Light snaps back.
* 65 A The table is empty.
* 66 A The sheet lies folded at the foot.
67 A ¶ Kenji laughs, high and cracked.
68 A Hollis grabs him by the shoulder.
69 A He stops.
70 A ¶ The Reverend lowers his Bible.
71 A Marguerite is staring at the wet footprints that lead across the tile to the open back door.
72 A ¶ Abigail is gone.
73 A Seun runs after her into the night.

### SCENE s01274 | INT. ICE CAVE - DAY
Detected names (may be incomplete or contain aliases): HANNELORE KAST, BJORN STAAL, OTIENO MWANGI, PRIYA RAMAKRISHNAN, TOMASZ WIERZBA
* 1 A ¶ Blue walls.
* 2 A A low ceiling of glacier.
* 3 A Meltwater drips into a black pool.
4 A ¶ HANNELORE KAST, 50s, expedition leader, frostbitten nose, sits by a dying camp stove.
5 A She wears three jackets.
6 A ¶ BJORN STAAL, 30s, burly, one arm in a makeshift sling, leans on the wall beside her.
7 A ¶ OTIENO MWANGI, 20s, climber, sleeps with his head on his pack.
8 A ¶ PRIYA RAMAKRISHNAN, 40s, doctor, kneels over a med kit.
9 A She counts bandages.
10 A ¶ TOMASZ WIERZBA, 60s, the oldest of them, grey beard crusted with ice, stares at the cave mouth.
11 D HANNELORE: Weather window?
12 D TOMASZ: Closing. The wind has turned.
13 D HANNELORE: How long?
14 D TOMASZ: Two hours. Maybe three.
15 D BJORN: Enough to walk out?
16 D TOMASZ: Enough to walk out if you are young and have two arms.
17 D BJORN: I have one and a half.
18 D PRIYA: You have one and a fracture. Stay put.
19 D HANNELORE: We stay together. We always said that.
20 D TOMASZ: We said many things in the base camp.
21 D HANNELORE: Tomasz.
22 D TOMASZ: I am old, Hanne. I have seen this mountain take better people than us. But it does not like to be stared at. If we leave now, it lets us go.
23 D PRIYA: And Otieno?
24 D TOMASZ: He can walk. Wake him gently.
25 D BJORN: What about the sled?
26 D PRIYA: I will pull the sled.
27 D BJORN: You're half my size.
28 D PRIYA: I am twice your sense.
29 D HANNELORE: Enough. Pack. Everything useful, nothing sentimental.
* 30 A ¶ A distant THRUM.
* 31 A Rotors.
32 A ¶ They all look up.

### SCENE s01275 | INT. BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): LEAGUE FINALS, COACH DELPHINE MARCHAND, GRETA LINDQVIST, RUBEN ACOSTA
* 1 A ¶ Neon pins.
* 2 A A banner: LEAGUE FINALS - SPARE ME LANES.
* 3 A Most of the crowd has gone home.
* 4 A Lane 12 is lit.
5 A ¶ COACH DELPHINE MARCHAND, 50s, silver bob, orange cardigan, sits with a clipboard on her knee.
6 A ¶ GRETA LINDQVIST, 30s, anchor bowler, towels her hands.
7 A Her shoulders are rounded in defeat.
8 A ¶ RUBEN ACOSTA, 20s, rookie, sits on the ball return with his shoes untied.
9 D DELPHINE: Tenth frame. You left the seven-ten.
10 D GRETA: I know what I left.
11 D RUBEN: It was a hard split.
12 D DELPHINE: It was the hardest split.
13 D GRETA: I shouldn't have gone for it.
14 D DELPHINE: You went for it because it was there.
15 D RUBEN: She was winning on pins, Coach.
16 D GRETA: Don't defend me.
17 D DELPHINE: Ruben, let her talk.
18 D RUBEN: I'm just saying.
19 D GRETA: Eleven years I've been bowling with this team. Eleven.
20 D DELPHINE: Twelve.
21 D GRETA: Twelve. And in twelve years we've never won the final. Not once. And I stood up there tonight and I thought, this is it, this is the one.
22 D RUBEN: You were incredible in the eighth.
23 D GRETA: I was incredible in the eighth. I was terrible in the tenth. That's the whole story.
24 D DELPHINE: It isn't the whole story.
25 D GRETA: It's the only part they'll remember.
26 D DELPHINE: Greta.
27 D GRETA: Delphine, please. I need to say this without you being kind to me.
28 D DELPHINE: All right.
29 D GRETA: I'm thirty-four. My wrist hurts when it rains. My daughter wants me to quit and take her to the lake.
30 D RUBEN: Don't quit.
31 D GRETA: Ruben, you've been here six months.
32 D RUBEN: Don't quit.
33 D DELPHINE: He's right. Stay.
34 D GRETA: You want me to stay because you have no one else.
35 D DELPHINE: I want you to stay because you are the best bowler I've ever coached, and I've coached some very good ones.
36 D RUBEN: She really is.
37 D GRETA: Neither of you is helping.
38 D DELPHINE: We aren't trying to help. We're trying to tell you the truth.
39 D RUBEN: What's the truth?
40 D DELPHINE: The truth is that nobody wins the seven-ten.
41 D GRETA: Somebody has to.
42 D DELPHINE: Somebody has, twice, in the history of the sport. And both of them cried afterward.
43 D RUBEN: Why?
44 D DELPHINE: Because it doesn't feel like winning. It feels like surviving.
45 D GRETA: Is that what this is? Surviving?
46 D DELPHINE: Twelve years, Greta. You're still standing.
47 D RUBEN: I'll buy the nachos.
48 D GRETA: You don't have to buy the nachos.
49 D RUBEN: I'm buying the nachos.
50 D DELPHINE: Get extra cheese.
51 D GRETA: And jalapenos.
52 D RUBEN: That I can do.
53 D DELPHINE: And next season?
54 D GRETA: Next season we try again.
55 D DELPHINE: That's all I wanted to hear.
56 D GRETA: Don't gloat.
57 D DELPHINE: I'm not gloating. I'm planning.
58 D RUBEN: Planning what?
59 D DELPHINE: Everything. Starting with how to teach a rookie to tie his shoes.
60 D RUBEN: I know how to tie my shoes!
61 D GRETA: Then do it.
62 A ¶ He looks down.
* 63 A The laces are knotted together.
64 A He groans.
65 A They laugh.
* 66 A First time all night.

### SCENE s01276 | INT. PULLMAN DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS WHITCOMB, HORTENSE BELLWEATHER, SAUL RIVLIN, MISS CORDELIA PYE, AUGUSTUS FLOYD
* 1 A ¶ 1927.
* 2 A Snow hammers the windows.
* 3 A The train has stood motionless for nine hours.
* 4 A Brass lamps, white linen, a chandelier that sways in the wind.
5 A ¶ ELIAS WHITCOMB, 60s, banker, silver mustache, sits stiffly at the head table.
6 A A glass of brandy untouched before him.
7 A ¶ HORTENSE BELLWEATHER, 50s, in black bombazine and pearls, knits a long grey scarf.
8 A ¶ DR. SAUL RIVLIN, 40s, rumpled tweed, smokes a pipe by the window.
9 A ¶ MISS CORDELIA PYE, 20s, a schoolteacher in a modest blue frock, sits with a book she isn't reading.
10 A ¶ AUGUSTUS FLOYD, 50s, the porter, stands by the pantry door with a silver coffee pot.
11 D FLOYD: Coffee, ladies and gentlemen?
12 D WHITCOMB: Nine hours, porter. When do we move?
13 D FLOYD: Conductor says dawn, sir.
14 D WHITCOMB: Conductor said midnight.
15 D HORTENSE (muttering): Conductors say a great many things.
16 D CORDELIA: Mrs. Bellweather, I think it's very cozy.
17 D HORTENSE: Cozy is a word for people who have never missed a funeral.
18 D RIVLIN: Is it your funeral, madam?
19 D HORTENSE: My sister's. Tomorrow at noon. In Chicago.
* 20 A ¶ Silence.
* 21 A The chandelier creaks.
22 D WHITCOMB: Floyd, bring me a telegraph form.
23 D FLOYD: The wires are down, sir.
24 D WHITCOMB: Then bring me a pencil and I shall write a letter to the president of this railroad.
25 D RIVLIN: And how shall it be delivered, Mr. Whitcomb?
26 D WHITCOMB: By a man with a sled and a sense of duty.
27 D RIVLIN: There isn't one.
28 D WHITCOMB (to himself): There never is.
29 D HORTENSE: Mr. Whitcomb, if you complain once more I shall put this scarf round your neck and pull.
30 D WHITCOMB: I beg your pardon!
31 D HORTENSE: You heard me.
32 D CORDELIA: Please. Please, both of you. It's only snow.
33 A ¶ Whitcomb rises.
* 34 A Chair SCRAPES.
35 D WHITCOMB: Only snow! My daughter weds in Chicago tomorrow. I have not missed a day of work in thirty years. I have never been late for anything.
36 D HORTENSE: And I have never been early for anything. Sit down.
37 D WHITCOMB: I shall not sit down!
38 D RIVLIN: He's shouting at the weather, Mrs. Bellweather. Let him.
39 D WHITCOMB: I am shouting at you, Doctor! You, with your pipe and your sneer.
40 D RIVLIN: I sneer only at men who deserve it.
41 D WHITCOMB: Deserve it!
42 D HORTENSE: Deserve it, indeed.
43 D WHITCOMB: Deserve it? I built half the railroad this train runs on!
44 D HORTENSE: Then you built it badly.
45 D FLOYD: Sir, ma'am, please. The other passengers.
46 D WHITCOMB: What other passengers? We are four, and a porter!
47 D HORTENSE: Five, Mr. Whitcomb, if you count the dignity you've misplaced.
48 D WHITCOMB (to the room): I will not be insulted by a knitting widow.
49 D RIVLIN: She's not a widow. She's a sister in mourning.
50 D HORTENSE: I thank you, Doctor.
51 A ¶ Whitcomb slams his hand on the table.
* 52 A The brandy topples.
* 53 A Amber spreads across the white linen.
* 54 A ¶ The room freezes.
* 55 A Even the wind seems to hold its breath.
56 D CORDELIA (softly): Mr. Whitcomb. You're shaking.
57 A ¶ He looks at his hand.
58 A Then at the stain.
59 A The anger drains.
60 D WHITCOMB: My wife died on a train.
* 61 A ¶ No one speaks.
62 A Floyd sets the coffee pot down, very gently.
63 D WHITCOMB [CONT'D]: Thirty years ago. In the snow.
64 D HORTENSE: I did not know.
65 D WHITCOMB: No one does.
66 A ¶ Hortense sets down her knitting.
67 A She reaches across the table and lays the unfinished scarf in front of him.
68 D HORTENSE: Then it's yours. It will be cold in Chicago.

### SCENE s01277 | INT. 24-HOUR LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS MENDEZ, KAI MENDEZ-HART
* 1 A ¶ 3 A.M. Fluorescent hum.
* 2 A Rows of dryers tumble sneakers and sheets.
* 3 A A TV bolted to the wall plays a silent infomercial.
4 A ¶ ODALYS MENDEZ, 60s, small, upright, folds towels with ruthless precision.
5 A Her cardigan is buttoned wrong.
6 A ¶ KAI MENDEZ-HART, 19, her grandson, slumps on a plastic chair, duffel bag at his feet.
7 A Hood up.
8 D ODALYS: You could help.
9 D KAI: I'm tired, Abuela.
10 D ODALYS: You are nineteen. Tired is for people with mortgages.
11 D KAI: I drove six hours.
12 D ODALYS: I did not ask you to drive six hours.
13 D KAI: You called me.
14 D ODALYS: I called you at noon. To say hello.
15 D KAI: You called at midnight. You said the dryer was making a noise.
16 D ODALYS: It was making a noise.
17 D KAI: Abuela, you don't have a dryer. You live in a retirement home.
18 D ODALYS: The retirement home has a dryer. It makes a noise.
19 D KAI: Then call maintenance.
20 D ODALYS: Maintenance does not come at midnight.
21 D KAI: Neither do I.
22 D ODALYS: And yet.
23 A ¶ Kai pulls his hood back.
24 A Rubs his face.
25 D KAI: Okay. Okay. What's going on?
26 D ODALYS: Nothing is going on.
27 D KAI: You're folding other people's towels.
28 D ODALYS: Someone left them. It is a waste.
29 D KAI: Abuela.
30 D ODALYS: I could not sleep.
31 D KAI: Why couldn't you sleep?
32 D ODALYS: Why do young people ask why? I could not sleep. That is a complete sentence.
33 D KAI: Is it Mom?
34 A ¶ Odalys folds a towel.
35 A Then another.
36 A She doesn't answer.
37 D KAI [CONT'D]: Did she call?
38 D ODALYS: She called.
39 D KAI: And?
40 D ODALYS: She says she is moving to Portland.
41 D KAI: She's been saying that for four years.
42 D ODALYS: This time she has a lease.
43 D KAI: Oh.
44 D ODALYS: Yes. Oh.
45 D KAI: Did she say anything about me?
46 D ODALYS: She said you are welcome.
47 D KAI: Welcome to what?
48 D ODALYS: To come. To Portland. To live there. She says there is a room.
49 D KAI: There's always a room, Abuela. Then there isn't.
50 D ODALYS: That is your mother.
51 D KAI: That is my mother.
* 52 A ¶ A dryer BUZZES.
53 A Neither moves.
54 D ODALYS: Do you want to go?
55 D KAI: To Portland?
56 D ODALYS: To Portland.
57 D KAI: I don't know. I have school. I have a job.
58 D ODALYS: You have a job at a pizza place.
59 D KAI: It's a good pizza place.
60 D ODALYS: It is a very good pizza place. I have eaten the pizza.
61 D KAI: Then you know.
62 D ODALYS: I know that you are afraid.
63 D KAI: I'm not afraid.
64 D ODALYS: You are nineteen and your mother is leaving again. Of course you are afraid.
65 D KAI: You're not.
66 D ODALYS: I am eighty years old. I have no time left to be afraid. It is a luxury.
67 D KAI: You're sixty-eight.
68 D ODALYS: Eighty in my heart.
69 D KAI: That's not how that works.
70 D ODALYS: In my house it is exactly how it works.
71 D KAI: Your house is a retirement home.
72 D ODALYS: In my heart it is a house.
73 A ¶ He laughs.
74 A Wet, surprised.
75 A She smiles, small, and doesn't look at him.
76 D KAI: Why are we here, Abuela?
77 D ODALYS: Because the machines are warm.
78 D KAI: That's it?
79 D ODALYS: That is it. It is three in the morning. Everywhere else is cold.
80 D KAI: Okay.
81 D ODALYS: Okay.
82 D KAI: Can I help fold?
83 D ODALYS: Finally.
84 D KAI: Show me.
85 D ODALYS: Thirds. Then thirds again. You do not crush them. You are making a promise.
86 D KAI: A promise?
87 D ODALYS: That someone will be warm tomorrow.
88 A ¶ Kai picks up a towel.
89 A She hands him another.
90 A They fold in silence.
91 D KAI: Like this?
92 D ODALYS: Closer.
93 D KAI: Like this?
94 D ODALYS: Yes. Like that.
95 D KAI: You're gonna be okay, right?
96 D ODALYS: Mijo. I have always been okay. It is the rest of you I worry about.
* 97 A ¶ The dryer BUZZES again.
98 A She nods at it.
99 D ODALYS [CONT'D]: That one is done.
100 D KAI: I'll get it.
101 A ¶ He does.

### SCENE s01278 | INT. FERRY TICKET BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): ODETTE ARMSTRONG
* 1 A ¶ A glass box at the end of a pier.
* 2 A A single brass lamp.
* 3 A Rain slides down the windows.
* 4 A Outside, the last ferry's lights shrink into fog.
5 A ¶ ODETTE ARMSTRONG, 60s, uniform cap, spectacles on a chain, sits at a worn desk.
* 6 A Before her: a cassette recorder, the kind with piano keys.
* 7 A A thermos.
8 A ¶ She presses PLAY.
9 D ODETTE [V.O.] (recorded, younger, warm): Testing. Testing. This is Odette Armstrong, ticket agent, Pier Nine. If you're hearing this, I've either retired or I've lost my mind.
10 A ¶ She smiles.
11 A Stops the tape.
12 A Rewinds a little.
13 A Plays again.
14 D ODETTE [V.O., CONT'D] (recorded): Thirty years on this pier. I want to record what I remember. The first fare I ever sold was a dollar twenty.
15 A ¶ She pours tea.
16 A Her hand trembles slightly.
17 D ODETTE [V.O., CONT'D] (recorded): The worst winter was '88. The ice stopped everything. I slept in this booth for three nights. I was happier than I'd ever been.
18 A ¶ She stops the tape.
19 D ODETTE (to herself): Happier.
20 A ¶ She looks at the empty pier.
* 21 A At the dark water.
22 A ¶ She presses PLAY.
23 D ODETTE [V.O., CONT'D] (recorded): If I could tell the person listening one thing, it would be this. Don't wait for the boat. The boat always leaves.
* 24 A ¶ The thermos lid falls.
* 25 A Rolls across the floor.
26 A She doesn't pick it up.
27 D ODETTE [V.O., CONT'D] (recorded): Go to the pier before the boat. Go to the sea before the pier.
28 A ¶ Her jaw tightens.
29 A She stabs the STOP key.
* 30 A The click echoes.
31 A ¶ She stands.
32 A Pulls the uniform cap from her head.
33 A Looks at it.
34 D ODETTE: Thirty years.
35 A ¶ She hurls the cap against the glass.
* 36 A It bounces off.
* 37 A Falls.
38 A ¶ She tears the cassette from the machine, raises it to smash it, and stops.
39 A Her chest heaves.
40 A ¶ Slowly, she slides it into her breast pocket.
41 A Picks up the cap.
42 A Sets it on the desk.
43 A ¶ She switches off the lamp.
* 44 A Dark.
* 45 A Rain.
46 D ODETTE [CONT'D]: Go to the sea.
47 A ¶ She pushes open the door.
* 48 A Fog pours in.
49 A She steps out onto the pier.

### SCENE s01279 | EXT. SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): BEA, LONGSTREET, MANNY, CRUZ, SIGRID OLSEN, DARIUS KHAN, PERRY, NDLOVU
* 1 A ¶ A white plain to the horizon, cracked in hexagons, shimmering with mirage.
* 2 A In the middle stands a dead jeep, hood up, its shadow a small black pool.
3 A ¶ BEATRIX "BEA" LONGSTREET, 40s, a geologist with a sunburnt nose and a scarf wound over her hair, stands on the jeep's bumper, scanning the horizon with binoculars.
4 A ¶ MANUEL "MANNY" CRUZ, 30s, the driver, sits in the shade of the open door, a dry canteen upturned in his hand.
5 A ¶ SIGRID OLSEN, 20s, a graduate student, lies on the flat, hat over her face.
6 A Her lips are cracked white.
7 A ¶ DARIUS KHAN, 50s, a photographer, trudges back from the dune with a camera bag over each shoulder, as though weight alone could anchor him.
8 A ¶ At the edge of the shade, PERPETUA "PERRY" NDLOVU, 70s, the guide, sits cross-legged on a folded blanket.
9 A She hums.
10 D BEA: Nothing. Not a cloud, not a bird.
11 D MANNY: Told you, Bea. Radiator's cooked.
12 D DARIUS: Manny, you said it was fine.
13 D MANNY: I said it was probably fine.
14 D DARIUS (muttering): Probably.
15 A ¶ Sigrid lifts the hat.
16 D SIGRID: How long since the last water?
17 D BEA: Two hours.
18 D SIGRID: How long can we last?
19 D PERRY: Three days, child. Maybe four if we stop quarrelling.
20 D DARIUS: Perry, with respect, we've been out here since dawn.
21 D PERRY: And we shall be here until someone comes. Sit, Darius. You waste your sweat.
22 D MANNY: He wastes my patience.
23 D DARIUS: I waste nothing!
24 D BEA: Stop. Both of you.
25 D SIGRID: I think I saw something.
26 A ¶ Everyone turns.
27 A She points.
* 28 A A glint, east, wavering.
29 D BEA: Where?
30 D SIGRID: There, Bea! Past the dunes!
31 D DARIUS: Mirage, Sigrid.
32 D PERRY: Mirage, child.
33 D MANNY: It moves.
34 D BEA: It's moving toward us.
* 35 A ¶ Beat.
* 36 A A faint DRONE.
* 37 A Not an engine.
* 38 A Wind in the flats.
39 D SIGRID: It's a truck. It has to be a truck.
40 D DARIUS: It's a mirage, Sigrid. It's heat on salt.
41 D PERRY: Sigrid. Hand me the binoculars.
42 A ¶ She does.
43 A Perry lifts them, calm.
44 A Everyone watches her face.
45 D PERRY [CONT'D]: It is a man on a camel.
46 D MANNY: A camel?
47 D PERRY: He is very slow.
48 D BEA: Perry, how long?
49 D PERRY: Until he is here? Perhaps one hour. Perhaps never. The camel is thinking.
50 A ¶ Laughter, cracked.
51 A Darius sits.
52 A Sigrid wipes her eyes.
53 A Manny drops the canteen and covers his face.
54 D BEA: Okay. Okay. We wait.
55 D MANNY: We wait.
56 D DARIUS: We wait.
57 D PERRY (softly): We wait.
* 58 A ¶ The shape on the horizon grows.
* 59 A Slowly.
60 A A man.
* 61 A An animal.
* 62 A A long shadow across the white.

### SCENE s01280 | INT. SPIRAL STAIRWELL INSIDE A GIANT TORTOISE SHELL - NIGHT
Detected names (may be incomplete or contain aliases): ISOLDE VARN, BRANWEN TOLL, CADOC, PIP MARROW
* 1 A ¶ The stairs wind through bone the colour of old ivory.
* 2 A Lanterns of green fire hang from hooks.
* 3 A Somewhere above, a vast slow heartbeat.
* 4 A Every third beat, the walls tremble.
5 A ¶ ISOLDE VARN, 30s, in a ranger's grey cloak, climbs with one hand on the rail.
6 A A silver knife at her belt.
7 A She does not look back.
8 A ¶ BRANWEN TOLL, 60s, the lamp-keeper, follows, sleeves smelling of smoke.
9 A She carries the only key.
10 A ¶ CADOC, 20s, a boy with ink on his fingers and a satchel too big for him, stops to touch the wall.
* 11 A The bone warms under his palm.
12 A ¶ PIP MARROW, 40s, a tinker with a hundred small bells sewn into his coat, brings up the rear.
* 13 A Each step jingles.
14 A He keeps trying to quiet them.
15 D BRANWEN: Pip. The bells.
16 D PIP: I'm stuffing them, Mother Toll.
17 D BRANWEN: Stuff them harder.
* 18 A ¶ The heartbeat THUDS.
* 19 A Dust sifts from the ceiling.
20 A Everyone stops.
21 A Isolde's hand drifts to her knife.
22 D CADOC: Isolde, it knows we're here.
23 D ISOLDE: It always knew.
24 A ¶ She climbs.
25 A After a moment the others follow.
26 D CADOC: You said it was asleep.
27 D ISOLDE: I said it was old.
28 A ¶ She does not meet his eyes.
29 A She taps the rail twice, a habit, a prayer.
30 D BRANWEN (to the stair, under her breath): Steady, old girl. Steady.
31 D PIP: Who's she talking to?
32 D CADOC: The shell.
33 D PIP: Does it answer?
34 D CADOC: Sometimes.
35 A ¶ They reach a landing.
* 36 A A door of black wood, banded in iron.
37 A Isolde pauses.
38 A She holds out a hand without looking.
39 A Branwen puts the key in it.
* 40 A ¶ The key does not turn.
41 D ISOLDE: Cadoc.
42 D CADOC: Yes?
43 D ISOLDE: Your hands.
44 A ¶ He steps up.
45 A Presses his inky palm against the lock.
* 46 A The iron sighs.
* 47 A Bolts slide.
48 D BRANWEN: Everyone, stay behind the line.
49 A ¶ Pip shuffles back.
* 50 A A single bell chimes, high and clear.
* 51 A ¶ The heartbeat stops.
* 52 A ¶ Nobody breathes.
* 53 A A long moment.
* 54 A The lanterns gutter.
* 55 A ¶ Then, from beyond the door, a sound like a very large animal clearing its throat.
* 56 A Gentle.
* 57 A Almost polite.
58 D ISOLDE (to the door): We've come to ask a favour.
* 59 A ¶ The door swings open on warm dark.
* 60 A The scent of rain and old coins pours out.
61 A ¶ Isolde lowers her knife.
62 A Branwen lets out a breath she has held for forty years.
63 D CADOC: Isolde?
64 D ISOLDE: Go on.
65 A ¶ He goes first.

### SCENE s01281 | INT. NOTARY'S OFFICE - DAY
Detected names (may be incomplete or contain aliases): GLORIA TANAKA-REYES, LEONARD FITCH, ZEKE
* 1 A ¶ A cramped room above a dry cleaner.
* 2 A Steam pipes bang.
* 3 A A wall calendar shows a lighthouse.
* 4 A One desk, three chairs, a stack of papers between them.
5 A ¶ GLORIA TANAKA-REYES, 50s, in a navy suit, sits rigid, hands flat on the desk.
6 A ¶ LEONARD FITCH, 60s, the notary, adjusts his bow tie and squints at the will.
7 A ¶ EZEKIEL "ZEKE" TANAKA-REYES, 30s, her younger brother, slumps in the third chair, jiggling his knee.
8 D LEONARD: The house goes to the surviving child.
9 D GLORIA: There are two of us.
10 D LEONARD: The surviving child who occupied the house for the last five years.
11 D ZEKE: That's me.
12 D GLORIA: That's you because I was working.
13 D ZEKE (to Leonard): I was there when she fell.
14 D GLORIA (to the room): We were all there when she fell.
15 D ZEKE (under his breath): Not you.
16 D GLORIA: Say that again.
17 D LEONARD: Please. The language of the will is clear.
18 D GLORIA: Then read the clause about the debts.
19 D LEONARD: The debts also go to the occupant.
20 D ZEKE: Wait, what debts?
21 A ¶ Leonard slides a page across.
22 A Zeke stares at it.
23 A His knee stops.
24 D ZEKE [CONT'D] (to himself): Oh, Mama. What did you do.

### SCENE s01282 | INT. ORBITAL GREENHOUSE - ARTIFICIAL DAY
Detected names (may be incomplete or contain aliases): ANJALI VERMA, KOFI BAAH, LENKA HORVAT, SOLOMON ECK
* 1 A ¶ A long curved hall of racks and tubes.
* 2 A Green leaves in violet grow-light.
* 3 A Condensation beads on every pipe.
* 4 A Earth hangs in the viewport, small and blue.
5 A ¶ ANJALI VERMA, 50s, the commander, silver-haired, stands at the central console.
6 A Her coveralls are stained with soil.
7 A ¶ KOFI BAAH, 30s, botanist, kneels at a rack of wilted tomato vines.
8 A He holds a leaf up to the light.
9 A ¶ LENKA HORVAT, 40s, engineer, hangs upside-down from a ceiling rail.
* 10 A A toolkit floats beside her.
11 A ¶ SOLOMON ECK, 60s, the crew's cook, sits alone in the corner with a mug of tea, watching them.
* 12 A ¶ The ventilation fans RATTLE and slow.
* 13 A Then they stop.
14 D ANJALI: Status.
15 D LENKA: Fans three through seven are dead.
16 D KOFI: That's the whole east wing.
17 D ANJALI: Can you fix it?
18 D LENKA: Maybe. I need twenty minutes.
19 D SOLOMON (to no one): We don't have twenty minutes.
20 D ANJALI: Solomon?
21 D SOLOMON: Oxygen scrubbers. Ask me how I know.
22 A ¶ She does not.
23 A She taps the console.
* 24 A Red text flickers.
25 D ANJALI: Everyone, listen. We're going to move the plants to the west wing. One rack at a time. Kofi, you're lead.
26 D KOFI: Understood.
27 A ¶ He rises.
28 A He pulls a rack toward the hatch.
* 29 A It sticks.
30 A He braces his boot and heaves.
* 31 A It slides.
32 A ¶ Lenka drops from the rail, grabs the opposite side.
33 A Together they push.
34 A ¶ Solomon puts down his mug.
35 A He joins them without a word.
36 A ¶ Anjali watches them move.
37 A She exhales.
38 D ANJALI [CONT'D] (to herself): Thank God for stubborn people.
39 D LENKA: What was that?
40 D ANJALI: Nothing.
* 41 A ¶ The fans cough back to life.
* 42 A A low whir.
* 43 A Fresh air stirs the leaves.
44 D KOFI: Lenka?
45 D LENKA: I didn't touch anything.
46 D SOLOMON: Maybe it likes us.
47 D ANJALI: It's a greenhouse, Solomon.
48 D SOLOMON: So it's alive.
49 A ¶ She smiles.
50 A She shakes her head.
* 51 A The viewport blue glows over all four.

### SCENE s01283 | INT. CARGO SHIP SICK BAY - NIGHT
Detected names (may be incomplete or contain aliases): REUBEN ABARA, FELIX
* 1 A ¶ A steel cabin the size of a closet.
* 2 A A table bolted to the floor.
* 3 A Storm light flickers.
* 4 A The hull groans.
5 A ¶ DR. REUBEN ABARA, 40s, a ship's physician in a bloody apron, presses a pad to the wound in an unconscious sailor's side.
* 6 A The ship pitches.
* 7 A Instruments skid across the tray.
8 A He pins them with an elbow, clamps a vessel with his free hand, and wipes his brow on his shoulder.
* 9 A ¶ An intercom speaker crackles on the wall.
10 D FELIX [V.O.] (crackling): Sick bay, bridge. Doc, how is he?
11 A ¶ Reuben leans toward the speaker without lifting his hands.
12 D REUBEN: Bleeding. Lung's punctured. I need him on a ventilator and you've given me a bicycle pump.
13 D FELIX [V.O.]: Nearest port is eleven hours.
14 D REUBEN: He doesn't have eleven hours, Felix.
15 D FELIX [V.O.]: I know. I'm the second mate. I'm the one who found him.
* 16 A ¶ Static.
17 A Reuben reaches for a long needle and a loop of tubing.
* 18 A A wave slams the hull.
* 19 A The lamp swings.
20 A Reuben shields the wound with his body, then straightens, blood on his forearm, and steadies the table with his knee.
21 D REUBEN: Felix. Can you hold her steady?
22 D FELIX [V.O.]: She's a cargo ship in a gale. She'll do what she wants.
23 D REUBEN: Then pray.
24 D FELIX [V.O.]: Doc, I haven't prayed since '09.
25 D REUBEN: Start.
26 A ¶ He slides the needle between the ribs.
* 27 A A wet hiss of air.
28 A Colour floods the sailor's face.
29 A He breathes, deep and even.
30 D FELIX [V.O.]: Doc? Doc, I heard that. Is he...
31 D REUBEN: He's breathing.
* 32 A ¶ A long silence on the line.
33 A Then, thin and cracked, a laugh.
34 D FELIX [V.O.]: Good. Good. I'll tell the captain.
35 A ¶ Reuben slumps against the bulkhead.
36 A Slides down it until he sits on the deck, hands loose between his knees, blood drying on his cuffs.
37 D REUBEN (to himself): Eleven hours.
38 D FELIX [V.O.]: Doc?
39 D REUBEN: Nothing. Keep her steady, Felix.

### SCENE s01284 | INT. NATURAL HISTORY MUSEUM - TAXIDERMY HALL - NIGHT
Detected names (may be incomplete or contain aliases): NIGHT GUARD, WOMAN, BARNABY
* 1 A ¶ Glass cases.
* 2 A A stuffed polar bear rears in the centre.
* 3 A Glass eyes catch the exit-sign glow.
4 A ¶ A NIGHT GUARD, 60s, soft belly, thermos in hand, shuffles down the aisle.
5 A He pauses at the bear.
6 A Pats its paw.
7 D NIGHT GUARD: Evening, Boris.
* 8 A ¶ A creak behind him.
9 A He turns.
10 A ¶ A WOMAN in a grey coat stands between two cases.
11 A Calm.
12 A Hands in pockets.
13 D NIGHT GUARD [CONT'D]: Ma'am. We're closed.
14 D WOMAN: I know.
15 D NIGHT GUARD: Then how did you...
16 D WOMAN: You let me in. At six. When I said I'd left my glasses.
17 A ¶ He frowns.
18 A Looks at the bear.
19 A Looks back.
20 D NIGHT GUARD: Right. Right, I remember. Thought you'd gone.
21 D WOMAN: I thought you'd gone.
22 A ¶ She smiles.
23 A Steps closer.
24 A He sips from the thermos.
25 A His shoulders loosen.
26 D NIGHT GUARD: Well. Take your time. Find 'em?
27 D WOMAN: Not yet.
28 A ¶ She walks past him, trailing a hand along the glass.
29 A Stops at the bear.
30 A Reaches into its open jaw.
31 A Withdraws a small silver key.
32 D NIGHT GUARD: Hey. What's that?
33 A ¶ The Woman turns.
34 A Her smile is gone.
35 D WOMAN: Barnaby. Sit down.
36 A ¶ He sits, heavily, on the bench.
37 D BARNABY: How do you know my name?
38 D WOMAN: You told me at six.
39 D BARNABY: I didn't.
40 D WOMAN: You wouldn't remember. It was in the tea.
41 D BARNABY: Who are you?
42 D WOMAN: Nell.
43 A ¶ Barnaby's thermos slides from his hand.
* 44 A Hits the floor.
45 A Nell steps over it.
* 46 A The bear's eyes gleam.
