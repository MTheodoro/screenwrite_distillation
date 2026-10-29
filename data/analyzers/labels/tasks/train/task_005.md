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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05055.json
### SCENE s05055 | INT. SUBWAY CAR - EVENING
Detected names (may be incomplete or contain aliases): DASHA, IVO, PAVEL
1 A ¶ The train is very full and it is hot and a man named Ivo, 30s, with a blue bag between his feet, holds the pole with one hand and looks at the floor while a girl, Dasha, 20s, is pressed against him by the crowd and tries to read her phone over a shoulder, and at the far end of the car a thin man in a grey coat, Pavel, 40s, watches them both and does not look at anything else.
2 A ¶ ON PHONE: Dasha - where r u
3 A ¶ Dasha types with one thumb.
4 A She looks up.
5 A Ivo looks away.
6 A ¶ ON PHONE: Dasha - i see u. wave
7 A ¶ Ivo does not wave.
8 A His knuckles are white on the pole.
9 D DASHA (quiet): You have what I need?
10 D IVO (quiet): Not here.
11 A ¶ The train brakes.
12 A Everybody leans together.
13 A Pavel moves two steps closer through the crowd, one hand in his coat pocket, and a woman with shopping bags says something sharp in another language that nobody answers.
14 D DASHA: He is coming.
15 D IVO: I know.
16 A ¶ ON PHONE: Dasha - dont turn around
17 A ¶ Ivo turns around.
18 A Pavel is very close now.
19 A The doors open.
20 A Nobody gets off.
21 D PAVEL (smiling): You are in my seat, I think.
22 D IVO: There is no seat.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05057.json
### SCENE s05057 | INT. ST. AGATHA'S CLINIC - EXAMINATION ROOM - NIGHT (1957)
Detected names (may be incomplete or contain aliases): DR. HALE, EDITH, MARGARET, PRUITT
1 A ¶ Gaslight.
2 A The walls sweat.
3 A Somewhere, a pipe knocks.
4 A ¶ Edith, 30s, in a pale dressing gown, sits on the edge of the table, hands folded.
5 A Margaret, 40s, the matron, stands at the instrument tray with her back turned, and in the dark corridor beyond them both a trolley rolls slowly and stops.
6 A ¶ Silence.
7 A ¶ Dr. Hale, 50s, enters with a lamp.
8 A Behind him comes Mr. Pruitt, 60s, the clinic's night porter, hat in hand, who will not meet anyone's eye.
9 D DR. HALE: You are comfortable, Mrs. Ashby?
10 D EDITH: Yes, Doctor.
11 A ¶ Margaret hands him something under a cloth.
12 A She watches her hand, then Edith's, then the door.
13 A ¶ Knock.
14 A Knock.
15 A Knock.
16 A ¶ It comes from inside the wall.
17 D MARGARET (low): Doctor.
18 D DR. HALE: The pipes.
19 D MARGARET: Those are not the pipes.
20 A ¶ Edith slides off the table.
21 A She takes one step and stops.
22 A The lamp gutters.
23 A In the corner, Pruitt's hat has fallen from his hand and he is looking at the floor, where something dark spreads along the boards toward her feet.
24 D PRUITT (a whisper): It's been listening since the third floor.
25 D DR. HALE: Pruitt, enough.
26 A ¶ The knocking stops.
27 A Nothing.
28 A The lamp steadies.
29 A She lets out a breath and he lets out a breath and for one long moment no one moves.
30 A ¶ Then the trolley in the corridor rolls away, quietly, and is gone.
31 D EDITH (very small): Is it finished?
32 A ¶ Dr. Hale sets down the cloth.
33 A Underneath is only a thermometer.
34 D DR. HALE: Yes. Quite finished.
35 A ¶ Margaret turns the lamp down.
36 A She tries to smile.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05059.json
### SCENE s05059 | INT. NORTHERN CHECKPOINT - INSPECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): OFFICER OKAFOR, THE TRAVELER, SUPERVISOR DUNNE, MIRELA, LUKAS
1 A ¶ A booth of steel and glass.
2 A A scanner hums.
3 A Beyond the window, a line of vehicles stretches into fog.
4 A ¶ OFFICER OKAFOR, 40s, sits behind the desk.
5 A Opposite her, a figure stands in a long coat, face hidden by a respirator mask.
6 D OKAFOR: Papers.
7 D THE TRAVELER (sliding a card across): They are all there.
8 D OKAFOR (reading, a long beat): This card was issued in a year that has not happened yet.
9 D THE TRAVELER (beat): Then it is early. I apologise.
10 D OKAFOR (setting it down): Remove the mask.
11 D THE TRAVELER (beat): I would prefer not to.
12 D OKAFOR: That was not a request.
13 A ¶ SUPERVISOR DUNNE, 50s, enters from the back office, jacket over one arm.
14 D DUNNE (low, to Okafor): Problem?
15 D OKAFOR (not turning): The scanner says there is nobody inside the coat.
16 D DUNNE (glancing at the screen): The scanner is old.
17 D OKAFOR (beat): The scanner is new.
18 D THE TRAVELER (slowly, lifting the mask with both hands): Please. Do not be frightened.
19 D OKAFOR (rising, hand on her holster): Step back.
20 D DUNNE (raising a hand): Officer. Easy.
21 A ¶ The mask comes away.
22 A Underneath is a woman of perhaps thirty, tired, ordinary, with a scar through one eyebrow.
23 D THE TRAVELER (quietly): My name is Mirela. I was born in this booth.
24 D OKAFOR (a laugh, no humour): That is not possible.
25 D MIRELA (beat): My mother stood where you are standing. She was a guard, and she told me, one day a woman will come with a card from tomorrow.
26 D DUNNE (carefully): And what did she say to do?
27 D MIRELA (beat): She said to let me through.
28 D OKAFOR (to Dunne): She is lying.
29 D DUNNE (to Mirela): Who is your mother?
30 D MIRELA (simply): Your wife.
31 D OKAFOR (stunned): Sir?
32 D DUNNE (very still): My wife has no children.
33 D LUKAS [V.O.] (over the intercom, crackling): Booth three, we have a breach on the east lane. Repeat, east lane.
34 D OKAFOR (into the radio): Hold position, Lukas.
35 D DUNNE (at the same time): Send everyone to the east gate.
36 D OKAFOR (overlapping, sharp): Sir, you cannot order that.
37 D DUNNE (softly, to Mirela): Tell me what she looked like.
38 D MIRELA (beat, gentle): Like you, but she laughed.
39 D DUNNE (a long silence, then hoarse): Open the barrier.
40 D OKAFOR (beat): Sir.
41 D DUNNE (turning on her, gently): Open it.
42 D OKAFOR (after a long moment, pressing a button): Barrier is open.
43 D MIRELA (lifting the mask, but not wearing it): Thank you. Both of you.
44 D DUNNE (beat): Will I see her?
45 D MIRELA (at the door, a small smile): You already did. That is why it is a loop.
46 A ¶ She exits.
47 A Okafor and Dunne stand side by side, watching the barrier rise into the fog.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05061.json
### SCENE s05061 | INT. BRIGHTWATER ANIMAL CLINIC - EXAM ROOM - DAY
Detected names (may be incomplete or contain aliases): PRIYA NAIR, TOMAS REYES, WENDY OKAFOR
1 A ¶ CLOSE ON a stainless steel table, a tabby cat on a towel, a stethoscope sliding across its ribs.
2 A Fluorescent hum.
3 A ¶ DR. PRIYA NAIR, 34, sharp-eyed, hair in a hasty knot, scrubs with a faded cartoon dog on the pocket, works the stethoscope while TOMAS REYES, 36, a carpenter in a flannel shirt with sawdust still in the seams, holds the cat's head with both hands as if it were a bird's egg, and the whole small white room, the poster of canine dental anatomy, the jar of tongue depressors, the window onto a parking lot where rain is just beginning, waits for her verdict.
4 D PRIYA: Heart's fine. Lungs are clear. She's just old, Tomas.
5 D TOMAS: She's thirteen.
6 D PRIYA: That's old for a cat who eats my pens.
7 A ¶ ANGLE ON Tomas.
8 A He almost laughs.
9 D TOMAS: She ate one pen.
10 D PRIYA: It was a Montblanc.
11 A ¶ INSERT - THE CAT'S CHART.
12 A Name: BISCUIT.
13 A Owner: T. REYES.
14 A Last visit: eleven months ago.
15 A A sticky note in Priya's handwriting reads, "Ask him about the dinner."
16 A ¶ BACK TO SCENE
17 A ¶ Priya sees him see it.
18 A She flips the chart closed.
19 A This is the last time they will be alone in this room, though neither of them knows it yet.
20 D TOMAS: You wrote that after I cancelled.
21 D PRIYA: I write a lot of things.
22 D TOMAS: Priya.
23 D PRIYA: It's fine. I got over it. I have a very busy schedule of getting over things.
24 A ¶ WE SEE her hand shaking just slightly as she caps the stethoscope, and him noticing, and neither of them saying so.
25 D TOMAS: My mother was sick. That's why I cancelled. I should have called.
26 D PRIYA: You did call. Three months later.
27 D TOMAS: I know.
28 A ¶ A beat.
29 A Biscuit purrs, loud, unashamed.
30 D PRIYA: Is your mother okay?
31 D TOMAS: She passed in March.
32 A ¶ Priya's face changes.
33 A All the armor goes out of it at once.
34 D PRIYA: Tomas. I'm so sorry.
35 D TOMAS: I wasn't telling you for sympathy. I was telling you because you should have been told. A long time ago.
36 A ¶ The door swings open without a knock and WENDY OKAFOR, 20s, vet tech, bleach-blond ponytail, a clipboard hugged to her chest and a golden retriever puppy on a leash tugging her sideways, pulls up short at the sight of the two of them standing a foot apart.
37 D WENDY: Oh. Sorry. Dr. Nair, Mrs. Halloran's here with the Great Dane and she says it's an emergency but it's the same emergency as Tuesday.
38 D PRIYA: Give me two minutes.
39 D WENDY: She said that's what you said on Tuesday.
40 D PRIYA: Wendy.
41 D WENDY: Going. I'm going.
42 A ¶ The puppy scrambles in a circle, tangling the leash around Tomas's boots.
43 A He crouches to free it, and Wendy stands there a second too long, reading the room the way a young person reads a room, with enormous obviousness.
44 D WENDY [CONT'D] (to the puppy): Come on, Waffles. Let's give the grown-ups the room.
45 A ¶ She tows the puppy out.
46 A The door clicks.
47 A CLOSE ON the doorknob, still turning, then still.
48 A ¶ Tomas stands with a tangle of leash in his hand that no one is holding anymore.
49 D TOMAS: Have dinner with me. Not a date. Just dinner. I'll pay and I'll answer anything you ask.
50 D PRIYA: Anything?
51 D TOMAS: Anything.
52 D PRIYA: Why did you take eleven months to bring her back in?
53 D TOMAS: Because every time I picked up the carrier I thought about walking in here and seeing you, and I didn't know what face I had.
54 A ¶ Silence.
55 A Rain on the window now, steady.
56 A Biscuit stretches a paw toward the edge of the table and Priya catches her without looking.
57 D PRIYA: Thursday. I get off at seven.
58 D TOMAS: Thursday.
59 D PRIYA: Bring the cat. She's the only one who ever told me the truth about you.
60 A ¶ He smiles, finally, a real one, tired and relieved, and scoops Biscuit into the carrier as Priya holds the door.
61 A For a moment they both stand in the doorway, too close, the narrow frame making them one shape, and in the hallway behind them Mrs. Halloran's Great Dane begins, mournfully, to howl.
62 D PRIYA [CONT'D]: That's my emergency.
63 D TOMAS: Go.
64 A ¶ She goes.
65 A He stays a moment longer in the empty exam room, looking at the wet window, at the last line of the chart, at the sticky note he has not been supposed to read, and he is smiling at nothing.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05063.json
### SCENE s05063 | INT. MOVING VAN - NIGHT
Detected names (may be incomplete or contain aliases): KIM, KIP, MO
1 A ¶ Dark.
2 A The cargo hold.
3 A Boxes, stacked.
4 A A single dome light, flickering.
5 A ¶ KIM and KIP crouch among the crates, breath fogging.
6 A Rain on the roof.
7 A A drum.
8 A ¶ Tick.
9 A Tick.
10 D KIP: You hear that?
11 D KIM: Its the engine.
12 D KIP: Not the engine.
13 A ¶ Silence.
14 A ¶ Something under the floor.
15 A A scrape.
16 A Slow.
17 D KIM: Mo said the vault was empty. Mo said nobody's in the back.
18 A ¶ Dripping.
19 A Somewhere behind the boxes.
20 D KIP: Kim. Look at the lock.
21 A ¶ The rear door latch.
22 A Turning.
23 A By itself.
24 A ¶ Nothing.
25 A Then a long metal groan.
26 A ¶ MO, 50s, soaked, gray stubble, a crowbar in one hand and a flashlight in the other, steps through the opening into the dome light, grinning like a man whos won something.
27 D MO: Told you I'd catch up. Miss me?
28 A ¶ Kim and Kip look at each other.
29 A Neither moves.
30 D KIM: Mo is up front. Driving.
31 A ¶ Mo's grin stays.
32 A The scraping starts again, from his side of the van.
33 A ¶ Black.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05065.json
### SCENE s05065 | INT. SAFEKEEP SELF-STORAGE - UNIT 114 - DAY
Detected names (may be incomplete or contain aliases): LORNA PRESCOTT, WALT PRESCOTT, INES
1 A ¶ ON CAMERA.
2 A A handheld camcorder, the red light blinking.
3 A Orange roll-up door half raised, daylight in a bar across a concrete floor.
4 A Dust in the air.
5 A Boxes.
6 A A dressmaker's mannequin in a 1960s wedding gown yellowed to the colour of tea.
7 A A Singer sewing machine under a quilt.
8 A A record player.
9 A Stacks of Life magazines.
10 A ¶ LORNA PRESCOTT, 60s, cardigan, reading glasses on a chain, stands beside WALT PRESCOTT, 70, her brother, in a windbreaker and a cap that says Korea Veteran, and behind them, filming, INES, 20s, their niece, her sleeves rolled, the camera at her chest.
11 A ¶ Silence.
12 A ¶ Dust.
13 D LORNA (running a finger along the mannequin's sleeve): She'd have hated this lighting.
14 D WALT (not looking up from a box): Everybody hates that lighting. Doesn't mean it's wrong.
15 D INES (from behind the camera, gently): Aunt Lorna, can you say what this is for the tape?
16 D LORNA (sighing, turning to face the lens): This is Mother's wedding dress. Nineteen sixty-two. She made it herself on that machine.
17 A ¶ Nothing.
18 A ¶ A truck outside.
19 A Reversing.
20 D WALT (lifting out a record, reading the sleeve): Patsy Cline. I told you she kept the records.
21 D LORNA (not unkindly): You told me she kept nothing.
22 D WALT (setting it down very carefully): I was wrong about a lot of things in 1985.
23 A ¶ Silence.
24 A ¶ Ines pans, slowly.
25 A A shelf of mason jars.
26 A Buttons.
27 A A tin of thread.
28 A A child's shoe.
29 D INES (softly): Whose is the shoe?
30 D LORNA (after a long moment, picking it up): Mine. I think. Or Walter's. It's too small for either of us now.
31 D WALT (taking it from her hands, turning it over): Mine. See the heel. I wore it down running from Dad.
32 D LORNA (laughing despite herself): You never ran from Dad.
33 D WALT (smiling, not looking at her): Oh, I ran.
34 A ¶ Dust.
35 A Light.
36 D INES (lowering the camera slightly, then raising it again): Should we keep any of it?
37 D LORNA (placing the shoe in her handbag, closing the clasp): That. And the dress.
38 D WALT (nodding, tapping the Singer): And this.
39 D LORNA (wryly): You don't sew.
40 D WALT (grinning): I might start.
41 A ¶ Quiet.
42 A The three of them stand in the bar of daylight, looking at the unit, the long life of one woman in a ten-by-ten room.
43 D INES (whispering): Okay. That's the whole unit. I'm turning it off.
44 D LORNA (reaching toward the lens): Leave it on a minute more.
45 A ¶ The red light blinks.
46 A Nothing happens.
47 A Nothing happens for a very long time.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05067.json
### SCENE s05067 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): HAL, SORCHA, DEV, NELL, IVO, ROOK
1 A ¶ The minivan idles under a streetlight that has begun, very faintly, to hum a tune nobody in the world has ever written.
2 A It is 2:03 in the morning and HAL is driving six passengers he did not expect, in a car built for five, and the windows are fogged so thickly that the street outside might be anything, a forest, a harbour, the underside of a sleeping animal.
3 A ¶ Hal, 50s, retired bus driver, rubs his eyes.
4 A He took the fare because the app said four passengers and the pickup was a hospital, and hospitals, he has learned, are fine, hospitals do not lie.
5 A Now he sits with his hands at ten and two while the back seats overflow with a fugitive's worth of velvet and moth wings.
6 A ¶ In the back row, SORCHA, 20s, in a long green coat embroidered with tiny silver stars, holds a staff across her lap like a violin case.
7 A Beside her DEV, 30s, in a plain Tshirt, thumbs furiously at his phone.
8 A NELL, a girl of nine or ten with a backpack shaped like a fox, sits between them with her feet not touching the floor.
9 A And in the front passenger seat IVO, a tall man with a face like a closed door, stares out through the fogged glass, and in the cargo space, folded into it with the elegance of a thing that has never needed a seat, ROOK waits, a black-feathered shape with a human face.
10 A ¶ ON PHONE: Dev's screen glows.
11 A "RIDE: Your driver Hal is 4 min away."
12 A Then, below it, "RIDE: Your driver Hal is here."
13 A Then, "RIDE: Rate your trip!"
14 D DEV: Hal, mate, the app says we've arrived. At the. Um. Which kingdom is this?
15 D HAL: Falling Creek Road, I think. Or Falling Creek. It's not like the app is wrong.
16 D SORCHA: The app is never wrong. That is why we trust it.
17 A ¶ A SLAM from the rear of the van.
18 A Everyone jumps.
19 A The cargo door has bounced open on its latch and a gust of cold air full of snowflakes and ash blows through, and Rook snaps it shut with a talon, annoyed.
20 D ROOK: Draft.
21 D NELL (whispering): Is he mad?
22 D DEV: He's always mad. It's his whole thing.
23 A ¶ IVO turns his head at last and the whole van quietens.
24 D IVO: We are late. The gate closes at sunrise. If we're not through it the girl stays here and the girl is the key.
25 D HAL: I'm sorry, the girl is the what?
26 D NELL: Key.
27 D HAL (to himself): I should've gone home at midnight.
28 A ¶ The phone BUZZES in Dev's hand.
29 A He looks at it and goes pale.
30 A "MUM: where are u??
31 A Mrs K said u left the shop at 6".
32 A He shows it to Sorcha, who shakes her head.
33 D SORCHA: Don't answer. Not until we're over the border.
34 D DEV: It's my mum. She'll worry.
35 D SORCHA: She'll worry more if you do.
36 A ¶ Dev lowers the phone.
37 A The streetlight stops humming.
38 A Everything is quiet for a moment, and then the van fills with a soft white light, coming up through the floor, through the seats, and Hal's mouth opens, and Sorcha and Dev and Nell and Ivo and Rook all hold perfectly still, like children caught in a flashlight.
39 D HAL: That's not the engine.
40 D IVO: No.
41 A ¶ They look at the road ahead.
42 A Where the asphalt should be there is a long staircase of pale stone, spiralling down into a valley of lanterns.
43 A The van's tires crunch on the first step.
44 A Hal puts the car in park, and sighs the sigh of a man who has seen everything and is about to see something else.
45 D HAL: Five stars. If I'm going to hell I want it on my record that I was polite.
46 A ¶ Nell leans forward between the seats and pats his shoulder, and the lanterns far below begin, one by one, to open their eyes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05069.json
### SCENE s05069 | INT. NIGHTBIRD STUDIOS - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): REGGIE, SHAY, OMAR, KAT
1 A ¶ Rain on the skylight.
2 A Amber light from the console.
3 A A dozen VU meters twitch in the dark.
4 A ¶ Through the glass, the live room: a vocal booth, a lone mic on a stand, a grand piano under a sheet.
5 A ¶ REGGIE, 50s, owner, silver ponytail, a cardigan with a hole in the elbow, sits at the board.
6 A Beside him, SHAY, 20s, the artist, hoodie up, headphones around her neck.
7 A By the door, leaning on the wall with a paper cup of coffee gone cold, OMAR, 40s, in a wool coat that is too good for the room.
8 A And on the leather couch, KAT, 30s, her laptop open on her knees, typing.
9 A ¶ A clock above the door.
10 A 1:12.
11 A ¶ Thunder, distant.
12 A ¶ ON SCREEN: Kat's laptop.
13 A An email, subject line "Master Delivery - FINAL", sent 11:58 PM, from an address the label has never used.
14 D REGGIE: Run it back.
15 A ¶ He hits a key.
16 A The speakers fill with a vocal take, ghostly, a voice of ice.
17 A It ends.
18 A Silence.
19 D SHAY: That's the one.
20 D OMAR: That's not the one.
21 D SHAY: Omar.
22 D OMAR: That's a take. That's a very nice take. It's not the one that goes on the record.
23 D SHAY: It's the one I meant.
24 D OMAR: You meant it in July. You meant it in July with a different man in the room.
25 A ¶ Reggie shifts in his chair.
26 A The meters twitch.
27 D SHAY: Don't.
28 D OMAR: I'm just saying where the money is.
29 A ¶ The thunder again, closer.
30 D KAT (without looking up): The wire cleared at eleven fifty-eight. Both accounts. Just so everybody knows.
31 A ¶ Reggie stops.
32 A Turns slowly.
33 D REGGIE: What wire?
34 D KAT: Oh. Nothing. Forget I said it.
35 D SHAY: Kat.
36 D OMAR: Kat.
37 D REGGIE (standing): What wire, Kat?
38 A ¶ She closes the laptop.
39 A Everything in the room seems to lean toward her.
40 A Rain drums harder on the skylight.
41 D KAT: Reggie, you've been mixing other people's lies for thirty years. You really want to hear this one in your own studio?
42 D REGGIE: In my studio, yes.
43 D KAT: The album isn't hers. Never was. The masters belong to a company in Nevada that belongs to a company in Delaware that belongs to Omar. Shay signed it in July. She didn't read it. Reggie, you didn't read it. I read it. I'm the only one who ever read it.
44 D REGGIE: You work for me.
45 D KAT: I work for whoever pays the rent on the building you're about to lose.
46 D SHAY (very quietly): Omar. Is that true?
47 D OMAR: Shay, it's a standard deal.
48 D SHAY: Is it true?
49 D OMAR: It's business. It was always going to be business. You wanted to be heard by two million people, somebody has to own the room.
50 D SHAY: You sat with me for six months. You told me my father's songs mattered.
51 D OMAR: They do. They're worth a lot.
52 A ¶ A long stillness.
53 A Shay takes the headphones from around her neck and sets them very gently on the console.
54 A Reggie sits back down heavily.
55 A He looks suddenly old.
56 D REGGIE: Thirty years. Never once did I let anyone take the tape out of this building.
57 D KAT: The tape is the least of it.
58 A ¶ Rain.
59 A Thunder breaks directly overhead.
60 A In the live room, the piano sheet slides slowly off its shoulders and falls to the floor.
61 A The lights flicker.
62 A When they come back, Omar is standing in front of the door, one hand on the knob, and he is no longer smiling.
63 D OMAR: Nobody's walking out of here with a copy.
64 A ¶ Shay reaches for the red button on the console marked RECORD, and presses it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05070.json
### SCENE s05070 | INT. HARLOW & SONS DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): MAYA, JOSS, BEE
1 A ¶ Rain on the tin roof.
2 A Steady.
3 A Endless.
4 A ¶ Rows of parcels stacked to the rafters.
5 A A forklift, parked.
6 A Sodium lights buzzing orange.
7 A ¶ MAYA (17, hoodie, lanyard that says TEMP) scans boxes with a handheld gun.
8 A BEEP.
9 A BEEP.
10 A BEEP.
11 A ¶ Her phone buzzes on a pallet.
12 A She grabs it.
13 A ¶ ON PHONE: omg r u still at work ON PHONE: u said u'd be done by 10
14 D MAYA (typing, muttering): It's literally ten-fifteen, Bee. Chill.
15 A ¶ She thumbs a reply.
16 A Sends.
17 A ¶ Quiet.
18 A ¶ Cold concrete.
19 A Wet footprints leading in from the loading door.
20 A ¶ JOSS (18, delivery vest, headphones around his neck) wheels a cage trolley around the corner.
21 D JOSS: You're still here, Maya?
22 D MAYA: Last row. Then I'm out.
23 D JOSS: Cool, cool. Me too.
24 A ¶ He parks the trolley.
25 A Sits on a crate.
26 A Scrolls his phone.
27 A ¶ Silence.
28 A ¶ Rain.
29 D MAYA: You been on shift since six, right? Don't you wanna go home?
30 D JOSS: Home's boring. Dad's watching the match.
31 D MAYA: Fair.
32 A ¶ She laughs.
33 A He doesn't look up.
34 A ¶ A drip lands in a bucket.
35 A Plink.
36 A ¶ Nothing.
37 D MAYA [CONT'D]: Joss. Why are you holding your phone like that?
38 D JOSS: Like what?
39 D MAYA: Like it's a grenade.
40 A ¶ He turns the screen toward her.
41 A A group chat.
42 A Her name at the top.
43 A A photo of her, at the till, from this afternoon.
44 D JOSS: Bee sent me this. Asked me to keep you here.
45 A ¶ Her phone.
46 A Buzzing.
47 A Buzzing.
48 A Buzzing.
49 D BEE [O.S.] (through the loading door, soft): Maya? Surprise.
50 A ¶ Maya turns.
51 A A silhouette in the rain.
52 A A birthday cake, candles lit, flickering.
53 D BEE [CONT'D]: Happy seventeenth, idiot.
54 D MAYA: You absolute --
55 A ¶ She is laughing.
56 A Crying.
57 A Both.
58 A ¶ Candlelight.
59 A Rain.
60 A Home.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05071.json
### SCENE s05071 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): SAM, MO, THE BAND, BUS DRIVER, OLD WOMAN, TEENAGERS
1 A ¶ the 3am route out of the city. mostly empty. heater ticking. snow in the headlights, getting thicker.
2 A ¶ SAM, 30s, sits sideways across two seats with a backpack on his lap. across the aisle, MO, 20s, eats crisps out of a tiny bag.
3 A ¶ at the back, THE BAND (four teenagers, guitar cases, one amp) slumps against each other, half asleep.
4 D SAM: is it me or are we going slower
5 D MO: we're going slower
6 D SAM: cool. cool cool cool.
7 A ¶ the BUS DRIVER, unseen but for his cap in the mirror, hums along to the radio.
8 D MO: you want one
9 D SAM: what are they
10 D MO: salt and vinegar. i think. the bag's gone soft.
11 D SAM: yeah ok
12 A ¶ mo tosses the bag. sam catches it, drops half.
13 D SAM [CONT'D]: sorry
14 D MO: it's fine, sam. it's like, a crisp.
15 A ¶ an OLD WOMAN at the front, asleep, a small DOG in her coat. the dog looks at sam. sam looks at the dog.
16 D SAM: that dog hates me
17 D MO: that dog's seen things
18 D THE BAND (mumbling, in unison, not awake): ten more minutes.
19 D SAM: they're asleep, right
20 D MO: they're so asleep
21 A ¶ the bus slows. slows. the engine note drops.
22 D SAM: mo
23 D MO: yeah
24 D SAM: that's not a stop
25 A ¶ the bus rolls to a halt in the middle of a white nothing. the driver cuts the engine. the heater stops ticking.
26 A ¶ quiet. the radio hums on batteries.
27 D THE BAND (waking, in unison): are we there
28 D MO: not really, no
29 A ¶ two TEENAGERS in school hoodies, a row ahead, look up from a shared pair of earbuds. look out the window. look back down.
30 D SAM: should we be worried
31 D MO: i think we should be a little worried
32 D SAM: how much is a little
33 D MO: like. a sixth.
34 D SAM: a sixth. ok. i can do a sixth.
35 A ¶ the driver stands, pulls on a coat.
36 D DRIVER [O.S.]: folks, bit of snow on the road. stay put. i'll radio in.
37 A ¶ he steps off. the doors sigh. cold rolls down the aisle.
38 D MO: he's going to radio in
39 D SAM: from where
40 D MO: from outside, i guess
41 D SAM: this is not a radio situation
42 D MO: sam
43 D SAM: what
44 D MO: you're being weird. it's fine. people get stuck. buses get unstuck.
45 D SAM: yeah
46 A ¶ this is the last quiet moment before the night gets long.
47 D THE BAND (whispered, in unison): can we have the heater back
48 D SAM: i'm so sorry. the heater is gone.
49 D MO: we'll take turns
50 D SAM: turns doing what
51 D MO: being warm. it's a thing. you pass it.
52 A ¶ sam laughs, a little, then stops.
53 A ¶ the old woman wakes up. looks around. says nothing. shuts her eyes again. the dog sighs.
54 D SAM: mo
55 D MO: yeah
56 D SAM: if this goes bad, i just want you to know i like your coat
57 D MO: it's my brother's coat
58 D SAM: i like him too
59 A ¶ mo throws a crisp at him. it hits his forehead. he leaves it there.
60 A ¶ outside, the snow keeps falling. the road is gone. the windows fog.
61 D MO: big dave's gonna be so mad i'm late
62 D SAM: who's big dave
63 D MO: my boss. he's not even big. we just have two daves.
64 D SAM: that's the worst reason
65 D MO: it's the only reason
66 A ¶ the driver climbs back on, shoulders white.
67 D DRIVER: okay. we wait.
68 A ¶ he sits. takes off the cap. wipes his face.
69 A ¶ nobody speaks. the dog snores. somewhere in the dark, a plough, maybe, or just wind.
70 D SAM: mo
71 D MO: yeah
72 D SAM: thanks for the crisps
73 D MO: you didn't eat them
74 D SAM: i held them very respectfully
75 A ¶ the bus creaks. the snow settles. they wait.
