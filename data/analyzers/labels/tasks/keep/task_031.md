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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01879.json
### SCENE s01879 | INT. HOSPITAL CONSULTATION ROOM, ELEVENTH FLOOR - MORNING
Detected names (may be incomplete or contain aliases): ANAND PILLAI, NURSE BRIDGET MOONEY, CASIMIR WOJTYLA
1 A ¶ Pale light through venetian blinds.
2 A A box of tissues, deliberately placed.
3 A DR. ANAND PILLAI (50s, soft-spoken, cardigan under his coat) turns a folder over in his hands.
4 A NURSE BRIDGET MOONEY (40s, quiet) stands by the door.
5 A CASIMIR WOJTYLA (70s, retired tailor, pressed shirt) sits very straight, hands folded over his cap.
6 D CASIMIR: My scans look good, yes? You called me in early only to tell me to stop worrying.
7 D PILLAI: Mr. Wojtyla, thank you for coming in.
8 D BRIDGET: Can I get you some water?
9 D CASIMIR: Water, no. I would like the news. The weather I can see for myself.
10 D PILLAI: The scans were clear in the lungs.
11 D CASIMIR: There. You see, Bridget? I told you the cough was the cold weather.
12 D BRIDGET: You did.
13 D PILLAI: Mr. Wojtyla, the scan did find something else.
14 D CASIMIR: What something?
15 D PILLAI: A shadow on the liver. Two, in fact.
16 D CASIMIR: Shadows. I have spent forty years looking at shadows on cloth. They come out with a good steam.
17 D BRIDGET: Mr. Wojtyla--
18 D PILLAI: ^These will not come out with steam, I am afraid.
19 D CASIMIR: So. It is that kind of shadow.
20 D PILLAI: Yes.
21 D CASIMIR: And how long does that kind of shadow give a man?
22 D PILLAI: Months. Perhaps more, with treatment.
23 D CASIMIR: Months. (beat) Thank you for saying it plainly. Bridget, you may stop holding the door. I am not going to run.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01880.json
### SCENE s01880 | INT. COIN LAUNDRY, ALL-NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): MARCHETTI, ARCHIE PENNYWHISTLE, RENATA, MEZ-LUND, TOMASZ BRZOZOWSKI, WIN, ABARA
1 A ¶ Dryers turning.
2 A Fluorescent hum.
3 A Orange plastic chairs bolted in rows.
4 A A vending machine sells soap and nothing else.
5 A ¶ DET. SOLEDAD "SOL" MARCHETTI (40s, windbreaker, paper cup) takes the chair nearest the door.
6 A Opposite her, ARCHIE PENNYWHISTLE (60s, flannel, crossword) folds towels with a care that borders on ceremony.
7 A Near the dryers, RENATA GÓMEZ-LUND (30s, scrubs, earbuds) watches a spinning load of white shirts.
8 A ¶ Marchetti sips.
9 A Looks at no one in particular.
10 D MARCHETTI: Slow night.
11 D ARCHIE: They all are, now.
12 A ¶ He sets a towel on the pile.
13 A Squares the corners.
14 D MARCHETTI: You work here long?
15 D ARCHIE: Eleven years. Owner's my cousin. He doesn't come in.
16 D MARCHETTI: Nice. A quiet job.
17 D ARCHIE: It is until it isn't.
18 A ¶ Renata pulls out an earbud.
19 A Glances at Marchetti.
20 A Looks away.
21 A Her load stops.
22 A She opens the door and pulls the shirts into a basket, one by one.
23 A Each is folded before it is warm.
24 D MARCHETTI: Those look like hospital shirts.
25 D RENATA: They're mine.
26 D MARCHETTI: All of them?
27 D RENATA: It's a big family.
28 A ¶ Archie turns the page of his crossword.
29 A Pencils in a word.
30 A Erases it.
31 D MARCHETTI: Seven letters. "Alibi."
32 D ARCHIE: Excuse?
33 D MARCHETTI: Six. Excuse is six.
34 D ARCHIE (not looking up): Then I don't have one.
35 A ¶ The bell on the door.
36 A TOMASZ BRZOZOWSKI (30s, leather jacket, wet hair) enters with a duffel and stops.
37 A His eyes go to Renata.
38 A Then to Marchetti's windbreaker, to the badge clipped beneath it.
39 A He nods once, pleasantly, like a man at the wrong party.
40 D TOMASZ: Evening.
41 D MARCHETTI: Evening.
42 D ARCHIE: Machine three is broken, friend. Use five.
43 D TOMASZ: I've got my own, thanks.
44 A ¶ He unzips the duffel.
45 A Takes out a single folded shirt.
46 A Holds it up to the light.
47 A Renata drops the basket.
48 A ¶ Nobody speaks.
49 A A dryer thuds, thuds, thuds.
50 A A coin rattles down inside it.
51 D ARCHIE: ^Machine five. It's good.
52 D MARCHETTI: ^Mr. Brzozowski. Sit down.
53 A ¶ Tomasz folds the shirt into quarters.
54 A Then smaller.
55 A A kind of smile.
56 D TOMASZ: I haven't given my name.
57 D MARCHETTI: You didn't need to.
58 A ¶ From the back, a door opens.
59 A WINSTON "WIN" ABARA (50s, owner's cousin's lawyer, expensive coat) steps out of the supply closet, buttoning his jacket.
60 A He looks at the room.
61 A Nobody looks at him.
62 D WIN: It's all right, Tomasz. They only have the one.
63 D TOMASZ: The one what?
64 D WIN (gently): The one thing, son. The rest is dryer lint.
65 A ¶ Marchetti stands.
66 A Her cup is empty.
67 A She sets it very neatly on the chair.
68 D MARCHETTI: Then let's start with the one.
69 A ¶ Renata picks up the basket again.
70 A Archie closes his crossword.
71 A The dryers keep turning.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01881.json
### SCENE s01881 | INT. GLASS-DOMED OBSERVATORY, LUNAR FAR SIDE STATION - DAY
Detected names (may be incomplete or contain aliases): COMMANDER HORATIO LINDQVIST, AMARA OKONKWO-REYES, TECHNICIAN BEN YAZZIE, CORDELIA FAIRWEATHER, ENGINEER JUNE KAWAMURA, STRANGER, PRYCE
1 A ¶ A great telescope sleeps under a sheet of dust.
2 A Earthlight spills through the dome.
3 A Six people sit around a folding table, plates of reconstituted eggs untouched.
4 A ¶ COMMANDER HORATIO LINDQVIST (50s, silver temples, careful) presides.
5 A DR. AMARA OKONKWO-REYES (40s, sharp, notebook) sits at his right.
6 A TECHNICIAN BEN YAZZIE (30s) fiddles with a salt packet.
7 A MRS. CORDELIA FAIRWEATHER (60s, tailored, a visitor from the supply ship) eats nothing.
8 A ENGINEER JUNE KAWAMURA (30s) stirs her coffee.
9 A A tall man in a station jacket, STRANGER (40s, unreadable), stands just inside the door, hat in hand.
10 D COMMANDER LINDQVIST: Mrs. Fairweather, I trust you slept well.
11 D CORDELIA: Remarkably. I'm told the silence here is the best in the solar system.
12 D OKONKWO-REYES: It is. Nothing carries.
13 D YAZZIE: Not even sound. Not even, y'know, gossip.
14 D JUNE: Ben.
15 D YAZZIE: What? I'm only saying.
16 A ¶ The Stranger takes a step forward.
17 A Everyone turns, then politely turns back.
18 D CORDELIA: And who is our guest?
19 D STRANGER: We haven't met, ma'am. I came in with the supply crew.
20 D COMMANDER LINDQVIST: He's the new relief mechanic. Name of Pryce. Mr. Pryce, sit down.
21 D PRYCE: Thank you, Commander.
22 A ¶ He takes the empty chair.
23 A Okonkwo-Reyes studies him over her notebook.
24 D OKONKWO-REYES: Mr. Pryce, forgive me. The crew manifest for last Thursday's flight lists twelve passengers. Twelve names. None of them yours.
25 D PRYCE: I came on the second shuttle.
26 D OKONKWO-REYES: There was no second shuttle.
27 A ¶ Silence.
28 A June's spoon stops.
29 A Yazzie's salt packet bursts, scattering white on the table like frost.
30 D COMMANDER LINDQVIST: Dr. Okonkwo-Reyes--
31 D PRYCE: It's all right, Commander. She's right.
32 A ¶ He rises.
33 A Straightens his jacket.
34 A Takes off the station badge and lays it on the table, face up.
35 D PRYCE [CONT'D]: My name is Pryce. I'm the chairman of the board that signed off on this station. I came to see for myself whether the stories were true.
36 D CORDELIA (coolly): What stories?
37 D PRYCE: That the telescope hasn't worked since March. That the funding was diverted. That everyone at this table has been lying to Earth for six months.
38 A ¶ Nobody moves.
39 A The earthlight, blue and enormous, slides a finger of shadow across the dome.
40 D COMMANDER LINDQVIST: Mr. Pryce. Before you say another word, I'd ask you to look up.
41 A ¶ Pryce looks up.
42 A Through the dome, far off, a point of light blooms and pulses.
43 A Then another.
44 A Then a ring of them, pale as pearls, arranged in a perfect circle.
45 D PRYCE: What am I looking at?
46 D COMMANDER LINDQVIST: The reason we stopped reporting.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01882.json
### SCENE s01882 | INT. PROVINCIAL RAILWAY WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SIMONE DUVALIER, HENRIK ASTRUP
1 A ¶ A potbellied stove.
2 A A clock that has been wrong for years.
3 A Two benches.
4 A One lamp.
5 A SIMONE DUVALIER (60s, widow's black, one suitcase) sits stiffly.
6 A HENRIK ASTRUP (60s, overcoat, cane) sits on the other bench, not looking at her.
7 D SIMONE: You have been staring at that clock for an hour.
8 D HENRIK: It's wrong.
9 D SIMONE: It has been wrong since the war.
10 D HENRIK: Then why don't they fix it?
11 D SIMONE: Perhaps they prefer it that way. Perhaps everyone who passes through here prefers one clock that lies.
12 D HENRIK: Madame, do I know you?
13 D SIMONE: No.
14 D HENRIK: You look at me as though I should.
15 D SIMONE: You are mistaken. I was looking at your cane.
16 D HENRIK: It was my father's.
17 D SIMONE: It is a handsome cane.
18 D HENRIK: It was the only thing he left me. That and a quarrel I never finished.
19 D SIMONE: With whom?
20 D HENRIK: With him. He died before I could win it.
21 D SIMONE (a small laugh): Those are the ones that last. The quarrels with the dead.
22 D HENRIK: You speak as one who knows.
23 D SIMONE: I buried a husband in March. We were not speaking when he fell ill. I thought there would be a better time.
24 D HENRIK: There never is.
25 D SIMONE: No.
26 D HENRIK: Where do you travel?
27 D SIMONE: To my sister's. She lives at the end of the line. She has not spoken to me in twenty years, and she has written to say she is dying.
28 D HENRIK: And you will go?
29 D SIMONE: I have a ticket.
30 D HENRIK: That is not an answer.
31 D SIMONE: It is the only one I have tonight.
32 D HENRIK (after a moment): My train comes at seven. I am going to my son. He has not spoken to me in nine years.
33 D SIMONE: Then we are both late.
34 D HENRIK: It would seem so.
35 D SIMONE: Do you know what I think, Monsieur Astrup?
36 D HENRIK: You know my name.
37 D SIMONE: It is on your suitcase. I have read it eleven times.
38 D HENRIK (smiling for the first time): Then you may as well call me Henrik.
39 D SIMONE: Simone.
40 D HENRIK: Simone. What do you think?
41 D SIMONE: I think the clock is not wrong at all. I think it shows the hour when each of us should have left.
42 D HENRIK: And what hour is it?
43 D SIMONE: For you, nine years ago. For me, twenty.
44 D HENRIK: Then let us be early for the next one.
45 A ¶ A whistle in the distance.
46 A Both rise.
47 A He offers his arm.
48 A She takes it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01883.json
### SCENE s01883 | INT. UNDERWATER HABITAT KITCHEN, SEA STATION ALDEBARAN - NIGHT
Detected names (may be incomplete or contain aliases): ZEKE, ROMANOV-ABARA, TAMSIN VOYLE, NIMA TSERING
1 A ¶ Steel counters.
2 A Portholes full of black.
3 A A kettle ticks as it cools.
4 A ¶ EZEKIEL "ZEKE" ROMANOV-ABARA (50s, lined face, heavy cardigan) stands at the counter slicing bread into even squares.
5 A TAMSIN VOYLE (30s, shaved head, rubber gloves) dries a plate she has dried before.
6 A She watches the water rather than him.
7 A ¶ He sets the knife down.
8 A She sets the plate down.
9 A Neither speaks.
10 A Pipes knock somewhere far off.
11 A ¶ He pours two cups of tea.
12 A Slides one toward her.
13 A She lets it sit and cool.
14 A ¶ He sits.
15 A She does not.
16 A After a while she picks up the cup, looks into it, and puts it back without drinking.
17 A His eyes follow her hand.
18 A ¶ He turns the bread over.
19 A She turns her back.
20 A ¶ At the porthole, a pale shape glides past: a long, slow, luminous thing.
21 A They both see it.
22 A Neither remarks on it.
23 A He folds his hands.
24 A She wipes the counter, which is already clean.
25 A ¶ A hatch clunks.
26 A NIMA TSERING (20s, wool cap, tool belt) comes in with a clipboard, hesitates, reads the room like a gauge.
27 D NIMA: Pressure's holding. Thought you'd want to know.
28 D ZEKE: Thank you.
29 D NIMA: Is everything all right?
30 D TAMSIN (very evenly): Fine.
31 A ¶ Nima waits.
32 A Nobody adds anything.
33 A She nods, writes something down, and goes.
34 A The hatch clunks again.
35 A ¶ He takes a slice of bread, tears it in half, and offers her one piece.
36 A She looks at it.
37 A She takes it.
38 A Eats.
39 A They both look at the porthole, where the shape has returned and is now circling.
40 D ZEKE: It follows the light.
41 D TAMSIN: So do we.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01884.json
### SCENE s01884 | INT. COMMUNITY CENTER BASEMENT, BINGO NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): MAGS, DELACOURT-PIKE, DARNELL FONTAINE, LORRAINE FONTAINE, STRANGER, CALVIN
1 A ¶ Folding tables, fluorescent flicker, a coffee urn the size of a toddler.
2 A Forty chairs, eleven players.
3 A A cage of numbered balls spins slowly.
4 A ¶ Behind the microphone, MARGUERITE "MAGS" DELACOURT-PIKE (60s, cardigan, rhinestone glasses) holds a ball.
5 A At table three, DARNELL FONTAINE (30s, delivery uniform) hunches over four cards.
6 A Beside him, his mother LORRAINE FONTAINE (60s, church hat) marks each number with a stub of crayon.
7 D MAGS: B-nine.
8 D LORRAINE: That's yours.
9 D DARNELL: I know it's mine.
10 D MAGS: I-twenty-two.
11 D DARNELL: Mama, I told you I'd come on Thursday.
12 D LORRAINE: You said Thursday, and then you said Friday, and then you said next week.
13 D MAGS: N-forty-one.
14 D DARNELL: I've been working doubles.
15 D LORRAINE: Doing what?
16 D DARNELL: Deliveries. The same as last time you asked.
17 D MAGS: G-fifty-six.
18 D LORRAINE (marking): Funny. I called the depot. They said you quit in May.
19 A ¶ Darnell's crayon stops.
20 A He puts it down.
21 D DARNELL: You called my work.
22 D LORRAINE: I called a number on your jacket.
23 D MAGS: O-seventy-one.
24 A ¶ A STRANGER (40s, windbreaker, clipboard) sits at the edge of table three.
25 A Nobody saw him arrive.
26 D STRANGER: Mr. Fontaine. I'm sorry to interrupt.
27 D DARNELL: Who are you?
28 D STRANGER: Calvin Ortega, county clerk's office. You missed three hearings.
29 D LORRAINE: What hearings?
30 D DARNELL: Mama, don't.
31 D CALVIN: I only need a signature, sir. Right here.
32 D MAGS: Table three, keep it down, please. B-four.
33 A ¶ Darnell takes the pen.
34 A Signs.
35 A His hand shakes.
36 A Lorraine reads the form over his shoulder, then looks at the cards, then at him.
37 D LORRAINE: You lost the apartment.
38 D DARNELL: In June.
39 D LORRAINE: Where have you been sleeping?
40 D DARNELL: In the van. Until they took the van.
41 D MAGS: B-nine. Again. Somebody's got a B-nine.
42 A ¶ Lorraine stands.
43 A The chair scrapes.
44 A Heads turn.
45 A She takes off her church hat and puts it down on the table, very gently, like laying a flag.
46 D LORRAINE: You come home. Tonight.
47 D DARNELL: Mama--
48 D LORRAINE: I am not asking.
49 D DARNELL (rising, voice cracking): Why are you doing this here? In front of everyone?
50 D LORRAINE: Because everywhere else you stop picking up the phone.
51 A ¶ He flings the cards.
52 A They scatter.
53 A Marked or not, they rain across the floor.
54 D DARNELL: I didn't want you to see me like this!
55 D MAGS: Table three!
56 D DARNELL: Like what? Like a man who failed?
57 A ¶ Calvin retreats three steps, clipboard raised like a shield.
58 A Mags has gone silent, one ball in her fist.
59 A Eleven players watch.
60 A The cage creaks once more and stops.
61 D LORRAINE: Like my son.
62 A ¶ He stands there.
63 A She does not move.
64 A Mags, very softly, into the microphone.
65 D MAGS: Bingo, I think. If anyone's asking.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01885.json
### SCENE s01885 | INT. GLASSBLOWER'S STUDIO, MURANO - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CHIARA BELLINI-OKADA, ELIAS WARDLAW
1 A ¶ The furnace roars.
2 A Orange light on every wall.
3 A CHIARA BELLINI-OKADA (30s, leather apron, burn scars on both forearms) turns a rod of molten glass.
4 A ELIAS WARDLAW (30s, rumpled linen, a stranger to heat) stands too close to the bench with a notebook.
5 D ELIAS (to the room): Is it always this hot?
6 D CHIARA: Always. You'll melt before the glass does.
7 A ¶ They laugh.
8 A The glass swells on the pipe, a glowing teardrop, and for a moment the studio feels very small and very kind.
9 A ¶ He steps in to see.
10 A She swings the rod without looking.
11 A The blob drips to the floor.
12 A They both leap back, collide, and fall in a heap, his notebook skidding under the bench.
13 D ELIAS: I am so sorry.
14 D CHIARA: You should be.
15 A ¶ She is laughing again.
16 A He is not.
17 D ELIAS (muttering): Stupid. Stupid. Stupid.
18 A ¶ She reaches over, tilts his chin toward the light, and inspects a small red mark on his jaw.
19 D CHIARA: You're burned.
20 D ELIAS: I'm fine.
21 D CHIARA: Hold still.
22 A ¶ They freeze.
23 A Her thumb rests on his cheek.
24 A The furnace roars.
25 A Neither breathes.
26 D CHIARA [CONT'D] (quietly): My father says never look at the fire. Only at the glass.
27 D ELIAS: And where do I look?
28 A ¶ She doesn't answer.
29 A He does not look at the glass.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01886.json
### SCENE s01886 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): GIGI, HALVORSEN, DEZ, OYELARAN-PRICE, MARI, CASTELLANOS
1 A ¶ Dust.
2 A A cracked dome.
3 A The projector sits in the center like a sleeping insect.
4 A Three flashlights wander across the ceiling, snagging on fallen plaster.
5 A ¶ GRETA "GIGI" HALVORSEN (17, hoodie, camera around her neck) climbs onto the star-seat rail.
6 A DESMOND "DEZ" OYELARAN-PRICE (18, varsity jacket, sweating) follows.
7 A MARISOL "MARI" CASTELLANOS (17, headlamp, cracked phone) stays at the door, one hand on the frame.
8 D GIGI: Dez. Mari. Check it out. It's still plugged in.
9 D DEZ: Gigi, nothing here is plugged in.
10 D GIGI: Tell that to the little red light.
11 A ¶ She points.
12 A A tiny red diode on the projector's base, glowing steadily.
13 A Dez swallows.
14 A Mari lowers her phone.
15 D MARI: Gigi, I'm serious. Let's go.
16 D GIGI: We came all this way, Mari.
17 D MARI: We came because you dared us. I'm daring us the other way.
18 D DEZ: She has a point, Gigi.
19 D GIGI: You two are such babies.
20 A ¶ She crosses to the projector and wipes the dust from the lens with her sleeve.
21 A Dez hovers at her shoulder, and Mari edges in from the doorway, until all three huddle around the old machine, flashlights pooled on its brass.
22 D DEZ: Don't touch the switch.
23 D GIGI: Don't tell me what to touch.
24 D MARI: Seriously, Gigi, don't.
25 A ¶ Gigi touches the switch.
26 A Click.
27 A Nothing.
28 A Then, far overhead, a hum.
29 A The dome fills with stars: soft, warm, and wrong, slowly drifting out of order, constellations sliding into new shapes.
30 D MARI [CONT'D]: That's not the sky.
31 D DEZ: It's a planetarium, Mari. It's supposed to not be the sky.
32 D GIGI (whispering): It's beautiful.
33 A ¶ She raises her camera and the shutter clicks.
34 A Stars turn.
35 A The shapes settle into letters, then words.
36 A All three read them together without meaning to.
37 D DEZ: "Gigi. Dez. Mari."
38 D MARI: It knows our names.
39 D GIGI (lowering the camera): It's a trick. Someone planned this.
40 D DEZ: Who? Nobody knew we were coming.
41 D MARI: I told no one. I swear.
42 D GIGI: Then who wrote it?
43 A ¶ The stars shift again.
44 A One more word, slowly forming.
45 A ¶ "STAY."

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01920.json
### SCENE s01920 | INT. ABANDONED GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS BRANDT, WREN CALLOWAY, JEB MOSS, INES VALDEZ, CUTTER RAINE, DOC AMBROSE FINCH, DOC
1 A ¶ Dust hangs in lantern light.
2 A Wind moans through the slats.
3 A Sacks of rotted feed are stacked into a crude barricade.
4 A ¶ HOLLIS BRANDT, 50s, county sheriff, grey mustache, crouches behind the sacks with a Winchester.
5 A Beside him, WREN CALLOWAY, 19, deputy, freckled and shaking, thumbs shells into a revolver.
6 D HOLLIS: Count 'em again.
7 D WREN: Same as before. Three on the ladder side.
8 A ¶ A shot punches through the slats.
9 A Splinters rain on Hollis's hat.
10 A ¶ At the far wall, JEB MOSS, 40s, a wiry prisoner in irons, grins from a post he's chained to.
11 D JEB: Sheriff, my brother don't miss twice.
12 D HOLLIS: Then quit talking and give him a reason to miss.
13 A ¶ INES VALDEZ, 30s, a rancher's widow in a duster, kneels by the trap door, shotgun across her knees.
14 A She does not look up.
15 D INES: They're cutting the rope below us.
16 D WREN: What rope?
17 D INES: The one holding the stairs, son.
18 A ¶ The floor lurches.
19 A Everyone grabs something.
20 A Jeb laughs, rattling his chain.
21 D CUTTER RAINE [O.S.]: Send out Jeb and nobody dies!
22 A ¶ Hollis levels the Winchester at the trap door.
23 D HOLLIS: Cutter, I got six men and a hundred rounds.
24 D CUTTER RAINE [O.S.]: You got four and a lamp.
25 A ¶ Ines racks the shotgun.
26 A Wren swallows.
27 A ¶ Boots clatter on the ladder.
28 A The trap door flies up.
29 A CUTTER RAINE, 30s, black duster, scarred jaw, rises into the light with both hands out.
30 D CUTTER: Hold your fire. I'm coming up to talk.
31 D HOLLIS: Talk from there.
32 A ¶ Cutter smiles and keeps climbing.
33 A ¶ Behind him, a second figure hauls into view: DOC AMBROSE FINCH, 60s, bald, round spectacles, a medical bag in one hand and a stick of dynamite in the other.
34 D DOC: Evening, all. Nobody move.
35 A ¶ Hollis swings the barrel onto Doc.
36 A Ines swings hers onto Cutter.
37 A Wren points at everything.
38 D JEB: Well, now.
39 A ¶ Silence.
40 A Wind.
41 A The dynamite fuse hisses, lit.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01921.json
### SCENE s01921 | INT. FERRY SNACK BAR - NIGHT
Detected names (may be incomplete or contain aliases): MAEVE LINDQVIST, DESMOND OKAFOR, GUS TREMBLAY, PRIYA RAMANATHAN, ODALYS FERREIRA
1 A ¶ A rolling sea outside the salt-streaked windows.
2 A Fluorescent lights buzz.
3 A Plastic chairs are bolted to the floor.
4 A ¶ MAEVE LINDQVIST, 30s, rain jacket, clutches a paper cup.
5 A DESMOND OKAFOR, 30s, rumpled suit, stands across the counter from her, a ring box in his fist.
6 D DESMOND: I had a speech.
7 D MAEVE: You always have a speech.
8 A ¶ GUS TREMBLAY, 60s, the snack bar attendant, wipes the counter and pretends to be deaf.
9 D DESMOND: Maeve, the ferry leaves the dock in nine minutes. If you're getting off--
10 D MAEVE: I'm not getting off.
11 D DESMOND: Then why'd you text me?
12 A ¶ PRIYA RAMANATHAN, 20s, Maeve's sister, bursts through the door, soaked, suitcase in tow.
13 D PRIYA: Because she's an idiot, that's why!
14 D MAEVE: Priya!
15 D GUS (to nobody): I'll just be over here.
16 D DESMOND: You told your sister?
17 D PRIYA: She told me everything. The ring, the job in Oslo, the--
18 D MAEVE: Stop talking.
19 D PRIYA: --the fact you cried in a car wash.
20 D MAEVE: It was a very sad car wash!
21 D DESMOND: Wait, Oslo?
22 A ¶ The ferry lurches.
23 A Desmond and Maeve grab the counter at the same time.
24 A Their hands land together.
25 A Both freeze.
26 A Priya gasps.
27 A Gus drops his rag.
28 D PRIYA: Oh my God. Kiss her, you coward.
29 D DESMOND: Maeve, are you leaving?
30 D MAEVE: I was asked to. I said no. I just didn't tell you.
31 D GUS: Smart girl.
32 A ¶ ODALYS FERREIRA, 50s, in a captain's cap and a stained apron, shoulders in with a tray of lemon cake.
33 A She stops.
34 D ODALYS: Who ordered the proposal?
35 A ¶ Desmond drops to one knee.
36 A The ring box pops open.
37 A A huge wave slams the hull, and the lemon cake lands on Priya's suitcase.
38 D DESMOND: Marry me or I throw up, I swear to God.
39 D MAEVE: Yes! Yes, get up!
40 A ¶ Priya shrieks.
41 A Gus applauds.
42 A Odalys snatches the ring box and examines it.
43 D ODALYS: Cheap setting. Good stone.
44 A ¶ Desmond stands.
45 A Maeve grabs his collar.
46 A They kiss as the ship horn blasts.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01922.json
### SCENE s01922 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): TEO MARCHETTI, LULA BRIGHTWATER, HAMID ZAIDI, ESTELLE VANTERPOOL
1 A ¶ A cramped cinderblock room lit by the glow of the projector.
2 A The reel clatters.
3 A Below, through a small window, a sea of parked cars and a flickering screen.
4 A ¶ TEO MARCHETTI, 16, skinny, in a paper hat from the snack bar, threads film with careful hands.
5 A Behind him, LULA BRIGHTWATER, 16, braids and a denim jacket, sits on an upturned crate, swinging her feet.
6 D LULA: You said your uncle wouldn't be here tonight.
7 D TEO: He isn't. He's in Tulsa.
8 D LULA: Then why are you sweating?
9 D TEO: It's a hundred degrees in here.
10 A ¶ HAMID ZAIDI, 17, Teo's best friend, slouches in the doorway with a bag of popcorn and a smirk.
11 A He has not been invited.
12 D HAMID: Marchetti. Heard you were showing a double feature up here. Me and Lula.
13 D TEO: Nobody said that.
14 D HAMID: Lula said it. At the pool.
15 A ¶ Lula stops swinging her feet.
16 A Teo looks at her.
17 A She looks at the floor.
18 D LULA: I said we might hang out. That's different.
19 D HAMID: It's the same thing, apparently.
20 D TEO: Hamid, go back downstairs.
21 D HAMID: You can't tell me what to do. You're a guy in a paper hat.
22 A ¶ Teo's jaw tightens.
23 A He turns off the second projector and stands, gripping the reel in his fist like something he might throw.
24 D TEO: Say it again.
25 D LULA: Teo, don't.
26 A ¶ MRS. ESTELLE VANTERPOOL, 60s, the theater owner, in a cardigan and orthopedic shoes, appears in the doorway behind Hamid.
27 A She taps a flashlight against her palm.
28 D MRS. VANTERPOOL: Mr. Marchetti. Why is the screen showing a blank sheet?
29 A ¶ Teo drops the reel.
30 A It rolls across the floor and stops at her feet.
31 D TEO: It's my fault, Mrs. Vanterpool. All of it.
32 A ¶ She picks it up, studies the three of them, and hands the reel back to Teo.
33 D MRS. VANTERPOOL: Then you can fix it. And your friends can buy their own popcorn.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01923.json
### SCENE s01923 | EXT. SALT FLAT STAGE RELAY STATION - DAY
Detected names (may be incomplete or contain aliases): AMOS TIBBET, NELL HARGROVE, SOFT, BARRAGAN
1 A ¶ White nothing in every direction.
2 A A low adobe station with a sagging porch squats in the glare.
3 A A water trough.
4 A A hitching rail with one tired mule.
5 A ¶ AMOS TIBBET, 60s, stationmaster, bent as a hook, sits on the porch mending a harness.
6 A NELL HARGROVE, 40s, in a dusty traveling coat, stands at the trough holding a battered carpetbag.
7 D AMOS: Stage is late.
8 D NELL: Stage is always late, I'm told.
9 D AMOS: Not this late.
10 A ¶ She dips a cup in the trough, sniffs it, and drinks anyway.
11 D NELL: How long since you've seen anyone?
12 D AMOS: Eleven days. Unless you count the mule.
13 D NELL: I count the mule.
14 A ¶ Amos chuckles, a dry sound like paper tearing.
15 A He sets the harness aside.
16 D AMOS: You headed west?
17 D NELL: I'm headed away.
18 A ¶ A dust plume lifts on the horizon.
19 A Amos squints.
20 A Nell shades her eyes.
21 D NELL [CONT'D]: That your stage?
22 D AMOS: That's a man on a horse.
23 A ¶ They watch.
24 A The plume grows.
25 A A rider takes shape: YUSUF "SOFT" BARRAGAN, 30s, narrow face, long coat, leading a second horse with an empty saddle.
26 A ¶ He stops at the rail, dismounts slowly, and tips his hat at Amos.
27 A Then at Nell.
28 A Then he walks to the trough, kneels, and splashes his face.
29 D SOFT: Morning.
30 D AMOS: Afternoon.
31 D NELL: Almost evening.
32 D SOFT: That so.
33 A ¶ He drinks.
34 A The three of them are silent.
35 A The mule flicks an ear.
36 D AMOS: You're a long way from anywhere, friend.
37 D SOFT: So's everyone out here.
38 D NELL: Whose is the empty horse?
39 D SOFT: Mine, once.
40 A ¶ Nell and Amos exchange a glance.
41 A Soft wipes his face on his sleeve and looks at the sky.
42 D SOFT [CONT'D]: Don't worry. I'm not here for either of you.
43 D AMOS: Good.
44 D NELL: Good.
45 D AMOS: Nobody's ever here for anybody.
46 D NELL: Everybody's here for something.
47 D AMOS: Coffee's on the stove.
48 D SOFT: I'll take it.
49 D NELL: I'll take it too.
50 A ¶ Amos rises, knees cracking, and shuffles inside.
51 A Nell sits on the edge of the porch.
52 A Soft sits at the other end.
53 A Neither speaks.
54 A The sun beats down.
55 D AMOS [O.S.]: Cups are chipped!
56 D SOFT: Fine by me.
57 D NELL: Fine by me.
58 A ¶ They both stand and walk toward the door.
59 A They collide in the narrow frame.
60 A Both stop.
61 A Both step back.
62 A Both gesture at the other to go first.
63 D NELL [CONT'D]: After you.
64 D SOFT: After you.
65 A ¶ Amos reappears with three tin cups and a steaming pot.
66 A He looks from one to the other and sighs.
67 D AMOS: Sit. Both of you. Before I lose my patience.
68 A ¶ They sit.
69 A Amos pours.
70 A Nobody drinks.
71 D SOFT: Thank you.
72 D NELL: Thank you.
73 D AMOS: Quit that.
74 A ¶ The mule brays.
75 A In the distance, faint as a thread, the sound of a coach horn.
76 D NELL: That's the stage.
77 D AMOS: Finally.
78 D SOFT: Then I'll be going.
79 D NELL: Then I'll be going too.
80 A ¶ They look at each other.
81 A Neither moves.
82 A The horn sounds again, closer.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01924.json
### SCENE s01924 | INT. LONDON TELEGRAPH OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH, MISS PHILIPPA GRAY, ALISTAIR HOBB, CONSTABLE JOSIAH DREW
1 A ¶ Gas lamps hiss.
2 A Brass instruments click on a long oak counter.
3 A Rain streaks the high windows.
4 A ¶ LADY CORDELIA ASHWORTH, 40s, black mourning silk, stands at the counter.
5 A She grips a folded paper so hard it crumples.
6 A Behind the counter, MISS PHILIPPA GRAY, 20s, the night clerk, ink on her fingers, watches her with wide eyes.
7 D LADY CORDELIA: I must send it tonight.
8 D MISS GRAY: The line to Calais is down, my lady.
9 D LADY CORDELIA: Then send it by the northern route.
10 D MISS GRAY: There's no northern route after ten.
11 A ¶ She takes a step closer.
12 A She sets the paper on the counter.
13 A She does not let go of it.
14 D LADY CORDELIA: My husband's creditors will be at my door by dawn.
15 D MISS GRAY: I'm sorry for it.
16 A ¶ She pulls the paper away.
17 A She reads it.
18 A Her face changes.
19 D MISS GRAY [CONT'D]: This is addressed to a Mr. Hobb at the Admiralty.
20 D LADY CORDELIA: It is.
21 A ¶ The door opens.
22 A A gust of wet air.
23 A MR. ALISTAIR HOBB, 50s, stout, bowler hat, an umbrella dripping on the floorboards, steps inside.
24 A He sees them both and stops.
25 D MR. HOBB: Lady Ashworth. I was told I might find you here.
26 D LADY CORDELIA: By whom?
27 D MR. HOBB: By him.
28 A ¶ CONSTABLE JOSIAH DREW, 30s, blue coat, truncheon at his belt, enters behind him and shuts the door.
29 A He leans against it.
30 D CONSTABLE DREW: Evening, ladies.
31 A ¶ She steps back from the counter.
32 A She raises her chin.
33 A The clerk takes a half step behind the brass machines.
34 D MISS GRAY: Constable, this is a public office.
35 D CONSTABLE DREW: And that is a private telegram, miss.
36 A ¶ He holds out a hand.
37 A She hesitates, then places the paper in it.
38 A He unfolds it and reads.
39 D MR. HOBB: It names three of my colleagues.
40 D LADY CORDELIA: It names the ones who took his money.
41 A ¶ She turns away.
42 A She presses her fingers to her lips.
43 A The clerk watches her, then looks at the constable.
44 A He folds the telegram in half.
45 A He pockets it.
46 D CONSTABLE DREW: There was no telegram.
47 D MISS GRAY: There was not.
48 D MR. HOBB: Constable, I must object--
49 D CONSTABLE DREW: Mr. Hobb, it's raining. Go home.
50 A ¶ He opens the door.
51 A Mr. Hobb stands very still, then jams his bowler on and goes out into the dark.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01925.json
### SCENE s01925 | INT. DRIVE-THROUGH PET CREMATORIUM - DAY
Detected names (may be incomplete or contain aliases): NORBERT FENWICK, INTERCOM VOICE, CASSIUS OYELARAN
1 A ¶ A cheerful pastel lobby with a bell on the counter and a drive-up window.
2 A A framed poster reads "FOREVER FRIENDS."
3 A ¶ NORBERT FENWICK, 50s, in a lanyard, sits peacefully with a mug of tea and a crossword.
4 A ¶ An INTERCOM crackles on the wall.
5 D INTERCOM VOICE [V.O.]: Hello? I'd like to drop off my hamster.
6 D NORBERT: Of course. Pull up to the window and we'll take care of everything.
7 D INTERCOM VOICE [V.O.]: He's very special.
8 D NORBERT: They always are.
9 D INTERCOM VOICE [V.O.]: He's, um, a big hamster.
10 D NORBERT (into intercom): Sir, we do all sizes.
11 A ¶ The door bursts open.
12 A CASSIUS OYELARAN, 40s, a rancher's hat and a wheelbarrow, rolls in a limp, truck-sized capybara draped in a bedsheet.
13 D CASSIUS: I couldn't wait in the line.
14 A ¶ Norbert sets down his tea.
15 A He stares at the wheelbarrow.
16 A He stares at the intercom.
17 D NORBERT: Then who's on the intercom?
18 A ¶ The intercom crackles.
19 D INTERCOM VOICE [V.O.]: That would be his wife.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01926.json
### SCENE s01926 | INT. LAUNDROMAT - 2 A.M.
Detected names (may be incomplete or contain aliases): RUBY ACHTERBERG, DOMI, PELLEGRINO, KWABENA ASARE, SHOSHANA BLUM
1 A ¶ A buzzing sign: "OPEN 24 HRS."
2 A Rows of dryers tumble in sleepy rhythm.
3 A The floor is sticky.
4 A A TV above the folding table plays infomercials on mute.
5 A ¶ RUBY ACHTERBERG, 17, in an oversized hoodie, sits on a dryer, legs dangling, eating gummy worms.
6 A Across from her, DOMINIC "DOMI" PELLEGRINO, 17, stands guard over a laundry bag.
7 D RUBY: Domi, you've been folding that sock for ten minutes.
8 D DOMI: It's a delicate operation.
9 A ¶ KWABENA ASARE, 18, a lanky skateboarder with a broken wrist in a cast, slips through the door, board under his good arm.
10 A SHOSHANA BLUM, 17, in a prom dress and combat boots, follows two steps behind.
11 D KWABENA: Look who's still alive.
12 D DOMI: Kwabena. You're supposed to be at the hospital.
13 D KWABENA: Hospital's boring. Shoshana drove.
14 D SHOSHANA: I did not drive. I steered. Your skateboard did the rest.
15 D RUBY: She means she dragged him on it.
16 D SHOSHANA: Ruby, you're not helping.
17 A ¶ Domi drops the sock.
18 A He walks up to Shoshana, close.
19 D DOMI: Why are you wearing a prom dress at two a.m.?
20 D SHOSHANA: Because someone asked me and then left me at the punch bowl.
21 A ¶ Ruby slides off the dryer.
22 A Kwabena looks at his shoes.
23 D RUBY: Kwabena. Tell me you did not.
24 D KWABENA: I got a call about the cast, okay? I had to go!
25 D SHOSHANA: You told me it was an emergency. It was a cast.
26 D DOMI: You left her at prom for a cast?
27 D KWABENA: It hurt, Domi!
28 A ¶ Domi shoves Kwabena.
29 A Kwabena stumbles into a dryer and drops the board.
30 A Ruby grabs Domi's arm.
31 A Shoshana kicks the board away.
32 D RUBY: Enough! All of you!
33 D SHOSHANA: Ruby, let him hit me. I want to know what it feels like.
34 D DOMI: I'm not hitting you!
35 D KWABENA: Then why are you shouting?
36 A ¶ Silence.
37 A A dryer buzzes and the door pops open.
38 A A single red sock rolls out and spins to a stop on the tile.
39 A ¶ Ruby picks it up.
40 A She holds it out to Domi.
41 A He takes it.
42 A His hand is shaking.
43 D DOMI: Sorry, Shosh.
44 D SHOSHANA: Sorry, Kwabena. I did steer.
45 D KWABENA: You steered fine.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01927.json
### SCENE s01927 | INT. SLEEP SHACK MATTRESS SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): LEN HASHIMOTO, MILTON VOSS, PHYLLIS
1 A ¶ A beige warehouse of identical beds under cheap track lights.
2 A A banner reads "EVERYTHING MUST GO."
3 A Soft elevator music plays from a ceiling speaker.
4 A ¶ LEN HASHIMOTO, 40s, salesman, short-sleeved dress shirt and a tie with a stain.
5 A He's laid out across a king-size mattress, eyes closed, arms folded like a pharaoh.
6 A ¶ MILTON VOSS, 60s, the owner, bald, sweater vest, enters from the back office.
7 A He stops at the foot of the bed.
8 D MILTON: Len.
9 D LEN (eyes closed): I'm testing the product.
10 D MILTON: It's ten in the morning.
11 D LEN: It's a firm that doesn't feel firm. That takes research.
12 A ¶ Milton sighs and sits on the next bed.
13 A He bounces once.
14 A A spring groans.
15 A ¶ The store phone RINGS.
16 A Milton lifts the cordless handset and holds it away from his ear.
17 A A tiny, cheerful voice chirps from the speaker.
18 D PHYLLIS [V.O.]: Is this Sleep Shack? I'd like to return the mattress.
19 D MILTON: Of course, Phyllis. Which one?
20 D PHYLLIS [V.O.]: The one you sold me in 1998.
21 A ¶ Milton covers the phone.
22 A Len opens one eye.
23 D LEN: She's calling again?
24 D MILTON: She says it's lumpy.
25 D LEN: It's a bed, Milt. It's supposed to be lumpy. It's an emotional lump.
26 A ¶ Milton uncovers the phone.
27 D MILTON: Phyllis, we have a lifetime guarantee. Bring it in and we'll look at it.
28 D PHYLLIS [V.O.]: I'm calling from the mattress.
29 A ¶ Silence.
30 A Len sits up.
31 A Milton stares at the handset.
32 D LEN: Where's she calling from?
33 D MILTON (muted): She says the mattress.
34 D LEN: Tell her we'll send a truck.
35 D MILTON (into phone): We'll send a truck.
36 D PHYLLIS [V.O.]: Please hurry. It's very soft in here.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01928_0.json
### SCENE s01928_0 | EXT. BACKYARD - TENT - NIGHT
Detected names (may be incomplete or contain aliases): 
1 A ¶ A small green tent lit from inside by a flashlight.
2 A Crickets.
3 A A sprinkler ticks in the neighbor's yard.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01928_1.json
### SCENE s01928_1 | INT. TENT - CONTINUOUS
Detected names (may be incomplete or contain aliases): ROZ ABERNATHY, MILO ABERNATHY, CALVIN
1 A ¶ ROZ ABERNATHY, 38, in a bathrobe over scrubs, sits cross-legged on a sleeping bag.
2 A Across from her, MILO ABERNATHY, 8, holds a flashlight under his chin.
3 A A cell phone leans against a thermos between them, on speaker.
4 D MILO: Are you sure he can hear us?
5 D ROZ: He can hear us.
6 D CALVIN [V.O.] (over phone, crackling): I can hear you, buddy. The connection's only a little bit bad.
7 D MILO: Dad, it's cold in the tent.
8 D CALVIN [V.O.]: Is it? Over here it's so hot I could fry an egg on my helmet.
9 D ROZ: Calvin.
10 D CALVIN [V.O.]: Sorry. Lieutenant's rules. No jokes about eggs.
11 D MILO: Dad, when are you coming home?
12 D CALVIN [V.O.]: Three more weeks, kiddo. Maybe less.
13 D MILO: Mom said it was five.
14 D ROZ: I said around five.
15 D CALVIN [V.O.]: Your mom's a lawyer about it. She's always right.
16 D ROZ: I'm a nurse.
17 D CALVIN [V.O.]: That too.
18 D MILO: Dad, do you see the same moon?
19 D CALVIN [V.O.]: I think so. Is it the one with the face?
20 D MILO: It's the one with the face.
21 D CALVIN [V.O.]: Then I see it. I'm looking right at it.
22 D ROZ: Milo, tell Dad what you did at school.
23 D MILO: I got a sticker for reading out loud.
24 D CALVIN [V.O.]: What book?
25 D MILO: The one about the bear who can't sleep.
26 D CALVIN [V.O.]: I love that one. Did you do the bear voice?
27 D MILO (low growl): Grrr, I can't sleep.
28 D CALVIN [V.O.]: That's perfect. That's the best bear I ever heard.
29 D ROZ: It's a quarter to ten, baby.
30 D MILO: Five more minutes.
31 D CALVIN [V.O.]: Listen to your mom.
32 D MILO: Okay. Goodnight, Dad.
33 D CALVIN [V.O.]: Goodnight, Milo. Tell the moon I said hello.
34 D MILO: I will.
35 D ROZ: Goodnight, Calvin.
36 D CALVIN [V.O.]: Love you both.
37 D ROZ: Love you.
38 D MILO: Love you.
39 A ¶ The line clicks.
40 A The flashlight flickers and goes out.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01929.json
### SCENE s01929 | INT. TAXIDERMY CONVENTION - HOTEL BALLROOM - DAY
Detected names (may be incomplete or contain aliases): PERCIVAL TANG, BIRGITTA LOWE, FRANCO BAPTISTE, HESTER KIMURA, LUDO KARLSSON, TALL WOMAN, ZOFIA
1 A ¶ Rows of folding tables display mounted pheasants, a wild boar in a bow tie, and one very surprised-looking badger.
2 A A banner overhead reads "STUFFED & PROUD."
3 A ¶ PERCIVAL TANG, 50s, tweed jacket, nametag crooked, stands behind a table with a glass case of owls.
4 A Beside him, BIRGITTA LOWE, 40s, in a lab coat, polishes a fox's eye with a handkerchief.
5 A FRANCO BAPTISTE, 30s, goatee and leather apron, argues with HESTER KIMURA, 60s, a judge with a clipboard, about a moose.
6 A LUDO KARLSSON, 20s, a nervous intern, stacks brochures into leaning towers.
7 A ¶ A TALL WOMAN, 40s, in a black raincoat and sunglasses, stalks down the aisle and stops at the owl case.
8 A She leans in until her nose nearly touches the glass.
9 D TALL WOMAN: Are these real?
10 D PERCIVAL: Madam, every feather is authentic.
11 D TALL WOMAN: That's not what I asked.
12 A ¶ Birgitta and Percival exchange a look.
13 A Hester stops mid-sentence.
14 A Franco keeps arguing with her about the moose.
15 A Ludo knocks over his tower, and brochures scatter.
16 D HESTER: Franco, the antlers are glued on.
17 D FRANCO: They are mounted, not glued.
18 D TALL WOMAN: I'm looking for a stolen owl.
19 D PERCIVAL: We have forty.
20 D TALL WOMAN: This one's white, with a notch in the left wing, named Gerald.
21 A ¶ Birgitta drops her handkerchief.
22 A Percival coughs.
23 A Ludo freezes with a brochure halfway to his mouth.
24 A Franco finally turns from the moose, and Hester follows his gaze to the woman.
25 D BIRGITTA: Gerald?
26 D TALL WOMAN: My late husband's owl.
27 D HESTER: He's taxidermied?
28 D TALL WOMAN: Both of them are.
29 A ¶ Ludo makes a noise like a kettle.
30 A Everyone stares at him.
31 D LUDO: I sold Gerald yesterday. On the internet.
32 D TALL WOMAN: To whom?
33 D LUDO: A man named Dennis.
34 A ¶ The woman removes her sunglasses.
35 A Her eyes are bloodshot and furious.
36 D ZOFIA: I'm Zofia Wrobel. And I'd like to speak to Dennis.
37 D PERCIVAL: Ms. Wrobel, I assure you--
38 D ZOFIA: Percival, I know that you know Dennis.
39 A ¶ Percival lowers his head.
40 A Franco shoves the moose out of the way.
41 A Birgitta quietly unlocks the owl case.
42 A Inside, a single white owl with a notched wing glares out at the room.
43 D BIRGITTA: Oh no.
44 D HESTER (writing): Disqualified.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01970.json
### SCENE s01970 | INT. COUNTY SALT DOME - NIGHT
Detected names (may be incomplete or contain aliases): NGOZI ADEYEMI-BROOKS, DEZ, PRUITT, BILLIE WARSHAW, TOMASZ KR, ARLO MENDES
1 A ¶ A cavern of road salt, pale as a glacier.
2 A A single work lamp hums on a tripod.
3 A ¶ NGOZI ADEYEMI-BROOKS (50s, plow-crew foreman, reading glasses on a cord) stands over a clipboard.
4 A Around her: DEZ "THE DEACON" PRUITT (30s, enormous, soft-voiced), BILLIE WARSHAW (20s, rookie, hi-vis too big), TOMASZ KRÓL (60s, mechanic, grease to the elbow) and ARLO MENDES (40s, union steward, thermos in hand).
5 A ¶ She taps the clipboard.
6 A They go quiet.
7 D NGOZI: Listen up, all of you. The county cut the overnight run. Starting Friday.
8 A ¶ Nobody moves.
9 A Tomasz sets down his wrench.
10 D TOMASZ: Cut how.
11 D NGOZI: Cut like gone.
12 D ARLO: They can't. It's in the contract.
13 D NGOZI: Arlo, it's in the contract that they can.
14 A ¶ He looks at the thermos.
15 A Unscrews it.
16 A Doesn't pour.
17 D BILLIE: So I just got here.
18 D DEZ: Billie.
19 D BILLIE: Three weeks. I bought boots.
20 D DEZ: Billie, hush a second.
21 A ¶ She does.
22 A He rests a hand on her shoulder, then thinks better of it and lets it drop.
23 D TOMASZ (to himself): Thirty-one winters.
24 D ARLO: I'll file tonight. Grievance, the whole thing. Ngozi, you sign as witness, Dez, you sign, Tomasz you sign, and Billie, you're probationary so you don't sign anything, you just watch.
25 D BILLIE: That's not fair.
26 D ARLO: No. It's not.
27 D NGOZI: Nobody is filing anything tonight.
28 D ARLO: Excuse me?
29 D NGOZI: I took the deal.
30 A ¶ Silence.
31 A Salt ticks somewhere in the dark as a small slide settles.
32 D DEZ: What deal.
33 D NGOZI: Day shift. Four of us stay. Two go.
34 D ARLO: Who decides who goes.
35 D NGOZI: I do.
36 D TOMASZ: Then say it.
37 D NGOZI: Tomasz, I'm not going to say it in front of the kids.
38 D TOMASZ: I'm sixty-three years old. Say it.
39 A ¶ She takes off her glasses.
40 A They drop on the cord against her chest.
41 D NGOZI: You and Billie. Seniority says you, Tomasz, and last-hired says her, and I fought for it every other way and the number didn't move.
42 D DEZ: You put me ahead of him?
43 D NGOZI: I put nobody ahead of anybody. A spreadsheet did.
44 D ARLO: A spreadsheet. Fantastic. I'll tell my wife I lost a man to a spreadsheet.
45 D BILLIE: I can go. It's fine. I can go.
46 D TOMASZ: Don't you dare say that's fine.
47 D BILLIE: Then what do I say?
48 D TOMASZ: Say you want to burn the place down.
49 D BILLIE: I want to burn the place down.
50 D TOMASZ: Good girl. Now say it like you mean it.
51 A ¶ Dez laughs, a short bark, and that breaks it.
52 A Arlo laughs.
53 A Even Ngozi's mouth moves.
54 A ¶ Then Tomasz is not laughing.
55 A He turns away toward the dark of the dome.
56 D DEZ: Hey. Old man.
57 D TOMASZ (muttering): Thirty-one winters, and a spreadsheet.
58 A ¶ Ngozi puts her glasses back on, picks up the clipboard, and turns it to face them.
59 D NGOZI: Everyone sign the grievance. Everyone. I'll sign first.
60 D ARLO: You just said.
61 D NGOZI: I said nobody files tonight. It's four a.m. We file at nine.
62 A ¶ She signs.
63 A Passes it to Dez.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01971.json
### SCENE s01971 | INT. FUNICULAR CAR, HALFWAY UP - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODILE VANTERPOOL, INSPECTOR HOLLIS CRANE, OPERATOR
1 A ¶ A wood-paneled funicular car stalled on a steep incline above a sleeping Swiss lake town.
2 A Rain on the glass.
3 A One brass lamp burns.
4 A ¶ MADAME ODILE VANTERPOOL (60s, fur collar, rings on every finger) sits very upright on the forward bench.
5 A Across from her, INSPECTOR HOLLIS CRANE (40s, rumpled trench coat, a hat he keeps turning in his hands) studies the floor.
6 A Neither speaks.
7 A ¶ Wind shifts the car.
8 A The cable creaks.
9 A ¶ An intercom grille crackles beside the door.
10 D OPERATOR [V.O.] (through the grille): Folks, we have a fault on the lower winch. Twenty minutes, perhaps thirty. Please remain seated.
11 A ¶ Crane glances at the grille, then at Odile, who has not looked up.
12 A She opens her handbag, takes out a small pearl-handled revolver, sets it on her knee as one might set down a glove, and closes the bag again.
13 A Crane watches this, sets his hat on the bench beside him, and slides a hand slowly into his coat pocket and out again with a cigarette case.
14 A He offers her one.
15 A She declines with two fingers.
16 A He lights his own, and the match shakes just once.
17 D CRANE: Terrible weather.
18 D ODILE: It does this in October.
19 D CRANE: Your husband used to say that, I understand.
20 D ODILE: My husband said a great many things.
21 A ¶ The lamp flickers.
22 A Crane exhales smoke toward the ceiling.
23 D CRANE: He was found at the bottom of this very hill. Same hour. Same rain.
24 D ODILE: I heard.
25 D CRANE: You didn't come to the funeral.
26 D ODILE: I was unwell.
27 D CRANE: Yet here you are, riding the last car of the night, to a villa you've told everyone you have not visited in a year.
28 A ¶ She turns the revolver a quarter-inch on her knee, so the muzzle points at the door instead of at him.
29 D ODILE: Inspector, you've been very patient. Say what you came to say.
30 D CRANE: The conductor remembers a woman in a fur collar on the evening car. The night of.
31 D ODILE: The conductor is mistaken.
32 D CRANE: He was very sure. He said she tipped him. Said she wore rings on every finger.
33 A ¶ Silence.
34 A The cable creaks.
35 A Odile lays one ringed hand flat over the revolver and does not lift it.
36 D OPERATOR [V.O.] (through the grille): Fault located. Ten more minutes, folks. Thank you for your patience.
37 A ¶ Crane stubs the cigarette out on the sole of his shoe and puts the butt in his pocket, neat as ever.
38 A Odile picks up the revolver and holds it in her lap with both hands.
39 A Crane does not reach for his hat.
40 A He does not reach for anything.
41 D CRANE: You could shoot me. Before they get the car moving.
42 D ODILE: I could.
43 D CRANE: Nobody would hear it over the rain.
44 D ODILE: No.
45 D CRANE: Then why haven't you?
46 A ¶ She stands.
47 A The car sways.
48 A The muzzle comes up, level, steady, and she crosses the three steps between them and puts it against his tie.
49 D ODILE: Because you are the first person in a year who has said his name aloud to me.
50 A ¶ She pulls the hammer back.
51 D CRANE: Odile.
52 A ¶ The intercom crackles.
53 A The car lurches forward and begins to climb.
54 D OPERATOR [V.O.] (through the grille): And we're moving! Sorry for the delay!
55 A ¶ The lamp swings.
56 A Her finger tightens.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01972.json
### SCENE s01972 | INT. FLOODED SIGNAL BUNKER - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT IMRE, RHEGYI, COMMANDER
1 A ¶ A concrete cell below a ruined rail yard.
2 A Knee-deep black water.
3 A Shells land overhead in a steady rhythm; dust sifts from the ceiling with each one.
4 A ¶ SERGEANT IMRE VÁRHEGYI (30s, radio operator, face smeared with soot, headset over a bandaged ear) crouches at a field set balanced on a stack of ammunition crates.
5 A He holds the handset in both fists.
6 D IMRE (into handset): Wolf Three, this is Hearth. Say again your last.
7 A ¶ Static.
8 A A shell lands.
9 A A pipe bursts somewhere and a thin stream of water begins to fall on the radio.
10 A He shields it with his body.
11 D COMMANDER [V.O.] (through the handset, thin): Hearth, Wolf Three. Grid is compromised. Repeat, grid is compromised. Fall back to the--
12 A ¶ The voice breaks into crackling.
13 D IMRE: Wolf Three, you are cutting out. Say again fall back to where?
14 A ¶ Static.
15 A Another impact, closer.
16 A A chunk of ceiling drops into the water beside him.
17 A He does not flinch; he wipes the handset on his sleeve.
18 D IMRE [CONT'D] (into handset): Wolf Three, Hearth. Do you copy? Wolf Three.
19 D COMMANDER [V.O.] (faint): --the old chapel. East of the water tower. Bring the set if you can carry it.
20 D IMRE: The set weighs forty kilos, sir.
21 D COMMANDER [V.O.]: Then leave it, Sergeant. Leave it and run.
22 A ¶ He looks at the radio.
23 A At the water rising around his thighs.
24 A At the iron ladder bolted to the wall, three rungs of it underwater.
25 D IMRE (into handset): Sir, if I leave it, the battalion has no voice.
26 D COMMANDER [V.O.]: The battalion has no battalion, Imre. Go.
27 A ¶ A long beat.
28 A He sets the handset down on the crate, carefully, like something sleeping.
29 A Reaches under the set and unclips the battery.
30 A Pulls the crystal.
31 A Pockets both.
32 D IMRE (muttered): Tell it to the next man.
33 A ¶ He wades to the ladder.
34 A Behind him the handset crackles to itself.
35 D COMMANDER [V.O.] (faint, alone): Hearth? Hearth, are you there?
36 A ¶ Imre stops on the ladder with one boot on the lowest dry rung.
37 A He climbs back down.
38 A Picks up the handset.
39 D IMRE (into handset): Wolf Three, Hearth. I am here.
40 A ¶ A shell lands.
41 A The lamp dies.
42 A Darkness, and the sound of rushing water.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01973.json
### SCENE s01973 | INT. MINIATURE-GOLF CLOCK TOWER, WINDMILL HOLE - NIGHT
Detected names (may be incomplete or contain aliases): TALL MAN, WOMAN, DOLORES, WALT
1 A ¶ A faded mini-golf course after closing.
2 A Plastic windmill, fiberglass lighthouse, a clock-tower hole with a hollow base.
3 A A service panel stands open at its foot.
4 A ¶ A figure in a black hoodie crouches inside the clock tower with a headlamp and a duffel bag.
5 A A TALL MAN (40s, careful hands, wedding ring on a chain around his neck) works a thin pick into the panel's lock.
6 A ¶ A second figure appears at the fence line.
7 A A WOMAN (30s, sneakers, a tote bag from a bakery) climbs over, lands badly, and freezes.
8 A They stare at each other.
9 A ¶ The Tall Man lifts one finger to his lips.
10 A She nods.
11 A Walks over without a sound, sets down the bakery tote, and kneels beside him.
12 D WOMAN (whispering): You're late.
13 D TALL MAN: You're early.
14 D WOMAN: There's a cop at the corner.
15 D TALL MAN: He's eating.
16 D WOMAN: How do you know he's eating?
17 D TALL MAN: Because it's a Tuesday and Tuesdays are pierogi.
18 A ¶ She considers this.
19 A Looks at the lock.
20 A At his hands.
21 D WOMAN: You said four minutes.
22 A ¶ He does not answer.
23 A The pick clicks.
24 A Stops.
25 A He pulls it out, wipes it on his sleeve, and starts again, slower.
26 D WOMAN [CONT'D] (to herself): Okay. Okay. Okay.
27 D TALL MAN: Talk to the lock, not me.
28 D WOMAN: The lock doesn't care.
29 D TALL MAN: Neither do I. Please.
30 A ¶ A siren, distant, passes the block and fades.
31 A Neither of them breathes until it does.
32 A He lowers his headlamp to a dim red.
33 A ¶ The lock gives with a soft thunk.
34 A He pulls the panel back.
35 A Inside, a steel box the size of a toaster.
36 D WOMAN: That's it?
37 D TALL MAN: That's it.
38 D WOMAN: Thirty years in this city and the most valuable thing in it is under a clock tower with a cartoon face.
39 D TALL MAN: Dolores, that's the point.
40 A ¶ The woman, DOLORES, goes still.
41 A He realizes what he's said.
42 A Neither speaks.
43 D DOLORES: You said you wouldn't use names.
44 D TALL MAN: I know.
45 D DOLORES: So you know mine.
46 A ¶ He closes his eyes briefly.
47 A Opens them.
48 A Reaches for the steel box and lifts it out with both hands.
49 A It's heavier than it looks.
50 D TALL MAN: Walt.
51 D DOLORES: Walt.
52 D WALT: My name. Since we're doing it.
53 A ¶ She takes the box from him and puts it in the bakery tote under a layer of paper-wrapped rolls.
54 A A long, satisfied, silent beat.
55 A Then headlights sweep the course.
56 D DOLORES (low): Walt.
57 D WALT: I see it.
58 A ¶ They crouch lower inside the hollow of the tower, shoulders pressed together.
59 A The lights pass across the fiberglass lighthouse.
60 A Stop.
61 A Linger.
62 A ¶ A car door opens.
63 D WALT [CONT'D] (whispering): Pierogi's done early.
64 D DOLORES: Don't joke.
65 D WALT: I'm not.
66 A ¶ She takes his hand.
67 A He lets her.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01974.json
### SCENE s01974 | INT. DRY-DOCK PUMP HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): KESTREL OYELARAN-FINCH, DRAGAN MIHAJLOVI, INSPECTOR ROSALIND ACHTERBERG, ALVARO
1 A ¶ A cathedral of valves and rust-orange pipework.
2 A A drained dry dock yawns beyond a glass wall, the hull of a half-scrapped ferry propped on blocks.
3 A Emergency light only.
4 A ¶ KESTREL OYELARAN-FINCH (30s, ex-auditor, wet hair, laptop bag clutched to her chest) backs against a pump housing.
5 A In the center of the room, DRAGAN MIHAJLOVIĆ (50s, heavy coat, port authority lanyard) stands with a pistol held low and loose, like a tool he's tired of.
6 D DRAGAN: Put the bag on the floor.
7 D KESTREL: No.
8 D DRAGAN: It's not a negotiation.
9 D KESTREL: It's the only thing keeping you from sitting in a cell.
10 A ¶ He tilts his head.
11 A A dripping pipe counts seconds.
12 D DRAGAN: The ledgers are digital.
13 D KESTREL: So are the backups.
14 D DRAGAN: Where?
15 D KESTREL: Not telling.
16 A ¶ He sighs, and for a moment looks almost sad.
17 A Steps forward.
18 A ¶ Behind Kestrel, a hatch clangs.
19 A Boots on a steel stair.
20 A She spins.
21 A Dragan doesn't.
22 A ¶ A third figure descends: INSPECTOR ROSALIND ACHTERBERG (40s, plain coat, badge on her belt, one hand already on her holster).
23 D ROSALIND: Port Authority Police. Mr. Mihajlović. Lower it.
24 D DRAGAN: Rosalind.
25 D ROSALIND: Lower it, Dragan.
26 A ¶ He doesn't.
27 A Doesn't raise it either.
28 A Kestrel looks from one to the other.
29 D KESTREL: You know each other.
30 D ROSALIND: Twenty years.
31 D KESTREL: Then you can talk him out of this.
32 D ROSALIND: I'm not here to talk him out of anything.
33 A ¶ Kestrel's face changes.
34 A She takes a step back, into the pump housing.
35 D KESTREL: You're not here to arrest him.
36 D ROSALIND: I'm here to see that the bag leaves with me.
37 D DRAGAN: Ah. There we are.
38 D KESTREL (quiet): I called you. You said you'd come.
39 D ROSALIND: And I did.
40 A ¶ A fourth voice speaks from the dark above the stair, unamplified, polite.
41 D ALVARO [O.S.]: Everyone relax. Please.
42 A ¶ All three look up.
43 A A silhouette stands on the catwalk, a phone held loosely to its ear.
44 D DRAGAN: Who is that.
45 D ALVARO [O.S.]: Someone who'd like to hear the rest of this.
46 D ROSALIND (to Dragan): You brought a recorder?
47 D DRAGAN: I didn't bring anyone.
48 D ALVARO [O.S.]: No, I came on my own. Mrs. Oyelaran-Finch, I believe that's your bag.
49 A ¶ Kestrel stares at the catwalk.
50 A Then, slowly, at the two armed people in front of her.
51 A She sets the bag on the floor, pushes it with her foot across the concrete toward Rosalind and Dragan, and steps away from it with her hands visible.
52 D KESTREL: It's yours. Whoever wants it.
53 A ¶ Neither of them moves.
54 A Dragan lowers his pistol an inch.
55 A Rosalind's hand leaves her holster.
56 A The pipe drips.
57 D ALVARO [O.S.] (softly): That's better.
58 D DRAGAN (muttering): Twenty years.
59 D ROSALIND: Don't.
60 A ¶ She crouches and picks up the bag.
61 A Opens it.
62 A Looks inside.
63 A Closes it.
64 D ROSALIND [CONT'D]: It's empty.
65 D DRAGAN: What?
66 D KESTREL: The laptop's in the dock.
67 A ¶ All of them turn to the glass wall.
68 A Far below, at the foot of the rusted hull, a tiny blue light glows on the concrete floor of the dry dock, beside a sealed gate that has just begun to let in water.
69 D DRAGAN: You flooded it.
70 D KESTREL: I opened a valve. It's what the pump house is for.
71 A ¶ Rosalind sprints for the door.
72 A Dragan lowers his gun completely and watches the water, and the blue light, and the woman, one after the other.
73 D ALVARO [O.S.] (delighted): Oh, well done.
74 D KESTREL: Don't follow me.
75 A ¶ She walks to the stair and climbs past the catwalk without looking at it.
76 A At the top, the silhouette steps aside to let her through.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01975.json
### SCENE s01975 | INT. MUNICIPAL SWIMMING BATH, SLOW LANE - EARLY MORNING
Detected names (may be incomplete or contain aliases): COACH HESTER LINDQVIST-AMOAH, NINA OKONKWO-REYES, WILFREDO REYES, TOURNAMENT OFFICIAL
1 A ¶ A Victorian bath hall, tiled the green of old bottles, steam lifting off the water in sheets.
2 A Iron galleries ring the pool.
3 A Behind the clerestory glass, a gray dawn.
4 A ¶ COACH HESTER LINDQVIST-AMOAH (60s, tall, wool cardigan, stopwatch around her neck) stands at the pool's edge with her hands behind her back.
5 A She has watched ten thousand swimmers and no longer pretends to be surprised by any of them.
6 A ¶ In the water, treading, is NINA OKONKWO-REYES (17, goggles pushed to her forehead, lips pale from cold), the best backstroker the club has had in a decade.
7 A Beside her, on the edge, sits her father, WILFREDO REYES (40s, work boots, a thermos, a face that has not slept).
8 A ¶ A wall-mounted speaker coughs.
9 D TOURNAMENT OFFICIAL [V.O.] (over loudspeaker, distorted): Heat four, lane three, you are called to the blocks. Heat four, lane three.
10 A ¶ Nina does not move.
11 A Her father unscrews the thermos.
12 D WILFREDO: That is you, mija.
13 D NINA: I know it's me.
14 A ¶ She pulls her goggles down.
15 A Pushes them up again.
16 A Pulls them down.
17 D HESTER: Nina. Look at me.
18 A ¶ She does.
19 A The coach crouches, joints cracking, and speaks in a voice that does not carry beyond the three of them.
20 D HESTER [CONT'D]: You have trained every morning for six years. Whatever happens in the next minute and a half has nothing to do with that.
21 D NINA: It has everything to do with that.
22 D HESTER: Then you've nothing to fear.
23 D NINA: You're not helping.
24 A ¶ Hester almost smiles.
25 A She straightens, takes the stopwatch from around her neck, and presses it into the girl's wet palm.
26 A The girl looks at it, bewildered.
27 D HESTER: Hold it. Don't start it.
28 D TOURNAMENT OFFICIAL [V.O.] (over loudspeaker): Final call, lane three.
29 A ¶ Nina's hand closes around the stopwatch.
30 A She hauls herself out of the water in one movement, streaming, steaming, and walks toward the starting blocks with her father's eyes on her back.
31 A He rises, half-lifts a hand, lets it fall.
32 A Hester touches his elbow.
33 D HESTER [CONT'D]: She'll be fine.
34 D WILFREDO: You said that last year.
35 D HESTER: And last year she was.
36 A ¶ He nods slowly.
37 A He looks down at the thermos in his hand as if wondering how it got there.
38 A ¶ At the blocks, Nina bends.
39 A Her fingers curl around the edge of the starting platform.
40 A Her knees bend.
41 A Her shoulders fall.
42 A ¶ The hall goes silent.
43 A Even the steam seems to hold.
44 D TOURNAMENT OFFICIAL [V.O.] (over loudspeaker): Take your marks.
45 A ¶ A beep.
46 A She is in the air.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01976.json
### SCENE s01976 | INT. NIGHT-FLIGHT CARGO DEPOT, GRAND CENTRAL POST OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): CORINNE ABADI-VEGA, THEO MARCHETTI-OYELOWO
1 A ¶ A cavernous sorting hall, the last shift of a century-old mail depot.
2 A Conveyor belts rattle in a long copper-colored light.
3 A Tin parcels, rope-bound crates, wire baskets of letters stacked like wheat.
4 A ¶ CORINNE ABADI-VEGA (30s, sleeves rolled, ink on her cuffs) stands at a sorting desk with a clipboard, lit by a green banker's lamp.
5 A She hasn't looked at the clipboard in minutes.
6 A ¶ Across the hall, a forklift hums to a stop.
7 A A man in a gray coat steps down from it and walks toward her, slowly, as if the floor might not hold.
8 A ¶ THEO MARCHETTI-OYELOWO (30s, rumpled, a cardboard tube under one arm) stops six feet from the desk.
9 A He opens his mouth, shuts it.
10 A The belt rattles between them.
11 D CORINNE: You were supposed to be in Lisbon.
12 D THEO: The flight got cancelled.
13 D CORINNE: Planes get cancelled in Lisbon every week. You came here.
14 D THEO: I came here.
15 A ¶ She puts the clipboard down and aligns it with the edge of the desk, three times, until it is exactly parallel.
16 A He watches her do it.
17 D THEO [CONT'D]: You still do that.
18 D CORINNE: You still turn up.
19 D THEO: Corinne.
20 D CORINNE (over him): I got your letter.
21 D THEO (over her): Did you read it?
22 A ¶ Both stop.
23 A A beat.
24 A The belts clatter.
25 D CORINNE: Go on.
26 D THEO: You first.
27 D CORINNE: Go on, Theo.
28 D THEO: Did you read it?
29 D CORINNE: Twice. I kept the envelope.
30 A ¶ He pulls the cardboard tube from under his arm and holds it out to her without a word.
31 A She doesn't take it.
32 A A package slides off a belt and thumps onto a pile.
33 A Neither of them looks.
34 D THEO [CONT'D]: It's the house. The one on the river. I drew it.
35 D CORINNE: You can't draw.
36 D THEO: I can't. I tried anyway.
37 A ¶ She takes the tube.
38 A Pops the cap.
39 A Draws out a roll of tracing paper, spreads it across the desk under the green lamp, and holds the corners down with a stapler and a roll of tape.
40 A A lopsided house, a lopsided tree, two figures at a lopsided table.
41 D CORINNE (softly): That's not our table.
42 D THEO: It's the one I want.
43 D CORINNE: Our table has three legs and a book under the fourth.
44 D THEO: I'd keep the book.
45 A ¶ A giggle escapes her.
46 A She covers her mouth, appalled.
47 A He steps forward.
48 A She steps back, against the desk, lamp swaying.
49 A The shadows of both of them swing across the hall.
50 D CORINNE (quiet): You left.
51 D THEO: I know.
52 D CORINNE: You didn't leave. You evaporated.
53 D THEO: I know.
54 D CORINNE: And now you've drawn me a house.
55 D THEO: And I'd like to live in it with you. If the offer stands.
56 A ¶ A pause.
57 A The conveyor stops with a hydraulic sigh and the hall goes silent.
58 A The two stand very close.
59 D CORINNE (whispering): I hate this about you.
60 D THEO (whispering): I know.
61 D CORINNE (together): Stay.
62 D THEO (together): Stay.
63 A ¶ They hear each other.
64 A Both freeze, then both laugh, helplessly, and her forehead drops onto his shoulder.
65 A His hand finds her back.
66 A Behind them the belts shudder and start to turn again.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01977.json
### SCENE s01977 | INT. COIN LAUNDROMAT, BACK BENCH - NIGHT
Detected names (may be incomplete or contain aliases): JUNE KOWALCZYK-ABARA, ELIAS TORRES-NAKAMURA, DELPHINE OYEBANJI, KOFI
1 A ¶ A narrow laundromat.
2 A Dryers turn in rows.
3 A Four people, one bench.
4 A ¶ JUNE KOWALCZYK-ABARA (20s, hoodie, library book) reads.
5 A Next to her, ELIAS TORRES-NAKAMURA (20s, scrubs, tired) folds a towel into a perfect square.
6 A Across the aisle, MRS. DELPHINE OYEBANJI (70s, headscarf) watches them both.
7 A Beside her, her grandson, KOFI (10, tablet), pretends not to.
8 A ¶ Elias drops a sock.
9 A It lands on June's shoe.
10 A She lifts the sock between two fingers and holds it out without looking up.
11 D ELIAS: Thanks.
12 D JUNE: It's got a hole.
13 D ELIAS: It's on purpose.
14 A ¶ She smiles at the book.
15 A Neither looks at the other.
16 D MRS. OYEBANJI (to the room): Does anybody have change for a five?
17 D ELIAS: No, ma'am.
18 D JUNE: I'll check.
19 A ¶ She digs in her bag and comes up with four quarters and a button.
20 A Elias stares at the button.
21 A She hands over the quarters.
22 A Her hand stays where his can reach it.
23 A His does, briefly.
24 D KOFI (to Mrs. Oyebanji, loud): Grandma, he's holding her hand.
25 D MRS. OYEBANJI: Mind your game.
26 A ¶ Elias pulls back.
27 A June turns a page she has not read.
28 A The dryer buzzes, and all four look at it as if it had spoken.
29 D ELIAS (muttered): Mine.
30 A ¶ He doesn't get up.
31 A June stands, opens the dryer, and hands him his warm laundry without a word.
32 A He takes it as if it were something far more breakable.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01978.json
### SCENE s01978 | INT. TWENTY-SECOND FLOOR CONFERENCE ROOM, SYNERGEX CORP - DAY
Detected names (may be incomplete or contain aliases): SAFE SPACE FOR RADICAL CANDOR, CHIP HALLORAN-TSENG, DAHLIA OKORO, BUZZ, KOWALSKI, PRIYA NANDAKUMAR
1 A ¶ A glass-walled room with a view of a parking structure the CEO insists on calling "the skyline."
2 A A laminated sign reads: THIS IS A SAFE SPACE FOR RADICAL CANDOR.
3 A ¶ CHIP HALLORAN-TSENG (40s, quarter-zip, laser pointer) presides at the head of the table.
4 A Beside him, a flip chart with a single word on it: SYNERGY.
5 A Around the table sit DAHLIA OKORO (30s, analyst, perfect posture), BERNARD "BUZZ" KOWALSKI (50s, thirty years in accounting, cardigan) and PRIYA NANDAKUMAR (20s, intern, notebook open to a blank page).
6 A ¶ Chip circles the room, laser dot dancing across the ceiling tile.
7 A Dahlia writes a note and crosses it out.
8 A Buzz unwraps a butterscotch.
9 A Priya's pen hovers over her notebook.
10 D CHIP: Okay, team. Radical candor. Dahlia, what's one thing you'd change about how we work?
11 D DAHLIA: Honestly, Chip? Meetings.
12 D CHIP: Love that. Candid. Buzz?
13 D BUZZ: Meetings.
14 D CHIP: We're hearing a lot of meetings. Priya, you're new, fresh eyes.
15 D PRIYA: Um. I don't know. Maybe the meetings?
16 D CHIP (to the flip chart): Okay. So the through-line, and I want to be sensitive here, is some of you feel there may be a perception of too many meetings.
17 A ¶ Buzz stands, walks to the window, and stares at the parking structure.
18 A Dahlia takes the laser pointer from Chip's hand while he is mid-gesture and sets it on the table.
19 A Priya's pen has started to write, small, tight letters.
20 A Chip blinks at his empty hand.
21 D DAHLIA: Chip, we've had this meeting four times.
22 D CHIP: Dahlia, I appreciate that, and I'm going to park that.
23 D BUZZ (from the window): Park it where? There's no parking. It's a parking structure and there is no parking.
24 D CHIP: Buzz.
25 D BUZZ: I have been here thirty years, Chip. I have given you eleven reports on how to fix the parking. You have given me a mug.
26 D CHIP: We value you.
27 D BUZZ: It has a motivational otter on it.
28 D PRIYA (small): I like the otter.
29 A ¶ Everyone looks at her.
30 A She shrinks, then, to her own surprise, does not.
31 D PRIYA [CONT'D]: But I also think this meeting is eating the whole day and nobody's doing the work. Sorry. Radical candor.
32 A ¶ Silence.
33 A Chip lifts the cap off a marker, caps it, uncaps it.
34 A Dahlia leans back.
35 A Buzz turns from the window with his arms folded and a look of dawning joy.
36 D BUZZ: Chip, she's right.
37 D CHIP: Priya, I hear you, and the thing with candor--
38 D DAHLIA: Chip.
39 D CHIP: --is it needs a framework--
40 D BUZZ (at once): Chip.
41 D CHIP (louder): --and a safe space!
42 A ¶ He slaps the flip chart.
43 A It topples.
44 A SYNERGY lands face-down on the carpet.
45 A Priya, Buzz and Dahlia look at it, then at him.
46 A He looks at it too.
47 A He straightens his quarter-zip.
48 D CHIP [CONT'D]: Let's circle back.
49 A ¶ Dahlia stands.
50 A Buzz unwraps another butterscotch and offers Priya one.
51 A She takes it.
52 A They file out in a line, and Chip is left alone with the otter mug and a view of the garage.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02020.json
### SCENE s02020 | INT. STALLED CABLE CAR - GORGE CROSSING - DAY
Detected names (may be incomplete or contain aliases): IMANI OKORO, PETR HALAS
1 A ¶ A steel box the size of a closet, hanging from one cable over a drop of four hundred meters.
2 A Wind pushes at the glass.
3 A The motor has been dead for six hours.
4 A ¶ IMANI OKORO (30s, park ranger, sunburnt neck, frayed jacket) sits on the floor with her back against the door.
5 A PETR HALAS (60s, retired surveyor, wool cap, thermos) stands, one hand on the rail.
6 A ¶ The car sways.
7 A They both freeze.
8 A It settles.
9 A They both breathe out.
10 D IMANI: Thermos. How much is left?
11 D PETR: Half a cup. Maybe less.
12 D IMANI: We split it at dusk.
13 D PETR: We split it now. Dusk is a rumor.
14 D IMANI: Petr.
15 D PETR: Fine. Dusk.
16 A ¶ Imani pulls the radio from her belt, thumbs the switch.
17 A Static.
18 A She tries again.
19 A Static.
20 A She throws it onto the bench, then fetches it back.
21 D IMANI (to herself): Batteries are fine. Battery's fine. It's the gorge.
22 D PETR: Say again?
23 D IMANI: Nothing. The walls eat the signal.
24 D PETR: Then we stop wasting the battery on it.
25 D IMANI: We have the battery for exactly this.
26 D PETR: We have the battery for three more tries. I counted your tries.
27 D IMANI: You counted.
28 D PETR: I measured land for forty years. I count things.
29 D IMANI: Then count this. Rescue knows the line stopped at nine this morning. They know there are two cars on the north span. They send a crew when the wind drops under forty.
30 D PETR: And when does the wind drop under forty?
31 D IMANI: Tonight. Tomorrow at the latest.
32 D PETR: You said that at noon.
33 D IMANI: At noon it was true.
34 D PETR: At noon you also said the cable would hold the whole day, no problem.
35 D IMANI: The cable is rated for six times our weight.
36 D PETR: Rated by whom?
37 D IMANI: By people who do not want to be in here with you.
38 D PETR: That is almost funny.
39 D IMANI: I am almost laughing.
40 D PETR: My knees are going. I would like to sit.
41 D IMANI: Then sit. There is room.
42 D PETR: There is room if you move your boots.
43 D IMANI: My boots are not the problem.
44 D PETR: Your boots are the whole problem.
45 A ¶ Imani draws her legs in.
46 A Petr lowers himself onto the bench opposite and winces.
47 A The car rocks.
48 A They grab for each other's sleeves, then pull back, embarrassed.
49 D PETR [CONT'D] (muttering): Forty years on solid ground.
50 A ¶ Imani unzips her jacket and spreads it over his knees without a word.
51 D PETR [CONT'D]: I am not cold.
52 D IMANI: I know.
53 A ¶ The wind drops a notch.
54 A Far below, a river keeps talking to itself.
55 D IMANI [CONT'D]: Hear that? Wind's easing.
56 D PETR: Or I am going deaf.
57 D IMANI: Either way, we are closer to morning.
58 D PETR: Pour the coffee, ranger.
59 A ¶ She does.
60 A Half a cup, divided with great care.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02021.json
### SCENE s02021 | INT. CONVENT WINE CELLAR - NORTHERN ITALY - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT HOLLIS WEBB, CORPORAL TUCKER MAYES, MAN, STRANGER, ANSELM
1 A ¶ Vaulted brick, rows of dusty barrels, a single oil lamp on an upturned crate.
2 A Overhead, far away, the dull thump of artillery.
3 A Dust sifts from the ceiling with each one.
4 A ¶ LIEUTENANT HOLLIS WEBB (30s, American, clean-shaven despite everything, map case at his hip) sits on a barrel, writing in a notebook.
5 A ¶ CORPORAL TUCKER MAYES (20s, freckled, helmet pushed back) stands guard at the foot of the stone stairs, rifle slung.
6 A ¶ A MAN in a ragged civilian coat sits on the floor in the shadows, hands resting on his knees.
7 A He is gaunt, gray at the temples, and watches the lamp rather than the soldiers.
8 D MAYES: Lieutenant, he's still not saying a word.
9 D WEBB: Give him time.
10 D MAYES: Been an hour, sir.
11 D WEBB: Been four years for him.
12 A ¶ Another thump.
13 A Dust falls.
14 A The lamp flame shivers.
15 D MAYES: That one's closer.
16 D WEBB: They're walking it down the valley. It'll pass us by morning.
17 D MAYES: How do you know?
18 D WEBB: Because it's the same gun, the same interval. Count with me. Twenty seconds, then the next one lands a little to the left.
19 D MAYES: You been counting?
20 D WEBB: It's what there is to do.
21 A ¶ Mayes shifts his weight.
22 A Looks at the stranger, then back.
23 D MAYES: Sir, if he's a spy, he's a bad one. Nobody sneaks in and then sits down to wait.
24 D WEBB: Nobody said spy.
25 D MAYES: Sergeant Pruitt said spy.
26 D WEBB: Sergeant Pruitt says a lot of things.
27 D MAYES: He said it twice.
28 D WEBB: He says everything twice. It's how you know he means it, or doesn't.
29 A ¶ The STRANGER lifts his head.
30 A His English is careful, formal.
31 D STRANGER: It is the Abbess's wine you are sitting on.
32 D WEBB: We'll try not to drink it.
33 D STRANGER: She would be angry if you did not.
34 A ¶ Webb closes the notebook.
35 A Mayes straightens, hand drifting toward his rifle, then stops.
36 D WEBB: You speak English.
37 D STRANGER: I taught it. Before. At the school in Cremona.
38 D WEBB: What's your name?
39 D STRANGER: Anselm.
40 D WEBB: Anselm what?
41 D ANSELM: Only Anselm. The rest belongs to a man who no longer exists.
42 D MAYES: That's a hell of a thing to say.
43 D ANSELM: It is a hell of a year.
44 D WEBB: Anselm, we're dug in here until the line moves. Nobody's going to hurt you. We just need to know who else is in this convent.
45 D ANSELM: Nine sisters. Two children from the village. One goat.
46 D MAYES: A goat?
47 D ANSELM: She gives good milk. You will want to thank her.
48 D WEBB: Where are they now?
49 D ANSELM: In the chapel, praying very quietly. They are afraid of your Corporal.
50 D MAYES: Me?
51 D ANSELM: You walk like a man who expects to be shot at.
52 D MAYES: I do expect to be shot at.
53 D ANSELM: Yes. That is why they are afraid.
54 A ¶ Webb almost smiles.
55 A Another thump, softer this time.
56 A No one flinches.
57 D WEBB: That one was farther.
58 D ANSELM: They are walking it down the valley.
59 D WEBB: So I hear.
60 D MAYES: Lieutenant, permission to ask something?
61 D WEBB: Go ahead.
62 D MAYES: Why are we being so polite?
63 D WEBB: Because it's night, and it's cold, and the only war in this room right now is between your stomach and the rations.
64 D MAYES: That's a war I'm losing.
65 D ANSELM: There is bread upstairs. And cheese. The sisters will not offer. You must ask.
66 D WEBB: Mayes, go ask.
67 D MAYES: Sir, my post.
68 D WEBB: I have the post. Go ask nicely.
69 D MAYES: Nicely. Yes, sir.
70 A ¶ Mayes starts up the stairs, pauses halfway.
71 D MAYES [CONT'D]: Do I say please in Italian?
72 D ANSELM: Per favore. And you bow your head. Slightly.
73 D MAYES: Per favore.
74 D ANSELM: Less like you are giving an order.
75 D MAYES: Per favore.
76 D ANSELM: Better.
77 A ¶ Mayes climbs out of sight.
78 A Webb opens the notebook again, then turns it face down on his knee.
79 D WEBB: You must have been a good teacher.
80 D ANSELM: I was a patient one. It is not the same.
81 D WEBB: It's most of it.
82 A ¶ The lamp steadies.
83 A Above them, a faint scrape of boots on stone, and then a woman's voice, very small, saying something that might be a blessing.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02022.json
### SCENE s02022 | INT. DRIFTING SALT-HARVEST BARGE - AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): NADIR SOLOMON, SOLENNE ARQUETTE, BAX, ULLMAN
1 A ¶ Red emergency light.
2 A Frost on the walls.
3 A Pressure alarm pulsing.
4 A ¶ NADIR SOLOMON (40s, pilot) slams the inner hatch.
5 A SOLENNE ARQUETTE (20s, engineer) jams a wrench into the wheel.
6 A BAXTER "BAX" ULLMAN (50s, quartermaster) hauls a crate against the door.
7 D NADIR: It's through the hull--
8 D SOLENNE: Not through, it's--
9 D BAX: Everybody off the wall!
10 D SOLENNE: I need ten seconds--
11 D NADIR: We don't have ten!
12 D BAX: Then make it five!
13 A ¶ The hatch BANGS from outside.
14 A All three leap back, then lunge at the wheel together.
15 D SOLENNE: Hold it!
16 D NADIR: Holding!
17 D BAX: Don't hold it, turn it!
18 D SOLENNE: Turn it left! Left!
19 A ¶ The wheel locks.
20 A The alarm cuts out.
21 A They slide down the wall, breathing hard.
22 D NADIR (quiet): Whatever that was, it knows we're in here.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02023.json
### SCENE s02023 | INT. ABANDONED PLANETARIUM - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LOUELLA PRICE, MIRIAM ASHBY, CONSTABLE FIONA GREAVES
1 A ¶ Dust on every seat.
2 A A cracked star projector hangs in the center like a dead insect.
3 A Flashlight beams cross the ceiling.
4 A ¶ INSPECTOR LOUELLA PRICE (50s, rain-wet mac) kneels beside the projector.
5 A DR. MIRIAM ASHBY (40s, pathologist) stands behind her with a case.
6 A CONSTABLE FIONA GREAVES (20s, notebook out) waits at the door.
7 A ¶ Louella lifts a brass key from the projector's base.
8 A Miriam and Fiona both step forward at once, collide, and stop.
9 D LOUELLA: Careful. Nobody touch it.
10 D MIRIAM: The note says nine o'clock. It is quarter past.
11 D FIONA: Then she is late, or she is not coming.
12 D LOUELLA: She is here. She is watching us.
13 D MIRIAM: Why would she do that?
14 D LOUELLA: Because she wanted us to find the key, and now she wants to see what we do with it.
15 A ¶ Fiona and Miriam both glance up.
16 A The dome is empty, except for the flashlights.
17 A Louella pockets the key.
18 D FIONA: Shall I call it in?
19 D LOUELLA: Not yet. Let her think she has the night to herself.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02024.json
### SCENE s02024 | INT. HALLORAN FAMILY GREENHOUSE - SATURDAY MORNING
Detected names (may be incomplete or contain aliases): GRANDMA ROSALIND HALLORAN, TOBY
1 A ¶ A glass lean-to bolted to the back of a brick house.
2 A Tomato vines, hanging fern baskets, a rusted wheelbarrow.
3 A Condensation drips from every pane.
4 A A radio on a shelf plays low country music.
5 A ¶ GRANDMA ROSALIND HALLORAN (70s, tiny, sunhat, hands like gnarled roots) kneels at a seed tray.
6 A ¶ Beside her, TOBIAS "TOBY" HALLORAN (9, cowlick, one shoe untied) holds a trowel like a sword.
7 A ¶ Near the door, DESMOND HALLORAN (40s, Toby's father, rumpled) drinks coffee from a thermos lid.
8 A Next to him, JUNIPER HALLORAN (15, black nail polish, earbuds in) scrolls her phone.
9 D DESMOND: Toby, easy with that.
10 D TOBY: I am easy.
11 D ROSALIND: He is a delicate surgeon.
12 D JUNIPER: He is a menace.
13 A ¶ Toby jabs the trowel into the soil.
14 A It strikes something hard.
15 A CLINK.
16 D TOBY: Gran! There's something!
17 D ROSALIND: Stop digging.
18 D TOBY: It's metal!
19 D ROSALIND: Stop digging, Tobias.
20 A ¶ Her voice is suddenly flat, brittle.
21 A Everyone goes still.
22 A Even the radio seems to hush.
23 D DESMOND: Mum?
24 D ROSALIND: Step back. Everyone.
25 A ¶ She pushes herself up, wincing, takes Toby by the shoulders and moves him aside.
26 A She brushes dirt away with her thumb.
27 A A rusted tin lid appears, stamped with faded red roses.
28 D JUNIPER (pulling out one earbud): Is that a body?
29 D DESMOND: Juniper!
30 D ROSALIND: It is not a body.
31 D TOBY: Is it treasure?
32 D ROSALIND (quietly): It is something I buried the year your grandfather left.
33 A ¶ The room holds its breath.
34 A Desmond sets down the thermos lid.
35 D DESMOND: Mum, you don't have to--
36 D ROSALIND: I do. It's been forty years. I'm tired of tending around it.
37 A ¶ She kneels again, slower.
38 A Works her fingers under the lid.
39 A It resists, then gives with a shriek of old metal.
40 A ¶ Inside, wrapped in oilcloth, a bundle of letters tied with twine, a man's gold watch, and a child's baby shoe.
41 D TOBY: That's tiny.
42 D JUNIPER: That's Dad's.
43 A ¶ Desmond stares at the shoe.
44 A He crouches slowly, picks it up.
45 A His thumb rubs the faded stitching.
46 D DESMOND: You said you lost these.
47 D ROSALIND: I said a lot of things.
48 D DESMOND (louder): You told me he took everything!
49 D ROSALIND (louder): I told you what I could bear to tell you!
50 A ¶ The shout rings off the glass.
51 A Toby flinches.
52 A Juniper steps in front of him, protective, then looks mortified and steps back.
53 D DESMOND (to Rosalind): Forty years.
54 D ROSALIND (to Desmond): Forty years.
55 A ¶ Silence.
56 A Condensation drips from a pane onto a fern frond.
57 A Plink.
58 A ¶ Rosalind lifts the watch, wipes the face with her sleeve.
59 A Holds it to her ear.
60 D ROSALIND [CONT'D]: Still ticking.
61 D DESMOND: It can't be.
62 D ROSALIND: Your father always wound it twice a day. I think I kept doing it, in my head, after.
63 D TOBY (small voice): Can I hold it?
64 A ¶ Rosalind looks at Desmond.
65 A He nods, slow.
66 A She presses the watch into Toby's palm, folding his fingers around it.
67 D ROSALIND: Gently, my darling. It has been waiting a long time.
68 A ¶ Toby lifts it to his ear, eyes huge.
69 D TOBY: It's like a tiny heart.
70 D JUNIPER (softly): That is actually kind of sweet.
71 D DESMOND: Don't tell anyone.
72 D JUNIPER: I'll tell everyone.
73 A ¶ The corner of Desmond's mouth twitches.
74 A He sits down hard on the overturned wheelbarrow and laughs, short and wet.
75 A Rosalind lets out a breath and laughs too.
76 A Juniper joins, helpless.
77 A Toby looks from face to face, confused and thrilled.
78 D TOBY: What's funny?
79 D ROSALIND: Absolutely nothing.
80 D DESMOND: Absolutely nothing.
81 D ROSALIND: Absolutely nothing.
82 D JUNIPER: Everything.
83 A ¶ The radio, as if on cue, turns to a slow waltz.
84 A Rosalind sets the tin in the sun, lid open, and goes back to her seed tray.
85 D ROSALIND: Now. Who wants to plant some tomatoes?

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02025.json
### SCENE s02025 | INT. TAXIDERMY MUSEUM - BACK GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): CASSIUS BELL, WREN ODUYA, LAZARO PRIETO, MAI LINH TRAN, DOT, KESSLER, RUFUS ALDER
1 A ¶ Glass cases.
2 A A stuffed polar bear mid-roar.
3 A Six figures in dark clothes crouch behind a display of Arctic foxes.
4 A ¶ CASSIUS BELL (50s, mastermind, reading glasses on a chain) taps a tablet.
5 A WREN ODUYA (20s, climber, harness).
6 A LAZARO PRIETO (30s, safecracker, toolroll).
7 A MAI LINH TRAN (30s, hacker, headset).
8 A DOROTHEA "DOT" KESSLER (60s, retired guard, inside woman).
9 A RUFUS ALDER (40s, muscle, silent).
10 D CASSIUS: Camera eleven loops in ten seconds.
11 D MAI LINH: Eight. Eight, Cassius, I said eight.
12 D DOT: He walks the corridor at twelve forty. Always.
13 D LAZARO: It's twelve thirty-eight.
14 D WREN: Rope is set. I go on your mark.
15 D CASSIUS: Wait for--
16 D DOT: Footsteps.
17 A ¶ Everyone freezes.
18 A Rufus raises one huge hand, palm flat.
19 D MAI LINH: That's not him, that's the heating.
20 D DOT: It's him.
21 D LAZARO: It's the heating!
22 D WREN: Tell me which, I'm hanging out here!
23 D CASSIUS: Dot. Which?
24 D DOT (whispering): Twelve forty. It's him.
25 A ¶ A flashlight beam sweeps across the foxes.
26 A Rufus slowly, silently, pulls the bear's display curtain across them all.
27 A Darkness.
28 A ¶ The footsteps stop.
29 A A long beat.
30 A Then a cough, and they move on.
31 D MAI LINH (exhaling): Looping now.
32 D CASSIUS: Wren, go.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02026.json
### SCENE s02026 | INT. CLOSED OBSERVATION TOWER - STAIRWELL LANDING - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RENATA VOSS, ELIAS MBEKI, DEPUTY HANNAH OAKES, SIREN, DOCTOR AMARA LINDQVIST
1 A ¶ Concrete.
2 A One bulb.
3 A Rain in the vents.
4 A ¶ AGENT RENATA VOSS (40s) crouches over a duffel bag.
5 A Zipper open.
6 A Cash, passports, a phone.
7 A Her breathing is slow, controlled.
8 A ¶ Footsteps below.
9 A Heavy.
10 A Climbing.
11 A ¶ She zips the bag.
12 A Stands.
13 A Back to the wall.
14 A ¶ A figure rounds the landing.
15 A ELIAS MBEKI (50s), coat soaked, pistol low.
16 A He stops.
17 A Sees her.
18 A Neither moves.
19 A ¶ Behind him, DEPUTY HANNAH OAKES (30s), radio on her shoulder, edges up the steps.
20 D ELIAS (low): Renata.
21 D RENATA: Elias.
22 D HANNAH: Hands where I can see them!
23 D ELIAS: Hannah, stand down.
24 A ¶ Renata's eyes flick to the bag.
25 A His follow.
26 A Both lunge at once.
27 A Elbows, knees, a snarl.
28 A The bag skids across the concrete.
29 A ¶ She hooks his leg.
30 A He drives her into the railing.
31 A It groans.
32 A ¶ The pistol clatters down the stairs.
33 A Hannah ducks aside as it passes her boots.
34 A ¶ He gets a forearm across her throat.
35 A She bites his wrist.
36 A He yanks free.
37 A ¶ Hannah raises her weapon.
38 A Shaky.
39 A Trying to find a clean line.
40 D HANNAH: Stop! Both of you!
41 A ¶ They don't.
42 A Then a SIREN builds outside.
43 A Red and blue strobe through the vent slats.
44 A ¶ They freeze, still tangled.
45 A Breathing hard.
46 A Rain drums on the roof.
47 A ¶ DOCTOR AMARA LINDQVIST (60s, civilian) appears at the top of the stairs, hands raised, trembling, a thermos in one.
48 D AMARA (breathless): Please. I only came up to fix the lamp.
49 A ¶ Nobody answers.
50 A The siren fades past.
51 A ¶ Renata lets go first.
52 A He follows.
53 A They step apart.
54 D ELIAS (tired): It's over.
55 D RENATA: It never is.
56 A ¶ She sits down on the stairs, defeated, and holds out her wrists.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02027.json
### SCENE s02027 | INT. CANDLE-MAKER'S WORKSHOP - LONDON - NIGHT, 1666
Detected names (may be incomplete or contain aliases): MASTER EZEKIEL THORNE, MISTRESS AGNES THORNE, ALDOUS PEEL, MERCY FAIRWEATHER, CAPTAIN BARNABY LOCKE
1 A ¶ A low timber room that smells of tallow and smoke.
2 A Cauldrons of molten wax squat on iron tripods.
3 A Rows of tapers hang from the rafters like pale stalactites.
4 A Through the shuttered window comes a dull orange glow that is not sunrise.
5 A ¶ MASTER EZEKIEL THORNE (60s, apron stiff with wax, beard singed at the tips) stands at a vat, stirring with both hands as though his life depended on it.
6 A ¶ His wife, MISTRESS AGNES THORNE (50s, severe, with a ring of keys at her belt) drags a chest across the floor.
7 A ¶ Their apprentice, ALDOUS PEEL (16, thin, ink-stained fingers) crouches beside the window, peering through a crack.
8 A ¶ Near the hearth, MERCY FAIRWEATHER (20s, a lodger, shawl pulled tight, a bird in a wicker cage clutched to her chest) huddles in silence.
9 A ¶ And in the doorway, framed against the night, stands CAPTAIN BARNABY LOCKE (40s, soot-blackened coat, a constable's staff) breathing like a bellows.
10 D LOCKE: The wind has turned! It comes down Pudding Lane toward you! Out, all of you, now!
11 D EZEKIEL (without turning): Forty years I have poured wax in this room.
12 D AGNES: Ezekiel.
13 D EZEKIEL (to himself): Forty years, and never a fire.
14 D AGNES: There is a fire now, you stubborn goat.
15 D ALDOUS: Master, the glow has reached the baker's roof.
16 D EZEKIEL: Hush, boy.
17 D ALDOUS: It is not hushing, sir. It is coming.
18 A ¶ Mercy's bird chirps, a small frantic sound.
19 A She presses her cheek against the cage.
20 D MERCY (whispering): Hush, hush, hush.
21 D LOCKE: There is a boat at Queenhithe. I can take four.
22 D AGNES: We are five.
23 D LOCKE: Then someone must find another way.
24 A ¶ A silence.
25 A Agnes looks at her husband, at the wax, at the girl with the bird.
26 A Ezekiel finally sets down the paddle.
27 D EZEKIEL (to the room): Everyone take what they can carry. Leave the rest.
28 D AGNES (to Ezekiel): You will carry me, then.
29 D EZEKIEL: I will carry the chest.
30 D AGNES: We are leaving the chest!
31 D EZEKIEL (softly): It holds the deed.
32 A ¶ Aldous grabs a bundle of tapers.
33 A Mercy rises with her cage.
34 A Locke steps aside as they hurry past, one by one, into the street.
35 A ¶ Ezekiel is last.
36 A He stops at the threshold and looks back at the vats, the rafters, the pale rows of unlit candles.
37 D EZEKIEL [CONT'D] (murmuring): Burn bright, then. Burn bright.
38 A ¶ He shoulders the chest and goes out.
39 A The doorway fills with orange light.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02070.json
### SCENE s02070 | INT. CURLING CLUB - SALT MINE LEVEL TWO - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS BRANNIGAN, TAMSIN OKAFOR
1 A ¶ A sheet of ice laid inside a hollowed-out salt chamber, lit by work lamps strung from the ceiling.
2 A The walls glitter pink and white.
3 A Stones sit in their rack like sleeping animals.
4 A ¶ HOLLIS BRANNIGAN, 60s, barrel-chested, a cardigan under his club blazer, kneels at the far hog line with a pebble can.
5 A He sprays the ice in careful rows, one pass, then another.
6 A He has done this alone for a long time.
7 A ¶ A steel door clangs somewhere above.
8 A Footsteps on the stairs.
9 A Hollis does not look up.
10 A He sprays another row.
11 A ¶ TAMSIN OKAFOR, late 20s, tall, hair still wet from a shower, enters with her broom over her shoulder and a duffel dragging from her other hand.
12 A She stops at the hack.
13 A She sets the duffel down, picks it up again, sets it down.
14 A Hollis sprays.
15 A She watches the back of his head, then crouches and runs a glove along the ice as if checking it for a fever.
16 D HOLLIS: Ice is fast tonight.
17 D TAMSIN: It's always fast when it doesn't matter.
18 A ¶ Hollis caps the can.
19 A He stands in two stages, hand on his knee, and walks the length of the sheet to the rack.
20 A Tamsin slides into the hack without a stone, her eyes on the button, her broom across her lap.
21 A Hollis lifts a stone, wipes the running band with his sleeve, and carries it back to her.
22 A He sets it beside her boot.
23 A Neither speaks.
24 A A drip of brine lands somewhere in the dark.
25 D TAMSIN [CONT'D]: They called at six.
26 D HOLLIS: I heard.
27 D TAMSIN: Eleven years.
28 D HOLLIS: Thirty-one, for the building.
29 A ¶ She almost laughs and turns it into a cough.
30 A He pulls the stone's handle straight, a quarter-inch adjustment that does nothing.
31 D TAMSIN: You could have told me before the bonspiel.
32 D HOLLIS: Would you have thrown it differently?
33 A ¶ She says nothing.
34 A She takes the handle, sets her feet, and slides out, long and low.
35 A The stone runs down the sheet in a clean curl.
36 A Hollis walks beside it, not sweeping, hands in his blazer pockets, and when it stops a foot short of the button he nods at it the way a man nods at a stranger on a train.
37 D TAMSIN: Short.
38 D HOLLIS: Mm.
39 A ¶ He bends, picks up the stone, and carries it back himself.
40 A She lets him.
41 A At the hack he sets it down again beside her boot, exactly where it was before, and straightens the broom on her lap so the brush points the right way.
42 D HOLLIS [CONT'D]: Lock up when you're done. The key sticks. Lift, then turn.
43 D TAMSIN: Lift, then turn.
44 A ¶ He goes up the stairs one at a time.
45 A At the top the door clangs again.
46 A Tamsin sits in the hack with the stone, in the pink light, and does not throw it.
47 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02071.json
### SCENE s02071 | INT. ORBITAL GREENHOUSE RING - SECTOR NINE - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN IRENKA VOSS, DUMISANI NKOSI, PELL
1 A ¶ Rows of dead tomato vines hang from the ceiling racks like gray rope.
2 A Emergency amber pulses.
3 A A hull alarm drones under everything.
4 A ¶ CAPTAIN IRENKA VOSS, 50s, rail-thin, flight suit patched at the knees, slams a manual valve wheel.
5 A DUMISANI NKOSI, 30s, engineer, wedges a pry bar into a buckled bulkhead seam.
6 A PELL, 20s, the botanist, hugs a seed vault to his chest.
7 D IRENKA: Everyone, pressure in ninety seconds. Move your feet.
8 D DUMISANI (to Pell): Hold the light higher. Higher!
9 D PELL (muttering): It's a tomato. It's just a tomato.
10 A ¶ The bulkhead groans.
11 A Dumisani and Irenka heave on the bar together and the seam shrieks open six inches.
12 A A gust of cold air tears through, and all three duck, Pell clutching the vault, Dumisani losing his grip, Irenka grabbing his collar.
13 D IRENKA: Nobody lets go of anything!
14 D PELL (to himself): Breathe, breathe, breathe.
15 D DUMISANI: Captain, the vault is not coming through that gap!
16 D IRENKA: Then the vault goes first and we follow it.
17 A ¶ She pushes Pell toward the opening.
18 A Pell and Dumisani both freeze as the alarm changes pitch, a rising whine.
19 A Irenka looks up at the ceiling vents.
20 A She shoves them both through and dives in after.
