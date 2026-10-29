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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0148.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01639 | INT. AUCTION HOUSE, ANTIQUE CLOCK VIEWING ROOM - EVENING
Detected names (may be incomplete or contain aliases): CELESTINE VOSS, RHYS, OKSANA, PEMBERTON, THADDEUS
* 1 A ¶ A hundred clocks tick in conflict.
* 2 A Brass, ormolu, walnut, lacquer.
* 3 A Velvet ropes.
4 A A single white-gloved attendant by the door.
5 A ¶ CELESTINE VOSS, 40s, in a grey silk dress that costs more than the carpet, drifts between cases with a catalogue folded under her arm, while RHYS, 30s, dressed as a waiter with a tray of champagne flutes, steps between two bidders without spilling, and OKSANA, 50s, an appraiser in half-moon glasses, peers into the open back of a bracket clock, and Celestine pauses, tilts her head toward the clock Oksana is examining, and Oksana, without lifting her eyes, shifts a half-step to give her a clearer view.
6 A ¶ PEMBERTON, 60s, the auctioneer, pink-faced, approaches Celestine with a practiced smile.
7 D PEMBERTON: Madam Voss. A pleasure. You've found the Thwaites.
8 D CELESTINE: It found me.
9 D PEMBERTON: Estimated at forty thousand.
10 D CELESTINE: It's worth less.
11 D PEMBERTON: Less?
12 D CELESTINE: It's missing its pendulum.
13 A ¶ Pemberton blinks.
14 A Oksana's pencil pauses.
15 A Rhys sets the tray on a plinth without looking at it.
16 D PEMBERTON: The pendulum was lost in the war.
17 D CELESTINE: I'm sure it was.
18 A ¶ She moves on.
19 A Pemberton follows a half-step behind.
20 A Rhys lifts a flute, offers it.
21 A She takes it, drinks nothing, sets it down on the velvet rope.
22 A ¶ THADDEUS, 20s, the white-gloved attendant, steps forward to retrieve it.
23 A Celestine smiles at him as one smiles at a stranger on a train, and he retreats.
24 A ¶ At the far end of the room, Oksana draws a hair-thin wire from her sleeve and slips it behind the clock's dial, so smoothly that Pemberton, glancing back at her, sees only a woman adjusting her glasses.
25 D PEMBERTON: Oksana, you're quiet.
26 D OKSANA: I'm counting.
27 D PEMBERTON: Counting what?
28 D OKSANA: Seconds.
29 A ¶ Pemberton laughs.
30 A Celestine does not.
31 A Her eyes, for a moment, meet Rhys's across the room.
32 A ¶ The hundred clocks begin to chime the hour, in no particular order, and in the roar of it, Thaddeus, tugging his gloves, sees the Thwaites case swing open an inch.
33 D THADDEUS: Sir? Sir, the case --
34 D PEMBERTON (over the chimes): What?
35 D THADDEUS: The case --
36 D CELESTINE (sweetly): Have a glass of champagne, young man.
37 A ¶ Rhys appears at his elbow.
38 A Thaddeus takes the flute.
39 A Drinks.
* 40 A The case stays open.

