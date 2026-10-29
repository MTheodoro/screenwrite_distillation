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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05072.json
### SCENE s05072 | EXT. THE SALTY BISCUIT - FISHING BOAT - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN PIP, MARLO, BERNIE, OLLIE, NINA
1 A ¶ Calm sea.
2 A Pink sky.
3 A A little wooden boat bobbing like a bath toy.
4 D CAPTAIN PIP (polishing the brass compass with their sleeve, not looking up): Nobody touch the net. Nobody even think about the net.
5 D MARLO (a crab, hiding behind a bucket, tapping the net with one claw): I'm not thinking about it. I'm just... standing near it.
6 D CAPTAIN PIP (without turning): Thinking loudly.
7 A ¶ Silence.
8 A ¶ Gulls.
9 A Far away.
10 D BERNIE (a seagull, landing on the rail with a flap, a fish in their beak that is clearly not theirs): Morning, Captain! Lovely morning for a completely innocent morning.
11 D CAPTAIN PIP (raising one eyebrow at the fish): Bernie.
12 D BERNIE (swallowing it whole): What fish?
13 A ¶ Nothing.
14 D OLLIE (a brass lantern hanging from the mast, swinging, lighting up and dimming as they speak): Captain. The sea is humming again.
15 D CAPTAIN PIP (finally setting down the compass, listening): Hm.
16 A ¶ Waves.
17 A Slap, slap.
18 D OLLIE (whispering): It only hums when something's coming.
19 D NINA (a girl of nine, in a yellow raincoat, climbing up from below deck with a mug): Cocoa's ready. Who wants cocoa?
20 D MARLO (from behind the bucket, hopeful): Me.
21 D BERNIE (at the same time, wings out): Me!
22 D NINA (handing the mug to Captain Pip first, steady, careful not to spill): Captain gets the first sip. That's the rule.
23 D CAPTAIN PIP (taking it, holding it with both hands, a very small smile): That's the rule.
24 A ¶ A bubble rises beside the boat.
25 A Pop.
26 A Another.
27 A Pop.
28 D OLLIE (flickering low): It's here.
29 A ¶ Everyone freezes.
30 A Even the gull.
31 D NINA (very quietly, tucking her hand into the Captain's coat pocket): Is it a big one?
32 D CAPTAIN PIP (sipping, eyes on the water): Biggest I've ever seen.
33 A ¶ Rain.
34 A ¶ No. Just spray.
35 D MARLO (creeping out from behind the bucket, claws up): Should we run?
36 D CAPTAIN PIP (setting the mug on the rail): We should say hello.
37 A ¶ The water rises, slow and glassy, a long blue curve.
38 A ¶ Silence.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05073.json
### SCENE s05073 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, ASH, RADIO, DELPHINE
1 A ¶ Dark.
2 A A power cut.
3 A One camping lantern on the island.
4 A A handheld radio crackles beside it.
5 A ¶ THE WOMAN (40s, wet coat) stands in the doorway.
6 A ASH (30s) holds a kitchen knife, shaking.
7 D ASH: You came through the back door. The back door has been locked since Tuesday. Tell me how that happens. Tell me, and use small words, because I have been awake since the sky went green, and they are tired.
8 D THE WOMAN (beat): I didn't open it. It was already open.
9 D RADIO [V.O.] (static): Ash? Ash, do you copy? The grid's not coming back. Repeat, not coming back.
10 D ASH (not taking their eyes off her): Copy, Mum. Stay in the cellar.
11 D THE WOMAN (beat): I'm not here to hurt anyone. My name is Delphine. I was in the lab when it started. I know what's in the sky, and I know why the lights went. I have forty minutes of explanation and you have, what, a bread knife?
12 D ASH (lowering it an inch): It's a good bread knife.
13 D DELPHINE (a short laugh, then not): I believe you.
14 A ¶ The lantern flickers.
15 A Out.
16 A On.
17 D RADIO [V.O.]: Ash. There's someone at the window.
18 A ¶ Ash looks.
19 A Delphine looks.
20 A Nothing but black glass.
21 D ASH (whispering): Tell me everything. Start with what you did.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05074.json
### SCENE s05074 | INT. THE ROYAL OAK FUNCTION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TIM HARGREAVES, TOM HARGRAVE, WAITER, WEDDING GUEST'S DOG, HATTIE
1 A ¶ Bunting, half-fallen.
2 A A disco ball turning slowly over an empty dance floor.
3 A Somewhere, a speaker plays something by Take That, very quietly, as if embarrassed.
4 A ¶ Outside, rain on the car park.
5 A The sort that can't be bothered to stop.
6 A ¶ TIM HARGREAVES (40s, tie round his head like a headband, pint in each hand) sits on a stack of chairs.
7 A Opposite him, TOM HARGRAVE (40s, immaculate, one button undone, a medal in a velvet box on his knee).
8 A ¶ A WAITER wheels a trolley of cold sausage rolls between them.
9 A Neither takes one.
10 A ¶ A WEDDING GUEST'S DOG, a spaniel in a bow tie, sleeps under a table.
11 D TIM: Lovely do.
12 D TOM: Mm.
13 D TIM: Lovely speech, as well. The bit about the cricket.
14 D TOM: I wasn't talking about cricket.
15 D TIM: Weren't you? I thought you were.
16 A ¶ Quiet.
17 A The disco ball turns.
18 A ¶ HATTIE (30s, bridesmaid, shoes in hand) drifts over, a plate of trifle balanced on her wrist.
19 D HATTIE: Right, you two. Dad says you're to stop sulking by the buffet.
20 D TOM: We're not sulking, Hattie.
21 D TIM: We're discussing.
22 D HATTIE: You're discussing a medal in a box, Tim. In the corner. At my sister's wedding.
23 D TIM: It's Tom's medal.
24 D TOM: It's our medal, strictly speaking.
25 D HATTIE: Of course it is.
26 A ¶ She eats a spoonful of trifle.
27 A Looks from one to the other.
28 D HATTIE [CONT'D]: Tom. Tim. You were twenty-two. It was a relay. It was nineteen years ago.
29 D TIM: Nineteen and a half.
30 D TOM: And I'd have won if someone had passed the baton.
31 D TIM: I passed the baton.
32 D TOM: You threw the baton.
33 A ¶ A pause.
34 A The waiter reverses his trolley, very slowly, out of range.
35 D TIM (quietly): I tripped, Tom.
36 D TOM: You tripped on purpose.
37 D TIM: Don't be absurd.
38 D TOM: You told Gillian I'd cheated at the trials. She told the committee.
39 D TIM: That was a joke!
40 D TOM: Nineteen years, Tim. Nineteen years, and every Christmas, it's a joke.
41 A ¶ The spaniel wakes.
42 A Lifts its head.
43 D HATTIE: Boys, please. My sister is cutting the cake in an hour.
44 D TIM (standing): I am not having this, Tom. Not here.
45 D TOM (standing): Then where?
46 A ¶ Beat.
47 A Tim sets down both pints.
48 A Tom puts the medal on the chair.
49 A ¶ The disco ball catches the light.
50 D TIM: Outside.
51 D TOM: Outside.
52 A ¶ They go.
53 A The doors swing shut behind them.
54 A A single sausage roll rolls off the trolley and lands on the floor.
55 D HATTIE (to the spaniel): Right. Well. That's the evening.
56 A ¶ Rain.
57 A A shout, muffled.
58 A A crash of metal bins.
59 A ¶ The spaniel puts its head back down.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05075.json
### SCENE s05075 | INT. RIDESHARE CAR - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DRIVER, THE TWINS, NARRATOR, PRIYA
1 A ¶ HANDHELD.
2 A A dashboard camera and a small phone-cam on the headrest.
3 A Grainy.
4 A Streetlights smear past.
5 A ¶ ON CAMERA: a DRIVER, 40s, hands at ten and two, eyes in the mirror.
6 A In the back seat, THE TWINS (nine, matching pyjama tops, one asleep on the other's shoulder).
7 D DRIVER: You're sure you want me on camera? It's mostly just driving.
8 D THE TWINS (together, sleepy): Yes.
9 D DRIVER: Okay then. Hello, internet.
10 A ¶ She laughs.
11 A The road hums.
12 D NARRATOR [V.O.]: At two in the morning, every city looks like a memory of itself.
13 A ¶ Red light.
14 A The car stops.
15 A Nobody speaks.
16 D DRIVER: So. Where's your mum tonight?
17 D THE TWINS: Hospital.
18 D DRIVER: Oh. Sorry, love. Is she -- is she going to be all right?
19 D THE TWINS (together): The baby's coming.
20 D DRIVER: Oh! Well, that's different. That's good.
21 A ¶ She turns round.
22 A Smiles.
23 A They don't, quite.
24 D THE TWINS (together, small): We're meant to be asleep at Nan's.
25 D DRIVER: And instead you're in a stranger's car at two a.m. with a camera pointed at you.
26 D THE TWINS: Dad's meeting us. He said ring a cab.
27 D DRIVER: I'm not a cab. I'm a rideshare.
28 D THE TWINS (together): Is it different?
29 D DRIVER: It's about four pounds different.
30 A ¶ Green light.
31 A They move.
32 D DRIVER [CONT'D]: My name's Priya, by the way. Priya. In case your dad asks.
33 D PRIYA (into the mirror): You can say it back to me. So I know you know it.
34 D THE TWINS (together): Priya.
35 D PRIYA: Good. That's one safety rule down.
36 A ¶ She taps the wheel.
37 A The hospital sign, glowing, rises out of the dark.
38 A ¶ This is the last ride before the family changes shape.
39 D PRIYA [CONT'D]: Nearly there. She'll have the baby by the time we find a parking space.
40 D THE TWINS (together): She said that last time too.
41 D PRIYA: And was she right?
42 D THE TWINS (together): Yes.
43 A ¶ The car slows.
44 A A man in a coat waves under the hospital canopy.
45 A The twins sit up, instantly awake.
46 D PRIYA: There he is.
47 A ¶ The door opens.
48 A Cold air.
49 A They climb out, hand in hand, and run.
50 A ¶ Priya watches them go, then turns the phone-cam toward herself.
51 D PRIYA [CONT'D]: Five stars, please. And if you're reading this, congratulations.
52 T CUT TO BLACK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05076.json
### SCENE s05076 | INT. BORDER CHECKPOINT - BOOTH - DAY
Detected names (may be incomplete or contain aliases): GUARD, THE BAND, WALT
1 A ¶ A cramped booth.
2 A A fan that's seen better decades.
3 A A gate arm.
4 A A vending machine that only sells one flavour.
5 A ¶ A GUARD (50s, belly, clipboard, tired eyes) sits and eats a sandwich.
6 A A sign behind him reads: NEXT WINDOW PLEASE.
7 A ¶ A beat-up van pulls up outside.
8 A Its side reads: THE GENTLE BASTARDS - TOUR 2025.
9 A ¶ THE BAND (four people, leather jackets, instruments) climbs out in a line and walks up to the window.
10 D GUARD: Passports.
11 D THE BAND (in unison, ragged): Hi!
12 A ¶ APPLAUSE.
13 D GUARD (not looking up): That's cute. Passports.
14 D THE BAND (handing them over in a stack): Here.
15 A ¶ He flips through.
16 A Stops.
17 D GUARD: You're all Gary.
18 D THE BAND (shrugging): It's a stage name.
19 D GUARD: It's the same name on four passports.
20 D THE BAND (proudly): We're consistent.
21 A ¶ LAUGHS.
22 A ¶ The Guard sighs, puts down his sandwich and picks up his phone.
23 A A text lights up the screen.
24 A ¶ ON PHONE: dad where r u ON PHONE: ur shift ends in 10
25 D GUARD (typing): Busy, Mel. Border stuff.
26 A ¶ He puts it down.
27 A Looks at the band again.
28 A A pause.
29 A Too long.
30 D GUARD [CONT'D]: Where's the drummer?
31 D THE BAND (looking at each other): What drummer?
32 D GUARD: The one in the van.
33 A ¶ Beat.
34 A The band turns slowly.
35 A In the van window, a tiny dog in sunglasses stares back at them.
36 A WOOF.
37 A ¶ APPLAUSE.
38 D GUARD [CONT'D] (standing, finally): That's not a drummer. That's a dog.
39 D THE BAND (quietly, to each other): He's a very good dog.
40 A ¶ The Guard reads the name on his badge, taps it.
41 A WALT.
42 D WALT: Call me Walt. And your dog goes in the quarantine bay.
43 D THE BAND (in unison): We've never been so insulted.
44 A ¶ Walt hits a button.
45 A The gate arm drops.
46 A The fan whirs.
47 D WALT [CONT'D] (softly): That's two hours, folks. Enjoy the vending machine.
48 A ¶ A beat.
49 A Then the vending machine, from nowhere, drops a can of soup.
50 A THUNK.
51 T LAUGHS. APPLAUSE. CUT TO:

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05077.json
### SCENE s05077 | INT. NOVALOOP STARTUP OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): TEAM, KIM, KIP
1 A ¶ An open-plan office, lit only by monitors.
2 A Beanbags.
3 A A whiteboard covered in arrows.
4 A Takeaway boxes on every desk.
5 A ¶ THE TEAM (six developers) sits in a row of desks, headphones on, typing in perfect sync.
6 A ¶ KIM sits at a corner desk, laptop open, hood up.
7 A KIP, in a cardigan, approaches slowly with two mugs.
8 A ¶ Kip sets one mug down.
9 A Kim doesn't look up.
10 D KIP: I made you tea.
11 D KIM: Thanks.
12 A ¶ Kip waits.
13 A Kim keeps typing.
14 A THE TEAM keeps typing.
15 D KIP: You've been on that file for an hour.
16 D KIM: Just tidying up.
17 A ¶ Kip glances at the screen.
18 A Looks away.
19 A Looks back.
20 A ¶ ON SCREEN: a file labelled CLIENTS_Q3.xlsx, uploading to an external server.
21 A 67%.
22 A ¶ ON PHONE: (Kim's phone, face-up) you have 10 min. don't be late.
23 D KIP: That isn't tidying.
24 D KIM: It's a backup.
25 D KIP: To who?
26 A ¶ Kim stops typing.
27 A Slowly closes the laptop halfway.
28 A Looks up.
29 D KIM: Kip.
30 D KIP: Kim. I'm not stupid. I wrote half that database.
31 D KIM: I know.
32 A ¶ THE TEAM stops typing.
33 A All six heads turn at once.
34 D KIP: They've got us on a deadline, and now you're sending the clients off the books.
35 D KIM: It's a lot of money. More than I'll ever make here.
36 D KIP: It's stealing.
37 D KIM: It's leverage.
38 A ¶ The upload bar pings.
39 A 100%.
40 A ¶ Kip steps back.
41 A THE TEAM stands as one.
42 A Nobody speaks.
43 A A printer somewhere clicks.
44 D KIM [CONT'D] (softly): Please sit down. Please.
45 D KIP: No.
46 A ¶ They turn and walk toward the exit.
47 A Kim stands.
48 D KIM: Kip!
49 A ¶ Kip keeps walking.
50 A The door opens.
51 A Kip stops in the frame.
52 A ¶ ON PHONE: (Kip's, buzzing) call me when ur out. we need to talk about kim.
53 A ¶ Kip turns back, phone in hand, and holds it up.
54 A Kim reads it.
55 A Goes pale.
56 D KIM [CONT'D]: That wasn't meant for you.
57 D KIP: I know. That's why it's so good.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05078_0.json
### SCENE s05078_0 | EXT. DRY PLAINS - HIGH NOON - SERIES OF SHOTS
Detected names (may be incomplete or contain aliases): 
1 A ¶ SERIES OF SHOTS:
2 A ¶ A) Dust.
3 A A long line of people in wide hats and hand-painted signs marching down a dirt road.
4 A A banner: THE RIVER IS NOT FOR SALE.
5 A ¶ B) Dana, 30s, in a duster coat, leads the march with a megaphone.
6 A The sun slams down on her like a hammer.
7 A ¶ C) Eli, 20s, thin, carries a drum.
8 A Every step, BOOM.
9 A ¶ D) Rosa, 50s, wipes her brow with a faded flag.
10 A She's done this before.
11 A ¶ E) Hank, 60s, in a sheriff's badge, arms crossed beside a rusted oil derrick.
12 A His horse noses a tumbleweed.
13 A ¶ F) Two teenagers on a fence post film everything on their phones.
14 A A coyote watches from the ridge.
15 A ¶ G) Tess, 20s, kneels on the road and locks her arm into a barrel of concrete.
16 A CLINK.
17 A ¶ H) Cole, 40s, in a company suit and cowboy boots, steps out of a black truck.
18 A The door SLAMS.
19 A ¶ END SERIES OF SHOTS.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05078_1.json
### SCENE s05078_1 | EXT. THE OLD PUMP STATION - CONTINUOUS
Detected names (may be incomplete or contain aliases): DANA, COLE, HANK, ROSA, ELI, TESS
1 A ¶ Cole stops ten feet from Tess.
2 A Hank stops beside him.
3 A Dana lowers the megaphone.
4 A The drum goes quiet.
5 D DANA: You're on public land, Cole.
6 D COLE: Dana. The lease says otherwise.
7 D DANA: Leases can be wrong.
8 D COLE: Not this one.
9 D HANK (wearily): Folks. It's a hundred and four degrees.
10 D ROSA: Then you'll want to move that truck.
11 D COLE: I've got a signed order.
12 D ELI: We've got a river.
13 D COLE: You've got a barrel of concrete and a drum.
14 D TESS: And a lot of water bottles.
15 D HANK: Tess, honey, this isn't what I signed up for.
16 D TESS: Sheriff, none of us signed up for the end of the world.
17 D COLE: That's a bit dramatic.
18 D DANA: It's a drought, Cole. Seven years. You want dramatic, go look at Miller's well.
19 D COLE: I've seen Miller's well.
20 D ROSA: Then you know.
21 D COLE: I know there's a hundred jobs on that derrick.
22 D ELI: And a thousand people downriver.
23 D HANK: Cole, they've got a point.
24 D COLE: Hank, whose side are you on?
25 D HANK: I'm on the side with the shade.
26 A ¶ A beat.
27 A Dana almost laughs.
28 D DANA: Cole. Walk away. Take the order back to the office and tell them the town said no.
29 D COLE: They won't hear it.
30 D DANA: Then make them.
31 D COLE: You don't know what you're asking.
32 D ROSA: We know exactly.
33 D TESS: We're not moving.
34 D ELI (quietly): Neither is the river.
35 A ¶ A long silence.
36 A The wind lifts the banner.
37 A The drum, one soft BOOM.
38 A ¶ Cole takes off his hat.
39 A Looks at the derrick.
40 A At the line of faces.
41 A At Hank.
42 D COLE: Sheriff. Arrest the barrel.
43 D HANK: Excuse me?
44 D COLE: You heard me. It's a hazard. Roll it off the road.
45 A ¶ Dana and Eli lunge in front of Tess.
46 A Rosa grabs Hank's sleeve.
47 A The two teenagers scream.
48 A The coyote bolts.
49 A The whole crowd surges forward and then freezes as a siren WAILS in the distance.
50 A ¶ Everyone looks at the horizon.
51 A A cloud of dust, rolling toward them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05079.json
### SCENE s05079 | INT. MAPLE STREET VET CLINIC - RECEPTION - DAY
Detected names (may be incomplete or contain aliases): JUNE, LENA OKAFOR, THE CHEN KIDS, RIVER, HALVERSEN, PARROT
1 A ¶ Waiting room.
2 A Linoleum.
3 A A fish tank.
4 A A beagle howls from behind a door.
5 A ¶ JUNE (17, scrubs two sizes too big, first week) stacks leaflets at the desk.
6 A She keeps checking the clock.
7 A ¶ LENA OKAFOR (40s, vet, white coat) strides through with a clipboard.
8 D LENA: June. Room two. Now.
9 D JUNE: Yes, Dr. Okafor.
10 A ¶ THE CHEN KIDS (three siblings, matching backpacks) sit in a row on the bench, a cat carrier on their laps.
11 A It yowls.
12 A They flinch together.
13 A ¶ RIVER (20s, they/them, nose ring, rescue-shelter hoodie) leans on the counter.
14 D RIVER: Hey. I'm here for my appointment. Biscuit has the thing.
15 D JUNE: What thing?
16 D RIVER (shrugging): The thing. Biscuit's a dog. Biscuit has the thing.
17 A ¶ A black lab sits at their feet, head cocked.
18 D JUNE (writing): Okay. Uh. Name?
19 D RIVER: Biscuit. Last name Rivera-Hall. They go by Biscuit.
20 D JUNE: Who goes by Biscuit?
21 D RIVER: The dog. Me too, honestly.
22 A ¶ June blinks.
23 A Writes.
24 A Her pen skids across the page.
25 D LENA [O.S.]: June! Room two!
26 D JUNE (under her breath): Coming, coming, oh my God.
27 A ¶ The cat carrier SCREECHES.
28 A The Chen Kids scream in unison.
29 D THE CHEN KIDS: It's biting!
30 D RIVER (calmly): It's not biting. It's just upset.
31 D JUNE (to herself, flipping a chart): Don't panic. Don't panic.
32 A ¶ She turns.
33 A Grabs the carrier.
34 A The cat bolts out the front, a streak of grey fur, knocking over the fish tank stand.
35 D JUNE [CONT'D] (to the room): Everybody stay calm!
36 A ¶ Nobody is calm.
37 A ¶ The front door swings open.
38 A MR. HALVERSEN (60s, tweed coat, a parrot on his shoulder) steps in, drenched.
39 D MR. HALVERSEN: Which one of you is in charge?
40 D LENA (emerging, hands up): That would be me.
41 D MR. HALVERSEN: My bird says your sign is wrong.
42 D PARROT (from his shoulder): Wrong! Wrong!
43 A ¶ June puts her head on the desk.
44 A ¶ Biscuit the dog barks once, the cat yowls from the street, and the fish tank gently drips onto the floor.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05080.json
### SCENE s05080 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): TESS HALLORAN, DOOR BANGS, THE WOMAN, GRETA
1 A ¶ Fluorescent tubes.
2 A HUMMING.
3 A A coffee urn GURGLES.
4 A ¶ Folding chairs in a circle.
5 A Eight empty.
6 A One taken.
7 A ¶ TESS HALLORAN, 17, slumps in it.
8 A Backpack on her knees.
9 A Court-ordered slip crushed in her fist.
10 A ¶ Rain.
11 A Hammering the high windows.
12 A ¶ The DOOR BANGS open.
13 A ¶ A WOMAN storms in.
14 A Fifties.
15 A Soaked.
16 A Leather jacket.
17 A Keys in a white-knuckle grip.
18 A ¶ She stops.
19 A Stares at Tess.
20 D THE WOMAN: You're in my chair.
21 D TESS: There's no name on it.
22 A ¶ Silence.
23 A ¶ The Woman drops into the next seat.
24 A The chair SCREECHES.
25 D THE WOMAN [CONT'D]: You're a kid.
26 D TESS: Seventeen.
27 D THE WOMAN: Seventeen. Great.
28 A ¶ Tess pulls out her phone.
29 A Taps.
30 A Taps again.
31 A ¶ Her phone.
32 A Dead.
33 D TESS: Nobody else is coming?
34 D THE WOMAN: Flooded out on Delancey. It's us.
35 A ¶ The urn CLICKS off.
36 A Quiet.
37 A ¶ Tess stands.
38 A Grabs her bag.
39 D TESS: Then I'm out. She said I only needed a signature.
40 D THE WOMAN: She who?
41 D TESS: The judge.
42 D THE WOMAN: She signs nothing unless you sit.
43 A ¶ Tess freezes.
44 A Thunder.
45 A A long ROLL.
46 A ¶ Nothing.
47 A ¶ The Woman leans forward.
48 A Elbows on knees.
49 A She meets Tess's eyes.
50 D THE WOMAN [CONT'D]: Eleven years sober. Tuesday. Her birthday. My daughter's.
51 D TESS: Why are you telling me that?
52 D THE WOMAN: Because she wouldn't open the door either.
53 A ¶ Tess's jaw tightens.
54 D TESS: That's not fair.
55 A ¶ The Woman holds out a hand.
56 D THE WOMAN: Greta.
57 A ¶ Tess stares at it.
58 A A beat.
59 A ¶ Lightning.
60 A The lights FLICKER.
61 A ¶ Tess shakes it.
62 D TESS: Tess.
63 D GRETA: Sit, Tess.
64 A ¶ Tess sits.
65 A ¶ Rain.
66 D GRETA [CONT'D]: You go first.
67 D TESS (barely audible): Hi. I'm Tess.
68 D GRETA: Hi, Tess.
69 A ¶ The lights HOLD.
