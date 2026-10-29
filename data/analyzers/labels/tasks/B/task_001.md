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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05068_0.json
### SCENE s05068_0 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): WORLD'S OKAYEST GRANDMA, THE MAN, DEB
1 A ¶ Fluorescent lights.
2 A A row of molded chairs.
3 A A ficus that died years ago and has not been told.
4 A ¶ Deb, 60s, reception, bifocals, a mug that says WORLD'S OKAYEST GRANDMA, taps at a keyboard behind scratched plexiglass.
5 A She doesn't look up when the door opens.
6 A ¶ A man comes in.
7 A He is tall, late forties, a gray work jacket zipped to the throat, a folder pressed to his ribs like a shield.
8 A He stands very still just inside the door, as if the room might reject him.
9 A THE MAN waits.
10 D DEB: Name?
11 D THE MAN: I have a nine o'clock.
12 D DEB: Name.
13 A ¶ He says nothing for a second.
14 A She finally looks at him.
15 D THE MAN: Is Officer Okafor in?
16 D DEB: Honey, everybody's in. It's nine in the morning. Sit.
17 A ¶ He sits.
18 A He keeps the folder on his knees.
19 A Across the room, a clock ticks, slower than a clock should.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05024.json
### SCENE s05024 | INT. HOLLOWAY HOUSE - DRAWING ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ODILE VANCE, HARLAN, PRU, TEODOR, ROWAN
1 A ¶ Rain has been falling since the cemetery and now it ticks against the tall windows like something asking to be let in.
2 A Lamps are lit too early.
3 A The room smells of lilies, wet wool and the kind of coffee that is made in urns.
4 A ¶ ODILE VANCE, sixty, stands by the sideboard with a plate she will never finish, and she watches her late husband's brother HARLAN pour himself a third whisky with a steadiness that is almost an accusation.
5 A Across the room, PRU, the dead man's daughter, folds and unfolds a funeral program until it has no shape, while TEODOR, the family lawyer, drifts behind her saying nothing in a very organised way.
6 A Near the piano, ROWAN, the dead man's nurse, who is wearing a borrowed black cardigan and who uses they and them, stands alone with their hands in their pockets, and they are the only one in the room who has noticed the study door is open.
7 D ODILE (low, to Harlan): You told the police you were in Dover that night.
8 D HARLAN: I told them what was true, Odile.
9 A ¶ The landline in the hall RINGS.
10 A Nobody moves.
11 A It rings again.
12 D TEODOR: I'll go.
13 A ¶ He goes.
14 A His voice carries back, flat and polite, through the open door.
15 D TEODOR [O.S.]: Holloway residence. ... No, he is not available. ... Who is this, please?
16 A ¶ Rowan turns toward the sound.
17 A Pru stops folding.
18 D PRU (very quietly): Who is it?
19 D TEODOR [O.S.] (a long pause, then no longer polite): Say that again.
20 A ¶ Harlan sets down the glass.
21 A The lilies shiver in a draught from the study.
22 A Rowan takes one step toward the hall, and Odile, without turning her head, says their name like a warning.
23 D ODILE: Rowan.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05056.json
### SCENE s05056 | INT. SELF-STORAGE UNIT 114 - DAY
Detected names (may be incomplete or contain aliases): HOLLIS, THE WOMAN, WADE, ODALYS, CAL
1 A ¶ ON CAMERA: a roll-up door half open, daylight on concrete.
2 A The camera operator's breathing is audible.
3 A ¶ Hollis, 60s, in a sweat-stained Stetson, kneels over a trunk.
4 A Behind him, boxes stacked to the ceiling, saddles, a dented tin lantern.
5 A ¶ A woman stands in the doorway with her arms crossed.
6 A She does not give her name.
7 A She has a leather satchel and a very flat voice.
8 D HOLLIS: Told the office it was all family stuff. Photographs. My granddad's saddle.
9 D THE WOMAN: And the brand book.
10 D HOLLIS: Didn't say a word about no brand book.
11 D THE WOMAN: You didn't have to.
12 A ¶ Hollis opens the trunk.
13 A Nothing.
14 A Dust.
15 D HOLLIS: Well, it ain't here.
16 A ¶ Hollis's phone RINGS.
17 A He answers on speaker.
18 D WADE [V.O.] (tinny): Pa? You in there yet? Don't open nothing till I get there.
19 D HOLLIS: Too late, son.
20 D WADE [V.O.]: Is somebody with you?
21 A ¶ Hollis looks at the woman.
22 A She looks at the camera.
23 A For a long time none of them say anything.
24 D THE WOMAN: Tell him it's Odalys. Tell him I came the long way round.
25 D HOLLIS (into the phone): It's Odalys.
26 D WADE [V.O.] (a pause, then flat): I'm ten minutes out. Stay put.
27 A ¶ The line goes dead.
28 A Hollis puts the phone in his pocket and does not look up.
29 D HOLLIS: He ain't gonna be happy.
30 D ODALYS: No.
31 D HOLLIS: You gonna wait?
32 D ODALYS: I have waited thirty years, Mr. Hollis. Ten minutes is nothing.
33 D CAL (behind the camera): Are we still rolling?
34 A ¶ Nobody answers him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05017.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05126.json
### SCENE s05126 | EXT. THE MARGARET ANN - NORTH SEA - DAY
Detected names (may be incomplete or contain aliases): SAL, JEN, MO, RO, BIG DAVE
1 A ¶ Grey water.
2 A Grey sky.
3 A Gulls.
4 A ¶ A restored 1890s sailing smack, brown sails patched, bobbing hard.
5 A The crew wear wool jerseys and oilskins of the period, a living-history charter for tourists.
6 A ¶ SAL, 60, skipper, white beard, stands at the tiller.
7 A Weather in every wrinkle.
8 A ¶ JEN, 25, pulls a net hand over hand.
9 A MO, 19, coils rope badly.
10 A ¶ Between them, near the mast, a WOMAN sits on an upturned crate.
11 A Mid-30s.
12 A A city coat, no oilskin.
13 A Dry shoes.
14 A She watches the horizon like she's counting something.
15 A ¶ Spray.
16 D JEN (to Mo): Not like that. Over, under.
17 D MO: That's what I did.
18 D JEN: It's not.
19 A ¶ Mo tries again.
20 A Worse.
21 D SAL: Leave him, Jen. Sea'll teach him.
22 D JEN: Sea'll drown him.
23 D SAL: Same lesson.
24 A ¶ The Woman almost smiles.
25 A ¶ Wind.
26 A Canvas SNAPS.
27 D SAL [CONT'D] (to the Woman): You'll want to move, miss. Boom's coming round.
28 D THE WOMAN: I'm fine.
29 D SAL: You're not.
30 A ¶ She doesn't move.
31 A ¶ Silence.
32 A ¶ A gull.
33 A Then another.
34 A ¶ The boom swings.
35 A Fast.
36 A ¶ Jen dives.
37 A Catches the Woman by the collar.
38 A They roll across the deck.
39 A ¶ The boom sails over, an inch above.
40 A ¶ Quiet.
41 A Everyone breathing.
42 D JEN (shaking): Are you out of your mind?
43 D THE WOMAN (flat): Probably.
44 A ¶ Sal lashes the boom.
45 A Hard hands, hard face.
46 D SAL: What's your name, miss?
47 D THE WOMAN: Ro.
48 D SAL: Rosalind?
49 D RO: Just Ro.
50 D MO (staring): You weren't scared.
51 D RO: I was.
52 A ¶ Another engine, from behind the fog.
53 A ¶ Out of the mist comes a harbour patrol launch.
54 A At the rail, BIG DAVE, 50s, enormous in a yellow slicker, peaked cap, a clipboard in a fist like a shovel.
55 D BIG DAVE (through a megaphone): Margaret Ann! Permit check!
56 D SAL (muttering): Of course.
57 A ¶ Big Dave looks across the water.
58 A Finds Ro.
59 A His expression softens.
60 D BIG DAVE (not on the megaphone): Rosalind. Your mother's been calling the harbour all morning.
61 A ¶ Ro closes her eyes.
62 D JEN (to Ro, quietly): Your mother?
63 D RO: I wanted to see where she grew up.
64 A ¶ Mo goes back to his rope.
65 A Over, under.
66 A Right this time.
67 A ¶ Rain begins.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05064_1.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05088.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05036.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05180.json
### SCENE s05180 | INT. HARBORVIEW VETERINARY CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): RUIZ, THE SQUAD, OKAFOR
1 D RUIZ [V.O.]: Every war leaves a trail of paperwork. Nobody tells you the paperwork is the part that gets people killed.
2 A ¶ Fluorescent tubes buzz over a waiting room that smells of bleach and wet dog, and Detective Mara Ruiz, fifties, rain on her shoulders, stands at the reception desk with a manila folder pressed to her chest while Dr. Femi Okafor, forties, blood on his scrubs, pulls a shutter down over the front window, and behind them four uniformed soldiers in damp fatigues fan out through the kennel hall, boots squeaking on the linoleum, rifles low, checking cages full of sleeping beagles and one furious cat.
3 D RUIZ [V.O.]: Three tours, one medal, and now a vet clinic at two in the morning. That's how it ends for the kind of man we came to find.
4 D THE SQUAD: Hall's clear!
5 D RUIZ: Dr. Okafor, I'm going to ask you once.
6 D OKAFOR: You have been asking since you walked in.
7 D RUIZ: Where is Sergeant Hale?
8 D OKAFOR: Sedated. Surgery two. He walked in with a shrapnel wound and a dog that was bleeding worse than he was.
9 D RUIZ: A dog.
10 D OKAFOR: A Belgian Malinois. Military issue, tag filed off. I stitched the dog first. The man made me.
11 D RUIZ: And you didn't think to call anyone.
12 D OKAFOR: I thought a dying animal outranked a phone call. Was I wrong?
13 D RUIZ: You're harboring a deserter who is wanted in connection with eleven deaths.
14 D OKAFOR: I'm harboring a patient. He has a pulse. That's all my license asks me to check.
15 D RUIZ: Your license is going to be the least of your problems.
16 D OKAFOR: Then arrest me after he wakes up. I'd like him to wake up.
17 D RUIZ: You think he's innocent.
18 D OKAFOR: I think he talks in his sleep. Under anesthesia he kept saying the same name, over and over, and it wasn't a woman's name and it wasn't a place.
19 D RUIZ: Whose name?
20 D OKAFOR: Yours.
21 D RUIZ [V.O.]: There it was. Twenty years of keeping my past in a locked drawer, and a veterinarian hands me the key.
22 D RUIZ: He's lying to you.
23 D OKAFOR: Sedatives don't let you lie, Detective. That's rather the point of them.
24 D THE SQUAD: Detective, we have movement in surgery two!
25 D RUIZ: Nobody touches that door until I say.
26 D OKAFOR: He'll tear his sutures if he stands.
27 D RUIZ: Then he should have thought about that before he ran.
28 D OKAFOR: Ran from what? Tell me that much. Tell me what a man like that runs from.
29 D RUIZ: From me.
30 A ¶ Silence.
31 A The cat hisses.
32 A Somewhere in the back, a steel tray CLATTERS to the floor, and Ruiz, hand on her holster, shoulders through the swinging doors as the Squad closes in behind her, lamps swinging across the kennels, Okafor following with his palms raised, and on the operating table the blanket lies empty, the window above it open to the rain, the Malinois sitting upright beneath it, waiting, staring at her as if it had been told she would come.
33 D RUIZ [V.O.]: He didn't run from me. He ran to me. The dog was the message. The dog was always the message.
34 D OKAFOR: What does that mean?
35 D RUIZ: It means we are standing in exactly the place he wanted us to be.
36 D THE SQUAD: Contact! Front entrance!
37 A ¶ The lights die.
38 A Rain.
39 A Boots.
40 A Dark.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05153.json
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
