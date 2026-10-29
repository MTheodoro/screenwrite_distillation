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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0010.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01068 | INT. DANCE MARATHON HALL - NIGHT (1932)
Detected names (may be incomplete or contain aliases): EVELYN PRATT, JACK HOLLISTER
* 1 A ¶ A cavernous ballroom, plank floor, paper streamers gone limp.
* 2 A Hour 487.
* 3 A A banner reads LAST COUPLE STANDING WINS $1,000.
4 A The couples have gone to their cots.
* 5 A A gramophone scratches out one slow waltz to an empty floor.
6 A ¶ EVELYN PRATT, 20s, in a tattered satin dress, shoes in her hand, sways alone in the middle of the boards.
7 A Eyes closed.
* 8 D EVELYN (to the empty hall): Anybody got a cigarette?
* 9 A ¶ No answer.
* 10 A Gramophone crackle.
* 11 D EVELYN [CONT'D] (muttering): Four hundred eighty-seven hours. And the only thing that moves is the record.
* 12 A ¶ A cot creaks in the shadows.
* 13 A A match flares.
14 A JACK HOLLISTER, 20s, in a wilted white shirt, pushes himself off a bench and shuffles into the light, a cigarette between his lips.
* 15 D JACK: Here.
16 A ¶ He offers it.
17 A She takes a drag.
18 A Gives it back.
* 19 D EVELYN: Thanks. You were sleeping.
* 20 D JACK: I was resting my eyes.
* 21 D EVELYN: In a dance marathon.
* 22 D JACK: It's called pacing.
23 A ¶ She laughs.
24 A It wakes him a little.
25 A He sets the cigarette on the edge of the gramophone and holds out one hand.
* 26 D JACK [CONT'D]: Fifteen minutes left on the clock.
* 27 D EVELYN: Then dance with me.
* 28 D JACK: I thought you'd never ask.
29 A ¶ She drops her shoes.
30 A Takes his hand.
31 A They begin to turn, slow, a little off the beat.
* 32 D EVELYN: If we win, what will you do with a thousand dollars?
* 33 D JACK: Buy a hat.
* 34 D EVELYN: That's all?
* 35 D JACK: A nice hat.
* 36 D EVELYN: And me?
* 37 D JACK: You'd get a better hat.
38 A ¶ They both begin to say the same line.
* 39 D EVELYN: I'd dance another four hundred hours for you.
* 40 D JACK: I'd dance another four hundred hours for you.
41 A ¶ They stop.
42 A Both startled.
43 A Then, softly, they laugh.
* 44 D EVELYN [CONT'D]: Don't promise. Just hold on.
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
* 10 D WOMAN: Did you check the plates?
* 11 D MAN: Twice.
* 12 D WOMAN: Did you check the plates again?
* 13 D MAN: Nina. They're clean.
* 14 D WOMAN (softly): Don't say my name.
* 15 D MAN: Who's going to hear?
16 A ¶ She nods toward the office.
17 A The Kid has vanished from the window.
* 18 D MAN [CONT'D]: That's Terrence's nephew. He doesn't count.
* 19 D NINA: Everyone counts.
20 A ¶ The man hauls out the gym bag.
* 21 A It lands on the gravel with a clink.
* 22 A ¶ The office door opens.
23 A The Kid steps out, hands in pockets, walking slow.
* 24 D KID: You guys need the crusher?
* 25 D MAN: Yeah. For the sedan.
* 26 D KID: Papers?
* 27 D NINA: No papers.
* 28 D KID: No papers, no crusher. That's Terrence's rule.
* 29 D MAN: Terrence is a friend.
* 30 D KID: Terrence is in Phoenix.
31 A ¶ The man smiles, shows teeth.
32 A He steps closer.
33 A The Kid doesn't step back.
* 34 D MAN: Kid. What's your name?
* 35 D KID: Eli.
* 36 D MAN: Eli. Listen to me. A man left this car here. It's got to go.
* 37 D ELI: Then he can come back and fill out a form.
* 38 D NINA: Eli, we're running behind.
* 39 D ELI: Then you should've been on time.
40 A ¶ The man lunges, grabs Eli by the hoodie.
41 A Eli drops his phone, kicks the man's shin, and twists free.
42 A The man staggers into the sedan's open door.
43 A Nina grabs the gym bag and swings it into the man's back.
44 A All three go down in the gravel, tangled.
45 A ¶ Eli scrambles to the crusher's control panel.
46 A Slaps a lever.
* 47 A The jaws groan and begin to close.
* 48 D NINA: Eli! Don't!
* 49 D ELI (shouting): You said no papers!
50 A ¶ The man rolls away.
* 51 A The jaws descend on the sedan with a scream of metal.
* 52 A The gym bag, caught half under the door, is dragged in.
53 A ¶ Nina stares, mouth open.
54 A The man gets up slowly, face bleeding.
* 55 D MAN (to Eli, hoarse): You have any idea what was in that bag?
* 56 D ELI (dead calm): Terrence's rules.
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
* 9 D STRANGER: Don't shoot. I live here.
* 10 D OKAFOR: Nobody lives here. Name.
* 11 D STRANGER: Teodor. Teodor Vasko. The mill is my brother's.
12 A ¶ Halvorsen steps closer.
13 A Lin keeps her eyes on the radio.
* 14 D HALVORSEN: Sarge, he came from the north bank. That's their side.
* 15 D TEODOR: The bridge is gone. I swam.
* 16 A ¶ Distant engines.
17 A Okafor kills the lantern.
* 18 A Dark.
* 19 D OKAFOR (whispering): Lin. Radio. Now.
* 20 D LIN: Static, Sergeant. Only static.
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
* 14 D ADELAIDE: You kept the shop.
* 15 D TOBIAS: Rent's paid.
16 A ¶ She touches a lamp on the shelf.
17 A Dusts her glove on it.
18 A Studies the smear.
* 19 D ADELAIDE: Not by much, I'd say.
20 A ¶ He sets the scissors down.
21 A Picks them up again.
* 22 D TOBIAS: You came a long way.
* 23 D ADELAIDE: The cab was warm.
* 24 A ¶ A bell clangs in the street.
* 25 A A boy's voice, muffled through the wall.
* 26 D BOY [O.S.]: Lamps, Mr. Wren! Gas is on at Fenchurch!
27 A ¶ Tobias does not turn.
28 A Adelaide watches him not turn.
* 29 D ADELAIDE: Your boy?
* 30 D TOBIAS: Hired.
* 31 D ADELAIDE: He shouts like his mother.
32 A ¶ Tobias's jaw works.
33 A He crosses to the stove.
34 A Opens it.
35 A Closes it.
* 36 A Nothing inside.
* 37 D TOBIAS: Tea?
* 38 D ADELAIDE: No.
39 A ¶ She sits.
40 A Finally.
* 41 A The chair creaks.
42 A He looks at the chair, then at her gloves.
* 43 D TOBIAS: Take those off. You'll boil.
* 44 D ADELAIDE: It's November.
* 45 D TOBIAS: Still.
* 46 A ¶ A long beat.
47 A She pulls one finger loose.
48 A Stops.
49 A Pushes it back.
* 50 D ADELAIDE: I said what I came to say. In the letter.
* 51 D TOBIAS: I burned the letter.
* 52 D ADELAIDE: Then you know.
* 53 D TOBIAS: I know.
54 A ¶ The boy shouts again, further off.
* 55 A Fainter.
* 56 D BOY [O.S.]: Lamps!
57 A ¶ Adelaide rises.
58 A Smooths her skirt twice.
59 A Crosses to the door.
60 A Stops with her back to him.
* 61 D ADELAIDE: Light one for me. On Fenchurch.
* 62 D TOBIAS: It's lit.
* 63 D ADELAIDE: Then light it again.
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
* 12 D INTERCOM [V.O.]: Good afternoon, team. A reminder that the quarterly synergy audit begins at three.
13 A ¶ Renata chews.
14 A Nods.
15 A Pours tea.
* 16 D INTERCOM [V.O., CONT'D]: Auditors will be reviewing all workstations. Including unoccupied ones.
17 A ¶ She stops chewing.
* 18 D INTERCOM [V.O., CONT'D]: Employee Kowalczyk's desk has been unoccupied for eleven months. Please report to Facilities.
19 A ¶ Renata sets down the sandwich.
20 A Looks through the grate.
* 21 A Her empty cubicle.
* 22 A A dead plant.
* 23 A Her nameplate.
24 A ¶ A flashlight beam sweeps the crawlspace behind her.
* 25 D RENATA (whispering): Oh, no.

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
* 9 D ELI: You're late.
* 10 D NADIA: Your clerk lost the key.
* 11 D ELI: She never loses keys.
* 12 D NADIA: She lost this one.
13 A ¶ She pops the lid.
* 14 A Inside: a ledger, water-stained.
15 A Eli goes still.
* 16 D ELI: That's not on the inventory.
* 17 D NADIA: It is now.
18 A ¶ JUDGE OKONKWO-REYES, 60s, robe over a windbreaker, appears at the elevator door.
19 A Cigarette unlit between her fingers.
20 A Nadia and Eli straighten.
* 21 D JUDGE OKONKWO-REYES: Counselors. Tell me why a sealed ledger is sitting on a dock.
* 22 D ELI: Your Honor, she tampered with a chain of custody.
* 23 D NADIA: He moved it. I found it.
* 24 D JUDGE OKONKWO-REYES: She found it. He moved it. Wonderful.
25 A ¶ Eli lunges for the ledger.
26 A Nadia jerks it away.
* 27 A Boxes topple.
28 A A bailiff, DEPUTY HALE, 20s, bursts in from the stairwell, hand on holster.
* 29 D DEPUTY HALE: Freeze! Everybody!
30 A ¶ All three freeze.
31 A Eli with one hand out.
32 A Nadia clutching the ledger.
33 A The Judge, calm, lights her cigarette.
* 34 D JUDGE OKONKWO-REYES: Deputy. Stand down. They're lawyers. They only bite on the record.
35 A ¶ Hale lowers his hand.
36 A Exhales.
* 37 D JUDGE OKONKWO-REYES [CONT'D]: Give me the ledger. Both of you. My chambers, ten minutes.
38 A ¶ Nadia hands it over.
39 A Eli sags against a cart.
* 40 D ELI: She'll bury us.
* 41 D NADIA: Not her. She's deciding who gets to dig.
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
* 13 D GLORIA: Cake?
* 14 D DEZ: I'm good.
* 15 D PRIYA: I'll take his. If he's not.
* 16 D GLORIA: Take two.
17 A ¶ Priya takes two.
18 A Eats one standing.
19 A Dez keeps scrolling.
* 20 D TALL MAN: Is this the Q3 alignment huddle?
* 21 D GLORIA: It's cake.
* 22 D TALL MAN: But is it a huddle?
* 23 D DEZ (muttering): Everything's a huddle.
* 24 D PRIYA: Is that bad?
* 25 D DEZ: It's Tuesday.
26 A ¶ The Tall Man writes something.
27 A Gloria slides a square toward him.
28 A He doesn't take it.
* 29 D GLORIA: You're with Compliance?
* 30 D TALL MAN: Efficiency.
* 31 D DEZ: Same floor as Compliance.
* 32 D TALL MAN: Different elevator.
33 A ¶ Priya laughs.
34 A Stops.
35 A Looks at Gloria.
36 A Gloria is not laughing.
* 37 D GLORIA: Name?
* 38 D TALL MAN: Hollis. Bertram Hollis.
* 39 D GLORIA: Mr. Hollis. Cake?
* 40 D BERTRAM (softening): Fine. A small one.
41 A ¶ She hands him a plate.
42 A He eats.
43 A Chews slowly.
44 A Dez finally pockets his phone.
* 45 D DEZ: So what's being made efficient?
* 46 D BERTRAM: Closets.
* 47 D PRIYA: This closet?
* 48 D BERTRAM: Any closet.
49 A ¶ Gloria and Dez trade a look.
50 A Priya stuffs the second square in her mouth whole.
* 51 D GLORIA: We use this one.
* 52 D BERTRAM: For parties.
* 53 D GLORIA: For morale.
* 54 D BERTRAM: Morale isn't a line item.
* 55 D DEZ: Neither is you.
* 56 A ¶ Silence.
57 A Priya swallows.
58 A Bertram caps his pen, uncaps it.
* 59 D BERTRAM: I'll note the cake.
* 60 D GLORIA: Note the frosting. It's lemon.
* 61 D BERTRAM: Lemon.
* 62 D PRIYA: Lemon's her mother's recipe.
* 63 D GLORIA: It's not.
* 64 D PRIYA: Oh.
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
* 78 D DEZ: Nobody say anything.
* 79 D BERTRAM: I wasn't going to.
* 80 D GLORIA: Mr. Hollis, you're holding a banner.
* 81 D BERTRAM: So I am.
82 A ¶ He doesn't let go.
83 A Neither does anyone else.
* 84 A The fluorescent hum fills the closet.
* 85 D PRIYA: Is this the huddle?
* 86 D BERTRAM (dry): Yes.
* 87 D GLORIA: Then I'd say alignment is achieved.
88 A ¶ Dez snorts.
89 A Priya giggles.
90 A Bertram, against his will, almost smiles.
91 A The cart's wheel squeaks once, and a tiny voice calls from behind the toner.
* 92 D MAILROOM KID [O.S.]: Sorry! Sorry. Is that Gloria's closet?
* 93 D GLORIA (calling): It's everyone's closet.
* 94 D MAILROOM KID [O.S.]: Cool. Also there's cake?
95 A ¶ Gloria hands Priya the knife.
* 96 D GLORIA: Cut another.

### SCENE s01075 | EXT. HANGING BRIDGE OF SPIDERSILK - ABOVE THE MOONLIT CHASM - NIGHT
Detected names (may be incomplete or contain aliases): QUEEN ISOLDE VANTERRE, MORVAN UNMADE, ROYAL HERALD
* 1 A ¶ Wind howls.
* 2 A A bridge of woven silver thread spans a bottomless gorge.
* 3 A Far below, pale lights drift like fallen stars.
4 A ¶ QUEEN ISOLDE VANTERRE, 40s, crowned in antlers of white bone, grips the rail.
5 A Her cloak snaps in the gale.
6 A Opposite her, at the far end of the span: MORVAN THE UNMADE, ageless, a figure of black smoke and one burning eye.
* 7 D QUEEN ISOLDE: You have no claim on this valley.
* 8 D MORVAN (echoing, from everywhere): The valley has no claim on you, and yet you bleed for it.
9 A ¶ She steps onto the bridge.
* 10 A Threads hum beneath her boots.
* 11 D QUEEN ISOLDE: Go back to your cold hollow, Morvan.
* 12 D MORVAN: Come and make me.
* 13 A ¶ A horn sounds from the castle far behind her.
14 A Isolde does not turn.
* 15 A Smoke rolls along the silver strands.
* 16 D ROYAL HERALD [V.O.] (distant, over the wind): Majesty! The east wall has fallen! Return at once!
* 17 D QUEEN ISOLDE (calling back): Hold the gate!
18 A ¶ She draws a pale sword from her belt.
* 19 A It blazes white.
20 A Morvan lifts a hand; the smoke thickens into a spear of shadow.
* 21 D MORVAN: You cannot be in two places, little queen.
* 22 D QUEEN ISOLDE: I am not in two places. I am here.
23 A ¶ She runs.
* 24 A The bridge sways.
25 A The spear hurls.
26 A Her blade meets it in a burst of light, and the gorge rings like a bell.
* 27 D MORVAN: Then fall here.
* 28 D QUEEN ISOLDE: Not while a thread holds.
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
* 10 D MARGUERITE: Sit, Thaddeus.
* 11 D THADDEUS: I'd rather stand.
* 12 D MARGUERITE: That's what people say before they're fired.
* 13 D THADDEUS: Am I being fired?
* 14 D MARGUERITE: No. You're being promoted. Which is worse.
* 15 D THADDEUS: Okay.
* 16 D MARGUERITE: You'll lead the new Innovation Pod. Eight people. No budget.
* 17 D THADDEUS: That's not a promotion.
* 18 D MARGUERITE: It has a title.
* 19 D THADDEUS: What title?
* 20 D MARGUERITE: Chief Pod Officer.
* 21 D THADDEUS: That's a joke.
* 22 D MARGUERITE: It's on the org chart. I printed it.
* 23 D THADDEUS: Marguerite.
* 24 D MARGUERITE: I know.
* 25 D THADDEUS: Last month you cut my team in half. You said "lean."
* 26 D MARGUERITE: It was lean.
* 27 D THADDEUS: You said "family."
* 28 D MARGUERITE: We are a family.
* 29 D THADDEUS: Families don't send a calendar invite for a funeral.
* 30 D MARGUERITE: Thaddeus.
* 31 D THADDEUS: They sent me an invite. For my own mentor's funeral. Titled "Farewell Sync."
* 32 D MARGUERITE: That was an unfortunate template.
* 33 D THADDEUS: It had a Zoom link.
* 34 D MARGUERITE: Lower your voice.
* 35 D THADDEUS: The room is empty!
* 36 D MARGUERITE: The walls are not.
* 37 D THADDEUS: I trained four hundred people today. About "psychological safety." Four hundred. I held their hands.
* 38 D MARGUERITE: And they loved you.
* 39 D THADDEUS: They're also being laid off.
* 40 D MARGUERITE: You knew that.
* 41 D THADDEUS: I found out at lunch. From a vending machine receipt. Somebody's severance code was on it.
* 42 D MARGUERITE: That's an IT problem.
* 43 D THADDEUS: No. That's a me problem. I smiled at them. I handed out lanyards. With their termination dates printed on the back.
* 44 D MARGUERITE (quietly): Thaddeus.
* 45 D THADDEUS: I'm done. Chief Pod Officer. I'm done.
* 46 D MARGUERITE: You can't quit. You haven't vested.
* 47 D THADDEUS: Watch me.
48 A ¶ He rips off his name tag and slaps it on the table.
49 A She stares at it a long moment.
* 50 D MARGUERITE: That's a two-hundred-dollar badge.
* 51 D THADDEUS: Put it on the budget I don't have.

### SCENE s01077 | EXT. SALT FLATS - ABANDONED RAILWAY SIDING - DAWN
Detected names (may be incomplete or contain aliases): MAJOR ALEKSANDRA VOSS, LIEUTENANT RAFAEL OROZCO
* 1 A ¶ Glare off the white crust.
* 2 A A rusting locomotive sits on a rail that leads nowhere.
* 3 A Smoke on the horizon.
4 A ¶ MAJOR ALEKSANDRA VOSS, 40s, field coat, a bandage across her palm, crouches by the engine's wheel.
5 A Beside her, LIEUTENANT RAFAEL OROZCO, 20s, pale and sunburned, scans the horizon with binoculars.
6 A ¶ She wipes grit from a map.
7 A He lowers the glasses.
* 8 D OROZCO: Dust on the east road, Major.
* 9 D VOSS: How much?
* 10 D OROZCO: A lot.
11 A ¶ She stands.
12 A Squints.
13 A Unfolds the map across the locomotive's flank.
* 14 D VOSS: Armor, then. Or trucks. We'll know in a minute.
15 A ¶ He doesn't move.
16 A She looks at him.
17 A He is gripping the binoculars hard.
* 18 D VOSS [CONT'D]: Lieutenant.
* 19 D OROZCO: Ma'am.
* 20 D VOSS: Breathe.
21 A ¶ He does.
22 A She takes the glasses from his hands, raises them.
23 A Her jaw sets.
* 24 D OROZCO: It's trucks?
* 25 D VOSS: It's both.
26 A ¶ She hands the binoculars back.
27 A He looks again.
28 A Lowers them slowly.
* 29 D OROZCO: We could hole up in the engine.
* 30 D VOSS: It's a coffin with a smokestack.
31 A ¶ He nods.
32 A He stares at the rails.
33 A She folds the map, tucks it into her coat, pulls out a small mirror.
* 34 D OROZCO: What's that for?
* 35 D VOSS: Signal. If anyone is still listening on that ridge.
36 A ¶ He watches her angle the mirror to the sun.
* 37 A A flash.
* 38 A Another.
* 39 A Another.
40 A She waits.
41 A He waits.
* 42 A Nothing answers.
* 43 D OROZCO: Ma'am. If nobody is there?
* 44 D VOSS: Then we signal anyway.
45 A ¶ She flashes again.
* 46 A The dust cloud swells on the road.
47 A He pulls his rifle from his shoulder.
48 A She puts her hand on the barrel.
49 A Gently.
50 A He looks at her.
* 51 D VOSS [CONT'D]: Not yet.
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
* 13 D DANNY: Hey. Is the big room open?
* 14 D JUNE (pulling off a headphone): Not till four.
* 15 D DANNY: I'll wait.
* 16 D JUNE: Suit yourself.
17 A ¶ He sits on a stool.
18 A Taps the counter.
19 A Pretends not to look at her.
20 A She pretends not to notice.
* 21 D DANNY: Do you work here, like, always?
* 22 D JUNE: Saturdays. And school nights. And whenever Mr. Pruitt forgets to pay somebody else.
* 23 D DANNY: That sounds rough.
* 24 D JUNE: It's okay. I get free popcorn.
25 A ¶ She slides a small bag across the counter.
26 A He takes it.
* 27 D DANNY: Thanks.
* 28 D JUNE: Don't tell Pruitt.
* 29 D DANNY: Wouldn't.
30 A ¶ They sit in friendly quiet.
* 31 A The disco ball turns.
* 32 A A speaker crackles overhead.
* 33 D MR. PRUITT [V.O.] (over the PA): June, did you restock the nacho cheese?
* 34 D JUNE (calling up at the ceiling): Yes, Mr. Pruitt!
* 35 D MR. PRUITT [V.O.]: Good girl.
36 A ¶ June rolls her eyes.
37 A Danny almost laughs.
38 A He pulls a folded paper from his jacket.
* 39 D DANNY: Can I ask you something? Not weird.
* 40 D JUNE: That's how weird questions start.
* 41 D DANNY: It's about my sister.
* 42 D JUNE: Okay.
43 A ¶ He unfolds the paper.
* 44 A A flyer.
* 45 A A missing-person flyer, photocopied crooked.
* 46 A A girl's face, braids like June's.
* 47 D DANNY: She worked here. Last summer.
48 A ¶ June stops counting quarters.
* 49 D JUNE: Rosalind.
* 50 D DANNY: You knew her?
* 51 D JUNE: I took her shifts. When she left.
* 52 D DANNY: She didn't leave. She --
53 A ¶ He cuts himself off.
54 A June closes the cash drawer.
55 A Very slowly.
* 56 D JUNE: Danny. Mr. Pruitt keeps a locked room. Behind the skate lockers.
* 57 D DANNY: What's in it?
* 58 D JUNE: I don't know. But Rosalind's jacket is hanging on the door.
59 A ¶ Danny stares at her.
* 60 A The popcorn machine hums.
* 61 A The disco ball spins across his face.
* 62 D DANNY: Show me.
* 63 D JUNE: Not now.
* 64 D DANNY: Why not?
* 65 D MR. PRUITT [V.O.] (over the PA, cheerful): Folks, we're opening the big room early today. Skate on in!
* 66 A ¶ The doors at the far end of the rink swing open.
* 67 A Light floods the floor.
* 68 D JUNE: That's why.
69 A ¶ She reaches under the counter.
70 A Pulls out a ring of keys.
71 A Presses them into his palm.
* 72 D JUNE [CONT'D]: Four o'clock. When the music's loud. The brass one.
* 73 D DANNY (barely a whisper): Thank you.
* 74 D JUNE: Don't thank me yet.
75 A ¶ Danny pockets the keys.
76 A Picks up his gym bag.
77 A Skaters spill through the far doors.
78 A June puts on her Walkman and turns back to the register, calm as a clock.
79 A ¶ The disco ball catches Danny's face one last time as he walks into the crowd.
