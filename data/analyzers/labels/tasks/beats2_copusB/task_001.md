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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusB/group_09001.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05021 | INT. ST. MARGARET HOSPITAL - NURSES STATION - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA, ALBERT, TOMASZ, GLORIA, TEENAGERS, DIRECTOR
1 A ¶ The ward is quiet.
2 A The clock on the wall shows 3:10.
3 A A cleaner pushes a mop slowly past the station and does not look at anyone.
4 A In the corner a vending machine hums.
5 A PRIYA sits with a clipboard, DR. ALBERT eats a sandwich with great care, TOMASZ is looking at his phone and GLORIA, the night manager, walks in a circle around the desk with a mug in her hand and a smile that does not move.
6 D PRIYA (she closes the clipboard): Everybody, tonight is very calm. Maybe the calmest night this year.
7 D DR. ALBERT (he chews, then points to the sandwich): Please do not say this word. Calm. It is a bad word in hospital.
8 D PRIYA (laughing, she touches the wooden desk): I am sorry. I take it back.
9 D TOMASZ (to himself, he reads the screen): Again no message from my wife. Maybe she is sleeping.
10 A ¶ ON PHONE: Tomek where r u?
11 A Come home early pls.
12 A Dog is sick.
13 D TOMASZ (he turns the phone to Priya): You see? The dog. Always the dog.
14 D PRIYA (she reads and nods): You have a dog? I thought you hate animals.
15 D TOMASZ (quietly, to the room): I hate everything at three in the morning.
16 D GLORIA (she lifts the mug to all of them): Friends, I am so happy with this team. Really. Look at this peace.
17 D DR. ALBERT (to Priya, low, he lowers the sandwich): Why is she so happy? She is never happy.
18 D PRIYA (whispering, she shrugs): Maybe she had good sleep.
19 D GLORIA (she hears and smiles wider): I heard this. I am fine. Please, continue your work.
20 A ¶ Two TEENAGERS in school jackets come through the doors, one holding a bloody paper towel to the other's chin.
21 A Nobody stands up.
22 A Priya waves them to the waiting chairs without looking, Tomasz types a reply with one thumb, and Dr. Albert hides the sandwich under a folder while Gloria walks to the window and looks down at the parking lot as if she is waiting for someone.
23 A ¶ The desk phone RINGS.
24 A Priya answers.
25 D PRIYA (into the phone): Ward four, Priya speaking.
26 D DIRECTOR [V.O.] (through the phone, calm and slow): Priya, good evening. This is the Director, from the head office. I am downstairs. I am coming up to see your ward.
27 D PRIYA (she covers the receiver, to everyone): It is the Director. He is downstairs.
28 D DR. ALBERT (he stands, the folder falls, the sandwich falls): Ah no. No, no.
29 D TOMASZ (he puts the phone away and fixes his hair): Now I understand why she smile.
30 D GLORIA (turning from the window, very quietly, to all): He has been in the building since midnight. I did not tell you because I wanted to see your real work.
31 D PRIYA (into the phone, with a very small voice): Welcome, Director. We are ready.
32 D DIRECTOR [V.O.] (the elevator DINGS behind the phone voice): I know. I saw everything on the camera.
33 A ¶ The elevator doors OPEN at the end of the corridor.
34 A The cleaner with the mop stops, takes off his cap, and looks at the four of them.
35 D TOMASZ (a whisper): Is the cleaner the Director?
36 A ¶ Nobody answers.
37 A The cleaner smiles.

