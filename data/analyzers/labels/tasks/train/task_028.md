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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01562.json
### SCENE s01562 | INT. NEONATAL ICU - NURSES' STATION - 3 A.M.
Detected names (may be incomplete or contain aliases): SAOIRSE ACHEBE-LINDGREN, NURSE PERPETUA OKONKWO-HART, ELIAS FAIRWEATHER-NNAMDI, HOLLIS BRZEZINSKI-OSEI
1 A ¶ Low lights.
2 A Monitors blink like fireflies.
3 A Incubators glow along the far wall.
4 A ¶ DR. SAOIRSE ACHEBE-LINDGREN, 40s, scrubs rumpled, drinks cold tea.
5 A NURSE PERPETUA OKONKWO-HART, 50s, charts at the desk.
6 A RESIDENT DR. ELIAS FAIRWEATHER-NNAMDI, 20s, rubs his eyes.
7 A And the father, HOLLIS BRZEZINSKI-OSEI, 30s, in a jacket over pyjamas, stands with a paper cup he has not touched.
8 D SAOIRSE: Mr. Brzezinski-Osei, sit down.
9 D HOLLIS: I'd rather stand.
10 D SAOIRSE: Please.
11 D HOLLIS: Is she worse?
12 D SAOIRSE: She's the same.
13 D HOLLIS: The same.
14 D PERPETUA: Her numbers are stable.
15 D ELIAS: Her oxygen sats are ninety-four.
16 D HOLLIS: Is that good?
17 D SAOIRSE: It's better than yesterday.
18 D HOLLIS: But it's not good.
19 D ELIAS: It's within range.
20 D HOLLIS: Whose range?
21 D SAOIRSE: Ours.
22 D PERPETUA: Mr. Brzezinski-Osei, she is fighting.
23 D HOLLIS: She weighs less than a bag of sugar.
24 D SAOIRSE: She weighs one kilo, four hundred.
25 D HOLLIS: Everyone keeps telling me the number.
26 D ELIAS: It's what we have.
27 D HOLLIS: I have a name for her.
28 D SAOIRSE: We know. Matilda.
29 D HOLLIS: She doesn't know it.
30 D PERPETUA: She does. I say it every shift.
31 D HOLLIS: You say it?
32 D PERPETUA: Every shift, Mr. Brzezinski-Osei.
33 A ¶ Hollis puts down the cup.
34 A Presses his palms to his eyes.
35 D HOLLIS: Can I hold her?
36 D SAOIRSE: Not tonight.
37 D HOLLIS: When?
38 D SAOIRSE: When her numbers hold for twenty-four hours.
39 D HOLLIS: And if they don't?
40 D ELIAS: They will.
41 D HOLLIS: You don't know that.
42 D ELIAS: No. I don't.
43 A ¶ Silence.
44 A A monitor chirps.
45 A Perpetua looks up, checks the bay, nods.
46 D PERPETUA: She's fine. A feeding pump.
47 A ¶ Hollis laughs, shaky.
48 A Sits.
49 A Finally.
50 D HOLLIS: Tell me about the pump.
51 D SAOIRSE: It's a pump.
52 D HOLLIS: Tell me anyway.
53 A ¶ Saoirse sits across from him.
54 A Takes his hand.
55 A Begins to explain.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01099_0.json
### SCENE s01099_0 | INT. APPELLATE COURTHOUSE - JUDGES' ROBING ROOM - MORNING
Detected names (may be incomplete or contain aliases): JUDGE PHILOMENA ARCHIBALD-NWOSU, GIDEON
1 A ¶ Marble sinks.
2 A A rack of black robes.
3 A A stained-glass window throws red and gold on the floor.
4 A The air smells of starch.
5 A ¶ JUDGE PHILOMENA ARCHIBALD-NWOSU, 60s, silver hair pinned under a cap, buttons her robe at the mirror.
6 A A YOUNG MAN in a rumpled suit slips in through the side door, clutching a leather folio.
7 A He freezes when he sees her.
8 D YOUNG MAN: Oh. Sorry. I thought this was the clerk's office.
9 D PHILOMENA: It's the robing room. Third door down.
10 D YOUNG MAN: Right. Of course.
11 A ¶ He doesn't leave.
12 A She meets his eyes in the mirror and turns slowly.
13 D PHILOMENA: Are you lost, or are you someone I should know?
14 D YOUNG MAN: I'm counsel for the appellant. In Whitlock versus the State.
15 D PHILOMENA: Name?
16 D YOUNG MAN: Gideon.
17 D PHILOMENA: Gideon what?
18 D GIDEON: Gideon Okafor-Lindgren.
19 D PHILOMENA: You'll want to hold that for the bench, Mr. Okafor-Lindgren. Not for a judge adjusting her collar.
20 D GIDEON: Yes, ma'am. Your Honor. Sorry.
21 A ¶ She turns back to the mirror.
22 A Fastens the last button.
23 A Her fingers pause.
24 D PHILOMENA: Whitlock. The arson.
25 D GIDEON: Yes.
26 D PHILOMENA: You argue today?
27 D GIDEON: Ten o'clock.
28 D PHILOMENA: Your first appellate?
29 A ¶ He hesitates.
30 A Looks at his folio.
31 D GIDEON: Is it that obvious?
32 D PHILOMENA: You walked into a judges' dressing room with your tie untucked.
33 A ¶ He glances at his tie.
34 A Flips it back under his jacket.
35 A She watches him struggle with it and her expression softens.
36 D PHILOMENA [CONT'D]: Come here.
37 D GIDEON: Your Honor?
38 D PHILOMENA: Come here.
39 A ¶ He steps forward.
40 A She tucks the tie, smooths his lapel with both hands, adjusts his collar.
41 A The way a mother would.
42 D PHILOMENA [CONT'D]: That's better. Now. Do not tell me your theory of the case.
43 D GIDEON: I wasn't going to.
44 D PHILOMENA: You were.
45 D GIDEON: ...I was.
46 A ¶ She nods.
47 A Steps back.
48 A Her eyes flicker over his face.
49 D PHILOMENA: Mr. Okafor-Lindgren. Who taught you to argue?
50 D GIDEON: Judge Waverly Bishop.
51 A ¶ Her hands go still.
52 D PHILOMENA: Waverly Bishop.
53 D GIDEON: Yes, ma'am. Before she passed.
54 D PHILOMENA: I know. I sat beside her for eleven years.
55 A ¶ A beat.
56 A The light shifts through the glass.
57 A Gideon, uncertain, shifts his feet.
58 D GIDEON: Is something wrong?
59 D PHILOMENA: She wrote me a letter. Before she died. About a young man in her clinic. She said, "He will lose his first appeal, and it will be the best thing for him."
60 D GIDEON: She wrote you about me?
61 D PHILOMENA: She wrote me about justice. You were the example.
62 A ¶ Gideon sags against the sink.
63 A Philomena gathers her gloves.
64 D PHILOMENA [CONT'D]: I won't tell you how to argue. But I will tell you this. I read your brief last night.
65 D GIDEON: And?
66 D PHILOMENA: It was good enough to be sad about.
67 D GIDEON (laughing, almost choking): Thank you?
68 D PHILOMENA: Don't. Not yet.
69 A ¶ She walks to the door.
70 A Stops with her hand on the knob.
71 D PHILOMENA [CONT'D]: Judge Philomena Archibald-Nwosu does not take shortcuts. If you come before me, you earn it.
72 A ¶ She exits.
73 A The door closes softly.
74 A Gideon stands alone in the red light, tie perfectly knotted.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02036.json
### SCENE s02036 | EXT. FROZEN LAKE - WHITEOUT - DAY
Detected names (may be incomplete or contain aliases): ASHER VANTERPOOL, RANGER
1 A ¶ Wind.
2 A Nothing but wind and white.
3 A A lone figure kneels on a sheet of gray ice around a hole cut with a hand auger.
4 A ¶ ASHER VANTERPOOL (30s, parka crusted with frost, one glove missing) hauls a line.
5 A He wedges his heels against the ice.
6 A A walkie-talkie sits by his knee, crackling.
7 D RANGER [V.O.] (broken, windy): ...lake team...do you...ice thinning...south shore...
8 A ¶ Asher grabs the walkie.
9 A Does not answer.
10 A Lets it fall back onto the ice.
11 D RANGER [V.O., CONT'D]: ...move...north...now...
12 A ¶ The line goes taut.
13 A Something enormous tugs.
14 A He hauls.
15 A Ice groans.
16 A A hairline crack races outward from the hole.
17 A ¶ He keeps pulling.
18 D ASHER (under his breath): Come on.
19 D RANGER [V.O.]: ...Asher...do you copy...
20 D ASHER: Not yet.
21 A ¶ The crack widens.
22 A His boots slide.
23 A He braces.
24 A Pulls.
25 A ¶ The fish breaks the surface: a gray, glistening length of lake trout, fat as a man's thigh.
26 A It flops on the ice.
27 A ¶ He stares at it.
28 A Takes his bare hand and presses it to the cold flank, once, gently.
29 A Then he cuts the line, lifts the trout against his chest like something fragile, and stands.
30 A ¶ The ice groans again, deeper.
31 A He picks up the walkie.
32 D ASHER [CONT'D] (into radio): Heading north.
33 A ¶ He walks.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00488.json
### SCENE s00488 | EXT. HEDGE MAZE - WEDDING VENUE - AFTERNOON
Detected names (may be incomplete or contain aliases): PRU, SHETTY, SANTANA-REYES, JOAQUÍN, ODALYS FONTENOT, OFFICIANT DESMOND VANTERPOOL, FLOWER GIRL, TILLY BRANDT
1 A ¶ Eight-foot yew walls.
2 A Gravel paths.
3 A A white tent glimpsed over the green.
4 A A string quartet drifts in from somewhere unseen.
5 A ¶ PRUDENCE "PRU" SHETTY (30s, bridesmaid in sage satin, flats in her hand) strides down a corridor of hedge, scanning left and right.
6 D PRU: Joaquín? Joaquín!
7 A ¶ She reaches a fork.
8 A A pair of legs in tuxedo trousers sticks out from under a bench at the end of a dead-end.
9 A ¶ JOAQUÍN SANTANA-REYES (30s, groom, tie undone, a flask in his fist) is lying there, staring at the underside of the bench.
10 D PRU [CONT'D]: You are forty minutes late to your own wedding.
11 D JOAQUÍN: I'm not late. I'm lost.
12 D PRU: It's the same thing with a bow tie.
13 A ¶ She drops to her knees beside him.
14 A He offers the flask.
15 A She takes a swig and grimaces.
16 D PRU [CONT'D]: That's cough syrup.
17 D JOAQUÍN: It was all I could find.
18 A ¶ Gravel crunches.
19 A ODALYS FONTENOT (20s, bride, veil pinned to her wrist like a bracelet, running shoes under the gown) rounds the corner and halts.
20 D ODALYS: There you are.
21 D JOAQUÍN: Odalys.
22 D ODALYS: I've been through this maze eleven times.
23 D PRU: Eleven?
24 D ODALYS: Well, nine. Two were the same dead end.
25 D JOAQUÍN: I can't remember the vows.
26 D ODALYS: I wrote them down.
27 D JOAQUÍN: I lost the card.
28 D ODALYS: I have a copy.
29 D PRU (over her): Jo, breathe.
30 D JOAQUÍN (over Pru): I'm breathing.
31 D ODALYS (over both): You are not breathing, you're panicking, which is different, and it's adorable.
32 A ¶ A new voice, deep and calm, cuts in from behind the hedge.
33 A ¶ OFFICIANT DESMOND VANTERPOOL (60s, black robe, rain boots) strides around the corner with a clipboard, a walkie-talkie squawking at his belt.
34 D DESMOND: Found them. Both of them. And the maid of honor.
35 D PRU: Bridesmaid.
36 D DESMOND: Bridesmaid. Of course.
37 A ¶ A FLOWER GIRL, TILLY BRANDT (7, petals in her fist, grass-stained knees), skids in behind him and points at everyone in turn.
38 D TILLY: Is this the wedding?
39 D DESMOND: It's the pre-wedding.
40 A ¶ He looks at the four of them in the gravel.
41 A He checks his watch.
42 D DESMOND [CONT'D]: The guests are on their third appetizer. I can do this right here, if you'd like.
43 D JOAQUÍN: Here?
44 D DESMOND: There's a bench.
45 D ODALYS: Pru, hold the veil.
46 D PRU: I'm the witness?
47 D ODALYS: You're the witness.
48 A ¶ Joaquín scrambles out from under the bench.
49 A Odalys takes his hands.
50 A Desmond opens a small book.
51 A Pru, still holding her shoes, raises one in the air like a toast.
52 D DESMOND: Dearly beloved, and also hedge.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02047.json
### SCENE s02047 | INT. FAMILY FUNERAL HOME - VIEWING ROOM - DAY
Detected names (may be incomplete or contain aliases): DELACROIX-OWUSU, DELACROIX-KRAMER, BEATRIX FAIRCHILD-ANYANWU, OYELOWO-FAIRCHILD
1 A ¶ Gray carpet, a bank of white lilies, a closed walnut casket at the far wall.
2 A Folding chairs in three rows.
3 A A tissue box on every sixth chair.
4 A The air conditioning hums like an apology.
5 A ¶ MARGARET "MAGGIE" DELACROIX-OWUSU (50s, black dress, hair pinned tight) stands at the casket, one hand flat on the lid.
6 A She does not speak.
7 A Her sister, JOSEPHINE "JOJO" DELACROIX-KRAMER (40s, same dress, cheaper shoes) hovers three feet behind with a clutch purse she keeps opening and closing.
8 A ¶ On the front row, their elderly aunt, BEATRIX FAIRCHILD-ANYANWU (80s, hat with a small black veil) knits something shapeless.
9 A Beside her, her grandson, NATHANIEL "NATE" OYELOWO-FAIRCHILD (20s, tie too short, a phone he keeps checking and pocketing) sits stiffly.
10 A ¶ She straightens the lilies.
11 A She straightens them again.
12 A The other one stands behind her and watches her do it, purse snapping shut.
13 A ¶ Maggie turns.
14 A Looks past Jojo, at the door.
15 A ¶ Jojo follows her eyes.
16 A No one there.
17 A ¶ Beatrix's needles click.
18 A Nate checks his phone.
19 A Puts it away.
20 A Checks it.
21 A ¶ Maggie crosses to the front row and sits, one chair apart from Beatrix.
22 A She smooths her skirt.
23 A Jojo remains standing.
24 A After a long moment, she sits too, on the other side of her, so that she is flanked by her sister and her aunt.
25 A Maggie reaches over without looking and takes Jojo's hand.
26 A Jojo squeezes once.
27 A Neither lets go.
28 A ¶ Beatrix's needles stop.
29 A She lays them in her lap.
30 A ¶ At the back of the room, the door swings open on its own and settles.
31 A The four of them turn at the same time.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02277.json
### SCENE s02277 | EXT. VILLAGE PIER, TUG-OF-WAR - SUNSET
Detected names (may be incomplete or contain aliases): SAOIRSE KEANE, FINBARR MCGRATH, DONAL, NUALA
1 A ¶ A rope as thick as a man's wrist lies across the weathered planks of a fishing pier, its centre marked with a red rag.
2 A Below, the tide slaps the pilings.
3 A A crowd of villagers presses along the railings, quiet.
4 A ¶ SAOIRSE KEANE, forty, anchor of the harbour team, wraps the rope twice round her forearm and plants her boots against a plank she has used for twenty years.
5 A Opposite her, FINBARR MCGRATH, her cousin and rival, spits on his palms and rubs them together, grinning like a man who has already won.
6 A Behind him the rest of his team braces.
7 A At the rail, old DONAL, the referee, lifts a handkerchief, and beside him NUALA, thirteen, Saoirse's daughter, grips the rail so hard her knuckles whiten.
8 D DONAL: Take the strain!
9 A ¶ Saoirse leans back.
10 A Finbarr leans back.
11 A The red rag does not move.
12 A A gull settles on a piling to watch.
13 D FINBARR: Still got your mother's hands, Saoirse.
14 D SAOIRSE: And you've still got her mouth.
15 A ¶ The rope groans.
16 A A plank cracks under Finbarr's heel and the rag slides a foot toward the harbour side.
17 A Nuala shrieks.
18 A Saoirse digs in, the cords of her neck standing out, her boots skating on salt-slick wood.
19 D NUALA: Mam, don't let go!
20 D FINBARR: Let go, Saoirse! Let go before you're hurt!
21 D SAOIRSE (through her teeth): Not this year, Fin.
22 A ¶ The rag crosses the line.
23 A Finbarr's team stumbles.
24 A Then the old rope, frayed through twenty summers, parts with a gunshot crack, and both teams go down in a tangle of limbs and oilskin, Saoirse across her cousin's chest, and the pier erupts.
25 D DONAL: No contest!
26 D NUALA (laughing, crying): Mam!

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00991.json
### SCENE s00991 | INT. PAWNSHOP - CLOSING TIME
Detected names (may be incomplete or contain aliases): VIVIAN, LEONARD, JUDE
1 A ¶ Glass cases of watches and wedding rings.
2 A A neon "WE BUY GOLD" buzzes in the window.
3 A A wall phone hangs near the register.
4 A ¶ VIVIAN (60s, cardigan, reading glasses on her head) counts bills at the counter.
5 A The phone rings.
6 A She snatches it.
7 D VIVIAN: Hello?
8 D LEONARD [V.O.] (over phone): Viv. It's me.
9 D VIVIAN: Leonard. Where are you?
10 D LEONARD [V.O.]: Out front. Come to the door.
11 D VIVIAN: I'm closing.
12 D LEONARD [V.O.]: Please.
13 A ¶ She slams the phone down.
14 A The bell over the door jingles.
15 A JUDE (20s, gaunt, duffel bag, hoodie) steps in, shivering.
16 D JUDE: Mom.
17 D VIVIAN: Jude.
18 A ¶ She doesn't move.
19 A He drops the bag.
20 D JUDE: I need a place to stay.
21 D VIVIAN: You told me you didn't.
22 D JUDE: I know what I said.
23 A ¶ The phone rings again.
24 A Both of them look at it.
25 D LEONARD [V.O.] (muffled, from the receiver on the hook): Viv? Are you there?
26 D VIVIAN: Not now, Leonard.
27 D JUDE: Is that Dad?
28 D VIVIAN: He's been calling for a week.
29 D JUDE: Mom, I didn't come here to fight.
30 D VIVIAN: I didn't ask you to.
31 D JUDE: I'm just...
32 D VIVIAN: You're just what?
33 D JUDE: Cold.
34 A ¶ She stares at him.
35 A Then she lifts the counter flap.
36 A Holds it open.
37 A He crosses to her.
38 A She wipes his face with her sleeve.
39 A ¶ The phone keeps ringing.
40 A She lets it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01727.json
### SCENE s01727 | INT. PIGEON-RACING CLUB - BANQUET HALL - EVENING
Detected names (may be incomplete or contain aliases): OTTOLINE VANDERMEER, BARNABY CROWE, CLEMENTINE ASHBY-NOLAN
1 A ¶ A low-ceilinged hall that smells of boiled ham and floor wax.
2 A Trophies line the walls, each topped with a small bronze bird in mid-flap.
3 A Round tables wear paper cloths.
4 A One table, at the back, has been set for three, and a single basket of bread rolls sits between the places like a negotiated settlement.
5 A ¶ OTTOLINE VANDERMEER (60s) arrives first, in a green velvet dress she has plainly owned since the club's previous presidency.
6 A She arranges the cutlery by the width of a thumb, sits, and begins to examine her roll as if it might be called to testify.
7 A ¶ BARNABY CROWE (50s) enters carrying a wrapped trophy under one arm and a plastic bag of seed under the other, which he has not been able to leave in the coat room.
8 A He stands for a moment at the end of the table.
9 A He sets the trophy down gently, face-forward.
10 A He sets the seed down with considerably less ceremony.
11 A ¶ CLEMENTINE ASHBY-NOLAN (30s), the youngest person in the room by twenty years, comes in last.
12 A She has a clipboard.
13 A She also has the expression of someone who has already lost the argument she is about to start.
14 D OTTOLINE: You're sitting there?
15 D BARNABY: It was my chair last year.
16 D OTTOLINE: Last year you were also winning.
17 D BARNABY: I'm winning this year.
18 D CLEMENTINE: The scores aren't posted until after the soup.
19 D OTTOLINE: Then you can sit where you like until after the soup.
20 A ¶ Barnaby does not sit.
21 A He lifts the trophy by its base and sets it on the table, an inch closer to Ottoline's plate than to his own.
22 D BARNABY: I wrapped it myself.
23 D OTTOLINE: It looks wrapped.
24 D BARNABY: Four layers.
25 D OTTOLINE: In what?
26 D BARNABY: In tissue. Mostly.
27 D OTTOLINE: Mostly.
28 D CLEMENTINE (consulting clipboard): It's, ah. It's the Hartley Cup. Which is, strictly, for the best bird in the northern loft.
29 D BARNABY: It is.
30 D OTTOLINE: And Barnaby's northern loft is where?
31 D BARNABY: Right where it's always been.
32 D OTTOLINE: Behind a dry cleaner's.
33 D BARNABY: It's a very good dry cleaner's.
34 D CLEMENTINE: I think that's not the question.
35 D OTTOLINE: No. The question is whether it's a very good bird.
36 D BARNABY: She flew four hundred miles.
37 D OTTOLINE: So I'm told.
38 D BARNABY: In nine hours.
39 D OTTOLINE: In nine hours, from a basket, in a van, according to the van driver.
40 D CLEMENTINE: I have the van driver's log. If anyone wants it.
41 D BARNABY: Nobody wants it.
42 D OTTOLINE: I'd like to see it.
43 A ¶ Clementine slides the clipboard across the table.
44 A Barnaby's hand lands on it first.
45 A For a moment all three hands rest on the same sheet of paper, and none of them moves.
46 D BARNABY: It's the club's business.
47 D OTTOLINE: I am the club's business. Fifty-one years.
48 D CLEMENTINE: You were treasurer for thirty of them.
49 D OTTOLINE: Thirty-one.
50 D CLEMENTINE: I stand corrected.
51 D BARNABY: You don't stand at all. You sit with a clipboard.
52 D CLEMENTINE: It's a very good clipboard.
53 D OTTOLINE (to her roll): Everything in this room is very good.
54 A ¶ A waiter passes with soup.
55 A All three lean back, hands retreating from the clipboard, and watch him set down three bowls.
56 A Nobody reaches for a spoon.
57 D OTTOLINE [CONT'D]: Is it mushroom?
58 D BARNABY: It's brown.
59 D CLEMENTINE: It's mushroom. I checked.
60 D OTTOLINE: You check everything.
61 D CLEMENTINE: Someone has to.
62 D BARNABY: You could have checked the bird.
63 D CLEMENTINE: I did.
64 A ¶ Pause.
65 D OTTOLINE: And?
66 D CLEMENTINE: And she's a very good bird.
67 D BARNABY: Thank you.
68 D CLEMENTINE: It's not the same bird that was entered.
69 A ¶ A spoon is lifted.
70 A A spoon is set down.
71 A Barnaby slides the trophy back an inch toward himself, then, looking at no one, an inch toward the middle of the table.
72 D OTTOLINE: I'd like to see her.
73 D BARNABY: She's in the car.
74 D OTTOLINE: In the car.
75 D BARNABY: In the basket. On the back seat. With the windows down an inch.
76 D OTTOLINE: Fetch her.
77 D BARNABY: It's raining.
78 D OTTOLINE: She's a pigeon.
79 D BARNABY: She's nervous.
80 D CLEMENTINE (gently): Mr. Crowe. Which bird is she?
81 A ¶ Barnaby opens his mouth.
82 A He closes it again.
83 A He picks up his spoon and tastes the soup, and his face does something complicated, and he tastes it again.
84 D BARNABY: It is mushroom.
85 D OTTOLINE: It is.
86 D BARNABY: It's actually quite good.
87 D OTTOLINE: It always has been.
88 A ¶ She tears her roll in half.
89 A She puts one half on Barnaby's bread plate, and does not look at him while she does it.
90 D CLEMENTINE: So the scores?
91 D OTTOLINE: After the soup.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00073.json
### SCENE s00073 | INT. RIVERBOAT CASINO COURTROOM - DAY
Detected names (may be incomplete or contain aliases): CLEMENTINE ASHWORTH, MAXWELL DRUMM, JUDGE ISADORA FENWICK, BAILIFF NORBERT KWASNIEWSKI
1 A ¶ A gambling hall converted into a temporary courtroom after the flood.
2 A Slot machines are draped in canvas, and brown water stains climb the walls.
3 A A judge's bench has been built from a roulette table.
4 A ¶ CLEMENTINE ASHWORTH, the defense attorney, stands at a card table with her hands folded.
5 A She is sharp, silver-haired, and never hurried.
6 A Across from her, MAXWELL DRUMM, the prosecutor, flips through a damp stack of papers.
7 A He is young and eager, and his collar is two sizes too big.
8 A At the roulette bench, JUDGE ISADORA FENWICK adjusts her glasses and glares down at both of them.
9 A Near the door, BAILIFF NORBERT KWASNIEWSKI shifts his weight, his hand resting on a holstered flashlight.
10 D JUDGE FENWICK: Mr. Drumm. You were saying.
11 A ¶ He clears his throat and rises, dropping a page.
12 A He stoops, recovers it, and comes up red.
13 D MAXWELL: Your Honor, the State maintains the defendant knowingly opened the sluice gates.
14 D CLEMENTINE: Objection. He has not yet shown a single witness who saw her touch them.
15 D JUDGE FENWICK: Sustained. Move along.
16 A ¶ Maxwell glances at his notes, then at the bailiff, who gives him nothing.
17 A He swallows.
18 D MAXWELL: Then I call the night watchman.
19 A ¶ Norbert opens the door.
20 A No one is there.
21 A He steps out, comes back, and shrugs.
22 D NORBERT: He ain't come, ma'am.
23 D JUDGE FENWICK: Of course he hasn't.
24 A ¶ Clementine rises slowly, smoothing her skirt.
25 A She walks to the center of the room and lets the silence stand.
26 D CLEMENTINE: Your Honor, the State's case is built on a man who is not here, a gate no one saw opened, and a river that has a long habit of rising.
27 A ¶ Maxwell opens his mouth, and she raises a hand.
28 A He closes it.
29 D CLEMENTINE [CONT'D]: I move to dismiss.
30 A ¶ The judge studies her over her glasses, then looks at the stained ceiling, the draped slots, the roulette wheel under her palm.
31 A She spins it.
32 A It clatters and settles.
33 D JUDGE FENWICK: Red seventeen.
34 A ¶ She lifts the gavel.
35 D JUDGE FENWICK [CONT'D]: Dismissed.
