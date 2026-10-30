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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02360.json
### SCENE s02360 | INT. PUBLIC POOL - SWIM MEET - EVENING
Detected names (may be incomplete or contain aliases): COACH TREVOR PIKE, DANI KOWALCZYK, ANNELIESE VEGA, STARTER, TEENAGE TIMEKEEPER
1 A ¶ Chlorine haze.
2 A Echoing whistles.
3 A Lane ropes in red and white.
4 A Parents crowd the bleachers with foam fingers.
5 A ¶ COACH TREVOR PIKE, 40s, in a wind jacket and a stopwatch lanyard, kneels at the edge of lane four, speaking low.
6 A At his feet, DANI KOWALCZYK, 17, in a cap and goggles, rocks on her heels.
7 D PIKE: She'll be on your left. Don't watch her.
8 D DANI: I won't.
9 D PIKE: You will.
10 D DANI: I will.
11 A ¶ He grins and squeezes her shoulder.
12 A ¶ Across the deck, in lane five, ANNELIESE VEGA, 17, shakes out her arms.
13 A Her coach says something.
14 A She answers without looking.
15 A Her eyes are on Dani.
16 A ¶ Dani looks back.
17 A Neither blinks.
18 D PIKE (quietly): She beat your time last week.
19 D DANI: I know.
20 D PIKE: She's going to start fast.
21 D DANI: So will I.
22 A ¶ The starter walks to the end of the deck.
23 A A hush spreads over the bleachers.
24 D STARTER [O.S.]: Swimmers, take your marks.
25 A ¶ Dani steps onto the block.
26 A Anneliese steps onto hers.
27 A They bend.
28 A A gun cracks.
29 A ¶ Both dive.
30 A The water closes over them like glass.
31 A ¶ Pike jogs along the side, timer in fist.
32 A Dani and Anneliese surface together and churn, white water, arms rising in perfect rhythm.
33 A ¶ At the halfway turn, they flip within a breath of each other.
34 A A girl in the stands screams.
35 A ¶ A TEENAGE TIMEKEEPER, 15, in a borrowed volunteer shirt, appears beside Pike with a clipboard, wide-eyed.
36 D TIMEKEEPER: Coach, which one is yours?
37 D PIKE: The one on the left.
38 D TIMEKEEPER: They're both on the left.
39 D PIKE: Then the one who's winning.
40 A ¶ She grins.
41 A The swimmers surge toward the wall.
42 A Anneliese reaches first by half a hand.
43 A Dani slaps the tile a hair behind.
44 A ¶ The scoreboard blinks.
45 A Both girls hang from the lane rope, gasping, staring at the numbers.
46 A Anneliese raises one fist.
47 A Dani turns her face to the water, and the goggles hide her eyes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02373.json
### SCENE s02373 | INT. MINIATURE GOLF CLUBHOUSE - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN HOOK'S INVITATIONAL, BARNABY PLOTT, DEE, OKAFOR-LINDQVIST, MARCUS VANCE, TALL STRANGER
1 A ¶ A snack-bar-and-trophy-case combo built to look like a pirate ship, with a fibreglass parrot bolted over the register.
2 A The carpet is the green of a sick lawn.
3 A Rain taps the porthole windows.
4 A A hand-lettered banner reads: CAPTAIN HOOK'S INVITATIONAL - FINAL ROUND.
5 A ¶ BARNABY PLOTT, sixties, beard dyed an unnatural black, in a captain's hat and a tracksuit, polishes a plastic trophy with a napkin.
6 A At the counter, DOLORES "DEE" OKAFOR-LINDQVIST, forties, a brisk accountant in a rain slicker, studies a clipboard.
7 A In a booth, young MARCUS VANCE, twenty, wears a bowling shirt and sips a slushie with great solemnity.
8 D DEE: So the prize pool is four hundred dollars.
9 D BARNABY: Four hundred and twelve. Counting the raffle.
10 D DEE: And the entry fees were forty each, eleven entrants.
11 D BARNABY: Correct.
12 D DEE: Then the prize pool is four forty.
13 D BARNABY: Ah. Well. There's the hat.
14 D DEE: Barnaby.
15 D BARNABY: The hat was twenty-eight dollars.
16 D MARCUS (through straw): It's a good hat.
17 D DEE: Nobody asked you.
18 D MARCUS: Sorry.
19 A ¶ A beat of calm.
20 A Barnaby sets the trophy on the shelf.
21 A Dee clicks her pen shut.
22 A The rain eases.
23 A For a moment the whole place feels cosy.
24 D BARNABY: You know, I think this is the best year we've had.
25 D DEE: It might be.
26 D MARCUS: The windmill was running smooth this morning.
27 D BARNABY: That windmill has not run smooth since the Reagan administration.
28 D MARCUS: Well. It did today.
29 D DEE (still writing): Who's the other finalist?
30 D BARNABY: Some fellow. Showed up at nine, paid cash. Name on the sheet is... Smith.
31 D DEE: Just Smith.
32 D BARNABY: I assumed he was shy.
33 A ¶ The door opens.
34 A A TALL STRANGER in a trench coat enters, shaking out an umbrella.
35 A Sixty, silver hair, eyes like cold coins.
36 A He walks to the counter and sets a putter on it.
37 D STRANGER: I'm here for the final.
38 D BARNABY: Mister Smith! Wonderful. Dee, this is the competition.
39 D STRANGER: It's not Smith.
40 D DEE: Pardon?
41 D STRANGER: It's Vance.
42 A ¶ Marcus chokes on his slushie.
43 A Barnaby looks from the stranger to Marcus and back.
44 A Dee puts down her pen.
45 D MARCUS: Dad?
46 D VANCE: Hello, Marcus.
47 D BARNABY: You two know each other?
48 D MARCUS: He told me he was dead.
49 D VANCE: I told you I was in Arizona.
50 D MARCUS: For nine years.
51 D DEE: Mr. Vance, we don't actually have a rule about estranged fathers, but I think I should say the raffle money is already spent.
52 D BARNABY: Spent on the hat.
53 D DEE: Barnaby.
54 D VANCE: I read about the tournament in the paper. Your name was on the entry list. I thought, he's still playing.
55 D MARCUS: I never stopped.
56 D VANCE: I know. I used to watch you through the fence.
57 A ¶ Barnaby takes off the hat and holds it to his chest.
58 A Dee's eyes go wide.
59 A Nobody speaks.
60 A The parrot above the register creaks on its bolt.
61 D MARCUS (quiet): Fine. Eighteen holes. Winner buys lunch.
62 D VANCE: And the loser?
63 D MARCUS: Asks the other one a question.
64 A ¶ Vance nods once.
65 A He picks up his putter.
66 A Marcus slides out of the booth with his own, an old one with tape on the grip.
67 D BARNABY (whispering to Dee): I think that's the best tournament we've ever had.
68 D DEE (whispering back): I'm still short twelve dollars.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02041.json
### SCENE s02041 | INT. REPTILE HOUSE AT THE CITY ZOO - AFTER HOURS
Detected names (may be incomplete or contain aliases): BARNABY OKONKWO-FITCH, PENELOPE ARAKAWA
1 A ¶ Warm, humid air.
2 A Glass terrariums glowing green and amber.
3 A A heat lamp ticks.
4 A A sign reads: "PLEASE DO NOT TAP THE GLASS."
5 A ¶ BARNABY OKONKWO-FITCH (40s, zookeeper, khaki shirt, a bucket of dead mice) whistles tunelessly while he refills water dishes.
6 A His new assistant, PENELOPE ARAKAWA (20s, ponytail, brand-new boots) stands beside him, clutching a clipboard like a shield.
7 D BARNABY: Don't be nervous. They can smell it.
8 D PENELOPE: I'm not nervous.
9 D BARNABY: Your hand is white.
10 D PENELOPE: It's the clipboard. It's heavy.
11 D BARNABY: It's cardboard.
12 A ¶ She lets go.
13 A The clipboard slaps to the floor.
14 A She picks it up.
15 A He pretends not to notice.
16 D BARNABY [CONT'D]: Now. This is Gladys.
17 A ¶ He taps a glass.
18 A Inside, a python the thickness of a fire hose lies coiled around a branch, perfectly still.
19 D PENELOPE: She's lovely.
20 D BARNABY: She's a bit shy.
21 D PENELOPE: I can see that.
22 D BARNABY: She likes it quiet. Soft voices. No sudden moves.
23 D PENELOPE: Understood.
24 D BARNABY: And she hates hats.
25 D PENELOPE: I'm not wearing a hat.
26 D BARNABY: Good. Keep it that way.
27 A ¶ He goes to the next case.
28 A She stays, staring at Gladys, who has not moved.
29 A Penelope tilts her head.
30 A Gladys slowly tilts hers.
31 A ¶ Barnaby returns with a mouse in tongs and the bucket under his arm.
32 A He unlocks the case.
33 A Opens the hatch.
34 A Gladys stirs.
35 D BARNABY [CONT'D] (quiet): Watch.
36 A ¶ The snake unspools.
37 A Slow, silent, hypnotic.
38 A It takes the mouse in a single smooth strike.
39 A Penelope does not flinch.
40 A Barnaby watches her face.
41 D BARNABY [CONT'D]: You're good at this.
42 D PENELOPE: I grew up with a lot of brothers.
43 D BARNABY: That explains it.
44 A ¶ He closes the hatch.
45 A Dusts his hands.
46 A Then, casually, as if it were nothing:
47 D BARNABY [CONT'D]: Penelope.
48 D PENELOPE: Yes?
49 D BARNABY: Do you know why we feed her at night?
50 D PENELOPE: So she's calm for the visitors?
51 D BARNABY: No. Because she's gone.
52 A ¶ A beat.
53 A Penelope looks at the case.
54 A At the coils.
55 A At the branch.
56 A Gladys is exactly where she was.
57 A Perfectly still.
58 D PENELOPE: She's right there.
59 D BARNABY: That's a decoy.
60 D PENELOPE: A what?
61 D BARNABY: We made it. Last Tuesday. I was hoping you wouldn't notice.
62 D PENELOPE (slowly): Where is she?
63 D BARNABY: That's the thing.
64 A ¶ They both look up at the ceiling grate.
65 A A long, heavy thump echoes through the vent.
66 D BARNABY: Don't move.
67 D PENELOPE: Don't move.
68 A ¶ Neither does.
69 A The vent creaks.
70 A Something coils in the dark above them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01861.json
### SCENE s01861 | EXT. ROOFTOP WATER TOWER - DAWN
Detected names (may be incomplete or contain aliases): JUNE WEBER, OSCAR PELL, KID
1 A ¶ A rusted water tower on a flat tar roof above a sleeping town.
2 A Pigeons.
3 A A pink smear of sky.
4 A ¶ JUNE WEBER, 17, fraying denim jacket, climbs the last rung.
5 A Chewed fingernails.
6 A A paper bag in her teeth.
7 A ¶ She hauls over the lip.
8 A Looks around.
9 A ¶ Nobody.
10 A ¶ She sits.
11 A Takes a donut from the bag.
12 A ¶ A scrape behind her.
13 A ¶ She spins.
14 A ¶ OSCAR PELL, 17, skinny, dyed-blond hair, up the other ladder.
15 A Out of breath.
16 A Grinning.
17 D OSCAR: Told you I'd beat you.
18 D JUNE: You didn't.
19 D OSCAR: I got here at five.
20 D JUNE: Then why were you climbing?
21 D OSCAR: I went down for coffee.
22 A ¶ He holds up two paper cups.
23 A Hands her one.
24 A She takes it, suspicious.
25 D JUNE: It's cold.
26 D OSCAR: It's iced.
27 D JUNE: It's November.
28 D OSCAR: It's committed.
29 A ¶ She laughs despite herself.
30 A Drinks.
31 A ¶ Below, a milk truck rattles down Main Street.
32 A The light spreads.
33 A ¶ A third voice, below, thin and sharp.
34 A A kid's.
35 D KID [O.S.]: Oscar! Mom says come home!
36 A ¶ Oscar closes his eyes.
37 D OSCAR: Ten minutes!
38 D KID [O.S.]: She says now!
39 D JUNE: Who's that?
40 D OSCAR: My sister.
41 D JUNE: How old?
42 D OSCAR: Nine. Terrifying.
43 A ¶ He stands.
44 A Offers June a hand.
45 A She takes it.
46 D JUNE: Tomorrow?
47 D OSCAR: Same tower.
48 D JUNE: Bring hot coffee.
49 D OSCAR: Bring a better donut.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01523.json
### SCENE s01523 | INT. DRAINED PUBLIC SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): CAZ, REYES-MORROW, LUDDY, KOVAC, TOMAS
1 A ¶ Empty deep end.
2 A Cracked blue tiles.
3 A A single work light on a stand.
4 A Rain taps the skylights.
5 A ¶ CASPIAN "CAZ" REYES-MORROW, 40s, rumpled suit, sits on the pool ladder, briefcase on his lap.
6 A Waiting.
7 A ¶ Footsteps echo above.
8 A A woman descends the shallow-end stairs, hands visible.
9 A ¶ LUDMILA "LUDDY" KOVAC, 30s, leather jacket, calm to the point of insult.
10 D LUDDY: Caz.
11 D CAZ: Luddy. You're early.
12 D LUDDY: You're sweating.
13 D CAZ: It's a pool. Humidity.
14 D LUDDY: It's empty.
15 A ¶ She tilts her head at the briefcase.
16 A He tightens his grip.
17 D LUDDY [CONT'D]: Where's Tomas?
18 D CAZ: Parking.
19 D LUDDY: Tomas doesn't drive.
20 A ¶ A beat.
21 A The rain gets louder.
22 A Somewhere a pipe knocks.
23 D CAZ: He learned.
24 D LUDDY: Caz.
25 D CAZ: Luddy, don't.
26 A ¶ She walks the slope of the pool floor, slow, boots squeaking on old algae.
27 A Caz stands, the ladder clanking, and sets the briefcase between them on the tile.
28 A He steps back.
29 A She does not step forward.
30 A Above, a shadow slides across the skylight and is gone, and Caz looks up while Luddy looks at him.
31 D LUDDY [CONT'D]: That's not Tomas.
32 D CAZ: It's the wind.
33 D LUDDY: It's Dutch Maren. I can smell the cigarettes.
34 D CAZ: Luddy, I had no choice.
35 D LUDDY: Everyone says that at the end.
36 A ¶ A metal door bangs open above.
37 A Heavy steps.
38 A A voice, thick and amused, rolls down the tiles.
39 D TOMAS [O.S.]: Caz, my friend. You were supposed to be quiet.
40 A ¶ Caz drops.
41 A Luddy draws a pistol from her jacket, spins, fires at the light stand.
42 A Glass bursts.
43 A Darkness, except the faint blue of the skylights.
44 A Caz crawls behind the ladder, hugging the briefcase, while Luddy slides down the wall of the deep end and Tomas' boots clatter on the steps, unhurried, a man descending to a party.
45 D TOMAS [O.S., CONT'D]: Luddy. You always did love a dramatic entrance.
46 D LUDDY (whisper): Caz, open the case.
47 D CAZ: There's nothing in it.
48 D LUDDY: What?
49 D CAZ: There was never anything in it!
50 A ¶ Tomas laughs in the dark.
51 A A lighter flicks.
52 A A small flame shows his face at the lip of the pool, smiling.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00183.json
### SCENE s00183 | INT. ABANDONED BOWLING ALLEY CONVERTED INTO A GOAT YOGA STUDIO - MORNING
Detected names (may be incomplete or contain aliases): PERPETUA OKAFOR-LINDQVIST, HOLDEN BAXTER, BRIDGET MULLANEY, SPENCER, MARCEL DUPUIS-OGUNDE
1 A ¶ Sun slants through the old neon pins.
2 A The lanes are covered in rubber mats, and seven goats in tiny sweaters stand about like mildly disappointed customers.
3 A The air smells of lavender and hay.
4 A ¶ PERPETUA OKAFOR-LINDQVIST, 40s, instructor and owner, stands on lane four in a lilac unitard, hands pressed together.
5 A Her student, HOLDEN BAXTER, 30s, a nervous accountant, holds a downward dog while a goat named Kevin stands on his back and chews his shirt.
6 A At the shoe counter, BRIDGET MULLANEY, 70s, the landlady, counts rent in a ledger with a pen she clicks like a metronome.
7 A Perpetua's cellphone buzzes on the ball return.
8 D PERPETUA: Breathe into your sit bones, Holden.
9 D HOLDEN: I don't think I have sit bones.
10 D PERPETUA: Everyone has sit bones.
11 D HOLDEN: Kevin is eating my collar.
12 D PERPETUA: That's Kevin's way of saying he trusts you.
13 A ¶ The phone buzzes again.
14 A The speaker clicks on by itself.
15 D SPENCER [V.O.] (over phone): Perp, it's Spencer from the county. We need to talk about the permit.
16 D PERPETUA (to the phone): Spencer, I'm in a flow.
17 D SPENCER [V.O.]: There's a complaint. About, uh, the goats and the fire code.
18 A ¶ Bridget stops clicking.
19 A A goat bleats.
20 A Another follows.
21 A Holden collapses into a puddle and Kevin steps off him, unbothered.
22 D BRIDGET: The fire code. I told you.
23 D PERPETUA: You told me nothing, Bridget.
24 D BRIDGET: I told you in March.
25 A ¶ A new figure enters through the fire door, backlit: MARCEL DUPUIS-OGUNDE, 50s, a health inspector in a crisp gray suit, clipboard clutched like a shield.
26 A A goat sniffs his cuff.
27 A He lifts his pen.
28 D MARCEL: Ms. Okafor-Lindqvist?
29 D PERPETUA: Namaste, officer.
30 D MARCEL: Inspector. I'm here about the livestock.
31 D HOLDEN (from the floor): They're not livestock. They're faculty.
32 A ¶ Marcel writes something.
33 A Kevin eats the page.
34 D SPENCER [V.O.] (over phone): Hello? Is anyone there?
35 A ¶ Perpetua closes her eyes, breathes in, and turns the phone face down.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02111.json
### SCENE s02111 | INT. ALPINE HUT - MORNING
Detected names (may be incomplete or contain aliases): VASILIKI KOUROS, TIBOR HAL, SZ, JACARANDA FENTON-MBEKI, GUS, CALDER
1 A ¶ A one-room stone refuge at the edge of a glacier.
2 A Pine rafters, a cast-iron stove, and four bunks in a row.
3 A Frost on the inside of the window.
4 A Sunlight, sudden and blazing, pours through it onto a table laid with oatmeal and tin mugs.
5 A ¶ Four climbers have just woken.
6 A VASILIKI KOUROS, 30s, wiry and sun-darkened, stirs the pot with a wooden spoon.
7 A TIBOR HALÁSZ, 50s, gray-bearded, gaunt, laces his boots with slow concentration.
8 A The youngest, JACARANDA FENTON-MBEKI, 19, a rope bag over her shoulder, stands at the window, grinning at the sky.
9 A AUGUSTINE "GUS" CALDER, 40s, their guide, sits on a bunk, back to the wall, oddly still.
10 A ¶ The mountain outside is flawless.
11 A Not a cloud.
12 A Every ridge cut sharp as glass against the blue.
13 D JACARANDA (whispering with delight): Look at it.
14 D VASILIKI: I'm looking.
15 A ¶ They eat.
16 A Spoons clink.
17 A The stove ticks.
18 A For a long minute it is perfect: the quiet pleasure of being alive.
19 A Only Gus does not eat.
20 A He is watching the window with the expression of a man reading a letter he does not want to finish.
21 D TIBOR: Gus. Eat.
22 D GUS: In a minute.
23 A ¶ He rises, crosses to the window, and presses his palm to the glass.
24 A Far away, on the western horizon, a faint white line has drawn itself across the blue, thin as a hair, and it is growing.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02188.json
### SCENE s02188 | INT. HOSPITAL LAUNDRY ROOM - 4 A.M.
Detected names (may be incomplete or contain aliases): NURSE AGNES BRIGHTWATER, SAMIR HADDAD, ORDERLY CHEN WEI, VISITOR, DOLORES
1 A ¶ Steam.
2 A Rolling carts of folded scrubs.
3 A A row of industrial dryers thumping like slow hearts.
4 A ¶ NURSE AGNES BRIGHTWATER (40s, braids pinned under a cap) leans on a cart, eyes closed, fanning herself with a chart.
5 A DR. SAMIR HADDAD (30s, resident, rumpled) sits on the floor with his back to a dryer, a granola bar in each hand.
6 A ORDERLY CHEN WEI (50s, thick glasses) folds towels with machine speed.
7 A ¶ A figure stands in the doorway, uncertain.
8 A A slight woman in a visitor's lanyard, clutching a plastic bag of knitting.
9 A This is the VISITOR (60s).
10 D VISITOR: Excuse me. I'm looking for the cafeteria.
11 D AGNES: Wrong floor, hon.
12 D VISITOR: They sent me down.
13 D SAMIR: They send everyone down. It's the only warm room.
14 A ¶ The Visitor steps in.
15 A Agnes gestures to a stool.
16 A The Visitor sits, rummages in her bag, pulls out a half-finished scarf, and begins knitting.
17 A Chen Wei folds a towel, glances at her, folds another.
18 A Samir unwraps a granola bar and chews.
19 A Agnes closes her eyes again.
20 D VISITOR: I'm Dolores, by the way.
21 D AGNES: Agnes.
22 D SAMIR: Samir.
23 D CHEN WEI: Chen.
24 D DOLORES: Pleased to meet you all. I'm visiting my husband. Third floor. He had a stroke.
25 D AGNES: I'm sorry.
26 D DOLORES: Oh, he's stubborn. He'll be fine. He'll be furious about the hospital food.
27 D SAMIR: Everyone is.
28 D DOLORES: Do you have a husband, Agnes?
29 D AGNES: Eighteen years.
30 D DOLORES: That's a long time.
31 D AGNES: It's about right.
32 A ¶ Chen Wei sets down a stack of towels, sits on a cart, and watches Dolores's needles click.
33 A The dryers thump.
34 A Samir takes a second bite.
35 D DOLORES: Would any of you like a scarf? I make them for the ward.
36 D SAMIR: I'll take one.
37 D CHEN WEI: Green.
38 D DOLORES: Green it is.
39 D AGNES (eyes still closed): I'll take whichever one he doesn't.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00392.json
### SCENE s00392 | EXT. DEAD DRIVE-IN THEATER - NIGHT
Detected names (may be incomplete or contain aliases): PELL PELLEGRINO, ODESSA LANE
1 A ¶ A cracked lot.
2 A A blank screen the size of a barn.
3 A Speaker poles stand in rows like headstones.
4 A One lamp burns over a concession shack.
5 A ¶ PELL PELLEGRINO, 50s, in a loud tie and a camel coat, sits on the hood of a Buick with a briefcase on his knee.
6 A ODESSA LANE, 40, a plainclothes detective in a gray raincoat, walks across the gravel with her hands visible.
7 D ODESSA: You're early.
8 D PELL: I like to see who comes.
9 D ODESSA: Just me.
10 D PELL: Just you. Nice of them.
11 D ODESSA: You asked for me.
12 D PELL: I asked for the one who wouldn't bring a van.
13 A ¶ Odessa stops ten feet away.
14 A She lowers her hands, one of them drifting to the lining of her coat.
15 A Pell opens the briefcase an inch and looks inside, then up.
16 A A moth circles the lamp, crashing, crashing.
17 A Down the lot, a dog barks twice and gives up.
18 A Pell slaps the case shut, hops off the hood, and takes a step, and Odessa takes a step, and the gravel cracks under both of them.
19 D PELL [CONT'D]: You know what this lot used to show?
20 D ODESSA: Westerns.
21 D PELL: Every Friday. My father brought me. Dust, horses, a man in a hat who always knew the way out.
22 D ODESSA: Pell.
23 D PELL: He never did. Know the way. He just had the hat.
24 D ODESSA: Where's Sal?
25 D PELL: Sal's on the snack bar roof. With a rifle.
26 A ¶ She doesn't look up.
27 A She keeps her eyes on his.
28 D ODESSA: You're telling me.
29 D PELL: I'm telling you because I like you.
30 D ODESSA: That's not why.
31 D PELL: No. I'm telling you because you'll understand it's an insult.
32 D ODESSA: He won't shoot.
33 D PELL: He would. But I'd like to make you an offer first.
34 D ODESSA: Go on.
35 D PELL: I'll give you the briefcase. All of it. Names, dates, drops, three judges, and the mayor's cousin. In return, tonight, you go home. You never found me.
36 D ODESSA: That's a lot of names for a woman who can't be trusted.
37 D PELL: You're the only one who can't be bought. That's the point.
38 A ¶ She looks at the roof of the snack bar.
39 A A silhouette, a barrel.
40 A She looks back.
41 D ODESSA: Put it on the ground.
42 D PELL: Detective.
43 D ODESSA: Put it on the ground, Mr. Pellegrino, and tell your friend to climb down.
44 A ¶ Pell holds the briefcase for a long beat.
45 A Then he lowers it to the gravel.
46 A The lamp flickers.
47 A On the snack bar roof, the silhouette does not move.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02518.json
### SCENE s02518 | EXT. RIVER BOATHOUSE - DAWN
Detected names (may be incomplete or contain aliases): COACH ARCHIBALD PELHAM-GREENE, JASPER OKUMURA, DOLORES RIVAS, ANSELM TREMAINE
1 A ¶ Mist rising off a flat brown river.
2 A Racing shells rest on racks like sleeping insects.
3 A Dew on the dock boards.
4 A A single crow on a piling.
5 A ¶ COACH ARCHIBALD PELHAM-GREENE, 60s, tweed jacket and megaphone, stands at the end of the dock.
6 A JASPER OKUMURA, 20s, stroke, sits on the edge with his oar across his knees.
7 A DOLORES RIVAS, 20s, coxswain, tiny in an oversized windbreaker, studies a clipboard.
8 A ANSELM TREMAINE, 20s, bow, ties his shoes with great ceremony.
9 D ARCHIBALD: Eights in five.
10 D DOLORES: We're ready.
11 D ARCHIBALD: Are you?
12 D JASPER: Yes, Coach.
13 D ARCHIBALD: Anselm?
14 D ANSELM: Yes, Coach.
15 D ARCHIBALD: You look like a man tying his shoes.
16 D ANSELM: I am.
17 D ARCHIBALD: Tie them faster.
18 A ¶ Anselm ties them slower.
19 A Dolores stifles a laugh.
20 D ARCHIBALD [CONT'D]: Regatta in nine days. Their stroke rate is thirty-eight.
21 D JASPER: Ours is thirty-six.
22 D ARCHIBALD: Ours is thirty-six and clean.
23 D JASPER: Clean wins.
24 D ARCHIBALD: Clean wins eventually.
25 A ¶ Dolores raises her hand.
26 D DOLORES: Coach, can I say something?
27 D ARCHIBALD: You may.
28 D DOLORES: I've been counting strokes since March.
29 D ARCHIBALD: And?
30 D DOLORES: We're never as bad as we think we are.
31 A ¶ A silence.
32 A Archibald looks at the river.
33 A The crow flies off.
34 D ARCHIBALD: That's the best thing anyone's said all season.
35 A ¶ He raps the megaphone on the post.
36 D ARCHIBALD [CONT'D]: Boat on the water.
37 A ¶ They stand.
38 A Four people lift a shell with the unhurried care of men carrying a coffin.
39 A Nobody speaks.
40 A The mist parts.
