You are a computational linguist building a coreference and discourse corpus. For each sentence, first decide silently what every pronoun and noun phrase refers to, then label. Prefer the reading a careful reader would settle on, and lower your confidence when two readings are plausible.

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
  }
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


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05118_0.json
### SCENE s05118_0 | INT. HAPPY PAWS VET CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): AIDEN, SASHA, MARLON
1 A ¶ CLOSE ON a keypad.
2 A A gloved finger types four numbers.
3 A A light turns green.
4 A CLICK.
5 A ¶ The front door swings open.
6 A The clinic is dark and empty, except for the soft glow of a fish tank and a sleeping beagle in a cage.
7 A ¶ AIDEN, 20s, in a black hoodie, leads the way.
8 A Behind them comes SASHA, 20s, they/them, carrying a duffel bag, and MARLON, 30s, nervous, carrying a flashlight that he keeps pointing at his own face.
9 D AIDEN (whispering): Marlon, the light.
10 D MARLON: Sorry. Sorry.
11 A ¶ WE SEE the three of them cross the waiting room.
12 A Aiden checks a hand-drawn map.
13 A Sasha stops at the fish tank and taps the glass, and Marlon trips on a chew toy that SQUEAKS loudly, and the beagle lifts its head, and all three freeze.
14 A ¶ ANGLE ON the beagle.
15 A It looks at them.
16 A It yawns.
17 A It goes back to sleep.
18 D SASHA: They're not even mad.
19 D AIDEN: Good. The safe is in Dr. Okafor's office. Down the hall, second door.
20 D MARLON: Why would a vet clinic have a safe?
21 D AIDEN: Because Okafor keeps the old man's ring in it. The one worth sixty thousand dollars.
22 D SASHA: You mean the ring he's been telling everyone is his dead wife's.
23 D AIDEN: Which it isn't. He bought it from the jeweler's two weeks after she left him. I have the receipt.
24 D MARLON: So we're not stealing it. We're, like, returning it.
25 D SASHA: To who?
26 D MARLON: To the universe.
27 D SASHA: That is the worst plan I have ever heard, and I helped build the plan.
28 D AIDEN: Shh. Both of you.
29 A ¶ They move down the hall.
30 A Aiden pushes a door open, and Sasha slips inside.
31 A Marlon waits at the threshold with the flashlight pointing at the floor like a good boy.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05148_0.json
### SCENE s05148_0 | INT. NEW BEGINNINGS FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): NURSE, MAYA, DEV, THE WOMAN
1 A ¶ We see a quiet waiting room with beige chairs and a fish tank.
2 A The power has been out for three days after the storm, and the clinic is running on one generator.
3 A We can tell this because the lights are dim and the fish tank is not bubbling.
4 A ¶ CLOSE ON a clock on the wall.
5 A It reads 2:14.
6 A It is not moving.
7 A ¶ Maya, 30s, sits very straight with her purse in her lap.
8 A Beside her, Dev, 30s, is tapping his knee.
9 A They are not talking.
10 A We can tell they are not talking because there is no talking.
11 A ¶ ON PHONE: Mom - where r u guys?? is it happening
12 A ¶ Maya turns her phone face down on her thigh without answering.
13 A ¶ A NURSE enters.
14 A We see that she is carrying a clipboard.
15 A She is young and looks like she has not slept since the storm began.
16 D NURSE: Maya Rosen?
17 D MAYA: Yes. That's me.
18 D NURSE: Dr. Okafor will see you now. Only you, though. Generator rules.
19 D DEV (standing): I'm her husband.
20 D NURSE: I know, Mr. Rosen. I'm sorry.
21 A ¶ Dev sits back down.
22 A He does not say anything.
23 A His hand is still on Maya's arm.
24 D MAYA: Dev. It's okay.
25 D DEV (not meaning it): Yeah. Okay.
26 A ¶ Maya stands and follows the nurse through a swinging door.
27 A We see the door swing shut behind her.
28 A ¶ Dev is alone.
29 A He pulls out his phone and we see the screen.
30 A ¶ ON PHONE: Dev: they only let her in. what do i do
31 A ¶ ON PHONE: Mom: sit. be there. thats the job
32 A ¶ He looks at the fish tank.
33 A One fish is hanging at the surface, mouth opening and closing.
34 A ¶ A WOMAN in a green raincoat enters from the street door.
35 A She is soaked.
36 A She looks at the empty reception desk, then at Dev, then back at the desk.
37 A She does not sign in.
38 D DEV [CONT'D]: They're, uh... generator only. You might wait outside.
39 D THE WOMAN: I'm not a patient.
40 D DEV: Oh.
41 D THE WOMAN: I'm here for the freezer.
42 D DEV: What freezer?
43 A ¶ She does not answer.
44 A She walks past him toward the hallway marked STAFF ONLY.
45 A ¶ We see Dev watch her go.
46 A He stands, unsure, then follows at a distance.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05174.json
### SCENE s05174 | INT. THE ROYAL OAK FUNCTION ROOM - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): MO, JEN
1 A ¶ Half-deflated balloons.
2 A A disco ball turns, one mirror missing.
3 A Somewhere a slow song limps to its end.
4 A ¶ MO (50s, lanyard still around his neck under his dicky bow) holds a plastic cup of warm prosecco and has the look of a man cornered by a sofa.
5 A JEN (40s, heels in one hand) lowers herself into the chair opposite and says nothing for a good ten seconds.
6 D JEN: Congratulations, by the way.
7 D MO: Cheers. I'm not the groom.
8 D JEN: No, but you did the seating plan.
9 D MO: Technically, I did the spreadsheet.
10 A ¶ Jen nods, slowly.
11 D JEN: You sat Big Dave next to his ex.
12 D MO: I wasn't told.
13 D JEN: You were. In a meeting. Eleven times.
14 A ¶ He opens his mouth.
15 A Closes it.
16 A Studies the carpet.
17 D MO: Right.
18 A ¶ A door SLAMS somewhere out in the car park.
19 A They both flinch.
20 D JEN: That'll be Dave.
21 D MO: Probably.
22 A ¶ Jen sets her shoes on the table.
23 A She looks at them, and then at him, and something in her shoulders gives.
24 D JEN: Honestly? It's the best wedding I've been to in years.
25 D MO: Is it?
26 D JEN: Mrs K cried at the vows. Dave cried at the buffet. Nobody's cried at work all year and I thought, there, that's a company away day.
27 A ¶ He lets out a breath.
28 A Almost a laugh.
29 D MO: I did write that in the risk assessment.
30 A ¶ His phone BUZZES on the table.
31 A He reads it.
32 A Turns it face down.
33 D JEN: Who's that?
34 D MO: HR. They want a word about Monday.
35 D JEN: Tell them it's a Saturday.
36 A ¶ He smiles.
37 A She picks up her shoes.
38 A For the first time in eleven years, they stay for the last song.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05129.json
### SCENE s05129 | INT. GOLDEN LOTUS NAIL SALON - DAY
Detected names (may be incomplete or contain aliases): CUSTOMERS, KID, MARISOL, CORINNE
1 A ¶ SUPER: "CHICAGO.
2 A 2:14 PM."
3 A ¶ Pastel walls.
4 A Acetone in the air.
5 A A wall of polish bottles in every colour.
6 A A TV in the corner plays a muted boxing replay.
7 A ¶ Two CUSTOMERS in the next chairs chat in Vietnamese.
8 A A KID in a school uniform does homework by the register.
9 A ¶ THE WOMAN, 40s, sunglasses, tailored coat, sits at the manicure station.
10 A Her phone lies face down.
11 A Across the table, MARISOL, 30s, white smock, files her nails.
12 A ¶ The file SCRAPES.
13 A A drier HUMS.
14 D THE WOMAN: You do a lovely job.
15 D MARISOL (not looking up): Thank you.
16 D THE WOMAN: I mean it. Steady hands.
17 D MARISOL (smiling): Practice.
18 A ¶ She dips a brush.
19 A Paints a stripe of red.
20 A ¶ INSERT - THE BOTTLE
21 A ¶ Label: "Knockout."
22 A ¶ BACK TO SCENE
23 D THE WOMAN: Funny name.
24 D MARISOL: It sells.
25 A ¶ The Woman glances at the TV.
26 A The replay shows a boxer going down in the ninth.
27 D THE WOMAN: You watch the fights?
28 D MARISOL: My father did.
29 D THE WOMAN (carefully): Did?
30 D MARISOL: Every Saturday. He had a favourite. Danny Kessler.
31 A ¶ The Woman goes still.
32 D THE WOMAN: Kessler retired.
33 D MARISOL: He was told to.
34 A ¶ The brush keeps moving.
35 A Steady.
36 A Steady.
37 D THE WOMAN: I'm not sure what you mean.
38 D MARISOL (mild): My father bet the house on Danny. Round nine. Everybody knew it was fixed except him. He found out when the referee stopped it too early. A small man, tan suit, glasses. He looked at the floor so nobody could see his eyes.
39 A ¶ (beat)
40 A ¶ I was twelve.
41 A I remember my father holding the TV remote like it was a gun.
42 A I remember him saying one word, over and over.
43 A "Why."
44 A And then he stopped saying it.
45 A ¶ The drier HUMS.
46 A The Kid turns a page.
47 D MARISOL [CONT'D]: Years later I found the referee. Gambling debts. He'd been told to stop the fight, or lose his daughter's school fees. The man in the tan suit was a coward. But the man who told him? He was the coward's boss.
48 A ¶ (beat)
49 A ¶ That boss has a very good manicurist.
50 A She says he comes every second Tuesday.
51 D THE WOMAN (very still): Does she.
52 D MARISOL: She does.
53 A ¶ The Woman's hand, flat on the table, does not move.
54 A ¶ A DOOR BELL RINGS.
55 A Two men in dark jackets enter.
56 A They look around, then settle near the entrance.
57 A ¶ The Woman watches them in the mirror.
58 D THE WOMAN: You're quite sure of this.
59 D MARISOL: I have his receipts. Every one.
60 D THE WOMAN: You're not a manicurist.
61 D MARISOL: I'm a very good manicurist.
62 A ¶ She caps the bottle.
63 A CLICK.
64 D MARISOL [CONT'D]: My name is Marisol Kessler.
65 A ¶ The Woman takes off her sunglasses.
66 A Her eyes are old and tired.
67 D THE WOMAN: Danny's daughter.
68 D MARISOL: Yes.
69 D THE WOMAN: Then you know my name.
70 D MARISOL: Corinne Vale.
71 D CORINNE (a breath): He deserved a better life than he got.
72 D MARISOL: So did my father.
73 A ¶ Corinne looks at the red nails, her hands under the lamp.
74 D CORINNE: The men at the door. They're not mine.
75 D MARISOL: No.
76 D CORINNE: Yours?
77 A ¶ Marisol nods slightly.
78 D CORINNE [CONT'D] (a faint laugh): I came here for a manicure.
79 D MARISOL: And you got one.
80 A ¶ The TV roars.
81 A A crowd chanting a name that isn't Danny's.
82 A ¶ Corinne's phone BUZZES on the table.
83 A She doesn't touch it.
84 A ¶ It stops.
85 A ¶ The Kid looks up from his homework.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05058.json
### SCENE s05058 | EXT. FISHING TRAWLER "MARGIT ANN" - DECK - DAWN
Detected names (may be incomplete or contain aliases): ANIKA, ROY, TEO
1 A ¶ Grey sea.
2 A Grey sky.
3 A Gulls wheel overhead.
4 A ¶ Two deckhands haul nets, whistling.
5 A A third coils rope and is bored out of his mind.
6 A Everything is fine.
7 A ¶ Captain Roy Dunmore, 50s, leans on the rail with a mug, watching the horizon.
8 A Beside him, Dr. Anika Rao, 30s, sits on an upturned crate, clipboard on her knee.
9 A She is the ship's medic by contract and by accident.
10 D ANIKA: Quietest trip I've had in months.
11 D ROY: Don't say that.
12 D ANIKA: Why not?
13 D ROY: You know why not.
14 A ¶ The deckhands laugh at something.
15 A A gull lands on the winch.
16 A ¶ WHAM.
17 A ¶ A net swings loose.
18 A It slams into the deckhand's back.
19 A He goes down hard.
20 A ¶ TEO, 20s, a deckhand, lies on the planks, face grey, one arm pinned.
21 D ANIKA: Don't move him!
22 D ROY: Get the line off him!
23 A ¶ The two deckhands scramble.
24 A The gulls scatter.
25 A Roy and Anika drop to their knees at the same time and almost collide.
26 D ANIKA: Teo. Teo, look at me. Can you feel your hands?
27 D TEO (strained): No.
28 D ANIKA: Okay. That's okay. Roy, I need the board and I need it flat.
29 D ROY: Board's in the wheelhouse. Two minutes.
30 D ANIKA: You don't have two minutes.
31 D ROY: Then tell me what to do.
32 D ANIKA: Hold his head. Gently. Like it's glass.
33 A ¶ Roy does.
34 A Anika's hands move fast, over the neck, the ribs, the pulse.
35 D TEO: Doc. Am I
36 D ANIKA: You're not going anywhere. I promise.
37 D ROY (low): You can't promise that.
38 D ANIKA: Watch me.
39 A ¶ This is the last time any of them will take the sea for granted.
40 A ¶ The deckhands return with the board.
41 A Together, they roll him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05131.json
### SCENE s05131 | INT. DELIVERY WAREHOUSE - LOADING DOCK - NIGHT
Detected names (may be incomplete or contain aliases): ADRIAN, KESTREL
1 A ¶ The warehouse is very big and very cold.
2 A Yellow lamps hum over rows of brown boxes.
3 A Outside, snow falls on the empty parking lot.
4 A ¶ ADRIAN, 40s, stands next to a pallet.
5 A He holds a small black phone.
6 A A forklift is silent behind him.
7 A ¶ A side door SLAMS.
8 A KESTREL, 30s, walks in.
9 A They wear a gray coat and carry no bag.
10 D ADRIAN: You are late. I said eleven.
11 D KESTREL: Traffic was bad. Also, I do not like this place.
12 A ¶ He looks at them for a long time.
13 A His hand moves to the pallet, slowly.
14 D ADRIAN: Where is the package?
15 D KESTREL: It is safe. First you tell me who sold my name.
16 A ¶ The phone BUZZES in his hand.
17 A He does not look at it.
18 A Above them, the cold wind makes the roof metal sing.
19 D ADRIAN: Nobody sold. You make a story in your head.
20 D KESTREL: They told me you would say this.
21 A ¶ This is the last time they will trust anyone in this city.
22 A ¶ He takes one step forward.
23 A She, no, they, do not move.
24 A A truck engine RUMBLES far away.
25 D ADRIAN: Give me the package. Please.
26 D KESTREL: Give me the name.
27 A ¶ He opens his coat.
28 A A metal box CLICKS on the floor between them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05014.json
### SCENE s05014 | INT. LUMEN NAIL BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): NORA, THE WOMAN, VIVIAN, THE TWINS, DEV, ILSA
1 A ¶ The salon smells of acetone and jasmine, and under that of something else, something nobody in the room has named yet; the dryers hum in a steady chord, the television above the pedicure chairs plays a cooking show on mute, and at the third station a woman in a grey hoodie sits with both hands flat on the table as though she were waiting for them to be read.
2 D NORA (filing, not looking up): Any plans for the weekend, hon?
3 D THE WOMAN (voice flat, eyes on the window): Not really. Maybe visit my sister. She lives out past the reservoir.
4 D NORA (brightly): Oh that's nice. Family is everything.
5 D THE WOMAN (beat): Is it.
6 A ¶ Nora glances up.
7 A Behind the counter, VIVIAN rings up a customer, tucking a stray lock behind her ear, and at the far chair THE TWINS, identical in matching pink smocks, murmur to each other in a rhythm too even to be conversation.
8 D THE TWINS (together, softly): Do you smell it? Do you smell it?
9 D VIVIAN (not turning, counting change): Girls, enough with the perfume jokes.
10 D THE TWINS (together): Not perfume.
11 D NORA (forcing a laugh): They get like this when it rains. Ignore them.
12 D THE WOMAN (finally looking at Nora): It's not raining.
13 A ¶ A silence.
14 A The cooking show on the television flickers, goes to static, comes back.
15 A In the corner, DEV the new tech, who has been sweeping the same square of floor for ten minutes, stops.
16 D DEV (low, to Vivian): The wifi's dropped again. And the card reader. Everything just--
17 D VIVIAN (sharply, not turning): Dev. Floor.
18 D DEV (obeying, quieter): Sorry. Sorry.
19 D NORA (trying again, painting a clear coat): So, what do you do, hon? For work?
20 D THE WOMAN (a thin smile): I count things. How many people, how many exits. How long the lights stay on.
21 D NORA (her brush stilling): That's a strange job.
22 D THE WOMAN (beat): It's a strange week.
23 A ¶ The Twins stop murmuring.
24 A Both rise from their chairs at the same instant, smocks rustling, and the room tilts toward them.
25 D THE TWINS (together, calm): She is early.
26 D VIVIAN (finally turning, color draining): Who is early?
27 D THE TWINS (together, pointing at the hoodie): Her. She was not supposed to come until Thursday.
28 D NORA (whispering, to the woman): Hon, what are they talking about?
29 D THE WOMAN (pushing back her hood to reveal pale, almost translucent skin): My name is Ilsa. And I am so sorry. I wanted one last manicure before the end.
30 D DEV (dropping the broom): The end of what?
31 D ILSA (rising, her hands beginning to glow faintly under the dryer lamps): Of this. All of it. They said you'd want to know.
32 D VIVIAN (very quiet): Nobody here asked.
33 D ILSA (gently): Nobody ever does.
34 A ¶ The television goes black.
35 A Every dryer in the salon stops at once, and in the sudden quiet a single drop of polish falls from Nora's brush and rings against the tabletop like a bell.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05171_0.json
### SCENE s05171_0 | EXT. CIVIC PLAZA - CLIMATE MARCH - DAY
Detected names (may be incomplete or contain aliases): RENA, BEA, PROTESTERS
1 A ¶ A river of cardboard signs.
2 A Drums.
3 A A bullhorn SQUEALS and dies.
4 D RENA [V.O.]: Three thousand people, one bank across the square, and nobody looking at the loading dock. That's the whole trick. Be loud somewhere else.
5 A ¶ RENA (30s, green vest, laminated MARSHAL badge) walks against the crowd, while BEA (20s, same vest, clipboard) cuts through the PROTESTERS ahead of her, a backpack riding high on her shoulders, and above them both a banner reading THERE IS NO PLANET B snaps in the wind as a helicopter's rotor THUMPS somewhere over the glass towers.
6 D PROTESTERS (chanting): Pay for it! Pay for it! Pay for it!
7 A ¶ Rena catches up.
8 A Bea doesn't slow.
9 D RENA: You're early.
10 D BEA: You're late. She said two-ten.
11 D RENA: She said two-fifteen.
12 D BEA: She said whatever gets us paid.
13 A ¶ A cardboard polar bear bobs between them.
14 A Bea ducks it.
15 A Rena doesn't.
16 D RENA [V.O.]: Bea never trusted a plan she didn't write. Which was fair. She wrote this one.
17 A ¶ A whistle SHRIEKS.
18 A Police on bikes line the east side of the plaza.
19 A Bea steers Rena by the elbow toward the alley behind the bank.
20 D BEA: Badge.
21 D RENA: On.
22 D BEA: Truck?
23 D RENA: Ten minutes out. She's driving.
24 A ¶ Bea stops short.
25 A Stares at her.
26 D BEA: She's driving? She said she'd be here.
27 D RENA: She's here. I mean she's close. She's in the truck. Bea, she's fine.
28 D PROTESTERS (chanting, louder): Pay for it! Pay for it!
29 A ¶ A speaker on the stage starts a speech.
30 A The crowd ROARS.
31 A Bea uses the noise and cracks the service gate with a bolt cutter.
32 A The lock CLANKS onto the pavement.
33 D BEA: Then she's late and she's here. Pick one.
34 D RENA [V.O.]: Forty seconds to the dock. Four minutes inside. Everybody on that square would remember the speech and nobody the van.
35 A ¶ They slip through.
36 A The gate CLANGS shut behind them.
37 A The chanting drops to a muffled pulse.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05171_1.json
### SCENE s05171_1 | INT. BANK - LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BEA, RENA
1 A ¶ Concrete.
2 A Cold.
3 A A single camera in the corner, its red light blinking.
4 A ¶ Rena looks up at it.
5 A Bea is already holding the backpack open.
6 D BEA: Don't look at it.
7 D RENA: I'm not looking at it.
8 D BEA: You're looking at it.
9 A ¶ Rena turns away.
10 A Beyond the wall, faintly, the crowd keeps chanting.
11 A Pay for it.
12 A Pay for it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05150_2.json
### SCENE s05150_2 | INT. UNIT 214 - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE WOMAN, TEENAGE BOY, TOBY
1 A ¶ Cardboard boxes.
2 A A rocking horse under a sheet.
3 A A dressing mirror turned to face the wall.
4 A Everything neat, too neat, like someone arranged it for a visit.
5 A ¶ She pulls a box open.
6 A Photographs.
7 A Her own face at ten years old, then at twelve, then at fourteen.
8 A Every one with the eyes scratched out.
9 D THE WOMAN (quiet): Okay.
10 A ¶ Behind her the corridor lights go out one by one, towards her.
11 A Click.
12 A Click.
13 A Click.
14 A ¶ A TEENAGE BOY, TOBY, 17, hi-vis vest two sizes too big, stands in the open doorway holding a torch.
15 D TOBY: Sorry! Sorry. Odell sent me. Said you might need a hand carrying.
16 D THE WOMAN: Carrying what.
17 D TOBY (looking past her): ...the mirror?
18 A ¶ She turns.
19 A The mirror is facing the room now.
20 A Nobody touched it.
21 A ¶ TIME CUT:
