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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0040.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01268 | INT. WEDDING RECEPTION - RIVERBOAT BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): IMANI LOCKHART-DEVEREUX, FERNANDO CASTELLANOS, DONA GLORIA CASTELLANOS, UNCLE ABEL
* 1 A ¶ Paper lanterns sway on a gilded deck.
* 2 A A band plays under strung lights.
* 3 A Champagne flutes shiver on a long white table.
4 A ¶ Four guests huddle near the cake: the bride's sister IMANI LOCKHART-DEVEREUX (30s, bridesmaid, sage-green dress), her ex-boyfriend FERNANDO CASTELLANOS (30s, best man, too-tight tie), his mother DONA GLORIA CASTELLANOS (60s, black lace, fan in hand), and an elderly cousin, UNCLE ABEL (70s, braces, cane).
5 A ¶ Imani and Fernando stand a pace apart, the way people do when they have both rehearsed a speech and forgotten it.
6 D IMANI: You look well.
7 D FERNANDO: You look... green.
8 D IMANI: It's sage.
9 A ¶ Gloria snaps her fan open.
10 A Abel leans heavily on his cane and squints at the cake.
11 A Imani and Fernando both reach for the same champagne flute, their fingers meeting on the stem.
12 A They freeze.
* 13 A The band hits a slow chord.
14 D FERNANDO: After you.
15 D IMANI: After you.
16 A ¶ Gloria and Abel exchange a glance, shuffle to opposite sides of the cake, and, as if on cue, begin to cut it, passing the knife between them with elaborate ceremony.
17 T FADE OUT.

