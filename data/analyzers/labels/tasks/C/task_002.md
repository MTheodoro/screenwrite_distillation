You are a dramaturg reading the scene as an audience member would experience it. Follow who is doing what to whom moment by moment, then label.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05060.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05118_1.json
### SCENE s05118_1 | INT. DR. OKAFOR'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): SASHA, AIDEN, MARLON, DR. OKAFOR
1 A ¶ CLOSE ON the safe.
2 A A small grey box behind a framed diploma.
3 A ¶ Sasha works the dial with a stethoscope pressed against the metal.
4 A Aiden holds the flashlight steady.
5 A Marlon stands in the door and watches the hall.
6 D SASHA (whispering): Twelve. Twenty-six. Three.
7 A ¶ CLICK.
8 A ¶ The safe swings open.
9 A Inside, on a velvet cushion, sits a small box.
10 A ¶ INSERT - THE BOX.
11 A Sasha opens it.
12 A Inside is a plain gold ring and a folded note.
13 A ¶ Aiden unfolds the note and reads.
14 D AIDEN (quietly): "If you are reading this, you found out I never told her I was sorry."
15 A ¶ Silence.
16 A Sasha takes the note, reads it, and passes it to Marlon.
17 D MARLON: I don't think we should take it.
18 D AIDEN: Neither do I.
19 D SASHA: Put it back.
20 A ¶ Aiden closes the box.
21 A Places it in the safe.
22 A Spins the dial.
23 A They tiptoe out of the office as the front door CREAKS and a flashlight beam sweeps across the waiting room.
24 D DR. OKAFOR [O.S.]: Hello?
25 A ¶ BACK TO SCENE
26 A ¶ The three of them freeze in the hallway.
27 A Aiden puts a finger to his lips.
28 A The beagle barks once.
29 A ¶ DR. OKAFOR, 60s, in a raincoat, steps into the beam.
30 A He sees them.
31 D DR. OKAFOR: You found it.
32 D AIDEN: We put it back.
33 D DR. OKAFOR (after a long moment): Good. Come in and have some tea.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05181.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05171_1.json
### SCENE s05171_1 | INT. BANK - LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BEA, RENA
1 A ¶ Concrete.
2 A Cold.
3 A A single camera in the corner, its red light blinking.
4 A ¶ Rena looks up at it.
5 A Bea is already holding the backpack open.
6 D BEA: Don't look at it.
7 D RENA: I'm not looking at it.
8 D BEA: You're looking at it.
9 A ¶ Rena turns away.
10 A Beyond the wall, faintly, the crowd keeps chanting.
11 A Pay for it.
12 A Pay for it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05196.json
### SCENE s05196 | INT. ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): JESS, THEO
1 A ¶ String lights.
2 A A city that does not care.
3 A Two stools at the far corner, away from the party.
4 D JESS (pulling her sleeves over her hands): You came.
5 D THEO (not looking at her, turning a glass): You said it was important.
6 D JESS (laughs, too fast): I said there was free food.
7 D THEO (sets the glass down, slides it an inch away): There isn't any.
8 D JESS (looks at the glass, then the skyline): No. There isn't.
9 A ¶ This is the last summer they will be two people who share a hometown.
10 D THEO (finally meeting her eyes, then not): Are you still going?
11 D JESS (picks at a label): My flight's Thursday.
12 D THEO (nods slowly, counts something on the bar with his finger): Right. Thursday.
13 D JESS (quiet): You could say something.
14 D THEO (shrugs, a shrug with a lot of weight in it): What would I say.
15 D JESS (a short breath): I don't know. Anything. You used to say everything.
16 D THEO (pushes his stool back, an inch, two): I used to think it would change something.
17 D JESS (stands, stool scraping): That's not fair.
18 D THEO (standing too, voice tight): Fair. You decided this in March. You told your mum before you told me.
19 D JESS (hands shaking, grabs her jacket): Because I knew you'd do this. Go quiet. Make it my fault.
20 D THEO (louder, a head turns at the next table): It is your fault!
21 D JESS (throws the jacket down, not caring who looks): Then say it! Say you don't want me to go!
22 D THEO (a long beat. He breathes. His whole face gives): I don't want you to go.
23 D JESS (whispering, the fight draining out of her): Okay.
24 D THEO (picks up the jacket, holds it out): Okay.
25 D JESS (takes it. Doesn't put it on): I'm still going.
26 D THEO (smiles, wet-eyed): I know.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05024.json
### SCENE s05024 | INT. HOLLOWAY HOUSE - DRAWING ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ODILE VANCE, HARLAN, PRU, TEODOR, ROWAN
1 A ¶ Rain has been falling since the cemetery and now it ticks against the tall windows like something asking to be let in.
2 A Lamps are lit too early.
3 A The room smells of lilies, wet wool and the kind of coffee that is made in urns.
4 A ¶ ODILE VANCE, sixty, stands by the sideboard with a plate she will never finish, and she watches her late husband's brother HARLAN pour himself a third whisky with a steadiness that is almost an accusation.
5 A Across the room, PRU, the dead man's daughter, folds and unfolds a funeral program until it has no shape, while TEODOR, the family lawyer, drifts behind her saying nothing in a very organised way.
6 A Near the piano, ROWAN, the dead man's nurse, who is wearing a borrowed black cardigan and who uses they and them, stands alone with their hands in their pockets, and they are the only one in the room who has noticed the study door is open.
7 D ODILE (low, to Harlan): You told the police you were in Dover that night.
8 D HARLAN: I told them what was true, Odile.
9 A ¶ The landline in the hall RINGS.
10 A Nobody moves.
11 A It rings again.
12 D TEODOR: I'll go.
13 A ¶ He goes.
14 A His voice carries back, flat and polite, through the open door.
15 D TEODOR [O.S.]: Holloway residence. ... No, he is not available. ... Who is this, please?
16 A ¶ Rowan turns toward the sound.
17 A Pru stops folding.
18 D PRU (very quietly): Who is it?
19 D TEODOR [O.S.] (a long pause, then no longer polite): Say that again.
20 A ¶ Harlan sets down the glass.
21 A The lilies shiver in a draught from the study.
22 A Rowan takes one step toward the hall, and Odile, without turning her head, says their name like a warning.
23 D ODILE: Rowan.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05081.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05082.json
### SCENE s05082 | INT. SUBWAY CAR - EVENING RUSH
Detected names (may be incomplete or contain aliases): POPPY NAKAMURA, BISCUIT, MARCUS, DELILAH OKONKWO, CLANG, TUNNEL WALL
1 A ¶ A packed Number 6 train SCREECHES through the dark.
2 A Straphangers sway like seaweed.
3 A The lights flicker.
4 A The car smells of pizza and wet umbrellas.
5 A ¶ CLOSE ON a tiny paper bag in the arms of POPPY NAKAMURA, 9, brave, braces on her teeth.
6 A Inside the bag, a hamster peeks out.
7 D POPPY: Don't look, Biscuit. Crowds make you nervous.
8 D BISCUIT [O.S.] (muffled squeak): I'm not nervous. You're nervous.
9 A ¶ ANGLE ON Poppy's big brother, MARCUS, 15, headphones around his neck, glued to a dead phone.
10 D MARCUS: Pop, we're four stops from home. Do not name-drop the hamster in public.
11 D POPPY: He has a name, Marcus.
12 D MARCUS: He has a name that means "snack" to every cat in Queens.
13 A ¶ The train JERKS.
14 A Everybody lurches.
15 A A man's coffee flies.
16 A ¶ WE SEE the lights die.
17 A Total black.
18 A A collective GASP.
19 A ¶ The train GROANS to a stop.
20 D POPPY [CONT'D]: Marcus?
21 D MARCUS: Right here, Pop.
22 D DELILAH (from the dark, a big voice): Everybody stay calm! I've been stuck down here before!
23 A ¶ Poppy squints.
24 A A small flashlight clicks on.
25 A It shines on DELILAH OKONKWO, 60s, a transit worker's vest, a thermos the size of a fire hydrant.
26 D DELILAH [CONT'D]: Ten minutes. Tops. Y'all hold hands if you gotta.
27 D MARCUS: Is that official?
28 D DELILAH: It's a suggestion, baby.
29 D POPPY: Delilah, I think Biscuit's scared.
30 D DELILAH: Biscuit is the hamster?
31 D POPPY: He's a very brave hamster.
32 D MARCUS: He is literally shaking.
33 D POPPY: Marcus, shush!
34 D DELILAH: Both of you shush. Hear that?
35 A ¶ Silence.
36 A Then a faint CLANG, CLANG, CLANG from the tunnel ahead.
37 A ¶ INSERT - THE TUNNEL WALL, a rusty pipe trembling.
38 D POPPY (whispering): That's not a ten-minute noise.
39 D DELILAH (low): No. It is not.
40 D MARCUS: Okay. Okay. What do we do?
41 D DELILAH: You and your sister stay by me. Poppy, you keep that little fella warm.
42 D POPPY (to the bag): You hear that, Biscuit? We're a team now.
43 D BISCUIT [O.S.] (squeak): Tell Marcus I said sorry about his sneakers.
44 D MARCUS: What did he say?
45 D POPPY: Nothing.
46 A ¶ The clanging STOPS.
47 A ¶ The lights flash on.
48 A The train LURCHES forward.
49 A ¶ Everyone CHEERS.
50 A ¶ BACK TO SCENE
51 A ¶ Marcus slumps against a pole, laughing with relief.
52 A Poppy squeezes the bag.
53 A Delilah screws the cap on her thermos.
54 A ¶ This is the last time the three of them will ever be strangers.
55 D DELILAH: Next stop is yours, kids.
56 D POPPY: Thank you, Delilah.
57 D DELILAH: Thank the hamster.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05064_0.json
### SCENE s05064_0 | INT. HOLLOWAY VETERINARY CLINIC - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NATE DUNN
1 A ¶ HANDHELD.
2 A A phone camera, held at arm's length, swinging.
3 A The picture is grainy, overexposed by the buzzing tube lights.
4 A A timestamp burns in the corner: 11:47 PM.
5 A ¶ NATE DUNN, 28, lanky, a beanie, a hoodie with the sleeves pushed up, holds the camera on himself, grinning too hard, a kid doing a bit he has done a hundred times for a channel with four hundred subscribers.
6 D NATE: Okay so we're live. Not live live. Recording live. If you're new, I'm Nate, and tonight we are doing what the comments asked for, which is the abandoned vet clinic on Route 9.
7 A ¶ He turns the camera.
8 A The waiting room is wide, low-ceilinged, and wrong.
9 A Plastic chairs bolted in rows.
10 A A reception desk with a dead phone and a bowl of petrified dog biscuits.
11 A On the wall, a faded poster, "Have You Hugged Your Pet Today?", a cartoon beagle smiling in a way that has gone sour.
12 D NATE [CONT'D]: So, lore. This place closed in 2009. Owner just kind of walked out one day. Left the files, left the meds, left, and this is the part I love, the animals.
13 A ¶ He laughs.
14 A It dies fast.
15 D NATE [CONT'D]: I mean not the animals. Obviously. Not the. Anyway.
16 A ¶ The camera pushes toward a hallway on the far side of the desk.
17 A At the mouth of it, a rusted gurney.
18 A Beyond that, dark.
19 A ¶ ON PHONE: A text banner drops from the top of the frame.
20 A "MO: ur not seriously there rn"
21 D NATE [CONT'D] (to the camera): That's my buddy Mo. He's scared of everything. Mo, I see you, I'm okay.
22 A ¶ He types with one thumb, camera shaking, and we see over his shoulder the reply go out: "im fine. go to bed."
23 A ¶ ON PHONE: "MO: nate. its midnight. come home."
24 A ¶ He pockets the phone.
25 A In the glass of the front door, behind him, there's a reflection of the empty lot outside, the van, the moon, and for a half second something low and pale moving past the van, something about the size of a dog.
26 A ¶ He doesn't see it.
27 A The camera does.
28 D NATE [CONT'D]: Okay! Hallway.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05068_0.json
### SCENE s05068_0 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): WORLD'S OKAYEST GRANDMA, THE MAN, DEB
1 A ¶ Fluorescent lights.
2 A A row of molded chairs.
3 A A ficus that died years ago and has not been told.
4 A ¶ Deb, 60s, reception, bifocals, a mug that says WORLD'S OKAYEST GRANDMA, taps at a keyboard behind scratched plexiglass.
5 A She doesn't look up when the door opens.
6 A ¶ A man comes in.
7 A He is tall, late forties, a gray work jacket zipped to the throat, a folder pressed to his ribs like a shield.
8 A He stands very still just inside the door, as if the room might reject him.
9 A THE MAN waits.
10 D DEB: Name?
11 D THE MAN: I have a nine o'clock.
12 D DEB: Name.
13 A ¶ He says nothing for a second.
14 A She finally looks at him.
15 D THE MAN: Is Officer Okafor in?
16 D DEB: Honey, everybody's in. It's nine in the morning. Sit.
17 A ¶ He sits.
18 A He keeps the folder on his knees.
19 A Across the room, a clock ticks, slower than a clock should.
