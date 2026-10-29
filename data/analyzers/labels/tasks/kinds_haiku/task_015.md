You classify screenplay action lines that have NO character as their agent, for a writing tool.
Every line in the script must belong somewhere, so each marked line (`*`) gets exactly one kind:

- `setting`  : the place, scenery, light, weather, time of day, what a space looks/sounds like as a whole
               ("A cramped kitchen.", "Rain hammers the windows.", "Dawn over the harbor.", "Silence.")
- `event`    : something happens or an object/sound/vehicle/machine acts, with no character doing it
               ("The phone rings.", "A car backfires outside.", "Cash.", "The door swings shut.", "A light blinks.")
- `extra`    : done by people or creatures who are NOT characters of the scene (unnamed passers-by, a crowd that
               is not in the names list, an animal, a monster) ("A waiter passes.", "Two women lean on its bumper.")
- `camera`   : shot, edit or on-screen-text directions ("CLOSE ON the letter.", "We see...", "INSERT - phone",
               "SUPER: 1999", "Back to scene.", "INTERCUT", "Time cut.")
- `abstract` : narration, reflection, commentary, theme, time passing, things that are not visible action
               ("Some wounds never close.", "Years pass.", "This is the last time they will speak.")
- `character`: actually done by / describing a character in the names list (the marking was wrong). Then also give
               the name(s).

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block. Only `*` lines need a label;
the rest is context.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0115.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00318 | INT. PRESCHOOL PLAYGROUND - NAP TIME - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDMA ODALIE KOWALSKI-ADEYEMI, BERTIE, NNAMDI-LINDGREN, AUNT RUFINA PRYCE-OYELARAN, COUSIN TAVIAN BRAITHWAITE-OSEI, BABY SITTER, JOJO, ABARA-FENWICK, LITTLE ZURI ADEKUNLE-HOLM
* 1 A ¶ Foam mats.
* 2 A Mobile of felt moons.
3 A Six figures in miniature chairs at a very small table, holding very small teacups.
4 A ¶ GRANDMA ODALIE KOWALSKI-ADEYEMI (70s, church hat).
5 A UNCLE BARTHOLOMEW "BERTIE" NNAMDI-LINDGREN (50s, delivery uniform).
6 A AUNT RUFINA PRYCE-OYELARAN (40s, scrubs).
7 A COUSIN TAVIAN BRAITHWAITE-OSEI (30s, suit).
8 A THE BABY SITTER, MS. JOSEPHINE "JOJO" ABARA-FENWICK (20s, lanyard).
9 A And the child, LITTLE ZURI ADEKUNLE-HOLM (4, tutu over snow pants).
10 D ZURI (solemn): More tea, please.
11 D ODALIE: Of course, dear.
12 A ¶ She pours from an empty pot.
13 A Bertie sips from a cup of nothing.
14 A Rufina checks her watch.
15 A Tavian's phone buzzes; he silences it.
16 A Jojo mouths along with every word.
17 D ZURI: She spilled.
18 D BERTIE: She did?
19 D RUFINA: She did not.
20 D TAVIAN: She did a little.
21 D ODALIE: He's lying. She spilled a lot.
22 D ZURI: He did it.
23 D JOJO: Who's he?
24 D ZURI: Him.
25 A ¶ Everybody points at somebody else.
26 D ZURI [CONT'D]: Nap time!
27 A ¶ They lower their heads onto the table, one by one, a perfect silent tableau.
28 A Zuri peeks.
29 A Smiles.
30 A Lowers her head too.

### SCENE s00319 | EXT. ABANDONED DRIVE-IN SNACK STAND ROOF - NIGHT
Detected names (may be incomplete or contain aliases): CALLUM ODUYA-LINDQVIST, NADIA, ABARA-FENWICK
* 1 A ¶ A flat tar roof under a smear of stars.
* 2 A A cracked neon cone sign, unlit.
* 3 A A cooler.
* 4 A Two lawn chairs.
5 A ¶ Two teenagers sit with their backs to the sky.
6 A ¶ CALLUM ODUYA-LINDQVIST (16, skinny, hoodie, hands tucked in sleeves) watches the road below.
7 A ¶ NADEZHDA "NADIA" ABARA-FENWICK (16, cut-off jeans, scab on one knee) lies flat, staring up.
* 8 A ¶ Somewhere far off, a freight train rolls.
9 D NADIA: Seven.
10 D CALLUM: Seven what?
11 D NADIA: Satellites. Since you sat down.
12 D CALLUM: That's not satellites.
13 D NADIA: It's satellites.
14 D CALLUM: It's planes.
15 D NADIA: Planes blink.
16 A ¶ He doesn't argue.
17 A Leans back.
* 18 A The tar creaks.
19 D CALLUM: My dad's driving back tomorrow.
20 D NADIA: From where?
21 D CALLUM: Reno.
22 D NADIA: What's in Reno?
23 D CALLUM: Nothing. That's the point.
24 A ¶ She turns her head toward him.
25 D NADIA: Is he staying?
26 D CALLUM: He says so.
27 D NADIA: Do you believe him?
28 D CALLUM: He bought a couch.
29 D NADIA: That's not the same.
30 D CALLUM: He's never bought a couch.
31 A ¶ She sits up.
32 A Pulls her knees to her chest.
33 A He opens the cooler and offers her a soda.
34 A She takes it.
35 D NADIA: Mine's leaving for good, you know.
36 D CALLUM: Your mom?
37 D NADIA: Mine's mom, yes, my mom. Moving to Tucson with a guy named Gordon.
38 D CALLUM: Gordon sounds fake.
39 D NADIA: Gordon sounds like a sofa.
40 D CALLUM: He might be your dad's couch.
41 A ¶ She laughs, loud, startling a nighthawk off the sign.
42 A Callum smiles, too, for the first time.
* 43 A The freight train's horn fades.
44 D NADIA: You'll still be here.
45 D CALLUM: Yeah.
46 D NADIA: Promise.
47 D CALLUM: I'm not going anywhere. There's nowhere to go.
48 D NADIA: That's not a promise.
49 D CALLUM: It's the only kind I have.
50 A ¶ She tips her soda against his.
51 A They drink.
52 A A shooting star cuts across the sky and neither of them says anything, though both see it.
53 D NADIA: Make a wish.
54 D CALLUM: I did.
55 D NADIA: What was it?
56 D CALLUM: If I tell you, it won't work.
57 D NADIA: That's superstition.
58 D CALLUM: It's a rule.
59 D NADIA: Same thing.
60 D CALLUM: Not tonight.
61 A ¶ She lies back.
62 A He lies down, too, shoulder to shoulder, and the stars wheel on above them.

### SCENE s00320 | INT. LIGHTHOUSE LAMP ROOM TEA SHOP - DUSK
Detected names (may be incomplete or contain aliases): ODALYS VANCE, BRAM OKONKWO, HESTER PELL
* 1 A ¶ The lamp room of a decommissioned lighthouse, glazed on all sides, the great lens long ago swapped for six mismatched tables.
* 2 A Salt has frosted the windows from outside.
* 3 A Inside, steam from a copper urn beads on the brass rail.
* 4 A Every cup in the room is chipped in the same place, as if by one clumsy hand.
5 A ¶ ODALYS VANCE, forties, a insurance assessor in a rain-spotted camel coat, sits with her back to the sea.
* 6 A Her notebook is closed.
* 7 A Her pen is not.
8 A ¶ BRAM OKONKWO, sixties, the shop's owner, a broad man with flour-white forearms and a limp he pretends is a stroll, sets a teapot between them without being asked.
9 A ¶ HESTER PELL, eighties, sits at the farthest table in a knitted hat, spooning sugar into a cup that is already full.
10 A She has not looked up since Odalys arrived.
11 D ODALYS: The policy was taken out eleven days before the fire.
12 D BRAM: Eleven days is a good number. Lucky, in some places.
13 D ODALYS: The fire started in the cellar. The cellar had no wiring. No stove. Nothing that burns by itself.
14 D BRAM: Old buildings do surprise us.
15 D ODALYS: Your lease says the cellar was sealed in 1994. Someone unsealed it. Someone with a key to a door that, on paper, does not exist.
16 D BRAM: I have a great many keys. Lighthouses are sentimental about keys.
17 D ODALYS: Mr. Okonkwo, I am not accusing you.
18 D BRAM: That is the most frightening sentence in your language.
19 D HESTER (not looking up): He did not light it.
20 D ODALYS: Mrs. Pell. I did not know you were listening.
21 D HESTER: I have listened to this room for fifty years. It is the only thing I do properly.
22 D BRAM: Hester, please.
23 D HESTER: Your father kept the lamp, Bram. Mine kept the logbook. You know what a logbook is for.
24 D BRAM: Not now.
25 D ODALYS: What is it for, Mrs. Pell?
26 D HESTER: For the nights nobody wants remembered.
27 D BRAM: That book burned.
28 D HESTER: That book is in my handbag.
29 D ODALYS: Then the fire was not an accident, and it was not for the insurance.
30 D BRAM: Stop. Both of you. Stop talking.
31 D HESTER: He wrote a name on page forty. A boy. Seventeen. The wrong rocks, the right storm. Your father let the lamp go dark that night, Bram, to save oil.
32 D BRAM: He was ordered to.
33 D HESTER: He was paid to.
34 D ODALYS: And the cellar?
35 D HESTER: The cellar is where the boy was kept until the tide went out.
* 36 A ¶ The urn hisses.
37 A Bram's hand closes on the teapot handle and the pot shatters against the brass rail, tea running black across the floorboards toward Hester's shoes.
38 D BRAM: Nobody was meant to ever open that door!

### SCENE s00321 | INT. PICKLE BRINING CELLAR - DAY
Detected names (may be incomplete or contain aliases): FELIX BRANDT, MABEL TOOMEY, SOL KAPLAN
* 1 A ¶ Oak barrels stacked to the rafters.
* 2 A A single bare bulb swings on a cord.
* 3 A The smell is dill, vinegar and old secrets.
4 A ¶ FELIX BRANDT, fifties, a deli owner in a stained apron and a bow tie he refuses to remove, stands guard over a barrel with both arms spread wide.
5 A ¶ MABEL TOOMEY, thirties, a health inspector with a clipboard and a face like a closed door, taps her pen against the barrel lid.
6 A ¶ SOL KAPLAN, sixties, Felix's brother-in-law, sits on an upturned crate eating a pickle with great concentration.
7 D MABEL: Open the barrel, Mr. Brandt.
8 D FELIX: It's a pickle barrel. You've seen one. They're all the same.
9 D MABEL: Open it.
10 D FELIX (to the room): Folks, nobody panic, the lady wants to see a pickle.
11 A ¶ Sol chews.
12 A Nobody moves.
* 13 A The bulb sways.
14 D SOL (to himself): Forty years. Forty years and she wants to see a pickle.
15 D MABEL: I heard a noise from this barrel when I came in.
16 D FELIX: That's fermentation. It's alive. Like all of us.
17 D MABEL: It said "Felix."
18 D FELIX: Then it's a very friendly pickle.
19 A ¶ Mabel reaches for the lid.
20 A Felix steps in front of it.
21 A Sol quietly slides his crate three feet to the left, to block the door.
22 D FELIX [CONT'D]: Mabel, may I call you Mabel, the cellar is cold, your hands are cold, come upstairs, have a bagel.
23 D MABEL: Mr. Brandt, one thing at a time.
24 D FELIX: I'll give you two bagels.
25 D SOL (to nobody): Three. She looks like a three.
26 D MABEL: I do not take bribes.
27 D FELIX: Nobody said bribe. We said bagels.
28 D FELIX: It's a family recipe, you understand!
29 D MABEL: I understand a violation when I smell one!
* 30 A ¶ The lid thumps from inside.
31 A All three stare at it.
32 A Sol takes another bite.
33 D SOL (to the group): Nice acoustics down here.
34 A ¶ Felix puts a hand on the lid and presses down, smiling so hard his bow tie quivers.
35 D FELIX: Sol. The jar of the good relish. Upstairs. Now.
36 D SOL (rising, not hurrying): She'll want it with mustard.
37 D MABEL: I want the barrel open.
38 D FELIX: And I want a bigger deli. We don't always get.
* 39 A ¶ The lid thumps again.
40 A Mabel, without taking her eyes off Felix, writes one word on her clipboard and underlines it twice.

### SCENE s00322 | INT. SALT-DRYING SHED - TIDAL FLAT - NIGHT
Detected names (may be incomplete or contain aliases): INES MARCHETTI, DORCAS WYNN, TOBIAS LEACH
* 1 A ¶ A long timber shed on stilts above the mudflats, open at the seaward end.
* 2 A White pyramids of salt glimmer along the floor like small glaciers.
* 3 A The tide is a sound out in the dark, patient and wet.
4 A ¶ INES MARCHETTI, fifties, a brine-cracked woman in oilskins, stands at the foot of the largest heap with a lantern held low.
5 A ¶ DORCAS WYNN, thirties, a county coroner's investigator in a clean grey raincoat that does not belong here, kneels beside a shovel that someone has driven upright into the salt.
6 A ¶ TOBIAS LEACH, sixties, the shed's night watchman, sits on an overturned bucket in the doorway, his hands folded around a thermos.
7 A ¶ Ines sets the lantern down.
8 A Dorcas does not look at her.
9 A Ines watches Dorcas's hands, and Dorcas watches the shovel.
10 D INES: You found it fast.
11 D DORCAS: It was the only thing standing.
12 A ¶ Ines nods.
13 A She steps closer.
14 A She picks up a handful of salt and lets it run through her fingers back onto the pile.
15 A She does it again.
16 A She does not stop.
17 D TOBIAS: Tide turns at two. If you want the flat, you want it before.
18 D INES: We want nothing, Tobias.
19 A ¶ Dorcas pulls the shovel loose.
* 20 A The salt beneath is darker, damp, a seam of brown running down into the heap.
21 A She sets the blade against it and pushes.
22 D DORCAS: Who was working this stack last Thursday?
23 D INES: Nobody. It was closed.
24 D DORCAS: Somebody locked it. Somebody had the key.
25 A ¶ Ines hands Dorcas the lantern.
26 A She holds it a moment longer than she needs to, and she does not let go.
27 D INES: Careful. It is slippery near the edge.
28 A ¶ Dorcas takes the lantern.
29 A She notices that Ines has not asked what is under the salt.
30 A She says nothing.
31 A She digs.
* 32 A ¶ The shovel strikes cloth.
* 33 A A sleeve, grey like her own, stiff with brine.
34 A ¶ Tobias stands.
* 35 A The thermos drops, rolling across the boards.
36 D TOBIAS: I told you to leave the tide to do it.
37 D INES: Be quiet.
38 D TOBIAS: You said the tide would do it!
39 A ¶ Ines turns on him.
40 A Dorcas, still on her knees, sets down the lantern and the light throws all three shadows long against the wall.
41 D DORCAS: Which of you wants to tell me whose coat this is?
42 A ¶ Nobody answers.
* 43 A Out on the flat, the water arrives.

### SCENE s00323 | INT. STALLED CABLE CAR GONDOLA - DAY
Detected names (may be incomplete or contain aliases): RAVI, NKECHI, OLEG, PILAR
1 A ¶ RAVI, forties, a hiking guide, sits on the floor with his boots braced against the door.
2 A NKECHI, thirties, grips the rail.
3 A OLEG, seventies, holds a thermos in both hands.
4 A PILAR, twenties, films the white nothing outside on her phone.
* 5 A ¶ The gondola has been still for two hours.
6 A He licks his lips.
7 A She lowers the phone.
8 A They all look at the roof as it ticks in the cold.
9 D RAVI: Rescue said four hours. That was one hour ago, so three.
10 D NKECHI: It was two hours ago. So two.
11 D OLEG: It is whatever number keeps us calm. I choose three.
12 D PILAR: My battery is nineteen percent.
13 D RAVI: Then stop filming the clouds.
14 D PILAR: They're getting closer.
15 D NKECHI: Clouds don't get closer. We get lower.
16 D OLEG: Nobody said lower.
17 D RAVI: The cable sags in the cold. It is normal. Everybody breathe slowly, in through the nose.
18 D PILAR: I am breathing. I'm breathing so loudly.
19 D NKECHI: We are fine. Somebody pour the tea.
20 D OLEG: Last cup is mine. After that, we take turns.

### SCENE s00324 | EXT. FROZEN RESERVOIR CURLING SHEET - DAWN
Detected names (may be incomplete or contain aliases): KAI TANAKA, DESHAWN FOLEY, BIRGIT SOLBERG, ACHTERBERG, YOUNG PETRO
* 1 A ¶ A pale sheet of ice scraped smooth between two snowbanks, the far house painted in washed-out reds.
* 2 A Breath hangs over every mouth.
3 A ¶ KAI TANAKA, thirties, broom raised, crouches at the hog line.
4 A DESHAWN FOLEY, twenties, his rival, stands opposite in a borrowed jacket.
5 A BIRGIT SOLBERG, sixties, skips for Kai's team and screams numbers like a general.
6 A MRS. ACHTERBERG, seventies, the umpire, sits on a folding chair wrapped in a quilt.
7 A YOUNG PETRO, ten, Mrs. Achterberg's grandson, holds the scoreboard stick.
8 A ¶ Kai releases.
* 9 A The stone glides, curls, kisses Deshawn's guard and drifts toward the button.
10 A Birgit and Kai sweep together, frantic, shouting.
* 11 A The stone stops a hair short.
12 D BIRGIT: No!
13 D DESHAWN (grinning): Hair short, gentlemen!
14 A ¶ Kai and Deshawn shove each other chest to chest.
15 A Both slip, both go down in a tangle, brooms skittering away.
16 A Birgit hauls them apart by their collars.
17 A Petro drops the scoreboard stick and runs.
18 D MRS. ACHTERBERG: Measure it!
19 A ¶ Everyone freezes.
20 A Petro returns with the string, kneels, and stretches it from the button to the stone.
* 21 A The ice creaks like a held breath.
22 D PETRO: It's a tie.
23 A ¶ The group scatters in four directions, laughing, swearing, slapping each other on the back.

### SCENE s00325 | INT. HYPERBARIC CHAMBER - HOSPITAL BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): LENA ASHWORTH, NURSE PRIYA DESAI, WALDEMAR GRUBB
* 1 A ¶ A steel cylinder the size of a submarine hatch, riveted, round-windowed, humming.
* 2 A Dials gleam.
* 3 A A single bench runs along each wall.
* 4 A The air smells of hot metal and antiseptic.
5 A ¶ DR. LENA ASHWORTH, forties, tall, severe, with grey strands escaping from a tight bun, checks a pressure gauge with the focus of a surgeon.
6 A ¶ NURSE PRIYA DESAI, thirties, small, quick, her scrubs covered in a cardigan, adjusts an IV line on a gurney.
7 A ¶ MR. WALDEMAR GRUBB, sixties, a diver with the bends, lies on the gurney, bearded, grey-skinned, eyes bright with fear.
8 D LENA: Pressure at two atmospheres. Priya, how is his pulse?
9 D PRIYA: One-ten and climbing.
10 A ¶ Lena crosses to Priya.
11 A She leans over the gurney.
12 A She checks Waldemar's pupils.
13 A She frowns and looks up at Priya.
14 D WALDEMAR: Am I dying?
15 D LENA: You are being treated.
16 D WALDEMAR: That is not an answer.
17 D PRIYA: It's the only one she gives.
18 A ¶ Lena shoots Priya a look.
19 A Priya shrugs.
20 A She tucks the blanket tighter around Waldemar's feet.
21 D LENA: Two and a half atmospheres. Watch the oxygen. If he seizes, we have ninety seconds.
22 D PRIYA (low): Ninety seconds in a sealed tube. Wonderful.
23 D LENA: I heard that.
24 D WALDEMAR (wheezing): Tell me one thing. Which of you two is in charge?
25 A ¶ Lena and Priya both begin to answer.
26 A Both stop.
* 27 A The dial needle trembles.
* 28 A A rivet pings somewhere in the wall.
29 D PRIYA: She is.
30 D LENA: She is.
31 A ¶ They look at each other.
32 A Waldemar's whole body arches off the gurney and the alarm shrieks.
33 A Lena and Priya grab him at once, one at his shoulders, one at his knees, and hold him down while the chamber hums louder around them.
34 D LENA [CONT'D]: Three atmospheres! Now!
35 D PRIYA: Three! Going up!
36 A ¶ She hammers the valve.
* 37 A The needle climbs.
38 A Waldemar sags back, gasping, and the alarm cuts out.
* 39 A The sudden silence is enormous.
40 D WALDEMAR (a whisper): Thank you.
41 A ¶ Lena lets go first.
42 A Priya follows.
43 A Neither of them speaks.

### SCENE s00326 | INT. CHEESE-AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): SABINE LAROCHE, MOSES TREVELYAN, GINO BELLAMY, GUARD
* 1 A ¶ A limestone cavern carved into a mountainside, lined with wooden racks holding ten thousand wheels of alpine cheese.
* 2 A Humidity drips from the ceiling.
* 3 A The air is thick as a wet wool coat.
* 4 A A chain-link door stands at the far end, a keypad glowing red.
5 A ¶ SABINE LAROCHE, forties, a former pastry chef turned safecracker, wears a hairnet and a white lab coat.
6 A She kneels at the keypad with a screwdriver in her teeth.
7 A ¶ MOSES TREVELYAN, fifties, a tall, stooped man who once forged museum labels, stands lookout in rubber boots.
8 A He holds a flashlight and a wheel of Gruyere like a baby.
9 A ¶ GINO BELLAMY, thirties, a nervous driver in a hooded sweatshirt, paces behind them, whispering into a walkie-talkie.
10 D GINO: Sabine, the guard changes at three. It's two fifty.
11 D SABINE (through the screwdriver): I know what time it is.
12 D MOSES: Please do not breathe on the Gruyere. It's eighteen months old and extremely sensitive.
13 D GINO: Moses, you are literally holding it.
14 D MOSES: That's different. I love it.
15 A ¶ Sabine pulls the keypad cover off.
* 16 A Wires spill out like a nest.
17 A She selects a pair and strips them with her teeth.
18 D SABINE: Quiet. Both of you.
19 D GINO: What if it trips an alarm?
20 D MOSES: It will not trip an alarm.
21 D SABINE: It might trip an alarm.
22 D MOSES: It will not, Sabine, I studied the schematic.
23 D GINO: You studied the schematic of a cheese cave?
24 D MOSES: It's a very serious cheese cave.
25 A ¶ She twists the wires together.
* 26 A A green light blinks.
* 27 A The door clicks.
28 D GINO: Oh my God.
29 D SABINE: Don't say it.
30 D GINO: It opened.
31 D MOSES: Do not say anything!
* 32 A ¶ The door swings wide.
* 33 A Beyond it, a steel vault shaped like a giant wheel of cheese, the combination dial glittering.
34 D MOSES [CONT'D] (reverent): There she is.
35 A ¶ Gino presses his walkie to his ear and his face drains.
36 D GINO: Guys. Guys, guard's early. He's coming down the tunnel.
37 D SABINE: How early?
38 D GINO: Now.
* 39 A ¶ Footsteps echo.
40 A A distant voice, bored, singing a folk song.
41 A Sabine rises, wipes her hands.
42 A Moses sets down the Gruyere and takes up a ladle from a bucket.
43 A Gino drops behind a rack.
44 D MOSES: He'll check the door.
45 D SABINE: Then we close the door.
46 A ¶ She yanks it shut.
* 47 A The latch snaps and the keypad goes dark, plunging the cavern into blackness except for Moses's flashlight beam shaking on the wall.
48 D GINO (whisper): Is it locked?
49 D MOSES (whisper): From which side?
50 A ¶ Sabine stares at the door, at the dead keypad.
51 D SABINE: Oh no.
52 D GINO: What oh no? What "oh no?"
53 D SABINE: I locked us inside.
54 A ¶ The singing stops.
* 55 A A flashlight beam sweeps along the racks toward them.
56 D GINO: I'll talk to him.
57 D MOSES: You'll do no such thing.
58 D SABINE: Both of you, shut up, I'm thinking.
59 D GINO: We're thieves in a cheese cave.
60 D MOSES: We are gourmets in a cheese cave.
61 D SABINE: Quiet!
62 A ¶ She snatches the screwdriver, jams it in the latch, twists.
* 63 A Metal shrieks.
* 64 A The door pops open an inch, then two, then flies wide.
* 65 A ¶ The guard's beam hits the vault.
66 A ¶ Sabine slams the door shut again from the inside and holds it, her whole body against the steel.
67 A Moses and Gino pile in beside her.
68 A The three of them pant in the dark.
69 D GUARD [O.S.] (muffled, cheerful): Evening, folks!
70 A ¶ Nobody breathes.
71 D MOSES (a whisper): He's gone past.
72 D GINO: How do you know?
73 D MOSES: He's still singing.
74 A ¶ Faintly, the song resumes and fades down the tunnel.
75 A Sabine slides to the floor.
76 A Gino laughs, high and helpless.
77 A Moses retrieves the Gruyere and kisses it.
78 D SABINE: The vault. Now. Before I lose my mind.
79 A ¶ She turns the dial.
* 80 A Click, click, click.
* 81 A The great wheel door groans open, and inside, stacked to the ceiling, are not diamonds, not bearer bonds, but ten thousand more wheels of cheese.
82 D GINO (flat): It's cheese.
83 D MOSES (gently): It's the cheese.
84 D SABINE (a long beat): We were robbing the wrong cave.

### SCENE s00327 | INT. LAMPLIGHTERS' GUILD HALL - LONDON - 1872 - EVENING
Detected names (may be incomplete or contain aliases): ELIAS THORNBY, AGATHA PRUDHOE, CONSTABLE JOLLIFFE, QUILL, TOM
* 1 A ¶ A long timber room hung with tin ladders and coiled wicks.
* 2 A Rain on the high windows.
* 3 A Five brass lamps burn along a table.
4 A ¶ ELIAS THORNBY, fifties, guild master, sits at the head in a velvet waistcoat gone bald at the elbows.
5 A AGATHA PRUDHOE, forties, a widow with a ledger, sits at his right.
6 A CONSTABLE JOLLIFFE, thirties, damp and unhappy, stands at the door.
7 A MRS. QUILL, sixties, the hall's cook, brings a tray.
8 A TOM, twelve, the lamplighter's boy, sits cross-legged by the stove.
9 D ELIAS (to the room): We are short eleven lamps on Gresham Row.
10 D AGATHA: Twelve. I counted twice.
11 D ELIAS: Then twelve.
12 D JOLLIFFE: Sir, someone's cut them clean. Not smashed. Cut.
13 D AGATHA (to Elias): Fuel was drawn on Thursday for sixty lamps. Fifty-eight were lit.
14 D ELIAS: Agatha, not now.
15 A ¶ Mrs. Quill sets down the tray.
16 A She pours tea for Agatha first, then Elias, then nobody.
17 D MRS. QUILL (muttering): Always the sums. Never the stairs.
18 D TOM: Mrs. Quill, what stairs?
19 D MRS. QUILL: Hush, boy.
20 D JOLLIFFE: If this guild cannot keep the street lit, the parish will contract with the gas company.
21 D ELIAS (to himself): Gas. The smell of it.
22 D AGATHA: Then someone is paid to see the street dark.
23 D ELIAS: Constable, it was a rough night. You may go.
24 D JOLLIFFE: I'd rather wait, sir.
25 A ¶ Elias stirs his tea.
26 A Agatha turns a page.
27 A Tom watches the stove.
* 28 A The rain does not let up.

### SCENE s00328 | INT. FERRY TERMINAL LOST PROPERTY OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND IKEDA, AUGUSTIN BEAUMONT, LUCINDA MORROW, KWAME ASANTE, OFFICER PERRY
* 1 A ¶ Shelves of umbrellas.
* 2 A A cage of single gloves.
* 3 A Fluorescent hum.
4 A ¶ DET. ROSALIND IKEDA leans on the counter.
5 A AUGUSTIN BEAUMONT, the clerk, hides behind a ledger.
6 A LUCINDA MORROW sits on a bench with a violin case on her knees.
7 A KWAME ASANTE paces.
8 A OFFICER PERRY blocks the door.
9 D IKEDA: Describe the case again.
10 D LUCINDA: Black. Brass clasps. A sticker of a lighthouse on the lid.
11 D AUGUSTIN: We have forty-one black cases. Nine with brass.
12 D KWAME: That one's hers. That one in her lap.
13 D LUCINDA: This one is mine. Yours is somewhere else.
14 D IKEDA: Open it.
15 D LUCINDA: It's a violin.
16 D IKEDA: Then it won't mind.
17 D AUGUSTIN: Detective, there are procedures.
18 D IKEDA: Mr. Beaumont, you logged this case at nine-ten. Two hours before the ferry docked.
19 D AUGUSTIN: I may have mistaken the time.
20 D KWAME: He mistakes everything.
21 D LUCINDA: Kwame, sit down.
22 D KWAME: I've been sitting since Tuesday.
23 D IKEDA: Officer Perry, the door.
24 D PERRY: Locked, ma'am.
25 D IKEDA: Miss Morrow. The clasps.
26 D LUCINDA: No.
27 D IKEDA: Then I'll count to three.
28 D AUGUSTIN: Please don't.
29 D KWAME: One.

### SCENE s00329 | INT. DATA CENTER - COLD AISLE - NIGHT
Detected names (may be incomplete or contain aliases): NADIA VOSKUIJLEN, ELIJAH CROSS, TEODORA MIHAI, HARLAN
* 1 A ¶ Rows of black server racks stretching into cold blue light.
* 2 A Fans roar.
* 3 A Cables hang like vines.
4 A ¶ NADIA VOSKUIJLEN, thirties, a network engineer in a parka over her work shirt, crouches at an open rack, a laptop balanced on her knee.
5 A ¶ ELIJAH CROSS, forties, her manager, stands behind her in a thin suit that is too cold for the room.
6 A ¶ TEODORA MIHAI, twenties, a junior tech, stands at the aisle's end holding a flashlight and a clipboard.
7 A ¶ HARLAN, fifties, a security guard, appears at the far door, backlit, one hand on his belt.
8 D NADIA: Someone has been copying the customer database to an outside address. Every night at 2:13.
9 D ELIJAH: Nadia, we should discuss this upstairs.
10 D NADIA: It's ten past two. It's about to happen again.
11 D TEODORA: The traffic spike is already starting.
12 D ELIJAH: Delete the log. We'll find who it is in the morning.
13 D NADIA: Why would I delete the log?
14 D ELIJAH: Because I'm asking.
15 A ¶ Harlan steps into the aisle.
* 16 A His boots echo on the steel floor.
17 D HARLAN: Is there a problem?
18 D NADIA: Mr. Cross is asking me to delete evidence.
19 D HARLAN: Mr. Cross?
20 D ELIJAH: Harlan, this is an internal matter.
21 D HARLAN: I would need that in writing.
22 A ¶ Elijah reaches into his jacket.
23 A Everyone freezes.
24 A He pulls out a phone and holds it up, shaking.
25 D ELIJAH: I'm making a call.
26 D TEODORA: It's two-thirteen.
* 27 A ¶ The server fans spin down.
* 28 A The lights flicker.
* 29 A Then a long beep.
30 D NADIA: Transfer complete.
31 D ELIJAH (sagging): Then it's done.
32 D HARLAN: It's done, Mr. Cross. And now we know where it went.
33 A ¶ Nadia turns the laptop around.
* 34 A The destination is Elijah's own home address.
35 D ELIJAH: I can explain.
36 D HARLAN: You'll have all night.

### SCENE s00330 | INT. BOWLING ALLEY OFFICE - DAY
Detected names (may be incomplete or contain aliases): BRANDYN HOLLIS, CHIDI OBI, MARGUERITE FENN, DEV PATEL-ROSS, UNDERWOOD
* 1 A ¶ An open-plan office built into a defunct bowling alley.
* 2 A Desks sit on the lanes.
* 3 A Monitors glow where the pins used to stand.
* 4 A A scoreboard overhead reads "SYNERGY: 0."
5 A ¶ BRANDYN HOLLIS, forties, a regional vice president in a vest with a lanyard, stands at lane three, clapping.
6 A ¶ CHIDI OBI, thirties, an analyst with tired eyes, sits at lane four.
7 A ¶ MARGUERITE FENN, fifties, head of compliance, in a cardigan, clutches a binder.
8 A ¶ DEV PATEL-ROSS, twenties, an intern, kneels on lane two plugging in a power strip.
9 A ¶ UNDERWOOD, sixties, the janitor, mops the gutter without comment.
10 D BRANDYN: Team! We are pivoting to a bowling-first culture.
11 D CHIDI: Pivot to what? We have no pins.
12 D BRANDYN: Exactly. Pins are legacy.
13 D MARGUERITE: Brandyn, the fire marshal says the lanes are not rated for desks.
14 D BRANDYN: Marguerite, the lanes are a metaphor.
15 D DEV (from the floor): There's a ball in my power strip.
16 D CHIDI: The ball returns are still live.
17 D BRANDYN: Great. Let's leverage the returns. Everyone grab a ball and a quarterly goal.
18 D MARGUERITE: That is a safety violation.
19 D BRANDYN: It is a culture violation not to.
20 D CHIDI: Brandyn, I haven't been paid since the third frame.
21 D BRANDYN: Strike, Chidi. We're all in a gutter right now.
* 22 A ¶ A ball rolls down lane two and takes out Dev's power strip.
* 23 A The monitors go dark.
* 24 A The scoreboard flickers: "SYNERGY: 1."
25 D UNDERWOOD (not looking up): Told you.

### SCENE s00331 | INT. STRANDED BUS ON FLOODED CAUSEWAY - NIGHT
Detected names (may be incomplete or contain aliases): GWEN MARSDEN, HIRO YAMAMOTO, OLUWASEUN, AUNTIE LUPE, BARNABY
* 1 A ¶ A mid-size passenger bus, headlights still burning, surrounded by black water that laps at the doors.
* 2 A The aisle is wet to the ankle.
* 3 A Rain drums on the roof.
4 A ¶ GWEN MARSDEN, fifties, the driver, grips the wheel though the engine is dead.
5 A HIRO YAMAMOTO, forties, a salesman with a leather briefcase, stands in the aisle.
6 A OLUWASEUN, twenties, sits on the back bench with her knees drawn up.
7 A AUNTIE LUPE, seventies, wraps a shawl around a covered basket.
8 A BARNABY, ten, sits very still beside her.
9 D GWEN: Everybody stay on the seats. Above the water line.
10 D HIRO (to Gwen): How far is the next village?
11 D GWEN: Two miles.
12 D HIRO: In which direction?
13 D GWEN: Away from the water.
14 A ¶ Hiro lifts his briefcase to his chest.
15 A He sets it down.
16 A He lifts it again.
17 D AUNTIE LUPE (to Barnaby): Eat something, my darling.
18 D BARNABY: I'm not hungry.
19 D AUNTIE LUPE: Eat.
20 A ¶ Barnaby takes a roll from the basket and holds it in both hands without biting it.
21 A Oluwaseun shifts her feet up onto the seat.
22 D OLUWASEUN (to herself): Okay. Okay. Okay.
23 D HIRO: Did somebody say something?
24 D OLUWASEUN: No.
* 25 A ¶ The bus tilts a few degrees.
26 A Everyone grabs a seatback.
* 27 A A cold line of water slides along the floor.
28 D GWEN (to the bus): Nobody panic. Everybody move to the front.
29 A ¶ They move.
30 A Hiro hesitates, then offers Auntie Lupe his arm.
31 A She takes it without a word.
32 A Barnaby sets down the roll and picks up the basket.
33 D AUNTIE LUPE: Leave it, darling.
34 D BARNABY: It's heavy.
35 D AUNTIE LUPE: Then we carry it together.

### SCENE s00332 | INT. CLOCK TOWER MECHANISM ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE KOWALCZYK, REGGIE FAIRWEATHER
* 1 A ¶ Iron gears the size of cartwheels turn behind a dusty rail.
* 2 A Moonlight through the louvres.
3 A ¶ JUNE KOWALCZYK, thirties, a clockmaker in leather gloves, crouches by the main wheel with a lantern while REGGIE FAIRWEATHER, fifties, the town clerk, climbs the last rung of the ladder, wheezing, and drops a folded paper on the floor that June snatches before he can reach it, reads, crumples, and shoves into her pocket as Reggie lunges for her wrist.
4 D JUNE: Reggie, the hands stopped at 11:42 on the night your brother died.
5 D REGGIE: June, it's a clock.
6 D JUNE: Somebody held them there. With a pin through the escapement.
7 A ¶ Reggie backs toward the ladder, hand on the rail, one boot already finding the rung.
8 A June blocks the way, lantern raised, her shadow swelling across the gears.
9 D REGGIE: You'll fall.
10 D JUNE: Not me.
* 11 A ¶ The main wheel clunks.
* 12 A The room shudders.
13 A Both of them look up as the great bell above them begins, slowly, to ring.

### SCENE s00333 | INT. CAROUSEL WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): MINA, TEDDY, OSRIC, LOLA
* 1 A ¶ A cavernous barn of splintered painted horses, hanging by chains from the rafters, their glass eyes catching a single lantern.
* 2 A Sawdust drifts like snow.
3 A ¶ MINA, twenties, a documentary photographer, raises a camera.
4 A TEDDY, thirties, her guide, grips a crowbar.
5 A OSRIC, sixties, the caretaker, stands rigid in the doorway with a ring of keys.
6 A LOLA, ten, Osric's granddaughter, clutches a plush rabbit.
7 D MINA: Teddy, did you hear that?
8 D TEDDY: It's the wind.
9 D OSRIC: No wind in here.
10 D LOLA: Grandpa, the horses are looking at me.
11 D TEDDY: Lola, honey, they're wood.
12 D MINA: Teddy, look up.
13 D OSRIC: Lola, come here.
* 14 A ¶ A chain clinks.
* 15 A One painted horse swings, slow.
* 16 A Another turns its head.
17 D TEDDY: Mina, back up.
18 D MINA: I'm trying.
19 D LOLA: Grandpa!
* 20 A ¶ The lantern gutters.
* 21 A All the horses begin to descend at once on their chains, slamming into the floor, shrieking, wheels turning, the whole carousel lurching into motion in the dark.

### SCENE s00334 | INT. TAXIDERMY SHOP - BACK ROOM - DAY
Detected names (may be incomplete or contain aliases): CORNELIA BRIGHT, DESMOND ARCHULETA
* 1 A ¶ Glass eyes everywhere.
* 2 A A stuffed badger on the desk.
* 3 A A deposition table cleared between a moose head and a fox in mid-pounce.
* 4 A ¶ ATTY.
5 A CORNELIA BRIGHT, forties, in a grey suit, sits with a legal pad.
6 A DESMOND ARCHULETA, fifties, the shop owner, sits across from her in a smock, hands folded.
7 D CORNELIA: State your name for the record.
8 D DESMOND: Desmond Archuleta.
9 D CORNELIA: And you have owned this shop how long?
10 D DESMOND: Twenty-two years.
11 D CORNELIA: And in that time you've never kept a customer's property past the pickup date.
12 D DESMOND: Never.
13 D CORNELIA: Never once.
14 D DESMOND: Not once.
15 D CORNELIA: Mr. Archuleta, how many animals are in this room?
16 D DESMOND: I couldn't say. Thirty. Forty.
17 D CORNELIA: Would it surprise you to learn that forty-one are registered, and forty-two are present?
18 D DESMOND: Counting error.
19 D CORNELIA: Would it surprise you that the forty-second is a recently deceased Great Dane belonging to my client?
20 A ¶ Desmond's hands unfold.
21 A Cornelia's pen stops.
22 A They stare at each other.
* 23 A Behind Desmond, the badger on the desk seems to lean forward.
24 D DESMOND: I want a lawyer.
25 D CORNELIA: I am the lawyer.
26 A ¶ They both rise at once.
* 27 A The table scrapes.
* 28 A A glass eye rolls to the floor between them.

### SCENE s00335 | INT. ABANDONED CANNERY - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIE FENWICK, MAUDE, PERCIVAL, IGNATIUS, SISTER BERNADETTE, LEOPOLD
* 1 A ¶ A rusted office above the cannery floor, windows black, a lone lamp burning on a steel desk.
* 2 A Fish labels peel off the walls.
* 3 A Below, machinery drips.
4 A ¶ ROSALIE FENWICK, thirties, a historian with a field recorder, sits on the desk.
5 A MAUDE, sixties, the former forewoman, perches on a stool, arms crossed.
6 A PERCIVAL, forties, Rosalie's research assistant, hovers by the door.
7 A IGNATIUS, fifties, a priest in a heavy coat, stands at the window.
8 A SISTER BERNADETTE, seventies, clutches a rosary.
9 A LEOPOLD, thirties, the surveyor, kneels by a floor hatch with a torch.
10 D ROSALIE: Let's start with the night shift of 1961.
11 D MAUDE: We don't talk about it.
12 D PERCIVAL: Maude, please.
13 D MAUDE: I said we don't.
14 D IGNATIUS: Maude is right. Some nights are best left in the water.
15 A ¶ Leopold lifts the hatch.
* 16 A A cold wet breath rolls up from below.
17 D LEOPOLD: Something down here.
18 D SISTER BERNADETTE: Close it.
19 D ROSALIE: Leopold, what is it?
20 D LEOPOLD: A shoe. And a hand.
21 D PERCIVAL: A hand?
22 D LEOPOLD: Holding the shoe.
23 A ¶ Maude rises.
24 A Ignatius crosses himself.
25 A Rosalie turns her recorder to Leopold.
26 D MAUDE: He told them not to open the hatch.
27 D SISTER BERNADETTE: Who did?
28 D MAUDE: He did.
29 D IGNATIUS: She means Gideon.
30 D PERCIVAL: Who is Gideon?
31 A ¶ Nobody answers.
* 32 A Down the hatch, the hand twitches.
33 D LEOPOLD: It's moving.
* 34 A ¶ The lamp dims.
* 35 A Every door in the cannery slams at once.

### SCENE s00336 | INT. PLANETARIUM DOME - NIGHT
Detected names (may be incomplete or contain aliases): ZELDA, MOE, KIRSTEN, BAXTER, YUSUF, STRANGER, LUCIAN
* 1 A ¶ Stars wheel overhead on a painted ceiling.
* 2 A Reclining seats ring a projector like a metal spider.
3 A ¶ ZELDA, thirties, in a black bodysuit, clips a wire.
4 A MOE, fifties, her partner, kneels at the projector.
5 A KIRSTEN, forties, the planetarium director, bound to a seat with tape.
6 A BAXTER, twenties, a guard, lies unconscious.
7 A YUSUF, thirties, watches the door.
8 A ¶ A STRANGER, forties, in a long coat, steps out of the dark aisle.
9 A ¶ Zelda turns.
10 A Kirsten wriggles.
11 A Moe freezes.
12 A He raises a wrench.
13 A She lowers her wire cutters.
14 D STRANGER: Evening. I'm told the Orion diamond is on display tonight.
15 D ZELDA: It isn't.
16 D STRANGER: It's under the projector.
17 A ¶ Yusuf slides toward the stranger.
18 A He grabs his collar.
19 A The stranger doesn't flinch.
20 D STRANGER [CONT'D]: My name is Lucian. I'm the buyer.
21 D YUSUF: The buyer isn't due until Friday.
22 D LUCIAN: I'm early. She knows.
23 A ¶ He nods at Kirsten.
24 A She nods back.
25 A Zelda stares at her.
26 A She stares at Zelda.
27 D ZELDA: You sold us out.
28 D KIRSTEN: I sold you a ceiling, dear.
29 A ¶ Moe drops the wrench.
* 30 A The stars blink out.

### SCENE s00337 | INT. NIGHT FERRY GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE ARMITAGE, DOMINIC VARGA, CAPTAIN OYELARAN, DECKHAND SUNNY, HARBORMASTER
* 1 A ¶ A cramped steel galley, steam rising from a stockpot, a single porthole showing black water and distant harbor lights.
2 A ¶ CELESTE ARMITAGE, thirties, a pastry chef in a stained white jacket, leans against the counter, arms folded.
3 A DOMINIC VARGA, thirties, a passenger in a soaked grey coat, stands in the doorway holding a violin case.
4 A CAPTAIN OYELARAN, sixties, silver-bearded, pours coffee into three mugs and hands one to Celeste, one to Dominic, and keeps one.
5 A DECKHAND SUNNY, twenties, wipes down the counter, glancing from Celeste to Dominic and back with obvious amusement.
6 D HARBORMASTER [O.S.] (over radio): Ferry Marisol, this is Harbor. Dock three is clear. Over.
7 D CAPTAIN OYELARAN (into radio): Harbor, Marisol. Ten minutes out. Over.
8 A ¶ Dominic sets down the violin case.
9 A Celeste picks up a whisk and puts it down.
10 A He crosses the galley, stops a foot from her, and neither of them says anything while the captain sips and Sunny bites his lip.
11 D CELESTE: You said you'd never take this boat again.
12 D DOMINIC: I said a lot of things in that rain.
13 D HARBORMASTER [O.S.] (over radio): Marisol, confirm passenger count. Over.
14 D CAPTAIN OYELARAN (into radio): Harbor, Marisol. Count is... flexible. Over.
15 A ¶ Celeste laughs before she can stop it.
16 A Dominic smiles.
17 A Sunny drops the rag.
18 D DOMINIC: I wrote you forty letters.
19 D CELESTE: I read thirty-nine.
20 D DOMINIC: Which one did you skip?
21 D CELESTE: The one where you said goodbye.
* 22 A ¶ The ferry horn blares.
23 A Dominic takes her hand, and she lets him, and the captain turns his back to study the porthole with enormous interest, Sunny scrambling after him with the mugs.

### SCENE s00338 | INT. FLOODED GRAIN SILO - DAY
Detected names (may be incomplete or contain aliases): MAREN VOSS, OTIENO
* 1 A ¶ Brown water laps at the third rung of the iron ladder.
* 2 A Light falls in thick shafts through holes in the tin roof.
* 3 A The walls sweat.
* 4 A A rotten sweetness hangs in the air, old wheat gone to mold.
5 A ¶ MAREN VOSS, forties, a farmer in a soaked canvas jacket, sits on a ledge halfway up the wall, one arm hooked through the ladder, watching the water.
6 A OTIENO, thirties, her neighbor, a mechanic with a split lip, stands waist-deep below, feeling along the wall with both hands, working his way around the curve of the silo until he reaches a bricked-up door, presses his ear to it, and strikes it three times with a bolt while she watches without a word.
7 D MAREN (to herself): Two days. Two days and the river took the whole valley.
8 D OTIENO (to Maren): Door's solid. Mortar, not wood.
9 D MAREN: Somebody bricked it up.
10 D OTIENO: Somebody who didn't want it opened. Or didn't want something in here to get out.
11 A ¶ She climbs down a rung.
12 A The water touches her boot.
13 A She pulls the boot back up, then plants it again, then looks up at the roof where a pigeon has settled on a strut.
14 D MAREN (to the silo): Anybody up there? Anybody hear us?
* 15 A ¶ Nothing but drip.
16 A Otieno rests his forehead on the bricks.
17 A She wades over to him and presses her palm flat to the wall beside his, and together they listen.
18 D OTIENO: It's quiet.
19 D MAREN: It's never quiet in a silo. There's always the grain settling.
20 D OTIENO: No grain left to settle.
21 A ¶ She takes the bolt from his hand and strikes the wall herself, twice, then once, then twice.
* 22 A A long moment passes.
* 23 A From beyond the bricks, faint as a heartbeat, someone strikes back.

### SCENE s00339 | INT. ROLLER RINK - FAMILY REUNION - DAY
Detected names (may be incomplete or contain aliases): PEARL WASHINGTON, UNCLE ROY, TAMIKA, JUNIOR, LILIANA
* 1 A ¶ A wood-floored rink under a mirror ball.
* 2 A Banner reads "WASHINGTON FAMILY 40TH."
* 3 A Folding tables of casserole line one wall.
* 4 A Disco hits thump faintly.
5 A ¶ PEARL WASHINGTON, eighties, in a purple tracksuit, sits on a throne of folding chairs.
6 A UNCLE ROY, sixties, her son, rolls by on rented skates, arms out.
7 A TAMIKA, thirties, Roy's niece, balances a paper plate in one hand and her phone in the other.
8 A JUNIOR, fifteen, hangs on the rail, hoodie up.
9 A LILIANA, six, Tamika's daughter, sits cross-legged on the floor lacing her skates wrong.
10 D PEARL: Roy! Skate like you got sense!
11 D UNCLE ROY: I'm skating, Ma!
12 A ¶ He is not.
13 A He wobbles.
14 A He grabs the rail beside Junior and holds on, grinning.
15 D TAMIKA: Junior, take your hood off.
16 D JUNIOR: It's fine.
17 D TAMIKA: It's your grandmother's birthday.
18 A ¶ Junior pushes the hood back an inch.
19 A Tamika sets her plate in front of Pearl, who pushes it back toward Tamika.
20 D PEARL: That's not my food.
21 D TAMIKA: It's your casserole.
22 D PEARL: Then why is it cold?
23 A ¶ Liliana tugs Tamika's sleeve.
24 D LILIANA: Mama, my skates are on backwards.
25 D TAMIKA: They're on your wrong feet, baby.
26 A ¶ She kneels.
27 A Roy rolls up and lowers himself beside Pearl, and Pearl, without a word, pats his knee twice.
28 A Junior watches this from the rail and lets the hood fall all the way down.

### SCENE s00340 | INT. PAWNSHOP INSIDE DEFUNCT AQUARIUM - NIGHT
Detected names (may be incomplete or contain aliases): SAL, FRANCESCA OYELOWO
* 1 A ¶ A pawnshop built into the old shark tank.
* 2 A The glass walls are cracked and green with algae.
* 3 A Guitars hang where the hammerheads once circled.
* 4 A A neon sign buzzes: "CASH FOR ANYTHING."
5 A ¶ SAL "THE EEL" DiMARCO, sixties, slick-haired, in a shiny shirt open to the chest, sits behind a counter counting bills.
6 A His smile never reaches his eyes.
7 A ¶ FRANCESCA OYELOWO, thirties, a detective in a navy raincoat, comes in shaking water off her umbrella.
8 A She looks around the tank the way a diver might.
9 D SAL: We're closed.
10 D FRANCESCA: The door was open.
11 D SAL: Doors do that.
12 A ¶ She walks the length of the counter.
13 A She picks up a ukulele, plucks one string, puts it down.
14 D FRANCESCA: Nice acoustics.
15 D SAL: Used to be a tank for sharks. Now it's a tank for sharks.
16 D FRANCESCA (to herself): Cute.
17 D SAL (to the room, though nobody else is there): You hear that, boys? The lady thinks I'm cute.
18 D FRANCESCA: Mr. DiMarco, a necklace went missing from the Hartwell estate on Tuesday. Emerald, platinum chain. It turned up on your ledger on Wednesday.
19 D SAL: Ledger says a lot of things.
20 D FRANCESCA: It says you paid four hundred dollars.
21 D SAL: Charity.
22 D FRANCESCA: It says you paid it to a boy named Teddy Hartwell. Age nine.
23 A ¶ Sal sets down the bills.
* 24 A The neon buzzes louder.
25 D SAL: Kids lie.
26 D FRANCESCA: Teddy was telling the truth. He wanted to buy his mother a birthday present. He sold her own necklace to get it.
27 D SAL: Then it's a sad story.
28 D FRANCESCA: It's a sad story with a felony in it.
29 A ¶ Sal slides one hand beneath the counter.
30 A Francesca's own hand goes to her coat.
31 D SAL: You're brave, coming in here alone.
32 D FRANCESCA: I'm not alone.
33 D SAL: Who's with you?
34 A ¶ She nods toward the cracked glass behind him.
* 35 A Through the algae, shapes move in the dark, a dozen uniforms.
36 D SAL [CONT'D] (a whisper, to himself): Eel's finally out of the water.

### SCENE s00341 | INT. BELL TOWER OBSERVATION POST - DAWN
Detected names (may be incomplete or contain aliases): MBEKI, ARNAUD, HOSSEINI, MAJOR TULLY
* 1 A ¶ A narrow stone chamber under the bells.
* 2 A Sandbags in the arched window.
* 3 A Mist below.
4 A ¶ SGT. MBEKI, forties, binoculars up, kneels at the window.
* 5 A PVT.
6 A ARNAUD, nineteen, clutches a rifle.
* 7 A CPL.
8 A HOSSEINI, thirties, sits against the wall working a field radio.
9 A They are silent.
10 A He adjusts the dial.
11 A He lowers the binoculars.
12 A Arnaud's knuckles go white.
13 D MAJOR TULLY [O.S.] (over radio): Bell Tower, this is Command. Status report. Over.
14 D MBEKI (whisper): Tell him nothing moves.
15 D HOSSEINI (into radio): Command, Bell Tower. Nothing moves. Over.
16 D MAJOR TULLY [O.S.] (over radio): Keep it that way. Over.
17 A ¶ Hosseini sets down the handset.
* 18 A Below, in the fog, something metal clinks.
19 A Mbeki holds up a flat hand.
20 A Arnaud's rifle trembles.
21 A Hosseini slides the radio away from the wall.
22 D ARNAUD (barely audible): Sergeant. It's coming from the church.
23 D MBEKI: It's the church that's ours.
* 24 A ¶ A single bell above them swings and sounds, once, deep and sudden.

### SCENE s00342 | EXT. BOCCE COURT UNDER HIGHWAY OVERPASS - DAY
Detected names (may be incomplete or contain aliases): NONNA FILOMENA, BIG WALT, DARIUS
* 1 A ¶ A strip of crushed oyster shell beneath concrete pillars.
* 2 A Traffic thunders overhead.
* 3 A Folding chairs line the court.
* 4 A A thermos of espresso sits on an overturned crate.
5 A ¶ NONNA FILOMENA, eighties, in a black dress and sensible shoes, squints at the pallino.
6 A BIG WALT, fifties, her opponent, a trucker in a leather vest, crouches with a ball cradled in his palm.
7 A DARIUS, fifteen, Walt's nephew, holds the measuring string and a notebook.
8 A ¶ She straightens, shifts her weight, and sends her ball down the shell with a sharp flick of the wrist while he lobs his in a high arc, and the two collide mid-court in a crack that scatters dust, and the pallino rolls under a chair where Darius scrambles after it on his knees.
9 D NONNA FILOMENA: That's mine.
10 D BIG WALT: That's a tie.
11 D DARIUS: It's closer to the chair.
12 D NONNA FILOMENA: Darius, measure!
13 D BIG WALT: Don't measure, Darius.
14 D DARIUS: I'm measuring.
15 D NONNA FILOMENA: Walt, you cheat.
16 D BIG WALT: Nonna, I've never cheated in my life.
17 D DARIUS: It's four inches.
18 D NONNA FILOMENA: Four inches for who?
19 D BIG WALT: For me, obviously.
20 D DARIUS: For her.
21 A ¶ Walt looks at Darius.
22 A Darius looks at Nonna.
23 A She lifts the thermos, takes one sip, and offers it to Walt.

### SCENE s00343 | INT. HALL OF MIRRORS - OFF-SEASON FAIRGROUND - NIGHT
Detected names (may be incomplete or contain aliases): CORINNE DUBOIS-ADEYEMI, ARTIE, PLUMLEY
* 1 A ¶ A canvas-walled maze of warped glass.
* 2 A Half the bulbs are dead.
* 3 A Dust coats every frame.
* 4 A The mirrors turn the dark into a hundred darks.
5 A ¶ CORINNE DUBOIS-ADEYEMI, thirties, a paranormal investigator in a leather jacket, walks slowly down a corridor with a handheld lamp, her reflection stretching tall, then squat, then tall again.
6 A ¶ ARTHUR "ARTIE" PLUMLEY, seventies, the fairground's last attendant, shuffles behind her in a patched coat, a ring of keys swinging at his hip.
7 D CORINNE: Artie, you said the last visitor left in 1987.
8 D ARTIE: So I did.
9 D CORINNE: Then who is the person in the third mirror?
10 D ARTIE: Miss Dubois-Adeyemi, I wouldn't look.
11 A ¶ She looks.
12 A Her reflection waves, but she hasn't moved.
13 D CORINNE: Artie.
14 D ARTIE: Yes, miss.
15 D CORINNE: Is that me?
16 D ARTIE: It was. For a while.
17 A ¶ She steps back.
18 A Her reflection steps forward.
* 19 A The glass ripples like water.
20 D CORINNE: Artie, open the door.
21 D ARTIE: There's no door, miss. There's only the way you came.
22 D CORINNE: Then take me back.
23 D ARTIE: I'd love to. But I've been looking for the way out since the summer of '87.
24 A ¶ She turns.
25 A Behind her, in every mirror, Artie stands younger, smiling, and a hundred reflections of her are walking away.
26 D CORINNE (a whisper): Artie, what did you do?
27 D ARTIE: I stayed too long, miss. Same as you.
* 28 A ¶ The lamp gutters out.

### SCENE s00344 | EXT. GLACIER CREVASSE - DAY
Detected names (may be incomplete or contain aliases): INGRID HALVORSEN, SOLANGE RENARD, DAG
* 1 A ¶ A blue slot in the ice, forty feet deep, walls ribbed like the inside of a throat.
* 2 A Wind whistles across the lip.
3 A ¶ INGRID HALVORSEN, forties, a mountaineer in a red jacket, dangles from a rope at the crevasse edge, kicking for purchase.
4 A SOLANGE RENARD, thirties, her partner, lies flat on the ice above, the rope wrapped around her gloves.
5 A DAG, fifties, their guide, plants an ice axe a few feet back and hauls on the line.
6 D SOLANGE: I've got you!
7 D INGRID: You don't!
8 D SOLANGE: She's slipping, Dag!
9 D DAG: Both of you, shut up and haul.
10 A ¶ Ingrid swings her boot at the wall.
* 11 A The ice bites.
12 A She hangs, breathing.
13 D INGRID: Tell me when she's got the axe in.
14 D DAG: Axe is in.
15 A ¶ Solange pulls.
16 A Ingrid rises one foot, then two.
17 A She grabs the lip with a gloved hand.
18 A She looks up at Solange.
19 A She looks at Dag.
20 D INGRID: Pull.
21 A ¶ They pull.
22 A She crawls onto the ice, gasping.
23 A Nobody speaks.
24 A Dag unwraps the rope from Solange's hands, finger by finger.

### SCENE s00345 | EXT. FLOODED RICE PADDY DIKE - DAWN
Detected names (may be incomplete or contain aliases): HARGREAVE, DOC, BIANCHI, LIN TRAN, OKAFOR
* 1 A ¶ A narrow earthen dike cuts across a drowned paddy, mist lying on the water like a sheet.
* 2 A A single banyan tree stands at the far end.
* 3 A Distant mortar thuds roll across the flat.
4 A ¶ LT. HARGREAVE, thirties, a young officer with a map case, crouches at the dike's edge.
5 A SGT. "DOC" BIANCHI, forties, a medic with a red-cross satchel, crouches beside him.
* 6 A PVT.
7 A LIN TRAN, twenty, a scout, lies prone in the mud at the lead.
* 8 A CPL.
9 A OKAFOR, thirties, the radioman, hunkers behind them with the set on his back, the antenna bending as he twists to look behind.
10 D HARGREAVE: Doc, keep it down.
11 D DOC: I am down, Lieutenant. I'm lying in a rice paddy.
12 D LIN: Contact, left.
13 A ¶ Hargreave lifts his head, Doc grabs the satchel, Okafor drops the handset, and all four of them flatten as a burst of fire stitches the water twenty feet away and sends up silver fans.
14 D HARGREAVE: Okafor, call it in.
15 D OKAFOR: Sir, I can't call it in. They're listening.
16 D HARGREAVE: Then talk in code.
17 D DOC: What code?
18 D OKAFOR: The cornflakes code.
19 D HARGREAVE: OKAFOR, do not say cornflakes.
20 D OKAFOR: Sir, cornflakes is the code!
21 D DOC: Gentlemen, I would like to survive the morning.
22 D LIN: They're moving.
23 A ¶ Hargreave raises a hand.
24 A Lin crawls back, drags the radio, thumbs the key twice.
* 25 A Static pops.
* 26 A A voice crackles, faint.
27 D HARGREAVE: Everyone on me. We go in three.
28 D DOC: Three what?
29 D HARGREAVE: Three, Doc.
30 A ¶ They rise as one, bent double, and splash down the dike toward the banyan with the fog swallowing them, all four of them running.

### SCENE s00346 | INT. NIGHT-MARKET FISH STALL WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): VIVIAN CHOW, MARCUS DELACROIX-OYELARAN, TWO-TONE EDDIE, HANNAH PRZYBYLSKI, ZHAO
* 1 A ¶ A steel freezer behind a night-market fish stall.
* 2 A Frost on every surface.
* 3 A Hanging carcasses of tuna sway slightly in the cold, their eyes sealed with ice.
* 4 A A single light panel hums.
* 5 A The air tastes of salt and metal.
6 A ¶ VIVIAN CHOW, fifties, the stall owner, in a white rubber apron and gloves, stands with her back to a rack of frozen squid.
7 A Her face betrays nothing.
8 A ¶ MARCUS DELACROIX-OYELARAN, forties, a loan collector in a long wool coat, stands directly in front of her, hands in his pockets.
9 A His breath smokes.
10 A ¶ TWO-TONE EDDIE, thirties, his driver, a heavy man with a bleached streak in his hair, leans against the door, arms folded.
11 A ¶ HANNAH PRZYBYLSKI, twenties, Vivian's niece, holds a tray of ice with trembling fingers, trying to look busy.
12 A ¶ OLD MR. ZHAO, seventies, sits on an upturned crate in the corner with a cigarette he has not lit, watching.
13 D MARCUS: Forty thousand, Mrs. Chow.
14 D VIVIAN: I know the number.
15 D MARCUS: The number has been the number for six months.
16 D VIVIAN: The number is not on my table.
17 A ¶ Eddie shifts his weight against the door.
* 18 A The metal creaks.
19 A Hannah's tray rattles.
20 A Zhao rolls the cigarette between his fingers.
21 D MARCUS: Then where is it?
22 D VIVIAN: In the fish.
23 D MARCUS (a thin smile): In the fish.
24 D VIVIAN: Every night, a little. In the bellies. You pay a man to carry it off the pier and nobody looks inside a tuna.
25 D MARCUS: Clever.
26 D VIVIAN: Thirty-one years in this trade.
27 A ¶ He steps closer.
28 A Hannah backs up a pace and the tray tilts.
* 29 A A few cubes slide off and shatter on the floor.
30 A Nobody turns.
31 D MARCUS: Show me.
32 A ¶ Vivian picks up a long steel knife from the rack.
33 A Eddie straightens.
34 A Zhao lights his cigarette at last, the flame small and orange in all that white.
35 D VIVIAN: Which one would you like?
36 D MARCUS: Surprise me.
37 A ¶ She walks along the line of tuna, touches one with the flat of her blade, then another.
38 A She stops at the last.
39 A She makes one long cut.
* 40 A Something falls out onto the ice, wrapped in oilcloth.
41 D HANNAH (a whisper): Auntie.
42 D VIVIAN: Hold the tray steady, child.
43 A ¶ Marcus crouches, unwraps the oilcloth with two fingers.
* 44 A Inside is a thick bundle of cash and a small black notebook.
45 A He flips the notebook open.
46 A He reads a line.
47 A He reads another.
48 A His jaw tightens.
49 D MARCUS: This is not my money.
50 D VIVIAN: No.
51 D MARCUS: This is a list.
52 D VIVIAN: It is a list of every man your boss pays to look the other way. The names. The dates. Every Tuesday.
53 A ¶ Eddie takes his hand off the door.
54 D EDDIE: Marcus.
55 D MARCUS: Not now.
56 D EDDIE: Marcus, that's my cousin on page two.
57 D MARCUS: I said not now.
58 D ZHAO (rough, quiet): The market is closing. Everybody leave.
59 A ¶ Nobody moves.
* 60 A The tuna sway.
* 61 A The light hums.
62 A Vivian wipes her blade clean on her apron, once, twice, and slides it back into the rack.
63 D VIVIAN: You may keep the money. The book stays with me.
64 D MARCUS: And if I refuse?
65 D VIVIAN: Then you will tell your boss you walked into a freezer with a list of his friends and walked out without it.
66 A ¶ Marcus closes the notebook.
67 A He holds it a long moment.
68 A He lays it back on the ice, carefully, as if it might wake.
69 D MARCUS: Eddie, the door.
70 A ¶ Eddie opens it.
* 71 A Warm night air rolls in, loud with frying oil and distant music.
72 A Marcus pockets the cash and goes out without looking back.
73 A Eddie follows.
* 74 A ¶ The door swings shut.
75 A Hannah lets the tray fall.
76 D HANNAH: Auntie, you were so calm.
77 D VIVIAN: I was so cold.
78 A ¶ Zhao exhales a long plume of smoke.
79 A Vivian picks up the notebook and tucks it in her apron pocket.

### SCENE s00347 | INT. GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): CALEB WRIGHT, AMARA OKORO, DEACON PRICE, LIV HAGEN, PEPPER NAKAMURA
* 1 A ¶ A concrete tower, nine stories tall, hollow as a throat.
* 2 A A rusted catwalk spirals up the inside wall.
* 3 A Chutes hang like dead tongues.
* 4 A Wind through broken louvres makes a sound like breathing.
5 A ¶ CALEB WRIGHT, thirties, a tow-truck driver, leads with a flashlight.
6 A AMARA OKORO, thirties, his girlfriend, follows with a phone.
7 A DEACON PRICE, sixties, a retired farmhand, carries a lantern.
8 A LIV HAGEN, twenties, a student, clutches a camera.
9 A PEPPER NAKAMURA, forties, a county sheriff's deputy, brings up the rear with a hand on her holster.
10 D CALEB: Stay on the catwalk.
11 D AMARA: It's moving.
12 D DEACON: That's just the wind, son.
13 D LIV: Wind doesn't whisper.
14 D PEPPER: Everybody quiet.
15 A ¶ They stop.
* 16 A Something below clatters.
* 17 A Grain trickles from a chute and hisses across the floor though the silo has been empty for twenty years.
18 D AMARA: Caleb.
19 D CALEB: I see it.
20 D DEACON: Back up, all of you.
21 D LIV: Did somebody say my name?
22 D PEPPER: Nobody said your name.
23 D LIV: Somebody did.
24 A ¶ Deacon holds up the lantern.
* 25 A The flame leans toward the dark at the bottom of the tower.
26 A Caleb sweeps his beam across the floor.
* 27 A Piles of grain stir like sleepers.
28 D AMARA: It's pulling the grain.
29 D CALEB: Pulling it where?
30 D DEACON: Toward the hatch.
31 D PEPPER: What hatch?
32 D DEACON: The one under the scale house.
33 A ¶ They all look.
* 34 A A black square gapes in the concrete, ringed with old stains.
* 35 A A cold breath rises.
36 D LIV: Deputy, shouldn't you call somebody?
37 D PEPPER: No signal.
38 D AMARA: Mine neither.
39 D CALEB: Then we leave. Now.
40 A ¶ He turns and starts up the catwalk.
41 A The others follow.
* 42 A Behind them, the grain heaves up in a wave and breaks against the wall.
43 D DEACON: Run.
44 A ¶ They scramble up the spiral, boots ringing on the iron, the catwalk shaking.
45 A Liv drops her camera.
46 A Amara grabs her sleeve.
47 A Pepper draws and fires once into the dark, the shot huge, and nothing answers.
48 D CALEB: Keep climbing!
* 49 A ¶ The door at the top is chained.
50 A He hits it with his shoulder.
* 51 A It does not give.
52 A Pepper puts her pistol against the lock and fires.
* 53 A The chain falls.
* 54 A The door bursts open on a starry night.
55 A ¶ They pour out onto the roof.
56 A Deacon slams the door and braces his back against it.
57 D DEACON: Is everyone here?
58 D LIV: Five.
59 D AMARA: Four. Where's Pepper?
60 A ¶ They turn.
* 61 A The door buckles from below, once, twice.
* 62 A Something presses a hand against the inside of the steel.
* 63 A The metal bulges in the shape of fingers.
64 D PEPPER [O.S.] (muffled, calm): Don't open it.
65 D AMARA: Pepper!
66 D PEPPER [O.S.]: Don't open it. I'm not the one knocking.

### SCENE s00348 | INT. PARKING GARAGE TICKET BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): OWEN BRZEZINSKI, WOMAN, MAN
* 1 A ¶ A glass cubicle at the exit of a nearly empty garage.
* 2 A Fluorescent hum.
* 3 A The barrier arm hangs half lowered.
4 A ¶ OWEN BRZEZINSKI, fifties, the attendant, sits behind the glass with a crossword.
5 A A hooded WOMAN, thirties, stands at the booth window.
6 A A tall MAN, forties, waits behind her in a long coat, leaning on the pillar.
7 A ¶ The woman slides a ticket under the glass.
8 A Owen reads the stamp and frowns.
9 D OWEN: This ticket is from 1998.
10 D WOMAN: I know.
11 D OWEN: That's twenty-six years. The fee is, uh, nine thousand dollars.
12 D WOMAN: I'll pay in cash.
13 A ¶ She opens her bag.
14 A The man steps closer.
15 A Owen's hand slides toward a button under the counter.
16 D MAN: Don't.
17 D OWEN: Sir, I'm just the attendant.
18 D WOMAN: He's not talking to you.
19 A ¶ She pulls out not money but a small silver key and presses it to the glass.
20 A Owen reads the number etched on it.
21 A His face drains.
22 D OWEN: Where did you get that?
23 D WOMAN: From the car you parked here that night.
24 A ¶ The man lunges for the booth door.
25 A Owen hits the button.
* 26 A An alarm screams.
27 A The woman and the man collide against the glass, shoving, grappling for the key, and both crash into the barrier arm, which snaps.
28 D OWEN (into phone): Police! Parking Garage C!
* 29 A ¶ The key skids across the concrete.
30 A Owen vaults the counter, scoops it up, and holds it high.
31 A The man and the woman freeze, breathing hard.
* 32 A ¶ Sirens approach, faint, then not so faint.
33 D MAN (a whisper): Give it to me.
34 D OWEN: No.
35 D WOMAN: Give it to me, Owen.
36 D OWEN: How do you know my name?
37 A ¶ She pulls back her hood.
38 A A face he hasn't seen in twenty-six years.
39 D OWEN [CONT'D] (barely audible): Margaret.

### SCENE s00349 | INT. PIANO RESTORATION WORKSHOP - DAY
Detected names (may be incomplete or contain aliases): NOELLE FAIRCHILD, DELPHINE ARCHAMBAULT, LEO FINCH
* 1 A ¶ A high-ceilinged loft with north light.
* 2 A Disemboweled pianos stand open on every side, their strings like harps, their hammers laid out on felt cloths in long neat rows.
* 3 A Sawdust and varnish and old ivory.
4 A ¶ NOELLE FAIRCHILD, fifties, the restorer, in a leather apron and reading glasses pushed up into grey curls, bends over a half-dismantled Steinway, a tuning lever in her fist.
5 A ¶ DELPHINE ARCHAMBAULT, thirties, her apprentice, stands across the keybed holding a cloth, the curve of her jaw set hard.
6 A ¶ LEO FINCH, sixties, the piano's owner, in a rumpled tweed jacket, sits on a bench by the window watching them both, a cane across his knees.
7 D NOELLE: Delphine, the damper felt.
8 D DELPHINE: Which side?
9 D NOELLE: The left. The one that's flat.
10 A ¶ Delphine hands her the felt.
11 A She does not let go at once.
12 A Noelle gives it one sharp tug, and Delphine lets go, and neither looks at the other, and Leo studies the dust in the light.
13 D LEO: You two have been at this since September.
14 D NOELLE: Fourteen weeks.
15 D DELPHINE: Fifteen.
16 D LEO: It was my wife's piano. She played it every morning for forty years.
17 D NOELLE: I know.
18 D LEO: Delphine knows too. She came to the funeral.
19 D DELPHINE: I did.
20 A ¶ Noelle sets down the lever.
21 A She straightens slowly, one hand on the small of her back, and looks at Delphine for the first time in the scene.
22 A Delphine meets her gaze and does not blink.
23 D NOELLE: She wanted the middle C re-voiced.
24 D LEO: Who did?
25 D NOELLE: She did. Your wife.
26 D DELPHINE: She told me. She told me last spring, the day I started.
27 D NOELLE: She told you.
28 D DELPHINE: She didn't want to hurt you.
29 A ¶ Leo gets up.
* 30 A The cane rattles on the floor.
31 A He crosses to the keyboard and presses middle C. A flat, dull note.
32 D LEO: Hurt me how?
33 D DELPHINE: She said it had been out of tune for years and she played it anyway because you loved it.
34 A ¶ Leo presses it again, harder.
* 35 A The note thuds and dies.
36 A He keeps his finger on the key.
37 A His shoulders bend.
38 D NOELLE: Leo.
39 D LEO: She never said.
40 D NOELLE: She never would.
41 A ¶ He lifts his hand.
42 A Delphine steps forward as if to touch his arm and stops.
43 A Noelle takes up the tuning lever and sets it against the pin, and nods once at Delphine, and Delphine nods back, and together they begin, slowly, to bring the note home.

### SCENE s00350 | INT. COLLAPSED MINE ELEVATOR CAGE - NIGHT
Detected names (may be incomplete or contain aliases): DEZ, HOLLOWAY, ARCHIE PENHALIGON
* 1 A ¶ A steel cage wedged in a vertical shaft, tilted twenty degrees, hanging by a single frayed cable.
* 2 A Pebbles tick down from above.
* 3 A A dim headlamp illuminates two men and a bucket of water.
4 A ¶ DESMOND "DEZ" HOLLOWAY, forties, a foreman with a broken arm in a makeshift sling, sits against the bars.
5 A ARCHIE PENHALIGON, twenties, a fresh-faced miner with a bleeding scalp, crouches on the opposite side, rope looped round his wrist.
6 D DEZ: Archie, kid, how's your head?
7 D ARCHIE: It's fine, Dez.
8 D DEZ: It's not fine. I can see it from here.
9 D ARCHIE: Then don't look.
10 A ¶ Dez shifts.
* 11 A The cage groans.
* 12 A The cable above pings like a plucked string.
13 A Both men go perfectly still.
14 D DEZ: Don't breathe.
15 D ARCHIE: I'm not breathing.
16 D DEZ: Good man.
17 A ¶ They hold.
* 18 A The cage settles.
19 A Dez lets out a ragged breath.
20 D DEZ [CONT'D]: Okay. Okay. We're okay.
21 D ARCHIE: Dez, how long have we been down here?
22 D DEZ: Nine hours.
23 D ARCHIE: They'd have come by now.
24 D DEZ: They'll come.
25 D ARCHIE: Dez. Nobody's coming.
26 A ¶ Dez does not answer.
27 A He looks at his arm.
28 A He looks at the water bucket.
29 A He looks at Archie.
30 D DEZ: Archie, you're the lightest. If you climb the cable, you can reach the ladder.
31 D ARCHIE: Climb it?
32 D DEZ: It's twenty feet. You've done worse.
33 D ARCHIE: I've never done worse.
34 D DEZ: Archie.
35 D ARCHIE: He'll cut me loose, Dez. The cable. It won't take two.
36 D DEZ: Then it won't take one either. It'll take whatever it takes.
37 A ¶ Archie loops the rope around his waist.
38 A He tests the knot.
39 A His hands shake.
40 D ARCHIE: Hold the rope.
41 D DEZ: I've got you.
42 A ¶ He rises.
43 A Dez wraps the rope around his good arm.
44 A Archie reaches for the cable, grips it, lifts one boot.
* 45 A The cage swings.
46 D DEZ [CONT'D]: Easy! Easy, kid!
47 D ARCHIE: I'm easy!
48 A ¶ He climbs.
49 A Three feet.
50 A Five.
* 51 A The cable twangs.
* 52 A A strand parts, then another, curling like wire hair.
53 A Dez cries out.
54 A Archie stops.
55 D ARCHIE [CONT'D]: Dez, it's going!
56 D DEZ: Keep climbing!
57 D ARCHIE: It's going, Dez!
58 D DEZ: Do not stop, Archie! Do not stop!
59 A ¶ Archie lunges.
60 A His fingers catch a rung.
* 61 A The cage drops six inches with a scream of metal.
62 A Dez is flung against the bars.
63 A The rope snaps taut on his arm and he roars through his teeth.
64 D DEZ [CONT'D]: Go! Go!
65 A ¶ Archie pulls himself onto the ladder.
66 A He turns, hanging there, breathing like a bellows, and stares down at Dez.
67 D ARCHIE: I'm on, Dez. I'm on!
68 D DEZ (weak laugh): Of course you are.
* 69 A ¶ The cable parts with a crack like a gunshot.
* 70 A The cage falls away into the dark and its crash echoes up the shaft, long after it has gone.
71 D ARCHIE (whisper): Dez?
* 72 A ¶ Nothing.
* 73 A Then, from impossibly far below, a faint voice.
74 D DEZ [O.S.]: Climb, Archie.

### SCENE s00351 | EXT. SANDBAR - ESTUARY FERRY - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN MIRIAM OKAFOR-LINDQVIST, DENNIS ABERNATHY, FATIMA HADDAD, CHILD'S FATHER, TOMASZ NOWAK, OLD PETRONELLA, JASPER
* 1 A ¶ A small vehicle ferry grounded on a mile of shining sandbar.
* 2 A The tide has gone out and left her heeled over, her ramp resting on mud.
* 3 A Gulls stalk the wet.
* 4 A Heat shimmers on the water's far edge.
5 A ¶ CAPTAIN MIRIAM OKAFOR-LINDQVIST, fifties, sits on the ramp, her cap beside her.
6 A DENNIS ABERNATHY, forties, a salesman in a ruined suit, stands at the rail holding his shoes.
7 A FATIMA HADDAD, thirties, a nurse, kneels beside a child asleep on a coat.
8 A CHILD'S FATHER, TOMASZ NOWAK, thirties, sits by her with his hand on the child's back.
9 A OLD PETRONELLA, eighties, sits on a bollard knitting.
10 A JASPER, twenties, the engineer, stands at the engine hatch, wiping his hands on a rag.
11 A ¶ Miriam checks her watch.
12 A She checks it again.
13 A She puts it away.
14 A Dennis watches her do this and says nothing.
15 D DENNIS: How long till the tide comes back?
16 D MIRIAM: Six hours. Maybe seven.
17 A ¶ Dennis nods.
18 A He sets his shoes on the rail, lines them up, takes them down again.
19 A Fatima tucks the coat tighter around the child's shoulders.
20 A Tomasz watches her hands.
21 A ¶ Petronella's needles click.
22 A Jasper climbs from the hatch and stands, looking out at the sandbar, at the bright far line of the sea.
23 A He rolls his sleeves to the elbow.
24 A He rolls them down.
25 D JASPER: Engine's fine.
26 D MIRIAM: I know.
27 D JASPER: It's the tide that's the problem.
28 D MIRIAM: I know.
29 A ¶ Fatima rises and walks to the water jug.
30 A She pours a cup, brings it back to Tomasz.
31 A He takes it.
32 A He drinks half and gives the rest to the child, who stirs and sips without waking.
33 A Dennis turns his face to the sky as if looking for rain.
34 D DENNIS (to the deck): We could walk.
35 D MIRIAM: No.
36 D DENNIS: It's only a mile.
37 D MIRIAM: The channel is deeper than it looks.
38 A ¶ Dennis shrugs.
39 A He sits on the rail.
40 A Petronella's needles click twice and stop.
41 A She holds up her knitting to the light and examines it, turns it over, resumes.
42 D TOMASZ: Is there more water?
43 D JASPER: Two jugs.
44 D TOMASZ: Then there is enough.
45 A ¶ Nobody argues.
* 46 A Gulls cry overhead.
* 47 A Out on the flat, a line of ripples begins to form, very slowly, a long way off.
48 A Miriam sees it first.
49 A She keeps her face still.
50 A She picks up her cap and puts it on.
51 A She says nothing to anyone, and one by one the others notice her, and notice what she is looking at, and sit very straight and quiet to wait.
52 D FATIMA: Is that the tide?
53 D MIRIAM: That is the tide.
54 A ¶ Fatima touches the child's hair.
55 A Tomasz closes his eyes.
56 A Dennis sets his shoes down, side by side, with care.
57 A Jasper wipes his hands on the rag one more time, unhurried, and folds it, and puts it in his pocket.

### SCENE s00352 | INT. FAMILY HARDWARE STORE - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): ROSE LINDQVIST, HENRY LINDQVIST, MARGO LINDQVIST-BYRNE, DANNY LINDQVIST, UNCLE FRITZ
* 1 A ¶ A narrow hardware store, aisles crowded floor to ceiling with bins of nails, rope, washers, paint cans.
* 2 A A single bulb hangs over the register.
* 3 A A cardboard sign taped to the door reads: "CLOSED.
* 4 A FOREVER?"
5 A ¶ ROSE LINDQVIST, sixties, the widow, sits on a stool at the register, a cigar box open in front of her.
6 A HENRY LINDQVIST, forties, her eldest, in a suit, paces the center aisle.
7 A MARGO LINDQVIST-BYRNE, thirties, her daughter, leans against the paint counter with her arms crossed.
8 A DANNY LINDQVIST, twenty-five, her youngest, sits on an upturned bucket by the door.
9 A UNCLE FRITZ, seventies, Rose's brother-in-law, polishes a hammer with a rag, saying nothing.
10 D HENRY: Mom, the offer expires Friday.
11 D ROSE: I know when Friday is.
12 D MARGO: Henry, can you sit down?
13 D HENRY: I'm trying to help.
14 D MARGO: You're trying to pace.
15 D HENRY: Danny, tell her.
16 D DANNY: Tell her what?
17 D HENRY: That fourteen hundred square feet next to a Whole Foods is worth three times what this place makes.
18 D DANNY: I don't know, Henry.
19 D HENRY: You don't know.
20 D DANNY: It's Dad's store.
21 D HENRY: Dad's dead, Danny.
* 22 A ¶ Silence.
23 A Fritz stops polishing.
24 A Margo uncrosses her arms.
25 A Rose closes the cigar box with a small click.
26 D ROSE: Say that again.
27 D HENRY: Mom, I didn't mean...
28 D ROSE: Say it again, Henry. To my face.
29 A ¶ Henry stops in the middle of the aisle.
30 A He opens his mouth.
31 A He closes it.
32 D MARGO: Mom.
33 D ROSE: Quiet, Margo.
34 A ¶ Danny stands.
* 35 A The bucket tips and clatters.
36 A Henry spins toward the sound, his sleeve catching a display of screwdrivers, and a hundred handles hit the floor, rolling.
37 D HENRY: Great. Fantastic.
38 D DANNY: I've got it.
39 D HENRY: Leave it, Danny!
40 D DANNY: I said I've got it!
41 A ¶ He drops to his knees and gathers the screwdrivers.
42 A Margo kneels beside him.
43 A Henry stands with his hands open at his sides.
44 A Fritz sets down the hammer, picks up a broom, and begins to sweep, slow and steady.
45 D ROSE: Your father kept the books in this box.
46 A ¶ She lifts the lid.
* 47 A Inside are index cards, hundreds of them, in neat blue ink.
48 D ROSE [CONT'D]: Every customer who ever couldn't pay. Every tab he let ride. Forty years.
49 D MARGO: Mom, I never knew.
50 D ROSE: Nobody did. That's the thing about your father. He never wanted to be thanked.
51 D HENRY (quiet): How much is owed?
52 D ROSE: I haven't counted. I think it's more than the Whole Foods offer.
53 A ¶ Henry laughs once, a helpless sound.
54 A He sits down on the floor in the middle of the screwdrivers.
55 D HENRY: Uncle Fritz, did you know?
56 D FRITZ: I wrote half those cards.
57 D DANNY: We're not selling.
58 D HENRY: Danny.
59 D DANNY: We're not selling it, Henry.
60 D MARGO: No.
61 D HENRY (rising, pulling at his tie): Then we run it. All four of us. Like he did.
62 D ROSE: Five.
63 A ¶ She nods at Fritz.
64 A He lifts the broom in salute.
65 A Henry crosses to the register and takes the cigar box in both hands, and Rose lets him.

### SCENE s00353 | INT. FUNERAL PARLOR SPEAKEASY - 1927 - NIGHT
Detected names (may be incomplete or contain aliases): MAGDA, FOSTER, LENNY, ODETTE, PIANIST, MAN, DIRECTOR, WHITCOMB
* 1 A ¶ Velvet drapes, casket stands doubling as bars.
* 2 A A jazz trio plays muted.
3 A ¶ MAGDA, thirties, a bartender, pours gin into teacups.
4 A FOSTER, forties, a bootlegger, counts bills.
5 A LENNY, twenties, his nephew, dozes in a coffin cushion.
6 A ODETTE, twenties, a singer, sips at the piano.
7 A THE PIANIST, sixties, plays on.
8 A ¶ A MAN, fifties, in a black frock coat and a funeral director's pin, steps in from the foyer.
9 D MAGDA: Fosse's here.
10 A ¶ She sets down the bottle.
11 A He surveys the room.
12 A Foster pockets his cash.
13 D DIRECTOR: Evening. I run this establishment.
14 D FOSTER: We've been paying your rent.
15 D DIRECTOR: I'm told that was not rent. I am Mr. Whitcomb.
16 D WHITCOMB: And I'd like my casket stands back.
17 A ¶ Lenny wakes.
18 A He rolls out of the cushion.
19 A Odette stops singing.
20 A The pianist plays one wrong note and stops.

### SCENE s00354 | EXT. STAGECOACH STOP BUILT AROUND A DRY WELL - DUSK
Detected names (may be incomplete or contain aliases): SILAS MCALLISTER, WIDOW HARGROVE, REVEREND TOBIAS CRANE, BLACKBIRD, TALLCHIEF, YOUNG WOMAN, DEPUTY LIAM FINNEGAN, ELEANOR
* 1 A ¶ A whitewashed adobe station squatting on a plain the color of old bone.
* 2 A At its center, ringed by a low stone wall, a dry well yawns black and deep.
* 3 A A cottonwood, long dead, throws a bony shadow across the porch.
* 4 A Wind pushes a tumbleweed in slow circles around the well.
5 A ¶ SILAS MCALLISTER, fifties, the station keeper, stands on the porch in a faded blue shirt, a rag hanging from his belt, a shotgun leaning against the post.
6 A His face has been burned by thirty summers into something like leather.
7 A He watches the road.
8 A ¶ WIDOW HARGROVE, sixties, steps down from the idle stagecoach in black crepe and a veil she lifts to look at the sky, her mouth set tight.
9 A She carries a carpetbag that clinks.
10 A ¶ REVEREND TOBIAS CRANE, forties, follows her, thin as a rake, Bible clutched to his chest.
11 A His collar is yellow with dust.
12 A ¶ JACK "BLACKBIRD" TALLCHIEF, thirties, the stage driver, a lean Cherokee man in a flat-brimmed hat, climbs down last and stretches his back, one hand on the wheel hub.
13 A He says nothing.
14 A His eyes go to the well.
15 A ¶ A YOUNG WOMAN, twenty, in a gray traveling dress, remains seated in the coach.
16 A She does not move.
17 A Her eyes are fixed on the porch.
18 A Her hands are in her lap, bound by a length of leather cord.
19 A ¶ DEPUTY LIAM FINNEGAN, thirties, rides up on a sweating bay, dismounts, loops the reins, and walks stiffly to the coach door, one hand on his holster.
20 A He is the woman's escort.
21 A He has not slept in two days.
22 D SILAS (to all of them): Water's gone, folks. I'll not lie to you.
23 D WIDOW HARGROVE (to Silas): How gone?
24 D SILAS: Gone since June. Well's dry as a Methodist's Sunday.
25 D REVEREND CRANE (muttering): Lord deliver us from jests.
26 D FINNEGAN (to Silas): Station keeper, I need a room with a lock on the door.
27 D SILAS: Got one. Back of the kitchen. No window.
28 D FINNEGAN: That'll do.
29 D BLACKBIRD (to Finnegan, quiet): She hasn't said a word since Dry Fork.
30 D FINNEGAN: She won't.
31 A ¶ Blackbird crosses to the well and looks over the stone lip.
32 A He kneels and picks up a pebble and drops it.
33 A Nobody breathes.
* 34 A A long second later, from deep down, comes a small, dry click.
35 D BLACKBIRD (to himself): Forty feet. Maybe fifty.
36 D WIDOW HARGROVE (to Silas): Mr. McAllister, I paid for a bed and a bath.
37 D SILAS: Ma'am, you'll get the bed.
38 D WIDOW HARGROVE: And the bath?
39 D SILAS: You can have the whole well, if you can find the water.
40 A ¶ The Young Woman turns her head, very slowly, and looks at the well.
41 A Finnegan sees this.
42 A He steps in front of the coach door to block her view.
43 D FINNEGAN (to the group): Everybody inside. We stay the night, we leave at first light.
44 D REVEREND CRANE (to Finnegan): Deputy, is she a danger to us?
45 D FINNEGAN: She's a danger to herself.
46 D REVEREND CRANE: The devil has many faces.
47 D FINNEGAN: This one's twenty and scared, Reverend.
48 A ¶ The Young Woman looks at him now.
49 A For the first time, she speaks, in a voice dry as paper.
50 D YOUNG WOMAN: Sir.
51 A ¶ Finnegan freezes.
52 D YOUNG WOMAN [CONT'D]: My name is Eleanor Voss. I would like you to say it. Just once. Before we go in.
53 D FINNEGAN: Miss Voss.
54 D ELEANOR: Thank you.
55 A ¶ She steps down from the coach on her own, hands still tied, and walks toward the porch.
56 A She passes the well.
57 A She does not look at it.
58 A She passes Blackbird, who takes off his hat.
59 A She passes the Widow, who draws her veil.
60 A She passes Reverend Crane, who clutches his Bible tighter.
61 A At the porch she stops in front of Silas.
62 D ELEANOR [CONT'D] (to Silas): The room with no window.
63 D SILAS: This way, miss.
64 A ¶ Silas opens the door.
65 A Eleanor goes in.
66 A Finnegan follows, and shuts it.
67 D BLACKBIRD (to Silas): That wind's gone quiet.
68 D SILAS: So it has.
* 69 A ¶ The tumbleweed stops circling.
* 70 A The cottonwood shadow lengthens across the porch.
* 71 A From deep in the well, softly, comes the sound of water, running.
72 D WIDOW HARGROVE (whisper): Do you hear that?
73 D REVEREND CRANE (whisper, to himself): Dear God. It was never dry.
74 A ¶ Silas lifts the shotgun.
75 A Blackbird crouches at the stone wall.
* 76 A The water rises, rises, a silver glimmer in the black, and the sound grows into a hollow, hungry roar.

### SCENE s00355 | INT. CRUISE SHIP CALL CENTER - DAY
Detected names (may be incomplete or contain aliases): CUSTOMER DELIGHT AHOY, BARB, GREG, TRISH, OMAR, NIKOLAI, THE AUDITOR
* 1 A ¶ Cubicles bolted to the deck of a cruise ship.
* 2 A Portholes show open sea.
* 3 A A banner: "CUSTOMER DELIGHT AHOY."
4 A ¶ BARB, forties, supervisor, paces.
5 A GREG, thirties, wears a headset.
6 A TRISH, twenties, files her nails.
7 A OMAR, fifties, stares at a screen.
8 A NIKOLAI, twenties, mops the floor.
9 A A figure in a tie sits at the end desk, introduced only as THE AUDITOR.
10 D BARB: Greg, your call time is nine minutes.
11 D GREG: It's the sea, Barb. Signal drifts.
12 D TRISH: Barb, how do I unmute?
13 D BARB: Trish, you're not muted.
14 D CUSTOMER [V.O.] (over headset): Hello? Is this the help line? My cabin is on fire.
15 D GREG: Please hold. Your call is important.
16 A ¶ The Auditor stands.
17 A He strides to Barb.
18 D THE AUDITOR: Barbara Finch?
19 D BARB: It's Barb.
20 D AUDITOR: It is now "Ms. Finch, Director of Delight."
21 D BARB (to the room): I got promoted.
22 D OMAR (to himself): Of course she did.
23 A ¶ Nikolai drops the mop.
* 24 A The ship lurches.
25 A Greg pulls off his headset.
26 D GREG: Barb? About that fire.

### SCENE s00356 | INT. OPEN-PLAN OFFICE - FOURTH FLOOR - DAY
Detected names (may be incomplete or contain aliases): PRIYANKA, WENDELL, LUCIA, HAROLD, TALL MAN, PHONE, MR. GRAVES
* 1 A ¶ Cubicles.
* 2 A Beige.
* 3 A A ficus dying with dignity.
4 A ¶ PRIYANKA, thirties, presses a stapler into the carpet.
5 A WENDELL, fifties, stares at an empty slide.
6 A LUCIA, twenties, hides behind a monitor.
7 A HAROLD, sixties, sleeps upright.
8 A A TALL MAN, forties, stands unannounced at the end of the aisle, a clipboard under his arm.
9 D PRIYANKA: Who is that?
10 D WENDELL (shrugging): Consultant.
11 A ¶ The Tall Man walks to Wendell's desk.
12 A He places his clipboard down.
13 A Wendell does not look up.
14 A Lucia slides lower.
15 D TALL MAN: Efficiency review.
16 D WENDELL: Of course.
17 D PHONE [V.O.] (from Wendell's desk): Wendell, this is the CEO. Is the review underway?
18 D WENDELL (into the phone, calm): It's underway, sir.
19 A ¶ The Tall Man takes out a pen.
20 A Harold snores.
21 A Priyanka drops the stapler and it echoes.
22 A Lucia peeks over the edge of her monitor and meets the Tall Man's eyes.
23 D MR. GRAVES (to Lucia): You. Name?
24 D LUCIA: Lucia.
25 D MR. GRAVES: Redundant.
26 A ¶ Lucia stands.
27 A She picks up her coat.
28 A Priyanka rises, Wendell rises, Harold wakes with a start, and all four stare as Mr. Graves strikes off a line on his clipboard.

### SCENE s00357 | INT. WRESTLING GYM - EMPTY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH ODETTE BRANNIGAN
* 1 A ¶ A concrete locker room beneath a high school gym.
* 2 A Rows of dented lockers.
* 3 A A long bench.
* 4 A A whiteboard with half-erased plays.
* 5 A Fluorescent tubes buzz.
* 6 A A cheap phone sits on the bench, facedown, silent.
* 7 A ¶ No one is here.
* 8 A Rain drums on the roof above.
* 9 A Then footsteps on the stairs.
10 A ¶ COACH ODETTE BRANNIGAN, fifties, enters, shaking water from a whistle lanyard.
11 A She wears a windbreaker with the school's faded crest.
12 A She is soaked and she doesn't care.
13 A She crosses to the bench, picks up the phone, studies it, sets it down.
* 14 A ¶ The phone buzzes.
15 A She looks at the screen.
16 A She does not answer.
* 17 A It goes to voicemail.
* 18 A A recorded voice fills the room.
19 D COACH ODETTE [V.O.] (from voicemail): Hey, Odette. It's you. It's me. Yesterday you. Listen, you're going to want to quit tonight.
20 D ODETTE: Don't.
21 D COACH ODETTE [V.O.] (from voicemail): Don't say "don't." You always say "don't." Just listen.
22 A ¶ She sits on the bench, elbows on knees.
23 D ODETTE: Twenty-six years. Twenty-six years of whistles, of weigh-ins, of boys crying in showers.
24 D COACH ODETTE [V.O.] (from voicemail): Of boys crying in showers.
25 D ODETTE: And what do I get? A losing season. A board meeting. A letter.
26 D COACH ODETTE [V.O.] (from voicemail): The letter said "restructure."
27 D ODETTE: I know what it said. It said, "Thank you for your service, please clear your locker."
28 A ¶ She stands, goes to a locker at the end of the row, spins the dial, opens it.
* 29 A It is full of ribbons, photographs, a dented trophy.
30 A She takes none of it.
31 D ODETTE [CONT'D]: Eleven state champions. Forty-four all-conference. One kid who made the Olympic trials and cried so hard he forgot his shoes.
32 D COACH ODETTE [V.O.] (from voicemail): He forgot his shoes, Odette. You drove them to Colorado.
33 D ODETTE: Shut up.
34 D COACH ODETTE [V.O.] (from voicemail): You drove eleven hours with a pair of shoes on the passenger seat. And he wrestled barefoot because they were the wrong size.
35 D ODETTE: He still won.
36 D COACH ODETTE [V.O.] (from voicemail): He still won.
37 A ¶ She takes a deep breath.
38 A She closes the locker.
39 A She leans her forehead against it.
40 D ODETTE [CONT'D]: I'm tired.
41 D COACH ODETTE [V.O.] (from voicemail): I know. That's why you recorded this. So that I would say it to you when you were tired enough to hear.
42 D ODETTE: What do I say to them?
43 D COACH ODETTE [V.O.] (from voicemail): Nothing. You just show up. Tomorrow at six. Same as always. Let the board send their letter.
44 D ODETTE: They'll fire me.
45 D COACH ODETTE [V.O.] (from voicemail): Probably.
46 D ODETTE: Then why?
47 D COACH ODETTE [V.O.] (from voicemail): Because the boys will be there at six. And they're waiting for you to say go.
* 48 A ¶ A pause.
* 49 A The voicemail ends with a soft beep.
50 A Odette picks up the phone and holds it to her chest for a long moment.
51 A She lays it on the bench.
52 A Then she goes to the whiteboard, picks up a marker, and writes in large block letters: "6 AM."
53 D ODETTE [CONT'D] (to the empty room): Go.
54 A ¶ She turns off the light.

### SCENE s00358 | EXT. FIELD BAKERY - ARMY CAMP - DAWN
Detected names (may be incomplete or contain aliases): MOLLY HENDERSON, REUBEN ALVAREZ, KIM SOO-JIN, ISAAC BERNSTEIN, TATUM, GENERAL'S AIDE
* 1 A ¶ A canvas-roofed bakery tent in a muddy field.
* 2 A Brick ovens glow.
* 3 A Flour dusts the air.
* 4 A Beyond the tent flap, a line of tanks sleeps under camouflage netting.
* 5 A It is quiet, too quiet.
6 A ¶ SGT. MOLLY HENDERSON, forties, a head baker with floury forearms, kneads dough at a steel table, humming.
* 7 A CPL.
8 A REUBEN ALVAREZ, twenties, shapes loaves beside her.
* 9 A PVT.
10 A KIM SOO-JIN, twenty, feeds the oven with split logs.
11 A CAPT. ISAAC BERNSTEIN, thirties, the camp quartermaster, leans on a crate eating a crust.
* 12 A PVT.
13 A WILLIAM "BILLY" TATUM, nineteen, sweeps flour into a pan.
14 A ¶ Molly flips the dough, slaps it on the table, and calls out the count while Reuben rolls two loaves onto a peel and slides them into the oven, Soo-Jin ladling water over the bricks to make steam, and Isaac tears his crust in half and offers it to Billy, who takes it and chews with his broom in his other hand.
15 D MOLLY: Forty loaves by six.
16 D REUBEN: Thirty-eight, Sarge. Two burned.
17 D MOLLY: Then forty by six-fifteen.
18 D ISAAC (to Molly): It's a fine morning for it.
19 D MOLLY: It's a fine morning, Captain.
* 20 A ¶ A shadow passes over the tent flap.
21 A They don't notice.
22 A The humming resumes.
23 A Billy sweeps.
24 A Soo-Jin stokes the fire.
25 A ¶ A GENERAL'S AIDE, thirties, in a crisp uniform, lifts the flap and steps in, carrying a telegram.
26 A He stands, scanning the faces.
27 A Molly looks up.
28 A Her hands go still.
29 D AIDE: Sergeant Henderson?
30 D MOLLY: Speaking.
31 D AIDE: The Captain is to report to Command at once.
32 D ISAAC: What for?
33 D AIDE: The convoy's been turned back. The bridge at Sainte-Marie is gone.
* 34 A ¶ The tent goes quiet.
35 A Reuben sets down the peel.
36 A Soo-Jin drops a log.
37 A Billy lets the broom fall.
38 A Isaac swallows the last of his crust.
39 A Molly wipes her hands on her apron one finger at a time.
40 D MOLLY (to the group): Nobody panic. Forty loaves by six.
41 D ISAAC: Molly.
42 D MOLLY: Captain, men fight on bread.
43 A ¶ He nods.
44 A He turns and follows the Aide out.
* 45 A The flap falls shut.
46 A Reuben picks up the peel.
47 A Soo-Jin picks up a log.
48 A Billy picks up the broom.
49 A Molly resumes kneading, slowly, harder than before, and the humming does not come back.

### SCENE s00359 | EXT. HOT-AIR BALLOON LAUNCH FIELD - BEFORE DAWN
Detected names (may be incomplete or contain aliases): JUNO ASHFORD, COLM BRADY, PHOEBE LINWOOD
* 1 A ¶ A cold meadow under a lavender sky.
* 2 A Dozens of balloons lie limp on the dew, fans roaring, burners flaring orange against the dark.
3 A ¶ JUNO ASHFORD, thirties, a pilot in a quilted vest, checks the basket's rigging.
4 A COLM BRADY, thirties, her ground chief, holds the crown line.
5 A PHOEBE LINWOOD, thirties, a journalist, stands at the basket with a notebook, her scarf wrapped twice.
6 D JUNO (to the crew): Okay, everyone, burners on in two minutes.
7 A ¶ Colm nods.
8 A He glances at Phoebe, then at Juno, then back at Phoebe.
9 A She smiles.
10 A He looks away fast.
11 D PHOEBE (to Juno): Is it always this cold?
12 D JUNO: Always. That's how you know it'll be worth it.
13 A ¶ She takes Phoebe's hand and helps her over the wicker rim.
14 A Colm watches this with an expression he hides.
15 A He busies himself with a knot.
16 D COLM (to himself): Idiot. Idiot. Idiot.
17 D JUNO: What was that?
18 D COLM: Nothing! Rigging.
* 19 A ¶ The burner roars.
* 20 A The envelope swells.
21 A Phoebe steps back, awed, and bumps into Juno, and neither of them moves away.
22 A Colm drops the line, picks it up, drops it again.
23 D PHOEBE (to the whole crew): Is anyone else coming up?
24 D COLM (too quickly): I'll hold the ground.
25 D JUNO (to Colm, softly): Colm. Come up.
26 A ¶ He hesitates.
27 A She reaches down a hand.
28 A He takes it.
29 A She hauls him over the rim, and the three of them stand shoulder to shoulder in the basket as the balloon lifts, silent, into the first pink light.

### SCENE s00360 | INT. LIMESTONE CAVE - CORPORATE RETREAT - DAY
Detected names (may be incomplete or contain aliases): CRESSIDA VANCE-HOLT, WINIFRED OYELARAN, BARTHOLOMEW PRICE
* 1 A ¶ A cavern lit by battery lanterns.
* 2 A Stalactites drip.
* 3 A A banner reads "TEAM BUILDING 2.0."
* 4 A Folding chairs ring a flip chart.
5 A ¶ CRESSIDA VANCE-HOLT, forties, a regional director in a fleece vest, stands at the flip chart with a marker.
6 A WINIFRED OYELARAN, thirties, her deputy, sits in the front row taking notes.
7 A BARTHOLOMEW PRICE, fifties, the facilitator, perches on a stool with a clicker.
8 D CRESSIDA: Today we trust-fall into the future.
9 D WINIFRED: Cressida, there's a puddle behind you.
10 D CRESSIDA: Winifred, that's a metaphor.
11 D BARTHOLOMEW: Let's begin with an icebreaker.
12 D WINIFRED: There is ice already. On the ceiling.
13 D BARTHOLOMEW: She is correct.
14 D CRESSIDA: Bartholomew, I'd like to see her try the fall first.
15 A ¶ Winifred folds her notebook.
16 A She stands, turns her back to Cressida, and spreads her arms.
17 A Cressida steps forward, then back, then forward.
18 D WINIFRED: Catch me.
19 D CRESSIDA: I will.
20 D WINIFRED: Cressida, are you ready?
21 D CRESSIDA: I'm always ready.
22 A ¶ She lets herself fall.
23 A Cressida lunges.
24 A She misses.
25 A Winifred hits the stone with a grunt.
26 A Bartholomew drops his clicker.
* 27 A A stalactite drops its water with a plink.
28 D WINIFRED (from the floor): She was supposed to catch her.
29 D BARTHOLOMEW: Who?
30 D WINIFRED: She was supposed to catch me.
31 D CRESSIDA: She meant to.
32 A ¶ Winifred sits up, holding her elbow.
33 A Cressida kneels beside her.
34 A Both of them glare at Bartholomew.
35 D BARTHOLOMEW: That concludes module one.
