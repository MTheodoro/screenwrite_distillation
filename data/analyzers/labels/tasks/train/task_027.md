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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02280.json
### SCENE s02280 | INT. BARBERSHOP, SILVER GULCH - DAY
Detected names (may be incomplete or contain aliases): JUDGE AMBROSE LITTLEFIELD, SHERIFF NATHANIEL WREN, DOC SILAS FAIRWEATHER, ROSALIND MARCHAND, ROSIE, DEPUTY CALEB, DOC
1 A ¶ Striped pole.
2 A Brass spittoon.
3 A Through the window, a gallows is being quietly dismantled across the street.
4 A ¶ JUDGE AMBROSE LITTLEFIELD, sixty, sits in the barber's chair under a white cloth.
5 A SHERIFF NATHANIEL WREN, forties, stands at the door with his hat in his hands.
6 A DOC SILAS FAIRWEATHER, a tall consumptive, sits by the stove.
7 A ROSALIND MARCHAND, called ROSIE, thirty, the barber, strops a razor.
8 A DEPUTY CALEB, nineteen, holds the broom.
9 D LITTLEFIELD: Cut it short, Rosie.
10 D ROSIE: Not too short, Judge. You'll feel the draught.
11 D WREN: He won't be out of doors much.
12 D LITTLEFIELD: Nathaniel, I'll be out of doors a good deal. Don't you worry.
13 D DOC: You look better than you did in March.
14 D LITTLEFIELD: I look like a man who sentenced the wrong brother.
15 D WREN: You sentenced the one the jury found.
16 D LITTLEFIELD: Juries find what you set in front of them.
17 D ROSIE: Hold still.
18 D LITTLEFIELD: Is the rope down yet?
19 D CALEB: Yes, sir. Half an hour ago.
20 D LITTLEFIELD: Good boy. Sweep the sawdust before the wind takes it.
21 D WREN: The mare's saddled at the livery. Provisions are in the left bag.
22 D LITTLEFIELD: You've been thoughtful.
23 D WREN: Rosie packed the bread.
24 D ROSIE: It's a day old.
25 D LITTLEFIELD: Everything's a day old in this town.
26 D DOC: Where will you go?
27 D LITTLEFIELD: South. There's a Judge in Albuquerque who owes me a sherry.
28 D ROSIE: You don't drink sherry.
29 D LITTLEFIELD: No. But it's owed.
30 D WREN: Ambrose.
31 D LITTLEFIELD: Yes, Nathaniel.
32 D WREN: I'll keep the bench warm.
33 D LITTLEFIELD: You'll keep it clean. That's the harder thing.
34 A ¶ Rosie wipes the razor on her apron and sets it on the shelf.
35 D ROSIE: That's the last of it.
36 D LITTLEFIELD: Thank you, Rosalind. What do I owe you?
37 D ROSIE: Two bits.
38 D LITTLEFIELD: Two bits for the cut of a lifetime.
39 D ROSIE: Three, if you stay for the shave.
40 D LITTLEFIELD: No. No, I believe I'll go as I am.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00056.json
### SCENE s00056 | INT. FUNERAL PARLOR BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): LARRY, PIETRZAK, VERONICA CHEN-ADEYEMI, MILO, TOBIAS WREN, CALLER
1 A ¶ Wood paneling.
2 A Lilies in a vase.
3 A A desk lamp turned low.
4 A A phone sits on the blotter like a sleeping animal.
5 A ¶ LAWRENCE "LARRY" PIETRZAK (50s, undertaker's black suit, tie loosened) counts bills at the desk.
6 A In the armchair sits his partner, VERONICA CHEN-ADEYEMI (40s, perfect posture, gloves on).
7 A On the sofa, a boy, MILO (teen, school blazer), turns an unlit candle over in his hands.
8 A At the window stands a figure, silent, looking out at the parking lot: TOBIAS WREN (30s, long coat).
9 A ¶ The phone rings.
10 A Veronica lifts her eyes.
11 A Larry stops counting.
12 D LARRY: Leave it.
13 D VERONICA: It's the fourth time.
14 A ¶ Larry's thumb works the edge of the bills.
15 A Milo sets the candle down.
16 D MILO: Should I--
17 D LARRY: No.
18 A ¶ The phone rings.
19 A Rings.
20 A Rings.
21 A Wren turns from the window, watches the receiver, and picks it up without speaking.
22 A He listens.
23 A A thin voice crackles through.
24 D CALLER [V.O.] (over phone): Is the arrangement still on for tomorrow?
25 A ¶ Wren looks at Larry.
26 A Larry nods once.
27 D WREN (into phone): It is.
28 A ¶ He hangs up.
29 A Veronica unfolds her gloved hands, and, for the first time, Larry meets Milo's eyes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01560.json
### SCENE s01560 | INT. SEASIDE RESTAURANT - EVENING
Detected names (may be incomplete or contain aliases): MARI, ABERNATHY-OSEI, BEN, LINDGREN-ADEBAYO, ROZ, TOMMASO BELLINI-OKORO, DJ, RADIO
1 A ¶ A small trattoria by the sea.
2 A Checked tablecloths.
3 A Candles in wine bottles.
4 A Sunset through salt-streaked windows.
5 A A radio murmurs from the kitchen.
6 A ¶ At a corner table sit MARISOL "MARI" ABERNATHY-OSEI, 30s, in a blue dress, and her fiancé, BENEDICT "BEN" LINDGREN-ADEBAYO, 30s, in a pressed shirt.
7 A Between them: a bread basket and a bottle of white.
8 A ¶ Across the room, her sister ROSALIND "ROZ" ABERNATHY-OSEI, 30s, in a leather jacket, sits alone with a coffee.
9 A She watches the couple the way one watches weather.
10 A ¶ A waiter, TOMMASO BELLINI-OKORO, 20s, hovers with a pad.
11 D TOMMASO: Ready to order?
12 D BEN: Mari?
13 D MARI: You first.
14 D BEN: The sea bass.
15 D MARI: The same.
16 D TOMMASO: Wonderful.
17 A ¶ He hurries off.
18 A Mari plays with the stem of her glass.
19 A Ben breaks a piece of bread and doesn't eat it.
20 D BEN: You're quiet.
21 D MARI: I'm tired.
22 D BEN: You said that at lunch.
23 D MARI: I was tired at lunch.
24 A ¶ From across the room, Roz lifts her coffee in a mock toast.
25 A Mari sees it.
26 A Looks away.
27 A Ben follows her gaze.
28 D BEN [CONT'D]: Is that your sister?
29 D MARI: Probably.
30 D BEN: You didn't say she'd be here.
31 D MARI: I didn't know.
32 D BEN: Shall I invite her?
33 D MARI: No.
34 D BEN: Mari.
35 D MARI: Don't.
36 A ¶ The radio in the kitchen crackles.
37 A A DJ's voice cuts through.
38 D RADIO [V.O.]: And that was the Delfonics, for the lovers out there tonight. Next up, a request from Roz in booth six, for Mari.
39 A ¶ Mari stiffens.
40 A Ben looks up.
41 A Roz does not move.
42 D RADIO [V.O., CONT'D]: "Mari, I'm sorry I never came to the wedding rehearsal. Please dance with me."
43 A ¶ A slow, old song begins.
44 A Mari closes her eyes.
45 D BEN: What is this?
46 D MARI: It's our song.
47 D BEN: We don't have a song.
48 D MARI: Roz and I do.
49 A ¶ Ben sets down the bread.
50 A Mari stands.
51 A Takes a step toward Roz's table.
52 A Stops.
53 A Looks at Ben.
54 D MARI [CONT'D] (to the room, quietly): I'm going to dance.
55 A ¶ The room goes still.
56 A Tommaso, mid-stride with a tray, pauses.
57 A A fork drops somewhere.
58 D BEN: Mari. Now?
59 D MARI: Yes.
60 D BEN: With her?
61 D MARI: With my sister.
62 A ¶ Ben stares at his plate.
63 A Rises, pushes in his chair.
64 A Steps aside with a small, brittle bow.
65 D BEN: Go on, then.
66 A ¶ Mari crosses to Roz.
67 A Holds out a hand.
68 A Roz takes it.
69 A They move onto the little cleared floor between tables, and the song swells, and the sea goes violet at the windows.
70 A ¶ Tommaso sets down the tray.
71 A Across the room, Ben pours himself a glass of the white, drinks it quickly, and pours another.
72 D TOMMASO (to Ben, gently): Sea bass, sir?
73 D BEN: Give it to the gulls.
74 A ¶ Tommaso nods.
75 A Retreats.
76 A The song reaches its bridge.
77 A Roz whispers something in Mari's ear.
78 A Mari laughs, and then, abruptly, she isn't laughing.
79 D MARI (to Roz): You always do this.
80 D ROZ: Do what?
81 D MARI: Arrive at the end.
82 D ROZ: Somebody has to.
83 A ¶ The music fades.
84 A The radio hisses.
85 A Mari lets go of Roz's hand.
86 D MARI: I'm marrying him.
87 D ROZ: I know.
88 D MARI: Will you come?
89 D ROZ: If you ask nicely.
90 A ¶ Mari returns to the table.
91 A Sits.
92 A Takes Ben's glass from him, empties it, hands it back.
93 D MARI: I'm hungry.
94 D BEN (a breath): The sea bass was for the gulls.
95 D MARI: Then we'll order again.
96 A ¶ Tommaso, hearing, glides over, pad ready.
97 D TOMMASO: Wonderful.
98 A ¶ Roz drains her coffee, stands, drops a few bills on the table, and walks out into the dusk.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01543.json
### SCENE s01543 | INT. STARSHIP BRIDGE - ALERT
Detected names (may be incomplete or contain aliases): CAPTAIN VESNA OKORO, HELMSMAN DAVOR PETROSYAN, ENGINEER LOLA MBEKI-HART, MEDIC TARIQ SANDOVAL, COMMS OFFICER YUKI ABERNATHY, NAVIGATOR BRIDGET FAIRLEY-ONUOHA
1 A ¶ Red light.
2 A Klaxons.
3 A Six crew at six stations.
4 A ¶ CAPTAIN VESNA OKORO, 50s, grips the command rail.
5 A HELMSMAN DAVOR PETROSYAN, 30s, hammers a console.
6 A ENGINEER LOLA MBEKI-HART, 40s, hangs half out of a panel.
7 A MEDIC TARIQ SANDOVAL, 30s, braces against a wall.
8 A COMMS OFFICER YUKI ABERNATHY, 20s, presses a headset to her ear.
9 A And NAVIGATOR BRIDGET FAIRLEY-ONUOHA, 50s, who stares at the star map.
10 D VESNA: Report!
11 D DAVOR: Thrusters dead!
12 D LOLA: Core's venting!
13 D TARIQ: We've got breach on deck four!
14 D YUKI: Captain, they're hailing!
15 D VESNA: Ignore it!
16 D BRIDGET: Captain, if I may--
17 D DAVOR: We're drifting!
18 D LOLA: Fifteen seconds to cascade!
19 D YUKI: They're asking for surrender!
20 D TARIQ: Is anyone on four?
21 D BRIDGET: Captain!
22 D VESNA (shouting over them all): Quiet!
23 A ¶ Silence.
24 A Only the klaxon.
25 A ¶ She turns to Bridget.
26 A Bridget points at the map.
27 D BRIDGET: There's a gas giant. Eleven minutes away. We can slingshot.
28 D VESNA: Davor?
29 D DAVOR: No thrust.
30 D LOLA: I can give you one burst.
31 D VESNA: Then give it.
32 A ¶ Lola slams a lever.
33 A The ship shudders.
34 A Stars wheel.
35 A ¶ The klaxon dies.
36 A Six faces turn to the main screen, where a vast banded planet swells.
37 D VESNA [CONT'D] (softly): Hold on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00631.json
### SCENE s00631 | INT. SHIPPING CONTAINER ON DRIFTING ICE FLOE - DAY
Detected names (may be incomplete or contain aliases): HALVOR NILSEN, DEE ARMSTRONG, PASHA VOLKOV
1 A ¶ Gray light through a rust hole.
2 A Three bedrolls, a camp stove, a radio with its back off.
3 A Stillness, finally.
4 A ¶ HALVOR NILSEN, 50s, sits on an overturned bucket.
5 A DEE ARMSTRONG, 30s, tends the stove.
6 A PASHA VOLKOV, 20s, lies on a bedroll, eyes closed, a dark stain on his sleeve.
7 D HALVOR (to the container): The wind's dropped.
8 D DEE: Finally.
9 D PASHA: Tell me it's warm out there.
10 D HALVOR: It's not warm. It's quiet.
11 D DEE: Quiet's the same as warm, right now.
12 D PASHA: Dee, did you boil the rest of the coffee?
13 D DEE: I boiled all of it. We're out.
14 D PASHA: Out of coffee.
15 D DEE: Out of coffee.
16 D HALVOR: Out of coffee, out of fuel in two days, out of floe in three.
17 D DEE: Halvor.
18 D HALVOR: I'm just saying the weather's good for talking.
19 D PASHA: Then talk.
20 D HALVOR: The floe split in the night. The crack's under the east wall. I heard it.
21 D DEE: You said the wind --
22 D HALVOR: The wind dropped. The ice didn't.
23 D PASHA (very quietly): How long?
24 D HALVOR: Hours. Maybe less.
25 D DEE (to no one): Of course it did.
26 D PASHA: Open the door, Halvor.
27 D HALVOR: Pasha --
28 D PASHA: I want to see it.
29 A ¶ Halvor stands.
30 A The container groans, a long slow note like a cello, and the three of them look at the floor.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00191.json
### SCENE s00191 | INT. DERELICT SPACE ELEVATOR CAR - ORBITAL TETHER - CONTINUOUS
Detected names (may be incomplete or contain aliases): SPARROW, ADEBAYO, TOBY, ZHANG, MAJOR DELPHINE VOSKUIJLEN, GIDEON FAIRCHILD
1 A ¶ Cramped.
2 A Frost on the windows.
3 A Earth hangs below like a blue coin.
4 A ¶ CAPTAIN IRIS "SPARROW" ADEBAYO, 40s, floats at the console.
5 A Her engineer, TOBIAS "TOBY" ZHANG, 30s, clings to a ladder.
6 A MAJOR DELPHINE VOSKUIJLEN, 50s, a medic, holds a sedated passenger's wrist.
7 A The passenger, GIDEON FAIRCHILD, 70s, drifts asleep, tethered to a seat.
8 D SPARROW: Toby, how's the cable?
9 D TOBY: Thinner than I'd like, Sparrow.
10 D DELPHINE: His pulse is slowing.
11 A ¶ Sparrow does not look up.
12 A She taps a screen.
13 A It blinks red.
14 D SPARROW: Delphine, can you wake him?
15 D DELPHINE: I can. I shouldn't.
16 D SPARROW: Do it anyway.
17 A ¶ Delphine unclips a syringe.
18 A Toby watches her hand, then looks away.
19 A The car shudders.
20 D TOBY: We're losing altitude.
21 D SPARROW: We were never gaining.
22 A ¶ Delphine injects Gideon.
23 A He stirs.
24 A His eyes open slowly.
25 D GIDEON: Iris? Is that you?
26 D SPARROW: It's me, Dad.
27 A ¶ Gideon smiles faintly and drifts back to sleep.
28 A Sparrow sets her jaw and turns to the console.
29 D SPARROW [CONT'D]: Toby. Cut the cable.
30 D TOBY: Sparrow.
31 D SPARROW: Cut it.
32 A ¶ Toby draws a cutter from his belt.
33 A He floats to the hatch and stops there, hand on the latch, looking back at Delphine.
34 D DELPHINE: It's the right call.
35 D TOBY: That's what I'm afraid of.
36 A ¶ He opens the hatch.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01272.json
### SCENE s01272 | EXT. SCHOOL BUS GRAVEYARD - DUSK
Detected names (may be incomplete or contain aliases): PAKS, NAIR, WYATT BOONE, LUCIA ORTEGA
1 A ¶ Forty yellow buses rust nose to tail in a field of dead sunflowers.
2 A Windows gone.
3 A Seats full of weeds.
4 A ¶ PRAKASH "PAKS" NAIR, 16, lanky, glasses, stands on a bus roof with a stolen six-pack.
5 A ¶ WYATT BOONE, 17, buzzcut, football jacket, climbs up after him.
6 A He grins too hard.
7 A ¶ Below, LUCIA ORTEGA, 16, braids, sketchbook under her arm, watches them both.
8 D WYATT: Thought you'd chicken out.
9 D PAKS: So did I.
10 A ¶ Wyatt snatches a can.
11 A Paks grabs it back.
12 A They shove.
13 A The roof BOOMS under their boots.
14 A ¶ Both freeze.
15 A ¶ A siren, far off.
16 A Coming closer.
17 D LUCIA: Cops!
18 A ¶ Wyatt and Paks scramble, tumble down the rear emergency door.
19 A Lucia is already running.
20 A Cans spill in the dust.
21 A ¶ They hit the sunflowers, all three, laughing like idiots.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01800.json
### SCENE s01800 | INT. VANTAGE BRANDS - CONFERENCE ROOM 4B - DAY
Detected names (may be incomplete or contain aliases): CLAUDETTE ABERNETHY-FOX, ROMAN DZIEDZIC, PHIL, ARCHULETA, CFO, FAMILY
1 A ¶ A glass box with a view of a parking structure.
2 A Whiteboard marker dries in its tray.
3 A A tray of untouched fruit.
4 A ¶ CLAUDETTE ABERNETHY-FOX, forties, VP of Culture, stands at the screen with a clicker.
5 A ROMAN DZIEDZIC, thirties, a senior analyst, sits with a printout.
6 A PHILOMENA "PHIL" ARCHULETA, fifties, the new CFO, sits at the head of the table in a coat she hasn't removed.
7 D CLAUDETTE: Welcome to the all-hands pre-read. I'll start with the good news.
8 D ROMAN: There's good news?
9 D CLAUDETTE: I'm going to need you to trust me.
10 D PHIL: I'm listening.
11 A ¶ Claudette clicks.
12 A A slide appears: a giant smiling sun and the words WE ARE A FAMILY.
13 D CLAUDETTE: We are a family.
14 D ROMAN: We laid off forty people on Monday.
15 D CLAUDETTE: Families have difficult conversations.
16 D ROMAN: Families don't usually fire each other by email.
17 D PHIL: Roman.
18 D ROMAN: I'm only saying.
19 D CLAUDETTE: We prefer the term "restructured."
20 D ROMAN: They prefer the term "fired."
21 A ¶ Claudette clicks.
22 A A second slide: a graph of declining revenue, titled "GROWTH OPPORTUNITIES."
23 D PHIL: Can I ask a basic question?
24 D CLAUDETTE: Please.
25 D PHIL: Where does the revenue go?
26 D CLAUDETTE: It goes into the future.
27 D ROMAN: It goes into the Culture budget.
28 D CLAUDETTE: Which is the future.
29 D PHIL: Claudette, your Culture budget is larger than engineering.
30 D CLAUDETTE: Culture is engineering.
31 D PHIL: Culture is a line item.
32 D CLAUDETTE: Phil, with respect--
33 D PHIL (over her): With respect, I read the line items.
34 A ¶ They stare at each other.
35 A Roman reaches for a strawberry, eats it, and eats another.
36 D CLAUDETTE: I'll circulate a deck.
37 D PHIL: Please do.
38 D ROMAN: Will there be a pre-read for the pre-read?
39 D CLAUDETTE: Yes, Roman. There will.
40 A ¶ She clicks to a third slide: a photograph of a golden retriever puppy with the words LET'S GO TOGETHER.
41 A Nobody speaks.
42 A The fruit tray, mostly full, sits in the center like a witness.
43 D PHIL: I'm going to need to see a puppy budget.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01619.json
### SCENE s01619 | INT. SEASIDE BOARDING HOUSE - ATTIC - NIGHT
Detected names (may be incomplete or contain aliases): ODELIA PRINGLE, HORACE BLACKWOOD-ADE, MISS CONSTANCE TAMBLYN, FERDINAND OKORO-STRAND, THOMAS
1 A ¶ Slanted beams.
2 A A cracked skylight.
3 A Moonlight on trunks, hatboxes, a headless dressmaker's dummy.
4 A The air smells of salt and mildew.
5 A ¶ Five guests have climbed the narrow stair with lanterns.
6 A ¶ MRS. ODELIA PRINGLE (60s, shawl, a ring of keys) leads.
7 A DR. HORACE BLACKWOOD-ADE (50s, black bag, bowler hat) follows.
8 A Then MISS CONSTANCE TAMBLYN (20s, nightgown under a coat), clutching a candle.
9 A Behind her, MR. FERDINAND OKORO-STRAND (40s, braces, a revolver he clearly does not know how to hold), and last, young THOMAS (12, nightshirt, wide-eyed, a tin whistle).
10 D ODELIA (to the group): Stay close. The floor is rotten in places.
11 D HORACE: Mrs. Pringle, what precisely are we looking for?
12 D ODELIA: The thing that has been tapping.
13 D CONSTANCE (whispering): It tapped again last night.
14 D FERDINAND (to himself): Nerves. Nothing but nerves.
15 D THOMAS: It's not nerves.
16 D ODELIA: Quiet, boy.
17 A ¶ A single tap from behind the dummy.
18 A Everyone freezes.
19 A Constance's candle trembles.
20 A Ferdinand raises the revolver, then lowers it, then raises it again.
21 A ¶ A second tap.
22 A A third.
23 A A scrape, as of fingernails on wood.
24 D HORACE (low): Who is there?
25 A ¶ The dummy topples.
26 A Dust billows.
27 A A dark shape lunges across the trunks.
28 A Constance screams.
29 A Ferdinand fires wildly, the shot punching a hole in the skylight.
30 A Horace dives behind a hatbox.
31 A Odelia swings her lantern.
32 A Thomas blows a shrill note on his whistle.
33 A ¶ The shape hisses, springs up through the broken glass, and disappears into the night.
34 A ¶ Silence.
35 A Glass tinkles.
36 A Moonlight pours through the new hole.
37 A The five of them stand panting among the trunks, one by one lowering their lanterns.
38 D THOMAS (softly): It was a gull.
39 D FERDINAND (shakily): A gull.
40 D HORACE: A very large gull.
41 A ¶ Odelia lifts the dummy upright with one hand and straightens its collar.
42 D ODELIA: Back to bed, all of you.
43 A ¶ She turns.
44 A One by one they file down the stairs.
45 A Thomas is last.
46 A He pauses at the top, tin whistle in hand, and looks back at the skylight.
47 A ¶ Something taps.
48 A Once.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02123.json
### SCENE s02123 | INT. MERIDIAN LOGISTICS - WELLNESS NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): GWEN, PRATT, TOBIAS LINDQVIST
1 A ¶ Six egg-shaped pods.
2 A Ambient whale music.
3 A A laminated sign reads "SYNERGY RECHARGE: 15 MIN MAX."
4 A ¶ GWENDOLYN "GWEN" PRATT, 40s, lanyard, tired eyes, sits on a pod with a laptop.
5 A TOBIAS LINDQVIST, 30s, quarter-zip, enters carrying a kombucha.
6 D TOBIAS: Gwen. Didn't know anyone used these.
7 D GWEN: I'm not napping. I'm hiding.
8 D TOBIAS: Same. Can I hide here too?
9 D GWEN: Pod four is warmer.
10 A ¶ He sits in pod four.
11 A Sips his kombucha.
12 D TOBIAS: Is the all-hands still at three?
13 D GWEN: It moved to four. Then back to three. Then it became a "pre-sync."
14 D TOBIAS: What do we pre-sync?
15 D GWEN: The post-sync.
16 D TOBIAS: Right.
17 A ¶ Beat.
18 A The whale music swells.
19 D TOBIAS [CONT'D]: Gwennie, did you read the memo about the memo?
20 D GWEN: I summarized it. Toby, it said please stop using the word "deliverable."
21 D TOBIAS: I'll circle back on that.
22 D GWEN: That's the word we're not supposed to say.
23 D TOBIAS: Which one?
24 D GWEN: All of them.
25 A ¶ He nods.
26 A Lies back in the pod.
27 A Closes his eyes.
28 D TOBIAS: Wake me at three.
29 D GWEN: It's three.
30 D TOBIAS: Wake me at four.
