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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0043.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01384 | INT. SCRAPYARD OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): ROLAND FAYE, NINA SZABO, DUKE HARTWELL
* 1 A ¶ A trailer on cinder blocks.
* 2 A A single bulb.
* 3 A A safe with its door hanging open and empty.
4 A ¶ ROLAND FAYE, 50s, scrapyard owner, sits behind the desk with his hands flat on the blotter.
5 A Across from him, NINA SZABO, 30s, leather jacket, a revolver on her knee, sits very straight.
6 D ROLAND: You were my best driver.
7 D NINA: That's why you sent a stranger to my house?
8 D ROLAND: I didn't send anyone.
9 D NINA: He knew my dog's name.
10 D ROLAND: Everybody knows your dog's name.
11 D NINA: You sold me out for sixty thousand.
12 D ROLAND: I sold you out for a roof.
13 D NINA: Same thing, Roland.
14 D ROLAND: You never had to build a business from a hole in the ground.
15 D NINA: I've been in the hole. I know what it costs.
* 16 A ¶ The trailer door opens behind her.
17 A ¶ DUKE HARTWELL, 40s, fedora, wet shoulders, one hand in his coat, leans in the frame.
18 A He does not smile.
19 D DUKE: Evening.
20 A ¶ Nina doesn't turn.
21 A Her thumb finds the hammer.
22 D NINA: You're late.
23 D DUKE: Traffic.
24 D ROLAND: Duke, don't.
25 D DUKE: Sorry, Roland. The bill's come due.

### SCENE s01385 | EXT. RIVERBANK - ABANDONED MILL - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT MIREILLE DUVAL, PRIVATE OSKAR LINDGREN, WOUNDED SOLDIER, MORTAR
* 1 A ¶ Mist.
* 2 A A rusted waterwheel stands half-sunk in the current.
* 3 A Birdsong where there should be none.
4 A ¶ Three soldiers crouch behind a broken wall.
5 A Mud to the knees.
6 A Eyes red.
7 A ¶ SERGEANT MIREILLE DUVAL, 30s, holds a rifle across her knees and watches the far bank.
8 A ¶ PRIVATE OSKAR LINDGREN, 19, wrings out a sock.
9 A Ruined boots beside him.
10 A ¶ A third figure lies on his back under a tarp, only a hand showing.
* 11 A Breath fogs.
12 A He is the WOUNDED SOLDIER, 20s, pale, one sleeve soaked dark.
13 D OSKAR (whispering): Quiet out there.
14 D MIREILLE: Too quiet.
15 D OSKAR: That's what I said.
16 D MIREILLE: You said "quiet."
17 D OSKAR: Same thing.
18 A ¶ She doesn't smile.
19 A Leans out an inch, scans, retreats.
20 D MIREILLE: Mill's empty. I checked.
21 D OSKAR: Checked what?
22 D MIREILLE: Everything.
23 A ¶ Oskar tugs the dry sock on.
24 A Eases a boot over it.
25 A Winces.
26 A ¶ The wounded man stirs.
27 A Mutters.
28 A His good hand claws at the tarp.
29 D WOUNDED SOLDIER (delirious): Mama... the stove's still on...
30 D OSKAR: He's talking.
31 D MIREILLE: Let him.
32 D OSKAR: Should we give him water?
33 D MIREILLE: Save it.
34 A ¶ She taps a canteen.
* 35 A Hollow.
36 A Oskar nods grimly.
37 D OSKAR (to himself): Three days. Three days since a hot meal.
38 D MIREILLE: Four.
39 D OSKAR: Thank you, Sergeant.
40 A ¶ She almost laughs.
41 A Watches the far bank again.
* 42 A A heron lifts from the reeds and flaps downriver, low over the water.
* 43 A Nothing follows it.
44 D MIREILLE (to both): We cross at dark. Single file. No talking.
45 D OSKAR: And him?
46 D MIREILLE: We carry him.
47 D OSKAR: He's dead weight.
48 D MIREILLE: He's a man.
49 A ¶ The wounded soldier opens his eyes.
50 A Clear for the first time.
51 A He looks at Mireille.
52 D WOUNDED SOLDIER: Sergeant.
53 D MIREILLE: Easy.
54 D WOUNDED SOLDIER: Leave me.
55 D MIREILLE: No.
56 D WOUNDED SOLDIER: I'll slow you.
57 D MIREILLE: You'll shut up.
58 A ¶ Oskar crawls to the wounded man's side.
59 A Presses his palm on the dressing.
* 60 A It's wet.
61 A His face changes.
62 D OSKAR: Sergeant.
63 D MIREILLE: What?
64 D OSKAR: He's bleeding out.
65 A ¶ She looks.
66 A Her jaw sets.
67 A She turns away.
68 A Fingers dig into the stock of the rifle.
* 69 A ¶ The far bank erupts.
* 70 A A MORTAR round shrieks over the water and lands in the mill yard behind them.
* 71 A Brick, mud, black smoke.
72 A ¶ Mireille and Oskar throw themselves flat.
73 A The wounded man gasps.
74 A His hand goes limp.
* 75 A ¶ Another round.
* 76 A Closer.
* 77 A The wall they hide behind splits down the middle.
78 D MIREILLE: Move! Move!
79 D OSKAR: He's gone!
80 D MIREILLE: Take his tags!
81 A ¶ Oskar tears the chain from the dead soldier's neck.
82 A Stuffs it in his jacket.
83 A The two of them scramble, bent double, down the bank toward the waterwheel.
84 D MIREILLE (muttering, rifle up): Merde, merde, merde.
85 A ¶ They splash into the shallows as machine-gun fire stitches the water behind them.
86 D SGT. DUVAL (shouting over the noise): Stay low! Follow me!
87 D OSKAR: Where?
88 D SGT. DUVAL: Anywhere that isn't here!
89 A ¶ She plunges into the current.
90 A He follows, holding his rifle overhead.
91 A Under the waterwheel they vanish into the mist.

### SCENE s01386 | INT. GLOBEX PACKAGING - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): REGIONAL VP BARRETT HOLLOWAY, PRIYA NANDAKUMAR, TOBY ABERNATHY-LIU, CAROL ENGSTROM
* 1 A ¶ Beige cubicles.
* 2 A A ficus dying with dignity.
* 3 A A banner reading SYNERGY STARTS WITH YOU.
4 A ¶ REGIONAL VP BARRETT HOLLOWAY, 50s, stands at a whiteboard with a marker he is holding wrong.
5 A Around him: PRIYA NANDAKUMAR, 30s, analyst, spiral notebook; TOBY ABERNATHY-LIU, 20s, intern, tie knotted like a shoelace; and CAROL ENGSTROM, 60s, receptionist, knitting at her desk without looking up.
6 D BARRETT: Team. Quick huddle. Big news.
7 D PRIYA: Is it layoffs?
8 D BARRETT: It is not layoffs.
9 D TOBY: Is it a reorg?
10 D BARRETT: It's a realignment.
11 D PRIYA: That's a reorg.
12 D BARRETT: It's a reorg with vision.
13 D TOBY: Does vision come with a raise?
14 D BARRETT: Toby, we've talked about the word "raise."
15 D TOBY: You said I could ask.
16 D BARRETT: I said you could think it. Quietly.
17 D CAROL (not looking up): Barrett, line two.
18 D BARRETT: Not now, Carol.
19 D CAROL: It's corporate.
20 D BARRETT: Tell them I'm in a huddle.
21 D PRIYA: He's not in a huddle.
22 D TOBY: ^ Please don't say I'm in a huddle.
23 A ¶ Barrett glares at both of them.
* 24 A The phone rings again.
25 A Carol finally puts down the knitting, answers with a sweet smile, listens, nods, and hangs up.
26 D CAROL: They said the realignment has been realigned.
27 D BARRETT: Meaning?
28 D CAROL: You're the one being laid off.
* 29 A ¶ The ficus drops a leaf.
30 D BARRETT (very calm): Well. That's fantastic news for the team.

