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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05008.json
### SCENE s05008 | INT. HOTEL - 9TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): CELIA VANCE, STRANGER, DAD, MARCUS, PRIYANKA
1 A ¶ Long.
2 A Carpeted.
3 A Quiet as a held breath.
4 A Brass numbers glow on doors.
5 A A housekeeping cart sits abandoned by the elevators, a room-service tray on the floor, a single shoe in the hall.
6 A ¶ CELIA VANCE, 30s, evening dress, heels in hand, walks fast with a phone to her ear.
7 A Behind her, a STRANGER in a grey suit follows at a polite distance.
8 D CELIA (into phone): Dad I told you I'm fine, the party was fine, I'm in the hallway now, I'm literally at my door.
9 D DAD [V.O.] (over phone, warm): You sound off. Is somebody with you?
10 A ¶ She glances back.
11 A The STRANGER stops, checks his watch, smiles.
12 D CELIA: No. Nobody.
13 A ¶ She reaches her door.
14 A Swipes.
15 A Red light.
16 A Swipes again.
17 A Red.
18 A ¶ ON PHONE: Front Desk: Your key has expired.
19 A Please visit reception.
20 D CELIA (muttering): Great. Perfect.
21 A ¶ The STRANGER steps closer, hands visible.
22 D STRANGER: Having trouble? I can call down. I'm in 912, just there.
23 D CELIA: I'm fine thank you
24 D STRANGER: Of course. I'm Marcus by the way. Marcus Hale. We met at the bar, I bought you the gin.
25 A ¶ Celia freezes.
26 A A beat.
27 A Her face loosens.
28 D CELIA: Oh my god. Marcus. You're the one who spilled it on my coat.
29 D MARCUS: Guilty. I've been trying to apologise all night. Honestly I followed you because I felt terrible.
30 A ¶ She laughs, relieved, the phone drooping at her side.
31 A Dad's tiny voice keeps talking.
32 D DAD [V.O.]: Celia? Celia are you there
33 D CELIA (into phone): Dad I'll call you back
34 A ¶ She hangs up.
35 A The corridor settles.
36 A Down the hall an elevator DINGS and the doors slide, and out walks a woman in a hotel blazer, name badge reading PRIYANKA, and behind her two men in dark coats who are definitely not guests.
37 D MARCUS (low, not smiling now): Don't turn around. Walk with me.
38 D CELIA: What
39 D MARCUS: Your father sold something he shouldn't have. They're here for you. I'm the one who's here to get you out.
40 A ¶ The housekeeper sets down her cart.
41 A Her hand goes to her pocket.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05145.json
### SCENE s05145 | INT. RIVERSIDE BANQUET HALL - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, GWEN, ASH
1 A ¶ Streamers.
2 A Half-eaten cake.
3 A A DJ booth abandoned mid-song.
4 A The last guests have gone.
5 A Two people remain.
6 A ¶ Gwen, 30s, in a bridesmaid dress and one shoe, drags a folding chair into the middle of the floor and drops onto it like she's been shot.
7 D GWEN: Best. Wedding. Ever.
8 A ¶ The side door SLAMS open.
9 A Ash, 30s, they/them, enters in a velvet blazer, holding a tray of leftover champagne flutes like a waiter at a very strange restaurant.
10 D ASH: You did not say that during the toast.
11 D GWEN: During the toast I was holding in a sneeze and a sob.
12 D ASH (setting down the tray): Same thing, honestly.
13 A ¶ Gwen grabs a flute.
14 A Ash takes one.
15 A They clink.
16 A Neither drinks.
17 D GWEN: Okay. Real talk. Did you see the groom's uncle?
18 D ASH: The one who made the toast to "his many wives"?
19 D GWEN: He has one wife.
20 D ASH: Then he's very ambitious.
21 A ¶ Gwen cracks up.
22 A Ash pretends not to be pleased.
23 D GWEN: You're good at this, you know that? Making people feel like they're not at a funeral.
24 D ASH: They are at a funeral. It's just a really good one.
25 A ¶ The overhead speaker CRACKLES.
26 A A distant voice, faint and metallic, comes through the PA.
27 D DJ [V.O.] (over speaker): Hey, uh, last song's still queued up. Should I play it?
28 D GWEN (to the ceiling): What song?
29 D DJ [V.O.]: It's, uh... it's labeled "DO NOT PLAY."
30 A ¶ Gwen and Ash exchange a look.
31 D ASH: Obviously play it.
32 D GWEN: Ash, no.
33 D ASH: Gwen. Yes.
34 A ¶ The speakers hum.
35 A A single piano note.
36 A Another.
37 A Then a voice, a woman's voice, soft, singing in a language neither of them knows.
38 A ¶ The room goes still.
39 A The streamers stop swaying.
40 A The candles on the tables light themselves, one by one, in a perfect ring around the dance floor.
41 D GWEN (whispering): Please tell me that's the DJ's idea of a joke.
42 D ASH (not joking): The DJ left at ten.
43 D DJ [V.O.] (over speaker, shaking): Guys... I'm still in the booth. I didn't press anything.
44 A ¶ The door at the end of the hall SWINGS open on its own.
45 A A figure in a long pale dress stands there, face hidden, hands folded in front like a bride.
46 D GWEN (small): Is that... is that Priya's grandmother?
47 D ASH: Priya's grandmother died in March.
48 D GWEN: So that's a no.
49 A ¶ The figure takes one step.
50 A The candles all lean toward it.
51 D ASH (very calm): Okay. New plan.
52 D GWEN: I love a new plan.
53 D ASH: We run.
54 D GWEN: Oh, I love that plan.
55 A ¶ They bolt for the exit together.
56 A The side door SLAMS shut behind them.
57 A The song swells.
58 A ¶ The figure lifts its veil.
59 A ¶ Underneath, grinning, is the DJ.
60 D DJ (lowering the headset): Gotcha.
61 D DJ [V.O., CONT'D] (over speaker, offended): Hey! That's my line.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05148_1.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05087.json
### SCENE s05087 | INT. THE BRANDT HOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): COLLEEN, WALTER
1 A ¶ The power cut hit forty minutes ago.
2 A A single candle gutters on the granite island.
3 A Rain runs down the dark windows.
4 A Somewhere in the neighbourhood, a generator coughs and gives up.
5 A ¶ Colleen Brandt, 50s, still in her work lanyard, stands at the counter with a bottle of wine she can't open without light.
6 A Her husband's boss's wife has not yet arrived.
7 A Her son's Xbox sits uselessly on the table.
8 A ¶ Walter Pryce, 40s, in a damp suit, comes in from the garage with a flashlight.
9 D COLLEEN: You're late.
10 D WALTER: There's a tree down on Maple. I walked.
11 D COLLEEN (a beat): In those shoes.
12 D WALTER: In these shoes.
13 A ¶ He sets the flashlight on its end.
14 A It throws a pale circle at the ceiling.
15 A The refrigerator hums for a moment, then dies with a sigh.
16 A ¶ Rain.
17 D COLLEEN: I want to say something and I want you to let me finish.
18 D WALTER (beat): Okay.
19 D COLLEEN: Twenty-two years at Halvorsen. I trained every one of those people upstairs. I wrote the manual they pretend to follow. Last Thursday they put me in a room and a boy named Tyler, who is twenty-nine, told me my role was "being reimagined." He used the word "journey." He said I had been on a journey.
20 D WALTER: Colleen...
21 D COLLEEN (beat): I'm not finished. I smiled. I thanked him. I went to my desk and I alphabetised the supply cupboard because I did not know what else to do with my hands. And then I came home and made a lasagna that nobody ate, because the power went, and that's the whole of it.
22 A ¶ The candle gutters.
23 A She finally puts the wine down.
24 A ¶ This is the last evening either of them will pretend the house is fine.
25 D WALTER (quietly): I got the same email.
26 A ¶ Colleen turns.
27 A For the first time, she looks at him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05030.json
### SCENE s05030 | INT. DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, TEO
1 A ¶ Rain drums on the corrugated roof.
2 A Somewhere a forklift beeps, backing up, backing up, never arriving.
3 A ¶ Sodium light buzzes over the sorting belt.
4 A Parcels slide past, unclaimed.
5 A ¶ He stands at the belt with a scanner, eighteen, new vest still creased.
6 A She watches him from the mezzanine stairs and does not come down.
7 D THE WOMAN: Seven weeks. That's what the last kid lasted. Seven weeks, and he cried in the van park like it was a funeral. You want to know what I told him?
8 D TEO (beat): Not really.
9 D THE WOMAN: I told him the belt doesn't care. That's the whole job. It doesn't care that your mother's sick, or that you wanted to be a drummer, or that you're clever. It just keeps coming, and the only thing you get to decide is whether you flinch.
10 A ¶ Water finds a gap in the roof and ticks into a bucket.
11 A Nobody has emptied the bucket in a long time.
12 A ¶ He lifts a parcel, scans it, sets it down.
13 A His hands are shaking.
14 A He does it again anyway.
15 D TEO: You didn't say your name.
16 D THE WOMAN (beat): Marguerite. Nobody uses it. Scan the next one.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05150_0.json
### SCENE s05150_0 | INT. STORAGE FACILITY - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PHONE
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- Rain on the corrugated roof.
3 A Orange sodium light bleeding through the blinds.
4 A ¶ -- A keypad gate.
5 A Its red light blinks, blinks, blinks.
6 A ¶ -- THE WOMAN, 30s, soaked coat, a bolt cutter bag over her shoulder, walks the long corridor of roll-up doors.
7 A Her boots squeak on the concrete.
8 A ¶ ON PHONE (TEXT FROM NELL): where r u
9 A ¶ ON PHONE (TEXT FROM NELL): mum's flat is empty u said you'd be done by 9
10 A ¶ -- The woman thumbs the screen dark.
11 A Doesnt reply.
12 A ¶ -- Fluorescent tubes flicker overhead.
13 A One dies.
14 A Another takes over.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05012.json
### SCENE s05012 | EXT. MOONDUST TACOS FOOD TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): ZIP, LUCY, BIG MO, GRANDMA TESS
1 A ¶ A silver food truck sits on a gravel lot under three moons.
2 A Steam curls from the grill, and a tiny robot named ZIP wobbles along the counter on caster wheels, juggling a lime, a squeeze bottle and a napkin while LUCY the cook flips tortillas without looking and BIG MO, her towering brother, lifts a crate of glowing peppers over a sleepy dog that snores by the generator.
3 A Two teenagers in shiny silver jackets lean on the window and argue about which moon is the best moon.
4 D LUCY (to everyone): Okay team, last orders, then we blast off for the next planet!
5 D ZIP (muttering to self): Lime, lime, where is the lime... oh. I am holding the lime.
6 D BIG MO (to Lucy): Boss, the engine is making that noise again. The sad one.
7 D LUCY (shrugging): Then sing it a happy song.
8 A ¶ A phone buzzes on the counter.
9 A Lucy taps it, and a hologram of GRANDMA TESS flickers above the grill.
10 D GRANDMA TESS [V.O.]: Lucy, sweetheart, are you eating? You sound thin.
11 D LUCY (to the phone): Grandma, you can't hear thin.
12 D GRANDMA TESS [V.O.]: I can hear everything. Tell Mo to stop lifting with his back.
13 D BIG MO (calling out): I heard that!
14 D ZIP (to the dog, whispering): Everybody is so loud tonight.
15 A ¶ The dog opens one eye, sighs, and goes back to sleep.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05111_0.json
### SCENE s05111_0 | INT. NIGHTBIRD STUDIOS - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): RILEY, PRIYA, COLE, DEZ
1 A ¶ Midnight.
2 A Rain on the roof.
3 A ¶ HISS of the tape machine.
4 A A red RECORD light.
5 A ¶ Foam panels.
6 A Cables like veins.
7 A A grand piano under a sheet.
8 A ¶ RILEY, 30s, producer, hunches over the console.
9 A He rubs his eyes.
10 A Coffee gone cold.
11 A ¶ Behind the glass, PRIYA, 20s, singer, stands at the mic.
12 A Headphones on.
13 A Eyes closed.
14 A ¶ COLE, 40s, engineer, slouches by the patch bay.
15 A He chews a pen.
16 D RILEY (into talkback): Take eleven. From the bridge.
17 D PRIYA (through speaker): Can I hear the guide?
18 D RILEY: It's in your cans.
19 D PRIYA: It's not.
20 A ¶ He checks the fader.
21 A Pushes it up.
22 A ¶ BZZZT.
23 A Feedback.
24 A ¶ Everyone flinches.
25 D COLE: That wasn't me.
26 D RILEY: Mute the room mics.
27 D COLE: They're muted.
28 A ¶ Silence.
29 A ¶ Then a soft sound in the speakers.
30 A A breath.
31 A ¶ Not Priya's.
32 D PRIYA (through speaker): Riley? Who's in here with me?
33 D RILEY: Nobody. It's the monitors.
34 A ¶ He taps the glass.
35 A She doesn't turn.
36 A ¶ PHONE BUZZES on the console.
37 A He grabs it.
38 A ¶ ON PHONE: where r u
39 A ¶ ON PHONE: the door is open
40 A ¶ He frowns.
41 A Looks at the live room door.
42 A Shut.
43 A Locked.
44 A Light off.
45 D COLE: Who is it?
46 D RILEY: Dez. He's not even in the building.
47 A ¶ He thumbs a call.
48 A Puts it on speaker.
49 A ¶ RING.
50 A RING.
51 D DEZ [V.O.] (distorted, far): Riley? Why are you calling from my house?
52 D RILEY: What? I'm at the studio.
53 D DEZ [V.O.]: I'm at the studio. I'm in the live room. Priya's with me.
54 A ¶ Beat.
55 A ¶ Riley looks through the glass.
56 A ¶ Priya is alone.
57 A Mouth open.
58 A Singing.
59 A No sound.
60 D COLE: Kill the tape.
61 D RILEY: I'm trying.
62 D COLE: Kill it!
63 D RILEY: It's not responding!
64 A ¶ BANG.
65 A ¶ The piano sheet FLIES off.
66 A ¶ The keys PLUNGE.
67 A Alone.
68 A ¶ A chord.
69 A Low.
70 A Wrong.
71 D PRIYA (through speaker): It knows my name.
72 D RILEY: Priya, come out. Now.
73 D PRIYA (through speaker): It's saying it.
74 D COLE: Saying what?
75 D DEZ [V.O.]: Don't open the door.
76 D RILEY: Dez, where are you?
77 D DEZ [V.O.]: Don't open the door don't open the door--
78 A ¶ CLICK.
79 A Dead line.
80 A ¶ A dog BARKS outside.
81 A Frantic.
82 A A delivery kid on the sidewalk ducks under an awning, phone raised, filming the building.
83 A The dog drags its leash toward the street.
84 A ¶ Inside, the lights DIE.
85 A ¶ Red RECORD light only.
86 D COLE: Where's the exit?
87 D RILEY: Behind you.
88 D COLE: There's a wall behind me!
89 D PRIYA (through speaker): Riley. Riley. Riley.
90 D RILEY: I'm coming.
91 D COLE: Don't.
92 D RILEY: She's in there!
93 D COLE: She's not alone!
94 A ¶ The glass CRACKS.
95 A A line zigzags across it.
96 A ¶ Priya turns.
97 A Slowly.
98 A ¶ Her eyes are open.
99 A They aren't hers.
100 D PRIYA (her voice, doubled): Take twelve.
101 A ¶ The speakers SCREAM.
102 A ¶ Every fader slams to the top.
103 A ¶ Riley grabs the door.
104 A It burns.
105 A ¶ He kicks it.
106 A SLAM.
107 A It gives.
108 A ¶ He drags Cole through.
109 A They hit the corridor running.
110 A ¶ The red light follows them.
111 A Down the hall.
112 A Faster.
113 A ¶ BOOM.
114 A ¶ The whole building exhales.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05150_1.json
### SCENE s05150_1 | INT. STORAGE FACILITY - CORRIDOR C - CONTINUOUS
Detected names (may be incomplete or contain aliases): INTERCOM, THE WOMAN, ODELL
1 A ¶ She stops at Unit 214.
2 A A padlock the size of her fist.
3 A She sets down the bag.
4 D INTERCOM [V.O.] (crackling): Unit two fourteen is on the lease til the end of the month ma'am. Just so you know.
5 A ¶ The woman looks up at a small speaker grille above the door.
6 D THE WOMAN: You're still here. Its past midnight.
7 D ODELL [V.O.]: Night manager. Odell. I do the walkthroughs whether anyone's here or not.
8 A ¶ MONTAGE - THE LOCK
9 A ¶ -- Bolt cutters.
10 A Jaws bite.
11 A Nothing.
12 A ¶ -- Bolt cutters again.
13 A A SNAP.
14 A The padlock drops.
15 A ¶ -- Rain.
16 A Rain.
17 A A drip falling from a pipe into a bucket somewhere far off.
18 A ¶ -- The door rattles upward on its track.
19 A Cold air rolls out.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05093.json
### SCENE s05093 | INT. SUBBASS SOUND - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): LINUS, MO, WREN, DENISE, PRIYA
1 A ¶ CLOSE ON a mixing console, faders crawling up and down by themselves.
2 A Pull back to find Mo Delgado, 30s, producer, hoodie, three coffees deep, chewing a pen cap.
3 A ¶ Through the glass, in the vocal booth, Linus Thorne, 50s, a former one-hit wonder in a leather vest, stands before a mic with his eyes closed, singing very gently about a sandwich.
4 D LINUS [V.O.] (through talkback, sincere): "Oh, ham, you were never mine..."
5 A ¶ Mo presses the talkback button.
6 D MO: That's great, Linus. Another take. Maybe less ham.
7 A ¶ Wren Okoye, 20s, the engineer, slumped at the second chair with a laptop, doesn't look up.
8 D WREN (to the room): We've done forty-one takes.
9 D MO (muttering, to himself): Forty-two, with feeling. Forty-two.
10 A ¶ Mo's phone lights up on the desk.
11 A ¶ ANGLE ON PHONE SCREEN
12 A ¶ "LABEL - DENISE".
13 A ¶ Mo answers on speaker.
14 D DENISE [V.O.]: Mo. Tell me the single is done.
15 D MO: It's, uh, ripening.
16 D DENISE [V.O.]: It's a song about lunch meat. Is it done.
17 A ¶ Wren mouths "No" at the phone.
18 A Mo waves her off.
19 D MO (to everyone, bright): Okay team! Quick huddle, we're gonna just, vibe.
20 A ¶ Priya Ramanathan, 20s, the assistant, enters with a tray of tea, nods at nobody, sets it down, and sits.
21 A ¶ WE SEE Linus through the glass, tapping the window, mouthing something.
22 A Everyone ignores him.
23 D PRIYA (to Mo only): He's asking if the lunch meat is "emotionally honest" enough.
24 D MO (to Priya): Tell him it's the most honest ham I've ever heard.
25 A ¶ BACK TO SCENE
26 D WREN (to herself, typing): I'm updating my resume.
27 D DENISE [V.O.]: I heard that.
28 A ¶ Mo sinks into his chair.
29 A Nobody speaks.
30 A The faders keep creeping.
31 A Take forty-three begins, soft and sincere and terrible.
