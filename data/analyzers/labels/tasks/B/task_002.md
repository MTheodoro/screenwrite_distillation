You are a computational linguist building a coreference and discourse corpus. For each sentence, first decide silently what every pronoun and noun phrase refers to, then label. Prefer the reading a careful reader would settle on, and lower your confidence when two readings are plausible.

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
  }
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


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05144.json
### SCENE s05144 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): JEN, BIG DAVE, MO
1 A ¶ Plastic chairs bolted in rows.
2 A A water cooler gurgles.
3 A Behind the glass, a clerk types, never looking up.
4 A ¶ Big Dave, 50s, broad, in a suit that fits like it was lent to him, sits with his hands folded.
5 A Beside him, Jen Park, 40s, parole officer, flips through a file with her thumb.
6 D JEN (to the room, not looking up): Everybody sign the sheet. Even if you've signed it before. Especially if you've signed it before.
7 A ¶ Two teenagers by the vending machine laugh at something on a phone.
8 A A man with a toddler on his knee shushes the child, who cries anyway.
9 D BIG DAVE (standing, to Jen): I've been out eleven months. I've been on time every Tuesday. Every Tuesday, Jen.
10 D JEN (beat): I know.
11 D BIG DAVE (quieter): Then why am I looking at a new condition on my own paper?
12 D JEN (closing the file): Dave. Sit.
13 D BIG DAVE (not sitting): I did what you said. I took the job. I stayed at Mo's place. I stayed away from the old crowd.
14 A ¶ Mo, 30s, in the next chair over with a hi-vis vest in her lap, stares at the floor.
15 D MO (muttering): Don't drag me into this.
16 D BIG DAVE (to Mo): You're the one who said they'd write the letter.
17 D MO (to nobody): I said I'd think about it.
18 D JEN (to the whole room): Folks, give us a minute. Please.
19 A ¶ The two teenagers drift off down the hall.
20 A The man with the toddler picks up the child and leaves.
21 A The clerk behind the glass finally looks up.
22 D BIG DAVE (beat): You want to tell me who made the call?
23 D JEN (firmly): No.
24 D BIG DAVE (louder): Somebody called. Somebody told you where I was on the fourteenth.
25 D JEN (rising): Dave, I can't discuss it here.
26 D BIG DAVE (lunges across the chair): Then where?
27 A ¶ Jen and Big Dave collide and both stumble into the water cooler.
28 A The jug SLOSHES and tips.
29 A Mo jumps up and the three of them freeze.
30 D MO (very quietly): It was me.
31 A ¶ Silence.
32 A The cooler glugs once, and stops.
33 D BIG DAVE (beat): Say that again.
34 D MO (to Jen): You said if I told you, he would only get a warning.
35 D JEN (to herself): God help me.
36 A ¶ Big Dave sits.
37 A Slowly, like a man lowering something heavy.
38 A The clerk behind the glass quietly turns off her screen.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05068_1.json
### SCENE s05068_1 | INT. COUNTY PAROLE OFFICE - OFFICER OKAFOR'S OFFICE - LATER
Detected names (may be incomplete or contain aliases): RUTH, THE MAN, CALVIN
1 A ¶ Ruth Okafor, 50s, reading glasses pushed up into gray braids, sits behind a desk piled with files, a cactus, a photograph of a boy in a graduation gown turned slightly away from the visitor's chair.
2 A She is calm, almost bored.
3 A She has done this four thousand times.
4 A ¶ The man sits.
5 A He puts the folder on the desk.
6 D RUTH: Mr. Voss. How's the job?
7 D THE MAN: Fine.
8 D RUTH: The apartment?
9 D THE MAN: Fine.
10 D RUTH: You've been fine for six weeks. I'm starting to think you're a fine person.
11 A ¶ He doesn't smile.
12 A She turns a page.
13 D RUTH [CONT'D]: Says here you missed your Thursday check-in.
14 D THE MAN: I called.
15 D RUTH: You left a message with Deb. Deb doesn't write things down. Deb is a lovely woman and a terrible secretary.
16 D THE MAN: I was at work. They put me on a double.
17 D RUTH: Did you bring a pay stub?
18 A ¶ He slides the folder across.
19 A She opens it, flips, and stops.
20 A Her eyebrows lift very slightly.
21 D RUTH [CONT'D]: This isn't a pay stub.
22 A ¶ It's a photograph.
23 A A school photo, a boy of about eight, missing a front tooth.
24 A She looks at it a long time.
25 A When she looks up, her voice is lower.
26 D RUTH [CONT'D]: Where did you get this?
27 D THE MAN: Mailbox. Yesterday.
28 D RUTH: It's not allowed. You know it's not allowed. The order says no contact.
29 D THE MAN: I didn't contact anybody. It came in the mail. I didn't do a thing.
30 A ¶ He leans forward.
31 A For the first time his voice shakes, not much, just enough.
32 D THE MAN [CONT'D]: Somebody wants me to violate. That's all this is. Somebody wants me back inside.
33 D RUTH: Who?
34 A ¶ He doesn't answer.
35 A His hands, on his knees, have begun to tremble, and he presses them flat.
36 D RUTH [CONT'D]: Mr. Voss, I need a name.
37 D THE MAN: Calvin.
38 D RUTH: Excuse me?
39 D THE MAN: Calvin. My name's Calvin. Everybody calls me Voss like I'm a case number. I'd like, once, for somebody in this building to say it.
40 A ¶ She sets the photograph down, gently, and for a moment the whole office seems to hold its breath.
41 A Deb's keyboard has stopped.
42 A Somewhere a printer jams.
43 D RUTH: Calvin.
44 A ¶ He closes his eyes.
45 D RUTH [CONT'D]: I'm going to make a call. You're going to sit right here. You are not in trouble.
46 D CALVIN (opening his eyes): That's what they said last time.
47 A ¶ She stands, takes the photograph, and walks to the door, and in the doorway she hesitates, and does not look back, and this is the last time the two of them will sit in the same room as strangers.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05137.json
### SCENE s05137 | INT. NIGHT BUS - LOWER DECK - NIGHT
Detected names (may be incomplete or contain aliases): WALTER, EDITH, ALISTAIR, TOMMY
1 A ¶ 1953.
2 A London, fog thick as wet wool against the windows.
3 A The bus lurches through an empty Bayswater, its engine groaning like an old man climbing stairs.
4 A ¶ Edith Marsh, 30s, a nurse in a navy coat with the cap folded in her lap, sits near the back.
5 A Her shoes are scuffed from a double shift.
6 A Across the aisle, Walter Penn, 60s, a conductor with a ticket machine strapped to his chest, leans on the rail and yawns without apology.
7 A ¶ ANGLE ON the dim bulb overhead, flickering, throwing yellow across faces.
8 A ¶ Near the front, Alistair Crane, 40s, in a good tweed overcoat too warm for the night, reads a folded newspaper he is not reading, while beside him a boy, Tommy, 10, in a cap too big for him, kicks his heels against the seat and watches the rain run in lines down the glass, and Walter checks his watch and the clock above the driver and the road ahead, all in one practised sweep.
9 D WALTER: Fares, please. Fares. Last bus tonight, ladies and gentlemen. Last bus and last chance.
10 D EDITH (tired, smiling): You say that every night, Mr Penn.
11 D WALTER: And every night I mean it, Miss Marsh.
12 A ¶ WE SEE Alistair's gloved hand tighten on the newspaper.
13 D ALISTAIR (without looking up): The boy has no ticket.
14 D TOMMY (small): Da says it's all right.
15 D ALISTAIR: Does he.
16 D WALTER (gently): Where's your da, lad?
17 D TOMMY: Home. He's poorly.
18 A ¶ Silence.
19 A The bus turns a corner, and everyone sways together.
20 A ¶ CLOSE ON Tommy's coat sleeve.
21 A The cuff is worn through.
22 A Edith sees it.
23 D EDITH (rising, crossing the aisle): I'll pay his fare. Here. A tuppence, is it?
24 D WALTER: Threepence from here, miss.
25 D EDITH: Then threepence.
26 A ¶ She sets the coins in the machine's tray.
27 A Alistair folds the newspaper at last, slow and exact, and looks at her for the first time.
28 D ALISTAIR: That's very generous. I wonder you can afford it, on a nurse's wage.
29 D EDITH (level): I wonder you can afford that coat, on whatever it is you do.
30 D WALTER (a warning): Now then.
31 D ALISTAIR: I do very well, thank you. I take an interest in people who leave their patients at night.
32 D EDITH: I haven't left anyone.
33 D ALISTAIR (softly): Mrs Harcourt, in the end bed. She'd be a good deal more comfortable if you'd stayed.
34 A ¶ Edith goes still.
35 A The engine drones.
36 A Tommy has stopped kicking.
37 A ¶ BACK TO SCENE: the bus slows at a stop where no one waits, the doors hiss, and cold air comes in carrying the smell of coal smoke.
38 D EDITH (very quiet): Who are you?
39 D ALISTAIR: Someone who reads the ward reports.
40 D WALTER: I think, sir, you'd best get off here.
41 D ALISTAIR: I think I'll ride to the terminus, conductor. I've paid.
42 D TOMMY (tugging Edith's sleeve): Miss, is he a policeman?
43 D EDITH (a long beat): No, love. I think he's only lonely.
44 A ¶ Alistair's face flickers, the tiniest crack.
45 A He looks at the boy, then at the fogged window, then at his own reflection, which looks like someone he would rather not be.
46 D ALISTAIR (low): Mrs Harcourt died at nine. I was her son.
47 D EDITH (stricken): I'm so sorry. I didn't know.
48 D ALISTAIR: No. Nobody did. She said you were kind.
49 A ¶ Walter takes off his cap.
50 A The doors hiss shut.
51 A The bus pulls away into the fog, and no one says anything else.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05185.json
### SCENE s05185 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): DANA, ALL, WALTER, TOMAS, FATHER MORAN
1 A ¶ Folding chairs in a circle on cracked linoleum.
2 A A coffee urn sputters.
3 A Under a flickering tube light, six people sit with paper cups, and one of them is wearing a wire.
4 A ¶ Dana Whitlock, 30s, sharp-eyed, an undercover agent in a thrift-store cardigan, sits beside Walter Pruitt, 60s, a retired accountant who hasn't touched his coffee, while across the circle Rosalind Kerr, 50s, a lawyer with ink-stained fingers, grips the arm of Tomas Reyes, 20s, who bounces his knee, and Father Gil Moran, 70s, the host, folds his hands as Priya Anand, 40s, a nurse in scrubs, steps in late and closes the door too carefully.
5 A ¶ CLOSE ON Dana's cup.
6 A A pinhole lens in the rim.
7 D DANA: I'm Dana. I'm an alcoholic.
8 D ALL: Hi, Dana.
9 A ¶ ANGLE ON Walter.
10 A He watches her hands, not her face.
11 A ¶ This is the last time any of them will sit in this room together.
12 D WALTER: You sound new.
13 D DANA: Three weeks.
14 D WALTER: Funny. You smell like gun oil.
15 A ¶ Silence.
16 A The urn gurgles.
17 A Rosalind's grip on Tomas tightens.
18 A ¶ INSERT - Priya's phone, face-down on her knee.
19 A A text lights the screen: HE KNOWS.
20 A ¶ WE SEE Father Moran slowly stand, one hand sliding into his cassock.
21 A ¶ BACK TO SCENE
22 D TOMAS: Nobody move.
23 D FATHER MORAN: Sit down, son. Everyone sit. Dana, the cup, please.
24 A ¶ Dana sets it on the floor.
25 A Slowly.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05060.json
### SCENE s05060 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, MO, TAMSIN
1 A ¶ The Corolla smells of pine air freshener and old fries.
2 A The dashboard clock says 2:04 and the wipers drag across a windshield that is barely wet, a drizzle that cant decide to become rain.
3 A Mo has been driving eleven hours.
4 A He keeps the radio low, some call-in show about gardening, because silence in this car has a way of getting loud.
5 A ¶ The back door opens.
6 A A woman folds herself into the seat behind him with a duffel bag held against her chest like something that might be taken from her.
7 A She does not say hello.
8 A She is maybe forty, her coat is too light for the season, and there is a smear of dried mascara she hasnt noticed or has stopped caring about.
9 D THE WOMAN: Fourteen Alder Court.
10 D MO: That's what the app says. You're, uh, Rhea?
11 D THE WOMAN: Whatever it says.
12 A ¶ He checks the mirror.
13 A She is looking out of the window at nothing, at the shuttered laundromat and the one bright gas station, and he recognises the look, he has seen it on fathers outside delivery rooms and on men outside courtrooms.
14 A It is the look of someone rehearsing.
15 A ¶ He pulls out.
16 A The gardening show talks about slugs.
17 D MO: Long night?
18 D THE WOMAN: Don't do that.
19 D MO: Do what?
20 D THE WOMAN: The thing where you're nice so I'll talk. I'm paying for a ride. Not a conversation.
21 A ¶ He lets that sit.
22 A In the mirror her jaw works.
23 A She unzips the duffel an inch, looks inside, zips it again.
24 A It is a small movement and he files it away the way he files away everything, the plates that linger behind him, the bars that empty out at the wrong time.
25 A Twelve years of this has made him a reluctant expert in other peoples bad nights.
26 D MO: Okay. Radio's yours if you want it.
27 A ¶ She doesn't want it.
28 A The car rolls under a yellow light that blinks and blinks for no one.
29 D THE WOMAN: Is it far? From here.
30 D MO: Nine minutes. Maybe ten.
31 D THE WOMAN: Can you make it twelve.
32 A ¶ He glances back.
33 A She holds his eyes in the mirror for the first time and there is something so naked in it that he looks away first.
34 D MO: I can drive slow.
35 D THE WOMAN: Thank you.
36 A ¶ He takes the long way along the river road.
37 A Black water to the left, the shapes of warehouses to the right.
38 A She counts something under her breath, streetlights maybe, or the days.
39 A He cannot tell.
40 D MO: My daughter's about your age. Well. Younger. Twenty-six.
41 D THE WOMAN: I said not a conversation.
42 D MO: You did. Sorry.
43 D THE WOMAN: Does she call you?
44 A ¶ He doesnt answer right away.
45 A His thumb taps the wheel.
46 D MO: Sundays. Mostly.
47 D THE WOMAN: Mostly.
48 D MO: Mostly.
49 A ¶ She nods slowly, as if he has confirmed a theory.
50 A Then her phone lights up in her lap and she flinches like it burned her.
51 A She turns it face down.
52 A It lights up again through her fingers, a pale glow around the edges of her hand, and again, and she presses her whole palm over it.
53 D MO [CONT'D]: You can pick up. I don't mind.
54 D THE WOMAN: It's my brother.
55 D MO: Bad news kind of brother?
56 D THE WOMAN: The kind that's right.
57 A ¶ That lands somewhere in him.
58 A He slows for no reason at an empty crosswalk.
59 D THE WOMAN [CONT'D]: He said don't come. He said she wouldn't want it. Our mother. That after nine years she's not going to want me standing in her hallway at two in the morning with a bag.
60 D MO: Is that what's in the bag?
61 D THE WOMAN: Her things. What I took. I took a lot.
62 A ¶ He nods like he understands, and it surprises him to find that he does, a little, that there is a version of him in a different car on a different night carrying a different bag up a different driveway.
63 A ¶ The phone buzzes again.
64 A She finally turns it over and reads and her face does something complicated.
65 D THE WOMAN [CONT'D]: He says the porch light's on.
66 D MO: Is that good?
67 D THE WOMAN: She leaves it on every night. He says she always has. Since I left.
68 A ¶ She laughs, one cracked note, and then she is crying, quietly and efficiently, the way people cry who have practiced it alone in cars.
69 A He keeps his eyes on the road.
70 A He reaches across and pulls a napkin from the glovebox without looking and holds it back between the seats.
71 A She takes it.
72 D THE WOMAN [CONT'D]: Rhea's not my name. It's my sisters. I use hers on the app.
73 D MO: Okay.
74 D THE WOMAN: It's Tamsin. I'm Tamsin.
75 D MO: I'm Mo.
76 D TAMSIN: I know. It says on the app. Your picture's older than you.
77 D MO: It's from a better year.
78 A ¶ She almost smiles.
79 A The river road bends away from the water and the houses start, porch after porch, dark windows and sleeping cars.
80 A Alder Court is two turns ahead and they both know it.
81 A He takes the first turn very slowly.
82 D TAMSIN: What if I get out and I can't walk to the door.
83 D MO: Then you sit in the car a while. The meter's not running. I'll say it's broke.
84 D TAMSIN: Is it broke?
85 D MO: It's whatever you need it to be.
86 A ¶ He turns onto Alder Court.
87 A Number fourteen is a narrow house with green shutters and, over the door, a single yellow bulb, burning, with moths turning around it like slow thoughts.
88 A He stops the car a little short of it and puts it in park.
89 A The engine ticks.
90 A The gardening man says goodnight.
91 A ¶ She does not move.
92 A He does not make her.
93 A Her hand finds the door handle and rests there, and for a long time that is all that happens in the car, two people and a yellow light, until upstairs in the house a curtain shifts.
94 D TAMSIN: Oh god. She's up.
95 D MO: Maybe she never went to bed.
96 A ¶ Tamsin picks up the duffel.
97 A Her hands are shaking so badly the zipper rattles.
98 A She opens the door and the cold comes in and the drizzle, finally, begins to be rain.
99 D TAMSIN: Wait here? Just till I'm inside.
100 D MO: I'll wait till the light goes off. Or you tell me to go.
101 A ¶ She steps out.
102 A She looks at the house.
103 A Then she leans back down to the window, rain on her face, and for a second she looks about twenty, a girl in a doorway of her own making.
104 D TAMSIN: Five stars.
105 D MO: Go on.
106 A ¶ She goes up the path.
107 A The front door opens before she reaches it and a small gray figure stands in the yellow light with one hand over her mouth, and Mo, who has seen a lot of doors, looks away to give them the dignity of it, and turns the radio off.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05181.json
### SCENE s05181 | INT. ST. ALDWYN'S HOSPITAL - MAIN CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL VEGA, PHONE, HELEN TEAGUE, BRAM OKONKWO, JUNO
1 A ¶ Victorian brick.
2 A Gas-lamp fittings bolted to bare wiring.
3 A Long and green and empty.
4 A ¶ Rain hammers the tall windows.
5 A ¶ Wind HOWLS through a cracked pane.
6 A ¶ MARISOL VEGA, 30s, night nurse, pushes a squeaking cart.
7 A Her badge swings.
8 A Her eyes don't.
9 A ¶ ON PHONE (TEXT): where r u
10 A ¶ She doesn't answer.
11 A Pockets it.
12 A ¶ DR. HELEN TEAGUE, 50s, surgeon, strides out of the stairwell.
13 A Coat open.
14 A Coffee in a shaking fist.
15 D TEAGUE: You're late with the rounds.
16 D MARISOL: You're early for the shift.
17 A ¶ Teague shrugs.
18 A Drinks.
19 A ¶ The radiators CLANK.
20 A Pipes GROAN.
21 A A lamp flickers.
22 A ¶ Overhead, thunder ROLLS across the roof like furniture.
23 A ¶ BRAM OKONKWO, 20s, orderly, jogs in from the east wing.
24 A Wet sneakers.
25 A Wide eyes.
26 D BRAM: Ward Six. Bed nine. He's gone.
27 D TEAGUE: Gone how?
28 D BRAM: Gone gone. Bed's empty. Window's open.
29 A ¶ Marisol and Teague trade a look.
30 A She nods.
31 A She nods.
32 A ¶ Marisol's phone BUZZES.
33 A ¶ ON PHONE (TEXT): pick up. now.
34 A ¶ She answers.
35 A Speaker on.
36 D JUNO [V.O.] (filtered, tinny): Marisol, tell me you're still in the building.
37 D MARISOL: I'm in the corridor. With Teague.
38 D JUNO [V.O.]: Is she wearing the grey coat?
39 A ¶ Marisol looks.
40 A Teague looks down at her coat.
41 A Grey.
42 D MARISOL: Yes.
43 D JUNO [V.O.]: Then walk away from her. Slowly.
44 A ¶ Teague sets her coffee down.
45 A Slowly.
46 D TEAGUE: Who is that?
47 D MARISOL: Nobody.
48 A ¶ Pipes CLANK.
49 A The lamp DIES.
50 A Rain.
51 A Dark.
52 A A single emergency bulb hums red.
53 A ¶ Bram steps back.
54 A Teague steps forward.
55 A Marisol steps between.
56 D BRAM: Somebody tell me what's happening.
57 A ¶ Nobody does.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05163.json
### SCENE s05163 | EXT. ABERNETHY GREEN - REENACTMENT CAMPGROUND - DAY
Detected names (may be incomplete or contain aliases): PHILIPPA, THADDEUS, WICK
1 A ¶ A muddy field of canvas tents.
2 A Smoke from a cookfire.
3 A Thaddeus Pell, 40s, in a full 1776 militia coat and tricorn, sits on a barrel holding a laptop wrapped in a burlap sack.
4 A He is very aware of the modern world and very hopeful nobody sees it.
5 A ¶ Philippa Voight, 30s, in a plain linen gown and apron, walks up carrying a wooden bucket.
6 A She stops.
7 A Squints.
8 D PHILIPPA: Are you ColonelHuzzah88?
9 D THADDEUS: Are you Mistress_Quill?
10 D PHILIPPA: Yes, hi. Thaddeus. Hi.
11 D THADDEUS: Philippa! In the flesh! Well, in the flax.
12 A ¶ She sets down the bucket.
13 A They shake hands, awkwardly, formally, as period requires.
14 A ¶ ON LAPTOP SCREEN: a Slack channel titled #the-1776-crew.
15 A The newest message reads:
16 A ¶ ON SCREEN: wick_the_unbothered: are u 2 there yet or what
17 D THADDEUS [CONT'D]: Wick's online. They said they'd join by video, they couldn't get off work.
18 A ¶ Thaddeus unwraps the burlap and turns the laptop so both can see.
19 A A video window opens: a cluttered cubicle, a lanyard, a fluorescent light.
20 A WICK, 20s, wears a headset and a cheap tricorn made of black construction paper.
21 D WICK [V.O.] (through laptop speakers): Oh my god, you're real. Hi! Is that the real mud?
22 D PHILIPPA: It's the real mud.
23 D WICK [V.O.]: I'm so sorry I'm not there, my manager is literally behind me, they keep walking past. One sec.
24 A ¶ Wick quickly minimizes a spreadsheet and sits very straight.
25 D THADDEUS (to Wick): You look very serious.
26 D WICK [V.O.]: I'm in a meeting. Technically. I'm muted, I think? Am I muted?
27 D PHILIPPA: No.
28 D WICK [V.O.]: Oh no. (muttering) Okay. Okay. It's fine.
29 A ¶ Philippa sits on the grass, tucks her skirts.
30 A Thaddeus offers her a hard biscuit from a leather pouch.
31 D PHILIPPA: Is it period?
32 D THADDEUS: It's from Costco. But I dipped it in tea so it looks old.
33 D PHILIPPA: That's the most you thing I've ever heard and I've known you for two years in text.
34 D WICK [V.O.]: Aw, you guys are cute. This is cute. I'm gonna cry at my desk.
35 D THADDEUS: Please don't cry at your desk, Wick.
36 D WICK [V.O.]: I use they/them, Thaddeus, not "cry at your desk," come on.
37 A ¶ A beat.
38 A Then all three laugh.
39 A A distant musket goes off POP over the tents.
40 A Philippa bites the biscuit and winces.
41 D PHILIPPA: Okay. That's definitely Costco.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05081.json
### SCENE s05081 | INT. SELF-STORAGE FACILITY - UNIT 214 - NIGHT
Detected names (may be incomplete or contain aliases): TICKS, VESPER, OKAFOR, DEL
1 A ¶ A roll-up door, half raised.
2 A Cold light leaks under it.
3 A Somewhere down the corridor a vent TICKS, TICKS, stops, and the silence after it is worse, and VESPER crouches at a stack of boxes while OKAFOR holds a flashlight on a padlock and DEL stands at the door with his back to them, listening to the building.
4 D VESPER (sets down the bolt cutters, slow): Okafor. Light.
5 D OKAFOR (steadies the beam, whispers): It's on, Vesper. It's on.
6 D DEL (without turning): Something moved on the stairs.
7 D VESPER (freezes mid-reach): Del, it's a pipe. Say it's a pipe.
8 D DEL (a long pause): Okafor, kill the light.
9 D OKAFOR (clicks it off): 
10 A ¶ Dark.
11 D DEL (barely breathing): Nobody move.
12 D VESPER (a whisper, close to a laugh): We're not.
13 A ¶ Far down the hall, a door SHUTS.
14 A Soft.
15 A Careful.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05105.json
### SCENE s05105 | INT. HOLLOWAY FERTILITY CLINIC - CONSULT ROOM - DAY
Detected names (may be incomplete or contain aliases): DR. HAQ, DANA, WES
1 A ¶ ON CAMERA: handheld, a crew of one.
2 A A consult room, beige, a poster of a cross-section nobody asked for.
3 A Dana, 30s, sits on the exam bench with a paper gown over her jeans, thumbs hovering over her phone.
4 A Dr. Imran Haq, 50s, tablet in hand, takes the stool in front of her.
5 D DR. HAQ: Dana, before we start, you're fine with the camera?
6 D DANA: Wes thinks it's a bad idea. Wes thinks everything is a bad idea this month.
7 D DR. HAQ: Understood. We can stop at any point.
8 A ¶ Dana's phone buzzes.
9 A We see the screen.
10 A ¶ ON PHONE: where r u
11 A ¶ ON PHONE: is it done yet
12 A ¶ ON PHONE: call me
13 D DANA: He's in the parking lot. He wouldn't come in.
14 D DR. HAQ: Would you like to call him?
15 D DANA (beat): Put him on speaker. Maybe he'll listen to you.
16 A ¶ She dials.
17 A It rings twice.
18 D WES [V.O.]: Hey. Hey. Is the doctor there? Can he hear me?
19 D DR. HAQ: I can hear you, Wes. I'm going to share the results with Dana, and I'd like you to hear them too.
20 D WES [V.O.]: Fine. Just say it fast.
21 D DR. HAQ: The third cycle did not take. I'm sorry.
22 D DANA: It's fine.
23 D WES [V.O.]: It's not fine, Dana.
24 D DANA (smiling, brittle): It's fine, Wes.
25 A ¶ Dr. Haq glances at the camera, then away.
26 D DR. HAQ: There is a fourth option. A different protocol. But you should know the odds are lower, and the cost is not small, and I would never push you either way.
27 D DANA: You're not pushing.
28 D WES [V.O.]: You are pushing, though, kind of, I mean the whole place is a push.
29 D DANA: Wes, I'm going to hang up now.
30 D DR. HAQ: Dana, take a moment.
31 D DANA: I don't need a moment. I need him to stop talking.
32 D WES [V.O.]: I'm just saying we already spent
33 D DANA: I know what we spent.
34 A ¶ She ends the call.
35 A Silence.
36 A The poster hums its bright pink hum.
37 A Dana looks into the lens for the first time.
38 D DANA [CONT'D]: You can put that in the film.
39 D DR. HAQ: Let's talk about the fourth option.
40 D DANA: Okay.
41 A ¶ Her phone buzzes once more.
42 A She does not look.
43 A A new message sits on the dark screen.
44 A ¶ ON PHONE: sorry. im coming in

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05177.json
### SCENE s05177 | INT. MERCY GENERAL - NIGHT SHIFT NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): KOFI, TARA, PIP, NAKAMURA, THE WOMAN, SCREEN
1 A ¶ Open-plan.
2 A Too many monitors.
3 A A drooping fern and a laminated sign: PLEASE DON'T MICROWAVE FISH.
4 A ¶ KOFI (30s, scrubs, headset) taps at a laptop with a video call open.
5 A TARA (20s, lanyard bursting with pins) wheels over on a stool and PIP (intern, 22) hovers behind her with a clipboard held like a shield, while a janitor mops slowly in the background and a drip pole in the corner, for no reason, slowly rotates by itself.
6 A ¶ On Kofi's screen: a Slack channel, #night-shift-chaos.
7 A ¶ ON SCREEN: ORRIN: has anyone seen the thing in room 6
8 A ¶ ON SCREEN: ORRIN: the glowing thing
9 D KOFI: Orrin's on his break and he's already losing it.
10 D TARA: Orrin's always losing it. Last week he said the fridge was talking.
11 D KOFI: The fridge was talking. That was the fridge's night-shift voice.
12 A ¶ On the laptop, DR. NAKAMURA's face fills a Zoom window, pixelated, ceiling fan behind him.
13 D DR. NAKAMURA [V.O.] (over video): Team, can you hear me? Admissions says there's a patient in six who isn't on the board.
14 D PIP: Is that bad?
15 D DR. NAKAMURA [V.O.]: It's a patient who isn't on the board.
16 D TARA: So, yes.
17 A ¶ THE WOMAN (60s, nightgown, barefoot, faintly luminous) steps out of the corridor and stands at the end of the desk, perfectly calm.
18 D PIP: Ma'am? Are you looking for someone?
19 D THE WOMAN: Good evening. I'm told this is where the others wait.
20 A ¶ Kofi shuts the laptop lid, hard.
21 A Dr. Nakamura's voice is cut off mid-word.
22 D KOFI: Others?
23 D THE WOMAN: My name is Elspeth. I was admitted four hundred years ago. Is there still a form?
24 A ¶ Silence.
25 A The mop stops.
26 A The drip pole stops.
27 A ¶ ON SCREEN (Kofi's phone, face up): ORRIN: told u
28 D TARA (very quiet): Kofi, get the clipboard.
29 A ¶ ELSPETH smiles, patient, and holds out her hand.
