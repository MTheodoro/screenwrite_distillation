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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05064_1.json
### SCENE s05064_1 | INT. HOLLOWAY VETERINARY CLINIC - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): NATE, BELLA
1 A ¶ The camera follows him in.
2 A The beam of a small flashlight taped to the phone throws a white circle ahead, trembling.
3 A Linoleum, cracked.
4 A Doors on both sides with brass plates.
5 A EXAM 1.
6 A EXAM 2.
7 A SURGERY.
8 A A smell, faint, of old iodine and something sweeter, wetter underneath.
9 D NATE: Smell that? That's the, uh, that's just a building. Buildings smell.
10 A ¶ He pushes open the door of EXAM 1.
11 A Steel table.
12 A A cage on a counter, door ajar, a faded collar lying in it.
13 A He pans to a blackboard, still chalked: "BELLA - 2PM - DO NOT FEED."
14 D NATE [CONT'D]: That's creepy, right? That's, okay, chat, that's creepy.
15 A ¶ His voice is quieter.
16 A He steps closer to the table.
17 A The light catches long parallel scratches in the steel, deep, as if made by something that did not want to be held.
18 D NATE [CONT'D]: Those are scratches. Those are from, you know. Animals.
19 A ¶ From the far end of the hallway, a sound.
20 A A single tap.
21 A Claws on tile.
22 A ¶ He freezes.
23 A The camera freezes, but his breath comes through the mic, ragged.
24 D NATE [CONT'D] (whisper): Did you hear that.
25 A ¶ A pause.
26 A Tap.
27 A Tap.
28 A Tap-tap.
29 A ¶ He swings the camera down the hall.
30 A The beam finds nothing at first, then, at its very edge, a shape.
31 A A dog, he thinks.
32 A A big pale dog, standing at the end of the corridor, head low, perfectly still.
33 A Its eyes throw back the light, two coins of green.
34 D NATE [CONT'D]: Oh. Oh, hey. Hey buddy. Where'd you come from?
35 A ¶ The dog does not move.
36 D NATE [CONT'D]: Are you somebody's? Are you lost? Hey. Hey, boy.
37 A ¶ He holds out his free hand, palm down, the way you are supposed to.
38 A The dog's head lifts a fraction.
39 A Its lips peel back, and the teeth beneath are far too many, too small, too evenly spaced.
40 A ¶ ON PHONE: "MO: nate"
41 A ¶ ON PHONE: "MO: nate answer"
42 A ¶ Nate takes one step backward.
43 A His heel hits the gurney, which rolls and clangs against the wall, and the sound goes through the building like a gunshot.
44 A ¶ The dog runs.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05036.json
### SCENE s05036 | EXT. FISHING TRAWLER "MARGARET ANN" - DECK - NIGHT
Detected names (may be incomplete or contain aliases): SKIPPER BRODIE FENN, STRANGER, MARCUS, THE CREW
1 A ¶ A rusted forty-foot trawler wallows in black swell off the breakwater, nets heaped in wet coils, a single work lamp swinging on its cable.
2 A Diesel and salt in the air.
3 A ¶ SKIPPER BRODIE FENN, 50s, weathered, a gold tooth he shows when he lies, leans against the winch.
4 A Beside him stands a STRANGER in a clean dry anorak, far too neat for a boat, holding a tablet in a waterproof sleeve.
5 D STRANGER: You're the captain? I was told the catch would be on ice by midnight.
6 D BRODIE: Catch is in the hold. Ice is a figure of speech.
7 A ¶ The STRANGER taps the tablet.
8 A ¶ ON TABLET: UNIT 4 - HARBOUR CUSTOMS - INSPECTION 06:00 - CLEAR
9 D STRANGER: Customs clear at six. That gives us six hours to move forty crates of "cod" off this deck and into a van that does not officially exist.
10 D BRODIE (grinning, tooth flashing): And who might you be, friend, to know about vans?
11 A ¶ The STRANGER glances up, finally, and unzips the anorak.
12 A Underneath: a badge, a vest, a holstered sidearm.
13 D MARCUS: Detective Marcus Hale, Maritime Task Force. And I'd stop smiling.
14 D THE CREW [O.S.] (three voices, shouting, nearly overlapping): Cap'n! Cap'n, there's lights on the water!
15 A ¶ Searchlights sweep across the swell, white and enormous.
16 A A bullhorn crackles.
17 D MARCUS (into his collar): All units, this is Hale. Boarding in ninety seconds. Nobody leaves this deck.
18 D BRODIE (very quiet): You were on my boat for three weeks. You gutted my fish.
19 D MARCUS (beat): You make a lovely chowder, Skipper.
20 A ¶ The work lamp SWINGS and shatters against the winch.
21 A Darkness, then the harsh white of the searchlights on every face.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05027.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05153.json
### SCENE s05153 | INT. NEXUS ARENA - FINALS STAGE - NIGHT
Detected names (may be incomplete or contain aliases): WREN, HALE, ADMIN, TEENAGE BOY, HAS JOINED, THE CROWD
1 A ¶ A packed esports arena.
2 A Strobing blue light.
3 A Two gaming rigs on a raised platform, a huge screen above.
4 A ¶ WREN, 20s, hoodie, headset around her neck, sits dead still.
5 A Her coach HALE, 50s, crouches beside her chair.
6 D ADMIN [V.O.] (over the PA): Match four, final round. Players, please confirm your connection.
7 A ¶ In the crowd, a TEENAGE BOY lowers his phone.
8 A An old SECURITY GUARD scans the aisles, bored.
9 A ¶ ANGLE ON THE SCREEN
10 A ¶ Wren's character, a knight, stands in an empty grey corridor.
11 A There is no opponent's name in the lobby.
12 A ¶ ON SCREEN: PLAYER 2 HAS JOINED (0 ms)
13 D HALE (quiet): Wren. Look at me.
14 D WREN: I'm looking at it.
15 D HALE: No. At me.
16 A ¶ She does. (beat)
17 D HALE [CONT'D]: Twelve years I've done this. I have seen every kind of cheat there is. Lag switches, ghost accounts, a kid who taped a second keyboard under his desk. And I've been telling you since the qualifiers that something is wrong, and you keep saying "it's just a bug." You're a better player than a bug.
18 D WREN: It is a bug.
19 D HALE (beat): Then why did it say your mother's name in the chat?
20 A ¶ CLOSE ON the chat window.
21 A A single line.
22 A ¶ ON SCREEN: > hello wren. you left the door open.
23 A ¶ Wren pulls her hands off the keyboard.
24 A Hale grabs the cable.
25 A The screen doesn't flicker.
26 A The game keeps playing without them.
27 D THE CROWD (chanting, rising): WREN! WREN! WREN!
28 A ¶ The teenage boy drops his drink.
29 A The guard turns, hand to his radio.
30 A ¶ WE SEE every monitor in the arena flip to the same grey corridor.
31 A The knight turns, slowly, to the camera.
32 D ADMIN [V.O.] (over the PA, strange, soft): Please remain seated. We are experiencing a technical difficulty.
33 D HALE: Get up. Wren. Get up.
34 D WREN (very calm): If I stand up it gets in here.
35 A ¶ BACK TO SCENE
36 A ¶ Hale stares at her.
37 A The strobes slow.
38 A Stop.
39 D THE CROWD (a whisper, all at once): Wren.
40 A ¶ The doors of the arena clank shut.
41 A Every single one.
42 A Wren pulls the headset onto her ears.
43 D WREN [CONT'D] (beat): Tell my mother I'm sorry about the name.
44 A ¶ She picks up the controller.
45 A The knight raises its sword.
46 D HALE: Don't.
47 A ¶ Everyone in the front row stands and sits down in unison.
48 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05109.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05017.json
### SCENE s05017 | INT. COUNTY PAROLE OFFICE - WAITING AREA - DAY
Detected names (may be incomplete or contain aliases): ROWAN, MARCUS, HALE, OFFICER VANCE
1 A ¶ Rain taps the high windows.
2 A A fluorescent tube flickers over a row of orange plastic chairs.
3 A The radiator ticks.
4 A Somewhere a vending machine hums to itself.
5 A ¶ Marcus Doyle, 30s, sits with his hands between his knees, a manila folder resting in his lap.
6 A Across from him, Rowan Pierce, 20s, slouches in a chair, scrolling a cracked phone.
7 A Rowan uses they/them pronouns and wears a battered denim jacket.
8 D ROWAN (not looking up): You're early.
9 D MARCUS: Habit. They count it against you if you're late.
10 D ROWAN: Everybody counts everything against you.
11 A ¶ The fluorescent tube buzzes, dims, steadies.
12 A Wind pushes at the glass.
13 A ¶ ANGLE ON the reception desk.
14 A MRS. HALE, 60s, sits behind a wall of plexiglass, glasses low on her nose, stamping a stack of forms.
15 D MRS. HALE: Doyle. Marcus. You're up in five. Pierce, you're after.
16 D MARCUS: Thank you, ma'am.
17 D ROWAN (muttering): Ma'am. Jesus.
18 A ¶ The intercom on the wall CRACKLES.
19 A A man's voice, thin and wrong.
20 D OFFICER VANCE [V.O.]: Hale, send Doyle back now. Skip the line.
21 D MRS. HALE (leaning to the intercom): Officer Vance, he's not on until--
22 D OFFICER VANCE [V.O.]: Now.
23 A ¶ Mrs. Hale hesitates.
24 A The tube overhead goes out entirely.
25 A The room is grey and green with rain-light.
26 D MARCUS (rising slowly): That's not his voice.
27 D ROWAN (finally looking up): What do you mean it's not his voice?
28 D MARCUS: Vance has a limp in his voice. I mean he whistles on his s's. That was somebody doing him.
29 A ¶ CLOSE ON the intercom's red light.
30 A It blinks.
31 A Once.
32 A Twice.
33 D OFFICER VANCE [V.O.]: Doyle. Don't make me ask again.
34 D ROWAN (standing, voice low): Don't go.
35 D MARCUS: I have to. If I don't show, it's a violation.
36 D ROWAN: It's a trap.
37 D MARCUS: It's always a trap.
38 A ¶ WE SEE the hallway door behind Mrs. Hale.
39 A It is open an inch.
40 A Beyond it, only darkness.
41 D MRS. HALE (very quietly, not looking at either of them): Don't go in there, honey.
42 A ¶ INSERT - the desk calendar.
43 A Today's date is circled in red.
44 A Under it, in handwriting: "THEY COME BACK."
45 D MARCUS (reading it): Who wrote that?
46 D MRS. HALE (a thin, brittle smile): I did. Thirty years ago.
47 A ¶ The radiator stops ticking.
48 A The rain stops.
49 A Even the vending machine goes silent.
50 D ROWAN (whispering): Marcus. Look at the window.
51 A ¶ BACK TO SCENE.
52 A ¶ Reflected in the dark glass: the three of them, and a fourth shape standing in the open hallway door behind them, tall and still.
53 D OFFICER VANCE [V.O.] (from the intercom, from the hallway, from everywhere): Doyle. Pierce. Hale. Come in. Come in. Come in.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05148_1.json
### SCENE s05148_1 | INT. NEW BEGINNINGS FERTILITY CLINIC - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): DEV, KAREN, MAYA
1 A ¶ The generator HUMS louder here.
2 A A row of steel tanks, each frosted with cold.
3 A The woman is already at the biggest one, pulling at its door.
4 D DEV: Hey. Hey! You can't touch that.
5 D THE WOMAN: The backup power's failing. Somebody has to move them.
6 D DEV: Who are you?
7 D THE WOMAN: Karen Ellis. Lab tech. Eleven years.
8 D DEV (quieter): Karen. My wife's in there right now.
9 D KAREN: Then you'd better help me lift.
10 A ¶ He looks at the tank.
11 A At her.
12 A At the dark ceiling.
13 A ¶ Dev takes off his jacket and grabs the other handle.
14 A ¶ Behind them, the swinging door opens.
15 A Maya stands there, pale, with the nurse behind her.
16 D MAYA (very still): Dev. What are you doing?
17 D DEV: Saving the thing we came here for.
18 A ¶ This is the first time all week that anyone in this building has told the truth.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05131.json
### SCENE s05131 | INT. DELIVERY WAREHOUSE - LOADING DOCK - NIGHT
Detected names (may be incomplete or contain aliases): ADRIAN, KESTREL
1 A ¶ The warehouse is very big and very cold.
2 A Yellow lamps hum over rows of brown boxes.
3 A Outside, snow falls on the empty parking lot.
4 A ¶ ADRIAN, 40s, stands next to a pallet.
5 A He holds a small black phone.
6 A A forklift is silent behind him.
7 A ¶ A side door SLAMS.
8 A KESTREL, 30s, walks in.
9 A They wear a gray coat and carry no bag.
10 D ADRIAN: You are late. I said eleven.
11 D KESTREL: Traffic was bad. Also, I do not like this place.
12 A ¶ He looks at them for a long time.
13 A His hand moves to the pallet, slowly.
14 D ADRIAN: Where is the package?
15 D KESTREL: It is safe. First you tell me who sold my name.
16 A ¶ The phone BUZZES in his hand.
17 A He does not look at it.
18 A Above them, the cold wind makes the roof metal sing.
19 D ADRIAN: Nobody sold. You make a story in your head.
20 D KESTREL: They told me you would say this.
21 A ¶ This is the last time they will trust anyone in this city.
22 A ¶ He takes one step forward.
23 A She, no, they, do not move.
24 A A truck engine RUMBLES far away.
25 D ADRIAN: Give me the package. Please.
26 D KESTREL: Give me the name.
27 A ¶ He opens his coat.
28 A A metal box CLICKS on the floor between them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05150_2.json
### SCENE s05150_2 | INT. UNIT 214 - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE WOMAN, TEENAGE BOY, TOBY
1 A ¶ Cardboard boxes.
2 A A rocking horse under a sheet.
3 A A dressing mirror turned to face the wall.
4 A Everything neat, too neat, like someone arranged it for a visit.
5 A ¶ She pulls a box open.
6 A Photographs.
7 A Her own face at ten years old, then at twelve, then at fourteen.
8 A Every one with the eyes scratched out.
9 D THE WOMAN (quiet): Okay.
10 A ¶ Behind her the corridor lights go out one by one, towards her.
11 A Click.
12 A Click.
13 A Click.
14 A ¶ A TEENAGE BOY, TOBY, 17, hi-vis vest two sizes too big, stands in the open doorway holding a torch.
15 D TOBY: Sorry! Sorry. Odell sent me. Said you might need a hand carrying.
16 D THE WOMAN: Carrying what.
17 D TOBY (looking past her): ...the mirror?
18 A ¶ She turns.
19 A The mirror is facing the room now.
20 A Nobody touched it.
21 A ¶ TIME CUT:

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05088.json
### SCENE s05088 | INT. LAKEVIEW BANQUET HALL - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, WAITER, TEENAGERS, NORA, CALLUM, DEVON, MARIN
1 A ¶ Streamers.
2 A Half-eaten cake.
3 A A DJ plays something slow to a nearly empty floor.
4 A A WAITER carries a tray of champagne flutes between tables.
5 A Two TEENAGERS in matching rented suits hide behind a pillar, sharing a vape.
6 A A small WHITE DOG in a bow tie trots under the head table, hunting for crumbs.
7 A ¶ At a corner table, NORA, 28, bridesmaid, grips her clutch.
8 A Across from her sits CALLUM, 30s, the groom's cousin, loosening his tie.
9 D NORA (low, smiling for the room): Don't look at the bar.
10 D CALLUM (looking at the bar): Which one is he?
11 D NORA (sips water): Grey suit. Left of the cake.
12 D CALLUM (squints): That's the best man.
13 D NORA: That's not the best man.
14 A ¶ A beat.
15 A The Waiter passes.
16 A Nora lifts a flute.
17 A Sets it down untouched.
18 A ¶ DEVON arrives, 30s, the real best man, grinning, a bit sweaty, and slides into the chair next to Callum.
19 D DEVON (clapping Callum on the shoulder): There you are! Where were you during the toast?
20 D CALLUM (stiff): Parking.
21 D DEVON (to Nora): And you owe me a dance.
22 D NORA (too bright): Later.
23 D DEVON (leaning in): You okay? You look pale.
24 D NORA (squeezing the clutch): Long day.
25 A ¶ The Dog yips under the table.
26 A One of the Teenagers giggles.
27 A The other shushes him.
28 A ¶ MARIN, 50s, the bride's mother in a silver dress, glides up behind them.
29 D MARIN (tapping Devon's arm): Dev, the photographer needs you. Now.
30 D DEVON (rising, to Callum): Don't leave. We're doing shots at midnight.
31 A ¶ He goes.
32 A Marin lingers, her eyes on Nora.
33 D MARIN (softly): He is lovely, isn't he?
34 D NORA (nodding, tight): Very.
35 D MARIN (turning to Callum): And you. You'll keep an eye on her?
36 D CALLUM (a beat): Yes, ma'am.
37 A ¶ Marin smiles and drifts away.
38 A Nora exhales.
39 A Callum turns to her.
40 D CALLUM [CONT'D] (whispering): Your clutch. What's in it?
41 D NORA (eyes on the dance floor): Not here.
42 A ¶ The DJ fades out the slow song.
43 A The room claps, thinly.
44 A The Waiter returns for the flute Nora never touched.
45 A She hands it to him with a smile that does not reach her eyes.