### SCENE s01640 | INT. HOSPITAL HYDROTHERAPY POOL - DAY
Detected names (may be incomplete or contain aliases): LAKSHMI IYER, NURSE BERTRAND, ORDERLY CASIMIR, PADMORE, WILHELMINA OKORO
* 1 A ¶ Warm green water.
* 2 A Steam on the tiles.
* 3 A Handrails along the shallow end.
4 A ¶ DR. LAKSHMI IYER, 40s, stands waist-deep in a wetsuit top, a clipboard on a floating tray.
5 A NURSE BERTRAND, 50s, adjusts the lift chair at the edge.
6 A ORDERLY CASIMIR, 20s, holds a towel and does nothing else.
7 A DR. PADMORE, 60s, observes from a plastic chair by the wall.
8 A In the water, MRS. WILHELMINA OKORO, 80s, clings to the rail.
9 D IYER: Mrs. Okoro, how does that feel?
10 D WILHELMINA: Warm.
11 D IYER: Good. Lift the left leg for me.
12 D WILHELMINA: That's the one that doesn't lift.
13 D IYER: Try anyway.
14 D WILHELMINA: I tried last week.
15 D IYER: And?
16 D WILHELMINA: It stayed where it was.
17 D BERTRAND: She's got spirit, Doctor.
18 D IYER: She does. Mrs. Okoro, let's try the right.
19 D WILHELMINA: Which is the one that works?
20 D IYER: That's the idea.
21 D WILHELMINA: Then why do I need a doctor?
22 D PADMORE (from the chair): For the paperwork, Mrs. Okoro.
23 D WILHELMINA: Who's that?
24 D IYER: Dr. Padmore. He's observing.
25 D WILHELMINA: He looks like he's been observing since 1990.
26 D PADMORE: I find the work restful.
27 D IYER: Right leg, please.
28 D WILHELMINA: There.
29 D IYER: Higher.
30 D WILHELMINA: There.
31 D IYER: Higher.
32 D WILHELMINA: That's as high as it goes.
33 D IYER: It's high enough.
34 D BERTRAND: Casimir, the towel.
35 D CASIMIR: I have it.
36 D BERTRAND: Then hold it.
37 D CASIMIR: I am holding it.
38 D BERTRAND: Higher.
39 D CASIMIR: This is as high as it goes.
40 D WILHELMINA: He's learning.
41 D PADMORE: Slowly.
42 A ¶ Iyer glances at her clipboard.
43 A Makes a note.
44 A Wilhelmina lets go of the rail with one hand, tentatively.
45 A The water holds her.
46 A She smiles, a small, surprised thing.
47 D WILHELMINA [CONT'D]: Oh.
48 D IYER: Yes?
49 D WILHELMINA: Nothing. It's only that I'd forgotten.
50 D IYER: Forgotten what?
51 D WILHELMINA: That it could feel like this.
52 A ¶ Bertrand lowers the lift chair.
53 A Casimir finally spreads the towel.
54 A Padmore uncrosses his legs, checks his watch, crosses them again.

### SCENE s01641 | INT. ROOFTOP GREENHOUSE, GRAND HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): SOLANO, HESTER VANCE, KIERAN, BAPTISTE, STRANGER, CALDER
* 1 A ¶ Glass walls.
* 2 A Orchids in hanging baskets.
* 3 A Rain tapping overhead.
* 4 A A city smeared into color below.
5 A ¶ DET. SOLANO, 40s, trench coat, sits on a wrought-iron bench, hands in his pockets.
6 A HESTER VANCE, 50s, the hotel manager, waters ferns with a copper can.
7 A KIERAN, 20s, the night porter, hovers near the door.
8 A MR. BAPTISTE, 60s, an elderly guest in a silk robe, studies an orchid.
9 A ¶ A STRANGER, 30s, wet hair, black jacket, steps in.
10 A Nods to no one.
11 A Stands apart.
12 D SOLANO: Evening.
13 D STRANGER: Evening.
14 D SOLANO: You're not a guest.
15 D STRANGER: I'm waiting for someone.
16 D SOLANO: Who?
17 D STRANGER: A friend.
18 D HESTER (not looking up): The greenhouse closes at eleven.
19 D STRANGER: It's ten-forty.
20 D HESTER: Then you have twenty minutes.
21 D KIERAN: Sir, can I take your coat?
22 D STRANGER: No.
23 D SOLANO: What's your friend's name?
24 D STRANGER: You wouldn't know him.
25 D SOLANO: Try me.
26 D STRANGER: Calder.
27 D BAPTISTE (without turning): Calder is dead.
28 D STRANGER: Is he?
29 D BAPTISTE: I buried him in March.
30 D STRANGER: Then who's standing here?
* 31 A ¶ Silence.
* 32 A The rain.
* 33 A A drop falls from a leaf onto the tile.
34 D CALDER (the Stranger, now): Mr. Baptiste. It's been a long time.
35 D BAPTISTE: Not long enough.
36 D CALDER: I came to return something.
37 D SOLANO (low): Hester. Clear the room.
38 D HESTER: Detective?
39 D SOLANO: Now.
40 D KIERAN: Sir, I --
41 D SOLANO: Out, son.
42 A ¶ Kieran backs out of the greenhouse.
43 A Hester sets the can down, walks to the door.
44 A Locks it from the outside.
45 D CALDER: Don't be dramatic.
46 D SOLANO: You're supposed to be in a box.
47 D CALDER: So is he.
48 D BAPTISTE (turning at last): What did you bring me?
49 D CALDER: Your watch.
50 A ¶ He pulls it from his jacket.
* 51 A Gold.
* 52 A Heavy.
53 A Holds it up by the chain.
54 D CALDER [CONT'D]: You gave it to me the night you shot me.
55 D BAPTISTE: I gave it to you as a kindness.
56 D CALDER: It stopped at eleven.
57 D BAPTISTE: It always did.
58 A ¶ Solano rises.
59 A His hand is out of his pocket now.
60 D SOLANO: Mr. Calder, put the watch on the bench.
61 D CALDER: It's not for the bench.
62 D SOLANO: Put it down.
63 D CALDER: Detective, I've waited eight months. I can wait one more minute.
* 64 A ¶ The watch swings.
* 65 A Tick.
* 66 A Tick.
* 67 A Tick.
* 68 A ¶ It stops.
69 D CALDER [CONT'D]: Eleven.

### SCENE s01642 | INT. MORDECAI'S PAWN SHOP - CLOSING SALE - NIGHT
Detected names (may be incomplete or contain aliases): PAWNBROKER MORDECAI, GINA, TREY, ROSALIND, DUKE
* 1 A ¶ Shelves of guitars, watches, tuba cases.
* 2 A A red banner: EVERYTHING MUST GO.
3 A ¶ PAWNBROKER MORDECAI, 60s, cash apron, stands behind the counter.
4 A GINA, 30s, a regular, waves a ticket at him.
5 A TREY, 20s, a skinny kid in a hoodie, edges toward the display case.
6 A ROSALIND, 40s, a plainclothes cop, pretends to look at saxophones.
7 A DUKE, 50s, a large man in a leather vest, blocks the door.
8 D MORDECAI: We're closed!
9 D GINA: The banner says sale!
10 D TREY: I just want the ring.
11 D ROSALIND: Which ring?
12 D TREY: The one in the case.
13 D DUKE: Nobody leaves.
14 D MORDECAI: Nobody enters, Duke! We're closed!
15 D GINA: Mordecai, my grandmother's locket --
16 D TREY: It's not for sale, it's for me --
17 D MORDECAI: Everybody shut up!
* 18 A ¶ Silence.
19 A Then Rosalind flashes her badge.
20 D ROSALIND: Police. Everybody hands up.
21 A ¶ Mordecai lifts his hands.
22 A Gina lifts her ticket.
23 A Trey lunges for the case.
24 A Duke steps aside to let Rosalind through.
25 D MORDECAI: Duke!
26 D GINA (overlapping): TREY!
27 D DUKE (simultaneously): She's a cop!
28 A ¶ Trey smashes the glass.
29 A Grabs the ring.
30 A Bolts.
31 D ROSALIND (over her shoulder): Duke, stop him!
32 A ¶ Duke grins and sits down on the nearest tuba case.

### SCENE s01643 | INT. LUMBER MILL OFFICE, DEPOSITION - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY PHILOMENA OKAFOR-LANE, CORNELIUS HARGROVE
* 1 A ¶ Wood-paneled walls.
* 2 A Sawdust in the corners.
* 3 A A rattling air conditioner.
* 4 A A long folding table with a court reporter's empty chair.
5 A ¶ ATTORNEY PHILOMENA OKAFOR-LANE, 40s, in a good grey suit, flips through a thick folder.
6 A Her pen taps the rim of a mug.
7 A She is very still.
* 8 A ¶ The door opens.
9 A ¶ CORNELIUS HARGROVE, 60s, work boots, flannel shirt under a blazer too tight at the shoulders, steps inside.
10 A He eases into the chair opposite.
11 D PHILOMENA: Mr. Hargrove. Thank you for coming.
12 D CORNELIUS: You didn't give me a choice.
13 D PHILOMENA: No. I didn't.
14 D CORNELIUS: Is the reporter coming?
15 D PHILOMENA: She's late. We'll begin.
16 A ¶ She turns on a small recorder.
* 17 A Sets it between them.
18 D PHILOMENA [CONT'D]: State your name.
19 D CORNELIUS: Cornelius Hargrove.
20 D PHILOMENA: Employment?
21 D CORNELIUS: Foreman, Pinecrest Lumber. Thirty-one years.
22 D PHILOMENA: On March ninth, were you on shift?
23 D CORNELIUS: I was.
24 D PHILOMENA: Did you see Mr. Dunmore fall?
25 D CORNELIUS: I saw a lot of things.
26 D PHILOMENA: Mr. Hargrove.
27 D CORNELIUS: Yes. I saw him fall.
28 D PHILOMENA: From the catwalk?
29 D CORNELIUS: From the catwalk.
30 D PHILOMENA: Was the railing intact?
31 D CORNELIUS: No.
32 D PHILOMENA: Had you reported it?
33 D CORNELIUS: Four times.
34 D PHILOMENA: To whom?
35 D CORNELIUS: To the owner. To his brother. To the safety man. To the priest.
36 D PHILOMENA: The priest?
37 D CORNELIUS: I tell him everything.
38 A ¶ She smiles, almost.
39 A Cornelius does not.
40 D PHILOMENA: And what did the owner say?
41 D CORNELIUS: He said wood bends.
42 D PHILOMENA: Wood bends.
43 D CORNELIUS: But men break.
* 44 A ¶ The air conditioner clatters.
45 A Philomena closes the folder.
46 A Cornelius stares at the recorder as if it were a gun.
47 D PHILOMENA: Mr. Hargrove, would you be willing to say that in open court?
48 D CORNELIUS: I'd rather not.
49 D PHILOMENA: Why?
50 D CORNELIUS: Because I'd lose my pension.
51 D PHILOMENA: You might lose more by staying silent.
52 D CORNELIUS: You don't know that.
53 D PHILOMENA: I know that Mr. Dunmore's widow sits in the next room.
54 A ¶ Cornelius shifts.
* 55 A His chair squeaks.
56 A He looks at the door.
57 D CORNELIUS: She's here?
58 D PHILOMENA: She asked to sit in.
59 D CORNELIUS: She shouldn't.
60 D PHILOMENA: She wanted to look at you.
61 A ¶ He stands.
* 62 A The chair scrapes.
63 A He paces to the window, back, then stops at the table, hands flat on the wood.
64 D CORNELIUS: I can't do this.
65 D PHILOMENA: You already are.
66 A ¶ He slams his palm on the table.
* 67 A The recorder jumps.
68 A Philomena doesn't flinch, but she catches the mug before it tips.
69 A ¶ They stare at each other.
70 A Then, slowly, both reach for the recorder at once, and their hands touch on the plastic.
71 D CORNELIUS [CONT'D] (quietly): Turn it on again.
72 A ¶ Philomena presses the button.
* 73 A The red light blinks.
74 D CORNELIUS [CONT'D]: My name is Cornelius Hargrove. I saw him fall.

### SCENE s01644 | EXT. SALT DESERT - GENERATION SHIP HULL - DAWN
Detected names (may be incomplete or contain aliases): IXCHEL, AMADI
* 1 A ¶ A ship the size of a mountain lies on its side in a white plain of salt.
* 2 A Its hull, once silver, is rust-red and blistered.
* 3 A Cables hang like dead vines.
* 4 A The sky is a bruised violet.
* 5 A Two moons, one faint, one bright.
* 6 A ¶ At the foot of the hull, a rope ladder dangles.
* 7 A Beyond it, a gaping breach, dark as a throat.
8 A ¶ IXCHEL, 30s, wiry, wrapped in a patchwork cloak the color of dust, scales the ladder one handhold at a time.
9 A A pack of glass tubes clinks on her back.
10 A Her face is scarred with the faint blue lines of old ship-tattoos, a map no one living can read.
11 A ¶ At the top, she hauls herself into the breach.
12 A Waits for her eyes to adjust.
13 A ¶ AMADI, 60s, sits cross-legged in the shadows, so still he seems part of the wall.
14 A His skin is dark, his head shaved, his eyes the pale green of old copper.
* 15 A A single lantern glows beside him, powered by something that hums.
16 D IXCHEL: You're real.
17 D AMADI: So are you.
18 D IXCHEL: They said the last one died.
19 D AMADI: They say many things.
20 A ¶ She steps closer.
* 21 A The floor, once a corridor, is now a slope of salt-crusted tile.
22 D IXCHEL: I came to see the Bridge.
23 D AMADI: The Bridge is gone.
24 D IXCHEL: The maps say --
25 D AMADI: Maps were written by people who left.
26 A ¶ She sets down her pack.
27 A Kneels.
28 A He studies her tattoos with open interest, like a man reading a letter from a village he forgot.
29 D AMADI [CONT'D]: Whose line are you?
30 D IXCHEL: The Surveyors.
31 D AMADI: Ah. They always came back for a last measurement.
32 D IXCHEL: We came back for the seeds.
33 D AMADI (softly): There are no seeds.
34 D IXCHEL: There must be.
35 D AMADI: There was a garden. Then there was a long winter. Then there was me.
36 A ¶ He lifts the lantern.
37 A The light sweeps a wall, and she sees it: a mural of green, thousands of tiny painted leaves, fading but not gone.
38 D IXCHEL: You painted this.
39 D AMADI: Every day, for forty years.
40 D IXCHEL: Why?
41 D AMADI: So that someone would come and see a garden.
42 A ¶ She touches the wall.
43 A Her hand leaves a dark print in the dust.
44 A Then, slowly, she opens the pack and begins unpacking her glass tubes: soil, water, a single vial of grain.
45 D IXCHEL: Then let me plant what you remember.
46 A ¶ Amadi does not answer.
47 A He lowers the lantern and begins, very slowly, to weep.

### SCENE s01645 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): ROSARIO VEGA, BERNADETTE
* 1 A ¶ Cramped.
* 2 A A hot projector throws white light through a slot.
* 3 A Reels, ashtrays, a cracked radio.
* 4 A Below, a lot of dark cars and a giant screen.
5 A ¶ ROSARIO VEGA, 40s, a scarred shift manager, leans over the projector.
6 A BERNADETTE, 30s, her new hire, stands by the door with a trembling hand on a canvas bag.
7 D ROSARIO: You're early.
8 D BERNADETTE: I'm always early.
9 D ROSARIO: That's what worries me.
10 A ¶ Bernadette sets the bag on a stool.
11 A Rosario eyes it.
12 D ROSARIO [CONT'D]: That's heavy.
13 D BERNADETTE: Sandwiches.
14 D ROSARIO: Sandwiches don't clink.
15 D BERNADETTE: These are fancy.
16 D ROSARIO (to the room): Everybody hears this? She brought fancy sandwiches.
* 17 A ¶ Nobody.
* 18 A Just the projector's hum.
19 A ¶ Rosario reaches for the bag.
20 A Bernadette catches her wrist.
21 D BERNADETTE: Don't.
22 D ROSARIO: Why not?
23 D BERNADETTE: Because she'll know.
24 D ROSARIO: Who?
25 D BERNADETTE: The one who told me to bring it.
26 D ROSARIO (muttering): Always somebody.
27 A ¶ She yanks free.
28 A Unzips the bag.
* 29 A Inside, three stacks of cash and a small black pistol.
30 D ROSARIO [CONT'D]: That's not a sandwich.
31 D BERNADETTE: No.
32 D ROSARIO: Whose money?
33 D BERNADETTE: Ours.
34 D ROSARIO: Mine and yours?
35 D BERNADETTE: Hers and hers.
36 A ¶ Rosario turns slowly.
37 A Bernadette's hand drops to her pocket.
38 D ROSARIO: Is that your gun, or mine?
39 D BERNADETTE: Hers.
40 D ROSARIO: Honey, whose is "hers"?
* 41 A ¶ The projector clicks.
* 42 A A new reel begins.
* 43 A On the lot below, a hundred cars flash blue in the movie's light, and a voice from the speakers booms: "COMING ATTRACTIONS."
44 D ROSARIO [CONT'D] (to herself): Good title.

### SCENE s01646 | INT. FISH MARKET AUCTION FLOOR - EARLY MORNING
Detected names (may be incomplete or contain aliases): MAUDE PETTIGREW, FERDIE, LOMBARD, ^FERDIE, SOLD
* 1 A ¶ Crushed ice.
* 2 A Crates of silver mackerel.
* 3 A A scale.
* 4 A A bell.
* 5 A The din of a hundred voices that are not in this scene.
6 A ¶ MAUDE PETTIGREW, 50s, galoshes and a straw hat with a feather in it, grips a number paddle.
7 A FERDIE "FERDINAND" LOMBARD, 50s, a cravat under his oilskins, grips his.
8 D MAUDE: Ferdinand Lombard, put that down.
9 D FERDIE: I will not, Maudie.
10 D MAUDE: It's my tuna.
11 D FERDIE: It's the market's tuna.
12 D MAUDE: I saw it first.
13 D FERDIE: You saw it second. I saw it from the harbor.
14 D MAUDE (to the crowd): Did anyone else see a man claim a tuna from the harbor?
15 D FERDIE (to the crowd): Did anyone else see a woman in a feather hat claim anything?
* 16 A ¶ An invisible auctioneer raps a gavel.
17 A Both snap their paddles up.
18 D MAUDE: Two hundred!
19 D FERDIE: Two hundred!
20 D MAUDE: Two-fifty!
21 D FERDIE: Two-fifty!
22 D MAUDE: You are impossible!
23 D FERDIE: You are impossible!
* 24 A ¶ The gavel bangs.
25 A They speak at the same instant.
26 D MAUDE: I'm bidding for my sister's wedding.
27 D ^FERDIE: I'm bidding for my sister's wedding.
28 A ¶ They stop.
29 A Stare at each other.
30 A Slowly lower their paddles.
31 D MAUDE: Your sister's Cordelia?
32 D FERDIE: Your sister's Cordelia?
33 D MAUDE: She's marrying a Lombard.
34 D FERDIE: She's marrying a Pettigrew.
35 D MAUDE: Then we're...
36 D FERDIE: Cousins-in-law.
37 D MAUDE (to herself): Oh, dear.
38 D FERDIE: Split the tuna?
39 D MAUDE: Split the tuna.
40 A ¶ They shake hands.
* 41 A The gavel falls.
42 A SOLD, says the unseen auctioneer, to both.

### SCENE s01647 | INT. RIVERBOAT CALLIOPE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN PRUDENCE LOCKWOOD, JUBAL, TENNYSON
* 1 A ¶ A cramped brass chamber beneath the smokestacks.
* 2 A Steam pipes, a keyboard of fat ivory keys, a hundred whistles gleaming in the lamplight.
* 3 A Through a port window, black river water slides by.
4 A ¶ CAPTAIN PRUDENCE LOCKWOOD, 50s, braided cuffs, a cigar gone cold, leans against the pipes with her arms folded.
5 A She watches the boy at the keys.
6 A ¶ JUBAL, 17, bare feet, sleeves rolled, sweats at the calliope.
7 A He plays a hymn badly, then well, then badly again.
8 A ¶ In the corner, TENNYSON, 60s, a gambler in a black frock coat, slouches in a barrel chair with a pistol resting on his knee.
9 A He is not listening to the music.
10 D PRUDENCE: Jubal, stop.
* 11 A ¶ The calliope sighs to silence.
* 12 A Steam hisses.
13 A Jubal turns, wiping his hands on his shirt.
14 D JUBAL: Yes, Captain.
15 D PRUDENCE: Tell Mr. Tennyson what you told me this morning.
16 D JUBAL: About the crates?
17 D PRUDENCE: About the crates.
18 D TENNYSON (not moving): Let the boy speak, Prudence.
19 D PRUDENCE: He's speaking.
20 D JUBAL: I loaded forty-one crates at St. Louis, sir. Marked flour. They came out forty-one at Cairo, marked flour. But the ones at Cairo, they were light.
21 D TENNYSON: Light.
22 D JUBAL: Like they had nothing but air in 'em.
23 D TENNYSON: Flour is light, son.
24 D JUBAL: Not that light.
25 D TENNYSON: How would you know?
26 D JUBAL: I carried three hundred sacks of it for my father before he died.
27 A ¶ Tennyson smiles, thin.
28 A Studies the pistol.
29 D TENNYSON: Captain, your boy has sharp eyes.
30 D PRUDENCE: He has sharp ears too.
31 D TENNYSON: Which brings me to my question. What did he hear?
32 D JUBAL: Hear?
33 D PRUDENCE: He heard you in the hold, Mr. Tennyson. Last Tuesday. Opening crates.
34 D TENNYSON: Did he.
35 D PRUDENCE: He told me you were counting something. Not flour.
36 D TENNYSON: I count many things, Captain. Ducats. Dealers. Debts.
37 D PRUDENCE: Gold.
* 38 A ¶ A long silence.
* 39 A The river hisses along the hull.
40 A Jubal's hands, still on the keys, tremble.
41 D TENNYSON (softly): Boy. Play something.
42 D JUBAL: Sir?
43 D TENNYSON: Something loud.
44 A ¶ Jubal looks at Prudence.
45 A She nods, almost imperceptibly.
46 A He turns back and brings both hands down on the keys.
* 47 A The calliope screams into the night, a great, shrieking chord that rattles the pipes.
48 A ¶ Tennyson rises.
49 A He doesn't raise the pistol.
50 A He walks to the port and looks out at the river.
51 D TENNYSON [CONT'D] (over the noise): It was a good run, Prudence.
52 D PRUDENCE (over the noise): It was.
53 D TENNYSON: You'd have made a fine partner.
54 D PRUDENCE: I made a better captain.
55 A ¶ He laughs, once.
56 A Tucks the pistol into his coat.
57 A Steps through the door and onto the deck.
* 58 A The calliope plays on.
59 A ¶ Jubal keeps playing until the last of the steam gives out.
60 A In the silence after, he looks up.
61 D JUBAL: Captain?
62 D PRUDENCE: Yes, Jubal?
63 D JUBAL: Was that a hymn?
64 D PRUDENCE: Close enough.

### SCENE s01648 | INT. CHEESE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): ZOFIA LAWNICZAK
* 1 A ¶ A cold limestone tunnel lined with racks of wheeled cheese.
* 2 A Condensation drips.
* 3 A A single bulb.
* 4 A Behind a rack, a ventilation grate half-pried loose.
5 A ¶ ZOFIA LAWNICZAK, 30s, black clothes, headlamp, crouches at the grate with a screwdriver.
* 6 A A dark rectangle of vault door gleams behind it.
7 A ¶ She sets down the screwdriver.
8 A Pulls a small recorder from her pocket.
9 A Presses play.
10 D ZOFIA [V.O.] (recording, her own voice): Zofia, if you're hearing this, the guard rotates at two. The grate is the third rack from the end. Do not use the main door.
11 A ¶ She clicks it off.
12 A Frowns.
13 A Looks at the rack.
14 A Counts.
15 D ZOFIA (muttering): One. Two. Three.
16 A ¶ She presses play again.
17 D ZOFIA [V.O.] (recording): The vault has a thumbprint scanner. I have the thumb. It is in the Brie.
18 A ¶ Zofia's eyes widen.
19 A She turns to the nearest wheel.
20 A Cuts into it with a pocketknife.
* 21 A Cheese falls away.
* 22 A ¶ Inside: a small plastic bag.
* 23 A Inside the bag, a rubber thumb.
24 A She holds it up in the beam of her headlamp.
25 D ZOFIA [CONT'D] (whispering): You are insane.
26 A ¶ She presses play a third time.
27 D ZOFIA [V.O.] (recording): Yes. Now hurry. Somewhere above you, he is awake.
28 A ¶ Zofia freezes.
* 29 A Overhead, a footstep, then another.
* 30 A A beam of light sweeps the tunnel.
31 A ¶ She switches off her headlamp.
* 32 A Everything goes black.
33 D ZOFIA (barely audible): Fine. Fine.
34 A ¶ She presses the thumb against the scanner.
* 35 A Click.
* 36 A The vault door sighs open.

### SCENE s01649 | EXT. VAPORETTO STOP, VENICE - EVENING
Detected names (may be incomplete or contain aliases): PETRA, LEOPOLD, GIULIA, HENRIK, FATIMA, ARTHUR
* 1 A ¶ Gold light on green water.
* 2 A A floating dock.
* 3 A A crowd on a pier.
* 4 A Boats slap at their moorings.
5 A ¶ PETRA, 30s, in a red scarf and sensible boots, drags a rolling suitcase onto the dock, while LEOPOLD, 30s, in a rumpled linen suit, sprints from the opposite end holding a bouquet of crushed daisies, and GIULIA, 70s, a nonna in a black shawl, yells from a balcony, and HENRIK, 20s, a tourist with a map, steps between them and drops it, and FATIMA, 30s, a ticket seller in a blue uniform, leans from her booth to shout about the schedule, and ARTHUR, 50s, a silver-haired gentleman, sips an espresso on a bench, watching it all.
6 D PETRA: Leopold?
7 D LEOPOLD: Petra!
8 D GIULIA (from the balcony): Leopoldo! Don't let her go!
9 D FATIMA: The last boat leaves in two minutes!
10 D HENRIK: Excuse me, where is the Rialto?
11 D ARTHUR (to Henrik): Wherever they are, I'd follow them.
12 A ¶ Petra stops.
13 A Leopold stops, six feet away.
* 14 A The daisies drop petals on the planks.
15 D LEOPOLD: I was a fool.
16 D PETRA: You were.
17 D LEOPOLD: Stay.
18 D PETRA: The boat.
19 D FATIMA: Ninety seconds!
20 A ¶ Petra looks at the boat.
21 A At the suitcase.
22 A At the daisies.
23 D PETRA: Is that for me?
24 D LEOPOLD: It was a bouquet.
25 A ¶ She takes the daisies.
26 A Lets go of the suitcase.
* 27 A It rolls into the water.
* 28 A Nobody notices.
* 29 A The boat pulls away.

### SCENE s01650 | INT. JURY ROOM, FLOODED COURTHOUSE ANNEX - DAY
Detected names (may be incomplete or contain aliases): BEATRICE ACHTERBERG, DEMETRIUS, LOLA PINEDA, SAMUEL ODHIAMBO, KRZYSZTOF, BAILIFF GWENDOLYN
* 1 A ¶ Ankle-deep water on the floor.
* 2 A Sandbags at the door.
* 3 A A long table, six chairs.
* 4 A Rain drums on a high window.
5 A ¶ Five jurors sit with their feet on rungs.
6 A Nobody has taken a coat off.
7 A ¶ BEATRICE ACHTERBERG, 60s, foreperson, folds her hands.
8 A DEMETRIUS, 40s, a bus driver, taps a pen.
9 A LOLA PINEDA, 20s, a barista, chews her thumbnail.
10 A SAMUEL ODHIAMBO, 50s, a retired teacher, stares at the ceiling.
11 A KRZYSZTOF, 30s, a welder, sits with arms crossed.
* 12 A ¶ The verdict form lies in the middle of the table.
13 D BEATRICE: We should vote.
14 A ¶ Nobody moves.
15 D BEATRICE [CONT'D]: Anyone?
16 D DEMETRIUS: Not guilty.
17 D LOLA: Not guilty.
18 D SAMUEL (after a moment): Not guilty.
19 D KRZYSZTOF: Guilty.
20 A ¶ Beatrice nods.
21 A Makes a mark.
22 A Her pencil is steady.
23 D BEATRICE: Three to one. And I've not voted.
24 D KRZYSZTOF: Vote.
25 D BEATRICE: After we talk.
26 D DEMETRIUS: What's there to talk about?
27 D KRZYSZTOF: The knife.
28 D DEMETRIUS: The knife wasn't his.
29 D KRZYSZTOF: The glove was.
30 D LOLA (quietly): Gloves can be borrowed.
31 D KRZYSZTOF: So can knives.
32 A ¶ Samuel lowers his gaze from the ceiling.
33 A He picks a pencil off the floor, wipes it on his sleeve.
34 D SAMUEL: I taught his mother.
35 D BEATRICE: Mr. Odhiambo.
36 D SAMUEL: I'm not saying it should matter.
37 D BEATRICE: We were told to disregard everything but the evidence.
38 D SAMUEL: I know. I know that.
* 39 A ¶ Silence.
* 40 A The window rattles.
* 41 A A little water laps against the table leg.
42 D LOLA: My coffee machine's underwater.
43 D DEMETRIUS: Mine's my bus.
44 D KRZYSZTOF: Mine's a pay stub.
45 A ¶ Nobody laughs.
46 A Beatrice smooths the form with both palms.
47 D BEATRICE: Then we take another look at the knife.
* 48 A ¶ The door opens.
* 49 A Water sloshes across the floor.
50 A ¶ BAILIFF GWENDOLYN, 40s, in rubber boots and a yellow slicker, wades in with a plastic crate.
51 D GWENDOLYN: Lunch. Egg sandwiches.
52 A ¶ She sets the crate on the table.
53 A Hands out wrapped sandwiches.
54 A Skips Krzysztof.
55 A Gives him a longer look instead.
56 D KRZYSZTOF: What?
57 D GWENDOLYN: Nothing.
58 D KRZYSZTOF: You looked at me.
59 D GWENDOLYN: I look at everyone.
60 A ¶ She leaves.
* 61 A The door clunks shut.
62 A ¶ Beatrice unwraps a sandwich.
63 A Doesn't eat.
64 A Lola eats half, wraps the rest.
65 A Demetrius takes one bite and puts it down.
66 A Samuel holds his without opening it.
67 A Krzysztof leaves his on the table.
68 D BEATRICE: I'm going to vote.
69 D DEMETRIUS: Go ahead.
70 D BEATRICE: Not guilty.
71 D LOLA: Four.
72 D KRZYSZTOF (low): Five hundred and fifty dollars a week.
73 D BEATRICE: Sorry?
74 D KRZYSZTOF: That's what I make. That's what he stole from me.
75 D SAMUEL: You knew the defendant?
76 D KRZYSZTOF (ignoring this): I want to see the knife again.
77 D BEATRICE: That requires a note to the judge.
78 D KRZYSZTOF: Write the note.
79 A ¶ Beatrice looks at the others.
80 A Lola nods.
81 A Demetrius shrugs.
82 A Samuel sighs and hands her a sheet of paper.
83 A ¶ She writes.
84 A Folds.
85 A Passes it to Samuel, who pushes it back along the table to Krzysztof.
86 A He doesn't touch it.
87 D KRZYSZTOF [CONT'D]: You write it.
88 D BEATRICE: I did.
89 D KRZYSZTOF: Then I'll carry it.
90 A ¶ He takes the note.
91 A Stands.
* 92 A Water swirls around his boots.
93 A He wades to the door, and Lola's eyes follow him, wide.
94 D LOLA (whispering, after he's gone): Did he say he knew him?
95 D DEMETRIUS: He said it.
96 D SAMUEL: Then he should have said so at the start.
97 D BEATRICE: He didn't want to be excused.
98 A ¶ Nobody speaks.
* 99 A Rain on the window.
* 100 A The water, still rising.

### SCENE s01651 | INT. DECOMMISSIONED SUBMARINE, CORPORATE RETREAT - DAY
Detected names (may be incomplete or contain aliases): BRANDEN, KIMBERLEIGH, DEVONTE, PRUNELLA, GUNNAR
* 1 A ¶ A cramped steel corridor.
* 2 A Pipes.
* 3 A Condensation.
* 4 A A banner: SYNERGY AT DEPTH.
5 A ¶ BRANDEN, 40s, a regional director in a fleece vest, holds a clipboard.
6 A KIMBERLEIGH, 30s, in a pastel blazer, adjusts her lanyard.
7 A DEVONTE, 20s, an intern, hugs a thermos.
8 A PRUNELLA, 50s, finance, stares at a pressure gauge.
9 A GUNNAR, 60s, the museum guide, leans against a torpedo tube.
10 D BRANDEN: Team! Gather round!
11 A ¶ Nobody moves.
* 12 A There's nowhere to gather.
13 D KIMBERLEIGH: Branden, there are five of us.
14 D BRANDEN: Five is a team.
15 D DEVONTE: Is that gauge supposed to be on red?
16 D PRUNELLA: It's a museum. Nothing is supposed to be anything.
17 D GUNNAR: That gauge hasn't worked since 1974.
18 D BRANDEN: Great. Ice-breaker. Everybody say one word that describes our Q3.
19 D KIMBERLEIGH: Dynamic.
20 D DEVONTE: Damp.
21 D PRUNELLA: Overdue.
22 D GUNNAR: Submerged.
23 D BRANDEN: Beautiful. Mine is "Lean."
24 D PRUNELLA: Of course it is.
25 D BRANDEN: Next: trust fall.
26 D DEVONTE: Where?
27 D BRANDEN: Backwards. Off the ladder.
28 D GUNNAR: Please don't.
29 D KIMBERLEIGH: Branden, I'd rather do the spreadsheet.
30 D BRANDEN: That's the spirit!
31 A ¶ He climbs the ladder.
32 A Turns.
33 A Falls.
34 A The others do not move.
* 35 A A very loud clang echoes through the sub.
36 D BRANDEN [CONT'D] (from the floor): Okay. That's on me.

### SCENE s01652 | INT. HOUSEBOAT GALLEY - CHRISTMAS EVE - NIGHT
Detected names (may be incomplete or contain aliases): OLD MAN, CHIARA, LUCA, NONNA SABINA, ENZO, ^SABINA
* 1 A ¶ A tiny kitchen rocking gently on a canal.
* 2 A Steam on the window.
* 3 A A pot of tomato sauce.
* 4 A Strings of paper lanterns.
5 A ¶ An OLD MAN, 80s, a cardigan, a wooden spoon, stirs the pot with a trembling hand.
6 A He hums something Neapolitan.
7 A ¶ CHIARA, 40s, in a coat, steps through the hatch, shaking rain off.
8 A She stops.
9 A Looks at him.
10 D CHIARA: Papa, you're not supposed to be cooking.
11 D OLD MAN: I'm not cooking. I'm supervising.
12 D CHIARA: The sauce is boiling.
13 D OLD MAN: It is supposed to boil.
14 A ¶ She crosses and takes the spoon.
15 A He lets her.
16 A She stirs, tastes, smiles.
17 D CHIARA: Salt.
18 D OLD MAN: It has salt.
19 D CHIARA: More.
20 D OLD MAN: Chiara, I made this sauce before you could walk.
21 D CHIARA: I know. That's how I know it needs more.
22 A ¶ LUCA, 12, her son, bursts in carrying a plastic reindeer.
23 A He wears a Santa hat two sizes too big.
24 D LUCA: Mamma! Nonno! I found the reindeer!
25 D CHIARA: Luca, shoes.
26 D LUCA: They're on.
27 D CHIARA: They're wet.
28 D LUCA: It's raining!
29 D OLD MAN (to Luca): Come here. Give me the reindeer.
30 A ¶ Luca hands it over.
31 A The old man turns it, examines it with great seriousness.
32 D OLD MAN [CONT'D]: This reindeer has one antler.
33 D LUCA: It's a one-antler reindeer.
34 D OLD MAN: Then he must be very brave.
35 A ¶ Luca grins.
* 36 A A voice carries from the hatch.
37 A ¶ NONNA SABINA, 80s, in a black headscarf, climbs down slowly, a tray of pastries held out in front of her.
38 D SABINA: Enzo! You are in my kitchen!
39 D ENZO (the Old Man, caught): Sabina, it is a houseboat. It is no one's kitchen.
40 D SABINA: It is mine when I say it is.
41 D CHIARA: Mamma, he's only supervising.
42 D SABINA: He is always supervising. Forty years of supervising.
43 D ENZO: And forty years you ate well.
44 D SABINA: I ate when I cooked.
45 A ¶ Enzo laughs.
46 A She sets the tray down.
47 A She puts her hand to his cheek, briefly, and he turns his face into her palm.
48 D CHIARA (to Luca, softly): Go see if Zio Tomaso has docked.
49 D LUCA: Can I take the reindeer?
50 D CHIARA: Take it.
51 A ¶ Luca runs out.
52 A Enzo and Sabina stand very still.
53 D ENZO: It's been a good year, Sabina.
54 D SABINA: It has.
55 D ENZO: The doctor says --
56 D SABINA: I know what the doctor says.
57 D ENZO: I'd like to be at the table.
58 D SABINA: You will be.
59 D ENZO: I'd like to carve.
60 D SABINA: You'll supervise.
61 A ¶ Chiara, who has been pretending not to listen, wipes her eyes with the back of her wrist.
62 D SABINA [CONT'D] (without turning): And you. Don't cry in my sauce.
63 D CHIARA: Mamma, I wasn't --
64 D SABINA: Cry on the pasta. It needs the salt.
65 D ENZO (simultaneously): Cry on the pasta.
66 D ^SABINA: Cry on the pasta.
67 A ¶ Chiara laughs, wet and sudden.
* 68 A The boat sways.
* 69 A The lanterns bob.
* 70 A Outside, someone starts to sing.

### SCENE s01653 | INT. HOLLOW WHALE-BONE MARKET - NIGHT
Detected names (may be incomplete or contain aliases): ELDRIN, SYLVETTE, GORRAK, THISTLE
* 1 A ¶ A cathedral of ribs.
* 2 A Moonlight slants between them.
* 3 A Stalls of glass beads, herbs, bottled lightning.
* 4 A Torches burn blue.
5 A ¶ ELDRIN, 40s, a gaunt wizard in a cloak stitched with eyes, stalks between stalls.
6 A SYLVETTE, 30s, a thief in a green hood, trails him by three paces.
7 A GORRAK, 50s, a troll in a leather apron, hauls a barrel.
8 A THISTLE, 10, a barefoot child with a lantern, skips ahead.
9 D ELDRIN (to everyone): Hold your wares! The market is closing!
10 A ¶ He lifts his staff.
11 A Eyes on his cloak snap open, scanning the stalls.
12 D SYLVETTE (muttering): Closing. He says closing like it means something.
13 A ¶ She slips a vial from a stall and into her sleeve.
14 A He doesn't turn.
15 A ¶ He stops at a stall.
16 A Taps a jar of black powder.
17 D ELDRIN: This. How much?
18 D GORRAK: For him? Ten crowns.
19 D ELDRIN: For whom?
20 D GORRAK: For whoever asks.
21 D ELDRIN (to himself): Everyone asks.
22 A ¶ He drops coins into a bowl.
23 A Takes the jar.
24 A Holds it up to a torch.
* 25 A It glows.
26 A Behind him, Thistle tugs at Gorrak's apron.
27 D THISTLE: Is that a dragon's tooth?
28 D GORRAK: It's a very old tooth.
29 D THISTLE: Can I touch it?
30 D GORRAK: No.
31 A ¶ She does.
32 A Sparks leap from her fingertips.
33 A She yelps, grinning.
34 D SYLVETTE (to Thistle, low): Give that here.
35 D THISTLE: It's mine.
36 D SYLVETTE: It's his.
37 D THISTLE: He gave it to me.
38 D SYLVETTE: He doesn't give anything to anyone.
39 A ¶ Eldrin turns.
40 A His eyes, on the cloak, all swivel to Sylvette.
41 A His real eyes stay on Thistle.
42 D ELDRIN (to Thistle): Keep it.
43 D THISTLE: Truly?
44 D ELDRIN (to Sylvette): And you may keep the vial.
45 A ¶ Sylvette stops cold.
46 A Slowly takes the vial from her sleeve.
47 D SYLVETTE: How long have you known?
48 D ELDRIN: Since you took it.
49 A ¶ He turns away.
* 50 A The blue torches gutter.
* 51 A High above, between the ribs, a pale shape moves against the moon.
* 52 A A vast wing.
* 53 A A slow breath.
54 D GORRAK (to the whole market): Everybody down.
* 55 A ¶ The market goes still.
56 D THISTLE (whispering): Is it the whale?
57 D ELDRIN: It is the whale's dream.
58 A ¶ He lowers his staff.
* 59 A The shape passes.
* 60 A The moonlight returns.
* 61 A Somewhere a bead rolls off a stall and clinks.

### SCENE s01654 | INT. BAT-GUANO MINE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR ALOYSIUS PRYCE, PHAEDRA LUND, TANAKA, BRIGID, OSWIN
* 1 A ¶ A timber shack bolted to a cavern wall.
* 2 A Dripping stalactites visible through a cracked window.
* 3 A A desk covered in ledgers, a kerosene lantern, a wall of hanging miner's lamps.
* 4 A The air is thick and sour.
5 A ¶ INSPECTOR ALOYSIUS PRYCE, 50s, tall, thin, a tweed overcoat and a black umbrella, sits at the desk.
6 A His face is long and grave.
7 A He turns the pages of a ledger without hurry.
8 A ¶ PHAEDRA LUND, 40s, the mine's owner, in a mud-spattered fur coat, watches him from the doorway.
9 A Her hair is silver, her mouth a razor.
10 A ¶ MR. TANAKA, 60s, the foreman, round-faced and quiet, stands behind the desk with a pencil behind his ear.
11 A BRIGID, 20s, a clerk with red hair and ink-stained fingers, sorts receipts at a side table.
12 A OSWIN, 30s, a miner with soot to his eyes, sits on a barrel by the stove.
13 D PRYCE: Mrs. Lund. Your figures are very tidy.
14 D PHAEDRA: I pride myself on it.
15 D PRYCE: Too tidy.
16 D PHAEDRA: Is that an accusation?
17 D PRYCE: It's an observation.
18 D TANAKA: We keep good books, Inspector.
19 D PRYCE (not looking up): Who keeps them?
20 D BRIGID: I do, sir.
21 D PRYCE: Alone?
22 D BRIGID: Mostly.
23 D PRYCE: Who checks your arithmetic?
24 D BRIGID: Mr. Tanaka.
25 D PRYCE: Mr. Tanaka, who checks yours?
26 D TANAKA: Mrs. Lund.
27 D PRYCE: And who checks hers?
28 D PHAEDRA: God, Inspector.
29 A ¶ Pryce nods.
30 A Closes the ledger.
31 A Opens another.
32 D PRYCE: Oswin. You're the miner.
33 D OSWIN: Yes, sir.
34 D PRYCE: How many tonnes did you haul last week?
35 D OSWIN: Forty.
36 D PRYCE: The ledger says sixty.
37 D OSWIN: Sixty is what they wrote.
38 D PHAEDRA: Oswin.
39 D OSWIN: I only count the barrows, ma'am.
40 A ¶ Pryce looks at Phaedra.
41 A For a moment his face is the face of a priest, very patient.
* 42 A The kerosene lantern hisses.
43 D PRYCE: Mrs. Lund, I'm going to ask Miss Brigid a question. You're welcome to stay.
44 D PHAEDRA: I wouldn't miss it.
45 D PRYCE: Miss Brigid. Where is the guano going?
46 D BRIGID: To the dock. And then to a ship.
47 D PRYCE: Which ship?
48 D BRIGID: The Margaret Rose.
49 D PRYCE: And where does the Margaret Rose go?
50 D BRIGID: To Liverpool.
51 D PRYCE: It does not.
* 52 A ¶ Silence.
* 53 A A drop of water falls from a stalactite onto the roof.
54 D PRYCE [CONT'D]: The Margaret Rose has been at the bottom of the Bay of Biscay since March.
55 A ¶ Brigid's pen stops.
56 A Tanaka's pencil slips from behind his ear.
57 A Oswin stands up from the barrel, slowly.
58 A Phaedra, still in the doorway, smiles.
59 D PHAEDRA: Then who, Inspector, has been buying my guano?

### SCENE s01655 | INT. STALLED ELEVATOR, LAW FIRM TOWER - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE DUVAL, ROLAND CHASE, ELSPETH, JAMAL
* 1 A ¶ A brushed steel box.
2 A Four people.
* 3 A A dim emergency light.
* 4 A The floor indicator reads 14 and does not change.
5 A ¶ MARGUERITE DUVAL, 50s, opposing counsel, in a navy suit, holds a briefcase to her chest.
6 A ROLAND CHASE, 40s, lead attorney, loosens his tie.
7 A ELSPETH, 30s, a junior associate, sits on the floor with her laptop.
8 A JAMAL, 50s, the building's maintenance man, presses the intercom.
9 D MARGUERITE: Roland, I'm not signing anything in an elevator.
10 D ROLAND: You don't have a choice.
11 D MARGUERITE: I always have a choice.
12 D ROLAND: Name one.
13 D MARGUERITE: I can wait.
14 D ROLAND: For what?
15 D MARGUERITE: For you to run out of air.
16 D ELSPETH: There's plenty of air.
17 D JAMAL: There's plenty of air. The cables are the problem.
18 D ROLAND: Mr. Jamal, how long?
19 D JAMAL: Hour. Maybe two.
20 D MARGUERITE: Two hours?
21 D ELSPETH: It's in the contract, Marguerite.
22 D MARGUERITE: The elevator?
23 D ELSPETH: The deadline. Midnight.
24 D MARGUERITE (checking watch): It's eleven-twenty.
25 D ROLAND: You see. You see.
26 D MARGUERITE: I see a man who parked his deal in an elevator.
27 D JAMAL (into intercom): Dispatch, we've got a stuck car on fourteen. Four occupants. Two lawyers, one associate, one me.
* 28 A ¶ The intercom crackles.
29 A Jamal listens, nods.
30 D ELSPETH: What did they say?
31 D JAMAL: Twenty minutes. They always say twenty minutes.
32 D ROLAND: Elspeth, print the settlement.
33 D ELSPETH: There's no printer.
34 D ROLAND: Then write it by hand.
35 D ELSPETH: In what?
36 D ROLAND: Anything.
37 A ¶ Elspeth opens her laptop.
38 A Marguerite snatches it, and Roland lunges, and the laptop tumbles between them, bounces off the wall, and slides to Jamal's feet.
39 A He picks it up and holds it carefully, like a baby.
40 D JAMAL: Folks, I got a rule in my elevators.
41 D MARGUERITE (overlapping): This isn't your elevator --
42 D ROLAND (overlapping): Give it to me --
43 D ELSPETH (overlapping): It's mine, actually --
44 D JAMAL: No fighting. No yelling. No lawyering.
45 A ¶ The three of them stop.
* 46 A The emergency light flickers.
* 47 A A groan from the cables above, deep and long.
* 48 A ¶ The car drops two inches.
49 A Everyone grabs a rail.
50 A Marguerite drops her briefcase.
51 A Roland sits down hard.
52 A Elspeth screams, once, short and sharp.
53 A Jamal alone remains standing.
54 D JAMAL [CONT'D]: That's the cable settling.
55 D MARGUERITE (whispering): That's the cable settling?
56 D JAMAL: That's what it sounds like when it's settling.
57 D ELSPETH: And when it's not?
58 D JAMAL: You won't have to ask.
* 59 A ¶ Silence.
60 A Roland retrieves a pen from his pocket.
61 A Marguerite, after a moment, holds out her hand.
62 A He gives it to her.
63 A ¶ She opens her briefcase, draws a thick document, and signs the last page on the wall of the elevator.
* 64 A The ink bleeds into the steel.
65 D MARGUERITE: Witness, Mr. Jamal.
66 D JAMAL: I witness.
67 A ¶ He signs.
68 A Hands the pen back.
* 69 A The car shudders.
* 70 A The indicator light flickers.
* 71 A 14 becomes 13.

### SCENE s01656 | INT. ICE RINK RESURFACER GARAGE - 3 A.M.
Detected names (may be incomplete or contain aliases): COACH DOLORES, RAFFERTY, KWAME, TULLY
* 1 A ¶ A concrete bay.
* 2 A Fluorescent tubes.
* 3 A A Zamboni steaming in the corner.
* 4 A A cracked radio on a shelf plays a farm report.
5 A ¶ COACH DOLORES, 50s, in a stained team jacket, sits on an overturned bucket with a clipboard.
6 A RAFFERTY, 30s, the goalie, taping his stick, doesn't look up.
7 A KWAME, 20s, a rookie forward, hunches over a protein shake.
8 A TULLY, 40s, the driver, polishes the Zamboni's blade with a rag.
9 D DOLORES (to the room): We lost by seven.
10 A ¶ Nobody answers.
11 D DOLORES [CONT'D] (to Rafferty): You let in five.
12 D RAFFERTY: Four. One was an own goal.
13 D DOLORES: Who was it?
14 D RAFFERTY: Kwame.
15 D KWAME: It hit my skate!
16 D RAFFERTY: It hit the net after it hit your skate.
17 D KWAME: That's not my fault!
18 D DOLORES: Kwame. Sit.
19 A ¶ Kwame sits.
* 20 A The shake slops.
21 A Tully tosses him a rag.
22 A He catches it.
23 A Wipes.
24 D TULLY: You can pay me back in wins.
25 D KWAME: When?
26 D TULLY: When you stop scoring on yourself.
27 A ¶ Rafferty snorts.
28 A Kwame looks at him.
29 A They both grin.
30 A Dolores glances up from the clipboard.
31 D DOLORES: That's the first smile I've seen since February.
32 D RAFFERTY: We've been losing since February.
33 D DOLORES (to herself): Since October, really.
34 D TULLY: Coach, is there a game tomorrow?
35 D DOLORES: There's a game every day, Tully.
36 D TULLY: Is there a win?
37 D DOLORES: Not yet.
38 A ¶ She sets down the clipboard.
39 A Stands.
40 A Her knees crack.
41 A She crosses to the Zamboni, runs a hand along its flank.
42 D DOLORES [CONT'D] (to the whole garage): Listen. Nobody's losing sleep tonight. Go home.
43 D RAFFERTY: You first, Coach.
44 D DOLORES: I'm not tired.
45 D TULLY: You're sitting on a bucket.
46 D DOLORES: Best seat in the building.
47 A ¶ Kwame stands, stretches, claps Rafferty's shoulder.
48 A Rafferty swats his hand away.
49 A They bump chests, hard, then lean into each other and shove, laughing, until Tully swings the rag between them like a referee's flag and Dolores, watching all three, shakes her head.
50 D DOLORES [CONT'D] (softly): Idiots.
51 A ¶ Tully flicks the Zamboni's engine.
* 52 A It coughs.
* 53 A Steam fills the garage.

### SCENE s01657 | INT. DUBBING STUDIO BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): IRENKA VESELY
* 1 A ¶ A padded booth the size of a closet.
* 2 A Acoustic foam in grey waves.
* 3 A A microphone on a boom arm.
* 4 A A music stand holding a script, pages curling.
* 5 A A small red light on the wall, dark for now.
* 6 A ¶ Beyond a thick glass pane, an empty control room.
* 7 A A mixing desk glows green.
* 8 A No one sits behind it.
9 A ¶ IRENKA VESELY, 78, perches on a stool, headphones around her neck, lace collar buttoned to the chin.
10 A Silver hair pinned back.
11 A Heavy rings on both hands.
12 A She has the kind of face that was once on posters.
* 13 A ¶ A monitor on the wall shows a silent black-and-white clip: a young woman's face, laughing.
14 A ¶ Irenka watches it.
15 A She does not laugh.
16 A ¶ She reaches over.
17 A Presses a button on a small tape deck beside the stand.
* 18 A It clicks.
19 D IRENKA [V.O.] (tape, thirty years younger, brisk): "I never said I loved you. I said I would stay."
20 A ¶ Irenka listens.
21 A Nods slowly.
22 A Presses stop.
23 D IRENKA: Too quick.
24 A ¶ She rewinds the tape.
25 A Plays it again.
26 D IRENKA [V.O.] (tape): "I never said I loved you. I said I would stay."
27 D IRENKA: Still too quick.
28 A ¶ She switches off the deck.
29 A Slips the headphones on.
30 A Leans toward the microphone.
* 31 A The red light glows on.
32 D IRENKA [CONT'D] (reading): "I never said I loved you."
33 A ¶ Her voice cracks.
34 A She stops.
35 A Clears her throat.
36 A Looks up at the monitor.
* 37 A The young face laughs again.
38 D IRENKA [CONT'D] (to herself): She was never in a hurry.
39 A ¶ She tries again.
40 D IRENKA [CONT'D]: "I never said I loved you. I said --"
41 A ¶ She stops.
42 A Pulls the headphones down.
43 A Sits in the silence for a long moment.
44 D IRENKA [CONT'D] (to the glass): You always did make me say it twice.
* 45 A ¶ No answer.
* 46 A The green desk glows.
47 A ¶ She reaches for the deck again.
48 A Presses a different button.
* 49 A A second tape hisses.
50 D IRENKA [V.O.] (tape, much younger, laughing): "Pavel, put that down. We are rolling."
* 51 A ¶ A man's cough on the tape, nothing more, then the clink of a glass.
52 A She smiles.
53 A The smile slips.
54 D IRENKA [V.O., CONT'D] (tape): "Take one. Irenka Vesely. 'The Quiet Hour.'"
* 55 A ¶ The tape hisses.
* 56 A Ends.
57 A She sits with the deck, hands folded around it, as if keeping it warm.
58 D IRENKA (whispering): Take one.
59 A ¶ She sets the deck on the floor.
60 A Stands.
61 A Her knees crack.
62 A She grips the mic stand.
63 A ¶ She puts on the headphones.
64 A Faces the microphone.
65 A Straightens her spine as if a director stood behind her.
66 D IRENKA [CONT'D] (to the room): Ready, everyone?
* 67 A ¶ Nobody answers.
68 A She smiles, tight and brave.
69 D IRENKA [CONT'D]: Ready when you are.
* 70 A ¶ The red light blinks on.
71 A She takes a long breath.
72 A Eyes on the monitor.
73 A On the young face.
74 A On the young smile.
75 D IRENKA [CONT'D] (slow, warm, barely a whisper): "I never said I loved you."
* 76 A ¶ A beat.
* 77 A The young face on the monitor turns toward an unseen man and smiles.
78 D IRENKA [CONT'D]: "I said I would stay."
* 79 A ¶ The red light blinks off.
* 80 A Silence.
81 A ¶ She doesn't move.
82 A Her hands are steady.
83 A Her shoulders are not.
84 D IRENKA [CONT'D] (a whisper): It took me sixty years.
* 85 A ¶ The monitor fades to black.
86 A She stays, listening to the room.
87 A ¶ She gathers her handbag, her cardigan, her gloves.
88 A At the door she pauses.
89 A Looks back at the empty control room, the glowing desk.
90 D IRENKA [CONT'D] (to the booth): I'll be here tomorrow.
91 A ¶ She opens the door.
* 92 A Light from the corridor spills over her shoulders.
93 A She steps out, leaving the booth dark.
* 94 A ¶ The tape deck, at her feet, clicks on by itself.
95 D IRENKA [V.O.] (tape, faint): "Take two."

### SCENE s01658 | INT. FARRINER'S BAKERY, PUDDING LANE - NIGHT (1666)
Detected names (may be incomplete or contain aliases): THOMAS FARRINER, HANNAH, PEG, JOSIAH
* 1 A ¶ Low beams.
* 2 A A great brick oven, banked low.
* 3 A Flour dusting the floor.
* 4 A A candle on a tin plate.
5 A ¶ THOMAS FARRINER, 40s, a baker with burn scars on both forearms, rakes the oven's embers.
6 A Behind him, HANNAH, 30s, his wife, folds dough with hard, even strokes.
7 A PEG, 10, their daughter, sits on a barrel with a rag doll.
8 A JOSIAH, 20s, his apprentice, yawns against the doorframe.
9 A ¶ Thomas rakes.
10 A Hannah folds.
11 A Peg hums.
12 A Josiah slumps lower.
13 D THOMAS: Josiah.
14 D JOSIAH: Yes, master.
15 D THOMAS: The faggots.
16 D JOSIAH: Stacked, master.
17 D THOMAS: Where?
18 D JOSIAH: By the oven.
19 A ¶ Thomas stops raking.
20 A Slowly turns to look.
* 21 A ¶ A stack of dry kindling leans against the oven's side, close enough to scorch.
* 22 A A single ember has already caught the edge of a bundle.
23 A ¶ Hannah looks.
24 A Peg looks.
25 A Josiah looks.
26 A ¶ Nobody speaks.
27 A Thomas drops the rake.
28 A Hannah drops the dough.
29 A Josiah dives for the bucket, Peg screams, and Thomas smothers the bundle with his coat while Hannah beats at the flames with her apron, and the four of them stamp, slap, and gasp until the last spark dies and smoke curls up through the beams.
* 30 A ¶ Silence.
31 A Thomas lifts his scorched coat.
32 A Josiah sets the bucket down.
33 D THOMAS (quiet): Open the shutters.
34 D JOSIAH: Aye.
35 A ¶ Hannah gathers Peg into her skirts.
36 A Her hands shake.
37 A ¶ Thomas stares at the oven for a long time.
38 A Then, deliberately, he rakes out the last of the embers, and douses them, one by one.

### SCENE s01659 | INT. MARBLE FUNERAL PARLOR - DAY
Detected names (may be incomplete or contain aliases): UNCLE BASIL, TESS, MONTY, ZELDA
* 1 A ¶ Soft carpet.
* 2 A A hush.
* 3 A Wreaths of white lilies on stands.
* 4 A At the front, a closed mahogany coffin.
5 A ¶ UNCLE BASIL, 60s, in a black suit, greets guests at the door.
6 A TESS, 30s, in a black dress and sunglasses, shakes his hand.
7 A MONTY, 40s, in a rumpled black suit, follows her in.
8 A ZELDA, 50s, in a veiled hat, sits in the front row, hands folded.
9 D UNCLE BASIL: Thank you for coming. Thank you.
10 D TESS: So sorry for your loss.
11 D UNCLE BASIL: Thank you, dear.
12 D TESS (low): He's in position.
13 D UNCLE BASIL (low): Who?
14 D TESS: Uncle Basil.
15 D UNCLE BASIL: That's me, dear.
16 D TESS: I know.
17 D MONTY (hushed): Tess, what are you doing?
18 D TESS: Quiet, Monty.
19 A ¶ They walk down the aisle.
20 A Zelda turns her veiled head.
21 D ZELDA (whispering): Tess. Monty. Sit.
22 A ¶ They sit.
23 A Zelda leans in.
24 D ZELDA [CONT'D] (to Monty): Is everything in place?
25 D MONTY: Everything's in place.
26 D ZELDA (to Tess): And the vault?
27 D TESS: Monty has the vault.
28 D MONTY: I have the vault.
29 D ZELDA: Good. When the organ starts, you move.
30 D TESS: And Uncle Basil?
31 D ZELDA: Basil is the one who's dead.
32 A ¶ Tess blinks.
33 A Monty chokes.
34 D MONTY: Uncle Basil is at the door.
35 D ZELDA: That is Basil's twin. Basilius. They've been swapping for decades.
36 D TESS: Then who's in the coffin?
37 D ZELDA: The plan.
* 38 A ¶ The organ begins.
* 39 A A slow, mournful hymn.
40 A Everyone in the room stands.
41 A Zelda lifts her veil, revealing a very small smile.
42 D ZELDA [CONT'D] (whispering): Now.
* 43 A ¶ The coffin lid opens by itself.

### SCENE s01660 | INT. SHUTTERED CAROUSEL FACTORY - NIGHT
Detected names (may be incomplete or contain aliases): INEZ MARQUARDT, CARMINE, DOROTHEA, VLAD, REGGIE
* 1 A ¶ A cavernous workshop under a rusted skylight.
* 2 A Painted horses hang from chains, half-carved, half-gilded, their glass eyes catching the moon.
* 3 A Sawdust drifts like old snow.
* 4 A A single bare bulb swings over a workbench.
5 A ¶ INEZ MARQUARDT, 40s, a detective in a wet raincoat, leans against a pillar.
6 A Her hair is tied back with a rubber band.
7 A Her face is calm, but her fingers drum.
8 A ¶ CARMINE, 50s, a carver with a chisel scar across his left cheek, sits at the bench with a half-finished stallion.
9 A He is huge and slow and gentle.
10 A ¶ DOROTHEA, 60s, the factory's owner, stands in the doorway of a glass-walled office, a cigarette burning down in her hand.
11 A VLAD, 30s, her nephew, lurks at her shoulder in a leather jacket.
12 A REGGIE, 20s, a rawboned kid in a yellow slicker, hovers near the big double doors as if ready to run.
13 A ¶ Inez takes her time.
14 A She walks along the line of hanging horses.
15 A She touches one.
* 16 A It swings.
17 A ¶ She doesn't look at him when she speaks.
18 D INEZ: He says you knew the girl.
19 D CARMINE: He says a lot.
20 D INEZ: He says you carved her a pony.
21 D CARMINE: He says that.
22 D INEZ: Did you?
23 A ¶ Carmine turns the chisel over in his hands.
24 A He looks at it, not at her.
25 D CARMINE: She liked the grey ones.
26 D INEZ: She's been missing nine days.
27 D CARMINE: It's a long time.
28 A ¶ Dorothea steps out of the office.
29 A Her heels click on the concrete.
30 A She draws on the cigarette and exhales a long, thin line of smoke.
31 D DOROTHEA: Detective, my carver is a gentle man. He works. He eats. He goes home.
32 D INEZ: Where's home?
33 D DOROTHEA: Upstairs.
34 D INEZ: In this building?
35 D DOROTHEA: He has no other.
36 A ¶ Vlad shifts.
37 A His boots scuff.
38 A He shoves his hands into his jacket pockets, then pulls them out again.
39 A ¶ Inez notices.
40 A She says nothing.
41 A She walks to the bench.
42 A Looks at the stallion, then at Carmine's hands.
43 A Then she picks up a small grey pony, perfect, half-finished, from the shavings.
44 A ¶ She holds it up to the light.
* 45 A A tiny name is carved on its belly.
46 D INEZ (reading): "For Wren."
* 47 A ¶ Silence.
* 48 A Nobody breathes.
* 49 A The bulb swings.
50 A ¶ Reggie bolts for the double doors.
51 A Hauls one open.
* 52 A Rain pours in.
53 A He is through, running, the yellow slicker vanishing into the dark.
54 A ¶ Vlad lunges after him.
55 A Dorothea screams his name.
56 A Inez drops the pony and draws her revolver in one smooth move, but Carmine is already on his feet, huge, quiet, between her and the door, the chisel hanging at his side like a thing he's forgotten he's holding.
57 D CARMINE (softly): Not the boy.
58 A ¶ Inez does not lower the gun.
59 A She does not fire.
60 D INEZ: Where is she, Carmine?
61 A ¶ He tilts his head toward the ceiling.
62 A Up, past the beams, to a trapdoor in the rafters.
* 63 A A rope ladder hangs, swaying.
64 D CARMINE: She's been waiting for her pony.
65 A ¶ Inez lowers the gun an inch.
66 A She looks at the ladder.
67 A She looks at the grey pony on the floor.
68 A And she begins to climb.

### SCENE s01661 | INT. MRI SUITE, UNIVERSITY HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE LEHMANN, NIAMH BRENNAN, ^NIAMH
* 1 A ¶ A cold, white room dominated by the great ring of the scanner.
* 2 A A narrow table slides in and out of its throat.
* 3 A Behind a window, a console glows.
* 4 A A low mechanical thrum fills the air, like the breath of something asleep.
5 A ¶ DR. AUGUSTINE LEHMANN, 50s, white coat, wire glasses, sits at the console behind the window.
6 A His fingers rest on the keys.
7 A He watches the monitors with the stillness of a man used to bad news.
8 A ¶ NIAMH BRENNAN, 30s, lies on the scanner table in a paper gown, a blanket across her knees, a headset over her ears.
9 A Her eyes are closed.
10 A Her hands are folded on her stomach.
11 A ¶ He presses a button.
12 A The table slides her slowly into the ring.
* 13 A ¶ The thrum becomes a rhythmic knocking.
* 14 A Louder.
* 15 A Louder.
16 A ¶ He leans to the intercom.
17 D DR. LEHMANN: Niamh, can you hear me?
18 D NIAMH (muffled): I hear a jackhammer.
19 D DR. LEHMANN: That's normal. Keep still.
20 D NIAMH: Is it supposed to hurt?
21 D DR. LEHMANN: No.
22 D NIAMH: Then why does it feel like it's looking back at me?
23 A ¶ He studies the monitor.
* 24 A A grey slice of brain scrolls across the screen.
25 A He freezes it.
26 A Magnifies a small, dark shape.
27 A Frowns.
28 A ¶ He does not tell her.
29 D DR. LEHMANN: We're nearly done.
30 D NIAMH: You said that ten minutes ago.
31 D DR. LEHMANN: I meant it then too.
32 A ¶ She laughs, one short breath.
* 33 A The scanner knocks.
34 A He types something.
35 A Deletes it.
36 A Types again.
37 A ¶ She lifts one hand slightly.
38 A Opens her fingers.
39 D NIAMH: Doctor?
40 D DR. LEHMANN: Yes?
41 D NIAMH: When you look at the pictures, what do you see?
42 D DR. LEHMANN (carefully): I see a very interesting brain.
43 D NIAMH: Is it interesting good, or interesting bad?
44 A ¶ He doesn't answer.
45 A His hand hovers over the intercom.
46 A The table slides her out of the ring, slowly, until she is lying in the open white light.
47 A ¶ He rises.
48 A Steps through the door.
49 A Crosses to her side.
50 A She opens her eyes and stares up at him.
51 D NIAMH [CONT'D] (softly): There's something, isn't there.
52 D DR. LEHMANN (at the same moment): There's something we need to discuss.
53 D ^NIAMH: There's something, isn't there.
54 A ¶ Neither speaks.
* 55 A The scanner sighs and falls silent.
56 A She takes off the headset.
57 A He offers his hand.
58 A She takes it, and sits up with great care, the blanket sliding to the floor.
59 D NIAMH [CONT'D]: Tell me here. Not in an office.
60 A ¶ He nods.
61 A Pulls up a stool.
62 A Sits beside her, level with her eyes.
63 D DR. LEHMANN: I'd like to run one more sequence.
64 D NIAMH: And then?
65 D DR. LEHMANN: And then I will tell you everything I know.
66 A ¶ She nods.
67 A Lies back down.
68 A He steps behind the window again.
* 69 A The ring starts to knock.

### SCENE s01662 | INT. MIRROR-MAKER'S WORKSHOP - TWILIGHT
Detected names (may be incomplete or contain aliases): GIRL, ORRIN, TAMSIN
* 1 A ¶ Frames, silvered glass, hanging bells.
* 2 A A hundred mirrors lean against the walls, each reflecting a slightly different room.
3 A ¶ A GIRL, 12, ragged hem, carries a lantern between the mirrors.
4 A She stops before the largest, an oval taller than a door.
5 D GIRL: Hello?
6 D ORRIN [O.S.] (from within the glass): Hello yourself.
7 A ¶ She jumps.
* 8 A The lantern swings.
* 9 A In the mirror, her reflection does not move.
10 D GIRL: Who's there?
11 D ORRIN [O.S.]: Mirror-keeper. Orrin. And you?
12 D GIRL: I don't know.
13 D ORRIN [O.S.]: Everyone knows their name.
14 D GIRL: I forgot it. Last winter.
* 15 A ¶ A pause.
16 A The reflection tilts its head.
17 D ORRIN [O.S.]: Come closer. Let me look.
18 A ¶ She steps forward.
19 A Presses her palm to the cool glass.
20 A The reflection mirrors it, and a pale hand on the other side lines up with hers.
21 D ORRIN [O.S., CONT'D]: Tamsin.
22 D GIRL: What?
23 D ORRIN [O.S.]: Your name. It's Tamsin. I have it here.
24 A ¶ The girl stares.
25 A Her eyes fill.
26 D TAMSIN: How do you know?
27 D ORRIN [O.S.]: Mirrors keep what people lose.
28 A ¶ She laughs, wet and astonished.
29 D TAMSIN: Tamsin.
30 D ORRIN [O.S.]: Say it again.
31 D TAMSIN: Tamsin. Tamsin.
* 32 A ¶ The mirror fogs, then clears.
33 A In the glass, only her face remains, smiling.

### SCENE s01663 | INT. DRAGON DENTIST'S WAITING CAVE - DAY
Detected names (may be incomplete or contain aliases): SMOLDER, PAINLESS, PERPETUA THORNE, GRIMBALD
* 1 A ¶ A vaulted cavern lined with velvet chairs scaled for giants.
* 2 A A rack of tattered magazines titled "Hoard Digest."
* 3 A A wall plaque: DR. SMOLDER, D.D.S. PAINLESS (FOR YOU).
4 A ¶ PERPETUA THORNE, 40s, a knight in battered plate, sits on a chair far too large, feet dangling.
5 A She clutches a gauntlet in her lap and stares at the cavern ceiling.
6 A ¶ GRIMBALD, 60s, a very small, very old gnome with a clipboard and spectacles, bustles from a door at the rear.
7 D GRIMBALD: Dame Perpetua?
8 D PERPETUA: That's me.
9 D GRIMBALD: The doctor will see you now.
10 D PERPETUA: Is it going to hurt?
11 D GRIMBALD: Dame Perpetua, you slew a basilisk last spring.
12 D PERPETUA: Yes.
13 D GRIMBALD: Surely you can manage a cavity.
14 D PERPETUA: A basilisk has no drill.
15 D GRIMBALD: That is true.
16 A ¶ She stands.
17 A Her armor clanks.
18 A She follows him down a corridor of glowing crystal, toward an immense, steaming doorway.
19 D PERPETUA: Grimbald?
20 D GRIMBALD: Yes, Dame?
21 D PERPETUA: How many knights have you walked through here?
22 D GRIMBALD: Seven hundred and twelve.
23 D PERPETUA: How many came out?
24 D GRIMBALD: All of them.
25 D PERPETUA: Really?
26 D GRIMBALD: Some with fewer teeth.
27 A ¶ He pauses at the doorway and pats her hand, which barely reaches his shoulder.
28 D GRIMBALD [CONT'D]: But everyone leaves smiling.
* 29 A ¶ A great rumble from within.
* 30 A The floor trembles.
31 D PERPETUA (whispering): That sounded hungry.
32 D GRIMBALD (whispering): That is just the doctor's professional stomach.
33 D PERPETUA: Grimbald, I may faint.
34 D GRIMBALD: Dame Perpetua, I will faint with you.
35 A ¶ She squares her shoulders.
36 A Takes a breath.
37 D PERPETUA: Then lead on, small friend.
38 A ¶ He opens the door.
* 39 A Steam rolls out in a warm, mint-scented wave.
40 A She walks into it, chin up, clanking.
41 D GRIMBALD (calling after): Open wide!
42 A ¶ Her voice, from within, is nearly a squeak.
43 D PERPETUA [O.S.]: Wider than that?

### SCENE s01664 | INT. SCHOOL GYM - SLEEPOVER - NIGHT
Detected names (may be incomplete or contain aliases): ANYA, BARRETT, DELILAH, KENJI, ROXANNE, WALDO
* 1 A ¶ Sleeping bags in a circle.
* 2 A A flashlight in the middle, pointed at the ceiling.
* 3 A Gym mats smell of rubber and old sweat.
4 A ¶ ANYA, 15, in pajamas with cartoon cats, sits cross-legged.
5 A BARRETT, 16, hugs his knees.
6 A DELILAH, 15, plays with the zipper on her sleeping bag.
7 A KENJI, 16, sits with a bag of chips he hasn't opened.
8 A ROXANNE, 15, stares at the double doors.
9 A WALDO, 17, lies on his back, hands behind his head.
10 D ANYA (to the group): Okay. Truth or dare. Who's first?
11 A ¶ Nobody moves.
12 D BARRETT (to Anya): You're the one who wanted to play.
13 D ANYA: I changed my mind.
14 D DELILAH (to herself): It's too quiet.
15 D KENJI: It's a gym. Gyms are quiet.
16 D ROXANNE: Not this quiet.
17 D WALDO: There's no wind. No cars. Nothing.
18 D BARRETT (to Waldo): Don't say that.
19 D WALDO: I'm just saying.
* 20 A ¶ A basketball rolls out of the dark.
* 21 A Slowly.
* 22 A It bumps against Delilah's sleeping bag.
* 23 A Stops.
24 A ¶ Everyone stares at it.
25 A Nobody touches it.
26 D KENJI (whispering): Did somebody kick that?
27 D ANYA: Nobody's near it.
28 D ROXANNE (to everyone): Don't look at the doors.
29 D BARRETT: Why not?
30 D ROXANNE: Because they're open.
* 31 A ¶ They were closed.
* 32 A Now they gape, a black rectangle onto the dark hallway.
33 A ¶ Delilah scoots back on her sleeping bag.
34 A Kenji drops the chips.
35 A Barrett grabs the flashlight and sweeps it across the doors.
* 36 A Nothing.
* 37 A Just the hall.
38 D WALDO (softly): Count us.
39 D ANYA: What?
40 D WALDO: Count us. Out loud.
41 D ANYA: One.
42 D BARRETT: Two.
43 D DELILAH: Three.
44 D KENJI: Four.
45 D ROXANNE: Five.
* 46 A ¶ A long pause.
47 A Waldo hasn't spoken.
48 D WALDO: Six.
49 A ¶ Everyone turns.
50 A Waldo is lying exactly as before.
51 A But he hasn't moved his lips.
52 A ¶ Anya, barely moving her lips, says the only word left.
53 D ANYA (whispering): Run.

### SCENE s01665 | INT. ICE-CREAM TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): PIPER, CRISPIN, YOLANDA, AUGUST, ^YOLANDA
* 1 A ¶ Cramped.
* 2 A Freezer hum.
* 3 A A cardboard menu with faded cartoon sundaes.
* 4 A Through the windshield, a dark loading dock and a closed steel door.
5 A ¶ PIPER, 30s, in a striped apron, sits at the wheel, tapping a steady pattern with her thumb.
6 A CRISPIN, 40s, in the passenger seat, loosens his tie and pats his pockets twice.
7 A YOLANDA, 50s, crouched in the back by the freezers, counts coiled cables with a flashlight in her teeth.
8 D CRISPIN: Is it warm in here?
9 D PIPER: It's an ice-cream truck.
10 D CRISPIN: It's warm.
11 D YOLANDA (around the flashlight): Eleven minutes.
* 12 A ¶ A knock on the side window.
13 A All three freeze.
14 A ¶ AUGUST, 50s, a security guard, holds a flashlight in one hand and a half-eaten cone in the other.
15 A His uniform is two sizes too small.
16 A ¶ He raps again.
17 A Piper rolls down the window an inch.
18 D AUGUST: We're closed.
19 D PIPER: We know.
20 D AUGUST: Then why are you here?
21 D CRISPIN (smiling too widely): Waiting for a late order.
22 D AUGUST: Who orders ice cream at midnight?
23 D PIPER: The stressed.
24 A ¶ August nods, as if that explains something.
25 A He licks his cone.
26 D AUGUST: What flavor?
27 D CRISPIN: Pistachio.
28 D PIPER (simultaneously): Rocky road.
29 D ^YOLANDA: Neapolitan.
30 A ¶ They glare at one another.
31 A August lifts an eyebrow.
32 D AUGUST: Pick one.
33 D YOLANDA: Neapolitan.
34 D AUGUST: Good choice. Three flavors, no fighting.
35 A ¶ He tips his cap.
36 A Wanders off, licking.
37 A Piper rolls the window back up, slowly, and exhales.
38 D PIPER: Eight minutes.

### SCENE s01666 | INT. CRUISE SHIP CASINO COUNTING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HEDDA STROM, CASSIUS, BIRDIE, NIGEL, KALINDA, CAPTAIN RUSKIN, ^CASSIUS
* 1 A ¶ A windowless steel room below decks.
* 2 A Bills in stacks as high as a child.
* 3 A Counting machines whirring.
* 4 A A single security camera blinks red in the corner.
5 A ¶ HEDDA STROM, 40s, in a crisp white uniform and gloves, feeds bills into a machine with mechanical grace.
6 A CASSIUS, 30s, in a pit boss's vest, stacks cash in plastic trays.
7 A BIRDIE, 20s, a trainee, pushes a cart of chips with wide, nervous eyes.
8 A NIGEL, 50s, the vault manager, hunches over a ledger, glasses low on his nose.
9 A KALINDA, 30s, in a cashier's cap, sorts coins into tubes.
10 D HEDDA: Cassius, the Tuesday trays.
11 D CASSIUS: Stacking.
12 D NIGEL: Hedda, you're short on the dollar bills.
13 D HEDDA: I'm precisely on the dollar bills.
14 D NIGEL (not looking up): You are precisely short.
15 A ¶ Birdie wheels the cart.
* 16 A A chip falls.
* 17 A It rolls under the machine.
18 A She crouches.
19 A Fishes.
20 A Comes up with the chip and something else: a small, flat key.
21 D BIRDIE: Um, Mr. Nigel?
22 D NIGEL: Yes?
23 D BIRDIE: What's this?
24 A ¶ He looks.
25 A His face does something complicated.
26 D NIGEL: It's a key.
27 D KALINDA: To what?
28 D NIGEL: To the ship's safe.
29 D CASSIUS: Why was it under the machine?
30 D HEDDA (dryly): Gravity.
* 31 A ¶ The intercom buzzes.
32 A Everyone freezes.
33 A ¶ CAPTAIN RUSKIN, 60s, in full dress whites with gold braid, appears in the doorway with a black briefcase.
34 A His smile is warm and perfectly empty.
35 D RUSKIN: Good evening, everyone. Don't stop.
36 A ¶ Nobody moves.
* 37 A The machines whirr.
38 D RUSKIN [CONT'D] (to Nigel): You're missing something, I believe.
39 D NIGEL: Captain?
40 D RUSKIN: A key.
41 A ¶ Birdie puts her hand behind her back.
42 A Kalinda sets a tube of coins down, very carefully.
43 D HEDDA (simultaneously): We haven't seen a key.
44 D ^CASSIUS: We haven't seen a key.
* 45 A ¶ A pause.
46 A Ruskin lifts the briefcase onto the counter.
47 A Opens it.
* 48 A Inside, stacked and wrapped, more cash than the counting room holds.
49 D RUSKIN: I'd like to make a deposit.
50 D HEDDA: At this hour?
51 D RUSKIN: I'd like it counted by dawn. And I'd like to know who held the key.
52 A ¶ Birdie slowly brings her hand out.
53 A The key sits in her palm.
54 D BIRDIE (whispering): It was under the machine.
55 A ¶ Ruskin takes it.
56 A Smiles.
57 A Pockets it.
58 D RUSKIN: Good girl.

### SCENE s01667 | INT. HOTEL BALLROOM - 24-HOUR TABLE TENNIS MARATHON - NIGHT
Detected names (may be incomplete or contain aliases): NORIKO ABE, DESMOND CRAWLEY
* 1 A ¶ Chandeliers dimmed to amber.
* 2 A One green table in the center of a vast parquet floor.
* 3 A Folding chairs along the walls, empty.
* 4 A A banner sagging between two columns: HOUR 19.
5 A ¶ NORIKO ABE, 40s, in a faded tracksuit with a sweatband, bounces the ball once off her paddle.
6 A DESMOND CRAWLEY, 50s, in bright orange shorts, stands across from her, red-faced, shoulders heaving.
* 7 A ¶ The scoreboard reads 10-10.
* 8 A A cardboard sign propped against it: SUDDEN DEATH.
9 D DESMOND (to the empty ballroom): Did everyone hear that? Ten-all!
* 10 A ¶ Nobody answers.
* 11 A A janitor's vacuum hums far away.
12 D NORIKO: Serve.
13 D DESMOND: I know it's my serve.
14 D NORIKO: Then serve.
15 D DESMOND: I'm gathering my thoughts.
16 D NORIKO: They've scattered.
17 A ¶ Desmond tosses the ball.
18 A Whacks it.
* 19 A It flies in a slow arc.
20 A Noriko returns, short, with a flick of the wrist.
21 A Desmond lunges, snaps a backhand over the net.
22 A Noriko leaps, smashes, and the ball cracks onto the table and into the dark, and Desmond, chasing it, goes down hard against a stack of chairs, which clatter across the floor like dropped cutlery while Noriko, arms raised, is already celebrating alone.
23 D NORIKO [CONT'D]: Point!
24 A ¶ Desmond sits up.
* 25 A Chairs are tangled around his legs.
26 D DESMOND: Out!
27 D NORIKO: It was on the line.
28 D DESMOND: It was off the line.
29 D NORIKO: It kissed the line.
30 D DESMOND (muttering): It kissed my dignity.
31 A ¶ He gets to his feet.
32 A Pulls a chair off his shin.
33 A Looks at the scoreboard.
* 34 A 11-10.
35 D DESMOND [CONT'D] (to the room): For the record, I'd like it noted that I was provoked.
36 D NORIKO: By what?
37 D DESMOND: By you existing.
38 A ¶ She smiles.
39 A It is the first smile of the night.
40 D NORIKO: Match point.
41 D DESMOND: Don't.
42 D NORIKO: Your serve.
43 D DESMOND (grim): Fine.
44 A ¶ He retrieves the ball from beneath a chair.
45 A Wipes it on his shorts.
46 A Steps to the end of the table.
47 A Stares at her, then at the ball, then at the chandelier.
48 D DESMOND [CONT'D] (to himself): Twenty-four hours. One ball. Two idiots.
49 A ¶ He serves.
50 A A looping, impossible spin.
51 A Noriko tracks it.
52 A Lifts her paddle.
53 A Misses by an inch.
* 54 A ¶ The ball bounces off the table.
* 55 A Drifts across the ballroom.
* 56 A Rolls to a stop at a vacuum cleaner's wheels.
* 57 A ¶ A long silence.
58 A They both stare at it.
59 D NORIKO: Eleven-eleven.
60 D DESMOND: It's a point for me!
61 D NORIKO: It's a point for you.
62 D DESMOND: It's eleven-eleven.
63 D NORIKO: You need two.
64 D DESMOND: I know that!
65 A ¶ He walks down the room to fetch the ball.
66 A His shoes squeak on the parquet.
67 A Behind him, Noriko sinks onto the edge of the table, rubs her wrist, and looks at the banner.
* 68 A HOUR 19.
69 A She counts silently on her fingers.
70 D NORIKO (under her breath): Five more hours.
71 A ¶ Desmond returns with the ball.
72 A He holds it up like a trophy.
73 D DESMOND: Found it.
74 D NORIKO: It didn't go far.
75 D DESMOND: Nothing in this room goes far.
76 A ¶ They look at each other.
77 A Both, slowly, start to laugh.
78 A Neither can stop.
79 A Desmond has to put the paddle down.
80 A Noriko wipes her eyes.
81 D NORIKO: Why are we here?
82 D DESMOND: For charity.
83 D NORIKO: Which one?
84 D DESMOND: I don't remember.
85 D NORIKO: Serve, Desmond.
86 D DESMOND (winded, grinning): Serving.
87 A ¶ He serves.
88 A She returns.
89 A They rally.
* 90 A It goes on and on, ball ticking over the net, the sound filling the ballroom like the beating of a patient heart, until neither of them is keeping score.

### SCENE s01668 | INT. PRISON VISITING ROOM - DAY
Detected names (may be incomplete or contain aliases): THEODORA MBEKI, WINSTON PRICE
* 1 A ¶ Gray tables bolted to the floor.
* 2 A A guard at the far door, unmoving.
* 3 A A vending machine humming in the corner.
* 4 A Fluorescent light with no shadow in it.
5 A ¶ THEODORA MBEKI, 40s, in a tailored charcoal suit, sits upright with a legal pad squared before her.
6 A She has not written anything on it.
7 A ¶ WINSTON PRICE, 60s, in prison-issue tan, enters.
8 A He sits across from her.
9 A His wrists are scarred where cuffs have been.
10 A His hands, flat on the table, are very still.
11 D THEODORA: Mr. Price.
12 D WINSTON: Ms. Mbeki.
13 D THEODORA: You look rested.
14 D WINSTON: I look like a man with nothing to do.
15 D THEODORA: The appeal has been filed.
16 D WINSTON: So I'm told.
17 D THEODORA: Do you have questions?
18 D WINSTON: Only one.
19 D THEODORA: Go ahead.
20 D WINSTON: If they let me out, where do I go?
21 A ¶ Theodora's pen stops above the pad.
22 D THEODORA: Home, I'd hope.
23 D WINSTON: There's nobody home.
24 D THEODORA: There's the house.
25 D WINSTON: Someone sold the house.
26 D THEODORA: It may be recoverable.
27 D WINSTON: It may.
* 28 A ¶ A long pause.
* 29 A The vending machine hums.
* 30 A A coin drops somewhere.
31 D THEODORA: Mr. Price, I'm going to be honest with you. The odds are one in three.
32 D WINSTON: That's better than I expected.
33 D THEODORA: It's worse than I'd like.
34 D WINSTON: You always say that.
35 D THEODORA: It's always true.
36 A ¶ Winston looks at her hands.
37 A At her wedding ring.
38 A At the way her thumb worries the cap of the pen.
39 D WINSTON: Your husband still in Cleveland?
40 D THEODORA: How did you know about Cleveland?
41 D WINSTON: You told me once.
42 D THEODORA: I don't tell clients where my husband lives.
43 D WINSTON: You told me. In the second year. You said it quietly, like you'd been meaning to for a while.
44 A ¶ Theodora puts down the pen.
45 A Folds her hands.
46 D THEODORA: He's in Cleveland.
47 D WINSTON: Good.
48 D THEODORA: Why is that good?
49 D WINSTON: Because one of us should have somebody waiting.
50 A ¶ She looks at him for a long moment.
51 A When she speaks, her voice is lower.
52 D THEODORA: Mr. Price, you will have somebody.
53 D WINSTON: Will I?
54 D THEODORA: You will have me. Until the day they open that gate.
55 A ¶ He nods, slowly.
56 A Almost smiles.
57 D WINSTON: That's good enough.
58 A ¶ The guard clears his throat.
59 A Theodora rises, gathers her legal pad, and, after a moment's hesitation, leaves a pen on the table.
60 D THEODORA: In case you think of something to write.
61 A ¶ She walks to the door.
62 A Does not look back.

### SCENE s01669 | INT. FIELD KITCHEN IN A BOMBED BREWERY - NIGHT
Detected names (may be incomplete or contain aliases): MAGNUSSEN, CORPORAL PETIT, WOJCIK, GREENE, DELACROIX
* 1 A ¶ Copper vats, split and blackened, loom in the dark like wrecked bells.
* 2 A A tarp stretched across a hole in the roof sags with rain.
* 3 A Sacks of flour stacked against a wall.
* 4 A A single iron stove glows red.
* 5 A The smell: cabbage, wet wool, old hops.
6 A ¶ MAGNUSSEN, 40s, a sergeant with a heavy gray mustache, ladles stew into tin mugs, one at a time, with exaggerated care.
7 A CORPORAL PETIT, 20s, a slight boy in a too-large helmet, sits on an upturned crate, cradling a tin plate.
8 A WOJCIK, 30s, a private with a broken front tooth, whittles a stick by the stove.
9 A GREENE, 20s, a radio operator, sits cross-legged by a silent set.
10 A DELACROIX, 30s, a medic with a stained armband, mends a sleeve with a curved needle.
* 11 A ¶ Nobody speaks for a long time.
* 12 A Rain on the tarp.
13 D MAGNUSSEN: Eat.
14 D PETIT: I'm not hungry.
15 D MAGNUSSEN: Eat anyway.
16 D PETIT: It's the cabbage.
17 D MAGNUSSEN: It's what we have.
18 D WOJCIK (not looking up): My mother would've cried at that stew.
19 D GREENE: From pride?
20 D WOJCIK: From shame.
21 A ¶ Delacroix snorts.
22 A The needle slips.
23 A She sucks her thumb, swears softly in French.
24 D DELACROIX: Pardon.
25 D MAGNUSSEN: No need.
26 D PETIT (quietly): What's that noise?
27 D MAGNUSSEN: What noise?
28 D PETIT: Under the rain. Like a drum.
29 A ¶ They all listen.
* 30 A A distant, regular thudding.
* 31 A Far off.
* 32 A Nearly a heartbeat.
33 D GREENE: Artillery.
34 D WOJCIK: Ours?
35 D GREENE: Doesn't matter.
36 D MAGNUSSEN: It matters.
37 D GREENE: It's three miles off.
38 D MAGNUSSEN: Then it's three miles off.
39 A ¶ He sets down the ladle.
40 A Wipes his hands.
41 A Takes his own mug and sits on a sack of flour.
* 42 A The stove ticks.
43 D WOJCIK: Sergeant.
44 D MAGNUSSEN: Mm.
45 D WOJCIK: Did this place make good beer?
46 D MAGNUSSEN: The best in the province.
47 D WOJCIK: How do you know?
48 D MAGNUSSEN: My father used to drink it.
49 D PETIT (overlapping): Did he --
50 D DELACROIX (overlapping): Is that why --
51 D GREENE (overlapping): Sergeant, is that why we --
52 D MAGNUSSEN (raising a hand): One at a time.
* 53 A ¶ A beat.
54 A Greene falls silent.
55 A Petit looks down.
56 A Delacroix threads her needle.
57 A Wojcik scrapes the stick.
58 D MAGNUSSEN [CONT'D]: It's why I asked to cook here.
* 59 A ¶ Silence.
* 60 A The rain intensifies.
* 61 A The tarp bellies and drips.
62 A ¶ Wojcik whittles.
* 63 A A curl of wood falls to the floor.
64 A He blows the dust from the stick, and holds it up: a tiny, crude beer mug.
65 A ¶ He sets it on the sack beside Magnussen.
66 A Magnussen looks at it.
67 A He doesn't say a thing.
68 A He picks it up, turns it in the light of the stove, and tucks it into his breast pocket.
* 69 A ¶ The distant thudding does not stop.
70 A Petit finishes his stew.

### SCENE s01670 | INT. FUNICULAR TICKET BOOTH - MORNING
Detected names (may be incomplete or contain aliases): ELOISE VANTERPOOL, DEZ, OKAFOR, PRUDENCE LAWSON, THADDEUS BRIGHT
* 1 A ¶ A glass booth no bigger than a closet, perched at the bottom of a steep hill railway.
* 2 A Brass fittings, a gentle hum of cable overhead.
3 A ¶ ELOISE VANTERPOOL (30s, soft-spoken, wearing a belted coat) stamps tickets one by one.
4 A Across the counter, DESMOND "DEZ" OKAFOR (30s, rumpled tweed, a paper bag of pastries) hovers.
5 D DEZ: Eloise, you have stamped that same ticket three times.
6 D ELOISE: Then it's very well stamped, Dez.
7 A ¶ He slides the bag through the slot.
8 A She peeks inside and smiles.
9 D DEZ: Apricot. Your favorite.
10 D ELOISE: You remembered.
11 D DEZ: I remember everything about you. Except where I left my umbrella.
* 12 A ¶ The booth door opens.
13 A PRUDENCE LAWSON (60s, silver bun, carrying a knitted bag) steps in, shaking the damp from her shoulders.
14 D PRUDENCE: Two for the summit, please. And don't let me interrupt.
15 D ELOISE: You aren't, Mrs. Lawson.
16 D DEZ: You aren't, Mrs. Lawson.
17 D PRUDENCE: Dear me. You two even speak alike.
18 A ¶ A tall man, THADDEUS BRIGHT (40s, conductor's cap), raps on the glass from outside.
19 D THADDEUS: Car's leaving, Prudence! Mind the step!
20 A ¶ Prudence waves, tucks her tickets away, and exits.
21 A Eloise and Dez watch the car rise.

### SCENE s01671 | INT. DRY DOCK PUMP ROOM - NIGHT
Detected names (may be incomplete or contain aliases): KOVAC, IRINA VESK
* 1 A ¶ Concrete.
* 2 A Sweating pipes.
* 3 A A single caged bulb.
4 A ¶ KOVAC (50s, heavy coat, never takes his hands from his pockets) sits on an upturned crate.
5 A ¶ IRINA VESK (40s, wet hair, steady eyes) stands by the door.
6 A Doesn't sit.
7 D KOVAC: You're late.
8 D IRINA: Traffic.
9 D KOVAC: There's no traffic at this hour.
10 D IRINA: Then I took the long way.
11 D KOVAC: Why?
12 D IRINA: Habit.
13 D KOVAC: Whose habit? Yours or his?
14 D IRINA: Whose do you think?
15 D KOVAC: I think you're still counting the exits.
16 D IRINA: Two. The door and the one behind you.
17 D KOVAC: Three. You forgot the grate.
18 D IRINA: I didn't forget it.
19 D KOVAC: Good. Then you know why I picked this room.
20 D IRINA: Because the water's loud.
21 D KOVAC: Because the water's loud. Nobody hears anything down here.
22 D IRINA: Nobody's supposed to.
23 D KOVAC: You brought it?
24 D IRINA: You brought the other half?
25 D KOVAC: I asked first.
26 D IRINA: And I'm still standing.
27 D KOVAC: That's not an answer.
28 D IRINA: It's the only one you get until I see yours.
29 D KOVAC: Fair.
30 D IRINA: Show me.
31 D KOVAC: Slowly, then.
32 D IRINA: Slowly.
33 D KOVAC: You first. Left hand.
34 D IRINA: Right hand. Always the right.
35 D KOVAC: You're not in charge here.
36 D IRINA: Neither are you.
* 37 A ¶ Somewhere above, a pump shudders on.
38 A Neither of them blinks.

### SCENE s01672 | INT. TAXIDERMY WORKSHOP - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR NELL BARROWMAN, CONSTABLE JUNO ADEYEMI, MARGUERITE HOLLIS, ALFRED PETTIGREW
* 1 A ¶ Glass eyes in trays.
* 2 A A stuffed heron.
* 3 A Dust in the skylight.
4 A ¶ INSPECTOR NELL BARROWMAN (40s, notebook) circles a workbench.
5 A Beside her, CONSTABLE JUNO ADEYEMI (20s) scribbles.
6 A ¶ Behind the counter, MARGUERITE HOLLIS (60s, leather apron) polishes a badger.
7 A ¶ At the back, ALFRED PETTIGREW (70s, cardigan) sits very still.
8 A A suspect, or furniture.
9 D MARGUERITE: Nobody touched the owl.
10 D NELL: Somebody did. The base is cracked.
11 D ALFRED: It was always cracked.
12 D JUNO: Sir, the report says --
13 D NELL: Juno. Later.
14 D MARGUERITE: She dropped it in March, Alfred.
15 D ALFRED: She did not. She said she did.
16 D NELL: Who is "she" now?
17 D MARGUERITE (over Nell): Her. The girl from the post office.
18 D ALFRED (over Marguerite): Nobody. There's no girl.
19 D JUNO: She told me there was a ledger.
20 A ¶ Nell lifts the heron's wing.
* 21 A A key glints in the feathers.

### SCENE s01673 | INT. ABANDONED CURLING RINK - DUSK
Detected names (may be incomplete or contain aliases): TOBIAS WREN, MIREILLE WREN, ANNOUNCER
* 1 A ¶ A vast barn of a building, its ice long since gone to a grey, cracked sheet.
* 2 A Rust-colored light pours through broken clerestory windows and lies in long bars across the floor.
* 3 A Hanging from the rafters, a faded banner reads PROVINCIAL CHAMPIONS 1987.
4 A ¶ TOBIAS WREN (60s, broad shoulders gone soft, a wool cap pulled low) kneels at the hack, one stone beside him.
5 A His hands, thick-knuckled and patient, rest on the handle as if on a sleeping animal's flank.
6 A ¶ Ten paces away stands his granddaughter, MIREILLE WREN (17, lean, wearing a team jacket two sizes too large).
7 A She holds a broom she does not seem to want.
* 8 A ¶ A radio crackles on a rusted bench.
* 9 A A tinny announcer's voice leaks out.
10 D ANNOUNCER [V.O.] (through radio): And the final end goes to Saskatoon, who take the national title.
11 A ¶ Tobias does not look at the radio.
12 A He sets the stone, and pushes.
* 13 A It slides, slow and crooked, and dies far short of the house.
14 D MIREILLE: You pulled it.
15 D TOBIAS: The ice is gone, that's all.
16 A ¶ She sweeps a few strokes anyway, out of habit, then stops.
17 D MIREILLE: Coach called. They filled my spot.
18 A ¶ Tobias nods, as if to himself.
19 A He wipes the handle with his sleeve, slowly, front and back.
20 D TOBIAS: Cold in here.
21 D MIREILLE: Yeah.
22 A ¶ Neither moves.
* 23 A Outside, a truck idles, waiting.
* 24 A Its horn gives a single polite tap.
25 A ¶ She lowers the broom to the floor, carefully, as one lays down a sleeping child.
26 A Then she walks toward the door.
27 A At the threshold she turns.
28 D MIREILLE: You coming?
29 A ¶ Tobias lifts the stone, studies it, and sets it upright on the bench beside the radio.
30 D TOBIAS: In a minute.
31 A ¶ She goes.
* 32 A The light on the floor dims one bar at a time.

### SCENE s01674 | INT. COLD STORAGE WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): RAFA, ZUNIGA, BEATRIX LUND, YUSUF KANDEMIR, OSEI MENSAH, LIV HARTWELL, DOMINIK VOSS
* 1 A ¶ Frost on steel racks.
* 2 A Breath fogs.
* 3 A A forklift sits idle.
4 A ¶ RAFAEL "RAFA" ZUNIGA (40s, crew chief) crouches beside a pallet of frozen tuna.
5 A Earpiece in.
6 A ¶ BEATRIX LUND (30s, safecracker) rolls a case across the floor.
7 A YUSUF KANDEMIR (20s, driver) leans on the forklift, eating an apple.
8 D RAFA: Thirty minutes. Guard rotation is clockwork.
9 D YUSUF: Always is, until it isn't.
10 D BEATRIX: Relax. Nobody's coming.
11 A ¶ Two more shapes move between the racks: OSEI MENSAH (50s, tech) and LIV HARTWELL (30s, inside woman, wearing a warehouse vest).
12 A They set a monitor on a pallet.
13 D OSEI: Cameras loop. Thirty seconds of clean footage, then it resets.
14 D LIV: My badge opens the vault door. After that, it's yours.
15 A ¶ Everybody breathes easier.
16 A Yusuf laughs.
17 A Rafa almost smiles.
* 18 A ¶ Then the lights snap on.
* 19 A Full white.
* 20 A A klaxon wails.
21 A ¶ DOMINIK VOSS (50s, security director, long coat) steps out from behind a rack with a pistol at his side.
22 A Four armed guards fan out behind him.
23 A ¶ Rafa, Beatrix, Yusuf, Osei and Liv freeze.
24 A Nobody moves.
25 D DOMINIK: Evening, everyone. Liv. Thank you for the invitation.
26 A ¶ Liv doesn't look at anyone.
27 A Beatrix lunges at her; Osei catches Beatrix by the arm.
28 A Yusuf drops the apple and bolts.
29 A The guards tackle him against the racks.
30 D RAFA: Liv. What did you do?
31 D LIV: What I had to.
32 A ¶ Dominik raises a hand.
* 33 A The klaxon stops.
* 34 A The only sound is Yusuf's ragged breathing and the hum of the freezers.

### SCENE s01675 | INT. FAMILY HOUSEBOAT - GALLEY - EVENING
Detected names (may be incomplete or contain aliases): HENRIKA DOLAN, PIETER DOLAN, ANNELIES, STRANGER, CASIMIR
* 1 A ¶ The houseboat rocks in a slow, patient rhythm against the canal wall.
* 2 A A copper lamp swings from a hook.
* 3 A Steam rises from a pot of lentils, fogging the small round window.
* 4 A Dinner is set for four on a table too small for it.
5 A ¶ HENRIKA DOLAN (60s, gray braid, forearms dusted with flour) ladles soup without looking up.
6 A Across from her sits her son, PIETER DOLAN (35, pressed shirt, a man who has practiced a speech in a mirror).
7 A Beside him, his wife ANNELIES (33, careful hands, folding and refolding a napkin).
* 8 A ¶ At the end of the table, an empty chair.
* 9 A A folded newspaper rests on its seat.
10 D HENRIKA: Eat while it's hot.
11 D PIETER: Mama, we need to talk about the boat.
12 D HENRIKA: We are talking. Over soup. It's the best way.
13 A ¶ Annelies lays her spoon down with exact quiet.
14 D ANNELIES: The buyer is serious, Henrika.
15 D HENRIKA: There is always a buyer. Last year there was a buyer.
16 D PIETER: Papa's been gone two years.
17 A ¶ Henrika's ladle stops.
* 18 A A single drop of soup falls and spreads on the cloth.
19 D HENRIKA: I know how long.
20 D PIETER: Then you know we can't keep paying for the mooring --
21 D HENRIKA: I know what we pay.
* 22 A ¶ A knock at the hull.
* 23 A The door opens.
24 A A STRANGER (40s, rain-soaked coat, a canvas satchel) stands on the gangway, hat in hand.
25 D STRANGER: Forgive me. I was told Anders Dolan lived here.
26 A ¶ Nobody breathes.
27 A Henrika sets the ladle down.
28 D HENRIKA: Who told you that?
29 D STRANGER: A man in Rotterdam. He said to bring this.
30 A ¶ He sets a brass compass on the table.
31 A Pieter stares at it.
32 A Annelies covers her mouth.
33 D HENRIKA: Where did you get that?
34 D STRANGER: My name is Casimir Rooke. Your husband sailed with me, ma'am. Eleven years ago, off Terschelling.
35 D PIETER: Eleven years? He was home eleven years ago.
36 D CASIMIR: Was he?
37 A ¶ Henrika walks to the window and presses her palm to the cold glass.
* 38 A The lamp keeps swinging.
39 D HENRIKA (low): Sit down, Mr. Rooke. Annelies, a bowl.
40 D PIETER: Mama, no. Not now.
41 D HENRIKA: Pieter, hush.
42 D PIETER: You don't even know who he is!
43 A ¶ He stands so fast his chair crashes backward.
* 44 A The soup trembles in its pot.
45 D PIETER [CONT'D]: Two years! Two years you let us believe he drowned clean!
46 D HENRIKA: Sit down.
47 D PIETER: I will not sit down in his house, with his stranger, eating his lentils!
48 A ¶ Annelies reaches for his sleeve.
49 A He shakes her off.
50 A Casimir sets the satchel on the floor and does not move, a man who has walked into a fire he cannot put out.
51 D CASIMIR: He asked me to tell you he was sorry.
52 A ¶ Henrika turns.
* 53 A For a long moment, only the water speaks against the hull.

### SCENE s01676 | INT. ORBITAL GREENHOUSE RING - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA QUILL, HIRO TANABE, ENSIGN PELL OKONKWO, MARIGOLD SENN, BARNABY CROSS, UNIT SEVEN
* 1 A ¶ A curved corridor of hydroponic racks, lit violet.
* 2 A Vines trail from brackets.
* 3 A Condensation drips from the ceiling in slow, floating beads.
4 A ¶ CAPTAIN ISADORA QUILL (50s, severe, silver crop) grips a handrail.
5 A Behind her, DR. HIRO TANABE (40s, lab coat), ENSIGN PELL OKONKWO (20s), and the ring's botanist, MARIGOLD SENN (30s, soil-stained gloves), crowd the hatch.
6 A At the far end, the old engineer BARNABY CROSS (60s) and a maintenance bot, UNIT SEVEN, stand beside a red warning light.
7 D ISADORA: Status.
8 D HIRO: Spore bloom in Racks Four through Nine --
9 D MARIGOLD: It's not a bloom, it's a --
10 D PELL: Captain, the seal on Nine is --
11 D ISADORA: One at a time!
12 D BARNABY: Seal's gone. Nine's venting.
13 D UNIT SEVEN (synthetic): Atmospheric loss at six percent and climbing.
14 D HIRO: We have minutes.
15 D MARIGOLD: Less if the roots reach the coolant.
16 D PELL: Then we cut Nine loose!
17 D ISADORA: Do it.
18 A ¶ Barnaby slams a lever.
* 19 A The red light dies.
20 A Everyone exhales together.

### SCENE s01677 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): CORA BELLAMY, WANDA BELLAMY
* 1 A ¶ Fluorescent hum.
* 2 A Dryers turning.
3 A ¶ CORA BELLAMY (40s, scrubs, tired) folds towels.
4 A Precisely.
5 A Corners aligned.
6 A ¶ Her sister, WANDA BELLAMY (40s, leather jacket), sits on a washer, swinging a boot.
7 D WANDA: Nice night.
8 D CORA: It's one a.m.
9 D WANDA: Still nice.
10 A ¶ Cora folds.
11 A Wanda watches.
12 D WANDA [CONT'D]: Mom called.
13 D CORA: Did she.
14 D WANDA: Said you hung up on her.
15 D CORA: She said I hung up on her.
16 D WANDA: She said she was sorry, too.
17 D CORA: She said that?
18 D WANDA: Not in words.
19 A ¶ Cora sets a towel down.
20 A Squares it.
21 D CORA: Why are you here, Wanda?
22 D WANDA: She asked me to tell you something.
23 D CORA: Then tell me.
24 D WANDA: She sold the house. She sold it last week. She's moving to Tucson.
* 25 A ¶ The dryer buzzes.
26 A Neither of them moves.
27 D CORA: Without telling me.
28 D WANDA: Without telling either of us. I found out at the bank.
29 A ¶ Cora picks up the next towel.
30 A Her hands shake.
31 A She folds it anyway.
