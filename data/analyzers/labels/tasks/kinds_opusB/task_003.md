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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusB/group_0003.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01066 | EXT. ARCTIC ICE SHELF - LIFE RAFT CAMP - DAY
Detected names (may be incomplete or contain aliases): JOSEPHINE TALLCHIEF, DARIUS OKAFOR, BERNADETTE LACROIX, RESCUE ONE
* 1 A ¶ A bright white world.
* 2 A A yellow raft hauled up on a floe, a tarp strung from poles, a single seal-oil stove.
* 3 A Wind sighs.
4 A ¶ JOSEPHINE TALLCHIEF, 30s, parka hood trimmed with fur, kneels at the stove and stirs a pot.
5 A DARIUS OKAFOR, 40s, frostbitten cheeks, sits against the raft with a rifle.
6 A BERNADETTE LACROIX, 20s, in a red survival suit, stands at the edge of the floe with a radio.
7 D BERNADETTE (into radio): Rescue One, this is the Meridian. Do you copy?
* 8 A ¶ The radio hisses.
9 D RESCUE ONE [V.O.] (garbled): ...Meridian... position... say again...
10 D BERNADETTE: We're at seventy-eight north.
11 D RESCUE ONE [V.O.]: ...hold... coming...
12 A ¶ She grins.
13 A Turns to the others.
14 D BERNADETTE [CONT'D]: They're coming!
15 D JOSEPHINE: How long?
16 D BERNADETTE: Two hours!
17 D DARIUS (rising): Two hours. We can make two hours.
* 18 A ¶ The floe groans.
* 19 A A crack zigzags across the ice between them.
20 A Josephine and Darius lunge for the raft as the floe splits, and Bernadette leaps across the gap, landing hard in Josephine's arms.
21 A All three tumble into the raft as the ice shelf shifts and a second crack opens right where the stove had been.
22 D JOSEPHINE: Cut the line!
23 D DARIUS: Cut the line!
24 A ¶ Bernadette hacks the rope.
* 25 A The raft slides free.
26 A The three huddle.
* 27 A The stove sinks into black water.
28 D RESCUE ONE [V.O.] (clear now): Meridian, we have you. Stay put.

### SCENE s01067 | INT. VICTORIAN ICE HOUSE - ESTATE GROUNDS - EVENING (1887)
Detected names (may be incomplete or contain aliases): ABIGAIL FENWICK-HALE, TOBIAS RUSK, STRANGER, RUPERT
* 1 A ¶ A brick dome half-sunk in the earth.
* 2 A Blocks of ice stacked in straw, sawdust floor, a sharp cold that smells of wet stone.
* 3 A A lantern hangs from a hook.
* 4 A Breath clouds in the light.
5 A ¶ ABIGAIL FENWICK-HALE, 30s, housekeeper, shawl over her shoulders, counts blocks with a slate.
6 A TOBIAS RUSK, 50s, groundskeeper, canvas coat, sits on a crate, whittling.
7 A A STRANGER, 40s, in a good coat and muddy boots, stands near the entrance holding a bowler hat.
8 D ABIGAIL (to both): Forty-two blocks. Enough for the garden party.
9 D TOBIAS: Forty-two's plenty.
10 D ABIGAIL: You'll want to turn the straw before the guests arrive.
11 D TOBIAS: I'll do it, Miss Abigail.
12 A ¶ The Stranger clears his throat.
13 D STRANGER: Forgive me. I'm looking for the master of the house.
14 D TOBIAS: He's up at the manor, sir.
15 D STRANGER: I tried the door. Nobody answered.
16 D ABIGAIL: The door is closed after four.
17 D STRANGER: So I discovered.
18 D ABIGAIL: And you are?
19 D STRANGER: A friend of the family.
20 D TOBIAS (under his breath): Never seen him.
21 D ABIGAIL: Which family?
22 D STRANGER: The Ashworths.
23 A ¶ Tobias stops whittling.
* 24 A The shavings fall.
25 D ABIGAIL: The Ashworths left in March.
26 D STRANGER: Did they? I hadn't heard. I'm afraid I've been abroad.
27 D ABIGAIL: Where abroad?
28 D STRANGER: Calcutta.
29 D ABIGAIL: That's a long way to come for an empty house.
30 D STRANGER: I came for the cold.
31 D ABIGAIL: Pardon?
32 D STRANGER: The ice house. They kept something here, once. A sealed tin.
33 D TOBIAS: Nothing's here but ice, sir.
34 D STRANGER: Of course. I only wished to be certain.
35 A ¶ He turns his hat in his hands.
36 A Raises his eyes.
37 D STRANGER [CONT'D]: My name is Rupert Ashworth. I was supposed to have inherited.
38 A ¶ Abigail's slate slips from her fingers and clatters on the floor.
39 A Tobias rises, knife in hand.
40 D ABIGAIL: Mr. Rupert died in the Punjab. We had the letter.
41 D RUPERT: Reports of my death were premature.
42 D TOBIAS (to Abigail): Miss, I'd stand behind me.
43 A ¶ She doesn't move.
* 44 A The lantern flickers.
45 D RUPERT: I only want the tin.
46 D ABIGAIL (to the cold air): God help us.
47 D RUPERT: I'd settle for that, too.
48 A ¶ He smiles.
49 A A thin, apologetic, tired smile.
50 A Behind him, the ice house door creaks in the wind, and all three turn to look at it.

### SCENE s01068 | INT. DANCE MARATHON HALL - NIGHT (1932)
Detected names (may be incomplete or contain aliases): EVELYN PRATT, JACK HOLLISTER
* 1 A ¶ A cavernous ballroom, plank floor, paper streamers gone limp.
* 2 A Hour 487.
* 3 A A banner reads LAST COUPLE STANDING WINS $1,000.
4 A The couples have gone to their cots.
* 5 A A gramophone scratches out one slow waltz to an empty floor.
6 A ¶ EVELYN PRATT, 20s, in a tattered satin dress, shoes in her hand, sways alone in the middle of the boards.
7 A Eyes closed.
8 D EVELYN (to the empty hall): Anybody got a cigarette?
* 9 A ¶ No answer.
* 10 A Gramophone crackle.
11 D EVELYN [CONT'D] (muttering): Four hundred eighty-seven hours. And the only thing that moves is the record.
* 12 A ¶ A cot creaks in the shadows.
* 13 A A match flares.
14 A JACK HOLLISTER, 20s, in a wilted white shirt, pushes himself off a bench and shuffles into the light, a cigarette between his lips.
15 D JACK: Here.
16 A ¶ He offers it.
17 A She takes a drag.
18 A Gives it back.
19 D EVELYN: Thanks. You were sleeping.
20 D JACK: I was resting my eyes.
21 D EVELYN: In a dance marathon.
22 D JACK: It's called pacing.
23 A ¶ She laughs.
24 A It wakes him a little.
25 A He sets the cigarette on the edge of the gramophone and holds out one hand.
26 D JACK [CONT'D]: Fifteen minutes left on the clock.
27 D EVELYN: Then dance with me.
28 D JACK: I thought you'd never ask.
29 A ¶ She drops her shoes.
30 A Takes his hand.
31 A They begin to turn, slow, a little off the beat.
32 D EVELYN: If we win, what will you do with a thousand dollars?
33 D JACK: Buy a hat.
34 D EVELYN: That's all?
35 D JACK: A nice hat.
36 D EVELYN: And me?
37 D JACK: You'd get a better hat.
38 A ¶ They both begin to say the same line.
39 D EVELYN: I'd dance another four hundred hours for you.
40 D JACK: I'd dance another four hundred hours for you.
41 A ¶ They stop.
42 A Both startled.
43 A Then, softly, they laugh.
44 D EVELYN [CONT'D]: Don't promise. Just hold on.
45 A ¶ He holds her.
* 46 A The gramophone skips and keeps going.

### SCENE s01069 | EXT. AUTO SALVAGE YARD - CAR CRUSHER BAY - NIGHT
Detected names (may be incomplete or contain aliases): MAN, WOMAN, KID, NINA, ELI
* 1 A ¶ Towers of flattened cars.
* 2 A A hydraulic crusher squats at the end of a gravel lane, its steel jaws open like a mouth.
* 3 A A sodium lamp buzzes on a pole.
4 A ¶ A MAN in a dark jacket, 40s, slams the trunk of a black sedan shut.
5 A He wipes his hands on his pants.
6 A From the passenger side, a WOMAN in a leather coat, 30s, hurries around the car, hugging herself.
7 A ¶ At the office window, a KID, 17, in a hoodie, watches from behind a curtain.
8 A ¶ The man opens the sedan's back door.
* 9 A A heavy gym bag sits on the seat.
10 D WOMAN: Did you check the plates?
11 D MAN: Twice.
12 D WOMAN: Did you check the plates again?
13 D MAN: Nina. They're clean.
14 D WOMAN (softly): Don't say my name.
15 D MAN: Who's going to hear?
16 A ¶ She nods toward the office.
17 A The Kid has vanished from the window.
18 D MAN [CONT'D]: That's Terrence's nephew. He doesn't count.
19 D NINA: Everyone counts.
20 A ¶ The man hauls out the gym bag.
* 21 A It lands on the gravel with a clink.
* 22 A ¶ The office door opens.
23 A The Kid steps out, hands in pockets, walking slow.
24 D KID: You guys need the crusher?
25 D MAN: Yeah. For the sedan.
26 D KID: Papers?
27 D NINA: No papers.
28 D KID: No papers, no crusher. That's Terrence's rule.
29 D MAN: Terrence is a friend.
30 D KID: Terrence is in Phoenix.
31 A ¶ The man smiles, shows teeth.
32 A He steps closer.
33 A The Kid doesn't step back.
34 D MAN: Kid. What's your name?
35 D KID: Eli.
36 D MAN: Eli. Listen to me. A man left this car here. It's got to go.
37 D ELI: Then he can come back and fill out a form.
38 D NINA: Eli, we're running behind.
39 D ELI: Then you should've been on time.
40 A ¶ The man lunges, grabs Eli by the hoodie.
41 A Eli drops his phone, kicks the man's shin, and twists free.
42 A The man staggers into the sedan's open door.
43 A Nina grabs the gym bag and swings it into the man's back.
44 A All three go down in the gravel, tangled.
45 A ¶ Eli scrambles to the crusher's control panel.
46 A Slaps a lever.
* 47 A The jaws groan and begin to close.
48 D NINA: Eli! Don't!
49 D ELI (shouting): You said no papers!
50 A ¶ The man rolls away.
* 51 A The jaws descend on the sedan with a scream of metal.
* 52 A The gym bag, caught half under the door, is dragged in.
53 A ¶ Nina stares, mouth open.
54 A The man gets up slowly, face bleeding.
55 D MAN (to Eli, hoarse): You have any idea what was in that bag?
56 D ELI (dead calm): Terrence's rules.
* 57 A ¶ The crusher bottoms out.
* 58 A Glass bursts.
* 59 A A cloud of dust and loose banknotes swirls up through the sodium light, drifting down like snow.

### SCENE s01070 | INT. FLOODED RICE MILL - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT OKAFOR, CORPORAL HALVORSEN, PRIVATE LIN, STRANGER, TEODOR
* 1 A ¶ Knee-deep brown water.
* 2 A Sacks float like dead cattle.
3 A SERGEANT OKAFOR, 40s, scarred jaw, holds a lantern low.
4 A CORPORAL HALVORSEN, 20s, freckled, covers the door with a rifle.
5 A PRIVATE LIN, 19, thin, shivers beside a radio set.
6 A ¶ A man in a farmer's coat wades out of the dark.
7 A Hands up.
8 A STRANGER, 50s, mud to the waist.
9 D STRANGER: Don't shoot. I live here.
10 D OKAFOR: Nobody lives here. Name.
11 D STRANGER: Teodor. Teodor Vasko. The mill is my brother's.
12 A ¶ Halvorsen steps closer.
13 A Lin keeps her eyes on the radio.
14 D HALVORSEN: Sarge, he came from the north bank. That's their side.
15 D TEODOR: The bridge is gone. I swam.
* 16 A ¶ Distant engines.
17 A Okafor kills the lantern.
* 18 A Dark.
19 D OKAFOR (whispering): Lin. Radio. Now.
20 D LIN: Static, Sergeant. Only static.
* 21 A ¶ The engines grow louder.
22 A Halvorsen cocks the rifle.

### SCENE s01071 | INT. LAMPLIGHTER'S WORKSHOP - DAWN
Detected names (may be incomplete or contain aliases): ADELAIDE PRYCE, TOBIAS WREN, BOY
* 1 A ¶ 1887.
* 2 A London.
* 3 A Brass tools.
* 4 A Oil cans.
* 5 A A cold stove.
6 A ¶ MRS. ADELAIDE PRYCE, 60s, black bombazine, stands in the doorway.
7 A Does not sit.
8 A Gloves stay on.
9 A ¶ Across the bench: TOBIAS WREN, 60s, lamplighter.
10 A Wick scissors in hand.
11 A He trims nothing.
* 12 A ¶ Silence.
* 13 A A kettle ticks as it cools.
14 D ADELAIDE: You kept the shop.
15 D TOBIAS: Rent's paid.
16 A ¶ She touches a lamp on the shelf.
17 A Dusts her glove on it.
18 A Studies the smear.
19 D ADELAIDE: Not by much, I'd say.
20 A ¶ He sets the scissors down.
21 A Picks them up again.
22 D TOBIAS: You came a long way.
23 D ADELAIDE: The cab was warm.
* 24 A ¶ A bell clangs in the street.
* 25 A A boy's voice, muffled through the wall.
26 D BOY [O.S.]: Lamps, Mr. Wren! Gas is on at Fenchurch!
27 A ¶ Tobias does not turn.
28 A Adelaide watches him not turn.
29 D ADELAIDE: Your boy?
30 D TOBIAS: Hired.
31 D ADELAIDE: He shouts like his mother.
32 A ¶ Tobias's jaw works.
33 A He crosses to the stove.
34 A Opens it.
35 A Closes it.
* 36 A Nothing inside.
37 D TOBIAS: Tea?
38 D ADELAIDE: No.
39 A ¶ She sits.
40 A Finally.
* 41 A The chair creaks.
42 A He looks at the chair, then at her gloves.
43 D TOBIAS: Take those off. You'll boil.
44 D ADELAIDE: It's November.
45 D TOBIAS: Still.
* 46 A ¶ A long beat.
47 A She pulls one finger loose.
48 A Stops.
49 A Pushes it back.
50 D ADELAIDE: I said what I came to say. In the letter.
51 D TOBIAS: I burned the letter.
52 D ADELAIDE: Then you know.
53 D TOBIAS: I know.
54 A ¶ The boy shouts again, further off.
* 55 A Fainter.
56 D BOY [O.S.]: Lamps!
57 A ¶ Adelaide rises.
58 A Smooths her skirt twice.
59 A Crosses to the door.
60 A Stops with her back to him.
61 D ADELAIDE: Light one for me. On Fenchurch.
62 D TOBIAS: It's lit.
63 D ADELAIDE: Then light it again.
64 A ¶ She leaves.
* 65 A The bell over the door swings.
66 A Tobias takes down the dusty lamp.
67 A Wipes the smear with his sleeve.
68 A Carefully.

### SCENE s01072 | INT. MAINTENANCE CRAWLSPACE ABOVE CUBICLE FARM - DAY
Detected names (may be incomplete or contain aliases): RENATA KOWALCZYK, INTERCOM
* 1 A ¶ Ductwork.
* 2 A Dust.
* 3 A A folding chair wedged between pipes.
* 4 A A thermos.
* 5 A A lunch bag labeled "DO NOT TOUCH."
6 A ¶ RENATA KOWALCZYK, 40s, lanyard, cardigan, eats a sandwich.
7 A Content.
* 8 A A small desk fan hums.
* 9 A ¶ Through the vent grate below: the office.
* 10 A Fluorescent hum.
* 11 A Keyboards.
12 D INTERCOM [V.O.]: Good afternoon, team. A reminder that the quarterly synergy audit begins at three.
13 A ¶ Renata chews.
14 A Nods.
15 A Pours tea.
16 D INTERCOM [V.O., CONT'D]: Auditors will be reviewing all workstations. Including unoccupied ones.
17 A ¶ She stops chewing.
18 D INTERCOM [V.O., CONT'D]: Employee Kowalczyk's desk has been unoccupied for eleven months. Please report to Facilities.
19 A ¶ Renata sets down the sandwich.
20 A Looks through the grate.
* 21 A Her empty cubicle.
* 22 A A dead plant.
* 23 A Her nameplate.
24 A ¶ A flashlight beam sweeps the crawlspace behind her.
25 D RENATA (whispering): Oh, no.

### SCENE s01073 | INT. COUNTY COURTHOUSE - LOADING DOCK - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NADIA BRENNAN, ATTORNEY ELI MORROW, JUDGE OKONKWO-REYES, DEPUTY HALE
* 1 A ¶ Concrete.
* 2 A Rolling carts.
* 3 A Evidence boxes stacked to the ceiling.
* 4 A A freight elevator groans.
5 A ¶ ATTORNEY NADIA BRENNAN, 30s, sharp suit, sneakers, drags a box off a cart.
6 A ATTORNEY ELI MORROW, 50s, rumpled, waits with a clipboard.
* 7 A Opposing counsel.
8 A Neither smiles.
9 D ELI: You're late.
10 D NADIA: Your clerk lost the key.
11 D ELI: She never loses keys.
12 D NADIA: She lost this one.
13 A ¶ She pops the lid.
* 14 A Inside: a ledger, water-stained.
15 A Eli goes still.
16 D ELI: That's not on the inventory.
17 D NADIA: It is now.
18 A ¶ JUDGE OKONKWO-REYES, 60s, robe over a windbreaker, appears at the elevator door.
19 A Cigarette unlit between her fingers.
20 A Nadia and Eli straighten.
21 D JUDGE OKONKWO-REYES: Counselors. Tell me why a sealed ledger is sitting on a dock.
22 D ELI: Your Honor, she tampered with a chain of custody.
23 D NADIA: He moved it. I found it.
24 D JUDGE OKONKWO-REYES: She found it. He moved it. Wonderful.
25 A ¶ Eli lunges for the ledger.
26 A Nadia jerks it away.
* 27 A Boxes topple.
28 A A bailiff, DEPUTY HALE, 20s, bursts in from the stairwell, hand on holster.
29 D DEPUTY HALE: Freeze! Everybody!
30 A ¶ All three freeze.
31 A Eli with one hand out.
32 A Nadia clutching the ledger.
33 A The Judge, calm, lights her cigarette.
34 D JUDGE OKONKWO-REYES: Deputy. Stand down. They're lawyers. They only bite on the record.
35 A ¶ Hale lowers his hand.
36 A Exhales.
37 D JUDGE OKONKWO-REYES [CONT'D]: Give me the ledger. Both of you. My chambers, ten minutes.
38 A ¶ Nadia hands it over.
39 A Eli sags against a cart.
40 D ELI: She'll bury us.
41 D NADIA: Not her. She's deciding who gets to dig.
* 42 A ¶ The elevator doors close on the Judge.
43 A Deputy Hale picks up a fallen box.
44 A Sets it carefully back on the stack.

### SCENE s01074 | INT. OFFICE SUPPLY CLOSET WITH A BIRTHDAY PARTY - DAY
Detected names (may be incomplete or contain aliases): GLORIA PETROSYAN, DEZ, ADEYEMI, PRIYA NAIR, TALL MAN, BERTRAM, MAILROOM KID
* 1 A ¶ A closet turned party room.
* 2 A Paper streamers.
* 3 A A sheet cake on a filing box.
* 4 A Fluorescent hum.
* 5 A A banner: HAPPY 5TH ANNIVERSARY OF THE REORG.
6 A ¶ GLORIA PETROSYAN, 50s, regional manager, lanyard heavy with badges, cuts cake into identical squares.
7 A DESMOND "DEZ" ADEYEMI, 30s, tie loosened, scrolls his phone.
8 A PRIYA NAIR, 20s, intern, holds a stack of paper plates like a shield.
9 A ¶ A TALL MAN in a gray suit leans in the doorway.
10 A Clipboard.
11 A No smile.
12 A Nobody knows him.
13 D GLORIA: Cake?
14 D DEZ: I'm good.
15 D PRIYA: I'll take his. If he's not.
16 D GLORIA: Take two.
17 A ¶ Priya takes two.
18 A Eats one standing.
19 A Dez keeps scrolling.
20 D TALL MAN: Is this the Q3 alignment huddle?
21 D GLORIA: It's cake.
22 D TALL MAN: But is it a huddle?
23 D DEZ (muttering): Everything's a huddle.
24 D PRIYA: Is that bad?
25 D DEZ: It's Tuesday.
26 A ¶ The Tall Man writes something.
27 A Gloria slides a square toward him.
28 A He doesn't take it.
29 D GLORIA: You're with Compliance?
30 D TALL MAN: Efficiency.
31 D DEZ: Same floor as Compliance.
32 D TALL MAN: Different elevator.
33 A ¶ Priya laughs.
34 A Stops.
35 A Looks at Gloria.
36 A Gloria is not laughing.
37 D GLORIA: Name?
38 D TALL MAN: Hollis. Bertram Hollis.
39 D GLORIA: Mr. Hollis. Cake?
40 D BERTRAM (softening): Fine. A small one.
41 A ¶ She hands him a plate.
42 A He eats.
43 A Chews slowly.
44 A Dez finally pockets his phone.
45 D DEZ: So what's being made efficient?
46 D BERTRAM: Closets.
47 D PRIYA: This closet?
48 D BERTRAM: Any closet.
49 A ¶ Gloria and Dez trade a look.
50 A Priya stuffs the second square in her mouth whole.
51 D GLORIA: We use this one.
52 D BERTRAM: For parties.
53 D GLORIA: For morale.
54 D BERTRAM: Morale isn't a line item.
55 D DEZ: Neither is you.
* 56 A ¶ Silence.
57 A Priya swallows.
58 A Bertram caps his pen, uncaps it.
59 D BERTRAM: I'll note the cake.
60 D GLORIA: Note the frosting. It's lemon.
61 D BERTRAM: Lemon.
62 D PRIYA: Lemon's her mother's recipe.
63 D GLORIA: It's not.
64 D PRIYA: Oh.
* 65 A ¶ The door swings.
* 66 A A cart of toner cartridges rolls in, pushed by nobody visible.
67 A Everyone steps back.
* 68 A The cart bumps the cake box.
* 69 A Cake wobbles.
70 A ¶ All four grab at the box.
71 A Dez catches the front corner.
72 A Priya the back.
73 A Gloria the cake.
74 A Bertram the banner.
* 75 A Everything holds.
76 A ¶ They stand like that.
77 A Breathing.
78 D DEZ: Nobody say anything.
79 D BERTRAM: I wasn't going to.
80 D GLORIA: Mr. Hollis, you're holding a banner.
81 D BERTRAM: So I am.
82 A ¶ He doesn't let go.
83 A Neither does anyone else.
* 84 A The fluorescent hum fills the closet.
85 D PRIYA: Is this the huddle?
86 D BERTRAM (dry): Yes.
87 D GLORIA: Then I'd say alignment is achieved.
88 A ¶ Dez snorts.
89 A Priya giggles.
90 A Bertram, against his will, almost smiles.
91 A The cart's wheel squeaks once, and a tiny voice calls from behind the toner.
92 D MAILROOM KID [O.S.]: Sorry! Sorry. Is that Gloria's closet?
93 D GLORIA (calling): It's everyone's closet.
94 D MAILROOM KID [O.S.]: Cool. Also there's cake?
95 A ¶ Gloria hands Priya the knife.
96 D GLORIA: Cut another.

### SCENE s01075 | EXT. HANGING BRIDGE OF SPIDERSILK - ABOVE THE MOONLIT CHASM - NIGHT
Detected names (may be incomplete or contain aliases): QUEEN ISOLDE VANTERRE, MORVAN UNMADE, ROYAL HERALD
* 1 A ¶ Wind howls.
* 2 A A bridge of woven silver thread spans a bottomless gorge.
* 3 A Far below, pale lights drift like fallen stars.
4 A ¶ QUEEN ISOLDE VANTERRE, 40s, crowned in antlers of white bone, grips the rail.
5 A Her cloak snaps in the gale.
6 A Opposite her, at the far end of the span: MORVAN THE UNMADE, ageless, a figure of black smoke and one burning eye.
7 D QUEEN ISOLDE: You have no claim on this valley.
8 D MORVAN (echoing, from everywhere): The valley has no claim on you, and yet you bleed for it.
9 A ¶ She steps onto the bridge.
* 10 A Threads hum beneath her boots.
11 D QUEEN ISOLDE: Go back to your cold hollow, Morvan.
12 D MORVAN: Come and make me.
* 13 A ¶ A horn sounds from the castle far behind her.
14 A Isolde does not turn.
* 15 A Smoke rolls along the silver strands.
16 D ROYAL HERALD [V.O.] (distant, over the wind): Majesty! The east wall has fallen! Return at once!
17 D QUEEN ISOLDE (calling back): Hold the gate!
18 A ¶ She draws a pale sword from her belt.
* 19 A It blazes white.
20 A Morvan lifts a hand; the smoke thickens into a spear of shadow.
21 D MORVAN: You cannot be in two places, little queen.
22 D QUEEN ISOLDE: I am not in two places. I am here.
23 A ¶ She runs.
* 24 A The bridge sways.
25 A The spear hurls.
26 A Her blade meets it in a burst of light, and the gorge rings like a bell.
27 D MORVAN: Then fall here.
28 D QUEEN ISOLDE: Not while a thread holds.
29 A ¶ She drives forward.
* 30 A Smoke breaks around her.
* 31 A The silver strands blaze.
32 A Morvan roars.
* 33 A ¶ The wind does not let up.

### SCENE s01076 | INT. HOTEL BALLROOM - STACKED CHAIRS AFTER A CONFERENCE - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE DELACROIX-OYELARAN, THADDEUS BECK
* 1 A ¶ Chairs stacked in towers.
* 2 A A banner reading SYNERGY SUMMIT sags from one corner.
* 3 A Two coffee urns, empty.
4 A One man, one woman, one table.
5 A ¶ MARGUERITE DELACROIX-OYELARAN, 50s, VP of Culture.
6 A Reading glasses on a chain.
7 A THADDEUS BECK, 30s, regional trainer, name tag still on.
8 A She sits.
9 A He stands.
10 D MARGUERITE: Sit, Thaddeus.
11 D THADDEUS: I'd rather stand.
12 D MARGUERITE: That's what people say before they're fired.
13 D THADDEUS: Am I being fired?
14 D MARGUERITE: No. You're being promoted. Which is worse.
15 D THADDEUS: Okay.
16 D MARGUERITE: You'll lead the new Innovation Pod. Eight people. No budget.
17 D THADDEUS: That's not a promotion.
18 D MARGUERITE: It has a title.
19 D THADDEUS: What title?
20 D MARGUERITE: Chief Pod Officer.
21 D THADDEUS: That's a joke.
22 D MARGUERITE: It's on the org chart. I printed it.
23 D THADDEUS: Marguerite.
24 D MARGUERITE: I know.
25 D THADDEUS: Last month you cut my team in half. You said "lean."
26 D MARGUERITE: It was lean.
27 D THADDEUS: You said "family."
28 D MARGUERITE: We are a family.
29 D THADDEUS: Families don't send a calendar invite for a funeral.
30 D MARGUERITE: Thaddeus.
31 D THADDEUS: They sent me an invite. For my own mentor's funeral. Titled "Farewell Sync."
32 D MARGUERITE: That was an unfortunate template.
33 D THADDEUS: It had a Zoom link.
34 D MARGUERITE: Lower your voice.
35 D THADDEUS: The room is empty!
36 D MARGUERITE: The walls are not.
37 D THADDEUS: I trained four hundred people today. About "psychological safety." Four hundred. I held their hands.
38 D MARGUERITE: And they loved you.
39 D THADDEUS: They're also being laid off.
40 D MARGUERITE: You knew that.
41 D THADDEUS: I found out at lunch. From a vending machine receipt. Somebody's severance code was on it.
42 D MARGUERITE: That's an IT problem.
43 D THADDEUS: No. That's a me problem. I smiled at them. I handed out lanyards. With their termination dates printed on the back.
44 D MARGUERITE (quietly): Thaddeus.
45 D THADDEUS: I'm done. Chief Pod Officer. I'm done.
46 D MARGUERITE: You can't quit. You haven't vested.
47 D THADDEUS: Watch me.
48 A ¶ He rips off his name tag and slaps it on the table.
49 A She stares at it a long moment.
50 D MARGUERITE: That's a two-hundred-dollar badge.
51 D THADDEUS: Put it on the budget I don't have.

### SCENE s01077 | EXT. SALT FLATS - ABANDONED RAILWAY SIDING - DAWN
Detected names (may be incomplete or contain aliases): MAJOR ALEKSANDRA VOSS, LIEUTENANT RAFAEL OROZCO
* 1 A ¶ Glare off the white crust.
* 2 A A rusting locomotive sits on a rail that leads nowhere.
* 3 A Smoke on the horizon.
4 A ¶ MAJOR ALEKSANDRA VOSS, 40s, field coat, a bandage across her palm, crouches by the engine's wheel.
5 A Beside her, LIEUTENANT RAFAEL OROZCO, 20s, pale and sunburned, scans the horizon with binoculars.
6 A ¶ She wipes grit from a map.
7 A He lowers the glasses.
8 D OROZCO: Dust on the east road, Major.
9 D VOSS: How much?
10 D OROZCO: A lot.
11 A ¶ She stands.
12 A Squints.
13 A Unfolds the map across the locomotive's flank.
14 D VOSS: Armor, then. Or trucks. We'll know in a minute.
15 A ¶ He doesn't move.
16 A She looks at him.
17 A He is gripping the binoculars hard.
18 D VOSS [CONT'D]: Lieutenant.
19 D OROZCO: Ma'am.
20 D VOSS: Breathe.
21 A ¶ He does.
22 A She takes the glasses from his hands, raises them.
23 A Her jaw sets.
24 D OROZCO: It's trucks?
25 D VOSS: It's both.
26 A ¶ She hands the binoculars back.
27 A He looks again.
28 A Lowers them slowly.
29 D OROZCO: We could hole up in the engine.
30 D VOSS: It's a coffin with a smokestack.
31 A ¶ He nods.
32 A He stares at the rails.
33 A She folds the map, tucks it into her coat, pulls out a small mirror.
34 D OROZCO: What's that for?
35 D VOSS: Signal. If anyone is still listening on that ridge.
36 A ¶ He watches her angle the mirror to the sun.
* 37 A A flash.
* 38 A Another.
* 39 A Another.
40 A She waits.
41 A He waits.
* 42 A Nothing answers.
43 D OROZCO: Ma'am. If nobody is there?
44 D VOSS: Then we signal anyway.
45 A ¶ She flashes again.
* 46 A The dust cloud swells on the road.
47 A He pulls his rifle from his shoulder.
48 A She puts her hand on the barrel.
49 A Gently.
50 A He looks at her.
51 D VOSS [CONT'D]: Not yet.
52 A ¶ He lowers it.
* 53 A The sun climbs higher.
* 54 A Far off, an engine note rises, like a long breath drawn.
55 A ¶ She keeps flashing the mirror.
56 A He starts to count under his breath.

### SCENE s01078 | INT. SKATING RINK CONCESSION STAND - AFTERNOON
Detected names (may be incomplete or contain aliases): JUNE, ABARA, DANNY KOSTOPOULOS, MR. PRUITT
* 1 A ¶ 1989.
* 2 A Faded posters of rollerskates.
* 3 A A disco ball turns slowly over empty hardwood.
* 4 A The popcorn machine hums.
* 5 A Behind the counter, a cluttered shelf of mismatched rental skates.
6 A ¶ JUNIPER "JUNE" ABARA, 16, braids and a Walkman, counts quarters into a cash drawer.
7 A She is the only one working.
8 A Her mouth moves silently with whatever she hears.
* 9 A ¶ The front door chimes.
10 A DANNY KOSTOPOULOS, 17, enters.
11 A Letterman jacket too big for him.
12 A He carries a gym bag.
13 D DANNY: Hey. Is the big room open?
14 D JUNE (pulling off a headphone): Not till four.
15 D DANNY: I'll wait.
16 D JUNE: Suit yourself.
17 A ¶ He sits on a stool.
18 A Taps the counter.
19 A Pretends not to look at her.
20 A She pretends not to notice.
21 D DANNY: Do you work here, like, always?
22 D JUNE: Saturdays. And school nights. And whenever Mr. Pruitt forgets to pay somebody else.
23 D DANNY: That sounds rough.
24 D JUNE: It's okay. I get free popcorn.
25 A ¶ She slides a small bag across the counter.
26 A He takes it.
27 D DANNY: Thanks.
28 D JUNE: Don't tell Pruitt.
29 D DANNY: Wouldn't.
30 A ¶ They sit in friendly quiet.
* 31 A The disco ball turns.
* 32 A A speaker crackles overhead.
33 D MR. PRUITT [V.O.] (over the PA): June, did you restock the nacho cheese?
34 D JUNE (calling up at the ceiling): Yes, Mr. Pruitt!
35 D MR. PRUITT [V.O.]: Good girl.
36 A ¶ June rolls her eyes.
37 A Danny almost laughs.
38 A He pulls a folded paper from his jacket.
39 D DANNY: Can I ask you something? Not weird.
40 D JUNE: That's how weird questions start.
41 D DANNY: It's about my sister.
42 D JUNE: Okay.
43 A ¶ He unfolds the paper.
* 44 A A flyer.
* 45 A A missing-person flyer, photocopied crooked.
* 46 A A girl's face, braids like June's.
47 D DANNY: She worked here. Last summer.
48 A ¶ June stops counting quarters.
49 D JUNE: Rosalind.
50 D DANNY: You knew her?
51 D JUNE: I took her shifts. When she left.
52 D DANNY: She didn't leave. She --
53 A ¶ He cuts himself off.
54 A June closes the cash drawer.
55 A Very slowly.
56 D JUNE: Danny. Mr. Pruitt keeps a locked room. Behind the skate lockers.
57 D DANNY: What's in it?
58 D JUNE: I don't know. But Rosalind's jacket is hanging on the door.
59 A ¶ Danny stares at her.
* 60 A The popcorn machine hums.
* 61 A The disco ball spins across his face.
62 D DANNY: Show me.
63 D JUNE: Not now.
64 D DANNY: Why not?
65 D MR. PRUITT [V.O.] (over the PA, cheerful): Folks, we're opening the big room early today. Skate on in!
* 66 A ¶ The doors at the far end of the rink swing open.
* 67 A Light floods the floor.
68 D JUNE: That's why.
69 A ¶ She reaches under the counter.
70 A Pulls out a ring of keys.
71 A Presses them into his palm.
72 D JUNE [CONT'D]: Four o'clock. When the music's loud. The brass one.
73 D DANNY (barely a whisper): Thank you.
74 D JUNE: Don't thank me yet.
75 A ¶ Danny pockets the keys.
76 A Picks up his gym bag.
77 A Skaters spill through the far doors.
78 A June puts on her Walkman and turns back to the register, calm as a clock.
79 A ¶ The disco ball catches Danny's face one last time as he walks into the crowd.

### SCENE s01080 | INT. MUNICIPAL ARBITRATION ROOM - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR SALAZAR-KIM, LAWYER DEWITT PIKE, YUSUPOVA
* 1 A ¶ Fake wood paneling.
* 2 A A humming vending machine in the corner.
* 3 A A conference table too big for the room.
4 A ¶ ARBITRATOR SALAZAR-KIM, 50s, bifocals, reads a file.
5 A Across from her sit LAWYER DEWITT PIKE, 40s, tie clip shaped like a gavel, and CLIENT MRS. YUSUPOVA, 70s, handbag on her lap.
6 A Pike clicks a pen.
7 A Mrs. Yusupova stares at the vending machine.
8 A Salazar-Kim turns a page, Pike clicks again, and Mrs. Yusupova opens her handbag, closes it, opens it.
9 D SALAZAR-KIM: Mr. Pike, your client claims the landlord shut off her heat for three winters.
10 D PIKE: Correct.
11 D SALAZAR-KIM: Mrs. Yusupova, is that accurate?
12 D MRS. YUSUPOVA: Cold. Always cold. I wear coat in kitchen.
13 D SALAZAR-KIM: And the landlord, Mr. Brandt, says he was never notified.
14 D PIKE: We have eleven letters.
15 D SALAZAR-KIM: Sent how?
16 D PIKE: Certified mail.
17 D MRS. YUSUPOVA: Also I knock his door. Many times.
18 D SALAZAR-KIM: Did he answer?
19 D MRS. YUSUPOVA: Once. He gave me blanket.
20 D PIKE: Your Honor, that's not relevant.
21 D SALAZAR-KIM: I'm an arbitrator, Mr. Pike. Not a Your Honor. And I'd like to hear about the blanket.
22 D MRS. YUSUPOVA: Gray. Scratchy. Smell like dog.
23 D SALAZAR-KIM (writing): Gray, scratchy, smelled like dog.
24 D PIKE: We'd ask for restitution of nine thousand dollars.
25 D SALAZAR-KIM: And the blanket?
26 D MRS. YUSUPOVA: Keep. Is warm.

### SCENE s01081 | INT. BACK ROOM OF A TAXIDERMY SHOP - NIGHT
Detected names (may be incomplete or contain aliases): ROCCO, VANTI, SAL MAROUNI, LENA FISHBACH, TIMOTHY BLACKWOOD-ADE
* 1 A ¶ Glass eyes.
* 2 A Stuffed owls.
* 3 A A badger mid-snarl.
* 4 A A card table with four chairs and one bare bulb.
5 A ¶ ROCCO "THE BOOKKEEPER" VANTI, 50s, rolled sleeves, counts cash into neat stacks.
6 A SAL MAROUNI, 30s, tracksuit, bounces a knee.
7 A LENA FISHBACH, 40s, wire glasses, watches the door.
8 A TIMOTHY BLACKWOOD-ADE, 20s, nervous, holds a duffel bag in his lap.
9 D ROCCO: Eighty. Eighty-five. Ninety.
10 D SAL: Where's the rest?
11 D ROCCO: Counting, Sal.
12 D LENA: Timothy, put the bag on the table.
13 D TIMOTHY: It's fine here.
14 D SAL: Put it on the table.
15 D TIMOTHY: I said it's fine.
16 D LENA: Why are you sweating?
17 D TIMOTHY: It's hot.
18 D SAL: It's a taxidermy shop in November.
19 D TIMOTHY: The badger gives off heat.
20 D ROCCO (not looking up): Ninety-five. A hundred.
21 A ¶ Lena shifts her chair.
* 22 A A floorboard creaks somewhere above them.
23 A Timothy flinches.
24 D SAL: Who else is here?
25 D TIMOTHY: Nobody.
26 D LENA: There's a second floor?
27 D ROCCO: Storage.
28 D SAL: Check it.
29 D LENA: I'll check it.
30 D ROCCO: Sit down, Lena.
31 D LENA: Rocco, there's something up there.
32 D ROCCO: It's a possum. Frank keeps one on a branch.
33 D SAL: Dead?
34 D ROCCO: Obviously dead.
* 35 A ¶ The ceiling creaks again.
36 A All four look up.
* 37 A The bulb sways.
* 38 A A shadow slides across the badger's snout.
39 D TIMOTHY: That didn't sound dead.
40 D LENA: That sounded like a person.
41 D SAL: Give me the bag.
42 D TIMOTHY: No.
43 D SAL: Give me the bag, Timothy.
44 D TIMOTHY: I can't.
45 D ROCCO (slowly setting down the money): Why not?
46 D TIMOTHY: Because it's not the money.
* 47 A ¶ Silence.
* 48 A The bulb swings.
49 A Sal's hand drifts toward his jacket.
50 A Lena eases her chair back.
51 D LENA: Then what is it?
52 D TIMOTHY: I didn't have a choice. They said bring it or --
53 D ROCCO: Who said?
54 D TIMOTHY: The man upstairs.
* 55 A ¶ The ceiling groans.
56 A Footsteps cross to the top of the stairs.
57 A A silhouette fills the doorway above.
58 A Boots descend one step at a time.
59 D SAL (whispering): Rocco.
60 D ROCCO: Everybody stay calm.
61 D LENA: I'm calm.
62 D SAL: I'm not calm.
63 D TIMOTHY: He said don't run.
64 A ¶ The boots reach the bottom stair.
65 A A hand reaches out and flicks off the bulb.
* 66 A Dark.
* 67 A Glass eyes gleam in the red glow of an exit sign.
68 D ROCCO (a hush): Nobody move.

### SCENE s01082 | INT. MINIATURE GOLF CLUBHOUSE - A PIRATE SHIP FOUNDERED IN PLASTER - DAY
Detected names (may be incomplete or contain aliases): BARNABY QUINCE, ODALYS FERREIRA-LAWSON, PARROT, CHILD
* 1 A ¶ A clubhouse built like a shipwreck.
* 2 A Fiberglass barnacles.
* 3 A A parrot animatronic that squawks on a timer.
* 4 A Scorecards pinned to a mast.
* 5 A The windows overlook a windmill hole where nobody is playing.
6 A ¶ BARNABY QUINCE, 50s, tour-guide's moustache, pirate hat two sizes small, sits behind the counter practicing a speech to the empty room.
7 A Beside the register, ODALYS FERREIRA-LAWSON, 20s, mini-golf league champion, rolls a putter along the floorboards, bored.
8 D BARNABY (to the room): Ahoy, ye mighty putters! Today we face the Kraken's Revenge, hole eighteen, par three...
9 D ODALYS: Nobody is here, Barnaby.
10 D BARNABY (muttering to himself): Practice makes plunder.
11 D ODALYS: You say that to the parrot, too.
12 D BARNABY: The parrot's a good listener.
13 A ¶ The parrot squawks on cue.
14 D PARROT [V.O.]: Pieces of eight! Pieces of eight!
15 D BARNABY: See?
16 D ODALYS: It's on a loop.
17 A ¶ She sinks a putt into a coffee cup.
18 A Barnaby claps.
19 A She bows.
20 D BARNABY: Ladies and gentlemen --
21 D ODALYS: There's no ladies and gentlemen.
22 D BARNABY: Ladies and gentleman.
23 D ODALYS: Gentleperson.
24 D BARNABY (delighted): Gentleperson! Excellent.
* 25 A ¶ The door chimes.
26 A A family of six enters in matching shirts.
27 A They fill the clubhouse with sunburn and noise.
28 A Barnaby leaps up, hat tilting.
29 D BARNABY [CONT'D] (grandly, to all): Welcome, brave souls! Who dares challenge the Kraken?
30 A ¶ A small child points at Odalys.
31 D CHILD: She's got a golf stick!
32 D ODALYS (to the child): It's a putter.
33 D BARNABY (to the child): It's a cutlass, my boy.
34 A ¶ They speak at once.
35 D BARNABY [CONT'D]: Eighteen holes of peril!
36 D ODALYS: ^Eighteen holes of boredom.
37 D BARNABY (hissing): Odalys.
38 D ODALYS (whispering back): What? It's honest.
39 A ¶ The family cheers anyway.
40 A Barnaby sweeps the hat off, bows with a flourish.
* 41 A The hat tips off his head, rolls across the floor, and stops at the child's feet.
42 A The child puts it on.
43 D BARNABY (quietly, to himself): Well, that's a first.
44 D ODALYS (to him, under her breath): Don't get used to it. You'll want it back.
45 A ¶ Barnaby hands out putters.
46 A Odalys slides the scorecards across the counter.
47 A The parrot squawks.
48 D PARROT [V.O.]: Pieces of eight!
49 D ODALYS (deadpan): And a mutiny.

### SCENE s01083 | INT. WIZARD'S LIBRARY - THE ROOM OF TURNING SHELVES - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST THESSALY MOORE, KESTREL DONOVAN-ABIOLA, VOICE, RAVEN-HEADED STRANGER, SCRIBE
* 1 A ¶ Shelves rotate on slow brass gears.
* 2 A Books drift between them on their own.
* 3 A A fire burns in a hearth with no chimney.
* 4 A Candles hover.
5 A ¶ ARCHIVIST THESSALY MOORE, 40s, ink-stained sleeves, spectacles on a cord, kneels at a lectern, copying a rune.
6 A Beside her, apprentice KESTREL DONOVAN-ABIOLA, 16, holds a lantern.
7 A Both ignore the voice murmuring through the walls.
8 D VOICE [V.O.] (from the stone itself): Found you.
9 A ¶ Thessaly's quill stops.
10 A Kestrel steps closer to her.
11 D KESTREL: Was that the library?
12 D THESSALY: The library doesn't speak.
13 D VOICE [V.O.]: Oh, but I do. Thessaly Moore. You took something that is mine.
14 D THESSALY (not looking up): I borrowed a book.
15 D VOICE [V.O.]: A book. Yes. Open to the last page and read me what it says.
16 A ¶ Kestrel pulls a leather volume from the shelf.
* 17 A It is warm in her hands.
18 A She flips to the last page.
19 D KESTREL (reading): "Whoever opens this book wakes the one who wrote it."
20 D THESSALY: Put it back. Slowly.
21 A ¶ Kestrel reaches.
* 22 A The shelf rotates away from her.
* 23 A The book will not return to its slot.
24 D VOICE [V.O.]: Do not trouble yourself. I am already awake.
* 25 A ¶ The candles gutter.
* 26 A In the center of the room, the air thickens.
27 A A tall figure forms in a coat of gray feathers.
28 A A RAVEN-HEADED STRANGER, calm, hands clasped.
29 A Its beak glints.
30 D RAVEN-HEADED STRANGER: Good evening. I am the Scribe.
31 D THESSALY: I know who you are.
32 D SCRIBE: Then you know why I came.
33 A ¶ Kestrel edges behind the lectern.
34 A Thessaly rises, quill still in hand.
35 D THESSALY: The pages were never yours. They belonged to the kingdom.
36 D SCRIBE: I wrote the kingdom. Every war. Every winter. Every funeral. It is all mine.
37 D KESTREL (quietly): Thessaly, his shadow is moving wrong.
* 38 A ¶ It is.
39 A The shadow on the floor writes in the air, slow letters curling in black smoke.
40 D THESSALY: Don't read it.
41 D KESTREL: I can't help it.
42 A ¶ She reads.
43 A Her eyes widen.
44 D KESTREL [CONT'D]: It says my name.
45 D SCRIBE: Kestrel Donovan-Abiola. Born in the ninth year of the drought. Died in the eleventh page of tonight.
46 D THESSALY (stepping between them): Then turn the page.
47 D SCRIBE: I would, if you could stop me.
48 A ¶ Thessaly raises the quill.
* 49 A The tip ignites white.
50 A She draws a line across the air.
* 51 A A bright barrier of light slices the room.
52 A ¶ The Scribe flinches.
* 53 A Feathers scatter.
54 D SCRIBE [CONT'D] (a hiss): That ink is older than I am.
55 D THESSALY: Good. It remembers you.
* 56 A ¶ The shelves spin faster.
* 57 A The book in Kestrel's hands flares gold.
58 A She slams it shut.
59 A The Scribe shrieks.
60 D SCRIBE: Give it back!
61 D KESTREL (holding it close): No.
* 62 A ¶ The hearth fire roars.
* 63 A The room tilts.
* 64 A Candles fall like stars.
65 D SCRIBE [V.O.] (already fading): Then I will wait. Stories do.
66 A ¶ The figure dissolves into black ink that runs down the wall and soaks into the stone.
* 67 A The shelves slow.
* 68 A The candles steady.
* 69 A ¶ Silence.
70 A Thessaly lowers her quill, trembling.
71 A Kestrel lets out a breath.
72 D KESTREL: Is it over?
73 D THESSALY: Not while the book is open.
74 A ¶ Kestrel looks down.
* 75 A The cover is warm.
* 76 A Something inside it beats.

### SCENE s01084 | INT. DRAINED SWIMMING POOL - COMMUNITY CENTER - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE CASSIUS RHEE, FORENSIC TECH BELINDA OSEI, CAPTAIN VOSS, DOLORES AMADI
* 1 A ¶ Cracked blue tile.
* 2 A A dry deep end littered with leaves.
* 3 A Floodlights on stands.
* 4 A Yellow tape across the diving board.
5 A ¶ DETECTIVE CASSIUS RHEE, 40s, rain jacket, notebook, crouches at the bottom of the deep end beside a chalk outline.
6 A FORENSIC TECH BELINDA OSEI, 30s, white suit, kneels with a camera.
* 7 A A tarp covers something near the drain.
8 D RHEE: Time of death?
9 D OSEI: Medical examiner says midnight. Give or take.
10 D RHEE: Who drained the pool?
11 D OSEI: Nobody. It's been empty since August.
12 D RHEE: Then how did she end up down here?
13 D OSEI: She fell. Or she was pushed.
14 A ¶ He steps over the chalk.
15 A Lifts the tarp with a pen.
* 16 A Underneath, a single red high-heeled shoe.
17 D RHEE: Where's the other?
18 D OSEI: Haven't found it.
* 19 A ¶ A phone rings.
* 20 A Rhee's.
21 A He answers.
22 D CAPTAIN VOSS [V.O.] (tinny, over the phone): Rhee. Anything?
23 D RHEE: A shoe, Captain. Just a shoe.
24 D CAPTAIN VOSS [V.O.]: There's a witness on her way down. Janitor. Says she saw something.
25 D RHEE: Copy.
26 A ¶ He hangs up.
* 27 A Footsteps on the stairs.
28 A A figure descends: MS. DOLORES AMADI, 60s, janitor's apron, mop in hand like a staff.
29 A She stops at the pool edge.
30 D DOLORES: Detective?
31 D RHEE: Ms. Amadi. Come down.
32 A ¶ She picks her way down the shallow-end steps, mop first.
33 D DOLORES: I saw a man. By the diving board. Very tall. Very quiet.
34 D OSEI: What was he wearing?
35 D DOLORES: Gray. A long coat. Like a priest.
36 D RHEE: Did he see you?
37 D DOLORES: No. But he left something.
38 A ¶ She reaches into her apron pocket.
39 A Pulls out the second red shoe, wrapped in a plastic bag.
40 A Rhee and Osei exchange a look.
41 D OSEI: You touched it?
42 D DOLORES: I wore gloves.
43 D RHEE (taking it): Thank you.
* 44 A ¶ A clang from the diving board.
45 A All three whip around.
* 46 A The tape trembles.
47 A A silhouette stands at the top of the board, backlit by dawn.
48 D RHEE [CONT'D] (low): Police! Stay where you are!
49 A ¶ The silhouette leaps.
50 A Rhee lunges.
51 A Osei drops the camera.
52 A Dolores raises the mop.
* 53 A They collide at the lip of the deep end in a tangle of arms, mop handle and raincoat.
* 54 A ¶ A bright flash from Osei's camera bursts across the tile.
55 A The man scrambles up the stairs.
56 A Rhee and Dolores sprawl together.
57 A Osei pulls herself up.
58 D OSEI: He's gone!
59 D RHEE (breathing hard): Not far.
60 A ¶ Dolores sits, hand on her chest, mop still clutched.
61 D DOLORES: Detective. I think I know that coat.

### SCENE s01085 | INT. NIGHT LAUNDROMAT - 2 A.M.
Detected names (may be incomplete or contain aliases): IMOGEN LAU, SULEIMAN BAH
* 1 A ¶ Buzzing tubes.
* 2 A Twelve machines, all but two idle.
* 3 A A vending machine glows.
* 4 A Rain at the glass.
* 5 A Lint in the corners like snow.
6 A ¶ IMOGEN LAU, 30s, scrubs under a trench coat, sits on a folding table.
7 A Boots swinging.
* 8 A A paperback open and unread.
* 9 A Her dryer turns a single blue sock.
10 A ¶ SULEIMAN BAH, 30s, tall, soft cardigan, loads a washer.
11 A Careful with each shirt.
12 A He folds one before he puts it in.
* 13 A ¶ Silence.
14 A ¶ Her eyes flick to him.
15 A His hands pause on a collar.
16 A Resume.
17 D IMOGEN: You fold before you wash.
18 D SULEIMAN: Habit.
19 D IMOGEN: Strange habit.
20 D SULEIMAN: Strange hours.
21 A ¶ She turns a page she hasn't read.
22 A He shuts the washer.
23 A Coins.
* 24 A Click.
* 25 A Water starts.
26 D IMOGEN: You come here often?
27 D SULEIMAN: Tuesdays.
28 D IMOGEN: It's Thursday.
29 A ¶ He looks at the dryer.
30 A At the single blue sock.
31 D SULEIMAN: Missed a Tuesday.
32 A ¶ She nods.
33 A Watches the sock tumble.
34 A He leans against the washer.
35 A Not too close.
36 A Not far.
37 D IMOGEN: Night shift?
38 D SULEIMAN: Nurse. You?
39 D IMOGEN: Same.
40 D SULEIMAN: Which floor?
41 D IMOGEN: Fourth.
42 D SULEIMAN: Third.
* 43 A ¶ A beat.
* 44 A The washer sloshes.
* 45 A The vending machine hums.
46 A She taps her book.
47 D IMOGEN: We've never met.
48 D SULEIMAN: We passed on the stairs. Once.
49 D IMOGEN: Did we?
50 D SULEIMAN: You had a croissant.
51 A ¶ She almost smiles.
52 A Hides it with the book.
53 A He picks a coin from his palm and rolls it across his knuckles.
54 D IMOGEN: That was a bad day.
55 D SULEIMAN: It was a good croissant.
* 56 A ¶ The dryer buzzes.
57 A She hops down.
58 A Opens it.
59 A Pulls out the sock.
60 A Looks at it.
61 A At him.
62 D IMOGEN: Don't suppose you've lost one.
63 A ¶ He reaches into his cardigan pocket.
64 A Pulls out a blue sock.
* 65 A The match.
66 A ¶ They hold the two socks side by side.
67 A Neither says anything.
68 D IMOGEN [CONT'D]: Tuesday?
69 D SULEIMAN: Tuesday.
70 A ¶ She sets her sock in his palm.
71 A Their fingers do not touch.
72 A Almost.
73 A She picks up her book and walks out into the rain without her coat.

### SCENE s01086 | INT. BOWLING ALLEY - LANE 12 - FINAL FRAME - NIGHT
Detected names (may be incomplete or contain aliases): DRY CREEK LANES, COACH MURIEL TAPIA, DESHAWN, PRITCHETT, ANNIKA BERGSTROM-ODUYA, HANK WILLOUGHBY, PRESTON LI
* 1 A ¶ Neon pins.
* 2 A Sticky carpet.
* 3 A A trophy case.
* 4 A The league championship banner: DRY CREEK LANES - TUESDAY NIGHT FINALS.
5 A A crowd packs the seats behind the rail, sweating, silent.
6 A ¶ COACH MURIEL TAPIA, 60s, windbreaker, clipboard, paces behind the scorers' table.
7 A Next to her, DESHAWN "THE HAMMER" PRITCHETT, 30s, in a team polo, chalks his fingers, rolling his shoulders.
8 A At the lane, ANNIKA BERGSTROM-ODUYA, 20s, ponytail, holds her ball against her chest.
9 A Opposite them on the other bench, rival captain HANK WILLOUGHBY, 50s, red bowling shirt, smirks and cracks his knuckles.
10 A At the scoring console, young scorekeeper PRESTON LI, 17, headset on, watches the monitor.
11 D MURIEL: Ten pins. That's all she needs.
12 D DESHAWN: She's got ice in her veins.
13 D MURIEL: She's got a ball in her hands. Pray it's the right one.
14 A ¶ Annika steps up to the approach.
15 A Breathes.
16 A Stares at the head pin.
17 A The crowd hushes.
18 A Hank leans forward, grinning.
19 A Preston grips his headset.
20 D ANNIKA (under her breath): Spare. Just spare.
21 A ¶ She takes four steps.
22 A Swings.
23 A Releases.
* 24 A The ball tears down the lane, hooks left, a streak of black.
* 25 A It slams the pocket.
* 26 A Pins scatter.
* 27 A Nine fall.
* 28 A One wobbles.
* 29 A Stands.
30 A ¶ The crowd groans.
31 A Hank punches the air.
32 D HANK: Told you she'd choke!
33 D DESHAWN: Sit down, Hank.
34 D HANK: Make me.
35 A ¶ Muriel puts a hand on Deshawn's chest.
36 A He holds.
37 A Annika walks back, staring at the single pin.
38 D PRESTON [V.O.] (over the PA, shaky): Attention, bowlers. Lane twelve. Tenth frame. One ball remaining. Annika Bergstrom-Oduya needs the spare for the title.
39 D MURIEL (low): Annie. Look at me.
40 D ANNIKA: I'm looking.
41 D MURIEL: That pin has been waiting thirty years for someone to knock it down.
42 D ANNIKA: It's been waiting for me.
43 D MURIEL: It's been waiting for all of us.
44 A ¶ Deshawn offers a towel.
45 A She wipes her hands.
46 A Hands it back.
47 A Steps up again.
48 A The crowd leans in.
49 A Hank folds his arms, jaw tight.
50 A ¶ She sets her feet.
51 A Looks at the pin.
52 A Takes the four steps again.
53 A Releases.
* 54 A ¶ The ball rolls slower this time.
* 55 A Gentle.
* 56 A A curve so slight it barely bends.
* 57 A It kisses the last pin at the edge.
* 58 A The pin spins.
* 59 A Tilts.
* 60 A Falls.
* 61 A ¶ For one second, nothing.
62 A Then the whole alley erupts.
63 A Muriel throws her clipboard in the air.
64 A Deshawn lifts Annika off the floor.
65 A Preston screams into his headset.
66 A Hank sits with his arms still folded.
67 D MURIEL [CONT'D]: That's a title!
68 D DESHAWN: That's a Tuesday!
69 A ¶ Annika laughs and cries at once, still held aloft.
70 A Hank rises, walks over, offers a hand across the rail.
71 D HANK: Good game.
72 D ANNIKA (shaking it): Thanks, Hank.
73 D HANK: Next year, I'm bringing the red ball.
74 D ANNIKA: Bring two.

### SCENE s01087 | EXT. CANAL LOCK - LOWER BASIN - DUSK
Detected names (may be incomplete or contain aliases): LOCKKEEPER HOSEA DRUMMOND, CLEMENTINE DRUMMOND, CAPTAIN EZEKIEL ARDEN, MADAME PERPETUA ARDEN, OFFICER
* 1 A ¶ 1824.
* 2 A A narrow barge squeezed in a stone lock.
* 3 A Water churns.
* 4 A Lanterns swing on posts.
* 5 A Ropes creak.
6 A ¶ LOCKKEEPER HOSEA DRUMMOND, 50s, broad, in a tarred coat, cranks the sluice.
7 A His daughter CLEMENTINE DRUMMOND, 12, perches on the gate beam with a coil of rope.
8 A At the stern of the barge, CAPTAIN EZEKIEL ARDEN, 40s, tall hat, cane, looks displeased.
9 A His wife, MADAME PERPETUA ARDEN, 40s, silk veil, grips the rail, glaring at the churning water and murmuring to the horses on the towpath.
10 D HOSEA: Steady now. She'll rise.
11 D EZEKIEL: You said twenty minutes.
12 D HOSEA: I said it'd be about twenty.
13 D CLEMENTINE: It's been twenty-two, sir.
14 D EZEKIEL: Impertinent child.
15 D CLEMENTINE: Accurate child.
16 A ¶ Perpetua lifts her veil.
17 A Stares at Clementine.
18 A A flicker of amusement she smothers at once.
19 D PERPETUA: Ezekiel. Let the man work.
20 D EZEKIEL: I have a train to meet.
21 D HOSEA: No train this side of Wickham.
22 D EZEKIEL: There is a train.
23 D HOSEA: There's a promise of one.
* 24 A ¶ The water surges.
* 25 A The barge shudders and lifts.
* 26 A A rope snaps.
* 27 A The barge yaws toward the wall.
28 A Clementine scrambles along the beam, grabs the loose end, hauls with both hands.
29 A Hosea spins the crank backward.
30 A Ezekiel stumbles, cane clattering.
31 A Perpetua clutches the rail and shouts at the horses.
32 A They back and the barge straightens.
33 D OFFICER [V.O.] (from the towpath, distant): You there! In the lock! Halt in the Crown's name!
34 A ¶ Everyone freezes.
* 35 A Water keeps rising.
36 A Hosea looks at the bank.
* 37 A Four men in coats at the far lamp.
* 38 A A constable's whistle.
39 D EZEKIEL (quietly, not at all arrogant now): Hosea. Open the upper gate.
40 D HOSEA: Sir?
41 D EZEKIEL: Open it. Now.
42 D CLEMENTINE: Papa?
43 A ¶ Hosea looks at Ezekiel.
44 A At Perpetua, pale.
45 A At Clementine.
46 A He sets his jaw.
47 A Cranks the upper sluice.
* 48 A The gate groans open.
49 D HOSEA: Hold on to something.
* 50 A ¶ The water roars.
* 51 A The barge shoots forward into the dark channel, taking the lantern light with it, and the officers' shouts vanish behind.

### SCENE s01088 | EXT. MANGROVE SWAMP - TIDAL FLAT - DAWN
Detected names (may be incomplete or contain aliases): BEE, CALLOWAY, BRAM OKONJO, CAPTAIN HALVARD SKOGLUND
* 1 A ¶ Roots like fingers.
* 2 A Grey mud.
* 3 A A capsized skiff on its side.
* 4 A Mosquitos in clouds.
5 A ¶ BIANCA "BEE" CALLOWAY, 30s, torn shirt, drags a water jug through the mud.
6 A BRAM OKONJO, 40s, one boot missing, limps behind her.
7 A Between them, a bundled shape on a stretcher of branches: CAPTAIN HALVARD SKOGLUND, 60s, eyes closed.
8 D BEE: Bram. Pull.
9 D BRAM: I'm pulling.
10 D BEE: You're limping.
11 D BRAM: I'm limping and pulling.
12 A ¶ She stops.
13 A Wipes her face.
14 A Squats by the captain.
15 A Puts two fingers at his neck.
16 D BEE: Cap. Cap, you in there?
17 A ¶ He stirs.
18 A Mumbles.
19 A Doesn't wake.
20 D BRAM: Tide's turning.
21 D BEE: I can see.
22 D BRAM: We have maybe ten minutes before the flat goes under.
23 A ¶ She stands.
24 A Looks at the skiff.
25 A Looks at the horizon where a thin line of silver crawls toward them.
26 D BEE: Leave the jug.
27 D BRAM: That's our water.
28 D BEE: And that's his life. Choose.
29 A ¶ Bram stares at her.
30 A Drops the jug.
* 31 A It sinks into the mud with a slow burp.
32 A He grabs the stretcher.
33 A She grabs the other end.
34 A They lift.
35 A They stumble.
36 A A root catches Bram's foot; he falls.
* 37 A The stretcher tilts.
38 A The captain groans.
39 D BEE [CONT'D]: Bram!
40 D BRAM: Go on without me.
41 D BEE: Not a chance.
42 A ¶ She sets the stretcher down.
43 A Hauls him up by the belt.
44 A He leans on her.
45 A Their breath rasps.
46 D BRAM: Bee. If I --
47 D BEE: You're not going to.
48 D BRAM: If I do.
49 D BEE: Don't.
* 50 A ¶ The silver line is closer.
* 51 A The mud begins to glisten.
* 52 A A bird shrieks from the roots.
53 D CAPTAIN HALVARD (eyes still shut): Boys. Girls. Hold your horses.
54 D BEE: Cap!
55 D CAPTAIN HALVARD: I can walk.
56 D BRAM: You can't.
57 D CAPTAIN HALVARD: I can crawl. Let me.
58 A ¶ He pushes himself off the stretcher.
59 A Falls to hands and knees.
60 A Starts to crawl.
61 A Bee and Bram watch him go, mud to the elbows.
62 D BEE (quiet): Stubborn old man.
63 D BRAM: He taught us.
64 A ¶ They follow.
* 65 A The water laps their ankles.
* 66 A The roots rise ahead like a gate.

### SCENE s01089 | INT. FIELD HOSPITAL - CONVERTED CHURCH - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR SIOBHAN DELANEY-WRIGHT, SERGEANT MIKHAIL TERZIC, NURSE ROSALIND PARK-EZEIGWE, PRIVATE OSWIN FALCONER, CORPORAL TEDDY AGUILAR, RADIO
* 1 A ¶ Pews pushed against the walls.
* 2 A Cots in the nave.
* 3 A An altar draped with a bloody sheet.
* 4 A A lone candle on the pulpit.
* 5 A Distant artillery, fading.
6 A ¶ MAJOR SIOBHAN DELANEY-WRIGHT, 40s, surgeon, apron stiff with dried blood, writes in a ledger at a pew-desk.
7 A SERGEANT MIKHAIL TERZIC, 30s, bandaged arm, sits on a cot.
8 A NURSE ROSALIND PARK-EZEIGWE, 20s, hair pinned under a cap, adjusts an IV.
9 A PRIVATE OSWIN FALCONER, 18, sleeps in the next cot, face grey.
10 A Nearby, a radio operator, CORPORAL TEDDY AGUILAR, 20s, headphones around his neck, fiddles with a set.
11 D SIOBHAN: Corporal. Anything?
12 D TEDDY: Static, Major.
13 D SIOBHAN: Try the other band.
14 A ¶ He turns the dial.
* 15 A A voice comes through, clipped and tired.
16 D RADIO [V.O.]: ...say again, Dagger Six, this is Hammer. Enemy withdrawing along the river road. All units hold.
17 A ¶ Siobhan looks up.
18 A So does Mikhail.
19 A Rosalind stills with the IV bag in her hand.
20 D MIKHAIL: They're withdrawing?
21 D TEDDY: That's what it says.
22 D ROSALIND: Then it's over?
23 D SIOBHAN: It's over tonight. Not tomorrow.
24 A ¶ She closes the ledger.
25 A Stands.
26 A Wipes her palms on her apron.
27 A Crosses to Oswin's cot, checks his pulse.
28 A Nods.
29 A Draws the blanket up.
30 D ROSALIND: He'll make it?
31 D SIOBHAN: If he sleeps.
32 A ¶ Mikhail rolls his shoulder, winces, tests the bandage.
33 A Rosalind sets down the IV and crosses to him, unwraps the dressing, checks the wound.
34 A He grimaces.
35 A Teddy turns the volume up, trying for another voice.
36 D MIKHAIL: How is it?
37 D ROSALIND: Clean. You'll keep the arm.
38 D MIKHAIL: That is good. I like the arm.
39 D ROSALIND (dry): So does your wife, I imagine.
40 D MIKHAIL: She likes the other one more.
41 A ¶ They laugh, quietly, careful of the sleepers.
* 42 A The laugh dies.
* 43 A The church holds its breath.
44 A Siobhan walks down the aisle between the cots, letting her hand trail along the pews.
45 D RADIO [V.O.]: Dagger Six, copy that. Ceasefire at oh-six-hundred. Repeat, ceasefire at oh-six-hundred.
46 D TEDDY (whispering): Ma'am. Ceasefire. Six a.m.
47 D SIOBHAN (not turning): Thank you, Corporal.
48 A ¶ Teddy pulls the headphones off.
49 A Rubs his face.
50 A Rosalind sits on the end of Mikhail's cot, suddenly unable to stand.
51 A Mikhail pats her shoulder with his good hand.
52 A ¶ At the altar, Siobhan stops.
53 A Lifts the bloody sheet.
54 A Folds it, corner by corner.
55 A Lays it on the stone.
56 A Straightens it.
57 A Steps back.
58 A ¶ Behind her, Oswin stirs, murmurs, and falls still again.
* 59 A The candle gutters and holds.
60 D SIOBHAN [CONT'D] (to the room): Everyone rest. I'll take first watch.
61 A ¶ Rosalind and Mikhail nod.
62 A Teddy lies back on his cot, the radio on his chest, fading into static and sleep.
63 A Siobhan sits in the front pew, hands folded, eyes on the candle.

### SCENE s01090 | EXT. ORCHARD BEHIND A CLOSED CANNERY - LATE SUMMER AFTERNOON
Detected names (may be incomplete or contain aliases): NELL, THEO, DUNNING
* 1 A ¶ Pears hang heavy on the branches.
* 2 A Wasps drone over fallen fruit.
* 3 A Beyond the trees, a corrugated roof rusts under a pale sky.
4 A ¶ NELL, 15, sits with her back against a trunk, knees drawn up.
5 A She has a transistor radio in her lap, tuned to nothing.
* 6 A A paper sack of pears lies beside her.
7 A Dust on her shoes.
8 A A bruise yellowing on one shin.
9 A ¶ She bites a pear.
10 A Chews.
11 A Does not taste it.
* 12 A ¶ A twig snaps.
13 A She looks up.
14 A A boy has stepped from between the trees, hands in his pockets.
15 A THEO, 16, tall and awkward, wearing his older brother's jacket.
16 A He stops ten paces away.
17 A ¶ He studies her.
18 A She studies the pear.
19 D THEO: You're on the Dunnings' side.
20 D NELL: Is there a side?
21 A ¶ He shrugs.
22 A Scuffs a pear into the grass with his toe.
23 A She watches the movement and then the dirt.
24 D THEO: They said you left.
25 D NELL: They said a lot.
26 A ¶ He nods slowly.
27 A She offers him a pear without looking up.
28 A He crosses, takes it, sits a careful distance away.
29 A They eat in silence.
* 30 A A wasp circles his hand.
31 A He lets it.
32 D THEO: My brother's gone. Since June.
33 A ¶ She says nothing.
34 A Turns the dial on the radio.
* 35 A Static swells, then a thin fragment of a song.
36 A She holds still, listening.
37 A He leans in a little.
* 38 A The song fades.
39 D THEO [CONT'D]: That was a good one.
40 D NELL: It always is. Then it goes.
41 A ¶ He half-smiles.
42 A She turns the dial again.
* 43 A Nothing.
44 A She sets the radio on the grass between them.
* 45 A ¶ A screen door bangs somewhere beyond the trees.
* 46 A A woman's voice calls a name that is not hers.
47 A Nell's shoulders rise.
48 A Theo watches them rise.
49 D THEO [CONT'D]: That's for you?
50 D NELL: That's for a girl I was.
51 A ¶ He nods as if this makes sense.
52 A Stands.
53 A Offers his hand.
54 A She looks at it for a long moment.
55 A Then takes it.
56 A He pulls her up.
57 A They let go at the same time.
58 A ¶ At the edge of the orchard, an older figure steps out: MRS. DUNNING, 50s, apron, arms folded.
59 A She stops when she sees them both.
60 A Her face softens.
61 A Hardens.
62 A Softens again.
63 A ¶ Nell straightens.
64 A Theo steps half a pace in front of her.
65 A Mrs. Dunning looks at his jacket, at the radio on the grass, at the pear core in Nell's hand.
66 A ¶ She turns and walks back toward the house.
67 A Leaves the door open behind her.
68 A ¶ Nell picks up the radio.
69 A Theo picks up the sack of pears.
70 A They follow, ten paces apart, then five.

### SCENE s01091 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT IRINA SOLOVYOV, AGENT KOFI MENSAH-BELL, LEONARD HAYES-TAKAHASHI, COURIER, HAYES
* 1 A ¶ Concrete pillars.
* 2 A Oil stains.
* 3 A A flickering sodium light.
* 4 A One car left: a dented Volvo with its trunk open.
5 A ¶ AGENT IRINA SOLOVYOV, 30s, wet hair, tactical vest, crouches behind a pillar, gun drawn.
6 A Beside her, AGENT KOFI MENSAH-BELL, 40s, headset, scans the ramp.
7 A On the far side of the Volvo, a hostage: DR. LEONARD HAYES-TAKAHASHI, 50s, hands zip-tied, mouth taped.
8 A Behind him stands THE COURIER, 30s, black jacket, a gun pressed to Hayes's neck.
9 D IRINA (whispering): Eyes on the target?
10 D KOFI: Northeast pillar. He's moving.
11 D COURIER (calling out): That's far enough!
12 A ¶ Irina and Kofi freeze.
13 A Hayes squeezes his eyes shut.
14 D COURIER [CONT'D]: Drop the weapons. Both of you.
15 D KOFI (raising his voice): We can talk about this.
16 D COURIER: We're talking now.
17 D IRINA (whispering to Kofi): Left. On three.
18 D KOFI (barely moving his lips): He's too close to Hayes.
19 D IRINA: Then we make him move.
20 A ¶ She rolls a coin across the concrete.
* 21 A It clinks against the Volvo's tire.
22 A The Courier whips his head toward it.
23 A Kofi fires into the pillar behind him.
* 24 A Concrete bursts.
25 A Irina charges.
26 A ¶ The Courier shoves Hayes forward.
27 A The three collide beside the car in a heap of limbs.
* 28 A A gun skitters.
29 A Kofi dives for it.
30 A The Courier punches Irina, she slams him against the Volvo, Hayes scrambles under the bumper.
31 D COURIER [CONT'D] (snarling): You don't understand!
32 D IRINA (pinning his arm): Then explain it.
33 A ¶ He heaves.
34 A She holds.
35 A Kofi seizes the loose gun, trains it on the Courier.
36 D KOFI: Down. Now.
37 A ¶ The Courier stills.
38 A His chest rises and falls.
39 A He lets his hand go slack.
40 A Irina kneels on his back and cuffs him.
41 A ¶ Hayes crawls out from under the bumper, tape half-peeled.
42 A Kofi cuts his zip ties.
43 A Hayes gasps.
44 D HAYES (coughing): He said they were coming for me.
45 D KOFI: Who?
46 D HAYES: The Directorate. He wasn't one of them. He was warning me.
47 A ¶ Irina looks at the Courier.
48 A His face is turned against the concrete, eyes wet.
49 D IRINA (quietly): Is that true?
50 D COURIER (muffled): They'll be here in four minutes.
51 A ¶ Kofi checks his watch.
52 A Irina hauls the Courier up.
53 D KOFI: Move.
54 A ¶ They run for the stairwell, the Courier between them, Hayes limping behind.
* 55 A Footsteps echo.
* 56 A Somewhere above, tires screech down a ramp.
57 D IRINA (over her shoulder): Level two exit! Go!
58 A ¶ They vanish through the steel door as headlights sweep across the pillars.

### SCENE s01092 | INT. ROWING BOATHOUSE - EARLY MORNING
Detected names (may be incomplete or contain aliases): COACH HESTER LINDQVIST-AMOAH, PASCAL ODUYA-REYNAUD
* 1 A ¶ Long wooden shells hang from the rafters like the ribs of a whale.
* 2 A Water slaps the dock outside.
* 3 A Mist presses against the glass.
* 4 A The smell of varnish and river mud.
5 A ¶ COACH HESTER LINDQVIST-AMOAH, 60s, thermos in one hand and a stopwatch in the other, sits on an upturned oar rack.
6 A Across the room, her only remaining athlete, PASCAL ODUYA-REYNAUD, 20s, wraps tape around a blistered palm.
7 A They do not look at each other.
* 8 A A kettle ticks on a hotplate.
9 D HESTER (to the room): Tide's slack at six-fifteen.
10 D PASCAL (to his hand): I know.
11 D HESTER (to no one): Wind from the west. Light.
12 D PASCAL: I read the board.
13 A ¶ She sips from the thermos.
14 A He bites the end of the tape.
* 15 A The kettle begins to whistle.
16 A Neither moves.
17 A Hester sighs and rises, pulls the kettle off the hotplate, pours two mugs.
18 A ¶ She sets one on the bench beside him.
19 A He doesn't take it.
20 A She sits again.
21 D HESTER: Sixteen minutes on the water. Then back. Then breakfast.
22 D PASCAL: Fine.
23 D HESTER: Don't "fine" me.
24 D PASCAL: Okay, then.
25 D HESTER: Okay is worse.
26 A ¶ He smiles faintly.
27 A Takes the mug.
28 A Warms his hands on it.
* 29 A Mist drifts in through a crack in the doorframe.
30 D HESTER [CONT'D] (to the room again): Anyone else coming?
31 D PASCAL: You know no one's coming.
32 D HESTER (muttering): I know.
33 A ¶ Pascal sips.
34 A Looks at the shells overhead.
35 A His eyes trace the hull of an eight, then of a single.
36 D PASCAL: Remember when we filled this place?
37 D HESTER: We had fourteen on the squad. And a cox who ate her megaphone.
38 D PASCAL (smiling): Camille.
39 D HESTER: Camille. Yes.
* 40 A ¶ Quiet.
* 41 A The water slaps.
* 42 A A gull cries.
43 D PASCAL: Coach.
44 D HESTER: Hm?
45 D PASCAL: If I miss the cut --
46 D HESTER: You won't.
47 D PASCAL: But if.
48 A ¶ She turns the stopwatch over in her hand.
49 A Reads the back, where someone long ago scratched initials.
50 D HESTER: Then we row anyway.
51 A ¶ He nods.
52 A Finishes his tea.
53 A Sets the mug on the bench and stands.
54 A Pulls on his gloves.
55 A She stands too.
56 A Together they lift a single shell from its cradle.
* 57 A It swings, light as a leaf.
58 D HESTER [CONT'D] (to the room): Mind the door.
59 D PASCAL (to the boat): Easy.
60 A ¶ They carry it out toward the dock, the mist closing behind.

### SCENE s01093 | INT. DRIVE-IN PROJECTION BOOTH - TWILIGHT
Detected names (may be incomplete or contain aliases): PEGGY LOUISE WALDROP, TUCKER WALDROP, ABERNATHY
* 1 A ¶ A cramped booth over an empty lot.
* 2 A Film canisters.
* 3 A A coffee can of cigarette butts.
* 4 A Through the small window, rows of silent cars waiting in the dusk.
5 A ¶ PEGGY LOUISE WALDROP, 17, in a pressed uniform, threads a reel with practiced fingers while her younger brother TUCKER WALDROP, 12, sits on a stool kicking his heels, a comic book on his knee.
6 A Between them, MR. ABERNATHY, 60s, the theater owner, in a short-sleeved shirt and bow tie, checks his pocket watch, taps the projector's housing, and sets a thermos by the door.
7 D MR. ABERNATHY: Seven forty. Start her at eight sharp.
8 D PEGGY: Yes, sir.
9 D MR. ABERNATHY: And Peggy, no repeats of last week.
10 D PEGGY: It wasn't my fault, sir. The reel was upside down.
11 D MR. ABERNATHY: Mm.
12 A ¶ He nods, pats Tucker on the head, and leaves.
13 A His footsteps fade down the iron stairs.
14 A Tucker turns a page.
15 A Peggy finishes lacing the film and flips a switch.
* 16 A The lamp hums warm.
17 D TUCKER: Is he gone?
18 D PEGGY: He's gone.
19 D TUCKER: Good.
20 A ¶ He slides the comic book aside and pulls a rumpled envelope from his shirt.
21 A Hands it up without looking at her.
22 A Peggy takes it.
23 A Turns it over.
* 24 A Her name in his careful block capitals.
25 D PEGGY: What's this?
26 D TUCKER: Open it.
27 A ¶ She does.
* 28 A Inside, a ticket stub and a folded strip of paper.
29 A She unfolds it.
30 A Her breath catches.
31 D TUCKER [CONT'D]: They called the house. About the scholarship.
32 D PEGGY: Tucker.
33 D TUCKER: You got in.
34 A ¶ She sits down hard on the other stool.
35 A Reads the strip again.
36 A Her thumb pauses over the signature at the bottom.
* 37 A ¶ Down in the lot, the cars dim their lights.
* 38 A A horn toots, impatient.
39 A Tucker watches her face.
40 D PEGGY (quietly): Don't tell Dad.
41 D TUCKER: He already knows.
42 D PEGGY: What?
43 D TUCKER: He read it first. Then he put it back.
44 A ¶ She stares at him.
45 A Then at the window, where the first car's headlights flick on and off in a signal.
46 A She wipes her eyes with the back of her wrist.
47 A Stands.
48 A Presses the switch.
* 49 A ¶ The projector clatters to life.
* 50 A A beam cuts across the lot and lands on the screen: a bright gold title card.
51 D PEGGY [CONT'D] (not looking at him): Hand me the next reel.
52 A ¶ Tucker slides it across.
53 A His fingers brush hers.
54 A She takes it, careful, and sets it beside the first.
