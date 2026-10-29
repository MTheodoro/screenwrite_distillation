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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05106.json
### SCENE s05106 | INT. CORNERSTONE FITNESS - MORNING
Detected names (may be incomplete or contain aliases): CAL, BOZ, PAT, INES
1 A ¶ cal is on the leg press doing about half the weight he thinks he's doing, and boz, the trainer, is next to him counting reps in a voice that says he's counted a lot of reps, and across the floor a woman in a faded blue hoodie sits on the mat doing nothing at all and pat at the front desk is eating a banana and pretending to read the sign-in sheet.
2 D CAL: it's been like three weeks for me
3 D BOZ: it's been like three weeks for you for like six years
4 D CAL: that's fair
5 A ¶ THE WOMAN looks over from the mat.
6 A She takes her time, then goes back to staring at her shoes.
7 D BOZ (low): that's the one who comes at 6 and just sits
8 D CAL: what's her deal
9 D BOZ: didn't ask
10 D CAL: you ask everybody
11 D BOZ: not her
12 A ¶ pat leans over the desk.
13 D PAT: hey, she's got a bag. like a doctor bag. she carries it everywhere
14 D CAL: maybe she is a doctor
15 D PAT: doctors go to nicer gyms
16 A ¶ They all go quiet.
17 A The woman gets up, opens her bag, takes out a small plastic case and a folded paper, and sets them both very carefully on the bench next to cal, then sits again.
18 D CAL: uh hi?
19 D THE WOMAN: you left your pills in the locker room. i found them. i'm ines. i'm a nurse. you took a double dose today didn't you. your hands are doing that thing
20 A ¶ cal looks at his hands. boz looks at cal's hands. pat puts down the banana.
21 D CAL: i'm fine
22 D INES: okay
23 A ¶ She picks up her bag and walks out.
24 A The door sighs shut behind her.
25 A The leg press clanks, once, and stays at the bottom.
26 D BOZ (after a while): cal. sit down
27 D CAL: i am sitting
28 D BOZ: okay

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05107.json
### SCENE s05107 | INT. MOVING VAN - DAY
Detected names (may be incomplete or contain aliases): SAM, JEN, BIG DAVE, MO, MRS. K, LOU
1 A ¶ CLOSE ON the back of a rattling box truck, packed to the roof with old furniture wrapped in grey blankets.
2 A We see a walnut dresser from the 1920s, a mirror in a gilded frame, and a tall grandfather clock lashed with orange straps.
3 A ¶ Rain hammers on the metal roof.
4 A The road outside is wet and grey.
5 A It is a very dull morning.
6 A ¶ SAM, 30s, sits on a crate near the back door, looking worried.
7 A He checks the straps again.
8 A Next to him JEN, 20s, is writing on a clipboard.
9 A In the front, through a little window, we see BIG DAVE driving and MO in the passenger seat eating chips.
10 D SAM: Jen, are you sure the clock is secure? It's worth like ten thousand dollars.
11 D JEN: He has checked it three times, Sam. He is very sure.
12 D SAM: I'm just saying, if it falls, we all lose our jobs.
13 A ¶ The van hits a pothole.
14 A The clock RATTLES.
15 A The mirror TINKLES.
16 A She grabs the clipboard.
17 A He grabs the clock.
18 D BIG DAVE [O.S.]: Sorry about that, folks!
19 D MO [O.S.] (through the window): Dave, watch the road!
20 A ¶ Lightning FLASHES through the cracks in the door and, for a second, we see everyone's faces lit up in white.
21 A ¶ In the back, behind the dresser, a hand moves.
22 A It is an old woman's hand, wrinkled and thin, and she pushes a blanket aside.
23 A This is MRS. K, 80s, the owner of all this furniture, who has been hiding in the van the whole time.
24 D SAM (shocked): Mrs. K?
25 D MRS. K: I wasn't going to let you take Henry's clock without me.
26 D JEN: Ma'am, you can't be back here. It's not safe.
27 D MRS. K: I have been safe for eighty years. I would like to be something else.
28 A ¶ The phone in Jen's pocket BUZZES.
29 A She looks at it, he looks at her, and she answers.
30 D JEN (into phone): Hello? Yes, we have her. No, she's fine.
31 D LOU [V.O.] (over phone): Jen, it's Lou at dispatch. The client's daughter just called. Her mother is missing. Please tell me she's in the van.
32 D JEN: She is in the van.
33 D LOU [V.O.]: Oh thank God.
34 A ¶ The van HONKS and SCREECHES to a halt.
35 A Everyone slides forward.
36 A The clock tips.
37 A Sam catches it, barely.
38 A They all breathe.
39 A ¶ A pause.
40 A The rain softens.
41 A Out the back window a rainbow, small and surprised, appears over a wet parking lot.
42 D MRS. K (smiling): Henry always loved a rainbow.
43 A ¶ Sam looks at her.
44 A She looks at him.
45 A They both understand something they cannot say.
46 D BIG DAVE [O.S.]: We're here! Everybody out!
47 A ¶ The back door RATTLES OPEN.
48 A Light pours in.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05108.json
### SCENE s05108 | INT. COUNTY PAROLE OFFICE - AFTERNOON
Detected names (may be incomplete or contain aliases): WENDELL PRUITT, OFFICER TANYA BELL, GLORIA
1 A ¶ The building has the smell of old carpet and burnt coffee.
2 A A radiator knocks somewhere behind the drywall.
3 A Outside, the rain has been falling since morning without conviction.
4 A Under the buzzing tube light, a waiting room of orange plastic chairs, and in them, a cardiac surgeon who used to hold hearts in his hands now holds a clipboard.
5 A ¶ WENDELL PRUITT, 58, silver-haired, hands still gentle in the way of men who've been told for decades to be careful, sits across from the desk of OFFICER TANYA BELL, 40s, who has the tired patience of someone who has read every excuse ever invented.
6 A Behind him his wife GLORIA, 50s, grips her purse.
7 A At the counter, the clerk ODELL stamps forms, and the receptionist JUNO eats her lunch from a tupperware lid.
8 D BELL: Dr Pruitt you understand the terms. No practising, no prescribing, no supervised access to patients. Not even a flu shot at the church.
9 D WENDELL: I understand the terms Officer Bell. I'm not asking to practice. I'm asking to sit with one man. His name is Alvin Reese. He has eleven days. His family called me because no one else in this county would touch his valve.
10 D GLORIA: Wendell
11 D WENDELL: No Gloria. Let me say it. Eleven years I've kept every rule they gave me. I didn't cut when the board told me not to cut. I didn't speak when the lawyers told me not to speak. A man is dying forty minutes from here and I know exactly how to stop it and I am sitting in a chair that's too small for me asking permission.
12 D BELL: That's not my decision.
13 D WENDELL: Whose is it then.
14 A ¶ The radiator knocks.
15 A Odell stops stamping.
16 A Juno stops chewing.
17 A Bell closes the file very softly, the way you close a door on a sleeping child.
18 D BELL: Mine, apparently. Doctor, I'm going to step out for ten minutes to take a phone call that I will not be able to remember in the morning. Odell. Juno. You didnt see him leave either.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05110.json
### SCENE s05110 | INT. GLAMOUR NAILS - DAY
Detected names (may be incomplete or contain aliases): JEN, MO, BIG DAVE, LILY, TASHA, MRS. K, ^MO
1 A ¶ SERIES OF SHOTS:
2 A ¶ - Neon sign flickers on.
3 A OPEN.
4 A Pink light on cracked linoleum.
5 A ¶ - Rows of polish bottles, a hundred shades of nothing-to-say.
6 A Acetone haze hangs over the room like weather.
7 A ¶ MRS. K, 60, owner, tiny, reading glasses on a beaded chain, runs the front desk like an air traffic tower.
8 A Her niece JEN, 20s, ponytail and a tattoo of a swallow on her wrist, files a customer's thumbnail while MO, 30s, soft-spoken and the only one who ever sits down, paints stripes on a toddler's birthday set and BIG DAVE, 50s, a mountain of a man in a tiny salon chair, is getting his first pedicure of his life for his daughter's wedding and hating every second, and in the corner LILY, 70s, silver bob, oxygen-thin voice, flips a magazine she isn't reading, while TASHA, 30s, in scrubs, still wearing her hospital badge, waits her turn with her phone face down.
9 A ¶ MONTAGE - THE AFTERNOON
10 A ¶ - 1:15 PM.
11 A Big Dave winces.
12 A Jen laughs.
13 A ¶ - 2:40 PM.
14 A Lily's magazine slips.
15 A Tasha glances over.
16 A Looks away.
17 A ¶ - 3:30 PM.
18 A Lily's hand shakes on the armrest.
19 A Sweat on her lip.
20 A Nobody else sees.
21 D TASHA (quietly): Ma'am? You okay?
22 D LILY: Just warm.
23 D MRS. K: Jen, the fan!
24 A ¶ Jen turns the fan.
25 A The air moves.
26 A Lily's eyes don't.
27 D TASHA: Lily, right? When did you last eat?
28 D LILY: Breakfast. I think. I don't--
29 D BIG DAVE: She's grey. Why is she grey?
30 D MRS. K: Nobody panic in my shop!
31 D ^MO: Call 911. Somebody call 911!
32 A ¶ Tasha is already on her knees, two fingers at Lily's neck, and Jen grabs the phone, and Mrs. K knocks over a tray of bottles that SHATTER across the floor, red polish spreading like blood while Big Dave lifts the whole chair with Lily in it and Mo screams for room.
33 D TASHA: Get her flat! Flat! Now!
34 D MRS. K: Don't tell me what to do in my shop!
35 D TASHA: Then watch her die in it!
36 A ¶ Silence.
37 A Then Lily's chest rises.
38 A Falls.
39 A Rises.
40 A ¶ Sirens, far off, growing.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05112.json
### SCENE s05112 | INT. VELVET TIPS NAIL LOUNGE - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DONNA
1 A ¶ SUPER: "CORPORATE OFFSITE - DAY 3"
2 A ¶ INSERT - A LAPTOP SCREEN.
3 A Video call software.
4 A A red dot blinks: RECORDING.
5 D DONNA [O.S.] (sitting straight, clearing her throat, adjusting a headset that does not need adjusting): Hi. Okay. Is it recording? It says recording. Great. This is my statement for the Q3 culture review, and I want to begin by saying I love this company.
6 D DONNA (smiling very hard): I love the open floor plan, which is a nail salon. I love that our break room is also the supply closet, and that our wellness program is the free acetone.
7 D DONNA (laughing, not laughing): Which is a joke. That is a joke. Please mark it as humor.
8 D DONNA (picks up a bottle of polish, reads the label, puts it down): There are two people in this story. Marcy in Accounts and Marty in Facilities. Marcy sends the emails. Marty receives the emails. Except it's reversed, because the system autocorrects them, and for eleven months I have been invoicing Marty's boiler repairs to Marcy's bonus.
9 D DONNA (leans toward the camera): And Marcy knows. And Marty knows. And I know that they know. And nobody says anything, because this is a culture of respect.
10 D DONNA (whispering): This is the last time they will speak to me as a colleague.
11 D DONNA (sits back, normal voice, bright): So here are my concerns. One. The mandatory fun. We have a fun committee. It meets at six a.m. It is not fun. Two. The feedback system, in which you may give anonymous feedback, provided you sign it.
12 D DONNA (counting on fingers): Three. The word "synergy" was used forty-one times at Tuesday's all-hands, and I counted because I was told to be present.
13 D DONNA (a long breath, shoulders dropping, eyes wet and furious): And four. I have given this place nine years. I have painted forty thousand nails. Nobody has ever once asked me what colour I would choose.
14 D DONNA (reaches for a bottle at the edge of frame, a deep, ugly green; holds it up): This one. It is called "Quarterly Growth." I picked it. I would like it on the record that I picked it.
15 D DONNA (screws the cap off, looks at the camera): Marcy. Marty. If you are watching this, and I know you are, because the call is on the big screen in the lobby--
16 D DONNA (freezes; slowly turns her head toward the door; turns back, composed): Hi. We'll finish this in the all-hands.
17 D DONNA (reaches for the laptop, hand shaking, cheerful): Thank you for your time. Please rate this statement out of five.
18 A ¶ SUPER: "THIS CALL HAS BEEN RECORDED FOR TRAINING PURPOSES"

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05113.json
### SCENE s05113 | INT. ST. VINCENT'S - FOURTH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE, KIM, OZZIE, KIP, DR. HALE
1 A ¶ Fluorescent hum.
2 A A gurney wheel squeaks somewhere unseen.
3 A ¶ Kim, 40s, charge nurse, stands at the station with a chart.
4 A Kip, 20s, orderly, mops in slow circles nearby.
5 A A visitor sleeps in a chair, mouth open.
6 A ¶ Marguerite Voss, 50s, attorney in a wet trench coat, strides in with a leather folio.
7 D MARGUERITE: I need the patient in 412. Now.
8 D KIM: Visiting hours ended at nine.
9 D MARGUERITE: He signed a statement tonight. I need it witnessed before--
10 A ¶ Ozzie, 30s, night nurse, they/them, appears from a doorway, pale, pen still in hand.
11 D OZZIE: Nobody's in 412. They went down at ten.
12 D KIP: Went down where?
13 D KIM: Ozzie, what do you mean, went down?
14 D MARGUERITE: Then who signed this?
15 A ¶ She lifts the page.
16 A Wet ink.
17 A Fresh.
18 A ¶ A call light CHIMES.
19 A 412.
20 A ¶ All four look down the hall.
21 A The door is open.
22 A ¶ Dr. Hale, 60, in a rumpled white coat, steps out of 412.
23 A He wipes his hands on a towel.
24 A He does not look at them.
25 D DR. HALE (soft): He's resting.
26 A ¶ The lights flicker.
27 A Out.
28 A On.
29 A ¶ The sleeping visitor is gone.
30 A The chair still rocks.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05114.json
### SCENE s05114 | INT. PRETTY PINK NAILS - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): PAM, LOU, GUS
1 A ¶ Rain taps the front window.
2 A The sign buzzes.
3 A A string of dusty Christmas lights, still up in March, blinks out of sync.
4 A ¶ PAM, 40s, nail tech, bends over a client's hand with a drill file.
5 A LOU, 50s, the client, scrolls her phone with her free hand.
6 A ¶ The smell of acetone.
7 A Of something sweeter under it.
8 D PAM: Your cuticles are in rough shape Lou.
9 D LOU: It's the dishwasher. Always the dishwasher.
10 D PAM: You need a oil. I'll put some on after.
11 A ¶ The drill WHIRS.
12 A Stops.
13 A Whirs.
14 A ¶ Outside a bus hisses past.
15 A Wet tires on wet road.
16 D LOU: Is it me or is it cold in here?
17 D PAM: Heater's been broke since Tuesday. Mrs K says shes getting a guy.
18 D LOU: A guy.
19 D PAM: A guy.
20 A ¶ Pause.
21 A The lights hum.
22 A Somewhere in the back a faucet drips.
23 A Drip.
24 A Drip.
25 D LOU: Did you hear that?
26 D PAM: The faucet?
27 D LOU: No. Under it.
28 A ¶ They listen.
29 A The faucet.
30 A The rain.
31 A The sign.
32 A ¶ Then a slow scraping, like a chair being dragged across tile in the back room.
33 D PAM (too brightly): Old building. Pipes.
34 A ¶ The bell on the front door JINGLES.
35 A ¶ GUS, 60s, a tall man in a soaked grey raincoat with no umbrella, steps in.
36 A Water runs off his sleeves onto the mat.
37 A He smiles with too many teeth.
38 D GUS: Afternoon, ladies. Is the owner in?
39 D PAM: Mrs K's out. Can I help you?
40 D GUS: I'll wait.
41 A ¶ He sits in the pedicure chair by the window.
42 A The water jets turn on by themselves.
43 A Nobody touches them.
44 D LOU (whispering): Pam.
45 D PAM: I see it.
46 A ¶ The scraping in the back stops.
47 A ¶ Rain.
48 A Rain.
49 A Rain.
50 D GUS: Nice weather for it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05115.json
### SCENE s05115 | INT. THE GRAND MERIDIAN HOTEL - SEVENTH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HAROLD WEEMS, CLAIRE BOSWORTH, RICKY
1 A ¶ We see a long hotel corridor with red carpet and gold wallpaper.
2 A The lights are dim and it is very quiet.
3 A Room numbers go from 701 down to 720 and we can tell this is an expensive hotel.
4 A ¶ CLOSE ON the door of room 714.
5 A It is slightly open.
6 A ¶ DETECTIVE HAROLD WEEMS, 50s, wearing a rumpled brown suit and carrying a notepad, walks down the corridor.
7 A He looks tired because he has been working all night.
8 A ¶ He stops outside 714 and pushes the door gently with his finger.
9 D WEEMS: Hello? Police.
10 A ¶ No answer.
11 A He steps inside and out of view.
12 A ¶ A moment later a door SLAMS somewhere down the hall and CLAIRE BOSWORTH, 30s, in a red evening gown, bursts out of the stairwell, out of breath.
13 A She is holding her shoes in one hand.
14 A ¶ Weems steps back out into the corridor and sees her.
15 D WEEMS: Miss Bosworth. I told you to stay in the lobby.
16 D CLAIRE: I couldn't. Not after what Ricky told me.
17 D WEEMS: Ricky?
18 D CLAIRE: The bellhop. He saw someone go into 714 at eleven o'clock, and it wasn't the man who checked in. It was a woman. A tall woman with a scar on her cheek, and she was carrying a case.
19 D WEEMS: A case. What kind of case?
20 D CLAIRE: A violin case. Or at least that's what Ricky thought, but he said it was too heavy for a violin, because she had to use both hands, and her whole arm was shaking, and then she looked straight at him and said, "I was never here," and gave him a hundred dollars.
21 D WEEMS: And he took it.
22 D CLAIRE: Of course he took it. He's twenty-two and he makes eleven dollars an hour.
23 D WEEMS: Where is Ricky now?
24 D CLAIRE: I don't know. He went to take the service elevator down to get his coat, and that was twenty minutes ago, and he hasn't answered his phone.
25 A ¶ Claire's phone BUZZES in her hand.
26 A She looks down at it.
27 A ¶ CLOSE ON the phone screen.
28 A ¶ ON PHONE: dont trust the cop
29 A ¶ ON PHONE: hes been in the room before
30 A ¶ She looks up slowly at Weems.
31 D WEEMS: What is it?
32 D CLAIRE: Nothing. It's nothing. Just my sister.
33 D WEEMS: May I see?
34 D CLAIRE: No.
35 A ¶ He reaches for the phone and she pulls it back.
36 A They both freeze.
37 A ¶ At the far end of the corridor, the service elevator DINGS.
38 A ¶ The doors slide open.
39 A RICKY, 22, in a bellhop uniform, stands there pale and shaking.
40 A He holds up one hand.
41 A There is blood on it.
42 D RICKY: Detective. You need to come with me. Please. Right now.
43 D WEEMS: What happened to your hand?
44 D RICKY: It's not my blood.
45 A ¶ Claire backs away.
46 A Weems takes a step toward Ricky.
47 A Claire turns and runs for the stairwell.
48 D WEEMS: Miss Bosworth! Stop!
49 A ¶ The stairwell door SLAMS behind her.
50 A ¶ Weems and Ricky look at each other.
51 A Neither moves.
52 D RICKY: She's not who she says she is.
53 D WEEMS: I know.
54 D RICKY: You knew?
55 D WEEMS: I've known since the lobby. But I needed to see where she'd run.
56 D RICKY: And now?
57 D WEEMS: Now we go after her, and you tell me everything on the way.
58 A ¶ They both run toward the stairwell.
59 A The corridor lights flicker and go out.
60 A ¶ In the dark, one door CLICKS open.
61 A Room 714.
62 A ¶ A tall shadow stands in the doorway.
63 A She is holding a violin case.
64 A ¶ She does not move.
65 A ¶ Her phone BUZZES.
66 A ¶ ON PHONE: found you

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05116.json
### SCENE s05116 | INT. MERCY GENERAL - NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): INES, WALLY
1 A ¶ 3 a.m.
2 A The hospital hums.
3 A Vending machine glows.
4 A A mop bucket sits abandoned.
5 A Rain on the windows.
6 A ¶ Its heritage week, so the whole floor is in costume.
7 A A banner reads "MERCY GENERAL: 100 YEARS OF CARING."
8 A ¶ INES, 50s, night nurse, wears a starched 1920s nurse's cap and a cardigan.
9 A She counts pills.
10 A Dry as toast.
11 A ¶ WALLY, 30s, resident, bursts through the doors in a full Victorian surgeon's apron and top hat.
12 A ¶ (Applause beat.)
13 D WALLY: Good evening Ines. Did you miss me?
14 D INES (not looking up): Seven hours isn't long enough.
15 A ¶ ANGLE ON Wally, who tips the hat.
16 A It falls off.
17 D WALLY: It was a very sturdy hat this morning.
18 D INES: They gave you the one with the moth.
19 A ¶ He picks it up.
20 A Looks inside.
21 A A moth flutters out.
22 D WALLY: Well. It's alive. That's more than I can say for my evening.
23 A ¶ She slides a chart across the counter without a word.
24 A ¶ INSERT - THE CHART.
25 A Room 9.
26 A Patient: M. Alder.
27 A Allergies: none.
28 A Next of kin: blank.
29 A ¶ BACK TO SCENE
30 D WALLY: Whos Mr. Alder?
31 D INES: Brought in at midnight. No visitors. No calls.
32 D WALLY: Maybe he's shy.
33 D INES: Maybe.
34 A ¶ She sorts the pills again.
35 A Same pills.
36 A Same order.
37 D WALLY: You've counted those three times.
38 D INES: Four.
39 A ¶ He looks at her.
40 A She doesn't look back.
41 A The vending machine HUMS.
42 D WALLY: Ines. Is something
43 D INES: Pass me the pen.
44 A ¶ He passes the pen.
45 A She writes "Alder" and then crosses it out and writes it again, slower.
46 A ¶ WE SEE through the glass of Room 9, a man's hand resting on the blanket, a wedding ring catching the light.
47 D WALLY (softly): You know him.
48 D INES: I know a lot of people.
49 D WALLY: Ines.
50 D INES: He was a medic. In the old days. We worked a flood together in '09. He carried me out of a basement.
51 A ¶ She puts the pen down very carefully, like it might break.
52 D WALLY: Shall I
53 D INES: No. I'll go.
54 A ¶ She straightens her cap.
55 A Walks to Room 9.
56 A At the door she pauses, one hand on the frame, and for a second the whole floor is silent.
57 A Even the rain.
58 A ¶ CLOSE ON Wally, who takes off his ridiculous hat and holds it against his chest.
59 A ¶ She goes in.
60 A The door closes.
61 A ¶ The monitor beeps once.
62 A Then again, faster.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05117.json
### SCENE s05117 | INT. NEW DAWN FERTILITY CLINIC - RECEPTION - NIGHT
Detected names (may be incomplete or contain aliases): JO, RAY, FREEZER DOOR SLAMS, BEA, RADIO, VIC
1 A ¶ Empty waiting room.
2 A Soft jazz on a dead speaker.
3 A Rain streaks the windows.
4 A ¶ Orchids.
5 A Glossy brochures.
6 A A wall of baby photos.
7 A ¶ JO, 30s, receptionist, locks the front drawer.
8 A Hurries.
9 A ¶ Her phone BUZZES.
10 A ¶ She snatches it.
11 A Reads.
12 A Pales.
13 A ¶ RAY, 40s, night security, strolls in with a flashlight and a donut.
14 D RAY: Working late, Jo?
15 D JO: Just leaving.
16 D RAY: Door's alarmed. Nobody leaves till eleven.
17 A ¶ She backs toward the hall.
18 D JO: Ray. Please.
19 A ¶ BEEP-BEEP-BEEP.
20 A The alarm panel blinks red.
21 A ¶ Ray's smile dies.
22 A He drops the donut.
23 D RAY: What did you take?
24 A ¶ Down the hall, a FREEZER DOOR SLAMS.
25 A ¶ Both turn.
26 A ¶ BEA, 30s, lab tech, sprints out of the lab with a steel canister in her arms.
27 A Frost pours off it.
28 A Her scrubs are soaked.
29 D BEA: Go! Go! Go!
30 D RAY: Put it down!
31 D BEA: Those are eleven families, Ray!
32 D JO: She's right. Look at the logs. Somebody's been selling them.
33 A ¶ Ray hesitates.
34 A His radio CRACKLES.
35 D RADIO [V.O.]: Unit four, status?
36 A ¶ A shadow fills the glass front doors.
37 A ¶ VIC, 50s, in a black coat, a clinic director's badge swinging from his neck, raises a keycard.
38 A The lock CLICKS.
39 D VIC: Nobody move.
40 A ¶ Jo grabs the canister.
41 A Bea shoves Ray.
42 A The alarm SCREAMS.
43 A ¶ They bolt for the fire exit.
