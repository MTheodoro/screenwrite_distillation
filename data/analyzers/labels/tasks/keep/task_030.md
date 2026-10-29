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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01784.json
### SCENE s01784 | INT. APPELLATE COURTROOM - LOBBY - DAY
Detected names (may be incomplete or contain aliases): CASSIUS WELLINGTON-OBI, ADA LOVELACE-REYES, THEO SANDOVAL
1 A ¶ A marble anteroom, high-windowed, quiet as a chapel.
2 A A bench, a water cooler, a brass door that gives onto the courtroom proper.
3 A ¶ CASSIUS WELLINGTON-OBI stands at the window with his back to the room, a man of fifty with a brief clutched against his chest.
4 A ADA LOVELACE-REYES sits on the bench with her ankles crossed, composed in a blue suit.
5 A Between them, a younger associate, THEO SANDOVAL, shifts from foot to foot.
6 A ¶ She does not look up when he speaks.
7 A He doesn't turn when she answers.
8 D THEO: Ms. Lovelace-Reyes, the panel's been out forty minutes.
9 D ADA: Forty-one.
10 D CASSIUS: Forty-two.
11 D THEO: That's a good sign, right? Long means they're reading everything.
12 D ADA: Long means they're arguing.
13 D CASSIUS: Long means nothing.
14 D THEO: So it's a bad sign.
15 D ADA: It's not a sign.
16 A ¶ He wipes his palms on his trousers.
17 A She straightens a cuff.
18 A He turns from the window at last and takes a single step into the room.
19 D CASSIUS: Ada, when you're done being calm, I'd appreciate it if you'd tell me what it is we've forgotten.
20 D ADA: We've forgotten nothing.
21 D CASSIUS: Then why am I sweating?
22 D THEO: Because the AC's broken.
23 A ¶ The brass door swings open.
24 A A clerk looks out and calls them in.
25 A The three of them stand together.
26 A Nobody moves toward the door until Ada does.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01785.json
### SCENE s01785 | EXT. MONASTERY BELL TOWER - DAWN (1944)
Detected names (may be incomplete or contain aliases): SERGEANT THADDEUS KRUGER, CORPORAL NIKOLAI BOGDANOV, MONK, BROTHER ANSELMO
1 A ¶ A stone belfry open to the sky, half the roof gone.
2 A Below, the valley is smoke and orchard.
3 A A cracked bell hangs silent.
4 A ¶ SERGEANT THADDEUS KRUGER, thirties, lies prone on the floor with a rifle.
5 A CORPORAL NIKOLAI BOGDANOV, twenties, crouches by the stair with a radio.
6 A A MONK, BROTHER ANSELMO, seventies, sits against the wall with rosary beads running through his fingers.
7 D KRUGER: He's in the second window, third floor of the mill.
8 D BOGDANOV: Who is?
9 D KRUGER: The man who has been shooting at us since four.
10 D BROTHER ANSELMO: He is a boy. I saw him yesterday, bringing water to the cows.
11 D KRUGER: Then it's a boy with a rifle, Father.
12 D BROTHER ANSELMO: I am not your father. I am only an old man who rings the bell.
13 D BOGDANOV: Sir, command says hold until eight.
14 D KRUGER: Command is thirty miles from here and has never smelled this smoke.
15 D BOGDANOV: They've asked us to confirm positions.
16 D KRUGER: Tell them we're in a bell tower on a hill, and we're not going anywhere.
17 D BROTHER ANSELMO: Will you let me ring it?
18 D KRUGER: No.
19 D BROTHER ANSELMO: It would tell them we are here.
20 D KRUGER: They know we are here.
21 D BROTHER ANSELMO: It would tell them we are still alive.
22 A ¶ Kruger lowers the rifle and looks at him.
23 A He studies him for a long moment.
24 A In the valley, a rooster crows.
25 D KRUGER: Bogdanov.
26 D BOGDANOV: Sergeant?
27 D KRUGER: Cover the second window.
28 D BOGDANOV: Yes, sir.
29 D KRUGER: Father. One ring.
30 D BROTHER ANSELMO: One ring.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01786_0.json
### SCENE s01786_0 | EXT. FROZEN LAKE - ICE-FISHING SHACK - DAY
Detected names (may be incomplete or contain aliases): 
1 A ¶ A tin shack on a plain of white.
2 A Wind pushes snow across the lake.
3 A A thin plume of smoke rises from the stovepipe.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01786_1.json
### SCENE s01786_1 | INT. ICE-FISHING SHACK - CONTINUOUS
Detected names (may be incomplete or contain aliases): GRETA HOLLINGSWORTH, LEIF AASEN, DANTE FIORENTINO, STRANGER, TOBIAS
1 A ¶ Cramped.
2 A A bunk, a wood stove, two holes in the floor with lines dangling into black water.
3 A Four people live here this week.
4 A ¶ GRETA HOLLINGSWORTH, forties, sits by the stove, sorting matches.
5 A LEIF AASEN, twenties, hunches over a hole with a rod.
6 A DANTE FIORENTINO, fifties, lies on the bunk with a blanket up to his chin.
7 A They have not spoken in an hour.
8 D LEIF: Anything?
9 D GRETA: Not yet.
10 D DANTE: It'll bite when the barometer drops.
11 D LEIF: We don't have a barometer.
12 D DANTE: Then it'll bite when it feels like it.
13 A ¶ Greta tosses a match into the stove.
14 A It flares, spits, goes out.
15 D GRETA: Forty hours. We said we'd be home in twelve.
16 D LEIF: We said the truck would start.
17 D DANTE: The truck started.
18 D GRETA: It started and then it died, Dante.
19 D DANTE: It died in a way that was consistent with starting.
20 A ¶ Leif laughs despite himself.
21 A Greta almost does.
22 A The line in the hole twitches.
23 A Leif grabs the rod.
24 A Greta rises.
25 A Dante sits up.
26 D LEIF: I've got something.
27 D GRETA: Easy. Easy.
28 D DANTE: Don't horse it.
29 A ¶ Leif reels.
30 A The water breaks.
31 A A pike, long as his arm, thrashes up through the hole and flops onto the floor boards, where it lies still, mouth working.
32 A ¶ All three stare at it.
33 A The shack is silent.
34 D GRETA: Well.
35 A ¶ Then the shack door bangs open.
36 A A STRANGER fills the doorway, fifties, bundled head to boot in a snow-caked parka, ice in his beard, a snowmobile helmet under one arm.
37 D STRANGER: I smelled the smoke from two miles away. Anybody home?
38 D LEIF: Mister, you have no idea.
39 D DANTE: Close the door. You're letting out the warm.
40 D STRANGER: Sorry. Sorry.
41 A ¶ He shuts it.
42 A Greta stares at him.
43 A He stares at the pike.
44 D STRANGER [CONT'D]: That your supper?
45 D GRETA: It's our supper if you've got a sled.
46 D STRANGER: Got a sled. Got a tow rope. Got a thermos of coffee, too.
47 D DANTE: Coffee.
48 D LEIF: Coffee!
49 D GRETA (over them): Sit down, mister--
50 D TOBIAS: Wren. Tobias Wren.
51 D DANTE (over Greta): Wren, there's a sled?
52 D LEIF (over both): Is it big enough for four?
53 D TOBIAS: It's big enough for four and a fish.
54 A ¶ Greta sits him on the bunk and presses a tin mug into his hands.
55 A The pike gives one last flop.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01787.json
### SCENE s01787 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GRANDMA ROSELLA PIPER, HAROLD PIPER, JUNIPER, MABEL, TOBY
1 A ¶ A big kitchen, yellow-walled, with a scarred oak table and a coal range ticking.
2 A Window boxes of red geraniums.
3 A A rooster clock on the wall reads six-fifty.
4 A Pancake batter on every surface.
5 A ¶ GRANDMA ROSELLA PIPER, seventies, small and iron-backed, stands at the range flipping a pancake the size of a hubcap.
6 A HAROLD PIPER, her son, forties, sits at the table in a clean work shirt and reads the paper.
7 A His wife JUNIPER, forties, ties a ribbon around their daughter MABEL's braid.
8 A MABEL, seven, kicks her feet.
9 A In the corner, an old beagle named BISCUIT sleeps on a rag rug, and the youngest, TOBY, three, sits beneath the table with a wooden spoon.
10 A ¶ Rosella flips the pancake.
11 A It lands on the floor.
12 A Biscuit wakes, Toby lunges, the beagle and the toddler scramble for it together, and Mabel shrieks.
13 D MABEL: Toby's eating off the floor!
14 D JUNIPER: Toby, no!
15 D HAROLD (not looking up): Floor pancake's the best pancake.
16 D ROSELLA: Harold!
17 A ¶ Rosella scoops Toby up with one arm and the pancake with the other.
18 A Juniper snatches the spoon.
19 A Harold folds his paper and sighs with great contentment.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01788.json
### SCENE s01788 | INT. SYNERGY PARTNERS - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): BRADLEY ONYEKACHI, PRISCILLA FAIRWEATHER, DOC, ELLISWORTH, SPEAKERPHONE
1 A ¶ Standing desks, a ping-pong table nobody plays, a whiteboard that says "DISRUPT" in six colors.
2 A ¶ BRADLEY ONYEKACHI, thirties, in a quarter-zip, stands at the head of a huddle.
3 A PRISCILLA FAIRWEATHER, forties, clutches a laptop.
4 A DONOVAN "DOC" ELLISWORTH, fifties, sits on a beanbag with a coffee.
5 A A speakerphone on the table blinks red.
6 D BRADLEY: Okay, team. Quick pulse check on the pivot.
7 D PRISCILLA: Which pivot?
8 D DOC: The one from Tuesday or the one from lunch?
9 D BRADLEY: The one from the lunch of Tuesday.
10 D PRISCILLA: Oh. That pivot.
11 D SPEAKERPHONE [V.O.]: Hello? Are you there? This is Greg from Corporate. I can hear you but you can't hear me.
12 D DOC: We can hear you, Greg.
13 D BRADLEY (over Doc): Greg! Great to have you!
14 D PRISCILLA (over both): Greg, can you mute?
15 D SPEAKERPHONE [V.O.]: I'm not on mute. Am I on mute?
16 D BRADLEY: We can hear you.
17 D DOC: He can't hear us.
18 D SPEAKERPHONE [V.O.]: Did someone say something?
19 A ¶ Bradley sinks into a chair.
20 A Priscilla closes her laptop.
21 A Doc sips his coffee.
22 D DOC [CONT'D]: Well. Synergy.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01789.json
### SCENE s01789 | INT. UNDERWATER RESTAURANT - DINING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): POLLY, ASHWORTH-DIAZ, CALVIN ASHWORTH, ISADORA MCFEE, WAITER
1 A ¶ A glass-walled dining room sunk forty feet beneath a harbor.
2 A Green water presses at the panes, and small silver fish dart past candlelit tables.
3 A Every sound is muffled, like conversation in a cathedral.
4 A A single table is occupied.
5 A ¶ LEOPOLDINA "POLLY" ASHWORTH-DIAZ, sixty, in a velvet turban and enough pearls to flood the room, presides at the head of the table.
6 A Her nephew CALVIN ASHWORTH, thirties, damp-palmed and rumpled, sits at her left.
7 A At her right is her lawyer, ISADORA MCFEE, fifties, sharp as a letter opener, with a briefcase on her knees.
8 A ¶ A WAITER hovers.
9 A He is not a character; he is a rumor.
10 D POLLY: Calvin, darling, you've not touched your lobster.
11 D CALVIN: I'm not very hungry, Aunt Polly.
12 D POLLY: Nonsense. You've been hungry since the day you were born.
13 D ISADORA: Miss Ashworth-Diaz, shall we turn to the reason we're here?
14 D POLLY: Isadora, we are here for the lobster.
15 D ISADORA: We are here for the will.
16 D POLLY: We are here for both.
17 A ¶ Calvin looks at the water.
18 A A fish stares back at him, then wheels away.
19 D CALVIN: I've never liked being this far down.
20 D POLLY: That's the charm of it. Nobody can leave in a huff.
21 D ISADORA: You can leave in a rush, Calvin. There's a lift.
22 D CALVIN: I'll stay.
23 D POLLY: Good boy.
24 A ¶ The waiter tops off Polly's wine.
25 A She waves him off with two fingers and he vanishes behind a pillar.
26 D POLLY [CONT'D]: Now. Here is how this will go. I have written a will. It names one heir. I will tell you the name over dessert.
27 D CALVIN: Over dessert?
28 D POLLY: The soufflé is divine.
29 D ISADORA: This is irregular.
30 D POLLY: So is my taste in nephews.
31 A ¶ Calvin lets out a nervous laugh and stops when nobody joins him.
32 A He picks up his fork, studies the lobster, puts it down.
33 D CALVIN: Aunt Polly, if it's me, I want you to know I'd be grateful.
34 D POLLY: And if it isn't?
35 D CALVIN (a pause): I'd still be grateful.
36 D POLLY: That is the first honest thing you've said in ten years.
37 D ISADORA: Miss Ashworth-Diaz, I really must insist.
38 D POLLY: Insist all you like, dear. The soufflé takes twenty minutes.
39 A ¶ Isadora opens her briefcase, withdraws a thick envelope, and sets it on the white tablecloth.
40 A The candle gutters in the stillness.
41 D ISADORA: I have here the sealed document. I am obliged to read it in the presence of the heir.
42 D POLLY: Then you are obliged to wait.
43 D ISADORA: Polly.
44 D POLLY: Isadora.
45 A ¶ They hold each other's eyes.
46 A Calvin looks from one to the other, as a man might watch a tennis match from inside a fishbowl.
47 A Above them, the harbor lights ripple.
48 A ¶ A low groan comes from the hull.
49 A The glass seems to flex.
50 A A thin trickle of water runs down the west wall, and Polly's smile holds.
51 D CALVIN: Is that supposed to happen?
52 D POLLY: The trickle? Oh, yes. It's decorative.
53 D ISADORA: It's not decorative.
54 D POLLY: Well, it is now.
55 A ¶ The trickle widens.
56 A The candle flames lean.
57 A Calvin half rises from his chair.
58 D CALVIN: We should go.
59 D POLLY: Sit down, Calvin.
60 D CALVIN: Aunt Polly, the wall is leaking.
61 D POLLY: The wall is performing.
62 D ISADORA (standing): This is absurd. Calvin, we are going.
63 D POLLY: Isadora, sit.
64 A ¶ Isadora doesn't sit.
65 A A seam of glass cracks, a hair-thin line from floor to ceiling.
66 A The sound is small and very precise.
67 D CALVIN (in a whisper): Oh no.
68 D POLLY (calm): Oh dear. Well. That is a new development.
69 A ¶ The line widens.
70 A Water jets through it, flat and white.
71 A The waiter's tray crashes somewhere out of sight.
72 A Polly pushes back her chair, finally, and stands.
73 D POLLY [CONT'D]: Calvin. The envelope.
74 D CALVIN: What about it?
75 D POLLY: Take it. Open it. Now.
76 A ¶ He seizes it, tears the flap, and pulls out a single sheet.
77 A The water is at their ankles.
78 A He reads, and his mouth falls open.
79 D CALVIN: It says...
80 D POLLY: Read it aloud, darling.
81 D CALVIN: "To my nephew Calvin I leave nothing. To my lawyer, Isadora McFee, I leave everything, for she has been faithful."
82 A ¶ Isadora stares at him.
83 A Polly looks at Isadora with bright, fond eyes.
84 D POLLY: Well. Nobody ever tells you the plot twist will happen at forty feet.
85 D ISADORA: I didn't know.
86 D POLLY: Of course you didn't. That's what made it so lovely.
87 A ¶ The glass gives way.
88 A The sea rushes in, and the candles go out one by one, and the last thing we see is Polly lifting her wine to the dark and saying, to nobody in particular:
89 D POLLY [CONT'D]: Cheers.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01790.json
### SCENE s01790 | INT. GONDOLA CAR - MOUNTAIN LIFT - DUSK
Detected names (may be incomplete or contain aliases): IMOGEN HARTLEY-SOTO, FERN, ABARA, ALOYSIUS KELLERMAN
1 A ¶ A small glass cabin swinging high above a pine valley.
2 A Snow-dusted peaks turn pink.
3 A The cabin has stopped.
4 A ¶ IMOGEN HARTLEY-SOTO, thirties, grips the rail.
5 A Across from her, FERDINAND "FERN" ABARA, thirties, takes off his skis and wedges them against the seat.
6 A In the next cabin, twenty feet away, an old couple, MARGUERITE and ALOYSIUS KELLERMAN, seventies, peer across the gap and wave.
7 A ¶ The cabin sways.
8 A Imogen yelps, Fern grabs her hand, the Kellermans laugh and wave harder, and Imogen pulls free and grips the rail again.
9 D IMOGEN: Fern, this is the second time you've promised me a scenic view.
10 D FERN: It is a scenic view.
11 D IMOGEN: We're stuck.
12 D FERN: We're stuck with a scenic view.
13 A ¶ The speaker crackles and goes dead.
14 A Marguerite shouts something across the gap that neither of them can hear, and Aloysius mimes a heart with his gloved hands.
15 A Fern waves back, grinning.
16 A Imogen covers her face and starts to laugh, and leans her forehead against the cold glass.
17 D IMOGEN [CONT'D]: They think we're a couple.
18 D FERN: Aren't we?
19 A ¶ She lifts her head.
20 A He looks away at the peaks.
21 A The cabin sways, then lurches into motion and carries them down toward the lights.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01791.json
### SCENE s01791 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE BELLAMY, MARTA BELLAMY, LUCAS, HANA, PIPPA, DESMOND
1 A ¶ Fluorescent tubes, a row of humming dryers, a vending machine selling single-serve detergent.
2 A Rain on the window.
3 A The big clock reads 9:40.
4 A Orange plastic chairs bolted in a row.
5 A ¶ AUGUSTINE BELLAMY, sixties, tall, sits stiff in a chair with a duffel bag between his boots.
6 A Beside him MARTA BELLAMY, fifties, folds the same towel for the third time.
7 A Their son LUCAS, twenty, slouches against a washer with his earbuds in.
8 A Their daughters, HANA, fourteen, and PIPPA, nine, share a dryer's warm glass front, sitting cross-legged on the floor.
9 A And in the doorway stands DESMOND, Augustine's brother, forty, rain-soaked, a suitcase in each hand.
10 A ¶ Nobody speaks.
11 A Marta puts down the towel.
12 A Augustine looks at the duffel.
13 A Lucas pulls out one earbud.
14 A Hana and Pippa stop whispering.
15 A The dryers keep turning.
16 D DESMOND: I knocked at the house.
17 D AUGUSTINE: We moved.
18 D DESMOND: I see that.
19 A ¶ Desmond sets down one suitcase.
20 A Then the other.
21 A Water drips from his sleeves.
22 D PIPPA: Is that Uncle Dez?
23 D HANA: Shh.
24 A ¶ Marta stands.
25 A Augustine stands.
26 A Lucas pushes off the washer.
27 A They form a half circle around the door, and no one reaches for anyone.
28 A Then Marta crosses to the vending machine, feeds it quarters, and returns with a tiny box of detergent.
29 A ¶ She hands it to Desmond.
30 A He takes it, turns it over, and nods slowly.
31 A Augustine clears his throat and moves his duffel off the seat beside him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01792.json
### SCENE s01792 | INT. PROVINCIAL TAXIDERMY CLUB - MEETING HALL - EVENING
Detected names (may be incomplete or contain aliases): HORTENSE ABERNATHY-LIU, CHESTER PUDDIFOOT, BERNIE, OKOYE
1 A ¶ A long, low room paneled in dark wood and ringed with the glass eyes of badgers.
2 A A banner says TWENTY-NINTH ANNUAL STUFFED SHIRT AWARDS.
3 A A folding table holds a punch bowl and a single plate of deviled eggs.
4 A ¶ HORTENSE ABERNATHY-LIU, sixty, club president, in tweed and a name badge, taps a spoon against a glass.
5 A She is ignored.
6 A CHESTER PUDDIFOOT, seventy, treasurer, mutters into a ledger at the end of the table.
7 A And BERNADETTE "BERNIE" OKOYE, forties, the newest member, stands at the deviled eggs with a plastic cup, trying to look as if she has belonged for decades.
8 D HORTENSE: Order. Order, please.
9 D CHESTER: There's nobody here to order, Hortense.
10 D HORTENSE: There are three of us, Chester.
11 D CHESTER: There's two and a half. Bernadette is a guest.
12 D BERNIE: I paid my dues.
13 D CHESTER: You paid half your dues.
14 D BERNIE: I paid the half I could afford.
15 D HORTENSE: That's a fair point.
16 D CHESTER: It's a half point.
17 A ¶ Hortense taps the glass again, loudly, and a stuffed owl on the wall falls off its perch and thumps to the carpet.
18 A All three look at it.
19 A Nobody moves.
20 D BERNIE: Should somebody...?
21 D CHESTER: It's done that before.
22 D HORTENSE: It always lands facing the wall.
23 A ¶ The owl lies face-down.
24 A Bernie takes a deviled egg, studies it, and sets it down again as if it might be evidence.
25 A Chester turns a page of his ledger with enormous care.
26 A Hortense straightens her badge.
27 D HORTENSE [CONT'D]: First item. The Stuffed Shirt Award for Excellence in Taxidermy.
28 D CHESTER: Who's nominated?
29 D HORTENSE: Last year's winner was a trout.
30 D BERNIE: Was it a good trout?
31 D CHESTER: It was an adequate trout.
32 D HORTENSE: It was beautiful, Chester.
33 D CHESTER: It had one fin.
34 D HORTENSE: It had one fin when it came to us. We did what we could.
35 D BERNIE: Maybe the fin was the point.
36 A ¶ They both look at her.
37 A She grips her cup, suddenly aware of herself.
38 D BERNIE [CONT'D]: Like, art. The fin that isn't there.
39 D CHESTER: She has a point.
40 D HORTENSE: She has half a point.
41 D BERNIE: Now you're doing it.
42 D CHESTER: We're a very precise club.
43 A ¶ Hortense crosses to the owl, picks it up, and carries it with great tenderness to the table.
44 A She sets it between the punch bowl and the eggs.
45 D HORTENSE: This year's winner. By acclamation.
46 D CHESTER: Of whom?
47 D HORTENSE: Of the owl.
48 D CHESTER: It fell off its perch.
49 D HORTENSE: It fell with dignity.
50 D BERNIE: I second it.
51 D CHESTER: You can't second it. You're a guest.
52 D BERNIE: I'm half a member.
53 D CHESTER (a beat): Seconded, then.
54 A ¶ Hortense produces a small gold ribbon from her handbag and pins it to the owl's chest.
55 A She steps back.
56 A They stand in a row, Hortense, Chester, and Bernie, looking at the owl, and it looks at the wall.
57 D HORTENSE: A moment of silence.
58 A ¶ Nobody speaks.
59 A The old radiator knocks twice.
60 A Bernie takes the deviled egg after all and eats it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01793.json
### SCENE s01793 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT VIKTORIA NASSAR, JUDE OKAFOR-BRANDT, SILHOUETTE, MIKHAIL TOROSYAN
1 A ¶ Concrete.
2 A Sodium lights.
3 A A drip, somewhere.
4 A A lone black sedan with its engine running.
5 A ¶ AGENT VIKTORIA NASSAR, thirties, crouches behind a pillar with a pistol.
6 A Ten yards away, her partner JUDE OKAFOR-BRANDT, forties, flattens against a van with a briefcase handcuffed to his wrist.
7 A They exchange a look across the gap.
8 D JUDE (whisper): Two minutes.
9 D VIKTORIA: They're early.
10 A ¶ Footsteps.
11 A Heels on concrete.
12 A Viktoria slides back a step and Jude drops low, the briefcase scraping against the van's fender.
13 A A silhouette strides into the light from the stairwell, tall, bareheaded, arms loose.
14 A ¶ The silhouette stops at the sedan and taps on the window.
15 A The window rolls down.
16 D SILHOUETTE: Do you have it?
17 A ¶ A gloved hand passes out a thick envelope.
18 A Viktoria's eyes narrow.
19 A Jude lifts the briefcase an inch and then lowers it.
20 D VIKTORIA (whisper): That's not our guy.
21 D JUDE: Whose guy is it?
22 A ¶ The envelope disappears under the silhouette's coat.
23 A A new figure peels from the shadows behind them, a big man in a hood, MIKHAIL TOROSYAN, fifties, his pistol steady on Viktoria's pillar.
24 D MIKHAIL: Out, please. Hands where I can see them.
25 A ¶ Viktoria rises with her gun down.
26 A Jude steps out from the van with the briefcase held high, wrist chained, as the silhouette turns at last and the light reveals the face of the sedan's driver, a woman with a scar through one eyebrow, who gives them a polite, regretful smile.
27 A ¶ Then the sedan's engine roars, the headlights snap on, Viktoria dives left, Jude dives right, Mikhail fires, the first shot sparking off the pillar, and the sedan lurches forward and clips the van, spinning it into a column with a thunderous crunch.
28 A Glass rains down.
29 A Alarms scream through the garage.
30 A In the confusion, Jude drags himself behind a stack of tires, Viktoria rolls to her feet and sprints for the stairwell, and Mikhail, bleeding from the scalp, fires at both of them without hitting either.
31 A ¶ The sedan screeches up the ramp.
32 A Viktoria hits the stairwell door with her shoulder, barges through, and gone.
33 A ¶ Jude, alone and cuffed to his case, looks up at the swinging sodium lights.
34 D JUDE: Well. That went well.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01820.json
### SCENE s01820 | INT. ROOFTOP PIGEON LOFT - DAY
Detected names (may be incomplete or contain aliases): TEODORO ABARCA, MILAGROS
1 A ¶ A plywood shed bolted to a tar roof, six floors above a bus depot.
2 A Wire cages line the walls.
3 A Feathers drift in the light from a cracked skylight.
4 A ¶ TEODORO ABARCA, 70s, thick forearms, a flat cap gone gray at the brim, kneels on an overturned bucket.
5 A He holds a speckled pigeon against his chest, checks its leg band, sets it in a crate, picks up the next bird, checks that band, and sets it in the same crate.
6 A A clipboard hangs from a nail beside him.
7 A He does not look at it.
8 A ¶ The door bangs open.
9 A ¶ His granddaughter MILAGROS, 10, braids, a school backpack bigger than her torso, stands in the doorway breathing hard from the stairs.
10 D MILAGROS: You said Thursday.
11 D TEODORO: It is Thursday.
12 D MILAGROS: You said after school Thursday.
13 D TEODORO: School is over.
14 D MILAGROS: Not for me. I ran from the bus.
15 A ¶ She drops the backpack, crosses to the crate, and puts both hands on the lid.
16 A Teodoro lifts another bird and she snatches the bird from his hands, tucks it under her arm, and backs away toward the cages while he stays on the bucket with his empty fingers still curled.
17 D TEODORO: Give him here.
18 D MILAGROS: His name is Pavarotti.
19 D TEODORO: His name is four-one-seven. The man is coming at five.
20 D MILAGROS: Then he can come and I'll be sitting on the crate.
21 D TEODORO: Milagros.
22 D MILAGROS: Mamá said you were going to ask me.
23 D TEODORO: I am asking you to put the bird in the box.
24 D MILAGROS: That's not asking.
25 A ¶ Teodoro stands, knees cracking.
26 A He takes off the flat cap, wipes his forehead with the back of his wrist, puts the cap on again.
27 A Milagros steps up onto the bucket he left so she is nearly his height, the bird still pinned under her arm, and stares at him while the other pigeons shuffle and coo behind the wire.
28 D TEODORO: Your grandmother kept forty birds up here.
29 D MILAGROS: I know.
30 D TEODORO: Forty. I have eleven.
31 D MILAGROS: Twelve. Pavarotti is the twelfth.
32 D TEODORO: Eleven that fly. Pavarotti has a wing that does not close.
33 D MILAGROS: Because nobody lets him practice.
34 D TEODORO (quietly): He practiced for two years.
35 D MILAGROS: Then the man can take the other eleven.
36 D TEODORO: The man wants twelve. It is a lot, twelve. He is paying for twelve.
37 A ¶ She steps down.
38 A She walks the length of the loft with the bird, past the water trays and the sack of feed with its mouth rolled shut, and stops at the skylight.
39 A She holds the bird up into the light.
40 A It opens one wing and the other hangs crooked, as Teodoro said.
41 A She lowers it.
42 A Teodoro has followed her down the aisle and stands a pace behind with one hand on a cage frame.
43 D MILAGROS: If you sell them you'll have nothing to do on the roof.
44 D TEODORO: I will come up and look at the sky.
45 D MILAGROS: You'll hate it.
46 D TEODORO: Probably.
47 D MILAGROS: Then why?
48 D TEODORO: The landlord says birds on the roof are a fee. The fee is more than the pension.
49 D MILAGROS: You never said that.
50 D TEODORO: I am saying it.
51 D MILAGROS: How much more?
52 D TEODORO: Enough.
53 D MILAGROS: How much, Abuelo?
54 A ¶ Teodoro opens his mouth, closes it, then takes the clipboard off its nail and holds it out.
55 A She reads it with her lips moving, bird tucked under one arm, and her free hand comes up and wipes her nose with her sleeve.
56 D MILAGROS [CONT'D]: That's not that much.
57 D TEODORO: It is every month.
58 D MILAGROS: I have forty dollars.
59 D TEODORO: Keep your forty dollars.
60 D MILAGROS: And Mamá has some.
61 D TEODORO: No.
62 D MILAGROS: And Tío Rafa.
63 D TEODORO: No.
64 A ¶ She hangs the clipboard back on its nail and turns to the crate.
65 A She lifts the lid, looks at the eleven birds inside shifting against one another, lowers the lid, and sits on it, bird in her lap, backpack kicked against her ankle.
66 A Teodoro lets out a breath through his nose and sits on the bucket across from her, knees almost touching hers.
67 D MILAGROS [CONT'D]: I'm not moving.
68 D TEODORO: I see that.
69 D MILAGROS: You can tell the man I got sick.
70 D TEODORO: He will wait.
71 D MILAGROS: He can wait till Christmas.
72 D TEODORO (almost smiling): You are your grandmother.
73 D MILAGROS: Good.
74 A ¶ Below them the bus depot's air brakes hiss, and every pigeon in the loft turns its head toward the sound at once.
75 A Teodoro unrolls the feed sack, scoops a handful, and holds it out flat.
76 A Milagros opens her hand with the bird in it and Pavarotti, left alone in her palm, pecks at the grain on her grandfather's hand.
77 D TEODORO [CONT'D]: Twelve.
78 D MILAGROS: Twelve.
79 D TEODORO: At five o'clock we will tell him eleven.
80 D MILAGROS: We'll tell him ten and a half.
81 D TEODORO: There is no half.
82 D MILAGROS: There is if he doesn't know which one.
83 A ¶ Teodoro looks at her a long moment, then at the clock on the wall that stopped years ago, then at the stairwell door still standing open.
84 D TEODORO: Close the door. You will let them out.
85 A ¶ She closes it with her heel.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01821.json
### SCENE s01821 | INT. DISUSED CURLING RINK - NIGHT
Detected names (may be incomplete or contain aliases): COACH HALVORSEN, DEE, OKORO, NADIA PETROVIC, REYES, WINNIE CHO, LUCAS BRANDT, BIG TOMÁS
1 A ¶ Half the lights are dead.
2 A A sheet of ice gone gray, scarred by years of rental hockey.
3 A Folding chairs along the boards.
4 A A cooler.
5 A A speaker on a bucket playing nothing.
6 A ¶ Six people wait for a seventh who is late.
7 A ¶ COACH HALVORSEN, 50s, whistle on a shoelace, sits on the penalty box bench and pares an apple with a pocketknife.
8 A DESHAWN "DEE" OKORO, 30s, goalie pads already strapped, stares at his own skates.
9 A NADIA PETROVIC, late 20s, captain's C stitched crooked on her jersey, tapes a stick that is already taped.
10 A BIG TOMÁS REYES, 40s, enormous, eats sunflower seeds one at a time.
11 A WINNIE CHO, 19, new, sits straighter than the others.
12 A And LUCAS BRANDT, 30s, sponsor's nephew, wears a pressed team jacket and nothing else that says he plays.
13 A ¶ Nobody speaks.
14 A Tomás spits a shell into a cup.
15 D COACH HALVORSEN: Ice time ends at ten.
16 D NADIA: It's nine-forty.
17 D COACH HALVORSEN: So.
18 A ¶ Nadia stands, skates onto the ice, and does one lap alone.
19 A Winnie watches her.
20 A Lucas watches Winnie.
21 D LUCAS: Is she always like this?
22 A ¶ Tomás turns his head slowly.
23 D BIG TOMÁS: Like what.
24 D LUCAS: Intense.
25 A ¶ Tomás goes back to his seeds.
26 D DEE (not looking up): You're in Winnie's spot.
27 D LUCAS: It's a bench.
28 D DEE: She sits there.
29 A ¶ Lucas does not move.
30 A Winnie does not ask him to.
31 A She takes her helmet off the floor and puts it on, chin strap clicked slowly.
32 D COACH HALVORSEN: Dee. You're starting.
33 D DEE: I'm starting every game.
34 D COACH HALVORSEN: I know.
35 A ¶ He folds the knife.
36 A Eats the apple core and all.
37 A ¶ Nadia finishes her lap and stops at the boards in front of Lucas, close enough that her breath fogs his jacket.
38 D NADIA: Who gave you a roster spot?
39 D LUCAS: My uncle owns the sponsor.
40 D NADIA: Right. And who gave him a tax break?
41 D LUCAS: I didn't come here to fight.
42 D NADIA: You didn't come here to play either.
43 D WINNIE: Leave it.
44 D NADIA: He took your minutes.
45 D WINNIE: I said leave it.
46 A ¶ Silence.
47 A The speaker crackles and cuts out again.
48 A ¶ Tomás stands.
49 A He is very tall standing.
50 A He picks up Lucas's stick from the rack, studies it, and hands it back blade first.
51 D BIG TOMÁS: Tape's wrong.
52 D LUCAS: I taped it this morning.
53 D BIG TOMÁS: That's what I said.
54 A ¶ Lucas takes the stick.
55 A His hand shakes a little on the shaft and he hides it by gripping tighter.
56 A ¶ Coach Halvorsen blows his whistle once.
57 A Everyone stops.
58 D COACH HALVORSEN: Lucas. Line one.
59 D NADIA: Coach.
60 D COACH HALVORSEN: Line one, with Winnie and Tomás.
61 D NADIA: That's my line.
62 D COACH HALVORSEN: Then you'll be on the bench.
63 A ¶ Nadia looks at him.
64 A At Lucas.
65 A At Winnie.
66 A She takes the C off her chest in one hard tear and drops it on the ice, where it sits, a small crooked patch.
67 A ¶ Nobody moves to pick it up.
68 D DEE (low): Nadia.
69 D NADIA: Don't.
70 A ¶ She skates off to the far end.
71 A Slams the boards with her stick.
72 A The sound goes up into the dead lights and comes back.
73 A ¶ Winnie steps onto the ice.
74 A Lucas follows, wobbles, catches himself on her sleeve.
75 A She lets him hold it for a second, then removes his hand.
76 D WINNIE: Skate wide. Don't touch anyone.
77 D LUCAS: Why not?
78 D WINNIE: Because she's waiting for you to.
79 A ¶ At the far end Nadia has stopped.
80 A She turns.
81 A Her stick comes up.
82 D TOMÁS (under his breath): Here we go.
83 A ¶ Dee pulls his mask down.
84 A The puck drops by itself, dropped from Coach's fist onto the ice with a click, and then there is only the sound of blades.
85 A ¶ Nadia is already moving.
86 A Lucas tries to turn and cannot.
87 A She hits him hip-first into the boards and the whole rink shakes.
88 A He goes down.
89 A She stands over him, breathing, her stick lifted to the height of her shoulder.
90 A ¶ Tomás is on her in two strides, wrapping her arms.
91 A Winnie is between them.
92 A Dee has left the net and is standing at the blue line, mask pushed up, pads dripping frost.
93 D NADIA (through teeth): Let go of me.
94 D BIG TOMÁS: When you drop it.
95 A ¶ She doesn't.
96 A He doesn't.
97 A The stick shakes between them.
98 D COACH HALVORSEN (from the bench, calm): Ten o'clock.
99 A ¶ The lights above the far end click off, one bank after another, until the only light left is over the six of them, and then that one goes too.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01822.json
### SCENE s01822 | INT. SALT MINE ELEVATOR CAGE - NIGHT
Detected names (may be incomplete or contain aliases): CASIMIR DRAGOMIR, INSPECTOR LEILA FARHAT, DOMINIK VESEL
1 A ¶ A steel cage the size of a confessional hangs in a shaft, two hundred meters of dark below its floor.
2 A The walls sweat brine.
3 A A single caged bulb swings, though the cage itself is still.
4 A ¶ CASIMIR DRAGOMIR, 40s, mining engineer, hard hat cocked over one eye, grips the control lever with a white fist.
5 A Across from him, wedged against the mesh, stands INSPECTOR LEILA FARHAT, 30s, in a borrowed orange jumpsuit two sizes too large, a laminated badge swinging at her sternum.
6 A She keeps her eyes on the ceiling.
7 A ¶ The cage shudders.
8 A A shower of salt grit rains down on both of them.
9 D LEILA: You said it was a routine descent.
10 D CASIMIR: It was routine until it stopped.
11 D LEILA: Then start it.
12 D CASIMIR: I have pulled it eleven times.
13 D LEILA: Pull it twelve.
14 A ¶ He pulls.
15 A The lever clacks.
16 A Nothing.
17 D CASIMIR: There is a stone in the guide rail, or the cable has slipped a tooth, or the dispatcher has gone to his supper. I do not know which. I know only that I am forty-six years old and the sign at the top says six persons maximum and we are two and still we are not moving.
18 D LEILA: Do you want to hear what I wrote in my report on this shaft?
19 D CASIMIR: No.
20 D LEILA: That the guide rails were due for replacement in March.
21 D CASIMIR: It is October.
22 D LEILA: Yes.
23 D CASIMIR: Then you are a woman who knew.
24 D LEILA: I am a woman who filed.
25 A ¶ A sound rolls up out of the dark below, a long metallic yawn, like a ship settling.
26 A Both of them look down through the grated floor.
27 A The bulb swings.
28 A Neither speaks until it stops.
29 D CASIMIR (whispering): That is not the rail.
30 D LEILA: Then what?
31 D CASIMIR: Somebody is in the shaft.
32 A ¶ A beam of white light cuts up through the grating from below.
33 A It sweeps their boots, then their faces, then settles on Casimir's chest.
34 A He raises a hand against it.
35 A ¶ From the dark, a third person climbs into view along the guide rails, a dripping figure hand over hand: DOMINIK VESEL, 60s, a night-shift rigger in a rusted harness, a headlamp strapped to his forehead, a coil of rope slung across his shoulder.
36 A He grips the cage floor and hangs there, grinning through salt-white stubble.
37 D DOMINIK: Forty minutes I have been under you, shouting.
38 D CASIMIR: Dominik.
39 D DOMINIK: You didn't hear.
40 D CASIMIR: I did not.
41 D DOMINIK: Of course not. You never listen when the lever is in your hand.
42 A ¶ He hauls one leg onto the floor grate.
43 A Leila steps back to give him room, though there is none.
44 D LEILA: Who is this?
45 D CASIMIR: My rigger.
46 D DOMINIK (to Leila): Madam, with respect, if you knew what I know about this cable you would not be standing so calmly.
47 D LEILA: I am not calm.
48 D DOMINIK: Then you are the first sensible one today.
49 A ¶ He swings the rope off his shoulder and clips it to a ring in the cage wall, then to his harness, then, without asking, to Leila's belt.
50 A She looks down at the carabiner clicking shut against her hip.
51 D LEILA: What are you doing?
52 D DOMINIK: Insurance.
53 D CASIMIR: Dominik. Tell us.
54 A ¶ Dominik wipes his face.
55 A His grin goes.
56 D DOMINIK: The cable is fraying at the third splice. Not the first, the third. It will hold a minute, maybe two. Not more.
57 D CASIMIR: You are certain?
58 D DOMINIK: I held it in my hand.
59 A ¶ The cage jerks.
60 A A hard small drop, an inch, then it catches.
61 A All three go rigid.
62 D LEILA: Move the lever.
63 D CASIMIR: If I move it the splice may part.
64 D LEILA: And if you don't?
65 D CASIMIR: Then the splice may part anyway.
66 A ¶ Dominik laughs, one short bark that echoes in the shaft.
67 A He claps Casimir on the shoulder.
68 D DOMINIK: There. A man who understands the odds.
69 A ¶ Casimir takes a long breath.
70 A He sets his hand on the lever, and with the other hand he reaches out and grips Leila's wrist.
71 D CASIMIR: Hold the mesh. Both hands.
72 A ¶ She does.
73 A He pulls the lever down.
74 A The cage lurches, climbs a meter, a second meter, screaming against the rail, then stops again so hard that her hard hat clatters off and falls away into the dark.
75 A They all listen to it fall.
76 A It does not hit anything for a very long time.
77 D DOMINIK (softly): That was a good hat.
78 A ¶ Above them, far up the shaft, a pinprick of daylight-colored lamp appears and begins to grow.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01823.json
### SCENE s01823 | INT. ORBITAL FERRY AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): TECHNICIAN YUSUF BELLAMY, CONTROL, COMMANDER ISOLDE RAINES
1 A ¶ A cramped airlock.
2 A Red warning strip lights pulse on the walls.
3 A ¶ TECHNICIAN YUSUF BELLAMY, 30s, pressure suit, helmet off, bangs on the inner hatch with a gloved fist.
4 D YUSUF: Control, I've got seal failure on lock two. Repeat, seal failure.
5 D CONTROL [V.O.] (over radio): Copy lock two. Do not cycle the outer door.
6 D YUSUF: I'm not cycling anything. Something's cycling it for me.
7 A ¶ The outer door groans a hand's width open.
8 A Air shrieks out.
9 A Yusuf clips his tether to a rail and grabs the manual lever with both hands.
10 A ¶ Behind him, the inner hatch pops.
11 A COMMANDER ISOLDE RAINES, 50s, bare-headed and furious, shoulders in and slaps a patch over the leak in one move.
12 A The shriek stops.
13 A The outer door shudders closed.
14 A ¶ Silence.
15 A Both breathe.
16 D ISOLDE: Stop shouting at the radio.
17 D YUSUF: It was loud.
18 D CONTROL [V.O.]: Lock two, status?
19 D ISOLDE (into her collar): Sealed. Tell maintenance their gasket is a joke.
20 A ¶ She hauls Yusuf upright by the harness.
21 A He laughs, shaky.
22 A She does not.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01824.json
### SCENE s01824 | INT. HOTEL LAUNDRY ROOM - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR WALTER PRYCE, ADELAIDE VOSS, FINN, DOYLE
1 A ¶ Steam, sheets, rolling carts.
2 A A brass bell on the counter.
3 A ¶ INSPECTOR WALTER PRYCE, 50s, rumpled trench coat, hat in hand, leans on the counter.
4 A Behind it, MRS. ADELAIDE VOSS, 60s, laundress, folds pillowcases in perfect squares without looking down.
5 D PRYCE: Room two-fourteen sent down a bundle Tuesday.
6 D MRS. VOSS: Many rooms send bundles.
7 D PRYCE: This one had a monogram. "H.L."
8 D MRS. VOSS: There are two Hs in the hotel. One is a duchess.
9 D PRYCE: And the other?
10 D MRS. VOSS: Left Wednesday.
11 A ¶ The door swings and a young bellhop, FINNEGAN "FINN" DOYLE, 17, buttons crooked, hurries in with a cart.
12 D FINN: Mrs. Voss, the Hargrove suite wants--
13 A ¶ He sees Pryce and stops.
14 D PRYCE: Hargrove, you say?
15 D FINN: I didn't say anything.
16 D ^MRS. VOSS: Finn, the cart.
17 A ¶ Pryce smiles slowly and taps his hat against his palm.
18 D PRYCE: Mrs. Voss, I'd like to see that bundle.
19 D MRS. VOSS: It's been laundered.
20 D PRYCE: I thought it might have been.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01825.json
### SCENE s01825 | EXT. FLOODED RICE TERRACE - DUSK
Detected names (may be incomplete or contain aliases): BAPAK SURYA, RATIH, ARJUNA PERKASA, GILANG
1 A ¶ Water the color of tin stands knee-deep across a stepped hillside, the stalks long since drowned.
2 A Five people have been walking its dikes since the bridge went.
3 A The sky is the same gray as the water, and the line between them has stopped meaning anything.
4 A ¶ The oldest, a farmer named BAPAK SURYA, sixty-odd, leads along the narrow dike with a staff in one hand.
5 A He tests each step before trusting it, and when the mud takes his foot to the ankle he does not curse, only pulls it free with a sound like a kiss and goes on.
6 A ¶ Behind him comes his daughter-in-law, RATIH, thirty, a baby strapped to her chest in a sling made from a patterned cloth.
7 A She walks with her chin tucked, shielding the child from the rain that has not yet started.
8 A She does not speak.
9 A Her lips move, counting something.
10 A ¶ Third in line is the schoolteacher, MR. ARJUNA PERKASA, forty, still wearing his tie, soaked through.
11 A He carries a transistor radio he cannot get to work and hasn't thrown away.
12 A Every few steps he lifts it to his ear, shakes it, and lowers it again.
13 A ¶ Fourth, a boy of twelve called GILANG, who is Ratih's brother.
14 A He keeps to the edge, where the dike is thinnest, as if daring it.
15 A He stops to pick up a drowned frog, studies it, and drops it back.
16 A Then he runs three steps to catch up and nearly goes in.
17 A ¶ Last, limping, is the stranger they picked up at the washed-out road, a woman in a field-medic's vest who has said only that her name is DEWI.
18 A She walks with a hand pressed to her ribs.
19 A Her eyes keep to the horizon in the way of someone who has decided to see the end of something.
20 A ¶ At the next bend the dike widens into a little island with a lone coconut palm leaning on it.
21 A Bapak Surya reaches it first, sets down his staff, and lowers himself onto a root.
22 A He gestures with two fingers, and without a word the others gather.
23 A ¶ Ratih unwraps the sling and sits, rocking the baby until it settles.
24 A The teacher crouches beside her and sets the radio on his knee; he thumbs the dial slowly, and from it comes only a slow hiss.
25 A The boy squats at the water's edge and cups his hands, drinks, and spits.
26 A ¶ Dewi lowers herself last.
27 A She takes her hand off her ribs, looks at it, and wipes it clean on the leg of her trousers.
28 A The old man watches her do this.
29 A He does not ask.
30 A He takes a small packet of salted rice from his shirt and breaks it into five unequal portions, and the biggest, after a moment's thought, he gives to her.
31 A ¶ She takes it.
32 A She nods once.
33 A Then she eats, slowly, while the first drops of rain begin to dimple the water around them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01826.json
### SCENE s01826 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): VINNIE, CARUSO, DARIUS CALLOWAY, MARISOL DEVEREAUX, LORNE TREMBLAY, ^MARISOL
1 A ¶ A windowless room behind a pawnshop.
2 A Shelves of unclaimed guitars, a safe the size of a refrigerator, a card table under a hanging bulb.
3 A A space heater ticks in the corner.
4 A ¶ Four people.
5 A VINCENT "VINNIE" CARUSO, 50s, the owner, sits at the card table counting cash into stacks with a wet thumb.
6 A His nephew DARIUS CALLOWAY, 20s, leans on the safe with arms folded, a duffel bag at his feet.
7 A At the door stands MARISOL DEVEREAUX, 30s, in a long coat, one hand in her pocket.
8 A And across from Vinnie, on a folding chair, sits LORNE TREMBLAY, 40s, a courier who has not taken off his gloves.
9 D VINNIE: Eleven. Twelve.
10 A ¶ He slides a stack to Lorne and starts a new one.
11 D LORNE: It was fifteen.
12 D VINNIE: It was fifteen before the thing with the plates.
13 D LORNE: Nobody told me about plates.
14 D VINNIE: Nobody told me you'd double-park.
15 A ¶ Darius uncrosses his arms, bends to unzip the duffel an inch, looks inside, and zips it again.
16 A Marisol shifts against the door frame and the floor creaks.
17 A Lorne watches her.
18 A She watches Vinnie.
19 A Vinnie keeps counting, and no one in the room touches anything they haven't already touched.
20 D LORNE: Who is she?
21 D VINNIE: A friend of the family.
22 D LORNE: She doesn't look like family.
23 D MARISOL: That's because I'm not.
24 A ¶ She takes her hand out of her pocket.
25 A It is empty.
26 A She sets it on the doorknob, and Lorne breathes out.
27 D LORNE: You're making me nervous, lady.
28 D MARISOL: Good.
29 D VINNIE: Marisol, sit.
30 D MARISOL: I'm fine.
31 D VINNIE: Sit down. You're scaring the courier.
32 A ¶ She sits on an amp case near the door.
33 A Darius crouches by the duffel again.
34 D DARIUS: Uncle V. It's not all there.
35 D VINNIE: Of course it's not all there.
36 D DARIUS: Then what's the point of--
37 D VINNIE (cutting in): What's the point is we count it twice, once for him and once for us.
38 A ¶ Lorne leans forward.
39 A The chair squeaks.
40 D LORNE: I want to know what's in the duffel.
41 D DARIUS: Paperwork.
42 D LORNE: Paperwork doesn't make a sound like that.
43 D VINNIE: It's a lot of paper.
44 A ¶ Lorne stands.
45 A Darius stands.
46 A Vinnie sets his stack down.
47 A Marisol rises off the amp case with one slow movement and stands between the door and the table.
48 A Nobody speaks.
49 A The space heater ticks louder than it did.
50 D LORNE: Open it.
51 D DARIUS: No.
52 D LORNE: Open it, or I walk and take the eleven.
53 D VINNIE: Take the eleven.
54 D LORNE: Twelve.
55 D VINNIE: Twelve.
56 A ¶ Lorne reaches down for the money, but Darius steps forward and blocks the table.
57 A They stand almost chest to chest.
58 A Lorne is shorter.
59 A He does not step back.
60 D MARISOL: Darius.
61 D DARIUS (over his shoulder): He's not leaving with it.
62 D VINNIE (simultaneously): Let him take the twelve.
63 D ^MARISOL: Let him go, Darius.
64 A ¶ Darius does not move.
65 A Marisol puts her hand into her coat pocket again, and this time the shape in it is not empty.
66 D MARISOL [CONT'D]: Step away from the table.
67 A ¶ Everyone freezes.
68 A The bulb sways.
69 A It lights Lorne's face, then Darius's, then Marisol's, then Vinnie's, one after another, as it swings.
70 A ¶ Darius steps back.
71 A His hands come up.
72 A Lorne takes the twelve stacks, folds them into his jacket, and walks to the door.
73 A Marisol opens it for him and he goes through.
74 A ¶ The door closes.
75 A The latch clicks.
76 A Vinnie lets out a breath he has been holding for a long time, and sits.
77 D VINNIE (to Marisol): You had nothing in the pocket.
78 D MARISOL: I had a stapler.
79 A ¶ Darius, still with his hands up, starts to laugh.
80 A It cracks halfway into a cough.
81 A Vinnie rubs his eyes with one hand, then reaches across and unzips the duffel himself.
82 A ¶ Inside, under a folded newspaper, are bricks of cash, rubber-banded.
83 D VINNIE: Count it again.
84 D DARIUS: Now?
85 D VINNIE: Now.
86 A ¶ Darius kneels.
87 A Marisol takes off her coat and hangs it on a guitar neck.
88 A Somewhere out front the shop bell rings once, and all three go quiet and look at the door.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01827.json
### SCENE s01827 | INT. DRIVE-THROUGH WEDDING CHAPEL - NIGHT
Detected names (may be incomplete or contain aliases): REVEREND AMOS PLUMB, BETTINA, DUANE, MARGO TALLEY
1 A ¶ A neon window.
2 A A speaker box.
3 A A cardboard heart.
4 A ¶ REVEREND AMOS PLUMB, 60s, rhinestone collar, leans out the window, microphone on a stand.
5 A In the car below: BETTINA, 26, veil taped to her head, and DUANE, 28, tux jacket over a hoodie.
6 D AMOS: Do you, Duane, take this woman?
7 D DUANE: Yes.
8 D AMOS: You didn't let me finish.
9 D DUANE: Sorry. Yes.
10 A ¶ Behind them, the car's back door opens.
11 A A third person climbs out.
12 A Wrong car.
13 A Wrong chapel.
14 A MARGO TALLEY, 40s, fast food uniform, a tray of milkshakes.
15 D MARGO: Which one of you ordered the vanilla?
16 A ¶ Everyone freezes.
17 A Bettina points at Duane.
18 A Duane points at Amos.
19 A Amos points at the menu.
20 D BETTINA: We didn't order food.
21 D MARGO: It says wedding combo.
22 D AMOS: That's the second package.
23 A ¶ Margo hands a shake through the window.
24 A Amos takes it.
25 A Duane grabs for it.
26 A They fight over the cup; it pops its lid and sprays all three.
27 A ¶ Silence.
28 A Whipped cream drips from the veil.
29 A ¶ Then headlights sweep the lot.
30 A Amos grabs the microphone, and his voice booms from the speaker box.
31 D AMOS [O.S.]: Next couple, please pull forward.
32 A ¶ Everyone scatters.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01828.json
### SCENE s01828 | INT. DESALINATION HABITAT - CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ENGINEER PRIYA NAIR, HELMUT KASSEL, UNIT SEVEN
1 A ¶ Seabed pressure hum.
2 A Condensation on every pipe.
3 A Emergency strips at ankle height.
4 A ¶ ENGINEER PRIYA NAIR, 40s, sits on the floor against a bulkhead, a toolkit open beside her.
5 A She is rewiring a panel by feel.
6 A Her hands are steady.
7 A ¶ DR. HELMUT KASSEL, 60s, stands over her in a gray sweater.
8 A He holds a clipboard he has stopped writing on.
9 A ¶ A drone, UNIT SEVEN, a squat gray cylinder on treads, idles at the end of the corridor, blue eye dimming and brightening.
10 D HELMUT: Pressure's down four percent.
11 D PRIYA: I know.
12 D HELMUT: Since the shift change.
13 D PRIYA: I said I know.
14 A ¶ She strips a wire with her teeth, spits the insulation.
15 A Helmut watches her do it.
16 D HELMUT: You're not asking me to hold the light.
17 D PRIYA: You'd drop it.
18 A ¶ He sets the clipboard on the floor, clicks on the penlight, and aims it at the panel.
19 A She does not thank him.
20 A ¶ The drone rolls forward a meter and stops.
21 A Its eye turns amber.
22 D UNIT SEVEN [V.O.] (flat synthetic voice): Reminder. Evacuation capsule capacity is two. Habitat population is three.
23 A ¶ Priya's hands stop.
24 A Helmut's penlight wavers.
25 D PRIYA: Unit Seven. Mute.
26 D UNIT SEVEN [V.O.]: Muting is not permitted during a pressure advisory.
27 D PRIYA: Then roll back.
28 A ¶ The drone rolls back.
29 A A meter.
30 A Two.
31 A The amber stays on.
32 A ¶ Helmut crouches.
33 A He puts a hand on Priya's wrist.
34 A She looks at it, then at him.
35 A She does not pull away.
36 D HELMUT: How long until it holds?
37 D PRIYA: An hour. Maybe three.
38 D HELMUT: And if it doesn't?
39 A ¶ She shrugs.
40 A He nods slowly.
41 A He takes his hand back, picks up the clipboard, and writes something.
42 A Tears off the page.
43 A Folds it.
44 A Sets it beside her toolkit.
45 D PRIYA: What is that?
46 D HELMUT: Names, for the capsule. In order.
47 A ¶ She doesn't open it.
48 A She goes back to the panel, and the wire slides home with a small click.
49 A ¶ The pipes overhead shudder once.
50 A A bead of water forms on the ceiling, hangs, and falls onto the folded paper.
51 A ¶ Priya covers it with her palm.
52 A She looks up the corridor at the drone's amber eye.
53 D PRIYA [CONT'D]: Unit Seven. Tell the surface we are fine.
54 D UNIT SEVEN [V.O.]: Transmitting. Confirm: you are fine?
55 A ¶ She says nothing.
56 A The eye returns to blue.
57 A ¶ Helmut slides down the wall until he is sitting beside her.
58 A They watch the panel.
59 A The pressure gauge ticks up one notch, then holds.
60 D HELMUT (quietly): Three percent.
61 D PRIYA: Two.
62 A ¶ He laughs, softly, and closes his eyes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01829.json
### SCENE s01829 | INT. CIRCUIT COURT HALLWAY - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSALIND HARTE, ELIAS HARTE, ATTORNEY NOEL BASHIR
1 A ¶ A long terrazzo corridor lined with scarred oak benches, each with a brass nameplate for a donor nobody remembers.
2 A Fluorescent tubes hum overhead.
3 A A radiator under a tall window knocks twice and goes silent.
4 A Through the glass, a parking structure and a gray sky.
5 A ¶ On the bench nearest the courtroom doors, ROSALIND HARTE, 58, sits upright in a navy suit that fit better ten years ago.
6 A Her hands hold a plastic folder closed on her lap.
7 A Her reading glasses hang from a chain, untouched.
8 A ¶ Next to her but not touching, her son ELIAS HARTE, 31, hunches forward, elbows on his knees, a county-issue lanyard around his neck, his hair cut short by someone else.
9 A He picks at a thread on his cuff.
10 A ¶ At the water fountain, leaning with arms crossed, is ATTORNEY NOEL BASHIR, 40s, in a charcoal suit and a tie loosened half an inch.
11 A He has been standing there for some time.
12 D ROSALIND: You haven't eaten.
13 D ELIAS: I'm fine.
14 D ROSALIND: There's a machine at the end. I have quarters.
15 D ELIAS: I'm not hungry.
16 D ROSALIND: You said that in the car.
17 D ELIAS: Because I wasn't.
18 D NOEL (crossing to them): We have twenty minutes. The judge wants the statement before the lunch recess.
19 D ROSALIND: Does it have to be him who reads it?
20 D NOEL: It's his statement, Mrs. Harte.
21 D ROSALIND: I wrote half of it.
22 D ELIAS: You wrote all of it.
23 D ROSALIND: I wrote what you told me.
24 D ELIAS: You wrote what I should have told you.
25 D NOEL: Either way, it needs to be said out loud. The judge wants to hear a voice, not a page.
26 D ELIAS: And if my voice doesn't work?
27 D NOEL: Then you wait and try again.
28 D ELIAS: She doesn't give people a second try.
29 D NOEL: She gives them more than you think.
30 D ROSALIND: Noel, do you have children?
31 D NOEL: Two.
32 D ROSALIND: Then you know it's not about what the judge gives.
33 D NOEL (gently): I know.
34 A ¶ Elias stands abruptly, walks to the window, and lays his palm flat against the glass.
35 A The radiator knocks again.
36 A Rosalind opens the folder, takes out three typed pages, and smooths them against her knee.
37 D ROSALIND: I'll read the first paragraph with you.
38 D ELIAS: Mom.
39 D ROSALIND: Not for the judge. For the hallway.
40 D ELIAS: Nobody's in the hallway.
41 D ROSALIND: Then it won't matter if I stumble.
42 A ¶ She begins, almost inaudibly, to read.
43 A Elias turns from the window.
44 A Noel steps back toward the fountain, giving them the bench.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01830.json
### SCENE s01830 | INT. VICTORIAN PARLOR - EVENING
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH, SIR REGINALD ASHWORTH, PHILIPPA MARLOWE, EZEKIEL FROST, HARGREAVES, CAPTAIN JULIAN VANE
1 A ¶ 1893.
2 A Gaslight, heavy drapes, a piano no one has touched in years.
3 A A dinner is being given and nothing has been eaten.
4 A ¶ LADY CORDELIA ASHWORTH, 50s, black silk, sits very straight at the head of a small table.
5 A Beside her, her husband SIR REGINALD ASHWORTH, 60s, whiskers waxed, studies a fork.
6 A Opposite, their niece PHILIPPA MARLOWE, 20s, pale blue gown, turns her water glass a quarter turn and back.
7 A Next to her, the family solicitor MR. EZEKIEL FROST, 50s, spectacles, holds a folded paper he has not yet unfolded.
8 A By the sideboard stands the butler HARGREAVES, 60s, white gloves, expressionless.
9 A And at the foot of the table, hat still on, sits CAPTAIN JULIAN VANE, 30s, in a regimental coat with one button missing.
10 A ¶ A clock ticks.
11 A Nobody lifts a spoon.
12 D LADY CORDELIA: Hargreaves. The soup is cold.
13 D HARGREAVES: It was cold when it was served, madam.
14 D LADY CORDELIA: Then take it away.
15 A ¶ Hargreaves does not move.
16 A Sir Reginald sets the fork down.
17 A Philippa stares at the captain's missing button.
18 D SIR REGINALD: Frost. You had something to read.
19 D MR. FROST: I had, Sir Reginald. After dinner.
20 D SIR REGINALD: There is no dinner.
21 D MR. FROST: Quite.
22 A ¶ Mr. Frost unfolds the paper.
23 A He smooths it twice.
24 A Captain Vane takes off his hat and sets it, crown down, beside his plate.
25 A Philippa lifts her eyes to the ceiling.
26 A ¶ A bell rings in the hall.
27 A The house telephone, a new brass horn on the wall, rattles.
28 A ¶ Hargreaves slips out to the hall.
29 A The receiver is lifted.
30 A His voice carries back through the open door.
31 D HARGREAVES [O.S.]: Yes. Yes. I will convey it.
32 A ¶ The receiver is set down with great care.
33 A He returns.
34 D LADY CORDELIA: Well?
35 D HARGREAVES: The constable, madam. He is at the gate.
36 A ¶ Captain Vane stands.
37 A His chair scrapes.
38 A Sir Reginald does not look at him.
39 D PHILIPPA (low): Julian.
40 D CAPTAIN VANE: Sit down, Pippa.
41 A ¶ She does not sit down, because she has not stood.
42 A She holds the glass.
43 A Lady Cordelia dabs her mouth with a napkin that has touched nothing.
44 D LADY CORDELIA: Reginald, the paper.
45 D SIR REGINALD: Frost.
46 D MR. FROST (reading): "I, Hartley Ashworth, being of sound mind--"
47 D CAPTAIN VANE: Stop.
48 D MR. FROST: Captain, I must.
49 D CAPTAIN VANE: Not that one. The other.
50 A ¶ Mr. Frost turns the page over.
51 A There is a second sheet beneath it.
52 A He reads it silently.
53 A His face loses color.
54 A He passes it to Sir Reginald, who reads and passes it to his wife.
55 A ¶ Lady Cordelia folds it into a square, then a smaller square, then places it in the candle flame.
56 A ¶ The paper curls and blackens.
57 A Nobody breathes.
58 D HARGREAVES (at the door, quietly): Shall I admit the constable, madam?
59 D LADY CORDELIA: Not yet.
60 A ¶ She takes up her spoon.
61 A She tastes the cold soup.
62 A She sets the spoon down.
63 D LADY CORDELIA [CONT'D]: Now.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01831.json
### SCENE s01831 | INT. MUSEUM VENTILATION DUCT - NIGHT
Detected names (may be incomplete or contain aliases): NELL PARISH
1 A ¶ A square steel tunnel, barely wider than shoulders.
2 A A penlight clenched in teeth throws a thin beam ahead.
3 A ¶ NELL PARISH, 30s, black bodysuit, crawls on her elbows toward a grate.
4 A She stops.
5 A Listens.
6 A Under her, far below, a floor polisher whines and fades.
7 A She starts again, slower, dragging a duffel behind her by a strap.
8 A ¶ A tiny recorder clipped to her collar clicks and plays her own voice, recorded days ago, flat and rehearsed.
9 D NELL [V.O.] (recorded): Guard's on the east wing at the top of the hour. Four minutes, no more.
10 A ¶ She does not react.
11 A She reaches the grate and peers through.
12 A Below is a gallery, pale, a single painting lit on the far wall.
13 A She takes the penlight out of her mouth and clicks it off.
14 A ¶ She works a screwdriver into the first bolt.
15 A It turns.
16 A The second.
17 A The third sticks.
18 A She breathes out, wipes her palm on her thigh, tries again, and it gives with a squeal that echoes along the duct.
19 A ¶ She freezes.
20 A Below, the polisher stops.
21 A Footsteps, slow, heavy, approaching.
22 A A flashlight beam crosses the gallery floor and slides up the wall.
23 A It passes the grate.
24 A It passes again.
25 A She holds her breath until the beam moves on.
26 D NELL [V.O.] (recorded): Three minutes. Do not rush the rope.
27 A ¶ She lifts the grate out, lays it in the duct, and rolls onto her back.
28 A She unclips a coil of rope from her belt, ties it to a bracket, tests the knot with her full weight.
29 A Then she feeds the rope through the opening, lowers herself over the edge, and hangs there, boots swinging three meters above the parquet.
30 A ¶ She drops the last meter.
31 A Lands in a crouch.
32 A Silent.
33 A ¶ She crosses to the painting, a small landscape in a heavy frame.
34 A She runs two fingers around the wire.
35 A Pulls a thin cutter.
36 A Snips.
37 A The frame sags.
38 A ¶ Behind her, a door handle turns.
39 D NELL [V.O.] (recorded): If you hear the handle, you're already late.
40 A ¶ She doesn't stop.
41 A She slips the canvas free of the frame, rolls it into a tube, shoves it into her duffel, and runs.
42 A The door opens as she reaches the rope.
43 A She climbs, hand over hand, as a flashlight beam swings up through the gap.
44 A ¶ She makes the grate.
45 A Pulls the rope up after her.
46 A Drags the grate back across the opening, and lies flat in the dark, her heart loud in her ears.
47 A ¶ Below, the guard's boots stop under the vent.
48 A A long moment.
49 A Then they turn and walk away.
50 A ¶ She reaches up and switches off the recorder.
51 A She smiles in the dark.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01832.json
### SCENE s01832 | INT. ROADSIDE WAY STATION - DAY
Detected names (may be incomplete or contain aliases): MA TULLIVER, SPARROW, ORVILLE PENN, SABINA ROJAS, OSCAR HALE, JUDE CALLAHAN, ^OSCAR
1 A ¶ Adobe walls, a stove gone cold, six mismatched chairs pulled to a long table.
2 A Dust hangs in the shaft of light from the door.
3 A Outside, a horse stamps.
4 A ¶ Six people sit down to a meal none of them wants.
5 A The proprietor, MA TULLIVER, sixty, sleeves rolled, ladles beans into tin bowls and says nothing.
6 A Her hired boy, SPARROW, fifteen, sets them down one by one.
7 A A drummer in a checked vest, ORVILLE PENN, forty, sits with his sample case under his boots.
8 A A woman in gray travel wool, SABINA ROJAS, thirty, holds her bowl and does not lift the spoon.
9 A A tall rancher, OSCAR HALE, fifty, takes his hat off for grace though no one says one.
10 A And in the corner chair, back to the wall, a stranger in a dusty duster, JUDE CALLAHAN, thirty-five, watches the door.
11 A ¶ The beans steam.
12 A For a long moment there is only the sound of spoons.
13 D ORVILLE: Lovely weather for the road.
14 D OSCAR: It's rained twice in a year.
15 D ORVILLE: That's what I said.
16 D SABINA: Is there a stage tonight?
17 D MA TULLIVER: Stage came and went.
18 D SABINA: I was told it comes at four.
19 D SPARROW: It did come at four. You were upstairs.
20 D SABINA: Nobody woke me.
21 D MA TULLIVER (over her): Sparrow, fetch the bread.
22 A ¶ He goes.
23 A Oscar glances at Jude, who has not touched his bowl.
24 A Orville clears his throat and opens his mouth, but Sabina speaks first.
25 D SABINA: Mister, are you not hungry?
26 D JUDE: Not particularly.
27 D OSCAR: He's waiting on somebody.
28 D JUDE: I'm waiting on supper to finish.
29 D OSCAR: Then it's finished.
30 A ¶ He shoves his bowl away.
31 A Ma Tulliver sets down her ladle.
32 A The room tightens like a drawn cord.
33 A ¶ She comes around the table, slow, wiping her hands on her apron.
34 A She stops behind Jude's chair and rests one palm on its back.
35 A He does not turn his head.
36 A ¶ Sparrow returns with the bread, sees them, and stops in the doorway with the loaf held against his chest.
37 D SPARROW: Ma?
38 D MA TULLIVER: Put it down, son.
39 A ¶ He sets it on the sideboard.
40 A Orville slides his sample case farther under his chair.
41 A Sabina rises halfway, then sits again as Oscar lays a hand over hers.
42 D JUDE (quietly): Ma'am. You know who I am.
43 D MA TULLIVER (simultaneously): I know whose boy you are.
44 D ^OSCAR (simultaneously): We all know whose boy.
45 A ¶ Jude smiles, tired.
46 A He reaches into his duster.
47 A Everyone in the room draws a breath, and what he takes out is a folded letter, creased soft with handling.
48 D JUDE [CONT'D]: He asked me to bring this.
49 A ¶ He sets it on the table, in the middle of the beans.
50 A Nobody reaches for it.
51 A Outside the horse stamps, and stamps again, and a long shadow crosses the doorway.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01833.json
### SCENE s01833 | INT. DEPARTMENT STORE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): MISS GWENDOLYN FAIRWEATHER, HERBERT PUMPHREY
1 A ¶ An old brass-and-mahogany elevator with a folding gate.
2 A A mirror on every wall.
3 A Soft music from a hidden speaker.
4 A ¶ MISS GWENDOLYN FAIRWEATHER, 30s, in a bright hat and white gloves, is the lift operator.
5 A HERBERT PUMPHREY, 50s, a floorwalker with a carnation in his lapel, stands in the corner clutching a hatbox.
6 D GWENDOLYN: Third floor. Ladies' gloves, hosiery, and sundries.
7 D HERBERT: I am not going to the third floor.
8 D GWENDOLYN: Then why did you press three?
9 D HERBERT: I did not press three. I pressed the nine.
10 D GWENDOLYN: There is no nine.
11 D HERBERT: There is a nine. The nine is the executive offices.
12 D GWENDOLYN: The executive offices are the eighth.
13 D HERBERT: Miss Fairweather, I have worked in this store for twenty-two years.
14 D GWENDOLYN: And in twenty-two years you've never learned the numbers?
15 D HERBERT: I know the numbers perfectly. It is you who has moved them.
16 D GWENDOLYN: I operate the lift, Mr. Pumphrey. The floors are the floors.
17 D HERBERT: Then explain the hatbox.
18 D GWENDOLYN: What hatbox?
19 D HERBERT: The one I am holding.
20 D GWENDOLYN: You are holding that?
21 D HERBERT: It was given to me by a woman on the second floor. She said, "Take this to the manager." She did not say which manager.
22 D GWENDOLYN: Then it is likely for Mr. Trout.
23 D HERBERT: Mr. Trout retired.
24 D GWENDOLYN: Then it is for his son.
25 D HERBERT: His son is on the ninth.
26 D GWENDOLYN: Which does not exist.
27 D HERBERT: You see my difficulty.
28 D GWENDOLYN: I see two difficulties, Mr. Pumphrey, and neither is mine.
29 D HERBERT: What are they?
30 D GWENDOLYN: You are carrying a box you cannot deliver, and you have been riding up and down for an hour.
31 D HERBERT: It has been forty minutes.
32 D GWENDOLYN: It has been an hour. I have a log.
33 D HERBERT: Then you are keeping a log of me?
34 D GWENDOLYN: Of the lift. You happened to be in it.
35 D HERBERT: Miss Fairweather, I am not accustomed to being a happenstance.
36 D GWENDOLYN: Mr. Pumphrey, I am not accustomed to being accused of misplacing a floor.
37 D HERBERT: Then what shall we do?
38 D GWENDOLYN: Open the box.
39 D HERBERT: It is not mine to open.
40 D GWENDOLYN: Whose is it?
41 D HERBERT: The manager's.
42 D GWENDOLYN: Which manager?
43 D HERBERT: That is the very question.
44 D GWENDOLYN: Then it belongs to whoever opens it first.
45 D HERBERT: That is not the law.
46 D GWENDOLYN: It is the law of the elevator.
47 D HERBERT: Since when?
48 D GWENDOLYN: Since now.
49 D HERBERT (after a pause): Hold the box.
50 D GWENDOLYN: I'm operating the lift.
51 D HERBERT: Hold it with one hand.
52 D GWENDOLYN: I only have two, Mr. Pumphrey, and both are in use.
53 D HERBERT: Then I shall open it myself.
54 A ¶ He lifts the lid.
55 A The music swells, a harp glissando, unaccountably.
56 A Gwendolyn leans in.
57 A They both look.
58 D GWENDOLYN: Well?
59 D HERBERT: It is a hat.
60 D GWENDOLYN: What sort of hat?
61 D HERBERT: A very ugly hat.
62 D GWENDOLYN: Whose?
63 D HERBERT (reading the label): Yours.
64 A ¶ Gwendolyn takes off her bright hat, looks at it, looks at the hatbox, and begins to laugh.
65 A After a moment Herbert, appalled, joins her.
66 A ¶ The elevator stops.
67 A The gate rattles.
68 A Neither moves.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01834.json
### SCENE s01834 | INT. CLINIC WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ANGELIQUE MBEKI, PETRUS, ZANELE, ABERNATHY GRIGGS, NURSE
1 A ¶ Vinyl chairs bolted in rows.
2 A A television mounted high plays a muted game show.
3 A ¶ ANGELIQUE MBEKI, 40s, scrubs under a parka, sits with a clipboard.
4 A Her husband PETRUS, 40s, jiggles one knee.
5 A Their daughter ZANELE, 16, earbuds in, stares at the floor.
6 A An old man, MR. ABERNATHY GRIGGS, 80s, dozes.
7 A A NURSE, 30s, stands behind the glass.
8 A ¶ The intercom crackles.
9 D NURSE [O.S.]: Mbeki family?
10 A ¶ Angelique stands.
11 D ANGELIQUE: Yes.
12 D NURSE [O.S.]: Dr. Okafor will see you now.
13 D PETRUS: Finally.
14 D ANGELIQUE: Petrus.
15 D PETRUS: Four hours.
16 D ANGELIQUE: Petrus.
17 A ¶ He stops.
18 A Zanele takes out one earbud.
19 D ZANELE: Is it Gran?
20 A ¶ Nobody answers.
21 A The buzzer sounds on the inner door.
22 A ¶ Mr. Griggs wakes, looks at them, and closes his eyes again.
23 A ¶ Petrus shoves the nearest chair.
24 A It scrapes six inches across the tile, and the whole room hears it.
25 D ANGELIQUE (low): Not here.
26 D PETRUS: Then where?

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01835.json
### SCENE s01835 | EXT. DRY CREEK BED - SUNSET
Detected names (may be incomplete or contain aliases): MARSHAL JEB TRASK, ALMA SOTELO, TOMASO, DEPUTY HOLLIS FINCH, ^TOMASO
1 A ¶ Cracked clay.
2 A A dead cottonwood.
3 A Four riders have dismounted.
4 A ¶ MARSHAL JEB TRASK, 50s.
5 A Gray mustache.
6 A Badge pinned crooked.
7 A ¶ He watches.
8 A ¶ Across the dry bed, ALMA SOTELO, 30s.
9 A Rifle across her saddle.
10 A Black hat.
11 A ¶ Beside her, her brother TOMASO, 20s.
12 A Hand on his holster.
13 A Sweat.
14 A ¶ Behind them, DEPUTY HOLLIS FINCH, 19.
15 A Shotgun.
16 A Too big for him.
17 A ¶ Nobody speaks.
18 A ¶ Wind.
19 A A tumbleweed rolls through, stops against Trask's boot.
20 D TRASK: Alma.
21 D ALMA: Marshal.
22 D TRASK: Long ride.
23 D ALMA: Longer back.
24 A ¶ Tomaso laughs, high and nervous.
25 D TOMASO: Don't talk to him, Alma.
26 D ALMA: Be quiet, Tomaso.
27 D TRASK: You've got the mule.
28 D ALMA: It's my mule.
29 D TRASK: It was Dalton's.
30 A ¶ Alma shrugs.
31 A Hollis licks his lips.
32 D HOLLIS: Marshal, I got a bad feeling.
33 D TRASK: Everybody has.
34 D ALMA (simultaneously): Everybody has.
35 D ^TOMASO: Everybody has.
36 A ¶ Silence.
37 A Trask almost smiles.
38 D TRASK: Alma. Put the rifle down.
39 D ALMA: You first.
40 D TRASK: Hollis.
41 D HOLLIS: Sir?
42 D TRASK: Put yours down.
43 D HOLLIS: Sir?
44 D TRASK: Do it.
45 A ¶ Hollis lowers the shotgun.
46 A Trask unbuckles his gun belt, drops it.
47 A Alma watches.
48 A Slowly she slides the rifle from the saddle and lays it flat in the dust.
49 A ¶ Tomaso does not move.
50 D ALMA: Tomaso.
51 D TOMASO: They'll hang us.
52 D ALMA: They'll hang you. Not me.
53 A ¶ She turns her back on the marshal.
54 A Walks to Tomaso.
55 A Takes his gun hand in both of hers.
56 A Opens the fingers one at a time.
57 A The pistol falls.
58 A ¶ Trask exhales.
59 A Hollis sits down on the clay.
60 A The tumbleweed rolls on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01836_0.json
### SCENE s01836_0 | EXT. TELEGRAPH OFFICE - HIGH DESERT TOWN - DAY
Detected names (may be incomplete or contain aliases): 
1 A ¶ A single-street town of sun-bleached boards.
2 A A telegraph pole leans over the roof of a squat office.
3 A Heat shimmers above the road.
4 A The hitching rail holds one horse and nothing else.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01836_1.json
### SCENE s01836_1 | INT. TELEGRAPH OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): CLEM, ODOM, STRANGER, MARCUS, VOICE ON THE WIRE
1 A ¶ A narrow room.
2 A A counter with brass grille.
3 A A key and sounder on a desk, silent.
4 A A wall clock stopped at 4:10.
5 A Dust motes hang in a bar of light from the lone window.
6 A ¶ CLEMENTINE "CLEM" ODOM, 40s, sits behind the counter in a sleeve garter and green eyeshade.
7 A Lean, quiet, careful with her hands.
8 A She is sorting tickets into pigeonholes when the bell on the door jingles.
9 A ¶ A STRANGER enters.
10 A Late thirties, a long gray coat patched at the elbow, a hat pulled low over a face the sun has worked on for years.
11 A He carries a saddlebag over one shoulder and does not take it off.
12 D STRANGER: Afternoon.
13 D CLEM: Afternoon.
14 D STRANGER: You the operator?
15 D CLEM: I am.
16 D STRANGER: I need to send a wire.
17 D CLEM: Where to?
18 D STRANGER: Cheyenne.
19 A ¶ She slides a form across the counter and a pencil beside it.
20 A He looks at the pencil, then at her, and picks it up with his left hand.
21 A Clem notes this and says nothing.
22 D CLEM: Fifteen words for a quarter. Each one after is two cents.
23 D STRANGER: I'll keep it short.
24 A ¶ He writes slowly.
25 A Clem returns to her pigeonholes, but watches him sidelong.
26 A The saddlebag shifts on his shoulder with a faint metallic clink.
27 D CLEM: That heavy?
28 D STRANGER: Some.
29 D CLEM: You can set it down.
30 D STRANGER: I'm fine.
31 A ¶ He finishes, pushes the form back.
32 A She reads it, lips barely moving.
33 D CLEM: "Arrived. Will wait. Send word by Tuesday." No name.
34 D STRANGER: No name.
35 D CLEM: They'll want to know who it's from.
36 D STRANGER: They'll know.
37 A ¶ A silence.
38 A The sounder on the desk begins to chatter, a rapid stutter of clicks.
39 A Clem turns, listens, takes up a pencil, and writes on a pad as the code runs.
40 A Her face changes by degrees.
41 A The Stranger watches her pencil.
42 D CLEM [CONT'D] (without turning): You want to tell me your name, mister?
43 D STRANGER: Why?
44 D CLEM: Because this just came over the line for a man matching your description.
45 A ¶ She tears off the sheet, holds it up between two fingers.
46 A He doesn't take it.
47 D STRANGER: What's it say?
48 D CLEM: It says "Deputy Marcus Reyes, lawman, last seen heading north with a stolen payroll."
49 A ¶ The Stranger's right hand drifts toward his coat.
50 A Clem's drifts under the counter.
51 D STRANGER: Ma'am.
52 D CLEM: Marcus.
53 A ¶ He stops.
54 D MARCUS: Put your hand where I can see it.
55 D CLEM: I will when you've shown me yours.
56 A ¶ He slowly lifts both hands away from his coat.
57 A The saddlebag slides to the floor with a heavy chunk.
58 D MARCUS [CONT'D]: That's not the payroll.
59 D CLEM: Then what is it?
60 D MARCUS: Evidence.
61 D CLEM: Of what?
62 D MARCUS: Of who took it.
63 A ¶ Clem's hand comes up from beneath the counter, empty.
64 A She lays the sheet down on the grille.
65 D CLEM: Then you'd best read the rest of this.
66 A ¶ He steps up, reads.
67 A His lips tighten.
68 A The sounder chatters again.
69 D VOICE ON THE WIRE [V.O.] (telegraph operator, Cheyenne; read aloud by Clem): Marshal's office confirms. Reyes is clean. Hold him. Dangerous man trails.
70 A ¶ Marcus lifts his eyes from the page and meets Clem's.
71 A Outside, at the end of the street, the clatter of hooves begins and grows.
72 D CLEM: That'd be your dangerous man.
73 D MARCUS: Lock the door.
74 A ¶ She does.
75 A He pulls the shade.
76 A In the dim, they stand a pace apart, listening, while the hoofbeats come on and the sounder, on its desk, goes quiet.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01837.json
### SCENE s01837 | INT. RETIREMENT HOME RECREATION HALL - DAY
Detected names (may be incomplete or contain aliases): MAX, OKONKWO-BELL, DESMOND, VISITOR, FLO, ABERNATHY, FRONT DESK, MOVER
1 A ¶ A long room with a linoleum floor the color of weak tea.
2 A A bingo cage in one corner, a folding table of sad cookies in another.
3 A On the wall, a banner reads "SPRING FLING" and has read so since the previous spring.
4 A ¶ Three people occupy the room.
5 A ¶ MAXINE "MAX" OKONKWO-BELL, 70s, a retired stunt performer in a velvet tracksuit, sits at the center table with a deck of cards fanned in one hand.
6 A Beside her, a dozing oxygen tank on wheels and a bowl of butterscotch.
7 A Across from her, her grandson DESMOND, 20s, thin, pressed shirt, a lanyard that says VISITOR, reads a text message with his thumb stuck in his mouth.
8 A And by the cookie table, hunched over a tray, is the nurse's aide FLORENCE "FLO" ABERNATHY, 50s, teal scrubs, hair under a net, who has been listening to the whole room for years and revealing nothing.
9 A ¶ A phone on the wall buzzes.
10 A Nobody answers it.
11 A It buzzes again.
12 D MAX: Desmond, your telephone is ringing.
13 D DESMOND: It's a text, Nana.
14 D MAX: That's the wall phone.
15 D DESMOND: Oh.
16 A ¶ He glances at it.
17 A It buzzes.
18 A He looks at Max, who raises one eyebrow so high it nearly leaves her face.
19 A He sighs, crosses the room, and lifts the receiver.
20 A Flo watches him.
21 A Max shuffles.
22 A The cards ride a bridge, snap, and settle.
23 A Desmond holds the phone out from his ear as a voice squawks.
24 D FRONT DESK [V.O.] (over the wall phone): Good morning, Mr. Okonkwo-Bell. Your grandmother has a delivery.
25 D DESMOND: My grandmother has a what?
26 D FRONT DESK [V.O.]: A delivery. Two men are bringing it up.
27 D DESMOND (turning): Nana, what did you order?
28 D MAX: Nothing.
29 D DESMOND: They say it's a delivery.
30 D MAX: Then it's a surprise. Hang up.
31 D DESMOND: It's from the front desk.
32 D MAX: Then hang up on the front desk.
33 A ¶ He hangs up.
34 A At once the double doors swing open and two movers in blue coveralls wheel in a crate the size of a refrigerator, strapped to a hand truck.
35 A They park it in the middle of the floor.
36 A Without a word they unstrap it, tip it forward, and peel away the cardboard.
37 A Beneath is a vintage motorcycle, gleaming chrome, a leather jacket draped across the seat.
38 A ¶ Desmond walks around it twice.
39 A Flo sets down her tray.
40 A Max does not rise.
41 D DESMOND: Nana.
42 D MAX: Hm?
43 D DESMOND: Is this yours?
44 D MAX: Was.
45 D DESMOND: Nana, you said you sold it in 1994.
46 D MAX: I said a lot of things in 1994.
47 A ¶ Flo approaches the bike, runs a thumb along the handlebar, and glances back at Max.
48 D FLO: Miss Max, it's not on the activity calendar.
49 D MAX: Flo, I will tell you what's on my calendar.
50 D FLO: You're due for your pills at noon.
51 D MAX: My calendar says I'm due for a ride at noon.
52 D DESMOND: You cannot ride it.
53 D MAX: I can sit on it.
54 D DESMOND: You can't sit on it either. Dr. Pruitt specifically--
55 D MAX: Dr. Pruitt isn't here, and the man on the bike, in the photograph over there, was the best looking thing in the state of Ohio.
56 A ¶ She nods at a framed photograph on the wall, a younger Max in a leather jacket mid-leap over a line of cars.
57 A Desmond looks at the photograph, then at the bike, then at the movers, who have stepped back and are clutching a clipboard.
58 D FLO (to the movers): Who sent this?
59 D MOVER (shrugging): Sign here, ma'am.
60 D FLO: Who's the sender?
61 D MOVER: It says "Harlan."
62 A ¶ Max's hand stops on the cards.
63 A The room goes quiet.
64 A A small, amused crinkle appears at the corner of her eye, then spreads.
65 D MAX: That son of a gun.
66 D DESMOND: Who's Harlan?
67 D MAX: Your grandfather's brother. He died in the spring.
68 D DESMOND: Then who sent it?
69 D MAX: He did, Desmond. He did. He always said he'd send me something nice when he got where he was going.
70 A ¶ She gets up.
71 A She walks to the bike.
72 A Flo hurries to steady the oxygen tank on its wheels.
73 A Max lays her hand on the seat and strokes it with two fingers.
74 D MAX [CONT'D]: Desmond. Fetch the helmet.
75 D DESMOND: There's a helmet?
76 D MAX: There's always a helmet.
77 A ¶ He lifts the leather jacket and finds one beneath it.
78 A He holds it out.
79 A Max puts it on, buckles the strap, and swings a leg over the seat with a fluency that stops everyone's breath.
80 D FLO (quietly): Miss Max.
81 D MAX: Flo, if you tell Dr. Pruitt, I'll haunt you.
82 D FLO: He'll see the tank.
83 D MAX: Then I'll leave the tank.
84 A ¶ She unhooks the oxygen tube, hands it to Flo, and grips the handlebars.
85 A Desmond covers his face with both hands.
86 A Flo stares at the tube.
87 A ¶ The bike does not start.
88 A It doesn't have a key.
89 A Max grins, rests her forehead against the tank, and begins to laugh until the laughing turns to a wheeze, then a cough.
90 A Flo is at her side in an instant with the tube.
91 D FLO [CONT'D]: Breathe, Miss Max.
92 D MAX (between breaths): I am. I am. I'm breathing.
93 D DESMOND: Nana.
94 D MAX: Desmond, I want to sit here for a minute.
95 A ¶ He pulls a chair beside the bike and sits.
96 A Flo sits on the other side.
97 A Max rests her hands on the handlebars, eyes closed, and for a while none of them says anything.
98 A The movers back out of the room.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01870.json
### SCENE s01870 | INT. DEFUNCT BOWLING ALLEY - SHOE COUNTER - NIGHT
Detected names (may be incomplete or contain aliases): IMANI OKAFOR, TEDDY BRANCA, LUIS VARGA, OLD PIM, WEN ZHAO, DAG LINDQVIST
1 A ¶ Dust.
2 A Dead neon.
3 A SGT. IMANI OKAFOR (40s, wet coat) stands over a cash drawer pried open and empty.
4 A ¶ TEDDY BRANCA (50s, tracksuit, split lip) sits on the counter.
5 A LUIS VARGA (30s, thin, shaking) leans on the ball return beside him.
6 D OKAFOR: Who hit who?
7 D TEDDY: He hit me.
8 D LUIS: He swung first.
9 D OKAFOR: Which he?
10 A ¶ Neither answers.
11 A In the lanes, OLD PIM (70s, janitor's cap) pushes a mop through nothing.
12 D PIM (without looking up): Both of them. Then he took it.
13 A ¶ WEN ZHAO (20s, rain jacket, ticket stub in hand) steps out from behind the shoe cubbies.
14 D WEN: He took it. I saw him put it in the ball bag.
15 A ¶ CONST.
16 A DAG LINDQVIST (20s) lifts a red bag from under the counter, unzips it.
17 A Cash.
18 A A lot of it.
19 D DAG: Sarge. It's all here.
20 A ¶ Okafor exhales.
21 A Sits on a stool.
22 D OKAFOR: Then somebody get me coffee.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01871.json
### SCENE s01871 | EXT. FLOODED RICE PADDY DIKE - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT NIKOLAI BRZEZINSKI, CORPORAL ADAEZE OBI, SPARROW, LANGE, PRIVATE HARUTO KAWASAKI
1 A ¶ Mist on brown water.
2 A A narrow dike, the only dry line for a mile.
3 A Four soldiers crouch behind a collapsed water buffalo shed.
4 A ¶ SERGEANT NIKOLAI BRZEZINSKI (40s, gray stubble, field radio on his back) counts heads.
5 A CORPORAL ADAEZE OBI (20s, medic's bag) wraps a bandage around PRIVATE TOMMY "SPARROW" LANGE (19, freckled, pale).
6 A PRIVATE HARUTO KAWASAKI (30s, glasses taped at the hinge) watches the treeline through a rifle scope.
7 A ¶ The shooting has stopped.
8 A Somewhere, a duck complains.
9 D BRZEZINSKI: That's the last of it. Report.
10 D OBI: Sparrow's through-and-through, left arm.
11 D SPARROW: It's fine, it's--
12 D OBI: It's not fine, hold still.
13 D KAWASAKI: Treeline is quiet. Nothing moving.
14 D BRZEZINSKI: Quiet is not nothing.
15 D SPARROW: Sarge, are we gonna wait for the--
16 D OBI: Stop talking.
17 D KAWASAKI: I count two. Maybe three. Walking away.
18 D BRZEZINSKI: Away?
19 D KAWASAKI: Away. Rifles slung.
20 D OBI (tying off): They're done too.
21 D SPARROW: How do you know?
22 D BRZEZINSKI: Because they're walking.
23 A ¶ A long pause.
24 A Brzezinski unslings the radio, thumbs the handset.
25 D BRZEZINSKI [CONT'D]: Tango Two, this is Tango Four. Hold fire. Say again, hold fire.
26 D KAWASAKI: Sergeant, I can see their faces. They're kids.
27 D OBI: So is Sparrow.
28 D SPARROW: I'm twenty in March.
29 D BRZEZINSKI: Nobody is anything in March. Obi, finish. Kawasaki, keep the glass on them till they're gone.
30 D KAWASAKI: Gone.
31 A ¶ He lowers the scope.
32 A Exhales.
33 A Brzezinski sits down hard in the mud.
34 D OBI: Sarge. You're bleeding too.
35 D BRZEZINSKI: Am I?
36 A ¶ He looks at his sleeve.
37 A Surprised, almost polite.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01872.json
### SCENE s01872 | INT. ORBITAL GREENHOUSE RING - SECTOR NINE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER IFEOMA VANCE, BOTANIST RUSLAN TOKAYEV, MEDIC PRIYA NAIR, TECH JUNO BELL, CADET MARCO DELACROIX, PILOT SEUN-AH KIM
1 A ¶ Tomato vines.
2 A Grow-lights.
3 A A hull groan.
4 A Then the alarm.
5 A ¶ COMMANDER IFEOMA VANCE (50s, flight suit, grease-stained) slams the manual valve while BOTANIST RUSLAN TOKAYEV (30s, wiry) drags the cart of seedlings clear and MEDIC PRIYA NAIR (30s) seals the hatch behind them as TECH JUNO BELL (20s, goggles) hammers a bypass and CADET MARCO DELACROIX (18) freezes by the airlock wheel, hands shaking.
6 A At the console, PILOT SEUN-AH KIM (40s, headset) calls out numbers.
7 D VANCE: Pressure!
8 D TOKAYEV: Dropping!
9 D NAIR: Hatch seated!
10 D BELL: ^Bypass hot!
11 A ¶ Silence.
12 A Hiss.
13 A The needle halts.
14 D KIM: Breach contained. Sector Nine stable.
15 A ¶ Delacroix laughs, a shaky bark.
16 A Vance wipes her face with a glove, leaving soot.
17 D VANCE: Marco. Wheel.
18 D DELACROIX: Yes ma'am.
19 A ¶ He turns it.
20 A Slowly.
21 A The light goes green.
22 D TOKAYEV (to a seedling): Good girl. Hang on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01873.json
### SCENE s01873 | INT. LIGHTHOUSE KEEPER'S KITCHEN - DUSK
Detected names (may be incomplete or contain aliases): ELOWEN PASCOE, CALLUM PASCOE, FINN ARDEN, MAIRI PASCOE
1 A ¶ Salt has eaten the window frames pale.
2 A Soup steams on a black stove, and four chipped cups wait on an oilcloth the color of old teeth.
3 A ¶ ELOWEN PASCOE (30s, wool cardigan, a woman who has learned to move quietly) ladders bread onto a board.
4 A Across the table, her husband CALLUM PASCOE (30s, broad, sunburnt) peels an orange in one unbroken spiral, offering her the whole bright ribbon of it.
5 D CALLUM: Thought you'd like it.
6 D ELOWEN: You remembered.
7 A ¶ She takes it.
8 A Smiles.
9 A The kettle sings.
10 A It is a good evening, the kind that asks nothing.
11 A ¶ Boots on the stair.
12 A FINN ARDEN (20s, oilskin, rain in his hair) fills the doorway with his hat in his hands.
13 A Behind him, the youngest, MAIRI PASCOE (12, braids), clutches the banister.
14 D FINN: Evening, Mrs. Pascoe.
15 A ¶ Elowen drops the orange peel.
16 A Callum looks at her, then at him, then at her again, and all three of them stand quite still.
17 D MAIRI: Mam? Why does Da have Finn's letters?
18 A ¶ Callum opens his coat.
19 A A bundle of envelopes tied with blue thread.
20 A Elowen's handwriting on every one.
21 D CALLUM: Sit down, both of you.
22 A ¶ Neither sits.
23 A The soup begins, quietly, to boil over.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01874.json
### SCENE s01874 | INT. COLD-STORAGE LOCKER, FISH MARKET - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE RHEA SOLOMON, ARTUR VOSS, NICO FERRANTE
1 A ¶ Frost on steel.
2 A A bare bulb.
3 A Three people in a room built for crates of herring.
4 A ¶ DETECTIVE RHEA SOLOMON (40s, parka) holds the door ajar with her boot.
5 A ARTUR VOSS (50s, soaked suit) stands over an open ice chest.
6 A NICO FERRANTE (20s, apron) sits on a pallet, knees up.
7 D SOLOMON: Nobody leaves. Hands where I can see them.
8 A ¶ Voss lifts the lid higher.
9 A Looks in.
10 D VOSS (to himself): Not here. Not here. Where is it.
11 D SOLOMON: Artur. Step back.
12 D VOSS: Nico, did you move it?
13 D NICO: No, sir.
14 A ¶ Voss turns.
15 A Too fast.
16 A Solomon's hand goes to her hip.
17 D SOLOMON: Last warning. Everyone calm down.
18 D NICO: I'm calm. I'm so calm.
19 A ¶ The compressor shuts off.
20 A Total quiet.
21 D VOSS (muttering): Forty years. Forty years.
22 A ¶ Voss pulls a hand from his coat.
23 A Phone, not a gun.
24 A He holds it up like a lantern.
25 A ¶ Nico bolts.
26 A Solomon spins.
27 A The door slams.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01875.json
### SCENE s01875 | EXT. DRIVE-IN SCREEN, ABANDONED - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): KES, WILLOW ODUYA, BASTIEN LEROUX
1 A ¶ A rusted frame stands over a field gone to goldenrod.
2 A KESTREL "KES" ODUYA (16) lies flat on the hood of a hatchback, shoes off.
3 A His sister WILLOW ODUYA (13) sits on the bumper, kicking gravel.
4 A Their cousin BASTIEN LEROUX (17) arrives on a bicycle, one wheel ticking.
5 A ¶ He drops the bike.
6 A She watches him come.
7 A Kes doesn't turn his head.
8 D BASTIEN: You said four.
9 D KES: It's four.
10 D BASTIEN: It's four-twenty.
11 D WILLOW: He's been lying there since three.
12 D KES: Thinking.
13 D BASTIEN: About what?
14 D KES: Nothing. That's the point of it.
15 D WILLOW: You said you'd teach me to drive today.
16 D KES: I said maybe.
17 D WILLOW: You said Saturday, and it's Saturday.
18 D BASTIEN: She's got a point.
19 D KES: Nobody asked you.
20 D BASTIEN: You're the one who asked me to come.
21 D KES (a long pause): I know.
22 D WILLOW: Is this about Dad?
23 D KES: No.
24 D WILLOW: It's about Dad.
25 D BASTIEN: Willow.
26 D WILLOW: What? He moved out in April. We're allowed to say it.
27 D KES: It's not about Dad. It's about the screen. They used to show movies on it. Did you know that? Mom said they'd park here and nobody watched. They'd just sit.
28 D BASTIEN: Sounds nice.
29 D KES: That's what I mean. It sounds nice.
30 D WILLOW: Can I still sit behind the wheel?
31 D KES (sitting up, finally): Come on. Keys are in the visor.
32 D BASTIEN: Do I get a turn?
33 D KES: After her.
34 D WILLOW: Ha.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01876.json
### SCENE s01876 | EXT. HOLLOW BELL TOWER, DROWNED CITY - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN SABLE VANTHA, DOBRINA WICK
1 A ¶ Moss on the stairs.
2 A Water laps the third floor.
3 A A bronze bell the size of a cart hangs cracked, humming faintly.
4 A ¶ QUEEN SABLE VANTHA (40s, armor of woven eel-leather) stands alone beside it, lantern at her feet.
5 A She touches the bell with a gloved hand.
6 A It hums louder.
7 D SABLE: Count the stairs. Tell me when I'm lying.
8 A ¶ Nobody answers.
9 A Water laps.
10 A She draws her sword.
11 D SABLE [CONT'D] (to the bell): I drowned your city. Say it to my face.
12 A ¶ The bell hums higher.
13 A Behind her, boots on the stairs.
14 A She spins, blade level.
15 A ¶ Her squire DOBRINA WICK (20s, soaked, nervous) hauls herself up with a coil of rope.
16 A Sable lowers the sword an inch.
17 D DOBRINA: Majesty. You said wait below.
18 D SABLE: I said wait. You never listen.
19 D DOBRINA: The water is rising, Majesty. Fast.
20 D SABLE: I know. Get behind me.
21 A ¶ Dobrina drops the rope; it uncoils over the edge and plunges.
22 A Sable lifts the lantern while Dobrina grabs her sleeve, and the flame bends sideways as the humming swells.
23 D DOBRINA: It's singing at us.
24 D SABLE: It sings when it's afraid.
25 D DOBRINA: Bells aren't afraid, Majesty.
26 D SABLE: This one drowned a city. Be afraid for it.
27 A ¶ A crack runs up the bell's flank with a sound like a shot.
28 A Sable steps forward, and Dobrina, after one terrified breath, steps with her, and together they lay both hands on the bronze.
29 D SABLE [CONT'D]: Whatever it asks, don't answer.
30 D DOBRINA: What will it ask?
31 D SABLE: Your name. Mine, it already has.
32 A ¶ The bronze goes silent.
33 A The water stops.
34 A Then, from inside the bell, very softly, a child's voice begins to count.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01877.json
### SCENE s01877 | INT. RAILWAY TELEGRAPH OFFICE, SILVER GAP, COLORADO - NIGHT (1893)
Detected names (may be incomplete or contain aliases): MABEL HOLLOWAY, REVEREND ISAIAH THORNE, SHERIFF GUS ARMBRUSTER, DISPATCHER, ROSALIND PEMBERTON
1 A ¶ A single oil lamp.
2 A Frost feathering the window glass.
3 A The key chatters on its brass base like a nervous bird, and a stove ticks in the corner, losing its argument with the cold.
4 A ¶ MABEL HOLLOWAY (30s, ink on her cuffs, hair pinned tight enough to hurt) sits at the desk, one hand on the key, the other flat on a stack of unsent forms.
5 A Across from her, REVEREND ISAIAH THORNE (60s, gaunt, black coat gone green at the seams) stands with his hat held against his chest as though it might be asked for.
6 D THORNE: It has been four hours.
7 D MABEL: I know how long it's been, Reverend.
8 D THORNE: Then you know the whole town is gathered at the church, waiting to be told something.
9 D MABEL: Then they'll wait.
10 A ¶ The key stops.
11 A She lifts her hand from it as if it had grown hot.
12 D THORNE: Miss Holloway. A telegram arrives from the mine company. You read it. And now you will not tell me what it says.
13 D MABEL: It isn't addressed to you.
14 D THORNE: It is addressed to forty families.
15 A ¶ Mabel looks at the paper under her palm.
16 A She does not move her hand.
17 D MABEL: It's addressed to the superintendent. He isn't here to receive it.
18 D THORNE: Then I will carry it to him.
19 D MABEL: He's in the shaft.
20 A ¶ Silence.
21 A The stove ticks.
22 A Thorne lowers his hat, slowly, onto the desk.
23 D THORNE: Ah.
24 A ¶ The door bangs open.
25 A SHERIFF GUS ARMBRUSTER (50s, mustache full of snow, a badge he never polishes) stamps in, breathing hard, and shoves the door shut with his shoulder.
26 D ARMBRUSTER: Lights are out on the whole ridge. Somebody's cut the line past the trestle.
27 D MABEL: It wasn't cut. It was buried.
28 D ARMBRUSTER: Buried?
29 D MABEL: Slide came down at nine. I felt the wire go slack under my hand.
30 D ARMBRUSTER: And you didn't think to say?
31 D MABEL: I said to Reverend Thorne. Four hours ago. He didn't ask what I meant.
32 A ¶ Thorne looks at the floor.
33 A Armbruster takes off his gloves one finger at a time, then looks at the stove, and then at the key.
34 D ARMBRUSTER: Can you raise anyone?
35 D MABEL: I've been trying since nine.
36 A ¶ She taps out a short burst.
37 A Nothing.
38 A She taps again.
39 A The key answers with a faint, dry, stuttering click, as though someone far away had leaned on the other end by accident.
40 A ¶ The three of them go still.
41 D DISPATCHER [V.O.] (thin, crackling, from the sounder): ...Silver Gap... Silver Gap, this is Division at Leadville... come back...
42 A ¶ Mabel seizes the key.
43 A Armbruster is at her shoulder in two strides.
44 A Thorne's lips begin to move, soundless.
45 D MABEL (tapping as she speaks): Division, this is Holloway at Gap. Line is restored. Repeat, line is restored.
46 D DISPATCHER [V.O.] (fading in): ...Holloway, we had you for dead. Report conditions...
47 D ARMBRUSTER: Tell him about the slide. Tell him about the mine.
48 D MABEL: I'm telling him.
49 D DISPATCHER [V.O.]: ...say again, conditions at Number Four shaft...
50 A ¶ Mabel's hand hesitates above the key.
51 A She glances at Thorne, then at the paper on the desk, then back at the key.
52 D THORNE: Read it to him, Miss Holloway.
53 D MABEL: Reverend--
54 D THORNE: Read it. Whatever it says. Better he hears it from us than from a stranger.
55 A ¶ Mabel slides the paper out from under her palm, finally.
56 A Unfolds it.
57 A Her eyes travel across it once.
58 A She folds it again.
59 D MABEL: Fourteen men underground at the time of the slide.
60 D ARMBRUSTER: Fourteen.
61 D MABEL: Superintendent among them. Rescue party left Leadville at six. They are expected at dawn.
62 A ¶ The door opens a third time.
63 A A gust, a flurry of snow, and ROSALIND PEMBERTON (20s, bare-headed, carrying a lantern and a baby wrapped in a shawl) stands on the threshold.
64 A Her hair is wet with melt, and her face is entirely composed, which is worse than if it were not.
65 D ROSALIND: Mr. Armbruster. They said you'd be here.
66 D ARMBRUSTER: Mrs. Pemberton. You shouldn't be out in this.
67 D ROSALIND: My husband is Number Four's night boss. I want to know if anyone has heard from Number Four.
68 A ¶ Nobody answers.
69 A Thorne takes a step toward her.
70 A Armbruster sets his gloves on the desk.
71 A Mabel keeps her eyes on the key.
72 D ROSALIND [CONT'D] (quietly): I've been in this town six years. I know what it sounds like when no one is answering.
73 D MABEL: Mrs. Pemberton, the line has only just come back. We know almost nothing.
74 D ROSALIND: Then tell me almost.
75 A ¶ Mabel stands, and for the first time her voice cracks and she does not hide it.
76 D MABEL: Fourteen men were below. The rescue party leaves Leadville at dawn. That's all that is known.
77 D ROSALIND: Fourteen.
78 A ¶ She looks down at the baby, who is asleep.
79 A She adjusts the shawl with great care.
80 D ROSALIND [CONT'D]: Then I will wait with the others. Reverend, will you take me to the church?
81 D THORNE (hat in hand again): It would be an honor.
82 D DISPATCHER [V.O.]: ...Gap, do you copy... Gap...
83 A ¶ Mabel sits.
84 A Her fingers find the key.
85 A Rosalind and Thorne go out into the snow, and Armbruster holds the door for them, watching their lantern shrink up the hill.
86 D ARMBRUSTER (to himself): Dawn.
87 A ¶ He shuts the door.
88 A The stove ticks.
89 A The key begins, once more, to chatter.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01878.json
### SCENE s01878 | INT. FUNERAL HOME EMBALMING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE ROUX, OSEI BANDELE, WALT KOWALCZYK, MOTHER ALDER, DEACON FIRMIN
1 A ¶ Tile.
2 A Drains.
3 A One steel table, covered.
4 A A radio hums static in the corner.
5 A ¶ DELPHINE ROUX (30s, mortician's apron) checks a clipboard.
6 A Her assistant, OSEI BANDELE (20s, headphones around his neck), eats crackers from the sleeve.
7 A At the door, WALT KOWALCZYK (60s, groundskeeper, flashlight), keeps his back to the wall.
8 A ¶ She frowns.
9 A The clipboard lists one body.
10 A The table is lumpy under the sheet, wrong somehow.
11 D DELPHINE: Osei. How many did we take in?
12 D OSEI: One. Mr. Alder.
13 D DELPHINE: Then why is it that big?
14 A ¶ He stops chewing.
15 A Walt's flashlight beam trembles on the floor.
16 D WALT: Don't lift it.
17 D DELPHINE: Walt.
18 D WALT: Don't. Please.
19 A ¶ She lifts it anyway.
20 A Underneath lies old MR. ALDER, gray, still.
21 A And on his chest, curled like a cat, sits a girl of about eight in a wet nightgown, eyes open, humming along with the radio.
22 D DELPHINE: Sweetheart, whose are you?
23 D OSEI: ^Oh no. No no no.
24 A ¶ The girl stops humming.
25 A Looks at her.
26 A Smiles with all her teeth.
27 D MOTHER ALDER [O.S.] (from the hallway): Marnie. Come away from there.
28 A ¶ The lights flicker.
29 A Walt drops the flashlight.
30 A It rolls to the drain and goes out.
31 A ¶ They back toward the door.
32 A He grabs the knob.
33 A It's already turning from the other side.
34 D DEACON FIRMIN [O.S.]: Open up. Please. She's followed me home too.