### SCENE s01387 | EXT. FLOATING MARKET OF BELLS - DUSK
Detected names (may be incomplete or contain aliases): ILSEBETH CROWE, TALLIS ARVEN
* 1 A ¶ A market built on rafts lashed together across a slow green river, each stall hung with a thousand tiny bells that ring in the evening wind.
* 2 A Lanterns drift on the water.
* 3 A The air tastes of cinnamon and wet rope.
* 4 A ¶ At the center of the flotilla, a single raft has gone quiet.
* 5 A Its awning sags.
* 6 A Its bells hang unmoving, as though holding their breath.
7 A ¶ ILSEBETH CROWE, 40s, in a coat stitched from sailcloth, stands at its edge with a long pole.
8 A Across the water-gap, a smaller raft drifts nearer, poled by TALLIS ARVEN, 20s, barefoot, his hair full of salt.
9 D ILSEBETH (to herself): Steady. Steady.
10 A ¶ She braces.
* 11 A The raft thumps against hers.
12 A Tallis catches a rope and ties it off with the careless speed of one who has done it ten thousand times.
13 D TALLIS: Evening, Captain.
14 D ILSEBETH: Not Captain anymore.
15 D TALLIS: That's not what the river says.
16 D ILSEBETH: The river doesn't say anything.
17 D TALLIS: It says plenty. You just don't listen.
18 A ¶ She turns to the crowd gathered on the neighboring decks.
19 A Fishwives, tinkers, a juggler stilled mid-toss, a child on a father's shoulders.
20 A All watching.
21 D ILSEBETH (to all): Good people of the Bells. A word.
22 A ¶ The crowd murmurs.
* 23 A A bell somewhere rings once, and falls silent.
24 D ILSEBETH [CONT'D]: The river is dropping. Six inches since dawn. The old channel closes in three days.
25 A ¶ Gasps.
26 A Someone drops a basket.
27 D ILSEBETH [CONT'D]: We can wait for rain. Or we can leave tonight.
28 A ¶ A woman near the front calls out.
29 A Ilsebeth lifts a hand.
30 D ILSEBETH [CONT'D]: No. I won't ask you to follow me. I'll ask you to choose.
31 A ¶ She turns, back to Tallis, and lowers her voice.
32 D ILSEBETH [CONT'D] (quiet): Did the ferrymen come?
33 D TALLIS: Yes.
34 D ILSEBETH: How many?
35 D TALLIS: Nine. They'll tow us as far as the weir.
36 D ILSEBETH: And past it?
37 D TALLIS: Past it, we're on our own.
38 A ¶ She nods.
39 A Looks at the water for a long time.
40 A Then she looks up at the awning where the bells hang motionless.
41 D ILSEBETH (muttering): Strange. They always ring when I lie.
42 D TALLIS: Maybe you're not lying.
43 D ILSEBETH: Maybe I'm not.
44 A ¶ She lifts the pole.
45 A Sets it against the planks.
46 A Pushes.
47 A ¶ Across the market, one by one, the ropes are cast off.
* 48 A The bells begin to ring, a slow wave that runs along the whole flotilla, lantern to lantern, raft to raft, until the entire river sings.
49 D TALLIS (grinning): There it is.
50 A ¶ Ilsebeth does not smile.
51 A But she stands straighter, and her hands, on the pole, are steady.

### SCENE s01388 | INT. TELEGRAPH OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): YOUNG OPERATOR, SOUNDER, COLONEL
* 1 A ¶ 1862.
* 2 A A lamp burns low.
* 3 A Wires hum along the ceiling.
* 4 A A key clatters on the desk.
5 A ¶ A YOUNG OPERATOR, 20s, in sleeve garters and a green eyeshade, hunches over the key.
6 A He is the only one in the room.
7 A He taps back an answer, grinning at whatever comes in.
* 8 A ¶ A SOUNDER chatters.
9 A He copies fast.
10 A Reads aloud.
11 D OPERATOR: "Mother recovering. Come home Sunday." Well, that's a relief.
12 A ¶ He taps a reply.
* 13 A Paper curls beneath his fingers.
* 14 A Then the sounder changes tempo.
* 15 A Slow.
* 16 A Cold.
17 A He freezes and copies each letter as it comes.
18 D OPERATOR [CONT'D]: "Enemy cavalry crossing at Harper's Ford. Hold for orders."
19 A ¶ He pulls the paper loose.
20 A Stands.
21 A Sits again.
22 A He reads it over, mouthing the words.
* 23 A ¶ The line crackles.
* 24 A A new voice, ghostly, through the speaker of an experimental telephone beside the key.
25 D COLONEL [V.O.] (over line): Operator! Report!
26 A ¶ He lunges for the receiver, nearly knocking the lamp.
27 D OPERATOR: Sir! Message from Harper's Ford! They've crossed!
28 D COLONEL [V.O.] (over line): How many?
29 D OPERATOR: It doesn't say, sir!
30 D COLONEL [V.O.] (over line): Then find out, son!
31 A ¶ Shaking, he taps.
32 A Waits.
* 33 A The sounder is silent.
34 A He taps again.
* 35 A Silent.
* 36 A ¶ The lamp gutters.
37 A ¶ He sets down the receiver, very gently, and sits with his hands flat on the desk.
38 A After a long moment he speaks without turning.
39 D OPERATOR: Whoever you are on the other end... I hope you ran.
* 40 A ¶ The wire hums on, empty.

### SCENE s01389 | EXT. LAKESIDE DOCK - LATE SUMMER DUSK
Detected names (may be incomplete or contain aliases): JUNE, BAPTISTE, MALCOLM OKONKWO-REYES, NADIA FARHAT, SPUD, KOWALSKI, ROSALIND, ROMILLY PETERS
* 1 A ¶ A weathered dock stretches into a still lake.
* 2 A Mosquitoes hang in gold light.
3 A At the shore end, a bonfire has burned down to red embers, and six teenagers sit in a ragged arc around it, the last evening of the last summer before everything changes.
4 A ¶ JUNIPER "JUNE" BAPTISTE, 17, sits at the dock's far end with her feet in the water, a paperback face-down beside her.
5 A She watches the horizon as though waiting for it to say something.
6 A ¶ At the fire, MALCOLM OKONKWO-REYES, 18, strums a guitar missing a string.
7 A NADIA FARHAT, 17, sprawls on a cooler, eating marshmallows straight from the bag.
8 A BEN "SPUD" KOWALSKI, 16, builds a precarious tower of empty cans.
9 A The twins, ROSALIND and ROMILLY PETERS, 16, share a blanket, whispering, identical down to the chipped nail polish.
* 10 A ¶ No one has said what they are all thinking.
* 11 A Every few minutes, someone almost does, and the moment passes.
12 D NADIA (through marshmallow): We should do something.
13 D MALCOLM: We are doing something.
14 D NADIA: Sitting is not doing.
15 D SPUD: I'm doing architecture.
16 D ROSALIND: It's a can tower.
17 D SPUD: It's a monument.
18 D ROMILLY: To what?
19 D SPUD: To us.
* 20 A ¶ Quiet.
* 21 A The guitar strums a flat chord.
22 A Somebody laughs, a short and exhausted laugh, and then the embers pop.
23 A ¶ June stands.
24 A She pads along the dock toward them, wet footprints darkening the boards.
25 A She stops at the edge of the firelight.
26 D JUNE: I leave Thursday.
* 27 A ¶ Nobody speaks.
* 28 A The tower of cans collapses with a clatter.
29 A Spud doesn't flinch.
30 D MALCOLM: Thursday?
31 D JUNE: My mom moved it up.
32 D NADIA: You said Saturday.
33 D JUNE: I know what I said.
34 A ¶ She sits on the cooler's edge.
35 A Takes a marshmallow from Nadia's bag, rolls it in her fingers, doesn't eat it.
36 D ROMILLY: Where is it again?
37 D JUNE: Portland.
38 D ROSALIND: That's not so far.
39 D JUNE: It's three states.
40 D ROSALIND: That's not so far.
41 A ¶ Malcolm sets the guitar aside.
42 A He looks at the ground.
43 A His hands are trembling a little, and he buries them between his knees.
44 D MALCOLM: We could drive up. Visit.
45 D JUNE: You don't have a car.
46 D MALCOLM: Spud has a car.
47 D SPUD: I have a bicycle.
48 D NADIA: You have a lawn mower you ride.
49 D SPUD: It's a very good lawn mower.
50 A ¶ They laugh.
* 51 A It dies quickly.
52 A June squeezes the marshmallow into a pale pellet and lets it fall.
53 D JUNE: I'm not good at this.
54 D ROMILLY: Nobody is.
55 D JUNE: I thought I'd have something to say.
56 D NADIA (gently): You don't have to.
57 A ¶ June nods.
58 A She wipes her face with the heel of her hand.
59 A Rosalind and Romilly lift the blanket and open it.
60 A June crawls in between them and they close it again, a single bundle of knees and tangled hair.
61 A ¶ Malcolm picks up the guitar.
62 A Finds the one chord he knows.
63 A Plays it, over and over, not well.
* 64 A ¶ The fire sinks lower.
* 65 A Across the lake, the last light bleeds out of the sky and a single loon calls once.
* 66 A Nobody answers it.

### SCENE s01390 | INT. ARBITRATION HALL - ANTEROOM - MORNING
Detected names (may be incomplete or contain aliases): PATRICIA OYELARAN-WEISS, DESHAWN MCALLISTER, ARTHUR KESSLER-BOYD, LOUISE FAIRCHILD, BAILIFF, MARGUERITE DELACROIX
* 1 A ¶ A cramped waiting room.
* 2 A Five plastic chairs.
* 3 A A water cooler gurgling.
4 A ¶ PATRICIA OYELARAN-WEISS, 40s, litigator, rehearses an opening to the wall.
5 A Beside her, her junior, DESHAWN MCALLISTER, 20s, sorts exhibits with shaking hands.
6 D PATRICIA (to Deshawn): Breathe.
7 D DESHAWN: I am.
8 D PATRICIA: Out. Not in.
9 A ¶ Across the room, ARTHUR KESSLER-BOYD, 60s, opposing counsel, doesn't look up from his phone.
10 A His client, LOUISE FAIRCHILD, 50s, grips her purse.
11 D LOUISE (muttering): It'll be fine, it'll be fine.
* 12 A ¶ The door swings open.
13 A A BAILIFF enters.
14 A ¶ MARGUERITE DELACROIX, 70s, silver bob, black robe, strides in behind him, and everybody stands.
15 D MARGUERITE (to the room): Sit. All of you.
16 A ¶ They sit.
17 A She remains standing.
18 A Opens a file.
19 D MARGUERITE [CONT'D]: Counsel. Before we begin, someone has been shredding documents.
20 A ¶ Arthur's phone slips.
21 A Louise stops breathing.

### SCENE s01391 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): MAMA ROSALIE, TUCKER, BEN, KNOCK, MAN, AMOS
* 1 A ¶ Pancakes burn.
* 2 A Smoke curls from the pan.
3 A ¶ MAMA ROSALIE, 40s, dishtowel on her shoulder, flips the pan.
* 4 A Too late.
* 5 A Black.
6 D MAMA ROSALIE: Boys! Breakfast!
* 7 A ¶ Thundering feet.
8 A TUCKER, 10, and BEN, 8, skid in, socks sliding.
9 D TUCKER: It's on fire!
10 D BEN: It's not on fire. It's crispy.
11 D MAMA ROSALIE: Sit.
12 A ¶ They sit.
13 A Tucker pokes a pancake with a fork.
* 14 A It crunches.
* 15 A ¶ A KNOCK at the screen door.
16 A Everyone stops.
17 A ¶ A MAN in a rumpled suit stands on the porch, hat in hand, a battered suitcase at his feet.
18 A Forty-ish, kind eyes, sunburned nose.
19 D MAN: Morning, folks.
20 A ¶ Mama Rosalie's face goes slack.
21 D MAMA ROSALIE: Amos?
22 D TUCKER: Who's that?
23 A ¶ The man steps inside.
24 A Sets down the suitcase.
25 D AMOS: Hello, Tuck.
26 A ¶ Tucker slides off his chair.
27 A Edges behind his mother.
28 D BEN: Is that Daddy?
29 A ¶ Amos kneels, arms open.
30 A Ben looks at his mother.
31 A She nods, barely.
32 A He runs.

### SCENE s01392 | INT. PROBATE COURT - CHAMBERS - DAY
Detected names (may be incomplete or contain aliases): JUDGE ELEANOR VANDERHOOF, BRAXTON WHITCOMBE, CLEMENTINE WHITCOMBE-ADAMS, HORACE PINKNEY, ODETTE LAURENT, FINN HARGROVE
* 1 A ¶ A paneled room that smells of lemon polish and old paper.
* 2 A Bookshelves climb to the ceiling, heavy with leather volumes no one has opened in decades.
* 3 A A radiator knocks in the corner.
* 4 A Through a tall window, bare maples shiver against a gray sky.
5 A ¶ JUDGE ELEANOR VANDERHOOF, 70s, sits behind a walnut desk with her glasses pushed to the top of her head.
6 A Before her, the five heirs of the Whitcombe estate perch on mismatched chairs: the eldest, BRAXTON WHITCOMBE, 50s, in a tailored suit; his sister, CLEMENTINE WHITCOMBE-ADAMS, 40s, twisting a rope of pearls; the lawyer, HORACE PINKNEY, 60s, sweating in tweed; a cousin, ODETTE LAURENT, 30s, silent; and a young man, FINN HARGROVE, 20s, who has just been revealed as the old man's secret son.
7 D ELEANOR: The will is clear.
8 D BRAXTON: Which one?
9 D ELEANOR: The last one.
10 D CLEMENTINE: There was no last one.
11 D HORACE: There was.
12 D BRAXTON: ^ There was not!
13 D CLEMENTINE: ^ Horace, you assured us!
14 A ¶ The judge raises one finger.
15 A The room obeys.
16 D ELEANOR: Mr. Pinkney. Produce it.
17 A ¶ He opens his briefcase with trembling hands and draws out a single cream envelope.
18 A ¶ Odette, in the corner, finally looks up.
19 A Her eyes meet Finn's.
20 A She gives the faintest nod.

### SCENE s01393 | INT. SAFE HOUSE - BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): AGENT NADEZHDA KOVACS, LUCIEN BRASSARD, TAVITA SEFO, MARGOT FENWICK, UNKNOWN MALE, HANDLER
* 1 A ¶ A bare concrete room.
* 2 A A table, six folding chairs, a bank of dead monitors.
* 3 A A phone sits in the center on speaker.
4 A ¶ AGENT NADEZHDA KOVACS, 40s, at the head.
5 A LUCIEN BRASSARD, 50s, beside her.
6 A Across, three more: TAVITA SEFO, 30s; MARGOT FENWICK, 60s; and a nervous young man in a stolen hoodie, UNKNOWN MALE, 20s, who has not given a name.
7 D HANDLER [V.O.] (over speaker): Status.
8 D NADEZHDA: All present. The package is secure.
9 D HANDLER [V.O.] (over speaker): Is he talking?
10 D NADEZHDA: Not yet.
11 D HANDLER [V.O.] (over speaker): Make him.
12 A ¶ She mutes the line.
13 A Turns to the young man.
14 D NADEZHDA [CONT'D]: They won't wait much longer. You understand that.
15 D UNKNOWN MALE: I understand I didn't do anything.
16 D LUCIEN: Everyone in this room did something.
17 D UNKNOWN MALE: I drove a car.
18 D MARGOT: To where?
19 D UNKNOWN MALE: A warehouse. Pier nine. I didn't ask what was inside.
20 D TAVITA: Who told you to drive?
21 D UNKNOWN MALE: A guy. Short. Gold tooth.
22 D NADEZHDA: His name?
23 D UNKNOWN MALE: Dmitri. Everybody called him Dmitri.
24 D LUCIEN: Dmitri Volkov.
25 D UNKNOWN MALE: That's him.
26 A ¶ Lucien and Nadezhda exchange a look.
27 A Margot rises and pours water into a paper cup, sets it in front of the boy.
28 D MARGOT: Drink.
29 D TAVITA: Tell us about the pier.
30 D UNKNOWN MALE: There were crates. Eight. Stenciled with a bird.
31 D NADEZHDA: What kind of bird?
32 D UNKNOWN MALE: A heron. No. A crane.
33 D LUCIEN: Crane.
34 D UNKNOWN MALE: And there was a woman.
35 D NADEZHDA: Describe her.
36 D UNKNOWN MALE: Red coat. She never spoke. Dmitri was scared of her.
* 37 A ¶ The phone crackles.
38 A Nadezhda unmutes.
39 D HANDLER [V.O.] (over speaker): Kovacs. We have a name.
40 D NADEZHDA: Go ahead.
41 D HANDLER [V.O.] (over speaker): The woman in the red coat. Margot Fenwick.
* 42 A ¶ Silence.
43 A Everyone turns.
44 A ¶ Margot sets down the pitcher.
45 A Folds her hands.
46 A Smiles, almost tenderly.
47 D MARGOT: Oh, dear.

### SCENE s01394 | INT. HOSPITAL - NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): AMARA ESEOGHENE, CHARGE NURSE LEOPOLDO FIGUEROA
* 1 A ¶ Dim amber light.
* 2 A Incubators in a long row, each one a small glowing aquarium.
* 3 A Monitors beep in soft, uneven rhythm.
4 A ¶ DR. AMARA ESEOGHENE, 30s, in scrubs and clogs, charts at the central station.
5 A She has been awake for twenty hours and carries it well.
6 A ¶ CHARGE NURSE LEOPOLDO FIGUEROA, 50s, silver at the temples, wheels a cart down the aisle.
7 D LEOPOLDO: Bed six is fussing.
8 D AMARA: Her sats?
9 D LEOPOLDO: Ninety-one. Dropping a little.
10 D AMARA: Bring me the suction.
11 A ¶ He wheels it over.
12 A She leans into the incubator, gentle hands, and clears the tiny airway.
* 13 A The monitor steadies.
14 D AMARA [CONT'D]: There. Good girl.
15 D LEOPOLDO: Dr. Eseoghene.
16 D AMARA: Mm.
17 D LEOPOLDO: Bed three.
18 A ¶ She glances across.
* 19 A Bed three's alarm has started a quiet chirp.
* 20 A The numbers there are climbing.
* 21 A Not the right way.
22 D AMARA: Heart rate?
23 D LEOPOLDO: One-eighty.
24 D AMARA: Temperature?
25 D LEOPOLDO: Thirty-eight point four.
26 A ¶ She is already moving.
27 A Pulls the stethoscope from her neck, bends over the incubator.
28 D AMARA: He's septic. Cultures now, and start the antibiotics.
29 D LEOPOLDO: Which?
30 D AMARA: Ampicillin and gentamicin. Standard.
31 D LEOPOLDO: Dosing?
32 D AMARA: Weight-based. Check the chart.
33 A ¶ Leopoldo hesitates.
34 A His voice is very quiet.
35 D LEOPOLDO: Doctor. The mother is on the phone.
36 D AMARA (not turning): Tell her we're doing everything.
37 D LEOPOLDO: She's asking for a priest.
38 A ¶ Amara stops.
39 A Slowly straightens.
* 40 A The monitor beeps.
41 D AMARA: Call chaplaincy.
42 D LEOPOLDO: Already did.
43 A ¶ They both speak at once.
44 D AMARA: Get the dose.
45 D LEOPOLDO: ^ Prepare the line.
46 A ¶ They look at one another.
47 A Amara nods, and together they bend over the tiny crib.

### SCENE s01395 | INT. CLOCKTOWER - MECHANISM ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOMASZ REDDING, DISPATCHER, LEONIDAS PARK, MIRA VASQUEZ-TANAKA
* 1 A ¶ Brass gears the size of cartwheels grind overhead.
* 2 A Pendulum weights swing in the dark.
* 3 A A single caged lamp throws shadows across oak beams.
4 A ¶ TOMASZ REDDING, 40s, ex-cop, rain-soaked, hunches over a battered radio on a workbench.
5 A He twists the dial.
* 6 A Static.
* 7 A A woman's voice breaks through, thin and urgent.
8 D DISPATCHER [V.O.] (over radio): Redding, are you in position?
9 D TOMASZ: Three flights up. It's colder than a morgue.
10 D DISPATCHER [V.O.] (over radio): Is the package there?
11 A ¶ He scans the room.
* 12 A A steel case sits in the shadow beneath the great gear.
13 A He crosses and lifts it.
* 14 A Heavier than it looks.
15 D TOMASZ: Got it.
16 D DISPATCHER [V.O.] (over radio): Don't open it.
17 D TOMASZ: Wasn't going to.
18 D DISPATCHER [V.O.] (over radio): Redding. Someone knows you're there.
19 A ¶ Tomasz freezes.
20 A Slowly sets the case down.
21 A Draws a pistol from his coat, thumbs the safety.
* 22 A ¶ The trapdoor in the floor creaks.
23 A A hand appears on the rim, then a head.
24 A He aims.
25 A Does not fire.
26 A ¶ LEONIDAS PARK, 30s, climbs up out of the stairwell in a delivery uniform, breathing hard, both hands raised.
27 A He is soaked to the skin.
28 D LEONIDAS: Don't shoot. I work here.
29 D TOMASZ: At midnight?
30 D LEONIDAS: Maintenance. Somebody has to oil the gears.
* 31 A ¶ From the dark beyond the pendulum, a woman's laugh.
32 A ¶ MIRA VASQUEZ-TANAKA, 30s, in a black raincoat, steps from behind a beam.
33 A She holds a small silver gun, steady as a surgeon.
34 A She is smiling.
35 D MIRA: That's very good, Leo.
36 A ¶ Leonidas lowers his hands.
37 A Smiles back.
38 A He turns to Tomasz.
39 D LEONIDAS: Sorry, friend.
40 D TOMASZ (to the radio): Dispatcher. You hearing this?
* 41 A ¶ Static.
* 42 A Nothing.
43 A The radio has been switched off, and somewhere in the shadows, Mira's thumb rests on a small black remote.
* 44 A ¶ The great gear above them shifts and drops one tooth.
* 45 A The whole tower shudders.

### SCENE s01396 | INT. FAMILY MINIVAN - PARKED OUTSIDE AN AMUSEMENT PARK - DAY
Detected names (may be incomplete or contain aliases): LORENZO CASTELLANOS, ABIGAIL, PEPPER
* 1 A ¶ Hot sun on the windshield.
* 2 A A cooler on the back seat.
* 3 A A crumpled map with a coffee ring.
* 4 A The air conditioner wheezes.
5 A ¶ LORENZO CASTELLANOS, 40s, in the driver's seat, grips the wheel and stares ahead.
6 A His wife, ABIGAIL, 40s, sits beside him with a crossword she is not doing.
7 A In the back, their daughter, PEPPER, 11, kicks the seat in front of her in steady, bored rhythm.
8 D PEPPER: Are we going in?
9 D LORENZO: In a minute.
10 D PEPPER: You said that ten minutes ago.
11 D LORENZO: And I meant it ten minutes ago.
12 A ¶ Abigail glances at him.
13 A Says nothing.
14 A She taps her pencil on the page.
15 D PEPPER: Mom, are we going in?
16 D ABIGAIL: Your father is thinking.
17 D PEPPER: About what?
18 D ABIGAIL: About whether we can afford it.
19 D LORENZO: That's not what I said.
20 D ABIGAIL: It's what you meant.
21 D LORENZO: I meant I'd like a minute.
22 D ABIGAIL: You've had eleven.
23 A ¶ He releases the wheel.
24 A She sets down the crossword.
25 A Pepper stops kicking.
26 D PEPPER: Is something wrong?
27 D LORENZO: No.
28 D ABIGAIL: Yes.
29 A ¶ Lorenzo shoots her a look.
30 A She holds it.
31 D ABIGAIL [CONT'D]: She's old enough.
32 D LORENZO: She's eleven.
33 D ABIGAIL: She's eleven and she has eyes.
34 D PEPPER: What's going on?
35 D LORENZO: Nothing's going on. Daddy just lost his job on Tuesday.
* 36 A ¶ Silence.
* 37 A The air conditioner wheezes.
38 A Pepper's face goes very still.
39 D PEPPER: Oh.
40 D LORENZO: It's going to be fine.
41 D PEPPER: Did you do something?
42 D LORENZO: No. They closed the whole plant.
43 D PEPPER: Everyone?
44 D LORENZO: Everyone.
45 D PEPPER: So it wasn't you.
46 D LORENZO: It wasn't me.
47 A ¶ Pepper nods.
48 A Studies her hands.
49 A After a beat she unbuckles, climbs between the front seats, and wedges herself into the gap, pressing her head against his shoulder.
50 D PEPPER: Can we still go in?
51 D LORENZO: We have the tickets.
52 D ABIGAIL: We paid for them in March.
53 D PEPPER: Then it's free.
54 D LORENZO: That's not how that works.
55 D PEPPER: It's how it works for me.
56 A ¶ He starts to laugh.
57 A It's cracked, half a sob, and Abigail puts a hand on his arm.
58 A Pepper looks between them.
59 D PEPPER [CONT'D]: Dad, are you crying?
60 D LORENZO: No. I'm sweating. It's hot.
61 D PEPPER: You're crying.
62 D LORENZO: A little.
63 A ¶ She wipes his cheek with her sleeve.
64 A He lets her.
65 A Abigail drops her head back against the seat and laughs, wet and helpless.
66 D ABIGAIL: All right. Everyone out.
67 D LORENZO: What about the cooler?
68 D ABIGAIL: Leave it.
69 D PEPPER: Can I ride the big one?
70 D LORENZO: The big one?
71 D PEPPER: The one with the loop.
72 D LORENZO: You're not tall enough.
73 D PEPPER: I'll stand on my toes.
74 D LORENZO: They measure at the ankle.
75 D PEPPER (grinning): Then I'll cheat.
76 A ¶ The three of them clamber out.
* 77 A The doors slam.
78 A Pepper takes off across the lot at a dead run.
79 A Lorenzo and Abigail follow, side by side, his hand reaching for hers.
80 A ¶ Halfway there, Abigail stops dead.
81 A Turns.
82 D ABIGAIL: Did you lock the van?
83 A ¶ Lorenzo looks at the keys.
84 A At the van.
85 A Back at her.
86 D LORENZO: Does it matter?
87 A ¶ She thinks about it.
88 A Starts to laugh again, and they run after their daughter, leaving the minivan wide open under the sun.

### SCENE s01397 | INT. GRANDMOTHER'S ATTIC - EVENING
Detected names (may be incomplete or contain aliases): HAZEL, GUS, RAFAELA, GRANDMA
* 1 A ¶ Dust motes in slanted light.
* 2 A Steamer trunks, a dress form, a rocking horse missing one ear.
3 A ¶ HAZEL, 12, rummages through a trunk with fierce concentration.
4 A Behind her, her little brother GUS, 6, hides under a sheet draped over a chair.
5 A A third figure, their cousin RAFAELA, 14, leans in the doorway with her arms folded.
6 D HAZEL (to herself): It has to be here.
7 A ¶ She pulls out a lace shawl.
8 A Tosses it.
* 9 A A feather boa.
* 10 A A sock.
11 D RAFAELA: Grandma said not to touch anything.
12 D HAZEL: She said not to break anything.
13 D RAFAELA: Same thing.
14 D HAZEL: It really isn't.
* 15 A ¶ The sheet rustles.
16 A Gus peeks out.
17 D GUS (to all of them): I'm a ghost.
18 D HAZEL: You're a pest.
19 D GUS: Boo.
20 D RAFAELA: Gus, come out of there.
21 A ¶ He doesn't.
22 A She steps over.
23 A Lifts a corner of the sheet.
24 A He squeals and swats her hand away.
25 A ¶ Hazel finds it.
* 26 A A small tin box, rusted at the hinge.
27 A She holds it up to the light, breathing hard.
28 D HAZEL: Got it.
29 D RAFAELA: Don't open it.
30 D HAZEL: Why not?
31 D RAFAELA: Because she'll know.
32 D HAZEL (muttering): She already knows everything.
33 A ¶ Hazel pries it open.
* 34 A Inside, folded neatly, a stack of old letters tied with a faded ribbon.
35 A She lifts the top one.
36 A Reads the first line.
37 A Her eyes widen.
38 A ¶ She looks up.
39 A Gus is silent under his sheet.
40 A Rafaela has stopped moving.
* 41 A ¶ From downstairs, a voice calls up, warm and unhurried.
42 D GRANDMA [O.S.]: Children? Dinner!
43 A ¶ All three freeze.
44 A Hazel snaps the tin shut.

### SCENE s01398 | EXT. RAILWAY CUTTING - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN HALVARD STRAND, CORPORAL IBRAHIM DAOUD, PRIVATE LENKA VESELY, FRITZ, ACKERMANN, PRISONER, SERGEANT MAEVE O'DONNELL, ANSELM
* 1 A ¶ Frost on the ballast.
* 2 A A burned-out locomotive lies on its side across the tracks, still ticking as the metal cools.
* 3 A Moonlight on the rails.
4 A ¶ A squad of six crouches in the lee of the wreck.
5 A CAPTAIN HALVARD STRAND, 40s, kneels with a map held under a red-filtered torch.
6 A CORPORAL IBRAHIM DAOUD, 30s, scans the embankment through a rifle scope.
7 A PRIVATE LENKA VESELY, 20s, holds a radio handset to her ear and mouths silent words.
8 A FRIEDRICH "FRITZ" ACKERMANN, 20s, a stretcher-bearer, wraps a bandage around the thigh of a gaunt figure who has not spoken since they found him in the mud: a PRISONER in a torn gray coat.
9 A SERGEANT MAEVE O'DONNELL, 50s, the oldest of them, rolls a cigarette she will not light and watches the prisoner's hands.
10 D HALVARD: Three kilometers to the bridge.
11 D IBRAHIM: They'll have it covered.
12 D HALVARD: They'll have everything covered.
13 A ¶ Lenka lowers the handset.
14 A Shakes her head.
* 15 A No signal.
16 D MAEVE (to herself): Of course there isn't.
17 A ¶ The prisoner lifts his head.
18 A Looks at Maeve for the first time.
19 A His eyes are pale and amused.
20 D PRISONER: You will not make the bridge.
21 D FRITZ: He talks.
22 D HALVARD: Quiet.
23 D PRISONER: I can lead you. A shorter way.
24 D HALVARD: Why would you?
25 D PRISONER: My name is Anselm. I was a railwayman. This line was mine.
26 A ¶ Halvard folds the map.
27 A Studies the man.
28 A Looks to Maeve, who gives the smallest shrug.
29 D ANSELM: There is a service tunnel. Under the cutting. It comes out two hundred meters from the bridge.
30 D IBRAHIM: It's a trap.
31 D ANSELM: It is a tunnel.
32 D LENKA: Captain, I'd rather trust him than the road.
33 D HALVARD: You'd rather trust a man in a German coat.
34 D ANSELM: It is not a German coat.
35 D HALVARD: Then whose is it?
36 D ANSELM: Mine.
37 A ¶ Maeve lights the cigarette after all.
38 A Draws on it once, hands cupped around the ember.
39 A Exhales slowly.
40 D MAEVE: Let him lead.
41 D HALVARD: Sergeant.
42 D MAEVE: If he walks us into a gun, I shoot him first.
43 D ANSELM: That is fair.
44 A ¶ Halvard folds the torch away.
45 A Rises.
46 A The squad rises with him, silent, shouldering packs and weapons.
47 A Fritz hauls Anselm to his feet, and the prisoner, limping, leads the line down the embankment toward a small round hole in the rock.
48 A ¶ At its mouth, he turns back to the group and, for the first time, smiles.

### SCENE s01399 | INT. SNOW CAVE - NIGHT
Detected names (may be incomplete or contain aliases): CALLUM TREMBLAY, INGRID VOSSBERG, SEUN, ADEYEMI
* 1 A ¶ A hollow dug into a drift, barely large enough for three.
* 2 A The roof glows faintly blue from a single stub of candle.
* 3 A Condensation drips from an icicle fringe.
* 4 A ¶ Packs, ropes, a dented stove.
* 5 A The wind sounds like a distant crowd.
6 A ¶ CALLUM TREMBLAY, 40s, expedition leader, frost in his beard, lies propped against the wall with his leg stretched awkwardly before him, wrapped in a sleeping bag.
7 A He has the calm of a man who has already made peace with something.
8 A ¶ INGRID VOSSBERG, 30s, climber, her jacket half open and her face raw from wind, sits cross-legged, melting snow in a tin cup over the flame.
9 A ¶ OLUWASEUN "SEUN" ADEYEMI, 20s, the youngest, hugs his knees in the corner, eyes huge, a ski mask pulled up over his forehead.
10 D CALLUM: How long was I out?
11 D INGRID: Four hours.
12 D CALLUM: Feels like four minutes.
13 D INGRID: That's the cold. It lies.
14 D CALLUM: Seun. You all right?
15 D SEUN: I'm fine.
16 D CALLUM: You're a terrible liar.
17 D SEUN: I'm cold.
18 D CALLUM: Everybody's cold.
19 D INGRID: Drink this.
20 A ¶ She hands Callum the tin cup.
21 A He sips.
22 A Passes it to Seun, who drinks and coughs.
23 D CALLUM: We had a good summit.
24 D INGRID: We did.
25 D CALLUM: The light at the top.
26 D INGRID: I saw it.
27 D SEUN: I didn't. I had my eyes closed.
28 D CALLUM: For the whole thing?
29 D SEUN: For most of it.
30 A ¶ Callum laughs, and it turns into a cough.
31 A Ingrid waits it out.
* 32 A The candle flickers.
33 D CALLUM: Listen. If the weather holds, you two go down at first light.
34 D INGRID: We all go down.
35 D CALLUM: I'm slowing you.
36 D INGRID: You're our leader.
37 D CALLUM: Which is why I'm telling you.
38 D SEUN: No.
39 D CALLUM: Seun--
40 D SEUN: I'm not leaving you.
41 D CALLUM: That's not a decision you get to make.
42 D SEUN: Watch me.
* 43 A ¶ A beat.
44 A Callum studies him with something like pride.
45 D CALLUM: Where did you find this one, Ingrid?
46 D INGRID: A bus station in Nairobi.
47 D CALLUM: Good bus station.
48 D SEUN: It was a good bus.
* 49 A ¶ The candle gutters.
50 A Ingrid shields it with her palm.
51 A The three of them watch the little flame in silence, and outside the wind drops, for the first time in hours, to almost nothing.

### SCENE s01400 | INT. FUNERAL HOME - VIEWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): THEODORA ACHTERBERG, GABRIEL ACHTERBERG, SEBASTIAN ACHTERBERG, MAEVE KIRWAN-SOTO, ARCHIBALD PELLEGRINI
* 1 A ¶ Pale carpet, folding chairs in rows, a coffin at the front under a spray of white lilies.
* 2 A Muffled organ music from a hidden speaker.
* 3 A A table of finger sandwiches no one has touched.
4 A ¶ THEODORA ACHTERBERG, 60s, black dress, stands at the casket with one hand on its edge, her face composed in the way of someone who has practiced.
5 A Her sons stand apart: the elder, GABRIEL ACHTERBERG, 40s, rigid in a dark suit, jaw clenched, by the guest book; the younger, SEBASTIAN ACHTERBERG, 30s, unshaven, tie askew, near the exit with his phone in his hand.
6 A In the second row, a stranger in a rain-soaked coat, MAEVE KIRWAN-SOTO, 30s, sits very straight with a toddler asleep against her shoulder.
7 A And at the back, leaning on a cane, the old family friend ARCHIBALD PELLEGRINI, 80s, watches them all with milky, intelligent eyes.
8 A ¶ Sebastian glances at the stranger, and at the toddler.
9 A Gabriel follows his gaze and the muscle in his cheek jumps.
10 A Theodora does not turn her head.
11 A She smooths a ribbon on the casket with her thumb, and her other hand drifts to the edge of the lilies, crushing a petal between two fingers.
12 D GABRIEL: Who invited her?
13 D SEBASTIAN: Nobody.
14 D GABRIEL: She can't be here.
15 D SEBASTIAN: She's already here, Gabe.
16 A ¶ Gabriel crosses the aisle in three long strides.
17 A Maeve looks up, calm.
18 A The child stirs and settles.
19 D GABRIEL: I'm going to have to ask you to leave.
20 D MAEVE: I came to pay respects.
21 D GABRIEL: You didn't know him.
22 D MAEVE: I did.
23 D GABRIEL (low): Not like that.
24 D MAEVE: Exactly like that.
25 A ¶ Theodora crosses the room, heels silent on the carpet.
26 A She stops between them.
27 A Looks at Maeve, then at the toddler, a long and unreadable look, and then she touches the child's hair with the back of one finger.
28 D THEODORA: What is her name?
29 D MAEVE: Dorothea.
30 A ¶ Theodora closes her eyes.
31 A When she opens them, they are wet and furious and kind all at once.
32 D THEODORA: After his mother.
33 D GABRIEL: ^ Mother, don't.
34 D SEBASTIAN: ^ Mom, let it go.
35 D THEODORA (to the room): Sit down. All of you.
36 A ¶ They sit, one by one.
37 A Archibald, by the door, lowers himself slowly into a chair and sets his cane across his knees.
* 38 A The organ music swells and then fades.
39 A Theodora takes the empty seat beside Maeve, and puts her arm around the sleeping child's back.

### SCENE s01401 | EXT. MOUNTAIN PASS - GUN POSITION - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN YEVGENY ROSTOV, LIEUTENANT BEATRIZ SALAZAR, SERGEANT KOFI MENSAH, CORPORAL DALTON PIKE, PRIVATE ANNELIESE VOGT, TOMAS, SHELL
* 1 A ¶ Snow.
* 2 A Rock.
* 3 A A barricade of sandbags.
4 A ¶ CAPTAIN YEVGENY ROSTOV, 40s, fur collar, studies the valley through binoculars.
5 A Beside him, LIEUTENANT BEATRIZ SALAZAR, 30s, cleans a sidearm.
6 A SERGEANT KOFI MENSAH, 40s, shoulders a crate.
7 A CORPORAL DALTON PIKE, 20s, shivers.
8 A PRIVATE ANNELIESE VOGT, 19, chews her lip.
9 A And a boy soldier, TOMAS, 16, grips a radio.
10 D YEVGENY: Quiet.
* 11 A ¶ Wind.
* 12 A A distant engine.
13 D BEATRIZ: They're early.
14 D YEVGENY: They always are.
15 A ¶ Kofi sets down the crate.
16 A Pries it open.
* 17 A Grenades.
18 D KOFI: Dawn special.
19 D DALTON: Can't feel my fingers.
20 D KOFI: Then you'll feel nothing when they hit.
21 D ANNELIESE: That's not funny.
22 D KOFI: It's not meant to be.
23 A ¶ Tomas holds up the radio.
24 A His voice cracks.
25 D TOMAS: Captain! Sir! They say two columns!
26 D YEVGENY: Which flank?
27 D TOMAS: Both!
28 A ¶ Yevgeny lowers the binoculars.
* 29 A The engine grows.
30 D BEATRIZ: We hold.
31 D KOFI: ^ We hold.
32 A ¶ Both look at each other.
33 A A grim, small smile.
* 34 A ¶ A SHELL screams in.
* 35 A White geyser.
* 36 A The barricade rattles.
* 37 A Snow rains down on all of them.
38 A ¶ Dalton throws himself flat.
39 A Anneliese screams.
40 A Tomas drops the radio.
41 A Yevgeny stands, completely still, watching the ridge.
42 D YEVGENY: Positions!
43 A ¶ They scramble.

### SCENE s01402 | INT. FEDERAL COURTHOUSE - JURY DELIBERATION ROOM - DAY
Detected names (may be incomplete or contain aliases): GUS, PELLETIER, DELPHINE OKAFOR-ROSS, BUZZ, TEMPLETON, ISADORA FLINT, BAILIFF
* 1 A ¶ A long oak table.
* 2 A Water pitcher.
* 3 A A window with the blinds half drawn.
* 4 A Legal pads scattered like leaves.
5 A ¶ Four jurors remain: a retired schoolteacher, a night-shift nurse, a mechanic, and a young law student.
* 6 A They have been here since nine.
7 A ¶ AUGUSTINE "GUS" PELLETIER, 60s, retired teacher, sits at the head with his reading glasses in his lap.
8 A DELPHINE OKAFOR-ROSS, 40s, nurse, rubs her temples.
9 A MARCUS "BUZZ" TEMPLETON, 50s, mechanic, leans back until his chair creaks.
10 A And ISADORA FLINT, 20s, law student, sits ramrod straight, pen poised.
11 D GUS: We've been going in circles.
12 D BUZZ: We've been going in squares.
13 D DELPHINE: Buzz, please.
14 D BUZZ: I'm just saying. Different shape.
15 D ISADORA: Gus, can I propose something?
16 D GUS: Of course, Isadora.
17 D ISADORA: We take a fresh vote. Anonymous. Written.
18 D BUZZ: We did that.
19 D ISADORA: We did a show of hands.
20 D BUZZ: Same thing.
21 D ISADORA: It really isn't.
22 A ¶ Delphine tears four slips from a legal pad.
23 A Passes them around.
* 24 A Pens scratch.
* 25 A Slips are folded and slid across the table.
26 A ¶ Gus gathers them.
27 A Unfolds one.
28 A Another.
29 A Reads.
30 A His eyebrows lift.
31 D GUS: Three guilty. One not.
32 D BUZZ: Who's the holdout?
33 D DELPHINE: It's anonymous, Buzz.
34 D BUZZ: I can count. It's you, Delphine.
35 D DELPHINE: It is not.
36 D BUZZ: Then it's you, Isadora.
37 D ISADORA: I voted guilty.
38 D BUZZ: So did I. So that leaves...
39 A ¶ All three turn slowly to look at Gus.
40 A He sets down the slips.
41 D GUS: Yes.
42 D BUZZ: You?
43 D GUS: Me.
44 D DELPHINE: Gus, the evidence--
45 D GUS: Was very good. I know.
46 D ISADORA: Then why--
47 D GUS: Because I taught that boy. Fifteen years ago.
* 48 A ¶ Silence.
* 49 A The window blinds tick against the sill.
50 D BUZZ: You never said.
51 D GUS: I wasn't asked.
52 D ISADORA: That's grounds for a mistrial.
53 D GUS: Possibly.
54 D DELPHINE: You should tell the judge.
55 D GUS: I will.
56 D BUZZ (muttering): Well, hell.
57 A ¶ Gus stands.
* 58 A His chair scrapes.
59 A He takes his glasses from his lap and walks to the door, one hand on the frame.
60 D GUS: Delphine, Buzz, Isadora. You have been fair. Thank you.
61 A ¶ He knocks twice on the door.
* 62 A The lock clicks.
63 A A BAILIFF opens it.
64 D GUS [CONT'D]: Bailiff. Please tell Judge Hanratty I need a word.
* 65 A ¶ The door closes behind him.
66 A The three jurors sit in silence.
67 D ISADORA: Well.
68 D DELPHINE: Well.
69 D BUZZ: Anyone want a sandwich?
70 A ¶ Delphine laughs, once, surprised.
71 A Isadora, despite herself, smiles.
72 A Buzz pushes back his chair, stretches, and the three of them let out a breath they have been holding all day.

### SCENE s01403 | INT. CATERING TRUCK - PARKED BEHIND A WEDDING TENT - DAY
Detected names (may be incomplete or contain aliases): CHEF BARNABUS TSUKAMOTO, PETRONELLA VOSKUIJLEN, DEXTER IYAMU, LAVINIA CROFT, REGGIE, PRIMROSE
* 1 A ¶ Steel counters.
* 2 A Trays of canapés.
* 3 A A cake in four tiers lashed to the floor with bungee cords.
4 A ¶ CHEF BARNABUS TSUKAMOTO, 50s, tall white hat, stands at the center of it all.
5 A Sweat drips off his nose into a bowl of crab dip.
* 6 A Nobody mentions it.
7 A ¶ He pushes the bowl across the counter to his sous-chef, PETRONELLA VOSKUIJLEN, 30s, who takes it with a face like stone.
8 A ¶ Behind them, bartender DEXTER IYAMU, 20s, shakes a shaker with the dead-eyed rhythm of a metronome.
9 A And at the door, the wedding planner, MS. LAVINIA CROFT, 40s, taps her earpiece, eyes darting.
10 D LAVINIA (tight smile): Is the cake ready?
11 D BARNABUS: It's ready.
12 D LAVINIA: Is it level?
13 A ¶ Barnabus looks at the cake.
* 14 A The cake leans, slightly, toward the door.
15 A Dexter stops shaking.
16 D BARNABUS: Level enough.
17 A ¶ Petronella sets the dip down and, without a word, slides a wooden spoon under the bottom tier.
18 A Barnabus clears his throat.
19 D LAVINIA: I'm hearing ten minutes.
20 D BARNABUS: We'll be there in nine.
21 D LAVINIA: Ten.
22 D BARNABUS: Nine and a half.
23 A ¶ Lavinia nods.
24 A Taps her earpiece.
25 A Her eyes flick to the cake again, and then to Barnabus, and she goes out.
* 26 A The door swings shut.
* 27 A ¶ Silence.
28 A Then Dexter exhales.
29 D DEXTER: She knows.
30 D PETRONELLA: She doesn't know.
31 D DEXTER: She knows.
32 D BARNABUS: She suspects.
33 A ¶ Petronella jams another spoon under the tier.
* 34 A The cake groans.
* 35 A A sugar rose slides off the top and drops onto the floor.
36 A ¶ Everyone stares at it.
37 A Dexter picks it up.
38 A Eats it.
39 D BARNABUS [CONT'D]: Dexter.
40 D DEXTER: Evidence.
41 A ¶ Barnabus closes his eyes.
42 A Pinches the bridge of his nose.
43 A His hat has slumped sideways.
* 44 A ¶ A KNOCK.
45 A The door cracks open and a head pops in.
46 A THEODORE "REGGIE" PRIMROSE, 30s, the groom, white tuxedo, a flushed and dazzled grin.
47 D REGGIE: Hey! Just wondering how's it going?
48 D PETRONELLA: Fine.
49 D DEXTER: Wonderful.
50 D BARNABUS: Magnificent.
51 A ¶ Reggie beams.
52 A Looks at the cake.
53 A His smile slowly falters.
54 D REGGIE: Is it... meant to lean?
* 55 A ¶ Nobody breathes.
* 56 A The cake sags another inch.
57 D BARNABUS: It's a Pisan reference.
58 A ¶ Reggie considers this.
59 A Then nods, slowly, delighted.
60 D REGGIE: Oh. Oh, that's brilliant.
61 A ¶ He gives them two thumbs up and withdraws.
* 62 A The door closes.
63 A ¶ They stare at each other.
64 A Dexter reaches for a bottle.
65 A Petronella reaches for a spoon.
66 A And together, they lift the cake.

### SCENE s01404 | INT. PAWNSHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MOE, LASALLE, ZOFIA KRAWCZYK, RECORDING
* 1 A ¶ Shelves of guitars, watches, and wedding rings under a single hanging bulb.
* 2 A A poker table with a half-played hand still on it.
3 A ¶ MORDECAI "MOE" LASALLE, 50s, pawnbroker, shuffles a deck, humming.
4 A Across from him, a young woman, ZOFIA KRAWCZYK, 20s, drums her fingers.
5 D MOE: Zofia. Sweetheart. You came alone.
6 D ZOFIA: Like you said.
7 D MOE: Good girl.
8 D ZOFIA: I'm not your girl, Moe.
9 D MOE: Everyone's somebody's girl.
10 A ¶ He deals.
11 A She doesn't touch her cards.
12 D MOE [CONT'D] (to the empty room): Anyone else want in?
* 13 A ¶ Silence.
14 A She smiles, thin.
15 D ZOFIA: You think I'm stupid.
16 D MOE: I think you're tired.
17 D ZOFIA: I'm tired of you, Moe.
18 A ¶ She reaches under the table.
19 A Moe's shuffling stops.
20 D MOE (muttering): Oh, don't.
21 A ¶ Zofia lays a small recorder on the felt.
22 A Presses play.
23 D RECORDING [V.O.]: ...and I told him, if the Kessler job goes wrong, it's on Zofia.
24 A ¶ Moe stares at the recorder.
25 A Then, very slowly, he laughs.
26 D MOE: Smart girl.

### SCENE s01405 | INT. VINEYARD TASTING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): CLAUDETTE ARMSTRONG-BEAUMONT, GREGOR VANDERWAAL
* 1 A ¶ Golden light through tall windows.
* 2 A Rows of oak barrels line the back wall.
* 3 A A long bar of reclaimed wood, a few empty glasses, a bucket of ice.
4 A ¶ CLAUDETTE ARMSTRONG-BEAUMONT, 30s, in a linen shirt, wipes down the bar.
5 A She hums.
6 A She's happy to be alone.
* 7 A ¶ The door chimes.
8 A In steps GREGOR VANDERWAAL, 30s, sunglasses on his head, a messenger bag across his chest.
9 A He pauses on the threshold, as if he has forgotten what he came for.
10 D CLAUDETTE: We're closed.
11 D GREGOR: I know.
12 D CLAUDETTE: The sign says closed.
13 D GREGOR: I read the sign.
14 D CLAUDETTE: And?
15 D GREGOR: I wanted to say something to you.
16 A ¶ She keeps wiping.
17 A Slower now.
18 A Her back stiffens, and her eyes find his reflection in the glass behind the bar.
19 D CLAUDETTE: Then say it.
20 D GREGOR: Can I sit?
21 D CLAUDETTE: Suit yourself.
22 A ¶ He sits on a stool two down from where she works.
23 A Sets down his bag.
24 A Straightens it.
25 A Straightens it again.
26 D GREGOR: I've rehearsed this for eleven months.
27 D CLAUDETTE: Then it should be perfect.
28 D GREGOR: It isn't.
29 D CLAUDETTE: Go on.
30 D GREGOR: When you left, I told everyone it was mutual.
31 D CLAUDETTE: It was.
32 D GREGOR: It wasn't.
33 D CLAUDETTE: I said it was.
34 D GREGOR: You said it because I couldn't.
35 A ¶ She folds the rag.
36 A Lays it flat.
37 A Stares at it.
38 D CLAUDETTE: I got a job in Napa. I took it.
39 D GREGOR: I know.
40 D CLAUDETTE: You could have asked me to stay.
41 D GREGOR: I was afraid you'd say yes.
42 D CLAUDETTE: That's absurd.
43 D GREGOR: I know.
44 D CLAUDETTE: What were you afraid of?
45 D GREGOR: That you'd stay and resent me.
46 D CLAUDETTE: I wouldn't have.
47 D GREGOR: You would have, a little.
48 A ¶ She almost smiles.
49 A Catches it.
50 A Turns to the barrels, hands flat on the counter, her back to him.
51 D CLAUDETTE: It's a good vintage this year.
52 D GREGOR: I'm sure it is.
53 D CLAUDETTE: I made the blend myself.
54 D GREGOR: Of course you did.
55 D CLAUDETTE: Do you want to taste it?
* 56 A ¶ A long beat.
57 A He doesn't answer.
58 A She turns.
59 A Takes down a glass, pours a splash of dark red, and slides it across the bar.
60 A ¶ He lifts it.
61 A Smells.
62 A Tastes.
63 A His eyes close.
64 D GREGOR: Plums.
65 D CLAUDETTE: And?
66 D GREGOR: Something smoky.
67 D CLAUDETTE: Cedar. From the barrel.
68 D GREGOR: It's wonderful.
69 D CLAUDETTE: It's slightly overworked.
70 D GREGOR: Don't undersell it.
71 D CLAUDETTE: Don't flatter me.
72 D GREGOR: Claude.
73 D CLAUDETTE: Don't call me that.
74 D GREGOR: Claudette.
75 D CLAUDETTE: Yes.
76 D GREGOR: Did you see my letters?
77 D CLAUDETTE: I saw them.
78 D GREGOR: Did you read them?
79 A ¶ She turns away again.
80 A Reaches under the bar.
81 A Brings out a shoebox, wrapped in twine, its lid curled from handling.
82 A She sets it between them.
83 A ¶ He stares at it.
84 A She stares at him.
85 A Neither moves.
86 D CLAUDETTE [CONT'D]: All of them.
87 A ¶ His hand reaches out.
88 A Covers hers.
* 89 A The box sits beneath their joined fingers.
* 90 A ¶ The door chimes again behind them.
91 A A delivery man in a brown uniform sticks his head in, sees the pair of them frozen, and quietly withdraws.

### SCENE s01406 | INT. APARTMENT - KITCHEN - DAWN
Detected names (may be incomplete or contain aliases): BERNADETTE OYELARAN-STACK, NURSE
* 1 A ¶ A small kitchen.
* 2 A Linoleum.
* 3 A A kettle on the stove, steam rising.
* 4 A Two mugs on the counter, one chipped.
* 5 A A coat hangs on the back of the door, a man's coat, gray wool.
6 A ¶ BERNADETTE OYELARAN-STACK, 60s, in a bathrobe, stands at the sink with her hands under the tap.
* 7 A The water runs a long time.
8 A She doesn't wash anything.
* 9 A ¶ The phone on the wall rings.
* 10 A Once.
* 11 A Twice.
* 12 A Three times.
13 A She lets it.
14 A Finally she dries her hands on the robe, reaches over, and picks it up.
15 D BERNADETTE: Hello.
16 D NURSE [V.O.] (over phone): Mrs. Stack? This is Carol, from the hospice.
17 D BERNADETTE: Yes.
18 D NURSE [V.O.] (over phone): I'm so sorry to call so early.
19 D BERNADETTE: That's all right.
20 D NURSE [V.O.] (over phone): He passed about an hour ago. Very peacefully.
21 A ¶ Bernadette nods.
22 A Looks at the coat on the door.
23 A Looks at the two mugs.
24 D BERNADETTE: Thank you for telling me.
25 D NURSE [V.O.] (over phone): Would you like us to send someone?
26 D BERNADETTE: No. Not yet.
27 D NURSE [V.O.] (over phone): Is there anyone with you?
28 D BERNADETTE: I'm fine.
29 A ¶ She hangs up.
30 A Stands very still.
* 31 A The kettle begins to whistle, thin and rising.
32 A ¶ She turns off the burner.
33 A Takes the chipped mug from the counter.
34 A Pours.
* 35 A The tea steams.
36 A She sets it in front of the empty chair at the table and sits across from it.
* 37 A ¶ The whistle fades.
38 A She wraps both hands around the other mug and holds it close.

### SCENE s01407 | INT. VICTORIAN SEANCE PARLOR - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODILE FONTAINE-VANCE, ALISTAIR DRAKE, PRUDENCE MILLWARD, VOICE
* 1 A ¶ Velvet drapes, a round table, a crystal ball veiled in black gauze.
* 2 A A single candle gutters.
* 3 A Rain taps the windows.
4 A ¶ MADAME ODILE FONTAINE-VANCE, 50s, turban and shawl, sits with her palms flat on the table, eyes closed.
5 A Across from her, ALISTAIR DRAKE, 40s, widower, grips the edge of his chair.
6 A And in the corner, her assistant, a nervous girl of twenty, PRUDENCE MILLWARD, tends a hidden gramophone.
7 D ODILE: Spirits of the beyond. We call upon you.
* 8 A ¶ The candle flickers.
* 9 A A low moan sounds from beyond the drapes.
10 D ALISTAIR (whispering): Is it her?
11 D ODILE: Hush.
* 12 A ¶ The moan rises.
* 13 A The table shudders.
14 A Alistair's knuckles whiten.
15 D VOICE [V.O.] (hollow, distant): Alistair...
16 A ¶ He gasps.
17 A Half rises.
18 D ALISTAIR: Margaret?
19 D VOICE [V.O.] (hollow, distant): I am here, my love.
20 A ¶ Prudence, in the corner, goes pale.
21 A She mouths at Odile, shaking her head.
22 A Not me.
23 A Odile's eyes snap open.
24 A She stares at the gramophone, which is silent.
* 25 A ¶ The voice comes again, deeper, nearer.
26 D VOICE [V.O.] (hollow, distant): Tell the fraud to stop.
27 A ¶ Odile's hands fly from the table.
28 A Prudence knocks over her stool.
29 D ALISTAIR (slowly): That's not funny, Madame.
30 D ODILE: It is not me.
* 31 A ¶ The candle blows out.
* 32 A Darkness.
* 33 A Somewhere a window bangs open, and the drapes snap like sails.

### SCENE s01408 | INT. STATE SUPREME COURT - APPELLATE CHAMBER - DAY
Detected names (may be incomplete or contain aliases): CHIEF JUSTICE OKSANA PETRENKO, DESMOND CARUTHERS, NADINE ASHWORTH-KIM
* 1 A ¶ Marble, mahogany, a high bench.
* 2 A Cameras off.
* 3 A A single pitcher of water sweats at the lectern.
4 A ¶ CHIEF JUSTICE OKSANA PETRENKO, 60s, white hair pinned tight, sits alone on the bench with a pen balanced between two fingers.
5 A At the lectern, DESMOND CARUTHERS, 50s, rumpled suit, sweats through his notes.
6 A At the state's table, NADINE ASHWORTH-KIM, 40s, charcoal suit, a thick binder squared before her.
7 D DESMOND: Your Honor, the statute is plain.
8 D OKSANA: Plain to whom, Mr. Caruthers?
9 D DESMOND: To any reasonable reader.
10 D OKSANA: Are you reasonable?
11 D DESMOND: I try to be.
12 D OKSANA: That's not an answer.
13 D DESMOND: It's the only honest one I have.
14 A ¶ She almost smiles.
15 A Taps the pen on the bench.
16 D OKSANA: Take me through section four.
17 D DESMOND: Section four governs notice.
18 D OKSANA: And your client?
19 D DESMOND: Received none.
20 D OKSANA: Not even a letter?
21 D DESMOND: A letter was mailed. It was never delivered.
22 D OKSANA: Mailed to where?
23 D DESMOND: An address where my client hadn't lived in six years.
24 D OKSANA: Whose fault was that?
25 D DESMOND: The county's. They had the forwarding card.
26 A ¶ Nadine's pen stops moving.
27 A Oksana sees it.
28 D OKSANA: Ms. Ashworth-Kim. You have something to say?
29 D NADINE: Not yet.
30 D OKSANA: Then Mr. Caruthers continues.
31 D DESMOND: Thank you. Your Honor, if the court allows this, thousands of cases reopen.
32 D OKSANA: I'm aware of that.
33 D DESMOND: And I'd ask the court to consider whether thousands of cases were ever properly closed.
* 34 A ¶ A silence.
35 A Oksana sets down her pen.
36 D OKSANA: That's a bold sentence.
37 D DESMOND: It's a true one.
38 D OKSANA: Sit down, Mr. Caruthers.
39 A ¶ He gathers his papers and retreats.
40 A Nadine rises, walks to the lectern, and opens her binder.
41 A She does not look at it.
42 D NADINE: May it please the court.
43 D OKSANA: It might. Go ahead.
44 D NADINE: The forwarding card was misfiled.
45 D OKSANA: By whom?
46 D NADINE: By a clerk who no longer works for the county.
47 D OKSANA: That's not an excuse.
48 D NADINE: It's not meant as one. It's an explanation.
49 D OKSANA: They sound similar from up here.
50 D NADINE: They feel different from down here.
51 A ¶ Oksana's eyebrow lifts.
52 A Desmond, at his table, almost laughs and then stops himself.
53 D NADINE [CONT'D]: The state asks the court to apply the harmless error doctrine.
54 D DESMOND: ^ It was not harmless!
55 D NADINE: ^ It was administrative!
56 D OKSANA: Both of you.
57 A ¶ They stop.
* 58 A The room is very quiet.
59 D OKSANA [CONT'D]: Mr. Caruthers, your client lost his house.
60 D DESMOND: Yes.
61 D OKSANA: Ms. Ashworth-Kim. He lost his house.
62 A ¶ Nadine's hand tightens on the lectern.
63 A For a moment her composure slips.
64 D NADINE (quietly): Yes. He did.
65 A ¶ Oksana lowers her glasses.
66 A Looks at one, then the other.
67 D OKSANA: We'll take it under advisement.
68 A ¶ She raps once with her pen and rises.
69 A The two lawyers rise with her, and for a moment, across the length of the room, they look at each other like the last two people in a lifeboat.

### SCENE s01409 | INT. BOXING GYM - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MANUEL, SERRANO, IGNATIUS OBI-MARTINEZ, TALL MAN, AMBROSE
* 1 A ¶ Steam.
* 2 A Rusted lockers.
* 3 A A bare bulb swings from a chain.
* 4 A The smell of liniment and old leather.
5 A ¶ MANUEL "THE ANVIL" SERRANO, 30s, sits on a bench with gloved hands in his lap, staring at the floor.
6 A His trainer, IGNATIUS OBI-MARTINEZ, 60s, kneels in front of him, taping a wrist with absent care.
7 A ¶ A TALL MAN in a camel coat leans in the doorway.
8 A No one introduced him.
9 A He has been watching for a while.
10 D IGNATIUS: Stay loose.
11 A ¶ Manuel nods.
12 A His eyes do not leave the floor.
13 D IGNATIUS [CONT'D]: Breathe through the nose.
14 A ¶ Manuel breathes.
15 A Ignatius tears the tape with his teeth.
16 A ¶ The Tall Man clears his throat.
17 D TALL MAN: Mr. Serrano.
18 A ¶ Manuel doesn't look up.
19 A Ignatius's hands stop.
20 D TALL MAN [CONT'D]: My name is Ambrose Vance. I represent the promoter.
21 D IGNATIUS: He's got a fight.
22 D AMBROSE: I'm aware.
23 D IGNATIUS: So you can wait outside.
24 D AMBROSE: I can't.
* 25 A ¶ The bulb swings.
* 26 A Manuel's shadow slides across the lockers.
27 A Ignatius rises, one knee cracking, and plants himself between them.
28 D IGNATIUS: Say what you came to say.
29 D AMBROSE: It's about the third round.
30 A ¶ Ignatius and Manuel both go still.
* 31 A The steam hisses from a pipe.
32 D AMBROSE [CONT'D]: Mr. Serrano goes down in the third. The money is already placed.
33 D IGNATIUS: ^ Get out.
34 D MANUEL: ^ Get out.
35 A ¶ They say it at the same time, quiet and level.
36 A Ambrose lifts both hands, palms out, and steps back through the doorway into the corridor.
37 A ¶ Ignatius shuts the door.
38 A Leans against it with his eyes closed.
39 A Manuel finally lifts his head.
40 A His gloved hands, slowly, curl into fists.

### SCENE s01410 | INT. CORPORATE PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): SOLVEIG HARTMANN-OKORO, VOICE
* 1 A ¶ Concrete pillars striped in yellow.
* 2 A Fluorescent tubes flicker above rows of empty parking bays.
* 3 A A distant elevator dings.
* 4 A Somewhere, a drip.
5 A ¶ SOLVEIG HARTMANN-OKORO, 40s, in a camel coat with a laptop bag over one shoulder, walks fast between the pillars, keys splayed between her knuckles.
6 A She looks like someone who has done this walk a hundred times and never liked it.
* 7 A ¶ Her phone buzzes.
8 A She answers on the second ring, putting it to her ear.
9 D SOLVEIG: Yes.
10 D VOICE [V.O.] (over phone): Are you at your car?
11 D SOLVEIG: Nearly. Who is this?
12 D VOICE [V.O.] (over phone): A friend. Do you see the gray sedan?
13 A ¶ She stops.
14 A Scans the garage.
* 15 A A gray sedan sits two rows ahead, engine off.
16 D SOLVEIG: I see it.
17 D VOICE [V.O.] (over phone): Don't go near it.
18 D SOLVEIG: Why not?
19 D VOICE [V.O.] (over phone): Because there's a man in the back seat.
20 A ¶ Her breath catches.
21 A She does not move.
22 A Under the flicker of the lights she sees, very faintly, a shape in the window of the sedan.
23 D SOLVEIG (whispering): How do you know?
24 D VOICE [V.O.] (over phone): Because I'm standing behind you.
25 A ¶ She spins.
* 26 A Nothing.
* 27 A Just a pillar and a puddle of oil, shining.
28 A ¶ The phone drops from her ear.
* 29 A Behind her, the sedan's door clicks open.

### SCENE s01411 | INT. REGIONAL AIRPORT - GATE B - NIGHT
Detected names (may be incomplete or contain aliases): FINN LARKSPUR-MBEKI, MINA, OSTROWSKI, GRANDPA TOBIAS, GRANDMA ESME ADEBAYO, TANNOY
* 1 A ¶ Empty chairs, a dim terminal.
* 2 A A departure board flickers: ALL FLIGHTS DELAYED.
* 3 A Rain streaks the windows onto a runway of dark glass.
4 A ¶ FINN LARKSPUR-MBEKI, 30s, rumpled, sits with a coffee and a boarding pass, scribbling in a notebook.
5 A ¶ Across the aisle, WILHELMINA "MINA" OSTROWSKI, 30s, clutches a small suitcase and stares at the floor, thumb worrying a loose ring on her finger.
6 A ¶ Two seats down, an old couple, GRANDPA TOBIAS and GRANDMA ESME ADEBAYO, 70s, share a thermos, bickering softly.
7 D TANNOY [V.O.]: Attention passengers. Flight 418 to Denver is delayed until further notice.
* 8 A ¶ A collective groan.
9 A Finn caps his pen.
10 D FINN (to the room): Of course it is.
11 A ¶ Mina looks up.
12 A Their eyes meet.
13 A She glances away first.
14 D FINN [CONT'D] (to Mina): Long night.
15 D MINA: Seems so.
16 D FINN: You headed to Denver?
17 D MINA: Eventually.
18 D FINN: Me too. Business. You?
19 D MINA: A wedding.
20 D FINN: Whose?
21 D MINA: Mine.
22 A ¶ Finn blinks.
23 A Nods slowly.
24 A Looks at the ring on her finger.
25 D FINN: Congratulations?
26 D MINA: Ask me in Denver.
27 A ¶ He smiles.
28 A She almost does too.
29 A The old couple, across the aisle, are unabashedly listening.
30 D ESME (to Tobias): I told you she was nervous.
31 D TOBIAS: She's not nervous, she's sulking.
32 D ESME: Nervous.
33 D TOBIAS: ^ Sulking.
34 A ¶ They glare at each other.
35 A Mina and Finn share a quiet look, and for the first time, both of them laugh.
36 D FINN: What's his name?
37 D MINA: Gordon.
38 D FINN: Gordon.
39 D MINA: He's very kind.
40 D FINN: That's a good thing.
41 D MINA: It is.
42 D FINN: But?
43 D MINA: But nothing. He's kind.
44 A ¶ She stands.
45 A Walks to the window, her reflection lost against the rain.
46 A Finn watches her back.
47 A He tears a page from his notebook, folds it, hesitates, then puts it in his pocket.
48 D TANNOY [V.O.]: Attention. Flight 418 will board in fifteen minutes.
* 49 A ¶ Silence.
50 A Everyone looks up at the speaker.
51 D MINA (to the window): Fifteen minutes.
52 D FINN: Enough time for a coffee.
53 D MINA: Enough time for anything.
54 A ¶ She turns.
55 A Their eyes meet again.
56 A She crosses back and sits beside him, not across from him.
57 D MINA [CONT'D]: Tell me something true.
58 D FINN: I don't like Denver.
59 D MINA: That's not it.
60 D FINN: I'm going because I'm afraid to stay.
61 D MINA: Of what?
62 D FINN: Of the place I'm supposed to be.
63 A ¶ She breathes out.
64 A Her hand finds his on the armrest.
65 A For a moment neither moves.
66 D TANNOY [V.O.]: Final boarding call for Flight 418.
67 A ¶ The old couple stand, collecting thermos and coats.
68 A Esme pauses at the end of the aisle, looks down at the pair of them.
69 D ESME: Go on, dears. Or don't. But decide.
70 D TOBIAS: Esme.
71 D ESME: ^ What? I'm eighty. I get to say.
72 A ¶ She takes his arm and leads him toward the jetway.
73 A Finn and Mina watch them go.
74 A Then Mina slides the ring off her finger, slowly, and holds it in her open palm between them.
75 D MINA (to herself): Well. Here we are.
76 A ¶ Finn closes her fingers around the ring.
* 77 A The board above them flickers once more and goes dark.

### SCENE s01412 | INT. ORBITAL STATION KESTREL - AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): COMMANDER YUSUF AL-RASHID, ENGINEER PRISCA DELACROIX-NWOKO
* 1 A ¶ Red emergency light.
* 2 A The hiss of a failing seal.
* 3 A Frost spreads across the inner door like creeping fingers.
4 A ¶ COMMANDER YUSUF AL-RASHID, 40s, helmet off, grips a cutting torch with both hands and strains against a warped hatch.
5 A Beside him, ENGINEER PRISCA DELACROIX-NWOKO, 30s, wrenches at a valve with a pipe.
6 A Her breath fogs in the thinning air.
7 A ¶ They work together, shoulders touching, a single frantic machine.
* 8 A The hatch groans.
* 9 A A fingertip of vacuum screams through the gap.
10 D YUSUF: Pressure's dropping!
11 D PRISCA: I know!
12 A ¶ They both hit the hatch with their shoulders at the same time.
* 13 A It shudders but holds.
14 A Yusuf swears.
15 A Prisca swings the pipe once more at the valve and it cracks off its mount, trailing coolant in a silver arc.
16 A ¶ They freeze.
17 D PRISCA [CONT'D] (whispering): That was the last one.
18 A ¶ Yusuf drops the torch.
* 19 A It floats, turning slowly in the dim red light.
20 A They stare at it.
21 A At each other.
* 22 A The hatch sighs shut by itself, and the lights go out.

### SCENE s01413 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NORMAN BELLWETHER, LEOCADIA
* 1 A ¶ Rows of washers churning.
* 2 A A flickering sign in the window.
* 3 A The smell of detergent and hot lint.
4 A ¶ NORMAN BELLWETHER, 50s, in pajama pants and a trench coat, folds a towel with military precision.
5 A Two machines over, his daughter, LEOCADIA, 20s, stares at a spinning drum with a duffel bag at her feet.
6 D NORMAN (to himself): Corners to corners.
7 D LEOCADIA: Dad.
8 D NORMAN: Mm.
9 D LEOCADIA: Why are you here?
10 D NORMAN: Your mother said you were.
11 D LEOCADIA: That's not why.
12 D NORMAN: My machine broke.
13 D LEOCADIA: It's two in the morning.
14 D NORMAN: I couldn't sleep.
15 A ¶ She watches the drum.
16 A He folds the towel again, makes a perfect square, sets it on top of a stack.
17 D LEOCADIA: You don't have to follow me around.
18 D NORMAN: I wasn't.
19 D LEOCADIA: You were in the car outside my apartment last night.
20 A ¶ He stops folding.
21 A Looks at the towel as though it might help him.
22 D NORMAN: It was on my way.
23 D LEOCADIA: To what?
24 D NORMAN (to the room): Nowhere. Everywhere.
* 25 A ¶ The machine beeps.
* 26 A Spin cycle ending.
27 A Leocadia opens the door, pulls out a damp bundle, and begins to load a dryer.
28 A Norman moves to help.
29 A She stops him with a look.
30 D LEOCADIA: I'm leaving Friday.
31 D NORMAN: I know.
32 D LEOCADIA: Mom told you?
33 D NORMAN: She didn't have to.
34 A ¶ He takes a sock off the pile, turns it right side out, hands it to her.
35 A She takes it, and he lets his fingers rest against hers a moment too long.
36 D LEOCADIA: Dad.
37 D NORMAN: I'm fine.
38 D LEOCADIA: You're crying.
39 D NORMAN: It's the lint.
40 A ¶ She laughs through her nose.
41 A He turns away, pulls a handkerchief from the trench coat, and blows it with great dignity.
42 D NORMAN [CONT'D] (muttering): Damn lint.
43 A ¶ She loads the rest of the clothes, closes the dryer door, and feeds in quarters one at a time.
* 44 A The drum begins to turn.
45 D LEOCADIA: Sit with me.
46 A ¶ They sit on the long bench in front of the dryer.
* 47 A The clothes tumble in warm circles.
48 D NORMAN: Do you have enough socks?
49 D LEOCADIA: Dad.
50 D NORMAN: I'm only asking.
51 A ¶ Her head tips onto his shoulder.
52 A He freezes, then slowly lets his cheek rest against her hair.

### SCENE s01414 | EXT. DRY CREEKBED - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF ABNER TOLLIVER, PERCY, DUNMORE, ESPERANZA QUILLAN, SILAS DEARBORN-FLYNT
* 1 A ¶ Cracked mud.
* 2 A A burnt wagon tilts on its axle.
* 3 A Buzzards circle high above.
* 4 A A single dead cottonwood throws a thin ribbon of shade.
5 A ¶ SHERIFF ABNER TOLLIVER, 50s, gray mustache, sits on a flat rock and cleans his revolver with a bandanna.
6 A He is in no hurry.
7 A Nearby, his deputy, PERCIVAL "PERCY" DUNMORE, 20s, paces with a rifle across his shoulder, sweating through his shirt.
8 A ¶ Across the dry creek, a woman crouches by the wagon, sifting ash through her fingers.
9 A ESPERANZA QUILLAN, 30s, in a man's hat and a dusty duster, doesn't look up.
10 D PERCY: Sheriff, we've been here an hour.
11 D ABNER: Two.
12 D PERCY: She hasn't moved.
13 D ABNER: Neither have I.
14 D PERCY: She's looking for something.
15 D ABNER: Everyone is.
16 A ¶ Percy shifts the rifle to the other shoulder.
17 A Esperanza stands, brushes her hands, and crosses the creekbed to them with an unhurried step.
18 D ESPERANZA: Afternoon.
19 D ABNER: Ma'am.
20 D ESPERANZA: This your wagon?
21 D ABNER: Used to be.
22 D ESPERANZA: It's a shame.
23 D ABNER: It's the cost of doing business.
24 D ESPERANZA: Whose business?
25 D ABNER: Mine, until Tuesday.
26 A ¶ She nods slowly.
27 A Pulls a folded paper from her pocket, hands it to him.
28 A He reads it, his mustache twitching.
29 A Then he laughs, once, without joy.
30 D ABNER [CONT'D]: Well, I'll be.
31 D PERCY: What is it?
32 D ABNER: Deed to the whole valley.
33 D PERCY: Whose name's on it?
34 D ABNER: Hers.
* 35 A ¶ A new sound.
* 36 A Hooves in the distance.
37 A All three turn.
38 A ¶ A rider emerges from the heat shimmer, big black horse lathered white, a rifle across his saddle.
39 A He reins in at the edge of the creekbed.
40 A SILAS DEARBORN-FLYNT, 60s, face like a hatchet, tips his hat.
41 D SILAS: Sheriff.
42 D ABNER: Silas.
43 D SILAS: You've got my property.
44 D ABNER: Do I?
45 D SILAS: Her.
46 A ¶ Esperanza steps forward, one boot at a time.
47 A She meets his eyes without flinching.
48 D ESPERANZA: I'm not property.
49 D SILAS: That paper says different.
50 D ESPERANZA: That paper says I own what you thought you did.
51 A ¶ Silas looks at the sheriff.
52 A The sheriff looks at the sky.
* 53 A A buzzard cries.
54 D ABNER: Percy.
55 D PERCY: Sir?
56 D ABNER: Go home.
57 D PERCY: But, Sheriff--
58 D ABNER: Go home, son.
59 A ¶ Percy lowers the rifle.
60 A Backs up three steps.
61 A Then turns and walks off down the creekbed, boots kicking up dust.
62 A ¶ Silas turns the horse in a slow half circle.
63 A Spits.
64 D SILAS: This isn't over.
65 D ESPERANZA: It is for today.
66 A ¶ He spurs the horse away.
* 67 A Dust follows him.
68 A Abner folds the deed along its old creases and hands it back, tipping his hat.

### SCENE s01415 | EXT. FROZEN WATERFALL - GORGE - DAY
Detected names (may be incomplete or contain aliases): AUGIE, DELACROIX-OWUSU, THALIA RENFREW, ZEPH, OKONJO, QUINLAN BRADSHAW-LEE
* 1 A ¶ A canyon of blue ice, walls streaked with silver where the water froze mid-fall.
* 2 A The sky is a slice of white between cliffs.
* 3 A Wind whistles through the cracks.
4 A ¶ Four climbers cling to the face.
* 5 A Ropes run taut between them.
6 A ¶ AUGUSTINE "AUGIE" DELACROIX-OWUSU, 30s, leads, swinging an ice axe in short, practiced arcs.
7 A Below him, THALIA RENFREW, 20s, belays on a narrow ledge, her hands sheathed in battered mittens.
8 A Further down, ZEPHANIAH "ZEPH" OKONJO, 40s, the guide, hangs from a screw with one arm.
9 A At the bottom, the youngest, QUINLAN BRADSHAW-LEE, 17, stands on the snow, waiting his turn.
10 D AUGIE (calling down): Ice is good!
11 D THALIA: Copy!
12 A ¶ She feeds him rope.
13 A Zeph watches the line shiver.
14 A Quinlan stamps his feet.
15 A ¶ Augie pulls over a lip and anchors himself.
16 A Looks down the face, grins.
17 D AUGIE: Zeph! Your turn!
18 A ¶ Zeph begins to climb.
19 A He moves with the slow confidence of a man who has done this ten thousand times.
20 A Axe, kick, axe, kick.
* 21 A ¶ Halfway up, a CRACK splits the air.
22 A ¶ All four freeze.
* 23 A ¶ A fissure races across the ice, a bright zigzag of white, and a slab the size of a door calves off the wall above Zeph and falls.
24 D THALIA: Zeph!
25 A ¶ He flings himself sideways.
26 A The slab clips his pack and spins him.
27 A His axe slips.
28 A He swings, catches, hangs.
29 A ¶ Augie hauls the rope in, arm over arm.
30 A Thalia braces.
31 A Quinlan scrambles up the snow slope toward the base of the wall, shouting.
32 D QUINLAN: Hold on! I'm coming!
33 D ZEPH (through his teeth): Stay down, boy!
* 34 A ¶ Another crack.
* 35 A A second slab shakes loose, then a third.
* 36 A The whole sheet of ice shudders, groans, and begins to peel from the cliff like old paint.
37 A ¶ Augie and Thalia lock eyes.
38 A Wordlessly, together, they haul with everything they have.
39 A Zeph kicks into the wall.
40 A His crampons bite.
41 A He lunges up and over the ledge as the ice behind him thunders into the gorge.
42 A ¶ They collapse in a heap, all three tangled in rope, breathing fast.
43 A ¶ Quinlan, at the bottom, stands in the settling snow with his hands on his head, laughing and gasping.
44 D QUINLAN: That was incredible.
45 D ZEPH: It was not.

### SCENE s01416 | INT. FAMILY COURT - CORRIDOR - DAY
Detected names (may be incomplete or contain aliases): FERN, ALCANTARA, CORDELIA WASHINGTON-PRICE, BRONWEN ALCANTARA-HUGHES, ISAAC FELDSTEIN, MARISELA TRUJILLO, BAILIFF
* 1 A ¶ A scuffed hallway with benches along both walls.
* 2 A A vending machine hums.
* 3 A Fluorescent light flattens every face.
4 A ¶ On one bench: FERNANDO "FERN" ALCANTARA, 40s, in his only suit, and his lawyer, CORDELIA WASHINGTON-PRICE, 50s, flipping a file.
5 A On the opposite bench: BRONWEN ALCANTARA-HUGHES, 40s, his ex-wife, rigid, flanked by her attorney, ISAAC FELDSTEIN, 30s, and her sister, MARISELA TRUJILLO, 40s, who glares across the aisle.
6 D CORDELIA: Fern. Look at me.
7 D FERN: I'm looking.
8 D CORDELIA: You say nothing in there. Understood?
9 D FERN: Understood.
10 D CORDELIA: Even if she provokes you.
11 D FERN: She always provokes me.
12 D CORDELIA: Then you say nothing twice.
13 A ¶ Across the aisle, Marisela leans to whisper in Bronwen's ear.
14 A Bronwen shakes her head.
15 D MARISELA (loud): He's a liar, Bron.
16 D ISAAC: Marisela.
17 D MARISELA: He is.
18 D ISAAC: Please.
19 A ¶ Fern stands, fists clenched.
20 A Cordelia seizes his sleeve.
21 A Marisela stands too.
22 A Isaac steps between them, hands out, and Bronwen rises last, pale, her palms pressed flat against her skirt.
23 D FERN: She said that in front of my kids?
24 D BRONWEN: Fern, sit down.
25 D FERN: Don't tell me what to do, Bronwen.
26 D BRONWEN: I'm asking.
27 D FERN: You've never asked me anything in your life.
28 D BRONWEN: I'm asking now.
29 A ¶ He stops.
30 A Searches her face.
* 31 A The vending machine hums.
32 D CORDELIA (quietly): Fern.
33 A ¶ He sits.
34 A Slowly.
35 A Marisela sits too, sulking.
36 A Isaac exhales and returns to his folder.
* 37 A ¶ The courtroom door opens.
38 A A BAILIFF leans out.
39 D BAILIFF: Alcantara versus Alcantara-Hughes.
40 A ¶ All five of them stand.
41 A They file toward the door, and in the narrow frame Fern and Bronwen end up shoulder to shoulder, neither willing to go first.
42 D BRONWEN: After you.
43 D FERN: No. After you.
44 A ¶ Cordelia, behind them, rolls her eyes and shoves them both through the door.

### SCENE s01417 | INT. LONG-TERM CARE HOME - PRIVATE ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): GUS, WELLINGTON-ABARA, VOICE
* 1 A ¶ A single bed, neatly made.
* 2 A A rocking chair by the window.
* 3 A A tray of untouched dinner on the side table.
* 4 A Photographs crowd the dresser: a wedding, a fishing trip, a toddler on a pony.
* 5 A The window frames a brick wall and a sliver of sky.
6 A ¶ AUGUSTUS "GUS" WELLINGTON-ABARA, 80s, in a cardigan and slippers, sits in the rocking chair with a landline phone in his lap.
* 7 A The cord stretches to the wall.
8 A He stares at the receiver as if it might speak first.
9 A ¶ He lifts it.
10 A Dials slowly, one number at a time, with a shaky forefinger.
* 11 A It rings.
12 D VOICE [V.O.] (over phone, young, brisk): Hello?
13 D GUS: Hello. Is this Daniel?
14 D VOICE [V.O.] (over phone): Who's calling?
15 D GUS: It's your father.
* 16 A ¶ A long pause on the line.
17 A Gus watches the brick wall.
* 18 A A pigeon lands on the sill, ruffles its feathers, takes off again.
19 D VOICE [V.O.] (over phone): Dad. It's been a while.
20 D GUS: It has.
21 D VOICE [V.O.] (over phone): Is something wrong?
22 D GUS: No. I just wanted to hear your voice.
* 23 A ¶ Silence.
24 A Gus sets the dinner tray aside, lifts the cover.
* 25 A Cold peas.
26 A He puts the cover back.
27 D VOICE [V.O.] (over phone): I can't talk long. I'm at work.
28 D GUS: Of course. I understand.
29 D VOICE [V.O.] (over phone): Is the staff treating you well?
30 D GUS: They are very kind.
31 D VOICE [V.O.] (over phone): Good.
32 A ¶ Gus rocks.
* 33 A The chair creaks.
34 A He runs his thumb along the phone cord, back and forth.
35 D GUS: I found your old baseball glove.
36 D VOICE [V.O.] (over phone): You kept that?
37 D GUS: In the closet. It still smells like leather.
38 D VOICE [V.O.] (over phone): God. I haven't thought about that in years.
39 D GUS: You pitched a shutout in it. Nineteen eighty-four.
40 D VOICE [V.O.] (over phone): Eighty-five.
41 D GUS: Eighty-five.
42 A ¶ He smiles, and his eyes go to the dresser, to a faded photograph of a small boy in an oversized cap, scowling at the camera.
43 A He picks up the frame, wipes the glass with his sleeve.
44 D VOICE [V.O.] (over phone): Dad, I really have to go.
45 D GUS: Yes. Of course. Thank you for answering.
46 D VOICE [V.O.] (over phone): I'll call you Sunday.
47 D GUS: I'd like that.
* 48 A ¶ The line clicks.
49 A He holds the receiver against his ear a moment longer, listening to the empty hum.
50 A ¶ He puts the phone down gently on its cradle.
51 A Sets the photograph back on the dresser, straightens it.
52 A He crosses to the window and stands there, hands clasped behind his back, looking at the brick.
53 A ¶ After a while, he sits again in the rocking chair, takes the cold fork from the tray, and begins, slowly, to eat the peas.

### SCENE s01418 | INT. ROOFTOP GREENHOUSE - OVER A CHINATOWN BANK - NIGHT
Detected names (may be incomplete or contain aliases): MADAME LILIANE CHEN-ABERNATHY, VIKTOR NAKAMURA-ELLIS, DETECTIVE ROSALIND OKPARA-DANE
* 1 A ¶ A glass shed crowded with tomato vines and orchids, lit by violet grow lamps.
* 2 A Rain hammers the panes.
* 3 A In the center, a card table, three chairs, and a tray of unwashed teacups.
* 4 A The air is warm, wet, and sweet with rot.
5 A ¶ MADAME LILIANE CHEN-ABERNATHY, 70s, hair in a silver twist, sits at the head of the table in a brocade jacket.
6 A She sips tea without hurry, her fingers heavy with jade rings.
7 A ¶ To her right, her nephew, VIKTOR NAKAMURA-ELLIS, 30s, in a leather coat, picks at a dead leaf.
8 A He has not made eye contact since he arrived.
9 A ¶ To her left, a stranger in a dripping raincoat, DETECTIVE ROSALIND OKPARA-DANE, 40s, has been invited to sit and has not yet taken off her hat.
10 D LILIANE: Detective. You will have tea.
11 D ROSALIND: No, thank you.
12 D LILIANE: It is not an offer.
13 A ¶ Rosalind studies the cup, then lifts it.
14 A Sniffs.
15 A Sets it down untouched.
16 D ROSALIND: I'm here about the vault.
17 D LILIANE: There is no vault.
18 D ROSALIND: Beneath the bank. Third sub-level.
19 D LILIANE: You are mistaken.
20 D ROSALIND: Three nights ago, someone emptied it.
21 A ¶ Viktor's hand goes still on the leaf.
22 A Liliane doesn't blink.
23 D LILIANE: Viktor. Did you hear?
24 D VIKTOR: I heard.
25 D LILIANE: Do you know anything about this?
26 D VIKTOR: No, Auntie.
27 D LILIANE: No.
28 A ¶ She turns back to Rosalind with a serene smile.
* 29 A The rain on the glass swells louder for a moment, then fades.
30 D ROSALIND: Madame Chen. Your nephew was seen entering the sub-level at eleven.
31 D LILIANE: By whom?
32 D ROSALIND: By a night guard. Who has since vanished.
33 D VIKTOR: That's a lie.
34 D ROSALIND: Which part?
35 D VIKTOR: All of it.
36 D ROSALIND: I haven't told you the guard's name.
37 A ¶ Viktor's mouth closes.
38 A Liliane sets down her cup, very softly.
* 39 A It clicks against the saucer.
40 D LILIANE: Viktor, go downstairs.
41 D VIKTOR: Auntie--
42 D LILIANE: Go.
43 A ¶ He rises.
44 A Looks at Rosalind, then at the old woman, and walks out between the tomato vines.
* 45 A The door slides shut behind him.
46 A ¶ Liliane and Rosalind sit alone with the orchids and the rain.
47 D LILIANE [CONT'D]: He is a foolish boy.
48 D ROSALIND: He's a thief.
49 D LILIANE: He is family.
50 D ROSALIND: That's not a defense.
51 D LILIANE: No. But it is a reason.
52 A ¶ She pours a second cup of tea, and for the first time Rosalind accepts it.

### SCENE s01419 | EXT. LIFE RAFT - OPEN OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN AUGUSTINE FEARON, IMELDA NAKAGAWA-ROSS, DECKHAND BASIL OYEDEPO, MABEL STURGESS-KAUR
* 1 A ¶ Gray sea.
* 2 A Gray sky.
* 3 A A canvas raft rises and falls on a slow swell.
* 4 A Gulls are nowhere.
5 A ¶ Four survivors crowd the raft: CAPTAIN AUGUSTINE FEARON, 50s, lashed to the tiller by a rope; DR. IMELDA NAKAGAWA-ROSS, 40s, clutching a medical kit; DECKHAND BASIL OYEDEPO, 20s, bailing with a hat; and the cook, MABEL STURGESS-KAUR, 60s, hugging a cooler.
6 D BASIL: There!
7 D IMELDA: Where?
8 D BASIL: A light! Starboard!
9 D AUGUSTINE: That's the sun.
10 D BASIL: It's not the sun!
11 D MABEL: It's the sun, dear.
12 D BASIL: It's a ship!
13 D IMELDA: Basil, sit down.
14 D BASIL: It's a ship! I'm telling you!
15 D AUGUSTINE: Sit down, son.
16 D MABEL: You'll tip us.
17 D BASIL: Then someone look!
18 A ¶ Imelda stands, shading her eyes.
* 19 A The raft pitches.
20 A She grips Augustine's shoulder to steady herself.
21 D IMELDA: I don't see anything.
22 D MABEL (muttering): Water, water, everywhere.
23 D AUGUSTINE: Mabel.
24 D MABEL: I'm only saying.
25 D IMELDA: Basil, how much water is left?
26 D BASIL: Half a liter.
27 D IMELDA: For four.
28 D BASIL: For four.
29 D AUGUSTINE: We ration it. A capful each, at dusk.
30 D MABEL: And if we haven't been rescued by dusk?
31 D AUGUSTINE: Then another capful.
32 D BASIL: And then?
33 D AUGUSTINE: We'll see.
* 34 A ¶ A gull cries somewhere overhead.
35 A All four look up at once.
* 36 A Just a speck, circling high above the swell.
37 D MABEL: Is that...
38 D IMELDA: A gull.
39 D BASIL: Land's close!
40 D AUGUSTINE: Don't hope, son.
41 D BASIL: Why not?
42 D AUGUSTINE: Hope drinks water too.
* 43 A ¶ Silence.
* 44 A The raft rides the swell.
45 A Mabel gives a short, dry laugh and opens the cooler, taking out four crackers, one each.
46 D MABEL: Breakfast.
47 A ¶ They eat.

### SCENE s01420 | INT. UNCLAIMED UMBRELLA DEPOT - TRANSIT LOST PROPERTY BASEMENT - DAY
Detected names (may be incomplete or contain aliases): DELPHINE OKONKWO-REYES, BARNABY QUILL, TOMOKO ARAI, GUS PRZYBYLSKI, MEERA SUNDARAM-HOLT
* 1 A ¶ Eleven thousand umbrellas hang from the ceiling pipes like a congregation of sleeping bats, each tagged, each waiting for an owner who stopped believing in them years ago.
* 2 A Fluorescent tubes hum a half-tone flat.
3 A ¶ DELPHINE OKONKWO-REYES (50s, silver bob, a cardigan buttoned one hole too high) pours tea from a thermos into five paper cups with the care of a priestess.
* 4 A The cups match.
* 5 A Nothing else in the room does.
6 A ¶ BARNABY QUILL (40s, rumpled, a man who irons only the collar) sits on an overturned crate, polishing a single brass umbrella handle that no one has asked him to polish.
7 A ¶ TOMOKO ARAI (30s, sharp-eyed, hair pinned with a pencil) tallies index cards into stacks.
* 8 A The stacks are very straight.
9 A ¶ GUS PRZYBYLSKI (60s, broad, a retired bus driver who took this job "for the quiet") winds a wall clock that has not told the right time since March.
10 A ¶ MEERA SUNDARAM-HOLT (20s, the newest, lanyard still stiff) holds her cup with both hands and does not drink.
11 A ¶ Delphine sets the thermos down.
12 A Squares it to the table edge.
13 A Smiles at nobody.
14 D DELPHINE: Lovely to have everyone down here at once. Truly. It's been, what, since the Christmas lunch?
15 D BARNABY: The lunch was in the stairwell.
16 D DELPHINE: Cozy, though.
17 D TOMOKO: Four hundred and twelve intake forms this month. Up nine percent.
18 D DELPHINE: Nine! Wonderful. People keep losing things. It's the one thing we can count on.
19 D GUS: Count on. Right.
20 D DELPHINE: Gus, you look well. Is that a new coat?
21 D GUS: Nineteen ninety-eight.
22 D DELPHINE: Timeless.
23 D MEERA: Is there an agenda?
24 D DELPHINE: Agenda. No, no. Just a catch-up. We never catch up.
25 D BARNABY: Delphine, the elevator has been shut off since eight this morning.
26 D DELPHINE: Maintenance.
27 D BARNABY: Nobody told maintenance, I asked.
28 D DELPHINE: Then it's a surprise maintenance.
29 D TOMOKO: I've never seen the upstairs door locked from the outside.
30 D DELPHINE: Draughts. The building has draughts.
31 D GUS: Nice tea.
32 D DELPHINE: Oolong. Someone brought it in. I think it was left behind by a customer and nobody claimed it, so, technically, ours.
33 D MEERA: That's in the policy. Ninety days, then disposal or reassignment.
34 D DELPHINE: Meera knows the policy. Meera is going to go far.
35 D MEERA: Is that a promotion?
36 D DELPHINE: It's an observation.
37 D BARNABY: What's in the folder?
38 D DELPHINE: Which folder?
39 D BARNABY: The one under the thermos. Cream. Five tabs. Five names.
40 D DELPHINE: Those are the, ah, the umbrella reconciliation sheets.
41 D TOMOKO: I do the reconciliation sheets. They're green.
42 D DELPHINE: New format.
43 D GUS: They've got our names on the tabs.
44 D DELPHINE: Because we're all, you know, reconciled.
45 D BARNABY: Delphine.
46 D DELPHINE: Barnaby.
47 D BARNABY: How long have you had the cups?
48 D DELPHINE: What?
49 D BARNABY: Five matching cups. This building has never owned five matching anything.
50 D DELPHINE: I wanted it to be nice.
51 D TOMOKO: For what?
52 D DELPHINE: For whatever it is.
53 D GUS: Ninety days, then disposal or reassignment.
54 D MEERA: I said that.
55 D GUS: I know you did, love.
56 A ¶ Delphine slides the cream folder across the table.
57 A Her hand does not shake.
* 58 A Her thermos lid, left unscrewed, rolls in a slow half-circle and drops off the edge.
* 59 A ¶ Nobody picks it up.
* 60 A Above them, one umbrella turns on its hook in air from no vent, and every tag along the pipe begins, softly, to tick.

### SCENE s01421 | EXT. SALT FLATS WAY STATION - DAY
Detected names (may be incomplete or contain aliases): TUCKER HALE, ISAAC BROOKS, BILLIE, STRAND
* 1 A ¶ White ground.
* 2 A White sky with a seam of heat across it.
* 3 A One adobe hut, roof half gone.
* 4 A A windmill with no blades, only the hub, rusted and ticking.
5 A ¶ TUCKER HALE (40s, lean, sun-cracked lips, a hat stained black at the band) sits on an upturned barrel.
6 A Rifle across his knees.
7 A Not aiming it.
8 A Not putting it down.
9 A ¶ ISAAC BROOKS (50s, heavy, one eye clouded) crouches by a dead fire, poking ash with a stick.
10 A He wears a preacher's coat, two sizes small, buttons mismatched.
* 11 A ¶ Between them, a mule.
* 12 A Grey.
* 13 A Chewing nothing.
14 D TUCKER: Water.
15 D ISAAC: Barrel's dry.
16 D TUCKER: I didn't ask the barrel.
17 A ¶ Isaac lifts a canteen.
18 A Shakes it.
* 19 A A small sound.
20 A He tosses it.
21 A Tucker catches it without looking.
22 D TUCKER [CONT'D]: Half.
23 D ISAAC: Drink your half.
24 A ¶ Tucker drinks.
25 A Caps it.
26 A Sets it on the sand between them.
27 A ¶ WILHELMINA "BILLIE" STRAND (30s, wiry, a rope-burn scar across one cheek, dust to the knees) steps out of the hut doorway.
28 A She carries a tin plate with three strips of jerky.
29 A Her boots are two sizes too big.
30 A Men's boots.
31 D BILLIE: Supper.
32 D TUCKER: It's noon.
33 D BILLIE: Supper's when you eat it.
34 A ¶ She puts the plate down on the barrel top.
35 A Takes one strip.
36 A Chews.
37 A Looks at the horizon.
38 D ISAAC: He's late.
39 D TUCKER: He's always late.
40 D BILLIE: Who's late?
41 D TUCKER: The man with the wagon.
42 D BILLIE: I thought it was a train.
43 D ISAAC: No train. Ground's too soft for rail.
44 D BILLIE (muttering): Everything's too soft for something.
45 A ¶ Isaac stands.
46 A Knees pop.
47 A He walks to the windmill, puts a palm on the post, closes his good eye.
48 D ISAAC (to himself): Lord, I will not ask for rain. Lord, I will ask for shade.
49 A ¶ Tucker watches him.
50 A Says nothing.
51 A Billie sits on the hut step, pulls her too-big boots off, empties them.
* 52 A Salt crystals pour out like sugar.
53 D BILLIE: Everybody listen. If we're still here at dark, we sleep in shifts.
54 D TUCKER: We won't be here at dark.
55 D BILLIE: Then it costs nothing to agree.
56 D ISAAC: I'll take first.
57 D BILLIE: You'll take middle. You snore on first.
58 D ISAAC: I do not.
59 D TUCKER: You do.
60 A ¶ Isaac looks at Tucker.
61 A Tucker shrugs.
* 62 A ¶ A mile out, a smudge of dust rises.
* 63 A Not a wagon.
* 64 A Wind, maybe.
65 A All three watch it anyway.
66 D TUCKER [CONT'D] (low, to Isaac): You still got the paper?
67 D ISAAC (low): Inside my coat.
68 D TUCKER: Keep it there.
69 D BILLIE: I can hear you.
70 D TUCKER: Then hear this. Nobody does anything till I say.
71 D BILLIE: Yes, sir, Marshal.
72 D TUCKER: I'm not a marshal.
73 D BILLIE: That's why it's funny.
* 74 A ¶ The dust smudge thins and dies.
* 75 A Nothing behind it.
* 76 A The mule shifts its weight, sighs through its nose.
77 A ¶ Isaac settles back by the dead fire.
78 A Pokes.
79 A Tucker leans the rifle against the barrel.
80 A Billie lies back on the step, hat over her face.
81 D BILLIE [CONT'D] (from under the hat): Wake me when it's supper.
82 D TUCKER (to the mule): She's right, you know.

### SCENE s01422 | INT. COURTHOUSE PARKING GARAGE - LEVEL P3 - DAWN
Detected names (may be incomplete or contain aliases): LENORE VASQUITH, RUFUS AMOAH, CLERK
* 1 A ¶ Concrete.
* 2 A Sodium light.
* 3 A One sedan, engine ticking.
4 A ¶ LENORE VASQUITH (40s, charcoal suit, burner-thin patience) leans on the driver's door, phone pressed to her ear.
5 A In the passenger seat, RUFUS AMOAH (30s, borrowed tie, hands gripping his knees) stares at the dashboard.
6 D CLERK [V.O.] (phone, tinny): Judge Barrow moved you to eight-fifteen.
7 D LENORE: Moved me from nine?
8 D CLERK [V.O.] (phone): Prosecution's witness flew in early.
9 D LENORE: Then I want the exhibit list stipulated before we go on the record.
10 D CLERK [V.O.] (phone): Take it up with the judge.
11 A ¶ Lenore ends the call.
12 A Knocks on the glass.
13 A Rufus lowers the window two inches.
14 D RUFUS: That the clerk?
15 D LENORE: We go early. You say nothing. Not "good morning," not "thank you." Nothing.
16 D RUFUS: What if the judge asks me something?
17 D LENORE: Then I object.
18 D RUFUS: And if you can't?
19 D LENORE: Rufus. Look at me.
20 A ¶ He does.
21 A She does not blink.
22 D LENORE [CONT'D]: I can.
