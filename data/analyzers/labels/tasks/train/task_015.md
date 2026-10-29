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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05179_3.json
### SCENE s05179_3 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): WELLS, ROSA, CHUY, SKYE, DANNY, FLICKERS
1 A ¶ Wells climbs in.
2 A Eyes the grill.
3 A Sniffs.
4 D WELLS: Do you smell gas?
5 D ROSA: Only the fresh tortillas.
6 D WELLS: That's gas, ma'am.
7 D CHUY: Mija. Tell him.
8 D ROSA: Papá, please.
9 A ¶ ANGLE ON the hose behind the grill.
10 A A hairline crack.
11 A The hiss now audible.
12 D SKYE: Rosa. The hose.
13 D DANNY: It's been like that since Friday.
14 A ¶ Rosa freezes.
15 A Slowly turns on her son.
16 D ROSA: Since Friday?
17 D DANNY: I told Abuelo. He said it was okay.
18 D CHUY: I said it would hold.
19 D ROSA: Hold?
20 D WELLS: I'm going to need everyone out of the truck.
21 D ROSA: Nobody is leaving my truck.
22 D WELLS: Ma'am...
23 D ROSA: Thirty years. My husband built this grill. My father taught me this salsa. You don't come in here with a tablet and tell me to leave.
24 A ¶ INSERT - THE TANK GAUGE.
25 A Needle on red.
26 D SKYE (low): Rosa. Please.
27 D ROSA: Don't "please" me. You all knew.
28 A ¶ Silence.
29 A The hiss grows.
30 A Customers outside have gone quiet.
31 D DANNY: Mamá, I'm sorry.
32 A ¶ Rosa's shoulders drop.
33 A She looks at him.
34 A At Chuy.
35 A At the hose.
36 D WELLS: The ignition. The pilot's still lit.
37 A ¶ BACK TO SCENE:
38 A ¶ Rosa lunges for the shutoff valve.
39 A Wells grabs her arm.
40 D WELLS [CONT'D]: Don't touch the burner!
41 D SKYE: Everyone OUT!
42 A ¶ Chuy rises.
43 A Danny grabs his grandfather's arm.
44 A Rosa wrenches free and cranks the valve.
45 A ¶ The hiss stops.
46 A ¶ Everyone stands still.
47 A ¶ Then the pilot light FLICKERS, catches the last of the escaped gas, and the grill WHUMPS into a fireball that blows the order window across the lot.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05179_4.json
### SCENE s05179_4 | EXT. HARBOR LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): ROSA
1 A ¶ Smoke boils up.
2 A Customers scatter.
3 A Gulls explode into the sky.
4 A ¶ Danny drags Chuy clear.
5 A Skye hauls Wells over the tailgate.
6 A Rosa staggers out last, apron smoking, a charred tortilla still in her hand.
7 A ¶ She looks at her truck.
8 A At the black smear on the asphalt.
9 D ROSA (quiet): Well. That's the inspection.
10 A ¶ Skye begins to laugh.
11 A Danny too.
12 A Wells pats out a spark on his sleeve and finally, helplessly, joins them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05182.json
### SCENE s05182 | INT. BLACKWATER SOUND - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): BAND, SPARK
1 A ¶ A converted cannery.
2 A Brick, baffles, foam.
3 A Forty-eight channels on the console in the control room beyond the glass, every fader at unity.
4 A The red ON AIR light burns steadily over the door.
5 A ¶ Outside, a storm has been building since sunset.
6 A Wind leans on the roll-up door.
7 A Water beads along the skylight seams.
8 A ¶ THE BAND stands at their marks: drummer behind the kit, bassist with headphones half on, two guitarists sharing one tuner, a keyboardist leaning on a Rhodes.
9 A Take fourteen of "Low Tide."
10 A Slate called.
11 A Click track in their cans.
12 D THE BAND (counting in, together): One, two, three, four.
13 A ¶ They play.
14 A Tight.
15 A Almost right.
16 A The drummer drops a fill, the bassist drifts a hair behind the grid, and the track grinds to a halt on the bridge.
17 D THE BAND: Stop. Stop. Sorry.
18 A ¶ Talkback is dead.
19 A The glass shows only their reflection and the dark behind it.
20 A ¶ The click track keeps ticking in every headphone.
21 A Tick.
22 A Tick.
23 A Tick.
24 D THE BAND: Engineer? Can we get a playback?
25 A ¶ Nothing.
26 A The monitors hiss at -40 dB noise floor.
27 A The patch bay shows a row of green LEDs, then one by one they go amber.
28 A ¶ Rain begins to find a way through the roof.
29 A A drop lands on the snare.
30 A Another on the Rhodes lid.
31 D THE BAND: Somebody check the breaker.
32 A ¶ The guitarists unplug and cross to the panel by the loading door.
33 A The drummer lifts his sticks and freezes.
34 A The bassist freezes too.
35 A The click track stops.
36 A ¶ All five go still.
37 A ¶ Low in the walls, an electrical whine climbs.
38 A Pitch rising.
39 A Rising.
40 D THE BAND: That's the transformer. Pull the plugs. Pull everything.
41 A ¶ They scramble.
42 A The keyboardist yanks the Rhodes cable, the bassist rips his headphones off, the drummer dives for the floor tom, and two of them collide at the gear cart, tangle in a snake of XLR cables, and go down together, mics clattering around them.
43 D THE BAND: Get up! Get off the mats, it's the floor, it's wet!
44 A ¶ Water has pooled under the loading door and spreads across the hardwood in a thin black sheet toward the power strips.
45 A ¶ Silence.
46 A Drip.
47 A Drip.
48 A ¶ Then a hum.
49 A Deep.
50 A Everything in the room powers up at once, console, amps, monitors, and the speakers SCREAM a wall of feedback that shakes the foam from the ceiling.
51 D THE BAND: Out! Everybody out, now!
52 A ¶ They run.
53 A The group scatters for the emergency exit, one toward the stage door, two to the control room, one back for the master tape.
54 A The master tape wins.
55 A He grabs the reel under his arm.
56 A ¶ A SPARK jumps from the strip to the water.
57 A ¶ The overhead lights BURST one after another, glass raining down, and the whole live room goes white, then black, then white.
58 D THE BAND: Go! Go! Go!
59 A ¶ The fire door SLAMS open on the storm.
60 A They pour into the rain, drenched, shouting names into the wind, and behind them the cannery windows flash blue and die.
61 D THE BAND: Count heads!
62 A ¶ Five.
63 A Five.
64 A They count again to be sure.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05183.json
### SCENE s05183 | INT. GRAND MERIDIAN HOTEL - 9TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): KIM LARSEN, KIP LARSEN, DETECTIVE SORA NAKAMURA, ODOM, ^KIM
1 A ¶ KIM LARSEN, 30s, wet coat, backs along the wall.
2 A Her phone.
3 A Dead.
4 D KIM [V.O.]: Eight hours since the flood took the lobby. Nobody warns you the elevators are the first to go.
5 A ¶ Emergency lights.
6 A Amber.
7 A Silence.
8 A ¶ KIP LARSEN, 40s, her brother, limps from the stairwell, a fire axe in one hand.
9 A Behind him, DETECTIVE SORA NAKAMURA, 50s, drags a bleeding MRS. ODOM, 70s, by the sleeve.
10 A ¶ A door SLAMS somewhere below.
11 A Water.
12 A Rising.
13 A ¶ Kim's phone flickers on for one second.
14 A ¶ ON PHONE: where r u
15 A ¶ Then black again.
16 A Nothing.
17 D KIM: Kip, the stairs.
18 D KIP: Kim, the stairs.
19 D ^KIM: They're flooded!
20 D KIP: They're flooded!
21 D SORA: Then we go up. The roof.
22 D MRS. ODOM: My knees.
23 A ¶ A pipe BURSTS.
24 A The lights BUZZ out.
25 A ¶ Dark.
26 A Breath.
27 A Rain.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05184.json
### SCENE s05184 | INT. SUNSET BARN - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, GUS, BEA, BOING
1 A ¶ String lights sway over a dance floor littered with confetti and shoes.
2 A A half-eaten cake leans like a tower in Pisa.
3 A The DJ booth glows, empty, still thumping a bass line nobody is dancing to.
4 A ¶ On the cake table, a plastic bride-and-groom topper wobbles.
5 A Then, impossibly, climbs down.
6 A ¶ GUS, a wiry corgi in a tiny bow tie, trots in, dragging a garter in his teeth.
7 A ¶ BEA, 20s, the bride's sibling, in a rumpled suit, tie loose, hair wild, vaults a chair and skids to a stop in front of him.
8 A Bea is out of breath, and they are grinning like a person who has just won something.
9 D BEA: Gus! Drop the garter, buddy. That belongs to the bouquet relay.
10 A ¶ Gus drops it.
11 A Then snatches it back.
12 A BOING, his tail whips a candle holder, and a tower of cups topples with a CRASH.
13 D GUS: Sorry, Captain Bea! The relay's the only game I'm any good at!
14 D BEA: Nobody's saying you're not good. They're saying you cheat.
15 D GUS: I do not cheat. I take shortcuts.
16 A ¶ Bea laughs and crouches.
17 A They point to the finish line, a ribbon strung between two keg stands at the far end of the barn.
18 D BEA: Okay, Gus-Gus, ground rules. Garter in mouth, no teeth on the ribbon, and nobody bites the best man.
19 D GUS: That was ONE time!
20 A ¶ A starter pistol, actually a champagne cork, POPS from the balcony.
21 A The crowd, offscreen, ROARS.
22 A ¶ Bea sprints.
23 A Gus scrambles after them, paws skittering on the polished boards.
24 A Over a fallen chair.
25 A Under a table.
26 A WHOOSH past a sleeping uncle.
27 A The garter flutters like a flag.
28 D BEA: Left, Gus, left!
29 D GUS: I know where left is! I'm a professional!
30 A ¶ They hit the ribbon together.
31 A SNAP.
32 A Streamers rain down.
33 A Gus tumbles into Bea's arms, and they both go down laughing on a pile of discarded party hats.
34 D BEA: Photo finish. Tie game.
35 D GUS (panting): Rematch at the honeymoon?
36 D BEA: Don't push your luck, champ.
37 A ¶ Gus puts the garter on Bea's head like a crown.
38 A Bea lets him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05186.json
### SCENE s05186 | INT. HOLLOWAY FAMILY HOME - FUNERAL RECEPTION - DAY
Detected names (may be incomplete or contain aliases): JONI, JORY, AMES, PHONE
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- A casserole dish passes from hand to hand down the hallway.
3 A ¶ -- Black umbrellas drip in a brass stand.
4 A ¶ -- A framed photo of GRANDMA LUCILLE on the piano, sunlight on the glass.
5 A ¶ -- Cousins pressed together on the stairs, plates balanced on knees.
6 A ¶ Joni Holloway, 40s, in a grey dress, ladles punch with a steady smile, while across the room her brother Jory Holloway, 40s, loosens his tie by the fireplace and Ames Okoro, 20s, their cousin, who uses they/them, drifts between the aunts with a tray, collecting cups, watching Joni and Jory the way someone watches two dogs near a bone.
7 D JONI (to the room): There's more food in the kitchen. Please. Eat.
8 A ¶ The room murmurs thanks.
9 A Forks clink.
10 D JORY (muttering): Eat. Sure. Like it's a holiday.
11 D AMES: They said the will's being read after dessert.
12 A ¶ Joni stiffens.
13 A Jory doesn't.
14 A ¶ -- LATER: The light has shifted.
15 A Plates stacked.
16 A Laughter.
17 A Someone tells a story about Lucille's terrible driving, and for a moment the whole room breathes.
18 D JORY (to Joni, easy): Remember the time she backed into the church sign?
19 D JONI (smiling): She said it was in her way.
20 A ¶ They laugh.
21 A It's the first real laugh of the day.
22 A Ames lowers the tray, relieved.
23 A ¶ Then Ames's phone BUZZES.
24 A ¶ ON PHONE (TEXT): did joni tell jory about the house yet
25 A ¶ Ames goes still.
26 A Joni notices.
27 A Jory notices Joni notice.
28 D JORY: What house?
29 D JONI (to herself): Not here. Not now.
30 D AMES (to the room): I think I'll get more coffee.
31 D JORY: Sit down, Ames. What house, Joni?
32 A ¶ The laughter dies out, one conversation at a time.
33 A Everyone is watching now.
34 D JONI: Grandma sold the house in March. To me. For a dollar.
35 A ¶ Silence.
36 A The clock on the mantel ticks.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05187_0.json
### SCENE s05187_0 | INT. LUMENFLOW - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): WAITER, TEENAGERS, DOG, TAVI BROOKS, RHEA NAKAGAWA, OSEI
1 A ¶ Standing desks.
2 A Bean bags.
3 A A neon sign: MOVE FAST.
4 A A WAITER in a vest sets out catered sandwiches.
5 A Two TEENAGERS on a school tour peer at a whiteboard.
6 A A DOG sleeps under a desk.
7 A ¶ TAVI BROOKS, 30s, they/them, hoodie, stares at a laptop.
8 A Across the row, RHEA NAKAGAWA, 40s, CEO, reads a printed memo upside down, as if that's how it came.
9 A ¶ OSEI, 20s, engineer, carries three monitors and sets none of them down.
10 D RHEA: Tavi. Got a sec?
11 D TAVI: Not really.
12 A ¶ Rhea waits.
13 A Tavi's cursor blinks.
14 D TAVI [CONT'D]: Okay.
15 A ¶ They walk to the glass room.
16 A The waiter's tray clinks behind them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05187_1.json
### SCENE s05187_1 | INT. GLASS CONFERENCE ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): RHEA, TAVI, RECEPTIONIST, PHONE
1 A ¶ Rhea closes the door.
2 A Doesn't sit.
3 D RHEA: Series B didn't close.
4 D TAVI: I saw the Slack.
5 D RHEA: Payroll's Friday.
6 A ¶ Tavi's thumb rubs the edge of the table.
7 D TAVI: They told me they'd cover through spring.
8 D RHEA: Who did?
9 D TAVI: You did.
10 A ¶ Outside, Osei finally sets a monitor down.
11 A Picks it up again.
12 A ¶ The intercom CRACKLES.
13 D RECEPTIONIST [V.O.]: Rhea, there's a gentleman here from the board.
14 D RHEA (into the room): Tell him five minutes.
15 D RECEPTIONIST [V.O.]: He says he's already on his way up.
16 A ¶ Tavi's phone lights up on the table.
17 A ¶ ON PHONE (TEXT): osei: tell me u didn't sign it
18 A ¶ Tavi turns it face-down.
19 A Rhea sees.
20 D RHEA: Did you?
21 D TAVI: I put my name where it was asked for.
22 A ¶ Through the glass, the dog stands, stretches, trots toward the elevator.
23 A ¶ The elevator DINGS.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05188.json
### SCENE s05188 | INT. CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): PAT PELLETIER, PATSY PELLETIER, DEACON FLINT, CHOIR
1 A ¶ Gaslight hisses in brass sconces.
2 A Steam drifts off a copper kettle on a woodstove.
3 A Above, through the floorboards, the groan of an organ and a hundred muffled hymns.
4 A A winter wind rattles the high, narrow windows.
5 A ¶ A ring of mismatched chairs.
6 A In it sit PAT PELLETIER, a rosy, round man in suspenders, and PATSY PELLETIER, his sister, in a bonnet, knitting something that is mostly knot, and DEACON FLINT, thin as a candlestick, who holds a hymnal like a shield.
7 A ¶ Overhead, THE CHOIR launches into a hymn.
8 D THE CHOIR [O.S.] (muffled, soaring): Rock of Ages, cleft for me!
9 D PAT: Friends, we're going to begin.
10 D PATSY: Pat, we've begun. You began when you sat down.
11 D PAT: Then we're beginning again, Patsy.
12 D DEACON FLINT (to the room): Is it the custom to speak all at once, or one by one?
13 D PATSY: One by one, Deacon.
14 D PAT: Though some of us never stop.
15 D PATSY: I heard that.
16 D PAT: You were meant to.
17 A ¶ The kettle WHISTLES.
18 A Everyone turns.
19 D DEACON FLINT (muttering to himself): Lord, give me strength or give me a drink.
20 D PAT: Beg pardon, Deacon?
21 D DEACON FLINT: Nothing. Hymn. I was humming a hymn.
22 D PATSY: You were not humming.
23 D THE CHOIR [O.S.]: Let me hide myself in Thee!
24 D PAT (to the room, loud): Everyone, here's the rule. What's said under the floor stays under the floor.
25 D PATSY: And what's said above?
26 D PAT: Is the Lord's business, Patsy.
27 D DEACON FLINT: Hold on. Patsy, you told me last week you'd quit.
28 D PATSY: I did quit. Twice.
29 D PAT: She quit on Tuesday and again on Wednesday.
30 D PATSY: Because Tuesday didn't take!
31 D DEACON FLINT: That's three drinks in three days, then.
32 D PAT: Two. The third was medicinal.
33 D PATSY: Pat!
34 A ¶ The organ builds.
35 A The floorboards tremble.
36 A Dust sifts into the kettle steam.
37 D DEACON FLINT (rising): I will not sit in a room of liars!
38 D PAT: Sit down, Deacon!
39 D PATSY: Pat, stop shouting!
40 D DEACON FLINT: You're the ones who are shouting!
41 D PAT: We are discussing!
42 D THE CHOIR [O.S.]: Amen! AMEN!
43 A ¶ The chandelier above them SWINGS.
44 A A jar of pickles rolls off a shelf and SMASHES.
45 A In the silence that follows, all three stare at the pickle brine spreading across the floor.
46 D PATSY (quietly): Well. That's a sign.
47 D PAT: Of what?
48 D DEACON FLINT: That I'd like a pickle.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05189_0.json
### SCENE s05189_0 | EXT. TRAWLER "MARGARET ANN" - NORTH ATLANTIC - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN DAVID VOSS, LIN PARK
1 A ¶ Grey sea.
2 A Grey sky.
3 A A rust-streaked trawler, forty years old, wallows through a swell with nets hanging from her outriggers.
4 A ¶ Salt.
5 A Wind.
6 A Gulls.
7 A ¶ CAPTAIN DAVID VOSS, 60s, wind-cracked face, oilskins, stands in the wheelhouse door.
8 A His hands are scarred.
9 A His eyes are the color of the water.
10 A ¶ On the deck below, LIN PARK, 20s, deckhand, in orange gear, hauls a net hand over hand.
11 A Her gloves are torn.
12 A She is on her first season.
