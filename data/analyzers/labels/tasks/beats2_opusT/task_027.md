You segment screenplay scenes into DRAMATIC BEATS for a screenwriting tool (timeline, mood track, outline).

A dramatic beat is one exchange of action and reaction around a single intention: a character pursues something with
one tactic, and the beat ends when the tactic, the power balance, the subject or the situation changes (a reveal, an
entrance or exit, a decision, a turn in the argument, a new attempt after a failure). Scenes usually have 3-8 beats;
a short scene can have 1-2, a long one up to ~12.
- A beat usually spans SEVERAL paragraphs and dialogue blocks. Do NOT start a beat at every paragraph or speaker change.
- Keep the setup (setting and introductions before anything is at stake) inside the first beat unless it is long
  and self-contained.
- A beat may start in the middle of an action paragraph if the turn happens there.

For each beat give:
- "start": unit number where it starts (the first content unit starts beat 1)
- "type": the coarse beat type and "fine": the best phrase for it, from this list (coarse: [fine phrases]):
  arrives: ["arrives", "bursts in", "slips in", "returns", "is introduced", "makes an entrance", "shows up unannounced", "is ushered in", "drifts in"]
  leaves: ["leaves", "storms out", "slips away", "walks out on", "is sent away", "excuses themself", "is escorted out", "abandons", "exits quietly"]
  confronts: ["confronts", "interrogates", "corners", "calls out", "challenges", "stares down", "demands answers from", "presses", "faces off with"]
  accuses: ["accuses", "blames", "implicates", "points the finger at", "charges", "exposes", "condemns", "suspects", "turns on"]
  threatens: ["threatens", "intimidates", "warns", "blackmails", "issues an ultimatum to", "menaces", "holds at gunpoint", "coerces", "looms over"]
  attacks: ["attacks", "strikes", "grabs", "shoves", "ambushes", "fights", "wrestles", "shoots at", "lunges at"]
  defends: ["defends", "protects", "shields", "stands up for", "justifies themself to", "denies to", "pushes back on", "holds the line against", "covers for"]
  flees: ["flees", "runs", "escapes", "bolts", "retreats", "hides from", "evades", "scrambles away", "slips out"]
  hides: ["hides", "conceals something", "ducks out of sight", "pockets evidence", "covers up", "keeps a secret", "lies low", "masks a feeling", "plays dead"]
  searches: ["searches", "investigates", "snoops", "rummages", "tracks", "looks for", "examines", "questions witnesses", "scans the room"]
  discovers: ["discovers", "finds a clue", "realizes", "notices", "uncovers", "stumbles on", "recognizes", "pieces it together", "catches"]
  reveals: ["reveals", "drops a bombshell on", "shows", "unmasks", "lets slip to", "breaks news to", "comes clean to", "exposes a secret to", "presents evidence to"]
  confesses: ["confesses to", "apologizes to", "admits guilt to", "opens up to", "breaks down to", "unburdens to", "owns up to", "begs forgiveness from", "comes clean to"]
  lies: ["lies to", "deceives", "bluffs", "covers a story for", "misleads", "feigns innocence to", "plays along with", "cons", "fakes it with"]
  deflects: ["deflects", "dodges", "changes the subject on", "stonewalls", "brushes off", "evades", "stalls", "shrugs off", "plays dumb with"]
  persuades: ["persuades", "convinces", "pitches to", "bargains with", "negotiates with", "recruits", "seduces", "flatters", "talks down"]
  pleads: ["pleads with", "begs", "appeals to", "asks for help from", "implores", "bargains for mercy with", "pleads innocence to", "calls for", "prays"]
  comforts: ["comforts", "reassures", "consoles", "calms", "tends to", "embraces", "encourages", "forgives", "steadies"]
  bonds: ["bonds with", "reconnects with", "confides in", "shares a moment with", "flirts with", "trusts", "reminisces with", "thanks", "teams up with"]
  jokes: ["jokes with", "teases", "banters with", "lightens the mood for", "pranks", "plays with", "charms", "amuses", "riffs with"]
  mocks: ["mocks", "taunts", "belittles", "humiliates", "provokes", "insults", "patronizes", "needles", "dismisses"]
  decides: ["decides", "commits", "makes a plan", "chooses", "refuses", "gives an order", "resigns", "accepts", "changes course"]
  observes: ["watches", "listens to", "waits", "spies on", "studies", "eavesdrops on", "keeps watch", "hesitates", "takes it in"]
  works: ["works", "cooks", "cleans", "repairs something", "drives", "prepares", "packs", "writes", "goes through routine"]
