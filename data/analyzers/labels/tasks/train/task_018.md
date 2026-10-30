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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00323.json
### SCENE s00323 | INT. STALLED CABLE CAR GONDOLA - DAY
Detected names (may be incomplete or contain aliases): RAVI, NKECHI, OLEG, PILAR
1 A ¶ RAVI, forties, a hiking guide, sits on the floor with his boots braced against the door.
2 A NKECHI, thirties, grips the rail.
3 A OLEG, seventies, holds a thermos in both hands.
4 A PILAR, twenties, films the white nothing outside on her phone.
5 A ¶ The gondola has been still for two hours.
6 A He licks his lips.
7 A She lowers the phone.
8 A They all look at the roof as it ticks in the cold.
9 D RAVI: Rescue said four hours. That was one hour ago, so three.
10 D NKECHI: It was two hours ago. So two.
11 D OLEG: It is whatever number keeps us calm. I choose three.
12 D PILAR: My battery is nineteen percent.
13 D RAVI: Then stop filming the clouds.
14 D PILAR: They're getting closer.
15 D NKECHI: Clouds don't get closer. We get lower.
16 D OLEG: Nobody said lower.
17 D RAVI: The cable sags in the cold. It is normal. Everybody breathe slowly, in through the nose.
18 D PILAR: I am breathing. I'm breathing so loudly.
19 D NKECHI: We are fine. Somebody pour the tea.
20 D OLEG: Last cup is mine. After that, we take turns.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00066.json
### SCENE s00066 | INT. HOSPITAL ROOFTOP HELIPAD - DAWN
Detected names (may be incomplete or contain aliases): NATHANIEL OYELOWO-STRAND, NURSE PHILOMENA BRANDT-ADEYEMI, GASPAR LINDQVIST-MBEKI, DISPATCH
1 A ¶ Concrete, windsock, a single orange cone.
2 A The city spreads below in blue haze.
3 A A rusted door clatters open.
4 A ¶ DR. NATHANIEL OYELOWO-STRAND (40s, scrubs, blood on one cuff) steps out, breathing.
5 A Behind him comes NURSE PHILOMENA BRANDT-ADEYEMI (30s, braids, hospital badge swinging).
6 A Nearby, an orderly, GASPAR LINDQVIST-MBEKI (20s, lanky, mop bucket), smokes against the rail.
7 D NATHANIEL: Third night in a row.
8 D PHILOMENA: You keep coming up here.
9 D NATHANIEL: Nobody follows me.
10 D PHILOMENA: I followed you.
11 D GASPAR: So did I. I was here first.
12 A ¶ The radio on Philomena's belt crackles.
13 D DISPATCH [V.O.] (over radio): Trauma Two, inbound helicopter, ETA four minutes. Pediatric, severe burns.
14 A ¶ Nathaniel straightens.
15 A Philomena grabs the radio.
16 D PHILOMENA (into radio): Copy. Pad is clear.
17 A ¶ She and Nathaniel look at Gaspar, who drops his cigarette and stamps it out.
18 A The windsock snaps taut.
19 D NATHANIEL: Gaspar, the cone.
20 D GASPAR: On it.
21 A ¶ He drags the orange cone aside.
22 A In the distance, a speck grows into the rising hammer of rotors.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00740.json
### SCENE s00740 | INT. SYNERGY CLOSET - OFFICE SUPPLY ROOM - DAY
Detected names (may be incomplete or contain aliases): MORTIMER GRAY, LAKSHMI IYER, DUNCAN OKORO
1 A ¶ A converted broom closet with a laminated sign reading SYNERGY CLOSET: THINK BIG.
2 A Shelves of sticky notes and toner.
3 A Three colleagues stand shoulder to shoulder with nowhere to put their elbows: MORTIMER GRAY, fifties, regional director; LAKSHMI IYER, thirties, project lead; DUNCAN OKORO, twenties, intern.
4 D MORTIMER: Right. Let's circle back on the circle-back.
5 D LAKSHMI: We circled back last week.
6 D MORTIMER: And what did we learn?
7 D LAKSHMI: That we should circle back.
8 D DUNCAN: Sorry, can I ask what the project is?
9 D MORTIMER: The project is alignment.
10 D DUNCAN: Aligned with what?
11 D MORTIMER: With the vision.
12 D LAKSHMI: Which is?
13 D MORTIMER: It's in the deck.
14 D LAKSHMI: The deck is forty slides and slide nine is a picture of a canoe.
15 D MORTIMER: It's a metaphor.
16 D DUNCAN: For what?
17 D MORTIMER: For paddling.
18 D LAKSHMI: Together.
19 D MORTIMER: Exactly. Thank you, Lakshmi.
20 D DUNCAN: I thought we were going to cancel the thing.
21 D MORTIMER: What thing?
22 D DUNCAN: The thing that the other thing replaced.
23 D LAKSHMI: Duncan, that was the original thing.
24 D DUNCAN: Oh.
25 D MORTIMER: We don't cancel things. We sunset them.
26 D LAKSHMI: Sunset them how?
27 D MORTIMER: Gently. With a runway.
28 D DUNCAN: What's at the end of the runway?
29 D MORTIMER: Another meeting.
30 D LAKSHMI: Of course it is.
31 D DUNCAN: Do you have to be in the closet for this?
32 D MORTIMER: The conference room is booked.
33 D LAKSHMI: For what?
34 D MORTIMER: A meeting about the closet.
35 D DUNCAN: I need to get toner.
36 D MORTIMER: Take whatever you need. This is a safe space.
37 D LAKSHMI: It's a closet.
38 D MORTIMER: A safe closet.
39 D DUNCAN: Is anyone writing this down?
40 D MORTIMER: No. That's the beauty of it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01720.json
### SCENE s01720 | INT. DRAINED MUNICIPAL SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, BRAM OKONKWO, PRUDENCE HALE, WENDELL DUCROIX
1 A ¶ Cracked blue tile.
2 A One work light hums over the deep end.
3 A ODALYS VANTERPOOL (30s, night custodian, flashlight like a club) stands on the ladder.
4 A BRAM OKONKWO (20s, her apprentice) clutches a mop.
5 A PRUDENCE HALE (60s, retired lifeguard, whistle on a cord) and WENDELL DUCROIX (40s, city inspector, clipboard) crowd the rim above.
6 D ODALYS: Nobody swims here. Nobody has swum here since--
7 D PRUDENCE: Since the boy. Say it.
8 D WENDELL: The drain cover is secure, I signed it myself, I signed it twice--
9 D BRAM: Something's knocking. Under the tile.
10 D ODALYS: It's the pipes.
11 D PRUDENCE: It's counting.
12 A ¶ Three slow knocks.
13 A The work light dies.
14 A Odalys and Bram scramble up the ladder, colliding, while Wendell drops the clipboard and Prudence blows the whistle once, hard.
15 D WENDELL: Stop blowing that!
16 D BRAM: Who's laughing? Somebody's laughing!
17 D PRUDENCE (whispering): Nobody. Nobody's down there.
18 A ¶ The light snaps back on.
19 A All four freeze.
20 A In the deep end, a single wet footprint, then another, walking toward them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02121.json
### SCENE s02121 | EXT. COUNTY FAIR - FERRIS WHEEL, TOP GONDOLA - DUSK
Detected names (may be incomplete or contain aliases): DELPHINE OKAFOR, ZURI, BIBI, PAPA EMEKA, HANK
1 A ¶ The wheel has stopped.
2 A Forty feet up.
3 A The gondola rocks.
4 A Far below, a corn dog stand glows.
5 A ¶ DELPHINE OKAFOR, 40s, nurse's scrubs under a cardigan, grips the safety bar.
6 A Across from her sit her daughters, ZURI, 14, braces and a cracked phone, and BIBI, 6, tiger face paint half smeared.
7 A Beside Delphine sits her father, PAPA EMEKA, 70s, Sunday hat, calm as stone.
8 D ZURI: Mom, we've been stuck for twenty minutes.
9 D DELPHINE: I know, Zuri. Stay in your seat.
10 D BIBI: Zuri's phone is shaking.
11 D ZURI: My hand is shaking, Bibi. The phone is fine.
12 D PAPA EMEKA: Bibi, come sit by Papa. Look at the lights, not the ground.
13 D BIBI: I want to look at the ground.
14 D DELPHINE: Bibi. Seat.
15 A ¶ The gondola sways.
16 A Zuri grabs Bibi's wrist.
17 A She pulls her close and she squeezes back hard.
18 D HANK [O.S.] (over the loudspeaker): Folks, generator tripped. Sit tight, we're rebooting.
19 D ZURI: Rebooting? Papa, he said rebooting.
20 D PAPA EMEKA: Zuri, I once rode a lorry across the Niger with no brakes. We will be fine.
21 D BIBI: Did Papa really do that, Mom?
22 D DELPHINE: Ask him when we are on the ground, baby.
23 D PAPA EMEKA: Delphine, take my hat. Your hands need something to hold.
24 A ¶ Delphine takes the hat.
25 A Turns it in her fingers.
26 D DELPHINE: Thank you, Papa.
27 A ¶ The wheel lurches.
28 A Everyone freezes.
29 A It holds.
30 D ZURI: Bibi, don't look down.
31 D BIBI: I'm looking at you, Zuri.
32 D HANK [O.S.] (over the loudspeaker): Almost there, Okafors!
33 D DELPHINE: He knows our name.
34 D PAPA EMEKA: Small town. Everybody knows everybody.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01174.json
### SCENE s01174 | INT. FLOODED TERRACE BUNKER - NIGHT
Detected names (may be incomplete or contain aliases): TAMSIN BRIGG, IVO PETROV, MOTH, DEMIR, MEDIC ABENA NKRUMAH
1 A ¶ Knee-deep water.
2 A A single lantern swings from a hook.
3 A Mortar fire thumps overhead; dust sifts down.
4 A ¶ SGT. TAMSIN BRIGG (40s, mud to the eyebrows) checks a rifle bolt.
5 A CPL.
6 A IVO PETROV (30s) holds a radio that gives only static.
7 A PVT.
8 A LUKA "MOTH" DEMIR (19) crouches by the slit, shaking.
9 D BRIGG: Heads down, everybody. Quiet.
10 A ¶ Another thump.
11 A They flatten against the wall.
12 A Water slops.
13 A Brigg and Petrov grab for the lantern at the same moment and both stop with their hands on the hook.
14 D PETROV (to Brigg): Radio's dead, Sergeant.
15 D BRIGG: Then we're the radio.
16 D MOTH (mutters, to himself): Don't look. Don't look. Don't look.
17 A ¶ The hatch above scrapes.
18 A All three raise their rifles.
19 A A boot, then a body drops into the water.
20 A MEDIC ABENA NKRUMAH (20s, red cross armband, medic bag held overhead) lands in a crouch.
21 D ABENA: Hold your fire. Who's bleeding?
22 A ¶ Nobody answers.
23 A Moth slowly lowers his rifle and looks at his own hand, which is slick and dark.
24 D BRIGG (quietly): Moth. Show me.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01343.json
### SCENE s01343 | EXT. GLACIER CREVASSE - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE VOSS, TOBY KANE, IZZY, BRANDT
1 A ¶ A blue slot in the ice, forty feet down, sheer walls glowing like glass.
2 A A rope runs up into white sky.
3 A ¶ MARGUERITE VOSS, 40s, dangles at the bottom, crampons biting.
4 A TOBY KANE, 30s, hangs three feet above her, rope bunched in his gloves.
5 A At the lip, IZABELLA "IZZY" BRANDT, 30s, belays, braced against an ice axe.
6 D IZZY (shouting down): Talk to me!
7 D TOBY: Her leg's pinned!
8 D MARGUERITE: I'm fine!
9 D IZZY: Which of you is talking?
10 D TOBY: Me! She means me!
11 A ¶ The ice groans.
12 A A shelf cracks above them.
13 A Snow hisses down.
14 A Toby swings, grabs at the wall, kicks a foothold.
15 A Marguerite hugs the ice.
16 D TOBY [CONT'D]: Cut her loose!
17 D MARGUERITE: Don't cut me loose!
18 D IZZY: Stop moving! Both of you!
19 A ¶ The groan fades.
20 A Quiet.
21 A Snow dribbles.
22 A Marguerite's breath fogs.
23 A Toby peers down at her, then up at Izzy.
24 D TOBY (whispering): She's stuck. I can reach her.
25 D IZZY (whispering): How stuck?
26 D MARGUERITE: Stuck like a stuck thing.
27 A ¶ Toby laughs once, shakily.
28 A He lowers himself another foot.
29 A His hand finds her harness.
30 A The ice gives a final crack and holds.
31 D IZZY: Pull!
32 A ¶ Toby pulls.
33 A Marguerite's leg comes free with a spray of ice.
34 A She cries out, grabs his wrist, and they rise together, jerked up the wall in short grunting yanks.
35 A ¶ At the lip, she hauls herself over first, then him.
36 A They collapse on the glacier, flat on their backs, staring at the sky.
37 D IZZY [CONT'D] (panting): Never again.
38 D MARGUERITE (panting): You say that every time.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01471.json
### SCENE s01471 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): PEPPER, ADEYEMI-HALL, DEZ, CARVALHO, CAPTAIN OLUWASEUN BRANNIGAN
1 A ¶ A round room wrapped around a spiral stair.
2 A A kettle sits on a coal stove.
3 A A wall phone with a cord like a pigtail hangs by the door.
4 A Rain hammers the little windows.
5 A ¶ PERPETUA "PEPPER" ADEYEMI-HALL (50s, oilskin coat, tired humor) is wrestling a very large frozen turkey into a very small oven.
6 D PEPPER: In you go. Nobody's judging.
7 A ¶ The turkey does not go in.
8 A She tries it sideways.
9 D PEPPER [CONT'D]: Wide-body. Fine. Everybody's built different.
10 A ¶ DESMOND "DEZ" CARVALHO (30s, a nervous inspector in a suit that has never seen weather) stands dripping on the mat, holding a clipboard like a shield.
11 D DEZ: Ms. Adeyemi-Hall, I'm required to note that the lamp is, technically, off.
12 D PEPPER: The lamp is resting.
13 D DEZ: Ships rely on that lamp.
14 D PEPPER: Ships rely on a lot of things. They also rely on a roast.
15 D DEZ: There is a ship out there right now.
16 D PEPPER: There's always a ship out there. Sit. Sit! You're making the room look nervous.
17 A ¶ Dez sits on a stool.
18 A It wobbles.
19 A He grips the table.
20 D DEZ: I was told the Board of Maritime Safety had been in touch.
21 D PEPPER: The Board of Maritime Safety sent me a calendar. January's a puffin.
22 A ¶ She finally jams the turkey in and slams the oven door.
23 A Victory.
24 A She dusts her hands.
25 A Dez writes something down.
26 D PEPPER [CONT'D]: What did you just write?
27 D DEZ: "Turkey."
28 D PEPPER: Good. Underline it.
29 A ¶ The wall phone RINGS.
30 A Both of them look at it.
31 A It RINGS again.
32 A Pepper does not move.
33 D DEZ: Aren't you going to...?
34 D PEPPER: It's the same man every Thursday. He wants to know about the weather.
35 D DEZ: It's Thursday?
36 D PEPPER: It's always Thursday somewhere. Answer it, if you're so keen.
37 A ¶ Dez picks up the receiver.
38 A Holds it at arm's length.
39 A ¶ X
40 A ¶ Dez goes white.
41 A He holds the receiver out to Pepper.
42 A She doesn't take it.
43 D DEZ (whisper): A ferry. There's a ferry.
44 D PEPPER: Tell him the lamp is resting.
45 D DEZ: I will not tell him the lamp is resting!
46 D BRANNIGAN [V.O.] (over phone): Hello? Is someone there? Is that the keeper?
47 A ¶ Dez clamps the phone to his chest, panting.
48 A Pepper sighs, as if he's asked her to move a sofa.
49 A She heaves herself up, sets the kettle aside, and takes the receiver.
50 D PEPPER (into phone): Marguerite. Pepper. I'll have her lit in four minutes. Stand off to starboard and sing something.
51 D BRANNIGAN [V.O.] (over phone): Four minutes? It's a thirty-minute climb.
52 D PEPPER (into phone): Not if you know the stairs.
53 A ¶ She hangs up.
54 A Walks to the spiral stair.
55 A Dez follows, clipboard abandoned.
56 D DEZ: You can't climb it in four minutes.
57 D PEPPER: No.
58 A ¶ She opens a panel beside the stair.
59 A Inside: a small brass lever and a rope.
60 A She hauls the lever.
61 A Far above, something grinds, then flares.
62 A A white sweep of light crosses the window and the kitchen goes bright, then dark, then bright.
63 A ¶ Dez stares.
64 D DEZ: It was always automatic?
65 D PEPPER: Since nineteen-eighty. I just like to see who turns up.
66 D DEZ: Then why was it off?
67 D PEPPER: I switched it off at six. To see who'd notice.
68 A ¶ She picks up the kettle again.
69 A Dez opens his mouth, closes it, and picks up his clipboard.
70 A ¶ The kitchen door BANGS open.
71 A A wet, enormous man in a ferry captain's cap fills the frame: CAPTAIN OLUWASEUN BRANNIGAN (60s, a tide-beaten face, furious), a handheld radio still crackling at his belt.
72 A Behind him, the storm.
73 D BRANNIGAN: Which of you turned my lighthouse off?
74 A ¶ Pepper points at Dez without looking.
75 D DEZ: Me?!
76 D BRANNIGAN (to Dez, advancing): You? You're the one?
77 D DEZ: No! I'm the inspector!
78 D BRANNIGAN: Inspector of what?
79 D PEPPER: Turkey.
80 A ¶ Brannigan stops.
81 A Smells the air.
82 A Sniffs again.
83 A His face softens by degrees.
84 D BRANNIGAN: Is that sage?
85 D PEPPER: Take your coat off, Seun. The phone can have your voice. There's enough for everyone.
86 D BRANNIGAN (still suspicious): How much enough?
87 D PEPPER: Wide-body enough.
88 A ¶ Brannigan peels off his dripping coat.
89 A Dez, bewildered, makes room on the stool.
90 A It wobbles.
91 A All three men and the turkey settle in as the lighthouse beam wheels slowly past the window, over and over.
92 D DEZ (quietly, to himself): Underline "turkey."
93 A ¶ He does.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00175.json
### SCENE s00175 | INT. MUNICIPAL CLOCK TOWER - MECHANISM ROOM - DAY
Detected names (may be incomplete or contain aliases): ARTHUR PENROSE-LIND, MIRIAM VOSS, DEZ, OYELOWO, CALLUM BRIGHT
1 A ¶ A cramped stone chamber crowded with brass gears the size of cartwheels.
2 A A pendulum swings slowly behind a wire cage.
3 A Dust floats in the shafts of light from a narrow slit window.
4 A The ticking is steady, enormous, almost restful.
5 A ¶ ARTHUR PENROSE-LIND, 60s, silver mustache, tweed jacket, kneels over a toolbox with the unhurried air of a man being paid by the hour.
6 A His partner MIRIAM VOSS, 50s, sharp-eyed and gray-braided, sits on an upturned bucket with a ledger on her knee.
7 A DESMOND "DEZ" OYELOWO, 30s, in a maintenance jumpsuit, oils a gear with a long-spouted can while keeping one ear on the stairwell.
8 A Perched on the stairs, a nervous teenager, CALLUM BRIGHT, 17, holds a walkie-talkie he has not been asked to use.
9 D ARTHUR: Fine work, Dez. The old girl's never sounded better.
10 D DEZ: She hasn't been oiled since Truman.
11 D MIRIAM (not looking up): The bank vault is directly below the east face. Four feet of brick, then the floor.
12 D ARTHUR: And the pendulum shaft goes down how far?
13 D MIRIAM: Right to the ceiling of the vault annex. Nobody ever sealed it.
14 A ¶ Arthur nods, pulls a coil of rope from the toolbox, and measures it against his arm.
15 A Dez sets down the oil can and checks the cage latch.
16 A Callum shifts on the step.
17 A The walkie-talkie crackles with static, and he fumbles it to silence.
18 D CALLUM: Sorry.
19 D ARTHUR: Nothing to be sorry for, lad. Nothing at all.
20 D MIRIAM: Thursday, then. After the noon chime, before the council tour.
21 D DEZ: The council tour is at one.
22 D MIRIAM: Then we have forty minutes. Plenty.
23 A ¶ The clock gathers itself and strikes the quarter hour.
24 A The gears turn.
25 A Nobody flinches.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01838.json
### SCENE s01838 | EXT. LAKESIDE BOATHOUSE - DUSK
Detected names (may be incomplete or contain aliases): TEDDY, LUND, ARMAND BELLWETHER, CORINNE
1 A ¶ A weathered boathouse leaning over green water.
2 A Paper lanterns hang from the rafters, half of them unlit.
3 A A phonograph on an upturned crate turns a record, scratchy and slow.
4 A ¶ THEODORA "TEDDY" LUND, 30s, in a yellow dress that has seen better summers, sits on the dock with her feet in the water.
5 A Next to her, ARMAND BELLWETHER, 30s, a rower's shoulders under a rumpled linen shirt, holds two glasses and a bottle without a label.
6 A Behind them on the boathouse porch stand her sister CORINNE, 40s, arms folded, and Armand's father OLD MR. BELLWETHER, 70s, in a cardigan, who has said nothing since they arrived.
7 D TEDDY: Armand, you're going to drop it.
8 D ARMAND: I'm not going to drop it.
9 D TEDDY: You're holding it like a baby.
10 D ARMAND: A baby wouldn't have a cork.
11 D CORINNE: Teddy. Dinner.
12 D TEDDY: In a minute, Cor.
13 D CORINNE: You said that an hour ago.
14 D TEDDY: I meant it then too.
15 A ¶ Armand pours.
16 A The wine is pale.
17 A They clink.
18 A Old Mr. Bellwether coughs once and turns toward the water.
19 D ARMAND: Father, you want some?
20 D OLD MR. BELLWETHER: I want to know why my son is sitting on a dock in a good shirt.
21 D ARMAND: Because I've been meaning to ask her something.
22 D TEDDY (smiling): Then ask.
23 A ¶ He sets his glass down.
24 A A dragonfly lands on its rim.
25 A Corinne's arms unfold.