### SCENE s05165 | INT. COLDLINE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): BOGDAN, THE WOMAN, ILSE, TWINS
1 A ¶ Water is on the floor, ankle high.
2 A The power is out.
3 A A small camping lantern stands on a shelf and gives yellow light, and BOGDAN, 50s, is moving boxes of canned food from low shelves to high shelves one by one, and in the corner near the loading door THE WOMAN, 30s, wet coat, sits on a stack of pallets with her phone in her hand and she looks at the stairs and at the water and at him, and the rain on the metal roof is loud.
4 D BOGDAN: This shelf is dry. Put your bag here.
5 D THE WOMAN: I keep my bag.
6 D BOGDAN: OK.
7 A ¶ He lifts another box.
8 A She watches him.
9 A The water moves around his boots.
10 A ¶ ON PHONE: Message failed.
11 A No signal.
12 A ¶ She puts the phone in her pocket.
13 D THE WOMAN: How long you work here?
14 D BOGDAN: Eleven years. Never this much water.
15 D THE WOMAN: The driver did not come back.
16 D BOGDAN: He will come.
17 D THE WOMAN: You say this like you do not think so.
18 A ¶ Bogdan does not answer.
19 A He gives her a can of peaches and a plastic spoon.
20 A She takes it.
21 A She does not open it.
22 A She holds it on her knee.
23 D BOGDAN: Open. Eat. We have enough.
24 D THE WOMAN: Later.
25 A ¶ Bogdan sets the lantern higher.
26 A Outside, a car horn sounds far away, two short notes, then stops.
27 A They both look at the door.
28 D THE WOMAN [CONT'D]: My name is Ilse. I should say it.
29 D BOGDAN: Bogdan.
30 D ILSE: I know. It is on your jacket.
31 A ¶ He almost smiles.
32 A He looks at the stitching on his chest as if he forgot it.
33 A ¶ Then the side door BANGS open.
34 A Water rushes in.
35 A THE TWINS, two boys about ten, soaked to the skin, in matching yellow raincoats, stand in the frame holding one backpack between them.
36 A They do not speak.
37 A They look at the lantern.
38 D BOGDAN [CONT'D] (softly): Come. Come inside. Close the door.
39 D THE TWINS (together): We are looking for our mother.
40 A ¶ Ilse stands up.
41 A She sets the can of peaches down on the shelf, open now, with the spoon in it, and she pulls off her coat and puts it over the two small shoulders.
42 D ILSE: Sit. Here. It is dry.
43 A ¶ The boys sit on the pallets.
44 A Bogdan hands them the peaches.
45 A They share the spoon.
46 A ¶ Rain.
47 A The lantern flickers, then holds.
48 A ¶ ON PHONE: one bar.
49 A A message comes through at last.
50 A ¶ ON PHONE: "Where r u?
51 A We are at the bridge.
52 A Boys with you?"
53 A ¶ Ilse reads it.
54 A She does not smile.
55 A She turns the phone so the twins can see the screen, and she keeps her hand on the nearest small wet head.

### SCENE s05178 | INT. RIVERSIDE SOUND STUDIO - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELLIE, RHYS, GRAN
1 A ¶ A dim room, all faders and foam.
2 A Through the glass: a vocal booth, a lone mic, a stool.
3 A ¶ ELLIE (17, borrowed leather jacket two sizes too big) stands inside the booth with headphones clamped on, gripping the mic stand while RHYS (30s, producer, beanie, tea in a chipped mug) slumps behind the desk with his feet up, and a laptop on his knee pings and BUZZES every few seconds as GRAN's name flashes on its screen.
4 D RHYS (into talkback): Again, Ellie. From the second verse.
5 D ELLIE [V.O.] (through speaker): I've done it nine times, Rhys.
6 D RHYS: Ten's a good number.
7 A ¶ She sighs, the speaker crackling.
8 A Rhys's phone rings: GRAN.
9 A He answers, puts it on speaker.
10 D GRAN [V.O.]: Rhys, love, is she there? She's not answering her mobile.
11 D RHYS: She's singing, Gran. Can't be disturbed.
12 D GRAN [V.O.]: Tell her the dinner's gone cold. Tell her I'm proud, and the dinner's gone cold.
13 A ¶ Ellie hears it through the cans.
14 A Her hand goes to her mouth.
15 A Rhys mutes the line and presses talkback.
16 D RHYS: Good. Hold that. Sing it like that.
17 A ¶ She takes a breath.
18 A Closes her eyes.
19 A The red light flicks on.

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

### SCENE s05062 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): GWEN, RICKY, TASHA, BOB
1 A ¶ 2 AM.
2 A Rain.
3 A A hatchback, wipers going.
4 A GWEN, bride-to-be, in a wedding dress, sits in back.
5 A Next to her, RICKY, her ex.
6 A Up front, TASHA drives.
7 A Beside her, BOB, a stranger with a trombone case.
8 D TASHA: So to confirm. Four people. One dress. Zero explanations.
9 D GWEN: He's not with me.
10 D RICKY: I'm totally with her.
11 D GWEN: He's not WITH me with me.
12 A ¶ Silence.
13 A ¶ Bob.
14 A Trombone.
15 A Nothing.
16 D BOB: I got in the wrong car.
17 D TASHA: You got in the right car. You got in the wrong, uh, situation.
18 A ¶ Her phone.
19 A Dead.
20 D GWEN: Does anyone have a charger
21 D TASHA: Glovebox. Next to my dignity.
22 A ¶ He opens it.
23 A Empty.
24 A Rain.
25 D RICKY: Gwen, the groom is at the church. Everyone is at the church. Why are we in a Honda?
26 D GWEN: Because I ran. Okay? I ran. In heels.
27 D BOB (raising trombone case): For what it's worth, I think you look fantastic.
28 A ¶ Beat.
29 A All three turn to him.
30 D TASHA: Sir, you're not even supposed to be here.
31 D BOB: I'm just saying. Great dress.
32 A ¶ She laughs, then cries, then laughs.
33 A He hands her a napkin from the case.
34 A Why does he have napkins in a trombone case.
35 A Nobody asks.
36 A ¶ Tasha stops the car.
37 A Church.
38 A Lights on.
39 A Doors open.
40 A The groom, tiny in the distance, waving.
41 D RICKY: Oh no.
42 D GWEN: Oh no.
43 D TASHA: Five stars everybody. Thats the best ride I ever had.

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

### SCENE s05094 | EXT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): ALANA, COLM
1 A ¶ Detective Sergeant Alana Reyes sits at a corner table with a club soda.
2 A Across from her, Assistant District Attorney Colm Brennan, in a loosened tie, nurses a bourbon.
3 A Neither has touched the appetizers.
4 A String lights sway.
5 A The city hums far below.
6 D ALANA (sliding a folder across): Chain of custody on the Delacroix evidence. Tell me what's wrong with it.
7 D COLM (not opening it): Nothing's wrong with it. It's thin, Alana. Thin is not wrong.
8 D ALANA (quietly): Thin is how it gets tossed at the suppression hearing.
9 D COLM (finally flips a page): Locker 14 was logged out at 2210 and the bag was sealed at 2305. That's fifty-five minutes where a lawyer drives a truck through.
10 D ALANA (she doesn't flinch): Officer Pak was on scene the whole time. She'll testify.
11 D COLM (shaking his head): She'll testify she was on scene. She won't testify nobody touched it.
12 A ¶ A long beat.
13 A A waiter passes.
14 A Neither speaks until he is gone.
15 A Alana picks at the label on her bottle.
16 D ALANA (low, level): I need you to file anyway. Monday. Before the defense gets wind of the gap.
17 D COLM (setting down the glass): You're asking me to walk into a courtroom knowing I might lose the whole case on a paperwork error.
18 D ALANA (meeting his eyes): I'm asking you to walk in knowing the man did it.
19 D COLM (after a pause, soft): That's not the standard. You know that's not the standard.
20 D ALANA (she stands, buttons her jacket): Then give me the standard. Tell me what I need, and I'll go get it.
21 D COLM (he looks at the folder, at the city, at her): Get me Pak's written statement. Notarized. By Friday.
22 D ALANA (a small nod): Friday.
23 A ¶ She leaves the folder.
24 A He pulls it back toward himself and finally, finally starts to read.

### SCENE s05102 | INT. MOON COLONY FUNERAL RECEPTION - EVENING
Detected names (may be incomplete or contain aliases): PIM, PIP, AUNT NEBULA
1 A ¶ Grey dust drifts past the big round window.
2 A Earth hangs there, small and blue and very far away.
3 A Under the dome, a long table of nutrient cakes nobody is touching.
4 A ¶ PIM, a squat round robot the size of a beach ball with two floppy antenna ears, rolls up to the cake table.
5 A Next to him bobs PIP, a thin silver drone with a single blinking eye.
6 A Everyone says they are the same model.
7 A They are not.
8 D PIM (to everyone): Thank you all for coming to say goodbye to Captain Barnaby Tumbleton, who was the best captain of the best crater on the whole moon!
9 A ¶ Dust.
10 A Hush.
11 A A distant air pump going whoosh.
12 D PIP (to Pim): Pim, you said "best" twice and he was the only captain.
13 D PIM (muttering): Then he was twice as best.
14 A ¶ The dome lights flicker low.
15 A A tiny sad chime plays from the speakers, and the cake's candle gutters in the thin air.
16 D PIP: Pim I miss him.
17 D PIM: Me too Pip. (sniff) My antenna ears are leaking.
18 A ¶ The airlock hisses.
19 A In rolls AUNT NEBULA, an enormous fluffy purple dust-bunny robot in a black veil, humming slowly.
20 A She stops.
21 A Everything goes still.
22 D AUNT NEBULA (to the room): Nobody told me I was late. Is there cake left? Is he still dead?
23 D PIM (softly): Yes. To both.

### SCENE s05049 | EXT. DUSTY CROSSROADS - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): BRISKET, INSIDE, SADIE KROLL, CLETUS, MARSHAL REEVES, JOLENE
1 A ¶ A weathered truck painted "BEANS & BRISKET - SINCE YESTERDAY" squats in the sun.
2 A Heat shimmers.
3 A A line of two teenagers in cowboy hats waits at the window while a mangy dog sleeps under the awning.
4 A ¶ INSIDE, SADIE KROLL, 40s, cook, jaw like a knuckle, slaps patties on the flat-top.
5 A Her brother-in-law CLETUS, 50s, leans on the counter pretending to count money.
6 A At the window, a stranger in a long duster, MARSHAL REEVES, 60s, sets down his hat.
7 A And in the corner, her teenage niece JOLENE, 17, wipes a spoon and watches everything.
8 A ¶ CLOSE ON Reeves's badge, half hidden under the duster.
9 D REEVES: Two plates. And a word with Cletus.
10 D CLETUS (laughing too loud): Marshal! Long way from town.
11 D SADIE (not turning from the grill): He's not here for beans, Cletus.
12 A ¶ The dog LIFTS its head.
13 A A screen door SLAMS in the distance.
14 D REEVES (quietly): Where's the payroll box, Cletus?
15 A ¶ ANGLE ON Jolene's hand sliding a cleaver off the shelf.
16 D JOLENE: Uncle Cletus, he's got a warrant folded in his boot.
17 D CLETUS (whispering): Jolene, put that down.
18 D SADIE (spinning around with a spatula held like a pistol): Nobody's cutting anybody. Marshal, sit. Eat. Then we'll talk.
19 D REEVES (tipping his hat back, almost smiling): Sadie, you've never once made it easy.
20 A ¶ BACK TO SCENE: the two teenagers bolt, the dog barks, a plate of brisket hits the dirt, and somewhere in the truck a timer DINGS.

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

### SCENE s05014 | INT. LUMEN NAIL BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): NORA, THE WOMAN, VIVIAN, THE TWINS, DEV, ILSA
1 A ¶ The salon smells of acetone and jasmine, and under that of something else, something nobody in the room has named yet; the dryers hum in a steady chord, the television above the pedicure chairs plays a cooking show on mute, and at the third station a woman in a grey hoodie sits with both hands flat on the table as though she were waiting for them to be read.
2 D NORA (filing, not looking up): Any plans for the weekend, hon?
3 D THE WOMAN (voice flat, eyes on the window): Not really. Maybe visit my sister. She lives out past the reservoir.
4 D NORA (brightly): Oh that's nice. Family is everything.
5 D THE WOMAN (beat): Is it.
6 A ¶ Nora glances up.
7 A Behind the counter, VIVIAN rings up a customer, tucking a stray lock behind her ear, and at the far chair THE TWINS, identical in matching pink smocks, murmur to each other in a rhythm too even to be conversation.
8 D THE TWINS (together, softly): Do you smell it? Do you smell it?
9 D VIVIAN (not turning, counting change): Girls, enough with the perfume jokes.
10 D THE TWINS (together): Not perfume.
11 D NORA (forcing a laugh): They get like this when it rains. Ignore them.
12 D THE WOMAN (finally looking at Nora): It's not raining.
13 A ¶ A silence.
14 A The cooking show on the television flickers, goes to static, comes back.
15 A In the corner, DEV the new tech, who has been sweeping the same square of floor for ten minutes, stops.
16 D DEV (low, to Vivian): The wifi's dropped again. And the card reader. Everything just--
17 D VIVIAN (sharply, not turning): Dev. Floor.
18 D DEV (obeying, quieter): Sorry. Sorry.
19 D NORA (trying again, painting a clear coat): So, what do you do, hon? For work?
20 D THE WOMAN (a thin smile): I count things. How many people, how many exits. How long the lights stay on.
21 D NORA (her brush stilling): That's a strange job.
22 D THE WOMAN (beat): It's a strange week.
23 A ¶ The Twins stop murmuring.
24 A Both rise from their chairs at the same instant, smocks rustling, and the room tilts toward them.
25 D THE TWINS (together, calm): She is early.
26 D VIVIAN (finally turning, color draining): Who is early?
27 D THE TWINS (together, pointing at the hoodie): Her. She was not supposed to come until Thursday.
28 D NORA (whispering, to the woman): Hon, what are they talking about?
29 D THE WOMAN (pushing back her hood to reveal pale, almost translucent skin): My name is Ilsa. And I am so sorry. I wanted one last manicure before the end.
30 D DEV (dropping the broom): The end of what?
31 D ILSA (rising, her hands beginning to glow faintly under the dryer lamps): Of this. All of it. They said you'd want to know.
32 D VIVIAN (very quiet): Nobody here asked.
33 D ILSA (gently): Nobody ever does.
34 A ¶ The television goes black.
35 A Every dryer in the salon stops at once, and in the sudden quiet a single drop of polish falls from Nora's brush and rings against the tabletop like a bell.

### SCENE s05185 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): DANA, ALL, WALTER, TOMAS, FATHER MORAN
1 A ¶ Folding chairs in a circle on cracked linoleum.
2 A A coffee urn sputters.
3 A Under a flickering tube light, six people sit with paper cups, and one of them is wearing a wire.
4 A ¶ Dana Whitlock, 30s, sharp-eyed, an undercover agent in a thrift-store cardigan, sits beside Walter Pruitt, 60s, a retired accountant who hasn't touched his coffee, while across the circle Rosalind Kerr, 50s, a lawyer with ink-stained fingers, grips the arm of Tomas Reyes, 20s, who bounces his knee, and Father Gil Moran, 70s, the host, folds his hands as Priya Anand, 40s, a nurse in scrubs, steps in late and closes the door too carefully.
5 A ¶ CLOSE ON Dana's cup.
6 A A pinhole lens in the rim.
7 D DANA: I'm Dana. I'm an alcoholic.
8 D ALL: Hi, Dana.
9 A ¶ ANGLE ON Walter.
10 A He watches her hands, not her face.
11 A ¶ This is the last time any of them will sit in this room together.
12 D WALTER: You sound new.
13 D DANA: Three weeks.
14 D WALTER: Funny. You smell like gun oil.
15 A ¶ Silence.
16 A The urn gurgles.
17 A Rosalind's grip on Tomas tightens.
18 A ¶ INSERT - Priya's phone, face-down on her knee.
19 A A text lights the screen: HE KNOWS.
20 A ¶ WE SEE Father Moran slowly stand, one hand sliding into his cassock.
21 A ¶ BACK TO SCENE
22 D TOMAS: Nobody move.
23 D FATHER MORAN: Sit down, son. Everyone sit. Dana, the cup, please.
24 A ¶ Dana sets it on the floor.
25 A Slowly.

### SCENE s05118_1 | INT. DR. OKAFOR'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): SASHA, AIDEN, MARLON, DR. OKAFOR
1 A ¶ CLOSE ON the safe.
2 A A small grey box behind a framed diploma.
3 A ¶ Sasha works the dial with a stethoscope pressed against the metal.
4 A Aiden holds the flashlight steady.
5 A Marlon stands in the door and watches the hall.
6 D SASHA (whispering): Twelve. Twenty-six. Three.
7 A ¶ CLICK.
8 A ¶ The safe swings open.
9 A Inside, on a velvet cushion, sits a small box.
10 A ¶ INSERT - THE BOX.
11 A Sasha opens it.
12 A Inside is a plain gold ring and a folded note.
13 A ¶ Aiden unfolds the note and reads.
14 D AIDEN (quietly): "If you are reading this, you found out I never told her I was sorry."
15 A ¶ Silence.
16 A Sasha takes the note, reads it, and passes it to Marlon.
17 D MARLON: I don't think we should take it.
18 D AIDEN: Neither do I.
19 D SASHA: Put it back.
20 A ¶ Aiden closes the box.
21 A Places it in the safe.
22 A Spins the dial.
23 A They tiptoe out of the office as the front door CREAKS and a flashlight beam sweeps across the waiting room.
24 D DR. OKAFOR [O.S.]: Hello?
25 A ¶ BACK TO SCENE
26 A ¶ The three of them freeze in the hallway.
27 A Aiden puts a finger to his lips.
28 A The beagle barks once.
29 A ¶ DR. OKAFOR, 60s, in a raincoat, steps into the beam.
30 A He sees them.
31 D DR. OKAFOR: You found it.
32 D AIDEN: We put it back.
33 D DR. OKAFOR (after a long moment): Good. Come in and have some tea.

### SCENE s05171_0 | EXT. CIVIC PLAZA - CLIMATE MARCH - DAY
Detected names (may be incomplete or contain aliases): RENA, BEA, PROTESTERS
1 A ¶ A river of cardboard signs.
2 A Drums.
3 A A bullhorn SQUEALS and dies.
4 D RENA [V.O.]: Three thousand people, one bank across the square, and nobody looking at the loading dock. That's the whole trick. Be loud somewhere else.
5 A ¶ RENA (30s, green vest, laminated MARSHAL badge) walks against the crowd, while BEA (20s, same vest, clipboard) cuts through the PROTESTERS ahead of her, a backpack riding high on her shoulders, and above them both a banner reading THERE IS NO PLANET B snaps in the wind as a helicopter's rotor THUMPS somewhere over the glass towers.
6 D PROTESTERS (chanting): Pay for it! Pay for it! Pay for it!
7 A ¶ Rena catches up.
8 A Bea doesn't slow.
9 D RENA: You're early.
10 D BEA: You're late. She said two-ten.
11 D RENA: She said two-fifteen.
12 D BEA: She said whatever gets us paid.
13 A ¶ A cardboard polar bear bobs between them.
14 A Bea ducks it.
15 A Rena doesn't.
16 D RENA [V.O.]: Bea never trusted a plan she didn't write. Which was fair. She wrote this one.
17 A ¶ A whistle SHRIEKS.
18 A Police on bikes line the east side of the plaza.
19 A Bea steers Rena by the elbow toward the alley behind the bank.
20 D BEA: Badge.
21 D RENA: On.
22 D BEA: Truck?
23 D RENA: Ten minutes out. She's driving.
24 A ¶ Bea stops short.
25 A Stares at her.
26 D BEA: She's driving? She said she'd be here.
27 D RENA: She's here. I mean she's close. She's in the truck. Bea, she's fine.
28 D PROTESTERS (chanting, louder): Pay for it! Pay for it!
29 A ¶ A speaker on the stage starts a speech.
30 A The crowd ROARS.
31 A Bea uses the noise and cracks the service gate with a bolt cutter.
32 A The lock CLANKS onto the pavement.
33 D BEA: Then she's late and she's here. Pick one.
34 D RENA [V.O.]: Forty seconds to the dock. Four minutes inside. Everybody on that square would remember the speech and nobody the van.
35 A ¶ They slip through.
36 A The gate CLANGS shut behind them.
37 A The chanting drops to a muffled pulse.

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

### SCENE s05196 | INT. ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): JESS, THEO
1 A ¶ String lights.
2 A A city that does not care.
3 A Two stools at the far corner, away from the party.
4 D JESS (pulling her sleeves over her hands): You came.
5 D THEO (not looking at her, turning a glass): You said it was important.
6 D JESS (laughs, too fast): I said there was free food.
7 D THEO (sets the glass down, slides it an inch away): There isn't any.
8 D JESS (looks at the glass, then the skyline): No. There isn't.
9 A ¶ This is the last summer they will be two people who share a hometown.
10 D THEO (finally meeting her eyes, then not): Are you still going?
11 D JESS (picks at a label): My flight's Thursday.
12 D THEO (nods slowly, counts something on the bar with his finger): Right. Thursday.
13 D JESS (quiet): You could say something.
14 D THEO (shrugs, a shrug with a lot of weight in it): What would I say.
15 D JESS (a short breath): I don't know. Anything. You used to say everything.
16 D THEO (pushes his stool back, an inch, two): I used to think it would change something.
17 D JESS (stands, stool scraping): That's not fair.
18 D THEO (standing too, voice tight): Fair. You decided this in March. You told your mum before you told me.
19 D JESS (hands shaking, grabs her jacket): Because I knew you'd do this. Go quiet. Make it my fault.
20 D THEO (louder, a head turns at the next table): It is your fault!
21 D JESS (throws the jacket down, not caring who looks): Then say it! Say you don't want me to go!
22 D THEO (a long beat. He breathes. His whole face gives): I don't want you to go.
23 D JESS (whispering, the fight draining out of her): Okay.
24 D THEO (picks up the jacket, holds it out): Okay.
25 D JESS (takes it. Doesn't put it on): I'm still going.
26 D THEO (smiles, wet-eyed): I know.

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

### SCENE s05068_1 | INT. COUNTY PAROLE OFFICE - OFFICER OKAFOR'S OFFICE - LATER
Detected names (may be incomplete or contain aliases): RUTH, THE MAN, CALVIN
1 A ¶ Ruth Okafor, 50s, reading glasses pushed up into gray braids, sits behind a desk piled with files, a cactus, a photograph of a boy in a graduation gown turned slightly away from the visitor's chair.
2 A She is calm, almost bored.
3 A She has done this four thousand times.
4 A ¶ The man sits.
5 A He puts the folder on the desk.
6 D RUTH: Mr. Voss. How's the job?
7 D THE MAN: Fine.
8 D RUTH: The apartment?
9 D THE MAN: Fine.
10 D RUTH: You've been fine for six weeks. I'm starting to think you're a fine person.
11 A ¶ He doesn't smile.
12 A She turns a page.
13 D RUTH [CONT'D]: Says here you missed your Thursday check-in.
14 D THE MAN: I called.
15 D RUTH: You left a message with Deb. Deb doesn't write things down. Deb is a lovely woman and a terrible secretary.
16 D THE MAN: I was at work. They put me on a double.
17 D RUTH: Did you bring a pay stub?
18 A ¶ He slides the folder across.
19 A She opens it, flips, and stops.
20 A Her eyebrows lift very slightly.
21 D RUTH [CONT'D]: This isn't a pay stub.
22 A ¶ It's a photograph.
23 A A school photo, a boy of about eight, missing a front tooth.
24 A She looks at it a long time.
25 A When she looks up, her voice is lower.
26 D RUTH [CONT'D]: Where did you get this?
27 D THE MAN: Mailbox. Yesterday.
28 D RUTH: It's not allowed. You know it's not allowed. The order says no contact.
29 D THE MAN: I didn't contact anybody. It came in the mail. I didn't do a thing.
30 A ¶ He leans forward.
31 A For the first time his voice shakes, not much, just enough.
32 D THE MAN [CONT'D]: Somebody wants me to violate. That's all this is. Somebody wants me back inside.
33 D RUTH: Who?
34 A ¶ He doesn't answer.
35 A His hands, on his knees, have begun to tremble, and he presses them flat.
36 D RUTH [CONT'D]: Mr. Voss, I need a name.
37 D THE MAN: Calvin.
38 D RUTH: Excuse me?
39 D THE MAN: Calvin. My name's Calvin. Everybody calls me Voss like I'm a case number. I'd like, once, for somebody in this building to say it.
40 A ¶ She sets the photograph down, gently, and for a moment the whole office seems to hold its breath.
41 A Deb's keyboard has stopped.
42 A Somewhere a printer jams.
43 D RUTH: Calvin.
44 A ¶ He closes his eyes.
45 D RUTH [CONT'D]: I'm going to make a call. You're going to sit right here. You are not in trouble.
46 D CALVIN (opening his eyes): That's what they said last time.
47 A ¶ She stands, takes the photograph, and walks to the door, and in the doorway she hesitates, and does not look back, and this is the last time the two of them will sit in the same room as strangers.

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

### SCENE s05054 | EXT. HARBOUR PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): METAPHOR, TESS, RILEY, ABE, NOOR, WAILS, RADIO, GIL
1 A ¶ Crowd.
2 A Cardboard signs.
3 A A drum somewhere.
4 A ¶ Riley, 20s, in a thrifted raincoat, is holding a sign that says THE SEA IS NOT A METAPHOR.
5 A She is also holding two coffees.
6 A ¶ Tess, 30s, arrives, out of breath, with a tote bag.
7 D TESS: sorry sorry, the train was
8 D RILEY: it's fine. you're here.
9 A ¶ Tess takes the coffee.
10 A They stand there.
11 A The drum gets louder.
12 A ¶ Abe, 60s, in a lab coat under a puffer jacket, pushes through with a megaphone he doesn't know how to hold.
13 D ABE: is this thing on? it's not on.
14 D TESS: it's the red button.
15 D ABE: which one's the red button.
16 A ¶ Noor, 19, climbs onto a bench.
17 A Everyone looks up.
18 A Nothing.
19 D NOOR (to the crowd): hey. hi. so. we're like, two hundred people, and the thing behind us
20 A ¶ She points.
21 A The harbour.
22 A The water has pulled back, way too far.
23 A ¶ Silence.
24 D RILEY (muttered): okay that's new.
25 A ¶ A horn BLARES from the ferry terminal.
26 A A siren WAILS, thin and far away.
27 D RADIO [V.O.] (from Gil's handheld, crackling): all units, all units, tide gauges are reading minus four, I repeat, minus four
28 A ¶ Gil, 40s, an event steward in a hi-vis vest, jogs over, radio to his ear.
29 D GIL: okay folks, so, quick thing, we're gonna move uphill. calmly.
30 D ABE (into the megaphone, finally working): EVERYONE PLEASE MOVE UPHILL.
31 D TESS (to Riley, quiet): this is the thing we put on the signs.
32 D RILEY: yeah.
33 D NOOR (from the bench, calling out): GIL, WHICH WAY IS UPHILL?
34 D GIL: that way! the library!
35 A ¶ The crowd starts to move.
36 A Signs drop.
37 A The drum stops mid-beat.
38 A ¶ Rain.
39 A A single raindrop on a sign.
40 D RILEY (to herself): okay okay okay.
41 A ¶ She takes Tess's hand.
42 A They run.

### SCENE s05034 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NARRATOR, LORETTA, DEV, PRIYA, OSWALD, THE TALL MAN, DRIPPING YELLOW SLICKER
1 A ¶ Fluorescent light, a dozen washers turning slow, lukewarm steam on the windows.
2 A Four people wait out their cycles.
3 D NARRATOR [V.O.]: This is the last time they will all be in the same room, though none of them knows it yet.
4 D LORETTA (folding a pillowcase, humming): My mother said never wash a dead man's shirts. I said, Ma, they're only shirts.
5 D DEV (not looking up from his phone, thumbing a message): Cheap soap makes more suds. Doesn't make it clean.
6 D PRIYA (holding a hot towel to her cheek, watching the door): Who's the guy outside? He's been standing by the bins for twenty minutes.
7 D OSWALD (stirring a paper cup of coffee, shrugging): Waiting on a dryer, probably. Everybody waits on something.
8 A ¶ The bell over the door jingles.
9 A A TALL MAN IN A DRIPPING YELLOW SLICKER steps in, carrying a laundry bag that is much too heavy and much too still.
10 D NARRATOR [V.O.]: Calm lasts exactly as long as the first drip hitting the tile.
11 D THE TALL MAN (setting the bag down gently, smiling): Evening. Any machines free? I've a bit of a mess to wash.
12 A ¶ The bag shifts.
13 A Nobody says a word.
14 A Every washer in the room stops spinning at once.

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

### SCENE s05082 | INT. SUBWAY CAR - EVENING RUSH
Detected names (may be incomplete or contain aliases): POPPY NAKAMURA, BISCUIT, MARCUS, DELILAH OKONKWO, CLANG, TUNNEL WALL
1 A ¶ A packed Number 6 train SCREECHES through the dark.
2 A Straphangers sway like seaweed.
3 A The lights flicker.
4 A The car smells of pizza and wet umbrellas.
5 A ¶ CLOSE ON a tiny paper bag in the arms of POPPY NAKAMURA, 9, brave, braces on her teeth.
6 A Inside the bag, a hamster peeks out.
7 D POPPY: Don't look, Biscuit. Crowds make you nervous.
8 D BISCUIT [O.S.] (muffled squeak): I'm not nervous. You're nervous.
9 A ¶ ANGLE ON Poppy's big brother, MARCUS, 15, headphones around his neck, glued to a dead phone.
10 D MARCUS: Pop, we're four stops from home. Do not name-drop the hamster in public.
11 D POPPY: He has a name, Marcus.
12 D MARCUS: He has a name that means "snack" to every cat in Queens.
13 A ¶ The train JERKS.
14 A Everybody lurches.
15 A A man's coffee flies.
16 A ¶ WE SEE the lights die.
17 A Total black.
18 A A collective GASP.
19 A ¶ The train GROANS to a stop.
20 D POPPY [CONT'D]: Marcus?
21 D MARCUS: Right here, Pop.
22 D DELILAH (from the dark, a big voice): Everybody stay calm! I've been stuck down here before!
23 A ¶ Poppy squints.
24 A A small flashlight clicks on.
25 A It shines on DELILAH OKONKWO, 60s, a transit worker's vest, a thermos the size of a fire hydrant.
26 D DELILAH [CONT'D]: Ten minutes. Tops. Y'all hold hands if you gotta.
27 D MARCUS: Is that official?
28 D DELILAH: It's a suggestion, baby.
29 D POPPY: Delilah, I think Biscuit's scared.
30 D DELILAH: Biscuit is the hamster?
31 D POPPY: He's a very brave hamster.
32 D MARCUS: He is literally shaking.
33 D POPPY: Marcus, shush!
34 D DELILAH: Both of you shush. Hear that?
35 A ¶ Silence.
36 A Then a faint CLANG, CLANG, CLANG from the tunnel ahead.
37 A ¶ INSERT - THE TUNNEL WALL, a rusty pipe trembling.
38 D POPPY (whispering): That's not a ten-minute noise.
39 D DELILAH (low): No. It is not.
40 D MARCUS: Okay. Okay. What do we do?
41 D DELILAH: You and your sister stay by me. Poppy, you keep that little fella warm.
42 D POPPY (to the bag): You hear that, Biscuit? We're a team now.
43 D BISCUIT [O.S.] (squeak): Tell Marcus I said sorry about his sneakers.
44 D MARCUS: What did he say?
45 D POPPY: Nothing.
46 A ¶ The clanging STOPS.
47 A ¶ The lights flash on.
48 A The train LURCHES forward.
49 A ¶ Everyone CHEERS.
50 A ¶ BACK TO SCENE
51 A ¶ Marcus slumps against a pole, laughing with relief.
52 A Poppy squeezes the bag.
53 A Delilah screws the cap on her thermos.
54 A ¶ This is the last time the three of them will ever be strangers.
55 D DELILAH: Next stop is yours, kids.
56 D POPPY: Thank you, Delilah.
57 D DELILAH: Thank the hamster.

### SCENE s05137 | INT. NIGHT BUS - LOWER DECK - NIGHT
Detected names (may be incomplete or contain aliases): WALTER, EDITH, ALISTAIR, TOMMY
1 A ¶ 1953.
2 A London, fog thick as wet wool against the windows.
3 A The bus lurches through an empty Bayswater, its engine groaning like an old man climbing stairs.
4 A ¶ Edith Marsh, 30s, a nurse in a navy coat with the cap folded in her lap, sits near the back.
5 A Her shoes are scuffed from a double shift.
6 A Across the aisle, Walter Penn, 60s, a conductor with a ticket machine strapped to his chest, leans on the rail and yawns without apology.
7 A ¶ ANGLE ON the dim bulb overhead, flickering, throwing yellow across faces.
8 A ¶ Near the front, Alistair Crane, 40s, in a good tweed overcoat too warm for the night, reads a folded newspaper he is not reading, while beside him a boy, Tommy, 10, in a cap too big for him, kicks his heels against the seat and watches the rain run in lines down the glass, and Walter checks his watch and the clock above the driver and the road ahead, all in one practised sweep.
9 D WALTER: Fares, please. Fares. Last bus tonight, ladies and gentlemen. Last bus and last chance.
10 D EDITH (tired, smiling): You say that every night, Mr Penn.
11 D WALTER: And every night I mean it, Miss Marsh.
12 A ¶ WE SEE Alistair's gloved hand tighten on the newspaper.
13 D ALISTAIR (without looking up): The boy has no ticket.
14 D TOMMY (small): Da says it's all right.
15 D ALISTAIR: Does he.
16 D WALTER (gently): Where's your da, lad?
17 D TOMMY: Home. He's poorly.
18 A ¶ Silence.
19 A The bus turns a corner, and everyone sways together.
20 A ¶ CLOSE ON Tommy's coat sleeve.
21 A The cuff is worn through.
22 A Edith sees it.
23 D EDITH (rising, crossing the aisle): I'll pay his fare. Here. A tuppence, is it?
24 D WALTER: Threepence from here, miss.
25 D EDITH: Then threepence.
26 A ¶ She sets the coins in the machine's tray.
27 A Alistair folds the newspaper at last, slow and exact, and looks at her for the first time.
28 D ALISTAIR: That's very generous. I wonder you can afford it, on a nurse's wage.
29 D EDITH (level): I wonder you can afford that coat, on whatever it is you do.
30 D WALTER (a warning): Now then.
31 D ALISTAIR: I do very well, thank you. I take an interest in people who leave their patients at night.
32 D EDITH: I haven't left anyone.
33 D ALISTAIR (softly): Mrs Harcourt, in the end bed. She'd be a good deal more comfortable if you'd stayed.
34 A ¶ Edith goes still.
35 A The engine drones.
36 A Tommy has stopped kicking.
37 A ¶ BACK TO SCENE: the bus slows at a stop where no one waits, the doors hiss, and cold air comes in carrying the smell of coal smoke.
38 D EDITH (very quiet): Who are you?
39 D ALISTAIR: Someone who reads the ward reports.
40 D WALTER: I think, sir, you'd best get off here.
41 D ALISTAIR: I think I'll ride to the terminus, conductor. I've paid.
42 D TOMMY (tugging Edith's sleeve): Miss, is he a policeman?
43 D EDITH (a long beat): No, love. I think he's only lonely.
44 A ¶ Alistair's face flickers, the tiniest crack.
45 A He looks at the boy, then at the fogged window, then at his own reflection, which looks like someone he would rather not be.
46 D ALISTAIR (low): Mrs Harcourt died at nine. I was her son.
47 D EDITH (stricken): I'm so sorry. I didn't know.
48 D ALISTAIR: No. Nobody did. She said you were kind.
49 A ¶ Walter takes off his cap.
50 A The doors hiss shut.
51 A The bus pulls away into the fog, and no one says anything else.
