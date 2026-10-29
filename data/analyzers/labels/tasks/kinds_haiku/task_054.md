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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0154.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01862 | INT. TRAIN COMPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, CLAUDINE, REYNARD
* 1 A ¶ A first-class compartment, 1938.
* 2 A Plush seats, brass fittings, a lamp with a fringed shade.
* 3 A The wheels beat out a steady rhythm.
4 A ¶ A young woman in a dark traveling suit sits very straight with a small suitcase on her knees.
5 A Across from her, a man in his forties in a gray overcoat sits behind a newspaper, the paper lowering by degrees.
6 D STRANGER: Forgive me. You're traveling alone?
7 D CLAUDINE: I am.
8 D STRANGER: A long way to go alone.
9 D CLAUDINE: I have been going a long way for some time.
10 A ¶ He folds the newspaper and sets it aside.
11 A She keeps her hands on the suitcase.
12 D STRANGER: You'll pardon an old man's curiosity. Your gloves. They're a man's.
13 D CLAUDINE: They were my father's.
14 D STRANGER: And where is your father?
15 D CLAUDINE: That is the question I am traveling to answer.
16 A ¶ He studies her.
* 17 A The lamp sways.
18 D STRANGER: Then perhaps I can help you.
19 D CLAUDINE: Why would you?
20 D STRANGER (a thin smile): Because I knew him.
21 A ¶ She does not move.
22 A The suitcase lid trembles under her fingers.
23 D CLAUDINE: What was his name?
24 D STRANGER: Anton Rieux.
25 D CLAUDINE: And yours?
26 D STRANGER: Mine?
27 D CLAUDINE: You know his name. I would like to know yours.
28 D STRANGER (after a long pause): Reynard.
29 D CLAUDINE: Mr. Reynard.
30 D REYNARD: Just Reynard.
31 D CLAUDINE: Then, Reynard, tell me where he is.
32 D REYNARD: Mademoiselle. He is in the next car.
* 33 A ¶ The train rattles through a tunnel.
* 34 A The lamp flickers out, and for three seconds there is only the sound of wheels.
35 A When it flares back, Claudine has opened the suitcase.
36 A Her hand rests on what is inside it.

