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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00002.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00792 | INT. STARLITE LANES - BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): PHOEBE ADEBAYO, KENJI MORIKAWA, LOCKY, DUNMORE, BEATRIX SOKOLOWSKI, COSMO ABARA, HORACE LINDQVIST
1 A ¶ The neon is half dead.
2 A Lane nine glows pink.
3 A A disco ball turns slowly over the shoe counter, throwing coins of light across a carpet printed with comets.
4 A It smells of fryer oil and rental-shoe disinfectant.
5 A The last night of high school, and the party has thinned to six.
6 A ¶ PHOEBE ADEBAYO, 18, still in her cap and gown, kneels on lane six and rolls the ball down the gutter on purpose.
7 A KENJI MORIKAWA, 18, tie around his forehead, sits on the ball return and watches her.
8 A LACHLAN "LOCKY" DUNMORE, 18, hair gelled for an event that has ended, flips a keychain in one hand.
9 A BEATRIX SOKOLOWSKI, 17, writes in a notebook with her tongue between her teeth.
10 A COSMO ABARA, 18, who sold the most tickets to the dance and attended none of it, eats fries from a paper boat.
11 A ¶ HORACE LINDQVIST, 60s, the night manager, leans on the counter with a rag over his shoulder and counts a cash drawer.
12 D HORACE: Last frame, kids. I'm closing.
13 D PHOEBE: Five more minutes, Mr. Lindqvist.
14 D HORACE: That's what you said at the last five.
15 D KENJI: Mr. Lindqvist, this is history.
16 D HORACE: It's a Tuesday.
17 D BEATRIX (not looking up): It's a Tuesday in history.
18 A ¶ Locky tosses his keys.
19 A Cosmo catches them in a fry.
20 A A beat.
21 A Everyone looks at the fry-wrapped keys.
22 D COSMO: I regret nothing.
23 D LOCKY: Those are my dad's keys.
24 D COSMO: Then I regret one thing.
25 A ¶ Phoebe lines up the ball again.
26 A Kenji slides off the return.
27 A Beatrix closes the notebook.
28 D BEATRIX: Okay. Real talk.
29 D PHOEBE: Oh no.
30 D BEATRIX: Does anyone actually know what they're doing in September?
31 D KENJI: Michigan.
32 D LOCKY: Shop. My uncle's.
33 D COSMO: Community college. Then, like, the world.
34 D PHOEBE: Nothing.
35 A ¶ They look at her.
36 D PHOEBE [CONT'D]: I don't know. Nothing's planned. That's the plan.
37 A ¶ The disco ball turns.
38 A Light slides across their faces, one by one.
39 D HORACE (calling): Last call. Or I turn off lane six.
40 A ¶ Phoebe takes a breath.
41 A Rolls the ball.
42 A It wobbles, wobbles, and drifts toward the pins.
43 A ¶ Nobody breathes.
44 A ¶ It hits the head pin, perfect.
45 A Pins explode.
46 A ¶ STRIKE flashes on the screen in dying neon.
47 A ¶ They don't cheer.
48 A They stand there, grinning, like people who have just remembered how.
49 D PHOEBE [CONT'D] (quiet): Huh.

### SCENE s01409 | INT. BOXING GYM - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MANUEL, SERRANO, IGNATIUS OBI-MARTINEZ, TALL MAN, AMBROSE
1 A ¶ Steam.
2 A Rusted lockers.
3 A A bare bulb swings from a chain.
4 A The smell of liniment and old leather.
5 A ¶ MANUEL "THE ANVIL" SERRANO, 30s, sits on a bench with gloved hands in his lap, staring at the floor.
6 A His trainer, IGNATIUS OBI-MARTINEZ, 60s, kneels in front of him, taping a wrist with absent care.
7 A ¶ A TALL MAN in a camel coat leans in the doorway.
8 A No one introduced him.
9 A He has been watching for a while.
10 D IGNATIUS: Stay loose.
11 A ¶ Manuel nods.
12 A His eyes do not leave the floor.
13 D IGNATIUS [CONT'D]: Breathe through the nose.
14 A ¶ Manuel breathes.
15 A Ignatius tears the tape with his teeth.
16 A ¶ The Tall Man clears his throat.
17 D TALL MAN: Mr. Serrano.
18 A ¶ Manuel doesn't look up.
19 A Ignatius's hands stop.
20 D TALL MAN [CONT'D]: My name is Ambrose Vance. I represent the promoter.
21 D IGNATIUS: He's got a fight.
22 D AMBROSE: I'm aware.
23 D IGNATIUS: So you can wait outside.
24 D AMBROSE: I can't.
25 A ¶ The bulb swings.
26 A Manuel's shadow slides across the lockers.
27 A Ignatius rises, one knee cracking, and plants himself between them.
28 D IGNATIUS: Say what you came to say.
29 D AMBROSE: It's about the third round.
30 A ¶ Ignatius and Manuel both go still.
31 A The steam hisses from a pipe.
32 D AMBROSE [CONT'D]: Mr. Serrano goes down in the third. The money is already placed.
33 D IGNATIUS: ^ Get out.
34 D MANUEL: ^ Get out.
35 A ¶ They say it at the same time, quiet and level.
36 A Ambrose lifts both hands, palms out, and steps back through the doorway into the corridor.
37 A ¶ Ignatius shuts the door.
38 A Leans against it with his eyes closed.
39 A Manuel finally lifts his head.
40 A His gloved hands, slowly, curl into fists.

### SCENE s00533 | EXT. STOCKYARD AUCTION RING - DAY
Detected names (may be incomplete or contain aliases): HEIFER, HOLLIS BRADDOCK, MARIBEL BRADDOCK, TAVISH DOYLE, DOLLY, AUCTIONEER
1 A ¶ Plank bleachers.
2 A Dust.
3 A A hand-lettered sign: LOT 14, HEIFER, OPEN BIDDING.
4 A Flies work the heat.
5 A ¶ HOLLIS BRADDOCK, 60s, a hat older than his marriage, sits in the third row with his hands in his lap.
6 A Beside him MARIBEL BRADDOCK, 50s, stares straight ahead, ring finger bare.
7 A Across the aisle TAVISH DOYLE, 40s, in a clean vest, a bidder's card in his fist, doesn't look at either of them.
8 A ¶ DOLLY, 12, Hollis's granddaughter, sits at the rail with her boots dangling and watches all three.
9 D AUCTIONEER [O.S.] (over the loudspeaker): Who'll give me four? Four hundred, four, I got four, now five, five, who'll give five?
10 A ¶ Tavish lifts his card.
11 A Hollis does not move.
12 A Maribel's jaw tightens.
13 D AUCTIONEER [O.S., CONT'D]: Five, I got five from the man in the vest, now six? Six for a good milker, six?
14 A ¶ Hollis shifts in his seat.
15 A Takes off his hat, turns it twice by the brim, puts it back on.
16 A Maribel slides one foot six inches away from his.
17 A Dolly picks at a splinter and keeps looking at her grandfather's hands.
18 D AUCTIONEER [O.S., CONT'D]: Six anywhere? Going once --
19 A ¶ Hollis lifts one finger.
20 A Barely.
21 D AUCTIONEER [O.S., CONT'D]: Six, I got six! Seven?
22 A ¶ Tavish glances over, nods at Hollis, once.
23 A Lifts his card.
24 D MARIBEL (to the air): Eleven years.
25 D HOLLIS: Mm.
26 D AUCTIONEER [O.S.]: Seven, going --
27 A ¶ Hollis lowers his hand.
28 A Dolly looks at Maribel.
29 A Maribel looks at Tavish.
30 A ¶ Gavel.

### SCENE s00848 | INT. DESALINATION PLATFORM "KESTREL REEF," DORMITORY GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): PERPETUA LOWE, YOSHIRO ABE, THE STRANGER, ADEBOLA
1 A ¶ A steel room bolted to the open sea.
2 A Portholes show black water and the white scrawl of waves.
3 A A table, three stools, a kettle that screams on a hotplate.
4 A Everything slightly damp.
5 A ¶ PERPETUA LOWE, fifties, platform superintendent, scrapes burnt toast over the sink.
6 A YOSHIRO ABE, thirties, the pump engineer, sits slumped at the table with his boots off.
7 A Across from him sits a young woman in a borrowed hoodie, her hair wet, a blanket around her shoulders: THE STRANGER, early twenties.
8 A She holds a mug with both hands and has not spoken since the supply boat left her here.
9 D PERPETUA: Tea or something stronger?
10 A ¶ The stranger shakes her head.
11 D YOSHIRO: She hasn't said a word.
12 D PERPETUA: She doesn't have to. She's drinking our tea.
13 A ¶ The kettle shrieks.
14 A Perpetua lifts it off the plate.
15 A The platform groans against a swell, and the tea in the mug trembles in rings.
16 D YOSHIRO: Supply boat's not back till Thursday.
17 D PERPETUA: Then she's our guest till Thursday.
18 D YOSHIRO: Perp, we don't have a bunk.
19 D PERPETUA: Take mine.
20 D YOSHIRO: I can't take
21 D PERPETUA: Yoshiro.
22 A ¶ He raises both hands in surrender.
23 A The stranger sets down her mug and, for the first time, looks up at them.
24 D THE STRANGER: Adebola.
25 A ¶ Perpetua and Yoshiro turn.
26 A The word hangs in the steam.
27 D PERPETUA: Pardon?
28 D ADEBOLA: My name. Adebola Nwosu.
29 D YOSHIRO: Nice to meet you, Adebola.
30 D ADEBOLA: I should say I did not fall off the boat.
31 D PERPETUA: Did anyone say you did?
32 D ADEBOLA: I think you wondered.
33 A ¶ Perpetua sets down the toast and wipes her hands on her trousers, slowly, one finger at a time.
34 D PERPETUA: We wondered.
35 D ADEBOLA: I walked off it.
36 D YOSHIRO: Walked off a moving boat.
37 D ADEBOLA: Into the sea, and then I swam here. It took a long time.
38 A ¶ The room is very quiet.
39 A A pipe knocks in the wall.
40 A Yoshiro opens his mouth, closes it again.
41 D PERPETUA: Why?
42 A ¶ Adebola turns the mug a quarter-turn on the table.
43 D ADEBOLA: I wanted to see if the platform was real. If anyone really lived out here.
44 D YOSHIRO: And?
45 D ADEBOLA: Someone made me tea.
46 A ¶ Perpetua laughs, a startled bark.
47 A Then she pulls up a stool and sits.
48 D PERPETUA: Yoshiro, pour her another cup.
49 A ¶ He fills it.
50 A Steam rises.
51 A The kettle ticks as it cools.
52 A Outside, the sea keeps its slow business.
53 D PERPETUA [CONT'D]: Adebola, you're going to want to eat something.
54 D ADEBOLA: I would like that.
55 D YOSHIRO: We have toast.
56 D PERPETUA: It's burnt.
57 D ADEBOLA: I will eat it burnt.

### SCENE s00639 | INT. TAILOR'S ALTERATION ROOM, BACK OF A WEDDING SHOP - NIGHT
Detected names (may be incomplete or contain aliases): BEA, LANDGRAF, SORAYA KHALILI
1 A ¶ A narrow room of mannequins and hanging gowns, pins scattered on the floor like silver rain.
2 A A three-way mirror throws back endless versions of the same two women.
3 A ¶ BEATRIX "BEA" LANDGRAF, sixties, tailor, kneels at the hem of a wedding dress with a mouthful of pins, while her client, SORAYA KHALILI, thirties, stands on the fitting platform in ivory silk, jaw tight, one hand clenched around a bouquet of paper flowers.
4 A Bea tugs the hem and Soraya flinches.
5 A Bea tugs again, harder, and Soraya looks down at her, and then past her to the three-way mirror where the dress looks like it belongs to someone happier.
6 A Bea finally takes the pins from her mouth, sets them one by one in a velvet cushion, and stands, her knees cracking, while Soraya watches her in the glass instead of in person.
7 D BEA: It's too long.
8 D SORAYA: I know.
9 D BEA: You told me three inches. It needs four.
10 D SORAYA: Then four.
11 D BEA: She said you'd say that.
12 D SORAYA: Who said?
13 D BEA: Your mother. She said you would let anyone cut anything.
14 A ¶ Soraya turns her gaze to the floor.
15 A Bea kneels again, takes a pin, and holds it up to the light.
16 A She pushes it into the silk with a small deliberate click, and the dress seems to tighten around Soraya's ribs.
17 D SORAYA: Bea. If I wanted to leave tonight -- through the back, through the alley -- would you stop me?
18 A ¶ Bea doesn't answer.
19 A She finishes the pin.
20 A She reaches for another.
21 A Then she sets her scissors on the cushion, stands, and, with both hands, begins unfastening the buttons down Soraya's spine, one by one by one, until the silk slides from her shoulders like a held breath.
22 D BEA (quietly): The alley door sticks. Lift as you pull.

### SCENE s00574 | INT. SIGNAL RELAY HUT - HIMALAYAN PASS - DAY
Detected names (may be incomplete or contain aliases): HAKIM BARAKZAI, LUCJAN NOWAK, COMMAND, MEDIC ANNELI SAARI
1 A ¶ Stone walls.
2 A Tin roof ticking in the wind.
3 A A hand-crank radio on a plank table.
4 A Frost on the window.
5 A 1962.
6 A ¶ SGT. HAKIM BARAKZAI, 40, beard gone grey at the chin, sits on an ammo crate.
7 A Mending a boot.
8 A Slow.
9 A ¶ PVT.
10 A LUCJAN NOWAK, 19, shivering, wrapped in two blankets, stares at the stove.
11 A Feeds it one stick at a time.
12 D NOWAK: Last of the wood.
13 D BARAKZAI: Burn the crate after.
14 D NOWAK: Which crate?
15 D BARAKZAI: The one you're not sitting on.
16 A ¶ Static.
17 A A crackle from the radio.
18 D COMMAND [V.O.] (garbled): Relay Nine, Relay Nine. Report status. Over.
19 A ¶ Barakzai crosses and takes the handset.
20 D BARAKZAI: Command, Relay Nine. Two men. One stove. No contact. Over.
21 D COMMAND [V.O.]: Copy two men. Supply drop postponed. Weather. Over.
22 D BARAKZAI: Understood. Out.
23 A ¶ He hangs up.
24 A Nowak keeps his eyes on the flames.
25 D NOWAK: That's the third postponement.
26 D BARAKZAI: Fourth. You weren't counting.
27 A ¶ The door BANGS open.
28 A Wind and snow.
29 A A figure in a white parka stumbles in, shoulders a medical satchel: MEDIC ANNELI SAARI, 30, Finnish, windburned face, ski goggles pushed up.
30 A She slams the door behind her.
31 D SAARI: Which of you is Barakzai?
32 D BARAKZAI: Me.
33 D SAARI: Good. I walked nine hours. Is there tea?
34 D NOWAK: No.
35 D SAARI: Is there anything?
36 D BARAKZAI: Boiled snow.
37 D SAARI (dropping her satchel): Then boil it.
38 A ¶ Nowak scrambles for the kettle.
39 A Saari sits heavily next to Barakzai and pulls off a glove, examining her blue fingertips.
40 D BARAKZAI: Command said no supply.
41 D SAARI: Command said nothing to me. I was sent for the private's feet.
42 D NOWAK: My feet are fine.
43 D SAARI: Take your boots off.
44 D NOWAK: They're fine.
45 D BARAKZAI: Take them off, Lucjan.
46 A ¶ Reluctantly, Nowak peels off a boot and a grey sock.
47 A The toes are white.
48 A Saari looks, then at Barakzai.
49 D SAARI: Fine. For now.
50 D COMMAND [V.O.] (over radio): Relay Nine, be advised, weather window tomorrow oh-six-hundred. Over.
51 A ¶ Barakzai doesn't move to answer.
52 A He looks at the kettle, at the stove, at the two young faces.
53 D BARAKZAI: Tomorrow, then.

### SCENE s00725 | INT. BOWLING ALLEY - LANE 9 - ARBITRATION HEARING - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR HELENA MBEKI, SUNITA KAPOOR, CONRAD ASHWORTH, DMITRI VOLKOV, PAULINA ZAJAC
1 A ¶ A defunct bowling alley, repurposed.
2 A Folding tables over the gutters.
3 A A pin-setting machine looms behind the panel like a sleeping beast.
4 A ¶ ARBITRATOR HELENA MBEKI, sixties, reading glasses on a chain, presides from the scoring desk.
5 A At the left table: attorney SUNITA KAPOOR, forties, crisp navy suit.
6 A At the right: attorney CONRAD ASHWORTH, fifties, rumpled tweed.
7 A In the witness chair, a plastic bowling seat: DMITRI VOLKOV, sixties, retired foreman, hands folded.
8 A At a small side table, court reporter PAULINA ZAJAC, twenties, fingers poised.
9 A ¶ Quiet.
10 A Pins rattle faintly somewhere behind a wall.
11 D HELENA: We are on the record. Mr. Volkov, you've been sworn.
12 D DMITRI: I have.
13 D SUNITA: Mr. Volkov, thank you for coming. I'd like to ask about the night of the fourteenth.
14 D DMITRI: Of course.
15 D SUNITA: You were foreman on the closing shift at the Calloway plant?
16 D DMITRI: Twenty-two years.
17 D SUNITA: And that night, you signed the safety log?
18 D DMITRI: I did. As I always did.
19 D SUNITA: Was the lockout valve on press four engaged?
20 D DMITRI: It was.
21 D CONRAD: Objection. Leading.
22 D HELENA: Overruled, Mr. Ashworth. She is asking for a fact.
23 D CONRAD: Then I'll hold my fire, Madam Arbitrator.
24 D SUNITA: Mr. Volkov. Was the valve engaged?
25 D DMITRI: Yes.
26 D SUNITA: You're certain.
27 D DMITRI: I checked it with my own hand.
28 D SUNITA: And yet the incident report states that press four cycled at eleven forty.
29 D DMITRI: It did.
30 D SUNITA: How is that possible if the valve was engaged?
31 D DMITRI: Because I disengaged it at eleven thirty-five.
32 D PAULINA (quietly): Could the witness repeat that?
33 D DMITRI: I disengaged it at eleven thirty-five.
34 D CONRAD: Madam Arbitrator, may we have a moment?
35 D HELENA: No. Mr. Volkov, why would you do that?
36 D DMITRI: Because Mr. Calloway's son told me to. He said the order was behind. He said nobody would be near it.
37 D SUNITA: Was anyone near it?
38 D DMITRI (long pause): My nephew. Nikolai. He was cleaning the die.
39 D HELENA: Ms. Kapoor, do you have further questions?
40 D SUNITA: Only one. Mr. Volkov, why did you sign the log?
41 D DMITRI: Because they said they would pay for his hospital. And I did not know how to say no.
42 D CONRAD: I withdraw my objection. And I withdraw my client's motion.
43 D HELENA: Mr. Ashworth?
44 D CONRAD: My client wishes to settle.
45 D HELENA: Ms. Zajac, strike nothing.
46 D PAULINA: Yes, ma'am.
47 D HELENA: We are adjourned.

### SCENE s02132 | INT. HARBOR FERRY TERMINAL - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): RUTH KOWALCZYK, ARJUN BOSE, LINNEA STRAND
1 A ¶ Plastic chairs bolted in rows.
2 A A vending machine hums.
3 A Through the window, the ferry rocks at the dock.
4 A At a folding table in the corner, a deposition.
5 A ¶ RUTH KOWALCZYK, 50s, attorney, reading glasses on a chain.
6 A ARJUN BOSE, 40s, deponent, anxious, tie too tight.
7 A LINNEA STRAND, 30s, court reporter, fingers poised over the stenotype.
8 D RUTH (to the room): Let the record show we are in the Harbor terminal because the courthouse flooded.
9 D LINNEA: Noted.
10 D RUTH: Mr. Bose, state your name.
11 D ARJUN: Arjun Bose.
12 D RUTH: And your occupation?
13 D ARJUN: Dock inspector.
14 D RUTH: Were you on duty on the fourteenth of March?
15 D ARJUN: I was.
16 D RUTH: Did you sign the crane certificate that morning?
17 D ARJUN: I... may have.
18 D RUTH: May have?
19 D ARJUN: Did.
20 A ¶ The vending machine clunks.
21 A A bag of chips falls.
22 D RUTH (muttering): Even the snacks have a better memory than my witness.
23 D ARJUN: I'm sorry?
24 D RUTH: Nothing. Next question. Mr. Bose, did you inspect the crane before signing?
25 D ARJUN: I inspected a crane.
26 D RUTH: Was it the crane in question?
27 D ARJUN: It was a crane.
28 D LINNEA (quietly): Counsel, I need a clear answer for the record.
29 D RUTH: Mr. Bose, it's either yes or no.
30 D ARJUN: No.
31 D RUTH: No, you did not inspect the correct crane?
32 D ARJUN: No, I did not.
33 D LINNEA: Could you both speak one at a time?
34 D RUTH: Mr. Bose, who told you to sign?
35 D ARJUN: My supervisor.
36 D ARJUN: My supervisor said it was routine.
37 D RUTH: Your supervisor is a Mr. Dillard.
38 D ARJUN: Yes.
39 D RUTH (to the room): Let the record show the witness has just changed his testimony.
40 A ¶ The ferry horn sounds.
41 A All three look up.
42 A Linnea types.
43 A Arjun loosens his tie.

### SCENE s00145 | INT. REGATTA BOATHOUSE - MORNING
Detected names (may be incomplete or contain aliases): COACH ELEANOR PRZYBYLSKI, ZEB, HOLLINGSWORTH, MARISELA QUIROGA, CASPIAN ADEBAYO, TOVE NIELSEN, BASHIR KARIMI
1 A ¶ A long timber shed that smells of varnish and river.
2 A Eight-oared shells hang from racks like sleeping fish.
3 A Pale light slants through the slats.
4 A ¶ COACH ELEANOR PRZYBYLSKI, 60s, windbreaker, whistle, sits on an overturned oar-box.
5 A Before her stand five rowers in damp unisuits: ZEBEDIAH "ZEB" HOLLINGSWORTH, 20s, stroke; MARISELA QUIROGA, 20s, bow; CASPIAN ADEBAYO, 19, coxswain, small and quiet; TOVE NIELSEN, 21, seat five; and BASHIR KARIMI, 23, who has not yet looked up.
6 A ¶ She says nothing.
7 A The oars drip.
8 D ELEANOR: You're late.
9 D ZEB: Two minutes.
10 D ELEANOR: Two minutes is a boat length.
11 D MARISELA: Coach, it was fog.
12 D ELEANOR: The fog was there when I got here.
13 A ¶ Caspian shifts a megaphone in his hands.
14 A Marisela tightens a shoelace that does not need tightening.
15 A Tove studies a knot in the floorboards.
16 A Bashir finally lifts his eyes and meets hers.
17 A ¶ She holds the look.
18 A Then she rises, crosses to the shell Number Four, runs her palm along its hull, kneels to check a rigger bolt, and then, without turning, tosses a wrench over her shoulder, which Zeb catches and Marisela passes to Caspian, who hands it to Tove, who hands it to Bashir, who looks at it as though it were a snake.
19 D ELEANOR [CONT'D]: Seat seven's rigger is loose.
20 D BASHIR: It was tight yesterday.
21 D ELEANOR: Yesterday you were a different rower.
22 A ¶ Bashir doesn't answer.
23 A He kneels, takes the wrench, and tightens the bolt with six slow turns.
24 D CASPIAN: Coach, the forecast says headwind.
25 D ELEANOR: Then we row into it.
26 D ZEB: It's a hundred meters.
27 D ELEANOR: It's two thousand, Zebediah.
28 A ¶ Silence.
29 A The river laps outside.
30 D ELEANOR [CONT'D]: Boat on shoulders.
31 A ¶ They lift the shell as one.
32 A Eight hands, no words.
33 A They carry it out into the pale light, and Eleanor stays behind a moment, listening to their feet recede.

### SCENE s00235 | INT. RADIO DUGOUT, WESTERN FRONT - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT PHILIPPE ARMAND-DOGBE, RADIO, STRANGER, ALOIS
1 A ¶ A timber box dug into clay.
2 A A single candle.
3 A A field set with a cracked dial.
4 A ¶ LIEUTENANT PHILIPPE ARMAND-DOGBE (20s, mud to the eyebrows, a hole in his left sleeve) crouches over the headset, writing coordinates with a stub of pencil.
5 A ¶ Static.
6 A Then a faint, courteous voice.
7 D RADIO [V.O.] (distant, crackling): Dugout Seven, this is Battalion. Report.
8 D PHILIPPE (into the mic): Battalion, Dugout Seven. Quiet night. Nothing to report.
9 D RADIO [V.O.]: Copy. Stay warm, Seven.
10 D PHILIPPE: Will do.
11 A ¶ He releases the key.
12 A Stares at the candle.
13 A The flame is steady.
14 A Too steady.
15 A For a long moment the whole dugout seems to hold still.
16 A ¶ A scrape at the entrance.
17 A The blanket curtain moves.
18 A ¶ A figure ducks in.
19 A A boy in a muddy overcoat with no insignia, holding a tin cup of tea.
20 A He is perhaps sixteen.
21 A He wears no helmet, only a thin smile.
22 D PHILIPPE [CONT'D]: Who are you?
23 A ¶ The boy sets the cup down in front of him.
24 D STRANGER: Tea, sir. Compliments of the other side.
25 A ¶ Philippe doesn't breathe.
26 A The pencil rolls off the table.
27 D STRANGER [CONT'D]: They've been listening since Tuesday.
28 D PHILIPPE (very quietly): And you came to tell me?
29 D STRANGER: I came to say they've changed the plan.
30 A ¶ He crosses to the radio, turns the dial one click, and Battalion's voice fades to nothing.
31 A Another voice takes its place, in another language, bright and brisk.
32 A ¶ The boy meets Philippe's eyes.
33 A Now he has a name.
34 D ALOIS: My name is Alois, sir. I'd drink the tea.
35 A ¶ Philippe picks up the cup.
36 A His hand does not shake.
37 A He drinks.

### SCENE s01554 | INT. PAWN SHOP BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): SOL, ADEYEMI-BRANDT, REN, PAPADOPOULOS-ESEZOBOR
1 A ¶ A desk lamp.
2 A A safe with its door ajar.
3 A Boxes of watches, wedding rings, guitars.
4 A ¶ SOLOMON "SOL" ADEYEMI-BRANDT, 60s, cardigan, reading glasses, counts bills with a licked thumb.
5 A Behind him on a shelf, a clock.
6 A ¶ The door opens a crack.
7 A RENATA "REN" PAPADOPOULOS-ESEZOBOR, 30s, in a hooded sweatshirt, slips in, keeping one hand in the pocket.
8 D SOL: We're closed.
9 D REN: Door was open.
10 D SOL: Doors do that.
11 D REN: You Sol?
12 D SOL: Depends.
13 D REN: Gabe sent me.
14 D SOL: Gabe's in Tucson.
15 D REN: Gabe's not.
16 A ¶ Sol stops counting.
17 A Folds the bills.
18 A Puts them in a drawer, slowly.
19 A Closes the drawer with his knee.
20 D SOL: Sit.
21 D REN: I'll stand.
22 D SOL: Suit yourself.
23 A ¶ She stays by the door.
24 A He picks up a tea mug, sips, sets it down.
25 A The clock ticks.
26 D REN: He says you owe him.
27 D SOL: Everybody owes somebody.
28 D REN: Eight thousand.
29 D SOL: I've got six.
30 D REN: He said eight.
31 D SOL: He said a lot of things.
32 A ¶ Ren takes a step.
33 A The floor creaks.
34 A Sol's hand slides from the desk toward the lamp's base.
35 D SOL [CONT'D]: That's close enough.
36 D REN: You scared?
37 D SOL: I'm seventy. Everything scares me.
38 D REN: You said sixty.
39 D SOL: Sixty-nine.
40 A ¶ He laughs.
41 A She doesn't.
42 A Her hand comes out of the pocket, empty, then goes back in.
43 D SOL [CONT'D]: What's in there?
44 D REN: Gloves.
45 D SOL: It's July.
46 D REN: It's a long night.
47 A ¶ Sol rises.
48 A Slowly.
49 A His chair rolls back, bumps the safe.
50 A Ren darts forward, he swings the lamp, she ducks, they collide against the desk, and the lamp crashes to the floor in a spray of glass.
51 A Darkness.
52 A ¶ A grunt.
53 A A thud.
54 A Something metal skitters.
55 A ¶ The lamp's bulb sputters and relights, flickering.
56 A Sol sits on the floor with his back against the safe, breathing hard.
57 A Ren crouches over him, gloves on, a rubber hammer in her fist.
58 D SOL [CONT'D] (wheezing): Gloves.
59 D REN: Told you.
60 A ¶ She lowers the hammer.
61 A Sets it on the carpet.
62 A Sol pats his chest.
63 D SOL: Take the six.
64 D REN: Gabe will want eight.
65 D SOL: Then tell him I'm dead.
66 D REN: He'll check.
67 D SOL: Let him.
68 A ¶ She stands.
69 A Opens the drawer, takes the bills.
70 A Counts.
71 A Doesn't count.
72 D REN: You said sixty.
73 D SOL: I said sixty-nine.
74 A ¶ She almost smiles.
75 A Pockets the cash and goes.
76 A The door clicks.
77 A Sol leans his head against the safe, listens to the clock, and shuts his eyes.

### SCENE s01227 | INT. UNDERGROUND CURLING CLUB - SHEET THREE - NIGHT
Detected names (may be incomplete or contain aliases): KOLYA, ARSENIEV, PADMA IYENGAR, TEDDY, BRAVO, JUNE ASHBY-LANE, REFEREE OKONKWO, ^JUNE
1 A ¶ A converted subway platform.
2 A Tile walls, strip lights, a stripe of imported ice laid down over concrete.
3 A Condensation drips from the ceiling in a slow clock.
4 A The air smells of coffee and old wool.
5 A ¶ Four players and a referee stand at the hog line, brooms in hand.
6 A ¶ NIKOLAI "KOLYA" ARSENIEV (50s, skip, cardigan, spine like a steel rod) crouches at the house, tapping the ice with his broom.
7 A ¶ PADMA IYENGAR (30s, lead, ponytail, scrappy) is on the far hack, stone ready.
8 A ¶ TEODORO "TEDDY" BRAVO (40s, second, sweaty, gold chain on top of his jersey) hovers behind her, nervous as a bridegroom.
9 A ¶ JUNE ASHBY-LANE (20s, vice, lean, focused in a way that seems to cost her) holds her broom like a rifle.
10 A ¶ Off to the side, REFEREE OKONKWO (60s, whistle, immaculate blazer) writes on a clipboard.
11 D KOLYA: Padma. Draw to the button. Light.
12 D PADMA: Light, Kolya.
13 D KOLYA: Don't throw it like it owes you money.
14 D PADMA: It does owe me money.
15 D TEDDY: It owes all of us, Padma. Throw the thing.
16 A ¶ She slides.
17 A The stone leaves her hand with a long grinding hum.
18 A Kolya and June sweep in step, their brooms hissing.
19 A The stone rolls, curls, drifts into the rings.
20 D JUNE: Hard! Hard! Hard!
21 D TEDDY: Off, off, it's fine, let it go!
22 A ¶ The stone dies.
23 A Sits on the edge of the button.
24 A Perfect.
25 A ¶ Padma rises out of her slide, grinning.
26 A Teddy claps his hands once, then covers his mouth, as if he'd been caught laughing in church.
27 D OKONKWO (not looking up): Measure.
28 A ¶ He kneels and lays a plastic gauge across the stone.
29 A A hush.
30 A Drops of condensation tick on the ice.
31 D KOLYA (quietly): That is the match.
32 D OKONKWO: Eleven millimetres to the opposition.
33 A ¶ Kolya exhales.
34 A Teddy turns in a circle.
35 A June does not smile.
36 A She stares at her teammates and the smile she can't produce seems to push at the corners of her eyes.
37 D JUNE: Teddy.
38 D TEDDY: What?
39 D JUNE: You touched the stone.
40 A ¶ Everyone stops.
41 D TEDDY: I didn't.
42 D JUNE: Your sleeve. Your sleeve brushed the stone as it passed.
43 D TEDDY: Kolya, tell her.
44 D KOLYA: Teodoro.
45 D TEDDY (high): It was the draught!
46 D OKONKWO (rising, clipboard lifted): Sheet three, burned stone. It comes off.
47 D PADMA: You cannot be serious.
48 D ^JUNE: Then take it off.
49 A ¶ They speak together, flat and angry, over each other.
50 A Okonkwo does not blink.
51 A He picks the stone up with both hands and carries it off the ice.
52 A ¶ Kolya takes off his glasses.
53 A Folds them.
54 A Slips them into the cardigan pocket as though he were closing a funeral.
55 D KOLYA: Five years of Thursdays.
56 A ¶ He turns and walks the length of the sheet.
57 A The brooms fall one by one behind him.
58 A Teddy's is the last, and it makes the loudest sound.
59 T FADE OUT.

### SCENE s00245 | INT. GLASSBLOWER'S FURNACE ROOM, VENICE - NIGHT, 1743
Detected names (may be incomplete or contain aliases): MASTER ZORZI CAMPOSAMPIERO, ISABELLA MOLIN-OKAFOR
1 A ¶ Orange glow.
2 A Pipes and pontils on racks.
3 A Heat that bends the air.
4 A ¶ MASTER ZORZI CAMPOSAMPIERO (60s, leather apron, burn-scarred forearms) shapes a molten bulb at the furnace mouth.
5 A Slow turn.
6 A Slow breath.
7 A ¶ The door opens.
8 A Rain.
9 A ¶ ISABELLA DA MOLIN-OKAFOR (30s, travelling cloak, a velvet bag pulled tight against her chest) stands dripping.
10 D ZORZI: Closed.
11 D ISABELLA: I know.
12 D ZORZI: Then why are you here?
13 D ISABELLA: The Council sends their regards.
14 A ¶ He stops turning.
15 A The glass sags.
16 A He rights it.
17 D ZORZI: Tell the Council I have nothing to say.
18 D ISABELLA: They'd like the formula.
19 D ZORZI: They'd like the moon.
20 A ¶ She crosses to the bench.
21 A Sets the velvet bag down.
22 A It clinks.
23 D ISABELLA: This is yours.
24 D ZORZI: What is it?
25 D ISABELLA: A sample. Of what you made last winter.
26 A ¶ He glances at the bag.
27 A Then at her.
28 D ZORZI: You stole it.
29 D ISABELLA: I borrowed it.
30 D ZORZI: From my own workshop.
31 D ISABELLA: From your apprentice.
32 A ¶ His jaw works.
33 A The furnace roars.
34 A Her cloak steams.
35 D ZORZI: Giacomo.
36 D ISABELLA: He's very young.
37 D ZORZI: He's a fool.
38 D ISABELLA: He's frightened.
39 A ¶ Zorzi sets down the pipe.
40 A Turns.
41 A Picks up the long iron tongs.
42 D ISABELLA [CONT'D]: Master Zorzi.
43 D ZORZI: Open the bag.
44 A ¶ She does.
45 A Inside: a glass bird, translucent blue, wings spread.
46 A She lifts it into the glow.
47 A It flickers like a pulse.
48 D ISABELLA: The Council thinks it's witchcraft.
49 D ZORZI: It's chemistry.
50 D ISABELLA: They'll burn the shop.
51 D ZORZI: They'll burn me first.
52 A ¶ She sets the bird on the bench.
53 D ISABELLA: I could leave it here. Tell them you destroyed it.
54 D ZORZI: And Giacomo?
55 D ISABELLA: Gone to Padua.
56 A ¶ Zorzi laughs, short, ugly.
57 A He lifts the tongs, steps toward her.
58 A She doesn't move.
59 A He raises the iron, and the bird glitters between them.
60 A ¶ With one stroke, he smashes it.
61 A Blue shards fly.
62 A Isabella flinches.
63 A Zorzi and Isabella both stand in the sudden silence, glass sparks drifting like fireflies.
64 D ZORZI: Tell the Council it's ash.
65 D ISABELLA: They'll want proof.
66 D ZORZI: Then bring them the furnace.
67 A ¶ He turns back to the fire.
68 A After a long moment she picks up a single shard, slips it into her cloak, and goes out into the rain.

### SCENE s02426 | INT. LUNAR LAUNDROMAT - "AFTERNOON"
Detected names (may be incomplete or contain aliases): GWEN HARLAND, RAFI SOLOMON, DAVENPORT
1 A ¶ Fluorescent tubes.
2 A Rows of dryers bolted to the regolith floor.
3 A Behind the glass, a grey horizon and a half-Earth.
4 A ¶ GWEN HARLAND (40s, mining coverall) sits on a folding chair.
5 A She watches her clothes tumble.
6 A Her boot taps once.
7 A Stops.
8 A ¶ RAFI SOLOMON (20s, hauler, sleeve patched with duct tape) feeds coins into a machine.
9 A He misses the slot.
10 A Tries again.
11 A ¶ Gwen watches him.
12 D GWEN: Takes quarters. Not Euros.
13 D RAFI: I know.
14 D GWEN: Then why--
15 D RAFI: Habit.
16 A ¶ He pockets the Euros.
17 A Finds a quarter in his lint.
18 A Slides it in.
19 A The machine accepts it with a sigh.
20 A ¶ At the folding table, OLD MR. DAVENPORT (70s, cardigan, crossword) fills in a square.
21 A He doesn't look up.
22 D MR. DAVENPORT: Seven letters. "Where the sun used to be."
23 D GWEN: Horizon.
24 D MR. DAVENPORT: Eight.
25 D RAFI: Daylight.
26 D MR. DAVENPORT: Seven. Thank you.
27 A ¶ He writes it in.
28 A ¶ Rafi sits two chairs from Gwen.
29 A They both watch the dryers.
30 A His reflection and hers shiver in the glass.
31 D GWEN: You new?
32 D RAFI: Second shift.
33 D GWEN: Ah.
34 A ¶ A dryer buzzes.
35 A She stands.
36 A Unloads warm socks into a plastic basket.
37 A She hands him one that fell.
38 A ¶ He takes it.
39 A Folds it into thirds.
40 D RAFI: It's quiet down here.
41 D GWEN: It's the only place it is.
42 A ¶ She sits again.
43 A This time, she leaves the chair between them empty on purpose.
44 A He notices.
45 A He doesn't move.
46 A ¶ Mr. Davenport turns the crossword over and starts a new one.
47 A ¶ Outside, the dust settles.
48 A Inside, the machines turn.

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

### SCENE s01154 | EXT. MOSS HOLLOW - ANCIENT OAK GROVE - DUSK
Detected names (may be incomplete or contain aliases): THORNE, ALDYTH, BRIAR, MOSS
1 A ¶ Giant trees, roots like cathedral arches.
2 A Lanterns glow in the branches.
3 A The air hums with a low, living note.
4 A ¶ THORNE (50s, long coat of woven bark, staff taller than a man) stands at the center of a ring of toadstools.
5 A He doesn't speak.
6 A ¶ ALDYTH (30s, silver circlet, riding leathers) steps out of the trees.
7 A She studies the ring.
8 A She does not enter it.
9 A ¶ BRIAR (teen, barefoot, cloak of leaves) watches from a low branch, swinging his legs.
10 A He chews a blade of grass.
11 A ¶ MOSS (ageless, small, hooded, knotted like a root) sits on a boulder near the ring, hands folded.
12 A A single acorn rests in his palm.
13 A ¶ Silence.
14 A A leaf drifts down.
15 A Thorne's eyes follow it.
16 D ALDYTH: You called.
17 D THORNE: I did.
18 D ALDYTH: And?
19 A ¶ He lifts his staff and points.
20 A Across the grove, a beam of last sun falls on a gap in the roots, where something small and green is pushing up from the soil.
21 A ¶ She looks.
22 A Her jaw clenches.
23 A She looks away.
24 D BRIAR (from the branch): Is it a sapling?
25 D THORNE: Hush, boy.
26 D BRIAR: It's a sapling.
27 A ¶ Moss turns the acorn over in his fingers.
28 A Aldyth steps forward at last, one foot into the ring.
29 A The toadstools tremble.
30 A The hum deepens.
31 D ALDYTH: It's not possible.
32 D MOSS (dry as bark): It happened.
33 D ALDYTH: The grove was salted.
34 D MOSS: Salt wears.
35 A ¶ She kneels by the shoot.
36 A Her gloved fingers hover.
37 A She does not touch it.
38 D ALDYTH: He planted it?
39 D THORNE: She did.
40 D ALDYTH: When?
41 D THORNE: The night before the burning.
42 A ¶ Aldyth closes her hand into a fist.
43 A Rises, stiff.
44 A The hum shivers.
45 A Briar drops from the branch and lands lightly in the moss.
46 D BRIAR: Does that mean you're staying?
47 A ¶ She turns to him.
48 A For an instant her face softens.
49 A Then it hardens again.
50 D ALDYTH: It means the oath is broken.
51 D MOSS: Or kept.
52 D ALDYTH: Not by me.
53 A ¶ She spins and strides away through the trunks.
54 A The lanterns bow as she passes.
55 A Thorne lowers his staff.
56 A Moss opens his palm and lets the acorn roll down onto the soil.
57 A Briar crouches by the sapling and holds a cupped hand over it, as if shielding a candle.

### SCENE s00524 | INT. PELL & SONS CLOCKMAKERS - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR FOLASADE OYELARAN, CEDRIC PELL, TELEPHONE, DELPHINE
1 A ¶ A narrow shop that has outlived its century.
2 A Two hundred clocks line the walls, each a different hour, each ticking out of step, so that the room breathes like a sleeping animal.
3 A Brass, walnut, bone.
4 A A single green-shaded lamp burns on the workbench.
5 A ¶ INSPECTOR FOLASADE OYELARAN, 50s, a grey raincoat dripping onto the floorboards, stands in the middle of this noise with the stillness of someone used to being the only quiet thing in a room.
6 A ¶ CEDRIC PELL, 60s, watchmaker's loupe pushed up into thinning hair, sits at the bench, a half-assembled movement before him.
7 A His hands are steady.
8 A His eyes are not.
9 D OYELARAN: Mr. Pell, you told the constable you were home all evening.
10 D PELL: I was home. Upstairs. I live above the shop, Inspector.
11 D OYELARAN: Yet your lamp was lit down here at nine.
12 D PELL: Clocks do not repair themselves.
13 A ¶ A cuckoo bursts from a wall case.
14 A Nine-thirty on some forgotten schedule.
15 A Pell flinches.
16 A Oyelaran does not.
17 D OYELARAN: You flinch at that one.
18 D PELL: It was my wife's. She wound it every morning for thirty years.
19 D OYELARAN: And Mr. Hartigan? Did he wind anything?
20 D PELL (too quickly): I don't know a Hartigan.
21 A ¶ The cuckoo retreats.
22 A A grandfather clock tolls once, deep and wet, as though underwater.
23 A ¶ Oyelaran crosses to the bench.
24 A Lifts the movement between two fingers.
25 A Turns it to the light.
26 D OYELARAN: Interesting. The mainspring is brand new. The rest is a hundred years old.
27 D PELL: Restorations are mixed.
28 D OYELARAN: Mr. Hartigan's watch was found in the canal this afternoon. Stopped at 8:52.
29 A ¶ Pell goes very still.
30 D PELL: Water does that.
31 D OYELARAN: Water doesn't wind a mainspring backward, Mr. Pell.
32 A ¶ Silence.
33 A Two hundred clocks and not one of them says the same time.
34 A ¶ A TELEPHONE rings on the wall.
35 A Old rotary.
36 A Black.
37 A It rings and rings.
38 D PELL: Let it.
39 D OYELARAN: No. I think you should answer.
40 A ¶ Pell rises.
41 A Crosses.
42 A Lifts the receiver.
43 A Listens.
44 A His face loses its color.
45 D DELPHINE [V.O.] (over phone, thin): Cedric? Papa? Are they there yet?
46 D PELL (into phone, hoarse): Delphine, not now.
47 D DELPHINE [V.O.] (over phone): I did what you said. I put the watch in the canal. But Papa, it was still ticking when I --
48 A ¶ Pell slams the receiver down.
49 A Too late.
50 A The line was open long enough.
51 A ¶ Oyelaran has not moved.
52 A Her voice is gentle, almost tender.
53 D OYELARAN: Your daughter is very honest.
54 D PELL: She is a child.
55 D OYELARAN: She is twenty-six.
56 A ¶ Pell sinks onto the stool.
57 A The loupe falls from his hair and rolls across the bench, stopping against a screwdriver.
58 D PELL: He came for the shop. He wanted the building. Hartigan, he said it was only a matter of time before the street --
59 D OYELARAN: So you wound his watch backward and put him in the canal.
60 D PELL: No!
61 A ¶ He stands again, trembling.
62 A The anger rises up out of him like steam.
63 D PELL [CONT'D]: No. I did not touch the man. He fell. I swear to you, he fell, he was on the stairs, he laughed at me, Inspector, he laughed at my wife's cuckoo --
64 D OYELARAN: Mr. Pell.
65 D PELL: -- and I only wanted him quiet --
66 D OYELARAN: Cedric.
67 A ¶ He stops.
68 A Breathing hard.
69 D OYELARAN [CONT'D]: Sit down.
70 A ¶ He sits.
71 A The cuckoo bursts again, absurd, bright.
72 A Both of them watch it.
73 D PELL (small): She never could stand that bird.
74 A ¶ Oyelaran almost smiles.
75 A Almost.
76 D OYELARAN: I will need the key to the cellar.
77 A ¶ Pell's hand moves to his waistcoat.
78 A The chain.
79 A A small brass key.
80 A He holds it out across the bench.
81 A ¶ She takes it.
82 A The lamp flickers.
83 A ¶ The telephone begins to ring again.
84 D OYELARAN [CONT'D] (gently): Let it ring.

### SCENE s00247 | INT. VILLAGE SCHOOLHOUSE KITCHEN, KARAKORAM FOOTHILLS - EARLY MORNING
Detected names (may be incomplete or contain aliases): GRANDMOTHER ZAINAB QURESHI-ABBASOV, FARIDA QURESHI, SAMINA QURESHI, TIMUR QURESHI, LAILA, ELIAS HARTMANN-DOGAN
1 A ¶ Mud-brick walls.
2 A A copper kettle.
3 A Pale light through a slit window, catching flour in the air like small stars.
4 A ¶ Five members of one family move around a low table.
5 A Bread is being made.
6 A ¶ GRANDMOTHER ZAINAB QURESHI-ABBASOV (80s, headscarf the color of dried apricots) kneads dough with enormous patience.
7 A ¶ Her daughter-in-law FARIDA QURESHI (50s, sleeves rolled) shapes loaves, one hand quick on the dough, one hand on the baby wrapped at her back.
8 A ¶ Her granddaughter SAMINA QURESHI (17, exam papers poking from her satchel) lays out clay plates.
9 A ¶ Her grandson TIMUR QURESHI (12, ink on his fingers) feeds the clay oven with dry twigs.
10 A ¶ Her youngest, a girl of six called LAILA, lingers at the door, watching her feet.
11 D ZAINAB: Samina, the salt.
12 A ¶ Samina brings it.
13 A Zainab pinches some, crushes it between her fingers, adds it to the dough.
14 D TIMUR: The oven's ready, Dadi.
15 D ZAINAB: Is it? Show me.
16 A ¶ He holds out his palm to the oven mouth.
17 A Holds it there.
18 A Yanks it back.
19 D ZAINAB [CONT'D]: Ready.
20 A ¶ Farida slides the first loaf onto the paddle.
21 A The smell rises, warm and sweet.
22 A Laila steps in.
23 D LAILA: Can I help?
24 D FARIDA: Of course.
25 A ¶ She hands Laila a small ball of dough.
26 A Laila kneads it clumsily.
27 A ¶ A knock at the door.
28 A Everyone looks up.
29 A ¶ A stranger steps in, shaking snow from his shoulders: MR. ELIAS HARTMANN-DOGAN (40s, regional inspector, leather satchel, wet boots), blinking in the warm light.
30 D ELIAS: Forgive me. I'm looking for the headmistress.
31 D SAMINA: That's my mother.
32 D FARIDA (wiping her hands): Mr. Hartmann-Dogan. We did not expect you until Thursday.
33 D ELIAS: The road was clear.
34 D ZAINAB: The road is never clear.
35 D ELIAS: It was today.
36 A ¶ Zainab studies him a long moment.
37 A Then cuts a heel of bread, hands it to him.
38 D ZAINAB: Eat first. Papers later.
39 A ¶ He bites.
40 A His shoulders drop.
41 D ELIAS: This is extraordinary.
42 D SAMINA: It's Dadi's.
43 D ZAINAB: It is everyone's.
44 A ¶ The baby coos.
45 A Laila giggles.
46 A Timur feeds the oven another twig.
47 A The kettle begins, finally, to sing.

### SCENE s02450 | INT. MOBILE DIALYSIS TRUCK - DAY
Detected names (may be incomplete or contain aliases): THANDIWE MOLOI, ELLSWORTH CRANE, NURSE KRZYSZTOF WIERZBICKI
1 A ¶ A converted delivery truck parked on a gravel lot beside a wheat field.
2 A Inside: three recliners, humming machines, tubing coiled like pale vines.
3 A Sunlight leaks through a sliver of window.
4 A ¶ DR. THANDIWE MOLOI (40s, braids pinned up, lanyard heavy with keys) adjusts a monitor.
5 A ELLSWORTH CRANE (70s, farmer's cap, forearms like rope) sits in the nearest recliner, one arm hooked to a machine.
6 A NURSE KRZYSZTOF WIERZBICKI (30s, scrubs, a crossword folded in his pocket) calibrates a pump.
7 D ELLSWORTH: You'd think a man could get his blood cleaned closer to home.
8 D MOLOI: You'd think.
9 D ELLSWORTH: Forty miles each way, three days a week.
10 D KRZYSZTOF: It's thirty-eight miles, Mr. Crane.
11 D ELLSWORTH: Not from my end.
12 D MOLOI: How's the pressure?
13 D ELLSWORTH: Same as always. Low and stubborn.
14 D KRZYSZTOF: Hundred-ten over seventy.
15 D MOLOI: Fine. Any dizziness?
16 D ELLSWORTH: Only from the cooking at the diner.
17 D KRZYSZTOF: Mr. Crane, you aren't supposed to be eating at the diner.
18 D ELLSWORTH: Son, it's the only place that serves pie.
19 D MOLOI: Ellsworth.
20 D ELLSWORTH: One slice.
21 D MOLOI: Last week it was three.
22 D ELLSWORTH: It was a small week.
23 A ¶ Krzysztof laughs into his mask.
24 A Moloi shakes her head, but she's smiling.
25 D MOLOI: Okay. Run is two hours. If you need anything--
26 D ELLSWORTH: I know. Press the button.
27 D MOLOI: Press the button.
28 D ELLSWORTH: And don't die.
29 D MOLOI: That one too.
30 A ¶ The machine hums.
31 A Ellsworth closes his eyes.
32 A Krzysztof returns to his crossword.
33 A ¶ Then the machine chirps.
34 A A low, dull alarm.
35 A ¶ Krzysztof and Moloi glance at the monitor at the same time.
36 A A red line climbs.
37 D KRZYSZTOF: Air in the line.
38 D MOLOI: Clamp it.
39 A ¶ Krzysztof lunges.
40 A Moloi dives for the other end.
41 A Their hands collide on the tubing, fingers tangling, both clamp at once.
42 A The alarm shrieks.
43 D ELLSWORTH: What's wrong?
44 D MOLOI: Nothing. Stay still.
45 D ELLSWORTH: Doctor.
46 D MOLOI: Mr. Crane, I need you to breathe.
47 A ¶ Krzysztof and Moloi lean over him, working in tandem.
48 A Krzysztof flushes the line.
49 A Moloi checks the needle.
50 A Ellsworth's face is gray.
51 A ¶ Silence.
52 A The alarm stops.
53 A The monitor steadies.
54 A Ellsworth opens one eye.
55 D ELLSWORTH: Was that me?
56 D MOLOI: It was the line.
57 D ELLSWORTH: Thank God.
58 D KRZYSZTOF (shaky): Not funny, Mr. Crane.
59 D ELLSWORTH: Wasn't joking.

### SCENE s00503 | INT. OPEN-PLAN OFFICE - CUBICLE 14C - DAY
Detected names (may be incomplete or contain aliases): PERSEVERE, NORBERT PLUM, IMOGEN TRAVIS-OKORO
1 A ¶ Grey carpet tiles.
2 A Grey partitions.
3 A A ficus, plastic, gathering dust on a filing cabinet.
4 A A motivational poster: PERSEVERE, with a kayaker in a flooded canyon.
5 A ¶ NORBERT PLUM (50s, short-sleeved dress shirt, lanyard overlong) types with two fingers.
6 A He hasn't smiled since 2011.
7 A ¶ IMOGEN TRAVIS-OKORO (20s, new hire, cardigan with a sticker still on the sleeve) appears at the cubicle opening with a box of donuts.
8 D IMOGEN: Hi! I'm Imogen. I'm in 14D.
9 A ¶ Norbert doesn't look up.
10 D NORBERT: There's no 14D.
11 D IMOGEN: They built it this morning.
12 D NORBERT: Hm.
13 A ¶ She sets the box on his desk.
14 A He finally looks at it.
15 A Then at her.
16 A Then, very slowly, he opens the lid and takes a donut.
17 D NORBERT [CONT'D]: Thank you.
18 D IMOGEN: You're welcome!
19 A ¶ He bites.
20 A His eyes close.
21 A A tear slides from one of them.
22 D IMOGEN [CONT'D]: Are you okay?
23 D NORBERT: Fourteen years. Nobody has ever brought me a donut.
24 A ¶ He wipes his face with the lanyard.
25 A She pulls over a chair and sits.

### SCENE s00263 | INT. COACHING INN STABLE LOFT, ENGLAND - NIGHT, 1788
Detected names (may be incomplete or contain aliases): LADY GEORGIANA ASHWORTH-OLUWOLE, STRANGER, MATTHIAS, A VOICE, SOLDIER
1 A ¶ Hay.
2 A Lantern light.
3 A The smell of horse and rain.
4 A A rope ladder to the yard below.
5 A ¶ A cloaked figure crouches in the straw, back to the wall, pistol held in both hands.
6 A ¶ The ladder creaks.
7 A ¶ LADY GEORGIANA ASHWORTH-OLUWOLE (30s, riding habit torn at the hem, hair coming loose) climbs into the loft and freezes at the sight of the pistol.
8 D GEORGIANA: Put that away, please.
9 D STRANGER: Stay where you are.
10 D GEORGIANA: I have been riding for nine hours. I will sit.
11 A ¶ She sits on a hay bale.
12 A The stranger does not lower the pistol.
13 D STRANGER: Who sent you?
14 D GEORGIANA: Nobody. I own the horse in the third stall. I came to check on her.
15 D STRANGER: Liar.
16 D GEORGIANA: I assure you, I am not.
17 A ¶ The stranger leans out of shadow.
18 A A man, late twenties, rain-soaked, hollow-eyed, in the coat of a courier.
19 D STRANGER [CONT'D]: The horse in the third stall is mine.
20 D GEORGIANA: It is a grey mare with a white sock?
21 D STRANGER (beat): A brown gelding.
22 D GEORGIANA: Then we are both mistaken.
23 A ¶ She smiles, tilts her head, and the tension shifts, just slightly.
24 A He lowers the pistol an inch.
25 D STRANGER: I am a courier. I carry letters for the Crown.
26 D GEORGIANA: How dull.
27 D STRANGER: You'd be surprised.
28 D GEORGIANA: Show me one.
29 D STRANGER: No.
30 D GEORGIANA: Then tell me your name, courier.
31 A ¶ He hesitates, searching her face for a lie.
32 D STRANGER: Matthias.
33 D GEORGIANA: Matthias what?
34 D MATTHIAS: Just Matthias.
35 D GEORGIANA: Then call me Georgiana. Just Georgiana.
36 A ¶ The ladder creaks again.
37 A Both turn.
38 A Boots on the rungs.
39 A Torchlight on the beams.
40 D A VOICE [O.S.] (from below): Search the loft!
41 A ¶ Matthias grabs her arm.
42 A She grabs his wrist.
43 A They freeze, nose to nose, as torchlight crawls along the straw.
44 D MATTHIAS (whispering): They've come for me.
45 D GEORGIANA: Then they shall have us both.
46 D MATTHIAS: Why?
47 D GEORGIANA: Because I'm tired of being polite.
48 A ¶ She yanks him down into the hay.
49 A Pulls her cloak over them both.
50 A Torchlight sweeps over the rafters.
51 A A soldier's head appears at the top of the ladder, squinting.
52 D SOLDIER [O.S.]: Nothing here.
53 D SOLDIER [CONT'D] (calling): Only straw and horse-dung!
54 A ¶ The head vanishes.
55 A Boots descend.
56 A Silence returns.
57 A ¶ Matthias and Georgiana lie breathless beneath the cloak.
58 D GEORGIANA (whispering): You're heavier than you look.
59 D MATTHIAS: You're braver than you look.
60 D GEORGIANA: We are both liars.
61 D MATTHIAS: Obviously.
62 A ¶ They begin, helplessly, to laugh.
63 A Then to shake.
64 A Then, finally, to lie very still, listening to the rain on the slates.
65 A ¶ Matthias slides the pistol into his belt.
66 D MATTHIAS [CONT'D] (to the room): I owe you.
67 D GEORGIANA (to him): I'll collect.

### SCENE s01525 | INT. NIGHT FERRY CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): MAN, LINDQVIST, DECKHAND KOFI ASANTE, HENRIK
1 A ¶ Cars parked in rows.
2 A Engine drone.
3 A Fluorescent tubes flicker.
4 A Salt wind slaps through the half-open bow.
5 A ¶ A MAN in a grey raincoat sits alone in a dented Volvo, engine off.
6 A Hands on the wheel.
7 A Watching the mirror.
8 A ¶ A woman walks the aisle between cars.
9 A Torch in hand.
10 A Ferry uniform.
11 A Her badge reads P. LINDQVIST.
12 A ¶ She raps the glass.
13 A ¶ The Man lowers the window two inches.
14 D LINDQVIST: Sir. Passengers must leave the deck during crossing.
15 D MAN: I'm fine here.
16 D LINDQVIST: It's a rule.
17 D MAN: I'm unwell. I'd rather not climb the stairs.
18 A ¶ She studies him.
19 A Torch beam on his hands.
20 A On the wet hem of the coat.
21 D LINDQVIST: You're soaked, sir.
22 D MAN: Seasick.
23 D LINDQVIST: We haven't left the pier.
24 A ¶ The Man says nothing.
25 A ¶ A third figure steps from behind a pickup, thirty feet back.
26 A A young deckhand, cap pulled low.
27 A ¶ DECKHAND KOFI ASANTE, 20s, sees them.
28 A Stops.
29 D KOFI: Pia? Everything okay?
30 D LINDQVIST: Kofi. Stay there.
31 D KOFI: Who's he?
32 D LINDQVIST: I'm finding out.
33 A ¶ The Man opens his door slowly.
34 A Steps out.
35 A Rain on the deck.
36 A He holds his palms up.
37 D MAN: I'm not armed.
38 D LINDQVIST: Nobody said you were.
39 D MAN: Nobody had to.
40 A ¶ Kofi edges closer, hand on a pry bar at his belt.
41 D KOFI: Pia, his boot. There's blood.
42 A ¶ Lindqvist looks down.
43 A A dark smear at the heel.
44 D LINDQVIST: Sir. Whose is that?
45 D MAN: Mine.
46 D LINDQVIST: Show me where you're hurt.
47 D MAN: I'm not.
48 D KOFI: Then it's not yours.
49 A ¶ A long pause.
50 A The Man exhales.
51 A Shoulders drop.
52 D MAN: Her name was Annelie.
53 D LINDQVIST: Annelie who?
54 D MAN: My sister.
55 D KOFI: Where is she?
56 D MAN: At the terminal. In the lockers.
57 A ¶ Lindqvist's torch wavers.
58 A Kofi swears under his breath.
59 D LINDQVIST (into her radio): Bridge, this is Lindqvist. Hold the ramp. Call the harbour police.
60 A ¶ The radio hisses.
61 A Lindqvist presses the key again.
62 D LINDQVIST: Hold the ramp. Now.
63 A ¶ The Man sits down on the wet deck beside his car.
64 A Folds his hands in his lap.
65 D MAN: I'm Henrik. Henrik Bjornsson. You'll want that for your report.
66 D LINDQVIST: Stay where you are, Mr. Bjornsson.
67 D HENRIK: I'm not going anywhere. I couldn't if I tried.
68 A ¶ Kofi lowers the pry bar.
69 A Lindqvist keeps the torch on Henrik's face, steady.
70 D LINDQVIST: Kofi. Blanket from the lifeboat store.
71 D KOFI: Pia, he--
72 D LINDQVIST: He's cold, Kofi. Get the blanket.
73 A ¶ Kofi runs.
74 A His steps ring down the deck.
75 D HENRIK (quietly): She'd have liked the crossing.
76 A ¶ Lindqvist says nothing.
77 A The engines catch, a long low shudder through the steel.
78 A The ramp groans, halts, and holds.
79 D HENRIK [CONT'D]: Is it always this loud?
80 D LINDQVIST: You get used to it.
81 D HENRIK: I don't think I will.
82 A ¶ Blue lights bloom against the bow doors.
83 A Rain slants through them.
84 A ¶ Lindqvist crouches, torch lowered.
85 A Henrik looks up at her, face wet and open, nothing left in it to hide.
86 D KOFI [O.S.] (running back): I've got it! I've got the blanket!
87 A ¶ He skids in, drapes it around Henrik's shoulders.
88 A Henrik pulls it tight.
89 D HENRIK: Thank you.
90 D KOFI (stiff): Yeah.
91 A ¶ Footsteps on the ramp.
92 A Many.
93 A Lindqvist stands.
94 D LINDQVIST: Here we go.
95 A ¶ She steps aside.
96 A The police come into the light.

### SCENE s01155 | INT. ARMORED CAR DEPOT - LOADING BAY - EARLY MORNING
Detected names (may be incomplete or contain aliases): CORRIE, BASIL, DUKE, DELIVERY MAN, WINSTON
1 A ¶ A concrete bay.
2 A A steel truck backed to the dock.
3 A Fluorescents hum.
4 A ¶ CORRIE (40s, depot supervisor, clip-on tie) signs a form on a clipboard.
5 A BASIL (60s, driver, heavy belt, thermos) leans on the truck's fender.
6 A DUKE (30s, loader, gloves, neck tattoo) wheels a cart of canvas sacks toward the cargo door.
7 A ¶ A DELIVERY MAN (30s, brown uniform, cap low, hand truck) enters through the side gate, pushing a dolly stacked with water jugs.
8 D DELIVERY MAN: Water for the break room.
9 D CORRIE: We didn't order water.
10 D DELIVERY MAN: It's a service, ma'am. Free, until the end of the month.
11 D CORRIE: Leave it by the door.
12 A ¶ He parks the dolly.
13 A Basil sips from his thermos.
14 A Duke lifts a sack, grunts.
15 D BASIL: Heavy day.
16 D DUKE: Always is.
17 A ¶ The Delivery Man glances at the truck, then at the clock.
18 A 6:58.
19 D WINSTON (softly, to himself): Two minutes.
20 D CORRIE: Pardon?
21 D WINSTON: I said, two minutes until my shift ends.
22 A ¶ He tugs the bottom jug.
23 A A hidden latch clicks.
24 A Smoke hisses out of the stack.
25 D BASIL: What the...
26 A ¶ Duke drops the sack.
27 A Corrie backs up.
28 A Winston pulls a mask from under his jacket, snaps it over his face.
29 D WINSTON: Nobody move.
30 A ¶ The bay door slams down behind them.

### SCENE s01277 | INT. 24-HOUR LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS MENDEZ, KAI MENDEZ-HART
1 A ¶ 3 A.M. Fluorescent hum.
2 A Rows of dryers tumble sneakers and sheets.
3 A A TV bolted to the wall plays a silent infomercial.
4 A ¶ ODALYS MENDEZ, 60s, small, upright, folds towels with ruthless precision.
5 A Her cardigan is buttoned wrong.
6 A ¶ KAI MENDEZ-HART, 19, her grandson, slumps on a plastic chair, duffel bag at his feet.
7 A Hood up.
8 D ODALYS: You could help.
9 D KAI: I'm tired, Abuela.
10 D ODALYS: You are nineteen. Tired is for people with mortgages.
11 D KAI: I drove six hours.
12 D ODALYS: I did not ask you to drive six hours.
13 D KAI: You called me.
14 D ODALYS: I called you at noon. To say hello.
15 D KAI: You called at midnight. You said the dryer was making a noise.
16 D ODALYS: It was making a noise.
17 D KAI: Abuela, you don't have a dryer. You live in a retirement home.
18 D ODALYS: The retirement home has a dryer. It makes a noise.
19 D KAI: Then call maintenance.
20 D ODALYS: Maintenance does not come at midnight.
21 D KAI: Neither do I.
22 D ODALYS: And yet.
23 A ¶ Kai pulls his hood back.
24 A Rubs his face.
25 D KAI: Okay. Okay. What's going on?
26 D ODALYS: Nothing is going on.
27 D KAI: You're folding other people's towels.
28 D ODALYS: Someone left them. It is a waste.
29 D KAI: Abuela.
30 D ODALYS: I could not sleep.
31 D KAI: Why couldn't you sleep?
32 D ODALYS: Why do young people ask why? I could not sleep. That is a complete sentence.
33 D KAI: Is it Mom?
34 A ¶ Odalys folds a towel.
35 A Then another.
36 A She doesn't answer.
37 D KAI [CONT'D]: Did she call?
38 D ODALYS: She called.
39 D KAI: And?
40 D ODALYS: She says she is moving to Portland.
41 D KAI: She's been saying that for four years.
42 D ODALYS: This time she has a lease.
43 D KAI: Oh.
44 D ODALYS: Yes. Oh.
45 D KAI: Did she say anything about me?
46 D ODALYS: She said you are welcome.
47 D KAI: Welcome to what?
48 D ODALYS: To come. To Portland. To live there. She says there is a room.
49 D KAI: There's always a room, Abuela. Then there isn't.
50 D ODALYS: That is your mother.
51 D KAI: That is my mother.
52 A ¶ A dryer BUZZES.
53 A Neither moves.
54 D ODALYS: Do you want to go?
55 D KAI: To Portland?
56 D ODALYS: To Portland.
57 D KAI: I don't know. I have school. I have a job.
58 D ODALYS: You have a job at a pizza place.
59 D KAI: It's a good pizza place.
60 D ODALYS: It is a very good pizza place. I have eaten the pizza.
61 D KAI: Then you know.
62 D ODALYS: I know that you are afraid.
63 D KAI: I'm not afraid.
64 D ODALYS: You are nineteen and your mother is leaving again. Of course you are afraid.
65 D KAI: You're not.
66 D ODALYS: I am eighty years old. I have no time left to be afraid. It is a luxury.
67 D KAI: You're sixty-eight.
68 D ODALYS: Eighty in my heart.
69 D KAI: That's not how that works.
70 D ODALYS: In my house it is exactly how it works.
71 D KAI: Your house is a retirement home.
72 D ODALYS: In my heart it is a house.
73 A ¶ He laughs.
74 A Wet, surprised.
75 A She smiles, small, and doesn't look at him.
76 D KAI: Why are we here, Abuela?
77 D ODALYS: Because the machines are warm.
78 D KAI: That's it?
79 D ODALYS: That is it. It is three in the morning. Everywhere else is cold.
80 D KAI: Okay.
81 D ODALYS: Okay.
82 D KAI: Can I help fold?
83 D ODALYS: Finally.
84 D KAI: Show me.
85 D ODALYS: Thirds. Then thirds again. You do not crush them. You are making a promise.
86 D KAI: A promise?
87 D ODALYS: That someone will be warm tomorrow.
88 A ¶ Kai picks up a towel.
89 A She hands him another.
90 A They fold in silence.
91 D KAI: Like this?
92 D ODALYS: Closer.
93 D KAI: Like this?
94 D ODALYS: Yes. Like that.
95 D KAI: You're gonna be okay, right?
96 D ODALYS: Mijo. I have always been okay. It is the rest of you I worry about.
97 A ¶ The dryer BUZZES again.
98 A She nods at it.
99 D ODALYS [CONT'D]: That one is done.
100 D KAI: I'll get it.
101 A ¶ He does.
