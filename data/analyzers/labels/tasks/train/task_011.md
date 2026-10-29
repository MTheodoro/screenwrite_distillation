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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05132.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05133.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05134.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05135.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05136.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05138.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05139.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05140.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05141.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05142.json
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
