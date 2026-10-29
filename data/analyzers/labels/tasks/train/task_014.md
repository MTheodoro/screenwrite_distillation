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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05169.json
### SCENE s05169 | INT. DUSTY RECORDS - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): ABEL, CLEMENTINE, HUX, BAND
1 A ¶ A converted barn in the high desert.
2 A Egg-crate foam stapled to the walls.
3 A A tumbleweed, a real one, sits in the corner like a joke nobody got around to cleaning up.
4 A ¶ Clementine, 30s, boots up on the console, picks at a lap steel.
5 A Abel, 40s, the producer, flannel and tired eyes, stares at the monitor.
6 A Hux, 20s, leans in the doorway chewing a toothpick.
7 A A teenage kid in an apron sweeps the same square foot of floor over and over.
8 A A dog snoozes under the couch.
9 A ¶ CLOSE ON the tape machine, reels turning.
10 D ABEL: that's not what we cut yesterday.
11 D CLEMENTINE: it's close.
12 D ABEL: it's not close. you slowed the bridge.
13 D HUX: she didn't slow it. i did.
14 D ABEL: why'd you slow it?
15 D HUX: i dunno. felt right. felt like, you know. like riding in.
16 D CLEMENTINE: riding in where.
17 D HUX: town. i dunno. i said i dunno.
18 A ¶ ANGLE ON the glass.
19 A THE BAND, five men in dusty hats, stand in the live room staring at the control room, waiting.
20 A One of them lifts a fiddle bow and lowers it again.
21 D THE BAND (in unison, muffled through glass): we ready?
22 D ABEL (pressing the talkback): not yet.
23 D CLEMENTINE: you always say not yet.
24 D ABEL: because it's never yet.
25 D HUX (quietly): you could just say yes, Abel. once.
26 D ABEL: i don't say yes to things that aren't finished.
27 D CLEMENTINE: nothing's ever finished. that's the whole thing about it.
28 A ¶ The kid stops sweeping.
29 A The dog lifts its head.
30 A Abel stands, grabs his hat, crosses to the door.
31 A Hux doesn't move out of his way.
32 D HUX: where you going?
33 D ABEL: out. air.
34 D CLEMENTINE: you leave, the take's gone.
35 D ABEL: then it's gone.
36 A ¶ He shoulders past Hux, pushes the door.
37 A Heat and sunlight pour in.
38 A He stops.
39 A WE SEE the red ON AIR light above the door, still lit.
40 A ¶ BACK TO SCENE: Clementine's hand is on the record button.
41 A She hasn't taken it off.
42 A She looks at him through the open door, and doesn't say anything.
43 D THE BAND (through the glass, hopeful): we ready now?
44 D ABEL (without turning): yeah.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05170.json
### SCENE s05170 | INT. ST. ANNE'S HOSPITAL - PEDIATRIC WAITING AREA - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA, TOBY, THE WOMAN, GUS, OKAFOR, DENISE
1 A ¶ Fluorescent hum.
2 A Half the lights off.
3 A ¶ Rain on the tall windows.
4 A A vending machine glows blue in the corner.
5 A ¶ PRIYA (30s, scrubs, cardigan) wheels a med cart past rows of empty chairs.
6 A A boy, TOBY (8), sits alone in a dinosaur pajama top, swinging his feet.
7 A Next to him, a WOMAN in a damp raincoat stares at the floor, one hand clamped on the boy's backpack strap while GUS, the night security guard, sips coffee by the elevators and pretends not to watch her.
8 D PRIYA: Still waiting on the paperwork, sweetie?
9 D TOBY: She says we have to wait.
10 A ¶ Priya looks at THE WOMAN.
11 A The Woman doesn't look up.
12 D PRIYA: Ma'am? Can I get you a blanket?
13 D THE WOMAN: We're fine.
14 A ¶ Wind pushes the rain sideways against the glass.
15 D PRIYA (gentle): He's been here two hours. It's okay to tell me who you're waiting for.
16 A ¶ Gus wanders over, thumbs in his belt.
17 D GUS: Everything alright over here?
18 D PRIYA: Everything's fine, Gus.
19 A ¶ Gus nods.
20 A Retreats.
21 A The elevator DINGS.
22 A The doors slide open on empty air, then close again.
23 D THE WOMAN: My mother's upstairs. Fourth floor. They won't let kids up after nine.
24 D TOBY: Grandma has a tube in her nose.
25 D PRIYA: I know. I'm on her floor tonight. I can sit with him right here.
26 A ¶ The Woman finally lifts her eyes.
27 A Red-rimmed.
28 A Tired in a way sleep won't fix.
29 D THE WOMAN: You'd do that?
30 D PRIYA: It's a slow night.
31 A ¶ Somewhere a monitor beeps.
32 A Steady.
33 A Patient.
34 A A mop bucket squeaks down a far hallway.
35 D PRIYA [CONT'D]: I'm Priya.
36 D THE WOMAN: Denise.
37 A ¶ Denise lets go of the backpack strap, finger by finger.
38 A Toby scoots closer to Priya and examines her ID badge.
39 D TOBY: Your picture looks mad.
40 D PRIYA: I was. It was six a.m.
41 A ¶ Denise almost laughs.
42 A ¶ The elevator DINGS again.
43 A DR. OKAFOR (60s, rumpled, reading glasses on a cord) steps out, chart in hand, sneakers soaked through.
44 D DR. OKAFOR: Denise Marlowe? Your mother's asking for you. And for the young man.
45 D DENISE: He's not allowed up.
46 D DR. OKAFOR: Tonight he is.
47 A ¶ Toby grabs his backpack.
48 A Denise stands.
49 A Her knees crack.
50 A ¶ Outside, the rain thins to drizzle.
51 A The vending machine hums on.
52 D DENISE (to Priya): Thank you.
53 D PRIYA: Go on.
54 A ¶ They walk toward the elevator.
55 A Gus holds the door.
56 A Nobody says anything else.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05172.json
### SCENE s05172 | INT. JUNO'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNO, THE BAND
1 A ¶ Dark.
2 A Fairy lights, half of them dead.
3 A ¶ Posters.
4 A A beanbag.
5 A Laundry in a heap that could be anything.
6 A ¶ JUNO (16) lies in bed, earbuds out, eyes open.
7 A She listens.
8 A ¶ Silence.
9 A ¶ Then, through the wall: a thud.
10 A A slow one.
11 A ¶ She sits up.
12 A ¶ Another thud.
13 A Wood on wood.
14 A ¶ She grabs her phone.
15 A Taps it.
16 A Nothing.
17 A Her phone.
18 A Dead.
19 A ¶ The thudding finds a rhythm.
20 A Four beats.
21 A Four beats.
22 A Under it, a low hum, wrong, like something breathing through a tube.
23 D JUNO (whisper): Hello?
24 A ¶ Nothing.
25 A ¶ She swings her legs out.
26 A Floorboard creaks.
27 A She freezes.
28 A Waits.
29 A ¶ The wall goes quiet.
30 A ¶ Then a voice, muffled, lazy, sung half a note flat.
31 D THE BAND [O.S.] (muffled, through wall): Wonderwall... one, two, three...
32 A ¶ Juno stares at the wall.
33 D THE BAND [O.S., CONT'D] (muffled): Sorry! Sorry! Dave, you're on the wrong key!
34 A ¶ A cymbal CRASHES.
35 A A guitar squeals.
36 A ¶ Juno exhales.
37 A Her whole body unclenches.
38 A She laughs, a short, shaky bark.
39 D JUNO (to the wall): It's one a.m.!
40 D THE BAND [O.S.] (muffled): Sorry, Juno!
41 A ¶ A pause.
42 A She lies back.
43 A Pulls the duvet up.
44 A ¶ Quiet.
45 A ¶ Rain on the window.
46 A ¶ Her closet door, which was closed, is open now.
47 A An inch.
48 A ¶ She doesn't see it.
49 A She closes her eyes.
50 A ¶ From the wall, soft, in unison:
51 D THE BAND [O.S.] (muffled, hushed): ...we're not in the garage, Juno.
52 A ¶ Her eyes snap open.
53 A ¶ Silence.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05173.json
### SCENE s05173 | INT. SUDS & SPIN LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): LENA VOSS, STRANGER, JOSIE, ABEL, MARCUS, KANE
1 A ¶ Dryers TUMBLE.
2 A Neon BUZZES.
3 A ¶ DR. LENA VOSS (40s, scrubs under a parka) is on her knees beside a man crumpled against a washer.
4 A Gripping his wrist.
5 A Counting.
6 A ¶ A STRANGER (60s, grey stubble, bleeding from the scalp) pulls the heavy door of dryer nine shut and leans on it, panting.
7 D LENA: Stay with me. Eyes up here.
8 D STRANGER: Name's Marcus. Not that anyone asked.
9 A ¶ Lena pauses.
10 D LENA: Marcus. Good. Marcus, who did this?
11 A ¶ JOSIE (20s, hoodie, folding socks) backs away from the counter, phone raised.
12 A A tiny terrier on a leash YAPS at everyone.
13 D JOSIE: I'm calling nine-one-one!
14 A ¶ A dryer BANGS open.
15 A ABEL (50s, security vest) bursts through the back door, flashlight swinging.
16 D ABEL: Nobody move!
17 D MARCUS: Abel, he's gone out the front. Go!
18 A ¶ Abel does not go.
19 A Officer KANE shoves through the front door, gun up, rain on his shoulders.
20 D KANE: Police! Hands!
21 A ¶ Everyone raises their hands except Lena, who is still pressing a folded towel to a wound.
22 A ¶ Two teenagers by the soap machine freeze mid-chew.
23 A ¶ This is the last time any of them will be strangers.
24 A ¶ The dryer THUDS.
25 A Something inside it is still running.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05175.json
### SCENE s05175 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SAL, KAY, TEDDY, BIG DAVE, RUTH
1 A ¶ Dark.
2 A Candles on the counter.
3 A A camping lantern hisses on the table.
4 D SAL [V.O.]: Power went out at eight-fifteen. By nine, the whole street was in somebody's kitchen. That's how it works out here.
5 A ¶ SAL (40s, cardigan, tea towel on shoulder) stirs a pot on a gas ring, while KAY (60s, his mother-in-law) cuts bread at the table, TEDDY (9) kneels on a chair building a wobbly tower of mugs, and a golden retriever sleeps with its chin on Sal's slipper.
6 A Through the window, two teenagers from next door shine a phone torch over the fence, whispering and giggling.
7 A ¶ BIG DAVE (50s, huge, soaked) appears in the back doorway holding a bag of ice.
8 D BIG DAVE: Freezer's gone at ours. Is yours alright?
9 D SAL: Come in, Dave, you're letting the heat out.
10 D KAY: There's no heat, Sal.
11 D SAL: Then you're letting the cold out.
12 A ¶ Teddy's tower collapses.
13 A The dog lifts its head, sighs, resumes sleeping.
14 D TEDDY: It wasn't me!
15 D KAY: It's never you.
16 D BIG DAVE: Who's the lady out front?
17 D SAL: What lady?
18 D BIG DAVE: Standing on your drive. Umbrella. Been there ten minutes.
19 A ¶ They look.
20 A Through the window: a figure at the end of the path, still, umbrella dripping.
21 D SAL [V.O.]: I didn't know her. That's all I'll say about that.
22 D KAY: She looks lost.
23 D TEDDY: She looks cold.
24 D SAL: Teddy, stay put.
25 A ¶ Sal opens the front door.
26 A The Woman (50s, neat grey coat) steps in out of the rain, folds her umbrella.
27 D THE WOMAN: I'm sorry. Is this number fourteen? My sister's number fourteen.
28 D SAL: This is twelve.
29 D THE WOMAN: Oh. Ruth Aldana. Ruth. I'm so sorry.
30 D KAY: Ruth! Sit down, Ruth. Soup?
31 D BIG DAVE: Fourteen's the one with the gnome.
32 D RUTH: That's her.
33 D TEDDY: We've got bread.
34 D SAL [V.O.]: There's no manual for strangers on a night like this. You just pull out another chair.
35 A ¶ Ruth sits.
36 A The candle gutters and holds.
37 A The dog thumps its tail once on the lino.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05176_0.json
### SCENE s05176_0 | EXT. FISHING TRAWLER "NORTHERN STAR" - NIGHT
Detected names (may be incomplete or contain aliases): 
1 A ¶ Black water.
2 A A creaking hull.
3 A Fog.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05176_1.json
### SCENE s05176_1 | INT. TRAWLER - GALLEY - CONTINUOUS
Detected names (may be incomplete or contain aliases): JONAH, NELL, HALE, DR. SUN, PETE
1 A ¶ CLOSE ON a sat-phone on the table, its green light blinking.
2 A Beside it, JONAH (20s) lies on a bench, shirt soaked red at the ribs.
3 A ¶ NELL (30s, oilskins, shaking hands) presses a rag to the wound.
4 A HALE (60s, the captain) stands in the doorway, staring at the ceiling.
5 D NELL: Stay with me, Jonah. Cap, get Dr. Sun on that thing.
6 D HALE: Line's open.
7 A ¶ Nell grabs the phone, thumb-hits speaker.
8 D DR. SUN [V.O.] (crackling): Nell? I can barely hear you. Is the bleeding steady?
9 D NELL: Steady-ish. It's deep. Pete's the only one who's done this before.
10 A ¶ ANGLE ON the hatch.
11 A PETE (50s, grey beard) is on the ladder, face white, hands empty.
12 D PETE: I can't, Nell. I told you. I can't do it again.
13 D DR. SUN [V.O.]: Pete. Listen to me. You can.
14 A ¶ A heavy THUMP from above.
15 A Something drags across the deck.
16 A ¶ Everyone looks up.
17 D HALE: That wasn't the nets.
18 A ¶ WE SEE the hatch.
19 A Bolted.
20 A Shaking.
21 A ¶ BACK TO SCENE:
22 A ¶ Jonah grips Nell's wrist.
23 D JONAH: Nell... something's out there.
24 A ¶ The lights die.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05179_0.json
### SCENE s05179_0 | EXT. HARBOR LOT - FOOD TRUCK "ROSA'S RUEDA" - DAY
Detected names (may be incomplete or contain aliases): ROSA, DANNY, SKYE
1 A ¶ Sun on chrome.
2 A Gulls.
3 A Steam rolling out of the order window.
4 A ¶ ROSA (50s, apron, forearms like cables) flips tortillas without looking.
5 A A line of customers stretches to the road.
6 A ¶ DANNY (14) leans out the window with the receipt pad.
7 D DANNY: Two al pastor, one veggie, extra lime.
8 D ROSA: Say please to the lime.
9 D DANNY: Please, lime.
10 A ¶ From the cab, SKYE (20s, they/them, braids, bandana) leans back against the dashboard with a clipboard.
11 A Skye taps the pen against their teeth.
12 D SKYE: Rosa, the health inspector's coming at noon. They've already emailed.
13 D ROSA: Let him come.
14 D SKYE: They said "her." They're a woman.
15 D ROSA: Then let her come.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05179_1.json
### SCENE s05179_1 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHUY, ROSA, SKYE, DANNY
1 A ¶ CLOSE ON the grill.
2 A Grease popping.
3 A The propane gauge ticking toward red.
4 A ¶ CHUY (70s, Rosa's father, hat low) sits on an overturned crate by the back door, peeling an orange with a pocketknife.
5 D CHUY: Mija, the tank is low.
6 D ROSA: It's fine, Papá.
7 D CHUY: It is not fine. It is whistling.
8 A ¶ Rosa listens.
9 A A faint hiss, thin as thread.
10 A She glances at Skye.
11 D ROSA: Skye, check the valve.
12 D SKYE: I'm bookkeeping, not plumbing.
13 D DANNY: I'll do it.
14 D ROSA: You'll do nothing. Stay by the window.
15 A ¶ Danny bangs the counter, annoyed.
16 A A customer chuckles.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05179_2.json
### SCENE s05179_2 | EXT. HARBOR LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): INSPECTOR WELLS, ROSA, SKYE
1 A ¶ A white sedan pulls into the lot.
2 A INSPECTOR WELLS (40s, windbreaker, tablet) steps out and looks at the truck.
3 A At the line.
4 A At the sky.
5 D WELLS: Good afternoon! Anyone in charge?
6 A ¶ Rosa leans out the order window, wiping her hands.
7 D ROSA: Inspector. We are open for business.
8 D WELLS: You have a permit?
9 D ROSA: I have a daughter who keeps all the paperwork.
10 D SKYE (from the cab): I'm not her daughter. I'm the accountant.
11 D WELLS (not looking up): I'm sure they're lovely. I'll start with the kitchen.
