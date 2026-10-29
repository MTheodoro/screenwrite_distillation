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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_csonnet/group_00004.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s05157 | INT. LINCOLN HIGH SCHOOL - GIRLS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): NADIA, PHONE, KOFI, LUCAS, MS. BRANDT, JUNIORS
1 A ¶ SUPER: "DAY 11 OF THE SIEGE"
2 A ¶ Cracked tile.
3 A A mirror with one long diagonal fracture.
4 A Dust sifts from the ceiling with every distant THUMP.
5 A ¶ Outside, beyond the frosted window, smoke.
6 A Somewhere a siren winds down and stops.
7 A ¶ NADIA, 17, backpack on her chest, crouches in the end stall with her knees pulled up.
8 A She counts under her breath.
9 A ¶ ON PHONE (TEXT FROM MOM): where r u
10 A ¶ ON PHONE (TEXT FROM MOM): please
11 A ¶ No bars.
12 A The message sits there, sending.
13 A ¶ CLOSE ON the phone's battery icon.
14 A 4%.
15 A ¶ The door SLAMS open.
16 A Nadia flinches.
17 A KOFI, 17, flashlight clipped to his collar, pushes in backwards, dragging LUCAS, 16, who is limping, by the strap of his bag.
18 A Kofi kicks the door shut and wedges a mop handle under the knob.
19 D KOFI (whispering): Girls' bathroom. Seriously?
20 D LUCAS: It was the only one with a lock.
21 A ¶ Silence.
22 A ¶ A drip.
23 A A fan that doesn't turn.
24 D NADIA (from the stall): It doesn't have a lock.
25 A ¶ Kofi spins, flashlight up.
26 A Nadia opens the stall door an inch.
27 A She lowers her phone.
28 D KOFI: Nadia?
29 D NADIA: Put the light down.
30 A ¶ He lowers it.
31 A Lucas slumps against the sinks and slides to the floor, wincing.
32 A ¶ INSERT - LUCAS'S ANKLE.
33 A Swollen, black at the edges.
34 A ¶ The wall behind them SHUDDERS.
35 A Plaster falls.
36 A A long, low rumble passes through the floor, and the three of them freeze at once, hands on whatever is nearest, until it passes.
37 A ¶ Dust.
38 A Ringing.
39 A Nothing.
40 D MS. BRANDT [O.S.] (through the door, muffled): Is anyone in there?
41 A ¶ All three look at each other.
42 A Kofi holds a finger to his lips and mouths NO. Nadia nods.
43 D MS. BRANDT [O.S., CONT'D]: It's Ms. Brandt. I can hear you breathing. Let me in.
44 D LUCAS (mouthing): It's a trick.
45 D NADIA (whispering): It's not a trick. It's Brandt.
46 D KOFI (whispering): Brandt left on the first bus.
47 A ¶ Silence.
48 A The handle turns.
49 A Stops against the mop.
50 A ¶ On the floor, light spills from under the door in a slow, even sweep.
51 A Something glides past outside, and then another, and a third.
52 A ¶ THE JUNIORS, a dozen kids in the corridor, press flat to the wall, quiet as shadows, led by a hand-sign nobody dares to say aloud.
53 A They pass the door.
54 A They are gone.
55 A ¶ ON PHONE (TEXT FROM MOM): I love you. whatever happens
56 A ¶ Nadia reads it.
57 A She doesn't type back.
58 A She presses the phone to her chest.
59 A ¶ Kofi crawls to the door, listens, lets out a long breath.
60 A Lucas grabs his sleeve.
61 D LUCAS: Don't open it.
62 D KOFI: I'm not opening it.
63 D NADIA (quiet, cold): Then why are you still touching the mop?
64 A ¶ He looks down.
65 A His hand is on the handle.
66 A He pulls it back.
67 D MS. BRANDT [O.S.] (close now, right behind the door): Last chance, kids. They are coming through the east wing.
68 A ¶ The lights flicker.
69 A The mirror finishes cracking.
70 A A long, thin piece falls and shatters in the sink.
71 A ¶ Then a loud, clear BANG from the corridor, and every one of them dives under the sinks, arms over each other, as the door rattles and the mop handle holds.
72 A ¶ Smoke curls under the door.
73 A ¶ Nobody moves.
74 A ¶ Nobody speaks.
75 A ¶ Nothing.
76 A ¶ Nadia's phone buzzes.
77 A She does not look.
78 A ¶ ON PHONE (TEXT FROM MOM): I'm coming

### SCENE s05158 | EXT. BORDER CHECKPOINT - DAWN
Detected names (may be incomplete or contain aliases): OKONKWO, GRIEVE, HOBBS, VANE, LENA
1 A ¶ Mist on a concrete lane.
2 A A barrier arm, striped red and white.
3 A A kiosk with one lit window.
4 A ¶ Grieve, 50s, border officer, tired, holds a clipboard against the cold.
5 A Opposite him stands Okonkwo, 40s, a solicitor in a sodden trenchcoat, a briefcase at her feet.
6 A Behind her in the car, Tomasz, 30s, and a small girl, Lena, 6, asleep on his shoulder.
7 A ¶ INSERT - THE PASSPORT.
8 A The photograph does not match the face in the car.
9 A ¶ Silence.
10 A ¶ Hobbs, 30s, a sergeant, appears in the kiosk window with a phone to his ear.
11 D OKONKWO: I've been very patient, Officer Grieve. I've been patient since four this morning. I would like to remind you that my client has a hearing at ten in Rotterdam, that the girl has a right to be with her father, and that the paperwork you are holding is, quite frankly, immaculate.
12 D GRIEVE: It is immaculate. That's what bothers me.
13 D OKONKWO: Is that a legal objection?
14 D GRIEVE: It's an observation.
15 D OKONKWO: Then you'll understand if I write it down.
16 D GRIEVE: Please do. Spell it with a "k."
17 D OKONKWO (beat): That's not funny.
18 D GRIEVE: It wasn't meant to be.
19 D HOBBS (on the phone, from the kiosk): Sir, I've got the Home Office on the line. They say the order's been revoked.
20 A ¶ Grieve doesn't turn.
21 D GRIEVE: Revoked when?
22 D VANE [V.O.] (on the phone, tinny, crisp): Eleven fifty-two last night, Mr Grieve. Mr Vane, Asylum Casework. Your man isn't who he says he is, and neither, I'm afraid, is she.
23 A ¶ CLOSE ON Okonkwo.
24 A Her face doesn't move.
25 A Her hand goes to the briefcase.
26 D OKONKWO (very quietly): I think we should all take a breath.
27 A ¶ The girl wakes.
28 A Looks at the officers.
29 A Looks at Okonkwo.
30 D LENA: Mummy?
31 A ¶ Grieve looks at Okonkwo.
32 A Then he looks at the barrier arm, and he drops the clipboard.
33 A ¶ BACK TO SCENE.

### SCENE s05159_0 | INT. HOPE VALLEY FERTILITY CLINIC - WAITING ROOM - MORNING
Detected names (may be incomplete or contain aliases): BETH, CAL, INTERCOM
1 A ¶ We see a bright, quiet waiting room.
2 A Pale green walls.
3 A A fish tank bubbling in the corner.
4 A A rack of old magazines no one has touched.
5 A Sunlight comes through the blinds in thin stripes.
6 A ¶ CLOSE ON a wall clock.
7 A It reads 9:02.
8 A ¶ BETH, 30s, nervous, in a yellow cardigan, sits on the edge of a chair, twisting a tissue.
9 A Next to her is CAL, 30s, tall, dressed too neatly, holding a folder of forms.
10 D CAL (smiling too hard, patting her knee): It's going to be great.
11 D BETH (whispering): You said that about the camping trip.
12 D CAL (a beat): Okay, that was a different kind of great.
13 A ¶ The fish tank bubbles.
14 A A little orange fish swims in a circle.
15 A Beth watches it as if it knows something.
16 D INTERCOM [V.O.]: Beth and Cal Whitaker, Dr. Okafor will see you now. Room three, please.
17 D BETH (standing, dropping the tissue): Oh gosh. That's us. That's definitely us.
18 D CAL (picking it up, handing it back): It's us. Breathe.

### SCENE s05159_1 | INT. DR. OKAFOR'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): OKAFOR, BETH, CAL, ^CAL, TINA
1 A ¶ A warm room.
2 A Diplomas on the wall.
3 A A box of tissues, strategically placed.
4 A A model of a uterus on the desk that Cal keeps looking at, then looking away from.
5 A ¶ DR. OKAFOR, 50s, kind eyes, silver glasses, stands to greet them.
6 D DR. OKAFOR (shaking Beth's hand, then Cal's): Please, sit. I'm Dr. Okafor. I've read your file. How are you feeling?
7 D BETH (sitting, folding her hands): Fine! Good. Super.
8 D CAL (sitting, crossing his legs, then uncrossing): Fantastic. Never better.
9 D DR. OKAFOR (gently, with a small smile): You're both very brave to be here.
10 D BETH (laughing, nervous): We are not. We are very afraid.
11 D CAL (nodding hard): We're terrified.
12 A ¶ Both speak at once.
13 D BETH: It's been three years.
14 D ^CAL: It's been three years.
15 A ¶ They look at each other.
16 A The room goes quiet for a second.
17 D DR. OKAFOR (taking off her glasses): That is a long time to hope.
18 A ¶ Beth's face crumples a little.
19 A Cal takes her hand, and she lets him.
20 D BETH (wiping her eye): Sorry. I told myself I wouldn't do this.
21 D DR. OKAFOR (sliding the tissue box across): Everyone does. It's one of the reasons I keep a big box.
22 A ¶ The door opens a crack.
23 A TINA, 20s, a nurse in cartoon scrubs, leans in.
24 D TINA (whispering, apologetic): Doctor, I'm so sorry. The lab is on the phone.
25 D DR. OKAFOR (to the couple): Excuse me one moment.
26 A ¶ She picks up the desk phone.
27 A We hear a faint voice through it.
28 D TINA [V.O.] (through the phone, tinny): It's about the samples from last week, Doctor. They've come back.
29 D DR. OKAFOR (listening, her face changing; beat): Thank you, Tina. I'll tell them myself.
30 A ¶ She puts the phone down very slowly.
31 A Beth grips Cal's hand so hard his fingers go white.
32 D BETH (very small): Is it bad?
33 D DR. OKAFOR (smiling, for the first time all morning): Beth. Cal. I think you should both take a deep breath.
34 A ¶ Outside, the fish swims once around the tank and stops.
35 A The light in the blinds turns gold.
36 D CAL (breathless): Is that a yes?
37 D DR. OKAFOR (nodding): It's a yes.
38 A ¶ Beth bursts into tears.
39 A Cal laughs, jumps up, knocks over the model on the desk, and catches it in the air.
40 D CAL [CONT'D] (holding it up like a trophy): Sorry! I got it! I got it!
41 D BETH (laughing through tears): Cal, sit DOWN.
42 A ¶ He sits.
43 A They hold each other.
44 A Dr. Okafor looks away to give them privacy and quietly dabs her own eyes.
45 A ¶ Sunlight.
46 A Quiet.
47 A Somewhere, a baby cries in another room and everyone smiles.

### SCENE s05160 | INT. NORTHSIDE SOUND - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER, OSEI, MARGUERITE
1 A ¶ ON CAMERA: handheld, shaky, a red REC dot in the corner.
2 A The mic stand fills the frame, then swings toward JUNIPER, 19, headphones around their neck, staring at a lyric sheet.
3 D JUNIPER (to camera): This is take nineteen. They said twelve was fine. I said twelve was fine.
4 D OSEI [O.S.]: Twelve was not fine.
5 A ¶ The camera whips left.
6 A OSEI, 20s, engineer, hunched at the glass of the control room.
7 A A studio dog sleeps under his chair.
8 A A pizza guy hovers at the door with two boxes, unsure whether to knock.
9 D OSEI [CONT'D]: You rushed the bridge.
10 D JUNIPER: I didn't rush -- they're the one who
11 D OSEI: -- you came in early on "stay" --
12 D JUNIPER: -- because the click track is wrong, Osei, it's wrong, I told you --
13 A ¶ A phone BUZZES on the console.
14 A Osei thumbs it.
15 A Speaker.
16 D MARGUERITE [V.O.] (tinny, over the phone): Hi, babe, is it done? The label guy is asking.
17 D JUNIPER: He's asking?
18 D OSEI: Marguerite, not now --
19 D MARGUERITE [V.O.]: -- he wants the single Friday, Juniper, they have a slot, and you promised --
20 D JUNIPER: I never promised! You promised! You said I'd get to say when it's done!
21 A ¶ Juniper rips the headphones off and hurls them.
22 A They CRACK against the glass.
23 A The dog bolts.
24 A The pizza guy backs out.
25 A The camera drops, tilts, catches the ceiling tiles, and cuts to black.

### SCENE s05161 | INT. SWIFTLINE DELIVERY WAREHOUSE - MORNING
Detected names (may be incomplete or contain aliases): BARRY, NADINE, ROBIN, DO NOT
1 A ¶ We see a huge warehouse with many shelves and conveyor belts.
2 A Its early morning and the lights are still turning on one by one.
3 A BARRY, 40s, a shift supervisor who thinks he is very important, walks in carrying a coffee and a clipboard.
4 A ¶ CLOSE ON Barry's name tag, which says "BARRY - SUPERVISOR" in big letters.
5 D BARRY: Good morning team! Big day today!
6 A ¶ Nobody answers.
7 A We see NADINE, 30s, tired, sitting on a pallet jack eating a granola bar, and ROBIN, 20s, who uses they/them pronouns, scrolling on their phone near the sorting belt.
8 D NADINE: Its 6 AM Barry.
9 D BARRY: And whats that mean? It means the early bird gets the worm!
10 D ROBIN (muttering to self): I dont even like worms.
11 D BARRY: What was that Robin?
12 D ROBIN: Nothing. Good morning.
13 A ¶ Barry nods happily and puts his coffee down on a stack of boxes marked FRAGILE, then walks to the control panel and presses a green button and the belt starts to move slowly, and Nadine stands up and stretches while Robin puts their phone in their pocket and walks to the end of the belt and picks up the first package, and Barry checks his clipboard and looks very pleased with himself while a forklift beeps somewhere far away.
14 D BARRY (to everyone): Okay everybody listen up. Today is a normal day. Nothing special. Just normal packages, normal routes, normal everything.
15 D NADINE: You said normal three times.
16 D BARRY: Because its normal!
17 A ¶ Nadine looks at Robin.
18 A Robin looks at Nadine.
19 A They both look at Barry.
20 D ROBIN (quietly, to Nadine): He's lying about something.
21 D NADINE (quietly): Obviously.
22 A ¶ We see the belt carry a small brown box down the line.
23 A It is the only box that is not scanned by the machine.
24 A CLOSE ON the box.
25 A It has a red sticker that says "DO NOT OPEN - PRIVATE".
26 D NADINE [CONT'D] (reading the label): Barry what is this?
27 D BARRY (too fast): Its nothing. Just a regular box. Put it back.
28 D ROBIN: It doesnt have a barcode.
29 D BARRY: Some boxes dont have barcodes Robin that is a known thing.
30 A ¶ Robin lifts the box off the belt.
31 A It is light.
32 A Something inside RATTLES softly.
33 A Barry's face goes white and he drops his clipboard, which CLATTERS on the concrete floor.
34 D NADINE (to herself): Oh no. He's sweating.
35 D BARRY: Please put it down. Please. Both of you.
36 D ROBIN (to the room): Is it a bomb?
37 D BARRY: Its not a bomb!
38 D NADINE: Then open it.
39 D BARRY: I cant let you open it!
40 A ¶ Nadine takes the box from Robin and in one move she tears the red sticker and rips the tape.
41 A Robin leans in, Barry covers his eyes with both hands, and a forklift driver in the distance honks twice for no reason.
42 A ¶ CLOSE ON the open box.
43 A Inside are forty-two tiny bottles of hotel shampoo, six stolen name tags from other supervisors, and a laminated sign that says "WORLDS BEST BOSS".
44 A ¶ Silence.
45 D NADINE: These are the name tags from Dayton.
46 D ROBIN: Barry. Did you make yourself an award?
47 D BARRY (small voice): It was going to be a surprise.
48 D NADINE: For who?
49 D BARRY: For me. At the Friday meeting. I was going to have you all give it to me.
50 D ROBIN (to Nadine): I want to be mad but I'm mostly impressed.
51 D NADINE (to the group of the whole warehouse, shouting): Hey everybody! Barry made himself an award!
52 A ¶ From far away in the building we hear a slow, growing round of applause, and a lone forklift honks.
53 A Barry sits down on the pallet jack and puts his face in his hands.
54 D BARRY (muffled): Can I at least keep the shampoo.
55 A ¶ Nadine tosses him one small bottle.
56 A Robin sets the laminated sign on top of Barry's head like a crown.
57 D ROBIN: Congratulations boss.
