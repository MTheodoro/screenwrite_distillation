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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05026.json
### SCENE s05026 | INT. POPPY'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): POPPY, BEN, THE TWINS
1 A ¶ The whole street is dark.
2 A One candle on the counter, one torch in Poppy's mouth.
3 A She is on her knees, head inside an open cupboard.
4 D POPPY (muffled, torch in mouth): I know I have matches. I bought matches. I remember the matches.
5 D BEN (he stands in the doorway holding a bag of frozen peas against his forehead): You also remember buying a fire extinguisher and that was a dream.
6 D POPPY (she pulls out her head, spits the torch into her hand): It was a very vivid dream.
7 D BEN (he steps forward, trips on a saucepan, catches himself on the fridge): Okay. Okay. I'm fine. Who puts a saucepan on the floor?
8 D POPPY (pointing the torch at him): Someone who was making you dinner before the lights went out.
9 D BEN (he looks at the pot, then at her, then at the pot): That is soup?
10 D POPPY (she stands, wipes her hands on her jeans): That is a risotto in its early years.
11 D BEN (he laughs, then stops laughing when he sees she is not laughing): Poppy. I'm sorry. I love it. I love its early years.
12 D POPPY (she steps closer, the torch under her chin, spooky): Say it again.
13 D BEN (he steps back into the table): I love it.
14 D POPPY (softer, torch lowered): No. The other thing. From the car.
15 D BEN (a long breath, peas slipping down his face): I said I might be in love with you. Might. I said might.
16 D POPPY (she smiles, looks at the floor, then at him): You said might very quickly.
17 D BEN (nodding, with great dignity): I was driving.
18 A ¶ CLOSE ON the candle.
19 A It flickers.
20 D POPPY (whisper): Ben, I think I am also a bit of a might.
21 D BEN (he lowers the peas, finally): Good. That's a good might. We can work with that.
22 A ¶ The back door BANGS open.
23 A Cold air, flashlights swinging across the ceiling.
24 A THE TWINS, Poppy's nine-year-old nieces in matching raincoats, march in with a candle in each hand and a very large cake between them.
25 D THE TWINS: Surprise!
26 D POPPY (she jumps and hits her head on the cupboard door): Ow! It's not even my birthday!
27 D THE TWINS: It is in the dark!
28 D BEN (to Poppy, quietly, through his hand): Did you know about this?
29 D POPPY (rubbing her head, whispering back): No, but I knew about the matches. They have matches.
30 D THE TWINS (together, holding up a box of matches): We have matches!
31 D BEN (he takes a candle from one twin and lights it from the other): Then I think this is a good night.
32 A ¶ ANGLE ON the cake as the candles are lit one at a time.
33 A Poppy and Ben lean in together over the flame.
34 D POPPY (softly, only to him): Make a wish.
35 D BEN (smiling, not looking away from her): Already did.
36 A ¶ BACK TO SCENE.
37 A The twins blow out the candles.
38 A The room goes black.
39 D THE TWINS (in the dark): Again!

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05028.json
### SCENE s05028 | INT. DUSTY ROAD STUDIOS - RECORDING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAMERA, MO, BIG DAVE, THE WOMAN, JEN, LOU, WHIRS
1 A ¶ HANDHELD.
2 A A documentary crew's camera follows Mo, 30s, through the control room.
3 A Red light on.
4 A ON CAMERA, he turns and talks to the lens.
5 D MO (to camera): This is the room where it all got made. Forty years of cowboy ballads and bad decisions.
6 A ¶ Big Dave, 50s, hat the size of a dinner plate, sits at the console with his boots on the desk.
7 A Jen, 20s, stands in the booth behind glass, headphones around her neck.
8 D BIG DAVE: Tell them about the ghost, Mo.
9 D MO: There's no ghost.
10 D BIG DAVE: There's a ghost.
11 A ¶ The studio door SLAMS.
12 A A woman in a long duster coat stands in it, dripping.
13 A Nobody knows her.
14 A ¶ The camera swings.
15 A Mo and Big Dave both freeze.
16 A Jen drops her headphones.
17 D MO: Can we help you, ma'am?
18 D THE WOMAN: Looking for the tape. Nineteen ninety-four. Session nine.
19 D BIG DAVE: We don't give out tapes.
20 D THE WOMAN (stepping forward): I'm not asking.
21 A ¶ Jen runs out of the booth and the three of them end up in a clump by the console, the camera shaking, the cables tangled around everyone's boots.
22 D JEN (to camera, whispering): I don't know her. I swear to God.
23 D THE WOMAN: You will.
24 A ¶ She puts a battered cassette on the console.
25 A The label reads: LOU CALDER - DO NOT PLAY.
26 D BIG DAVE (quiet, taking off the hat): Lou. Lou Calder. That's you.
27 D LOU: Played it once, Dave. Never again. Press record.
28 A ¶ Mo reaches for the board.
29 A Jen backs against the wall.
30 A The tape machine WHIRS, and the speakers CRACKLE with a man's voice singing, far away, in a language none of them know.
31 A ¶ The camera drops.
32 A Static.
33 A Cut.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05029.json
### SCENE s05029 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): PHONE, SUNNY, MEL, TROY, RHEA, HOODIE GUY, ANSEL
1 A ¶ A sea of cardboard signs.
2 A Drums somewhere.
3 A Sunny, 20s, they/them, stands on a milk crate holding a megaphone and a coffee.
4 A Beside them, Mel checks a phone.
5 A Troy ties a banner to a lamp post.
6 A Rhea films everything.
7 A At the edge of the crowd, a figure in a black hoodie watches the steps of City Hall and does not chant.
8 A ¶ ON PHONE (SLACK): #march-ops - Mel: are we on for 2?
9 A Sunny: yes.
10 A Troy: banner is up.
11 A Rhea: live in 5.
12 D SUNNY: Okay, team, small update. Permit says we can stay until four. Which means we leave at five.
13 D MEL: Sunny.
14 D SUNNY: They said four, I said five, it's a negotiation. They'll adjust.
15 D MEL: Who is they?
16 D SUNNY: Me. I'm they. Wait, you mean the city. Sorry, the city. The city is it.
17 D TROY: Hey, Sunny, who's the hoodie guy? He's been standing there for an hour. Hasn't touched a sign.
18 D RHEA: I'm going to say it. He is giving cop.
19 D MEL: He's giving bored dad.
20 D RHEA: Bored dads wear fleece, Mel. That is a tactical hoodie.
21 D SUNNY: Okay, let's not be weird. Everyone's allowed to stand. It's a public plaza.
22 D TROY: He's been looking at your crate for ten minutes.
23 D SUNNY: That's because I'm very tall on a crate.
24 D RHEA (into phone, whispering): Hoodie guy, if you're a cop, please blink twice.
25 A ¶ The Hoodie Guy takes a step into the crowd, lowers the hood, and walks right up to the crate.
26 A He is Ansel, 30s, tired, pink-eyed, holding an envelope.
27 D HOODIE GUY: Sunny? I'm Ansel. From the water board. I'm the one who emailed you last night.
28 D SUNNY: Oh. You're the leak.
29 D ANSEL: I'm the leak. Can we walk? There are more documents. They're not going to like me after today.
30 D MEL: Is that why you're being weird in a hoodie?
31 D ANSEL: I'm not being weird. I'm being careful.
32 D TROY: Careful looks exactly like weird, man.
33 D SUNNY: Rhea, stop the livestream. Mel, take the megaphone. Troy, keep the banner up. I'll be five minutes.
34 D RHEA: It's been "five minutes" for three years.
35 D SUNNY: Then it's right on time.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05031.json
### SCENE s05031 | INT. VILLAGE HALL - FUNERAL RECEPTION - DAY
Detected names (may be incomplete or contain aliases): THE CHOIR, ORSOLYA, BRAM, A VOICE
1 A ¶ Orsolya, 60s, in a black coat stitched with tiny silver thread that moves when nobody is looking, stands by the tea urn while the mourners murmur and the rain taps the leaded windows and a dog under the buffet table sighs, and across the room Bram, 30s, the dead man's nephew, holds a paper plate of untouched sandwiches and watches the coffin lid through the open vestry door as though it might speak.
2 A ¶ THE CHOIR gathers by the piano, six old women in grey, humming a note that is slightly too low for the room.
3 D ORSOLYA: You haven't asked me why I came. Everyone else has. They ask it with their eyebrows. Your uncle owed me a debt, Bram, and in my family we collect, even from the dead. Especially from the dead, who are very bad at hiding.
4 D BRAM (beat): He owed everyone. He owed the butcher. It's a funeral, not an audit.
5 D ORSOLYA: He owed me his shadow.
6 A ¶ The urn hisses.
7 A The humming from the choir climbs a half step.
8 D BRAM: That's not funny.
9 D ORSOLYA: It wasn't meant to be. Look at the floor beneath the coffin. Go on. The vicar has shuffled four times and still it hasn't moved with him.
10 A ¶ Bram looks.
11 A A dark shape lies against the vestry tiles, long and patient, pointing the wrong way from the candles.
12 D BRAM (quietly): That's the light from the door.
13 D ORSOLYA: Is it?
14 D THE CHOIR (in unison, low): Amen.
15 D A VOICE [O.S.]: Bram? Bram, love, are you in there? Your aunt wants the car brought round.
16 D BRAM (calling back): In a minute, Mrs. Pell!
17 D ORSOLYA: Do not answer him when he speaks. That is the only rule I will give you. He will use your voice, because it is the nearest one, and he will use your mother's after that.
18 D BRAM (beat): Speak. Who speaks?
19 A ¶ The vestry candles bend flat, all together, as if a door had opened onto a great cold field.
20 A The choir stops humming.
21 A The dog under the table stands up, hackles raised, and does not make a sound.
22 D A VOICE [V.O.] (in Bram's own tones, warm): Bram. It's all right. Come and help me with this lid.
23 D ORSOLYA (very still): That is the first.
24 D BRAM (whispering): How do I stop it?
25 D ORSOLYA: You give it what it is owed. And you do not flinch, boy, whatever it wears.
26 A ¶ The shadow on the tiles lifts one edge, slowly, like a hand testing a curtain.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05032_0.json
### SCENE s05032_0 | EXT. BORDER CHECKPOINT - DAWN
Detected names (may be incomplete or contain aliases): NARRATOR, INSPECTOR HALVORSEN
1 A ¶ Fog lies on the valley like spilled milk.
2 A Two lanes of trucks idle in a row, exhaust rising straight up in the windless cold.
3 A A loudspeaker coughs somewhere, then gives up.
4 A ¶ A faded sign reads: ALL VEHICLES STOP.
5 A Under it, a stray dog sleeps against a concrete barrier, ribs rising and falling.
6 D NARRATOR [V.O.]: Eleven years at this crossing, and I can tell you how a man lies by how he holds his steering wheel. Tight means fear. Loose means practice. This one held it like a baby bird.
7 A ¶ A grey hatchback rolls to the booth.
8 A Behind the glass, INSPECTOR HALVORSEN, 50s, heavy, unhurried, a thermos steaming beside his keyboard, lifts one finger.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05032_1.json
### SCENE s05032_1 | INT. HATCHBACK - CONTINUOUS
Detected names (may be incomplete or contain aliases): DELPHINE VASS, HALVORSEN, NARRATOR
1 A ¶ DELPHINE VASS, 30s, hair damp, scarf too bright for the hour, rolls down the window.
2 A In the back seat a child's booster seat sits empty.
3 D HALVORSEN: Passport. Purpose of travel.
4 D DELPHINE: Visiting my sister. Three days.
5 D HALVORSEN: Where does your sister live?
6 D DELPHINE: Kalmar. Near the harbour.
7 A ¶ On the dashboard her phone lights up.
8 A ¶ ON PHONE: where r u
9 A ¶ She turns it face down.
10 A Halvorsen watches her do it.
11 D NARRATOR [V.O.]: Nothing wrong with that. Everybody's got somebody who wants to know where they are.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05032_2.json
### SCENE s05032_2 | EXT. BORDER CHECKPOINT - CONTINUOUS
Detected names (may be incomplete or contain aliases): TEENAGERS, WAITER, KESTREL OKONKWO, HALVORSEN, DELPHINE, NARRATOR, PHONE, ^DELPHINE
1 A ¶ Two TEENAGERS in a van queue take photographs of the fog on their phones, laughing.
2 A A WAITER from the roadside cafe crosses the road carrying a tray of paper cups to the guards, steam curling off them.
3 A ¶ Younger officer KESTREL OKONKWO, 20s, eager, jacket too clean, jogs over from the second booth.
4 D KESTREL: Sir, the dog unit's flagged nothing on the left lane.
5 D HALVORSEN: Good. Then we are all friends this morning.
6 A ¶ He smiles at Delphine and slides her passport back through the slot.
7 D HALVORSEN [CONT'D]: Safe travels, Ms. Vass.
8 D DELPHINE (exhaling): Thank you.
9 A ¶ The barrier arm lifts.
10 A The hatchback rolls forward ten feet, twenty.
11 A Her shoulders drop.
12 D NARRATOR [V.O.]: Here is what I know about relief. It makes people careless with their hands.
13 A ¶ Her phone buzzes again against the dash.
14 A She reaches for it without looking.
15 A ¶ ON PHONE: did u get through?
16 A ¶ She types with one thumb.
17 A ¶ ON PHONE (CONT'D): yes. dont call me again
18 A ¶ Halvorsen watches the hatchback in the mirror, thermos halfway to his lips.
19 D HALVORSEN: Kestrel. The booster seat.
20 D KESTREL: Sir?
21 D HALVORSEN: Who rides to her sister's for three days with a child seat and no child?
22 D KESTREL (beat): Maybe the kid's with the sister already?
23 D HALVORSEN: Then why is the seat belt buckled across it?
24 A ¶ Silence.
25 A The dog under the barrier lifts its head.
26 D HALVORSEN [CONT'D]: Close the arm.
27 A ¶ Kestrel hits a button.
28 A The barrier SLAMS down in front of the hatchback, fifteen feet from freedom.
29 A Brake lights flare red in the fog.
30 D NARRATOR [V.O.]: Here is the thing nobody tells you. The calm is not the quiet part. The calm is the trap.
31 A ¶ Halvorsen walks out of the booth, unhurried, and Kestrel falls into step beside him.
32 A They reach the driver's window together.
33 D HALVORSEN: Ms. Vass. A moment.
34 D KESTREL: Ma'am, please step out of the vehicle.
35 D HALVORSEN: Please step out.
36 D DELPHINE (overlapping, shaking): I have to be in Kalmar by noon. My sister is expecting me.
37 D ^DELPHINE (overlapping, shaking): I have to be in Kalmar by noon.
38 A ¶ She does not move.
39 A Her hands are tight on the wheel.
40 A Not the baby-bird grip now.
41 A Something harder.
42 D NARRATOR [V.O.]: There it is. Loose means practice. Tight means fear. Tight and then loose again, that means you have made up your mind.
43 A ¶ Delphine puts the car in reverse.
44 A ¶ Halvorsen steps back.
45 A Kestrel's hand drops to his belt.
46 D HALVORSEN (calm): Don't.
47 A ¶ The engine revs.
48 A Fog swallows the sound.
49 A Somewhere beyond the barrier, a child begins to cry, thin and far away, from a truck in the other lane.
50 A ¶ Delphine's eyes go wide.
51 A She turns her head toward it.
52 D DELPHINE (whispering): That's not -
53 A ¶ The teenagers' phones all come up at once, filming.
54 D NARRATOR [V.O.]: Eleven years. I never once saw a border. Only the people standing very close to it.
55 D HALVORSEN (quietly): Ms. Vass. Whose child is in that truck?
56 A ¶ She doesn't answer.
57 A The engine cuts out.
58 A The only sound is the dog, finally, barking.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05033.json
### SCENE s05033 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DOG, NARRATOR, RUSS DOLAN, NINA FALLOWS, DESMOND PIKE, OLD WOMAN, MAUREEN
1 A ¶ The 47 night bus, half empty, yellow light flickering over torn seats and a floor sticky with old rain.
2 A Windows fogged.
3 A A drunk TEENAGER asleep against the glass, another one eating chips from a paper bag, a DOG on a leash tucked under a seat beside its sleeping owner.
4 D NARRATOR [V.O.]: Three in the morning is when the city tells the truth. Everyone left on this bus is running from somethin or towards it.
5 A ¶ In the back row sits RUSS DOLAN, 40s, broad, grey stubble, a gym bag between his boots he keeps touching with one foot.
6 A Three rows ahead, NINA FALLOWS, 20s, nurses uniform under a parka, scrolls her phone with a tired thumb.
7 D RUSS (low, leaning forward, tapping the seat): Hey. Nina. Dont turn around.
8 D NINA (not turning, a breath): Russ. Jesus. I told you, not here.
9 D RUSS (sliding the bag with his foot): Your brother says you've got something that belongs to me. Thats all. Hand it over, and I'm off at Carver Street. No fuss.
10 D NINA (typing, steady): My brother says alot of things when hes scared.
11 A ¶ Two rows up, a young man in a courier jacket, DESMOND PIKE, 30s, takes off his headphones.
12 A He has been listening for a while.
13 D DESMOND (to nobody, mild): Sorry. Is this a private conversation, or can anyone join?
14 D RUSS (without looking): Mind your business, pal.
15 D DESMOND (smiling, pulling out his own phone): Ill try. Its difficult. This bus is only forty feet long.
16 D NARRATOR [V.O.]: Desmond Pike was a patient man. Desmond Pike was also a cop, and he had been following Russ Dolan for nine weeks.
17 A ¶ Across the aisle, an OLD WOMAN with a shopping trolley mutters in Polish and crosses herself.
18 A The driver, MAUREEN, 50s, glances in the mirror and turns the radio down a notch.
19 D MAUREEN (over the intercom, flat): Next stop Carver Street. Mind the doors please.
20 D NINA (finally turning, quiet): Russ, theres a pen drive in my left pocket and its staying there. You want it, you can explain to the man in the courier jacket why.
21 D RUSS (freezing, tight): What man.
22 D DESMOND (raising a hand, cheerful): Hi.
23 A ¶ The bus brakes, hissing.
24 A Chips-teenager drops the bag.
25 D RUSS (low, almost kind): You wired her, did you. Her. A nurse.
26 D DESMOND (standing, badge out, slow): Nobodys wired, Russ. Sit down. Everyone else is going to get off at Carver, and then you and me and Nina are going to ride to the end of the line.
27 D RUSS (reaching into the bag): No. No, I dont think we are.
28 A ¶ The OLD WOMAN screams.
29 A The dog barks, the owner jerks awake.
30 A Maureen slams the brakes and the whole bus lurches, bodies thrown, the bag skidding across the floor and spilling, not money, but a long black shape wrapped in a towel.
31 D NARRATOR [V.O.]: It always ends in the aisle. Every story on a night bus ends in the aisle.
32 D NINA (shouting, diving low): Gun! Desmond, gun!
33 D DESMOND (drawing, steady): Russ. Put it down. Put it down now.
34 D RUSS (unwrapping the towel, trembling): She took everything. Everything. You think I wanted this?
35 A ¶ The overhead light dies.
36 A The bus is dark except for the streetlamps stuttering past the windows, and in the pulse of them nobody moves, nobody breathes, and the dog will not stop barking.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05035_0.json
### SCENE s05035_0 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): CITY MAP, MIRA ADEYEMI, TOBIAS WREN, JUNO PARK, RAFA DELACROIX
1 A ¶ SUPER: "THURSDAY, 2:14 PM"
2 A ¶ A river of banners and drums and kids on shoulders pours across the plaza, whistles shrieking and a brass band somewhere playing something almost like a hymn, and at the edge of the crowd under a dead plane tree four people in orange vests drift together, not looking at one another, while a police helicopter chops overhead and a woman on a megaphone leads a chant that rolls back and forth like surf.
3 A ¶ INSERT - A CITY MAP on a phone, the bank across the plaza circled in red.
4 A ¶ SUPER: "ARCHIVE VAULT, FLOOR B2"
5 A ¶ The four close ranks.
6 A MIRA ADEYEMI, 30s, sunglasses pushed up, holds a placard that says THERE IS NO PLANET B. Beside her, TOBIAS WREN, 50s, the team's old safe man, carries a cardboard sun on a stick.
7 D MIRA (low, smiling for the crowd): Everybody breathe. We hold the crowd until the alarm trips, the guards come out, and then we walk in through the loading dock like we're delivering pamphlets. Forty seconds. That's the whole plan.
8 D TOBIAS (waving the cardboard sun): You said that about the last one.
9 D MIRA (beat): The last one had a dog.
10 A ¶ JUNO PARK, 20s, in a hand-knit hat, scrolls through a message thread on her phone, a chant in her ears.
11 D JUNO (typing): Dock crew says the guards changed shift early. Two minutes ago. They won't be where we mapped them.
12 D MIRA (lowering her voice): Which means we move now, not later. Tobias, the code?
13 D TOBIAS (patting his coat): Right here in my pocket, same as it's been for eleven years, and if you look at it, Mira, I swear on my mother's pension I will fall apart.
14 D JUNO (quietly, not looking up): The sun's wobbling.
15 D TOBIAS (adjusting the stick): It's a very old sun.
16 A ¶ The brass band swells.
17 A A drum thunders.
18 A The crowd surges left, a wall of orange and green flags.
19 A ¶ RAFA DELACROIX, 40s, ear-piece in, drifts into the circle from the back, face grey, shoulder-checking the crowd.
20 D RAFA (under his breath): We have a problem. One of the vests across the plaza has a radio and a plain jacket underneath. They're not guards. They're federal.
21 D MIRA (a long beat, lips barely moving): Then they are here for someone else.
22 D RAFA (shaking his head): Mira. They are here for us.
23 D TOBIAS (lowering the cardboard sun slowly): Well. That is a very short plan.
24 D JUNO (reading, voice flat): Message from the dock. It says: WHERE ARE YOU. IT'S NOT SAFE. LEAVE NOW.
25 D MIRA (closing her eyes, then opening them, quiet): Everybody walk. Don't run. Join the march, lose the vests, and meet at the van. Nobody looks back.
26 D RAFA (softly): And the vault?
27 D MIRA (gently, to the crowd, the sky, to herself): The vault has waited a hundred years. It can wait another one.
28 A ¶ The chant swells.
29 A Rain begins, thin and sudden.
30 A The four melt into the crowd one by one.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05035_1.json
### SCENE s05035_1 | EXT. CITY HALL PLAZA - LATER
Detected names (may be incomplete or contain aliases): 
1 A ¶ Banners droop.
2 A The brass band packs its cases.
3 A A single cardboard sun lies face down in a puddle, its stick snapped in half.