- "actor": the character driving the beat (cue name) or null; "target": who it is aimed at, or null
- "mood": the TONE of the beat as an audience feels it, one of: calm, tender, playful, joyful, hopeful, awkward, melancholy, grief, tense, suspense, ominous, fear, hostile, chaotic, triumphant, bittersweet
- "intensity": 1 (faint) to 5 (overwhelming)
- "summary": 6-15 words, present tense, what happens in the beat (names, no quotes)

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00027.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05121 | INT. COUNTY PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): OFFICER DANA REYES, ELI COLLINS, ELLIS, SGT. HAYES, NORA
1 A ¶ Grey light through blinds.
2 A Rain on the window.
3 A A heater ticks in the corner.
4 A ¶ OFFICER DANA REYES sits behind a metal desk.
5 A In front of her, ELI COLLINS, 30, in a thrift-store jacket, hands flat on his knees.
6 A His younger brother ELLIS stands behind the chair, too close.
7 A ¶ The wall clock hums.
8 A The rain gets harder.
9 D DANA: Eli, you missed two check-ins.
10 D ELI: Bus broke down. I told the desk.
11 D DANA: The desk says nothing.
12 D ELLIS: He was with me. We walked.
13 D DANA: Ellis, you're not on the list for this meeting.
14 D ELLIS: I'm family.
15 D ELI: Ellis. Sit.
16 A ¶ Ellis doesn't.
17 A A cheap phone BUZZES on the desk.
18 A Dana checks it, frowns, puts it on speaker.
19 D SGT. HAYES [V.O.] (over the phone, crackling): Reyes? Hayes, Fort Dunmore. You've got Collins there?
20 D DANA: Sitting in front of me.
21 D SGT. HAYES [V.O.]: Tell him the review board turned down the appeal.
22 A ¶ Eli stares at the desk.
23 A Nothing moves in his face.
24 D ELLIS: What appeal? You said you were done with them.
25 D ELI: I never said that.
26 A ¶ NORA, a caseworker in a cardigan, leans in at the door with a folder.
27 D NORA: Dana, sorry, the ten-thirty is early.
28 D DANA: Give us a minute, Nora.
29 D ELLIS: They don't get to decide that. Not after what he did over there.
30 D SGT. HAYES [V.O.]: Son, nobody's denying what he did.
31 D ELI: Ellis, stop.
32 D ELLIS: They gave him a medal and a record!
33 D NORA: Sir, please lower your voice.
34 D DANA: Mr. Collins, sit down or I'll call it.
35 D ELLIS: Call it! Go ahead!
36 D SGT. HAYES [V.O.]: Is somebody shouting?
37 D ELI (rising, quiet): Everybody stop.
38 A ¶ The room freezes.
39 A The heater ticks.
40 A ¶ Eli looks at the phone like it's a person.
41 D ELI [CONT'D]: Sergeant. Eleven men walked out of that valley because I did what I did. You remember the number. You signed the paper.
42 D SGT. HAYES [V.O.]: I remember.
43 D ELI: Then you know what I'm asking for isn't mercy. It's a pen.
44 D SGT. HAYES [V.O.]: The pen isn't mine to lift.
45 D ELI: Then whose is it?
46 A ¶ Nobody answers.
47 A Rain.
48 A The line hisses.
49 A ¶ Ellis kicks the chair over.
50 A It CRASHES against the wall.
51 A ¶ Dana is on her feet.
52 A Nora backs into the hallway.
53 D ELLIS (shaking): Fifteen months of this. Fifteen months of signing in like a dog.
54 D ELI: Ellis.
55 D DANA: That's enough. Both of you.
56 A ¶ Eli puts a hand on his brother's chest.
57 A Ellis is breathing hard.
58 D ELI (soft): Go wait outside.
59 A ¶ Ellis goes.
60 A The door shuts.
61 A The blinds rattle.
62 A ¶ Eli sets the chair upright.
63 A Sits.
64 A Folds his hands.
65 D ELI [CONT'D]: Sorry about that. What do you need me to sign?

### SCENE s05122 | INT. NORTHSIDE RECORDING STUDIO - NIGHT
Detected names (may be incomplete or contain aliases): TIM, TOM, ENGINEER
1 A ¶ A small vocal booth.
2 A Foam on the walls.
3 A A red light is on.
4 A ¶ TIM, 28, boxer, stands at the microphone.
5 A He wears a hooded training jacket.
6 A His hands are wrapped.
7 A He holds a paper with lyrics, but he does not look at it.
8 A ¶ Behind the glass, his trainer TOM, 55, sits next to a young ENGINEER with big headphones.
9 A A sleepy bulldog lies under the mixing desk.
10 D ENGINEER (through speaker): Okay. Take four.
11 A ¶ Tim nods.
12 A Music starts, a heavy beat.
13 A He opens his mouth.
14 A Nothing comes.
15 A ¶ The music stops.
16 D TOM (through speaker): It's okay. Again.
17 D TIM: Again.
18 A ¶ The beat starts.
19 A Tim says two words, then stops.
20 A He rubs his wrapped knuckles.
21 D TOM (through speaker): You have the words?
22 D TIM: I have the words.
23 D TOM: Then say them.
24 A ¶ Tim looks at the paper.
25 A Folds it.
26 A Puts it in his pocket.
27 D TIM: Is not a song. It is only noise.
28 D TOM: Tomorrow forty thousand people hear this noise when you walk to the ring.
29 D TIM: Yes. I know.
30 A ¶ The Engineer looks at his screen.
31 A Very busy suddenly.
32 A ¶ Tom takes off his headphones and goes to the booth.
33 A He opens the door.
34 A The bulldog lifts its head, then lays it down again.
35 A ¶ Tom stands close.
36 A He fixes Tim's collar.
37 A His hands are not quite steady.
38 D TOM: Your father had the same face. Before his last fight.
39 D TIM: You said he was not afraid.
40 D TOM: I said many things.
41 A ¶ Tim looks at him a long time.
42 A Then he laughs once, short.
43 D TIM: You are a bad liar, Tom.
44 D TOM: I am a good trainer.
45 D TIM: Same thing, in your case.
46 A ¶ Tom tries to smile.
47 A It doesn't hold.
48 A He goes back to the control room.
49 A Sits.
50 A Puts on the headphones.
51 D TOM [CONT'D] (through speaker): From the top. Do not think. Just talk.
52 A ¶ The beat.
53 A Tim closes his eyes.
54 D TIM (quietly, to the beat): He is waiting at the door. He is waiting for me.
55 A ¶ Tom looks down at his own hands.
56 D TIM [CONT'D] (a little louder): Let him wait.
57 A ¶ The Engineer stops pretending to be busy.
58 A He is looking at Tim now.
59 A ¶ The red light stays on.

### SCENE s05123 | INT. NEONARENA GAMING TOURNAMENT - FINALS STAGE - DAY
Detected names (may be incomplete or contain aliases): ZED, LIA, OMAR, PRIYA
1 A ¶ Lights flash purple and green.
2 A A crowd of four thousand is screaming.
3 A Somewhere a commentator shouts about a "clutch play" and the huge screen above shows a frozen game of dragons, and under the stage a smoke machine is making too much smoke, and in the booth ZED the team captain, LIA the sniper, OMAR the coach and PRIYA the substitute are already sitting down in matching orange jerseys.
4 D ZED (adjusting headset, whispering to himself): Okay okay okay we are fine
5 D LIA (to the group, loudly): Everybody is hearing me? Mic check one two.
6 D OMAR (thumbs up, chewing a protein bar): Loud and clear
7 D PRIYA (to Lia, pointing at her screen): You have the wrong crosshair she told us yesterday
8 D LIA (not looking away from the screen): She is not the coach. Omar is the coach
9 D OMAR (mouth full): Thank you Lia
10 A ¶ The crowd roars.
11 A Cold air from the vents.
12 A A drone camera hovers near the booth like a very expensive fly.
13 D ZED (to the whole team, hands shaking): Strategy is simple. We go left. Always left.
14 D PRIYA (raising hand): Left was how we lost the semi final
15 D ZED (ignoring her, muttering): Left is good. Left is good.
16 D OMAR (to Zed, gently): Maybe also some right
17 D ZED (snapping): No right!
18 A ¶ The announcer calls their team name.
19 A It is mispronounced.
20 A The audience laughs.
21 D LIA (to herself, quiet): Please not the live stream. Please not my mother watching
22 D PRIYA (to Lia, leaning over): Your mother is watching. She is in the third row with a sign
23 D LIA (horrified, covering her face): She has a sign
24 D OMAR (to everyone, standing): Okay listen. One game. Nobody dies. We are here for the free pizza anyway
25 D ZED (to Omar, hopeful): Is there pizza?
26 D OMAR (pointing off): There is always pizza
27 D PRIYA (softly, to no one): Then I am already winning
28 A ¶ The countdown begins.
29 A A big red three.
30 A Two.
31 D LIA (eyes narrowed, whispering): Left.
32 D ZED (whispering back): Left.
33 D PRIYA (under her breath): Right.
34 A ¶ One.
35 A A horn BLARES.

### SCENE s05124 | INT. VERTEX ARENA - BACKSTAGE CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): NELL, ROOK, NEIL, BRAM
1 A ¶ Humming fluorescents.
2 A Distant crowd.
3 A A muffled roar.
4 A ¶ Then nothing.
5 A ¶ NELL, 30s, hoodie, lanyard that says STAFF.
6 A She walks fast.
7 A Doesn't look up.
8 A ¶ Behind her, the sound of a door.
9 A Latching.
10 A ¶ She stops.
11 A ¶ Silence.
12 A ¶ Her earpiece CRACKLES.
13 D ROOK [V.O.]: Nell. Status.
14 D NELL (low): Corridor C. Nobody.
15 D ROOK [V.O.]: Then why are you whispering.
16 A ¶ She doesn't answer.
17 A Listens.
18 A ¶ Dripping.
19 A Somewhere, a pipe.
20 A ¶ Nothing else.
21 D NELL (beat): Something's wrong.
22 D ROOK [V.O.]: Vault room is thirty metres. Keep walking.
23 A ¶ She keeps walking.
24 A Her shoes squeak on the concrete.
25 A ¶ Squeak.
26 A Squeak.
27 A ¶ Stop.
28 A ¶ The squeaking continues.
29 A Two steps behind her.
30 A ¶ She turns.
31 A ¶ Empty corridor.
32 A A door, slightly open.
33 A ¶ A shadow moves inside it.
34 D NELL (barely audible): Neil?
35 A ¶ NEIL, 30s, same hoodie, steps out.
36 A Sweating.
37 A Holding a drill case.
38 D NEIL: You're late.
39 D NELL: You're early.
40 D NEIL (tight): I'm here since six. I was in the ceiling.
41 A ¶ She stares at him.
42 A He is smiling.
43 A It's wrong.
44 D ROOK [V.O.]: Nell? Who are you talking to?
45 D NELL (into the earpiece): Neil's here.
46 D ROOK [V.O.] (pause): Neil is in the van.
47 A ¶ Silence.
48 A ¶ Her phone.
49 A Dead.
50 A ¶ She looks up.
51 A Neil's smile fades.
52 A He glances at something behind her.
53 A ¶ A heavy footstep.
54 A ¶ A guard.
55 A BRAM, 40s, radio on his belt, hand resting on a holster.
56 A He stands under the exit sign.
57 D BRAM: Evening.
58 A ¶ Nobody moves.
59 A ¶ The overhead light FLICKERS.
60 D BRAM [CONT'D]: Which one of you is not on my list?
61 A ¶ The light dies.
62 A ¶ Darkness.
63 A ¶ A zipper.
64 A A click.
65 A ¶ Then one gunshot.

### SCENE s05125 | INT. STATE PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): GLORIA PRUITT, HARLAN, WENDELL, PETE, FRANK
1 D GLORIA [V.O.]: Eleven years running parolees. You learn that nobody ever comes in on time, and nobody ever leaves happy.
2 A ¶ GLORIA PRUITT, 50s, reading glasses on a chain, sits at a desk stacked with folders.
3 A A wall clock TICKS.
4 A A fluorescent tube BUZZES.
5 A ¶ HARLAN, 40s, orange tie, sits across from her holding a paper cup.
6 A Next to him, WENDELL, 40s, wears the same tie.
7 D GLORIA: You two are brothers?
8 D HARLAN: Twins.
9 D WENDELL: Fraternal.
10 D GLORIA [V.O.]: Both released the same morning. Both wearing the same tie. The state, in its wisdom, issued one tie per cell.
11 A ¶ PETE, the clerk, sticks his head in the door.
12 D PETE: Ms. Pruitt, your husband's on line two.
13 A ¶ The phone on her desk BUZZES.
14 A She picks it up.
15 D FRANK [V.O.] (on the phone): Did you eat? You didn't eat.
16 D GLORIA: I'm working, Frank.
17 A ¶ Harlan sips from the cup.
18 A It is empty.
19 A He keeps sipping anyway.

### SCENE s05127 | INT. GRAND MERIDIAN BALLROOM - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, WAITER, TEENAGERS, LEO MARCHETTI, LEON
1 A ¶ Warm lights.
2 A A DJ plays a slow song.
3 A A WAITER carries a tray of champagne past two TEENAGERS filming each other on their phones.
4 A ¶ LEO MARCHETTI, 30s, tux, bow tie crooked, stands near the cake table.
5 A Sharp eyes.
6 A Dead calm.
7 A ¶ In his ear, a tiny flesh-coloured bud.
8 D LEO (murmuring, lips barely moving): In position. Cake table, east side.
9 D LEON [V.O.] (in earpiece, from the van): Copy. Vault camera loops in ninety seconds. On my mark.
10 D LEO: Say again?
11 D LEON [V.O.]: Ninety. Eighty-nine.
12 A ¶ CLOSE ON Leo's wrist.
13 A A silver watch.
14 A Seconds sweeping.
15 A ¶ ANGLE ON the bride, laughing, her diamond choker catching the light.
16 A ¶ WE SEE a tall man in grey, her uncle, drift toward the exit.
17 D LEO: Subject moving. Door three.
18 D LEON [V.O.]: Hold position. Do not engage.
19 A ¶ A dog barks.
20 A A small terrier in a bow tie trots past the cake.
21 D LEO (under his breath): Nobody said there'd be a dog.
22 D LEON [V.O.]: Sixty. Fifty-nine.
23 A ¶ The waiter stops beside Leo.
24 A Offers a glass.
25 D WAITER: Champagne, sir?
26 D LEO (smiling): Please.
27 A ¶ He takes it.
28 A Drinks.
29 A Doesn't blink.
30 D LEON [V.O.]: Thirty. Twenty-nine.
31 A ¶ BACK TO SCENE
32 A ¶ The song swells.
33 A The bride lifts her hands to the crowd.
34 D LEON [V.O., CONT'D]: Now.
35 A ¶ The lights die.
36 A ¶ Darkness.
37 A Screams, then laughter, then a drumroll from the DJ.
38 A ¶ Leo is already gone.

### SCENE s05128 | INT. NIGHT BUS 47 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): ASH, BRI, TEO, DRIVER
1 A ¶ Rain streaks the windows.
2 A Sodium lights slide past.
3 A The engine drones.
4 A ¶ ASH, 17, headphones around their neck, sits in the back seat with their phone glowing in both hands.
5 A Across the aisle, BRI, 17, hoodie up, chews her thumbnail.
6 A Two rows ahead, TEO, 18, stares out at nothing.
7 A ¶ Up front, the DRIVER hums along to the radio.
8 A A sleeping TEENAGER in a school jacket leans against the window.
9 A ¶ Dead quiet, until Bri's phone BUZZES.
10 A ¶ INSERT - PHONE SCREEN
11 A ¶ "mom: where r u. answer me."
12 A ¶ BACK TO SCENE
13 D BRI (whispering): She's literally gonna kill me.
14 D ASH: So answer.
15 D BRI: And say what? "Hi Mom, I'm on a bus to a city I've never been to"?
16 D TEO (turning around): You guys could keep it down.
17 D ASH: Nobody asked you, Teo.
18 D TEO: I'm just saying, the driver.
19 D BRI: He can't hear us.
20 D ASH: He has a radio.
21 D TEO: He has ears.
22 D BRI: Ash, did you tell him about the video?
23 D ASH: No, I told no one. They told me.
24 D TEO: Who told you what?
25 D BRI: Stop, you two are being so loud.
26 D ASH: We're not loud, you're loud.
27 D TEO: You're both loud.
28 A ¶ The bus brakes hard.
29 A Everyone lurches.
30 A The sleeping teenager wakes, looks around, falls back asleep.
31 A ¶ This is the last time the three of them will be calm.
32 D ASH (softer): Hey. I don't think we're on the route anymore.
33 D BRI: What?
34 D ASH: Look. That's the river. We should be going north.
35 A ¶ Teo stands.
36 A The Driver's humming has stopped.
37 A ¶ The radio dies.
38 A Only the rain.
39 A ¶ The Driver's eyes find them in the rear-view mirror.
40 D DRIVER: Sit down, kids.

### SCENE s05130 | INT. MOVING VAN - CARGO BAY - DAY
Detected names (may be incomplete or contain aliases): SYNERGY OFFSITE, HOLLIS, PRIYA, TOMASZ, WENDELL, DISPATCH, RADIO, MARISOL
1 A ¶ Rain hammers the roof.
2 A A gray Tuesday smears past the rear windows.
3 A ¶ CLOSE ON a laminated sign taped to a wardrobe box: "SYNERGY OFFSITE - DO NOT SHAKE."
4 D HOLLIS (checking a clipboard, not looking up): Team, this relocation is a growth opportunity. Please buckle your milk crates.
5 D PRIYA (wedged between two filing cabinets, whispering): Hollis, we're sitting on the furniture of a company that fired us this morning.
6 A ¶ ANGLE ON the dashboard window behind the cab partition.
7 A The wipers beat like a slow pulse.
8 D TOMASZ (gripping the wheel, eyes on the mirror): I'm just the driver. Nobody told me the passengers were also the cargo.
9 A ¶ WE SEE a ceiling bulb swinging, throwing light across six tired faces.
10 D WENDELL (slowly peeling the tape off his own mouth): I signed the NDA. I did not sign the van.
11 D DISPATCH [V.O.] (over the radio, crackling): Unit Nine, confirm headcount. HR says there should be zero employees aboard.
12 A ¶ INSERT - THE RADIO, its red light pulsing.
13 D MARISOL (standing, knocking over a lamp): Zero? Hollis, what did you tell them about us?
14 D HOLLIS (clutching the clipboard to his chest): I told them we were assets.
15 A ¶ BACK TO SCENE
16 D PRIYA (shoving the cabinet, screaming): Assets get depreciated!
17 D TOMASZ (slamming the brakes, everything crashing forward): Everybody out! Now!

### SCENE s05132 | EXT. CAR PARK, SEAFRONT - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): PAULINE ABBOTT, JUNE, GRAHAM LOCKE
1 A ¶ A battered Citroën van with a hatch cut into its side, painted the colour of weak custard.
2 A "NAN'S CHIPS" is lettered above the hatch.
3 A Drizzle.
4 A Gulls.
5 A The sea has gone somewhere else for the afternoon.
6 A ¶ Inside, PAULINE ABBOTT, 60s, wiry, hair under a net, watches the fryer as if it owes her money.
7 A Her grandchild JUNE, 17, they/them, ink on their knuckles, wipes a counter that is already clean.
8 D PAULINE: You've got that look.
9 D JUNE: What look?
10 D PAULINE: The one your mother had before she told me about Leeds.
11 A ¶ The hatch RATTLES.
12 A A man in a good coat, GRAHAM LOCKE, 50s, leans in, politely lost.
13 D GRAHAM: Sorry. Is this Pauline's?
14 D PAULINE: Depends who's asking.
15 D GRAHAM: Council. Licensing. It's, well, it's about the pitch.
16 A ¶ The fryer HISSES.
17 A Nobody speaks.
18 A This is the afternoon Pauline will remember when she is asked what went wrong.
19 D JUNE (quietly): They've already sold it, Nan. Haven't they.
20 D GRAHAM: I wouldn't say sold.
21 D PAULINE: Lovely. Chips, Graham? On the house.
22 A ¶ Her smile is perfectly fixed.
23 A She drops the basket into the oil.
24 A It SPITS.
25 D GRAHAM: That's very kind, but I really shouldn't.
26 D PAULINE: Oh, I insist.
27 D JUNE: Nan.
28 D PAULINE: It's only chips, June.
29 A ¶ A pause.
30 A The gulls get on with it.
31 A Graham takes the paper cone and, after a moment, eats one.
32 D GRAHAM: Bit good, this.
33 D PAULINE: Forty years.

### SCENE s05133 | INT. RIDESHARE CAR - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DEV PATEL, HOODIE GUY, NADIA, LUKE, SLIDES
1 A ¶ 2:07 AM on the dashboard clock.
2 A DEV PATEL, 30s, a driver with four stars and a lanyard from his real job still around his neck, steers through empty wet streets while a HOODIE GUY in the back seat hugs a gym bag, and a woman in the passenger seat, NADIA, 20s, who ordered the ride and keeps checking her phone, says nothing, and the app chirps, and Dev smiles at the mirror like a man who has read a lot of tips about conversation.
3 D DEV: Big night? Or, early morning, I guess.
4 D HOODIE GUY: Just drive.
5 A ¶ Dev's phone, mounted on the dash, lights up with a Slack message ON SCREEN: "#ops-standup - Brenda: reminder, Q3 retro at 9.
6 A Cameras ON please."
7 D DEV (muttering): Cameras on. At nine. Sure.
8 A ¶ Nadia's phone rings.
9 A She answers on speaker, and a man's voice comes through, thin and furious.
10 D LUKE [V.O.]: Where are you? You said you'd have it by two.
11 D NADIA: We're coming. Stop calling.
12 D LUKE [V.O.]: Is that him in the car? Is that the guy?
13 A ¶ The Hoodie Guy lowers his hood.
14 A He is maybe nineteen, scared, and holding the bag as though it might go off, and the streetlights flick over all three of them in turn, orange and then dark, until Dev finally understands that this is not a ride.
15 D NADIA (to Hoodie Guy): Show him it, Marcus.
16 A ¶ Marcus unzips the bag.
17 A Stacks of cash, banded.
18 A Dev brakes hard, the car SLIDES, the phone clatters from its mount.
19 A ¶ This is the last time any of them will be strangers.
20 D DEV: I have a daughter. I have a performance review.
21 D LUKE [V.O.] (shouting, tinny): Somebody say something!

### SCENE s05134 | EXT. ABANDONED SKATE PARK - NIGHT
Detected names (may be incomplete or contain aliases): MAYA, SURVIVORS, JALEN
1 A ¶ Cracked concrete bowls.
2 A A chain-link fence sags.
3 A Sleet has started, thin and mean, and one flickering streetlight buzzes over the empty ramps.
4 A ¶ MAYA, 16, short, braids, a thrifted puffer jacket two sizes too big, stands at the lip of the biggest bowl.
5 A Her phone glows in her hand.
6 A Screen reads: "grp chat: SURVIVORS (14)".
7 A Only one other name is still green.
8 A ¶ A shape climbs over the fence.
9 A JALEN, 17, tall, a hoodie soaked black, a flashlight in his teeth.
10 A He drops it into his palm.
11 D JALEN (waving, shaky): Okay. So it's us. Everyone else left the chat.
12 D MAYA (not moving): You're taller than your pfp.
13 D JALEN (laughing, breath fogging): You're real. Like, actually real.
14 A ¶ Her phone BUZZES.
15 A A new message from someone neither of them knows: "dont go home."
16 D MAYA (holding up the screen): Did you send this?
17 D JALEN (reading, stepping back): No. Maya, no. I only got the group link like an hour ago.
18 A ¶ The streetlight DIES.
19 A Darkness takes the park, and the sleet sounds louder.
20 A Somewhere past the fence a car door SLAMS.
21 D MAYA (whispering, grabbing his sleeve): Turn the flashlight off.
22 D JALEN (clicking it off, voice cracking): I thought this would be, like, cute. A meetup.
23 D MAYA (sliding down behind the concrete): Yeah. Me too.
24 A ¶ The phone BUZZES again, brighter in the dark.
25 A She covers it with her palm.
26 D JALEN (crouching beside her): Do you trust me?
27 D MAYA (a beat, then barely): I trust you more than the chat.
28 A ¶ Footsteps crunch on gravel, slow, getting closer.

### SCENE s05135 | INT. LINCOLN HIGH SCHOOL - GIRLS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): NURSE, TESS OKAFOR, THE NURSE, KIRA, BEA, MARGARET HADLEY
1 A ¶ The third-period bell has long since stopped ringing, and the room has settled into that fluorescent hush particular to school plumbing, where every drip is audible and nothing smells quite clean.
2 A THE NURSE, a woman in her fifties with a lanyard she keeps touching as though to confirm she is who it says, kneels beside the farthest stall, speaking in the low, even voice she uses on frightened freshmen, while four girls pretend not to look and a fifth, TESS OKAFOR, sixteen, sits against the tiles with her knees up and her face the colour of paper, insisting for the third time that she just skipped breakfast.
3 A ¶ ON PHONE: "tess where r u" / "ms hadley is looking for u" / "u ok??"
4 D THE NURSE: That's fine, sweetheart. Skipping breakfast is a very normal thing. Can you let me see your hand?
5 A ¶ Tess hides it in her sleeve.
6 A In the mirror, the girl called KIRA, braces, bitten nails, studies the nurse's face, and it is Kira who notices the pale line of tape on the inside of Tess's elbow, a tape that is not from any school infirmary.
7 D KIRA (low): She's been doing the thing again, hasn't she.
8 D BEA: No way.
9 D KIRA: Bea, look at her arm.
10 D BEA: We said we weren't going to tell.
11 D KIRA: Tell them it's not her fault!
12 D BEA: Don't tell them anything!
13 A ¶ The nurse stops.
14 A She looks up at the girls, then down at the girl, and for a long moment the only sound is a faucet losing slowly to gravity.
15 D THE NURSE (softly): Which one of you is Ms. Hadley's daughter?
16 A ¶ Nobody answers.
17 A Then, from the doorway, a woman in a cardigan, MARGARET HADLEY, forty, stands with her car keys still in hand.
18 D MARGARET (very calm): That would be me. Hello, Tess.
19 D NURSE: Margaret, I think we should call an ambulance.
20 D TESS (finally, in a whisper): Mom, I'm sorry.

### SCENE s05136 | INT. SUNSET SOUND STUDIO - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DAVID KESSLER, DAVID KESSEL, KIM, KIP, RHONDA
1 A ¶ Egg-crate foam, a mixing desk the size of a pool table.
2 A Beyond the glass, a vocal booth with a single microphone.
3 A ¶ DAVID KESSLER, 50s, producer, sits at the desk.
4 A Next to him is DAVID KESSEL, 20s, an intern who has been mistaken for him all week.
5 A KIM, singer, 30s, stands in the booth.
6 A Her brother KIP, 30s, leans on the wall of the control room eating a sandwich nobody offered him.
7 A Over the talkback, the engineer, RHONDA, 40s, speaks from somewhere in the building.
8 D RHONDA [V.O.]: Is everyone rolling or is it just me
9 D DAVID KESSLER (pressing the talkback, patient): Kim, honey, we are on take forty-one. I'm going to say this one time with love. The song is about heartbreak. You sound like you're ordering a coffee.
10 D KIM (through the glass): Maybe I am ordering a coffee. Maybe that's the heartbreak. Maybe heartbreak is mostly just standing in a line.
11 D KIP (mouth full): That's actually good. You should say that on the record.
12 D DAVID KESSEL (raising a hand): Sorry, hi, I think that's David's note to give. Mine. Not mine. His.
13 D DAVID KESSLER (not turning): Kessel, you can't be both.
14 D DAVID KESSEL (beat): I'm just saying I wrote the bridge.
15 D KIM (into the mic): He wrote the bridge, Kip wrote the chorus, and I wrote the part where I leave.
16 D RHONDA [V.O.] (dry): Great news the part where you leave is cheaper to mix
17 D KIP (putting the sandwich down, standing): Kim. Are you leaving us or the song?
18 D KIM (a long beat): I don't know. Roll the tape.
19 D DAVID KESSLER (quietly, to Kessel): Press record.
20 D DAVID KESSEL (pressing it, trembling): Rolling. Take forty-two.

### SCENE s05138 | INT. MINICAB - MOVING - 2 A.M.
Detected names (may be incomplete or contain aliases): BARRY QUILL, THE WOMAN, PHONE, QUARTET
1 A ¶ A tired Toyota Prius, smelling of pine air freshener and last Friday.
2 A Rain on the Westway.
3 A The driver, BARRY QUILL, 50s, cardigan, thermos in the cup holder, has the radio on low, playing something regrettable from 1987.
4 A ¶ In the back, THE WOMAN, 30s, immaculate in a camel coat that has never seen a bus, looks out of the window and says nothing.
5 A Beside her sits a violin case, which Barry noticed and chose not to mention.
6 A ¶ ON PHONE (her screen): "Two minutes out.
7 A Bring the case.
8 A Don't be clever."
9 D BARRY: Dreadful night for it.
10 D THE WOMAN: For what?
11 D BARRY: Whatever you're doing. Orchestra, is it?
12 D THE WOMAN: Something like that.
13 A ¶ Her phone shows a second message: "Gate B. Quartet's in position."
14 A Barry drives on, serene as a vicar.
15 D BARRY: I did a gig once. Trombone. Fell off the stage at a Rotary dinner. Terribly embarrassing.
16 D THE WOMAN (a very small smile): I'm sure you recovered.
17 A ¶ They turn into the gates of the Hatton Auction House, shuttered and dark.
18 A Four figures in black coats wait beneath the awning: THE QUARTET, holding what are almost certainly instruments.
19 D THE QUARTET (in unison, softly): Evening, Mrs Vance.
20 D THE WOMAN (to Barry, handing over a fifty): Keep it, Mr Quill.
21 D BARRY (frowning): I don't recall telling you my surname.
22 A ¶ She opens the violin case.
23 A It is empty, lined in velvet, exactly the size of a small painting.
24 D BARRY [CONT'D]: Ah.
25 D THE WOMAN (opening the door): Wait here, would you? There's a good chap.
26 A ¶ She leaves.
27 A Barry looks at the thermos, at the rain, at the radio.
28 A Then, quite calmly, he turns the engine off.

### SCENE s05139 | INT. FARMHOUSE-STYLE KITCHEN, SUBURBAN HOME - NIGHT
Detected names (may be incomplete or contain aliases): GERALD FINCH, OLIVE, TEDDY, ROSIE, DOT WALLACE, CALLER, ELEANOR
1 A ¶ 1974.
2 A The lights went out an hour ago and the house has not yet decided whether to be afraid.
3 A Candles, mismatched, stand on the Formica.
4 A Wind pulls at the storm door.
5 A Somewhere on the street a transformer pops, and the dark swallows the hum of the refrigerator whole.
6 A ¶ A woman in her thirties, THE WOMAN, stands at the sink in a quilted robe, scrubbing a pot that is already clean.
7 A Her husband, GERALD FINCH, forty, sits at the table, his tie loosened, pretending to read a seed catalogue by candlelight.
8 A At the far end, ruffling a pack of cards with great concentration, is his mother, OLIVE, seventy.
9 A Two children, TEDDY, 12, and ROSIE, 8, sit cross-legged on the linoleum, whispering over a flashlight.
10 A The sixth, a neighbour, DOT WALLACE, fifties, in a headscarf and curlers, has arrived to borrow a candle and stayed.
11 A ¶ The wall phone rings.
12 A Everyone freezes.
13 A It is the only thing in the house with power.
14 D THE WOMAN (drying her hands): I'll get it.
15 A ¶ She lifts the receiver.
16 A A man's voice, thin and fast, fills the kitchen.
17 D CALLER [V.O.]: Eleanor? It's Frank. Is Gerald there? Tell him the hospital called.
18 A ¶ The Woman, who is named Eleanor, turns the receiver away from her chest.
19 A Gerald does not look up from the catalogue.
20 A The page has not turned in twenty minutes.
21 D GERALD: Who was it?
22 D ELEANOR: Frank.
23 D OLIVE: Don't you tell him yet.
24 D DOT: Oh, Eleanor, don't.
25 A ¶ ON PHONE: a pencilled note in the margin of the telephone pad, in Gerald's handwriting: "Tues.
26 A 3pm.
27 A Dr. Prentiss."
28 A ¶ Eleanor sets the receiver on the counter.
29 A Teddy lowers the flashlight.
30 A Rosie, who is eight and misses nothing, takes her brother's hand.
31 A The wind rattles the door again.
32 A In the little light, Gerald folds the catalogue shut, very precisely, and lays his palm flat on its cover as if to hold it down.
33 D GERALD (finally): Put the kettle on, love. The gas still works.
34 A ¶ She does.
35 A The flame blooms blue, enormous, the brightest thing in the house.

### SCENE s05140 | INT. STORAGE UNIT 214 - DAY
Detected names (may be incomplete or contain aliases): PRIYA, TEO, MOVERS, WALT, CREAKING
1 A ¶ HANDHELD.
2 A The camera wobbles down a corridor of orange roll-up doors.
3 A Fluorescent hum.
4 A Priya Nair, 30s, holds the lens on herself, then swings it to a padlocked unit.
5 D PRIYA (to camera): Day three of the interviews. Everyone says Mr. Okafor's unit is just old furniture.
6 A ¶ An old man in a faded field jacket stands by the door, keys in hand.
7 A Not hostile.
8 A Not welcoming either.
9 A ¶ ON CAMERA: the old man rubs his thumb over the padlock.
10 D OLD MAN: Furniture. Yes. My wife's chairs.
11 D PRIYA: Can you say your name for the record?
12 D OLD MAN: Is it recording now?
13 A ¶ The phone in Priya's pocket BUZZES.
14 A She checks it, winces.
15 D PRIYA: Sorry. My producer.
16 A ¶ She thumbs the speaker on.
17 A Her phone crackles.
18 D TEO [V.O.] (tinny): Are you inside yet? Legal wants the release signed before you open anything.
19 D PRIYA: He signed it. We're fine.
20 D TEO [V.O.]: Priya, listen. The records came back. That name, Okafor, it's not --
21 A ¶ The call DROPS.
22 A Priya stares at the screen.
23 A Three bars.
24 A Nothing.
25 A ¶ The old man slides the key in.
26 A The lock CLACKS open.
27 A The door RATTLES upward on its track.
28 A ¶ Inside: two chairs.
29 A A lamp.
30 A And a dozen olive-green crates stacked to the ceiling, each stencilled with a unit patch.
31 D OLD MAN [CONT'D]: My name is Walt Okafor. I was never in the unit I told you about.
32 A ¶ Behind them, THE MOVERS, three men in grey coveralls, wheel a dolly down the corridor and stop dead.
33 D THE MOVERS (together): Mr. Okafor?
34 D WALT: Not yet, boys.
35 D PRIYA: Walt, what is in those crates?
36 D WALT: Open one.
37 A ¶ The camera drops.
38 A We hear only her breath, a lid CREAKING, and then silence.
39 D WALT [CONT'D]: They are not mine. I only kept them.
40 D PRIYA (whispering): These are names.
41 D WALT: Four hundred and six.
42 D PRIYA: Walt, stop. WALT ^ I'm done lying.
43 A ¶ The corridor lights FLICKER and go out.

### SCENE s05141 | INT. GOLDEN LOTUS NAIL SALON - AFTERNOON
Detected names (may be incomplete or contain aliases): QUINN, MARISOL, DOLORES
1 A ¶ The salon is narrow and too warm, a corridor of pedicure chairs under a wall of lacquer bottles arranged by colour like a slow sunset.
2 A Acetone hangs in the air, sweet and chemical, and a muted television in the corner plays a court reporter's silent mouth over footage of a courthouse.
3 A Beneath it all runs the steady tick of a wall clock that is four minutes fast.
4 A ¶ Marisol Vega, 40s, a public defender in a creased navy suit, sits with her hands spread on the table like something she is trying to keep from escaping.
5 A She has not slept.
6 A The exhaustion has made her very still, and stillness is how she has learned to look calm.
7 A ¶ Across from her, doing her nails, is Quinn Alder, 20s, who wears a name tag that says QUINN and a quiet, careful expression.
8 A Quinn is nonbinary, uses they and them, and has a way of listening that makes people say more than they planned.
9 A They file one nail, then another, never rushing.
10 A ¶ By the door, a WOMAN in a grey trench coat, sunglasses still on despite the indoors, has taken the waiting chair.
11 A She holds a paper cup of tea she does not drink.
12 A She has been there eleven minutes.
13 A Nobody has asked what she wants.
14 D QUINN: You have court tomorrow?
15 D MARISOL: Closing arguments. If I'm honest I'd rather be anywhere else.
16 D QUINN: Then why here?
17 D MARISOL: Because last night I realised my hands were shaking and I didn't want the jury to see it.
18 A ¶ Quinn smiles, small, and lifts her index finger to the light.
19 D QUINN: They won't. Not with this colour.
20 A ¶ The woman in the trench coat sets down her tea.
21 A The cup makes a flat plastic click against the table, and both of them look over.
22 D THE WOMAN: Ms. Vega.
23 A ¶ Marisol does not turn her head.
24 A This is the thing she has trained herself to do for twenty years: when the worst arrives, let it come to you.
25 D MARISOL: You're not supposed to be here.
26 D THE WOMAN: Neither are you.
27 D QUINN: Do you two know each other?
28 D MARISOL: No.
29 D THE WOMAN: Yes.
30 A ¶ They speak across each other, and Quinn looks from one to the other, the file still held in mid-air.
31 D THE WOMAN [CONT'D]: My name is Dolores Reyes. My son is the man you're about to call a liar tomorrow morning.
32 D MARISOL: Mrs. Reyes, you are a witness's mother. If you're talking to me you are violating the court's order. Please leave.
33 D DOLORES: He's twenty-three.
34 D MARISOL: Please leave.
35 D DOLORES: He told the police the truth and you are going to stand up in front of twelve strangers and say it was a story.
36 D QUINN (quietly): Excuse me. I think maybe everyone should breathe.
37 D MARISOL: Quinn, don't.
38 D DOLORES: Don't tell them not to. They're the only one in this room not afraid of me.
39 A ¶ This is the last time any of them will be calm in this room.
40 A ¶ Marisol stands.
41 A The chair legs SCRAPE the tile, and every head in the salon turns, the manicurists, the customers, the blank face of the television.
42 D MARISOL: I am doing my job.
43 D DOLORES: Your job is a knife.
44 D MARISOL: It is a promise. To a man who will go to prison for life if I don't.
45 D DOLORES: And my son?
46 D MARISOL: Is not on trial.
47 D DOLORES: Then why does it feel like he is?
48 A ¶ Dolores throws the paper cup.
49 A It hits the wall of lacquer, and a dozen bottles tumble, SHATTERING across the floor in red and violet and pearl.
50 A The smell of acetone doubles, sharp enough to sting.
51 A ¶ Quinn steps between them, both hands raised, polish brush still dripping onto their glove.
52 D QUINN: Stop. Both of you. Please.
53 A ¶ Nobody moves.
54 A A single bottle rolls, slowly, until it comes to rest against Marisol's shoe.

### SCENE s05142 | INT. OAKRIDGE LIBRARY - READING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JAMAL, LENA, THE ORBIT, OKOYE
1 A ¶ Three strangers sit at a long table, phones face-up between them.
2 A The group chat on each screen is called "ORBIT-7."
3 A It is 11:47 PM.
4 D JAMAL (checking his phone, then the door): So you're "starfield_88"? You said you'd be taller.
5 D LENA (laughing nervously, pulling her sleeves over her hands): I said I was five-foot-two. You never listen.
6 A ¶ Every phone BUZZES at the same moment.
7 A Jamal reads his aloud.
8 D JAMAL (reading): "We are glad you came."
9 A ¶ The message is from no one.
10 A The chat shows three members.
11 A There should be four.
12 D LENA (whispering): Who sent it?
13 D THE ORBIT (from all three phones at once, flat and kind): We did.
14 A ¶ Jamal drops his phone.
15 A Lena grabs his sleeve.
16 A The third person, Okoye, who has said nothing all evening, stands slowly.
17 D OKOYE (calm, almost relieved): I told you both it would be real.
18 A ¶ Nobody in this room has ever been so afraid, or so certain, of anything.
19 A ¶ The lights in the reading room dim to blue, one by one.
20 A The phones go dark except for one word on each screen.
21 D JAMAL (backing away): It says "Home."
22 D LENA (taking Okoye's hand): Okoye, please. Say you didn't know.
23 D OKOYE (softly): I always knew.
24 D THE ORBIT (together): Thank you for coming.

### SCENE s05143 | EXT. MAPLE HOLLOW PARK - DAY
Detected names (may be incomplete or contain aliases): TESSA, CAM, FLASH MOB, DETECTIVE MARA ROY
1 A ¶ Ring light on a tripod.
2 A Phone on a gimbal.
3 A A fake-casual dance setup at the edge of the lawn.
4 A ¶ Tessa, 17, hair in a claw clip, loads the screen.
5 A She taps the red button twice and checks her follower count like it might have changed.
6 A ¶ ON PHONE: 41.2K followers.
7 A LIVE in 3...2...1
8 A ¶ Cam, 17, stands behind the tripod pretending to adjust the light.
9 A He keeps looking at the tote bag at his feet.
10 D TESSA: ok ok ok we're live. hi besties. today's trend is the sidewalk glide, pls do not judge us.
11 D CAM (low): You said no one would be here.
12 D TESSA (through a smile): that's a ring light, not a spotlight. chill.
13 A ¶ She starts the dance.
14 A He joins, stiff, limbs all wrong.
15 A Across the lawn, a woman in a beige raincoat, dark glasses, newspaper folded under her arm, watches without blinking.
16 D CAM: Who's that?
17 D TESSA: Just some lady. keep going.
18 A ¶ He does not keep going.
19 A He stops.
20 A She spins mid-move and collides with him.
21 D TESSA [CONT'D]: bro. you're ruining the take.
22 D CAM: She's been here since we got here. She's cop-energy.
23 D TESSA: she's reading a newspaper, Cam. nobody reads newspapers. that's what makes her fake.
24 A ¶ The woman folds the paper, tucks it away, and starts toward them.
25 A Slow.
26 A Not hurrying.
27 A ¶ Tessa taps the screen.
28 A LIVE keeps running.
29 A ¶ ON PHONE: 3,900 watching. chat is flying. "who is that" "behind u" "RUN"
30 D TESSA [CONT'D] (whispering): it's not funny anymore.
31 D CAM: It was never supposed to be.
32 A ¶ THE FLASH MOB, twelve kids in matching hoodies who have been stretching by the fountain, break into a synced dance.
33 A Phones up.
34 A Music BLASTS from a speaker.
35 A ¶ The woman stops, confused, swallowed by the crowd.
36 D TESSA [CONT'D] (grinning): go go go!
37 A ¶ He grabs the tote bag.
38 A She grabs the gimbal.
39 A They run for the gate, laughing, terrified, thumbs still on the screen.
40 A ¶ ON PHONE: 12K watching.
41 A "WHERE ARE U GOING"
42 A ¶ At the gate, the woman is already there.
43 A She lifts her sunglasses.
44 D DETECTIVE MARA ROY (calm): Hi, Tessa. Hi, Cam. Mind if I ask what's in the bag?
45 A ¶ He freezes.
46 A She freezes.
47 A The phone keeps filming.
48 D TESSA (very small): it's just... props.
49 D MARA: Mm. That's what the last two said.
50 A ¶ She holds out her hand.

### SCENE s05146 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN IN GREEN, THE WOMAN IN BLACK
1 A ¶ 1953.
2 A Late November.
3 A The number 9 to the docks.
4 A ¶ Rain.
5 A It comes sideways down the windows in long grey threads, and the bus lurches through the empty streets of a city that has gone to bed without it, past shuttered tobacconists and streetlamps that bloom and vanish in the wet glass.
6 A ¶ The driver's head is a dark shape against the dashboard glow.
7 A Nobody speaks.
8 A The engine drones.
9 A A single bulb above the rear seats swings on its wire.
10 A ¶ A woman in a green coat sits near the back with a suitcase tied shut with string.
11 A She has not moved since the last stop, and she watches the other passenger the way a person watches a door that might open.
12 A ¶ Silence.
13 A ¶ The other passenger, a woman in a black coat with a veil pinned to her hat, sits three rows ahead and has been turning a gold ring on her finger for eleven minutes, round and round, as if the ring might eventually come off by itself and spare her the decision.
14 A Her face is pale and sharp.
15 A She does not look back.
16 A She knows she is being watched.
17 A She has known since Hanover Street.
18 A ¶ Rain.
19 A ¶ The bus brakes at a red light that is the only thing alive on the avenue.
20 A The woman in black reaches into her handbag.
21 A The woman in green stiffens and puts one hand on the string of the suitcase.
22 A ¶ Nothing.
23 A ¶ The handbag holds only a handkerchief.
24 A She presses it to her mouth and says nothing, and for a moment the two of them are the same woman, a mirrored pair of shoulders hunched against the same night, the same fear, the same engine thrumming through the same wet floor.
25 A ¶ Her phone?
26 A No, no phone, there are no phones.
27 A Only the clock above the driver: ten past one.
28 A Ten past one and the docks still twenty minutes away.
29 D THE WOMAN IN GREEN (finally, low): You dropped something at the last stop.
30 A ¶ The veil turns.
31 A Slowly.
32 D THE WOMAN IN BLACK: I did not.
33 D THE WOMAN IN GREEN: A letter. It had your name on it.
34 A ¶ She holds it up, a small cream envelope, soaked at one corner.
35 A She does not give it back.
36 A ¶ Silence.
37 A ¶ The light goes green.
38 A The bus lurches forward.
39 A Neither moves.
40 D THE WOMAN IN BLACK (very softly): Then you know where I am going.
41 D THE WOMAN IN GREEN: I know where you were going. I do not yet know where you will get off.
42 A ¶ The bus rounds a corner.
43 A Salt air.
44 A Gulls.
45 A Somewhere ahead, the dark smell of the harbour.
46 D THE WOMAN IN BLACK: My name is Eleanor Hale.
47 D THE WOMAN IN GREEN: I know. I am the one who wrote it.
48 A ¶ Rain.
49 A The bulb swings.
50 A The envelope trembles in her hand.
51 A ¶ Eleanor does not scream.
52 A She only closes her eyes, as though she has been expecting this exact sentence for years, and opens them again on a face that looks very much like her own.

### SCENE s05147 | INT. IRONWORKS GYM - EARLY MORNING
Detected names (may be incomplete or contain aliases): NARRATOR, JESS, KYLE, BIG MO
1 A ¶ Fluorescent tubes buzz awake one bank at a time.
2 A Rubber mats.
3 A Chalk dust drifting in the light.
4 A A treadmill whirs somewhere in the back.
5 D NARRATOR [V.O.]: Every gym smells the same. Sweat, bleach, and people trying to outrun something.
6 A ¶ Jess, 30s, a former detective turned personal trainer, wipes down a bench.
7 A Her knuckles are scabbed.
8 A She does not look like she sleeps.
9 D NARRATOR [V.O., CONT'D]: That's me. Jess. I used to chase the wrong people for a living. Now I help them chase their goals.
10 A ¶ The front door CHIMES.
11 A A man in a grey hoodie hovers by the desk, hood up, hands deep in his pockets.
12 D JESS: We're closed till six.
13 D HOODIE MAN: I'm not here to train.
14 A ¶ Quiet.
15 D JESS: Then why?
16 D HOODIE MAN: Someone said you used to work cases.
17 D NARRATOR [V.O.]: Trouble always walks in with its hood up.
18 A ¶ Jess sets down the towel.
19 A Slowly.
20 D JESS: Used to.
21 A ¶ He pulls out a photograph and slides it across the desk.
22 A A young woman, smiling, in a gym tank top.
23 D HOODIE MAN: That's my sister. She trained here. Two weeks ago she stopped answering.
24 D JESS: Lots of people quit. Gyms are full of people who quit.
25 D HOODIE MAN: Not her.
26 A ¶ Silence.
27 A ¶ Jess studies the photo.
28 A Then the man.
29 A Then the photo again.
30 D NARRATOR [V.O.]: The photo had a date on the back. A date she shouldn't have known.
31 D JESS: What's your name?
32 D HOODIE MAN: Does it matter?
33 D JESS: It does to me.
34 A ¶ He hesitates.
35 A Pulls the hood down.
36 A Mid-thirties.
37 A Tired eyes.
38 D HOODIE MAN [CONT'D]: Kyle.
39 D KYLE: Kyle Brandt.
40 D NARRATOR [V.O.]: Brandt. I knew that name. I had buried that name.
41 A ¶ Jess goes still.
42 A The treadmill in the back keeps whirring, steady, patient.
43 D JESS: Kyle. How long have you known where I work?
44 D KYLE: Since the funeral.
45 A ¶ Nothing.
46 A ¶ A locker door CLANGS in the back.
47 A Both turn.
48 A ¶ From behind the lockers steps Big Mo, 50s, the gym owner, wiping his hands on a towel.
49 A He is too casual.
50 D BIG MO: Everything okay out here?
51 D KYLE: Fine.
52 D JESS: Fine.
53 D BIG MO: Because it sounds like a conversation I should be in.
54 A ¶ Nobody answers.
55 A The towel in his hand is red at the corner.
56 D NARRATOR [V.O.]: Mo kept a clean gym. Always. Except that morning.
57 A ¶ Kyle's eyes drop to the towel.
58 A Then to Jess.
59 D KYLE (quiet): He's the last person who saw her.
60 D BIG MO: Kid, you don't want to say that.
61 D KYLE: I just did.
62 A ¶ Silence.
63 A ¶ Jess steps between them without seeming to.
64 A Her hand finds the heavy kettlebell on the shelf.
65 D JESS: Mo. Open the back room.
66 D BIG MO: It's just storage.
67 D JESS: Then it won't take long.
68 D NARRATOR [V.O.]: That was the last honest thing any of us said in that building.
69 A ¶ Mo smiles.
70 A It is not a happy smile.
71 A He drops the towel.
72 A ¶ Behind the lockers, a phone begins to RING.
73 A Soft.
74 A Persistent.
75 A ¶ All three look toward the sound.
76 A ¶ The ringtone is a pop song the sister used to hum while she lifted.

### SCENE s05149 | INT. COUNTY PAROLE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, KIP, KIM, MARGARET
1 A ¶ Fluorescent light.
2 A The kind that hums.
3 A A corridor of closed doors and one open one at the end where a lamp burns yellow.
4 A ¶ Rain on the window.
5 A Rain on the roof.
6 A The building ticks as it cools.
7 A ¶ He sits alone in the chair across from the empty desk.
8 A Waiting.
9 A His coat is still damp and he has not taken it off.
10 A His hands rest on his knees like something set down and forgotten.
11 A Nobody told him the office closed at five.
12 A Nobody told him anything.
13 A ¶ Silence.
14 A ¶ The wall clock says 9:41.
15 A The wall clock has said 9:41 since he walked in.
16 A ¶ A door opens down the hall.
17 A Footsteps, slow, and the squeak of rubber on linoleum.
18 A A woman in a long dark cardigan, grey hair pinned back, appears in the doorway with a mug in both hands.
19 A She does not look surprised to see him.
20 A She looks like she has been expecting him for years.
21 D THE WOMAN: You're late Kip.
22 D KIP: I'm not Kip. I'm Kim.
23 D THE WOMAN: Kim then.
24 A ¶ She sits behind the desk.
25 A Opens the folder.
26 A The folder is very thin.
27 A ¶ Nothing.
28 A ¶ Her eyes move down the page and then up, and for a moment he thinks he sees something move behind her, a shape in the dark of the hallway, tall, patient.
29 D KIM: Who else is here.
30 D THE WOMAN: Nobody. Just us.
31 D KIM: I heard someone.
32 D THE WOMAN: You hear a lot of things, Kim. It's in your file.
33 A ¶ She turns the folder around so he can read.
34 A His name.
35 A His date of birth.
36 A A line of handwriting beneath, in red, that he cannot make himself read aloud.
37 A ¶ Rain.
38 D KIM: That's not my handwriting.
39 D THE WOMAN: No. It's his.
40 D KIM: Whose?
41 A ¶ She does not answer.
42 A The lamp flickers.
43 A In the corridor, the footsteps start again, closer now, unhurried.
44 D KIM [CONT'D] (barely): Please tell me that's you.
45 D THE WOMAN: I'm right here.
46 A ¶ The footsteps stop at the door.
47 A He does not turn around.
48 A He cannot.
49 A Every muscle in his neck has locked.
50 A ¶ The Woman closes the folder gently.
51 D THE WOMAN [CONT'D]: My name is Margaret. And that is Kip.
52 A ¶ Behind him, the door opens.
53 A ¶ Nothing.
54 A ¶ Then a breath that is not his own.
55 D KIM (whispering): Kip is dead.
56 D MARGARET: Yes.
57 A ¶ Silence.
58 A ¶ The clock moves.
59 A 9:42.

### SCENE s05151 | INT. CHURCH BASEMENT - AA MEETING - NIGHT
Detected names (may be incomplete or contain aliases): TIME, THE WOMAN
1 A ¶ Folding chairs in a circle.
2 A Burnt coffee.
3 A A banner: "ONE DAY AT A TIME."
4 A ¶ Empty chairs, all of them.
5 A Except one.
6 A ¶ THE WOMAN, 40s, cardigan, big purse on her lap.
7 A She waves at nobody.
8 D THE WOMAN: Hi everybody!
9 A ¶ (beat for the audience)
10 A ¶ She sits up.
11 A Beams.
12 A Waits for the applause that doesn't come.
13 D THE WOMAN [CONT'D]: Wow. Tough room.
14 A ¶ Silence.
15 A A fluorescent buzz.
16 D THE WOMAN [CONT'D]: So. Hi. I'm... let's say I'm new here. Three days sober. Well, "sober." Dry. Technically damp.
17 A ¶ She laughs at herself.
18 A Nobody joins.
19 A ¶ Her purse.
20 A It wiggles.
21 A ¶ She pats it.
22 A Smiles wider.
23 D THE WOMAN [CONT'D]: That's just my sponsor. She's shy.
24 A ¶ Nothing.
25 A Another wiggle.
26 A A faint croak.
27 D THE WOMAN [CONT'D]: Look, I know how this sounds. I had a little problem. Nothing major! A few wishes. A few... frogs.
28 A ¶ She opens the purse.
29 A Two bulging eyes peer out.
30 D THE WOMAN [CONT'D]: Kim is the one on the left. Kip is the one on the right. Honestly, I never could tell which is which. My ex-husbands. They had names for a reason.
31 A ¶ The door at the top of the stairs creaks open.
32 A Footsteps.
33 A Heavy.
34 A The sound of a staff tapping the steps.
35 A ¶ She does not look up.
36 A Her smile does not move.
37 D THE WOMAN [CONT'D] (whispers to the purse): My name is Brenda. And I have been a witch for four hundred years.
38 A ¶ The staff stops.
39 A Right behind her.
40 A ¶ She will not turn around.
41 A ¶ Rain on the high windows.

### SCENE s05152 | INT. HELIX LABS - OPEN-PLAN OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): IMANI, JONAH, IMANI'S
1 A ¶ SUPER: "DAY 4 OF THE LOCKDOWN"
2 A ¶ Standing desks.
3 A Beanbags.
4 A A neon sign: MOVE FAST.
5 A The glass doors are chained from the inside.
6 A ¶ IMANI, 30s, sleeves rolled, crouches behind a kombucha fridge.
7 A Her breath fogs.
8 A ¶ INSERT - HER PHONE
9 A ¶ A single bar of signal.
10 A Contact: JONAH.
11 A Ringing.
12 A ¶ Across the floor, TWO TEENAGE INTERNS share a vending-machine bag of chips by a window, whispering.
13 A A golden retriever sleeps under a desk, ribs rising and falling.
14 D JONAH [V.O.] (static, breathing): Imani. Don't talk. Listen.
15 D IMANI (whisper): Where are you?
16 D JONAH [V.O.]: Stairwell. Below you. The thing's in the vents, it follows the heat. Kill the lights on the east side and it moves.
17 A ¶ IMANI'S POV - the east wall.
18 A A bank of switches.
19 A Forty feet of open floor between.
20 D IMANI: That's forty feet in the open.
21 D JONAH [V.O.]: Then run.
22 A ¶ She runs.
23 A Beanbags, cables, a skateboard she nearly trips on.
24 A The dog lifts its head.
25 A ¶ Her hand slams the switches.
26 A East side DARK.
27 A ¶ Silence.
28 A Then a metallic scrape in the ceiling, travelling away.
29 A ¶ Both interns give her a thumbs up.
30 A She almost laughs.
31 A ¶ The dog barks once.
32 A Sharp.
33 A The scraping stops.
34 A Reverses.
35 A ¶ The stairwell door BURSTS open.
36 A JONAH, 30s, bleeding at the temple, stumbles in with a fire axe.
37 D JONAH (not on the phone anymore): It was never in the vents.
38 A ¶ He looks up.
39 A Slowly, so does she.

### SCENE s05154 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): JEN, SAM, BIG DAVE, MRS. K, OZ, PIP
1 A ¶ A sea of cardboard signs and one very large papier-mache polar bear.
2 A Drums thump.
3 A A sky the colour of weak tea.
4 A ¶ JEN, 30s, clipboard, megaphone, is losing an argument with SAM, 30s, her ex-fiance, who is carrying an end of the polar bear and walking backwards into a bin.
5 D SAM: I'm just saying, the bear's head is crooked.
6 D JEN: The bear is perfect, Sam. You're the one holding it wrong.
7 A ¶ The bin TOPPLES.
8 A A pigeon explodes upward.
9 A BIG DAVE, 50s, a bear of a man in a full beekeeper suit, catches the bear's falling head with one hand and a falafel in the other, while MRS. K, 70s, tiny, ferocious, in a knitted hat that says NO PLANET B, smacks him with her sign for taking the last wrap and a drone hums overhead, trailing a banner from the city that says PLEASE DISPERSE.
10 D BIG DAVE: Mrs. K! I'm wearing a bee suit!
11 D MRS. K: Then you should have a stinger.
12 A ¶ A STRANGER, 30s, silver jumpsuit, no sign, no shoes, steps out from behind the bear and stares straight at the sky.
13 A In his hand, a small device that BUZZES.
14 D JEN (to Sam, quiet): Who's that?
15 D SAM: Your date?
16 D JEN: I didn't bring a date.
17 A ¶ The stranger crosses to her.
18 A Holds up the device.
19 A It BEEPS twice, green.
20 D STRANGER: Forgive me. I am from two hundred years from now. This is the last place it went right.
21 D BIG DAVE (through the veil): Is he with the bear?
22 A ¶ The stranger turns to Mrs. K, who's squinting at him.
23 D MRS. K: What's your name, dear?
24 D STRANGER: Oz. Short for Ozymandias. My mother was a poet.
25 D OZ (beat): I am here to ask you not to stop.
26 A ¶ A SQUEAK.
27 A PIP, 12, Jen's niece, pops out from inside the polar bear wearing the head like a helmet.
28 D PIP: Aunt Jen? I think I'm stuck.
29 A ¶ Everyone turns.
30 A Sam starts to laugh.
31 A Jen starts to laugh.
32 A The drone spins away, confused.
33 A Big Dave offers Oz half the falafel.
34 D OZ (taking it, solemn): In my time, this has been extinct for ninety years.
35 D BIG DAVE (eating): The falafel?
36 D OZ: The hope.
37 A ¶ Mrs. K pats his arm.
38 D MRS. K: Then eat up, dear. We've got a march.

### SCENE s05155 | INT. NIGHT BUS - ROUTE 47 - NIGHT
Detected names (may be incomplete or contain aliases): MAN, HI-VIS JACKET, ANIKA, RILEY, ANIKA'S
1 A ¶ SUPER: "2:14 A.M."
2 A ¶ Sodium streetlights strobe past rain-streaked windows.
3 A The bus is nearly empty.
4 A At the back, TWO TEENAGERS share one pair of earbuds, asleep against each other.
5 A Near the front, a MAN IN A HI-VIS JACKET snores, a lunchbox on his knee.
6 A ¶ ANIKA, 40s, scrubs under a parka, sits by the middle doors, gripping a paper cup of coffee she isn't drinking.
7 A ¶ RILEY, 20s, they/them, climbs on at the next stop with a rucksack, taps a card.
8 A Sits across the aisle.
9 A ¶ INSERT - ANIKA'S HAND
10 A ¶ The coffee cup trembles.
11 A Just slightly.
12 A She sets it on her knee to steady it.
13 D RILEY (not looking over; unzipping the rucksack): Long shift?
14 D ANIKA (pocketing her badge): Long enough.
15 D RILEY (taking out a water bottle): You a nurse?
16 D ANIKA (beat): Why?
17 D RILEY (shrugging, drinking): Shoes.
18 D ANIKA (looks down at her own shoes, almost smiles): Right.
19 A ¶ The bus brakes.
20 A Hiss of the doors.
21 A Nobody gets on.
22 A Nobody gets off.
23 D RILEY (screwing the cap back on): My mum was a nurse. Fourteen years nights. She used to say you can tell who's had a bad one by how they hold a cup.
24 D ANIKA (turning the cup in her hands): And how do they hold it?
25 D RILEY (nodding at it): Like that.
26 A ¶ Silence.
27 A The bus rolls through an underpass.
28 A Orange light, dark, orange light.
29 A ¶ ANIKA'S POV - her phone, face-up on her thigh.
30 A A missed call.
31 A HOSPITAL (WARD 6).
32 A Seven times.
33 D RILEY (leaning back, closing their eyes): You can ring them back, you know.
34 D ANIKA (turning the phone over): It's fine.
35 D RILEY (eyes still closed): It isn't, though.
36 D ANIKA (sharp): You don't know anything about it.
37 D RILEY (opening one eye): No. I don't.
38 A ¶ The teenagers at the back stir, resettle.
39 A The man in the hi-vis snorts and swallows mid-snore.
40 A The driver's radio murmurs a football score.
41 D ANIKA (a long breath; rubbing her thumb along the cup's rim): There was a boy. Eleven. Appendix. Routine. I did the checks, I did all of them, twice. And I went on my break.
42 D RILEY (quiet; not moving): Okay.
43 D ANIKA (not hearing them): Twelve minutes. I was gone twelve minutes.
44 D RILEY (sitting up, turning to face her): And?
45 D ANIKA (staring at the window): And the one who came on after me, she saw it. She caught it. Because she was looking at the monitor.
46 D RILEY (beat; slowly): So he's alive.
47 D ANIKA (nodding, once): He's alive.
48 D RILEY (a small laugh, gentle): So why are you on a night bus at two in the morning like it's a funeral?
49 D ANIKA (finally looking at them): Because I wasn't looking.
50 A ¶ The bus lurches.
51 A The cup tips.
52 A Coffee spills across her knee and she doesn't flinch.
53 A Riley takes a napkin from a pocket and holds it out, across the aisle, until she takes it.
54 D RILEY (softly; sitting back): You looked, though. Every time you could. That's the whole job.
55 D ANIKA (dabbing the stain; not agreeing): Mm.
56 D RILEY (pulling the cord for the next stop): This is me.
57 A ¶ The bus slows.
58 A The bell DINGS.
59 A Riley stands, shoulders the rucksack, swaying with the movement.
60 D RILEY [CONT'D] (at the doors, over their shoulder): Ring the ward.
61 D ANIKA (not looking up): Go home, Riley.
62 A ¶ Riley stops.
63 D RILEY (a beat, gentle): I didn't tell you my name.
64 A ¶ Anika lifts her head.
65 A Neither of them moves.
66 A The doors hiss open onto the empty, wet street.
67 A Riley steps out and doesn't look back.
68 A ¶ The bus pulls away.
69 A In the rear window, a small figure stands under a streetlight, watching it go.
70 A ¶ Anika turns her phone over.
71 A Her thumb hovers, then presses.
72 A It rings once.
73 D ANIKA [CONT'D] (into the phone, steady): It's Anika. Tell me how he is.
74 A ¶ The man in the hi-vis opens his eyes and looks at her.
75 A Then closes them again.

### SCENE s05156 | INT. NIGHT BUS - ROUTE N9 - NIGHT
Detected names (may be incomplete or contain aliases): LUCIA AND KATYA, KATYA, THUNK, DRIVER, WINSTON
1 A ¶ Rain on the windows.
2 A The bus is a lit aquarium gliding through a dark city.
3 A Neon smears past.
4 A In the back row, two teenagers share a bag of chips and a single, furious whisper.
5 A ¶ Lucia, 30s, in a rumpled bridesmaid dress and trainers, sits with a bouquet she's clearly been dragging around for hours.
6 A She sneezes.
7 A The bouquet shakes.
8 A A petal lands on her phone.
9 A ¶ The doors HISS.
10 A Katya, 30s, also in a bridesmaid dress, the same hideous mint green, climbs aboard, drenched, holding her heels in one hand.
11 A ¶ They see each other.
12 A Freeze.
13 D LUCIA: You.
14 D KATYA: No.
15 D LUCIA: You're wearing it.
16 D KATYA (sitting across from her): Everyone's wearing it. It's a bridal party. That's the horror of it.
17 A ¶ The bus lurches.
18 A Katya slides, grabs a pole, and the heels go flying.
19 A One hits the driver's screen with a THUNK.
20 D DRIVER [V.O.] (over the intercom, bored): Please keep all footwear to yourselves, ladies.
21 D KATYA (to the ceiling): Sorry!
22 A ¶ Lucia laughs despite herself.
23 A Katya laughs too.
24 A They both stop at once.
25 D LUCIA: She's still furious with you, you know. She's saying you ruined the cake.
26 D KATYA: She is saying I ruined the cake? She's the one who told me to hold it.
27 D LUCIA: She's saying she didn't mean while you were dancing.
28 D KATYA: She is not allowed to say that. She's the one who taught me the dance.
29 A ¶ Winston, 20s, in a delivery jacket, steps on at the next stop with an enormous pizza box, tags in with a beep, and sits down between them without a word.
30 A The two women look at each other across him, then at the box.
31 D WINSTON (opening it, sheepish): It's wrong order. It's pineapple. I'm not allowed to take it back.
32 A ¶ Lucia and Katya both reach for a slice at the same moment.
33 A Their hands collide.
34 A Both gasp.
35 D LUCIA: She said she'd kill me.
36 D KATYA: She said she'd kill me.
37 D WINSTON: Who did?
38 A ¶ They answer together.
39 D LUCIA AND KATYA: The bride.
40 A ¶ Winston nods slowly, takes the slice, and offers the box to the teenagers behind him, who snatch it.
41 A ¶ The bus slows.
42 A The screen over the driver flickers: NEXT STOP: THE FUTURE.
43 A The three of them look up.
44 D DRIVER [V.O.]: Sorry about that. Software update.
45 A ¶ The doors HISS open on a street that is bright, white, and absolutely silent.
46 D KATYA: Is that normal?
47 D WINSTON (chewing): I've seen worse.
48 A ¶ Lucia stands.
49 A Offers her the bouquet.
50 D LUCIA: Come on. Let's go find out.
