You are an annotator labeling screenplay scenes for a dataset.

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
  },
  "tension": [<one score 0-100 per beat, same order as "beats">]
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
- tension: dramatic tension a reader feels in that beat - stakes, conflict, threat, urgency, suspense. Loud or
  violent is not automatically tense; a quiet threat can be very tense. Use absolute anchors so scores compare
  across scenes: 0-15 calm/mundane, 15-35 mild friction or unease, 35-60 clear conflict or suspense,
  60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death / climactic moment.


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05011.json
### SCENE s05011 | INT. HARBOR ROAD VETERINARY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): MO, THE WOMAN, SAM, JEN, BIG DAVE
1 D MO (behind the desk, not looking up from the screen): Mrs. K's beagle is in room two. Dr. Sam says give her ten minutes.
2 D THE WOMAN (standing at the counter, a cat carrier held tight against her chest): I don't have ten minutes. I have a cat who hasn't eaten since Sunday and a boss who thinks I'm at a dentist.
3 D MO (beat): I'm sorry. I really am. But it's triage. Whoever's worst goes first.
4 D THE WOMAN (setting the carrier down very carefully): He is the worst. Look at him. Look. (beat) You're not looking.
5 D MO (looking now, softer): Okay. Okay, he's not great. Give me one second.
6 D SAM (coming through the swinging door, drying her hands on her scrubs): Mo, who's shouting?
7 D MO (not turning): Nobody's shouting. Yet.
8 D THE WOMAN (to Sam, quick): Are you the doctor? Please. I'll sign anything. I'll wait in the car. Just look at him.
9 D SAM (kneeling by the carrier, a long breath): Hi there, buddy. Hi. (beat) What's his name?
10 D THE WOMAN (after a moment, quieter): Biscuit. He was my husband's. Ex-husband's. He left him. He left the cat and not me, which, I mean, tells you something.
11 D SAM (a small smile, still watching the cat): It tells me he was an idiot.
12 D MO (quietly, to no one): Wow. Okay.
13 D SAM (standing, looking at Mo): Don't start.
14 D MO (finally turning): I'm not starting. I'm just saying you've been in this clinic eleven years and you've never once said "idiot" about a client's ex.
15 D THE WOMAN (to Mo, surprised): Are you two--
16 D MO (flat): No.
17 D SAM (at the same time): We were.
18 D MO (sharp): Sam.
19 D SAM (to the Woman, gentle): Her name's Jen, right? On the intake form. Jen, if you come through, I'll see Biscuit first. Mrs. K can wait.
20 D JEN (picking up the carrier, hesitating): Thank you. I didn't mean to cause--
21 D MO (cutting in): You didn't. She did.
22 D SAM (turning on Mo, low): Mo. Not here.
23 D MO (louder): Then where? In the supply closet, like last March? On the phone, at two a.m., like last June?
24 D JEN (awkward, edging back): I can wait outside, really--
25 D SAM (not looking away from Mo): Stay, Jen. Please. (beat) Mo, I was trying to be kind to her.
26 D MO (laughing, not a happy laugh): You were trying to be kind to HER. That's perfect. You've got infinite kindness for strangers and animals and nothing left over for the person who actually--
27 D BIG DAVE (pushing the front door open with his shoulder, a golden retriever on a short lead, a bandaged paw held up): Hey. Hey, folks. Sorry, is this a bad time? Roscoe cut himself on a bottle. It's not an emergency, he's just being dramatic.
28 D MO (turning, composing her face with visible effort): Hi, Dave. No. It's fine. It's a great time.
29 D BIG DAVE (looking from Mo to Sam to Jen): Is it? Because it feels like I walked in on something.
30 D JEN (to Big Dave, helpless): I just came in with a cat.
31 D BIG DAVE (nodding slowly, sitting on the bench): Sure. Sure you did.
32 D SAM (to Mo, quieter now): I should have said something. Last spring. Before it got to this.
33 D MO (her voice cracking): You should have said something in April. In May. At my sister's wedding, when you danced with me and then drove home alone.
34 D SAM (a step closer): I was scared.
35 D MO (over her): You're not scared of anything. You put your arm inside a horse.
36 D SAM (over Mo, desperate): A horse doesn't look at me like you do.
37 D JEN (whispering to Big Dave): Should we go?
38 D BIG DAVE (whispering back, not moving): Absolutely not.
39 D MO (a long beat, then, very still): Say it again.
40 D SAM (beat): A horse doesn't look at me like you do.
41 D MO (quietly): No. The other thing. The first thing.
42 D SAM (beat): I was scared. I'm still scared. I'm scared right now.
43 D MO (a breath, then a laugh that breaks into something else): God. You are such an idiot.
44 D SAM (wiping her eyes with the back of her wrist): That's what I said about him.
45 D BIG DAVE (to Jen, soft): This is better than the cat.
46 D JEN (a startled laugh, then a nod): It really is.
47 D MO (coming around the desk at last): Go see Biscuit. Both of you. I'll hold the front.
48 D SAM (not moving): And after?
49 D MO (beat): After, you buy me a coffee and you say all of it again. In daylight. Where nobody's watching.
50 D BIG DAVE (raising his hand): I'm watching.
51 D MO (not turning): Dave.
52 D BIG DAVE (lowering it): Right. Sorry. Roscoe and I will be over here. Being dramatic.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05013.json
### SCENE s05013 | INT. HOLLOWAY HOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SAM, JULES
1 A ¶ The lights died at nine and the whole street went dark with them, and now a single candle gutters on the formica table while Sam Holloway, who has not slept properly since the summer of 1974, pours two fingers of rye into a chipped mug, and Jules, Sam's partner at the precinct, leans against the humming, silent fridge with a flashlight pointed at the floor and a cigarette burning down between two nicotine-stained fingers.
2 D SAM [V.O.]: Rule one of a blackout. Nobody trusts anybody. Not even the guy who drove you here.
3 D JULES: They cut the phone lines before the power. That's not weather, Sam.
4 D SAM (drinking): I know what it is.
5 D SAM [V.O.]: I knew the day I took the badge that every kitchen in this city would end up like this one. Quiet. Waiting for the other shoe.
6 D JULES (low): They're across the street. I counted two. Maybe three.
7 D SAM: They have a way of looking at the window. Same way my father looked at it. Like it owed him money.
8 A ¶ Jules clicks the flashlight off.
9 A The candle jumps.
10 A A car idles somewhere outside, headlights sweeping the curtains once, twice, and moving on.
11 D JULES: So we sit here and drink?
12 D SAM (setting the mug down): We sit here and listen.
13 D SAM [V.O.]: The truth about waiting is that it never ends. It just changes clothes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05015.json
### SCENE s05015 | INT. NEON ARENA - MAIN STAGE - NIGHT
Detected names (may be incomplete or contain aliases): AVA, RAY, WALT, STRANGER, MARCUS
1 A ¶ BOOM.
2 A Lights slam on.
3 A Ten thousand fans ROAR.
4 A ¶ ANGLE ON a glowing stage, two gaming rigs, a giant screen counting down from ten.
5 A ¶ Ava, 12, sits at the left rig, headset crooked, knuckles white.
6 D AVA (cracking her fingers, eyes locked on the screen): Ten seconds, Dad. Ten.
7 A ¶ Her father Ray, 40s, crouches at her side with a water bottle and a sweat-soaked T-shirt.
8 D RAY (handing her the bottle, jaw tight): Breathe, Ava. Breathe, kiddo. You've got this.
9 A ¶ BEEP.
10 A BEEP.
11 A BEEP.
12 A ¶ CLOSE ON Ava's thumbs, hovering over the controller.
13 A ¶ On the giant screen: GAME START.
14 D AVA (hammering the buttons): Left flank! Left flank! Where's Grandpa?!
15 A ¶ INSERT - PHONE SCREEN: "GRANDPA WALT CALLING."
16 A ¶ Ray's phone BUZZES on the desk.
17 A He swipes it open and props it against the monitor.
18 D WALT [V.O.] (crackling, from the phone): Is she winning? Tell me she's winning. I've got the whole bingo hall watching!
19 D RAY (shouting over the crowd): She's winning, Dad! She's down to the last round!
20 A ¶ BACK TO SCENE.
21 A ¶ On the right rig: the rival, a hooded STRANGER, face lit blue by the screen, fingers a blur.
22 D STRANGER (muttering): Not today, little one.
23 A ¶ KRAKOOM.
24 A Sparks erupt across the big screen.
25 A The crowd GASPS.
26 D AVA (jaw clenched): Dad, he's got the golden shield!
27 D RAY (leaning in): So take it from him!
28 D AVA (typing, teeth bared): I'm trying!
29 A ¶ WE SEE the Stranger's screen mirror Ava's: two avatars, one mountain, one flag.
30 D WALT [V.O.] (yelling): Ava! Remember what I taught you! Duck and weave!
31 D AVA (not looking away): It's a video game, Grandpa, not boxing!
32 A ¶ WHAM.
33 A The Stranger's avatar knocks hers back a step.
34 D STRANGER (peeling off his hood, grinning, suddenly kind): Nice one, kid. I'm Marcus, by the way. Marcus Bell. I played your dad back in the day.
35 D RAY (stunned, half-rising): Marcus?! You're THE Marcus?!
36 D MARCUS (still tapping, easy): Yep. Still got the reflexes.
37 D AVA (furious, tapping faster): Dad! Don't talk to the enemy!
38 D RAY (sitting back down fast): Sorry! Sorry, kiddo, focus!
39 A ¶ CLOSE ON the countdown: 00:09.
40 A 00:08.
41 A 00:07.
42 D WALT [V.O.] (from the phone, crackling): Seven seconds! Go, go, GO!
43 A ¶ CRASH.
44 A The big screen explodes in light.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05016.json
### SCENE s05016 | EXT. BORDER CHECKPOINT - DAY
Detected names (may be incomplete or contain aliases): KIT, LEO, OKOYE, BRANDT
1 A ¶ heat coming off the asphalt. a line of cars not moving. a dog on a leash sniffs a tire while a man in a vest watches it like it might say something.
2 A ¶ Kit, 30s, sits behind the wheel of a dusty hatchback, window down, passport already in hand.
3 A Beside her, her brother Leo, 20s, picks at the seam of the seat.
4 D KIT: ok so if he asks, we're visiting our aunt
5 D LEO: we don't have an aunt
6 D KIT: we do now
7 A ¶ Officer Daria Okoye, 40s, walks up to the window, clipboard tucked under one arm.
8 D OKOYE: morning. where you headed today
9 D KIT (too fast): to see our aunt. she's, um. she's not well.
10 D OKOYE: she have a name
11 D KIT: yeah. it's. Marguerite.
12 D LEO (at the same moment): Margaret.
13 A ¶ They look at each other.
14 A Okoye does not move.
15 D OKOYE: which is it
16 D KIT: both. it's a nickname thing, she goes by both, it's a whole thing in the family
17 A ¶ Behind them, a kid in the next car presses his face to the glass.
18 A His mom pulls him back.
19 A A second officer, Brandt, 50s, drifts toward the hatchback from the other side, hand resting near his belt.
20 D BRANDT: trunk, please
21 D LEO: there's nothing in it
22 D BRANDT: then it'll be quick
23 A ¶ Kit and Leo both freeze.
24 A The dog lifts its head.
25 A Brandt and Okoye exchange a look.
26 D KIT (very quiet, to Leo): if you run i swear to god
27 D LEO (equally quiet): i'm not running. you're the one who wanted to come this way
28 A ¶ Leo pops the trunk.
29 A Brandt lifts the lid.
30 A Inside: a cooler, a sleeping bag, a framed photograph of an older woman.
31 D BRANDT (reading the back): Marguerite Margaret Vance. 1951.
32 D KIT (exhaling): told you
33 A ¶ Okoye lowers the clipboard.
34 A For a second nobody speaks.
35 A Then Okoye almost smiles.
36 D OKOYE: go on. drive safe. and say hi to your aunt for me
37 A ¶ Kit and Leo both laugh, a little too loud, as the barrier lifts and the cars behind them start to honk.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05018.json
### SCENE s05018 | INT. CITY PAROLE OFFICE - RECEPTION - MORNING
Detected names (may be incomplete or contain aliases): FRANKIE, PRIYA, THE TEENAGERS, THE GUARDS, BUCKET CLANGS
1 A ¶ A beige room full of bad lighting and worse chairs.
2 A Two teenagers in the corner share earbuds and a bag of chips.
3 A A janitor's mop bucket sits unattended by the water cooler.
4 A ¶ Frankie Dunn, 30s, charming and doomed, bursts through the door with a coffee in each hand and a paper bag in his teeth.
5 A He trips over the mop bucket.
6 A Water SLOSHES across the floor.
7 D FRANKIE (through the bag): Mmf! Mmmf!
8 A ¶ He spits the bag out.
9 A Behind the desk, Officer Priya Nair, 30s, unflappable and unimpressed, looks up from a stack of files.
10 D PRIYA: Mr. Dunn. You're eleven minutes late.
11 D FRANKIE: Priya! Officer Priya! Light of my life! I brought you a latte, the good kind, with the little heart in the foam.
12 D PRIYA: It's a cortado. And I'm not a morning person.
13 D FRANKIE: I know. That's why I got two. One for you, one for me, one for the guy who's gonna ask me why I brought two.
14 D PRIYA: That's three, Frankie.
15 D FRANKIE (looking at his hands): Is it? Huh. I only have two hands.
16 A ¶ He slips on the wet floor, the coffees fly, and both cups SPLAT against the wall.
17 A The teenagers gasp.
18 A One of them films it.
19 D THE TEENAGERS (together, delighted): Whoa.
20 D PRIYA (pinching the bridge of her nose): Frankie. Sit down.
21 D FRANKIE (dripping): Yes, ma'am. Absolutely, ma'am. Sitting.
22 A ¶ He plops into a chair.
23 A It COLLAPSES with a CRACK.
24 A He lands on the floor, legs in the air.
25 D PRIYA (not even blinking): I'm adding that to the report.
26 D FRANKIE (from the floor): Priya. I need to tell you something.
27 D PRIYA: You need to give me your check-in form.
28 D FRANKIE: I have it. It's in my pocket. It's a little wet.
29 A ¶ He fishes out a soggy paper ball and holds it up like a trophy.
30 A She takes it between two fingers.
31 D PRIYA: This is a tax receipt for a hot dog.
32 D FRANKIE: It was a very good hot dog.
33 D PRIYA (finally, a crack of a smile): You are the worst parolee I have ever had.
34 D FRANKIE (sitting up, earnest): But am I your favorite?
35 D PRIYA (looking away, fighting it): That's not a thing.
36 D FRANKIE: That is totally a thing. You're smiling.
37 D PRIYA: I'm not.
38 D FRANKIE: You are! Your whole face is doing it.
39 A ¶ The door BANGS open.
40 A THE GUARDS, two enormous men in matching uniforms, stand in the frame.
41 D THE GUARDS (together, deadpan): Everything okay in here?
42 D PRIYA (straightening, all business): Fine. Mr. Dunn was just leaving.
43 D FRANKIE (scrambling up): I was? Oh. I was. Yes. Leaving. Great. Love that for me.
44 D PRIYA (stopping him with one finger): Thursday. Ten sharp. Bring a real receipt.
45 D FRANKIE (beaming): Bring you a coffee too?
46 D PRIYA (sighing, a warmth she can't hide): Just the one this time, Frankie.
47 D FRANKIE (backing out the door, bowing): One coffee, Priya. One. You got it.
48 A ¶ He steps in the mop bucket again.
49 A The BUCKET CLANGS.
50 A The door SLAMS behind him.
51 A The teenagers burst into applause.
52 D PRIYA (to the room, under her breath): Unbelievable.
53 A ¶ She picks up the soggy receipt, studies it, and tucks it into her drawer instead of the trash.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05019.json
### SCENE s05019 | INT. SUDS AND SPIN LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): THE STRANGER, TOM, DANA
1 A ¶ Midnight.
2 A The street outside is empty and dark.
3 A Inside, one fluorescent light buzzes above a row of dryers, all of them still.
4 A A single machine in the back tumbles slowly, the clothes inside going around and around.
5 A ¶ Tom, 20s, sits on a plastic chair with a gym bag between his feet, a flashlight and a half-eaten granola bar in his lap.
6 A He has not spoken in a long time.
7 A ¶ On the other side of the room, a figure in a wet raincoat sits with her back to the wall, a hood pulled low.
8 A THE STRANGER has been there since the power went out two days ago.
9 A Neither of them has said why they are here.
10 D TOM (finally): Is that machine still working?
11 D THE STRANGER: Just the one. I think it's on a different circuit.
12 D TOM: Huh.
13 A ¶ A long pause.
14 A The dryer thumps.
15 A Water drips somewhere behind the wall.
16 D TOM [CONT'D]: How much food do you have left?
17 D THE STRANGER: Not a lot. Some crackers. A can of beans I can't open.
18 D TOM: I have a can opener. On my keys.
19 D THE STRANGER (a short breath that is almost a laugh): Of course you do.
20 A ¶ Tom stands, crosses the room, and holds out the keyring.
21 A She takes it without looking up.
22 A The can opens with a tiny, rusty squeak.
23 D THE STRANGER [CONT'D] (pushing back her hood): Thanks. I'm Dana, by the way.
24 D TOM: Tom.
25 D DANA: I know. It's on your bag.
26 D TOM (glancing down, almost smiling): Right.
27 A ¶ They sit in silence for a while, the only sounds the dryer and the dripping water.
28 A Dana eats a spoonful of beans, offers the can.
29 A Tom takes it, eats, hands it back.
30 D DANA: You think anyone's coming?
31 D TOM: I don't know. Eventually.
32 D DANA: Eventually is a long time.
33 D TOM (quietly): It's all we've got.
34 A ¶ The dryer finally slows.
35 A It clunks, groans, and stops.
36 A The room is utterly still.
37 A Dana looks at the dead machine, then at Tom.
38 D DANA: Well. At least the towels are warm.
39 A ¶ Tom laughs, a real one, small and cracked.
40 A Dana laughs too.
41 A Outside, far off, a single siren starts up and fades away again.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05020.json
### SCENE s05020 | INT. FOOD TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): KIM, KIP
1 A ¶ Grill hissing.
2 A Kim flips a patty, eyes on the window.
3 A ¶ Her phone BUZZES on the counter.
4 A She puts it on speaker.
5 D KIM: Where are you?
6 D KIP [V.O.]: Two minutes out. Is he there?
7 D KIM: Black sedan. Same spot. Engine running.
8 D KIP [V.O.]: Don't look at him.
9 D KIM: I'm not looking.
10 A ¶ She looks.
11 A Quick.
12 A Back to the grill.
13 D KIP [V.O.]: Kim.
14 D KIM: I know.
15 D KIP [V.O.]: Hand me the bag when I knock. Don't say a word.
16 D KIM: You said the bag was clean.
17 D KIP [V.O.]: It is.
18 A ¶ A beat.
19 A The sedan's door OPENS.
20 D KIM: Kip. He's walking over.
21 D KIP [V.O.]: Stall him.
22 A ¶ Kim wipes her hands.
23 A Smiles.
24 A Slides the window open.
25 D KIM: What can I get you?

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05022.json
### SCENE s05022 | INT. COUNTY PAROLE OFFICE - OPEN-PLAN DESK AREA - DAY
Detected names (may be incomplete or contain aliases): DANA REED, SCREEN, DAN
1 A ¶ Cubicles, a dying ficus, a laptop propped on a stack of case files.
2 A Officer DANA REED sits on a Zoom call.
3 A On screen, Dan Reyes, 40s, sits in a kitchen, mug in hand.
4 A ¶ ON SCREEN (SLACK): #parole-team - Gus: reminder, Reyes check-in at 2, pls be nice
5 D DANA: Dan, thanks for logging in. Three months clean, nice work.
6 D DAN [V.O.]: Thanks, Officer Reed. Job's going good. Warehouse hired me full time.
7 D DANA: Great. And the ankle monitor is charging overnight?
8 D DAN [V.O.]: Every night. Plugged in by the bed.
9 D DANA: Good. And you haven't been near Fulton Street?
10 D DAN [V.O.]: No, ma'am. Not once.
11 A ¶ Across the room Officer GUS PARRA's monitor BUZZES.
12 A He frowns, leans in, and goes pale.
13 A ¶ ON SCREEN (SLACK): Gus: Dana.
14 A DANA.
15 A Pull up his GPS.
16 A Now.
17 D DANA (reading, still smiling at the camera): Dan, can you hold your mug a little closer to the screen?
18 D DAN [V.O.]: Sure.
19 A ¶ Behind him, through the window, a street sign.
20 A FULTON ST. A door SLAMS somewhere in the office.
21 D DANA: Interesting kitchen.
22 D DAN [V.O.]: Officer Reed, I can explain.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05023.json
### SCENE s05023 | INT. NEON ARENA - ESPORTS TOURNAMENT - NIGHT
Detected names (may be incomplete or contain aliases): WEI, JONAS, BIANCA
1 A ¶ Rain on the glass roof of the arena.
2 A Thousand of fans in the dark with glowing sticks, the casters voices loud on the speakers, blue light on every face, and under the stage Wei in a fake staff jacket is carrying a cable box past two security guards who are watching the big screen and not him while Jonas sits at the final table with his headset on, his hand perfectly steady on the mouse and Bianca stands in the back corridor with a coffee she is not drinking.
3 A ¶ Smoke machine.
4 A Bass in the floor.
5 A Somewhere a child crying from happiness.
6 D WEI (he wipes his palms on the jacket): Box is in. Two minutes.
7 D JONAS (headset on, eyes on the screen, he clicks twice): You said one minute before.
8 D WEI (he checks the watch): The guard changed. It happens.
9 D BIANCA (she puts the coffee down on a crate): Then we are not late. We are just on time slower.
10 D JONAS (a tiny nod, he does not look at either of them): Bianca your voice is too loud.
11 A ¶ The rain gets harder.
12 A A bright flash from the stage, the crowd screams, the casters say a name that is not Jonas.
13 D BIANCA (she moves closer to the door): They are looking at you. The man in the grey suit. Left side.
14 D WEI (he puts the box down very slowly): Which man.
15 D BIANCA (she does not point, she only lifts her chin): The one who is not clapping.
16 A ¶ Wind pushes at the roof.
17 A Cold air comes under the door.
18 A Far away a guard laughs at something on his phone.
19 D JONAS (he types something fast, then removes his hands from the keyboard and puts them on his knees): Done. Money is moving. Nobody stand up.
20 D WEI (he smiles with only half of his mouth): Then why is your leg shaking.
21 D JONAS (he presses the knee flat with his palm): Because I am going to win this game also.
22 D BIANCA (she opens the door a little, one finger on the handle): The grey suit is gone.
23 A ¶ Nobody speaks.
24 A On the screen the countdown goes to ten.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05025.json
### SCENE s05025 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): TESS, LORNA
1 A ¶ WE SEE a half-empty bus crossing the city in heavy rain.
2 A ¶ Rain.
3 A ¶ CLOSE ON TESS, 17, forehead against the cold window.
4 A She is angry, and she is trying to hide that she is angry, which is very obvious to the audience.
5 A ¶ Her phone.
6 A Dead.
7 A ¶ Dark streets.
8 A Nothing.
9 A ¶ A woman's phone RINGS from Tess's bag.
10 A Not Tess's phone.
11 A Her mother's old phone, which she took without asking.
12 A ¶ INSERT - PHONE SCREEN: "MUM CALLING".
13 A ¶ Tess looks at it.
14 A Does not answer.
15 A It rings again.
16 A ¶ Silence.
17 A ¶ She answers.
18 D LORNA [V.O.]: Tess? Where are you? It's one in the morning!
19 D TESS: On a bus.
20 D LORNA [V.O.]: Which bus? Which road? I have been calling for hours.
21 D TESS: You were calling the other phone. The dead one.
22 A ¶ ANGLE ON Tess's hand, gripping the phone so hard her knuckles go white.
23 A This is the last time they will speak before everything changes.
24 D LORNA [V.O.]: Come home. We can talk about Dad in the morning.
25 D TESS: There is nothing to talk about. You didn't tell me, Mum. He's been gone for a month and you let me think he was on a trip.
26 A ¶ Nothing.
27 D LORNA [V.O.]: I was trying to protect you.
28 D TESS (screaming now): You were protecting YOURSELF!
29 A ¶ The other passengers turn.
30 A The driver's eyes in the mirror.
31 A ¶ BACK TO SCENE.
32 A Tess stands, the phone raised like she will throw it.
33 D TESS [CONT'D]: Don't call me again!
34 A ¶ She throws it.
35 A It SMASHES against the bus floor.
36 A ¶ Rain.
37 A Only rain.
