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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_csonnet/group_00005.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05162 | EXT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): HALE, BRANDT
1 A ¶ Detective Annika Brandt, 40s, sits at the far end of the bar with a club soda and a view of the elevator.
2 A She keeps her jacket on.
3 A Under it, a wire taped below the ribs.
4 A Her phone sits face up beside the glass.
5 A ¶ The phone BUZZES.
6 A She lets it ring twice, then answers and puts it to her ear.
7 D HALE [V.O.]: Tell me you're up there.
8 D BRANDT: Corner. By the heater. Where are you?
9 D HALE [V.O.]: Parking structure. Level three. I'm giving it five minutes.
10 D BRANDT: Five minutes is fine.
11 D HALE [V.O.]: You come alone?
12 D BRANDT: You asked me to.
13 A ¶ The line goes quiet.
14 A Wind snaps a string of lights overhead.
15 A She watches the elevator numbers climb on the display, 2, 3, 4, and her thumb goes still on the glass.
16 D BRANDT [CONT'D]: Hale. Level three. You said that already?
17 D HALE [V.O.]: Yeah. Why?
18 D BRANDT: No reason. Come on up.
19 A ¶ She ends the call.
20 A The phone lights.
21 A ¶ ON PHONE: unknown number -- "ur not alone up there"
22 A ¶ She reads it once.
23 A She does not look around.
24 A She sets the phone face down and slides a hand into her jacket, thumbs the transmitter.
25 D BRANDT [CONT'D] (low, to the wire): Unit two, confirm the garage camera. Level three. Is anyone there?
26 A ¶ A beat.
27 A Nothing in the earpiece.
28 A Static, then a CLICK.
29 A ¶ The elevator DINGS.
30 A Tomasz Hale, 50s, rumpled suit, steps out and scans the roof.
31 A He sees her, hesitates, then crosses to the stool beside hers.
32 A He sits too carefully, as though the cushion might be wired.
33 D HALE: You look like a cop.
34 D BRANDT: You look like a man who's late.
35 D HALE: I wasn't in the garage.
36 A ¶ She turns her head.
37 D BRANDT: Say that again.
38 D HALE: I took the stairs. I was on the stairs the whole time. The call, it wasn't me calling.
39 A ¶ Her phone BUZZES against the bar.
40 A She doesn't touch it.
41 A He nods at it.
42 D HALE [CONT'D]: That's him. He's got my phone. He's got my kid's school schedule too, Detective, that was the part I couldn't, I had to come.
43 D BRANDT: Who has your phone?
44 D HALE: The man at the table behind you. Blue shirt. Don't turn around.
45 A ¶ The ice in her glass shifts.
46 A Somewhere behind her a chair scrapes.
47 A ¶ ON PHONE: unknown number -- "good. now both of u stand up"
48 D BRANDT (barely moving): How long has he been sitting there?
49 D HALE: Since before I got here. He walked me up.
50 D BRANDT: And the garage?
51 D HALE: There's no one in the garage. There's never been anyone. He wanted you to say it out loud.
52 A ¶ She exhales.
53 A Her hand comes out of the jacket empty.
54 A Behind her, a glass is set down, softly, and a shadow lengthens across the bar top.
55 D BRANDT: Then he's already heard everything.
56 D HALE: Every word.
57 A ¶ The phone BUZZES a third time.
58 A Neither of them looks at it.
59 A She slides off the stool, standing straight, still not turning around.
60 A He stays seated, staring into his lap.
61 D BRANDT (quietly): Stay seated, Tomasz. Whatever happens next, you stay in that chair.
62 D HALE: What are you going to do?
63 A ¶ She lifts the wire's transmitter out from under her shirt in plain view and lays it on the bar.
64 D BRANDT: Say hello.
65 A ¶ She turns around.

### SCENE s05164 | INT. NIGHT BUS 41 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): MIRA CALLING, HOODIE GUY, TEODOR
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- Rain on the window.
3 A City lights smear into gold stripes.
4 A ¶ -- CLOSE ON a bus card tapping the reader.
5 A BEEP.
6 A ¶ -- ANGLE ON the back rows.
7 A Nearly empty.
8 A A bag of fries going cold.
9 A ¶ MIRA, 16, backpack in her lap, sits near the middle.
10 A Across the aisle, HOODIE GUY, 40s, hood up, face turned to the window.
11 A He has been there since the depot.
12 A ¶ She digs out her phone.
13 A Dials.
14 D MIRA (into phone, whispering): Dad? It's me. I'm on the 41. I know it's late. (glances around) Yeah, I'm okay. I just. I needed to go somewhere.
15 D TEODOR [V.O.]: Where are you going, Mira?
16 D MIRA (pressing her forehead to the glass): Aunt Lena's. She said I could come anytime. (a breath) You weren't going to let me leave, so I didn't tell you.
17 D TEODOR [V.O.]: I'm not mad.
18 D MIRA (laughs, bitter): You are. You're doing the voice.
19 A ¶ -- WE SEE the Hoodie Guy's shoulders tighten.
20 A He does not turn.
21 A ¶ -- INSERT: a cracked phone screen on his knee.
22 A It lights up: "MIRA CALLING?" no, "DAD HOME".
23 A It is silent.
24 A He sets it face down.
25 D TEODOR [V.O.]: Tell me which stop. I'll pick you up. We don't have to talk.
26 D MIRA (her voice breaks): You'd just stand there with the car running, Dad. You'd say nothing for forty minutes.
27 D TEODOR [V.O.]: That's, that's not --
28 D MIRA (cutting in, louder): It is! It's what you do! Mom left and you said nothing, I got in your car and you said nothing, I said I hated you and you said NOTHING!
29 A ¶ Heads on the bus lift.
30 A The Hoodie Guy pushes his hood back.
31 A Gray stubble, red eyes.
32 A Her phone is still at her ear.
33 A His mouth moves on the same words as the voice in the speaker.
34 D TEODOR [V.O.] (and across the aisle, aloud, the same sentence): I'm sorry, Mira.
35 A ¶ BACK TO SCENE: Mira slowly lowers the phone.
36 A The call timer ticks.
37 A The bus HISSES to a stop.
38 D MIRA (staring at him, barely audible): Dad?
39 D TEODOR (standing in the aisle, hands open, voice thick): Say it again. Say it all again, to my face, while I'm standing here.
40 A ¶ The doors fold open on the rain.
41 A Neither of them moves.

### SCENE s05166 | INT. SUDS & DUDS LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): COLT, MO, PRISCILLA, TESSA, BLARES
1 A ¶ Tessa, 17, sits on a dryer typing fast while Jaylen, 17, watches the door and Mo, 16, hugs a duffel that clearly is not full of laundry.
2 A Priscilla, 18, the attendant, mops near the machines pretending she doesn't hear anything.
3 A Colt, 19, in a letterman jacket, leans on the soda machine, eyes locked on the duffel.
4 A ¶ ON PHONE: Tessa to Group: "he's HERE. do NOT look at him"
5 A ¶ Everyone looks at him.
6 D COLT: Yo. Mo. You got my stuff or what.
7 D MO: It's not your stuff. It's Wren's.
8 A ¶ Wren, 17, hoodie up, emerges from the bathroom drying her hands, sees Colt, stops dead.
9 A Jaylen steps between them, Tessa slips off the dryer and edges toward the exit, Priscilla's mop bumps the duffel, and a dozen glossy flash drives spill out across the wet floor like silver fish.
10 D PRISCILLA: Nope. I didn't see that. I'm on break.
11 A ¶ ON PHONE: Wren to Tessa: "RUN"
12 D TESSA (under her breath): I literally told you.
13 A ¶ Colt grins and grabs a drive.
14 A Wren lunges.
15 A The lights flicker, a dryer buzzer BLARES, and everybody freezes as blue and red light sweeps across the front window.

### SCENE s05167 | INT. GREENFIELD VETERINARY CLINIC - AFTER HOURS
Detected names (may be incomplete or contain aliases): LUCAS, ALMA PRUITT, ABERNATHY, DEPUTY HARLOW
1 A ¶ Rain.
2 A ¶ The waiting room.
3 A Empty chairs.
4 A A fish tank bubbling.
5 A A wall clock reads 11:48.
6 A ¶ LUCAS, 20s, a vet tech in scrubs, kneels beside the reception desk, a flashlight in his teeth, looking at the floor.
7 A DR. ALMA PRUITT, 50s, stands over him holding a clipboard.
8 A MRS. ABERNATHY, 70s, in a raincoat, sits in a plastic chair with an empty cat carrier on her lap.
9 A ¶ Silence.
10 D DR. PRUITT: Lucas. Tell me again.
11 D LUCAS (taking the flashlight out): She was in the carrier at nine. I checked her. I swear I checked her.
12 D MRS. ABERNATHY: Biscuit doesn't just disappear.
13 A ¶ Nothing.
14 A ¶ Lucas stands.
15 A He crosses to the supply cabinet and opens it.
16 A Bandages.
17 A Syringes.
18 A A bag of kibble torn open, the floor under it dusted with crumbs.
19 A He crouches.
20 A Small paw prints in the powder of spilled flea treatment, leading toward the back hall.
21 D LUCAS: Look.
22 A ¶ Dr. Pruitt looks.
23 A Mrs. Abernathy rises, the carrier trembling in her hands.
24 A The prints stop at a closed door marked STAFF ONLY.
25 D DR. PRUITT: That door's always locked.
26 D LUCAS: Not tonight.
27 A ¶ The knob.
28 A It turns by itself.
29 A A soft CLICK.
30 A ¶ Mrs. Abernathy gasps.
31 A Dr. Pruitt steps in front of her.
32 A Lucas lifts the flashlight like a weapon.
33 A ¶ The door swings open.
34 A Dark.
35 A Cold.
36 A The smell of antiseptic.
37 A ¶ A small shape.
38 A Two green eyes.
39 A ¶ And then, behind them, the front bell JANGLES.
40 A The glass door BANGS against the wall.
41 A Wind and rain flood in.
42 A ¶ DEPUTY HARLOW, 40s, hat dripping, steps inside and shuts the door behind him.
43 A He looks at the three of them.
44 A At the open staff door.
45 A At the cat carrier.
46 D DEPUTY HARLOW: Evening. Somebody called in a break-in at this address.
47 D DR. PRUITT (too fast): No. No break-in.
48 D LUCAS: Nobody called.
49 A ¶ Silence.
50 D DEPUTY HARLOW: Funny. The call came from inside.
51 A ¶ The three of them turn, slowly, to the staff door.
52 A The small shape in the dark steps forward into the light.
53 A A gray cat.
54 A Biscuit.
55 A A tiny brass key hangs from her collar.
56 A ¶ Nothing else moves.

### SCENE s05168 | INT. SUBWAY CAR - RUSH HOUR - STALLED
Detected names (may be incomplete or contain aliases): FRANCESCA, DEVIN, GUS, BERNADETTE, TARIQ
1 A ¶ A packed car.
2 A The lights flicker, then the train JERKS to a stop between stations.
3 A The announcement crackles and dies.
4 A Nobody can move more than two inches.
5 A ¶ FRANCESCA, 30, in a bridesmaid dress with a garment bag over one arm, is pinned against the door.
6 A She holds her phone above her head, searching for a signal.
7 A DEVIN, 32, in a rumpled suit, is wedged against her back, holding a cake box very carefully above his head.
8 D DEVIN: Sorry. Sorry. Is that your elbow?
9 D FRANCESCA: That is your cake.
10 D DEVIN: It's a wedding cake. For a wedding.
11 D FRANCESCA: Which wedding?
12 D DEVIN: Mine. Well. My sister's. I'm best man.
13 A ¶ She cranes around.
14 A He blinks at her.
15 A She has a streak of mascara under one eye, and a tiara crooked in her hair.
16 D FRANCESCA: I'm the maid of honor. At the Whitfield wedding.
17 D DEVIN: That's my sister.
18 D FRANCESCA: Then you're the brother who never RSVPs.
19 A ¶ He opens his mouth, closes it.
20 A GUS, 60s, a retired conductor squeezed in beside them with a trombone case, chuckles.
21 A BERNADETTE, 20s, in tights and a tutu, is crouched on the floor eating a bagel.
22 A TARIQ, 18, headphones on, is asleep standing up, drooling against a pole.
23 D GUS: You two should just get married.
24 A ¶ FRANCESCA and DEVIN (together) No.
25 A ¶ The train shudders.
26 A Lights out.
27 A Total darkness.
28 A A collective groan.
29 A Then the screen of her phone glows.
30 A ¶ ON PHONE: Mom: "WHERE ARE YOU.
31 A CEREMONY IN 20"
32 A ¶ ON PHONE: Bride: "if the cake's not here by 3 I'm eloping"
33 D DEVIN: Uh oh.
34 D FRANCESCA: Oh no.
35 A ¶ She turns to look at him in the blue glow.
36 A The tiara has slipped almost over one eye.
37 A He lowers the cake box an inch and, in the dark, breathes out.
38 A ¶ This is the last time they will be strangers.
39 A ¶ The emergency lights come on.
40 A A dull thunk, and the train lurches forward.
41 A Everybody tilts the same direction.
42 A The cake box slides out of Devin's hands, Francesca catches it, Gus catches her, and Bernadette catches the bagel.
43 D TARIQ (waking up, loudly): Did we make it?
44 D BERNADETTE: No.
45 D TARIQ: Cool.

### SCENE s05169 | INT. DUSTY RECORDS - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): ABEL, CLEMENTINE, HUX, BAND
1 A ¶ A converted barn in the high desert.
2 A Egg-crate foam stapled to the walls.
3 A A tumbleweed, a real one, sits in the corner like a joke nobody got around to cleaning up.
4 A ¶ Clementine, 30s, boots up on the console, picks at a lap steel.
5 A Abel, 40s, the producer, flannel and tired eyes, stares at the monitor.
6 A Hux, 20s, leans in the doorway chewing a toothpick.
7 A A teenage kid in an apron sweeps the same square foot of floor over and over.
8 A A dog snoozes under the couch.
9 A ¶ CLOSE ON the tape machine, reels turning.
10 D ABEL: that's not what we cut yesterday.
11 D CLEMENTINE: it's close.
12 D ABEL: it's not close. you slowed the bridge.
13 D HUX: she didn't slow it. i did.
14 D ABEL: why'd you slow it?
15 D HUX: i dunno. felt right. felt like, you know. like riding in.
16 D CLEMENTINE: riding in where.
17 D HUX: town. i dunno. i said i dunno.
18 A ¶ ANGLE ON the glass.
19 A THE BAND, five men in dusty hats, stand in the live room staring at the control room, waiting.
20 A One of them lifts a fiddle bow and lowers it again.
21 D THE BAND (in unison, muffled through glass): we ready?
22 D ABEL (pressing the talkback): not yet.
23 D CLEMENTINE: you always say not yet.
24 D ABEL: because it's never yet.
25 D HUX (quietly): you could just say yes, Abel. once.
26 D ABEL: i don't say yes to things that aren't finished.
27 D CLEMENTINE: nothing's ever finished. that's the whole thing about it.
28 A ¶ The kid stops sweeping.
29 A The dog lifts its head.
30 A Abel stands, grabs his hat, crosses to the door.
31 A Hux doesn't move out of his way.
32 D HUX: where you going?
33 D ABEL: out. air.
34 D CLEMENTINE: you leave, the take's gone.
35 D ABEL: then it's gone.
36 A ¶ He shoulders past Hux, pushes the door.
37 A Heat and sunlight pour in.
38 A He stops.
39 A WE SEE the red ON AIR light above the door, still lit.
40 A ¶ BACK TO SCENE: Clementine's hand is on the record button.
41 A She hasn't taken it off.
42 A She looks at him through the open door, and doesn't say anything.
43 D THE BAND (through the glass, hopeful): we ready now?
44 D ABEL (without turning): yeah.

### SCENE s05170 | INT. ST. ANNE'S HOSPITAL - PEDIATRIC WAITING AREA - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA, TOBY, THE WOMAN, GUS, OKAFOR, DENISE
1 A ¶ Fluorescent hum.
2 A Half the lights off.
3 A ¶ Rain on the tall windows.
4 A A vending machine glows blue in the corner.
5 A ¶ PRIYA (30s, scrubs, cardigan) wheels a med cart past rows of empty chairs.
6 A A boy, TOBY (8), sits alone in a dinosaur pajama top, swinging his feet.
7 A Next to him, a WOMAN in a damp raincoat stares at the floor, one hand clamped on the boy's backpack strap while GUS, the night security guard, sips coffee by the elevators and pretends not to watch her.
8 D PRIYA: Still waiting on the paperwork, sweetie?
9 D TOBY: She says we have to wait.
10 A ¶ Priya looks at THE WOMAN.
11 A The Woman doesn't look up.
12 D PRIYA: Ma'am? Can I get you a blanket?
13 D THE WOMAN: We're fine.
14 A ¶ Wind pushes the rain sideways against the glass.
15 D PRIYA (gentle): He's been here two hours. It's okay to tell me who you're waiting for.
16 A ¶ Gus wanders over, thumbs in his belt.
17 D GUS: Everything alright over here?
18 D PRIYA: Everything's fine, Gus.
19 A ¶ Gus nods.
20 A Retreats.
21 A The elevator DINGS.
22 A The doors slide open on empty air, then close again.
23 D THE WOMAN: My mother's upstairs. Fourth floor. They won't let kids up after nine.
24 D TOBY: Grandma has a tube in her nose.
25 D PRIYA: I know. I'm on her floor tonight. I can sit with him right here.
26 A ¶ The Woman finally lifts her eyes.
27 A Red-rimmed.
28 A Tired in a way sleep won't fix.
29 D THE WOMAN: You'd do that?
30 D PRIYA: It's a slow night.
31 A ¶ Somewhere a monitor beeps.
32 A Steady.
33 A Patient.
34 A A mop bucket squeaks down a far hallway.
35 D PRIYA [CONT'D]: I'm Priya.
36 D THE WOMAN: Denise.
37 A ¶ Denise lets go of the backpack strap, finger by finger.
38 A Toby scoots closer to Priya and examines her ID badge.
39 D TOBY: Your picture looks mad.
40 D PRIYA: I was. It was six a.m.
41 A ¶ Denise almost laughs.
42 A ¶ The elevator DINGS again.
43 A DR. OKAFOR (60s, rumpled, reading glasses on a cord) steps out, chart in hand, sneakers soaked through.
44 D DR. OKAFOR: Denise Marlowe? Your mother's asking for you. And for the young man.
45 D DENISE: He's not allowed up.
46 D DR. OKAFOR: Tonight he is.
47 A ¶ Toby grabs his backpack.
48 A Denise stands.
49 A Her knees crack.
50 A ¶ Outside, the rain thins to drizzle.
51 A The vending machine hums on.
52 D DENISE (to Priya): Thank you.
53 D PRIYA: Go on.
54 A ¶ They walk toward the elevator.
55 A Gus holds the door.
56 A Nobody says anything else.

### SCENE s05172 | INT. JUNO'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNO, THE BAND
1 A ¶ Dark.
2 A Fairy lights, half of them dead.
3 A ¶ Posters.
4 A A beanbag.
5 A Laundry in a heap that could be anything.
6 A ¶ JUNO (16) lies in bed, earbuds out, eyes open.
7 A She listens.
8 A ¶ Silence.
9 A ¶ Then, through the wall: a thud.
10 A A slow one.
11 A ¶ She sits up.
12 A ¶ Another thud.
13 A Wood on wood.
14 A ¶ She grabs her phone.
15 A Taps it.
16 A Nothing.
17 A Her phone.
18 A Dead.
19 A ¶ The thudding finds a rhythm.
20 A Four beats.
21 A Four beats.
22 A Under it, a low hum, wrong, like something breathing through a tube.
23 D JUNO (whisper): Hello?
24 A ¶ Nothing.
25 A ¶ She swings her legs out.
26 A Floorboard creaks.
27 A She freezes.
28 A Waits.
29 A ¶ The wall goes quiet.
30 A ¶ Then a voice, muffled, lazy, sung half a note flat.
31 D THE BAND [O.S.] (muffled, through wall): Wonderwall... one, two, three...
32 A ¶ Juno stares at the wall.
33 D THE BAND [O.S., CONT'D] (muffled): Sorry! Sorry! Dave, you're on the wrong key!
34 A ¶ A cymbal CRASHES.
35 A A guitar squeals.
36 A ¶ Juno exhales.
37 A Her whole body unclenches.
38 A She laughs, a short, shaky bark.
39 D JUNO (to the wall): It's one a.m.!
40 D THE BAND [O.S.] (muffled): Sorry, Juno!
41 A ¶ A pause.
42 A She lies back.
43 A Pulls the duvet up.
44 A ¶ Quiet.
45 A ¶ Rain on the window.
46 A ¶ Her closet door, which was closed, is open now.
47 A An inch.
48 A ¶ She doesn't see it.
49 A She closes her eyes.
50 A ¶ From the wall, soft, in unison:
51 D THE BAND [O.S.] (muffled, hushed): ...we're not in the garage, Juno.
52 A ¶ Her eyes snap open.
53 A ¶ Silence.

### SCENE s05173 | INT. SUDS & SPIN LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): LENA VOSS, STRANGER, JOSIE, ABEL, MARCUS, KANE
1 A ¶ Dryers TUMBLE.
2 A Neon BUZZES.
3 A ¶ DR. LENA VOSS (40s, scrubs under a parka) is on her knees beside a man crumpled against a washer.
4 A Gripping his wrist.
5 A Counting.
6 A ¶ A STRANGER (60s, grey stubble, bleeding from the scalp) pulls the heavy door of dryer nine shut and leans on it, panting.
7 D LENA: Stay with me. Eyes up here.
8 D STRANGER: Name's Marcus. Not that anyone asked.
9 A ¶ Lena pauses.
10 D LENA: Marcus. Good. Marcus, who did this?
11 A ¶ JOSIE (20s, hoodie, folding socks) backs away from the counter, phone raised.
12 A A tiny terrier on a leash YAPS at everyone.
13 D JOSIE: I'm calling nine-one-one!
14 A ¶ A dryer BANGS open.
15 A ABEL (50s, security vest) bursts through the back door, flashlight swinging.
16 D ABEL: Nobody move!
17 D MARCUS: Abel, he's gone out the front. Go!
18 A ¶ Abel does not go.
19 A Officer KANE shoves through the front door, gun up, rain on his shoulders.
20 D KANE: Police! Hands!
21 A ¶ Everyone raises their hands except Lena, who is still pressing a folded towel to a wound.
22 A ¶ Two teenagers by the soap machine freeze mid-chew.
23 A ¶ This is the last time any of them will be strangers.
24 A ¶ The dryer THUDS.
25 A Something inside it is still running.

### SCENE s05175 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SAL, KAY, TEDDY, BIG DAVE, RUTH
1 A ¶ Dark.
2 A Candles on the counter.
3 A A camping lantern hisses on the table.
4 D SAL [V.O.]: Power went out at eight-fifteen. By nine, the whole street was in somebody's kitchen. That's how it works out here.
5 A ¶ SAL (40s, cardigan, tea towel on shoulder) stirs a pot on a gas ring, while KAY (60s, his mother-in-law) cuts bread at the table, TEDDY (9) kneels on a chair building a wobbly tower of mugs, and a golden retriever sleeps with its chin on Sal's slipper.
6 A Through the window, two teenagers from next door shine a phone torch over the fence, whispering and giggling.
7 A ¶ BIG DAVE (50s, huge, soaked) appears in the back doorway holding a bag of ice.
8 D BIG DAVE: Freezer's gone at ours. Is yours alright?
9 D SAL: Come in, Dave, you're letting the heat out.
10 D KAY: There's no heat, Sal.
11 D SAL: Then you're letting the cold out.
12 A ¶ Teddy's tower collapses.
13 A The dog lifts its head, sighs, resumes sleeping.
14 D TEDDY: It wasn't me!
15 D KAY: It's never you.
16 D BIG DAVE: Who's the lady out front?
17 D SAL: What lady?
18 D BIG DAVE: Standing on your drive. Umbrella. Been there ten minutes.
19 A ¶ They look.
20 A Through the window: a figure at the end of the path, still, umbrella dripping.
21 D SAL [V.O.]: I didn't know her. That's all I'll say about that.
22 D KAY: She looks lost.
23 D TEDDY: She looks cold.
24 D SAL: Teddy, stay put.
25 A ¶ Sal opens the front door.
26 A The Woman (50s, neat grey coat) steps in out of the rain, folds her umbrella.
27 D THE WOMAN: I'm sorry. Is this number fourteen? My sister's number fourteen.
28 D SAL: This is twelve.
29 D THE WOMAN: Oh. Ruth Aldana. Ruth. I'm so sorry.
30 D KAY: Ruth! Sit down, Ruth. Soup?
31 D BIG DAVE: Fourteen's the one with the gnome.
32 D RUTH: That's her.
33 D TEDDY: We've got bread.
34 D SAL [V.O.]: There's no manual for strangers on a night like this. You just pull out another chair.
35 A ¶ Ruth sits.
36 A The candle gutters and holds.
37 A The dog thumps its tail once on the lino.

### SCENE s05176_0 | EXT. FISHING TRAWLER "NORTHERN STAR" - NIGHT
Detected names (may be incomplete or contain aliases): 
1 A ¶ Black water.
2 A A creaking hull.
3 A Fog.

### SCENE s05176_1 | INT. TRAWLER - GALLEY - CONTINUOUS
Detected names (may be incomplete or contain aliases): JONAH, NELL, HALE, DR. SUN, PETE
1 A ¶ CLOSE ON a sat-phone on the table, its green light blinking.
2 A Beside it, JONAH (20s) lies on a bench, shirt soaked red at the ribs.
3 A ¶ NELL (30s, oilskins, shaking hands) presses a rag to the wound.
4 A HALE (60s, the captain) stands in the doorway, staring at the ceiling.
5 D NELL: Stay with me, Jonah. Cap, get Dr. Sun on that thing.
6 D HALE: Line's open.
7 A ¶ Nell grabs the phone, thumb-hits speaker.
8 D DR. SUN [V.O.] (crackling): Nell? I can barely hear you. Is the bleeding steady?
9 D NELL: Steady-ish. It's deep. Pete's the only one who's done this before.
10 A ¶ ANGLE ON the hatch.
11 A PETE (50s, grey beard) is on the ladder, face white, hands empty.
12 D PETE: I can't, Nell. I told you. I can't do it again.
13 D DR. SUN [V.O.]: Pete. Listen to me. You can.
14 A ¶ A heavy THUMP from above.
15 A Something drags across the deck.
16 A ¶ Everyone looks up.
17 D HALE: That wasn't the nets.
18 A ¶ WE SEE the hatch.
19 A Bolted.
20 A Shaking.
21 A ¶ BACK TO SCENE:
22 A ¶ Jonah grips Nell's wrist.
23 D JONAH: Nell... something's out there.
24 A ¶ The lights die.

### SCENE s05179_0 | EXT. HARBOR LOT - FOOD TRUCK "ROSA'S RUEDA" - DAY
Detected names (may be incomplete or contain aliases): ROSA, DANNY, SKYE
1 A ¶ Sun on chrome.
2 A Gulls.
3 A Steam rolling out of the order window.
4 A ¶ ROSA (50s, apron, forearms like cables) flips tortillas without looking.
5 A A line of customers stretches to the road.
6 A ¶ DANNY (14) leans out the window with the receipt pad.
7 D DANNY: Two al pastor, one veggie, extra lime.
8 D ROSA: Say please to the lime.
9 D DANNY: Please, lime.
10 A ¶ From the cab, SKYE (20s, they/them, braids, bandana) leans back against the dashboard with a clipboard.
11 A Skye taps the pen against their teeth.
12 D SKYE: Rosa, the health inspector's coming at noon. They've already emailed.
13 D ROSA: Let him come.
14 D SKYE: They said "her." They're a woman.
15 D ROSA: Then let her come.

### SCENE s05179_1 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHUY, ROSA, SKYE, DANNY
1 A ¶ CLOSE ON the grill.
2 A Grease popping.
3 A The propane gauge ticking toward red.
4 A ¶ CHUY (70s, Rosa's father, hat low) sits on an overturned crate by the back door, peeling an orange with a pocketknife.
5 D CHUY: Mija, the tank is low.
6 D ROSA: It's fine, Papá.
7 D CHUY: It is not fine. It is whistling.
8 A ¶ Rosa listens.
9 A A faint hiss, thin as thread.
10 A She glances at Skye.
11 D ROSA: Skye, check the valve.
12 D SKYE: I'm bookkeeping, not plumbing.
13 D DANNY: I'll do it.
14 D ROSA: You'll do nothing. Stay by the window.
15 A ¶ Danny bangs the counter, annoyed.
16 A A customer chuckles.

### SCENE s05179_2 | EXT. HARBOR LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): INSPECTOR WELLS, ROSA, SKYE
1 A ¶ A white sedan pulls into the lot.
2 A INSPECTOR WELLS (40s, windbreaker, tablet) steps out and looks at the truck.
3 A At the line.
4 A At the sky.
5 D WELLS: Good afternoon! Anyone in charge?
6 A ¶ Rosa leans out the order window, wiping her hands.
7 D ROSA: Inspector. We are open for business.
8 D WELLS: You have a permit?
9 D ROSA: I have a daughter who keeps all the paperwork.
10 D SKYE (from the cab): I'm not her daughter. I'm the accountant.
11 D WELLS (not looking up): I'm sure they're lovely. I'll start with the kitchen.

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

### SCENE s05189_1 | INT. WHEELHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): COAST GUARD, VOSS, PHONE
1 A ¶ Radar glow.
2 A A dented thermos.
3 A A paper chart pinned with a wrench.
4 A ¶ Voss thumbs the radio.
5 D COAST GUARD [V.O.] (crackling): Margaret Ann, Margaret Ann, this is Station Halvard. Come back.
6 D VOSS: Halvard, Margaret Ann. Go ahead.
7 D COAST GUARD [V.O.]: Captain, we have a gale warning, force nine, bearing two-seven-zero. Recommend you return to port.
8 D VOSS: How long?
9 D COAST GUARD [V.O.]: Four hours. Maybe less.
10 A ¶ Voss sets the handset down.
11 A Nothing.
12 A ¶ The sea heaves.
13 A Spray.
14 A Silence.
15 A ¶ His phone on the dash lights up.
16 A ¶ ON PHONE (TEXT): dad. please come home.
17 A ¶ He turns it face-down.

### SCENE s05189_2 | EXT. DECK - CONTINUOUS
Detected names (may be incomplete or contain aliases): LIN, NOELLE, VOSS
1 A ¶ Lin lets the net drop, shaking out her hands.
2 D LIN: Captain says anything?
3 D NOELLE [O.S.] (from the hold): Not to me.
4 A ¶ Nobody has seen Noelle in an hour.
5 A ¶ Lin looks at the sky.
6 A A grey wall climbs the horizon.
7 A ¶ This is the last time the Margaret Ann will fish these waters.
8 D VOSS (from above): Cut the net, Lin.
9 D LIN: There's six tons in it.
10 D VOSS: Cut it.
11 A ¶ She draws her knife.
12 A Rope.
13 A Salt.
14 A The first drops of rain.
15 A ¶ The net falls away into the dark.

### SCENE s05190 | EXT. BORDER CHECKPOINT - DAY
Detected names (may be incomplete or contain aliases): VOSS, MARTA, PAVEL, BAND
1 A ¶ Rain.
2 A A striped barrier.
3 A A mud road choked with carts, 1948 plates on a single black sedan.
4 A ¶ Corporal Voss, 40s, wet wool coat, stamps papers without looking up.
5 A A dog sniffs the wheels of a cart.
6 A A boy in a flat cap watches it.
7 A ¶ Marta, 30s, steps up with a violin case.
8 A Pavel, her brother, 20s, hangs back, hands in pockets.
9 D VOSS: Papers.
10 D MARTA: All in order.
11 A ¶ He flips them.
12 A Stops.
13 A She holds her breath.
14 D VOSS: This stamp is from a town that doesn't exist.
15 D MARTA: It did last week.
16 A ¶ A beat.
17 A He nearly smiles.
18 A Then the barrier SLAMS down between them.
19 D VOSS: Open the case.
20 A ¶ She does.
21 A Violin.
22 A He lifts it, shakes it.
23 A Something RATTLES inside.
24 D PAVEL: Don't.
25 D VOSS: Quiet.
26 D MARTA: It's my mother's. It rattles because it is old. Please. You know what a thing like that is worth to a person. You have a mother. You had one. She stood in a line like this once, I promise you. Somebody looked at her papers and decided. That is all this is. Somebody decides. And today it is you, and you can decide to be the kind who lets a woman keep her mother's violin, or the kind who breaks it open to find nothing. There is nothing in there, Corporal. There is only the sound it made at her funeral.
27 D VOSS: You talk a lot for someone with a bad stamp.
28 D MARTA: I talk when I am afraid.
29 A ¶ He sets the violin down.
30 A Gently.
31 A ¶ From the road behind, THE BAND arrives, six brass players in muddy uniforms, instruments clutched like rifles.
32 D THE BAND (ragged, together): Let us through, Corporal!
33 A ¶ The dog BARKS.
34 A The boy bolts.
35 A Voss looks at the band, at her, at the barrier.
36 A ¶ He lifts it.
37 D VOSS: Go. Before I count.

### SCENE s05191 | INT. HOLLOWAY KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): DENISE HOLLOWAY, GAIL PRUITT, RAJ MEHTA
1 A ¶ Pitch black.
2 A A candle FLARES to life.
3 A Behind it DENISE HOLLOWAY, 40s, holds a lighter and a very large frozen turkey in the crook of one arm.
4 A At the island GAIL PRUITT, 50s, her sister-in-law, squints at a dead tablet.
5 A The fridge hums its last breath and stops.
6 D DENISE: Okay. Nobody panic. The turkey has eleven hours of cold left in it.
7 D GAIL: It's a bird Denise not a battery.
8 A ¶ CLOSE ON the oven clock.
9 A Blinking nothing.
10 A Dead.
11 A ¶ ANGLE ON the back door.
12 A It opens and DR. RAJ MEHTA, 50s, neighbour and a gastroenterologist, steps in holding a head torch and a casserole dish he has clearly been carrying out of habit.
13 D RAJ: Whole street is out. Transformer. I've triaged the Hendersons they're stable but the Hendersons are always stable.
14 D DENISE: Raj you can't just walk in.
15 D RAJ: Door was open. Clinically speaking that's an invitation.
16 A ¶ Gail stands to hug Denise and knocks the candle which tips toward a stack of the takeaway menus and Denise lunges with the turkey while Raj swings the torch beam across the room catching the cat on top of the cupboard and the cat leaps and lands in the sink and the tap goes off like a gun because the pressure pump has died.
17 A ¶ WE SEE the flame lick the first menu.
18 D DENISE: Fire fire fire
19 D GAIL: Smother it!
20 D DENISE: With what
21 A ¶ Gail points at the turkey.
22 A Denise looks at the turkey.
23 A Raj is already pouring the casserole's sauce over the flame, which hisses out.
24 A Silence.
25 A Smoke curls.
26 D DENISE [CONT'D]: That was lasagne.
27 D RAJ: It was a sacrifice.
28 A ¶ INSERT - the charred menu, "Golden Wok" still legible.
29 A ¶ BACK TO SCENE
30 A ¶ Gail sits heavily.
31 A Denise sits beside her.
32 A Raj stays standing, torch under his chin like a campfire storyteller.
33 D DENISE: She said she'd call about Christmas.
34 D GAIL: I was going to say that. ^ DENISE Also thanks for the lasagne.
35 D RAJ (to the dark): Seventeen years of practice and I have never once saved a menu.
36 A ¶ The lights come ON.
37 A Fridge shudders.
38 A Oven clock flashes 12:00.
39 A They all look up at it like a miracle.
40 D GAIL: Well.
41 D DENISE: Well.
42 A ¶ The turkey, forgotten, slides out of her arm and hits the floor with a THUD.

### SCENE s05192 | EXT. DUSTY MAIN STREET - DAY
Detected names (may be incomplete or contain aliases): COAL, PIKE, JUNIPER, CORBIN, SAM
1 A ¶ Sun-bleached false-front buildings.
2 A Handmade signs: NO COAL, NO FUTURE.
3 A A crowd of thirty blocks the doors of the Territorial Mining Bureau.
4 A A waiter on the saloon porch watches with a tray of untouched beer.
5 A Two teenagers on a hitching rail film it all on a phone.
6 A A mule brays.
7 A ¶ Sheriff Amos Pike, 50s, weathered, tin star, wide stance, stands on the steps.
8 A Beside him Deputy Lucy Ferris, 20s, nervous, thumbs hooked in her belt.
9 A ¶ At the front of the crowd, Juniper Reyes, 30s, sun-browned, in a canvas duster painted with a dying river.
10 A Next to Juniper, Sam, early 20s, they/them, buzzcut and bandanna, holding the end of a chain that runs through the Bureau's door handles.
11 A Behind them an old rancher, Walt Dunmore, 60s, hat in hands, and Corbin Hale, 40s, in an expensive suit, mine agent, sweating through his collar.
12 D PIKE: Break it up. Ten seconds.
13 D JUNIPER: You don't have ten seconds of water left in this county, Sheriff.
14 D CORBIN: Arrest them. All of them.
15 D SAM: Come try.
16 A ¶ Ferris steps forward.
17 A Walt grabs her arm, she shakes him loose, Corbin shoves Walt, and then Juniper and Corbin go at each other, fists and hats, while the crowd roars and the teenagers whoop.
18 A Sam hauls the chain tight.
19 A Pike fires into the air.
20 A ¶ BANG.
21 A ¶ They all freeze.
22 A The mule stops braying.
23 A The waiter drops the tray.
24 D PIKE: Now.
25 A ¶ Quiet.
26 A Sam lets the chain go slack.
27 A Juniper wipes blood from a lip and laughs.
28 D JUNIPER: He means it.
29 A ¶ The crowd scatters, slow, defeated, then regroups across the street.
30 A Sam sits in the dirt.
31 A They look at the sky.
32 D SAM: Still no rain.

### SCENE s05193 | EXT. CITY HALL PLAZA - DAY
Detected names (may be incomplete or contain aliases): GORDON, TERRENCE
1 A ¶ A climate march, mid-afternoon.
2 A Banners.
3 A Drums.
4 A A hundred people sitting in a slow circle on the stone.
5 A Overhead, a sky the colour of old dishwater.
6 A ¶ A kid in a polar bear costume walks a cardboard iceberg through the crowd.
7 A A woman with a stroller hands out oat milk.
8 A A dog in a tiny "Fossil Free" vest sniffs the leg of a bench.
9 A ¶ On the bench: Terrence Bell, 40s, rumpled trench coat, a protest sign under his arm that says nothing at all.
10 A Blank cardboard.
11 A ¶ A man sits down beside him.
12 A Gordon Achebe, 50s, expensive jacket pretending to be cheap.
13 A He holds a thermos.
14 A ¶ Neither looks at the other.
15 D GORDON: Nice turnout.
16 D TERRENCE: Good cover.
17 D GORDON: That's what it's for.
18 A ¶ Terrence tilts the sign so the back is visible.
19 A A taped floor plan of the building behind them.
20 A Gordon glances, looks away.
21 D GORDON [CONT'D]: You added the east stairwell.
22 D TERRENCE: It's the only one without a sensor.
23 D GORDON: I heard they installed one last week.
24 D TERRENCE: You heard wrong. He lied to you.
25 D GORDON: Who?
26 D TERRENCE: The contractor.
27 A ¶ A drum line starts up.
28 A The crowd chants something about carbon.
29 A A child shrieks with delight.
30 D GORDON: He's my cousin.
31 D TERRENCE: Then he lied to you. Family does.
32 A ¶ A pause.
33 A Gordon unscrews the thermos.
34 A Pours.
35 A Offers a cup.
36 A Terrence takes it.
37 D GORDON: It's tea.
38 D TERRENCE: I know. I can smell the cardamom.
39 D GORDON: My wife's.
40 D TERRENCE: She know what you're doing?
41 D GORDON: She thinks I'm at a rally.
42 D TERRENCE: You are at a rally.
43 D GORDON: Fair.
44 A ¶ The polar bear kid walks by.
45 A Terrence nods at him.
46 A The kid nods back, very seriously.
47 D TERRENCE: You ever think about how many people here actually believe it?
48 D GORDON: All of them.
49 D TERRENCE: All of them.
50 D GORDON: That's why they sit like that. It's a thing you can only do if you believe.
51 D TERRENCE: And us?
52 D GORDON: We believe in a safe in a basement on the fourth floor.
53 A ¶ Terrence laughs, quietly, into the cup.
54 A ¶ The dog trots over, sits at their feet, looks up.
55 A Gordon breaks a biscuit from his pocket in half.
56 A Gives half to the dog.
57 A Eats the other.
58 D GORDON [CONT'D]: Nine o'clock.
59 D TERRENCE: Nine.
60 D GORDON: Mayor's dinner. Everyone with a badge will be at it.
61 D TERRENCE: And the protesters?
62 D GORDON: Still sitting. They'll sit until midnight.
63 D TERRENCE: Good people.
64 D GORDON: Good enough to be useful.
65 A ¶ Terrence says nothing.
66 A He looks at the circle of bodies on the stone.
67 A He looks at his blank sign.
68 A ¶ This is the last time they will speak before the building.
69 D TERRENCE: You'll take the stairwell.
70 D GORDON: You'll take the elevator.
71 D TERRENCE: It's loud.
72 D GORDON: That's the point.
73 A ¶ A woman with a megaphone climbs onto a plinth.
74 A The crowd quiets.
75 A She begins to read names of drowned towns.
76 A ¶ They listen.
77 A Both of them.
78 A Longer than they planned to.
79 A ¶ Gordon stands.
80 A Screws the lid on the thermos.
81 A Pats Terrence's shoulder, once, a stranger's courtesy.
82 D GORDON [CONT'D]: Don't be late.
83 D TERRENCE: I'm never late.
84 A ¶ Gordon walks into the crowd.
85 A A teenager hands him a flyer.
86 A He takes it.
87 A Folds it.
88 A Pockets it.
89 A ¶ Terrence stays on the bench.
90 A Turns the sign face out.
91 A Blank.
92 A Holds it up with everyone else.
93 A ¶ The woman reads on.

### SCENE s05194 | EXT. FISHING BOAT "MARGARET JEAN" - DAWN
Detected names (may be incomplete or contain aliases): NELL, TOBY, ROSALIND, OWEN
1 A ¶ grey. flat. the engine ticking over.
2 A ¶ NELL, 30s, sits on a bait crate scrolling a phone.
3 A Her phone.
4 A No signal.
5 A Her brother TOBY, 30s, coils rope by the winch while their mother ROSALIND, 60s, leans in the wheelhouse door with a mug, and their dad's old deckhand, a man in a yellow slicker none of them have met before, stands at the rail.
6 A ¶ Silence.
7 D NELL: so who's he again
8 D TOBY: dad's guy. from before.
9 D ROSALIND: Nobody calls me back about the boat, and then somebody turns up.
10 D STRANGER: I'm just here for the nets. Don't mind me.
11 A ¶ Rain.
12 A Light.
13 A Then more of it.
14 D NELL: we're not selling by the way
15 D TOBY: no one said selling
16 D NELL: mum said selling
17 D ROSALIND: I said "if".
18 A ¶ Toby drops the rope, Nell stands, Rosalind sets down her mug on the winch and the stranger takes one step back, all of them tense in the little space between the net and the rail and the thing nobody's saying.
19 A ¶ Nothing.
20 D STRANGER: Look, I'm Owen. Owen Pruett. Your dad hired me in 'ninety-eight. He'd want me here.
21 D OWEN: He told me if it came to it I should tell you where he hid the deed.
22 D NELL: what deed
23 D TOBY: there's a deed?
24 D ROSALIND: Oh for God's sake, Owen.
25 A ¶ Her phone.
26 A Dead.
27 A ¶ Gulls.
28 A A wave slaps the hull.
29 A Nobody moves.
30 D NELL (quiet): where
31 D OWEN: Under the third plank. Forward locker.
32 A ¶ Toby looks at Nell.
33 A Nell looks at Rosalind.
34 A Rosalind looks at the water.
35 A ¶ Engine.
36 A Rain.
37 D TOBY (low): we'll check later
38 D NELL: yeah. later.

### SCENE s05195_0 | INT. IRON TEMPLE GYM - NIGHT
Detected names (may be incomplete or contain aliases): MO
1 A ¶ Empty.
2 A Dim emergency lights.
3 A Rows of dead treadmills.
4 A A neon sign above the juice bar flickers: NO PAIN NO GAIN.
5 A ¶ A door SLAMS somewhere deep inside the building.
6 A Footsteps.
7 A Then a figure comes through the locker room entrance in a black hoodie and gym bag, moving fast.
8 A ¶ Mo, 30s, wiry, nervous hands.
9 A He drops the bag onto a bench and unzips it.
10 A Inside: a stethoscope, a tablet, a roll of thermal paper, an old key on a lanyard.
11 A ¶ He taps the tablet.
12 A A blue glow lights his face.
13 A A text appears on screen:
14 A ¶ ON TABLET: "Kip's on the door.
15 A Kim's got the cameras.
16 A You've got 4 minutes."
17 D MO (to himself): Kip. Kim. Kip. Kim. Why do they both sound the same.
18 A ¶ He pockets the key.
19 A Crosses to the front desk, where a night janitor in headphones mops the floor, oblivious, humming.
20 A Mo ducks behind a rack of kettlebells.
21 A The janitor sways closer, closer, then turns away.
22 D MO [CONT'D] (whispering): Good. Go. Go home.
23 A ¶ The janitor stops.
24 A Takes off one earphone.
25 A Mo freezes.
26 A A phone BUZZES somewhere.
27 A The janitor answers it, laughs, wanders toward the back office, still talking.
28 A ¶ Mo exhales.
29 A Moves.
30 A ¶ At the back of the gym he finds the glass trophy case.
31 A Inside: a small gold dumbbell, "1987 Regional Powerlifting Champion."
32 A He reads the plaque and laughs once.
33 D MO [CONT'D]: Big Dave's dumbbell. Unbelievable.
34 A ¶ He takes out the old key.
35 A Slides it into the lock.
36 A It does not turn.
37 A He tries again.
38 A Nothing.
39 D MO [CONT'D]: Come on come on come on
40 A ¶ His thumb catches.
41 A The lock CLICKS.
42 A The glass door swings open.
43 A ¶ He lifts the dumbbell carefully.
44 A It's heavier than it looks.
45 A He weighs it in his hand, looking at it the way a man looks at the thing that is about to change his life.
46 A ¶ The tablet BUZZES again.
47 A He glances.
48 A ¶ ON TABLET: "Kip says there's a guy outside.
49 A Big.
50 A Beard.
51 A Holding a coffee."
52 D MO [CONT'D] (a whisper): Big Dave.
53 A ¶ He shoves the dumbbell into the bag.
54 A Zips it.
55 A Looks around for an exit.
56 A The front is out.
57 A The side door is alarmed.
58 A The only way is through the pool area, and past the janitor, who has begun to sing along to whatever is in his headphones.
59 A ¶ Mo crouches.
60 A Creeps along the wall of treadmills.
61 A A treadmill SCREAMS to life as he brushes the start button, belt spinning, display lights flashing.
62 A He slaps the stop button.
63 A It keeps going.
64 D MO [CONT'D]: No no no no.
65 A ¶ The janitor stops singing.
66 A Footsteps approach from the back office.
67 A Mo dives behind the juice bar, hugging the bag.
68 A The janitor appears, scratches his head at the roaring treadmill, and hits the emergency stop with the flat of his hand.
69 A Silence.
70 A ¶ The janitor mutters something in Spanish, puts his earphone back in, and goes back to mopping.
71 A ¶ Mo breathes.
72 A Counts to ten.
73 A Then slides out from behind the bar and makes for the pool doors, the bag bumping his hip.
74 A ¶ At the pool doors he hesitates.
75 A Through the glass: a figure in the water, swimming slow laps in the dark.
76 A A woman, silver cap, goggles.
77 A She doesn't look up.
78 A Mo slips past on the tile, one hand on the wall.
79 A ¶ He reaches the fire door.
80 A Presses the bar.
81 A It opens without a sound.
82 A ¶ The alarm does not go off.
83 D MO [CONT'D] (realising): Kim.
84 A ¶ He steps out into the cold.
85 A The door CLOSES softly behind him.

### SCENE s05195_1 | EXT. GYM PARKING LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): MO
1 A ¶ A blue van idles.
2 A Its back door slides open.
3 A Inside, nothing but darkness and the red glow of a cigarette.
4 A ¶ Mo throws the bag in.
5 A Climbs after.
6 D MO: Go.
7 A ¶ The van pulls away.
8 A In the window of the gym, the neon sign flickers once and dies.
