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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02032.json
### SCENE s02032 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): OLIVER FENWICK, ESTHER FENWICK, TIMOTHY, KNOCK, MARGUERITE HOLLOWAY
1 A ¶ A round room papered in sea charts.
2 A A coal stove, a kettle, a narrow bed.
3 A The window shakes with wind.
4 A Every few seconds the lighthouse beam sweeps across the walls, white, then gone.
5 A ¶ OLIVER FENWICK (50s, keeper, cardigan, pipe) pours tea.
6 A ESTHER FENWICK (50s, his wife, knitting) sits by the stove.
7 A Between them, their grown son TIMOTHY (20s, home from the mainland, restless) paces to the window and back.
8 D OLIVER: Tea, Tim?
9 D TIMOTHY: No, Dad.
10 D ESTHER: He's nervous.
11 D TIMOTHY: I'm not nervous.
12 D ESTHER: You're wearing a groove in the floor.
13 D OLIVER: Sit.
14 D TIMOTHY: There's someone on the rocks.
15 D OLIVER: There's no one on the rocks.
16 D ESTHER: There's no one on the rocks.
17 D TIMOTHY: I saw a light.
18 D OLIVER: Our light.
19 D TIMOTHY: No. Lower.
20 A ¶ The beam sweeps.
21 A Passes.
22 A Then, from the dark below, a KNOCK.
23 A Three slow raps on the door.
24 A ¶ Esther's needles stop.
25 A Oliver's pipe stops halfway to his mouth.
26 D ESTHER: Who would be out in this?
27 A ¶ Timothy opens the door.
28 A Wind whips in.
29 A On the step stands MARGUERITE HOLLOWAY (30s, drenched oilskin, hair plastered, lantern in hand, eyes calm).
30 D MARGUERITE: Forgive the hour. My boat has run aground.
31 D OLIVER: Come in, come in! Esther, a towel!
32 D ESTHER: There's no boat on that shoal, Oliver. There hasn't been one since--
33 D OLIVER: Esther.
34 A ¶ Marguerite steps inside, drips onto the mat, offers a small smile.
35 D MARGUERITE: A cup of tea would be kind.
36 D TIMOTHY: Where did you moor?
37 D MARGUERITE: Where the water let me.
38 D ESTHER: That's not an answer.
39 D OLIVER: She's half frozen!
40 D TIMOTHY: Dad--
41 D OLIVER: Tim!
42 D ESTHER: Child, you are shaking.
43 D MARGUERITE: Am I?
44 A ¶ She looks at her hand, holding the lantern.
45 A Perfectly steady.
46 A The flame inside does not flicker, though the wind is howling through the open door.
47 A ¶ The beam sweeps across the room again.
48 A The three Fenwicks glance at one another.
49 A Oliver closes the door.
50 A Esther pours a fourth cup, and they all pretend, with great courtesy, that nothing at all is wrong.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01286.json
### SCENE s01286 | EXT. SUNNYBROOK PETTING ZOO - DAY
Detected names (may be incomplete or contain aliases): BIRTHDAY CLOWN, TEDDY, PRIYANKA DESHMUKH, DOLORES SWAN, GERALD
1 A ¶ Hay bales.
2 A A painted red barn.
3 A A banner reads HAPPY 7TH BIRTHDAY, TEDDY!
4 A Beneath it, a crowd of parents with phones.
5 A ¶ A BIRTHDAY CLOWN, 40s, in an orange wig and enormous shoes, wrestles a bundle of balloon animals.
6 A A goat watches him with great interest.
7 A ¶ MRS. PRIYANKA DESHMUKH, 40s, blazer, lanyard, a party planner with a tight smile, marches over with a clipboard.
8 A ¶ TEDDY, 7, birthday boy, paper crown crooked, stands at the pen.
9 A He holds a carrot out to the goat.
10 A He is very serious.
11 A ¶ DOLORES SWAN, 50s, the zookeeper, in rubber boots and a faded cap, leans on a rake and stares at the clown with wary eyes.
12 D PRIYANKA: You're ten minutes late.
13 D CLOWN: Traffic. Also the goat ate my map.
14 D PRIYANKA: You're a clown. You don't need a map.
15 D CLOWN: I'm a fully qualified clown, ma'am. I have a certificate.
16 D DOLORES: He's got a certificate.
17 D PRIYANKA: Do you have a name, certificate?
18 D CLOWN: Giggles.
19 D PRIYANKA: Your real name.
20 D CLOWN (lowering his voice): Gerald.
21 D DOLORES: Gerald, that goat has been staring at you for five minutes. He doesn't like clowns.
22 D GERALD: Why not?
23 D DOLORES: Last clown was a bad time.
24 A ¶ The goat lowers its head.
25 A Gerald backs away.
26 A The goat steps forward.
27 A Gerald trips over his shoe, grabs a balloon sword from his belt, thrusts it like a rapier.
28 A The sword POPS.
29 A The goat CHARGES.
30 A ¶ Gerald bolts across the yard, wig flying, shoes flapping.
31 A Priyanka drops the clipboard.
32 A Dolores drops the rake and sprints after the goat, shouting.
33 A Teddy bursts into laughter and runs after all of them, crown bouncing.
34 A The parents' phones come up like a field of tiny cameras.
35 D GERALD [CONT'D] (over his shoulder): Is that a good goat?!
36 D DOLORES: That's a goat!
37 A ¶ Gerald vaults a hay bale and lands face-first in the pen.
38 A The goat skids to a stop.
39 A Sniffs his wig.
40 A Eats it.
41 A ¶ Silence.
42 A Then applause.
43 D TEDDY: Best birthday ever!
44 A ¶ Gerald lies in the straw, hairless, beaming.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02291.json
### SCENE s02291 | INT. CONSERVATORY, FINCH-HATTON HOUSE - EARLY MORNING
Detected names (may be incomplete or contain aliases): INSPECTOR OSWIN PELLEGRINI, LADY CORDELIA FINCH-HATTON, AMOS TREVELYAN, BERNADETTE QUILL, JASPER
1 A ¶ Glass walls beaded with dew.
2 A Orchids hang from iron hooks.
3 A Rain taps the roof like fingernails on a table.
4 A A white sheet covers something long on the tiled floor.
5 A ¶ INSPECTOR OSWIN PELLEGRINI, fifties, rumpled tweed, a pipe he does not light, stands over the sheet.
6 A Around him wait the household: LADY CORDELIA FINCH-HATTON, seventy, upright in a wheelchair; AMOS TREVELYAN, the butler, pale as candle wax; MRS. BERNADETTE QUILL, the cook, wringing a dishcloth; and JASPER, the nephew, twenty-two, slouched against a palm.
7 D PELLEGRINI: Nobody leaves.
8 D JASPER: We were having breakfast.
9 D PELLEGRINI: Then you may have it later.
10 A ¶ He crouches.
11 A He lifts the corner of the sheet and lets it fall.
12 A Lady Cordelia grips the arms of her chair.
13 A The cook turns her face to the glass.
14 D PELLEGRINI [CONT'D] (to himself): No sign of a struggle.
15 D AMOS: Inspector, if I might say.
16 D PELLEGRINI: You might.
17 D AMOS: The doors were locked at eleven.
18 D MRS. QUILL: They were. I locked the kitchen.
19 D JASPER: I locked nothing, I never lock anything.
20 D CORDELIA: Be quiet, Jasper.
21 D PELLEGRINI: Lady Finch-Hatton, who was the last to see him?
22 D CORDELIA: I was. At half past ten.
23 D PELLEGRINI: And?
24 D CORDELIA: He was watering the orchids.
25 A ¶ Pellegrini rises, slowly, and goes to the nearest hanging basket.
26 A He touches the soil with two fingers.
27 D PELLEGRINI (a murmur): Dry.
28 A ¶ Jasper and Amos exchange a look.
29 A Mrs. Quill drops the dishcloth.
30 A Cordelia's wheels creak as she rolls backward half a foot, and then stops.
31 D PELLEGRINI [CONT'D] (to the room): Whoever killed him watered the plants after.
32 A ¶ Silence.
33 A Rain.
34 A Then, softly, Lady Cordelia begins to laugh.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01588.json
### SCENE s01588 | INT. OPERA HOUSE - BALCONY BOX - EVENING
Detected names (may be incomplete or contain aliases): CLAIRE, JACK, MADAME DUBOIS, GENERAL HARTLEY
1 A ¶ Velvet.
2 A Gilt.
3 A Below, an orchestra tunes.
4 A ¶ CLAIRE (30s, emerald gown) sits rigid.
5 A Beside her, JACK (30s, tux, a man who bought tickets in a hurry).
6 A Two seats behind: her mother, MADAME DUBOIS (60s, pearls, lorgnette), and his father, GENERAL HARTLEY (60s, medals, mustache).
7 A ¶ She does not look at him.
8 A He does not look at her.
9 A ¶ Her fingers drum the armrest.
10 A His gaze stays on the stage.
11 A ¶ The lights dim.
12 A The overture begins.
13 A His hand drifts toward hers, hesitates, withdraws.
14 A She notices.
15 A ¶ Madame Dubois lowers her lorgnette.
16 A The General coughs.
17 D CLAIRE (whispering): You came.
18 D JACK (whispering): You asked.
19 D CLAIRE: I asked in March.
20 D JACK: I got the letter in June.
21 A ¶ The music swells.
22 A She turns at last.
23 A He meets her eyes.
24 A The General leans forward to hear.
25 A Madame Dubois leans too.
26 D CLAIRE (whispering): Stay for the second act?
27 D JACK (whispering): Forever.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01484.json
### SCENE s01484 | INT. ABANDONED LANGUAGE LABORATORY - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE VERONICA OSEI-LAMBERT, DETECTIVE MARGUERITE ILLYICH, LEONARD ASHBY
1 A ¶ Forty carrels in rows, each with a dead headset hung on its hook like a tiny hanged man.
2 A Cassette decks, dusty.
3 A A reel-to-reel machine at the front of the room, its tape spooled out across the floor and into the dark.
4 A ¶ DETECTIVE VERONICA OSEI-LAMBERT (40s, trench coat, a flashlight clamped in her teeth) steps between the carrels.
5 A Behind her, DETECTIVE MARGUERITE ILLYICH (40s, long coat, notebook out) keeps one hand on the grip of her sidearm.
6 A Neither speaks.
7 A ¶ At the rear wall, a man sits slumped in a carrel, headset clamped on.
8 A LEONARD ASHBY (50s, a gray cardigan), dead or sleeping.
9 A His chest does not rise.
10 A ¶ Veronica takes the flashlight from her mouth.
11 D VERONICA: She said to look at the tape.
12 D MARGUERITE: Who said?
13 D VERONICA: She did.
14 A ¶ Marguerite follows the loose tape with her eyes, from the reel-to-reel along the floor to Leonard's carrel, where it is fed through the deck beneath his hands.
15 A Veronica leans over him.
16 A She lifts the headset, holds it to her own ear.
17 A ¶ A hiss.
18 A A voice, thin and warm, from the earpiece.
19 D LEONARD [V.O.] (recorded): If you are hearing this, then she has already left the building. She is on the third floor. She has the key. She is not alone.
20 A ¶ Veronica pulls the headset off.
21 A Marguerite has already turned to the door.
22 A On the landing outside, slow footsteps climb, and a keyring chimes at every step.
23 D MARGUERITE (whispering): She's early.
24 D VERONICA: Who is?
25 D MARGUERITE: Both of us, I think.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01680.json
### SCENE s01680 | INT. ICE-MINING RIG CONTROL CAB - NIGHT
Detected names (may be incomplete or contain aliases): ANSELM DRAKE, CONTROL
1 A ¶ A cramped cab bolted to the side of a comet fragment.
2 A Frost on the windows.
3 A Red warning lights pulse.
4 A ¶ ANSELM DRAKE (40s, miner, worn flight suit) straps into the operator seat.
5 A A radio crackles on the dash.
6 D CONTROL [V.O.]: Rig Nine, this is Control. Report.
7 D ANSELM: Rig Nine. Drill's jammed at four hundred meters.
8 D CONTROL [V.O.]: Copy. Is the cable still tensioned?
9 D ANSELM: Tensioned and shaking.
10 D CONTROL [V.O.]: Anselm, you need to cut it loose.
11 D ANSELM: If I cut it, I lose the whole string.
12 D CONTROL [V.O.]: If you don't, you lose the rig.
13 A ¶ Anselm checks a gauge.
14 A The needle is buried in the red.
15 D ANSELM: How long have I got?
16 D CONTROL [V.O.]: Eight minutes, maybe less.
17 D ANSELM: Maybe less. Great.
18 D CONTROL [V.O.]: Anselm. Listen to me.
19 D ANSELM: I'm listening.
20 D CONTROL [V.O.]: The fragment is rotating faster than predicted. The tether will snap.
21 D ANSELM: Then tell me what to do.
22 D CONTROL [V.O.]: Release the clamp.
23 D ANSELM: That's what I'm trying to --
24 A ¶ The cab lurches.
25 A A cup slides off the dash and shatters.
26 D ANSELM [CONT'D]: It's not releasing!
27 D CONTROL [V.O.]: Use the manual override.
28 A ¶ He flips a cover.
29 A Pulls a lever.
30 A Nothing.
31 D ANSELM: Manual's dead.
32 D CONTROL [V.O.]: Then go outside.
33 D ANSELM: Outside?
34 D CONTROL [V.O.]: Hammer it free.
35 D ANSELM: You want me to hit it with a hammer.
36 D CONTROL [V.O.]: I want you to live.
37 A ¶ Anselm grabs a helmet.
38 A Seals it.
39 D ANSELM: Tell my sister I said --
40 D CONTROL [V.O.]: Tell her yourself when you're back.
41 D ANSELM: Tell her I said it was a good rig.
42 A ¶ He slaps the airlock.
43 A It cycles open on black.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00390.json
### SCENE s00390 | INT. TOLL BOOTH UNDER THE TROLL BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): PAY PASS, BRAMBLE, ISKANDAR
1 A ¶ A stone hut slung beneath a humped bridge.
2 A Moss.
3 A A river chuckles below.
4 A A hand-lettered sign: PAY OR PASS (DON'T PASS).
5 A ¶ BRAMBLE, 100, a troll in a postman's cap, sits behind a counter sorting copper coins.
6 A Her skin is the color of a wet slate, her fingers like roots.
7 A A herd of goats shuffles at her feet.
8 D BRAMBLE (to goats): Morning, you lot. Don't touch the ledger.
9 A ¶ A shadow falls across the booth window.
10 A ISKANDAR, 30s, a merchant in a long green coat, stands with a donkey cart.
11 A He bows.
12 D ISKANDAR: Good morning, tollkeeper.
13 D BRAMBLE: Toll's two coppers.
14 D ISKANDAR: That's very reasonable.
15 D BRAMBLE: It's the rate.
16 D ISKANDAR: Here is four, to be generous.
17 A ¶ Bramble takes the coins.
18 A She bites one.
19 A She looks at him with narrowed, amber eyes.
20 D BRAMBLE (muttering): Nobody pays four.
21 D ISKANDAR: What was that?
22 D BRAMBLE: Nothing. Weather. Cross.
23 A ¶ He nods, relieved, and starts the cart.
24 A She lets him get three steps before she raises her voice.
25 D BRAMBLE [CONT'D] (to the goats, loud): Everyone, we have a customer who pays double!
26 A ¶ The goats lift their heads as one.
27 D ISKANDAR (stopping): Is something the matter?
28 D BRAMBLE: No, no. Only that the last man who paid double was a king in disguise.
29 D ISKANDAR: I'm not a king.
30 D BRAMBLE: Of course not. Kings never are.
31 A ¶ She comes out from behind the counter.
32 A She is much taller than the booth suggested.
33 A The goats back away from her.
34 D ISKANDAR: I think I'll pay for the road in kind.
35 D BRAMBLE (to him, soft): You'll pay the first thing you meet on the far side.
36 D ISKANDAR: That's an old story.
37 D BRAMBLE: It's an old toll.
38 A ¶ From the far end of the bridge, a bell rings.
39 A A small figure in a red coat is running toward the cart, arms wide, calling.
40 D ISKANDAR (a whisper): Leila.
41 A ¶ Bramble watches him.
42 A Her face does not change.
43 D BRAMBLE (to herself): Always the child.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02480.json
### SCENE s02480 | INT. ICE ARENA - ZAMBONI BAY - NIGHT
Detected names (may be incomplete or contain aliases): LUCIANA FERRARI-OYELE, DEACON BRUNO, BARTOSZ
1 A ¶ Concrete.
2 A Fluorescent hum.
3 A A resurfacer idles, steam rising off its blade.
4 A Puddles on the floor.
5 A ¶ LUCIANA FERRARI-OYELE, 20s, goalie, pads strapped on, sits on an upturned bucket.
6 A Helmet on her knee.
7 A ¶ DEACON BRUNO, 60s, driver, climbs down from the machine with a coffee.
8 A Slow knees.
9 D LUCIANA: You're late, Deacon.
10 D DEACON: You're early, Lu.
11 A ¶ He sits on a second bucket.
12 A Offers the coffee.
13 A She shakes her head.
14 A ¶ Silence.
15 A Compressor thrum.
16 D LUCIANA: Three hundred shots.
17 D DEACON: That a goal?
18 D LUCIANA: That's tonight. Before they flood the ice.
19 D DEACON: You'll wear a hole in the crease.
20 D LUCIANA: Good.
21 A ¶ A wall speaker CRACKLES.
22 D BARTOSZ [V.O.] (over PA, tinny): Deacon, you in the bay?
23 D DEACON (not moving): Where else.
24 D BARTOSZ [V.O.]: Hold the flood. Coach wants Luciana out there another hour.
25 A ¶ Deacon looks at Luciana.
26 A She looks at the floor.
27 D DEACON: She's already here, Bart.
28 D BARTOSZ [V.O.]: Then she's early. Tell her thanks.
29 A ¶ Click.
30 A Silence.
31 D LUCIANA: He doesn't know I'm out of the lineup.
32 D DEACON: Tell him.
33 D LUCIANA: Tomorrow.
34 D DEACON: Tomorrow, Lu, I'll be flooding ice you're not on.
35 A ¶ She pulls her helmet down.
36 A Stands.
37 A Bangs her stick twice on the concrete.
38 D LUCIANA: Open the door, Deacon.
39 A ¶ He climbs back on the machine.
40 A Lifts the gate.
41 A Cold light pours across the ice.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01121.json
### SCENE s01121 | INT. LIGHTHOUSE LAMP ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HARLAN VOSS, NELL STRAND, DOYLE
1 A ¶ A glass cage at the top of a hundred iron steps.
2 A The great lens turns, throwing slow white blades across a storm-black sea.
3 A Rain hammers the panes.
4 A ¶ HARLAN VOSS (50s, rumpled trench coat, a gambler's patient eyes) lowers himself through the floor hatch, breathing hard.
5 A Across the lens stands NELL STRAND (30s, sharp, soaked, a revolver steady in both hands).
6 D NELL: That's far enough, Mr. Voss.
7 D VOSS: You've been a long climb, Miss Strand.
8 A ¶ The beam sweeps over them.
9 A In the flash, a third figure: DOYLE (40s, keeper's oilskins, face cut and bloody) crouched behind the lamp mechanism, a flare gun in his fist.
10 D DOYLE: Both of you, drop it. I swear I'll burn this tower down.
11 A ¶ Nell swings her gun toward Doyle.
12 A Voss lunges for Nell.
13 A The three of them freeze as the beam passes, then the light goes out.
14 A ¶ DARKNESS.
15 A A scuffle, a gunshot, glass shattering.
16 A ¶ The lamp grinds back to life.
17 A Nell has Doyle's arm twisted behind him.
18 A Voss holds the revolver, aimed at neither of them.
19 D VOSS: Now. Who wants to tell me where the ledger is?
20 A ¶ Doyle laughs, breathless, and nods at the sea.
21 D DOYLE: Eighty feet down. Good luck.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01461.json
### SCENE s01461 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): NANA PHILOMENA, TEODOR
1 A ¶ A low-beamed room that smells of woodsmoke and yeast.
2 A A cast-iron stove ticks.
3 A Copper pans hang from a rack above a scrubbed pine table.
4 A Through the window, frost coats a vegetable garden and a rooster stands on the fence post like a weathervane.
5 A ¶ NANA PHILOMENA (80s, shawl over a flannel nightgown, hands knotted as old rope) kneads dough at the table, her movements slow and exact.
6 A Across from her, her grandson TEODOR (7, pajamas with rocket ships, hair in a cowlick) kneels on a chair, a ball of dough in each fist.
7 D TEODOR: Mine's a rabbit.
8 D NANA PHILOMENA: It looks like a potato.
9 D TEODOR: It's a rabbit potato.
10 A ¶ She smiles, dusts flour from her thumb, and takes his dough.
11 A Pinches two ears from the top.
12 A Hands it back.
13 D NANA PHILOMENA: Now it's a rabbit.
14 A ¶ He sets it on the tray beside the others.
15 A A row of small misshapen animals.
16 A Outside, the rooster crows once, late.
17 D TEODOR: Nana?
18 D NANA PHILOMENA: Mm.
19 D TEODOR: Will you teach me the bread song?
20 D NANA PHILOMENA: There's no song.
21 D TEODOR: Mum says there is.
22 D NANA PHILOMENA: Your mother talks too much.
23 A ¶ She begins to hum, a low, wavering tune, kneading in time.
24 A He hums with her, a half-step off, and neither corrects the other.