### SCENE s01269 | INT. GLOBEX HOLDINGS - OPEN-PLAN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): HORATIO PEMBERTON-ADEYEMI, CORDELIA VANTERPOOL-OKONKWO, REGGIE FITZWILLIAM, BRIGITTE SOLANKI, DEZ, OKAMOTO, IT, INTERCOM, BARNABY CRANSTON-LEE, VP
* 1 A ¶ A sea of beige cubicles under a drop ceiling.
* 2 A A motivational poster of a rowing eight hangs crooked above the water cooler.
* 3 A A sign: SYNERGY IS OUR MIDDLE NAME.
4 A ¶ Five employees stand at their desks, holding paper cups of lukewarm coffee, waiting.
5 A ¶ HORATIO PEMBERTON-ADEYEMI (50s, manager, short-sleeve shirt, tie clip like a tiny sword) clears his throat by the whiteboard.
6 A ¶ CORDELIA VANTERPOOL-OKONKWO (30s, senior analyst, silent, immaculate) stirs her coffee without drinking it.
7 A ¶ REGGIE FITZWILLIAM (40s, sales, loud shirt, over-whitened teeth) sprawls on the corner of a desk.
8 A ¶ BRIGITTE SOLANKI (20s, HR coordinator, lanyard heavy with badges) clutches a binder.
9 A ¶ DESMOND "DEZ" OKAMOTO (30s, IT, headphones round his neck, three days' growth) leans against a filing cabinet, unimpressed.
* 10 A ¶ Overhead, a speaker crackles.
11 D INTERCOM [V.O.] (female, bright): Good morning, Globex! A reminder that today is Casual Friday, and also Mandatory Fun Day.
12 D HORATIO (to the room): Okay, team. Quick huddle.
13 D REGGIE: We are huddled.
14 D HORATIO: Properly huddled.
15 D CORDELIA: We're standing four feet apart.
16 D HORATIO: Three, please.
17 A ¶ They shuffle a foot closer.
18 A Brigitte raises her binder like a shield.
19 A Dez rolls his eyes.
20 D HORATIO [CONT'D]: As you know, Corporate has asked us to find twelve percent in efficiencies.
21 D REGGIE: Twelve?
22 D BRIGITTE: It's in the memo.
23 D REGGIE: There's a memo?
24 D DEZ: There's always a memo.
25 D HORATIO: I want to be clear: nobody is being let go.
26 D CORDELIA: Good.
27 D HORATIO: Today.
* 28 A ¶ A silence.
* 29 A The intercom clicks.
30 D INTERCOM [V.O.] (female, bright): Reminder: the Efficiency Pizza Party begins at noon in the Collaboration Zone!
31 D BRIGITTE (muttering): Efficiency Pizza.
32 D HORATIO: What was that, Brigitte?
33 D BRIGITTE: Nothing. Nothing at all.
34 D HORATIO: Because if there's something you'd like to share with the group...
35 D BRIGITTE: I'd like to share that I've been here six years and I still don't know what we do.
* 36 A ¶ Nobody laughs.
37 A Reggie's grin falters.
38 A Dez takes his headphones from around his neck and puts them on.
39 A Cordelia sets her coffee down on the desk with a click.
40 D CORDELIA: We process claims.
41 D BRIGITTE: Which claims?
42 D CORDELIA: Claims.
43 D HORATIO: Let's not go off-topic.
44 D REGGIE: I sell the claims. I think.
45 D DEZ (removing one earphone): You sell the claims? To whom?
46 D REGGIE: To people who have claims.
47 D DEZ: People with claims don't need to buy claims.
48 D REGGIE: Dez, buddy, you don't understand sales.
49 D DEZ: I understand there's no product.
50 A ¶ A new figure appears at the end of the aisle.
51 A A tall man in an immaculate grey suit, hair slicked back, folder under one arm.
52 A MR. BARNABY CRANSTON-LEE (50s, regional VP, eyes like glass).
53 A The room freezes.
54 D CRANSTON-LEE: Don't stop on my account.
55 D HORATIO: Mr. Cranston-Lee! We didn't expect you.
56 D CRANSTON-LEE: That is the point of the visit.
57 A ¶ He walks down the aisle.
* 58 A His shoes click.
59 A He stops by Cordelia's desk and picks up her coffee.
60 A Sniffs.
61 A Sets it down.
62 D CRANSTON-LEE [CONT'D]: Lukewarm.
63 D CORDELIA: It's been a long morning.
64 D CRANSTON-LEE: Of course it has.
65 A ¶ He opens the folder.
66 A Takes out a single sheet of paper.
67 A Holds it up.
68 D CRANSTON-LEE [CONT'D]: Twelve percent.
69 D REGGIE: We were just discussing...
70 D CRANSTON-LEE: I know what you were discussing. Brigitte. How many years?
71 D BRIGITTE: Six, sir.
72 D CRANSTON-LEE: Dez.
73 D DEZ: Four.
74 D CRANSTON-LEE: Cordelia.
75 D CORDELIA: Nine.
76 D CRANSTON-LEE: Reggie.
77 D REGGIE: Fifteen! Fifteen glorious years, sir!
78 D CRANSTON-LEE: Horatio.
79 D HORATIO (swallowing): Twenty-two.
80 D CRANSTON-LEE: Twenty-two years. And in that time, none of you has produced a single claim.
* 81 A ¶ The intercom crackles.
82 D INTERCOM [V.O.] (female, bright): Mandatory Fun Day will now begin!
83 A ¶ Cranston-Lee lowers the page.
84 A Looks around at five stricken faces.
85 A Then, to everyone's astonishment, he smiles.
86 D CRANSTON-LEE: Don't worry. Neither has anyone else. That's why the company's been so profitable.
87 D HORATIO: Sir?
88 D CRANSTON-LEE: Efficiencies, Horatio. I want twelve percent more nothing.
89 A ¶ He tucks the folder under his arm and strides out.
90 A Nobody breathes.
91 A Reggie, slowly, raises his paper cup.
92 D REGGIE: To nothing.
93 D DEZ: To nothing.
94 D CORDELIA: To nothing.
95 D BRIGITTE (muttering): Efficiency pizza.
96 T FADE OUT.

### SCENE s01270 | INT. DRAINED PUBLIC SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): DEZ OKAFOR, ROZ VANCE, TOBIAS KRELL
* 1 A ¶ Deep end.
* 2 A Cracked blue tile.
* 3 A Moonlight leaks through a broken skylight.
4 A ¶ DEZ OKAFOR, 40s, shaved head, sits on an upturned lifeguard chair.
* 5 A Duffel bag between his boots.
6 A ¶ ROZ VANCE, 30s, leather jacket, thumb on a revolver hammer.
7 A She stands over the drain.
8 D ROZ: You're late.
9 D DEZ: Traffic.
10 D ROZ: At two in the morning.
11 D DEZ: There was a parade.
12 D ROZ: For who?
13 D DEZ: Me. Confetti and everything. Count it.
14 D ROZ: You count it. I want to see your hands doing the counting.
15 D DEZ: My hands are fine. My hands have never been the problem.
16 D ROZ: Your mouth is the problem.
17 D DEZ: My mouth got us this pool. Free rent, no neighbours, a diving board for a lookout.
18 D ROZ: It smells like a wet dog died in a bleach factory.
19 D DEZ: That's the ambience. You pay extra for that.
20 D ROZ: I'm not paying extra for anything. I'm paying what we agreed.
21 D DEZ: Then count.
* 22 A ¶ Steel door CLANGS above.
* 23 A Boots on the ladder.
24 A ¶ TOBIAS KRELL, 50s, soaked raincoat, grey stubble, drops to the tile.
25 A Revolver out.
26 A Shaking.
27 D TOBIAS: Nobody move.
28 D ROZ: Tobias, put that down.
29 D DEZ: Who's Tobias?
30 D ROZ: My brother-in-law.
31 D TOBIAS: Ex.
32 D ROZ: Ex-brother-in-law. He drove.
33 D DEZ: You brought a driver to a deal?
34 D TOBIAS: I brought a gun to a deal!
35 D ROZ: You brought a gun that doesn't have bullets, Tobias.
36 D TOBIAS: ...How did you know that?
37 D ROZ: I took them out. Last Tuesday.
38 A ¶ Tobias lowers the gun.
39 A Laughs, thin and relieved.
40 A Sits on the tile.
41 D TOBIAS: Thank God. I thought I'd have to use it.
42 D DEZ: Count the money, Roz.

### SCENE s01271 | INT. BOMBED CATHEDRAL BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): IMRE HALASZ, TEODORO BASCO, LI WEI, AGNES FARQUHAR, RINGS
* 1 A ¶ Stone stairs spiral up into smoke.
* 2 A A great bronze bell hangs cracked.
* 3 A Slit windows.
* 4 A Dust falls like snow.
5 A ¶ SGT. IMRE HALASZ, 40s, grey in his beard, crouches at a slit window.
6 A Rifle braced.
* 7 A ¶ CPL.
8 A TEODORO BASCO, 20s, wiry, kneels beside a field radio.
9 A Headset crooked.
* 10 A ¶ PVT.
11 A LI WEI, 19, round glasses taped at the hinge, sits against the wall.
12 A Hugging his helmet.
13 A ¶ He stares at nothing.
14 A ¶ LT. AGNES FARQUHAR, 30s, mud to the knees, climbs into the room.
15 A Pistol out.
16 A Breathing hard.
17 A ¶ She drops beside the sergeant.
18 D FARQUHAR: Report.
19 D HALASZ: Two tanks at the bridge. Infantry behind them.
20 D BASCO: Command says hold.
21 D FARQUHAR: Hold what?
22 D BASCO: The tower, ma'am.
23 D FARQUHAR: We're in the tower.
24 D BASCO: That's what I told them.
25 D HALASZ: They've seen us. Light on the bell.
26 A ¶ He points.
* 27 A A glint on the bronze.
28 D FARQUHAR: Cover it.
29 D LI: With what?
30 D FARQUHAR: Your jacket.
31 A ¶ He doesn't move.
32 D HALASZ: Li.
33 D LI: Yes, Sergeant.
34 D HALASZ: Jacket.
35 A ¶ He peels it off.
36 A Climbs the bell frame.
37 A Drapes it over the metal.
38 A Hands shaking.
* 39 A ¶ A distant WHUMP.
40 D BASCO: Incoming!
41 A ¶ All four drop.
* 42 A ¶ The wall SHUDDERS.
* 43 A Plaster rains.
44 D FARQUHAR: Where?
45 D HALASZ: Short. Nave.
46 D BASCO: Sergeant, they're ranging us.
47 D LI: They're ranging us. They're ranging us.
48 D FARQUHAR: Private!
49 D LI: I'm fine.
50 D HALASZ: He's not fine.
51 D FARQUHAR: Nobody's fine. Basco, get me the battery.
52 D BASCO: Radio's dead on the artillery net.
53 D FARQUHAR: Then use the infantry net.
54 D BASCO: They don't answer.
55 D HALASZ: Because they're running.
56 A ¶ He turns back to the slit.
57 D HALASZ [CONT'D]: Infantry's on the bridge. Fifty metres.
58 D FARQUHAR: Count?
59 D HALASZ: Thirty. Forty.
60 D LI: We have nine magazines.
61 D BASCO: Eight. I gave one to the medic.
62 D LI: The medic's dead.
* 63 A ¶ Silence.
64 A Basco looks at him.
65 A Then away.
* 66 A ¶ Another WHUMP.
* 67 A Closer.
* 68 A ¶ The bell RINGS, one flat note.
* 69 A Dust pours from the vault.
70 D FARQUHAR: Down. Everyone down!
71 A ¶ She grabs Li by the collar.
72 A Hauls him flat.
73 A ¶ He grips her sleeve.
74 D LI: Lieutenant, I can't.
75 D FARQUHAR: You can.
76 D LI: I can't.
77 D HALASZ: Li. Look at me.
78 A ¶ He does.
79 D HALASZ [CONT'D]: Forty men on that bridge. Four of us up here. You know what that makes us?
80 D LI: Dead.
81 D HALASZ: Inconvenient.
* 82 A ¶ A breath.
* 83 A Something almost like a laugh.
84 A ¶ Basco slams the radio.
85 D BASCO: Got them! Got somebody!
86 D FARQUHAR: Who?
87 D BASCO: Don't know. Sounds like cavalry.
88 D HALASZ: We don't have cavalry.
89 D BASCO: Then it's somebody's cousin.
* 90 A ¶ The third shell lands.
* 91 A Direct hit on the stair below.
* 92 A The floor LURCHES.
93 A ¶ They scramble.
* 94 A Rifles up.
* 95 A Faces white with plaster.
96 D FARQUHAR: Positions.
97 A ¶ He crawls to the slit.
98 A She takes the east window.
99 A Basco kneels, radio in one fist, rifle in the other.
100 A ¶ Li lifts his rifle.
101 A Steadies it on the sill.
102 D LI: Sergeant?
103 D HALASZ: Yes?
104 D LI: When it starts, don't let me stop.
105 D HALASZ: I won't.
* 106 A ¶ The bell hums.
* 107 A Beyond it, boots on the bridge.
108 D HALASZ [CONT'D]: Wait for it.

### SCENE s01272 | EXT. SCHOOL BUS GRAVEYARD - DUSK
Detected names (may be incomplete or contain aliases): PAKS, NAIR, WYATT BOONE, LUCIA ORTEGA
* 1 A ¶ Forty yellow buses rust nose to tail in a field of dead sunflowers.
* 2 A Windows gone.
* 3 A Seats full of weeds.
4 A ¶ PRAKASH "PAKS" NAIR, 16, lanky, glasses, stands on a bus roof with a stolen six-pack.
5 A ¶ WYATT BOONE, 17, buzzcut, football jacket, climbs up after him.
6 A He grins too hard.
7 A ¶ Below, LUCIA ORTEGA, 16, braids, sketchbook under her arm, watches them both.
8 D WYATT: Thought you'd chicken out.
9 D PAKS: So did I.
10 A ¶ Wyatt snatches a can.
11 A Paks grabs it back.
12 A They shove.
* 13 A The roof BOOMS under their boots.
14 A ¶ Both freeze.
* 15 A ¶ A siren, far off.
* 16 A Coming closer.
17 D LUCIA: Cops!
18 A ¶ Wyatt and Paks scramble, tumble down the rear emergency door.
19 A Lucia is already running.
* 20 A Cans spill in the dust.
21 A ¶ They hit the sunflowers, all three, laughing like idiots.

### SCENE s01273 | INT. FUNERAL HOME EMBALMING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS PRUITT, MARGUERITE DUBOIS, KENJI SAITO, ABIGAIL TRENT, SEUN, ADEBAYO, REVEREND CALDER MOSS, BODY
* 1 A ¶ White tile.
* 2 A Steel table.
* 3 A A single fluorescent tube hums over a sheeted body.
* 4 A The wall clock reads 3:12.
5 A ¶ HOLLIS PRUITT, 50s, the funeral director, stands at the table in a rubber apron.
6 A He is calm.
7 A He has done this thousands of times.
8 A ¶ MARGUERITE DUBOIS, 30s, his apprentice, holds a clipboard.
9 A She watches the sheet.
10 A ¶ KENJI SAITO, 40s, the night janitor, mops the corner.
11 A He keeps his eyes on the floor.
12 A ¶ ABIGAIL TRENT, 60s, the widow, sits on a folding chair by the door.
13 A A black purse in her lap.
14 A ¶ OLUWASEUN "SEUN" ADEBAYO, 20s, her grandson, leans on the wall beside her.
15 A Arms crossed.
16 A ¶ REVEREND CALDER MOSS, 70s, stands in the doorway, Bible pressed to his chest.
17 D MARGUERITE: Mrs. Trent, you really shouldn't be in here.
18 D ABIGAIL: I want to see him.
19 D HOLLIS: He isn't ready, ma'am.
20 D ABIGAIL: I said I want to see him.
21 A ¶ Hollis glances at the Reverend.
22 A The Reverend nods.
23 A Hollis lifts the sheet to the chin.
24 A ¶ The face is grey.
25 A Peaceful.
26 A She leans in and touches his cheek.
27 A ¶ The finger comes away wet.
28 D ABIGAIL [CONT'D]: He's warm.
29 D HOLLIS: That's the lights, Mrs. Trent.
30 D SEUN: Grandma, come on.
31 A ¶ She doesn't move.
32 A Kenji's mop stops.
33 A ¶ The body's chest rises.
34 A ¶ Marguerite drops the clipboard.
* 35 A It CLATTERS across the tile.
36 D MARGUERITE: Did you see that?
37 D HOLLIS: Nobody breathe.
38 A ¶ They don't.
* 39 A The fluorescent tube FLICKERS.
40 A ¶ The chest rises again.
41 A Slowly.
* 42 A The sheet slides off the shoulder.
43 A ¶ The Reverend begins to pray, fast, under his breath.
44 A Seun backs into the wall.
45 A Kenji drops the mop and edges toward the door.
46 A ¶ Hollis presses two fingers to the neck.
47 A His face goes blank.
48 A He pulls back.
49 D HOLLIS [CONT'D]: No pulse.
50 D MARGUERITE: Then what's moving?
51 A ¶ The mouth opens.
52 A A long, wet exhale.
53 A Then a whisper, dry as paper.
54 D BODY [O.S.]: Abigail.
55 A ¶ She stands.
* 56 A The purse falls.
57 A She is smiling.
58 D ABIGAIL: Walter.
59 D SEUN: Grandma, don't.
* 60 A ¶ The lights die.
* 61 A Total dark.
* 62 A Footsteps.
* 63 A A scrape of metal.
* 64 A ¶ Light snaps back.
* 65 A The table is empty.
* 66 A The sheet lies folded at the foot.
67 A ¶ Kenji laughs, high and cracked.
68 A Hollis grabs him by the shoulder.
69 A He stops.
70 A ¶ The Reverend lowers his Bible.
71 A Marguerite is staring at the wet footprints that lead across the tile to the open back door.
72 A ¶ Abigail is gone.
73 A Seun runs after her into the night.

### SCENE s01274 | INT. ICE CAVE - DAY
Detected names (may be incomplete or contain aliases): HANNELORE KAST, BJORN STAAL, OTIENO MWANGI, PRIYA RAMAKRISHNAN, TOMASZ WIERZBA
* 1 A ¶ Blue walls.
* 2 A A low ceiling of glacier.
* 3 A Meltwater drips into a black pool.
4 A ¶ HANNELORE KAST, 50s, expedition leader, frostbitten nose, sits by a dying camp stove.
5 A She wears three jackets.
6 A ¶ BJORN STAAL, 30s, burly, one arm in a makeshift sling, leans on the wall beside her.
7 A ¶ OTIENO MWANGI, 20s, climber, sleeps with his head on his pack.
8 A ¶ PRIYA RAMAKRISHNAN, 40s, doctor, kneels over a med kit.
9 A She counts bandages.
10 A ¶ TOMASZ WIERZBA, 60s, the oldest of them, grey beard crusted with ice, stares at the cave mouth.
11 D HANNELORE: Weather window?
12 D TOMASZ: Closing. The wind has turned.
13 D HANNELORE: How long?
14 D TOMASZ: Two hours. Maybe three.
15 D BJORN: Enough to walk out?
16 D TOMASZ: Enough to walk out if you are young and have two arms.
17 D BJORN: I have one and a half.
18 D PRIYA: You have one and a fracture. Stay put.
19 D HANNELORE: We stay together. We always said that.
20 D TOMASZ: We said many things in the base camp.
21 D HANNELORE: Tomasz.
22 D TOMASZ: I am old, Hanne. I have seen this mountain take better people than us. But it does not like to be stared at. If we leave now, it lets us go.
23 D PRIYA: And Otieno?
24 D TOMASZ: He can walk. Wake him gently.
25 D BJORN: What about the sled?
26 D PRIYA: I will pull the sled.
27 D BJORN: You're half my size.
28 D PRIYA: I am twice your sense.
29 D HANNELORE: Enough. Pack. Everything useful, nothing sentimental.
* 30 A ¶ A distant THRUM.
* 31 A Rotors.
32 A ¶ They all look up.

### SCENE s01275 | INT. BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): LEAGUE FINALS, COACH DELPHINE MARCHAND, GRETA LINDQVIST, RUBEN ACOSTA
* 1 A ¶ Neon pins.
* 2 A A banner: LEAGUE FINALS - SPARE ME LANES.
* 3 A Most of the crowd has gone home.
* 4 A Lane 12 is lit.
5 A ¶ COACH DELPHINE MARCHAND, 50s, silver bob, orange cardigan, sits with a clipboard on her knee.
6 A ¶ GRETA LINDQVIST, 30s, anchor bowler, towels her hands.
7 A Her shoulders are rounded in defeat.
8 A ¶ RUBEN ACOSTA, 20s, rookie, sits on the ball return with his shoes untied.
9 D DELPHINE: Tenth frame. You left the seven-ten.
10 D GRETA: I know what I left.
11 D RUBEN: It was a hard split.
12 D DELPHINE: It was the hardest split.
13 D GRETA: I shouldn't have gone for it.
14 D DELPHINE: You went for it because it was there.
15 D RUBEN: She was winning on pins, Coach.
16 D GRETA: Don't defend me.
17 D DELPHINE: Ruben, let her talk.
18 D RUBEN: I'm just saying.
19 D GRETA: Eleven years I've been bowling with this team. Eleven.
20 D DELPHINE: Twelve.
21 D GRETA: Twelve. And in twelve years we've never won the final. Not once. And I stood up there tonight and I thought, this is it, this is the one.
22 D RUBEN: You were incredible in the eighth.
23 D GRETA: I was incredible in the eighth. I was terrible in the tenth. That's the whole story.
24 D DELPHINE: It isn't the whole story.
25 D GRETA: It's the only part they'll remember.
26 D DELPHINE: Greta.
27 D GRETA: Delphine, please. I need to say this without you being kind to me.
28 D DELPHINE: All right.
29 D GRETA: I'm thirty-four. My wrist hurts when it rains. My daughter wants me to quit and take her to the lake.
30 D RUBEN: Don't quit.
31 D GRETA: Ruben, you've been here six months.
32 D RUBEN: Don't quit.
33 D DELPHINE: He's right. Stay.
34 D GRETA: You want me to stay because you have no one else.
35 D DELPHINE: I want you to stay because you are the best bowler I've ever coached, and I've coached some very good ones.
36 D RUBEN: She really is.
37 D GRETA: Neither of you is helping.
38 D DELPHINE: We aren't trying to help. We're trying to tell you the truth.
39 D RUBEN: What's the truth?
40 D DELPHINE: The truth is that nobody wins the seven-ten.
41 D GRETA: Somebody has to.
42 D DELPHINE: Somebody has, twice, in the history of the sport. And both of them cried afterward.
43 D RUBEN: Why?
44 D DELPHINE: Because it doesn't feel like winning. It feels like surviving.
45 D GRETA: Is that what this is? Surviving?
46 D DELPHINE: Twelve years, Greta. You're still standing.
47 D RUBEN: I'll buy the nachos.
48 D GRETA: You don't have to buy the nachos.
49 D RUBEN: I'm buying the nachos.
50 D DELPHINE: Get extra cheese.
51 D GRETA: And jalapenos.
52 D RUBEN: That I can do.
53 D DELPHINE: And next season?
54 D GRETA: Next season we try again.
55 D DELPHINE: That's all I wanted to hear.
56 D GRETA: Don't gloat.
57 D DELPHINE: I'm not gloating. I'm planning.
58 D RUBEN: Planning what?
59 D DELPHINE: Everything. Starting with how to teach a rookie to tie his shoes.
60 D RUBEN: I know how to tie my shoes!
61 D GRETA: Then do it.
62 A ¶ He looks down.
* 63 A The laces are knotted together.
64 A He groans.
65 A They laugh.
* 66 A First time all night.

### SCENE s01276 | INT. PULLMAN DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS WHITCOMB, HORTENSE BELLWEATHER, SAUL RIVLIN, MISS CORDELIA PYE, AUGUSTUS FLOYD
* 1 A ¶ 1927.
* 2 A Snow hammers the windows.
* 3 A The train has stood motionless for nine hours.
* 4 A Brass lamps, white linen, a chandelier that sways in the wind.
5 A ¶ ELIAS WHITCOMB, 60s, banker, silver mustache, sits stiffly at the head table.
6 A A glass of brandy untouched before him.
7 A ¶ HORTENSE BELLWEATHER, 50s, in black bombazine and pearls, knits a long grey scarf.
8 A ¶ DR. SAUL RIVLIN, 40s, rumpled tweed, smokes a pipe by the window.
9 A ¶ MISS CORDELIA PYE, 20s, a schoolteacher in a modest blue frock, sits with a book she isn't reading.
10 A ¶ AUGUSTUS FLOYD, 50s, the porter, stands by the pantry door with a silver coffee pot.
11 D FLOYD: Coffee, ladies and gentlemen?
12 D WHITCOMB: Nine hours, porter. When do we move?
13 D FLOYD: Conductor says dawn, sir.
14 D WHITCOMB: Conductor said midnight.
15 D HORTENSE (muttering): Conductors say a great many things.
16 D CORDELIA: Mrs. Bellweather, I think it's very cozy.
17 D HORTENSE: Cozy is a word for people who have never missed a funeral.
18 D RIVLIN: Is it your funeral, madam?
19 D HORTENSE: My sister's. Tomorrow at noon. In Chicago.
* 20 A ¶ Silence.
* 21 A The chandelier creaks.
22 D WHITCOMB: Floyd, bring me a telegraph form.
23 D FLOYD: The wires are down, sir.
24 D WHITCOMB: Then bring me a pencil and I shall write a letter to the president of this railroad.
25 D RIVLIN: And how shall it be delivered, Mr. Whitcomb?
26 D WHITCOMB: By a man with a sled and a sense of duty.
27 D RIVLIN: There isn't one.
28 D WHITCOMB (to himself): There never is.
29 D HORTENSE: Mr. Whitcomb, if you complain once more I shall put this scarf round your neck and pull.
30 D WHITCOMB: I beg your pardon!
31 D HORTENSE: You heard me.
32 D CORDELIA: Please. Please, both of you. It's only snow.
33 A ¶ Whitcomb rises.
* 34 A Chair SCRAPES.
35 D WHITCOMB: Only snow! My daughter weds in Chicago tomorrow. I have not missed a day of work in thirty years. I have never been late for anything.
36 D HORTENSE: And I have never been early for anything. Sit down.
37 D WHITCOMB: I shall not sit down!
38 D RIVLIN: He's shouting at the weather, Mrs. Bellweather. Let him.
39 D WHITCOMB: I am shouting at you, Doctor! You, with your pipe and your sneer.
40 D RIVLIN: I sneer only at men who deserve it.
41 D WHITCOMB: Deserve it!
42 D HORTENSE: Deserve it, indeed.
43 D WHITCOMB: Deserve it? I built half the railroad this train runs on!
44 D HORTENSE: Then you built it badly.
45 D FLOYD: Sir, ma'am, please. The other passengers.
46 D WHITCOMB: What other passengers? We are four, and a porter!
47 D HORTENSE: Five, Mr. Whitcomb, if you count the dignity you've misplaced.
48 D WHITCOMB (to the room): I will not be insulted by a knitting widow.
49 D RIVLIN: She's not a widow. She's a sister in mourning.
50 D HORTENSE: I thank you, Doctor.
51 A ¶ Whitcomb slams his hand on the table.
* 52 A The brandy topples.
* 53 A Amber spreads across the white linen.
* 54 A ¶ The room freezes.
* 55 A Even the wind seems to hold its breath.
56 D CORDELIA (softly): Mr. Whitcomb. You're shaking.
57 A ¶ He looks at his hand.
58 A Then at the stain.
59 A The anger drains.
60 D WHITCOMB: My wife died on a train.
* 61 A ¶ No one speaks.
62 A Floyd sets the coffee pot down, very gently.
63 D WHITCOMB [CONT'D]: Thirty years ago. In the snow.
64 D HORTENSE: I did not know.
65 D WHITCOMB: No one does.
66 A ¶ Hortense sets down her knitting.
67 A She reaches across the table and lays the unfinished scarf in front of him.
68 D HORTENSE: Then it's yours. It will be cold in Chicago.

### SCENE s01277 | INT. 24-HOUR LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS MENDEZ, KAI MENDEZ-HART
* 1 A ¶ 3 A.M. Fluorescent hum.
* 2 A Rows of dryers tumble sneakers and sheets.
* 3 A A TV bolted to the wall plays a silent infomercial.
4 A ¶ ODALYS MENDEZ, 60s, small, upright, folds towels with ruthless precision.
5 A Her cardigan is buttoned wrong.
6 A ¶ KAI MENDEZ-HART, 19, her grandson, slumps on a plastic chair, duffel bag at his feet.
7 A Hood up.
8 D ODALYS: You could help.
9 D KAI: I'm tired, Abuela.
10 D ODALYS: You are nineteen. Tired is for people with mortgages.
11 D KAI: I drove six hours.
12 D ODALYS: I did not ask you to drive six hours.
13 D KAI: You called me.
14 D ODALYS: I called you at noon. To say hello.
15 D KAI: You called at midnight. You said the dryer was making a noise.
16 D ODALYS: It was making a noise.
17 D KAI: Abuela, you don't have a dryer. You live in a retirement home.
18 D ODALYS: The retirement home has a dryer. It makes a noise.
19 D KAI: Then call maintenance.
20 D ODALYS: Maintenance does not come at midnight.
21 D KAI: Neither do I.
22 D ODALYS: And yet.
23 A ¶ Kai pulls his hood back.
24 A Rubs his face.
25 D KAI: Okay. Okay. What's going on?
26 D ODALYS: Nothing is going on.
27 D KAI: You're folding other people's towels.
28 D ODALYS: Someone left them. It is a waste.
29 D KAI: Abuela.
30 D ODALYS: I could not sleep.
31 D KAI: Why couldn't you sleep?
32 D ODALYS: Why do young people ask why? I could not sleep. That is a complete sentence.
33 D KAI: Is it Mom?
34 A ¶ Odalys folds a towel.
35 A Then another.
36 A She doesn't answer.
37 D KAI [CONT'D]: Did she call?
38 D ODALYS: She called.
39 D KAI: And?
40 D ODALYS: She says she is moving to Portland.
41 D KAI: She's been saying that for four years.
42 D ODALYS: This time she has a lease.
43 D KAI: Oh.
44 D ODALYS: Yes. Oh.
45 D KAI: Did she say anything about me?
46 D ODALYS: She said you are welcome.
47 D KAI: Welcome to what?
48 D ODALYS: To come. To Portland. To live there. She says there is a room.
49 D KAI: There's always a room, Abuela. Then there isn't.
50 D ODALYS: That is your mother.
51 D KAI: That is my mother.
* 52 A ¶ A dryer BUZZES.
53 A Neither moves.
54 D ODALYS: Do you want to go?
55 D KAI: To Portland?
56 D ODALYS: To Portland.
57 D KAI: I don't know. I have school. I have a job.
58 D ODALYS: You have a job at a pizza place.
59 D KAI: It's a good pizza place.
60 D ODALYS: It is a very good pizza place. I have eaten the pizza.
61 D KAI: Then you know.
62 D ODALYS: I know that you are afraid.
63 D KAI: I'm not afraid.
64 D ODALYS: You are nineteen and your mother is leaving again. Of course you are afraid.
65 D KAI: You're not.
66 D ODALYS: I am eighty years old. I have no time left to be afraid. It is a luxury.
67 D KAI: You're sixty-eight.
68 D ODALYS: Eighty in my heart.
69 D KAI: That's not how that works.
70 D ODALYS: In my house it is exactly how it works.
71 D KAI: Your house is a retirement home.
72 D ODALYS: In my heart it is a house.
73 A ¶ He laughs.
74 A Wet, surprised.
75 A She smiles, small, and doesn't look at him.
76 D KAI: Why are we here, Abuela?
77 D ODALYS: Because the machines are warm.
78 D KAI: That's it?
79 D ODALYS: That is it. It is three in the morning. Everywhere else is cold.
80 D KAI: Okay.
81 D ODALYS: Okay.
82 D KAI: Can I help fold?
83 D ODALYS: Finally.
84 D KAI: Show me.
85 D ODALYS: Thirds. Then thirds again. You do not crush them. You are making a promise.
86 D KAI: A promise?
87 D ODALYS: That someone will be warm tomorrow.
88 A ¶ Kai picks up a towel.
89 A She hands him another.
90 A They fold in silence.
91 D KAI: Like this?
92 D ODALYS: Closer.
93 D KAI: Like this?
94 D ODALYS: Yes. Like that.
95 D KAI: You're gonna be okay, right?
96 D ODALYS: Mijo. I have always been okay. It is the rest of you I worry about.
* 97 A ¶ The dryer BUZZES again.
98 A She nods at it.
99 D ODALYS [CONT'D]: That one is done.
100 D KAI: I'll get it.
101 A ¶ He does.

### SCENE s01278 | INT. FERRY TICKET BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): ODETTE ARMSTRONG
* 1 A ¶ A glass box at the end of a pier.
* 2 A A single brass lamp.
* 3 A Rain slides down the windows.
* 4 A Outside, the last ferry's lights shrink into fog.
5 A ¶ ODETTE ARMSTRONG, 60s, uniform cap, spectacles on a chain, sits at a worn desk.
* 6 A Before her: a cassette recorder, the kind with piano keys.
* 7 A A thermos.
8 A ¶ She presses PLAY.
9 D ODETTE [V.O.] (recorded, younger, warm): Testing. Testing. This is Odette Armstrong, ticket agent, Pier Nine. If you're hearing this, I've either retired or I've lost my mind.
10 A ¶ She smiles.
11 A Stops the tape.
12 A Rewinds a little.
13 A Plays again.
14 D ODETTE [V.O., CONT'D] (recorded): Thirty years on this pier. I want to record what I remember. The first fare I ever sold was a dollar twenty.
15 A ¶ She pours tea.
16 A Her hand trembles slightly.
17 D ODETTE [V.O., CONT'D] (recorded): The worst winter was '88. The ice stopped everything. I slept in this booth for three nights. I was happier than I'd ever been.
18 A ¶ She stops the tape.
19 D ODETTE (to herself): Happier.
20 A ¶ She looks at the empty pier.
* 21 A At the dark water.
22 A ¶ She presses PLAY.
23 D ODETTE [V.O., CONT'D] (recorded): If I could tell the person listening one thing, it would be this. Don't wait for the boat. The boat always leaves.
* 24 A ¶ The thermos lid falls.
* 25 A Rolls across the floor.
26 A She doesn't pick it up.
27 D ODETTE [V.O., CONT'D] (recorded): Go to the pier before the boat. Go to the sea before the pier.
28 A ¶ Her jaw tightens.
29 A She stabs the STOP key.
* 30 A The click echoes.
31 A ¶ She stands.
32 A Pulls the uniform cap from her head.
33 A Looks at it.
34 D ODETTE: Thirty years.
35 A ¶ She hurls the cap against the glass.
* 36 A It bounces off.
* 37 A Falls.
38 A ¶ She tears the cassette from the machine, raises it to smash it, and stops.
39 A Her chest heaves.
40 A ¶ Slowly, she slides it into her breast pocket.
41 A Picks up the cap.
42 A Sets it on the desk.
43 A ¶ She switches off the lamp.
* 44 A Dark.
* 45 A Rain.
46 D ODETTE [CONT'D]: Go to the sea.
47 A ¶ She pushes open the door.
* 48 A Fog pours in.
49 A She steps out onto the pier.

### SCENE s01279 | EXT. SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): BEA, LONGSTREET, MANNY, CRUZ, SIGRID OLSEN, DARIUS KHAN, PERRY, NDLOVU
* 1 A ¶ A white plain to the horizon, cracked in hexagons, shimmering with mirage.
* 2 A In the middle stands a dead jeep, hood up, its shadow a small black pool.
3 A ¶ BEATRIX "BEA" LONGSTREET, 40s, a geologist with a sunburnt nose and a scarf wound over her hair, stands on the jeep's bumper, scanning the horizon with binoculars.
4 A ¶ MANUEL "MANNY" CRUZ, 30s, the driver, sits in the shade of the open door, a dry canteen upturned in his hand.
5 A ¶ SIGRID OLSEN, 20s, a graduate student, lies on the flat, hat over her face.
6 A Her lips are cracked white.
7 A ¶ DARIUS KHAN, 50s, a photographer, trudges back from the dune with a camera bag over each shoulder, as though weight alone could anchor him.
8 A ¶ At the edge of the shade, PERPETUA "PERRY" NDLOVU, 70s, the guide, sits cross-legged on a folded blanket.
9 A She hums.
10 D BEA: Nothing. Not a cloud, not a bird.
11 D MANNY: Told you, Bea. Radiator's cooked.
12 D DARIUS: Manny, you said it was fine.
13 D MANNY: I said it was probably fine.
14 D DARIUS (muttering): Probably.
15 A ¶ Sigrid lifts the hat.
16 D SIGRID: How long since the last water?
17 D BEA: Two hours.
18 D SIGRID: How long can we last?
19 D PERRY: Three days, child. Maybe four if we stop quarrelling.
20 D DARIUS: Perry, with respect, we've been out here since dawn.
21 D PERRY: And we shall be here until someone comes. Sit, Darius. You waste your sweat.
22 D MANNY: He wastes my patience.
23 D DARIUS: I waste nothing!
24 D BEA: Stop. Both of you.
25 D SIGRID: I think I saw something.
26 A ¶ Everyone turns.
27 A She points.
* 28 A A glint, east, wavering.
29 D BEA: Where?
30 D SIGRID: There, Bea! Past the dunes!
31 D DARIUS: Mirage, Sigrid.
32 D PERRY: Mirage, child.
33 D MANNY: It moves.
34 D BEA: It's moving toward us.
* 35 A ¶ Beat.
* 36 A A faint DRONE.
* 37 A Not an engine.
* 38 A Wind in the flats.
39 D SIGRID: It's a truck. It has to be a truck.
40 D DARIUS: It's a mirage, Sigrid. It's heat on salt.
41 D PERRY: Sigrid. Hand me the binoculars.
42 A ¶ She does.
43 A Perry lifts them, calm.
44 A Everyone watches her face.
45 D PERRY [CONT'D]: It is a man on a camel.
46 D MANNY: A camel?
47 D PERRY: He is very slow.
48 D BEA: Perry, how long?
49 D PERRY: Until he is here? Perhaps one hour. Perhaps never. The camel is thinking.
50 A ¶ Laughter, cracked.
51 A Darius sits.
52 A Sigrid wipes her eyes.
53 A Manny drops the canteen and covers his face.
54 D BEA: Okay. Okay. We wait.
55 D MANNY: We wait.
56 D DARIUS: We wait.
57 D PERRY (softly): We wait.
* 58 A ¶ The shape on the horizon grows.
* 59 A Slowly.
60 A A man.
* 61 A An animal.
* 62 A A long shadow across the white.

### SCENE s01280 | INT. SPIRAL STAIRWELL INSIDE A GIANT TORTOISE SHELL - NIGHT
Detected names (may be incomplete or contain aliases): ISOLDE VARN, BRANWEN TOLL, CADOC, PIP MARROW
* 1 A ¶ The stairs wind through bone the colour of old ivory.
* 2 A Lanterns of green fire hang from hooks.
* 3 A Somewhere above, a vast slow heartbeat.
* 4 A Every third beat, the walls tremble.
5 A ¶ ISOLDE VARN, 30s, in a ranger's grey cloak, climbs with one hand on the rail.
6 A A silver knife at her belt.
7 A She does not look back.
8 A ¶ BRANWEN TOLL, 60s, the lamp-keeper, follows, sleeves smelling of smoke.
9 A She carries the only key.
10 A ¶ CADOC, 20s, a boy with ink on his fingers and a satchel too big for him, stops to touch the wall.
* 11 A The bone warms under his palm.
12 A ¶ PIP MARROW, 40s, a tinker with a hundred small bells sewn into his coat, brings up the rear.
* 13 A Each step jingles.
14 A He keeps trying to quiet them.
15 D BRANWEN: Pip. The bells.
16 D PIP: I'm stuffing them, Mother Toll.
17 D BRANWEN: Stuff them harder.
* 18 A ¶ The heartbeat THUDS.
* 19 A Dust sifts from the ceiling.
20 A Everyone stops.
21 A Isolde's hand drifts to her knife.
22 D CADOC: Isolde, it knows we're here.
23 D ISOLDE: It always knew.
24 A ¶ She climbs.
25 A After a moment the others follow.
26 D CADOC: You said it was asleep.
27 D ISOLDE: I said it was old.
28 A ¶ She does not meet his eyes.
29 A She taps the rail twice, a habit, a prayer.
30 D BRANWEN (to the stair, under her breath): Steady, old girl. Steady.
31 D PIP: Who's she talking to?
32 D CADOC: The shell.
33 D PIP: Does it answer?
34 D CADOC: Sometimes.
35 A ¶ They reach a landing.
* 36 A A door of black wood, banded in iron.
37 A Isolde pauses.
38 A She holds out a hand without looking.
39 A Branwen puts the key in it.
* 40 A ¶ The key does not turn.
41 D ISOLDE: Cadoc.
42 D CADOC: Yes?
43 D ISOLDE: Your hands.
44 A ¶ He steps up.
45 A Presses his inky palm against the lock.
* 46 A The iron sighs.
* 47 A Bolts slide.
48 D BRANWEN: Everyone, stay behind the line.
49 A ¶ Pip shuffles back.
* 50 A A single bell chimes, high and clear.
* 51 A ¶ The heartbeat stops.
* 52 A ¶ Nobody breathes.
* 53 A A long moment.
* 54 A The lanterns gutter.
* 55 A ¶ Then, from beyond the door, a sound like a very large animal clearing its throat.
* 56 A Gentle.
* 57 A Almost polite.
58 D ISOLDE (to the door): We've come to ask a favour.
* 59 A ¶ The door swings open on warm dark.
* 60 A The scent of rain and old coins pours out.
61 A ¶ Isolde lowers her knife.
62 A Branwen lets out a breath she has held for forty years.
63 D CADOC: Isolde?
64 D ISOLDE: Go on.
65 A ¶ He goes first.

### SCENE s01281 | INT. NOTARY'S OFFICE - DAY
Detected names (may be incomplete or contain aliases): GLORIA TANAKA-REYES, LEONARD FITCH, ZEKE
* 1 A ¶ A cramped room above a dry cleaner.
* 2 A Steam pipes bang.
* 3 A A wall calendar shows a lighthouse.
* 4 A One desk, three chairs, a stack of papers between them.
5 A ¶ GLORIA TANAKA-REYES, 50s, in a navy suit, sits rigid, hands flat on the desk.
6 A ¶ LEONARD FITCH, 60s, the notary, adjusts his bow tie and squints at the will.
7 A ¶ EZEKIEL "ZEKE" TANAKA-REYES, 30s, her younger brother, slumps in the third chair, jiggling his knee.
8 D LEONARD: The house goes to the surviving child.
9 D GLORIA: There are two of us.
10 D LEONARD: The surviving child who occupied the house for the last five years.
11 D ZEKE: That's me.
12 D GLORIA: That's you because I was working.
13 D ZEKE (to Leonard): I was there when she fell.
14 D GLORIA (to the room): We were all there when she fell.
15 D ZEKE (under his breath): Not you.
16 D GLORIA: Say that again.
17 D LEONARD: Please. The language of the will is clear.
18 D GLORIA: Then read the clause about the debts.
19 D LEONARD: The debts also go to the occupant.
20 D ZEKE: Wait, what debts?
21 A ¶ Leonard slides a page across.
22 A Zeke stares at it.
23 A His knee stops.
24 D ZEKE [CONT'D] (to himself): Oh, Mama. What did you do.

### SCENE s01282 | INT. ORBITAL GREENHOUSE - ARTIFICIAL DAY
Detected names (may be incomplete or contain aliases): ANJALI VERMA, KOFI BAAH, LENKA HORVAT, SOLOMON ECK
* 1 A ¶ A long curved hall of racks and tubes.
* 2 A Green leaves in violet grow-light.
* 3 A Condensation beads on every pipe.
* 4 A Earth hangs in the viewport, small and blue.
5 A ¶ ANJALI VERMA, 50s, the commander, silver-haired, stands at the central console.
6 A Her coveralls are stained with soil.
7 A ¶ KOFI BAAH, 30s, botanist, kneels at a rack of wilted tomato vines.
8 A He holds a leaf up to the light.
9 A ¶ LENKA HORVAT, 40s, engineer, hangs upside-down from a ceiling rail.
* 10 A A toolkit floats beside her.
11 A ¶ SOLOMON ECK, 60s, the crew's cook, sits alone in the corner with a mug of tea, watching them.
* 12 A ¶ The ventilation fans RATTLE and slow.
* 13 A Then they stop.
14 D ANJALI: Status.
15 D LENKA: Fans three through seven are dead.
16 D KOFI: That's the whole east wing.
17 D ANJALI: Can you fix it?
18 D LENKA: Maybe. I need twenty minutes.
19 D SOLOMON (to no one): We don't have twenty minutes.
20 D ANJALI: Solomon?
21 D SOLOMON: Oxygen scrubbers. Ask me how I know.
22 A ¶ She does not.
23 A She taps the console.
* 24 A Red text flickers.
25 D ANJALI: Everyone, listen. We're going to move the plants to the west wing. One rack at a time. Kofi, you're lead.
26 D KOFI: Understood.
27 A ¶ He rises.
28 A He pulls a rack toward the hatch.
* 29 A It sticks.
30 A He braces his boot and heaves.
* 31 A It slides.
32 A ¶ Lenka drops from the rail, grabs the opposite side.
33 A Together they push.
34 A ¶ Solomon puts down his mug.
35 A He joins them without a word.
36 A ¶ Anjali watches them move.
37 A She exhales.
38 D ANJALI [CONT'D] (to herself): Thank God for stubborn people.
39 D LENKA: What was that?
40 D ANJALI: Nothing.
* 41 A ¶ The fans cough back to life.
* 42 A A low whir.
* 43 A Fresh air stirs the leaves.
44 D KOFI: Lenka?
45 D LENKA: I didn't touch anything.
46 D SOLOMON: Maybe it likes us.
47 D ANJALI: It's a greenhouse, Solomon.
48 D SOLOMON: So it's alive.
49 A ¶ She smiles.
50 A She shakes her head.
* 51 A The viewport blue glows over all four.

### SCENE s01283 | INT. CARGO SHIP SICK BAY - NIGHT
Detected names (may be incomplete or contain aliases): REUBEN ABARA, FELIX
* 1 A ¶ A steel cabin the size of a closet.
* 2 A A table bolted to the floor.
* 3 A Storm light flickers.
* 4 A The hull groans.
5 A ¶ DR. REUBEN ABARA, 40s, a ship's physician in a bloody apron, presses a pad to the wound in an unconscious sailor's side.
* 6 A The ship pitches.
* 7 A Instruments skid across the tray.
8 A He pins them with an elbow, clamps a vessel with his free hand, and wipes his brow on his shoulder.
* 9 A ¶ An intercom speaker crackles on the wall.
10 D FELIX [V.O.] (crackling): Sick bay, bridge. Doc, how is he?
11 A ¶ Reuben leans toward the speaker without lifting his hands.
12 D REUBEN: Bleeding. Lung's punctured. I need him on a ventilator and you've given me a bicycle pump.
13 D FELIX [V.O.]: Nearest port is eleven hours.
14 D REUBEN: He doesn't have eleven hours, Felix.
15 D FELIX [V.O.]: I know. I'm the second mate. I'm the one who found him.
* 16 A ¶ Static.
17 A Reuben reaches for a long needle and a loop of tubing.
* 18 A A wave slams the hull.
* 19 A The lamp swings.
20 A Reuben shields the wound with his body, then straightens, blood on his forearm, and steadies the table with his knee.
21 D REUBEN: Felix. Can you hold her steady?
22 D FELIX [V.O.]: She's a cargo ship in a gale. She'll do what she wants.
23 D REUBEN: Then pray.
24 D FELIX [V.O.]: Doc, I haven't prayed since '09.
25 D REUBEN: Start.
26 A ¶ He slides the needle between the ribs.
* 27 A A wet hiss of air.
28 A Colour floods the sailor's face.
29 A He breathes, deep and even.
30 D FELIX [V.O.]: Doc? Doc, I heard that. Is he...
31 D REUBEN: He's breathing.
* 32 A ¶ A long silence on the line.
33 A Then, thin and cracked, a laugh.
34 D FELIX [V.O.]: Good. Good. I'll tell the captain.
35 A ¶ Reuben slumps against the bulkhead.
36 A Slides down it until he sits on the deck, hands loose between his knees, blood drying on his cuffs.
37 D REUBEN (to himself): Eleven hours.
38 D FELIX [V.O.]: Doc?
39 D REUBEN: Nothing. Keep her steady, Felix.

### SCENE s01284 | INT. NATURAL HISTORY MUSEUM - TAXIDERMY HALL - NIGHT
Detected names (may be incomplete or contain aliases): NIGHT GUARD, WOMAN, BARNABY
* 1 A ¶ Glass cases.
* 2 A A stuffed polar bear rears in the centre.
* 3 A Glass eyes catch the exit-sign glow.
4 A ¶ A NIGHT GUARD, 60s, soft belly, thermos in hand, shuffles down the aisle.
5 A He pauses at the bear.
6 A Pats its paw.
7 D NIGHT GUARD: Evening, Boris.
* 8 A ¶ A creak behind him.
9 A He turns.
10 A ¶ A WOMAN in a grey coat stands between two cases.
11 A Calm.
12 A Hands in pockets.
13 D NIGHT GUARD [CONT'D]: Ma'am. We're closed.
14 D WOMAN: I know.
15 D NIGHT GUARD: Then how did you...
16 D WOMAN: You let me in. At six. When I said I'd left my glasses.
17 A ¶ He frowns.
18 A Looks at the bear.
19 A Looks back.
20 D NIGHT GUARD: Right. Right, I remember. Thought you'd gone.
21 D WOMAN: I thought you'd gone.
22 A ¶ She smiles.
23 A Steps closer.
24 A He sips from the thermos.
25 A His shoulders loosen.
26 D NIGHT GUARD: Well. Take your time. Find 'em?
27 D WOMAN: Not yet.
28 A ¶ She walks past him, trailing a hand along the glass.
29 A Stops at the bear.
30 A Reaches into its open jaw.
31 A Withdraws a small silver key.
32 D NIGHT GUARD: Hey. What's that?
33 A ¶ The Woman turns.
34 A Her smile is gone.
35 D WOMAN: Barnaby. Sit down.
36 A ¶ He sits, heavily, on the bench.
37 D BARNABY: How do you know my name?
38 D WOMAN: You told me at six.
39 D BARNABY: I didn't.
40 D WOMAN: You wouldn't remember. It was in the tea.
41 D BARNABY: Who are you?
42 D WOMAN: Nell.
43 A ¶ Barnaby's thermos slides from his hand.
* 44 A Hits the floor.
45 A Nell steps over it.
* 46 A The bear's eyes gleam.

### SCENE s01285 | INT. SELF-SERVE CAR WASH BAY - DAWN
Detected names (may be incomplete or contain aliases): IGNATIUS PELL, LO, BANKS
* 1 A ¶ Concrete.
* 2 A Pressure hoses coiled on hooks.
* 3 A Cold sun leaks through the open bay door and lights the soap suds on the floor.
4 A ¶ DET. IGNATIUS PELL, 50s, heavy coat, mustard stain on his tie, leans against a wet wall.
5 A A cardboard coffee in each hand.
6 A ¶ LORETTA "LO" BANKS, 30s, nurse's scrubs under a puffy jacket, hair in a hasty bun, stands by the quarter-slot machine.
7 A Her hands are shoved deep in her pockets.
8 D PELL: Thanks for coming.
9 D LO: You said it was about my brother.
10 D PELL: It is.
11 A ¶ He holds out a coffee.
12 A She doesn't take it.
13 D LO: He's in Ohio.
14 D PELL: He was.
15 D LO: What does that mean?
16 D PELL: Lo.
17 D LO: Don't "Lo" me.
18 A ¶ Pell sets the coffee on the machine.
19 A Opens his coat.
20 A Pulls out a thin folder.
21 D PELL: Found a car three days ago. Under a bridge by Dunmore.
22 D LO: So?
23 D PELL: Plates were Ohio. Registered to Darnell Banks.
* 24 A ¶ Silence.
* 25 A Water drips.
26 D LO: He sold that car.
27 D PELL: Not according to the DMV.
28 D LO: Then someone stole it.
29 D PELL: Someone did. The keys were in the ignition.
30 A ¶ She walks to the wall.
31 A Presses her forehead against the cold tile.
32 D LO: Was he in it?
33 D PELL: No.
34 D LO: Then what do you want from me?
35 D PELL: His phone pinged a tower four blocks from your apartment. Tuesday night.
36 A ¶ She turns, slowly.
37 A Her face has changed.
38 D LO: Tuesday.
39 D PELL: Tuesday. Around eleven.
40 D LO: I was on shift.
41 D PELL: Until?
42 D LO: Seven.
43 D PELL: Then who let him in?
44 D LO: Nobody let him in.
45 D PELL: Lo.
46 A ¶ She snatches the coffee.
47 A Hurls it at the wall.
* 48 A It EXPLODES brown against the tile, hot, steaming.
49 D LO: He's my brother! He's the only family I have, and you come at dawn with a folder and a face like a funeral!
50 D PELL: I'm trying to find him.
51 D LO: You're trying to find me.
52 A ¶ He doesn't deny it.
53 A He just stands there, coffee dripping down the wall behind her.

### SCENE s01286 | EXT. SUNNYBROOK PETTING ZOO - DAY
Detected names (may be incomplete or contain aliases): BIRTHDAY CLOWN, TEDDY, PRIYANKA DESHMUKH, DOLORES SWAN, GERALD
* 1 A ¶ Hay bales.
* 2 A A painted red barn.
* 3 A A banner reads HAPPY 7TH BIRTHDAY, TEDDY!
* 4 A Beneath it, a crowd of parents with phones.
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
* 28 A The sword POPS.
29 A The goat CHARGES.
30 A ¶ Gerald bolts across the yard, wig flying, shoes flapping.
31 A Priyanka drops the clipboard.
32 A Dolores drops the rake and sprints after the goat, shouting.
33 A Teddy bursts into laughter and runs after all of them, crown bouncing.
* 34 A The parents' phones come up like a field of tiny cameras.
35 D GERALD [CONT'D] (over his shoulder): Is that a good goat?!
36 D DOLORES: That's a goat!
37 A ¶ Gerald vaults a hay bale and lands face-first in the pen.
38 A The goat skids to a stop.
39 A Sniffs his wig.
40 A Eats it.
* 41 A ¶ Silence.
* 42 A Then applause.
43 D TEDDY: Best birthday ever!
44 A ¶ Gerald lies in the straw, hairless, beaming.

### SCENE s01287 | EXT. MANGROVE SWAMP - DUSK
Detected names (may be incomplete or contain aliases): ELSPETH GRAY, WANJIRU KARIUKI, HENRIK DAHL, YUSUF AL-RASHID
* 1 A ¶ Roots like knuckles.
* 2 A Black water, glassy, ringed with mosquitoes.
* 3 A A heavy sky bruised orange and green.
* 4 A The air tastes of rot and salt.
5 A ¶ Four people wade single file, waist-deep.
* 6 A Packs held over their heads.
7 A ¶ ELSPETH GRAY, 50s, in a drenched canvas hat, leads.
8 A Her face is lined, sunburnt, patient.
9 A She tests each step with a bamboo pole.
10 A ¶ WANJIRU KARIUKI, 30s, close behind, wears a field vest with too many pockets.
11 A Her braid is plastered to her neck.
12 A She carries the sat-phone, dead for three days.
13 A ¶ HENRIK DAHL, 40s, tall and blond, grey with fever, stumbles through the rear.
14 A His glasses are cracked.
15 A ¶ YUSUF AL-RASHID, 20s, the youngest, carries Henrik's pack as well as his own.
16 A He grins when he thinks no one's watching.
17 D ELSPETH: Roots ahead. Step high.
18 D WANJIRU: How far to the river?
19 D ELSPETH: Two miles. Maybe three.
20 D WANJIRU: Maybe is an expensive word.
21 D ELSPETH: It's the only one I've got.
22 A ¶ She plants her pole.
* 23 A Water ripples around her thighs.
24 A She stops.
25 D ELSPETH [CONT'D]: Stay still.
26 A ¶ They do.
* 27 A A long beat.
* 28 A Frogs fall silent.
29 A ¶ Something large breaks the surface twenty feet away.
30 A A dark ridge, a pair of eyes.
31 A It glides toward the nearest root and slides beneath it.
* 32 A ¶ Nobody breathes.
33 D YUSUF (whispering): Is it a log?
34 D ELSPETH: It's not a log.
35 D YUSUF: Is it going to eat us?
36 D WANJIRU: It's been eating the whole way. We're just the dessert.
37 D HENRIK (hoarse): Wanji.
38 D WANJIRU: Henrik. Don't talk.
39 D HENRIK: I need to sit.
40 D WANJIRU: You can't sit. It's a swamp.
41 D HENRIK: I'm going to sit anyway.
42 D YUSUF: I've got him.
43 A ¶ He braces Henrik.
44 A Elspeth glares at the root where the shape vanished.
45 A She waves a hand: forward.
46 A ¶ They move.
47 A Slowly, silently, a procession of damp shadows across the dusk.
48 D ELSPETH: Single file. Keep to the left bank. The right is deeper.
49 D WANJIRU: How do you know?
50 D ELSPETH: I came here thirty years ago. With my husband.
51 D WANJIRU: What happened?
52 D ELSPETH: He went to the right bank.
* 53 A ¶ Nobody asks more.
* 54 A ¶ They wade on.
55 A Henrik coughs, a cracked wet sound.
56 A Yusuf pats his back.
57 A Wanjiru adjusts the sat-phone on her shoulder.
58 A She tries the power switch.
* 59 A Nothing.
60 D WANJIRU [CONT'D] (under her breath): Come on. Come on.
* 61 A ¶ The sky darkens a shade.
* 62 A Fireflies bloom in the branches overhead, hundreds, drifting down like green sparks.
63 D YUSUF: It's beautiful.
64 D HENRIK: It's malaria.
65 D YUSUF: Can't it be both?
66 D HENRIK (a faint smile): Possibly.
67 D ELSPETH: Quiet now. We cross the channel in front of us. Hold hands.
68 A ¶ They link: Elspeth, Wanjiru, Yusuf, Henrik.
69 A A chain across the black water.
70 D ELSPETH [CONT'D]: On three. One. Two.
* 71 A ¶ Something SPLASHES behind them.
72 D ELSPETH [CONT'D]: Go!
73 A ¶ They plunge forward.
* 74 A Water surges to their chests.
75 A Yusuf pulls Henrik, who is half-floating.
76 A Wanjiru holds the phone high.
77 A Elspeth thrashes ahead, bamboo pole cutting a path.
78 A ¶ They reach the far bank.
79 A Haul themselves up into mud and roots.
80 A Collapse, gasping.
* 81 A ¶ Behind them, a long ripple fades across the channel.
82 D WANJIRU (laughing, crying): We made it.
83 D ELSPETH: We made the channel.
84 D YUSUF: There's more?
85 D ELSPETH: Two miles.
86 A ¶ He lies back.
87 A Stares at the sky.
* 88 A Fireflies drift across his face.
89 D YUSUF: Okay.

### SCENE s01288 | INT. LOST UMBRELLA ARCHIVE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR FINBAR HOLT, CEDRIC LOWE, MAGDA PRZYBYLSKI
* 1 A ¶ A cavernous basement beneath a railway station.
* 2 A Wooden racks stretch into darkness, each hung with hundreds of umbrellas, tagged and dated.
* 3 A A single desk lamp burns green.
* 4 A The air smells of damp wool and old rain.
5 A ¶ INSPECTOR FINBAR HOLT, 50s, tweed, wire-rimmed spectacles, stands at the desk holding a long black umbrella by its handle.
6 A He turns it slowly in the lamplight.
7 A ¶ CEDRIC LOWE, 60s, the archivist, thin, nervous, with cotton gloves, hovers by the register.
8 A He keeps wiping his palms against his trousers.
9 D HOLT: Mr. Lowe. When was this deposited?
10 D LOWE: I cannot say, Inspector. Our records--
11 D HOLT: Please try.
12 D LOWE: Tuesday, I think. Possibly Wednesday.
13 D HOLT: It is stained.
14 D LOWE: Many of them are stained.
15 D HOLT: Not with this.
16 A ¶ He tilts the umbrella.
* 17 A Along the ferrule, a dark crust.
18 A Lowe's gaze flicks to it and away.
19 D HOLT [CONT'D]: You found it on the tracks.
20 D LOWE: Platform four. After the last train.
21 D HOLT: And you did not think to call us.
22 D LOWE: It was an umbrella, Inspector. We receive eleven hundred a month.
23 D HOLT: Do you read the papers?
24 D LOWE: I... prefer the crossword.
25 D HOLT: A man was found in the signal box on Tuesday morning. Head injury. No weapon.
26 D LOWE: How dreadful.
27 D HOLT: You seem calm.
28 D LOWE: I am a calm man.
29 D HOLT: Mr. Lowe, I think you are afraid.
30 A ¶ Lowe says nothing.
31 A Holt lays the umbrella on the desk like a body on a slab.
* 32 A ¶ A door CREAKS at the far end of the room.
* 33 A Footsteps echo among the racks.
34 A ¶ MAGDA PRZYBYLSKI, 40s, wrapped in a wine-red coat, steps out of the dark.
35 A A leather satchel on her shoulder.
36 A Her hair is wet.
37 D MAGDA: I believe that umbrella is mine.
38 D HOLT: Is it, madam?
39 D MAGDA: I left it on the platform. On Tuesday evening.
40 D LOWE: Magda.
41 D HOLT: You know each other?
42 D LOWE (quickly): No.
43 D MAGDA (simultaneously): Yes.
44 A ¶ Holt takes off his spectacles.
45 A Cleans them on his cuff.
46 D HOLT: Then perhaps one of you will tell me whose name is on the ticket stub in the handle.
47 A ¶ Lowe's mouth opens.
48 A Magda glances at him.
49 A A look passes between them that Holt does not miss.
50 D LOWE: It's not mine.
51 D MAGDA: It's not mine.
52 D HOLT: Then whose?
* 53 A ¶ The desk lamp FLICKERS.
* 54 A In the dark, between the racks, an umbrella falls with a clatter.

### SCENE s01289 | INT. ALPINE CABLE CAR - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR BALTHAZAR GREY, MADAME SOLANGE VEIL, COLONEL RUPERT ASHBY, MISS PENELOPE DRAKE, KASIMIR NOVAK
* 1 A ¶ A glass cabin hangs mid-span between two peaks, swaying in the wind.
* 2 A Snow-ridged valley two thousand feet below.
* 3 A The machinery has stopped.
4 A ¶ INSPECTOR BALTHAZAR GREY, 50s, long grey coat, folds his hands over a silver-topped cane.
5 A ¶ MADAME SOLANGE VEIL, 60s, in sable and diamonds, clutches a jewelled handbag.
6 A ¶ COLONEL RUPERT ASHBY, 70s, ramrod straight, medals pinned to his lapel, glares through the window.
7 A ¶ MISS PENELOPE DRAKE, 20s, a nurse in a blue cape, sits on the bench with her knees together.
8 A ¶ MR. KASIMIR NOVAK, 40s, in a cheap brown suit, sweats and stares at his shoes.
9 A ¶ They all turn at once.
10 A Grey knocks his cane against the floor.
11 A Everyone else freezes.
12 D GREY: Ladies and gentlemen, I shall be brief. Someone in this cabin killed Lord Pemberton last night.
13 D ASHBY: Preposterous.
14 D GREY: His body was found in the funicular station with a needle in his neck.
15 D PENELOPE: Oh!
16 D GREY: Miss Drake, you are the only person here trained to use a hypodermic.
17 D PENELOPE: I'm a nurse, not an assassin!
18 D GREY: Of course. But you were on his floor.
19 D VEIL: So was I, Inspector. So was the Colonel.
20 D ASHBY: Madame, I take exception.
21 D VEIL: Take it, then. I saw you in the corridor at midnight.
22 D ASHBY: I was returning from the smoking room.
23 D VEIL: In your dressing gown?
24 D ASHBY: It's cold!
25 D GREY: Mr. Novak?
26 D NOVAK: I was in my room. All night.
27 D GREY: Then you will not mind if I search your jacket.
28 D NOVAK: I will!
29 D GREY: Why?
30 D NOVAK: Because there is a letter in it.
31 D GREY: From whom?
32 D NOVAK: From the dead man.
* 33 A ¶ The cabin sways.
* 34 A No one speaks.
* 35 A Wind whistles through the cables.
36 D GREY: Read it aloud, Mr. Novak.
37 A ¶ Novak draws out an envelope with trembling fingers.
38 A He opens it.
39 A His eyes move.
40 A His lips whiten.
41 D NOVAK: "Whoever finds this, forgive me. I have taken my own life, and I wish it understood that no person is to blame."
42 D PENELOPE: Suicide?
43 D GREY: No, Miss Drake. A man who writes his own suicide note does not first poison himself with a needle in the neck.
44 D ASHBY: Then the letter is forged.
45 D GREY: The letter is genuine. And that is the interesting thing.
46 D VEIL: Why?
47 D GREY: Because the handwriting is Mr. Novak's.

### SCENE s01290 | INT. DECOMMISSIONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): NOOR HAKIM, DOC, BRAGG, RAFE TOLLIVER
* 1 A ¶ A dome of peeling white plaster.
* 2 A Stars projected from a rusted machine that still works.
* 3 A Seats torn, upholstery leaking foam.
* 4 A Pigeons roost in the rafters.
5 A ¶ NOOR HAKIM, 30s, field agent, black jacket, hair tied back, crouches behind a row of seats.
6 A Pistol drawn.
7 A She is bleeding from the shoulder.
8 A ¶ ELLISON "DOC" BRAGG, 50s, ex-surgeon turned smuggler, kneels beside the projector with a bag of surgical tools.
9 A He is calm.
10 A ¶ RAFE TOLLIVER, 30s, tall, in a stained suit, lies on the central floor, one hand pressed to his ribs.
* 11 A His gun is three feet from his fingers.
* 12 A ¶ Silence.
* 13 A Stars wheel overhead.
14 D NOOR: Doc, back off.
15 D DOC: Noor, I'm trying to help.
16 D NOOR: By what? Selling him a bandage?
17 A ¶ Doc raises both hands.
18 A Rafe groans.
19 D RAFE: Noor.
20 D NOOR: Don't talk.
21 D RAFE: Noor. Look at me.
22 A ¶ She crosses to him.
23 A Kicks the gun away.
* 24 A It spins under a seat.
25 D NOOR: You shot me.
26 D RAFE: I shot at you. You moved.
27 D NOOR: That's not an excuse.
28 D DOC: Rafe, you've got a nicked lung. Breathe shallow.
29 D RAFE: Easy for you.
30 D DOC: Very easy. I'm not the one with a hole in him.
31 A ¶ Noor lowers her pistol.
32 A Doc steps forward.
33 A Rafe lunges, grabs Noor's wrist, wrenches.
* 34 A The pistol clatters.
35 A They struggle, rolling across the floor, knocking over a rusted bucket.
36 A Doc shouts and dives in.
37 A The three of them grapple in the dust beneath a thousand painted stars.
38 D DOC [CONT'D]: Stop! Both of you!
39 D NOOR: Get off me!
40 D RAFE: Let go!
41 A ¶ Doc seizes the pistol.
42 A Points it at the ceiling.
* 43 A FIRES.
* 44 A Plaster rains.
* 45 A Pigeons erupt.
46 A ¶ All three freeze.
47 D DOC: Enough.
* 48 A ¶ Nobody moves.
49 A Rafe lets go of her wrist.
50 A Noor wipes dust from her eyes.
51 D NOOR: Doc. That was the last bullet.
52 D DOC: I know.
53 A ¶ He lowers the pistol.
54 A Sets it on the floor.
55 D DOC [CONT'D]: Now let me look at both of you.
56 A ¶ Rafe drops back.
57 A Noor sits beside him, breathing hard.
* 58 A Above, a comet crosses the dome.

### SCENE s01291 | INT. ROSELLE'S WEDDING CAKE ATELIER - MORNING
Detected names (may be incomplete or contain aliases): BART, OYELARAN, CHLOE FENWICK-DASH, LUDWIK, DONNA
* 1 A ¶ A pink-walled bakery in a state of panic.
* 2 A Racks of sugar flowers, bowls of fondant, a six-tier cake on a marble counter.
* 3 A A wall clock reads 8:47.
* 4 A The ceremony begins at ten.
5 A ¶ BARTHOLOMEW "BART" OYELARAN, 30s, the groom, in a tuxedo shirt and no jacket, paces with a phone pinched between his chin and his shoulder.
6 A He has icing on his cuff.
7 A ¶ CHLOE FENWICK-DASH, 30s, the bride, in a hoodie over a half-pinned gown, stands rigid before the cake.
8 A Her veil is askew.
9 A She stares at the third tier.
10 A ¶ LUDWIK, 50s, the pastry chef, a mountain of apron and moustache, wrings a dish towel and says nothing.
11 D DONNA [V.O.] (from the phone, shrill): Bartholomew! Is that a sunflower on my daughter's cake?
12 D BART (into the phone): Mrs. Fenwick-Dash, it's a daisy.
13 D DONNA [V.O.]: It is a sunflower, Bartholomew. I specifically said no sunflowers.
14 D CHLOE: Mom, it's not a sunflower!
15 D DONNA [V.O.]: Chloe, is that you? Why are you at the bakery? You're supposed to be at the salon!
16 D CHLOE: The salon burned down.
17 D BART (whispering): It did not burn down.
18 D CHLOE (whispering): It's a metaphor.
19 D LUDWIK: Madame, it is a daisy. Look. Five petals.
20 D DONNA [V.O.]: I count nine!
21 A ¶ Bart holds the phone out.
22 A Counts the petals.
23 A Brings it back.
24 D BART: Seven.
25 D DONNA [V.O.]: That is not a daisy, Bartholomew. That is a sunflower in a daisy costume.
26 A ¶ Ludwik snatches a pastry knife.
27 A Slices the offending flower off the tier.
* 28 A It thumps to the counter.
29 A He hands the cake an apologetic pat.
30 D LUDWIK: Now it is nothing.
31 D DONNA [V.O.]: Better!
32 A ¶ Chloe throws her bouquet at the wall.
33 A Bart ends the call.
* 34 A Silence, then, softly, from the counter:
35 D CHLOE: Bart.
36 D BART: Yeah?
37 D CHLOE: Let's elope.
38 A ¶ Ludwik hands them each a slice of the sunflower.

### SCENE s01292 | INT. HOTEL LINEN ROOM - NIGHT
Detected names (may be incomplete or contain aliases): PHILOMENA CROSS
* 1 A ¶ A windowless cupboard of a room, walls lined with shelves of folded white sheets and towels in neat stacks.
* 2 A A bare bulb.
* 3 A A laundry chute in the corner breathes cold air.
4 A ¶ PHILOMENA CROSS, 50s, a private investigator in a rumpled raincoat, sits cross-legged on an upturned laundry cart.
5 A A pocket recorder in her palm.
6 A Her hair is damp.
7 A ¶ She presses RECORD.
8 D PHILOMENA [V.O.] (recorded, hushed): Tuesday. Two-oh-six a.m. Linen room, fourth floor, the Grand Meridian. The key card the maid gave me opens this door and nothing else.
9 A ¶ She stops the tape.
10 A Listens to the building: the groan of pipes, a distant lift.
11 A ¶ She presses RECORD.
12 D PHILOMENA [V.O., CONT'D] (recorded): Pencil sketch: eight shelves, eight stacks, one false panel behind the towels on the left.
13 A ¶ She stops.
14 A Rises.
15 A Crosses to the left shelf.
16 A Slides the towels to the floor, one by one, with surgical care.
* 17 A ¶ Behind them: a plywood panel, painted to match the wall.
* 18 A A brass latch.
19 A ¶ She presses RECORD.
20 D PHILOMENA [V.O., CONT'D] (recorded): Panel found. Latch is warm.
21 A ¶ She stops.
22 A Her breath catches.
* 23 A Warm.
* 24 A ¶ Beyond the panel, a soft click.
25 A Someone on the other side lets go of the latch.
26 A ¶ Philomena freezes.
27 A Her thumb finds the recorder's button.
28 A Her other hand slides to her coat pocket.
29 A ¶ She presses RECORD.
30 D PHILOMENA [V.O., CONT'D] (recorded, barely a whisper): If anyone finds this tape, the Grand Meridian is not a hotel.
* 31 A ¶ The latch turns.
32 A ¶ She hurls the recorder into the laundry chute.
* 33 A It clatters down into the dark.
* 34 A ¶ The panel swings inward.

### SCENE s01293 | INT. GRAND CENTRAL WAITING HALL - NIGHT
Detected names (may be incomplete or contain aliases): IMELDA CASTELLANOS, WINIFRED BOYLE, ARTHUR PEMBROKE
* 1 A ¶ 1946.
* 2 A High arched windows, benches of dark oak.
* 3 A A great board of arrivals flicks over names.
* 4 A Steam from distant trains.
5 A A few soldiers asleep on their duffels.
6 A ¶ IMELDA CASTELLANOS, 40s, in a worn wool coat, sits on a bench with her hands in her lap.
* 7 A A suitcase at her feet.
* 8 A A man's hat on top of it.
9 A ¶ WINIFRED BOYLE, 60s, in tweed, with a prim hat and a leather handbag, perches at the far end of the bench.
10 A She has been watching the board for hours.
11 A ¶ ARTHUR PEMBROKE, 30s, in a demobbed uniform with the insignia ripped from the sleeve, walks the aisle.
12 A Stops.
13 A Stares at Imelda.
14 D ARTHUR: Imelda?
15 A ¶ She stands.
* 16 A The hat falls from the suitcase.
17 A Arthur bends to pick it up, but Winifred gets there first.
18 A She holds it out to Imelda with a trembling hand, and Imelda takes it without taking her eyes off him.
19 D IMELDA: Arthur. You are late.
20 D ARTHUR: The trains. I was told.
21 D IMELDA: You were told four years ago.
22 D ARTHUR: I am here now.
23 A ¶ Winifred rises, smooths her coat, and walks away down the hall.
24 A She does not look back.
25 A Arthur steps closer.
26 A Imelda lifts the hat between them.
27 D IMELDA: Your father's.
28 D ARTHUR: I thought it was lost.
29 D IMELDA: Nothing is lost, Arthur. Only misplaced.
30 A ¶ He puts it on his head.
* 31 A It fits.
32 A She straightens it with two fingers.

### SCENE s01294 | EXT. DRIFTING ICE FLOE - DAY
Detected names (may be incomplete or contain aliases): LAWRENCE DEVEREUX, ABEL TSEGAYE
* 1 A ¶ A slab of white, a hundred feet across, adrift in a grey sea.
* 2 A Fog presses on every side.
* 3 A The ice groans.
4 A ¶ LAWRENCE DEVEREUX, 50s, polar surveyor, in a heavy wool coat caked with frost, kneels by a crate of instruments.
5 A His beard is white with rime.
6 A ¶ ABEL TSEGAYE, 30s, his assistant, stands at the edge of the floe, peering into the fog.
7 A A rope wound about his chest.
8 D LAWRENCE: Abel, stay back from the edge.
9 D ABEL: There is water on the east side.
10 D LAWRENCE: There is water on every side.
11 D ABEL: The ice is thinner there. I heard it crack.
12 D LAWRENCE: Then we stay on the west.
13 A ¶ He rises, stiff-limbed.
14 A He picks up a compass.
* 15 A The needle spins, useless.
16 D ABEL: How long has the floe been drifting?
17 D LAWRENCE: Since Tuesday.
18 D ABEL: We should signal.
19 D LAWRENCE: With what? A flare?
20 D ABEL: There are two flares.
21 D LAWRENCE: There is one. The other went down with the sled.
22 A ¶ Abel turns.
* 23 A Fog swallows the sea.
24 D ABEL: You didn't tell me.
25 D LAWRENCE: You didn't ask.
* 26 A ¶ A deep CRACK runs through the ice.
27 A Both men freeze.
* 28 A A fissure opens ten feet from Lawrence's boots, black water welling.
29 D ABEL: Lawrence!
30 A ¶ He reaches him.
31 A Hauls him back.
* 32 A The fissure widens to a yard.
33 D LAWRENCE: Cut the rope.
34 D ABEL: No.
35 D LAWRENCE: Abel, if it takes me, it takes you.
36 D ABEL: Then it takes us both. Pull!
37 A ¶ Lawrence scrambles up.
38 A They collapse on the solid ice.
* 39 A The gap stops, a few feet wide.
* 40 A Water slaps the edges.
41 D LAWRENCE (breathless): One flare.
42 D ABEL: One flare.
43 A ¶ Lawrence digs in his pack.
44 A Pulls out a dented red tube.
45 A His hand shakes.
46 D LAWRENCE: You do it.
47 D ABEL: Why?
48 D LAWRENCE: Because he who lights it will be the one they find first.
49 A ¶ Abel takes the flare.
50 A Pulls the cap.
* 51 A A plume of crimson smoke bursts into the fog, bright as blood on snow.

### SCENE s01295 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RENATA OKONKWO-VASS, CLERK
* 1 A ¶ Brass walls.
* 2 A A cracked floor indicator.
* 3 A The car hums between floors.
4 A ¶ ATTORNEY RENATA OKONKWO-VASS, 40s, sharp grey suit, briefcase at her ankle, presses her back against the rail.
5 A She stares at the floor numbers.
6 A Her jaw is tight.
* 7 A ¶ The elevator jolts.
* 8 A Stops.
* 9 A The lights flicker.
10 A ¶ She sighs.
11 A Jabs the call button.
12 D CLERK [V.O.] (through the speaker): Maintenance.
13 D RENATA: I'm in car three. Between six and seven.
14 D CLERK [V.O.]: Yes, ma'am. We see you.
15 D RENATA: I'm due in Courtroom 7 in four minutes.
16 D CLERK [V.O.]: The judge has been informed.
17 A ¶ She exhales.
18 A Sets down her briefcase.
19 A Rubs her temples.
20 D RENATA: Is he angry?
21 D CLERK [V.O.]: Ma'am?
22 D RENATA: The judge.
23 D CLERK [V.O.]: He said, and I quote, "Let her be late. She's earned it."
24 A ¶ She blinks.
25 A Then, for the first time all day, she laughs.
26 D RENATA: I won, didn't I?
27 D CLERK [V.O.]: The jury came back ten minutes ago.
28 A ¶ She leans her head against the wall.
29 A Closes her eyes.
30 D RENATA: Then take your time.

### SCENE s01296 | INT. BEEKEEPER'S SHED - NIGHT
Detected names (may be incomplete or contain aliases): ONDINE HAWTHORNE, MORDECAI
* 1 A ¶ A low, windowless hut of unplaned planks.
* 2 A Rows of honey jars glow amber in the lantern light.
* 3 A From the hives outside, a drone, deep and constant.
* 4 A The walls tremble with it.
5 A ¶ ONDINE HAWTHORNE, 30s, in a veil and cotton gloves, sets a jar on the shelf and wipes her hands, never turning from the door.
6 A Her brother MORDECAI, 40s, bearded, bare-armed, stands in the doorway with a smoker in one hand and a bucket in the other.
7 A Neither has spoken for some time.
8 A He steps inside; she steps back.
9 A The bucket slips from his fingers and spills a thick gold river across the floor, and as she reaches for a rag he catches her wrist.
* 10 A The lantern gutters.
* 11 A Behind them the humming rises, and the tallest hive outside begins, very quietly, to speak her name.
12 D ONDINE: Let go.
13 D MORDECAI: They want you back.
14 D ONDINE: They want what's in me.
15 A ¶ He releases her.
16 A She backs against the shelf.
* 17 A The jars chime against each other.
* 18 A The humming stops.
* 19 A ¶ In the new silence, a single bee crawls from the neck of her veil and walks across her cheek.

### SCENE s01297 | INT. RADIO STATION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): LEANDRO PACHECO, CALLER, AIR
* 1 A ¶ A small glass room above a shuttered strip mall.
* 2 A Dials, cables, dead plants.
* 3 A A red ON AIR sign glows above the window.
* 4 A Beyond it, the darkened studio floor.
* 5 A Out the far window, a truck stop's neon bleeds into the rain.
6 A ¶ LEANDRO PACHECO, 40s, the overnight host, headphones around his neck, a thermos of coffee at his elbow, leans back in a creaking chair.
7 A He moves the faders with the unthinking ease of fifteen years.
* 8 A A pile of unopened mail beside him.
9 D LEANDRO (into the mic, smooth): That was Patsy Cline, and you're listening to Night Drive on 94.7. Four-fifteen in the morning. Phone lines are open.
10 A ¶ He flicks a switch.
* 11 A A line blinks red.
12 D LEANDRO [CONT'D]: First caller. You're on the air.
13 D CALLER [V.O.] (over the phone, very quiet): Hello, Leandro.
14 D LEANDRO: Hello. What can I play for you tonight?
15 D CALLER [V.O.]: Nothing. I just wanted to hear you talk.
16 D LEANDRO (a small laugh): Well. That's what I'm here for. What's your name?
17 D CALLER [V.O.]: You know my name.
18 A ¶ Leandro's smile fades by a degree.
19 A He glances at the line indicator: caller ID reads NO SIGNAL.
20 D LEANDRO: I'm afraid I don't. Help me out.
21 D CALLER [V.O.]: It's been so long since you said it.
22 A ¶ He sits up.
23 A Takes a slow sip of coffee.
24 A Sets the mug down without a sound.
25 D LEANDRO: Let's go to a song, shall we? This one's for you, friend.
26 A ¶ He thumbs the fader.
* 27 A A soft ballad swells.
28 A He mutes the mic, but the line is still open.
29 A He doesn't hang up.
30 D CALLER [V.O.]: Are you still afraid of the water, Leandro?
31 A ¶ His hand freezes.
* 32 A The headphones slide off his shoulder to the floor.
33 D LEANDRO (low): Who is this?
34 D CALLER [V.O.]: Look behind you.
35 A ¶ He doesn't.
36 A He stares at his reflection in the glass: the booth, the lamp, the empty studio beyond.
37 A And behind his reflection, standing in the dark at the edge of the floor, a figure he cannot make out.
38 A ¶ He reaches for the ON AIR switch.
39 A Turns it off.
* 40 A The red glow dies.
* 41 A ¶ The line goes dead.
* 42 A The song plays on to an empty room.

### SCENE s01298 | INT. ROLLER DERBY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): BERNIE, OYELOWO, SUNNIVA HOLM, TILLY BRANDT, TANK, DELACROIX, RAJANI PILLAI, DIEDRE KOWALCZYK
* 1 A ¶ Concrete floor.
* 2 A Steel lockers, dented.
* 3 A Fluorescent flicker.
* 4 A A hundred pairs of skates on hooks.
* 5 A The scoreboard through the wall reads 142-38.
6 A ¶ COACH BERNADETTE "BERNIE" OYELOWO, 50s, in a tracksuit and whistle, stands in the centre with a dry-erase marker.
7 A Her jaw is clamped.
8 A ¶ SUNNIVA HOLM, 20s, jammer, the team's star, sits on a bench with her helmet in her lap.
9 A Her lip is split.
10 A ¶ TILLY BRANDT, 20s, blocker, ponytail, holds an ice pack to her wrist.
11 A ¶ MARGOT "TANK" DELACROIX, 30s, enormous, sits on the floor tying a skate.
12 A ¶ RAJANI PILLAI, 20s, rookie, stands against the wall, wide-eyed.
13 A ¶ DIEDRE KOWALCZYK, 30s, captain, rubs her knuckles raw with a towel.
14 D BERNIE: Final period. One hundred and four points down.
15 D SUNNIVA: I know.
16 D BERNIE: I didn't ask if you knew.
17 D TANK: Coach, with respect, we're being killed.
18 D BERNIE: Then die loud.
19 D DIEDRE: We can't win.
20 D BERNIE: You can't win. You can lose with dignity.
21 D TILLY: That doesn't sound like a pep talk.
22 D BERNIE: It isn't. It's the truth.
23 D RAJANI (small voice): Can I say something?
24 D BERNIE: Please.
25 D RAJANI: This is the best night of my life.
* 26 A ¶ Silence.
* 27 A The lockers hum.
28 D TANK: She's serious.
29 D RAJANI: I've watched you play since I was twelve. Now I'm in the locker room. We're losing a hundred and four to thirty-eight, and I'm so happy I could throw up.
30 D SUNNIVA (laughing): Rookie.
31 D DIEDRE: Welcome to the team.
32 A ¶ Tilly tosses her ice pack across the room.
33 A Tank catches it, flings it back.
34 A Sunniva swats it out of the air, knocks Rajani's helmet off her head.
35 A Rajani lunges for it; Diedre grabs the helmet, stuffs it on Tank's head.
36 A They collapse into a wrestling pile of limbs and laughter.
37 A Bernie lets them for a full five seconds.
38 A Then she blows her whistle.
39 D BERNIE: Go skate.
40 A ¶ They file out.
41 A Bernie caps the marker.
42 A Waits until the room is empty.
43 D BERNIE [CONT'D] (to herself): Dignity.

### SCENE s01299 | EXT. WILLOWBEND LAWN BOWLS CLUB - AFTERNOON
Detected names (may be incomplete or contain aliases): HAROLD PENROSE-LANE, DOROTHEA STUBBS, BASIL, OSWIN TATE
* 1 A ¶ A perfect rectangle of green behind a low whitewashed pavilion.
* 2 A A striped awning.
* 3 A Teacups on a trestle.
* 4 A Wood clacks on wood.
* 5 A A hush that is almost religious.
6 A ¶ HAROLD PENROSE-LANE, 70s, in a panama hat and cream flannels, stands at the mat.
7 A Silver moustache, rheumy eyes.
8 A He holds a polished wooden bowl in both hands as though it were an egg.
9 A ¶ DOROTHEA STUBBS, 60s, in a pleated skirt and club blazer, sits on a folding chair at the edge of the rink.
10 A She knits something grey and shapeless.
11 A Her opponent for forty years.
12 A ¶ BASIL, 14, ball boy and club mascot, in a too-large white shirt, crouches by the jack with a measuring tape.
13 A He has never wanted to be anywhere else.
14 A ¶ MR. OSWIN TATE, 80, the umpire, sits motionless in the shade of the pavilion, clipboard on his knee, a lifetime of rules in his posture.
15 D HAROLD: Last end, Dorothea.
16 D DOROTHEA: So I am told.
17 D HAROLD: If I put it close, I win.
18 D DOROTHEA: If you put it close, I'll move it.
19 D HAROLD: That is cheating.
20 D DOROTHEA: That is bowls.
21 A ¶ Harold bends.
22 A His knees creak.
23 A He swings his arm and releases, and the bowl rolls across the grass in a long lazy arc.
24 A Basil watches it with held breath.
25 A Mr. Tate lifts his head one inch.
26 A Dorothea sets down her knitting, rises, tugs her blazer straight, and picks up her own bowl, all in perfect silence, while the first bowl curves, slows, and stops two inches shy of the jack.
27 D BASIL: Two inches!
28 D HAROLD: Excellent.
29 D DOROTHEA: Don't be smug. You haven't won yet.
30 A ¶ She steps to the mat.
31 A Lines up her shot.
32 A Swings.
33 A The bowl rolls true, trundles past Harold's, kisses the jack, and nudges it a quarter inch.
34 D BASIL (whispering): She moved the jack.
35 D TATE (a creak, from the shade): Within the rules.
36 D HAROLD: Oswin, it is not within the rules.
37 D TATE: It is within the rules, Harold. I have read them. Page forty-one.
38 D HAROLD: I have read page forty-one.
39 D TATE: Then you have also read the part where the umpire is always correct.
40 A ¶ Harold sighs.
41 A Removes his panama.
42 A Fans himself.
43 A Dorothea sits back down and resumes her knitting.
44 D DOROTHEA: Basil, measure it.
45 A ¶ Basil crawls on his knees across the green.
46 A Stretches the tape from the jack to Harold's bowl.
47 A Then to Dorothea's.
48 A He looks up.
49 D BASIL: It's a tie.
* 50 A ¶ A long, still moment.
51 D HAROLD: A tie.
52 D DOROTHEA: Well.
53 D TATE: Then there shall be an extra end.
54 D HAROLD: At this hour?
55 D TATE: At any hour.
56 A ¶ Dorothea rises, gathers her bowls, and walks to the mat without a word.
57 A Harold puts his hat back on.
58 A Basil scoops the jack and carries it to the far end with great ceremony.
59 D DOROTHEA: Tea first?
60 D HAROLD: Tea first.
61 A ¶ They walk together toward the pavilion.
* 62 A The green lies still in the afternoon sun.

### SCENE s01300 | INT. CONVERTED GRAIN SILO - ARBITRATION HALL - DAY
Detected names (may be incomplete or contain aliases): JUDGE PHAEDRA LOMAX, SIMONE DUCHAMP, TARIQ NASSAR, CLETUS WREN, FOREMAN, HIRAM
* 1 A ¶ A round concrete chamber, forty feet across, with a ladder bolted to the wall and a hopper chute high above.
* 2 A A plank bench for the public.
* 3 A A folding table for the court.
* 4 A Dust floats in a single shaft of light.
5 A ¶ JUDGE PHAEDRA LOMAX, 60s, in a rumpled black robe over a flannel shirt, sits behind the table.
6 A She keeps a thermos of tea at her elbow and a gavel carved from a fence post.
7 A ¶ SIMONE DUCHAMP, 40s, lead counsel for the farmers, in a tailored green suit, rises, a stack of exhibits hugged to her chest.
8 A ¶ TARIQ NASSAR, 40s, counsel for the agribusiness, in a charcoal suit and silk tie, taps his pen against his notepad.
9 A ¶ CLETUS WREN, 60s, the bailiff, stands at the ladder with his thumbs hooked in his belt.
10 A He has not smiled since the Carter administration.
11 A ¶ In a single armchair at the side sits the FOREMAN, 50s, a man in overalls and a seed-company cap, with a clipboard in his lap.
12 A He chews a toothpick.
13 D LOMAX: We are on the record. Ms. Duchamp.
14 D DUCHAMP: Your Honour, we ask the jury for a verdict on count one.
15 D LOMAX: There is no jury, Ms. Duchamp. There is Mr. Foreman.
16 D DUCHAMP: Then we ask the Foreman.
17 D FOREMAN: Ma'am, I got a question first.
18 D LOMAX: Proceed.
19 D FOREMAN: Do I have to say it out loud?
20 D LOMAX: That is how verdicts work.
21 D FOREMAN: Even if it makes someone mad?
22 D LOMAX: Especially then.
23 A ¶ He removes the cap.
24 A Smooths his hair.
25 A Puts the cap back on.
26 D NASSAR: Your Honour, I object. The witness is stalling.
27 D LOMAX: He is not a witness, Mr. Nassar. Sit down.
28 D NASSAR: I'd like it noted for the record that--
29 D LOMAX: Noted. Sit.
30 A ¶ He sits.
31 A Duchamp's grip on her exhibits tightens.
32 D DUCHAMP: Mr. Foreman, take your time.
33 D FOREMAN: Don't need it, ma'am.
34 A ¶ He stands.
35 A Clears his throat.
36 A The toothpick rolls to the side of his mouth.
37 D FOREMAN [CONT'D]: On count one, the soil contamination, we find for the farmers.
* 38 A ¶ A murmur on the bench.
39 A Nassar's pen stops.
40 A Duchamp closes her eyes.
41 D LOMAX: Order.
42 D NASSAR: Your Honour, I demand the jury be polled.
43 D LOMAX: There is one man, Mr. Nassar. He just spoke.
44 D NASSAR: Then I demand he be re-sworn.
45 D LOMAX: Mr. Wren, please re-swear Mr. Foreman.
46 D WREN: Raise your right hand.
47 A ¶ The Foreman raises his hand.
48 A Wren raises his, solemn.
49 D WREN [CONT'D]: Do you swear to render a true verdict according to the evidence?
50 D FOREMAN: I do.
51 D WREN: State your name for the record.
52 D FOREMAN: Hiram Stroud.
53 D HIRAM: Hiram Stroud, Dutch Creek. Third generation on the same acres.
54 D LOMAX: Thank you, Mr. Stroud. Please repeat your verdict.
55 D HIRAM: On count one we find for the farmers.
56 D NASSAR: He's biased. His own land is in the class.
57 D HIRAM: It is. And it's poisoned, sir. I tested it myself.
58 A ¶ Nassar half rises, shoulders squared.
59 A Hiram does not move.
60 A Wren steps forward.
61 A Duchamp slides between them.
* 62 A The shaft of light falls across all four faces.
63 D LOMAX: Sit down, Mr. Nassar.
64 A ¶ He does.
65 A He opens his notepad.
66 A Closes it.
67 A Opens it again.
68 D LOMAX [CONT'D]: Ms. Duchamp. Count two.
69 D DUCHAMP: The farmers move for punitive damages.
70 D HIRAM: We find for the farmers on count two.
71 D NASSAR: You haven't heard the evidence!
72 D HIRAM: I've heard four weeks of it. My ears are tired.
73 D LOMAX (to herself): God bless the plain-spoken.
74 A ¶ Wren shifts his weight and says nothing.
* 75 A The gavel comes down once.
76 D LOMAX [CONT'D]: We stand adjourned. Mr. Wren, open the doors.
77 A ¶ He hauls on the silo's iron door.
* 78 A Light pours in, wheat-gold.
79 A The farmers on the bench rise and file out, caps in their hands.

### SCENE s01301 | EXT. SKI JUMP TOWER - TOP PLATFORM - DAWN
Detected names (may be incomplete or contain aliases): COACH LARS EKBERG, MIKA SAARINEN, OFFICIAL YEVGENY MARKOV
* 1 A ¶ Wind whips the flags.
* 2 A Below, a white ramp falls away to a snowy outrun and a ribbon of crowd.
3 A ¶ COACH LARS EKBERG, 50s, fur-trimmed parka, stands behind the jumper with a radio in his fist.
4 A ¶ MIKA SAARINEN, 20s, in a skin-tight suit and goggles, sits on the starting bar.
5 A Her knees tremble.
6 A ¶ OFFICIAL YEVGENY MARKOV, 40s, in an orange vest, hunches over a clipboard and a wind gauge.
7 D LARS: Wind's shifting.
8 D MIKA: Is it going to be okay?
9 D YEVGENY (to Lars, low): Eight metres a second. Gusting.
10 D LARS (to Mika): It's fine. You've done worse.
11 D MIKA: I haven't.
12 D LARS: You've jumped in a blizzard.
13 D MIKA: I fell in a blizzard.
14 D LARS: You landed in a blizzard.
15 D YEVGENY (to the radio): Gate open on my word.
16 D MIKA: Coach, I can't feel my hands.
17 D LARS: Good. Then they can't shake.
18 D YEVGENY (to the whole tower): Silence on the platform, please.
19 A ¶ Everyone is still.
* 20 A Wind.
* 21 A A raven calls.
22 D LARS (muttering): Come on, girl. Come on.
23 D YEVGENY: Go.
24 A ¶ Mika pushes off.
25 A The ramp swallows her.
* 26 A A hiss of ice.
* 27 A A scream from the crowd, then a roar.
28 A ¶ Lars drops the radio.
29 A Presses his gloved fists to his mouth.
30 D YEVGENY [CONT'D] (into the radio, shaky): She landed. She stood it up.
31 A ¶ Lars laughs.
32 A Tears freeze on his beard.

### SCENE s01302 | INT. FUNERAL PARLOUR - SIDE ROOM - DAY
Detected names (may be incomplete or contain aliases): DOROTHY WAKEFIELD, VICTOR WAKEFIELD, TABITHA CROWE, LEONTYNE BASS, FATHER OSWALD QUINN
* 1 A ¶ Tapestried chairs.
* 2 A A sideboard of sherry glasses.
3 A Five people stand in a half circle around a closed casket.
4 A ¶ DOROTHY WAKEFIELD, 70s, the widow.
5 A VICTOR WAKEFIELD, 40s, her son.
6 A TABITHA CROWE, 30s, the nurse.
7 A LEONTYNE BASS, 50s, the lawyer.
8 A FATHER OSWALD QUINN, 60s, the priest.
9 D DOROTHY: He didn't fall.
10 D VICTOR: Mother.
11 D DOROTHY: He didn't fall, Victor. He was pushed.
12 D TABITHA: Mrs. Wakefield, the coroner said--
13 D DOROTHY: The coroner said what he was paid to say.
14 D LEONTYNE: Dorothy, I advise you not to make accusations in front of witnesses.
15 D DOROTHY: Witnesses to what? Five people, one dead man, and a staircase.
16 D FATHER QUINN: Dorothy, grief makes a person see monsters.
17 D DOROTHY: Father, forty years I have heard you talk of mercy. Tell me, where was mercy at two in the morning on Sunday?
18 D VICTOR: I was home.
19 D TABITHA: I was on shift.
20 D LEONTYNE: I was at my club.
21 D FATHER QUINN: I was at prayers.
22 D DOROTHY: And I was asleep. So who was it?
* 23 A ¶ Silence.
* 24 A The clock ticks.
* 25 A A sherry glass trembles on the sideboard.
26 D TABITHA (very quietly): He called me at one-forty. Said he'd heard someone in the house.
27 D VICTOR: You never told us.
28 D TABITHA: I didn't think it mattered.
29 D DOROTHY: Who did he say it was?
30 D TABITHA: He said it was someone from this room.

### SCENE s01303 | INT. FLORIST'S COLD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FUENTES, DES, ARCHER, OTTILIE NASH, WILHELM BRAND, RICARDO VEGA
* 1 A ¶ A walk-in refrigerator, humming at four degrees.
* 2 A Buckets of white roses and blood-red peonies crowd the shelves.
* 3 A Breath hangs in the air.
* 4 A Frost on every stem.
* 5 A The floor is wet and smells of cut green.
6 A ¶ MARISOL FUENTES, 50s, the florist, in a wool cap and fingerless gloves, arranges lilies in a zinc bucket.
7 A She hums.
8 A Her hands are steady.
9 A ¶ DESMOND "DES" ARCHER, 30s, in a delivery jacket, leans against the doorframe, a clipboard in his fist and a nervous smile on his lips.
10 A ¶ OTTILIE NASH, 20s, the apprentice, in a green apron, snips stems at the workbench.
11 A She is slightly too cheerful.
12 A ¶ WILHELM BRAND, 60s, the owner, in a camel coat, sits on an overturned crate eating an apple.
13 A He has been here for an hour and has not said a word.
14 D MARISOL: Des, I told you. Fourteen arrangements by morning.
15 D DES: I know. I'm counting.
16 D MARISOL: Count faster.
17 D OTTILIE: I could help, Mr. Archer.
18 D DES: I'd like that.
19 A ¶ They move together.
20 A Their hands brush over a bucket of peonies.
21 A Ottilie flushes.
22 A Wilhelm keeps eating.
* 23 A ¶ A door opens in the corridor outside.
* 24 A Steps approach.
25 A The apple stops halfway to his mouth.
* 26 A ¶ Through the frosted glass: a figure.
27 A ¶ RICARDO VEGA, 40s, in a dripping raincoat and a wide-brimmed hat, pushes into the cold room.
28 A He closes the door softly.
29 A Marisol freezes.
30 A Des drops the clipboard.
31 D RICARDO: Evening, Wilhelm.
32 A ¶ Wilhelm sets the apple on the crate.
33 A Wipes his hands.
34 A Stands.
35 D WILHELM: You're late.
36 D RICARDO: I brought what you asked.
37 A ¶ He lifts a leather satchel.
38 A Opens it.
* 39 A Inside, wrapped in a white lily: a gun.
40 A ¶ Marisol turns to Des.
41 A Her smile is gone.
42 D MARISOL: Des. Fourteen arrangements.
43 D DES (pale): Marisol?
44 D MARISOL: Count the funerals.

### SCENE s01304 | INT. COUNTY FAIR - SOURDOUGH PAVILION - DAY
Detected names (may be incomplete or contain aliases): BEA, HALLORAN, OKSANA PRYSTAI, JUDGE ARMAND DELACOUR, LIAM
* 1 A ¶ A striped canvas tent crowded with trestle tables.
* 2 A Loaves arranged under glass cloches like jewels.
* 3 A A hand-lettered banner: GOLDEN CRUST CHAMPIONSHIP.
* 4 A The air smells of yeast and burnt sugar.
5 A ¶ BEATRICE "BEA" HALLORAN, 60s, in a flour-dusted apron and her late husband's flat cap, guards a crusty round loaf with the tenderness of a mother with her firstborn.
6 A ¶ OKSANA PRYSTAI, 50s, her lifelong rival, in a ruffled blouse and bright red lipstick, tends a loaf of her own.
7 A She is the picture of calm, and she sweats.
8 A ¶ JUDGE ARMAND DELACOUR, 70s, in a straw boater and a white linen suit, strolls the tables with a tasting knife and the face of a man who has seen it all.
9 A ¶ His assistant, LIAM, 19, in an apron three sizes too big, trots after him with a notebook and a pencil he can't keep sharp.
10 D DELACOUR (to Liam): Write this down. Table four. Crust, firm. Crumb, open. Aroma, hints of sour cherry.
11 D LIAM: Sour cherry?
12 D DELACOUR: I find it on the nose.
13 A ¶ Beatrice lifts her cloche with a flourish.
* 14 A Steam curls.
15 A Delacour leans in.
16 A Oksana, at the next table, cranes sideways.
17 A Liam drops his pencil, retrieves it, drops it again.
18 A Beatrice sets the loaf on its board, tears it with her bare hands, and holds out a steaming half.
19 A Delacour accepts it, chews, and closes his eyes.
20 A Oksana dabs her upper lip with a handkerchief.
21 A Liam writes something illegible.
22 D DELACOUR [CONT'D]: Beatrice. This is magnificent.
23 D BEA: Thank you, Armand.
24 D DELACOUR: Is that rye?
25 D BEA: A little.
26 D DELACOUR: It sings.
27 D OKSANA (muttering): It screams.
28 D BEA: I heard that, Oksana.
29 D OKSANA: You were meant to.
30 A ¶ Delacour moves on to table five.
31 A Oksana lifts her own cloche with an equally grand gesture.
32 A He tastes.
33 A He chews.
34 A He frowns.
35 D DELACOUR: Hm.
36 D OKSANA: Hm?
37 D DELACOUR: It is very... confident.
38 D LIAM (whispering): Is that good?
39 D DELACOUR: It is not bad.
40 A ¶ Oksana's smile cracks.
41 A Beatrice turns away to hide a grin.
42 A Delacour clears his throat and consults Liam's notes.
43 D DELACOUR [CONT'D]: The winner is table four.
44 A ¶ Beatrice lets out a little shriek, grabs her flat cap, and flings it into the air.
45 A It lands on Liam's head.
46 A Oksana stares at her loaf as though it has betrayed her.
47 D OKSANA: Next year.
48 D BEA: Next year.
49 A ¶ They shake hands.
50 A It lasts a beat too long.

### SCENE s01305 | INT. LUNAR ELEVATOR - CAR 4 - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN IRENE VOSS, TAMSIN OKORO
* 1 A ¶ A narrow steel cabin, ribbed with cable housing, one round window.
* 2 A Earth hangs beyond it, impossibly bright.
* 3 A Warning lights pulse amber.
4 A ¶ CAPTAIN IRENE VOSS, 40s, in a pressure suit with the helmet clipped at her hip, braces against the wall with one hand, a tablet in the other.
5 A Her partner TAMSIN OKORO, 30s, in the same suit, hangs from the ceiling rail, trying to rewire a panel with a screwdriver in her teeth.
* 6 A A bolt snaps.
* 7 A The car lurches.
8 A Tamsin swings out, catches Irene by the shoulder, and both women slam against the window.
* 9 A The tablet floats loose.
10 A Irene grabs it.
11 A Tamsin spits out the screwdriver and clamps it to her chest.
* 12 A The lights go red.
13 D IRENE: Status!
14 D TAMSIN: Cable two's gone. We're on three and four.
15 D IRENE: Can they hold us?
16 D TAMSIN: For nine minutes.
17 D IRENE (to herself): Nine minutes.
18 D TAMSIN: Eight and a half.
19 D IRENE: Everyone in the cabin, seat belts!
20 D TAMSIN: There's only you and me.
21 D IRENE: I know. It's a figure of speech.
* 22 A ¶ A thunk.
* 23 A A groan from the housing.
* 24 A Then a soft chime.
* 25 A The lights return to amber.
* 26 A The car steadies.
27 A ¶ They stare at each other.
28 A Tamsin starts to laugh.
29 A Irene joins her.
30 A They drift apart in the microgravity, still laughing, still holding hands.
