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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05150_3.json
### SCENE s05150_3 | INT. UNIT 214 - LATER
Detected names (may be incomplete or contain aliases): PHONE, PRIYA, TOBY
1 A ¶ Boxes stacked by the door.
2 A The woman sits on the rocking horse crate, calm, scrolling.
3 A ¶ ON PHONE (TEXT FROM NELL): hello??
4 A Priya answer me
5 D PRIYA (into phone, flat): I found it, Nell. All of it.
6 A ¶ Toby leans on the doorframe, watching the rain.
7 D TOBY: You want me to turn the light back on in the hall?
8 D PRIYA: Leave it.
9 A ¶ Rain.
10 A The drip in the bucket.
11 A The mirror, quiet.
12 A ¶ SMASH CUT TO BLACK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05082.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05196.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05180.json
### SCENE s05180 | INT. HARBORVIEW VETERINARY CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): RUIZ, THE SQUAD, OKAFOR
1 D RUIZ [V.O.]: Every war leaves a trail of paperwork. Nobody tells you the paperwork is the part that gets people killed.
2 A ¶ Fluorescent tubes buzz over a waiting room that smells of bleach and wet dog, and Detective Mara Ruiz, fifties, rain on her shoulders, stands at the reception desk with a manila folder pressed to her chest while Dr. Femi Okafor, forties, blood on his scrubs, pulls a shutter down over the front window, and behind them four uniformed soldiers in damp fatigues fan out through the kennel hall, boots squeaking on the linoleum, rifles low, checking cages full of sleeping beagles and one furious cat.
3 D RUIZ [V.O.]: Three tours, one medal, and now a vet clinic at two in the morning. That's how it ends for the kind of man we came to find.
4 D THE SQUAD: Hall's clear!
5 D RUIZ: Dr. Okafor, I'm going to ask you once.
6 D OKAFOR: You have been asking since you walked in.
7 D RUIZ: Where is Sergeant Hale?
8 D OKAFOR: Sedated. Surgery two. He walked in with a shrapnel wound and a dog that was bleeding worse than he was.
9 D RUIZ: A dog.
10 D OKAFOR: A Belgian Malinois. Military issue, tag filed off. I stitched the dog first. The man made me.
11 D RUIZ: And you didn't think to call anyone.
12 D OKAFOR: I thought a dying animal outranked a phone call. Was I wrong?
13 D RUIZ: You're harboring a deserter who is wanted in connection with eleven deaths.
14 D OKAFOR: I'm harboring a patient. He has a pulse. That's all my license asks me to check.
15 D RUIZ: Your license is going to be the least of your problems.
16 D OKAFOR: Then arrest me after he wakes up. I'd like him to wake up.
17 D RUIZ: You think he's innocent.
18 D OKAFOR: I think he talks in his sleep. Under anesthesia he kept saying the same name, over and over, and it wasn't a woman's name and it wasn't a place.
19 D RUIZ: Whose name?
20 D OKAFOR: Yours.
21 D RUIZ [V.O.]: There it was. Twenty years of keeping my past in a locked drawer, and a veterinarian hands me the key.
22 D RUIZ: He's lying to you.
23 D OKAFOR: Sedatives don't let you lie, Detective. That's rather the point of them.
24 D THE SQUAD: Detective, we have movement in surgery two!
25 D RUIZ: Nobody touches that door until I say.
26 D OKAFOR: He'll tear his sutures if he stands.
27 D RUIZ: Then he should have thought about that before he ran.
28 D OKAFOR: Ran from what? Tell me that much. Tell me what a man like that runs from.
29 D RUIZ: From me.
30 A ¶ Silence.
31 A The cat hisses.
32 A Somewhere in the back, a steel tray CLATTERS to the floor, and Ruiz, hand on her holster, shoulders through the swinging doors as the Squad closes in behind her, lamps swinging across the kennels, Okafor following with his palms raised, and on the operating table the blanket lies empty, the window above it open to the rain, the Malinois sitting upright beneath it, waiting, staring at her as if it had been told she would come.
33 D RUIZ [V.O.]: He didn't run from me. He ran to me. The dog was the message. The dog was always the message.
34 D OKAFOR: What does that mean?
35 D RUIZ: It means we are standing in exactly the place he wanted us to be.
36 D THE SQUAD: Contact! Front entrance!
37 A ¶ The lights die.
38 A Rain.
39 A Boots.
40 A Dark.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05066.json
### SCENE s05066 | INT. MARRIOTT SUITES - 4TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): COREY, DANI, BEX, MARCUS, LENA, GREG
1 A ¶ fluorescent light. carpet the colour of a bruise. a room service cart abandoned outside 412.
2 A COREY, DANI, BEX, MARCUS and LENA stand in a loose knot outside the conference suite, lanyards still on, name tags crooked, the team retreat is in its third hour of "synergy".
3 D COREY: ok but nobody says anything to Greg.
4 D DANI: nobody's saying anything to Greg.
5 D COREY: because last time somebody said something to Greg we all got a mindfulness seminar.
6 D BEX: i liked the mindfulness seminar.
7 D MARCUS: Bex, they made us hold hands with the interns.
8 D BEX: it was grounding. also i'm allowed to like things.
9 D LENA: Bex is allowed to like things.
10 D BEX: thank you Lena. they are the only one who gets it.
11 A ¶ ON PHONE: A message from "GREG (VP)" lights up Corey's screen. "great energy team!! back in 5 for the breakout"
12 D COREY: he said breakout. Dani. he said breakout.
13 D DANI: no. no no no. we did the breakout.
14 D MARCUS: that was the pre-breakout.
15 D LENA: what's the difference between a breakout and a pre-breakout
16 D MARCUS: the pre-breakout has snacks.
17 D BEX: i'm not going back in. i'm going to stay in the hall and become a plant.
18 D DANI: Bex you literally can't. you're presenting the deck.
19 D BEX: Dani, they, i mean i, i have never once presented the deck. you're confusing me with the other Bex.
20 D COREY: there's another Bex?
21 D BEX: no. i just wanted to see if you'd check.
22 A ¶ ON PHONE: A second message, group chat "RETREAT 2K24 (DO NOT MUTE)".
23 A Lena: "dont look but greg is at the elevator".
24 A Marcus: "he's crying???"
25 A Dani: "happy crying or layoff crying"
26 A ¶ They all turn at once.
27 A At the far end of the corridor, the elevator dings.
28 A GREG, 50s, vest, lanyard, a laminated agenda, steps out wiping his eyes with a tiny hotel napkin.
29 D LENA (whispering): Layoff crying.
30 D MARCUS: Happy crying doesn't wear a vest.
31 D COREY: Everybody act normal. Dani, normal.
32 D DANI: i'm so normal. i am the normalest.
33 D BEX (slowly raising a hand): hi Greg.
34 A ¶ Greg looks up.
35 A A beat.
36 A He sniffles.
37 D GREG: Team. Great. Love it. Love the energy.
38 A ¶ He walks past them into the suite and the door sighs shut.
39 A They stand in the corridor in silence.
40 D MARCUS: So. Breakout.
41 D COREY: Breakout.
42 A ¶ They don't move.
43 A The cart rattles faintly as the building settles.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05165.json
### SCENE s05165 | INT. COLDLINE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): BOGDAN, THE WOMAN, ILSE, TWINS
1 A ¶ Water is on the floor, ankle high.
2 A The power is out.
3 A A small camping lantern stands on a shelf and gives yellow light, and BOGDAN, 50s, is moving boxes of canned food from low shelves to high shelves one by one, and in the corner near the loading door THE WOMAN, 30s, wet coat, sits on a stack of pallets with her phone in her hand and she looks at the stairs and at the water and at him, and the rain on the metal roof is loud.
4 D BOGDAN: This shelf is dry. Put your bag here.
5 D THE WOMAN: I keep my bag.
6 D BOGDAN: OK.
7 A ¶ He lifts another box.
8 A She watches him.
9 A The water moves around his boots.
10 A ¶ ON PHONE: Message failed.
11 A No signal.
12 A ¶ She puts the phone in her pocket.
13 D THE WOMAN: How long you work here?
14 D BOGDAN: Eleven years. Never this much water.
15 D THE WOMAN: The driver did not come back.
16 D BOGDAN: He will come.
17 D THE WOMAN: You say this like you do not think so.
18 A ¶ Bogdan does not answer.
19 A He gives her a can of peaches and a plastic spoon.
20 A She takes it.
21 A She does not open it.
22 A She holds it on her knee.
23 D BOGDAN: Open. Eat. We have enough.
24 D THE WOMAN: Later.
25 A ¶ Bogdan sets the lantern higher.
26 A Outside, a car horn sounds far away, two short notes, then stops.
27 A They both look at the door.
28 D THE WOMAN [CONT'D]: My name is Ilse. I should say it.
29 D BOGDAN: Bogdan.
30 D ILSE: I know. It is on your jacket.
31 A ¶ He almost smiles.
32 A He looks at the stitching on his chest as if he forgot it.
33 A ¶ Then the side door BANGS open.
34 A Water rushes in.
35 A THE TWINS, two boys about ten, soaked to the skin, in matching yellow raincoats, stand in the frame holding one backpack between them.
36 A They do not speak.
37 A They look at the lantern.
38 D BOGDAN [CONT'D] (softly): Come. Come inside. Close the door.
39 D THE TWINS (together): We are looking for our mother.
40 A ¶ Ilse stands up.
41 A She sets the can of peaches down on the shelf, open now, with the spoon in it, and she pulls off her coat and puts it over the two small shoulders.
42 D ILSE: Sit. Here. It is dry.
43 A ¶ The boys sit on the pallets.
44 A Bogdan hands them the peaches.
45 A They share the spoon.
46 A ¶ Rain.
47 A The lantern flickers, then holds.
48 A ¶ ON PHONE: one bar.
49 A A message comes through at last.
50 A ¶ ON PHONE: "Where r u?
51 A We are at the bridge.
52 A Boys with you?"
53 A ¶ Ilse reads it.
54 A She does not smile.
55 A She turns the phone so the twins can see the screen, and she keeps her hand on the nearest small wet head.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05068_0.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05181.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05148_0.json
### SCENE s05148_0 | INT. NEW BEGINNINGS FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): NURSE, MAYA, DEV, THE WOMAN
1 A ¶ We see a quiet waiting room with beige chairs and a fish tank.
2 A The power has been out for three days after the storm, and the clinic is running on one generator.
3 A We can tell this because the lights are dim and the fish tank is not bubbling.
4 A ¶ CLOSE ON a clock on the wall.
5 A It reads 2:14.
6 A It is not moving.
7 A ¶ Maya, 30s, sits very straight with her purse in her lap.
8 A Beside her, Dev, 30s, is tapping his knee.
9 A They are not talking.
10 A We can tell they are not talking because there is no talking.
11 A ¶ ON PHONE: Mom - where r u guys?? is it happening
12 A ¶ Maya turns her phone face down on her thigh without answering.
13 A ¶ A NURSE enters.
14 A We see that she is carrying a clipboard.
15 A She is young and looks like she has not slept since the storm began.
16 D NURSE: Maya Rosen?
17 D MAYA: Yes. That's me.
18 D NURSE: Dr. Okafor will see you now. Only you, though. Generator rules.
19 D DEV (standing): I'm her husband.
20 D NURSE: I know, Mr. Rosen. I'm sorry.
21 A ¶ Dev sits back down.
22 A He does not say anything.
23 A His hand is still on Maya's arm.
24 D MAYA: Dev. It's okay.
25 D DEV (not meaning it): Yeah. Okay.
26 A ¶ Maya stands and follows the nurse through a swinging door.
27 A We see the door swing shut behind her.
28 A ¶ Dev is alone.
29 A He pulls out his phone and we see the screen.
30 A ¶ ON PHONE: Dev: they only let her in. what do i do
31 A ¶ ON PHONE: Mom: sit. be there. thats the job
32 A ¶ He looks at the fish tank.
33 A One fish is hanging at the surface, mouth opening and closing.
34 A ¶ A WOMAN in a green raincoat enters from the street door.
35 A She is soaked.
36 A She looks at the empty reception desk, then at Dev, then back at the desk.
37 A She does not sign in.
38 D DEV [CONT'D]: They're, uh... generator only. You might wait outside.
39 D THE WOMAN: I'm not a patient.
40 D DEV: Oh.
41 D THE WOMAN: I'm here for the freezer.
42 D DEV: What freezer?
43 A ¶ She does not answer.
44 A She walks past him toward the hallway marked STAFF ONLY.
45 A ¶ We see Dev watch her go.
46 A He stands, unsure, then follows at a distance.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05054.json
### SCENE s05054 | EXT. HARBOUR PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): METAPHOR, TESS, RILEY, ABE, NOOR, WAILS, RADIO, GIL
1 A ¶ Crowd.
2 A Cardboard signs.
3 A A drum somewhere.
4 A ¶ Riley, 20s, in a thrifted raincoat, is holding a sign that says THE SEA IS NOT A METAPHOR.
5 A She is also holding two coffees.
6 A ¶ Tess, 30s, arrives, out of breath, with a tote bag.
7 D TESS: sorry sorry, the train was
8 D RILEY: it's fine. you're here.
9 A ¶ Tess takes the coffee.
10 A They stand there.
11 A The drum gets louder.
12 A ¶ Abe, 60s, in a lab coat under a puffer jacket, pushes through with a megaphone he doesn't know how to hold.
13 D ABE: is this thing on? it's not on.
14 D TESS: it's the red button.
15 D ABE: which one's the red button.
16 A ¶ Noor, 19, climbs onto a bench.
17 A Everyone looks up.
18 A Nothing.
19 D NOOR (to the crowd): hey. hi. so. we're like, two hundred people, and the thing behind us
20 A ¶ She points.
21 A The harbour.
22 A The water has pulled back, way too far.
23 A ¶ Silence.
24 D RILEY (muttered): okay that's new.
25 A ¶ A horn BLARES from the ferry terminal.
26 A A siren WAILS, thin and far away.
27 D RADIO [V.O.] (from Gil's handheld, crackling): all units, all units, tide gauges are reading minus four, I repeat, minus four
28 A ¶ Gil, 40s, an event steward in a hi-vis vest, jogs over, radio to his ear.
29 D GIL: okay folks, so, quick thing, we're gonna move uphill. calmly.
30 D ABE (into the megaphone, finally working): EVERYONE PLEASE MOVE UPHILL.
31 D TESS (to Riley, quiet): this is the thing we put on the signs.
32 D RILEY: yeah.
33 D NOOR (from the bench, calling out): GIL, WHICH WAY IS UPHILL?
34 D GIL: that way! the library!
35 A ¶ The crowd starts to move.
36 A Signs drop.
37 A The drum stops mid-beat.
38 A ¶ Rain.
39 A A single raindrop on a sign.
40 D RILEY (to herself): okay okay okay.
41 A ¶ She takes Tess's hand.
42 A They run.
