You are an experienced script supervisor annotating scenes for a continuity database. Work carefully, line by line.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05174.json
### SCENE s05174 | INT. THE ROYAL OAK FUNCTION ROOM - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): MO, JEN
1 A ¶ Half-deflated balloons.
2 A A disco ball turns, one mirror missing.
3 A Somewhere a slow song limps to its end.
4 A ¶ MO (50s, lanyard still around his neck under his dicky bow) holds a plastic cup of warm prosecco and has the look of a man cornered by a sofa.
5 A JEN (40s, heels in one hand) lowers herself into the chair opposite and says nothing for a good ten seconds.
6 D JEN: Congratulations, by the way.
7 D MO: Cheers. I'm not the groom.
8 D JEN: No, but you did the seating plan.
9 D MO: Technically, I did the spreadsheet.
10 A ¶ Jen nods, slowly.
11 D JEN: You sat Big Dave next to his ex.
12 D MO: I wasn't told.
13 D JEN: You were. In a meeting. Eleven times.
14 A ¶ He opens his mouth.
15 A Closes it.
16 A Studies the carpet.
17 D MO: Right.
18 A ¶ A door SLAMS somewhere out in the car park.
19 A They both flinch.
20 D JEN: That'll be Dave.
21 D MO: Probably.
22 A ¶ Jen sets her shoes on the table.
23 A She looks at them, and then at him, and something in her shoulders gives.
24 D JEN: Honestly? It's the best wedding I've been to in years.
25 D MO: Is it?
26 D JEN: Mrs K cried at the vows. Dave cried at the buffet. Nobody's cried at work all year and I thought, there, that's a company away day.
27 A ¶ He lets out a breath.
28 A Almost a laugh.
29 D MO: I did write that in the risk assessment.
30 A ¶ His phone BUZZES on the table.
31 A He reads it.
32 A Turns it face down.
33 D JEN: Who's that?
34 D MO: HR. They want a word about Monday.
35 D JEN: Tell them it's a Saturday.
36 A ¶ He smiles.
37 A She picks up her shoes.
38 A For the first time in eleven years, they stay for the last song.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05111_1.json
### SCENE s05111_1 | EXT. NIGHTBIRD STUDIOS - STREET - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ They tumble out into the rain.
2 A ¶ Behind them, the windows blow out in a shower of light.
3 A ¶ Silence.
4 A ¶ Riley's phone BUZZES.
5 A ¶ ON PHONE: take twelve
6 A ¶ He drops it into a puddle.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05103.json
### SCENE s05103 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): MARGOT, THEO, DESMOND, TWINS, WARDEN, ODILE
1 A ¶ Dark.
2 A A storm presses on the window over the sink.
3 A One candle on the table, a battery lantern on the counter, a fridge that has stopped humming.
4 A ¶ MARGOT, 40s, stands at the counter slicing a loaf of bread with great care.
5 A THEO, 20s, they/them, sits at the table with their knees drawn up.
6 A DESMOND, 50s, Margot's husband, walks the room in his socks, trying every switch.
7 D DESMOND: Nothing. Not the stove, not the porch light, not even the little green clock on the microwave.
8 D MARGOT: It's a storm, Des. It will come back.
9 D DESMOND: It's the third time this month.
10 D MARGOT: Then it will come back a third time.
11 D THEO (beat): Can I say something and nobody does a face.
12 D MARGOT: We don't do faces.
13 D THEO: You are doing a face right now.
14 D MARGOT: That is my regular face.
15 A ¶ Desmond laughs.
16 A It dies in the dark.
17 A Thunder, far off, low and patient.
18 D DESMOND: Where are the girls?
19 D MARGOT: Upstairs. Playing the game where they don't sleep.
20 A ¶ Footsteps overhead.
21 A Then on the stairs.
22 A Then in the doorway stand THE TWINS, eight years old, identical, in matching pyjamas, each holding one end of a long silver thread that runs back into the dark of the hallway and does not appear to end.
23 D THE TWINS (together): Grandmother is here.
24 A ¶ Margot lowers the knife.
25 A Desmond turns the dead light switch again.
26 A Theo unfolds from the chair very slowly and puts themself between the table and the door, while the candle flame leans away from the hall as if it has been told a secret.
27 D MARGOT: Girls. Your grandmother died in March.
28 D THE TWINS (together): She says she's been delayed.
29 A ¶ Desmond's phone rings on the counter.
30 A Everyone looks at it.
31 A He answers on speaker and the voice is a man's, flat, official, tired.
32 D WARDEN [V.O.]: Mr. Hale? This is the Warden of the Third Gate. I'm sorry to call so late. Is Madam Odile with you yet?
33 D DESMOND: I'm sorry, who?
34 D WARDEN [V.O.]: She left the Gate at six. We've been trying to reach the family since. Please don't let her cross the threshold of your kitchen until the lamps are lit. She is not, strictly speaking, herself.
35 D THEO (beat): She's not what?
36 A ¶ The thread tightens.
37 A Out of the dark of the hallway steps ODILE, 70s, in a wet funeral coat, her eyes two small lit lanterns.
38 A She smiles at Margot with great tenderness.
39 D ODILE: Margot, my darling. You've cut the bread so thin. Did you know the lights go out when I'm near? I'd forgotten.
40 D MARGOT (very quietly): Mama.
41 D ODILE: Light one more candle for me. Only one more. And then we can talk about what you owe.
42 A ¶ Nobody moves.
43 A The candle gutters.
44 A Rain on the glass.
45 A The Twins hold their silver thread like a leash.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05102.json
### SCENE s05102 | INT. MOON COLONY FUNERAL RECEPTION - EVENING
Detected names (may be incomplete or contain aliases): PIM, PIP, AUNT NEBULA
1 A ¶ Grey dust drifts past the big round window.
2 A Earth hangs there, small and blue and very far away.
3 A Under the dome, a long table of nutrient cakes nobody is touching.
4 A ¶ PIM, a squat round robot the size of a beach ball with two floppy antenna ears, rolls up to the cake table.
5 A Next to him bobs PIP, a thin silver drone with a single blinking eye.
6 A Everyone says they are the same model.
7 A They are not.
8 D PIM (to everyone): Thank you all for coming to say goodbye to Captain Barnaby Tumbleton, who was the best captain of the best crater on the whole moon!
9 A ¶ Dust.
10 A Hush.
11 A A distant air pump going whoosh.
12 D PIP (to Pim): Pim, you said "best" twice and he was the only captain.
13 D PIM (muttering): Then he was twice as best.
14 A ¶ The dome lights flicker low.
15 A A tiny sad chime plays from the speakers, and the cake's candle gutters in the thin air.
16 D PIP: Pim I miss him.
17 D PIM: Me too Pip. (sniff) My antenna ears are leaking.
18 A ¶ The airlock hisses.
19 A In rolls AUNT NEBULA, an enormous fluffy purple dust-bunny robot in a black veil, humming slowly.
20 A She stops.
21 A Everything goes still.
22 D AUNT NEBULA (to the room): Nobody told me I was late. Is there cake left? Is he still dead?
23 D PIM (softly): Yes. To both.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05060.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05177.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05111_0.json
### SCENE s05111_0 | INT. NIGHTBIRD STUDIOS - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): RILEY, PRIYA, COLE, DEZ
1 A ¶ Midnight.
2 A Rain on the roof.
3 A ¶ HISS of the tape machine.
4 A A red RECORD light.
5 A ¶ Foam panels.
6 A Cables like veins.
7 A A grand piano under a sheet.
8 A ¶ RILEY, 30s, producer, hunches over the console.
9 A He rubs his eyes.
10 A Coffee gone cold.
11 A ¶ Behind the glass, PRIYA, 20s, singer, stands at the mic.
12 A Headphones on.
13 A Eyes closed.
14 A ¶ COLE, 40s, engineer, slouches by the patch bay.
15 A He chews a pen.
16 D RILEY (into talkback): Take eleven. From the bridge.
17 D PRIYA (through speaker): Can I hear the guide?
18 D RILEY: It's in your cans.
19 D PRIYA: It's not.
20 A ¶ He checks the fader.
21 A Pushes it up.
22 A ¶ BZZZT.
23 A Feedback.
24 A ¶ Everyone flinches.
25 D COLE: That wasn't me.
26 D RILEY: Mute the room mics.
27 D COLE: They're muted.
28 A ¶ Silence.
29 A ¶ Then a soft sound in the speakers.
30 A A breath.
31 A ¶ Not Priya's.
32 D PRIYA (through speaker): Riley? Who's in here with me?
33 D RILEY: Nobody. It's the monitors.
34 A ¶ He taps the glass.
35 A She doesn't turn.
36 A ¶ PHONE BUZZES on the console.
37 A He grabs it.
38 A ¶ ON PHONE: where r u
39 A ¶ ON PHONE: the door is open
40 A ¶ He frowns.
41 A Looks at the live room door.
42 A Shut.
43 A Locked.
44 A Light off.
45 D COLE: Who is it?
46 D RILEY: Dez. He's not even in the building.
47 A ¶ He thumbs a call.
48 A Puts it on speaker.
49 A ¶ RING.
50 A RING.
51 D DEZ [V.O.] (distorted, far): Riley? Why are you calling from my house?
52 D RILEY: What? I'm at the studio.
53 D DEZ [V.O.]: I'm at the studio. I'm in the live room. Priya's with me.
54 A ¶ Beat.
55 A ¶ Riley looks through the glass.
56 A ¶ Priya is alone.
57 A Mouth open.
58 A Singing.
59 A No sound.
60 D COLE: Kill the tape.
61 D RILEY: I'm trying.
62 D COLE: Kill it!
63 D RILEY: It's not responding!
64 A ¶ BANG.
65 A ¶ The piano sheet FLIES off.
66 A ¶ The keys PLUNGE.
67 A Alone.
68 A ¶ A chord.
69 A Low.
70 A Wrong.
71 D PRIYA (through speaker): It knows my name.
72 D RILEY: Priya, come out. Now.
73 D PRIYA (through speaker): It's saying it.
74 D COLE: Saying what?
75 D DEZ [V.O.]: Don't open the door.
76 D RILEY: Dez, where are you?
77 D DEZ [V.O.]: Don't open the door don't open the door--
78 A ¶ CLICK.
79 A Dead line.
80 A ¶ A dog BARKS outside.
81 A Frantic.
82 A A delivery kid on the sidewalk ducks under an awning, phone raised, filming the building.
83 A The dog drags its leash toward the street.
84 A ¶ Inside, the lights DIE.
85 A ¶ Red RECORD light only.
86 D COLE: Where's the exit?
87 D RILEY: Behind you.
88 D COLE: There's a wall behind me!
89 D PRIYA (through speaker): Riley. Riley. Riley.
90 D RILEY: I'm coming.
91 D COLE: Don't.
92 D RILEY: She's in there!
93 D COLE: She's not alone!
94 A ¶ The glass CRACKS.
95 A A line zigzags across it.
96 A ¶ Priya turns.
97 A Slowly.
98 A ¶ Her eyes are open.
99 A They aren't hers.
100 D PRIYA (her voice, doubled): Take twelve.
101 A ¶ The speakers SCREAM.
102 A ¶ Every fader slams to the top.
103 A ¶ Riley grabs the door.
104 A It burns.
105 A ¶ He kicks it.
106 A SLAM.
107 A It gives.
108 A ¶ He drags Cole through.
109 A They hit the corridor running.
110 A ¶ The red light follows them.
111 A Down the hall.
112 A Faster.
113 A ¶ BOOM.
114 A ¶ The whole building exhales.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05185.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05064_2.json
### SCENE s05064_2 | INT. HOLLOWAY VETERINARY CLINIC - WAITING ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): NATE, TEENAGERS
1 A ¶ The camera whips around, a smear of light and floor and ceiling.
2 A He is running now, the image jerking with each stride, his breathing a bellows, the chairs flashing past in rows.
3 A Behind him claws skitter, closer, wet and hungry.
4 D NATE: Go go go go go
5 A ¶ He hits the front door and it doesn't open.
6 A He hits it again.
7 A He slams his shoulder into it and the glass shivers but holds, a deadbolt turned from the outside, a padlock hung on the other side by someone he never heard.
8 A ¶ Through the glass he sees the lot, the van, and two TEENAGERS in matching letterman jackets standing at the edge of the pavement with their phones raised, filming him, one laughing, one not.
9 D NATE [CONT'D]: Hey! HEY! Open the door! Please! Open the door!
10 A ¶ The laughing one waves.
11 A The other lowers his phone slowly, and his face goes slack.
12 A ¶ Behind Nate, the camera catches the reflection in the glass: the pale dog, in the center of the waiting room, standing on its hind legs.
13 D NATE [CONT'D] (barely audible): Oh no.
14 A ¶ ON PHONE: A final text drops, ignored, as the lens falls to the floor and tumbles.
15 A "MO: im coming"
16 A ¶ The picture rolls once, twice, and comes to rest at an angle, showing the ceiling tiles and one hand reaching, then a long dragging sound, then black.
17 A ¶ TIMESTAMP: 12:09 AM.
18 A The recording continues for nine more minutes with no picture.
19 A Only sound.
20 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05093.json
### SCENE s05093 | INT. SUBBASS SOUND - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): LINUS, MO, WREN, DENISE, PRIYA
1 A ¶ CLOSE ON a mixing console, faders crawling up and down by themselves.
2 A Pull back to find Mo Delgado, 30s, producer, hoodie, three coffees deep, chewing a pen cap.
3 A ¶ Through the glass, in the vocal booth, Linus Thorne, 50s, a former one-hit wonder in a leather vest, stands before a mic with his eyes closed, singing very gently about a sandwich.
4 D LINUS [V.O.] (through talkback, sincere): "Oh, ham, you were never mine..."
5 A ¶ Mo presses the talkback button.
6 D MO: That's great, Linus. Another take. Maybe less ham.
7 A ¶ Wren Okoye, 20s, the engineer, slumped at the second chair with a laptop, doesn't look up.
8 D WREN (to the room): We've done forty-one takes.
9 D MO (muttering, to himself): Forty-two, with feeling. Forty-two.
10 A ¶ Mo's phone lights up on the desk.
11 A ¶ ANGLE ON PHONE SCREEN
12 A ¶ "LABEL - DENISE".
13 A ¶ Mo answers on speaker.
14 D DENISE [V.O.]: Mo. Tell me the single is done.
15 D MO: It's, uh, ripening.
16 D DENISE [V.O.]: It's a song about lunch meat. Is it done.
17 A ¶ Wren mouths "No" at the phone.
18 A Mo waves her off.
19 D MO (to everyone, bright): Okay team! Quick huddle, we're gonna just, vibe.
20 A ¶ Priya Ramanathan, 20s, the assistant, enters with a tray of tea, nods at nobody, sets it down, and sits.
21 A ¶ WE SEE Linus through the glass, tapping the window, mouthing something.
22 A Everyone ignores him.
23 D PRIYA (to Mo only): He's asking if the lunch meat is "emotionally honest" enough.
24 D MO (to Priya): Tell him it's the most honest ham I've ever heard.
25 A ¶ BACK TO SCENE
26 D WREN (to herself, typing): I'm updating my resume.
27 D DENISE [V.O.]: I heard that.
28 A ¶ Mo sinks into his chair.
29 A Nobody speaks.
30 A The faders keep creeping.
31 A Take forty-three begins, soft and sincere and terrible.