### SCENE s01863 | INT. INTERROGATION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AGENT MAREN SOLOMON, THEO VANCE, ^THEO
* 1 A ¶ A bare room.
* 2 A A steel table bolted to the floor.
* 3 A A one-way mirror.
* 4 A A single chair on each side.
5 A ¶ AGENT MAREN SOLOMON, 40s, sits with a manila folder squared in front of her and does not open it.
6 A Her sleeves are pressed.
7 A Her face gives nothing.
8 A ¶ Opposite her, wrists in plastic ties, a man in a gray hoodie.
9 A THEO VANCE, 30s.
10 A He studies the table, then the mirror, then her hands.
11 D MAREN: Do you want water?
12 D THEO: No.
13 D MAREN: Coffee?
14 D THEO: No.
15 D MAREN: You've been here six hours.
16 D THEO: Eight.
17 A ¶ She glances at her watch.
* 18 A He is right.
19 A She makes no remark.
20 D MAREN [CONT'D]: Eight.
21 D THEO: You don't believe me.
22 D MAREN: I believe your watch is better than mine.
23 A ¶ He tilts his head, almost smiling.
24 A He lifts his bound wrists to scratch his nose.
25 A She watches the movement closely, then looks away.
26 D MAREN [CONT'D]: Tell me about the drive.
27 D THEO: What drive?
28 D MAREN: The one in your sock.
29 A ¶ His smile goes.
30 A He lowers his hands.
31 A Under the table, a shoe taps twice and stops.
32 D THEO: I don't have a drive.
33 D MAREN: We have a photograph of the drive.
34 D THEO: Then you don't need me.
35 A ¶ She opens the folder at last.
36 A Slides a single glossy photo across the steel.
37 A He doesn't look at it.
38 A His eyes stay on her.
39 D MAREN: Who gave it to you?
40 D THEO: Nobody.
41 D MAREN (simultaneously): Who gave it to you?
42 D ^THEO (simultaneously): Nobody gave it.
* 43 A ¶ Silence.
* 44 A The ventilation fan clicks on, then off.
45 A ¶ Maren reaches across and, slowly, takes his hand in both of hers, as if comforting him.
46 A Turns it over.
47 A Examines the palm.
* 48 A A faint blue smear of ink on the heel of it.
49 A ¶ She lets go.
50 A He pulls the hand back, and tucks it under his other arm.
51 D MAREN [CONT'D]: That's from the stamp at the locker.
52 A ¶ Theo says nothing.
53 A The shoe starts tapping again.
54 A ¶ Maren closes the folder.
55 A She stands, tucks her chair beneath the table, and goes to the door.
56 A At the threshold she turns.
57 D MAREN [CONT'D]: Eight hours, Mr. Vance. I think you'd like a coffee now.
58 D THEO (low): Black.

### SCENE s01864 | INT. SYNERGY PARTNERS - OPEN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): DEBORAH PRZYBYLSKI, VP, SANJAY RAO, KENDRA OYELOWO, BRAD, FITCH, MR. LYLE, ^BRAD
* 1 A ¶ A sea of gray cubicles.
* 2 A A foosball table nobody uses.
* 3 A A neon sign reads "BE THE CHANGE."
* 4 A A printer in the corner beeps in distress.
5 A ¶ DEBORAH PRZYBYLSKI, 40s, regional VP, strides in carrying a laptop and a green smoothie.
6 A Behind her trail four employees: SANJAY RAO, 30s; KENDRA OYELOWO, 20s; BRADLEY "BRAD" FITCH, 30s; and a thin man in an ill-fitting suit.
7 D DEBORAH: Team! Huddle!
8 A ¶ They gather.
9 A The thin man hangs back.
10 D DEBORAH [CONT'D]: Q3 numbers are in. We are crushing it. Crushing. Is anyone not crushing?
* 11 A ¶ Nobody speaks.
* 12 A The printer beeps.
13 D SANJAY (muttering): We missed target by thirty percent.
14 D DEBORAH: What was that?
15 D SANJAY: I said we're... trending.
16 D DEBORAH: Good word. Trending.
17 D KENDRA (to Brad): Who is that guy?
18 D BRAD (whispering): HR, I think.
19 D KENDRA: He's been here an hour.
20 D BRAD: He's been in the printer room.
21 D DEBORAH: Team. I want to introduce someone.
22 A ¶ She gestures at the thin man, who steps forward and clutches his clipboard.
23 D DEBORAH [CONT'D]: This is Mr. Lyle, from Corporate.
24 D MR. LYLE: Hello.
25 D DEBORAH: Mr. Lyle is here to help us optimize.
26 D MR. LYLE: I'm here to make cuts.
* 27 A ¶ Silence.
28 A Deborah's smile does not move.
29 A Sanjay's eyes widen.
30 A Kendra covers her mouth.
31 A Brad slowly raises his hand.
32 D BRAD: Is that a joke?
33 D MR. LYLE: No.
34 D DEBORAH: It's a figure of speech.
35 D MR. LYLE: It is not.
36 D DEBORAH (through teeth): Mr. Lyle, may I have a word.
37 D MR. LYLE: Certainly.
38 A ¶ They step aside.
39 A The three employees watch.
40 A Lyle speaks, quietly, and Deborah's face cracks.
41 A She snatches her smoothie, takes a long pull through the straw, and, finding it empty, sucks on air.
42 A ¶ Lyle returns, alone.
43 A Deborah remains by the foosball table, staring at it.
44 D MR. LYLE [CONT'D]: Ms. Przybylski has decided to take personal leave.
45 D SANJAY: Indefinitely?
46 D MR. LYLE: Effective immediately.
47 D KENDRA (simultaneously): Who's in charge?
48 D ^BRAD (simultaneously): Who's in charge?
49 A ¶ Lyle looks at them.
50 A He glances at the clipboard.
51 D MR. LYLE: Mr. Rao.
52 D SANJAY: Me?
53 D MR. LYLE: Congratulations. You're trending.

### SCENE s01865 | INT. REPAIR SHOP - DAY
Detected names (may be incomplete or contain aliases): PRIYA DESAI, HIRAM PELL, ZEKE, ^ZEKE
* 1 A ¶ A cramped clock repair shop.
* 2 A Hundreds of ticking clocks on every wall, none in agreement.
* 3 A A bell on the door.
* 4 A A workbench cluttered with gears.
5 A ¶ At the counter, a young woman named PRIYA DESAI, 20s, taps her fingers, glancing at the wall of clocks.
6 D HIRAM [O.S.] (from the back room): Be right with you!
7 D PRIYA: Take your time.
8 A ¶ A delivery man named ZEKE, brown uniform, 30s, crashes through the door with a huge box and trips on the rug.
9 A HIRAM PELL, 60s, in a leather apron and jeweler's loupe, bursts through the beaded curtain with a pocket watch in his fist, just as the box flies.
10 A Hiram throws up his arms.
11 A Priya ducks.
12 A Zeke sprawls across the floor.
* 13 A The box lands on the counter with a crash.
* 14 A A hundred clocks chime at once.
15 D HIRAM (shouting over it): My cuckoos!
16 D ZEKE (shouting back): Sorry!
17 A ¶ Priya covers her ears.
18 A Hiram lunges for the box.
19 A Zeke scrambles to his feet.
20 A They both grab the lid at the same time and tug.
* 21 A It pops open, and a spring-loaded cuckoo bird flies out and hits Priya in the forehead.
22 A She yelps.
23 A Hiram and Zeke look at her, then at each other, then at the bird.
* 24 A The chimes die away.
25 D PRIYA (rubbing her head): I came in to pick up my grandfather's watch.
26 D HIRAM (simultaneously): Which watch?
27 D ^ZEKE (simultaneously): Sign here, please.
28 D PRIYA (into the silence): The one that stopped.
29 A ¶ Hiram lifts the pocket watch from the bench and holds it up by its chain.
* 30 A It swings.
* 31 A It ticks.
32 D HIRAM: It's running.

### SCENE s01866 | INT. APARTMENT - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): IRIS LENNOX
* 1 A ¶ A small kitchen.
* 2 A One lamp.
* 3 A A kettle gone cold on the stove.
* 4 A A phone propped against a bowl of fruit, its screen dark.
5 A ¶ IRIS LENNOX, 30s, sits at the table in a cardigan, a mug between her hands, a letter folded beside it.
6 A She stares at the phone.
7 A ¶ She picks it up.
8 A Puts it down.
9 A Picks it up again.
10 A Thumbs the screen.
11 A Holds it to her ear.
12 A ¶ She unfolds the letter and reads the first line under her breath.
13 D IRIS [V.O.] (reading, as if remembered): "Dear Iris. I have started this letter nine times."
* 14 A ¶ It rings, tinnily, three times.
* 15 A Four.
* 16 A Then a flat electronic beep, no greeting at all.
17 D IRIS: Hi. It's me.
18 A ¶ She stops.
19 A Closes her eyes.
20 D IRIS [CONT'D]: That's a stupid way to start. You know it's me. You've always known.
21 A ¶ She laughs, once, and wipes her eye.
22 D IRIS [CONT'D]: I got your letter. I read it standing up in the hallway because I couldn't make it to the kitchen. I read it four times. It's a very good letter. You always did write better than you talked.
23 A ¶ She turns the letter over.
24 D IRIS [CONT'D]: You said you were sorry. You said it three times, actually. I counted. Sorry for leaving. Sorry for the way you left. Sorry for the Thursday.
* 25 A ¶ A long pause.
26 A Her thumb moves along the mug's rim.
27 D IRIS [CONT'D]: I want to tell you I'm not angry. That would be easier. But I am a little. Not at you. At the Thursday. At whoever decided Thursday was a good day for a person to decide something like that.
28 A ¶ She sets the phone on the table, on speaker, and leans toward it.
29 D IRIS [CONT'D]: You asked if I'd call. I said I wouldn't. I've been sitting here for forty minutes not calling. So.
30 A ¶ She drinks the cold tea.
31 A Grimaces.
32 D IRIS [CONT'D]: Here's what I wanted to say. I wanted to say that the dog is fine. He's fat. He misses you. He sits by the door at six. I know that's not fair to tell you but I'm telling you.
* 33 A ¶ The line hisses softly.
34 D IRIS [CONT'D]: And I wanted to say that I forgive you, but I'm not ready to say it out loud, so I'm saying it into a machine, which is a little like a church, if you think about it. Nobody answers but you feel lighter.
35 A ¶ She laughs again, wetter.
36 D IRIS [CONT'D]: I'm going to hang up now. Or you'll have to listen to all the rest. There's a lot of rest.
37 A ¶ She reaches for the screen, then pulls her hand back.
38 D IRIS [CONT'D]: Daniel. Call me on Sunday. Or don't. But the porch light will be on.
39 A ¶ She ends the call.
* 40 A The kitchen is very quiet.
41 A Slowly, deliberately, she gets up, goes to the window, and flicks on the porch light.

### SCENE s01867 | INT. FINISHING SCHOOL DRAWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): MISS EUGENIA THORNE, LADY ARABELLA FENWICK, MISS CLARA PENROSE, THEODORE ABERCROMBIE, MARTHA GRUBB, MADAME ODILE VASSEUR
* 1 A ¶ 1912.
* 2 A A high-ceilinged drawing room in a draughty English manor.
* 3 A Chintz sofas, a tea service on a mahogany trolley, a portrait of a long-dead headmistress above the cold hearth.
* 4 A A grandfather clock ticks with ostentatious calm.
* 5 A Pale spring light slants through lace curtains.
* 6 A ¶ Six figures occupy the room.
7 A ¶ MISS EUGENIA THORNE, 50s, headmistress, steel-gray hair, a cameo brooch at her throat, presides from a wing chair with her teacup on her knee.
8 A To her right, on a settee, sit two of her pupils: LADY ARABELLA FENWICK, 17, ringlets, bored, and her cousin MISS CLARA PENROSE, 16, plain and watchful, her hands folded.
9 A Standing by the window, hands clasped behind his back, is MR. THEODORE ABERCROMBIE, 40s, the visiting music master, in a tweed jacket with a violin case at his feet.
10 A Beside the tea trolley, pouring, is the maid MARTHA GRUBB, 20s, in cap and apron, eyes lowered.
11 A And in the corner, half hidden behind a potted fern, sits MADAME ODILE VASSEUR, 60s, the French instructress, with a book she isn't reading.
12 D EUGENIA: Martha, the milk.
13 D MARTHA: Yes, Miss Thorne.
14 D EUGENIA: Arabella, sit up.
15 D ARABELLA: I am up.
16 D EUGENIA: You are slumped.
17 A ¶ Arabella straightens by a quarter inch.
18 A Clara stifles a smile.
19 D THEODORE: I thought we might begin with the Schubert.
20 D EUGENIA: We shall begin with tea, Mr. Abercrombie. Music follows digestion.
21 D THEODORE: Of course.
22 A ¶ He bends to the violin case, thinks better of it, and straightens.
23 A Martha hands Eugenia the milk jug.
24 A Their fingers brush.
25 A Martha steps back.
26 D MADAME VASSEUR (from behind the fern): Mademoiselle Clara. Your posture is excellent.
27 D CLARA: Thank you, Madame.
28 D ARABELLA (low): Teacher's pet.
29 D CLARA (lower): Ninny.
30 A ¶ Eugenia sets down her cup.
* 31 A The saucer rings.
* 32 A The room stills.
33 D EUGENIA: Is there something the young ladies wish to share?
34 D ARABELLA: No, Miss Thorne.
35 D CLARA: No, Miss Thorne.
36 D EUGENIA: Splendid.
* 37 A ¶ The clock strikes four.
* 38 A A carriage rattles on the gravel outside.
39 A Martha crosses to the window, parts the lace, and looks out.
40 A She stiffens.
41 D EUGENIA [CONT'D]: Martha?
42 D MARTHA: A boy on a bicycle, ma'am. He's left a telegram on the step.
* 43 A ¶ The room holds its breath.
44 A Madame Vasseur lowers her book.
45 A Theodore turns from the window.
46 A Eugenia rises to her full height, smooths her skirt, and walks to the door without a word.
47 A ¶ She opens it.
* 48 A Beyond, in the hall, a small envelope lies on the silver salver, left there by a messenger who has already gone.
49 D EUGENIA [CONT'D]: For me?
50 A ¶ She turns it over, reads the name, and holds the envelope out to Arabella, who has come up behind her.
51 A ¶ Arabella takes it.
52 A She tears it open.
53 A She reads.
54 A The color drains from her ringlets down to her collar.
55 D ARABELLA (very small): Father.
56 D CLARA: Bella?
57 D ARABELLA: He's coming. Tonight.
58 A ¶ Eugenia places a hand on the girl's shoulder.
* 59 A Behind them, the clock ticks on.

### SCENE s01868 | INT. ER NURSES' STATION - 3 A.M.
Detected names (may be incomplete or contain aliases): NKECHI ADEBAYO, LUIS FERNANDEZ, HENRY WU, NURSE GRACE TOLLIVER
* 1 A ¶ Fluorescent lights.
* 2 A A whiteboard of patient names.
* 3 A A coffee pot at its last inch.
4 A ¶ DR. NKECHI ADEBAYO, 30s, charts.
5 A Orderly LUIS FERNANDEZ, 20s, mops.
6 A Dr. HENRY WU, 40s, drinks from a mug that reads WORLD'S OKAYEST DOC.
* 7 A ¶ The overhead speaker clicks.
8 A It is Nurse Grace Tolliver at triage.
9 D GRACE [V.O.]: Code blue, bay six. Code blue, bay six.
10 A ¶ Nkechi drops her pen.
11 D NKECHI (to the room): Bay six. Go.
12 A ¶ NURSE GRACE TOLLIVER, 50s, bursts around the corner pushing the crash cart.
13 D GRACE: Got the cart.
14 D HENRY: Who's in six?
15 D LUIS: The kid. Car accident.
16 D NKECHI (already moving): Luis, ambu bag.
17 D LUIS: On it.
18 A ¶ They sprint.
19 A Henry, lingering, mutters to himself.
20 D HENRY (under his breath): Please be the dog. Please be the dog.
21 A ¶ He sets down the mug and follows.
* 22 A The whiteboard marker rolls off the ledge and clatters on the floor.
* 23 A ¶ At the end of the hall a curtain whips open.
* 24 A A small, familiar bark.
25 D NKECHI [O.S.]: It's a dog!
26 D GRACE [O.S.]: It's a golden retriever!
27 D LUIS [O.S.]: Doc, he's waking up!
28 D HENRY (sagging): Thank God.

### SCENE s01869 | INT. PEDIATRIC WARD NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): CAMILLE ROUSSEAU, NURSE ISAAC OBI, TATIANA VOLKOV
* 1 A ¶ Soft lights.
* 2 A A mural of cartoon whales.
* 3 A The ward is hushed.
4 A ¶ DR. CAMILLE ROUSSEAU, 40s.
5 A Tired eyes.
6 A Hair in a clip.
7 A She stands at the desk, flipping a chart.
8 A ¶ NURSE ISAAC OBI, 30s, across from her.
9 A Scrubs with cartoon bears.
10 A He is tapping at a keyboard.
11 A ¶ Between them, a parent: MRS. TATIANA VOLKOV, 30s.
12 A Coat still on.
13 A Purse clutched.
14 D CAMILLE: Mrs. Volkov. Please. Sit.
15 D TATIANA: I'll stand.
16 D CAMILLE: It's about Misha.
17 D TATIANA: I know it's about Misha.
18 D ISAAC: Can I get you water?
19 D TATIANA: No.
20 A ¶ Isaac steps back.
21 A Camille closes the chart.
22 D CAMILLE: His fever broke at two.
23 D TATIANA: Thank God.
24 D CAMILLE: That's good news.
25 D TATIANA: Then why do you look like that?
26 D CAMILLE: Like what?
27 D TATIANA: Like you have more.
28 A ¶ Camille glances at Isaac.
29 A He nods, almost invisibly.
30 D CAMILLE: The blood work came back.
31 D TATIANA: And?
32 D CAMILLE: There are some numbers I don't like.
33 D TATIANA: Which numbers?
34 D CAMILLE: His white count.
35 D TATIANA: What does that mean?
36 D CAMILLE: It could mean a lot of things. Infection. A reaction to the medication.
37 D TATIANA: Or?
38 D CAMILLE: Or something we need to look at more closely.
39 D TATIANA: Say it.
40 D CAMILLE: I'd like to run more tests before I say anything.
41 D TATIANA: You are saying something.
42 D CAMILLE: Mrs. Volkov.
43 D TATIANA: You're a doctor. You said "more closely." That is a doctor word for a bad word.
44 A ¶ Camille sets her hands flat on the desk.
45 D CAMILLE: We don't know yet. I promise you. When we know, you will know, first, from me.
46 D TATIANA: When?
47 D CAMILLE: Tomorrow afternoon.
48 D TATIANA: That's sixteen hours.
49 D CAMILLE: I know.
50 D TATIANA: What do I do for sixteen hours?
51 D CAMILLE: Sit with him. Hold his hand. Be his mother.
52 A ¶ Tatiana looks at the whale mural, as if to read it.
53 D TATIANA: He likes whales.
54 D CAMILLE: I know. He told me.
55 D TATIANA: He told you?
56 D CAMILLE: Nine whale facts. At the bedside. Before I took his temperature.
57 A ¶ Tatiana smiles, a small crooked smile.
58 A She puts down her purse.
59 D TATIANA: Which is his favorite?
60 D CAMILLE: The blue whale. Its heart is the size of a car.
61 D TATIANA (softly): Then it's big enough.
62 A ¶ She sits at last.
63 A Isaac pulls a chair beside her.
64 A Camille leans on the desk.
65 D ISAAC: Mrs. Volkov, I'll get you that water now.
66 D TATIANA: Yes. Please.
67 A ¶ He crosses to the water cooler.
* 68 A The cup fills with a slow gurgle.
69 A Tatiana holds her hands out for it, and they are steady.

### SCENE s01870 | INT. DEFUNCT BOWLING ALLEY - SHOE COUNTER - NIGHT
Detected names (may be incomplete or contain aliases): IMANI OKAFOR, TEDDY BRANCA, LUIS VARGA, OLD PIM, WEN ZHAO, DAG LINDQVIST
* 1 A ¶ Dust.
* 2 A Dead neon.
3 A SGT. IMANI OKAFOR (40s, wet coat) stands over a cash drawer pried open and empty.
4 A ¶ TEDDY BRANCA (50s, tracksuit, split lip) sits on the counter.
5 A LUIS VARGA (30s, thin, shaking) leans on the ball return beside him.
6 D OKAFOR: Who hit who?
7 D TEDDY: He hit me.
8 D LUIS: He swung first.
9 D OKAFOR: Which he?
10 A ¶ Neither answers.
11 A In the lanes, OLD PIM (70s, janitor's cap) pushes a mop through nothing.
12 D PIM (without looking up): Both of them. Then he took it.
13 A ¶ WEN ZHAO (20s, rain jacket, ticket stub in hand) steps out from behind the shoe cubbies.
14 D WEN: He took it. I saw him put it in the ball bag.
15 A ¶ CONST.
16 A DAG LINDQVIST (20s) lifts a red bag from under the counter, unzips it.
* 17 A Cash.
* 18 A A lot of it.
19 D DAG: Sarge. It's all here.
20 A ¶ Okafor exhales.
21 A Sits on a stool.
22 D OKAFOR: Then somebody get me coffee.

### SCENE s01871 | EXT. FLOODED RICE PADDY DIKE - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT NIKOLAI BRZEZINSKI, CORPORAL ADAEZE OBI, SPARROW, LANGE, PRIVATE HARUTO KAWASAKI
* 1 A ¶ Mist on brown water.
* 2 A A narrow dike, the only dry line for a mile.
* 3 A Four soldiers crouch behind a collapsed water buffalo shed.
4 A ¶ SERGEANT NIKOLAI BRZEZINSKI (40s, gray stubble, field radio on his back) counts heads.
5 A CORPORAL ADAEZE OBI (20s, medic's bag) wraps a bandage around PRIVATE TOMMY "SPARROW" LANGE (19, freckled, pale).
6 A PRIVATE HARUTO KAWASAKI (30s, glasses taped at the hinge) watches the treeline through a rifle scope.
* 7 A ¶ The shooting has stopped.
* 8 A Somewhere, a duck complains.
9 D BRZEZINSKI: That's the last of it. Report.
10 D OBI: Sparrow's through-and-through, left arm.
11 D SPARROW: It's fine, it's--
12 D OBI: It's not fine, hold still.
13 D KAWASAKI: Treeline is quiet. Nothing moving.
14 D BRZEZINSKI: Quiet is not nothing.
15 D SPARROW: Sarge, are we gonna wait for the--
16 D OBI: Stop talking.
17 D KAWASAKI: I count two. Maybe three. Walking away.
18 D BRZEZINSKI: Away?
19 D KAWASAKI: Away. Rifles slung.
20 D OBI (tying off): They're done too.
21 D SPARROW: How do you know?
22 D BRZEZINSKI: Because they're walking.
* 23 A ¶ A long pause.
24 A Brzezinski unslings the radio, thumbs the handset.
25 D BRZEZINSKI [CONT'D]: Tango Two, this is Tango Four. Hold fire. Say again, hold fire.
26 D KAWASAKI: Sergeant, I can see their faces. They're kids.
27 D OBI: So is Sparrow.
28 D SPARROW: I'm twenty in March.
29 D BRZEZINSKI: Nobody is anything in March. Obi, finish. Kawasaki, keep the glass on them till they're gone.
30 D KAWASAKI: Gone.
31 A ¶ He lowers the scope.
32 A Exhales.
33 A Brzezinski sits down hard in the mud.
34 D OBI: Sarge. You're bleeding too.
35 D BRZEZINSKI: Am I?
36 A ¶ He looks at his sleeve.
37 A Surprised, almost polite.

### SCENE s01872 | INT. ORBITAL GREENHOUSE RING - SECTOR NINE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER IFEOMA VANCE, BOTANIST RUSLAN TOKAYEV, MEDIC PRIYA NAIR, TECH JUNO BELL, CADET MARCO DELACROIX, PILOT SEUN-AH KIM
* 1 A ¶ Tomato vines.
* 2 A Grow-lights.
* 3 A A hull groan.
* 4 A Then the alarm.
5 A ¶ COMMANDER IFEOMA VANCE (50s, flight suit, grease-stained) slams the manual valve while BOTANIST RUSLAN TOKAYEV (30s, wiry) drags the cart of seedlings clear and MEDIC PRIYA NAIR (30s) seals the hatch behind them as TECH JUNO BELL (20s, goggles) hammers a bypass and CADET MARCO DELACROIX (18) freezes by the airlock wheel, hands shaking.
6 A At the console, PILOT SEUN-AH KIM (40s, headset) calls out numbers.
7 D VANCE: Pressure!
8 D TOKAYEV: Dropping!
9 D NAIR: Hatch seated!
10 D BELL: ^Bypass hot!
* 11 A ¶ Silence.
* 12 A Hiss.
* 13 A The needle halts.
14 D KIM: Breach contained. Sector Nine stable.
15 A ¶ Delacroix laughs, a shaky bark.
16 A Vance wipes her face with a glove, leaving soot.
17 D VANCE: Marco. Wheel.
18 D DELACROIX: Yes ma'am.
19 A ¶ He turns it.
20 A Slowly.
* 21 A The light goes green.
22 D TOKAYEV (to a seedling): Good girl. Hang on.

### SCENE s01873 | INT. LIGHTHOUSE KEEPER'S KITCHEN - DUSK
Detected names (may be incomplete or contain aliases): ELOWEN PASCOE, CALLUM PASCOE, FINN ARDEN, MAIRI PASCOE
* 1 A ¶ Salt has eaten the window frames pale.
* 2 A Soup steams on a black stove, and four chipped cups wait on an oilcloth the color of old teeth.
3 A ¶ ELOWEN PASCOE (30s, wool cardigan, a woman who has learned to move quietly) ladders bread onto a board.
4 A Across the table, her husband CALLUM PASCOE (30s, broad, sunburnt) peels an orange in one unbroken spiral, offering her the whole bright ribbon of it.
5 D CALLUM: Thought you'd like it.
6 D ELOWEN: You remembered.
7 A ¶ She takes it.
8 A Smiles.
* 9 A The kettle sings.
* 10 A It is a good evening, the kind that asks nothing.
* 11 A ¶ Boots on the stair.
12 A FINN ARDEN (20s, oilskin, rain in his hair) fills the doorway with his hat in his hands.
13 A Behind him, the youngest, MAIRI PASCOE (12, braids), clutches the banister.
14 D FINN: Evening, Mrs. Pascoe.
15 A ¶ Elowen drops the orange peel.
16 A Callum looks at her, then at him, then at her again, and all three of them stand quite still.
17 D MAIRI: Mam? Why does Da have Finn's letters?
18 A ¶ Callum opens his coat.
* 19 A A bundle of envelopes tied with blue thread.
* 20 A Elowen's handwriting on every one.
21 D CALLUM: Sit down, both of you.
22 A ¶ Neither sits.
* 23 A The soup begins, quietly, to boil over.

### SCENE s01874 | INT. COLD-STORAGE LOCKER, FISH MARKET - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE RHEA SOLOMON, ARTUR VOSS, NICO FERRANTE
* 1 A ¶ Frost on steel.
* 2 A A bare bulb.
* 3 A Three people in a room built for crates of herring.
4 A ¶ DETECTIVE RHEA SOLOMON (40s, parka) holds the door ajar with her boot.
5 A ARTUR VOSS (50s, soaked suit) stands over an open ice chest.
6 A NICO FERRANTE (20s, apron) sits on a pallet, knees up.
7 D SOLOMON: Nobody leaves. Hands where I can see them.
8 A ¶ Voss lifts the lid higher.
9 A Looks in.
10 D VOSS (to himself): Not here. Not here. Where is it.
11 D SOLOMON: Artur. Step back.
12 D VOSS: Nico, did you move it?
13 D NICO: No, sir.
14 A ¶ Voss turns.
15 A Too fast.
16 A Solomon's hand goes to her hip.
17 D SOLOMON: Last warning. Everyone calm down.
18 D NICO: I'm calm. I'm so calm.
* 19 A ¶ The compressor shuts off.
* 20 A Total quiet.
21 D VOSS (muttering): Forty years. Forty years.
22 A ¶ Voss pulls a hand from his coat.
* 23 A Phone, not a gun.
24 A He holds it up like a lantern.
25 A ¶ Nico bolts.
26 A Solomon spins.
* 27 A The door slams.

### SCENE s01875 | EXT. DRIVE-IN SCREEN, ABANDONED - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): KES, WILLOW ODUYA, BASTIEN LEROUX
* 1 A ¶ A rusted frame stands over a field gone to goldenrod.
2 A KESTREL "KES" ODUYA (16) lies flat on the hood of a hatchback, shoes off.
3 A His sister WILLOW ODUYA (13) sits on the bumper, kicking gravel.
4 A Their cousin BASTIEN LEROUX (17) arrives on a bicycle, one wheel ticking.
5 A ¶ He drops the bike.
6 A She watches him come.
7 A Kes doesn't turn his head.
8 D BASTIEN: You said four.
9 D KES: It's four.
10 D BASTIEN: It's four-twenty.
11 D WILLOW: He's been lying there since three.
12 D KES: Thinking.
13 D BASTIEN: About what?
14 D KES: Nothing. That's the point of it.
15 D WILLOW: You said you'd teach me to drive today.
16 D KES: I said maybe.
17 D WILLOW: You said Saturday, and it's Saturday.
18 D BASTIEN: She's got a point.
19 D KES: Nobody asked you.
20 D BASTIEN: You're the one who asked me to come.
21 D KES (a long pause): I know.
22 D WILLOW: Is this about Dad?
23 D KES: No.
24 D WILLOW: It's about Dad.
25 D BASTIEN: Willow.
26 D WILLOW: What? He moved out in April. We're allowed to say it.
27 D KES: It's not about Dad. It's about the screen. They used to show movies on it. Did you know that? Mom said they'd park here and nobody watched. They'd just sit.
28 D BASTIEN: Sounds nice.
29 D KES: That's what I mean. It sounds nice.
30 D WILLOW: Can I still sit behind the wheel?
31 D KES (sitting up, finally): Come on. Keys are in the visor.
32 D BASTIEN: Do I get a turn?
33 D KES: After her.
34 D WILLOW: Ha.

### SCENE s01876 | EXT. HOLLOW BELL TOWER, DROWNED CITY - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN SABLE VANTHA, DOBRINA WICK
* 1 A ¶ Moss on the stairs.
* 2 A Water laps the third floor.
* 3 A A bronze bell the size of a cart hangs cracked, humming faintly.
4 A ¶ QUEEN SABLE VANTHA (40s, armor of woven eel-leather) stands alone beside it, lantern at her feet.
5 A She touches the bell with a gloved hand.
* 6 A It hums louder.
7 D SABLE: Count the stairs. Tell me when I'm lying.
* 8 A ¶ Nobody answers.
* 9 A Water laps.
10 A She draws her sword.
11 D SABLE [CONT'D] (to the bell): I drowned your city. Say it to my face.
* 12 A ¶ The bell hums higher.
* 13 A Behind her, boots on the stairs.
14 A She spins, blade level.
15 A ¶ Her squire DOBRINA WICK (20s, soaked, nervous) hauls herself up with a coil of rope.
16 A Sable lowers the sword an inch.
17 D DOBRINA: Majesty. You said wait below.
18 D SABLE: I said wait. You never listen.
19 D DOBRINA: The water is rising, Majesty. Fast.
20 D SABLE: I know. Get behind me.
21 A ¶ Dobrina drops the rope; it uncoils over the edge and plunges.
22 A Sable lifts the lantern while Dobrina grabs her sleeve, and the flame bends sideways as the humming swells.
23 D DOBRINA: It's singing at us.
24 D SABLE: It sings when it's afraid.
25 D DOBRINA: Bells aren't afraid, Majesty.
26 D SABLE: This one drowned a city. Be afraid for it.
* 27 A ¶ A crack runs up the bell's flank with a sound like a shot.
28 A Sable steps forward, and Dobrina, after one terrified breath, steps with her, and together they lay both hands on the bronze.
29 D SABLE [CONT'D]: Whatever it asks, don't answer.
30 D DOBRINA: What will it ask?
31 D SABLE: Your name. Mine, it already has.
* 32 A ¶ The bronze goes silent.
* 33 A The water stops.
* 34 A Then, from inside the bell, very softly, a child's voice begins to count.

### SCENE s01877 | INT. RAILWAY TELEGRAPH OFFICE, SILVER GAP, COLORADO - NIGHT (1893)
Detected names (may be incomplete or contain aliases): MABEL HOLLOWAY, REVEREND ISAIAH THORNE, SHERIFF GUS ARMBRUSTER, DISPATCHER, ROSALIND PEMBERTON
* 1 A ¶ A single oil lamp.
* 2 A Frost feathering the window glass.
* 3 A The key chatters on its brass base like a nervous bird, and a stove ticks in the corner, losing its argument with the cold.
4 A ¶ MABEL HOLLOWAY (30s, ink on her cuffs, hair pinned tight enough to hurt) sits at the desk, one hand on the key, the other flat on a stack of unsent forms.
5 A Across from her, REVEREND ISAIAH THORNE (60s, gaunt, black coat gone green at the seams) stands with his hat held against his chest as though it might be asked for.
6 D THORNE: It has been four hours.
7 D MABEL: I know how long it's been, Reverend.
8 D THORNE: Then you know the whole town is gathered at the church, waiting to be told something.
9 D MABEL: Then they'll wait.
* 10 A ¶ The key stops.
11 A She lifts her hand from it as if it had grown hot.
12 D THORNE: Miss Holloway. A telegram arrives from the mine company. You read it. And now you will not tell me what it says.
13 D MABEL: It isn't addressed to you.
14 D THORNE: It is addressed to forty families.
15 A ¶ Mabel looks at the paper under her palm.
16 A She does not move her hand.
17 D MABEL: It's addressed to the superintendent. He isn't here to receive it.
18 D THORNE: Then I will carry it to him.
19 D MABEL: He's in the shaft.
* 20 A ¶ Silence.
* 21 A The stove ticks.
22 A Thorne lowers his hat, slowly, onto the desk.
23 D THORNE: Ah.
* 24 A ¶ The door bangs open.
25 A SHERIFF GUS ARMBRUSTER (50s, mustache full of snow, a badge he never polishes) stamps in, breathing hard, and shoves the door shut with his shoulder.
26 D ARMBRUSTER: Lights are out on the whole ridge. Somebody's cut the line past the trestle.
27 D MABEL: It wasn't cut. It was buried.
28 D ARMBRUSTER: Buried?
29 D MABEL: Slide came down at nine. I felt the wire go slack under my hand.
30 D ARMBRUSTER: And you didn't think to say?
31 D MABEL: I said to Reverend Thorne. Four hours ago. He didn't ask what I meant.
32 A ¶ Thorne looks at the floor.
33 A Armbruster takes off his gloves one finger at a time, then looks at the stove, and then at the key.
34 D ARMBRUSTER: Can you raise anyone?
35 D MABEL: I've been trying since nine.
36 A ¶ She taps out a short burst.
* 37 A Nothing.
38 A She taps again.
* 39 A The key answers with a faint, dry, stuttering click, as though someone far away had leaned on the other end by accident.
40 A ¶ The three of them go still.
41 D DISPATCHER [V.O.] (thin, crackling, from the sounder): ...Silver Gap... Silver Gap, this is Division at Leadville... come back...
42 A ¶ Mabel seizes the key.
43 A Armbruster is at her shoulder in two strides.
44 A Thorne's lips begin to move, soundless.
45 D MABEL (tapping as she speaks): Division, this is Holloway at Gap. Line is restored. Repeat, line is restored.
46 D DISPATCHER [V.O.] (fading in): ...Holloway, we had you for dead. Report conditions...
47 D ARMBRUSTER: Tell him about the slide. Tell him about the mine.
48 D MABEL: I'm telling him.
49 D DISPATCHER [V.O.]: ...say again, conditions at Number Four shaft...
50 A ¶ Mabel's hand hesitates above the key.
51 A She glances at Thorne, then at the paper on the desk, then back at the key.
52 D THORNE: Read it to him, Miss Holloway.
53 D MABEL: Reverend--
54 D THORNE: Read it. Whatever it says. Better he hears it from us than from a stranger.
55 A ¶ Mabel slides the paper out from under her palm, finally.
56 A Unfolds it.
57 A Her eyes travel across it once.
58 A She folds it again.
59 D MABEL: Fourteen men underground at the time of the slide.
60 D ARMBRUSTER: Fourteen.
61 D MABEL: Superintendent among them. Rescue party left Leadville at six. They are expected at dawn.
* 62 A ¶ The door opens a third time.
63 A A gust, a flurry of snow, and ROSALIND PEMBERTON (20s, bare-headed, carrying a lantern and a baby wrapped in a shawl) stands on the threshold.
64 A Her hair is wet with melt, and her face is entirely composed, which is worse than if it were not.
65 D ROSALIND: Mr. Armbruster. They said you'd be here.
66 D ARMBRUSTER: Mrs. Pemberton. You shouldn't be out in this.
67 D ROSALIND: My husband is Number Four's night boss. I want to know if anyone has heard from Number Four.
* 68 A ¶ Nobody answers.
69 A Thorne takes a step toward her.
70 A Armbruster sets his gloves on the desk.
71 A Mabel keeps her eyes on the key.
72 D ROSALIND [CONT'D] (quietly): I've been in this town six years. I know what it sounds like when no one is answering.
73 D MABEL: Mrs. Pemberton, the line has only just come back. We know almost nothing.
74 D ROSALIND: Then tell me almost.
75 A ¶ Mabel stands, and for the first time her voice cracks and she does not hide it.
76 D MABEL: Fourteen men were below. The rescue party leaves Leadville at dawn. That's all that is known.
77 D ROSALIND: Fourteen.
78 A ¶ She looks down at the baby, who is asleep.
79 A She adjusts the shawl with great care.
80 D ROSALIND [CONT'D]: Then I will wait with the others. Reverend, will you take me to the church?
81 D THORNE (hat in hand again): It would be an honor.
82 D DISPATCHER [V.O.]: ...Gap, do you copy... Gap...
83 A ¶ Mabel sits.
84 A Her fingers find the key.
85 A Rosalind and Thorne go out into the snow, and Armbruster holds the door for them, watching their lantern shrink up the hill.
86 D ARMBRUSTER (to himself): Dawn.
87 A ¶ He shuts the door.
* 88 A The stove ticks.
* 89 A The key begins, once more, to chatter.

### SCENE s01878 | INT. FUNERAL HOME EMBALMING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE ROUX, OSEI BANDELE, WALT KOWALCZYK, MOTHER ALDER, DEACON FIRMIN
* 1 A ¶ Tile.
* 2 A Drains.
* 3 A One steel table, covered.
* 4 A A radio hums static in the corner.
5 A ¶ DELPHINE ROUX (30s, mortician's apron) checks a clipboard.
6 A Her assistant, OSEI BANDELE (20s, headphones around his neck), eats crackers from the sleeve.
7 A At the door, WALT KOWALCZYK (60s, groundskeeper, flashlight), keeps his back to the wall.
8 A ¶ She frowns.
* 9 A The clipboard lists one body.
* 10 A The table is lumpy under the sheet, wrong somehow.
11 D DELPHINE: Osei. How many did we take in?
12 D OSEI: One. Mr. Alder.
13 D DELPHINE: Then why is it that big?
14 A ¶ He stops chewing.
* 15 A Walt's flashlight beam trembles on the floor.
16 D WALT: Don't lift it.
17 D DELPHINE: Walt.
18 D WALT: Don't. Please.
19 A ¶ She lifts it anyway.
20 A Underneath lies old MR. ALDER, gray, still.
21 A And on his chest, curled like a cat, sits a girl of about eight in a wet nightgown, eyes open, humming along with the radio.
22 D DELPHINE: Sweetheart, whose are you?
23 D OSEI: ^Oh no. No no no.
24 A ¶ The girl stops humming.
25 A Looks at her.
26 A Smiles with all her teeth.
27 D MOTHER ALDER [O.S.] (from the hallway): Marnie. Come away from there.
* 28 A ¶ The lights flicker.
29 A Walt drops the flashlight.
* 30 A It rolls to the drain and goes out.
31 A ¶ They back toward the door.
32 A He grabs the knob.
* 33 A It's already turning from the other side.
34 D DEACON FIRMIN [O.S.]: Open up. Please. She's followed me home too.

### SCENE s01879 | INT. HOSPITAL CONSULTATION ROOM, ELEVENTH FLOOR - MORNING
Detected names (may be incomplete or contain aliases): ANAND PILLAI, NURSE BRIDGET MOONEY, CASIMIR WOJTYLA
* 1 A ¶ Pale light through venetian blinds.
* 2 A A box of tissues, deliberately placed.
3 A DR. ANAND PILLAI (50s, soft-spoken, cardigan under his coat) turns a folder over in his hands.
4 A NURSE BRIDGET MOONEY (40s, quiet) stands by the door.
5 A CASIMIR WOJTYLA (70s, retired tailor, pressed shirt) sits very straight, hands folded over his cap.
6 D CASIMIR: My scans look good, yes? You called me in early only to tell me to stop worrying.
7 D PILLAI: Mr. Wojtyla, thank you for coming in.
8 D BRIDGET: Can I get you some water?
9 D CASIMIR: Water, no. I would like the news. The weather I can see for myself.
10 D PILLAI: The scans were clear in the lungs.
11 D CASIMIR: There. You see, Bridget? I told you the cough was the cold weather.
12 D BRIDGET: You did.
13 D PILLAI: Mr. Wojtyla, the scan did find something else.
14 D CASIMIR: What something?
15 D PILLAI: A shadow on the liver. Two, in fact.
16 D CASIMIR: Shadows. I have spent forty years looking at shadows on cloth. They come out with a good steam.
17 D BRIDGET: Mr. Wojtyla--
18 D PILLAI: ^These will not come out with steam, I am afraid.
19 D CASIMIR: So. It is that kind of shadow.
20 D PILLAI: Yes.
21 D CASIMIR: And how long does that kind of shadow give a man?
22 D PILLAI: Months. Perhaps more, with treatment.
23 D CASIMIR: Months. (beat) Thank you for saying it plainly. Bridget, you may stop holding the door. I am not going to run.

### SCENE s01880 | INT. COIN LAUNDRY, ALL-NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): MARCHETTI, ARCHIE PENNYWHISTLE, RENATA, MEZ-LUND, TOMASZ BRZOZOWSKI, WIN, ABARA
* 1 A ¶ Dryers turning.
* 2 A Fluorescent hum.
* 3 A Orange plastic chairs bolted in rows.
* 4 A A vending machine sells soap and nothing else.
5 A ¶ DET. SOLEDAD "SOL" MARCHETTI (40s, windbreaker, paper cup) takes the chair nearest the door.
6 A Opposite her, ARCHIE PENNYWHISTLE (60s, flannel, crossword) folds towels with a care that borders on ceremony.
7 A Near the dryers, RENATA GÓMEZ-LUND (30s, scrubs, earbuds) watches a spinning load of white shirts.
8 A ¶ Marchetti sips.
9 A Looks at no one in particular.
10 D MARCHETTI: Slow night.
11 D ARCHIE: They all are, now.
12 A ¶ He sets a towel on the pile.
13 A Squares the corners.
14 D MARCHETTI: You work here long?
15 D ARCHIE: Eleven years. Owner's my cousin. He doesn't come in.
16 D MARCHETTI: Nice. A quiet job.
17 D ARCHIE: It is until it isn't.
18 A ¶ Renata pulls out an earbud.
19 A Glances at Marchetti.
20 A Looks away.
21 A Her load stops.
22 A She opens the door and pulls the shirts into a basket, one by one.
* 23 A Each is folded before it is warm.
24 D MARCHETTI: Those look like hospital shirts.
25 D RENATA: They're mine.
26 D MARCHETTI: All of them?
27 D RENATA: It's a big family.
28 A ¶ Archie turns the page of his crossword.
29 A Pencils in a word.
30 A Erases it.
31 D MARCHETTI: Seven letters. "Alibi."
32 D ARCHIE: Excuse?
33 D MARCHETTI: Six. Excuse is six.
34 D ARCHIE (not looking up): Then I don't have one.
* 35 A ¶ The bell on the door.
36 A TOMASZ BRZOZOWSKI (30s, leather jacket, wet hair) enters with a duffel and stops.
37 A His eyes go to Renata.
38 A Then to Marchetti's windbreaker, to the badge clipped beneath it.
39 A He nods once, pleasantly, like a man at the wrong party.
40 D TOMASZ: Evening.
41 D MARCHETTI: Evening.
42 D ARCHIE: Machine three is broken, friend. Use five.
43 D TOMASZ: I've got my own, thanks.
44 A ¶ He unzips the duffel.
45 A Takes out a single folded shirt.
46 A Holds it up to the light.
47 A Renata drops the basket.
* 48 A ¶ Nobody speaks.
* 49 A A dryer thuds, thuds, thuds.
* 50 A A coin rattles down inside it.
51 D ARCHIE: ^Machine five. It's good.
52 D MARCHETTI: ^Mr. Brzozowski. Sit down.
53 A ¶ Tomasz folds the shirt into quarters.
54 A Then smaller.
55 A A kind of smile.
56 D TOMASZ: I haven't given my name.
57 D MARCHETTI: You didn't need to.
* 58 A ¶ From the back, a door opens.
59 A WINSTON "WIN" ABARA (50s, owner's cousin's lawyer, expensive coat) steps out of the supply closet, buttoning his jacket.
60 A He looks at the room.
* 61 A Nobody looks at him.
62 D WIN: It's all right, Tomasz. They only have the one.
63 D TOMASZ: The one what?
64 D WIN (gently): The one thing, son. The rest is dryer lint.
65 A ¶ Marchetti stands.
* 66 A Her cup is empty.
67 A She sets it very neatly on the chair.
68 D MARCHETTI: Then let's start with the one.
69 A ¶ Renata picks up the basket again.
70 A Archie closes his crossword.
* 71 A The dryers keep turning.

### SCENE s01881 | INT. GLASS-DOMED OBSERVATORY, LUNAR FAR SIDE STATION - DAY
Detected names (may be incomplete or contain aliases): COMMANDER HORATIO LINDQVIST, AMARA OKONKWO-REYES, TECHNICIAN BEN YAZZIE, CORDELIA FAIRWEATHER, ENGINEER JUNE KAWAMURA, STRANGER, PRYCE
* 1 A ¶ A great telescope sleeps under a sheet of dust.
* 2 A Earthlight spills through the dome.
3 A Six people sit around a folding table, plates of reconstituted eggs untouched.
4 A ¶ COMMANDER HORATIO LINDQVIST (50s, silver temples, careful) presides.
5 A DR. AMARA OKONKWO-REYES (40s, sharp, notebook) sits at his right.
6 A TECHNICIAN BEN YAZZIE (30s) fiddles with a salt packet.
7 A MRS. CORDELIA FAIRWEATHER (60s, tailored, a visitor from the supply ship) eats nothing.
8 A ENGINEER JUNE KAWAMURA (30s) stirs her coffee.
9 A A tall man in a station jacket, STRANGER (40s, unreadable), stands just inside the door, hat in hand.
10 D COMMANDER LINDQVIST: Mrs. Fairweather, I trust you slept well.
11 D CORDELIA: Remarkably. I'm told the silence here is the best in the solar system.
12 D OKONKWO-REYES: It is. Nothing carries.
13 D YAZZIE: Not even sound. Not even, y'know, gossip.
14 D JUNE: Ben.
15 D YAZZIE: What? I'm only saying.
16 A ¶ The Stranger takes a step forward.
17 A Everyone turns, then politely turns back.
18 D CORDELIA: And who is our guest?
19 D STRANGER: We haven't met, ma'am. I came in with the supply crew.
20 D COMMANDER LINDQVIST: He's the new relief mechanic. Name of Pryce. Mr. Pryce, sit down.
21 D PRYCE: Thank you, Commander.
22 A ¶ He takes the empty chair.
23 A Okonkwo-Reyes studies him over her notebook.
24 D OKONKWO-REYES: Mr. Pryce, forgive me. The crew manifest for last Thursday's flight lists twelve passengers. Twelve names. None of them yours.
25 D PRYCE: I came on the second shuttle.
26 D OKONKWO-REYES: There was no second shuttle.
* 27 A ¶ Silence.
28 A June's spoon stops.
* 29 A Yazzie's salt packet bursts, scattering white on the table like frost.
30 D COMMANDER LINDQVIST: Dr. Okonkwo-Reyes--
31 D PRYCE: It's all right, Commander. She's right.
32 A ¶ He rises.
33 A Straightens his jacket.
34 A Takes off the station badge and lays it on the table, face up.
35 D PRYCE [CONT'D]: My name is Pryce. I'm the chairman of the board that signed off on this station. I came to see for myself whether the stories were true.
36 D CORDELIA (coolly): What stories?
37 D PRYCE: That the telescope hasn't worked since March. That the funding was diverted. That everyone at this table has been lying to Earth for six months.
* 38 A ¶ Nobody moves.
* 39 A The earthlight, blue and enormous, slides a finger of shadow across the dome.
40 D COMMANDER LINDQVIST: Mr. Pryce. Before you say another word, I'd ask you to look up.
41 A ¶ Pryce looks up.
* 42 A Through the dome, far off, a point of light blooms and pulses.
* 43 A Then another.
* 44 A Then a ring of them, pale as pearls, arranged in a perfect circle.
45 D PRYCE: What am I looking at?
46 D COMMANDER LINDQVIST: The reason we stopped reporting.

### SCENE s01882 | INT. PROVINCIAL RAILWAY WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SIMONE DUVALIER, HENRIK ASTRUP
* 1 A ¶ A potbellied stove.
* 2 A A clock that has been wrong for years.
* 3 A Two benches.
* 4 A One lamp.
5 A SIMONE DUVALIER (60s, widow's black, one suitcase) sits stiffly.
6 A HENRIK ASTRUP (60s, overcoat, cane) sits on the other bench, not looking at her.
7 D SIMONE: You have been staring at that clock for an hour.
8 D HENRIK: It's wrong.
9 D SIMONE: It has been wrong since the war.
10 D HENRIK: Then why don't they fix it?
11 D SIMONE: Perhaps they prefer it that way. Perhaps everyone who passes through here prefers one clock that lies.
12 D HENRIK: Madame, do I know you?
13 D SIMONE: No.
14 D HENRIK: You look at me as though I should.
15 D SIMONE: You are mistaken. I was looking at your cane.
16 D HENRIK: It was my father's.
17 D SIMONE: It is a handsome cane.
18 D HENRIK: It was the only thing he left me. That and a quarrel I never finished.
19 D SIMONE: With whom?
20 D HENRIK: With him. He died before I could win it.
21 D SIMONE (a small laugh): Those are the ones that last. The quarrels with the dead.
22 D HENRIK: You speak as one who knows.
23 D SIMONE: I buried a husband in March. We were not speaking when he fell ill. I thought there would be a better time.
24 D HENRIK: There never is.
25 D SIMONE: No.
26 D HENRIK: Where do you travel?
27 D SIMONE: To my sister's. She lives at the end of the line. She has not spoken to me in twenty years, and she has written to say she is dying.
28 D HENRIK: And you will go?
29 D SIMONE: I have a ticket.
30 D HENRIK: That is not an answer.
31 D SIMONE: It is the only one I have tonight.
32 D HENRIK (after a moment): My train comes at seven. I am going to my son. He has not spoken to me in nine years.
33 D SIMONE: Then we are both late.
34 D HENRIK: It would seem so.
35 D SIMONE: Do you know what I think, Monsieur Astrup?
36 D HENRIK: You know my name.
37 D SIMONE: It is on your suitcase. I have read it eleven times.
38 D HENRIK (smiling for the first time): Then you may as well call me Henrik.
39 D SIMONE: Simone.
40 D HENRIK: Simone. What do you think?
41 D SIMONE: I think the clock is not wrong at all. I think it shows the hour when each of us should have left.
42 D HENRIK: And what hour is it?
43 D SIMONE: For you, nine years ago. For me, twenty.
44 D HENRIK: Then let us be early for the next one.
* 45 A ¶ A whistle in the distance.
46 A Both rise.
47 A He offers his arm.
48 A She takes it.

### SCENE s01883 | INT. UNDERWATER HABITAT KITCHEN, SEA STATION ALDEBARAN - NIGHT
Detected names (may be incomplete or contain aliases): ZEKE, ROMANOV-ABARA, TAMSIN VOYLE, NIMA TSERING
* 1 A ¶ Steel counters.
* 2 A Portholes full of black.
* 3 A A kettle ticks as it cools.
4 A ¶ EZEKIEL "ZEKE" ROMANOV-ABARA (50s, lined face, heavy cardigan) stands at the counter slicing bread into even squares.
5 A TAMSIN VOYLE (30s, shaved head, rubber gloves) dries a plate she has dried before.
6 A She watches the water rather than him.
7 A ¶ He sets the knife down.
8 A She sets the plate down.
* 9 A Neither speaks.
* 10 A Pipes knock somewhere far off.
11 A ¶ He pours two cups of tea.
12 A Slides one toward her.
13 A She lets it sit and cool.
14 A ¶ He sits.
15 A She does not.
16 A After a while she picks up the cup, looks into it, and puts it back without drinking.
17 A His eyes follow her hand.
18 A ¶ He turns the bread over.
19 A She turns her back.
* 20 A ¶ At the porthole, a pale shape glides past: a long, slow, luminous thing.
21 A They both see it.
* 22 A Neither remarks on it.
23 A He folds his hands.
24 A She wipes the counter, which is already clean.
* 25 A ¶ A hatch clunks.
26 A NIMA TSERING (20s, wool cap, tool belt) comes in with a clipboard, hesitates, reads the room like a gauge.
27 D NIMA: Pressure's holding. Thought you'd want to know.
28 D ZEKE: Thank you.
29 D NIMA: Is everything all right?
30 D TAMSIN (very evenly): Fine.
31 A ¶ Nima waits.
* 32 A Nobody adds anything.
33 A She nods, writes something down, and goes.
* 34 A The hatch clunks again.
35 A ¶ He takes a slice of bread, tears it in half, and offers her one piece.
36 A She looks at it.
37 A She takes it.
38 A Eats.
39 A They both look at the porthole, where the shape has returned and is now circling.
40 D ZEKE: It follows the light.
41 D TAMSIN: So do we.

### SCENE s01884 | INT. COMMUNITY CENTER BASEMENT, BINGO NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): MAGS, DELACOURT-PIKE, DARNELL FONTAINE, LORRAINE FONTAINE, STRANGER, CALVIN
* 1 A ¶ Folding tables, fluorescent flicker, a coffee urn the size of a toddler.
* 2 A Forty chairs, eleven players.
* 3 A A cage of numbered balls spins slowly.
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
* 25 A Nobody saw him arrive.
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
* 43 A The chair scrapes.
* 44 A Heads turn.
45 A She takes off her church hat and puts it down on the table, very gently, like laying a flag.
46 D LORRAINE: You come home. Tonight.
47 D DARNELL: Mama--
48 D LORRAINE: I am not asking.
49 D DARNELL (rising, voice cracking): Why are you doing this here? In front of everyone?
50 D LORRAINE: Because everywhere else you stop picking up the phone.
51 A ¶ He flings the cards.
* 52 A They scatter.
* 53 A Marked or not, they rain across the floor.
54 D DARNELL: I didn't want you to see me like this!
55 D MAGS: Table three!
56 D DARNELL: Like what? Like a man who failed?
57 A ¶ Calvin retreats three steps, clipboard raised like a shield.
58 A Mags has gone silent, one ball in her fist.
* 59 A Eleven players watch.
* 60 A The cage creaks once more and stops.
61 D LORRAINE: Like my son.
62 A ¶ He stands there.
63 A She does not move.
64 A Mags, very softly, into the microphone.
65 D MAGS: Bingo, I think. If anyone's asking.

### SCENE s01885 | INT. GLASSBLOWER'S STUDIO, MURANO - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CHIARA BELLINI-OKADA, ELIAS WARDLAW
* 1 A ¶ The furnace roars.
* 2 A Orange light on every wall.
3 A CHIARA BELLINI-OKADA (30s, leather apron, burn scars on both forearms) turns a rod of molten glass.
4 A ELIAS WARDLAW (30s, rumpled linen, a stranger to heat) stands too close to the bench with a notebook.
5 D ELIAS (to the room): Is it always this hot?
6 D CHIARA: Always. You'll melt before the glass does.
7 A ¶ They laugh.
* 8 A The glass swells on the pipe, a glowing teardrop, and for a moment the studio feels very small and very kind.
9 A ¶ He steps in to see.
10 A She swings the rod without looking.
* 11 A The blob drips to the floor.
12 A They both leap back, collide, and fall in a heap, his notebook skidding under the bench.
13 D ELIAS: I am so sorry.
14 D CHIARA: You should be.
15 A ¶ She is laughing again.
16 A He is not.
17 D ELIAS (muttering): Stupid. Stupid. Stupid.
18 A ¶ She reaches over, tilts his chin toward the light, and inspects a small red mark on his jaw.
19 D CHIARA: You're burned.
20 D ELIAS: I'm fine.
21 D CHIARA: Hold still.
22 A ¶ They freeze.
23 A Her thumb rests on his cheek.
* 24 A The furnace roars.
25 A Neither breathes.
26 D CHIARA [CONT'D] (quietly): My father says never look at the fire. Only at the glass.
27 D ELIAS: And where do I look?
28 A ¶ She doesn't answer.
29 A He does not look at the glass.

### SCENE s01886 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): GIGI, HALVORSEN, DEZ, OYELARAN-PRICE, MARI, CASTELLANOS
* 1 A ¶ Dust.
* 2 A A cracked dome.
* 3 A The projector sits in the center like a sleeping insect.
* 4 A Three flashlights wander across the ceiling, snagging on fallen plaster.
5 A ¶ GRETA "GIGI" HALVORSEN (17, hoodie, camera around her neck) climbs onto the star-seat rail.
6 A DESMOND "DEZ" OYELARAN-PRICE (18, varsity jacket, sweating) follows.
7 A MARISOL "MARI" CASTELLANOS (17, headlamp, cracked phone) stays at the door, one hand on the frame.
8 D GIGI: Dez. Mari. Check it out. It's still plugged in.
9 D DEZ: Gigi, nothing here is plugged in.
10 D GIGI: Tell that to the little red light.
11 A ¶ She points.
* 12 A A tiny red diode on the projector's base, glowing steadily.
13 A Dez swallows.
14 A Mari lowers her phone.
15 D MARI: Gigi, I'm serious. Let's go.
16 D GIGI: We came all this way, Mari.
17 D MARI: We came because you dared us. I'm daring us the other way.
18 D DEZ: She has a point, Gigi.
19 D GIGI: You two are such babies.
20 A ¶ She crosses to the projector and wipes the dust from the lens with her sleeve.
21 A Dez hovers at her shoulder, and Mari edges in from the doorway, until all three huddle around the old machine, flashlights pooled on its brass.
22 D DEZ: Don't touch the switch.
23 D GIGI: Don't tell me what to touch.
24 D MARI: Seriously, Gigi, don't.
25 A ¶ Gigi touches the switch.
* 26 A Click.
* 27 A Nothing.
* 28 A Then, far overhead, a hum.
* 29 A The dome fills with stars: soft, warm, and wrong, slowly drifting out of order, constellations sliding into new shapes.
30 D MARI [CONT'D]: That's not the sky.
31 D DEZ: It's a planetarium, Mari. It's supposed to not be the sky.
32 D GIGI (whispering): It's beautiful.
33 A ¶ She raises her camera and the shutter clicks.
* 34 A Stars turn.
* 35 A The shapes settle into letters, then words.
36 A All three read them together without meaning to.
37 D DEZ: "Gigi. Dez. Mari."
38 D MARI: It knows our names.
39 D GIGI (lowering the camera): It's a trick. Someone planned this.
40 D DEZ: Who? Nobody knew we were coming.
41 D MARI: I told no one. I swear.
42 D GIGI: Then who wrote it?
* 43 A ¶ The stars shift again.
* 44 A One more word, slowly forming.
* 45 A ¶ "STAY."

### SCENE s01887 | EXT. ROADSIDE, STALLED SCHOOL BUS - AFTERNOON
Detected names (may be incomplete or contain aliases): EZRA PLUMLEY, TOBIAS KRALL, NGOZI ADEBAYO, RAFF, BOONE, MEI-LIN SOONG
* 1 A ¶ Heat shimmer.
* 2 A Corn on both sides.
* 3 A The hood is up and smoke curls from the engine.
4 A ¶ MR. EZRA PLUMLEY (50s, driver, cap pulled low) peers at the radiator.
5 A On the curb, four teens sit in a row.
6 A TOBIAS KRALL (16, lanky, headphones).
7 A NGOZI ADEBAYO (16, braids, a worn paperback).
8 A RAFFERTY "RAFF" BOONE (17, football jacket, bouncing knee).
9 A MEI-LIN SOONG (15, sketchbook shut).
10 D RAFF: How long?
11 D PLUMLEY: Until it stops smoking.
12 D RAFF: That's not a time.
13 A ¶ NGOZI turns a page.
14 A Doesn't read it.
15 A ¶ TOBIAS pulls one earphone out.
16 A Puts it back.
17 D MEI-LIN: Raff, you're shaking the curb.
18 D RAFF: I'm not.
19 A ¶ He is.
20 A He stops.
21 A Starts again.
22 D PLUMLEY: Somebody toss me the water jug.
* 23 A ¶ Nobody moves.
24 A Tobias stands.
25 A Gets the jug from the bus steps.
26 A Hands it over without a word.
27 A Sits again, closer to Ngozi than before.
28 D NGOZI (not looking up): You hate this book.
29 D TOBIAS: I never said that.
30 D NGOZI: You've been holding it upside down for ten minutes.
31 A ¶ He looks.
* 32 A She's right.
33 A He turns it.
34 A She hides a smile in the page.
35 D RAFF: Okay, seriously. We're missing the game.
36 D MEI-LIN: It's a scrimmage.
37 D RAFF: It's the scrimmage.
38 D PLUMLEY (from under the hood): Not today, son.
39 A ¶ Raff kicks a pebble into the corn.
* 40 A Silence.
* 41 A Plumley's wrench clinks.
* 42 A A crow somewhere.
43 D MEI-LIN: Raff.
44 D RAFF: What.
45 D MEI-LIN: Your dad's not coming, is he.
46 A ¶ Raff stops.
47 A His whole body stops.
48 A The knee, the hands, the breath.
49 A ¶ NGOZI closes her book.
50 A TOBIAS takes off his headphones, finally.
51 D RAFF: I told him two-thirty.
52 D MEI-LIN: It's four.
53 D RAFF: He's probably stuck behind a tractor.
* 54 A ¶ Nobody answers.
55 A Plumley slams the hood.
* 56 A The smoke is gone.
57 D PLUMLEY: All right, folks. Load up.
58 A ¶ They rise in order.
59 A Raff last.
60 A He looks down the empty road one more time, then climbs the steps and sits alone, three seats from anyone, jacket collar up.

### SCENE s01888 | INT. MARS COLONY MESS TENT - EVENING
Detected names (may be incomplete or contain aliases): CAPTAIN BRYONY ASHWORTH, ENGINEER TAVITA FETU, BOTANIST LAILA NASSIR
* 1 A ¶ Plastic tables.
* 2 A Sand drifting under the flap.
* 3 A A lamp swings from the ridgepole.
4 A ¶ CAPTAIN BRYONY ASHWORTH (40s, sunburnt) deals protein bars out of a crate like cards.
5 A ENGINEER TAVITA FETU (30s, broad) leans against the pole.
6 A BOTANIST LAILA NASSIR (30s, thin, notes) writes in a ledger.
7 D ASHWORTH: Two each. Tavita, you have three coming.
8 D TAVITA: I'll take two.
9 D ASHWORTH: You'll take three. You haul the panels.
10 D TAVITA: Others haul too.
11 D LAILA (not looking up): Everyone hauls. It's tent rules.
12 D ASHWORTH: It's my rule. I'm Captain.
13 D LAILA: Then Captain, the ledger says we have eleven days of rations left.
14 A ¶ Bryony stops dealing.
15 A Tavita pushes off the pole.
16 D TAVITA: You said twenty.
17 D LAILA: Twenty was the count before the dust storm took crate six.
18 D ASHWORTH: Crate six was mine.
19 D LAILA: I noticed.
20 D ASHWORTH: Say what you mean.
21 D LAILA: I mean you dealt me two bars and kept five.
22 A ¶ Ashworth looks at the bars in her hand.
23 A She does not deny it.
24 D TAVITA: Bry.
25 D ASHWORTH: They're not for me.
26 D LAILA: Then who?
27 A ¶ Tavita steps in and takes the crate.
28 A Laila stands.
29 A Ashworth grabs the crate's other handle.
30 A They all pull, and the crate tips, bars scattering across the sand-dusted floor.
31 A ¶ They freeze.
32 A Nobody bends to gather them.
33 D ASHWORTH [CONT'D] (quietly): They're for Tavita's kid. Back on the Hab. The ration cut starts Monday.
34 A ¶ Tavita lets go.

### SCENE s01889 | INT. SKATE SHOP BACKROOM - NIGHT
Detected names (may be incomplete or contain aliases): DEV, MWANGI, TESSA PRZYBYLSKI, JUN-HO CHOI, MARCY, ROUSSEAU, RADIO ANNOUNCER
* 1 A ¶ Stacked decks.
* 2 A A mini fridge.
* 3 A A busted couch.
* 4 A A radio on the shelf mutters traffic.
5 A ¶ DEVONTE "DEV" MWANGI (17, bleached hair, scraped elbows) tapes grip onto a board.
6 A TESSA PRZYBYLSKI (17, overalls, zine in her back pocket) sits cross-legged on the couch.
7 A JUN-HO CHOI (18, nervous, backpack on) stands by the door.
8 A MARCELLINE "MARCY" ROUSSEAU (16, thrift-store blazer) hunches beside the fridge, phone in hand.
9 D TESSA: Okay, Dev. Jun-ho wants to say something.
10 D DEV: Then he can say it.
11 D JUN-HO: I... got in.
12 D TESSA: Got in where?
13 D JUN-HO: Seoul. Design school. The letter came today.
14 D DEV: Dude. That's huge.
15 D MARCY: When do you leave?
16 D JUN-HO: August.
17 D TESSA: Jun-ho, that's like two months.
18 D JUN-HO: Two and a half.
19 D DEV: Marcy, tell him it's cool.
20 D MARCY (flat): It's cool.
21 D DEV: See? Cool.
22 D JUN-HO: You don't think I'm abandoning you?
23 D TESSA: Jun-ho, you're the only one who can actually draw.
24 D DEV: Tessa.
25 D TESSA: What? It's true. The rest of us just push wood.
26 D MARCY: My phone's buzzing.
27 D DEV: Answer it.
28 D MARCY: It's my mom. She'll just ask where I am.
29 D DEV: So tell her.
30 D MARCY (answering, bright): Hi, Maman. At Dev's. No. No, I'm eating. Okay. Okay. Love you.
31 A ¶ She hangs up.
32 A Everyone looks at her.
33 D MARCY [CONT'D]: What?
34 D TESSA: Marcy. You haven't eaten since lunch.
35 D MARCY: I'm not hungry.
36 D DEV: You said that at lunch.
37 D JUN-HO: I'll get pizza.
38 D MARCY: Don't.
39 D JUN-HO: Marcy.
40 D MARCY: I said don't!
* 41 A ¶ The radio crackles.
* 42 A A voice leaks through.
43 D RADIO ANNOUNCER [V.O.]: ...and that's the weather. Tomorrow clear, with a high of seventy-eight...
44 D DEV: We should go skate. The lot's empty.
45 D TESSA: It's ten at night.
46 D DEV: So it's empty.
47 D JUN-HO: I'm in.
48 D MARCY (after a long beat): Fine. But I'm not wearing a helmet.
49 D TESSA: Marcy.
50 D MARCY: Fine, fine. A helmet.
51 A ¶ Dev grins.
52 A He tosses the board to Jun-ho.

### SCENE s01890 | INT. DEFUNCT CLOWN COLLEGE, DORMITORY HALL - MORNING
Detected names (may be incomplete or contain aliases): PROFESSOR BARNABY QUILLFEATHER, MINNIE FLOCKHART, DOODLE, OKAFOR-LINN, HATTIE, VON BLOOM
* 1 A ¶ Peeling circus-stripe wallpaper.
* 2 A Trunks in the corner.
* 3 A Three oversized shoes on a shoe rack, one of them nesting a pigeon.
4 A ¶ PROFESSOR BARNABY QUILLFEATHER (60s, ringmaster's coat over pajamas, magnificent mustache) sits on a cot in his stocking feet, holding a custard pie in each hand like a man weighing his sins.
5 A Across from him, MINNIE FLOCKHART (30s, her red nose hanging on a string around her neck) stuffs a polka-dot suitcase.
6 A Beside her, DUKE "DOODLE" OKAFOR-LINN (40s, half-face of white greasepaint) retapes a unicycle tire.
7 D BARNABY: Minnie, my dear, you can't leave.
8 D MINNIE: I have a bus ticket, Barnaby.
9 D BARNABY: A bus ticket is a coward's instrument.
10 D DOODLE: It's a Greyhound.
11 D BARNABY: Doodle. Please. Say something to her.
12 D DOODLE: Minnie, don't leave.
13 D MINNIE: Doodle, stop.
14 D BARNABY: I forbid it.
15 D MINNIE: ^I'm thirty-four!
* 16 A ¶ Silence.
17 A Barnaby looks into the pie in his right hand.
18 A Doodle rolls the unicycle forward and back.
19 D BARNABY: Then I shall tell you a story, and you will stay, because the story is true.
20 D MINNIE: Barnaby, it's always the same story.
21 D BARNABY: It is never the same story. It is the same ending.
22 D MINNIE: That's what I said.
23 D BARNABY: Allow me.
24 A ¶ He stands.
* 25 A The cot creaks.
26 A He sets both pies on the footlocker, extremely carefully.
27 D BARNABY [CONT'D]: In nineteen seventy-one, a young man arrived at this very hall with a suitcase, a bad mustache, and a dream. He was told he had no talent. He was told this by a woman who is now deceased and whose pie he now owns. He was told that comedy is a discipline of falling. Do you know what he did?
28 D MINNIE: He fell.
29 D BARNABY: He fell. Every day. For fifty years. And every day he stood up again, because falling is the only part of this profession that is not an act.
30 D DOODLE (sniffling): That's beautiful, Prof.
31 D MINNIE: It's a lovely speech. It's also what you said when the roof leaked.
32 D BARNABY: That, too, was a fall.
33 D MINNIE: Barnaby. They closed the school.
34 D BARNABY: Not in spirit.
35 D MINNIE: In every other way.
36 D BARNABY (a pause): Yes.
* 37 A ¶ The door creaks.
38 A HARRIET "HATTIE" VON BLOOM (70s, severe gray bun, wheeling a suitcase of her own) stands in the doorway.
39 A She looks at the pies, the mustache, the unicycle, the suitcase.
40 D HATTIE: I received your letter.
41 D BARNABY: Hattie.
42 D HATTIE: You said the school was dying. You said you needed a clown who could weep and a clown who could fall.
43 D MINNIE: That's Doodle and me.
44 D HATTIE: I am the clown who can do both.
45 D DOODLE: Prof, who is this?
46 D BARNABY (faint): My former wife.
47 D MINNIE (to Doodle, low): I've never heard of a former wife.
48 D DOODLE (low): Me neither.
49 D HATTIE: Barnaby. Put down your pie.
50 D BARNABY: It's on the footlocker.
51 D HATTIE: Then pick it up and throw it.
52 A ¶ Barnaby looks at her.
* 53 A A long beat.
54 A Then, with the care of a surgeon, he lifts one pie and hands it to her, face-first.
55 D HATTIE [CONT'D] (smiling for the first time): Thank you.
56 A ¶ She sets it on his head.
57 A Minnie closes the suitcase.
58 A She sits.
59 A Doodle starts to laugh.

### SCENE s01891 | INT. BOWLING CENTER, STATE FINALS - EVENING
Detected names (may be incomplete or contain aliases): COACH TERESA BIANCHI-ODEH, CALEB STRUTHERS, PILAR NU, EZ-WADE, FELICITY OKONKWO, OZ, KETTERING, OVER THE PA
* 1 A ¶ Lanes polished to a shine.
* 2 A Overhead scoreboards.
* 3 A A banner reads "REGIONAL CHAMPIONSHIP."
* 4 A The pins crash in the distance.
5 A ¶ COACH TERESA BIANCHI-ODEH (50s, windbreaker, clipboard) paces behind the team's lane.
6 A At the ball return, seniors CALEB STRUTHERS (18, broad) and PILAR NUÑEZ-WADE (17, wiry) wait their turns.
7 A Manager FELICITY OKONKWO (16, headset, stats binder) feeds numbers into a tablet.
8 A And at the end of the lane, anchor OSWALD "OZ" KETTERING (17, braces, shaking hands) rubs chalk on his fingers.
9 D OVER THE PA [V.O.]: Final frame. Carson Valley leads by seven. Carson Valley, you have the lane.
10 D BIANCHI-ODEH: Listen up. Oz, you need a strike. Just a strike. No spare helps us.
11 D OZ: I know, Coach.
12 D CALEB: He knows.
13 D PILAR: Leave him alone.
14 D PILAR: Oz. Breathe.
15 D FELICITY: Percentage of strikes on the left oil pattern is--
16 D BIANCHI-ODEH: Felicity, not now.
17 D FELICITY: Sorry.
18 D PILAR: Oz, you got this.
19 D CALEB: Yeah, Oz, you got--
20 D OZ: Please stop.
21 A ¶ They stop.
22 A Oz takes the ball.
23 A Weighs it.
24 A Steps to the line.
* 25 A A quiet falls.
26 A He draws back, releases.
* 27 A The ball curves, rolls, rolls, hits.
* 28 A Nine pins fall.
* 29 A One wobbles, wobbles, wobbles.
30 D CALEB: Come on.
31 D PILAR: Fall, fall, fall.
32 D FELICITY: Probability of the ten-pin falling is--
33 D PILAR: Felicity.
34 D FELICITY: Shutting up.
* 35 A ¶ The ten-pin stands.
* 36 A Still.
* 37 A Dead still.
38 A Oz stares.
39 A His shoulders slump.
40 D OZ: Sorry, Coach.
41 D BIANCHI-ODEH: Don't be. Take the spare.
42 A ¶ Oz takes the second ball.
43 A Walks to the line.
* 44 A The same quiet.
45 A He lets it go.
* 46 A It rolls straight down the right gutter's edge and clips the ten-pin from the side.
* 47 A It tumbles.
* 48 A Falls.
* 49 A ¶ The scoreboard flashes.
50 A The team explodes.
51 A Caleb hoists Oz into the air.
52 A Pilar howls.
53 A Felicity types a number, then screams.
54 D OVER THE PA [V.O.]: Final score. Brookfield Prep, two-eleven. Carson Valley, two-ten. Brookfield takes the title.
55 A ¶ Everyone freezes.
56 A Slowly, one by one, they turn to Bianchi-Odeh, who is calmly capping her pen.
57 D BIANCHI-ODEH: Pack up.

### SCENE s01892 | INT. FREIGHT ELEVATOR, MUSEUM OF CLOCKS - NIGHT
Detected names (may be incomplete or contain aliases): VERA KOLOSOVA, PETRA LINDGREN-HAYES, BOLT, UCHENNA
* 1 A ¶ Cage steel.
* 2 A Brass fittings.
* 3 A Descending.
4 A ¶ VERA KOLOSOVA (40s, black coveralls) and PETRA LINDGREN-HAYES (40s, black coveralls) share a tool case.
* 5 A Between them, in a silk-lined crate, ticks a golden carriage clock.
6 A BARRY "BOLT" UCHENNA (30s, headset, earpiece) crouches with a laptop.
7 D VERA: Hold it level.
8 D PETRA: I am holding it level.
9 D VERA: She is not holding it level.
10 D BOLT: Hey. Hey. She's right. Ladies, please.
11 D PETRA: Which she?
12 D BOLT: Either one.
* 13 A ¶ A floor counter flickers.
* 14 A B2.
* 15 A B3.
16 D VERA (whispering): Guard's rounds at three-fifteen. We have forty seconds.
17 D PETRA: Thirty-eight now.
18 D BOLT: Thirty-seven.
* 19 A ¶ The elevator shudders.
* 20 A Stops.
* 21 A Lights die.
* 22 A ¶ Silence.
* 23 A A single tick from the clock.
24 D VERA: Don't breathe.
25 D PETRA: ^Don't breathe.
26 D BOLT: I never breathe, ladies. It's a professional habit.
* 27 A ¶ Footsteps overhead.
* 28 A Slow.
* 29 A A flashlight beam slides down the shaft.
30 A The three freeze.
* 31 A The clock ticks.
* 32 A Louder.
* 33 A Louder.
34 D PETRA: Cover it.
35 A ¶ Vera drapes her jacket over the crate.
* 36 A The ticking muffles.
* 37 A The beam drifts, hesitates, fades.
* 38 A Footsteps walk away.
* 39 A ¶ Lights hum back to life.
* 40 A The floor counter reads B4.
41 D BOLT: Forty seconds.
42 D VERA: Twenty-two.
43 D PETRA: Fifteen.
* 44 A ¶ The doors open on a loading dock.
* 45 A Moonlight.
* 46 A A van.

### SCENE s01893 | INT. HOUSEBOAT GALLEY, CANAL - SUNDAY NOON
Detected names (may be incomplete or contain aliases): INES VASCONCELOS, KOFI VASCONCELOS-MENSAH, BRIGITTE VASCONCELOS, LUCAS, ZANELE
* 1 A ¶ Steam on the windows.
* 2 A A pot of stew on a two-ring stove.
* 3 A The deck rocks gently.
* 4 A A table meant for four holds five.
5 A ¶ INES VASCONCELOS (70s, apron, flour to the elbows) stirs.
6 A Her son KOFI VASCONCELOS-MENSAH (40s, glasses) carves bread at the counter.
7 A His sister BRIGITTE VASCONCELOS (40s, silk scarf) sets spoons.
8 A Two kids tumble in from the deck: LUCAS (9, muddy knees) and ZANELE (7, missing a front tooth).
9 D INES: Everybody sit. Everybody. The stew is hot.
10 D LUCAS: Nonna, I'm not hungry.
11 D ZANELE: I am!
12 D KOFI: Wash hands first.
13 D BRIGITTE: Both of them.
14 D LUCAS: We did it in the canal.
15 D BRIGITTE: That is not washing.
16 D ZANELE: It had a duck in it.
17 D KOFI (muttering): Of course it did.
18 A ¶ She holds up two spoons.
19 A He shakes his head.
20 A She sets one down.
21 A He takes the other.
22 D INES: Kofi, did you speak to the landlord?
23 D KOFI: Mama, not at the table.
24 D INES: Everything is at the table. That is what it is for.
25 D BRIGITTE: He said it's fine, Mama. The mooring is paid till spring.
26 D KOFI: I was going to say that.
27 D BRIGITTE: You were going to say it badly.
28 D LUCAS: Can I have the end piece?
29 D ZANELE: No, I want the end piece!
30 D INES: Both of you can have half.
31 D ZANELE: Lucas always gets the big half.
32 D LUCAS: Do not.
33 D KOFI (to the whole room): Okay. Everyone. Quiet for one second.
34 A ¶ They hush.
* 35 A The boat creaks.
* 36 A Somewhere a gull complains.
37 D KOFI [CONT'D]: I'd like to say grace.
38 D INES: Since when do you say grace?
39 D KOFI: Since now. Since the mooring is paid and the stew is hot and nobody fell in the canal this week.
40 D ZANELE: I fell in the canal.
41 D KOFI: Nobody fell in the canal that I saw.
42 D ZANELE: Okay.
43 D BRIGITTE: Say the grace, Kofi.
44 A ¶ He lowers his head.
45 A They all lower theirs, except Zanele, who peeks.
46 A Lucas peeks too.
47 A They catch each other peeking and giggle.
48 D KOFI [CONT'D]: Thank you for this boat, and this stew, and this bread, and these people.
49 D INES: Amen.
50 D BRIGITTE: Amen.
51 D LUCAS: Amen. Can I eat now?
52 D ZANELE: Amen! Can I eat now?
53 D INES: Eat, eat. Slowly.
54 A ¶ They tuck in.
* 55 A For a while there is only the scrape of spoons and the slosh of water against the hull.
56 A Brigitte tears a piece of bread and hands it to Ines, who tastes the stew, frowns, and reaches for salt.
57 D INES [CONT'D] (to herself): Always needs a little more.
58 D KOFI: Mama, it's perfect.
59 D INES: Perfect is a lie we tell cooks.
60 D BRIGITTE: Then we're liars. Pass the salt, Zanele.
61 D ZANELE: It's by Lucas.
62 D LUCAS: Here.
63 A ¶ He slides the salt across.
64 A Ines salts the stew, tastes it again, and nods, and then, with a small private smile, passes the salt back to Zanele.

### SCENE s01894 | INT. CATERING VAN, PARKED BEHIND SYMPHONY HALL - NIGHT
Detected names (may be incomplete or contain aliases): FINA, QUISPE-LARSEN, TREVOR ASANTE, OLIVIA BRANDT, WALLY, DRUMMOND
* 1 A ¶ Metal shelving.
* 2 A Trays of canapés.
* 3 A A thermos.
4 A Four people in black waiter uniforms crowd the back of the van, their tuxedo jackets half-unbuttoned.
5 A ¶ JOSEFINA "FINA" QUISPE-LARSEN (40s, crew boss) unrolls a blueprint on a cooler lid.
6 A TREVOR ASANTE (30s, gloves, a canvas bag) checks a watch.
7 A OLIVIA BRANDT (20s, earpiece, nervous) tucks a cable under her cuff.
8 A And WALLACE "WALLY" DRUMMOND (60s, an actual caterer's apron over the tux) props a tray against the door.
9 D FINA: Vault's under the cello section. Trevor goes in through the green room. Olivia takes the stairs. Wally, you walk the floor with the canapés.
10 D WALLY: I'm not a thief, I'm a caterer.
11 D FINA: Today you're both.
12 D TREVOR: The guard rotates at ten twenty.
13 D OLIVIA: Ten twenty-two. I checked.
14 D TREVOR: It's ten twenty.
15 D OLIVIA: I checked the rotation, not the time.
16 D WALLY: Children. Children.
17 D FINA: We have six minutes. Trevor, the bag.
18 A ¶ Trevor hands her the canvas bag.
19 A She unzips it.
* 20 A Out come four tuxedo vests, each with a small lump sewn in.
21 A She tosses them around.
22 A They catch them, fumble, button up.
23 D OLIVIA: Is this a camera?
24 D TREVOR: It's a microphone. The camera is in Wally's tray.
25 D WALLY: There's a camera in my tray?
26 D TREVOR: There's a camera in the pâté.
27 D WALLY: I'll never serve pâté again.
28 D FINA: Wally, go. Smile. Walk slowly. The vault door opens at ten twenty-six.
29 A ¶ Wally lifts the tray.
30 A Pushes the van door open.
31 A Trevor slips out behind him; Olivia follows; Fina climbs down last, closing the door softly as she goes.
* 32 A ¶ Outside, footsteps crunch gravel.
* 33 A A flashlight beam swings across the van's windshield.
34 A ¶ The four freeze.
35 A Wally lowers the tray.
36 A Trevor holds his breath.
37 A Olivia grips her cuff.
38 A Fina's hand slides to the door latch.
39 D WALLY (whispering): Do I smile?
40 D FINA: Smile.
41 A ¶ He smiles.
* 42 A The beam slides across his face, hesitates, moves on.
* 43 A Gravel crunches away.
44 A Wally exhales so hard his tray shakes.

### SCENE s01895 | INT. BANK OF ARGENTÍ, LOBBY - MORNING
Detected names (may be incomplete or contain aliases): INSPECTOR LENNOX HADDAD, TELLER MARIBEL OSORIO-WYNN, MAN, GRAY HOOD, THADDEUS PEMBROKE-ADEYEMI
* 1 A ¶ Marble floor, brass teller cages, a mural of cranes against a gold sky.
* 2 A A grandfather clock ticks.
* 3 A The room smells of floor wax and cold coffee.
4 A ¶ INSPECTOR LENNOX HADDAD (50s, rumpled tweed, notebook) stands at the center of the lobby, looking up at the mural.
5 A TELLER MARIBEL OSORIO-WYNN (30s, cardigan, lanyard) counts bills with an expert thumb.
6 A A MAN IN A GRAY HOOD (40s, wiry, gloves) leans on the writing desk, apparently filling out a deposit slip.
7 A The bank's manager, MR. THADDEUS PEMBROKE-ADEYEMI (60s, three-piece suit), polishes his monocle behind his desk.
8 D HADDAD: Lovely cranes.
9 D PEMBROKE-ADEYEMI: Painted in 1924. The artist never cashed his fee.
10 D HADDAD: No?
11 D MARIBEL: ^He was paid in kind. He lived upstairs for a year.
12 D PEMBROKE-ADEYEMI: Quite so.
13 A ¶ The man in the gray hood glances up.
14 A Looks at the door.
15 A Looks at Haddad.
16 A Returns to his slip.
17 D HADDAD (mildly): Sir, that's an interesting deposit slip. Third time you've started over.
18 A ¶ The hood doesn't answer.
19 A He tears the slip in half.
20 A Pockets the pieces.
* 21 A The clock ticks once, twice.
22 A Maribel's thumb stops on a bill.

### SCENE s01896 | INT. PLANETARY SURVEY SHIP, BRIDGE - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ELEANOR VOSKUIJLEN, COMMANDER RAJIV ABERNATHY, LIEUTENANT SASHA TEMPLETON-OYELOWO, BROD, PAPADAKIS
* 1 A ¶ A curving window of stars.
* 2 A Four stations, four lit consoles.
* 3 A A klaxon starts mid-conversation.
4 A ¶ CAPTAIN ELEANOR VOSKUIJLEN (50s, silver braid) stands at the center.
5 A COMMANDER RAJIV ABERNATHY (40s) hunches at navigation.
6 A LIEUTENANT SASHA TEMPLETON-OYELOWO (30s) works the comm.
7 A ENSIGN BRODERICK "BROD" PAPADAKIS (20s, wide-eyed) mans the shield board.
8 D VOSKUIJLEN: Report!
9 D ABERNATHY: Asteroid field dead ahead, ma'am. Debris cloud--
10 D TEMPLETON-OYELOWO: Captain, I'm picking up a distress signal inside it--
11 D BROD: Shields at forty percent!
12 D VOSKUIJLEN: Divert power from the forward arrays.
13 D ABERNATHY: Diverting. Captain, the cloud is expanding faster than--
14 D TEMPLETON-OYELOWO: Signal's repeating. Says "last survivor, Aurora Station."
15 D BROD: Thirty percent! Twenty!
16 D VOSKUIJLEN: Hold your nerve, Ensign. Rajiv, can we thread it?
17 D ABERNATHY: Barely. Three seconds, and we'll clip the rim.
18 D VOSKUIJLEN: Then clip it. Sasha, hail the survivor. Tell them we're coming.
19 D TEMPLETON-OYELOWO: Aye, Captain.
* 20 A ¶ The ship shudders.
* 21 A Alarms scream.
* 22 A Then, one by one, they fall silent.
* 23 A The window shows a calm field of drifting rock.
24 A Brod sags over his board.
25 D BROD: Shields... holding.
26 D VOSKUIJLEN: Good. Now find our survivor.

### SCENE s01897 | INT. MOSSY TAVERN INSIDE A HOLLOW OAK - EVENING
Detected names (may be incomplete or contain aliases): PERRY, THISTLEDOWN, MARGERY NETTLEBY, BRYONY OAKENSHAW, GRIM, HOLLOWSTONE
* 1 A ¶ Roots for rafters.
* 2 A Candles in acorn caps.
* 3 A A fire made of glowworms.
* 4 A The room smells of honey and rain.
5 A ¶ LORD PERIWINKLE "PERRY" THISTLEDOWN (60s, dignified, a miniature crown of dew) sits at the table, pouring tea.
6 A His housekeeper, MARGERY NETTLEBY (50s, apron, spectacles), carries a tray of seed-cakes.
7 A The apprentice witch BRYONY OAKENSHAW (16, scorched sleeves) hunches over a book.
8 A And the innkeeper, GRIMBOLD "GRIM" HOLLOWSTONE (70s, enormous beard), polishes a mug that has been polished since spring.
9 D PERRY: Bryony, my dear, put down the book.
10 D BRYONY: I'm almost at the part, Lord Thistledown.
11 D PERRY: Call me Perry. Everyone does.
12 D MARGERY: Not everyone, my lord.
13 D PERRY: Margery.
14 D MARGERY: Perry.
15 D GRIM: Tea's gone cold again, I'd say.
16 D PERRY: It is always cold. You use your own tea.
17 D GRIM: It's the principle.
18 D BRYONY (not looking up): Lord Perry, what did the wizard say when he turned the king into a frog?
19 D PERRY: I'm sure I don't know.
20 D BRYONY: "Nothing. He'd already left."
21 D MARGERY: That's a terrible joke, dear.
22 D BRYONY: It's a terrible book.
23 D GRIM: Would you like to hear a better one?
24 D PERRY: Please, Grim, not the one about the dragon.
25 D GRIM: It's a good one about the dragon.
26 D MARGERY: It has no ending.
27 D GRIM: That's the point of it.
28 A ¶ She sets the tray down.
29 A He leans back.
30 A Bryony closes her book at last.
* 31 A The glowworm fire pulses once.
32 D PERRY: It is a good evening.
33 D MARGERY: It is.
34 D GRIM: It's always a good evening, if nobody notices.
35 D BRYONY: I notice.
36 D PERRY: Then it is a good evening anyway.

### SCENE s01898 | INT. BALLOON-ANIMAL CONVENTION, HOTEL BALLROOM - DAY
Detected names (may be incomplete or contain aliases): CHESTER, BOONSRI, FLO, OYELARAN, DOROTHY PRUITT-AKINS, REG, FAIRCHILD-BANGURA
* 1 A ¶ Fluorescent lights.
* 2 A Folding tables.
* 3 A Vendors sell latex in every color.
* 4 A A banner: "24TH ANNUAL TWIST-A-THON."
5 A ¶ CHESTER "CHUCKLES" BOONSRI (40s, vest covered in pins) sets up a booth.
6 A Beside him, FLORENCE "FLO" OYELARAN (50s, jumpsuit) inflates a pink poodle.
7 A And at the next table, a nervous newcomer, DOROTHY PRUITT-AKINS (30s, accountant's blouse), clutches a pack of balloons as though they might go off.
8 D CHESTER: Welcome to the circuit. First convention?
9 D DOROTHY: Is it that obvious?
10 D FLO: You're holding the balloons like a baby.
11 D DOROTHY: I didn't know how else.
12 D CHESTER: You squeeze them gently at the middle, like so.
13 A ¶ He twists a long yellow balloon into a giraffe in four seconds.
14 A She stares.
15 D DOROTHY: That's astonishing.
16 D FLO: That's Tuesday.
17 D CHESTER: Flo.
18 D FLO: What? It's true.
19 A ¶ A tall figure in a lime-green suit strides up to the booth.
20 A He is SIR REGINALD "REG" FAIRCHILD-BANGURA (60s, silk cravat, a monocle on a chain).
21 A He snaps his fingers.
22 D REG: Chuckles! You owe me a sword.
23 D CHESTER: Reg, I told you, the sword is in the shop.
24 D REG: In the shop? Chester, it's a balloon sword.
25 D CHESTER: It popped.
26 D REG: It popped? The Duelist's Blade, my masterpiece, popped?
27 D FLO: It was a good popping.
28 D REG (to Dorothy): Young lady, you look like someone with an honest face. Has this man ever returned a borrowed balloon?
29 D DOROTHY: I only met him ten minutes ago.
30 D REG: Then he has had ten minutes to wrong you. Wait.
31 D CHESTER: She's new. Be nice.
32 D REG: I am always nice.
33 D FLO: That's a lie.
34 D REG: That's a compliment.
35 A ¶ Dorothy takes a deep breath.
36 A Picks up a red balloon.
37 A Inflates it.
38 A Twists.
39 A Twists.
40 A Holds up a shaky, lopsided dog with three legs.
41 D DOROTHY: Is this... okay?
* 42 A ¶ Silence.
43 A Chester and Flo glance at each other.
44 A Reg pulls out his monocle and inspects it for a long beat.
45 D REG: Madam. It is perfect. A lame dog is the soul of the craft.
46 D DOROTHY: Really?
47 D CHESTER: He's lying.
48 D FLO: He's lying.
49 D REG: I have never lied in my life.
50 D CHESTER: He's lying.
51 A ¶ Dorothy laughs.
52 A She sets the dog on the table, where it promptly rolls off.

### SCENE s01899 | INT. DISUSED SWIMMING POOL, DRAINED - DAWN
Detected names (may be incomplete or contain aliases): TEDDY, WRZESIEN, MERCEDES ARRIAGA-KOWAL, DEZ, ADEWALE-FRIEDMAN
* 1 A ¶ A concrete bowl, cracked and stained, ringed with faded lane markers.
* 2 A Pigeons nest in the diving platform.
* 3 A Light slants through a skylight clouded with grime.
4 A ¶ TEODORA "TEDDY" WRZESIEN (17, wiry, a swimmer's shoulders, a hoodie that says CITY NATATORIUM) stands at the deep end in bare feet, a jump rope coiled around her wrist.
5 A Across the pool, her coach MERCEDES ARRIAGA-KOWAL (50s, whistle, a face carved from patience) sits on a folding chair at the shallow end, a stopwatch resting on her knee.
6 D MERCEDES: Come on, Teddy. Twenty more.
7 D TEDDY: It's drained, Coach. There's no water.
8 D MERCEDES: There's no water, and you still have to move.
9 D TEDDY: Why?
10 D MERCEDES: Because the meet is Saturday and you don't have a pool.
11 A ¶ Teddy loops the rope over her head and begins to skip, the soles slapping the bare concrete.
* 12 A Each landing echoes.
* 13 A The pigeons shift.
14 D MERCEDES [CONT'D]: Knees, Teddy. Higher.
15 D TEDDY: They're at my chin.
16 D MERCEDES: Then your chin goes higher.
17 A ¶ Teddy laughs, losing the rhythm.
* 18 A The rope snags.
19 A She curses.
20 A A figure appears at the pool's edge, backlit: DESMOND "DEZ" ADEWALE-FRIEDMAN (18, letterman jacket, a duffel bag, a scowl).
21 A He descends the pool ladder, rung by rung, and drops onto the floor.
22 D DEZ: You're skipping rope in an empty pool.
23 D TEDDY: You're trespassing.
24 D DEZ: I'm your ride.
25 D TEDDY: I didn't ask for a ride.
26 D DEZ: Mercedes did.
27 A ¶ Teddy looks across the pool.
28 A Mercedes shrugs, not guilty in the slightest.
29 D MERCEDES: Dez drove up from the state academy. He wants to race you.
30 D TEDDY: Race me where?
31 D DEZ: In there.
32 A ¶ He nods at the pool.
33 A Teddy follows his gaze to the dark, cracked bowl.
34 D TEDDY: It's dry.
35 D DEZ: So we run it. Deep end to shallow. Whoever touches the wall first wins.
36 D TEDDY: That's stupid.
37 D DEZ: Scared?
38 D TEDDY: Of a boy who can't swim a mile?
39 D DEZ: I swam a mile Tuesday.
40 D TEDDY: In a lake. With a wetsuit.
41 D DEZ: I'm standing here, aren't I?
42 D MERCEDES: Gentlemen. Lady. Take your marks.
43 A ¶ Teddy tosses the rope.
44 A Dez drops his duffel.
45 A They crouch at the deep end, shoulder to shoulder.
46 A Neither looks at the other.
* 47 A The skylight light brightens a fraction.
48 D MERCEDES [CONT'D]: Set.
49 D TEDDY (low): You're going to lose.
50 D DEZ (low): I know.
51 D MERCEDES: Go.
52 A ¶ They launch.
53 A Feet slap concrete.
54 A Two shapes sprint up the long slope of the pool floor, breath ragged, echoes ricocheting off the tile.
* 55 A For a moment, as the sun hits them, the whole bowl seems to fill with water.

### SCENE s01900 | EXT. FROZEN LAKE, YUKON - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, COLLEEN MACRAE, NATHALIE, NAT
* 1 A ¶ White to every horizon.
* 2 A A snowmobile lies on its side, engine ticking as it cools.
* 3 A Two small figures on the ice.
4 A ¶ STRANGER (30s, orange parka, face wrapped in a scarf) crawls from the wreckage, dragging a pack.
5 A A woman, COLLEEN MACRAE (50s, ranger's jacket, a bleeding temple) kneels over the broken sled.
6 A Both are bundled to the eyes.
7 D STRANGER: Hey! Are you hurt?
8 D COLLEEN: Don't come closer.
9 D STRANGER: I'm just trying to help.
10 D COLLEEN: The ice is cracking. Stay low.
11 D STRANGER: Okay. Okay. I'm down.
12 A ¶ She flattens herself, inching forward on elbows.
13 A Colleen does the same from the other side.
14 D COLLEEN: What's your name?
15 D STRANGER: Nathalie.
16 D COLLEEN: Nathalie what?
17 D NATHALIE: Okafor-Lindqvist. Nat.
18 D COLLEEN: Nat. You were on the sled when it went?
19 D NAT: I was driving.
20 D COLLEEN (a pause): Then it's your fault we're out here.
21 D NAT: Yes, ma'am.
22 D COLLEEN: Don't ma'am me. I'm Colleen.
23 D NAT: Colleen. I can see a cabin. Maybe four hundred yards.
24 D COLLEEN: That's the old trapper's lodge. It's empty. No stove.
25 D NAT: Better than ice.
26 D COLLEEN: Better than nothing.
27 A ¶ She reaches toward Colleen.
* 28 A A hairline crack races between them with a sound like a rifle shot.
29 A They freeze, hands inches apart.
30 D COLLEEN [CONT'D]: Don't move.
31 D NAT: I'm not.
32 D COLLEEN: Slide your pack. Slowly. Toward me.
33 A ¶ Nat pushes it.
* 34 A It slides across the ice, stops beside her knee.
35 A She pulls it in and unzips it.
* 36 A Inside: a coil of rope, a flare gun, a thermos.
37 A She pulls the rope out and knots a loop.
38 D COLLEEN [CONT'D]: I'll throw this. You tie it around your waist. Then I pull.
39 D NAT: And if the ice breaks?
40 D COLLEEN: Then you'll be glad I tied a good knot.
41 A ¶ Colleen throws.
42 A Nat catches.
43 A She ties it.
* 44 A The crack widens.
45 D NAT: Ready.
46 D COLLEEN: Don't look down. Look at me.
47 A ¶ Colleen pulls.
48 A Nat slides, ice groaning beneath.
* 49 A Water seeps up in black ribbons.
* 50 A Three feet.
* 51 A Two.
* 52 A One.
53 A ¶ Colleen's gloved hand closes around Nat's.
54 A They crawl together toward the shore.

### SCENE s01901 | INT. LAUNDROMAT PAYPHONE ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): RAVI, SANDHU-OKORO, KIKO TANAKA-MBEKI, MOTHER
* 1 A ¶ Buzzing light.
* 2 A One payphone.
* 3 A Quarters stacked on the shelf.
4 A ¶ RAVINDRA "RAVI" SANDHU-OKORO (16, duffel on shoulder) grips the receiver.
5 A Beside him, his best friend KIKO TANAKA-MBEKI (16, sweatshirt, a bag of chips) leans on the wall.
6 D MOTHER [V.O.] (tinny, over the line): Ravi? Where are you? It's past midnight.
7 D RAVI: I'm fine, Mom. I'm with Kiko.
8 D KIKO: ^Hi, Mrs. Sandhu!
9 D MOTHER [V.O.]: Is that Kiko? Put him on.
10 D RAVI: He can't. He's, um. Eating.
11 D MOTHER [V.O.]: Ravindra. Come home.
12 A ¶ Ravi looks at his duffel.
13 A Looks at Kiko.
14 A Kiko shrugs and offers a chip.
15 D RAVI (quietly): I'm coming, Mom. I'm just walking slow.
16 A ¶ He hangs up.
17 A Takes a chip.
* 18 A They stand in the buzzing light.

### SCENE s01902 | EXT. SALT FLATS, ABANDONED RADIO STATION - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT OKSANA BILYK, LIEUTENANT AUGUSTIN FOURNIER-DIALLO, PRIVATE SOLOMON ADEYEMI, CORPORAL RUTH TALBOT-KWAN, PRIVATE LIAM O'DWYER-SINGH, ELIAS, MANDELBAUM
* 1 A ¶ Cracked white earth.
* 2 A A rusted mast.
* 3 A Wind that tastes of metal.
4 A ¶ SERGEANT OKSANA BILYK (30s, goggles) crouches by a concrete shack.
5 A LIEUTENANT AUGUSTIN FOURNIER-DIALLO (30s, bandaged hand) checks a map.
6 A PRIVATE SOLOMON ADEYEMI (19, rifle) hugs the wall.
7 A CORPORAL RUTH TALBOT-KWAN (40s, medic's pack) kneels by the wounded.
8 A PRIVATE LIAM O'DWYER-SINGH (20, radio operator) fiddles with a dial.
9 A And at the edge of the dust, a lone figure in a tattered coat waves a white rag: ELIAS "THE PRIEST" MANDELBAUM (60s, gaunt, cassock).
10 D BILYK: Hold fire. He's got a flag.
11 D AUGUSTIN: Could be a trick.
12 D SOLOMON: He's not armed.
13 D RUTH: He's barefoot.
14 D LIAM: Sergeant, I'm getting something. Weak.
15 D BILYK: Later. Solomon, cover left.
16 D SOLOMON: Covering.
17 A ¶ The Priest shuffles closer, hands raised, rag fluttering.
18 D ELIAS: Please. Don't shoot. I'm only a priest.
19 D AUGUSTIN: Prove it.
20 D ELIAS: I have a Bible in my coat.
21 D RUTH: That proves nothing.
22 D ELIAS: I have bread in my other coat.
23 D LIAM: Bread?
24 D ELIAS: Stale. But bread.
25 D BILYK: Elias, was it? Where are the others?
26 D ELIAS: There are no others. Everyone left in the night.
27 D AUGUSTIN: Everyone?
28 D ELIAS: Both armies.
29 A ¶ They stare at him.
* 30 A Silence.
31 A Liam taps the radio.
32 D LIAM: Sergeant. It's an order. Cease-fire, effective oh-six-hundred.
33 D BILYK: What time is it now?
34 D AUGUSTIN: Oh-six-ten.
35 A ¶ Bilyk lowers her rifle.
36 A Solomon lets his drop.
37 A Ruth sits down in the dust, laughing quietly.
38 A Elias hands the bread to the nearest soldier, who takes it without a word.
39 D BILYK: Pack up.
