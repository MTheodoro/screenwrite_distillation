You classify screenplay action lines that have NO character as their agent, for a writing tool.
Every line in the script must belong somewhere, so each marked line (`*`) gets exactly one kind:

- `setting`  : the place, scenery, light, weather, time of day, what a space looks/sounds like as a whole
               ("A cramped kitchen.", "Rain hammers the windows.", "Dawn over the harbor.", "Silence.")
- `event`    : something happens or an object/sound/vehicle/machine acts, with no character doing it
               ("The phone rings.", "A car backfires outside.", "Cash.", "The door swings shut.", "A light blinks.")
- `extra`    : done by people or creatures who are NOT characters of the scene (unnamed passers-by, a crowd that
               is not in the names list, an animal, a monster) ("A waiter passes.", "Two women lean on its bumper.")
- `camera`   : shot, edit or on-screen-text directions ("CLOSE ON the letter.", "We see...", "INSERT - phone",
               "SUPER: 1999", "Back to scene.", "INTERCUT", "Time cut.")
- `abstract` : narration, reflection, commentary, theme, time passing, things that are not visible action
               ("Some wounds never close.", "Years pass.", "This is the last time they will speak.")
- `character`: actually done by / describing a character in the names list (the marking was wrong). Then also give
               the name(s).

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block. Only `*` lines need a label;
the rest is context.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0114.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00266 | INT. DERELICT ORPHANAGE, WEST WING DORMITORY - NIGHT
Detected names (may be incomplete or contain aliases): EUGENIA FALLOWFIELD-ADEYEMI, NOAH, OKWUOSA-BERGMAN, LENA TAKAHASHI-DUMONT, CHILD, WREN, TAPE
* 1 A ¶ Iron beds in rows.
* 2 A Mildewed mattresses.
* 3 A A rocking horse with one glass eye.
* 4 A Moonlight through a shattered window.
5 A ¶ Three paranormal investigators move in a tight triangle, flashlights jittering.
6 A ¶ DR. EUGENIA FALLOWFIELD-ADEYEMI (50s, parapsychologist, wool coat, an old tape recorder in her hand) leads.
7 A ¶ NOAH "NO" OKWUOSA-BERGMAN (20s, camera operator, headlamp) films over her shoulder.
8 A ¶ LENA TAKAHASHI-DUMONT (30s, sound engineer, headphones, boom mic) sweeps the room with a long pole.
9 D EUGENIA (to the group): Quiet, please. I want a clean recording.
10 D NOAH: Copy.
11 D LENA: Copy.
12 A ¶ They freeze.
* 13 A The tape recorder whirs.
* 14 A A long beat.
* 15 A The wind moves through the dormitory like breath.
16 D EUGENIA (into the recorder): Is anyone here?
* 17 A ¶ Silence.
* 18 A Then, faintly, from the far end:
19 D CHILD [O.S.]: Yes.
20 A ¶ All three jump.
21 A Lena stumbles into the rocking horse; it sways, creaking.
22 A Noah's camera light lurches.
23 D EUGENIA (whispering): Did you hear that?
24 D LENA: Yes.
25 D NOAH: I got it.
26 D EUGENIA (into the recorder): What is your name?
27 D CHILD [O.S.]: Wren.
28 D EUGENIA: Hello, Wren. How old are you?
29 D CHILD [O.S.]: Nine.
30 D EUGENIA: Do you live here?
31 D CHILD [O.S.]: We all do.
* 32 A ¶ The temperature drops.
* 33 A Their breath fogs.
34 D LENA (to herself): Okay. Okay. This is fine.
35 D NOAH: It's very fine.
36 D LENA: It's extremely fine.
37 D EUGENIA: Wren, can you show us where you are?
* 38 A ¶ A pause.
* 39 A Then, down the dormitory aisle, a lantern flickers into being.
40 A Under it stands a small figure in a gray nightshirt, hands clasped, face pale and ordinary.
41 D NOAH: Oh my god.
42 D EUGENIA (steady): Hello, Wren.
43 D WREN (smiling): Hello.
44 A ¶ She tilts her head.
* 45 A Behind her, the iron beds begin to rattle, one by one.
46 D LENA: Eugenia.
47 D EUGENIA: I see them.
48 D WREN: They're excited.
49 D EUGENIA: Why?
50 D WREN: You're the first visitors.
51 A ¶ Eugenia opens her mouth.
52 A Closes it.
53 D NOAH (whispering): Please tell me we're leaving.
54 D EUGENIA: Not yet.
55 D LENA: Eugenia!
56 D EUGENIA: Not yet. Wren, who is the one at the back?
57 A ¶ Beyond Wren, in the darkness, a tall shape unfolds from the last bed.
58 A A woman in a nurse's uniform, face hidden in shadow.
59 D WREN: That's Matron.
60 D LENA (very quietly): Matron.
61 D WREN: She's not very nice.
62 A ¶ The nurse steps forward.
* 63 A A single stride, and the whole room tilts.
* 64 A The beds slide.
* 65 A The glass in the window sings.
66 A Lena shrieks and drops the mic.
67 A Noah's camera light flares and goes out.
68 A Eugenia stumbles against an iron frame.
69 D EUGENIA (shouting): Out! Everyone, out!
70 A ¶ They run.
* 71 A The dormitory stretches around them, doors multiplying, corridors lengthening.
72 A Lena sobs.
73 A Noah curses.
74 A Eugenia, hand on the wall, counts doors under her breath.
75 D EUGENIA [CONT'D]: Seven. Eight. Nine. Here!
76 A ¶ She slams through a door.
* 77 A They tumble into the courtyard, grass and moonlight, cold clean air.
78 A ¶ They lie gasping.
* 79 A The orphanage looms behind them, windows dark.
80 D LENA (weeping): Never again.
81 D NOAH: I lost the camera.
82 D EUGENIA (softly): No. You have the tape.
83 A ¶ She holds up the recorder, its light still green.
84 A She presses play.
* 85 A ¶ Her own voice: "Is anyone here?"
* 86 A A pause.
* 87 A Then a small voice, unmistakable:
88 D TAPE [V.O.]: Come back.
89 A ¶ They stare at the recorder.
90 A Slowly, without a word, Lena takes it, crouches, and buries it in the dirt.

### SCENE s00267 | INT. BAGGAGE CLAIM, MIDNIGHT TERMINAL - NIGHT
Detected names (may be incomplete or contain aliases): SABRINA OLUWAFEMI-STRAND, VIC, ANANDARAJAH-KELLER, INSPECTOR MIRA TOLENTINO-ACHEBE
* 1 A ¶ A carousel loops empty.
* 2 A Flickering departures board.
* 3 A The cleaners have gone home.
4 A ¶ SABRINA OLUWAFEMI-STRAND (30s, courier, hard-shell case handcuffed to her wrist) waits at belt six.
5 A ¶ Beside her, a tall man holds a paper cup: VICTOR "VIC" ANANDARAJAH-KELLER (40s, airport security, lanyard, deadpan).
6 A ¶ At the end of the belt, a third figure examines the departures board: INSPECTOR MIRA TOLENTINO-ACHEBE (50s, plainclothes, press badge folded in her palm).
7 D VIC: Ma'am, you've been here three hours.
8 D SABRINA: My bag is delayed.
9 D VIC: Which bag?
10 D SABRINA: The blue one.
11 D VIC: You don't have a blue one.
12 D SABRINA: I'd like to speak to your supervisor.
13 D VIC: I am my supervisor.
14 D SABRINA: Then I'd like another one.
15 D MIRA (without turning): Miss Oluwafemi-Strand.
16 D SABRINA (freezing): Do I know you?
17 D MIRA: Not yet. But I know the case on your wrist.
18 A ¶ Sabrina's hand tightens on the handle.
19 D SABRINA: It's personal.
20 D MIRA: It's evidence.
21 D VIC (to Mira): Evidence of what?
22 D MIRA: Of a very bad weekend.
23 A ¶ Sabrina whips the case up and swings it at Vic's head.
24 A He ducks.
25 A It clips Mira's shoulder.
26 A Mira stumbles back; Sabrina bolts for the exit, dragging the case on its chain.
27 D VIC: Stop!
28 D MIRA: Let her run.
29 D VIC: Inspector?
30 D MIRA (calling): Sabrina! The carousel's about to start!
31 A ¶ Sabrina stops, turns.
* 32 A The belt shudders and begins to turn, empty.
33 A She looks at it, then at them.
34 D SABRINA: What's that supposed to mean?
35 D MIRA (overlapping): It means turn it over.
36 D VIC (overlapping): It means she's cornered.
37 A ¶ ^
38 A ¶ Sabrina stares.
* 39 A The case drops open on its chain, spilling nothing.
* 40 A A few sheets of paper flutter to the floor.
41 D SABRINA (whispering): Oh.
42 D MIRA: Yes.
43 D SABRINA: It's empty.
44 D MIRA: It was always empty.
45 A ¶ Sabrina laughs, short and hollow.
46 A Slowly she sinks to the floor beside the belt.
47 A Vic takes off his lanyard and sets it beside her.
48 D VIC: Tea?
49 D SABRINA: Please.

### SCENE s00268 | INT. LUNAR RELAY STATION "KESTREL-4," COMMAND DECK - SHIP NIGHT
Detected names (may be incomplete or contain aliases): STATION CHIEF AMINATA VOSKUIJLEN-OSEI, DAV, LINDQVIST-KAMARA
* 1 A ¶ A cramped dome of monitors and cables.
* 2 A A slice of Earth hangs in the viewport, blue and fragile.
3 A ¶ STATION CHIEF AMINATA VOSKUIJLEN-OSEI (40s, grey coverall, tied-back hair) sits at the primary console, headset on one ear.
4 A ¶ Beside her, systems tech DAVID "DAV" LINDQVIST-KAMARA (30s, T-shirt, bare feet on the deck) eats a protein bar.
5 D AMINATA: Telemetry's drifting.
6 D DAV: It's always drifting.
7 D AMINATA: Not by this much.
8 D DAV: Let me see.
9 A ¶ He swivels to her screen, bar in his mouth.
10 A Reads.
11 A Swallows.
12 D DAV [CONT'D]: Huh.
13 D AMINATA: Huh?
14 D DAV: That's not drift.
15 D AMINATA: What is it?
16 D DAV: Something is pinging us.
17 D AMINATA: From where?
18 D DAV: Everywhere.
* 19 A ¶ A soft tone sounds.
20 A Both look at the console.
* 21 A A line of green text scrolls past.
22 D AMINATA (reading): "Greetings, Kestrel-Four."
23 D DAV: That's--
24 D AMINATA: It's coming from our own transmitter.
25 D DAV (overlapping): It's a loopback!
26 D AMINATA (overlapping): It's not a loopback!
* 27 A ¶ ^
28 A ¶ They stare at each other.
* 29 A The text continues.
30 D DAV (reading): "We have waited."
31 D AMINATA: Who's "we"?
32 D DAV: Aminata, I'm going to need a minute.
33 D AMINATA: Take two.
34 A ¶ He stands, pacing.
35 A Then stops, hands on his hips.
36 D DAV: Okay. Hypothesis. Either it's a prank by the Mars crew--
37 D AMINATA: They're asleep.
38 D DAV: --or it's a prank by the ground crew--
39 D AMINATA: They're in a meeting.
40 D DAV: --or it's us.
41 D AMINATA: Us?
42 D DAV: We're hallucinating. Oxygen's low.
43 A ¶ She taps a gauge.
* 44 A It reads perfect.
45 D AMINATA: Oxygen's fine.
46 D DAV: Damn.
* 47 A ¶ Another tone.
* 48 A The text changes.
49 D AMINATA (reading): "Please do not be afraid."
50 D DAV: I'm afraid.
51 D AMINATA (dry): Me too.
52 A ¶ She types: WHO ARE YOU.
* 53 A The cursor blinks.
* 54 A Then the reply:
* 55 A ¶ "A friend.
* 56 A Look up."
57 A ¶ They look up.
* 58 A Through the viewport, high above the lunar horizon, a ring of pale lights forms, silent, orderly, expanding.
59 D DAV (whispering): Chief.
60 D AMINATA: I see it.
61 D DAV: Should we call Houston?
62 D AMINATA: We should wake the Mars crew.
63 D DAV: Both.
64 D AMINATA: Both.
65 A ¶ Neither moves.
* 66 A The lights grow.
* 67 A In the viewport the Earth looks smaller than before.
68 D DAV: Aminata?
69 D AMINATA: Yes?
70 D DAV: I never finished my protein bar.
71 A ¶ She almost smiles.
72 A Reaches over and takes it from his hand.
73 A Takes a bite.
74 D AMINATA: Neither did I.
75 A ¶ She chews, slowly.
76 A They watch the sky.

### SCENE s00269 | INT. FREIGHT ELEVATOR, SHUTTERED TEXTILE MILL - NIGHT
Detected names (may be incomplete or contain aliases): MAN, LEATHER JACKET, WOMAN, STEFAN, NAOMI
* 1 A ¶ A steel cage the size of a small room.
* 2 A Dim bulb.
* 3 A A brass gate.
* 4 A Dust.
5 A ¶ A MAN IN A LEATHER JACKET (40s, scar through his lip) leans against the back wall.
6 A A smoking pistol hangs loose in his fist.
* 7 A ¶ The gate rattles.
* 8 A A hand grips it from outside.
9 A ¶ A WOMAN (30s, long coat, blood on her cuff) slides in, pulls the gate shut, and presses the lever.
* 10 A The elevator lurches down.
11 A ¶ They face each other.
* 12 A Silence, except for the cables.
13 D WOMAN: You're late.
14 D MAN: You're early.
15 D WOMAN: I was told midnight.
16 D MAN: Midnight was the plan.
17 A ¶ She looks at his pistol.
18 A He tucks it slowly into his waistband.
19 D WOMAN: Where's the third?
20 D MAN: Dead.
21 D WOMAN: How?
22 D MAN: Quickly.
* 23 A ¶ The cable groans.
* 24 A The bulb flickers.
25 A She steps close and he flinches, then stills.
26 A ¶ She reaches into his jacket, withdraws a leather folio, flips it open.
* 27 A A set of blueprints.
* 28 A A passport.
* 29 A A photograph.
30 D WOMAN [CONT'D] (reading): Matteo Ferrante.
31 D MAN: That's me.
32 D WOMAN: It isn't.
33 D MAN: It is tonight.
34 D WOMAN (low): Tell me your real name.
35 D MAN: Why?
36 D WOMAN: So I know whom to shoot.
37 A ¶ He grins, tilts his head.
* 38 A The elevator thumps to a halt between floors.
* 39 A The lights die.
* 40 A Total dark.
* 41 A ¶ In the dark, a scuffle.
* 42 A A thud.
* 43 A A gasp.
* 44 A A pistol clatters on the floor.
45 A Someone lunges, someone slams a wall, a body falls against the gate and it rattles open.
* 46 A The bulb sputters back to life.
47 A ¶ The woman has the man pinned against the cage, forearm across his throat.
48 A His hands are on her wrists.
49 A Both breathing hard.
* 50 A The pistol lies between their feet.
51 D MAN [CONT'D] (strained): Stefan.
52 D WOMAN: Stefan what?
53 D STEFAN: Stefan Halloran.
54 D WOMAN (releasing him): My brother.
55 D STEFAN: Naomi.
56 D NAOMI: You're alive.
57 D STEFAN: Barely.
58 A ¶ She slaps him, hard.
59 A Then hugs him, fiercer than a boxer.
60 D NAOMI [CONT'D]: Twelve years.
61 D STEFAN: Eleven and a half.
62 D NAOMI: I'm still going to kill you.
63 D STEFAN: Do it after we get out.
* 64 A ¶ The elevator groans.
* 65 A Starts to move again, down, into the dark.

### SCENE s00270 | INT. ROLLER RINK SNACK BAR - CLOSING TIME
Detected names (may be incomplete or contain aliases): IMANI VOSS, TEODOR LIND, GRANDMA PEARL, DEZ, ACHTERBERG, DJ, CLEO
* 1 A ¶ A cramped counter under a flickering neon sign.
* 2 A The popcorn machine ticks as it cools.
* 3 A Mirror-ball light crawls over a floor of scuffed maple.
* 4 A Rental skates hang in crooked rows.
5 A ¶ IMANI VOSS (30s, braids pinned up, rink-staff polo two sizes big) wipes the counter in slow circles.
6 A She has been wiping the same spot for a while.
7 A ¶ TEODOR LIND (30s, rangy, wool coat, skate laces knotted round one wrist) stands at the far end holding a paper boat of cold fries.
8 D IMANI: We close in five.
9 D TEODOR: I know. I'm eating.
10 A ¶ Imani nods.
11 A Keeps wiping.
12 A ¶ GRANDMA PEARL (70s, tiny, sequined cardigan, terrifyingly good on skates) glides up to the counter and raps it twice with a knuckle.
13 D PEARL: Two cocoas. One for me, one for the man who's about to say something.
14 D TEODOR: I wasn't going to.
15 D PEARL: That's what I'm afraid of.
16 A ¶ DESMOND "DEZ" ACHTERBERG (20s, gangly, headset askew) leans out of the DJ booth and cups a hand to his mouth.
17 D DEZ: Last song! Anybody left, last song!
18 A ¶ CLEO (teens, braces, rental skates on the wrong feet) wobbles in from the rink, grabs the counter, and lets go of it again at once.
19 A ¶ Imani and Teodor both reach to steady her.
20 A Their hands meet on Cleo's sleeve.
21 A Both pull back.
22 A Cleo sits down on the floor.
23 D CLEO: I'm fine.
24 D IMANI: You're on the floor.
25 D CLEO: Fine on the floor.
26 A ¶ Pearl slides two cocoas across.
27 A Teodor takes his and does not drink it.
28 D TEODOR: I drove four hours.
29 D IMANI: Nobody asked you to.
30 D TEODOR: You did. In March.
31 D IMANI: In March I was talking.
32 A ¶ Pearl turns her cocoa a quarter turn on the counter, in no hurry.
33 D PEARL (to Cleo): Up, sweetheart. This part's boring.
34 A ¶ Cleo scrambles up.
35 A Pearl steers her toward the rink by the elbow, and the two of them roll away.
36 A ¶ Dez cuts the music.
* 37 A The room hums.
* 38 A The mirror ball keeps turning without a song.
39 D IMANI: Teo.
40 D TEODOR: Imani.
41 A ¶ They speak at the same moment.
42 D IMANI: I should have called.
43 D TEODOR: I should have stayed.
* 44 A ¶ Neither laughs.
45 A Imani folds the rag into a square.
46 D IMANI: It's a long drive back.
47 D TEODOR: It is.
48 A ¶ He sets the fries down and picks them up again.
49 A Imani reaches under the counter and hands him a napkin.
50 D TEODOR [CONT'D]: Thanks.
51 D IMANI: Go on. I have to lock up.
52 A ¶ He nods.
53 A At the door he stops, and she does not look up.
54 A Dez flips the house lights on, and the whole rink goes flat and bright.
55 D CLEO [O.S.]: Are we allowed to keep the skates?
56 D DEZ: No!
57 A ¶ Teodor pushes the door open and the cold comes in.

### SCENE s00271 | INT. SALT MINE ELEVATOR HOIST HOUSE - DAY
Detected names (may be incomplete or contain aliases): GUS, TREVINO, LUCKY, MARROW, DEPUTY WENDELL OKORO, REVEREND ISAIAH CALLOWAY-BRANT
* 1 A ¶ Brine-crusted timbers.
* 2 A A cable drum.
* 3 A One lantern.
* 4 A Wind through the slats.
5 A ¶ SHERIFF AUGUSTINE "GUS" TREVINO (50s, gray mustache, bad knee) sits on an upturned crate.
6 A Rifle across his lap.
7 A Waiting.
8 A ¶ Across from him, hands tied to the cable rail: LUCINDA "LUCKY" MARROW (30s, sun-cracked lips, torn duster).
9 A Smiling.
10 A Always smiling.
11 A ¶ Behind her, in the doorway: DEPUTY WENDELL OKORO (20s, borrowed hat, pale).
12 A Counting something on his fingers.
13 A ¶ Gus checks his watch.
14 A Puts it away.
15 D GUS (to himself): Noon. Should be noon.
16 D LUCKY: Time moves slow in a salt mine.
17 D GUS: Didn't ask you.
* 18 A ¶ Silence.
* 19 A A drip somewhere.
* 20 A The cable drum creaks.
21 D WENDELL: Sheriff. The train's late.
22 D GUS: I can hear that.
23 A ¶ Wendell shifts his weight.
* 24 A The floorboards complain.
25 D LUCKY: Your boy's nervous.
26 D GUS: My boy's fine.
27 D WENDELL: I'm fine.
28 A ¶ He isn't.
29 A His hand rests on his holster.
30 A Slides off.
31 A Rests again.
32 A ¶ Gus rises.
33 A Knee pops.
34 A He walks to the slat window.
35 A Looks out at white flats and nothing.
36 D GUS (to the room): Nobody moves till the whistle.
37 D WENDELL: Yes sir.
38 D LUCKY: Hear that? Nobody moves.
39 A ¶ She tugs the rope.
40 A Testing.
41 A Gus turns.
42 D GUS: Quit that.
43 D LUCKY: Quit what?
44 D GUS: You know what.
45 A ¶ She lets the rope go slack.
46 A Smile widens.
47 A ¶ A fourth figure fills the doorway behind Wendell.
* 48 A Quiet.
* 49 A Boots on salt.
50 A ¶ REVEREND ISAIAH CALLOWAY-BRANT (60s, black frock, spectacles, a Bible under one arm).
51 A Dust on his shoulders.
52 A He tips his hat.
53 D CALLOWAY-BRANT: Gentlemen. Lady.
54 A ¶ Wendell spins.
55 A Hand on the gun this time.
56 D WENDELL: Who in hell are you?
57 D CALLOWAY-BRANT: A man looking for water.
58 D GUS: No water here. Only salt.
59 D CALLOWAY-BRANT: So I see.
60 A ¶ He steps in.
61 A Slow.
62 A Eyes drifting to Lucky.
63 A To the rope.
64 A To the rifle.
65 D LUCKY (to Calloway-Brant): Morning, Reverend.
66 A ¶ Gus looks at her.
67 A Looks at the preacher.
68 D GUS: You two acquainted?
69 D CALLOWAY-BRANT: No.
70 D LUCKY: Never met.
* 71 A ¶ Too fast.
* 72 A Both.
73 A ¶ Gus raises the rifle.
74 A Not at anyone.
75 A Just up.
76 D GUS (to himself): Damn.
* 77 A ¶ A distant whistle.
* 78 A Long.
* 79 A Low.
80 D WENDELL: That's the train.
81 D GUS: Everybody stay put.
82 A ¶ Calloway-Brant sets the Bible on the crate.
83 A Unhurried.
84 D CALLOWAY-BRANT: Sheriff, I'd sit down.
85 D GUS: I'll stand.
86 D CALLOWAY-BRANT: Then stand well.
87 A ¶ He opens the Bible.
* 88 A Hollowed out.
* 89 A A short-barreled pistol.
90 A ¶ Wendell draws.
* 91 A Late.
* 92 A ¶ The pistol barks.
93 A Wendell spins.
94 A Drops.
95 A ¶ Gus fires.
* 96 A Splinters from the doorframe.
97 A Calloway-Brant is already moving, crashing sideways into the lantern.
* 98 A ¶ Dark.
* 99 A Then fire.
* 100 A The lantern oil catches the dry timber.
101 D LUCKY (laughing): Cut me loose, Gus! Cut me loose!
102 D GUS: Not a chance.
* 103 A ¶ Flames climb the wall.
* 104 A Smoke rolls.
105 A Calloway-Brant is a shadow behind the cable drum.
106 D CALLOWAY-BRANT [O.S.]: Last chance, Sheriff!
107 D GUS: Come take it!
108 A ¶ Gus fires at the drum.
* 109 A Sparks.
* 110 A The cable snaps free and whips across the room, slashing the rope at Lucky's wrists.
111 A ¶ She is loose.
112 A She grins.
113 D LUCKY: Thank you kindly.
114 A ¶ She snatches Wendell's fallen gun.
115 A Gus swings the rifle on her.
116 A ¶ They freeze.
* 117 A Three guns.
* 118 A Three people.
* 119 A Fire roaring.
120 D WENDELL (weak, from the floor): Don't.
121 A ¶ None of them moves.
* 122 A ¶ The roof timbers groan.
* 123 A A beam drops between them in a shower of sparks.
124 A ¶ They scatter.

### SCENE s00272 | INT. MUNICIPAL SWAN-BOAT BOATHOUSE - EVENING
Detected names (may be incomplete or contain aliases): BARNABY QUILL, ODALYS FERREIRA-NNAMDI, PETE, LAZAR
* 1 A ¶ A cathedral of damp wood.
* 2 A Eleven fiberglass swans, enormous and faintly smug, are moored nose to tail in the dark water, each wearing the faded expression of a creature that has been pedaled by thousands of children and has forgiven none of them.
3 A ¶ BARNABY QUILL (50s, municipal windbreaker, a lanyard heavy with keys that open nothing important) stands on the dock with a clipboard held like a hymnal.
4 A He is counting swans for the third time and arriving at a different number each time.
5 A ¶ ODALYS FERREIRA-NNAMDI (40s, wet-weather poncho, hair in a hopeful bun) climbs out of a swan with the dignity of a woman leaving a courtroom.
6 D ODALYS: It's twelve.
7 D BARNABY: It's eleven.
8 D ODALYS: The inventory says twelve.
9 D BARNABY: The inventory also says the pond is a lake.
* 10 A ¶ Behind them, a third voice drifts from the rafters.
11 A PETRU "PETE" LAZAR (20s, cheerful, harness, a flashlight in his teeth) dangles above the water, retrieving a pennant.
12 D PETE (around the flashlight): Thith ith the one.
13 D ODALYS: Pete, take the flashlight out of your mouth.
14 A ¶ Pete spits the flashlight into his palm.
* 15 A It bounces off a swan's head and sinks.
16 D BARNABY: That was a municipal flashlight.
17 D PETE: It was my flashlight.
18 D ODALYS: It was Barnaby's flashlight.
19 D BARNABY: It was a flashlight in the general sense.
20 D PETE: Can I come down now?
21 D ODALYS: No.
22 D BARNABY: Yes.
23 D ODALYS: No, because if he comes down we'll have to talk about the swan.
24 D BARNABY: We are talking about the swan.
25 D PETE: Which swan?
26 D ODALYS: The twelfth.
27 D PETE: There's a twelfth?
28 D BARNABY: There is not a twelfth.
29 D ODALYS: Barnaby, I rode it. For twenty minutes. It has a steering problem and a name.
30 D BARNABY: What name?
31 D ODALYS: Gerald.
32 D PETE: Gerald's a good name.
33 D BARNABY: Pete, you are suspended in the air by one strap and I need you to stop having opinions.
34 D PETE: I've had opinions the whole time, though.
35 D ODALYS: He's had opinions since March.
36 D BARNABY: In March I told you both the swans were not to be named.
37 D ODALYS: You named the swans.
38 D BARNABY: I named ONE swan. Lucille. Out of respect.
39 D PETE: Lucille's on the left.
40 D ODALYS: Lucille is the one we sank in August.
41 D BARNABY: Lucille is resting.
* 42 A ¶ A long silence.
* 43 A Water slaps the pilings.
* 44 A A swan, somewhere, knocks against the dock with a hollow note.
45 D ODALYS: Barnaby, there are twelve swans.
46 D BARNABY (very quietly): I know.
47 D PETE: So who's got Gerald?
48 A ¶ Barnaby lets the clipboard drop.
* 49 A It floats.
50 A All three of them watch it drift away across the dark water toward the far swan, which has, impossibly, begun to turn its head.

### SCENE s00273 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): KAVEH RAZMI, SOL, DUARTE, TOBIAS WREN
* 1 A ¶ Brushes idle.
* 2 A Soap drips.
* 3 A Three cars' worth of silence.
4 A ¶ KAVEH RAZMI (40s, wet suit jacket) crouches behind a spinning mitter curtain, gun low.
5 A He is breathing hard.
6 A ¶ Across the bay, MARISOL "SOL" DUARTE (30s, mechanic's coveralls) holds a wrench like a club.
* 7 A ¶ A speaker crackles overhead, then goes dead.
8 D KAVEH: Sol. Put it down.
9 D SOL: You first, Kav.
10 A ¶ They speak at once.
11 D KAVEH: I didn't take it.
12 D SOL: You didn't take it.
13 A ¶ Sol laughs once.
* 14 A Short.
* 15 A Dead.
16 D SOL [CONT'D] (muttering): Four years.
17 A ¶ A third silhouette steps through the exit light.
18 A TOBIAS WREN (60s, dry, immaculate raincoat).
19 D TOBIAS: Evening, both.
20 A ¶ Kaveh's gun drifts toward Tobias.
21 A Sol's wrench stays on Kaveh.
22 D TOBIAS [CONT'D]: Nobody here's leaving angry. Which is the point.
23 A ¶ He sets a thin black case on the wet floor and slides it forward.
24 A ¶ Sol drops the wrench.
* 25 A It rings.
26 A Kaveh lowers the gun.

### SCENE s00274 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): HELGA STRAND, ARNE STRAND, MAREN STRAND, THEO STRAND, CAPTAIN BASIL YEBOAH-KARLSSON, RADIO
* 1 A ¶ Storm outside.
* 2 A Sea slamming rock.
* 3 A A kerosene lamp.
* 4 A A shortwave radio on the table, buzzing.
5 A ¶ HELGA STRAND (60s, oilskin, iron-gray braid) stands at the stove.
6 A Stirring.
7 A Not looking up.
8 A ¶ At the table: her son, ARNE STRAND (30s, damp wool sweater, a bandage across one hand).
9 A He stares at the radio.
10 A ¶ Their daughter-in-law, MAREN STRAND (30s, pregnant, hands wrapped around a cup) watches Arne watch the radio.
11 A ¶ On the stairs, listening: THEO STRAND (10, pajamas, bare feet).
12 A He has been told to sleep.
13 A ¶ By the window: CAPTAIN BASIL YEBOAH-KARLSSON (50s, drenched, sou'wester in hand).
14 A A stranger.
* 15 A Dripping onto the floorboards.
* 16 A ¶ The radio hisses.
17 D RADIO [V.O.] (distorted): Coast Guard to lighthouse. Come in.
18 A ¶ Nobody moves.
19 A ¶ Helga stirs.
20 D RADIO [V.O., CONT'D]: Coast Guard to lighthouse. We have your vessel's mayday. Repeat. Come in.
21 A ¶ Arne rises.
* 22 A Chair scrapes.
23 A Maren catches his wrist.
24 D MAREN: Don't.
25 D ARNE: Maren.
26 D MAREN: You say one word to them and it's over.
27 D ARNE: It's already over.
28 A ¶ Helga sets the spoon down.
29 A Turns.
30 D HELGA: Sit.
31 A ¶ Arne sits.
32 A Maren lets go.
33 A ¶ Basil steps from the window.
* 34 A Water pooling around his boots.
35 D BASIL: They'll keep calling.
36 D HELGA: Let them.
37 D BASIL: My crew is in that water.
38 D HELGA: Your crew is dead, Captain.
* 39 A ¶ Silence.
* 40 A The radio crackles.
41 D RADIO [V.O.]: Lighthouse. Acknowledge. Over.
42 A ¶ Theo sits on the bottom stair.
43 A Pulls his knees up.
44 D THEO: Daddy?
45 D ARNE: Go to bed.
46 D THEO: Who's talking?
47 D MAREN: The radio, love. Go on.
48 A ¶ Theo doesn't go.
49 A ¶ Basil crosses the room in three strides and picks up the microphone.
50 A Arne is up again.
51 A Helga steps between them.
52 A The three of them stand locked, a breath apart, Maren half-risen behind with one hand on her belly, Theo gripping the banister.
53 D BASIL: Let me answer.
54 D HELGA: Put it down.
55 D BASIL: They'll send a boat.
56 D ARNE: They'll send a boat for us.
57 D BASIL: For all of us.
58 D HELGA (quiet): For him.
59 A ¶ She nods at Arne.
60 A Basil looks.
61 A Looks at the bandage.
62 A At the rope burn climbing the wrist.
63 D BASIL (slowly): You cut the line.
64 A ¶ Arne says nothing.
65 D BASIL [CONT'D]: You cut our line.
66 D ARNE: The reef would have taken the lighthouse.
67 D BASIL: The reef took forty men!
68 D ARNE (shouting): I was trying to save my family!
69 A ¶ Maren covers her mouth.
70 A Theo starts to cry without sound.
71 D RADIO [V.O.]: Lighthouse, we have a visual on your lamp. Repeat, we have a visual. Hold position.
72 A ¶ Basil lets the microphone drop.
* 73 A It swings on its cord, clicking against the table leg.
74 A ¶ Helga takes it.
75 A Presses the key.
76 D HELGA (into the microphone): This is Helga Strand. Lighthouse is secure.
* 77 A ¶ A pause.
* 78 A Static.
79 D RADIO [V.O.]: Copy, ma'am. Any survivors?
80 A ¶ Everyone looks at Basil.
81 A ¶ Basil stares at the floor.
82 A At the pool of seawater spreading around his boots.
83 A At the small bare feet on the stairs.
84 A He looks up.
85 D BASIL (barely): One.
86 A ¶ Helga lowers the microphone.
87 A Arne puts his face in his bandaged hand.
88 A Maren crosses to him and doesn't touch him.
* 89 A ¶ Wind hits the tower.
* 90 A The lamp above them sweeps its beam across the window, turning, turning, turning.

### SCENE s00275 | INT. MINIATURE GOLF WINDMILL - DAY
Detected names (may be incomplete or contain aliases): GRETCHEN POLLARD, WALDO POLLARD, TEENAGE ATTENDANT RUSS OYELARAN, LITTLE MIRABEL
* 1 A ¶ The big concrete windmill at hole eighteen.
* 2 A Blades turning slowly.
* 3 A A tunnel through its base.
4 A ¶ GRETCHEN POLLARD (50s, visor, scorecard in teeth) is wedged halfway into the tunnel on her stomach.
5 A ¶ Her husband WALDO POLLARD (50s, bucket hat) holds her ankles.
6 A ¶ TEENAGE ATTENDANT RUSS OYELARAN (17, name tag, vest) arrives with a rake.
7 A ¶ LITTLE MIRABEL (8, glitter sneakers) watches from the green, club trailing.
8 D RUSS: Ma'am, you can't go in there.
9 D GRETCHEN [O.S.]: My ball's in there!
10 D WALDO: She means it.
* 11 A ¶ The blades turn.
* 12 A A blade clips Waldo's hat.
13 A He ducks.
14 A Gretchen shoots out of the tunnel, ball in hand, and the two of them tumble into Russ.
15 A All three go down in a heap.
* 16 A The rake clatters.
17 D MIRABEL: Is that a hole in one?
18 D RUSS (from the pile): No.
19 A ¶ Gretchen holds up the ball like a trophy.

### SCENE s00276 | EXT. FLOODED RICE PADDY - DAWN
Detected names (may be incomplete or contain aliases): LIEUTENANT NADIA VASSILIOU, SERGEANT FIONN MCALLISTER-DUBE, CORPORAL AMARA TSEGAYE, POLDO, RINCON
* 1 A ¶ Mist.
* 2 A Brown water to the knees.
* 3 A A broken dike.
* 4 A Frogs.
5 A ¶ Four soldiers in a skirmish line.
6 A Slogging.
7 A ¶ LIEUTENANT NADIA VASSILIOU (30s, helmet strap loose) in the lead.
8 A Compass in her fist.
9 A ¶ SERGEANT FIONN MCALLISTER-DUBE (40s, radio on his back) behind her.
10 A ¶ CORPORAL AMARA TSEGAYE (20s, rifle high, eyes wide) third.
11 A ¶ PRIVATE LEOPOLDO "POLDO" RINCON (19, glasses taped at the hinge) last.
12 D NADIA (low, to the line): Spacing. Ten feet.
13 A ¶ They spread.
* 14 A Water sloshes.
15 D POLDO (muttering): Ten feet. Ten feet. Ten feet.
* 16 A ¶ A frog leaps.
17 A Amara jerks the rifle.
18 A Fionn grabs the barrel.
19 D FIONN: Easy.
20 D AMARA: Sorry.
21 A ¶ They go on.
* 22 A The mist shifts.
* 23 A ¶ Metal glints ahead.
* 24 A A crouched shape.
* 25 A A helmet.
* 26 A Then another.
27 A ¶ Nadia raises a fist.
28 A Everyone stops.
* 29 A ¶ A crack.
* 30 A Water jumps near Poldo.
31 D NADIA: Down!
32 A ¶ Nadia and Amara dive left.
33 A Fionn and Poldo dive right.
* 34 A A machine gun opens up, stitching the paddy.
35 D FIONN (shouting at the whole squad): Stay low! Stay LOW!
36 A ¶ Poldo lifts his head.
37 A Gets a mouthful of mud.
38 D POLDO (to himself): Okay. Okay okay okay.
39 D AMARA (to Nadia): Where is it?
40 D NADIA: Treeline. Eleven o'clock.
41 A ¶ She crawls to Fionn.
42 A He is on the radio.
43 A His lips move.
* 44 A Static only.
45 D FIONN: Dead.
46 D NADIA: Try again.
47 A ¶ He tries.
* 48 A Nothing.
* 49 A ¶ The firing stops.
* 50 A Hard silence.
* 51 A Frogs begin again.
52 A ¶ Nadia peers over the dike.
53 A She stares.
54 A Her shoulders drop.
55 D NADIA [CONT'D] (to the squad): Hold fire.
56 D AMARA: Ma'am?
57 D NADIA: Hold. Fire.
* 58 A ¶ Across the paddy, the "helmets" are scarecrows.
* 59 A Two straw men in rusted pots.
* 60 A A third machine gun sits on a bamboo tripod, tied to a clapper that bangs in the breeze.
61 A ¶ Fionn lets out a breath that turns into a laugh.
62 A Amara puts her forehead on her rifle.
63 A Poldo sits straight up out of the water, soaked to the chin.
64 D POLDO: It's a bird scarer.
65 D NADIA: It's a bird scarer.
66 A ¶ She pulls her wet hat off and wrings it.
67 A Amara and Poldo stand together, shaking, and slap each other on the shoulder, hard, both laughing.
68 D FIONN (to Nadia): Will you tell them she did the compass right?
69 D NADIA (to Fionn): Tell them yourself. She's your lieutenant.
70 A ¶ Fionn looks at Nadia.
71 A She looks at him.
* 72 A A beat, and neither can say which of them was the "she" meant.
73 D FIONN: Aye.
74 A ¶ They start across the paddy.

### SCENE s00290 | INT. FLOODED CHURCH CRYPT - COMMAND POST - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR WINIFRED BAPTISTE-OKONKWO, CAPTAIN LUCIAN HARGREAVES-DIALLO, STACKS, WILLOUGHBY, LIEUTENANT SIMONE ARCHAMBAULT-TSOSIE, CORPORAL REUBEN VASQUEZ-OLUWOLE, COLONEL
* 1 A ¶ Vaulted brick.
* 2 A Knee-deep water.
* 3 A A table on cinderblocks, a field telephone, three lanterns.
* 4 A Mortar dust drifts down with each distant shell.
5 A ¶ MAJOR WINIFRED BAPTISTE-OKONKWO (40s, helmet off, tired) leans over a map.
6 A ¶ CAPTAIN LUCIAN HARGREAVES-DIALLO (30s, bandaged forehead) sits on the table edge.
7 A ¶ SERGEANT EUSTACE "STACKS" WILLOUGHBY (50s, immense, silent) cleans a rifle.
8 A ¶ LIEUTENANT SIMONE ARCHAMBAULT-TSOSIE (20s, radio operator) crouches by the field telephone.
9 A ¶ CORPORAL REUBEN VASQUEZ-OLUWOLE (20s, sentry) watches the stairs.
* 10 A ¶ The field telephone buzzes.
11 A Simone grabs it.
12 D SIMONE: Command post.
13 D COLONEL [V.O.] (over the phone, thin): Status.
14 D SIMONE: Holding, sir. Water's rising.
15 D COLONEL [V.O.]: Hold until dawn.
16 D SIMONE: Sir, they're shelling the nave.
17 D COLONEL [V.O.]: Hold until dawn, Lieutenant.
* 18 A ¶ The line clicks.
19 A Simone lowers the receiver.
20 D WINIFRED: Well?
21 D SIMONE: Dawn.
22 D LUCIAN: That's five hours.
23 D WINIFRED: Then we'll see five hours.
* 24 A ¶ A shell hits the church.
* 25 A The crypt shakes.
* 26 A Mortar rains.
* 27 A A lantern swings, throws shadows.
28 D REUBEN (muttering): Closer. Closer.
29 D STACKS (rumble): Let them.
30 A ¶ Winifred and Lucian step aside, water sloshing.
31 A They whisper over the map.
32 D WINIFRED: If the north wall goes, we pull back through the ossuary.
33 D LUCIAN: And if the ossuary floods?
34 D WINIFRED: Then we swim.
* 35 A ¶ A third shell, so close the lanterns gutter.
36 A Reuben shouts from the stairs.
37 D REUBEN: Movement! Top step!
38 A ¶ Everyone drops.
39 A Rifles up.
40 A Stacks rolls behind the table.
41 A Simone drags the phone under it.
* 42 A ¶ A boot appears on the stairs.
* 43 A Then a hand, empty, open.
44 D WINIFRED: Hold fire!
45 D LUCIAN: Hold fire!
* 46 A ¶ Nobody fires.
* 47 A A voice, thin and foreign, from the dark above.
48 D REUBEN (calling up): Show yourself!
* 49 A ¶ The crypt shakes one more time.
* 50 A Then, for the first time in hours, silence.
51 D STACKS (low): That's the barrage ending.
* 52 A ¶ Dust settles.
* 53 A Water stills.
54 A Reuben lowers his rifle at last.
55 D WINIFRED (to the whole crypt): Stand down. Rest in shifts.
56 D LUCIAN: Dawn?
57 D WINIFRED: Dawn.
58 A ¶ She turns to the map and does not look back at the stairs.

### SCENE s00291 | INT. SERVICE ELEVATOR - GRAND HOTEL - DAY
Detected names (may be incomplete or contain aliases): BERNADETTE QUARLES-IBARRA, FERDIE, ACHTERBERG-LOWE, KWABENA OSEI-DRUMMOND, LOTTIE FAIRCHILD-NAKAMURA
* 1 A ¶ A brass box, six feet square, smelling of lilies.
* 2 A In the center, a four-tier wedding cake on a rolling cart, wrapped in plastic like a fragile patient.
3 A ¶ BERNADETTE QUARLES-IBARRA (50s, caterer's apron, clipboard) presses herself against the left wall.
4 A FERDINAND "FERDIE" ACHTERBERG-LOWE (60s, tuxedo, bow tie slightly crooked) holds the right.
5 A KWABENA OSEI-DRUMMOND (20s, bellhop pillbox hat) guards the buttons.
6 A LOTTIE FAIRCHILD-NAKAMURA (8, flower girl, wreath of daisies) sits cross-legged on the floor beside the cart, eating a rose off the top tier.
* 7 A ¶ The elevator lurches.
8 A Everyone freezes.
* 9 A The cake sways.
10 A Bernadette's clipboard drops.
11 A Ferdie's hand shoots out to steady the cart.
12 A Kwabena stabs three buttons at once.
13 A Lottie licks icing off her wrist.
* 14 A The lift hums, hangs, hums again.
15 D FERDIE: Is it stuck?
16 D BERNADETTE: It is not stuck.
17 D KWABENA: It's thinking.
18 D LOTTIE: Can I have the other rose?
19 D BERNADETTE: No.
20 D FERDIE: Yes.
21 D KWABENA: Sir, with respect, it's her cake.
22 D FERDIE: It's my daughter's cake, and my granddaughter's rose.
23 D BERNADETTE: That rose is sixty dollars.
24 D LOTTIE: It tastes like soap.
* 25 A ¶ The elevator drops six inches.
* 26 A The top tier slides.
27 A Four hands lunge.
* 28 A The cake settles.
* 29 A Nobody breathes.
30 A Ferdie wipes a smear of frosting from his lapel and holds out his hand, palm up, to Bernadette.
31 A She looks at it.
32 A Then she hands him a plastic fork.

### SCENE s00292 | INT. FUNERAL PARLOR - VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JO, ADEBAYO-KRUSE, MALACHI TREVELYAN-SHAW, VOICE
* 1 A ¶ Folding chairs.
* 2 A Carnations in a wire stand.
* 3 A A closed casket, brass handles dull.
4 A ¶ JOSEPHINE "JO" ADEBAYO-KRUSE (40s, black coat, sunglasses she doesn't remove) sits in the front row.
5 A She does not turn when the door opens.
6 A ¶ MALACHI TREVELYAN-SHAW (50s, black suit, damp at the shoulders) stands in the doorway.
7 A He holds a small paper bag.
8 A ¶ He walks the aisle.
9 A Sits two chairs from her.
10 A Sets the bag on the empty seat between them.
11 A ¶ She looks at it.
12 A Doesn't touch it.
* 13 A ¶ A phone rings in her coat.
14 A She lets it go three rings.
15 A He watches her hand.
16 A ¶ She takes it out.
17 A Answers.
18 A Holds it between them on speaker.
19 D VOICE [V.O.] (over the phone): Is he there?
20 D JO: He's here.
21 D VOICE [V.O.]: Then you know.
22 A ¶ She says nothing.
23 A Her thumb moves along the edge of the phone.
24 A He leans his elbows on his knees and looks at the casket.
25 D VOICE [V.O., CONT'D]: Open the bag.
26 A ¶ She doesn't.
27 A He does.
28 A Takes out a single brass key.
29 A Holds it up to the lamp.
* 30 A The key turns slowly on its string.
31 D VOICE [V.O., CONT'D]: That's the end of it.
32 A ¶ Jo hangs up.
33 A Slips the phone back in her coat.
34 A She takes the key from his fingers, and for a moment their hands stay together.
35 A ¶ She stands.
36 A Smooths her coat.
37 A He stays seated.
38 A She walks to the casket and lays the key on the lid, beside the carnations.
39 A ¶ At the door she stops.
40 A He still hasn't looked at her.
41 A She goes out, and he sits on, staring at the key.

### SCENE s00293 | INT. COMMUNITY CENTER BASEMENT - FOLDING-CHAIR CIRCLE - NIGHT
Detected names (may be incomplete or contain aliases): DOLLIE, ENGSTROM-ACHEBE, CORNELL BEAUMONT-ASANTE, YASMINE KOWALSKI-HADDAD, TIBERIUS FAIRWEATHER-MWANGI, HARPER DELACROIX-YAMAMOTO
* 1 A ¶ A low-ceilinged room with a linoleum floor and a coffee urn that has been warm since 1994.
* 2 A Posters of tide pools on cinderblock walls.
* 3 A Five chairs in a circle, one empty.
4 A ¶ FACILITATOR DOLORES "DOLLIE" ENGSTROM-ACHEBE (60s, cardigan, kind eyes, a voice trained to be even) sits with a clipboard on her knee.
5 A ¶ CORNELL BEAUMONT-ASANTE (40s, mechanic's hands scrubbed pink, work shirt with his name stitched on) grips a paper cup.
6 A ¶ YASMINE KOWALSKI-HADDAD (30s, scrubs, hair coming loose, eyes bright with no sleep) sits with her feet tucked under her.
7 A ¶ OLD MR. TIBERIUS FAIRWEATHER-MWANGI (80s, tweed cap in his lap, hearing aid whistling softly) leans on a cane.
8 A ¶ HARPER DELACROIX-YAMAMOTO (17, hoodie, earbuds around neck) has chosen the chair nearest the door.
9 D DOLLIE: Thank you for coming. Who would like to start?
10 D CORNELL: I'll start.
11 D DOLLIE: Thank you, Cornell.
12 D CORNELL: My wife used to say I never talked. Said I could run a whole day on three words. Truth is I just never knew where to put the rest of them.
13 D YASMINE: That's me with my mother. Eleven years of silence in the same kitchen.
14 D CORNELL: And now she's gone.
15 D YASMINE: And now the kitchen's loud.
16 D TIBERIUS: What's that?
17 D DOLLIE: She says the kitchen's loud, Tiberius.
18 D TIBERIUS: Mine's the opposite. Mine hums. The refrigerator hums so much I think it's her.
19 D HARPER: That's not weird.
20 D TIBERIUS: It's a bit weird, young man.
21 D HARPER: I'm not a man.
22 D TIBERIUS: Young person, then. Forgive me.
23 D HARPER: It's fine.
24 D DOLLIE: Harper, would you like to share?
25 D HARPER: No.
26 D DOLLIE: That's all right.
27 D HARPER: Okay, maybe.
* 28 A ¶ A long pause.
* 29 A The urn gurgles.
30 D HARPER [CONT'D]: My dad's phone still gets texts. I read them sometimes. People tell him about their day. I don't know why I keep reading.
31 D YASMINE: You keep him company.
32 D HARPER: He's not there.
33 D YASMINE: Neither's my mother, and I still set two cups.
34 D CORNELL: Two cups.
35 D YASMINE: Every morning.
36 D CORNELL: I do that with the truck. I leave the passenger seat clear.
37 D TIBERIUS: What for?
38 D CORNELL: In case.
39 D TIBERIUS: Ah.
40 D DOLLIE: It's a good thing, to leave room.
41 D CORNELL: Is it?
42 D DOLLIE: I think so. I leave a chair in this circle every week. For whoever isn't here yet.
43 D HARPER: That's why there's an empty one.
44 D DOLLIE: That's why.
45 D TIBERIUS: It's not empty. My Winnie sits there.
* 46 A ¶ Silence.
47 A Nobody laughs.
48 D CORNELL (low): Mine too.
49 D YASMINE: Mine's in the kitchen.
50 D HARPER (very quietly): Mine's on the phone.
51 D DOLLIE: Then we're full tonight.

### SCENE s00294 | INT. VICTORIAN CONSERVATORY, GLASS WINTER-GARDEN - 1887 - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY CORDELIA WHITTINGTON-BANDELE, RUPERT ABERNETHY-ODUYA, MISS PHILIPPA LOVELACE
* 1 A ¶ Palms press against the glass like prisoners.
* 2 A A fountain, dry.
* 3 A Wrought-iron chairs gone green with weather.
4 A ¶ LADY CORDELIA WHITTINGTON-BANDELE (30s, bustled gown of dove gray, a face trained to give nothing away) sits with a teacup untasted in her gloved hands.
5 A ¶ Across from her, MR. RUPERT ABERNETHY-ODUYA (40s, frock coat, whiskers meticulously combed) turns his hat in his fingers.
6 A ¶ By the fountain's rim, partly hidden by a palm, stands MISS PHILIPPA LOVELACE (20s, governess' grey wool, spectacles), who has been told to wait and is waiting.
7 D RUPERT: Lady Cordelia, I must speak plainly.
8 D CORDELIA: Mr. Abernethy, you have never done otherwise, and I have never thanked you for it.
9 D RUPERT: Then permit me to continue.
10 D CORDELIA: Permit nothing. Say it.
11 A ¶ He rises.
12 A She rises.
13 A Philippa shrinks behind the palm.
14 A Rupert crosses the tiles in two strides and Cordelia steps back until her skirts catch the iron chair.
* 15 A It scrapes.
16 A The three of them freeze, an arrangement of statues in a house of glass.
17 D RUPERT: Miss Lovelace, you may go.
18 D PHILIPPA: Yes, sir.
19 D CORDELIA: No, Philippa. Stay.
20 D RUPERT: Cordelia--
21 D CORDELIA: Mr. Abernethy, whatever you have to say about the letters, you may say before my governess. She wrote them.
22 A ¶ Philippa lifts her chin.
* 23 A The palm leaves stir, though there is no wind.
24 A Rupert's hat slips from his hand and rolls, round and round, to the dry fountain's edge.

### SCENE s00295 | INT. PARKING STRUCTURE ROOFTOP - DAWN
Detected names (may be incomplete or contain aliases): LEONIE ASANTEWAA-VOGEL, RETTA, OKOYE-BLOOM
* 1 A ¶ A rental van.
2 A Two women lean on its bumper.
* 3 A Between them, a gym bag.
4 A ¶ LEONIE ASANTEWAA-VOGEL (40s, bomber jacket) lights a cigarette.
5 A Her hands are steady.
6 A ¶ MARGUERETTA "RETTA" OKOYE-BLOOM (30s, hoodie) watches the sun come up over a gray city.
7 A ¶ Leonie offers the pack.
8 A Retta shakes her head.
9 D LEONIE: You hungry?
10 D RETTA: No.
11 D LEONIE: You should eat.
12 D RETTA: Later.
13 A ¶ Leonie drags on the cigarette.
14 A Looks at the bag.
15 D LEONIE: She wanted it split three ways.
16 D RETTA: She wanted a lot of things.
17 D LEONIE: She called me last night.
18 D RETTA: She called me, too.
* 19 A ¶ Silence.
* 20 A A pigeon lands on the van roof.
* 21 A Walks the length of it.
22 D LEONIE: She said she was sorry.
23 D RETTA: She said that to me, too.
24 A ¶ Leonie flicks the ash.
25 A Retta stares at her shoes.
26 D LEONIE: Nobody's coming.
27 D RETTA: I know.
28 D LEONIE: So we could just go.
29 D RETTA: We could.
30 A ¶ Neither moves.
* 31 A The pigeon takes off.
32 A ¶ Retta bends.
33 A Unzips the bag a few inches.
34 A Looks.
35 A Zips it shut.
36 A She hands the strap to Leonie, and Leonie takes it, and for a moment neither lets go.
37 D LEONIE: Which way?
38 D RETTA: You pick.
39 A ¶ Leonie opens the van door.
40 A Retta gets in.
41 A Leonie follows.
42 A They sit with the engine off and the sun on the windshield.

### SCENE s00296 | INT. NIGHT FERRY, LOWER CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): LORCAN BRENNAN-OSEI, NELLWYN PRYCE-ADEYEMI, TAD, MBEKI-LINDEN
* 1 A ¶ Rows of parked cars.
* 2 A Chains rattle.
* 3 A Fog presses on the stern gate.
* 4 A A single fluorescent tube hums over three folding chairs where the deckhands drink coffee.
5 A ¶ LORCAN BRENNAN-OSEI (50s, deckhand) pours from a thermos.
6 A NELLWYN PRYCE-ADEYEMI (20s, new hire, hi-vis vest) sits on the chair edge.
7 A THADDEUS "TAD" MBEKI-LINDEN (60s, captain's patch on his sleeve) rubs his eyes.
8 D LORCAN: You hear that?
9 D NELLWYN: Hear what?
10 D LORCAN: Knocking.
11 D TAD: Engine.
12 D LORCAN: Not the engine. Knocking. Under us.
13 D NELLWYN: Under the deck?
14 D LORCAN: Under the hull.
15 D TAD: Lorcan, it's the sea.
16 D LORCAN: The sea doesn't knock three times.
17 D NELLWYN: Maybe it's a buoy.
18 D TAD: Maybe it's a buoy.
19 D LORCAN: It's not a buoy.
20 D TAD: Then what is it?
21 D LORCAN: Last crossing, it knocked four times. Before that, five.
22 D NELLWYN: Counting down?
23 D LORCAN: Counting something.
24 D TAD: Stop frightening the girl.
25 D NELLWYN: I'm not frightened.
26 D TAD: Then you've not been listening.
27 D LORCAN: Three. That's three. Tonight it's three.
28 D NELLWYN: And after three?
29 D LORCAN: Two, one.
30 D NELLWYN: And after one?
31 D LORCAN: That's what I'm asking him.
32 D TAD (low): After one, we don't dock.
* 33 A ¶ Silence.
* 34 A The fluorescent tube flickers.
* 35 A The fog at the stern gate seems to lean.
36 D NELLWYN: That's a joke.
37 D TAD: It's a rule. My father taught me. When it counts down to one, you turn the ship around.
38 D NELLWYN: Tonight is three.
39 D LORCAN: Tonight is three.
40 D TAD: Then pray for a long crossing.
* 41 A ¶ A single knock, soft, from under the deck.
42 D NELLWYN: That was two.
43 D LORCAN: That was two.
44 D TAD (barely): Turn her around.
45 D LORCAN: Captain?
46 D TAD: Turn. Her. Around.

### SCENE s00297 | INT. COLD-STORAGE LOCKER, FISH MARKET - NIGHT
Detected names (may be incomplete or contain aliases): DEL, OKONKWO-REYES, TOBY, HARLAN-AMADI, SABINE ROUSSEAU-ADEKUNLE
* 1 A ¶ Steel racks.
* 2 A Crates of ice.
* 3 A Breath fogging.
* 4 A A swinging bulb.
5 A ¶ Two figures wedge the door shut with a pry bar.
6 A ¶ DELPHINE "DEL" OKONKWO-REYES (30s, rubber apron) shoves a crate against it.
7 A ¶ TOBIAS "TOBY" HARLAN-AMADI (50s, flannel, grizzled) leans on the bar, panting.
8 A ¶ Something THUDS on the other side of the door.
* 9 A Once.
10 D DEL (to Toby): Is it holding?
11 D TOBY: It's holding.
* 12 A ¶ THUD.
* 13 A The door shivers.
14 D DEL (to herself): Okay. Okay. Don't scream.
15 D TOBY (to the whole locker): Nobody make a sound.
16 D DEL: Who are you talking to?
17 D TOBY: Habit.
* 18 A ¶ Silence.
* 19 A Ice drips.
* 20 A The bulb sways.
21 D DEL: How long?
22 D TOBY: Till morning crew.
23 D DEL: That's six hours.
24 D TOBY: Then we wait six hours.
* 25 A ¶ Another THUD.
* 26 A Dents the steel.
27 A Del backs away.
28 A Her heel hits a crate.
* 29 A Cold light flickers across her face.
30 D DEL (whispering, to herself): It's only the compressor.
31 D TOBY: That's not the compressor.
* 32 A ¶ The bulb goes out.
* 33 A Darkness.
* 34 A Breathing.
* 35 A A slow, wet scraping from the far end of the locker.
36 A ¶ From the dark: a voice, gentle.
37 D SABINE [O.S.]: Del?
38 A ¶ Del freezes.
39 A Toby grabs her sleeve.
40 D TOBY (mouthing): Don't.
41 D SABINE [O.S.]: Del, it's me. Open the door.
42 D DEL (whispering): Sabine?
* 43 A ¶ The bulb flares.
44 A At the end of the aisle, in the white fog, stands SABINE ROUSSEAU-ADEKUNLE (30s, same apron as Del, hair wet, lips blue).
45 A She smiles.
46 A Her feet do not touch the floor.
47 A ¶ Del makes a small sound.
48 A Toby heaves the pry bar up like a club.
49 D SABINE: Oh, don't be afraid. I've come to warm up.
50 A ¶ She drifts forward.
* 51 A The ice on the racks cracks.
* 52 A Frost races up the walls.
53 D TOBY (to Sabine): Stay back!
54 D DEL (to Toby): She's dead! She drowned in March!
55 D SABINE: Del.
56 A ¶ She extends a hand.
57 A Del's breath stops.
58 A Toby swings the bar.
* 59 A It passes through Sabine and rings against a steel rack.
60 A Sabine looks at him, hurt.
61 D SABINE [CONT'D]: That wasn't kind.
62 A ¶ The THUD on the door comes a third time and the door bursts open on the rush of morning crew: sunlight, shouting.
63 A Sabine vanishes in the light like breath on glass.
64 A ¶ Toby drops the bar.
65 A Del falls to her knees.
* 66 A The ice on the racks begins, quietly, to melt.

### SCENE s00298 | INT. CALL CENTER - COMPLAINTS DEPARTMENT - DAY
Detected names (may be incomplete or contain aliases): CYPRIAN OYELARAN-BLOOM, AGGIE, VANTERPOOL-NKEMELU, MOE, LINDQVIST-SANTOS, ROSAMUND FEATHERSTONE-ABIOLA
* 1 A ¶ Cubicles.
* 2 A Headsets.
* 3 A A banner reads "WE LISTEN!" in sagging letters.
4 A ¶ CYPRIAN OYELARAN-BLOOM (30s, headset askew) slams his desk.
5 A AGATHA "AGGIE" VANTERPOOL-NKEMELU (50s, supervisor, cardigan, mug that says WORLD'S OKAYEST BOSS) strides over.
6 A MORDECAI "MOE" LINDQVIST-SANTOS (20s, intern, tie too wide) trails behind her with a notepad.
7 A ROSAMUND FEATHERSTONE-ABIOLA (60s, a customer) is audible only through the headset.
8 D CYPRIAN (into mic): Ma'am, I understand.
9 D ROSAMUND [V.O.] (tinny, furious): You do NOT understand!
10 D CYPRIAN: Ma'am, the toaster is under warranty.
11 D ROSAMUND [V.O.]: It exploded!
12 D CYPRIAN: Ma'am, "exploded" is not a covered event.
13 D AGGIE: Cyprian. Hold.
14 D CYPRIAN (muting): She says it exploded.
15 D AGGIE: Did it?
16 D CYPRIAN: She sent a photo.
17 A ¶ He tilts the monitor.
* 18 A A blackened ceiling, a toast-shaped hole.
19 D MOE: Is that a toast-shaped hole?
20 D AGGIE: Moe, take a note.
21 D MOE: What note?
22 D AGGIE: "Do not tell her it is covered."
23 D MOE: Why not?
24 D AGGIE: Because then we'd owe her a ceiling.
25 A ¶ Cyprian unmutes.
26 D CYPRIAN: Ma'am, we are going to send you a brand-new toaster.
27 D ROSAMUND [V.O.]: A TOASTER?
28 D CYPRIAN: A better toaster.
29 D ROSAMUND [V.O.]: I want a ceiling!
30 A ¶ Aggie snatches the headset off Cyprian.
31 A Puts it on.
32 A Smiles at the monitor.
33 D AGGIE (sweetly): Mrs. Featherstone-Abiola, it's Agatha. Have you tried the hat?
34 D ROSAMUND [V.O.]: ...What hat?
35 D AGGIE: The complimentary hat.
* 36 A ¶ A pause.
37 A Moe and Cyprian stare at her.
38 D ROSAMUND [V.O.] (softening): Is it a nice hat?
39 D AGGIE: It's a very nice hat.
40 A ¶ She hangs up.
41 A Takes off the headset.
42 A Cyprian and Moe watch her like she has levitated.
43 D CYPRIAN: There's no hat.
44 D AGGIE: Moe. Find a hat.

### SCENE s00299 | INT. TRAFFIC COURT - HEARING ROOM 4 - DAY
Detected names (may be incomplete or contain aliases): JUDGE PERPETUA OSEI-LANGSTROM, BART, KENYATTA-VOSS, PROSECUTOR ILSE NAKAGAWA-OYELOWO
* 1 A ¶ Fluorescent glare.
* 2 A Beige carpet.
* 3 A A flag leaning slightly.
* 4 A A bailiff's chair, empty.
5 A ¶ JUDGE PERPETUA OSEI-LANGSTROM (60s, robe over a cardigan, reading glasses on a chain) peers down at a file.
6 A At the defendant's table, BARTHOLOMEW "BART" KENYATTA-VOSS (40s, wrinkled blazer, a cardboard tube under his arm) stands very straight.
7 A Across the aisle, PROSECUTOR ILSE NAKAGAWA-OYELOWO (30s, immaculate, a binder as thick as a phone book) leafs through exhibits.
8 D BART: Your Honor, I'd like to submit the exhibit.
9 D JUDGE PERPETUA: What exhibit, Mr. Kenyatta-Voss?
10 A ¶ Bart pulls the cardboard tube open.
* 11 A Out slides a rolled-up poster, which unfurls across the table in a slow, majestic curl: a hand-drawn map of an intersection, annotated in four colors of marker, with arrows, sunbeams, and a smiling cartoon sedan.
12 A Ilse gapes.
13 A Judge Perpetua removes her glasses, polishes them, puts them back on.
14 A Bart steps forward to flatten a corner, knocking Ilse's binder to the floor.
15 A She kneels to gather it, he kneels to help, their heads nearly collide, and the poster slides off the table and onto Judge Perpetua's bench, where it covers her gavel.
16 D ILSE: Objection.
17 D JUDGE PERPETUA: On what grounds?
18 D ILSE: The sedan has a face.
19 D JUDGE PERPETUA: Overruled. Mr. Kenyatta-Voss, proceed.
20 D BART: Your Honor, as the map shows, the stop sign was obscured by a sycamore.
21 D ILSE: It was obscured by a sycamore he planted.
22 D BART: Prove it.
23 D ILSE: I have the permit.
24 A ¶ She holds up a stapled paper.
25 A Bart looks at it.
26 A Looks at the poster.
27 A Looks at the cartoon sedan, which smiles back.
28 D BART (quietly): I'll pay the fine.
29 D JUDGE PERPETUA: Forty dollars, payable at the window.
30 A ¶ She raps the gavel through the poster.
* 31 A It makes a small soft tearing sound.

### SCENE s00300 | INT. OBSERVATION CAR, MOUNTAIN SCENIC RAILWAY - SUNSET
Detected names (may be incomplete or contain aliases): WOMAN, THE STRANGER, ANSELM, PHILIPPA
* 1 A ¶ A glass-domed car, brass fittings polished to honey.
* 2 A Plush velvet seats.
* 3 A Outside, peaks go violet under a rose-colored sky.
4 A ¶ A WOMAN sits alone by the window, a travel journal on her knee.
5 A Mid-thirties, silk scarf, auburn hair pinned with a tortoiseshell comb.
6 A She writes, and stops, and watches the mountains.
7 A ¶ A STRANGER enters from the vestibule: a tall man, forties, tweed jacket, a camera on a strap.
8 A He pauses at her row.
9 D THE STRANGER: Is this seat taken?
10 D WOMAN: There are forty empty seats.
11 D THE STRANGER: I know. I counted.
12 A ¶ She almost smiles.
13 A He sits across the aisle, not beside.
14 A Lifts the camera, lowers it again.
15 D THE STRANGER [CONT'D]: The light's gone before I can catch it. Always.
16 D WOMAN: Then stop catching it.
17 D THE STRANGER: And do what?
18 D WOMAN: Look at it.
19 A ¶ He looks.
* 20 A A long beat.
* 21 A The train curves, and the whole western sky tilts into the car.
22 D THE STRANGER: My name is Anselm.
23 D ANSELM (correcting himself): Anselm Whitcombe-Diallo.
24 D WOMAN: Philippa Okoro-Strand.
25 D ANSELM: Philippa. That's a good mountain name.
26 D PHILIPPA: Is there such a thing?
27 D ANSELM: There is now.
* 28 A ¶ The train rocks gently through a tunnel and out again.
29 D PHILIPPA: Do you travel often?
30 D ANSELM: Only when I've lost something.
31 D PHILIPPA: What did you lose?
32 D ANSELM: I'm hoping the mountains will tell me.
33 D PHILIPPA: They don't talk.
34 D ANSELM: They don't need to.
35 A ¶ She closes her journal.
* 36 A The sky goes from rose to lavender.
37 A Neither of them speaks, and neither looks away.

### SCENE s00301 | INT. BALLROOM CLOAKROOM - ART DECO HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN IN SAPPHIRE, OTTOLINE, MARGUERITE
* 1 A ¶ A narrow room of brass hooks and furs.
* 2 A A single frosted lamp.
* 3 A Muffled orchestra through the wall.
4 A ¶ A WOMAN in a sapphire gown leans against the counter, breathing hard.
5 A Her lipstick is smeared.
6 A Her hand grips a champagne flute so tightly it might break.
* 7 A ¶ The attendant's stool is empty.
* 8 A ¶ The door opens.
9 A Another WOMAN steps in, in a silver gown, a fur stole over one arm.
10 A She closes the door behind her.
11 A Locks it.
12 D WOMAN IN SAPPHIRE: You followed me.
13 D WOMAN IN SILVER: You left your wrap.
14 A ¶ She holds out a stole.
15 A The woman in sapphire stares at it.
16 A Doesn't take it.
17 D WOMAN IN SAPPHIRE: I said I wouldn't dance.
18 D WOMAN IN SILVER: You danced with him.
19 D WOMAN IN SAPPHIRE: She asked.
20 D WOMAN IN SILVER: She did?
21 A ¶ The sapphire woman sets the flute down.
* 22 A It rings on the marble.
23 D WOMAN IN SAPPHIRE: Constance asked me for the third waltz. In front of everyone. I couldn't say no.
24 D WOMAN IN SILVER: Of course you could.
25 D WOMAN IN SAPPHIRE: She's my cousin.
26 D WOMAN IN SILVER: She's your cousin who looks at you like I do.
* 27 A ¶ Silence.
* 28 A The orchestra swells and falls.
29 A ¶ The woman in silver steps closer and drapes the stole over her companion's shoulders.
30 A For a moment they stand with their foreheads almost touching.
31 D WOMAN IN SAPPHIRE: I'm Ottoline, by the way. You never asked.
32 D OTTOLINE (softer): Ottoline Fairbrother-Nnamdi.
33 D WOMAN IN SILVER: Marguerite.
34 D OTTOLINE: Marguerite, I'm terrified.
35 D MARGUERITE: Good. So am I.
* 36 A ¶ A knock at the door.
37 A They break apart.
38 A Ottoline wipes her lipstick.
39 A Marguerite unlocks the door and opens it on the roar of the band.

### SCENE s00302 | INT. APOTHECARY SHOP, MARKET TOWN - 1740 - EVENING
Detected names (may be incomplete or contain aliases): APOTHECARY BARNABAS ADEYEMI-HOLLOWAY, KEZIAH OSEI-LINDQVIST, GIDEON PELL-ADEBOYE, WOMAN, ISOLDE FAIRCHILD-ADEBAYO
* 1 A ¶ Low beams.
* 2 A Shelves of blue glass jars with handwritten labels.
* 3 A A mortar and pestle, a scale, a bundle of dried lavender hung from a rafter.
* 4 A A coal stove ticks in the corner.
5 A ¶ APOTHECARY BARNABAS ADEYEMI-HOLLOWAY (50s, ink-stained apron, round spectacles) is grinding something in a bowl.
6 A His movements are slow and deliberate.
7 A ¶ His apprentice, KEZIAH OSEI-LINDQVIST (16, linen cap, sleeves rolled to the elbow), sorts herbs into drawers, humming under her breath.
8 A ¶ In the corner, on a stool by the stove, sits GIDEON PELL-ADEBOYE (60s, patched coat, a clay pipe unlit in his teeth), a regular who has said nothing in an hour and will say nothing more.
* 9 A ¶ The shop bell rings.
10 A A WOMAN in a traveling cloak enters, rain on her shoulders.
11 A She is ISOLDE FAIRCHILD-ADEBAYO (30s, pale, careful, a worn leather satchel), and she carries herself like someone who has practiced being unremarkable.
12 A ¶ She shakes out her cloak, hangs it on a peg.
13 A He watches her without seeming to.
14 A She smiles.
15 A He smiles back.
16 D ISOLDE: Good evening, sir.
17 D BARNABAS: Madam. A foul night.
18 D ISOLDE: I was told you stock rue.
19 D BARNABAS: We do. For what complaint?
20 D ISOLDE: A friend's.
21 A ¶ He sets down the pestle and goes to the shelf.
22 A She follows him with her eyes.
23 A She steps closer to the counter, and from the satchel her hand slips something small and flat, which she lays on the wood.
24 A ¶ Keziah stops humming.
25 A ¶ Barnabas returns with a jar.
26 A He sets it down.
27 A Sees the thing on the counter.
28 A His face does not change, but his hand does, closing over the jar's lid as if to keep it from spilling.
29 D BARNABAS [CONT'D] (evenly): Where did you come by this?
30 D ISOLDE: Does it matter?
* 31 A ¶ It is a seal ring, silver, with an unfamiliar crest.
32 A He picks it up.
33 A Turns it over.
34 A Keziah watches his thumb stroke the inside of the band.
35 D BARNABAS: Keziah. Lock the door.
36 A ¶ She does.
* 37 A The bolt falls with a sound like a dropped coin.
38 D ISOLDE: I was told you'd know the crest.
39 D BARNABAS: I know it.
40 D ISOLDE: Then you know why I've come.
41 A ¶ He looks at Keziah.
42 A At the stove.
43 A At the ring in his palm.
44 A He says nothing for a long time.
45 D BARNABAS: Sit, madam.
46 A ¶ She sits.
* 47 A The coal ticks.
* 48 A Rain presses on the window.

### SCENE s00303 | INT. WITHERED SALON IN A CLOSED CHATEAU - 1789 - NIGHT
Detected names (may be incomplete or contain aliases): MADAME HORTENSE DE VALLOMBREUSE-ADEYEMI, LOUIS-MARIE FONTAINE-OKOYE
* 1 A ¶ A great room under dust sheets.
* 2 A A single candle burns on a harpsichord whose lid has been propped open with a book.
* 3 A Shuttered windows.
* 4 A Outside, far off, a crowd murmurs like the sea.
5 A ¶ An old woman, MADAME HORTENSE DE VALLOMBREUSE-ADEYEMI (70s, silver silk gone gray at the hem, a ring on every finger), sits at the harpsichord.
6 A She does not play.
7 A She presses one key, listens to its fading note, and presses another.
* 8 A ¶ The door opens.
9 A A young man slips in and shuts it behind him, breathing hard.
10 A LOUIS-MARIE FONTAINE-OKOYE (20s, servant's livery, torn collar, a candle stub in his hand) is the last of her household.
11 D HORTENSE: You are late, Louis-Marie.
12 D LOUIS-MARIE: Madame, the gates are down. They are in the courtyard.
13 D HORTENSE: I heard.
14 D LOUIS-MARIE: Then you must come. There is a cart in the stable. I have bribed the boy.
15 D HORTENSE: With what?
16 D LOUIS-MARIE: With your emeralds.
17 D HORTENSE: Ah. Those were never mine.
18 D LOUIS-MARIE: Madame, please.
19 A ¶ She presses a key.
* 20 A The note hangs.
21 D HORTENSE: Do you know, I have lived in this house for fifty-one years and never once been alone in this room. There was always someone to carry a candle. Someone to close a shutter. Someone to watch me not play.
22 D LOUIS-MARIE: I am here.
23 D HORTENSE: Yes. You are the last.
24 D LOUIS-MARIE: Madame, they will burn it.
25 D HORTENSE: I should hope so. It is a great deal of work to maintain.
26 A ¶ He kneels beside the stool.
27 A She does not look at him.
* 28 A The crowd's murmur swells into a roar and the candle on the harpsichord gutters.
29 D LOUIS-MARIE: Please. For my sake.
30 D HORTENSE: Then do this for mine. Take the candle. Go through the kitchen. Do not look back, and do not tell them you served me.
31 D LOUIS-MARIE: They will know.
32 D HORTENSE: They will know that you ran. That is enough.
33 A ¶ She finally turns.
34 A Touches his face with a ringed hand, once, lightly.
35 D HORTENSE [CONT'D]: Go.
36 A ¶ He rises.
37 A Backs away.
38 A At the door he stops, then bows low, deeper than any servant should.
* 39 A The door closes.
40 A She turns back to the keys and plays, at last, one slow chord that fills the dark room.

### SCENE s00304 | INT. CURLING CLUB - LOCKER ROOM - EVENING
Detected names (may be incomplete or contain aliases): YOUNG WOMAN, HJALMAR ODUYA-KRISTENSEN, MO, DELACROIX-ABARA, BRYNJA
* 1 A ¶ Wet wool.
* 2 A Steam.
* 3 A The thump of stones through a wall.
4 A ¶ A YOUNG WOMAN sits on the bench in her stocking feet, broom across her knees.
5 A Twenties, red parka, a bruise on her cheekbone from a fall.
6 A She stares at nothing.
7 A ¶ Coach HJALMAR ODUYA-KRISTENSEN (60s, club blazer, whistle) stands at the door with a clipboard.
8 A He does not speak.
9 A He taps the clipboard against his thigh.
10 A ¶ At the far end, a veteran, MAUREEN "MO" DELACROIX-ABARA (40s, gray-blonde braid) tightens a boot.
11 A She doesn't look up either.
12 A ¶ The young woman bends.
13 A Unlaces one shoe.
14 A Laces it again.
15 A Same shoe.
16 D HJALMAR: Five minutes.
17 A ¶ The young woman nods.
18 D MO (to Hjalmar): Leave her.
19 D HJALMAR: She has a stone to throw.
20 D MO: She has a minute.
21 A ¶ Hjalmar studies the young woman.
22 A She picks up the broom.
23 A Puts it down.
24 A Picks up a towel and presses it to her cheek.
* 25 A ¶ A horn sounds in the hallway.
26 A ¶ Mo stands.
27 A Offers her hand.
28 A The young woman looks at it, then up at her face.
29 D MO [CONT'D]: Brynja.
30 D BRYNJA (rising): I'm fine.
31 A ¶ She isn't.
32 A She takes the hand anyway.
33 A ¶ Hjalmar steps aside from the door.
34 A The three of them walk out together, Brynja in the middle, broom over her shoulder, jaw set.

### SCENE s00305 | INT. NIGHT-SHIFT BAKERY - BACK ROOM - 4 AM
Detected names (may be incomplete or contain aliases): TEODORICO ABARA-LINDBERG, PENNY, NAKASHIMA-OKOYE, STRANGER, QUINCY ADEYEMI-HALVORSEN, PERPETUA
* 1 A ¶ Flour dust.
* 2 A Steel tables.
* 3 A Racks of dough rising under damp cloths.
* 4 A A radio plays something soft and unidentifiable.
5 A ¶ MR. TEODORICO ABARA-LINDBERG (60s, apron, gentle) kneads.
6 A His assistant, PENELOPE "PENNY" NAKASHIMA-OKOYE (20s, hairnet), oils pans.
7 A At the doorway, a STRANGER in a rain-soaked coat stands with a baguette-shaped package.
8 A Behind her, hiding behind the oven door, is a small, wide-eyed apprentice, QUINCY ADEYEMI-HALVORSEN (12, flour on his nose).
9 D STRANGER: Good morning. Are you the baker?
10 D TEODORICO: Everyone here is the baker.
11 D STRANGER: I mean the baker who makes the seeded rye.
12 D TEODORICO: Ah. That's Penny.
13 D PENNY: That's me.
14 D STRANGER: Then I owe you an apology.
15 D PENNY: For what?
16 D STRANGER: I left a one-star review.
17 D PENNY (not looking up): I remember.
18 D STRANGER: I was in a mood.
19 D PENNY: You called it "a brick with ambitions."
20 D STRANGER: It was a very good brick.
21 A ¶ Teodorico chuckles into the dough.
22 D STRANGER [CONT'D]: My name is Perpetua.
23 D PERPETUA (correcting): Perpetua Chen-Oyelowo. I'm the reviewer.
24 D PENNY: We know. You've been in the paper.
25 D PERPETUA: Then you know I'm contractually obliged to review again.
26 D TEODORICO: Of course.
27 D PERPETUA: I came to taste it. Before I write.
28 A ¶ Quincy peeks around the oven.
29 D QUINCY: It's still rising.
30 D PERPETUA: Then I'll wait.
31 D TEODORICO: Penny, make her tea.
32 D PENNY: I'm making her toast first.
33 A ¶ She slides a loaf from the rack and slices it.
34 A Perpetua sits on an overturned crate.
35 A Quincy tiptoes to sit beside her.
* 36 A The radio hums.
37 A Nobody, for a while, says anything.

### SCENE s00306 | INT. EMPTY INDOOR TENNIS COURT - DAWN
Detected names (may be incomplete or contain aliases): OTIS BRAITHWAITE-NKOSI, LEO, AMAECHI-DAHL
* 1 A ¶ Green carpet.
* 2 A Sodium lamps coming up.
* 3 A A basket of balls.
4 A ¶ OTIS BRAITHWAITE-NKOSI (40s, track jacket) feeds balls from the basket.
5 A Across the net, LEONTYNE "LEO" AMAECHI-DAHL (16, racket too big for her) returns them.
* 6 A Thock.
* 7 A Thock.
* 8 A Thock.
9 D OTIS: Again.
10 D LEO: Again.
11 A ¶ They speak at the same time.
12 D OTIS: Reset your feet.
13 D LEO: I'm resetting my feet.
14 D OTIS: Then reset them faster.
* 15 A ¶ Thock.
16 A She hits wide.
17 A He doesn't flinch.
18 D LEO: Coach.
19 D OTIS: Leo.
20 D LEO: Same time tomorrow?
21 D OTIS: Same time.
22 A ¶ She smiles.
23 A He feeds another ball.

### SCENE s00307 | INT. LAUNDROMAT - BACK TABLE - NIGHT
Detected names (may be incomplete or contain aliases): IGGY, OYELOWO-BRANDT, CORRIE
* 1 A ¶ Flat fluorescent light.
* 2 A Rows of dryers tumbling.
* 3 A A folding table.
* 4 A A wall of coin machines.
5 A ¶ Two siblings, a brother and a sister, fold clothes in silence.
6 A ¶ IGNATIUS "IGGY" OYELOWO-BRANDT (30s, grease-stained flannel, hands that don't stay still) folds towels with military corners.
7 A ¶ CORINTHIA "CORRIE" OYELOWO-BRANDT (30s, nurse's clogs, tired eyes) folds a child's pajamas into a square the size of her palm.
* 8 A ¶ The machines hum.
* 9 A A dryer thumps.
10 D IGGY: You're doing it wrong.
11 D CORRIE: It's pajamas.
12 D IGGY: There's a way.
13 D CORRIE: Then show me.
14 A ¶ He doesn't.
15 A She keeps folding.
* 16 A A quarter rattles inside a dryer.
17 D IGGY: How's Mom?
18 D CORRIE: Tuesday she asked who you were.
19 D IGGY: Tuesday I wasn't there.
20 D CORRIE: She asked anyway.
21 D IGGY: What'd you say?
22 D CORRIE: Her son.
23 D IGGY: Good.
* 24 A ¶ Beat.
25 A He takes a shirt from the pile.
26 D IGGY [CONT'D]: Corrie, I'm sorry.
27 D CORRIE: For what?
28 D IGGY: I don't know. Everything.
29 D CORRIE: That's not an apology. That's a weather report.
30 D IGGY: I'm trying.
31 D CORRIE: I know you are.
32 A ¶ She folds.
33 A He folds.
* 34 A A buzzer sounds on a distant machine.
35 D IGGY: I could come Sunday.
36 D CORRIE: You said that last month.
37 D IGGY: I came.
38 D CORRIE: For ten minutes.
39 D IGGY: It was ten good minutes.
40 D CORRIE: It was ten minutes you spent on your phone.
41 D IGGY: It was the shop. A guy needed a quote.
42 D CORRIE: Iggy.
43 D IGGY: Okay.
44 D CORRIE: She's not going to be here forever.
45 D IGGY: I know.
46 D CORRIE: You don't.
47 A ¶ He stops.
48 A Sets down the shirt.
49 A Looks at her for the first time.
50 D IGGY: Corrie, I know.
51 A ¶ She meets his eyes.
* 52 A A long beat.
53 A Then she hands him the pajamas.
54 D CORRIE: Do it the way you said.
55 A ¶ He takes them.
56 A Unfolds.
57 A Folds again, slowly, creasing each edge with his thumbnail.
58 D IGGY: See?
59 D CORRIE: That's better.
60 D IGGY: It's the same.
61 D CORRIE: It's better.
* 62 A ¶ A dryer finishes and goes quiet.
* 63 A The room hums on.
64 A They reach for the next pile together.

### SCENE s00308 | EXT. PIER AMUSEMENT ARCADE - NIGHT
Detected names (may be incomplete or contain aliases): NOVA, ABIOLA-HARTLEY, FLISS, OKONJO-VARGA, WYNDHAM TIERNEY-ASARE
* 1 A ¶ Neon, salt air, the electronic bleat of a hundred machines.
* 2 A A claw crane glows at the end of a row.
3 A ¶ NOVELLA "NOVA" ABIOLA-HARTLEY (20s, sequined jacket) feeds quarters into the crane.
4 A Her friend FELICITY "FLISS" OKONJO-VARGA (20s, cardigan, two ice creams) hovers behind.
5 A A stranger, WYNDHAM TIERNEY-ASARE (20s, windbreaker, a tin of tokens), waits for the machine.
6 A ¶ She presses the stick.
* 7 A The claw descends.
* 8 A It grips a plush octopus.
* 9 A It lifts.
* 10 A It drops it.
11 A ¶ She groans and slaps the glass.
12 A He stifles a laugh.
13 A She turns on him.
14 D NOVA: Don't.
15 D WYNDHAM: I didn't.
16 D NOVA: You were going to.
17 D WYNDHAM: I was going to say nice try.
18 A ¶ He slides a token into the slot.
19 A Their eyes meet.
20 A She steps aside.
21 A He takes the stick.
* 22 A The claw descends over the octopus.
23 A Fliss licks her ice cream.
24 A Watches them both.
* 25 A ¶ The claw grabs.
* 26 A Lifts.
* 27 A Shakes.
* 28 A The octopus swings and holds, then drops into the chute.
* 29 A It tumbles out.
30 A ¶ He picks it up.
31 A Hands it to Nova.
32 A She takes it.
33 D NOVA: Thank you.
34 D WYNDHAM: You're welcome.
35 A ¶ They speak at once and laugh.
36 A Fliss clears her throat.
37 D FLISS (to Nova): We're going to miss the Ferris wheel.
38 D NOVA (to Fliss): Go on. I'll catch up.
39 A ¶ Fliss shrugs.
40 A Goes.
41 A Nova turns to Wyndham, hugging the octopus.
42 D NOVA [CONT'D]: So.
43 D WYNDHAM: So.
44 A ¶ She looks at the octopus.
45 A He looks at his shoes.
* 46 A A siren whoops from a driving game and someone shouts jackpot.
47 A She starts to speak and the lights on the pier go out.
* 48 A ¶ Darkness.
49 A A collective moan from the arcade.
* 50 A A beat.
51 A Then the lights return, brighter than before, and he is gone.
52 A She is alone with the octopus.
53 A ¶ She looks around.
54 A Down the row, by the Ferris wheel entrance, he is waving.
55 A Her ticket is in his hand.

### SCENE s00309 | INT. ABANDONED LIGHTHOUSE LENS ROOM, MOONLIGHT - NIGHT
Detected names (may be incomplete or contain aliases): CALLISTA ROUSSEL-OKAFOR, DES, ACHTERBERG-NNAMDI, MARIGOLD PEMBERTON-ASANTE, ZEPHYR KOWALCZYK-ADEYEMI, INSPECTOR MALACHI QUARTERMAINE-OSEI
* 1 A ¶ A great Fresnel lens, dark, towering over the room like a cathedral of cut glass.
* 2 A A rusted catwalk wraps it.
* 3 A Wind sings through broken panes.
4 A ¶ Four people sit on crates in a loose circle, sharing a thermos.
5 A They are strangers by temperament, partners by accident.
6 A ¶ CALLISTA ROUSSEL-OKAFOR (30s, field jacket, a laptop open on her knee) taps keys.
7 A DESMOND "DES" ACHTERBERG-NNAMDI (40s, bearded, binoculars at his chest) glasses the sea.
8 A MARIGOLD PEMBERTON-ASANTE (50s, silver hair, birdwatcher's vest) tends the thermos.
9 A And young ZEPHYR KOWALCZYK-ADEYEMI (20s, headphones at his neck, restless) paces the catwalk.
* 10 A ¶ The sea beyond is flat as slate.
* 11 A The moon is a coin on it.
12 D MARIGOLD (to the group): Tea, anyone?
13 D DES: Please.
14 D CALLISTA: Not now.
15 D ZEPHYR (from above): Nothing yet.
16 D MARIGOLD (muttering): Always nothing yet, then everything at once.
17 A ¶ She pours.
* 18 A The steam rises in a thin ribbon.
19 A Callista types.
20 A Des lowers the binoculars.
21 D DES (to Callista): You're sure of the coordinates?
22 D CALLISTA: I'm sure of the data. Whoever sent it, less so.
23 D DES (to himself): It's a wild goose chase.
24 D ZEPHYR (calling down): It's a boat.
25 A ¶ They all look up.
26 A Zephyr points.
* 27 A On the black water, a light, small and white, is moving toward the lighthouse.
28 D CALLISTA: That's not on the schedule.
29 D DES: No lights, then lights.
30 D MARIGOLD: Hush. Let it come.
* 31 A ¶ The boat grows.
* 32 A A slow engine.
33 A Zephyr descends the catwalk with quick steps.
34 A The four of them gather at the window.
* 35 A Wind whines in the glass.
* 36 A ¶ The boat slides up to the rocks.
37 A A figure climbs onto the landing.
38 A Thin, soaked, a case in one hand.
39 A He is already climbing the iron stair.
40 A ¶ INSPECTOR MALACHI QUARTERMAINE-OSEI (50s, long coat, hat in hand) steps into the lens room, and stops.
41 A He looks at each of them in turn.
42 D MALACHI: Good evening. Thank you for waiting.
43 A ¶ Callista closes her laptop.
44 A Slowly.
45 A Des lowers his binoculars.
46 A Marigold sets down the thermos.
47 A Zephyr moves, quietly, between the inspector and the stair.
48 D MALACHI [CONT'D] (mildly): Please. Don't. I'm here as a friend.
49 A ¶ He sets the case on a crate and opens it.
* 50 A Inside, a folded sheet of paper and a revolver.
51 D MALACHI [CONT'D]: One of you wrote to me. I should like to know which.
* 52 A ¶ Silence.
* 53 A The moon cuts through the lens and throws one blade of light across the floor.

### SCENE s00310 | INT. ORBITAL STATION "HALCYON" - OBSERVATION RING - SHIP NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER YUSUF ADEWUNMI-LINDGREN, HELENA OKONKWO-BRANDT, ENGINEER TOMASZ NAKASHIMA-AMADI, TECH IRIS MBEKI-HALVORSEN
* 1 A ¶ A curved window onto a gray world.
2 A Four crew in thermal suits sit at a low table around a flickering screen.
3 A ¶ COMMANDER YUSUF ADEWUNMI-LINDGREN (50s) speaks first.
4 A DR. HELENA OKONKWO-BRANDT (40s) answers.
5 A ENGINEER TOMASZ NAKASHIMA-AMADI (30s) interrupts.
6 A And the youngest, TECH IRIS MBEKI-HALVORSEN (20s), says nothing.
7 D YUSUF: Final report. Oxygen reserves at eleven percent.
8 D HELENA: That's four days.
9 D TOMASZ: Four days if nobody breathes.
10 D YUSUF: Nobody's counting breaths, Tomasz.
11 D TOMASZ: I am.
12 D HELENA: Commander, the relief ship?
13 D YUSUF: Nine days out.
14 D HELENA: Then we're five short.
15 D TOMASZ: Five.
16 D YUSUF: We are going to be fine.
17 D IRIS (quietly): No, we're not.
18 A ¶ They look at her.
19 A She looks at the window.
20 D IRIS [CONT'D]: But we can say it like we are.
21 A ¶ Yusuf nods.
22 A Helena reaches across the table and takes Iris's hand.
23 A Tomasz folds his arms and stares at the gray world turning below.

### SCENE s00311 | INT. FEDERAL COURTROOM 11 - DAY
Detected names (may be incomplete or contain aliases): JUDGE ROSALIND ABERNATHY-KOMOLAFE, COUNSEL BENEDICT ASANTE-FAIRWEATHER, PRISCILLA DUARTE-LINDQVIST, ATTORNEY MARCUS OYELOWO-STRAND, THE WOMAN, NAVY SUIT, DELPHINA MWANGI-HOLCOMB, JOCASTA
* 1 A ¶ Oak paneling.
* 2 A A seal on the wall.
* 3 A A jury box with twelve empty chairs.
* 4 A It is a pretrial conference, and the room has the hush of a library.
5 A ¶ JUDGE ROSALIND ABERNATHY-KOMOLAFE (60s, robe, reading glasses) presides.
6 A At the plaintiff's table: COUNSEL BENEDICT ASANTE-FAIRWEATHER (50s, three-piece suit) and his associate, MS. PRISCILLA DUARTE-LINDQVIST (20s, legal pad, nervous knee).
7 A At the defense table: ATTORNEY MARCUS OYELOWO-STRAND (40s, rolled sleeves) and his co-counsel, A WOMAN IN A NAVY SUIT (30s), who has not been introduced.
8 A The court reporter, DELPHINA MWANGI-HOLCOMB (50s), types without looking up.
9 D JUDGE ROSALIND: Counsel, the pretrial order states discovery closed March first.
10 D BENEDICT: It did, Your Honor.
11 D MARCUS: It did not.
12 D JUDGE ROSALIND: Mr. Oyelowo-Strand?
13 D MARCUS: Your Honor, the plaintiff's production of the August emails came forty days late.
14 D BENEDICT: Because your client's servers were corrupted.
15 D MARCUS: Because your client's counsel was unreachable.
16 D PRISCILLA (whispering to Benedict): That's not what the file says.
17 D BENEDICT (whispering back): I know.
18 D JUDGE ROSALIND: Counsel, address the court, not each other.
19 D BENEDICT: Yes, Your Honor.
20 A ¶ The woman in the navy suit leans toward Marcus and passes a folded note.
21 A He reads it.
22 A His jaw tightens.
23 D MARCUS: Your Honor, with the court's permission, may I introduce my co-counsel?
24 D JUDGE ROSALIND: Please.
25 D THE WOMAN (rising): Jocasta Reyes-Abiola, Your Honor. Appearing for the defense.
26 D JOCASTA (to the room): We have a motion.
27 A ¶ Priscilla stops writing.
28 A Benedict removes his glasses.
29 A Delphina's fingers pause over the keys.
30 D JUDGE ROSALIND: Ms. Reyes-Abiola, proceed.
31 D JOCASTA: We move to compel the original server logs from August fourteenth.
32 D BENEDICT: Your Honor, those logs do not exist.
33 D JOCASTA: Then Mr. Asante-Fairweather can explain to the court why his firm billed us for reviewing them.
* 34 A ¶ Silence.
35 A Priscilla, very softly, to no one:
36 D PRISCILLA: Oh no.
37 A ¶ Benedict sets down his pen and does not look at her.
38 D JUDGE ROSALIND: Mr. Asante-Fairweather, would you care to respond?
39 D BENEDICT (slowly): I would like a recess, Your Honor.
40 D JUDGE ROSALIND: Denied. Respond.

### SCENE s00312 | INT. BOTANICAL GARDEN ORCHID HOUSE - MORNING
Detected names (may be incomplete or contain aliases): DETECTIVE SOLOMON OKAFOR-LINDQVIST, CURATOR AMELIA DRUMMOND-ADEBAYO, THADDEUS BROUGHAM-ASANTE
* 1 A ¶ Humid green dim.
* 2 A Mist beading on glass.
* 3 A A path of wet flagstones between banks of blooms.
4 A ¶ DETECTIVE SOLOMON OKAFOR-LINDQVIST (50s, trench coat, notebook) crouches beside an empty planter.
* 5 A A tag reads PHALAENOPSIS "GHOST".
* 6 A Nothing grows there.
7 A ¶ CURATOR AMELIA DRUMMOND-ADEBAYO (40s, cardigan, trowel in her back pocket) stands over him, arms crossed.
8 D SOLOMON: When did you last see it?
9 D AMELIA: Last Thursday. Or last Wednesday.
10 D SOLOMON: Which?
11 D AMELIA: I water them in sequence. Thursday is the third bench.
12 D SOLOMON: So Thursday.
13 D AMELIA: So Thursday.
* 14 A ¶ Footsteps on the gravel.
15 A A young man comes round the corner at a trot, apron flapping.
16 A A volunteer: THADDEUS BROUGHAM-ASANTE (20s, name tag on a lanyard).
17 A He freezes when he sees the detective.
18 D THADDEUS: Sorry. I didn't know.
19 D AMELIA: Thaddeus. Go back to the lilies.
20 D THADDEUS: Yes, ma'am.
21 A ¶ He does not move.
22 A Amelia does not look at him.
23 A Solomon, still crouched, studies Thaddeus's hands.
24 A They are stained with potting soil, and a single white petal is stuck to his wrist.
25 D SOLOMON: Thaddeus.
26 D THADDEUS: Sir.
27 D AMELIA: Thaddeus.
28 A ¶ Their voices collide on the name.
29 A Thaddeus swallows.
30 A He peels the petal off his wrist and holds it out on his open palm.
31 D THADDEUS [CONT'D]: It was dying.
32 A ¶ Amelia says nothing.
33 A Solomon straightens slowly, closing his notebook, and in the green dim the mist begins, gently, to settle.

### SCENE s00313 | INT. DEEP-SEA HABITAT "ABYSSAL ONE" - MESS HALL - SHIP NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN DOROTHEA OKORO-VALLENTINE, BART, LINDBERG-NWOSU, MARINE BIOLOGIST SELENE ADEBAYO-KOWALSKI, MEDIC IGNATIUS FAIRCHILD-OSEI
* 1 A ¶ A cramped steel cylinder, portholes black with pressure.
* 2 A A galley table bolted to the floor.
3 A Four crew sit with untouched trays.
4 A ¶ CAPTAIN DOROTHEA OKORO-VALLENTINE (50s).
5 A ENGINEER BARTHOLOMEW "BART" LINDBERG-NWOSU (40s).
6 A MARINE BIOLOGIST SELENE ADEBAYO-KOWALSKI (30s).
7 A MEDIC IGNATIUS FAIRCHILD-OSEI (30s).
8 D DOROTHEA: Say it again.
9 D BART: The hull is whispering.
10 D SELENE: That's metal contraction.
11 D BART: It's not contraction. It's tonal. It repeats.
12 D IGNATIUS: Repeats what?
13 D BART: Seven beats. Pause. Seven beats.
14 D SELENE: Bart, we're nine hundred meters down. Everything whispers.
15 D BART: Not in sevens.
16 D DOROTHEA: Have you logged it?
17 D BART: Three times. Systems say nominal.
18 D IGNATIUS: Maybe the systems are lying.
19 D SELENE: Systems don't lie.
20 D IGNATIUS: They omit.
21 D DOROTHEA: Enough. Bart, if it's not a fault, what is it?
22 D BART: A signal.
23 D SELENE: From where?
24 D BART: Outside.
25 D IGNATIUS: There's nothing outside.
26 D BART: There's a trench outside, three kilometers deep.
27 D SELENE: Whales sing in sevens sometimes.
28 D BART: Not at this depth.
29 D DOROTHEA (low): Play it.
30 D BART: Captain--
31 D DOROTHEA: Play. It.
32 A ¶ Bart reaches under the table.
* 33 A A speaker crackles.
* 34 A Over the hum of the ventilators, a low hollow knock, seven times.
* 35 A A pause.
* 36 A Seven times.
37 D SELENE (whispering): That's inside the hull.
38 D IGNATIUS: That's coming from the airlock.
39 D DOROTHEA: Who's in the airlock?
40 D BART: Nobody.
41 D IGNATIUS: Nobody's in there.
42 D SELENE: Then who's knocking?
* 43 A ¶ The knocking stops.
* 44 A Silence, for a full, heavy breath.
* 45 A Then, from the speaker, the same seven beats, slower, and a voice, far away and fragmentary, that sounds like Selene's own.
46 D SELENE [CONT'D] (barely): That's me.
47 D DOROTHEA: Shut it off.
48 D BART: I can't.
49 D DOROTHEA: Bartholomew.
50 D BART: It's not coming from the system, Captain. It's coming through the glass.
51 A ¶ Selene stands.
* 52 A Her chair clatters.
53 A She backs toward the bulkhead.
54 A The four of them stare at the black porthole.
* 55 A On its surface, in condensation, one finger-width at a time, a handprint begins to bloom.

### SCENE s00314 | INT. LAKESIDE BOATHOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): DOSIA, ELIAS WELLINGTON-ADEBAYO, WOMAN, RUTH MARCHETTI-OSEI, PERRY, ADEKUNLE-STRAND
* 1 A ¶ A weathered boathouse leaning toward the water.
* 2 A Cedar planks gone silver.
* 3 A A rowing shell hangs from the rafters on rope slings, pale as a bone.
* 4 A Light slants through gaps in the boards and lies across the floor in long bars.
* 5 A ¶ Dust turns in the light.
* 6 A A radio, tuned between stations, hisses faintly from the workbench.
7 A ¶ THEODOSIA "DOSIA" WELLINGTON-ADEBAYO (60s, a man's cardigan over a housedress, hair tied up with a bootlace) sits on an overturned bucket, sanding the oar of a long-dead husband.
8 A She works with patient, practiced strokes.
9 A She has done this every autumn for thirty years.
10 A ¶ ELIAS WELLINGTON-ADEBAYO (30s, city coat, rental-car keys on his finger) stands at the threshold.
11 A He has not stepped inside.
12 A His shoes are wrong for the planks.
13 D ELIAS: Mama.
14 D DOSIA: You're late.
15 D ELIAS: Traffic.
16 D DOSIA: There's no traffic on the lake road.
17 D ELIAS: There was a deer.
18 A ¶ She sands.
* 19 A The oar's grain comes up gold under her thumb.
20 D DOSIA: You came to talk about the house.
21 D ELIAS: I came to see you.
22 D DOSIA: Yes. And to talk about the house.
23 A ¶ He steps in at last.
* 24 A The floorboards give a long, low groan.
25 A He looks at the shell above him.
26 A Reaches up.
27 A Does not quite touch it.
28 D ELIAS: It's still here.
29 D DOSIA: Where would it go?
30 D ELIAS: Dad would've sold it.
31 D DOSIA: Your father would have rowed it into the lake and kept going.
32 D ELIAS: Mama.
33 D DOSIA: I'm only saying.
34 A ¶ She finally looks up.
35 A Studies his face.
36 A His coat.
37 A His keys.
38 D DOSIA [CONT'D]: You look like a man who's been told to be gentle.
39 D ELIAS: Ruth thinks--
40 D DOSIA: Ruth thinks a great many things from three states away.
41 D ELIAS: She thinks you should come stay with us.
42 D DOSIA: In an apartment.
43 D ELIAS: A good apartment.
44 D DOSIA: Elias.
45 D ELIAS: Mama, the stairs. The pipes. Winter.
46 A ¶ She sets down the sandpaper.
47 A Brushes dust off her knee with a slow hand.
48 D DOSIA: Tell me, did you ever once, as a boy, carry that oar?
49 D ELIAS: Once.
50 D DOSIA: And?
51 D ELIAS: I dropped it.
52 D DOSIA: Into the lake.
53 D ELIAS: Dad had to swim for it.
54 D DOSIA: He was furious.
55 D ELIAS: He was laughing.
56 D DOSIA: Both things can be true.
* 57 A ¶ The radio hisses.
* 58 A A gull cries somewhere over the water.
59 A Elias sinks onto a coil of rope, and the boathouse tilts a little, and holds.
60 A ¶ A WOMAN's voice calls from the dock outside, bright and brisk.
61 D RUTH [O.S.]: Elias? Is she in there?
62 A ¶ Elias closes his eyes.
63 A Dosia's mouth thins.
64 A She picks up the sandpaper.
65 D DOSIA (low): You brought her.
66 D ELIAS: She drove. I didn't know--
67 D DOSIA: Of course you didn't.
68 A ¶ RUTH MARCHETTI-OSEI (30s, parka, a folder under her arm) steps into the doorway, silhouetted against the lake.
69 A She sees the shell above them, the oar in Dosia's lap, and the quiet.
70 A She stops.
71 D RUTH: Oh. I'm interrupting.
72 D DOSIA: Yes.
73 D RUTH: I'll wait outside.
74 D DOSIA: You'll come in. And you'll stand where I can see you.
75 A ¶ Ruth does.
76 A The three of them make an awkward triangle on the creaking floor.
* 77 A The light bars stretch across their feet.
78 D DOSIA [CONT'D]: Now. Which of you is going to tell me the real reason you're here?
79 A ¶ Neither answers.
* 80 A The radio hisses between stations.
81 A ¶ A small figure appears at the water door at the back: PEREGRINE "PERRY" ADEKUNLE-STRAND (10, wet to the knees, a bucket of minnows).
82 A He stops, takes in the three adults, and decides to be invisible.
83 D DOSIA [CONT'D]: Perry. Put the minnows in the trough.
84 D PERRY: Yes, Miss Dosia.
85 A ¶ He tiptoes past them to the trough, pours, and tiptoes out the way he came.
86 D DOSIA [CONT'D] (softly): Then I'll finish the oar.
87 A ¶ She resumes sanding.
88 A Slow, rhythmic, patient.
89 A Elias watches his mother's hands.
90 A Ruth watches Elias.
* 91 A And the shell hangs above them like a held breath.

### SCENE s00315 | INT. ARMORED PARKING GARAGE, P4 - NIGHT
Detected names (may be incomplete or contain aliases): VIC, ODUYA-LINDGREN, ANNA, BRAITHWAITE-NKOSI, REG, ASANTE-HOLM, DEACON TIMOTHY ABARA-VOSS
* 1 A ¶ Concrete.
* 2 A Sodium glare.
3 A Four people in a ring around a black sedan with its trunk open.
4 A ¶ VIKTOR "VIC" ODUYA-LINDGREN (40s, tailored coat).
5 A ANNELIESE "ANNA" BRAITHWAITE-NKOSI (30s, gloves).
6 A REGINALD "REG" ASANTE-HOLM (50s, armed).
7 A And the fourth, tied to a chair, a gag around his neck: DEACON TIMOTHY ABARA-VOSS (60s, cufflinks).
8 D VIC: Anna, take the gag off.
9 D ANNA: Vic, he'll shout.
10 D VIC: He won't.
11 D REG: He will.
12 D VIC: Deacon, will you shout?
13 D DEACON (hoarse): No.
14 D ANNA: He's lying.
15 D VIC: He's tired. Tired men don't shout.
16 D DEACON: Please, Victor.
17 D VIC: Don't "please" me. You sold the list.
18 D DEACON: I sold nothing.
19 D REG: We've got the bank record.
20 D DEACON: Then the bank record's wrong.
21 D ANNA: Reg, check his phone.
22 D REG: Already did. Nothing.
23 D ANNA: Nothing doesn't mean innocent.
24 D VIC: No. It means careful.
25 D DEACON: Victor, listen. I wasn't the one.
26 D VIC: Then who?
27 D DEACON (a long beat): Ask her.
28 A ¶ Every head turns toward Anna.
29 A She doesn't flinch.
30 D ANNA: That's a nice try, Deacon.
31 D DEACON: Check her laptop.
32 D REG: Anna.
33 D ANNA: Reg, don't.
34 D VIC: Anna.
35 A ¶ The ring tightens.
* 36 A In the silence, a distant door clanks open and footsteps echo down the ramp.

### SCENE s00316 | INT. OPERA HOUSE, FLY GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN LARKSPUR-ADEWALE, HOLDEN PRYCE-NWANKWO, SALOME BRAITHWAITE-OKORO, ZHENYA, ABARA-KOZLOV
* 1 A ¶ Far above the stage, a catwalk of iron grating hung with ropes and counterweights.
* 2 A Below, the orchestra tunes in a distant tide.
3 A Four figures in stagehand blacks creep along the rail.
4 A ¶ The first is IMOGEN LARKSPUR-ADEWALE (40s), who holds a lantern shuttered to a slit.
5 A The second is HOLDEN PRYCE-NWANKWO (50s), who carries a coil of rope over one shoulder.
6 A The third is SALOME BRAITHWAITE-OKORO (30s), who moves like water.
7 A The fourth, last in line, is YEVGENY "ZHENYA" ABARA-KOZLOV (20s), who is sweating through his gloves.
8 A ¶ She raises two fingers.
9 A He freezes behind her.
10 A She points at a hanging chandelier of painted canvas, ten feet away.
11 A He nods, though he cannot see what she means.
12 A She takes the rope from him, loops it round the rail, and tests it with her weight.
13 A He swallows.
* 14 A The chandelier turns slowly in the draft.
15 D IMOGEN (whispering): Ten minutes.
16 D HOLDEN: Eight.
17 D SALOME: Seven, if he stops shaking.
18 D ZHENYA: I'm not shaking.
19 D SALOME: You're humming.
20 D ZHENYA: I'm humming because he's humming.
21 D HOLDEN: Nobody's humming.
22 A ¶ They listen.
* 23 A Below, the orchestra falls silent.
* 24 A A hush rolls up through the dark.
* 25 A A single violin begins, and from beneath the stage a soprano's voice rises in a glissando so pure it makes Imogen's grip tighten on the lantern.
26 A ¶ She turns to him, and he to her.
27 A Her eyes glitter.
28 A His mouth is open.
29 A Whoever they are to each other, in this moment they share a single trembling breath.
30 D SALOME (pointing): Now.
31 A ¶ They move.
32 A She drops the rope.
33 A He catches it.
34 A She slides down.
35 A He braces.
* 36 A The chandelier lurches, and a hundred glass beads shiver.
37 A Below, someone in the audience gasps.
38 D IMOGEN (hissing): Abort!
39 D HOLDEN: Too late!
* 40 A ¶ The chandelier swings free and crashes silently into the curtain, a harmless explosion of painted canvas.
41 A The audience, delighted, applauds.
42 A The four of them crouch on the catwalk, frozen, as the soprano holds her note and the whole house roars.

### SCENE s00317 | INT. REGIONAL SWIM CENTER - POOL DECK - EARLY MORNING
Detected names (may be incomplete or contain aliases): COACH MARISOL TREVELYAN-ADEWALE, ISAURA PRZYBYLSKI-MBEKI
* 1 A ¶ Chlorine haze.
* 2 A Lane ropes bobbing.
* 3 A Rows of empty bleachers.
4 A A single swimmer cuts lengths in lane four.
5 A ¶ COACH MARISOL TREVELYAN-ADEWALE (50s, whistle, towel round her neck) crouches at the pool edge with a stopwatch.
6 A On the starting block, soaked, goggles pushed up on her forehead, waits ISAURA PRZYBYLSKI-MBEKI (17, racing suit, shoulders too narrow for her ambitions).
7 D MARISOL: Again.
8 D ISAURA: I just did two hundred.
9 D MARISOL: And you'll do another.
10 D ISAURA: Coach.
11 D MARISOL: Isaura.
12 D ISAURA: My arms are lead.
13 D MARISOL: Lead floats if you move fast enough.
14 A ¶ Isaura laughs, breath ragged.
15 A Lowers her goggles.
16 D MARISOL [CONT'D]: On my whistle.
17 D ISAURA: On your whistle.
18 A ¶ Marisol raises it.
19 D MARISOL: Go.
20 A ¶ Isaura launches.
* 21 A The water folds around her.
22 A Marisol clicks the watch.
23 A Walks the deck beside the lane, keeping pace.
24 A ¶ At the wall, Isaura tumbles, pushes off.
25 A Marisol bends lower.
26 D MARISOL [CONT'D]: Long. Long.
27 D ISAURA [O.S.] (gasping): I'm trying!
28 D MARISOL: Long, Isaura!
29 A ¶ Isaura touches the far wall.
30 A Surfaces.
31 A Breathes.
32 A Marisol stops the watch.
33 A Looks at it.
34 D MARISOL [CONT'D]: Better.
35 D ISAURA: How much?
36 D MARISOL: Two-tenths.
37 D ISAURA: That's all?
38 D MARISOL: That's everything.
39 A ¶ Isaura grins.
40 A Pulls herself onto the deck and sits, legs dangling.
41 A Marisol sits beside her.
42 A They both stare at the water.
43 D ISAURA: Can I ask something?
44 D MARISOL: You can ask.
45 D ISAURA: Did you ever want to quit?
46 D MARISOL: Every day.
47 D ISAURA: But you didn't.
48 D MARISOL: I got up. That's the whole trick.
49 D ISAURA: That's not a trick. That's just getting up.
50 D MARISOL: Yes. Exactly.
51 A ¶ They say the next line together.
52 D MARISOL: Again?
53 D ISAURA: Again.
54 A ¶ They laugh.
55 A Isaura stands.
56 A Marisol rises.
* 57 A The water settles into stillness, waiting for them.
