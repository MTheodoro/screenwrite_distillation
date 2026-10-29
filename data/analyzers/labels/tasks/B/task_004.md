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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05049.json
### SCENE s05049 | EXT. DUSTY CROSSROADS - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): BRISKET, INSIDE, SADIE KROLL, CLETUS, MARSHAL REEVES, JOLENE
1 A ¶ A weathered truck painted "BEANS & BRISKET - SINCE YESTERDAY" squats in the sun.
2 A Heat shimmers.
3 A A line of two teenagers in cowboy hats waits at the window while a mangy dog sleeps under the awning.
4 A ¶ INSIDE, SADIE KROLL, 40s, cook, jaw like a knuckle, slaps patties on the flat-top.
5 A Her brother-in-law CLETUS, 50s, leans on the counter pretending to count money.
6 A At the window, a stranger in a long duster, MARSHAL REEVES, 60s, sets down his hat.
7 A And in the corner, her teenage niece JOLENE, 17, wipes a spoon and watches everything.
8 A ¶ CLOSE ON Reeves's badge, half hidden under the duster.
9 D REEVES: Two plates. And a word with Cletus.
10 D CLETUS (laughing too loud): Marshal! Long way from town.
11 D SADIE (not turning from the grill): He's not here for beans, Cletus.
12 A ¶ The dog LIFTS its head.
13 A A screen door SLAMS in the distance.
14 D REEVES (quietly): Where's the payroll box, Cletus?
15 A ¶ ANGLE ON Jolene's hand sliding a cleaver off the shelf.
16 D JOLENE: Uncle Cletus, he's got a warrant folded in his boot.
17 D CLETUS (whispering): Jolene, put that down.
18 D SADIE (spinning around with a spatula held like a pistol): Nobody's cutting anybody. Marshal, sit. Eat. Then we'll talk.
19 D REEVES (tipping his hat back, almost smiling): Sadie, you've never once made it easy.
20 A ¶ BACK TO SCENE: the two teenagers bolt, the dog barks, a plate of brisket hits the dirt, and somewhere in the truck a timer DINGS.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05082.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05196.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05034.json
### SCENE s05034 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NARRATOR, LORETTA, DEV, PRIYA, OSWALD, THE TALL MAN, DRIPPING YELLOW SLICKER
1 A ¶ Fluorescent light, a dozen washers turning slow, lukewarm steam on the windows.
2 A Four people wait out their cycles.
3 D NARRATOR [V.O.]: This is the last time they will all be in the same room, though none of them knows it yet.
4 D LORETTA (folding a pillowcase, humming): My mother said never wash a dead man's shirts. I said, Ma, they're only shirts.
5 D DEV (not looking up from his phone, thumbing a message): Cheap soap makes more suds. Doesn't make it clean.
6 D PRIYA (holding a hot towel to her cheek, watching the door): Who's the guy outside? He's been standing by the bins for twenty minutes.
7 D OSWALD (stirring a paper cup of coffee, shrugging): Waiting on a dryer, probably. Everybody waits on something.
8 A ¶ The bell over the door jingles.
9 A A TALL MAN IN A DRIPPING YELLOW SLICKER steps in, carrying a laundry bag that is much too heavy and much too still.
10 D NARRATOR [V.O.]: Calm lasts exactly as long as the first drip hitting the tile.
11 D THE TALL MAN (setting the bag down gently, smiling): Evening. Any machines free? I've a bit of a mess to wash.
12 A ¶ The bag shifts.
13 A Nobody says a word.
14 A Every washer in the room stops spinning at once.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05111_1.json
### SCENE s05111_1 | EXT. NIGHTBIRD STUDIOS - STREET - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ They tumble out into the rain.
2 A ¶ Behind them, the windows blow out in a shower of light.
3 A ¶ Silence.
4 A ¶ Riley's phone BUZZES.
5 A ¶ ON PHONE: take twelve
6 A ¶ He drops it into a puddle.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05103.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05054.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05109.json
### SCENE s05109 | INT. FOOD TRUCK - "BIG DAVE'S BAPS" - MORNING
Detected names (may be incomplete or contain aliases): MO, RECORDED VOICE
1 A ¶ A grey Tuesday, drizzle on the awning.
2 A The griddle ticks as it warms.
3 A Condensation on every surface.
4 A Somewhere outside, a gull has opinions.
5 A ¶ MO, 40s, in a stained apron and a flat cap, cracks eggs one-handed, humming something tuneless.
6 A The queue outside, five or six commuters under umbrellas, shuffles forward.
7 A ¶ His mobile buzzes on the counter.
8 A He wipes his hand on his apron and answers on speaker.
9 D MO: Morning. Bap's Place. Go on.
10 D RECORDED VOICE [V.O.]: This is an automated message from Harbour Borough Council Environmental Health. Your inspection for today has been brought forward. An officer will arrive at your location in approximately two minutes.
11 A ¶ Mo stares at the phone.
12 A A pause.
13 A The kettle, left to its own devices, begins to whistle.
14 D MO: Right. Lovely. Marvellous.
15 A ¶ He turns the griddle off, then on, then off again.
16 A He sweeps a tray of something suspiciously orange into the bin and hides the bin behind the fridge.
17 A Through the hatch, a man in a hi-vis jacket with a clipboard is crossing the car park, and the queue sees him too.
18 A ¶ The queue scatters.
19 A Mo and the kettle both freeze.
20 A Rain.
21 A A single gull lands on the awning.
22 D MO [CONT'D] (quietly, to himself): Not ideal.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05150_3.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05027.json
### SCENE s05027 | EXT. RIVERSIDE PARK - FOUNTAIN - DAY
Detected names (may be incomplete or contain aliases): KIKI, KAI, JADA, STRANGER, MARCUS, SQUEAL
1 A ¶ Kiki, 19, ring light clipped to her phone, stands on the fountain's edge in a yellow jacket.
2 A Kai, her cousin, holds the tripod.
3 A Jada, 17, stands off to the side eating chips.
4 D KIKI [V.O.]: Everyone thinks the camera shows the truth. It shows what you point it at. That's the whole trick.
5 D KIKI: Okay, okay, take four. Kai, don't breathe on the mic.
6 D KAI: I'm not breathing on it.
7 D JADA: He's breathing on it.
8 D KAI: I'm literally holding my breath.
9 A ¶ The phone BUZZES on the tripod.
10 A ¶ ON PHONE: unknown number: stop filming. go home.
11 A ¶ Kiki laughs.
12 A Shows Kai.
13 A Kai doesn't laugh.
14 D KAI: That's a bit.
15 D KIKI: It's a bit. Some bot. Rolling.
16 A ¶ She starts the dance.
17 A Two bars in, a man in a grey coat walks into the frame behind her, and does not walk out.
18 D KIKI [CONT'D]: Excuse me, sir? We're filming!
19 D STRANGER: You're filming me.
20 D JADA: Nobody's filming you.
21 D KAI: Dude, you're in the shot, step back.
22 D STRANGER: You posted this fountain at nine this morning. Caption said "no one ever comes here."
23 D KIKI: It's a caption!
24 A ¶ ON PHONE: unknown number: he's not joking. walk away.
25 A ¶ Kiki's smile goes.
26 A The tripod light blinks red.
27 A A pigeon bursts off the fountain, SCREAMING away over the trees.
28 D KAI: Who is texting you?
29 D KIKI: Jada?
30 D JADA: It's not me! I'm right here!
31 D STRANGER: My name is Marcus. I'm the one who texted you. Look behind you, Kiki.
32 D KIKI [V.O.]: Funny. I only said "Kiki" in the video. Never my last name. Never where we live.
33 D MARCUS (to Kai, calm): Put the phone down.
34 D KAI: What? No!
35 D JADA: Kiki, we should go.
36 D KIKI: Go where, Jada, he's--
37 A ¶ A black van pulls up on the gravel path with a SQUEAL of tires.
38 A The side door SLIDES open.
39 D MARCUS: Now, please. All three.
